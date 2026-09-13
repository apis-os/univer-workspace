import type { IPdfPathObject, PdfObject } from '../types';
import type { IPdfEditorObjectStylePatch } from './types';
export declare const PDF_EDITOR_DIVIDER_METADATA: {
    readonly univerEditorObjectKind: "divider";
};
export declare const DEFAULT_PDF_EDITOR_DIVIDER_STROKE: {
    readonly color: "#CDD0D8";
    readonly width: number;
    readonly lineCap: "butt";
    readonly lineJoin: "miter";
};
export declare function isPdfEditorDividerObject(object: PdfObject): object is IPdfPathObject;
export declare function syncPdfEditorDividerGeometryToBbox(object: PdfObject, isDivider?: boolean): PdfObject;
export declare function applyPdfEditorPathStrokePatch(object: PdfObject, style: IPdfEditorObjectStylePatch): PdfObject;
