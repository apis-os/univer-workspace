import type { IShapeLineStyle } from '@univerjs-pro/engine-shape';
import type { ISlidePlaceholderData } from '@univerjs-pro/slides';
export interface ISlideChartDescriptionExtension {
    position?: {
        x: number;
        y: number;
    };
    size?: {
        width: number;
        height: number;
    };
    placeholder?: ISlidePlaceholderData;
    stroke?: IShapeLineStyle;
    zOrder?: number;
}
