import { useState } from "react";

const perguntas = [
  { p: "Deixar um colega copiar a minha prova também é fraude.", v: true, e: "Quem facilita a cópia participa no acto e pode ser punido." },
  { p: "Se ninguém descobrir, copiar não traz consequências.", v: false, e: "Fica sempre a falta do conhecimento, que aparece mais tarde." },
  { p: "Usar um texto da internet sem citar a fonte é plágio.", v: true, e: "Apresentar ideias de outros como suas é plágio." },
  { p: "A fraude académica só prejudica quem a pratica.", v: false, e: "Prejudica colegas, a escola e toda a sociedade." },
];

export function TesteReflexao() {
  const [respostas, setRespostas] = useState<Record<number, boolean>>({});
  const certas = perguntas.filter((q, i) => respostas[i] === q.v).length;
  const respondidas = Object.keys(respostas).length;

  return (
    <div className="paper-lines rounded-lg border border-border bg-card p-5 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-2xl">Verdadeiro ou falso?</h3>
        <p className="red-note text-2xl">
          {respondidas === perguntas.length ? `${certas}/${perguntas.length} certas` : `${respondidas}/${perguntas.length}`}
        </p>
      </div>
      <ol className="mt-6 space-y-5">
        {perguntas.map((q, i) => {
          const r = respostas[i];
          const respondida = r !== undefined;
          const acertou = r === q.v;
          return (
            <li key={q.p} className="rounded-md bg-background/80 p-4">
              <p className="font-medium">
                {i + 1}. {q.p}
              </p>
              <div className="mt-3 flex gap-2">
                {[true, false].map((opcao) => (
                  <button
                    key={String(opcao)}
                    type="button"
                    disabled={respondida}
                    onClick={() => setRespostas((s) => ({ ...s, [i]: opcao }))}
                    className={`rounded-md border px-4 py-2 text-sm transition-colors disabled:cursor-default ${
                      respondida && r === opcao
                        ? acertou
                          ? "border-success bg-success text-primary-foreground"
                          : "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    {opcao ? "Verdadeiro" : "Falso"}
                  </button>
                ))}
              </div>
              {respondida && (
                <p className={`mt-3 text-sm ${acertou ? "text-success" : "text-primary"}`}>
                  {acertou ? "Certo! " : "Não. "}
                  {q.e}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      {respondidas > 0 && (
        <button
          type="button"
          onClick={() => setRespostas({})}
          className="mt-5 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Recomeçar
        </button>
      )}
    </div>
  );
}
