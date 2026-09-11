# @univerjs-pro/bases-exchange-client

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/bases-exchange-client?style=flat-square)](https://npmjs.com/package/@univerjs-pro/bases-exchange-client)
[![license](https://img.shields.io/npm/l/@univerjs-pro/bases-exchange-client?style=flat-square)](https://npmjs.com/package/@univerjs-pro/bases-exchange-client)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/bases-exchange-client?style=flat-square)](https://npmjs.com/package/@univerjs-pro/bases-exchange-client)

`@univerjs-pro/bases-exchange-client` is part of Univer Pro. Base import and export client integration for Univer Pro.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/bases-exchange-client` | `UniverProBasesExchangeClient` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/bases-exchange-client
# or
npm install @univerjs-pro/bases-exchange-client
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/bases-exchange-client/lib/index.css';
import EnUS from '@univerjs-pro/bases-exchange-client/locale/en-US';
import { UniverBasesExchangeClientPlugin } from '@univerjs-pro/bases-exchange-client';

univer.registerPlugin(UniverBasesExchangeClientPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/bases-exchange-client)
