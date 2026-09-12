# @univer-cli/content-execution

[English](./README.md) | 简体中文

把一段 Facade JavaScript 绑定到一个明确的 Univer Unit，生成可交给 runtime 执行的 program。

它适合需要让用户代码只操作指定 Unit 的 CLI 或 Agent：package 会根据 Unit 类型注入稳定 binding，并在进入
runtime 前拒绝用户代码重新声明这些 binding。

## 安装

```bash
pnpm add @univer-cli/content-execution
```

要求 Node.js 22.12 或更高版本。

## 快速开始

```ts
import { prepareContentExecutionProgram } from "@univer-cli/content-execution";

const program = prepareContentExecutionProgram({
  code: 'workbook.getActiveSheet().getRange("A1").setValue("done");',
  unitId: "book-1",
  unitType: "sheet",
});

const result = await runtime.execute({
  code: program,
  mode: "write",
});
```

Package 只返回 program 字符串。Runtime 的获取、执行模式、lease 和持久化由调用方负责。

## 可用 binding

| Unit 类型 | 注入的 binding                     |
| --------- | ---------------------------------- |
| Sheet     | `univerAPI`、`api`、`workbook`     |
| Doc       | `univerAPI`、`api`、`doc`          |
| Slide     | `univerAPI`、`api`、`presentation` |
| Base      | `univerAPI`、`api`、`base`         |
| Board     | `univerAPI`、`api`、`board`        |

Root Facade 通过 `unitId` 获取，而不是依赖当前 active Unit，因此相同代码可在 headless runtime 中稳定执行。
如果指定 Unit 不存在，program 会在执行用户代码前抛出 `Cannot find <binding> <unitId>` 错误。

## 校验与错误

用户代码不得在顶层重新声明 package 注入的 binding。非法 Unit type、空 Unit ID、语法分析失败或 binding
冲突会抛出 `ContentExecutionError`，并提供稳定 error code 供 adapter 呈现。

Package 不判断代码是否安全，也不提供进程级 sandbox。执行不可信代码时，application 必须自行提供隔离边界。

## 职责边界

本 package 不依赖 Commander、不获取 collaboration runtime、不解析 target，也不提交 changeset。需要完整协同
执行流程时，与 `@univer-cli/univer-collaboration-runtime` 或 runtime pool 组合。
