interface IBoardSceneObjectsEventAdapter {
    disableObjectsEvent: () => void;
    enableObjectsEvent: () => void;
}
export declare function setBoardSceneObjectsEventLock(scene: IBoardSceneObjectsEventAdapter, owner: string, locked: boolean): void;
export declare function releaseBoardSceneObjectsEventLock(scene: IBoardSceneObjectsEventAdapter, owner: string): void;
export {};
