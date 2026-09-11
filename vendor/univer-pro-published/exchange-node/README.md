# @univerjs-pro/exchange-node

Node.js SDK for converting between Office formats, Univer unit data, and complete Univer snapshots.

The package exposes two API families:

- `importFile` / `importBuffer` and `exportToFile` / `exportToBuffer` convert Univer in-memory unit data.
- `importFileToSnapshot` / `importBufferToSnapshot` and `exportSnapshotToFile` / `exportSnapshotToBuffer` convert complete snapshot aggregates without creating a Univer runtime.

## Install

Keep this package and its Univer SDK dependencies on the same SDK version:

```sh
pnpm add @univerjs-pro/exchange-node
```

## Import

```ts
import { UniverInstanceType } from '@univerjs/core';
import { ExchangeFormat, importBuffer } from '@univerjs-pro/exchange-node';

const workbook = await importBuffer(xlsxBuffer, {
    type: UniverInstanceType.UNIVER_SHEET,
    format: ExchangeFormat.XLSX,
    fileName: 'example.xlsx',
});
```

`importBuffer` requires `fileName`. File imports use the path basename by default and allow `fileName` to override format inference. An explicit `format` always takes precedence.

## Export

```ts
import { UniverInstanceType } from '@univerjs/core';
import {
    ExchangeFormat,
    FormulaCalculationMode,
    exportToBuffer,
} from '@univerjs-pro/exchange-node';

const xlsxBuffer = await exportToBuffer(workbook, {
    type: UniverInstanceType.UNIVER_SHEET,
    format: ExchangeFormat.XLSX,
    formulaCalculation: FormulaCalculationMode.WHEN_EMPTY,
});
```

Sheet export defaults to `FormulaCalculationMode.WHEN_EMPTY`: missing cached formula values are calculated, while existing cached values are preserved. Pass `FormulaCalculationMode.NO` to disable calculation.

## Complete snapshots

Snapshot APIs use `ISnapshotWithBlocks`:

```ts
interface ISnapshotWithBlocks {
    snapshot: ISnapshot;
    sheetBlocks: ISheetBlock[];
}
```

Sheet and Base snapshots must include every referenced sheet block. Doc and Slide snapshots normally use an empty `sheetBlocks` array.

Snapshot APIs materialize the complete aggregate in memory. They do not call a Snapshot Server or stream blocks to storage.

## Formats and platforms

The initial release supports Sheet and Base import from XLS, XLSX, CSV, and TSV; Doc import from DOC and DOCX; and Slide import from PPT and PPTX. Export supports XLSX, CSV, TSV, DOCX, and PPTX for their corresponding unit types.

Native packages are published for Linux x64 GNU, Linux arm64 GNU, Windows x64 MSVC, and macOS arm64.
