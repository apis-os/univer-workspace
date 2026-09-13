import { DocsListSelectionMode } from '@univerjs-pro/docs-list';
import { ListGlyphType } from '@univerjs/core';
import { FEnum } from '@univerjs/core/facade';
/**
 * @ignore
 */
export interface IFDocumentListEnumMixin {
    /**
     * Represents the selection scopes used by docs list operations.
     *
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const item = fDocument?.findListItemByText('Todo');
     * item?.select(univerAPI.Enum.DocsListSelectionMode.Level);
     * ```
     */
    DocsListSelectionMode: typeof DocsListSelectionMode;
    /**
     * Represents the glyph types used by ordered and unordered docs lists.
     *
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const item = fDocument?.findListItemByText('Todo');
     * item?.setGlyphType(univerAPI.Enum.ListGlyphType.UPPER_LETTER);
     * ```
     */
    ListGlyphType: typeof ListGlyphType;
}
export declare class FDocumentListEnumMixin extends FEnum implements IFDocumentListEnumMixin {
    get DocsListSelectionMode(): typeof DocsListSelectionMode;
    get ListGlyphType(): typeof ListGlyphType;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFDocumentListEnumMixin {
    }
}
