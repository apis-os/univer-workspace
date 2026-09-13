import type { SlideModel } from '@univerjs-pro/slides';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import type { IUnitPresencePoint } from '@univerjs/ui';
import { ICommandService, RxDisposable, ThemeService } from '@univerjs/core';
import { SlideUnitPresenceUIAdapter } from '../services/slide-unit-presence-ui-adapter.service';
interface ISceneObjectBounds {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function resolveSlidePagePointer(scenePoint: IUnitPresencePoint, pageBounds: ISceneObjectBounds): IUnitPresencePoint | null;
export declare class SlideUnitPresenceRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _presenceAdapter;
    private readonly _commandService;
    private readonly _themeService;
    private readonly _selectionShapes;
    private readonly _pointerAnimations;
    private _animationFrameId;
    private _renderScheduled;
    private _isApplyingOverlays;
    private _latestPresences;
    constructor(_context: IRenderContext<SlideModel>, _presenceAdapter: SlideUnitPresenceUIAdapter, _commandService: ICommandService, _themeService: ThemeService);
    dispose(): void;
    private _init;
    private _scheduleRender;
    private _render;
    private _publishLocalPointer;
    private _clearLocalPointer;
    private _clearLocalPointerIfActive;
    private _syncPointers;
    private _startAnimation;
    private _animate;
    private _cancelAnimation;
    private _removePointer;
    private _removeAllPointers;
    private _removeSelectionShapes;
    private _getSceneObjectByKey;
    private _getObjectBounds;
}
export {};
