import type { ISlideDrawing, ISlidePageElement, ISlidePlaceholderElement } from '@univerjs-pro/slides';
import type { LocaleService } from '@univerjs/core';
import { PlaceholderTypeEnum } from '@univerjs-pro/slides';
export declare const TEXT_PLACEHOLDER_TYPES: Set<PlaceholderTypeEnum>;
export declare function hasPlaceholderUserText(element: ISlidePlaceholderElement): boolean;
export declare function resolveDrawingText(drawing: ISlideDrawing, localeService: LocaleService): string;
/**
 * Resolve editor initial text for inline editing.
 *
 * For placeholders we only return locally stored text (`element.text`) so
 * inherited text (layout/master i18n key/default) is not prefilled.
 */
export declare function resolveDrawingEditingText(drawing: ISlideDrawing): string;
export declare function isTextEditableDrawing(drawing: ISlideDrawing): boolean;
export declare function applyDrawingText(element: ISlidePageElement, text: string): ISlidePageElement | null;
