# @univerjs-pro/slides-table-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/slides-table-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-table-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/slides-table-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-table-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/slides-table-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-table-ui)

`@univerjs-pro/slides-table-ui` is part of Univer Pro. Table UI integration for Univer Slides.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/slides-table-ui` | `UniverProSlidesTableUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/slides-table-ui
# or
npm install @univerjs-pro/slides-table-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/slides-table-ui/lib/index.css';
import { UniverSlidesTableUIPlugin } from '@univerjs-pro/slides-table-ui';

univer.registerPlugin(UniverSlidesTableUIPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/slides-table-ui)
