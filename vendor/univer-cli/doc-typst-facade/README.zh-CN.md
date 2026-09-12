# @univer-cli/doc-typst-facade

[English](./README.md) | 简体中文

把一个受约束的 Typst source bundle 编译为 plain JavaScript Facade program，用于创建完整的 Univer Doc。

编译结果同时包含结构化 diagnostics；需要人工复核版式时，还可以生成与同一 source 对应的 Typst PNG preview。

## 安装

```bash
pnpm add @univer-cli/doc-typst-facade
```

要求 Node.js 22.12 或更高版本，并使用 package 支持的平台 native binding。

## Bundle 结构

Bundle root 包含 `typst.json`、页面 source 和本地 asset：

```text
paper/
├── typst.json
├── prelude.typ
├── pages/
│   ├── 01.typ
│   └── 02.typ
└── assets/
    └── logo.png
```

Manifest 声明 `targetUnitId` 和有序 `pages`，也可以声明 `title`、`prelude` 与显式 page ID。所有路径必须
留在 bundle root 内；绝对路径、URL、parent traversal 和逃逸 root 的 symlink 会被拒绝。

## 快速开始

```ts
import { compileDocTypstBundle } from "@univer-cli/doc-typst-facade";

const result = await compileDocTypstBundle("./paper", {
  previewDir: "./review/typst",
});

console.log(result.javascript);
console.log(result.diagnostics);
console.log(result.previews);
```

`javascript` 假定执行环境已注入 `univerAPI`。执行后会创建 manifest 中 `targetUnitId` 指定的完整 Doc；
这个 ID 是生成 program 内部的 identity，不是 Workspace 分配的真实 content identity。

省略 `previewDir` 时不生成 PNG。提供后，preview 由同一官方 native binding 渲染，并记录 page ID、source
path 和输出 path。

## Diagnostics 与失败

Diagnostic 包含 `info`、`warning` 或 `error`：

- warning 表示结果可用，但存在 fidelity 限制或需要人工复核；
- error 表示调用方不应把生成 program 应用于持久化 target；
- 无法产生 program 时抛出 `DocTypstFacadeError` 或带 diagnostics 的
  `DaCTypstTranslationError`。

Adapter 可用 `isDocTypstFacadeError()` 识别 capability error，并按 source path/span 呈现问题。

预设 command 见
[`@univer-cli/doc-typst-facade-command`](../doc-typst-facade-command/README.zh-CN.md)。
