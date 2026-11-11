import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-3xl leading-tight md:text-4xl">
            A nota passa. <span className="red-note text-4xl md:text-5xl">O conhecimento fica.</span>
          </p>
          <p className="mt-4 max-w-md text-sm text-ink-muted">
            Trabalho escolar sobre fraude académica e cópia nos testes: conceito, causas,
            consequências e formas de prevenção.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <Link to="/" className="text-ink-muted hover:text-ink-foreground">
            Voltar ao início
          </Link>
          <Link to="/referencias" className="text-ink-muted hover:text-ink-foreground">
            Referências
          </Link>
          <p className="mt-4 text-xs text-ink-muted">© {new Date().getFullYear()} · Integridade académica</p>
        </div>
      </div>
    </footer>
  );
}
