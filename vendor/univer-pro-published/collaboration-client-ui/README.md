# @univerjs-pro/collaboration-client-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/collaboration-client-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/collaboration-client-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/collaboration-client-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/collaboration-client-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/collaboration-client-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/collaboration-client-ui)

`@univerjs-pro/collaboration-client-ui` is part of Univer Pro. Collaboration UI integration for Univer Pro clients.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/collaboration-client-ui` | `UniverProCollaborationClientUi` | Yes | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/collaboration-client-ui
# or
npm install @univerjs-pro/collaboration-client-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/collaboration-client-ui/lib/index.css';
import EnUS from '@univerjs-pro/collaboration-client-ui/locale/en-US';
import { UniverCollaborationClientUIPlugin } from '@univerjs-pro/collaboration-client-ui';

univer.registerPlugin(UniverCollaborationClientUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.
- Use the facade entry when integrating through Univer Facade APIs.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/collaboration-client-ui)
