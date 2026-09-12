# @univerjs-pro/sheets-shape

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/sheets-shape?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-shape)
[![license](https://img.shields.io/npm/l/@univerjs-pro/sheets-shape?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-shape)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/sheets-shape?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-shape)

`@univerjs-pro/sheets-shape` is part of Univer Pro. Shape and drawing model integration for Univer Sheets.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/sheets-shape` | `UniverProSheetsShape` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/sheets-shape
# or
npm install @univerjs-pro/sheets-shape
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverSheetsShapePlugin } from '@univerjs-pro/sheets-shape';

univer.registerPlugin(UniverSheetsShapePlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/sheets-shape)
