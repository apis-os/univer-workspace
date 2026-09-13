import type { ISlideConnectionSite } from '@univerjs-pro/slides';
import type { ISlideTableCellRange, ISlideTableSnapshot, ISlideTableThemePalette, ISlideTableThemeSnapshot, ISlideTableTrigger } from '@univerjs-pro/slides-table';
import type { IImageIoService, LocaleService, ThemeService } from '@univerjs/core';
import type { IRectProps, IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { Rect } from '@univerjs/engine-render';
export interface ISlideTableObjectProps extends IRectProps {
    table?: ISlideTableSnapshot;
    imageIoService: IImageIoService;
    localeService?: LocaleService;
    tableThemes?: Record<string, ISlideTableThemeSnapshot>;
    tableThemePalette?: ISlideTableThemePalette;
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
    kind?: 'table-handle';
    row?: number | null;
    column?: number | null;
}
export interface ISlideTableObjectCellHover {
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
export declare class SlideTableObject extends Rect<ISlideTableObjectProps> {
    private static readonly _imageNativeCache;
    private static readonly _imageLoadingCache;
    isDrawingObject: boolean;
    private readonly _table?;
    private readonly _imageIoService;
    private readonly _localeService?;
    private readonly _tableThemes?;
    private readonly _tableThemePalette?;
    private readonly _themeService?;
    private readonly _textRenderCaches;
    private _editingCell;
    private _previewTable;
    private _selection;
    private _cellHover;
    private _controlHover;
    private _controlState;
    constructor(key: string, props: ISlideTableObjectProps);
    getConnectionSites(): ISlideConnectionSite[];
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    dispose(): void;
    setEditingCell(cell: {
        row: number;
        column: number;
    } | null): void;
    setPreviewTable(table: ISlideTableSnapshot | null): void;
    setTableSelection(selection: ISlideTableObjectSelection | null): void;
    setTableCellHover(hover: ISlideTableObjectCellHover | null): boolean;
    setTableControlHover(hover: ISlideTableObjectControlHover | null): boolean;
    setTableControlState(state: ISlideTableObjectControlState | null): boolean;
    getInverseCoord(coord: Vector2): Vector2;
    isHit(coord: Vector2): boolean;
    getCellTextRect(row: number, column: number, width?: number, height?: number): ISlideTableCellTextRect | null;
    _draw(ctx: UniverRenderingContext, _bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    private _drawTableEffects;
    private _drawRowFills;
    private _drawGrid;
    private _drawTableOutline;
    private _drawCellFills;
    private _drawMatchingCellFillSeams;
    private _drawCellBorders;
    private _drawCellHover;
    private _drawCellTexts;
    private _drawSelection;
    private _drawTableHandle;
    private _drawStructuralHeaders;
    private _drawInsertDots;
    private _drawInsertGuide;
    private _drawReorderGuide;
    private _drawGuideLine;
    private _buildStructuralTriggers;
    private _getStructuralControlZoom;
    private _isPointInStructuralTriggerEnvelope;
    private _shouldDrawStructuralHeaders;
    private _shouldDrawInsertDots;
    private _hasActiveStructuralControlState;
    private _isSelectedStructuralTrigger;
    private _isHoveredStructuralTrigger;
    private _hasTableSelectionForStructuralControls;
    private _hasActiveTableChrome;
    private _getSelectedStructuralRange;
    private _isCellInSelection;
    private _resolveCellForText;
    private _resolveCellTextRect;
    private _getTextRenderCache;
    private _disposeTextRenderCachesForCell;
    private _isEditingCell;
    private _shouldHideCellTextForEditor;
    private _getRenderTable;
    private _resolveRenderModel;
    private _resolvePictureFill;
    private _createImagePromise;
}
