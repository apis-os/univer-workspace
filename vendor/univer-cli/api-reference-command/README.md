# @univer-cli/api-reference-command

English | [简体中文](./README.zh-CN.md)

Add `@univer-cli/api-reference` to an existing Commander application with ready-to-use `api find` and `api show` commands.

## Installation

```bash
pnpm add commander @univer-cli/api-reference @univer-cli/api-reference-command
```

Commander `^15.0.0` is a peer dependency. Requires Node.js 22.12 or higher.

## Quick Start

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

After building the CLI, query the reference directly:

```bash
my-cli api find conditionformat --unit sheet
my-cli api show FRange FRange.setValues ICellData.v
my-cli api show ConditionalFormatHighlightRuleBuilder.setRanges
```

## Command list

```text
api find <terms...> [--unit <sheet|slide|doc|base|board>]
api show <symbols...>
```

### Choosing `find` or `show`

- When no relevant class or API symbol is known, use `find` with API-name keywords or identifier fragments.
- When a class is known, use `show <Class>` to list its supported APIs.
- When an exact class, member, type, field, or enum symbol is known, use `show <symbol>` to inspect it in detail.
- Chain-only classes reached through public Facade return signatures are valid `show` targets even when the upstream package does not export them as Facade roots.

Pass a useful symbol returned by `find` directly to `show`; do not search for the same symbol again.

`show` renders a supported public `.d.ts` projection. A class query includes the class JSDoc and,
when available, a one-line summary JSDoc immediately above each member signature; inherited and
composed members remain in named source declaration blocks. An exact member query includes its
complete signature, complete JSDoc, examples, and directly referenced type declarations. Show
signatures and type declarations are not truncated.

### `find` query semantics

`find` searches the installed SDK index by API-name keyword or identifier fragment; it does not interpret intent. Search is case-insensitive. Every query argument is searched independently and returns its own matches, so multiple arguments are not combined with AND. Quote multiple words when they should be treated as one keyword query.

```bash
# One multi-word query
api find "condition format" --unit sheet

# One compact query
api find conditionformat --unit sheet

# Intentional batch lookup: two independent queries and two result sections
api find setValues getValues --unit sheet

# Common mistake: this is not "condition AND format";
# it runs two broad, independent searches instead.
api find condition format
```

`find` prints concise human-readable matches; `show` prints precise declaration details. A batch
`show` labels every result as `// [found]` or `// [not-found]` and prints a batch summary. If any
symbol is not found, diagnostics are written to stderr and the command exits non-zero. Commander
also handles invalid arguments and reference execution errors.

## Customize with Commander

The factory returns a native `Command`, so you can continue to customize its name, aliases, output, and error behavior:

```ts
const command = createApiCommand({ reference }).name("reference").alias("api").exitOverride();

command.configureOutput({
  writeOut: (text) => process.stdout.write(text),
  writeErr: (text) => process.stderr.write(text),
});
```

The package does not create a root program or restrict how the application composes other commands.

## API entry

- `createApiCommand({ reference })`: Returns a native Commander `Command`.
- `renderFindResults()`, `renderShowResult()`: Default text presenters.
