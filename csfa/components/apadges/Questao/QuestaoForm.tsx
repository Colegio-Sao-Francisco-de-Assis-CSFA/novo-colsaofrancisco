"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuestaoForm({ id, initialData }: { id?: string; initialData?: any }) {
  const [form, setForm] = useState(initialData || { nome: "", conteudo: "", tag: "", type: "" });
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const method = id ? "PUT" : "POST";
    const url = id ? `/api/questoes/${id}` : "/api/questoes";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    router.push("/dashboard/provas/banco-de-questoes");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nome"
        value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Conteúdo"
        value={form.conteudo}
        onChange={(e) => setForm({ ...form, conteudo: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Tag"
        value={form.tag}
        onChange={(e) => setForm({ ...form, tag: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Tipo"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        {id ? "Atualizar" : "Criar"}
      </button>
    </form>
  );
}
