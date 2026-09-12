# @univerjs-pro/pdfs

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/pdfs?style=flat-square)](https://npmjs.com/package/@univerjs-pro/pdfs)
[![license](https://img.shields.io/npm/l/@univerjs-pro/pdfs?style=flat-square)](https://npmjs.com/package/@univerjs-pro/pdfs)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/pdfs?style=flat-square)](https://npmjs.com/package/@univerjs-pro/pdfs)

`@univerjs-pro/pdfs` is part of Univer Pro. PDF document models, conversion contracts, and editing primitives for Univer Pro.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/pdfs` | `UniverProPdfs` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/pdfs
# or
npm install @univerjs-pro/pdfs
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverPdfsPlugin } from '@univerjs-pro/pdfs';

univer.registerPlugin(UniverPdfsPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/pdfs)
