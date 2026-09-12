import "puppeteer-core";
import { IBoardData } from "@univerjs-pro/boards";
import { ISlideData } from "@univerjs-pro/slides";
import { IBaseSnapshot, IDocumentData, IWorkbookData } from "@univerjs/core";
//#region src/errors.d.ts
type UniverRenderErrorCode = "BROWSER_UNAVAILABLE" | "RENDER_ABORTED" | "RENDER_FAILED" | "RENDER_TARGET_INVALID" | "RUNTIME_CLOSED";
declare class UniverRenderError extends Error {
  readonly code: UniverRenderErrorCode;
  constructor(code: UniverRenderErrorCode, message: string, options?: ErrorOptions);
}
declare function isUniverRenderError(value: unknown): value is UniverRenderError;
//#endregion
//#region src/browser.d.ts
declare const UNIVER_RENDER_BROWSER_ENV_VAR = "UNIVER_RENDER_BROWSER";
declare const UNIVER_RENDER_BROWSER_CACHE_ENV_VAR = "UNIVER_RENDER_BROWSER_CACHE";
declare const UNIVER_RENDER_BROWSER_DOWNLOAD_BASE_URL_ENV_VAR = "UNIVER_RENDER_BROWSER_DOWNLOAD_BASE_URL";
type UniverRenderBrowserResolution = {
  readonly executablePath: string;
  readonly source: "explicit" | "env" | "cache" | "system";
  readonly status: "found";
} | {
  readonly cacheDir: string;
  readonly checkedPaths: readonly string[];
  readonly envVar: typeof UNIVER_RENDER_BROWSER_ENV_VAR;
  readonly status: "missing";
};
interface ResolveUniverRenderBrowserOptions {
  readonly env?: NodeJS.ProcessEnv;
  readonly executablePath?: string;
  readonly platform?: NodeJS.Platform;
}
interface InstallUniverRenderBrowserOptions {
  readonly cacheDir?: string;
  readonly downloadBaseUrl?: string;
  readonly env?: NodeJS.ProcessEnv;
}
interface UniverRenderBrowserInstallation {
  readonly alreadyInstalled: boolean;
  readonly buildId: string;
  readonly cacheDir: string;
  readonly executablePath: string;
}
interface ProbeUniverRenderBrowserOptions {
  readonly executablePath: string;
}
declare function resolveUniverRenderBrowser(options?: ResolveUniverRenderBrowserOptions): Promise<UniverRenderBrowserResolution>;
declare function installUniverRenderBrowser(options?: InstallUniverRenderBrowserOptions): Promise<UniverRenderBrowserInstallation>;
declare function probeUniverRenderBrowser(options: ProbeUniverRenderBrowserOptions): Promise<void>;
//#endregion
//#region src/types.d.ts
type UniverRenderFormulaReferenceUnit = {
  readonly unitData: IWorkbookData;
  readonly unitType: "sheet";
} | {
  readonly unitData: IBaseSnapshot;
  readonly unitType: "base";
};
type UniverRenderEmbeddedUnit = {
  readonly unitData: IWorkbookData;
  readonly unitType: "sheet";
} | {
  readonly unitData: IDocumentData;
  readonly unitType: "doc";
} | {
  readonly unitData: ISlideData;
  readonly unitType: "slide";
} | {
  readonly unitData: IBoardData;
  readonly unitType: "board";
} | {
  readonly unitData: IBaseSnapshot;
  readonly unitType: "base";
};
type UniverRenderUnit = UniverRenderEmbeddedUnit & {
  readonly embeddedUnits?: readonly UniverRenderEmbeddedUnit[];
  readonly formulaReferenceUnits?: readonly UniverRenderFormulaReferenceUnit[];
};
type UnitInput<TType extends UniverRenderUnit["unitType"]> = Extract<UniverRenderUnit, {
  readonly unitType: TType;
}>;
interface RenderBoundingBox {
  readonly left: number;
  readonly top: number;
  readonly width: number;
  readonly height: number;
}
interface UniverBoardLayoutPoint {
  readonly x: number;
  readonly y: number;
}
interface UniverBoardLayoutResolvedRoute {
  readonly connectorId: string;
  readonly points: readonly UniverBoardLayoutPoint[];
  readonly resolved: boolean;
}
type UniverBoardLayoutIssueRule = "element-overlap" | "connector-through-element" | "connector-collinear-overlap" | "connector-crossing" | "connector-free-endpoint-near-element" | "connector-free-endpoint-near-dashed-connector" | "connector-marker-target-overlap" | "connector-marker-corner-overlap" | "connector-marker-collision" | "connector-label-overflow" | "connector-label-layout-unresolved" | "connector-label-collision" | "connector-label-endpoint-constrained" | "connector-terminal-direction-reversed" | "connector-excessive-detour" | "connector-terminal-stem-too-short" | "connector-terminal-dash-discontinuity";
type UniverBoardLayoutSuggestedAction = "bind-connector-endpoint" | "replace-dashed-connector-with-sequence-lifeline";
interface UniverBoardLayoutIssue {
  readonly bounds: RenderBoundingBox;
  readonly connectorIds: readonly string[];
  readonly labelIds?: readonly string[];
  readonly elementIds: readonly string[];
  readonly focusBounds: RenderBoundingBox;
  readonly id: string;
  readonly endpoint?: "start" | "end";
  readonly routePoints?: readonly UniverBoardLayoutPoint[];
  readonly rule: UniverBoardLayoutIssueRule;
  readonly severity: "error" | "warning";
  readonly suggestedAction?: UniverBoardLayoutSuggestedAction;
}
interface UniverBoardLayoutAnalysis {
  readonly contentBounds: RenderBoundingBox | null;
  readonly issues: readonly UniverBoardLayoutIssue[];
  readonly routes: readonly UniverBoardLayoutResolvedRoute[];
  readonly source: "model" | "rendered";
  readonly summary: {
    readonly errorCount: number;
    readonly unresolvedConnectorCount: number;
    readonly warningCount: number;
  };
}
interface UniverRenderedBoardEvidence {
  readonly contentBounds: RenderBoundingBox;
  readonly layoutAnalysis: UniverBoardLayoutAnalysis;
  readonly pageId: string;
  readonly scale: number;
}
type UniverRenderInput = ((UnitInput<"sheet"> & {
  readonly operation: {
    readonly kind: "sheet-range";
    readonly range: string;
    readonly scale: number;
    readonly sheetName?: string;
  };
}) | (UnitInput<"doc"> & {
  readonly operation: {
    readonly kind: "doc-page";
    readonly page: number;
    readonly scale: number;
  };
}) | (UnitInput<"slide"> & {
  readonly operation: {
    readonly kind: "slide-page";
    readonly page: number;
    readonly scale: number;
  };
}) | (UnitInput<"board"> & {
  readonly operation: {
    readonly kind: "board-content";
    readonly elementIds?: readonly string[];
    readonly padding?: number;
    readonly region?: RenderBoundingBox;
    readonly scale: number;
  };
}) | (UnitInput<"base"> & {
  readonly operation: {
    readonly kind: "base-view";
    readonly scale: number;
  };
})) & {
  readonly signal?: AbortSignal;
};
type UniverDocumentInput = UnitInput<"doc"> & {
  readonly signal?: AbortSignal;
};
interface UniverRenderedImage {
  readonly board?: UniverRenderedBoardEvidence;
  readonly bytes: Uint8Array;
  readonly height: number;
  readonly width: number;
}
type UniverPrintPdfInput = Exclude<UniverRenderUnit, {
  readonly unitType: "base";
}> & {
  readonly signal?: AbortSignal;
};
interface UniverPrintedPdf {
  readonly bytes: Uint8Array;
  readonly pageCount: number;
}
interface UniverTextMeasureInput {
  readonly doc: IDocumentData;
  readonly signal?: AbortSignal;
  readonly wrapWidth?: number;
}
interface UniverTextMetrics {
  readonly actualHeight: number;
  readonly actualWidth: number;
  readonly firstLineAscent: number;
  readonly firstLineDescent: number;
  readonly lineCount: number;
}
interface UniverSlideLayoutBox {
  readonly left: number;
  readonly top: number;
  readonly width: number;
  readonly height: number;
}
interface UniverSlideLayoutText {
  readonly align?: {
    readonly horizontal?: string;
    readonly vertical?: string;
  };
  readonly color?: string;
  readonly content: string;
  readonly ink: UniverSlideLayoutBox;
  readonly inset?: {
    readonly bottom: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
  };
  readonly lineCount: number;
  readonly opacity?: number;
}
interface UniverSlideElementLayout {
  readonly declared: UniverSlideLayoutBox;
  readonly elementId: string;
  readonly elementType: string;
  readonly fill?: {
    readonly color?: string;
    readonly opacity?: number;
    readonly type?: string;
  };
  readonly imageSource?: string;
  readonly name?: string;
  readonly rotation: number;
  readonly shapeType?: string;
  readonly stroke?: {
    readonly color?: string;
    readonly opacity?: number;
    readonly type?: string;
    readonly width?: number;
  };
  readonly text?: UniverSlideLayoutText;
  readonly visible?: boolean;
  readonly zIndex: number;
}
interface UniverSlidePageLayout {
  readonly elements: readonly UniverSlideElementLayout[];
  readonly page: number;
  readonly pageHeight: number;
  readonly pageId: string;
  readonly pageWidth: number;
}
interface UniverSlideLayoutCapture {
  readonly pages: readonly UniverSlidePageLayout[];
}
type UniverSlideLayoutInput = UnitInput<"slide"> & {
  readonly pages?: readonly number[];
  readonly signal?: AbortSignal;
};
interface UniverContactSheetInput {
  readonly images: readonly {
    readonly bytes: Uint8Array;
    readonly page: number;
  }[];
  readonly tile?: {
    readonly columns: number;
    readonly rows: number;
  };
}
interface UniverRenderRuntime {
  close(): Promise<void>;
  composeContactSheet(input: UniverContactSheetInput): Promise<UniverRenderedImage>;
  getDocumentPageCount(input: UniverDocumentInput): Promise<number>;
  render(input: UniverRenderInput): Promise<UniverRenderedImage>;
}
interface UniverPrintPdfRuntime {
  close(): Promise<void>;
  printPdf(input: UniverPrintPdfInput): Promise<UniverPrintedPdf>;
}
interface UniverTextMeasureRuntime {
  close(): Promise<void>;
  measureText(input: UniverTextMeasureInput): Promise<UniverTextMetrics>;
}
/** Browser-backed Slide layout facts used by Slide-specific analysis capabilities. */
interface UniverSlideLayoutRuntime {
  captureSlideLayout(input: UniverSlideLayoutInput): Promise<UniverSlideLayoutCapture>;
}
interface UniverRenderRuntimeOptions {
  /** Directory containing the caller-built Render Page and its index.html entry. */
  readonly renderPageRoot: string;
  readonly browserExecutablePath?: string;
  readonly env?: NodeJS.ProcessEnv;
  /** Optional license forwarded to Render Page factories and Univer Pro license handling. */
  readonly license?: string;
  readonly signal?: AbortSignal;
}
//#endregion
//#region src/runtime.d.ts
declare function createUniverRenderRuntime(options: UniverRenderRuntimeOptions): Promise<UniverPrintPdfRuntime & UniverRenderRuntime & UniverSlideLayoutRuntime & UniverTextMeasureRuntime>;
//#endregion
//#region src/render-page-protocol.d.ts
/** Browser-side protocol implemented by a caller-built Render Page. */
interface UniverRenderPageApi {
  readonly protocolVersion: 2;
  readonly ready: true;
  captureDocLayout(input: {
    readonly unitKey: string;
    readonly pages?: readonly number[];
  }): Promise<{
    readonly pages: readonly unknown[];
  }>;
  captureSlideLayout(input: {
    readonly unitKey: string;
    readonly pages?: readonly number[];
  }): Promise<UniverSlideLayoutCapture>;
  composeContactSheet(input: {
    readonly images: readonly {
      readonly dataUrl: string;
      readonly page: number;
    }[];
    readonly tile?: {
      readonly columns: number;
      readonly rows: number;
    };
  }): Promise<{
    readonly dataUrl: string;
    readonly height: number;
    readonly width: number;
  }>;
  loadUnit(input: {
    readonly embeddedUnits?: readonly {
      readonly unitData: Record<string, unknown>;
      readonly unitId: string;
      readonly unitType: UniverRenderEmbeddedUnit["unitType"];
    }[];
    readonly formulaReferenceUnits?: readonly {
      readonly unitData: Record<string, unknown>;
      readonly unitId: string;
      readonly unitType: UniverRenderFormulaReferenceUnit["unitType"];
    }[];
    readonly unitData: Record<string, unknown>;
    readonly unitKey: string;
    readonly unitType: UniverRenderUnit["unitType"];
  }): Promise<{
    readonly loaded: true;
    readonly unitKey: string;
  }>;
  measureText(input: {
    readonly doc: Record<string, unknown>;
    readonly wrapWidth?: number;
  }): Promise<UniverTextMetrics>;
  prepareBaseView(input: {
    readonly unitKey: string;
  }): Promise<{
    readonly clip: {
      readonly height: number;
      readonly width: number;
      readonly x: number;
      readonly y: number;
    };
  }>;
  beginPrintPdf(input: {
    readonly unitKey: string;
  }): Promise<{
    readonly pageCount: number;
    readonly sessionId: string;
  }>;
  finishPrintPdf(input: {
    readonly sessionId: string;
  }): Promise<void>;
  stabilizePrintPdf(input: {
    readonly sessionId: string;
  }): Promise<void>;
  renderBoardContent(input: {
    readonly elementIds?: readonly string[];
    readonly padding?: number;
    readonly region?: RenderBoundingBox;
    readonly scale: number;
    readonly unitKey: string;
  }): Promise<UniverRenderedBoardEvidence & {
    readonly dataUrl: string;
    readonly height: number;
    readonly width: number;
  }>;
  renderDocPage(input: {
    readonly page: number;
    readonly scale: number;
    readonly unitKey: string;
  }): Promise<{
    readonly dataUrl: string;
    readonly height: number;
    readonly width: number;
  }>;
  renderSheetRange(input: {
    readonly range: string;
    readonly scale: number;
    readonly sheetName?: string;
    readonly unitKey: string;
  }): Promise<{
    readonly dataUrl: string;
    readonly height: number;
    readonly width: number;
  }>;
  renderSlidePage(input: {
    readonly page: number;
    readonly scale: number;
    readonly unitKey: string;
  }): Promise<{
    readonly dataUrl: string;
    readonly height: number;
    readonly width: number;
  }>;
}
/** Bootstrap installed by the Node runtime before the Render Page executes. */
interface UniverRenderPageBootstrap {
  readonly license?: string;
}
/** Globals shared by the Node runtime and the caller-built Render Page. */
interface UniverRenderPageGlobals {
  readonly __univerRenderPageBootstrap: UniverRenderPageBootstrap;
  __univerRenderPage: UniverRenderPageApi;
}
//#endregion
export { type InstallUniverRenderBrowserOptions, type ProbeUniverRenderBrowserOptions, type RenderBoundingBox, type ResolveUniverRenderBrowserOptions, UNIVER_RENDER_BROWSER_CACHE_ENV_VAR, UNIVER_RENDER_BROWSER_DOWNLOAD_BASE_URL_ENV_VAR, UNIVER_RENDER_BROWSER_ENV_VAR, type UniverBoardLayoutAnalysis, type UniverBoardLayoutIssue, type UniverBoardLayoutIssueRule, type UniverBoardLayoutPoint, type UniverBoardLayoutResolvedRoute, type UniverBoardLayoutSuggestedAction, type UniverContactSheetInput, type UniverDocumentInput, type UniverPrintPdfInput, type UniverPrintPdfRuntime, type UniverPrintedPdf, type UniverRenderBrowserInstallation, type UniverRenderBrowserResolution, type UniverRenderEmbeddedUnit, UniverRenderError, type UniverRenderErrorCode, type UniverRenderFormulaReferenceUnit, type UniverRenderInput, type UniverRenderPageApi, type UniverRenderPageBootstrap, type UniverRenderPageGlobals, type UniverRenderRuntime, type UniverRenderRuntimeOptions, type UniverRenderUnit, type UniverRenderedBoardEvidence, type UniverRenderedImage, type UniverSlideElementLayout, type UniverSlideLayoutBox, type UniverSlideLayoutCapture, type UniverSlideLayoutInput, type UniverSlideLayoutRuntime, type UniverSlideLayoutText, type UniverSlidePageLayout, type UniverTextMeasureInput, type UniverTextMeasureRuntime, type UniverTextMetrics, createUniverRenderRuntime, installUniverRenderBrowser, isUniverRenderError, probeUniverRenderBrowser, resolveUniverRenderBrowser };