# ESC Serviços Automotivos — Landing Page + Backend

Site institucional + captura de leads em produção.

- **Frontend**: Next.js 16 (App Router, static export) + Tailwind v4 + shadcn/ui
- **Hospedagem**: Cloudflare Workers + Static Assets (deploy automático via GitHub)
- **Backend**: Firebase Functions na pasta `firebase/` (deploy manual via `firebase deploy`)
- **Project Firebase**: `escservicosautomotivos-landing`
- **Análise**: Plausible/Vercel Analytics (sem cookies, LGPD-friendly)

## Estrutura

```
.
├── app/                  Páginas Next.js (App Router)
├── components/           Components React + sections
├── lib/                  Schemas Zod, helpers, client de lead
├── public/               Assets estáticos (logo SVG, _headers do CF)
├── wrangler.jsonc        Config Cloudflare Workers
├── next.config.ts        Static export + headers
└── firebase/             Backend Firebase isolado
    ├── functions/        Cloud Functions (criarLead, onLeadCreated, limparLeadsExpirados)
    ├── firestore.rules   Rules deny-default
    └── firebase.json     Config deploy
```

## Rodar localmente

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy

### Frontend (automático)
Cada push em `main` dispara build + deploy no Cloudflare Workers. Sem ação manual.

### Backend (manual, primeira vez)

Pré-requisitos:
- Plano Blaze ativo no project Firebase
- Firestore criado (região `southamerica-east1`)
- Authentication habilitado
- Firebase CLI: `npm install -g firebase-tools && firebase login`
- Conta Resend + Cloudflare Turnstile criadas

Setup:
```bash
cd firebase

# Copia .env.example e edita com seu email de teste
cp functions/.env.example functions/.env
# Edita functions/.env

# Seta secrets no Google Secret Manager (cada um abre prompt)
firebase functions:secrets:set TURNSTILE_SECRET
firebase functions:secrets:set RESEND_API_KEY

# Deploy
firebase deploy --only firestore:rules,firestore:indexes,functions
```

Após o deploy, anotar a URL da função `criarLead` e configurar como
**NEXT_PUBLIC_LEAD_URL** no painel Cloudflare Workers → Settings → Variables.

### Backend (deploys subsequentes)
```bash
cd firebase && firebase deploy --only functions
```

## Variáveis de ambiente (frontend)

Configuradas no painel Cloudflare Workers → Settings → Variables and Secrets:

| Variável | Tipo | Exemplo |
|---|---|---|
| `NEXT_PUBLIC_LEAD_URL` | Plain text | `https://southamerica-east1-escservicosautomotivos-landing.cloudfunctions.net/criarLead` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Plain text | `0x4AAAAAAAA...` |

`NEXT_PUBLIC_*` são embutidas no bundle estático — não são secrets.

## Identidade

- Razão social: ESC Serviços Automotivos LTDA (CNPJ 65.296.437/0001-60)
- Endereço: Rua José Maria Balieiro, 241 — Centro, Barueri/SP — CEP 06401-126
- WhatsApp: (11) 99178-3807
- Email: atendimento@escservicosautomotivos.com.br

Sistema de marca completo em `docs/ESC_Brand_System.md` (fonte de verdade visual).
