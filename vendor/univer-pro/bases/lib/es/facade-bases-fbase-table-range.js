import { ApplyBaseJson1Mutation, BASE_TABLE_NAME_REQUIREMENTS, BaseConditionalColorRuleUpdateType, BaseEventSource, BaseHierarchyErrorCode, BatchCreateBaseRecordsCommand, BatchDeleteBaseRecordsCommand, ChangeBaseFieldTypeCommand, CreateBaseChildRecordCommand, CreateBaseFieldCommand, CreateBaseRecordCommand, CreateBaseTableCommand, CreateBaseViewCommand, DeleteBaseFieldCommand, DeleteBaseRecordCommand, DeleteBaseTableCommand, DeleteBaseViewCommand, DuplicateBaseRecordCommand, IBaseProjectionService, MoveBaseFieldCommand, MoveBaseHierarchyRecordCommand, MoveBaseViewCommand, RenameBaseTableCommand, RenameBaseViewCommand, SetBaseNameCommand, SetBasePermissionCommand, SetBaseRangeValuesCommand, SetBaseRecordValuesCommand, SetBaseTableHierarchyFieldCommand, SetBaseViewFieldOrderCommand, SetBaseViewFieldVisibleCommand, SetBaseViewFieldWidthCommand, SetBaseViewFilterCommand, SetBaseViewGroupCommand, SetBaseViewSortCommand, UpdateBaseCellCommand, UpdateBaseFieldCommand, UpdateBaseRecordOrderCommand, UpdateBaseViewConditionalColorRulesCommand, UpdateBaseViewConfigCommand, ValidateBaseFormulaCommand, buildBaseHierarchyIndex, canEditBaseTargets, copyBaseTableSnapshot, createUniqueBaseTableName, ensureBaseTableCellLayout, getActiveBaseHierarchyFieldIds, getBaseCellValue, getBaseFieldPermissionObjectId, getBaseFormulaTableName, getBaseHierarchyDeletePromotions, getBasePermissionValue, getBaseRecordPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, getRecordLinkFieldConfig, matchesBaseCondition, parseRecordLinkIds, resolveBaseHierarchyFieldId, resolveBaseRangeHierarchyPatches, searchBaseTable, serializeRecordLinkIds, validateBaseHierarchyRecordCreations, validateBaseHierarchyRecordPatches, validateBaseTableName, validateRecordLinkValue } from '@univerjs-pro/bases';
import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CanceledError, ICommandService, IPermissionService, IResourceLoaderService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, createDefaultBaseTableSnapshot, generateRandomId } from '@univerjs/core';
import * as var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461029 from '@univerjs/core/facade';
import { FBaseInitialable, FEnum, FEventName, FUniver } from '@univerjs/core/facade';
import { UnitAction } from '@univerjs/protocol';
import { UpsertHostExternalReferencesCommand } from '@univerjs-pro/engine-formula';
import { B } from "./facade-internal-db-endo.js";
var W;
let G = W = class {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46384, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46385, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46386, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46387, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46388) {
    this._base = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46384, this._table = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46385, this._range = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46386, this._inject = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46387, this._commandService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46388, this._assertInBounds();
  }
  getBaseId() {
    return this._base["getId"]();
  }
  getTableId() {
    return this._table["getId"]();
  }
  getRange() {
    return {
      ...this._range
    };
  }
  getRow() {
    return this._range['startRow'];
  }
  getColumn() {
    return this._range["startColumn"];
  }
  getNumRows() {
    return this._range["endRow"] - this._range['startRow'] + 1;
  }
  getNumColumns() {
    return this._range["endColumn"] - this._range['startColumn'] + 1;
  }
  getValues() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46394 = this._getTable(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46395 = this._getFieldIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46394),
      var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7 = [];
    for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46215 = this._range['startRow']; var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46215 <= this._range['endRow']; var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46215++) {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46396;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46396 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46394.rowId) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46396[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46215],
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [];
      for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461 = this._range["startColumn"]; var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461 <= this._range["endColumn"]; var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461++) {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46395[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461];
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46 ? getBaseCellValue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46394, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46) : null);
      }
      var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7.push(var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A);
    }
    return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7;
  }
  getValue() {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46400;
    return ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46400 = this.getValues()[0]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46400[0]) ?? null;
  }
  setValue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46402) {
    return this.setValues([[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46402]]);
  }
  setValues(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46404) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46405 = this.getNumRows(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = this.getNumColumns();
    if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46404.length > var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46405 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46404.some(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46216 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46216.length > var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46406)) {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46407;
      throw Error("[FBaseRange]: values size " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46404.length + 'x' + (((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46407 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46404[0]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46407.length) ?? 0) + " exceeds range size " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46405 + 'x' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46406 + '.');
    }
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = this._getTable(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46409 = this._getFieldIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46408),
      var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46404.flatMap((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46218) => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46217.map((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4633) => {
        var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4634;
        let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = this._range['startRow'] + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46218,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46409[this._range["startColumn"] + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4633],
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46408.rowId) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4634[var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB];
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4635 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636) throw Error("[FBaseRange]: cannot resolve the public Base range address.");
        return {
          'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
          'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4635,
          'value': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632
        };
      }));
    return this._commandService['syncExecuteCommand'](SetBaseRangeValuesCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'patches': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9,
      'source': BaseEventSource.Facade
    });
  }
  clear() {
    return this.setValues(Array.from({
      'length': this.getNumRows()
    }, () => Array.from({
      'length': this.getNumColumns()
    }, () => null)));
  }
  offset(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46416, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46418 = this.getNumRows(), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46419 = this.getNumColumns()) {
    return this._inject["createInstance"](W, this._base, this._table, {
      'startRow': this._range["startRow"] + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46416,
      'startColumn': this._range["startColumn"] + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46417,
      'endRow': this._range["startRow"] + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46416 + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46418 - 1,
      'endColumn': this._range["startColumn"] + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46417 + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46419 - 1
    }, this._inject);
  }
  _getTable() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46424 = this._table["getTable"]();
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46424) throw Error("[FBaseRange]: table does not exist.");
    return ensureBaseTableCellLayout(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46424);
  }
  _assertInBounds() {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46426;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46427 = this._getTable(),
      var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46426 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46427.recordOrder) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46426.length) ?? 0,
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46428 = this._getFieldIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46427).length;
    if (this._range['startRow'] < 0 || this._range["startColumn"] < 0 || this._range["endRow"] < this._range['startRow'] || this._range["endColumn"] < this._range["startColumn"] || this._range["endRow"] >= Math.max(var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, 1) || this._range["endColumn"] >= Math.max(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46428, 1)) throw Error("[FBaseRange]: range is out of bounds. Max rows: " + var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 + ", max columns: " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46428 + ", range: " + JSON.stringify(this._range) + '.');
  }
  _getFieldIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46432) {
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46432.fieldOrder["filter"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46219 => B(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46432.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46219]));
  }
};
export { G as FBaseTableRange };
export { W };
