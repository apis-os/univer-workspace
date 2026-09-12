import { PageElementTypeEnum, PageTypeEnum, PlaceholderTypeEnum, SlideBackgroundTypeEnum, SlidePageSizePresetEnum, SlidePresentationBackgroundGraphicFitEnum, SlidePresentationBackgroundGraphicsTargetEnum, SlideTransitionDirectionEnum, SlideTransitionSpeedEnum, SlideTransitionTypeEnum } from '@univerjs-pro/slides';
export interface IFSlideEnumMixin {
    /**
     * Slide page model enum used by slide snapshots and Facade page APIs.
     * @returns {typeof PageTypeEnum} The enum object with members such as Slide, Master, and Layout.
     * @example
     * ```ts
     * const pageType = univerAPI.Enum.SlidePageTypeEnum.Slide;
     * ```
     */
    SlidePageTypeEnum: typeof PageTypeEnum;
    /**
     * Slide page element model enum used by slide snapshot elements.
     * @returns {typeof PageElementTypeEnum} The enum object with members such as Shape, Text, and Image.
     * @example
     * ```ts
     * const elementType = univerAPI.Enum.SlidePageElementTypeEnum.Shape;
     * ```
     */
    SlidePageElementTypeEnum: typeof PageElementTypeEnum;
    /**
     * Slide page size preset enum.
     * @returns {typeof SlidePageSizePresetEnum} The slide page size preset enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.setPageSize({
     *   width: 1024,
     *   height: 768,
     *   preset: univerAPI.Enum.SlidePageSizePresetEnum.WideScreen16By10
     * });
     * ```
     */
    SlidePageSizePresetEnum: typeof SlidePageSizePresetEnum;
    /**
     * Slide presentation background graphic fit enum.
     * @returns {typeof SlidePresentationBackgroundGraphicFitEnum} The slide presentation background graphic fit enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.setPresentationBackgroundGraphics([{
     *   source: 'image-source-id',
     *   imageSourceType: univerAPI.Enum.ImageSourceType.UUID,
     *   fit: univerAPI.Enum.SlidePresentationBackgroundGraphicFitEnum.Cover,
     * }]);
     * ```
     */
    SlidePresentationBackgroundGraphicFitEnum: typeof SlidePresentationBackgroundGraphicFitEnum;
    /**
     * Slide presentation background graphics target enum.
     * @returns {typeof SlidePresentationBackgroundGraphicsTargetEnum} The slide presentation background graphics target enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.setPresentationBackgroundGraphics([{
     *   source: 'image-source-id',
     *   imageSourceType: univerAPI.Enum.ImageSourceType.UUID,
     *   fit: univerAPI.Enum.SlidePresentationBackgroundGraphicFitEnum.Cover,
     * }], {
     *   target: univerAPI.Enum.SlidePresentationBackgroundGraphicsTargetEnum.ActiveMaster
     * });
     * ```
     */
    SlidePresentationBackgroundGraphicsTargetEnum: typeof SlidePresentationBackgroundGraphicsTargetEnum;
    /**
     * Slide transition type enum. Direction is only preserved for directional transition types.
     * @returns {typeof SlideTransitionTypeEnum} The slide transition type enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.applyTransitionToAll({
     *   type: univerAPI.Enum.SlideTransitionTypeEnum.Push,
     *   duration: 1000,
     *   direction: univerAPI.Enum.SlideTransitionDirectionEnum.Right,
     * });
     * ```
     */
    SlideTransitionTypeEnum: typeof SlideTransitionTypeEnum;
    /**
     * Slide transition direction enum. Used by Push, Wipe, Cover, Uncover, Reveal, and Split.
     * @returns {typeof SlideTransitionDirectionEnum} The slide transition direction enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.applyTransitionToAll({
     *   type: univerAPI.Enum.SlideTransitionTypeEnum.Push,
     *   duration: 1000,
     *   direction: univerAPI.Enum.SlideTransitionDirectionEnum.Right,
     * });
     * ```
     */
    SlideTransitionDirectionEnum: typeof SlideTransitionDirectionEnum;
    /**
     * Slide transition speed enum. Preserved for PowerPoint compatibility; playback timing uses `duration`.
     * @returns {typeof SlideTransitionSpeedEnum} The slide transition speed enum.
     */
    SlideTransitionSpeedEnum: typeof SlideTransitionSpeedEnum;
    /**
     * Slide background type enum.
     * @returns {typeof SlideBackgroundTypeEnum} The slide background type enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     *
     * // Set a solid background color on this slide.
     * fSlide.setBackground({
     *   type: univerAPI.Enum.SlideBackgroundTypeEnum.Solid,
     *   color: '#4f90ff',
     * });
     *
     * // Set a gradient background on this slide.
     * fSlide.setBackground({
     *   type: univerAPI.Enum.SlideBackgroundTypeEnum.Gradient,
     *   angle: 45,
     *   stops: [
     *     {
     *       color: '#4f90ff',
     *       position: 0,
     *     },
     *     {
     *       color: '#ffffff',
     *       position: 1,
     *     }
     *   ],
     * });
     *
     * // Set an image background on this slide.
     * fSlide.setBackground({
     *   type: univerAPI.Enum.SlideBackgroundTypeEnum.Image,
     *   source: 'https://example.com/image.png',
     *   imageSourceType: univerAPI.Enum.ImageSourceType.URL,
     *   fit: univerAPI.Enum.SlidePresentationBackgroundGraphicFitEnum.Cover,
     * });
     *
     * // Set a pattern background on this slide.
     * fSlide.setBackground({
     *   type: univerAPI.Enum.SlideBackgroundTypeEnum.Pattern,
     *   pattern: 'diagonal',
     *   foregroundColor: '#4f90ff',
     *   backgroundColor: '#ffffff',
     * });
     * ```
     */
    SlideBackgroundTypeEnum: typeof SlideBackgroundTypeEnum;
    /**
     * Slide placeholder type enum.
     * @returns {typeof PlaceholderTypeEnum} The slide placeholder type enum.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     *
     * const tableInfo = fSlide.newTable()
     *   .setRows(3)
     *   .setColumns(4)
     *   .setPlaceholder({
     *     id: 'body-1',
     *     type: univerAPI.Enum.SlidePlaceholderTypeEnum.Table
     *   })
     *   .build();
     * fSlide.insertTable(tableInfo);
     * ```
     */
    SlidePlaceholderTypeEnum: typeof PlaceholderTypeEnum;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFSlideEnumMixin {
    }
}
