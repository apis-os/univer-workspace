# @univer-cli/config

[English](./README.md) | 简体中文

为 CLI、Agent 或其他 Node.js application 提供类型明确的本地配置：由 application 声明可用 key、默认值和
codec，package 负责校验、读取 effective value，并持久化用户显式设置的值。

## 安装

```bash
pnpm add @univer-cli/config
```

要求 Node.js 22.12 或更高版本。

## 快速开始

```ts
import { join } from "node:path";
import { configCodecs, createFileConfig, defineConfig } from "@univer-cli/config";

const definitions = defineConfig({
  "workspace.origin": {
    description: "Workspace service origin.",
    defaultValue: "https://workspace.univer.plus",
    codec: configCodecs.httpOrigin(),
  },
  "runtime.enabled": {
    description: "Enable the runtime.",
    defaultValue: true,
    codec: configCodecs.boolean(),
  },
});

const config = createFileConfig({
  definitions,
  path: join(process.cwd(), ".my-cli", "config.json"),
});

const entry = await config.get({ key: "workspace.origin" });
console.log(entry.value, entry.source);

await config.set({ key: "runtime.enabled", value: false });
await config.unset({ key: "runtime.enabled" });
```

`path` 必须是由 application 决定的绝对 `.json` 路径。Package 不替你选择产品目录或配置文件名。

## 值从哪里来

读取结果会说明 effective value 的来源：

- `explicit`：用户已写入配置文件；
- `default`：配置定义提供的内存默认值；
- `unset`：既没有显式值，也没有默认值。

配置文件只保存显式值。description、codec 和默认值只存在于 application 的定义中，不会写入磁盘。

## Codec

内置 codec 覆盖常见 CLI 配置：

- `nonEmptyString()`
- `boolean()`
- `integer({ minimum, maximum })`
- `enumeration(values)`
- `httpUrl()`
- `httpOrigin()`

自定义 codec 需要同时校验 JSON value，并定义 CLI 文本如何转换为同一类型。所有值都必须满足
`ConfigValue`，不能持久化函数、class instance 或其他任意对象。

## 持久化与错误

Package 使用 `conf` 完成 JSON 读写和原子替换，但不会公开 `conf` instance、storage interface 或内部
document shape。未知 key、非法值、codec 失败和文件错误统一抛出 `ConfigError`；adapter 可根据 error code
决定终端或 UI 呈现。

预设 command 见 [`@univer-cli/config-command`](../config-command/README.zh-CN.md)。
