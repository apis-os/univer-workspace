import type { BaseEventSource, IBaseHierarchyChange } from '@univerjs-pro/bases';
import type { BaseCellValue, IFieldSnapshot, IRecordSnapshot, ITableSnapshot, IViewSnapshot } from '@univerjs/core';
import type { IEventBase } from '@univerjs/core/facade';
import type { FBase } from './f-base';
import type { FBaseTableField } from './f-field';
import type { FBaseTableRecord } from './f-record';
import type { FBaseTable } from './f-table';
import { FEventName } from '@univerjs/core/facade';
/**
 * Interface for base table creation event parameters
 */
export interface IBaseTableCreatedEventParams extends IEventBase {
    base: FBase;
    table?: ITableSnapshot;
    index?: number;
}
export interface IBeforeBaseTableCreateEventParams extends IBaseTableCreatedEventParams, IEventBase {
}
/**
 * Interface for base table field creation event parameters
 */
export interface IBaseTableFieldCreatedEventParams extends IEventBase {
    base: FBase;
    table: FBaseTable;
    field: IFieldSnapshot;
    index?: number;
    viewIndexes?: Record<string, number>;
}
export interface IBeforeBaseTableFieldCreateEventParams extends IBaseTableFieldCreatedEventParams, IEventBase {
}
/**
 * Interface for base table record creation event parameters
 */
export interface IBaseTableRecordCreatedEventParams extends IEventBase {
    base: FBase;
    table: FBaseTable;
    records: IRecordSnapshot[];
}
export interface IBeforeBaseTableRecordCreateEventParams extends IBaseTableRecordCreatedEventParams, IEventBase {
}
/**
 * Interface for base table view creation event parameters
 */
export interface IBaseTableViewCreatedEventParams extends IEventBase {
    base: FBase;
    table: FBaseTable;
    view: IViewSnapshot;
    index?: number;
}
export interface IBeforeBaseTableViewCreateEventParams extends IBaseTableViewCreatedEventParams, IEventBase {
}
/**
 * Interface for base table cell value change event parameters
 */
export interface IBaseTableCellValueChangedEventParams extends IEventBase {
    base: FBase;
    table: FBaseTable;
    field: FBaseTableField;
    record: FBaseTableRecord;
    value: BaseCellValue;
}
export interface IBeforeBaseTableCellValueChangeEventParams extends IBaseTableCellValueChangedEventParams, IEventBase {
}
/**
 * Parameters emitted after one atomic hierarchy mutation is applied.
 *
 * `changes` contains semantic Parent-edge changes from the same JSON1 mutation.
 * A single record move normally contributes one item; a range write or deletion
 * that promotes several children can contribute multiple items. Consumers should
 * process the array as one transaction rather than assuming one event per record.
 */
export interface IBaseHierarchyChangedEventParams extends IEventBase {
    /** Facade object for the Base containing the changed table. */
    base: FBase;
    /** Facade object for the table whose effective hierarchy changed. */
    table: FBaseTable;
    /** Ordered semantic edge changes committed by the atomic mutation. */
    changes: readonly IBaseHierarchyChange[];
    /** Origin of the applied mutation. Compare with `univerAPI.Enum.BaseEventSource`. */
    source: BaseEventSource;
}
/**
 * Parameters emitted before a local semantic hierarchy command is validated and
 * applied. Set the inherited `cancel` property to `true` to reject the entire
 * command. Remote collaboration mutations and Undo/Redo replay are not cancellable.
 */
export interface IBeforeBaseHierarchyChangeEventParams extends IBaseHierarchyChangedEventParams, IEventBase {
}
/**
 * Interface for base-related events
 * @ignore
 */
