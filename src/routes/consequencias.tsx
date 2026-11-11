import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout, Destaque, Secao } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/consequencias")({
  head: () => ({
    meta: [
      { title: "Consequências da fraude académica e da cópia nos testes" },
      { name: "description", content: "Consequências académicas, pessoais, sociais e legais da fraude académica e da cópia nos testes." },
      { property: "og:title", content: "Consequências — Fraude académica" },
      { property: "og:description", content: "Os efeitos da cópia para o estudante, a escola e a sociedade." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Consequencias,
});

const escala = [
  { nivel: "Leve", t: "Advertência e anulação da prova", d: "O teste é retirado e recebe nota zero." },
  { nivel: "Moderada", t: "Reprovação na disciplina", d: "Perde-se a época de avaliação ou o semestre." },
  { nivel: "Grave", t: "Suspensão", d: "Afastamento temporário da escola ou da universidade." },
  { nivel: "Muito grave", t: "Expulsão e anulação do diploma", d: "Em casos de falsificação ou fraude repetida." },
];

const grupos = [
  {
    quem: "Para o estudante",
    itens: [
      "Anulação do teste, reprovação, suspensão ou expulsão;",
      "Registo disciplinar no processo individual;",
      "Lacunas no conhecimento que se acumulam nas classes seguintes;",
      "Perda de confiança dos professores, colegas e família;",
      "Ansiedade, culpa e medo de ser descoberto;",
      "Hábito de procurar sempre o caminho mais fácil.",
    ],
  },
  {
    quem: "Para os colegas",
    itens: [
      "Injustiça: quem estudou pode ter nota igual ou inferior a quem copiou;",
      "Desmotivação para estudar com honestidade;",
      "Risco de serem punidos se deixarem copiar.",
    ],
  },
  {
    quem: "Para a escola",
    itens: [
      "As notas deixam de ser fiáveis;",
      "Perda de prestígio e descrédito dos certificados;",
      "Mais custos com vigilância e repetição de exames.",
    ],
  },
  {
    quem: "Para a sociedade",
    itens: [
      "Profissionais incompetentes: médicos, professores, engenheiros sem preparação real;",
      "Riscos para a vida e a segurança das pessoas;",
      "Normalização da corrupção e da desonestidade no trabalho.",
    ],
  },
];

function Consequencias() {
  return (
    <ChapterLayout
      to="/consequencias"
      titulo={
        <>
          Conse<span className="text-primary">quências</span>
        </>
      }
      lead="Copiar pode resolver um teste, mas cria problemas muito maiores — hoje e no futuro."
      nota="O preço do atalho"
    >
      <Secao rotulo="3.1 Disciplinares" titulo="As sanções aumentam com a gravidade">
        <p>
          Cada escola e universidade tem o seu regulamento, mas as sanções costumam seguir uma escala
          semelhante:
        </p>
        <ol className="mt-6 space-y-3">
          {escala.map((e, i) => (
            <li key={e.t} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-border bg-card p-4">
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground" style={{ opacity: 0.55 + i * 0.15 }}>
                  {i + 1}
                </span>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{e.nivel}</p>
                <p className="font-display text-xl">{e.t}</p>
                <p className="text-[0.95rem] text-muted-foreground">{e.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Secao>

      <Secao rotulo="3.2 Quem perde" titulo="Uma fraude, muitas vítimas">
        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          {grupos.map((g) => (
            <div key={g.quem} className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-display text-xl font-medium">{g.quem}</h3>
              <ul className="mt-3 space-y-2 text-[0.95rem] text-muted-foreground">
                {g.itens.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="red-note text-xl leading-none">×</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Secao>

      <Secao rotulo="3.3 Legais" titulo="Quando a fraude se torna crime">
        <p>
          Algumas formas de fraude ultrapassam a escola. <strong>Falsificar certificados, pautas ou
          diplomas</strong>, <strong>subornar</strong> alguém para obter notas ou vender enunciados de exame
          são actos que podem ser tratados pela lei como falsificação de documentos ou corrupção, com
          processos judiciais, multas e até prisão.
        </p>
        <Destaque autor="Reflexão">
          Imagine ser operado por um médico que passou nos exames a copiar. A fraude de hoje é o risco de
          amanhã.
        </Destaque>
      </Secao>
    </ChapterLayout>
  );
}
