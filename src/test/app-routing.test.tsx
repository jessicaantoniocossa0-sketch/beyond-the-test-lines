import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { capitulos } from "@/lib/capitulos";
import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches a page for / instead of falling back to not found", () => {
    expect(router.matchRoutes("/").at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("keeps the chapters in reading order", () => {
    expect(capitulos.map((c) => c.titulo)).toEqual([
      "Introdução",
      "Desenvolvimento",
      "Consequências",
      "Prevenção",
      "Conclusão",
      "Referências",
    ]);
  });

  it.each(capitulos.map((c) => c.to))("matches a page for %s", (path) => {
    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(path);
  });
});
