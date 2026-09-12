# @univerjs-pro/docs-list-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-list-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-list-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-list-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-list-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-list-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-list-ui)

`@univerjs-pro/docs-list-ui` is part of Univer Pro. Enhanced list UI integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-list-ui` | `UniverProDocsListUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/docs-list-ui
# or
npm install @univerjs-pro/docs-list-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/docs-list-ui/lib/index.css';
import EnUS from '@univerjs-pro/docs-list-ui/locale/en-US';
import { UniverDocsListUIPlugin } from '@univerjs-pro/docs-list-ui';

univer.registerPlugin(UniverDocsListUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-list-ui)
