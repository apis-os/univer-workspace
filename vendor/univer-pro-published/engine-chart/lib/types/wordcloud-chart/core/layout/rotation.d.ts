export interface IPickRotationDegOptions {
    readonly angles: readonly unknown[];
    readonly seed?: string | number;
    readonly index?: number;
    readonly key?: string;
    readonly text?: string;
    readonly ratio?: number;
}
export declare function pickRotationDeg(options: IPickRotationDegOptions): number;
export declare function normalizeRotationAngles(angles: readonly unknown[] | undefined): number[];
