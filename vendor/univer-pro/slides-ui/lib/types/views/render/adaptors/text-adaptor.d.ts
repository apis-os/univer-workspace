import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { Nullable } from '@univerjs/core';
import type { BaseObject } from '@univerjs/engine-render';
import type { IRenderConvertContext } from '../adaptor';
import { LocaleService } from '@univerjs/core';
import { SlideTextEditingService } from '../../../slide-editor/services/slide-text-editing.service';
import { ObjectAdaptor } from '../adaptor';
/**
 * Render text element as a special rectangle shape so fill/stroke/text logic
 * can be fully reused by the shape rendering pipeline.
 */
export declare class TextObjectAdaptor extends ObjectAdaptor {
    private readonly _localeService;
    private readonly _slideTextEditingService?;
    zIndex: number;
    constructor(_localeService: LocaleService, _slideTextEditingService?: SlideTextEditingService | undefined);
    check(drawing: ISlideDrawing): boolean;
    convert(drawing: ISlideDrawing, ctx: IRenderConvertContext): Nullable<BaseObject>;
    private _isEditingDrawing;
}
