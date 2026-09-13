import type { IShapeRef } from '@univerjs-pro/engine-shape';
import { Disposable, IContextService } from '@univerjs/core';
export type MobileShapeEditorMode = 'text' | 'formula' | 'style';
export interface IMobileShapeEditorState {
    mode: MobileShapeEditorMode;
    ref: IShapeRef;
}
export declare class MobileShapeEditorService extends Disposable {
    private readonly _contextService;
    private readonly _state$;
    constructor(_contextService: IContextService);
    readonly state$: import("rxjs").Observable<IMobileShapeEditorState | null>;
    getState(): IMobileShapeEditorState | null;
    open(mode: MobileShapeEditorMode, ref: IShapeRef): void;
    close(): void;
    dispose(): void;
}
