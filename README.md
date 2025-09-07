<h1 align="center">To-Do List</h1>

![Tela da Aplicação](https://github.com/user-attachments/assets/90d0f343-4cc8-444a-957a-cd4f0e87f883)
![Tela da Aplicação](https://github.com/user-attachments/assets/49ef3b56-bea3-4feb-a494-bbadddc6ded5)

<h2 align="center"> 💻 Instalação e Uso</h2>

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

  ---

  ## 🖥️ Front-end

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

  ### 🗡️ Projeto
  <p>Um projeto Full-Stack que fiz em um <b>Desafio Técnico</b>, mas gostei tanto que resolvi deixar separadamente em um repositório. O objetivo dele é uma lista de tarefas totalmente responsiva, utilizando uma ótima organização de código, Arquitetura MVC, testes e interface moderna.</p>

</div>
