
"use client";

import { Card } from "flowbite-react";

export default function News() {

  return (
    <section className="w-dvw h-dvh flex justify-center items-center space-x-4 p-6">

        <Card
            href="https://instagram.com"
            title="news"
            className="w-[380px]"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/courses/finais.webp"
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <footer className="w-full flex justify-between items-center pt-2">
                <div className="w-full flex gap-2">
                    <div className="rounded-full inline-block px-4 p-1.5 text-white text-sm font-medium bg-green-600 w-auto">Categoria</div>
                    <div className="rounded-full inline-block px-4 p-1.5 text-white text-sm font-medium bg-purple-600 w-auto">Categoria</div>
                </div>
                <p className="antialiased text-sm text-slate-800" >09/11/2024</p>
            </footer>
        </Card> 

        <Card
            className="w-[380px]"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/courses/finais.webp"
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <footer className="w-full flex justify-between items-center pt-2">
                <div className="w-full flex gap-2">
                    <div className="rounded-full inline-block px-4 p-1.5 text-white text-sm font-medium bg-green-600 w-auto">Categoria</div>
                    <div className="rounded-full inline-block px-4 p-1.5 text-white text-sm font-medium bg-purple-600 w-auto">Categoria</div>
                </div>
                <p className="antialiased text-sm text-slate-800" >09/11/2024</p>
            </footer>
        </Card>

        <Card
            className="w-[380px]"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/courses/finais.webp"
            >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <footer className="w-full flex justify-between items-center pt-2">
                <div className="w-full flex gap-2">
                    <div className="rounded-full inline-block px-4 p-1.5 text-white text-sm font-medium bg-green-600 w-auto">Categoria</div>
                    <div className="rounded-full inline-block px-4 p-1.5 text-white text-sm font-medium bg-purple-600 w-auto">Categoria</div>
                </div>
                <p className="antialiased text-sm text-slate-800" >09/11/2024</p>
            </footer>
        </Card>

    </section>
  );
}
