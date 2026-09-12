import type { ReactElement } from 'react';
import type { BaseRightPanelMode } from '../../config/config';
import type { IBaseRecordDetailPanelLayout } from './right-panel-layout';
import type { IBaseWorkbenchContext } from './WorkbenchContext';
interface IBaseContentViewProps {
    context: IBaseWorkbenchContext | null;
    renderActiveCellEditor: () => ReactElement | null;
    renderCalendarRecordPopover: () => ReactElement | null;
    renderRecordDetailSidebar: (layout: IBaseRecordDetailPanelLayout) => ReactElement | null;
}
export declare function resolveBaseRightPanelMode(viewType: string | undefined, configuredMode: BaseRightPanelMode): BaseRightPanelMode;
export declare function BaseContentView({ context, renderActiveCellEditor, renderCalendarRecordPopover, renderRecordDetailSidebar, }: IBaseContentViewProps): import("react").JSX.Element | null;
export {};
