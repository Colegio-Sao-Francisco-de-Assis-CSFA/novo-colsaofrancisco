import { Bell, HelpCircle, LayoutGrid, Shapes, Sparkles, Boxes} from 'lucide-react';
import Link from 'next/link';
import {
    Avatar,
    AvatarFallback,
    AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Button } from "@/components/ui/button"



const navLinks = [
    { name: "Inicio", href:"/dashboard", icon: <LayoutGrid/> },
    { name: "Provas", href:"/dashboard/provas", icon: <Shapes/>},
    { name: "Banco de Questões", href:"/dashboard/banco-questoes", icon: <Boxes/>},
    { name: "Assistente Ia Professor", href:"/dashboard/professor-assistente", icon: <Sparkles/>},
    // { name: "Lembretes", href:"/" },
    // { name: "Banco de questões", href:"/" },
    // { name: "Assistente Prof", href:"/" },
]

interface LinkProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const LinkMenu: React.FC<LinkProps> = ({ icon, title, href  }) => {
  return (
    <Link className="tetx-sm text-gray-500 hover:text-blue-600 flex gap-2"
    href={href}>
         {icon}
         {title}
    </Link>
  );
};

export default function Navigation(){
    return(
        <div className="fixed top-0 left-0 w-dvw h-20 z-10 bg-white border-b px-12 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-8 w-full">

                <div className="text-blue-600 font-bold text-xl">CSFA</div>

                <div className="flex space-x-6 mx-auto">
                        {navLinks.map((link) => (

                        <LinkMenu  href={link.href} icon={link.icon} title={link.name}/>

                        ))}
                </div>

            </div>
            <div className="flex items-center space-x-4 relaive w-auto min-w-20">

                <Bell className="w-5 h-5 text-gray-600" />

                <HelpCircle className="w-5 h-5 text-gray-600" />

                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">

                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="absolute -right-14">
                        <DropdownMenuLabel>Cloves</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button className='w-full h-6' variant="destructive">

                                Sair
                            </Button>
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>


                </div>
            </div>
        </div>
    )
}