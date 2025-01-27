import { handleCallback, Session } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../utils/db';
import { RowDataPacket } from 'mysql2';

export default handleCallback({
  async afterCallback(req: NextApiRequest, res: NextApiResponse, session: Session) {
    if (!session?.user?.email) {
      res.redirect('/api/auth/login');
      return undefined;
    }

    const db = await connectToDatabase();

    try {
      const [rows] = await db.execute<RowDataPacket[]>('SELECT * FROM usuario WHERE email = ?', [session.user.email]);

      if (!rows[0]) {
        res.redirect('/403');
        return session;
      }

      const usuario = rows[0];
      const setor = usuario.setor;

      if (setor === 'administrativo') {
        res.redirect('/dashboard/administrativo');
      } else if (setor === 'designer') {
        res.redirect('/dashboard/designer');
      } else if (setor === 'professor') {
        res.redirect('/dashboard/professor');
      } else {
        res.redirect('/403');
      }

      return session;
    } catch (error) {
      console.error('Erro ao verificar o email no banco:', error);
      res.redirect('/api/auth/login');
      return undefined;
    }
  }
});
