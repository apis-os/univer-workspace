/**
 * Password login against a remote Workspace origin.
 *
 * Edge Workspace (this fork) authenticates with username/password or CLI
 * device approval. Official hosted Workspace uses OAuth PKCE in the DSH UI.
 *
 * @module @univerjs/workspace-agent/password-login
 */

import {
  bearerTokenFromCookie,
  loginWithPassword,
  whoami,
  WorkspaceHttp,
  type WorkspaceAuthentication,
  type WorkspaceSubject,
} from "@univerjs/univer-workspace-client-core/live";
import type { UwhIdentity } from "./contract.ts";
import type { WorkspaceAuthService } from "./workspace-auth.ts";

export interface WorkspacePasswordLoginInput {
  readonly origin: string;
  readonly password: string;
  readonly username: string;
  readonly fetcher?: typeof fetch;
}

export interface WorkspacePasswordLoginResult extends WorkspaceAuthentication {
  readonly sessionToken: string;
  readonly identity: UwhIdentity;
}

export async function loginWorkspacePassword(
  input: WorkspacePasswordLoginInput,
): Promise<WorkspacePasswordLoginResult> {
  const http = new WorkspaceHttp({
    origin: input.origin,
    role: "client",
    ...(input.fetcher === undefined ? {} : { fetcher: input.fetcher }),
  });
  const auth = await loginWithPassword(http, {
    username: input.username,
    password: input.password,
  });
  const sessionToken =
    bearerTokenFromCookie(auth.cookie) ?? auth.cookie.replace(/^workspace_session=/u, "");
  return {
    ...auth,
    sessionToken,
    identity: subjectToIdentity(auth.subject, input.username),
  };
}

export async function connectWorkspaceAuthWithPassword(
  auth: WorkspaceAuthService,
  input: Omit<WorkspacePasswordLoginInput, "origin"> & { readonly origin?: string },
): Promise<WorkspacePasswordLoginResult> {
  const origin = input.origin ?? auth.loginOrigin();
  const result = await loginWorkspacePassword({ ...input, origin });
  await auth.connect(result.identity, result.sessionToken, origin);
  return result;
}

export async function sessionSubject(
  origin: string,
  cookie: string,
  fetcher?: typeof fetch,
): Promise<{ origin: string; subject: WorkspaceSubject }> {
  const http = new WorkspaceHttp({
    cookie,
    origin,
    role: "client",
    ...(fetcher === undefined ? {} : { fetcher }),
  });
  return await whoami(http);
}

function subjectToIdentity(subject: WorkspaceSubject, username: string): UwhIdentity {
  return {
    userId: subject.id,
    username,
    displayName: subject.name,
  };
}
