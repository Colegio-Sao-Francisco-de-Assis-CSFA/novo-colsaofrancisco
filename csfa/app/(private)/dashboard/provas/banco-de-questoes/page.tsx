import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const QuestionBankPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('Públicas');
  const [selectedGrade, setSelectedGrade] = useState<string[]>([]);

  const totalQuestions = 162763;

  const TagButton = ({ children, active = false, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm ${
        active ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
      } hover:bg-blue-200 transition-colors`}
    >
      {children}
    </button>
  );

  const QuestionCard = () => (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <input type="checkbox" className="mt-1" />
        <div className="flex gap-2 flex-wrap ml-4">
          <span className="px-2 py-1 bg-yellow-100 rounded text-sm">Médio</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm">Pública</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm">Ensino Médio</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm">3ª Série</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm">Geografia</span>
          <span className="px-2 py-1 bg-blue-100 rounded text-sm">+4</span>
        </div>
      </div>

      <div className="ml-8">
        <p className="text-sm mb-2">(ESPM 2024)</p>
        <p className="mb-4 text-gray-800">O primeiro impulso industrial brasileiro veio com a Primeira Guerra Mundial. Até então o Brasil era quase que exclusivamente importador de gêneros industrializados e já contava com uma elite oligárquica dependente da importação desses produtos. Com a guerra, a fonte exportadora cessou repentinamente. A suspensão das importações forçou o surgimento de indústrias locais para preencher a lacuna que se abria.</p>
        <p className="text-sm text-gray-600">Fonte – Geografia em Rede. São Paulo, FTD, 2018.</p>
        <p className="mt-4 text-gray-700">Esse processo industrial ficou conhecido com o nome de:</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Filtrar questões</h2>
                <Filter className="w-5 h-5 text-gray-500" />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Origem das questões</h3>
                  <div className="flex gap-2">
                    <TagButton active={selectedOrigin === 'Públicas'} onClick={() => setSelectedOrigin('Públicas')}>
                      Públicas
                    </TagButton>
                    <TagButton active={selectedOrigin === 'SAS'} onClick={() => setSelectedOrigin('SAS')}>
                      SAS
                    </TagButton>
                    <TagButton active={selectedOrigin === 'Minhas'} onClick={() => setSelectedOrigin('Minhas')}>
                      Minhas
                    </TagButton>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Nível de Ensino</h3>
                  <div className="flex flex-wrap gap-2">
                    <TagButton>Anos Iniciais</TagButton>
                    <TagButton>Anos Finais</TagButton>
                    <TagButton>Ensino Médio</TagButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquise por disciplina, assunto ou palavra-chave"
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">
                Encontradas <span className="font-medium">{totalQuestions}</span> questões
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">1-10 de {totalQuestions}</span>
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <QuestionCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankPage;