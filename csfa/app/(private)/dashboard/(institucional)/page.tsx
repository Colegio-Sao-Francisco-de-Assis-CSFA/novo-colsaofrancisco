import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Dashboard() {
  
  const session = await getServerSession();

  const userName = session?.user.name;
  const userEmail = session?.user.email;
  const userImage = session?.user.image;  

  if(!session){
    return redirect('/sign-in');
  }
  
  return (
      <div>
          <header>
              <div>

                  <Image title="Imagem do usuario" alt="Imagem do usuario autenticado do google" src={`${userImage}`} />
                  
                  <div className="Flex flex-col">
                      <p>{userName}</p>
                      <p>{userEmail}</p>
                  </div>
              </div>
          </header>

          <main>

          </main>
      </div>
    );
  }
  