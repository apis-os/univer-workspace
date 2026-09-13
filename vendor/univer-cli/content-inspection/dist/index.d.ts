import { ICellData } from "@univerjs/core";
//#region src/json-value.d.ts
type JsonValue = null | boolean | number | string | JsonValue[] | {
  readonly [key: string]: JsonValue;
};
//#endregion
//#region src/errors.d.ts
type ContentInspectionErrorCode = "INSPECTION_RANGE_OUT_OF_BOUNDS" | "INSPECTION_RESULT_INVALID" | "INSPECTION_SELECTOR_AMBIGUOUS" | "INSPECTION_SELECTOR_INVALID" | "INSPECTION_SELECTOR_NOT_FOUND" | "INSPECTION_UNIT_TYPE_MISMATCH";
declare class ContentInspectionError extends Error {
  readonly code: ContentInspectionErrorCode;
  readonly details?: JsonValue | undefined;
  constructor(code: ContentInspectionErrorCode, message: string, details?: JsonValue | undefined);
}
//#endregion
//#region src/types.d.ts
type ContentInspectionTarget = "workbook" | "worksheet" | "worksheet-range" | "document" | "paragraph" | "presentation" | "slide" | "base" | "board" | "board-element";
type WorksheetSelector = {
  readonly id: string;
} | {
  readonly index: number;
} | {
  readonly name: string;
};
type SlideSelector = {
  readonly id: string;
} | {
  readonly index: number;
};
type ParagraphSelector = {
  readonly id: string;
} | {
  readonly index: number;
};
interface BoardElementSelector {
  readonly id: string;
}
interface WorkbookInspectionQuery {
  readonly kind: "workbook";
}
interface BaseInspectionQuery {
  readonly kind: "base";
}
interface BoardInspectionQuery {
  readonly kind: "board";
}
interface BoardElementInspectionQuery {
  readonly elements: readonly [BoardElementSelector, ...BoardElementSelector[]];
  readonly kind: "board-element";
}
interface WorksheetInspectionQuery {
  readonly kind: "worksheet";
  readonly worksheets: readonly [WorksheetSelector, ...WorksheetSelector[]];
}
interface WorksheetRangeInspectionQuery {
  readonly kind: "worksheet-range";
  readonly ranges: readonly [{
    readonly range: string;
    readonly worksheet: WorksheetSelector;
  }, ...Array<{
    readonly range: string;
    readonly worksheet: WorksheetSelector;
  }>];
}
interface PresentationInspectionQuery {
  readonly kind: "presentation";
}
interface SlideInspectionQuery {
  readonly kind: "slide";
  readonly slides: readonly [SlideSelector, ...SlideSelector[]];
}
interface DocumentInspectionQuery {
  readonly kind: "document";
}
interface ParagraphInspectionQuery {
  readonly kind: "paragraph";
  readonly paragraphs: readonly [ParagraphSelector, ...ParagraphSelector[]];
}
type ContentInspectionQuery = WorkbookInspectionQuery | WorksheetInspectionQuery | WorksheetRangeInspectionQuery | DocumentInspectionQuery | ParagraphInspectionQuery | PresentationInspectionQuery | SlideInspectionQuery | BaseInspectionQuery | BoardInspectionQuery | BoardElementInspectionQuery;
interface BoardRect {
  readonly height: number;
  readonly left: number;
  readonly top: number;
  readonly width: number;
}
interface BoardElementTransform {
  readonly flipX?: boolean;
  readonly flipY?: boolean;
  readonly height?: number;
  readonly left?: number;
  readonly rotation?: number;
  readonly scaleX?: number;
  readonly scaleY?: number;
  readonly skewX?: number;
  readonly skewY?: number;
  readonly top?: number;
  readonly width?: number;
}
interface BoardElementSummary {
  readonly bounds: BoardRect | null;
  readonly description?: string;
  readonly endElementId?: string;
  readonly id: string;
  readonly laneId?: string;
  readonly locked: boolean;
  readonly name?: string;
  readonly orderIndex: number;
  readonly parentId?: string;
  readonly selectable: boolean;
  readonly startElementId?: string;
  readonly subtype?: string;
  readonly text?: string;
  readonly transform: BoardElementTransform;
  readonly type: string;
  readonly visible: boolean;
}
interface BoardElementCounts {
  readonly byType: Readonly<Record<string, number>>;
  readonly total: number;
}
interface BoardConnectorPoint {
  readonly x: number;
  readonly y: number;
}
type BoardConnectorEndpoint = ({
  readonly kind: "free";
} & BoardConnectorPoint) | {
  readonly fallbackPoint?: BoardConnectorPoint;
  readonly kind: "lifeline";
  readonly offsetY: number;
  readonly shapeId: string;
} | {
  readonly boundaryRatio?: number;
  readonly fallbackPoint?: BoardConnectorPoint;
  readonly kind: "shapeBoundary";
  readonly localUV?: {
    readonly u: number;
    readonly v: number;
  };
  readonly outlineIndex: number;
  readonly segmentIndex: number;
  readonly segmentT: number;
  readonly shapeId: string;
} | {
  readonly connectionPosition?: number;
  readonly connectionSiteId: number;
  readonly fallbackPoint?: BoardConnectorPoint;
  readonly kind: "shapeSite";
  readonly shapeId: string;
};
interface BoardConnectorWaypoint extends BoardConnectorPoint {
  readonly id: string;
  readonly kind: "auto" | "manual";
  readonly locked?: boolean;
}
interface BoardConnectorConnection {
  readonly end: BoardConnectorEndpoint;
  readonly routing: "curve" | "freePolyline" | "orthogonal" | "straight";
  readonly routingMode: "auto" | "manual" | "mixed";
  readonly start: BoardConnectorEndpoint;
  readonly waypoints: readonly BoardConnectorWaypoint[];
}
interface BoardInspectionResult {
  readonly background?: JsonValue;
  readonly elementCounts: BoardElementCounts;
  readonly elements: readonly BoardElementSummary[];
  readonly kind: "board";
  readonly name: string;
  readonly themeData: JsonValue;
  readonly unitId: string;
}
interface BoardElementInspectionBase {
  readonly bounds: BoardRect | null;
  readonly description?: string;
  readonly id: string;
  readonly laneId?: string;
  readonly locked: boolean;
  readonly name?: string;
  readonly orderIndex: number;
  readonly parentId?: string;
  readonly selectable: boolean;
  readonly transform: BoardElementTransform;
  readonly type: string;
  readonly visible: boolean;
}
interface BoardShapeElementInspection extends BoardElementInspectionBase {
  readonly shapeData: JsonValue;
  readonly type: "shape";
}
interface BoardConnectorElementInspection extends BoardElementInspectionBase {
  readonly connection: BoardConnectorConnection;
  readonly labels: readonly JsonValue[];
  readonly labelStyle: JsonValue | null;
  readonly labelText: JsonValue | null;
  readonly style: JsonValue | null;
  readonly type: "connector";
}
interface BoardTextElementInspection extends BoardElementInspectionBase {
  readonly textContent: JsonValue | null;
  readonly textStyle: JsonValue | null;
  readonly type: "text";
}
interface BoardImageElementInspection extends BoardElementInspectionBase {
  readonly adjustValues?: Readonly<Record<string, number>>;
  readonly crop?: JsonValue;
  readonly imageSourceType?: string;
  readonly prstGeom?: string;
  readonly source: string;
  readonly type: "image";
}
interface BoardChartElementInspection extends BoardElementInspectionBase {
  readonly chartId: string;
  readonly placeholder?: JsonValue;
  readonly stroke?: JsonValue;
  readonly type: "chart";
}
interface BoardContainerElementInspection extends BoardElementInspectionBase {
  readonly containerData: JsonValue;
  readonly type: "container";
}
interface BoardDiagramElementInspection extends BoardElementInspectionBase {
  readonly data: JsonValue;
  readonly type: "diagram";
}
interface BoardTableElementInspection extends BoardElementInspectionBase {
  readonly placeholder?: JsonValue;
  readonly tableId: string;
  readonly type: "table";
}
interface BoardGroupElementInspection extends BoardElementInspectionBase {
  readonly children: readonly string[];
  readonly type: "group";
}
interface BoardMediaElementInspection extends BoardElementInspectionBase {
  readonly mediaType: string;
  readonly poster?: string;
  readonly source: string;
  readonly type: "media";
}
interface BoardPlaceholderElementInspection extends BoardElementInspectionBase {
  readonly placeholder: JsonValue;
  readonly style?: JsonValue;
  readonly text?: string;
  readonly type: "placeholder";
}
interface BoardOtherElementInspection extends BoardElementInspectionBase {
  readonly data: JsonValue;
  readonly originalType: string;
  readonly type: "unknown";
}
type BoardElementInspection = BoardShapeElementInspection | BoardConnectorElementInspection | BoardTextElementInspection | BoardImageElementInspection | BoardChartElementInspection | BoardContainerElementInspection | BoardDiagramElementInspection | BoardTableElementInspection | BoardGroupElementInspection | BoardMediaElementInspection | BoardPlaceholderElementInspection | BoardOtherElementInspection;
interface BoardElementInspectionResult {
  readonly elements: readonly BoardElementInspection[];
  readonly kind: "board-element";
  readonly unitId: string;
}
interface WorksheetIdentity {
  readonly id: string;
  readonly index: number;
  readonly name: string;
}
interface WorksheetTableSummary {
  readonly id: string;
  readonly name: string;
  readonly range: string;
}
interface WorksheetRuleSummary {
  readonly count: number;
  readonly ranges: readonly string[];
}
interface WorksheetDrawingSummary {
  readonly charts: number;
  readonly images: number;
  readonly shapes: number;
  readonly total: number;
}
interface WorksheetOverview extends WorksheetIdentity {
  readonly columnCount: number;
  readonly conditionalFormatting: WorksheetRuleSummary;
  readonly dataValidation: WorksheetRuleSummary;
  readonly drawings: WorksheetDrawingSummary;
  readonly formulaUsedRanges: readonly string[];
  readonly mergedRanges: readonly string[];
  readonly rowCount: number;
  readonly styleUsedRanges: readonly string[];
  readonly tables: readonly WorksheetTableSummary[];
  readonly valueUsedRanges: readonly string[];
}
interface WorkbookInspectionResult {
  readonly kind: "workbook";
  readonly name: string;
  readonly unitId: string;
  readonly worksheets: readonly WorksheetOverview[];
}
interface BaseFieldOverview {
  readonly config: JsonValue;
  readonly id: string;
  readonly index: number;
  readonly isReadonly: boolean;
  readonly name: string;
  readonly type: string;
}
interface BaseViewOverview {
  readonly id: string;
  readonly index: number;
  readonly name: string;
  readonly type: string;
}
interface BaseTableOverview {
  readonly fields: readonly BaseFieldOverview[];
  readonly formulaName: string;
  readonly id: string;
  readonly index: number;
  readonly name: string;
  readonly primaryFieldId: string;
  readonly recordCount: number;
  readonly views: readonly BaseViewOverview[];
}
interface BaseInspectionResult {
  readonly kind: "base";
  readonly name: string;
  readonly tables: readonly BaseTableOverview[];
  readonly unitId: string;
}
interface WorksheetInspectionResult {
  readonly kind: "worksheet";
  readonly unitId: string;
  readonly worksheets: readonly WorksheetOverview[];
}
interface WorksheetRangeResult {
  readonly cellData: readonly (readonly (ICellData | null)[])[];
  readonly clipped: boolean;
  readonly displayValues: readonly (readonly string[])[];
  readonly requestedRange: string;
  readonly resolvedRange: string;
  readonly worksheet: WorksheetIdentity;
}
interface WorksheetRangeInspectionResult {
  readonly kind: "worksheet-range";
  readonly ranges: readonly WorksheetRangeResult[];
  readonly unitId: string;
}
interface PresentationSize {
  readonly height: number;
  readonly width: number;
}
interface SlideElementCounts {
  readonly charts: number;
  readonly groups: number;
  readonly images: number;
  readonly shapes: number;
  readonly tables: number;
  readonly text: number;
  readonly total: number;
}
interface SlideSummary {
  readonly elementCounts: SlideElementCounts;
  readonly hasSpeakerNotes: boolean;
  readonly id: string;
  readonly index: number;
  readonly name: string;
  readonly textPreview?: string;
}
interface PresentationInspectionResult {
  readonly kind: "presentation";
  readonly layoutSlideCount: number;
  readonly masterSlideCount: number;
  readonly name: string;
  readonly size: PresentationSize;
  readonly slides: readonly SlideSummary[];
  readonly unitId: string;
}
interface SlideElementTransform {
  readonly angle?: number;
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}
interface SlideTextDetails {
  readonly alignment?: JsonValue;
  readonly insets?: JsonValue;
  readonly text: string;
}
interface SlideElementInspection {
  readonly chartId?: string;
  readonly children?: readonly SlideElementInspection[];
  readonly fill?: JsonValue;
  readonly id: string;
  readonly mediaType?: string;
  readonly name: string;
  readonly stroke?: JsonValue;
  readonly tableId?: string;
  readonly tableText?: readonly (readonly string[])[];
  readonly text?: SlideTextDetails;
  readonly transform?: SlideElementTransform;
  readonly type: string;
  readonly visible: boolean;
}
interface SlideInspectionDetails extends SlideSummary {
  readonly elements: readonly SlideElementInspection[];
  readonly speakerNotes: string;
}
interface SlideInspectionResult {
  readonly kind: "slide";
  readonly slides: readonly SlideInspectionDetails[];
  readonly unitId: string;
}
interface DocumentFeatureCounts {
  readonly blockRanges: number;
  readonly customBlocks: number;
  readonly drawings: number;
  readonly lists: number;
  readonly tables: number;
}
interface ParagraphSummary {
  readonly id: string;
  readonly index: number;
  readonly textPreview: string;
}
interface DocumentInspectionResult {
  readonly characterCount: number;
  readonly features: DocumentFeatureCounts;
  readonly kind: "document";
  readonly mode: "modern" | "paginated" | "unspecified";
  readonly paragraphCount: number;
  readonly paragraphs: readonly ParagraphSummary[];
  readonly title: string;
  readonly unitId: string;
}
interface ParagraphInspectionDetails {
  readonly bullet?: JsonValue;
  readonly id: string;
  readonly index: number;
  readonly list?: JsonValue;
  readonly style?: JsonValue;
  readonly text: string;
  readonly textRuns: readonly JsonValue[];
}
interface ParagraphInspectionResult {
  readonly kind: "paragraph";
  readonly paragraphs: readonly ParagraphInspectionDetails[];
  readonly unitId: string;
}
type ContentInspectionResult = WorkbookInspectionResult | WorksheetInspectionResult | WorksheetRangeInspectionResult | DocumentInspectionResult | ParagraphInspectionResult | PresentationInspectionResult | SlideInspectionResult | BaseInspectionResult | BoardInspectionResult | BoardElementInspectionResult;
//#endregion
//#region src/inspect-content.d.ts
type ContentInspectionUnitType = "sheet" | "doc" | "slide" | "base" | "board";
interface ContentInspectionRuntime {
  readonly unitId: string;
  readonly unitType: ContentInspectionUnitType;
  execute(input: {
    readonly code: string;
    readonly mode: "read";
  }): Promise<{
    readonly value: JsonValue;
  }>;
}
declare function inspectContent(runtime: ContentInspectionRuntime, query: WorkbookInspectionQuery): Promise<WorkbookInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: WorksheetInspectionQuery): Promise<WorksheetInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: WorksheetRangeInspectionQuery): Promise<WorksheetRangeInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: PresentationInspectionQuery): Promise<PresentationInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: SlideInspectionQuery): Promise<SlideInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: DocumentInspectionQuery): Promise<DocumentInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: ParagraphInspectionQuery): Promise<ParagraphInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: BaseInspectionQuery): Promise<BaseInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: BoardInspectionQuery): Promise<BoardInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: BoardElementInspectionQuery): Promise<BoardElementInspectionResult>;
declare function inspectContent(runtime: ContentInspectionRuntime, query: ContentInspectionQuery): Promise<ContentInspectionResult>;
//#endregion
export { type BaseFieldOverview, type BaseInspectionQuery, type BaseInspectionResult, type BaseTableOverview, type BaseViewOverview, type BoardChartElementInspection, type BoardConnectorConnection, type BoardConnectorElementInspection, type BoardConnectorEndpoint, type BoardConnectorPoint, type BoardConnectorWaypoint, type BoardContainerElementInspection, type BoardDiagramElementInspection, type BoardElementCounts, type BoardElementInspection, type BoardElementInspectionBase, type BoardElementInspectionQuery, type BoardElementInspectionResult, type BoardElementSelector, type BoardElementSummary, type BoardElementTransform, type BoardGroupElementInspection, type BoardImageElementInspection, type BoardInspectionQuery, type BoardInspectionResult, type BoardMediaElementInspection, type BoardOtherElementInspection, type BoardPlaceholderElementInspection, type BoardRect, type BoardShapeElementInspection, type BoardTableElementInspection, type BoardTextElementInspection, ContentInspectionError, type ContentInspectionErrorCode, type ContentInspectionQuery, type ContentInspectionResult, type ContentInspectionRuntime, type ContentInspectionTarget, type ContentInspectionUnitType, type DocumentFeatureCounts, type DocumentInspectionQuery, type DocumentInspectionResult, type ParagraphInspectionDetails, type ParagraphInspectionQuery, type ParagraphInspectionResult, type ParagraphSelector, type ParagraphSummary, type PresentationInspectionQuery, type PresentationInspectionResult, type PresentationSize, type SlideElementCounts, type SlideElementInspection, type SlideElementTransform, type SlideInspectionDetails, type SlideInspectionQuery, type SlideInspectionResult, type SlideSelector, type SlideSummary, type SlideTextDetails, type WorkbookInspectionQuery, type WorkbookInspectionResult, type WorksheetDrawingSummary, type WorksheetIdentity, type WorksheetInspectionQuery, type WorksheetInspectionResult, type WorksheetOverview, type WorksheetRangeInspectionQuery, type WorksheetRangeInspectionResult, type WorksheetRangeResult, type WorksheetRuleSummary, type WorksheetSelector, type WorksheetTableSummary, inspectContent };