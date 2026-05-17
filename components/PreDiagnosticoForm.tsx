"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

import { sintomasComuns } from "@/lib/sintomas";
import {
  formatarPlaca,
  leadSchema,
  type Lead,
} from "@/lib/schemas";
import { LeadSubmitError, enviarLead } from "@/lib/lead";

// 4 steps: cada um valida apenas seus campos antes de avançar.
const stepsConfig = [
  {
    id: "placa",
    titulo: "Placa do veículo",
    descricao: "Identifica seu carro pra começar.",
    campos: ["placa"] as const,
  },
  {
    id: "veiculo",
    titulo: "Detalhes do veículo",
    descricao: "Marca, modelo e ano.",
    campos: ["marca", "modelo", "ano"] as const,
  },
  {
    id: "problema",
    titulo: "O que está acontecendo",
    descricao: "Selecione os sintomas e descreva com suas palavras.",
    campos: ["sintomas", "problemaDescricao"] as const,
  },
  {
    id: "contato",
    titulo: "Onde te respondemos",
    descricao: "Vamos te chamar no WhatsApp em até 2h úteis.",
    campos: ["nome", "whatsapp", "email", "consentimentoLgpd"] as const,
  },
] as const;

type StepIndex = 0 | 1 | 2 | 3;
type FormShape = z.input<typeof leadSchema>;

const defaultValues: FormShape = {
  placa: "",
  marca: "",
  modelo: "",
  ano: "" as unknown as number,
  sintomas: [],
  problemaDescricao: "",
  nome: "",
  whatsapp: "",
  email: "",
  consentimentoLgpd: false as unknown as true,
  website: "",
  turnstileToken: "stub-dev-token", // TODO: integrar Cloudflare Turnstile real
};

