"use client";

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

interface News {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string | null;
  nome_category: string;
  color_category: string;
}

export default function News() {
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news/getNews');
        if (!response.ok) {
          throw new Error("Erro ao buscar notícias");
        }
        const data: News[] = await response.json();
        setNews(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="w-full text-center">Carregando notícias...</div>;
  }

  if (error) {
    return <div className="w-full text-center text-red-500">{error}</div>;
  }

  return (
    <section className="w-full min-h-screen flex flex-wrap justify-center items-start gap-4 p-6">
      {news && news.length > 0 ? (
        news.map((item) => (
          <div key={`news-card-${item.id}`} className="flex">
            <Card
              href="https://instagram.com"
              className="w-[380px]"
              imgAlt={`Imagem da notícia: ${item.title}`}
              imgSrc={item.image || "/images/courses/finais.webp"}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <footer className="w-full flex justify-between items-center pt-2">
                <div className="w-full flex gap-2">
                  <div
                    className="rounded-full inline-block px-4 p-1.5 text-white text-sm font-medium"
                    style={{ backgroundColor: item.color_category }}
                  >
                    {item.nome_category}
                  </div>
                </div>
                <p className="antialiased text-sm text-slate-800">{item.date}</p>
              </footer>
            </Card>
          </div>
        ))
      ) : (
        <div className="text-center">Nenhuma notícia encontrada</div>
      )}
    </section>
  );
}