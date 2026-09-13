import { DocsTableBorderPreset, DocsTableColumnInsertPosition, DocsTableColumnType, DocsTableInsertTablePosition, DocsTableRowInsertPosition, DocsTableSelectionKind, DocsTableSortDirection } from '@univerjs-pro/docs-table';
import { DashStyleType } from '@univerjs/core';
import { FEnum } from '@univerjs/core/facade';
/**
 * @ignore
 */
export interface IFDocumentTableEnumMixin {
    /**
     * Represents the insertion positions used by docs table creation.
     *
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument.insertTable(3, 4, {
     *   position: univerAPI.Enum.DocsTableInsertTablePosition.Selection,
     * });
     * ```
     */
    DocsTableInsertTablePosition: typeof DocsTableInsertTablePosition;
    /**
     * Represents the logical column types used by docs table metadata.
     *
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument.getTable('table-1');
     * table?.setColumnType(1, {
     *   type: univerAPI.Enum.DocsTableColumnType.Number,
     * });
     * ```
     */
    DocsTableColumnType: typeof DocsTableColumnType;
    /**
     * Represents docs table selection scopes and modes.
     *
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const table = fDocument.getTable('table-1');
     * const tableRange = table?.getTableRange();
     * if (tableRange) {
     *   table.selectRange(tableRange, univerAPI.Enum.DocsTableSelectionKind.Table);
     * }
     * ```
     */
    DocsTableSelectionKind: typeof DocsTableSelectionKind;
    /**
     * Represents row insertion positions used by docs table row operations.
     *
     * @example
     * ```ts
     * univerAPI.Enum.DocsTableRowInsertPosition.Above;
     * ```
     */
    DocsTableRowInsertPosition: typeof DocsTableRowInsertPosition;
    /**
     * Represents column insertion positions used by docs table column operations.
     *
     * @example
     * ```ts
     * univerAPI.Enum.DocsTableColumnInsertPosition.Right;
     * ```
     */
    DocsTableColumnInsertPosition: typeof DocsTableColumnInsertPosition;
    /**
     * Represents border presets used by docs table border operations.
     *
     * @example
     * ```ts
     * const table = univerAPI.getActiveDocument()?.getTable('table-1');
     * table?.setTableBorder({
     *   preset: univerAPI.Enum.DocsTableBorderPreset.Outer,
     * });
     * ```
     */
    DocsTableBorderPreset: typeof DocsTableBorderPreset;
    /**
     * Represents sort directions used by docs table sort operations.
     *
     * @example
     * ```ts
     * const table = univerAPI.getActiveDocument()?.getTable('table-1');
     * table?.sortByColumn(1, univerAPI.Enum.DocsTableSortDirection.Asc);
     * ```
     */
    DocsTableSortDirection: typeof DocsTableSortDirection;
    /**
     * Represents dash styles used by table borders.
     *
     * @example
     * ```ts
     * const table = univerAPI.getActiveDocument()?.getTable('table-1');
     * table?.setTableBorder({
     *   preset: univerAPI.Enum.DocsTableBorderPreset.All,
     *   border: { dashStyle: univerAPI.Enum.DashStyleType.DASH },
     * });
     * ```
     */
    DashStyleType: typeof DashStyleType;
}
export declare class FDocumentTableEnumMixin extends FEnum implements IFDocumentTableEnumMixin {
    get DocsTableInsertTablePosition(): typeof DocsTableInsertTablePosition;
    get DocsTableColumnType(): typeof DocsTableColumnType;
    get DocsTableSelectionKind(): typeof DocsTableSelectionKind;
    get DocsTableRowInsertPosition(): typeof DocsTableRowInsertPosition;
    get DocsTableColumnInsertPosition(): typeof DocsTableColumnInsertPosition;
    get DocsTableBorderPreset(): typeof DocsTableBorderPreset;
    get DocsTableSortDirection(): typeof DocsTableSortDirection;
    get DashStyleType(): typeof DashStyleType;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFDocumentTableEnumMixin {
    }
}
