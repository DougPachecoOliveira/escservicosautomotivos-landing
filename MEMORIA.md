# Memória do Projeto — Landing ESC

> Snapshot do estado atual + roadmap. Atualizado 2026-05-17.
> Fonte de verdade técnica: `README.md`. Este arquivo é índice + status.

---

## Visão geral

Site institucional + captura de leads (formulário pré-diagnóstico) da ESC
Serviços Automotivos. Operação real desde 2023, espaço próprio em
maio/2026 (Rua José Maria Balieiro, 241 — Centro, Barueri/SP).

- **URL atual**: https://escservicosautomotivos-landing.doug-pacheco.workers.dev
- **URL final**: https://escservicosautomotivos.com.br (em migração — Fase 2)
- **Repo**: https://github.com/DougPachecoOliveira/escservicosautomotivos-landing
- **Deploy frontend**: automático em push pra `main` (Cloudflare Workers)
- **Deploy backend**: manual via `cd firebase && firebase deploy --only functions`

---

## Identidade da empresa

| Campo | Valor |
|---|---|
| Razão social | ESC Serviços Automotivos LTDA |
| CNPJ | 65.296.437/0001-60 |
| Endereço | Rua José Maria Balieiro, 241 — Centro, Barueri/SP — CEP 06401-126 |
| WhatsApp | (11) 99178-3807 |
| Email | suporte@escservicosautomotivos.com.br (grupo Zoho distribuído pra equipe) |

---

## Stack

| Camada | Tecnologia | Onde |
|---|---|---|
| Frontend | Next.js 16 + React 19 + TS + Tailwind v4 + shadcn/ui (static export) | Raiz do repo |
| Hosting | Cloudflare Workers + Static Assets | `wrangler.jsonc` |
| Headers segurança | CSP, HSTS, X-Frame-Options | `public/_headers` |
| Backend | Firebase Functions v2 (Node 22) + Firestore | `firebase/` |
| Region backend | southamerica-east1 (São Paulo) | `firebase.json` |
| Anti-bot | Cloudflare Turnstile (invisível) | Widget no form |
| Email transacional | Resend | `firebase/functions/src/utils/email.ts` |
| Email recebimento | Zoho (grupo suporte@) | DNS MX |
| Analytics | (planejado: Plausible) | Fase 2 |

---

## Fases do projeto

### Fase 1 — Landing + captura de leads ✅ COMPLETA (2026-05-17)

13 tasks entregues. Marcos:
- 8 seções compostas com voz oficial (manifesto, mantra, vocabulário-sim do brand)
- Form 4 steps com validação Zod + Turnstile + honeypot
- 3 páginas legais (política privacidade, termos, obrigado) LGPD-compliant
- 3 Cloud Functions: `criarLead`, `onLeadCreated`, `limparLeadsExpirados`
- Rules deny-default + TTL 180 dias em `leads.expiresAt`
- Rate-limit 5/h/IP + 100/h global
- Dark/light mode com toggle
- Smoke test ponta-a-ponta validado

### Fase 2 — Upgrade (em andamento)

| # | Item | Status |
|---|---|---|
| 14 | Apontar `escservicosautomotivos.com.br` pro Cloudflare (DNS + Custom Domain) | **in_progress** |
| 15 | FIPE no form (combobox Marca/Modelo + Ano) | pending |
| 16 | Tracking Plausible (eventos custom de funil) | pending |
| 17 | Mini-dashboard `/admin` (login Google + lista leads) | pending |
| 18 | CMS simples pra reels (upload fotos via dashboard) | pending |

**Adiado**: WhatsApp Business API (depende de conta WBA aprovada — sem urgência).

### Fase 3 — Futuro

- Lead → check-in via QR (cross-project Firebase)
- Blog técnico SEO
- Multi-tenant (caso vire franquia)

---

## Comandos essenciais

### Desenvolvimento local
```bash
cd ~/dev/escservicosautomotivos-landing
npm run dev                 # frontend em localhost:3000
npm run build               # build estático em /out
```

### Deploy backend
```bash
cd ~/dev/escservicosautomotivos-landing/firebase
firebase deploy --only functions                  # tudo
firebase deploy --only functions:criarLead        # 1 função
firebase deploy --only firestore:rules            # só rules
```

