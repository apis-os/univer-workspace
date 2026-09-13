# @univerjs-pro/docs-chart

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/docs-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-chart)
[![license](https://img.shields.io/npm/l/@univerjs-pro/docs-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-chart)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/docs-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/docs-chart)

`@univerjs-pro/docs-chart` is part of Univer Pro. Chart model integration for Univer Docs.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/docs-chart` | `UniverProDocsChart` | No | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/docs-chart
# or
npm install @univerjs-pro/docs-chart
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverDocsChartPlugin } from '@univerjs-pro/docs-chart';

univer.registerPlugin(UniverDocsChartPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/docs-chart)
