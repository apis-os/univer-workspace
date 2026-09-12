# @univerjs-pro/slides

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/slides?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides)
[![license](https://img.shields.io/npm/l/@univerjs-pro/slides?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/slides?style=flat-square)](https://npmjs.com/package/@univerjs-pro/slides)

`@univerjs-pro/slides` is part of Univer Pro. Slide model integration for Univer.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/slides` | `UniverProSlides` | No | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/slides
# or
npm install @univerjs-pro/slides
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import EnUS from '@univerjs-pro/slides/locale/en-US';
import { UniverSlidesPlugin } from '@univerjs-pro/slides';

univer.registerPlugin(UniverSlidesPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import locale files only for the languages your application enables.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/slides)
