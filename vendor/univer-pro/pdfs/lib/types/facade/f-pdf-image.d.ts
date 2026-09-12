import type { IPdfEditorManagedImageResource, IPdfImageObject, PdfDocumentModel, PdfMatrix, PdfRect } from '@univerjs-pro/pdfs';
import type { IPdfFacadeTransform, IPdfImageBuilderInfo, IPdfImageCrop } from './types';
import { ImageSourceType, Injector } from '@univerjs/core';
import { FPdfPageElement } from './f-pdf-page-element';
export declare const DEFAULT_IMAGE_WIDTH_PT = 288;
export declare const DEFAULT_IMAGE_HEIGHT_PT = 162;
/**
 * Facade for one editable managed PDF image.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const imageInfo = page.newImage()
 *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
 *   .setSize(240, 135)
 *   .build();
 * const image = page.insertImage(imageInfo);
 * console.log(image.getSource());
 * console.log(image.getImageSourceType());
 *
 * image
 *   .setPosition(36, 72)
 *   .setRotation(15)
 *   .setCrop({ left: 0, top: 0, right: 100, bottom: 100 })
 *   .setOpacity(0.75);
 * ```
 */
export declare class FPdfImage extends FPdfPageElement<IPdfImageObject> {
    constructor(model: PdfDocumentModel, pageId: string, objectId: string, injector: Injector);
    /**
     * Return the durable image source string.
     *
     * @returns {string} The URL, UUID, or base64 image source.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = page.getImages()[0];
     * console.log(image?.getSource());
     * ```
     */
    getSource(): string;
    /**
     * Return the durable image source kind.
     *
     * @returns {ImageSourceType} The image source type.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = page.getImages()[0];
     * console.log(image?.getImageSourceType());
     * ```
     */
    getImageSourceType(): ImageSourceType;
    /**
     * Replace the managed image source atomically.
     *
     * @param {string} source The new URL, UUID, or base64 source.
     * @param {ImageSourceType} [imageSourceType] The explicit source type, or omit it to infer the type.
     * @returns {this} This image Facade for chaining.
     * @throws {TypeError} If the image source does not match its source type.
     * @throws {Error} If the image is stale or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = page.getImages()[0];
     * if (image) {
     *   image.setSource('https://example.com/new-image.png');
     * }
     * ```
     */
    setSource(source: string, imageSourceType?: ImageSourceType): this;
    /**
     * Return a detached crop descriptor.
     *
     * @returns {Readonly<IPdfImageCrop> | null} The crop offsets, or `null` when uncropped.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = page.getImages()[0];
     * console.log(image?.getCrop());
     * ```
     */
    getCrop(): Readonly<IPdfImageCrop> | null;
    /**
     * Set the visible image crop window.
     *
     * @param {IPdfImageCrop} crop The crop offsets.
     * @returns {this} This image Facade for chaining.
     * @throws {RangeError} If a crop value is not finite or the crop rectangle is empty.
     * @throws {Error} If the image is stale or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = page.getImages()[0];
     * if (image) {
     *   image.setCrop({ left: 0, top: 0, right: 100, bottom: 100 });
     * }
     * ```
     */
    setCrop(crop: IPdfImageCrop): this;
    /**
     * Return the current image opacity.
     *
     * @returns {number} The opacity from 0 through 1.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = page.getImages()[0];
     * console.log(image?.getOpacity());
     * ```
     */
    getOpacity(): number;
    /**
     * Set image opacity from zero through one.
     *
     * @param {number} opacity The opacity from 0 through 1.
     * @returns {this} This image Facade for chaining.
     * @throws {RangeError} If opacity is outside the inclusive 0-through-1 range.
     * @throws {Error} If the image is stale or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = page.getImages()[0];
     * if (image) {
     *   image.setOpacity(0.75);
     * }
     * ```
     */
    setOpacity(opacity: number): this;
    /**
     * Return a detached builder initialized from this live image.
     *
     * @returns {FPdfImageBuilder} A detached builder for this image.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = page.getImages()[0];
     * const info = image?.toBuilder()
     *   .setSize(320, 180)
     *   .build();
     * ```
     */
    toBuilder(): FPdfImageBuilder;
    /**
     * Remove this placement and release its managed resource when unreferenced.
     *
     * @returns {void}
     * @throws {Error} If the image is stale or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = page.getImages()[0];
     * if (image) {
     *   image.remove();
     * }
     * ```
     */
    remove(): void;
    private _getResource;
    private _applyBuilder;
}
/**
 * Detached builder for creating or updating a PDF image.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const imageInfo = page.newImage()
 *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
 *   .setAbsolutePosition(36, 72)
 *   .setSize(240, 135)
 *   .setRotation(15)
 *   .setCrop({ left: 0, top: 0, right: 100, bottom: 100 })
 *   .setOpacity(0.75)
 *   .build();
 * page.insertImage(imageInfo);
 * ```
 */
