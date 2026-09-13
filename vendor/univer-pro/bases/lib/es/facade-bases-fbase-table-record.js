import { ApplyBaseJson1Mutation, BASE_TABLE_NAME_REQUIREMENTS, BaseConditionalColorRuleUpdateType, BaseEventSource, BaseHierarchyErrorCode, BatchCreateBaseRecordsCommand, BatchDeleteBaseRecordsCommand, ChangeBaseFieldTypeCommand, CreateBaseChildRecordCommand, CreateBaseFieldCommand, CreateBaseRecordCommand, CreateBaseTableCommand, CreateBaseViewCommand, DeleteBaseFieldCommand, DeleteBaseRecordCommand, DeleteBaseTableCommand, DeleteBaseViewCommand, DuplicateBaseRecordCommand, IBaseProjectionService, MoveBaseFieldCommand, MoveBaseHierarchyRecordCommand, MoveBaseViewCommand, RenameBaseTableCommand, RenameBaseViewCommand, SetBaseNameCommand, SetBasePermissionCommand, SetBaseRangeValuesCommand, SetBaseRecordValuesCommand, SetBaseTableHierarchyFieldCommand, SetBaseViewFieldOrderCommand, SetBaseViewFieldVisibleCommand, SetBaseViewFieldWidthCommand, SetBaseViewFilterCommand, SetBaseViewGroupCommand, SetBaseViewSortCommand, UpdateBaseCellCommand, UpdateBaseFieldCommand, UpdateBaseRecordOrderCommand, UpdateBaseViewConditionalColorRulesCommand, UpdateBaseViewConfigCommand, ValidateBaseFormulaCommand, buildBaseHierarchyIndex, canEditBaseTargets, copyBaseTableSnapshot, createUniqueBaseTableName, ensureBaseTableCellLayout, getActiveBaseHierarchyFieldIds, getBaseCellValue, getBaseFieldPermissionObjectId, getBaseFormulaTableName, getBaseHierarchyDeletePromotions, getBasePermissionValue, getBaseRecordPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, getRecordLinkFieldConfig, matchesBaseCondition, parseRecordLinkIds, resolveBaseHierarchyFieldId, resolveBaseRangeHierarchyPatches, searchBaseTable, serializeRecordLinkIds, validateBaseHierarchyRecordCreations, validateBaseHierarchyRecordPatches, validateBaseTableName, validateRecordLinkValue } from '@univerjs-pro/bases';
import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CanceledError, ICommandService, IPermissionService, IResourceLoaderService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, createDefaultBaseTableSnapshot, generateRandomId } from '@univerjs/core';
import * as var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461029 from '@univerjs/core/facade';
import { FBaseInitialable, FEnum, FEventName, FUniver } from '@univerjs/core/facade';
import { UnitAction } from '@univerjs/protocol';
import { UpsertHostExternalReferencesCommand } from '@univerjs-pro/engine-formula';
import { I } from "./facade-bases-fbase-permission.js";
import { B, st } from "./facade-internal-db-endo.js";
import { V } from "./facade-bases-field-values.js";
function K(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46945) {
  '@babel/helpers - typeof';

  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46434) {
    return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46434;
  } : function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46436) {
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46436 && typeof Symbol == "function" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46436.constructor === Symbol && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46436 !== Symbol.prototype ? "symbol" : typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46436;
  }, K(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46945);
}
function pt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46947, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46948) {
  if (K(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46947) != "object" || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46947) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46947;
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46949 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46947[Symbol.toPrimitive];
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46949 !== undefined) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46950 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46949.call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46947, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46948 || "default");
    if (K(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46950) != "object") return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46950;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46948 === "string" ? String : Number)(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46947);
}
function mt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46955) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46956 = pt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46955, 'string');
  return K(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46956) == 'symbol' ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46956 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46956 + '';
}
function ht(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46959, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46960, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46961) {
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46960 = mt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46960)) in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46959 ? Object.defineProperty(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46959, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46960, {
    'value': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46961,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46959[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46960] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46961, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46959;
}
var q;
let J = q = class extends FBaseInitialable {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46438, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46439, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46440, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46441, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46442, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46443) {
    super(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46441), this._base = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46438, this._table = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46439, this._recordId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46440, this._injector = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46441, this._commandService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46442, this._permissionService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46443, ht(this, "_baseUnitId", undefined), ht(this, "_baseTableId", undefined), this._baseUnitId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46438.getId(), this._baseTableId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46439.getId();
  }
  getBaseFacade() {
    return this._base;
  }
  getTableFacade() {
    return this._table;
  }
  getId() {
    return this._recordId;
  }
  getPermission() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = this._table["getId"]();
    return new I(this._base["getId"](), getBaseRecordPermissionObjectId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46450, this._recordId), [getBaseTablePermissionObjectId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46450)], this._commandService, this._permissionService);
  }
  getRecord() {
    return {
      ...this._getRecord(),
      'values': this.getValues()
    };
  }
  getValue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46452) {
    return B(this._table['getTable']().fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46452]) ? this._getRecord().values[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46452] ?? null : null;
  }
  getValues() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46454 = this._table["getTable"]();
    return Object.fromEntries(Object.entries(this._getRecord().values).filter(([var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46220]) => B(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46454.fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46220])));
  }
  setValue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46457) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46458 = this._table["getTable"]().fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46456];
    return this._commandService['syncExecuteCommand'](UpdateBaseCellCommand.id, {
      'unitId': this._base['getId'](),
      'tableId': this._table["getId"](),
      'recordId': this._recordId,
      'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46456,
      'value': st(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46458, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46457),
      'source': BaseEventSource.Facade
    });
  }
  setAttachments(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46462, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46463) {
    return this.setValue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46462, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46463.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46221 => ({
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46221
    })));
  }
  getAttachments(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46466) {
    this._getAttachmentField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46466);
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46467 = this.getValue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46466);
    return Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46467) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46467.map((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223) => fn_L1_db_endo_routine_pure_O1_zalloc_throws_Error_sig8CF1(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46222, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46466, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46223)) : [];
  }
  deleteAttachments(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46471) {
    this._getAttachmentField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46470);
    let var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46471.map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46224 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46224.id));
    if (!var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.size) return true;
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46472 = this.getAttachments(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46470),
      var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46472.filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46225 => !var_L0_db_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46225.id));
    return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11.length === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46472.length || this.setAttachments(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11);
  }
  setValues(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46476, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46477 = 'id') {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46478 = this._table["getTable"](),
      var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13 = [{
        'recordId': this._recordId,
        'values': V(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46478, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46476, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46477)
      }];
    return this._commandService["syncExecuteCommand"](SetBaseRecordValuesCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'patches': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13,
      'source': BaseEventSource.Facade
    });
  }
  delete() {
    return this._commandService["syncExecuteCommand"](DeleteBaseRecordCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'recordId': this._recordId,
      'source': BaseEventSource.Facade
    });
  }
  duplicate(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46482) {
    let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = {
      ...this._getRecord(),
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46482,
      'id': generateRandomId(6)
    };
    var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.values = {
      ...var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.values,
      ...(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46482 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46482.values)
    }, Reflect.deleteProperty(var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.values, BASE_RECORD_ID_FIELD_ID);
    let var_L0_db_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242 = Date.now();
    if (var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.orderKey ||= '' + var_L0_db_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.createdAt ||= var_L0_db_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.updatedAt ||= var_L0_db_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242, !this._commandService["syncExecuteCommand"](DuplicateBaseRecordCommand.id, {
      'unitId': this._base['getId'](),
      'tableId': this._table['getId'](),
      'sourceRecordId': this._recordId,
      'record': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22,
      'source': BaseEventSource.Facade
    })) throw Error("[FRecord]: failed to duplicate record \"" + this._recordId + '\x22.');
    return this._injector['createInstance'](q, this._base, this._table, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.id, this._injector);
  }
  setOrderKey(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46484) {
    return this._commandService["syncExecuteCommand"](UpdateBaseRecordOrderCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'recordId': this._recordId,
      'orderKey': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46484
    });
  }
  getLinkedRecordIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46486) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46487 = this._getRecordLinkField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46486);
    return parseRecordLinkIds(this.getValue(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46487.id));
  }
  setLinkedRecordIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46490, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46491) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46492 = this._getRecordLinkField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46490),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46493 = serializeRecordLinkIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46491),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46494 = validateRecordLinkValue(this._base["getBase"]().getSnapshot(), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46493);
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46494.valid) throw Error(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46494.reason ?? "[FRecord]: invalid RecordLink value.");
    return this._commandService['syncExecuteCommand'](UpdateBaseCellCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'recordId': this._recordId,
      'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46490,
      'value': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46493,
      'source': BaseEventSource.Facade
    });
  }
  addLinkedRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46501) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46502 = getRecordLinkFieldConfig(this._getRecordLinkField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46500));
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46502) throw Error('[FRecord]:\x20RecordLink\x20field\x20\x22' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46500 + "\" has invalid config.");
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46503 = this.getLinkedRecordIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46500);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46502.multiple && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46503.includes(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46501) ? true : this.setLinkedRecordIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46502.multiple ? [...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46503, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46501] : [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46501]);
  }
  removeLinkedRecord(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46509) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46510 = this.getLinkedRecordIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46508);
    return !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46510.includes(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46509) || this.setLinkedRecordIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46510.filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46226 => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46226 !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46509));
  }
  getParent(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46514) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46515 = this._getHierarchyIndex(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46514).parentByRecordId["get"](this._recordId) ?? null;
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46515 ? this._table["getRecordById"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46515) : null;
  }
  getChildren(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46518) {
    return (this._getHierarchyIndex(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46518).childrenByParentId["get"](this._recordId) ?? []).flatMap(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46227 => {
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = this._table["getRecordById"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46227);
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46228 ? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46228] : [];
    });
  }
  getAncestors(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46520) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46521 = this._getHierarchyIndex(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46520),
      var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = [],
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46522 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46521.parentByRecordId['get'](this._recordId) ?? null;
    for (; var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46522;) {
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4642 = this._table['getRecordById'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46522);
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4642 && var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4642), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46522 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46521.parentByRecordId['get'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46522) ?? null;
    }
    return var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15;
  }
  getDescendants(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46526) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46527 = this._getHierarchyIndex(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46526),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46528 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46527.orderedRecordIds["indexOf"](this._recordId),
      var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46527.subtreeHeightByRecordId["has"](this._recordId) ? this._collectDescendantIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46527.childrenByParentId, this._recordId) : [];
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46528 < 0 ? [] : var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17.flatMap(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46231 => {
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232 = this._table["getRecordById"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46231);
      return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232 ? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46232] : [];
    });
  }
  setParent(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46532, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46533, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46534) {
    return this._commandService["syncExecuteCommand"](MoveBaseHierarchyRecordCommand.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46532,
      'recordId': this._recordId,
      'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46533,
      'orderKey': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46534,
      'source': BaseEventSource.Facade
    });
  }
  addChild(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46538, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46539, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46540 = 'id', var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46541) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46542 = this._table["getTable"](),
      var_L0_db_endo_timestampMs_pure_O1_zalloc_nothrow_sig22422 = Date.now(),
      var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = {
        ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46541,
        'id': generateRandomId(6),
        'values': V(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46542, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46539, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46540),
        'orderKey': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46541 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46541.orderKey) || '' + var_L0_db_endo_timestampMs_pure_O1_zalloc_nothrow_sig22422,
        'createdAt': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46541 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46541.createdAt) || var_L0_db_endo_timestampMs_pure_O1_zalloc_nothrow_sig22422,
        'updatedAt': (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46541 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46541.updatedAt) || var_L0_db_endo_timestampMs_pure_O1_zalloc_nothrow_sig22422
      };
    if (!this._commandService['syncExecuteCommand'](CreateBaseChildRecordCommand.id, {
      'unitId': this._base['getId'](),
      'tableId': this._table["getId"](),
      'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46538,
      'parentRecordId': this._recordId,
      'record': var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24,
      'source': BaseEventSource.Facade
    })) throw Error("[FRecord]: failed to create child under \"" + this._recordId + '\x22.');
    return this._injector["createInstance"](q, this._base, this._table, var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.id, this._injector);
  }
  _getHierarchyIndex(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46548) {
    return buildBaseHierarchyIndex(this._table["getTable"](), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46548);
  }
  _collectDescendantIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46550, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46551) {
    let var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19 = [],
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46552 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46235 => {
        for (let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4643 of var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46550.get(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46235) ?? []) var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19.push(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4643), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46552(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4643);
      };
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46552(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46551), var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19;
  }
  _getRecord() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = this._table["getTable"]().records[this._recordId];
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46556) throw Error("[FRecord]: record \"" + this._recordId + "\" does not exist.");
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46556;
  }
  _getRecordLinkField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46558) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = this._table["getTable"]().fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46558];
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46559 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46559.type !== BaseFieldType.RecordLink) throw Error('[FRecord]:\x20field\x20\x22' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46558 + "\" is not a RecordLink field.");
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46559;
  }
  _getAttachmentField(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46562) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46563 = this._table["getTable"]().fields[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46562];
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46563 || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46563.type !== BaseFieldType.Attachment) throw Error("[FRecord]: field \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46562 + "\" is not an Attachment field.");
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46563;
  }
};
function gt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46965) {
  return !!(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46965 && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46965 == 'object' && 'id' in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46965 && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46965.id == "string" && "name" in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46965 && typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46965.name == "string");
}
function fn_L1_db_endo_routine_pure_O1_zalloc_throws_Error_sig8CF1(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46967, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46968, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46969) {
  if (!gt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46967)) throw Error("[FRecord]: attachment at index " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46969 + " in field \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46968 + "\" is invalid.");
  return {
    ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46967
  };
}
export { J as FBaseTableRecord };
export { q };
