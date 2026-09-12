# @univer-cli/unit-screenshot

[English](./README.md) | 简体中文

把已经物化的 Univer UnitData 渲染为一个或多个 PNG，并返回图片 bytes、尺寸、页面身份和建议文件名。

这是 Sheet、Doc、Slide、Board 或 Base 截图的首选入口。它负责 target 选择、分页、scale、命名与资源限制；
底层 browser lifecycle 由 `@univer-cli/univer-render-runtime` 提供。

## 安装

```bash
pnpm add @univer-cli/unit-screenshot @univer-cli/univer-render-runtime
```

还需要：

- application 构建的 Render Page；
- Chrome、Chromium 或 Edge；
- 已物化到明确 content state 的 UnitData。

## 快速开始

先在 browser entry 中挂载 Render Page：

```ts
import { createPresetRenderUniver, mountUniverRenderPage } from "@univer-cli/univer-render-page";

const container = document.querySelector<HTMLElement>("#app");
if (container === null) throw new Error("#app is required");

await mountUniverRenderPage({
  container,
  createUniver: createPresetRenderUniver,
});
```

构建页面后，在 Node.js 中创建 runtime 与 screenshot capability：

```ts
import { fileURLToPath } from "node:url";
import { createUnitScreenshot } from "@univer-cli/unit-screenshot";
import { createUniverRenderRuntime } from "@univer-cli/univer-render-runtime";

const runtime = await createUniverRenderRuntime({
  renderPageRoot: fileURLToPath(new URL("../dist/render-page", import.meta.url)),
});

try {
  const screenshot = createUnitScreenshot({ runtime });
  const result = await screenshot.capture({
    unitType: "sheet",
    unitData: workbookData,
    target: {
      kind: "sheet-range",
      sheetName: "Data",
      range: "B2:H40",
      scale: 2,
    },
  });

  for (const image of result.images) {
    await writePng(image.name, image.bytes);
  }
} finally {
  await runtime.close();
}
```

Capability 不写文件；`writePng` 由 application 实现。

## Target

省略 `target` 时会选择符合 Unit 类型的默认内容：

| Unit  | 默认 target                    |
| ----- | ------------------------------ |
| Sheet | active worksheet 的 used range |
| Doc   | 全部页面                       |
| Slide | 全部 slide pages               |
| Board | 包含全部元素的 content bounds  |
| Base  | 打开后的 active table/view     |

需要精确控制时，可选择 Sheet range、Doc pages、Slide pages/contact sheet、Board region/elements 或 Base
table/view。Slide page number 从 1 开始，也可使用 page ID。

## 外置图片

UnitData 中的图片如果只包含 UUID，需要通过 `resolveImage` 注入真实 bytes 或 data URL。Package 会先遍历图片
引用，再创建适合 browser transport 的副本；不会修改调用方传入的 UnitData。

Host Unit 包含跨 Unit 公式时，可提供 `formulaReferenceUnits`。这是可选增强，不改变普通截图只需
`unitType + unitData` 的合同。

## 结果与限制

一次 capture 可能返回多张图片。每张图片包含 PNG bytes、宽高、page/target identity 和稳定建议名称。Limits 可
约束 page 数、单图像素和总像素，防止意外输入耗尽内存。Scale 的允许范围为 0.1 到 4。

渲染失败、target 非法、图片无法解析或超过限制时抛出 `UnitScreenshotError`。Application 始终应在最外层关闭
共享 render runtime。

需要直接控制 browser operation 时使用 `@univer-cli/univer-render-runtime`；需要 Slide layout 诊断时使用
`@univer-cli/unit-layout-lint`。

预设 command 见
[`@univer-cli/unit-screenshot-command`](../unit-screenshot-command/README.zh-CN.md)。
