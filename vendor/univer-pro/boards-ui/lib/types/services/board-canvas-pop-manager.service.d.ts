import type { IDisposable } from '@univerjs/core';
import type { BaseObject, IBoundRectNoAngle } from '@univerjs/engine-render';
import type { IPopup } from '@univerjs/ui';
import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ICanvasPopupService } from '@univerjs/ui';
import { IBoardUIStateService } from './board-ui-state.service';
export interface IBoardCanvasPopup extends Pick<IPopup, 'componentKey' | 'direction' | 'excludeOutside' | 'hideOnInvisible' | 'offset' | 'onClickOutside'> {
    anchorBoundResolver?: (targetObject: BaseObject) => IBoundRectNoAngle;
    anchorUpdates$?: Observable<unknown>;
    extraProps?: Record<string, unknown>;
    mask?: boolean;
}
export declare class BoardCanvasPopManagerService extends Disposable {
    private readonly _globalPopupManagerService;
    private readonly _renderManagerService;
    private readonly _boardUIStateService;
    constructor(_globalPopupManagerService: ICanvasPopupService, _renderManagerService: IRenderManagerService, _boardUIStateService: IBoardUIStateService);
    private _createObjectPositionObserver;
    attachPopupToObject(unitId: string, subUnitId: string, targetObject: BaseObject, popup: IBoardCanvasPopup): IDisposable;
    attachPopupToPoint(unitId: string, subUnitId: string, point: {
        x: number;
        y: number;
    }, popup: IBoardCanvasPopup): IDisposable;
}
