import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/db';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDatabase();

  switch (req.method) {
    case 'GET': {
      const banners = await db.query('SELECT * FROM banners');
      return res.status(200).json(banners);
    }
    case 'POST': {
      const { title, image } = req.body;
      await db.query('INSERT INTO banners (title, image) VALUES (?, ?)', [title, image]);
      return res.status(201).json({ message: 'Banner criado com sucesso' });
    }
    // Outros métodos (PUT, DELETE) seguem o mesmo padrão...
  }
}
