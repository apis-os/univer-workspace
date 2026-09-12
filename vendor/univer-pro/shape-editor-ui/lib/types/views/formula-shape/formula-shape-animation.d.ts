import type { IShapeFormulaPresentation } from '@univerjs-pro/shape-editor';
import type { UniverRenderingContext } from '@univerjs/engine-render';
export declare const FORMULA_SHAPE_ANIMATION_DURATION = 360;
export declare const FORMULA_SHAPE_TEXT_FLOAT_DISTANCE = 8;
export interface IFormulaShapeAnimationLayer {
    key: 'current' | 'previous';
    offsetY: number;
    opacity: number;
    presentation: IShapeFormulaPresentation | undefined;
}
export declare function resolveFormulaShapeAnimationLayers(previous: IShapeFormulaPresentation | undefined, current: IShapeFormulaPresentation | undefined, progress: number): IFormulaShapeAnimationLayer[];
export declare class FormulaShapeAnimationController {
    private readonly _makeDirty;
    private readonly _onAnimationCompleted;
    private _current;
    private _previous;
    private _lastResolved;
    private _progress;
    private _startedAt;
    private _frameId;
    constructor(_makeDirty: () => void, _onAnimationCompleted?: () => void);
    setPresentation(presentation: IShapeFormulaPresentation | undefined, animate?: boolean): void;
    getLayers(): IFormulaShapeAnimationLayer[];
    /**
     * Returns the resolved presentations whose text must fit inside the shape while an animation is active.
     * Keeping both endpoints prevents either the outgoing or incoming value from overflowing the transformer.
     */
    getAutoFitPresentations(): IShapeFormulaPresentation[];
    dispose(): void;
    private readonly _tick;
    private _cancelFrame;
}
export declare function drawFormulaShapeAnimationLayers(ctx: UniverRenderingContext, controller: FormulaShapeAnimationController, draw: (ctx: UniverRenderingContext, presentation: IShapeFormulaPresentation | undefined, layerKey: IFormulaShapeAnimationLayer['key']) => void): void;
