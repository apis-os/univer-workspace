import type { SlideModel } from '@univerjs-pro/slides';
import type { UniverInstanceType } from '@univerjs/core';
type EmbedHostEntry = 'slides-floating-object' | 'slides-page-list-block';
export interface ISlidePresentationEmbedItem {
    kind: 'floating' | 'page';
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
    entry: EmbedHostEntry;
    frame: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
}
export declare function resolveSlidePresentationEmbedItems(params: {
    slideModel: SlideModel;
    slideId: string;
    stageSize: {
        width: number;
        height: number;
    };
}): ISlidePresentationEmbedItem[];
export declare function SlidePresentationEmbedLayer(props: {
    slideModel: SlideModel;
    slideId: string;
    stageSize: {
        width: number;
        height: number;
    };
}): import("react").JSX.Element | null;
export {};
