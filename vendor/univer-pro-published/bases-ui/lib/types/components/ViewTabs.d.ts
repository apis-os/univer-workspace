import type { ComponentType, ReactNode } from 'react';
import { BaseViewType } from '@univerjs/core';
export interface IBaseViewTabItem {
    id: string;
    name: string;
    type: BaseViewType;
    icon?: ComponentType;
    readonly?: boolean;
}
export interface IViewTabsProps {
    views: IBaseViewTabItem[];
    activeViewId: string;
    className?: string;
    readonly?: boolean;
    onActivateView: (viewId: string) => void;
    onAddView: (anchor: HTMLElement) => void;
    addViewDropdown?: {
        open: boolean;
        overlay: ReactNode;
        onOpenChange: (open: boolean) => void;
    };
    onSetViewAsFirst?: (viewId: string) => void;
    onMoveView?: (viewId: string, target: {
        beforeViewId?: string;
        afterViewId?: string;
    }) => void;
    onRenameView?: (viewId: string, name: string) => void;
    onDuplicateView?: (viewId: string) => void;
    onDeleteView?: (viewId: string) => void;
    onConfigureView?: (anchor: HTMLElement, viewId: string) => void;
}
export declare function ViewTabs(props: IViewTabsProps): import("react").JSX.Element;
