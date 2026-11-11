import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { capitulos } from "@/lib/capitulos";

export function SiteHeader() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setAberto(false)}>
          <span className="font-display text-xl font-semibold tracking-tight">Integridade</span>
          <span className="red-note text-lg">académica</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Capítulos">
          {capitulos.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary font-medium" }}
            >
              <span className="mr-1 font-mono text-xs opacity-60">{c.numero}</span>
              {c.titulo}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Capítulos">
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {capitulos.map((c) => (
              <li key={c.to}>
                <Link
                  to={c.to}
                  onClick={() => setAberto(false)}
                  className="flex items-baseline gap-3 border-b border-border/60 py-3 last:border-0"
                  activeProps={{ className: "text-primary" }}
                >
                  <span className="font-mono text-xs text-muted-foreground">{c.numero}</span>
                  <span className="font-display text-lg">{c.titulo}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
