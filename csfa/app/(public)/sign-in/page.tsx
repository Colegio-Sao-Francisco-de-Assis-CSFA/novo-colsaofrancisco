
"use client"

import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { Section } from "lucide-react";

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

  return (
    <section className="w-dvw h-dvh flex flex-col items-center justify-center bg-white">
        <Form {...form}>
          <form className="w-96 max-w-screen-sm m-auto flex flex-col items-start justify-center p-6 border border-slate-200 rounded-md space-y-10" action={"/dashboard"}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                    <Image alt="logo" src={"/logo.webp"} width={100} height={100} className="m-auto"/>
                    <FormLabel className="text-lg text-medium text-slate-60 text-center">E-mail Institucional</FormLabel>
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
            <Button  className="bg-blue-600 flex items-center justify-center text-white hover:bg-blue-800 border border-slate400 w-full text-lg/2 font-normal" type="submit">
              {/* <Icon className="m-2 mt-2.5" icon={"flat-color-icons:google"} />  */}
                Entrar no sistema
            </Button>
            <small className="flex flex-col gap-2 text-center m-auto ">
                <Link href={"/"} className="text-slate-600 font-normal text-[10px] transition hover:text-blue-600">Problema com o acesso? Contate o administrador</Link>
                <Link href={"/"} className="text-slate-600 font-normal text-[10px] transition hover:text-blue-600">Voltar para o site</Link>
            </small>
          </form>
        </Form>
    </section>
  )
}

