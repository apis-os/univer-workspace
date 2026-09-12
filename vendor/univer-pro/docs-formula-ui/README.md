# @univerjs-pro/docs-formula-ui

`@univerjs-pro/docs-formula-ui` provides the editor, ribbon entry, hover chrome, and floating menu for inline Formula custom ranges in Univer Docs.

## Installation

```sh
pnpm add @univerjs-pro/docs-formula-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/docs-formula-ui/lib/index.css';
import EnUS from '@univerjs-pro/docs-formula-ui/locale/en-US';
import { UniverDocsFormulaUIPlugin } from '@univerjs-pro/docs-formula-ui';

univer.registerPlugin(UniverDocsFormulaUIPlugin);
```

Merge the selected locale into the application locale map. The UI plugin depends on the model package and reuses the shared Formula Binding editor from `@univerjs-pro/shape-editor-ui`.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-formula-ui)
