# @univer-cli/config-command

[English](./README.md) | 简体中文

把 `@univer-cli/config` 接入 Commander 应用，提供一组可直接使用的本地配置命令。

## 安装

```bash
pnpm add commander @univer-cli/config @univer-cli/config-command
```

Commander `^15.0.0` 是 peer dependency。要求 Node.js 22.12 或更高版本。

## 快速开始

先用 capability 定义配置，再注入 command：

```ts
import { join } from "node:path";
import { configCodecs, createFileConfig, defineConfig } from "@univer-cli/config";
import { createConfigCommand } from "@univer-cli/config-command";
import { Command } from "commander";

const config = createFileConfig({
  path: join(process.cwd(), ".my-cli", "config.json"),
  definitions: defineConfig({
    "runtime.enabled": {
      description: "Enable the runtime.",
      defaultValue: true,
      codec: configCodecs.boolean(),
    },
  }),
});

const program = new Command("my-cli");
program.addCommand(createConfigCommand({ config }));
await program.parseAsync();
```

## 命令一览

```text
config path
config list [--json]
config get <key> [--json]
config set <key> <value> [--json]
config unset <key> [--json]
```

`set` 使用配置定义中的 codec 解析文本，因此 CLI 与直接调用 capability 共享相同校验。默认输出面向人阅读；
`--json` 输出结构化结果。未知 key 和非法值由 Commander 以失败退出处理。

## 定制

Factory 返回原生 Commander `Command`。Application 可以修改名称、alias、help、输出或退出行为，也可以跳过
preset，直接调用 capability：

```ts
const entry = await config.get({ key: "runtime.enabled" });
renderWithMyOwnFormat(entry);
```

本 package 不定义配置 key、默认值或持久化规则；这些合同全部属于 `@univer-cli/config`。
