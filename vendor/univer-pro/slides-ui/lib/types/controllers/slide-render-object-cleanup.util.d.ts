import type { BaseObject } from '@univerjs/engine-render';
interface ISceneObjectLookup {
    getAllObjects?: () => BaseObject[];
}
export declare function detachSlideRenderObjectsFromGroups(objects: BaseObject[]): BaseObject[];
export declare function collectSlideRenderObjectsForCleanup(scene: ISceneObjectLookup, unitId: string, renderObjectMap: Map<string, BaseObject>): BaseObject[];
export {};
