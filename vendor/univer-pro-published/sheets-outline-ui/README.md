# @univerjs-pro/sheets-outline-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/sheets-outline-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-outline-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/sheets-outline-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-outline-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/sheets-outline-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-outline-ui)

`@univerjs-pro/sheets-outline-ui` is part of Univer Pro. Dimension outline UI integration for Univer Sheets.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/sheets-outline-ui` | `UniverProSheetsOutlineUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/sheets-outline-ui
# or
npm install @univerjs-pro/sheets-outline-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/sheets-outline-ui/lib/index.css';
import EnUS from '@univerjs-pro/sheets-outline-ui/locale/en-US';
import { UniverSheetsOutlineUIPlugin } from '@univerjs-pro/sheets-outline-ui';

univer.registerPlugin(UniverSheetsOutlineUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/sheets-outline-ui)
