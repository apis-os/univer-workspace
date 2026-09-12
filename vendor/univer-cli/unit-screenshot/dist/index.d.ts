import { UniverBoardLayoutAnalysis, UniverRenderRuntime, UniverRenderUnit } from "@univer-cli/univer-render-runtime";
//#region src/errors.d.ts
type UnitScreenshotErrorCode = "INVALID_INPUT" | "PAGE_LIMIT_EXCEEDED" | "PIXEL_LIMIT_EXCEEDED" | "RENDER_RESULT_INVALID" | "SCREENSHOT_ABORTED";
declare class UnitScreenshotError extends Error {
  readonly code: UnitScreenshotErrorCode;
  constructor(code: UnitScreenshotErrorCode, message: string, options?: ErrorOptions);
}
declare function isUnitScreenshotError(value: unknown): value is UnitScreenshotError;
//#endregion
//#region src/types.d.ts
type UnitInput<TType extends UniverRenderUnit["unitType"]> = Extract<UniverRenderUnit, {
  readonly unitType: TType;
}>;
type ScreenshotPageSelector = number | string;
interface ScreenshotBoundingBox {
  readonly left: number;
  readonly top: number;
  readonly width: number;
  readonly height: number;
}
type UnitScreenshotInput = ((UnitInput<"sheet"> & {
  readonly target?: {
    readonly kind: "sheet-viewport";
    readonly scale?: number;
  } | {
    readonly kind: "sheet-range";
    readonly range: string;
    readonly scale?: number;
    readonly sheetName?: string;
  };
}) | (UnitInput<"doc"> & {
  readonly target?: {
    readonly kind: "doc-pages";
    readonly pages?: readonly number[];
    readonly scale?: number;
  };
}) | (UnitInput<"slide"> & {
  readonly target?: {
    readonly contactSheet?: {
      readonly tile?: {
        readonly columns: number;
        readonly rows: number;
      };
    };
    readonly kind: "slide-pages";
    readonly pages?: readonly ScreenshotPageSelector[];
    readonly scale?: number;
  };
}) | (UnitInput<"board"> & {
  readonly target?: {
    readonly kind: "board-content";
    readonly elementIds?: readonly string[];
    readonly padding?: number;
    readonly region?: ScreenshotBoundingBox;
    readonly scale?: number;
  };
}) | (UnitInput<"base"> & {
  readonly target?: {
    readonly kind: "base-view";
    readonly scale?: number;
  };
})) & {
  readonly signal?: AbortSignal;
};
interface ScreenshotImage {
  readonly boardSelector?: {
    readonly kind: "region";
    readonly region: ScreenshotBoundingBox;
  } | {
    readonly kind: "elements";
    readonly elementIds: readonly string[];
  };
  readonly bytes: Uint8Array;
  readonly contentBounds?: ScreenshotBoundingBox;
  readonly height: number;
  readonly mediaType: "image/png";
  readonly name: string;
  readonly layoutAnalysis?: UniverBoardLayoutAnalysis;
  readonly padding?: number;
  readonly page?: number;
  readonly pageId?: string;
  readonly range?: string;
  readonly role?: "board-content" | "contact-slide";
  readonly scale?: number;
  readonly sheetName?: string;
  readonly tiles?: number;
  readonly width: number;
}
interface UnitScreenshotResult {
  readonly images: readonly ScreenshotImage[];
  readonly unitId: string;
  readonly unitType: UniverRenderUnit["unitType"];
}
interface UnitScreenshotLimits {
  readonly maxPages: number;
  readonly maxPixels: number;
}
interface UnitScreenshotOptions {
  readonly limits?: Partial<UnitScreenshotLimits>;
  readonly runtime: UniverRenderRuntime;
}
interface UnitScreenshot {
  capture(input: UnitScreenshotInput): Promise<UnitScreenshotResult>;
}
//#endregion
//#region src/unit-screenshot.d.ts
declare function createUnitScreenshot(options: UnitScreenshotOptions): UnitScreenshot;
//#endregion
//#region src/image-assets.d.ts
interface ScreenshotImageAssetResolveInput {
  readonly declaredMediaType?: string;
  readonly signal?: AbortSignal;
  readonly source: string;
}
interface ScreenshotImageAsset {
  readonly bytes: Uint8Array;
  readonly contentLength?: number;
  readonly mediaType: string;
}
interface ScreenshotImageAssetResolver {
  resolve(input: ScreenshotImageAssetResolveInput): Promise<ScreenshotImageAsset | undefined>;
}
declare function resolveUnitScreenshotImageAssets(unit: UniverRenderUnit, resolver: ScreenshotImageAssetResolver, signal?: AbortSignal): Promise<UniverRenderUnit>;
//#endregion
export { type ScreenshotBoundingBox, type ScreenshotImage, type ScreenshotImageAsset, type ScreenshotImageAssetResolveInput, type ScreenshotImageAssetResolver, type ScreenshotPageSelector, type UnitScreenshot, UnitScreenshotError, type UnitScreenshotErrorCode, type UnitScreenshotInput, type UnitScreenshotLimits, type UnitScreenshotOptions, type UnitScreenshotResult, createUnitScreenshot, isUnitScreenshotError, resolveUnitScreenshotImageAssets };