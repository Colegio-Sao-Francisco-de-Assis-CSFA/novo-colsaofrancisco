"use client";

import React from 'react';
import Link from 'next/link';
import { Boxes, FilePlus2, FileStack } from 'lucide-react';


const Provas = () => {
  return (
    <main className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Avaliações</h1>
        <Link
          href={"/dashboard/provas/criar-prova"}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Criar prova
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Provas Escolares */}
        <Link
          href="/dashboard/provas/criar-prova"
          className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <FilePlus2 className='text-blue-600'/>
          </div>
          <h2 className="text-xl font-semibold mb-2">Criar Prova</h2>
          <p className="text-gray-600">
            Comece criando uma nova prova ou escolha questões prontas.
          </p>
        </Link>

        {/* Banco de provas */}
        <Link
          href="/dashboard/provas/banco-de-provas"
          className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <FileStack className='text-blue-600'/>
          </div>
          <h2 className="text-xl font-semibold mb-2">Banco de Provas</h2>
          <p className="text-gray-600">
            Explore e selecione modelos de provas prontas para baixar e aplicar.
          </p>
        </Link>

        {/* Banco de Questões */}
        <Link
          href="/dashboard/provas/banco-de-questoes"
          className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Boxes className='text-blue-600'/>
          </div>
          <h2 className="text-xl font-semibold mb-2">Banco de Questões</h2>
          <p className="text-gray-600">
            Explore e selecione questões prontas para montar sua prova.
          </p>
        </Link>
      </div>
    </main>
  );
};

export default Provas;
