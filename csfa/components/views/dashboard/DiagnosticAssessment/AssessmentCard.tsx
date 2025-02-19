import { Clock } from 'lucide-react';
import React from 'react';

interface Assessment {
  id: string;
  title: string;
  year: number;
  notebook: string;
  grade: string;
  endDate: string;
  status: 'in_progress' | 'completed' | 'pending';
}

interface AssessmentCardProps {
  assessment: Assessment;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({ assessment }) => {
  const renderStatus = () => {
    switch (assessment.status) {
      case 'in_progress':
        return <span className="text-blue-600 text-sm">Em período de aplicação</span>;
      case 'completed':
        return <span className="text-green-600 text-sm">Concluído</span>;
      case 'pending':
        return <span className="text-yellow-600 text-sm">Pendente</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{assessment.title}</h3>
          <p className="text-sm text-gray-500">
            {assessment.year} • {assessment.notebook} • {assessment.grade}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center text-amber-600">
          <Clock size={16} className="mr-1" />
          <span className="text-sm">Termina em {assessment.endDate}</span>
        </div>
        {renderStatus()}
      </div>
    </div>
  );
};

export default AssessmentCard;
