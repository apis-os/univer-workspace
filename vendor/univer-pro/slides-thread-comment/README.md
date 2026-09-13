# @univerjs-pro/slides-thread-comment

`@univerjs-pro/slides-thread-comment` adds page- and element-anchored thread comments and facade methods to Univer Slides.

## Installation

```sh
pnpm add @univerjs-pro/slides-thread-comment
```

Register `UniverSlidesThreadCommentPlugin` after the Univer Slides and thread comment plugins.

```ts
import '@univerjs-pro/slides-thread-comment/facade';

const slide = univerAPI.getActivePresentation()?.getSlideByIndex(0);
await slide?.createPositionCommentAsync({ x: 0.5, y: 0.25 }, 'Review this area.');
const chart = slide?.getCharts()[0];
if (chart) await slide?.createElementCommentAsync(chart.getElementId(), 'Verify the chart source.');
```
