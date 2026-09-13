import type { IResolvedShapeTextBoxOptions, IShapeRef, IShapeTextBoxOptions } from '@univerjs-pro/engine-shape';
import type { HorizontalAlign, Injector, ITextStyle, RichTextValue, VerticalAlign } from '@univerjs/core';
import type { IShapeGradientStop } from './f-shape';
import { ImageFillModeEnum, ImageSourceTypeEnum, ShapeGradientTypeEnum } from '@univerjs-pro/engine-shape';
/** Optional picture-fill properties accepted by `FShapeText.setImageFill()`. */
export interface IShapeTextImageFillOptions {
    /** Picture opacity in the range from 0 to 1. */
    opacity?: number;
    /** Whether the picture stretches once or tiles repeatedly. */
    mode?: ImageFillModeEnum;
    /** Horizontal picture scale. */
    scaleX?: number;
    /** Vertical picture scale. */
    scaleY?: number;
    /** Horizontal picture offset. */
    offsetX?: number;
    /** Vertical picture offset. */
    offsetY?: number;
}
/**
 * A live text facade for a Shape in any supported host.
 *
 * Sheet, Doc, Slide, and Board Shapes share this rich-text effect path. Glow and outer shadow support here does not
 * imply that a host's standalone document text UI exposes the same authoring controls.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const fShape = fWorksheet.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect });
 * const fShapeText = fShape?.getText();
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const paragraph = fDocument.getParagraphs()[0];
 * const fShape = fDocument.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
 *   placement: {
 *     wrappingStyle: univerAPI.Enum.TextWrappingStyle.INLINE,
 *     anchor: {
 *       paragraphId: paragraph.getId(),
 *       segmentId: paragraph.getSegmentId(),
 *     },
 *   },
 * });
 * const fShapeText = fShape?.getText();
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const fShape = fSlide.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect });
 * const fShapeText = fShape?.getText();
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const fShape = fBoard.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect });
 * const fShapeText = fShape?.getText();
 * ```
 *
 * @example
 * ```ts
 * fShapeText
 *   ?.setText('Quarterly review')
 *   .setColor('#2563eb')
 *   .setFontSize(18)
 *   .setBold(true)
 *   .setHorizontalAlign(univerAPI.Enum.HorizontalAlign.CENTER)
 *   .setVerticalAlign(univerAPI.Enum.VerticalAlign.MIDDLE)
 *   .setTextBoxOptions({ padding: { left: 12, right: 12, top: 8, bottom: 8 } });
 * ```
 */
