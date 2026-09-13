import { ApplyBaseJson1Mutation as var_core_value_sig11D0, BASE_TABLE_NAME_REQUIREMENTS as var_core_value_sigB8ED, BaseConditionalColorRuleUpdateType as var_core_value_sig8EAE, BaseEventSource as var_core_value_sig1CDD, BaseHierarchyErrorCode as var_core_value_sig0DB1, BatchCreateBaseRecordsCommand as var_core_value_sig68A2, BatchDeleteBaseRecordsCommand as var_core_value_sigCC17, ChangeBaseFieldTypeCommand as var_core_value_sig32AE, CreateBaseChildRecordCommand as var_core_value_sigC753, CreateBaseFieldCommand as var_core_value_sigFFD1, CreateBaseRecordCommand as var_core_value_sig81AE, CreateBaseTableCommand as var_core_value_sigF79F, CreateBaseViewCommand as var_core_value_sig0E54, DeleteBaseFieldCommand as var_core_value_sig3B17, DeleteBaseRecordCommand as var_core_value_sig6C4A, DeleteBaseTableCommand as var_core_value_sig73D9, DeleteBaseViewCommand as var_core_value_sigEAF8, DuplicateBaseRecordCommand as var_core_value_sig0455, IBaseProjectionService as var_core_value_sig737C, MoveBaseFieldCommand as var_core_value_sig5AF5, MoveBaseHierarchyRecordCommand as var_core_value_sig9DE4, MoveBaseViewCommand as var_core_value_sig77FA, RenameBaseTableCommand as var_core_value_sigA4A7, RenameBaseViewCommand as var_core_value_sigA4DF, SetBaseNameCommand as var_core_value_sigCC9D, SetBasePermissionCommand as var_core_value_sig90F5, SetBaseRangeValuesCommand as var_core_value_sigD2BA, SetBaseRecordValuesCommand as var_core_value_sigCD3A, SetBaseTableHierarchyFieldCommand as var_core_value_sig519D, SetBaseViewFieldOrderCommand as var_core_value_sigC7E7, SetBaseViewFieldVisibleCommand as var_core_value_sig6E1C, SetBaseViewFieldWidthCommand as var_core_value_sigFABC, SetBaseViewFilterCommand as var_core_value_sig413D, SetBaseViewGroupCommand as var_core_value_sig5BCE, SetBaseViewSortCommand as var_core_value_sig8EF0, UpdateBaseCellCommand as var_core_value_sig78AC, UpdateBaseFieldCommand as var_core_value_sig4CEF, UpdateBaseRecordOrderCommand as var_core_value_sigD57D, UpdateBaseViewConditionalColorRulesCommand as var_core_value_sig2CC7, UpdateBaseViewConfigCommand as var_core_value_sig4784, ValidateBaseFormulaCommand as var_core_value_sigC39E, buildBaseHierarchyIndex as var_core_value_sig16C7, canEditBaseTargets as var_core_value_sig7481, copyBaseTableSnapshot as var_core_value_sig08A3, createUniqueBaseTableName as var_core_value_sig77D8, ensureBaseTableCellLayout as var_core_value_sig78A3, getActiveBaseHierarchyFieldIds as var_core_value_sig649B, getBaseCellValue as var_core_value_sig6256, getBaseFieldPermissionObjectId as var_core_value_sigE7A6, getBaseFormulaTableName as var_core_value_sigB505, getBaseHierarchyDeletePromotions as var_core_value_sig7428, getBasePermissionValue as var_core_value_sig1DCE, getBaseRecordPermissionObjectId as var_core_value_sig0567, getBaseTablePermissionObjectId as var_core_value_sigA7F3, getBaseViewPermissionObjectId as var_core_value_sigEACD, getRecordLinkFieldConfig as var_core_value_sig901E, matchesBaseCondition as var_core_value_sigF7BB, parseRecordLinkIds as var_core_value_sigFA38, resolveBaseHierarchyFieldId as var_core_value_sig102B, resolveBaseRangeHierarchyPatches as var_core_value_sigA7DB, searchBaseTable as var_core_value_sig5EEE, serializeRecordLinkIds as var_core_value_sig65B4, validateBaseHierarchyRecordCreations as var_core_value_sigF98E, validateBaseHierarchyRecordPatches as var_core_value_sigA470, validateBaseTableName as var_core_value_sig19A1, validateRecordLinkValue as var_core_value_sig81F7 } from '@univerjs-pro/bases';
import { BASE_RECORD_ID_FIELD_ID as var_core_value_sigBE51, BaseConditionalColorOperator as var_core_value_sigAAD1, BaseConditionalColorTarget as var_core_value_sigBC1A, BaseConditionalDateMode as var_core_value_sig3F3A, BaseFieldType as var_core_value_sigA984, BaseFilterConjunction as var_core_value_sigA504, BaseFilterOperator as var_core_value_sig05FF, BaseHierarchyInvalidReason as var_core_value_sigFBF0, BaseRecordLinkRole as var_core_value_sig2F95, BaseSortDirection as var_core_value_sigF0E1, BaseViewType as var_core_value_sig2D8D, CanceledError as var_core_value_sigE5A6, ICommandService as var_core_value_sigF449, IPermissionService as var_core_value_sig38C5, IResourceLoaderService as var_core_value_sigC87D, ImageSourceType as var_core_value_sigCCDC, Inject as var_core_value_sigC310, Injector as var_core_value_sigA4E8, Tools as var_core_value_sigDC07, UniverInstanceType as var_core_value_sig3474, createDefaultBaseTableSnapshot as var_core_value_sig4E80, generateRandomId as var_core_value_sigD23B } from '@univerjs/core';
import * as var_core_value_sig2B2A from '@univerjs/core/facade';
import { FBaseInitialable as var_core_value_sig0B5C, FEnum as var_core_value_sig7D42, FEventName as var_core_value_sig8FDE, FUniver as var_core_value_sig78E6 } from '@univerjs/core/facade';
import { UnitAction as var_core_value_sig541F } from '@univerjs/protocol';
import { UpsertHostExternalReferencesCommand as var_core_value_sig417B } from '@univerjs-pro/engine-formula';
var at = class {
    constructor(var_core_value_sig029F, var_core_value_sig3767, var_core_value_sig670B) {
      this._unitId = var_core_value_sig029F, this._commandService = var_core_value_sig3767, this._permissionService = var_core_value_sig670B;
    }
    async setPoint(var_core_value_sig6912, var_core_value_sigE235) {
      await this._commandService["executeCommand"](var_core_value_sig90F5.id, {
        'unitId': this._unitId,
        'objectId': this._unitId,
        'action': var_core_value_sig6912,
        'value': var_core_value_sigE235
      });
    }
    getPoint(var_core_value_sig7664) {
      return var_core_value_sig1DCE(this._permissionService, this._unitId, this._unitId, var_core_value_sig7664);
    }
    async setEditable(var_core_value_sig2281 = true) {
      await this._commandService["executeCommand"](var_core_value_sig90F5.id, {
        'unitId': this._unitId,
        'objectId': this._unitId,
        'action': var_core_value_sig541F.Edit,
        'value': var_core_value_sig2281
      });
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](var_core_value_sig90F5.id, {
        'unitId': this._unitId,
        'objectId': this._unitId,
        'action': var_core_value_sig541F.Edit,
        'value': false
      });
    }
    canEdit() {
      return var_core_value_sig1DCE(this._permissionService, this._unitId, this._unitId, var_core_value_sig541F.Edit);
    }
  },
  I = class {
    constructor(var_core_value_sig5E86, var_core_value_sig6998, var_core_value_sigF639, var_core_value_sigEAE5, var_core_value_sigE94C) {
      this._unitId = var_core_value_sig5E86, this._objectId = var_core_value_sig6998, this._parentObjectIds = var_core_value_sigF639, this._commandService = var_core_value_sigEAE5, this._permissionService = var_core_value_sigE94C;
    }
    async setEditable(var_core_value_sig6D47 = true) {
      await this._commandService['executeCommand'](var_core_value_sig90F5.id, {
        'unitId': this._unitId,
        'objectId': this._objectId,
        'action': var_core_value_sig541F.Edit,
        'value': var_core_value_sig6D47
      });
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](var_core_value_sig90F5.id, {
        'unitId': this._unitId,
        'objectId': this._objectId,
        'action': var_core_value_sig541F.Edit,
        'value': false
      });
    }
    canEdit() {
      return var_core_value_sig7481(this._permissionService, this._unitId, [...this._parentObjectIds, this._objectId]);
    }
  };
