# @univerjs-pro/ink

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/ink?style=flat-square)](https://npmjs.com/package/@univerjs-pro/ink)
[![license](https://img.shields.io/npm/l/@univerjs-pro/ink?style=flat-square)](https://npmjs.com/package/@univerjs-pro/ink)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/ink?style=flat-square)](https://npmjs.com/package/@univerjs-pro/ink)

`@univerjs-pro/ink` is part of Univer Pro. Reusable ink model and geometry integration for Univer.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/ink` | `UniverProInk` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/ink
# or
npm install @univerjs-pro/ink
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverInkPlugin } from '@univerjs-pro/ink';

univer.registerPlugin(UniverInkPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/ink)
