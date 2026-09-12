# @univerjs-pro/bases

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/bases?style=flat-square)](https://npmjs.com/package/@univerjs-pro/bases)
[![license](https://img.shields.io/npm/l/@univerjs-pro/bases?style=flat-square)](https://npmjs.com/package/@univerjs-pro/bases)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/bases?style=flat-square)](https://npmjs.com/package/@univerjs-pro/bases)

`@univerjs-pro/bases` is part of Univer Pro. Base database core model and commands for Univer.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/bases` | `UniverProBases` | No | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/bases
# or
npm install @univerjs-pro/bases
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import EnUS from '@univerjs-pro/bases/locale/en-US';
import { UniverRemoteBasesPlugin } from '@univerjs-pro/bases';

univer.registerPlugin(UniverRemoteBasesPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import locale files only for the languages your application enables.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/bases)
