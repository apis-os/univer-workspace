# @univerjs-pro/docs-latex

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-latex?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-latex)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-latex?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-latex)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-latex?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-latex)

`@univerjs-pro/docs-latex` is part of Univer Pro. LaTeX formula model integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-latex` | `UniverProDocsLatex` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/docs-latex
# or
npm install @univerjs-pro/docs-latex
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverDocsLatexPlugin } from '@univerjs-pro/docs-latex';

univer.registerPlugin(UniverDocsLatexPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-latex)
