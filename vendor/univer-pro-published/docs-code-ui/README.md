# @univerjs-pro/docs-code-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-code-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-code-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-code-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-code-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-code-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-code-ui)

`@univerjs-pro/docs-code-ui` is part of Univer Pro. Code block UI integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-code-ui` | `UniverProDocsCodeUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/docs-code-ui
# or
npm install @univerjs-pro/docs-code-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/docs-code-ui/lib/index.css';
import EnUS from '@univerjs-pro/docs-code-ui/locale/en-US';
import { UniverDocsCodeUIPlugin } from '@univerjs-pro/docs-code-ui';

univer.registerPlugin(UniverDocsCodeUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-code-ui)
