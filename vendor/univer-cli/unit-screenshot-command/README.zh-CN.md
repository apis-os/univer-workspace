# @univer-cli/unit-screenshot-command

[English](./README.md) | 简体中文

为 `@univer-cli/unit-screenshot` 提供原生 Commander `screenshot` preset：解析 Unit 与 target options，
调用 capability，并通过注入的 writer 保存 PNG。

## 安装

```bash
pnpm add commander @univer-cli/unit-screenshot @univer-cli/unit-screenshot-command
```

## 添加到应用

```ts
import {
  createUnitScreenshotCommand,
  type UnitScreenshotCommandDependencies,
} from "@univer-cli/unit-screenshot-command";
import { Command } from "commander";

export async function runCli(dependencies: UnitScreenshotCommandDependencies): Promise<void> {
  const program = new Command("my-cli");
  program.addCommand(createUnitScreenshotCommand(dependencies));
  await program.parseAsync();
}
```

Dependencies 由 application 提供，包括 UnitData loader、screenshot capability 与 PNG writer。Package 不规定
Unit ID 如何映射到本地文件、Workspace 或其他 target。

## 输入与输出

Command 接受 Unit ID、Unit type 和各类 screenshot selector，例如 Sheet range、Slide pages、Board elements、
scale 与输出目录。默认输出写入的 PNG 路径；`--json` 输出结构化 summary，图片 bytes 不进入 stdout。

参数非法、Unit 加载、渲染或写文件失败时由 Commander 失败退出。已创建的 runtime 与其他长生命周期资源仍由
application 在 composition root 统一关闭。

## Browser setup command

`createUniverRenderBrowserSetupCommand()` 提供可选的 browser 安装/探测交互，适合没有系统 Chromium 的环境。
它不会在每次截图时隐式下载 browser。

Factory 均返回原生 Commander `Command`。Target 选择、分页、命名与限制属于 capability，本 package 只拥有
argv、presentation 与 writer adapter。
