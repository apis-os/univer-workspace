# @univerjs-pro/collaboration-transport-node

English | [简体中文](./README.zh-CN.md)

The Node.js HTTP/WebSocket ingress for a Univer Collaboration server assembly.

Transport receives requests and WebSocket upgrades forwarded by the host Node HTTP server. Applications integrate authentication, logging, and other ingress concerns through HTTP middleware, then registered protocol Endpoints handle Collaboration requests. Transport is not normally used by itself:

```text
Node HTTP server
→ Transport
  ├─→ HTTP middleware       login authentication, CORS, trace, network logs
  │   → Endpoint HTTP       protocol routes; calls Service APIs as needed
  │       → Service middleware / Database
  └─→ Endpoint WebSocket    Sessions, JOIN, Presence, ACKs, broadcasts
      → Endpoint middleware realtime-room ACL and Presence controls
```

## Server assembly

```bash
pnpm add \
  @univerjs-pro/collaboration-service \
  @univerjs-pro/collaboration-endpoint \
  @univerjs-pro/collaboration-transport-node \
  @univerjs-pro/collaboration-database-memory
```

```ts
import { createServer } from 'node:http';
import { MemoryDatabaseAdapter } from '@univerjs-pro/collaboration-database-memory';
import { UniverCollabEndpoint } from '@univerjs-pro/collaboration-endpoint';
import { UniverCollabService } from '@univerjs-pro/collaboration-service';
import { createNodeTransport } from '@univerjs-pro/collaboration-transport-node';

const database = new MemoryDatabaseAdapter();
const collabService = new UniverCollabService({ dbAdapter: database });
const endpoint = new UniverCollabEndpoint(collabService);
const transport = createNodeTransport();

// use() handles HTTP requests only. Authenticate and attach request-scoped data here.
transport.use(async (ctx, next) => {
  const user = await authenticate(ctx.incomingMessage);
  if (!user) {
    ctx.response.statusCode = 401;
    ctx.response.end('Authentication required');
    return;
  }

  // Map the application's stable user primary key at the SDK boundary.
  ctx.userID = user.userId;
  ctx.customData.user = user;
  ctx.customData.traceId = readTraceId(ctx.incomingMessage);
  await next();
});

// useUpgrade() runs once per WebSocket handshake and can reject before upgrade.
transport.useUpgrade(async (ctx, next) => {
  if (!isAllowedOrigin(ctx.incomingMessage.headers.origin)) {
    ctx.reject(403, 'Origin rejected');
    return;
  }
  await next();
});

endpoint.use('joinUnit', async (ctx, next) => {
  // Transport ctx.userID → ctx.session.userID
  // Transport ctx.customData → ctx.session.customData
  console.log(ctx.session.userID, ctx.session.customData.user, ctx.session.customData.traceId);
  await next();
});

collabService.use('readUnitData', async (ctx, next) => {
  // Transport ctx.userID → Service ctx.userID
  // Transport ctx.customData → Service ctx.customData
  console.log(ctx.userID, ctx.customData.user, ctx.customData.traceId);
  await next();
});

transport.register(endpoint);

const server = createServer((request, response) => {
  transport.handleRequest(request, response);
});
server.on('upgrade', (request, socket, head) => {
  transport.handleUpgrade(request, socket, head);
});
server.listen(3010);
```

