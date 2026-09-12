import type { ISlideDrawing, SlideSceneTypeEnum } from '@univerjs-pro/slides';
import type { Nullable } from '@univerjs/core';
import type { BaseObject } from '@univerjs/engine-render';
import type { ObjectProvider } from '../views/render';
interface ISceneLike {
    getObject(key: string): Nullable<BaseObject>;
    getObjectIncludeInGroup?: (key: string) => Nullable<BaseObject>;
    addObject(obj: BaseObject, layer: number): void;
}
export interface IGroupHierarchyConfig {
    unitId: string;
    subUnitId: string;
    pageOffsetLeft: number;
    pageOffsetTop: number;
    sceneType: SlideSceneTypeEnum;
    showPlaceholder: boolean;
    animateFormulaPresentationOnCreate?: boolean;
    objectProvider: ObjectProvider;
    renderObjectMap: Map<string, BaseObject>;
    requestRender?: () => void;
}
/**
 * Assemble the group hierarchy for a slide page.
 *
 * After all drawing objects have been added flat to the scene, this function
 * walks the group tree (depth-first, children before parents) and calls
 * `addObjects`/`setBaseBound` on each DrawingGroupObject so that rendering
 * and hit-testing reflect the correct parent-child structure.
 *
 * Safe to call from both the main canvas render controller and from the
 * thumbnail bar (use pageOffsetLeft/Top = 0 for thumbnails).
 */
export declare function assembleGroupHierarchy(drawingData: Record<string, ISlideDrawing>, drawingOrder: string[], scene: ISceneLike, config: IGroupHierarchyConfig): void;
export {};
