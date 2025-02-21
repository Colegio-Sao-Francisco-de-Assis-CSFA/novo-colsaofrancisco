"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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
import { useEffect } from "react";

const FormSchema = z.object({
  email: z.string().email("Formato de e-mail inválido."),
});

export default function InputForm() {

  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null); // Mensagem de erro exibida no toast

  // Use o useEffect para limpar a mensagem de erro após um curto período
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000); // 3 segundos
      return () => clearTimeout(timer); // Limpa o timeout se o componente for desmontado
    }
  }, [toastMessage]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const appServerRoute = process.env.NEXT_PUBLIC_BACKEND_URL;
  const appClientRoute = process.env.NEXT_PUBLIC_CLIENT_URL;

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setToastMessage(null); // Limpa a mensagem de erro ao tentar novamente

    try {
      if (!appServerRoute) {
        setToastMessage("Erro de configuração: URL do backend não definida.");
        return;
      }

      const response = await fetch(`${appServerRoute}/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Redireciona para a dashboard após login bem-sucedido
        window.location.href = `${appClientRoute}/dashboard`;
      } else {
        setToastMessage(result.error || "Erro ao validar email. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      setToastMessage("Erro de conexão. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="w-dvw h-dvh flex flex-col items-center justify-center bg-white">
      <Form {...form}>
        <form
          className="w-96 max-w-screen-sm m-auto flex flex-col items-start justify-center p-6 border border-slate-200 rounded-md space-y-10"
          onSubmit={form.handleSubmit(onSubmit)} // Use handleSubmit aqui
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-lg text-medium text-slate-60 text-center">
                  E-mail Institucional
                </FormLabel>
                <FormControl>
                  <Input
                    title="input para validação de email institucional"
                    type="email"
                    placeholder="seu.nome@email.com.br"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Digite seu email institucional para validação de acesso.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-blue-600 flex items-center justify-center text-white hover:bg-blue-800 border border-slate400 w-full text-lg/2 font-normal"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Validando..." : "Entrar no sistema"}
          </Button>
        </form>
      </Form>

      {/* Componente de Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 p-4 bg-red-600 text-white rounded-lg shadow-lg">
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
