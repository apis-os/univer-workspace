import type { IDisposable } from '@univerjs/core';
import type { BaseObject, IBoundRectNoAngle } from '@univerjs/engine-render';
import type { IPopup } from '@univerjs/ui';
import { Disposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ICanvasPopupService } from '@univerjs/ui';
export interface ISlideCanvasPopup extends Pick<IPopup, 'componentKey' | 'direction' | 'excludeOutside' | 'hideOnInvisible' | 'offset' | 'onClickOutside'> {
    anchorBoundResolver?: (targetObject: BaseObject) => IBoundRectNoAngle;
    extraProps?: Record<string, unknown>;
    mask?: boolean;
}
export declare class SlideCanvasPopManagerService extends Disposable {
    private readonly _globalPopupManagerService;
    private readonly _renderManagerService;
    constructor(_globalPopupManagerService: ICanvasPopupService, _renderManagerService: IRenderManagerService);
    private _createObjectPositionObserver;
    attachPopupToObject(unitId: string, subUnitId: string, targetObject: BaseObject, popup: ISlideCanvasPopup): IDisposable;
    attachPopupToClientRect(unitId: string, subUnitId: string, bound: IBoundRectNoAngle, popup: ISlideCanvasPopup): IDisposable;
}
