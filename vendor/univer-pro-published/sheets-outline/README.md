# @univerjs-pro/sheets-outline

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/sheets-outline?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-outline)
[![license](https://img.shields.io/npm/l/@univerjs-pro/sheets-outline?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-outline)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/sheets-outline?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-outline)

`@univerjs-pro/sheets-outline` is part of Univer Pro. Dimension outline model integration for Univer Sheets.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/sheets-outline` | `UniverProSheetsOutline` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/sheets-outline
# or
npm install @univerjs-pro/sheets-outline
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverSheetsOutlinePlugin } from '@univerjs-pro/sheets-outline';

univer.registerPlugin(UniverSheetsOutlinePlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/sheets-outline)
