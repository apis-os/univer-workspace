import type { IShapeText } from '@univerjs-pro/engine-shape';
import type { ISlideShapeElement, ISlideThemeData } from '../slide.type';
/**
 * Returns a render-time copy of a shape element with theme-derived defaults.
 *
 * The inherited defaults are installed as non-enumerable properties. They are
 * visible to renderers/editors through normal property access, but object
 * spreads used by mutations will not accidentally persist them into the slide
 * snapshot. This mirrors PPTX's "resolved by theme/master/layout" behavior.
 */
export declare function resolveShapeElementTheme(element: ISlideShapeElement, themeData?: ISlideThemeData): ISlideShapeElement;
export declare function resolveThemeDefaultShapeText(themeData?: ISlideThemeData): IShapeText;
