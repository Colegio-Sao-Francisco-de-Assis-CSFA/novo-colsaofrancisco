"use client";

import React, { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import fetchQuestoes from "./severAction";

// Função do lado do servidor para buscar questões


const QuestionBankPage = () => {
  // Estados usados no componente
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("Públicas");
  const [selectedGrade, setSelectedGrade] = useState<string[]>([]);
  const [questoes, setQuestoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10; // Define o número de questões por página

  // Função para carregar as questões
  const loadQuestoes = async () => {
    setLoading(true);
    try {
      const filters = {
        searchQuery,
        origin: selectedOrigin,
        grade: selectedGrade.join(","), // Converte array em string para envio ao servidor
        page: currentPage,
        limit: itemsPerPage,
      };
      const data = await fetchQuestoes(filters);
      setQuestoes(data);
    } catch (error) {
      console.error("Erro ao carregar questões:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect para carregar as questões ao montar o componente e ao alterar os filtros
  useEffect(() => {
    loadQuestoes();
  }, [searchQuery, selectedOrigin, selectedGrade, currentPage]);

  // Função para alternar seleção de séries/níveis
  const toggleGradeSelection = (grade: string) => {
    setSelectedGrade((prev) =>
      prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]
    );
  };

  // Componente para renderizar botões de "tags"
  const TagButton = ({
    children,
    active = false,
    onClick,
  }: {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm ${
        active ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
      } hover:bg-blue-200 transition-colors`}
    >
      {children}
    </button>
  );

  // Componente para renderizar cada questão
  const QuestionCard = ({ questao }: { questao: any }) => (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <input type="checkbox" id={`checkbox-${questao.id}`} className="mt-1" />
        <label htmlFor={`checkbox-${questao.id}`} className="sr-only">
          Selecionar questão
        </label>
        <div className="flex gap-2 flex-wrap ml-4">
          <span className="px-2 py-1 bg-yellow-100 rounded text-sm">
            {questao.nivel}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm">
            {questao.category}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm">
            {questao.disciplina}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm">
            {questao.ano}
          </span>
          <span className="px-2 py-1 bg-blue-100 rounded text-sm">
            {questao.dificuldade}
          </span>
        </div>
      </div>
      <div className="ml-8">
        <p className="text-sm mb-2">{questao.nome}</p>
        <p className="mb-4 text-gray-800">{questao.enunciado}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar de Filtros */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Filtrar questões</h2>
                <Filter className="w-5 h-5 text-gray-500" />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Origem</h3>
                  <div className="flex gap-2">
                    <TagButton
                      active={selectedOrigin === "Públicas"}
                      onClick={() => setSelectedOrigin("Públicas")}
                    >
                      Públicas
                    </TagButton>
                    <TagButton
                      active={selectedOrigin === "SAS"}
                      onClick={() => setSelectedOrigin("SAS")}
                    >
                      SAS
                    </TagButton>
                    <TagButton
                      active={selectedOrigin === "Minhas"}
                      onClick={() => setSelectedOrigin("Minhas")}
                    >
                      Minhas
                    </TagButton>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Nível de Ensino</h3>
                  <div className="flex flex-wrap gap-2">
                    <TagButton
                      active={selectedGrade.includes("Anos Iniciais")}
                      onClick={() => toggleGradeSelection("Anos Iniciais")}
                    >
                      Anos Iniciais
                    </TagButton>
                    <TagButton
                      active={selectedGrade.includes("Anos Finais")}
                      onClick={() => toggleGradeSelection("Anos Finais")}
                    >
                      Anos Finais
                    </TagButton>
                    <TagButton
                      active={selectedGrade.includes("Ensino Médio")}
                      onClick={() => toggleGradeSelection("Ensino Médio")}
                    >
                      Ensino Médio
                    </TagButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="col-span-9">
            <div className="mb-6">
              <label htmlFor="search-input" className="sr-only">
                Pesquisar questões
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search-input"
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
                {loading
                  ? "Carregando questões..."
                  : `Encontradas ${questoes.length} questões`}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {currentPage}-{itemsPerPage} de {questoes.length}
                </span>
                <button
                  disabled={currentPage === 1}
                  className="p-1 rounded hover:bg-gray-100"
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  <span className="hidden">Botao</span>
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  className="p-1 rounded hover:bg-gray-100"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  <span className="hidden">Botao</span>
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {questoes.map((questao: any) => (
                <QuestionCard key={questao.id} questao={questao} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankPage;
