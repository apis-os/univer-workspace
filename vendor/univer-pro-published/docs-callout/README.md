# @univerjs-pro/docs-callout

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-callout?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-callout)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-callout?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-callout)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-callout?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-callout)

`@univerjs-pro/docs-callout` is part of Univer Pro. Callout block model integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-callout` | `UniverProDocsCallout` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/docs-callout
# or
npm install @univerjs-pro/docs-callout
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverDocsCalloutPlugin } from '@univerjs-pro/docs-callout';

univer.registerPlugin(UniverDocsCalloutPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-callout)
