// Catálogo de sintomas comuns. Cliente seleciona até 6 (multi-select).
// Agrupados por sistema pro form ficar mais navegável.
export const sintomasComuns = [
  // Freios
  { id: "barulho-freio", label: "Barulho ao frear" },
  { id: "pedal-baixo", label: "Pedal de freio baixo ou mole" },
  { id: "vibracao-freio", label: "Vibração ao frear" },

  // Motor
  { id: "luz-painel", label: "Luz acesa no painel" },
  { id: "falha-aceleracao", label: "Falha na aceleração" },
  { id: "motor-engasga", label: "Motor engasga em marcha lenta" },
  { id: "consumo-alto", label: "Consumo de combustível subiu" },

  // Suspensão e direção
  { id: "barulho-suspensao", label: "Barulho na suspensão" },
  { id: "direcao-puxando", label: "Direção puxando pra um lado" },
  { id: "vibracao-volante", label: "Volante vibrando" },

  // Elétrica
  { id: "bateria-fraca", label: "Bateria fraca / não pega" },
  { id: "vidros-luzes", label: "Vidros ou luzes com falha" },

  // Câmbio
  { id: "troca-marcha", label: "Trocas de marcha estranhas" },
  { id: "embreagem-pesada", label: "Embreagem pesada ou patinando" },

  // Outros
  { id: "ar-condicionado", label: "Ar-condicionado fraco" },
  { id: "vazamento", label: "Vazamento embaixo do carro" },
  { id: "revisao", label: "Revisão preventiva (sem problema)" },
] as const;
