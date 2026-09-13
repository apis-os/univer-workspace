import { ApplyBaseJson1Mutation, BASE_TABLE_NAME_REQUIREMENTS, BaseConditionalColorRuleUpdateType, BaseEventSource, BaseHierarchyErrorCode, BatchCreateBaseRecordsCommand, BatchDeleteBaseRecordsCommand, ChangeBaseFieldTypeCommand, CreateBaseChildRecordCommand, CreateBaseFieldCommand, CreateBaseRecordCommand, CreateBaseTableCommand, CreateBaseViewCommand, DeleteBaseFieldCommand, DeleteBaseRecordCommand, DeleteBaseTableCommand, DeleteBaseViewCommand, DuplicateBaseRecordCommand, IBaseProjectionService, MoveBaseFieldCommand, MoveBaseHierarchyRecordCommand, MoveBaseViewCommand, RenameBaseTableCommand, RenameBaseViewCommand, SetBaseNameCommand, SetBasePermissionCommand, SetBaseRangeValuesCommand, SetBaseRecordValuesCommand, SetBaseTableHierarchyFieldCommand, SetBaseViewFieldOrderCommand, SetBaseViewFieldVisibleCommand, SetBaseViewFieldWidthCommand, SetBaseViewFilterCommand, SetBaseViewGroupCommand, SetBaseViewSortCommand, UpdateBaseCellCommand, UpdateBaseFieldCommand, UpdateBaseRecordOrderCommand, UpdateBaseViewConditionalColorRulesCommand, UpdateBaseViewConfigCommand, ValidateBaseFormulaCommand, buildBaseHierarchyIndex, canEditBaseTargets, copyBaseTableSnapshot, createUniqueBaseTableName, ensureBaseTableCellLayout, getActiveBaseHierarchyFieldIds, getBaseCellValue, getBaseFieldPermissionObjectId, getBaseFormulaTableName, getBaseHierarchyDeletePromotions, getBasePermissionValue, getBaseRecordPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, getRecordLinkFieldConfig, matchesBaseCondition, parseRecordLinkIds, resolveBaseHierarchyFieldId, resolveBaseRangeHierarchyPatches, searchBaseTable, serializeRecordLinkIds, validateBaseHierarchyRecordCreations, validateBaseHierarchyRecordPatches, validateBaseTableName, validateRecordLinkValue } from '@univerjs-pro/bases';
import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CanceledError, ICommandService, IPermissionService, IResourceLoaderService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, createDefaultBaseTableSnapshot, generateRandomId } from '@univerjs/core';
import * as var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461029 from '@univerjs/core/facade';
import { FBaseInitialable, FEnum, FEventName, FUniver } from '@univerjs/core/facade';
import { UnitAction } from '@univerjs/protocol';
import { UpsertHostExternalReferencesCommand } from '@univerjs-pro/engine-formula';
import { at } from "./facade-bases-fbase-permission.js";
import { X } from "./facade-bases-fbase-table.js";
let Q = class extends var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461029.FBase {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46785, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46787, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46788, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46789) {
    super(), this._base = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46785, this._injector = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46786, this._resourceLoaderService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46787, this._commandService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46788, this._permissionService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46789;
  }
  getBase() {
    return this._base;
  }
  getId() {
    return this._base['getUnitId']();
  }
  getPermission() {
    return new at(this.getId(), this._commandService, this._permissionService);
  }
  save() {
    return this._resourceLoaderService['saveUnit'](this.getId()) ?? Tools.deepClone(this._base["getSnapshot"]());
  }
  getName() {
    return this._base["getSnapshot"]().name;
  }
  setName(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46795) {
    this._commandService['syncExecuteCommand'](SetBaseNameCommand.id, {
      'unitId': this.getId(),
      'name': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46795
    });
  }
  getTables() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46797 = this._base['getSnapshot']();
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46797.tableOrder["map"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46299 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46797.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46299]).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46300).map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46301 => this._injector["createInstance"](X, this, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46301.id, this._injector));
  }
  getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46799) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800 = this._base["getSnapshot"]().tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46799];
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800 ? this._injector['createInstance'](X, this, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46800.id, this._injector) : null;
  }
  getTableByName(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46803) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46804 = this._base["getSnapshot"](),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46805 = Object.values(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46804.tables).find(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46302 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46302.name === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46803);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46805 ? this._injector["createInstance"](X, this, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46805.id, this._injector) : null;
  }
  insertTable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46809, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46811 = createDefaultBaseTableSnapshot({
        'id': generateRandomId(),
        'name': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46809,
        ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810.table),
        'primaryFieldName': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810.primaryFieldName
      }),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812 = Tools.commonExtend(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46811, (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810.table) ?? {}),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46813 = validateBaseTableName(this._base["getSnapshot"](), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812.name);
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46813.valid) throw Error('[FBase]:\x20invalid\x20table\x20name\x20\x22' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812.name + "\". " + BASE_TABLE_NAME_REQUIREMENTS + '\x20' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46813.reason);
    if (!this._commandService['syncExecuteCommand'](CreateBaseTableCommand.id, {
      'unitId': this._base["getUnitId"](),
      'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
      'index': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46810.index
    })) throw Error("Failed to create table \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46809 + '\x22.');
    return this._injector["createInstance"](X, this, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46812.id, this._injector);
  }
  deleteTable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46819) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46820 = typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46819 == "string" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46819 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46819.getId();
    if (!this._commandService["syncExecuteCommand"](DeleteBaseTableCommand.id, {
      'unitId': this._base["getUnitId"](),
      'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46820
    })) throw Error("Failed to delete table \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46820 + '\x22.');
    return true;
  }
  duplicateTable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46823, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46824) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46825 = this._base["getSnapshot"](),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46826 = typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46823 == "string" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46823 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46823.getId(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46827 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46825.tables[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46826];
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46827) throw Error("[FBase]: table \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46826 + '\x22\x20does\x20not\x20exist.');
    let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46825.tableOrder["indexOf"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46826) + 1,
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46828 = copyBaseTableSnapshot(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46827, {
        'id': generateRandomId(),
        'name': createUniqueBaseTableName(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46825, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46827.name + " Copy"),
        'includeRecords': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46824 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46824.includeRecords) ?? false,
        'regenerateViewIds': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46824 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46824.regenerateViewIds) ?? false
      });
    if (!this._commandService["syncExecuteCommand"](CreateBaseTableCommand.id, {
      'unitId': this._base['getUnitId'](),
      'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46828,
      'index': var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2
    })) throw Error("Failed to duplicate table \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46826 + '\x22.');
    return this._injector["createInstance"](X, this, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46828.id, this._injector);
  }
  getSchema() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46835 = this._base["getSnapshot"]();
    return {
      'id': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46835.id,
      'name': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46835.name,
      'tables': this.getTables().map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46303 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46303.getSchema())
    };
  }
};
export { Q as FBase };
