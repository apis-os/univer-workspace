const A1_IN_FORMULA = /\$?[A-Za-z]{1,3}\$?\d+(?::\$?[A-Za-z]{1,3}\$?\d+)?/g;

function colIndex(letters: string): number {
  let col = 0;
  for (let i = 0; i < letters.length; i += 1) {
    col = col * 26 + (letters.charCodeAt(i) - 64);
  }
  return col - 1;
}

function colName(col: number): string {
  let n = col + 1;
  let letters = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return letters;
}

export function expandA1List(precedents: readonly string[]): string[] {
  const result: string[] = [];
  const seen = new Set<string>();

  for (const prec of precedents) {
    const trimmed = prec.trim();
    if (!trimmed) continue;
    const parts = trimmed.split(":");
    const start = parts[0]?.trim();
    const end = parts[1]?.trim();
    if (!start) continue;
    if (!end || start.toUpperCase() === end.toUpperCase()) {
      const a1 = start.toUpperCase();
      if (!seen.has(a1)) {
        seen.add(a1);
        result.push(a1);
      }
      continue;
    }
    const startMatch = /^([A-Za-z]+)(\d+)$/.exec(start);
    const endMatch = /^([A-Za-z]+)(\d+)$/.exec(end);
    if (!startMatch || !endMatch || !startMatch[1] || !startMatch[2] || !endMatch[1] || !endMatch[2]) {
      const a1 = trimmed.toUpperCase();
      if (!seen.has(a1)) {
        seen.add(a1);
        result.push(a1);
      }
      continue;
    }

    const minCol = Math.min(
      colIndex(startMatch[1].toUpperCase()),
      colIndex(endMatch[1].toUpperCase())
    );
    const maxCol = Math.max(
      colIndex(startMatch[1].toUpperCase()),
      colIndex(endMatch[1].toUpperCase())
    );
    const minRow = Math.min(
      parseInt(startMatch[2], 10),
      parseInt(endMatch[2], 10)
    );
    const maxRow = Math.max(
      parseInt(startMatch[2], 10),
      parseInt(endMatch[2], 10)
    );

    for (let r = minRow; r <= maxRow; r += 1) {
      for (let c = minCol; c <= maxCol; c += 1) {
        const a1 = `${colName(c)}${r}`;
        if (!seen.has(a1)) {
          seen.add(a1);
          result.push(a1);
        }
      }
    }
  }

  return result;
}

export function precedentsFromFormula(f: unknown): string[] {
  if (typeof f !== "string" || !f.trim()) return [];
  const seen = new Set<string>();
  const ranges: string[] = [];
  const matches = f.match(A1_IN_FORMULA) ?? [];
  for (const match of matches) {
    const a1 = match.replaceAll("$", "").toUpperCase();
    if (!a1 || seen.has(a1)) continue;
    seen.add(a1);
    ranges.push(a1);
  }
  return ranges;
}

export interface CellNarrative {
  readonly range: string;
  readonly f?: unknown;
  readonly v?: unknown;
  readonly precedents: readonly string[];
  readonly text: string;
}

export function narrativeFromInspect(input: {
  readonly range: string;
  readonly f?: unknown;
  readonly v?: unknown;
  readonly precedents?: readonly string[] | undefined;
  readonly cells?: unknown;
}): CellNarrative {
  let f = input.f;
  let v = input.v;

  if (f === undefined && v === undefined && Array.isArray(input.cells)) {
    const firstRow = input.cells[0];
    if (Array.isArray(firstRow)) {
      const firstCell = firstRow[0];
      if (firstCell && typeof firstCell === "object") {
        if ("f" in firstCell) f = (firstCell as Record<string, unknown>).f;
        if ("v" in firstCell) v = (firstCell as Record<string, unknown>).v;
      }
    }
  }

  const rawPrecedents =
    input.precedents && input.precedents.length > 0
      ? input.precedents
      : precedentsFromFormula(f);

  const precedents = expandA1List(rawPrecedents);

  let valuePart = "";
  if (f !== undefined && v !== undefined) {
    valuePart = `${String(f)} → ${String(v)}`;
  } else if (f !== undefined) {
    valuePart = `${String(f)}`;
  } else if (v !== undefined) {
    valuePart = `${String(v)}`;
  } else {
    valuePart = "empty";
  }

  let text = `${input.range} is ${valuePart}.`;
  if (precedents.length > 0) {
    text += ` Precedents: ${precedents.join(", ")}.`;
  }

  return {
    range: input.range,
    ...(f !== undefined ? { f } : {}),
    ...(v !== undefined ? { v } : {}),
    precedents,
    text,
  };
}


export function narrativeExplainPrompt(n: CellNarrative): string {
  if (n.f && n.precedents.length > 0) {
    return `Explain ${n.range} (${String(n.f)}, precedents ${n.precedents.join(", ")}) in one sentence`;
  }
  if (n.f) {
    return `Explain ${n.range} (${String(n.f)}) in one sentence`;
  }
  if (n.v !== undefined) {
    return `Explain ${n.range} (${String(n.v)}) in one sentence`;
  }
  return `Explain ${n.range} in one sentence`;
}
