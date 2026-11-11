export type Capitulo = {
  to: "/introducao" | "/objectivos" | "/desenvolvimento" | "/consequencias" | "/prevencao" | "/conclusao" | "/referencias";
  numero: string;
  titulo: string;
  resumo: string;
};

// Ordem de leitura do trabalho.
export const capitulos: Capitulo[] = [
  {
    to: "/introducao",
    numero: "01",
    titulo: "Introdução",
    resumo: "O que é a fraude académica e porque o tema importa.",
  },
  {
    to: "/objectivos",
    numero: "02",
    titulo: "Objectivos",
    resumo: "O objectivo geral, os objectivos específicos e as perguntas do trabalho.",
  },
  {
    to: "/desenvolvimento",
    numero: "03",
    titulo: "Desenvolvimento",
    resumo: "Tipos de fraude, formas de cópia nos testes e as suas causas.",
  },
  {
    to: "/consequencias",
    numero: "04",
    titulo: "Consequências",
    resumo: "Os efeitos para o estudante, a escola e a sociedade.",
  },
  {
    to: "/prevencao",
    numero: "05",
    titulo: "Prevenção",
    resumo: "O que estudantes, professores e escolas podem fazer.",
  },
  {
    to: "/conclusao",
    numero: "06",
    titulo: "Conclusão",
    resumo: "Síntese final e um pequeno teste de reflexão.",
  },
  {
    to: "/referencias",
    numero: "07",
    titulo: "Referências",
    resumo: "Bibliografia consultada.",
  },
];
