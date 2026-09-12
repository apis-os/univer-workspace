import type { ITransformState } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { IBoardPageElement } from '../board.type';
import type { IBoardElementSearch } from './board-element-bridge.service';
export interface IBoardElementData {
    unitId: string;
    subUnitId: string;
    elementId: string;
    transform?: ITransformState | null | void;
    transforms?: ITransformState[] | null | void;
    groupId?: string;
    hidden?: boolean;
    element: IBoardPageElement;
}
export interface IBoardElementMapItem {
    data: Record<string, IBoardElementData>;
    order: string[];
}
export interface IBoardElementOrderMapParam {
    unitId: string;
    subUnitId: string;
    elementIds: string[];
}
export interface IBoardElementJsonUndo1 {
    undo: unknown;
    redo: unknown;
    unitId: string;
    subUnitId: string;
    objects?: unknown;
}
export interface IBoardElementSubunitMap {
    [subUnitId: string]: IBoardElementMapItem;
}
export interface IBoardElementService {
    readonly elementAdd$: Observable<IBoardElementSearch[]>;
    readonly elementUpdate$: Observable<IBoardElementSearch[]>;
    readonly elementRemove$: Observable<IBoardElementSearch[]>;
    readonly elementOrder$: Observable<IBoardElementOrderMapParam>;
    getElementDataForUnit(unitId: string): IBoardElementSubunitMap;
    removeElementDataForUnit(unitId: string): void;
    registerElementData(unitId: string, data: IBoardElementSubunitMap): void;
    getElementData(unitId: string, subUnitId: string): Record<string, IBoardElementData>;
    getElementOrder(unitId: string, subUnitId: string): string[];
    setElementOrder(unitId: string, subUnitId: string, elementIds: string[]): void;
    getElementById(unitId: string, subUnitId: string, elementId: string): IBoardElementData | undefined;
    getElementByParam(param: IBoardElementSearch): IBoardElementData | undefined;
    focusElements(params: IBoardElementSearch[] | null): void;
    getFocusElements(): IBoardElementData[];
    initializeElementNotification(unitId: string): void;
    addElementNotification(params: IBoardElementSearch[]): void;
    updateElementNotification(params: IBoardElementSearch[]): void;
    removeElementNotification(params: IBoardElementSearch[]): void;
    getBatchAddElementOp(insertParams: IBoardElementData[]): unknown;
    getBatchUpdateElementOp(updateParams: IBoardElementData[]): unknown;
    getBatchRemoveElementOp(removeParams: IBoardElementSearch[]): unknown;
    getFrontElementsOp(orderParams: IBoardElementOrderMapParam): IBoardElementJsonUndo1;
    getBackElementsOp(orderParams: IBoardElementOrderMapParam): IBoardElementJsonUndo1;
    orderUpdateNotification(orderParams: IBoardElementOrderMapParam): void;
    applyElementJson1(unitId: string, subUnitId: string, jsonOp: unknown): void;
}
export declare const IBoardElementService: import("@wendellhu/redi").IdentifierDecorator<IBoardElementService>;
export declare class BoardElementService implements IBoardElementService {
    private readonly _bridgeService;
    get elementAdd$(): Observable<IBoardElementSearch[]>;
    get elementUpdate$(): Observable<IBoardElementSearch[]>;
    get elementRemove$(): Observable<IBoardElementSearch[]>;
    get elementOrder$(): Observable<IBoardElementOrderMapParam>;
    getElementDataForUnit(unitId: string): IBoardElementSubunitMap;
    removeElementDataForUnit(unitId: string): void;
    registerElementData(unitId: string, data: IBoardElementSubunitMap): void;
    getElementData(unitId: string, subUnitId: string): Record<string, IBoardElementData>;
    getElementOrder(unitId: string, subUnitId: string): string[];
    setElementOrder(unitId: string, subUnitId: string, elementIds: string[]): void;
    getElementById(unitId: string, subUnitId: string, elementId: string): IBoardElementData | undefined;
    getElementByParam(param: IBoardElementSearch): IBoardElementData | undefined;
    focusElements(params: IBoardElementSearch[] | null): void;
    getFocusElements(): IBoardElementData[];
    initializeElementNotification(unitId: string): void;
    addElementNotification(params: IBoardElementSearch[]): void;
    updateElementNotification(params: IBoardElementSearch[]): void;
    removeElementNotification(params: IBoardElementSearch[]): void;
    getBatchAddElementOp(insertParams: IBoardElementData[]): unknown;
    getBatchUpdateElementOp(updateParams: IBoardElementData[]): unknown;
    getBatchRemoveElementOp(removeParams: IBoardElementSearch[]): unknown;
    getFrontElementsOp(orderParams: IBoardElementOrderMapParam): IBoardElementJsonUndo1;
    getBackElementsOp(orderParams: IBoardElementOrderMapParam): IBoardElementJsonUndo1;
    orderUpdateNotification(orderParams: IBoardElementOrderMapParam): void;
    applyElementJson1(unitId: string, subUnitId: string, jsonOp: unknown): void;
}
