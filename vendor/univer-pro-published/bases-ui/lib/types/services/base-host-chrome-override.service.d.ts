import type { UniverInstanceType } from '@univerjs/core';
import type { Observable } from 'rxjs';
export interface IBaseHostChromeOverride {
    entry?: string;
    hostUnitId?: string;
    childType?: UniverInstanceType;
    childUnitId?: string;
}
export interface IBaseHostChromeOverrideService {
    readonly override$: Observable<IBaseHostChromeOverride | null>;
    getOverride?(): IBaseHostChromeOverride | null;
}
export declare const IBaseHostChromeOverrideService: import("@wendellhu/redi").IdentifierDecorator<IBaseHostChromeOverrideService>;
