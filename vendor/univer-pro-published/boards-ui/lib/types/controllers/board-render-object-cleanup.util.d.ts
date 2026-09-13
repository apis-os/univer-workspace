import type { BaseObject } from '@univerjs/engine-render';
interface ISceneObjectLookup {
    getAllObjects?: () => BaseObject[];
}
export declare function detachBoardRenderObjectsFromGroups(objects: BaseObject[]): BaseObject[];
export declare function collectBoardRenderObjectsForCleanup(scene: ISceneObjectLookup, unitId: string, renderedObjectKeys: Set<string>): BaseObject[];
export {};
