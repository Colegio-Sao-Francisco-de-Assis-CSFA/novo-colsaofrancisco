import { Card } from "flowbite-react";
interface News {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string | null;
  name_category: string;
  color_category: string;
  href: string;
}

export default function News() {

  const news = [
      {
        id: 1,
        image: '/images/courses/finais.webp',
        title: 'Novo curso de programação é lançado!',
        description: 'O novo curso de programação oferece uma introdução a várias linguagens de codificação, com foco em JavaScript e Python.',
        category_color: 'bg-blue-500',
        name_category: 'Tecnologia',
        date: '06/01/2025',
        href: 'https://instagram.com'
      },
      {
        id: 2,
        image: '/images/courses/medio.webp',
        title: 'Design Gráfico: Como criar logos impactantes',
        description: 'Aprenda as melhores técnicas para criar logos que realmente comunicam a identidade de uma marca de maneira eficaz e criativa.',
        category_color: 'bg-green-500',
        name_category: 'Design',
        date: '03/08/2024',
        href: 'https://github.com'
      },
      {
        id: 3,
        image: '/images/courses/infantil.webp',
        title: 'Marketing Digital para iniciantes',
        description: 'Entenda os principais conceitos de marketing digital e como aplicá-los para aumentar a visibilidade do seu negócio online.',
        category_color: 'bg-red-500',
        name_category: 'Marketing',
        date: '27/10/2024',
        href: 'https://youtube.com'
      }
  ];
  return (
      <>
        {
          news.map((item) => (
            <div key={`news-card-${item.id}`} className="w-full max-w-7xl h-full flex flex-wrap gap-6 p-2">
              <Card
                href={item.href}
                className='w-full max-w-96 h-full max-h-[600px] bg-white border border-slate-700/10 p-2 overflow-hidden'
                imgAlt={`Imagem da notícia: ${item.title}`}
                imgSrc={item.image || "/images/courses/covernaoencontrado.webp"}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <p className="font-normal text-gray-700">
                  {item.description}
                </p>
                <footer className="w-full flex justify-between items-center pt-2">
                  <div className="w-full flex gap-2">
                    <div
                      className={`rounded-full inline-block px-4 p-1.5 text-white text-[.8rem] font-medium ${item.category_color}`}>
                      {item.name_category}
                    </div>
                  </div>
                  <p className="text-[.8rem] text-gray-500 font-medium">{item.date}</p>
                </footer>
              </Card>
            </div>
          ))
        }
      </>
      
  );
}