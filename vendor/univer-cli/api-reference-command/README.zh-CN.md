# @univer-cli/api-reference-command

[English](./README.md) | 简体中文

把 `@univer-cli/api-reference` 接入现有 Commander 应用，提供可直接使用的 `api find` 和 `api show`
命令。

## 安装

```bash
pnpm add commander @univer-cli/api-reference @univer-cli/api-reference-command
```

Commander `^15.0.0` 是 peer dependency。要求 Node.js 22.12 或更高版本。

## 快速开始

```ts
import { createStandardApiReference } from "@univer-cli/api-reference";
import { createApiCommand } from "@univer-cli/api-reference-command";
import { Command } from "commander";

const program = new Command("my-cli");

program.addCommand(
  createApiCommand({
    reference: createStandardApiReference(),
  }),
);

await program.parseAsync();
```

构建后可直接查询：

```bash
my-cli api find conditionformat --unit sheet
my-cli api show FRange FRange.setValues ICellData.v
my-cli api show ConditionalFormatHighlightRuleBuilder.setRanges
```

## 命令一览

```text
api find <terms...> [--unit <sheet|slide|doc|base|board>]
api show <symbols...>
```

### 选择 `find` 或 `show`

- 不知道相关 class 或 API symbol 时，使用 API 名关键词或 identifier fragment 执行 `find`。
- 已知 class 时，使用 `show <Class>` 列出它支持的 API。
- 已知准确的 class、member、type、field 或 enum symbol 时，使用 `show <symbol>` 查看详情。
- 公开 Facade 返回签名可达的链式 class 即使不是上游 package 直接导出的 Facade root，也可以作为 `show` 查询目标。

将 `find` 返回的有用 symbol 直接传给 `show`，不要再次搜索同一个 symbol。

`show` 输出受支持的公开 `.d.ts` 投影。查询 class 时会显示 class 的完整 JSDoc，并在有内容时于每个 member
签名的上一行显示单行摘要 JSDoc；继承和组合成员仍放在标明来源的独立声明块中。精确查询 member 时会显示
完整签名、完整 JSDoc、example 和直接引用的 type declaration。`show` 不截断签名或 type declaration。

### `find` query 规则

`find` 使用 API 名关键词或 identifier fragment 搜索已安装 SDK 的索引，不会解释意图。搜索不区分大小写；每个 query 参数都独立搜索并分别返回结果，因此多个参数不会按 AND 组合。需要把多个单词作为一个关键词 query 时，必须使用引号。

```bash
# 一个多单词 query
api find "condition format" --unit sheet

# 一个紧凑 query
api find conditionformat --unit sheet

# 有意进行批量查找：两个独立 query，输出两个结果区块
api find setValues getValues --unit sheet

# 常见错误：这不是“condition AND format”；
# 实际会执行两个宽泛且相互独立的搜索。
api find condition format
```

`find` 输出精简的候选项；`show` 输出精确声明详情。批量 `show` 会为每个结果标记 `// [found]` 或
`// [not-found]`，并输出汇总。只要存在找不到的 symbol，就会向 stderr 写入诊断并以失败退出。参数非法或
reference 执行异常也由 Commander 处理。

## 使用原生 Commander 定制

Factory 返回原生 `Command`，可以继续修改名称、alias、输出和错误行为：

```ts
const command = createApiCommand({ reference }).name("reference").alias("api").exitOverride();

command.configureOutput({
  writeOut: (text) => process.stdout.write(text),
  writeErr: (text) => process.stderr.write(text),
});
```

Package 不创建 root program，也不限制 application 如何组合其他 command。

## API 入口

- `createApiCommand({ reference })`：返回原生 Commander `Command`。
- `renderFindResults()`、`renderShowResult()`：默认文本 presenter。
