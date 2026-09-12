import type { IDisposable } from '@univerjs/core';
import type { ReactNode } from 'react';
import { Disposable } from '@univerjs/core';
export interface IBoardDomLayerRect {
    height: number;
    left: number;
    top: number;
    width: number;
}
export interface IBoardDomLayerItem {
    id: string;
    unitId: string;
    subUnitId: string;
    rect: IBoardDomLayerRect;
    content: ReactNode | (() => ReactNode);
    elementId?: string;
    interactive?: boolean;
    showResizeGuide?: boolean;
    zIndex?: number;
}
export declare class BoardDomLayerService extends Disposable {
    private readonly _items;
    private readonly _itemTokens;
    private readonly _items$;
    readonly items$: import("rxjs").Observable<readonly IBoardDomLayerItem[]>;
    dispose(): void;
    getItems(): readonly IBoardDomLayerItem[];
    registerItem(item: IBoardDomLayerItem): IDisposable;
    updateItem(id: string, patch: Partial<Omit<IBoardDomLayerItem, 'id'>>): void;
    unregisterItem(id: string): void;
    private _emitItems;
}
