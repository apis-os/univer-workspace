import { describe, expect, it, vi } from "vitest";
import {
  DEMO_PASSWORD,
  silentDemoLogin,
  silentDemoLoginBody,
} from "./demo-login";
import { shouldHideCreateAccount } from "./demo-origin";

describe("silentDemoLogin", () => {
  it("POSTs Avery or Jordan credentials without exposing the password as an input value", async () => {
    const fetchImpl = vi.fn<typeof fetch>(
      async () => new Response("{}", { status: 200 })
    );
    await silentDemoLogin({ fetch: fetchImpl });
    expect(fetchImpl).toHaveBeenCalledWith(
      "/api/auth/password/login",
      expect.objectContaining({
        method: "POST",
        credentials: "include",
      })
    );
    const avery = JSON.parse(String(fetchImpl.mock.calls[0]?.[1]?.body));
    expect(avery).toEqual({ username: "admin", password: "password123" });
    expect(avery).toEqual(silentDemoLoginBody(undefined));

    fetchImpl.mockClear();
    await silentDemoLogin({ as: "jordan", fetch: fetchImpl });
    const jordan = JSON.parse(String(fetchImpl.mock.calls[0]?.[1]?.body));
    expect(jordan).toEqual({ username: "jordan", password: "password123" });
    expect(DEMO_PASSWORD).toBe("password123");
    expect("passwordInputValue" in silentDemoLoginBody("jordan")).toBe(false);
  });
});

describe("shouldHideCreateAccount", () => {
  it("hides Create account on the live demo origin only", () => {
    expect(
      shouldHideCreateAccount("univer-workspace.apisos.workers.dev")
    ).toBe(true);
    expect(shouldHideCreateAccount("localhost")).toBe(false);
    expect(shouldHideCreateAccount("example.com")).toBe(false);
  });
});
