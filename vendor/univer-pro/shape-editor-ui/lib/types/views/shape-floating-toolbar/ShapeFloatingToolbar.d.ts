import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ITextStyle } from '@univerjs/core';
import type { FloatingObjectToolbarPosition } from '@univerjs/ui';
import type { ReactNode } from 'react';
import type { IToolbarDropdownOption, ShapeDataUpdateHandler, ShapeTextUpdateHandler } from './shape-floating-toolbar-types';
import { HorizontalAlign, VerticalAlign } from '@univerjs/core';
export type IShapeFloatingToolbarWrappingStyle = string | number;
export interface IShapeFloatingToolbarTextModel {
    ha?: HorizontalAlign;
    va?: VerticalAlign;
}
export interface IShapeFloatingToolbarGroupAction {
    type: 'group' | 'ungroup';
    label: string;
    onClick: () => void;
}
export interface IShapeFloatingToolbarLayerActions {
    title: string;
    forwardLabel: string;
    frontLabel: string;
    backwardLabel: string;
    backLabel: string;
    onForward: () => void;
    onFront: () => void;
    onBackward: () => void;
    onBack: () => void;
}
export interface IShapeFloatingToolbarExtensionAction {
    key: string;
    label: string;
    icon: ReactNode;
    render?: ReactNode;
    active?: boolean;
    disabled?: boolean;
    visible?: boolean;
    onClick?: () => void;
}
export interface IShapeFloatingToolbarExtensionGroup {
    key: string;
    visible?: boolean;
    actions: IShapeFloatingToolbarExtensionAction[];
}
export interface IShapeFloatingToolbarProps {
    canvasElement: HTMLCanvasElement;
    shapeData?: IShapeData;
    shapeType?: ShapeTypeEnum;
    textStyle: ITextStyle;
    textModel?: IShapeFloatingToolbarTextModel | null;
    wrappingStyle?: IShapeFloatingToolbarWrappingStyle;
    wrappingStyleOptions?: Array<IToolbarDropdownOption<IShapeFloatingToolbarWrappingStyle>>;
    enableShapeFillReset?: boolean;
    enableShapeStrokeReset?: boolean;
    enableTextBackgroundReset?: boolean;
    enableTextBackground?: boolean;
    /** Enable rich fills (gradient, picture, opacity); false keeps the plain text color picker. */
    enableTextFill?: boolean;
    enableTextControls?: boolean;
    defaultFillColor?: string;
    defaultGradientEndColor?: string;
    defaultStrokeColor?: string;
    onUpdateShapeData: ShapeDataUpdateHandler;
    onUpdateText: ShapeTextUpdateHandler;
    onUpdateWrappingStyle?: (value: IShapeFloatingToolbarWrappingStyle) => void;
    groupAction?: IShapeFloatingToolbarGroupAction;
    layerActions?: IShapeFloatingToolbarLayerActions;
    extensionGroups?: IShapeFloatingToolbarExtensionGroup[];
    floatingObjectToolbarPosition?: FloatingObjectToolbarPosition;
    deleteLabel?: string;
    onOpenPanel?: () => void;
    onDelete?: () => void;
}
export declare function ShapeFloatingToolbarMenuActions(props: {
    position: FloatingObjectToolbarPosition;
}): import("react").JSX.Element[];
export declare function ShapeFloatingToolbarMenuPanel(props: {
    title?: string;
    children: ReactNode;
    className?: string;
    minWidthClassName?: string;
}): import("react").JSX.Element;
export declare function ShapeFloatingToolbarMenuItem(props: {
    label: string;
    shortcut?: string;
    disabled?: boolean;
    danger?: boolean;
    onClick: () => void;
}): import("react").JSX.Element;
export declare function ShapeFloatingToolbar(props: IShapeFloatingToolbarProps): import("react").JSX.Element | null;
