# @univerjs-pro/sheets-chart-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/sheets-chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-chart-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/sheets-chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-chart-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/sheets-chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-chart-ui)

`@univerjs-pro/sheets-chart-ui` is part of Univer Pro. Chart UI integration for Univer Sheets.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/sheets-chart-ui` | `UniverProSheetsChartUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/sheets-chart-ui
# or
npm install @univerjs-pro/sheets-chart-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/sheets-chart-ui/lib/index.css';
import EnUS from '@univerjs-pro/sheets-chart-ui/locale/en-US';
import { UniverSheetsChartUIPlugin } from '@univerjs-pro/sheets-chart-ui';

univer.registerPlugin(UniverSheetsChartUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/sheets-chart-ui)
