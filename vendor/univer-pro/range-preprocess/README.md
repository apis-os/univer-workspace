# @univerjs-pro/range-preprocess

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/range-preprocess?style=flat-square)](https://npmjs.com/package/@univerjs-pro/range-preprocess)
[![license](https://img.shields.io/npm/l/@univerjs-pro/range-preprocess?style=flat-square)](https://npmjs.com/package/@univerjs-pro/range-preprocess)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/range-preprocess?style=flat-square)](https://npmjs.com/package/@univerjs-pro/range-preprocess)

`@univerjs-pro/range-preprocess` is part of Univer Pro. Range preprocessing services and Facade APIs for Univer Pro Sheets.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/range-preprocess` | `UniverProRangePreprocess` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/range-preprocess
# or
npm install @univerjs-pro/range-preprocess
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverRangePreprocessPlugin } from '@univerjs-pro/range-preprocess';

univer.registerPlugin(UniverRangePreprocessPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/range-preprocess)
