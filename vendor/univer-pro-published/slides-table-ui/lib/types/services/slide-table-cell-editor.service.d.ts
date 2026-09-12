import type { HorizontalAlign, IDisposable, IDocumentData, ITransformState, VerticalAlign } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export interface ISlideTableCellEditorRect {
    height: number;
    left: number;
    top: number;
    width: number;
}
export interface ISlideTableCellEditorMeasurement {
    width: number;
    minHeight: number;
    actualHeight: number;
    contentHeight: number;
    marginTop: number;
}
export interface ISlideTableCellEditorSession {
    column: number;
    documentData: IDocumentData;
    elementId: string;
    horizontalAlign?: HorizontalAlign;
    isHorizontal?: boolean;
    measurement?: ISlideTableCellEditorMeasurement;
    rect: ISlideTableCellEditorRect;
    row: number;
    subUnitId: string;
    tableId: string;
    tableTransform: ITransformState;
    unitId: string;
    verticalAlign?: VerticalAlign;
    onCancel?: (session: ISlideTableCellEditorSession) => void;
    onChange?: (session: ISlideTableCellEditorSession) => void;
    onComplete?: (session: ISlideTableCellEditorSession) => void;
}
export type IOpenSlideTableCellEditorSession = Omit<ISlideTableCellEditorSession, 'onCancel' | 'onChange' | 'onComplete'> & {
    onCancel?: (session: ISlideTableCellEditorSession) => void;
    onChange?: (session: ISlideTableCellEditorSession) => void;
    onComplete?: (session: ISlideTableCellEditorSession) => void;
};
export declare class SlideTableCellEditorService extends Disposable {
    private readonly _session$;
    readonly session$: import("rxjs").Observable<ISlideTableCellEditorSession | null>;
    open(session: IOpenSlideTableCellEditorSession): IDisposable;
    update(params: Partial<Pick<ISlideTableCellEditorSession, 'documentData' | 'measurement' | 'rect' | 'tableTransform'>>): void;
    complete(documentData?: IDocumentData): void;
    cancel(): void;
    close(): void;
    getSession(): ISlideTableCellEditorSession | null;
    subscribe(listener: (session: ISlideTableCellEditorSession | null) => void): IDisposable;
    dispose(): void;
}
