import type { IDocsCodeConfig } from '@univerjs-pro/docs-code';
import type { FDocument } from '@univerjs/docs/facade';
import type { IDocsCodeInfo, IDocsCodeRange, IDocsCodeUpdateFacadeOptions } from './types';
import { Injector } from '@univerjs/core';
/**
 * Facade object for a single docs code block.
 * @example
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const codes = fDocument.getCodes();
 * console.log(codes);
 *
 * const code = fDocument.findCodeByText('function');
 * console.log(code?.getText());
 * console.log(code?.getConfig());
 *
 * code?.updateConfig({ language: 'javascript', lineNumbers: true });
 * console.log(code?.describe());
 *
 * code?.unwrap();
 * code?.remove();
 * ```
 */
export declare class FDocumentCode {
    private _document;
    private _blockId;
    protected readonly _injector: Injector;
    private readonly _unitId;
    constructor(_document: FDocument, _blockId: string, _injector: Injector);
    /**
     * Returns the code block id.
     * @returns {string} The code block range id.
     * @example
     * const fDocument = univerAPI.getActiveDocument();
     * const codes = fDocument.getCodes();
     *
     * // Get the id of the first code block.
     * if (codes.length > 0) {
     *   const code = codes[0];
     *   console.log(code.getId());
     * }
     * ```
     */
    getId(): string;
    /**
     * Returns the code block range in the document data stream.
     * @returns {IDocsCodeRange | null} The code range, or `null` if it no longer exists.
     * @example
     * const fDocument = univerAPI.getActiveDocument();
     * const codes = fDocument.getCodes();
     *
     * // Get the range of the first code block.
     * if (codes.length > 0) {
     *   const code = codes[0];
     *   console.log(code.getRange());
     * }
     * ```
     */
    getRange(): IDocsCodeRange | null;
    /**
     * Returns plain text inside the code.
     * @returns {string} The code text with block tokens removed.
     * @example
     * const fDocument = univerAPI.getActiveDocument();
     * const code = fDocument.findCodeByText('function');
     *
     * if (code) {
     *   console.log(code.getText());
     * }
     * ```
     */
    getText(): string;
    /**
     * Returns an agent-friendly description of the code.
     * @returns {IDocsCodeInfo | null} The code id, range, and text, or `null` if it no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const code = fDocument.findCodeByText('function');
     *
     * if (code) {
     *   console.log(code.describe());
     * }
     * ```
     */
    describe(): IDocsCodeInfo | null;
    /**
     * Returns the code block configuration.
     * @returns {IDocsCodeConfig} Language, wrapping, line number, and tab-size settings.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const code = fDocument.findCodeByText('function');
     *
     * if (code) {
     *   console.log(code.getConfig());
     * }
     * ```
     */
    getConfig(): IDocsCodeConfig;
    /**
     * Updates the code block configuration.
     * @param {IDocsCodeUpdateFacadeOptions} options Code block configuration patch.
     * @returns {boolean} Whether the update command succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const code = fDocument.findCodeByText('function');
     *
     * if (code) {
     *   code.updateConfig({ config: { language: 'typescript' } });
     * }
     * ```
     * ```
     */
    updateConfig(options: IDocsCodeUpdateFacadeOptions): boolean;
    /**
     * Unwraps this code block by removing only the code block formatting.
     * @returns {boolean} Whether the code block formatting was removed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const code = fDocument.findCodeByText('function');
     *
     * if (code) {
     *   // Remove code block formatting from this block.
     *   const success = code.unwrap();
     *   console.log(success);
     * }
     * ```
     */
    unwrap(): boolean;
    /**
     * Removes this code block and its content.
     * @returns {boolean} Whether the code block was removed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const code = fDocument.findCodeByText('function');
     *
     * if (code) {
     *   const success = code.remove();
     *   console.log(success);
     * }
     * ```
     */
    remove(): boolean;
    private _getBlockRange;
    private _getDocumentData;
}
