'use client';

import React, { useState } from "react";


export default function Form(){

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    assunto: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    assunto: '',
    message: ''
  });

  const validate = () => {
    const newErrors = { name: '', email: '', assunto: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'O nome é obrigatório';
    }

    if (!formData.email) {
      newErrors.email = 'O e-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Insira um e-mail válido';
    }

    if (!formData.assunto) {
      newErrors.assunto = 'O assunto é obrigatório';
    }

    if (!formData.message) {
      newErrors.message = 'A mensagem é obrigatória';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      alert('Formulário enviado com sucesso!');
      setFormData({ name: '', email: '', assunto: '', message: '' });
    }
  };

  return(
    <form className="w-full h-auto flex flex-col p-12 justify-center bg-blue-6000 md:w-[60%] md:h-full" onSubmit={handleSubmit}>

        <div className="w-full flex flex-col gap-2 md:flex-row">
          {/* Nome */}
          <div className="flex flex-col gap-2 w-full">
              <label htmlFor="nome" className="text-blue-600 font-medium text-lg capitalize">Nome</label>
              <input id="nome" type="text" className="rounded-md border-blue-600 text-blue-700  capitalize"/>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-blue-600 font-medium text-lg">E-mail</label>
              <input id="email" type="email" className="rounded-md border-blue-600 text-blue-700"/>
          </div>

        </div>

        
        <div className="w-full flex flex-col gap-2 md:flex-row">
            {/* Telefone */}
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="tel" className="text-blue-600 font-medium text-lg">Tel</label>
                <input id="tel" type="tel" className="rounded-md border-blue-600 text-blue-700" />
            </div>
            {/* Assunto */}
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="assunto" className="text-blue-600 font-medium text-lg">Assunto:</label>
                <select name="assunto" id="assunto" className="rounded-md border-blue-600 text-blue-700">
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="reclamacao">Reclamação</option>
                </select>
            </div>
        </div>
          

        {/* Mensagem */}
        <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-blue-600 font-medium text-lg">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="resize-none w-full rounded-md border-blue-600"
            />
            {errors.message && <span>{errors.message}</span>}
        </div>

        <div className="w-full flex items-end justify-end mt-2">
            {/* Botão de Enviar */}
            <button type="submit" className="bg-blue-600 w-32 h-12 rounded-md text-white text-lg font-medium">Enviar</button>
        </div>
    </form>
  )
}