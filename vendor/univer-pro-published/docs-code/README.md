# @univerjs-pro/docs-code

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-code?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-code)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-code?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-code)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-code?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-code)

`@univerjs-pro/docs-code` is part of Univer Pro. Code block model integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-code` | `UniverProDocsCode` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/docs-code
# or
npm install @univerjs-pro/docs-code
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverDocsCodePlugin } from '@univerjs-pro/docs-code';

univer.registerPlugin(UniverDocsCodePlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-code)
