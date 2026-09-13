import type { IShapeData } from '@univerjs-pro/engine-shape';
import type { ShapeDataUpdateHandler } from './shape-floating-toolbar-types';
export type ShapeStrokePanelMode = 'none' | 'solid' | 'dash' | 'dot';
export declare function buildShapeStrokeDataUpdate(currentStroke: IShapeData['stroke'], resolvedStroke: NonNullable<IShapeData['stroke']>, partial: Partial<NonNullable<IShapeData['stroke']>>): {
    nextShapeData: IShapeData;
    patch: IShapeData;
};
export interface IShapeStrokePanelContentProps {
    title: string;
    shapeData: IShapeData;
    disabled?: boolean;
    resetLabel?: string;
    modeOptions?: ShapeStrokePanelMode[];
    showDashDropdown?: boolean;
    fallbackColor?: string;
    widthRange?: {
        min: number;
        max: number;
        step: number;
    };
    onReset?: () => void;
    onRequestClose?: () => void;
    closeOnColorChange?: boolean;
    onUpdateShapeData: ShapeDataUpdateHandler;
}
export declare function ShapeStrokePanelContent(props: IShapeStrokePanelContentProps): import("react").JSX.Element;
export declare function ShapeStrokePanelButton(props: {
    title: string;
    label?: string;
    shapeData: IShapeData;
    open?: boolean;
    disabled?: boolean;
    resetLabel?: string;
    fallbackColor?: string;
    dropdownSide?: 'top' | 'bottom';
    onReset?: () => void;
    onOpenChange?: (open: boolean) => void;
    closeOnColorChange?: boolean;
    keepOpenOnInternalInteraction?: boolean;
    onUpdateShapeData: ShapeDataUpdateHandler;
}): import("react").JSX.Element;
