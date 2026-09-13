# @univerjs-pro/sheets-pivot

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/sheets-pivot?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-pivot)
[![license](https://img.shields.io/npm/l/@univerjs-pro/sheets-pivot?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-pivot)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/sheets-pivot?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-pivot)

`@univerjs-pro/sheets-pivot` is part of Univer Pro. Pivot table integration for Univer Sheets.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/sheets-pivot` | `UniverProSheetsPivot` | No | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/sheets-pivot
# or
npm install @univerjs-pro/sheets-pivot
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import EnUS from '@univerjs-pro/sheets-pivot/locale/en-US';
import { UniverSheetsPivotTablePlugin } from '@univerjs-pro/sheets-pivot';

univer.registerPlugin(UniverSheetsPivotTablePlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import locale files only for the languages your application enables.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/sheets-pivot)
