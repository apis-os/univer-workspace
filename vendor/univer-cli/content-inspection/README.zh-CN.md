# @univer-cli/content-inspection

[English](./README.md) | 简体中文

从已经加载的 Univer Unit 中读取稳定、结构化的内容信息，适合 CLI、Agent、测试或其他自动化工具。

支持 Sheet、Doc、Slide、Base 和 Board。调用方提供只读 runtime 和 typed query，即可得到 JSON-compatible
result。

## 安装

```bash
pnpm add @univer-cli/content-inspection
```

要求 Node.js 22.12 或更高版本。

## 快速开始

```ts
import { inspectContent } from "@univer-cli/content-inspection";

const result = await inspectContent(
  {
    unitId: lease.unitId,
    unitType: "sheet",
    execute: async (input) => await lease.execute(input),
  },
  { kind: "workbook" },
);

console.log(result);
```

Runtime 只需满足以下读取接口：

```ts
interface ContentInspectionRuntime {
  readonly unitId: string;
  readonly unitType: "sheet" | "doc" | "slide" | "base" | "board";
  execute(input: { code: string; mode: "read" }): Promise<{ value: JsonValue }>;
}
```

Collaboration Runtime lease 可以直接适配这个接口。

## 可以查询什么

每种 Unit 都有 overview query，用于先发现结构，再发起更精确的查询：

- Sheet：`workbook` overview、按 ID/name/index 选择 worksheet，或读取 worksheet range；
- Doc：`document` overview，或按 ID/index 选择 paragraph；
- Slide：`presentation` overview，或按 ID/index 选择 slide；
- Base：通过 `base` overview 读取有序的 Table、Field、Record 数量和 View。结果包含字段 config，
  但不包含记录值和 View projection。
- Board：通过 `board` overview 读取按 z-order 排列的 element summary、类型计数、背景和主题；再通过精确
  element ID 查询 `board-element` details。

Query 是 discriminated union，具体字段由 TypeScript 自动提示。结果只包含 JSON-compatible value，便于序列化
和跨进程传递。

Board 连接线详情通过 `labels` 保留全部有序标签及其 ID、内容、布局、位置和样式；`labelText` 和 `labelStyle` 保留首个标签的摘要。

## 错误模型

输入非法、内容不存在、Unit 类型不匹配、runtime 失败或结果无效时，package 会抛出带稳定 error code 的
`ContentInspectionError`。

预设 command 见
[`@univer-cli/content-inspection-command`](../content-inspection-command/README.zh-CN.md)。
