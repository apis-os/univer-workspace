# @univer-cli/daemon-command

[English](./README.md) | 简体中文

为 `@univer-cli/daemon` 提供原生 Commander lifecycle command，让用户显式查看、启动、重启和停止本地
daemon。

## 安装

```bash
pnpm add commander @univer-cli/daemon @univer-cli/daemon-command
```

Commander `^15.0.0` 是 peer dependency。要求 Node.js 22.12 或更高版本。

## 快速开始

```ts
import { createDaemonControl } from "@univer-cli/daemon";
import { createDaemonCommand } from "@univer-cli/daemon-command";
import { Command } from "commander";

const control = createDaemonControl({
  entry: new URL("./daemon.js", import.meta.url),
  identity: { id: "my-cli", version: "1.2.0" },
  socketPath: "/tmp/my-cli.sock",
});

const program = new Command("my-cli");
program.addCommand(createDaemonCommand({ control }));
await program.parseAsync();
```

## 命令一览

```text
daemon status [--json]
daemon start [--json]
daemon restart [--json]
daemon stop [--json]
```

默认输出面向人阅读；`--json` 适合脚本和 Agent。Factory 返回原生 Commander `Command`，可以继续修改名称、
help、输出或退出行为。

本 package 不决定 daemon entry、socket、identity、environment 和 application shutdown cleanup；这些依赖由
application 创建 `DaemonControl` 时提供。
