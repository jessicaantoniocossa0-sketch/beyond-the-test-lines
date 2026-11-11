import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-exame-tics.jpg";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { capitulos } from "@/lib/capitulos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fraude académica e cópia nos testes — Trabalho" },
      {
        name: "description",
        content:
          "Um trabalho completo sobre fraude académica e cópia nos testes: introdução, desenvolvimento, consequências, prevenção e conclusão.",
      },
      { property: "og:title", content: "Fraude académica e cópia nos testes" },
      {
        property: "og:description",
        content: "Introdução, desenvolvimento, consequências, prevenção e conclusão sobre a fraude académica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const numeros = [
  { valor: "1 cábula", texto: "pode anular um teste inteiro e todo o esforço do semestre." },
  { valor: "0 valores", texto: "é a nota habitual de uma prova anulada por cópia." },
  { valor: "Para sempre", texto: "fica a falta do conhecimento que não foi aprendido." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="paper-lines">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.1fr_1fr] md:pb-24 md:pt-20">
          <div>
            <p className="animate-rise font-mono text-xs uppercase tracking-widest text-primary">
              Trabalho de pesquisa · Ética e cidadania
            </p>
            <h1 className="animate-rise mt-5 font-display text-5xl font-medium leading-[0.95] sm:text-6xl md:text-7xl">
              Fraude académica e <span className="strike-red">cópia</span> nos testes
            </h1>
            <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground [animation-delay:120ms]">
              Copiar parece um atalho. Neste trabalho vemos o que é a fraude académica, porque
              acontece, que consequências traz e como pode ser evitada.
            </p>
            <p className="red-note animate-rise mt-4 text-3xl -rotate-2 [animation-delay:300ms]">
              Quem copia, engana-se a si mesmo.
            </p>
            <div className="animate-rise mt-8 flex flex-wrap gap-3 [animation-delay:200ms]">
              <Link
                to="/introducao"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Começar a ler <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#sumario"
                className="inline-flex items-center rounded-md border border-foreground/20 px-5 py-3 font-medium transition-colors hover:bg-secondary"
              >
                Ver sumário
              </a>
            </div>
          </div>

          <div className="animate-rise relative [animation-delay:150ms]">
            <img
              src={heroImg}
              alt="Folha de teste de TICS sobre uma secretária, com uma caneta vermelha e uma cábula escondida"
              width={1600}
              height={1008}
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-2xl md:aspect-[4/5] md:object-[62%_50%]"
            />
            <div className="absolute -bottom-5 left-4 rounded-md border border-border bg-card px-4 py-3 shadow-lg md:-left-8">
              <p className="red-note text-2xl">Anulado!</p>
              <p className="text-xs text-muted-foreground">Prova com cábula detectada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-px px-5 py-10 sm:grid-cols-3 sm:gap-8">
          {numeros.map((n) => (
            <div key={n.valor} className="py-4">
              <p className="font-display text-4xl font-medium text-primary">{n.valor}</p>
              <p className="mt-2 text-sm text-muted-foreground">{n.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sumario" className="mx-auto max-w-6xl scroll-mt-20 px-5 pt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-medium md:text-5xl">Sumário</h2>
          <p className="text-sm text-muted-foreground">Leia pela ordem indicada</p>
        </div>

        <ol className="mt-8 border-t border-foreground/80">
          {capitulos.map((c) => (
            <li key={c.to}>
              <Link
                to={c.to}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-card md:grid-cols-[5rem_1fr_1.2fr_auto] md:px-2"
              >
                <span className="font-mono text-sm text-muted-foreground">{c.numero}</span>
                <span className="font-display text-2xl transition-colors group-hover:text-primary md:text-3xl">
                  {c.titulo}
                </span>
                <span className="hidden text-muted-foreground md:block">{c.resumo}</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <SiteFooter />
    </div>
  );
}
