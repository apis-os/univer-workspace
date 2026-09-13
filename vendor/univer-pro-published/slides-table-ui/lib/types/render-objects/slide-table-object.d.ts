import type { ISlideTableCellRange, ISlideTableControl, ISlideTableResolvedCell, ISlideTableSnapshot, ISlideTableThemePalette, ISlideTableThemeSnapshot, ISlideTableTrigger } from '@univerjs-pro/slides-table';
import type { LocaleService, ThemeService } from '@univerjs/core';
import type { IRectProps, IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { SlideTableHit } from '../utils/slide-table-hit-test';
import { Rect } from '@univerjs/engine-render';
export interface ISlideTableObjectProps extends IRectProps {
    controlButtonMode?: 'all' | 'table-handle';
    localeService?: LocaleService;
    table?: ISlideTableSnapshot | null;
    tableThemePalette?: ISlideTableThemePalette;
    tableThemes?: Record<string, ISlideTableThemeSnapshot>;
    themeService?: ThemeService;
}
export interface ISlideTableCellTextRect {
    left: number;
    top: number;
    width: number;
    height: number;
    row: number;
    column: number;
}
export interface ISlideTableObjectSelection {
    kind?: 'table' | 'cell' | 'range' | 'row' | 'column' | 'text';
    ranges: ISlideTableCellRange[];
    active?: {
        row: number;
        column: number;
    };
}
export interface ISlideTableObjectControlHover {
    kind?: ISlideTableControl['kind'];
    row?: number | null;
    column?: number | null;
}
export interface ISlideTableObjectCellHover {
    row: number;
    column: number;
}
export interface ISlideTableObjectEditingCell {
    row: number;
    column: number;
}
export interface ISlideTableObjectStructuralRange {
    kind: 'row' | 'column';
    start: number;
    end: number;
}
export interface ISlideTableObjectStructuralGuide {
    kind: 'row' | 'column';
    index: number;
}
export interface ISlideTableObjectControlState {
    visible?: boolean;
    hoveredTrigger?: ISlideTableTrigger | null;
    selectedStructuralRange?: ISlideTableObjectStructuralRange | null;
    insertGuide?: ISlideTableObjectStructuralGuide | null;
    reorderGuide?: ISlideTableObjectStructuralGuide | null;
}
export declare function isSlideTableRenderCellIntersectingSelection(cell: Pick<ISlideTableResolvedCell, 'row' | 'column' | 'rowSpan' | 'columnSpan'>, ranges: ISlideTableCellRange[]): boolean;
export declare class SlideTableObject extends Rect<ISlideTableObjectProps> {
    isDrawingObject: boolean;
    private readonly _controlButtonMode;
    private _table;
    private _previewTable;
    private _selection;
    private _cellHover;
    private _editingCell;
    private _controlHover;
    private _controlState;
    private _localeService?;
    private _tableThemePalette?;
    private _tableThemes?;
    private readonly _themeService?;
    private _renderModelCache;
    private _visibleCellCache;
    private _textRenderCaches;
    constructor(key: string, props: ISlideTableObjectProps);
    setTable(table: ISlideTableSnapshot | null | undefined): void;
    setTableThemes(themes: Record<string, ISlideTableThemeSnapshot> | undefined): void;
    getTable(): ISlideTableSnapshot | null;
    setPreviewTable(table: ISlideTableSnapshot | null): void;
    setLocaleService(localeService: LocaleService | undefined): void;
    setTableThemePalette(palette: ISlideTableThemePalette | undefined): void;
    setTableSelection(selection: ISlideTableObjectSelection | null): void;
    getTableSelection(): ISlideTableObjectSelection | null;
    setEditingCell(cell: ISlideTableObjectEditingCell | null): void;
    getEditingCell(): ISlideTableObjectEditingCell | null;
    setTableControlHover(hover: ISlideTableObjectControlHover | null): boolean;
    setTableCellHover(hover: ISlideTableObjectCellHover | null): boolean;
    setTableControlState(state: ISlideTableObjectControlState | null): boolean;
    getInverseCoord(coord: Vector2): Vector2;
    isHit(coord: Vector2): boolean;
    getCellTextRect(row: number, column: number, width?: number, height?: number): ISlideTableCellTextRect | null;
    dispose(): void;
    private _resolveVisibleCellCache;
    hitTestCellAtScenePoint(scenePoint: Vector2, width?: number, height?: number): SlideTableHit | null;
    hitTestControlAtScenePoint(scenePoint: Vector2, width?: number, height?: number): ISlideTableControl | null;
    hitTestStructuralTriggerAtScenePoint(scenePoint: Vector2, width?: number, height?: number): ISlideTableTrigger | null;
    hitTestFloatingStructuralTriggerAtScenePoint(scenePoint: Vector2, width?: number, height?: number): ISlideTableTrigger | null;
    render(mainCtx: UniverRenderingContext, bounds: IViewportInfo): this;
    _draw(ctx: UniverRenderingContext, _bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    private _getRenderTable;
    private _resolveRenderModel;
    private _drawRowFills;
    private _drawCellFills;
    private _drawCellTexts;
    private _isEditingCell;
    private _getTextRenderCache;
    private _disposeTextRenderCaches;
    private _drawCellBorders;
    private _drawGrid;
    private _drawTableOutline;
    private _drawSelection;
    private _drawCellHover;
    private _drawControls;
    private _drawStructuralHeaders;
    private _drawStructuralHeaderRect;
    private _drawInsertDots;
    private _drawInsertGuide;
    private _drawReorderGuide;
    private _drawGuideLine;
    private _drawTableHandle;
    private _shouldDrawControls;
    private _shouldDrawStructuralHeaders;
    private _shouldDrawInsertDots;
    private _isActiveOuterChromeHit;
    private _buildControlButtons;
    private _isPointInStructuralTriggerEnvelope;
    private _isControlHovered;
    private _isControlSelected;
    private _isStructuralHeaderHovered;
    private _isHoveredStructuralTrigger;
    private _isStructuralRangeSelected;
    private _buildStructuralTriggers;
    private _getStructuralControlZoom;
}
