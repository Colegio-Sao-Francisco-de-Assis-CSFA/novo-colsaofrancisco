import { useState } from 'react';
import AssessmentCard from './AssessmentCard';
import Pagination from './Pagination';
import SearchInput from './SearchInput';

const DiagnosticAssessment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sampleAssessments = [
    {
      id: '1',
      title: 'Avaliação Diagnóstica - 4º Ano - Português',
      year: 2025,
      notebook: '1 caderno',
      grade: '4º Ano',
      endDate: '21/03',
      status: 'in_progress',
    },
    {
      id: '2',
      title: 'Avaliação Diagnóstica - 4º Ano - Matemática',
      year: 2025,
      notebook: '1 caderno',
      grade: '4º Ano',
      endDate: '21/03',
      status: 'in_progress',
    },
    // Adicione mais dados conforme necessário
  ];

  // Filtro de avaliações baseado no termo de busca
  const filteredAssessments = sampleAssessments.filter((assessment) =>
    assessment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginação
  const paginatedAssessments = filteredAssessments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Avaliação Diagnóstica</h1>
        <p className="text-gray-600">
          Acompanhe as avaliações por etapas.{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Saiba mais
          </a>
        </p>
      </header>

      <div className="flex flex-col gap-4 mb-6">
        <SearchInput
          placeholder="Digite por nome"
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </div>

      <div className="space-y-4">
        {paginatedAssessments.map((assessment) => (
          <AssessmentCard key={assessment.id} assessment={assessment} />
        ))}
      </div>

      <footer className="mt-6">
        <Pagination
          currentPage={currentPage}
          totalItems={filteredAssessments.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </footer>
    </div>
  );
};

export default DiagnosticAssessment;
