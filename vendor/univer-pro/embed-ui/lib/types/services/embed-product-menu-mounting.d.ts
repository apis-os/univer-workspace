import type { DependencyIdentifier, IDisposable, Injector } from '@univerjs/core';
import type { IEmbedProductMenuMountContext } from '../types/embed-ui';
import { UniverInstanceType } from '@univerjs/core';
import { IRibbonService } from '@univerjs/ui';
export declare function mountEmbedProductRibbonMenu(context: IEmbedProductMenuMountContext): IDisposable | undefined;
export declare function createEmbedProductRibbonRuntime(injector: Injector, params: {
    childType: UniverInstanceType;
    childUnitId?: string;
    embedId?: string;
    menuSchema?: unknown;
    menuTitlePrefix?: string;
    activeRibbonTab?: string;
    scopedActionServiceTokens?: readonly DependencyIdentifier<unknown>[];
}): {
    injector: Injector;
    ribbonService: IRibbonService;
    disposable: IDisposable;
};
