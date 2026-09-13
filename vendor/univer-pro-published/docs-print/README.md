# @univerjs-pro/docs-print

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-print)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-print)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-print)

`@univerjs-pro/docs-print` is part of Univer Pro. Print integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-print` | `UniverProDocsPrint` | No | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/docs-print
# or
npm install @univerjs-pro/docs-print
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import EnUS from '@univerjs-pro/docs-print/locale/en-US';
import { UniverDocsPrintPlugin } from '@univerjs-pro/docs-print';

univer.registerPlugin(UniverDocsPrintPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-print)
