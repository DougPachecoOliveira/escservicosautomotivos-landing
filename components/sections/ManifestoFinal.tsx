// Seção de fechamento — sempre fundo preto profundo (invariante entre dark/light).
// Inspirada nos slides manifesto do brand system (Tipo D — manifesto institucional).
// Voz CLIENTE: mantra dos 3 pilares como bandeira visual.

export function ManifestoFinal() {
  return (
    <section className="bg-[var(--color-black-deep)] py-28 text-white sm:py-40">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-orange)]">
          Método ESC
        </p>

        <h2 className="mt-10 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Você entende antes.
          <br />
          <span className="text-white/80">Acompanha durante.</span>
          <br />
          <span className="text-white/60">Confirma na entrega.</span>
        </h2>

        <p className="mx-auto mt-12 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Sem improviso. Sem surpresa. Cada serviço passa pelos três momentos
          do método. Você participa de todos.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-orange)]">
          <span className="h-px w-8 bg-[var(--color-orange)]" />
          Método, transparência e capricho
          <span className="h-px w-8 bg-[var(--color-orange)]" />
        </div>
      </div>
    </section>
  );
}
