import type { ICustomShapeTextData, IShapeData, IShapeRect, IShapeTextBodyBehavior, IShapeTextData } from '@univerjs-pro/engine-shape';
import type { HorizontalAlign, IDocumentData, ITransformState, Nullable, VerticalAlign, WrapStrategy } from '@univerjs/core';
import type { IRender } from '@univerjs/engine-render';
import type { CSSProperties } from 'react';
import type { Observable } from 'rxjs';
export interface IShapeTextEditingParams {
    unitId: string;
    subUnitId: string;
    shapeId: string;
    shapeKey: string;
    visible: boolean;
    selectAllOnFocus?: boolean;
}
export interface IShapeTextEditingService {
    editingParams$: Observable<Nullable<IShapeTextEditingParams>>;
    onSavingEditorData$: Observable<Nullable<boolean>>;
    setEditing(params: Nullable<IShapeTextEditingParams>): void;
    completeEditing?(event?: PointerEvent): void;
    cancelEditing?(): void;
}
export declare function stripShapeTextPlainMarker(shapeText: IShapeTextData | ICustomShapeTextData | null | undefined): ICustomShapeTextData;
export interface IShapeTextEditorModel {
    getShapeTextData(): ICustomShapeTextData;
    getShapeTextRect(rect: IShapeRect): IShapeRect;
}
export interface IShapeTextDataContext {
    shapeText: ICustomShapeTextData;
    bodyBehavior: IShapeTextBodyBehavior;
    doc?: IDocumentData;
    verticalAlign: VerticalAlign;
    horizontalAlign: HorizontalAlign;
    wrapStrategy: WrapStrategy;
    autoFitNoWrap: boolean;
    textRect: IShapeRect;
    transform: ITransformState;
    isHorizontal: boolean;
    isTextBox: boolean;
}
export interface IShapeTextUpdateParams {
    unitId: string;
    subUnitId: string;
    shapeId: string;
    shapeText: ICustomShapeTextData;
    oldShapeText: ICustomShapeTextData;
    hostSize?: IShapeTextHostSizeUpdateParams;
}
export interface IShapeTextHostHeightUpdateParams {
    unitId: string;
    subUnitId: string;
    shapeId: string;
    height: number;
}
export interface IShapeTextHostSizeUpdateParams {
    unitId: string;
    subUnitId: string;
    shapeId: string;
    width: number;
    height: number;
}
export interface IShapeTextEditorAdapter {
    getShapeModel(unitId: string, subUnitId: string, shapeId: string): Nullable<IShapeTextEditorModel>;
    getShapeData?(unitId: string, subUnitId: string, shapeId: string): Nullable<IShapeData>;
    getDrawingTransform(unitId: string, subUnitId: string, shapeId: string): Nullable<ITransformState>;
    updateShapeText(params: IShapeTextUpdateParams): void;
    updateHostHeight?(params: IShapeTextHostHeightUpdateParams): void;
    updateHostSize?(params: IShapeTextHostSizeUpdateParams): void;
    previewHostSize?(params: IShapeTextHostSizeUpdateParams): void;
    allowHostSizeShrink?(params: IShapeTextEditingParams): boolean;
    deferHostSizeUpdateDuringEditing?(params: IShapeTextEditingParams): boolean;
    /** Styles the host-sized viewport, not the growing text-render surface inside it. */
    getEditingContainerStyle?(params: IShapeTextEditingParams): CSSProperties | undefined;
    commitOnEnter?(params: IShapeTextEditingParams): boolean;
    commitOnEscape?(params: IShapeTextEditingParams): boolean;
}
export interface IShapeTextEditorViewportKeys {
    main: string;
    leftTop?: string;
    top?: string;
    left?: string;
}
export interface IShapeTextEditorPositionOffset {
    left: number;
    top: number;
}
export interface IShapeTextEditorPositionOptions {
    viewportKeys: IShapeTextEditorViewportKeys;
    getSkeleton?: (renderUnit: IRender, editingParams: IShapeTextEditingParams) => unknown;
    getHostTransform?: (renderUnit: IRender, editingParams: IShapeTextEditingParams) => Nullable<ITransformState>;
    getPositionOffset?: (renderUnit: IRender, editingParams: IShapeTextEditingParams, positionRoot?: Element | null) => Nullable<IShapeTextEditorPositionOffset>;
}
