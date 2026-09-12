import type { ISlideTableCellStyle, ISlideTableSnapshot } from '@univerjs-pro/slides-table';
import type { HorizontalAlign, IDocumentData, ITransformState, VerticalAlign } from '@univerjs/core';
import type { ISlideTableCellEditorSession } from '../services/slide-table-cell-editor.service';
import type { ISlideTableSelection } from '../services/slide-table-selection.service';
export interface IResolveSlideTableCellEditorTargetParams {
    selection: ISlideTableSelection | null;
    table: ISlideTableSnapshot | null | undefined;
    tableHeight: number;
    tableWidth: number;
}
export interface ISlideTableCellEditorTarget {
    column: number;
    documentData: IDocumentData;
    cellStyle?: ISlideTableCellStyle;
    rect: {
        height: number;
        left: number;
        top: number;
        width: number;
    };
    row: number;
}
export interface ISlideTableCellEditorLayout {
    rect: {
        height: number;
        left: number;
        top: number;
        width: number;
    };
    scale: {
        scaleX: number;
        scaleY: number;
    };
    transform: {
        angle: number;
        flipX: boolean;
        flipY?: boolean;
    };
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
    isHorizontal?: boolean;
}
export interface IResolveSlideTableCellEditorLayoutParams {
    rect: {
        height: number;
        left: number;
        top: number;
        width: number;
    };
    scale?: {
        scaleX?: number;
        scaleY?: number;
    };
    scenePointToViewportPoint: (point: {
        x: number;
        y: number;
    }) => {
        x: number;
        y: number;
    };
    tableTransform: ITransformState;
}
export interface ISlideTableCellEditorCommitCommand {
    commandId: string;
    params: {
        column: number;
        row: number;
        tableId: string;
        textData: IDocumentData;
        unitId: string;
    };
}
export declare function resolveSlideTableCellEditorTarget(params: IResolveSlideTableCellEditorTargetParams): ISlideTableCellEditorTarget | null;
export declare function createSlideTableCellDocumentData(tableId: string, row: number, column: number, text?: string): IDocumentData;
export declare function replaceSlideTableCellDocumentText(documentData: IDocumentData, text: string): IDocumentData;
export declare function resolveSlideTableCellEditorLayout(params: IResolveSlideTableCellEditorLayoutParams): ISlideTableCellEditorLayout;
export declare function buildSlideTableCellEditorCommitCommand(session: ISlideTableCellEditorSession | null, documentData: IDocumentData, commandId: string): ISlideTableCellEditorCommitCommand | null;
export declare function normalizeSlideTableCellDocumentData(documentData: IDocumentData | undefined, fallbackId: string): IDocumentData;
