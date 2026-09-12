import type { SlideSceneTypeEnum } from '@univerjs-pro/slides';
import type { ISlideCoreRenderAreaConfig } from '../controllers/page-size.util';
export declare const SLIDES_UI_PLUGIN_CONFIG_KEY = "slides-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSlidesUIConfig {
    /** Current slide scene mode used by render adaptors. */
    sceneType?: SlideSceneTypeEnum;
    /** Whether placeholder objects should be rendered. */
    showPlaceholder?: boolean;
    /** Global switch for editor logic (components/services/controllers). */
    editor?: {
        /** Enables all slide editor interactions. Set false for readonly mode. */
        enabled?: boolean;
    };
    /**
     * Core render area size of the slide page in main canvas.
     * Supports pixel and percentage values, e.g. 1280, '1280px', '95%'.
     */
    coreRenderArea?: ISlideCoreRenderAreaConfig;
}
export declare const defaultPluginConfig: IUniverSlidesUIConfig;
