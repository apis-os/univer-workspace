# @univer-cli/headless-univer

[English](./README.md) | 简体中文

为 Node.js 提供一套可直接用于生产组合的标准 headless Univer factory。

Factory 集中注册 Sheet、Doc、Slide、Base 和 Board 的内容插件、Facade extensions、locale、formula 与 network
依赖，并返回尚未加载目标 Unit 的独占 `Univer` instance。

## 安装

```bash
pnpm add @univer-cli/headless-univer
```

要求 Node.js 22.12 或更高版本。调用方还需要满足 package manifest 中的 Univer / Univer Pro peer 与 runtime
dependencies。

## 快速开始

最常见的用法是把标准 factory 注入 Collaboration Runtime：

```ts
import { createStandardHeadlessUniverFactory } from "@univer-cli/headless-univer";
import {
  createUniverCollaborationRuntimeFactory,
  type CollaborationRuntimeBackend,
} from "@univer-cli/univer-collaboration-runtime";

export function createRuntimeFactory(backend: CollaborationRuntimeBackend) {
  return createUniverCollaborationRuntimeFactory({
    backend,
    createUniver: createStandardHeadlessUniverFactory({
      license: process.env.UNIVER_LICENSE ?? "",
    }),
  });
}
```

返回的 factory 也可以用于任何接受同类 Univer factory 的自定义 runtime；本 package 不依赖 Collaboration
Runtime。

## Factory 行为

标准 composition：

- 注册 Sheet、Doc、Slide、Base 和 Board 的标准内容与 Pro plugins；
- 注册这些 Unit 对应的 Facade extensions；
- 使用固定 locale 与 Rust formula engine；
- 将 initial formula computing 设为 `NO_CALCULATION`；
- 接收可选的 `embedPluginConfig`；
- 通过 `createStandardHeadlessUniverFacade(univer)` 创建同一 dependency graph 上的 `FUniver`。

每次 factory 调用都返回新的独占 Univer。Lifecycle owner 必须在使用结束后正确 dispose。

## 职责边界

Package 只负责标准 Univer composition，不加载 Snapshot 或 UnitData，不捕获 mutation，也不管理 revision、OT、
commit、worker pool、daemon、认证或 server transport。需要不同插件组合时，application 可以实现自己的
`HeadlessUniverFactory`，无需 fork 本 package。