### Logs / debug
```bash
firebase functions:log --only criarLead -n 30
firebase functions:log --only onLeadCreated -n 30
```

### Smoke test backend (via curl)
```bash
curl -X POST https://criarlead-tm5jieohxa-rj.a.run.app \
  -H "Content-Type: application/json" \
  -H "Origin: https://escservicosautomotivos-landing.doug-pacheco.workers.dev" \
  -d '{"data":{"placa":"ABC-1234","marca":"Honda","modelo":"Civic","ano":2018,"sintomas":["barulho-freio"],"problemaDescricao":"smoke test","nome":"Teste","whatsapp":"(11) 99999-9999","email":"","consentimentoLgpd":true,"website":"","turnstileToken":"stub-dev-token"}}'
```

### Trocar destinatário/remetente de email
Edita `firebase/functions/.env`:
```
RESEND_TO=suporte@escservicosautomotivos.com.br
RESEND_FROM=ESC Site <site@escservicosautomotivos.com.br>
```
Depois: `firebase deploy --only functions:onLeadCreated`

---

## Credenciais e configurações

### Onde está cada credencial

| Credencial | Onde fica | Como rotacionar |
|---|---|---|
| Turnstile Secret Key | Google Secret Manager (`TURNSTILE_SECRET`) | `firebase functions:secrets:set TURNSTILE_SECRET` |
| Resend API Key | Google Secret Manager (`RESEND_API_KEY`) | `firebase functions:secrets:set RESEND_API_KEY` |
| Turnstile Site Key | `.env.production` (público) | Editar arquivo + push |
| URL Cloud Function | `.env.production` (público) | Editar arquivo + push |
| Firebase config | NÃO usamos no frontend (zero dependência Firebase SDK no client) | — |

### Variáveis no `.env.production` (commitado, públicas por design)
```
NEXT_PUBLIC_LEAD_URL=https://criarlead-tm5jieohxa-rj.a.run.app
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAADRIUqqVF9Elr6f8
```

### Variáveis no `firebase/functions/.env` (gitignored)
```
RESEND_TO=...          # destinatário do email
RESEND_FROM=...        # remetente
```

---

## Estrutura de pastas

```
escservicosautomotivos-landing/
├── app/                    Páginas Next.js (App Router)
│   ├── page.tsx           Home (compõe 8 seções)
│   ├── layout.tsx         Metadata + JSON-LD + tema
│   ├── politica-privacidade/
│   ├── termos/
│   ├── obrigado/
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── sections/          Hero, MetodoESC, ReelsProcesso, FastVsCompleto, etc
│   ├── ui/                shadcn (button, card, input, form, etc)
│   ├── Header.tsx         Sticky com logo + toggle dark/light
│   ├── Footer.tsx         CNPJ, contato, links legais
│   ├── FaixaCTA.tsx       Assinatura visual (laranja invariante)
│   ├── LogoAnimado.tsx    Framer Motion sequenciando 7 camadas SVG
│   ├── ThemeToggle.tsx
│   ├── WhatsappFAB.tsx
│   ├── TurnstileWidget.tsx
│   ├── PreDiagnosticoForm.tsx
│   └── LegalPageLayout.tsx
├── lib/
│   ├── schemas.ts         Zod (placa, veiculo, contato, lead)
│   ├── sintomas.ts        17 sintomas catalogados por sistema
│   ├── lead.ts            Client de envio pra Cloud Function
│   └── utils.ts           cn helper
├── public/
│   ├── _headers           Cloudflare HTTP headers (CSP, HSTS, etc)
│   └── logo/              7 SVGs do logo (copiados do app Flutter)
├── firebase/              BACKEND ISOLADO
│   ├── functions/
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── criarLead.ts
│   │   │   ├── onLeadCreated.ts
│   │   │   ├── limparLeadsExpirados.ts
│   │   │   └── utils/
│   │   │       ├── turnstile.ts
│   │   │       ├── ratelimit.ts
│   │   │       ├── sanitize.ts
│   │   │       └── email.ts
│   │   ├── .env           gitignored
│   │   ├── .env.example
│   │   └── package.json
│   ├── firestore.rules    deny-default
│   ├── firestore.indexes.json
│   └── firebase.json
├── .env.production        commitado (vars NEXT_PUBLIC_*)
├── wrangler.jsonc         Cloudflare Workers config
├── next.config.ts         output: "export" + images.unoptimized
├── tsconfig.json          exclude: ["node_modules", "firebase", "out", ".next"]
└── package.json
```