export declare class FPdfImageBuilder {
    private readonly _unitId;
    private readonly _pageId;
    private _elementId;
    private _source?;
    private _imageSourceType?;
    private _transform;
    private _crop?;
    private _opacity?;
    private _assetId?;
    constructor(_unitId: string, _pageId: string, init?: Partial<IPdfImageBuilderInfo['element']>);
    /**
     * Set the URL, UUID, or base64 image source.
     *
     * @param {string} source The image source.
     * @param {ImageSourceType} [imageSourceType] The explicit source type, or omit it to infer the type.
     * @returns {this} This builder for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const imageInfo = page.newImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
     *   .build();
     * page.insertImage(imageInfo);
     * ```
     */
    setSource(source: string, imageSourceType?: ImageSourceType): this;
    /**
     * Set the absolute position in PDF points.
     *
     * @param {number} left The left position in points.
     * @param {number} top The top position in points.
     * @returns {this} This builder for chaining.
     * @throws {RangeError} If either position is not finite.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const imageInfo = page.newImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
     *   .setAbsolutePosition(36, 72)
     *   .build();
     * page.insertImage(imageInfo);
     * ```
     */
    setAbsolutePosition(left: number, top: number): this;
    /**
     * Set image width and height in PDF points.
     *
     * @param {number} width The width in points.
     * @param {number} height The height in points.
     * @returns {this} This builder for chaining.
     * @throws {RangeError} If either size is non-finite or not positive.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const builder = pdf?.getPageByIndex(0)?.newImage().setSize(288, 162);
     * ```
     */
    setSize(width: number, height: number): this;
    /**
     * Set image rotation in degrees.
     *
     * @param {number} rotation The rotation in degrees.
     * @returns {this} This builder for chaining.
     * @throws {RangeError} If the rotation is not finite.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const imageInfo = page.newImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
     *   .setSize(240, 135)
     *   .setRotation(15)
     *   .build();
     * page.insertImage(imageInfo);
     * ```
     */
    setRotation(rotation: number): this;
    /**
     * Set the detached crop descriptor.
     *
     * @param {IPdfImageCrop} crop The crop offsets.
     * @returns {this} This builder for chaining.
     * @throws {RangeError} If a crop value is not finite or the crop rectangle is empty.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const imageInfo = page.newImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
     *   .setCrop({ left: 0, top: 0, right: 100, bottom: 100 })
     *   .build();
     * page.insertImage(imageInfo);
     * ```
     */
    setCrop(crop: IPdfImageCrop): this;
    /**
     * Set the detached image opacity.
     *
     * @param {number} opacity The opacity from 0 through 1.
     * @returns {this} This builder for chaining.
     * @throws {RangeError} If opacity is outside the inclusive 0-through-1 range.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const imageInfo = page.newImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
     *   .setOpacity(0.75)
     *   .build();
     * page.insertImage(imageInfo);
     * ```
     */
    setOpacity(opacity: number): this;
    /**
     * Build detached image information without modifying the PDF.
     *
     * @returns {IPdfImageBuilderInfo} Detached information for `insertImage` or `updateImage`.
     * @throws {Error} If no image source has been set.
     * @throws {RangeError} If a placement, crop, or opacity value is invalid.
     * @throws {TypeError} If the image source does not match its source type.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const imageInfo = page.newImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
     *   .setAbsolutePosition(36, 72)
     *   .setSize(240, 135)
     *   .setRotation(15)
     *   .setCrop({ left: 0, top: 0, right: 100, bottom: 100 })
     *   .setOpacity(0.75)
     *   .build();
     * page.insertImage(imageInfo);
     * ```
     */
    build(): IPdfImageBuilderInfo;
}
export declare function createPdfManagedImageResource(info: IPdfImageBuilderInfo): IPdfEditorManagedImageResource;
export declare function resolvePdfManagedImageResource(model: PdfDocumentModel, info: IPdfImageBuilderInfo): IPdfEditorManagedImageResource;
export declare function createPdfImagePlacement(transform: IPdfFacadeTransform): {
    bbox: PdfRect;
    transform: PdfMatrix;
};
export declare function createPdfImageCropRect(crop: IPdfImageCrop, bbox: PdfRect): PdfRect;
