import type { ISlidePageSize } from '@univerjs-pro/slides';
export type ISlideCanvasSizeValue = number | string;
export interface ISlideCoreRenderAreaConfig {
    /** Width of the slide core render area, supports number(px), 'NNpx', 'NN%'. */
    width?: ISlideCanvasSizeValue;
    /** Height of the slide core render area, supports number(px), 'NNpx', 'NN%'. */
    height?: ISlideCanvasSizeValue;
}
export declare const SLIDE_WORKSPACE_MIN_GUTTER = 40;
export declare function resolveSlidePageAspectRatio(defaultPageSize: ISlidePageSize | undefined): number;
export declare function resolveSlideCoreRenderSize(sceneSize: {
    width: number;
    height: number;
}, defaultPageSize: ISlidePageSize | undefined, coreRenderArea?: ISlideCoreRenderAreaConfig): {
    width: number;
    height: number;
};
export declare function resolveSlideLogicalPageSize(defaultPageSize: ISlidePageSize | undefined): {
    width: number;
    height: number;
};
export declare function resolveSlideFitZoomRatio(viewportSize: {
    width: number;
    height: number;
}, pageSize: {
    width: number;
    height: number;
}, minGutter?: number): number;
export declare function resolveSlideWorkspaceLayout(viewportSize: {
    width: number;
    height: number;
}, pageSize: {
    width: number;
    height: number;
}, scale: number, minGutter?: number): {
    sceneWidth: number;
    sceneHeight: number;
    pageLeft: number;
    pageTop: number;
};
export declare function resolveSlideViewportCenterScroll(options: {
    viewportSize: {
        width: number;
        height: number;
    };
    scale: number;
    pageLeft: number;
    pageTop: number;
    pageFocusX: number;
    pageFocusY: number;
}): {
    viewportScrollX: number;
    viewportScrollY: number;
};
