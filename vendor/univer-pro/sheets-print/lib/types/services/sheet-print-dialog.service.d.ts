import { Disposable } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';
export interface ISheetPrintDialogService {
    readonly visible$: BehaviorSubject<boolean>;
    readonly visible: boolean;
    readonly preparing$: BehaviorSubject<boolean>;
    readonly preparing: boolean;
    open(): void;
    close(): void;
    setPreparing(preparing: boolean): void;
}
export declare const ISheetPrintDialogService: import("@wendellhu/redi").IdentifierDecorator<ISheetPrintDialogService>;
export declare class SheetPrintDialogService extends Disposable implements ISheetPrintDialogService {
    readonly visible$: BehaviorSubject<boolean>;
    readonly preparing$: BehaviorSubject<boolean>;
    get visible(): boolean;
    get preparing(): boolean;
    open(): void;
    close(): void;
    setPreparing(preparing: boolean): void;
    dispose(): void;
}
