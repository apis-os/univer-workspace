import type { IMouseEvent, IPointerEvent, IShapeProps, UniverRenderingContext2D } from '@univerjs/engine-render';
import { PivotCellStyleTypeEnum } from '@univerjs-pro/engine-pivot';
import { ICommandService, ThemeService } from '@univerjs/core';
import { Shape } from '@univerjs/engine-render';
export declare const FILTER_BUTTON_TYPE_SET: Set<PivotCellStyleTypeEnum>;
export declare const COLLAPSE_BUTTON_TYPE_SET: Set<PivotCellStyleTypeEnum>;
export interface ISheetsPivotTableButtonShapeProps extends IShapeProps {
    cellWidth: number;
    cellHeight: number;
    pivotParams: {
        col: number;
        row: number;
        unitId: string;
        subUnitId: string;
        buttonType: PivotCellStyleTypeEnum;
    };
}
export declare class SheetsPivotTableButtonShape extends Shape<ISheetsPivotTableButtonShapeProps> {
    private readonly _commandService;
    private readonly _themeService;
    private _cellWidth;
    private _cellHeight;
    private _hovered;
    private _pivotParams?;
    constructor(key: string, props: ISheetsPivotTableButtonShapeProps, _commandService: ICommandService, _themeService: ThemeService);
    setShapeProps(props: Partial<ISheetsPivotTableButtonShapeProps>): void;
    onPointerDown(evt: IPointerEvent | IMouseEvent): void;
    onPointerEnter(): void;
    onPointerLeave(): void;
    protected _draw(ctx: UniverRenderingContext2D): void;
}
