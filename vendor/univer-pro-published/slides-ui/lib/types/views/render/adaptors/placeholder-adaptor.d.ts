import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { Nullable } from '@univerjs/core';
import type { BaseObject } from '@univerjs/engine-render';
import type { IRenderConvertContext } from '../adaptor';
import { IImageIoService, LocaleService, ThemeService } from '@univerjs/core';
import { SlideTextEditingService } from '../../../slide-editor/services/slide-text-editing.service';
import { ObjectAdaptor } from '../adaptor';
export declare class PlaceholderObjectAdaptor extends ObjectAdaptor {
    private readonly _localeService;
    private readonly _imageIoService;
    private readonly _themeService;
    private readonly _slideTextEditingService?;
    zIndex: number;
    constructor(_localeService: LocaleService, _imageIoService: IImageIoService, _themeService: ThemeService, _slideTextEditingService?: SlideTextEditingService | undefined);
    check(drawing: ISlideDrawing): boolean;
    convert(drawing: ISlideDrawing, ctx: IRenderConvertContext): Nullable<BaseObject>;
    private _createImageObject;
    private _createPlaceholderObject;
    private _resolveEditorColor;
    private _resolveText;
    private _resolveTextDocumentData;
    private _resolvePlaceholderLevelTextDocumentData;
    private _isEditingDrawing;
    private _resolveIcons;
    private _resolveTextStyle;
}
