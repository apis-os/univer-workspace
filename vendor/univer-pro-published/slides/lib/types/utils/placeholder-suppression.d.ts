import type { ISlidePageData, ISlidePageElement, ISlidePlaceholderData, SlideCustomData } from '../slide.type';
export declare const PPTX_ABSENT_PLACEHOLDER_KEYS_CUSTOM = "pptxAbsentPlaceholderKeys";
export declare const SUPPRESSED_PLACEHOLDER_KEYS_CUSTOM = "suppressedPlaceholderKeys";
export declare function getElementPlaceholder(el: ISlidePageElement): ISlidePlaceholderData | undefined;
export declare function isSuppressiblePlaceholderElement(el: ISlidePageElement): boolean;
export declare function getPlaceholderSuppressionKey(el: ISlidePageElement): string | undefined;
export declare function resolvePageSuppressedPlaceholderKeys(page: ISlidePageData): Set<string>;
export declare function shouldSuppressPlaceholderElement(el: ISlidePageElement, suppressedKeys: Set<string>): boolean;
export declare function patchSuppressedPlaceholderKey(custom: SlideCustomData | undefined, key: string, suppressed: boolean): SlideCustomData | undefined;
