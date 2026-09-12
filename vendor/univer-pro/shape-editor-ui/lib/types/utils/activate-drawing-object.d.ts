import type { IDrawingSearch } from '@univerjs/core';
import type { IRenderManagerService } from '@univerjs/engine-render';
interface ISceneObjectLike {
    oKey: string;
}
interface ISceneLike {
    getObject?: (key: string) => unknown;
    getObjectIncludeInGroup?: (key: string) => unknown;
    getTransformer?: () => {
        clearSelectedObjects?: () => void;
    };
    getTransformerByCreate?: () => {
        activeAnObject?: (object: ISceneObjectLike) => void;
    };
}
interface IRenderManagerLike {
    getRenderUnitById: (unitId: string) => {
        scene?: ISceneLike;
    } | undefined;
}
export declare function activateDrawingObject(renderManagerService: IRenderManagerLike | IRenderManagerService, drawingSearch: IDrawingSearch): boolean;
export declare function clearActiveDrawingObjects(renderManagerService: IRenderManagerLike | IRenderManagerService, unitId: string): boolean;
export {};
