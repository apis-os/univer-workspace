import type { IPrintPreparationContext } from '@univerjs-pro/print';
import type { IDocumentOffsetConfig, IDocumentSkeletonPage } from '@univerjs/engine-render';
import type { IDocPrintPageLayout } from '../views/doc-print-page-canvas-view';
import { IPrintPreparationService } from '@univerjs-pro/print';
import { Disposable, DocumentFlavor, IConfigService, Injector, IUniverInstanceService } from '@univerjs/core';
import { DocPrintInterceptorService } from '@univerjs/docs-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
import { DocPrintPageCanvasView } from '../views/doc-print-page-canvas-view';
export declare const BUILD_TIMESTAMP: number;
export declare const DEFAULT_PRINT_LIMIT = 1;
type PreparedPrintBlockRange = NonNullable<IPrintPreparationContext['pageBreakRanges']>[number];
export declare const getPrintInfoByLicense: (defaultPrintLimit: number, ls?: string, pbk?: string) => {
    page: number;
    isPro: boolean;
    timeValid: boolean;
};
export declare class DocPrintService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private readonly _injector;
    private readonly _configService;
    private readonly _printPreparationService;
    private readonly _docPrintInterceptorService;
    private readonly _preparing$;
    private _activePrint?;
    readonly preparing$: import("rxjs").Observable<boolean>;
    constructor(_univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _injector: Injector, _configService: IConfigService, _printPreparationService: IPrintPreparationService, _docPrintInterceptorService: DocPrintInterceptorService);
    print(unitId: string): Promise<boolean>;
    private _print;
    dispose(): void;
}
export declare function runDocPrintDialog(pageInstances: readonly Pick<DocPrintPageCanvasView, 'dispose' | 'render'>[], container: HTMLElement, style: HTMLStyleElement, onReady: () => void): Promise<boolean>;
export declare function resolveDocPrintPixelRatio(documentFlavor: DocumentFlavor | undefined): number;
export declare function createDocPrintPageInstances(pageLayouts: IDocPrintPageLayout[], injector: Injector, unitId: string, offsetConfig: IDocumentOffsetConfig, pageSize: {
    height: number;
    width: number;
}, container: HTMLElement, pixelRatio: number): Promise<DocPrintPageCanvasView[]>;
export declare function resolveModernDocPrintPageLayouts(contentHeight: number, pageSize: {
    height: number;
    width: number;
}, offsetConfig: IDocumentOffsetConfig, unitId: string, firstPage: IDocumentSkeletonPage, preparedBlockRanges?: readonly PreparedPrintBlockRange[]): IDocPrintPageLayout[];
export declare function resolvePreparedDocContentHeight(skeletonContentHeight: number, docsTop: number, preparationContext: Pick<IPrintPreparationContext, 'contentHeight' | 'contentHeightAdjustment'>): number;
export {};
