import type { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { ISlideDrawingTransform, ISlideImageElement, SlideModel } from '@univerjs-pro/slides';
import type { ImageSourceType, Injector } from '@univerjs/core';
import { ICommandService, IPermissionService } from '@univerjs/core';
import { FPageElement } from './f-page-element';
export interface ISlideImageBuilderInfo {
    /**
     * @property {string} unitId The presentation id where the image is located.
     */
    unitId: string;
    /**
     * @property {string} subUnitId The slide id where the image is located.
     */
    subUnitId: string;
    /**
     * @property {ISlideImageElement} element The image element data.
     */
    element: ISlideImageElement;
}
/**
 * The facade class for a slide image element.
 * @hideconstructor
 */
export declare class FImage extends FPageElement<ISlideImageElement> {
    constructor(unitId: string, subUnitId: string, elementId: string, slideModel: SlideModel, injector: Injector, commandService: ICommandService, permissionService: IPermissionService);
    /**
     * Get the image source.
     * @returns {string} The image source.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const images = fSlide.getImages();
     * console.log(images[0]?.getSource());
     * ```
     */
    getSource(): string;
    /**
     * Update the image source.
     * @param {string} source The image URL, base64 data URI, or image id.
     * @param {ImageSourceType} [imageSourceType] The image source type.
     * @returns {FImage} This image, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const image = fSlide.getImages()[0];
     * if (image) {
     *   image.setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL);
     * }
     * ```
     */
    setSource(source: string, imageSourceType?: ImageSourceType): this;
    /**
     * Set the crop rectangle of the image.
     * @param {ISlideImageElement['crop']} crop The crop rectangle.
     * @returns {FImage} This image, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const image = fSlide.getImages()[0];
     * if (image) {
     *   image.setCrop({
     *     left: 10,
     *     top: 10,
     *     right: 10,
     *     bottom: 10
     *   });
     * }
     * ```
     */
    setCrop(crop: ISlideImageElement['crop']): this;
    /**
     * Set the preset shape used to clip the image.
     * @param {ShapeTypeEnum} prstGeom The preset shape type.
     * @param {Record<string, number>} [adjustValues] Optional adjust values for the clip shape.
     * @returns {FImage} This image, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const image = fSlide.getImages()[0];
     * if (image) {
     *   image.setClipShape(univerAPI.Enum.ShapeTypeEnum.RoundRect, { adj1: 5000 });
     * }
     * ```
     */
    setClipShape(prstGeom: ShapeTypeEnum, adjustValues?: Record<string, number>): this;
    /**
     * Set shape-style data for the image frame, such as picture border.
     * @param {ISlideImageElement['shapeData']} shapeData Shape-style data reused from the shape model.
     * @returns {FImage} This image, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const image = fSlide.getImages()[0];
     * if (image) {
     *   image.setShapeData({
     *     stroke: {
     *       color: '#FF0000',
     *       width: 2,
     *       lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *     },
     *   });
     * }
     * ```
     */
    setShapeData(shapeData: ISlideImageElement['shapeData']): this;
    /**
     * Returns a builder initialized from this image. The builder does not update the slide until it is passed to `fSlide.updateImage()`.
     * @returns {FImageBuilder} An image builder.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const image = fSlide.getImages()[0];
     * if (image) {
     *   const imageInfo = image.toBuilder()
     *     .setSize(480, 300)
     *     .build();
     *   fSlide.updateImage(imageInfo);
     * }
     * ```
     */
    toBuilder(): FImageBuilder;
}
/**
 * The slide image builder. It is used to create or update an image in a slide.
 * Unlike UI insertion, this builder requires an explicit image source and does not open a file picker.
 *
 * @example
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 *
 * const imageInfo = fSlide.newImage()
 *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
 *   .setAbsolutePosition(80, 120)
 *   .setSize(320, 180)
 *   .setRotation(15)
 *   .setCrop({
 *     left: 10,
 *     top: 10,
 *     right: 10,
 *     bottom: 10
 *   })
 *   .setClipShape(univerAPI.Enum.ShapeTypeEnum.RoundRect, { adj1: 5000 })
 *   .build();
 * fSlide.insertImage(imageInfo);
 * ```
 */
export declare class FImageBuilder {
    protected readonly _injector: Injector;
    /**
     * @property {string} unitId The presentation id where the image is located.
     */
    unitId: string;
    /**
     * @property {string} subUnitId The slide id where the image is located.
     */
    subUnitId: string;
    /**
     * @property {string} elementId The image element id.
     */
    elementId: string;
    /**
     * @property {ISlideDrawingTransform} transform The shape transform containing position, size, rotation, and flip values.
     */
    transform: ISlideDrawingTransform;
    /**
     * @property {string} [source] The image URL, base64 data URI, or image id.
     */
    source?: string;
    /**
     * @property {ImageSourceType} [imageSourceType] The image source type.
     */
    imageSourceType?: ImageSourceType;
    /**
     * @property {ISlideImageElement['crop']} [crop] The crop rectangle of the image.
     */
    crop?: ISlideImageElement['crop'];
    /**
     * @property {ShapeTypeEnum} [prstGeom] The preset shape used to clip the image.
     */
    prstGeom?: ShapeTypeEnum;
    /**
     * @property {Record<string, number>} [adjustValues] The adjust values of the image clip shape.
     */
    adjustValues?: Record<string, number>;
    /**
     * @property {ISlideImageElement['shapeData']} [shapeData] Shape-style data for the image frame.
     */
    shapeData?: ISlideImageElement['shapeData'];
    constructor(unitId: string, subUnitId: string, _injector: Injector, initData?: Partial<ISlideImageElement>);
    /**
     * Sets the image source.
     * @param {string} source The image URL, base64 data URI, or image id.
     * @param {ImageSourceType} [imageSourceType] The image source type. Which can be found from `ImageSourceType`.
     * @returns {FImageBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    setSource(source: string, imageSourceType?: ImageSourceType): this;
    /**
     * Sets the position by absolute slide coordinates.
     * @param {number} left The x-coordinate of the image's top-left corner.
     * @param {number} top The y-coordinate of the image's top-left corner.
     * @returns {FImageBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
     *   .setAbsolutePosition(80, 120)
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    setAbsolutePosition(left: number, top: number): this;
    /**
     * Sets the image size in slide pixels.
     * @param {number} width The image width.
     * @param {number} height The image height.
     * @returns {FImageBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
     *   .setSize(320, 180)
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    setSize(width: number, height: number): this;
    /**
     * Sets the rotation of the image in degrees.
     * @param {number} rotation The rotation in degrees.
     * @returns {FImageBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
     *   .setRotation(15)
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    setRotation(rotation: number): this;
    /**
     * Sets the crop rectangle of the image.
     * @param {ISlideImageElement['crop']} crop The crop rectangle.
     * @param {number} [crop.left] The left crop offset.
     * @param {number} [crop.top] The top crop offset.
     * @param {number} [crop.right] The right crop offset.
     * @param {number} [crop.bottom] The bottom crop offset.
     * @returns {FImageBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
     *   .setCrop({
     *     left: 10,
     *     top: 10,
     *     right: 10,
     *     bottom: 10
     *   })
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    setCrop(crop: ISlideImageElement['crop']): this;
    /**
     * Sets the preset shape used to clip the image.
     * @param {ShapeTypeEnum} prstGeom The preset shape type.
     * @param {Record<string, number>} [adjustValues] Optional adjust values for the clip shape.
     * @returns {FImageBuilder} This builder, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
     *   .setClipShape(univerAPI.Enum.ShapeTypeEnum.RoundRect, { adj1: 5000 })
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    setClipShape(prstGeom?: ShapeTypeEnum, adjustValues?: Record<string, number>): this;
    /**
     * Sets shape-style data for the image frame, such as picture border.
     * @param {ISlideImageElement['shapeData']} shapeData Shape-style data reused from the shape model.
     * @returns {FImageBuilder} This builder, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
     *   .setShapeData({
     *     stroke: {
     *       color: '#FF0000',
     *       width: 2,
     *       lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *     },
     *   })
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    setShapeData(shapeData: ISlideImageElement['shapeData']): this;
    /**
     * Builds the image builder info. This method does not automatically draw the image on the slide.
     * A new image must be inserted via `fSlide.insertImage(imageInfo)`, and an existing image should be updated via `fSlide.updateImage(imageInfo)`.
     * @returns {ISlideImageBuilderInfo} The image builder info.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png')
     *   .setAbsolutePosition(80, 120)
     *   .setSize(320, 180)
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    build(): ISlideImageBuilderInfo;
}