The Memory Adapter keeps this Transport example small; process exit loses all data. See
[Database Adapters](https://office.univer.ai/collaboration/database-adapters) for production
persistence choices.

Transport does not prescribe cookies, bearer tokens, user tables, or user types. The application validates its own credentials in HTTP middleware and explicitly writes the stable business identity to `ctx.userID`. On authentication failure, end the response without calling `next()`.

## How identity and customData reach Endpoint and Service

Transport creates a separate `ctx.customData` for every HTTP request. HTTP middleware may add the current request's user, tenant, trace, or ACL query objects.

```text
regular protocol HTTP request
→ Transport middleware sets userID/customData
→ Endpoint validates the protocol and calls Service
→ Service middleware reads the same userID/customData
```

WebSocket identity is inherited from a one-time ticket, not directly from the upgrade URL or client payload:

```text
userID/customData on the ticket HTTP request
→ Endpoint stores the association server-side and returns an opaque ticket string
→ WebSocket open consumes the association once
→ Endpoint creates Session { userID, memberID, customData }
→ Endpoint middleware reads ctx.session
```

The ticket string contains neither `userID` nor `customData`. Only the session-ticket HTTP route extends the current Transport context into a WebSocket Session; other HTTP routes do not.

Transport network-data lifetimes are:

- HTTP `ctx.customData` belongs only to the current request; every later HTTP request runs authentication middleware again.
- `EndpointSession.customData` comes from the HTTP request that issued the ticket and keeps the same reference for the current WebSocket Session.
- For regular HTTP protocol routes, Service middleware receives that HTTP request's `ctx.customData`, not Session `customData` automatically.

`customData` is only passed in memory. It is not automatically sent to browsers, persisted in the collaboration database, or logged.

## Mounting in a host application

Frameworks such as Express can continue handling application product routes while forwarding only Collaboration protocol paths to `handleRequest()`. The underlying HTTP server must also forward the corresponding WebSocket `upgrade`:

```ts
app.use('/universer-api', (request, response) => {
  // Express rewrites request.url when mounted; Transport needs the full protocol path.
  request.url = request.originalUrl;
  transport.handleRequest(request, response);
});

server.on('upgrade', (request, socket, head) => {
  const url = new URL(request.url ?? '/', 'http://localhost');
  if (url.pathname === '/universer-api/comb/connect') {
    transport.handleUpgrade(request, socket, head);
  }
});
```

Express must forward protocol paths before body parsers such as `express.json()` consume the request stream. Fastify, Nest, and other frameworks similarly need to forward the raw Node request, socket, and head.

Collaboration, History, Comment, and Worktree Endpoints can be registered on the same Transport and share the same HTTP authentication middleware. Transport matches each Endpoint Router at its registration position and continues to later registrations when no route matches. If no registered Endpoint handles an HTTP request, Transport returns a plain-text 404; an unhandled WebSocket upgrade also receives HTTP 404 before connection establishment.

## API layers

```ts
transport.use(httpMiddleware);
transport.useUpgrade(upgradeMiddleware);
transport.register(endpoint);
```

- `use()`: regular HTTP requests only; callbacks directly receive `incomingMessage`, `response`, `userID`, and request-scoped `customData`.
- `useUpgrade()`: WebSocket handshakes only; read `incomingMessage` or call `reject(status, message)`.
- `register()`: register and own a protocol Endpoint that handles matching HTTP requests and WebSocket connections.

## Routes and execution order

Register authentication and observation middleware before the Endpoints they apply to.
`use()`, `useUpgrade()`, and `register()` follow registration order. `await next()` waits for
later middleware and handlers; a middleware can end its response without calling `next()`.

HTTP and upgrade middleware can read decoded path parameters from `ctx.params` and the full
route template from `ctx.route?.path`. Before matching, params is empty and route is undefined.
Use the exact protocol paths documented by each Endpoint, including case and slashes.

To measure HTTP duration, read route metadata when the response finishes:

```ts
transport.use(async (ctx, next) => {
  const start = performance.now();
  ctx.response.once('finish', () => {
    recordHttpDuration({
      method: ctx.incomingMessage.method,
      route: ctx.route?.path ?? 'unmatched',
      status: ctx.response.statusCode,
      durationMs: performance.now() - start,
    });
  });
  await next();
});
transport.use(authenticationMiddleware);
transport.register(collabEndpoint);
```

`recordHttpDuration` is an application callback. Requests rejected before routing and unknown
paths have no route. Observe `close` as well, deduplicating it with `finish`, to track interrupted
responses. Handler completion after `await next()` can precede response completion.

## Request limits and disposal

HTTP bodies and WebSocket messages both default to a 16 MiB limit. `readBody()` and `readJson()` enforce the limit and ensure the request stream is consumed only once.

Dispose from the network boundary inward during shutdown:

```ts
await transport.dispose();
await collabService.dispose();
await database.dispose();
```

Transport closes active connections and disposes Endpoints it owns through `register()`. The registration returned by `register()` can also unregister and dispose that Endpoint early. Endpoint does not dispose Service, and Service does not dispose an externally injected Database Adapter.

See the [Collaboration documentation](https://office.univer.ai/collaboration/overview) for the
complete assembly, middleware, and production requirements.
