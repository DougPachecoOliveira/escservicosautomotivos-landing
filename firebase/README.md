# ESC Serviços Automotivos — Backend (Firebase Functions)

Backend isolado da landing page. Project Firebase: `escservicosautomotivos-landing`.

## Estrutura

- `criarLead` — Cloud Function HTTPS pública. Recebe o form de pré-diagnóstico, valida (Zod + Turnstile + rate-limit + sanitização), grava em `leads/{id}`.
- `onLeadCreated` — trigger Firestore. Envia email pro atendimento via Resend quando lead novo chega.
- `limparLeadsExpirados` — scheduled diário 03:00 BRT. Deleta leads com `expiresAt < now` (backup do TTL nativo).

## Setup local

```bash
cd functions
npm install
npm run build
```

## Deploy

```bash
# 1. Criar secrets no Google Secret Manager
firebase functions:secrets:set TURNSTILE_SECRET
firebase functions:secrets:set RESEND_API_KEY

# 2. Deploy
npm run deploy

# Após o primeiro deploy, anotar a URL da criarLead e adicionar como
# NEXT_PUBLIC_LEAD_URL no Cloudflare Workers (project landing)
```

## Smoke test

```bash
# Substitua URL pela retornada no deploy
curl -X POST https://southamerica-east1-escservicosautomotivos-landing.cloudfunctions.net/criarLead \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d '{
    "data": {
      "placa": "ABC-1234",
      "marca": "Honda",
      "modelo": "Civic",
      "ano": 2018,
      "sintomas": ["barulho-freio"],
      "problemaDescricao": "Teste de smoke do form",
      "nome": "Teste",
      "whatsapp": "(11) 99999-9999",
      "email": "",
      "consentimentoLgpd": true,
      "website": "",
      "turnstileToken": "stub-dev-token"
    }
  }'
```

Pra dev local sem Turnstile real:
```bash
firebase functions:config:set turnstile_dev_bypass=1
# ou via env var no deploy
```

## Custos esperados

Dentro do free tier do Blaze:
- 2M invocações/mês grátis
- 400k GB-segundos/mês grátis
- Estimativa: 50-500 leads/mês = ~$0/mês

Alertas configurados: R$10, R$25, R$50.
