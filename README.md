# Portfólio – Kathellyn Caroline

Portfólio pessoal de Kathellyn Caroline, desenvolvedora de software e cientista de dados, com os projetos feitos ao longo do curso de Desenvolvimento de Software Multiplataforma na FATEC São José dos Campos.

## Tecnologias

- [Next.js 14](https://nextjs.org/) (App Router) e React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animações) e React Icons

## Estrutura

```
src/
├── app/
│   ├── components/   navbar, footer e animações
│   └── content/      seções da página: sobre, projetos, habilidades e contato
└── data/
    ├── interfaces/   tipos TypeScript dos projetos
    └── projetos/     lista de projetos exibidos no portfólio
public/images/        fotos e capturas de tela dos projetos
```

Para adicionar um projeto, inclua um novo item em `src/data/projetos/projetosData.tsx` e coloque a imagem em `public/images/`.

## Como rodar

Requisitos: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. A página atualiza sozinha ao editar os arquivos.

## Scripts

| Comando         | O que faz                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento        |
| `npm run build` | Gera a versão de produção          |
| `npm run start` | Executa a versão de produção       |
| `npm run lint`  | Verifica o código com o ESLint     |

## Deploy

O projeto é publicado na [Vercel](https://vercel.com/).
