# @univerjs-pro/docs-formula

`@univerjs-pro/docs-formula` provides inline Formula custom ranges for Univer Docs.

## Installation

```sh
pnpm add @univerjs-pro/docs-formula
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverDocsFormulaPlugin } from '@univerjs-pro/docs-formula';

univer.registerPlugin(UniverDocsFormulaPlugin);
```

The package owns Formula custom-range data, resource persistence, commands, and headless Facade APIs.
Register `@univerjs-pro/docs-formula-ui` separately when the editor UI is required.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-formula)
