import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout, Destaque, Secao } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/introducao")({
  head: () => ({
    meta: [
      { title: "Introdução — Fraude académica e cópia nos testes" },
      { name: "description", content: "O que é a fraude académica, porque é um problema actual e quais os objectivos deste trabalho." },
      { property: "og:title", content: "Introdução — Fraude académica" },
      { property: "og:description", content: "O que é a fraude académica e porque o tema importa." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Introducao,
});

function Introducao() {
  return (
    <ChapterLayout
      to="/introducao"
      titulo="Introdução"
      lead="A escola existe para formar pessoas capazes e honestas. A fraude académica ataca exactamente essas duas coisas."
      nota="Ponto de partida →"
    >
      <Secao rotulo="1.1 Contexto" titulo="Um problema antigo, com novas formas">
        <p>
          A <strong>fraude académica</strong> é toda a acção desonesta praticada por um estudante (ou por
          outra pessoa a seu favor) para obter uma avaliação que não corresponde ao seu verdadeiro
          conhecimento ou esforço. A forma mais conhecida é a <span className="highlight">cópia nos testes</span>,
          mas existem muitas outras: o plágio, a compra de trabalhos, a troca de identidade nos exames e a
          falsificação de documentos.
        </p>
        <p>
          Este fenómeno sempre existiu nas escolas e universidades. Hoje, com os telemóveis, os relógios
          inteligentes, as redes sociais e a inteligência artificial, tornou-se mais fácil, mais rápido e
          mais difícil de detectar.
        </p>
      </Secao>

      <Secao rotulo="1.2 Importância" titulo="Porque falar deste tema?">
        <p>
          Quando um estudante copia, a nota deixa de mostrar aquilo que ele realmente sabe. Isso prejudica o
          próprio estudante, que fica com lacunas no conhecimento; os colegas honestos, que são comparados de
          forma injusta; e a sociedade, que no futuro vai depender de profissionais mal preparados.
        </p>
        <Destaque autor="Ideia central do trabalho">
          A integridade académica não é apenas uma regra da escola — é a base da confiança em qualquer
          diploma.
        </Destaque>
      </Secao>

      <Secao rotulo="1.3 Objectivos" titulo="O que pretendemos com este trabalho">
        <p className="font-medium text-foreground">Objectivo geral</p>
        <p>Compreender o fenómeno da fraude académica, em especial a cópia nos testes, e reflectir sobre os seus efeitos.</p>
        <p className="mt-6 font-medium text-foreground">Objectivos específicos</p>
        <ul className="mt-3 list-none space-y-3">
          {[
            "Definir o conceito de fraude académica;",
            "Identificar os principais tipos de fraude e as formas mais comuns de cópia;",
            "Descrever as causas que levam os estudantes a copiar;",
            "Apresentar as consequências para o estudante, a escola e a sociedade;",
            "Propor medidas de prevenção.",
          ].map((o) => (
            <li key={o} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </Secao>

      <Secao rotulo="1.4 Metodologia" titulo="Como foi feito">
        <p>
          O trabalho foi elaborado através de <strong>pesquisa bibliográfica</strong>, com consulta de livros,
          artigos científicos e documentos de organizações ligadas à educação, complementada pela observação
          da realidade escolar.
        </p>
      </Secao>
    </ChapterLayout>
  );
}
