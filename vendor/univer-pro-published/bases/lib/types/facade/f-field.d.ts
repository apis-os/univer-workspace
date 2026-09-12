import type { IHostExternalReference } from '@univerjs-pro/engine-formula';
import type { FieldConfig, IFieldSnapshot } from '@univerjs/core';
import type { FBase } from './f-base';
import type { FBaseTable } from './f-table';
import { BaseFieldType, ICommandService, IPermissionService } from '@univerjs/core';
import { FBaseObjectPermission } from './f-base-permission';
export interface IBaseFormulaFieldWriteOptions {
    /**
     * Required, complete Host-owned bindings for this formula write.
     *
     * Use `[]` only when the formula has no external Unit qualifier. Include every
     * external Sheet/Base Source referenced by the formula, including dynamic references.
     */
    externalReferences: readonly IHostExternalReference[];
}
/**
 * Facade API object bound to a Base field.
 *
 * A Base field is equivalent to a column in a table.
 * Field type and type-specific config live on the field snapshot. Cell values
 * should reference field ids and should not duplicate field type as their
 * source of truth.
 *
 * @example Update field metadata
 * ```ts
 * const fBase = univerAPI.getActiveBase();
 * const fBaseTable = fBase.getTableById('table-1');
 * const field = fBaseTable.getFieldByName('Name');
 *
 * if (field) {
 *   field.setName('Stage');
 *   field.changeType(
 *     univerAPI.Enum.BaseFieldType.SingleSelect,
 *     {
 *       options: [
 *         { id: 'todo', name: 'To Do', color: 'blue' },
 *         { id: 'inProgress', name: 'In Progress', color: 'yellow' },
 *         { id: 'done', name: 'Done', color: 'green' },
 *       ]
 *     }
 *   );
 *   field.setDefaultValue('todo');
 *   field.update({ description: 'Workflow stage from server auth.' });
 * }
 * ```
 */
