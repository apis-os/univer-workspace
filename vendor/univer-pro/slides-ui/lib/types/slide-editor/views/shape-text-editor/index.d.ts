import type { IShapeTextEditingParams } from '@univerjs-pro/shape-editor-ui';
import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { ITransformState, Nullable } from '@univerjs/core';
import type { ISlideTextEditingParams } from '../../services/slide-text-editing.service';
import { SlideTextEditingService } from '../../services/slide-text-editing.service';
export declare const ShapeTextEditorContainer: import("react").MemoExoticComponent<() => import("react").JSX.Element>;
export declare function resolveSmartArtPresentationTransform(drawing: ISlideDrawing, presentationShapeId: string, renderedOuterTransform?: ITransformState): ITransformState | null;
export declare function createSlideShapeTextEditingService(editingService: Pick<SlideTextEditingService, 'cancelEditing' | 'completeEditing' | 'editingParams$' | 'getEditing' | 'onSavingEditorData$' | 'setEditing'>, restoreCanvasFocus: (unitId: string) => void): {
    editingParams$: import("rxjs").Observable<Nullable<ISlideTextEditingParams>>;
    onSavingEditorData$: import("rxjs").Observable<Nullable<boolean>>;
    setEditing: (params: Nullable<IShapeTextEditingParams>) => void;
    completeEditing: (event?: PointerEvent) => void;
    cancelEditing: () => void;
};
