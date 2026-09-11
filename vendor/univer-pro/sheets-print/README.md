# @univerjs-pro/sheets-print

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/sheets-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-print)
[![license](https://img.shields.io/npm/l/@univerjs-pro/sheets-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-print)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/sheets-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/sheets-print)

`@univerjs-pro/sheets-print` is part of Univer Pro. Print integration for Univer Sheets.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/sheets-print` | `UniverProSheetsPrint` | Yes | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/sheets-print
# or
npm install @univerjs-pro/sheets-print
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/sheets-print/lib/index.css';
import EnUS from '@univerjs-pro/sheets-print/locale/en-US';
import { UniverSheetsPrintPlugin } from '@univerjs-pro/sheets-print';

univer.registerPlugin(UniverSheetsPrintPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/sheets-print)
