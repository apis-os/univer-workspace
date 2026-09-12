import type { ISlidePageElement } from '../slide.type';
export interface IEnsureSlideElementNameOptions {
    nameBase?: string;
}
export declare function getSlideElementDisplayName(element: ISlidePageElement): string;
export declare function ensureSlideElementName(element: ISlidePageElement, existingElements: Iterable<ISlidePageElement>, options?: IEnsureSlideElementNameOptions): ISlidePageElement;
