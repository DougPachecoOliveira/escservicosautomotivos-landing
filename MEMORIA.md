# Memória do Projeto — Landing ESC

> Snapshot do estado atual + roadmap. Atualizado em 2026-05-18 (deep dive comercial).
> Fonte de verdade técnica: `README.md`. Este arquivo é índice + status + decisões.

---

## Visão geral

Site institucional + captura de leads (formulário pré-diagnóstico) da ESC
Serviços Automotivos. Operação real desde 2023, espaço próprio em
maio/2026 (Rua José Maria Balieiro, 241 — Centro, Barueri/SP).

- **URL produção**: https://escservicosautomotivos.com.br ✅
- **URL preview Cloudflare**: https://escservicosautomotivos-landing.doug-pacheco.workers.dev
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
| Instagram | @escservicosautomotivos *(handle assumido — confirmar)* |

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
| Email transacional | Resend (domínio verificado ✅) | `firebase/functions/src/utils/email.ts` |
| Email recebimento | Zoho (grupo suporte@) | DNS MX |
| Analytics | Plausible (configurado, aguardando ativar) | `lib/analytics.ts` |
| Animações | Framer Motion | scroll reveal, logo, counter |
| Imagens dinâmicas | next/og (OG image, favicon, apple-icon) | `app/opengraph-image.tsx` etc |
| FIPE | Parallelum direto (Brasil API quebrou) | `lib/fipe.ts` |

---

## Anatomia da landing (11 seções)

Numeração canônica (em ordem visual):

| # | Componente | Função |
|---|---|---|
| Hero | `Hero.tsx` | Manifesto "Sem improviso. Sem surpresa." + logo animado + CTAs + trust strip (3 badges) |
| 01 | `MetodoESC.tsx` | E·S·C com microcopy + manifesto interno |
| 02 | `ShowroomApp.tsx` | 4 mockups iPhone com telas reais (checkin, orçamento, execução, entrega) |
| 03 | `StackTecnologico.tsx` | 6 pilares: app próprio, cronometragem, WhatsApp, termo digital, auditoria, fontes técnicas |
| 04 | `ReelsProcesso.tsx` | Bento 3 fotos reais: equipe + trabalho-app + NPS (cliente avalia) |
| 05 | `FastVsCompleto.tsx` | 2 caminhos (Fast / Sistema Completo) com checklist + selo garantia |
| 06 | `OQueAtendemos.tsx` | 3 colunas: veículos / sistemas / fora do escopo |
| 07 | `EspecialistaVolks.tsx` | Expertise Volkswagen (T-Cross, Nivus, Polo, Saveiro, Up!, Gol + motores TSI/MPI/MSI) |
| 08 | `PreDiagnostico.tsx` | Form 4 steps com FIPE + Turnstile + badge "atendendo" + CTA WhatsApp alt |
| 09 | `Provas.tsx` | KPIs animados + 3 depoimentos reais (Naor/Suzi/Rafael) |
| 10 | `Localizacao.tsx` | Endereço + horário + telefone + WhatsApp + Google Maps |
| 11 | `NasRedes.tsx` | 2 posts Instagram clicáveis + CTA |
| Fim | `ManifestoFinal.tsx` | Mantra dos 3 pilares em tipografia gigante, fundo preto |

> **Onda 3 do deep dive (FAQ + QuemSomos + score Google) está reservada pra
> sessão futura.** Doug quer fazer com calma, com foto real do fundador, texto
> autoral e revisão literal das respostas. Plano salvo em
> `~/.claude/plans/timo-est-uma-linda-splendid-toucan.md`.

Componentes auxiliares: `Header`, `Footer`, `FaixaCTA`, `LogoAnimado`,
`ThemeToggle`, `WhatsappFAB`, `TurnstileWidget`, `PreDiagnosticoForm`,
`MockupIphone`, `SectionLabel`, `ScrollReveal`, `CounterAnimado`,
`LegalPageLayout`.

---

## Estrutura de assets

```
public/
├── _headers              Cloudflare headers (CSP, content-type, cache)
├── safari-pinned-tab.svg
├── logo/                 7 SVGs por camada + logo.jpeg composto
│   ├── layer_*.svg       camadas pro LogoAnimado
│   └── logo.jpeg         usado no OG image + apple-icon
├── app-screens/          5 telas do app pro ShowroomApp
│   ├── checkin.png
│   ├── orcamento.png
│   ├── execucao.png
│   ├── entrega.png
│   └── historico.png     (não usado ainda — reserva)
├── oficina/              fotos reais da operação
│   ├── equipe.jpg            → ReelsProcesso (foto principal)
│   ├── trabalho-app.jpg      → ReelsProcesso (mecânico usando)
│   ├── nps.png               → ReelsProcesso (cliente avalia)
│   ├── tela-em-uso.png       (reserva — não usado ativamente)
│   └── especialista-volks.jpg → EspecialistaVolks (campanha Insta)
└── instagram/            posts pra NasRedes
    ├── post-1.jpg
    └── post-2.jpg
```

---

## Identidade visual (ESC Brand System)

