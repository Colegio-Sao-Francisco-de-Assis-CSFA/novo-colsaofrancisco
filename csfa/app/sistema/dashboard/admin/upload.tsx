'use client';

import { useState } from 'react';

export default function AdminUploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files ? e.target.files[0] : null;
      if (file) {
        setFile(file);
      }
  };

  const handleFileUpload = async () => {
    if (!file) {
      setStatus("Por favor, selecione um arquivo CSV.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setStatus("Enviando...");

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Usuários cadastrados com sucesso!");
      } else {
        setStatus(`Erro: ${result.message}`);
      }
    } catch (error) {
      setStatus("Erro ao enviar o arquivo.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Cadastrar Usuários por CSV</h1>
      <label htmlFor="fileup">fILE UP</label>
      <input
        id='fileup'
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mt-4"
      />
      <button
        onClick={handleFileUpload}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Enviar CSV
      </button>

      {status && <div className="mt-4">{status}</div>}
    </div>
  );
}
