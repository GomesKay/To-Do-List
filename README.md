# 🚀 Desafio Técnico - Desenvolvedor(a) Full Stack

Bem-vindo(a)! Este repositório contém o desafio técnico para a vaga de **Desenvolvedor(a) Full Stack**. O objetivo é avaliar suas habilidades em desenvolvimento web, tanto no front-end quanto no back-end, além da capacidade de estruturar um projeto funcional e bem organizado.

---

## 🎯 Objetivo do Projeto

Crie uma aplicação web completa para **gerenciamento de tarefas (to-do list)**, contendo:

- Cadastro, edição e exclusão de tarefas
- Marcar tarefas como concluídas
- Listagem de tarefas pendentes e concluídas
- Interface responsiva

---

## 🧰 Tecnologias sugeridas

Você pode utilizar as tecnologias que preferir, mas sugerimos:

- **Front-end**: React, Vue ou similar
- **Back-end**: Node.js com Express (ou outra linguagem/framework de sua preferência)
- **Banco de dados**: Mysql
- **Extras** (opcional):
  - Autenticação de usuários
  - Testes automatizados
  - Deploy em ambiente gratuito (Vercel, Netlify, Render, etc.)

---

## ✅ Requisitos

- Fazer um fork deste repositório antes de iniciar o desenvolvimento
- Utilizar Git para versionamento (incluindo histórico de commits)
- Criar um `README.md` explicando como rodar o projeto
- Boa organização de pastas e código
- Seguir boas práticas de desenvolvimento
- (Opcional) Link do projeto publicado online

---

## 📦 Entrega

- Envie o link do repositório público no GitHub para o e-mail: [henrique@tarefy.com] e [douglas@tarefy.com]
- prazo de entrega é de até 5 dias corridos após o recebimento deste desafio
- layout é livre: sinta-se à vontade para usar sua criatividade ou alguma biblioteca de UI que preferir.

---

## 📘 Como rodar o projeto

Inclua aqui no seu repositório instruções claras para rodar o front-end e o back-end localmente, por exemplo:

> [!NOTE]
> Esse projeto foi separado em duas pastas (<b>back-end</b> e <b>front-end</b>), então será necessário deixar um terminal aberto para cada pasta

### 🛠️ Pré-requisitos
  - Docker (Opcional)
  - Git
  - Node.js
  - NPM
  - VSCode

  | Passos | Comandos | Descrição |
  | --- | --- | --- |
  | 01 | `git clone https://github.com/GomesKay/teste-full-stack.git` | Clona este repositório no seu computador |
  | 02 | `cd teste-full-stack` | Acesse a pasta do projeto |
  | 03 | `cd back-end` | Acesse a pasta `back-end` pelo terminal |
  | 04 | `npm install` | Instala todas as dependências necessárias |
  | 05 | - | Configure o banco de dados: você pode usar um serviço como Render ou Vercel, **mas minha recomendação é usar Docker para rodar o banco localmente, pois é mais rápido e prático** |
  | 06 | - | Crie um arquivo `docker-compose.yml` na raiz da pasta `back-end` utilizando o modelo fornecido abaixo da tabela |
  | 07 | `docker compose up -d` | Sobe o container com o PostgreSQL (Banco de Dados) |
  | 08 | `DATABASE_URL="postgresql://docker:docker@localhost:5432/tasks?schema=public"` | Copie o `.env.example` e insira a `DATABASE_URL` no `.env` com a string de conexão |
  | 09 | `npx prisma migrate dev` | Executa as migrations para criar as tabelas no banco de dados |
  | 10 | `npm run test` | Inicia todos os testes feitos com Jest utilizando mocks dos services (Opcional) |
  | 11 | `npm run dev` | Inicia o servidor em modo desenvolvimento |
  | 12 | `cd front-end` | Em outro terminal, com a API já em execução, acesse a pasta `front-end` |
  | 13 | `npm install` | Instala todas as dependências necessárias |
  | 14 | `npm run dev` | Inicia o servidor de desenvolvimento com Vite |

  <details open>
    <summary>Utilizando Docker localmente</summary>

  * docker-compose.yml
      ```
      name: api-task-server

      services:
        pg:
          image: bitnami/postgresql:latest
          ports:
            - "5432:5432"
          environment:
            - POSTGRES_USER=docker
            - POSTGRES_PASSWORD=docker
            - POSTGRES_DB=tasks
      ```

  * .env
    ```
    DATABASE_URL="postgresql://docker:docker@localhost:5432/tasks?schema=public"
    ```
  </details>

<div align="center">
  
  ## ⚙️ Back-end

  ### 🔧 Arquitetura da API

  | HTTP | Rotas | Descrição |
  | --- | --- | --- |
  | `GET` | /tasks | Retorna todas as tarefas |
  | `POST` | /tasks | Cria uma nova tarefa |
  | `PUT` | /tasks/:id | Atualiza uma tarefa |
  | `PATCH` | /tasks/:id/completed | Atualiza a tarefa como concluída |
  | `DELETE` | /tasks/:id | Deleta uma tarefa |

  ### 🚀 Tecnologias
  <img title="Biome" src="https://github.com/user-attachments/assets/ca50003f-5d35-4299-9474-30b305ae07cb" alt="Biome" width="50" /> &nbsp;
  <img title="Jest" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="Jest" width="50" /> &nbsp;
  <img title="Postman" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" width="50" /> &nbsp;
  <img title="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" width="50" /> &nbsp;
  <img title="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="50" /> &nbsp;
  <img title="PrismaORM" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="PrismaORM" width="50" /> &nbsp;
  <img title="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="50" /> &nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" /> &nbsp;
  <img title="Zod" src="https://github.com/user-attachments/assets/bb33ed33-2e91-473c-9494-41386bf5111f" alt="Zod" width="50" />

  ## 🖥️ Front-end

  ### 🔮 Tela da Aplicação
  ![Tela da Aplicação](https://github.com/user-attachments/assets/a2228d96-53db-481c-869d-1c3d2990355b)
  ![Tela da Aplicação](https://github.com/user-attachments/assets/fad21b7a-1620-4e4e-b6cd-e830e1536319)

  ### 🚀 Tecnologias
  <img title="Axios" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" alt="Axios" width="50" /> &nbsp;
  <img title="Lucide React" src="https://github.com/user-attachments/assets/779e5ab7-63a5-489d-aa13-b42ccfccd9ac" alt="Lucide React" width="50" /> &nbsp;
  <img title="ESLint" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" alt="ESLint" width="50" /> &nbsp;
  <img title="Prettier" src="https://github.com/user-attachments/assets/67a609b6-d4d4-4c89-9ab1-154b56c61289" alt="Prettier" width="50" /> &nbsp;
  <img title="React Hook Form" src="https://github.com/user-attachments/assets/913089a0-f8ca-47f1-9843-704163d3d270" alt="React Hook Form" width="50" /> &nbsp;
  <img title="React.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React.js" width="50" /> &nbsp;
  <img title="Shadcn/ui" src="https://github.com/user-attachments/assets/d4faa79c-ae66-4fe5-adfe-377ddb62ee62" alt="Shadcn/ui" width="50" /> &nbsp;
  <img title="Magic UI" src="https://github.com/user-attachments/assets/99521a26-00dd-4d4d-91ab-10d7e6731581" alt="Magic UI" width="50" /> &nbsp;
  <img title="TailwindCSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" width="50" /> &nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" /> &nbsp;
  <img title="Zod" src="https://github.com/user-attachments/assets/bb33ed33-2e91-473c-9494-41386bf5111f" alt="Zod" width="50" />

</div>
