# @univer-cli/unit-pdf-printer

English | [简体中文](./README.zh-CN.md)

Prints a materialized Sheet, Doc, Slide, or Board Unit to PDF through the current browser Render Page. Base printing is not supported.

The capability returns PDF bytes and metadata; the host application owns Unit materialization, local paths, and file writes. Print layout and rendering come from the browser Render Page's native print operation rather than a separate PDF renderer.

```ts
const printer = createUnitPdfPrinter({ runtime });
const result = await printer.print({ unitType: "doc", unitData });
await writeFile("output.pdf", result.bytes);
```
