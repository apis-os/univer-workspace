import { DocsListSelectionMode } from '@univerjs-pro/docs-list';
export interface IDocsListMarkerInfo {
    paragraphStartIndex: number;
    listId: string;
    listType: string;
    nestingLevel: number;
    segmentId?: string;
}
export interface IDocsListMenuAnchor {
    x: number;
    y: number;
}
export interface IDocsListMenuState {
    marker: IDocsListMarkerInfo | null;
    anchor: IDocsListMenuAnchor | null;
    open: boolean;
}
export interface IDocsListMarkerSelection {
    marker: IDocsListMarkerInfo;
    mode: DocsListSelectionMode;
}
export declare class DocsListSelectionService {
    private readonly _menuState$;
    private readonly _markerSelection$;
    readonly menuState$: import("rxjs").Observable<IDocsListMenuState>;
    readonly markerSelection$: import("rxjs").Observable<IDocsListMarkerSelection | null>;
    get menuState(): IDocsListMenuState;
    get markerSelection(): IDocsListMarkerSelection | null;
    nextClickMode(marker: IDocsListMarkerInfo): DocsListSelectionMode;
    contextMenuMode(marker: IDocsListMarkerInfo): DocsListSelectionMode;
    openMenu(marker: IDocsListMarkerInfo, anchor: IDocsListMenuAnchor): void;
    closeMenu(): void;
    setMarkerSelection(marker: IDocsListMarkerInfo, mode: DocsListSelectionMode): void;
    clearMarkerSelection(): void;
    private _getMarkerGroupKey;
    private _getMarkerListKey;
}
