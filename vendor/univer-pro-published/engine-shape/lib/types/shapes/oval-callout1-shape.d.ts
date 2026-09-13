import type { IPresetShapeConfig } from '../shape-type';
import { BaseShapeRenderModel } from '../render-engine/shape-render-model';
/** Legacy name for Excel's oval callout preset. */
export declare class OvalCallout1Shape extends BaseShapeRenderModel {
    readonly name: string;
    readonly presetShapeConfig: IPresetShapeConfig;
}
