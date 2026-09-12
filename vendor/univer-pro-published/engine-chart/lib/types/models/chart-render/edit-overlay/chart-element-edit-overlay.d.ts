import type { ECharts } from 'echarts';
import type { IChartElementBounds, IChartElementHit } from '../../../types';
import type { ChartElementEditBorderType, IChartElementEditOverlayPalette } from './types';
export declare class ChartElementEditOverlay {
    private readonly _getInstance;
    private readonly _getContainer;
    private readonly _paletteOverride?;
    private _group;
    private _hoverBorder;
    private _hoverHit;
    private _hoverBorderBounds;
    private _hoverBorderHitKey;
    private _fixedBorder;
    private _fixedBorderBounds;
    constructor(_getInstance: () => ECharts | null, _getContainer?: () => HTMLElement | null | undefined, _paletteOverride?: Partial<IChartElementEditOverlayPalette> | undefined);
    ensure(): any;
    remove(): void;
    clearAll(): void;
    clearHover(): void;
    clearFixed(): void;
    isFixed(bounds: IChartElementBounds | undefined): boolean;
    containsHoverPoint(point: {
        x: number;
        y: number;
    }): boolean;
    getHoverHitAt(point: {
        x: number;
        y: number;
    }): IChartElementHit | null;
    setBorder(type: ChartElementEditBorderType, hit: IChartElementHit): void;
    withHidden<T>(callback: () => T): T;
    private _removeBorder;
    private _createEditBorderElement;
    private _createLineBorderElement;
    private _createPolygonBorderElement;
    private _createStrokeStyle;
    private _resolvePalette;
    private _refresh;
}
