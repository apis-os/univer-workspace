import type { ISlidePageSize } from '../slide.type';
export declare const SLIDE_PAGE_SIZE_PRESETS: {
    readonly standard4By3: {
        readonly width: 720;
        readonly height: 540;
    };
    readonly wideScreen16By9: {
        readonly width: 960;
        readonly height: 540;
    };
    readonly wideScreen16By10: {
        readonly width: 864;
        readonly height: 540;
    };
};
export declare function resolveSlidePageSizeInput(pageSize?: Partial<ISlidePageSize>): ISlidePageSize | undefined;
