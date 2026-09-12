# @univer-cli/api-reference

English | [简体中文](./README.zh-CN.md)

Search and consult the Univer Facade API locally without launching Univer or accessing online documentation.

When no relevant class or API symbol is known, search the installed index using API-name keywords or identifier fragments. When a class or exact symbol is known, inspect structured details for classes, members, types, and enums. Query results are ordinary TypeScript data that a CLI, Agent, editor tool, or custom interface can process further.

## Installation

```bash
pnpm add @univer-cli/api-reference
```

Requires Node.js 22.12 or higher.

## Quick Start

The package includes a reference generated from the current Univer SDK declarations:

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

`find()` returns matches for each keyword and is useful for discovering API symbols. Pass a useful symbol returned by `find()` directly to `show()`. `show()` returns precise details for each symbol and is useful for generating instructions or validating input. Show results retain declaration headers, overloads, structured JSDoc, declaration-source relations, and directly referenced types so adapters can render a supported public declaration projection without reparsing `.d.ts` files.

## Query rules

- `find()` searches by API-name keyword or identifier fragment. It is case-insensitive and supports substrings, camelCase word splitting, and fuzzy identifier matching.
- Each search term is handled independently and returns its own matches. Terms are not combined as AND, and `find()` does not interpret intent.
- `unit` can restrict results to `sheet`, `slide`, `doc`, `base`, or `board`; shared APIs are always
  included.
- `limit` works on each search term, not the sum of all results.
- Details include exact declarations, structured JSDoc, inheritance, composition, overloads, related
  types, and spelling suggestions.
- Classes reached through public Facade signatures can be inspected even when they are chain-only return types rather than directly exported Facade roots.
- Common class names can use aliases, for example, `range` will be resolved to `FRange`.
- When the symbol does not exist, `status: "not-found"` is returned and no exception is thrown.

## Load your own reference

If your application needs to pin a different API dataset, load a prebuilt artifact:

```ts
import { loadApiReferenceArtifact } from "@univer-cli/api-reference";

const reference = loadApiReferenceArtifact(artifact);
```

Artifact is a versioned opaque value. The package verifies the format when loading; callers should not rely on its internal index structure.

For the preset command, see
[`@univer-cli/api-reference-command`](../api-reference-command/README.md).

## API entry

- `createStandardApiReference()`: Create reference using built-in Univer declarations.
- `loadApiReferenceArtifact(artifact)`: Verify and load pre-generated artifacts.
- `ApiReference.find()`: Discover APIs by keyword.
- `ApiReference.show()`: Inspect details by symbol.
