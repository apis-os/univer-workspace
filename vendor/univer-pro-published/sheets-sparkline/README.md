# @univerjs-pro/sheets-sparkline

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/sheets-sparkline?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-sparkline)
[![license](https://img.shields.io/npm/l/@univerjs-pro/sheets-sparkline?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-sparkline)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/sheets-sparkline?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-sparkline)

`@univerjs-pro/sheets-sparkline` is part of Univer Pro. Sparkline model integration for Univer Sheets.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/sheets-sparkline` | `UniverProSheetsSparkline` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/sheets-sparkline
# or
npm install @univerjs-pro/sheets-sparkline
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverSheetSparklinePlugin } from '@univerjs-pro/sheets-sparkline';

univer.registerPlugin(UniverSheetSparklinePlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/sheets-sparkline)
