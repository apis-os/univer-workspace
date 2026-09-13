# @univerjs-pro/embed-unit-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/embed-unit-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/embed-unit-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/embed-unit-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/embed-unit-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/embed-unit-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/embed-unit-ui)

`@univerjs-pro/embed-unit-ui` is part of Univer Pro. It provides the shared UI for browsing and selecting referenced Workbook and Base units.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/embed-unit-ui` | `UniverEmbedUnitUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/embed-unit-ui
# or
npm install @univerjs-pro/embed-unit-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/embed-unit-ui/lib/index.css';
import EnUS from '@univerjs-pro/embed-unit-ui/locale/en-US';
import { UniverEmbedUnitUIPlugin } from '@univerjs-pro/embed-unit-ui';

univer.registerPlugin(UniverEmbedUnitUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Register `UniverEmbedPlugin` before this package; the plugin dependency metadata enforces the runtime order.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/embed-unit-ui)