export declare class FBaseTableField {
    private readonly _base;
    private readonly _table;
    private readonly _fieldId;
    private readonly _commandService;
    private readonly _permissionService;
    constructor(_base: FBase, _table: FBaseTable, _fieldId: string, _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Get the field id.
     * @returns {string} The field id.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const fields = fBaseTable.getFields();
     * console.log(fields[0]?.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns the Field object permission facade.
     * @returns {FBaseObjectPermission} Permission facade combining the Base, Table, and Field Edit points.
     * @example
     * ```ts
     * const table = univerAPI.getActiveBase()?.getTables()[0];
     * const field = table?.getFields()[0];
     * if (!field) throw new Error('Field not found.');
     * await field.getPermission().setReadOnly();
     * ```
     */
    getPermission(): FBaseObjectPermission;
    /**
     * Get the field snapshot.
     * @returns {IFieldSnapshot} The field snapshot.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const fields = fBaseTable.getFields();
     * console.log(fields[0]?.getField());
     * ```
     */
    getField(): IFieldSnapshot;
    /**
     * Get the field name.
     * @returns {string} The field name.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const fields = fBaseTable.getFields();
     * console.log(fields[0]?.getName());
     * ```
     */
    getName(): string;
    /**
     * Get the field type.
     * @returns {BaseFieldType} The field type.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const fields = fBaseTable.getFields();
     * console.log(fields[0]?.getType());
     * ```
     */
    getType(): BaseFieldType;
    /**
     * Get the field configuration.
     * @returns {FieldConfig} The field configuration.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const fields = fBaseTable.getFields();
     * console.log(fields[0]?.getConfig());
     * ```
     */
    getConfig(): FieldConfig;
    /**
     * Get the default value configured for this field.
     * @returns {IFieldSnapshot['defaultValue']} The default value for this field, if any.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const fields = fBaseTable.getFields();
     * console.log(fields[0]?.getDefaultValue());
     * ```
     */
    getDefaultValue(): IFieldSnapshot['defaultValue'];
    /**
     * Get the field description.
     * @returns {string | undefined} The field description, if any.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const fields = fBaseTable.getFields();
     * console.log(fields[0]?.getDescription());
     * ```
     */
    getDescription(): string | undefined;
    /**
     * Check whether this field is readonly.
     * @returns {boolean} True if the field is readonly, false otherwise.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const fields = fBaseTable.getFields();
     * console.log(fields[0]?.isReadonly());
     * ```
     */
    isReadonly(): boolean;
    /**
     * Rename this field.
     * @param {string} name The new field name.
     * @returns {boolean} True if the rename was successful, false otherwise.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.getFieldByName('Status');
     * const success = field.setName('Priority');
     * console.log(success ? 'Field renamed' : 'Failed to rename field');
     * ```
     */
    setName(name: string): boolean;
    /**
     * Replace the field configuration.
     *
     * Config is type-specific. Keep select options, attachment restrictions,
     * formula expressions, number/date formatting, and similar field metadata
     * here so formulas and renderers can resolve behavior from the field.
     *
     * Formula fields additionally require `options.externalReferences`. The Facade
     * persists those Host bindings before it updates the field config; if binding
     * fails, the field is left unchanged. Pass `[]` only when the formula references
     * fields in this Host Base and has no external Unit qualifier.
     *
     * @param {FieldConfig} config The new field configuration.
     * @param {IBaseFormulaFieldWriteOptions} [options] Required for Formula fields.
     * @returns {boolean} True if the config update was successful, false otherwise.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.getFieldByName('Total');
     * const success = field.setConfig({
     *   formula: '=SUM([Pricing]!Tax[Amount])',
     *   numberFormat: {
     *     type: 'currency',
     *     pattern: '"$"#,##0.00'
     *   },
     * }, {
     *   externalReferences: [{
     *     qualifier: 'Pricing',
     *     sourceUnitId: 'pricing-base',
     *     sourceUnitType: univerAPI.Enum.UniverInstanceType.UNIVER_BASE,
     *   }],
     * });
     * console.log(success ? 'Field config updated' : 'Failed to update field config');
     * ```
     */
    setConfig(config: FieldConfig, options?: IBaseFormulaFieldWriteOptions): boolean;
    /**
     * Set the default value for this field.
     * @param {IFieldSnapshot['defaultValue']} defaultValue The new default value.
     * @returns {boolean} True if the default value update was successful, false otherwise.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.getFieldByName('Status');
     * const success = field.setDefaultValue('todo');
     * console.log(success ? 'Default value set' : 'Failed to set default value');
     * ```
     */
    setDefaultValue(defaultValue: IFieldSnapshot['defaultValue']): boolean;
    /**
     * Update this field.
     * When this operation writes Formula config or changes the field type to Formula,
     * `options.externalReferences` is required. Metadata-only updates to an existing
     * Formula field, such as changing its name or description, do not need the mapping
     * again.
     *
     * @param {Partial<IFieldSnapshot>} patch The field snapshot patch to apply.
     * @param {IBaseFormulaFieldWriteOptions} [options] Required when this update writes a Formula field.
     * @returns {boolean} True if the update was successful, false otherwise.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.getFieldByName('Status');
     * const success = field.update({
     *   name: 'Stage',
     *   description: 'Workflow stage from server auth.'
     * });
     * console.log(success ? 'Field updated' : 'Failed to update field');
     * ```
     */
    update(patch: Partial<IFieldSnapshot>, options?: IBaseFormulaFieldWriteOptions): boolean;
    /**
     * Change this field type.
     * @param {BaseFieldType} type The new field type.
     * @param {FieldConfig} config The new field configuration.
     * @param {IBaseFormulaFieldWriteOptions} [options] Required when `type` is Formula.
     * @returns {boolean} True if the type change was successful, false otherwise.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.getFieldByName('Status');
     * const success = field.changeType(
     *   univerAPI.Enum.BaseFieldType.Number,
     *   {
     *     decimalPlaces: 2
     *   }
     * );
     * console.log(success ? 'Field type changed' : 'Failed to change field type');
     * ```
     */
    changeType(type: BaseFieldType.Formula, config: FieldConfig, options: IBaseFormulaFieldWriteOptions): boolean;
    changeType(type: Exclude<BaseFieldType, BaseFieldType.Formula>, config?: FieldConfig): boolean;
    changeType(type: BaseFieldType, config: FieldConfig, options: IBaseFormulaFieldWriteOptions): boolean;
    /**
     * Delete this field.
     *
     * The table's primary field cannot be deleted. Calling this method on the
     * primary field leaves the table unchanged and returns `false`.
     *
     * @returns {boolean} True if the deletion was successful, false if the field is the primary field or the deletion otherwise failed.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.getFieldByName('Status');
     * const success = field.delete();
     * console.log(success ? 'Field deleted' : 'Failed to delete field');
     * ```
     */
    delete(): boolean;
    /**
     * Move this field relative to another field.
     * @param {object} target The target field to move before or after.
     * @param {string} [target.beforeFieldId] The field id to move this field before.
     * @param {string} [target.afterFieldId] The field id to move this field after.
     * @returns {boolean} True if the move was successful, false otherwise.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const field = fBaseTable.getFieldByName('Status');
     * const success = field.move({ afterFieldId: 'Priority' });
     * console.log(success ? 'Field moved' : 'Failed to move field');
     * ```
     */
    move(target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    }): boolean;
    private _getField;
    private _writeFormulaExternalReferences;
}
