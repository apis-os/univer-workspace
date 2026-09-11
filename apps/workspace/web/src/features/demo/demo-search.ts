export const DEMO_NODE_ID = "node_welcome_sheet";
export const DEMO_LANGUAGE_STORAGE_KEY = "univer-workspace-language-v2";

export type DemoActor = "jordan";
export type DemoLanguage = "zh-CN" | "en-US";
export type DemoScene = "fill" | "conflict" | "review" | "export";

export interface DemoSearch {
  readonly as?: DemoActor;
  readonly lang?: DemoLanguage;
  readonly play?: "1";
  readonly scene?: DemoScene;
}

export function isDemoScene(value: unknown): value is DemoScene {
  return (
    value === "fill" ||
    value === "conflict" ||
    value === "review" ||
    value === "export"
  );
}

export function parseDemoSearch(
  search: Readonly<Record<string, unknown>>
): DemoSearch {
  const as = search.as === "jordan" ? "jordan" : undefined;
  const lang =
    search.lang === "zh-CN" || search.lang === "en-US" ? search.lang : undefined;
  const play = search.play === "1" || search.play === 1 ? "1" : undefined;
  const scene = isDemoScene(search.scene) ? search.scene : undefined;
  return {
    ...(as ? { as } : {}),
    ...(lang ? { lang } : {}),
    ...(play ? { play } : {}),
    ...(scene ? { scene } : {}),
  };
}

export function parseNodeDemoSearch(
  search: Readonly<Record<string, unknown>>
): Pick<DemoSearch, "play" | "scene"> {
  const parsed = parseDemoSearch(search);
  return {
    ...(parsed.play ? { play: parsed.play } : {}),
    ...(parsed.scene ? { scene: parsed.scene } : {}),
  };
}

export function demoLandingHref(input: {
  readonly scene?: DemoScene;
}): string {
  const params = new URLSearchParams({ play: "1" });
  if (input.scene) params.set("scene", input.scene);
  return `/nodes/${DEMO_NODE_ID}?${params.toString()}`;
}

export function persistDemoLanguage(lang: DemoLanguage): void {
  try {
    globalThis.localStorage?.setItem(DEMO_LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Ignore storage failures in private browsing.
  }
}
