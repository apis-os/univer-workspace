# @univerjs-pro/embed

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/embed?style=flat-square)](https://npmjs.com/package/@univerjs-pro/embed)
[![license](https://img.shields.io/npm/l/@univerjs-pro/embed?style=flat-square)](https://npmjs.com/package/@univerjs-pro/embed)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/embed?style=flat-square)](https://npmjs.com/package/@univerjs-pro/embed)

`@univerjs-pro/embed` is part of Univer Pro. Cross-unit embed model and runtime foundation for Univer.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/embed` | `UniverEmbed` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/embed
# or
npm install @univerjs-pro/embed
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverEmbedPlugin } from '@univerjs-pro/embed';

univer.registerPlugin(UniverEmbedPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/embed)
