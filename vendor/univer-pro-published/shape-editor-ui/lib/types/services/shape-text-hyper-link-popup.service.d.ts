import type { IDisposable, Nullable } from '@univerjs/core';
import type { IShapeTextHyperLinkInfo } from '../commands/shape-text-hyper-link.command';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { DocCanvasPopManagerService } from '@univerjs/docs-ui';
export declare class ShapeTextHyperLinkPopupService extends Disposable {
    private readonly _docCanvasPopupManagerService;
    private readonly _docSelectionManagerService;
    private readonly _univerInstanceService;
    private readonly _editingLink$;
    private readonly _showingLink$;
    readonly editingLink$: import("rxjs").Observable<Nullable<IShapeTextHyperLinkInfo>>;
    readonly showingLink$: import("rxjs").Observable<Nullable<IShapeTextHyperLinkInfo>>;
    private _editPopup;
    private _editPopupUnitId;
    private _infoPopup;
    private _infoPopupSuppressed;
    private _infoPopupSuppressionTimer;
    constructor(_docCanvasPopupManagerService: DocCanvasPopManagerService, _docSelectionManagerService: DocSelectionManagerService, _univerInstanceService: IUniverInstanceService);
    dispose(): void;
    get editing(): Nullable<IShapeTextHyperLinkInfo>;
    get showing(): Nullable<IShapeTextHyperLinkInfo>;
    showEditPopup(unitId: string, link: Nullable<IShapeTextHyperLinkInfo>): Nullable<IDisposable>;
    hideEditPopup(unitId?: string): void;
    showInfoPopup(info: IShapeTextHyperLinkInfo, attachPopup?: () => IDisposable): Nullable<IDisposable>;
    hideInfoPopup(): void;
    hideInfoPopupOnPointerDown(): void;
}
