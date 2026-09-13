import type { IDocsCalloutConfig } from '@univerjs-pro/docs-callout';
import type { FDocument } from '@univerjs/docs/facade';
import type { IDocsCalloutBorderStyle, IDocsCalloutInfo, IDocsCalloutRange, IDocsCalloutStyle } from './types';
import { DocsCalloutModel } from '@univerjs-pro/docs-callout';
import { ICommandService, ThemeService } from '@univerjs/core';
/**
 * Facade object for a single docs callout block.
 * @example
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 *
 * const callouts = fDocument.getCallouts();
 * console.log(callouts);
 *
 * const callout = fDocument.findCalloutByText('Important');
 * console.log(callout?.getText());
 * if (callout) {
 *   console.log(callout.getStyle());
 *   callout.setBackgroundColor('#FFF4E5');
 *   callout.setBorder({ color: '#E6A23C', width: 2 });
 *   callout.setTextColor('#5C3B00');
 *   console.log(callout.describe());
 * }
 * ```
 */
export declare class FDocumentCallout {
    private _document;
    private _blockId;
    private readonly _commandService;
    private readonly _docsCalloutModel;
    private readonly _themeService;
    private readonly _unitId;
    constructor(_document: FDocument, _blockId: string, _commandService: ICommandService, _docsCalloutModel: DocsCalloutModel, _themeService: ThemeService);
    /**
     * Returns the callout block id.
     * @returns {string} The callout block range id.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callouts = fDocument.getCallouts();
     *
     * // Get the id of the first callout.
     * if (callouts.length > 0) {
     *   const callout = callouts[0];
     *   console.log(callout.getId());
     * }
     * ```
     */
    getId(): string;
    /**
     * Returns the callout block range in the document data stream.
     * @returns {IDocsCalloutRange | null} The callout range, or `null` if it no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callouts = fDocument.getCallouts();
     *
     * // Get the range of the first callout.
     * if (callouts.length > 0) {
     *   const callout = callouts[0];
     *   console.log(callout.getRange());
     * }
     * ```
     */
    getRange(): IDocsCalloutRange | null;
    /**
     * Returns plain text inside the callout.
     * @returns {string} The callout text with block tokens removed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.findCalloutByText('Important');
     *
     * if (callout) {
     *   console.log(callout.getText());
     * }
     * ```
     */
    getText(): string;
    /**
     * Returns the normalized callout visual config.
     * @returns {IDocsCalloutConfig} The callout config, falling back to default config when metadata is missing.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.findCalloutByText('Important');
     *
     * if (callout) {
     *   console.log(callout.getConfig());
     * }
     * ```
     */
    getConfig(): IDocsCalloutConfig;
    /**
     * Returns the Callout colors and border as one compact, serializable object.
     * This is preferable to `getConfig()` for agents that only need appearance and should not modify layout metadata.
     * @returns {IDocsCalloutStyle} The current background, border, and first effective text color.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument?.findCalloutByText('Important');
     * if (!callout) {
     *   throw new Error('Callout not found');
     * }
     * const style = callout.getStyle();
     * console.log(JSON.stringify(style, null, 2));
     * ```
     */
    getStyle(): IDocsCalloutStyle;
    /**
     * Returns an agent-friendly description of the callout.
     * @returns {IDocsCalloutInfo | null} The callout id, range, text, config, and compact style, or `null` if it no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.findCalloutByText('Important');
     *
     * if (callout) {
     *   console.log(callout.describe());
     * }
     * ```
     */
    describe(): IDocsCalloutInfo | null;
    /**
     * Updates the callout layout and icon config.
     * @param {Partial<IDocsCalloutConfig>} config Partial config, such as icon or border radius.
     * @returns {boolean} Whether the update command succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.findCalloutByText('Important');
     *
     * if (callout) {
     *   const success = callout.updateConfig({ borderRadius: 12 });
     *   console.log(success);
     * }
     * ```
     */
    updateConfig(config: Partial<IDocsCalloutConfig>): boolean;
    /**
     * Sets only the Callout background color through the command pipeline.
     * @param {string} backgroundColor A CSS color value supported by Univer, such as `#FFF4E5`.
     * @returns {boolean} Whether the update command succeeded.
     * @example
     * ```ts
     * const callout = univerAPI.getActiveDocument()?.findCalloutByText('Important');
     * const updated = callout?.setBackgroundColor('#FFF4E5') ?? false;
     * console.log({ updated });
     * ```
     */
    setBackgroundColor(backgroundColor: string): boolean;
    /**
     * Updates one or more border properties as a single undoable Callout config command.
     * Omitted properties retain their current values.
     * @param {Partial<IDocsCalloutBorderStyle>} border Border color, line style, or width.
     * @returns {boolean} Whether the update command succeeded.
     * @example
     * ```ts
     * import { DashStyleType } from '@univerjs/core';
     *
     * const callout = univerAPI.getActiveDocument()?.findCalloutByText('Important');
     * if (!callout) {
     *   throw new Error('Callout not found');
     * }
     * const updated = callout.setBorder({
     *   color: '#E6A23C',
     *   opacity: 0.75,
     *   style: DashStyleType.DASH,
     *   width: 2,
     * });
     * console.log({ updated, style: callout.getStyle() });
     * ```
     */
    setBorder(border: Partial<IDocsCalloutBorderStyle>): boolean;
    /**
     * Applies one text color to all text in this Callout through the document command pipeline.
     * @param {string} value A CSS color value supported by Univer.
     * @returns {boolean} Whether the text style command succeeded.
     * @example
     * ```ts
     * const callout = univerAPI.getActiveDocument()?.findCalloutByText('Important');
     * const updated = callout?.setTextColor('#5C3B00') ?? false;
     * console.log({ updated });
     * ```
     */
    setTextColor(value: string): boolean;
    /**
     * Restores the inherited document text color for all text in this Callout.
     * @returns {boolean} Whether the text style command succeeded.
     * @example
     * ```ts
     * const callout = univerAPI.getActiveDocument()?.findCalloutByText('Important');
     * const reset = callout?.resetTextColor() ?? false;
     * console.log({ reset });
     * ```
     */
    resetTextColor(): boolean;
    /**
     * Updates only the callout icon.
     * @param {string} icon The emoji or text icon to display.
     * @returns {boolean} Whether the update command succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.findCalloutByText('Important');
     *
     * if (callout) {
     *   const success = callout.setIcon('💡');
     *   console.log(success);
     * }
     * ```
     */
    setIcon(icon: string): boolean;
    /** Shows or hides the callout icon without changing document paragraph layout. */
    setIconVisible(showIcon: boolean): boolean;
    /**
     * Unwraps this callout by removing only the callout block formatting.
     * @returns {boolean} Whether the callout block formatting was removed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.findCalloutByText('Important');
     *
     * if (callout) {
     *   const success = callout.unwrap();
     *   console.log(success);
     * }
     * ```
     */
    unwrap(): boolean;
    /**
     * Removes this callout block and its content.
     * @returns {boolean} Whether the callout block was removed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.findCalloutByText('Important');
     *
     * if (callout) {
     *   const success = callout.remove();
     *   console.log(success);
     * }
     * ```
     */
    remove(): boolean;
    private _getBlockRange;
    private _getConfig;
    private _getDocumentData;
    private _getStyle;
    private _getText;
    private _updateConfig;
}
