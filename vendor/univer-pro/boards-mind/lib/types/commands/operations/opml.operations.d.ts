import type { IOperation } from '@univerjs/core';
import type { IMindMapRepresentationDiagnostic } from '../../representations/opml';
export interface IImportMindMapOpmlOperationParams {
    unitId: string;
    subUnitId: string;
    opml: string;
    left: number;
    top: number;
    containerId?: string;
    rootNodeId?: string;
    fileName?: string;
    insertIndex?: number;
}
export interface IImportMindMapOpmlOperationResult {
    success: boolean;
    diagnostics: IMindMapRepresentationDiagnostic[];
    containerId?: string;
    rootNodeId?: string;
    nodeCount?: number;
}
export interface IExportMindMapOpmlOperationParams {
    unitId: string;
    subUnitId: string;
    scopeId: string;
}
export declare const ImportMindMapOpmlOperation: IOperation<IImportMindMapOpmlOperationParams, IImportMindMapOpmlOperationResult>;
export declare const ExportMindMapOpmlOperation: IOperation<IExportMindMapOpmlOperationParams, string | false>;
export declare const MIND_MAP_OPML_OPERATIONS: (IOperation<IImportMindMapOpmlOperationParams, IImportMindMapOpmlOperationResult> | IOperation<IExportMindMapOpmlOperationParams, string | false>)[];
