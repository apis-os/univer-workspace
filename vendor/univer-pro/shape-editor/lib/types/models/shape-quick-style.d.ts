import type { IBasicShapeData, ICxnShapeData, IShapeData, IShapeLineStyle } from '@univerjs-pro/engine-shape';
import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
export type ShapeQuickStyleType = 'shape' | 'line' | 'text';
interface IShapeQuickStylePresetBase {
    id: string;
    type: ShapeQuickStyleType;
}
export interface IShapeQuickStylePreset extends IShapeQuickStylePresetBase {
    type: 'shape';
    fill: IBasicShapeData['fill'];
    stroke: IShapeLineStyle;
}
export interface IShapeLineQuickStylePreset extends IShapeQuickStylePresetBase {
    type: 'line';
    group: 'solid' | 'dashed';
    stroke: IShapeLineStyle;
    ln: ICxnShapeData['ln'];
}
export interface IShapeTextQuickStylePreset extends IShapeQuickStylePresetBase {
    type: 'text';
    textStyle: {
        color: string;
        fontSize: number;
        bold: boolean;
    };
}
export type ShapeQuickStylePreset = IShapeQuickStylePreset | IShapeLineQuickStylePreset | IShapeTextQuickStylePreset;
export declare const SHAPE_QUICK_STYLE_PRESETS: readonly IShapeQuickStylePreset[];
export declare const SHAPE_LINE_QUICK_STYLE_PRESETS: readonly IShapeLineQuickStylePreset[];
export declare const SHAPE_TEXT_QUICK_STYLE_PRESETS: readonly IShapeTextQuickStylePreset[];
export declare const ALL_SHAPE_QUICK_STYLE_PRESETS: readonly ShapeQuickStylePreset[];
export declare function getShapeQuickStylePreset(presetId: string): ShapeQuickStylePreset | null;
export declare function getShapeQuickStylePresets(type: ShapeQuickStyleType): readonly ShapeQuickStylePreset[];
export declare function getShapeQuickStyleType(shapeData: IShapeData): Exclude<ShapeQuickStyleType, 'text'>;
export declare function applyQuickStyleToShapeData(shapeData: IShapeData, preset: ShapeQuickStylePreset): IShapeData | null;
export declare function matchesShapeQuickStyle(shapeData: IShapeData, preset: ShapeQuickStylePreset): boolean;
export declare function resolveActiveShapeQuickStylePresetId(shapeData: IShapeData): string | null;
export declare function cloneShapeDataForType(shapeData: IShapeData, shapeType: ShapeTypeEnum): IShapeData | null;
export {};
