import type { IBoardElementData, IBoardRect, IBoardThemeData } from '@univerjs-pro/boards';
import type { IBoardElementRenderAdapter } from '@univerjs-pro/boards-ui';
import type { IShapeFormulaPresentation } from '@univerjs-pro/shape-editor';
import type { IImageIoService, LocaleService } from '@univerjs/core';
import type { CanvasRenderMode, ICanvasColorService } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
export interface IBoardPrintBackgroundImage {
    fit: 'contain' | 'cover' | 'stretch';
    image: HTMLImageElement;
}
export interface IBoardPrintCanvasViewOptions {
    backgroundColor?: string;
    backgroundImage?: IBoardPrintBackgroundImage;
    bounds: IBoardRect;
    canvasColorService: ICanvasColorService;
    elementData: Record<string, IBoardElementData>;
    elementOrder: readonly string[];
    imageIoService: IImageIoService;
    localeService: LocaleService;
    pixelRatio: number;
    renderAdapters: readonly IBoardElementRenderAdapter[];
    renderMode: CanvasRenderMode;
    resolveFormulaPresentation: (elementDataItem: IBoardElementData) => IShapeFormulaPresentation | undefined;
    scale: number;
    themeData: IBoardThemeData;
    unitId: string;
}
export declare class BoardPrintCanvasView extends Disposable {
    private readonly _options;
    readonly container: HTMLDivElement;
    private readonly _engine;
    private readonly _scene;
    private readonly _objects;
    get canvas(): HTMLCanvasElement;
    get bounds(): IBoardRect;
    get height(): number;
    get pixelRatio(): number;
    get scale(): number;
    get width(): number;
    constructor(_options: IBoardPrintCanvasViewOptions, ownerDocument?: Document);
    render(): void;
    private _createObjects;
    private _drawBackground;
}
