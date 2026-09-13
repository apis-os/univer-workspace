# @univer-cli/unit-layout-lint

[English](./README.md) | 简体中文

使用浏览器产生的真实 layout facts 检查 Slide 中的文字越界与重叠，并返回带证据的结构化 findings。

当前只支持 Slide。若目标是截图而不是诊断，使用 `@univer-cli/unit-screenshot`。

## 安装

```bash
pnpm add @univer-cli/unit-layout-lint @univer-cli/univer-render-runtime
```

还需要 application 构建 Render Page，并提供 Chrome、Chromium 或 Edge。

## 快速开始

```ts
import { fileURLToPath } from "node:url";
import { createUnitLayoutLint } from "@univer-cli/unit-layout-lint";
import { createUniverRenderRuntime } from "@univer-cli/univer-render-runtime";

const runtime = await createUniverRenderRuntime({
  renderPageRoot: fileURLToPath(new URL("../dist/render-page", import.meta.url)),
});

try {
  const lint = createUnitLayoutLint({ runtime });
  const report = await lint.lint({
    unitType: "slide",
    unitData: slideData,
    pages: [1, "closing-slide"],
  });
  console.log(report.findings);
} finally {
  await runtime.close();
}
```

## 当前规则

- `text-off-page`：实际 glyph ink 超出页面；
- `text-escapes-container`：文字明显冲出较小、不透明的容器；
- `text-overlaps-text`：两段实际 glyph ink 发生显著重叠。

Finding 是带证据的复查建议，不是必须清零的内容错误。省略 `pages` 时检查全部页面；page number 从 1 开始，
字符串 selector 使用 `slideOrder` 中的 page ID。

Application 负责物化 Slide 并提供 render runtime。Package 不加载远程 target、不保存报告，也不声明其他 Unit
lint。

预设 command 见
[`@univer-cli/unit-layout-lint-command`](../unit-layout-lint-command/README.zh-CN.md)。
