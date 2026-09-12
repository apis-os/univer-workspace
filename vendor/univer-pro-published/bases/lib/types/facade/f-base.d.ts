import type { BaseDataModel, IBaseSnapshot, ITableSnapshot } from '@univerjs/core';
import type { IBaseTableSchemaSnapshot } from './f-table';
import { ICommandService, Injector, IPermissionService, IResourceLoaderService } from '@univerjs/core';
import * as UniverCoreFacade from '@univerjs/core/facade';
import { FBasePermission } from './f-base-permission';
import { FBaseTable } from './f-table';
export interface IBaseSchemaSnapshot {
    id: string;
    /** Human-readable Base display name. */
    name: string;
    tables: IBaseTableSchemaSnapshot[];
}
/**
 * Facade API object bound to a Base unit.
 */
export declare class FBase extends UniverCoreFacade.FBase {
    private readonly _base;
    protected readonly _injector: Injector;
    private readonly _resourceLoaderService;
    private readonly _commandService;
    private readonly _permissionService;
    constructor(_base: BaseDataModel, _injector: Injector, _resourceLoaderService: IResourceLoaderService, _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Get the underlying Base data model.
     * @returns {BaseDataModel} The underlying Base data model.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * console.log(fBase.getBase());
     * ```
     */
    getBase(): BaseDataModel;
    /**
     * Get the Base unit id.
     * @returns {string} The Base unit id.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * console.log(fBase.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns the Base unit permission facade.
     * @returns {FBasePermission} Permission facade for Edit, Copy, Export, and Comment.
     * @example
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('No active Base.');
     * await base.getPermission().setReadOnly();
     * ```
     */
    getPermission(): FBasePermission;
    /**
     * Save and return the current complete Base snapshot.
     *
     * This method intentionally returns the full in-memory `IBaseSnapshot`
     * instead of performing I/O. The payload includes tables, fields, views,
     * records, cell data, resources, table order, and metadata. The caller
     * decides how to persist it, for example by sending it to the server-side
     * protocol adapter.
     *
     * @returns {IBaseSnapshot} The current complete Base snapshot.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * console.log(fBase.save());
     * ```
     */
    save(): IBaseSnapshot;
    /**
     * Get the Base name.
     * @returns {string} The Base name.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * console.log(fBase.getName());
     * ```
     */
    getName(): string;
    /**
     * Set the Base name.
     * @param {string} name The new Base name.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * fBase.setName('Product Roadmap');
     * console.log(fBase.getName());
     * ```
     */
    setName(name: string): void;
    /**
     * Get all existing tables in this Base.
     * @returns {FBaseTable[]} The table facade instances.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTables = fBase.getTables();
     * console.log(fBaseTables);
     * ```
     */
    getTables(): FBaseTable[];
    /**
     * Get a table by id.
     * @param {string} tableId The table id.
     * @returns {FBaseTable | null} The table facade, or null if the table does not exist.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * console.log(fBaseTable);
     * ```
     */
    getTableById(tableId: string): FBaseTable | null;
    /**
     * Get a table by its human-readable display name.
     *
     * This method does not look up the stable identifier used in formulas. To author a
     * structured reference, get the table first and call `FBaseTable.getFormulaName()`.
     * @param {string} displayName The table display name.
     * @returns {FBaseTable | null} The table facade, or null if the table does not exist.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableByName('Tasks');
     * console.log(fBaseTable);
     * ```
     */
    getTableByName(displayName: string): FBaseTable | null;
    /**
     * Insert a new table into the Base.
     *
     * The display name becomes an Excel worksheet name during export. It must contain
     * 1-31 characters, not start or end with an apostrophe, not contain `: \\ / ? * [ ]`,
     * and be unique within the Base (case-insensitive). It may differ from the stable formula name.
     * Use the returned table's `getFormulaName()` when authoring structured references.
     * @param {string} displayName The human-readable table display name.
     * @param {object} [options] Optional parameters for table creation.
     * @param {number} [options.index] Optional insertion index in the Base table order.
     * @param {string} [options.primaryFieldName] Optional name for the primary field of the new table.
     * @param {Partial<ITableSnapshot>} [options.table] Optional partial table snapshot to override default values.
     * If it includes `name`, that value is validated and used instead of `displayName`.
     * @returns {FBaseTable} The newly created table facade.
     * @throws {Error} If the effective display name violates the Excel worksheet-name rules.
     * The error includes both the complete contract and the specific reason, so callers and agents
     * can correct the input before retrying.
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.insertTable('Risk tracker');
     * console.log(fBaseTable.getName()); // Human-readable display name: "Risk tracker"
     * console.log(fBaseTable.getFormulaName()); // Stable name for formulas: "Risk_tracker"
     * ```
     *
     * @example Full table creation flow
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.insertTable(
     *   'Tasks',
     *   {
     *     index: 0,
     *     primaryFieldName: 'Title'
     *   }
     * );
     *
     * const field = fBaseTable.addField(
     *   'Status',
     *   univerAPI.Enum.BaseFieldType.SingleSelect,
     *   {
     *     index: 1,
     *     field: {
     *       config: {
     *         options: [
     *           { id: 'todo', name: 'Todo', color: 'blue' },
     *           { id: 'done', name: 'Done', color: 'green' },
     *         ],
     *       }
     *     }
     *   }
     * );
     * const progress = fBaseTable.addField('Progress', univerAPI.Enum.BaseFieldType.Progress);
     *
     * const record = fBaseTable.addRecord(
     *   {
     *     Status: 'todo',
     *     Progress: 10
     *   },
     *   univerAPI.Enum.BaseFieldKeyEnum.Name
     * );
     *
     * console.log(fBaseTable.getTable());
     * ```
     */
    insertTable(displayName: string, options?: {
        index?: number;
        table?: Partial<Omit<ITableSnapshot, 'id'>>;
        primaryFieldName?: string;
    }): FBaseTable;
    /**
     * Delete a table from this Base.
     * @param {FBaseTable | string} table The table facade instance or table id to delete.
     * @returns {boolean} True if the table was deleted, false if it did not exist.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTables()[1];
     * if (fBaseTable) {
     *   const result = fBase.deleteTable(fBaseTable);
     *   console.log(result);
     * }
     * ```
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const result = fBase.deleteTable('table-1');
     * console.log(result);
     * ```
     */
    deleteTable(table: FBaseTable | string): boolean;
    /**
     * Duplicate a table in this Base.
     * @param {FBaseTable | string} table The table facade instance or table id to duplicate.
     * @param {object} [options] Optional parameters for table duplication.
     * @param {boolean} [options.includeRecords] Whether to include records in the duplicated table.
     * @param {boolean} [options.regenerateViewIds] Whether to regenerate view ids in the duplicated table.
     * @returns {FBaseTable} The newly duplicated table facade.
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTables()[0];
     * if (fBaseTable) {
     *   const fBaseTableCopy = fBase.duplicateTable(fBaseTable, { includeRecords: true });
     *   console.log(fBaseTableCopy);
     * }
     * ```
     */
    duplicateTable(table: FBaseTable | string, options?: {
        includeRecords?: boolean;
        regenerateViewIds?: boolean;
    }): FBaseTable;
    /**
     * Get a compact schema snapshot for agent/tooling use.
     *
     * `getSchema()` intentionally omits row values. Use it when an agent,
     * server route, or prompt needs structure and ids without transferring the
     * full data payload.
     *
     * @returns {IBaseSchemaSnapshot} The compact Base schema snapshot.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * console.log(fBase.getSchema());
     * ```
     */
    getSchema(): IBaseSchemaSnapshot;
}
