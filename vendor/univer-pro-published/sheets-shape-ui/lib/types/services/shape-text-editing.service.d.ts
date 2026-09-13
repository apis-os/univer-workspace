import type { Nullable } from '@univerjs/core';
import type { Observable } from 'rxjs';
import { Disposable, IPermissionService } from '@univerjs/core';
export interface IEditingParams {
    unitId: string;
    subUnitId: string;
    shapeId: string;
    shapeKey: string;
    visible: boolean;
}
export declare class ShapeTextEditingService extends Disposable {
    private readonly _permissionService;
    private readonly _editingParams$;
    readonly editingParams$: Observable<Nullable<IEditingParams>>;
    private readonly _onSavingEditorData$;
    readonly onSavingEditorData$: Observable<Nullable<boolean>>;
    constructor(_permissionService: IPermissionService);
    dispose(): void;
    setEditing(params: Nullable<IEditingParams>): void;
    setOnSavingEditorData(params: Nullable<boolean>): void;
    getEditing(): Nullable<IEditingParams>;
    private _canEdit;
    /**
     * Keep the session mounted for one frame after raising the save signal.
     * The shared shape-text editor persists its document while that signal is true;
     * clearing the session first would discard newly entered text on external click.
     */
    completeEditing(_event?: PointerEvent): void;
    /** Cancel without raising the save signal, for example when Escape is pressed. */
    cancelEditing(): void;
}