export function PreDiagnosticoForm() {
  const router = useRouter();
  const [step, setStep] = useState<StepIndex>(0);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormShape>({
    resolver: zodResolver(leadSchema),
    defaultValues,
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const sintomasAtuais = watch("sintomas") ?? [];

  async function avancarStep() {
    const camposDoStep = stepsConfig[step].campos as readonly (keyof FormShape)[];
    const ok = await trigger(camposDoStep);
    if (!ok) return;
    if (step < 3) setStep((step + 1) as StepIndex);
  }

  function voltarStep() {
    if (step > 0) setStep((step - 1) as StepIndex);
  }

  function alternarSintoma(id: string) {
    const atuais = new Set(sintomasAtuais);
    if (atuais.has(id)) atuais.delete(id);
    else atuais.add(id);
    setValue("sintomas", Array.from(atuais), { shouldValidate: true });
  }

  function onSubmit(data: FormShape) {
    setSubmitError(null);
    startTransition(async () => {
      try {
        await enviarLead(data as Lead);
        router.push("/obrigado");
      } catch (err) {
        const msg =
          err instanceof LeadSubmitError
            ? err.message
            : "Não foi possível enviar. Tente novamente.";
        setSubmitError(msg);
      }
    });
  }

  const stepAtual = stepsConfig[step];
  const progresso = ((step + 1) / stepsConfig.length) * 100;

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-10">
      {/* Progresso + título */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--fg-mantra)]">
            Passo {step + 1} de {stepsConfig.length}
          </p>
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-orange)]">
            {Math.round(progresso)}%
          </p>
        </div>
        <Progress value={progresso} className="mt-2 h-1.5" />
        <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-[var(--fg)]">
          {stepAtual.titulo}
        </h3>
        <p className="mt-1 text-sm text-[var(--fg-body)]">
          {stepAtual.descricao}
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 text-left"
        noValidate
      >
        {/* Honeypot — campo invisível que bot tende a preencher */}
        <input
          type="text"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        {/* Step 1: Placa */}
        {step === 0 && (
          <Campo erro={errors.placa?.message}>
            <Label htmlFor="placa">Placa</Label>
            <Input
              id="placa"
              type="text"
              inputMode="text"
              autoComplete="off"
              placeholder="ABC-1234 ou ABC1D23"
              maxLength={8}
              className="uppercase tracking-widest"
              {...register("placa", {
                onChange: (e) => {
                  e.target.value = formatarPlaca(e.target.value);
                },
              })}
            />
            <p className="text-xs text-[var(--fg-mantra)]">
              Aceita placa antiga ou Mercosul.
            </p>
          </Campo>
        )}

        {/* Step 2: Detalhes do veículo */}
        {step === 1 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo erro={errors.marca?.message}>
              <Label htmlFor="marca">Marca</Label>
              <Input
                id="marca"
                placeholder="Ex.: Honda"
                autoComplete="off"
                {...register("marca")}
              />
            </Campo>
            <Campo erro={errors.modelo?.message}>
              <Label htmlFor="modelo">Modelo</Label>
              <Input
                id="modelo"
                placeholder="Ex.: Civic LX"
                autoComplete="off"
                {...register("modelo")}
              />
            </Campo>
            <Campo erro={errors.ano?.message}>
              <Label htmlFor="ano">Ano</Label>
              <Input
                id="ano"
                type="number"
                inputMode="numeric"
                placeholder="2018"
                min={1980}
                max={new Date().getFullYear() + 1}
                {...register("ano", { valueAsNumber: true })}
              />
            </Campo>
          </div>
        )}

        {/* Step 3: Problema */}
        {step === 2 && (
          <div className="space-y-6">
            <Campo erro={errors.sintomas?.message as string | undefined}>
              <Label>Sintomas (opcional, marque os que se aplicam)</Label>
              <div className="flex flex-wrap gap-2">
                {sintomasComuns.map((s) => {
                  const ativo = sintomasAtuais.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => alternarSintoma(s.id)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                        ativo
                          ? "border-[var(--color-orange)] bg-[var(--color-orange)] text-[var(--color-black-deep)]"
                          : "border-[var(--border)] bg-[var(--bg)] text-[var(--fg-body)] hover:border-[var(--color-orange)]",
                      )}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </Campo>

            <Campo erro={errors.problemaDescricao?.message}>
              <Label htmlFor="problemaDescricao">Descreva com suas palavras</Label>
              <Textarea
                id="problemaDescricao"
                rows={5}
                placeholder="Ex.: Há uns dias o carro está fazendo um barulho ao frear, parece metal raspando. Acontece mais em descida..."
                {...register("problemaDescricao")}
              />
              <p className="text-xs text-[var(--fg-mantra)]">
                Quanto mais detalhe, mais preciso o nosso retorno.
              </p>
            </Campo>
          </div>
        )}

        {/* Step 4: Contato */}
        {step === 3 && (
          <div className="space-y-5">
            <Campo erro={errors.nome?.message}>
              <Label htmlFor="nome">Seu nome</Label>
              <Input
                id="nome"
                placeholder="Como podemos te chamar?"
                autoComplete="name"
                {...register("nome")}
              />
            </Campo>
            <div className="grid gap-5 sm:grid-cols-2">
              <Campo erro={errors.whatsapp?.message}>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  inputMode="tel"
                  placeholder="(11) 91234-5678"
                  autoComplete="tel"
                  {...register("whatsapp")}
                />
              </Campo>
              <Campo erro={errors.email?.message}>
                <Label htmlFor="email">E-mail (opcional)</Label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  {...register("email")}
                />
              </Campo>
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-sm transition-colors hover:border-[var(--color-orange)]/40">
              <input
                type="checkbox"
                {...register("consentimentoLgpd")}
                className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[var(--color-orange)]"
              />
              <span className="text-[var(--fg-body)]">
                Autorizo a ESC a usar meus dados para responder este
                pré-diagnóstico, conforme a{" "}
                <a
                  href="/politica-privacidade"
                  target="_blank"
                  className="text-[var(--color-orange)] underline decoration-dotted underline-offset-2"
                >
                  Política de Privacidade
                </a>
                .
              </span>
            </label>
            {errors.consentimentoLgpd?.message && (
              <p className="text-xs font-medium text-red-600 dark:text-red-400">
                {errors.consentimentoLgpd.message}
              </p>
            )}
          </div>
        )}

        {submitError && (
          <div className="rounded-xl border border-red-600/30 bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
            {submitError}
          </div>
        )}

        {/* Navegação */}
        <div className="flex items-center justify-between pt-4">
          {step > 0 ? (
            <Button
              type="button"
              variant="ghost"
              onClick={voltarStep}
              disabled={isPending}
              className="text-[var(--fg-body)] hover:text-[var(--color-orange)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          ) : (
            <span />
          )}

          {step < 3 ? (
            <Button
              type="button"
              onClick={avancarStep}
              className="h-12 rounded-full bg-[var(--color-orange)] px-6 font-bold text-[var(--color-black-deep)] hover:bg-[var(--color-orange-hover)]"
            >
              Continuar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isPending}
              className="h-12 rounded-full bg-[var(--color-orange)] px-6 font-bold text-[var(--color-black-deep)] hover:bg-[var(--color-orange-hover)] disabled:opacity-60"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  Enviar pré-diagnóstico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function Campo({
  erro,
  children,
}: {
  erro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      {children}
      {erro && (
        <p className="text-xs font-medium text-red-600 dark:text-red-400">
          {erro}
        </p>
      )}
    </div>
  );
}
