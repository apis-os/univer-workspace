# @univerjs-pro/sheets-chart

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/sheets-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-chart)
[![license](https://img.shields.io/npm/l/@univerjs-pro/sheets-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-chart)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/sheets-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-chart)

`@univerjs-pro/sheets-chart` is part of Univer Pro. Chart model integration for Univer Sheets.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/sheets-chart` | `UniverProSheetsChart` | No | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/sheets-chart
# or
npm install @univerjs-pro/sheets-chart
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import EnUS from '@univerjs-pro/sheets-chart/locale/en-US';
import { UniverSheetsChartPlugin } from '@univerjs-pro/sheets-chart';

univer.registerPlugin(UniverSheetsChartPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import locale files only for the languages your application enables.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/sheets-chart)