export interface IFBasesEventNameMixin {
    /**
     * Event fired after a base table is created
     * @see {@link IBaseTableCreatedEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BaseTableCreated, (params) => {
     *   const { base, table } = params;
     *   console.log('base table created', params);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BaseTableCreated: 'BaseTableCreated';
    /**
     * Event fired before a base table is created
     * @see {@link IBeforeBaseTableCreateEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeBaseTableCreate, (params) => {
     *   const { base, table } = params;
     *   console.log('before base create', params);
     *
     *   // Cancel the base creation operation
     *   params.cancel = true;
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeBaseTableCreate: 'BeforeBaseTableCreate';
    /**
     * Event fired after a base table field is created
     * @see {@link IBaseTableFieldCreatedEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BaseTableFieldCreated, (params) => {
     *   const { base, table, field } = params;
     *   console.log('base table field created', params);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BaseTableFieldCreated: 'BaseTableFieldCreated';
    /**
     * Event fired before a base table field is created
     * @see {@link IBeforeBaseTableFieldCreateEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeBaseTableFieldCreate, (params) => {
     *   const { base, table, field } = params;
     *   console.log('before base table field create', params);
     *
     *   // Cancel the base table field creation operation
     *   params.cancel = true;
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeBaseTableFieldCreate: 'BeforeBaseTableFieldCreate';
    /**
     * Event fired after a base table record is created
     * @see {@link IBaseTableRecordCreatedEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BaseTableRecordCreated, (params) => {
     *   const { base, table, records } = params;
     *   console.log('base table record created', params);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BaseTableRecordCreated: 'BaseTableRecordCreated';
    /**
     * Event fired before a base table record is created
     * @see {@link IBeforeBaseTableRecordCreateEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeBaseTableRecordCreate, (params) => {
     *   const { base, table, records } = params;
     *   console.log('before base table record create', params);
     *
     *   // Cancel the base table record creation operation
     *   params.cancel = true;
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeBaseTableRecordCreate: 'BeforeBaseTableRecordCreate';
    /**
     * Event fired after a base table view is created
     * @see {@link IBaseTableViewCreatedEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BaseTableViewCreated, (params) => {
     *   const { base, table, view } = params;
     *   console.log('base table view created', params);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BaseTableViewCreated: 'BaseTableViewCreated';
    /**
     * Event fired before a base table view is created
     * @see {@link IBeforeBaseTableViewCreateEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeBaseTableViewCreate, (params) => {
     *   const { base, table, view } = params;
     *   console.log('before base table view create', params);
     *
     *   // Cancel the base table view creation operation
     *   params.cancel = true;
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeBaseTableViewCreate: 'BeforeBaseTableViewCreate';
    /**
     * Event fired after a base table cell value is changed
     * @see {@link IBaseTableCellValueChangedEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BaseTableCellValueChanged, (params) => {
     *   const { base, table, field, record, value } = params;
     *   console.log('base table cell value changed', params);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BaseTableCellValueChanged: 'BaseTableCellValueChanged';
    /**
     * Event fired before a base table cell value is changed
     * @see {@link IBeforeBaseTableCellValueChangeEventParams}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeBaseTableCellValueChange, (params) => {
     *   const { base, table, field, record, value } = params;
     *   console.log('before base table cell value change', params);
     *
     *   // Cancel the base table cell value change operation
     *   params.cancel = true;
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    readonly BeforeBaseTableCellValueChange: 'BeforeBaseTableCellValueChange';
    /**
     * Fired after an atomic hierarchy mutation is applied.
     *
     * The event covers Facade and UI writes, remote collaboration mutations,
     * Undo/Redo replay, and import mutations that carry hierarchy metadata. One
     * event represents one committed mutation and may contain several Parent-edge
     * changes. It is suitable for notifications, analytics, or SDK-side automation;
     * do not write the same Parent edge again from the handler or an event loop may
     * be created.
     *
     * Use `source` to distinguish local SDK work from remote or history replay. The
     * source values are exposed through `univerAPI.Enum.BaseEventSource`; integrations
     * do not need to hard-code strings.
     *
     * @see {@link IBaseHierarchyChangedEventParams}
     * @example Trigger automation only for Facade writes
     * ```ts
     * const disposable = univerAPI.addEvent(
     *   univerAPI.Event.BaseHierarchyChanged,
     *   ({ table, changes, source }) => {
     *     if (source !== univerAPI.Enum.BaseEventSource.Facade) return;
     *
     *     for (const { recordId, oldParentRecordId, parentRecordId } of changes) {
     *       console.log({
     *         tableId: table.getId(),
     *         recordId,
     *         oldParentRecordId,
     *         parentRecordId,
     *       });
     *     }
     *   }
     * );
     *
     * // Call disposable.dispose() when the integration is torn down.
     * ```
     */
    readonly BaseHierarchyChanged: 'BaseHierarchyChanged';
    /**
     * Fired before a local semantic hierarchy command is applied.
     *
     * Covered writes include `addChild()`, `setParent()`, standard record creation
     * or duplication with an initial Parent value, deleting a parent whose surviving
     * children would be promoted, a direct Parent-cell update, and multi-record or
     * range writes touching the canonical Parent field.
     * Setting `cancel = true` rejects the complete command, including every Parent
     * edge, order update, and first-write field materialization in that command. No
     * partial mutation or Undo entry is produced.
     *
     * The event is intentionally local: remote collaboration mutations and
     * Undo/Redo replay have already been accepted and cannot be cancelled here.
     * Use `BaseHierarchyChanged` to observe those sources.
     *
     * @see {@link IBeforeBaseHierarchyChangeEventParams}
     * @example Prevent records from moving below a protected parent
     * ```ts
     * const disposable = univerAPI.addEvent(
     *   univerAPI.Event.BeforeBaseHierarchyChange,
     *   (event) => {
     *     const movesBelowProtectedParent = event.changes.some(
     *       ({ parentRecordId }) => parentRecordId === 'protected-task'
     *     );
     *
     *     if (movesBelowProtectedParent) {
     *       event.cancel = true;
     *     }
     *   }
     * );
     *
     * // Call disposable.dispose() when the integration is torn down.
     * ```
     */
    readonly BeforeBaseHierarchyChange: 'BeforeBaseHierarchyChange';
}
/**
 * Configuration interface for base-related events
 * @ignore
 */
