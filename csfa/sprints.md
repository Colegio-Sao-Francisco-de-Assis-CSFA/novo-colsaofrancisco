# Planejamento de Sprints para 2 Semanas (5 dias, 4 horas/dia)

## Semana 1: Configuração e Funcionalidades Básicas

### Objetivo
Configurar o ambiente de trabalho, estruturar o layout base e conectar com o banco de dados.

### Dia 1: Configuração Inicial
- Configurar o ambiente de desenvolvimento com Next.js, React, TypeScript e Tailwind.
- Configurar o servidor backend com Node.js, Express e Knex.
- Criar o esquema inicial do banco de dados MySQL (tabelas: `courses`, `news`, `features`, `registrations`).

**Tempo Estimado:** 4h  
**Responsáveis:** Dev Backend, Dev Frontend.

---

### Dia 2: Estruturação do Layout
- Criar o layout base do site: **Hero-banner**, **Navegação**, e **Footer** com Tailwind.
- Configurar rotas principais no Next.js:
  - Home, Courses, Features, News, About Us, Blog, Registrations, Academic Project, Contact.
- Inserir placeholders nas páginas para facilitar a navegação.

**Tempo Estimado:** 4h  
**Responsáveis:** Dev Frontend.

---

### Dia 3: Backend - Configuração do Banco e API
- Criar API básica com rotas:
  - `GET /courses`: Retorna lista de cursos.
  - `GET /features`: Retorna destaques.
  - `GET /news`: Retorna notícias.
- Testar a conexão do backend com o banco de dados.

**Tempo Estimado:** 4h  
**Responsáveis:** Dev Backend.

---

### Dia 4: Conexão Frontend com Backend
- Implementar integração do frontend com as APIs usando Axios:
  - Sessão dinâmica **Courses** na página inicial.
  - Sessão dinâmica **Features** na página inicial.
  - Sessão dinâmica **News** na página inicial.

**Tempo Estimado:** 4h  
**Responsáveis:** Dev Frontend.

---

### Dia 5: Testes e Refinamento
- Testar as funcionalidades desenvolvidas (dados dinâmicos nas sessões da página inicial).
- Ajustar o design das sessões com base nos dados reais.
- Criar documentação inicial do ambiente configurado e APIs criadas.

**Tempo Estimado:** 4h  
**Responsáveis:** Todos.

---

## Semana 2: Funcionalidades Avançadas e Finalização

### Objetivo
Finalizar as páginas estáticas e implementar CRUD básico para administração.

---

### Dia 1: Páginas Estáticas com Dados do Banco
- Desenvolver páginas estáticas conectadas ao banco:
  - **About Us**
  - **Registrations**
  - **Academic Project**
  - **Contact**
- Implementar consultas no backend para essas páginas.

**Tempo Estimado:** 4h  
**Responsáveis:** Dev Frontend, Dev Backend.

---

### Dia 2: Formulários e Validação
- Implementar o formulário de contato:
  - Validação no frontend.
  - Endpoint no backend para salvar mensagens no banco.
- Criar funcionalidade básica de registro na página **Registrations**.

**Tempo Estimado:** 4h  
**Responsáveis:** Dev Frontend, Dev Backend.

---

### Dia 3: CRUD Básico para Admin
- Implementar CRUD básico no backend para gerenciar:
  - Cursos.
  - Notícias.
  - Destaques.
- Criar uma interface simples no frontend para testar o CRUD.

**Tempo Estimado:** 4h  
**Responsáveis:** Dev Backend, Dev Frontend.

---

### Dia 4: Testes e Ajustes Finais
- Testar todas as funcionalidades implementadas (páginas estáticas, formulários, CRUD).
- Corrigir erros e refinar o design.

**Tempo Estimado:** 4h  
**Responsáveis:** Todos.

---

### Dia 5: Documentação e Deploy
- Escrever documentação final:
  - Rotas da API (Swagger ou Postman).
  - Guia para rodar o projeto localmente.
- Configurar o deploy:
  - Frontend no Vercel.
  - Backend em uma plataforma cloud (Heroku ou similar).

**Tempo Estimado:** 4h  
**Responsáveis:** Todos.

---

## Resumo de Entregas
1. Ambiente configurado com frontend e backend conectados ao banco de dados.
2. Páginas dinâmicas: Home, Courses, Features, News.
3. Páginas estáticas conectadas ao banco: About Us, Registrations, Academic Project, Contact.
4. CRUD básico para administração.
5. Site documentado e publicado.
