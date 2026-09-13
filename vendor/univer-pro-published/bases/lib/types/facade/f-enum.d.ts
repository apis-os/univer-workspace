import { BaseEventSource, BaseHierarchyErrorCode } from '@univerjs-pro/bases';
import { BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType } from '@univerjs/core';
import { FEnum } from '@univerjs/core/facade';
import { BaseFieldKeyEnum } from './field-key';
export interface IFBaseEnumMixin {
    /**
     * Base field types. The Base plugin currently exposes the 21 field types demonstrated below.
     * Other enum members are reserved for field plugins that are not enabled by default.
     * @example Create and populate every field type exposed by the Base UI
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * if (!fBase) throw new Error('No active Base.');
     * const table = fBase.insertTable(`Field examples ${Date.now()}`, { primaryFieldName: 'Title' });
     * const title = table.getPrimaryField(); // Primary fields are Text fields.
     * if (title.getType() !== univerAPI.Enum.BaseFieldType.Text) throw new Error('Expected a Text primary field.');
     *
     * table.addField('Status', univerAPI.Enum.BaseFieldType.SingleSelect, {
     *   field: { config: { options: [{ id: 'todo', name: 'Todo', color: 'blue' }, { id: 'done', name: 'Done', color: 'green' }] } }
     * });
     * table.addField('Tags', univerAPI.Enum.BaseFieldType.MultiSelect, {
     *   field: { config: { options: [{ id: 'api', name: 'API', color: 'purple' }, { id: 'docs', name: 'Docs', color: 'orange' }] } }
     * });
     * table.addField('Owner', univerAPI.Enum.BaseFieldType.Person, { field: { config: { allowMultiple: false, provider: 'person' } } });
     * table.addField('Teams', univerAPI.Enum.BaseFieldType.Group, { field: { config: { allowMultiple: true, provider: 'group' } } });
     * table.addField('Due Date', univerAPI.Enum.BaseFieldType.Date, {
     *   field: { config: { pattern: 'yyyy/mm/dd', includeTime: true, hourCycle: 'h24' } }
     * });
     * const attachments = table.addField('Attachments', univerAPI.Enum.BaseFieldType.Attachment);
     * table.addField('Amount', univerAPI.Enum.BaseFieldType.Number, { field: { config: { pattern: '#,##0.00', decimalPlaces: 2 } } });
     * table.addField('Approved', univerAPI.Enum.BaseFieldType.Checkbox);
     * table.addField('Website', univerAPI.Enum.BaseFieldType.Link);
     * table.addField('Phone', univerAPI.Enum.BaseFieldType.Phone);
     * table.addField('Email', univerAPI.Enum.BaseFieldType.Email);
     * table.addField('Progress', univerAPI.Enum.BaseFieldType.Progress, { field: { config: { start: 0, end: 100 } } });
     * table.addField('Budget', univerAPI.Enum.BaseFieldType.Currency, { field: { config: { currencySymbol: '$', decimalPlaces: 2 } } });
     * table.addField('Rating', univerAPI.Enum.BaseFieldType.Rating, { field: { config: { min: 1, max: 5 } } });
     * const formulaTableName = table.getFormulaName();
     * const formula = table.addField('Total', univerAPI.Enum.BaseFieldType.Formula, {
     *   field: { config: { formula: `=SUM(${formulaTableName}[[#This Row],[Amount]],${formulaTableName}[[#This Row],[Budget]])` } },
     *   externalReferences: [], // Required; this formula only uses fields in the Host Base.
     * });
     * const numbering = table.addField('Sequence', univerAPI.Enum.BaseFieldType.Numbering);
     * const createdBy = table.addField('Created By', univerAPI.Enum.BaseFieldType.CreatedBy);
     * const updatedBy = table.addField('Updated By', univerAPI.Enum.BaseFieldType.UpdatedBy);
     * const createdAt = table.addField('Created At', univerAPI.Enum.BaseFieldType.CreatedAt);
     * const updatedAt = table.addField('Updated At', univerAPI.Enum.BaseFieldType.UpdatedAt);
     *
     * const record = table.addRecord({
     *   Title: 'Document every field type',
     *   Status: 'todo',
     *   Tags: ['api', 'docs'],
     *   Owner: 'user-1',
     *   Teams: ['group-1'],
     *   'Due Date': 45839, // Excel serial for 2025-07-01.
     *   Attachments: [], // Populate with record.setAttachments(...) after creating the record.
     *   Amount: 1250.5,
     *   Approved: true,
     *   Website: { text: 'Univer', url: 'https://univer.ai' },
     *   Phone: '+1 555 0100',
     *   Email: 'agent@example.com',
     *   Progress: 75,
     *   Budget: 5000,
     *   Rating: 4,
     * }, univerAPI.Enum.BaseFieldKeyEnum.Name, { createdBy: 'user-1', updatedBy: 'user-1' });
     *
     * const previewDataUrl = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
     * record.setAttachments(attachments.getId(), [{
     *   id: 'local-preview',
     *   name: 'preview.gif',
     *   mimeType: 'image/gif',
     *   sourceType: univerAPI.Enum.ImageSourceType.BASE64,
     *   source: previewDataUrl
     * }]);
     *
     * // Formula, numbering, and audit fields are generated and cannot be written directly.
     * console.log({
     *   formula: record.getValue(formula.getId()),
     *   numbering: record.getValue(numbering.getId()),
     *   createdBy: record.getValue(createdBy.getId()),
     *   updatedBy: record.getValue(updatedBy.getId()),
     *   createdAt: record.getValue(createdAt.getId()),
     *   updatedAt: record.getValue(updatedAt.getId()),
     * });
     * ```
     */
    BaseFieldType: typeof BaseFieldType;
    /**
     * Base filter conjunctions.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * view.setFilter({
     *   conjunction: univerAPI.Enum.BaseFilterConjunction.AND,
     *   filters: [
     *     {
     *       fieldId: 'fld-1',
     *       operator: univerAPI.Enum.BaseFilterOperator.Equals,
     *       value: 'John Doe',
     *     },
     *   ],
     * });
     * ```
     */
    BaseFilterConjunction: typeof BaseFilterConjunction;
    /**
     * Base filter operators.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * view.setFilter({
     *   conjunction: univerAPI.Enum.BaseFilterConjunction.AND,
     *   filters: [
     *     {
     *       fieldId: 'fld-1',
     *       operator: univerAPI.Enum.BaseFilterOperator.Equals,
     *       value: 'John Doe',
     *     },
     *   ],
     * });
     * ```
     */
    BaseFilterOperator: typeof BaseFilterOperator;
    /**
     * Base field key enumeration.
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
     */
    BaseFieldKeyEnum: typeof BaseFieldKeyEnum;
    /**
     * Base view types.
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
     */
    BaseViewType: typeof BaseViewType;
    /**
     * Paint targets supported by Base conditional coloring.
     *
     * `CELL` colors only the evaluated field cell, `ROW` colors the complete
     * matching record row, and `COLUMN` colors the selected field column
     * unconditionally (its operator, operand, and date mode are ignored).
     *
     * @example Color an entire row when a Number field is greater than 80
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('Open a Base before running this example.');
     * const table = base.insertTable(`Conditional target ${Date.now()}`, {
     *   primaryFieldName: 'Risk item'
     * });
     * const level = table.addField('Risk level', univerAPI.Enum.BaseFieldType.Number);
     * const view = table.getViewByName('Grid');
     * if (!view) throw new Error('The default Grid view was not created.');
     *
     * view.addConditionalColorRule({
     *   id: 'high-risk',
     *   color: '#fde9e9',
     *   target: univerAPI.Enum.BaseConditionalColorTarget.ROW,
     *   fieldId: level.getId(),
     *   operator: univerAPI.Enum.BaseConditionalColorOperator.GREATER_THAN,
     *   operand: 80
     * });
     * ```
     */
    BaseConditionalColorTarget: typeof BaseConditionalColorTarget;
    /**
     * Comparison operators supported by Base conditional coloring.
     *
     * Text-like fields support equality, containment, and empty checks. Numeric
     * fields support equality, `GREATER_THAN`, `LESS_THAN`, and empty checks.
     * Date-like fields support equality, `BEFORE`, `AFTER`, and empty checks,
     * optionally with `BaseConditionalDateMode`. Checkbox fields support
     * equality and inequality.
     *
     * @example Add a text containment rule
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('Open a Base before running this example.');
     * const table = base.insertTable(`Conditional operator ${Date.now()}`, {
     *   primaryFieldName: 'Risk item'
     * });
     * const title = table.getPrimaryField();
     * const view = table.getViewByName('Grid');
     * if (!view) throw new Error('The default Grid view was not created.');
     *
     * view.addConditionalColorRule({
     *   id: 'delay-risk',
     *   color: '#fff7df',
     *   target: univerAPI.Enum.BaseConditionalColorTarget.CELL,
     *   fieldId: title.getId(),
     *   operator: univerAPI.Enum.BaseConditionalColorOperator.CONTAINS,
     *   operand: 'delay'
     * });
     * ```
     */
    BaseConditionalColorOperator: typeof BaseConditionalColorOperator;
    /**
     * Exact and relative windows supported by Date-like conditional color rules.
     *
     * Relative modes such as `TODAY`, `THIS_WEEK`, and `PAST_7_DAYS` do not
     * require an operand. Use `EXACT` with an explicit date operand. `IS`
     * matches dates inside the window, `IS_NOT` outside it, `BEFORE` before its
     * start, and `AFTER` after its end.
     *
     * @example Highlight records due in the next seven days
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('Open a Base before running this example.');
     * const table = base.insertTable(`Conditional date ${Date.now()}`, {
     *   primaryFieldName: 'Risk item'
     * });
     * const dueDate = table.addField(
     *   'Due date',
     *   univerAPI.Enum.BaseFieldType.Date
     * );
     * const view = table.getViewByName('Grid');
     * if (!view) throw new Error('The default Grid view was not created.');
     *
     * view.addConditionalColorRule({
     *   id: 'due-soon',
     *   color: '#eef3ff',
     *   target: univerAPI.Enum.BaseConditionalColorTarget.ROW,
     *   fieldId: dueDate.getId(),
     *   operator: univerAPI.Enum.BaseConditionalColorOperator.IS,
     *   dateMode: univerAPI.Enum.BaseConditionalDateMode.NEXT_7_DAYS
     * });
     * ```
     */
    BaseConditionalDateMode: typeof BaseConditionalDateMode;
    /**
     * Base sort directions.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const success = view.setSort([
     *   {
     *     fieldId: 'priority',
     *     direction: univerAPI.Enum.BaseSortDirection.ASC
     *   }
     * ]);
     * console.log(success ? 'Sort set' : 'Set sort failed');
     * ```
     */
    BaseSortDirection: typeof BaseSortDirection;
    /**
     * Sources reported by `BaseHierarchyChanged` and
     * `BeforeBaseHierarchyChange`.
     *
     * Use this enum instead of comparing source strings. `Facade` identifies a
     * write initiated through the Facade API; `Remote` identifies a collaboration
     * mutation; `Undo` and `Redo` identify history replay; and `Import` is reserved
     * for import pipelines that attach hierarchy metadata to their mutation.
     *
     * @example Ignore collaboration echoes while reacting to local SDK writes
     * ```ts
     * const disposable = univerAPI.addEvent(
     *   univerAPI.Event.BaseHierarchyChanged,
     *   ({ changes, source }) => {
     *     if (source === univerAPI.Enum.BaseEventSource.Remote) return;
     *
     *     for (const change of changes) {
     *       console.log(change.recordId, change.parentRecordId, source);
     *     }
     *   }
     * );
     *
     * // Call disposable.dispose() when the integration is torn down.
     * ```
     */
    BaseEventSource: typeof BaseEventSource;
    /**
     * Stable error codes thrown by hierarchy commands.
     *
     * SDK integrations should branch on `BaseHierarchyError.code`, not on a
     * localized UI notification or the human-readable error message. The current
     * codes cover an ineligible Parent field, a missing record, self-parent, cycle,
     * five-level depth overflow, and manual drag while the view is sorted.
     *
     * @example Handle a hierarchy error without hard-coded strings
     * ```ts
     * import { BaseHierarchyError } from '@univerjs-pro/bases';
     *
     * try {
     *   record.setParent(table.getHierarchyFieldId(), targetRecordId);
     * } catch (error) {
     *   if (!(error instanceof BaseHierarchyError)) throw error;
     *
     *   switch (error.code) {
     *     case univerAPI.Enum.BaseHierarchyErrorCode.Cycle:
     *       console.error('The move would create a cycle.');
     *       break;
     *     case univerAPI.Enum.BaseHierarchyErrorCode.MaxDepth:
     *       console.error('The hierarchy supports at most five levels.');
     *       break;
     *     default:
     *       console.error('The hierarchy change was rejected.', error.code);
     *   }
     * }
     * ```
     */
    BaseHierarchyErrorCode: typeof BaseHierarchyErrorCode;
    /**
     * Reasons why a stored Parent edge is excluded from the effective tree.
     *
     * Collaboration data is not repaired by an extra client mutation. Instead,
     * every client deterministically cuts an invalid edge and renders that record as
     * a root. Model projections expose this enum so renderers and diagnostics can
     * describe the same decision without hard-coded values.
     *
     * @example Inspect projection diagnostics
     * ```ts
     * const projection = table.getViewByName('Grid')?.getProjection();
     * if (
     *   projection?.type === univerAPI.Enum.BaseViewType.Grid &&
     *   projection.hierarchy
     * ) {
     *   for (const node of Object.values(projection.hierarchy.nodes)) {
     *     if (node.invalidReason === univerAPI.Enum.BaseHierarchyInvalidReason.Cycle) {
     *       console.warn(`Record ${node.recordId} has a cyclic Parent edge.`);
     *     }
     *   }
     * }
     * ```
     */
    BaseHierarchyInvalidReason: typeof BaseHierarchyInvalidReason;
    /**
     * Semantic roles supported by Base RecordLink fields.
     *
     * `Parent` marks the table's canonical same-table, single-value RecordLink.
     * Prefer `table.getHierarchyFieldId()` and `table.setHierarchyField()` over
     * editing `field.config.relationRole` directly, because the Facade write runs
     * through the validated, undoable command path.
     *
     * @example Verify that the first child materialized the Parent field
     * ```ts
     * const fieldId = table.getHierarchyFieldId();
     * const field = table.getFieldById(fieldId);
     * const config = field?.getField().config;
     *
     * if (config?.relationRole === univerAPI.Enum.BaseRecordLinkRole.Parent) {
     *   console.log('Hierarchy field is materialized.');
     * }
     * ```
     */
    BaseRecordLinkRole: typeof BaseRecordLinkRole;
}
export declare class FBaseEnumMixin extends FEnum implements IFBaseEnumMixin {
    get BaseFieldType(): typeof BaseFieldType;
    get BaseFilterConjunction(): typeof BaseFilterConjunction;
    get BaseFilterOperator(): typeof BaseFilterOperator;
    get BaseFieldKeyEnum(): typeof BaseFieldKeyEnum;
    get BaseViewType(): typeof BaseViewType;
    get BaseConditionalColorTarget(): typeof BaseConditionalColorTarget;
    get BaseConditionalColorOperator(): typeof BaseConditionalColorOperator;
    get BaseConditionalDateMode(): typeof BaseConditionalDateMode;
    get BaseSortDirection(): typeof BaseSortDirection;
    get BaseEventSource(): typeof BaseEventSource;
    get BaseHierarchyErrorCode(): typeof BaseHierarchyErrorCode;
    get BaseHierarchyInvalidReason(): typeof BaseHierarchyInvalidReason;
    get BaseRecordLinkRole(): typeof BaseRecordLinkRole;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFBaseEnumMixin {
    }
}
