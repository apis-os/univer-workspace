# @univer-cli/daemon

[English](./README.md) | 简体中文

让多个短生命周期的本地进程复用同一个常驻 Node.js 进程，并通过 Unix socket 或 Windows named pipe 发送
JSON 请求。

它适合启动成本高、需要在多次 CLI 调用之间保留内存状态的服务。若逻辑可以直接在当前进程执行，或已有 HTTP、
队列等服务边界，则不需要这个 package。

## 安装

```bash
pnpm add @univer-cli/daemon
```

要求 Node.js 22.12 或更高版本。

## 工作方式

Client 请求时会：

1. 尝试连接指定 socket；
2. 校验已运行 daemon 的 identity 与 protocol；
3. socket 不可用时启动 application 提供的 entry；
4. 等待 compatibility handshake；
5. 发送一次 JSON request 并返回 JSON response。

Package 负责 transport 和 lifecycle，不定义 application 的业务 method 或常驻状态。

## 创建 daemon entry

```ts
import { createDaemonServer, DAEMON_SOCKET_ENV, type JsonValue } from "@univer-cli/daemon";

const socketPath = process.env[DAEMON_SOCKET_ENV];
if (!socketPath) throw new Error(`${DAEMON_SOCKET_ENV} is required`);

let value = 0;

const server = createDaemonServer({
  identity: { id: "my-cli", version: "1.2.0" },
  socketPath,
  onShutdown: async () => {
    value = 0;
  },
});

server.handle("counter.add", async (payload) => {
  if (typeof payload !== "number") throw new Error("Expected a number");
  value += payload;
  return value satisfies JsonValue;
});

await server.listen();
```

所有 handler 必须在 `listen()` 前注册。`daemon.status` 和 `daemon.shutdown` 是保留 method，application
不得覆盖。

## 发送请求

```ts
import { createDaemonClient } from "@univer-cli/daemon";

const client = createDaemonClient({
  entry: new URL("./counter-daemon.js", import.meta.url),
  identity: { id: "my-cli", version: "1.2.0" },
  socketPath: "/tmp/my-cli.sock",
});

const result = await client.request("counter.add", 2);
```

Payload 和结果必须是 JSON value。Request timeout 与启动 timeout 可分别配置；timeout 只终止当前 client
等待，不会擅自杀死一个已通过 identity 校验的 daemon。

## 显式 lifecycle control

`createDaemonControl()` 提供 `status()`、`start()`、`restart()` 和 `stop()`。适合 application 暴露
显式管理命令，或在升级、退出时清理常驻进程。

预设 command 见 [`@univer-cli/daemon-command`](../daemon-command/README.zh-CN.md)。

## Identity 与错误

Identity 至少包含稳定的 application `id` 和 `version`，也可以加入 build ID。Client 不会复用 identity
不兼容的进程。连接、handshake、协议、timeout 和远端 handler 错误会保留稳定 error code，便于 adapter 判断
是否提示重试、升级或检查 daemon 日志。

## 职责边界

Package 负责 socket framing、按需启动、compatibility handshake、request/response、timeout 和 socket 清理。
Application 负责 entry、socket 路径、业务 method、状态、凭证和 shutdown cleanup。
