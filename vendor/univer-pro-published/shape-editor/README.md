# @univerjs-pro/shape-editor

`@univerjs-pro/shape-editor` provides Formula Shape lifecycle services and Facade APIs for Univer Pro.

Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.

## Installation

```sh
pnpm add @univerjs-pro/shape-editor
```

## Usage

```ts
import { UniverShapeEditorPlugin } from '@univerjs-pro/shape-editor';

univer.registerPlugin(UniverShapeEditorPlugin);
```

Use the `./facade` entry when integrating Formula Shape services through Univer Facade APIs.
