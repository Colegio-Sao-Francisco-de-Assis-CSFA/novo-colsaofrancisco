import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

export default function Contact(){

    const contactAside =[
        {
            title:"Contate nosso telefone",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            icon: "mynaui:telephone-solid",
            bg:"bg-purple-500"
        },
        {
            title:"Nos envie uma mensagem",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "mingcute:whatsapp-fill",
            bg:"bg-green-500"
        },
        {
            title:"Tire suas dúvidas, envie um email",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "mdi:email",
            bg:"bg-orange-500"
        }
    ]

    const socialsAside = [
        {
            name: "instagram",
            icon: "ri:instagram-fill",
            href:"#"
        },
        {
            name: "linkedin",
            icon: "akar-icons:linkedin-fill",
            href:"#"
        },
        {
            name: "facebook",
            icon: "mingcute:facebook-fill",
            href:"#"
        },
        {
            name: "youtube",
            icon: "simple-icons:youtubeshorts",
            href:"#"
        },
    ]

    return(
        <aside className="w-full flex flex-col p-6 bg-blue-600 md:w-[40%] md:h-full">
            
            <header className="w-full p-2 gap-2 mb-6">

                <h1 className="text-white text-4xl font-semibold">Get in touch</h1>
                <p className="text-white font-normal">
                    Lorem Ipsum is simply dummy text of the printing and t
                    ypesetting industry. 
                </p>

            </header>

            <main className="w-full h-auto flex flex-col p-2 gap-6 ">
                
                {
                    contactAside.map((item, index)=>(
                           <>
                           
                                <div className="w-full bg-orange flex flex-row gap-4 space-y-2">

                                    <div  key={index} className={`w-12 h-12 flex items-center justify-center rounded-full bg-white transition-all hover:${item.bg}`}>
                                        <Icon icon={item.icon} className="text-3xl text-blue-600"/>
                                    </div>

                                    <div className="w-[80%] flex flex-col gap-2">
                                        <h4 className="text-white font-semibold">{item.title}</h4>
                                        <p className="text-sm text-white font-normal">{item.description}</p>
                                    </div>

                                </div>
                           
                           </>
        
                    ))
                }
                

            </main>

            <footer className="w-full p-2 py-2 mt-6 flex flex-col items-center gap-3 border-t-4 border-t-blue-950/40 md:items-start" >
                <p className="text-sm font-medium text-white py-2">Siga nossas redes sociais</p> 
                <div className="flex flex-row items-start justify-start gap-2">
                    {
                        socialsAside.map((item, index)=>(
                            <Link key={index} href={item.href} className="bg-white w-10 h-10 flex items-center justify-center rounded-full ">
                                <Icon icon={item.icon} className="text-2xl text-blue-600"/>
                            </Link>
                        ))
                    }
                </div>
                
            </footer>



        </aside>
    )
}