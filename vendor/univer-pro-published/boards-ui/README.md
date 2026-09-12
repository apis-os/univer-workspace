# @univerjs-pro/boards-ui

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/boards-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-ui)
[![license](https://img.shields.io/npm/l/@univerjs-pro/boards-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-ui)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/boards-ui?style=flat-square)](https://npmjs.com/package/@univerjs-pro/boards-ui)

`@univerjs-pro/boards-ui` is part of Univer Pro. Board UI integration for Univer.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/boards-ui` | `UniverProBoardsUi` | Yes | Yes | No |

## Installation

```sh
pnpm add @univerjs-pro/boards-ui
# or
npm install @univerjs-pro/boards-ui
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import '@univerjs-pro/boards-ui/lib/index.css';
import EnUS from '@univerjs-pro/boards-ui/locale/en-US';
import { UniverBoardsUIPlugin } from '@univerjs-pro/boards-ui';

univer.registerPlugin(UniverBoardsUIPlugin);

// Merge EnUS into your Univer locale map when this package contributes UI text.
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- Import the package stylesheet once in the application entry before rendering Univer UI.
- Import locale files only for the languages your application enables.

### Screenshot readiness

Board screenshots wait for render resources and measured connector labels, not just successful data insertion.
Font loading must complete and the Board renderer must refresh its font metrics before capture can stabilize.
If another font load starts during capture, the stable-frame count restarts; identical fallback pixels do not
prove readiness. Missing or unresolved resources use the existing bounded resource timeout. A failed capture
restores any selection and viewport state that it temporarily changed.

Capture bounds are caller-supplied. Resolve rendered bounds after layout is ready when AutoSize or FixedWidth
labels may extend beyond their original geometry; headless dimensions are not a measured crop rectangle.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/boards-ui)
