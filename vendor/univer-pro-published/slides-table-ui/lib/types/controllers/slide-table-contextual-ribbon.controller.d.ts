import { ISlideDrawingService } from '@univerjs-pro/slides';
import { ISlideDrawingStateService, ISlideEmbedFloatingActiveService, ISlideEmbedFocusOwnerService, ISlideEmbedMountService } from '@univerjs-pro/slides-ui';
import { Disposable } from '@univerjs/core';
import { IMenuManagerService, IRibbonService } from '@univerjs/ui';
import { SlideTableFloatingToolbarService } from '../services/slide-table-floating-toolbar.service';
export declare class SlideTableContextualRibbonController extends Disposable {
    private readonly _menuManagerService;
    private readonly _ribbonService;
    private readonly _slideDrawingStateService;
    private readonly _slideDrawingService;
    private readonly _floatingToolbarService;
    private readonly _embedFocusOwnerService?;
    private readonly _embedFloatingActiveService?;
    private readonly _embedMountService?;
    private _tableDesignVisible;
    constructor(_menuManagerService: IMenuManagerService, _ribbonService: IRibbonService, _slideDrawingStateService: ISlideDrawingStateService, _slideDrawingService: ISlideDrawingService, _floatingToolbarService: SlideTableFloatingToolbarService, _embedFocusOwnerService?: ISlideEmbedFocusOwnerService | undefined, _embedFloatingActiveService?: ISlideEmbedFloatingActiveService | undefined, _embedMountService?: ISlideEmbedMountService | undefined);
    dispose(): void;
    private _listenSelection;
    private _isSingleTableSelection;
    private _isNonFullscreenFloatingEmbedChildSelection;
    private _isIsolatedEmbedChildSelection;
    private _isActiveFloatingEmbedHostSelection;
    private _hideTableDesignTab;
}
