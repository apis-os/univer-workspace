import { Buffer } from "node:buffer";
import { FormulaDataModel, IAllRuntimeData, ICalculateFormulaService, IExecutionInProgressParams, IFeatureCalculationManagerService, IFeatureDirtyRangeType, IFormulaCurrentConfigService, IFormulaDatasetConfig, IFormulaDependencyGenerator, IFormulaDependencyTreeJson, IFormulaExecuteResultMap, IFormulaRuntimeService, IFormulaStringMap, IOtherFormulaManagerService, IRuntimeUnitDataType, ISetArrayFormulaDataMutationParams, ISetFormulaCalculationResultMutation, ISuperTableService, IUnitRowData, IUniverEngineFormulaConfig } from "@univerjs/engine-formula";
import { Dependency, Disposable, ICommandService, IConfigService, IUnitRange as IUnitRange$1, IWorkbookData, Injector, Nullable } from "@univerjs/core";
import { ExternalReferenceModel, IFormulaReferenceDataService, UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { Subject } from "rxjs";
import { ISheetBlock, ISnapshot } from "@univerjs/protocol";
//#region src/binding.d.ts
interface INativeBinding {
  formulaEngineExecute(inputJson: string): string;
  formulaLexerTreeBuild(formula: string, transformSuffix?: boolean): string;
  formulaSequenceNodesBuild(formula: string): string;
  formulaCheckIfAddBracket(formula: string): number;
  rustNumfmtFormat(inputJson: string): string;
  rustNumfmtFormatBatch(inputJson: string): string;
  rustNumfmtParse(inputJson: string): string;
  rustNumfmtParseBatch(inputJson: string): string;
  rustNumfmtParseMatrixBatch(inputJson: string): string;
  rustNumfmtParseValue(inputJson: string): string;
  rustNumfmtAnalyzeFormat(inputJson: string): string;
  rustNumfmtAnalyzeBatch(inputJson: string): string;
  rustNumfmtFormatInfo(inputJson: string): string;
  rustNumfmtFormatDateInfo(inputJson: string): string;
  rustNumfmtFormatColor(inputJson: string): string;
  rustNumfmtDateToSerial(inputJson: string): string;
  rustNumfmtDateFromSerial(inputJson: string): string;
  rustNumfmtValidate(inputJson: string): string;
  rustEngineLoadSnapshot(snapshotJson: string): string;
  rustEngineLoadSnapshotBinary(snapshotBytes: Buffer): string;
  rustEngineLoadSingleSheetColumnarSnapshot(unitId: string, workbookName: string | undefined | null, sheetId: string, sheetName: string | undefined | null, rowCount: number, columnCount: number, rows: Buffer, cols: Buffer, valueTags: Buffer, numbers: Buffer, valueStringOffsets: Buffer, valueStringBytes: Buffer, formulaOffsets: Buffer, formulaBytes: Buffer): string;
  rustEngineApplyMutation(mutationJson: string): string;
  rustEngineApplyMutationBinary(mutationBytes: Buffer): string;
  rustEngineApplyNumberCellsColumnar(unitId: string, sheetId: string, rows: Buffer, cols: Buffer, values: Buffer): string;
  rustEngineDisposeWorkbook(unitId: string): string;
  rustEngineDisposeAllWorkbooks(): string;
  rustEngineGetModelStats(): string;
  rustEngineGetCell(unitId: string, sheetId: string, row: number, col: number): string;
  rustEngineGetSheetState(unitId: string, sheetId: string): string;
  rustEngineGetFormulaData(unitId?: string): string;
  rustEngineBuildDependencyGraph(unitId?: string): string;
  rustEngineGetDirtyDependencies(dirtyRangesJson: string, unitId?: string): string;
  rustEngineSyncFormulaDependencies(inputJson: string): string;
  rustEngineInspectFormulaDependencyGraph(): string;
  rustEngineMarkFormulaDirty(inputJson: string): string;
  rustEngineClearFormulaDependencies(inputJson: string): string;
  rustEngineClearFormulaDirty(): string;
  rustEngineExecuteDirtyFormulas(maxIteration?: number, includeCalculatedNodes?: boolean, includeRuntimeData?: boolean, includeResultBatches?: boolean): string;
  rustEngineGetFormulaNumberResultsColumnar(unitId: string, sheetId: string, startColumn?: number, endColumn?: number): Buffer;
  rustMaterializeWorkbookSnapshot(workbookJson: Buffer, unitId: string, rev: number, dirtyInputJson?: string): Promise<INativeMaterializedWorkbook>;
}
interface INativeMaterializedBlock {
  id: string;
  startRow: number;
  endRow: number;
  data: Buffer;
}
interface INativeMaterializedSheetBlocks {
  sheetId: string;
  blocks: INativeMaterializedBlock[];
}
interface INativeMaterializedWorkbook {
  snapshotDraftJson: Buffer;
  sheetBlocks: INativeMaterializedSheetBlocks[];
  warningsJson: Buffer;
  calculationStatsJson: Buffer;
}
type NativeBindingSource = '../native/index.js' | '../../../crates/univer-formula/index.js' | '@univerjs-pro/engine-formula-rust-binding';
declare function getNativeBindingSource(): NativeBindingSource | null;
declare function loadNativeBinding(): Promise<INativeBinding>;
declare function executeOnRust(inputJson: string): string;
declare function buildLexerTreeOnRust(formula: string, transformSuffix?: boolean): string;
declare function buildSequenceNodesOnRust(formula: string): string;
declare function checkIfAddBracketOnRust(formula: string): number;
declare function loadSnapshotOnRust(snapshotJson: string): string;
declare function applyMutationOnRust(mutationJson: string): string;
declare function disposeWorkbookOnRust(unitId: string): string;
declare function disposeAllWorkbooksOnRust(): string;
declare function getRustModelStats(): string;
declare function getRustCellOnRust(unitId: string, sheetId: string, row: number, col: number): string;
declare function getRustSheetStateOnRust(unitId: string, sheetId: string): string;
declare function getRustFormulaDataOnRust(unitId?: string): string;
declare function buildRustDependencyGraphOnRust(unitId?: string): string;
declare function getRustDirtyDependenciesOnRust(dirtyRangesJson: string, unitId?: string): string;
declare function syncRustFormulaDependenciesOnRust(inputJson: string): string;
declare function markRustFormulaDirtyOnRust(inputJson: string): string;
declare function clearRustFormulaDependenciesOnRust(inputJson: string): string;
declare function clearRustFormulaDirtyOnRust(): string;
declare function materializeWorkbookSnapshotOnRust(workbookJson: Buffer, unitId: string, rev: number, dirtyInputJson?: string): Promise<INativeMaterializedWorkbook>;
//#endregion
//#region src/types.d.ts
/**
 * Serialized types exchanged between TS and Rust formula engine.
 */
interface IFormulaEngineConfig {
  maxIteration: number;
  intervalCount: number;
}
interface IFormulaExecutionInput {
  config: IFormulaEngineConfig;
  formulaData: Record<string, Record<string, Record<number, Record<number, string | IRustFormulaDataItem>>>>;
  unitData: Record<string, Record<string, ISheetData>>;
  dirtyRanges: IUnitRange[];
  definedNames: Record<string, IDefinedName>;
}
interface ISheetData {
  cellData: Record<number, Record<number, ICellValue>>;
  rowCount: number;
  columnCount: number;
}
interface ICellValue {
  v?: unknown;
  t?: number;
  p?: unknown;
  f?: string;
  si?: string;
  ref?: string;
  dynamicArrayRef?: string;
  xf?: string;
  s?: unknown;
  displayPrecision?: number;
}
interface IUnitRange {
  unitId: string;
  sheetId: string;
  range: IRange;
}
interface IRange {
  startRow: number;
  startColumn: number;
  endRow: number;
  endColumn: number;
}
interface IDefinedName {
  name: string;
  formula?: string;
  range?: IRange;
}
interface IFormulaExecutionOutput {
  runtimeData: Record<string, Record<string, Record<number, Record<number, unknown>>>>;
  arrayFormulaRange: Record<string, Record<string, Record<number, Record<number, IRange>>>>;
  cycleDependencies: ICycleDependencyInfo[];
  errors: IExecutionError[];
}
interface ICycleDependencyInfo {
  unitId: string;
  sheetId: string;
  row: number;
  column: number;
}
interface IExecutionError {
  unitId: string;
  sheetId: string;
  row: number;
  column: number;
  message: string;
}
interface IRustEngineSnapshot {
  workbooks: IRustWorkbookSnapshot[];
}
interface IRustWorkbookSnapshot {
  unitId: string;
  name?: string;
  sheets: IRustSheetSnapshot[];
  calculation?: IRustWorkbookCalculationSnapshot;
  resources?: Record<string, IRustResourceSnapshot>;
  definedNames?: Record<string, IRustDefinedNameSnapshot>;
  externalLinks?: IRustExternalLinkSnapshot[];
  tables?: Record<string, IRustTableSnapshot>;
}
interface IRustResourceSnapshot {
  name: string;
  data: unknown;
}
interface IRustWorkbookCalculationSnapshot {
  fullPrecision?: boolean;
}
interface IRustExternalLinkSnapshot {
  aliases?: string[];
  definedNames?: Record<string, IRustDefinedNameSnapshot>;
  sheets: IRustExternalSheetSnapshot[];
  tables?: Record<string, IRustTableSnapshot>;
  target?: string;
  unitId?: string;
}
interface IRustExternalSheetSnapshot {
  name: string;
  sheetId?: string;
  rowCount: number;
  columnCount: number;
  cellData: Record<number, Record<number, ICellValue>>;
  coverage?: IRange[];
}
interface IRustDefinedNameSnapshot {
  id?: string;
  name: string;
  formulaOrRefString?: string;
  localSheetId?: string;
}
interface IRustTableSnapshot {
  sheetId: string;
  range: {
    startRow: number;
    endRow: number;
    startColumn: number;
    endColumn: number;
  };
  columns: Array<{
    displayName: string;
  }>;
  showHeader?: boolean;
  showFooter?: boolean;
}
interface IRustSheetSnapshot {
  sheetId: string;
  name?: string;
  rowCount: number;
  columnCount: number;
  transitionEvaluation?: boolean;
  cellData: Record<number, Record<number, ICellValue>>;
  rowData?: Record<number, IRustVisibilityData>;
  columnData?: Record<number, IRustVisibilityData>;
}
interface IRustVisibilityData {
  hd?: unknown;
}
interface IRustEngineMutation {
  id: string;
  params?: unknown;
  dirtyRanges?: unknown[];
}
interface IRustEngineModelStats {
  workbookCount: number;
  sheetCount: number;
  cellCount: number;
  formulaCount: number;
  definedNameCount: number;
  tableCount: number;
  typedValueCount: number;
  jsonValueCount: number;
  valueTileCount: number;
  valueTileValueCount: number;
  estimatedMemoryBytes: number;
  revision: number;
  applied: boolean;
}
interface IRustSheetState {
  rowCount: number;
  columnCount: number;
  hiddenRows: number[];
  hiddenCols: number[];
  revision: number;
}
interface IRustFormulaStoreState {
  formulaData: Record<string, Record<string, Record<number, Record<number, IRustFormulaDataItem>>>>;
  arrayFormulaRange: Record<string, Record<string, Record<number, Record<number, IRange>>>>;
  arrayFormulaCellData: Record<string, Record<string, Record<number, Record<number, ICellValue>>>>;
}
interface IRustFormulaDataItem {
  f: string;
  si?: string;
  ref?: string;
  x?: number;
  y?: number;
}
interface IRustDependencyCell {
  unitId: string;
  sheetId: string;
  row: number;
  column: number;
}
interface IRustDependencyRange {
  unitId: string;
  sheetId: string;
  startRow: number;
  endRow: number;
  startColumn: number;
  endColumn: number;
}
interface IRustDependencyNode {
  id: number;
  unitId: string;
  sheetId: string;
  row: number;
  column: number;
  formula: string;
  formulaId?: string;
  offsetX: number;
  offsetY: number;
  precedentRanges: IRustDependencyRange[];
  parents: number[];
  children: number[];
  dependents: IRustDependencyCell[];
}
interface IRustDependencyGraph {
  stats: {
    formulaCount: number;
    precedentRangeCount: number;
    formulaEdgeCount: number;
    cycleCount: number;
    errorCount: number;
  };
  nodes: IRustDependencyNode[];
  edges: Array<{
    from: IRustDependencyCell;
    to: IRustDependencyCell;
  }>;
  calculationOrder: IRustDependencyCell[];
  calculationForest: IRustDependencyCalculationTree[];
  cycles: IRustDependencyCell[][];
  errors: Array<{
    unitId: string;
    sheetId: string;
    row: number;
    column: number;
    formula: string;
    message: string;
  }>;
}
interface IRustDependencyCalculationTree {
  hasCycle: boolean;
  plan: IRustDependencyCalculationPlanItem[];
  levels: IRustDependencyCell[][];
}
type IRustDependencyCalculationPlanItem = {
  type: 'nodes';
  cells: IRustDependencyCell[];
} | {
  type: 'cycle';
  cells: IRustDependencyCell[];
};
interface IRustDependencyDirtyResult {
  dirtyRanges: IRustDependencyRange[];
  direct: IRustDependencyCell[];
  affected: IRustDependencyCell[];
  calculationForest: IRustDependencyCalculationTree[];
  cycles: IRustDependencyCell[][];
  errors: IRustDependencyGraph['errors'];
}
interface IRustFormulaDependencySyncInput {
  rebuildSheetFormulas?: boolean;
  featureCalculations?: IRustExternalFeatureCalculation[];
  otherFormulas?: IRustExternalOtherFormula[];
  externalReferences?: Record<string, {
    schemaVersion: number;
    references: Record<string, {
      qualifier: string;
      sourceUnitId: string;
      sourceUnitType: number;
    }>;
  }>;
}
interface IRustExternalFeatureCalculation {
  unitId: string;
  sheetId: string;
  featureId: string;
  dependencyRanges: IRustDependencyRange[];
  dirtyRanges?: IRustDependencyRange[];
  runtimeCellData?: Record<string, Record<string, Record<number, Record<number, ICellValue | null>>>>;
}
interface IRustExternalOtherFormula {
  unitId: string;
  sheetId: string;
  formulaId: string;
  formula: string;
  ranges: IRange[];
}
interface IRustFormulaDependencyDirtyInput {
  forceCalculation?: boolean;
  includeDirtyNodes?: boolean;
  includeCalculationOrder?: boolean;
  dirtyFormulaCells?: IRustDependencyRange[];
  dirtyRanges?: IRustDependencyRange[];
  dirtyUnitFeatureMap?: Record<string, Record<string, Record<string, boolean>>>;
  dirtyUnitOtherFormulaMap?: Record<string, Record<string, Record<string, boolean>>>;
  dirtyNameMap?: Record<string, Record<string, string>>;
  dirtyDefinedNameMap?: Record<string, Record<string, string>>;
}
interface IRustFormulaDependencyClearInput {
  unitId: string;
  sheetId?: string;
  clearSheetFormulas?: boolean;
  clearFeatureFormulas?: boolean;
  clearOtherFormulas?: boolean;
  formulaCells?: Array<{
    row: number;
    col: number;
  }>;
  featureIds?: string[];
  otherFormulaIds?: string[];
}
interface IRustFormulaDependencySyncOutput {
  sheetFormulaCount: number;
  featureFormulaCount: number;
  otherFormulaCount: number;
  errorCount: number;
  errors: IRustDependencyGraph['errors'];
  timings?: {
    dependencyInputMs: number;
    featureSyncMs: number;
    analyzeMs: number;
    cacheInsertMs: number;
    graphSetMs: number;
    dynamicPrewarmMs: number;
    dynamicApplyMs: number;
    otherFormulaMs: number;
    totalMs: number;
  };
}
interface IRustFormulaDependencyNodeOutput {
  nodeType: 'cellFormula' | 'featureCalculation' | 'otherFormula';
  label: string;
  unitId?: string;
  sheetId?: string;
  row?: number;
  column?: number;
  formulaId?: string;
  featureId?: string;
  refOffsetX?: number;
  refOffsetY?: number;
}
interface IRustFormulaDependencyInspectGraph {
  nodes: IRustFormulaDependencyInspectNode[];
}
interface IRustFormulaDependencyInspectNode {
  index: number;
  node: IRustFormulaDependencyNodeOutput;
  label: string;
  precedents: string[];
  dependents: string[];
}
interface IRustFormulaDependencyDirtyOutput {
  dirtyNodes: IRustFormulaDependencyNodeOutput[];
  calculationOrder: {
    hasCycle: boolean;
    calculationForest: Array<{
      hasCycle: boolean;
      plan: Array<{
        type: string;
        nodeIndex?: number;
        nodeIndices?: number[];
      }>;
      levels: number[][];
    }>;
  };
}
interface IRustFormulaDependencyExecutionOutput {
  runtimeData: Record<string, Record<string, Record<number, Record<number, unknown>>>>;
  otherFormulaData?: Record<string, Record<string, Record<string, Record<number, Record<number, unknown>>>>>;
  resultBatches: Array<{
    unitId: string;
    sheetId: string;
    rows: number[];
    cols: number[];
    values: unknown[];
  }>;
  calculatedNodes: IRustFormulaDependencyNodeOutput[];
  calculatedNodeCount: number;
  errors: Array<{
    unitId: string;
    sheetId: string;
    row: number;
    column: number;
    message: string;
  }>;
  needsData?: Array<{
    unitId: string;
    sheetId: string;
    range: IRange;
  }>;
  tableNeedsData?: Array<{
    unitId: string;
    tableName: string;
    ownerUnitId: string;
    ownerSheetId: string;
    row: number;
    column: number;
    formulaId?: string;
  }>;
  hasCycle: boolean;
  cycleIterationCount: number;
  parallelBatchCount: number;
  parallelNodeCount: number;
  functionProfile?: Array<{
    name: string;
    callCount: number;
    totalMs: number;
    avgUs: number;
  }>;
  timings: {
    initialDynamicRefreshMs: number;
    initialDynamicRefreshRequestCount: number;
    buildValueDataMs: number;
    planningMs: number;
    taskBuildMs: number;
    evaluateMs: number;
    applyMs: number;
    applyResultMaterializeMs: number;
    applyValueDataMs: number;
    applyWorkbookMs: number;
    applyRuntimeDynamicPatchMs: number;
    clearDirtyMs: number;
    runtimeDynamicRefreshMs: number;
    runtimeDynamicRefreshRequestCount: number;
    finalOutputMs: number;
  };
}
//#endregion
//#region src/services/rust-formula-projection.service.d.ts
declare const RUST_UPSERT_REFERENCE_DATA_MUTATION_ID = "formula.mutation.upsert-reference-data";
declare const RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID = "formula.mutation.upsert-projection-workbook";
declare const RUST_FORMULA_RELEVANT_MUTATIONS: Set<string>;
declare const RUST_INCREMENTAL_DEPENDENCY_MUTATIONS: Set<string>;
interface IRustProjectionWorkbookInput {
  snapshot: IWorkbookData;
  unitId?: string;
  definedNames?: Record<string, IRustDefinedNameSnapshot>;
}
interface IFormulaCalculationError {
  code: string;
  message: string;
  unitId?: string;
  sheetId?: string;
  row?: number;
  column?: number;
}
interface IFormulaProjectionDesyncSignal {
  reason: string;
  message: string;
  mutationId?: string;
}
interface IFormulaCalculationPatch {
  unitData: ISetFormulaCalculationResultMutation['unitData'];
  unitOtherData: ISetFormulaCalculationResultMutation['unitOtherData'];
  arrayFormulaRange?: ISetArrayFormulaDataMutationParams['arrayFormulaRange'];
  arrayFormulaCellData?: ISetArrayFormulaDataMutationParams['arrayFormulaCellData'];
  errors?: IFormulaCalculationError[];
  desync?: IFormulaProjectionDesyncSignal;
}
interface IRustFormulaProjectionLoadResult {
  stats?: IRustEngineModelStats;
  errors?: IFormulaCalculationError[];
  desync?: IFormulaProjectionDesyncSignal;
}
interface IRustFormulaProjectionMutationResult {
  stats?: IRustEngineModelStats;
  dependencyInvalidated: boolean;
  errors?: IFormulaCalculationError[];
  desync?: IFormulaProjectionDesyncSignal;
}
declare function isRustFormulaRelevantMutation(id: string): boolean;
declare function isRustIncrementalDependencyMutation(id: string): boolean;
declare function serializeRuntimeWorkbookSnapshots(workbooks: readonly IRustProjectionWorkbookInput[]): IRustEngineSnapshot;
declare function serializeRuntimeWorkbookSnapshot(input: IRustProjectionWorkbookInput): IRustWorkbookSnapshot;
declare function createProjectionWorkbookUpsertMutation(input: IRustProjectionWorkbookInput): IRustEngineMutation;
declare function rustExecutionOutputToFormulaCalculationPatch(output: IRustFormulaDependencyExecutionOutput): IFormulaCalculationPatch;
declare function createFormulaProjectionDesyncSignal(reason: string, error: unknown, mutationId?: string): IFormulaProjectionDesyncSignal;
declare class RustFormulaProjectionService {
  private _nativeLoaded;
  load(workbooks: readonly IRustProjectionWorkbookInput[]): Promise<IRustFormulaProjectionLoadResult>;
  applyMutation(mutation: IRustEngineMutation): Promise<IRustFormulaProjectionMutationResult>;
  syncFormulaDependencies(input: IRustFormulaDependencySyncInput): Promise<unknown>;
  markDirty(input: {
    forceCalculation?: boolean;
    includeDirtyNodes?: boolean;
    includeCalculationOrder?: boolean;
    dirtyRanges?: IRustDependencyRange[];
    dirtyUnitFeatureMap?: Record<string, Record<string, Record<string, boolean>>>;
    dirtyUnitOtherFormulaMap?: Record<string, Record<string, Record<string, boolean>>>;
    dirtyNameMap?: Record<string, Record<string, string>>;
    dirtyDefinedNameMap?: Record<string, Record<string, string>>;
  }): Promise<unknown>;
  calculateDirty(maxIteration?: number): Promise<IFormulaCalculationPatch>;
  reset(): Promise<IRustFormulaProjectionLoadResult>;
  disposeWorkbook(unitId: string): Promise<IRustFormulaProjectionLoadResult>;
  private _ensureNativeLoaded;
}
//#endregion
//#region src/controllers/rust-engine-sync.controller.d.ts
/**
 * Keeps Rust's in-memory formula workbook projection aligned with Univer.
 *
 * Rust projection loading is host-driven: the main/runtime adapter provides the
 * initial workbook snapshot and subsequent formula-relevant mutations. This
 * controller intentionally does not create or read worker-side Workbook units.
 */
declare class RustEngineSyncController extends Disposable {
  private readonly _commandService;
  private _nativeReady;
  private _snapshotLoaded;
  private _projectionLoadPromise;
  private _projectionDeltaBarrier;
  private readonly _pendingMutations;
  private readonly _projectionManagedTableUnits;
  constructor(_commandService: ICommandService);
  private _initialize;
  loadProjection(workbooks: readonly IRustProjectionWorkbookInput[]): Promise<void>;
  waitForProjectionLoad(): Promise<void>;
  setProjectionDeltaBarrier(barrier: Promise<void>): void;
  private _loadProjection;
  applyProjectionMutation(mutation: IRustEngineMutation): void;
  upsertProjectionWorkbook(workbook: IRustProjectionWorkbookInput): void;
  setProjectionManagedTableUnit(unitId: string): void;
  unsetProjectionManagedTableUnit(unitId: string): void;
  upsertReferenceData(config: IFormulaDatasetConfig, needs: Array<NonNullable<IRustFormulaDependencyExecutionOutput['needsData']>[number] & {
    dataUnitId?: string;
    tableName?: string;
  }>, tableService?: {
    getTable(unitId: string, tableName: string): unknown;
  }): number;
  disposeProjectionWorkbook(unitId: string): void;
  dispose(): void;
  private _loadSerializedSnapshot;
  private _queueOrSyncMutation;
  private _flushPendingMutations;
  private _syncMutation;
  private _markProjectionDesynced;
  private _shouldSyncMutation;
  private _serializeMutation;
}
//#endregion
//#region src/numfmt.d.ts
type NumberFormatDateSystem = '1900' | '1904';
interface INumberFormatOptions {
  locale?: string;
  dateSystem?: NumberFormatDateSystem;
  throws?: boolean;
  invalid?: string;
  overflow?: string;
  dateErrorNumber?: boolean;
  dateSpanLarge?: boolean;
  leap1900?: boolean;
  nbsp?: boolean;
  skipChar?: string;
  fillChar?: string;
  bigintErrorNumber?: boolean;
  ignoreTimezone?: boolean;
  dateNf?: string;
}
interface INumberFormatDiagnostic {
  code: string;
  message?: string;
  [key: string]: unknown;
}
interface IFormatNumberBatchInput {
  formats: Array<{
    id: number;
    formatCode?: string;
    numFmtId?: number;
    options?: INumberFormatOptions;
  }>;
  values: Array<{
    value: unknown;
    valueType?: 'number' | 'text' | 'boolean' | 'date' | 'datetime' | 'bigint' | string;
    formatId: number;
  }>;
}
interface IFormatNumberBatchOutput {
  values: Array<{
    text: string;
    color?: string;
    style?: unknown;
    diagnostics: INumberFormatDiagnostic[];
  }>;
  timingsMs?: Record<string, number>;
}
interface IParseNumberFormatBatchInput {
  options: Array<INumberFormatOptions & {
    id: number;
  }>;
  inputs: Array<{
    input: string;
    optionsId: number;
  }>;
}
interface IParsedNumberFormatValue {
  number?: number;
  text?: string;
  boolean?: boolean;
}
interface IParseNumberFormatBatchOutput {
  values: Array<{
    value: IParsedNumberFormatValue | null;
    kind?: string;
    inferredFormat?: string;
    diagnostics: INumberFormatDiagnostic[];
  }>;
  timingsMs?: Record<string, number>;
}
interface IObjectMatrixPrimitiveType<T> {
  [key: number]: IObjectArrayPrimitiveType<T>;
}
interface IObjectArrayPrimitiveType<T> {
  [key: number]: T;
}
interface IParseNumberFormatMatrixCell {
  v?: unknown;
}
interface IParseNumberFormatMatrixBatchInput {
  option?: INumberFormatOptions;
  matrix: IObjectMatrixPrimitiveType<IParseNumberFormatMatrixCell>;
}
interface IParsedNumberFormatMatrixValue {
  value: IParsedNumberFormatValue | null;
  kind?: string;
  inferredFormat?: string;
  diagnostics: INumberFormatDiagnostic[];
}
interface IParseNumberFormatMatrixBatchOutput {
  values: IObjectMatrixPrimitiveType<IParsedNumberFormatMatrixValue>;
  timingsMs?: Record<string, number>;
}
interface IAnalyzeNumberFormatBatchInput {
  formats: Array<{
    id: number;
    formatCode: string;
  }>;
}
interface INumberFormatAnalysis {
  isDate?: boolean;
  isTime?: boolean;
  isPercent?: boolean;
  isText?: boolean;
  [key: string]: unknown;
}
interface IAnalyzeNumberFormatBatchOutput {
  values: Array<{
    id: number;
    analysis: INumberFormatAnalysis | null;
    diagnostics: INumberFormatDiagnostic[];
  }>;
  timingsMs?: Record<string, number>;
}
/**
 * Formats many values with the Rust number-format engine.
 *
 * The native binding is loaded lazily on the first call, so callers do not need
 * to call `loadNativeBinding()` before using this API. Binding or transport
 * failures reject the promise; per-item formatting issues are returned in each
 * item's `diagnostics` array.
 */
declare function formatNumberBatch(input: IFormatNumberBatchInput): Promise<IFormatNumberBatchOutput>;
/**
 * Parses many user-entered number-format strings with the Rust engine.
 *
 * This API is pure data-in/data-out and does not apply Univer mutations. The
 * native binding is loaded lazily on the first call. Binding or transport
 * failures reject the promise; per-item parse issues are returned in each
 * item's `diagnostics` array.
 */
declare function parseNumberFormatBatch(input: IParseNumberFormatBatchInput): Promise<IParseNumberFormatBatchOutput>;
/**
 * Parses string `v` values from a Univer-style sparse object matrix.
 *
 * Non-string values and empty strings are skipped and therefore omitted from
 * the returned sparse matrix. Row and column coordinates are preserved.
 */
declare function parseNumberFormatMatrixBatch(input: IParseNumberFormatMatrixBatchInput): Promise<IParseNumberFormatMatrixBatchOutput>;
/**
 * Analyzes many number-format patterns with the Rust engine.
 *
 * The native binding is loaded lazily on the first call, so callers can use the
 * API directly as a Promise-returning utility. Binding or transport failures
 * reject the promise; per-pattern analysis issues are returned in each item's
 * `diagnostics` array.
 */
declare function analyzeNumberFormatBatch(input: IAnalyzeNumberFormatBatchInput): Promise<IAnalyzeNumberFormatBatchOutput>;
//#endregion
//#region src/plugin.d.ts
interface IUniverRustFormulaEngineConfig extends IUniverEngineFormulaConfig {
  /**
   * Whether to use the Rust-backed formula engine.
   * @default true
   */
  useRustEngine?: boolean;
}
/**
 * Plugin that swaps the formula calculation core for a Rust implementation.
 *
 * Inherits from UniverFormulaEnginePlugin to keep all non-calculation services
 * (FormulaDataModel, IFunctionService, controllers, etc.) intact.
 *
 * On the worker thread it overrides ICalculateFormulaService with
 * RustCalculateFormulaService which delegates heavy computation to the Rust
 * NAPI module.
 */
declare class UniverRustFormulaEnginePlugin extends UniverProFormulaEnginePlugin {
  protected readonly _config: Partial<IUniverRustFormulaEngineConfig>;
  protected readonly _injector: Injector;
  protected readonly _configService: IConfigService;
  static packageName: string;
  static version: string;
  constructor(_config: Partial<IUniverRustFormulaEngineConfig> | undefined, _injector: Injector, _configService: IConfigService);
  onReady(): void;
  /**
   * UniverProFormulaEnginePlugin invokes this hook before its single DI
   * registration pass.
   */
  protected _extendFormulaExecutionDependencies(dependencies: Dependency[]): void;
}
//#endregion
//#region src/services/calculate-formula.service.d.ts
interface IRustCalculateFormulaService extends ICalculateFormulaService {}
declare const IRustCalculateFormulaService: import("@wendellhu/redi").IdentifierDecorator<IRustCalculateFormulaService>;
/**
 * Rust-backed implementation of ICalculateFormulaService.
 *
 * This service acts as an adapter: it gathers all necessary data from the TS-side
 * DI container, serializes it, sends it to the Rust engine via NAPI, then writes
 * the results back into IFormulaRuntimeService.
 */
declare class RustCalculateFormulaService extends Disposable implements IRustCalculateFormulaService {
  protected readonly _configService: IConfigService;
  protected readonly _currentConfigService: IFormulaCurrentConfigService;
  protected readonly _runtimeService: IFormulaRuntimeService;
  protected readonly _formulaDependencyGenerator: IFormulaDependencyGenerator;
  protected readonly _featureCalculationManagerService: IFeatureCalculationManagerService;
  protected readonly _otherFormulaManagerService: IOtherFormulaManagerService;
  protected readonly _commandService: ICommandService;
  private readonly _rustEngineSyncController;
  private readonly _formulaDataModel;
  private readonly _formulaReferenceDataService;
  private readonly _excelExternalReferenceModel;
  private readonly _superTableService;
  protected readonly _executionInProgressListener$: Subject<IExecutionInProgressParams>;
  readonly executionInProgressListener$: import("rxjs").Observable<IExecutionInProgressParams>;
  protected readonly _executionCompleteListener$: Subject<IAllRuntimeData>;
  readonly executionCompleteListener$: import("rxjs").Observable<IAllRuntimeData>;
  private _executeLock;
  private _nativeLoaded;
  private _syncedSnapshotEpoch;
  private _syncedDependencyInvalidationEpoch;
  private _syncedExternalReferenceSignature;
  private _externalFormulaDatasetConfig;
  private _externalRequestCounter;
  private _externalRequestGeneration;
  private readonly _externalInflight;
  private readonly _externalCompleted;
  constructor(_configService: IConfigService, _currentConfigService: IFormulaCurrentConfigService, _runtimeService: IFormulaRuntimeService, _formulaDependencyGenerator: IFormulaDependencyGenerator, _featureCalculationManagerService: IFeatureCalculationManagerService, _otherFormulaManagerService: IOtherFormulaManagerService, _commandService: ICommandService, _rustEngineSyncController: RustEngineSyncController, _formulaDataModel: FormulaDataModel, _formulaReferenceDataService: IFormulaReferenceDataService, _excelExternalReferenceModel: ExternalReferenceModel, _superTableService: ISuperTableService);
  dispose(): void;
  stopFormulaExecution(): void;
  setRuntimeFeatureCellData(featureId: string, featureData: IRuntimeUnitDataType): void;
  setRuntimeFeatureRange(featureId: string, featureRange: IFeatureDirtyRangeType): void;
  execute(formulaDatasetConfig: IFormulaDatasetConfig): Promise<void>;
  private _executeStep;
  private _resolveExternalReferenceNeeds;
  private _loadExternalReferenceNeeds;
  private _applyTableReferenceLoadError;
  private _loadRustExternalReference;
  private _materializeRustExternalReference;
  private _resolveRustExternalBinding;
  private _parseOoxmlExternalSyntheticUnitId;
  private _buildRustInput;
  private _syncRustFormulaDependencies;
  private _syncRustFormulaDependencyDefinitions;
  private _collectRustFormulaDependencySyncState;
  private _markRustFormulaDirty;
  private _dirtyFeatureMapFor;
  private _featureKey;
  private _featureSignatureMap;
  private _serializeFeatureDirtyRanges;
  private _serializeFormulaData;
  private _serializeUnitData;
  private _serializeCellData;
  private _applyRustOutput;
  private _applyRustDependencyOutput;
  calculate(formulaString: string): Promise<{} | null>;
  executeFormulas(formulas: IFormulaStringMap, rowData?: IUnitRowData): Promise<IFormulaExecuteResultMap>;
  getAllDependencyJson(_rowData?: IUnitRowData): Promise<IFormulaDependencyTreeJson[]>;
  getCellDependencyJson(unitId: string, sheetId: string, row: number, column: number, _rowData?: IUnitRowData): Promise<{
    treeId: number;
    formula: string;
    row: number;
    column: number;
    unitId: string;
    subUnitId: string;
    refOffsetX: number;
    refOffsetY: number;
    rangeList: IUnitRange$1[];
    refTreeId: number | undefined;
    formulaId: Nullable<string>;
    featureId: Nullable<string>;
    type: Nullable<import("@univerjs/engine-formula").FormulaDependencyTreeType>;
    children: IFormulaDependencyTreeJson[];
    parents: IFormulaDependencyTreeJson[];
  } | undefined>;
  getRangeDependents(unitRanges: IUnitRange$1[]): Promise<IFormulaDependencyTreeJson[]>;
  getInRangeFormulas(unitRanges: IUnitRange$1[]): Promise<IFormulaDependencyTreeJson[]>;
  getDependentsAndInRangeFormulas(unitRanges: IUnitRange$1[]): Promise<{
    dependents: IFormulaDependencyTreeJson[];
    inRanges: IFormulaDependencyTreeJson[];
  }>;
  private _formulaStringMapToFormulaData;
  private _formulaExecutionOutputToResultMap;
  private _getRustDependencyGraph;
  private _getRustInspectGraph;
  private _rustAllDependencyJson;
  private _rustGraphDependencyJson;
  private _rustDependencyNodeToJson;
  private _rustFormulaNodeToDependencyJson;
  private _rustRangeToUnitRange;
  private _serializeUnitRanges;
  private _rustDependencyJsonByCell;
  private _cellKey;
  private _cellInUnitRanges;
  private _uniqueDependencyJson;
}
//#endregion
//#region src/services/workbook-snapshot-materializer.d.ts
interface IMaterializedWorkbookSnapshot {
  snapshot: ISnapshot;
  sheetBlocks: Record<string, ISheetBlock[]>;
  warnings: unknown[];
  calculationStats: IMaterializationCalculationStats;
}
interface IMaterializationCalculationStats {
  fullCalculation: boolean;
  formulaNodeCount: number;
  calculatedNodeCount: number;
  hasCycle: boolean;
  cycleIterationCount: number;
  parallelBatchCount: number;
  parallelNodeCount: number;
  errorCount: number;
}
declare function materializeWorkbookSnapshot(workbook: IWorkbookData, unitID: string, rev: number, dirtyInput?: IRustFormulaDependencyDirtyInput): Promise<IMaterializedWorkbookSnapshot>;
//#endregion
export { type IAnalyzeNumberFormatBatchInput, type IAnalyzeNumberFormatBatchOutput, ICellValue, ICycleDependencyInfo, IDefinedName, IExecutionError, type IFormatNumberBatchInput, type IFormatNumberBatchOutput, type IFormulaCalculationError, type IFormulaCalculationPatch, IFormulaEngineConfig, IFormulaExecutionInput, IFormulaExecutionOutput, type IFormulaProjectionDesyncSignal, type IMaterializationCalculationStats, type IMaterializedWorkbookSnapshot, type INumberFormatAnalysis, type INumberFormatDiagnostic, type INumberFormatOptions, type IObjectArrayPrimitiveType, type IObjectMatrixPrimitiveType, type IParseNumberFormatBatchInput, type IParseNumberFormatBatchOutput, type IParseNumberFormatMatrixBatchInput, type IParseNumberFormatMatrixBatchOutput, type IParseNumberFormatMatrixCell, type IParsedNumberFormatMatrixValue, type IParsedNumberFormatValue, IRange, IRustCalculateFormulaService, IRustDefinedNameSnapshot, IRustDependencyCalculationPlanItem, IRustDependencyCalculationTree, IRustDependencyCell, IRustDependencyDirtyResult, IRustDependencyGraph, IRustDependencyNode, IRustDependencyRange, IRustEngineModelStats, IRustEngineMutation, IRustEngineSnapshot, IRustExternalFeatureCalculation, IRustExternalLinkSnapshot, IRustExternalOtherFormula, IRustExternalSheetSnapshot, IRustFormulaDataItem, IRustFormulaDependencyClearInput, IRustFormulaDependencyDirtyInput, IRustFormulaDependencyDirtyOutput, IRustFormulaDependencyExecutionOutput, IRustFormulaDependencyInspectGraph, IRustFormulaDependencyInspectNode, IRustFormulaDependencyNodeOutput, IRustFormulaDependencySyncInput, IRustFormulaDependencySyncOutput, type IRustFormulaProjectionLoadResult, type IRustFormulaProjectionMutationResult, IRustFormulaStoreState, type IRustProjectionWorkbookInput, IRustResourceSnapshot, IRustSheetSnapshot, IRustSheetState, IRustTableSnapshot, IRustVisibilityData, IRustWorkbookCalculationSnapshot, IRustWorkbookSnapshot, ISheetData, IUnitRange, type IUniverRustFormulaEngineConfig, type NumberFormatDateSystem, RUST_FORMULA_RELEVANT_MUTATIONS, RUST_INCREMENTAL_DEPENDENCY_MUTATIONS, RUST_UPSERT_PROJECTION_WORKBOOK_MUTATION_ID, RUST_UPSERT_REFERENCE_DATA_MUTATION_ID, RustCalculateFormulaService, RustEngineSyncController, RustFormulaProjectionService, UniverRustFormulaEnginePlugin, analyzeNumberFormatBatch, applyMutationOnRust, buildLexerTreeOnRust, buildRustDependencyGraphOnRust, buildSequenceNodesOnRust, checkIfAddBracketOnRust, clearRustFormulaDependenciesOnRust, clearRustFormulaDirtyOnRust, createFormulaProjectionDesyncSignal, createProjectionWorkbookUpsertMutation, disposeAllWorkbooksOnRust, disposeWorkbookOnRust, executeOnRust, formatNumberBatch, getNativeBindingSource, getRustCellOnRust, getRustDirtyDependenciesOnRust, getRustFormulaDataOnRust, getRustModelStats, getRustSheetStateOnRust, isRustFormulaRelevantMutation, isRustIncrementalDependencyMutation, loadNativeBinding, loadSnapshotOnRust, markRustFormulaDirtyOnRust, materializeWorkbookSnapshot, materializeWorkbookSnapshotOnRust, parseNumberFormatBatch, parseNumberFormatMatrixBatch, rustExecutionOutputToFormulaCalculationPatch, serializeRuntimeWorkbookSnapshot, serializeRuntimeWorkbookSnapshots, syncRustFormulaDependenciesOnRust };