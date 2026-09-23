// Fonte única das avaliações do Google exibidas na landing.
// Transcritas (não são prints): acessíveis, dark-mode, leves e verificáveis
// pelo link real do perfil no Google. A prova de autenticidade é o LINK
// (+ a contagem de fotos reais no Google), não a imagem colada — por isso
// transcrevemos.
//
// COMO ADICIONAR UMA AVALIAÇÃO:
//   1. Abra o perfil no Google → aba "Avaliações".
//   2. Copie nome, texto e (se souber) o veículo do cliente.
//   3. Adicione um objeto ao array `avaliacoes` abaixo.
//   4. `destaque: true` faz aparecer na vitrine da home (usamos p/ quem tem foto).
//   5. Atualize TOTAL_AVALIACOES quando o número no Google mudar.
//
// Todas exibidas com autorização dos clientes.

/** Nota média exibida no selo (Google mostra "5,0"). */
export const NOTA_MEDIA = "5,0";

/** Total de avaliações no Google — atualizar conforme cresce. */
export const TOTAL_AVALIACOES = 27;

/** Link direto pro perfil no Google (abre a avaliação — usado no site todo). */
export const GOOGLE_REVIEWS_URL = "https://g.page/r/CXErZUKUAGHFEAE/review";

export type Avaliacao = {
  /** Nome do cliente como aparece no Google */
  nome: string;
  /** Veículo (opcional) — dá contexto e reforça o nicho */
  veiculo?: string;
  /** Texto da avaliação, transcrito */
  texto: string;
  /** Nota (1–5). Padrão 5. */
  nota?: number;
  /** Marca como destaque pra aparecer na vitrine principal da home */
  destaque?: boolean;
  /** Reviewer é "Local Guide" no Google (reforça credibilidade) */
  localGuide?: boolean;
  /** Nº de fotos que o cliente postou no Google (0 = sem foto) */
  fotos?: number;
};

