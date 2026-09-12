export interface IChartOuterRect {
    width: number;
    height: number;
    strokeWidth?: number;
}
export interface IChartScale {
    scaleX?: number;
    scaleY?: number;
}
export interface IChartHostPlacement extends IChartOuterRect {
    left: number;
    top: number;
    scaleX: number;
    scaleY: number;
}
export interface IChartOffset {
    left: number;
    top: number;
}
export declare function getChartContentRect(rect: IChartOuterRect, minSize?: number): IChartOuterRect;
export declare function getChartHostPlacement(rect: IChartOuterRect, scale?: IChartScale, contentRootOffset?: IChartOffset): IChartHostPlacement;
