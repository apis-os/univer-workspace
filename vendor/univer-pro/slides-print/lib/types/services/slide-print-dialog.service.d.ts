import type { Observable } from 'rxjs';
import type { ISlidePrintOptions } from '../common/types';
import { Disposable } from '@univerjs/core';
export interface ISlidePrintDialogService {
    readonly visible$: Observable<boolean>;
    readonly options$: Observable<ISlidePrintOptions>;
    readonly visible: boolean;
    readonly options: ISlidePrintOptions;
    open(options?: ISlidePrintOptions): void;
    close(): void;
    updateOptions(options: Partial<ISlidePrintOptions>): void;
}
export declare const ISlidePrintDialogService: import("@wendellhu/redi").IdentifierDecorator<ISlidePrintDialogService>;
export declare class SlidePrintDialogService extends Disposable implements ISlidePrintDialogService {
    private readonly _visible$;
    private readonly _options$;
    readonly visible$: Observable<boolean>;
    readonly options$: Observable<ISlidePrintOptions>;
    get visible(): boolean;
    get options(): ISlidePrintOptions;
    open(options?: ISlidePrintOptions): void;
    close(): void;
    updateOptions(options: Partial<ISlidePrintOptions>): void;
    dispose(): void;
}
