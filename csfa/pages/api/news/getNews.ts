import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../utils/db';

interface News {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string | null;
  nome_category: string;
  color_category: string;
}

export default async function GetNews(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "GET") {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
  }

  try {
    const news: News[] = await pool('news')
      .join('category', 'news.category_id', '=', 'category.id')
      .select(
        'news.id',
        'news.title',
        'news.description',
        'news.date',
        'news.image',
        'category.nome_category',
        'category.color_category'
      )
      .orderBy('news.date', 'desc'); // Ordenar por data, mais recentes primeiro

    // Validar e formatar os dados antes de enviar
    const formattedNews = news.map(item => ({
      ...item,
      id: Number(item.id), // Garantir que o ID seja número
      date: new Date(item.date).toISOString().split('T')[0], // Formatar data
      image: item.image || null, // Garantir que image seja string ou null
    }));

    res.status(200).json(formattedNews);
    
  } catch (error: any) {
    console.error('Erro ao buscar notícias:', error);
    
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Erro interno ao buscar notícias';
    
    res.status(500).json({ 
      error: errorMessage,
      timestamp: new Date().toISOString()
    });
  }
}