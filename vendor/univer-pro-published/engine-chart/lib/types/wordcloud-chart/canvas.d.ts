import type { IWordCloudLayoutMask, IWordCloudLayoutOptions, IWordCloudLayoutResult, IWordCloudMaskGrid, IWordCloudProtocolSpec, IWordCloudTextMeasurer } from './types';
export interface IWordCloudLayoutRuntime {
    measurer: IWordCloudTextMeasurer;
    mask?: IWordCloudLayoutMask;
    maskGrid?: IWordCloudMaskGrid;
}
export declare function layoutWordCloudChart(spec: IWordCloudProtocolSpec, runtime: IWordCloudLayoutRuntime): IWordCloudLayoutResult;
export declare function resolveLayoutOptions(spec: IWordCloudProtocolSpec): IWordCloudLayoutOptions;
