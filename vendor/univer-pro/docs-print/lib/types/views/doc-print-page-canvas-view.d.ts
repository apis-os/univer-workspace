import type { Injector } from '@univerjs/core';
import type { IDocumentOffsetConfig } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
export interface IDocPrintPageLayout {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export declare class DocPrintPageCanvasView extends Disposable {
    private readonly _injector;
    private readonly _unitId;
    private readonly _offsetConfig;
    private readonly _paperSize;
    private readonly _layout;
    private readonly _pixelRatio;
    private readonly _pageIndex?;
    private _container;
    private _root;
    private _engine;
    private _scene;
    private _key;
    private _documents;
    private _viewMain;
    private _effects;
    get container(): HTMLDivElement;
    get root(): HTMLDivElement;
    private get _currentRender();
    private get _skeleton();
    private get _skeletonData();
    constructor(_injector: Injector, _unitId: string, _offsetConfig: IDocumentOffsetConfig, _paperSize: {
        height: number;
        width: number;
    }, _layout: IDocPrintPageLayout, _pixelRatio?: number, _pageIndex?: number | undefined);
    private _initRenderer;
    private _addComponent;
    private _addViewport;
    prepare(): void;
    render(): void;
    waitForReady(timeout?: number): Promise<void>;
}
