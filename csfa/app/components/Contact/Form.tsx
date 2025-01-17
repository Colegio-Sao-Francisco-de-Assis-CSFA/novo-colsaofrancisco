'use client';

import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

export default function Form() {
  return (
    <form 
      className="w-full h-full bg-white flex p-6 flex-col gap-4" 
      method="POST" 
      action="/submit-form"
    >
      {/* Nome */}
      <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="name" 
            value="Nome" 
            className="text-lg text-blue-700" // Estilo do título e label
          />
        </div>
        <TextInput 
          id="name" 
          name="name" 
          type="text" 
          placeholder="Fulano de Tal" 
          required 
          className="text-blue-800 placeholder-gray-400 p-2 outline-blue-700"
        />
      </div>

      {/* Email */}
      <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="email" 
            value="Seu email" 
            className="text-lg text-blue-700" 
          />
        </div>
        <TextInput 
          id="email" 
          name="email" 
          type="email" 
          placeholder="name@flowbite.com" 
          required 
          className="text-blue-800 placeholder-gray-400 p-2 outline-blue-700 border"
        />
      </div>

      {/* Telefone */}
      <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="phone" 
            value="Seu telefone" 
            className="text-lg text-blue-700" 
          />
        </div>
        <TextInput 
          id="phone" 
          name="phone" 
          type="tel" 
          placeholder="(xx) x xxxx-xxxx" 
          required 
          className="text-blue-800 placeholder-gray-400 p-2 outline-blue-700"
        />
      </div>

      {/* Categoria de Dúvida */}
      <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="category" 
            value="Selecione uma categoria" 
            className="text-lg text-blue-700" 
          />
        </div>
        <Select 
          id="category" 
          name="category" 
          required 
          className="text-blue-800 placeholder-gray-400 p-2 outline-blue-700"
        >
          <option value="..." className="text-blue-600">. . .</option>
          <option value="matricula">Matrícula</option>
          <option value="academico">Acadêmico</option>
          <option value="financeiro">Financeiro</option>
          <option value="elogios">Elogios</option>
          <option value="reclamacoes">Reclamações</option>
          <option value="outras_duvidas">Outras Dúvidas</option>
        </Select>
      </div>

      {/* Mensagem */}
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label 
            htmlFor="comment" 
            value="Sua mensagem" 
            className="text-lg text-blue-700" 
          />
        </div>
        <Textarea
          id="comment"
          name="comment"
          placeholder="Deixe seu comentário..."
          required
          rows={6}
          className="text-blue-800 placeholder-gray-400 p-2 outline-blue-700 border border-blue-700/80 resize-none"
        />
      </div>

      {/* Botão de envio */}
      <Button type="submit">Enviar</Button>
    </form>
  );
}


//Estrutura de POST do Backend
// {
//   "name": "Fulano de Tal",
//   "email": "name@flowbite.com",
//   "phone": "(xx) x xxxx-xxxx",
//   "category": "matricula",
//   "comment": "Deixe seu comentário..."
// }