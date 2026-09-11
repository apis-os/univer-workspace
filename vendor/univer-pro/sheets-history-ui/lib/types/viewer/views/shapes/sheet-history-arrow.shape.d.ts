import type { IMouseEvent, IPointerEvent, IShapeProps } from '@univerjs/engine-render';
import { Shape } from '@univerjs/engine-render';
export declare const SHEET_HISTORY_ARROW_ZINDEX = 1;
export declare const SHEET_HISTORY_ARROW_BORDER_WIDTH = 4;
export declare const ARROW_HEAD_SIZE = 12;
export interface ISheetHistoryArrowShapeProps extends IShapeProps {
    color: string;
    direction: 'horizontal' | 'vertical';
    highlight?: boolean;
    highlightSecond?: number;
}
export declare class SheetHistoryArrowShape<T extends ISheetHistoryArrowShapeProps = ISheetHistoryArrowShapeProps> extends Shape<T> {
    private _color;
    private _direction;
    private _highlight;
    private _highlightSecond;
    private _blinkTimer?;
    private _blinkIntervalTimer?;
    private _isBlinkVisible;
    constructor(key: string, props: T);
    setShapeProps(props: Partial<ISheetHistoryArrowShapeProps>): void;
    triggerDblclick(_evt: IPointerEvent | IMouseEvent): boolean;
    dispose(): void;
    protected _draw(ctx: CanvasRenderingContext2D): void;
    private _startBlinking;
    private _stopBlinking;
    private _drawHorizontalArrow;
    private _drawVerticalArrow;
}
