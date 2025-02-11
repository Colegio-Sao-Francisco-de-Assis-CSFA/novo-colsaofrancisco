export default async function BancoQuestoesServer() {
    try {

        const api_url = process.env.NEXTAUTH_URL;

        const res = await fetch(`${api_url}/api/questoes`, { cache: "no-store", });

        if (!res.ok) {
            throw new Error("Erro ao buscar questões");
        }

        return res.json();

    } catch (error) {
        console.error("Erro no Server Action:", error);
        return [];
    }
}
