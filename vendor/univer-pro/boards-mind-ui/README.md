# @univerjs-pro/boards-mind-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/boards-mind-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-mind-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/boards-mind-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-mind-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/boards-mind-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-mind-ui)

`@univerjs-pro/boards-mind-ui` is part of Univer Pro. Board UI integration for Univer Pro mind maps.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/boards-mind-ui` | `UniverProBoardsMindUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/boards-mind-ui
# or
npm install @univerjs-pro/boards-mind-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/boards-mind-ui/lib/index.css';
import EnUS from '@univerjs-pro/boards-mind-ui/locale/en-US';
import { UniverBoardsMindUIPlugin } from '@univerjs-pro/boards-mind-ui';

univer.registerPlugin(UniverBoardsMindUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/boards-mind-ui)
