'use client';

import { Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';


interface ImportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ImportModal({ open, onOpenChange }: ImportModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Importar questões</DialogTitle>
        </DialogHeader>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Modelo de importação</h3>
          <p className="text-sm text-gray-600 mb-2">
            Use o modelo para garantir a importação do seu arquivo
          </p>
          <button className="px-4 py-2 border rounded-md text-blue-600 hover:bg-blue-50">
            Baixar
          </button>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Arquivo</h3>
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <Download className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-blue-600 mb-1">
              Adicione um arquivo ou arraste e solte
            </p>
            <p className="text-sm text-gray-500">.DOCX</p>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => onOpenChange(false)}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
          >
            Voltar
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed">
            Importar
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}