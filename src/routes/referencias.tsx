import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout, Secao } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/referencias")({
  head: () => ({
    meta: [
      { title: "Referências bibliográficas — Fraude académica" },
      { name: "description", content: "Bibliografia consultada para o trabalho sobre fraude académica e cópia nos testes." },
      { property: "og:title", content: "Referências — Fraude académica" },
      { property: "og:description", content: "Bibliografia consultada para o trabalho." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Referencias,
});

const refs = [
  "BRETAG, T. (Ed.). (2016). Handbook of Academic Integrity. Singapura: Springer.",
  "HALLAK, J.; POISSON, M. (2007). Corrupt schools, corrupt universities: What can be done? Paris: IIEP-UNESCO.",
  "INTERNATIONAL CENTER FOR ACADEMIC INTEGRITY (2021). The Fundamental Values of Academic Integrity (3.ª ed.).",
  "McCABE, D. L.; TREVIÑO, L. K.; BUTTERFIELD, K. D. (2001). Cheating in academic institutions: A decade of research. Ethics & Behavior, 11(3), 219–232.",
  "McCABE, D. L.; BUTTERFIELD, K. D.; TREVIÑO, L. K. (2012). Cheating in College: Why Students Do It and What Educators Can Do about It. Baltimore: Johns Hopkins University Press.",
];

function Referencias() {
  return (
    <ChapterLayout
      to="/referencias"
      titulo="Referências"
      lead="Obras e documentos que serviram de base a este trabalho."
    >
      <Secao rotulo="6.1 Bibliografia" titulo="Bibliografia">
        <ol className="space-y-4">
          {refs.map((r, i) => (
            <li key={r} className="grid grid-cols-[2rem_1fr] gap-2 border-b border-border pb-4 last:border-0">
              <span className="font-mono text-sm text-muted-foreground">[{i + 1}]</span>
              <span>{r}</span>
            </li>
          ))}
        </ol>
      </Secao>
    </ChapterLayout>
  );
}
