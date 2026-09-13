# @univer-cli/svg-facade

[English](./README.md) | 简体中文

把 SVG source 确定性编译为可在 Univer Slide 中执行的 plain JavaScript Facade code，并返回结构化 diagnostics。

它适合构建 Slide 导入器、Agent 素材工作流或 build tool。Package 不依赖 Commander、文件系统或具体 target。

## 安装

```bash
pnpm add @univer-cli/svg-facade
```

## 快速开始

```ts
import { compileSvgToFacade, wrapSlideScript } from "@univer-cli/svg-facade";

const compiled = await compileSvgToFacade(`
  <svg viewBox="0 0 960 540">
    <rect x="40" y="40" width="240" height="120" rx="16" fill="#2563eb" />
    <text x="72" y="112" font-size="28" fill="#ffffff">Hello</text>
  </svg>
`);

const program = wrapSlideScript(compiled.code, {
  page: 2,
  mode: "replace",
  ...compiled.viewport,
});

await runtime.execute({ code: program, mode: "write" });
```

`compiled.code` 假定 `slide` 与 `univerAPI` 已在作用域；wrapper 则把代码绑定到目标 page，并按 SVG
viewport 设置页面尺寸。

## 支持范围

Compiler 映射常用图形、path、text、image、gradient、reference 和 viewport。结果包含 code、viewport、
warnings、authoring lints 与文本量字信息。不支持的 feature 不会静默伪装成完整支持，而会进入 diagnostics 或
抛出 `SvgFacadeError`。

## 外部图片与字体

SVG 引用外部 asset 时，调用方通过 resolver 提供内容。Package 不自行读取 URL 或任意本地路径。文本 fidelity
依赖注入的 text measurer；没有精确字体量字时，结果会明确报告 fallback 或风险。

Target 选择、runtime lease、执行与 commit 属于 application。

预设 command 见 [`@univer-cli/svg-facade-command`](../svg-facade-command/README.zh-CN.md)。
