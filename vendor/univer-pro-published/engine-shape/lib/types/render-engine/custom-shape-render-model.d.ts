import type { IPresetShapeConfig } from '../shape-type';
import { BaseShapeRenderModel } from './shape-render-model';
export declare class CustomShapeRenderModel extends BaseShapeRenderModel {
    readonly name: string;
    readonly presetShapeConfig: IPresetShapeConfig;
    constructor(name: string, presetShapeConfig: IPresetShapeConfig);
}
