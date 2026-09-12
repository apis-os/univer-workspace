# @univerjs-pro/shape-editor-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/shape-editor-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/shape-editor-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/shape-editor-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/shape-editor-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/shape-editor-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/shape-editor-ui)

`@univerjs-pro/shape-editor-ui` is part of Univer Pro. Reusable shape editor UI building blocks for Univer Pro.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/shape-editor-ui` | `UniverProShapeEditorUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/shape-editor-ui
# or
npm install @univerjs-pro/shape-editor-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/shape-editor-ui/lib/index.css';
import EnUS from '@univerjs-pro/shape-editor-ui/locale/en-US';
import { UniverShapeEditorUIPlugin } from '@univerjs-pro/shape-editor-ui';

univer.registerPlugin(UniverShapeEditorUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/shape-editor-ui)
