import type { IShapeScene3D } from '@univerjs-pro/engine-shape';
import { ShapeBevelPresetEnum, ShapeCameraPresetEnum } from '@univerjs-pro/engine-shape';
export declare const BEVEL_PRESET_ORDER: readonly [ShapeBevelPresetEnum.RelaxedInset, ShapeBevelPresetEnum.Circle, ShapeBevelPresetEnum.Slope, ShapeBevelPresetEnum.Cross, ShapeBevelPresetEnum.Angle, ShapeBevelPresetEnum.SoftRound, ShapeBevelPresetEnum.Convex, ShapeBevelPresetEnum.CoolSlant, ShapeBevelPresetEnum.Divot, ShapeBevelPresetEnum.Riblet, ShapeBevelPresetEnum.HardEdge, ShapeBevelPresetEnum.ArtDeco];
export declare function BevelPresetIcon(props: {
    preset: ShapeBevelPresetEnum;
}): import("react").JSX.Element;
export declare function RotationPresetIcon(props: {
    group: string;
    preset: ShapeCameraPresetEnum;
    scene3d: IShapeScene3D;
}): import("react").JSX.Element;
