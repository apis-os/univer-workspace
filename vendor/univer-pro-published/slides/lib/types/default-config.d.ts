import type { LocaleKey } from './locale/types';
import type { ISlidePlaceholderData, ISlidePlaceholderIconConfig } from './slide.type';
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeTextAutoFitType, ShapeTextWrapType } from '@univerjs-pro/engine-shape';
import { HorizontalAlign, VerticalAlign } from '@univerjs/core';
import { PlaceholderTypeEnum } from './slide.enum';
/**
 * Centralized default configurations for slide domain.
 *
 * These values are shared by core slide logic and UI implementations,
 * so they should live in @univerjs-pro/slides and be reused by consumers.
 */
/** Default geometry for inserted elements. */
export declare const SLIDE_INSERT_DEFAULT_SIZE: {
    shapeWidth: number;
    shapeHeight: number;
    textBoxWidth: number;
    textBoxHeight: number;
    minPositionOffset: number;
    fallbackImageWidth: number;
    fallbackImageHeight: number;
    minImageEdge: number;
    imageFitRatio: number;
};
export declare function resolveSlideTextBoxDefaultSize(isHorizontal?: boolean): {
    width: number;
    height: number;
};
/** Default text-box style for legacy text-element adaptors and facade-created text boxes. */
export declare const SLIDE_TEXT_BOX_DEFAULT_STYLE: {
    readonly isTextBox: true;
    readonly fill: {
        readonly fillType: ShapeFillEnum.SolidFill;
        readonly color: "#FFFFFF";
    };
    readonly stroke: {
        readonly lineStrokeType: ShapeLineTypeEnum.SolidLine;
        readonly width: 1;
        readonly color: "#bcbcbc";
    };
    readonly shapeText: {
        readonly isHorizontal: true;
        readonly text: "";
        readonly autoFitType: ShapeTextAutoFitType.SpAutoFit;
        readonly textWrap: ShapeTextWrapType.None;
        readonly dataModel: {
            readonly doc: {
                readonly id: "slide-text-box-default-document";
                readonly body: {
                    readonly dataStream: "\r\n";
                    readonly textRuns: readonly [{
                        readonly st: 0;
                        readonly ed: 1;
                        readonly ts: {
                            readonly fs: 16;
                            readonly cl: {
                                readonly rgb: "#111827";
                            };
                        };
                    }];
                    readonly paragraphs: readonly [{
                        readonly startIndex: 0;
                        readonly paragraphStyle: {
                            readonly horizontalAlign: HorizontalAlign.LEFT;
                        };
                    }];
                };
                readonly documentStyle: {
                    readonly marginBottom: 0;
                    readonly marginLeft: 0;
                    readonly marginRight: 0;
                    readonly marginTop: 0;
                    readonly textStyle: {
                        readonly fs: 16;
                        readonly cl: {
                            readonly rgb: "#111827";
                        };
                    };
                    readonly renderConfig: {
                        readonly horizontalAlign: HorizontalAlign.LEFT;
                        readonly verticalAlign: VerticalAlign.TOP;
                    };
                };
            };
            readonly ha: HorizontalAlign.LEFT;
            readonly va: VerticalAlign.TOP;
        };
    };
};
/**
 * Default placeholder icon keys when slide data has no explicit icon config.
 */
export declare const SLIDE_PLACEHOLDER_DEFAULT_ICON_KEYS: Partial<Record<PlaceholderTypeEnum, string[]>>;
/**
 * Supported single-click placeholder actions.
 *
 * Keep this intentionally narrow until multi-function placeholders are wired
 * with explicit UX. Object/table/media/diagram placeholders render no action
 * icons for now to avoid ambiguous placeholder behavior.
 */
export declare const SLIDE_PLACEHOLDER_ACTION_ICON_KEY_BY_TYPE: Partial<Record<PlaceholderTypeEnum, string>>;
/** Icon component names for placeholder icon keys in @univerjs/icons. */
export declare const SLIDE_PLACEHOLDER_ICON_COMPONENT_NAME_BY_KEY: Record<string, string>;
/** Prefix for i18n key: slides.placeholder.icon.{key}. */
export declare const SLIDE_PLACEHOLDER_ICON_LABEL_KEY_PREFIX = "slides.placeholder.icon.";
export declare function buildDefaultPlaceholderIcons(type: PlaceholderTypeEnum): ISlidePlaceholderIconConfig[];
export declare function resolvePlaceholderActionIcons(placeholder: ISlidePlaceholderData): ISlidePlaceholderIconConfig[];
/**
 * Fallback placeholder text i18n key by placeholder type.
 *
 * Layout pages should only define placeholder type and geometry. If a
 * placeholder element supplies its own `textConfig` / `defaultText`, that data
 * wins; this map is only used as the final type-based i18n-key fallback.
 */
export declare const SLIDE_PLACEHOLDER_DEFAULT_TEXT_KEYS: Partial<Record<PlaceholderTypeEnum, LocaleKey>>;
export declare function resolveDefaultPlaceholderTextKey(type: PlaceholderTypeEnum): string | undefined;
