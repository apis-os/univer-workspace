import type { IBasicShapeData, ICxnShapeData, IShapeData, IShapeLineStyle, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IDocumentData, IGlowEffect, ImageSourceType, IResources, IShadowEffect, LocaleType } from '@univerjs/core';
import type { PageElementTypeEnum, PageTypeEnum, PlaceholderTypeEnum, SlideBackgroundTypeEnum, SlideMediaTypeEnum, SlidePageLayoutTypeEnum, SlidePageSizePresetEnum, SlideTransitionDirectionEnum, SlideTransitionSpeedEnum, SlideTransitionTypeEnum } from './slide.enum';
export type SlideCustomData = Record<string, unknown> | null;
export type SlideHeaderFooterDateTimeMode = 'auto' | 'fixed';
export interface ISlideHeaderFooterSlot {
    /** Whether the slot is enabled for normal slide rendering. */
    enabled?: boolean;
    /** Fixed text value, when the OOXML header/footer setting carries one. */
    text?: string;
}
export interface ISlideHeaderFooterDateTimeSlot extends ISlideHeaderFooterSlot {
    /** Reserved for OOXML date/time fields that update automatically. */
    mode?: SlideHeaderFooterDateTimeMode;
    /** Reserved OOXML-compatible date/time format token. */
    format?: string;
}
export interface ISlideHeaderFooterData {
    header?: ISlideHeaderFooterSlot;
    footer?: ISlideHeaderFooterSlot;
    dateTime?: ISlideHeaderFooterDateTimeSlot;
    slideNumber?: ISlideHeaderFooterSlot;
}
export interface ISlideDrawingTransform {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
    skewX?: number;
    skewY?: number;
    flipX?: boolean;
    flipY?: boolean;
}
export interface ISlidePageSize {
    width: number;
    height: number;
    preset?: SlidePageSizePresetEnum;
}
export interface ISlidePlaceholderData {
    id: string;
    type: PlaceholderTypeEnum;
    index?: number;
    transform?: ISlideDrawingTransform;
    defaultText?: string;
    textConfig?: ISlidePlaceholderTextConfig;
    icons?: ISlidePlaceholderIconConfig[];
    custom?: SlideCustomData;
}
export type SlidePlaceholderTextLevel = 'master' | 'layout' | 'slide';
export interface ISlidePlaceholderTextConfig {
    /** Translation key resolved by LocaleService. */
    textKey?: string;
    /** Locale map fallback for text when key is not found. */
    textByLocale?: Record<string, string>;
    /** Fallback plain text when no localized value exists. */
    defaultText?: string;
    /** Rich text payload, same structure as document data. */
    textData?: IDocumentData;
    /** Optional rich text payload by source level (master/layout/slide). */
    textDataByLevel?: Partial<Record<SlidePlaceholderTextLevel, IDocumentData>>;
}
export interface ISlidePlaceholderIconConfig {
    /** Stable key for icon rendering and click routing. */
    key: string;
    /** Translation key for icon label. */
    labelKey?: string;
    /** Fallback icon label when label key is not configured. */
    label?: string;
    /** Optional icon URL. When absent, a text icon is rendered. */
    iconUrl?: string;
    /** Whether the icon is enabled. Defaults to true. */
    enabled?: boolean;
}
export interface ISlidePlaceholderStyle {
    fill?: IBasicShapeData['fill'];
    stroke?: IShapeLineStyle;
}
export interface ISlideTextStyle {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
}
export interface ISlideImageFillRect {
    /** Left edge offset in percent. `srcRect` clamps this to 0-100; `stretchFillRect` may preserve OOXML overflow values. */
    left?: number;
    /** Top edge offset in percent. `srcRect` clamps this to 0-100; `stretchFillRect` may preserve OOXML overflow values. */
    top?: number;
    /** Right edge offset in percent. `srcRect` clamps this to 0-100; `stretchFillRect` may preserve OOXML overflow values. */
    right?: number;
    /** Bottom edge offset in percent. `srcRect` clamps this to 0-100; `stretchFillRect` may preserve OOXML overflow values. */
    bottom?: number;
}
export interface ISlideSolidBackground {
    type: SlideBackgroundTypeEnum.Solid;
    color: string;
    alpha?: number;
}
export interface ISlideGradientStop {
    color: string;
    position: number;
    alpha?: number;
}
export interface ISlideGradientBackground {
    type: SlideBackgroundTypeEnum.Gradient;
    angle?: number;
    /** Color interpolation used between stops. OOXML gradients use direct sRGB channel interpolation. */
    colorInterpolation?: 'srgb' | 'gamma-corrected';
    /** OOXML path-gradient geometry such as `shape`, `circle`, or `rect`. */
    gradientPath?: string;
    /** Normalized OOXML path-gradient focus rectangle. */
    gradientFillToRect?: ISlideImageFillRect;
    /** PowerPoint background-gradient shading hint. */
    shadeToTitle?: boolean;
    stops: ISlideGradientStop[];
}
export interface ISlideImageBackground {
    type: SlideBackgroundTypeEnum.Image;
    source: string;
    imageSourceType?: ImageSourceType;
    fit?: SlidePresentationBackgroundGraphicFitWithoutRepeatEnum;
    /** Source crop rectangle in image-percent units. Values are clamped to 0-100 during rendering. */
    srcRect?: ISlideImageFillRect;
    /** Destination stretch inset/outset in slide-frame-percent units; OOXML negative or over-100 values are preserved. */
    stretchFillRect?: ISlideImageFillRect;
}
export interface ISlidePatternBackground {
    type: SlideBackgroundTypeEnum.Pattern;
    pattern: string;
    foregroundColor?: string;
    backgroundColor?: string;
}
export interface ISlideEmptyBackground {
    type: SlideBackgroundTypeEnum.None;
}
export type ISlideBackgroundData = ISlideEmptyBackground | ISlideSolidBackground | ISlideGradientBackground | ISlideImageBackground | ISlidePatternBackground;
export type SlideElementRole = 'backgroundGraphic';
export type SlideElementManagedBy = 'presentationBackground';
export declare enum SlidePresentationBackgroundGraphicFitEnum {
    Cover = "cover",
    Contain = "contain",
    Stretch = "stretch",
    Repeat = "repeat"
}
export type SlidePresentationBackgroundGraphicFitWithoutRepeatEnum = Exclude<SlidePresentationBackgroundGraphicFitEnum, SlidePresentationBackgroundGraphicFitEnum.Repeat>;
/**
 * A single fill style entry inside fmtScheme.fillStyleLst / bgFillStyleLst.
 * Reuses the `fill` field from engine-shape's IBasicShapeData so the renderer
 * can consume it directly without re-mapping.
 */
