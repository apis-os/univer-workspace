# @univer-cli/unit-pdf-printer

[English](./README.md) | 简体中文

通过当前 browser Render Page，把已经物化的 Sheet、Doc、Slide 或 Board Unit 打印为 PDF。暂不支持 Base 打印。

Capability 只返回 PDF bytes 与 metadata；Unit 物化、本地路径和文件写入由 host application 负责。打印布局与渲染
来自 browser Render Page 的原生 print operation，不使用另一套 PDF renderer。

```ts
const printer = createUnitPdfPrinter({ runtime });
const result = await printer.print({ unitType: "doc", unitData });
await writeFile("output.pdf", result.bytes);
```
