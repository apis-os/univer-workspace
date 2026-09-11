# @univerjs-pro/live-share

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/live-share?style=flat-square)](https://npmjs.com/package/@univerjs-pro/live-share)
[![license](https://img.shields.io/npm/l/@univerjs-pro/live-share?style=flat-square)](https://npmjs.com/package/@univerjs-pro/live-share)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/live-share?style=flat-square)](https://npmjs.com/package/@univerjs-pro/live-share)

`@univerjs-pro/live-share` is part of Univer Pro. Live share collaboration plugin for Univer Pro.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/live-share` | `UniverProLiveShare` | Yes | No | Yes |

## Installation

```sh
pnpm add @univerjs-pro/live-share
# or
npm install @univerjs-pro/live-share
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/live-share/lib/index.css';
import { UniverLiveSharePlugin } from '@univerjs-pro/live-share';

univer.registerPlugin(UniverLiveSharePlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/live-share)
