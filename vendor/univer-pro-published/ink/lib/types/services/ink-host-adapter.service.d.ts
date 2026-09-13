import type { IDisposable } from '@univerjs/core';
import type { IInkCustomShapePayload, InkToolType } from '../ink-types';
export interface IBeginInkModeParams {
    unitId: string;
    subUnitId: string;
    tool?: Exclude<InkToolType, 'eraser'> | InkToolType;
}
export interface ICreateInkCustomShapeParams {
    unitId: string;
    subUnitId: string;
    payload: IInkCustomShapePayload;
}
export interface IInkHostAdapter {
    beginInkMode(params: IBeginInkModeParams): boolean;
    createCustomShape?: (params: ICreateInkCustomShapeParams) => boolean | Promise<boolean>;
}
export interface IInkHostAdapterService {
    registerAdapter(adapter: IInkHostAdapter): IDisposable;
    beginInkMode(params: IBeginInkModeParams): boolean;
    createCustomShape(params: ICreateInkCustomShapeParams): Promise<boolean>;
}
export declare const IInkHostAdapterService: import("@wendellhu/redi").IdentifierDecorator<IInkHostAdapterService>;
export declare class InkHostAdapterService implements IInkHostAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IInkHostAdapter): IDisposable;
    beginInkMode(params: IBeginInkModeParams): boolean;
    createCustomShape(params: ICreateInkCustomShapeParams): Promise<boolean>;
}
