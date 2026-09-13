# @univerjs-pro/boards-chart

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/boards-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-chart)
[![license](https://img.shields.io/npm/l/@univerjs-pro/boards-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-chart)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/boards-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-chart)

`@univerjs-pro/boards-chart` is part of Univer Pro. Chart model integration for Univer Boards.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/boards-chart` | `UniverProBoardsChart` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/boards-chart
# or
npm install @univerjs-pro/boards-chart
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverBoardsChartPlugin } from '@univerjs-pro/boards-chart';

univer.registerPlugin(UniverBoardsChartPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/boards-chart)
