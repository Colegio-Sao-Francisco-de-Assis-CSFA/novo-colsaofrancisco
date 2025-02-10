import QuestaoForm from "@/components/apadges/Questao/QuestaoForm";

async function getQuestao(id: string) {
  const res = await fetch(`/api/questoes/${id}`);
  return res.json();
}

export default async function EditarQuestaoPage({ params }: { params: { id: string } }) {
  const questao = await getQuestao(params.id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Questão</h1>
      <QuestaoForm id={params.id} initialData={questao} />
    </div>
  );
}
