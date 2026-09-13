import type { IDrawingGroupNestedParam, IDrawingParam, IDrawingSearch } from '@univerjs/core';
import type { IDrawingSubunitMap } from '@univerjs/drawing';
import type { Observable } from 'rxjs';
import type { IBoardGroupElement, IBoardPageElement, IBoardThemeData } from '../board.type';
import type { IBoardElementJsonUndo1, IBoardElementOrderMapParam } from './board-element.service';
import { DrawingTypeEnum } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
export interface IBoardElementBridgeData extends IDrawingParam {
    elementId: string;
    element: IBoardPageElement;
}
export interface IBoardElementSearch {
    unitId: string;
    subUnitId: string;
    elementId: string;
}
export declare function boardElementSearchToDrawingSearch(param: IBoardElementSearch): IDrawingSearch;
export declare function drawingSearchToBoardElementSearch(param: IDrawingSearch): IBoardElementSearch;
export declare function boardElementTypeToDrawingType(type: IBoardPageElement['type']): DrawingTypeEnum;
export declare function boardElementToBridgeData(unitId: string, subUnitId: string, element: IBoardPageElement, themeData?: IBoardThemeData): IBoardElementBridgeData;
export interface IBoardResolvedElementBridgeDataMap {
    data: Record<string, IBoardElementBridgeData>;
    order: string[];
}
export declare function boardPageToBridgeDataMap(unitId: string, pageId: string, elements: Record<string, IBoardPageElement>, order: string[], themeData?: IBoardThemeData): IBoardResolvedElementBridgeDataMap;
export interface IBoardGroupRelationElementData {
    drawingId?: string;
    elementId?: string;
    groupId?: string;
    element: IBoardPageElement;
}
export declare function isBoardGroupElementData<T extends IBoardGroupRelationElementData>(drawing: T | null | undefined): drawing is T & {
    element: IBoardGroupElement;
};
export declare function getDirectBoardElementGroupChildIds<T extends IBoardGroupRelationElementData>(drawingData: Record<string, T>, groupId: string, drawingOrder?: string[]): string[];
export declare function collectBoardElementGroupDescendantIds<T extends IBoardGroupRelationElementData>(drawingData: Record<string, T>, groupId: string, drawingOrder?: string[]): string[];
export declare function collectBoardElementIdsForRemove<T extends IBoardGroupRelationElementData>(drawingData: Record<string, T>, drawingOrder: string[], drawingIds: string[]): string[];
export declare class BoardElementBridgeService extends UnitDrawingService<IBoardElementBridgeData> {
    get elementAdd$(): Observable<IBoardElementSearch[]>;
    get elementUpdate$(): Observable<IBoardElementSearch[]>;
    get elementRemove$(): Observable<IBoardElementSearch[]>;
    getElementDataForUnit(unitId: string): IDrawingSubunitMap<IBoardElementBridgeData>;
    removeElementDataForUnit(unitId: string): void;
    registerElementData(unitId: string, data: IDrawingSubunitMap<IBoardElementBridgeData>): void;
    getElementData(unitId: string, subUnitId: string): Record<string, IBoardElementBridgeData>;
    getElementOrder(unitId: string, subUnitId: string): string[];
    setElementOrder(unitId: string, subUnitId: string, elementIds: string[]): void;
    getElementById(unitId: string, subUnitId: string, elementId: string): IBoardElementBridgeData | undefined;
    getElementByParam(param: IBoardElementSearch): IBoardElementBridgeData | undefined;
    focusElements(params: IBoardElementSearch[] | null): void;
    getFocusElements(): IBoardElementBridgeData[];
    initializeElementNotification(unitId: string): void;
    addElementNotification(params: IBoardElementSearch[]): void;
    updateElementNotification(params: IBoardElementSearch[]): void;
    removeElementNotification(params: IBoardElementSearch[]): void;
    getBatchAddElementOp(insertParams: IBoardElementBridgeData[]): unknown;
    getBatchUpdateElementOp(updateParams: IBoardElementBridgeData[]): unknown;
    getBatchRemoveElementOp(removeParams: IBoardElementSearch[]): unknown;
    getFrontElementsOp(orderParams: IBoardElementOrderMapParam): IBoardElementJsonUndo1;
    getBackElementsOp(orderParams: IBoardElementOrderMapParam): IBoardElementJsonUndo1;
    orderElementUpdateNotification(orderParams: IBoardElementOrderMapParam): void;
    applyElementJson1(unitId: string, subUnitId: string, jsonOp: unknown): void;
    removeDrawingsWithoutGroupExpansion(removeParams: IDrawingSearch[]): IDrawingSearch[];
    getDrawingsByGroup(groupParam: IDrawingSearch): IBoardElementBridgeData[];
    getDrawingsByGroupNested(groupSearch: IDrawingSearch): IDrawingGroupNestedParam | null;
}
