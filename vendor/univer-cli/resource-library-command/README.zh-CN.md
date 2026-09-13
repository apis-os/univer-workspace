# @univer-cli/resource-library-command

[English](./README.md) | 简体中文

为 `@univer-cli/resource-library` 提供原生 Commander `resources` preset，包括目录查看、搜索、读取和批量导出。

## 安装

```bash
pnpm add commander @univer-cli/resource-library @univer-cli/resource-library-command
```

Commander `^15.0.0` 是 peer dependency。要求 Node.js 22.12 或更高版本。

## 添加到应用

```ts
import { createResourcesCommand } from "@univer-cli/resource-library-command";
import type { ResourceLibrary } from "@univer-cli/resource-library";
import { Command } from "commander";

export async function runCli(openLibrary: () => ResourceLibrary): Promise<void> {
  const program = new Command("my-cli");
  program.addCommand(createResourcesCommand({ openLibrary }));
  await program.parseAsync();
}
```

## 命令一览

```text
resources registries [--json]
resources find <queries...> [--registry <id>] [--limit <number>] [--json]
resources export <handle> [--json]
resources export <handles...> --out <directory> [--json]
resources cache path [--json]
resources cache clear [--json]
```

默认文本面向人阅读；`--json` 输出结构化结果。二进制内容不会混入 JSON summary。输入非法、handle 不存在、
下载或输出失败由 Commander 以失败退出处理。

`openLibrary` 允许 application 延迟创建含凭证或 filesystem adapter 的 library。Command package 不拥有
catalog、cache、下载和导出规则；这些行为全部由 capability 定义。Factory 返回原生 `Command`。
