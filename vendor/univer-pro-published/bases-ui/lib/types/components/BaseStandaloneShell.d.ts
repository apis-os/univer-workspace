import type { IRecordDetailFieldItem } from './editors/record-detail/RecordDetailPanel';
import type { IBaseToolbarState } from './toolbar/BaseToolbar';
import type { IBaseViewTabItem } from './ViewTabs';
import { UniverInstanceType } from '@univerjs/core';
export interface IBaseTableSidebarItem {
    id: string;
    name: string;
    kind?: 'table' | 'dashboard';
    active?: boolean;
    readonly?: boolean;
    childType?: UniverInstanceType;
}
export interface IBaseTableSidebarProps {
    title: string;
    items: IBaseTableSidebarItem[];
    collapsed?: boolean;
    pendingRenameItemId?: string | null;
    onActivateItem?: (itemId: string) => void;
    onAddTable?: () => void;
    onAddDashboard?: () => void;
    onRenameTable?: (itemId: string, name: string) => void;
    isTableNameValid?: (itemId: string, name: string) => boolean;
    getTableNameError?: (itemId: string, name: string) => string | undefined;
    onPendingRenameItemConsumed?: (itemId: string) => void;
    onDuplicateTable?: (itemId: string) => void;
    onDeleteTable?: (itemId: string) => void;
    dashboardLabels?: {
        add: string;
        configure: (name: string) => string;
        delete: string;
        new: string;
        rename: string;
        search: string;
        section: string;
    };
    onCollapse?: () => void;
    onExpand?: () => void;
}
export interface IBaseTableSidebarFrameProps extends IBaseTableSidebarProps {
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    onResizeWidth?: (width: number) => void;
}
export type { IBaseToolbarState, IBaseViewTabItem, IRecordDetailFieldItem };
export declare function BaseTableSidebarFrame({ width: widthProp, minWidth, maxWidth, onResizeWidth, ...sidebarProps }: IBaseTableSidebarFrameProps): import("react").JSX.Element;
export declare function BaseTableSidebar({ items, pendingRenameItemId, onActivateItem, onAddTable, onAddDashboard, onRenameTable, isTableNameValid, getTableNameError, onPendingRenameItemConsumed, onDuplicateTable, onDeleteTable, dashboardLabels, onCollapse, }: IBaseTableSidebarProps): import("react").JSX.Element;
