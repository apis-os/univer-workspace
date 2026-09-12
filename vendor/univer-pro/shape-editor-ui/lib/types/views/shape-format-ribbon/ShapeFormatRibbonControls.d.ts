import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ReactNode } from 'react';
import type { IShapeFloatingToolbarExtensionAction } from '../shape-floating-toolbar/ShapeFloatingToolbar';
export interface IShapeStyleRibbonControlProps {
    shapeData: IShapeData;
    shapeType?: ShapeTypeEnum;
    onUpdateShapeData: (patch: IShapeData) => void;
}
export type IShapeEffectsRibbonControlProps = IShapeStyleRibbonControlProps;
export interface IShapeTextRibbonControlProps {
    fontFamilyPopupDataComponent: string;
    shapeData: IShapeData;
    onUpdateShapeData: (patch: IShapeData) => void;
}
export interface IShapeTextEffectsRibbonControlProps {
    shapeData: IShapeData;
    onUpdateShapeData: (patch: IShapeData) => void;
}
export interface IShapeFormulaRibbonControlProps {
    actions: IShapeFloatingToolbarExtensionAction[];
    panel?: ReactNode;
}
export declare function ShapeStyleRibbonControl(props: IShapeStyleRibbonControlProps): import("react").JSX.Element;
export declare function ShapeEffectsRibbonControl(props: IShapeEffectsRibbonControlProps): import("react").JSX.Element;
export declare function ShapeTextEffectsRibbonControl(props: IShapeTextEffectsRibbonControlProps): import("react").JSX.Element;
export declare function ShapeFormulaRibbonControl(props: IShapeFormulaRibbonControlProps): import("react").JSX.Element | null;
export declare function ShapeTextRibbonControl(props: IShapeTextRibbonControlProps): import("react").JSX.Element;
