import { ApplyBaseJson1Mutation, BASE_TABLE_NAME_REQUIREMENTS, BaseConditionalColorRuleUpdateType, BaseEventSource, BaseHierarchyErrorCode, BatchCreateBaseRecordsCommand, BatchDeleteBaseRecordsCommand, ChangeBaseFieldTypeCommand, CreateBaseChildRecordCommand, CreateBaseFieldCommand, CreateBaseRecordCommand, CreateBaseTableCommand, CreateBaseViewCommand, DeleteBaseFieldCommand, DeleteBaseRecordCommand, DeleteBaseTableCommand, DeleteBaseViewCommand, DuplicateBaseRecordCommand, IBaseProjectionService, MoveBaseFieldCommand, MoveBaseHierarchyRecordCommand, MoveBaseViewCommand, RenameBaseTableCommand, RenameBaseViewCommand, SetBaseNameCommand, SetBasePermissionCommand, SetBaseRangeValuesCommand, SetBaseRecordValuesCommand, SetBaseTableHierarchyFieldCommand, SetBaseViewFieldOrderCommand, SetBaseViewFieldVisibleCommand, SetBaseViewFieldWidthCommand, SetBaseViewFilterCommand, SetBaseViewGroupCommand, SetBaseViewSortCommand, UpdateBaseCellCommand, UpdateBaseFieldCommand, UpdateBaseRecordOrderCommand, UpdateBaseViewConditionalColorRulesCommand, UpdateBaseViewConfigCommand, ValidateBaseFormulaCommand, buildBaseHierarchyIndex, canEditBaseTargets, copyBaseTableSnapshot, createUniqueBaseTableName, ensureBaseTableCellLayout, getActiveBaseHierarchyFieldIds, getBaseCellValue, getBaseFieldPermissionObjectId, getBaseFormulaTableName, getBaseHierarchyDeletePromotions, getBasePermissionValue, getBaseRecordPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, getRecordLinkFieldConfig, matchesBaseCondition, parseRecordLinkIds, resolveBaseHierarchyFieldId, resolveBaseRangeHierarchyPatches, searchBaseTable, serializeRecordLinkIds, validateBaseHierarchyRecordCreations, validateBaseHierarchyRecordPatches, validateBaseTableName, validateRecordLinkValue } from '@univerjs-pro/bases';
import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CanceledError, ICommandService, IPermissionService, IResourceLoaderService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, createDefaultBaseTableSnapshot, generateRandomId } from '@univerjs/core';
import * as var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461029 from '@univerjs/core/facade';
import { FBaseInitialable, FEnum, FEventName, FUniver } from '@univerjs/core/facade';
import { UnitAction } from '@univerjs/protocol';
import { UpsertHostExternalReferencesCommand } from '@univerjs-pro/engine-formula';
import { z } from "./facade-bases-fbase-table-field.js";
import { G, W } from "./facade-bases-fbase-table-range.js";
import { J, q } from "./facade-bases-fbase-table-record.js";
import { Y } from "./facade-bases-fbase-table-view.js";
import { X } from "./facade-bases-fbase-table.js";
import { Q } from "./facade-bases-fbase.js";
import { BaseFieldKeyEnum, ot } from "./facade-bases-field-key-enum.js";
import { Dt } from "./facade-bases-fbases-event-name-mixin.js";
function L(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46865, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46866) {
  return function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46331, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46332) {
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46866(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46331, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46865);
  };
}
;
function R(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46869, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46872) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46873 = arguments.length,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46874 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46873 < 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46870 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46872 === null ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46872 = Object.getOwnPropertyDescriptor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46871) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46872,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46875;
  if (typeof Reflect == "object" && typeof Reflect.decorate == 'function') var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46874 = Reflect.decorate(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46869, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46872);else {
    for (var var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46869.length - 1; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 >= 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D9--) (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46875 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46869[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D9]) && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46874 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46873 < 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46875(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46874) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46873 > 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46875(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46874) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46875(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46871)) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46874);
  }
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46873 > 3 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46874 && Object.defineProperty(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46874), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46874;
}
z = R([L(3, ICommandService), L(4, IPermissionService)], z);
function B(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46885) {
  return !!(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46885 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46885.system !== true && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46885.type !== BaseFieldType.RecordId);
}
;
;
function st(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46893, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46894) {
  if ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46893 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46893.type) !== BaseFieldType.Attachment || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46894 == null) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46894;
  if (!Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46894)) throw TypeError('Invalid\x20attachment\x20value\x20for\x20field\x20\x22' + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46893.name + '\x22:\x20expected\x20an\x20array.');
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46894.map((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46382) => lt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46893, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46382));
}
;
;
function lt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46903, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46905) {
  let var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = "Invalid attachment at index " + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46905 + " for field \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46903.name + '\x22';
  if (!ft(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904)) throw TypeError(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 + ": expected an object.");
  if ("url" in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904) throw TypeError(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 + ':\x20\x22url\x22\x20is\x20not\x20supported;\x20use\x20\x22source\x22.');
  if ("type" in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904) throw TypeError(var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 + ':\x20\x22type\x22\x20is\x20not\x20supported;\x20use\x20\x22mimeType\x22.');
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46906 = H(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904.id, var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4, 'id'),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46907 = H(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904.name, var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4, "name"),
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46908 = H(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904.source, var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4, "source");
  return {
    'id': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46906,
    'name': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46907,
    'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46908,
    'sourceType': ut(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904.sourceType, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46908, var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4),
    ...dt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904, "mimeType", var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4),
    ...U(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904, "size", var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4),
    ...U(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904, "width", var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4),
    ...U(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904, "height", var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4),
    ...dt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46904, "thumbnail", var_L0_db_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4)
  };
}
;
function ut(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46915, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46916, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46917) {
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46915 == null) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46916.startsWith("data:") ? ImageSourceType.BASE64 : ImageSourceType.URL;
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46915 === ImageSourceType.URL || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46915 === ImageSourceType.UUID || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46915 === ImageSourceType.BASE64) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46915;
  throw TypeError(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46917 + ": \"sourceType\" must be URL, UUID, or BASE64.");
}
;
function H(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46921, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46922, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46923) {
  if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46921 != "string" || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46921.trim()) throw TypeError(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46922 + ": \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46923 + "\" must be a non-empty string.");
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46921;
}
;
function dt(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46927, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46928, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46929) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46930 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46927[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46928];
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46930 == null) return {};
  if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46930 != "string" || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46930.trim()) throw TypeError(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46929 + ": \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46928 + "\" must be a non-empty string when provided.");
  return {
    [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46928]: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46930
  };
}
;
function U(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46935, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46936, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46937) {
  let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46938 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46935[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46936];
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46938 == null) return {};
  if (typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46938 != "number" || !Number.isFinite(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46938) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46938 < 0) throw TypeError(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46937 + ": \"" + var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46936 + "\" must be a non-negative finite number when provided.");
  return {
    [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46936]: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46938
  };
}
;
function ft(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46943) {
  return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46943 == "object" && !!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46943 && !Array.isArray(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46943);
}
G = W = R([L(4, ICommandService)], G);
;
;
;
J = q = R([L(4, ICommandService), L(5, IPermissionService)], J);
;
Y = R([L(4, ICommandService), L(5, IPermissionService), L(6, IBaseProjectionService)], Y);
X = R([L(3, ICommandService), L(4, IPermissionService), L(5, IBaseProjectionService)], X);
;
;
;
;
;
;
;
Q = R([L(1, Inject(Injector)), L(2, IResourceLoaderService), L(3, ICommandService), L(4, IPermissionService)], Q);
var Tt = class extends FUniver {
  _initialize() {
    this._initBaseBeforeEvents(), this._initBaseAfterEvents();
  }
  createBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46837 = {}, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46838) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46839 = this._univerInstanceService['createUnit'](UniverInstanceType.UNIVER_BASE, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46837, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46838);
    return this._injector["createInstance"](Q, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46839);
  }
  getActiveBase() {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46843 = this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_BASE);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46843 ? this._injector['createInstance'](Q, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46843) : null;
  }
  getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46845) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46846 = this._univerInstanceService["getUnit"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46845, UniverInstanceType.UNIVER_BASE);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46846 ? this._injector["createInstance"](Q, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46846) : null;
  }
  getBases() {
    return this._univerInstanceService["getAllUnitsForType"](UniverInstanceType.UNIVER_BASE).map(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46304 => this._injector["createInstance"](Q, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46304));
  }
  _initBaseAfterEvents() {
    this.disposeWithMe(this.registerEventHandler(this.Event["BaseHierarchyChanged"], () => this._commandService['onCommandExecuted']((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4648) => {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4649;
      if (!fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4647, ApplyBaseJson1Mutation)) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4647.params;
      if (!((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4650.hierarchyChanges) != null && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4649.length)) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4651 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4650.unitId),
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4651 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4651.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4650.hierarchyChanges[0].tableId);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4651 || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4652) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4652,
        'changes': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4650.hierarchyChanges,
        'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4648 != null && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4648.fromCollab ? BaseEventSource.Remote : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4650.source ?? BaseEventSource.UI
      };
      this.fireEvent(this.Event["BaseHierarchyChanged"], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BaseTableCreated"], () => this._commandService['onCommandExecuted'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659.id !== CreateBaseTableCommand.id) return;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4660,
          table: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661,
          index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4662
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659.params,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4660);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4663) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4663,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4661,
        'index': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4662
      };
      this.fireEvent(this.Event['BaseTableCreated'], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event['BaseTableFieldCreated'], () => this._commandService["onCommandExecuted"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4669 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4669.id !== CreateBaseFieldCommand.id) return;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4670,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4671,
          field: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4672,
          index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4673,
          viewIndexes: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4674
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4669.params,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4675 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4670);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4675) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4675.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4671);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4676) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4675,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4676,
        'field': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4672,
        'index': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4673,
        'viewIndexes': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4674
      };
      this.fireEvent(this.Event["BaseTableFieldCreated"], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BaseTableRecordCreated"], () => this._commandService['onCommandExecuted'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4685 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4685.id !== CreateBaseRecordCommand.id && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4685.id !== BatchCreateBaseRecordsCommand.id) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4685.params,
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4687,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4688
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4686,
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4686.records ?? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4686.record],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4687);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4689) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4689.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4688);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4690) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4689,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4690,
        'records': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1
      };
      this.fireEvent(this.Event["BaseTableRecordCreated"], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event['BaseTableViewCreated'], () => this._commandService["onCommandExecuted"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4697.id !== CreateBaseViewCommand.id) return;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4698,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4699,
          view: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46100,
          index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46101
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4697.params,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4698);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46102) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46102.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4699);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46103) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46102,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
        'view': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46100,
        'index': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46101
      };
      this.fireEvent(this.Event["BaseTableViewCreated"], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BaseTableCellValueChanged"], () => this._commandService['onCommandExecuted'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111.id !== UpdateBaseCellCommand.id) return;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
          recordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
          fieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115,
          value: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111.params,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46112);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46113);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118.getFieldById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118.getRecordById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46120) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118,
        'field': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119,
        'record': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46120,
        'value': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116
      };
      this.fireEvent(this.Event["BaseTableCellValueChanged"], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10);
    })));
  }
  _initBaseBeforeEvents() {
    this.disposeWithMe(this.registerEventHandler(this.Event['BeforeBaseHierarchyChange'], () => this._commandService["beforeCommandExecuted"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => {
      if (fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, SetBaseRecordValuesCommand)) {
        let {
            unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462,
            tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463,
            patches: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464,
            source: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465 = BaseEventSource.UI
          } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D463);
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466) return;
        this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466.table, validateBaseHierarchyRecordPatches(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466.table['getTable'](), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D464), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D465);
        return;
      }
      if (fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, SetBaseRangeValuesCommand)) {
        let {
            unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467,
            tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468,
            patches: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D469,
            source: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = BaseEventSource.UI
          } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468);
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4611) return;
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4611.table["getTable"]();
        this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4611.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4611.table, validateBaseHierarchyRecordPatches(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612, resolveBaseRangeHierarchyPatches(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D469)), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4610);
        return;
      }
      if (fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, CreateBaseRecordCommand)) {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4613.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4613.tableId);
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4614) return;
        this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4614.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4614.table, validateBaseHierarchyRecordCreations(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4614.table["getTable"](), [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4613.record]), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4613.source ?? BaseEventSource.UI);
        return;
      }
      if (fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, BatchCreateBaseRecordsCommand)) {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4615.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4615.tableId);
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4616) return;
        this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4616.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4616.table, validateBaseHierarchyRecordCreations(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4616.table["getTable"](), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4615.records), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4615.source ?? BaseEventSource.UI);
        return;
      }
      if (fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, DuplicateBaseRecordCommand)) {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4617.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4617.tableId);
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4618) return;
        this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4618.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4618.table, validateBaseHierarchyRecordCreations(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4618.table['getTable'](), [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4617.record]), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4617.source ?? BaseEventSource.UI);
        return;
      }
      if (fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, MoveBaseHierarchyRecordCommand)) {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4619.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4619.tableId);
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620) return;
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4621 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620.table['getTable'](),
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4622 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4619.fieldId ?? resolveBaseHierarchyFieldId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4621),
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = buildBaseHierarchyIndex(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4622).parentByRecordId["get"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4619.recordId) ?? null;
        this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620.table, [{
          'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4619.tableId,
          'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
          'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4619.recordId,
          'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4623,
          'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4619.parentRecordId
        }], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4619.source ?? BaseEventSource.UI);
        return;
      }
      if (fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, CreateBaseChildRecordCommand)) {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624.tableId);
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4625) return;
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4626 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624.fieldId ?? resolveBaseHierarchyFieldId(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4625.table["getTable"]());
        this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4625.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4625.table, [{
          'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624.tableId,
          'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4626,
          'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624.record['id'],
          'oldParentRecordId': null,
          'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624.parentRecordId
        }], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4624.source ?? BaseEventSource.UI);
        return;
      }
      if (fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, DeleteBaseRecordCommand)) {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627.tableId);
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628) return;
        this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628.table, getBaseHierarchyDeletePromotions(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628.table["getTable"](), [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627.recordId]), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627.source ?? BaseEventSource.UI);
        return;
      }
      if (fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, BatchDeleteBaseRecordsCommand)) {
        let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
          var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629.tableId);
        if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630) return;
        this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630.table, getBaseHierarchyDeletePromotions(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630.table["getTable"](), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629.recordIds), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629.source ?? BaseEventSource.UI);
        return;
      }
      if (!fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131, UpdateBaseCellCommand)) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46131.params,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = this._getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.tableId);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133.table["getTable"]();
      if (!getActiveBaseHierarchyFieldIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46134).includes(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.fieldId)) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = buildBaseHierarchyIndex(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.fieldId).parentByRecordId['get'](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.recordId) ?? null,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = parseRecordLinkIds(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.value)[0] ?? null;
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46135 !== var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46136 && this._fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133.base, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46133.table, [{
        'tableId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.tableId,
        'fieldId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.fieldId,
        'recordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.recordId,
        'oldParentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46135,
        'parentRecordId': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46136
      }], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46132.source ?? BaseEventSource.UI);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeBaseTableCreate"], () => this._commandService["beforeCommandExecuted"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46143 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46143.id !== CreateBaseTableCommand.id) return;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46144,
          table: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46145,
          index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46146
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46143.params,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46144);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46147) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46147,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46145,
        'index': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46146
      };
      if (this.fireEvent(this.Event['BeforeBaseTableCreate'], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12), var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12.cancel) throw new CanceledError();
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeBaseTableFieldCreate"], () => this._commandService["beforeCommandExecuted"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46153 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46153.id !== CreateBaseFieldCommand.id) return;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46154,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46155,
          field: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46156,
          index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46157,
          viewIndexes: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46158
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46153.params,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46154);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46159) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46160 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46159.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46155);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46160) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46159,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46160,
        'field': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46156,
        'index': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46157,
        'viewIndexes': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46158
      };
      if (this.fireEvent(this.Event["BeforeBaseTableFieldCreate"], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14), var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.cancel) throw new CanceledError();
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeBaseTableRecordCreate"], () => this._commandService["beforeCommandExecuted"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46169 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46169.id !== CreateBaseRecordCommand.id && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46169.id !== BatchCreateBaseRecordsCommand.id) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46170 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46169.params,
        {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46171,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46172
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46170,
        var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46170.records ?? [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46170.record],
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46173 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46171);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46173) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46173.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46172);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46173,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174,
        'records': var_L0_db_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3
      };
      if (this.fireEvent(this.Event["BeforeBaseTableRecordCreate"], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16), var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.cancel) throw new CanceledError();
    }))), this.disposeWithMe(this.registerEventHandler(this.Event['BeforeBaseTableViewCreate'], () => this._commandService["beforeCommandExecuted"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46181 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46181.id !== CreateBaseViewCommand.id) return;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46182,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46183,
          view: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46184,
          index: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46185
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46181.params,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46182);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46183);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187,
        'view': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46184,
        'index': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46185
      };
      if (this.fireEvent(this.Event["BeforeBaseTableViewCreate"], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18), var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.cancel) throw new CanceledError();
    }))), this.disposeWithMe(this.registerEventHandler(this.Event['BeforeBaseTableCellValueChange'], () => this._commandService["beforeCommandExecuted"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46195 => {
      if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46195.id !== UpdateBaseCellCommand.id) return;
      let {
          unitId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46196,
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46197,
          recordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46198,
          fieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46199,
          value: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46200
        } = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46195.params,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46201 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46196);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46201) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46201.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46197);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46202) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46202.getFieldById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46199);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203) return;
      let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46204 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46202.getRecordById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46198);
      if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46204) return;
      let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20 = {
        'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46201,
        'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46202,
        'field': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46203,
        'record': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46204,
        'value': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46200
      };
      if (this.fireEvent(this.Event['BeforeBaseTableCellValueChange'], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20), var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20.cancel) throw new CanceledError();
    })));
  }
  _getHierarchyEventContext(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46849, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46850) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46851 = this.getBase(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46849),
      var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46852 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46851 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46851.getTableById(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46850);
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46851 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46852 ? {
      'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46851,
      'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46852
    } : null;
  }
  _fireBeforeHierarchyChange(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46857, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46858, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46859, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46860) {
    if (!var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46859.length) return;
    let var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32 = {
      'base': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46857,
      'table': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46858,
      'changes': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46859,
      'source': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46860
    };
    if (this.fireEvent(this.Event['BeforeBaseHierarchyChange'], var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32), var_L0_db_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32.cancel) throw new CanceledError();
  }
};
function fn_L0_db_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461025, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461026) {
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461025.id === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461026.id && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461025.params !== undefined;
}
FUniver.extend(Tt);
var Et = class extends FEnum {
  get BaseFieldType() {
    return BaseFieldType;
  }
  get BaseFilterConjunction() {
    return BaseFilterConjunction;
  }
  get BaseFilterOperator() {
    return BaseFilterOperator;
  }
  get BaseFieldKeyEnum() {
    return ot;
  }
  get BaseViewType() {
    return BaseViewType;
  }
  get BaseConditionalColorTarget() {
    return BaseConditionalColorTarget;
  }
  get BaseConditionalColorOperator() {
    return BaseConditionalColorOperator;
  }
  get BaseConditionalDateMode() {
    return BaseConditionalDateMode;
  }
  get BaseSortDirection() {
    return BaseSortDirection;
  }
  get BaseEventSource() {
    return BaseEventSource;
  }
  get BaseHierarchyErrorCode() {
    return BaseHierarchyErrorCode;
  }
  get BaseHierarchyInvalidReason() {
    return BaseHierarchyInvalidReason;
  }
  get BaseRecordLinkRole() {
    return BaseRecordLinkRole;
  }
};
FEnum.extend(Et);
FEventName.extend(Dt);
export { st, B };
