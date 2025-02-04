
"use client"

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { string, z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {signIn} from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const FormSchema = z.object({
  email: z.string().email("Formato de e-mail inválido."),
});

export default function InputForm() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  const [email, setEmail] = useState<null | string>(null);

  async function SignInWithEmail(){
    const signInResult = await signIn('email'), {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
  }

  return (
    <Form {...form}>
      <form className="w-2/3 max-w-screen-sm m-auto flex flex-col p-6 border border-slate-200 rounded-sm">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input title="input para validação de email institucional" type="email" placeholder="seu.nome@email.com.br" {...field} />
              </FormControl>
              <FormDescription>
                Digite seu email institucional para validação de acesso.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-blue-600 text-white hover:bg-blue-900" type="submit">Entrar</Button>
      </form>
    </Form>
  )
}

