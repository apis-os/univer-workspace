import { Disposable, Injector } from '@univerjs/core';
import { EmbedRuntimeFocusCoordinator } from '../services/embed-runtime-focus-coordinator.service';
export declare class EmbedHostPopupLifecycleController extends Disposable {
    private readonly _injector;
    private readonly _runtimeFocusCoordinator;
    private _suspendedSheetNote;
    private _suppressedSheetNoteHostUnitId;
    constructor(_injector: Injector, _runtimeFocusCoordinator: EmbedRuntimeFocusCoordinator);
    private _syncHostPopupVisibility;
    private _hideDocParagraphMenu;
    private _clearHostDrawingSelection;
    private _syncPersistentSheetNotes;
    private _syncActiveSheetNote;
}
