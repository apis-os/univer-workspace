# @univerjs-pro/engine-formula

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/engine-formula?style=flat-square)](https://npmjs.com/package/@univerjs-pro/engine-formula)
[![license](https://img.shields.io/npm/l/@univerjs-pro/engine-formula?style=flat-square)](https://npmjs.com/package/@univerjs-pro/engine-formula)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/engine-formula?style=flat-square)](https://npmjs.com/package/@univerjs-pro/engine-formula)

`@univerjs-pro/engine-formula` is part of Univer Pro. Performance-enhanced formula engine plugin for Univer Pro.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/engine-formula` | `UniverProEngineFormula` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/engine-formula
# or
npm install @univerjs-pro/engine-formula
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverProFormulaEnginePlugin } from '@univerjs-pro/engine-formula';

univer.registerPlugin(UniverProFormulaEnginePlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/engine-formula)
