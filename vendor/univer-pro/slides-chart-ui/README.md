# @univerjs-pro/slides-chart-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/slides-chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-chart-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/slides-chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-chart-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/slides-chart-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-chart-ui)

`@univerjs-pro/slides-chart-ui` is part of Univer Pro. Chart UI integration for Univer Slides.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/slides-chart-ui` | `UniverProSlidesChartUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/slides-chart-ui
# or
npm install @univerjs-pro/slides-chart-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/slides-chart-ui/lib/index.css';
import EnUS from '@univerjs-pro/slides-chart-ui/locale/en-US';
import { UniverSlidesChartUIPlugin } from '@univerjs-pro/slides-chart-ui';

univer.registerPlugin(UniverSlidesChartUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/slides-chart-ui)
