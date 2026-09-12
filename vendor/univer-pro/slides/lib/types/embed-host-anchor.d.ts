import type { UniverInstanceType } from '@univerjs/core';
import type { ISlidePage, ISlideTextElement } from './slide.type';
interface IEmbedDescriptor {
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export declare const EMBED_SLIDES_FLOATING_CUSTOM_KEY = "UNIVER_EMBED_SLIDES_FLOATING";
export declare const EMBED_SLIDES_PAGE_CUSTOM_KEY = "UNIVER_EMBED_SLIDES_PAGE";
export interface IEmbedSlidesCustomData {
    version: 1;
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export interface IEmbedSlidesPageParams {
    embedId: string;
    hostAnchorId: string;
    name?: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export interface IEmbedSlidesFloatingElementParams {
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
}
export declare function createEmbedSlidesCustomData(params: {
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}): IEmbedSlidesCustomData;
export declare function createEmbedSlidesPage(params: IEmbedSlidesPageParams): ISlidePage;
export declare function createEmbedSlidesFloatingElement(params: IEmbedSlidesFloatingElementParams): ISlideTextElement;
export declare function createEmbedSlidesPageFromDescriptor(descriptor: IEmbedDescriptor, name?: string): ISlidePage;
export declare function createEmbedSlidesFloatingElementFromDescriptor(descriptor: IEmbedDescriptor, hostContext?: Record<string, unknown>): ISlideTextElement;
export declare function getEmbedSlidesPageCustomData(page: Pick<ISlidePage, 'custom'>): IEmbedSlidesCustomData | undefined;
export declare function getEmbedSlidesFloatingCustomData(element: Pick<ISlideTextElement, 'custom'>): IEmbedSlidesCustomData | undefined;
export declare function isEmbedSlidesPage(page: Pick<ISlidePage, 'custom'>): boolean;
export declare function isEmbedSlidesFloatingElement(element: Pick<ISlideTextElement, 'custom'>): boolean;
export {};
