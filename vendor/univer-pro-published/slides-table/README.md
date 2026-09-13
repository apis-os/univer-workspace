# @univerjs-pro/slides-table

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/slides-table?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-table)
[![license](https://img.shields.io/npm/l/@univerjs-pro/slides-table?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-table)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/slides-table?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-table)

`@univerjs-pro/slides-table` is part of Univer Pro. Table model integration for Univer Slides.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/slides-table` | `UniverProSlidesTable` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/slides-table
# or
npm install @univerjs-pro/slides-table
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverSlidesTablePlugin } from '@univerjs-pro/slides-table';

univer.registerPlugin(UniverSlidesTablePlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/slides-table)
