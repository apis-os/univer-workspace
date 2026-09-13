import type { IBaseRect } from '@univerjs/core';
import type { BaseUIStateService } from './base-ui-state.service';
import { Disposable } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';
export interface IStartEditingCellInput {
    tableId: string;
    viewId: string;
    recordId: string;
    fieldId: string;
    initialQuery?: string;
    autoFocus?: boolean;
    virtual?: boolean;
    cellRect?: IBaseRect;
}
export declare const IBaseEditorService: import("@wendellhu/redi").IdentifierDecorator<BaseEditorService>;
export declare class BaseEditorService extends Disposable {
    private readonly _stateService;
    private _editingCell;
    readonly editingCell$: BehaviorSubject<IStartEditingCellInput | null>;
    constructor(_stateService: BaseUIStateService);
    startEditingCell(input: IStartEditingCellInput): void;
    stopEditingCell(): void;
    getEditingCell(): IStartEditingCellInput | null;
}