---

## Decisões arquiteturais importantes (não mudar sem refletir)

1. **Repo único (mono)** com `firebase/` dentro. Isolamento real é via project Firebase separado + secrets no Secret Manager, não pastas.
2. **Static export** (`output: "export"`) — landing é 100% estática, sem SSR. Headers via `_headers`.
3. **Cloudflare Workers + Static Assets** (não Pages, não Vercel) — Pages depreciado, Vercel Hobby viola ToS comercial.
4. **Firebase project separado** (`escservicosautomotivos-landing`) — blast radius zero vs app operacional.
5. **CORS allowlist explícito** no backend — sem `*`. Origens hardcoded em `criarLead.ts`.
6. **TTL 180 dias** em `leads.expiresAt` — LGPD requer retenção limitada.
7. **`invoker: "public"`** na CF — Cloud Functions v2 são privadas por default desde abril/2024.
8. **Plausible em vez de Google Analytics** — sem cookies, LGPD-clean (sem banner exigido).
9. **Frontend não carrega Firebase SDK** — zero dependência, form chama CF via fetch puro.
10. **`NEXT_PUBLIC_*` em `.env.production` commitado** — valores públicos por design (embutidos no JS do navegador).

---

## Gotchas resolvidos durante Fase 1 (não repetir)

- Cloudflare empurra Worker (não Pages) — escolher Workers + Static Assets na criação
- Sitemap/robots em static export exige `export const dynamic = "force-static"`
- Tsconfig do Next pega backend se não tiver `exclude: ["firebase"]`
- Cloud Functions v2 são privadas por default — `invoker: "public"`
- IAM mudou em 2024: adicionar manualmente `roles/cloudbuild.builds.builder`, `roles/artifactregistry.writer`, `roles/logging.logWriter`, `roles/datastore.user` à service account default
- Firestore composite index `(criadoEm DESC, __name__ DESC)` é redundante — remover
- Trigger background vs HTTPS não pode ser trocado em update — deletar função e recriar
- Resend sandbox só envia pra emails verificados na conta — só sai pra `daolive.wm@gmail.com` até DNS verificar

---

## O que falta fazer (priorizado)

### Imediato (Fase 2 in_progress)
1. **Apontar domínio** (DNS Cloudflare → Custom Domain no Worker)
2. **Verificar DNS Resend** (1 clique no painel Resend → trocar `.env` → redeploy)
3. **Setar `workers_dev: false`** no wrangler.jsonc após domínio ativo (desativa `.workers.dev`)

### Próximas semanas (Fase 2 pending)
4. FIPE no form (substituir 3 inputs livres por combobox)
5. Plausible tracking (eventos custom)
6. Dashboard `/admin` (lista leads + ações)
7. CMS de reels (trocar fotos sem deploy)

### Backlog (Fase 3)
- Cross-project Firebase pra integrar lead → check-in
- Blog SEO
- Multi-tenant

### Manutenção pendente
- Upgrade `firebase-functions@latest` (warning no deploy)
- Adicionar SPF default no domínio raiz (atualmente só Zoho — opcional)
- Adicionar fotos reais nos reels (substituir Unsplash)
- Confirmar/popular KPIs reais em Provas (atualmente história + métricas qualitativas)

---

## Recursos externos

- **Plano completo aprovado**: `~/.claude/plans/vou-criar-na-inpi-polymorphic-whisper.md`
- **Brand System**: `~/Downloads/ESC_Brand_System.md` + `ESC_Brand_System_Light.md`
- **Cloudflare dashboard**: https://dash.cloudflare.com/
- **Firebase console**: https://console.firebase.google.com/project/escservicosautomotivos-landing
- **Google Cloud IAM**: https://console.cloud.google.com/iam-admin/iam?project=escservicosautomotivos-landing
- **Resend**: https://resend.com/domains
- **Zoho Mail admin**: (acessar via login do Zoho)
- **Registro.br**: https://registro.br/painel
