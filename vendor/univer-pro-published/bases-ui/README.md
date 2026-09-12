# @univerjs-pro/bases-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/bases-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/bases-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/bases-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/bases-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/bases-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/bases-ui)

`@univerjs-pro/bases-ui` is part of Univer Pro. Base UI and render-engine integration for Univer.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/bases-ui` | `UniverProBasesUi` | Yes | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/bases-ui
# or
npm install @univerjs-pro/bases-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/bases-ui/lib/index.css';
import EnUS from '@univerjs-pro/bases-ui/locale/en-US';
import { UniverBasesUIPlugin } from '@univerjs-pro/bases-ui';

univer.registerPlugin(UniverBasesUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/bases-ui)
