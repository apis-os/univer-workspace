import type { IShapeData, ShapeBevelPresetEnum } from '@univerjs-pro/engine-shape';
import { ShapeCameraPresetEnum } from '@univerjs-pro/engine-shape';
export type ShapeEffectCategory = 'shadow' | 'reflection' | 'glow' | 'softEdge' | 'bevel' | 'rotation3d';
/**
 * Values observed by applying the native PowerPoint gallery to a newly inserted rectangle.
 * Existing 3D properties not owned by the selected gallery remain intact through mergeEffectPatch.
 */
export declare function createBevelPresetPatch(preset: ShapeBevelPresetEnum): IShapeData;
export declare function createRotationPresetPatch(preset: ShapeCameraPresetEnum): IShapeData;
export declare const ROTATION_GROUPS: Record<string, ShapeCameraPresetEnum[]>;
export declare function mergeEffectPatch(shapeData: IShapeData, patch: IShapeData): IShapeData;
export declare function ShapeEffectButton(props: {
    categories?: ShapeEffectCategory[];
    shapeData: IShapeData;
    disabled?: boolean;
    dropdownSide?: 'top' | 'bottom';
    titleKey?: string;
    onUpdateShapeData: (patch: IShapeData) => void;
}): import("react").JSX.Element;
