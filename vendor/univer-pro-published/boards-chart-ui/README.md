# @univerjs-pro/boards-chart-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/boards-chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-chart-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/boards-chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-chart-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/boards-chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-chart-ui)

`@univerjs-pro/boards-chart-ui` is part of Univer Pro. Chart UI integration for Univer Boards.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/boards-chart-ui` | `UniverProBoardsChartUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/boards-chart-ui
# or
npm install @univerjs-pro/boards-chart-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/boards-chart-ui/lib/index.css';
import { UniverBoardsChartUIPlugin } from '@univerjs-pro/boards-chart-ui';

univer.registerPlugin(UniverBoardsChartUIPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/boards-chart-ui)
