import type { BaseDataModel, BaseViewType, ITableSnapshot, IViewSnapshot } from '@univerjs/core';
export declare function BaseFullscreenTablePanelPortal(props: {
    embedId: string;
    childUnitId: string;
    base: BaseDataModel;
    activeTable: ITableSnapshot;
}): import("react").ReactPortal | null;
export declare function BaseEmbedFullscreenViewTabs(props: {
    embedId: string;
    activeView: IViewSnapshot;
    views: IViewSnapshot[];
    addViewOpen: boolean;
    onAddViewOpenChange: (open: boolean) => void;
    onActivateView: (viewId: string) => void;
    onAddView: (type: BaseViewType) => void;
    onSetViewAsFirst: (viewId: string) => void;
    onMoveView: (viewId: string, target: {
        beforeViewId?: string;
        afterViewId?: string;
    }) => void;
    onRenameView: (viewId: string, name: string) => void;
    onDuplicateView: (viewId: string) => void;
    onConfigureView: (anchor: HTMLElement, viewId: string) => void;
    onDeleteView: (viewId: string) => void;
    readonly?: boolean;
}): import("react").JSX.Element;
export declare function getVisibleBaseTables(snapshot: ReturnType<BaseDataModel['getSnapshot']> | undefined): ITableSnapshot[];
export declare function createBaseFullscreenTableSidebarItems(snapshot: ReturnType<BaseDataModel['getSnapshot']> | undefined, activeTableId: string | null | undefined, readonly?: boolean): {
    id: string;
    name: string;
    active: boolean;
    readonly: boolean;
}[];
