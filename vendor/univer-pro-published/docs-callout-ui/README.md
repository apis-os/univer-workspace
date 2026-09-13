# @univerjs-pro/docs-callout-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-callout-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-callout-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-callout-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-callout-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-callout-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-callout-ui)

`@univerjs-pro/docs-callout-ui` is part of Univer Pro. Callout block UI integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-callout-ui` | `UniverProDocsCalloutUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/docs-callout-ui
# or
npm install @univerjs-pro/docs-callout-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/docs-callout-ui/lib/index.css';
import EnUS from '@univerjs-pro/docs-callout-ui/locale/en-US';
import { UniverDocsCalloutUIPlugin } from '@univerjs-pro/docs-callout-ui';

univer.registerPlugin(UniverDocsCalloutUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-callout-ui)
