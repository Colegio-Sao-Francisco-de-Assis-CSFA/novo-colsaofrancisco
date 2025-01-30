import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import csvParser from 'csv-parser';
import fs from 'fs';
import { prisma } from '../../../lib/prisma/prisma';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { Request, Response } from 'express';

// Extend NextAuth Session type to include user properties
interface CustomSession extends Session {
  user: {
    setor?: string;
    email?: string | null;
    nome?: string | null;
  }
}

// Type for CSV row data
interface UserCSVData {
  nome: string;
  email: string;
  setor: string;
}

// Extended Request to include file from multer
interface MulterRequest extends Request {
  file: Express.Multer.File;
}

const upload = multer({ dest: 'uploads/' });

// Custom promisify function for multer middleware
const multerPromise = (req: NextApiRequest & MulterRequest, res: NextApiResponse) => {
  return new Promise<void>((resolve, reject) => {
    const multerSingle = upload.single('file');
    multerSingle(
      req as unknown as Request, 
      res as unknown as Response<any, Record<string, any>>, 
      (error: any) => {
        if (error) {
          reject(error);
        }
        resolve();
      }
    );
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const session = await getSession({ req }) as CustomSession | null;

    if (!session || session.user.setor !== 'Informática' || "Admin") {
      return res.status(403).json({ message: 'Acesso não autorizado. Somente administradores podem cadastrar usuários.' });
    }

    try {
      await multerPromise(req as NextApiRequest & MulterRequest, res);
      
      const filePath = (req as unknown as MulterRequest).file.path;
      const users: UserCSVData[] = [];

      const stream = fs.createReadStream(filePath)
        .pipe(csvParser());

      for await (const row of stream) {
        users.push(row as UserCSVData);
      }

      try {
        const createPromises = users.map((user: UserCSVData) => {
          return prisma.usuario.create({
            data: {
              nome: user.nome,
              email: user.email,
              setor: user.setor,
            },
          });
        });

        await Promise.all(createPromises);
        res.status(200).json({ success: true, message: 'Usuários cadastrados com sucesso!' });
      } catch (error) {
        res.status(500).json({ 
          message: 'Erro ao cadastrar usuários.', 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      } finally {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro no upload do arquivo.', error });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;