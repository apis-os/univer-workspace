import type { BoardConnectorRouting, BoardConnectorStylePatch, IBoardConnectorLabel, IBoardConnectorLabelStylePatch, IBoardConnectorMarker, IBoardConnectorStyle } from '@univerjs-pro/boards';
import type { IShapeData } from '@univerjs-pro/engine-shape';
import type { ITextStyle } from '@univerjs/core';
import type { ReactNode } from 'react';
import { HorizontalAlign, RichTextBuilder } from '@univerjs/core';
export declare function connectorStyleToShapeStrokeData(style: IBoardConnectorStyle): IShapeData;
export declare function shapeStrokeToBoardConnectorStylePatch(shapeData?: IShapeData): Partial<IBoardConnectorStyle>;
export declare function ToolbarButton(props: {
    title?: string;
    ariaLabel?: string;
    active?: boolean;
    children: ReactNode;
    onClick?: () => void;
}): import("react").JSX.Element;
export declare function MarkerDropdown(props: {
    label: string;
    currentMarker?: IBoardConnectorMarker;
    flipIcon?: boolean;
    onSelect: (marker: IBoardConnectorMarker | undefined) => void;
}): import("react").JSX.Element;
export declare function AnimationDropdown(props: {
    style: IBoardConnectorStyle;
    onStyle: (style: BoardConnectorStylePatch) => void | Promise<void>;
}): import("react").JSX.Element;
export declare function SettingsDropdown(props: {
    routing?: BoardConnectorRouting;
    style: IBoardConnectorStyle;
    onRouting: (routing: BoardConnectorRouting) => void | Promise<void>;
    onStyle: (style: BoardConnectorStylePatch) => void | Promise<void>;
}): import("react").JSX.Element;
export declare function applyConnectorRoutingStyleOption(option: {
    routing: BoardConnectorRouting;
    cornerStyle?: IBoardConnectorStyle['cornerStyle'];
}, onRouting: (routing: BoardConnectorRouting) => void | Promise<void>, onStyle: (style: BoardConnectorStylePatch) => void | Promise<void>): Promise<void>;
export declare function createConnectorLabelRichTextBuilder(label: IBoardConnectorLabel): RichTextBuilder;
export declare function isConnectorLabelSettingsNestedPopupTarget(target: EventTarget | null): boolean;
export declare function shouldCloseConnectorLabelStylePanel(panel: Element, target: EventTarget | null): boolean;
export declare function ConnectorLabelSettingsDropdown(props: {
    label: IBoardConnectorLabel;
    labels?: readonly IBoardConnectorLabel[];
    onEditText: () => void;
    onAddText?: () => void;
    onSelectLabel?: (labelId: string) => void;
    onDeleteText: () => void;
    onPlacement: (patch: NonNullable<IBoardConnectorLabel['placement']>) => void;
    resolvedLabelSize?: {
        width: number;
        height: number;
    } | null;
    onLayout?: (layout: IBoardConnectorLabel['layout'] | null) => void;
    onResetPlacement?: () => void;
    onStyle: (patch: IBoardConnectorLabelStylePatch) => void;
    onTextStyle: (patch: ITextStyle) => void;
    onHorizontalAlign: (horizontalAlign: HorizontalAlign) => void;
}): import("react").JSX.Element;
