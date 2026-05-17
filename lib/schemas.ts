import { z } from "zod";

// Aceita placa antiga ABC-1234 ou Mercosul ABC1D23 (com ou sem hífen)
const placaRegex = /^[A-Z]{3}-?\d[A-Z\d]\d{2}$/;

export const placaSchema = z
  .string()
  .trim()
  .toUpperCase()
  .min(7, "Placa precisa de 7 caracteres")
  .max(8, "Placa muito longa")
  .regex(placaRegex, "Formato: ABC-1234 ou ABC1D23");

export const veiculoSchema = z.object({
  placa: placaSchema,
  marca: z
    .string()
    .trim()
    .min(2, "Informe a marca")
    .max(40, "Marca muito longa"),
  modelo: z
    .string()
    .trim()
    .min(1, "Informe o modelo")
    .max(60, "Modelo muito longo"),
  ano: z.coerce
    .number()
    .int()
    .min(1980, "Ano antigo demais")
    .max(new Date().getFullYear() + 1, "Ano futuro inválido"),
});

export const problemaSchema = z.object({
  sintomas: z
    .array(z.string())
    .min(0)
    .max(6, "Selecione até 6 sintomas"),
  problemaDescricao: z
    .string()
    .trim()
    .min(10, "Descreva com pelo menos 10 caracteres")
    .max(2000, "Descrição muito longa"),
});

// WhatsApp: aceita (11) 91234-5678, 11912345678, +5511912345678
const whatsappRegex = /^\+?5?5?\s?\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/;

export const contatoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome")
    .max(80, "Nome muito longo"),
  whatsapp: z
    .string()
    .trim()
    .regex(whatsappRegex, "Formato: (11) 91234-5678"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .or(z.literal(""))
    .optional(),
  consentimentoLgpd: z
    .literal<boolean>(true, {
      message: "Você precisa autorizar para enviarmos sua solicitação",
    }),
});

// Schema completo do lead (o que vai pra Cloud Function)
export const leadSchema = z.object({
  ...veiculoSchema.shape,
  ...problemaSchema.shape,
  ...contatoSchema.shape,
  // Honeypot: deve vir SEMPRE vazio. Se vier preenchido, é bot.
  website: z.literal("").optional(),
  // Turnstile token: validado server-side na CF
  turnstileToken: z.string().min(1, "Validação de segurança pendente"),
});

export type Veiculo = z.infer<typeof veiculoSchema>;
export type Problema = z.infer<typeof problemaSchema>;
export type Contato = z.infer<typeof contatoSchema>;
export type Lead = z.infer<typeof leadSchema>;

// Normaliza WhatsApp pra formato canônico 55DDDNNNNNNNNN (sem símbolos)
export function normalizarWhatsapp(input: string): string {
  const digitos = input.replace(/\D/g, "");
  if (digitos.startsWith("55")) return digitos;
  if (digitos.length === 11) return `55${digitos}`;
  if (digitos.length === 10) return `55${digitos.slice(0, 2)}9${digitos.slice(2)}`;
  return digitos;
}

// Formata placa pra exibição (ABC-1234 ou ABC1D23 como veio)
export function formatarPlaca(input: string): string {
  const limpo = input.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  if (limpo.length === 7 && /^[A-Z]{3}\d{4}$/.test(limpo)) {
    return `${limpo.slice(0, 3)}-${limpo.slice(3)}`;
  }
  return limpo;
}
