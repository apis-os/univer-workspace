import type { IBoardConnectorElement, IBoardElementData } from '@univerjs-pro/boards';
import type { ICustomShapeTextData, IShapeRect } from '@univerjs-pro/engine-shape';
import type { ITransformState, Nullable } from '@univerjs/core';
import type { CSSProperties } from 'react';
import { IRenderManagerService } from '@univerjs/engine-render';
import { BoardTextEditingService } from '../services/board-text-editing.service';
export declare const BoardShapeTextEditorContainer: import("react").MemoExoticComponent<(props?: {
    positionRoot?: HTMLElement;
}) => import("react").JSX.Element>;
export declare function createBoardShapeTextEditingService(editingService: BoardTextEditingService, restoreCanvasFocus: (unitId: string) => void): Pick<BoardTextEditingService, 'editingParams$' | 'onSavingEditorData$' | 'setEditing' | 'completeEditing' | 'cancelEditing'>;
export declare function focusBoardCanvasAfterShapeTextEditing(renderManagerService: IRenderManagerService, unitId: string): void;
export declare function resolveBoardShapeTextEditorPositionOffset(canvasElement: Element | null | undefined, positionRoot?: Element): {
    left: number;
    top: number;
} | null;
export declare function resolveBoardShapeTextEditorTransform(options: {
    elementData: IBoardElementData | undefined;
    elementDataMap?: Record<string, IBoardElementData>;
    renderManagerService: IRenderManagerService;
    labelId?: string;
    shapeId: string;
    unitId: string;
}): Nullable<ITransformState>;
export declare function shouldAllowBoardShapeTextHostShrink(elementData: IBoardElementData | undefined): boolean;
export declare function shouldDeferBoardShapeTextHostSizeUpdateDuringEditing(elementData: IBoardElementData | undefined): boolean;
export declare function previewBoardShapeTextHostSize(options: {
    elementData: IBoardElementData;
    height: number;
    renderManagerService: IRenderManagerService;
    unitId: string;
    width: number;
}): boolean;
export declare function getBoardShapeTextEditingContainerStyle(elementData: IBoardElementData | undefined, labelId?: string): CSSProperties | undefined;
export declare function resolveBoardConnectorLabelTextEditorRect(rect: IShapeRect): IShapeRect;
export declare function resolveBoardConnectorLabelShapeTextData(element: IBoardConnectorElement, labelId?: string): ICustomShapeTextData;
export declare function resolveBoardShapeTextData(elementData: IBoardElementData): ICustomShapeTextData;
