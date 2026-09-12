# @univerjs-pro/docs-column

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-column?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-column)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-column?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-column)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-column?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-column)

`@univerjs-pro/docs-column` is part of Univer Pro. Column block model integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-column` | `UniverProDocsColumn` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/docs-column
# or
npm install @univerjs-pro/docs-column
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverDocsColumnPlugin } from '@univerjs-pro/docs-column';

univer.registerPlugin(UniverDocsColumnPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-column)
