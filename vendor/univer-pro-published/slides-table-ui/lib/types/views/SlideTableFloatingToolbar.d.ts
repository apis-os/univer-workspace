import type { ISlideTableSnapshot } from '@univerjs-pro/slides-table';
import type { ISlideTableSelection } from '../services/slide-table-selection.service';
interface IToolbarPosition {
    left: number;
    top: number;
}
interface IToolbarPositionInput {
    canvasRect: {
        left: number;
        top: number;
    };
    canvasScale: number;
    object: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    scale: {
        scaleX: number;
        scaleY: number;
    };
    scroll: {
        x: number;
        y: number;
    };
    selection: Pick<ISlideTableSelection, 'kind' | 'ranges'>;
    table: ISlideTableSnapshot | null | undefined;
    viewportWidth: number;
}
export declare function observeSlideTableFloatingToolbarPosition(refresh: () => void, sources: Array<{
    subscribeEvent(listener: () => void): {
        unsubscribe(): void;
    };
} | null | undefined>, resizeTarget?: Element | null): () => void;
export declare function resolveSlideTableFloatingToolbarPosition(input: IToolbarPositionInput): IToolbarPosition;
export declare function SlideTableFloatingToolbar(): import("react").JSX.Element | null;
export {};
