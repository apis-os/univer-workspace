# @univer-cli/content-inspection

English | [简体中文](./README.zh-CN.md)

Read stable, structured content information from loaded Univer Units, suitable for CLI, Agent, testing or other automation tools.

It supports Sheet, Doc, Slide, Base, and Board. Supply a read-only runtime and a typed query to receive a JSON-compatible result.

## Installation

```bash
pnpm add @univer-cli/content-inspection
```

Requires Node.js 22.12 or higher.

## Quick Start

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

The runtime only needs to implement this read interface:

```ts
interface ContentInspectionRuntime {
  readonly unitId: string;
  readonly unitType: "sheet" | "doc" | "slide" | "base" | "board";
  execute(input: { code: string; mode: "read" }): Promise<{ value: JsonValue }>;
}
```

A Collaboration Runtime lease can adapt directly to this interface.

## What can be queried?

Each Unit has an overview query, which is used to first discover the structure and then launch a more precise query:

- Sheet: `workbook` overview, select worksheet by ID/name/index, or read worksheet range;
- Doc: `document` overview, or select paragraph by ID/index;
- Slide: `presentation` overview, or select a slide by ID/index;
- Base: `base` overview of ordered tables, fields, record counts, and views. Field config is included, but record values and view projections are not.
- Board: `board` overview for ordered element summaries, type counts, background, and theme; or `board-element` details selected by exact element ID.

The query is a discriminated union, so TypeScript infers the fields available for each query kind. Results contain only JSON-compatible values for straightforward serialization and cross-process transfer.

Board connector details include every ordered label in `labels`, with its ID, content, layout, placement, and style. `labelText` and `labelStyle` retain the primary-label summary.

## Error model

Failures use `ContentInspectionError` with stable codes for invalid selectors, missing content, Unit type mismatches, runtime failures, and invalid results.

For the preset command, see
[`@univer-cli/content-inspection-command`](../content-inspection-command/README.md).
