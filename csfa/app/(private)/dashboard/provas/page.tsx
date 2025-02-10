import React from 'react';
import Link from 'next/link';

const Provas = () => {
  return (
    <main className="p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Avaliações</h1>
        <Link href={"/dashboard/provas/criar-questao"} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Criar prova
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* School Tests Card */}
        <Link
          href="/dashboard/provas/banco-de-provas"
          className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Provas escolares</h2>
          <p className="text-gray-600">
            Gerencie provas criadas para sua escola.
          </p>
        </Link>

        {/* Question Bank Card */}
        <Link
          href="/dashboard/provas/banco-de-questoes"
          className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.5 16.5v-9l7 4.5-7 4.5z" />
              <path d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9zm-18 0c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Banco de Questões</h2>
          <p className="text-gray-600">
            Encontre questões criadas pelo CFSA Educação ou por você para baixar rapidamente.
          </p>
        </Link>

      </div>
    </main>
  );
};

export default Provas;