Fonte de verdade: `~/Downloads/ESC_Brand_System.md` + `ESC_Brand_System_Light.md`.

### Cores oficiais
- Laranja ESC: `#F26B1F` (CTAs, ícones, destaques — máximo 3 elementos por peça)
- Preto profundo: `#0A0A0A` (não preto puro)
- Branco puro: `#FFFFFF`
- Card light: `#F7F5F2`
- Cinzas: rgba sobre preto/branco

### Tipografia
- **Poppins** (Bold/Medium/Regular) via next/font

### Regra de ouro
- **Light**: "Preto é a voz · Laranja é o sinal · Branco é o espaço"
- **Dark**: "Branco é a voz · Laranja é o sinal · Preto é o espaço"
- Laranja invariante entre modos

### Frases-bandeira (literais, não reescrever)
- Manifesto: **"Sem improviso. Sem surpresa."**
- Mantra: **"Você entende antes · Acompanha durante · Confirma na entrega."**
- Serviço-âncora: **"Diagnóstico Método ESC"** (CTA padrão)
- Tagline filosófica: **"Método, transparência e capricho."**
- E.S.C.: Entendimento · Serviço Guiado · Confirmação

### Voz cliente vs voz interna
- **Cliente** (site, WhatsApp, PDFs): frases acima
- **Interna** (business case, pitch): "O futuro é de quem organiza", "Modelo B Factível"

---

## Status das fases

### Fase 1 ✅ COMPLETA (13 tasks)
Landing pública, form 4 steps, páginas legais LGPD, backend isolado (3 functions),
rate-limit, TTL nativo, smoke test passou — email chegando no grupo `suporte@`.

### Fase 2 — em andamento
| # | Item | Status |
|---|---|---|
| 14 | Domínio próprio Cloudflare | ✅ |
| 15 | FIPE no form (combobox) | ✅ (migrado pra Parallelum) |
| 16 | Tracking Plausible (11 eventos) | ✅ (aguarda `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`) |
| 17 | Mini-dashboard `/admin` | **pending** |
| 18 | CMS reels | **pending** |
| 19 | Upgrade visual Business Case (A+B+C) | ✅ |
| 20 | Upgrade tech showcase (A+B+C+D+E) | ✅ |

### Fase 3 — futuro
- Lead → check-in via QR (cross-project Firebase)
- Blog técnico SEO
- Multi-tenant (modelo franquia)

### Adiados
- **WhatsApp Business API** — não tem conta WBA aprovada
- **Live KPIs do app na landing (F)** — exige integração cross-project que decidimos
  evitar por LGPD

---

## Tudo que foi entregue na sessão de 17/05 (consolidado)

1. **Brand System aplicado**: cor `#F26B1F`, Poppins, dark/light toggle, faixa CTA assinatura
2. **Copy reescrita** na voz oficial (manifesto, mantra, vocabulário-sim)
3. **Dados oficiais** preenchidos (CNPJ, endereço, telefone, email)
4. **Páginas legais** (política/termos/obrigado) LGPD/ANPD-compliant
5. **Form pré-diagnóstico** 4 steps + Zod + honeypot
6. **Turnstile real** integrado (widget + secret)
7. **Backend Firebase** isolado (criarLead + onLeadCreated + cleanup TTL)
8. **Email Resend** com domínio verificado → `suporte@escservicosautomotivos.com.br`
9. **Migração de pasta**: `functions/` consolidada em `firebase/` (mono repo)
10. **Custom domain** apontado (Cloudflare, DNS migrado do Registro.br)
11. **FIPE** trocada de Brasil API (quebrou 500) → Parallelum direto
12. **OG image + favicon + apple-icon + manifest PWA + Safari pinned tab**
   gerados dinamicamente via `next/og` (zero ferramenta externa)
13. **Tracking Plausible**: 11 eventos custom (form_start, hero_cta_click, etc)
14. **Numeração consertada** das 11 seções
15. **2 seções novas**: ShowroomApp (mockups iPhone) + StackTecnologico
16. **3 seções extras**: OQueAtendemos + EspecialistaVolks + NasRedes
17. **ReelsProcesso refeito**: bento grid 3 fotos reais (sem Unsplash)
18. **Counter animado** + **Scroll reveal** + microinterações no logo
19. **Header com CTA**: "Diagnóstico Método ESC" sempre visível
20. **`MEMORIA.md`** mantido atualizado

---

## Decisões arquiteturais (não mudar sem refletir)

1. **Repo único (mono)** com `firebase/` dentro
2. **Static export** (`output: "export"`) — landing 100% estática
3. **Cloudflare Workers + Static Assets** (não Pages, não Vercel)
4. **Firebase project separado** (`escservicosautomotivos-landing`)
5. **CORS allowlist explícito** no backend
6. **TTL 180 dias** em `leads.expiresAt` (LGPD)
7. **`invoker: "public"`** na CF (v2 são privadas por default)
8. **Plausible em vez de Google Analytics** (sem cookies)
9. **Frontend não carrega Firebase SDK** (zero dependência, fetch puro)
10. **`NEXT_PUBLIC_*` em `.env.production` commitado** (públicos por design)
11. **FIPE via Parallelum direto** (Brasil API era proxy quebrado)
12. **Imagens via next/og** gerando PNG em build (zero design tool externo)

