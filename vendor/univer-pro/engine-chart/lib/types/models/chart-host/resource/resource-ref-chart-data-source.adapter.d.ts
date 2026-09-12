import type { IResourceRef } from '@univerjs-pro/embed';
export declare const RESOURCE_REF_CHART_DATA_SOURCE_KIND = "resource-ref";
export interface IResourceRefChartDataSourceReference {
    readonly kind: typeof RESOURCE_REF_CHART_DATA_SOURCE_KIND;
    readonly ref: IResourceRef;
}
export interface IResourceRefChartDataSourceInput extends Omit<IResourceRef, 'file'> {
    readonly file?: IResourceRef['file'];
}
interface ICompatibleResourceRefChartDataSourceReference {
    readonly kind: typeof RESOURCE_REF_CHART_DATA_SOURCE_KIND;
    readonly ref: IResourceRefChartDataSourceInput;
}
export declare class ResourceRefChartDataSourceAdapter {
    static toReference(ref: IResourceRefChartDataSourceInput): IResourceRefChartDataSourceReference;
    static isReference(reference: unknown): reference is Readonly<IResourceRefChartDataSourceReference>;
    static assertReference(reference: unknown): asserts reference is Readonly<ICompatibleResourceRefChartDataSourceReference>;
    static fromReference(reference: Readonly<ICompatibleResourceRefChartDataSourceReference>): IResourceRef;
    private static _normalizeInput;
    private static _isCompatibleReference;
}
export {};
