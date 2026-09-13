import { UniverEmbedPlugin } from "@univerjs-pro/embed";
import { Univer, UniverInstanceType } from "@univerjs/core";
import { FUniver } from "@univerjs/core/facade";
import "@univerjs/docs/facade";
import "@univerjs/docs-drawing/facade";
import "@univerjs-pro/boards/facade";
import "@univerjs-pro/boards-chart/facade";
import "@univerjs-pro/boards-mind/facade";
import "@univerjs-pro/boards-table/facade";
import "@univerjs-pro/docs-latex/facade";
import "@univerjs-pro/ink/facade";
import "@univerjs-pro/docs-callout/facade";
import "@univerjs-pro/docs-chart/facade";
import "@univerjs-pro/docs-code/facade";
import "@univerjs-pro/docs-column/facade";
import "@univerjs-pro/docs-list/facade";
import "@univerjs-pro/docs-quote/facade";
import "@univerjs-pro/docs-shape/facade";
import "@univerjs-pro/docs-table/facade";
import "@univerjs-pro/embed/facade";
import "@univerjs-pro/engine-chart/facade";
import "@univerjs-pro/engine-formula/facade";
import "@univerjs-pro/engine-shape/facade";
import "@univerjs/engine-formula/facade";
import "@univerjs/network/facade";
import "@univerjs/sheets/facade";
import "@univerjs/sheets-conditional-formatting/facade";
import "@univerjs/sheets-data-validation/facade";
import "@univerjs/sheets-drawing/facade";
import "@univerjs/sheets-filter/facade";
import "@univerjs/sheets-formula/facade";
import "@univerjs/sheets-hyper-link/facade";
import "@univerjs/sheets-note/facade";
import "@univerjs/sheets-numfmt/facade";
import "@univerjs/sheets-sort/facade";
import "@univerjs/sheets-table/facade";
import "@univerjs/sheets-thread-comment/facade";
import "@univerjs-pro/bases/facade";
import "@univerjs-pro/range-preprocess/facade";
import "@univerjs-pro/shape-editor/facade";
import "@univerjs-pro/slides/facade";
import "@univerjs-pro/sheets-chart/facade";
import "@univerjs-pro/sheets-outline/facade";
import "@univerjs-pro/sheets-pivot/facade";
import "@univerjs-pro/sheets-shape/facade";
import "@univerjs-pro/sheets-sparkline/facade";
import "@univerjs-pro/slides-chart/facade";
import "@univerjs-pro/slides-table/facade";
//#region src/index.d.ts
interface HeadlessUniverFactoryContext {
  readonly unitId: string;
  readonly unitType: UniverInstanceType;
}
interface StandardHeadlessUniverFactoryOptions {
  readonly license: string;
  readonly embedPluginConfig?: ConstructorParameters<typeof UniverEmbedPlugin>[0];
}
type HeadlessUniverFactory = (context: HeadlessUniverFactoryContext) => Promise<Univer>;
/** Create a Facade API from the same Univer dependency graph as the standard headless runtime. */
declare function createStandardHeadlessUniverFacade(univer: Univer): FUniver;
declare function createStandardHeadlessUniverFactory(options: StandardHeadlessUniverFactoryOptions): HeadlessUniverFactory;
//#endregion
export { HeadlessUniverFactory, HeadlessUniverFactoryContext, StandardHeadlessUniverFactoryOptions, createStandardHeadlessUniverFacade, createStandardHeadlessUniverFactory };