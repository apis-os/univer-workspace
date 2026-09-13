export const KEEP_D3_PROMPT =
  "Avery Chen and Jordan Lee both edited D3. Suggest who should keep the cell and why. Do not write cells.";

export function keepCellPrompt(a1: string): string {
  const cell = a1.trim().toUpperCase() || "D3";
  if (cell === "D3") return KEEP_D3_PROMPT;
  return `Avery Chen and Jordan Lee both edited ${cell}. Suggest who should keep the cell and why. Do not write cells.`;
}

export function isKeepPrompt(prompt: string): boolean {
  return (
    typeof prompt === "string" &&
    prompt.includes("both edited") &&
    prompt.includes("Suggest who should keep the cell") &&
    prompt.includes("Do not write cells")
  );
}
