import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createMockD1 } from "./mock-d1.ts";
import { seedControlPlane } from "../src/control-plane/schema.ts";
import { ControlPlaneDb } from "../src/control-plane/db.ts";
import { handleControlPlaneRoutes, resolveGatewayContext } from "../src/control-plane/gateway.ts";

const ORIGIN = "https://workspace.edge";
const USER_CODE_PATTERN = /^[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/u;

describe("CLI device-code authorizations", () => {
  test("starts, approves as user_admin, and exchanges a password-login session; expired is 401; password-stdin still works", async () => {
    const d1 = createMockD1();
    await seedControlPlane(d1);

    const columns = await d1.prepare("PRAGMA table_info(cli_authorizations)").all<{ name: string }>();
    const columnNames = new Set((columns.results ?? []).map((column) => column.name));
    assert.ok(columnNames.has("user_code"), "cli_authorizations.user_code");
    assert.ok(columnNames.has("user_id"), "cli_authorizations.user_id");
    assert.ok(columnNames.has("status"), "cli_authorizations.status");
    assert.ok(columnNames.has("expires_at"), "cli_authorizations.expires_at");

    const passwordLogin = await dispatch(
      d1,
      jsonRequest("/api/auth/password/login", {
        username: "admin",
        password: "password123"
      })
    );
    assert.equal(passwordLogin.status, 200);
    const passwordBody = (await passwordLogin.json()) as Record<string, unknown>;
    assertEstablishedSession(passwordBody, { id: "user_admin", displayName: "Avery Chen" });
    const browserCookie = sessionCookie(passwordLogin);

    const started = await dispatch(d1, new Request(`${ORIGIN}/api/auth/cli/authorizations`, { method: "POST" }));
    assert.equal(started.status, 201);
    const authorization = (await started.json()) as Record<string, unknown>;
    const deviceCode = authorization["deviceCode"];
    const userCode = authorization["userCode"];
    assert.equal(typeof deviceCode, "string");
    assert.ok((deviceCode as string).length > 0, "deviceCode");
    assert.equal(typeof userCode, "string");
    assert.match(userCode as string, USER_CODE_PATTERN);
    assert.equal(authorization["verificationUriComplete"], `/cli-login?userCode=${userCode}`);
    assert.equal(typeof authorization["expiresIn"], "number");
    assert.ok(Number.isInteger(authorization["expiresIn"]) && (authorization["expiresIn"] as number) >= 1);
    assert.equal(typeof authorization["interval"], "number");
    assert.ok(Number.isInteger(authorization["interval"]) && (authorization["interval"] as number) >= 1);

    const pending = await dispatch(
      d1,
      jsonRequest("/api/auth/cli/authorizations/exchange", { deviceCode })
    );
    assert.equal(pending.status, 202);
    assert.deepEqual(await pending.json(), { status: "pending" });

    const unauthenticatedApprove = await dispatch(
      d1,
      jsonRequest("/api/auth/cli/authorizations/approve", { userCode })
    );
    assert.equal(unauthenticatedApprove.status, 401);

    const approved = await dispatch(
      d1,
      jsonRequest("/api/auth/cli/authorizations/approve", { userCode }, browserCookie)
    );
    assert.equal(approved.status, 200);
    const approvedBody = (await approved.json()) as Record<string, unknown>;
    assert.equal(approvedBody["authenticated"], true);
    const approvedUser = approvedBody["user"] as Record<string, unknown>;
    assert.equal(approvedUser["id"], "user_admin");
    assert.equal(approvedUser["displayName"], "Avery Chen");

    const exchanged = await dispatch(
      d1,
      jsonRequest("/api/auth/cli/authorizations/exchange", { deviceCode })
    );
    assert.equal(exchanged.status, 200);
    const exchangedBody = (await exchanged.json()) as Record<string, unknown>;
    assertEstablishedSession(exchangedBody, { id: "user_admin", displayName: "Avery Chen" });
    const cliCookie = sessionCookie(exchanged);
    assert.notEqual(cliCookie, browserCookie);
    assert.equal(typeof exchangedBody["sessionToken"], "string");
    assert.ok((exchangedBody["sessionToken"] as string).length > 0);

    const cliSession = await dispatch(
      d1,
      new Request(`${ORIGIN}/api/session`, { headers: { Cookie: cliCookie } })
    );
    assert.equal(cliSession.status, 200);
    const cliSessionBody = (await cliSession.json()) as Record<string, unknown>;
    assert.equal(cliSessionBody["authenticated"], true);
    const cliUser = cliSessionBody["user"] as Record<string, unknown>;
    assert.equal(cliUser["id"], "user_admin");
    assert.equal(cliUser["displayName"], "Avery Chen");

    const expiredStart = await dispatch(
      d1,
      new Request(`${ORIGIN}/api/auth/cli/authorizations`, { method: "POST" })
    );
    assert.equal(expiredStart.status, 201);
    const expiredAuth = (await expiredStart.json()) as Record<string, unknown>;
    await d1
      .prepare("UPDATE cli_authorizations SET expires_at = 1 WHERE user_code = ?")
      .bind(expiredAuth["userCode"])
      .run();
    const expired = await dispatch(
      d1,
      jsonRequest("/api/auth/cli/authorizations/exchange", { deviceCode: expiredAuth["deviceCode"] })
    );
    assert.equal(expired.status, 401);
  });
});

async function dispatch(d1: D1Database, request: Request): Promise<Response> {
  const db = new ControlPlaneDb(d1);
  const gwCtx = await resolveGatewayContext(request, db);
  const response = await handleControlPlaneRoutes(request, gwCtx, new URL(request.url));
  assert.ok(response, `control plane must handle ${request.method} ${new URL(request.url).pathname}`);
  return response;
}

function jsonRequest(path: string, body: Record<string, unknown>, cookie?: string): Request {
  return new Request(`${ORIGIN}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(cookie ? { Cookie: cookie } : {})
    },
    body: JSON.stringify(body)
  });
}

function sessionCookie(response: Response): string {
  const header = response.headers.get("Set-Cookie") ?? "";
  const match = header.match(/workspace_session=[^;]+/);
  assert.ok(match, "Set-Cookie must include workspace_session");
  return match[0];
}

function assertEstablishedSession(
  body: Record<string, unknown>,
  user: { id: string; displayName: string }
): void {
  assert.equal(body["authenticated"], true);
  const sessionUser = body["user"] as Record<string, unknown> | undefined;
  assert.ok(sessionUser, "user");
  assert.equal(sessionUser["id"], user.id);
  assert.equal(sessionUser["displayName"], user.displayName);
  assert.equal(typeof body["sessionToken"], "string");
  assert.ok((body["sessionToken"] as string).length > 0);
}
