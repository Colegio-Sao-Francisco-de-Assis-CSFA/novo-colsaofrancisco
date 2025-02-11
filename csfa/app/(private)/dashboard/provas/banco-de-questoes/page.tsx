// import BancoQuestoesClient from "@/components/apadges/Questao/BancoQuestao/BQClient";
import getQuestoes from "@/lib/questoes/bancoQuestoesServer"; // Certifique-se de importar corretamente

export default async function BancoQuestoes() {
  const questoes = await getQuestoes(); // Agora estamos chamando a função corretamente

  return (

    <section className="w-dvw h-dvh grid grid-rows-3 grid-flow-col p-4 gap-2 pt-24 leading-10">
        <aside className="p-4 w-full bg-fuchsia-900 rounded-xl row-span-3">
          &nbsp;
        </aside>
        <main className="p-4 w-full bg-fuchsia-700 rounded-xl row-span-3 col-span-3 relative">
          <div className="absolute top-0 left-0 bg-green-300 w-full h-20"> header </div>
          <section className="bg-blue-400 h-5/6 mt-20">
            quetoes
          </section>
        </main>
    </section>

  )
}
