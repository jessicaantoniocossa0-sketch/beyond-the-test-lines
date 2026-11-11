import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout, Destaque, Secao } from "@/components/site/ChapterLayout";
import { TesteReflexao } from "@/components/site/TesteReflexao";

export const Route = createFileRoute("/conclusao")({
  head: () => ({
    meta: [
      { title: "Conclusão — Fraude académica e cópia nos testes" },
      { name: "description", content: "Síntese final sobre a fraude académica, recomendações e um pequeno teste de verdadeiro ou falso." },
      { property: "og:title", content: "Conclusão — Fraude académica" },
      { property: "og:description", content: "Síntese final e um pequeno teste de reflexão." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Conclusao,
});

function Conclusao() {
  return (
    <ChapterLayout
      to="/conclusao"
      titulo="Conclusão"
      lead="Depois de estudar o tema, fica claro que a fraude académica é um problema sério, com causas reais e consequências duradouras."
      nota="Para levar consigo"
    >
      <Secao rotulo="5.1 Síntese" titulo="O que aprendemos">
        <p>
          A fraude académica, e em especial a cópia nos testes, consiste em obter uma avaliação de forma
          desonesta. Pode assumir muitas formas — cábulas, telemóveis, plágio, compra de trabalhos ou troca de
          identidade — e é motivada sobretudo pela pressão por notas, pela falta de preparação, pela má gestão
          do tempo e por um ambiente que a tolera.
        </p>
        <p>
          As suas consequências vão muito além da anulação de uma prova: afectam a formação do estudante, a
          justiça entre colegas, a credibilidade das escolas e a qualidade dos profissionais de que a
          sociedade precisa.
        </p>
        <p>
          Concluímos que a melhor forma de combater a fraude é a <span className="highlight">prevenção</span>:
          estudantes responsáveis, professores atentos, escolas com regras claras e famílias que valorizem o
          esforço mais do que a nota.
        </p>
        <Destaque autor="Mensagem final">
          Uma nota conquistada com honestidade vale mais do que um vinte copiado.
        </Destaque>
      </Secao>

      <Secao rotulo="5.2 Recomendações" titulo="Recomendações">
        <ul className="space-y-3">
          {[
            "Que os estudantes assumam a responsabilidade pela sua aprendizagem;",
            "Que as escolas divulguem e apliquem regulamentos de integridade académica;",
            "Que os professores diversifiquem as formas de avaliação;",
            "Que se realizem campanhas de sensibilização sobre ética e honestidade.",
          ].map((r) => (
            <li key={r} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Secao>

      <Secao rotulo="5.3 Reflexão" titulo="Teste rápido — sem copiar!">
        <TesteReflexao />
      </Secao>
    </ChapterLayout>
  );
}
