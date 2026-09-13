# @univer-cli/api-reference

[English](./README.md) | 简体中文

在本地搜索和查阅 Univer Facade API，无需启动 Univer，也无需访问在线文档。

不知道相关 class 或 API symbol 时，可以用 API 名关键词或 identifier fragment 搜索已安装的索引；已知 class 或准确 symbol 时，可以查看 class、member、type 或 enum 的结构化详情。查询结果是普通 TypeScript 数据，适合交给 CLI、Agent、编辑器工具或自定义界面继续处理。

## 安装

```bash
pnpm add @univer-cli/api-reference
```

要求 Node.js 22.12 或更高版本。

## 快速开始

Package 自带一份与当前 Univer SDK declarations 对应的 reference：

```ts
import { createStandardApiReference } from "@univer-cli/api-reference";

const reference = createStandardApiReference();

const matches = reference.find({
  terms: ["setValues", "conditionalformat"],
  unit: "sheet",
  limit: 20,
});

const details = reference.show([
  "FRange",
  "FRange.setValues",
  "ConditionalFormatHighlightRuleBuilder.setRanges",
  "ICellData.v",
]);
```

`find()` 按关键词分别返回候选项，适合发现 API symbol。将 `find()` 返回的有用 symbol 直接传给 `show()`；`show()` 按 symbol 返回精确详情，适合生成说明或校验输入。Show 结果会保留 declaration header、overload、结构化 JSDoc、声明来源关系和直接引用的 type，使 adapter 无需重新解析 `.d.ts` 就能渲染受支持的公开声明投影。

## 查询规则

- `find()` 按 API 名关键词或 identifier fragment 搜索，不区分大小写，支持 substring、camelCase 分词和 identifier 模糊匹配。
- 每个搜索词都独立处理并分别返回结果；多个搜索词不会按 AND 组合，`find()` 也不会解释意图。
- `unit` 可限定为 `sheet`、`slide`、`doc`、`base` 或 `board`，shared API 始终保留。
- `limit` 作用于每个搜索词，而不是所有结果的总和。
- 详情包含精确声明、结构化 JSDoc、继承、组合、overload、相关类型和拼写建议。
- 公开 Facade 签名可达的 class 即使只是链式返回类型、不是直接导出的 Facade root，也可以查询。
- 常用 class 名可使用别名，例如 `range` 会解析为 `FRange`。
- symbol 不存在时返回 `status: "not-found"`，不会抛出异常。

## 加载自己的 reference

如果 application 需要固定另一份 API 数据，可以加载预生成 artifact：

```ts
import { loadApiReferenceArtifact } from "@univer-cli/api-reference";

const reference = loadApiReferenceArtifact(artifact);
```

Artifact 是带版本的 opaque value。Package 会在加载时校验格式；调用方不应依赖其内部索引结构。

预设 command 见
[`@univer-cli/api-reference-command`](../api-reference-command/README.zh-CN.md)。

## API 入口

- `createStandardApiReference()`：使用内置 Univer declarations 创建 reference。
- `loadApiReferenceArtifact(artifact)`：校验并加载预生成 artifact。
- `ApiReference.find()`：按关键词发现 API。
- `ApiReference.show()`：按 symbol 查看详情。
