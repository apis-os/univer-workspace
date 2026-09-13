# @univerjs-pro/embed-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/embed-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/embed-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/embed-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/embed-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/embed-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/embed-ui)

`@univerjs-pro/embed-ui` is part of Univer Pro. Cross-unit embed UI registry and host integration foundation for Univer.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/embed-ui` | `UniverEmbedUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/embed-ui
# or
npm install @univerjs-pro/embed-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/embed-ui/lib/index.css';
import EnUS from '@univerjs-pro/embed-ui/locale/en-US';
import { UniverEmbedUIPlugin } from '@univerjs-pro/embed-ui';

univer.registerPlugin(UniverEmbedUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/embed-ui)