export interface IBasesEventParamConfig {
    BaseTableCreated: IBaseTableCreatedEventParams;
    BeforeBaseTableCreate: IBeforeBaseTableCreateEventParams;
    BaseTableFieldCreated: IBaseTableFieldCreatedEventParams;
    BeforeBaseTableFieldCreate: IBeforeBaseTableFieldCreateEventParams;
    BaseTableRecordCreated: IBaseTableRecordCreatedEventParams;
    BeforeBaseTableRecordCreate: IBeforeBaseTableRecordCreateEventParams;
    BaseTableViewCreated: IBaseTableViewCreatedEventParams;
    BeforeBaseTableViewCreate: IBeforeBaseTableViewCreateEventParams;
    BaseTableCellValueChanged: IBaseTableCellValueChangedEventParams;
    BeforeBaseTableCellValueChange: IBeforeBaseTableCellValueChangeEventParams;
    BaseHierarchyChanged: IBaseHierarchyChangedEventParams;
    BeforeBaseHierarchyChange: IBeforeBaseHierarchyChangeEventParams;
}
export declare class FBasesEventNameMixin extends FEventName implements IFBasesEventNameMixin {
    get BaseTableCreated(): 'BaseTableCreated';
    get BeforeBaseTableCreate(): 'BeforeBaseTableCreate';
    get BaseTableFieldCreated(): 'BaseTableFieldCreated';
    get BeforeBaseTableFieldCreate(): 'BeforeBaseTableFieldCreate';
    get BaseTableRecordCreated(): 'BaseTableRecordCreated';
    get BeforeBaseTableRecordCreate(): 'BeforeBaseTableRecordCreate';
    get BaseTableViewCreated(): 'BaseTableViewCreated';
    get BeforeBaseTableViewCreate(): 'BeforeBaseTableViewCreate';
    get BaseTableCellValueChanged(): 'BaseTableCellValueChanged';
    get BeforeBaseTableCellValueChange(): 'BeforeBaseTableCellValueChange';
    get BaseHierarchyChanged(): 'BaseHierarchyChanged';
    get BeforeBaseHierarchyChange(): 'BeforeBaseHierarchyChange';
}
declare module '@univerjs/core/facade' {
    interface FEventName extends IFBasesEventNameMixin {
    }
    interface IEventParamConfig extends IBasesEventParamConfig {
    }
}
