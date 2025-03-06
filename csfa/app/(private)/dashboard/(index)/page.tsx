import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {

    const session  = await getServerSession();

    if (!session) {
        return redirect('/sign-in');
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
            <h1>Dashboard</h1>
            <p>Bem vindo(a) {session?.user?.name}</p>
            <p>email: {session.user?.email} </p>
        </div>
    );
}