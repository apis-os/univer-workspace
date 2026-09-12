import type { SlideTableKeyboardAction } from '../utils/slide-table-keyboard-model';
import { IContextService } from '@univerjs/core';
import { TableKeyboardServiceBase } from './table-keyboard.service-base';
export declare const FOCUSING_SLIDE_TABLE = "FOCUSING_SLIDE_TABLE";
export declare const FOCUSING_SLIDE_TABLE_OBJECT = "FOCUSING_SLIDE_TABLE_OBJECT";
export interface ISlideTableKeyboardCommandParams {
    action: SlideTableKeyboardAction;
}
export declare class SlideTableKeyboardService extends TableKeyboardServiceBase {
    private readonly _contextService;
    constructor(_contextService: IContextService);
    protected canHandleNativeInput(event: Event, options?: {
        allowDocsEditor?: boolean;
    }): boolean;
}
