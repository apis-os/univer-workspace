import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
export interface ISlideRulerStateService {
    readonly visible$: Observable<boolean>;
    getVisible(): boolean;
    setVisible(visible: boolean): void;
    toggleVisible(): void;
}
export declare const ISlideRulerStateService: import("@wendellhu/redi").IdentifierDecorator<ISlideRulerStateService>;
export declare class SlideRulerStateService extends Disposable implements ISlideRulerStateService {
    private readonly _visible$;
    readonly visible$: Observable<boolean>;
    dispose(): void;
    getVisible(): boolean;
    setVisible(visible: boolean): void;
    toggleVisible(): void;
}