---

## Gotchas resolvidos (não repetir)

- Cloudflare empurra Worker (não Pages clássico) — escolher Workers + Static Assets
- Sitemap/robots/icons em static export exigem `export const dynamic = "force-static"`
- Tsconfig do Next pega backend se não tiver `exclude: ["firebase"]`
- Cloud Functions v2 privadas por default — `invoker: "public"`
- IAM mudou em 2024: adicionar manualmente roles cloudbuild, artifactregistry,
  logging, datastore.user à service account
- Firestore composite index `(criadoEm DESC, __name__ DESC)` é redundante
- Trigger background vs HTTPS não pode ser trocado — deletar e recriar
- Resend sandbox só envia pra emails verificados (resolvido com domínio)
- Arquivos sem extensão (next/og) precisam de `Content-Type` explícito em `_headers`
- `lucide-react` removeu ícones de marca (Instagram, etc) — usar SVG inline
- Brasil API FIPE quebrou (upstream FIPE bloqueou) — trocar pra Parallelum
- `sips` falha silenciosamente em batch com nomes contendo acentos/parênteses
  (validar 1 a 1 antes de `rm` original)

---

## Pendências priorizadas

### Imediato (próxima sessão)
- **#17 Dashboard `/admin`** — login Google + lista de leads paginada + filtros
  por status, marcar como contatado/spam
- **#18 CMS de reels** — trocar imagens da seção via dashboard sem precisar de push

### Onda 3 do deep dive (reservado, fazer com calma)
- **Seção QuemSomos** — foto do fundador + texto autoral
- **Seção FAQ** — 5 perguntas-âncora, redação revisada (garantia literal)
- **Score Google visível** em Localizacao
- Plano detalhado: `~/.claude/plans/timo-est-uma-linda-splendid-toucan.md`

### Operacional (você faz quando puder)
- **Plausible**: criar conta + setar `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` em `.env.production`
- **Google Business Place ID**: pegar e atualizar link "Avalie no Google" pra abrir
  direto na caixa de review (link atual é só busca)
- **Confirmar handle Instagram** (assumi `escservicosautomotivos`)
- **5ª tela do app** (`historico.png`) — decidir se vira 5º mockup ou seção dedicada
- **KPIs da seção Provas** — adiados na sessão 18/05; revisar números atuais
  (2023, Maio/26, 100%, < 2%) pra confirmar veracidade

### Conteúdo bom ter (não bloqueante)
- Fotos profissionais adicionais da oficina
- Avatares dos depoimentos
- Logo SVG branco (uso sobre fundo escuro)
- Logo SVG monocromático preto (papelaria, faturas)

### Backlog (Fase 3)
- Cross-project Firebase pra integrar lead → check-in
- Blog SEO
- Multi-tenant (modelo franquia)

---

## Comandos essenciais

### Desenvolvimento local
```bash
cd ~/dev/escservicosautomotivos-landing
npm run dev          # frontend em localhost:3000
npm run build        # build estático em /out
```

### Deploy
```bash
# Frontend: automático em git push pra main

# Backend manual:
cd ~/dev/escservicosautomotivos-landing/firebase
firebase deploy --only functions
firebase deploy --only functions:onLeadCreated  # uma função só
```

### Logs / debug
```bash
firebase functions:log --only criarLead -n 30
firebase functions:log --only onLeadCreated -n 30
```

### Trocar email destino/remetente
Editar `firebase/functions/.env`:
```
RESEND_TO=suporte@escservicosautomotivos.com.br
RESEND_FROM=ESC Site <site@escservicosautomotivos.com.br>
```
Depois: `firebase deploy --only functions:onLeadCreated`

---

## Custos reais (produção, validados)

| Item | Custo |
|---|---|
| Frontend (Cloudflare) | R$ 0/mês |
| Backend (Firebase Blaze) | < R$ 1/mês esperado |
| Email (Resend) | R$ 0/mês (3k emails grátis) |
| Turnstile | R$ 0/mês (free unlimited) |
| Plausible (futuro) | $9/mês ou self-host |
| **Total** | **R$ 0-R$ 50/mês** mesmo com 10× o volume |

Alertas billing Google Cloud configurados: R$10, R$25, R$50.

---

## Recursos externos

- **Plano completo**: `~/.claude/plans/vou-criar-na-inpi-polymorphic-whisper.md`
- **Brand System**: `~/Downloads/ESC_Brand_System.md` + `ESC_Brand_System_Light.md`
- **Cloudflare dashboard**: https://dash.cloudflare.com/
- **Firebase console**: https://console.firebase.google.com/project/escservicosautomotivos-landing
- **Google Cloud IAM**: https://console.cloud.google.com/iam-admin/iam?project=escservicosautomotivos-landing
- **Resend**: https://resend.com/domains
- **Zoho Mail admin**: via login Zoho
- **Registro.br**: https://registro.br/painel
- **Repo GitHub**: https://github.com/DougPachecoOliveira/escservicosautomotivos-landing
