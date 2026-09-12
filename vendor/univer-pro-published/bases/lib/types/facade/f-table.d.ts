import type { BaseFieldConfig, IBaseTableSearchRequest, IBaseTableSearchResult } from '@univerjs-pro/bases';
import type { IHostExternalReference } from '@univerjs-pro/engine-formula';
import type { BaseCellValue, BaseDataModel, BaseFilterOperator, FieldId, IFieldSnapshot, Injector, IRecordLinkFieldConfig, IRecordSnapshot, ISortConfig, ITableSnapshot, IViewSnapshot } from '@univerjs/core';
import type { FBase } from './f-base';
import { IBaseProjectionService } from '@univerjs-pro/bases';
import { BaseFieldType, BaseFilterConjunction, BaseViewType, ICommandService, IPermissionService } from '@univerjs/core';
import { FBaseObjectPermission } from './f-base-permission';
import { FBaseTableField } from './f-field';
import { FBaseTableRange } from './f-range';
import { FBaseTableRecord } from './f-record';
import { FBaseTableView } from './f-view';
import { BaseFieldKeyEnum } from './field-key';
export interface IListRecordOptions {
    /** Optional view id. When provided, records are returned in the view projection order. */
    viewId?: string;
    /** Optional field filter. */
    filter?: IBaseRecordFilter;
    /** Optional sort rules applied after view ordering. */
    sort?: ISortConfig[];
    /** Optional zero-based offset. */
    offset?: number;
    /** Optional maximum number of records to return. */
    limit?: number;
}
export interface IBaseRecordFilter {
    conjunction?: BaseFilterConjunction;
    conditions: IBaseRecordFilterCondition[];
}
export interface IBaseRecordFilterCondition {
    fieldId: string;
    operator: BaseFilterOperator | 'matches' | 'notMatches';
    value?: BaseCellValue;
    caseSensitive?: boolean;
}
export interface IQueryRecordsResult {
    records: FBaseTableRecord[];
    total: number;
    offset: number;
    limit: number | null;
    hasMore: boolean;
}
export interface IBaseTableSchemaSnapshot {
    id: string;
    /** Worksheet-compatible display name. Do not use it as a structured-reference identifier. */
    name: string;
    /** Stable table identifier for Excel structured references. */
    formulaName: string;
    primaryFieldId: string;
    fieldIds: string[];
    viewIds: string[];
    recordCount: number;
    fields: Array<Pick<IFieldSnapshot, 'id' | 'name' | 'type' | 'config' | 'readonly' | 'description'>>;
    views: Array<Pick<IViewSnapshot, 'id' | 'name' | 'type'>>;
}
export interface IBaseAddFieldOptions<T extends BaseFieldType = BaseFieldType> {
    /** Optional insertion index in the table field order. */
    index?: number;
    /** Optional partial field snapshot to merge into the new field. */
    field?: Partial<Omit<IFieldSnapshot, 'id' | 'config'>> & {
        config?: BaseFieldConfig<T>;
    };
}
export interface IBaseAddFormulaFieldOptions extends IBaseAddFieldOptions<BaseFieldType.Formula> {
    /**
     * Required, complete Host-owned bindings for this formula write.
     *
     * Use `[]` only when the formula has no external Unit qualifier. Include every
     * external Sheet/Base Source referenced by the formula, including dynamic references.
     */
    externalReferences: readonly IHostExternalReference[];
}
export interface IBaseAddRecordLinkFieldOptions {
    /** Optional insertion index in the source table's field order. */
    index?: number;
    /**
     * Required RecordLink field definition.
     *
     * `config.targetTableId` must identify another table in this Base and
     * `config.multiple` selects single-link or multi-link behavior.
     * `config.displayFieldId` selects the one target field used as the visible label;
     * it defaults to the target table's primary field. `config.pickerFieldIds` adds
     * ordered secondary context to the picker only. All configured field IDs must
     * reference existing, non-system fields in the target table.
     */
    field: Partial<Omit<IFieldSnapshot, 'id' | 'type' | 'config'>> & {
        config: IRecordLinkFieldConfig;
    };
}
type BaseAddFieldOptions<T extends BaseFieldType> = T extends BaseFieldType.Formula ? IBaseAddFormulaFieldOptions : T extends BaseFieldType.RecordLink ? IBaseAddRecordLinkFieldOptions : IBaseAddFieldOptions<T>;
/**
 * Facade API object bound to a Base table.
 *
 * A Base table is similar to a worksheet: fields are columns, records are rows,
 * and ranges address rectangular record-field regions.
 *
 * Use table methods for field, record, cell, range, view, schema, and table
 * permission operations. The table facade always resolves the latest table
 * snapshot from the Base model, so a previously created `FTable` remains usable
 * after other facade commands mutate the table.
 *
 * @example Create fields, records, a view, and a query
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
 * const name = fBaseTable.addField('Name', univerAPI.Enum.BaseFieldType.Text);
 * const status = fBaseTable.addField(
 *   'Status',
 *   univerAPI.Enum.BaseFieldType.SingleSelect,
 *   {
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
 * fBaseTable.addRecord(
 *   {
 *     [fBaseTable.getPrimaryFieldId()]: 'Review protocol',
 *     [name.getId()]: 'Review protocol',
 *     [status.getId()]: 'todo',
 *     [progress.getId()]: 0
 *   }
 * );
 * fBaseTable.addRecords([
 *   {
 *     values: {
 *       [fBaseTable.getPrimaryFieldId()]: 'Design protocol',
 *       [status.getId()]: 'todo',
 *       [progress.getId()]: 20
 *     }
 *   },
 *   {
 *     values: {
 *       [fBaseTable.getPrimaryFieldId()]: 'Wire server load',
 *       [status.getId()]: 'done',
 *       [progress.getId()]: 100
 *     }
 *   },
 * ]);
 *
 * const grid = fBaseTable.createView(
 *   'Main Grid',
 *   univerAPI.Enum.BaseViewType.Grid,
 *   {
 *     view: {
 *       config: {
 *         frozenFieldCount: 1
 *       },
 *     },
 *   }
 * );
 *
 * const done = fBaseTable.queryRecords({
 *   filter: {
 *     conditions: [{
 *       fieldId: status.getId(),
 *       operator: univerAPI.Enum.BaseFilterOperator.IS,
 *       value: 'done'
 *     }]
 *   }
 * });
 * console.log(done);
 * ```
 */
