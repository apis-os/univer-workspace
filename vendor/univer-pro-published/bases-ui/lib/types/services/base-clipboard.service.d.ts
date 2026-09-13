import type { BaseCellValue, IProjectedRow, ITableSnapshot } from '@univerjs/core';
import { IBaseProjectionService } from '@univerjs-pro/bases';
import { IAttachmentIoService } from '@univerjs-pro/collaboration-client';
import { BaseFieldType, Disposable, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IClipboardInterfaceService, IMessageService } from '@univerjs/ui';
import { IBaseUIStateService } from './base-ui-state.service';
export declare const BASE_CLIPBOARD_MIME_TYPE = "application/vnd.univer.base+json";
export declare const IBaseClipboardService: import("@wendellhu/redi").IdentifierDecorator<BaseClipboardService>;
type ClipboardWriteData = Pick<DataTransfer, 'setData'>;
type ClipboardReadData = Pick<DataTransfer, 'getData'> & {
    files: ArrayLike<File>;
    items: ArrayLike<DataTransferItem>;
};
export type BaseClipboardPayload = {
    type: 'records';
    recordIds: string[];
} | {
    type: 'fields';
    fieldIds: string[];
} | {
    type: 'cells';
    cells: Array<{
        recordId: string;
        fieldId: string;
        value: unknown;
    }>;
};
export interface IBaseClipboardFieldMeta {
    id: string;
    name: string;
    type: BaseFieldType;
    options?: IBaseClipboardOption[];
    recordLink?: {
        targetTableId: string;
        multiple: boolean;
    };
}
export interface IBaseClipboardOption {
    id: string;
    name: string;
}
export interface IBaseClipboardRecordData {
    recordId: string;
    values: Record<string, BaseCellValue>;
    displayValues: Record<string, string>;
}
export interface IBaseClipboardInternalPayload {
    version: 1;
    unitId: string;
    tableId: string;
    viewId: string;
    fields: IBaseClipboardFieldMeta[];
    records: IBaseClipboardRecordData[];
}
export interface ISerializeBaseClipboardRangeInput {
    unitId: string;
    table: ITableSnapshot;
    viewId: string;
    rows: IProjectedRow[];
    fieldIds: string[];
    personOptions?: IBaseClipboardOption[];
    groupOptions?: IBaseClipboardOption[];
}
export interface ISerializedBaseClipboardRange {
    recordCount: number;
    plainText: string;
    html: string;
    customData: Record<string, string>;
    payload: IBaseClipboardInternalPayload;
}
export interface IResolveBaseClipboardPastePatchesInput {
    table: ITableSnapshot;
    visibleRows: IProjectedRow[];
    visibleFieldIds: string[];
    startRecordId: string;
    startFieldId: string;
    payload?: IBaseClipboardInternalPayload | null;
    text?: string;
    personOptions?: IBaseClipboardOption[];
    groupOptions?: IBaseClipboardOption[];
}
export declare class BaseClipboardService extends Disposable {
    private readonly _clipboardInterfaceService;
    private readonly _stateService;
    private readonly _projectionService;
    private readonly _instanceService;
    private readonly _commandService;
    private readonly _permissionService;
    private readonly _messageService;
    private readonly _localeService;
    private readonly _attachmentIoService;
    private readonly _configService;
    private _payload;
    private _lastSerialized;
    private readonly _attachmentPasteTargets;
    constructor(_clipboardInterfaceService: IClipboardInterfaceService, _stateService: IBaseUIStateService, _projectionService: IBaseProjectionService, _instanceService: IUniverInstanceService, _commandService: ICommandService, _permissionService: IPermissionService, _messageService: IMessageService, _localeService: LocaleService, _attachmentIoService: IAttachmentIoService, _configService: IConfigService);
    setClipboard(payload: BaseClipboardPayload | null): void;
    getClipboard(): BaseClipboardPayload | null;
    copy(): Promise<boolean>;
    copyToClipboardData(clipboardData: ClipboardWriteData | null): boolean;
    paste(): Promise<boolean>;
    pasteFromClipboardData(clipboardData: ClipboardReadData | null): Promise<boolean>;
    private _serializeCurrentSelection;
    private _pasteClipboard;
    private _pasteAttachments;
    private _canEditAttachmentTarget;
    private _showAttachmentUploadError;
    private _showCopiedMessage;
    private _resolveContext;
    private _getPasteTargetKey;
    private _readClipboard;
    private _getConfig;
}
export declare function serializeBaseClipboardRange(input: ISerializeBaseClipboardRangeInput): ISerializedBaseClipboardRange;
export declare function resolveBaseClipboardPastePatches(input: IResolveBaseClipboardPastePatchesInput): Array<{
    recordId: string;
    values: Record<string, BaseCellValue>;
}>;
export {};
