import { ColumnPosition } from '@univerjs-pro/docs-column';
import { FEnum } from '@univerjs/core/facade';
/**
 * @ignore
 */
export interface IFDocumentColumnEnumMixin {
    /**
     * Docs column position enum.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const columns = group.getColumns();
     *
     * if (columns.length > 0) {
     *   const rightColumn = group.getColumn(columns.length - 1);
     *   const inserted = group.addColumn(
     *     rightColumn.getId(),
     *     univerAPI.Enum.DocsColumnPositionEnum.LEFT,
     *     'new-column'
     *   );
     *   console.log(inserted?.getInsertOffset());
     * }
     * ```
     */
    DocsColumnPositionEnum: typeof ColumnPosition;
}
export declare class FDocumentColumnEnumMixin extends FEnum implements IFDocumentColumnEnumMixin {
    get DocsColumnPositionEnum(): typeof ColumnPosition;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFDocumentColumnEnumMixin {
    }
}
