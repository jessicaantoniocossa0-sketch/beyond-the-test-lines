import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { capitulos, type Capitulo } from "@/lib/capitulos";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Props = {
  to: Capitulo["to"];
  titulo: ReactNode;
  lead: ReactNode;
  nota?: string;
  children: ReactNode;
};

export function ChapterLayout({ to, titulo, lead, nota, children }: Props) {
  const i = capitulos.findIndex((c) => c.to === to);
  const atual = capitulos[i] ?? capitulos[0]!;
  const anterior = i > 0 ? capitulos[i - 1] : null;
  const seguinte = i < capitulos.length - 1 ? capitulos[i + 1] : null;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="paper-lines border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-12 md:pb-20 md:pt-20">
          <div className="animate-rise flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-mono">Capítulo {atual.numero}</span>
            <span className="h-px w-10 bg-border" />
            <span>
              {i + 1} de {capitulos.length}
            </span>
          </div>
          <h1 className="animate-rise mt-4 font-display text-5xl font-medium leading-[0.95] md:text-8xl">
            {titulo}
          </h1>
          <div className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl [animation-delay:120ms]">
            {lead}
          </div>
          {nota && <p className="red-note animate-rise mt-6 text-2xl -rotate-1 [animation-delay:240ms]">{nota}</p>}
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 pt-14">{children}</main>

      <nav className="mx-auto mt-20 grid max-w-6xl gap-4 px-5 sm:grid-cols-2" aria-label="Navegação entre capítulos">
        {anterior ? (
          <Link
            to={anterior.to}
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Anterior
            </span>
            <span className="mt-1 block font-display text-2xl">{anterior.titulo}</span>
          </Link>
        ) : (
          <Link to="/" className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Anterior
            </span>
            <span className="mt-1 block font-display text-2xl">Capa</span>
          </Link>
        )}
        {seguinte && (
          <Link
            to={seguinte.to}
            className="group rounded-lg border border-border bg-card p-5 text-right transition-colors hover:border-primary sm:col-start-2"
          >
            <span className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
              Seguinte <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-1 block font-display text-2xl">{seguinte.titulo}</span>
          </Link>
        )}
      </nav>

      <SiteFooter />
    </div>
  );
}

export function Secao({
  id,
  rotulo,
  titulo,
  children,
}: {
  id?: string;
  rotulo: string;
  titulo: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="grid gap-6 border-t border-border py-12 first:border-t-0 first:pt-0 md:grid-cols-[220px_1fr] md:gap-12">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-primary">{rotulo}</p>
      </div>
      <div>
        <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">{titulo}</h2>
        <div className="chapter-body mt-5 max-w-3xl text-foreground/85">{children}</div>
      </div>
    </section>
  );
}

export function Cartao({ titulo, children, icone }: { titulo: string; children: ReactNode; icone?: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md">
      {icone && <div className="mb-3 text-primary">{icone}</div>}
      <h3 className="font-display text-xl font-medium">{titulo}</h3>
      <div className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

export function Destaque({ children, autor }: { children: ReactNode; autor?: string }) {
  return (
    <figure className="margin-line my-8 pl-6">
      <blockquote className="font-display text-2xl italic leading-snug md:text-3xl">{children}</blockquote>
      {autor && <figcaption className="mt-3 text-sm text-muted-foreground">— {autor}</figcaption>}
    </figure>
  );
}
