import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { Nullable } from '@univerjs/core';
import type { BaseObject } from '@univerjs/engine-render';
import type { IRenderConvertContext } from '../adaptor';
import { SlideTableResourceService } from '@univerjs-pro/slides-table';
import { IImageIoService, LocaleService, ThemeService } from '@univerjs/core';
import { ObjectAdaptor } from '../adaptor';
export declare class TableObjectAdaptor extends ObjectAdaptor {
    private readonly _localeService;
    private readonly _themeService;
    private readonly _imageIoService;
    private readonly _tableResourceService?;
    zIndex: number;
    constructor(_localeService: LocaleService, _themeService: ThemeService, _imageIoService: IImageIoService, _tableResourceService?: SlideTableResourceService | undefined);
    check(drawing: ISlideDrawing): boolean;
    convert(drawing: ISlideDrawing, ctx: IRenderConvertContext): Nullable<BaseObject>;
    private _resolveTableSnapshot;
}
