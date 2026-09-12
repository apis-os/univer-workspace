import type { ShapeTextWrapType } from '@univerjs-pro/engine-shape';
import type { ImageSourceType, ITextStyle } from '@univerjs/core';
import type { BoardConnectorRouting, BoardConnectorRoutingMode, BoardContainerKind, BoardShapeType, IBoardConnectorData, IBoardConnectorElement, IBoardConnectorEndpoint, IBoardConnectorLabel, IBoardConnectorStyle, IBoardConnectorWaypoint, IBoardContainerBehavior, IBoardContainerCapturePolicy, IBoardContainerElement, IBoardElementTransform, IBoardImageElement, IBoardShapeElement, IBoardSwimlaneData, IBoardTextElement } from '../board.type';
import { HorizontalAlign, VerticalAlign } from '@univerjs/core';
export declare const BOARD_INSERT_DEFAULT_SIZE: {
    shapeWidth: number;
    shapeHeight: number;
    stickyWidth: number;
    stickyHeight: number;
    textBoxWidth: number;
    textBoxHeight: number;
    containerWidth: number;
    containerHeight: number;
};
export declare const BOARD_SHAPE_DEFAULT_FONT_SIZE = 16;
export declare const BOARD_TEXT_DEFAULT_FONT_SIZE = 14;
export declare const BOARD_CONTAINER_DEFAULTS: {
    headerSize: number;
    padding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    expelHysteresis: number;
};
export declare const BOARD_CONTAINER_CORNER_ADJUST = 2500;
export declare const BOARD_CONTAINER_DEFAULT_SHAPE_DATA: IBoardContainerElement['containerData']['shapeData'];
export declare const BOARD_CONTAINER_DEFAULT_BEHAVIOR: IBoardContainerBehavior;
export declare const BOARD_CONTAINER_DEFAULT_CAPTURE_POLICY: IBoardContainerCapturePolicy;
export declare const BOARD_SWIMLANE_DEFAULTS: {
    title: string;
    collapsedLaneSize: number;
    laneGap: number;
    padding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    laneCount: number;
    horizontalHeaderSize: number;
    horizontalLaneSize: number;
    horizontalWidth: number;
    verticalHeaderSize: number;
    verticalLaneSize: number;
    verticalHeight: number;
};
interface ICreateBoardParentedElementOptions {
    parentId?: string;
    laneId?: string;
}
export interface ICreateBoardShapeElementOptions extends ICreateBoardParentedElementOptions {
    id?: string;
    shapeType: BoardShapeType | string;
    left: number;
    top: number;
    width?: number;
    height?: number;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
}
export interface ICreateBoardTextElementOptions extends ICreateBoardParentedElementOptions {
    id?: string;
    left: number;
    top: number;
    width?: number;
    height?: number;
    horizontal?: boolean;
    horizontalAlign?: HorizontalAlign;
    text?: string;
    textStyle?: ITextStyle;
    verticalAlign?: VerticalAlign;
}
export interface ICreateBoardTextBoxShapeElementOptions extends ICreateBoardTextElementOptions {
    textWrap?: ShapeTextWrapType;
}
export interface ICreateBoardStickyElementOptions extends ICreateBoardParentedElementOptions {
    id?: string;
    left: number;
    top: number;
    width?: number;
    height?: number;
    fillColor: string;
}
export interface ICreateBoardContainerElementOptions extends ICreateBoardParentedElementOptions {
    id?: string;
    kind?: Exclude<BoardContainerKind, 'swimlane'>;
    left: number;
    top: number;
    width?: number;
    height?: number;
    title?: string;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    membershipLocked?: boolean;
}
export interface ICreateBoardSwimlaneLaneOptions {
    id?: string;
    title?: string;
    size?: number;
    minSize?: number;
    locked?: boolean;
    collapsed?: boolean;
}
export interface ICreateBoardSwimlaneElementOptions extends ICreateBoardContainerElementOptions {
    orientation?: IBoardSwimlaneData['orientation'];
    lanes?: ICreateBoardSwimlaneLaneOptions[];
    headerSize?: number;
    laneGap?: number;
    collapsedLaneSize?: number;
}
export interface ICreateBoardImageElementOptions extends ICreateBoardParentedElementOptions {
    id?: string;
    source: string;
    imageSourceType: ImageSourceType;
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface ICreateBoardConnectorElementOptions {
    id?: string;
    start: IBoardConnectorEndpoint;
    end: IBoardConnectorEndpoint;
    routing?: BoardConnectorRouting;
    routingMode?: BoardConnectorRoutingMode;
    waypoints?: IBoardConnectorWaypoint[];
    orthogonalData?: IBoardConnectorData['orthogonalData'];
    curveData?: IBoardConnectorData['curveData'];
    style?: IBoardConnectorStyle;
    /** Single-label insertion shorthand. The resulting element only stores `labels`. */
    label?: IBoardConnectorLabel;
    labels?: IBoardConnectorData['labels'];
    transform?: IBoardElementTransform;
}
export declare function resolveBoardTextElementDefaultSize(horizontal?: boolean): {
    width: number;
    height: number;
};
export declare function createBoardConnectorElement(options: ICreateBoardConnectorElementOptions): IBoardConnectorElement;
export declare function createBoardShapeElement(options: ICreateBoardShapeElementOptions): IBoardShapeElement;
export declare function createBoardTextBoxShapeElement(options: ICreateBoardTextBoxShapeElementOptions): IBoardShapeElement;
export declare function createBoardContainerElement(options: ICreateBoardContainerElementOptions): IBoardContainerElement;
export declare function createBoardSwimlaneElement(options: ICreateBoardSwimlaneElementOptions): IBoardContainerElement;
export declare function createBoardTextElement(options: ICreateBoardTextElementOptions): IBoardTextElement;
export declare function createBoardStickyElement(options: ICreateBoardStickyElementOptions): IBoardShapeElement;
export declare function createBoardImageElement(options: ICreateBoardImageElementOptions): IBoardImageElement;
export {};
