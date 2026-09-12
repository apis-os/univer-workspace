import type { BoardConnectorRouting, IBoardConnectorStyle, IBoardContainerElement, IBoardElementData, IBoardSwimlaneLane, IBoardTextStyle } from '@univerjs-pro/boards';
import type { IShapeData } from '@univerjs-pro/engine-shape';
import type { buildShapeTextDataUpdate } from '@univerjs-pro/shape-editor-ui';
import type { ITextStyle } from '@univerjs/core';
import { HorizontalAlign, VerticalAlign } from '@univerjs/core';
export type BoardFloatingToolbarOwner = 'common' | 'connector' | 'mind-map' | 'none' | 'shape' | 'table';
export interface IBoardFloatingToolbarSelection {
    elements: IBoardElementData[];
    owner: BoardFloatingToolbarOwner;
}
export interface IResolveBoardFloatingToolbarSelectionOptions {
    context: {
        unitId: string;
        subUnitId: string;
    } | null;
    selectedIds: readonly string[];
    getElementById: (unitId: string, subUnitId: string, elementId: string) => IBoardElementData | null | undefined;
}
export interface IBoardSwimlaneLaneTypographyTarget {
    container: IBoardContainerElement;
    lane: IBoardSwimlaneLane;
}
export declare function boardTextStyleToToolbarTextStyle(style: IBoardTextStyle | undefined, fallbackFontSize: number): ITextStyle;
export declare function getContainerTitleStyle(element: IBoardContainerElement | undefined): IBoardTextStyle | undefined;
export declare function getSwimlaneLaneTypographyTarget(element: IBoardContainerElement | undefined, laneId: string | undefined): IBoardSwimlaneLaneTypographyTarget | null;
export declare function getSwimlaneLaneTitleTextModel(target: IBoardSwimlaneLaneTypographyTarget | null): {
    ha?: HorizontalAlign;
    va?: VerticalAlign;
} | null;
export declare function getSwimlaneContainerTitleTextModel(element: IBoardContainerElement | undefined): {
    ha?: HorizontalAlign;
    va?: VerticalAlign;
} | null;
export declare function isUnfocusedSwimlaneTypographyTarget(element: IBoardContainerElement, laneTarget: IBoardSwimlaneLaneTypographyTarget | null): boolean;
export declare function buildTitleStyleUpdate(currentStyle: IBoardTextStyle | undefined, params: Parameters<typeof buildShapeTextDataUpdate>[1]): IBoardTextStyle;
export declare function buildContainerTitleStyleUpdate(element: IBoardContainerElement, params: Parameters<typeof buildShapeTextDataUpdate>[1]): IBoardTextStyle;
/**
 * Resolves one owner for the selection-level floating toolbar.
 *
 * Shape and connector toolbars support field-level batch updates. Other
 * homogeneous multi-selections use the common toolbar until their commands are
 * batch-safe, which prevents a type toolbar from silently editing only one item.
 */
export declare function resolveBoardFloatingToolbarSelection(options: IResolveBoardFloatingToolbarSelectionOptions): IBoardFloatingToolbarSelection;
export declare function resolveCommonBoardShapeData(elements: readonly IBoardElementData[]): IShapeData | undefined;
export declare function resolveChangedBoardShapeDataPatch(previous: IShapeData | undefined, next: IShapeData | undefined): IShapeData | undefined;
export declare function mergeBoardShapeDataPatch(current: IShapeData, patch: IShapeData): IShapeData;
export declare function resolveCommonBoardConnectorStyle(elements: readonly IBoardElementData[]): Partial<IBoardConnectorStyle>;
export declare function resolveCommonBoardConnectorRouting(elements: readonly IBoardElementData[]): BoardConnectorRouting | undefined;
