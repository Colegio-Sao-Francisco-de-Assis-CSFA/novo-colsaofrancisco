'use client';

import { useState } from 'react';

export default function QuestionEditor() {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="font-medium mb-4">Comando da questão</h3>
      <div className="border rounded-lg mb-6">
        <div className="border-b p-2">
          {/* Add rich text editor toolbar here */}
          <div className="flex gap-2">
            {/* Add toolbar buttons */}
          </div>
        </div>
        <div className="p-4 min-h-[200px]">
          {/* Add rich text editor content area */}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-4">Tipo de questão</h3>
        <div className="space-y-4">
          <label className="flex items-start gap-2">
            <input type="radio" name="questionType" className="mt-1" />
            <div>
              <div className="font-medium">Múltipla escolha</div>
              <div className="text-sm text-gray-500">Selecione uma alternativa correta</div>
            </div>
          </label>
          {/* Add other question types */}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-4">Classificações</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor='Nivel' className="text-sm text-gray-600 mb-1 block">Nível de ensino</label>
            <select id='Nivel' className="w-full border rounded-md p-2">
              <option>Selecione uma opção</option>
            </select>
          </div>
          <div>
            <label htmlFor='Serie' className="text-sm text-gray-600 mb-1 block">Série</label>
            <select id='Serie' className="w-full border rounded-md p-2">
              <option>Selecione uma opção</option>
            </select>
          </div>
          <div>
            <label htmlFor='Disciplina' className="text-sm text-gray-600 mb-1 block">Disciplina</label>
            <select id='Disciplina' className="w-full border rounded-md p-2">
              <option>Selecione uma opção</option>
            </select>
          </div>
          <div>
            <label htmlFor='Conteudo' className="text-sm text-gray-600 mb-1 block">Conteúdo</label>
            <select id='Conteudo' className="w-full border rounded-md p-2">
              <option>Selecione uma opção</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}