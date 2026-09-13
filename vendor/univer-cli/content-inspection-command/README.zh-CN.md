# @univer-cli/content-inspection-command

[English](./README.md) | 简体中文

为 `@univer-cli/content-inspection` 提供原生 Commander `inspect` command preset，包括 selector 解析、
默认文本或 JSON 输出，以及 runtime lease 的 acquire/release。

## 安装

```bash
pnpm add commander @univer-cli/content-inspection @univer-cli/content-inspection-command
```

Commander `^15.0.0` 是 peer dependency。要求 Node.js 22.12 或更高版本。

## 选择 preset

Package 提供两个独立 factory：

- `createContentInspectionCommand()`：只接收 Unit ID，不出现 Worktree 选项；
- `createWorktreeContentInspectionCommand()`：强制调用方在 `--trunk` 与 `--worktree <id>` 中二选一。

普通 application 应选择前者；只有 target model 明确包含 Worktree 时才使用后者。

## 快速开始

```ts
import { createContentInspectionCommand } from "@univer-cli/content-inspection-command";
import { Command } from "commander";

const program = new Command("my-cli");

program.addCommand(
  createContentInspectionCommand({
    async acquireRuntime({ unitId }) {
      const lease = await runtimes.acquire({
        key: `unit:${unitId}`,
        init: { unitId },
      });

      return {
        unitId: lease.unitId,
        unitType: "sheet",
        execute: async (input) => await lease.execute(input),
        invalidate: async () => await lease.invalidate(),
        release: async () => await lease.release(),
      };
    },
  }),
);

await program.parseAsync();
```

## 生命周期

Command 会为每次请求 acquire runtime，并在成功或失败后 release。Application 负责提供 runtime、认证和内容加载。

Board 连接线的文本输出包含全部有序标签及其 ID；JSON 输出保留标签的内容、布局、位置和样式。

## 输入与输出

Command 接受 Unit ID、Unit-specific selector 和 `--json`。默认输出用于人工阅读；JSON 输出包含完整的结构化结果。

Factory 返回原生 `Command`，可继续用 Commander 定制名称、help、输出和退出行为。本 package 不创建 root
program。
