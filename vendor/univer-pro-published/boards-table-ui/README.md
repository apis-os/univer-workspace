# @univerjs-pro/boards-table-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/boards-table-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-table-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/boards-table-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-table-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/boards-table-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-table-ui)

`@univerjs-pro/boards-table-ui` is part of Univer Pro. Board UI integration for Univer Pro page tables.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/boards-table-ui` | `UniverProBoardsTableUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/boards-table-ui
# or
npm install @univerjs-pro/boards-table-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/boards-table-ui/lib/index.css';
import EnUS from '@univerjs-pro/boards-table-ui/locale/en-US';
import { UniverBoardsTableUIPlugin } from '@univerjs-pro/boards-table-ui';

univer.registerPlugin(UniverBoardsTableUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/boards-table-ui)