export interface ISlideThemeColorModifiers {
    tint?: number;
    shade?: number;
    saturation?: number;
    luminance?: number;
    luminanceOffset?: number;
}
export type ISlideFillStyle = Omit<NonNullable<IBasicShapeData['fill']>, 'gradientStops'> & {
    colorModifiers?: ISlideThemeColorModifiers;
    gradientStops?: Array<{
        position: number;
        color?: string;
        opacity?: number;
        colorModifiers?: ISlideThemeColorModifiers;
    }>;
};
export type ISlideLineStyle = IShapeLineStyle & {
    colorModifiers?: ISlideThemeColorModifiers;
};
/**
 * A single line (stroke) style entry inside fmtScheme.lnStyleLst.
 * Reuses IShapeLineStyle from engine-shape.
 */
/**
 * A single reflection effect.
 */
export interface ISlideReflectionEffect {
    /** Blur radius in points. */
    blurRadius?: number;
    /** Start alpha (0–1), typically 0.5. */
    startAlpha?: number;
    /** End alpha (0–1), typically 0. */
    endAlpha?: number;
    /** Vertical offset below the shape in points. */
    distance?: number;
    /** Direction angle in degrees. */
    direction?: number;
}
/**
 * One complete effect style entry inside fmtScheme.effectStyleLst.
 * OOXML effectStyle groups shadow, reflection, glow, etc.
 */
export interface ISlideEffectStyle {
    outerShadow?: IShadowEffect;
    innerShadow?: IShadowEffect;
    reflection?: ISlideReflectionEffect;
    glow?: IGlowEffect;
}
/**
 * fmtScheme — the format scheme embedded in a presentation theme.
 *
 * Matches the OOXML <a:fmtScheme> structure with three ordered style lists.
 * Each list has (at least) three entries:
 *   [0] subtle   (OOXML idx 1)
 *   [1] moderate (OOXML idx 2)
 *   [2] intense  (OOXML idx 3)
 *
 * When a shape references a theme style, it picks an entry by 1-based index
 * from the appropriate list.
 */