export declare class FBaseTable {
    private readonly _base;
    private readonly _tableId;
    private readonly _injector;
    private readonly _commandService;
    private readonly _permissionService;
    private readonly _projectionService;
    constructor(_base: FBase, _tableId: string, _injector: Injector, _commandService: ICommandService, _permissionService: IPermissionService, _projectionService: IBaseProjectionService);
    /**
     * Get the table's parent Base data model.
     * @returns {BaseDataModel} The Base data model.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * console.log(fBaseTable.getBase());
     * ```
     */
    getBase(): BaseDataModel;
    /**
     * Get the table snapshot.
     * @returns {ITableSnapshot} The table snapshot.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * console.log(fBaseTable.getTable());
     * ```
     */
    getTable(): ITableSnapshot;
    /**
     * Get the table id.
     * @returns {string} The table id.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * console.log(fBaseTable.getId()); // 'table-1'
     * ```
     */
    getId(): string;
    /**
     * Returns the Table object permission facade.
     * @returns {FBaseObjectPermission} Permission facade combining the Base and Table Edit points.
     * @example
     * ```ts
     * const table = univerAPI.getActiveBase()?.getTables()[0];
     * if (!table) throw new Error('Table not found.');
     * await table.getPermission().setReadOnly();
     * ```
     */
    getPermission(): FBaseObjectPermission;
    /**
     * Get the field id used by this table's record hierarchy.
     *
     * Record hierarchy is a table-level capability. Every Grid or Kanban view of
     * the table observes the same Parent relationship; a view does not enable or
     * own hierarchy separately.
     *
     * Before the first hierarchy write, this method returns a deterministic virtual
     * field id. Passing that id to `addRecord()`, `addRecords()`,
     * `FBaseTableRecord.addChild()`, or `FBaseTableRecord.setParent()` creates the
     * same-table, single-value RecordLink field and applies the record change in one
     * command and one Undo entry.
     * Therefore, `getFieldById(getHierarchyFieldId())` may return `null` until the
     * first successful write.
     *
     * @returns {string} The materialized Parent field id, or the deterministic id
     * that the first hierarchy write will materialize.
     * @example Create the first child without creating a field manually
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('No active Base.');
     *
     * const table = base.getTableById('tasks');
     * if (!table) throw new Error('Tasks table not found.');
     *
     * const parent = table.getRecordById('task-1');
     * if (!parent) throw new Error('Parent record not found.');
     *
     * const parentFieldId = table.getHierarchyFieldId();
     * console.log(table.getFieldById(parentFieldId)); // null before the first write
     *
     * const child = parent.addChild(parentFieldId, {
     *   [table.getPrimaryFieldId()]: 'Write integration tests',
     * });
     *
     * console.log(table.getFieldById(parentFieldId)?.getId()); // parentFieldId
     * console.log(child.getParent(parentFieldId)?.getId()); // 'task-1'
     * ```
     */
    getHierarchyFieldId(): string;
    /**
     * Select or clear the table's materialized Parent field.
     *
     * The selected field must already exist and must be a RecordLink that targets
     * this table with `multiple: false`. The command assigns the Parent semantic
     * role to that field and removes the role from the previous Parent field.
     * Stored RecordLink values are not rewritten.
     *
     * Passing `null` clears the semantic role and flattens the effective hierarchy.
     * It does not delete the former field or its values. Because hierarchy is a
     * default table capability, `getHierarchyFieldId()` will then return a new
     * deterministic virtual id for a future hierarchy write.
     *
     * Grid and Kanban views consume the table-level relationship automatically;
     * there is no per-view activation API.
     *
     * @param {string | null} fieldId An eligible RecordLink field id, or `null` to
     * clear the currently materialized Parent role.
     * @returns {boolean} `true` when the command succeeds. The change is undoable.
     * @throws {BaseHierarchyError} With
     * `univerAPI.Enum.BaseHierarchyErrorCode.InvalidField` when `fieldId` is not an
     * existing same-table, single-value RecordLink field.
     * @example Use an existing RecordLink field as Parent
     * ```ts
     * import { BaseHierarchyError } from '@univerjs-pro/bases';
     *
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('No active Base.');
     *
     * const table = base.getTableById('tasks');
     * if (!table) throw new Error('Tasks table not found.');
     *
     * try {
     *   table.setHierarchyField('parent-record-link');
     * } catch (error) {
     *   if (
     *     error instanceof BaseHierarchyError &&
     *     error.code === univerAPI.Enum.BaseHierarchyErrorCode.InvalidField
     *   ) {
     *     console.error('The Parent field must link to one record in the same table.');
     *   } else {
     *     throw error;
     *   }
     * }
     *
     * // Later, flatten the table without deleting the RecordLink field or its values.
     * table.setHierarchyField(null);
     * ```
     */
    setHierarchyField(fieldId: string | null): boolean;
    /**
     * Get the human-readable table display name.
     *
     * Do not use this value in formulas. Use `getFormulaName()` for structured references.
     * @returns {string} The human-readable table display name.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * console.log(fBaseTable.getName());
     * ```
     */
    getName(): string;
    /**
     * Get the stable canonical OOXML-compatible table name used in structured formula references.
     * The name is allocated when the table is created or a historical snapshot is migrated;
     * later display-name changes do not change formula identity. Always use the returned name; `table` is not
     * a reserved alias unless it is the actual identifier returned by this method.
     *
     * Base Formula fields use Excel structured-reference scopes. Use
     * `Table[[#This Row],[Column]]` (or `Table[@[Column]]`) for one value from the
     * formula record's row. Use `Table[[#Data],[Column]]` (or `Table[Column]`) only
     * when the formula intentionally consumes the complete data column. For another
     * Base table, call that table's `getFormulaName()` instead of typing its display
     * name or relying on a placeholder.
     * @returns {string} The canonical normalized formula table name.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const table = fBase.getTableById('table-1');
     * const tableName = table.getFormulaName();
     * const currentAmount = `=${tableName}[[#This Row],[Amount]]`;
     * const allAmounts = `=SUM(${tableName}[[#Data],[Amount]])`;
     * ```
     */
    getFormulaName(): string;
    /**
     * Rename this table's human-readable display label. The name becomes an Excel
     * worksheet name during export, so it must contain 1-31 characters, not start or
     * end with an apostrophe, not contain `: \\ / ? * [ ]`, and be unique within the
     * Base (case-insensitive).
     *
     * Its stable formula name does not change. Existing and new structured references
     * must continue to use the value returned by `getFormulaName()`.
     * @param {string} displayName The new human-readable table display name.
     * @returns {boolean} Whether the rename command succeeded.
     * @throws {Error} If `displayName` violates the Excel worksheet-name rules. The error includes
     * both the complete contract and the specific reason, so callers and agents can correct it.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const success = fBaseTable.setName('Roadmap');
     * console.log(success);
     * ```
     */
    setName(displayName: string): boolean;
    /**
     * Search records in this table.
     *
     * Search reads the current table snapshot. When `viewId` is provided, the
     * search space follows that view projection, including hidden fields and
     * projected row order.
     *
     * @param {Omit<IBaseTableSearchRequest, 'table' | 'rows'>} request The search request parameters, excluding `table` and `rows`.
     * @param {string} [viewId] Optional view id to search within a specific view projection.
     * @returns {IBaseTableSearchResult} The search result with matching records and total count.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const result = fBaseTable.search({
     *   query: 'release',
     *   fieldIds: ['title', 'status'],
     *   limit: 20,
     * });
     * console.log(result);
     * ```
     */
    search(request: Omit<IBaseTableSearchRequest, 'table' | 'rows'>, viewId?: string): IBaseTableSearchResult;
    /**
     * Get the primary field id.
     * @returns {string} The primary field id.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * console.log(fBaseTable.getPrimaryFieldId());
     * ```
     */
    getPrimaryFieldId(): string;
    /**
     * Get all existing fields in this table.
     * @returns {FBaseTableField[]} An array of field facades ordered by the table field order.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const fields = fBaseTable.getFields();
     * console.log(fields);
     * ```
     */
    getFields(): FBaseTableField[];
    /**
     * Get a field by id.
     * @param {string} fieldId The field id.
     * @returns {FBaseTableField | null} The field facade, or null if the field does not exist.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.getFieldById('status');
     * console.log(field);
     * ```
     */
    getFieldById(fieldId: string): FBaseTableField | null;
    /**
     * Get a field by name.
     * @param {string} fieldName The field name.
     * @returns {FBaseTableField | null} The field facade, or null if the field does not exist.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.getFieldByName('Status');
     * console.log(field);
     * ```
     */
    getFieldByName(fieldName: string): FBaseTableField | null;
    /**
     * Get the primary field.
     * @returns {FBaseTableField} The primary field facade.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const primaryField = fBaseTable.getPrimaryField();
     * console.log(primaryField);
     * ```
     */
    getPrimaryField(): FBaseTableField;
    /**
     * Add a field to this table.
     * @param {string} name The field display name.
     * @param {BaseFieldType} type The field type, such as `text`, `number`, `singleSelect`, `recordLink`, or `formula`.
     * @param {object} [options] Optional field parameters.
     * @param {number} [options.index] Optional insertion index in the table field order.
     * @param {Partial<Omit<IFieldSnapshot, 'id'>>} [options.field] Optional partial field snapshot to merge into the new field.
     * @param {readonly IHostExternalReference[]} [options.externalReferences] Required when `type` is Formula. Pass `[]` only for a Host-local formula.
     * @returns {FBaseTableField} The new field facade.
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.addField('Name', univerAPI.Enum.BaseFieldType.Text);
     * console.log(field);
     * ```
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
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
     * console.log(field);
     * ```
     *
     * @example RecordLink field
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const tasks = fBase.getTableById('tasks-table');
     * const projects = fBase.getTableById('projects-table');
     * if (!tasks || !projects) {
     *   throw new Error('Expected the Tasks and Projects tables.');
     * }
     * const ownerField = projects.getFieldByName('Owner');
     *
     * const relatedProjects = tasks.addField(
     *   'Related projects',
     *   univerAPI.Enum.BaseFieldType.RecordLink,
     *   {
     *     field: {
     *       config: {
     *         targetTableId: projects.getId(),
     *         multiple: true,
     *         // One field supplies the visible chip label. Omit this to use
     *         // the target table's primary field.
     *         displayFieldId: projects.getPrimaryFieldId(),
     *         // These fields appear below the label in the picker only.
     *         pickerFieldIds: ownerField ? [ownerField.getId()] : [],
     *       },
     *     },
     *   }
     * );
     *
     * const task = tasks.getRecordById('task-1');
     * const project = projects.getRecordById('project-1');
     * if (task && project) {
     *   task.addLinkedRecord(relatedProjects.getId(), project.getId());
     * }
     * ```
     *
     * @example Formula field
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const amount = fBaseTable.addField(
     *   'Amount',
     *   univerAPI.Enum.BaseFieldType.Number,
     *   {
     *     field: {
     *       config: {
     *         decimalPlaces: 2
     *       }
     *     }
     *   }
     * );
     * const tax = fBaseTable.addField(
     *   'Tax',
     *   univerAPI.Enum.BaseFieldType.Number,
     *   {
     *     field: {
     *       config: {
     *         decimalPlaces: 2
     *       }
     *     }
     *   }
     * );
     * const formulaTableName = fBaseTable.getFormulaName();
     * const total = fBaseTable.addField(
     *   'Total',
     *   univerAPI.Enum.BaseFieldType.Formula,
     *   {
     *     field: {
     *       config: {
     *         formula: `=SUM(${formulaTableName}[[#This Row],[Amount]],${formulaTableName}[[#This Row],[Tax]])`
     *       }
     *     },
     *     externalReferences: [], // Required; this formula only uses fields in the Host Base.
     *   }
     * );
     * ```
     *
     * @example Cross-Unit Formula field
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const pricingBase = {
     *   unitId: 'pricing-base',
     *   formulaQualifier: 'Pricing',
     * };
     * const formulaTableName = fBaseTable.getFormulaName();
     * const taxAmount = univerAPI.getFormula().buildReference({
     *   hostUnitId: fBase.getId(),
     *   unit: pricingBase,
     *   target: {
     *     kind: univerAPI.Enum.FormulaReferenceType.TABLE_COLUMN,
     *     tableName: 'Tax Rates',
     *     columnName: 'Amount',
     *   },
     * });
     * const total = fBaseTable.addField(
     *   'Total',
     *   univerAPI.Enum.BaseFieldType.Formula,
     *   {
     *     field: {
     *       config: {
     *         formula: `=SUM(${formulaTableName}[[#This Row],[Amount]])+SUM(${taxAmount})`,
     *         numberFormat: {
     *           type: 'currency',
     *           pattern: '"$"#,##0.00'
     *         },
     *       },
     *       readonly: true,
     *     },
     *     externalReferences: [{
     *       qualifier: pricingBase.formulaQualifier,
     *       sourceUnitId: pricingBase.unitId,
     *       sourceUnitType: univerAPI.Enum.UniverInstanceType.UNIVER_BASE,
     *     }],
     *   }
     * );
     * ```
     */
    addField(name: string, type: BaseFieldType.Formula, options: IBaseAddFormulaFieldOptions): FBaseTableField;
    addField(name: string, type: BaseFieldType.RecordLink, options: IBaseAddRecordLinkFieldOptions): FBaseTableField;
    addField<T extends Exclude<BaseFieldType, BaseFieldType.Formula | BaseFieldType.RecordLink>>(name: string, type: T, options?: IBaseAddFieldOptions<T>): FBaseTableField;
    addField<T extends BaseFieldType>(name: string, type: T, options: BaseAddFieldOptions<NoInfer<T>>): FBaseTableField;
    private _prepareFormulaFieldReferences;
    /**
     * Get all records in this table, optionally filtered, sorted, and paginated.
     * @returns {FBaseTableRecord[]} An array of record facades ordered by the table record order.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const records = fBaseTable.getRecords();
     * console.log(records);
     * ```
     */
    getRecords(): FBaseTableRecord[];
    /**
     * Get a record by id.
     * @param {string} recordId The record id.
     * @returns {FBaseTableRecord | null} The record facade, or null if the record does not exist.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const record = fBaseTable.getRecordById('record-1');
     * console.log(record);
     * ```
     */
    getRecordById(recordId: string): FBaseTableRecord | null;
    /**
     * Query records with filter, sort, and pagination metadata.
     * @param {IListRecordOptions} [options] Optional query options.
     * @returns {IQueryRecordsResult} The query result with records, total count, offset, limit, and hasMore flag.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const page = fBaseTable.queryRecords({
     *   filter: {
     *     conditions: [{
     *       fieldId: 'status',
     *       operator: univerAPI.Enum.BaseFilterOperator.IS,
     *       value: 'done'
     *     }]
     *   },
     *   sort: [{
     *     fieldId: 'progress',
     *     direction: univerAPI.Enum.BaseSortDirection.DESC
     *   }],
     *   limit: 20,
     * });
     * console.log(page);
     * ```
     */
    queryRecords(options?: IListRecordOptions): IQueryRecordsResult;
    /**
     * Add a record to this table synchronously.
     *
     * This method is also the low-level, data-oriented way to create a child record:
     * use the id returned by `getHierarchyFieldId()` as a value key and use the
     * parent's record id as its value. The call does not require `await`. If the
     * table has not created its canonical Parent field yet, the command creates the
     * same-table, single-value RecordLink field, the record, and the Parent edge as
     * one JSON1 operation and one Undo entry. No observer can see an intermediate
     * field-only or record-only state.
     *
     * Parent values use the same canonical storage format as a single-value
     * RecordLink: pass one record id string. Hierarchy validation rejects a missing
     * parent, self-parent, cycle, or hierarchy deeper than five levels before any
     * mutation is committed. `parent.addChild()` remains available as a semantic
     * convenience when code already has the parent record Facade.
     *
     * The virtual Parent field has no display name until the first write. Therefore,
     * address it by id and keep the default `BaseFieldKeyEnum.Id`; other ordinary
     * fields may still be resolved by name in a separate call.
     *
     * @param {Record<FieldId, BaseCellValue>} values The record field values, keyed by field id or name.
     * @param {BaseFieldKeyEnum} [fieldKey] Optional field key type for the values. Defaults to `id`.
     * @param {Partial<Omit<IRecordSnapshot, 'id'>>} [record] Optional partial record snapshot to merge into the new record.
     * @returns {FBaseTableRecord} The new record Facade immediately after the
     * synchronous command succeeds.
     * @throws {BaseHierarchyError} If an initial Parent value is missing, cyclic,
     * self-referential, or would exceed five levels.
     * @throws {Error} If another record or field value is invalid, or the atomic
     * command cannot be applied.
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const record = fBaseTable.addRecord(
     *   {
     *     title: 'Ship beta',
     *     status: 'todo'
     *   }
     * );
     * console.log(record);
     * ```
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const record = fBaseTable.addRecord(
     *   {
     *     Title: 'Ship beta',
     *     Status: 'todo'
     *   },
     *   univerAPI.Enum.BaseFieldKeyEnum.Name
     * );
     * console.log(record);
     * ```
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     *
     * const fields = fBaseTable.getFields();
     * const values: Record<FieldId, BaseCellValue> = {};
     *
     * for (const field of fields) {
     *   if (field.getName() === 'Title') {
     *     values[field.getId()] = 'Ship Base adapter';
     *   } else if (field.getName() === 'Status') {
     *     values[field.getId()] = 'todo';
     *   }
     * }
     *
     * const record = fBaseTable.addRecord(values);
     * console.log(record);
     * ```
     *
     * @example Create the first child with the generic record API (no `await`)
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('No active Base.');
     *
     * const table = base.getTableById('tasks');
     * if (!table) throw new Error('Tasks table not found.');
     *
     * const parent = table.getRecordById('task-1');
     * if (!parent) throw new Error('Parent record not found.');
     *
     * const parentFieldId = table.getHierarchyFieldId();
     * const child = table.addRecord({
     *   [table.getPrimaryFieldId()]: 'Write integration tests',
     *   [parentFieldId]: parent.getId(),
     * });
     *
     * console.log(child.getParent(parentFieldId)?.getId()); // 'task-1'
     * console.log(parent.getChildren(parentFieldId).map((item) => item.getId()));
     * ```
     *
     * @example Add a record with a public URL attachment
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const imageField = fBaseTable.getFieldByName('Product image');
     * const record = fBaseTable.addRecord({
     *   [fBaseTable.getPrimaryFieldId()]: 'Red Nail Polish',
     *   [imageField.getId()]: [{
     *     id: 'product-image',
     *     name: 'product.webp',
     *     source: 'https://example.com/product.webp',
     *     sourceType: univerAPI.Enum.ImageSourceType.URL,
     *     mimeType: 'image/webp'
     *   }]
     * });
     * console.log(record);
     * ```
     */
    addRecord(values: Record<FieldId, BaseCellValue>, fieldKey?: BaseFieldKeyEnum, record?: Partial<Omit<IRecordSnapshot, 'id'>>): FBaseTableRecord;
    /**
     * Add multiple records to this table.
     *
     * Each initial Parent value is validated before the batch is applied. The first
     * batch may use the virtual id returned by `getHierarchyFieldId()`; the Parent
     * field is then materialized once in the same atomic command.
     * Every accepted Parent edge is included in one atomic hierarchy event with
     * `Facade` source, and Undo removes the records and those edges together.
     *
     * @param {Array<{
     *   values: Record<FieldId, BaseCellValue>;
     *   fieldKey?: BaseFieldKeyEnum;
     *   record?: Partial<Omit<IRecordSnapshot, 'id'>>;
     * }>} records An array of record values, optional field key types, and optional partial record snapshots.
     * @returns {FBaseTableRecord[]} The created record Facades immediately after
     * the synchronous command succeeds.
     * @throws {BaseHierarchyError} If any initial Parent value is invalid.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const records = fBaseTable.addRecords([
     *   { values: { title: 'Task A' } },
     *   { values: { title: 'Task B' } },
     * ]);
     * console.log(records);
     * ```
     * @example Create sibling records below one parent in a single Undo entry
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('No active Base.');
     *
     * const table = base.getTableById('tasks');
     * if (!table) throw new Error('Tasks table not found.');
     *
     * const parent = table.getRecordById('task-1');
     * if (!parent) throw new Error('Parent record not found.');
     *
     * const parentFieldId = table.getHierarchyFieldId();
     * const children = table.addRecords([
     *   { values: { [table.getPrimaryFieldId()]: 'Child A', [parentFieldId]: parent.getId() } },
     *   { values: { [table.getPrimaryFieldId()]: 'Child B', [parentFieldId]: parent.getId() } },
     * ]);
     *
     * console.log(children.map((child) => child.getId()));
     * ```
     */
    addRecords(records: Array<{
        values: Record<FieldId, BaseCellValue>;
        fieldKey?: BaseFieldKeyEnum;
        record?: Partial<Omit<IRecordSnapshot, 'id'>>;
    }>): FBaseTableRecord[];
    /**
     * Delete multiple records from this table.
     * @param {string[]} recordIds An array of record ids to delete.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const records = fBaseTable.getRecords();
     * const success = fBaseTable.deleteRecords([
     *   records[0].getId(),
     *   records[2].getId(),
     * ]);
     * console.log(success);
     * ```
     */
    deleteRecords(recordIds: string[]): boolean;
    /**
     * Get a rectangular range by row and column indexes.
     *
     * Range indexes use the table's current `recordOrder` and `fieldOrder`.
     * This mirrors Sheet-style row/column addressing while still writing Base
     * record/field values under the hood.
     *
     * @param {number} row The zero-based row index.
     * @param {number} column The zero-based column index.
     * @param {number} [numRows] Optional number of rows in the range. Defaults to 1.
     * @param {number} [numColumns] Optional number of columns in the range. Defaults to 1.
     * @returns {FBaseTableRange} The range facade.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     *
     * const range = fBaseTable.getRange(0, 0, 2, 3);
     * console.log(range.getValues());
     *
     * fBaseTable.getRange(0, 0, 2, 2).setValues([
     *   ['Task A', 'todo'],
     *   ['Task B', 'done'],
     * ]);
     * ```
     */
    getRange(row: number, column: number, numRows?: number, numColumns?: number): FBaseTableRange;
    /**
     * Get a range that covers the current table data area.
     * @returns {FBaseTableRange} The range facade covering the table data area.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const values = fBaseTable.getDataRange().getValues();
     * console.log(values);
     * ```
     */
    getDataRange(): FBaseTableRange;
    /**
     * Get all existing views in this table.
     * @returns {FBaseTableView[]} An array of view facades ordered by the table view order.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const views = fBaseTable.getViews();
     * console.log(views);
     * ```
     */
    getViews(): FBaseTableView[];
    /**
     * Get a view by id.
     * @param {string} viewId The view id.
     * @returns {FBaseTableView | null} The view facade, or null if the view does not exist.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewById('grid');
     * console.log(view);
     * ```
     */
    getViewById(viewId: string): FBaseTableView | null;
    /**
     * Get a view by name.
     * @param {string} viewName The view name.
     * @returns {FBaseTableView | null} The view facade, or null if the view does not exist.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * console.log(view);
     * ```
     */
    getViewByName(viewName: string): FBaseTableView | null;
    /**
     * Create a view in this table.
     * @param {string} name The view display name.
     * @param {BaseViewType} type The view type, such as `grid`, `calendar`, or `gantt`.
     * @param {object} [options] Optional view parameters.
     * @param {number} [options.index] Optional insertion index in the table view order.
     * @param {Partial<Omit<IViewSnapshot, 'id'>>} [options.view] Optional partial view snapshot to merge into the new view.
     * @returns {FBaseTableView} The new view facade.
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.createView(
     *   'API Grid',
     *   univerAPI.Enum.BaseViewType.Grid,
     *   {
     *     view: {
     *       id: 'grid-api',
     *       config: {
     *         frozenFieldCount: 1
     *       },
     *     },
     *   }
     * );
     * console.log(view);
     * ```
     *
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     *
     * const calendar = fBaseTable.createView(
     *   'Calendar',
     *   univerAPI.Enum.BaseViewType.Calendar,
     *   {
     *     view: {
     *       id: 'calendar-main',
     *       config: {
     *         startFieldId: 'start',
     *         endFieldId: 'end'
     *       },
     *     }
     *   }
     * );
     * console.log(calendar);
     *
     * const gantt = fBaseTable.createView(
     *   'Gantt',
     *   univerAPI.Enum.BaseViewType.Gantt,
     *   {
     *     view: {
     *       id: 'gantt-main',
     *       config: {
     *         startFieldId: 'start',
     *         endFieldId: 'end',
     *         progressFieldId: 'progress'
     *       },
     *     }
     *   }
     * );
     * console.log(gantt);
     * ```
     */
    createView(name: string, type: BaseViewType, options?: {
        index?: number;
        view?: Partial<Omit<IViewSnapshot, 'id'>>;
    }): FBaseTableView;
    /**
     * Get a compact schema snapshot for this table.
     * @returns Table schema without row values.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const schema = fBaseTable.getSchema();
     * console.log(schema);
     * ```
     */
    getSchema(): IBaseTableSchemaSnapshot;
    private _getTable;
    private _resolveRecordIds;
}
export {};
