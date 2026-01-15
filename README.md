# conexoes - Plataforma MASC PRO

Plataforma invite-only da MASC PRO para evolução, comunidade, produtos e eventos.

## 🚀 Tecnologias

- **Next.js 16** (App Router) - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **shadcn/ui** - Componentes de UI
- **Supabase** - Backend e autenticação
- **PWA** - Progressive Web App com next-pwa

## 📋 Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun
- Conta no Supabase

## 🔧 Como rodar localmente

1. Clone o repositório:
```bash
git clone <repo-url>
cd conexoes
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-key
NEXT_PUBLIC_WHATSAPP_INVITE_URL=https://wa.me/5514991570389
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📁 Estrutura do Projeto

```
conexoes/
├── app/
│   ├── (auth)/              # Rotas públicas
│   │   ├── login/
│   │   └── signup/
│   ├── (app)/               # Rotas protegidas
│   │   ├── layout.tsx       # Layout com header/nav
│   │   ├── home/
│   │   ├── courses/
│   │   ├── community/
│   │   ├── products/
│   │   ├── events/
│   │   ├── profile/
│   │   └── admin/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Redireciona para /login
│   └── globals.css
├── components/
│   └── ui/                  # Componentes shadcn/ui
├── lib/
│   └── supabase/
│       └── client.ts        # Cliente Supabase
├── public/
│   ├── brand/
│   │   └── mascpro-logo.png
│   ├── icons/               # Ícones PWA
│   └── manifest.json
└── README.md
```

## 🌐 Variáveis de Ambiente

| Variável | Descrição | Obrigatória |
|----------|-----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase | Sim |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave anônima do Supabase | Sim |
| `NEXT_PUBLIC_WHATSAPP_INVITE_URL` | URL do WhatsApp para pedir link | Não |

## 🚀 Deploy na Vercel

1. Faça push do código para o repositório Git

2. Acesse [Vercel](https://vercel.com) e faça login

3. Clique em "Add New Project"

4. Importe o repositório do GitHub/GitLab/Bitbucket

5. Configure as variáveis de ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_INVITE_URL`

6. Clique em "Deploy"

7. Após o deploy, acesse o domínio fornecido pela Vercel

## 📱 PWA

O aplicativo está configurado como PWA com:
- Service Worker automático (via next-pwa)
- Manifest.json configurado
- Suporte offline
- Instalável em dispositivos móveis

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📝 Notas

- O projeto está em desenvolvimento (Milestone 0 - Setup)
- As páginas estão com conteúdo mock
- A autenticação será implementada nos próximos milestones
- O sistema de PRO (moeda) será implementado posteriormente

## 📄 Licença

Este projeto é privado e exclusivo para membros convidados da MASC PRO.
