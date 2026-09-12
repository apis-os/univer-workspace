export interface IDocsTableHandlePressPoint {
    x: number;
    y: number;
}
export declare function shouldCommitDocsTableHandlePress(start: IDocsTableHandlePressPoint, end: IDocsTableHandlePressPoint | null, threshold: number): boolean;
