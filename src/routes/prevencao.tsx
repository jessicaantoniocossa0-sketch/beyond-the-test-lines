import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Home, Landmark, School } from "lucide-react";
import { ChapterLayout, Secao } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/prevencao")({
  head: () => ({
    meta: [
      { title: "Prevenção — Como evitar a fraude académica e a cópia" },
      { name: "description", content: "Medidas para estudantes, professores, escolas e famílias prevenirem a fraude académica e a cópia nos testes." },
      { property: "og:title", content: "Prevenção — Fraude académica" },
      { property: "og:description", content: "O que estudantes, professores e escolas podem fazer contra a cópia." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Prevencao,
});

const papeis = [
  {
    quem: "Estudantes",
    icone: <GraduationCap className="h-6 w-6" />,
    itens: [
      "Estudar um pouco todos os dias, em vez de tudo na véspera;",
      "Fazer um horário de estudo e cumpri-lo;",
      "Tirar dúvidas com o professor ou estudar em grupo antes do teste;",
      "Citar sempre as fontes nos trabalhos;",
      "Recusar deixar copiar — é um acto de respeito por si e pelos outros;",
      "Aceitar uma nota baixa como sinal para melhorar, não como fim do mundo.",
    ],
  },
  {
    quem: "Professores",
    icone: <School className="h-6 w-6" />,
    itens: [
      "Explicar claramente as regras e as sanções antes das provas;",
      "Fazer várias versões do mesmo teste e distribuir bem os lugares;",
      "Vigiar com atenção e recolher telemóveis e aparelhos;",
      "Valorizar a avaliação contínua: trabalhos, apresentações, participação;",
      "Criar perguntas que exijam raciocínio, e não apenas memória;",
      "Dar o exemplo de honestidade e justiça.",
    ],
  },
  {
    quem: "Escolas e universidades",
    icone: <Landmark className="h-6 w-6" />,
    itens: [
      "Ter um regulamento de integridade académica claro e conhecido por todos;",
      "Aplicar as sanções de forma justa e igual para todos;",
      "Usar ferramentas de detecção de plágio;",
      "Proteger os enunciados contra fugas;",
      "Promover palestras e campanhas sobre ética;",
      "Combater qualquer forma de venda de notas.",
    ],
  },
  {
    quem: "Famílias",
    icone: <Home className="h-6 w-6" />,
    itens: [
      "Valorizar o esforço e a aprendizagem, não apenas a nota;",
      "Acompanhar o estudo dos filhos;",
      "Conversar sobre honestidade e responsabilidade;",
      "Não pressionar ao ponto de gerar medo do fracasso.",
    ],
  },
];

function Prevencao() {
  return (
    <ChapterLayout
      to="/prevencao"
      titulo="Prevenção"
      lead="Punir é necessário, mas prevenir é melhor. A integridade constrói-se em conjunto."
      nota="Cada um tem o seu papel ✓"
    >
      <Secao rotulo="4.1 Papéis" titulo="O que cada um pode fazer">
        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          {papeis.map((p) => (
            <div key={p.quem} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-3 text-primary">
                {p.icone}
                <h3 className="font-display text-xl font-medium text-foreground">{p.quem}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-[0.95rem] text-muted-foreground">
                {p.itens.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="font-semibold text-success">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Secao>

      <Secao rotulo="4.2 Alternativas" titulo="Em vez de copiar…">
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-2 bg-ink text-sm text-ink-foreground">
            <p className="p-3 font-medium">Atalho desonesto</p>
            <p className="p-3 font-medium">Alternativa honesta</p>
          </div>
          {[
            ["Fazer cábulas", "Usar os resumos como forma de estudar"],
            ["Copiar do colega", "Estudar em grupo antes do teste"],
            ["Comprar o trabalho", "Pedir mais prazo ou ajuda ao professor"],
            ["Copiar da internet", "Ler, compreender e citar a fonte"],
          ].map(([a, b]) => (
            <div key={a} className="grid grid-cols-2 border-t border-border bg-card text-[0.95rem]">
              <p className="p-3 text-muted-foreground line-through decoration-primary">{a}</p>
              <p className="p-3">{b}</p>
            </div>
          ))}
        </div>
      </Secao>
    </ChapterLayout>
  );
}
