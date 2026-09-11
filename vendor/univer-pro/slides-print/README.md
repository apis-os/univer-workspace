# @univerjs-pro/slides-print

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/slides-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-print)
[![license](https://img.shields.io/npm/l/@univerjs-pro/slides-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-print)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/slides-print?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides-print)

`@univerjs-pro/slides-print` is part of Univer Pro. Print integration for Univer Slides.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/slides-print` | `UniverProSlidesPrint` | No | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/slides-print
# or
npm install @univerjs-pro/slides-print
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import EnUS from '@univerjs-pro/slides-print/locale/en-US';
import { UniverSlidesPrintPlugin } from '@univerjs-pro/slides-print';

univer.registerPlugin(UniverSlidesPrintPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import locale files only for the languages your application enables.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/slides-print)
