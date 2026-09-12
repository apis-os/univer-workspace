import { Disposable, Injector } from '@univerjs/core';
import { IUIPartsService } from '@univerjs/ui';
/**
 * Registers the slide UI parts into the Univer workbench.
 *
 * | Slot             | Component          |
 * |------------------|--------------------|
 * | LEFT_SIDEBAR     | SlideThumbnailBar  |
 * | CONTENT          | SlideEditorContent |
 * | FOOTER           | SlideFooter        |
 */
export declare class SlideUIController extends Disposable {
    private readonly _injector;
    private readonly _uiPartsService;
    constructor(_injector: Injector, _uiPartsService: IUIPartsService);
    private _initUIComponents;
}
