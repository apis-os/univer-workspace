import type { IShapeData } from '@univerjs-pro/engine-shape';
import type { ShapeDataUpdateHandler } from './shape-floating-toolbar-types';
export declare function ShapeFillButton(props: {
    title: string;
    label?: string;
    shapeData: IShapeData;
    open?: boolean;
    disabled?: boolean;
    fallbackColor?: string;
    fallbackGradientEndColor?: string;
    dropdownSide?: 'top' | 'bottom';
    onOpenChange?: (open: boolean) => void;
    onUpdateShapeData: ShapeDataUpdateHandler;
}): import("react").JSX.Element;
