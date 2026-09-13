# @univer-cli/univer-render-runtime

[English](./README.md) | 简体中文

在 Node.js 中启动本地 browser，托管 application 构建的 Render Page，并把已物化的 Univer UnitData 交给页面
执行 render operation。

这是 `unit-screenshot`、`unit-pdf-printer` 与 `unit-layout-lint` 共用的底层 runtime。若目标只是得到 PNG、PDF
或 lint report，优先从对应的上层 capability 开始。

## 安装

```bash
pnpm add @univer-cli/univer-render-runtime
```

还需要：

- application 构建的 Render Page 静态目录；
- Chrome、Chromium 或 Edge executable；
- 已物化到明确 head state 的 UnitData。

## 创建 runtime

```ts
import { fileURLToPath } from "node:url";
import { createUniverRenderRuntime } from "@univer-cli/univer-render-runtime";

const renderPageRoot = fileURLToPath(new URL("../dist/render-page", import.meta.url));
const runtime = await createUniverRenderRuntime({ renderPageRoot });

try {
  const image = await runtime.render({
    unitType: "sheet",
    unitData: workbookData,
    operation: {
      kind: "sheet-range",
      sheetName: "Sheet1",
      range: "A1:F20",
      scale: 2,
    },
  });

  console.log(image.width, image.height, image.bytes);
} finally {
  await runtime.close();
}
```

一个 runtime 可以顺序执行多次 operation。Application 应在最外层统一关闭它，而不是为每张图片重新启动
browser。

## Render Page 与 browser

Package 不携带 Univer plugins 或预构建页面。Application 使用
[`@univer-cli/univer-render-page`](../univer-render-page/README.zh-CN.md) 或自定义实现构建页面，再把目录传给
`renderPageRoot`。

Browser 按以下顺序解析：显式 `browserExecutablePath`、`UNIVER_RENDER_BROWSER`、SDK browser cache、常见
系统安装路径。创建 runtime 不会隐式下载 browser。

```ts
import {
  installUniverRenderBrowser,
  probeUniverRenderBrowser,
} from "@univer-cli/univer-render-runtime";

const installation = await installUniverRenderBrowser();
await probeUniverRenderBrowser({ executablePath: installation.executablePath });
```

## Operations 与结果

Runtime 支持上层 capability 所需的 Sheet range、Doc page、Slide page、Board content 与 Base view/table
operations，并返回 PNG、PDF 或 layout facts。PDF 打印先等待已加载资源，在当前 Render Page 内调用当前 Unit 的
browser 原生 print operation，再由 Chromium 直接捕获同一 Page；Base Unit 不可打印。Protocol 在 Node 与 page
两侧校验；不匹配的页面版本、无效结果和 timeout 会明确失败。

`license` 是可选项，传给 page bootstrap；它不会写入静态文件。跨 Unit 公式可通过
`formulaReferenceUnits` 提供最小依赖 UnitData。

## 运行安全

Browser probe 与 runtime 当前使用 Chromium `--no-sandbox`。不要在承载敏感数据的共享高权限宿主机上直接渲染
不可信 UnitData；应使用受限用户、container 或其他进程级隔离，并限制文件与网络访问。

Board 布局结果包含连接线标签溢出、布局未解析、碰撞和端点约束问题；SDK 返回受影响标签时，问题中的 `labelIds` 会一并保留。

## 职责边界

Package 负责静态托管、browser lifecycle、page protocol、operation dispatch、timeout 与结构化结果。它不加载
远程 target、不物化 changeset、不决定输出 target，也不写 PNG/PDF 文件。
