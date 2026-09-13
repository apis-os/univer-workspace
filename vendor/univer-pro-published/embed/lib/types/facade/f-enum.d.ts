import { FEnum } from '@univerjs/core/facade';
export declare const FEmbedHostSurface: {
    readonly DocBlock: "docs-custom-block";
    readonly SheetTab: "sheets-sheet-tab";
    readonly SheetFloating: "sheets-floating-object";
    readonly BaseTable: "bases-table-list-block";
    readonly SlidePage: "slides-page-list-block";
    readonly SlideFloating: "slides-floating-object";
    readonly BoardFloating: "boards-floating-object";
};
export type FEmbedHostSurface = typeof FEmbedHostSurface[keyof typeof FEmbedHostSurface] | (string & {});
export interface IFEmbedEnumMixin {
    get FEmbedHostSurface(): typeof FEmbedHostSurface;
}
export declare class FEmbedEnumMixin extends FEnum implements IFEmbedEnumMixin {
    get FEmbedHostSurface(): typeof FEmbedHostSurface;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFEmbedEnumMixin {
    }
}