export const avaliacoes: Avaliacao[] = [
  // ── DESTAQUES (têm fotos no Google — "as melhores") ─────────────────
  {
    nome: "Suzi Soares",
    veiculo: "VW Polo",
    destaque: true,
    fotos: 5,
    texto:
      "Meu Polo resolveu me dar um susto daqueles na Castelo Branco: perdeu potência, parou de ligar e eu já imaginava o pior. Foi direto de guincho pra ESC, oficina que conheço desde meu primeiro Celtinha e depois o Sandero. E mais uma vez ficou claro por que continuo confiando: check-in digital, fotos, laudo técnico, atualizações em tempo real e explicação clara de cada etapa. Nada de surpresa no preço, nada de empurrar serviço desnecessário. Saí com o carro funcionando e com a certeza de que escolhi o lugar certo.",
  },
  {
    nome: "Guilherme Jenaro",
    destaque: true,
    fotos: 9,
    texto:
      "Experiência nota 10 na ESC! Preço justo e transparente, sem surpresas. Orçamento aprovado direto pelo celular e nenhuma cobrança além do combinado. Acompanhei todo o serviço em tempo real, com atualizações pelo WhatsApp e fotos de cada etapa. O check-in digital registrou o estado do carro na entrada, recebi um laudo técnico detalhado e os mecânicos demonstraram muito capricho. O carro foi entregue limpo, no prazo e com a documentação organizada. Dá pra perceber que cuidam do carro como se fosse deles.",
  },
  {
    nome: "Ismael Bezi",
    destaque: true,
    localGuide: true,
    fotos: 29,
    texto:
      "Excelente oficina! Levei meu carro para uma revisão de rotina e fui surpreendido pelo cuidado de toda a equipe. Desde o primeiro contato me senti em boas mãos: explicaram cada etapa, mostraram o que precisava ser feito e não tive nenhuma surpresa no final. O trabalho foi entregue no prazo e o carro saiu perfeito. Ambiente organizado, atendimento transparente e preço justo. Já indiquei para amigos e familiares. Recomendo de olhos fechados!",
  },
  {
    nome: "José Simão",
    veiculo: "Chevrolet Prisma",
    destaque: true,
    localGuide: true,
    fotos: 6,
    texto:
      "Competentes e honestos, o time presta ótimo atendimento. Levei meu carro que estava com diagnóstico de outra oficina no valor de R$ 6 mil; aqui reavaliaram, detectaram o problema correto e cobraram o valor certo de R$ 1.500. Fizeram substituição só de peças originais e a troca apenas do que de fato precisava. Tenho um Chevrolet Prisma e recomendo tranquilamente o trabalho desse time.",
  },
  {
    nome: "Jonny Gomes",
    veiculo: "Chevrolet Celta",
    destaque: true,
    localGuide: true,
    fotos: 20,
    texto:
      "Atendimento excelente, os mecânicos passam confiança e explicam detalhadamente os serviços. Levei um Celta para troca de coxins do motor, correia dentada, bomba d'água e lavagem completa do sistema de arrefecimento — a forma como me passaram os processos foi diferenciada. Ainda fizeram uma revisão no sistema de injeção e a diferença na performance foi muito notável, nem esperava. Nunca tinha visto uma oficina atender dessa maneira, recomendadíssimo!",
  },
  {
    nome: "Debora Mayra",
    veiculo: "Troca de motor completo",
    destaque: true,
    localGuide: true,
    texto:
      "Oficina nota 1000! Precisei trocar um motor completo e tive uma excelente experiência. Fizeram um check-in detalhado e, durante todo o processo, me explicaram cada etapa com muita transparência. Também identificaram e corrigiram problemas que poderiam ter sido ignorados, evitando riscos futuros. A oficina tem ótima estrutura e equipamentos; após a montagem do motor, ainda fizeram o alinhamento e a cambagem. Trabalho de altíssimo nível e preço justo. Recomendo muito!",
  },
  {
    nome: "Elisabeth Melo",
    destaque: true,
    fotos: 2,
    texto:
      "Atendimento nota 10. Me avisaram de cada etapa no WhatsApp, foram 100% honestos com o valor e cuidaram do meu carro como se fosse deles. Dá pra confiar de olhos fechados.",
  },
  {
    nome: "David Bem",
    destaque: true,
    fotos: 2,
    texto:
      "Oficina 100% transparente. Preço combinado, prazo cumprido, respostas rápidas no WhatsApp e carro entregue limpo. Recomendo demais!",
  },
  {
    nome: "Jahmaycon",
    destaque: true,
    fotos: 4,
    texto:
      "Excelente. Atendimento impecável e serviço feito com clareza e objetividade.",
  },
  {
    nome: "Rodrigo Aragão",
    destaque: true,
    fotos: 2,
    texto: "Ótimo atendimento, transparente e preço justo.",
  },

  // ── DEMAIS AVALIAÇÕES (sem foto) ────────────────────────────────────
  {
    nome: "Juliana Noimann",
    texto:
      "MUITO TOP! Mecânicos caprichosos, serviço feito com atenção, diagnóstico preciso. Me avisaram de cada atualização e explicaram tudo que foi feito. Serviço impecável e preço justo — virei cliente fiel!",
  },
  {
    nome: "Fernando Vaz",
    texto:
      "Perfeito! Resolveu o problema do carro que a concessionária não resolveu. Indico 100%.",
  },
  {
    nome: "Geovane Fadine",
    texto:
      "Oficina incrível, totalmente confiável e justa. Fiz serviços lá e indico muito.",
  },
  {
    nome: "Luis Henrique",
    texto:
      "Serviço de qualidade e transparência! Faz tudo certinho. Recomendo.",
  },
  {
    nome: "Adricelio Silva",
    texto:
      "Atendimento nota 10, recomendo a quem está procurando um bom profissional.",
  },
  {
    nome: "Alexandre Bedutti",
    texto: "Ótimo atendimento, preço justo.",
  },
  {
    nome: "Rafael Alves",
    texto:
      "Recomendo. Trabalho eficiente e entregue sempre no dia combinado.",
  },
  // Avaliações que já estavam no site antes deste lote (mantidas):
  {
    nome: "Naor Antonio",
    veiculo: "Honda City 2025",
    texto:
      "Melhor lugar que já levei meu carro. Atendimento prestativo do começo ao fim, técnico e cuidadoso em cada detalhe, transparente em tudo. Pessoa justa, algo difícil de encontrar hoje em dia — recomendo de olhos fechados.",
  },
  {
    nome: "Rafael Caetano",
    veiculo: "VW Fox",
    texto:
      "Fiz o motor: estava com folgas e vazamentos, voltou como se fosse zero — conforto e consumo. Aproveitei e fiz suspensão, freios e arrefecimento. Mais de 1 ano e meio rodando sem dor de cabeça, minha oficina de confiança.",
  },
];

/** Avaliações marcadas como destaque (vitrine principal). */
export const avaliacoesDestaque = avaliacoes.filter((a) => a.destaque);
