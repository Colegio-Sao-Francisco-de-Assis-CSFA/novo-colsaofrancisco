"use client";

import { ArrowLeft, Search, Download, Plus, Check } from 'lucide-react';
import Link from 'next/link';
import EditarQuestoes from '@/components/apadges/CriarProva/EditarQuestoes';
import ImportarQuestoes from '@/components/apadges/CriarProva/ImportarQuestoes';
import { useState } from 'react';

export default function CriarProvaPage() {


  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/provas-escolares" className="text-gray-600">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-medium">Criar </h1>
          </div>
          
          {/* Stepper */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-green-500">Informações básicas</span>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
                2
              </div>
              <span className="text-blue-500">Questões</span>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                3
              </div>
              <span className="text-gray-500">Agendar</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-2">Questões</h2>
          <p className="text-gray-600">Adicione questões para montar sua prova.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Question Bank Card */}
          <Link
            href="/dashboard/banco-questoes"
            className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-blue-700">Usar Banco de Questões</h3>
            <p className="text-gray-600">
              Encontre questões prontas de diversos níveis de ensino.
            </p>
          </Link>

          

          {/* Create Question Card */}
          <Link
            href="/dashboard/criar-questao"
            className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-blue-700">Criar questão</h3>
            <p className="text-gray-600">
              Desenvolva suas próprias questões personalizadas.
            </p>
          </Link>

          {/* Import Questions Card */}
          <button
            type='button'
            className="cursor-not-allowed bg-gray-100 p-6 rounded-lg border relative"
          >
            <span className="absolute right-2 top-2 bg-blue-100 border-2 border-blue-00 text-blue-700 p-2 px-4 rounded-full">Em breve</span>

            <div className="w-12 h-12 border border-gray-500 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-gray-500" />
            </div>
            <h3 className="text-lg text-start font-medium mb-2">Importar questões</h3>
            <p className="text-gray-600 text-start">
              Traga suas questões criadas de outros lugares.
            </p>
          </button>
        </div>

      </main>
    </div>
  );
}