export interface ISlideFmtScheme {
    name?: string;
    /**
     * Shape fill styles (fillStyleLst).
     * Index 0 = subtle, 1 = moderate, 2 = intense.
     */
    fillStyleLst: ISlideFillStyle[];
    /**
     * Line / stroke styles (lnStyleLst).
     * Index 0 = subtle, 1 = moderate, 2 = intense.
     */
    lnStyleLst: ISlideLineStyle[];
    /**
     * Effect styles (effectStyleLst).
     * Index 0 = subtle, 1 = moderate, 2 = intense.
     */
    effectStyleLst: ISlideEffectStyle[];
    /**
     * Background fill styles (bgFillStyleLst).
     * Index 0 = subtle, 1 = moderate, 2 = intense.
     * Used as slide background variants.
     */
    bgFillStyleLst: ISlideFillStyle[];
}
export interface ISlideThemeData {
    id?: string;
    name?: string;
    /**
     * Color scheme — maps semantic token names (dk1, lt1, acc1 … acc6, etc.)
     * to CSS color strings.  Same token names as OOXML <a:clrScheme>.
     */
    colorScheme?: Record<string, string>;
    /**
     * Font scheme — maps "heading" / "body" to font-family strings.
     * Matches OOXML <a:fontScheme>.
     */
    fontScheme?: {
        heading?: string;
        body?: string;
    };
    /**
     * Format scheme — default fill / stroke / effect styles for shapes.
     * Matches OOXML <a:fmtScheme> inside <p:theme>.
     */
    fmtScheme?: ISlideFmtScheme;
    custom?: SlideCustomData;
}
export interface ISlideElementBase {
    id: string;
    type: PageElementTypeEnum;
    transform: ISlideDrawingTransform;
    role?: SlideElementRole;
    managedBy?: SlideElementManagedBy;
    name?: string;
    description?: string;
    visible?: boolean;
    selectable?: boolean;
    custom?: SlideCustomData;
}
export interface ISlidePlaceholderElement extends ISlideElementBase {
    type: PageElementTypeEnum.Placeholder;
    placeholder: ISlidePlaceholderData;
    text?: string;
    style?: ISlidePlaceholderStyle;
}
export interface ISlideTextElement extends ISlideElementBase {
    type: PageElementTypeEnum.Text;
    text?: string;
    textStyle?: ISlideTextStyle;
    textData?: IDocumentData;
}
export interface ISlideShapeElement extends ISlideElementBase {
    type: PageElementTypeEnum.Shape;
    /**
     * Shape data consumed directly by engine-shape renderer.
     * Includes shapeType, fill, stroke, adjustValues, shapeText.
     */
    shapeData: IShapeData;
}
export interface ISlideConnectorElement extends ISlideElementBase {
    type: PageElementTypeEnum.Connector;
    /**
     * Connector data (line with optional arrows, bend points, attachment relations).
     * Consumed by engine-shape renderer.
     */
    connectorData: ICxnShapeData;
}
export interface ISlideImageElement extends ISlideElementBase {
    type: PageElementTypeEnum.Image;
    source: string;
    imageSourceType?: ImageSourceType;
    crop?: {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    };
    /**
     * for image clip by shape, the shape type
     */
    prstGeom?: ShapeTypeEnum;
    /**
     * for image clip by shape, the adjust values of the shape, key is adjust name, value is adjust value
     */
    adjustValues?: Record<string, number>;
    /**
     * Shape-style data for the image frame, such as picture border.
     * Reuses the same shape model fields as `ISlideShapeElement.shapeData`.
     */
    shapeData?: Pick<IBasicShapeData, 'stroke' | 'outerShadow' | 'glow'>;
}
export interface ISlidePresentationBackgroundGraphic {
    id?: string;
    source: string;
    imageSourceType?: ImageSourceType;
    fit?: SlidePresentationBackgroundGraphicFitEnum;
    transform?: ISlideDrawingTransform;
    crop?: {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    };
    custom?: SlideCustomData;
}
export interface ISlideChartElement extends ISlideElementBase {
    type: PageElementTypeEnum.Chart;
    chartId: string;
    /** Source placeholder identity when this chart fills a placeholder. */
    placeholder?: ISlidePlaceholderData;
    /** Drawing-level border style for the chart image frame. */
    stroke?: IShapeLineStyle;
}
export interface ISlideTableElement extends ISlideElementBase {
    type: PageElementTypeEnum.Table;
    tableId: string;
    /** Source placeholder identity when this table fills a placeholder. */
    placeholder?: ISlidePlaceholderData;
}
export interface ISlideMediaElement extends ISlideElementBase {
    type: PageElementTypeEnum.Media;
    mediaType: SlideMediaTypeEnum;
    source: string;
    poster?: string;
}
export interface ISlideGroupElement extends ISlideElementBase {
    type: PageElementTypeEnum.Group;
    children: string[];
    /** Outer shadow applied to the rendered group. */
    outerShadow?: IShadowEffect;
    /** Glow applied around the rendered group. */
    glow?: IGlowEffect;
}
export type ISlidePageElement = ISlidePlaceholderElement | ISlideTextElement | ISlideShapeElement | ISlideConnectorElement | ISlideImageElement | ISlideChartElement | ISlideTableElement | ISlideMediaElement | ISlideGroupElement;
export interface ISlidePageBase {
    id: string;
    pageType: PageTypeEnum;
    name: string;
    /** Imported PPTX theme id for this page. Usually inherited from slide masters. */
    themeId?: string;
    pageSize?: ISlidePageSize;
    background?: ISlideBackgroundData;
    /** OOXML header/footer enablement and text metadata for dt/ftr/sldNum/hdr placeholders. */
    headerFooter?: ISlideHeaderFooterData;
    /** Whether this page shows inherited master shapes. Mirrors OOXML showMasterSp. Defaults to true. */
    showMasterSp?: boolean;
    elementOrder: string[];
    elements: Record<string, ISlidePageElement>;
    visible?: boolean;
    custom?: SlideCustomData;
}
/** What triggers an animation effect to start. */
export type SlideAnimationTrigger = 'onClick' | 'afterPrev' | 'withPrev';
/** A single animation effect bound to one page element. */
export interface ISlideAnimationEffect {
    id: string;
    /** ID of the element to animate. */
    targetElementId: string;
    /** Effect type, e.g. 'appear', 'fade', 'flyIn', 'wipe'. */
    effectType: string;
    /** Duration in milliseconds. */
    duration: number;
    /** Start delay in milliseconds. */
    delay?: number;
    trigger?: SlideAnimationTrigger;
    /** Additional effect-specific parameters. */
    params?: Record<string, unknown>;
}
/** An ordered group of effects (one "click sequence" in PPTX). */
export interface ISlideAnimationSequence {
    id: string;
    effects: ISlideAnimationEffect[];
}
/** Slide transition effect. */
export interface ISlideTransition {
    type: SlideTransitionTypeEnum;
    /** Duration in milliseconds. V1 uses this field; default is 700. */
    duration?: number;
    /**
     * Direction uses PowerPoint "From ..." semantics.
     * For example, Right means the destination slide enters from the right.
     *
     * Now direction only for directional effects: Push, Wipe, Cover,
     * Uncover, Reveal, and Split. Non-directional effects such as Fade, Cut,
     * Zoom, and None ignore this field during normalization.
     */
    direction?: SlideTransitionDirectionEnum;
    /** Reserved in V1. Future timing support can use this field. */
    advanceOnClick?: boolean;
    /** Reserved in V1. Future timing support can use this field. */
    advanceAfterTime?: number;
    /** Reserved in V1 for PowerPoint slow/medium/fast compatibility. Playback duration uses `duration`. */
    speed?: SlideTransitionSpeedEnum;
    /** Reserved in V1 for PowerPoint transition sounds. */
    sound?: ISlideTransitionSound;
    /** Reserved in V1 for PowerPoint sound looping behavior. */
    loopSoundUntilNext?: boolean;
    /** Reserved in V1 for transition-specific PowerPoint variants. */
    effectOptions?: Record<string, unknown>;
    /** Reserved in V1 for import/export preservation of unknown data. */
    extension?: Record<string, unknown>;
}
export interface ISlideTransitionSound {
    name?: string;
    source?: string;
    loopUntilNext?: boolean;
}
export interface ISlidePage extends ISlidePageBase {
    pageType: PageTypeEnum.Slide;
    layoutPageId?: string;
    masterPageId?: string;
    speakerNotes?: string;
    skipped?: boolean;
    /** Animation sequences for this slide (ordered click sequences). */
    animations?: ISlideAnimationSequence[];
}
export interface ISlideMasterPage extends ISlidePageBase {
    pageType: PageTypeEnum.Master;
    themeId?: string;
}
export interface ISlideLayoutPage extends ISlidePageBase {
    pageType: PageTypeEnum.Layout;
    layoutType: SlidePageLayoutTypeEnum;
    masterPageId?: string;
}
export interface ISlideHandoutMasterPage extends ISlidePageBase {
    pageType: PageTypeEnum.HandoutMaster;
}
export interface ISlideNotesMasterPage extends ISlidePageBase {
    pageType: PageTypeEnum.NotesMaster;
}
export type ISlidePageData = ISlidePage | ISlideMasterPage | ISlideLayoutPage | ISlideHandoutMasterPage | ISlideNotesMasterPage;
export interface ISlideData {
    id: string;
    name: string;
    rev?: number;
    appVersion?: string;
    locale?: LocaleType;
    defaultPageSize: ISlidePageSize;
    slideOrder: string[];
    slides: Record<string, ISlidePage>;
    masterPageOrder?: string[];
    masterPages?: Record<string, ISlideMasterPage>;
    layoutPageOrder?: string[];
    layoutPages?: Record<string, ISlideLayoutPage>;
    handoutMasterPageOrder?: string[];
    handoutMasterPages?: Record<string, ISlideHandoutMasterPage>;
    notesMasterPageOrder?: string[];
    notesMasterPages?: Record<string, ISlideNotesMasterPage>;
    activeSlideId?: string;
    transitionRecords?: Record<string, ISlideTransition>;
    slideTransitionRefs?: Record<string, string>;
    theme?: ISlideThemeData;
    themes?: Record<string, ISlideThemeData>;
    zoomRatio?: number;
    resources?: IResources;
    custom?: SlideCustomData;
}
export interface ISlideInsertShapeOptions {
    shapeType: ShapeTypeEnum;
    nameBase?: string;
    width?: number;
    height?: number;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    startArrow?: boolean;
    endArrow?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
}
export interface ISlideInsertTextBoxOptions {
    width?: number;
    height?: number;
    horizontal?: boolean;
    vertical?: boolean;
    text?: string;
    fontSize?: number;
    fitToContent?: boolean;
}
export interface IUpdateSlideShapeTransformOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    rotation?: number;
}
export interface IUpdateSlideShapeStyleOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    /** Shape outer shadow. Use null to remove the existing shadow. */
    outerShadow?: IBasicShapeData['outerShadow'] | null;
}
export interface IUpdateSlideShapeDataOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    shapeData?: IShapeData;
    fill?: IBasicShapeData['fill'];
    stroke?: IShapeLineStyle;
    ln?: ICxnShapeData['ln'];
}
export interface IUpdateSlideImageClipShapeOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    prstGeom: ShapeTypeEnum;
    adjustValues?: Record<string, number>;
}
export interface ISlideConnectionSite {
    /** Normalized X position within the bounding box (0 = left, 1 = right). */
    x: number;
    /** Normalized Y position within the bounding box (0 = top, 1 = bottom). */
    y: number;
    /** Connection-site index used by connector relation data. */
    idx: number;
    /** Connection angle hint in degrees (0 = right, 90 = down, etc.). */
    ang?: number;
}
export interface ISlideAdjustHandle {
    /** Normalized X position within the bounding box. */
    x: number;
    /** Normalized Y position within the bounding box. */
    y: number;
    /** Name of the adjust-value key this handle controls. */
    name: string;
}
export interface ISlidePlaceholderImageContent {
    kind: 'image';
    source: string;
    imageSourceType?: ImageSourceType;
}
/**
 * Scene capability flags
 *
 * 用于驱动渲染层和交互层判断
 */
export interface ISlideSceneCapability {
    /**
     * 是否允许编辑 shape
     */
    editable: boolean;
    /**
     * 是否显示 placeholder
     */
    showPlaceholder: boolean;
    /**
     * 是否显示选择框
     */
    showSelection: boolean;
    /**
     * 是否显示辅助线 / 标尺
     */
    showGuide: boolean;
    /**
     * 是否执行动画
     */
    enableAnimation: boolean;
    /**
     * 是否允许缩略图拖拽排序
     */
    sortable: boolean;
    /**
     * 是否显示备注区
     */
    showNotesPanel: boolean;
    /**
     * 是否允许播放超链接 / 点击动作
     */
    enableAction: boolean;
}
