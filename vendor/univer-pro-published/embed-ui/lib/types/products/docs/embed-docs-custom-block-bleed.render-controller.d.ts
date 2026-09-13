import type { DocumentDataModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { EmbedModelService } from '@univerjs-pro/embed';
import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { DocViewScaleService } from '@univerjs/docs-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
import { EmbedContentSizeRegistryService } from '../../services/embed-content-size-registry.service';
import { EmbedMountService } from '../../services/embed-mount.service';
export declare function createDocsCustomBlockZoomRefreshScheduler(refresh: () => void, settleDelay?: number): {
    dispose: () => void;
    schedule: () => void;
};
export declare class EmbedDocsCustomBlockBleedRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _contentSizeRegistry;
    private readonly _embedMountService;
    private readonly _embedModelService;
    private readonly _renderManagerService;
    private readonly _docViewScaleService;
    private readonly _resolvedChildUnits;
    private readonly _pendingChildUnits;
    constructor(_context: IRenderContext<DocumentDataModel>, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _contentSizeRegistry: EmbedContentSizeRegistryService, _embedMountService: EmbedMountService, _embedModelService: EmbedModelService, _renderManagerService: IRenderManagerService, _docViewScaleService: DocViewScaleService);
    private _getHostUnit;
    private _getHostSnapshot;
    private _rerenderHostDoc;
    private _refreshHostDocCustomBlockPresentation;
    private _refreshHostDocZoom;
    private _resolveChildUnitId;
    private _getChildUnitForMeasurement;
    private _getDocsLeft;
    private _getVisibleCanvasDocumentRect;
}
export declare function observeDocsCustomBlockCanvasResize(canvas: Element | null | undefined, onResize: () => void): {
    dispose: () => void;
} | undefined;
