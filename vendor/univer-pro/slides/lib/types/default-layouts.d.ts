import type { ISlideData, ISlideFmtScheme, ISlideLayoutPage, ISlideMasterPage, ISlidePage, ISlideThemeData } from './slide.type';
import { SlidePageLayoutTypeEnum } from './slide.enum';
export declare const DEFAULT_SLIDE_PAGE_WIDTH = 960;
export declare const DEFAULT_SLIDE_PAGE_HEIGHT = 540;
export declare const DEFAULT_SLIDE_THEME_COLOR_SCHEME: Record<string, string>;
export declare const DEFAULT_SLIDE_FMT_SCHEME: ISlideFmtScheme;
export declare const DEFAULT_SLIDE_THEME: ISlideThemeData;
export declare const DEFAULT_MASTER_PAGE_ID = "master-default";
export declare const DEFAULT_MASTER_PAGE: ISlideMasterPage;
export declare const LAYOUT_PAGE_IDS: Record<SlidePageLayoutTypeEnum, string>;
/**
 * The built-in default layout pages, keyed by {@link SlidePageLayoutTypeEnum}.
 * Custom layout variant is intentionally omitted (no default shape).
 */
export declare const DEFAULT_LAYOUT_PAGES: Partial<Record<SlidePageLayoutTypeEnum, ISlideLayoutPage>>;
/**
 * Ordered list of the built-in layout types as they appear in the layout picker UI.
 */
export declare const DEFAULT_LAYOUT_ORDER: SlidePageLayoutTypeEnum[];
export interface ICreateSlideByLayoutOptions {
    /**
     * Which built-in layout to use. Defaults to {@link SlidePageLayoutTypeEnum.TitleAndBody}.
     */
    layoutType?: SlidePageLayoutTypeEnum;
    /** Explicit slide id. Generated if omitted. */
    id?: string;
    /** Slide display name. Derived from layout name if omitted. */
    name?: string;
    /**
     * ID of the master page this slide should reference.
     * Defaults to {@link DEFAULT_MASTER_PAGE_ID}.
     */
    masterPageId?: string;
    /**
     * ID of the layout page this slide should reference.
     * Resolved automatically from `layoutType` when omitted.
     */
    layoutPageId?: string;
}
/**
 * Create a new {@link ISlidePage} pre-wired to a built-in layout.
 *
 * The returned object is a plain JSON snapshot �?pass it directly to
 * `SlidePageManager.createSlide()` or `AddSlidePageCommand`.
 *
 * ```ts
 * const slide = createSlideByLayout({ layoutType: SlidePageLayoutTypeEnum.TitleAndBody });
 * pageManager.createSlide(slide);
 * ```
 */
export declare function createSlideByLayout(options?: ICreateSlideByLayoutOptions): ISlidePage;
/**
 * Returns the master + layout pages that should be injected into
 * {@link ISlideData} when initialising a document that uses the
 * built-in default theme.
 *
 * ```ts
 * const { masterPages, layoutPages, masterPageOrder, layoutPageOrder } =
 *     buildDefaultSlideDocumentLayers();
 * const doc: ISlideData = {
 *     ...yourData,
 *     ...buildDefaultSlideDocumentLayers(),
 *     theme: DEFAULT_SLIDE_THEME,
 * };
 * ```
 */
export declare function buildDefaultSlideDocumentLayers(): Pick<ISlideData, 'masterPages' | 'masterPageOrder' | 'layoutPages' | 'layoutPageOrder' | 'theme'>;
