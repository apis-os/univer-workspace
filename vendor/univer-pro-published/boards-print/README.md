# @univerjs-pro/boards-print

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/boards-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-print)
[![license](https://img.shields.io/npm/l/@univerjs-pro/boards-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-print)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/boards-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-print)

`@univerjs-pro/boards-print` is part of Univer Pro. Print and image export integration for Univer Boards.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/boards-print` | `UniverProBoardsPrint` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/boards-print
# or
npm install @univerjs-pro/boards-print
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/boards-print/lib/index.css';
import EnUS from '@univerjs-pro/boards-print/locale/en-US';
import { UniverBoardsPrintPlugin } from '@univerjs-pro/boards-print';

univer.registerPlugin(UniverBoardsPrintPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/boards-print)
