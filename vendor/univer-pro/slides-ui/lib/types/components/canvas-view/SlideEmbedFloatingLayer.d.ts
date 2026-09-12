import type { SlideModel } from '@univerjs-pro/slides';
import type { ISlideRulerViewState } from './CanvasView';
export interface ISlideEmbedFloatingLayerProps {
    slideModel: SlideModel;
    viewState: ISlideRulerViewState | null;
}
export declare function SlideEmbedFloatingLayer(props: ISlideEmbedFloatingLayerProps): import("react").JSX.Element;
