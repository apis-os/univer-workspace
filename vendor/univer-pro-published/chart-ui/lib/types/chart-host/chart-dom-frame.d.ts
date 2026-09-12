import type { IChartHostStyle } from '@univerjs-pro/engine-chart';
import type { IChartFrameLayoutResult } from './chart-frame-layout';
/** Owns the DOM frame and content mount node for a live chart renderer. */
export declare class ChartDomFrame {
    private readonly _root;
    /** Element into which the live chart renderer mounts its content. */
    readonly mountNode: HTMLElement;
    private readonly _frameNode;
    private _borderNode;
    private _stateKey;
    /** Creates a managed chart frame inside the supplied host root. */
    constructor(_root: HTMLElement);
    /** Applies resolved frame geometry and visual style without replacing the mount node. */
    update(layout: IChartFrameLayoutResult, style: IChartHostStyle): void;
    /** Removes only the DOM nodes owned by this frame. */
    dispose(): void;
    private _createBorderNode;
}
