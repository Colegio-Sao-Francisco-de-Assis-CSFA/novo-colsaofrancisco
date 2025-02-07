"use client";

import React, { useState } from 'react';
import { Search, Trash2, MoreHorizontal, ArrowLeft } from 'lucide-react';
import Link  from 'next/link';

const ProvasEscolares = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const mockData = [
        {
            name: 'Prova Teste',
            questions: 5,
            createdBy: {
                name: 'CLOVES RODRIGUES DE SOUZA NETO',
                role: 'Coordenador'
            },
            createdAt: '06/02/2025 17:05:40',
            status: 'Rascunho'
        },
        {
            name: 'Avaliação diagnóstica',
            questions: 5,
            createdBy: {
                name: 'Cristiano GARCIA DE OLIVEIRA SANTOS',
                role: 'Professor'
            },
            createdAt: '23/01/2025 14:51:14',
            status: 'Aguardando cartões'
        },
        {
            name: 'Prova',
            questions: 5,
            createdBy: {
                name: 'Eduardo Rodrigues Righette Green',
                role: 'Professor'
            },
            createdAt: '22/01/2025 14:49:25',
            status: 'Rascunho'
        }
    ];

    return (
        <div className="flex flex-col p-6 mt-20 justify-center">
            {/* Navigation */}
            <div className="flex items-center gap-2 text-sm mb-6">
                <Link href="/dashboard" className="text-blue-600 hover:underline flex items-center gap-1">
                    <ArrowLeft className="w-4 h-4" />
                    Página Inicial
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/dashboard/avaliacoes" className="text-blue-600 hover:underline">
                    Avaliações
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600">Provas</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Provas escolares</h1>
                    <p className="text-gray-600">Gerencie provas criadas para sua escola.</p>
                </div>

                <Link href={"/dashboard/listagem-provas/criar-prova"} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Criar prova</Link>
                
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="w-full px-4 py-2 pl-10 border rounded-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                {searchQuery && (
                    <button
                        className="absolute right-3 top-2.5 text-gray-400"
                        onClick={() => setSearchQuery('')}
                    >
                        ×
                    </button>
                )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium">Nome da prova</th>
                            <th className="text-left py-3 px-4 font-medium">Questões</th>
                            <th className="text-left py-3 px-4 font-medium">Criado por</th>
                            <th className="text-left py-3 px-4 font-medium">Criada em</th>
                            <th className="text-left py-3 px-4 font-medium">Status</th>
                            <th className="w-10"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockData.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">{item.name}</td>
                                <td className="py-3 px-4">{item.questions}</td>
                                <td className="py-3 px-4">
                                    <div>
                                        <div>{item.createdBy.name}</div>
                                        <div className="text-sm text-gray-500">{item.createdBy.role}</div>
                                    </div>
                                </td>
                                <td className="py-3 px-4">{item.createdAt}</td>
                                <td className="py-3 px-4">
                                    <span className={`flex items-center gap-2 ${item.status === 'Aguardando cartões' ? 'text-blue-600' : 'text-gray-500'
                                        }`}>
                                        <span className="w-2 h-2 rounded-full bg-current"></span>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4">
                                    {item.status === 'Rascunho' ? (
                                        <button className="text-red-500 hover:text-red-700">
                                            <span className='hidden'>null</span>
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    ) : (
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <span className='hidden'>null</span>
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProvasEscolares;