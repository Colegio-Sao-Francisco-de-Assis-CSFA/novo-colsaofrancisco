"use client";

import { useRouter } from "next/navigation";
import { Questao } from "@/types";

export default function QuestaoList({ questoes }: { questoes: Questao[] }) {
  const router = useRouter();

  async function handleDelete(id: string) {
    if (!confirm("Tem certeza que deseja excluir?")) return;

    await fetch(`/api/questoes/${id}`, { method: "DELETE" });
    router.refresh(); // Atualiza a lista
  }

  return (
    <ul className="space-y-4">
      {questoes?.map((q) => (
        q.id && ( // 🔥 Só renderiza se q.id existir
          <li key={q.id} className="p-4 bg-gray-100 rounded flex justify-between">
            <div>
              <h2 className="text-lg font-semibold">{q.nome}</h2>
              <p>{q.conteudo}</p>
            </div>
            <div>
              <button
                onClick={() => router.push(`/dashboard/provas/editar-questao/${q.id}`)}
                className="mr-2 bg-blue-500 text-white px-3 py-1 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(q.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Excluir
              </button>
            </div>
          </li>
        )
      ))}
    </ul>

  );
}
