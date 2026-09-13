import type { BaseViewProjection, ICommandInfo, ITableSnapshot, IViewSnapshot } from '@univerjs/core';
import type { BaseVirtualRecordReason, IBaseVirtualRecordState } from '../services/base-ui-state.service';
import { IBaseProjectionService } from '@univerjs-pro/bases';
import { Disposable, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IBaseUIStateService } from '../services/base-ui-state.service';
export declare function resolveVirtualRecordWarningLabel(localeService: Pick<LocaleService, 't'>, reason: BaseVirtualRecordReason): string;
export interface IVirtualRecordReasonInput {
    recordExistsAfter: boolean;
    beforeGroupPath?: string;
    afterGroupPath?: string;
    beforeIndex: number;
    afterIndex?: number;
    hasGroupRules: boolean;
    hasSortRules: boolean;
}
export declare function resolveVirtualRecordReason(input: IVirtualRecordReasonInput): BaseVirtualRecordReason;
interface IVirtualRecordRowEntry {
    recordId: string;
    values: Record<string, unknown>;
    logicalY: number;
    rowNumber: number;
    actualLogicalY?: number;
    groupPath?: string;
    index: number;
    created?: boolean;
    fromVirtual?: boolean;
    reason?: BaseVirtualRecordReason;
    warningLabel?: string;
    createdAt?: number;
}
interface IPendingVirtualRecordCommand {
    unitId: string;
    tableId: string;
    viewId: string;
    viewType: 'grid' | 'gantt';
    records: IVirtualRecordRowEntry[];
    hasGroupRules: boolean;
    hasSortRules: boolean;
}
export declare class BaseVirtualRecordController extends Disposable {
    private readonly _stateService;
    private readonly _projectionService;
    private readonly _univerInstanceService;
    private readonly _localeService;
    private readonly _commandService;
    private readonly _pendingCommands;
    constructor(_stateService: IBaseUIStateService, _projectionService: IBaseProjectionService, _univerInstanceService: IUniverInstanceService, _localeService: LocaleService, _commandService: ICommandService);
    private _captureBeforeCommand;
    private _applyAfterCommand;
}
export declare function resolvePendingVirtualRecordStates(pending: IPendingVirtualRecordCommand, table: ITableSnapshot, projection: Extract<BaseViewProjection, {
    type: 'grid' | 'gantt';
}>, collapsedGroupPaths: ReadonlySet<string> | undefined, view: IViewSnapshot, localeService: Pick<LocaleService, 't'>, createdAt: number): IBaseVirtualRecordState[];
export declare function getPendingVirtualRecordRowEntries(command: ICommandInfo, table: ITableSnapshot, projection: Extract<BaseViewProjection, {
    type: 'grid' | 'gantt';
}>, collapsedGroupPaths: ReadonlySet<string> | undefined, view: IViewSnapshot, virtualRecords?: IBaseVirtualRecordState[]): IVirtualRecordRowEntry[];
export {};
