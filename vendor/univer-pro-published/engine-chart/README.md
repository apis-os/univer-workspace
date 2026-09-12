# @univerjs-pro/engine-chart

[![npm version](https://img.shields.io/npm/v/@univerjs-pro/engine-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/engine-chart)
[![license](https://img.shields.io/npm/l/@univerjs-pro/engine-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/engine-chart)
[![downloads](https://img.shields.io/npm/dm/@univerjs-pro/engine-chart?style=flat-square)](https://npmjs.com/package/@univerjs-pro/engine-chart)

`@univerjs-pro/engine-chart` is part of Univer Pro. Chart data model and rendering utilities for Univer Pro.

## Package Overview

| Package | UMD global | CSS | Locales | Facade entry |
| --- | --- | :---: | :---: | :---: |
| `@univerjs-pro/engine-chart` | `UniverProEngineChart` | No | Yes | Yes |

## Installation

```sh
pnpm add @univerjs-pro/engine-chart
# or
npm install @univerjs-pro/engine-chart
```

Keep all `@univerjs/*` and `@univerjs-pro/*` packages on the same version.

## Usage

```ts
import { UniverChartPlugin } from '@univerjs-pro/engine-chart';

univer.registerPlugin(UniverChartPlugin);
```

## Integration Notes

- Keep this package on the same version as the other `@univerjs/*` and `@univerjs-pro/*` packages in your application.
- `UniverChartPlugin` provides the shared chart rendering runtime for Sheets, Docs, Slides, and Boards.
- Configure shared word-cloud rendering defaults when registering the plugin. Partial options are merged with the static chart defaults.

```ts
univer.registerPlugin(UniverChartPlugin, {
    wordCloudRenderConfig: {
        padding: 3,
        zoomToFit: {
            shrink: true,
        },
    },
});
```

## Chart Builder Responsibilities

The `chart-builder` module is the shared semantic chart-authoring layer used by both Facade APIs and chart editor UI. It is not a Facade-only implementation detail.

- `ChartBuilder` owns the immutable baseline, pending semantic configuration, validation, description generation, and data resolution for a chart.
- `IChartBuilderAdapter` is the host seam for reading the canonical chart state, persisting changes, resolving hosted data, and accessing host rendering capabilities.
- Sheets, Docs, Slides, and Boards extend this layer with host-owned description fields, creation-spec conversion, and command-backed persistence.
- Facade builders provide the public fluent API over this layer, while chart editors may reuse the same host adapters to commit semantic configuration changes.

## Resources

- [Documentation](https://docs.univer.ai/guides/pro)
- [NPM package](https://npmjs.com/package/@univerjs-pro/engine-chart)