export declare class FShapeText {
    private readonly _shapeRef;
    private readonly _injector;
    constructor(_shapeRef: IShapeRef, _injector: Injector);
    /**
     * Returns the Shape text as a detached rich-text value.
     *
     * To edit existing Shape text, call `copy()` on the returned value, change the builder, and pass it to
     * `setRichText()` to persist the result.
     *
     * @returns {RichTextValue | null} A rich-text value, or `null` when the Shape has no text.
     * @example
     * ```ts
     * const richText = fShapeText.getRichText()?.copy();
     * const [link] = richText?.getLinks() ?? [];
     * if (richText && link) {
     *   richText.updateLink(link.rangeId, 'https://univer.ai/docs');
     *   fShapeText.setRichText(richText);
     * }
     * ```
     */
    getRichText(): RichTextValue | null;
    /**
     * Returns the Shape text as plain text.
     * @returns {string | null} The plain text, or `null` when the Shape has no text.
     * @example
     * ```ts
     * console.log(fShapeText.getPlainText());
     * ```
     */
    getPlainText(): string | null;
    /**
     * Replaces the Shape text with a rich-text value.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * const richText = univerAPI.newRichText()
     *   .text('Read ')
     *   .link('Univer documentation', 'https://docs.univer.ai')
     *   .text(' for details.');
     * fShapeText.setRichText(richText);
     * ```
     */
    setRichText(value: RichTextValue): this;
    /**
     * Replaces the Shape text with plain text.
     * @param {string} text The plain text to set.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setText('Quarterly review');
     * ```
     */
    setText(text: string): this;
    /**
     * Merges a text style into the complete Shape text.
     * @param {ITextStyle} style The Univer document text style to apply.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setTextStyle({
     *   ff: 'Inter',
     *   fs: 18,
     *   glow: { color: '#f97316', radius: 6 },
     *   outerShadow: {
     *     color: '#000000',
     *     opacity: 0.35,
     *     blurRadius: 4,
     *     distance: 3,
     *     direction: 45,
     *   },
     * });
     * ```
     */
    setTextStyle(style: ITextStyle): this;
    /**
     * Replaces the complete Shape text fill with a solid color.
     * @param {string} color The CSS text color.
     * @param {number} [opacity] Optional opacity in the range from 0 to 1.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setColor('#2563eb', 0.8);
     * ```
     */
    setColor(color: string, opacity?: number): this;
    /**
     * Removes the visible fill from the complete Shape text.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setNoneFill();
     * ```
     */
    setNoneFill(): this;
    /**
     * Replaces the complete Shape text fill with a gradient.
     * @param {ShapeGradientTypeEnum} gradientType The gradient geometry.
     * @param {IShapeGradientStop[]} stops At least two gradient color stops.
     * @param {number} [angle] Optional gradient angle in degrees.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setGradientFill(univerAPI.Enum.ShapeGradientTypeEnum.Linear, [
     *   { position: 0, color: '#2563eb' },
     *   { position: 1, color: '#a855f7' },
     * ], 45);
     * ```
     */
    setGradientFill(gradientType: ShapeGradientTypeEnum, stops: IShapeGradientStop[], angle?: number): this;
    /**
     * Replaces the complete Shape text fill with an image.
     * @param {string} source The URL, UUID, or base64 image source.
     * @param {ImageSourceTypeEnum} [sourceType] The image source type. Defaults to URL.
     * @param {IShapeTextImageFillOptions} [options] Optional picture opacity, mode, scale, and offset.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setImageFill(
     *   'https://github.com/dream-num.png',
     *   univerAPI.Enum.ShapeImageSourceTypeEnum.URL,
     *   { opacity: 0.9, mode: univerAPI.Enum.ShapeImageFillModeEnum.Stretch }
     * );
     * ```
     */
    setImageFill(source: string, sourceType?: ImageSourceTypeEnum, options?: IShapeTextImageFillOptions): this;
    /**
     * Sets the font size of the complete Shape text.
     * @param {number} fontSize The font size in points.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setFontSize(18);
     * ```
     */
    setFontSize(fontSize: number): this;
    /**
     * Sets the font family of the complete Shape text.
     * @param {string} fontFamily The font family name.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setFontFamily('Inter');
     * ```
     */
    setFontFamily(fontFamily: string): this;
    /**
     * Sets whether the complete Shape text is bold.
     * @param {boolean} bold Whether bold formatting is enabled.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setBold(true);
     * ```
     */
    setBold(bold: boolean): this;
    /**
     * Sets whether the complete Shape text is italic.
     * @param {boolean} italic Whether italic formatting is enabled.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setItalic(true);
     * ```
     */
    setItalic(italic: boolean): this;
    /**
     * Sets whether the complete Shape text is underlined.
     * @param {boolean} underline Whether underline formatting is enabled.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setUnderline(true);
     * ```
     */
    setUnderline(underline: boolean): this;
    /**
     * Sets whether the complete Shape text has a strikethrough.
     * @param {boolean} strikethrough Whether strikethrough formatting is enabled.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setStrikethrough(true);
     * ```
     */
    setStrikethrough(strikethrough: boolean): this;
    /**
     * Sets the horizontal alignment of the Shape text.
     * @param {HorizontalAlign} align The horizontal alignment.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setHorizontalAlign(univerAPI.Enum.HorizontalAlign.CENTER);
     * ```
     */
    setHorizontalAlign(align: HorizontalAlign): this;
    /**
     * Sets the vertical alignment of the Shape text.
     * @param {VerticalAlign} align The vertical alignment.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setVerticalAlign(univerAPI.Enum.VerticalAlign.MIDDLE);
     * ```
     */
    setVerticalAlign(align: VerticalAlign): this;
    /**
     * Returns the resolved Shape text-box layout options.
     * @returns {IResolvedShapeTextBoxOptions | null} The resolved text-box options, or `null` when the Shape has no text.
     * @example
     * ```ts
     * console.log(fShapeText.getTextBoxOptions());
     * ```
     */
    getTextBoxOptions(): IResolvedShapeTextBoxOptions | null;
    /**
     * Updates the Shape text-box layout options.
     * @param {IShapeTextBoxOptions} options The text-box layout options to apply.
     * @returns {FShapeText} This Shape text facade for chaining.
     * @example
     * ```ts
     * fShapeText.setTextBoxOptions({
     *   textDirection: univerAPI.Enum.ShapeTextDirection.Horz,
     *   autoFitType: univerAPI.Enum.ShapeTextAutoFitType.NoAutoFit,
     *   textWrap: univerAPI.Enum.ShapeTextWrapType.Square,
     *   padding: { left: 12, right: 12, top: 8, bottom: 8 },
     * });
     * ```
     */
    setTextBoxOptions(options: IShapeTextBoxOptions): this;
    private _getAdapter;
    private _getShapeData;
    private _updateShapeData;
}