function L(var_core_value_sigED1C, var_core_value_sig726E) {
  return function (var_core_value_sigCB82, var_core_value_sigCF4E) {
    var_core_value_sig726E(var_core_value_sigCB82, var_core_value_sigCF4E, var_core_value_sigED1C);
  };
}
;
function R(var_core_value_sig2CD3, var_core_value_sig038E, var_core_value_sigAA1E, var_core_value_sigC9F5) {
  var var_core_value_sig7EEA = arguments.length,
    var_core_value_sig59CE = var_core_value_sig7EEA < 3 ? var_core_value_sig038E : var_core_value_sigC9F5 === null ? var_core_value_sigC9F5 = Object.getOwnPropertyDescriptor(var_core_value_sig038E, var_core_value_sigAA1E) : var_core_value_sigC9F5,
    var_core_value_sig33C8;
  if (typeof Reflect == "object" && typeof Reflect.decorate == 'function') var_core_value_sig59CE = Reflect.decorate(var_core_value_sig2CD3, var_core_value_sig038E, var_core_value_sigAA1E, var_core_value_sigC9F5);else {
    for (var var_core_value_sig957F = var_core_value_sig2CD3.length - 1; var_core_value_sig957F >= 0; var_core_value_sig957F--) (var_core_value_sig33C8 = var_core_value_sig2CD3[var_core_value_sig957F]) && (var_core_value_sig59CE = (var_core_value_sig7EEA < 3 ? var_core_value_sig33C8(var_core_value_sig59CE) : var_core_value_sig7EEA > 3 ? var_core_value_sig33C8(var_core_value_sig038E, var_core_value_sigAA1E, var_core_value_sig59CE) : var_core_value_sig33C8(var_core_value_sig038E, var_core_value_sigAA1E)) || var_core_value_sig59CE);
  }
  return var_core_value_sig7EEA > 3 && var_core_value_sig59CE && Object.defineProperty(var_core_value_sig038E, var_core_value_sigAA1E, var_core_value_sig59CE), var_core_value_sig59CE;
}
let z = class {
  constructor(var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sigB2CE, var_core_value_sig443C) {
    this._base = var_core_value_sig6CAD, this._table = var_core_value_sig8CF5, this._fieldId = var_core_value_sigDDD7, this._commandService = var_core_value_sigB2CE, this._permissionService = var_core_value_sig443C;
  }
  getId() {
    return this._fieldId;
  }
  getPermission() {
    let var_core_value_sig39B1 = this._table["getId"]();
    return new I(this._base["getId"](), var_core_value_sigE7A6(var_core_value_sig39B1, this._fieldId), [var_core_value_sigA7F3(var_core_value_sig39B1)], this._commandService, this._permissionService);
  }
  getField() {
    return this._getField();
  }
  getName() {
    return this._getField().name;
  }
  getType() {
    return this._getField().type;
  }
  getConfig() {
    return this._getField().config;
  }
  getDefaultValue() {
    return this._getField().defaultValue;
  }
  getDescription() {
    return this._getField().description;
  }
  isReadonly() {
    return !!this._getField().readonly;
  }
  setName(var_core_value_sig210D) {
    return this.update({
      'name': var_core_value_sig210D
    });
  }
  setConfig(var_core_value_sigB4B4, var_core_value_sigD407) {
    return this.update({
      'config': var_core_value_sigB4B4
    }, var_core_value_sigD407);
  }
  setDefaultValue(var_core_value_sig63F3) {
    return this.update({
      'defaultValue': var_core_value_sig63F3
    });
  }
  update(var_core_value_sig6A71, var_core_value_sig3BF6) {
    let var_core_value_sig38CE = this._getField().type;
    return (var_core_value_sig6A71.type ?? var_core_value_sig38CE) === var_core_value_sigA984.Formula && (Object.prototype["hasOwnProperty"].call(var_core_value_sig6A71, "config") || var_core_value_sig6A71.type === var_core_value_sigA984.Formula) && !this._writeFormulaExternalReferences(var_core_value_sig3BF6) ? false : this._commandService["syncExecuteCommand"](var_core_value_sig4CEF.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'fieldId': this._fieldId,
      'patch': var_core_value_sig6A71
    });
  }
  changeType(var_core_value_sig62B7, var_core_value_sig37A8 = {}, var_core_value_sigA90D) {
    return var_core_value_sig62B7 === var_core_value_sigA984.Formula && !this._writeFormulaExternalReferences(var_core_value_sigA90D) ? false : this._commandService["syncExecuteCommand"](var_core_value_sig32AE.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'fieldId': this._fieldId,
      'input': {
        'type': var_core_value_sig62B7,
        'config': var_core_value_sig37A8
      }
    });
  }
  delete() {
    return this._commandService["syncExecuteCommand"](var_core_value_sig3B17.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'fieldId': this._fieldId
    });
  }
  move(var_core_value_sig7A3C) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig5AF5.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'fieldId': this._fieldId,
      'target': var_core_value_sig7A3C
    });
  }
  _getField() {
    let var_core_value_sig0511 = this._table["getTable"]().fields[this._fieldId];
    if (!var_core_value_sig0511) throw Error('[FField]:\x20field\x20\x22' + this._fieldId + "\" does not exist.");
    return var_core_value_sig0511;
  }
  _writeFormulaExternalReferences(var_core_value_sig1F44) {
    if (!var_core_value_sig1F44 || !Array.isArray(var_core_value_sig1F44.externalReferences)) return console.warn('[Base\x20Field\x20Facade]:\x20Formula\x20writes\x20require\x20{\x20externalReferences\x20}.\x20Use\x20[]\x20only\x20for\x20a\x20Host-local\x20formula.'), false;
    if (var_core_value_sig1F44.externalReferences['length'] === 0) return true;
    let var_core_value_sigCB04 = this._commandService["syncExecuteCommand"](var_core_value_sig417B.id, {
      'unitId': this._base["getId"](),
      'references': var_core_value_sig1F44.externalReferences
    });
    return var_core_value_sigCB04 || console.warn("[Base Field Facade]: Failed to bind External References."), var_core_value_sigCB04;
  }
};
z = R([L(3, var_core_value_sigF449), L(4, var_core_value_sig38C5)], z);
let ot = function (var_core_value_sig803B) {
  return var_core_value_sig803B.Id = 'id', var_core_value_sig803B.Name = "name", var_core_value_sig803B.Auto = "auto", var_core_value_sig803B;
}({});
function B(var_core_value_sig5830) {
  return !!(var_core_value_sig5830 && var_core_value_sig5830.system !== true && var_core_value_sig5830.type !== var_core_value_sigA984.RecordId);
}
;
function V(var_core_value_sig4A7C, var_core_value_sigF975, var_core_value_sigCDAF = 'id') {
  if (!var_core_value_sigF975) return {};
  let var_core_value_sigA298 = {};
  return Object.entries(var_core_value_sigF975).forEach(([var_core_value_sig947E, var_core_value_sig4545]) => {
    let var_core_value_sigF39A = ct(var_core_value_sig4A7C, var_core_value_sig947E, var_core_value_sigCDAF);
    var_core_value_sigA298[var_core_value_sigF39A] = st(var_core_value_sig4A7C.fields[var_core_value_sigF39A], var_core_value_sig4545);
  }), var_core_value_sigA298;
}
;
function st(var_core_value_sig0B40, var_core_value_sig330B) {
  if ((var_core_value_sig0B40 == null ? undefined : var_core_value_sig0B40.type) !== var_core_value_sigA984.Attachment || var_core_value_sig330B == null) return var_core_value_sig330B;
  if (!Array.isArray(var_core_value_sig330B)) throw TypeError('Invalid\x20attachment\x20value\x20for\x20field\x20\x22' + var_core_value_sig0B40.name + '\x22:\x20expected\x20an\x20array.');
  return var_core_value_sig330B.map((var_core_value_sigF79C, var_core_value_sig2E54) => lt(var_core_value_sig0B40, var_core_value_sigF79C, var_core_value_sig2E54));
}
;
function ct(var_core_value_sig3625, var_core_value_sig0B4E, var_core_value_sig0E9F) {
  if (var_core_value_sig0E9F === 'id' || var_core_value_sig0E9F === 'auto' && var_core_value_sig3625.fields[var_core_value_sig0B4E]) return var_core_value_sig0B4E;
  let var_core_value_sigE5BA = Object.values(var_core_value_sig3625.fields).filter(var_core_value_sig7658 => var_core_value_sig7658.name === var_core_value_sig0B4E);
  if (var_core_value_sigE5BA.length === 1) return var_core_value_sigE5BA[0].id;
  throw var_core_value_sigE5BA.length > 1 ? Error('Duplicate\x20Base\x20field\x20name:\x20' + var_core_value_sig0B4E) : Error("Base field not found: " + var_core_value_sig0B4E);
}
;
function lt(var_core_value_sig4A83, var_core_value_sig58AA, var_core_value_sig84C4) {
  let var_core_value_sigB6F7 = "Invalid attachment at index " + var_core_value_sig84C4 + " for field \"" + var_core_value_sig4A83.name + '\x22';
  if (!ft(var_core_value_sig58AA)) throw TypeError(var_core_value_sigB6F7 + ": expected an object.");
  if ("url" in var_core_value_sig58AA) throw TypeError(var_core_value_sigB6F7 + ':\x20\x22url\x22\x20is\x20not\x20supported;\x20use\x20\x22source\x22.');
  if ("type" in var_core_value_sig58AA) throw TypeError(var_core_value_sigB6F7 + ':\x20\x22type\x22\x20is\x20not\x20supported;\x20use\x20\x22mimeType\x22.');
  let var_core_value_sigB495 = H(var_core_value_sig58AA.id, var_core_value_sigB6F7, 'id'),
    var_core_value_sig70D0 = H(var_core_value_sig58AA.name, var_core_value_sigB6F7, "name"),
    var_core_value_sig2A8A = H(var_core_value_sig58AA.source, var_core_value_sigB6F7, "source");
  return {
    'id': var_core_value_sigB495,
    'name': var_core_value_sig70D0,
    'source': var_core_value_sig2A8A,
    'sourceType': ut(var_core_value_sig58AA.sourceType, var_core_value_sig2A8A, var_core_value_sigB6F7),
    ...dt(var_core_value_sig58AA, "mimeType", var_core_value_sigB6F7),
    ...U(var_core_value_sig58AA, "size", var_core_value_sigB6F7),
    ...U(var_core_value_sig58AA, "width", var_core_value_sigB6F7),
    ...U(var_core_value_sig58AA, "height", var_core_value_sigB6F7),
    ...dt(var_core_value_sig58AA, "thumbnail", var_core_value_sigB6F7)
  };
}
;
function ut(var_core_value_sig3782, var_core_value_sigD22E, var_core_value_sig3455) {
  if (var_core_value_sig3782 == null) return var_core_value_sigD22E.startsWith("data:") ? var_core_value_sigCCDC.BASE64 : var_core_value_sigCCDC.URL;
  if (var_core_value_sig3782 === var_core_value_sigCCDC.URL || var_core_value_sig3782 === var_core_value_sigCCDC.UUID || var_core_value_sig3782 === var_core_value_sigCCDC.BASE64) return var_core_value_sig3782;
  throw TypeError(var_core_value_sig3455 + ": \"sourceType\" must be URL, UUID, or BASE64.");
}
;
function H(var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395) {
  if (typeof var_core_value_sig5CEF != "string" || !var_core_value_sig5CEF.trim()) throw TypeError(var_core_value_sig43D5 + ": \"" + var_core_value_sig1395 + "\" must be a non-empty string.");
  return var_core_value_sig5CEF;
}
;
function dt(var_core_value_sig9FA0, var_core_value_sig055E, var_core_value_sig7C77) {
  let var_core_value_sig9578 = var_core_value_sig9FA0[var_core_value_sig055E];
  if (var_core_value_sig9578 == null) return {};
  if (typeof var_core_value_sig9578 != "string" || !var_core_value_sig9578.trim()) throw TypeError(var_core_value_sig7C77 + ": \"" + var_core_value_sig055E + "\" must be a non-empty string when provided.");
  return {
    [var_core_value_sig055E]: var_core_value_sig9578
  };
}
;
function U(var_core_value_sigA2D3, var_core_value_sigC218, var_core_value_sigADEC) {
  let var_core_value_sig3D8E = var_core_value_sigA2D3[var_core_value_sigC218];
  if (var_core_value_sig3D8E == null) return {};
  if (typeof var_core_value_sig3D8E != "number" || !Number.isFinite(var_core_value_sig3D8E) || var_core_value_sig3D8E < 0) throw TypeError(var_core_value_sigADEC + ": \"" + var_core_value_sigC218 + "\" must be a non-negative finite number when provided.");
  return {
    [var_core_value_sigC218]: var_core_value_sig3D8E
  };
}
;
function ft(var_core_value_sig37E5) {
  return typeof var_core_value_sig37E5 == "object" && !!var_core_value_sig37E5 && !Array.isArray(var_core_value_sig37E5);
}
var W;
let G = W = class {
  constructor(var_core_value_sigDCF5, var_core_value_sigC786, var_core_value_sigC0D9, var_core_value_sigF051, var_core_value_sig5825) {
    this._base = var_core_value_sigDCF5, this._table = var_core_value_sigC786, this._range = var_core_value_sigC0D9, this._inject = var_core_value_sigF051, this._commandService = var_core_value_sig5825, this._assertInBounds();
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
    let var_core_value_sig4EB7 = this._getTable(),
      var_core_value_sig73AF = this._getFieldIds(var_core_value_sig4EB7),
      var_core_value_sig548A = [];
    for (let var_core_value_sig74A8 = this._range['startRow']; var_core_value_sig74A8 <= this._range['endRow']; var_core_value_sig74A8++) {
      var var_core_value_sigE026;
      let var_core_value_sig9572 = (var_core_value_sigE026 = var_core_value_sig4EB7.rowId) == null ? undefined : var_core_value_sigE026[var_core_value_sig74A8],
        var_core_value_sigD873 = [];
      for (let var_core_value_sig2AD8 = this._range["startColumn"]; var_core_value_sig2AD8 <= this._range["endColumn"]; var_core_value_sig2AD8++) {
        let var_core_value_sig7524 = var_core_value_sig73AF[var_core_value_sig2AD8];
        var_core_value_sigD873.push(var_core_value_sig9572 && var_core_value_sig7524 ? var_core_value_sig6256(var_core_value_sig4EB7, var_core_value_sig9572, var_core_value_sig7524) : null);
      }
      var_core_value_sig548A.push(var_core_value_sigD873);
    }
    return var_core_value_sig548A;
  }
  getValue() {
    var var_core_value_sig339E;
    return ((var_core_value_sig339E = this.getValues()[0]) == null ? undefined : var_core_value_sig339E[0]) ?? null;
  }
  setValue(var_core_value_sig7550) {
    return this.setValues([[var_core_value_sig7550]]);
  }
  setValues(var_core_value_sig2983) {
    let var_core_value_sigE1B0 = this.getNumRows(),
      var_core_value_sigD4FF = this.getNumColumns();
    if (var_core_value_sig2983.length > var_core_value_sigE1B0 || var_core_value_sig2983.some(var_core_value_sig21B2 => var_core_value_sig21B2.length > var_core_value_sigD4FF)) {
      var var_core_value_sig1E5B;
      throw Error("[FBaseRange]: values size " + var_core_value_sig2983.length + 'x' + (((var_core_value_sig1E5B = var_core_value_sig2983[0]) == null ? undefined : var_core_value_sig1E5B.length) ?? 0) + " exceeds range size " + var_core_value_sigE1B0 + 'x' + var_core_value_sigD4FF + '.');
    }
    let var_core_value_sigB680 = this._getTable(),
      var_core_value_sig1F64 = this._getFieldIds(var_core_value_sigB680),
      var_core_value_sigDD1C = var_core_value_sig2983.flatMap((var_core_value_sigDE08, var_core_value_sigACCB) => var_core_value_sigDE08.map((var_core_value_sigA12B, var_core_value_sigF230) => {
        var var_core_value_sig09B8;
        let var_core_value_sig6F91 = this._range['startRow'] + var_core_value_sigACCB,
          var_core_value_sigF9C7 = var_core_value_sig1F64[this._range["startColumn"] + var_core_value_sigF230],
          var_core_value_sig8895 = (var_core_value_sig09B8 = var_core_value_sigB680.rowId) == null ? undefined : var_core_value_sig09B8[var_core_value_sig6F91];
        if (!var_core_value_sigF9C7 || !var_core_value_sig8895) throw Error("[FBaseRange]: cannot resolve the public Base range address.");
        return {
          'recordId': var_core_value_sig8895,
          'fieldId': var_core_value_sigF9C7,
          'value': var_core_value_sigA12B
        };
      }));
    return this._commandService['syncExecuteCommand'](var_core_value_sigD2BA.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'patches': var_core_value_sigDD1C,
      'source': var_core_value_sig1CDD.Facade
    });
  }
  clear() {
    return this.setValues(Array.from({
      'length': this.getNumRows()
    }, () => Array.from({
      'length': this.getNumColumns()
    }, () => null)));
  }
  offset(var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0 = this.getNumRows(), var_core_value_sig85B1 = this.getNumColumns()) {
    return this._inject["createInstance"](W, this._base, this._table, {
      'startRow': this._range["startRow"] + var_core_value_sig2C39,
      'startColumn': this._range["startColumn"] + var_core_value_sigB7D1,
      'endRow': this._range["startRow"] + var_core_value_sig2C39 + var_core_value_sig64F0 - 1,
      'endColumn': this._range["startColumn"] + var_core_value_sigB7D1 + var_core_value_sig85B1 - 1
    }, this._inject);
  }
  _getTable() {
    let var_core_value_sig3141 = this._table["getTable"]();
    if (!var_core_value_sig3141) throw Error("[FBaseRange]: table does not exist.");
    return var_core_value_sig78A3(var_core_value_sig3141);
  }
  _assertInBounds() {
    var var_core_value_sig2162;
    let var_core_value_sig2EAD = this._getTable(),
      var_core_value_sig6774 = ((var_core_value_sig2162 = var_core_value_sig2EAD.recordOrder) == null ? undefined : var_core_value_sig2162.length) ?? 0,
      var_core_value_sig340D = this._getFieldIds(var_core_value_sig2EAD).length;
    if (this._range['startRow'] < 0 || this._range["startColumn"] < 0 || this._range["endRow"] < this._range['startRow'] || this._range["endColumn"] < this._range["startColumn"] || this._range["endRow"] >= Math.max(var_core_value_sig6774, 1) || this._range["endColumn"] >= Math.max(var_core_value_sig340D, 1)) throw Error("[FBaseRange]: range is out of bounds. Max rows: " + var_core_value_sig6774 + ", max columns: " + var_core_value_sig340D + ", range: " + JSON.stringify(this._range) + '.');
  }
  _getFieldIds(var_core_value_sig82D4) {
    return var_core_value_sig82D4.fieldOrder["filter"](var_core_value_sig7F33 => B(var_core_value_sig82D4.fields[var_core_value_sig7F33]));
  }
};
G = W = R([L(4, var_core_value_sigF449)], G);
function K(var_core_value_sigF079) {
  '@babel/helpers - typeof';

  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigBDE4) {
    return typeof var_core_value_sigBDE4;
  } : function (var_core_value_sig7DF1) {
    return var_core_value_sig7DF1 && typeof Symbol == "function" && var_core_value_sig7DF1.constructor === Symbol && var_core_value_sig7DF1 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig7DF1;
  }, K(var_core_value_sigF079);
}
;
function pt(var_core_value_sigFCA0, var_core_value_sigC84D) {
  if (K(var_core_value_sigFCA0) != "object" || !var_core_value_sigFCA0) return var_core_value_sigFCA0;
  var var_core_value_sigF2BC = var_core_value_sigFCA0[Symbol.toPrimitive];
  if (var_core_value_sigF2BC !== undefined) {
    var var_core_value_sigD37B = var_core_value_sigF2BC.call(var_core_value_sigFCA0, var_core_value_sigC84D || "default");
    if (K(var_core_value_sigD37B) != "object") return var_core_value_sigD37B;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigC84D === "string" ? String : Number)(var_core_value_sigFCA0);
}
;
function mt(var_core_value_sigFA28) {
  var var_core_value_sig93BE = pt(var_core_value_sigFA28, 'string');
  return K(var_core_value_sig93BE) == 'symbol' ? var_core_value_sig93BE : var_core_value_sig93BE + '';
}
;
function ht(var_core_value_sigABEC, var_core_value_sig2712, var_core_value_sig0B9E) {
  return (var_core_value_sig2712 = mt(var_core_value_sig2712)) in var_core_value_sigABEC ? Object.defineProperty(var_core_value_sigABEC, var_core_value_sig2712, {
    'value': var_core_value_sig0B9E,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_core_value_sigABEC[var_core_value_sig2712] = var_core_value_sig0B9E, var_core_value_sigABEC;
}
var q;
let J = q = class extends var_core_value_sig0B5C {
  constructor(var_core_value_sigDC86, var_core_value_sig0B0C, var_core_value_sigA39E, var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167) {
    super(var_core_value_sigBBEE), this._base = var_core_value_sigDC86, this._table = var_core_value_sig0B0C, this._recordId = var_core_value_sigA39E, this._injector = var_core_value_sigBBEE, this._commandService = var_core_value_sig011D, this._permissionService = var_core_value_sig6167, ht(this, "_baseUnitId", undefined), ht(this, "_baseTableId", undefined), this._baseUnitId = var_core_value_sigDC86.getId(), this._baseTableId = var_core_value_sig0B0C.getId();
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
    let var_core_value_sig65A1 = this._table["getId"]();
    return new I(this._base["getId"](), var_core_value_sig0567(var_core_value_sig65A1, this._recordId), [var_core_value_sigA7F3(var_core_value_sig65A1)], this._commandService, this._permissionService);
  }
  getRecord() {
    return {
      ...this._getRecord(),
      'values': this.getValues()
    };
  }
  getValue(var_core_value_sig7F19) {
    return B(this._table['getTable']().fields[var_core_value_sig7F19]) ? this._getRecord().values[var_core_value_sig7F19] ?? null : null;
  }
  getValues() {
    let var_core_value_sig7827 = this._table["getTable"]();
    return Object.fromEntries(Object.entries(this._getRecord().values).filter(([var_core_value_sig0C53]) => B(var_core_value_sig7827.fields[var_core_value_sig0C53])));
  }
  setValue(var_core_value_sig652C, var_core_value_sig7E32) {
    let var_core_value_sig4C07 = this._table["getTable"]().fields[var_core_value_sig652C];
    return this._commandService['syncExecuteCommand'](var_core_value_sig78AC.id, {
      'unitId': this._base['getId'](),
      'tableId': this._table["getId"](),
      'recordId': this._recordId,
      'fieldId': var_core_value_sig652C,
      'value': st(var_core_value_sig4C07, var_core_value_sig7E32),
      'source': var_core_value_sig1CDD.Facade
    });
  }
  setAttachments(var_core_value_sig79AB, var_core_value_sig8E74) {
    return this.setValue(var_core_value_sig79AB, var_core_value_sig8E74.map(var_core_value_sigEA04 => ({
      ...var_core_value_sigEA04
    })));
  }
  getAttachments(var_core_value_sig104C) {
    this._getAttachmentField(var_core_value_sig104C);
    let var_core_value_sig841D = this.getValue(var_core_value_sig104C);
    return Array.isArray(var_core_value_sig841D) ? var_core_value_sig841D.map((var_core_value_sig7A62, var_core_value_sig8109) => _t(var_core_value_sig7A62, var_core_value_sig104C, var_core_value_sig8109)) : [];
  }
  deleteAttachments(var_core_value_sig90CB, var_core_value_sigBDF5) {
    this._getAttachmentField(var_core_value_sig90CB);
    let var_core_value_sigACC6 = new Set(var_core_value_sigBDF5.map(var_core_value_sig7565 => var_core_value_sig7565.id));
    if (!var_core_value_sigACC6.size) return true;
    let var_core_value_sig1614 = this.getAttachments(var_core_value_sig90CB),
      var_core_value_sig85C3 = var_core_value_sig1614.filter(var_core_value_sigD4FB => !var_core_value_sigACC6.has(var_core_value_sigD4FB.id));
    return var_core_value_sig85C3.length === var_core_value_sig1614.length || this.setAttachments(var_core_value_sig90CB, var_core_value_sig85C3);
  }
  setValues(var_core_value_sigB996, var_core_value_sig4BBA = 'id') {
    let var_core_value_sig6201 = this._table["getTable"](),
      var_core_value_sig5151 = [{
        'recordId': this._recordId,
        'values': V(var_core_value_sig6201, var_core_value_sigB996, var_core_value_sig4BBA)
      }];
    return this._commandService["syncExecuteCommand"](var_core_value_sigCD3A.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'patches': var_core_value_sig5151,
      'source': var_core_value_sig1CDD.Facade
    });
  }
  delete() {
    return this._commandService["syncExecuteCommand"](var_core_value_sig6C4A.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'recordId': this._recordId,
      'source': var_core_value_sig1CDD.Facade
    });
  }
  duplicate(var_core_value_sigB542) {
    let var_core_value_sigBB6C = {
      ...this._getRecord(),
      ...var_core_value_sigB542,
      'id': var_core_value_sigD23B(6)
    };
    var_core_value_sigBB6C.values = {
      ...var_core_value_sigBB6C.values,
      ...(var_core_value_sigB542 == null ? undefined : var_core_value_sigB542.values)
    }, Reflect.deleteProperty(var_core_value_sigBB6C.values, var_core_value_sigBE51);
    let var_core_value_sigE2BF = Date.now();
    if (var_core_value_sigBB6C.orderKey ||= '' + var_core_value_sigE2BF, var_core_value_sigBB6C.createdAt ||= var_core_value_sigE2BF, var_core_value_sigBB6C.updatedAt ||= var_core_value_sigE2BF, !this._commandService["syncExecuteCommand"](var_core_value_sig0455.id, {
      'unitId': this._base['getId'](),
      'tableId': this._table['getId'](),
      'sourceRecordId': this._recordId,
      'record': var_core_value_sigBB6C,
      'source': var_core_value_sig1CDD.Facade
    })) throw Error("[FRecord]: failed to duplicate record \"" + this._recordId + '\x22.');
    return this._injector['createInstance'](q, this._base, this._table, var_core_value_sigBB6C.id, this._injector);
  }
  setOrderKey(var_core_value_sigB8C7) {
    return this._commandService["syncExecuteCommand"](var_core_value_sigD57D.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'recordId': this._recordId,
      'orderKey': var_core_value_sigB8C7
    });
  }
  getLinkedRecordIds(var_core_value_sigA56E) {
    let var_core_value_sig1998 = this._getRecordLinkField(var_core_value_sigA56E);
    return var_core_value_sigFA38(this.getValue(var_core_value_sig1998.id));
  }
  setLinkedRecordIds(var_core_value_sigFF19, var_core_value_sig43B8) {
    let var_core_value_sigD98F = this._getRecordLinkField(var_core_value_sigFF19),
      var_core_value_sig66C0 = var_core_value_sig65B4(var_core_value_sig43B8),
      var_core_value_sig9D15 = var_core_value_sig81F7(this._base["getBase"]().getSnapshot(), var_core_value_sigD98F, var_core_value_sig66C0);
    if (!var_core_value_sig9D15.valid) throw Error(var_core_value_sig9D15.reason ?? "[FRecord]: invalid RecordLink value.");
    return this._commandService['syncExecuteCommand'](var_core_value_sig78AC.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'recordId': this._recordId,
      'fieldId': var_core_value_sigFF19,
      'value': var_core_value_sig66C0,
      'source': var_core_value_sig1CDD.Facade
    });
  }
  addLinkedRecord(var_core_value_sigB785, var_core_value_sig130F) {
    let var_core_value_sigC0E3 = var_core_value_sig901E(this._getRecordLinkField(var_core_value_sigB785));
    if (!var_core_value_sigC0E3) throw Error('[FRecord]:\x20RecordLink\x20field\x20\x22' + var_core_value_sigB785 + "\" has invalid config.");
    let var_core_value_sig52F7 = this.getLinkedRecordIds(var_core_value_sigB785);
    return var_core_value_sigC0E3.multiple && var_core_value_sig52F7.includes(var_core_value_sig130F) ? true : this.setLinkedRecordIds(var_core_value_sigB785, var_core_value_sigC0E3.multiple ? [...var_core_value_sig52F7, var_core_value_sig130F] : [var_core_value_sig130F]);
  }
  removeLinkedRecord(var_core_value_sig866F, var_core_value_sigDE3D) {
    let var_core_value_sigF175 = this.getLinkedRecordIds(var_core_value_sig866F);
    return !var_core_value_sigF175.includes(var_core_value_sigDE3D) || this.setLinkedRecordIds(var_core_value_sig866F, var_core_value_sigF175.filter(var_core_value_sig3E71 => var_core_value_sig3E71 !== var_core_value_sigDE3D));
  }
  getParent(var_core_value_sig6A18) {
    let var_core_value_sig4E3D = this._getHierarchyIndex(var_core_value_sig6A18).parentByRecordId["get"](this._recordId) ?? null;
    return var_core_value_sig4E3D ? this._table["getRecordById"](var_core_value_sig4E3D) : null;
  }
  getChildren(var_core_value_sig49B0) {
    return (this._getHierarchyIndex(var_core_value_sig49B0).childrenByParentId["get"](this._recordId) ?? []).flatMap(var_core_value_sig01B3 => {
      let var_core_value_sig7442 = this._table["getRecordById"](var_core_value_sig01B3);
      return var_core_value_sig7442 ? [var_core_value_sig7442] : [];
    });
  }
  getAncestors(var_core_value_sig2547) {
    let var_core_value_sigBCA9 = this._getHierarchyIndex(var_core_value_sig2547),
      var_core_value_sig4CDF = [],
      var_core_value_sig3F79 = var_core_value_sigBCA9.parentByRecordId['get'](this._recordId) ?? null;
    for (; var_core_value_sig3F79;) {
      let var_core_value_sigC80B = this._table['getRecordById'](var_core_value_sig3F79);
      var_core_value_sigC80B && var_core_value_sig4CDF.push(var_core_value_sigC80B), var_core_value_sig3F79 = var_core_value_sigBCA9.parentByRecordId['get'](var_core_value_sig3F79) ?? null;
    }
    return var_core_value_sig4CDF;
  }
  getDescendants(var_core_value_sig880E) {
    let var_core_value_sigC9ED = this._getHierarchyIndex(var_core_value_sig880E),
      var_core_value_sigB57B = var_core_value_sigC9ED.orderedRecordIds["indexOf"](this._recordId),
      var_core_value_sig780B = var_core_value_sigC9ED.subtreeHeightByRecordId["has"](this._recordId) ? this._collectDescendantIds(var_core_value_sigC9ED.childrenByParentId, this._recordId) : [];
    return var_core_value_sigB57B < 0 ? [] : var_core_value_sig780B.flatMap(var_core_value_sigDF87 => {
      let var_core_value_sig9EE0 = this._table["getRecordById"](var_core_value_sigDF87);
      return var_core_value_sig9EE0 ? [var_core_value_sig9EE0] : [];
    });
  }
  setParent(var_core_value_sig7D1B, var_core_value_sig7BE0, var_core_value_sig7D40) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig9DE4.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'fieldId': var_core_value_sig7D1B,
      'recordId': this._recordId,
      'parentRecordId': var_core_value_sig7BE0,
      'orderKey': var_core_value_sig7D40,
      'source': var_core_value_sig1CDD.Facade
    });
  }
  addChild(var_core_value_sig6C7E, var_core_value_sig68BE, var_core_value_sig04C6 = 'id', var_core_value_sigCA05) {
    let var_core_value_sig2F2B = this._table["getTable"](),
      var_core_value_sig70AF = Date.now(),
      var_core_value_sigD04E = {
        ...var_core_value_sigCA05,
        'id': var_core_value_sigD23B(6),
        'values': V(var_core_value_sig2F2B, var_core_value_sig68BE, var_core_value_sig04C6),
        'orderKey': (var_core_value_sigCA05 == null ? undefined : var_core_value_sigCA05.orderKey) || '' + var_core_value_sig70AF,
        'createdAt': (var_core_value_sigCA05 == null ? undefined : var_core_value_sigCA05.createdAt) || var_core_value_sig70AF,
        'updatedAt': (var_core_value_sigCA05 == null ? undefined : var_core_value_sigCA05.updatedAt) || var_core_value_sig70AF
      };
    if (!this._commandService['syncExecuteCommand'](var_core_value_sigC753.id, {
      'unitId': this._base['getId'](),
      'tableId': this._table["getId"](),
      'fieldId': var_core_value_sig6C7E,
      'parentRecordId': this._recordId,
      'record': var_core_value_sigD04E,
      'source': var_core_value_sig1CDD.Facade
    })) throw Error("[FRecord]: failed to create child under \"" + this._recordId + '\x22.');
    return this._injector["createInstance"](q, this._base, this._table, var_core_value_sigD04E.id, this._injector);
  }
  _getHierarchyIndex(var_core_value_sigB99B) {
    return var_core_value_sig16C7(this._table["getTable"](), var_core_value_sigB99B);
  }
  _collectDescendantIds(var_core_value_sig5A75, var_core_value_sig7BAF) {
    let var_core_value_sig8F69 = [],
      var_core_value_sig6884 = var_core_value_sigF0511 => {
        for (let var_core_value_sig284F of var_core_value_sig5A75.get(var_core_value_sigF0511) ?? []) var_core_value_sig8F69.push(var_core_value_sig284F), var_core_value_sig6884(var_core_value_sig284F);
      };
    return var_core_value_sig6884(var_core_value_sig7BAF), var_core_value_sig8F69;
  }
  _getRecord() {
    let var_core_value_sig066E = this._table["getTable"]().records[this._recordId];
    if (!var_core_value_sig066E) throw Error("[FRecord]: record \"" + this._recordId + "\" does not exist.");
    return var_core_value_sig066E;
  }
  _getRecordLinkField(var_core_value_sig9B0D) {
    let var_core_value_sig3D2C = this._table["getTable"]().fields[var_core_value_sig9B0D];
    if (!var_core_value_sig3D2C || var_core_value_sig3D2C.type !== var_core_value_sigA984.RecordLink) throw Error('[FRecord]:\x20field\x20\x22' + var_core_value_sig9B0D + "\" is not a RecordLink field.");
    return var_core_value_sig3D2C;
  }
  _getAttachmentField(var_core_value_sigC56D) {
    let var_core_value_sig3A17 = this._table["getTable"]().fields[var_core_value_sigC56D];
    if (!var_core_value_sig3A17 || var_core_value_sig3A17.type !== var_core_value_sigA984.Attachment) throw Error("[FRecord]: field \"" + var_core_value_sigC56D + "\" is not an Attachment field.");
    return var_core_value_sig3A17;
  }
};
J = q = R([L(4, var_core_value_sigF449), L(5, var_core_value_sig38C5)], J);
function gt(var_core_value_sigC545) {
  return !!(var_core_value_sigC545 && typeof var_core_value_sigC545 == 'object' && 'id' in var_core_value_sigC545 && typeof var_core_value_sigC545.id == "string" && "name" in var_core_value_sigC545 && typeof var_core_value_sigC545.name == "string");
}
;
function _t(var_core_value_sig12A7, var_core_value_sig6F4E, var_core_value_sigA021) {
  if (!gt(var_core_value_sig12A7)) throw Error("[FRecord]: attachment at index " + var_core_value_sigA021 + " in field \"" + var_core_value_sig6F4E + "\" is invalid.");
  return {
    ...var_core_value_sig12A7
  };
}
let Y = class {
  constructor(var_core_value_sig938F, var_core_value_sigD948, var_core_value_sigBE5E, var_core_value_sig0281, var_core_value_sigED71, var_core_value_sig281C, var_core_value_sig3C92) {
    this._base = var_core_value_sig938F, this._table = var_core_value_sigD948, this._viewId = var_core_value_sigBE5E, this._injector = var_core_value_sig0281, this._commandService = var_core_value_sigED71, this._permissionService = var_core_value_sig281C, this._projectionService = var_core_value_sig3C92;
  }
  getId() {
    return this._viewId;
  }
  getPermission() {
    let var_core_value_sigB16B = this._table["getId"]();
    return new I(this._base["getId"](), var_core_value_sigEACD(var_core_value_sigB16B, this._viewId), [var_core_value_sigA7F3(var_core_value_sigB16B)], this._commandService, this._permissionService);
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
  setName(var_core_value_sig585D) {
    return this._commandService['syncExecuteCommand'](var_core_value_sigA4DF.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'name': var_core_value_sig585D
    });
  }
  getConfig() {
    let var_core_value_sigE722 = this.getType(),
      var_core_value_sig062A = this._getView().config;
    switch (var_core_value_sigE722) {
      case var_core_value_sig2D8D.Grid:
        return var_core_value_sig062A;
      case var_core_value_sig2D8D.Kanban:
        return var_core_value_sig062A;
      case var_core_value_sig2D8D.Calendar:
        return var_core_value_sig062A;
      case var_core_value_sig2D8D.Gantt:
        return var_core_value_sig062A;
      case var_core_value_sig2D8D.Gallery:
        return var_core_value_sig062A;
      default:
        return var_core_value_sig062A;
    }
  }
  updateConfig(var_core_value_sig050A) {
    return this._commandService['syncExecuteCommand'](var_core_value_sig4784.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'patch': var_core_value_sig050A
    });
  }
  getConditionalColorRules() {
    var var_core_value_sig8B32;
    return var_core_value_sigDC07.deepClone(((var_core_value_sig8B32 = this._getView().config["conditionalColoring"]) == null ? undefined : var_core_value_sig8B32.rules) ?? []);
  }
  setConditionalColorRules(var_core_value_sig870F) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig2CC7.id, {
      'unitId': this._base['getId'](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'type': var_core_value_sig8EAE.Set,
      'rules': var_core_value_sig870F
    });
  }
  addConditionalColorRule(var_core_value_sigB683) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig2CC7.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'type': var_core_value_sig8EAE.Add,
      'rule': var_core_value_sigB683
    });
  }
  deleteConditionalColorRule(var_core_value_sig26EC) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig2CC7.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'type': var_core_value_sig8EAE.Delete,
      'ruleId': var_core_value_sig26EC
    });
  }
  clearConditionalColorRules() {
    return this._commandService['syncExecuteCommand'](var_core_value_sig2CC7.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'type': var_core_value_sig8EAE.Clear
    });
  }
  getFilter() {
    return this._getView().filter ?? null;
  }
  setFilter(var_core_value_sigEEDB) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig413D.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'filter': var_core_value_sigEEDB
    });
  }
  getSort() {
    return this._getView().sort ?? [];
  }
  setSort(var_core_value_sig36E7) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig8EF0.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'sort': var_core_value_sig36E7
    });
  }
  getGroup() {
    return this._getView().group ?? [];
  }
  setGroup(var_core_value_sig6A78) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig5BCE.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'group': var_core_value_sig6A78
    });
  }
  getFieldSettings(var_core_value_sigF7EF) {
    var var_core_value_sig27F9;
    return B(this._table["getTable"]().fields[var_core_value_sigF7EF]) ? ((var_core_value_sig27F9 = this._getView().fieldSettings) == null ? undefined : var_core_value_sig27F9[var_core_value_sigF7EF]) ?? {} : {};
  }
  getVisibleFields() {
    let var_core_value_sig393E = this._table["getTable"](),
      var_core_value_sigB609 = this._getView();
    return (var_core_value_sigB609.fieldOrder ?? var_core_value_sig393E.fieldOrder).filter(var_core_value_sig0B45 => {
      var var_core_value_sig36F8;
      let var_core_value_sig03E1 = var_core_value_sig393E.fields[var_core_value_sig0B45];
      return B(var_core_value_sig03E1) && !((var_core_value_sig36F8 = var_core_value_sigB609.fieldSettings) != null && (var_core_value_sig36F8 = var_core_value_sig36F8[var_core_value_sig0B45]) != null && var_core_value_sig36F8.hidden);
    }).map(var_core_value_sigBB57 => this._injector["createInstance"](z, this._base, this._table, var_core_value_sigBB57));
  }
  setFieldVisible(var_core_value_sig390D, var_core_value_sigC928) {
    return B(this._table["getTable"]().fields[var_core_value_sig390D]) ? this._commandService["syncExecuteCommand"](var_core_value_sig6E1C.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table['getId'](),
      'viewId': this._viewId,
      'fieldId': var_core_value_sig390D,
      'visible': var_core_value_sigC928
    }) : false;
  }
  setFieldWidth(var_core_value_sig39B7, var_core_value_sig18E0) {
    return B(this._table["getTable"]().fields[var_core_value_sig39B7]) ? this._commandService["syncExecuteCommand"](var_core_value_sigFABC.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'fieldId': var_core_value_sig39B7,
      'width': var_core_value_sig18E0
    }) : false;
  }
  moveField(var_core_value_sigE161, var_core_value_sigBDEE) {
    let var_core_value_sig1F40 = this._table["getTable"](),
      var_core_value_sig3FC7 = var_core_value_sigBDEE.beforeFieldId ?? var_core_value_sigBDEE.afterFieldId;
    return !B(var_core_value_sig1F40.fields[var_core_value_sigE161]) || !var_core_value_sig3FC7 || !B(var_core_value_sig1F40.fields[var_core_value_sig3FC7]) ? false : this._commandService["syncExecuteCommand"](var_core_value_sigC7E7.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'fieldId': var_core_value_sigE161,
      'target': var_core_value_sigBDEE
    });
  }
  move(var_core_value_sig1E1B) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig77FA.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId,
      'target': var_core_value_sig1E1B
    });
  }
  delete() {
    return this._commandService['syncExecuteCommand'](var_core_value_sigEAF8.id, {
      'unitId': this._base["getId"](),
      'tableId': this._table["getId"](),
      'viewId': this._viewId
    });
  }
  getProjection() {
    return this._projectionService["getProjection"](this._base["getBase"]().getSnapshot(), this._table["getId"](), this._viewId);
  }
  _getView() {
    let var_core_value_sig3B10 = this._table["getTable"]().views[this._viewId];
    if (!var_core_value_sig3B10) throw Error("[FView]: view \"" + this._viewId + "\" does not exist.");
    return var_core_value_sig3B10;
  }
};
Y = R([L(4, var_core_value_sigF449), L(5, var_core_value_sig38C5), L(6, var_core_value_sig737C)], Y);
let X = class {
  constructor(var_core_value_sig89E6, var_core_value_sig4743, var_core_value_sigEB6A, var_core_value_sig3D46, var_core_value_sigCC93, var_core_value_sig5964) {
    this._base = var_core_value_sig89E6, this._tableId = var_core_value_sig4743, this._injector = var_core_value_sigEB6A, this._commandService = var_core_value_sig3D46, this._permissionService = var_core_value_sigCC93, this._projectionService = var_core_value_sig5964;
  }
  getBase() {
    return this._base["getBase"]();
  }
  getTable() {
    return this._getTable();
  }
  getId() {
    return this._tableId;
  }
  getPermission() {
    return new I(this.getBase().getUnitId(), var_core_value_sigA7F3(this._tableId), [], this._commandService, this._permissionService);
  }
  getHierarchyFieldId() {
    return var_core_value_sig102B(this._getTable());
  }
  setHierarchyField(var_core_value_sig808B) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig519D.id, {
      'unitId': this._base['getId'](),
      'tableId': this._tableId,
      'fieldId': var_core_value_sig808B
    });
  }
  getName() {
    return this._getTable().name;
  }
  getFormulaName() {
    let var_core_value_sig2A26 = this._base["getBase"]().getSnapshot();
    return var_core_value_sigB505(this._getTable(), var_core_value_sig2A26);
  }
  setName(var_core_value_sig1179) {
    let var_core_value_sigEA92 = var_core_value_sig19A1(this._base["getBase"]().getSnapshot(), var_core_value_sig1179, this._tableId);
    if (!var_core_value_sigEA92.valid) throw Error("[FBaseTable]: invalid table name \"" + var_core_value_sig1179 + "\". " + var_core_value_sigB8ED + '\x20' + var_core_value_sigEA92.reason);
    return this._commandService['syncExecuteCommand'](var_core_value_sigA4A7.id, {
      'unitId': this._base["getId"](),
      'tableId': this._tableId,
      'name': var_core_value_sig1179
    });
  }
  search(var_core_value_sig8FD9, var_core_value_sig1AE5) {
    let var_core_value_sig7100 = this._base["getBase"]().getSnapshot(),
      var_core_value_sigA19A = this._getTable();
    if (var_core_value_sig1AE5) {
      let var_core_value_sig7C4A = this._projectionService["getProjection"](var_core_value_sig7100, this._tableId, var_core_value_sig1AE5),
        var_core_value_sigE799 = var_core_value_sigA19A.views[var_core_value_sig1AE5],
        var_core_value_sigB601 = var_core_value_sig8FD9.fieldIds ?? wt(var_core_value_sigA19A, var_core_value_sigE799, var_core_value_sig7C4A),
        var_core_value_sig8B71 = "rows" in var_core_value_sig7C4A && Array.isArray(var_core_value_sig7C4A.rows) ? var_core_value_sig7C4A.rows : [];
      return var_core_value_sig5EEE({
        ...var_core_value_sig8FD9,
        'table': var_core_value_sigA19A,
        'fieldIds': var_core_value_sigB601,
        'rows': var_core_value_sig8B71
      });
    }
    let var_core_value_sigD3F5 = (var_core_value_sigA19A.recordOrder ? var_core_value_sigA19A.recordOrder["map"](var_core_value_sigAEFB => var_core_value_sigA19A.records[var_core_value_sigAEFB]) : Object.values(var_core_value_sigA19A.records).sort((var_core_value_sig826B, var_core_value_sigCF89) => var_core_value_sig826B.orderKey["localeCompare"](var_core_value_sigCF89.orderKey))).filter(var_core_value_sig00CB => var_core_value_sig00CB).map(var_core_value_sig77EE => ({
        'recordId': var_core_value_sig77EE.id,
        'values': var_core_value_sig77EE.values
      })),
      var_core_value_sig3082 = var_core_value_sig8FD9.fieldIds ?? var_core_value_sigA19A.fieldOrder["filter"](var_core_value_sig9F76 => B(var_core_value_sigA19A.fields[var_core_value_sig9F76]));
    return var_core_value_sig5EEE({
      ...var_core_value_sig8FD9,
      'table': var_core_value_sigA19A,
      'fieldIds': var_core_value_sig3082,
      'rows': var_core_value_sigD3F5
    });
  }
  getPrimaryFieldId() {
    return this._getTable().primaryFieldId;
  }
  getFields() {
    let var_core_value_sigF5D1 = this._getTable();
    return var_core_value_sigF5D1.fieldOrder["map"](var_core_value_sigB008 => var_core_value_sigF5D1.fields[var_core_value_sigB008]).filter(B).map(var_core_value_sig8721 => this._injector["createInstance"](z, this._base, this, var_core_value_sig8721.id));
  }
  getFieldById(var_core_value_sig8775) {
    let var_core_value_sig481B = this._getTable().fields[var_core_value_sig8775];
    return B(var_core_value_sig481B) ? this._injector["createInstance"](z, this._base, this, var_core_value_sig481B.id) : null;
  }
  getFieldByName(var_core_value_sig13D7) {
    let var_core_value_sig90C0 = this._getTable().fields,
      var_core_value_sigF1B2 = Object.values(var_core_value_sig90C0).find(var_core_value_sig08BA => B(var_core_value_sig08BA) && var_core_value_sig08BA.name === var_core_value_sig13D7);
    return var_core_value_sigF1B2 ? this._injector['createInstance'](z, this._base, this, var_core_value_sigF1B2.id) : null;
  }
  getPrimaryField() {
    let var_core_value_sigC2BB = this._getTable().primaryFieldId;
    return this._injector["createInstance"](z, this._base, this, var_core_value_sigC2BB);
  }
  addField(var_core_value_sigD9DB, var_core_value_sigA363, var_core_value_sigFBA5) {
    var var_core_value_sigAC47, var_core_value_sigA06F;
    if (!Object.values(var_core_value_sigA984).some(var_core_value_sigDBB5 => var_core_value_sigDBB5 === var_core_value_sigA363)) throw Error("Unsupported Base field type \"" + String(var_core_value_sigA363) + '\x22.');
    if (var_core_value_sigA363 === var_core_value_sigA984.Formula && this._prepareFormulaFieldReferences(var_core_value_sigD9DB, var_core_value_sigFBA5), var_core_value_sigA363 === var_core_value_sigA984.RecordLink && (typeof (var_core_value_sigFBA5 == null || (var_core_value_sigAC47 = var_core_value_sigFBA5.field) == null || (var_core_value_sigAC47 = var_core_value_sigAC47.config) == null ? undefined : var_core_value_sigAC47.targetTableId) != "string" || typeof var_core_value_sigFBA5.field["config"].multiple != "boolean")) throw Error("RecordLink fields require config { targetTableId, multiple }.");
    let var_core_value_sig770E = {
      ...(var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.field),
      'id': var_core_value_sigD23B(6),
      'name': var_core_value_sigD9DB,
      'type': var_core_value_sigA363,
      'config': (var_core_value_sigFBA5 == null || (var_core_value_sigA06F = var_core_value_sigFBA5.field) == null ? undefined : var_core_value_sigA06F.config) ?? {}
    };
    if (!this._commandService["syncExecuteCommand"](var_core_value_sigFFD1.id, {
      'unitId': this._base["getId"](),
      'tableId': this._tableId,
      'field': var_core_value_sig770E,
      'index': var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.index
    })) throw Error("Failed to add field \"" + var_core_value_sigD9DB + '\x22');
    return this._injector['createInstance'](z, this._base, this, var_core_value_sig770E.id);
  }
  _prepareFormulaFieldReferences(var_core_value_sig4654, var_core_value_sigB26B) {
    var var_core_value_sig019B;
    if (!var_core_value_sigB26B || !("externalReferences" in var_core_value_sigB26B) || !Array.isArray(var_core_value_sigB26B.externalReferences)) throw Error("Formula fields require options.externalReferences. Use [] only for a Host-local formula.");
    let var_core_value_sigC6BC = this._commandService['syncExecuteCommand'](var_core_value_sigC39E.id, {
      'unitId': this._base["getId"](),
      'tableId': this._tableId,
      'formula': String(((var_core_value_sig019B = var_core_value_sigB26B.field) == null || (var_core_value_sig019B = var_core_value_sig019B.config) == null ? undefined : var_core_value_sig019B.formula) ?? '')
    });
    if (!var_core_value_sigC6BC.valid) throw Error(var_core_value_sigC6BC.reason ?? "Invalid Base formula.");
    if (var_core_value_sigB26B.externalReferences['length'] > 0 && !this._commandService["syncExecuteCommand"](var_core_value_sig417B.id, {
      'unitId': this._base["getId"](),
      'references': var_core_value_sigB26B.externalReferences
    })) throw Error('Failed\x20to\x20bind\x20External\x20References\x20for\x20formula\x20field\x20\x22' + var_core_value_sig4654 + '\x22');
  }
  getRecords() {
    return this._resolveRecordIds().map(var_core_value_sigCFAC => this._injector["createInstance"](J, this._base, this, var_core_value_sigCFAC, this._injector));
  }
  getRecordById(var_core_value_sig8EC2) {
    return this._getTable().records[var_core_value_sig8EC2] ? this._injector["createInstance"](J, this._base, this, var_core_value_sig8EC2, this._injector) : null;
  }
  queryRecords(var_core_value_sigA8C3 = {}) {
    let var_core_value_sig5276 = this._getTable(),
      var_core_value_sig031B = this._resolveRecordIds(var_core_value_sigA8C3),
      var_core_value_sig9DC0 = Math.max(0, var_core_value_sigA8C3.offset ?? 0),
      var_core_value_sig95F0 = var_core_value_sigA8C3.limit == null ? null : Math.max(0, var_core_value_sigA8C3.limit),
      var_core_value_sig9CCB = yt(var_core_value_sig031B.map(var_core_value_sig237B => var_core_value_sig5276.records[var_core_value_sig237B]).filter(var_core_value_sigFEAB => xt(var_core_value_sigFEAB, var_core_value_sig5276, var_core_value_sigA8C3.filter)), var_core_value_sig5276, var_core_value_sigA8C3.sort);
    return {
      'records': vt(var_core_value_sig9CCB, var_core_value_sigA8C3).map(var_core_value_sigE347 => this._injector["createInstance"](J, this._base, this, var_core_value_sigE347.id, this._injector)),
      'total': var_core_value_sig9CCB.length,
      'offset': var_core_value_sig9DC0,
      'limit': var_core_value_sig95F0,
      'hasMore': var_core_value_sig95F0 != null && var_core_value_sig9DC0 + var_core_value_sig95F0 < var_core_value_sig9CCB.length
    };
  }
  addRecord(var_core_value_sigE718, var_core_value_sigAEC8 = 'id', var_core_value_sigB977) {
    let var_core_value_sig2949 = this._getTable(),
      var_core_value_sig308A = Date.now(),
      var_core_value_sig528D = {
        ...var_core_value_sigB977,
        'id': var_core_value_sigD23B(6),
        'values': V(var_core_value_sig2949, var_core_value_sigE718, var_core_value_sigAEC8),
        'orderKey': (var_core_value_sigB977 == null ? undefined : var_core_value_sigB977.orderKey) || '' + var_core_value_sig308A,
        'createdAt': (var_core_value_sigB977 == null ? undefined : var_core_value_sigB977.createdAt) || var_core_value_sig308A,
        'updatedAt': (var_core_value_sigB977 == null ? undefined : var_core_value_sigB977.updatedAt) || var_core_value_sig308A
      };
    if (!this._commandService['syncExecuteCommand'](var_core_value_sig81AE.id, {
      'unitId': this._base['getId'](),
      'tableId': this._tableId,
      'record': var_core_value_sig528D,
      'source': var_core_value_sig1CDD.Facade
    })) throw Error("Failed to add record with id \"" + var_core_value_sig528D.id + '\x22');
    return this._injector['createInstance'](J, this._base, this, var_core_value_sig528D.id, this._injector);
  }
  addRecords(var_core_value_sigA309) {
    if (!var_core_value_sigA309.length) return [];
    let var_core_value_sig9E20 = this._getTable(),
      var_core_value_sig26BB = Date.now(),
      var_core_value_sig19B4 = var_core_value_sigA309.map((var_core_value_sig3C5B, var_core_value_sig200B) => {
        var var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1;
        return {
          ...var_core_value_sig3C5B.record,
          'id': var_core_value_sigD23B(6),
          'values': V(var_core_value_sig9E20, var_core_value_sig3C5B.values, var_core_value_sig3C5B.fieldKey ?? 'id'),
          'orderKey': ((var_core_value_sig3863 = var_core_value_sig3C5B.record) == null ? undefined : var_core_value_sig3863.orderKey) || '' + (var_core_value_sig26BB + var_core_value_sig200B),
          'createdAt': ((var_core_value_sigC97C = var_core_value_sig3C5B.record) == null ? undefined : var_core_value_sigC97C.createdAt) || var_core_value_sig26BB,
          'updatedAt': ((var_core_value_sigC4B1 = var_core_value_sig3C5B.record) == null ? undefined : var_core_value_sigC4B1.updatedAt) || var_core_value_sig26BB
        };
      });
    if (!this._commandService['syncExecuteCommand'](var_core_value_sig68A2.id, {
      'unitId': this._base['getId'](),
      'tableId': this._tableId,
      'records': var_core_value_sig19B4,
      'source': var_core_value_sig1CDD.Facade
    })) throw Error("Failed to add records");
    return var_core_value_sig19B4.map(var_core_value_sig1BD9 => this._injector['createInstance'](J, this._base, this, var_core_value_sig1BD9.id, this._injector));
  }
  deleteRecords(var_core_value_sig218A) {
    return !var_core_value_sig218A.length || this._commandService["syncExecuteCommand"](var_core_value_sigCC17.id, {
      'unitId': this._base['getId'](),
      'tableId': this._tableId,
      'recordIds': var_core_value_sig218A,
      'source': var_core_value_sig1CDD.Facade
    });
  }
  getRange(var_core_value_sig14CB, var_core_value_sigFDEE, var_core_value_sigA676 = 1, var_core_value_sigC27E = 1) {
    return this._injector["createInstance"](G, this._base, this, {
      'startRow': var_core_value_sig14CB,
      'endRow': var_core_value_sig14CB + var_core_value_sigA676 - 1,
      'startColumn': var_core_value_sigFDEE,
      'endColumn': var_core_value_sigFDEE + var_core_value_sigC27E - 1
    }, this._injector);
  }
  getDataRange() {
    var var_core_value_sigA70D;
    let var_core_value_sigCE10 = var_core_value_sig78A3(this._getTable()),
      var_core_value_sigA386 = ((var_core_value_sigA70D = var_core_value_sigCE10.recordOrder) == null ? undefined : var_core_value_sigA70D.length) ?? 0,
      var_core_value_sigCD82 = var_core_value_sigCE10.fieldOrder["filter"](var_core_value_sigE43E => B(var_core_value_sigCE10.fields[var_core_value_sigE43E])).length;
    return this.getRange(0, 0, Math.max(var_core_value_sigA386, 1), Math.max(var_core_value_sigCD82, 1));
  }
  getViews() {
    let var_core_value_sig44DD = this._getTable();
    return var_core_value_sig44DD.viewOrder["filter"](var_core_value_sigA937 => var_core_value_sig44DD.views[var_core_value_sigA937]).map(var_core_value_sigCAD5 => this._injector['createInstance'](Y, this._base, this, var_core_value_sigCAD5, this._injector));
  }
  getViewById(var_core_value_sig96FA) {
    return this._getTable().views[var_core_value_sig96FA] ? this._injector["createInstance"](Y, this._base, this, var_core_value_sig96FA, this._injector) : null;
  }
  getViewByName(var_core_value_sigAB68) {
    let var_core_value_sig040A = this._getTable(),
      var_core_value_sig2AE0 = Object.values(var_core_value_sig040A.views).find(var_core_value_sigE503 => var_core_value_sigE503.name === var_core_value_sigAB68);
    return var_core_value_sig2AE0 ? this._injector["createInstance"](Y, this._base, this, var_core_value_sig2AE0.id, this._injector) : null;
  }
  createView(var_core_value_sigC349, var_core_value_sig9D96, var_core_value_sig2776) {
    var var_core_value_sig6FB2, var_core_value_sigEB43, var_core_value_sig4186, var_core_value_sigF963;
    let var_core_value_sigB608 = this._getTable(),
      var_core_value_sigF866 = [var_core_value_sigBE51, ...((var_core_value_sig2776 == null || (var_core_value_sig6FB2 = var_core_value_sig2776.view) == null ? undefined : var_core_value_sig6FB2.fieldOrder) ?? var_core_value_sigB608.fieldOrder).filter(var_core_value_sig48DD => B(var_core_value_sigB608.fields[var_core_value_sig48DD]))],
      var_core_value_sig5EFB = {
        ...(var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.view),
        'id': var_core_value_sigD23B(6),
        'name': var_core_value_sigC349,
        'type': var_core_value_sig9D96,
        'tableId': this._tableId,
        'config': (var_core_value_sig2776 == null || (var_core_value_sigEB43 = var_core_value_sig2776.view) == null ? undefined : var_core_value_sigEB43.config) ?? {},
        'fieldOrder': var_core_value_sigF866,
        'fieldSettings': {
          ...(var_core_value_sig2776 == null || (var_core_value_sig4186 = var_core_value_sig2776.view) == null ? undefined : var_core_value_sig4186.fieldSettings),
          [var_core_value_sigBE51]: {
            ...(var_core_value_sig2776 == null || (var_core_value_sigF963 = var_core_value_sig2776.view) == null || (var_core_value_sigF963 = var_core_value_sigF963.fieldSettings) == null ? undefined : var_core_value_sigF963[var_core_value_sigBE51]),
            'hidden': true
          }
        }
      };
    if (!this._commandService["syncExecuteCommand"](var_core_value_sig0E54.id, {
      'unitId': this._base['getId'](),
      'tableId': this._tableId,
      'view': var_core_value_sig5EFB,
      'index': var_core_value_sig2776 == null ? undefined : var_core_value_sig2776.index
    })) throw Error("Failed to create view \"" + var_core_value_sigC349 + '\x22');
    return this._injector["createInstance"](Y, this._base, this, var_core_value_sig5EFB.id, this._injector);
  }
  getSchema() {
    let var_core_value_sig3A85 = this._getTable(),
      var_core_value_sig2682 = var_core_value_sig3A85.fieldOrder["filter"](var_core_value_sig5E6A => B(var_core_value_sig3A85.fields[var_core_value_sig5E6A])),
      var_core_value_sig4BB5 = var_core_value_sig3A85.viewOrder['filter'](var_core_value_sigB7FC => var_core_value_sig3A85.views[var_core_value_sigB7FC]);
    return {
      'id': var_core_value_sig3A85.id,
      'name': var_core_value_sig3A85.name,
      'formulaName': this.getFormulaName(),
      'primaryFieldId': var_core_value_sig3A85.primaryFieldId,
      'fieldIds': var_core_value_sig2682,
      'viewIds': var_core_value_sig4BB5,
      'recordCount': this._resolveRecordIds().length,
      'fields': var_core_value_sig2682.map(var_core_value_sig9CD9 => {
        let var_core_value_sigFD0C = var_core_value_sig3A85.fields[var_core_value_sig9CD9];
        return {
          'id': var_core_value_sigFD0C.id,
          'name': var_core_value_sigFD0C.name,
          'type': var_core_value_sigFD0C.type,
          'config': var_core_value_sigFD0C.config,
          'readonly': var_core_value_sigFD0C.readonly,
          'description': var_core_value_sigFD0C.description
        };
      }),
      'views': var_core_value_sig4BB5.map(var_core_value_sig849B => {
        let var_core_value_sig5F1A = var_core_value_sig3A85.views[var_core_value_sig849B];
        return {
          'id': var_core_value_sig5F1A.id,
          'name': var_core_value_sig5F1A.name,
          'type': var_core_value_sig5F1A.type
        };
      })
    };
  }
  _getTable() {
    let var_core_value_sig6709 = this._base['getBase']().getSnapshot().tables[this._tableId];
    if (!var_core_value_sig6709) throw Error('[FTable]:\x20table\x20\x22' + this._tableId + "\" does not exist.");
    return var_core_value_sig6709;
  }
  _resolveRecordIds(var_core_value_sig52CA = {}) {
    let var_core_value_sigC030 = this._base["getBase"]().getSnapshot(),
      var_core_value_sig88F6 = this._getTable();
    if (var_core_value_sig52CA.viewId) {
      let var_core_value_sigB455 = this._projectionService["getProjection"](var_core_value_sigC030, this._tableId, var_core_value_sig52CA.viewId);
      if ("rows" in var_core_value_sigB455 && Array.isArray(var_core_value_sigB455.rows)) return var_core_value_sigB455.rows["map"](var_core_value_sigE154 => var_core_value_sigE154.recordId);
    }
    return (var_core_value_sig88F6.recordOrder ? var_core_value_sig88F6.recordOrder["map"](var_core_value_sig5241 => var_core_value_sig88F6.records[var_core_value_sig5241]) : Object.values(var_core_value_sig88F6.records).sort((var_core_value_sigC6E5, var_core_value_sigCEFB) => var_core_value_sigC6E5.orderKey["localeCompare"](var_core_value_sigCEFB.orderKey))).filter(var_core_value_sig1537 => var_core_value_sig1537).map(var_core_value_sigE4C6 => var_core_value_sigE4C6.id);
  }
};
X = R([L(3, var_core_value_sigF449), L(4, var_core_value_sig38C5), L(5, var_core_value_sig737C)], X);
function vt(var_core_value_sig49D9, var_core_value_sig320C) {
  let var_core_value_sigE7F0 = Math.max(0, var_core_value_sig320C.offset ?? 0);
  return var_core_value_sig320C.limit == null ? var_core_value_sig49D9.slice(var_core_value_sigE7F0) : var_core_value_sig49D9.slice(var_core_value_sigE7F0, var_core_value_sigE7F0 + Math.max(0, var_core_value_sig320C.limit));
}
;
function yt(var_core_value_sigE837, var_core_value_sig34F4, var_core_value_sigA45D = []) {
  return var_core_value_sigA45D.length ? [...var_core_value_sigE837].sort((var_core_value_sig37DB, var_core_value_sig5542) => {
    for (let var_core_value_sig4313 of var_core_value_sigA45D) {
      var var_core_value_sigE0A9;
      let var_core_value_sig4632 = var_core_value_sig4313.direction === var_core_value_sigF0E1.DESC ? -1 : 1,
        var_core_value_sig12F2 = bt(var_core_value_sig37DB.values[var_core_value_sig4313.fieldId], var_core_value_sig5542.values[var_core_value_sig4313.fieldId], (var_core_value_sigE0A9 = var_core_value_sig34F4.fields[var_core_value_sig4313.fieldId]) == null ? undefined : var_core_value_sigE0A9.type);
      if (var_core_value_sig12F2 !== 0) return var_core_value_sig12F2 * var_core_value_sig4632;
    }
    return String(var_core_value_sig37DB.orderKey ?? var_core_value_sig37DB.id).localeCompare(String(var_core_value_sig5542.orderKey ?? var_core_value_sig5542.id));
  }) : var_core_value_sigE837;
}
;
function bt(var_core_value_sig1BC7, var_core_value_sig4956, var_core_value_sigCC9E) {
  return var_core_value_sig1BC7 == null && var_core_value_sig4956 == null ? 0 : var_core_value_sig1BC7 == null ? -1 : var_core_value_sig4956 == null ? 1 : typeof var_core_value_sig1BC7 == "number" && typeof var_core_value_sig4956 == 'number' ? var_core_value_sig1BC7 - var_core_value_sig4956 : var_core_value_sigCC9E === var_core_value_sigA984.Date ? Number(var_core_value_sig1BC7) - Number(var_core_value_sig4956) : String(var_core_value_sig1BC7).localeCompare(String(var_core_value_sig4956));
}
;
function xt(var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039) {
  var var_core_value_sigA321;
  if (!var_core_value_sigF039 || !((var_core_value_sigA321 = var_core_value_sigF039.conditions) != null && var_core_value_sigA321.length)) return true;
  let {
    conjunction: var_core_value_sig3457 = var_core_value_sigA504.OR,
    conditions: var_core_value_sigBF4C
  } = var_core_value_sigF039;
  return var_core_value_sig3457 === var_core_value_sigA504.AND && var_core_value_sigBF4C.length > 1 ? var_core_value_sigBF4C.every(var_core_value_sigA73E => Z(var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigA73E)) : var_core_value_sigBF4C.some(var_core_value_sig7620 => Z(var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sig7620));
}
;
function Z(var_core_value_sig4A08, var_core_value_sig1BC4, var_core_value_sig9EAB) {
  let var_core_value_sigA5C3 = var_core_value_sig4A08.values[var_core_value_sig9EAB.fieldId],
    var_core_value_sig3A1E = var_core_value_sig1BC4.fields[var_core_value_sig9EAB.fieldId];
  if (St(var_core_value_sig9EAB)) {
    let var_core_value_sigB9FC = Ct(var_core_value_sig9EAB).test(String(var_core_value_sigA5C3 ?? ''));
    return var_core_value_sig9EAB.operator === "matches" ? var_core_value_sigB9FC : !var_core_value_sigB9FC;
  }
  return !var_core_value_sig3A1E || var_core_value_sigF7BB(var_core_value_sigA5C3, var_core_value_sig9EAB.operator, var_core_value_sig9EAB.value, var_core_value_sig3A1E);
}
;
function St(var_core_value_sigDC92) {
  return var_core_value_sigDC92.operator === 'matches' || var_core_value_sigDC92.operator === "notMatches";
}
;
function Ct(var_core_value_sig3515) {
  let var_core_value_sigC2A0 = String(var_core_value_sig3515.value ?? '');
  if (var_core_value_sigC2A0.length > 512) throw Error('Base\x20regex\x20filter\x20is\x20too\x20long.\x20Maximum\x20length\x20is\x20512.');
  try {
    return new RegExp(var_core_value_sigC2A0, var_core_value_sig3515.caseSensitive ? undefined : 'i');
  } catch (var_core_value_sig5055) {
    throw Error("Invalid Base regex filter: " + var_core_value_sigC2A0 + '.\x20' + (var_core_value_sig5055 instanceof Error ? var_core_value_sig5055.message : String(var_core_value_sig5055)));
  }
}
;
function wt(var_core_value_sig7C65, var_core_value_sig7F05, var_core_value_sig41F3) {
  if (var_core_value_sig41F3.type !== "invalid" && var_core_value_sig41F3.type !== "custom") {
    var var_core_value_sigF455;
    if (var_core_value_sig41F3.type === var_core_value_sig2D8D.Kanban) {
      var var_core_value_sig6E78;
      let var_core_value_sigFC87 = [((var_core_value_sig6E78 = var_core_value_sig41F3.fields) == null || (var_core_value_sig6E78 = var_core_value_sig6E78[0]) == null ? undefined : var_core_value_sig6E78.id) ?? var_core_value_sig7C65.primaryFieldId, ...(var_core_value_sig41F3.visibleCardFieldIds ?? [])];
      return Array.from(new Set(var_core_value_sigFC87.filter(var_core_value_sig2259 => !!var_core_value_sig7C65.fields[var_core_value_sig2259])));
    }
    if ((var_core_value_sigF455 = var_core_value_sig41F3.fields) != null && var_core_value_sigF455.length) return var_core_value_sig41F3.fields["map"](var_core_value_sig156F => var_core_value_sig156F.id).filter(var_core_value_sigDD51 => {
      var var_core_value_sigF057;
      return !!(var_core_value_sig7C65.fields[var_core_value_sigDD51] && !(var_core_value_sig7F05 != null && (var_core_value_sigF057 = var_core_value_sig7F05.fieldSettings) != null && (var_core_value_sigF057 = var_core_value_sigF057[var_core_value_sigDD51]) != null && var_core_value_sigF057.hidden));
    });
  }
  return var_core_value_sig7C65.fieldOrder["filter"](var_core_value_sig3801 => {
    var var_core_value_sig45F0;
    return !!(var_core_value_sig7C65.fields[var_core_value_sig3801] && !(var_core_value_sig7F05 != null && (var_core_value_sig45F0 = var_core_value_sig7F05.fieldSettings) != null && (var_core_value_sig45F0 = var_core_value_sig45F0[var_core_value_sig3801]) != null && var_core_value_sig45F0.hidden));
  });
}
let Q = class extends var_core_value_sig2B2A.FBase {
  constructor(var_core_value_sigBC91, var_core_value_sigCB88, var_core_value_sig8D65, var_core_value_sig8122, var_core_value_sigEDC6) {
    super(), this._base = var_core_value_sigBC91, this._injector = var_core_value_sigCB88, this._resourceLoaderService = var_core_value_sig8D65, this._commandService = var_core_value_sig8122, this._permissionService = var_core_value_sigEDC6;
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
    return this._resourceLoaderService['saveUnit'](this.getId()) ?? var_core_value_sigDC07.deepClone(this._base["getSnapshot"]());
  }
  getName() {
    return this._base["getSnapshot"]().name;
  }
  setName(var_core_value_sig611A) {
    this._commandService['syncExecuteCommand'](var_core_value_sigCC9D.id, {
      'unitId': this.getId(),
      'name': var_core_value_sig611A
    });
  }
  getTables() {
    let var_core_value_sig6BD9 = this._base['getSnapshot']();
    return var_core_value_sig6BD9.tableOrder["map"](var_core_value_sig72F6 => var_core_value_sig6BD9.tables[var_core_value_sig72F6]).filter(var_core_value_sig9FBA => var_core_value_sig9FBA).map(var_core_value_sigFE01 => this._injector["createInstance"](X, this, var_core_value_sigFE01.id, this._injector));
  }
  getTableById(var_core_value_sig7E56) {
    let var_core_value_sig4161 = this._base["getSnapshot"]().tables[var_core_value_sig7E56];
    return var_core_value_sig4161 ? this._injector['createInstance'](X, this, var_core_value_sig4161.id, this._injector) : null;
  }
  getTableByName(var_core_value_sig7580) {
    let var_core_value_sig1F18 = this._base["getSnapshot"](),
      var_core_value_sigD5A0 = Object.values(var_core_value_sig1F18.tables).find(var_core_value_sigA2CE => var_core_value_sigA2CE.name === var_core_value_sig7580);
    return var_core_value_sigD5A0 ? this._injector["createInstance"](X, this, var_core_value_sigD5A0.id, this._injector) : null;
  }
  insertTable(var_core_value_sig81B2, var_core_value_sigA0A5) {
    let var_core_value_sig10AA = var_core_value_sig4E80({
        'id': var_core_value_sigD23B(),
        'name': var_core_value_sig81B2,
        ...(var_core_value_sigA0A5 == null ? undefined : var_core_value_sigA0A5.table),
        'primaryFieldName': var_core_value_sigA0A5 == null ? undefined : var_core_value_sigA0A5.primaryFieldName
      }),
      var_core_value_sigE6D0 = var_core_value_sigDC07.commonExtend(var_core_value_sig10AA, (var_core_value_sigA0A5 == null ? undefined : var_core_value_sigA0A5.table) ?? {}),
      var_core_value_sig8E91 = var_core_value_sig19A1(this._base["getSnapshot"](), var_core_value_sigE6D0.name);
    if (!var_core_value_sig8E91.valid) throw Error('[FBase]:\x20invalid\x20table\x20name\x20\x22' + var_core_value_sigE6D0.name + "\". " + var_core_value_sigB8ED + '\x20' + var_core_value_sig8E91.reason);
    if (!this._commandService['syncExecuteCommand'](var_core_value_sigF79F.id, {
      'unitId': this._base["getUnitId"](),
      'table': var_core_value_sigE6D0,
      'index': var_core_value_sigA0A5 == null ? undefined : var_core_value_sigA0A5.index
    })) throw Error("Failed to create table \"" + var_core_value_sig81B2 + '\x22.');
    return this._injector["createInstance"](X, this, var_core_value_sigE6D0.id, this._injector);
  }
  deleteTable(var_core_value_sig00BE) {
    let var_core_value_sig7BB5 = typeof var_core_value_sig00BE == "string" ? var_core_value_sig00BE : var_core_value_sig00BE.getId();
    if (!this._commandService["syncExecuteCommand"](var_core_value_sig73D9.id, {
      'unitId': this._base["getUnitId"](),
      'tableId': var_core_value_sig7BB5
    })) throw Error("Failed to delete table \"" + var_core_value_sig7BB5 + '\x22.');
    return true;
  }
  duplicateTable(var_core_value_sig6AAD, var_core_value_sig1157) {
    let var_core_value_sigA694 = this._base["getSnapshot"](),
      var_core_value_sig18E01 = typeof var_core_value_sig6AAD == "string" ? var_core_value_sig6AAD : var_core_value_sig6AAD.getId(),
      var_core_value_sig0428 = var_core_value_sigA694.tables[var_core_value_sig18E01];
    if (!var_core_value_sig0428) throw Error("[FBase]: table \"" + var_core_value_sig18E01 + '\x22\x20does\x20not\x20exist.');
    let var_core_value_sigBE07 = var_core_value_sigA694.tableOrder["indexOf"](var_core_value_sig18E01) + 1,
      var_core_value_sig555F = var_core_value_sig08A3(var_core_value_sig0428, {
        'id': var_core_value_sigD23B(),
        'name': var_core_value_sig77D8(var_core_value_sigA694, var_core_value_sig0428.name + " Copy"),
        'includeRecords': (var_core_value_sig1157 == null ? undefined : var_core_value_sig1157.includeRecords) ?? false,
        'regenerateViewIds': (var_core_value_sig1157 == null ? undefined : var_core_value_sig1157.regenerateViewIds) ?? false
      });
    if (!this._commandService["syncExecuteCommand"](var_core_value_sigF79F.id, {
      'unitId': this._base['getUnitId'](),
      'table': var_core_value_sig555F,
      'index': var_core_value_sigBE07
    })) throw Error("Failed to duplicate table \"" + var_core_value_sig18E01 + '\x22.');
    return this._injector["createInstance"](X, this, var_core_value_sig555F.id, this._injector);
  }
  getSchema() {
    let var_core_value_sig3D6F = this._base["getSnapshot"]();
    return {
      'id': var_core_value_sig3D6F.id,
      'name': var_core_value_sig3D6F.name,
      'tables': this.getTables().map(var_core_value_sig1975 => var_core_value_sig1975.getSchema())
    };
  }
};
Q = R([L(1, var_core_value_sigC310(var_core_value_sigA4E8)), L(2, var_core_value_sigC87D), L(3, var_core_value_sigF449), L(4, var_core_value_sig38C5)], Q);
var Tt = class extends var_core_value_sig78E6 {
  _initialize() {
    this._initBaseBeforeEvents(), this._initBaseAfterEvents();
  }
  createBase(var_core_value_sig336C = {}, var_core_value_sig6E68) {
    let var_core_value_sig8DFE = this._univerInstanceService['createUnit'](var_core_value_sig3474.UNIVER_BASE, var_core_value_sig336C, var_core_value_sig6E68);
    return this._injector["createInstance"](Q, var_core_value_sig8DFE);
  }
  getActiveBase() {
    let var_core_value_sig48EA = this._univerInstanceService["getCurrentUnitOfType"](var_core_value_sig3474.UNIVER_BASE);
    return var_core_value_sig48EA ? this._injector['createInstance'](Q, var_core_value_sig48EA) : null;
  }
  getBase(var_core_value_sig5E16) {
    let var_core_value_sig09F3 = this._univerInstanceService["getUnit"](var_core_value_sig5E16, var_core_value_sig3474.UNIVER_BASE);
    return var_core_value_sig09F3 ? this._injector["createInstance"](Q, var_core_value_sig09F3) : null;
  }
  getBases() {
    return this._univerInstanceService["getAllUnitsForType"](var_core_value_sig3474.UNIVER_BASE).map(var_core_value_sig6EA1 => this._injector["createInstance"](Q, var_core_value_sig6EA1));
  }
  _initBaseAfterEvents() {
    this.disposeWithMe(this.registerEventHandler(this.Event["BaseHierarchyChanged"], () => this._commandService['onCommandExecuted']((var_core_value_sig9E2F, var_core_value_sigD082) => {
      var var_core_value_sigDBB7;
      if (!$(var_core_value_sig9E2F, var_core_value_sig11D0)) return;
      let var_core_value_sigD0A8 = var_core_value_sig9E2F.params;
      if (!((var_core_value_sigDBB7 = var_core_value_sigD0A8.hierarchyChanges) != null && var_core_value_sigDBB7.length)) return;
      let var_core_value_sigF4B9 = this.getBase(var_core_value_sigD0A8.unitId),
        var_core_value_sig5CEE = var_core_value_sigF4B9 == null ? undefined : var_core_value_sigF4B9.getTableById(var_core_value_sigD0A8.hierarchyChanges[0].tableId);
      if (!var_core_value_sigF4B9 || !var_core_value_sig5CEE) return;
      let var_core_value_sigE92A = {
        'base': var_core_value_sigF4B9,
        'table': var_core_value_sig5CEE,
        'changes': var_core_value_sigD0A8.hierarchyChanges,
        'source': var_core_value_sigD082 != null && var_core_value_sigD082.fromCollab ? var_core_value_sig1CDD.Remote : var_core_value_sigD0A8.source ?? var_core_value_sig1CDD.UI
      };
      this.fireEvent(this.Event["BaseHierarchyChanged"], var_core_value_sigE92A);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BaseTableCreated"], () => this._commandService['onCommandExecuted'](var_core_value_sig362B => {
      if (var_core_value_sig362B.id !== var_core_value_sigF79F.id) return;
      let {
          unitId: var_core_value_sig5CA5,
          table: var_core_value_sigE90F,
          index: var_core_value_sigEFD4
        } = var_core_value_sig362B.params,
        var_core_value_sig861B = this.getBase(var_core_value_sig5CA5);
      if (!var_core_value_sig861B) return;
      let var_core_value_sig5237 = {
        'base': var_core_value_sig861B,
        'table': var_core_value_sigE90F,
        'index': var_core_value_sigEFD4
      };
      this.fireEvent(this.Event['BaseTableCreated'], var_core_value_sig5237);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event['BaseTableFieldCreated'], () => this._commandService["onCommandExecuted"](var_core_value_sigBB00 => {
      if (var_core_value_sigBB00.id !== var_core_value_sigFFD1.id) return;
      let {
          unitId: var_core_value_sig7E54,
          tableId: var_core_value_sig9A8D,
          field: var_core_value_sigC259,
          index: var_core_value_sig9C9F,
          viewIndexes: var_core_value_sigFDEA
        } = var_core_value_sigBB00.params,
        var_core_value_sig86D0 = this.getBase(var_core_value_sig7E54);
      if (!var_core_value_sig86D0) return;
      let var_core_value_sig4CD2 = var_core_value_sig86D0.getTableById(var_core_value_sig9A8D);
      if (!var_core_value_sig4CD2) return;
      let var_core_value_sig48CA = {
        'base': var_core_value_sig86D0,
        'table': var_core_value_sig4CD2,
        'field': var_core_value_sigC259,
        'index': var_core_value_sig9C9F,
        'viewIndexes': var_core_value_sigFDEA
      };
      this.fireEvent(this.Event["BaseTableFieldCreated"], var_core_value_sig48CA);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BaseTableRecordCreated"], () => this._commandService['onCommandExecuted'](var_core_value_sig50AF => {
      if (var_core_value_sig50AF.id !== var_core_value_sig81AE.id && var_core_value_sig50AF.id !== var_core_value_sig68A2.id) return;
      let var_core_value_sigA942 = var_core_value_sig50AF.params,
        {
          unitId: var_core_value_sigA621,
          tableId: var_core_value_sigBBFF
        } = var_core_value_sigA942,
        var_core_value_sig8889 = var_core_value_sigA942.records ?? [var_core_value_sigA942.record],
        var_core_value_sig32F8 = this.getBase(var_core_value_sigA621);
      if (!var_core_value_sig32F8) return;
      let var_core_value_sig5B67 = var_core_value_sig32F8.getTableById(var_core_value_sigBBFF);
      if (!var_core_value_sig5B67) return;
      let var_core_value_sig1758 = {
        'base': var_core_value_sig32F8,
        'table': var_core_value_sig5B67,
        'records': var_core_value_sig8889
      };
      this.fireEvent(this.Event["BaseTableRecordCreated"], var_core_value_sig1758);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event['BaseTableViewCreated'], () => this._commandService["onCommandExecuted"](var_core_value_sig4805 => {
      if (var_core_value_sig4805.id !== var_core_value_sig0E54.id) return;
      let {
          unitId: var_core_value_sigE67E,
          tableId: var_core_value_sig2902,
          view: var_core_value_sig9989,
          index: var_core_value_sig698E
        } = var_core_value_sig4805.params,
        var_core_value_sig2809 = this.getBase(var_core_value_sigE67E);
      if (!var_core_value_sig2809) return;
      let var_core_value_sig2DAB = var_core_value_sig2809.getTableById(var_core_value_sig2902);
      if (!var_core_value_sig2DAB) return;
      let var_core_value_sig877E = {
        'base': var_core_value_sig2809,
        'table': var_core_value_sig2DAB,
        'view': var_core_value_sig9989,
        'index': var_core_value_sig698E
      };
      this.fireEvent(this.Event["BaseTableViewCreated"], var_core_value_sig877E);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BaseTableCellValueChanged"], () => this._commandService['onCommandExecuted'](var_core_value_sig20C8 => {
      if (var_core_value_sig20C8.id !== var_core_value_sig78AC.id) return;
      let {
          unitId: var_core_value_sigE9A7,
          tableId: var_core_value_sigBECE,
          recordId: var_core_value_sig1B22,
          fieldId: var_core_value_sig7F72,
          value: var_core_value_sig7B2A
        } = var_core_value_sig20C8.params,
        var_core_value_sig06CD = this.getBase(var_core_value_sigE9A7);
      if (!var_core_value_sig06CD) return;
      let var_core_value_sigA5F1 = var_core_value_sig06CD.getTableById(var_core_value_sigBECE);
      if (!var_core_value_sigA5F1) return;
      let var_core_value_sig97A2 = var_core_value_sigA5F1.getFieldById(var_core_value_sig7F72);
      if (!var_core_value_sig97A2) return;
      let var_core_value_sig07E9 = var_core_value_sigA5F1.getRecordById(var_core_value_sig1B22);
      if (!var_core_value_sig07E9) return;
      let var_core_value_sig4F59 = {
        'base': var_core_value_sig06CD,
        'table': var_core_value_sigA5F1,
        'field': var_core_value_sig97A2,
        'record': var_core_value_sig07E9,
        'value': var_core_value_sig7B2A
      };
      this.fireEvent(this.Event["BaseTableCellValueChanged"], var_core_value_sig4F59);
    })));
  }
  _initBaseBeforeEvents() {
    this.disposeWithMe(this.registerEventHandler(this.Event['BeforeBaseHierarchyChange'], () => this._commandService["beforeCommandExecuted"](var_core_value_sigF564 => {
      if ($(var_core_value_sigF564, var_core_value_sigCD3A)) {
        let {
            unitId: var_core_value_sig2AD0,
            tableId: var_core_value_sig3EEE,
            patches: var_core_value_sigBC46,
            source: var_core_value_sig3D7D = var_core_value_sig1CDD.UI
          } = var_core_value_sigF564.params,
          var_core_value_sig27E5 = this._getHierarchyEventContext(var_core_value_sig2AD0, var_core_value_sig3EEE);
        if (!var_core_value_sig27E5) return;
        this._fireBeforeHierarchyChange(var_core_value_sig27E5.base, var_core_value_sig27E5.table, var_core_value_sigA470(var_core_value_sig27E5.table['getTable'](), var_core_value_sigBC46), var_core_value_sig3D7D);
        return;
      }
      if ($(var_core_value_sigF564, var_core_value_sigD2BA)) {
        let {
            unitId: var_core_value_sig8061,
            tableId: var_core_value_sig4D4C,
            patches: var_core_value_sigC9E0,
            source: var_core_value_sig76BA = var_core_value_sig1CDD.UI
          } = var_core_value_sigF564.params,
          var_core_value_sigFBFA = this._getHierarchyEventContext(var_core_value_sig8061, var_core_value_sig4D4C);
        if (!var_core_value_sigFBFA) return;
        let var_core_value_sigF602 = var_core_value_sigFBFA.table["getTable"]();
        this._fireBeforeHierarchyChange(var_core_value_sigFBFA.base, var_core_value_sigFBFA.table, var_core_value_sigA470(var_core_value_sigF602, var_core_value_sigA7DB(var_core_value_sigF602, var_core_value_sigC9E0)), var_core_value_sig76BA);
        return;
      }
      if ($(var_core_value_sigF564, var_core_value_sig81AE)) {
        let var_core_value_sig1BBD = var_core_value_sigF564.params,
          var_core_value_sigF704 = this._getHierarchyEventContext(var_core_value_sig1BBD.unitId, var_core_value_sig1BBD.tableId);
        if (!var_core_value_sigF704) return;
        this._fireBeforeHierarchyChange(var_core_value_sigF704.base, var_core_value_sigF704.table, var_core_value_sigF98E(var_core_value_sigF704.table["getTable"](), [var_core_value_sig1BBD.record]), var_core_value_sig1BBD.source ?? var_core_value_sig1CDD.UI);
        return;
      }
      if ($(var_core_value_sigF564, var_core_value_sig68A2)) {
        let var_core_value_sig2BCF = var_core_value_sigF564.params,
          var_core_value_sig0D69 = this._getHierarchyEventContext(var_core_value_sig2BCF.unitId, var_core_value_sig2BCF.tableId);
        if (!var_core_value_sig0D69) return;
        this._fireBeforeHierarchyChange(var_core_value_sig0D69.base, var_core_value_sig0D69.table, var_core_value_sigF98E(var_core_value_sig0D69.table["getTable"](), var_core_value_sig2BCF.records), var_core_value_sig2BCF.source ?? var_core_value_sig1CDD.UI);
        return;
      }
      if ($(var_core_value_sigF564, var_core_value_sig0455)) {
        let var_core_value_sig480E = var_core_value_sigF564.params,
          var_core_value_sig26DB = this._getHierarchyEventContext(var_core_value_sig480E.unitId, var_core_value_sig480E.tableId);
        if (!var_core_value_sig26DB) return;
        this._fireBeforeHierarchyChange(var_core_value_sig26DB.base, var_core_value_sig26DB.table, var_core_value_sigF98E(var_core_value_sig26DB.table['getTable'](), [var_core_value_sig480E.record]), var_core_value_sig480E.source ?? var_core_value_sig1CDD.UI);
        return;
      }
      if ($(var_core_value_sigF564, var_core_value_sig9DE4)) {
        let var_core_value_sigF0F9 = var_core_value_sigF564.params,
          var_core_value_sig1A0F = this._getHierarchyEventContext(var_core_value_sigF0F9.unitId, var_core_value_sigF0F9.tableId);
        if (!var_core_value_sig1A0F) return;
        let var_core_value_sigFBA4 = var_core_value_sig1A0F.table['getTable'](),
          var_core_value_sig4383 = var_core_value_sigF0F9.fieldId ?? var_core_value_sig102B(var_core_value_sigFBA4),
          var_core_value_sig186C = var_core_value_sig16C7(var_core_value_sigFBA4, var_core_value_sig4383).parentByRecordId["get"](var_core_value_sigF0F9.recordId) ?? null;
        this._fireBeforeHierarchyChange(var_core_value_sig1A0F.base, var_core_value_sig1A0F.table, [{
          'tableId': var_core_value_sigF0F9.tableId,
          'fieldId': var_core_value_sig4383,
          'recordId': var_core_value_sigF0F9.recordId,
          'oldParentRecordId': var_core_value_sig186C,
          'parentRecordId': var_core_value_sigF0F9.parentRecordId
        }], var_core_value_sigF0F9.source ?? var_core_value_sig1CDD.UI);
        return;
      }
      if ($(var_core_value_sigF564, var_core_value_sigC753)) {
        let var_core_value_sigD955 = var_core_value_sigF564.params,
          var_core_value_sig48BD = this._getHierarchyEventContext(var_core_value_sigD955.unitId, var_core_value_sigD955.tableId);
        if (!var_core_value_sig48BD) return;
        let var_core_value_sig429F = var_core_value_sigD955.fieldId ?? var_core_value_sig102B(var_core_value_sig48BD.table["getTable"]());
        this._fireBeforeHierarchyChange(var_core_value_sig48BD.base, var_core_value_sig48BD.table, [{
          'tableId': var_core_value_sigD955.tableId,
          'fieldId': var_core_value_sig429F,
          'recordId': var_core_value_sigD955.record['id'],
          'oldParentRecordId': null,
          'parentRecordId': var_core_value_sigD955.parentRecordId
        }], var_core_value_sigD955.source ?? var_core_value_sig1CDD.UI);
        return;
      }
      if ($(var_core_value_sigF564, var_core_value_sig6C4A)) {
        let var_core_value_sigF62A = var_core_value_sigF564.params,
          var_core_value_sig8178 = this._getHierarchyEventContext(var_core_value_sigF62A.unitId, var_core_value_sigF62A.tableId);
        if (!var_core_value_sig8178) return;
        this._fireBeforeHierarchyChange(var_core_value_sig8178.base, var_core_value_sig8178.table, var_core_value_sig7428(var_core_value_sig8178.table["getTable"](), [var_core_value_sigF62A.recordId]), var_core_value_sigF62A.source ?? var_core_value_sig1CDD.UI);
        return;
      }
      if ($(var_core_value_sigF564, var_core_value_sigCC17)) {
        let var_core_value_sigE9ED = var_core_value_sigF564.params,
          var_core_value_sigB577 = this._getHierarchyEventContext(var_core_value_sigE9ED.unitId, var_core_value_sigE9ED.tableId);
        if (!var_core_value_sigB577) return;
        this._fireBeforeHierarchyChange(var_core_value_sigB577.base, var_core_value_sigB577.table, var_core_value_sig7428(var_core_value_sigB577.table["getTable"](), var_core_value_sigE9ED.recordIds), var_core_value_sigE9ED.source ?? var_core_value_sig1CDD.UI);
        return;
      }
      if (!$(var_core_value_sigF564, var_core_value_sig78AC)) return;
      let var_core_value_sig8CFA = var_core_value_sigF564.params,
        var_core_value_sig2E11 = this._getHierarchyEventContext(var_core_value_sig8CFA.unitId, var_core_value_sig8CFA.tableId);
      if (!var_core_value_sig2E11) return;
      let var_core_value_sig5B69 = var_core_value_sig2E11.table["getTable"]();
      if (!var_core_value_sig649B(var_core_value_sig5B69).includes(var_core_value_sig8CFA.fieldId)) return;
      let var_core_value_sigB098 = var_core_value_sig16C7(var_core_value_sig5B69, var_core_value_sig8CFA.fieldId).parentByRecordId['get'](var_core_value_sig8CFA.recordId) ?? null,
        var_core_value_sigCE71 = var_core_value_sigFA38(var_core_value_sig8CFA.value)[0] ?? null;
      var_core_value_sigB098 !== var_core_value_sigCE71 && this._fireBeforeHierarchyChange(var_core_value_sig2E11.base, var_core_value_sig2E11.table, [{
        'tableId': var_core_value_sig8CFA.tableId,
        'fieldId': var_core_value_sig8CFA.fieldId,
        'recordId': var_core_value_sig8CFA.recordId,
        'oldParentRecordId': var_core_value_sigB098,
        'parentRecordId': var_core_value_sigCE71
      }], var_core_value_sig8CFA.source ?? var_core_value_sig1CDD.UI);
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeBaseTableCreate"], () => this._commandService["beforeCommandExecuted"](var_core_value_sig21D8 => {
      if (var_core_value_sig21D8.id !== var_core_value_sigF79F.id) return;
      let {
          unitId: var_core_value_sig2B65,
          table: var_core_value_sigD7EA,
          index: var_core_value_sigB33B
        } = var_core_value_sig21D8.params,
        var_core_value_sig24B9 = this.getBase(var_core_value_sig2B65);
      if (!var_core_value_sig24B9) return;
      let var_core_value_sigE627 = {
        'base': var_core_value_sig24B9,
        'table': var_core_value_sigD7EA,
        'index': var_core_value_sigB33B
      };
      if (this.fireEvent(this.Event['BeforeBaseTableCreate'], var_core_value_sigE627), var_core_value_sigE627.cancel) throw new var_core_value_sigE5A6();
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeBaseTableFieldCreate"], () => this._commandService["beforeCommandExecuted"](var_core_value_sigEF3E => {
      if (var_core_value_sigEF3E.id !== var_core_value_sigFFD1.id) return;
      let {
          unitId: var_core_value_sig273D,
          tableId: var_core_value_sig9A0D,
          field: var_core_value_sigA319,
          index: var_core_value_sig2D58,
          viewIndexes: var_core_value_sig223F
        } = var_core_value_sigEF3E.params,
        var_core_value_sigD749 = this.getBase(var_core_value_sig273D);
      if (!var_core_value_sigD749) return;
      let var_core_value_sigCFFA = var_core_value_sigD749.getTableById(var_core_value_sig9A0D);
      if (!var_core_value_sigCFFA) return;
      let var_core_value_sig58C1 = {
        'base': var_core_value_sigD749,
        'table': var_core_value_sigCFFA,
        'field': var_core_value_sigA319,
        'index': var_core_value_sig2D58,
        'viewIndexes': var_core_value_sig223F
      };
      if (this.fireEvent(this.Event["BeforeBaseTableFieldCreate"], var_core_value_sig58C1), var_core_value_sig58C1.cancel) throw new var_core_value_sigE5A6();
    }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforeBaseTableRecordCreate"], () => this._commandService["beforeCommandExecuted"](var_core_value_sig5090 => {
      if (var_core_value_sig5090.id !== var_core_value_sig81AE.id && var_core_value_sig5090.id !== var_core_value_sig68A2.id) return;
      let var_core_value_sigC368 = var_core_value_sig5090.params,
        {
          unitId: var_core_value_sigAD56,
          tableId: var_core_value_sigDB4A
        } = var_core_value_sigC368,
        var_core_value_sig6418 = var_core_value_sigC368.records ?? [var_core_value_sigC368.record],
        var_core_value_sig1896 = this.getBase(var_core_value_sigAD56);
      if (!var_core_value_sig1896) return;
      let var_core_value_sig0285 = var_core_value_sig1896.getTableById(var_core_value_sigDB4A);
      if (!var_core_value_sig0285) return;
      let var_core_value_sig777D = {
        'base': var_core_value_sig1896,
        'table': var_core_value_sig0285,
        'records': var_core_value_sig6418
      };
      if (this.fireEvent(this.Event["BeforeBaseTableRecordCreate"], var_core_value_sig777D), var_core_value_sig777D.cancel) throw new var_core_value_sigE5A6();
    }))), this.disposeWithMe(this.registerEventHandler(this.Event['BeforeBaseTableViewCreate'], () => this._commandService["beforeCommandExecuted"](var_core_value_sig3F4C => {
      if (var_core_value_sig3F4C.id !== var_core_value_sig0E54.id) return;
      let {
          unitId: var_core_value_sigD65A,
          tableId: var_core_value_sig5A13,
          view: var_core_value_sigF593,
          index: var_core_value_sig3607
        } = var_core_value_sig3F4C.params,
        var_core_value_sigB512 = this.getBase(var_core_value_sigD65A);
      if (!var_core_value_sigB512) return;
      let var_core_value_sigF2E6 = var_core_value_sigB512.getTableById(var_core_value_sig5A13);
      if (!var_core_value_sigF2E6) return;
      let var_core_value_sig34C8 = {
        'base': var_core_value_sigB512,
        'table': var_core_value_sigF2E6,
        'view': var_core_value_sigF593,
        'index': var_core_value_sig3607
      };
      if (this.fireEvent(this.Event["BeforeBaseTableViewCreate"], var_core_value_sig34C8), var_core_value_sig34C8.cancel) throw new var_core_value_sigE5A6();
    }))), this.disposeWithMe(this.registerEventHandler(this.Event['BeforeBaseTableCellValueChange'], () => this._commandService["beforeCommandExecuted"](var_core_value_sigB744 => {
      if (var_core_value_sigB744.id !== var_core_value_sig78AC.id) return;
      let {
          unitId: var_core_value_sigEAE2,
          tableId: var_core_value_sigE68A,
          recordId: var_core_value_sig3E68,
          fieldId: var_core_value_sigF4C5,
          value: var_core_value_sig5410
        } = var_core_value_sigB744.params,
        var_core_value_sig492F = this.getBase(var_core_value_sigEAE2);
      if (!var_core_value_sig492F) return;
      let var_core_value_sig8EA0 = var_core_value_sig492F.getTableById(var_core_value_sigE68A);
      if (!var_core_value_sig8EA0) return;
      let var_core_value_sigA6F6 = var_core_value_sig8EA0.getFieldById(var_core_value_sigF4C5);
      if (!var_core_value_sigA6F6) return;
      let var_core_value_sigCDDA = var_core_value_sig8EA0.getRecordById(var_core_value_sig3E68);
      if (!var_core_value_sigCDDA) return;
      let var_core_value_sigE243 = {
        'base': var_core_value_sig492F,
        'table': var_core_value_sig8EA0,
        'field': var_core_value_sigA6F6,
        'record': var_core_value_sigCDDA,
        'value': var_core_value_sig5410
      };
      if (this.fireEvent(this.Event['BeforeBaseTableCellValueChange'], var_core_value_sigE243), var_core_value_sigE243.cancel) throw new var_core_value_sigE5A6();
    })));
  }
  _getHierarchyEventContext(var_core_value_sig4592, var_core_value_sigC5C4) {
    let var_core_value_sig1617 = this.getBase(var_core_value_sig4592),
      var_core_value_sig4169 = var_core_value_sig1617 == null ? undefined : var_core_value_sig1617.getTableById(var_core_value_sigC5C4);
    return var_core_value_sig1617 && var_core_value_sig4169 ? {
      'base': var_core_value_sig1617,
      'table': var_core_value_sig4169
    } : null;
  }
  _fireBeforeHierarchyChange(var_core_value_sig6D19, var_core_value_sig279C, var_core_value_sigAC51, var_core_value_sig8986) {
    if (!var_core_value_sigAC51.length) return;
    let var_core_value_sigCAF7 = {
      'base': var_core_value_sig6D19,
      'table': var_core_value_sig279C,
      'changes': var_core_value_sigAC51,
      'source': var_core_value_sig8986
    };
    if (this.fireEvent(this.Event['BeforeBaseHierarchyChange'], var_core_value_sigCAF7), var_core_value_sigCAF7.cancel) throw new var_core_value_sigE5A6();
  }
};
function $(var_core_value_sigB3EE, var_core_value_sigC50A) {
  return var_core_value_sigB3EE.id === var_core_value_sigC50A.id && var_core_value_sigB3EE.params !== undefined;
}
var_core_value_sig78E6.extend(Tt);
var Et = class extends var_core_value_sig7D42 {
  get BaseFieldType() {
    return var_core_value_sigA984;
  }
  get BaseFilterConjunction() {
    return var_core_value_sigA504;
  }
  get BaseFilterOperator() {
    return var_core_value_sig05FF;
  }
  get BaseFieldKeyEnum() {
    return ot;
  }
  get BaseViewType() {
    return var_core_value_sig2D8D;
  }
  get BaseConditionalColorTarget() {
    return var_core_value_sigBC1A;
  }
  get BaseConditionalColorOperator() {
    return var_core_value_sigAAD1;
  }
  get BaseConditionalDateMode() {
    return var_core_value_sig3F3A;
  }
  get BaseSortDirection() {
    return var_core_value_sigF0E1;
  }
  get BaseEventSource() {
    return var_core_value_sig1CDD;
  }
  get BaseHierarchyErrorCode() {
    return var_core_value_sig0DB1;
  }
  get BaseHierarchyInvalidReason() {
    return var_core_value_sigFBF0;
  }
  get BaseRecordLinkRole() {
    return var_core_value_sig2F95;
  }
};
var_core_value_sig7D42.extend(Et);
var Dt = class extends var_core_value_sig8FDE {
  get BaseTableCreated() {
    return "BaseTableCreated";
  }
  get BeforeBaseTableCreate() {
    return 'BeforeBaseTableCreate';
  }
  get BaseTableFieldCreated() {
    return 'BaseTableFieldCreated';
  }
  get BeforeBaseTableFieldCreate() {
    return "BeforeBaseTableFieldCreate";
  }
  get BaseTableRecordCreated() {
    return "BaseTableRecordCreated";
  }
  get BeforeBaseTableRecordCreate() {
    return "BeforeBaseTableRecordCreate";
  }
  get BaseTableViewCreated() {
    return 'BaseTableViewCreated';
  }
  get BeforeBaseTableViewCreate() {
    return "BeforeBaseTableViewCreate";
  }
  get BaseTableCellValueChanged() {
    return "BaseTableCellValueChanged";
  }
  get BeforeBaseTableCellValueChange() {
    return 'BeforeBaseTableCellValueChange';
  }
  get BaseHierarchyChanged() {
    return 'BaseHierarchyChanged';
  }
  get BeforeBaseHierarchyChange() {
    return 'BeforeBaseHierarchyChange';
  }
};
var_core_value_sig8FDE.extend(Dt);
export { ot as BaseFieldKeyEnum, Q as FBase, I as FBaseObjectPermission, at as FBasePermission, X as FBaseTable, z as FBaseTableField, G as FBaseTableRange, J as FBaseTableRecord, Y as FBaseTableView, Dt as FBasesEventNameMixin, ct as resolveBaseFieldKey, V as resolveBaseFieldValues };
