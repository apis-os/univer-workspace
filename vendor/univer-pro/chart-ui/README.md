# @univerjs-pro/chart-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/chart-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/chart-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/chart-ui)

`@univerjs-pro/chart-ui` is part of Univer Pro. Shared chart UI components for Univer Pro.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/chart-ui` | `UniverProChartUi` | No | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/chart-ui
# or
npm install @univerjs-pro/chart-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import EnUS from '@univerjs-pro/chart-ui/locale/en-US';
import * as ChartUi from '@univerjs-pro/chart-ui';

// Use exported APIs from ChartUi as needed.

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/chart-ui)
