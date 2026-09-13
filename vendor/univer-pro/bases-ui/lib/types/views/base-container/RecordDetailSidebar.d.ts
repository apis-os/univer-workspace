import type { ITableSnapshot, IViewSnapshot } from '@univerjs/core';
import type { IBaseRecordDetailPanelLayout } from './right-panel-layout';
export declare function RenderBaseRecordDetailSidebar({ layout }: {
    layout: IBaseRecordDetailPanelLayout;
}): import("react").JSX.Element | null;
export declare function resolveRecordDetailFieldOrder(table: ITableSnapshot, view: IViewSnapshot): string[];
