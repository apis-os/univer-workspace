# @univerjs-pro/docs-quote

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-quote?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-quote)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-quote?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-quote)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-quote?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-quote)

`@univerjs-pro/docs-quote` is part of Univer Pro. Quote block model integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-quote` | `UniverProDocsQuote` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/docs-quote
# or
npm install @univerjs-pro/docs-quote
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverDocsQuotePlugin } from '@univerjs-pro/docs-quote';

univer.registerPlugin(UniverDocsQuotePlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-quote)
