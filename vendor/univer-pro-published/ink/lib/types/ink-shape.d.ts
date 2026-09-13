import type { IInkCustomShapePayload, IInkSourceModel, IInkStyle, InkToolType } from './ink-types';
export interface IBuildInkCustomShapePayloadParams {
    model: IInkSourceModel;
    style?: IInkStyle;
    tool?: Exclude<InkToolType, 'eraser'>;
    sourceModel?: IInkSourceModel;
}
export declare function buildInkCustomShapePayload(params: IBuildInkCustomShapePayloadParams): IInkCustomShapePayload;
