import type { Observable } from 'rxjs';
import { Disposable, IConfigService } from '@univerjs/core';
export declare class SlideTableFloatingToolbarService extends Disposable {
    private readonly _enabled$;
    private readonly _fallbackVisible$;
    private readonly _fallbackVisibleSources;
    readonly enabled$: Observable<boolean>;
    readonly visible$: Observable<boolean>;
    constructor(configService: IConfigService);
    getEnabled(): boolean;
    setEnabled(enabled: boolean): void;
    getVisible(): boolean;
    setFallbackVisible(visible: boolean, source?: string): void;
    toggle(): void;
    dispose(): void;
}
