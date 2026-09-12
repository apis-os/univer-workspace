# @univerjs-pro/docs-shape-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-shape-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-shape-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-shape-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-shape-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-shape-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-shape-ui)

`@univerjs-pro/docs-shape-ui` is part of Univer Pro. Shape and drawing UI integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-shape-ui` | `UniverProDocsShapeUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/docs-shape-ui
# or
npm install @univerjs-pro/docs-shape-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/docs-shape-ui/lib/index.css';
import EnUS from '@univerjs-pro/docs-shape-ui/locale/en-US';
import { UniverDocsShapeUIPlugin } from '@univerjs-pro/docs-shape-ui';

univer.registerPlugin(UniverDocsShapeUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-shape-ui)
