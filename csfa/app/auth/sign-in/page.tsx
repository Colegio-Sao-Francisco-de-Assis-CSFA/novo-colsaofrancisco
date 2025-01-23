import type { Metadata } from "next";
import "../../../styles/globals.css";
import SignIn from "./SignIn";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SignIn",
  description: "Página de acesso para o sistema apadges",
};


const PageSignIn: React.FC = async () =>{
    
    const isAuthenticated = false;
    
    if(isAuthenticated)
        {
        redirect('/dashboard');

    } else{
        return <SignIn/>;
    } ;

} 
export default PageSignIn;
