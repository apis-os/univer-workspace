# @univerjs-pro/edit-history

Product-agnostic version history services for Univer Pro.

## Semantic comparison

`createUnitComparisonEngine()` compares two fully materialized UnitData snapshots without constructing a Univer
instance. Register only the product adapters your application uses:

```ts
import { DocsUnitComparisonAdapter } from "@univerjs-pro/docs-history";
import {
  createUnitComparisonEngine,
  UnitComparisonDetailLevel,
  UnitComparisonFidelity,
} from "@univerjs-pro/edit-history";
import { UniverInstanceType } from "@univerjs/core";

const comparison = createUnitComparisonEngine([new DocsUnitComparisonAdapter()]);
const result = comparison.compare({
  comparisonId: "review-42",
  unitId: "doc-1",
  type: UniverInstanceType.UNIVER_DOC,
  fidelity: UnitComparisonFidelity.SNAPSHOT,
  leftData: {
    body: { dataStream: "Review\r\n", paragraphs: [{ paragraphId: "p1", startIndex: 6 }] },
  },
  rightData: {
    body: { dataStream: "Publish\r\n", paragraphs: [{ paragraphId: "p1", startIndex: 7 }] },
  },
});

console.log(result.summary, result.items);
```

Call `comparison.prepare()` once and `comparison.query()` repeatedly when a UI needs filtering or pagination. The
prepared value retains comparison metadata and semantic results, not the two complete input snapshots.

For products with independently navigable views, `result.scopes` contains the changed worksheets, slides, Base
tables, or Board pages in stable visual order. Every scoped item carries the same reference, so an agent or UI can
build tabs and request one view without interpreting product snapshots:

```ts
const prepared = comparison.prepare(input);
const overview = comparison.query(prepared, { detail: UnitComparisonDetailLevel.SUMMARY });
const selectedScope = overview.scopes[0];
const selectedView = selectedScope === undefined
  ? overview
  : comparison.query(prepared, { scope: selectedScope, limit: 1000 });

console.log(selectedView.items);
```

In a Univer application, import `@univerjs-pro/edit-history/facade`, register the relevant product History plugin,
and call `univerAPI.compareUnitData()` or `univerAPI.prepareUnitComparison()`.
