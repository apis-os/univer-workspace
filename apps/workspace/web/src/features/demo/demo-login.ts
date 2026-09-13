export const DEMO_AVERY_USERNAME = "admin";
export const DEMO_JORDAN_USERNAME = "jordan";
export const DEMO_PASSWORD = "password123";

export interface SilentDemoLoginBody {
  readonly username: string;
  readonly password: string;
}

export function silentDemoLoginBody(
  as: string | undefined
): SilentDemoLoginBody {
  return {
    username: as === "jordan" ? DEMO_JORDAN_USERNAME : DEMO_AVERY_USERNAME,
    password: DEMO_PASSWORD,
  };
}

export async function silentDemoLogin(options: {
  readonly as?: string;
  readonly fetch?: typeof fetch;
} = {}): Promise<{ readonly ok: boolean; readonly username: string }> {
  const body = silentDemoLoginBody(options.as);
  const fetchImpl = options.fetch ?? globalThis.fetch;
  try {
    const response = await fetchImpl("/api/auth/password/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return { ok: response.ok, username: body.username };
  } catch {
    return { ok: false, username: body.username };
  }
}
