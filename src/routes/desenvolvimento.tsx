import { createFileRoute } from "@tanstack/react-router";
import {
  BookCopy,
  Brain,
  Clock,
  Eye,
  FileWarning,
  Hand,
  Laptop,
  MessageCircle,
  ScrollText,
  ShoppingCart,
  Smartphone,
  UserRoundX,
  Users,
  Watch,
} from "lucide-react";
import { Cartao, ChapterLayout, Destaque, Secao } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/desenvolvimento")({
  head: () => ({
    meta: [
      { title: "Desenvolvimento — Tipos, formas de cópia e causas da fraude académica" },
      { name: "description", content: "Conceito, tipos de fraude académica, formas de cópia nos testes e as causas que levam os estudantes a copiar." },
      { property: "og:title", content: "Desenvolvimento — Fraude académica" },
      { property: "og:description", content: "Tipos de fraude, formas de cópia nos testes e as suas causas." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Desenvolvimento,
});

const tipos = [
  { t: "Cópia nos testes", d: "Usar respostas de colegas, cábulas ou aparelhos durante uma avaliação.", i: <BookCopy /> },
  { t: "Plágio", d: "Apresentar textos, ideias ou trabalhos de outra pessoa como se fossem seus, sem citar a fonte.", i: <ScrollText /> },
  { t: "Compra de trabalhos", d: "Pagar a alguém para fazer trabalhos, monografias ou testes em seu nome.", i: <ShoppingCart /> },
  { t: "Troca de identidade", d: "Pedir a outra pessoa que faça o exame no seu lugar (personificação).", i: <UserRoundX /> },
  { t: "Falsificação", d: "Inventar dados, alterar notas, pautas, certificados ou justificativos de faltas.", i: <FileWarning /> },
  { t: "Colaboração proibida", d: "Fazer em grupo um trabalho que devia ser individual, ou partilhar respostas.", i: <Users /> },
  { t: "Fuga de enunciados", d: "Obter as perguntas do teste antes da prova, muitas vezes com ajuda de terceiros.", i: <Eye /> },
  { t: "Uso indevido de IA", d: "Entregar como próprio um texto gerado por inteligência artificial quando isso não é permitido.", i: <Laptop /> },
];

const formas = [
  { t: "Cábulas", d: "Papelinhos escondidos no estojo, na roupa, na calculadora ou na garrafa de água.", i: <ScrollText /> },
  { t: "Telemóvel", d: "Consultar fotos, mensagens ou a internet às escondidas.", i: <Smartphone /> },
  { t: "Relógio inteligente e auriculares", d: "Receber respostas ou consultar notas discretamente.", i: <Watch /> },
  { t: "Escrever no corpo ou na carteira", d: "Fórmulas e datas na mão, no braço ou na mesa.", i: <Hand /> },
  { t: "Olhar para o colega", d: "Espreitar a folha de quem está ao lado ou à frente.", i: <Eye /> },
  { t: "Sinais e conversas", d: "Códigos com dedos, tosse ou bilhetes passados entre colegas.", i: <MessageCircle /> },
];

const causas = [
  { t: "Pressão por boas notas", d: "Da família, da escola ou do próprio estudante, para passar de classe, conseguir bolsa ou entrar na universidade." },
  { t: "Falta de preparação", d: "Não estudar com tempo e chegar ao teste sem dominar a matéria." },
  { t: "Má gestão do tempo", d: "Acumular disciplinas, trabalho, tarefas de casa e deixar tudo para a última hora." },
  { t: "Medo de reprovar", d: "O receio do fracasso e da vergonha leva a escolher o atalho." },
  { t: "“Todos fazem”", d: "Quando copiar é visto como normal na turma, a pessoa sente-se em desvantagem se não o fizer." },
  { t: "Pouco risco percebido", d: "Vigilância fraca e castigos leves dão a ideia de que não há consequências." },
  { t: "Desinteresse pela matéria", d: "Quando o estudante não vê utilidade no conteúdo, só lhe interessa a nota." },
  { t: "Facilidade tecnológica", d: "Telemóveis e internet tornam a cópia rápida e discreta." },
];

function Desenvolvimento() {
  return (
    <ChapterLayout
      to="/desenvolvimento"
      titulo="Desenvolvimento"
      lead="Para combater a fraude é preciso conhecê-la: o que é, que formas assume e o que leva um estudante a copiar."
      nota="O núcleo do trabalho"
    >
      <Secao rotulo="2.1 Conceito" titulo="O que é a fraude académica?">
        <p>
          A fraude académica (também chamada <em>desonestidade académica</em>) é o conjunto de
          comportamentos em que o estudante obtém, ou tenta obter, uma vantagem injusta numa avaliação. O
          contrário da fraude é a <span className="highlight">integridade académica</span>: agir com
          honestidade, confiança, justiça, respeito, responsabilidade e coragem — os valores fundamentais
          definidos pelo <em>International Center for Academic Integrity</em>.
        </p>
        <p>
          A <strong>cópia nos testes</strong> é a forma mais visível de fraude. Acontece quando o estudante,
          durante uma prova, usa informação que não está autorizada: as respostas de um colega, uma cábula,
          o telemóvel ou qualquer outro meio.
        </p>
        <Destaque>Copiar não é só “olhar para o lado”: é apresentar como seu um conhecimento que não tem.</Destaque>
      </Secao>

      <Secao rotulo="2.2 Tipos" titulo="Principais tipos de fraude académica">
        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          {tipos.map((x) => (
            <Cartao key={x.t} titulo={x.t} icone={x.i}>
              {x.d}
            </Cartao>
          ))}
        </div>
      </Secao>

      <Secao rotulo="2.3 Nos testes" titulo="Formas mais comuns de cópia nos testes">
        <p>
          Com o tempo, os métodos de cópia foram mudando. Das tradicionais cábulas em papel passou-se a meios
          digitais cada vez mais discretos:
        </p>
        <ul className="mt-6 divide-y divide-border rounded-lg border border-border bg-card">
          {formas.map((x) => (
            <li key={x.t} className="flex gap-4 p-4">
              <span className="mt-0.5 text-primary [&>svg]:h-5 [&>svg]:w-5">{x.i}</span>
              <span>
                <span className="block font-medium text-foreground">{x.t}</span>
                <span className="text-[0.95rem] text-muted-foreground">{x.d}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          Também é fraude <strong>deixar copiar</strong>. O estudante que mostra a sua prova ou envia
          respostas a um colega participa no acto e, na maioria dos regulamentos, é punido da mesma forma.
        </p>
      </Secao>

      <Secao rotulo="2.4 Causas" titulo="Porque é que os estudantes copiam?">
        <p>
          Estudos como os de Donald McCabe, um dos maiores investigadores do tema, mostram que a cópia está
          ligada tanto a factores <strong>individuais</strong> (preparação, motivação, valores) como a
          factores do <strong>ambiente</strong> (cultura da turma, vigilância, regras da escola).
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {causas.map((c, idx) => (
            <div key={c.t} className="flex gap-4 rounded-lg border border-border bg-card p-4">
              <span className="font-display text-2xl text-primary">{String(idx + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-medium text-foreground">{c.t}</p>
                <p className="text-[0.95rem] text-muted-foreground">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Secao>

      <Secao rotulo="2.5 Análise" titulo="A fraude como problema de toda a comunidade">
        <p>
          A fraude académica não é apenas culpa do estudante. Quando os professores fecham os olhos, quando
          as escolas não têm regras claras ou quando se vendem notas e enunciados, cria-se uma cultura em que
          a desonestidade parece normal. Em alguns casos, a fraude chega a envolver corrupção — por exemplo,
          pagamentos para obter notas ou acesso antecipado aos exames.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Cartao titulo="Estudante" icone={<Brain />}>Escolhe entre o esforço e o atalho.</Cartao>
          <Cartao titulo="Professor" icone={<Eye />}>Avalia, vigia e dá o exemplo.</Cartao>
          <Cartao titulo="Escola e família" icone={<Clock />}>Definem regras, valores e expectativas.</Cartao>
        </div>
      </Secao>
    </ChapterLayout>
  );
}
