"use client";

import React, { useState } from 'react';
import { ChevronDown, Filter, ChevronRight } from 'lucide-react';

export default function  BancoQuestoes(){

    const [selectedFilters, setSelectedFilters] = useState({
        origem: 'Públicas',
        nivelEnsino: [],
        anoSerie: '',
        disciplina: '',
        conteudo: '',
        tipo: ''
    });

    const mockQuestion = {
        tags: ['Médio', 'Pública', 'Ensino Médio', '3ª Série', 'Português'],
        additionalTags: 4,
        title: '(ENEM 2024)',
        content: 'Em novembro de 2023, uma professora indígena recebeu uma missão: verter as regras de um jogo de tabuleiro infantil do português para o tukano, sua língua nativa. Com vinte anos de experiência como professora de línguas em Taracuá, no Amazonas, ela já se dedicava à tradução havia tempos. O trabalho ficou mais fácil graças a um aplicativo lançado no ano anterior: com o Linklado em seu computador, ela traduziu as sete páginas das instruções do jogo em dois dias.',
        name: 'Teclado amazônico'
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar Filters */}
            <div className="w-64 border-r p-4 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-medium">Filtrar questões</h2>
                    <button className="p-1 hover:bg-gray-100 rounded">
                        <span className='hidden'>null</span>
                        <Filter className="w-4 h-4" />
                    </button>
                </div>

                {/* Origin Filter */}
                <div className="mb-6">
                    <h3 className="text-sm mb-2">Origem das questões</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Públicas', 'SAS', 'Minhas'].map(origin => (
                            <button
                                key={origin}
                                className={`px-3 py-1 rounded-full text-sm ${selectedFilters.origem === origin
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'bg-gray-100 text-gray-600'
                                    }`}
                            >
                                {origin}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Other Filter Sections */}
                {[
                    { title: 'Nível de Ensino', options: ['Anos Iniciais', 'Anos Finais', 'Ensino Médio'] },
                    {
                        title: 'Ano/Série', component:
                            <button className="w-full px-3 py-2 text-left text-gray-400 bg-gray-50 rounded flex justify-between items-center">
                                Ano e Série <ChevronDown className="w-4 h-4" />
                            </button>
                    },
                    {
                        title: 'Disciplina', component:
                            <button className="w-full px-3 py-2 text-left text-gray-400 bg-gray-50 rounded flex justify-between items-center">
                                Escolher disciplina <ChevronDown className="w-4 h-4" />
                            </button>
                    },
                    {
                        title: 'Conteúdo da questão', component:
                            <button className="w-full px-3 py-2 text-left text-gray-400 bg-gray-50 rounded flex justify-between items-center">
                                Escolher assunto <ChevronDown className="w-4 h-4" />
                            </button>
                    },
                    {
                        title: 'Tipo de Questão', component:
                            <button className="w-full px-3 py-2 text-left text-gray-400 bg-gray-50 rounded flex justify-between items-center">
                                Opção <ChevronDown className="w-4 h-4" />
                            </button>
                    }
                ].map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-sm mb-2">{section.title}</h3>
                        {section.component || (
                            <div className="flex flex-wrap gap-2">
                                {section.options.map(option => (
                                    <button
                                        key={option}
                                        className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Banco de Questões</h1>
                    <button className="text-gray-600 flex items-center gap-1">
                        Mostrar mais <ChevronDown className="w-4 h-4" />
                    </button>
                </div>

                {/* Question Card */}
                <div className="border rounded-lg p-6 mb-4">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-wrap gap-2">
                            <label htmlFor="checkedItem" className="hidden">checkedItem</label>
                            <input id="checkedItem" type="checkbox" className="mt-1" />
                            {mockQuestion.tags.map((tag, index) => (
                                <span key={index} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                                    {tag}
                                </span>
                            ))}
                            <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600">
                                +{mockQuestion.additionalTags}
                            </span>
                        </div>
                        <button className="text-gray-600">
                            Mostrar mais <ChevronDown className="w-4 h-4 inline" />
                        </button>
                    </div>
                    <h3 className="font-bold mb-2">{mockQuestion.title}</h3>
                    <p className="text-gray-600 mb-4">{mockQuestion.content}</p>
                    <h4 className="font-medium">{mockQuestion.name}</h4>
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-6">
                    <button className="p-2 text-gray-400">
                        <span className='hidden'>null</span>
                        <ChevronRight className="w-4 h-4 rotate-180" />
                    </button>
                    {[1, 2, 3, 4, 5].map(num => (
                        <button
                            key={num}
                            className={`w-8 h-8 rounded ${num === 1 ? 'bg-gray-200' : 'hover:bg-gray-100'
                                }`}
                        >
                            {num}
                        </button>
                    ))}
                    <span className="p-2">...</span>
                    <button className="w-8 h-8 rounded hover:bg-gray-100">16958</button>
                    <button className="p-2 text-gray-400">
                        <span className='hidden'>null</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};