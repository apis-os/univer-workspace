export const DEMO_ORIGIN_HOST = "univer-workspace.apisos.workers.dev";

export function shouldHideCreateAccount(hostname: string): boolean {
  return hostname === DEMO_ORIGIN_HOST;
}
