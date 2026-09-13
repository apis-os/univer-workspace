# @univerjs-pro/docs-table

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-table?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-table)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-table?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-table)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-table?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-table)

`@univerjs-pro/docs-table` is part of Univer Pro. Enhanced table model integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-table` | `UniverProDocsTable` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/docs-table
# or
npm install @univerjs-pro/docs-table
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverDocsTablePlugin } from '@univerjs-pro/docs-table';

univer.registerPlugin(UniverDocsTablePlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-table)
