# @univerjs-pro/ink-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/ink-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/ink-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/ink-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/ink-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/ink-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/ink-ui)

`@univerjs-pro/ink-ui` is part of Univer Pro. Ink UI integration for Univer.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/ink-ui` | `UniverProInkUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/ink-ui
# or
npm install @univerjs-pro/ink-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/ink-ui/lib/index.css';
import EnUS from '@univerjs-pro/ink-ui/locale/en-US';
import { UniverInkUIPlugin } from '@univerjs-pro/ink-ui';

univer.registerPlugin(UniverInkUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/ink-ui)
