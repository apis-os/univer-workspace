# @univer-cli/unit-layout-lint-command

[English](./README.md) | 简体中文

为 `@univer-cli/unit-layout-lint` 提供原生 Commander `lint` preset。当前 command 明确只接收 Slide。

## 安装

```bash
pnpm add commander @univer-cli/unit-layout-lint @univer-cli/unit-layout-lint-command
```

## 添加到应用

```ts
import { createUnitLayoutLint } from "@univer-cli/unit-layout-lint";
import { createUnitLayoutLintCommand } from "@univer-cli/unit-layout-lint-command";

program.addCommand(
  createUnitLayoutLintCommand({
    lint: createUnitLayoutLint({ runtime: slideLayoutRuntime }),
    loadUnit: async ({ unitId }) => await loadSlideUnitData(unitId),
  }),
);
```

Command 解析 Unit ID、page selector、rule filter 和 `--json`。默认文本列出 findings；JSON 输出完整 report。
没有 finding 时成功退出，输入、加载、渲染或 lint 失败时由 Commander 失败退出。

Application 拥有 target 解析与 UnitData 加载；package 不访问 Workspace、文件或 server。Factory 返回原生
`Command`。
