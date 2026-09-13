import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { Nullable } from '@univerjs/core';
import type { BaseObject } from '@univerjs/engine-render';
import type { IRenderConvertContext } from '../adaptor';
import { ShapeFormulaService } from '@univerjs-pro/shape-editor';
import { IImageIoService, LocaleService, ThemeService } from '@univerjs/core';
import { SlideTextEditingService } from '../../../slide-editor/services/slide-text-editing.service';
import { ObjectAdaptor } from '../adaptor';
export declare class ShapeObjectAdaptor extends ObjectAdaptor {
    private readonly _localeService;
    private readonly _imageIoService;
    private readonly _shapeFormulaService;
    private readonly _slideTextEditingService;
    private readonly _themeService;
    zIndex: number;
    private static readonly _globalImageNativeCache;
    private static readonly _globalImageLoadingCache;
    private readonly _formulaPresentations;
    constructor(_localeService: LocaleService, _imageIoService: IImageIoService, _shapeFormulaService: ShapeFormulaService, _slideTextEditingService: SlideTextEditingService, _themeService: ThemeService);
    check(drawing: ISlideDrawing): boolean;
    convert(drawing: ISlideDrawing, ctx: IRenderConvertContext): Nullable<BaseObject>;
    private _resolveSmartArtImagePlaceholderColors;
    private _shouldAnimateFormulaPresentation;
    private _loadShapePictureFill;
    private _loadSmartArtPictureFills;
    private _getOrCreateImageLoadingPromise;
    private _isEditingDrawing;
}
