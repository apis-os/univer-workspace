import type { IBaseSnapshot, IFieldSnapshot, IRecordSnapshot, ITableSnapshot, IViewSnapshot } from '@univerjs/core';
import type { IRecordDetailFieldItem } from '../../components/editors/record-detail/RecordDetailPanel';
import type { IBaseResolvedRecordLink } from '../../services/base-record-link-resolver.service';
import { IBaseUIStateService } from '../../services/base-ui-state.service';
export declare function openCalendarRecordDetailFromPopover(stateService: IBaseUIStateService, recordId: string): void;
export declare function RenderBaseCalendarRecordPopover(): import("react").JSX.Element | null;
export declare function calendarVisibleFieldIds(table: ITableSnapshot, view: IViewSnapshot): string[];
interface ICalendarRecordDetailFieldOptions {
    snapshot: IBaseSnapshot;
    resolveRecordLinks: (field: IFieldSnapshot, value: unknown, limit: number) => readonly IBaseResolvedRecordLink[];
    onOpenLinkedRecord?: (field: IFieldSnapshot, recordId: string, siblingRecordIds: readonly string[]) => void;
}
export declare function buildCalendarRecordDetailFields(table: ITableSnapshot, view: IViewSnapshot, record: IRecordSnapshot | null, draftValues: Record<string, unknown> | null, options?: ICalendarRecordDetailFieldOptions): IRecordDetailFieldItem[];
export {};
