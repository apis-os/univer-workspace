import type { IObjectFullState } from '@univerjs/engine-render';
import { Rect } from '@univerjs/engine-render';
/** Radius in px for the circular endpoint handle. */
export declare const SLIDE_ENDPOINT_HANDLE_SIZE = 6;
export interface ISlideConnectorEndpointObjectProps extends IObjectFullState {
    /** Whether this handle is the start (true) or end (false) endpoint. */
    isStart: boolean;
}
/**
 * Small circle handle for moving the start or end endpoint of a connector line.
 */
export declare class SlideConnectorEndpointObject extends Rect {
    readonly isStart: boolean;
    constructor(key: string, props: ISlideConnectorEndpointObjectProps);
}
