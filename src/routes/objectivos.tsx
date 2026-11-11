import { createFileRoute } from "@tanstack/react-router";
import { Compass, HelpCircle, ListChecks, Target } from "lucide-react";
import { Cartao, ChapterLayout, Destaque, Secao } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/objectivos")({
  head: () => ({
    meta: [
      { title: "Objectivos — Fraude académica e cópia nos testes" },
      {
        name: "description",
        content:
          "Objectivo geral, objectivos específicos e perguntas orientadoras do trabalho sobre fraude académica e cópia nos testes.",
      },
      { property: "og:title", content: "Objectivos — Fraude académica" },
      { property: "og:description", content: "O que este trabalho pretende alcançar e as perguntas a que procura responder." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Objectivos,
});

const especificos = [
  "Definir o conceito de fraude académica;",
  "Identificar os principais tipos de fraude e as formas mais comuns de cópia nos testes;",
  "Descrever as causas que levam os estudantes a copiar;",
  "Apresentar as consequências da fraude para o estudante, a escola e a sociedade;",
  "Propor medidas de prevenção para estudantes, professores, escolas e famílias.",
];

const perguntas = [
  "O que é a fraude académica e que formas pode assumir?",
  "Porque é que tantos estudantes copiam nos testes?",
  "Quais são as consequências de copiar, a curto e a longo prazo?",
  "O que pode ser feito para reduzir a fraude nas escolas?",
];

function Objectivos() {
  return (
    <ChapterLayout
      to="/objectivos"
      titulo="Objectivos"
      lead="Antes de desenvolver o tema, definimos com clareza o que queremos alcançar com este trabalho."
      nota="Onde queremos chegar →"
    >
      <Secao rotulo="2.1 Objectivo geral" titulo="O propósito principal">
        <div className="not-prose">
          <Cartao titulo="Objectivo geral" icone={<Target className="h-6 w-6" />}>
            Compreender o fenómeno da fraude académica, em especial a cópia nos testes, e reflectir sobre as
            suas causas, consequências e formas de prevenção.
          </Cartao>
        </div>
      </Secao>

      <Secao rotulo="2.2 Objectivos específicos" titulo="Os passos para lá chegar">
        <ol className="list-none space-y-4">
          {especificos.map((o, n) => (
            <li key={o} className="flex gap-4">
              <span className="font-mono text-sm text-primary">{String(n + 1).padStart(2, "0")}</span>
              <span>{o}</span>
            </li>
          ))}
        </ol>
      </Secao>

      <Secao rotulo="2.3 Perguntas orientadoras" titulo="As perguntas a que queremos responder">
        <div className="grid gap-4 sm:grid-cols-2">
          {perguntas.map((p) => (
            <div key={p} className="flex gap-3 rounded-lg border border-border bg-card p-5">
              <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p className="font-display text-xl leading-snug">{p}</p>
            </div>
          ))}
        </div>
      </Secao>

      <Secao rotulo="2.4 Resultados esperados" titulo="O que esperamos no final">
        <div className="grid gap-4 sm:grid-cols-2">
          <Cartao titulo="Mais consciência" icone={<Compass className="h-5 w-5" />}>
            Que os leitores percebam que copiar prejudica, acima de tudo, quem copia.
          </Cartao>
          <Cartao titulo="Atitudes concretas" icone={<ListChecks className="h-5 w-5" />}>
            Que estudantes e professores conheçam medidas práticas para evitar a fraude.
          </Cartao>
        </div>
        <Destaque autor="Compromisso deste trabalho">
          Mostrar que estudar com honestidade é o único caminho que leva a um conhecimento verdadeiro.
        </Destaque>
      </Secao>
    </ChapterLayout>
  );
}
