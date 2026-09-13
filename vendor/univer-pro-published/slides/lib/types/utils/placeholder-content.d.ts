import type { ISlidePlaceholderElement, ISlidePlaceholderImageContent } from '../slide.type';
export declare const PLACEHOLDER_CONTENT_CUSTOM_KEY = "slidePlaceholderContent";
export declare function getPlaceholderImageContent(element: ISlidePlaceholderElement): ISlidePlaceholderImageContent | null;
export declare function setPlaceholderImageContent(element: ISlidePlaceholderElement, content: ISlidePlaceholderImageContent): ISlidePlaceholderElement;
