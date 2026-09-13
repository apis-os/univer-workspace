import { ApplyBaseJson1Mutation, BASE_TABLE_NAME_REQUIREMENTS, BaseConditionalColorRuleUpdateType, BaseEventSource, BaseHierarchyErrorCode, BatchCreateBaseRecordsCommand, BatchDeleteBaseRecordsCommand, ChangeBaseFieldTypeCommand, CreateBaseChildRecordCommand, CreateBaseFieldCommand, CreateBaseRecordCommand, CreateBaseTableCommand, CreateBaseViewCommand, DeleteBaseFieldCommand, DeleteBaseRecordCommand, DeleteBaseTableCommand, DeleteBaseViewCommand, DuplicateBaseRecordCommand, IBaseProjectionService, MoveBaseFieldCommand, MoveBaseHierarchyRecordCommand, MoveBaseViewCommand, RenameBaseTableCommand, RenameBaseViewCommand, SetBaseNameCommand, SetBasePermissionCommand, SetBaseRangeValuesCommand, SetBaseRecordValuesCommand, SetBaseTableHierarchyFieldCommand, SetBaseViewFieldOrderCommand, SetBaseViewFieldVisibleCommand, SetBaseViewFieldWidthCommand, SetBaseViewFilterCommand, SetBaseViewGroupCommand, SetBaseViewSortCommand, UpdateBaseCellCommand, UpdateBaseFieldCommand, UpdateBaseRecordOrderCommand, UpdateBaseViewConditionalColorRulesCommand, UpdateBaseViewConfigCommand, ValidateBaseFormulaCommand, buildBaseHierarchyIndex, canEditBaseTargets, copyBaseTableSnapshot, createUniqueBaseTableName, ensureBaseTableCellLayout, getActiveBaseHierarchyFieldIds, getBaseCellValue, getBaseFieldPermissionObjectId, getBaseFormulaTableName, getBaseHierarchyDeletePromotions, getBasePermissionValue, getBaseRecordPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, getRecordLinkFieldConfig, matchesBaseCondition, parseRecordLinkIds, resolveBaseHierarchyFieldId, resolveBaseRangeHierarchyPatches, searchBaseTable, serializeRecordLinkIds, validateBaseHierarchyRecordCreations, validateBaseHierarchyRecordPatches, validateBaseTableName, validateRecordLinkValue } from '@univerjs-pro/bases';
import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CanceledError, ICommandService, IPermissionService, IResourceLoaderService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, createDefaultBaseTableSnapshot, generateRandomId } from '@univerjs/core';
import * as var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461029 from '@univerjs/core/facade';
import { FBaseInitialable, FEnum, FEventName, FUniver } from '@univerjs/core/facade';
import { UnitAction } from '@univerjs/protocol';
import { UpsertHostExternalReferencesCommand } from '@univerjs-pro/engine-formula';
import { I } from "./facade-bases-fbase-permission.js";
import { B } from "./facade-internal-db-endo.js";
import { z } from "./facade-bases-fbase-table-field.js";
let Y = class {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46566, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46567, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46568, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46569, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46570, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46571, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46572) {
    this._base = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46566, this._table = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46567, this._viewId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46568, this._injector = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46569, this._commandService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46570, this._permissionService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46571, this._projectionService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46572;
  }
  getId() {
    return this._viewId;
  }
  getPermission() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46580 = this._table["getId"]();
    return new I(this._base["getId"](), getBaseViewPermissionObjectId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46580, this._viewId), [getBaseTablePermissionObjectId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46580)], this._commandService, this._permissionService);
  }
  getView() {
    return this._getView();
  }
  getName() {
    return this._getView().name;
  }
  getType() {
    return this._getView().type;
  }
  setName(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46582) {
    return this._commandService['syncExecuteCommand'](RenameBaseViewCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'name': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46582
    });
  }
  getConfig() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46584 = this.getType(),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46585 = this._getView().config;
    switch (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46584) {
      case BaseViewType.Grid:
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46585;
      case BaseViewType.Kanban:
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46585;
      case BaseViewType.Calendar:
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46585;
      case BaseViewType.Gantt:
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46585;
      case BaseViewType.Gallery:
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46585;
      default:
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46585;
    }
  }
  updateConfig(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46588) {
    return this._commandService['syncExecuteCommand'](UpdateBaseViewConfigCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'patch': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46588
    });
  }
  getConditionalColorRules() {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46590;
    return Tools.deepClone(((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46590 = this._getView().config["conditionalColoring"]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46590.rules) ?? []);
  }
  setConditionalColorRules(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46592) {
    return this._commandService["syncExecuteCommand"](UpdateBaseViewConditionalColorRulesCommand.id, {
      'unitId': this._base['getId'](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'type': BaseConditionalColorRuleUpdateType.Set,
      'rules': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46592
    });
  }
  addConditionalColorRule(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46594) {
    return this._commandService["syncExecuteCommand"](UpdateBaseViewConditionalColorRulesCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'type': BaseConditionalColorRuleUpdateType.Add,
      'rule': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46594
    });
  }
  deleteConditionalColorRule(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46596) {
    return this._commandService["syncExecuteCommand"](UpdateBaseViewConditionalColorRulesCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'type': BaseConditionalColorRuleUpdateType.Delete,
      'ruleId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46596
    });
  }
  clearConditionalColorRules() {
    return this._commandService['syncExecuteCommand'](UpdateBaseViewConditionalColorRulesCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'type': BaseConditionalColorRuleUpdateType.Clear
    });
  }
  getFilter() {
    return this._getView().filter ?? null;
  }
  setFilter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46598) {
    return this._commandService["syncExecuteCommand"](SetBaseViewFilterCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'filter': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46598
    });
  }
  getSort() {
    return this._getView().sort ?? [];
  }
  setSort(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46600) {
    return this._commandService["syncExecuteCommand"](SetBaseViewSortCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'sort': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46600
    });
  }
  getGroup() {
    return this._getView().group ?? [];
  }
  setGroup(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46602) {
    return this._commandService["syncExecuteCommand"](SetBaseViewGroupCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'group': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46602
    });
  }
  getFieldSettings(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46604) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46605;
    return B(this._table["getTable"]().fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46604]) ? ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46605 = this._getView().fieldSettings) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46605[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46604]) ?? {} : {};
  }
  getVisibleFields() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46608 = this._table["getTable"](),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46609 = this._getView();
    return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46609.fieldOrder ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46608.fieldOrder).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46237 => {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46239 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46608.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46237];
      return B(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46239) && !((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46609.fieldSettings) != null && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46237]) != null && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46238.hidden);
    }).map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46243 => this._injector["createInstance"](z, this._base, this._table, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46243));
  }
  setFieldVisible(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46612, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46613) {
    return B(this._table["getTable"]().fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46612]) ? this._commandService["syncExecuteCommand"](SetBaseViewFieldVisibleCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table['getId'](),
      'viewId': this._viewId,
      'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46612,
      'visible': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46613
    }) : false;
  }
  setFieldWidth(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46616, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46617) {
    return B(this._table["getTable"]().fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46616]) ? this._commandService["syncExecuteCommand"](SetBaseViewFieldWidthCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46616,
      'width': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46617
    }) : false;
  }
  moveField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46620, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46621) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46622 = this._table["getTable"](),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46623 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46621.beforeFieldId ?? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46621.afterFieldId;
    return !B(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46622.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46620]) || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46623 || !B(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46622.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46623]) ? false : this._commandService["syncExecuteCommand"](SetBaseViewFieldOrderCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46620,
      'target': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46621
    });
  }
  move(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46628) {
    return this._commandService["syncExecuteCommand"](MoveBaseViewCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'target': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46628
    });
  }
  delete() {
    return this._commandService['syncExecuteCommand'](DeleteBaseViewCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId
    });
  }
  getProjection() {
    return this._projectionService["getProjection"](this._base["getBase"]().getSnapshot(), this._table["getId"](), this._viewId);
  }
  _getView() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46630 = this._table["getTable"]().views[this._viewId];
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46630) throw Error("[FView]: view \"" + this._viewId + "\" does not exist.");
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46630;
  }
};
export { Y as FBaseTableView };
