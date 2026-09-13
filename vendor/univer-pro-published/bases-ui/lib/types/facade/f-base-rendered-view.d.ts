import type { BaseViewRenderController } from '@univerjs-pro/bases-ui';
import type { BaseHitTestResult, BaseViewType, IBaseViewport } from '@univerjs/core';
export declare class FBaseRenderedView {
    private readonly _viewId;
    private readonly _viewType;
    private readonly _controller;
    constructor(_viewId: string, _viewType: BaseViewType, _controller: BaseViewRenderController);
    getViewId(): string;
    getViewType(): BaseViewType;
    getViewport(): IBaseViewport;
    refresh(): void;
    hitTest(x: number, y: number): BaseHitTestResult | null;
}
