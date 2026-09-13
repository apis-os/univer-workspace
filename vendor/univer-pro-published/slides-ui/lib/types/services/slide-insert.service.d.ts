import type { ICxnShapeData, SmartArtCategoryEnum } from '@univerjs-pro/engine-shape';
import type { ISlideInsertShapeOptions, ISlideInsertTextBoxOptions } from '@univerjs-pro/slides';
import type { ISlideTableSnapshot } from '@univerjs-pro/slides-table';
import type { IDocumentData } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { ISlideInsertRect, ISlidePendingInsert } from '../utils/slide-pending-insert.util';
import { ShapeTextWrapType } from '@univerjs-pro/engine-shape';
import { ICommandService, IImageIoService, ImageSourceType, IPermissionService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { SlideTextEditingService } from '../slide-editor/services/slide-text-editing.service';
import { ISlideDrawingStateService } from './slide-drawing-state.service';
import { SlidePendingInsertService } from './slide-pending-insert.service';
export interface IReplaceSlideSmartArtImageOptions {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    presentationShapeId: string;
}
export interface ISlideInsertTableOptions {
    rows?: number;
    columns?: number;
    columnWidth?: number;
    rowHeight?: number;
}
export interface ISlideInsertImageOptions {
    offset?: {
        x: number;
        y: number;
    };
    target?: ISlideInsertTarget;
}
export interface ISlideInsertTarget {
    unitId: string;
    subUnitId: string;
}
export declare class SlideInsertService {
    private readonly _instanceService;
    private readonly _commandService;
    private readonly _textEditingService;
    private readonly _imageIoService;
    private readonly _permissionService;
    private readonly _drawingStateService;
    private readonly _localeService;
    private readonly _pendingInsertService;
    readonly pendingInsert$: Observable<ISlidePendingInsert | null>;
    constructor(_instanceService: IUniverInstanceService, _commandService: ICommandService, _textEditingService: SlideTextEditingService, _imageIoService: IImageIoService, _permissionService: IPermissionService, _drawingStateService: ISlideDrawingStateService, _localeService: LocaleService, _pendingInsertService: SlidePendingInsertService);
    cancelPendingInsert(): boolean;
    insertShape(options: ISlideInsertShapeOptions): boolean;
    insertShapeAt(options: ISlideInsertShapeOptions, rect: ISlideInsertRect): boolean;
    insertConnectorAt(options: ISlideInsertShapeOptions, rect: ISlideInsertRect, connectorData: ICxnShapeData): boolean;
    insertSmartArt(layoutId: string, category?: SmartArtCategoryEnum): boolean;
    private _insertShape;
    insertTextBox(options?: ISlideInsertTextBoxOptions): boolean;
    insertRichTextBox(documentData: IDocumentData): boolean;
    insertTextBoxAt(options: ISlideInsertTextBoxOptions, rect: ISlideInsertRect, textWrap?: ShapeTextWrapType): boolean;
    private _insertTextBox;
    insertTable(options?: ISlideInsertTableOptions): boolean;
    insertTableSnapshot(table: Omit<ISlideTableSnapshot, 'id' | 'rev'>): boolean;
    insertImage(file: File, options?: ISlideInsertImageOptions): Promise<boolean>;
    getActiveSlideTarget(): ISlideInsertTarget | null;
    replaceSmartArtImage(options: IReplaceSlideSmartArtImageOptions, file: File): Promise<boolean>;
    resolveImageSource(file: File): Promise<{
        source: string;
        imageSourceType: ImageSourceType;
        width: number;
        height: number;
    } | null>;
    private _insertElement;
    private _getActiveSlideContext;
    private _isActiveSlideContext;
    private _getCenteredTransform;
    private _resolveTextBoxIsHorizontal;
    private _fitSize;
    private _resolveImageSource;
}
