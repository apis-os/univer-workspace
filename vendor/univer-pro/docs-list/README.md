# @univerjs-pro/docs-list

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-list?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-list)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-list?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-list)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-list?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-list)

`@univerjs-pro/docs-list` is part of Univer Pro. Enhanced list model integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-list` | `UniverProDocsList` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/docs-list
# or
npm install @univerjs-pro/docs-list
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverDocsListPlugin } from '@univerjs-pro/docs-list';

univer.registerPlugin(UniverDocsListPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-list)
