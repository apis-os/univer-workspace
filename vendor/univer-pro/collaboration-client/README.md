# @univerjs-pro/collaboration-client

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/collaboration-client?style=flat-square)](https://npmjs.com/package/@univerjs-pro/collaboration-client)
[![license](https://img.shields.io/npm/l/@univerjs-pro/collaboration-client?style=flat-square)](https://npmjs.com/package/@univerjs-pro/collaboration-client)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/collaboration-client?style=flat-square)](https://npmjs.com/package/@univerjs-pro/collaboration-client)

`@univerjs-pro/collaboration-client` is part of Univer Pro. Client-side collaboration plugin for Univer Pro.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/collaboration-client` | `UniverProCollaborationClient` | No | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/collaboration-client
# or
npm install @univerjs-pro/collaboration-client
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import EnUS from '@univerjs-pro/collaboration-client/locale/en-US';
import { UniverCollaborationClientPlugin } from '@univerjs-pro/collaboration-client';

univer.registerPlugin(UniverCollaborationClientPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import locale files only for the languages your application enables.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/collaboration-client)
