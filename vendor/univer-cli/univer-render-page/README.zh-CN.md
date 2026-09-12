# @univer-cli/univer-render-page

[English](./README.md) | 简体中文

帮助 application 构建一个供 `@univer-cli/univer-render-runtime` 加载的 browser Render Page。

Package 在页面内创建 Univer、实现 render 与 print operations、挂载 page protocol，并提供一套可直接使用的
完整 Univer / Univer Pro composition。它本身不启动 browser。

PDF 准备过程调用已为当前 Unit 注册的原生 print operation。Render Page 不维护另一套按 Unit 区分的 PDF
renderer，因此打印布局与输出行为以 browser print 为唯一事实来源。

## 安装

```bash
pnpm add @univer-cli/univer-render-page
pnpm add -D vite
```

要求 Node.js 22.12 或更高版本。最终页面必须由 application 自己构建为根目录含 `index.html` 的静态目录。

## 快速开始

Browser entry：

```ts
import { createPresetRenderUniver, mountUniverRenderPage } from "@univer-cli/univer-render-page";

const container = document.querySelector<HTMLElement>("#app");
if (container === null) throw new Error("#app is required");

await mountUniverRenderPage({
  container,
  createUniver: createPresetRenderUniver,
});
```

最小 HTML：

```html
<!doctype html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

用 Vite 或其他 bundler 构建后，把输出目录作为 render runtime 的 `renderPageRoot`。

## 自定义 Univer composition

如果 preset 注册了不需要的 plugin，或 application 有自定义 plugin，可以注入自己的 `createUniver`：

```ts
await mountUniverRenderPage({
  container,
  createUniver: async (context) => createApplicationUniver(context),
});
```

Factory 必须注册目标 Unit 所需的 content、render、UI、Facade 与 print extensions。Mount function 只负责共享
operation、Unit lifecycle 和 page protocol，不补齐缺失 plugin。

## License bootstrap

Preset 包含 Pro plugins。License 可由 Node runtime 在页面脚本执行前通过只读 bootstrap 注入；页面无需把
license 写进静态 bundle。未提供有效 license 时仍可渲染，但输出遵循 Univer Pro SDK 的 watermark 规则。

## 安全与边界

Render Page 会处理传入的 UnitData。不要在可访问敏感文件或网络的高权限 browser 环境中渲染不可信内容。
Application 应限制 browser process 的系统权限与网络范围。

Package 不安装或启动 browser，不托管静态目录，也不提供 Node screenshot/PDF API。这些职责属于
[`@univer-cli/univer-render-runtime`](../univer-render-runtime/README.zh-CN.md)。
