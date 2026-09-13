import { BASE_RECORD_ID_FIELD_ID as var_core_value_sigED20, BaseConditionalColorOperator as var_core_value_sigF90F, BaseConditionalColorTarget as var_core_value_sigEBEE, BaseConditionalDateMode as var_core_value_sigA547, BaseDataModel as var_core_value_sigE634, BaseFieldType as var_core_value_sig06E6, BaseFilterConjunction as var_core_value_sig5270, BaseHierarchyInvalidReason as var_core_value_sigC76A, BaseRecordLinkRole as var_core_value_sig9D84, BaseSortDirection as var_core_value_sigDBEF, BaseViewType as var_core_value_sig29F7, CellValueType as var_core_value_sig590D, ColorKit as var_core_value_sig31F0, CommandType as var_core_value_sig0A86, CustomCommandExecutionError as var_core_value_sig87E9, DateSystem as var_core_value_sigEB10, DependentOn as var_core_value_sig50B5, Disposable as var_core_value_sig8A28, ICommandService as var_core_value_sig4AEF, IConfigService as var_core_value_sigD64C, IPermissionService as var_core_value_sig8E15, IUndoRedoService as var_core_value_sig5EB1, IUniverInstanceService as var_core_value_sig5B68, Inject as var_core_value_sig6EF5, Injector as var_core_value_sig5FE3, JSON1 as var_core_value_sig71B3, JSONX as var_core_value_sig9860, ObjectMatrix as var_core_value_sigAEF6, Optional as var_core_value_sig8954, PermissionStatus as var_core_value_sig44DA, Plugin as var_core_value_sig2956, Tools as var_core_value_sig744C, UniverInstanceType as var_core_value_sigE2E8, allocateBaseFormulaTableName as var_core_value_sig63A1, assertBaseTableRecordIdentity as var_core_value_sigDE3F, createBaseFormulaTableNameMap as var_core_value_sigBD2F, createBaseRecordIdField as var_core_value_sig810B, createIdentifier as var_core_value_sig60D0, dateKit as var_core_value_sig8A14, excelDateTimeSerial as var_core_value_sigDA56, excelSerialToDateTime as var_core_value_sigD25D, generateRandomId as var_core_value_sigAF2B, getBaseFormulaTableName as var_core_value_sig9A2B, isBaseRecordIdFieldName as var_core_value_sigEFBE, isValidBaseRecordId as var_core_value_sigBBED, merge as var_core_value_sigA6D5, nameCharacterCheck as var_core_value_sigFE1A, numfmt as var_core_value_sig29A2, regexp as var_core_value_sigF50E, sequenceExecute as var_core_value_sigE9E0, toDisposable as var_core_value_sig8DAA, touchDependencies as var_core_value_sig4960 } from '@univerjs/core';
import { FormulaCalculationTriggerService as var_core_value_sig0F6B, IActiveDirtyManagerService as var_core_value_sig341C, RemoveSuperTableMutation as var_core_value_sig289C, SetFormulaCalculationResultMutation as var_core_value_sig30A2, SetSuperTableMutation as var_core_value_sig829D, SetTriggerFormulaCalculationStartMutation as var_core_value_sigAAB6, UniverProFormulaEnginePlugin as var_core_value_sig3DA9, refactorFormulaUnitQualifier as var_core_value_sigB62E } from '@univerjs-pro/engine-formula';
import { UnitAction as var_core_value_sigF383, UnitObject as var_core_value_sig40A4 } from '@univerjs/protocol';
import { UniverLicensePlugin as var_core_value_sig8481 } from '@univerjs-pro/license';
import { DataSyncPrimaryController as var_core_value_sigC6E3 } from '@univerjs/rpc';
import { FormulaCalculationSessionService as var_core_value_sigB4C8, FormulaResultApplicationType as var_core_value_sig0461 } from '@univerjs/engine-formula';
function M(var_core_value_sig4767) {
  let var_core_value_sig2591 = var_core_value_sig4767.config["targetTableId"],
    var_core_value_sig7C12 = var_core_value_sig4767.config["multiple"],
    var_core_value_sig8EC5 = var_core_value_sig4767.config["displayFieldId"],
    var_core_value_sig4B1B = var_core_value_sig4767.config['pickerFieldIds'],
    var_core_value_sig14C3 = var_core_value_sig4767.config['relationRole'];
  return typeof var_core_value_sig2591 != "string" || !var_core_value_sig2591 || typeof var_core_value_sig7C12 != 'boolean' || var_core_value_sig8EC5 !== undefined && (typeof var_core_value_sig8EC5 != 'string' || !var_core_value_sig8EC5) || var_core_value_sig14C3 !== undefined && var_core_value_sig14C3 !== var_core_value_sig9D84.Parent || var_core_value_sig4B1B !== undefined && (!Array.isArray(var_core_value_sig4B1B) || var_core_value_sig4B1B.some(var_core_value_sigBF4C => typeof var_core_value_sigBF4C != "string" || !var_core_value_sigBF4C) || new Set(var_core_value_sig4B1B).size !== var_core_value_sig4B1B.length) ? null : {
    'targetTableId': var_core_value_sig2591,
    'multiple': var_core_value_sig7C12,
    ...(var_core_value_sig8EC5 ? {
      'displayFieldId': var_core_value_sig8EC5
    } : {}),
    ...(var_core_value_sig4B1B ? {
      'pickerFieldIds': [...var_core_value_sig4B1B]
    } : {}),
    ...(var_core_value_sig14C3 ? {
      'relationRole': var_core_value_sig14C3
    } : {})
  };
}
;
function Pe(var_core_value_sig95A8) {
  return typeof var_core_value_sig95A8 != "string" || var_core_value_sig95A8 === '' ? [] : var_core_value_sig95A8.split(',');
}
;
function Fe(var_core_value_sig3F90) {
  return Array.from(new Set(var_core_value_sig3F90)).join(',');
}
;
function Ie(var_core_value_sigB489, var_core_value_sig76E7) {
  if (typeof var_core_value_sigB489 != 'string') return {
    'valid': false,
    'reason': '[RecordLink]:\x20value\x20must\x20be\x20a\x20canonical\x20string.'
  };
  if (var_core_value_sigB489 === '') return {
    'valid': true
  };
  let var_core_value_sig7E7F = var_core_value_sigB489.split(',');
  return !var_core_value_sig76E7 && var_core_value_sig7E7F.length > 1 ? {
    'valid': false,
    'reason': "[RecordLink]: a single link accepts only one record id."
  } : var_core_value_sig7E7F.some(var_core_value_sig3457 => !var_core_value_sigBBED(var_core_value_sig3457)) || new Set(var_core_value_sig7E7F).size !== var_core_value_sig7E7F.length || Fe(var_core_value_sig7E7F) !== var_core_value_sigB489 ? {
    'valid': false,
    'reason': "[RecordLink]: value is not a canonical record id list."
  } : {
    'valid': true
  };
}
;
function Le(var_core_value_sig7947, var_core_value_sig7FEC) {
  if (var_core_value_sig7FEC.type !== var_core_value_sig06E6.RecordLink) return {
    'valid': true
  };
  let var_core_value_sig73D2 = M(var_core_value_sig7FEC),
    var_core_value_sig6BDA = var_core_value_sig73D2 ? var_core_value_sig7947.tables[var_core_value_sig73D2.targetTableId] : undefined;
  if (!var_core_value_sig73D2 || !var_core_value_sig6BDA) return {
    'valid': false,
    'reason': "[RecordLink]: target table does not exist in this Base."
  };
  let var_core_value_sig3A25 = [...(var_core_value_sig73D2.displayFieldId ? [var_core_value_sig73D2.displayFieldId] : []), ...(var_core_value_sig73D2.pickerFieldIds ?? [])].find(var_core_value_sig4A08 => {
    let var_core_value_sig1BC4 = var_core_value_sig6BDA.fields[var_core_value_sig4A08];
    return !var_core_value_sig1BC4 || var_core_value_sig1BC4.system === true || var_core_value_sig1BC4.type === var_core_value_sig06E6.RecordId;
  });
  return var_core_value_sig3A25 ? {
    'valid': false,
    'reason': "[RecordLink]: display field \"" + var_core_value_sig3A25 + "\" must be a non-system field in the target table."
  } : {
    'valid': true
  };
}
;
function Re(var_core_value_sigCBAA, var_core_value_sigC096, var_core_value_sig6140, var_core_value_sigDD84 = {}) {
  let var_core_value_sig7BA5 = M(var_core_value_sigC096);
  if (var_core_value_sigC096.type !== var_core_value_sig06E6.RecordLink || !var_core_value_sig7BA5) return {
    'valid': false,
    'reason': "[RecordLink]: field config is invalid."
  };
  let var_core_value_sig543F = Ie(var_core_value_sig6140, var_core_value_sig7BA5.multiple);
  if (!var_core_value_sig543F.valid || var_core_value_sigDD84.allowDangling) return var_core_value_sig543F;
  let var_core_value_sigBF30 = var_core_value_sigCBAA.tables[var_core_value_sig7BA5.targetTableId];
  if (!var_core_value_sigBF30) return {
    'valid': false,
    'reason': '[RecordLink]:\x20target\x20table\x20does\x20not\x20exist\x20in\x20this\x20Base.'
  };
  let var_core_value_sigAA0E = Pe(var_core_value_sig6140).find(var_core_value_sig9EAB => !var_core_value_sigBF30.records[var_core_value_sig9EAB]);
  return var_core_value_sigAA0E ? {
    'valid': false,
    'reason': "[RecordLink]: target record \"" + var_core_value_sigAA0E + "\" does not exist."
  } : {
    'valid': true
  };
}
;
function ze(var_core_value_sig3747, var_core_value_sig9B6A) {
  return Object.values(var_core_value_sig3747.tables).flatMap(var_core_value_sigA5C3 => Object.values(var_core_value_sigA5C3.fields).flatMap(var_core_value_sig2D58 => {
    let var_core_value_sig223F = var_core_value_sig2D58.type === var_core_value_sig06E6.RecordLink ? M(var_core_value_sig2D58) : null;
    return (var_core_value_sig223F == null ? undefined : var_core_value_sig223F.targetTableId) === var_core_value_sig9B6A ? [{
      'tableId': var_core_value_sigA5C3.id,
      'fieldId': var_core_value_sig2D58.id
    }] : [];
  }));
}
const Be = 5,
  Ve = "__base_hierarchy_parent__";
let He = function (var_core_value_sig7BFA) {
  return var_core_value_sig7BFA.InvalidField = "invalidField", var_core_value_sig7BFA.MissingRecord = 'missingRecord', var_core_value_sig7BFA.SelfParent = "selfParent", var_core_value_sig7BFA.Cycle = "cycle", var_core_value_sig7BFA.MaxDepth = "maxDepth", var_core_value_sig7BFA.SortedView = "sortedView", var_core_value_sig7BFA;
}({});
var N = class extends Error {
  constructor(var_core_value_sig3A1E, var_core_value_sigDC92 = "[BaseHierarchy]: " + var_core_value_sig3A1E) {
    super(var_core_value_sigDC92), this.code = var_core_value_sig3A1E, this.name = "BaseHierarchyError";
  }
};
let Ue = function (var_core_value_sig09FA) {
  return var_core_value_sig09FA.UI = 'ui', var_core_value_sig09FA.Facade = "facade", var_core_value_sig09FA.Remote = 'remote', var_core_value_sig09FA.Undo = "undo", var_core_value_sig09FA.Redo = "redo", var_core_value_sig09FA.Import = "import", var_core_value_sig09FA;
}({});
function P(var_core_value_sig6881, var_core_value_sigAB94) {
  if (!var_core_value_sigAB94) return false;
  let var_core_value_sigEE05 = var_core_value_sig6881.fields[var_core_value_sigAB94];
  if (!var_core_value_sigEE05 || var_core_value_sigEE05.type !== var_core_value_sig06E6.RecordLink) return false;
  let var_core_value_sig0F0E = M(var_core_value_sigEE05);
  return var_core_value_sig0F0E ? var_core_value_sig0F0E.targetTableId === var_core_value_sig6881.id && var_core_value_sig0F0E.multiple === false : false;
}
;
function We(var_core_value_sig3A40) {
  return [...var_core_value_sig3A40.fieldOrder, ...Object.keys(var_core_value_sig3A40.fields).filter(var_core_value_sig3515 => !var_core_value_sig3A40.fieldOrder["includes"](var_core_value_sig3515)).sort()].find(var_core_value_sigC2A0 => {
    var var_core_value_sig7C65;
    return P(var_core_value_sig3A40, var_core_value_sigC2A0) ? ((var_core_value_sig7C65 = M(var_core_value_sig3A40.fields[var_core_value_sigC2A0])) == null ? undefined : var_core_value_sig7C65.relationRole) === var_core_value_sig9D84.Parent : false;
  }) ?? null;
}
;
function Ge(var_core_value_sig2377) {
  let var_core_value_sig4EEF = We(var_core_value_sig2377);
  if (var_core_value_sig4EEF) return var_core_value_sig4EEF;
  let var_core_value_sigC58E = Ve,
    var_core_value_sig9063 = 2;
  for (; var_core_value_sig2377.fields[var_core_value_sigC58E];) var_core_value_sigC58E = Ve + '_' + var_core_value_sig9063++;
  return var_core_value_sigC58E;
}
;
function Ke(var_core_value_sig99CE, var_core_value_sigFB15 = Ge(var_core_value_sig99CE), var_core_value_sig9AF5 = "Parent Items") {
  return {
    'id': var_core_value_sigFB15,
    'name': var_core_value_sig9AF5,
    'type': var_core_value_sig06E6.RecordLink,
    'config': {
      'targetTableId': var_core_value_sig99CE.id,
      'multiple': false,
      'displayFieldId': var_core_value_sig99CE.primaryFieldId,
      'pickerFieldIds': [var_core_value_sig99CE.primaryFieldId],
      'relationRole': var_core_value_sig9D84.Parent
    }
  };
}
;
function qe(var_core_value_sigCD2E) {
  let var_core_value_sig60CE = We(var_core_value_sigCD2E);
  return var_core_value_sig60CE ? [var_core_value_sig60CE] : [];
}
;
function Je(var_core_value_sigFA1B, var_core_value_sig5FEF) {
  let var_core_value_sigD48C = [...qe(var_core_value_sigFA1B)].filter(var_core_value_sig7F05 => var_core_value_sig5FEF.some(var_core_value_sigD749 => Object.prototype["hasOwnProperty"].call(var_core_value_sigD749.values, var_core_value_sig7F05)));
  if (!var_core_value_sigD48C.length) return [];
  let var_core_value_sig41E9 = {
    ...var_core_value_sigFA1B.records
  };
  var_core_value_sig5FEF.forEach(var_core_value_sig41F3 => {
    let var_core_value_sigF455 = var_core_value_sig41E9[var_core_value_sig41F3.recordId];
    var_core_value_sigF455 && (var_core_value_sig41E9[var_core_value_sig41F3.recordId] = {
      ...var_core_value_sigF455,
      'values': {
        ...var_core_value_sigF455.values,
        ...var_core_value_sig41F3.values
      }
    });
  });
  let var_core_value_sig3807 = {
      ...var_core_value_sigFA1B,
      'records': var_core_value_sig41E9
    },
    var_core_value_sig5409 = [];
  return var_core_value_sigD48C.forEach(var_core_value_sig6E78 => {
    let var_core_value_sigB3EE = Qe(var_core_value_sigFA1B, var_core_value_sig6E78),
      var_core_value_sigC50A = Qe(var_core_value_sig3807, var_core_value_sig6E78);
    for (let [var_core_value_sigCFFA, var_core_value_sig58C1] of var_core_value_sigC50A.invalidReasonByRecordId) {
      let var_core_value_sig8178 = var_core_value_sig5FEF.some(var_core_value_sigF602 => var_core_value_sigF602.recordId === var_core_value_sigCFFA && Object.prototype['hasOwnProperty'].call(var_core_value_sigF602.values, var_core_value_sig6E78));
      if (var_core_value_sigB3EE.invalidReasonByRecordId['get'](var_core_value_sigCFFA) !== var_core_value_sig58C1 || var_core_value_sig8178) throw new N(Xe(var_core_value_sig58C1));
    }
    var_core_value_sig5FEF.forEach(var_core_value_sig5090 => {
      if (!Object.prototype["hasOwnProperty"].call(var_core_value_sig5090.values, var_core_value_sig6E78)) return;
      let var_core_value_sigC368 = var_core_value_sigB3EE.parentByRecordId['get'](var_core_value_sig5090.recordId) ?? null,
        var_core_value_sigAD56 = var_core_value_sigC50A.parentByRecordId["get"](var_core_value_sig5090.recordId) ?? null;
      var_core_value_sigC368 !== var_core_value_sigAD56 && var_core_value_sig5409.push({
        'tableId': var_core_value_sigFA1B.id,
        'fieldId': var_core_value_sig6E78,
        'recordId': var_core_value_sig5090.recordId,
        'oldParentRecordId': var_core_value_sigC368,
        'parentRecordId': var_core_value_sigAD56
      });
    });
  }), var_core_value_sig5409;
}
;
function Ye(var_core_value_sig680F, var_core_value_sig2E36) {
  let var_core_value_sigBA94 = var_core_value_sig2E36.map(var_core_value_sig11D0 => var_core_value_sig11D0.id);
  if (new Set(var_core_value_sigBA94).size !== var_core_value_sigBA94.length || var_core_value_sigBA94.some(var_core_value_sigB8ED => var_core_value_sig680F.records[var_core_value_sigB8ED])) return [];
  let var_core_value_sigA847 = qe(var_core_value_sig680F),
    var_core_value_sig1AB4 = var_core_value_sigA847.length ? null : Ge(var_core_value_sig680F),
    var_core_value_sig7272 = [...var_core_value_sigA847, ...(var_core_value_sig1AB4 && var_core_value_sig2E36.some(var_core_value_sig8EAE => Object.prototype["hasOwnProperty"].call(var_core_value_sig8EAE.values, var_core_value_sig1AB4)) ? [var_core_value_sig1AB4] : [])].filter(var_core_value_sig1CDD => var_core_value_sig2E36.some(var_core_value_sigDB4A => Object.prototype['hasOwnProperty'].call(var_core_value_sigDB4A.values, var_core_value_sig1CDD)));
  if (!var_core_value_sig7272.length) return [];
  let var_core_value_sig885F = {
      ...var_core_value_sig680F,
      'records': {
        ...var_core_value_sig680F.records,
        ...Object.fromEntries(var_core_value_sig2E36.map(var_core_value_sig0DB1 => [var_core_value_sig0DB1.id, var_core_value_sig0DB1]))
      },
      'recordOrder': [...(var_core_value_sig680F.recordOrder ?? []), ...var_core_value_sig2E36.map(var_core_value_sig68A2 => var_core_value_sig68A2.id)]
    },
    var_core_value_sigB7C7 = [];
  return var_core_value_sig7272.forEach(var_core_value_sigCC17 => {
    let var_core_value_sig32AE = Qe(var_core_value_sig885F, var_core_value_sigCC17);
    var_core_value_sig2E36.forEach(var_core_value_sig6418 => {
      let var_core_value_sig1896 = var_core_value_sig32AE.invalidReasonByRecordId["get"](var_core_value_sig6418.id);
      if (var_core_value_sig1896) throw new N(Xe(var_core_value_sig1896));
      let var_core_value_sig0285 = var_core_value_sig32AE.parentByRecordId['get'](var_core_value_sig6418.id) ?? null;
      var_core_value_sig0285 && var_core_value_sigB7C7.push({
        'tableId': var_core_value_sig680F.id,
        'fieldId': var_core_value_sigCC17,
        'recordId': var_core_value_sig6418.id,
        'oldParentRecordId': null,
        'parentRecordId': var_core_value_sig0285
      });
    });
  }), var_core_value_sigB7C7;
}
;
function Xe(var_core_value_sig6934) {
  switch (var_core_value_sig6934) {
    case var_core_value_sigC76A.MissingParent:
      return "missingRecord";
    case var_core_value_sigC76A.SelfParent:
      return "selfParent";
    case var_core_value_sigC76A.Cycle:
      return "cycle";
    case var_core_value_sigC76A.MaxDepth:
      return "maxDepth";
  }
}
;
function Ze(var_core_value_sig2842, var_core_value_sigA5A3) {
  let var_core_value_sig590F = new Set(var_core_value_sigA5A3),
    var_core_value_sigECA2 = qe(var_core_value_sig2842);
  return Object.values(var_core_value_sig2842.records).flatMap(var_core_value_sigC753 => var_core_value_sig590F.has(var_core_value_sigC753.id) ? [] : Array.from(var_core_value_sigECA2).flatMap(var_core_value_sig777D => {
    let var_core_value_sig3F4C = Pe(var_core_value_sigC753.values[var_core_value_sig777D])[0] ?? null;
    return var_core_value_sig3F4C && var_core_value_sig590F.has(var_core_value_sig3F4C) ? [{
      'tableId': var_core_value_sig2842.id,
      'fieldId': var_core_value_sig777D,
      'recordId': var_core_value_sigC753.id,
      'oldParentRecordId': var_core_value_sig3F4C,
      'parentRecordId': null
    }] : [];
  }));
}
;
function Qe(var_core_value_sigCAC4, var_core_value_sig2017, var_core_value_sig49A4 = var_core_value_sigCAC4.recordOrder ?? Object.keys(var_core_value_sigCAC4.records)) {
  if (!(!var_core_value_sigCAC4.fields[var_core_value_sig2017] && var_core_value_sig2017 === Ge(var_core_value_sigCAC4)) && !P(var_core_value_sigCAC4, var_core_value_sig2017)) throw Error("[BaseHierarchy]: field \"" + var_core_value_sig2017 + "\" must be a same-table, single-value RecordLink.");
  let var_core_value_sigA166 = nt(var_core_value_sigCAC4, var_core_value_sig49A4),
    var_core_value_sigEB84 = new Map(),
    var_core_value_sig3B17 = new Map();
  for (let var_core_value_sigFFD1 of var_core_value_sigA166) {
    var var_core_value_sig7868;
    let var_core_value_sigD65A = Pe((var_core_value_sig7868 = var_core_value_sigCAC4.records[var_core_value_sigFFD1]) == null ? undefined : var_core_value_sig7868.values[var_core_value_sig2017])[0] ?? null;
    var_core_value_sigD65A ? var_core_value_sigD65A === var_core_value_sigFFD1 ? (var_core_value_sigEB84.set(var_core_value_sigFFD1, null), var_core_value_sig3B17.set(var_core_value_sigFFD1, var_core_value_sigC76A.SelfParent)) : var_core_value_sigCAC4.records[var_core_value_sigD65A] ? var_core_value_sigEB84.set(var_core_value_sigFFD1, var_core_value_sigD65A) : (var_core_value_sigEB84.set(var_core_value_sigFFD1, null), var_core_value_sig3B17.set(var_core_value_sigFFD1, var_core_value_sigC76A.MissingParent)) : var_core_value_sigEB84.set(var_core_value_sigFFD1, null);
  }
  rt(var_core_value_sigEB84, var_core_value_sig3B17, var_core_value_sigA166), it(var_core_value_sigEB84, var_core_value_sig3B17, var_core_value_sigA166);
  let var_core_value_sig9AFE = new Map(var_core_value_sigA166.map((var_core_value_sig81AE, var_core_value_sigF79F) => [var_core_value_sig81AE, var_core_value_sigF79F])),
    var_core_value_sig244E = new Map();
  for (let var_core_value_sig0E54 of var_core_value_sigA166) {
    let var_core_value_sig5A13 = var_core_value_sigEB84.get(var_core_value_sig0E54) ?? null,
      var_core_value_sigF593 = var_core_value_sig244E.get(var_core_value_sig5A13) ?? [];
    var_core_value_sigF593.push(var_core_value_sig0E54), var_core_value_sig244E.set(var_core_value_sig5A13, var_core_value_sigF593);
  }
  var_core_value_sig244E.forEach(var_core_value_sig3B171 => var_core_value_sig3B171.sort((var_core_value_sig3607, var_core_value_sigB512) => (var_core_value_sig9AFE.get(var_core_value_sig3607) ?? 0) - (var_core_value_sig9AFE.get(var_core_value_sigB512) ?? 0)));
  let var_core_value_sigD4E9 = var_core_value_sig244E.get(null) ?? [],
    var_core_value_sig969F = new Map(),
    var_core_value_sig6C52 = new Map(),
    var_core_value_sig3A44 = [],
    var_core_value_sig9631 = (var_core_value_sig6C4A, var_core_value_sig73D9) => {
      var_core_value_sig969F.set(var_core_value_sig6C4A, var_core_value_sig73D9), var_core_value_sig3A44.push(var_core_value_sig6C4A);
      let var_core_value_sigEAF8 = 0;
      for (let var_core_value_sigF2E6 of var_core_value_sig244E.get(var_core_value_sig6C4A) ?? []) var_core_value_sigEAF8 = Math.max(var_core_value_sigEAF8, 1 + var_core_value_sig9631(var_core_value_sigF2E6, var_core_value_sig73D9 + 1));
      return var_core_value_sig6C52.set(var_core_value_sig6C4A, var_core_value_sigEAF8), var_core_value_sigEAF8;
    };
  return var_core_value_sigD4E9.forEach(var_core_value_sig0455 => var_core_value_sig9631(var_core_value_sig0455, 0)), {
    'fieldId': var_core_value_sig2017,
    'parentByRecordId': var_core_value_sigEB84,
    'childrenByParentId': var_core_value_sig244E,
    'depthByRecordId': var_core_value_sig969F,
    'subtreeHeightByRecordId': var_core_value_sig6C52,
    'invalidReasonByRecordId': var_core_value_sig3B17,
    'rootRecordIds': var_core_value_sigD4E9,
    'orderedRecordIds': var_core_value_sig3A44
  };
}
;
function $e(var_core_value_sig8407, var_core_value_sig635F, var_core_value_sig79E0 = new Set(var_core_value_sig635F.map(var_core_value_sig34C8 => var_core_value_sig34C8.recordId))) {
  let var_core_value_sig1E28 = new Set(var_core_value_sig79E0);
  for (let var_core_value_sig737C of var_core_value_sig79E0) {
    let var_core_value_sigB744 = var_core_value_sig8407.parentByRecordId['get'](var_core_value_sig737C) ?? null;
    for (; var_core_value_sigB744;) var_core_value_sig1E28.add(var_core_value_sigB744), var_core_value_sigB744 = var_core_value_sig8407.parentByRecordId['get'](var_core_value_sigB744) ?? null;
  }
  let var_core_value_sigEEC3 = new Map(var_core_value_sig635F.map(var_core_value_sig5AF5 => [var_core_value_sig5AF5.recordId, var_core_value_sig5AF5])),
    var_core_value_sigFAEC = var_core_value_sig8407.orderedRecordIds['filter'](var_core_value_sig9DE4 => var_core_value_sig1E28.has(var_core_value_sig9DE4)),
    var_core_value_sig1282 = var_core_value_sigFAEC.flatMap(var_core_value_sig77FA => {
      let var_core_value_sigA4A7 = var_core_value_sigEEC3.get(var_core_value_sig77FA);
      return var_core_value_sigA4A7 ? [var_core_value_sigA4A7] : [];
    }),
    var_core_value_sig80D0 = {};
  for (let var_core_value_sigA4DF = 0; var_core_value_sigA4DF < var_core_value_sigFAEC.length; var_core_value_sigA4DF++) {
    let var_core_value_sigEAE2 = var_core_value_sigFAEC[var_core_value_sigA4DF];
    var_core_value_sig80D0[var_core_value_sigEAE2] = {
      'recordId': var_core_value_sigEAE2,
      'parentRecordId': var_core_value_sig8407.parentByRecordId["get"](var_core_value_sigEAE2) ?? null,
      'depth': var_core_value_sig8407.depthByRecordId["get"](var_core_value_sigEAE2) ?? 0,
      'directChildCount': (var_core_value_sig8407.childrenByParentId["get"](var_core_value_sigEAE2) ?? []).length,
      'subtreeHeight': var_core_value_sig8407.subtreeHeightByRecordId["get"](var_core_value_sigEAE2) ?? 0,
      'subtreeEndIndex': var_core_value_sigA4DF,
      'invalidReason': var_core_value_sig8407.invalidReasonByRecordId['get'](var_core_value_sigEAE2)
    };
  }
  let var_core_value_sig6CEE = [];
  for (let var_core_value_sigCC9D = 0; var_core_value_sigCC9D < var_core_value_sigFAEC.length; var_core_value_sigCC9D++) {
    let var_core_value_sigE68A = var_core_value_sigFAEC[var_core_value_sigCC9D],
      var_core_value_sig3E68 = var_core_value_sig80D0[var_core_value_sigE68A].depth;
    for (; var_core_value_sig6CEE.length && var_core_value_sig6CEE[var_core_value_sig6CEE.length - 1].depth >= var_core_value_sig3E68;) {
      let var_core_value_sig1BBD = var_core_value_sig6CEE.pop();
      var_core_value_sig80D0[var_core_value_sig1BBD.recordId].subtreeEndIndex = var_core_value_sigCC9D - 1;
    }
    var_core_value_sig6CEE.push({
      'recordId': var_core_value_sigE68A,
      'depth': var_core_value_sig3E68
    });
  }
  return var_core_value_sig6CEE.forEach(({
    recordId: var_core_value_sig90F5
  }) => {
    var_core_value_sig80D0[var_core_value_sig90F5].subtreeEndIndex = var_core_value_sigFAEC.length - 1;
  }), {
    'rows': var_core_value_sig1282,
    'hierarchy': {
      'fieldId': var_core_value_sig8407.fieldId,
      'rootRecordIds': var_core_value_sig8407.rootRecordIds["filter"](var_core_value_sigD2BA => var_core_value_sig1E28.has(var_core_value_sigD2BA)),
      'orderedRecordIds': var_core_value_sigFAEC,
      'nodes': var_core_value_sig80D0
    }
  };
}
;
function et(var_core_value_sig4B27, var_core_value_sig153F) {
  if (!var_core_value_sig4B27.hierarchy || !(var_core_value_sig153F != null && var_core_value_sig153F.size)) return var_core_value_sig4B27.rows;
  let var_core_value_sigC847 = [],
    var_core_value_sig114E = 0;
  for (; var_core_value_sig114E < var_core_value_sig4B27.rows["length"];) {
    let var_core_value_sigF4C5 = var_core_value_sig4B27.rows[var_core_value_sig114E];
    var_core_value_sigC847.push(var_core_value_sigF4C5);
    let var_core_value_sig5410 = var_core_value_sig4B27.hierarchy["nodes"][var_core_value_sigF4C5.recordId];
    var_core_value_sig114E = var_core_value_sig153F.has(var_core_value_sigF4C5.recordId) && var_core_value_sig5410 ? var_core_value_sig5410.subtreeEndIndex + 1 : var_core_value_sig114E + 1;
  }
  return var_core_value_sigC847;
}
;
function tt(var_core_value_sig88EA, var_core_value_sig4E97, var_core_value_sigBE44) {
  if (!var_core_value_sigBE44) return {
    'valid': true
  };
  if (var_core_value_sig4E97 === var_core_value_sigBE44) return {
    'valid': false,
    'reason': var_core_value_sigC76A.SelfParent
  };
  let var_core_value_sigE675 = var_core_value_sigBE44;
  for (; var_core_value_sigE675;) {
    if (var_core_value_sigE675 === var_core_value_sig4E97) return {
      'valid': false,
      'reason': var_core_value_sigC76A.Cycle
    };
    var_core_value_sigE675 = var_core_value_sig88EA.parentByRecordId["get"](var_core_value_sigE675) ?? null;
  }
  return (var_core_value_sig88EA.depthByRecordId["get"](var_core_value_sigBE44) ?? 0) + 1 + (var_core_value_sig88EA.subtreeHeightByRecordId["get"](var_core_value_sig4E97) ?? 0) >= 5 ? {
    'valid': false,
    'reason': var_core_value_sigC76A.MaxDepth
  } : {
    'valid': true
  };
}
;
function nt(var_core_value_sig4346, var_core_value_sigB49C) {
  let var_core_value_sigA044 = new Set(),
    var_core_value_sigD2F3 = [];
  for (let var_core_value_sigCD3A of var_core_value_sigB49C) var_core_value_sig4346.records[var_core_value_sigCD3A] && !var_core_value_sigA044.has(var_core_value_sigCD3A) && (var_core_value_sigA044.add(var_core_value_sigCD3A), var_core_value_sigD2F3.push(var_core_value_sigCD3A));
  return Object.keys(var_core_value_sig4346.records).sort().forEach(var_core_value_sig519D => {
    var_core_value_sigA044.has(var_core_value_sig519D) || var_core_value_sigD2F3.push(var_core_value_sig519D);
  }), var_core_value_sigD2F3;
}
;
function rt(var_core_value_sig27CD, var_core_value_sig8977, var_core_value_sigE931) {
  let var_core_value_sig9F9C = new Set();
  for (let var_core_value_sigC7E7 of var_core_value_sigE931) {
    if (var_core_value_sig9F9C.has(var_core_value_sigC7E7)) continue;
    let var_core_value_sig492F = [],
      var_core_value_sig8EA0 = new Map(),
      var_core_value_sigA6F6 = var_core_value_sigC7E7;
    for (; var_core_value_sigA6F6 && !var_core_value_sig9F9C.has(var_core_value_sigA6F6);) {
      let var_core_value_sigF704 = var_core_value_sig8EA0.get(var_core_value_sigA6F6);
      if (var_core_value_sigF704 != null) {
        let var_core_value_sig8061 = [...var_core_value_sig492F.slice(var_core_value_sigF704)].sort().pop();
        var_core_value_sig27CD.set(var_core_value_sig8061, null), var_core_value_sig8977.set(var_core_value_sig8061, var_core_value_sigC76A.Cycle);
        break;
      }
      var_core_value_sig8EA0.set(var_core_value_sigA6F6, var_core_value_sig492F.length), var_core_value_sig492F.push(var_core_value_sigA6F6), var_core_value_sigA6F6 = var_core_value_sig27CD.get(var_core_value_sigA6F6) ?? null;
    }
    var_core_value_sig492F.forEach(var_core_value_sigE9ED => var_core_value_sig9F9C.add(var_core_value_sigE9ED));
  }
}
;
function it(var_core_value_sig0728, var_core_value_sigDC83, var_core_value_sig56A8) {
  let var_core_value_sigF487 = new Map(),
    var_core_value_sigC62E = var_core_value_sig6E1C => {
      let var_core_value_sigFABC = var_core_value_sigF487.get(var_core_value_sig6E1C);
      if (var_core_value_sigFABC != null) return var_core_value_sigFABC;
      let var_core_value_sig413D = var_core_value_sig0728.get(var_core_value_sig6E1C) ?? null;
      if (!var_core_value_sig413D) return var_core_value_sigF487.set(var_core_value_sig6E1C, 0), 0;
      let var_core_value_sig5BCE = var_core_value_sigC62E(var_core_value_sig413D) + 1;
      return var_core_value_sig5BCE >= 5 ? (var_core_value_sig0728.set(var_core_value_sig6E1C, null), var_core_value_sigDC83.set(var_core_value_sig6E1C, var_core_value_sigC76A.MaxDepth), var_core_value_sigF487.set(var_core_value_sig6E1C, 0), 0) : (var_core_value_sigF487.set(var_core_value_sig6E1C, var_core_value_sig5BCE), var_core_value_sig5BCE);
    };
  var_core_value_sig56A8.forEach(var_core_value_sigC62E);
}
let at = 0;
function ot() {
  if (globalThis.__UNIVER_BASE_PERF__ === true) return true;
  try {
    let var_core_value_sig8EF0 = typeof location > 'u' ? '' : location.search,
      var_core_value_sig78AC = new URLSearchParams(var_core_value_sig8EF0);
    if (var_core_value_sig78AC.get("basePerf") === '1' || var_core_value_sig78AC.get("basePerf") === 'true' || var_core_value_sig78AC.get("base-perf") === '1') return true;
  } catch {}
  try {
    let var_core_value_sig4CEF = typeof localStorage > 'u' ? null : localStorage.getItem("univer.basePerf");
    return var_core_value_sig4CEF === '1' || var_core_value_sig4CEF === 'true';
  } catch {
    return false;
  }
}
;
function F(var_core_value_sigCD50, var_core_value_sig51C4, var_core_value_sigEECD) {
  if (!ot()) return var_core_value_sig51C4();
  let var_core_value_sigB655 = ct(),
    var_core_value_sigF30A = "base-perf-" + at++;
  lt(var_core_value_sigF30A + ":start");
  try {
    return var_core_value_sig51C4();
  } finally {
    let var_core_value_sigD57D = ct() - var_core_value_sigB655;
    lt(var_core_value_sigF30A + ":end"), ut(var_core_value_sigCD50, var_core_value_sigF30A + ":start", var_core_value_sigF30A + ':end'), st(var_core_value_sigCD50, var_core_value_sigD57D, var_core_value_sigEECD);
  }
}
;
function st(var_core_value_sigD81A, var_core_value_sigBE17, var_core_value_sigBB5E) {
  if (!ot()) return;
  let var_core_value_sigB440 = Math.round(var_core_value_sigBE17 * 100) / 100,
    var_core_value_sig9D0F = var_core_value_sigBB5E && Object.keys(var_core_value_sigBB5E).length ? '\x20' + JSON.stringify(var_core_value_sigBB5E) : '';
  console.info('[BasePerf]\x20' + var_core_value_sigD81A + ':\x20' + var_core_value_sigB440 + 'ms' + var_core_value_sig9D0F);
}
;
function ct() {
  return typeof performance < 'u' && typeof performance.now == 'function' ? performance.now() : Date.now();
}
;
function lt(var_core_value_sig0354) {
  try {
    if (typeof performance < 'u') {
      var var_core_value_sig12F4, var_core_value_sigDCEC;
      (var_core_value_sig12F4 = (var_core_value_sigDCEC = performance).mark) == null || var_core_value_sig12F4.call(var_core_value_sigDCEC, var_core_value_sig0354);
    }
  } catch {}
}
;
function ut(var_core_value_sigB5C8, var_core_value_sig8320, var_core_value_sig1C1B) {
  try {
    if (typeof performance < 'u') {
      var var_core_value_sig70FD, var_core_value_sig988F;
      (var_core_value_sig70FD = (var_core_value_sig988F = performance).measure) == null || var_core_value_sig70FD.call(var_core_value_sig988F, "[BasePerf] " + var_core_value_sigB5C8, var_core_value_sig8320, var_core_value_sig1C1B);
    }
  } catch {}
}
;
function I(var_core_value_sig50A1) {
  var var_core_value_sig71D2;
  return ot() ? F("IBaseCellData.ensureTableCellLayout", () => dt(var_core_value_sig50A1), {
    'tableId': var_core_value_sig50A1.id,
    'records': Object.keys(var_core_value_sig50A1.records ?? {}).length,
    'fields': var_core_value_sig50A1.fieldOrder["length"],
    'hasRecordOrder': !!((var_core_value_sig71D2 = var_core_value_sig50A1.recordOrder) != null && var_core_value_sig71D2.length)
  }) : dt(var_core_value_sig50A1);
}
;
function dt(var_core_value_sigC113) {
  var var_core_value_sig2326;
  let var_core_value_sig9007 = var_core_value_sigC113.records ?? {},
    var_core_value_sig8726 = var_core_value_sigC113.fields ?? {},
    var_core_value_sig4358 = ((var_core_value_sig2326 = var_core_value_sigC113.recordOrder) == null ? undefined : var_core_value_sig2326.filter(var_core_value_sig2CC7 => var_core_value_sig9007[var_core_value_sig2CC7])) ?? [],
    var_core_value_sig9574 = new Set(var_core_value_sig4358),
    var_core_value_sigD610 = [];
  for (let var_core_value_sig4784 of Object.values(var_core_value_sig9007)) var_core_value_sig9574.has(var_core_value_sig4784.id) || var_core_value_sigD610.push(var_core_value_sig4784);
  let var_core_value_sigAF55 = var_core_value_sigD610.length ? [...var_core_value_sig4358, ...Ft(var_core_value_sigD610)] : var_core_value_sig4358,
    var_core_value_sig7409 = var_core_value_sigC113.fieldOrder['filter'](var_core_value_sigC39E => var_core_value_sig8726[var_core_value_sigC39E]),
    var_core_value_sigD106 = {
      ...(var_core_value_sigC113.rowId ?? {})
    },
    var_core_value_sig7552 = {
      ...(var_core_value_sigC113.colId ?? {})
    },
    var_core_value_sig56D1 = {
      ...(var_core_value_sigC113.cellData ?? {})
    };
  var_core_value_sigC113.recordOrder = var_core_value_sigAF55, var_core_value_sigC113.rowIndex = {}, var_core_value_sigC113.rowId = {}, var_core_value_sigC113.colIndex = {}, var_core_value_sigC113.colId = {}, var_core_value_sigC113.cellData = {}, var_core_value_sigC113.resources = {
    ...(var_core_value_sigC113.resources ?? {})
  }, var_core_value_sigC113.resources["attachmentSets"] = {
    ...(var_core_value_sigC113.resources['attachmentSets'] ?? {})
  }, var_core_value_sigC113.resources["attachments"] = {
    ...(var_core_value_sigC113.resources["attachments"] ?? {})
  };
  let var_core_value_sig3D12 = var_core_value_sigC113.rowIndex,
    var_core_value_sig8952 = var_core_value_sigC113.rowId,
    var_core_value_sigB409 = var_core_value_sigC113.colIndex,
    var_core_value_sig3D2F = var_core_value_sigC113.colId,
    var_core_value_sigDBDA = var_core_value_sigC113.cellData;
  return var_core_value_sigAF55.forEach((var_core_value_sig16C7, var_core_value_sig7481) => {
    var_core_value_sig3D12[var_core_value_sig16C7] = var_core_value_sig7481, var_core_value_sig8952[var_core_value_sig7481] = var_core_value_sig16C7;
  }), var_core_value_sig7409.forEach((var_core_value_sig08A3, var_core_value_sig77D8) => {
    var_core_value_sigB409[var_core_value_sig08A3] = var_core_value_sig77D8, var_core_value_sig3D2F[var_core_value_sig77D8] = var_core_value_sig08A3;
  }), Object.entries(var_core_value_sig56D1).forEach(([var_core_value_sig78A3, var_core_value_sig649B]) => {
    let var_core_value_sig6256 = Number(var_core_value_sig78A3),
      var_core_value_sigE7A6 = var_core_value_sigD106[var_core_value_sig6256] ?? var_core_value_sigAF55[var_core_value_sig6256],
      var_core_value_sigB505 = var_core_value_sigE7A6 ? var_core_value_sig3D12[var_core_value_sigE7A6] : undefined;
    var_core_value_sigB505 != null && (var_core_value_sigDBDA[var_core_value_sigB505] = {
      ...(var_core_value_sigDBDA[var_core_value_sigB505] ?? {})
    }, Object.entries(var_core_value_sig649B ?? {}).forEach(([var_core_value_sigCDDA, var_core_value_sigE243]) => {
      let var_core_value_sig74A8 = Number(var_core_value_sigCDDA),
        var_core_value_sig21B2 = var_core_value_sig7552[var_core_value_sig74A8] ?? var_core_value_sig7409[var_core_value_sig74A8],
        var_core_value_sigDE08 = var_core_value_sig21B2 ? var_core_value_sigB409[var_core_value_sig21B2] : undefined;
      var_core_value_sigDE08 != null && (var_core_value_sigDBDA[var_core_value_sigB505][var_core_value_sigDE08] = yt(var_core_value_sigE243));
    }));
  }), Object.values(var_core_value_sig9007).forEach(var_core_value_sig7428 => {
    let var_core_value_sig1DCE = var_core_value_sig3D12[var_core_value_sig7428.id];
    var_core_value_sig1DCE != null && (var_core_value_sig7428.values = {
      ...(var_core_value_sig7428.values ?? {}),
      [var_core_value_sigED20]: var_core_value_sig7428.id
    }, var_core_value_sigDBDA[var_core_value_sig1DCE] = {
      ...(var_core_value_sigDBDA[var_core_value_sig1DCE] ?? {}),
      0: {
        'v': var_core_value_sig7428.id,
        't': var_core_value_sig590D.STRING
      }
    }, Object.entries(var_core_value_sig7428.values ?? {}).forEach(([var_core_value_sigACCB, var_core_value_sig7F33]) => {
      let var_core_value_sig0C53 = var_core_value_sig8726[var_core_value_sigACCB];
      (var_core_value_sig0C53 == null ? undefined : var_core_value_sig0C53.type) === var_core_value_sig06E6.Attachment && wt(var_core_value_sigC113, var_core_value_sig7428.id, var_core_value_sigACCB, var_core_value_sig7F33);
      let var_core_value_sigEA04 = var_core_value_sigB409[var_core_value_sigACCB];
      if (var_core_value_sigEA04 == null) return;
      let var_core_value_sig7A62 = var_core_value_sigDBDA[var_core_value_sig1DCE][var_core_value_sigEA04];
      if (var_core_value_sig7A62 != null) {
        Ot(var_core_value_sig7A62, var_core_value_sig0C53, var_core_value_sig7F33) && (var_core_value_sigDBDA[var_core_value_sig1DCE][var_core_value_sigEA04] = vt(var_core_value_sig7F33, var_core_value_sig0C53));
        return;
      }
      var_core_value_sigDBDA[var_core_value_sig1DCE][var_core_value_sigEA04] = vt(var_core_value_sig7F33, var_core_value_sig0C53);
    }));
  }), var_core_value_sigC113;
}
;
function ft(var_core_value_sig1EFA) {
  return I(var_core_value_sig1EFA), Object.entries(var_core_value_sig1EFA.rowId ?? {}).forEach(([var_core_value_sig0567, var_core_value_sigA7F3]) => {
    var var_core_value_sigEACD;
    let var_core_value_sig901E = Number(var_core_value_sig0567),
      var_core_value_sigF7BB = var_core_value_sig1EFA.records[var_core_value_sigA7F3];
    var_core_value_sigF7BB && (var_core_value_sigF7BB.values = {
      ...(var_core_value_sigF7BB.values ?? {})
    }, Object.entries(((var_core_value_sigEACD = var_core_value_sig1EFA.cellData) == null ? undefined : var_core_value_sigEACD[var_core_value_sig901E]) ?? {}).forEach(([var_core_value_sig8109, var_core_value_sig7565]) => {
      var var_core_value_sigD4FB;
      let var_core_value_sig3E71 = (var_core_value_sigD4FB = var_core_value_sig1EFA.colId) == null ? undefined : var_core_value_sigD4FB[Number(var_core_value_sig8109)];
      var_core_value_sig3E71 === var_core_value_sigED20 ? var_core_value_sigF7BB.values[var_core_value_sigED20] = var_core_value_sigF7BB.id : var_core_value_sig3E71 && (var_core_value_sigF7BB.values[var_core_value_sig3E71] = bt(var_core_value_sig7565, var_core_value_sig1EFA.fields[var_core_value_sig3E71], var_core_value_sig1EFA, var_core_value_sigA7F3));
    }));
  }), var_core_value_sig1EFA;
}
;
function pt(var_core_value_sig7CF4, var_core_value_sigE956) {
  for (let {
    row: var_core_value_sigFA38,
    col: var_core_value_sig102B
  } of var_core_value_sigE956) {
    var var_core_value_sig189D, var_core_value_sigE26F, var_core_value_sig8212;
    let var_core_value_sig01B3 = (var_core_value_sig189D = var_core_value_sig7CF4.rowId) == null ? undefined : var_core_value_sig189D[var_core_value_sigFA38],
      var_core_value_sig7442 = (var_core_value_sigE26F = var_core_value_sig7CF4.colId) == null ? undefined : var_core_value_sigE26F[var_core_value_sig102B],
      var_core_value_sigDF87 = var_core_value_sig01B3 ? var_core_value_sig7CF4.records[var_core_value_sig01B3] : undefined;
    if (!var_core_value_sigDF87 || !var_core_value_sig7442) continue;
    if (var_core_value_sig7442 === var_core_value_sigED20) {
      var_core_value_sigDF87.values[var_core_value_sigED20] = var_core_value_sigDF87.id;
      continue;
    }
    let var_core_value_sig9EE0 = (var_core_value_sig8212 = var_core_value_sig7CF4.cellData) == null || (var_core_value_sig8212 = var_core_value_sig8212[var_core_value_sigFA38]) == null ? undefined : var_core_value_sig8212[var_core_value_sig102B];
    var_core_value_sig9EE0 == null && !Object.prototype["hasOwnProperty"].call(var_core_value_sigDF87.values ?? {}, var_core_value_sig7442) || (var_core_value_sigDF87.values = {
      ...(var_core_value_sigDF87.values ?? {})
    }, var_core_value_sigDF87.values[var_core_value_sig7442] = bt(var_core_value_sig9EE0, var_core_value_sig7CF4.fields[var_core_value_sig7442], var_core_value_sig7CF4, var_core_value_sig01B3));
  }
  return var_core_value_sig7CF4;
}
;
function mt(var_core_value_sig9A60, var_core_value_sig5EF5, var_core_value_sig5324) {
  var var_core_value_sig0130, var_core_value_sig5838, var_core_value_sigB9FE, var_core_value_sig41A5, var_core_value_sig6D3D, var_core_value_sigB191;
  let var_core_value_sig949D = (var_core_value_sig0130 = var_core_value_sig9A60.rowIndex) == null ? undefined : var_core_value_sig0130[var_core_value_sig5EF5],
    var_core_value_sig4113 = (var_core_value_sig5838 = var_core_value_sig9A60.colIndex) == null ? undefined : var_core_value_sig5838[var_core_value_sig5324];
  if (var_core_value_sig949D != null && var_core_value_sig4113 != null && ((var_core_value_sigB9FE = var_core_value_sig9A60.rowId) == null ? undefined : var_core_value_sigB9FE[var_core_value_sig949D]) === var_core_value_sig5EF5 && ((var_core_value_sig41A5 = var_core_value_sig9A60.colId) == null ? undefined : var_core_value_sig41A5[var_core_value_sig4113]) === var_core_value_sig5324) return {
    'row': var_core_value_sig949D,
    'col': var_core_value_sig4113
  };
  let var_core_value_sigEC12 = I(var_core_value_sig9A60),
    var_core_value_sigC932 = (var_core_value_sig6D3D = var_core_value_sigEC12.rowIndex) == null ? undefined : var_core_value_sig6D3D[var_core_value_sig5EF5],
    var_core_value_sigDE39 = (var_core_value_sigB191 = var_core_value_sigEC12.colIndex) == null ? undefined : var_core_value_sigB191[var_core_value_sig5324];
  return var_core_value_sigC932 == null || var_core_value_sigDE39 == null ? null : {
    'row': var_core_value_sigC932,
    'col': var_core_value_sigDE39
  };
}
;
function ht(var_core_value_sig1529, var_core_value_sigAFD8, var_core_value_sig6017) {
  var var_core_value_sigC66C;
  let var_core_value_sigC5AC = mt(var_core_value_sig1529, var_core_value_sigAFD8, var_core_value_sig6017);
  if (var_core_value_sigC5AC) return (var_core_value_sigC66C = var_core_value_sig1529.cellData) == null || (var_core_value_sigC66C = var_core_value_sigC66C[var_core_value_sigC5AC.row]) == null ? undefined : var_core_value_sigC66C[var_core_value_sigC5AC.col];
}
;
function gt(var_core_value_sig5880, var_core_value_sigF7E2, var_core_value_sigDEEA) {
  var var_core_value_sig49D1;
  let var_core_value_sigEDEC = ht(var_core_value_sig5880, var_core_value_sigF7E2, var_core_value_sigDEEA),
    var_core_value_sig4F7B = var_core_value_sig5880.fields[var_core_value_sigDEEA];
  if ((var_core_value_sig4F7B == null ? undefined : var_core_value_sig4F7B.type) === var_core_value_sig06E6.Attachment) {
    var var_core_value_sig8269;
    return Tt(var_core_value_sig5880, var_core_value_sigF7E2, var_core_value_sigDEEA) ?? Et((var_core_value_sig8269 = var_core_value_sig5880.records[var_core_value_sigF7E2]) == null || (var_core_value_sig8269 = var_core_value_sig8269.values) == null ? undefined : var_core_value_sig8269[var_core_value_sigDEEA]);
  }
  if (kt(var_core_value_sig4F7B) || At(var_core_value_sig4F7B) || (var_core_value_sig4F7B == null ? undefined : var_core_value_sig4F7B.type) === var_core_value_sig06E6.Link) {
    var var_core_value_sigB092;
    let var_core_value_sigA7DB = (var_core_value_sigB092 = var_core_value_sig5880.records[var_core_value_sigF7E2]) == null || (var_core_value_sigB092 = var_core_value_sigB092.values) == null ? undefined : var_core_value_sigB092[var_core_value_sigDEEA];
    return var_core_value_sigA7DB != null && var_core_value_sigA7DB !== '' ? Dt(var_core_value_sigA7DB, var_core_value_sig4F7B) : bt(var_core_value_sigEDEC, var_core_value_sig4F7B, var_core_value_sig5880, var_core_value_sigF7E2);
  }
  return var_core_value_sigEDEC && Object.prototype["hasOwnProperty"].call(var_core_value_sigEDEC, 'v') ? var_core_value_sigEDEC.v ?? null : ((var_core_value_sig49D1 = var_core_value_sig5880.records[var_core_value_sigF7E2]) == null || (var_core_value_sig49D1 = var_core_value_sig49D1.values) == null ? undefined : var_core_value_sig49D1[var_core_value_sigDEEA]) ?? null;
}
;
function _t(var_core_value_sigC04F, var_core_value_sig8B16, var_core_value_sig9640) {
  var var_core_value_sig34AB;
  let var_core_value_sig0BE5 = ht(var_core_value_sigC04F, var_core_value_sig8B16, var_core_value_sig9640);
  if (var_core_value_sig0BE5 && Object.prototype["hasOwnProperty"].call(var_core_value_sig0BE5, 'v')) return var_core_value_sig0BE5.v ?? null;
  let var_core_value_sig2F9D = var_core_value_sigC04F.fields[var_core_value_sig9640];
  return vt(((var_core_value_sig34AB = var_core_value_sigC04F.records[var_core_value_sig8B16]) == null || (var_core_value_sig34AB = var_core_value_sig34AB.values) == null ? undefined : var_core_value_sig34AB[var_core_value_sig9640]) ?? null, var_core_value_sig2F9D).v ?? null;
}
;
function vt(var_core_value_sig9511, var_core_value_sigAFDD) {
  if (St(var_core_value_sig9511)) return (var_core_value_sigAFDD == null ? undefined : var_core_value_sigAFDD.type) === var_core_value_sig06E6.Attachment ? {
    ...var_core_value_sig9511,
    'v': '',
    't': var_core_value_sig590D.STRING
  } : yt(var_core_value_sig9511);
  if ((var_core_value_sigAFDD == null ? undefined : var_core_value_sigAFDD.type) === var_core_value_sig06E6.Attachment) return {
    'v': '',
    't': var_core_value_sig590D.STRING
  };
  if (At(var_core_value_sigAFDD)) {
    let var_core_value_sig5EEE = jt(var_core_value_sig9511);
    return {
      'v': var_core_value_sig5EEE,
      't': Pt(var_core_value_sig5EEE)
    };
  }
  if (kt(var_core_value_sigAFDD)) return {
    'v': Mt(var_core_value_sig9511).join(',\x20'),
    't': var_core_value_sig590D.STRING
  };
  if ((var_core_value_sigAFDD == null ? undefined : var_core_value_sigAFDD.type) === var_core_value_sig06E6.Link && var_core_value_sig9511 && typeof var_core_value_sig9511 == "object" && !Array.isArray(var_core_value_sig9511)) {
    let var_core_value_sig65B4 = var_core_value_sig9511;
    return {
      'v': String(var_core_value_sig65B4.text ?? var_core_value_sig65B4.url ?? ''),
      't': var_core_value_sig590D.STRING
    };
  }
  return var_core_value_sig9511 === null || typeof var_core_value_sig9511 == "string" || typeof var_core_value_sig9511 == "number" || typeof var_core_value_sig9511 == 'boolean' ? {
    'v': var_core_value_sig9511,
    't': Pt(var_core_value_sig9511)
  } : {
    'v': null,
    't': null
  };
}
;
function yt(var_core_value_sig431B) {
  let var_core_value_sig3073 = It(var_core_value_sig431B.t, var_core_value_sig431B.v);
  if (var_core_value_sig3073 === undefined) {
    let {
      t: var_core_value_sigF98E,
      ...var_core_value_sigA470
    } = var_core_value_sig431B;
    return var_core_value_sigA470;
  }
  return {
    ...var_core_value_sig431B,
    't': var_core_value_sig3073
  };
}
;
function bt(var_core_value_sig4C99, var_core_value_sigDDD2, var_core_value_sig6D5F, var_core_value_sigB80D) {
  if (!var_core_value_sig4C99) return null;
  if ((var_core_value_sigDDD2 == null ? undefined : var_core_value_sigDDD2.type) === var_core_value_sig06E6.Attachment) return var_core_value_sig6D5F && var_core_value_sigB80D ? Tt(var_core_value_sig6D5F, var_core_value_sigB80D, var_core_value_sigDDD2.id) ?? [] : [];
  if (kt(var_core_value_sigDDD2)) return Mt(var_core_value_sig4C99.v);
  if ((var_core_value_sigDDD2 == null ? undefined : var_core_value_sigDDD2.type) === var_core_value_sig06E6.Link && var_core_value_sig6D5F && var_core_value_sigB80D) {
    var var_core_value_sigE0A2;
    let var_core_value_sig19A1 = (var_core_value_sigE0A2 = var_core_value_sig6D5F.records[var_core_value_sigB80D]) == null || (var_core_value_sigE0A2 = var_core_value_sigE0A2.values) == null ? undefined : var_core_value_sigE0A2[var_core_value_sigDDD2.id];
    if (var_core_value_sig19A1 && typeof var_core_value_sig19A1 == "object" && !Array.isArray(var_core_value_sig19A1)) return var_core_value_sig19A1;
  }
  return Object.prototype["hasOwnProperty"].call(var_core_value_sig4C99, 'v') ? var_core_value_sig4C99.v ?? null : null;
}
;
function xt(var_core_value_sig8F71, var_core_value_sig9016, var_core_value_sigB043, var_core_value_sig554B, var_core_value_sig33F0) {
  return (var_core_value_sigB043 == null ? undefined : var_core_value_sigB043.type) === var_core_value_sig06E6.Attachment ? Et(var_core_value_sig8F71) : At(var_core_value_sigB043) ? jt(var_core_value_sig8F71) : kt(var_core_value_sigB043) ? Mt(var_core_value_sig8F71) : (var_core_value_sigB043 == null ? undefined : var_core_value_sigB043.type) === var_core_value_sig06E6.Link && (var_core_value_sig8F71 == null || var_core_value_sig8F71 === '') ? null : (var_core_value_sigB043 == null ? undefined : var_core_value_sigB043.type) === var_core_value_sig06E6.Link && var_core_value_sig8F71 && typeof var_core_value_sig8F71 == "object" && !Array.isArray(var_core_value_sig8F71) && !St(var_core_value_sig8F71) ? var_core_value_sig8F71 : bt(var_core_value_sig9016, var_core_value_sigB043, var_core_value_sig554B, var_core_value_sig33F0);
}
;
function St(var_core_value_sigC9BF) {
  return !!var_core_value_sigC9BF && typeof var_core_value_sigC9BF == "object" && (Object.prototype["hasOwnProperty"].call(var_core_value_sigC9BF, 'v') || Object.prototype["hasOwnProperty"].call(var_core_value_sigC9BF, 't') || Object.prototype["hasOwnProperty"].call(var_core_value_sigC9BF, 'p') || Object.prototype["hasOwnProperty"].call(var_core_value_sigC9BF, 'f') || Object.prototype["hasOwnProperty"].call(var_core_value_sigC9BF, 'si'));
}
;
function Ct(var_core_value_sigE1AD, var_core_value_sig90FF) {
  return var_core_value_sigE1AD + '\x1f' + var_core_value_sig90FF;
}
;
function wt(var_core_value_sigA7F6, var_core_value_sig5A0F, var_core_value_sigCDF5, var_core_value_sig3802) {
  let var_core_value_sigB642 = Et(var_core_value_sig3802);
  var_core_value_sigA7F6.resources = {
    ...(var_core_value_sigA7F6.resources ?? {})
  }, var_core_value_sigA7F6.resources["attachmentSets"] = {
    ...(var_core_value_sigA7F6.resources["attachmentSets"] ?? {})
  }, var_core_value_sigA7F6.resources["attachments"] = {
    ...(var_core_value_sigA7F6.resources['attachments'] ?? {})
  };
  let var_core_value_sig9026 = Ct(var_core_value_sigCDF5, var_core_value_sig5A0F),
    var_core_value_sigDCD6 = [];
  for (let var_core_value_sig81F7 = 0; var_core_value_sig81F7 < var_core_value_sigB642.length; var_core_value_sig81F7++) {
    if (!(var_core_value_sig81F7 in var_core_value_sigB642)) continue;
    let var_core_value_sigF051 = var_core_value_sigB642[var_core_value_sig81F7],
      var_core_value_sig0B45 = String(var_core_value_sigF051.id ?? var_core_value_sig9026 + '\x1f' + var_core_value_sig81F7),
      var_core_value_sig36F8 = {
        ...var_core_value_sigF051,
        'id': var_core_value_sig0B45
      };
    var_core_value_sigA7F6.resources["attachments"][var_core_value_sig0B45] = var_core_value_sig36F8, var_core_value_sigDCD6.push(var_core_value_sig0B45);
  }
  var_core_value_sigA7F6.resources["attachmentSets"][var_core_value_sig9026] = var_core_value_sigDCD6;
}
;
function Tt(var_core_value_sig048B, var_core_value_sig1334, var_core_value_sig2605) {
  var var_core_value_sig5F20;
  let var_core_value_sig019C = Ct(var_core_value_sig2605, var_core_value_sig1334),
    var_core_value_sigB296 = (var_core_value_sig5F20 = var_core_value_sig048B.resources) == null || (var_core_value_sig5F20 = var_core_value_sig5F20.attachmentSets) == null ? undefined : var_core_value_sig5F20[var_core_value_sig019C];
  if (!var_core_value_sigB296) return null;
  let var_core_value_sig7949 = [];
  for (let var_core_value_sigBE51 = 0; var_core_value_sigBE51 < var_core_value_sigB296.length; var_core_value_sigBE51++) {
    var var_core_value_sig2DD9;
    if (!(var_core_value_sigBE51 in var_core_value_sigB296)) continue;
    let var_core_value_sig03E1 = (var_core_value_sig2DD9 = var_core_value_sig048B.resources) == null || (var_core_value_sig2DD9 = var_core_value_sig2DD9.attachments) == null ? undefined : var_core_value_sig2DD9[var_core_value_sigB296[var_core_value_sigBE51]];
    var_core_value_sig03E1 && var_core_value_sig7949.push({
      ...var_core_value_sig03E1
    });
  }
  return var_core_value_sig7949;
}
;
function Et(var_core_value_sigCD501) {
  if (var_core_value_sigCD501 == null || var_core_value_sigCD501 === '' || St(var_core_value_sigCD501) && !('id' in var_core_value_sigCD501) && !('name' in var_core_value_sigCD501)) return [];
  let var_core_value_sigD362 = Array.isArray(var_core_value_sigCD501) ? var_core_value_sigCD501 : [var_core_value_sigCD501],
    var_core_value_sigC433 = [];
  for (let var_core_value_sigAAD1 = 0; var_core_value_sigAAD1 < var_core_value_sigD362.length; var_core_value_sigAAD1++) {
    if (!(var_core_value_sigAAD1 in var_core_value_sigD362)) continue;
    let var_core_value_sigBB57 = var_core_value_sigD362[var_core_value_sigAAD1],
      var_core_value_sig7C4A = var_core_value_sigBB57 && typeof var_core_value_sigBB57 == 'object' ? {
        ...var_core_value_sigBB57
      } : {
        'id': "attachment-" + var_core_value_sigAAD1,
        'name': String(var_core_value_sigBB57)
      };
    Object.keys(var_core_value_sig7C4A).length > 0 && var_core_value_sigC433.push(var_core_value_sig7C4A);
  }
  return var_core_value_sigC433;
}
;
function Dt(var_core_value_sigF543, var_core_value_sig0806) {
  return (var_core_value_sig0806 == null ? undefined : var_core_value_sig0806.type) === var_core_value_sig06E6.Attachment ? Et(var_core_value_sigF543) : At(var_core_value_sig0806) ? jt(var_core_value_sigF543) : kt(var_core_value_sig0806) ? Mt(var_core_value_sigF543) : var_core_value_sigF543;
}
;
function Ot(var_core_value_sigE224, var_core_value_sig773E, var_core_value_sig83A7) {
  return (var_core_value_sig773E == null ? undefined : var_core_value_sig773E.type) === var_core_value_sig06E6.Attachment ? var_core_value_sigE224.v !== '' : At(var_core_value_sig773E) ? var_core_value_sigE224.v !== jt(var_core_value_sig83A7) : kt(var_core_value_sig773E) ? Array.isArray(var_core_value_sig83A7) && (var_core_value_sigE224.v == null || var_core_value_sigE224.v === '') : false;
}
;
function kt(var_core_value_sigFE18) {
  return (var_core_value_sigFE18 == null ? undefined : var_core_value_sigFE18.type) === var_core_value_sig06E6.MultiSelect || (var_core_value_sigFE18 == null ? undefined : var_core_value_sigFE18.type) === var_core_value_sig06E6.Group || (var_core_value_sigFE18 == null ? undefined : var_core_value_sigFE18.type) === var_core_value_sig06E6.Person && var_core_value_sigFE18.config["allowMultiple"] === true;
}
;
function At(var_core_value_sig816B) {
  return (var_core_value_sig816B == null ? undefined : var_core_value_sig816B.type) === var_core_value_sig06E6.Person && var_core_value_sig816B.config["allowMultiple"] !== true;
}
;
function jt(var_core_value_sigA89B) {
  let var_core_value_sig5020 = St(var_core_value_sigA89B) ? var_core_value_sigA89B.v : var_core_value_sigA89B,
    var_core_value_sig8FB1 = Array.isArray(var_core_value_sig5020) ? var_core_value_sig5020[0] : var_core_value_sig5020;
  return var_core_value_sig8FB1 == null || var_core_value_sig8FB1 === '' ? null : String(var_core_value_sig8FB1);
}
;
function Mt(var_core_value_sig3D4B) {
  if (var_core_value_sig3D4B == null || var_core_value_sig3D4B === '') return [];
  let var_core_value_sigCD77 = [];
  if (Array.isArray(var_core_value_sig3D4B)) {
    for (let var_core_value_sigE799 = 0; var_core_value_sigE799 < var_core_value_sig3D4B.length; var_core_value_sigE799++) {
      if (!(var_core_value_sigE799 in var_core_value_sig3D4B)) continue;
      let var_core_value_sigB577 = Nt(var_core_value_sig3D4B[var_core_value_sigE799]);
      var_core_value_sigB577 && var_core_value_sigCD77.push(var_core_value_sigB577);
    }
    return var_core_value_sigCD77;
  }
  for (let var_core_value_sigBC1A of String(var_core_value_sig3D4B).split(',')) {
    let var_core_value_sigB601 = var_core_value_sigBC1A.trim();
    var_core_value_sigB601 && var_core_value_sigCD77.push(var_core_value_sigB601);
  }
  return var_core_value_sigCD77;
}
;
function Nt(var_core_value_sig9F28) {
  if (var_core_value_sig9F28 == null) return '';
  if (typeof var_core_value_sig9F28 == "string" || typeof var_core_value_sig9F28 == "number" || typeof var_core_value_sig9F28 == "boolean") return String(var_core_value_sig9F28);
  if (typeof var_core_value_sig9F28 == "object") {
    let var_core_value_sig3F3A = var_core_value_sig9F28;
    return String(var_core_value_sig3F3A.id ?? var_core_value_sig3F3A.name ?? var_core_value_sig3F3A.text ?? '');
  }
  return String(var_core_value_sig9F28);
}
;
function Pt(var_core_value_sig8A50) {
  return var_core_value_sig8A50 == null ? null : typeof var_core_value_sig8A50 == "number" ? var_core_value_sig590D.NUMBER : typeof var_core_value_sig8A50 == "boolean" ? var_core_value_sig590D.BOOLEAN : var_core_value_sig590D.STRING;
}
;
function Ft(var_core_value_sig8AF9) {
  var_core_value_sig8AF9.sort((var_core_value_sigA984, var_core_value_sigA504) => var_core_value_sigA984.orderKey["localeCompare"](var_core_value_sigA504.orderKey));
  let var_core_value_sigCF44 = [];
  for (let var_core_value_sig05FF of var_core_value_sig8AF9) var_core_value_sigCF44.push(var_core_value_sig05FF.id);
  return var_core_value_sigCF44;
}
;
function It(var_core_value_sig020B, var_core_value_sig091A) {
  return var_core_value_sig020B === var_core_value_sig590D.STRING || var_core_value_sig020B === var_core_value_sig590D.NUMBER || var_core_value_sig020B === var_core_value_sig590D.BOOLEAN || var_core_value_sig020B === var_core_value_sig590D.FORCE_STRING || var_core_value_sig020B == null ? var_core_value_sig020B : Pt(var_core_value_sig091A ?? null);
}
;
function L(var_core_value_sigC45A) {
  let var_core_value_sig8A05 = null;
  for (let var_core_value_sigFBF0 of var_core_value_sigC45A) var_core_value_sig8A05 = var_core_value_sig8A05 === null ? var_core_value_sigFBF0 : var_core_value_sig71B3.type["compose"](var_core_value_sig8A05, var_core_value_sigFBF0);
  return var_core_value_sig8A05;
}
var R = class e {
  static tryMaterializeSnapshot(var_core_value_sig2F95, var_core_value_sigF0E1) {
    let var_core_value_sig2D8D = [];
    for (let var_core_value_sig8B71 of var_core_value_sigF0E1) {
      let var_core_value_sig9572 = Lt(var_core_value_sig8B71);
      if (!var_core_value_sig9572 || var_core_value_sig9572.unitId !== var_core_value_sig2F95.id) return null;
      var_core_value_sig2D8D.push(var_core_value_sig9572.op);
    }
    try {
      let var_core_value_sigAEFB = L(var_core_value_sig2D8D);
      return var_core_value_sigAEFB === null ? var_core_value_sig2F95 : new e().applyOp(var_core_value_sig2F95, var_core_value_sigAEFB);
    } catch {
      return null;
    }
  }
  applyOp(var_core_value_sigE5A6, var_core_value_sigF449) {
    let var_core_value_sig38C5 = this.getAffectedRanges(var_core_value_sigF449),
      var_core_value_sigC87D = F("BaseJson1.cloneForOp", () => qt(var_core_value_sigE5A6, var_core_value_sigF449), {
        'invalidations': var_core_value_sig38C5.length
      }),
      var_core_value_sigCCDC = F("BaseJson1.json1Apply", () => var_core_value_sig71B3.type["apply"](var_core_value_sigC87D, var_core_value_sigF449), {
        'invalidations': var_core_value_sig38C5.length
      }),
      var_core_value_sigC310 = zt(var_core_value_sigCCDC, var_core_value_sig38C5);
    return F("BaseJson1.syncCellInvalidations", () => Rt(var_core_value_sigCCDC, var_core_value_sig38C5), {
      'invalidations': var_core_value_sig38C5.length
    }) ? (Bt(var_core_value_sigCCDC, var_core_value_sigC310), var_core_value_sigCCDC) : (F("BaseJson1.normalizeTables", () => {
      this._getTablesToNormalize(var_core_value_sigCCDC, var_core_value_sig38C5).forEach(var_core_value_sigD873 => {
        ft(var_core_value_sigD873);
      });
    }, {
      'invalidations': var_core_value_sig38C5.length
    }), Bt(var_core_value_sigCCDC, var_core_value_sigC310), var_core_value_sigCCDC);
  }
  invertOp(var_core_value_sigA4E8, var_core_value_sigDC07) {
    return var_core_value_sig71B3.type["invertWithDoc"](var_core_value_sigDC07, var_core_value_sigA4E8);
  }
  getAffectedRanges(var_core_value_sig3474) {
    let var_core_value_sig4E80 = Wt(var_core_value_sig3474);
    return var_core_value_sig4E80.length ? Gt(var_core_value_sig4E80.flatMap(var_core_value_sig826B => this.getAffectedRanges(var_core_value_sig826B))) : Vt(var_core_value_sig3474);
  }
  _getTablesToNormalize(var_core_value_sigD23B, var_core_value_sig2B2A) {
    let var_core_value_sig0B5C = var_core_value_sig2B2A.filter(var_core_value_sigCF89 => var_core_value_sigCF89.reason !== 'view');
    return var_core_value_sig0B5C.length ? var_core_value_sig0B5C.some(var_core_value_sig00CB => !var_core_value_sig00CB.tableId) ? Object.values(var_core_value_sigD23B.tables ?? {}) : Array.from(new Set(var_core_value_sig0B5C.map(var_core_value_sig77EE => var_core_value_sig77EE.tableId))).flatMap(var_core_value_sig9F76 => {
      var var_core_value_sigB008;
      let var_core_value_sig8721 = (var_core_value_sigB008 = var_core_value_sigD23B.tables) == null ? undefined : var_core_value_sigB008[var_core_value_sig9F76];
      return var_core_value_sig8721 ? [var_core_value_sig8721] : [];
    }) : [];
  }
};
function Lt(var_core_value_sig431F) {
  let var_core_value_sig855C = var_core_value_sig431F.params;
  return var_core_value_sig431F.id !== 'base.mutation.apply-base-json1' || typeof var_core_value_sig855C != "object" || !var_core_value_sig855C || !("unitId" in var_core_value_sig855C) || typeof var_core_value_sig855C.unitId != "string" || !('op' in var_core_value_sig855C) || !Array.isArray(var_core_value_sig855C.op) ? null : {
    'unitId': var_core_value_sig855C.unitId,
    'op': var_core_value_sig855C.op
  };
}
;
function Rt(var_core_value_sig222E, var_core_value_sig3A07) {
  if (!var_core_value_sig3A07.length || var_core_value_sig3A07.some(var_core_value_sig7D42 => var_core_value_sig7D42.reason !== 'cell')) return false;
  let var_core_value_sigE7EB = new Map();
  for (let var_core_value_sig8FDE of var_core_value_sig3A07) {
    if (!var_core_value_sig8FDE.tableId || var_core_value_sig8FDE.row == null || var_core_value_sig8FDE.column == null) continue;
    let var_core_value_sig08BA = var_core_value_sigE7EB.get(var_core_value_sig8FDE.tableId) ?? [];
    var_core_value_sig08BA.push({
      'row': var_core_value_sig8FDE.row,
      'col': var_core_value_sig8FDE.column
    }), var_core_value_sigE7EB.set(var_core_value_sig8FDE.tableId, var_core_value_sig08BA);
  }
  return var_core_value_sigE7EB.forEach((var_core_value_sig78E6, var_core_value_sig541F) => {
    var var_core_value_sig417B;
    let var_core_value_sigAA90 = (var_core_value_sig417B = var_core_value_sig222E.tables) == null ? undefined : var_core_value_sig417B[var_core_value_sig541F];
    var_core_value_sigAA90 && pt(var_core_value_sigAA90, var_core_value_sig78E6);
  }), true;
}
;
function zt(var_core_value_sig6125, var_core_value_sig5781) {
  let var_core_value_sig13AB = new Set();
  return var_core_value_sig5781.flatMap(var_core_value_sigE92D => {
    var var_core_value_sig9940;
    if (!var_core_value_sigE92D.tableId || !var_core_value_sigE92D.recordId || !var_core_value_sigE92D.fieldId) return [];
    let var_core_value_sig682D = var_core_value_sigE92D.tableId + '\x1f' + var_core_value_sigE92D.recordId + '\x1f' + var_core_value_sigE92D.fieldId;
    if (var_core_value_sig13AB.has(var_core_value_sig682D)) return [];
    var_core_value_sig13AB.add(var_core_value_sig682D);
    let var_core_value_sig1435 = (var_core_value_sig9940 = var_core_value_sig6125.tables[var_core_value_sigE92D.tableId]) == null || (var_core_value_sig9940 = var_core_value_sig9940.records[var_core_value_sigE92D.recordId]) == null ? undefined : var_core_value_sig9940.values;
    return var_core_value_sig1435 ? [{
      'tableId': var_core_value_sigE92D.tableId,
      'recordId': var_core_value_sigE92D.recordId,
      'fieldId': var_core_value_sigE92D.fieldId,
      'exists': Object.prototype["hasOwnProperty"].call(var_core_value_sig1435, var_core_value_sigE92D.fieldId),
      'value': var_core_value_sig1435[var_core_value_sigE92D.fieldId]
    }] : [];
  });
}
;
function Bt(var_core_value_sig7A4A, var_core_value_sigB7E2) {
  var_core_value_sigB7E2.forEach(var_core_value_sig4082 => {
    var var_core_value_sigC049;
    let var_core_value_sigE5C3 = (var_core_value_sigC049 = var_core_value_sig7A4A.tables[var_core_value_sig4082.tableId]) == null || (var_core_value_sigC049 = var_core_value_sigC049.records[var_core_value_sig4082.recordId]) == null ? undefined : var_core_value_sigC049.values;
    var_core_value_sigE5C3 && (var_core_value_sig4082.exists ? var_core_value_sigE5C3[var_core_value_sig4082.fieldId] = var_core_value_sig4082.value : delete var_core_value_sigE5C3[var_core_value_sig4082.fieldId]);
  });
}
;
function Vt(var_core_value_sigD477) {
  if (!Array.isArray(var_core_value_sigD477) || var_core_value_sigD477.length < 2) return [{
    'tableId': '',
    'reason': "unknown"
  }];
  let var_core_value_sig6149 = var_core_value_sigD477,
    var_core_value_sigEB82 = var_core_value_sig6149.indexOf('tables');
  return var_core_value_sigEB82 === -1 || typeof var_core_value_sig6149[var_core_value_sigEB82 + 1] != "string" ? var_core_value_sig6149[0] === 'tableOrder' ? [] : [{
    'tableId': '',
    'reason': 'unknown'
  }] : Ht(var_core_value_sig6149, var_core_value_sigEB82, String(var_core_value_sig6149[var_core_value_sigEB82 + 1]));
}
;
function Ht(var_core_value_sig843F, var_core_value_sig9FB7, var_core_value_sigB7A4) {
  let var_core_value_sig295F = var_core_value_sig843F[var_core_value_sig9FB7 + 2];
  return var_core_value_sig295F === "records" && typeof var_core_value_sig843F[var_core_value_sig9FB7 + 3] == "string" ? Ut(var_core_value_sig843F, var_core_value_sig9FB7, var_core_value_sigB7A4, String(var_core_value_sig843F[var_core_value_sig9FB7 + 3])) : var_core_value_sig295F === "cellData" && var_core_value_sig843F[var_core_value_sig9FB7 + 3] != null && var_core_value_sig843F[var_core_value_sig9FB7 + 4] != null ? [{
    'tableId': var_core_value_sigB7A4,
    'reason': "cell",
    'row': Number(var_core_value_sig843F[var_core_value_sig9FB7 + 3]),
    'column': Number(var_core_value_sig843F[var_core_value_sig9FB7 + 4])
  }] : var_core_value_sig295F === "fields" && typeof var_core_value_sig843F[var_core_value_sig9FB7 + 3] == "string" ? [{
    'tableId': var_core_value_sigB7A4,
    'reason': "field",
    'fieldId': String(var_core_value_sig843F[var_core_value_sig9FB7 + 3])
  }] : var_core_value_sig295F === "views" && typeof var_core_value_sig843F[var_core_value_sig9FB7 + 3] == "string" ? [{
    'tableId': var_core_value_sigB7A4,
    'reason': "view",
    'viewId': String(var_core_value_sig843F[var_core_value_sig9FB7 + 3])
  }] : var_core_value_sig295F === "resources" ? [{
    'tableId': var_core_value_sigB7A4,
    'reason': "cell"
  }] : [{
    'tableId': var_core_value_sigB7A4,
    'reason': var_core_value_sig295F === undefined ? 'table' : "unknown"
  }];
}
;
function Ut(var_core_value_sigE36B, var_core_value_sigDA3B, var_core_value_sig9E32, var_core_value_sig26EC) {
  return var_core_value_sigE36B[var_core_value_sigDA3B + 4] === 'values' && typeof var_core_value_sigE36B[var_core_value_sigDA3B + 5] == "string" ? [{
    'tableId': var_core_value_sig9E32,
    'reason': "cell",
    'recordId': var_core_value_sig26EC,
    'fieldId': String(var_core_value_sigE36B[var_core_value_sigDA3B + 5])
  }] : var_core_value_sigE36B[var_core_value_sigDA3B + 4] === "updatedAt" || var_core_value_sigE36B[var_core_value_sigDA3B + 4] === "updatedBy" ? [] : [{
    'tableId': var_core_value_sig9E32,
    'reason': "record",
    'recordId': var_core_value_sig26EC
  }];
}
;
function Wt(var_core_value_sigF226) {
  if (!Array.isArray(var_core_value_sigF226)) return [];
  let var_core_value_sig4773 = var_core_value_sigF226.filter(Array.isArray);
  if (var_core_value_sig4773.length > 1 && var_core_value_sig4773.length === var_core_value_sigF226.length) return var_core_value_sig4773;
  let var_core_value_sigB643 = var_core_value_sigF226.findIndex(Array.isArray);
  if (var_core_value_sigB643 > 0 && var_core_value_sigF226.slice(var_core_value_sigB643).every(Array.isArray)) {
    let var_core_value_sigCCAA = var_core_value_sigF226.slice(0, var_core_value_sigB643);
    return var_core_value_sigF226.slice(var_core_value_sigB643).map(var_core_value_sigDBB5 => [...var_core_value_sigCCAA, ...var_core_value_sigDBB5]);
  }
  let var_core_value_sigF92F = var_core_value_sigF226.indexOf("tables");
  if (var_core_value_sigF92F === -1 || typeof var_core_value_sigF226[var_core_value_sigF92F + 1] != "string") return [];
  let var_core_value_sig2346 = String(var_core_value_sigF226[var_core_value_sigF92F + 1]),
    var_core_value_sig579A = var_core_value_sigF226.slice(var_core_value_sigF92F + 2).filter(Array.isArray);
  return var_core_value_sig579A.length <= 1 ? [] : var_core_value_sig579A.map(var_core_value_sigF32D => ["tables", var_core_value_sig2346, ...var_core_value_sigF32D]);
}
;
function Gt(var_core_value_sig7E16) {
  let var_core_value_sigA691 = new Set();
  return var_core_value_sig7E16.filter(var_core_value_sig9427 => {
    let var_core_value_sig21F4 = JSON.stringify(var_core_value_sig9427);
    return var_core_value_sigA691.has(var_core_value_sig21F4) ? false : (var_core_value_sigA691.add(var_core_value_sig21F4), true);
  });
}
;
function Kt(var_core_value_sig3C23) {
  return var_core_value_sig744C.deepClone(var_core_value_sig3C23);
}
;
function qt(var_core_value_sigDAE6, var_core_value_sigDD81) {
  let var_core_value_sig3870 = Jt(var_core_value_sigDD81);
  if (!var_core_value_sig3870.length) return Kt(var_core_value_sigDAE6);
  let var_core_value_sig13D1 = tn(var_core_value_sigDAE6),
    var_core_value_sigECFC = new Set();
  for (let var_core_value_sigA345 of var_core_value_sig3870) Zt(var_core_value_sig13D1, var_core_value_sigA345, var_core_value_sigECFC);
  return var_core_value_sig13D1;
}
;
function Jt(var_core_value_sig5E62) {
  let var_core_value_sig3B89 = [];
  return Yt(var_core_value_sig5E62, [], var_core_value_sig3B89), var_core_value_sig3B89;
}
;
function Yt(var_core_value_sig4B55, var_core_value_sig9E69, var_core_value_sig432A) {
  if (!Array.isArray(var_core_value_sig4B55)) return;
  let var_core_value_sig3B51 = [];
  for (let var_core_value_sigA468 of var_core_value_sig4B55) {
    if (Array.isArray(var_core_value_sigA468)) {
      Yt(var_core_value_sigA468, [...var_core_value_sig9E69, ...var_core_value_sig3B51], var_core_value_sig432A);
      continue;
    }
    if (Xt(var_core_value_sigA468)) {
      var_core_value_sig432A.push([...var_core_value_sig9E69, ...var_core_value_sig3B51]);
      continue;
    }
    (typeof var_core_value_sigA468 == "string" || typeof var_core_value_sigA468 == 'number') && var_core_value_sig3B51.push(var_core_value_sigA468);
  }
}
;
function Xt(var_core_value_sig542D) {
  if (!var_core_value_sig542D || typeof var_core_value_sig542D != "object" || Array.isArray(var_core_value_sig542D)) return false;
  let var_core_value_sigB225 = var_core_value_sig542D;
  return 'i' in var_core_value_sigB225 || 'r' in var_core_value_sigB225 || 'p' in var_core_value_sigB225 || 'd' in var_core_value_sigB225 || 'es' in var_core_value_sigB225 || 'ena' in var_core_value_sigB225 || 'et' in var_core_value_sigB225;
}
;
function Zt(var_core_value_sig8AAB, var_core_value_sigE82A, var_core_value_sigB2CF) {
  let var_core_value_sig5955 = var_core_value_sig8AAB,
    var_core_value_sigF829 = [];
  for (let var_core_value_sig1561 = 0; var_core_value_sig1561 < var_core_value_sigE82A.length - 1; var_core_value_sig1561++) {
    let var_core_value_sigCFAC = var_core_value_sigE82A[var_core_value_sig1561];
    var_core_value_sigF829.push(var_core_value_sigCFAC);
    let var_core_value_sig237B = Qt(var_core_value_sig5955, var_core_value_sigCFAC);
    if (!en(var_core_value_sig237B)) return;
    let var_core_value_sigFEAB = JSON.stringify(var_core_value_sigF829);
    var_core_value_sigB2CF.has(var_core_value_sigFEAB) || ($t(var_core_value_sig5955, var_core_value_sigCFAC, tn(var_core_value_sig237B)), var_core_value_sigB2CF.add(var_core_value_sigFEAB));
    let var_core_value_sigE347 = Qt(var_core_value_sig5955, var_core_value_sigCFAC);
    if (!en(var_core_value_sigE347)) return;
    var_core_value_sig5955 = var_core_value_sigE347;
  }
}
;
function Qt(var_core_value_sig2900, var_core_value_sig51D8) {
  return Array.isArray(var_core_value_sig2900) ? typeof var_core_value_sig51D8 == 'number' ? var_core_value_sig2900[var_core_value_sig51D8] : undefined : Reflect.get(var_core_value_sig2900, var_core_value_sig51D8);
}
;
function $t(var_core_value_sig8693, var_core_value_sigAACD, var_core_value_sig895A) {
  if (Array.isArray(var_core_value_sig8693)) {
    typeof var_core_value_sigAACD == "number" && (var_core_value_sig8693[var_core_value_sigAACD] = var_core_value_sig895A);
    return;
  }
  Reflect.set(var_core_value_sig8693, var_core_value_sigAACD, var_core_value_sig895A);
}
;
function en(var_core_value_sigA764) {
  return !!var_core_value_sigA764 && typeof var_core_value_sigA764 == 'object';
}
;
function tn(var_core_value_sigC3D9) {
  return Array.isArray(var_core_value_sigC3D9) ? var_core_value_sigC3D9.slice() : {
    ...var_core_value_sigC3D9
  };
}
const nn = "yyyy/mm/dd",
  rn = /\s+hh:mm\s*$/i,
  an = {
    'yyyy/mm/dd': 'YYYY/MM/DD',
    'yyyy-mm-dd': 'YYYY-MM-DD',
    'mm-dd': 'MM-DD',
    'mm/dd/yyyy': "MM/DD/YYYY",
    'dd/mm/yyyy': "DD/MM/YYYY",
    'mmm\x20d,\x20yyyy': "MMM D, YYYY"
  };
function z(var_core_value_sigA6C0, var_core_value_sigFF70 = var_core_value_sigEB10.Date1900) {
  let var_core_value_sigB469 = var_core_value_sig8A14(var_core_value_sigA6C0).valueOf();
  return var_core_value_sigDA56(new Date(var_core_value_sigB469), var_core_value_sigFF70);
}
;
function on(var_core_value_sig0276, var_core_value_sigFA20 = var_core_value_sigEB10.Date1900) {
  return var_core_value_sigD25D(var_core_value_sig0276, var_core_value_sigFA20).getTime();
}
;
function sn(var_core_value_sig2752, var_core_value_sig0E1A = var_core_value_sigEB10.Date1900) {
  if (var_core_value_sig2752 == null || var_core_value_sig2752 === '') return null;
  if (var_core_value_sig2752 instanceof Date) return z(var_core_value_sig2752, var_core_value_sig0E1A);
  if (typeof var_core_value_sig2752 == "number") return Number.isFinite(var_core_value_sig2752) ? var_core_value_sig2752 > 1000000 ? z(var_core_value_sig2752, var_core_value_sig0E1A) : var_core_value_sig2752 : null;
  let var_core_value_sig6A48 = Date.parse(String(var_core_value_sig2752));
  return Number.isNaN(var_core_value_sig6A48) ? null : z(var_core_value_sig6A48, var_core_value_sig0E1A);
}
;
function cn(var_core_value_sig2D2A, var_core_value_sig1D22 = var_core_value_sigEB10.Date1900) {
  let var_core_value_sig91FE = sn(var_core_value_sig2D2A, var_core_value_sig1D22);
  return var_core_value_sig91FE == null ? null : on(var_core_value_sig91FE, var_core_value_sig1D22);
}
;
function ln(var_core_value_sig528C = {}) {
  let var_core_value_sig749D = String(var_core_value_sig528C.pattern ?? var_core_value_sig528C.format ?? var_core_value_sig528C.dateFormat ?? nn).trim() || nn,
    var_core_value_sig1FB8 = rn.test(var_core_value_sig749D);
  return {
    'pattern': var_core_value_sig749D.replace(rn, '') || nn,
    'includeTime': typeof var_core_value_sig528C.includeTime == 'boolean' ? var_core_value_sig528C.includeTime : var_core_value_sig1FB8,
    'hourCycle': var_core_value_sig528C.hourCycle === 'h12' ? "h12" : "h24"
  };
}
;
function un(var_core_value_sig032D = {}) {
  let {
    format: var_core_value_sig27FA,
    dateFormat: var_core_value_sig533B,
    ...var_core_value_sig6434
  } = var_core_value_sig032D;
  return {
    ...var_core_value_sig6434,
    ...ln(var_core_value_sig032D)
  };
}
;
function dn(var_core_value_sig398A, var_core_value_sig1760 = {}) {
  let var_core_value_sig7C7A = cn(var_core_value_sig398A);
  if (var_core_value_sig7C7A == null || !Number.isFinite(var_core_value_sig7C7A)) return '';
  let var_core_value_sig78E8 = ln(var_core_value_sig1760);
  return var_core_value_sig8A14(var_core_value_sig7C7A).format(fn(var_core_value_sig78E8));
}
;
function fn(var_core_value_sigF002) {
  let {
      pattern: var_core_value_sig715D,
      includeTime: var_core_value_sigEB90,
      hourCycle: var_core_value_sig9506
    } = var_core_value_sigF002,
    var_core_value_sigC460 = an[var_core_value_sig715D] ?? an[nn];
  return var_core_value_sigEB90 ? var_core_value_sigC460 + '\x20' + (var_core_value_sig9506 === 'h12' ? "h:mm a" : 'HH:mm') : var_core_value_sigC460;
}
const pn = {
    'editable': true,
    'sortable': true,
    'filterable': true,
    'groupable': false,
    'usableAsKanbanGroup': false,
    'usableAsCalendarDate': false,
    'usableAsGanttStart': false,
    'usableAsGanttEnd': false,
    'usableAsGanttProgress': false,
    'usableAsCardCover': false,
    'usableAsTitle': false
  },
  mn = new Set([var_core_value_sig06E6.RecordId]),
  B = 1440 * 60 * 1000;
function hn(var_core_value_sig00D0) {
  switch (var_core_value_sig00D0) {
    case var_core_value_sig06E6.Number:
    case var_core_value_sig06E6.Currency:
    case var_core_value_sig06E6.Progress:
    case var_core_value_sig06E6.Rating:
      return [var_core_value_sigF90F.IS, var_core_value_sigF90F.IS_NOT, var_core_value_sigF90F.GREATER_THAN, var_core_value_sigF90F.LESS_THAN, var_core_value_sigF90F.IS_EMPTY, var_core_value_sigF90F.IS_NOT_EMPTY];
    case var_core_value_sig06E6.Date:
    case var_core_value_sig06E6.CreatedAt:
    case var_core_value_sig06E6.UpdatedAt:
      return [var_core_value_sigF90F.IS, var_core_value_sigF90F.IS_NOT, var_core_value_sigF90F.BEFORE, var_core_value_sigF90F.AFTER, var_core_value_sigF90F.IS_EMPTY, var_core_value_sigF90F.IS_NOT_EMPTY];
    case var_core_value_sig06E6.Checkbox:
      return [var_core_value_sigF90F.IS, var_core_value_sigF90F.IS_NOT];
    default:
      return [var_core_value_sigF90F.IS, var_core_value_sigF90F.IS_NOT, var_core_value_sigF90F.CONTAINS, var_core_value_sigF90F.NOT_CONTAINS, var_core_value_sigF90F.IS_EMPTY, var_core_value_sigF90F.IS_NOT_EMPTY];
  }
}
;
function gn(var_core_value_sig2880) {
  return var_core_value_sig2880 === var_core_value_sig06E6.Date || var_core_value_sig2880 === var_core_value_sig06E6.CreatedAt || var_core_value_sig2880 === var_core_value_sig06E6.UpdatedAt;
}
;
function _n(var_core_value_sig76AC, var_core_value_sigEA39) {
  return var_core_value_sig76AC == null && var_core_value_sigEA39 == null ? 0 : var_core_value_sig76AC == null ? -1 : var_core_value_sigEA39 == null ? 1 : typeof var_core_value_sig76AC == "number" && typeof var_core_value_sigEA39 == "number" ? var_core_value_sig76AC - var_core_value_sigEA39 : String(var_core_value_sig76AC).localeCompare(String(var_core_value_sigEA39));
}
;
function vn(var_core_value_sig252C, var_core_value_sig87EA, var_core_value_sig4325, var_core_value_sigAB8D, var_core_value_sig4B86 = {}) {
  if (var_core_value_sig87EA === "isEmpty") return yn(var_core_value_sig252C);
  if (var_core_value_sig87EA === "isNotEmpty") return !yn(var_core_value_sig252C);
  switch (var_core_value_sigAB8D.type) {
    case var_core_value_sig06E6.Number:
    case var_core_value_sig06E6.Currency:
    case var_core_value_sig06E6.Progress:
    case var_core_value_sig06E6.Rating:
      return bn(var_core_value_sig252C, var_core_value_sig87EA, var_core_value_sig4325);
    case var_core_value_sig06E6.Date:
    case var_core_value_sig06E6.CreatedAt:
    case var_core_value_sig06E6.UpdatedAt:
      return Sn(var_core_value_sig252C, var_core_value_sig87EA, var_core_value_sig4325, var_core_value_sig4B86);
    case var_core_value_sig06E6.Checkbox:
      return On(var_core_value_sig252C, var_core_value_sig87EA, var_core_value_sig4325);
    case var_core_value_sig06E6.SingleSelect:
    case var_core_value_sig06E6.MultiSelect:
    case var_core_value_sig06E6.Person:
    case var_core_value_sig06E6.Group:
      return An(var_core_value_sig252C, var_core_value_sig87EA, var_core_value_sig4325, var_core_value_sigAB8D);
    default:
      return jn(var_core_value_sig252C, var_core_value_sig87EA, var_core_value_sig4325);
  }
}
;
function yn(var_core_value_sig240E) {
  return var_core_value_sig240E == null ? true : Array.isArray(var_core_value_sig240E) ? var_core_value_sig240E.length === 0 : typeof var_core_value_sig240E == "string" && var_core_value_sig240E.trim() === '';
}
;
function bn(var_core_value_sigDE46, var_core_value_sigF30E, var_core_value_sigA6B6) {
  let var_core_value_sig1FDB = xn(var_core_value_sigDE46),
    var_core_value_sig6B7D = xn(var_core_value_sigA6B6);
  if (var_core_value_sig1FDB == null || var_core_value_sig6B7D == null) return false;
  switch (var_core_value_sigF30E) {
    case 'is':
      return var_core_value_sig1FDB === var_core_value_sig6B7D;
    case "isNot":
      return var_core_value_sig1FDB !== var_core_value_sig6B7D;
    case "greaterThan":
      return var_core_value_sig1FDB > var_core_value_sig6B7D;
    case 'greaterThanOrEqual':
      return var_core_value_sig1FDB >= var_core_value_sig6B7D;
    case 'lessThan':
      return var_core_value_sig1FDB < var_core_value_sig6B7D;
    case 'lessThanOrEqual':
      return var_core_value_sig1FDB <= var_core_value_sig6B7D;
    default:
      return false;
  }
}
;
function xn(var_core_value_sig0D1B) {
  if (var_core_value_sig0D1B == null || var_core_value_sig0D1B === '') return null;
  let var_core_value_sigA5A1 = Number(var_core_value_sig0D1B);
  return Number.isFinite(var_core_value_sigA5A1) ? var_core_value_sigA5A1 : null;
}
;
function Sn(var_core_value_sig0C3A, var_core_value_sig5A20, var_core_value_sig4037, var_core_value_sig5F5F) {
  let var_core_value_sig801E = wn(var_core_value_sig0C3A);
  if (var_core_value_sig801E == null) return false;
  let var_core_value_sigD8A7 = Cn(var_core_value_sig5F5F.dateMode ?? "exact", var_core_value_sig4037, var_core_value_sig5F5F.now);
  if (!var_core_value_sigD8A7) return false;
  switch (var_core_value_sig5A20) {
    case 'is':
      return var_core_value_sig801E >= var_core_value_sigD8A7.start && var_core_value_sig801E <= var_core_value_sigD8A7.end;
    case 'isNot':
      return var_core_value_sig801E < var_core_value_sigD8A7.start || var_core_value_sig801E > var_core_value_sigD8A7.end;
    case "before":
      return var_core_value_sig801E < var_core_value_sigD8A7.start;
    case 'after':
      return var_core_value_sig801E > var_core_value_sigD8A7.end;
    default:
      return false;
  }
}
;
function Cn(var_core_value_sig7D2D, var_core_value_sig5BC4, var_core_value_sigE445 = Date.now()) {
  let var_core_value_sig5C54 = Tn(var_core_value_sigE445);
  switch (var_core_value_sig7D2D) {
    case "exact":
      {
        let var_core_value_sig3C5B = wn(var_core_value_sig5BC4);
        return var_core_value_sig3C5B == null ? null : {
          'start': var_core_value_sig3C5B,
          'end': var_core_value_sig3C5B + B - 1
        };
      }
    case "today":
      return {
        'start': var_core_value_sig5C54,
        'end': var_core_value_sig5C54 + B - 1
      };
    case "tomorrow":
      return {
        'start': var_core_value_sig5C54 + B,
        'end': var_core_value_sig5C54 + B * 2 - 1
      };
    case 'yesterday':
      return {
        'start': var_core_value_sig5C54 - B,
        'end': var_core_value_sig5C54 - 1
      };
    case "thisWeek":
      return En(var_core_value_sig5C54, 0);
    case "lastWeek":
      return En(var_core_value_sig5C54, -1);
    case 'thisMonth':
      return Dn(var_core_value_sig5C54, 0);
    case "lastMonth":
      return Dn(var_core_value_sig5C54, -1);
    case "past7":
      return {
        'start': var_core_value_sig5C54 - B * 6,
        'end': var_core_value_sig5C54 + B - 1
      };
    case 'next7':
      return {
        'start': var_core_value_sig5C54,
        'end': var_core_value_sig5C54 + B * 7 - 1
      };
    case "past30":
      return {
        'start': var_core_value_sig5C54 - B * 29,
        'end': var_core_value_sig5C54 + B - 1
      };
    case 'next30':
      return {
        'start': var_core_value_sig5C54,
        'end': var_core_value_sig5C54 + B * 30 - 1
      };
  }
}
;
function wn(var_core_value_sigD167) {
  let var_core_value_sig2DA0 = sn(var_core_value_sigD167);
  return var_core_value_sig2DA0 == null ? null : Tn(on(var_core_value_sig2DA0));
}
;
function Tn(var_core_value_sig51DC) {
  let var_core_value_sigEE01 = new Date(var_core_value_sig51DC);
  return var_core_value_sigEE01.setHours(0, 0, 0, 0), var_core_value_sigEE01.getTime();
}
;
function En(var_core_value_sig80BD, var_core_value_sigF6A6) {
  let var_core_value_sigE59D = var_core_value_sig80BD - (new Date(var_core_value_sig80BD).getDay() + 6) % 7 * B + var_core_value_sigF6A6 * B * 7;
  return {
    'start': var_core_value_sigE59D,
    'end': var_core_value_sigE59D + B * 7 - 1
  };
}
;
function Dn(var_core_value_sig3D65, var_core_value_sig4D17) {
  let var_core_value_sigE1B9 = new Date(var_core_value_sig3D65),
    var_core_value_sig21BB = new Date(var_core_value_sigE1B9.getFullYear(), var_core_value_sigE1B9.getMonth() + var_core_value_sig4D17, 1),
    var_core_value_sig64BA = new Date(var_core_value_sigE1B9.getFullYear(), var_core_value_sigE1B9.getMonth() + var_core_value_sig4D17 + 1, 1);
  return {
    'start': var_core_value_sig21BB.getTime(),
    'end': var_core_value_sig64BA.getTime() - 1
  };
}
;
function On(var_core_value_sig975D, var_core_value_sig3C3D, var_core_value_sigD33D) {
  let var_core_value_sig71B9 = kn(var_core_value_sig975D),
    var_core_value_sig248C = kn(var_core_value_sigD33D);
  switch (var_core_value_sig3C3D) {
    case 'is':
      return var_core_value_sig71B9 === var_core_value_sig248C;
    case "isNot":
      return var_core_value_sig71B9 !== var_core_value_sig248C;
    default:
      return false;
  }
}
;
function kn(var_core_value_sig8DE6) {
  return var_core_value_sig8DE6 === true || var_core_value_sig8DE6 === 'true' || var_core_value_sig8DE6 === 1 || var_core_value_sig8DE6 === '1';
}
;
function An(var_core_value_sig55C6, var_core_value_sig2C60, var_core_value_sig2914, var_core_value_sig7FD9) {
  let var_core_value_sig7A3D = Nn(var_core_value_sig55C6, var_core_value_sig7FD9),
    var_core_value_sig7325 = Nn(var_core_value_sig2914, var_core_value_sig7FD9),
    var_core_value_sig4C4B = var_core_value_sig7325.length > 0 && var_core_value_sig7325.some(var_core_value_sigDF14 => var_core_value_sig7A3D.includes(var_core_value_sigDF14));
  switch (var_core_value_sig2C60) {
    case 'is':
    case "contains":
      return var_core_value_sig4C4B;
    case 'isNot':
    case 'notContains':
      return !var_core_value_sig4C4B;
    default:
      return false;
  }
}
;
function jn(var_core_value_sigB11B, var_core_value_sig826D, var_core_value_sig949F) {
  let var_core_value_sig77E0 = Mn(var_core_value_sigB11B),
    var_core_value_sigD177 = Mn(var_core_value_sig949F);
  switch (var_core_value_sig826D) {
    case 'is':
      return var_core_value_sig77E0 === var_core_value_sigD177;
    case "isNot":
      return var_core_value_sig77E0 !== var_core_value_sigD177;
    case "contains":
      return var_core_value_sigD177 ? var_core_value_sig77E0.includes(var_core_value_sigD177) : false;
    case "notContains":
      return !var_core_value_sigD177 || !var_core_value_sig77E0.includes(var_core_value_sigD177);
    default:
      return false;
  }
}
;
function Mn(var_core_value_sig26E6) {
  if (Array.isArray(var_core_value_sig26E6)) return var_core_value_sig26E6.map(var_core_value_sig842F => Mn(var_core_value_sig842F)).join('\x0a');
  if (var_core_value_sig26E6 && typeof var_core_value_sig26E6 == "object") {
    let var_core_value_sigC4C0 = var_core_value_sig26E6;
    return String(var_core_value_sigC4C0.name ?? var_core_value_sigC4C0.label ?? var_core_value_sigC4C0.text ?? var_core_value_sigC4C0.value ?? var_core_value_sigC4C0.id ?? '').trim().toLowerCase();
  }
  return String(var_core_value_sig26E6 ?? '').trim().toLowerCase();
}
;
function Nn(var_core_value_sig43D5, var_core_value_sig132C) {
  let var_core_value_sig469E = Pn(var_core_value_sig43D5),
    var_core_value_sig3C91 = Fn(var_core_value_sig132C.config ?? {});
  return var_core_value_sig469E.flatMap(var_core_value_sig214A => var_core_value_sig3C91.get(var_core_value_sig214A) ?? [var_core_value_sig214A]).filter((var_core_value_sigCCC3, var_core_value_sig986E, var_core_value_sig537C) => var_core_value_sigCCC3 !== '' && var_core_value_sig537C.indexOf(var_core_value_sigCCC3) === var_core_value_sig986E);
}
;
function Pn(var_core_value_sig5A6B) {
  if (var_core_value_sig5A6B == null || var_core_value_sig5A6B === '') return [];
  if (Array.isArray(var_core_value_sig5A6B)) return var_core_value_sig5A6B.flatMap(var_core_value_sigBBBC => Pn(var_core_value_sigBBBC));
  if (var_core_value_sig5A6B && typeof var_core_value_sig5A6B == 'object') {
    let var_core_value_sig5440 = var_core_value_sig5A6B;
    return ['id', "name", "label", "value", "text"].flatMap(var_core_value_sig200B => Pn(var_core_value_sig5440[var_core_value_sig200B])).filter((var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1) => var_core_value_sigC4B1.indexOf(var_core_value_sig3863) === var_core_value_sigC97C);
  }
  return [Mn(var_core_value_sig5A6B)];
}
;
function Fn(var_core_value_sigD8F0) {
  let var_core_value_sig534A = new Map();
  return (Array.isArray(var_core_value_sigD8F0.options) ? var_core_value_sigD8F0.options : []).forEach(var_core_value_sigE28B => {
    if (!var_core_value_sigE28B || typeof var_core_value_sigE28B != "object") return;
    let var_core_value_sig0FD9 = Pn(var_core_value_sigE28B),
      var_core_value_sig5649 = var_core_value_sig0FD9.filter((var_core_value_sig1BD9, var_core_value_sigE43E) => var_core_value_sig1BD9 !== '' && var_core_value_sig0FD9.indexOf(var_core_value_sig1BD9) === var_core_value_sigE43E);
    var_core_value_sig5649.forEach(var_core_value_sigA937 => var_core_value_sig534A.set(var_core_value_sigA937, var_core_value_sig5649));
  }), var_core_value_sig534A;
}
;
function V(var_core_value_sigB1E6, var_core_value_sig02FE = {}, var_core_value_sigD80D = var_core_value_sigCAD5 => var_core_value_sigCAD5, var_core_value_sig572B = {}) {
  let var_core_value_sigB8EA = !mn.has(var_core_value_sigB1E6),
    var_core_value_sig1494 = var_core_value_sigD80D ?? (var_core_value_sigAF82 => var_core_value_sigAF82);
  return {
    'type': var_core_value_sigB1E6,
    'i18nKey': "base.fieldType." + var_core_value_sigB1E6,
    'enabled': var_core_value_sigB8EA,
    'visibleInCreateMenu': var_core_value_sigB8EA,
    'createDefaultConfig': var_core_value_sig572B.createDefaultConfig ?? (() => ({})),
    'createDefaultValue': var_core_value_sig572B.createDefaultValue ?? (var_core_value_sig21A2 => var_core_value_sig21A2.defaultValue ?? null),
    'normalize': (var_core_value_sig5C1D, var_core_value_sig4CBA) => var_core_value_sig1494(var_core_value_sig5C1D, var_core_value_sig4CBA),
    'validate': (var_core_value_sig8E65, var_core_value_sig772C) => {
      var var_core_value_sigF309;
      return var_core_value_sigB8EA ? ((var_core_value_sigF309 = var_core_value_sig572B.validate) == null ? undefined : var_core_value_sigF309.call(var_core_value_sig572B, var_core_value_sig8E65, var_core_value_sig772C)) ?? {
        'valid': true
      } : {
        'valid': false
      };
    },
    'compare': (var_core_value_sig44F9, var_core_value_sigE532) => _n(var_core_value_sig44F9, var_core_value_sigE532),
    'filter': (var_core_value_sigF381, var_core_value_sigCB92, var_core_value_sigC844, var_core_value_sig2ED4) => vn(var_core_value_sigF381, var_core_value_sigCB92, var_core_value_sigC844, var_core_value_sig2ED4),
    'toPlainText': var_core_value_sig572B.toPlainText ?? (var_core_value_sig0477 => var_core_value_sig0477 == null ? '' : String(var_core_value_sig0477)),
    'fromPlainText': var_core_value_sig572B.fromPlainText ?? (var_core_value_sig6FDF => var_core_value_sig1494(var_core_value_sig6FDF, {
      'id': '',
      'name': '',
      'type': var_core_value_sigB1E6,
      'config': {}
    })),
    'getCapabilities': () => ({
      ...pn,
      ...var_core_value_sig02FE,
      'editable': var_core_value_sigB8EA && (var_core_value_sig02FE.editable ?? pn.editable)
    })
  };
}
;
function In() {
  return [V(var_core_value_sig06E6.Text, {
    'groupable': true,
    'usableAsTitle': true
  }, undefined, {
    'createDefaultConfig': () => ({
      'placeholder': 'bases.fieldConfig.textPlaceholder'
    }),
    'createDefaultValue': var_core_value_sig27C4 => var_core_value_sig27C4.defaultValue ?? ''
  }), V(var_core_value_sig06E6.SingleSelect, {
    'groupable': true,
    'usableAsKanbanGroup': true,
    'supportsOptions': true
  }, var_core_value_sig3E1A => var_core_value_sig3E1A == null || var_core_value_sig3E1A === '' ? null : String(var_core_value_sig3E1A), {
    'createDefaultConfig': () => ({
      'options': [],
      'optionSource': {
        'type': "manual"
      }
    })
  }), V(var_core_value_sig06E6.MultiSelect, {
    'filterable': true,
    'usableAsKanbanGroup': true,
    'supportsOptions': true,
    'supportsMultipleValues': true
  }, var_core_value_sig7FB0 => Array.isArray(var_core_value_sig7FB0) ? var_core_value_sig7FB0.map(String) : var_core_value_sig7FB0 == null ? [] : [String(var_core_value_sig7FB0)], {
    'createDefaultConfig': () => ({
      'options': [],
      'optionSource': {
        'type': 'manual'
      }
    }),
    'createDefaultValue': var_core_value_sig5215 => var_core_value_sig5215.defaultValue ?? []
  }), V(var_core_value_sig06E6.Person, {
    'groupable': true,
    'usableAsKanbanGroup': true,
    'supportsMultipleValues': true
  }, Vn, {
    'createDefaultConfig': () => ({
      'allowMultiple': false,
      'provider': 'person'
    }),
    'validate': Hn
  }), V(var_core_value_sig06E6.Group, {
    'groupable': true,
    'usableAsKanbanGroup': true,
    'supportsMultipleValues': true
  }, zn, {
    'createDefaultConfig': () => ({
      'allowMultiple': true,
      'provider': 'group'
    }),
    'createDefaultValue': var_core_value_sig5204 => var_core_value_sig5204.defaultValue ?? [],
    'validate': Un
  }), V(var_core_value_sig06E6.Date, {
    'groupable': true,
    'usableAsCalendarDate': true,
    'usableAsGanttStart': true,
    'usableAsGanttEnd': true
  }, var_core_value_sig5E11 => sn(var_core_value_sig5E11), {
    'createDefaultConfig': () => Rn(),
    'validate': Wn
  }), V(var_core_value_sig06E6.Attachment, {
    'usableAsCardCover': true,
    'supportsMultipleValues': true
  }, var_core_value_sig4D58 => var_core_value_sig4D58 == null ? [] : Array.isArray(var_core_value_sig4D58) ? var_core_value_sig4D58 : [var_core_value_sig4D58], {
    'createDefaultValue': var_core_value_sig2DBD => var_core_value_sig2DBD.defaultValue ?? []
  }), V(var_core_value_sig06E6.Number, {}, var_core_value_sig424E => var_core_value_sig424E == null || var_core_value_sig424E === '' ? null : Number(var_core_value_sig424E), {
    'createDefaultConfig': () => Ln(),
    'validate': Gn
  }), V(var_core_value_sig06E6.Checkbox, {
    'groupable': true,
    'usableAsKanbanGroup': true
  }, var_core_value_sigF481 => var_core_value_sigF481 === true || var_core_value_sigF481 === "true" || var_core_value_sigF481 === 1 || var_core_value_sigF481 === '1', {
    'createDefaultConfig': () => ({
      'icon': "check",
      'color': "#16a34a"
    }),
    'createDefaultValue': var_core_value_sigD7F2 => var_core_value_sigD7F2.defaultValue ?? false,
    'validate': var_core_value_sig7CF3 => typeof var_core_value_sig7CF3 == "boolean" ? {
      'valid': true
    } : {
      'valid': false,
      'reason': "[BaseField]: invalid checkbox value."
    }
  }), V(var_core_value_sig06E6.Link, {
    'supportsRelation': true
  }, qn, {
    'createDefaultConfig': () => ({
      'placeholder': "bases.fieldConfig.linkPlaceholder"
    }),
    'toPlainText': var_core_value_sig9DC6 => Jn(var_core_value_sig9DC6),
    'fromPlainText': var_core_value_sig6643 => qn(var_core_value_sig6643)
  }), V(var_core_value_sig06E6.Formula, {
    'editable': false
  }, undefined, {
    'createDefaultConfig': () => ({
      'formula': '',
      'dependencies': [],
      'numfmt': {
        'type': 'general',
        'pattern': "General"
      }
    }),
    'createDefaultValue': () => null
  }), V(var_core_value_sig06E6.Numbering, {
    'editable': false,
    'usableAsTitle': true
  }, undefined, {
    'createDefaultConfig': () => ({
      'mode': 'autoIncrement'
    }),
    'createDefaultValue': () => null
  }), V(var_core_value_sig06E6.Phone, {
    'usableAsTitle': true
  }, var_core_value_sig4124 => var_core_value_sig4124 == null ? null : String(var_core_value_sig4124).trim(), {
    'validate': var_core_value_sigBF1C => var_core_value_sigBF1C == null || var_core_value_sigBF1C === '' || /^\+?[0-9 ()-]{6,20}$/["test"](String(var_core_value_sigBF1C)) ? {
      'valid': true
    } : {
      'valid': false,
      'reason': "[BaseField]: invalid phone value."
    }
  }), V(var_core_value_sig06E6.Email, {
    'usableAsTitle': true
  }, var_core_value_sigEEEF => var_core_value_sigEEEF == null ? null : String(var_core_value_sigEEEF).trim(), {
    'validate': var_core_value_sig9A01 => var_core_value_sig9A01 == null || var_core_value_sig9A01 === '' || Xn(String(var_core_value_sig9A01)) ? {
      'valid': true
    } : {
      'valid': false,
      'reason': "[BaseField]: invalid email value."
    }
  }), V(var_core_value_sig06E6.Progress, {
    'usableAsGanttProgress': true
  }, var_core_value_sig674F => var_core_value_sig674F == null || var_core_value_sig674F === '' ? null : Number(var_core_value_sig674F), {
    'createDefaultConfig': () => ({
      'format': "percent",
      'decimalPlaces': 0,
      'color': "blue",
      'customRange': false,
      'start': 0,
      'end': 100
    }),
    'validate': (var_core_value_sigC8F6, var_core_value_sig8A26) => Kn(var_core_value_sigC8F6, var_core_value_sig8A26, "[BaseField]: invalid progress value.")
  }), V(var_core_value_sig06E6.Currency, {}, var_core_value_sigD073 => var_core_value_sigD073 == null || var_core_value_sigD073 === '' ? null : Number(var_core_value_sigD073), {
    'createDefaultConfig': () => ({
      ...Ln(),
      'currencySymbol': '$'
    }),
    'validate': Gn
  }), V(var_core_value_sig06E6.Rating, {
    'groupable': true,
    'usableAsKanbanGroup': true
  }, var_core_value_sigF631 => var_core_value_sigF631 == null || var_core_value_sigF631 === '' ? null : Number(var_core_value_sigF631), {
    'createDefaultConfig': () => ({
      'icon': "star",
      'min': 1,
      'max': 5
    }),
    'createDefaultValue': () => null,
    'validate': (var_core_value_sig2278, var_core_value_sig7053) => Kn(var_core_value_sig2278, var_core_value_sig7053, "[BaseField]: invalid rating value.")
  }), V(var_core_value_sig06E6.RecordLink, {
    'supportsRelation': true,
    'supportsMultipleValues': true
  }, Bn, {
    'createDefaultConfig': () => ({
      'targetTableId': '',
      'multiple': false
    }),
    'createDefaultValue': () => '',
    'validate': (var_core_value_sig52F1, var_core_value_sig1E74) => Ie(var_core_value_sig52F1, var_core_value_sig1E74.config["multiple"] === true)
  }), V(var_core_value_sig06E6.RecordId, {
    'editable': false,
    'sortable': true,
    'filterable': true,
    'usableAsTitle': true
  }), V(var_core_value_sig06E6.CreatedBy, {
    'editable': false,
    'groupable': true
  }, var_core_value_sig1E84 => var_core_value_sig1E84 == null ? null : String(var_core_value_sig1E84), {
    'createDefaultConfig': () => ({
      'provider': 'user'
    }),
    'createDefaultValue': () => null
  }), V(var_core_value_sig06E6.UpdatedBy, {
    'editable': false,
    'groupable': true
  }, var_core_value_sig133B => var_core_value_sig133B == null ? null : String(var_core_value_sig133B), {
    'createDefaultConfig': () => ({
      'provider': "user"
    }),
    'createDefaultValue': () => null
  }), V(var_core_value_sig06E6.CreatedAt, {
    'editable': false,
    'usableAsCalendarDate': true,
    'usableAsGanttStart': true,
    'usableAsGanttEnd': true
  }, var_core_value_sig69B8 => sn(var_core_value_sig69B8), {
    'createDefaultConfig': () => Rn(),
    'createDefaultValue': () => null,
    'validate': Wn
  }), V(var_core_value_sig06E6.UpdatedAt, {
    'editable': false,
    'usableAsCalendarDate': true,
    'usableAsGanttStart': true,
    'usableAsGanttEnd': true
  }, var_core_value_sig983D => sn(var_core_value_sig983D), {
    'createDefaultConfig': () => Rn(),
    'createDefaultValue': () => null,
    'validate': Wn
  })];
}
;
function Ln() {
  return {
    'pattern': "#,##0.00",
    'decimalPlaces': 2,
    'separatorStyle': "local",
    'useThousands': true,
    'abbreviation': 'none',
    'allowNegative': true
  };
}
;
function Rn() {
  return {
    'locale': "en-US",
    'pattern': "yyyy/mm/dd",
    'includeTime': false,
    'hourCycle': "h24",
    'defaultMode': "none"
  };
}
;
function zn(var_core_value_sigB5E9) {
  return var_core_value_sigB5E9 == null || var_core_value_sigB5E9 === '' ? [] : Array.isArray(var_core_value_sigB5E9) ? var_core_value_sigB5E9.map(String) : [String(var_core_value_sigB5E9)];
}
;
function Bn(var_core_value_sig0862) {
  return typeof var_core_value_sig0862 == "string" ? var_core_value_sig0862 : '';
}
;
function Vn(var_core_value_sig9099, var_core_value_sigC317) {
  return var_core_value_sig9099 == null || var_core_value_sig9099 === '' ? var_core_value_sigC317.config['allowMultiple'] === true ? [] : null : var_core_value_sigC317.config['allowMultiple'] === true ? Array.isArray(var_core_value_sig9099) ? var_core_value_sig9099.map(String) : [String(var_core_value_sig9099)] : Array.isArray(var_core_value_sig9099) ? String(var_core_value_sig9099[0] ?? '') || null : String(var_core_value_sig9099);
}
;
function Hn(var_core_value_sig2746, var_core_value_sig71B8) {
  return var_core_value_sig71B8.config['allowMultiple'] === true ? Un(var_core_value_sig2746) : var_core_value_sig2746 == null || var_core_value_sig2746 === '' || typeof var_core_value_sig2746 == 'string' ? {
    'valid': true
  } : {
    'valid': false,
    'reason': "[BaseField]: invalid person value."
  };
}
;
function Un(var_core_value_sigFD40) {
  return var_core_value_sigFD40 == null || Array.isArray(var_core_value_sigFD40) && var_core_value_sigFD40.every(var_core_value_sig9A03 => typeof var_core_value_sig9A03 == "string") ? {
    'valid': true
  } : {
    'valid': false,
    'reason': "[BaseField]: invalid multi-value reference."
  };
}
;
function Wn(var_core_value_sig152B) {
  return var_core_value_sig152B == null || typeof var_core_value_sig152B == "number" && Number.isFinite(var_core_value_sig152B) ? {
    'valid': true
  } : {
    'valid': false,
    'reason': "[BaseField]: invalid date value."
  };
}
;
function Gn(var_core_value_sig0334, var_core_value_sigE424) {
  return var_core_value_sig0334 == null || var_core_value_sig0334 === '' ? {
    'valid': true
  } : typeof var_core_value_sig0334 != 'number' || !Number.isFinite(var_core_value_sig0334) ? {
    'valid': false,
    'reason': '[BaseField]:\x20invalid\x20number\x20value.'
  } : var_core_value_sigE424.config["allowNegative"] === false && var_core_value_sig0334 < 0 ? {
    'valid': false,
    'reason': '[BaseField]:\x20negative\x20numbers\x20are\x20disabled.'
  } : {
    'valid': true
  };
}
;
function Kn(var_core_value_sigCDE2, var_core_value_sigD2B0, var_core_value_sig4E8D) {
  let var_core_value_sig9675 = Gn(var_core_value_sigCDE2, var_core_value_sigD2B0);
  if (!var_core_value_sig9675.valid || var_core_value_sigCDE2 == null || var_core_value_sigCDE2 === '') return var_core_value_sig9675;
  let var_core_value_sig24B6 = Number(var_core_value_sigD2B0.config["min"] ?? var_core_value_sigD2B0.config["start"] ?? 0),
    var_core_value_sig283C = Number(var_core_value_sigD2B0.config["max"] ?? var_core_value_sigD2B0.config["end"] ?? 100),
    var_core_value_sig062F = Number(var_core_value_sigCDE2);
  return var_core_value_sig062F >= var_core_value_sig24B6 && var_core_value_sig062F <= var_core_value_sig283C ? {
    'valid': true
  } : {
    'valid': false,
    'reason': var_core_value_sig4E8D
  };
}
;
function qn(var_core_value_sig96C7) {
  if (var_core_value_sig96C7 == null || var_core_value_sig96C7 === '') return null;
  if (typeof var_core_value_sig96C7 == 'object' && !Array.isArray(var_core_value_sig96C7)) {
    let var_core_value_sig3363 = var_core_value_sig96C7,
      var_core_value_sigF64A = typeof var_core_value_sig3363.text == "string" ? var_core_value_sig3363.text["trim"]() : '',
      var_core_value_sig25EC = typeof var_core_value_sig3363.url == 'string' ? var_core_value_sig3363.url["trim"]() : '',
      var_core_value_sigA790 = Yn(var_core_value_sig25EC || var_core_value_sigF64A);
    return var_core_value_sigA790 ? {
      'text': var_core_value_sigF64A || var_core_value_sig25EC || var_core_value_sigA790,
      'url': var_core_value_sigA790
    } : null;
  }
  let var_core_value_sig8D50 = String(var_core_value_sig96C7).trim(),
    var_core_value_sigB5EA = Yn(var_core_value_sig8D50);
  return var_core_value_sigB5EA ? {
    'text': var_core_value_sig8D50,
    'url': var_core_value_sigB5EA
  } : null;
}
;
function Jn(var_core_value_sigE952) {
  if (var_core_value_sigE952 == null) return '';
  if (typeof var_core_value_sigE952 == "object" && !Array.isArray(var_core_value_sigE952)) {
    let var_core_value_sig9A5E = var_core_value_sigE952;
    return String(var_core_value_sig9A5E.text || var_core_value_sig9A5E.url || '');
  }
  return String(var_core_value_sigE952);
}
;
function Yn(var_core_value_sigE241) {
  let var_core_value_sig9C99 = var_core_value_sigE241.trim();
  if (!var_core_value_sig9C99) return '';
  let var_core_value_sigD135 = /^[a-z][a-z\d+.-]*:/i.test(var_core_value_sig9C99) ? var_core_value_sig9C99 : var_core_value_sig9C99.startsWith('//') ? "https:" + var_core_value_sig9C99 : "https://" + var_core_value_sig9C99;
  try {
    let var_core_value_sig01B9 = new URL(var_core_value_sigD135);
    return var_core_value_sig01B9.protocol === 'http:' || var_core_value_sig01B9.protocol === "https:" ? var_core_value_sig01B9.href : '';
  } catch {
    return '';
  }
}
;
function Xn(var_core_value_sig0891) {
  let var_core_value_sigF788 = var_core_value_sig0891.indexOf('@');
  if (var_core_value_sigF788 <= 0 || var_core_value_sigF788 !== var_core_value_sig0891.lastIndexOf('@')) return false;
  let var_core_value_sigE094 = var_core_value_sig0891.slice(var_core_value_sigF788 + 1);
  return var_core_value_sigE094.includes('.') && !var_core_value_sig0891.includes('\x20') && !var_core_value_sigE094.startsWith('.') && !var_core_value_sigE094.endsWith('.');
}
const H = {
  'table': var_core_value_sig0BC4 => ['tables', var_core_value_sig0BC4],
  'field': (var_core_value_sig8F20, var_core_value_sigB8CA) => ["tables", var_core_value_sig8F20, 'fields', var_core_value_sigB8CA],
  'fieldOrder': (var_core_value_sig4663, var_core_value_sig5970) => ["tables", var_core_value_sig4663, 'fieldOrder', var_core_value_sig5970],
  'record': (var_core_value_sig7D63, var_core_value_sig7713) => ["tables", var_core_value_sig7D63, 'records', var_core_value_sig7713],
  'cell': (var_core_value_sigD598, var_core_value_sig61E6, var_core_value_sig054F) => ["tables", var_core_value_sigD598, "records", var_core_value_sig61E6, "values", var_core_value_sig054F],
  'cellData': (var_core_value_sig9047, var_core_value_sigB9FA, var_core_value_sigF8DB) => ["tables", var_core_value_sig9047, 'cellData', String(var_core_value_sigB9FA), String(var_core_value_sigF8DB)],
  'attachmentSet': (var_core_value_sig6E53, var_core_value_sig5812) => ['tables', var_core_value_sig6E53, 'resources', "attachmentSets", var_core_value_sig5812],
  'attachment': (var_core_value_sig343C, var_core_value_sigD924) => ['tables', var_core_value_sig343C, 'resources', 'attachments', var_core_value_sigD924],
  'view': (var_core_value_sig02D4, var_core_value_sigEFE7) => ['tables', var_core_value_sig02D4, 'views', var_core_value_sigEFE7],
  'viewFieldHidden': (var_core_value_sig9277, var_core_value_sig2AE5, var_core_value_sigE274) => ['tables', var_core_value_sig9277, "views", var_core_value_sig2AE5, "fieldSettings", var_core_value_sigE274, "hidden"]
};
var U = class {
  setBaseName(var_core_value_sigD6A9, var_core_value_sig0FCF) {
    let var_core_value_sigCF96 = this.renameFormulaUnitReferences(var_core_value_sigD6A9, var_core_value_sigD6A9.name, var_core_value_sig0FCF);
    return L([this._replaceOptional(["name"], var_core_value_sigD6A9.name, var_core_value_sig0FCF), ...(var_core_value_sigCF96 ? [var_core_value_sigCF96] : [])]);
  }
  renameFormulaUnitReferences(var_core_value_sigC4E9, var_core_value_sigF612, var_core_value_sigAA6C) {
    let var_core_value_sig8BFA = Object.values(var_core_value_sigC4E9.tables).flatMap(var_core_value_sigE503 => Object.values(var_core_value_sigE503.fields).flatMap(var_core_value_sigA12B => {
      var var_core_value_sigF230, var_core_value_sig09B8;
      if (var_core_value_sigA12B.type !== var_core_value_sig06E6.Formula) return [];
      let var_core_value_sig6F91 = String(((var_core_value_sigF230 = var_core_value_sigA12B.config) == null ? undefined : var_core_value_sigF230.formula) ?? ''),
        var_core_value_sigF9C7 = var_core_value_sigB62E(var_core_value_sig6F91, var_core_value_sigF612, var_core_value_sigAA6C);
      return var_core_value_sigF9C7 === var_core_value_sig6F91 ? [] : [this._replaceOptional([...H.field(var_core_value_sigE503.id, var_core_value_sigA12B.id), "config", "formula"], (var_core_value_sig09B8 = var_core_value_sigA12B.config) == null ? undefined : var_core_value_sig09B8.formula, var_core_value_sigF9C7)];
    }));
    return var_core_value_sig8BFA.length > 0 ? L(var_core_value_sig8BFA) : undefined;
  }
  createTable(var_core_value_sig236B, var_core_value_sig1951, var_core_value_sigFEA0 = var_core_value_sig236B.tableOrder["length"]) {
    let var_core_value_sig931A = var_core_value_sig63A1(var_core_value_sig1951.name, var_core_value_sigBD2F(var_core_value_sig236B).values(), var_core_value_sig1951.formulaName),
      var_core_value_sigEE7D = var_core_value_sig1951.formulaName === var_core_value_sig931A ? var_core_value_sig1951 : {
        ...var_core_value_sig1951,
        'formulaName': var_core_value_sig931A
      };
    return L([...this._materializeFormulaTableNames(var_core_value_sig236B), var_core_value_sig71B3.insertOp(H.table(var_core_value_sig1951.id), var_core_value_sigEE7D), var_core_value_sig71B3.insertOp(["tableOrder", var_core_value_sigFEA0], var_core_value_sig1951.id)]);
  }
  renameTable(var_core_value_sig3585, var_core_value_sig31A8, var_core_value_sigA4DA) {
    let var_core_value_sig6FC0 = var_core_value_sig3585.tables[var_core_value_sig31A8];
    return L([...this._materializeFormulaTableNames(var_core_value_sig3585), var_core_value_sig71B3.replaceOp([...H.table(var_core_value_sig31A8), 'name'], var_core_value_sig6FC0.name, var_core_value_sigA4DA)]);
  }
  deleteTable(var_core_value_sig6217, var_core_value_sigB805) {
    let var_core_value_sig4FAE = var_core_value_sig6217.tables[var_core_value_sigB805],
      var_core_value_sig1FCC = var_core_value_sig6217.tableOrder["indexOf"](var_core_value_sigB805);
    return L([...this._materializeFormulaTableNames(var_core_value_sig6217, new Set([var_core_value_sigB805])), var_core_value_sig71B3.removeOp(H.table(var_core_value_sigB805), var_core_value_sig4FAE), var_core_value_sig71B3.removeOp(["tableOrder", var_core_value_sig1FCC], var_core_value_sigB805)]);
  }
  createRecord(var_core_value_sigB7F9, var_core_value_sigB1A2, var_core_value_sig526D) {
    return this.createRecords(var_core_value_sigB7F9, var_core_value_sigB1A2, [var_core_value_sig526D]);
  }
  createRecords(var_core_value_sigBDB5, var_core_value_sig59CE, var_core_value_sig3AD7) {
    let var_core_value_sig04E4 = var_core_value_sigBDB5.tables[var_core_value_sig59CE],
      var_core_value_sigD8F01 = var_core_value_sig3AD7.filter(var_core_value_sig48DD => var_core_value_sig48DD && !var_core_value_sig04E4.records[var_core_value_sig48DD.id]).map(var_core_value_sig5E6A => ({
        ...var_core_value_sig5E6A,
        'values': {
          ...var_core_value_sig5E6A.values,
          [var_core_value_sigED20]: var_core_value_sig5E6A.id
        }
      }));
    if (!var_core_value_sigD8F01.length) return var_core_value_sig71B3.replaceOp([...H.table(var_core_value_sig59CE), "records"], var_core_value_sig04E4.records, var_core_value_sig04E4.records);
    let var_core_value_sig1475 = new var_core_value_sig71B3["WriteCursor"](),
      var_core_value_sig08B7 = [...var_core_value_sigD8F01].sort((var_core_value_sigB7FC, var_core_value_sig9CD9) => var_core_value_sigB7FC.id < var_core_value_sig9CD9.id ? -1 : +(var_core_value_sigB7FC.id > var_core_value_sig9CD9.id)),
      var_core_value_sig2008 = [...H.table(var_core_value_sig59CE), "records"];
    var_core_value_sig1475.descendPath(var_core_value_sig2008);
    for (let var_core_value_sigFD0C of var_core_value_sig08B7) var_core_value_sig1475.descend(var_core_value_sigFD0C.id), var_core_value_sig1475.write('i', var_core_value_sigFD0C), var_core_value_sig1475.ascend();
    for (let var_core_value_sig849B = 0; var_core_value_sig849B < var_core_value_sig2008.length; var_core_value_sig849B += 1) var_core_value_sig1475.ascend();
    return L([var_core_value_sig1475.get(), this._createRecordOrderOp(var_core_value_sigBDB5, var_core_value_sig59CE, var_core_value_sigD8F01)]);
  }
  deleteRecord(var_core_value_sig496B, var_core_value_sig7161, var_core_value_sig2AB8) {
    return this.deleteRecords(var_core_value_sig496B, var_core_value_sig7161, [var_core_value_sig2AB8]);
  }
  deleteRecords(var_core_value_sig3FCF, var_core_value_sig675A, var_core_value_sig837F) {
    let var_core_value_sig9D6E = var_core_value_sig3FCF.tables[var_core_value_sig675A],
      var_core_value_sigB205 = Array.from(new Set(var_core_value_sig837F)).filter(var_core_value_sig5F1A => var_core_value_sig9D6E.records[var_core_value_sig5F1A]);
    if (!var_core_value_sigB205.length) return var_core_value_sig71B3.replaceOp([...H.table(var_core_value_sig675A), "records"], var_core_value_sig9D6E.records, var_core_value_sig9D6E.records);
    let var_core_value_sigBF78 = new Set(var_core_value_sigB205),
      var_core_value_sig8AF3 = Ze(var_core_value_sig9D6E, var_core_value_sigB205).map(var_core_value_sigB455 => this.updateCell(var_core_value_sig3FCF, var_core_value_sig675A, var_core_value_sigB455.recordId, var_core_value_sigB455.fieldId, ''));
    return L([this._deleteRecordsBaseOp(var_core_value_sig3FCF, var_core_value_sig675A, var_core_value_sigB205, var_core_value_sigBF78), ...var_core_value_sig8AF3]);
  }
  createDeleteRecordsUndoOp(var_core_value_sigA0CC, var_core_value_sigB3A1, var_core_value_sig1FB9, var_core_value_sig53A9) {
    let var_core_value_sigDACD = var_core_value_sigA0CC.tables[var_core_value_sig1FB9],
      var_core_value_sig691E = Array.from(new Set(var_core_value_sig53A9)).filter(var_core_value_sig5241 => var_core_value_sigDACD.records[var_core_value_sig5241]),
      var_core_value_sigD6D6 = new Set(var_core_value_sig691E);
    return L([new R().invertOp(var_core_value_sigA0CC, this._deleteRecordsBaseOp(var_core_value_sigA0CC, var_core_value_sig1FB9, var_core_value_sig691E, var_core_value_sigD6D6)), ...Ze(var_core_value_sigDACD, var_core_value_sig691E).map(var_core_value_sigC6E5 => this.updateCell(var_core_value_sigB3A1, var_core_value_sig1FB9, var_core_value_sigC6E5.recordId, var_core_value_sigC6E5.fieldId, var_core_value_sigC6E5.oldParentRecordId ?? ''))]);
  }
  _deleteRecordsBaseOp(var_core_value_sig0347, var_core_value_sig52A3, var_core_value_sigAD91, var_core_value_sigF64E) {
    let var_core_value_sig9B3D = var_core_value_sig0347.tables[var_core_value_sig52A3],
      var_core_value_sigB217 = var_core_value_sigAD91.map(var_core_value_sigCEFB => {
        var var_core_value_sig1537;
        return {
          'recordId': var_core_value_sigCEFB,
          'index': ((var_core_value_sig1537 = var_core_value_sig9B3D.recordOrder) == null ? undefined : var_core_value_sig1537.indexOf(var_core_value_sigCEFB)) ?? -1
        };
      }).filter(var_core_value_sigE4C6 => var_core_value_sigE4C6.index >= 0).sort((var_core_value_sig4313, var_core_value_sigFC87) => var_core_value_sigFC87.index - var_core_value_sig4313.index);
    return L([...var_core_value_sigAD91.map(var_core_value_sig156F => var_core_value_sig71B3.removeOp(H.record(var_core_value_sig52A3, var_core_value_sig156F), var_core_value_sig9B3D.records[var_core_value_sig156F])), ...var_core_value_sigB217.map(({
      recordId: var_core_value_sigDD51,
      index: var_core_value_sigF057
    }) => var_core_value_sig71B3.removeOp(['tables', var_core_value_sig52A3, "recordOrder", var_core_value_sigF057], var_core_value_sigDD51)), ...this._deleteAttachmentResources(var_core_value_sig9B3D, var_core_value_sig52A3, var_core_value_sig72F6 => {
      let var_core_value_sig9FBA = var_core_value_sig72F6.slice(var_core_value_sig72F6.lastIndexOf('\x1f') + 1);
      return var_core_value_sigF64E.has(var_core_value_sig9FBA);
    })]);
  }
  duplicateRecord(var_core_value_sig1FE6, var_core_value_sig2471, var_core_value_sigD1FC, var_core_value_sigE2F9) {
    return this.createRecord(var_core_value_sig1FE6, var_core_value_sig2471, {
      ...var_core_value_sigE2F9,
      'values': {
        ...var_core_value_sig1FE6.tables[var_core_value_sig2471].records[var_core_value_sigD1FC].values,
        ...var_core_value_sigE2F9.values,
        [var_core_value_sigED20]: var_core_value_sigE2F9.id
      }
    });
  }
  updateRecordOrder(var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3, var_core_value_sigE120) {
    let var_core_value_sigD6E7 = var_core_value_sigD689.tables[var_core_value_sig7AE3],
      var_core_value_sig3669 = [...H.record(var_core_value_sig7AE3, var_core_value_sig1EB3), "orderKey"],
      var_core_value_sig5CBC = Object.values(var_core_value_sigD6E7.records).map(var_core_value_sigFE01 => var_core_value_sigFE01.id === var_core_value_sig1EB3 ? {
        ...var_core_value_sigFE01,
        'orderKey': var_core_value_sigE120
      } : var_core_value_sigFE01).sort((var_core_value_sigA2CE, var_core_value_sig1975) => String(var_core_value_sigA2CE.orderKey ?? var_core_value_sigA2CE.id).localeCompare(String(var_core_value_sig1975.orderKey ?? var_core_value_sig1975.id))).map(var_core_value_sig6EA1 => var_core_value_sig6EA1.id),
      var_core_value_sig20BE = [...H.table(var_core_value_sig7AE3), "recordOrder"];
    return L([this._replaceOptional(var_core_value_sig3669, var_core_value_sigD6E7.records[var_core_value_sig1EB3].orderKey, var_core_value_sigE120), var_core_value_sigD6E7.recordOrder ? var_core_value_sig71B3.replaceOp(var_core_value_sig20BE, var_core_value_sigD6E7.recordOrder, var_core_value_sig5CBC) : var_core_value_sig71B3.insertOp(var_core_value_sig20BE, var_core_value_sig5CBC)]);
  }
  updateCell(var_core_value_sig6BD0, var_core_value_sig8C15, var_core_value_sig6DF7, var_core_value_sigB411, var_core_value_sigA81B) {
    var var_core_value_sigFE8D, var_core_value_sig8595;
    let var_core_value_sigF8DE = var_core_value_sig6BD0.tables[var_core_value_sig8C15],
      var_core_value_sigFE76 = nr(var_core_value_sigF8DE, var_core_value_sig6DF7, var_core_value_sigB411) ? var_core_value_sigF8DE : I(var_core_value_sigF8DE),
      var_core_value_sig84C8 = (var_core_value_sigFE8D = var_core_value_sigFE76.rowIndex) == null ? undefined : var_core_value_sigFE8D[var_core_value_sig6DF7],
      var_core_value_sig80C0 = (var_core_value_sig8595 = var_core_value_sigFE76.colIndex) == null ? undefined : var_core_value_sig8595[var_core_value_sigB411];
    if (var_core_value_sig84C8 == null || var_core_value_sig80C0 == null) {
      var var_core_value_sig22B4;
      return this._replaceOptional(H.cell(var_core_value_sig8C15, var_core_value_sig6DF7, var_core_value_sigB411), (var_core_value_sig22B4 = var_core_value_sig6BD0.tables[var_core_value_sig8C15]) == null || (var_core_value_sig22B4 = var_core_value_sig22B4.records[var_core_value_sig6DF7]) == null ? undefined : var_core_value_sig22B4.values[var_core_value_sigB411], var_core_value_sigA81B);
    }
    return this.setRangeValues(var_core_value_sig6BD0, var_core_value_sig8C15, [{
      'row': var_core_value_sig84C8,
      'col': var_core_value_sig80C0,
      'value': var_core_value_sigA81B
    }]);
  }
  setRecordValues(var_core_value_sigBB37, var_core_value_sig0C51, var_core_value_sigADA4) {
    let var_core_value_sig0E48 = var_core_value_sigBB37.tables[var_core_value_sig0C51],
      var_core_value_sig495B = var_core_value_sigADA4.every(var_core_value_sig029F => Object.keys(var_core_value_sig029F.values).every(var_core_value_sig8895 => nr(var_core_value_sig0E48, var_core_value_sig029F.recordId, var_core_value_sig8895))) ? var_core_value_sig0E48 : I(var_core_value_sig0E48),
      var_core_value_sig310C = var_core_value_sigADA4.flatMap(var_core_value_sig3767 => Object.entries(var_core_value_sig3767.values).flatMap(([var_core_value_sigC80B, var_core_value_sig284F]) => {
        var var_core_value_sigE154, var_core_value_sig4632;
        let var_core_value_sig12F2 = (var_core_value_sigE154 = var_core_value_sig495B.rowIndex) == null ? undefined : var_core_value_sigE154[var_core_value_sig3767.recordId],
          var_core_value_sig2259 = (var_core_value_sig4632 = var_core_value_sig495B.colIndex) == null ? undefined : var_core_value_sig4632[var_core_value_sigC80B];
        return var_core_value_sig12F2 == null || var_core_value_sig2259 == null ? [] : [{
          'row': var_core_value_sig12F2,
          'col': var_core_value_sig2259,
          'value': var_core_value_sig284F
        }];
      })),
      var_core_value_sig759E = var_core_value_sigADA4.flatMap(var_core_value_sig670B => Object.entries(var_core_value_sig670B.recordPatch ?? {}).map(([var_core_value_sig9E2F, var_core_value_sigD082]) => {
        var var_core_value_sigDBB7;
        let var_core_value_sigD0A8 = [...H.record(var_core_value_sig0C51, var_core_value_sig670B.recordId), var_core_value_sig9E2F],
          var_core_value_sigF4B9 = (var_core_value_sigDBB7 = var_core_value_sigBB37.tables[var_core_value_sig0C51]) == null || (var_core_value_sigDBB7 = var_core_value_sigDBB7.records[var_core_value_sig670B.recordId]) == null ? undefined : var_core_value_sigDBB7[var_core_value_sig9E2F];
        return this._replaceOptional(var_core_value_sigD0A8, var_core_value_sigF4B9, var_core_value_sigD082);
      }));
    return L([this.setRangeValues(var_core_value_sigBB37, var_core_value_sig0C51, var_core_value_sig310C), ...var_core_value_sig759E]);
  }
  setRangeValues(var_core_value_sig6C80, var_core_value_sig6B99, var_core_value_sig6ADC) {
    let var_core_value_sig41AD = var_core_value_sig6C80.tables[var_core_value_sig6B99],
      var_core_value_sigDBC2 = var_core_value_sig6ADC.every(var_core_value_sig6912 => rr(var_core_value_sig41AD, var_core_value_sig6912.row, var_core_value_sig6912.col)) ? var_core_value_sig41AD : I(var_core_value_sig41AD),
      var_core_value_sig7739 = new Map(),
      var_core_value_sig4040 = var_core_value_sig6ADC.flatMap(var_core_value_sigE235 => {
        var var_core_value_sig7664, var_core_value_sig2281, var_core_value_sig5E86, var_core_value_sig6998;
        let var_core_value_sigF639 = (var_core_value_sig7664 = var_core_value_sigDBC2.colId) == null ? undefined : var_core_value_sig7664[var_core_value_sigE235.col],
          var_core_value_sigEAE5 = (var_core_value_sig2281 = var_core_value_sigDBC2.rowId) == null ? undefined : var_core_value_sig2281[var_core_value_sigE235.row],
          var_core_value_sigE94C = var_core_value_sigF639 ? var_core_value_sigDBC2.fields[var_core_value_sigF639] : undefined;
        if (var_core_value_sigF639 === var_core_value_sigED20 || (var_core_value_sigE94C == null ? undefined : var_core_value_sigE94C.type) === var_core_value_sig06E6.RecordId) throw Error('[BaseJson1OpFactory]:\x20cannot\x20write\x20record-id.');
        let var_core_value_sig6D47 = vt(var_core_value_sigE235.value, var_core_value_sigE94C),
          var_core_value_sigCB82 = (var_core_value_sig5E86 = var_core_value_sigDBC2.cellData) == null || (var_core_value_sig5E86 = var_core_value_sig5E86[var_core_value_sigE235.row]) == null ? undefined : var_core_value_sig5E86[var_core_value_sigE235.col],
          var_core_value_sigCF4E = this._replaceOptional(H.cellData(var_core_value_sig6B99, var_core_value_sigE235.row, var_core_value_sigE235.col), var_core_value_sigCB82, var_core_value_sig6D47);
        if (!var_core_value_sigF639 || !var_core_value_sigEAE5) return [var_core_value_sigCF4E];
        let var_core_value_sig6CAD = (var_core_value_sig6998 = var_core_value_sigDBC2.records[var_core_value_sigEAE5]) == null ? undefined : var_core_value_sig6998.values[var_core_value_sigF639],
          var_core_value_sig8CF5 = (var_core_value_sigE94C == null ? undefined : var_core_value_sigE94C.type) === var_core_value_sig06E6.Attachment ? Et(var_core_value_sigE235.value) : xt(var_core_value_sigE235.value, var_core_value_sig6D47, var_core_value_sigE94C, var_core_value_sigDBC2, var_core_value_sigEAE5),
          var_core_value_sigDDD7 = [var_core_value_sigCF4E, this._replaceOptional(H.cell(var_core_value_sig6B99, var_core_value_sigEAE5, var_core_value_sigF639), var_core_value_sig6CAD, var_core_value_sig8CF5)];
        return (var_core_value_sigE94C == null ? undefined : var_core_value_sigE94C.type) === var_core_value_sig06E6.Attachment && var_core_value_sig7739.set(Ct(var_core_value_sigF639, var_core_value_sigEAE5), {
          'recordId': var_core_value_sigEAE5,
          'fieldId': var_core_value_sigF639,
          'attachments': var_core_value_sig8CF5
        }), var_core_value_sigDDD7;
      });
    return var_core_value_sig4040.length ? L([...var_core_value_sig4040, ...this._setAttachmentResources(var_core_value_sigDBC2, var_core_value_sig6B99, Array.from(var_core_value_sig7739.values()))]) : var_core_value_sig71B3.replaceOp(['tables', var_core_value_sig6B99, "cellData"], var_core_value_sigDBC2.cellData, var_core_value_sigDBC2.cellData);
  }
  createField(var_core_value_sig1AAA, var_core_value_sig58DB, var_core_value_sig4840) {
    let var_core_value_sigB76D = var_core_value_sig1AAA.tables[var_core_value_sig58DB];
    if (var_core_value_sigB76D.fields[var_core_value_sig4840.field['id']] || var_core_value_sigB76D.fieldOrder["includes"](var_core_value_sig4840.field['id'])) return var_core_value_sig71B3.replaceOp(["tables", var_core_value_sig58DB, "fieldOrder"], var_core_value_sigB76D.fieldOrder, var_core_value_sigB76D.fieldOrder);
    let var_core_value_sig1015 = Math.max(1, var_core_value_sig4840.index ?? var_core_value_sigB76D.fieldOrder["length"]),
      var_core_value_sig6223 = Object.values(var_core_value_sigB76D.views ?? {}).flatMap(var_core_value_sigB2CE => {
        var var_core_value_sig443C;
        if (!var_core_value_sigB2CE.fieldOrder || var_core_value_sigB2CE.fieldOrder["includes"](var_core_value_sig4840.field['id'])) return [];
        let var_core_value_sig39B1 = sr(((var_core_value_sig443C = var_core_value_sig4840.viewIndexes) == null ? undefined : var_core_value_sig443C[var_core_value_sigB2CE.id]) ?? var_core_value_sig1015, var_core_value_sigB2CE.fieldOrder["length"]);
        return [var_core_value_sig71B3.insertOp([...H.view(var_core_value_sig58DB, var_core_value_sigB2CE.id), "fieldOrder", var_core_value_sig39B1], var_core_value_sig4840.field['id'])];
      });
    return L([...(var_core_value_sig4840.field["type"] === var_core_value_sig06E6.Formula ? this._materializeFormulaTableNames(var_core_value_sig1AAA) : []), var_core_value_sig71B3.insertOp(H.field(var_core_value_sig58DB, var_core_value_sig4840.field['id']), var_core_value_sig4840.field), var_core_value_sig71B3.insertOp(H.fieldOrder(var_core_value_sig58DB, var_core_value_sig1015), var_core_value_sig4840.field['id']), ...var_core_value_sig6223]);
  }
  duplicateField(var_core_value_sigC6B6, var_core_value_sig498A, var_core_value_sigEF45, var_core_value_sig36FE) {
    let var_core_value_sig3AF5 = var_core_value_sigC6B6.tables[var_core_value_sig498A];
    if (!var_core_value_sig3AF5.fields[var_core_value_sigEF45] || var_core_value_sig3AF5.fields[var_core_value_sig36FE.field['id']] || var_core_value_sig3AF5.fieldOrder["includes"](var_core_value_sig36FE.field['id'])) return var_core_value_sig71B3.replaceOp(["tables", var_core_value_sig498A, "fieldOrder"], var_core_value_sig3AF5.fieldOrder, var_core_value_sig3AF5.fieldOrder);
    let var_core_value_sig14E6 = var_core_value_sig36FE.index ?? var_core_value_sig3AF5.fieldOrder["indexOf"](var_core_value_sigEF45) + 1,
      var_core_value_sig8690 = var_core_value_sig3AF5.fieldOrder['filter'](var_core_value_sig210D => var_core_value_sig210D !== var_core_value_sig36FE.field['id']),
      var_core_value_sigDF29 = ar(var_core_value_sig8690, var_core_value_sig36FE.field['id'], var_core_value_sig14E6),
      var_core_value_sigC0F8 = Object.values(var_core_value_sig3AF5.views ?? {}).flatMap(var_core_value_sigB4B4 => {
        var var_core_value_sigD407, var_core_value_sig63F3, var_core_value_sig6A71, var_core_value_sig3BF6;
        let var_core_value_sig38CE = (var_core_value_sigD407 = var_core_value_sigB4B4.fieldOrder) != null && var_core_value_sigD407.length ? var_core_value_sigB4B4.fieldOrder : var_core_value_sig8690;
        if (var_core_value_sig38CE.includes(var_core_value_sig36FE.field['id'])) return [];
        let var_core_value_sig62B7 = ar(var_core_value_sig38CE, var_core_value_sig36FE.field['id'], ((var_core_value_sig63F3 = var_core_value_sig36FE.viewIndexes) == null ? undefined : var_core_value_sig63F3[var_core_value_sigB4B4.id]) ?? var_core_value_sig14E6),
          var_core_value_sig37A8 = (var_core_value_sig6A71 = var_core_value_sigB4B4.fieldSettings) == null ? undefined : var_core_value_sig6A71[var_core_value_sigEF45];
        return [this._replaceOptional([...H.view(var_core_value_sig498A, var_core_value_sigB4B4.id), "fieldOrder"], var_core_value_sigB4B4.fieldOrder, var_core_value_sig62B7), ...(var_core_value_sig37A8 ? [this._replaceOptional([...H.view(var_core_value_sig498A, var_core_value_sigB4B4.id), "fieldSettings", var_core_value_sig36FE.field['id']], (var_core_value_sig3BF6 = var_core_value_sigB4B4.fieldSettings) == null ? undefined : var_core_value_sig3BF6[var_core_value_sig36FE.field['id']], var_core_value_sig37A8)] : [])];
      }),
      var_core_value_sig3C75 = Object.values(var_core_value_sig3AF5.records).filter(var_core_value_sigA90D => Object.prototype["hasOwnProperty"].call(var_core_value_sigA90D.values, var_core_value_sigEF45)).map(var_core_value_sig7A3C => this._replaceOptional(H.cell(var_core_value_sig498A, var_core_value_sig7A3C.id, var_core_value_sig36FE.field['id']), var_core_value_sig7A3C.values[var_core_value_sig36FE.field['id']], var_core_value_sig7A3C.values[var_core_value_sigEF45]));
    return L([...(var_core_value_sig36FE.field['type'] === var_core_value_sig06E6.Formula ? this._materializeFormulaTableNames(var_core_value_sigC6B6) : []), var_core_value_sig71B3.insertOp(H.field(var_core_value_sig498A, var_core_value_sig36FE.field['id']), var_core_value_sig36FE.field), var_core_value_sig71B3.replaceOp(["tables", var_core_value_sig498A, "fieldOrder"], var_core_value_sig3AF5.fieldOrder, var_core_value_sigDF29), ...var_core_value_sigC0F8, ...var_core_value_sig3C75]);
  }
  updateField(var_core_value_sig992D, var_core_value_sigE4E4, var_core_value_sigA4B0, var_core_value_sig5F50) {
    let var_core_value_sig4494 = var_core_value_sig992D.tables[var_core_value_sigE4E4].fields[var_core_value_sigA4B0],
      var_core_value_sigFFAF = {
        ...var_core_value_sig4494,
        ...var_core_value_sig5F50
      };
    Object.keys(var_core_value_sig5F50).forEach(var_core_value_sig0511 => {
      var_core_value_sig5F50[var_core_value_sig0511] === undefined && delete var_core_value_sigFFAF[var_core_value_sig0511];
    });
    let var_core_value_sig478B = Zn(var_core_value_sig992D.tables[var_core_value_sigE4E4], var_core_value_sigA4B0, var_core_value_sig4494, var_core_value_sigFFAF);
    var_core_value_sigFFAF = var_core_value_sig478B.field;
    let var_core_value_sig1E21 = var_core_value_sig71B3.replaceOp(H.field(var_core_value_sigE4E4, var_core_value_sigA4B0), var_core_value_sig4494, var_core_value_sigFFAF);
    return var_core_value_sigFFAF.type === var_core_value_sig06E6.Formula ? L([...this._materializeFormulaTableNames(var_core_value_sig992D), var_core_value_sig1E21, ...this._setFormulaFieldCells(var_core_value_sig992D, var_core_value_sigE4E4, var_core_value_sigA4B0, var_core_value_sigFFAF)]) : L([var_core_value_sig1E21, ...(var_core_value_sig478B.patches["length"] ? [this.setRangeValues(var_core_value_sig992D, var_core_value_sigE4E4, var_core_value_sig478B.patches)] : [])]);
  }
  changeFieldType(var_core_value_sig9DBF, var_core_value_sig36CC, var_core_value_sigA568, var_core_value_sigD22D) {
    return this.updateField(var_core_value_sig9DBF, var_core_value_sig36CC, var_core_value_sigA568, var_core_value_sigD22D);
  }
  deleteField(var_core_value_sig85D5, var_core_value_sig5D2E, var_core_value_sig7221) {
    let var_core_value_sig0A5A = var_core_value_sig85D5.tables[var_core_value_sig5D2E];
    if (!(var_core_value_sig0A5A != null && var_core_value_sig0A5A.fields[var_core_value_sig7221]) || var_core_value_sig0A5A.primaryFieldId === var_core_value_sig7221 || var_core_value_sig7221 === var_core_value_sigED20) return var_core_value_sig71B3.replaceOp(["tables", var_core_value_sig5D2E, "fieldOrder"], var_core_value_sig0A5A == null ? undefined : var_core_value_sig0A5A.fieldOrder, var_core_value_sig0A5A == null ? undefined : var_core_value_sig0A5A.fieldOrder);
    let var_core_value_sigE6D6 = var_core_value_sig0A5A.fieldOrder["indexOf"](var_core_value_sig7221),
      var_core_value_sig8507 = Object.values(var_core_value_sig0A5A.views).flatMap(var_core_value_sig1F44 => {
        var var_core_value_sigCB04, var_core_value_sig947E, var_core_value_sig4545, var_core_value_sigF39A, var_core_value_sigF79C, var_core_value_sig2E54, var_core_value_sig7658;
        let var_core_value_sigDCF5 = [],
          var_core_value_sigC786 = ((var_core_value_sigCB04 = var_core_value_sig1F44.fieldOrder) == null ? undefined : var_core_value_sigCB04.indexOf(var_core_value_sig7221)) ?? -1;
        var_core_value_sigC786 >= 0 && var_core_value_sigDCF5.push(var_core_value_sig71B3.removeOp([...H.view(var_core_value_sig5D2E, var_core_value_sig1F44.id), "fieldOrder", var_core_value_sigC786], var_core_value_sig7221));
        let var_core_value_sigC0D9 = (var_core_value_sig947E = var_core_value_sig1F44.fieldSettings) == null ? undefined : var_core_value_sig947E[var_core_value_sig7221];
        var_core_value_sigC0D9 !== undefined && var_core_value_sigDCF5.push(var_core_value_sig71B3.removeOp([...H.view(var_core_value_sig5D2E, var_core_value_sig1F44.id), 'fieldSettings', var_core_value_sig7221], var_core_value_sigC0D9));
        let var_core_value_sigF0511 = var_core_value_sig1F44.filter ? {
          ...var_core_value_sig1F44.filter,
          'conditions': var_core_value_sig1F44.filter['conditions'].filter(var_core_value_sig5CEE => var_core_value_sig5CEE.fieldId !== var_core_value_sig7221)
        } : var_core_value_sig1F44.filter;
        var_core_value_sigF0511 && var_core_value_sigF0511.conditions["length"] !== ((var_core_value_sig4545 = var_core_value_sig1F44.filter) == null ? undefined : var_core_value_sig4545.conditions['length']) && var_core_value_sigDCF5.push(this._replaceOptional([...H.view(var_core_value_sig5D2E, var_core_value_sig1F44.id), 'filter'], var_core_value_sig1F44.filter, var_core_value_sigF0511));
        let var_core_value_sig5825 = (var_core_value_sigF39A = var_core_value_sig1F44.sort) == null ? undefined : var_core_value_sigF39A.filter(var_core_value_sigE92A => var_core_value_sigE92A.fieldId !== var_core_value_sig7221);
        var_core_value_sig5825 && var_core_value_sig5825.length !== ((var_core_value_sigF79C = var_core_value_sig1F44.sort) == null ? undefined : var_core_value_sigF79C.length) && var_core_value_sigDCF5.push(this._replaceOptional([...H.view(var_core_value_sig5D2E, var_core_value_sig1F44.id), 'sort'], var_core_value_sig1F44.sort, var_core_value_sig5825));
        let var_core_value_sig4EB7 = (var_core_value_sig2E54 = var_core_value_sig1F44.group) == null ? undefined : var_core_value_sig2E54.filter(var_core_value_sig362B => var_core_value_sig362B.fieldId !== var_core_value_sig7221);
        var_core_value_sig4EB7 && var_core_value_sig4EB7.length !== ((var_core_value_sig7658 = var_core_value_sig1F44.group) == null ? undefined : var_core_value_sig7658.length) && var_core_value_sigDCF5.push(this._replaceOptional([...H.view(var_core_value_sig5D2E, var_core_value_sig1F44.id), 'group'], var_core_value_sig1F44.group, var_core_value_sig4EB7));
        let var_core_value_sig73AF = or(var_core_value_sig1F44.config, var_core_value_sig7221);
        return JSON.stringify(var_core_value_sig73AF) !== JSON.stringify(var_core_value_sig1F44.config) && var_core_value_sigDCF5.push(var_core_value_sig71B3.replaceOp([...H.view(var_core_value_sig5D2E, var_core_value_sig1F44.id), "config"], var_core_value_sig1F44.config, var_core_value_sig73AF)), var_core_value_sigDCF5;
      }),
      var_core_value_sig8A7F = Object.values(var_core_value_sig0A5A.records).flatMap(var_core_value_sig548A => Object.prototype['hasOwnProperty'].call(var_core_value_sig548A.values, var_core_value_sig7221) ? [var_core_value_sig71B3.removeOp(H.cell(var_core_value_sig5D2E, var_core_value_sig548A.id, var_core_value_sig7221), var_core_value_sig548A.values[var_core_value_sig7221])] : []);
    return L([var_core_value_sig71B3.removeOp(H.field(var_core_value_sig5D2E, var_core_value_sig7221), var_core_value_sig0A5A.fields[var_core_value_sig7221]), var_core_value_sig71B3.removeOp(H.fieldOrder(var_core_value_sig5D2E, var_core_value_sigE6D6), var_core_value_sig7221), ...var_core_value_sig8507, ...var_core_value_sig8A7F, ...this._deleteAttachmentResources(var_core_value_sig0A5A, var_core_value_sig5D2E, var_core_value_sigE026 => var_core_value_sigE026.startsWith(var_core_value_sig7221 + '\x1f'))]);
  }
  moveField(var_core_value_sig9E81, var_core_value_sig8295, var_core_value_sigA975, var_core_value_sig1263) {
    let var_core_value_sig457C = var_core_value_sig9E81.tables[var_core_value_sig8295].fieldOrder;
    if (var_core_value_sigA975 === var_core_value_sigED20 || var_core_value_sig1263.beforeFieldId === var_core_value_sigED20) throw Error("[BaseJson1OpFactory]: cannot move a field before record-id.");
    let var_core_value_sigA4E6 = ir(var_core_value_sig457C, var_core_value_sigA975, var_core_value_sig1263);
    return var_core_value_sig71B3.replaceOp(["tables", var_core_value_sig8295, 'fieldOrder'], var_core_value_sig457C, var_core_value_sigA4E6);
  }
  createView(var_core_value_sig934F, var_core_value_sig74A7, var_core_value_sig3685, var_core_value_sigC621 = var_core_value_sig934F.tables[var_core_value_sig74A7].viewOrder["length"]) {
    return L([var_core_value_sig71B3.insertOp(H.view(var_core_value_sig74A7, var_core_value_sig3685.id), var_core_value_sig3685), var_core_value_sig71B3.insertOp(["tables", var_core_value_sig74A7, "viewOrder", var_core_value_sigC621], var_core_value_sig3685.id)]);
  }
  renameView(var_core_value_sig86D7, var_core_value_sig431B1, var_core_value_sig5C7C, var_core_value_sig87E2) {
    return var_core_value_sig71B3.replaceOp([...H.view(var_core_value_sig431B1, var_core_value_sig5C7C), "name"], var_core_value_sig86D7.tables[var_core_value_sig431B1].views[var_core_value_sig5C7C].name, var_core_value_sig87E2);
  }
  deleteView(var_core_value_sig2E04, var_core_value_sig2EDD, var_core_value_sig27D2) {
    let var_core_value_sig355D = var_core_value_sig2E04.tables[var_core_value_sig2EDD],
      var_core_value_sig8B21 = var_core_value_sig355D.views[var_core_value_sig27D2],
      var_core_value_sigEB36 = var_core_value_sig355D.viewOrder['indexOf'](var_core_value_sig27D2);
    return L([var_core_value_sig71B3.removeOp(H.view(var_core_value_sig2EDD, var_core_value_sig27D2), var_core_value_sig8B21), var_core_value_sig71B3.removeOp(["tables", var_core_value_sig2EDD, "viewOrder", var_core_value_sigEB36], var_core_value_sig27D2)]);
  }
  moveView(var_core_value_sig5C27, var_core_value_sigD494, var_core_value_sigBF6D, var_core_value_sigD051) {
    let var_core_value_sig16D9 = var_core_value_sig5C27.tables[var_core_value_sigD494].viewOrder,
      var_core_value_sigF378 = ir(var_core_value_sig16D9, var_core_value_sigBF6D, {
        'beforeFieldId': var_core_value_sigD051.beforeViewId,
        'afterFieldId': var_core_value_sigD051.afterViewId
      });
    return var_core_value_sig71B3.replaceOp(["tables", var_core_value_sigD494, "viewOrder"], var_core_value_sig16D9, var_core_value_sigF378);
  }
  updateViewConfig(var_core_value_sig5F6C, var_core_value_sig7E85, var_core_value_sigF204, var_core_value_sig7A15) {
    let var_core_value_sigEEA6 = var_core_value_sig5F6C.tables[var_core_value_sig7E85].views[var_core_value_sigF204].config ?? {},
      var_core_value_sigEAE1 = {
        ...var_core_value_sigEEA6,
        ...var_core_value_sig7A15
      };
    return Object.keys(var_core_value_sig7A15).forEach(var_core_value_sig339E => {
      var_core_value_sig7A15[var_core_value_sig339E] === undefined && delete var_core_value_sigEAE1[var_core_value_sig339E];
    }), var_core_value_sig71B3.replaceOp([...H.view(var_core_value_sig7E85, var_core_value_sigF204), "config"], var_core_value_sigEEA6, var_core_value_sigEAE1);
  }
  setViewFilter(var_core_value_sigC69F, var_core_value_sig0442, var_core_value_sig697A, var_core_value_sigDB65) {
    return this._replaceOptional([...H.view(var_core_value_sig0442, var_core_value_sig697A), "filter"], var_core_value_sigC69F.tables[var_core_value_sig0442].views[var_core_value_sig697A].filter, var_core_value_sigDB65);
  }
  setViewSort(var_core_value_sig045E, var_core_value_sig4524, var_core_value_sig64D5, var_core_value_sig9678) {
    return this._replaceOptional([...H.view(var_core_value_sig4524, var_core_value_sig64D5), 'sort'], var_core_value_sig045E.tables[var_core_value_sig4524].views[var_core_value_sig64D5].sort, var_core_value_sig9678);
  }
  setViewGroup(var_core_value_sig5E74, var_core_value_sig75FC, var_core_value_sig639A, var_core_value_sig567C) {
    return this._replaceOptional([...H.view(var_core_value_sig75FC, var_core_value_sig639A), "group"], var_core_value_sig5E74.tables[var_core_value_sig75FC].views[var_core_value_sig639A].group, var_core_value_sig567C);
  }
  setViewFieldVisible(var_core_value_sig825F, var_core_value_sig546D, var_core_value_sig8078, var_core_value_sigDCED, var_core_value_sig2829) {
    return this._setViewFieldSetting(var_core_value_sig825F, var_core_value_sig546D, var_core_value_sig8078, var_core_value_sigDCED, {
      'hidden': !var_core_value_sig2829
    });
  }
  setViewFieldWidth(var_core_value_sig6EE2, var_core_value_sig4CCC, var_core_value_sig6E47, var_core_value_sigB64D, var_core_value_sig2407) {
    return this._setViewFieldSetting(var_core_value_sig6EE2, var_core_value_sig4CCC, var_core_value_sig6E47, var_core_value_sigB64D, {
      'width': var_core_value_sig2407
    });
  }
  setViewFieldOrder(var_core_value_sigE4D0, var_core_value_sigD5F1, var_core_value_sigBC19, var_core_value_sig4F3C, var_core_value_sig8D44) {
    let var_core_value_sig1660 = var_core_value_sigE4D0.tables[var_core_value_sigD5F1].views[var_core_value_sigBC19],
      var_core_value_sigEE7B = ir(var_core_value_sig1660.fieldOrder ?? var_core_value_sigE4D0.tables[var_core_value_sigD5F1].fieldOrder, var_core_value_sig4F3C, var_core_value_sig8D44);
    return this._replaceOptional([...H.view(var_core_value_sigD5F1, var_core_value_sigBC19), 'fieldOrder'], var_core_value_sig1660.fieldOrder, var_core_value_sigEE7B);
  }
  _setViewFieldSetting(var_core_value_sig44DF, var_core_value_sig7E48, var_core_value_sig7B9E, var_core_value_sig5C3B, var_core_value_sig4002) {
    let var_core_value_sig4153 = var_core_value_sig44DF.tables[var_core_value_sig7E48].views[var_core_value_sig7B9E].fieldSettings ?? {},
      var_core_value_sig2825 = {
        ...var_core_value_sig4153,
        [var_core_value_sig5C3B]: {
          ...var_core_value_sig4153[var_core_value_sig5C3B],
          ...var_core_value_sig4002
        }
      };
    return this._replaceOptional([...H.view(var_core_value_sig7E48, var_core_value_sig7B9E), "fieldSettings"], var_core_value_sig44DF.tables[var_core_value_sig7E48].views[var_core_value_sig7B9E].fieldSettings, var_core_value_sig2825);
  }
  _createRecordOrderOp(var_core_value_sig5FD0, var_core_value_sigA7E3, var_core_value_sigA784) {
    let var_core_value_sig4406 = var_core_value_sig5FD0.tables[var_core_value_sigA7E3],
      var_core_value_sig6806 = new Set(var_core_value_sigA784.map(var_core_value_sig7550 => var_core_value_sig7550.id)),
      var_core_value_sigD4AA = [...Object.values(var_core_value_sig4406.records).filter(var_core_value_sig2983 => !var_core_value_sig6806.has(var_core_value_sig2983.id)), ...var_core_value_sigA784].sort((var_core_value_sigE1B0, var_core_value_sigD4FF) => String(var_core_value_sigE1B0.orderKey ?? var_core_value_sigE1B0.id).localeCompare(String(var_core_value_sigD4FF.orderKey ?? var_core_value_sigD4FF.id))).map(var_core_value_sig1E5B => var_core_value_sig1E5B.id),
      var_core_value_sigDC41 = [...H.table(var_core_value_sigA7E3), 'recordOrder'];
    return var_core_value_sig4406.recordOrder ? var_core_value_sig71B3.replaceOp(var_core_value_sigDC41, var_core_value_sig4406.recordOrder, var_core_value_sigD4AA) : var_core_value_sig71B3.insertOp(var_core_value_sigDC41, var_core_value_sigD4AA);
  }
  _materializeFormulaTableNames(var_core_value_sigFB47, var_core_value_sig9B3D1 = new Set()) {
    let var_core_value_sigC1CF = var_core_value_sigBD2F(var_core_value_sigFB47);
    return Object.values(var_core_value_sigFB47.tables).filter(var_core_value_sigB680 => !var_core_value_sig9B3D1.has(var_core_value_sigB680.id)).sort((var_core_value_sig1F64, var_core_value_sigDD1C) => var_core_value_sig1F64.id["localeCompare"](var_core_value_sigDD1C.id)).flatMap(var_core_value_sig2C39 => {
      let var_core_value_sigB7D1 = var_core_value_sigC1CF.get(var_core_value_sig2C39.id);
      return !var_core_value_sigB7D1 || var_core_value_sig2C39.formulaName === var_core_value_sigB7D1 ? [] : [this._replaceOptional([...H.table(var_core_value_sig2C39.id), "formulaName"], var_core_value_sig2C39.formulaName, var_core_value_sigB7D1)];
    });
  }
  _setFormulaFieldCells(var_core_value_sigEE12, var_core_value_sigD70C, var_core_value_sigF047, var_core_value_sigC2F9) {
    var var_core_value_sig1F51, var_core_value_sig29F5;
    let var_core_value_sig5A51 = I(var_core_value_sigEE12.tables[var_core_value_sigD70C]),
      var_core_value_sigF1D1 = String(((var_core_value_sig1F51 = var_core_value_sigC2F9.config) == null ? undefined : var_core_value_sig1F51.formula) ?? '').trim(),
      var_core_value_sig370E = (var_core_value_sig29F5 = var_core_value_sig5A51.colIndex) == null ? undefined : var_core_value_sig29F5[var_core_value_sigF047];
    if (var_core_value_sig370E == null) return [];
    let var_core_value_sigDE14 = var_core_value_sig5A51.recordOrder ?? Object.keys(var_core_value_sig5A51.records),
      var_core_value_sig02CB = var_core_value_sigDE14.map(var_core_value_sig64F0 => {
        var var_core_value_sig85B1;
        return (var_core_value_sig85B1 = var_core_value_sig5A51.rowIndex) == null ? undefined : var_core_value_sig85B1[var_core_value_sig64F0];
      }).find(var_core_value_sig3141 => var_core_value_sig3141 != null);
    return var_core_value_sigDE14.flatMap(var_core_value_sig2162 => {
      var var_core_value_sig2EAD, var_core_value_sig6774;
      let var_core_value_sig340D = (var_core_value_sig2EAD = var_core_value_sig5A51.rowIndex) == null ? undefined : var_core_value_sig2EAD[var_core_value_sig2162];
      if (var_core_value_sig340D == null) return [];
      let var_core_value_sig82D4 = (var_core_value_sig6774 = var_core_value_sig5A51.cellData) == null || (var_core_value_sig6774 = var_core_value_sig6774[var_core_value_sig340D]) == null ? undefined : var_core_value_sig6774[var_core_value_sig370E],
        var_core_value_sigBDE4 = var_core_value_sigF1D1 ? var_core_value_sig340D === var_core_value_sig02CB ? {
          'f': var_core_value_sigF1D1,
          'si': var_core_value_sigF047
        } : {
          'si': var_core_value_sigF047
        } : {
          'v': null,
          't': null
        };
      return [this._replaceOptional(H.cellData(var_core_value_sigD70C, var_core_value_sig340D, var_core_value_sig370E), var_core_value_sig82D4, var_core_value_sigBDE4)];
    });
  }
  _setAttachmentResources(var_core_value_sig6CBB, var_core_value_sig68DA, var_core_value_sig64D8) {
    var var_core_value_sigD755;
    let var_core_value_sigF897 = new Map(Object.entries(((var_core_value_sigD755 = var_core_value_sig6CBB.resources) == null ? undefined : var_core_value_sigD755.attachmentSets) ?? {})),
      var_core_value_sigA578 = new Map(),
      var_core_value_sig0260 = new Set(),
      var_core_value_sig034D = var_core_value_sig64D8.map(({
        recordId: var_core_value_sig7DF1,
        fieldId: var_core_value_sigDC86,
        attachments: var_core_value_sig0B0C
      }) => {
        var var_core_value_sigA39E;
        let var_core_value_sigBBEE = Ct(var_core_value_sigDC86, var_core_value_sig7DF1),
          var_core_value_sig011D = var_core_value_sig0B0C.map((var_core_value_sig5CA5, var_core_value_sigE90F) => String(var_core_value_sig5CA5.id ?? var_core_value_sigBBEE + '\x1f' + var_core_value_sigE90F));
        return var_core_value_sig0260.add(var_core_value_sigBBEE), var_core_value_sigF897.set(var_core_value_sigBBEE, var_core_value_sig011D), var_core_value_sig0B0C.forEach((var_core_value_sigEFD4, var_core_value_sig861B) => {
          let var_core_value_sig5237 = var_core_value_sig011D[var_core_value_sig861B];
          var_core_value_sigA578.set(var_core_value_sig5237, {
            ...var_core_value_sigEFD4,
            'id': var_core_value_sig5237
          });
        }), this._replaceOptional(H.attachmentSet(var_core_value_sig68DA, var_core_value_sigBBEE), (var_core_value_sigA39E = var_core_value_sig6CBB.resources) == null || (var_core_value_sigA39E = var_core_value_sigA39E.attachmentSets) == null ? undefined : var_core_value_sigA39E[var_core_value_sigBBEE], var_core_value_sig011D);
      }),
      var_core_value_sig89EC = Array.from(var_core_value_sigA578).map(([var_core_value_sig6167, var_core_value_sig65A1]) => {
        var var_core_value_sig7F19;
        return this._replaceOptional(H.attachment(var_core_value_sig68DA, var_core_value_sig6167), (var_core_value_sig7F19 = var_core_value_sig6CBB.resources) == null || (var_core_value_sig7F19 = var_core_value_sig7F19.attachments) == null ? undefined : var_core_value_sig7F19[var_core_value_sig6167], var_core_value_sig65A1);
      }),
      var_core_value_sig9975 = new Set(Array.from(var_core_value_sigF897.values()).flat()),
      var_core_value_sigD6D9 = new Set(Array.from(var_core_value_sig0260).flatMap(var_core_value_sig7827 => {
        var var_core_value_sig652C;
        return ((var_core_value_sig652C = var_core_value_sig6CBB.resources) == null || (var_core_value_sig652C = var_core_value_sig652C.attachmentSets) == null ? undefined : var_core_value_sig652C[var_core_value_sig7827]) ?? [];
      })),
      var_core_value_sig2637 = Array.from(var_core_value_sigD6D9).flatMap(var_core_value_sig7E32 => {
        var var_core_value_sig4C07;
        let var_core_value_sig79AB = (var_core_value_sig4C07 = var_core_value_sig6CBB.resources) == null || (var_core_value_sig4C07 = var_core_value_sig4C07.attachments) == null ? undefined : var_core_value_sig4C07[var_core_value_sig7E32];
        return var_core_value_sig79AB !== undefined && !var_core_value_sig9975.has(var_core_value_sig7E32) ? [var_core_value_sig71B3.removeOp(H.attachment(var_core_value_sig68DA, var_core_value_sig7E32), var_core_value_sig79AB)] : [];
      });
    return [...var_core_value_sig034D, ...var_core_value_sig89EC, ...var_core_value_sig2637];
  }
  _deleteAttachmentResources(var_core_value_sigAF1D, var_core_value_sigC92D, var_core_value_sigEA3D) {
    var var_core_value_sig2841;
    let var_core_value_sig9FE1 = ((var_core_value_sig2841 = var_core_value_sigAF1D.resources) == null ? undefined : var_core_value_sig2841.attachmentSets) ?? {},
      var_core_value_sig9DAA = Object.entries(var_core_value_sig9FE1).filter(([var_core_value_sig8E74]) => var_core_value_sigEA3D(var_core_value_sig8E74));
    if (!var_core_value_sig9DAA.length) return [];
    let var_core_value_sig1F8A = new Set(Object.entries(var_core_value_sig9FE1).filter(([var_core_value_sig104C]) => !var_core_value_sigEA3D(var_core_value_sig104C)).flatMap(([, var_core_value_sig841D]) => var_core_value_sig841D)),
      var_core_value_sigEBB4 = new Set(var_core_value_sig9DAA.flatMap(([, var_core_value_sig90CB]) => var_core_value_sig90CB));
    return [...var_core_value_sig9DAA.map(([var_core_value_sigBDF5, var_core_value_sigACC6]) => var_core_value_sig71B3.removeOp(H.attachmentSet(var_core_value_sigC92D, var_core_value_sigBDF5), var_core_value_sigACC6)), ...Array.from(var_core_value_sigEBB4).flatMap(var_core_value_sig1614 => {
      var var_core_value_sig85C3;
      let var_core_value_sigB996 = (var_core_value_sig85C3 = var_core_value_sigAF1D.resources) == null || (var_core_value_sig85C3 = var_core_value_sig85C3.attachments) == null ? undefined : var_core_value_sig85C3[var_core_value_sig1614];
      return var_core_value_sigB996 !== undefined && !var_core_value_sig1F8A.has(var_core_value_sig1614) ? [var_core_value_sig71B3.removeOp(H.attachment(var_core_value_sigC92D, var_core_value_sig1614), var_core_value_sigB996)] : [];
    })];
  }
  _replaceOptional(var_core_value_sig2B74, var_core_value_sig0483, var_core_value_sig4A48) {
    return var_core_value_sig0483 === undefined ? var_core_value_sig71B3.insertOp(var_core_value_sig2B74, var_core_value_sig4A48) : var_core_value_sig71B3.replaceOp(var_core_value_sig2B74, var_core_value_sig0483, var_core_value_sig4A48);
  }
};
function Zn(var_core_value_sig305B, var_core_value_sigAE39, var_core_value_sigF21C, var_core_value_sig66D1) {
  var var_core_value_sig83A6;
  let var_core_value_sig7D8E = var_core_value_sig66D1.type;
  if (var_core_value_sigF21C.type !== var_core_value_sig7D8E || var_core_value_sig7D8E !== var_core_value_sig06E6.SingleSelect && var_core_value_sig7D8E !== var_core_value_sig06E6.MultiSelect || Qn(var_core_value_sig66D1.config["optionSource"])) return {
    'field': var_core_value_sig66D1,
    'patches': []
  };
  let var_core_value_sigADFE = $n(var_core_value_sigF21C),
    var_core_value_sigF11A = $n(var_core_value_sig66D1);
  if (![...var_core_value_sigADFE].some(var_core_value_sigD170 => !var_core_value_sigF11A.has(var_core_value_sigD170))) return {
    'field': var_core_value_sig66D1,
    'patches': []
  };
  let var_core_value_sigF020 = er(var_core_value_sig66D1.defaultValue, var_core_value_sigF11A, var_core_value_sig7D8E),
    var_core_value_sigAECB = tr(var_core_value_sigF020, var_core_value_sig66D1.defaultValue) ? var_core_value_sig66D1 : {
      ...var_core_value_sig66D1,
      'defaultValue': var_core_value_sigF020
    },
    var_core_value_sigF759 = I(var_core_value_sig305B),
    var_core_value_sig52AE = (var_core_value_sig83A6 = var_core_value_sigF759.colIndex) == null ? undefined : var_core_value_sig83A6[var_core_value_sigAE39];
  return var_core_value_sig52AE == null ? {
    'field': var_core_value_sigAECB,
    'patches': []
  } : {
    'field': var_core_value_sigAECB,
    'patches': (var_core_value_sigF759.recordOrder ?? []).flatMap(var_core_value_sig90E5 => {
      var var_core_value_sig7000, var_core_value_sigD7C5;
      let var_core_value_sig3633 = (var_core_value_sig7000 = var_core_value_sigF759.rowIndex) == null ? undefined : var_core_value_sig7000[var_core_value_sig90E5],
        var_core_value_sig1DF5 = (var_core_value_sigD7C5 = var_core_value_sigF759.records[var_core_value_sig90E5]) == null ? undefined : var_core_value_sigD7C5.values[var_core_value_sigAE39],
        var_core_value_sig90A3 = er(var_core_value_sig1DF5, var_core_value_sigF11A, var_core_value_sig7D8E);
      return var_core_value_sig3633 == null || tr(var_core_value_sig90A3, var_core_value_sig1DF5) ? [] : [{
        'row': var_core_value_sig3633,
        'col': var_core_value_sig52AE,
        'value': var_core_value_sig90A3 ?? null
      }];
    })
  };
}
;
function Qn(var_core_value_sig35A1) {
  return typeof var_core_value_sig35A1 == 'object' && !!var_core_value_sig35A1 && "type" in var_core_value_sig35A1 && var_core_value_sig35A1.type === "field";
}
;
function $n(var_core_value_sig5F74) {
  var var_core_value_sig72A2;
  let var_core_value_sig956E = Array.isArray((var_core_value_sig72A2 = var_core_value_sig5F74.config) == null ? undefined : var_core_value_sig72A2.options) ? var_core_value_sig5F74.config["options"] : [];
  return new Set(var_core_value_sig956E.flatMap(var_core_value_sig28BE => {
    if (!var_core_value_sig28BE || typeof var_core_value_sig28BE != 'object' || !('id' in var_core_value_sig28BE)) return [];
    let var_core_value_sig0224 = String(var_core_value_sig28BE.id);
    return var_core_value_sig0224 ? [var_core_value_sig0224] : [];
  }));
}
;
function er(var_core_value_sig7B0C, var_core_value_sig0616, var_core_value_sigDA4C) {
  if (var_core_value_sig7B0C == null || var_core_value_sig7B0C === '') return var_core_value_sig7B0C;
  if (var_core_value_sigDA4C === var_core_value_sig06E6.SingleSelect) return var_core_value_sig0616.has(String(var_core_value_sig7B0C)) ? var_core_value_sig7B0C : null;
  let var_core_value_sig5EDC = Array.isArray(var_core_value_sig7B0C) ? var_core_value_sig7B0C.map(String) : String(var_core_value_sig7B0C).split(',').map(var_core_value_sig854B => var_core_value_sig854B.trim()).filter(Boolean),
    var_core_value_sig3956 = var_core_value_sig5EDC.filter(var_core_value_sig1FF6 => var_core_value_sig0616.has(var_core_value_sig1FF6));
  return var_core_value_sig3956.length === var_core_value_sig5EDC.length ? var_core_value_sig7B0C : Array.isArray(var_core_value_sig7B0C) ? var_core_value_sig3956 : String(var_core_value_sig7B0C).includes(',') ? var_core_value_sig3956.join(',') : var_core_value_sig3956[0] ?? [];
}
;
function tr(var_core_value_sig182F, var_core_value_sig76FA) {
  return JSON.stringify(var_core_value_sig182F) === JSON.stringify(var_core_value_sig76FA);
}
;
function nr(var_core_value_sig960A, var_core_value_sigBE8E, var_core_value_sig294A) {
  var var_core_value_sig31A6, var_core_value_sigAA4F, var_core_value_sig672C, var_core_value_sig7D0D;
  let var_core_value_sigE30C = (var_core_value_sig31A6 = var_core_value_sig960A.rowIndex) == null ? undefined : var_core_value_sig31A6[var_core_value_sigBE8E],
    var_core_value_sigC06A = (var_core_value_sigAA4F = var_core_value_sig960A.colIndex) == null ? undefined : var_core_value_sigAA4F[var_core_value_sig294A];
  return var_core_value_sigE30C != null && var_core_value_sigC06A != null && ((var_core_value_sig672C = var_core_value_sig960A.rowId) == null ? undefined : var_core_value_sig672C[var_core_value_sigE30C]) === var_core_value_sigBE8E && ((var_core_value_sig7D0D = var_core_value_sig960A.colId) == null ? undefined : var_core_value_sig7D0D[var_core_value_sigC06A]) === var_core_value_sig294A && var_core_value_sig960A.cellData != null;
}
;
function rr(var_core_value_sig3CF8, var_core_value_sig3EC3, var_core_value_sigBD61) {
  var var_core_value_sig445D, var_core_value_sigC15F;
  return ((var_core_value_sig445D = var_core_value_sig3CF8.rowId) == null ? undefined : var_core_value_sig445D[var_core_value_sig3EC3]) != null && ((var_core_value_sigC15F = var_core_value_sig3CF8.colId) == null ? undefined : var_core_value_sigC15F[var_core_value_sigBD61]) != null && var_core_value_sig3CF8.cellData != null;
}
;
function ir(var_core_value_sig73A8, var_core_value_sigE227, var_core_value_sig6909) {
  let var_core_value_sigCFCC = var_core_value_sig73A8.filter(var_core_value_sig4B271 => var_core_value_sig4B271 !== var_core_value_sigE227),
    var_core_value_sig0503 = var_core_value_sig6909.beforeFieldId ? var_core_value_sigCFCC.indexOf(var_core_value_sig6909.beforeFieldId) : var_core_value_sig6909.afterFieldId ? var_core_value_sigCFCC.indexOf(var_core_value_sig6909.afterFieldId) + 1 : var_core_value_sigCFCC.length;
  return var_core_value_sigCFCC.splice(var_core_value_sig0503 < 0 ? var_core_value_sigCFCC.length : var_core_value_sig0503, 0, var_core_value_sigE227), var_core_value_sigCFCC;
}
;
function ar(var_core_value_sigAA49, var_core_value_sigAB24, var_core_value_sig2F15) {
  let var_core_value_sig316C = var_core_value_sigAA49.filter(var_core_value_sig3A41 => var_core_value_sig3A41 !== var_core_value_sigAB24);
  return var_core_value_sig316C.splice(sr(var_core_value_sig2F15, var_core_value_sig316C.length), 0, var_core_value_sigAB24), var_core_value_sig316C;
}
;
function or(var_core_value_sig75A2, var_core_value_sig95CE, var_core_value_sig41FA) {
  if (Array.isArray(var_core_value_sig75A2)) return var_core_value_sig41FA === 'fieldIds' ? var_core_value_sig75A2.filter(var_core_value_sig269A => var_core_value_sig269A !== var_core_value_sig95CE) : var_core_value_sig75A2.flatMap(var_core_value_sigBF53 => {
    if (var_core_value_sigBF53 && typeof var_core_value_sigBF53 == "object" && !Array.isArray(var_core_value_sigBF53) && var_core_value_sigBF53.fieldId === var_core_value_sig95CE) return [];
    let var_core_value_sigD9BB = or(var_core_value_sigBF53, var_core_value_sig95CE);
    return var_core_value_sigD9BB === undefined ? [] : [var_core_value_sigD9BB];
  });
  if (!var_core_value_sig75A2 || typeof var_core_value_sig75A2 != "object") return var_core_value_sig41FA != null && var_core_value_sig41FA.endsWith("FieldId") && var_core_value_sig75A2 === var_core_value_sig95CE ? undefined : var_core_value_sig75A2;
  let var_core_value_sig73C4 = var_core_value_sig75A2;
  if (var_core_value_sig73C4.fieldId !== var_core_value_sig95CE) return Object.fromEntries(Object.entries(var_core_value_sig73C4).flatMap(([var_core_value_sigF549, var_core_value_sigC125]) => {
    if (var_core_value_sigF549 === var_core_value_sig95CE && var_core_value_sig41FA === "fieldSettings") return [];
    let var_core_value_sigB63D = or(var_core_value_sigC125, var_core_value_sig95CE, var_core_value_sigF549);
    return var_core_value_sigB63D === undefined ? [] : [[var_core_value_sigF549, var_core_value_sigB63D]];
  }));
}
;
function sr(var_core_value_sig3216, var_core_value_sigF636) {
  return Math.max(0, Math.min(var_core_value_sig3216, var_core_value_sigF636));
}
;
function cr(var_core_value_sig2EE8) {
  '@babel/helpers - typeof';

  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig8255) {
    return typeof var_core_value_sig8255;
  } : function (var_core_value_sigBFC7) {
    return var_core_value_sigBFC7 && typeof Symbol == "function" && var_core_value_sigBFC7.constructor === Symbol && var_core_value_sigBFC7 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigBFC7;
  }, cr(var_core_value_sig2EE8);
}
;
function lr(var_core_value_sig6177, var_core_value_sig723F) {
  if (cr(var_core_value_sig6177) != "object" || !var_core_value_sig6177) return var_core_value_sig6177;
  var var_core_value_sigADA0 = var_core_value_sig6177[Symbol.toPrimitive];
  if (var_core_value_sigADA0 !== undefined) {
    var var_core_value_sig2F52 = var_core_value_sigADA0.call(var_core_value_sig6177, var_core_value_sig723F || "default");
    if (cr(var_core_value_sig2F52) != 'object') return var_core_value_sig2F52;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig723F === 'string' ? String : Number)(var_core_value_sig6177);
}
;
function ur(var_core_value_sig8FC3) {
  var var_core_value_sigF5B3 = lr(var_core_value_sig8FC3, "string");
  return cr(var_core_value_sigF5B3) == 'symbol' ? var_core_value_sigF5B3 : var_core_value_sigF5B3 + '';
}
;
function W(var_core_value_sig074A, var_core_value_sig5FBE, var_core_value_sig9D61) {
  return (var_core_value_sig5FBE = ur(var_core_value_sig5FBE)) in var_core_value_sig074A ? Object.defineProperty(var_core_value_sig074A, var_core_value_sig5FBE, {
    'value': var_core_value_sig9D61,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_core_value_sig074A[var_core_value_sig5FBE] = var_core_value_sig9D61, var_core_value_sig074A;
}
const dr = var_core_value_sig60D0("base.field-registry.service");
var fr = class extends var_core_value_sig8A28 {
    constructor(...var_core_value_sig933F) {
      super(...var_core_value_sig933F), W(this, "_plugins", new Map());
    }
    register(var_core_value_sig29DE) {
      return this._plugins["set"](var_core_value_sig29DE.type, var_core_value_sig29DE), var_core_value_sig8DAA(() => this._plugins['delete'](var_core_value_sig29DE.type));
    }
    get(var_core_value_sig4AFB) {
      let var_core_value_sigC7EA = this._plugins["get"](var_core_value_sig4AFB);
      if (!var_core_value_sigC7EA) throw Error("[BaseFieldRegistryService]: field type \"" + var_core_value_sig4AFB + "\" is not registered.");
      return var_core_value_sigC7EA;
    }
    getTypePlugin(var_core_value_sigDAB9) {
      return this._plugins["get"](var_core_value_sigDAB9);
    }
    getAll() {
      return Array.from(this._plugins["values"]());
    }
  },
  pr = class {
    constructor(var_core_value_sig9CF7) {
      this.unitId = var_core_value_sig9CF7, W(this, "type", var_core_value_sig40A4.Base), W(this, "subType", var_core_value_sigF383.Comment), W(this, "status", var_core_value_sig44DA.INIT), W(this, 'id', undefined), W(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig9CF7;
    }
  },
  mr = class {
    constructor(var_core_value_sigCCE5) {
      this.unitId = var_core_value_sigCCE5, W(this, "type", var_core_value_sig40A4.Base), W(this, "subType", var_core_value_sigF383.Copy), W(this, "status", var_core_value_sig44DA.INIT), W(this, 'id', undefined), W(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sigCCE5;
    }
  },
  hr = class {
    constructor(var_core_value_sig5933) {
      this.unitId = var_core_value_sig5933, W(this, "type", var_core_value_sig40A4.Base), W(this, 'subType', var_core_value_sigF383.Edit), W(this, "status", var_core_value_sig44DA.INIT), W(this, 'id', undefined), W(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig5933;
    }
  },
  gr = class {
    constructor(var_core_value_sig884B) {
      this.unitId = var_core_value_sig884B, W(this, "type", var_core_value_sig40A4.Base), W(this, "subType", var_core_value_sigF383.Export), W(this, "status", var_core_value_sig44DA.INIT), W(this, 'id', undefined), W(this, 'value', true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig884B;
    }
  },
  _r = class {
    constructor(var_core_value_sig4E30, var_core_value_sig9730) {
      this.unitId = var_core_value_sig4E30, this.objectId = var_core_value_sig9730, W(this, "type", var_core_value_sig40A4.BaseDashboard), W(this, "subType", var_core_value_sigF383.Edit), W(this, 'status', var_core_value_sig44DA.INIT), W(this, 'id', undefined), W(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig4E30 + '_' + var_core_value_sig9730;
    }
  },
  vr = class {
    constructor(var_core_value_sig8E4A, var_core_value_sig300B) {
      this.unitId = var_core_value_sig8E4A, this.objectId = var_core_value_sig300B, W(this, "type", var_core_value_sig40A4.BaseField), W(this, "subType", var_core_value_sigF383.Edit), W(this, "status", var_core_value_sig44DA.INIT), W(this, 'id', undefined), W(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig8E4A + '_' + var_core_value_sig300B;
    }
  },
  yr = class {
    constructor(var_core_value_sig8457, var_core_value_sigB30D) {
      this.unitId = var_core_value_sig8457, this.objectId = var_core_value_sigB30D, W(this, 'type', var_core_value_sig40A4.BaseRecord), W(this, "subType", var_core_value_sigF383.Edit), W(this, "status", var_core_value_sig44DA.INIT), W(this, 'id', undefined), W(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig8457 + '_' + var_core_value_sigB30D;
    }
  },
  br = class {
    constructor(var_core_value_sigDB33, var_core_value_sig6C8C) {
      this.unitId = var_core_value_sigDB33, this.objectId = var_core_value_sig6C8C, W(this, "type", var_core_value_sig40A4.BaseTable), W(this, "subType", var_core_value_sigF383.Edit), W(this, "status", var_core_value_sig44DA.INIT), W(this, 'id', undefined), W(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sigDB33 + '_' + var_core_value_sig6C8C;
    }
  },
  xr = class {
    constructor(var_core_value_sig7A5E, var_core_value_sig838E) {
      this.unitId = var_core_value_sig7A5E, this.objectId = var_core_value_sig838E, W(this, "type", var_core_value_sig40A4.BaseView), W(this, "subType", var_core_value_sigF383.Edit), W(this, 'status', var_core_value_sig44DA.INIT), W(this, 'id', undefined), W(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig7A5E + '_' + var_core_value_sig838E;
    }
  };
const Sr = [var_core_value_sigF383.Edit, var_core_value_sigF383.Copy, var_core_value_sigF383.Export, var_core_value_sigF383.Comment],
  Cr = new Set([var_core_value_sig40A4.Base, var_core_value_sig40A4.BaseTable, var_core_value_sig40A4.BaseField, var_core_value_sig40A4.BaseRecord, var_core_value_sig40A4.BaseView, var_core_value_sig40A4.BaseDashboard]),
  wr = "table/",
  Tr = 'field/',
  Er = "record/",
  Dr = "view/",
  Or = "dashboard/";
function G(var_core_value_sigF126) {
  return '' + wr + encodeURIComponent(var_core_value_sigF126);
}
;
function K(var_core_value_sig9AF8, var_core_value_sig7537) {
  return '' + Tr + encodeURIComponent(var_core_value_sig9AF8) + '/' + encodeURIComponent(var_core_value_sig7537);
}
;
function q(var_core_value_sig50C7, var_core_value_sig9B62) {
  return '' + Er + encodeURIComponent(var_core_value_sig50C7) + '/' + encodeURIComponent(var_core_value_sig9B62);
}
;
function kr(var_core_value_sig470B, var_core_value_sig7525) {
  return '' + Dr + encodeURIComponent(var_core_value_sig470B) + '/' + encodeURIComponent(var_core_value_sig7525);
}
;
function Ar(var_core_value_sig95B5) {
  return '' + Or + encodeURIComponent(var_core_value_sig95B5);
}
;
function jr(var_core_value_sig2347, var_core_value_sigB20E, var_core_value_sig8ADE) {
  if (var_core_value_sigB20E === var_core_value_sig2347) switch (var_core_value_sig8ADE) {
    case var_core_value_sigF383.Edit:
      return new hr(var_core_value_sig2347);
    case var_core_value_sigF383.Copy:
      return new mr(var_core_value_sig2347);
    case var_core_value_sigF383.Export:
      return new gr(var_core_value_sig2347);
    case var_core_value_sigF383.Comment:
      return new pr(var_core_value_sig2347);
    default:
      throw Error("Unsupported Base permission action: " + var_core_value_sig8ADE);
  }
  if (var_core_value_sig8ADE !== var_core_value_sigF383.Edit) throw Error("Base object permissions only support Edit: " + var_core_value_sigB20E);
  if (var_core_value_sigB20E.startsWith(wr)) return new br(var_core_value_sig2347, var_core_value_sigB20E);
  if (var_core_value_sigB20E.startsWith(Tr)) return new vr(var_core_value_sig2347, var_core_value_sigB20E);
  if (var_core_value_sigB20E.startsWith(Er)) return new yr(var_core_value_sig2347, var_core_value_sigB20E);
  if (var_core_value_sigB20E.startsWith(Dr)) return new xr(var_core_value_sig2347, var_core_value_sigB20E);
  if (var_core_value_sigB20E.startsWith(Or)) return new _r(var_core_value_sig2347, var_core_value_sigB20E);
  throw Error('Unsupported\x20Base\x20permission\x20object:\x20' + var_core_value_sigB20E);
}
;
function Mr(var_core_value_sig7F51, var_core_value_sig622A, var_core_value_sig40EC, var_core_value_sig27C9) {
  var var_core_value_sigF296;
  return ((var_core_value_sigF296 = var_core_value_sig7F51.getPermissionPoint(jr(var_core_value_sig622A, var_core_value_sig40EC, var_core_value_sig27C9).id)) == null ? undefined : var_core_value_sigF296.value) ?? true;
}
;
function Nr(var_core_value_sigD001, var_core_value_sig4940, var_core_value_sig7E0F, var_core_value_sig9785, var_core_value_sig235B) {
  let var_core_value_sigBCA8 = jr(var_core_value_sig4940, var_core_value_sig7E0F, var_core_value_sig9785);
  var_core_value_sigD001.getPermissionPoint(var_core_value_sigBCA8.id) || var_core_value_sigD001.addPermissionPoint(var_core_value_sigBCA8), var_core_value_sigD001.updatePermissionPoint(var_core_value_sigBCA8.id, var_core_value_sig235B);
}
;
function Pr(var_core_value_sig0C8C, var_core_value_sig56FC, var_core_value_sig7EC8, var_core_value_sig0454) {
  var_core_value_sig0C8C.deletePermissionPoint(jr(var_core_value_sig56FC, var_core_value_sig7EC8, var_core_value_sig0454).id);
}
;
function Fr(var_core_value_sig71F7, var_core_value_sig8D12) {
  var_core_value_sig71F7.getAllPermissionPoint().forEach((var_core_value_sig9A5B, var_core_value_sigC860) => {
    var_core_value_sig9A5B.subscribe(var_core_value_sig4BBA => {
      Cr.has(var_core_value_sig4BBA.type) && "unitId" in var_core_value_sig4BBA && var_core_value_sig4BBA.unitId === var_core_value_sig8D12 && var_core_value_sig71F7.deletePermissionPoint(var_core_value_sigC860);
    }).unsubscribe();
  });
}
;
function Ir(var_core_value_sigEEC4, var_core_value_sig0EDB, var_core_value_sig1C1B1) {
  return Mr(var_core_value_sigEEC4, var_core_value_sig0EDB, var_core_value_sig0EDB, var_core_value_sigF383.Edit) && Array.from(var_core_value_sig1C1B1).every(var_core_value_sigE64C => Mr(var_core_value_sigEEC4, var_core_value_sig0EDB, var_core_value_sigE64C, var_core_value_sigF383.Edit));
}
;
function J(var_core_value_sig083D, var_core_value_sig70CE) {
  return function (var_core_value_sigF39B, var_core_value_sig9B88) {
    var_core_value_sig70CE(var_core_value_sigF39B, var_core_value_sig9B88, var_core_value_sig083D);
  };
}
;
function Y(var_core_value_sig4B4A, var_core_value_sig6585, var_core_value_sig743E, var_core_value_sig9872) {
  var var_core_value_sig049A = arguments.length,
    var_core_value_sig5830 = var_core_value_sig049A < 3 ? var_core_value_sig6585 : var_core_value_sig9872 === null ? var_core_value_sig9872 = Object.getOwnPropertyDescriptor(var_core_value_sig6585, var_core_value_sig743E) : var_core_value_sig9872,
    var_core_value_sig69CB;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == "function") var_core_value_sig5830 = Reflect.decorate(var_core_value_sig4B4A, var_core_value_sig6585, var_core_value_sig743E, var_core_value_sig9872);else {
    for (var var_core_value_sigB5CC = var_core_value_sig4B4A.length - 1; var_core_value_sigB5CC >= 0; var_core_value_sigB5CC--) (var_core_value_sig69CB = var_core_value_sig4B4A[var_core_value_sigB5CC]) && (var_core_value_sig5830 = (var_core_value_sig049A < 3 ? var_core_value_sig69CB(var_core_value_sig5830) : var_core_value_sig049A > 3 ? var_core_value_sig69CB(var_core_value_sig6585, var_core_value_sig743E, var_core_value_sig5830) : var_core_value_sig69CB(var_core_value_sig6585, var_core_value_sig743E)) || var_core_value_sig5830);
  }
  return var_core_value_sig049A > 3 && var_core_value_sig5830 && Object.defineProperty(var_core_value_sig6585, var_core_value_sig743E, var_core_value_sig5830), var_core_value_sig5830;
}
const Lr = var_core_value_sig60D0("base.permission.service");
let Rr = class extends var_core_value_sig8A28 {
  constructor(var_core_value_sig992A, var_core_value_sig6281) {
    super(), this._permissionService = var_core_value_sig992A, this._instanceService = var_core_value_sig6281, W(this, "_basePermissions", new Map()), W(this, "_tablePermissions", new Map()), W(this, "_fieldPermissions", new Map()), W(this, "_recordPermissions", new Map()), W(this, '_viewPermissions', new Map()), W(this, '_tableBaseIds', new Map()), this.disposeWithMe(this._instanceService['getTypeOfUnitDisposed$'](var_core_value_sigE2E8.UNIVER_BASE).subscribe(var_core_value_sig6201 => this._clearUnit(var_core_value_sig6201.getUnitId())));
  }
  canCreateTable(var_core_value_sig9B01) {
    var var_core_value_sigA724;
    return this._canEdit(var_core_value_sig9B01, []) && (((var_core_value_sigA724 = this._basePermissions["get"](var_core_value_sig9B01)) == null ? undefined : var_core_value_sigA724.createTable) ?? true);
  }
  canEditTable(var_core_value_sig385E) {
    return this._canEditTable(var_core_value_sig385E);
  }
  canDeleteTable(var_core_value_sig10D3) {
    var var_core_value_sig41F2;
    return this._canEditTable(var_core_value_sig10D3) && (((var_core_value_sig41F2 = this._tablePermissions['get'](var_core_value_sig10D3)) == null ? undefined : var_core_value_sig41F2.delete) ?? true);
  }
  canCreateField(var_core_value_sig32DD) {
    var var_core_value_sig7A88;
    return this._canEditTable(var_core_value_sig32DD) && (((var_core_value_sig7A88 = this._tablePermissions["get"](var_core_value_sig32DD)) == null ? undefined : var_core_value_sig7A88.createField) ?? true);
  }
  canEditField(var_core_value_sig6CFC, var_core_value_sig3EC0) {
    var var_core_value_sigEA69;
    return this._canEditTable(var_core_value_sig6CFC) && this._canEdit(var_core_value_sig6CFC, [K(var_core_value_sig6CFC, var_core_value_sig3EC0)]) && (((var_core_value_sigEA69 = this._fieldPermissions['get'](Br(var_core_value_sig6CFC, var_core_value_sig3EC0))) == null ? undefined : var_core_value_sigEA69.edit) ?? true);
  }
  canDeleteField(var_core_value_sigF42A, var_core_value_sig898E) {
    var var_core_value_sigC481;
    return this.canEditField(var_core_value_sigF42A, var_core_value_sig898E) && (((var_core_value_sigC481 = this._fieldPermissions["get"](Br(var_core_value_sigF42A, var_core_value_sig898E))) == null ? undefined : var_core_value_sigC481.delete) ?? true);
  }
  canCreateRecord(var_core_value_sig27B7) {
    var var_core_value_sig2DAD;
    return this._canEditTable(var_core_value_sig27B7) && (((var_core_value_sig2DAD = this._tablePermissions["get"](var_core_value_sig27B7)) == null ? undefined : var_core_value_sig2DAD.createRecord) ?? true);
  }
  canEditRecord(var_core_value_sig00DE, var_core_value_sigEF7C) {
    var var_core_value_sig07E7;
    let var_core_value_sig6005 = this._recordPermissions["get"](Vr(var_core_value_sig00DE, var_core_value_sigEF7C));
    return this._canEdit(var_core_value_sig00DE, [G(var_core_value_sig00DE), q(var_core_value_sig00DE, var_core_value_sigEF7C)]) && (((var_core_value_sig07E7 = this._tablePermissions['get'](var_core_value_sig00DE)) == null ? undefined : var_core_value_sig07E7.edit) ?? true) && ((var_core_value_sig6005 == null ? undefined : var_core_value_sig6005.edit) ?? true) && ((var_core_value_sig6005 == null ? undefined : var_core_value_sig6005.editCell) ?? true);
  }
  canDeleteRecord(var_core_value_sig25A4, var_core_value_sigB591) {
    var var_core_value_sigB272, var_core_value_sig6F52, var_core_value_sig09C4;
    return this._canEdit(var_core_value_sig25A4, [G(var_core_value_sig25A4), q(var_core_value_sig25A4, var_core_value_sigB591)]) && (((var_core_value_sigB272 = this._tablePermissions["get"](var_core_value_sig25A4)) == null ? undefined : var_core_value_sigB272.edit) ?? true) && (((var_core_value_sig6F52 = this._recordPermissions["get"](Vr(var_core_value_sig25A4, var_core_value_sigB591))) == null ? undefined : var_core_value_sig6F52.edit) ?? true) && (((var_core_value_sig09C4 = this._recordPermissions['get'](Vr(var_core_value_sig25A4, var_core_value_sigB591))) == null ? undefined : var_core_value_sig09C4.delete) ?? true);
  }
  canEditCell(var_core_value_sig8E3E, var_core_value_sigC3D3, var_core_value_sig1451) {
    var var_core_value_sigAD57, var_core_value_sig58A8, var_core_value_sigEC1A;
    let var_core_value_sigBDED = this._fieldPermissions["get"](Br(var_core_value_sig8E3E, var_core_value_sig1451));
    return this._canEdit(var_core_value_sig8E3E, [G(var_core_value_sig8E3E), K(var_core_value_sig8E3E, var_core_value_sig1451), q(var_core_value_sig8E3E, var_core_value_sigC3D3)]) && (((var_core_value_sigAD57 = this._tablePermissions["get"](var_core_value_sig8E3E)) == null ? undefined : var_core_value_sigAD57.edit) ?? true) && (((var_core_value_sig58A8 = this._recordPermissions["get"](Vr(var_core_value_sig8E3E, var_core_value_sigC3D3))) == null ? undefined : var_core_value_sig58A8.edit) ?? true) && (((var_core_value_sigEC1A = this._recordPermissions["get"](Vr(var_core_value_sig8E3E, var_core_value_sigC3D3))) == null ? undefined : var_core_value_sigEC1A.editCell) ?? true) && ((var_core_value_sigBDED == null ? undefined : var_core_value_sigBDED.edit) ?? true) && ((var_core_value_sigBDED == null ? undefined : var_core_value_sigBDED.editCell) ?? true);
  }
  canManageView(var_core_value_sig4BFF, var_core_value_sig40E7) {
    var var_core_value_sigEDBA, var_core_value_sigE863, var_core_value_sig04B4;
    return this._canEdit(var_core_value_sig4BFF, [G(var_core_value_sig4BFF), kr(var_core_value_sig4BFF, var_core_value_sig40E7)]) && (((var_core_value_sigEDBA = this._tablePermissions['get'](var_core_value_sig4BFF)) == null ? undefined : var_core_value_sigEDBA.edit) ?? true) && (((var_core_value_sigE863 = this._viewPermissions["get"](Hr(var_core_value_sig4BFF, var_core_value_sig40E7))) == null ? undefined : var_core_value_sigE863.edit) ?? true) && (((var_core_value_sig04B4 = this._tablePermissions['get'](var_core_value_sig4BFF)) == null ? undefined : var_core_value_sig04B4.manageView) ?? true);
  }
  setBasePermission(var_core_value_sig1C07, var_core_value_sig93D6) {
    this._basePermissions["set"](var_core_value_sig1C07, {
      ...this._basePermissions["get"](var_core_value_sig1C07),
      ...var_core_value_sig93D6
    }), var_core_value_sig93D6.edit !== undefined && Nr(this._permissionService, var_core_value_sig1C07, var_core_value_sig1C07, var_core_value_sigF383.Edit, var_core_value_sig93D6.edit);
  }
  setTablePermission(var_core_value_sigDD05, var_core_value_sig3932) {
    this._rememberTable(var_core_value_sigDD05), this._tablePermissions["set"](var_core_value_sigDD05, {
      ...this._tablePermissions['get'](var_core_value_sigDD05),
      ...var_core_value_sig3932
    }), this._setObjectEdit(var_core_value_sigDD05, G(var_core_value_sigDD05), var_core_value_sig3932.edit);
  }
  setFieldPermission(var_core_value_sig48B2, var_core_value_sig57DF, var_core_value_sigC985) {
    this._rememberTable(var_core_value_sig48B2);
    let var_core_value_sig8DA6 = Br(var_core_value_sig48B2, var_core_value_sig57DF);
    this._fieldPermissions["set"](var_core_value_sig8DA6, {
      ...this._fieldPermissions["get"](var_core_value_sig8DA6),
      ...var_core_value_sigC985
    }), this._setObjectEdit(var_core_value_sig48B2, K(var_core_value_sig48B2, var_core_value_sig57DF), var_core_value_sigC985.edit);
  }
  setRecordPermission(var_core_value_sigCA69, var_core_value_sigB77C, var_core_value_sig9AFF) {
    this._rememberTable(var_core_value_sigCA69);
    let var_core_value_sig3545 = Vr(var_core_value_sigCA69, var_core_value_sigB77C);
    this._recordPermissions["set"](var_core_value_sig3545, {
      ...this._recordPermissions["get"](var_core_value_sig3545),
      ...var_core_value_sig9AFF
    }), this._setObjectEdit(var_core_value_sigCA69, q(var_core_value_sigCA69, var_core_value_sigB77C), var_core_value_sig9AFF.edit);
  }
  setViewPermission(var_core_value_sig5EE4, var_core_value_sig7EAB, var_core_value_sig56B9) {
    this._rememberTable(var_core_value_sig5EE4);
    let var_core_value_sig90CF = Hr(var_core_value_sig5EE4, var_core_value_sig7EAB);
    this._viewPermissions["set"](var_core_value_sig90CF, {
      ...this._viewPermissions["get"](var_core_value_sig90CF),
      ...var_core_value_sig56B9
    }), this._setObjectEdit(var_core_value_sig5EE4, kr(var_core_value_sig5EE4, var_core_value_sig7EAB), var_core_value_sig56B9.edit);
  }
  clearBasePermission(var_core_value_sigA386) {
    this._basePermissions['delete'](var_core_value_sigA386), Pr(this._permissionService, var_core_value_sigA386, var_core_value_sigA386, var_core_value_sigF383.Edit);
  }
  clearTablePermission(var_core_value_sigCD6E) {
    this._tablePermissions["delete"](var_core_value_sigCD6E), this._clearObjectEdit(var_core_value_sigCD6E, G(var_core_value_sigCD6E));
  }
  clearFieldPermission(var_core_value_sigFD9D, var_core_value_sigA2A4) {
    this._fieldPermissions["delete"](Br(var_core_value_sigFD9D, var_core_value_sigA2A4)), this._clearObjectEdit(var_core_value_sigFD9D, K(var_core_value_sigFD9D, var_core_value_sigA2A4));
  }
  clearRecordPermission(var_core_value_sigA1AC, var_core_value_sig6180) {
    this._recordPermissions['delete'](Vr(var_core_value_sigA1AC, var_core_value_sig6180)), this._clearObjectEdit(var_core_value_sigA1AC, q(var_core_value_sigA1AC, var_core_value_sig6180));
  }
  clearViewPermission(var_core_value_sigB93D, var_core_value_sigB17C) {
    this._viewPermissions["delete"](Hr(var_core_value_sigB93D, var_core_value_sigB17C)), this._clearObjectEdit(var_core_value_sigB93D, kr(var_core_value_sigB93D, var_core_value_sigB17C));
  }
  getSnapshot() {
    return {
      'bases': Object.fromEntries(this._basePermissions),
      'tables': Object.fromEntries(this._tablePermissions),
      'fields': Object.fromEntries(this._fieldPermissions),
      'records': Object.fromEntries(this._recordPermissions),
      'views': Object.fromEntries(this._viewPermissions)
    };
  }
  _canEditTable(var_core_value_sig69B6) {
    var var_core_value_sig708D;
    return this._canEdit(var_core_value_sig69B6, [G(var_core_value_sig69B6)]) && (((var_core_value_sig708D = this._tablePermissions['get'](var_core_value_sig69B6)) == null ? undefined : var_core_value_sig708D.edit) ?? true);
  }
  _canEdit(var_core_value_sig1ED2, var_core_value_sig94C1) {
    var var_core_value_sigABAC;
    let var_core_value_sigFAE6 = this._resolveBaseId(var_core_value_sig1ED2);
    return !var_core_value_sigFAE6 || Ir(this._permissionService, var_core_value_sigFAE6, var_core_value_sig94C1) && (((var_core_value_sigABAC = this._basePermissions["get"](var_core_value_sigFAE6)) == null ? undefined : var_core_value_sigABAC.edit) ?? true);
  }
  _setObjectEdit(var_core_value_sig06AC, var_core_value_sig57E2, var_core_value_sig01FC) {
    if (var_core_value_sig01FC === undefined) return;
    let var_core_value_sig10FC = this._resolveBaseId(var_core_value_sig06AC);
    var_core_value_sig10FC && Nr(this._permissionService, var_core_value_sig10FC, var_core_value_sig57E2, var_core_value_sigF383.Edit, var_core_value_sig01FC);
  }
  _clearObjectEdit(var_core_value_sig5374, var_core_value_sigB66D) {
    let var_core_value_sigD0F0 = this._resolveBaseId(var_core_value_sig5374);
    var_core_value_sigD0F0 && Pr(this._permissionService, var_core_value_sigD0F0, var_core_value_sigB66D, var_core_value_sigF383.Edit);
  }
  _resolveBaseId(var_core_value_sig8E31) {
    var var_core_value_sig8339;
    let var_core_value_sigA01E = this._instanceService["getUnit"](var_core_value_sig8E31, var_core_value_sigE2E8.UNIVER_BASE);
    return var_core_value_sigA01E ? var_core_value_sigA01E.getUnitId() : (var_core_value_sig8339 = this._instanceService["getAllUnitsForType"](var_core_value_sigE2E8.UNIVER_BASE).find(var_core_value_sig5151 => !!var_core_value_sig5151.getSnapshot().tables[var_core_value_sig8E31])) == null ? undefined : var_core_value_sig8339.getUnitId();
  }
  _rememberTable(var_core_value_sigA41E) {
    let var_core_value_sig939C = this._resolveBaseId(var_core_value_sigA41E);
    var_core_value_sig939C && this._tableBaseIds["set"](var_core_value_sigA41E, var_core_value_sig939C);
  }
  _clearUnit(var_core_value_sigA49E) {
    this._basePermissions['delete'](var_core_value_sigA49E), this._tableBaseIds['forEach']((var_core_value_sigB542, var_core_value_sigBB6C) => {
      var_core_value_sigB542 === var_core_value_sigA49E && (this._tablePermissions["delete"](var_core_value_sigBB6C), zr(this._fieldPermissions, var_core_value_sigBB6C + '\x1f'), zr(this._recordPermissions, var_core_value_sigBB6C + '\x1f'), zr(this._viewPermissions, var_core_value_sigBB6C + '\x1f'), this._tableBaseIds["delete"](var_core_value_sigBB6C));
    });
  }
};
Rr = Y([J(0, var_core_value_sig8E15), J(1, var_core_value_sig5B68)], Rr);
function zr(var_core_value_sig823B, var_core_value_sigC9B0) {
  var_core_value_sig823B.forEach((var_core_value_sig6DEB, var_core_value_sig2F0D) => {
    var_core_value_sig2F0D.startsWith(var_core_value_sigC9B0) && var_core_value_sig823B.delete(var_core_value_sig2F0D);
  });
}
;
function Br(var_core_value_sigAA99, var_core_value_sig1D86) {
  return var_core_value_sigAA99 + '\x1f' + var_core_value_sig1D86;
}
;
function Vr(var_core_value_sig1F4D, var_core_value_sig91D2) {
  return var_core_value_sig1F4D + '\x1f' + var_core_value_sig91D2;
}
;
function Hr(var_core_value_sigBF6A, var_core_value_sigC8CD) {
  return var_core_value_sigBF6A + '\x1f' + var_core_value_sigC8CD;
}
const X = var_core_value_sig60D0("base.command.service");
let Ur = class {
  constructor(var_core_value_sig5141, var_core_value_sigA9E0 = Wr(), var_core_value_sig751D = {}) {
    this._permissionService = var_core_value_sig5141, this._fieldRegistry = var_core_value_sigA9E0, this._runtimeContext = var_core_value_sig751D, W(this, "_factory", new U()), W(this, "_applier", new R());
  }
  createTable(var_core_value_sig2E9A, var_core_value_sigE105, var_core_value_sig0BD6) {
    if (!this._permissionService["canCreateTable"](var_core_value_sig2E9A.getUnitId())) throw Error('[BaseCommandService]:\x20cannot\x20create\x20table.');
    var_core_value_sigDE3F(var_core_value_sigE105), this._apply(var_core_value_sig2E9A, this._factory["createTable"](var_core_value_sig2E9A.getSnapshot(), var_core_value_sigE105, var_core_value_sig0BD6));
  }
  renameTable(var_core_value_sig3070, var_core_value_sigC66D, var_core_value_sig8EC51) {
    if (!this._permissionService["canEditTable"](var_core_value_sigC66D)) throw Error("[BaseCommandService]: cannot edit table.");
    this._apply(var_core_value_sig3070, this._factory["renameTable"](var_core_value_sig3070.getSnapshot(), var_core_value_sigC66D, var_core_value_sig8EC51));
  }
  deleteTable(var_core_value_sig1056, var_core_value_sig6EE5) {
    if (!this._permissionService['canDeleteTable'](var_core_value_sig6EE5)) throw Error('[BaseCommandService]:\x20cannot\x20delete\x20table.');
    let var_core_value_sig9DD9 = ze(var_core_value_sig1056.getSnapshot(), var_core_value_sig6EE5);
    if (var_core_value_sig9DD9.length > 0) throw Error("[BaseCommandService]: cannot delete a RecordLink target table (" + var_core_value_sig9DD9.map(var_core_value_sigE2BF => var_core_value_sigE2BF.tableId + '.' + var_core_value_sigE2BF.fieldId).join(',\x20') + ').');
    this._apply(var_core_value_sig1056, this._factory["deleteTable"](var_core_value_sig1056.getSnapshot(), var_core_value_sig6EE5));
  }
  updateCell(var_core_value_sig09AC, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB) {
    this._apply(var_core_value_sig09AC, this.createUpdateCellOp(var_core_value_sig09AC, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB));
  }
  setRecordValues(var_core_value_sig617E, var_core_value_sigC85E, var_core_value_sig8293) {
    this._apply(var_core_value_sig617E, this.createSetRecordValuesOp(var_core_value_sig617E, var_core_value_sigC85E, var_core_value_sig8293));
  }
  createRecord(var_core_value_sig050D, var_core_value_sig37AE, var_core_value_sig5B51) {
    this._apply(var_core_value_sig050D, this.createCreateRecordOp(var_core_value_sig050D, var_core_value_sig37AE, var_core_value_sig5B51));
  }
  createUpdateCellOp(var_core_value_sig64FF, var_core_value_sig86F4, var_core_value_sig9E0F, var_core_value_sig3A42, var_core_value_sig8802) {
    let var_core_value_sig95D5 = var_core_value_sig64FF.getSnapshot(),
      var_core_value_sigE027 = this._normalizeCellValue(var_core_value_sig95D5, var_core_value_sig86F4, var_core_value_sig9E0F, var_core_value_sig3A42, var_core_value_sig8802),
      var_core_value_sigE537 = this._withModifiedSystemValues(var_core_value_sig95D5, var_core_value_sig86F4, var_core_value_sig9E0F, {
        [var_core_value_sig3A42]: var_core_value_sigE027
      });
    return this._factory['setRecordValues'](var_core_value_sig95D5, var_core_value_sig86F4, [var_core_value_sigE537]);
  }
  createSetRecordValuesOp(var_core_value_sig5D84, var_core_value_sigD120, var_core_value_sigAA05) {
    let var_core_value_sigC04C = var_core_value_sig5D84.getSnapshot(),
      var_core_value_sig2069 = var_core_value_sigAA05.map(var_core_value_sigB8C7 => this._withModifiedSystemValues(var_core_value_sigC04C, var_core_value_sigD120, var_core_value_sigB8C7.recordId, {
        ...Object.fromEntries(Object.entries(var_core_value_sigB8C7.values).map(([var_core_value_sigBB00, var_core_value_sig7E54]) => [var_core_value_sigBB00, this._normalizeCellValue(var_core_value_sigC04C, var_core_value_sigD120, var_core_value_sigB8C7.recordId, var_core_value_sigBB00, var_core_value_sig7E54)]))
      }));
    return this._factory["setRecordValues"](var_core_value_sigC04C, var_core_value_sigD120, var_core_value_sig2069);
  }
  createCreateRecordOp(var_core_value_sig5176, var_core_value_sig71A1, var_core_value_sig72AD) {
    if (!this._permissionService["canCreateRecord"](var_core_value_sig71A1)) throw Error("[BaseCommandService]: cannot create record.");
    let var_core_value_sig9ABE = var_core_value_sig5176.getSnapshot(),
      var_core_value_sig8EF01 = this._createNumberingAllocators(var_core_value_sig9ABE.tables[var_core_value_sig71A1]);
    return this._factory["createRecord"](var_core_value_sig9ABE, var_core_value_sig71A1, this._createRecordWithDefaults(var_core_value_sig9ABE, var_core_value_sig71A1, var_core_value_sig72AD, var_core_value_sig8EF01));
  }
  createBatchCreateRecordsOp(var_core_value_sig234B, var_core_value_sig8169, var_core_value_sigC5FB) {
    if (!this._permissionService["canCreateRecord"](var_core_value_sig8169)) throw Error("[BaseCommandService]: cannot create record.");
    let var_core_value_sig5453 = var_core_value_sig234B.getSnapshot();
    return F("BaseCommand.createBatchCreateRecordsOp", () => {
      let var_core_value_sigA56E = this._createNumberingAllocators(var_core_value_sig5453.tables[var_core_value_sig8169]);
      return this._factory["createRecords"](var_core_value_sig5453, var_core_value_sig8169, var_core_value_sigC5FB.map(var_core_value_sig9A8D => this._createRecordWithDefaults(var_core_value_sig5453, var_core_value_sig8169, var_core_value_sig9A8D, var_core_value_sigA56E)));
    }, {
      'existingRecords': Object.keys(var_core_value_sig5453.tables[var_core_value_sig8169].records).length,
      'records': var_core_value_sigC5FB.length
    });
  }
  createCreateFieldOp(var_core_value_sig8725, var_core_value_sig513B, var_core_value_sig5501, var_core_value_sig7784, var_core_value_sigB706) {
    if (!this._permissionService['canCreateField'](var_core_value_sig513B)) throw Error("[BaseCommandService]: cannot create field.");
    let var_core_value_sig5FD01 = var_core_value_sig8725.getSnapshot();
    if (this._assertFieldDefinition(var_core_value_sig5FD01, var_core_value_sig5501), var_core_value_sig7784 === 0) throw Error("[BaseCommandService]: cannot insert a field before record-id.");
    let var_core_value_sig77E3 = this._factory["createField"](var_core_value_sig5FD01, var_core_value_sig513B, {
        'field': var_core_value_sig5501,
        'index': var_core_value_sig7784,
        'viewIndexes': var_core_value_sigB706
      }),
      var_core_value_sigB071 = this._createSystemFieldValuePatches(var_core_value_sig5FD01, var_core_value_sig513B, var_core_value_sig5501);
    if (!var_core_value_sigB071.length) return var_core_value_sig77E3;
    let var_core_value_sig15FE = this._applier['applyOp'](var_core_value_sig5FD01, var_core_value_sig77E3);
    return L([var_core_value_sig77E3, this._factory["setRecordValues"](var_core_value_sig15FE, var_core_value_sig513B, var_core_value_sigB071)]);
  }
  deleteRecord(var_core_value_sigCF47, var_core_value_sigB0F9, var_core_value_sigAF12) {
    if (!this._permissionService["canDeleteRecord"](var_core_value_sigB0F9, var_core_value_sigAF12)) throw Error('[BaseCommandService]:\x20cannot\x20delete\x20record.');
    this._apply(var_core_value_sigCF47, this._factory["deleteRecord"](var_core_value_sigCF47.getSnapshot(), var_core_value_sigB0F9, var_core_value_sigAF12));
  }
  duplicateRecord(var_core_value_sigC60C, var_core_value_sig1C3C, var_core_value_sig71CF, var_core_value_sigC341) {
    if (!this._permissionService["canCreateRecord"](var_core_value_sig1C3C)) throw Error('[BaseCommandService]:\x20cannot\x20create\x20record.');
    this._apply(var_core_value_sigC60C, this._factory["duplicateRecord"](var_core_value_sigC60C.getSnapshot(), var_core_value_sig1C3C, var_core_value_sig71CF, {
      ...var_core_value_sigC341,
      'values': {
        ...var_core_value_sigC341.values,
        [var_core_value_sigED20]: var_core_value_sigC341.id
      }
    }));
  }
  updateRecordOrder(var_core_value_sigBA47, var_core_value_sig3DF7, var_core_value_sigD49F, var_core_value_sigCECC) {
    if (!this._permissionService["canEditRecord"](var_core_value_sig3DF7, var_core_value_sigD49F)) throw Error("[BaseCommandService]: cannot edit record.");
    this._apply(var_core_value_sigBA47, this._factory["updateRecordOrder"](var_core_value_sigBA47.getSnapshot(), var_core_value_sig3DF7, var_core_value_sigD49F, var_core_value_sigCECC));
  }
  createField(var_core_value_sig0F47, var_core_value_sig6B29, var_core_value_sig28E2, var_core_value_sig1578, var_core_value_sig52ED) {
    this._apply(var_core_value_sig0F47, this.createCreateFieldOp(var_core_value_sig0F47, var_core_value_sig6B29, var_core_value_sig28E2, var_core_value_sig1578, var_core_value_sig52ED));
  }
  updateField(var_core_value_sig135F, var_core_value_sig416D, var_core_value_sigAD5D, var_core_value_sig1B8A) {
    var var_core_value_sigFB18;
    if (!this._permissionService['canEditField'](var_core_value_sig416D, var_core_value_sigAD5D)) throw Error("[BaseCommandService]: cannot edit field.");
    let var_core_value_sig703C = var_core_value_sig135F.getSnapshot(),
      var_core_value_sig96CF = (var_core_value_sigFB18 = var_core_value_sig703C.tables[var_core_value_sig416D]) == null ? undefined : var_core_value_sigFB18.fields[var_core_value_sigAD5D];
    if (!var_core_value_sig96CF || var_core_value_sigAD5D === var_core_value_sigED20) throw Error("[BaseCommandService]: cannot edit record-id.");
    this._assertFieldDefinition(var_core_value_sig703C, {
      ...var_core_value_sig96CF,
      ...var_core_value_sig1B8A
    }), this._apply(var_core_value_sig135F, this._factory["updateField"](var_core_value_sig703C, var_core_value_sig416D, var_core_value_sigAD5D, var_core_value_sig1B8A));
  }
  changeFieldType(var_core_value_sig49F1, var_core_value_sig2F7B, var_core_value_sigB0DF, var_core_value_sig2E44) {
    var var_core_value_sig8560;
    if (!this._permissionService["canEditField"](var_core_value_sig2F7B, var_core_value_sigB0DF)) throw Error('[BaseCommandService]:\x20cannot\x20edit\x20field.');
    let var_core_value_sig138D = var_core_value_sig49F1.getSnapshot(),
      var_core_value_sig1E26 = (var_core_value_sig8560 = var_core_value_sig138D.tables[var_core_value_sig2F7B]) == null ? undefined : var_core_value_sig8560.fields[var_core_value_sigB0DF];
    if (!var_core_value_sig1E26 || var_core_value_sigB0DF === var_core_value_sigED20) throw Error("[BaseCommandService]: cannot change record-id field type.");
    this._assertFieldDefinition(var_core_value_sig138D, {
      ...var_core_value_sig1E26,
      ...var_core_value_sig2E44
    }), this._apply(var_core_value_sig49F1, this._factory["changeFieldType"](var_core_value_sig138D, var_core_value_sig2F7B, var_core_value_sigB0DF, var_core_value_sig2E44));
  }
  deleteField(var_core_value_sig5C6C, var_core_value_sigBE85, var_core_value_sig56DE) {
    var var_core_value_sig0278;
    if (((var_core_value_sig0278 = var_core_value_sig5C6C.getSnapshot().tables[var_core_value_sigBE85]) == null ? undefined : var_core_value_sig0278.primaryFieldId) === var_core_value_sig56DE || var_core_value_sig56DE === var_core_value_sigED20) throw Error('[BaseCommandService]:\x20cannot\x20delete\x20primary\x20field.');
    if (!this._permissionService["canDeleteField"](var_core_value_sigBE85, var_core_value_sig56DE)) throw Error("[BaseCommandService]: cannot delete field.");
    this._apply(var_core_value_sig5C6C, this._factory["deleteField"](var_core_value_sig5C6C.getSnapshot(), var_core_value_sigBE85, var_core_value_sig56DE));
  }
  moveField(var_core_value_sig08A6, var_core_value_sig04E1, var_core_value_sigC504, var_core_value_sig0515) {
    if (!this._permissionService["canEditField"](var_core_value_sig04E1, var_core_value_sigC504)) throw Error("[BaseCommandService]: cannot edit field.");
    if (var_core_value_sigC504 === var_core_value_sigED20 || var_core_value_sig0515.beforeFieldId === var_core_value_sigED20) throw Error("[BaseCommandService]: cannot move a field before record-id.");
    this._apply(var_core_value_sig08A6, this._factory['moveField'](var_core_value_sig08A6.getSnapshot(), var_core_value_sig04E1, var_core_value_sigC504, var_core_value_sig0515));
  }
  createView(var_core_value_sig9F34, var_core_value_sig0247, var_core_value_sig6030, var_core_value_sig0137) {
    if (!this._permissionService['canManageView'](var_core_value_sig0247, var_core_value_sig6030.id)) throw Error("[BaseCommandService]: cannot manage view.");
    this._apply(var_core_value_sig9F34, this._factory['createView'](var_core_value_sig9F34.getSnapshot(), var_core_value_sig0247, var_core_value_sig6030, var_core_value_sig0137));
  }
  renameView(var_core_value_sig14F3, var_core_value_sig34E8, var_core_value_sigCFE7, var_core_value_sigECBC) {
    if (!this._permissionService["canManageView"](var_core_value_sig34E8, var_core_value_sigCFE7)) throw Error("[BaseCommandService]: cannot manage view.");
    this._apply(var_core_value_sig14F3, this._factory['renameView'](var_core_value_sig14F3.getSnapshot(), var_core_value_sig34E8, var_core_value_sigCFE7, var_core_value_sigECBC));
  }
  deleteView(var_core_value_sig65D2, var_core_value_sig4306, var_core_value_sigFCD3) {
    if (!this._permissionService['canManageView'](var_core_value_sig4306, var_core_value_sigFCD3)) throw Error("[BaseCommandService]: cannot manage view.");
    this._apply(var_core_value_sig65D2, this._factory["deleteView"](var_core_value_sig65D2.getSnapshot(), var_core_value_sig4306, var_core_value_sigFCD3));
  }
  moveView(var_core_value_sig147A, var_core_value_sig829F, var_core_value_sig534C, var_core_value_sigABB7) {
    if (!this._permissionService['canManageView'](var_core_value_sig829F, var_core_value_sig534C)) throw Error("[BaseCommandService]: cannot manage view.");
    this._apply(var_core_value_sig147A, this._factory["moveView"](var_core_value_sig147A.getSnapshot(), var_core_value_sig829F, var_core_value_sig534C, var_core_value_sigABB7));
  }
  updateViewConfig(var_core_value_sig9071, var_core_value_sig01A9, var_core_value_sig9477, var_core_value_sig917C) {
    if (!this._permissionService["canManageView"](var_core_value_sig01A9, var_core_value_sig9477)) throw Error('[BaseCommandService]:\x20cannot\x20manage\x20view.');
    this._apply(var_core_value_sig9071, this._factory["updateViewConfig"](var_core_value_sig9071.getSnapshot(), var_core_value_sig01A9, var_core_value_sig9477, var_core_value_sig917C));
  }
  setViewFilter(var_core_value_sig27E2, var_core_value_sig10D7, var_core_value_sig5A1A, var_core_value_sig77D2) {
    if (!this._permissionService["canManageView"](var_core_value_sig10D7, var_core_value_sig5A1A)) throw Error('[BaseCommandService]:\x20cannot\x20manage\x20view.');
    this._apply(var_core_value_sig27E2, this._factory["setViewFilter"](var_core_value_sig27E2.getSnapshot(), var_core_value_sig10D7, var_core_value_sig5A1A, var_core_value_sig77D2));
  }
  setViewSort(var_core_value_sig625E, var_core_value_sig6F04, var_core_value_sig48DA, var_core_value_sigD327) {
    if (!this._permissionService["canManageView"](var_core_value_sig6F04, var_core_value_sig48DA)) throw Error('[BaseCommandService]:\x20cannot\x20manage\x20view.');
    this._apply(var_core_value_sig625E, this._factory["setViewSort"](var_core_value_sig625E.getSnapshot(), var_core_value_sig6F04, var_core_value_sig48DA, var_core_value_sigD327));
  }
  setViewGroup(var_core_value_sig6694, var_core_value_sig2A21, var_core_value_sig0836, var_core_value_sigD95C) {
    if (!this._permissionService["canManageView"](var_core_value_sig2A21, var_core_value_sig0836)) throw Error('[BaseCommandService]:\x20cannot\x20manage\x20view.');
    this._apply(var_core_value_sig6694, this._factory["setViewGroup"](var_core_value_sig6694.getSnapshot(), var_core_value_sig2A21, var_core_value_sig0836, var_core_value_sigD95C));
  }
  setViewFieldVisible(var_core_value_sig692E, var_core_value_sig3FAF, var_core_value_sig378B, var_core_value_sigDE50, var_core_value_sig3094) {
    if (!this._permissionService["canManageView"](var_core_value_sig3FAF, var_core_value_sig378B)) throw Error('[BaseCommandService]:\x20cannot\x20manage\x20view.');
    this._apply(var_core_value_sig692E, this._factory["setViewFieldVisible"](var_core_value_sig692E.getSnapshot(), var_core_value_sig3FAF, var_core_value_sig378B, var_core_value_sigDE50, var_core_value_sig3094));
  }
  setViewFieldWidth(var_core_value_sig86CC, var_core_value_sig78681, var_core_value_sig9921, var_core_value_sig59BF, var_core_value_sigF001) {
    if (!this._permissionService["canManageView"](var_core_value_sig78681, var_core_value_sig9921)) throw Error("[BaseCommandService]: cannot manage view.");
    this._apply(var_core_value_sig86CC, this._factory["setViewFieldWidth"](var_core_value_sig86CC.getSnapshot(), var_core_value_sig78681, var_core_value_sig9921, var_core_value_sig59BF, var_core_value_sigF001));
  }
  setViewFieldOrder(var_core_value_sigE511, var_core_value_sig1C81, var_core_value_sig2C6A, var_core_value_sig7207, var_core_value_sig297F) {
    if (!this._permissionService["canManageView"](var_core_value_sig1C81, var_core_value_sig2C6A)) throw Error("[BaseCommandService]: cannot manage view.");
    this._apply(var_core_value_sigE511, this._factory["setViewFieldOrder"](var_core_value_sigE511.getSnapshot(), var_core_value_sig1C81, var_core_value_sig2C6A, var_core_value_sig7207, var_core_value_sig297F));
  }
  _apply(var_core_value_sigA95A, var_core_value_sig94D6) {
    let var_core_value_sigC22E = var_core_value_sigA95A.getSnapshot();
    var_core_value_sigA95A.setSnapshot(this._applier["applyOp"](var_core_value_sigC22E, var_core_value_sig94D6));
  }
  _createRecordWithDefaults(var_core_value_sig2321, var_core_value_sigFF33, var_core_value_sig16E0, var_core_value_sig213C = this._createNumberingAllocators(var_core_value_sig2321.tables[var_core_value_sigFF33])) {
    let var_core_value_sig31F8 = var_core_value_sig2321.tables[var_core_value_sigFF33],
      var_core_value_sig6905 = var_core_value_sig16E0.createdBy ?? var_core_value_sig16E0.updatedBy ?? this._getCurrentUserId(),
      var_core_value_sigC3C0 = {
        ...var_core_value_sig16E0,
        'createdBy': var_core_value_sig16E0.createdBy ?? var_core_value_sig6905,
        'updatedBy': var_core_value_sig16E0.updatedBy ?? var_core_value_sig6905,
        'values': {
          ...var_core_value_sig16E0.values
        }
      };
    return var_core_value_sigC3C0.values[var_core_value_sigED20] = var_core_value_sigC3C0.id, var_core_value_sig31F8.fieldOrder['forEach'](var_core_value_sig1998 => {
      let var_core_value_sigFF19 = var_core_value_sig31F8.fields[var_core_value_sig1998];
      if (!(!var_core_value_sigFF19 || var_core_value_sigC3C0.values[var_core_value_sig1998] !== undefined)) switch (var_core_value_sigFF19.type) {
        case var_core_value_sig06E6.Numbering:
          var var_core_value_sig43B8;
          var_core_value_sigC3C0.values[var_core_value_sig1998] = ((var_core_value_sig43B8 = var_core_value_sig213C.get(var_core_value_sig1998)) == null ? undefined : var_core_value_sig43B8()) ?? this._createNumberingAllocator(var_core_value_sig31F8, var_core_value_sig1998)();
          break;
        case var_core_value_sig06E6.CreatedBy:
          var_core_value_sigC3C0.createdBy && (var_core_value_sigC3C0.values[var_core_value_sig1998] = var_core_value_sigC3C0.createdBy);
          break;
        case var_core_value_sig06E6.UpdatedBy:
          var_core_value_sigC3C0.updatedBy && (var_core_value_sigC3C0.values[var_core_value_sig1998] = var_core_value_sigC3C0.updatedBy);
          break;
        case var_core_value_sig06E6.CreatedAt:
          var_core_value_sigC3C0.values[var_core_value_sig1998] = z(var_core_value_sigC3C0.createdAt);
          break;
        case var_core_value_sig06E6.UpdatedAt:
          var_core_value_sigC3C0.values[var_core_value_sig1998] = z(var_core_value_sigC3C0.updatedAt);
          break;
        default:
          {
            let var_core_value_sig2BCF = var_core_value_sigFF19.defaultValue;
            var_core_value_sig2BCF != null && var_core_value_sig2BCF !== '' && !(Array.isArray(var_core_value_sig2BCF) && var_core_value_sig2BCF.length === 0) && (var_core_value_sigC3C0.values[var_core_value_sig1998] = var_core_value_sig2BCF);
          }
      }
    }), var_core_value_sigC3C0;
  }
  _withModifiedSystemValues(var_core_value_sig1F39, var_core_value_sig9256, var_core_value_sig98A0, var_core_value_sig3EBD) {
    var var_core_value_sig1AC3, var_core_value_sig66B8;
    let var_core_value_sig4C7F = var_core_value_sig1F39.tables[var_core_value_sig9256],
      var_core_value_sig2543 = ((var_core_value_sig1AC3 = (var_core_value_sig66B8 = this._runtimeContext).now) == null ? undefined : var_core_value_sig1AC3.call(var_core_value_sig66B8)) ?? Date.now(),
      var_core_value_sigB230 = this._getCurrentUserId(),
      var_core_value_sig407E = {
        ...var_core_value_sig3EBD
      };
    return var_core_value_sig4C7F.fieldOrder["forEach"](var_core_value_sigD98F => {
      let var_core_value_sig66C0 = var_core_value_sig4C7F.fields[var_core_value_sigD98F];
      var_core_value_sig66C0 && (var_core_value_sig66C0.type === var_core_value_sig06E6.UpdatedAt && (var_core_value_sig407E[var_core_value_sigD98F] = z(var_core_value_sig2543)), var_core_value_sig66C0.type === var_core_value_sig06E6.UpdatedBy && var_core_value_sigB230 && (var_core_value_sig407E[var_core_value_sigD98F] = var_core_value_sigB230));
    }), {
      'recordId': var_core_value_sig98A0,
      'values': var_core_value_sig407E,
      'recordPatch': {
        'updatedAt': var_core_value_sig2543,
        ...(var_core_value_sigB230 ? {
          'updatedBy': var_core_value_sigB230
        } : {})
      }
    };
  }
  _createSystemFieldValuePatches(var_core_value_sig88CB, var_core_value_sigD615, var_core_value_sigB708) {
    let var_core_value_sig60EF = var_core_value_sig88CB.tables[var_core_value_sigD615];
    return !var_core_value_sig60EF || !Gr(var_core_value_sigB708) ? [] : var_core_value_sigB708.type === var_core_value_sig06E6.Numbering ? this._createNumberingFieldValuePatches(var_core_value_sig60EF, var_core_value_sigB708.id) : Object.values(var_core_value_sig60EF.records).flatMap(var_core_value_sig9D15 => {
      let var_core_value_sigB785 = this._getSystemFieldValue(var_core_value_sigB708, var_core_value_sig9D15);
      return var_core_value_sigB785 === undefined ? [] : [{
        'recordId': var_core_value_sig9D15.id,
        'values': {
          [var_core_value_sigB708.id]: var_core_value_sigB785
        }
      }];
    });
  }
  _getSystemFieldValue(var_core_value_sigA6FB, var_core_value_sigD6EA) {
    switch (var_core_value_sigA6FB.type) {
      case var_core_value_sig06E6.CreatedBy:
        return var_core_value_sigD6EA.createdBy ?? this._getCurrentUserId();
      case var_core_value_sig06E6.UpdatedBy:
        return var_core_value_sigD6EA.updatedBy ?? this._getCurrentUserId();
      case var_core_value_sig06E6.CreatedAt:
        return z(var_core_value_sigD6EA.createdAt ?? Date.now());
      case var_core_value_sig06E6.UpdatedAt:
        return z(var_core_value_sigD6EA.updatedAt ?? Date.now());
      default:
        return;
    }
  }
  _createNumberingAllocators(var_core_value_sigA2D3) {
    let var_core_value_sig727A = new Map();
    return var_core_value_sigA2D3 && var_core_value_sigA2D3.fieldOrder["forEach"](var_core_value_sig130F => {
      let var_core_value_sigC0E3 = var_core_value_sigA2D3.fields[var_core_value_sig130F];
      (var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.type) === var_core_value_sig06E6.Numbering && var_core_value_sig727A.set(var_core_value_sig130F, this._createNumberingAllocator(var_core_value_sigA2D3, var_core_value_sig130F));
    }), var_core_value_sig727A;
  }
  _createNumberingAllocator(var_core_value_sig6AF1, var_core_value_sig3F6A) {
    let var_core_value_sig23B4 = Object.values(var_core_value_sig6AF1.records).reduce((var_core_value_sig52F7, var_core_value_sig866F) => {
      let var_core_value_sigDE3D = Number(var_core_value_sig866F.values[var_core_value_sig3F6A]);
      return Number.isFinite(var_core_value_sigDE3D) ? Math.max(var_core_value_sig52F7, var_core_value_sigDE3D) : var_core_value_sig52F7;
    }, 0);
    return () => String(++var_core_value_sig23B4);
  }
  _createNumberingFieldValuePatches(var_core_value_sig350C, var_core_value_sig2335) {
    let var_core_value_sig6233 = this._getOrderedRecords(var_core_value_sig350C),
      var_core_value_sig4230 = this._createNumberingAllocator(var_core_value_sig350C, var_core_value_sig2335);
    return var_core_value_sig6233.flatMap(var_core_value_sigF175 => this._isNonEmptyCellValue(var_core_value_sigF175.values[var_core_value_sig2335]) ? [] : [{
      'recordId': var_core_value_sigF175.id,
      'values': {
        [var_core_value_sig2335]: var_core_value_sig4230()
      }
    }]);
  }
  _getOrderedRecords(var_core_value_sig6136) {
    var var_core_value_sigD25E;
    let var_core_value_sigE1BC = Object.values(var_core_value_sig6136.records),
      var_core_value_sigCF441 = new Map(var_core_value_sigE1BC.map(var_core_value_sig6A18 => [var_core_value_sig6A18.id, var_core_value_sig6A18])),
      var_core_value_sig3C97 = [],
      var_core_value_sigA920 = new Set();
    (var_core_value_sigD25E = var_core_value_sig6136.recordOrder) == null || var_core_value_sigD25E.forEach(var_core_value_sig4E3D => {
      let var_core_value_sig49B0 = var_core_value_sigCF441.get(var_core_value_sig4E3D);
      var_core_value_sig49B0 && (var_core_value_sig3C97.push(var_core_value_sig49B0), var_core_value_sigA920.add(var_core_value_sig4E3D));
    });
    let var_core_value_sigAD561 = var_core_value_sigE1BC.filter(var_core_value_sig2547 => !var_core_value_sigA920.has(var_core_value_sig2547.id)).sort((var_core_value_sigBCA9, var_core_value_sig4CDF) => String(var_core_value_sigBCA9.orderKey ?? var_core_value_sigBCA9.id).localeCompare(String(var_core_value_sig4CDF.orderKey ?? var_core_value_sig4CDF.id)) || var_core_value_sigBCA9.id["localeCompare"](var_core_value_sig4CDF.id));
    return [...var_core_value_sig3C97, ...var_core_value_sigAD561];
  }
  _isNonEmptyCellValue(var_core_value_sig04541) {
    return var_core_value_sig04541 != null && var_core_value_sig04541 !== '' && !(Array.isArray(var_core_value_sig04541) && var_core_value_sig04541.length === 0);
  }
  _getCurrentUserId() {
    var var_core_value_sigEE1A, var_core_value_sig4107, var_core_value_sigF35C, var_core_value_sigEF8D;
    return ((var_core_value_sigEE1A = (var_core_value_sig4107 = this._runtimeContext).getCurrentUserId) == null ? undefined : var_core_value_sigEE1A.call(var_core_value_sig4107)) ?? ((var_core_value_sigF35C = (var_core_value_sigEF8D = this._runtimeContext).getCurrentUser) == null || (var_core_value_sigF35C = var_core_value_sigF35C.call(var_core_value_sigEF8D)) == null ? undefined : var_core_value_sigF35C.userID) ?? undefined;
  }
  _normalizeCellValue(var_core_value_sigE025, var_core_value_sigD549, var_core_value_sigC79E, var_core_value_sig9221, var_core_value_sig0351) {
    var var_core_value_sig4686;
    if (!this._permissionService["canEditCell"](var_core_value_sigD549, var_core_value_sigC79E, var_core_value_sig9221)) throw Error('[BaseCommandService]:\x20cannot\x20edit\x20cell.');
    let var_core_value_sig8E1C = (var_core_value_sig4686 = var_core_value_sigE025.tables[var_core_value_sigD549]) == null ? undefined : var_core_value_sig4686.fields[var_core_value_sig9221];
    if (!var_core_value_sig8E1C) throw Error("[BaseCommandService]: field \"" + var_core_value_sig9221 + '\x22\x20does\x20not\x20exist.');
    let var_core_value_sigD719 = this._fieldRegistry['get'](var_core_value_sig8E1C.type);
    if (var_core_value_sig8E1C.readonly || var_core_value_sig8E1C.system || !var_core_value_sigD719.getCapabilities(var_core_value_sig8E1C).editable) throw Error('[BaseCommandService]:\x20cannot\x20edit\x20readonly\x20field.');
    let var_core_value_sig323C = var_core_value_sigD719.normalize(var_core_value_sig0351, var_core_value_sig8E1C),
      var_core_value_sig015D = var_core_value_sigD719.validate(var_core_value_sig323C, var_core_value_sig8E1C);
    if (!var_core_value_sig015D.valid) throw Error(var_core_value_sig015D.reason ?? '[BaseCommandService]:\x20invalid\x20cell\x20value.');
    let var_core_value_sigBF8B = var_core_value_sig8E1C.type === var_core_value_sig06E6.RecordLink ? Re(var_core_value_sigE025, var_core_value_sig8E1C, var_core_value_sig323C) : {
      'valid': true
    };
    if (!var_core_value_sigBF8B.valid) throw Error(var_core_value_sigBF8B.reason ?? "[BaseCommandService]: invalid RecordLink value.");
    return var_core_value_sig323C;
  }
  _assertFieldDefinition(var_core_value_sigF7CE, var_core_value_sig7CF1) {
    if (var_core_value_sig7CF1.id === var_core_value_sigED20 || var_core_value_sig7CF1.type === var_core_value_sig06E6.RecordId || var_core_value_sigEFBE(var_core_value_sig7CF1.name)) throw Error("[BaseCommandService]: record-id is reserved.");
    let var_core_value_sigA552 = Le(var_core_value_sigF7CE, var_core_value_sig7CF1);
    if (!var_core_value_sigA552.valid) throw Error(var_core_value_sigA552.reason ?? '[BaseCommandService]:\x20invalid\x20field\x20definition.');
  }
};
Ur = Y([J(0, Lr), J(1, dr)], Ur);
function Wr() {
  let var_core_value_sig1D8D = new fr();
  return In().forEach(var_core_value_sigAE32 => var_core_value_sig1D8D.register(var_core_value_sigAE32)), var_core_value_sig1D8D;
}
;
function Gr(var_core_value_sigFCDA) {
  return var_core_value_sigFCDA.type === var_core_value_sig06E6.Numbering || var_core_value_sigFCDA.type === var_core_value_sig06E6.CreatedBy || var_core_value_sigFCDA.type === var_core_value_sig06E6.UpdatedBy || var_core_value_sigFCDA.type === var_core_value_sig06E6.CreatedAt || var_core_value_sigFCDA.type === var_core_value_sig06E6.UpdatedAt;
}
const Kr = new Set([var_core_value_sig06E6.Progress, var_core_value_sig06E6.Rating, var_core_value_sig06E6.Checkbox]);
function qr(var_core_value_sig4A8B) {
  let var_core_value_sigE230 = var_core_value_sig4A8B.fields[var_core_value_sig4A8B.primaryFieldId];
  if (!(var_core_value_sigE230 && (var_core_value_sigE230.system === true || var_core_value_sigE230.id["toLowerCase"]() === 'id' || var_core_value_sigE230.name['trim']().toLowerCase() === 'id')) && var_core_value_sigE230) return var_core_value_sigE230.id;
  for (let var_core_value_sig9B4D of var_core_value_sig4A8B.fieldOrder) {
    let var_core_value_sig3F79 = var_core_value_sig4A8B.fields[var_core_value_sig9B4D];
    if (var_core_value_sig3F79 && var_core_value_sig3F79.id !== var_core_value_sig4A8B.primaryFieldId && var_core_value_sig3F79.system !== true && var_core_value_sig3F79.type !== var_core_value_sig06E6.RecordId) return var_core_value_sig3F79.id;
  }
  return var_core_value_sig4A8B.primaryFieldId;
}
;
function Jr(var_core_value_sigB8AF, var_core_value_sigD4B6 = [], var_core_value_sigB90E = 5) {
  let var_core_value_sigAEF2 = new Set(var_core_value_sigD4B6.filter(var_core_value_sig2704 => !!var_core_value_sig2704)),
    var_core_value_sig4453 = [],
    var_core_value_sigFA8E = [];
  for (let var_core_value_sigD0CC of var_core_value_sigB8AF.fieldOrder) {
    let var_core_value_sig880E = var_core_value_sigB8AF.fields[var_core_value_sigD0CC];
    var_core_value_sig880E && var_core_value_sig880E.system !== true && var_core_value_sig880E.type !== var_core_value_sig06E6.RecordId && !var_core_value_sigAEF2.has(var_core_value_sig880E.id) && (Kr.has(var_core_value_sig880E.type) ? var_core_value_sig4453 : var_core_value_sigFA8E).push(var_core_value_sig880E.id);
  }
  return [...var_core_value_sig4453, ...var_core_value_sigFA8E].slice(0, var_core_value_sigB90E);
}
;
function Yr() {
  return [{
    'type': var_core_value_sig29F7.Grid,
    'i18nKey': 'base.viewType.grid',
    'createDefaultConfig': () => ({}),
    'validateConfig': () => ({
      'valid': true
    }),
    'buildProjection': () => {
      throw Error("Grid projection is implemented by BaseProjectionService.");
    }
  }, {
    'type': var_core_value_sig29F7.Kanban,
    'i18nKey': "base.viewType.kanban",
    'createDefaultConfig': var_core_value_sigF347 => {
      let var_core_value_sig80C6 = Xr(var_core_value_sigF347);
      return {
        'groupFieldId': var_core_value_sig80C6,
        'coverFieldId': null,
        'cardLayout': "normal",
        'showFieldNames': true,
        'fieldSettings': {},
        'columnSettings': {},
        'card': {
          'titleFieldId': var_core_value_sigF347.primaryFieldId,
          'fieldIds': Jr(var_core_value_sigF347, [var_core_value_sigF347.primaryFieldId, var_core_value_sig80C6])
        }
      };
    },
    'validateConfig': () => ({
      'valid': true
    }),
    'buildProjection': () => {
      throw Error('Kanban\x20projection\x20is\x20implemented\x20by\x20BaseProjectionService.');
    }
  }, {
    'type': var_core_value_sig29F7.Calendar,
    'i18nKey': "base.viewType.calendar",
    'createDefaultConfig': var_core_value_sigEBFB => {
      let var_core_value_sigF3BF = Zr(var_core_value_sigEBFB);
      return {
        'startDateFieldId': var_core_value_sigF3BF,
        'endDateFieldId': Qr(var_core_value_sigEBFB, var_core_value_sigF3BF),
        'titleFieldId': var_core_value_sigEBFB.primaryFieldId,
        'mode': "month",
        'timeslotSize': "medium",
        'timeZone': "local",
        'displayColor': {
          'type': 'custom',
          'color': '#3b82f6'
        },
        'fieldSettings': {}
      };
    },
    'validateConfig': () => ({
      'valid': true
    }),
    'buildProjection': () => {
      throw Error('Calendar\x20projection\x20is\x20implemented\x20by\x20BaseProjectionService.');
    }
  }, {
    'type': var_core_value_sig29F7.Gantt,
    'i18nKey': 'base.viewType.gantt',
    'createDefaultConfig': var_core_value_sigAE58 => {
      let var_core_value_sig8E13 = Zr(var_core_value_sigAE58);
      return {
        'startDateFieldId': var_core_value_sig8E13,
        'endDateFieldId': Qr(var_core_value_sigAE58, var_core_value_sig8E13) ?? var_core_value_sig8E13,
        'titleFieldId': var_core_value_sigAE58.primaryFieldId,
        'scale': "month",
        'showTodayLine': true,
        'displayColor': {
          'type': "custom",
          'color': "#14b8a6"
        },
        'fieldSettings': {},
        'workingDaysOnly': false
      };
    },
    'validateConfig': () => ({
      'valid': true
    }),
    'buildProjection': () => {
      throw Error("Gantt projection is implemented by BaseProjectionService.");
    }
  }, {
    'type': var_core_value_sig29F7.Gallery,
    'i18nKey': "base.viewType.gallery",
    'createDefaultConfig': var_core_value_sig3AAF => {
      let var_core_value_sig134E = qr(var_core_value_sig3AAF);
      return {
        'coverFieldId': null,
        'cardLayout': 'normal',
        'showFieldNames': true,
        'fieldSettings': {},
        'card': {
          'titleFieldId': var_core_value_sig134E,
          'coverFieldId': null,
          'fieldIds': Jr(var_core_value_sig3AAF, [var_core_value_sig134E, var_core_value_sig3AAF.primaryFieldId])
        },
        'cardSize': "medium"
      };
    },
    'validateConfig': () => ({
      'valid': true
    }),
    'buildProjection': () => {
      throw Error("Gallery projection is implemented by BaseProjectionService.");
    }
  }];
}
;
function Xr(var_core_value_sig9D66) {
  var var_core_value_sig399F, var_core_value_sig57C2, var_core_value_sigA85E;
  let var_core_value_sig65AA = var_core_value_sig9D66.fieldOrder["map"](var_core_value_sigA3C0 => var_core_value_sig9D66.fields[var_core_value_sigA3C0]).filter(var_core_value_sig723F1 => !!var_core_value_sig723F1);
  return ((var_core_value_sig399F = var_core_value_sig65AA.find(var_core_value_sigD044 => var_core_value_sigD044.type === var_core_value_sig06E6.SingleSelect || var_core_value_sigD044.type === var_core_value_sig06E6.MultiSelect || var_core_value_sigD044.type === var_core_value_sig06E6.Group)) == null ? undefined : var_core_value_sig399F.id) ?? ((var_core_value_sig57C2 = var_core_value_sig65AA.find(var_core_value_sig9797 => var_core_value_sig9797.type === var_core_value_sig06E6.Text)) == null ? undefined : var_core_value_sig57C2.id) ?? ((var_core_value_sigA85E = var_core_value_sig65AA.find(var_core_value_sig8533 => var_core_value_sig8533.type === var_core_value_sig06E6.Date || var_core_value_sig8533.type === var_core_value_sig06E6.CreatedAt || var_core_value_sig8533.type === var_core_value_sig06E6.UpdatedAt)) == null ? undefined : var_core_value_sigA85E.id) ?? var_core_value_sig9D66.primaryFieldId;
}
;
function Zr(var_core_value_sigC6DD) {
  var var_core_value_sig1300;
  return ((var_core_value_sig1300 = var_core_value_sigC6DD.fieldOrder["map"](var_core_value_sig57C5 => var_core_value_sigC6DD.fields[var_core_value_sig57C5]).find($r)) == null ? undefined : var_core_value_sig1300.id) ?? '';
}
;
function Qr(var_core_value_sig05BB, var_core_value_sig91CD) {
  var var_core_value_sig2AF0;
  return (var_core_value_sig2AF0 = var_core_value_sig05BB.fieldOrder["map"](var_core_value_sig0DE9 => var_core_value_sig05BB.fields[var_core_value_sig0DE9]).find(var_core_value_sigB00D => $r(var_core_value_sigB00D) && var_core_value_sigB00D.id !== var_core_value_sig91CD)) == null ? undefined : var_core_value_sig2AF0.id;
}
;
function $r(var_core_value_sig796D) {
  return !!var_core_value_sig796D && var_core_value_sig796D.type === var_core_value_sig06E6.Date && var_core_value_sig796D.readonly !== true && var_core_value_sig796D.system !== true;
}
const ei = var_core_value_sig60D0('base.projection.service'),
  ti = new Set([var_core_value_sig06E6.Number, var_core_value_sig06E6.Currency, var_core_value_sig06E6.Progress, var_core_value_sig06E6.Rating, var_core_value_sig06E6.Date, var_core_value_sig06E6.CreatedAt, var_core_value_sig06E6.UpdatedAt, var_core_value_sig06E6.Checkbox]),
  ni = 1440 * 60 * 1000;
let ri = class extends var_core_value_sig8A28 {
  constructor(var_core_value_sig57C8) {
    super(), this._fieldRegistry = var_core_value_sig57C8, W(this, "_views", new Map()), W(this, '_projectionCache', new WeakMap()), W(this, "_projectedRowsCache", new Map()), W(this, "_projectedViewRowsCache", new Map()), W(this, "_projectedGroupsCache", new Map()), W(this, '_hierarchyIndexCache', new Map()), W(this, '_globalRevision', 0), W(this, "_tableRevisions", new Map()), W(this, "_cellRevisions", new Map()), W(this, '_cellInvalidations', new Map()), W(this, "_viewRevisions", new Map());
  }
  registerView(var_core_value_sigC27D) {
    return this._views['set'](var_core_value_sigC27D.type, var_core_value_sigC27D), var_core_value_sig8DAA(() => this._views["delete"](var_core_value_sigC27D.type));
  }
  getProjection(var_core_value_sig7B95, var_core_value_sig7D59, var_core_value_sig5863) {
    var var_core_value_sig5BE7, var_core_value_sigC74A, var_core_value_sig8F6A;
    return F("BaseProjection.getProjection", () => {
      let var_core_value_sigC9ED = this._getCachedProjection(var_core_value_sig7B95, var_core_value_sig7D59, var_core_value_sig5863);
      if (var_core_value_sigC9ED) return var_core_value_sigC9ED;
      let var_core_value_sigB57B = var_core_value_sig7B95.tables[var_core_value_sig7D59],
        var_core_value_sig780B = var_core_value_sigB57B == null ? undefined : var_core_value_sigB57B.views[var_core_value_sig5863];
      if (!var_core_value_sigB57B || !var_core_value_sig780B) return this._setCachedProjection(var_core_value_sig7B95, var_core_value_sig7D59, var_core_value_sig5863, {
        'type': "invalid",
        'viewType': (var_core_value_sig780B == null ? undefined : var_core_value_sig780B.type) ?? var_core_value_sig29F7.Grid,
        'reason': "missingField"
      });
      let var_core_value_sig7D1B;
      switch (var_core_value_sig780B.type) {
        case var_core_value_sig29F7.Grid:
          var_core_value_sig7D1B = this._buildGrid(var_core_value_sigB57B, var_core_value_sig780B);
          break;
        case var_core_value_sig29F7.Gantt:
          var_core_value_sig7D1B = this._buildGantt(var_core_value_sigB57B, var_core_value_sig780B);
          break;
        case var_core_value_sig29F7.Kanban:
          var_core_value_sig7D1B = this._buildKanban(var_core_value_sigB57B, var_core_value_sig780B);
          break;
        case var_core_value_sig29F7.Calendar:
          var_core_value_sig7D1B = this._buildCalendar(var_core_value_sigB57B, var_core_value_sig780B);
          break;
        case var_core_value_sig29F7.Gallery:
          var_core_value_sig7D1B = this._buildGallery(var_core_value_sigB57B, var_core_value_sig780B);
          break;
        default:
          var_core_value_sig7D1B = {
            'type': 'invalid',
            'viewType': var_core_value_sig780B.type,
            'reason': "missingField"
          };
      }
      return this._setCachedProjection(var_core_value_sig7B95, var_core_value_sig7D59, var_core_value_sig5863, var_core_value_sig7D1B);
    }, {
      'tableId': var_core_value_sig7D59,
      'viewId': var_core_value_sig5863,
      'viewType': (var_core_value_sig5BE7 = var_core_value_sig7B95.tables[var_core_value_sig7D59]) == null || (var_core_value_sig5BE7 = var_core_value_sig5BE7.views[var_core_value_sig5863]) == null ? undefined : var_core_value_sig5BE7.type,
      'records': ((var_core_value_sigC74A = var_core_value_sig7B95.tables[var_core_value_sig7D59]) == null || (var_core_value_sigC74A = var_core_value_sigC74A.recordOrder) == null ? undefined : var_core_value_sigC74A.length) ?? Object.keys(((var_core_value_sig8F6A = var_core_value_sig7B95.tables[var_core_value_sig7D59]) == null ? undefined : var_core_value_sig8F6A.records) ?? {}).length
    });
  }
  repairViewConfig(var_core_value_sig46EA, var_core_value_sig626C, var_core_value_sig9077) {
    var var_core_value_sigC76C, var_core_value_sigB23A, var_core_value_sigBA66;
    let var_core_value_sig3DF0 = var_core_value_sig46EA.tables[var_core_value_sig626C],
      var_core_value_sig0512 = var_core_value_sig3DF0 == null ? undefined : var_core_value_sig3DF0.views[var_core_value_sig9077];
    if (!var_core_value_sig3DF0 || !var_core_value_sig0512) throw Error("[BaseProjectionService]: missing view \"" + var_core_value_sig9077 + '\x22.');
    let var_core_value_sig4B2B = var_core_value_sig7BE0 => !!var_core_value_sig3DF0.fields[var_core_value_sig7BE0],
      var_core_value_sigDF88 = {
        ...var_core_value_sig0512,
        'filter': var_core_value_sig0512.filter ? {
          ...var_core_value_sig0512.filter,
          'conditions': var_core_value_sig0512.filter['conditions'].filter(var_core_value_sig7D40 => var_core_value_sig4B2B(var_core_value_sig7D40.fieldId))
        } : var_core_value_sig0512.filter,
        'sort': (var_core_value_sigC76C = var_core_value_sig0512.sort) == null ? undefined : var_core_value_sigC76C.filter(var_core_value_sig6C7E => var_core_value_sig4B2B(var_core_value_sig6C7E.fieldId)),
        'group': (var_core_value_sigB23A = var_core_value_sig0512.group) == null ? undefined : var_core_value_sigB23A.filter(var_core_value_sig68BE => var_core_value_sig4B2B(var_core_value_sig68BE.fieldId)),
        'fieldOrder': (var_core_value_sigBA66 = var_core_value_sig0512.fieldOrder) == null ? undefined : var_core_value_sigBA66.filter(var_core_value_sig4B2B),
        'fieldSettings': Object.fromEntries(Object.entries(var_core_value_sig0512.fieldSettings ?? {}).filter(([var_core_value_sig04C6]) => var_core_value_sig4B2B(var_core_value_sig04C6)))
      };
    if (var_core_value_sigDF88.type === "kanban") {
      var var_core_value_sigDB93;
      let var_core_value_sigCA05 = var_core_value_sigDF88.config ?? {},
        var_core_value_sig2F2B = this._resolveKanbanGroupFieldId(var_core_value_sig3DF0, var_core_value_sigDF88),
        var_core_value_sig70AF = this._resolveCardTitleFieldId(var_core_value_sig3DF0, (var_core_value_sigDB93 = var_core_value_sigCA05.card) == null ? undefined : var_core_value_sigDB93.titleFieldId);
      var_core_value_sigDF88.config = {
        ...var_core_value_sigCA05,
        'groupFieldId': var_core_value_sig2F2B ?? var_core_value_sigCA05.groupFieldId,
        'coverFieldId': this._resolveKanbanCoverFieldId(var_core_value_sig3DF0, var_core_value_sigCA05),
        'cardLayout': var_core_value_sigCA05.cardLayout === 'compose' ? "compose" : "normal",
        'showFieldNames': var_core_value_sigCA05.showFieldNames !== false,
        'fieldSettings': Object.fromEntries(Object.entries(var_core_value_sigCA05.fieldSettings ?? {}).filter(([var_core_value_sigC259]) => var_core_value_sig4B2B(var_core_value_sigC259))),
        'columnSettings': var_core_value_sigCA05.columnSettings ?? {},
        'card': {
          ...(var_core_value_sigCA05.card ?? {}),
          'titleFieldId': var_core_value_sig70AF,
          'fieldIds': this._resolveKanbanCardFieldIds(var_core_value_sig3DF0, var_core_value_sigDF88, var_core_value_sig2F2B ?? '', var_core_value_sig70AF)
        }
      };
    }
    return {
      'repaired': JSON.stringify(var_core_value_sigDF88) !== JSON.stringify(var_core_value_sig0512),
      'view': var_core_value_sigDF88
    };
  }
  invalidateByOp() {
    this._globalRevision++;
  }
  invalidateByCell(var_core_value_sig67CF, var_core_value_sigCA96, var_core_value_sig6C5E) {
    let var_core_value_sig4997 = this._getCellRevision(var_core_value_sig67CF) + 1;
    this._cellRevisions["set"](var_core_value_sig67CF, var_core_value_sig4997);
    let var_core_value_sig7290 = this._cellInvalidations["get"](var_core_value_sig67CF) ?? [];
    var_core_value_sig7290.push({
      'revision': var_core_value_sig4997,
      'recordId': var_core_value_sigCA96,
      'fieldId': var_core_value_sig6C5E
    }), this._cellInvalidations["set"](var_core_value_sig67CF, var_core_value_sig7290);
  }
  invalidateByField(var_core_value_sigE835, var_core_value_sig4644) {
    this._bumpTableRevision(var_core_value_sigE835);
  }
  invalidateByView(var_core_value_sig9DED, var_core_value_sig7DE6) {
    this._viewRevisions["set"](this._viewRevisionKey(var_core_value_sig9DED, var_core_value_sig7DE6), this._getViewRevision(var_core_value_sig9DED, var_core_value_sig7DE6) + 1);
  }
  _getCachedProjection(var_core_value_sig120E, var_core_value_sigD79B, var_core_value_sig92A3) {
    var var_core_value_sig8911;
    let var_core_value_sig8D1B = (var_core_value_sig8911 = this._projectionCache["get"](var_core_value_sig120E)) == null ? undefined : var_core_value_sig8911.get(this._cacheKey(var_core_value_sigD79B, var_core_value_sig92A3));
    return var_core_value_sig8D1B && var_core_value_sig8D1B.globalRevision === this._globalRevision && var_core_value_sig8D1B.tableRevision === this._getTableRevision(var_core_value_sigD79B) && var_core_value_sig8D1B.cellRevision === this._getCellRevision(var_core_value_sigD79B) && var_core_value_sig8D1B.viewRevision === this._getViewRevision(var_core_value_sigD79B, var_core_value_sig92A3) ? var_core_value_sig8D1B.projection : null;
  }
  _setCachedProjection(var_core_value_sigA915, var_core_value_sigE1F7, var_core_value_sig4BE7, var_core_value_sigF9FF) {
    let var_core_value_sigE0E3 = this._projectionCache["get"](var_core_value_sigA915);
    return var_core_value_sigE0E3 || (var_core_value_sigE0E3 = new Map(), this._projectionCache['set'](var_core_value_sigA915, var_core_value_sigE0E3)), var_core_value_sigE0E3.set(this._cacheKey(var_core_value_sigE1F7, var_core_value_sig4BE7), {
      'projection': var_core_value_sigF9FF,
      'globalRevision': this._globalRevision,
      'tableRevision': this._getTableRevision(var_core_value_sigE1F7),
      'cellRevision': this._getCellRevision(var_core_value_sigE1F7),
      'viewRevision': this._getViewRevision(var_core_value_sigE1F7, var_core_value_sig4BE7)
    }), var_core_value_sigF9FF;
  }
  _bumpTableRevision(var_core_value_sig3AB3) {
    this._tableRevisions["set"](var_core_value_sig3AB3, this._getTableRevision(var_core_value_sig3AB3) + 1);
  }
  _getTableRevision(var_core_value_sig816E) {
    return this._tableRevisions["get"](var_core_value_sig816E) ?? 0;
  }
  _getCellRevision(var_core_value_sigE6F3) {
    return this._cellRevisions["get"](var_core_value_sigE6F3) ?? 0;
  }
  _getViewRevision(var_core_value_sig3EE1, var_core_value_sig9673) {
    return this._viewRevisions["get"](this._viewRevisionKey(var_core_value_sig3EE1, var_core_value_sig9673)) ?? 0;
  }
  _cacheKey(var_core_value_sig4917, var_core_value_sig3BE6) {
    return var_core_value_sig4917 + '\x00' + var_core_value_sig3BE6;
  }
  _viewRowsCacheKey(var_core_value_sigA1C9, var_core_value_sig77D6) {
    return var_core_value_sigA1C9 + '\x00' + this._rowTransformCacheSegment(var_core_value_sig77D6);
  }
  _groupsCacheKey(var_core_value_sigE3CE, var_core_value_sig219B, var_core_value_sig4493) {
    return var_core_value_sigE3CE + '\x00' + this._rowTransformCacheSegment(var_core_value_sig219B) + '\x00' + this._groupConfigCacheSegment(var_core_value_sig4493);
  }
  _rowTransformCacheSegment(var_core_value_sig8B9C) {
    return var_core_value_sig8B9C ? ui({
      'filter': si(var_core_value_sig8B9C.filter),
      'sort': li(var_core_value_sig8B9C.sort)
    }) : '__all__';
  }
  _groupConfigCacheSegment(var_core_value_sigA35B) {
    return ui(var_core_value_sigA35B.map(var_core_value_sigD04E => ({
      'fieldId': var_core_value_sigD04E.fieldId,
      'direction': var_core_value_sigD04E.direction ?? null
    })));
  }
  _viewRevisionKey(var_core_value_sig82DD, var_core_value_sigAAC7) {
    return var_core_value_sig82DD + '\x00' + var_core_value_sigAAC7;
  }
  _buildGrid(var_core_value_sig1999, var_core_value_sigFB45) {
    var var_core_value_sigB86C;
    let var_core_value_sigD892 = Ge(var_core_value_sig1999),
      var_core_value_sig6086 = this._projectRows(var_core_value_sig1999, var_core_value_sigFB45),
      var_core_value_sigAED2 = (var_core_value_sigB86C = var_core_value_sigFB45.filter) != null && var_core_value_sigB86C.conditions['length'] ? this._projectRows(var_core_value_sig1999, {
        ...var_core_value_sigFB45,
        'filter': null
      }) : var_core_value_sig6086,
      var_core_value_sig3516 = $e(this._getHierarchyIndex(var_core_value_sig1999, var_core_value_sigD892, var_core_value_sigFB45.id, var_core_value_sigAED2.map(var_core_value_sigB99B => var_core_value_sigB99B.recordId)), var_core_value_sigAED2, new Set(var_core_value_sig6086.map(var_core_value_sig5A75 => var_core_value_sig5A75.recordId)));
    return {
      'type': var_core_value_sig29F7.Grid,
      'fields': this._projectFields(var_core_value_sig1999, var_core_value_sigFB45),
      'rows': var_core_value_sig3516.rows,
      'groups': this._projectHierarchyGroups(var_core_value_sig1999, var_core_value_sigFB45, var_core_value_sig3516.rows, var_core_value_sig3516.hierarchy),
      'hierarchy': var_core_value_sig3516.hierarchy,
      'frozenFieldCount': typeof var_core_value_sigFB45.config['frozenFieldCount'] == "number" ? var_core_value_sigFB45.config["frozenFieldCount"] : 0
    };
  }
  _getHierarchyIndex(var_core_value_sigCDCD, var_core_value_sig206A, var_core_value_sig1EFE, var_core_value_sig9904) {
    let var_core_value_sig39C7 = var_core_value_sigCDCD.id + '\x00' + var_core_value_sig206A + '\x00' + var_core_value_sig1EFE,
      var_core_value_sigA022 = this._getCellRevision(var_core_value_sigCDCD.id),
      var_core_value_sig913A = this._hierarchyIndexCache["get"](var_core_value_sig39C7);
    if (var_core_value_sig913A && var_core_value_sig913A.globalRevision === this._globalRevision && var_core_value_sig913A.tableRevision === this._getTableRevision(var_core_value_sigCDCD.id)) {
      if (var_core_value_sig913A.cellRevision === var_core_value_sigA022 && var_core_value_sig913A.table === var_core_value_sigCDCD) return var_core_value_sig913A.index;
      if (!this._cellInvalidationsTouchFields(var_core_value_sigCDCD.id, var_core_value_sig913A.cellRevision, var_core_value_sigA022, new Set([var_core_value_sig206A]))) return this._hierarchyIndexCache["set"](var_core_value_sig39C7, {
        ...var_core_value_sig913A,
        'table': var_core_value_sigCDCD,
        'cellRevision': var_core_value_sigA022
      }), var_core_value_sig913A.index;
    }
    let var_core_value_sig991D = Qe(var_core_value_sigCDCD, var_core_value_sig206A, var_core_value_sig9904);
    return this._hierarchyIndexCache["set"](var_core_value_sig39C7, {
      'table': var_core_value_sigCDCD,
      'index': var_core_value_sig991D,
      'globalRevision': this._globalRevision,
      'tableRevision': this._getTableRevision(var_core_value_sigCDCD.id),
      'cellRevision': var_core_value_sigA022
    }), var_core_value_sig991D;
  }
  _projectHierarchyGroups(var_core_value_sig3E9C, var_core_value_sig7835, var_core_value_sig1257, var_core_value_sig97E2) {
    var var_core_value_sigBFA3;
    if (!((var_core_value_sigBFA3 = var_core_value_sig7835.group) != null && var_core_value_sigBFA3.length)) return [];
    let var_core_value_sig6663 = new Map(var_core_value_sig1257.map(var_core_value_sig7BAF => [var_core_value_sig7BAF.recordId, var_core_value_sig7BAF])),
      var_core_value_sigB250 = var_core_value_sig97E2.rootRecordIds["flatMap"](var_core_value_sig8F69 => {
        let var_core_value_sig6884 = var_core_value_sig6663.get(var_core_value_sig8F69);
        return var_core_value_sig6884 ? [var_core_value_sig6884] : [];
      }),
      var_core_value_sig4EAB = this._projectGroups(var_core_value_sig3E9C, var_core_value_sig7835, var_core_value_sigB250),
      var_core_value_sig2FD0 = new Map(var_core_value_sig97E2.orderedRecordIds['map']((var_core_value_sig066E, var_core_value_sig9B0D) => [var_core_value_sig066E, var_core_value_sig9B0D])),
      var_core_value_sig035C = var_core_value_sig3D2C => {
        let var_core_value_sigC56D = var_core_value_sig97E2.nodes[var_core_value_sig3D2C],
          var_core_value_sig3A17 = var_core_value_sig2FD0.get(var_core_value_sig3D2C) ?? -1;
        return var_core_value_sig3A17 < 0 || !var_core_value_sigC56D ? [] : var_core_value_sig97E2.orderedRecordIds["slice"](var_core_value_sig3A17, var_core_value_sigC56D.subtreeEndIndex + 1);
      },
      var_core_value_sigA7F0 = var_core_value_sig938F => {
        var var_core_value_sigD948, var_core_value_sigBE5E;
        return {
          ...var_core_value_sig938F,
          'recordIds': (var_core_value_sigD948 = var_core_value_sig938F.children) != null && var_core_value_sigD948.length ? var_core_value_sig938F.recordIds : var_core_value_sig938F.recordIds["flatMap"](var_core_value_sig035C),
          'children': (var_core_value_sigBE5E = var_core_value_sig938F.children) == null ? undefined : var_core_value_sigBE5E.map(var_core_value_sigA7F0)
        };
      };
    return var_core_value_sig4EAB.map(var_core_value_sigA7F0);
  }
  _buildKanban(var_core_value_sig6AE2, var_core_value_sigFD17) {
    var var_core_value_sigA5E0;
    let var_core_value_sigC38F = this._resolveKanbanGroupFieldId(var_core_value_sig6AE2, var_core_value_sigFD17),
      var_core_value_sigFAFE = var_core_value_sigC38F ? var_core_value_sig6AE2.fields[var_core_value_sigC38F] : undefined;
    if (!var_core_value_sigFAFE) return {
      'type': 'invalid',
      'viewType': var_core_value_sig29F7.Kanban,
      'reason': "invalidGroupField",
      'fieldId': var_core_value_sigFD17.config["groupFieldId"]
    };
    let var_core_value_sig2B86 = this._projectRows(var_core_value_sig6AE2, var_core_value_sigFD17),
      var_core_value_sig8873 = this._projectFields(var_core_value_sig6AE2, var_core_value_sigFD17),
      var_core_value_sigB9C5 = var_core_value_sigFD17.config ?? {},
      var_core_value_sig511D = this._resolveCardTitleFieldId(var_core_value_sig6AE2, (var_core_value_sigA5E0 = var_core_value_sigB9C5.card) == null ? undefined : var_core_value_sigA5E0.titleFieldId),
      var_core_value_sig1610 = this._resolveKanbanCardFieldIds(var_core_value_sig6AE2, var_core_value_sigFD17, var_core_value_sigFAFE.id, var_core_value_sig511D),
      var_core_value_sig23AB = new Map();
    if (P(var_core_value_sig6AE2, var_core_value_sigFAFE.id)) {
      let var_core_value_sig0281 = this._getHierarchyIndex(var_core_value_sig6AE2, var_core_value_sigFAFE.id, var_core_value_sigFD17.id, var_core_value_sig2B86.map(var_core_value_sig9C9F => var_core_value_sig9C9F.recordId)),
        var_core_value_sigED71 = new Map();
      return var_core_value_sig2B86.forEach(var_core_value_sigFDEA => {
        let var_core_value_sig86D0 = var_core_value_sig0281.parentByRecordId["get"](var_core_value_sigFDEA.recordId) ?? null,
          var_core_value_sig4CD2 = var_core_value_sig86D0 ?? '',
          var_core_value_sig48CA = var_core_value_sig86D0 ? var_core_value_sig6AE2.records[var_core_value_sig86D0] : undefined,
          var_core_value_sig50AF = var_core_value_sigED71.get(var_core_value_sig4CD2) ?? {
            'key': var_core_value_sig4CD2,
            'title': var_core_value_sig48CA ? String(gt(var_core_value_sig6AE2, var_core_value_sig48CA.id, var_core_value_sig6AE2.primaryFieldId) ?? var_core_value_sig86D0) : this._kanbanLaneTitle(var_core_value_sigFAFE, var_core_value_sig4CD2, var_core_value_sigB9C5),
            'recordIds': []
          };
        var_core_value_sig50AF.recordIds["push"](var_core_value_sigFDEA.recordId), var_core_value_sigED71.set(var_core_value_sig4CD2, var_core_value_sig50AF);
      }), {
        'type': var_core_value_sig29F7.Kanban,
        'fields': var_core_value_sig8873,
        'rows': var_core_value_sig2B86,
        'groups': [],
        'groupFieldId': var_core_value_sigFAFE.id,
        'titleFieldId': var_core_value_sig511D,
        'coverFieldId': this._resolveKanbanCoverFieldId(var_core_value_sig6AE2, var_core_value_sigB9C5),
        'cardLayout': var_core_value_sigB9C5.cardLayout === 'compose' ? 'compose' : "normal",
        'showFieldNames': var_core_value_sigB9C5.showFieldNames !== false,
        'visibleCardFieldIds': var_core_value_sig1610,
        'lanes': ['', ...var_core_value_sig0281.orderedRecordIds].flatMap(var_core_value_sigA942 => {
          let var_core_value_sigA621 = var_core_value_sigED71.get(var_core_value_sigA942);
          return var_core_value_sigA621 != null && var_core_value_sigA621.recordIds["length"] ? [var_core_value_sigA621] : [];
        })
      };
    }
    return this._getKanbanConfiguredLanes(var_core_value_sigFAFE, var_core_value_sigB9C5).forEach(var_core_value_sig281C => var_core_value_sig23AB.set(var_core_value_sig281C.key, {
      ...var_core_value_sig281C,
      'recordIds': []
    })), var_core_value_sig2B86.forEach(var_core_value_sig3C92 => {
      this._kanbanGroupKeys(var_core_value_sigFAFE, var_core_value_sig3C92.values[var_core_value_sigFAFE.id]).forEach(var_core_value_sigBBFF => {
        let var_core_value_sig8889 = var_core_value_sig23AB.get(var_core_value_sigBBFF) ?? {
          'key': var_core_value_sigBBFF,
          'title': this._kanbanLaneTitle(var_core_value_sigFAFE, var_core_value_sigBBFF, var_core_value_sigB9C5),
          'color': this._kanbanLaneColor(var_core_value_sigFAFE, var_core_value_sigBBFF, var_core_value_sigB9C5),
          'recordIds': []
        };
        var_core_value_sig8889.recordIds["push"](var_core_value_sig3C92.recordId), var_core_value_sig23AB.set(var_core_value_sigBBFF, var_core_value_sig8889);
      });
    }), {
      'type': var_core_value_sig29F7.Kanban,
      'fields': var_core_value_sig8873,
      'rows': var_core_value_sig2B86,
      'groups': this._projectGroups(var_core_value_sig6AE2, var_core_value_sigFD17, var_core_value_sig2B86),
      'groupFieldId': var_core_value_sigFAFE.id,
      'titleFieldId': var_core_value_sig511D,
      'coverFieldId': this._resolveKanbanCoverFieldId(var_core_value_sig6AE2, var_core_value_sigB9C5),
      'cardLayout': var_core_value_sigB9C5.cardLayout === 'compose' ? "compose" : 'normal',
      'showFieldNames': var_core_value_sigB9C5.showFieldNames !== false,
      'visibleCardFieldIds': var_core_value_sig1610,
      'lanes': Array.from(var_core_value_sig23AB.values())
    };
  }
  _resolveKanbanGroupFieldId(var_core_value_sigA15D, var_core_value_sig7E90) {
    var var_core_value_sig03F7;
    let var_core_value_sig756F = (var_core_value_sig03F7 = var_core_value_sig7E90.config) == null ? undefined : var_core_value_sig03F7.groupFieldId;
    return var_core_value_sig756F && this._isKanbanGroupField(var_core_value_sigA15D, var_core_value_sig756F) ? var_core_value_sig756F : this._findKanbanGroupField(var_core_value_sigA15D, var_core_value_sigB16B => this._isAllowedKanbanGroupField(var_core_value_sigB16B));
  }
  _findKanbanGroupField(var_core_value_sig0DB11, var_core_value_sig4950) {
    for (let var_core_value_sig585D of var_core_value_sig0DB11.fieldOrder) {
      let var_core_value_sig32F8 = var_core_value_sig0DB11.fields[var_core_value_sig585D];
      if (var_core_value_sig32F8 && var_core_value_sig4950(var_core_value_sig32F8)) return var_core_value_sig32F8.id;
    }
    return null;
  }
  _isKanbanGroupField(var_core_value_sig4424, var_core_value_sig57E8) {
    let var_core_value_sig76B6 = var_core_value_sig4424.fields[var_core_value_sig57E8];
    return this._isAllowedKanbanGroupField(var_core_value_sig76B6) || P(var_core_value_sig4424, var_core_value_sig57E8);
  }
  _isAllowedKanbanGroupField(var_core_value_sig89BC) {
    return !!var_core_value_sig89BC && (var_core_value_sig89BC.type === var_core_value_sig06E6.SingleSelect || var_core_value_sig89BC.type === var_core_value_sig06E6.MultiSelect || var_core_value_sig89BC.type === var_core_value_sig06E6.Rating || var_core_value_sig89BC.type === var_core_value_sig06E6.Person || var_core_value_sig89BC.type === var_core_value_sig06E6.Group || var_core_value_sig89BC.type === var_core_value_sig06E6.Checkbox);
  }
  _isColorfulKanbanGroupField(var_core_value_sig2191) {
    return var_core_value_sig2191.type === var_core_value_sig06E6.SingleSelect || var_core_value_sig2191.type === var_core_value_sig06E6.MultiSelect;
  }
  _resolveKanbanCoverFieldId(var_core_value_sig3B2E, var_core_value_sig5A9A) {
    var var_core_value_sigB524;
    let var_core_value_sig8CFB = var_core_value_sig5A9A.coverFieldId ?? ((var_core_value_sigB524 = var_core_value_sig5A9A.card) == null ? undefined : var_core_value_sigB524.coverFieldId) ?? null;
    if (!var_core_value_sig8CFB) return null;
    let var_core_value_sigB52C = var_core_value_sig3B2E.fields[var_core_value_sig8CFB];
    return var_core_value_sigB52C && this._capabilities(var_core_value_sigB52C).usableAsCardCover ? var_core_value_sigB52C.id : null;
  }
  _resolveKanbanCardFieldIds(var_core_value_sigA4B8, var_core_value_sigFF9C, var_core_value_sig278D, var_core_value_sigC0FE = this._resolveCardTitleFieldId(var_core_value_sigA4B8, (() => {
    var var_core_value_sig5B67;
    return (var_core_value_sig5B67 = var_core_value_sigFF9C.config) == null || (var_core_value_sig5B67 = var_core_value_sig5B67.card) == null ? undefined : var_core_value_sig5B67.titleFieldId;
  })())) {
    var var_core_value_sigDD22;
    let var_core_value_sig2D35 = var_core_value_sigFF9C.config ?? {},
      var_core_value_sig7A4B = (var_core_value_sigDD22 = var_core_value_sig2D35.card) != null && (var_core_value_sigDD22 = var_core_value_sigDD22.fieldIds) != null && var_core_value_sigDD22.length ? var_core_value_sig2D35.card["fieldIds"] : Jr(var_core_value_sigA4B8, [var_core_value_sigC0FE, var_core_value_sigA4B8.primaryFieldId, var_core_value_sig278D]),
      var_core_value_sigE50A = var_core_value_sig2D35.fieldSettings ?? {};
    return var_core_value_sig7A4B.filter(var_core_value_sigE722 => {
      var var_core_value_sig062A, var_core_value_sig050A;
      let var_core_value_sig8B32 = var_core_value_sigA4B8.fields[var_core_value_sigE722];
      return !(!var_core_value_sig8B32 || var_core_value_sig8B32.system === true || var_core_value_sig8B32.type === var_core_value_sig06E6.RecordId || var_core_value_sig8B32.id === var_core_value_sig278D || var_core_value_sig8B32.id === var_core_value_sigC0FE || (var_core_value_sig062A = var_core_value_sigFF9C.fieldSettings) != null && (var_core_value_sig062A = var_core_value_sig062A[var_core_value_sigE722]) != null && var_core_value_sig062A.hidden || (var_core_value_sig050A = var_core_value_sigE50A[var_core_value_sigE722]) != null && var_core_value_sig050A.hidden);
    }).sort((var_core_value_sig870F, var_core_value_sigB683) => {
      var var_core_value_sig26EC1, var_core_value_sigEEDB;
      return (((var_core_value_sig26EC1 = var_core_value_sigE50A[var_core_value_sig870F]) == null ? undefined : var_core_value_sig26EC1.order) ?? var_core_value_sig7A4B.indexOf(var_core_value_sig870F)) - (((var_core_value_sigEEDB = var_core_value_sigE50A[var_core_value_sigB683]) == null ? undefined : var_core_value_sigEEDB.order) ?? var_core_value_sig7A4B.indexOf(var_core_value_sigB683));
    });
  }
  _getKanbanConfiguredLanes(var_core_value_sigC8AC, var_core_value_sig8E63) {
    var var_core_value_sig300D;
    let var_core_value_sig520B = (Array.isArray((var_core_value_sig300D = var_core_value_sigC8AC.config) == null ? undefined : var_core_value_sig300D.options) ? var_core_value_sigC8AC.config['options'] : []).flatMap((var_core_value_sig36E7, var_core_value_sig6A78) => {
      if (var_core_value_sig36E7 == null) return [];
      let var_core_value_sigF7EF = typeof var_core_value_sig36E7 == 'string' ? {
          'id': var_core_value_sig36E7,
          'name': var_core_value_sig36E7,
          'color': undefined
        } : var_core_value_sig36E7,
        var_core_value_sig27F9 = String(var_core_value_sigF7EF.id ?? var_core_value_sigF7EF.name ?? "option-" + (var_core_value_sig6A78 + 1));
      return [{
        'key': var_core_value_sig27F9,
        'title': String(var_core_value_sigF7EF.name ?? var_core_value_sigF7EF.id ?? var_core_value_sig27F9),
        'color': this._kanbanLaneColor(var_core_value_sigC8AC, var_core_value_sig27F9, var_core_value_sig8E63)
      }];
    });
    return Object.entries(var_core_value_sig8E63.columnSettings ?? {}).forEach(([var_core_value_sig393E, var_core_value_sigB609]) => {
      var_core_value_sig520B.some(var_core_value_sig1758 => var_core_value_sig1758.key === var_core_value_sig393E) || var_core_value_sig520B.push({
        'key': var_core_value_sig393E,
        'title': this._isColorfulKanbanGroupField(var_core_value_sigC8AC) ? var_core_value_sigB609.title ?? this._kanbanLaneTitle(var_core_value_sigC8AC, var_core_value_sig393E, var_core_value_sig8E63) : this._kanbanLaneTitle(var_core_value_sigC8AC, var_core_value_sig393E, var_core_value_sig8E63),
        'color': this._kanbanLaneColor(var_core_value_sigC8AC, var_core_value_sig393E, var_core_value_sig8E63)
      });
    }), var_core_value_sig520B;
  }
  _kanbanGroupKeys(var_core_value_sigFE26, var_core_value_sig1019) {
    let var_core_value_sig32AB = var_core_value_sig390D => {
      var var_core_value_sigC928;
      let var_core_value_sig39B7 = var_core_value_sig390D == null ? '' : String(var_core_value_sig390D);
      return !var_core_value_sig39B7 || !this._isColorfulKanbanGroupField(var_core_value_sigFE26) ? var_core_value_sig39B7 : ((var_core_value_sigC928 = Ni(var_core_value_sigFE26, var_core_value_sig39B7)) == null ? undefined : var_core_value_sigC928.id) ?? var_core_value_sig39B7;
    };
    if (Array.isArray(var_core_value_sig1019)) {
      let var_core_value_sig18E0 = var_core_value_sig1019.map(var_core_value_sig32AB).filter(var_core_value_sig4805 => var_core_value_sig4805 !== '');
      return var_core_value_sig18E0.length ? var_core_value_sig18E0 : [''];
    }
    return [var_core_value_sig32AB(var_core_value_sig1019)];
  }
  _kanbanLaneTitle(var_core_value_sig72BE, var_core_value_sig3E4A, var_core_value_sig3171) {
    if (!var_core_value_sig3E4A) return "Uncategorized";
    let var_core_value_sigEBC4 = Ni(var_core_value_sig72BE, var_core_value_sig3E4A);
    return (var_core_value_sigEBC4 == null ? undefined : var_core_value_sigEBC4.name) ?? var_core_value_sig3E4A;
  }
  _kanbanLaneColor(var_core_value_sig788B, var_core_value_sig9A80, var_core_value_sig7C69) {
    var var_core_value_sig01EF;
    if (this._isColorfulKanbanGroupField(var_core_value_sig788B)) return (var_core_value_sig01EF = Ni(var_core_value_sig788B, var_core_value_sig9A80)) == null ? undefined : var_core_value_sig01EF.color;
  }
  _buildCalendar(var_core_value_sig3603, var_core_value_sigC163) {
    let var_core_value_sigF5F3 = this._normalizeCalendarConfig(var_core_value_sig3603, var_core_value_sigC163.config ?? {}),
      var_core_value_sig5E69 = var_core_value_sig3603.fields[var_core_value_sigF5F3.startDateFieldId];
    if (!var_core_value_sig5E69 || var_core_value_sig5E69.type !== var_core_value_sig06E6.Date || var_core_value_sig5E69.readonly === true || var_core_value_sig5E69.system === true || !this._capabilities(var_core_value_sig5E69).usableAsCalendarDate) return {
      'type': 'invalid',
      'viewType': var_core_value_sig29F7.Calendar,
      'reason': "invalidDateField",
      'fieldId': var_core_value_sigF5F3.startDateFieldId
    };
    let var_core_value_sig7B39 = var_core_value_sigF5F3.endDateFieldId ? var_core_value_sig3603.fields[var_core_value_sigF5F3.endDateFieldId] : undefined,
      var_core_value_sigDCAB = this._projectRows(var_core_value_sig3603, var_core_value_sigC163);
    return {
      'type': var_core_value_sig29F7.Calendar,
      'config': var_core_value_sigF5F3,
      'fields': this._projectFields(var_core_value_sig3603, var_core_value_sigC163),
      'rows': var_core_value_sigDCAB,
      'groups': this._projectGroups(var_core_value_sig3603, var_core_value_sigC163, var_core_value_sigDCAB),
      'events': var_core_value_sigDCAB.flatMap(var_core_value_sigE161 => {
        let var_core_value_sigBDEE = cn(var_core_value_sigE161.values[var_core_value_sigF5F3.startDateFieldId]);
        if (!Number.isFinite(var_core_value_sigBDEE)) return [];
        let var_core_value_sig1F40 = var_core_value_sigE161.values[var_core_value_sigF5F3.startDateFieldId],
          var_core_value_sig3FC7 = var_core_value_sigF5F3.endDateFieldId == null ? undefined : var_core_value_sigE161.values[var_core_value_sigF5F3.endDateFieldId],
          var_core_value_sig1E1B = var_core_value_sigF5F3.endDateFieldId == null ? undefined : cn(var_core_value_sig3FC7),
          var_core_value_sig3B10 = Number.isFinite(var_core_value_sig1E1B) ? var_core_value_sig1E1B : undefined;
        return [{
          'recordId': var_core_value_sigE161.recordId,
          'title': this._title(var_core_value_sig3603, var_core_value_sigE161, var_core_value_sigF5F3.titleFieldId),
          'start': var_core_value_sigBDEE,
          'end': var_core_value_sig3B10,
          'color': this._calendarEventColor(var_core_value_sig3603, var_core_value_sigE161, var_core_value_sigF5F3),
          'startMs': var_core_value_sigBDEE,
          'endMs': var_core_value_sig3B10,
          'allDay': this._isAllDayCalendarEvent(var_core_value_sig5E69, var_core_value_sig7B39, var_core_value_sig1F40, var_core_value_sig3FC7),
          'fieldValues': var_core_value_sigE161.values
        }];
      })
    };
  }
  _normalizeCalendarConfig(var_core_value_sigF569, var_core_value_sig2A9F) {
    let var_core_value_sigB14A = this._resolveCalendarDateFieldId(var_core_value_sigF569, var_core_value_sig2A9F.startDateFieldId),
      var_core_value_sig4401 = var_core_value_sig2A9F.endDateFieldId && this._isCalendarDateField(var_core_value_sigF569, var_core_value_sig2A9F.endDateFieldId) ? var_core_value_sig2A9F.endDateFieldId : this._findCalendarDateFieldId(var_core_value_sigF569, var_core_value_sigB14A) ?? undefined,
      var_core_value_sig4D6A = var_core_value_sig2A9F.titleFieldId ? var_core_value_sigF569.fields[var_core_value_sig2A9F.titleFieldId] : undefined,
      var_core_value_sigEF80 = var_core_value_sig4D6A && var_core_value_sig4D6A.system !== true && var_core_value_sig4D6A.type !== var_core_value_sig06E6.RecordId ? var_core_value_sig2A9F.titleFieldId : var_core_value_sigF569.primaryFieldId,
      var_core_value_sig526D1 = var_core_value_sig2A9F.mode === "day" || var_core_value_sig2A9F.mode === 'week' ? var_core_value_sig2A9F.mode : 'month',
      var_core_value_sigD78B = var_core_value_sig2A9F.timeslotSize === "short" || var_core_value_sig2A9F.timeslotSize === "long" ? var_core_value_sig2A9F.timeslotSize : "medium",
      var_core_value_sigCB8C = typeof var_core_value_sig2A9F.timeZone == 'string' && var_core_value_sig2A9F.timeZone['trim']() ? var_core_value_sig2A9F.timeZone : "local",
      var_core_value_sigD217 = this._normalizeCalendarDisplayColor(var_core_value_sigF569, var_core_value_sig2A9F);
    return {
      ...var_core_value_sig2A9F,
      'startDateFieldId': var_core_value_sigB14A,
      'endDateFieldId': var_core_value_sig4401,
      'titleFieldId': var_core_value_sigEF80,
      'mode': var_core_value_sig526D1,
      'timeslotSize': var_core_value_sigD78B,
      'timeZone': var_core_value_sigCB8C,
      'displayColor': var_core_value_sigD217,
      'fieldSettings': Object.fromEntries(Object.entries(var_core_value_sig2A9F.fieldSettings ?? {}).filter(([var_core_value_sig89E6]) => {
        let var_core_value_sig4743 = var_core_value_sigF569.fields[var_core_value_sig89E6];
        return !!(var_core_value_sig4743 && var_core_value_sig4743.system !== true && var_core_value_sig4743.type !== var_core_value_sig06E6.RecordId);
      }))
    };
  }
  _resolveCalendarDateFieldId(var_core_value_sigEB0F, var_core_value_sigDC44) {
    return var_core_value_sigDC44 && this._isCalendarDateField(var_core_value_sigEB0F, var_core_value_sigDC44) ? var_core_value_sigDC44 : this._findCalendarDateFieldId(var_core_value_sigEB0F) ?? var_core_value_sigDC44 ?? '';
  }
  _findCalendarDateFieldId(var_core_value_sigDEFC, var_core_value_sigE842) {
    for (let var_core_value_sigEB6A of var_core_value_sigDEFC.fieldOrder) if (var_core_value_sigEB6A !== var_core_value_sigE842 && this._isCalendarDateField(var_core_value_sigDEFC, var_core_value_sigEB6A)) return var_core_value_sigEB6A;
    return null;
  }
  _isCalendarDateField(var_core_value_sigA77A, var_core_value_sig0701) {
    let var_core_value_sig5DCA = var_core_value_sigA77A.fields[var_core_value_sig0701];
    return !!var_core_value_sig5DCA && var_core_value_sig5DCA.type === var_core_value_sig06E6.Date && var_core_value_sig5DCA.readonly !== true && var_core_value_sig5DCA.system !== true && this._capabilities(var_core_value_sig5DCA).usableAsCalendarDate;
  }
  _normalizeCalendarDisplayColor(var_core_value_sigF1AB, var_core_value_sig902F) {
    let var_core_value_sig6BD7 = var_core_value_sig902F.displayColor;
    if ((var_core_value_sig6BD7 == null ? undefined : var_core_value_sig6BD7.type) === 'selectField') {
      let var_core_value_sig3D46 = var_core_value_sigF1AB.fields[var_core_value_sig6BD7.fieldId];
      if (var_core_value_sig3D46 && var_core_value_sig3D46.type === var_core_value_sig06E6.SingleSelect) return var_core_value_sig6BD7;
    }
    if ((var_core_value_sig6BD7 == null ? undefined : var_core_value_sig6BD7.type) === 'custom' && typeof var_core_value_sig6BD7.color == "string" && var_core_value_sig6BD7.color["trim"]()) return {
      'type': "custom",
      'color': var_core_value_sig6BD7.color
    };
    if (var_core_value_sig902F.colorFieldId) {
      let var_core_value_sigCC93 = var_core_value_sigF1AB.fields[var_core_value_sig902F.colorFieldId];
      if (var_core_value_sigCC93 && var_core_value_sigCC93.type === var_core_value_sig06E6.SingleSelect) return {
        'type': "selectField",
        'fieldId': var_core_value_sig902F.colorFieldId
      };
    }
    return {
      'type': "custom",
      'color': "#3b82f6"
    };
  }
  _calendarEventColor(var_core_value_sig63E0, var_core_value_sig1B87, var_core_value_sig580B) {
    let var_core_value_sig4836 = var_core_value_sig580B.displayColor;
    if ((var_core_value_sig4836 == null ? undefined : var_core_value_sig4836.type) === "selectField") {
      var var_core_value_sig4C06;
      let var_core_value_sig5964 = var_core_value_sig63E0.fields[var_core_value_sig4836.fieldId];
      if (!var_core_value_sig5964) return;
      let var_core_value_sig808B = var_core_value_sig1B87.values[var_core_value_sig4836.fieldId],
        var_core_value_sig2A26 = Array.isArray(var_core_value_sig808B) ? var_core_value_sig808B[0] : var_core_value_sig808B;
      return var_core_value_sig2A26 == null || (var_core_value_sig4C06 = Ni(var_core_value_sig5964, String(var_core_value_sig2A26))) == null ? undefined : var_core_value_sig4C06.color;
    }
    if ((var_core_value_sig4836 == null ? undefined : var_core_value_sig4836.type) === "custom") return var_core_value_sig4836.color;
  }
  _isAllDayCalendarEvent(var_core_value_sig4D56, var_core_value_sig7C26, var_core_value_sigBC59, var_core_value_sig544E) {
    var var_core_value_sigCE8A, var_core_value_sig0718;
    let var_core_value_sig1B22 = ((var_core_value_sigCE8A = var_core_value_sig4D56.config) == null ? undefined : var_core_value_sigCE8A.includeTime) === true,
      var_core_value_sig8854 = (var_core_value_sig7C26 == null || (var_core_value_sig0718 = var_core_value_sig7C26.config) == null ? undefined : var_core_value_sig0718.includeTime) === true;
    return !var_core_value_sig1B22 && !var_core_value_sig8854;
  }
  _isAllDayGanttDateRange(var_core_value_sig5275, var_core_value_sig4F9D) {
    var var_core_value_sig278E, var_core_value_sig2921;
    let var_core_value_sig3959 = ((var_core_value_sig278E = var_core_value_sig5275.config) == null ? undefined : var_core_value_sig278E.includeTime) === true,
      var_core_value_sig926F = ((var_core_value_sig2921 = var_core_value_sig4F9D.config) == null ? undefined : var_core_value_sig2921.includeTime) === true;
    return !var_core_value_sig3959 && !var_core_value_sig926F;
  }
  _buildGantt(var_core_value_sig9414, var_core_value_sig32E7) {
    let var_core_value_sigD8C3 = this._normalizeGanttConfig(var_core_value_sig9414, var_core_value_sig32E7.config),
      var_core_value_sig3A441 = var_core_value_sig9414.fields[var_core_value_sigD8C3.startDateFieldId];
    if (!var_core_value_sig3A441 || var_core_value_sig3A441.type !== var_core_value_sig06E6.Date || var_core_value_sig3A441.readonly === true || var_core_value_sig3A441.system === true || !this._capabilities(var_core_value_sig3A441).usableAsGanttStart) return {
      'type': 'invalid',
      'viewType': var_core_value_sig29F7.Gantt,
      'reason': "invalidGanttStartField",
      'fieldId': var_core_value_sigD8C3.startDateFieldId
    };
    let var_core_value_sig0642 = var_core_value_sig9414.fields[var_core_value_sigD8C3.endDateFieldId];
    if (!var_core_value_sig0642 || var_core_value_sig0642.type !== var_core_value_sig06E6.Date || var_core_value_sig0642.readonly === true || var_core_value_sig0642.system === true || !this._capabilities(var_core_value_sig0642).usableAsGanttEnd) return {
      'type': "invalid",
      'viewType': var_core_value_sig29F7.Gantt,
      'reason': 'invalidGanttEndField',
      'fieldId': var_core_value_sigD8C3.endDateFieldId
    };
    let var_core_value_sig786E = this._isAllDayGanttDateRange(var_core_value_sig3A441, var_core_value_sig0642),
      var_core_value_sigFC47 = this._projectRows(var_core_value_sig9414, var_core_value_sig32E7),
      var_core_value_sig48E2 = var_core_value_sigFC47.flatMap(var_core_value_sig1179 => {
        let var_core_value_sigEA92 = cn(var_core_value_sig1179.values[var_core_value_sigD8C3.startDateFieldId]),
          var_core_value_sig8FD9 = cn(var_core_value_sig1179.values[var_core_value_sigD8C3.endDateFieldId]);
        if (!Number.isFinite(var_core_value_sigEA92) || !Number.isFinite(var_core_value_sig8FD9)) return [];
        let var_core_value_sig1AE5 = Math.min(var_core_value_sigEA92, var_core_value_sig8FD9),
          var_core_value_sig7100 = Math.max(var_core_value_sigEA92, var_core_value_sig8FD9),
          var_core_value_sigA19A = var_core_value_sigD8C3.progressFieldId == null ? undefined : Number(var_core_value_sig1179.values[var_core_value_sigD8C3.progressFieldId]);
        return [{
          'recordId': var_core_value_sig1179.recordId,
          'title': this._title(var_core_value_sig9414, var_core_value_sig1179, var_core_value_sigD8C3.titleFieldId),
          'start': var_core_value_sig1AE5,
          'end': var_core_value_sig7100,
          'color': this._ganttBarColor(var_core_value_sig9414, var_core_value_sig1179, var_core_value_sigD8C3),
          'progress': Number.isFinite(var_core_value_sigA19A) ? var_core_value_sigA19A : undefined,
          'workingDayCount': var_core_value_sigD8C3.workingDaysOnly ? xi(var_core_value_sig1AE5, var_core_value_sig7100, var_core_value_sigD8C3.workingDays) : undefined,
          'dependencyRecordIds': this._recordIds(var_core_value_sig1179.values[var_core_value_sigD8C3.dependencyFieldId ?? ''])
        }];
      }),
      var_core_value_sig2FCA = var_core_value_sig48E2.length ? Z(Math.min(...var_core_value_sig48E2.map(var_core_value_sigD3F5 => var_core_value_sigD3F5.start)) - 90 * ni) : Z(Date.now() - 90 * ni),
      var_core_value_sig04F2 = var_core_value_sig48E2.length ? Z(Math.max(...var_core_value_sig48E2.map(var_core_value_sig3082 => var_core_value_sig3082.end)) + 91 * ni) : Z(Date.now() + 91 * ni),
      var_core_value_sig2CFC = pi(var_core_value_sigD8C3.scale, var_core_value_sig2FCA, var_core_value_sig04F2, var_core_value_sigD8C3.workingDaysOnly ? var_core_value_sigD8C3.workingDays : undefined);
    return {
      'type': var_core_value_sig29F7.Gantt,
      'fields': this._projectFields(var_core_value_sig9414, {
        ...var_core_value_sig32E7,
        'config': var_core_value_sigD8C3
      }),
      'rows': var_core_value_sigFC47,
      'groups': this._projectGroups(var_core_value_sig9414, var_core_value_sig32E7, var_core_value_sigFC47),
      'config': var_core_value_sigD8C3,
      'dateRangeAllDay': var_core_value_sig786E,
      'timeline': {
        'scale': var_core_value_sigD8C3.scale,
        'start': var_core_value_sig2FCA,
        'end': var_core_value_sig04F2,
        'unitWidth': var_core_value_sig2CFC.unitWidth,
        'majorHeaders': var_core_value_sig2CFC.majorHeaders,
        'columns': var_core_value_sig2CFC.columns
      },
      'bars': var_core_value_sig48E2
    };
  }
  _normalizeGanttConfig(var_core_value_sig5CEB, var_core_value_sig4935) {
    let var_core_value_sig1832 = this._resolveGanttDateFieldId(var_core_value_sig5CEB, var_core_value_sig4935.startDateFieldId, "start"),
      var_core_value_sig79D7 = this._resolveGanttDateFieldId(var_core_value_sig5CEB, var_core_value_sig4935.endDateFieldId, "end") || var_core_value_sig1832,
      var_core_value_sig5E01 = var_core_value_sig4935.titleFieldId ? var_core_value_sig5CEB.fields[var_core_value_sig4935.titleFieldId] : undefined,
      var_core_value_sigBBE4 = var_core_value_sig5E01 && var_core_value_sig5E01.system !== true && var_core_value_sig5E01.type !== var_core_value_sig06E6.RecordId ? var_core_value_sig4935.titleFieldId : var_core_value_sig5CEB.primaryFieldId,
      var_core_value_sig96B3 = var_core_value_sig4935.scale === 'week' || var_core_value_sig4935.scale === "quarter" || var_core_value_sig4935.scale === "year" ? var_core_value_sig4935.scale : "month",
      var_core_value_sig9CF2 = fi(var_core_value_sig4935.workingDays);
    return {
      ...var_core_value_sig4935,
      'startDateFieldId': var_core_value_sig1832,
      'endDateFieldId': var_core_value_sig79D7,
      'titleFieldId': var_core_value_sigBBE4,
      'scale': var_core_value_sig96B3,
      'leftPaneWidth': typeof var_core_value_sig4935.leftPaneWidth == 'number' ? var_core_value_sig4935.leftPaneWidth : undefined,
      'leftPaneCollapsed': var_core_value_sig4935.leftPaneCollapsed === true,
      'showTodayLine': var_core_value_sig4935.showTodayLine !== false,
      'displayColor': this._normalizeGanttDisplayColor(var_core_value_sig5CEB, var_core_value_sig4935),
      'fieldSettings': Object.fromEntries(Object.entries(var_core_value_sig4935.fieldSettings ?? {}).filter(([var_core_value_sigF5D1]) => {
        let var_core_value_sig8775 = var_core_value_sig5CEB.fields[var_core_value_sigF5D1];
        return !!(var_core_value_sig8775 && var_core_value_sig8775.system !== true && var_core_value_sig8775.type !== var_core_value_sig06E6.RecordId);
      })),
      'workingDaysOnly': var_core_value_sig4935.workingDaysOnly === true,
      'workingDays': var_core_value_sig9CF2
    };
  }
  _resolveGanttDateFieldId(var_core_value_sig666D, var_core_value_sigBD53, var_core_value_sigD11F) {
    if (var_core_value_sigBD53 && this._isGanttDateField(var_core_value_sig666D, var_core_value_sigBD53, var_core_value_sigD11F) || var_core_value_sigBD53) return var_core_value_sigBD53;
    for (let var_core_value_sig481B of var_core_value_sig666D.fieldOrder) if (this._isGanttDateField(var_core_value_sig666D, var_core_value_sig481B, var_core_value_sigD11F)) return var_core_value_sig481B;
    return var_core_value_sigBD53 ?? '';
  }
  _isGanttDateField(var_core_value_sig62231, var_core_value_sig7653, var_core_value_sigF65B) {
    let var_core_value_sig4A94 = var_core_value_sig62231.fields[var_core_value_sig7653];
    if (!var_core_value_sig4A94 || var_core_value_sig4A94.type !== var_core_value_sig06E6.Date || var_core_value_sig4A94.readonly === true || var_core_value_sig4A94.system === true) return false;
    let var_core_value_sigEB59 = this._capabilities(var_core_value_sig4A94);
    return var_core_value_sigF65B === "start" ? var_core_value_sigEB59.usableAsGanttStart : var_core_value_sigEB59.usableAsGanttEnd;
  }
  _normalizeGanttDisplayColor(var_core_value_sigD9B0, var_core_value_sigB7D6) {
    let var_core_value_sigCF1F = var_core_value_sigB7D6.displayColor;
    if ((var_core_value_sigCF1F == null ? undefined : var_core_value_sigCF1F.type) === "selectField") {
      let var_core_value_sig13D7 = var_core_value_sigD9B0.fields[var_core_value_sigCF1F.fieldId];
      if (var_core_value_sig13D7 && var_core_value_sig13D7.type === var_core_value_sig06E6.SingleSelect) return var_core_value_sigCF1F;
    }
    return (var_core_value_sigCF1F == null ? undefined : var_core_value_sigCF1F.type) === "conditional" && Array.isArray(var_core_value_sigCF1F.rules) ? {
      'type': "conditional",
      'rules': var_core_value_sigCF1F.rules["filter"](var_core_value_sig90C0 => !!var_core_value_sigD9B0.fields[var_core_value_sig90C0.fieldId])
    } : (var_core_value_sigCF1F == null ? undefined : var_core_value_sigCF1F.type) === "custom" && typeof var_core_value_sigCF1F.color == "string" && var_core_value_sigCF1F.color["trim"]() ? {
      'type': "custom",
      'color': var_core_value_sigCF1F.color
    } : {
      'type': "custom",
      'color': "#14b8a6"
    };
  }
  _ganttBarColor(var_core_value_sig4DD1, var_core_value_sig1293, var_core_value_sigC999) {
    let var_core_value_sig9D8F = var_core_value_sigC999.displayColor;
    if ((var_core_value_sig9D8F == null ? undefined : var_core_value_sig9D8F.type) === "conditional") {
      let var_core_value_sigF1B2 = var_core_value_sig9D8F.rules["find"](var_core_value_sigE67E => this._matchesGanttColorRule(var_core_value_sig4DD1, var_core_value_sig1293, var_core_value_sigE67E));
      if (var_core_value_sigF1B2) return var_core_value_sigF1B2.color;
    }
    if ((var_core_value_sig9D8F == null ? undefined : var_core_value_sig9D8F.type) === "selectField") {
      let var_core_value_sigC2BB = var_core_value_sig4DD1.fields[var_core_value_sig9D8F.fieldId];
      if (var_core_value_sigC2BB) {
        var var_core_value_sig8270;
        let var_core_value_sig2902 = var_core_value_sig1293.values[var_core_value_sig9D8F.fieldId],
          var_core_value_sig9989 = Array.isArray(var_core_value_sig2902) ? var_core_value_sig2902[0] : var_core_value_sig2902,
          var_core_value_sig698E = var_core_value_sig9989 == null || (var_core_value_sig8270 = Ni(var_core_value_sigC2BB, String(var_core_value_sig9989))) == null ? undefined : var_core_value_sig8270.color;
        if (var_core_value_sig698E) return var_core_value_sig698E;
      }
    }
    return (var_core_value_sig9D8F == null ? undefined : var_core_value_sig9D8F.type) === 'custom' ? var_core_value_sig9D8F.color : '#14b8a6';
  }
  _matchesGanttColorRule(var_core_value_sig95D9, var_core_value_sig0E92, var_core_value_sig45CD) {
    let var_core_value_sigAD84 = var_core_value_sig95D9.fields[var_core_value_sig45CD.fieldId];
    return var_core_value_sigAD84 ? vn(var_core_value_sig0E92.values[var_core_value_sigAD84.id], var_core_value_sig45CD.operator, var_core_value_sig45CD.operand, var_core_value_sigAD84, {
      'dateMode': var_core_value_sig45CD.dateMode
    }) : false;
  }
  _buildGallery(var_core_value_sigD513, var_core_value_sig36BD) {
    let var_core_value_sig0413 = this._projectRows(var_core_value_sigD513, var_core_value_sig36BD),
      var_core_value_sig15B6 = this._normalizeGalleryConfig(var_core_value_sigD513, var_core_value_sig36BD.config ?? {}),
      var_core_value_sigFEBF = this._projectFields(var_core_value_sigD513, var_core_value_sig36BD);
    return {
      'type': var_core_value_sig29F7.Gallery,
      'fields': var_core_value_sigFEBF,
      'rows': var_core_value_sig0413,
      'groups': this._projectGroups(var_core_value_sigD513, var_core_value_sig36BD, var_core_value_sig0413),
      'titleFieldId': var_core_value_sig15B6.card["titleFieldId"],
      'coverFieldId': var_core_value_sig15B6.coverFieldId,
      'cardLayout': var_core_value_sig15B6.cardLayout ?? "normal",
      'showFieldNames': var_core_value_sig15B6.showFieldNames !== false,
      'visibleCardFieldIds': this._resolveGalleryCardFieldIds(var_core_value_sigD513, var_core_value_sig36BD, var_core_value_sig15B6),
      'cardSize': var_core_value_sig15B6.cardSize ?? "medium",
      'cards': var_core_value_sig0413.map(var_core_value_sigD9DB => ({
        'recordId': var_core_value_sigD9DB.recordId,
        'title': this._title(var_core_value_sigD513, var_core_value_sigD9DB, var_core_value_sig15B6.card["titleFieldId"]),
        'values': var_core_value_sigD9DB.values
      }))
    };
  }
  _normalizeGalleryConfig(var_core_value_sigBBA2, var_core_value_sigC9A1) {
    let var_core_value_sigE469 = var_core_value_sigC9A1.card ?? {
        'fieldIds': []
      },
      var_core_value_sigA499 = this._resolveCardTitleFieldId(var_core_value_sigBBA2, var_core_value_sigE469.titleFieldId),
      var_core_value_sig4CC3 = this._resolveGalleryCoverFieldId(var_core_value_sigBBA2, var_core_value_sigC9A1),
      var_core_value_sig70B3 = var_core_value_sigC9A1.cardSize === "small" || var_core_value_sigC9A1.cardSize === "large" ? var_core_value_sigC9A1.cardSize : 'medium';
    return {
      ...var_core_value_sigC9A1,
      'coverFieldId': var_core_value_sig4CC3,
      'cardLayout': var_core_value_sigC9A1.cardLayout === "compose" ? "compose" : "normal",
      'showFieldNames': var_core_value_sigC9A1.showFieldNames !== false,
      'fieldSettings': Object.fromEntries(Object.entries(var_core_value_sigC9A1.fieldSettings ?? {}).filter(([var_core_value_sigA363]) => {
        let var_core_value_sigFBA5 = var_core_value_sigBBA2.fields[var_core_value_sigA363];
        return !!(var_core_value_sigFBA5 && var_core_value_sigFBA5.system !== true && var_core_value_sigFBA5.type !== var_core_value_sig06E6.RecordId);
      })),
      'card': {
        ...var_core_value_sigE469,
        'titleFieldId': var_core_value_sigA499,
        'coverFieldId': var_core_value_sig4CC3,
        'fieldIds': Array.isArray(var_core_value_sigE469.fieldIds) ? var_core_value_sigE469.fieldIds : []
      },
      'cardSize': var_core_value_sig70B3
    };
  }
  _resolveCardTitleFieldId(var_core_value_sig422B, var_core_value_sig1038) {
    let var_core_value_sigC3E6 = var_core_value_sig1038 ? var_core_value_sig422B.fields[var_core_value_sig1038] : undefined;
    return var_core_value_sigC3E6 && var_core_value_sigC3E6.system !== true && var_core_value_sigC3E6.type !== var_core_value_sig06E6.RecordId ? var_core_value_sigC3E6.id : qr(var_core_value_sig422B);
  }
  _resolveGalleryCoverFieldId(var_core_value_sig3710, var_core_value_sig9726) {
    var var_core_value_sigFC9B;
    let var_core_value_sig943E = var_core_value_sig9726.coverFieldId ?? ((var_core_value_sigFC9B = var_core_value_sig9726.card) == null ? undefined : var_core_value_sigFC9B.coverFieldId) ?? null;
    if (!var_core_value_sig943E) return null;
    let var_core_value_sigEF36 = var_core_value_sig3710.fields[var_core_value_sig943E];
    return var_core_value_sigEF36 && this._capabilities(var_core_value_sigEF36).usableAsCardCover ? var_core_value_sigEF36.id : null;
  }
  _resolveGalleryCardFieldIds(var_core_value_sigD4B1, var_core_value_sigE5D8, var_core_value_sig74AF) {
    var var_core_value_sigBABA, var_core_value_sigA723, var_core_value_sig991C;
    let var_core_value_sigF909 = var_core_value_sig74AF.fieldSettings ?? {},
      var_core_value_sigDD0E = ((var_core_value_sigBABA = var_core_value_sig74AF.card) == null ? undefined : var_core_value_sigBABA.titleFieldId) ?? qr(var_core_value_sigD4B1),
      var_core_value_sigF2A0 = var_core_value_sig74AF.coverFieldId ?? ((var_core_value_sigA723 = var_core_value_sig74AF.card) == null ? undefined : var_core_value_sigA723.coverFieldId) ?? null,
      var_core_value_sig116F = (var_core_value_sig991C = var_core_value_sig74AF.card) != null && (var_core_value_sig991C = var_core_value_sig991C.fieldIds) != null && var_core_value_sig991C.length ? var_core_value_sig74AF.card['fieldIds'] : Jr(var_core_value_sigD4B1, [var_core_value_sigDD0E, var_core_value_sigF2A0, var_core_value_sigD4B1.primaryFieldId]);
    return var_core_value_sig116F.filter(var_core_value_sigAC47 => {
      var var_core_value_sigA06F, var_core_value_sig770E;
      let var_core_value_sig4654 = var_core_value_sigD4B1.fields[var_core_value_sigAC47];
      return !(!var_core_value_sig4654 || var_core_value_sig4654.system === true || var_core_value_sig4654.type === var_core_value_sig06E6.RecordId || var_core_value_sig4654.id === var_core_value_sigDD0E || var_core_value_sig4654.id === var_core_value_sigF2A0 || (var_core_value_sigA06F = var_core_value_sigE5D8.fieldSettings) != null && (var_core_value_sigA06F = var_core_value_sigA06F[var_core_value_sigAC47]) != null && var_core_value_sigA06F.hidden || (var_core_value_sig770E = var_core_value_sigF909[var_core_value_sigAC47]) != null && var_core_value_sig770E.hidden);
    }).sort((var_core_value_sigB26B, var_core_value_sig019B) => {
      var var_core_value_sigC6BC, var_core_value_sig8EC2;
      return (((var_core_value_sigC6BC = var_core_value_sigF909[var_core_value_sigB26B]) == null ? undefined : var_core_value_sigC6BC.order) ?? var_core_value_sig116F.indexOf(var_core_value_sigB26B)) - (((var_core_value_sig8EC2 = var_core_value_sigF909[var_core_value_sig019B]) == null ? undefined : var_core_value_sig8EC2.order) ?? var_core_value_sig116F.indexOf(var_core_value_sig019B));
    });
  }
  _projectFields(var_core_value_sigA64C, var_core_value_sigAF94) {
    var var_core_value_sig1E9F;
    return ((var_core_value_sig1E9F = var_core_value_sigAF94.fieldOrder) != null && var_core_value_sig1E9F.length ? var_core_value_sigAF94.fieldOrder : var_core_value_sigA64C.fieldOrder).flatMap(var_core_value_sigA8C3 => {
      var var_core_value_sig5276;
      let var_core_value_sig031B = var_core_value_sigA64C.fields[var_core_value_sigA8C3],
        var_core_value_sig9DC0 = ((var_core_value_sig5276 = var_core_value_sigAF94.fieldSettings) == null ? undefined : var_core_value_sig5276[var_core_value_sigA8C3]) ?? {};
      return !var_core_value_sig031B || var_core_value_sig031B.system === true || var_core_value_sig031B.type === var_core_value_sig06E6.RecordId || var_core_value_sig9DC0.hidden ? [] : [{
        'id': var_core_value_sig031B.id,
        'name': var_core_value_sig031B.name,
        'description': var_core_value_sig031B.description,
        'type': var_core_value_sig031B.type,
        'config': var_core_value_sig031B.config,
        'width': var_core_value_sig9DC0.width,
        'setting': var_core_value_sig9DC0
      }];
    });
  }
  _projectRows(var_core_value_sig3CC6, var_core_value_sig041B) {
    var var_core_value_sig3610;
    return F("BaseProjection.projectRows", () => {
      var var_core_value_sig95F0, var_core_value_sig9CCB;
      let var_core_value_sigE718 = this._projectTableRows(var_core_value_sig3CC6),
        var_core_value_sigAEC8 = this._viewRowsCacheKey(var_core_value_sig3CC6.id, var_core_value_sig041B),
        var_core_value_sigB977 = this._getCellRevision(var_core_value_sig3CC6.id),
        var_core_value_sig2949 = this._projectedViewRowsCache["get"](var_core_value_sigAEC8);
      if (var_core_value_sig2949 && var_core_value_sig2949.globalRevision === this._globalRevision && var_core_value_sig2949.tableRevision === this._getTableRevision(var_core_value_sig3CC6.id)) {
        if (var_core_value_sig2949.cellRevision === var_core_value_sigB977 && var_core_value_sig2949.baseRows === var_core_value_sigE718) return var_core_value_sig2949.rows;
        if (var_core_value_sig2949.cellRevision !== var_core_value_sigB977 && !this._cellInvalidationsTouchFields(var_core_value_sig3CC6.id, var_core_value_sig2949.cellRevision, var_core_value_sigB977, this._filterSortFieldIds(var_core_value_sig041B))) {
          let var_core_value_sig0D69 = var_core_value_sig2949.rows === var_core_value_sig2949.baseRows ? var_core_value_sigE718 : this._patchCachedProjectedRows(var_core_value_sig2949.rows, var_core_value_sigE718);
          if (var_core_value_sig0D69) return this._projectedViewRowsCache["set"](var_core_value_sigAEC8, {
            ...var_core_value_sig2949,
            'rows': var_core_value_sig0D69,
            'baseRows': var_core_value_sigE718,
            'cellRevision': var_core_value_sigB977
          }), var_core_value_sig0D69;
        }
      }
      let var_core_value_sig308A = F("BaseProjection.filterAndSortRows", () => this._sortRows(var_core_value_sig3CC6, var_core_value_sig041B, this._filterRows(var_core_value_sig3CC6, var_core_value_sig041B, var_core_value_sigE718)), {
        'tableId': var_core_value_sig3CC6.id,
        'viewId': var_core_value_sig041B == null ? undefined : var_core_value_sig041B.id,
        'viewType': var_core_value_sig041B == null ? undefined : var_core_value_sig041B.type,
        'rows': var_core_value_sigE718.length,
        'filters': (var_core_value_sig041B == null || (var_core_value_sig95F0 = var_core_value_sig041B.filter) == null ? undefined : var_core_value_sig95F0.conditions['length']) ?? 0,
        'sorts': (var_core_value_sig041B == null || (var_core_value_sig9CCB = var_core_value_sig041B.sort) == null ? undefined : var_core_value_sig9CCB.length) ?? 0
      });
      return this._projectedViewRowsCache["set"](var_core_value_sigAEC8, {
        'table': var_core_value_sig3CC6,
        'rows': var_core_value_sig308A,
        'baseRows': var_core_value_sigE718,
        'globalRevision': this._globalRevision,
        'tableRevision': this._getTableRevision(var_core_value_sig3CC6.id),
        'cellRevision': var_core_value_sigB977
      }), var_core_value_sig308A;
    }, {
      'tableId': var_core_value_sig3CC6.id,
      'viewId': var_core_value_sig041B == null ? undefined : var_core_value_sig041B.id,
      'viewType': var_core_value_sig041B == null ? undefined : var_core_value_sig041B.type,
      'records': ((var_core_value_sig3610 = var_core_value_sig3CC6.recordOrder) == null ? undefined : var_core_value_sig3610.length) ?? Object.keys(var_core_value_sig3CC6.records ?? {}).length
    });
  }
  _projectTableRows(var_core_value_sig62F3) {
    var var_core_value_sig8063;
    return F('BaseProjection.projectTableRows', () => {
      var var_core_value_sig528D;
      let var_core_value_sigA309 = this._getCellRevision(var_core_value_sig62F3.id),
        var_core_value_sig9E20 = this._projectedRowsCache['get'](var_core_value_sig62F3.id);
      if (var_core_value_sig9E20 && var_core_value_sig9E20.globalRevision === this._globalRevision && var_core_value_sig9E20.tableRevision === this._getTableRevision(var_core_value_sig62F3.id)) {
        if (var_core_value_sig9E20.cellRevision === var_core_value_sigA309 && ci(var_core_value_sig9E20.table, var_core_value_sig62F3)) return var_core_value_sig9E20.table = var_core_value_sig62F3, var_core_value_sig9E20.rows;
        let var_core_value_sig2809 = this._patchProjectedRowsForCellInvalidations(var_core_value_sig62F3, var_core_value_sig9E20, var_core_value_sigA309);
        if (var_core_value_sig2809) return var_core_value_sig2809;
      }
      oi(var_core_value_sig62F3) || I(var_core_value_sig62F3);
      let var_core_value_sig26BB = (var_core_value_sig528D = var_core_value_sig62F3.recordOrder) != null && var_core_value_sig528D.length ? var_core_value_sig62F3.recordOrder : di(var_core_value_sig62F3.records),
        var_core_value_sig19B4 = F('BaseProjection.materializeTableRows', () => {
          let var_core_value_sig2DAB = [];
          for (let var_core_value_sig480E of var_core_value_sig26BB) {
            let var_core_value_sig4D4C = var_core_value_sig62F3.records[var_core_value_sig480E];
            if (!var_core_value_sig4D4C) continue;
            let var_core_value_sigC9E0 = {};
            for (let var_core_value_sig7524 of var_core_value_sig62F3.fieldOrder) var_core_value_sigC9E0[var_core_value_sig7524] = gt(var_core_value_sig62F3, var_core_value_sig4D4C.id, var_core_value_sig7524);
            var_core_value_sig2DAB.push({
              'recordId': var_core_value_sig4D4C.id,
              'values': var_core_value_sigC9E0
            });
          }
          return var_core_value_sig2DAB;
        }, {
          'tableId': var_core_value_sig62F3.id,
          'records': var_core_value_sig26BB.length,
          'fields': var_core_value_sig62F3.fieldOrder['length']
        });
      return this._projectedRowsCache["set"](var_core_value_sig62F3.id, {
        'table': var_core_value_sig62F3,
        'rows': var_core_value_sig19B4,
        'rowIndexById': ai(var_core_value_sig19B4),
        'globalRevision': this._globalRevision,
        'tableRevision': this._getTableRevision(var_core_value_sig62F3.id),
        'cellRevision': var_core_value_sigA309
      }), var_core_value_sig19B4;
    }, {
      'tableId': var_core_value_sig62F3.id,
      'records': ((var_core_value_sig8063 = var_core_value_sig62F3.recordOrder) == null ? undefined : var_core_value_sig8063.length) ?? Object.keys(var_core_value_sig62F3.records ?? {}).length,
      'fields': var_core_value_sig62F3.fieldOrder['length']
    });
  }
  _patchProjectedRowsForCellInvalidations(var_core_value_sig555A, var_core_value_sigF562, var_core_value_sig5913) {
    let var_core_value_sigA1AF = (this._cellInvalidations["get"](var_core_value_sig555A.id) ?? []).filter(var_core_value_sig218A => var_core_value_sig218A.revision > var_core_value_sigF562.cellRevision && var_core_value_sig218A.revision <= var_core_value_sig5913);
    if (!var_core_value_sigA1AF.length) return var_core_value_sigF562.table === var_core_value_sig555A ? var_core_value_sigF562.rows : null;
    let var_core_value_sig6324 = var_core_value_sigF562.rows,
      var_core_value_sig7EE4 = new Map();
    for (let var_core_value_sig14CB of var_core_value_sigA1AF) {
      let var_core_value_sig877E = var_core_value_sig7EE4.get(var_core_value_sig14CB.recordId);
      var_core_value_sig877E || (var_core_value_sig877E = new Set(), var_core_value_sig7EE4.set(var_core_value_sig14CB.recordId, var_core_value_sig877E)), var_core_value_sig877E.add(var_core_value_sig14CB.fieldId);
    }
    for (let [var_core_value_sigFDEE, var_core_value_sigA676] of var_core_value_sig7EE4) {
      if (!var_core_value_sig555A.records[var_core_value_sigFDEE]) return null;
      let var_core_value_sig20C8 = var_core_value_sigF562.rowIndexById['get'](var_core_value_sigFDEE);
      if (var_core_value_sig20C8 == null) return null;
      var_core_value_sig6324 === var_core_value_sigF562.rows && (var_core_value_sig6324 = [...var_core_value_sigF562.rows]);
      let var_core_value_sigE9A7 = var_core_value_sig6324[var_core_value_sig20C8],
        var_core_value_sigBECE = {
          ...var_core_value_sigE9A7.values
        };
      var_core_value_sigA676.forEach(var_core_value_sig26DB => {
        var_core_value_sigBECE[var_core_value_sig26DB] = gt(var_core_value_sig555A, var_core_value_sigFDEE, var_core_value_sig26DB);
      }), var_core_value_sig6324[var_core_value_sig20C8] = {
        ...var_core_value_sigE9A7,
        'values': var_core_value_sigBECE
      };
    }
    let var_core_value_sigE3D7 = {
      'table': var_core_value_sig555A,
      'rows': var_core_value_sig6324,
      'rowIndexById': var_core_value_sigF562.rowIndexById,
      'globalRevision': this._globalRevision,
      'tableRevision': this._getTableRevision(var_core_value_sig555A.id),
      'cellRevision': var_core_value_sig5913
    };
    return this._projectedRowsCache["set"](var_core_value_sig555A.id, var_core_value_sigE3D7), this._cellInvalidations['set'](var_core_value_sig555A.id, (this._cellInvalidations['get'](var_core_value_sig555A.id) ?? []).filter(var_core_value_sigC27E => var_core_value_sigC27E.revision > Math.max(0, var_core_value_sig5913 - 256))), var_core_value_sig6324;
  }
  _patchCachedProjectedRows(var_core_value_sig54C6, var_core_value_sigE843) {
    let var_core_value_sig2EB2 = new Map(var_core_value_sigE843.map(var_core_value_sigA70D => [var_core_value_sigA70D.recordId, var_core_value_sigA70D])),
      var_core_value_sig683A = false,
      var_core_value_sig109B = var_core_value_sig54C6.map(var_core_value_sigCE10 => {
        let var_core_value_sigA3861 = var_core_value_sig2EB2.get(var_core_value_sigCE10.recordId);
        return var_core_value_sigA3861 ? var_core_value_sigA3861 === var_core_value_sigCE10 ? var_core_value_sigCE10 : (var_core_value_sig683A = true, var_core_value_sigA3861) : var_core_value_sigCE10;
      });
    return var_core_value_sig683A ? var_core_value_sig109B : var_core_value_sig54C6;
  }
  _cellInvalidationsTouchFields(var_core_value_sig6DD0, var_core_value_sigB5D3, var_core_value_sig6085, var_core_value_sig2507) {
    return !var_core_value_sig2507.size || var_core_value_sigB5D3 === var_core_value_sig6085 ? false : var_core_value_sig6085 - var_core_value_sigB5D3 > 256 || (this._cellInvalidations["get"](var_core_value_sig6DD0) ?? []).some(var_core_value_sigCD82 => var_core_value_sigCD82.revision > var_core_value_sigB5D3 && var_core_value_sigCD82.revision <= var_core_value_sig6085 && var_core_value_sig2507.has(var_core_value_sigCD82.fieldId));
  }
  _filterSortFieldIds(var_core_value_sig5870) {
    var var_core_value_sig827F, var_core_value_sig2452;
    let var_core_value_sig50D0 = new Set();
    return var_core_value_sig5870 == null || (var_core_value_sig827F = var_core_value_sig5870.filter) == null || var_core_value_sig827F.conditions["forEach"](var_core_value_sig44DD => var_core_value_sig50D0.add(var_core_value_sig44DD.fieldId)), var_core_value_sig5870 == null || (var_core_value_sig2452 = var_core_value_sig5870.sort) == null || var_core_value_sig2452.forEach(var_core_value_sig96FA => var_core_value_sig50D0.add(var_core_value_sig96FA.fieldId)), var_core_value_sig50D0;
  }
  _groupProjectionFieldIds(var_core_value_sig5EBB) {
    var var_core_value_sig5E99;
    let var_core_value_sig3FB3 = this._filterSortFieldIds(var_core_value_sig5EBB);
    return (var_core_value_sig5E99 = var_core_value_sig5EBB.group) == null || var_core_value_sig5E99.forEach(var_core_value_sigAB68 => var_core_value_sig3FB3.add(var_core_value_sigAB68.fieldId)), var_core_value_sig3FB3;
  }
  _filterRows(var_core_value_sig0214, var_core_value_sig5153, var_core_value_sigF323) {
    let var_core_value_sig0C32 = var_core_value_sig5153 == null ? undefined : var_core_value_sig5153.filter;
    if (!(var_core_value_sig0C32 != null && var_core_value_sig0C32.conditions['length'])) return var_core_value_sigF323;
    let var_core_value_sig1D89 = var_core_value_sig0C32.conditions["filter"](var_core_value_sig040A => !Mi(var_core_value_sig040A));
    return var_core_value_sig1D89.length ? var_core_value_sigF323.filter(var_core_value_sig2AE0 => {
      if (var_core_value_sig0C32.conjunction === var_core_value_sig5270.OR) {
        for (let var_core_value_sigF0F9 of var_core_value_sig1D89) {
          let var_core_value_sig76BA = var_core_value_sig0214.fields[var_core_value_sigF0F9.fieldId];
          if (!var_core_value_sig76BA || this._fieldRegistry['get'](var_core_value_sig76BA.type).filter(var_core_value_sig2AE0.values[var_core_value_sig76BA.id], var_core_value_sigF0F9.operator, var_core_value_sigF0F9.operand, var_core_value_sig76BA)) return true;
        }
        return false;
      }
      for (let var_core_value_sig1B221 of var_core_value_sig1D89) {
        let var_core_value_sig1A0F = var_core_value_sig0214.fields[var_core_value_sig1B221.fieldId];
        if (var_core_value_sig1A0F && !this._fieldRegistry["get"](var_core_value_sig1A0F.type).filter(var_core_value_sig2AE0.values[var_core_value_sig1A0F.id], var_core_value_sig1B221.operator, var_core_value_sig1B221.operand, var_core_value_sig1A0F)) return false;
      }
      return true;
    }) : var_core_value_sigF323;
  }
  _sortRows(var_core_value_sig2616, var_core_value_sig97EF, var_core_value_sigA0C0) {
    let var_core_value_sigAD4B = (var_core_value_sig97EF == null ? undefined : var_core_value_sig97EF.sort) ?? [];
    if (!var_core_value_sigAD4B.length) return var_core_value_sigA0C0;
    let var_core_value_sig06EA = var_core_value_sigAD4B.flatMap(var_core_value_sigC349 => {
      let var_core_value_sig9D96 = var_core_value_sig2616.fields[var_core_value_sigC349.fieldId];
      return var_core_value_sig9D96 ? [{
        ...var_core_value_sigC349,
        'field': var_core_value_sig9D96
      }] : [];
    });
    return var_core_value_sig06EA.length ? this._canUseFastSort(var_core_value_sig06EA) ? this._fastSortRows(var_core_value_sig06EA, var_core_value_sigA0C0) : [...var_core_value_sigA0C0].sort((var_core_value_sig2776, var_core_value_sig6FB2) => {
      for (let var_core_value_sig7F72 of var_core_value_sig06EA) {
        let var_core_value_sigFBA4 = var_core_value_sig7F72.field,
          var_core_value_sig4383 = this._fieldRegistry["get"](var_core_value_sigFBA4.type).compare(var_core_value_sig2776.values[var_core_value_sigFBA4.id], var_core_value_sig6FB2.values[var_core_value_sigFBA4.id], var_core_value_sigFBA4);
        if (var_core_value_sig4383 !== 0) return var_core_value_sig7F72.direction === var_core_value_sigDBEF.DESC ? -var_core_value_sig4383 : var_core_value_sig4383;
      }
      return 0;
    }) : var_core_value_sigA0C0;
  }
  _canUseFastSort(var_core_value_sigF3C7) {
    return var_core_value_sigF3C7.every(var_core_value_sigEB43 => ti.has(var_core_value_sigEB43.field["type"]));
  }
  _fastSortRows(var_core_value_sig5633, var_core_value_sig2492) {
    return var_core_value_sig2492.map((var_core_value_sig4186, var_core_value_sigF963) => ({
      'row': var_core_value_sig4186,
      'index': var_core_value_sigF963,
      'keys': var_core_value_sig5633.map(var_core_value_sig7B2A => var_core_value_sig4186.values[var_core_value_sig7B2A.fieldId])
    })).sort((var_core_value_sigB608, var_core_value_sigF866) => {
      for (let var_core_value_sig06CD = 0; var_core_value_sig06CD < var_core_value_sig5633.length; var_core_value_sig06CD++) {
        let var_core_value_sig186C = ji(var_core_value_sigB608.keys[var_core_value_sig06CD], var_core_value_sigF866.keys[var_core_value_sig06CD]);
        if (var_core_value_sig186C !== 0) return var_core_value_sig5633[var_core_value_sig06CD].direction === var_core_value_sigDBEF.DESC ? -var_core_value_sig186C : var_core_value_sig186C;
      }
      return var_core_value_sigB608.index - var_core_value_sigF866.index;
    }).map(var_core_value_sig5EFB => var_core_value_sig5EFB.row);
  }
  _projectGroups(var_core_value_sig39F2, var_core_value_sigAD47, var_core_value_sig1722) {
    var var_core_value_sig7F86;
    return F('BaseProjection.projectGroups', () => {
      var var_core_value_sig3A85;
      if (!((var_core_value_sig3A85 = var_core_value_sigAD47.group) != null && var_core_value_sig3A85.length)) return [];
      let var_core_value_sig2682 = var_core_value_sigAD47.group["filter"](var_core_value_sigA5F1 => var_core_value_sig39F2.fields[var_core_value_sigA5F1.fieldId]);
      if (!var_core_value_sig2682.length) return [];
      let var_core_value_sig4BB5 = this._groupsCacheKey(var_core_value_sig39F2.id, var_core_value_sigAD47, var_core_value_sig2682),
        var_core_value_sig6709 = this._getCellRevision(var_core_value_sig39F2.id),
        var_core_value_sig52CA = this._projectedGroupsCache["get"](var_core_value_sig4BB5);
      if (var_core_value_sig52CA && var_core_value_sig52CA.globalRevision === this._globalRevision && var_core_value_sig52CA.tableRevision === this._getTableRevision(var_core_value_sig39F2.id)) {
        if (var_core_value_sig52CA.cellRevision === var_core_value_sig6709 && var_core_value_sig52CA.rows === var_core_value_sig1722) return var_core_value_sig52CA.groups;
        if (var_core_value_sig52CA.cellRevision !== var_core_value_sig6709 && !this._cellInvalidationsTouchFields(var_core_value_sig39F2.id, var_core_value_sig52CA.cellRevision, var_core_value_sig6709, this._groupProjectionFieldIds(var_core_value_sigAD47))) return this._projectedGroupsCache["set"](var_core_value_sig4BB5, {
          ...var_core_value_sig52CA,
          'rows': var_core_value_sig1722,
          'cellRevision': var_core_value_sig6709
        }), var_core_value_sig52CA.groups;
      }
      let var_core_value_sigC030 = new Map();
      for (let var_core_value_sig97A2 of var_core_value_sig1722) {
        let var_core_value_sigD955 = var_core_value_sigC030,
          var_core_value_sig48BD = '';
        for (let var_core_value_sigFBFA = 0; var_core_value_sigFBFA < var_core_value_sig2682.length; var_core_value_sigFBFA++) {
          let var_core_value_sig2AD8 = var_core_value_sig2682[var_core_value_sigFBFA],
            var_core_value_sig2AD0 = var_core_value_sig97A2.values[var_core_value_sig2AD8.fieldId],
            var_core_value_sig3EEE = ii(var_core_value_sig2AD0),
            var_core_value_sigBC46 = var_core_value_sig2AD8.fieldId + '\x00' + var_core_value_sig3EEE,
            var_core_value_sig3D7D = var_core_value_sig48BD + '/' + var_core_value_sig2AD8.fieldId + ':' + var_core_value_sig3EEE,
            var_core_value_sig27E5 = var_core_value_sigD955.get(var_core_value_sigBC46);
          var_core_value_sig27E5 || (var_core_value_sig27E5 = {
            'key': var_core_value_sig3EEE,
            'value': var_core_value_sig2AD0,
            'path': var_core_value_sig3D7D,
            'label': var_core_value_sig3EEE || "Empty",
            'fieldId': var_core_value_sig2AD8.fieldId,
            'level': var_core_value_sigFBFA,
            'recordIds': [],
            'children': new Map()
          }, var_core_value_sigD955.set(var_core_value_sigBC46, var_core_value_sig27E5)), var_core_value_sig27E5.recordIds["push"](var_core_value_sig97A2.recordId), var_core_value_sigD955 = var_core_value_sig27E5.children, var_core_value_sig48BD = var_core_value_sig3D7D;
        }
      }
      let var_core_value_sig88F6 = this._materializeGroups(var_core_value_sig2682, var_core_value_sigC030, 0);
      return this._projectedGroupsCache["set"](var_core_value_sig4BB5, {
        'table': var_core_value_sig39F2,
        'rows': var_core_value_sig1722,
        'groups': var_core_value_sig88F6,
        'globalRevision': this._globalRevision,
        'tableRevision': this._getTableRevision(var_core_value_sig39F2.id),
        'cellRevision': var_core_value_sig6709
      }), var_core_value_sig88F6;
    }, {
      'tableId': var_core_value_sig39F2.id,
      'viewId': var_core_value_sigAD47.id,
      'viewType': var_core_value_sigAD47.type,
      'rows': var_core_value_sig1722.length,
      'groupFields': ((var_core_value_sig7F86 = var_core_value_sigAD47.group) == null ? undefined : var_core_value_sig7F86.length) ?? 0
    });
  }
  _materializeGroups(var_core_value_sigF69D, var_core_value_sig7CB9, var_core_value_sigC1D8) {
    var var_core_value_sigCF8B;
    let var_core_value_sigCD15 = Array.from(var_core_value_sig7CB9.values()),
      var_core_value_sig524D = (var_core_value_sigCF8B = var_core_value_sigF69D[var_core_value_sigC1D8]) == null ? undefined : var_core_value_sigCF8B.direction;
    return var_core_value_sig524D && var_core_value_sigCD15.sort((var_core_value_sig37DB, var_core_value_sig5542) => {
      let var_core_value_sigE0A9 = var_core_value_sig37DB.key['localeCompare'](var_core_value_sig5542.key);
      return var_core_value_sig524D === var_core_value_sigDBEF.DESC ? -var_core_value_sigE0A9 : var_core_value_sigE0A9;
    }), var_core_value_sigCD15.map(var_core_value_sigA73E => ({
      'key': var_core_value_sigA73E.key,
      'value': var_core_value_sigA73E.value,
      'path': var_core_value_sigA73E.path,
      'label': var_core_value_sigA73E.label,
      'fieldId': var_core_value_sigA73E.fieldId,
      'level': var_core_value_sigA73E.level,
      'recordIds': var_core_value_sigA73E.recordIds,
      'children': this._materializeGroups(var_core_value_sigF69D, var_core_value_sigA73E.children, var_core_value_sigC1D8 + 1)
    }));
  }
  _title(var_core_value_sigD7F4, var_core_value_sig7B87, var_core_value_sig933D) {
    let var_core_value_sig6ACE = var_core_value_sig933D ?? var_core_value_sigD7F4.primaryFieldId,
      var_core_value_sig7675 = var_core_value_sig7B87.values[var_core_value_sig6ACE];
    return var_core_value_sig7675 == null ? '' : String(var_core_value_sig7675);
  }
  _recordIds(var_core_value_sig21B8) {
    if (Array.isArray(var_core_value_sig21B8)) return var_core_value_sig21B8.map(String);
    if (typeof var_core_value_sig21B8 == "string" && var_core_value_sig21B8) return [var_core_value_sig21B8];
  }
  _capabilities(var_core_value_sigD545) {
    return this._fieldRegistry["get"](var_core_value_sigD545.type).getCapabilities(var_core_value_sigD545);
  }
};
ri = Y([J(0, var_core_value_sig6EF5(dr))], ri);
function ii(var_core_value_sig7D2B) {
  return var_core_value_sig7D2B == null ? '' : String(var_core_value_sig7D2B);
}
;
function ai(var_core_value_sigEA89) {
  return new Map(var_core_value_sigEA89.map((var_core_value_sig91C9, var_core_value_sig64BA1) => [var_core_value_sig91C9.recordId, var_core_value_sig64BA1]));
}
;
function oi(var_core_value_sig97B1) {
  return !!(Array.isArray(var_core_value_sig97B1.recordOrder) && var_core_value_sig97B1.rowIndex && var_core_value_sig97B1.rowId && var_core_value_sig97B1.colIndex && var_core_value_sig97B1.colId && var_core_value_sig97B1.cellData);
}
;
function si(var_core_value_sigD238) {
  let var_core_value_sigA1F8 = (var_core_value_sigD238 == null ? undefined : var_core_value_sigD238.conditions['filter'](var_core_value_sig3FD5 => !Mi(var_core_value_sig3FD5))) ?? [];
  return !var_core_value_sigD238 || !var_core_value_sigA1F8.length ? null : {
    'conjunction': var_core_value_sigD238.conjunction,
    'conditions': var_core_value_sigA1F8.map(var_core_value_sig1008 => ({
      'fieldId': var_core_value_sig1008.fieldId,
      'operator': var_core_value_sig1008.operator,
      'operand': var_core_value_sig1008.operand
    }))
  };
}
;
function ci(var_core_value_sig71F3, var_core_value_sigD652) {
  return var_core_value_sig71F3.records === var_core_value_sigD652.records && var_core_value_sig71F3.recordOrder === var_core_value_sigD652.recordOrder && var_core_value_sig71F3.fields === var_core_value_sigD652.fields && var_core_value_sig71F3.fieldOrder === var_core_value_sigD652.fieldOrder && var_core_value_sig71F3.cellData === var_core_value_sigD652.cellData && var_core_value_sig71F3.rowIndex === var_core_value_sigD652.rowIndex && var_core_value_sig71F3.rowId === var_core_value_sigD652.rowId && var_core_value_sig71F3.colIndex === var_core_value_sigD652.colIndex && var_core_value_sig71F3.colId === var_core_value_sigD652.colId;
}
;
function li(var_core_value_sig6289) {
  return var_core_value_sig6289 != null && var_core_value_sig6289.length ? var_core_value_sig6289.map(var_core_value_sigB9F4 => ({
    'fieldId': var_core_value_sigB9F4.fieldId,
    'direction': var_core_value_sigB9F4.direction
  })) : null;
}
;
function ui(var_core_value_sigB20A) {
  if (typeof var_core_value_sigB20A != "object" || !var_core_value_sigB20A) return JSON.stringify(var_core_value_sigB20A) ?? "undefined";
  if (Array.isArray(var_core_value_sigB20A)) return '[' + var_core_value_sigB20A.map(ui).join(',') + ']';
  let var_core_value_sig0591 = var_core_value_sigB20A;
  return '{' + Object.keys(var_core_value_sig0591).sort().map(var_core_value_sig2D23 => JSON.stringify(var_core_value_sig2D23) + ':' + ui(var_core_value_sig0591[var_core_value_sig2D23])).join(',') + '}';
}
;
function di(var_core_value_sigDBF1) {
  let var_core_value_sig0358 = Object.values(var_core_value_sigDBF1).sort((var_core_value_sigF2E0, var_core_value_sig9214) => var_core_value_sigF2E0.orderKey["localeCompare"](var_core_value_sig9214.orderKey)),
    var_core_value_sigC4C9 = [];
  for (let var_core_value_sigC8B1 of var_core_value_sig0358) var_core_value_sigC4C9.push(var_core_value_sigC8B1.id);
  return var_core_value_sigC4C9;
}
;
function fi(var_core_value_sig56ED) {
  return {
    'weekdays': Array.isArray(var_core_value_sig56ED == null ? undefined : var_core_value_sig56ED.weekdays) && var_core_value_sig56ED.weekdays["length"] ? [...new Set(var_core_value_sig56ED.weekdays['filter'](var_core_value_sig35E2 => Number.isInteger(var_core_value_sig35E2) && var_core_value_sig35E2 >= 1 && var_core_value_sig35E2 <= 7))] : [1, 2, 3, 4, 5],
    'exceptions': Array.isArray(var_core_value_sig56ED == null ? undefined : var_core_value_sig56ED.exceptions) ? var_core_value_sig56ED.exceptions['flatMap'](var_core_value_sig9B13 => !var_core_value_sig9B13 || !Number.isFinite(var_core_value_sig9B13.date) ? [] : [{
      'id': String(var_core_value_sig9B13.id || "exception-" + var_core_value_sig9B13.date),
      'date': Z(Number(var_core_value_sig9B13.date)),
      'name': String(var_core_value_sig9B13.name || 'Working\x20day'),
      'type': var_core_value_sig9B13.type === "working" ? "working" : 'off'
    }]) : []
  };
}
;
function pi(var_core_value_sigFD401, var_core_value_sigD649, var_core_value_sig0E88, var_core_value_sig13C8) {
  let var_core_value_sigE521 = _i(var_core_value_sigFD401, var_core_value_sigD649),
    var_core_value_sig0571 = vi(var_core_value_sigFD401, var_core_value_sig0E88),
    var_core_value_sig43F4 = mi(var_core_value_sigFD401, var_core_value_sigE521, var_core_value_sig0571, var_core_value_sig13C8);
  return {
    'scale': var_core_value_sigFD401,
    'start': var_core_value_sigE521,
    'end': var_core_value_sig0571,
    'unitWidth': gi(var_core_value_sigFD401),
    'majorHeaders': hi(var_core_value_sigFD401, var_core_value_sigE521, var_core_value_sig0571),
    'columns': var_core_value_sig43F4
  };
}
;
function mi(var_core_value_sig37F8, var_core_value_sig45D3, var_core_value_sigE2F3, var_core_value_sig9CB1) {
  let var_core_value_sigFB76 = [],
    var_core_value_sig58A5 = var_core_value_sig45D3;
  for (; var_core_value_sig58A5 < var_core_value_sigE2F3;) {
    let var_core_value_sig7620 = var_core_value_sig37F8 === "quarter" ? Di(var_core_value_sig58A5, 7) : var_core_value_sig37F8 === "year" ? Oi(var_core_value_sig58A5, 1) : Di(var_core_value_sig58A5, 1);
    var_core_value_sigFB76.push({
      'id': var_core_value_sig37F8 + '-' + var_core_value_sig58A5,
      'label': yi(var_core_value_sig37F8, var_core_value_sig58A5, var_core_value_sig7620),
      'majorLabel': bi(var_core_value_sig37F8, var_core_value_sig58A5),
      'start': var_core_value_sig58A5,
      'end': var_core_value_sig7620,
      'nonWorking': Si(var_core_value_sig58A5, var_core_value_sig7620, var_core_value_sig9CB1)
    }), var_core_value_sig58A5 = var_core_value_sig7620;
  }
  return var_core_value_sigFB76;
}
;
function hi(var_core_value_sigA486, var_core_value_sigB0DE, var_core_value_sig6793) {
  let var_core_value_sigECD2 = [],
    var_core_value_sigD28E = var_core_value_sigA486 === "year" ? Ei(var_core_value_sigB0DE) : Ti(var_core_value_sigB0DE);
  for (; var_core_value_sigD28E < var_core_value_sig6793;) {
    let var_core_value_sigB9FC = var_core_value_sigA486 === 'year' ? ki(var_core_value_sigD28E, 1) : Oi(var_core_value_sigD28E, 1);
    var_core_value_sigECD2.push({
      'id': "major-" + var_core_value_sigD28E,
      'label': var_core_value_sigA486 === "year" ? String(new Date(var_core_value_sigD28E).getUTCFullYear()) : Ai(var_core_value_sigD28E),
      'start': var_core_value_sigD28E,
      'end': var_core_value_sigB9FC
    }), var_core_value_sigD28E = var_core_value_sigB9FC;
  }
  return var_core_value_sigECD2;
}
;
function gi(var_core_value_sigB896) {
  switch (var_core_value_sigB896) {
    case 'week':
      return 172;
    case "quarter":
      return 172;
    case "year":
      return 136;
    default:
      return 86;
  }
}
;
function _i(var_core_value_sig22D9, var_core_value_sig7E70) {
  return var_core_value_sig22D9 === 'year' ? Ei(var_core_value_sig7E70) : var_core_value_sig22D9 === "quarter" ? wi(var_core_value_sig7E70) : Z(var_core_value_sig7E70);
}
;
function vi(var_core_value_sig9CCC, var_core_value_sigEB93) {
  return var_core_value_sig9CCC === "year" ? ki(Ei(var_core_value_sigEB93), 1) : var_core_value_sig9CCC === "quarter" ? Di(wi(var_core_value_sigEB93), 7) : Di(Z(var_core_value_sigEB93), 1);
}
;
function yi(var_core_value_sig8F13, var_core_value_sigAC84, var_core_value_sig1312) {
  let var_core_value_sig18A9 = new Date(var_core_value_sigAC84);
  return var_core_value_sig8F13 === "quarter" ? var_core_value_sig18A9.getUTCDate() + '-' + new Date(var_core_value_sig1312 - ni).getUTCDate() : var_core_value_sig8F13 === 'year' ? var_core_value_sig18A9.toLocaleString('en-US', {
    'month': "short",
    'timeZone': "UTC"
  }) : String(var_core_value_sig18A9.getUTCDate());
}
;
function bi(var_core_value_sigE028, var_core_value_sig8FC31) {
  return var_core_value_sigE028 === "year" ? String(new Date(var_core_value_sig8FC31).getUTCFullYear()) : Ai(var_core_value_sig8FC31);
}
;
function xi(var_core_value_sig76A1, var_core_value_sig642F, var_core_value_sigF190) {
  let var_core_value_sig5BF0 = fi(var_core_value_sigF190),
    var_core_value_sig4144 = 0;
  for (let var_core_value_sig60E6 = Z(var_core_value_sig76A1); var_core_value_sig60E6 <= Z(var_core_value_sig642F); var_core_value_sig60E6 = Di(var_core_value_sig60E6, 1)) Ci(var_core_value_sig60E6, var_core_value_sig5BF0) || var_core_value_sig4144++;
  return var_core_value_sig4144;
}
;
function Si(var_core_value_sig81CB, var_core_value_sig7C8C, var_core_value_sigF533) {
  if (!var_core_value_sigF533) return false;
  let var_core_value_sig018A = fi(var_core_value_sigF533);
  for (let var_core_value_sig1F6E = Z(var_core_value_sig81CB); var_core_value_sig1F6E < var_core_value_sig7C8C; var_core_value_sig1F6E = Di(var_core_value_sig1F6E, 1)) if (!Ci(var_core_value_sig1F6E, var_core_value_sig018A)) return false;
  return true;
}
;
function Ci(var_core_value_sigECD9, var_core_value_sig900B) {
  let var_core_value_sig82F5 = Z(var_core_value_sigECD9),
    var_core_value_sigB2AC = var_core_value_sig900B.exceptions["find"](var_core_value_sig7A6B => Z(var_core_value_sig7A6B.date) === var_core_value_sig82F5);
  if (var_core_value_sigB2AC) return var_core_value_sigB2AC.type === "off";
  let var_core_value_sigECB5 = new Date(var_core_value_sig82F5).getUTCDay(),
    var_core_value_sigA422 = var_core_value_sigECB5 === 0 ? 7 : var_core_value_sigECB5;
  return !var_core_value_sig900B.weekdays['includes'](var_core_value_sigA422);
}
;
function Z(var_core_value_sigDA36) {
  let var_core_value_sig2A70 = new Date(var_core_value_sigDA36);
  return Date.UTC(var_core_value_sig2A70.getUTCFullYear(), var_core_value_sig2A70.getUTCMonth(), var_core_value_sig2A70.getUTCDate());
}
;
function wi(var_core_value_sigA9DF) {
  let var_core_value_sigBC94 = Z(var_core_value_sigA9DF),
    var_core_value_sig018B = new Date(var_core_value_sigBC94).getUTCDay();
  return Di(var_core_value_sigBC94, -(var_core_value_sig018B === 0 ? 6 : var_core_value_sig018B - 1));
}
;
function Ti(var_core_value_sig6F36) {
  let var_core_value_sigF1B5 = new Date(var_core_value_sig6F36);
  return Date.UTC(var_core_value_sigF1B5.getUTCFullYear(), var_core_value_sigF1B5.getUTCMonth(), 1);
}
;
function Ei(var_core_value_sig51CE) {
  let var_core_value_sigB5C9 = new Date(var_core_value_sig51CE);
  return Date.UTC(var_core_value_sigB5C9.getUTCFullYear(), 0, 1);
}
;
function Di(var_core_value_sigFEE6, var_core_value_sig8700) {
  return var_core_value_sigFEE6 + var_core_value_sig8700 * ni;
}
;
function Oi(var_core_value_sig723F2, var_core_value_sig70D4) {
  let var_core_value_sig838B = new Date(var_core_value_sig723F2);
  return Date.UTC(var_core_value_sig838B.getUTCFullYear(), var_core_value_sig838B.getUTCMonth() + var_core_value_sig70D4, 1);
}
;
function ki(var_core_value_sigE6AD, var_core_value_sigC4E91) {
  let var_core_value_sigE39E = new Date(var_core_value_sigE6AD);
  return Date.UTC(var_core_value_sigE39E.getUTCFullYear() + var_core_value_sigC4E91, 0, 1);
}
;
function Ai(var_core_value_sig6818) {
  let var_core_value_sig504F = new Date(var_core_value_sig6818);
  return var_core_value_sig504F.toLocaleString('en-US', {
    'month': "short",
    'timeZone': "UTC"
  }) + '\x20' + var_core_value_sig504F.getUTCFullYear();
}
;
function ji(var_core_value_sigA21D, var_core_value_sigB754) {
  if (var_core_value_sigA21D == null && var_core_value_sigB754 == null) return 0;
  if (var_core_value_sigA21D == null) return -1;
  if (var_core_value_sigB754 == null) return 1;
  if (typeof var_core_value_sigA21D == "boolean" || typeof var_core_value_sigB754 == "boolean") return Number(var_core_value_sigA21D === true) - Number(var_core_value_sigB754 === true);
  let var_core_value_sig2B87 = Number(var_core_value_sigA21D),
    var_core_value_sig2FFF = Number(var_core_value_sigB754),
    var_core_value_sig82FF = Number.isFinite(var_core_value_sig2B87),
    var_core_value_sig6C72 = Number.isFinite(var_core_value_sig2FFF);
  return var_core_value_sig82FF && var_core_value_sig6C72 ? var_core_value_sig2B87 - var_core_value_sig2FFF : var_core_value_sig82FF ? 1 : var_core_value_sig6C72 ? -1 : String(var_core_value_sigA21D).localeCompare(String(var_core_value_sigB754));
}
;
function Mi(var_core_value_sig50E5) {
  if (var_core_value_sig50E5.operator !== 'is' && var_core_value_sig50E5.operator !== "isNot") return false;
  let var_core_value_sig6E14 = var_core_value_sig50E5.operand;
  return var_core_value_sig6E14 == null ? true : typeof var_core_value_sig6E14 == 'string' ? var_core_value_sig6E14.trim() === '' : Array.isArray(var_core_value_sig6E14) ? var_core_value_sig6E14.length === 0 : false;
}
;
function Ni(var_core_value_sig4D3F, var_core_value_sigBE4F) {
  var var_core_value_sig8DF2;
  let var_core_value_sig666F = Array.isArray((var_core_value_sig8DF2 = var_core_value_sig4D3F.config) == null ? undefined : var_core_value_sig8DF2.options) ? var_core_value_sig4D3F.config['options'] : [];
  for (let var_core_value_sig20F6 of var_core_value_sig666F) {
    if (var_core_value_sig20F6 == null) continue;
    if (typeof var_core_value_sig20F6 == "string") {
      if (var_core_value_sig20F6 === var_core_value_sigBE4F) return {
        'id': var_core_value_sig20F6,
        'name': var_core_value_sig20F6
      };
      continue;
    }
    let var_core_value_sig5055 = var_core_value_sig20F6,
      var_core_value_sig3801 = String(var_core_value_sig5055.id ?? var_core_value_sig5055.name ?? ''),
      var_core_value_sig45F0 = String(var_core_value_sig5055.name ?? var_core_value_sig5055.id ?? var_core_value_sig3801);
    if (var_core_value_sig3801 === var_core_value_sigBE4F || var_core_value_sig45F0 === var_core_value_sigBE4F) return {
      'id': var_core_value_sig3801,
      'name': var_core_value_sig45F0,
      'color': var_core_value_sig5055.color == null ? undefined : String(var_core_value_sig5055.color)
    };
  }
  return null;
}
let Pi = function (var_core_value_sig2BE5) {
  return var_core_value_sig2BE5.CreateView = 'create-view', var_core_value_sig2BE5.DeleteView = "delete-view", var_core_value_sig2BE5;
}({});
const Q = {
  'id': 'base.mutation.apply-base-json1',
  'type': var_core_value_sig0A86.MUTATION,
  'handler'(var_core_value_sig79D6, var_core_value_sig6476) {
    let {
        unitId: var_core_value_sigAFF3,
        op: var_core_value_sig866B
      } = var_core_value_sig6476,
      var_core_value_sig40A0 = var_core_value_sig79D6.get(var_core_value_sig5B68).getUnit(var_core_value_sigAFF3, var_core_value_sigE2E8.UNIVER_BASE);
    if (!var_core_value_sig40A0) return false;
    let var_core_value_sig86F0 = var_core_value_sig40A0.getSnapshot(),
      var_core_value_sigE4B4 = new R(),
      var_core_value_sig1D8C = var_core_value_sigE4B4.getAffectedRanges(var_core_value_sig866B),
      var_core_value_sigED34 = var_core_value_sigE4B4.applyOp(var_core_value_sig86F0, var_core_value_sig866B);
    return var_core_value_sig40A0.setSnapshot(var_core_value_sigED34), Fi(var_core_value_sigED34, var_core_value_sig1D8C, var_core_value_sig79D6.get(ei)), true;
  }
};
function Fi(var_core_value_sig74CE, var_core_value_sig7FB9, var_core_value_sigAE9F) {
  let var_core_value_sigFF68 = new Set(),
    var_core_value_sigC604 = new Set(),
    var_core_value_sigE56F = new Set();
  for (let var_core_value_sigAEE0 of var_core_value_sig7FB9) {
    if (var_core_value_sigAEE0.reason === "view" && var_core_value_sigAEE0.tableId && var_core_value_sigAEE0.viewId) {
      let var_core_value_sig07E9 = var_core_value_sigAEE0.tableId + '\x00' + var_core_value_sigAEE0.viewId;
      var_core_value_sigE56F.has(var_core_value_sig07E9) || (var_core_value_sigE56F.add(var_core_value_sig07E9), var_core_value_sigAE9F.invalidateByView(var_core_value_sigAEE0.tableId, var_core_value_sigAEE0.viewId));
      continue;
    }
    if (var_core_value_sigAEE0.reason === 'field' && var_core_value_sigAEE0.tableId && var_core_value_sigAEE0.fieldId) {
      let var_core_value_sig4F59 = var_core_value_sigAEE0.tableId + '\x00' + var_core_value_sigAEE0.fieldId;
      var_core_value_sigC604.has(var_core_value_sig4F59) || (var_core_value_sigC604.add(var_core_value_sig4F59), var_core_value_sigAE9F.invalidateByField(var_core_value_sigAEE0.tableId, var_core_value_sigAEE0.fieldId));
      continue;
    }
    if (var_core_value_sigAEE0.reason !== "cell") {
      var_core_value_sigAE9F.invalidateByOp();
      return;
    }
    let var_core_value_sigBC91 = Ii(var_core_value_sig74CE, var_core_value_sigAEE0);
    if (!var_core_value_sigBC91) {
      var_core_value_sigAE9F.invalidateByOp();
      return;
    }
    let var_core_value_sigCB88 = var_core_value_sigBC91.tableId + '\x00' + var_core_value_sigBC91.recordId + '\x00' + var_core_value_sigBC91.fieldId;
    var_core_value_sigFF68.has(var_core_value_sigCB88) || (var_core_value_sigFF68.add(var_core_value_sigCB88), var_core_value_sigAE9F.invalidateByCell(var_core_value_sigBC91.tableId, var_core_value_sigBC91.recordId, var_core_value_sigBC91.fieldId));
  }
}
;
function Ii(var_core_value_sig6D7D, var_core_value_sig335B) {
  var var_core_value_sig61E2, var_core_value_sig974B;
  if (!var_core_value_sig335B.tableId) return null;
  if (var_core_value_sig335B.recordId && var_core_value_sig335B.fieldId) return {
    'tableId': var_core_value_sig335B.tableId,
    'recordId': var_core_value_sig335B.recordId,
    'fieldId': var_core_value_sig335B.fieldId
  };
  if (var_core_value_sig335B.row == null || var_core_value_sig335B.column == null) return null;
  let var_core_value_sigB89A = var_core_value_sig6D7D.tables[var_core_value_sig335B.tableId],
    var_core_value_sig3B83 = var_core_value_sigB89A == null || (var_core_value_sig61E2 = var_core_value_sigB89A.rowId) == null ? undefined : var_core_value_sig61E2[var_core_value_sig335B.row],
    var_core_value_sig3092 = var_core_value_sigB89A == null || (var_core_value_sig974B = var_core_value_sigB89A.colId) == null ? undefined : var_core_value_sig974B[var_core_value_sig335B.column];
  return !var_core_value_sig3B83 || !var_core_value_sig3092 ? null : {
    'tableId': var_core_value_sig335B.tableId,
    'recordId': var_core_value_sig3B83,
    'fieldId': var_core_value_sig3092
  };
}
const Li = var_core_value_sigF50E.createRegExpFromSafeFragment(String.raw`(?:^|\W)\$?[A-Z]{1,3}\$?\d+(?::\$?[A-Z]{1,3}\$?\d+)?(?:$|\W)`),
  Ri = var_core_value_sigF50E.createRegExpFromSafeFragment(String.raw`(?:'\[[^\]]+\](?:[^']|'')+'|\[[^\]]+\][^\s'!]+)!\$?[A-Z]{1,3}\$?\d+(?::\$?[A-Z]{1,3}\$?\d+)?`, 'gi'),
  zi = /\{([^}]+)\}/g,
  Bi = var_core_value_sigF50E.createRegExpFromSafeFragment(String.raw`\b([A-Z_][\w.]*)\[\[\s*#(This Row|Data)\s*\],\s*\[([^\]]+)\]\]`, 'gi'),
  Vi = var_core_value_sigF50E.createRegExpFromSafeFragment(String.raw`\b([A-Z_][\w.]*)\[@\[([^\]]+)\]\]`, 'gi'),
  Hi = var_core_value_sigF50E.createRegExpFromSafeFragment(String.raw`\b([A-Z_][\w.]*)\[([^\[\]#]+)\]`, 'gi'),
  Ui = var_core_value_sigF50E.createRegExpFromSafeFragment(String.raw`(^|[^\w\[])\[\[\s*#(This Row|Data)\s*\],\s*\[([^\]]+)\]\]`, 'gi'),
  Wi = var_core_value_sigF50E.createRegExpFromSafeFragment(String.raw`(^|[^\w\[])\[@\[([^\]]+)\]\](?!\])`, 'g'),
  Gi = var_core_value_sigF50E.createRegExpFromSafeFragment(String.raw`(^|[^\w\[])\[@?([^\[\]#]+)\](?!\])`, 'g');
var Ki = class {
  createSuperTableReference(var_core_value_sig72B6, var_core_value_sig43E8 = var_core_value_sig72B6.id) {
    var var_core_value_sigB1FB;
    let var_core_value_sig6876 = ((var_core_value_sigB1FB = var_core_value_sig72B6.recordOrder) == null ? undefined : var_core_value_sigB1FB.length) ?? Object.values(var_core_value_sig72B6.records).length;
    return {
      'sheetId': var_core_value_sig43E8,
      'titleMap': new Map(var_core_value_sig72B6.fieldOrder["map"]((var_core_value_sig8D65, var_core_value_sig8122) => {
        var var_core_value_sigEDC6;
        return [((var_core_value_sigEDC6 = var_core_value_sig72B6.fields[var_core_value_sig8D65]) == null ? undefined : var_core_value_sigEDC6.name) ?? var_core_value_sig8D65, var_core_value_sig8122];
      })),
      'range': {
        'startRow': 0,
        'endRow': Math.max(0, var_core_value_sig6876 - 1),
        'startColumn': 0,
        'endColumn': Math.max(0, var_core_value_sig72B6.fieldOrder["length"] - 1)
      },
      'showHeader': false
    };
  }
  getSuperTableRegistrations(var_core_value_sig55FB, var_core_value_sig2870) {
    let var_core_value_sigC865 = [],
      var_core_value_sig6788 = var_core_value_sig2870 ? new Set(var_core_value_sig2870) : null,
      var_core_value_sig7B1F = var_core_value_sigBD2F(var_core_value_sig55FB);
    return Object.values(var_core_value_sig55FB.tables).filter(var_core_value_sig611A => !var_core_value_sig6788 || var_core_value_sig6788.has(var_core_value_sig611A.id)).forEach(var_core_value_sig6BD9 => {
      let var_core_value_sig7E56 = this.createSuperTableReference(var_core_value_sig6BD9, var_core_value_sig6BD9.id);
      var_core_value_sigC865.push({
        'tableId': var_core_value_sig6BD9.id,
        'tableName': var_core_value_sig7B1F.get(var_core_value_sig6BD9.id),
        'reference': var_core_value_sig7E56
      });
    }), var_core_value_sigC865;
  }
  validateFormula(var_core_value_sig7E51, var_core_value_sigAE87, var_core_value_sigFD51 = {}) {
    let var_core_value_sigF6D6 = var_core_value_sig7E51.trim();
    if (!var_core_value_sigF6D6) return {
      'valid': true
    };
    if (Qi(var_core_value_sigF6D6)) return {
      'valid': false,
      'reason': "[BaseFormula]: A1 references and ranges are not supported in Base formulas."
    };
    let var_core_value_sigCF95 = var_core_value_sigFD51.snapshot ? var_core_value_sigBD2F(var_core_value_sigFD51.snapshot) : undefined;
    for (let var_core_value_sig4161 of Zi(var_core_value_sigF6D6)) {
      let var_core_value_sigF564 = oa(var_core_value_sig4161, var_core_value_sigAE87, var_core_value_sigFD51.snapshot, var_core_value_sigCF95);
      if (!var_core_value_sigF564.table) return {
        'valid': false,
        'reason': "[BaseFormula]: table \"" + var_core_value_sig4161.tableName + "\" does not exist. Use FBaseTable.getFormulaName() or getSchema().formulaName for structured references."
      };
      if (!var_core_value_sigF564.field) return {
        'valid': false,
        'reason': "[BaseFormula]: field \"" + var_core_value_sig4161.fieldName + '\x22\x20does\x20not\x20exist.'
      };
    }
    return {
      'valid': true
    };
  }
  getDependencies(var_core_value_sig8793, var_core_value_sig1BE7, var_core_value_sig34F8 = {}) {
    let var_core_value_sig9F3D = new Set();
    for (let var_core_value_sig7580 of this.getStructuredDependencies(var_core_value_sig8793, var_core_value_sig1BE7, var_core_value_sig34F8)) var_core_value_sig7580.tableId === var_core_value_sig1BE7.id && var_core_value_sig9F3D.add(var_core_value_sig7580.fieldId);
    return Array.from(var_core_value_sig9F3D);
  }
  getStructuredDependencies(var_core_value_sig785C, var_core_value_sig6537, var_core_value_sig72BB = {}) {
    let var_core_value_sigC0DF = new Map(),
      var_core_value_sig94B7 = var_core_value_sig72BB.snapshot ? var_core_value_sigBD2F(var_core_value_sig72BB.snapshot) : undefined;
    for (let var_core_value_sig1F18 of Zi(var_core_value_sig785C)) {
      let var_core_value_sig8CFA = oa(var_core_value_sig1F18, var_core_value_sig6537, var_core_value_sig72BB.snapshot, var_core_value_sig94B7);
      if (!var_core_value_sig8CFA.table || !var_core_value_sig8CFA.field) continue;
      let var_core_value_sig2E11 = var_core_value_sig8CFA.table['id'] + '\x1f' + var_core_value_sig8CFA.field['id'];
      var_core_value_sigC0DF.set(var_core_value_sig2E11, {
        'tableId': var_core_value_sig8CFA.table['id'],
        'fieldId': var_core_value_sig8CFA.field['id']
      });
    }
    return Array.from(var_core_value_sigC0DF.values());
  }
};
function qi(var_core_value_sigBFDA, var_core_value_sig995C) {
  var var_core_value_sig364B;
  let var_core_value_sig2C9F = [],
    var_core_value_sig4133 = (var_core_value_sig364B = var_core_value_sig995C.unitData) == null ? undefined : var_core_value_sig364B[var_core_value_sigBFDA.id];
  return var_core_value_sig4133 && Object.entries(var_core_value_sig4133).forEach(([var_core_value_sig9865, var_core_value_sigA09D]) => {
    let var_core_value_sig1429 = var_core_value_sigBFDA.tables[var_core_value_sig9865];
    if (!var_core_value_sig1429 || !var_core_value_sigA09D) return;
    let var_core_value_sigA339 = I(var_core_value_sig1429),
      var_core_value_sig832A = [];
    new var_core_value_sigAEF6(var_core_value_sigA09D).forValue((var_core_value_sigD5A0, var_core_value_sig81B2, var_core_value_sigA0A5) => {
      let var_core_value_sig10AA = Ji(var_core_value_sigA339, var_core_value_sigD5A0, var_core_value_sig81B2, var_core_value_sigA0A5);
      var_core_value_sig10AA && var_core_value_sig832A.push(var_core_value_sig10AA);
    }), var_core_value_sig832A.length && var_core_value_sig2C9F.push({
      'unitId': var_core_value_sigBFDA.id,
      'tableId': var_core_value_sig9865,
      'patches': var_core_value_sig832A
    });
  }), var_core_value_sig2C9F;
}
;
function Ji(var_core_value_sig8333, var_core_value_sigB171, var_core_value_sigA6AB, var_core_value_sigDC81) {
  var var_core_value_sig6378, var_core_value_sig3C58, var_core_value_sig1D57;
  let var_core_value_sig45F01 = (var_core_value_sig6378 = var_core_value_sig8333.rowId) == null ? undefined : var_core_value_sig6378[var_core_value_sigB171],
    var_core_value_sig7AFB = (var_core_value_sig3C58 = var_core_value_sig8333.colId) == null ? undefined : var_core_value_sig3C58[var_core_value_sigA6AB];
  if (!var_core_value_sig45F01 || !var_core_value_sig8333.records[var_core_value_sig45F01] || !var_core_value_sig7AFB) return null;
  let var_core_value_sig54CD = var_core_value_sig8333.fields[var_core_value_sig7AFB];
  if (!var_core_value_sig54CD || var_core_value_sig54CD.type !== 'formula') return null;
  let var_core_value_sigF4AD = String(((var_core_value_sig1D57 = var_core_value_sig54CD.config) == null ? undefined : var_core_value_sig1D57.formula) ?? '').trim(),
    var_core_value_sigF802 = (var_core_value_sigDC81 == null ? undefined : var_core_value_sigDC81.v) ?? null,
    var_core_value_sig90E4 = {
      'v': var_core_value_sigF802,
      't': Xi(var_core_value_sigF802),
      ...(var_core_value_sigB171 === 0 && var_core_value_sigF4AD ? {
        'f': var_core_value_sigF4AD
      } : {}),
      'si': var_core_value_sig54CD.id
    };
  return Yi(ht(var_core_value_sig8333, var_core_value_sig45F01, var_core_value_sig7AFB), var_core_value_sig90E4) ? null : {
    'row': var_core_value_sigB171,
    'col': var_core_value_sigA6AB,
    'value': var_core_value_sig90E4
  };
}
;
function Yi(var_core_value_sig23B5, var_core_value_sigB560) {
  return var_core_value_sig23B5 != null && Object.is(var_core_value_sig23B5.v ?? null, var_core_value_sigB560.v ?? null) && var_core_value_sig23B5.t === var_core_value_sigB560.t && var_core_value_sig23B5.f === var_core_value_sigB560.f && var_core_value_sig23B5.si === var_core_value_sigB560.si;
}
;
function Xi(var_core_value_sigB46F) {
  return typeof var_core_value_sigB46F == "number" ? var_core_value_sig590D.NUMBER : typeof var_core_value_sigB46F == "boolean" ? var_core_value_sig590D.BOOLEAN : typeof var_core_value_sigB46F == 'string' ? var_core_value_sig590D.STRING : null;
}
;
function Zi(var_core_value_sig440F) {
  let var_core_value_sigB857 = ea(var_core_value_sig440F, () => ''),
    var_core_value_sig0743 = new Map(),
    var_core_value_sigFDAF = var_core_value_sig7945 => {
      var_core_value_sig0743.set((var_core_value_sig7945.tableName ?? '') + '\x1f' + var_core_value_sig7945.fieldName, var_core_value_sig7945);
    };
  for (let var_core_value_sig1166 of var_core_value_sigB857.matchAll(zi)) var_core_value_sigFDAF({
    'fieldName': var_core_value_sig1166[1],
    'scope': "this-row"
  });
  var_core_value_sigB857 = var_core_value_sigB857.replace(Bi, (var_core_value_sig7ABC, var_core_value_sigF686, var_core_value_sigDFF0, var_core_value_sig01301) => (var_core_value_sigFDAF({
    'tableName': var_core_value_sigF686,
    'fieldName': var_core_value_sig01301,
    'scope': var_core_value_sigDFF0.toLowerCase() === 'data' ? "data" : 'this-row'
  }), '\x20')), var_core_value_sigB857 = var_core_value_sigB857.replace(Vi, (var_core_value_sigFD90, var_core_value_sig702C, var_core_value_sig03A4) => (var_core_value_sigFDAF({
    'tableName': var_core_value_sig702C,
    'fieldName': var_core_value_sig03A4,
    'scope': "this-row"
  }), '\x20')), var_core_value_sigB857 = var_core_value_sigB857.replace(Ui, (var_core_value_sigB6F5, var_core_value_sig82931, var_core_value_sig43AE, var_core_value_sigEF2E) => (var_core_value_sigFDAF({
    'fieldName': var_core_value_sigEF2E,
    'scope': var_core_value_sig43AE.toLowerCase() === 'data' ? 'data' : "this-row"
  }), var_core_value_sig82931 + '\x20')), var_core_value_sigB857 = var_core_value_sigB857.replace(Wi, (var_core_value_sigD83C, var_core_value_sigAC2B, var_core_value_sigFBBE) => (var_core_value_sigFDAF({
    'fieldName': var_core_value_sigFBBE,
    'scope': 'this-row'
  }), var_core_value_sigAC2B + '\x20'));
  for (let var_core_value_sigC982 of var_core_value_sigB857.matchAll(Hi)) var_core_value_sigFDAF({
    'tableName': var_core_value_sigC982[1],
    'fieldName': var_core_value_sigC982[2]
  });
  for (let var_core_value_sig59DA of var_core_value_sigB857.matchAll(Gi)) var_core_value_sigFDAF({
    'fieldName': var_core_value_sig59DA[2],
    'scope': "this-row"
  });
  return Array.from(var_core_value_sig0743.values());
}
;
function Qi(var_core_value_sigFC34) {
  let var_core_value_sig162E = ea(var_core_value_sigFC34, () => '\x20').replace(zi, '\x20').replace(Bi, '\x20').replace(Vi, '\x20').replace(Ui, "$1 ").replace(Wi, "$1 ").replace(Hi, '\x20').replace(Gi, "$1 ");
  return Li.test(var_core_value_sig162E);
}
;
function $i(var_core_value_sigB564, var_core_value_sig5989) {
  return ia(na(var_core_value_sigB564, var_core_value_sig5989), var_core_value_sig5989);
}
;
function ea(var_core_value_sigC36D, var_core_value_sig580E) {
  return ta($i(var_core_value_sigC36D, var_core_value_sig580E), var_core_value_sig580E);
}
;
function ta(var_core_value_sigF338, var_core_value_sig6EEE) {
  return var_core_value_sigF338.replace(/"(?:""|[^"])*"/g, var_core_value_sig6EEE);
}
;
function na(var_core_value_sigC0CF, var_core_value_sig10D4) {
  return Ri.lastIndex = 0, var_core_value_sigC0CF.replace(Ri, (var_core_value_sig3002, var_core_value_sig33D2) => aa(var_core_value_sigC0CF, var_core_value_sig33D2) ? var_core_value_sig3002 : var_core_value_sig10D4(var_core_value_sig3002));
}
const ra = /(?:'((?:[^']|'')+)'|\[[^\]]+\]|[A-Za-z0-9_.-]+)![^\s!\[\]]+\[/g;
function ia(var_core_value_sigE597, var_core_value_sig4C3E) {
  let var_core_value_sig616D = [];
  for (ra.lastIndex = 0;;) {
    let var_core_value_sigE6D0 = ra.exec(var_core_value_sigE597);
    if (var_core_value_sigE6D0 == null) break;
    if (aa(var_core_value_sigE597, var_core_value_sigE6D0.index)) continue;
    let var_core_value_sig8E91 = ra.lastIndex - 1,
      var_core_value_sig00BE = 0;
    for (let var_core_value_sig5B69 = var_core_value_sig8E91; var_core_value_sig5B69 < var_core_value_sigE597.length; var_core_value_sig5B69++) if (var_core_value_sigE597[var_core_value_sig5B69] === '[' && var_core_value_sig00BE++, var_core_value_sigE597[var_core_value_sig5B69] === ']' && (var_core_value_sig00BE--, var_core_value_sig00BE === 0)) {
      var_core_value_sig616D.push({
        'start': var_core_value_sigE6D0.index,
        'end': var_core_value_sig5B69 + 1
      }), ra.lastIndex = var_core_value_sig5B69 + 1;
      break;
    }
  }
  if (var_core_value_sig616D.length === 0) return var_core_value_sigE597;
  let var_core_value_sig0F8A = '',
    var_core_value_sig2FD4 = 0;
  for (let var_core_value_sig8D4A of var_core_value_sig616D) var_core_value_sig0F8A += var_core_value_sigE597.slice(var_core_value_sig2FD4, var_core_value_sig8D4A.start), var_core_value_sig0F8A += var_core_value_sig4C3E(var_core_value_sigE597.slice(var_core_value_sig8D4A.start, var_core_value_sig8D4A.end)), var_core_value_sig2FD4 = var_core_value_sig8D4A.end;
  return var_core_value_sig0F8A + var_core_value_sigE597.slice(var_core_value_sig2FD4);
}
;
function aa(var_core_value_sig9AF9, var_core_value_sig662D) {
  let var_core_value_sig1452 = false;
  for (let var_core_value_sigB5D7 = 0; var_core_value_sigB5D7 < var_core_value_sig662D; var_core_value_sigB5D7++) if (var_core_value_sig9AF9[var_core_value_sigB5D7] === '\x22') {
    if (var_core_value_sig1452 && var_core_value_sig9AF9[var_core_value_sigB5D7 + 1] === '\x22') {
      var_core_value_sigB5D7++;
      continue;
    }
    var_core_value_sig1452 = !var_core_value_sig1452;
  }
  return var_core_value_sig1452;
}
;
function oa(var_core_value_sig6050, var_core_value_sig896E, var_core_value_sig6D9B, var_core_value_sig9425) {
  let var_core_value_sigCE16 = sa(var_core_value_sig6050.tableName, var_core_value_sig896E, var_core_value_sig6D9B, var_core_value_sig9425);
  return {
    'table': var_core_value_sigCE16,
    'field': var_core_value_sigCE16 ? Object.values(var_core_value_sigCE16.fields).find(var_core_value_sig797B => var_core_value_sig797B.name === var_core_value_sig6050.fieldName) : undefined
  };
}
;
function sa(var_core_value_sig0207, var_core_value_sig5FE7, var_core_value_sig5BA5, var_core_value_sig4F79) {
  if (!var_core_value_sig0207) return var_core_value_sig5FE7;
  if (!var_core_value_sig5BA5) {
    var var_core_value_sig2BD8;
    let var_core_value_sig5094 = var_core_value_sig0207.toLowerCase();
    return var_core_value_sig5094 === var_core_value_sig5FE7.id['toLowerCase']() || var_core_value_sig5094 === var_core_value_sig5FE7.name['toLowerCase']() || var_core_value_sig5094 === ((var_core_value_sig2BD8 = var_core_value_sig5FE7.formulaName) == null ? undefined : var_core_value_sig2BD8.toLowerCase()) ? var_core_value_sig5FE7 : undefined;
  }
  let var_core_value_sigC182 = var_core_value_sig0207.toLowerCase(),
    var_core_value_sig1373 = var_core_value_sig4F79 ?? var_core_value_sigBD2F(var_core_value_sig5BA5),
    var_core_value_sig2D20 = Object.values(var_core_value_sig5BA5.tables).filter(var_core_value_sig8883 => {
      var var_core_value_sig488F;
      return var_core_value_sig8883.id['toLowerCase']() === var_core_value_sigC182 || var_core_value_sig8883.name['toLowerCase']() === var_core_value_sigC182 || ((var_core_value_sig488F = var_core_value_sig1373.get(var_core_value_sig8883.id)) == null ? undefined : var_core_value_sig488F.toLowerCase()) === var_core_value_sigC182 || ca(var_core_value_sig8883.id).toLowerCase() === var_core_value_sigC182;
    });
  return var_core_value_sig2D20.length === 1 ? var_core_value_sig2D20[0] : undefined;
}
;
function ca(var_core_value_sigB4E5) {
  return "_T_" + Array.from(var_core_value_sigB4E5, var_core_value_sigB4401 => {
    var var_core_value_sigF5CC;
    return /[A-Za-z0-9]/["test"](var_core_value_sigB4401) ? var_core_value_sigB4401 : '_x' + (((var_core_value_sigF5CC = var_core_value_sigB4401.codePointAt(0)) == null ? undefined : var_core_value_sigF5CC.toString(16)) ?? '0') + '_';
  }).join('');
}
const la = new Ki();
function ua(var_core_value_sigA9C9, var_core_value_sigDA64, var_core_value_sigBE3F) {
  var var_core_value_sig072F;
  if (var_core_value_sigBE3F.type !== var_core_value_sig06E6.Formula) return true;
  let var_core_value_sigD794 = String(((var_core_value_sig072F = var_core_value_sigBE3F.config) == null ? undefined : var_core_value_sig072F.formula) ?? ''),
    var_core_value_sigCB821 = var_core_value_sigA9C9.getSnapshot();
  return la.validateFormula(var_core_value_sigD794, var_core_value_sigCB821.tables[var_core_value_sigDA64], {
    'snapshot': var_core_value_sigCB821
  }).valid;
}
;
function $(var_core_value_sigB67E, var_core_value_sig7504, var_core_value_sigC2EA) {
  let var_core_value_sigC733 = var_core_value_sigB67E.getSnapshot().tables[var_core_value_sig7504];
  if (!var_core_value_sigC733) return false;
  let {
    viewIds: var_core_value_sig9E26,
    fieldIds: var_core_value_sig6B84,
    recordIds: var_core_value_sig2D04
  } = var_core_value_sigC2EA || {};
  if (var_core_value_sig9E26) {
    for (let var_core_value_sig7BB5 of var_core_value_sig9E26) if (!var_core_value_sigC733.views[var_core_value_sig7BB5]) return false;
  }
  if (var_core_value_sig6B84) {
    for (let var_core_value_sig6AAD of var_core_value_sig6B84) if (!var_core_value_sigC733.fields[var_core_value_sig6AAD]) return false;
  }
  if (var_core_value_sig2D04) {
    for (let var_core_value_sig1157 of var_core_value_sig2D04) if (!var_core_value_sigC733.records[var_core_value_sig1157]) return false;
  }
  return true;
}
;
function da(var_core_value_sigD3D6, var_core_value_sig5BE71, var_core_value_sigFD72) {
  if (var_core_value_sigFD72.id === var_core_value_sigED20 || var_core_value_sigFD72.type === var_core_value_sig06E6.RecordId || var_core_value_sigEFBE(var_core_value_sigFD72.name) || !ua(var_core_value_sigD3D6, var_core_value_sig5BE71, var_core_value_sigFD72)) return false;
  let var_core_value_sig3FA8 = var_core_value_sigD3D6.getSnapshot();
  if (!Le(var_core_value_sig3FA8, var_core_value_sigFD72).valid) return false;
  if (var_core_value_sigFD72.type !== var_core_value_sig06E6.RecordLink) return true;
  let var_core_value_sig4749 = M(var_core_value_sigFD72);
  if (!var_core_value_sig4749) return false;
  if (var_core_value_sig4749.relationRole === undefined) return true;
  if (var_core_value_sig4749.relationRole !== var_core_value_sig9D84.Parent || var_core_value_sig4749.targetTableId !== var_core_value_sig5BE71 || var_core_value_sig4749.multiple !== false) return false;
  let var_core_value_sig5D76 = var_core_value_sig3FA8.tables[var_core_value_sig5BE71];
  return !Object.values(var_core_value_sig5D76.fields).some(var_core_value_sigA1B6 => {
    var var_core_value_sig66A0;
    return var_core_value_sigA1B6.id !== var_core_value_sigFD72.id && var_core_value_sigA1B6.type === var_core_value_sig06E6.RecordLink && ((var_core_value_sig66A0 = M(var_core_value_sigA1B6)) == null ? undefined : var_core_value_sig66A0.relationRole) === var_core_value_sig9D84.Parent;
  });
}
;
function fa(var_core_value_sigB8B6, var_core_value_sig93DE, var_core_value_sigA278, var_core_value_sig4263) {
  var var_core_value_sig5B46;
  let var_core_value_sig1533 = var_core_value_sigB8B6.getSnapshot(),
    var_core_value_sig8C06 = (var_core_value_sig5B46 = var_core_value_sig1533.tables[var_core_value_sig93DE]) == null ? undefined : var_core_value_sig5B46.fields[var_core_value_sigA278];
  return !var_core_value_sig8C06 || var_core_value_sig8C06.id === var_core_value_sigED20 || var_core_value_sig8C06.type === var_core_value_sig06E6.RecordId ? false : var_core_value_sig8C06.type !== var_core_value_sig06E6.RecordLink || Re(var_core_value_sig1533, var_core_value_sig8C06, ha(var_core_value_sig4263)).valid;
}
;
function pa(var_core_value_sig04F0, var_core_value_sigCDD1, var_core_value_sig6C50) {
  let var_core_value_sig7926 = var_core_value_sig04F0.getSnapshot().tables[var_core_value_sigCDD1];
  return !var_core_value_sig7926 || !var_core_value_sigBBED(var_core_value_sig6C50.id) || var_core_value_sig7926.records[var_core_value_sig6C50.id] || Object.prototype['hasOwnProperty'].call(var_core_value_sig6C50.values, var_core_value_sigED20) && var_core_value_sig6C50.values[var_core_value_sigED20] !== var_core_value_sig6C50.id ? false : Object.entries(var_core_value_sig6C50.values).every(([var_core_value_sig7876, var_core_value_sig2C69]) => var_core_value_sig7876 === var_core_value_sigED20 || fa(var_core_value_sig04F0, var_core_value_sigCDD1, var_core_value_sig7876, var_core_value_sig2C69));
}
;
function ma(var_core_value_sig88B3) {
  return {
    ...var_core_value_sig88B3,
    'values': {
      ...var_core_value_sig88B3.values,
      [var_core_value_sigED20]: var_core_value_sig88B3.id
    }
  };
}
;
function ha(var_core_value_sig6044) {
  if (var_core_value_sig6044 && typeof var_core_value_sig6044 == "object" && !Array.isArray(var_core_value_sig6044) && 'v' in var_core_value_sig6044) {
    let var_core_value_sigAF19 = var_core_value_sig6044.v;
    return var_core_value_sigAF19 === undefined ? null : var_core_value_sigAF19;
  }
  return var_core_value_sig6044;
}
;
function ga(var_core_value_sigEE54, var_core_value_sigBC8E, var_core_value_sig65B41, var_core_value_sig38F9) {
  let var_core_value_sig4EFC = var_core_value_sigEE54.getSnapshot().tables[var_core_value_sigBC8E];
  if (!var_core_value_sig4EFC) return null;
  let var_core_value_sigB70F = We(var_core_value_sig4EFC),
    var_core_value_sig50E51 = var_core_value_sigB70F ?? Ge(var_core_value_sig4EFC),
    var_core_value_sig8AD2 = var_core_value_sig65B41.some(var_core_value_sigCE75 => Object.prototype["hasOwnProperty"].call(var_core_value_sigCE75.values, var_core_value_sig50E51)),
    var_core_value_sigEF27 = var_core_value_sigB70F ? var_core_value_sig4EFC.fields[var_core_value_sigB70F] : var_core_value_sig8AD2 ? Ke(var_core_value_sig4EFC, var_core_value_sig50E51, var_core_value_sig38F9) : null,
    var_core_value_sigD45F = [];
  for (let var_core_value_sigF27A of var_core_value_sig65B41) {
    let var_core_value_sigA694 = var_core_value_sigF27A.values[var_core_value_sig50E51],
      var_core_value_sig18E01 = var_core_value_sigEF27 !== null && Object.prototype['hasOwnProperty'].call(var_core_value_sigF27A.values, var_core_value_sig50E51),
      var_core_value_sig0428 = ha(var_core_value_sigA694),
      var_core_value_sigBE07 = null;
    if (var_core_value_sig18E01) {
      if (typeof var_core_value_sig0428 != 'string' || !Ie(var_core_value_sig0428, false).valid) return null;
      var_core_value_sigBE07 = var_core_value_sig0428;
    }
    let var_core_value_sig555F = {};
    if (Object.entries(var_core_value_sigF27A.values).forEach(([var_core_value_sigB098, var_core_value_sigCE71]) => {
      (!var_core_value_sig18E01 || var_core_value_sigB098 !== var_core_value_sig50E51) && (var_core_value_sig555F[var_core_value_sigB098] = var_core_value_sigCE71);
    }), !pa(var_core_value_sigEE54, var_core_value_sigBC8E, {
      ...var_core_value_sigF27A,
      'values': var_core_value_sig555F
    })) return null;
    let var_core_value_sig3D6F = {
      ...var_core_value_sigF27A.values
    };
    var_core_value_sigBE07 !== null && (var_core_value_sig3D6F[var_core_value_sig50E51] = var_core_value_sigBE07), var_core_value_sigD45F.push(ma({
      ...var_core_value_sigF27A,
      'values': var_core_value_sig3D6F
    }));
  }
  return {
    'records': var_core_value_sigD45F,
    'hierarchyFieldToMaterialize': var_core_value_sigB70F ? null : var_core_value_sigEF27,
    'hierarchyChanges': Ye(var_core_value_sig4EFC, var_core_value_sigD45F)
  };
}
const _a = {
    'id': "base.command.batch-create-base-records",
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig9764, var_core_value_sig397B) {
      if (!var_core_value_sig397B) return false;
      let var_core_value_sigC2FF = var_core_value_sig9764.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig8A75,
          tableId: var_core_value_sigCA67,
          records: var_core_value_sigDFDA
        } = var_core_value_sig397B,
        var_core_value_sigEAA1 = var_core_value_sigC2FF.getUnit(var_core_value_sig8A75, var_core_value_sigE2E8.UNIVER_BASE),
        var_core_value_sig77BA = var_core_value_sigDFDA.map(var_core_value_sig47B3 => var_core_value_sig47B3.id);
      if (!var_core_value_sigEAA1 || !$(var_core_value_sigEAA1, var_core_value_sigCA67) || new Set(var_core_value_sig77BA).size !== var_core_value_sig77BA.length) return false;
      let var_core_value_sig9ED0 = var_core_value_sig9764.get(var_core_value_sig4AEF),
        var_core_value_sigB650 = var_core_value_sig9764.get(var_core_value_sig5EB1),
        var_core_value_sig74A81 = var_core_value_sig9764.get(X),
        var_core_value_sigC129 = var_core_value_sigEAA1.getSnapshot(),
        var_core_value_sig59D5 = ga(var_core_value_sigEAA1, var_core_value_sigCA67, var_core_value_sigDFDA);
      if (!var_core_value_sig59D5) return false;
      let {
          records: var_core_value_sig7A96,
          hierarchyChanges: var_core_value_sigD72E,
          hierarchyFieldToMaterialize: var_core_value_sig3E1F
        } = var_core_value_sig59D5,
        var_core_value_sig7D3E = var_core_value_sig3E1F ? var_core_value_sig74A81.createCreateFieldOp(var_core_value_sigEAA1, var_core_value_sigCA67, var_core_value_sig3E1F, var_core_value_sigC129.tables[var_core_value_sigCA67].fieldOrder["length"]) : null,
        var_core_value_sig9D1B = var_core_value_sig74A81.createBatchCreateRecordsOp(var_core_value_sigEAA1, var_core_value_sigCA67, var_core_value_sig7A96),
        var_core_value_sigC043 = L([...(var_core_value_sig7D3E ? [var_core_value_sig7D3E] : []), var_core_value_sig9D1B]),
        var_core_value_sig12F21 = new R().invertOp(var_core_value_sigC129, var_core_value_sigC043),
        var_core_value_sig3B28 = {
          'unitId': var_core_value_sig8A75,
          'op': var_core_value_sigC043,
          'hierarchyChanges': var_core_value_sigD72E.length ? var_core_value_sigD72E : undefined,
          'source': var_core_value_sigD72E.length ? var_core_value_sig397B.source ?? 'ui' : undefined
        },
        var_core_value_sig9789 = {
          ...var_core_value_sig3B28,
          'source': var_core_value_sigD72E.length ? "redo" : undefined
        },
        var_core_value_sig8475 = {
          'unitId': var_core_value_sig8A75,
          'op': var_core_value_sig12F21,
          'hierarchyChanges': var_core_value_sigD72E.length ? var_core_value_sigD72E.map(var_core_value_sig5E75 => ({
            ...var_core_value_sig5E75,
            'oldParentRecordId': var_core_value_sig5E75.parentRecordId,
            'parentRecordId': null
          })) : undefined,
          'source': var_core_value_sigD72E.length ? "undo" : undefined
        };
      return var_core_value_sig9ED0.syncExecuteCommand(Q.id, var_core_value_sig3B28) ? (var_core_value_sigC2FF.focusUnit(var_core_value_sig8A75), var_core_value_sigB650.pushUndoRedo({
        'unitID': var_core_value_sig8A75,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig8475
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig9789
        }]
      }), true) : false;
    }
  },
  va = {
    'id': "base.command.batch-delete-base-records",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig88B7, var_core_value_sigB177) => {
      if (!var_core_value_sigB177) return false;
      let var_core_value_sig9946 = var_core_value_sig88B7.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig731A,
          tableId: var_core_value_sig8E75,
          recordIds: var_core_value_sigF462
        } = var_core_value_sigB177,
        var_core_value_sigF519 = var_core_value_sig9946.getUnit(var_core_value_sig731A, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sigF519 || !$(var_core_value_sigF519, var_core_value_sig8E75, {
        'recordIds': var_core_value_sigF462
      })) return false;
      let var_core_value_sig80A1 = var_core_value_sig88B7.get(var_core_value_sig4AEF),
        var_core_value_sigA8D7 = var_core_value_sig88B7.get(var_core_value_sig5EB1),
        var_core_value_sig5BB8 = var_core_value_sigF519.getSnapshot(),
        var_core_value_sig784F = Ze(var_core_value_sig5BB8.tables[var_core_value_sig8E75], var_core_value_sigF462),
        var_core_value_sig29001 = new U(),
        var_core_value_sigF735 = new R(),
        var_core_value_sig893C = var_core_value_sig29001.deleteRecords(var_core_value_sig5BB8, var_core_value_sig8E75, var_core_value_sigF462),
        var_core_value_sigE82D = var_core_value_sigF735.applyOp(var_core_value_sig5BB8, var_core_value_sig893C),
        var_core_value_sig014E = var_core_value_sig29001.createDeleteRecordsUndoOp(var_core_value_sig5BB8, var_core_value_sigE82D, var_core_value_sig8E75, var_core_value_sigF462),
        var_core_value_sig57A3 = {
          'unitId': var_core_value_sig731A,
          'op': var_core_value_sig893C,
          'hierarchyChanges': var_core_value_sig784F,
          'source': var_core_value_sigB177.source ?? 'ui'
        },
        var_core_value_sig4003 = {
          ...var_core_value_sig57A3,
          'source': "redo"
        },
        var_core_value_sig9454 = {
          'unitId': var_core_value_sig731A,
          'op': var_core_value_sig014E,
          'hierarchyChanges': var_core_value_sig784F.map(var_core_value_sigC266 => ({
            ...var_core_value_sigC266,
            'oldParentRecordId': var_core_value_sigC266.parentRecordId,
            'parentRecordId': var_core_value_sigC266.oldParentRecordId
          })),
          'source': "undo"
        };
      return var_core_value_sig80A1.syncExecuteCommand(Q.id, var_core_value_sig57A3) ? (var_core_value_sig9946.focusUnit(var_core_value_sig731A), var_core_value_sigA8D7.pushUndoRedo({
        'unitID': var_core_value_sig731A,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig9454
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig4003
        }]
      }), true) : false;
    }
  },
  ya = {
    'id': "base.command.change-base-field-type",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig9B63, var_core_value_sigA86B) => {
      if (!var_core_value_sigA86B) return false;
      let var_core_value_sig8CE0 = var_core_value_sig9B63.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig2D89,
          tableId: var_core_value_sig08CE,
          fieldId: var_core_value_sig5C06,
          input: var_core_value_sigA267
        } = var_core_value_sigA86B,
        var_core_value_sig9E58 = var_core_value_sig8CE0.getUnit(var_core_value_sig2D89, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig9E58 || var_core_value_sig5C06 === var_core_value_sigED20 || !$(var_core_value_sig9E58, var_core_value_sig08CE, {
        'fieldIds': [var_core_value_sig5C06]
      })) return false;
      let var_core_value_sigD105 = var_core_value_sig9B63.get(var_core_value_sig4AEF),
        var_core_value_sig6F7E = var_core_value_sig9B63.get(var_core_value_sig5EB1),
        var_core_value_sig3F21 = var_core_value_sig9E58.getSnapshot();
      if (!da(var_core_value_sig9E58, var_core_value_sig08CE, {
        ...var_core_value_sig3F21.tables[var_core_value_sig08CE].fields[var_core_value_sig5C06],
        ...var_core_value_sigA267
      })) return false;
      let var_core_value_sig22FF = new U().changeFieldType(var_core_value_sig3F21, var_core_value_sig08CE, var_core_value_sig5C06, var_core_value_sigA267),
        var_core_value_sig3189 = new R().invertOp(var_core_value_sig3F21, var_core_value_sig22FF),
        var_core_value_sigA5F8 = {
          'unitId': var_core_value_sig2D89,
          'op': var_core_value_sig22FF
        },
        var_core_value_sigA71A = {
          'unitId': var_core_value_sig2D89,
          'op': var_core_value_sig3189
        };
      return var_core_value_sigD105.syncExecuteCommand(Q.id, var_core_value_sigA5F8) ? (var_core_value_sig8CE0.focusUnit(var_core_value_sig2D89), var_core_value_sig6F7E.pushUndoRedo({
        'unitID': var_core_value_sig2D89,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigA71A
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigA5F8
        }]
      }), true) : false;
    }
  },
  ba = {
    'id': 'base.command.create-base-child-record',
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig11F1, var_core_value_sigA71D) {
      var var_core_value_sig669B;
      if (!var_core_value_sigA71D) return false;
      let {
          unitId: var_core_value_sig04611,
          tableId: var_core_value_sig4A6A,
          parentRecordId: var_core_value_sig52B7
        } = var_core_value_sigA71D,
        var_core_value_sig5BA8 = var_core_value_sig11F1.get(var_core_value_sig5B68),
        var_core_value_sig6CA3 = var_core_value_sig5BA8.getUnit(var_core_value_sig04611, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig6CA3 || !$(var_core_value_sig6CA3, var_core_value_sig4A6A, {
        'recordIds': [var_core_value_sig52B7]
      })) throw new N("missingRecord");
      let var_core_value_sig489C = var_core_value_sig6CA3.getSnapshot(),
        var_core_value_sig9BF2 = var_core_value_sig489C.tables[var_core_value_sig4A6A],
        var_core_value_sigAD59 = We(var_core_value_sig9BF2),
        var_core_value_sigD8D7 = var_core_value_sigAD59 ?? var_core_value_sigA71D.fieldId ?? Ge(var_core_value_sig9BF2);
      if (var_core_value_sigAD59 && var_core_value_sigA71D.fieldId && var_core_value_sigA71D.fieldId !== var_core_value_sigAD59 || var_core_value_sig9BF2.fields[var_core_value_sigD8D7] && !P(var_core_value_sig9BF2, var_core_value_sigD8D7)) throw new N("invalidField");
      if ((Qe(var_core_value_sig9BF2, var_core_value_sigD8D7).depthByRecordId["get"](var_core_value_sig52B7) ?? 0) + 1 >= 5) throw new N("maxDepth");
      if (!pa(var_core_value_sig6CA3, var_core_value_sig4A6A, var_core_value_sigA71D.record)) return false;
      let var_core_value_sigDD66 = ma({
          ...var_core_value_sigA71D.record,
          'values': {
            ...var_core_value_sigA71D.record["values"],
            [var_core_value_sigD8D7]: Fe([var_core_value_sig52B7])
          }
        }),
        var_core_value_sigDCB6 = var_core_value_sig11F1.get(X),
        var_core_value_sigA346 = new U(),
        var_core_value_sigDB37 = var_core_value_sig9BF2.fields[var_core_value_sigD8D7],
        var_core_value_sig2400 = var_core_value_sigDB37 ? ((var_core_value_sig669B = M(var_core_value_sigDB37)) == null ? undefined : var_core_value_sig669B.relationRole) === var_core_value_sig9D84.Parent ? null : var_core_value_sigA346.updateField(var_core_value_sig489C, var_core_value_sig4A6A, var_core_value_sigD8D7, {
          'config': {
            ...var_core_value_sigDB37.config,
            'relationRole': var_core_value_sig9D84.Parent
          }
        }) : var_core_value_sigDCB6.createCreateFieldOp(var_core_value_sig6CA3, var_core_value_sig4A6A, Ke(var_core_value_sig9BF2, var_core_value_sigD8D7, var_core_value_sigA71D.parentFieldName), var_core_value_sig9BF2.fieldOrder['length']),
        var_core_value_sig33E7 = var_core_value_sigDCB6.createCreateRecordOp(var_core_value_sig6CA3, var_core_value_sig4A6A, var_core_value_sigDD66),
        var_core_value_sigCBAB = L([...(var_core_value_sig2400 ? [var_core_value_sig2400] : []), var_core_value_sig33E7]),
        var_core_value_sigE3A5 = new R().invertOp(var_core_value_sig489C, var_core_value_sigCBAB),
        var_core_value_sig500F = {
          'tableId': var_core_value_sig4A6A,
          'fieldId': var_core_value_sigD8D7,
          'recordId': var_core_value_sigDD66.id,
          'oldParentRecordId': null,
          'parentRecordId': var_core_value_sig52B7
        },
        var_core_value_sig2D30 = {
          'unitId': var_core_value_sig04611,
          'op': var_core_value_sigCBAB,
          'trigger': ba.id,
          'hierarchyChanges': [var_core_value_sig500F],
          'source': var_core_value_sigA71D.source ?? 'ui'
        },
        var_core_value_sig94E7 = {
          ...var_core_value_sig2D30,
          'source': 'redo'
        },
        var_core_value_sig7A7B = {
          'unitId': var_core_value_sig04611,
          'op': var_core_value_sigE3A5,
          'trigger': ba.id,
          'hierarchyChanges': [{
            ...var_core_value_sig500F,
            'oldParentRecordId': var_core_value_sig52B7,
            'parentRecordId': null
          }],
          'source': "undo"
        };
      return var_core_value_sig11F1.get(var_core_value_sig4AEF).syncExecuteCommand(Q.id, var_core_value_sig2D30) ? (var_core_value_sig5BA8.focusUnit(var_core_value_sig04611), var_core_value_sig11F1.get(var_core_value_sig5EB1).pushUndoRedo({
        'unitID': var_core_value_sig04611,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig7A7B
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig94E7
        }]
      }), true) : false;
    }
  },
  xa = {
    'id': 'base.command.create-base-field',
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sigA2D7, var_core_value_sig0A36) {
      if (!var_core_value_sig0A36) return false;
      let var_core_value_sig87E7 = var_core_value_sigA2D7.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig52761,
          tableId: var_core_value_sig0B66,
          field: var_core_value_sig8E9E,
          index: var_core_value_sig9A69,
          viewIndexes: var_core_value_sig2A04
        } = var_core_value_sig0A36,
        var_core_value_sigA30D = var_core_value_sig87E7.getUnit(var_core_value_sig52761, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sigA30D || !$(var_core_value_sigA30D, var_core_value_sig0B66) || var_core_value_sigA30D.getSnapshot().tables[var_core_value_sig0B66].fields[var_core_value_sig8E9E.id] || var_core_value_sig9A69 === 0 || !da(var_core_value_sigA30D, var_core_value_sig0B66, var_core_value_sig8E9E)) return false;
      let var_core_value_sig4F28 = var_core_value_sigA2D7.get(var_core_value_sig4AEF),
        var_core_value_sigE7DA = var_core_value_sigA2D7.get(var_core_value_sig5EB1),
        var_core_value_sig56D11 = var_core_value_sigA2D7.get(X).createCreateFieldOp(var_core_value_sigA30D, var_core_value_sig0B66, var_core_value_sig8E9E, var_core_value_sig9A69, var_core_value_sig2A04),
        var_core_value_sig2EDE = new R().invertOp(var_core_value_sigA30D.getSnapshot(), var_core_value_sig56D11),
        var_core_value_sig70CD = {
          'unitId': var_core_value_sig52761,
          'op': var_core_value_sig56D11
        },
        var_core_value_sig60A5 = {
          'unitId': var_core_value_sig52761,
          'op': var_core_value_sig2EDE
        };
      return var_core_value_sig4F28.syncExecuteCommand(Q.id, var_core_value_sig70CD) ? (var_core_value_sig87E7.focusUnit(var_core_value_sig52761), var_core_value_sigE7DA.pushUndoRedo({
        'unitID': var_core_value_sig52761,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig60A5
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig70CD
        }]
      }), true) : false;
    }
  },
  Sa = {
    'id': "base.command.create-base-record",
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig89B2, var_core_value_sigE594) {
      if (!var_core_value_sigE594) return false;
      let var_core_value_sig63D7 = var_core_value_sig89B2.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig2E441,
          tableId: var_core_value_sig6814,
          record: var_core_value_sig0A10
        } = var_core_value_sigE594,
        var_core_value_sig9E19 = var_core_value_sig63D7.getUnit(var_core_value_sig2E441, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig9E19 || !$(var_core_value_sig9E19, var_core_value_sig6814)) return false;
      let var_core_value_sigC832 = var_core_value_sig89B2.get(var_core_value_sig4AEF),
        var_core_value_sig9DD2 = var_core_value_sig89B2.get(var_core_value_sig5EB1),
        var_core_value_sigDB97 = var_core_value_sig89B2.get(X),
        var_core_value_sigD1A5 = var_core_value_sig9E19.getSnapshot(),
        var_core_value_sigA91A = ga(var_core_value_sig9E19, var_core_value_sig6814, [var_core_value_sig0A10]);
      if (!var_core_value_sigA91A) return false;
      let [var_core_value_sig2DE0] = var_core_value_sigA91A.records,
        {
          hierarchyChanges: var_core_value_sig0513,
          hierarchyFieldToMaterialize: var_core_value_sig35D1
        } = var_core_value_sigA91A,
        var_core_value_sig5CE7 = var_core_value_sig35D1 ? var_core_value_sigDB97.createCreateFieldOp(var_core_value_sig9E19, var_core_value_sig6814, var_core_value_sig35D1, var_core_value_sigD1A5.tables[var_core_value_sig6814].fieldOrder["length"]) : null,
        var_core_value_sig3662 = var_core_value_sigDB97.createCreateRecordOp(var_core_value_sig9E19, var_core_value_sig6814, var_core_value_sig2DE0),
        var_core_value_sigABC5 = L([...(var_core_value_sig5CE7 ? [var_core_value_sig5CE7] : []), var_core_value_sig3662]),
        var_core_value_sig033B = new R().invertOp(var_core_value_sigD1A5, var_core_value_sigABC5),
        var_core_value_sig2BCC = {
          'unitId': var_core_value_sig2E441,
          'op': var_core_value_sigABC5,
          'hierarchyChanges': var_core_value_sig0513.length ? var_core_value_sig0513 : undefined,
          'source': var_core_value_sig0513.length ? var_core_value_sigE594.source ?? 'ui' : undefined
        },
        var_core_value_sigC260 = {
          ...var_core_value_sig2BCC,
          'source': var_core_value_sig0513.length ? "redo" : undefined
        },
        var_core_value_sig15611 = {
          'unitId': var_core_value_sig2E441,
          'op': var_core_value_sig033B,
          'hierarchyChanges': var_core_value_sig0513.length ? var_core_value_sig0513.map(var_core_value_sig77A3 => ({
            ...var_core_value_sig77A3,
            'oldParentRecordId': var_core_value_sig77A3.parentRecordId,
            'parentRecordId': null
          })) : undefined,
          'source': var_core_value_sig0513.length ? "undo" : undefined
        };
      return var_core_value_sigC832.syncExecuteCommand(Q.id, var_core_value_sig2BCC) ? (var_core_value_sig63D7.focusUnit(var_core_value_sig2E441), var_core_value_sig9DD2.pushUndoRedo({
        'unitID': var_core_value_sig2E441,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig15611
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigC260
        }]
      }), true) : false;
    }
  },
  Ca = "Base table names are exported as Excel worksheet names and must contain 1-31 characters, not start or end with an apostrophe, not contain : \\ / ? * [ ], and be unique (case-insensitive).";
function wa(var_core_value_sigAAA8, var_core_value_sigA0B9, var_core_value_sigB40F) {
  if (!var_core_value_sigA0B9.trim()) return {
    'valid': false,
    'reason': "Table name is required.",
    'error': 'required'
  };
  if (var_core_value_sigA0B9.length > 31) return {
    'valid': false,
    'reason': "Use 31 characters or fewer.",
    'error': "too-long"
  };
  if (var_core_value_sigA0B9.startsWith('\x27') || var_core_value_sigA0B9.endsWith('\x27')) return {
    'valid': false,
    'reason': "A table name cannot start or end with an apostrophe.",
    'error': "apostrophe"
  };
  if (/[:\\/?*\[\]]/['test'](var_core_value_sigA0B9)) return {
    'valid': false,
    'reason': 'A\x20table\x20name\x20cannot\x20contain\x20:\x20\x5c\x20/\x20?\x20*\x20[\x20].',
    'error': "invalid-characters"
  };
  if (!var_core_value_sigFE1A(var_core_value_sigA0B9)) return {
    'valid': false,
    'reason': "Choose another name.",
    'error': "invalid"
  };
  let var_core_value_sig86F1 = var_core_value_sigA0B9.toLowerCase();
  return Object.values(var_core_value_sigAAA8.tables).some(var_core_value_sigD85C => var_core_value_sigD85C.id !== var_core_value_sigB40F && var_core_value_sigD85C.name['toLowerCase']() === var_core_value_sig86F1) ? {
    'valid': false,
    'reason': "A table with this name already exists.",
    'error': "duplicate"
  } : {
    'valid': true
  };
}
;
function Ta(var_core_value_sig078D, var_core_value_sig60D5) {
  let var_core_value_sigD888 = var_core_value_sig60D5.replace(/[:\\/?*\[\]]/g, '\x20').replace(/^'+|'+$/g, '').trim() || "Table",
    var_core_value_sig5337 = 1;
  for (;;) {
    let var_core_value_sig336C = var_core_value_sig5337 === 1 ? '' : '\x20' + var_core_value_sig5337,
      var_core_value_sig6E68 = '' + var_core_value_sigD888.slice(0, 31 - var_core_value_sig336C.length) + var_core_value_sig336C;
    if (wa(var_core_value_sig078D, var_core_value_sig6E68).valid) return var_core_value_sig6E68;
    var_core_value_sig5337++;
  }
}
const Ea = {
  'id': 'base.command.create-base-table',
  'type': var_core_value_sig0A86.COMMAND,
  'handler': (var_core_value_sig2381, var_core_value_sig573D) => {
    if (!var_core_value_sig573D) return false;
    let var_core_value_sigC09F = var_core_value_sig2381.get(var_core_value_sig5B68),
      {
        unitId: var_core_value_sig205A,
        table: var_core_value_sig16E2,
        index: var_core_value_sig8904
      } = var_core_value_sig573D,
      var_core_value_sigBA69 = var_core_value_sigC09F.getUnit(var_core_value_sig205A, var_core_value_sigE2E8.UNIVER_BASE);
    if (!var_core_value_sigBA69 || var_core_value_sigBA69.getSnapshot().tables[var_core_value_sig16E2.id] || !wa(var_core_value_sigBA69.getSnapshot(), var_core_value_sig16E2.name).valid) return false;
    try {
      var_core_value_sigDE3F(var_core_value_sig16E2);
    } catch {
      return false;
    }
    let var_core_value_sig4AC2 = var_core_value_sig2381.get(var_core_value_sig4AEF),
      var_core_value_sig08B2 = var_core_value_sig2381.get(var_core_value_sig5EB1),
      var_core_value_sigDE7F = var_core_value_sigBA69.getSnapshot(),
      var_core_value_sigD898 = new U().createTable(var_core_value_sigDE7F, var_core_value_sig16E2, var_core_value_sig8904),
      var_core_value_sig0386 = new R().invertOp(var_core_value_sigDE7F, var_core_value_sigD898),
      var_core_value_sig577B = {
        'unitId': var_core_value_sig205A,
        'op': var_core_value_sigD898
      },
      var_core_value_sigF342 = {
        'unitId': var_core_value_sig205A,
        'op': var_core_value_sig0386
      };
    return var_core_value_sig4AC2.syncExecuteCommand(Q.id, var_core_value_sig577B) ? (var_core_value_sigC09F.focusUnit(var_core_value_sig205A), var_core_value_sig08B2.pushUndoRedo({
      'unitID': var_core_value_sig205A,
      'undoMutations': [{
        'id': Q.id,
        'params': var_core_value_sigF342
      }],
      'redoMutations': [{
        'id': Q.id,
        'params': var_core_value_sig577B
      }]
    }), true) : false;
  }
};
function Da(var_core_value_sig7871, var_core_value_sig7CBA, var_core_value_sigC924 = []) {
  let var_core_value_sig718D = new Set([...Object.values(var_core_value_sig7871.fields).filter(var_core_value_sig3957 => var_core_value_sig3957).map(var_core_value_sigA101 => var_core_value_sigA101.name), ...var_core_value_sigC924.map(var_core_value_sig2ADC => var_core_value_sig2ADC.name)]);
  if (!var_core_value_sig718D.has(var_core_value_sig7CBA)) return var_core_value_sig7CBA;
  let var_core_value_sigCC47 = 2;
  for (; var_core_value_sig718D.has(var_core_value_sig7CBA + '\x20' + var_core_value_sigCC47);) var_core_value_sigCC47++;
  return var_core_value_sig7CBA + '\x20' + var_core_value_sigCC47;
}
;
function Oa(var_core_value_sig12EE, var_core_value_sigEB89) {
  if (!var_core_value_sig12EE || !var_core_value_sigEB89.length) return;
  let var_core_value_sig405C = [...var_core_value_sig12EE];
  return var_core_value_sigEB89.forEach(var_core_value_sig1386 => {
    var_core_value_sig405C.includes(var_core_value_sig1386) || var_core_value_sig405C.push(var_core_value_sig1386);
  }), var_core_value_sig405C;
}
const ka = {
    'options': [{
      'id': "todo",
      'name': "Todo",
      'color': "#BFDBFE"
    }, {
      'id': 'doing',
      'name': "Doing",
      'color': "#FDE68A"
    }, {
      'id': "done",
      'name': "Done",
      'color': "#BBF7D0"
    }]
  },
  Aa = {
    'locale': "en-US",
    'pattern': "yyyy/mm/dd",
    'includeTime': false,
    'hourCycle': 'h24',
    'defaultMode': "none"
  };
function ja(var_core_value_sig820E, var_core_value_sigA753, var_core_value_sigEF41, var_core_value_sig9793) {
  var var_core_value_sigDB87;
  let var_core_value_sig2858 = new U(),
    var_core_value_sig2683 = var_core_value_sig820E.tables[var_core_value_sigA753],
    var_core_value_sigEA13 = var_core_value_sig2683 ? {
      ...var_core_value_sigEF41,
      'fieldOrder': [var_core_value_sigED20, ...(var_core_value_sigEF41.fieldOrder ?? var_core_value_sig2683.fieldOrder).filter(var_core_value_sig96F5 => var_core_value_sig96F5 !== var_core_value_sigED20)],
      'fieldSettings': {
        ...var_core_value_sigEF41.fieldSettings,
        [var_core_value_sigED20]: {
          ...((var_core_value_sigDB87 = var_core_value_sigEF41.fieldSettings) == null ? undefined : var_core_value_sigDB87[var_core_value_sigED20]),
          'hidden': true
        }
      }
    } : var_core_value_sigEF41;
  if (var_core_value_sig2683 && var_core_value_sigEA13.type === "kanban") {
    let var_core_value_sig7F54 = Na(var_core_value_sig2683, var_core_value_sigEA13),
      var_core_value_sigEB45 = var_core_value_sig7F54.changed ? {
        ...var_core_value_sigEA13,
        'config': var_core_value_sig7F54.config,
        'fieldOrder': var_core_value_sig7F54.fieldOrder ?? var_core_value_sigEA13.fieldOrder
      } : var_core_value_sigEA13;
    return L([...var_core_value_sig7F54.fields["map"](var_core_value_sig8DFE => var_core_value_sig2858.createField(var_core_value_sig820E, var_core_value_sigA753, {
      'field': var_core_value_sig8DFE
    })), var_core_value_sig2858.createView(var_core_value_sig820E, var_core_value_sigA753, var_core_value_sigEB45, var_core_value_sig9793)]);
  }
  if (!var_core_value_sig2683 || var_core_value_sigEA13.type !== "calendar" && var_core_value_sigEA13.type !== 'gantt') return var_core_value_sig2858.createView(var_core_value_sig820E, var_core_value_sigA753, var_core_value_sigEA13, var_core_value_sig9793);
  let var_core_value_sig1699 = Ma(var_core_value_sig2683, var_core_value_sigEA13),
    var_core_value_sig42E9 = var_core_value_sig1699.changed ? {
      ...var_core_value_sigEA13,
      'config': var_core_value_sig1699.config,
      'fieldOrder': var_core_value_sig1699.fieldOrder ?? var_core_value_sigEA13.fieldOrder
    } : var_core_value_sigEA13;
  return var_core_value_sigEA13.type === "gantt" && Ia(var_core_value_sigEA13) && (var_core_value_sig42E9 = La(var_core_value_sig2683, var_core_value_sig42E9, var_core_value_sig1699.fields)), L([...var_core_value_sig1699.fields['map'](var_core_value_sig0623 => var_core_value_sig2858.createField(var_core_value_sig820E, var_core_value_sigA753, {
    'field': var_core_value_sig0623
  })), var_core_value_sig2858.createView(var_core_value_sig820E, var_core_value_sigA753, var_core_value_sig42E9, var_core_value_sig9793)]);
}
;
function Ma(var_core_value_sig0B64, var_core_value_sig3BFC, var_core_value_sig9CF5 = false) {
  var var_core_value_sig5BFB, var_core_value_sig47A3;
  let var_core_value_sig7CA8 = var_core_value_sig0B64.fieldOrder["filter"](var_core_value_sigBF43 => za(var_core_value_sig0B64, var_core_value_sigBF43)),
    var_core_value_sig1B33 = [],
    var_core_value_sig041A = {
      ...(var_core_value_sig3BFC.config ?? {})
    },
    var_core_value_sig7E4F = typeof var_core_value_sig041A.startDateFieldId == "string" && za(var_core_value_sig0B64, var_core_value_sig041A.startDateFieldId) ? var_core_value_sig041A.startDateFieldId : var_core_value_sig7CA8[0],
    var_core_value_sig5A6A = typeof var_core_value_sig041A.endDateFieldId == "string" && za(var_core_value_sig0B64, var_core_value_sig041A.endDateFieldId) && var_core_value_sig041A.endDateFieldId !== var_core_value_sig7E4F ? var_core_value_sig041A.endDateFieldId : var_core_value_sig7CA8.find(var_core_value_sigBC08 => var_core_value_sigBC08 !== var_core_value_sig7E4F);
  if (!var_core_value_sig7E4F) {
    let var_core_value_sig3F28 = Ba(var_core_value_sig0B64, var_core_value_sig1B33, var_core_value_sig3BFC.type === 'gantt' ? 'Start\x20date' : "Date");
    var_core_value_sig1B33.push(var_core_value_sig3F28), var_core_value_sig7E4F = var_core_value_sig3F28.id;
  }
  if ((var_core_value_sig3BFC.type === "gantt" || var_core_value_sig9CF5) && !var_core_value_sig5A6A) {
    let var_core_value_sig0A16 = Ba(var_core_value_sig0B64, var_core_value_sig1B33, 'End\x20date');
    var_core_value_sig1B33.push(var_core_value_sig0A16), var_core_value_sig5A6A = var_core_value_sig0A16.id;
  }
  var_core_value_sig3BFC.type === "calendar" && !var_core_value_sig5A6A && delete var_core_value_sig041A.endDateFieldId, var_core_value_sig041A.startDateFieldId = var_core_value_sig7E4F, var_core_value_sig3BFC.type === "calendar" && var_core_value_sig5A6A && (var_core_value_sig041A.endDateFieldId = var_core_value_sig5A6A), var_core_value_sig3BFC.type === 'gantt' && (var_core_value_sig041A.endDateFieldId = var_core_value_sig5A6A ?? var_core_value_sig7E4F);
  let var_core_value_sig7E71 = Oa(var_core_value_sig3BFC.fieldOrder, var_core_value_sig1B33.map(var_core_value_sig0A96 => var_core_value_sig0A96.id));
  return {
    'changed': var_core_value_sig1B33.length > 0 || var_core_value_sig041A.startDateFieldId !== ((var_core_value_sig5BFB = var_core_value_sig3BFC.config) == null ? undefined : var_core_value_sig5BFB.startDateFieldId) || var_core_value_sig041A.endDateFieldId !== ((var_core_value_sig47A3 = var_core_value_sig3BFC.config) == null ? undefined : var_core_value_sig47A3.endDateFieldId) || !!(var_core_value_sig7E71 && !var_core_value_sig744C.diffValue(var_core_value_sig7E71, var_core_value_sig3BFC.fieldOrder ?? [])),
    'fields': var_core_value_sig1B33,
    'config': var_core_value_sig041A,
    'fieldOrder': var_core_value_sig7E71
  };
}
;
function Na(var_core_value_sig14B7, var_core_value_sig7D2C) {
  var var_core_value_sigE10A;
  let var_core_value_sig0AE5 = [],
    var_core_value_sig57CC = {
      ...(var_core_value_sig7D2C.config ?? {})
    },
    var_core_value_sig2932 = typeof var_core_value_sig57CC.groupFieldId == "string" && Pa(var_core_value_sig14B7, var_core_value_sig57CC.groupFieldId) ? var_core_value_sig57CC.groupFieldId : var_core_value_sig14B7.fieldOrder["find"](var_core_value_sig72FE => Pa(var_core_value_sig14B7, var_core_value_sig72FE));
  if (!var_core_value_sig2932) {
    let var_core_value_sigE8ED = Fa(var_core_value_sig14B7, var_core_value_sig0AE5);
    var_core_value_sig0AE5.push(var_core_value_sigE8ED), var_core_value_sig2932 = var_core_value_sigE8ED.id;
  }
  var_core_value_sig57CC.groupFieldId = var_core_value_sig2932;
  let var_core_value_sigA067 = Oa(var_core_value_sig7D2C.fieldOrder, var_core_value_sig0AE5.map(var_core_value_sig6DD3 => var_core_value_sig6DD3.id));
  return {
    'changed': var_core_value_sig0AE5.length > 0 || var_core_value_sig57CC.groupFieldId !== ((var_core_value_sigE10A = var_core_value_sig7D2C.config) == null ? undefined : var_core_value_sigE10A.groupFieldId) || !!(var_core_value_sigA067 && !var_core_value_sig744C.diffValue(var_core_value_sigA067, var_core_value_sig7D2C.fieldOrder ?? [])),
    'fields': var_core_value_sig0AE5,
    'config': var_core_value_sig57CC,
    'fieldOrder': var_core_value_sigA067
  };
}
;
function Pa(var_core_value_sig0CB3, var_core_value_sigE0F3) {
  let var_core_value_sig7330 = var_core_value_sigE0F3 ? var_core_value_sig0CB3.fields[var_core_value_sigE0F3] : null;
  return var_core_value_sig7330 ? [var_core_value_sig06E6.SingleSelect, var_core_value_sig06E6.MultiSelect, var_core_value_sig06E6.Rating, var_core_value_sig06E6.Person, var_core_value_sig06E6.Group, var_core_value_sig06E6.Checkbox].includes(var_core_value_sig7330.type) : false;
}
;
function Fa(var_core_value_sig2766, var_core_value_sig1BD2) {
  return {
    'id': "fld-" + var_core_value_sigAF2B(8),
    'name': Da(var_core_value_sig2766, "Status", var_core_value_sig1BD2),
    'type': var_core_value_sig06E6.SingleSelect,
    'config': var_core_value_sig744C.deepClone(ka)
  };
}
;
function Ia(var_core_value_sig2CA0) {
  return Object.keys(var_core_value_sig2CA0.config ?? {}).length === 0 && Object.keys(var_core_value_sig2CA0.fieldSettings ?? {}).length === 0;
}
;
function La(var_core_value_sigDD2D, var_core_value_sig8880, var_core_value_sig005B) {
  let var_core_value_sig6383 = {
      ...(var_core_value_sig8880.config ?? {})
    },
    var_core_value_sigCDBE = var_core_value_sig005B.map(var_core_value_sig8E87 => var_core_value_sig8E87.id),
    var_core_value_sig8589 = [...var_core_value_sigDD2D.fieldOrder, ...var_core_value_sigCDBE],
    var_core_value_sig2F83 = typeof var_core_value_sig6383.titleFieldId == "string" && Ra(var_core_value_sigDD2D, var_core_value_sig005B, var_core_value_sig6383.titleFieldId) ? var_core_value_sig6383.titleFieldId : var_core_value_sigDD2D.primaryFieldId,
    var_core_value_sig4AD6 = typeof var_core_value_sig6383.startDateFieldId == "string" ? var_core_value_sig6383.startDateFieldId : '',
    var_core_value_sig83CC = typeof var_core_value_sig6383.endDateFieldId == "string" ? var_core_value_sig6383.endDateFieldId : var_core_value_sig4AD6,
    var_core_value_sigECB51 = new Set([var_core_value_sig2F83, var_core_value_sig4AD6, var_core_value_sig83CC].filter(var_core_value_sigCDF2 => var_core_value_sigCDF2 && Ra(var_core_value_sigDD2D, var_core_value_sig005B, var_core_value_sigCDF2))),
    var_core_value_sigEC7A = Object.fromEntries(var_core_value_sig8589.flatMap(var_core_value_sig1043 => var_core_value_sigECB51.has(var_core_value_sig1043) || !Ra(var_core_value_sigDD2D, var_core_value_sig005B, var_core_value_sig1043) ? [] : [[var_core_value_sig1043, {
      'hidden': true
    }]]));
  return {
    ...var_core_value_sig8880,
    'config': {
      ...var_core_value_sig6383,
      'titleFieldId': var_core_value_sig2F83
    },
    'fieldSettings': var_core_value_sigEC7A
  };
}
;
function Ra(var_core_value_sig3C20, var_core_value_sig55A0, var_core_value_sig6F0A) {
  return !!(var_core_value_sig3C20.fields[var_core_value_sig6F0A] ?? var_core_value_sig55A0.find(var_core_value_sig4289 => var_core_value_sig4289.id === var_core_value_sig6F0A)) && true;
}
;
function za(var_core_value_sig193F, var_core_value_sig5227) {
  let var_core_value_sig8CB8 = var_core_value_sig5227 ? var_core_value_sig193F.fields[var_core_value_sig5227] : null;
  return !!var_core_value_sig8CB8 && var_core_value_sig8CB8.type === var_core_value_sig06E6.Date && var_core_value_sig8CB8.readonly !== true && var_core_value_sig8CB8.system !== true;
}
;
function Ba(var_core_value_sigBE77, var_core_value_sig9700, var_core_value_sigB461) {
  let var_core_value_sigDDFF = new Set([...Object.keys(var_core_value_sigBE77.fields), ...var_core_value_sig9700.map(var_core_value_sig2729 => var_core_value_sig2729.id)]),
    var_core_value_sig52C1 = "fld-" + var_core_value_sigAF2B(8);
  for (; var_core_value_sigDDFF.has(var_core_value_sig52C1);) var_core_value_sig52C1 = "fld-" + var_core_value_sigAF2B(8);
  return {
    'id': var_core_value_sig52C1,
    'name': Da(var_core_value_sigBE77, var_core_value_sigB461, var_core_value_sig9700),
    'type': var_core_value_sig06E6.Date,
    'config': {
      ...Aa
    }
  };
}
const Va = {
    'id': "base.command.create-base-view",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sigFA8C, var_core_value_sig19C6) => {
      if (!var_core_value_sig19C6) return false;
      let var_core_value_sigDB89 = var_core_value_sigFA8C.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sigCBF6,
          tableId: var_core_value_sigE0DD,
          view: var_core_value_sig9874,
          index: var_core_value_sig61DE
        } = var_core_value_sig19C6,
        var_core_value_sig9717 = var_core_value_sigDB89.getUnit(var_core_value_sigCBF6, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig9717 || !$(var_core_value_sig9717, var_core_value_sigE0DD) || var_core_value_sig9717.getSnapshot().tables[var_core_value_sigE0DD].views[var_core_value_sig9874.id]) return false;
      let var_core_value_sig7C72 = var_core_value_sigFA8C.get(var_core_value_sig4AEF),
        var_core_value_sigECAB = var_core_value_sigFA8C.get(var_core_value_sig5EB1),
        var_core_value_sigEB4B = var_core_value_sig9717.getSnapshot(),
        var_core_value_sigF741 = ja(var_core_value_sigEB4B, var_core_value_sigE0DD, var_core_value_sig9874, var_core_value_sig61DE),
        var_core_value_sigB227 = new R().invertOp(var_core_value_sigEB4B, var_core_value_sigF741),
        var_core_value_sigCFC5 = {
          'historyAction': 'create-view',
          'unitId': var_core_value_sigCBF6,
          'op': var_core_value_sigF741,
          'viewType': var_core_value_sig9874.type
        },
        var_core_value_sigEC54 = {
          'historyAction': 'delete-view',
          'unitId': var_core_value_sigCBF6,
          'op': var_core_value_sigB227,
          'viewType': var_core_value_sig9874.type
        };
      return var_core_value_sig7C72.syncExecuteCommand(Q.id, var_core_value_sigCFC5) ? (var_core_value_sigDB89.focusUnit(var_core_value_sigCBF6), var_core_value_sigECAB.pushUndoRedo({
        'unitID': var_core_value_sigCBF6,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigEC54
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigCFC5
        }]
      }), true) : false;
    }
  },
  Ha = {
    'id': "base.command.delete-base-field",
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig9B6A1, var_core_value_sigEA29) {
      if (!var_core_value_sigEA29) return false;
      let var_core_value_sig3851 = var_core_value_sig9B6A1.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sigE1D0,
          tableId: var_core_value_sig8AFC,
          fieldId: var_core_value_sigA761
        } = var_core_value_sigEA29,
        var_core_value_sig0996 = var_core_value_sig3851.getUnit(var_core_value_sigE1D0, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig0996) return false;
      let var_core_value_sig09E0 = var_core_value_sig0996.getSnapshot(),
        var_core_value_sigB201 = var_core_value_sig09E0.tables[var_core_value_sig8AFC];
      if (!$(var_core_value_sig0996, var_core_value_sig8AFC, {
        'fieldIds': [var_core_value_sigA761]
      }) || var_core_value_sigB201.primaryFieldId === var_core_value_sigA761 || var_core_value_sigA761 === var_core_value_sigED20) return false;
      let var_core_value_sigFB17 = var_core_value_sig9B6A1.get(var_core_value_sig4AEF),
        var_core_value_sigCA91 = var_core_value_sig9B6A1.get(var_core_value_sig5EB1),
        var_core_value_sig372C = new U().deleteField(var_core_value_sig09E0, var_core_value_sig8AFC, var_core_value_sigA761),
        var_core_value_sig98F9 = new R().invertOp(var_core_value_sig09E0, var_core_value_sig372C),
        var_core_value_sig3F40 = {
          'unitId': var_core_value_sigE1D0,
          'op': var_core_value_sig372C
        },
        var_core_value_sig7A2F = {
          'unitId': var_core_value_sigE1D0,
          'op': var_core_value_sig98F9
        };
      return var_core_value_sigFB17.syncExecuteCommand(Q.id, var_core_value_sig3F40) ? (var_core_value_sig3851.focusUnit(var_core_value_sigE1D0), var_core_value_sigCA91.pushUndoRedo({
        'unitID': var_core_value_sigE1D0,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig7A2F
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig3F40
        }]
      }), true) : false;
    }
  },
  Ua = {
    'id': "base.command.delete-base-record",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig3047, var_core_value_sig19A5) => {
      if (!var_core_value_sig19A5) return false;
      let var_core_value_sigC5EA = var_core_value_sig3047.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sigC9A11,
          tableId: var_core_value_sigF92E,
          recordId: var_core_value_sig70AE
        } = var_core_value_sig19A5,
        var_core_value_sig57BC = var_core_value_sigC5EA.getUnit(var_core_value_sigC9A11, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig57BC || !$(var_core_value_sig57BC, var_core_value_sigF92E, {
        'recordIds': [var_core_value_sig70AE]
      })) return false;
      let var_core_value_sig41AB = var_core_value_sig3047.get(var_core_value_sig4AEF),
        var_core_value_sigCDAC = var_core_value_sig3047.get(var_core_value_sig5EB1),
        var_core_value_sigDC24 = var_core_value_sig57BC.getSnapshot(),
        var_core_value_sig3875 = Ze(var_core_value_sigDC24.tables[var_core_value_sigF92E], [var_core_value_sig70AE]),
        var_core_value_sig5513 = new U(),
        var_core_value_sig6048 = new R(),
        var_core_value_sigE6C3 = var_core_value_sig5513.deleteRecord(var_core_value_sigDC24, var_core_value_sigF92E, var_core_value_sig70AE),
        var_core_value_sig6469 = var_core_value_sig6048.applyOp(var_core_value_sigDC24, var_core_value_sigE6C3),
        var_core_value_sig8BC7 = var_core_value_sig5513.createDeleteRecordsUndoOp(var_core_value_sigDC24, var_core_value_sig6469, var_core_value_sigF92E, [var_core_value_sig70AE]),
        var_core_value_sig5939 = {
          'unitId': var_core_value_sigC9A11,
          'op': var_core_value_sigE6C3,
          'hierarchyChanges': var_core_value_sig3875,
          'source': var_core_value_sig19A5.source ?? 'ui'
        },
        var_core_value_sig7432 = {
          ...var_core_value_sig5939,
          'source': 'redo'
        },
        var_core_value_sig19F0 = {
          'unitId': var_core_value_sigC9A11,
          'op': var_core_value_sig8BC7,
          'hierarchyChanges': var_core_value_sig3875.map(var_core_value_sig5BB6 => ({
            ...var_core_value_sig5BB6,
            'oldParentRecordId': var_core_value_sig5BB6.parentRecordId,
            'parentRecordId': var_core_value_sig5BB6.oldParentRecordId
          })),
          'source': 'undo'
        };
      return var_core_value_sig41AB.syncExecuteCommand(Q.id, var_core_value_sig5939) ? (var_core_value_sigC5EA.focusUnit(var_core_value_sigC9A11), var_core_value_sigCDAC.pushUndoRedo({
        'unitID': var_core_value_sigC9A11,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig19F0
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig7432
        }]
      }), true) : false;
    }
  },
  Wa = {
    'id': "base.command.delete-base-table",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig619B, var_core_value_sig3F16) => {
      if (!var_core_value_sig3F16) return false;
      let var_core_value_sig6C48 = var_core_value_sig619B.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig9140,
          tableId: var_core_value_sig1CF9
        } = var_core_value_sig3F16,
        var_core_value_sigC63A = var_core_value_sig6C48.getUnit(var_core_value_sig9140, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sigC63A || !$(var_core_value_sigC63A, var_core_value_sig1CF9)) return false;
      let var_core_value_sig1D3B = var_core_value_sig619B.get(var_core_value_sig4AEF),
        var_core_value_sig453A = var_core_value_sig619B.get(var_core_value_sig5EB1),
        var_core_value_sigEE97 = var_core_value_sigC63A.getSnapshot(),
        var_core_value_sig1DE5 = ze(var_core_value_sigEE97, var_core_value_sig1CF9);
      if (var_core_value_sig1DE5.length > 0) return console.error("[DeleteBaseTableCommand]: table \"" + var_core_value_sig1CF9 + "\" is referenced by " + var_core_value_sig1DE5.map(var_core_value_sig5C75 => var_core_value_sig5C75.tableId + '.' + var_core_value_sig5C75.fieldId).join(',\x20') + '.'), false;
      let var_core_value_sigB51C = new U().deleteTable(var_core_value_sigEE97, var_core_value_sig1CF9),
        var_core_value_sig1426 = new R().invertOp(var_core_value_sigEE97, var_core_value_sigB51C),
        var_core_value_sigEA3C = {
          'unitId': var_core_value_sig9140,
          'op': var_core_value_sigB51C
        },
        var_core_value_sigD0B7 = {
          'unitId': var_core_value_sig9140,
          'op': var_core_value_sig1426
        };
      return var_core_value_sig1D3B.syncExecuteCommand(Q.id, var_core_value_sigEA3C) ? (var_core_value_sig6C48.focusUnit(var_core_value_sig9140), var_core_value_sig453A.pushUndoRedo({
        'unitID': var_core_value_sig9140,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigD0B7
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigEA3C
        }]
      }), true) : false;
    }
  },
  Ga = {
    'id': "base.command.delete-base-view",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig073B, var_core_value_sig4B16) => {
      if (!var_core_value_sig4B16) return false;
      let var_core_value_sig3649 = var_core_value_sig073B.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sigD0F3,
          tableId: var_core_value_sig415D,
          viewId: var_core_value_sig0A15
        } = var_core_value_sig4B16,
        var_core_value_sig7113 = var_core_value_sig3649.getUnit(var_core_value_sigD0F3, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig7113 || !$(var_core_value_sig7113, var_core_value_sig415D, {
        'viewIds': [var_core_value_sig0A15]
      })) return false;
      let var_core_value_sig1555 = var_core_value_sig073B.get(var_core_value_sig4AEF),
        var_core_value_sigC06C = var_core_value_sig073B.get(var_core_value_sig5EB1),
        var_core_value_sigF8D0 = var_core_value_sig7113.getSnapshot(),
        var_core_value_sig0107 = var_core_value_sigF8D0.tables[var_core_value_sig415D].views[var_core_value_sig0A15].type,
        var_core_value_sig05B7 = new U().deleteView(var_core_value_sigF8D0, var_core_value_sig415D, var_core_value_sig0A15),
        var_core_value_sig19F01 = new R().invertOp(var_core_value_sigF8D0, var_core_value_sig05B7),
        var_core_value_sigF035 = {
          'historyAction': 'delete-view',
          'unitId': var_core_value_sigD0F3,
          'op': var_core_value_sig05B7,
          'viewType': var_core_value_sig0107
        },
        var_core_value_sig0804 = {
          'historyAction': "create-view",
          'unitId': var_core_value_sigD0F3,
          'op': var_core_value_sig19F01,
          'viewType': var_core_value_sig0107
        };
      return var_core_value_sig1555.syncExecuteCommand(Q.id, var_core_value_sigF035) ? (var_core_value_sig3649.focusUnit(var_core_value_sigD0F3), var_core_value_sigC06C.pushUndoRedo({
        'unitID': var_core_value_sigD0F3,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig0804
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigF035
        }]
      }), true) : false;
    }
  },
  Ka = {
    'id': "base.command.duplicate-base-field",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig417D, var_core_value_sig73B7) => {
      if (!var_core_value_sig73B7) return false;
      let var_core_value_sig4DEF = var_core_value_sig417D.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sigF576,
          tableId: var_core_value_sig3087,
          sourceFieldId: var_core_value_sigC30C,
          field: var_core_value_sigAE4D,
          index: var_core_value_sigA2D5,
          viewIndexes: var_core_value_sig7B4C
        } = var_core_value_sig73B7,
        var_core_value_sig9D16 = var_core_value_sig4DEF.getUnit(var_core_value_sigF576, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig9D16 || !$(var_core_value_sig9D16, var_core_value_sig3087, {
        'fieldIds': [var_core_value_sigC30C]
      }) || var_core_value_sigC30C === var_core_value_sigED20 || var_core_value_sig9D16.getSnapshot().tables[var_core_value_sig3087].fields[var_core_value_sigAE4D.id] || var_core_value_sigA2D5 === 0 || !da(var_core_value_sig9D16, var_core_value_sig3087, var_core_value_sigAE4D)) return false;
      let var_core_value_sig540B = var_core_value_sig417D.get(var_core_value_sig4AEF),
        var_core_value_sig70CA = var_core_value_sig417D.get(var_core_value_sig5EB1),
        var_core_value_sig19C7 = var_core_value_sig9D16.getSnapshot(),
        var_core_value_sigEC6A = new U().duplicateField(var_core_value_sig19C7, var_core_value_sig3087, var_core_value_sigC30C, {
          'field': var_core_value_sigAE4D,
          'index': var_core_value_sigA2D5,
          'viewIndexes': var_core_value_sig7B4C
        }),
        var_core_value_sig3DA8 = new R().invertOp(var_core_value_sig19C7, var_core_value_sigEC6A),
        var_core_value_sig2F57 = {
          'unitId': var_core_value_sigF576,
          'op': var_core_value_sigEC6A
        },
        var_core_value_sig115C = {
          'unitId': var_core_value_sigF576,
          'op': var_core_value_sig3DA8
        };
      return var_core_value_sig540B.syncExecuteCommand(Q.id, var_core_value_sig2F57) ? (var_core_value_sig4DEF.focusUnit(var_core_value_sigF576), var_core_value_sig70CA.pushUndoRedo({
        'unitID': var_core_value_sigF576,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig115C
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig2F57
        }]
      }), true) : false;
    }
  },
  qa = {
    'id': 'base.command.duplicate-base-record',
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig79B6, var_core_value_sigA36D) => {
      if (!var_core_value_sigA36D) return false;
      let var_core_value_sig1DE9 = var_core_value_sig79B6.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig1DE4,
          tableId: var_core_value_sig67091,
          sourceRecordId: var_core_value_sigA9B7,
          record: var_core_value_sigD810
        } = var_core_value_sigA36D,
        var_core_value_sig0CBE = var_core_value_sig1DE9.getUnit(var_core_value_sig1DE4, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig0CBE || !$(var_core_value_sig0CBE, var_core_value_sig67091, {
        'recordIds': [var_core_value_sigA9B7]
      }) || !pa(var_core_value_sig0CBE, var_core_value_sig67091, var_core_value_sigD810)) return false;
      let var_core_value_sig8085 = var_core_value_sig79B6.get(var_core_value_sig4AEF),
        var_core_value_sigC59C = var_core_value_sig79B6.get(var_core_value_sig5EB1),
        var_core_value_sigB778 = var_core_value_sig0CBE.getSnapshot(),
        var_core_value_sig54E6 = ma(var_core_value_sigD810),
        var_core_value_sigE9DB = Ye(var_core_value_sigB778.tables[var_core_value_sig67091], [var_core_value_sig54E6]),
        var_core_value_sigE26F1 = new U().duplicateRecord(var_core_value_sigB778, var_core_value_sig67091, var_core_value_sigA9B7, var_core_value_sig54E6),
        var_core_value_sig8C20 = new R().invertOp(var_core_value_sigB778, var_core_value_sigE26F1),
        var_core_value_sigBB73 = {
          'unitId': var_core_value_sig1DE4,
          'op': var_core_value_sigE26F1,
          'hierarchyChanges': var_core_value_sigE9DB.length ? var_core_value_sigE9DB : undefined,
          'source': var_core_value_sigE9DB.length ? var_core_value_sigA36D.source ?? 'ui' : undefined
        },
        var_core_value_sig2E4E = {
          ...var_core_value_sigBB73,
          'source': var_core_value_sigE9DB.length ? "redo" : undefined
        },
        var_core_value_sig5E36 = {
          'unitId': var_core_value_sig1DE4,
          'op': var_core_value_sig8C20,
          'hierarchyChanges': var_core_value_sigE9DB.length ? var_core_value_sigE9DB.map(var_core_value_sigCB46 => ({
            ...var_core_value_sigCB46,
            'oldParentRecordId': var_core_value_sigCB46.parentRecordId,
            'parentRecordId': null
          })) : undefined,
          'source': var_core_value_sigE9DB.length ? "undo" : undefined
        };
      return var_core_value_sig8085.syncExecuteCommand(Q.id, var_core_value_sigBB73) ? (var_core_value_sig1DE9.focusUnit(var_core_value_sig1DE4), var_core_value_sigC59C.pushUndoRedo({
        'unitID': var_core_value_sig1DE4,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig5E36
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig2E4E
        }]
      }), true) : false;
    }
  },
  Ja = {
    'id': "base.command.ensure-base-temporal-view-date-fields",
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig9385, var_core_value_sigE5B5) {
      if (!var_core_value_sigE5B5) return false;
      let var_core_value_sig8483 = var_core_value_sig9385.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig7DCC,
          tableId: var_core_value_sig5C37,
          viewId: var_core_value_sigB657,
          ensureEndDateField: var_core_value_sig6620
        } = var_core_value_sigE5B5,
        var_core_value_sigFA86 = var_core_value_sig8483.getUnit(var_core_value_sig7DCC, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sigFA86 || !$(var_core_value_sigFA86, var_core_value_sig5C37, {
        'viewIds': [var_core_value_sigB657]
      })) return false;
      let var_core_value_sigC7E1 = var_core_value_sigFA86.getSnapshot(),
        var_core_value_sigEDC3 = var_core_value_sigC7E1.tables[var_core_value_sig5C37],
        var_core_value_sigA965 = var_core_value_sigEDC3 == null ? undefined : var_core_value_sigEDC3.views[var_core_value_sigB657];
      if (!var_core_value_sigEDC3 || !var_core_value_sigA965 || var_core_value_sigA965.type !== "calendar" && var_core_value_sigA965.type !== "gantt") return false;
      let var_core_value_sigE2431 = Ma(var_core_value_sigEDC3, var_core_value_sigA965, var_core_value_sig6620 === true);
      if (!var_core_value_sigE2431.changed) return false;
      let var_core_value_sig2AA5 = var_core_value_sig9385.get(var_core_value_sig4AEF),
        var_core_value_sig65F4 = var_core_value_sig9385.get(var_core_value_sig5EB1),
        var_core_value_sig74FC = new U(),
        var_core_value_sig107B = [...var_core_value_sigE2431.fields["map"](var_core_value_sig0177 => var_core_value_sig74FC.createField(var_core_value_sigC7E1, var_core_value_sigE5B5.tableId, {
          'field': var_core_value_sig0177
        })), Ya([...Xa(var_core_value_sigE5B5.tableId, var_core_value_sigE5B5.viewId), "config"], var_core_value_sigA965.config, var_core_value_sigE2431.config)];
      var_core_value_sigE2431.fieldOrder && var_core_value_sig107B.push(Ya([...Xa(var_core_value_sigE5B5.tableId, var_core_value_sigE5B5.viewId), "fieldOrder"], var_core_value_sigA965.fieldOrder, var_core_value_sigE2431.fieldOrder));
      let var_core_value_sig9C8C = L(var_core_value_sig107B),
        var_core_value_sig0141 = new R().invertOp(var_core_value_sigC7E1, var_core_value_sig9C8C),
        var_core_value_sig687E = {
          'unitId': var_core_value_sig7DCC,
          'op': var_core_value_sig9C8C
        },
        var_core_value_sigCDBE1 = {
          'unitId': var_core_value_sig7DCC,
          'op': var_core_value_sig0141
        };
      return var_core_value_sig2AA5.syncExecuteCommand(Q.id, var_core_value_sig687E) ? (var_core_value_sig8483.focusUnit(var_core_value_sig7DCC), var_core_value_sig65F4.pushUndoRedo({
        'unitID': var_core_value_sig7DCC,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigCDBE1
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig687E
        }]
      }), true) : false;
    }
  };
function Ya(var_core_value_sig07AB, var_core_value_sigD6F3, var_core_value_sig5CA6) {
  return var_core_value_sigD6F3 === undefined ? var_core_value_sig71B3.insertOp(var_core_value_sig07AB, var_core_value_sig5CA6) : var_core_value_sig71B3.replaceOp(var_core_value_sig07AB, var_core_value_sigD6F3, var_core_value_sig5CA6);
}
;
function Xa(var_core_value_sigFA26, var_core_value_sig3D8F) {
  return ["tables", var_core_value_sigFA26, "views", var_core_value_sig3D8F];
}
const Za = {
    'id': "base.command.move-base-field",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig9BED, var_core_value_sig5349) => {
      if (!var_core_value_sig5349) return false;
      let var_core_value_sig8232 = var_core_value_sig9BED.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig38F6,
          tableId: var_core_value_sigBE37,
          fieldId: var_core_value_sigA2BF,
          target: var_core_value_sig32BA
        } = var_core_value_sig5349,
        var_core_value_sig5CFD = var_core_value_sig8232.getUnit(var_core_value_sig38F6, var_core_value_sigE2E8.UNIVER_BASE),
        var_core_value_sig3EB3 = var_core_value_sig32BA.beforeFieldId ?? var_core_value_sig32BA.afterFieldId;
      if (!var_core_value_sig5CFD || !!var_core_value_sig32BA.beforeFieldId == !!var_core_value_sig32BA.afterFieldId || !var_core_value_sig3EB3 || var_core_value_sig3EB3 === var_core_value_sigA2BF || var_core_value_sigA2BF === var_core_value_sigED20 || var_core_value_sig32BA.beforeFieldId === var_core_value_sigED20 || !$(var_core_value_sig5CFD, var_core_value_sigBE37, {
        'fieldIds': [var_core_value_sigA2BF, var_core_value_sig3EB3]
      })) return false;
      let var_core_value_sig5C7C1 = var_core_value_sig9BED.get(var_core_value_sig4AEF),
        var_core_value_sig89EE = var_core_value_sig9BED.get(var_core_value_sig5EB1),
        var_core_value_sigCE7B = var_core_value_sig5CFD.getSnapshot(),
        var_core_value_sigBFA9 = new U().moveField(var_core_value_sigCE7B, var_core_value_sigBE37, var_core_value_sigA2BF, var_core_value_sig32BA),
        var_core_value_sig6DF71 = new R().invertOp(var_core_value_sigCE7B, var_core_value_sigBFA9),
        var_core_value_sig00CB1 = {
          'unitId': var_core_value_sig38F6,
          'op': var_core_value_sigBFA9
        },
        var_core_value_sig6F31 = {
          'unitId': var_core_value_sig38F6,
          'op': var_core_value_sig6DF71
        };
      return var_core_value_sig5C7C1.syncExecuteCommand(Q.id, var_core_value_sig00CB1) ? (var_core_value_sig8232.focusUnit(var_core_value_sig38F6), var_core_value_sig89EE.pushUndoRedo({
        'unitID': var_core_value_sig38F6,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig6F31
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig00CB1
        }]
      }), true) : false;
    }
  },
  Qa = {
    'id': "base.command.move-base-hierarchy-record",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sigFBED, var_core_value_sigF447) => {
      var var_core_value_sigF37C;
      if (!var_core_value_sigF447) return false;
      let {
          unitId: var_core_value_sigE2E6,
          tableId: var_core_value_sig8FAB,
          recordId: var_core_value_sig3524,
          parentRecordId: var_core_value_sigEFDB,
          orderKey: var_core_value_sigEFD1
        } = var_core_value_sigF447,
        var_core_value_sigD10D = var_core_value_sigFBED.get(var_core_value_sig5B68),
        var_core_value_sigB8F4 = var_core_value_sigD10D.getUnit(var_core_value_sigE2E6, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sigB8F4 || !$(var_core_value_sigB8F4, var_core_value_sig8FAB, {
        'recordIds': [var_core_value_sig3524, ...(var_core_value_sigEFDB ? [var_core_value_sigEFDB] : [])]
      })) throw new N('missingRecord');
      let var_core_value_sig79CD = var_core_value_sigB8F4.getSnapshot(),
        var_core_value_sig629F = var_core_value_sig79CD.tables[var_core_value_sig8FAB],
        var_core_value_sig7591 = We(var_core_value_sig629F),
        var_core_value_sig76A8 = var_core_value_sig7591 ?? var_core_value_sigF447.fieldId ?? Ge(var_core_value_sig629F);
      if (var_core_value_sig7591 && var_core_value_sigF447.fieldId && var_core_value_sigF447.fieldId !== var_core_value_sig7591 || var_core_value_sig629F.fields[var_core_value_sig76A8] && !P(var_core_value_sig629F, var_core_value_sig76A8)) throw new N("invalidField");
      let var_core_value_sigB33E = Qe(var_core_value_sig629F, var_core_value_sig76A8),
        var_core_value_sig72901 = tt(var_core_value_sigB33E, var_core_value_sig3524, var_core_value_sigEFDB);
      if (!var_core_value_sig72901.valid) throw new N(var_core_value_sig72901.reason === var_core_value_sigC76A.SelfParent ? "selfParent" : var_core_value_sig72901.reason === var_core_value_sigC76A.Cycle ? "cycle" : 'maxDepth');
      let var_core_value_sig607E = var_core_value_sigB33E.parentByRecordId["get"](var_core_value_sig3524) ?? null,
        var_core_value_sig5B4A = var_core_value_sig629F.records[var_core_value_sig3524].orderKey;
      if (var_core_value_sig607E === var_core_value_sigEFDB && (var_core_value_sigEFD1 === undefined || var_core_value_sigEFD1 === var_core_value_sig5B4A)) return true;
      let var_core_value_sigEF9A = var_core_value_sig607E !== var_core_value_sigEFDB,
        var_core_value_sigB040 = var_core_value_sigEFD1 !== undefined && var_core_value_sigEFD1 !== var_core_value_sig5B4A,
        var_core_value_sig1344 = new U(),
        var_core_value_sig01B7 = [],
        var_core_value_sig5392 = var_core_value_sig629F.fields[var_core_value_sig76A8],
        var_core_value_sig2473 = var_core_value_sigEF9A && (!var_core_value_sig5392 || ((var_core_value_sigF37C = M(var_core_value_sig5392)) == null ? undefined : var_core_value_sigF37C.relationRole) !== var_core_value_sig9D84.Parent) ? var_core_value_sig5392 ? var_core_value_sig1344.updateField(var_core_value_sig79CD, var_core_value_sig8FAB, var_core_value_sig76A8, {
          'config': {
            ...var_core_value_sig5392.config,
            'relationRole': var_core_value_sig9D84.Parent
          }
        }) : var_core_value_sigFBED.get(X).createCreateFieldOp(var_core_value_sigB8F4, var_core_value_sig8FAB, Ke(var_core_value_sig629F, var_core_value_sig76A8, var_core_value_sigF447.parentFieldName), var_core_value_sig629F.fieldOrder['length']) : null;
      var_core_value_sig2473 && var_core_value_sig01B7.push(var_core_value_sig2473), var_core_value_sigEF9A && var_core_value_sig01B7.push(var_core_value_sig1344.updateCell(var_core_value_sig79CD, var_core_value_sig8FAB, var_core_value_sig3524, var_core_value_sig76A8, var_core_value_sigEFDB ? Fe([var_core_value_sigEFDB]) : '')), var_core_value_sigB040 && var_core_value_sig01B7.push(var_core_value_sig1344.updateRecordOrder(var_core_value_sig79CD, var_core_value_sig8FAB, var_core_value_sig3524, var_core_value_sigEFD1));
      let var_core_value_sig4FB1 = L(var_core_value_sig01B7),
        var_core_value_sig3A0E = {
          'tableId': var_core_value_sig8FAB,
          'fieldId': var_core_value_sig76A8,
          'recordId': var_core_value_sig3524,
          'oldParentRecordId': var_core_value_sig607E,
          'parentRecordId': var_core_value_sigEFDB
        },
        var_core_value_sig7ED7 = {
          'unitId': var_core_value_sigE2E6,
          'op': var_core_value_sig4FB1,
          'trigger': Qa.id,
          'hierarchyChanges': [var_core_value_sig3A0E],
          'source': var_core_value_sigF447.source ?? 'ui'
        },
        var_core_value_sigDF9C = {
          ...var_core_value_sig7ED7,
          'source': 'redo'
        };
      if (!var_core_value_sigFBED.get(var_core_value_sig4AEF).syncExecuteCommand(Q.id, var_core_value_sig7ED7)) return false;
      let var_core_value_sigCEE6 = var_core_value_sigB8F4.getSnapshot(),
        var_core_value_sig3CB8 = [];
      var_core_value_sigEF9A && var_core_value_sig3CB8.push($a(var_core_value_sigCEE6, var_core_value_sig79CD, var_core_value_sig8FAB, var_core_value_sig3524, var_core_value_sig76A8)), var_core_value_sigB040 && var_core_value_sig3CB8.push(eo(var_core_value_sigCEE6, var_core_value_sig79CD, var_core_value_sig8FAB, var_core_value_sig3524)), var_core_value_sig2473 && var_core_value_sig3CB8.push(new R().invertOp(var_core_value_sig79CD, var_core_value_sig2473));
      let var_core_value_sig3EF5 = {
        'unitId': var_core_value_sigE2E6,
        'op': L(var_core_value_sig3CB8),
        'trigger': Qa.id,
        'hierarchyChanges': [{
          ...var_core_value_sig3A0E,
          'oldParentRecordId': var_core_value_sigEFDB,
          'parentRecordId': var_core_value_sig607E
        }],
        'source': "undo"
      };
      return var_core_value_sigD10D.focusUnit(var_core_value_sigE2E6), var_core_value_sigFBED.get(var_core_value_sig5EB1).pushUndoRedo({
        'unitID': var_core_value_sigE2E6,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig3EF5
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigDF9C
        }]
      }), true;
    }
  };
function $a(var_core_value_sigD0FA, var_core_value_sig7701, var_core_value_sig548B, var_core_value_sig7D37, var_core_value_sig781D) {
  var var_core_value_sig6DD6, var_core_value_sig824C, var_core_value_sig8C7D, var_core_value_sig46B1, var_core_value_sigC5AE, var_core_value_sigA2DD, var_core_value_sigB95A, var_core_value_sig7092;
  let var_core_value_sig537D = var_core_value_sigD0FA.tables[var_core_value_sig548B],
    var_core_value_sig300A = var_core_value_sig7701.tables[var_core_value_sig548B],
    var_core_value_sig014D = (var_core_value_sig6DD6 = var_core_value_sig537D.rowIndex) == null ? undefined : var_core_value_sig6DD6[var_core_value_sig7D37],
    var_core_value_sig2768 = (var_core_value_sig824C = var_core_value_sig537D.colIndex) == null ? undefined : var_core_value_sig824C[var_core_value_sig781D],
    var_core_value_sigA179 = (var_core_value_sig8C7D = var_core_value_sig300A.rowIndex) == null ? undefined : var_core_value_sig8C7D[var_core_value_sig7D37],
    var_core_value_sig93D0 = (var_core_value_sig46B1 = var_core_value_sig300A.colIndex) == null ? undefined : var_core_value_sig46B1[var_core_value_sig781D],
    var_core_value_sig68061 = var_core_value_sig014D == null || var_core_value_sig2768 == null || (var_core_value_sigC5AE = var_core_value_sig537D.cellData) == null || (var_core_value_sigC5AE = var_core_value_sigC5AE[var_core_value_sig014D]) == null ? undefined : var_core_value_sigC5AE[var_core_value_sig2768],
    var_core_value_sig6D2F = var_core_value_sigA179 == null || var_core_value_sig93D0 == null || (var_core_value_sigA2DD = var_core_value_sig300A.cellData) == null || (var_core_value_sigA2DD = var_core_value_sigA2DD[var_core_value_sigA179]) == null ? undefined : var_core_value_sigA2DD[var_core_value_sig93D0],
    var_core_value_sig7367 = (var_core_value_sigB95A = var_core_value_sig537D.records[var_core_value_sig7D37]) == null ? undefined : var_core_value_sigB95A.values[var_core_value_sig781D],
    var_core_value_sigE7CE = (var_core_value_sig7092 = var_core_value_sig300A.records[var_core_value_sig7D37]) == null ? undefined : var_core_value_sig7092.values[var_core_value_sig781D],
    var_core_value_sigA430 = [],
    var_core_value_sigA07B = to(var_core_value_sig014D == null || var_core_value_sig2768 == null ? null : H.cellData(var_core_value_sig548B, var_core_value_sig014D, var_core_value_sig2768), var_core_value_sig68061, var_core_value_sig6D2F);
  var_core_value_sigA07B && var_core_value_sigA430.push(var_core_value_sigA07B);
  let var_core_value_sigE9BA = to(H.cell(var_core_value_sig548B, var_core_value_sig7D37, var_core_value_sig781D), var_core_value_sig7367, var_core_value_sigE7CE);
  return var_core_value_sigE9BA && var_core_value_sigA430.push(var_core_value_sigE9BA), L(var_core_value_sigA430);
}
;
function eo(var_core_value_sig6083, var_core_value_sig28DE, var_core_value_sigE1B1, var_core_value_sig5E8D) {
  var var_core_value_sig7694, var_core_value_sigB4EC;
  let var_core_value_sig39E4 = var_core_value_sig6083.tables[var_core_value_sigE1B1],
    var_core_value_sig1199 = var_core_value_sig28DE.tables[var_core_value_sigE1B1];
  return L([to([...H.record(var_core_value_sigE1B1, var_core_value_sig5E8D), 'orderKey'], (var_core_value_sig7694 = var_core_value_sig39E4.records[var_core_value_sig5E8D]) == null ? undefined : var_core_value_sig7694.orderKey, (var_core_value_sigB4EC = var_core_value_sig1199.records[var_core_value_sig5E8D]) == null ? undefined : var_core_value_sigB4EC.orderKey), to([...H.table(var_core_value_sigE1B1), "recordOrder"], var_core_value_sig39E4.recordOrder, var_core_value_sig1199.recordOrder)].filter(var_core_value_sigC674 => !!var_core_value_sigC674));
}
;
function to(var_core_value_sigC2D2, var_core_value_sig976B, var_core_value_sig7EC2) {
  if (!var_core_value_sigC2D2 || var_core_value_sig976B === undefined && var_core_value_sig7EC2 === undefined) return null;
  let var_core_value_sig3D7B = var_core_value_sig9860.getInstance();
  return var_core_value_sig7EC2 === undefined ? var_core_value_sig3D7B.removeOp(var_core_value_sigC2D2, var_core_value_sig976B) : var_core_value_sig976B === undefined ? var_core_value_sig3D7B.insertOp(var_core_value_sigC2D2, var_core_value_sig7EC2) : var_core_value_sig3D7B.replaceOp(var_core_value_sigC2D2, var_core_value_sig976B, var_core_value_sig7EC2);
}
const no = {
    'id': "base.command.move-base-view",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig5D5E, var_core_value_sigAF62) => {
      if (!var_core_value_sigAF62) return false;
      let var_core_value_sigA394 = var_core_value_sig5D5E.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig94AF,
          tableId: var_core_value_sigFEB4,
          viewId: var_core_value_sigFA83,
          target: var_core_value_sigA3B2
        } = var_core_value_sigAF62,
        var_core_value_sig63A2 = var_core_value_sigA394.getUnit(var_core_value_sig94AF, var_core_value_sigE2E8.UNIVER_BASE),
        var_core_value_sig1F1F = var_core_value_sigA3B2.beforeViewId ?? var_core_value_sigA3B2.afterViewId;
      if (!var_core_value_sig63A2 || !var_core_value_sig1F1F || var_core_value_sig1F1F === var_core_value_sigFA83 || !$(var_core_value_sig63A2, var_core_value_sigFEB4, {
        'viewIds': [var_core_value_sigFA83, var_core_value_sig1F1F]
      })) return false;
      let var_core_value_sig32EC = var_core_value_sig5D5E.get(var_core_value_sig4AEF),
        var_core_value_sig37FF = var_core_value_sig5D5E.get(var_core_value_sig5EB1),
        var_core_value_sigF340 = var_core_value_sig63A2.getSnapshot(),
        var_core_value_sig6001 = new U().moveView(var_core_value_sigF340, var_core_value_sigFEB4, var_core_value_sigFA83, var_core_value_sigA3B2),
        var_core_value_sig27FF = new R().invertOp(var_core_value_sigF340, var_core_value_sig6001),
        var_core_value_sigAF69 = {
          'unitId': var_core_value_sig94AF,
          'op': var_core_value_sig6001
        },
        var_core_value_sig2FA9 = {
          'unitId': var_core_value_sig94AF,
          'op': var_core_value_sig27FF
        };
      return var_core_value_sig32EC.syncExecuteCommand(Q.id, var_core_value_sigAF69) ? (var_core_value_sigA394.focusUnit(var_core_value_sig94AF), var_core_value_sig37FF.pushUndoRedo({
        'unitID': var_core_value_sig94AF,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig2FA9
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigAF69
        }]
      }), true) : false;
    }
  },
  ro = {
    'id': "base.command.rename-base-table",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sigE580, var_core_value_sig6B3D) => {
      if (!var_core_value_sig6B3D) return false;
      let var_core_value_sig6642 = var_core_value_sigE580.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig93C3,
          tableId: var_core_value_sigB034,
          name: var_core_value_sig0F42
        } = var_core_value_sig6B3D,
        var_core_value_sig147A1 = var_core_value_sig6642.getUnit(var_core_value_sig93C3, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig147A1 || !$(var_core_value_sig147A1, var_core_value_sigB034) || !wa(var_core_value_sig147A1.getSnapshot(), var_core_value_sig0F42, var_core_value_sigB034).valid) return false;
      let var_core_value_sig6C47 = var_core_value_sigE580.get(var_core_value_sig4AEF),
        var_core_value_sig8090 = var_core_value_sigE580.get(var_core_value_sig5EB1),
        var_core_value_sigFBF01 = var_core_value_sig147A1.getSnapshot(),
        var_core_value_sigE8F0 = new U().renameTable(var_core_value_sigFBF01, var_core_value_sigB034, var_core_value_sig0F42),
        var_core_value_sig7A47 = new R().invertOp(var_core_value_sigFBF01, var_core_value_sigE8F0),
        var_core_value_sigE6A1 = {
          'unitId': var_core_value_sig93C3,
          'op': var_core_value_sigE8F0
        },
        var_core_value_sig35B7 = {
          'unitId': var_core_value_sig93C3,
          'op': var_core_value_sig7A47
        };
      return var_core_value_sig6C47.syncExecuteCommand(Q.id, var_core_value_sigE6A1) ? (var_core_value_sig6642.focusUnit(var_core_value_sig93C3), var_core_value_sig8090.pushUndoRedo({
        'unitID': var_core_value_sig93C3,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig35B7
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigE6A1
        }]
      }), true) : false;
    }
  },
  io = {
    'id': "base.command.rename-base-view",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig9D64, var_core_value_sig29E6) => {
      if (!var_core_value_sig29E6) return false;
      let var_core_value_sig7E15 = var_core_value_sig9D64.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig2493,
          tableId: var_core_value_sig731D,
          viewId: var_core_value_sig2F24,
          name: var_core_value_sigDA3A
        } = var_core_value_sig29E6,
        var_core_value_sig4CAF = var_core_value_sig7E15.getUnit(var_core_value_sig2493, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig4CAF || !$(var_core_value_sig4CAF, var_core_value_sig731D, {
        'viewIds': [var_core_value_sig2F24]
      })) return false;
      let var_core_value_sigBCDC = var_core_value_sig9D64.get(var_core_value_sig4AEF),
        var_core_value_sig3FB8 = var_core_value_sig9D64.get(var_core_value_sig5EB1),
        var_core_value_sig2CB0 = var_core_value_sig4CAF.getSnapshot(),
        var_core_value_sig5762 = new U().renameView(var_core_value_sig2CB0, var_core_value_sig731D, var_core_value_sig2F24, var_core_value_sigDA3A),
        var_core_value_sigFE00 = new R().invertOp(var_core_value_sig2CB0, var_core_value_sig5762),
        var_core_value_sigB03D = {
          'unitId': var_core_value_sig2493,
          'op': var_core_value_sig5762
        },
        var_core_value_sig10B9 = {
          'unitId': var_core_value_sig2493,
          'op': var_core_value_sigFE00
        };
      return var_core_value_sigBCDC.syncExecuteCommand(Q.id, var_core_value_sigB03D) ? (var_core_value_sig7E15.focusUnit(var_core_value_sig2493), var_core_value_sig3FB8.pushUndoRedo({
        'unitID': var_core_value_sig2493,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig10B9
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigB03D
        }]
      }), true) : false;
    }
  },
  ao = {
    'id': "base.command.set-base-kanban-group-field",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sigB25D, var_core_value_sig7890) => {
      if (!var_core_value_sig7890) return false;
      let var_core_value_sig06EC = var_core_value_sigB25D.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig2A4A,
          tableId: var_core_value_sig35B2,
          viewId: var_core_value_sig4B92,
          fieldId: var_core_value_sig8A40
        } = var_core_value_sig7890,
        var_core_value_sig436D = var_core_value_sig06EC.getUnit(var_core_value_sig2A4A, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig436D || !$(var_core_value_sig436D, var_core_value_sig35B2, {
        'viewIds': [var_core_value_sig4B92],
        'fieldIds': [var_core_value_sig8A40]
      })) return false;
      let var_core_value_sig591B = var_core_value_sigB25D.get(var_core_value_sig4AEF),
        var_core_value_sig4FBC = var_core_value_sigB25D.get(var_core_value_sig5EB1),
        var_core_value_sig71F0 = var_core_value_sig436D.getSnapshot(),
        var_core_value_sig0812 = new U().updateViewConfig(var_core_value_sig71F0, var_core_value_sig35B2, var_core_value_sig4B92, {
          'groupFieldId': var_core_value_sig8A40
        }),
        var_core_value_sigCF891 = new R().invertOp(var_core_value_sig71F0, var_core_value_sig0812),
        var_core_value_sigA14D = {
          'unitId': var_core_value_sig2A4A,
          'op': var_core_value_sig0812
        },
        var_core_value_sigF428 = {
          'unitId': var_core_value_sig2A4A,
          'op': var_core_value_sigCF891
        };
      return var_core_value_sig591B.syncExecuteCommand(Q.id, var_core_value_sigA14D) ? (var_core_value_sig06EC.focusUnit(var_core_value_sig2A4A), var_core_value_sig4FBC.pushUndoRedo({
        'unitID': var_core_value_sig2A4A,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigF428
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigA14D
        }]
      }), true) : false;
    }
  },
  oo = {
    'id': 'base.command.set-base-name',
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig4AA7, var_core_value_sigC0CB) => {
      if (!var_core_value_sigC0CB) return false;
      let var_core_value_sig7644 = var_core_value_sig4AA7.get(var_core_value_sig5B68),
        var_core_value_sig6497 = var_core_value_sig7644.getUnit(var_core_value_sigC0CB.unitId, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig6497) return false;
      let var_core_value_sig742A = var_core_value_sig6497.getSnapshot().name;
      if (var_core_value_sig742A === var_core_value_sigC0CB.name) return true;
      let var_core_value_sig2130 = new U(),
        var_core_value_sig5BC41 = new R(),
        var_core_value_sigD642 = [],
        var_core_value_sig187F = [],
        var_core_value_sig1D39 = [var_core_value_sig6497, ...var_core_value_sig7644.getAllUnitsForType(var_core_value_sigE2E8.UNIVER_BASE).filter(var_core_value_sigC11B => var_core_value_sigC11B.getUnitId() !== var_core_value_sigC0CB.unitId)];
      for (let var_core_value_sig5461 of var_core_value_sig1D39) {
        let var_core_value_sig48EA = var_core_value_sig5461.getSnapshot(),
          var_core_value_sig5E16 = var_core_value_sig5461 === var_core_value_sig6497 ? var_core_value_sig2130.setBaseName(var_core_value_sig48EA, var_core_value_sigC0CB.name) : var_core_value_sig2130.renameFormulaUnitReferences(var_core_value_sig48EA, var_core_value_sig742A, var_core_value_sigC0CB.name);
        var_core_value_sig5E16 && (var_core_value_sigD642.push({
          'id': Q.id,
          'params': {
            'unitId': var_core_value_sig5461.getUnitId(),
            'op': var_core_value_sig5E16,
            'trigger': oo.id
          }
        }), var_core_value_sig187F.unshift({
          'id': Q.id,
          'params': {
            'unitId': var_core_value_sig5461.getUnitId(),
            'op': var_core_value_sig5BC41.invertOp(var_core_value_sig48EA, var_core_value_sig5E16),
            'trigger': oo.id
          }
        }));
      }
      let var_core_value_sig0BE3 = var_core_value_sig4AA7.get(var_core_value_sig4AEF),
        var_core_value_sigF681 = var_core_value_sig4AA7.get(var_core_value_sig5EB1),
        var_core_value_sigABEA = var_core_value_sigF681.__tempBatchingUndoRedo(var_core_value_sigC0CB.unitId);
      try {
        return var_core_value_sigE9E0(var_core_value_sigD642, var_core_value_sig0BE3).result ? (var_core_value_sig7644.focusUnit(var_core_value_sigC0CB.unitId), var_core_value_sigF681.pushUndoRedo({
          'unitID': var_core_value_sigC0CB.unitId,
          'undoMutations': var_core_value_sig187F,
          'redoMutations': var_core_value_sigD642
        }), true) : false;
      } finally {
        var_core_value_sigABEA.dispose();
      }
    }
  },
  so = {
    'type': var_core_value_sig0A86.COMMAND,
    'id': "base.command.set-permission",
    'handler'(var_core_value_sig4200, var_core_value_sig09ED) {
      return !var_core_value_sig09ED || !Sr.includes(var_core_value_sig09ED.action) || var_core_value_sig09ED.objectId !== var_core_value_sig09ED.unitId && var_core_value_sig09ED.action !== var_core_value_sigF383.Edit ? false : (Nr(var_core_value_sig4200.get(var_core_value_sig8E15), var_core_value_sig09ED.unitId, var_core_value_sig09ED.objectId, var_core_value_sig09ED.action, var_core_value_sig09ED.value), true);
    }
  };
function co(var_core_value_sig912B, var_core_value_sig60E8) {
  let var_core_value_sigC01F = I(var_core_value_sig744C.deepClone(var_core_value_sig912B)),
    var_core_value_sig3ACA = new Map();
  return var_core_value_sig60E8.forEach(var_core_value_sigBA12 => {
    var var_core_value_sig65CB, var_core_value_sig8AF4;
    let var_core_value_sig7C2D = "recordId" in var_core_value_sigBA12 ? var_core_value_sigBA12.recordId : (var_core_value_sig65CB = var_core_value_sigC01F.rowId) == null ? undefined : var_core_value_sig65CB[var_core_value_sigBA12.row],
      var_core_value_sig5F54 = "fieldId" in var_core_value_sigBA12 ? var_core_value_sigBA12.fieldId : (var_core_value_sig8AF4 = var_core_value_sigC01F.colId) == null ? undefined : var_core_value_sig8AF4[var_core_value_sigBA12.col],
      var_core_value_sig668D = var_core_value_sig5F54 ? var_core_value_sigC01F.fields[var_core_value_sig5F54] : undefined;
    if (!var_core_value_sig7C2D || !var_core_value_sig5F54 || !var_core_value_sig668D || !var_core_value_sigC01F.records[var_core_value_sig7C2D]) return;
    let var_core_value_sig6883 = vt(var_core_value_sigBA12.value, var_core_value_sig668D),
      var_core_value_sig2A05 = xt(var_core_value_sigBA12.value, var_core_value_sig6883, var_core_value_sig668D, var_core_value_sigC01F, var_core_value_sig7C2D),
      var_core_value_sig9CA8 = var_core_value_sig3ACA.get(var_core_value_sig7C2D) ?? {};
    var_core_value_sig9CA8[var_core_value_sig5F54] = var_core_value_sig2A05, var_core_value_sig3ACA.set(var_core_value_sig7C2D, var_core_value_sig9CA8);
  }), [...var_core_value_sig3ACA].map(([var_core_value_sig3C9C, var_core_value_sig7651]) => ({
    'recordId': var_core_value_sig3C9C,
    'values': var_core_value_sig7651
  }));
}
const lo = {
    'id': "base.command.set-base-range-values",
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig25D9, var_core_value_sig171B) {
      if (!var_core_value_sig171B) return false;
      let var_core_value_sigF2EF = var_core_value_sig25D9.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig9366,
          tableId: var_core_value_sigE8631,
          patches: var_core_value_sigB2CE1
        } = var_core_value_sig171B,
        var_core_value_sig18E9 = var_core_value_sigF2EF.getUnit(var_core_value_sig9366, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig18E9 || !$(var_core_value_sig18E9, var_core_value_sigE8631)) return false;
      let var_core_value_sigC0B9 = var_core_value_sig25D9.get(var_core_value_sig4AEF),
        var_core_value_sig2F10 = var_core_value_sig25D9.get(var_core_value_sig5EB1),
        var_core_value_sigC1F2 = var_core_value_sig18E9.getSnapshot(),
        var_core_value_sigDA6F = I(var_core_value_sigC1F2.tables[var_core_value_sigE8631]),
        var_core_value_sig8583 = var_core_value_sigB2CE1.map(var_core_value_sig6E4E => {
          var var_core_value_sigC2E8;
          return "recordId" in var_core_value_sig6E4E ? var_core_value_sig6E4E.recordId : (var_core_value_sigC2E8 = var_core_value_sigDA6F.rowId) == null ? undefined : var_core_value_sigC2E8[var_core_value_sig6E4E.row];
        }).filter(var_core_value_sig3A04 => var_core_value_sig3A04 != null),
        var_core_value_sig802A = var_core_value_sigB2CE1.map(var_core_value_sig935E => {
          var var_core_value_sigDC45;
          return 'fieldId' in var_core_value_sig935E ? var_core_value_sig935E.fieldId : (var_core_value_sigDC45 = var_core_value_sigDA6F.colId) == null ? undefined : var_core_value_sigDC45[var_core_value_sig935E.col];
        }).filter(var_core_value_sig7C31 => var_core_value_sig7C31 != null);
      if (var_core_value_sig8583.length !== var_core_value_sigB2CE1.length || var_core_value_sig802A.length !== var_core_value_sigB2CE1.length || !$(var_core_value_sig18E9, var_core_value_sigE8631, {
        'recordIds': var_core_value_sig8583,
        'fieldIds': var_core_value_sig802A
      }) || var_core_value_sigB2CE1.some((var_core_value_sig8B54, var_core_value_sigC19B) => !fa(var_core_value_sig18E9, var_core_value_sigE8631, var_core_value_sig802A[var_core_value_sigC19B], var_core_value_sig8B54.value))) return false;
      let var_core_value_sig368A = Je(var_core_value_sigDA6F, co(var_core_value_sigDA6F, var_core_value_sigB2CE1)),
        var_core_value_sig89F9 = var_core_value_sigB2CE1.flatMap(var_core_value_sigFB87 => {
          var var_core_value_sigA318, var_core_value_sig51A4;
          if ("row" in var_core_value_sigFB87) return [var_core_value_sigFB87];
          let var_core_value_sig2966 = (var_core_value_sigA318 = var_core_value_sigDA6F.rowIndex) == null ? undefined : var_core_value_sigA318[var_core_value_sigFB87.recordId],
            var_core_value_sigF4C4 = (var_core_value_sig51A4 = var_core_value_sigDA6F.colIndex) == null ? undefined : var_core_value_sig51A4[var_core_value_sigFB87.fieldId];
          return var_core_value_sig2966 == null || var_core_value_sigF4C4 == null ? [] : [{
            'row': var_core_value_sig2966,
            'col': var_core_value_sigF4C4,
            'value': var_core_value_sigFB87.value
          }];
        }),
        var_core_value_sig015F = new U().setRangeValues(var_core_value_sigC1F2, var_core_value_sigE8631, var_core_value_sig89F9),
        var_core_value_sigC32D = new R().invertOp(var_core_value_sigC1F2, var_core_value_sig015F),
        var_core_value_sigEB9F = {
          'unitId': var_core_value_sig9366,
          'op': var_core_value_sig015F,
          'trigger': var_core_value_sig368A.length ? lo.id : undefined,
          'hierarchyChanges': var_core_value_sig368A.length ? var_core_value_sig368A : undefined,
          'source': var_core_value_sig368A.length ? "redo" : undefined
        },
        var_core_value_sig08A4 = {
          'unitId': var_core_value_sig9366,
          'op': var_core_value_sigC32D,
          'trigger': var_core_value_sig368A.length ? lo.id : undefined,
          'hierarchyChanges': var_core_value_sig368A.length ? var_core_value_sig368A.map(var_core_value_sig5617 => ({
            ...var_core_value_sig5617,
            'oldParentRecordId': var_core_value_sig5617.parentRecordId,
            'parentRecordId': var_core_value_sig5617.oldParentRecordId
          })) : undefined,
          'source': var_core_value_sig368A.length ? "undo" : undefined
        },
        var_core_value_sigE286 = {
          ...var_core_value_sigEB9F,
          'source': var_core_value_sig368A.length ? var_core_value_sig171B.source ?? 'ui' : undefined
        };
      return var_core_value_sigC0B9.syncExecuteCommand(Q.id, var_core_value_sigE286) ? (var_core_value_sigF2EF.focusUnit(var_core_value_sig9366), var_core_value_sig2F10.pushUndoRedo({
        'unitID': var_core_value_sig9366,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig08A4
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigEB9F
        }]
      }), true) : false;
    }
  },
  uo = {
    'id': "base.command.set-base-record-values",
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig91C3, var_core_value_sig63B3) {
      if (!var_core_value_sig63B3) return false;
      let var_core_value_sig150A = var_core_value_sig91C3.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig2074,
          tableId: var_core_value_sig038C,
          patches: var_core_value_sigE79F
        } = var_core_value_sig63B3,
        var_core_value_sigC725 = var_core_value_sig150A.getUnit(var_core_value_sig2074, var_core_value_sigE2E8.UNIVER_BASE),
        var_core_value_sigD836 = var_core_value_sigE79F.map(var_core_value_sig450E => var_core_value_sig450E.recordId),
        var_core_value_sigE06D = var_core_value_sigE79F.flatMap(var_core_value_sig92A31 => Object.keys(var_core_value_sig92A31.values));
      if (!var_core_value_sigC725 || !$(var_core_value_sigC725, var_core_value_sig038C, {
        'recordIds': var_core_value_sigD836,
        'fieldIds': var_core_value_sigE06D
      }) || var_core_value_sigE79F.some(var_core_value_sig61E5 => Object.entries(var_core_value_sig61E5.values).some(([var_core_value_sig09F3, var_core_value_sig4592]) => !fa(var_core_value_sigC725, var_core_value_sig038C, var_core_value_sig09F3, var_core_value_sig4592)))) return false;
      let var_core_value_sig8DC3 = Je(var_core_value_sigC725.getSnapshot().tables[var_core_value_sig038C], var_core_value_sigE79F),
        var_core_value_sig194D = var_core_value_sig91C3.get(var_core_value_sig4AEF),
        var_core_value_sigE5C1 = var_core_value_sig91C3.get(var_core_value_sig5EB1),
        var_core_value_sig81B0 = var_core_value_sig91C3.get(X).createSetRecordValuesOp(var_core_value_sigC725, var_core_value_sig038C, var_core_value_sigE79F),
        var_core_value_sig6DF72 = new R().invertOp(var_core_value_sigC725.getSnapshot(), var_core_value_sig81B0),
        var_core_value_sig8E2B = {
          'unitId': var_core_value_sig2074,
          'op': var_core_value_sig81B0,
          'trigger': var_core_value_sig8DC3.length ? uo.id : undefined,
          'hierarchyChanges': var_core_value_sig8DC3.length ? var_core_value_sig8DC3 : undefined,
          'source': var_core_value_sig8DC3.length ? var_core_value_sig63B3.source ?? 'ui' : undefined
        },
        var_core_value_sigC9E01 = {
          ...var_core_value_sig8E2B,
          'source': var_core_value_sig8DC3.length ? "redo" : undefined
        },
        var_core_value_sigDC37 = {
          'unitId': var_core_value_sig2074,
          'op': var_core_value_sig6DF72,
          'trigger': var_core_value_sig8DC3.length ? uo.id : undefined,
          'hierarchyChanges': var_core_value_sig8DC3.length ? var_core_value_sig8DC3.map(var_core_value_sig9E17 => ({
            ...var_core_value_sig9E17,
            'oldParentRecordId': var_core_value_sig9E17.parentRecordId,
            'parentRecordId': var_core_value_sig9E17.oldParentRecordId
          })) : undefined,
          'source': var_core_value_sig8DC3.length ? "undo" : undefined
        };
      return var_core_value_sig194D.syncExecuteCommand(Q.id, var_core_value_sig8E2B) ? (var_core_value_sig150A.focusUnit(var_core_value_sig2074), var_core_value_sigE5C1.pushUndoRedo({
        'unitID': var_core_value_sig2074,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigDC37
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigC9E01
        }]
      }), true) : false;
    }
  },
  fo = {
    'id': 'base.command.set-base-table-hierarchy-field',
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig6133, var_core_value_sigDCBA) => {
      if (!var_core_value_sigDCBA) return false;
      let {
          unitId: var_core_value_sigEE95,
          tableId: var_core_value_sig98C4,
          fieldId: var_core_value_sig2F14
        } = var_core_value_sigDCBA,
        var_core_value_sigB9DF = var_core_value_sig6133.get(var_core_value_sig5B68),
        var_core_value_sig81A9 = var_core_value_sigB9DF.getUnit(var_core_value_sigEE95, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig81A9 || !$(var_core_value_sig81A9, var_core_value_sig98C4)) return false;
      let var_core_value_sigF301 = var_core_value_sig81A9.getSnapshot(),
        var_core_value_sig1679 = var_core_value_sigF301.tables[var_core_value_sig98C4];
      if (var_core_value_sig2F14 !== null && !P(var_core_value_sig1679, var_core_value_sig2F14)) throw new N("invalidField");
      if (We(var_core_value_sig1679) === var_core_value_sig2F14) return true;
      let var_core_value_sigF73D = new U(),
        var_core_value_sigDB18 = L(Object.values(var_core_value_sig1679.fields).flatMap(var_core_value_sigB97D => {
          if (!P(var_core_value_sig1679, var_core_value_sigB97D.id)) return [];
          let var_core_value_sigFE1E = M(var_core_value_sigB97D);
          if (!var_core_value_sigFE1E) return [];
          let var_core_value_sig5F541 = var_core_value_sigB97D.id === var_core_value_sig2F14;
          if (var_core_value_sigFE1E.relationRole === var_core_value_sig9D84.Parent === var_core_value_sig5F541) return [];
          let var_core_value_sig84B9 = {
            ...var_core_value_sigB97D.config,
            'targetTableId': var_core_value_sigFE1E.targetTableId,
            'multiple': var_core_value_sigFE1E.multiple
          };
          return var_core_value_sig5F541 ? var_core_value_sig84B9.relationRole = var_core_value_sig9D84.Parent : delete var_core_value_sig84B9.relationRole, [var_core_value_sigF73D.updateField(var_core_value_sigF301, var_core_value_sig98C4, var_core_value_sigB97D.id, {
            'config': var_core_value_sig84B9
          })];
        })),
        var_core_value_sig4E47 = new R().invertOp(var_core_value_sigF301, var_core_value_sigDB18),
        var_core_value_sigACB0 = {
          'unitId': var_core_value_sigEE95,
          'op': var_core_value_sigDB18
        },
        var_core_value_sigDEB1 = {
          'unitId': var_core_value_sigEE95,
          'op': var_core_value_sig4E47
        };
      return var_core_value_sig6133.get(var_core_value_sig4AEF).syncExecuteCommand(Q.id, var_core_value_sigACB0) ? (var_core_value_sigB9DF.focusUnit(var_core_value_sigEE95), var_core_value_sig6133.get(var_core_value_sig5EB1).pushUndoRedo({
        'unitID': var_core_value_sigEE95,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigDEB1
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigACB0
        }]
      }), true) : false;
    }
  },
  po = {
    'id': 'base.command.set-base-view-field-order',
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sigF3BE, var_core_value_sig31FA) => {
      if (!var_core_value_sig31FA) return false;
      let var_core_value_sigC23B = var_core_value_sigF3BE.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sigB0B1,
          tableId: var_core_value_sigCB10,
          viewId: var_core_value_sig97AF,
          fieldId: var_core_value_sig8A6D,
          target: var_core_value_sigB74E
        } = var_core_value_sig31FA,
        var_core_value_sigBD4F = var_core_value_sigC23B.getUnit(var_core_value_sigB0B1, var_core_value_sigE2E8.UNIVER_BASE),
        var_core_value_sig9C8D = var_core_value_sigB74E.beforeFieldId ?? var_core_value_sigB74E.afterFieldId;
      if (!var_core_value_sigBD4F || !var_core_value_sig9C8D || var_core_value_sig9C8D === var_core_value_sig8A6D || !$(var_core_value_sigBD4F, var_core_value_sigCB10, {
        'viewIds': [var_core_value_sig97AF],
        'fieldIds': [var_core_value_sig8A6D, var_core_value_sig9C8D]
      })) return false;
      let var_core_value_sig1DE2 = var_core_value_sigBD4F.getSnapshot().tables[var_core_value_sigCB10],
        var_core_value_sig8E68 = var_core_value_sig1DE2.fields[var_core_value_sig8A6D],
        var_core_value_sigA81A = var_core_value_sig1DE2.fields[var_core_value_sig9C8D];
      if (var_core_value_sig8E68.system === true || var_core_value_sig8E68.type === var_core_value_sig06E6.RecordId || var_core_value_sigA81A.system === true || var_core_value_sigA81A.type === var_core_value_sig06E6.RecordId) return false;
      let var_core_value_sig15C3 = var_core_value_sigF3BE.get(var_core_value_sig4AEF),
        var_core_value_sig5CFD1 = var_core_value_sigF3BE.get(var_core_value_sig5EB1),
        var_core_value_sigCA24 = var_core_value_sigBD4F.getSnapshot(),
        var_core_value_sig0B5D = new U().setViewFieldOrder(var_core_value_sigCA24, var_core_value_sigCB10, var_core_value_sig97AF, var_core_value_sig8A6D, var_core_value_sigB74E),
        var_core_value_sigFC84 = new R().invertOp(var_core_value_sigCA24, var_core_value_sig0B5D),
        var_core_value_sigCA9B = {
          'unitId': var_core_value_sigB0B1,
          'op': var_core_value_sig0B5D
        },
        var_core_value_sig341C1 = {
          'unitId': var_core_value_sigB0B1,
          'op': var_core_value_sigFC84
        };
      return var_core_value_sig15C3.syncExecuteCommand(Q.id, var_core_value_sigCA9B) ? (var_core_value_sigC23B.focusUnit(var_core_value_sigB0B1), var_core_value_sig5CFD1.pushUndoRedo({
        'unitID': var_core_value_sigB0B1,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig341C1
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigCA9B
        }]
      }), true) : false;
    }
  },
  mo = {
    'id': "base.command.set-base-view-field-visible",
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig2AA1, var_core_value_sigA506) {
      if (!var_core_value_sigA506) return false;
      let var_core_value_sig6FC9 = var_core_value_sig2AA1.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig05BE,
          tableId: var_core_value_sig097E,
          viewId: var_core_value_sig0240,
          fieldId: var_core_value_sig90E0,
          visible: var_core_value_sigA81B1
        } = var_core_value_sigA506,
        var_core_value_sig1D0B = var_core_value_sig6FC9.getUnit(var_core_value_sig05BE, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig1D0B || !$(var_core_value_sig1D0B, var_core_value_sig097E, {
        'viewIds': [var_core_value_sig0240],
        'fieldIds': [var_core_value_sig90E0]
      })) return false;
      let var_core_value_sigA5CC = var_core_value_sig1D0B.getSnapshot().tables[var_core_value_sig097E].fields[var_core_value_sig90E0];
      if (var_core_value_sigA5CC.system === true || var_core_value_sigA5CC.type === var_core_value_sig06E6.RecordId) return false;
      let var_core_value_sigA22E = var_core_value_sig2AA1.get(var_core_value_sig4AEF),
        var_core_value_sigAFB6 = var_core_value_sig2AA1.get(var_core_value_sig5EB1),
        var_core_value_sigFC4C = var_core_value_sig1D0B.getSnapshot(),
        var_core_value_sigAE5C = new U().setViewFieldVisible(var_core_value_sigFC4C, var_core_value_sig097E, var_core_value_sig0240, var_core_value_sig90E0, var_core_value_sigA81B1),
        var_core_value_sig9A4B = new R().invertOp(var_core_value_sigFC4C, var_core_value_sigAE5C),
        var_core_value_sigB1771 = {
          'unitId': var_core_value_sig05BE,
          'op': var_core_value_sigAE5C
        },
        var_core_value_sig5FE4 = {
          'unitId': var_core_value_sig05BE,
          'op': var_core_value_sig9A4B
        };
      return var_core_value_sigA22E.syncExecuteCommand(Q.id, var_core_value_sigB1771) ? (var_core_value_sig6FC9.focusUnit(var_core_value_sig05BE), var_core_value_sigAFB6.pushUndoRedo({
        'unitID': var_core_value_sig05BE,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig5FE4
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigB1771
        }]
      }), true) : false;
    }
  },
  ho = {
    'id': 'base.command.set-base-view-field-width',
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig0601, var_core_value_sig2AAC) => {
      if (!var_core_value_sig2AAC) return false;
      let var_core_value_sig6D82 = var_core_value_sig0601.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig8E0C,
          tableId: var_core_value_sigA440,
          viewId: var_core_value_sigB2E6,
          fieldId: var_core_value_sigA35D,
          width: var_core_value_sig5C6B
        } = var_core_value_sig2AAC,
        var_core_value_sigFA1E = var_core_value_sig6D82.getUnit(var_core_value_sig8E0C, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sigFA1E || !$(var_core_value_sigFA1E, var_core_value_sigA440, {
        'viewIds': [var_core_value_sigB2E6],
        'fieldIds': [var_core_value_sigA35D]
      })) return false;
      let var_core_value_sig713B = var_core_value_sigFA1E.getSnapshot().tables[var_core_value_sigA440].fields[var_core_value_sigA35D];
      if (var_core_value_sig713B.system === true || var_core_value_sig713B.type === var_core_value_sig06E6.RecordId) return false;
      let var_core_value_sigDEC9 = var_core_value_sig0601.get(var_core_value_sig4AEF),
        var_core_value_sig1BE8 = var_core_value_sig0601.get(var_core_value_sig5EB1),
        var_core_value_sig955E = var_core_value_sigFA1E.getSnapshot(),
        var_core_value_sig6248 = new U().setViewFieldWidth(var_core_value_sig955E, var_core_value_sigA440, var_core_value_sigB2E6, var_core_value_sigA35D, var_core_value_sig5C6B),
        var_core_value_sigEE43 = new R().invertOp(var_core_value_sig955E, var_core_value_sig6248),
        var_core_value_sig96E6 = {
          'unitId': var_core_value_sig8E0C,
          'op': var_core_value_sig6248
        },
        var_core_value_sig5045 = {
          'unitId': var_core_value_sig8E0C,
          'op': var_core_value_sigEE43
        };
      return var_core_value_sigDEC9.syncExecuteCommand(Q.id, var_core_value_sig96E6) ? (var_core_value_sig6D82.focusUnit(var_core_value_sig8E0C), var_core_value_sig1BE8.pushUndoRedo({
        'unitID': var_core_value_sig8E0C,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig5045
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig96E6
        }]
      }), true) : false;
    }
  },
  go = {
    'id': 'base.command.set-base-view-filter',
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig826A, var_core_value_sig16C71) => {
      if (!var_core_value_sig16C71) return false;
      let var_core_value_sig3040 = var_core_value_sig826A.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig1A10,
          tableId: var_core_value_sig271B,
          viewId: var_core_value_sigC24D,
          filter: var_core_value_sig793B
        } = var_core_value_sig16C71,
        var_core_value_sigCAD2 = var_core_value_sig3040.getUnit(var_core_value_sig1A10, var_core_value_sigE2E8.UNIVER_BASE),
        var_core_value_sigCF20 = (var_core_value_sig793B == null ? undefined : var_core_value_sig793B.conditions["map"](var_core_value_sig09DF => var_core_value_sig09DF.fieldId)) ?? [];
      if (!var_core_value_sigCAD2 || !$(var_core_value_sigCAD2, var_core_value_sig271B, {
        'viewIds': [var_core_value_sigC24D],
        'fieldIds': var_core_value_sigCF20
      })) return false;
      let var_core_value_sigF733 = var_core_value_sig826A.get(var_core_value_sig4AEF),
        var_core_value_sigEABC = var_core_value_sig826A.get(var_core_value_sig5EB1),
        var_core_value_sig416F = var_core_value_sigCAD2.getSnapshot(),
        var_core_value_sigF4B7 = new U().setViewFilter(var_core_value_sig416F, var_core_value_sig271B, var_core_value_sigC24D, var_core_value_sig793B),
        var_core_value_sig78BE = new R().invertOp(var_core_value_sig416F, var_core_value_sigF4B7),
        var_core_value_sig8BF7 = {
          'unitId': var_core_value_sig1A10,
          'op': var_core_value_sigF4B7
        },
        var_core_value_sigAD29 = {
          'unitId': var_core_value_sig1A10,
          'op': var_core_value_sig78BE
        };
      return var_core_value_sigF733.syncExecuteCommand(Q.id, var_core_value_sig8BF7) ? (var_core_value_sig3040.focusUnit(var_core_value_sig1A10), var_core_value_sigEABC.pushUndoRedo({
        'unitID': var_core_value_sig1A10,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigAD29
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig8BF7
        }]
      }), true) : false;
    }
  },
  _o = {
    'id': "base.command.set-base-view-group",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig6588, var_core_value_sigE223) => {
      if (!var_core_value_sigE223) return false;
      let var_core_value_sigEFBD = var_core_value_sig6588.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig20EC,
          tableId: var_core_value_sig549B,
          viewId: var_core_value_sig0FA5,
          group: var_core_value_sig1B16
        } = var_core_value_sigE223,
        var_core_value_sig86C4 = var_core_value_sigEFBD.getUnit(var_core_value_sig20EC, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig86C4 || !$(var_core_value_sig86C4, var_core_value_sig549B, {
        'viewIds': [var_core_value_sig0FA5],
        'fieldIds': var_core_value_sig1B16.map(var_core_value_sig3A251 => var_core_value_sig3A251.fieldId)
      })) return false;
      let var_core_value_sig2634 = var_core_value_sig6588.get(var_core_value_sig4AEF),
        var_core_value_sig77A5 = var_core_value_sig6588.get(var_core_value_sig5EB1),
        var_core_value_sig258A = var_core_value_sig86C4.getSnapshot(),
        var_core_value_sigCE81 = new U().setViewGroup(var_core_value_sig258A, var_core_value_sig549B, var_core_value_sig0FA5, var_core_value_sig1B16),
        var_core_value_sigD09E = new R().invertOp(var_core_value_sig258A, var_core_value_sigCE81),
        var_core_value_sigE729 = {
          'unitId': var_core_value_sig20EC,
          'op': var_core_value_sigCE81
        },
        var_core_value_sig1658 = {
          'unitId': var_core_value_sig20EC,
          'op': var_core_value_sigD09E
        };
      return var_core_value_sig2634.syncExecuteCommand(Q.id, var_core_value_sigE729) ? (var_core_value_sigEFBD.focusUnit(var_core_value_sig20EC), var_core_value_sig77A5.pushUndoRedo({
        'unitID': var_core_value_sig20EC,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig1658
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigE729
        }]
      }), true) : false;
    }
  },
  vo = {
    'id': 'base.command.set-base-view-sort',
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sigFDC0, var_core_value_sig0CF8) => {
      if (!var_core_value_sig0CF8) return false;
      let var_core_value_sigE365 = var_core_value_sigFDC0.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig411D,
          tableId: var_core_value_sigF3E2,
          viewId: var_core_value_sig8429,
          sort: var_core_value_sigDAB4
        } = var_core_value_sig0CF8,
        var_core_value_sigBE2D = var_core_value_sigE365.getUnit(var_core_value_sig411D, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sigBE2D || !$(var_core_value_sigBE2D, var_core_value_sigF3E2, {
        'viewIds': [var_core_value_sig8429],
        'fieldIds': var_core_value_sigDAB4.map(var_core_value_sig5B2B => var_core_value_sig5B2B.fieldId)
      })) return false;
      let var_core_value_sig29F9 = var_core_value_sigFDC0.get(var_core_value_sig4AEF),
        var_core_value_sigA738 = var_core_value_sigFDC0.get(var_core_value_sig5EB1),
        var_core_value_sigA249 = var_core_value_sigBE2D.getSnapshot(),
        var_core_value_sigAE70 = new U().setViewSort(var_core_value_sigA249, var_core_value_sigF3E2, var_core_value_sig8429, var_core_value_sigDAB4),
        var_core_value_sigE3B2 = new R().invertOp(var_core_value_sigA249, var_core_value_sigAE70),
        var_core_value_sigE76A = {
          'unitId': var_core_value_sig411D,
          'op': var_core_value_sigAE70
        },
        var_core_value_sig540E = {
          'unitId': var_core_value_sig411D,
          'op': var_core_value_sigE3B2
        };
      return var_core_value_sig29F9.syncExecuteCommand(Q.id, var_core_value_sigE76A) ? (var_core_value_sigE365.focusUnit(var_core_value_sig411D), var_core_value_sigA738.pushUndoRedo({
        'unitID': var_core_value_sig411D,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig540E
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigE76A
        }]
      }), true) : false;
    }
  },
  yo = {
    'id': "base.command.update-base-cell",
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig8FE2, var_core_value_sig5B59) {
      if (!var_core_value_sig5B59) return false;
      let var_core_value_sigA74E = var_core_value_sig8FE2.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig438B,
          tableId: var_core_value_sigCD4B,
          recordId: var_core_value_sig3102,
          fieldId: var_core_value_sig46AF,
          value: var_core_value_sig4A74
        } = var_core_value_sig5B59,
        var_core_value_sig63FB = var_core_value_sigA74E.getUnit(var_core_value_sig438B, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig63FB || !$(var_core_value_sig63FB, var_core_value_sigCD4B, {
        'recordIds': [var_core_value_sig3102],
        'fieldIds': [var_core_value_sig46AF]
      }) || !fa(var_core_value_sig63FB, var_core_value_sigCD4B, var_core_value_sig46AF, var_core_value_sig4A74)) return false;
      let var_core_value_sigADD7 = var_core_value_sig63FB.getSnapshot().tables[var_core_value_sigCD4B],
        var_core_value_sig49E0 = P(var_core_value_sigADD7, var_core_value_sig46AF) && qe(var_core_value_sigADD7).includes(var_core_value_sig46AF),
        var_core_value_sigAFAA = var_core_value_sig49E0 ? Qe(var_core_value_sigADD7, var_core_value_sig46AF) : null,
        var_core_value_sig0D2F = (var_core_value_sigAFAA == null ? undefined : var_core_value_sigAFAA.parentByRecordId["get"](var_core_value_sig3102)) ?? null,
        var_core_value_sig43F41 = var_core_value_sig49E0 ? Pe(var_core_value_sig4A74)[0] ?? null : null;
      if (var_core_value_sigAFAA) {
        if (var_core_value_sig43F41 && !var_core_value_sigADD7.records[var_core_value_sig43F41]) throw new N("missingRecord");
        let var_core_value_sigE5FE = tt(var_core_value_sigAFAA, var_core_value_sig3102, var_core_value_sig43F41);
        if (!var_core_value_sigE5FE.valid) throw new N(var_core_value_sigE5FE.reason === var_core_value_sigC76A.SelfParent ? "selfParent" : var_core_value_sigE5FE.reason === var_core_value_sigC76A.Cycle ? 'cycle' : "maxDepth");
      }
      let var_core_value_sigEA921 = var_core_value_sig8FE2.get(var_core_value_sig4AEF),
        var_core_value_sig125D = var_core_value_sig8FE2.get(var_core_value_sig5EB1),
        var_core_value_sig1FF9 = var_core_value_sig8FE2.get(X),
        var_core_value_sig85CF;
      try {
        var_core_value_sig85CF = var_core_value_sig1FF9.createUpdateCellOp(var_core_value_sig63FB, var_core_value_sigCD4B, var_core_value_sig3102, var_core_value_sig46AF, var_core_value_sig4A74);
      } catch (var_core_value_sig78A5) {
        return console.error("Failed to create update cell operation:", var_core_value_sig78A5), false;
      }
      let var_core_value_sig4F23 = new R().invertOp(var_core_value_sig63FB.getSnapshot(), var_core_value_sig85CF),
        var_core_value_sigC116 = var_core_value_sig49E0 && var_core_value_sig0D2F !== var_core_value_sig43F41 ? [{
          'tableId': var_core_value_sigCD4B,
          'fieldId': var_core_value_sig46AF,
          'recordId': var_core_value_sig3102,
          'oldParentRecordId': var_core_value_sig0D2F,
          'parentRecordId': var_core_value_sig43F41
        }] : undefined,
        var_core_value_sig3408 = {
          'unitId': var_core_value_sig438B,
          'op': var_core_value_sig85CF,
          'trigger': var_core_value_sigC116 ? yo.id : undefined,
          'hierarchyChanges': var_core_value_sigC116,
          'source': var_core_value_sigC116 ? var_core_value_sig5B59.source ?? 'ui' : undefined
        },
        var_core_value_sig4B4D = {
          ...var_core_value_sig3408,
          'source': var_core_value_sigC116 ? "redo" : undefined
        },
        var_core_value_sig93D7 = {
          'unitId': var_core_value_sig438B,
          'op': var_core_value_sig4F23,
          'trigger': var_core_value_sigC116 ? yo.id : undefined,
          'hierarchyChanges': var_core_value_sigC116 == null ? undefined : var_core_value_sigC116.map(var_core_value_sig9A4C => ({
            ...var_core_value_sig9A4C,
            'oldParentRecordId': var_core_value_sig9A4C.parentRecordId,
            'parentRecordId': var_core_value_sig9A4C.oldParentRecordId
          })),
          'source': var_core_value_sigC116 ? "undo" : undefined
        };
      return var_core_value_sigEA921.syncExecuteCommand(Q.id, var_core_value_sig3408) ? (var_core_value_sigA74E.focusUnit(var_core_value_sig438B), var_core_value_sig125D.pushUndoRedo({
        'unitID': var_core_value_sig438B,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig93D7
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig4B4D
        }]
      }), true) : false;
    }
  },
  bo = {
    'id': "base.command.update-base-field-description",
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sigFED2, var_core_value_sig7392) {
      if (!var_core_value_sig7392) return false;
      let var_core_value_sig878B = var_core_value_sigFED2.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig52D0,
          tableId: var_core_value_sig3B18,
          fieldId: var_core_value_sigCA31
        } = var_core_value_sig7392,
        var_core_value_sig9C20 = var_core_value_sig878B.getUnit(var_core_value_sig52D0, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig9C20 || !$(var_core_value_sig9C20, var_core_value_sig3B18, {
        'fieldIds': [var_core_value_sigCA31]
      })) return false;
      let var_core_value_sig7435 = var_core_value_sigFED2.get(var_core_value_sig4AEF),
        var_core_value_sig9C58 = var_core_value_sigFED2.get(var_core_value_sig5EB1),
        var_core_value_sig676C = var_core_value_sig9C20.getSnapshot(),
        var_core_value_sig9D47 = var_core_value_sig7392.description["trim"](),
        var_core_value_sigA6E3 = new U().updateField(var_core_value_sig676C, var_core_value_sig3B18, var_core_value_sigCA31, {
          'description': var_core_value_sig9D47
        }),
        var_core_value_sig34CC = new R().invertOp(var_core_value_sig9C20.getSnapshot(), var_core_value_sigA6E3),
        var_core_value_sig67F5 = {
          'unitId': var_core_value_sig52D0,
          'op': var_core_value_sigA6E3
        },
        var_core_value_sigED1D = {
          'unitId': var_core_value_sig52D0,
          'op': var_core_value_sig34CC
        };
      return var_core_value_sig7435.syncExecuteCommand(Q.id, var_core_value_sig67F5) ? (var_core_value_sig878B.focusUnit(var_core_value_sig52D0), var_core_value_sig9C58.pushUndoRedo({
        'unitID': var_core_value_sig52D0,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigED1D
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig67F5
        }]
      }), true) : false;
    }
  },
  xo = {
    'id': "base.command.update-base-field",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig5A38, var_core_value_sig4E8A) => {
      if (!var_core_value_sig4E8A) return false;
      let var_core_value_sigE618 = var_core_value_sig5A38.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig2700,
          tableId: var_core_value_sigD319,
          fieldId: var_core_value_sig5E9A,
          patch: var_core_value_sig52E2
        } = var_core_value_sig4E8A,
        var_core_value_sig00DD = var_core_value_sigE618.getUnit(var_core_value_sig2700, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig00DD || var_core_value_sig5E9A === var_core_value_sigED20 || !$(var_core_value_sig00DD, var_core_value_sigD319, {
        'fieldIds': [var_core_value_sig5E9A]
      })) return false;
      let var_core_value_sigA864 = var_core_value_sig5A38.get(var_core_value_sig4AEF),
        var_core_value_sig0E68 = var_core_value_sig5A38.get(var_core_value_sig5EB1),
        var_core_value_sig2889 = var_core_value_sig00DD.getSnapshot();
      if (!da(var_core_value_sig00DD, var_core_value_sigD319, {
        ...var_core_value_sig2889.tables[var_core_value_sigD319].fields[var_core_value_sig5E9A],
        ...var_core_value_sig52E2
      })) return false;
      let var_core_value_sigB3EE1 = new U().updateField(var_core_value_sig2889, var_core_value_sigD319, var_core_value_sig5E9A, var_core_value_sig52E2),
        var_core_value_sig0E3B = new R().invertOp(var_core_value_sig2889, var_core_value_sigB3EE1),
        var_core_value_sigDCD1 = {
          'unitId': var_core_value_sig2700,
          'op': var_core_value_sigB3EE1
        },
        var_core_value_sigA77C = {
          'unitId': var_core_value_sig2700,
          'op': var_core_value_sig0E3B
        };
      return var_core_value_sigA864.syncExecuteCommand(Q.id, var_core_value_sigDCD1) ? (var_core_value_sigE618.focusUnit(var_core_value_sig2700), var_core_value_sig0E68.pushUndoRedo({
        'unitID': var_core_value_sig2700,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigA77C
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigDCD1
        }]
      }), true) : false;
    }
  },
  So = {
    'id': "base.command.update-base-kanban-config",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sigEF78, var_core_value_sigA7F8) => {
      if (!var_core_value_sigA7F8) return false;
      let var_core_value_sig007E = var_core_value_sigEF78.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sigD261,
          tableId: var_core_value_sigE75A,
          viewId: var_core_value_sigEC28,
          patch: var_core_value_sig7870
        } = var_core_value_sigA7F8,
        var_core_value_sig7C02 = var_core_value_sig007E.getUnit(var_core_value_sigD261, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig7C02 || !$(var_core_value_sig7C02, var_core_value_sigE75A, {
        'viewIds': [var_core_value_sigEC28]
      })) return false;
      let var_core_value_sig5489 = var_core_value_sigEF78.get(var_core_value_sig4AEF),
        var_core_value_sig632D = var_core_value_sigEF78.get(var_core_value_sig5EB1),
        var_core_value_sigE6D3 = var_core_value_sig7C02.getSnapshot(),
        var_core_value_sig2C1F = new U().updateViewConfig(var_core_value_sigE6D3, var_core_value_sigE75A, var_core_value_sigEC28, var_core_value_sig7870),
        var_core_value_sigF27F = new R().invertOp(var_core_value_sigE6D3, var_core_value_sig2C1F),
        var_core_value_sig56FA = {
          'unitId': var_core_value_sigD261,
          'op': var_core_value_sig2C1F
        },
        var_core_value_sig6442 = {
          'unitId': var_core_value_sigD261,
          'op': var_core_value_sigF27F
        };
      return var_core_value_sig5489.syncExecuteCommand(Q.id, var_core_value_sig56FA) ? (var_core_value_sig007E.focusUnit(var_core_value_sigD261), var_core_value_sig632D.pushUndoRedo({
        'unitID': var_core_value_sigD261,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig6442
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig56FA
        }]
      }), true) : false;
    }
  },
  Co = {
    'id': "base.command.update-base-record-order",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig3CA3, var_core_value_sigC1AB) => {
      if (!var_core_value_sigC1AB) return false;
      let var_core_value_sig5E6D = var_core_value_sig3CA3.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sigA1F4,
          tableId: var_core_value_sig0CE9,
          recordId: var_core_value_sig3281,
          orderKey: var_core_value_sig486A
        } = var_core_value_sigC1AB,
        var_core_value_sig7061 = var_core_value_sig5E6D.getUnit(var_core_value_sigA1F4, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig7061 || !$(var_core_value_sig7061, var_core_value_sig0CE9, {
        'recordIds': [var_core_value_sig3281]
      })) return false;
      let var_core_value_sig795D = var_core_value_sig3CA3.get(var_core_value_sig4AEF),
        var_core_value_sigD358 = var_core_value_sig3CA3.get(var_core_value_sig5EB1),
        var_core_value_sig42D2 = var_core_value_sig7061.getSnapshot(),
        var_core_value_sigB02D = new U().updateRecordOrder(var_core_value_sig42D2, var_core_value_sig0CE9, var_core_value_sig3281, var_core_value_sig486A),
        var_core_value_sig5235 = new R().invertOp(var_core_value_sig42D2, var_core_value_sigB02D),
        var_core_value_sig36851 = {
          'unitId': var_core_value_sigA1F4,
          'op': var_core_value_sigB02D
        },
        var_core_value_sig06F2 = {
          'unitId': var_core_value_sigA1F4,
          'op': var_core_value_sig5235
        };
      return var_core_value_sig795D.syncExecuteCommand(Q.id, var_core_value_sig36851) ? (var_core_value_sig5E6D.focusUnit(var_core_value_sigA1F4), var_core_value_sigD358.pushUndoRedo({
        'unitID': var_core_value_sigA1F4,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig06F2
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig36851
        }]
      }), true) : false;
    }
  };
let wo = function (var_core_value_sigA50E) {
  return var_core_value_sigA50E.Set = "set", var_core_value_sigA50E.Add = "add", var_core_value_sigA50E.Delete = "delete", var_core_value_sigA50E.Clear = 'clear', var_core_value_sigA50E;
}({});
const To = {
  'id': 'base.command.update-base-view-conditional-color-rules',
  'type': var_core_value_sig0A86.COMMAND,
  'handler': (var_core_value_sigCE3D, var_core_value_sigF82C) => {
    var var_core_value_sig0809;
    if (!var_core_value_sigF82C) return false;
    let var_core_value_sig0FDC = var_core_value_sigCE3D.get(var_core_value_sig5B68),
      var_core_value_sig28AB = var_core_value_sig0FDC.getUnit(var_core_value_sigF82C.unitId, var_core_value_sigE2E8.UNIVER_BASE);
    if (!var_core_value_sig28AB || !$(var_core_value_sig28AB, var_core_value_sigF82C.tableId, {
      'viewIds': [var_core_value_sigF82C.viewId]
    })) return false;
    let var_core_value_sigCEEB = var_core_value_sig28AB.getSnapshot(),
      var_core_value_sigF064 = var_core_value_sigCEEB.tables[var_core_value_sigF82C.tableId],
      var_core_value_sig2D5A = Eo(((var_core_value_sig0809 = var_core_value_sigF064.views[var_core_value_sigF82C.viewId].config["conditionalColoring"]) == null ? undefined : var_core_value_sig0809.rules) ?? [], var_core_value_sigF82C);
    if (!var_core_value_sig2D5A) return false;
    Do(var_core_value_sigF064, var_core_value_sig2D5A);
    let var_core_value_sig0D17 = new U().updateViewConfig(var_core_value_sigCEEB, var_core_value_sigF82C.tableId, var_core_value_sigF82C.viewId, {
        'conditionalColoring': var_core_value_sig2D5A.length ? {
          'rules': var_core_value_sig2D5A
        } : null
      }),
      var_core_value_sigF02B = new R().invertOp(var_core_value_sigCEEB, var_core_value_sig0D17),
      var_core_value_sigCC5B = {
        'unitId': var_core_value_sigF82C.unitId,
        'op': var_core_value_sig0D17
      },
      var_core_value_sig6C53 = {
        'unitId': var_core_value_sigF82C.unitId,
        'op': var_core_value_sigF02B
      };
    return var_core_value_sigCE3D.get(var_core_value_sig4AEF).syncExecuteCommand(Q.id, var_core_value_sigCC5B) ? (var_core_value_sig0FDC.focusUnit(var_core_value_sigF82C.unitId), var_core_value_sigCE3D.get(var_core_value_sig5EB1).pushUndoRedo({
      'unitID': var_core_value_sigF82C.unitId,
      'undoMutations': [{
        'id': Q.id,
        'params': var_core_value_sig6C53
      }],
      'redoMutations': [{
        'id': Q.id,
        'params': var_core_value_sigCC5B
      }]
    }), true) : false;
  }
};
function Eo(var_core_value_sigFCAC, var_core_value_sig6740) {
  switch (var_core_value_sig6740.type) {
    case "set":
      return var_core_value_sig744C.deepClone(var_core_value_sig6740.rules);
    case "add":
      return [...var_core_value_sig744C.deepClone(var_core_value_sigFCAC), var_core_value_sig744C.deepClone(var_core_value_sig6740.rule)];
    case "delete":
      {
        let var_core_value_sigC5C4 = var_core_value_sigFCAC.filter(var_core_value_sig21D8 => var_core_value_sig21D8.id !== var_core_value_sig6740.ruleId);
        return var_core_value_sigC5C4.length === var_core_value_sigFCAC.length ? null : var_core_value_sig744C.deepClone(var_core_value_sigC5C4);
      }
    case "clear":
      return var_core_value_sigFCAC.length ? [] : null;
  }
}
;
function Do(var_core_value_sig89A9, var_core_value_sig3BD1) {
  if (!Array.isArray(var_core_value_sig3BD1)) throw TypeError("[UpdateBaseViewConditionalColorRulesCommand]: rules must be an array.");
  let var_core_value_sig1B07 = new Set();
  for (let [var_core_value_sigC723, var_core_value_sig1E32] of var_core_value_sig3BD1.entries()) ko(var_core_value_sig89A9, var_core_value_sig1E32, Oo(var_core_value_sig1E32, var_core_value_sigC723, var_core_value_sig1B07));
}
;
function Oo(var_core_value_sigA093, var_core_value_sig4B13, var_core_value_sigAF5A) {
  if (!var_core_value_sigA093 || typeof var_core_value_sigA093 != "object") throw TypeError('[UpdateBaseViewConditionalColorRulesCommand]:\x20rule\x20at\x20index\x20' + var_core_value_sig4B13 + " must be an object.");
  let var_core_value_sigE64B = typeof var_core_value_sigA093.id == "string" && var_core_value_sigA093.id["trim"]() ? '\x22' + var_core_value_sigA093.id + '\x22' : 'at\x20index\x20' + var_core_value_sig4B13;
  if (typeof var_core_value_sigA093.id != "string" || !var_core_value_sigA093.id['trim']()) throw Error("[UpdateBaseViewConditionalColorRulesCommand]: rule " + var_core_value_sigE64B + " must have a non-empty id.");
  if (var_core_value_sigAF5A.has(var_core_value_sigA093.id)) throw Error('[UpdateBaseViewConditionalColorRulesCommand]:\x20duplicate\x20rule\x20id\x20\x22' + var_core_value_sigA093.id + '\x22.');
  var_core_value_sigAF5A.add(var_core_value_sigA093.id);
  let var_core_value_sigDC7E = typeof var_core_value_sigA093.color == "string" && var_core_value_sigA093.color["trim"]() ? new var_core_value_sig31F0(var_core_value_sigA093.color) : null;
  if (!(var_core_value_sigDC7E != null && var_core_value_sigDC7E.isValid)) throw Error("[UpdateBaseViewConditionalColorRulesCommand]: rule " + var_core_value_sigE64B + " must have a valid CSS color.");
  return var_core_value_sigE64B;
}
;
function ko(var_core_value_sig1384, var_core_value_sig3397, var_core_value_sig3918) {
  let var_core_value_sigA952 = new Set(Object.values(var_core_value_sigEBEE)),
    var_core_value_sigC0961 = new Set(Object.values(var_core_value_sigF90F)),
    var_core_value_sig2A1C = new Set(Object.values(var_core_value_sigA547));
  if (!var_core_value_sigA952.has(var_core_value_sig3397.target)) throw Error("[UpdateBaseViewConditionalColorRulesCommand]: rule " + var_core_value_sig3918 + " has unsupported target \"" + String(var_core_value_sig3397.target) + '\x22.');
  let var_core_value_sig2D1C = typeof var_core_value_sig3397.fieldId == "string" ? var_core_value_sig1384.fields[var_core_value_sig3397.fieldId] : undefined;
  if (!var_core_value_sig2D1C || var_core_value_sig2D1C.system === true || var_core_value_sig2D1C.type === var_core_value_sig06E6.RecordId) throw Error('[UpdateBaseViewConditionalColorRulesCommand]:\x20rule\x20' + var_core_value_sig3918 + " references missing or non-public field \"" + String(var_core_value_sig3397.fieldId) + '\x22.');
  if (!var_core_value_sigC0961.has(var_core_value_sig3397.operator)) throw Error("[UpdateBaseViewConditionalColorRulesCommand]: rule " + var_core_value_sig3918 + '\x20has\x20unsupported\x20operator\x20\x22' + String(var_core_value_sig3397.operator) + '\x22.');
  if (var_core_value_sig3397.dateMode !== undefined && !var_core_value_sig2A1C.has(var_core_value_sig3397.dateMode)) throw Error("[UpdateBaseViewConditionalColorRulesCommand]: rule " + var_core_value_sig3918 + " has unsupported date mode \"" + String(var_core_value_sig3397.dateMode) + '\x22.');
  if (var_core_value_sig3397.target === var_core_value_sigEBEE.COLUMN) return;
  let var_core_value_sig0EDB1 = hn(var_core_value_sig2D1C.type);
  if (!var_core_value_sig0EDB1.includes(var_core_value_sig3397.operator)) throw Error('[UpdateBaseViewConditionalColorRulesCommand]:\x20rule\x20' + var_core_value_sig3918 + '\x20cannot\x20use\x20operator\x20\x22' + var_core_value_sig3397.operator + "\" with field type \"" + var_core_value_sig2D1C.type + "\". Allowed operators: " + var_core_value_sig0EDB1.join(',\x20') + '.');
  if (var_core_value_sig3397.dateMode !== undefined && !gn(var_core_value_sig2D1C.type)) throw Error("[UpdateBaseViewConditionalColorRulesCommand]: rule " + var_core_value_sig3918 + " can use dateMode only with Date, CreatedAt, or UpdatedAt fields.");
}
const Ao = {
    'id': "base.command.update-base-view-config",
    'type': var_core_value_sig0A86.COMMAND,
    'handler': (var_core_value_sig2C5D, var_core_value_sigCC49) => {
      if (!var_core_value_sigCC49) return false;
      let var_core_value_sigFA56 = var_core_value_sig2C5D.get(var_core_value_sig5B68),
        {
          unitId: var_core_value_sig764E,
          tableId: var_core_value_sigBB1B,
          viewId: var_core_value_sigB3C1,
          patch: var_core_value_sigB6FA
        } = var_core_value_sigCC49,
        var_core_value_sig6C1F = var_core_value_sigFA56.getUnit(var_core_value_sig764E, var_core_value_sigE2E8.UNIVER_BASE);
      if (!var_core_value_sig6C1F || !$(var_core_value_sig6C1F, var_core_value_sigBB1B, {
        'viewIds': [var_core_value_sigB3C1]
      })) return false;
      let var_core_value_sig0707 = var_core_value_sig2C5D.get(var_core_value_sig4AEF),
        var_core_value_sig0E4C = var_core_value_sig2C5D.get(var_core_value_sig5EB1),
        var_core_value_sig8CE7 = var_core_value_sig6C1F.getSnapshot(),
        var_core_value_sig7BBA = new U().updateViewConfig(var_core_value_sig8CE7, var_core_value_sigBB1B, var_core_value_sigB3C1, var_core_value_sigB6FA),
        var_core_value_sig1B72 = new R().invertOp(var_core_value_sig8CE7, var_core_value_sig7BBA),
        var_core_value_sigBB0A = {
          'unitId': var_core_value_sig764E,
          'op': var_core_value_sig7BBA
        },
        var_core_value_sig15C5 = {
          'unitId': var_core_value_sig764E,
          'op': var_core_value_sig1B72
        };
      return var_core_value_sig0707.syncExecuteCommand(Q.id, var_core_value_sigBB0A) ? (var_core_value_sigFA56.focusUnit(var_core_value_sig764E), var_core_value_sig0E4C.pushUndoRedo({
        'unitID': var_core_value_sig764E,
        'undoMutations': [{
          'id': Q.id,
          'params': var_core_value_sig15C5
        }],
        'redoMutations': [{
          'id': Q.id,
          'params': var_core_value_sigBB0A
        }]
      }), true) : false;
    }
  },
  jo = {
    'id': 'base.command.validate-formula',
    'type': var_core_value_sig0A86.COMMAND,
    'handler'(var_core_value_sig81A0, var_core_value_sig1E36) {
      if (!var_core_value_sig1E36) return {
        'valid': false,
        'reason': "[BaseFormula]: validation parameters are required."
      };
      let var_core_value_sigFFDE = var_core_value_sig81A0.get(var_core_value_sig5B68).getUnit(var_core_value_sig1E36.unitId, var_core_value_sigE2E8.UNIVER_BASE),
        var_core_value_sigD7E9 = var_core_value_sigFFDE == null ? undefined : var_core_value_sigFFDE.getSnapshot(),
        var_core_value_sigA79E = var_core_value_sigD7E9 == null ? undefined : var_core_value_sigD7E9.tables[var_core_value_sig1E36.tableId];
      return !var_core_value_sigD7E9 || !var_core_value_sigA79E ? {
        'valid': false,
        'reason': "[BaseFormula]: table does not exist."
      } : new Ki().validateFormula(var_core_value_sig1E36.formula, var_core_value_sigA79E, {
        'snapshot': var_core_value_sigD7E9
      });
    }
  };
function Mo(var_core_value_sig9630) {
  let var_core_value_sigFA2E = var_core_value_sig9630.now ?? Date.now(),
    var_core_value_sigF20F = var_core_value_sig9630.primaryFieldId ?? var_core_value_sig9630.id + "-field-name",
    var_core_value_sigF12E = var_core_value_sig9630.gridViewId ?? var_core_value_sig9630.id + "-view-grid",
    var_core_value_sigF63F = var_core_value_sig9630.recordCount ?? 0,
    var_core_value_sigA250 = var_core_value_sig810B(),
    var_core_value_sig8647 = {
      'id': var_core_value_sigF20F,
      'name': var_core_value_sig9630.primaryFieldName ?? 'Name',
      'type': var_core_value_sig06E6.Text,
      'config': {
        'placeholder': "bases.fieldConfig.textPlaceholder"
      }
    },
    var_core_value_sig77DC = {},
    var_core_value_sigEA82 = [],
    var_core_value_sigC979 = {},
    var_core_value_sig8E10 = {},
    var_core_value_sigD1E7 = {};
  for (let var_core_value_sig22AF = 0; var_core_value_sig22AF < var_core_value_sigF63F; var_core_value_sig22AF++) {
    let var_core_value_sig1617 = var_core_value_sig9630.id + "-record-" + (var_core_value_sig22AF + 1);
    var_core_value_sig77DC[var_core_value_sig1617] = {
      'id': var_core_value_sig1617,
      'values': {
        [var_core_value_sigED20]: var_core_value_sig1617,
        ...(var_core_value_sig9630.recordNamePrefix ? {
          [var_core_value_sigF20F]: var_core_value_sig9630.recordNamePrefix + '\x20' + (var_core_value_sig22AF + 1)
        } : {})
      },
      'orderKey': String(var_core_value_sig22AF + 1).padStart(4, '0'),
      'createdAt': var_core_value_sigFA2E,
      'updatedAt': var_core_value_sigFA2E
    }, var_core_value_sigEA82.push(var_core_value_sig1617), var_core_value_sigC979[var_core_value_sig1617] = var_core_value_sig22AF, var_core_value_sig8E10[var_core_value_sig22AF] = var_core_value_sig1617, var_core_value_sigD1E7[var_core_value_sig22AF] = {
      0: {
        'v': var_core_value_sig1617,
        't': var_core_value_sig590D.STRING
      }
    }, var_core_value_sig9630.recordNamePrefix && (var_core_value_sigD1E7[var_core_value_sig22AF][1] = {
      'v': var_core_value_sig9630.recordNamePrefix + '\x20' + (var_core_value_sig22AF + 1),
      't': var_core_value_sig590D.STRING
    });
  }
  let var_core_value_sig240A = {
    'id': var_core_value_sigF12E,
    'tableId': var_core_value_sig9630.id,
    'name': 'Grid',
    'type': var_core_value_sig29F7.Grid,
    'fieldOrder': [var_core_value_sigED20, var_core_value_sigF20F],
    'fieldSettings': {
      [var_core_value_sigED20]: {
        'hidden': true
      }
    },
    'config': {
      'frozenFieldCount': 1
    }
  };
  return {
    'id': var_core_value_sig9630.id,
    'name': var_core_value_sig9630.name,
    'primaryFieldId': var_core_value_sigF20F,
    'fieldOrder': [var_core_value_sigED20, var_core_value_sigF20F],
    'fields': {
      [var_core_value_sigED20]: var_core_value_sigA250,
      [var_core_value_sigF20F]: var_core_value_sig8647
    },
    'records': var_core_value_sig77DC,
    'recordOrder': var_core_value_sigEA82,
    'rowIndex': var_core_value_sigC979,
    'rowId': var_core_value_sig8E10,
    'colIndex': {
      [var_core_value_sigED20]: 0,
      [var_core_value_sigF20F]: 1
    },
    'colId': {
      0: var_core_value_sigED20,
      1: var_core_value_sigF20F
    },
    'cellData': var_core_value_sigD1E7,
    'views': {
      [var_core_value_sigF12E]: var_core_value_sig240A
    },
    'viewOrder': [var_core_value_sigF12E]
  };
}
const No = "UNIVER_EMBED_BASES_TABLE";
function Po(var_core_value_sig756B) {
  let var_core_value_sig41FB = Mo({
    'id': var_core_value_sig756B.hostAnchorId,
    'name': var_core_value_sig756B.name ?? var_core_value_sig756B.embedId,
    'recordCount': 0
  });
  return {
    ...var_core_value_sig41FB,
    'resources': {
      ...(var_core_value_sig41FB.resources ?? {}),
      [No]: Lo(var_core_value_sig756B)
    }
  };
}
;
function Fo(var_core_value_sigE071) {
  return {
    'id': Q.id,
    'params': {
      'unitId': var_core_value_sigE071.unitId,
      'op': var_core_value_sig71B3.type['compose'](var_core_value_sig71B3.insertOp(["tables", var_core_value_sigE071.table['id']], var_core_value_sigE071.table), var_core_value_sig71B3.insertOp(["tableOrder", var_core_value_sigE071.index ?? var_core_value_sigE071.snapshot['tableOrder'].length], var_core_value_sigE071.table['id'])),
      'trigger': 'embed-ui'
    }
  };
}
;
function Io(var_core_value_sigEF01) {
  let var_core_value_sig6AB2 = var_core_value_sigEF01.snapshot["tableOrder"].indexOf(var_core_value_sigEF01.tableId);
  if (!(!var_core_value_sigEF01.snapshot["tables"][var_core_value_sigEF01.tableId] || var_core_value_sig6AB2 < 0)) return {
    'id': Q.id,
    'params': {
      'unitId': var_core_value_sigEF01.unitId,
      'op': var_core_value_sig71B3.type["compose"](var_core_value_sig71B3.removeOp(["tables", var_core_value_sigEF01.tableId], var_core_value_sigEF01.snapshot["tables"][var_core_value_sigEF01.tableId]), var_core_value_sig71B3.removeOp(["tableOrder", var_core_value_sig6AB2], var_core_value_sigEF01.tableId)),
      'trigger': "embed-ui"
    }
  };
}
;
function Lo(var_core_value_sig4971) {
  return {
    'version': 1,
    'embedId': var_core_value_sig4971.embedId,
    'hostAnchorId': var_core_value_sig4971.hostAnchorId,
    'childUnitId': var_core_value_sig4971.childUnitId,
    'childType': var_core_value_sig4971.childType
  };
}
;
function Ro(var_core_value_sigA887) {
  let var_core_value_sigC142 = Math.max(0, Number(var_core_value_sigA887.decimalPlaces ?? 0)),
    var_core_value_sigEA08 = var_core_value_sigA887.useThousands === false ? '0' : '#,##0',
    var_core_value_sig1163 = var_core_value_sigC142 ? '.' + '0'["repeat"](var_core_value_sigC142) : '',
    var_core_value_sig7BFB = Bo(var_core_value_sigA887.abbreviation);
  return '' + (var_core_value_sigA887.currencySymbol ? Vo(var_core_value_sigA887.currencySymbol) : '') + var_core_value_sigEA08 + var_core_value_sig1163 + var_core_value_sig7BFB;
}
;
function zo(var_core_value_sigE065, var_core_value_sig1B83) {
  let var_core_value_sig1F85 = Ro(var_core_value_sig1B83),
    var_core_value_sig0149 = var_core_value_sig29A2.format(var_core_value_sig1F85, var_core_value_sigE065, {
      'throws': false
    });
  return Ho(String(var_core_value_sig0149), var_core_value_sig1B83.separatorStyle, var_core_value_sig1B83.locale);
}
;
function Bo(var_core_value_sig9F77) {
  return var_core_value_sig9F77 === 'K' ? ",\"K\"" : var_core_value_sig9F77 === 'M' ? ",,\"M\"" : var_core_value_sig9F77 === 'B' ? ",,,\"B\"" : '';
}
;
function Vo(var_core_value_sig83CF) {
  return /^[A-Z]+$/i.test(var_core_value_sig83CF) ? '\x22' + var_core_value_sig83CF + '\x22' : var_core_value_sig83CF;
}
;
function Ho(var_core_value_sigF518, var_core_value_sigBDCA, var_core_value_sigCCF1) {
  let var_core_value_sig74C0 = var_core_value_sigBDCA === "local" ? Uo(var_core_value_sigCCF1) : var_core_value_sigBDCA;
  return var_core_value_sig74C0 === "periodComma" ? var_core_value_sigF518.replace(/,/g, '\x00').replace(/\./g, ',').replace(/\0/g, '.') : var_core_value_sig74C0 === "spaceComma" ? var_core_value_sigF518.replace(/,/g, '\x20').replace(/\./g, ',') : var_core_value_sig74C0 === 'spacePeriod' ? var_core_value_sigF518.replace(/,/g, '\x20') : var_core_value_sigF518;
}
;
function Uo(var_core_value_sig291B) {
  var var_core_value_sig78A6, var_core_value_sigAA991;
  let var_core_value_sigBE21 = var_core_value_sig291B || new Intl["NumberFormat"]().resolvedOptions().locale,
    var_core_value_sig8708;
  try {
    var_core_value_sig8708 = new Intl["NumberFormat"](var_core_value_sigBE21, {
      'minimumFractionDigits': 2,
      'maximumFractionDigits': 2,
      'useGrouping': true
    }).formatToParts(1000000);
  } catch {
    return "commaPeriod";
  }
  let var_core_value_sig42B4 = (var_core_value_sig78A6 = var_core_value_sig8708.find(var_core_value_sig0F31 => var_core_value_sig0F31.type === "group")) == null ? undefined : var_core_value_sig78A6.value,
    var_core_value_sig15BB = (var_core_value_sigAA991 = var_core_value_sig8708.find(var_core_value_sig8F25 => var_core_value_sig8F25.type === "decimal")) == null ? undefined : var_core_value_sigAA991.value,
    var_core_value_sigFDCB = var_core_value_sig42B4 === '\u00a0' || var_core_value_sig42B4 === '\u202f' ? '\x20' : var_core_value_sig42B4;
  return var_core_value_sigFDCB === '.' && var_core_value_sig15BB === ',' ? "periodComma" : var_core_value_sigFDCB === '\x20' && var_core_value_sig15BB === ',' ? "spaceComma" : var_core_value_sigFDCB === '\x20' && var_core_value_sig15BB === '.' ? "spacePeriod" : "commaPeriod";
}
;
function Wo(var_core_value_sig788A, var_core_value_sig8676) {
  let var_core_value_sigDEEE = var_core_value_sig8676 && typeof var_core_value_sig8676 == "object" && !Array.isArray(var_core_value_sig8676) ? var_core_value_sig8676 : {},
    var_core_value_sig990D = Go(var_core_value_sigDEEE.decimalPlaces, 0, 2, 0),
    var_core_value_sig2E7E = var_core_value_sig788A.toFixed(var_core_value_sig990D);
  return var_core_value_sigDEEE.format === "number" ? var_core_value_sig2E7E : var_core_value_sig2E7E + '%';
}
;
function Go(var_core_value_sig5C96, var_core_value_sig2755, var_core_value_sigC7AF, var_core_value_sigC669) {
  if (var_core_value_sig5C96 == null || var_core_value_sig5C96 === '') return var_core_value_sigC669;
  let var_core_value_sigDDD1 = typeof var_core_value_sig5C96 == "number" ? var_core_value_sig5C96 : Number(var_core_value_sig5C96);
  return Number.isFinite(var_core_value_sigDDD1) ? Math.max(var_core_value_sig2755, Math.min(var_core_value_sigC7AF, Math.round(var_core_value_sigDDD1))) : var_core_value_sigC669;
}
const Ko = ["count", "filled", "empty", 'unique', "sum", "average", "min", "max"],
  qo = ['count', 'filled', "empty", "unique"],
  Jo = ['sum', 'average', "min", "max"],
  Yo = ["min", "max"],
  Xo = new Set([var_core_value_sig06E6.Number, var_core_value_sig06E6.Currency, var_core_value_sig06E6.Progress, var_core_value_sig06E6.Rating]),
  Zo = new Set([var_core_value_sig06E6.MultiSelect, var_core_value_sig06E6.Person, var_core_value_sig06E6.Group]),
  Qo = 'General';
function $o(var_core_value_sigDA7F) {
  return typeof var_core_value_sigDA7F == "string" && Ko.includes(var_core_value_sigDA7F);
}
;
function es(var_core_value_sigC174) {
  return !var_core_value_sigC174 || typeof var_core_value_sigC174 != "object" ? {} : Object.fromEntries(Object.entries(var_core_value_sigC174).filter(var_core_value_sigCBED => $o(var_core_value_sigCBED[1])));
}
;
function ts(var_core_value_sig93EA) {
  return Xo.has(var_core_value_sig93EA.type) ? [...qo, ...Jo] : var_core_value_sig93EA.type === var_core_value_sig06E6.Formula ? [...qo, ...(gs(var_core_value_sig93EA) === "date" ? Yo : Jo)] : qo;
}
;
function ns(var_core_value_sigA2DF, var_core_value_sigE813) {
  return ts(var_core_value_sigA2DF).includes(var_core_value_sigE813);
}
;
function rs(var_core_value_sig03AA, var_core_value_sig1055, var_core_value_sigC30C1) {
  if (!ns(var_core_value_sig03AA, var_core_value_sigC30C1)) return null;
  let var_core_value_sig1AD5 = var_core_value_sig1055.filter(var_core_value_sig6224 => !as(var_core_value_sig03AA, var_core_value_sig6224));
  switch (var_core_value_sigC30C1) {
    case 'count':
      return var_core_value_sig1055.length;
    case "filled":
      return var_core_value_sig1AD5.length;
    case 'empty':
      return var_core_value_sig1055.length - var_core_value_sig1AD5.length;
    case "unique":
      return new Set(var_core_value_sig1AD5.map(var_core_value_sig4169 => ls(var_core_value_sig03AA, var_core_value_sig4169))).size;
    case "sum":
      {
        let var_core_value_sig6D19 = os(var_core_value_sig03AA, var_core_value_sig1AD5);
        return var_core_value_sig6D19.length ? cs(var_core_value_sig6D19) : null;
      }
    case "average":
      {
        let var_core_value_sig279C = os(var_core_value_sig03AA, var_core_value_sig1AD5);
        return var_core_value_sig279C.length ? cs(var_core_value_sig279C) / var_core_value_sig279C.length : null;
      }
    case 'min':
      {
        let var_core_value_sigAC51 = os(var_core_value_sig03AA, var_core_value_sig1AD5);
        return var_core_value_sigAC51.length ? Math.min(...var_core_value_sigAC51) : null;
      }
    case "max":
      {
        let var_core_value_sig8986 = os(var_core_value_sig03AA, var_core_value_sig1AD5);
        return var_core_value_sig8986.length ? Math.max(...var_core_value_sig8986) : null;
      }
  }
}
;
function is(var_core_value_sigAF2C, var_core_value_sigD893, var_core_value_sig9C29) {
  if (var_core_value_sig9C29 == null || !Number.isFinite(var_core_value_sig9C29)) return '-';
  if (qo.includes(var_core_value_sigD893)) return String(var_core_value_sig9C29);
  switch (var_core_value_sigAF2C.type) {
    case var_core_value_sig06E6.Number:
      return zo(var_core_value_sig9C29, ps(var_core_value_sigAF2C));
    case var_core_value_sig06E6.Currency:
      return zo(var_core_value_sig9C29, ms(var_core_value_sigAF2C));
    case var_core_value_sig06E6.Progress:
      return Wo(var_core_value_sig9C29, var_core_value_sigAF2C.config);
    case var_core_value_sig06E6.Formula:
      return hs(var_core_value_sig9C29, var_core_value_sigAF2C);
    default:
      return vs(var_core_value_sig9C29);
  }
}
;
function as(var_core_value_sigBE39, var_core_value_sig6945) {
  if (var_core_value_sig6945 == null) return true;
  if (typeof var_core_value_sig6945 == "string") return var_core_value_sig6945.trim() === '';
  if (Array.isArray(var_core_value_sig6945)) return var_core_value_sigBE39.type === var_core_value_sig06E6.Attachment ? !var_core_value_sig6945.some(fs) : var_core_value_sig6945.length === 0;
  if (var_core_value_sigBE39.type === var_core_value_sig06E6.Link && typeof var_core_value_sig6945 == "object") {
    let var_core_value_sigFC3E = var_core_value_sig6945;
    return [var_core_value_sigFC3E.text, var_core_value_sigFC3E.url].every(var_core_value_sigCAF7 => var_core_value_sigCAF7 == null || String(var_core_value_sigCAF7).trim() === '');
  }
  return false;
}
;
function os(var_core_value_sigDED6, var_core_value_sig0A6B) {
  let var_core_value_sig2C8D = [];
  for (let var_core_value_sig4D33 of var_core_value_sig0A6B) {
    let var_core_value_sigED1C = ss(var_core_value_sigDED6, var_core_value_sig4D33);
    var_core_value_sigED1C != null && var_core_value_sig2C8D.push(var_core_value_sigED1C);
  }
  return var_core_value_sig2C8D;
}
;
function ss(var_core_value_sig1CC1, var_core_value_sigB460) {
  if (typeof var_core_value_sigB460 == "number") return Number.isFinite(var_core_value_sigB460) ? var_core_value_sigB460 : null;
  if (var_core_value_sig1CC1.type !== var_core_value_sig06E6.Formula && typeof var_core_value_sigB460 == 'string' && var_core_value_sigB460.trim() !== '') {
    let var_core_value_sig08BF = Number(var_core_value_sigB460);
    return Number.isFinite(var_core_value_sig08BF) ? var_core_value_sig08BF : null;
  }
  return null;
}
;
function cs(var_core_value_sigBA9E) {
  let var_core_value_sigB69E = 0,
    var_core_value_sig291C = 0;
  for (let var_core_value_sig1814 of var_core_value_sigBA9E) {
    let var_core_value_sig726E = var_core_value_sigB69E + var_core_value_sig1814;
    var_core_value_sig291C += Math.abs(var_core_value_sigB69E) >= Math.abs(var_core_value_sig1814) ? var_core_value_sigB69E - var_core_value_sig726E + var_core_value_sig1814 : var_core_value_sig1814 - var_core_value_sig726E + var_core_value_sigB69E, var_core_value_sigB69E = var_core_value_sig726E;
  }
  return var_core_value_sigB69E + var_core_value_sig291C;
}
;
function ls(var_core_value_sigB11D, var_core_value_sig2B33) {
  return Zo.has(var_core_value_sigB11D.type) && Array.isArray(var_core_value_sig2B33) ? ds([...new Set(var_core_value_sig2B33.map(var_core_value_sig2B5D => ds(us(var_core_value_sig2B5D))))].sort()) : ds(us(var_core_value_sig2B33));
}
;
function us(var_core_value_sig705C) {
  return Array.isArray(var_core_value_sig705C) ? var_core_value_sig705C.map(us) : var_core_value_sig705C && typeof var_core_value_sig705C == "object" ? Object.fromEntries(Object.entries(var_core_value_sig705C).sort(([var_core_value_sig9B0B], [var_core_value_sigF21D]) => var_core_value_sig9B0B.localeCompare(var_core_value_sigF21D)).map(([var_core_value_sig9B55, var_core_value_sigB8F41]) => [var_core_value_sig9B55, us(var_core_value_sigB8F41)])) : var_core_value_sig705C;
}
;
function ds(var_core_value_sigD209) {
  return JSON.stringify(var_core_value_sigD209) ?? "undefined";
}
;
function fs(var_core_value_sigD13E) {
  if (typeof var_core_value_sigD13E == "string") return var_core_value_sigD13E.trim() !== '';
  if (!var_core_value_sigD13E || typeof var_core_value_sigD13E != "object") return false;
  let var_core_value_sig5AF8 = var_core_value_sigD13E;
  return [var_core_value_sig5AF8.id, var_core_value_sig5AF8.name, var_core_value_sig5AF8.source, var_core_value_sig5AF8.url, var_core_value_sig5AF8.thumbnail].some(var_core_value_sig5E41 => var_core_value_sig5E41 != null && String(var_core_value_sig5E41).trim() !== '');
}
;
function ps(var_core_value_sig22EF) {
  let var_core_value_sig23DF = ys(var_core_value_sig22EF.config);
  return {
    'decimalPlaces': xs(var_core_value_sig23DF.decimalPlaces, 0, 20, 2),
    'separatorStyle': typeof var_core_value_sig23DF.separatorStyle == 'string' ? var_core_value_sig23DF.separatorStyle : "local",
    'locale': typeof var_core_value_sig23DF.locale == "string" ? var_core_value_sig23DF.locale : undefined,
    'useThousands': var_core_value_sig23DF.useThousands !== false,
    'abbreviation': typeof var_core_value_sig23DF.abbreviation == "string" ? var_core_value_sig23DF.abbreviation : 'none'
  };
}
;
function ms(var_core_value_sig1EB4) {
  let var_core_value_sigF12B = ys(var_core_value_sig1EB4.config);
  return {
    ...ps(var_core_value_sig1EB4),
    'currencySymbol': String(var_core_value_sigF12B.currencySymbol ?? '$')
  };
}
;
function hs(var_core_value_sig170E, var_core_value_sig72DB) {
  let var_core_value_sigA272 = _s(var_core_value_sig72DB);
  if (var_core_value_sigA272 === Qo) return vs(var_core_value_sig170E);
  try {
    return String(var_core_value_sig29A2.format(var_core_value_sigA272, var_core_value_sig170E, {
      'throws': false
    }));
  } catch {
    return vs(var_core_value_sig170E);
  }
}
;
function gs(var_core_value_sig60C4) {
  let var_core_value_sig4340 = ys(ys(var_core_value_sig60C4.config).numfmt);
  return typeof var_core_value_sig4340.type == 'string' ? var_core_value_sig4340.type : 'general';
}
;
function _s(var_core_value_sig1F11) {
  let var_core_value_sig3A1B = ys(ys(var_core_value_sig1F11.config).numfmt);
  return String(var_core_value_sig3A1B.pattern ?? Qo).trim() || Qo;
}
;
function vs(var_core_value_sig6543) {
  return String(Number.isInteger(var_core_value_sig6543) ? var_core_value_sig6543 : Math.round((var_core_value_sig6543 + 2 ** -52) * 100) / 100);
}
;
function ys(var_core_value_sigA0E6) {
  return var_core_value_sigA0E6 && typeof var_core_value_sigA0E6 == "object" && !Array.isArray(var_core_value_sigA0E6) ? var_core_value_sigA0E6 : {};
}
;
function bs(var_core_value_sig9F46) {
  if (var_core_value_sig9F46 == null || var_core_value_sig9F46 === '') return null;
  let var_core_value_sigF155 = typeof var_core_value_sig9F46 == "number" ? var_core_value_sig9F46 : Number(var_core_value_sig9F46);
  return Number.isFinite(var_core_value_sigF155) ? var_core_value_sigF155 : null;
}
;
function xs(var_core_value_sig3165, var_core_value_sigEF93, var_core_value_sig6711, var_core_value_sigE204) {
  let var_core_value_sig58C8 = bs(var_core_value_sig3165);
  return var_core_value_sig58C8 == null ? var_core_value_sigE204 : Math.max(var_core_value_sigEF93, Math.min(var_core_value_sig6711, Math.round(var_core_value_sig58C8)));
}
;
function Ss(var_core_value_sig19E9, var_core_value_sigBB40) {
  let var_core_value_sigA2E7 = var_core_value_sig744C.deepClone(var_core_value_sig19E9),
    var_core_value_sigB05D = var_core_value_sigBB40.includeRecords === true,
    var_core_value_sigD96B = new Map(),
    var_core_value_sig5F92 = var_core_value_sigBB40.createViewId ?? (() => "view-" + var_core_value_sigAF2B(8)),
    var_core_value_sig501D = var_core_value_sigA2E7.viewOrder;
  return var_core_value_sigBB40.regenerateViewIds && (var_core_value_sig501D = var_core_value_sigA2E7.viewOrder["map"](var_core_value_sig310E => {
    let var_core_value_sig2E97 = var_core_value_sig5F92();
    return var_core_value_sigD96B.set(var_core_value_sig310E, var_core_value_sig2E97), var_core_value_sig2E97;
  })), {
    ...var_core_value_sigA2E7,
    'id': var_core_value_sigBB40.id,
    'name': var_core_value_sigBB40.name,
    'records': var_core_value_sigB05D ? var_core_value_sigA2E7.records : {},
    'recordOrder': var_core_value_sigB05D ? var_core_value_sigA2E7.recordOrder : [],
    'rowIndex': var_core_value_sigB05D ? var_core_value_sigA2E7.rowIndex : {},
    'rowId': var_core_value_sigB05D ? var_core_value_sigA2E7.rowId : {},
    'cellData': var_core_value_sigB05D ? var_core_value_sigA2E7.cellData : {},
    'resources': var_core_value_sigB05D ? var_core_value_sigA2E7.resources : {},
    'viewOrder': var_core_value_sig501D,
    'views': Object.fromEntries(Object.entries(var_core_value_sigA2E7.views ?? {}).map(([var_core_value_sig4B00, var_core_value_sig9896]) => {
      let var_core_value_sigA725 = var_core_value_sigD96B.get(var_core_value_sig4B00) ?? (var_core_value_sigBB40.regenerateViewIds ? var_core_value_sig5F92() : var_core_value_sig4B00);
      return [var_core_value_sigA725, {
        ...var_core_value_sig9896,
        'id': var_core_value_sigA725,
        'tableId': var_core_value_sigBB40.id
      }];
    }))
  };
}
var Cs = "@univerjs-pro/bases",
  ws = "1.0.0-insiders.20260907-70fc579";
const Ts = {},
  Es = {};
function Ds(var_core_value_sigDA2B) {
  return new R().getAffectedRanges(var_core_value_sigDA2B);
}
;
function Os(var_core_value_sigF322) {
  return var_core_value_sigF322.patches["map"](var_core_value_sig9FB3 => ({
    'unitId': var_core_value_sigF322.unitId,
    'sheetId': var_core_value_sigF322.tableId,
    'range': {
      'startRow': var_core_value_sig9FB3.row,
      'endRow': var_core_value_sig9FB3.row,
      'startColumn': var_core_value_sig9FB3.col,
      'endColumn': var_core_value_sig9FB3.col
    }
  }));
}
;
function ks(var_core_value_sigE133, var_core_value_sigE50A1) {
  return {
    [var_core_value_sigE133]: Object.fromEntries(var_core_value_sigE50A1.map(var_core_value_sig0E44 => [var_core_value_sig0E44, '1']))
  };
}
let As = class extends var_core_value_sig8A28 {
  constructor(var_core_value_sig243C, var_core_value_sigB3A4) {
    super(), this._activeDirtyManagerService = var_core_value_sig243C, this._univerInstanceService = var_core_value_sigB3A4, this._initialize();
  }
  _initialize() {
    this._activeDirtyManagerService["register"](Q.id, {
      'commandId': Q.id,
      'getDirtyData': var_core_value_sig2CD3 => this._getJson1DirtyData(var_core_value_sig2CD3.params)
    }), this.disposeWithMe(var_core_value_sig8DAA(() => {
      this._activeDirtyManagerService["remove"](Q.id);
    }));
  }
  _getTable(var_core_value_sigAF1B, var_core_value_sig906D) {
    let var_core_value_sig6AFB = this._univerInstanceService['getUnit'](var_core_value_sigAF1B, var_core_value_sigE2E8.UNIVER_BASE);
    return (var_core_value_sig6AFB == null ? undefined : var_core_value_sig6AFB.getSnapshot().tables[var_core_value_sig906D]) ?? null;
  }
  _getJson1DirtyData(var_core_value_sig2830) {
    if (var_core_value_sig2830.trigger === "formula.mutation.set-formula-calculation-result") return {};
    if (!var_core_value_sig2830.unitId || !var_core_value_sig2830.op) return {
      'clearDependencyTreeCache': this._getAllBaseDependencyTreeCacheMap(),
      'forceCalculation': true
    };
    let var_core_value_sig9C3A = Ds(var_core_value_sig2830.op),
      var_core_value_sig0321 = this._getStructureDirtyTableIds(var_core_value_sig2830.unitId, var_core_value_sig9C3A);
    if (var_core_value_sig0321.length) return {
      'clearDependencyTreeCache': ks(var_core_value_sig2830.unitId, var_core_value_sig0321),
      'forceCalculation': true
    };
    let var_core_value_sig51CF = Object.entries(this._groupCellInvalidations(var_core_value_sig2830.unitId, var_core_value_sig9C3A)).flatMap(([var_core_value_sig038E, var_core_value_sigAA1E]) => Os({
      'unitId': var_core_value_sig2830.unitId,
      'tableId': var_core_value_sig038E,
      'patches': var_core_value_sigAA1E
    }));
    return var_core_value_sig51CF.length ? {
      'dirtyRanges': var_core_value_sig51CF
    } : {};
  }
  _getStructureDirtyTableIds(var_core_value_sig3C61, var_core_value_sigDC70) {
    let var_core_value_sigD10E = var_core_value_sigDC70.filter(var_core_value_sigC9F5 => var_core_value_sigC9F5.reason !== "cell").flatMap(var_core_value_sig7EEA => var_core_value_sig7EEA.tableId ? [var_core_value_sig7EEA.tableId] : this._getAllTableIds(var_core_value_sig3C61));
    return Array.from(new Set(var_core_value_sigD10E));
  }
  _groupCellInvalidations(var_core_value_sigBB93, var_core_value_sig4F88) {
    let var_core_value_sig486C = new Set();
    return var_core_value_sig4F88.reduce((var_core_value_sig59CE1, var_core_value_sig33C8) => {
      let var_core_value_sig957F = this._toDirtyRangePatch(var_core_value_sigBB93, var_core_value_sig33C8);
      if (!var_core_value_sig957F) return var_core_value_sig59CE1;
      let var_core_value_sig803B = var_core_value_sig33C8.tableId + ':' + var_core_value_sig957F.row + ':' + var_core_value_sig957F.col;
      return var_core_value_sig486C.has(var_core_value_sig803B) ? var_core_value_sig59CE1 : (var_core_value_sig486C.add(var_core_value_sig803B), var_core_value_sig59CE1[var_core_value_sig33C8.tableId] = var_core_value_sig59CE1[var_core_value_sig33C8.tableId] ?? [], var_core_value_sig59CE1[var_core_value_sig33C8.tableId].push(var_core_value_sig957F), var_core_value_sig59CE1);
    }, {});
  }
  _toDirtyRangePatch(var_core_value_sig717C, var_core_value_sig23AE) {
    if (var_core_value_sig23AE.reason !== 'cell') return null;
    if (var_core_value_sig23AE.row != null && var_core_value_sig23AE.column != null) return {
      'row': var_core_value_sig23AE.row,
      'col': var_core_value_sig23AE.column,
      'value': null
    };
    if (!var_core_value_sig23AE.recordId || !var_core_value_sig23AE.fieldId) return null;
    let var_core_value_sigCB54 = this._getTable(var_core_value_sig717C, var_core_value_sig23AE.tableId);
    if (!var_core_value_sigCB54) return null;
    let var_core_value_sigC7E11 = mt(var_core_value_sigCB54, var_core_value_sig23AE.recordId, var_core_value_sig23AE.fieldId);
    return var_core_value_sigC7E11 ? {
      'row': var_core_value_sigC7E11.row,
      'col': var_core_value_sigC7E11.col,
      'value': null
    } : null;
  }
  _getAllTableIds(var_core_value_sig6575) {
    let var_core_value_sigE901 = this._univerInstanceService["getUnit"](var_core_value_sig6575, var_core_value_sigE2E8.UNIVER_BASE);
    return Object.values((var_core_value_sigE901 == null ? undefined : var_core_value_sigE901.getSnapshot().tables) ?? {}).map(var_core_value_sig58301 => var_core_value_sig58301.id);
  }
  _getAllBaseDependencyTreeCacheMap() {
    let var_core_value_sigB7EC = this._univerInstanceService["getAllUnitsForType"](var_core_value_sigE2E8.UNIVER_BASE).map(var_core_value_sig4A7C => ks(var_core_value_sig4A7C.getUnitId(), Object.keys(var_core_value_sig4A7C.getSnapshot().tables)));
    return Object.assign({}, ...var_core_value_sigB7EC);
  }
};
As = Y([J(0, var_core_value_sig341C), J(1, var_core_value_sig5B68)], As);
let js = class extends var_core_value_sig8A28 {
  constructor(var_core_value_sigB018, var_core_value_sigE7BE, var_core_value_sigC88E, var_core_value_sigC4A6) {
    super(), this._commandService = var_core_value_sigB018, this._univerInstanceService = var_core_value_sigE7BE, this._formulaCalculationTriggerService = var_core_value_sigC88E, this._formulaCalculationSessionService = var_core_value_sigC4A6, W(this, '_formulaService', new Ki()), W(this, "_registeredSuperTableNames", new Map()), W(this, "_scheduledSuperTableSyncs", new Set()), W(this, "_formulaSyncQueue", Promise.resolve()), W(this, "_applyingFormulaResults", false), this._initialize();
  }
  _initialize() {
    this._univerInstanceService["getAllUnitsForType"](var_core_value_sigE2E8.UNIVER_BASE).forEach(var_core_value_sigF975 => {
      this._scheduleSuperTableSync(var_core_value_sigF975);
    }), this.disposeWithMe(this._univerInstanceService["getTypeOfUnitAdded$"](var_core_value_sigE2E8.UNIVER_BASE).subscribe(({
      unit: var_core_value_sigCDAF
    }) => {
      this._scheduleSuperTableSync(var_core_value_sigCDAF);
    })), this.disposeWithMe(this._univerInstanceService["getTypeOfUnitDisposed$"](var_core_value_sigE2E8.UNIVER_BASE).subscribe(var_core_value_sigA298 => {
      this._enqueueFormulaSync(() => this._removeSuperTables(var_core_value_sigA298.getUnitId()));
    })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig0B40 => this._onCommandExecuted(var_core_value_sig0B40)));
  }
  _onCommandExecuted(var_core_value_sig1FE3) {
    if (var_core_value_sig1FE3.id === var_core_value_sig30A2.id) {
      Ns(var_core_value_sig1FE3.params) && this._applyFormulaResult(var_core_value_sig1FE3.params);
      return;
    }
    if (this._applyingFormulaResults || var_core_value_sig1FE3.id !== Q.id) return;
    let var_core_value_sigF003 = Ms(var_core_value_sig1FE3.params) ? var_core_value_sig1FE3.params : undefined,
      var_core_value_sigE146 = var_core_value_sigF003 != null && var_core_value_sigF003.unitId ? [this._univerInstanceService["getUnit"](var_core_value_sigF003.unitId, var_core_value_sigE2E8.UNIVER_BASE)].filter(var_core_value_sig330B => !!var_core_value_sig330B) : this._univerInstanceService['getAllUnitsForType'](var_core_value_sigE2E8.UNIVER_BASE),
      var_core_value_sigF6D5 = var_core_value_sigF003 == null ? undefined : var_core_value_sigF003.op;
    var_core_value_sigE146.forEach(var_core_value_sig3625 => {
      let var_core_value_sig0B4E = var_core_value_sigF6D5 ? Ds(var_core_value_sigF6D5) : [];
      (!var_core_value_sigF6D5 || var_core_value_sig0B4E.some(var_core_value_sig2B65 => var_core_value_sig2B65.reason !== "cell")) && this._scheduleSuperTableSync(var_core_value_sig3625);
    });
  }
  _scheduleSuperTableSync(var_core_value_sig3B2F) {
    let var_core_value_sigE558 = var_core_value_sig3B2F.getUnitId();
    this._scheduledSuperTableSyncs["has"](var_core_value_sigE558) || (this._scheduledSuperTableSyncs['add'](var_core_value_sigE558), this._enqueueFormulaSync(async () => {
      this._scheduledSuperTableSyncs["delete"](var_core_value_sigE558), await this._syncSuperTables(var_core_value_sig3B2F);
    }));
  }
  async _syncSuperTables(var_core_value_sigA99D) {
    let var_core_value_sigB23E = var_core_value_sigA99D.getUnitId(),
      var_core_value_sigDA561 = this._formulaService["getSuperTableRegistrations"](var_core_value_sigA99D.getSnapshot()),
      var_core_value_sig8D74 = new Set(var_core_value_sigDA561.map(({
        tableName: var_core_value_sig0E9F
      }) => var_core_value_sig0E9F)),
      var_core_value_sigC3E8 = this._registeredSuperTableNames["get"](var_core_value_sigB23E) ?? new Set();
    for (let var_core_value_sigE5BA of var_core_value_sigC3E8) if (!var_core_value_sig8D74.has(var_core_value_sigE5BA) && !(await this._executeSuperTableMutationWhileActive(var_core_value_sig289C.id, {
      'unitId': var_core_value_sigB23E,
      'tableName': var_core_value_sigE5BA
    }))) return;
    for (let {
      tableName: var_core_value_sig4A83,
      reference: var_core_value_sig58AA
    } of var_core_value_sigDA561) if (!(await this._executeSuperTableMutationWhileActive(var_core_value_sig829D.id, {
      'unitId': var_core_value_sigB23E,
      'tableName': var_core_value_sig4A83,
      'reference': var_core_value_sig58AA
    }))) return;
    this._registeredSuperTableNames['set'](var_core_value_sigB23E, var_core_value_sig8D74);
  }
  async _removeSuperTables(var_core_value_sig3FAF1) {
    let var_core_value_sigC00C = this._registeredSuperTableNames["get"](var_core_value_sig3FAF1) ?? new Set();
    for (let var_core_value_sig84C4 of var_core_value_sigC00C) if (!(await this._executeSuperTableMutationWhileActive(var_core_value_sig289C.id, {
      'unitId': var_core_value_sig3FAF1,
      'tableName': var_core_value_sig84C4
    }))) return;
    this._registeredSuperTableNames["delete"](var_core_value_sig3FAF1);
  }
  async _executeSuperTableMutationWhileActive(var_core_value_sig080D, var_core_value_sigCDBC) {
    return !this._disposed && (await this._commandService["executeCommand"](var_core_value_sig080D, var_core_value_sigCDBC, {
      'onlyLocal': true
    })) && !this._disposed;
  }
  _enqueueFormulaSync(var_core_value_sig0F75) {
    this._formulaSyncQueue = this._formulaSyncQueue["then"](var_core_value_sig0F75, var_core_value_sig0F75).catch(() => undefined);
  }
  _applyFormulaResult(var_core_value_sig4B7F) {
    let var_core_value_sig17D6 = this._univerInstanceService["getAllUnitsForType"](var_core_value_sigE2E8.UNIVER_BASE);
    if (!var_core_value_sig17D6.some(var_core_value_sigB6F7 => {
      var var_core_value_sigB495;
      return ((var_core_value_sigB495 = var_core_value_sig4B7F.unitData) == null ? undefined : var_core_value_sigB495[var_core_value_sigB6F7.getUnitId()]) != null;
    })) return;
    let var_core_value_sig8915 = var_core_value_sig17D6.flatMap(var_core_value_sig70D0 => qi(var_core_value_sig70D0.getSnapshot(), var_core_value_sig4B7F));
    if (!var_core_value_sig8915.length) {
      this._formulaCalculationSessionService["markResultApplied"](var_core_value_sig0461.BASE, var_core_value_sig4B7F);
      return;
    }
    let var_core_value_sigC88F = new U(),
      var_core_value_sig1AFA = var_core_value_sig8915.flatMap(var_core_value_sig2A8A => Os({
        'unitId': var_core_value_sig2A8A.unitId,
        'tableId': var_core_value_sig2A8A.tableId,
        'patches': var_core_value_sig2A8A.patches
      }));
    this._applyingFormulaResults = true, (async () => {
      for (let var_core_value_sigD7EA of var_core_value_sig8915) {
        let var_core_value_sig429F = this._univerInstanceService["getUnit"](var_core_value_sigD7EA.unitId, var_core_value_sigE2E8.UNIVER_BASE);
        var_core_value_sig429F && (await this._commandService["executeCommand"](Q.id, {
          'unitId': var_core_value_sigD7EA.unitId,
          'op': var_core_value_sigC88F.setRangeValues(var_core_value_sig429F.getSnapshot(), var_core_value_sigD7EA.tableId, var_core_value_sigD7EA.patches),
          'trigger': var_core_value_sig30A2.id
        }, {
          'onlyLocal': true
        }));
      }
      await this._commandService['executeCommand'](var_core_value_sigAAB6.id, {
        'dirtyRanges': var_core_value_sig1AFA
      }, {
        'onlyLocal': true
      });
    })().finally(() => {
      this._applyingFormulaResults = false, this._formulaCalculationSessionService["markResultApplied"](var_core_value_sig0461.BASE, var_core_value_sig4B7F);
    });
  }
};
js = Y([J(0, var_core_value_sig4AEF), J(1, var_core_value_sig5B68), J(2, var_core_value_sig6EF5(var_core_value_sig0F6B)), J(3, var_core_value_sig6EF5(var_core_value_sigB4C8))], js);
function Ms(var_core_value_sig8383) {
  return typeof var_core_value_sig8383 == "object" && !!var_core_value_sig8383 && "unitId" in var_core_value_sig8383 && typeof var_core_value_sig8383.unitId == "string" && 'op' in var_core_value_sig8383 && Array.isArray(var_core_value_sig8383.op);
}
;
function Ns(var_core_value_sigA30F) {
  return typeof var_core_value_sigA30F == "object" && !!var_core_value_sigA30F && "unitData" in var_core_value_sigA30F && "unitOtherData" in var_core_value_sigA30F;
}
const Ps = new Set([so.id, jo.id]);
let Fs = class extends var_core_value_sig8A28 {
  constructor(var_core_value_sigBCF5, var_core_value_sig988A, var_core_value_sigFC02) {
    super(), this._commandService = var_core_value_sigBCF5, this._permissionService = var_core_value_sig988A, this._instanceService = var_core_value_sigFC02, this._instanceService['getAllUnitsForType'](var_core_value_sigE2E8.UNIVER_BASE).forEach(var_core_value_sig3782 => this._registerUnitPermissionPoints(var_core_value_sig3782.getUnitId())), this.disposeWithMe(this._instanceService["getTypeOfUnitAdded$"](var_core_value_sigE2E8.UNIVER_BASE).subscribe(({
      unit: var_core_value_sigD22E
    }) => this._registerUnitPermissionPoints(var_core_value_sigD22E.getUnitId()))), this.disposeWithMe(this._commandService['beforeCommandExecuted']((var_core_value_sig3455, var_core_value_sig5CEF) => this._check(var_core_value_sig3455, var_core_value_sig5CEF))), this.disposeWithMe(this._instanceService["getTypeOfUnitDisposed$"](var_core_value_sigE2E8.UNIVER_BASE).subscribe(var_core_value_sig43D51 => Fr(this._permissionService, var_core_value_sig43D51.getUnitId())));
  }
  _registerUnitPermissionPoints(var_core_value_sigF71C) {
    Sr.forEach(var_core_value_sig1395 => {
      let var_core_value_sig9FA0 = jr(var_core_value_sigF71C, var_core_value_sigF71C, var_core_value_sig1395);
      this._permissionService["getPermissionPoint"](var_core_value_sig9FA0.id) || this._permissionService['addPermissionPoint'](var_core_value_sig9FA0);
    });
  }
  _check(var_core_value_sigE6341, var_core_value_sigF74F) {
    var var_core_value_sig89D7;
    if (var_core_value_sigF74F != null && var_core_value_sigF74F.fromCollab || var_core_value_sigF74F != null && var_core_value_sigF74F.fromChangeset) return;
    let var_core_value_sigF2B0 = qs(var_core_value_sigE6341.params) ? var_core_value_sigE6341.params : undefined;
    if (var_core_value_sigF74F != null && var_core_value_sigF74F.onlyLocal && var_core_value_sigE6341.id === 'base.mutation.apply-base-json1' && (var_core_value_sigF2B0 == null ? undefined : var_core_value_sigF2B0.trigger) === var_core_value_sig30A2.id) return;
    let var_core_value_sigD77A = Ls(var_core_value_sigE6341.id),
      var_core_value_sigF2C2 = Is(var_core_value_sigF2B0 == null ? undefined : var_core_value_sigF2B0.unitId, var_core_value_sigF74F) ?? (var_core_value_sigD77A ? (var_core_value_sig89D7 = this._instanceService["getCurrentUnitOfType"](var_core_value_sigE2E8.UNIVER_BASE)) == null ? undefined : var_core_value_sig89D7.getUnitId() : undefined);
    if (!var_core_value_sigF2C2 || this._instanceService["getUnitType"](var_core_value_sigF2C2) !== var_core_value_sigE2E8.UNIVER_BASE) return;
    if (var_core_value_sigD77A) {
      if (!Mr(this._permissionService, var_core_value_sigF2C2, var_core_value_sigF2C2, var_core_value_sigD77A)) throw new var_core_value_sig87E9('Base\x20' + var_core_value_sigF383[var_core_value_sigD77A] + " permission denied.");
      return;
    }
    if (Ps.has(var_core_value_sigE6341.id) || !var_core_value_sigE6341.id['startsWith']("base.command.") && !var_core_value_sigE6341.id["startsWith"]("base.mutation.")) return;
    let var_core_value_sig2990 = this._instanceService["getUnit"](var_core_value_sigF2C2, var_core_value_sigE2E8.UNIVER_BASE);
    if (!var_core_value_sig2990 || !Ir(this._permissionService, var_core_value_sigF2C2, Rs(var_core_value_sig2990, var_core_value_sigF2B0 ?? {}, var_core_value_sigE6341.id))) throw new var_core_value_sig87E9("Base edit permission denied.");
  }
};
Fs = Y([J(0, var_core_value_sig4AEF), J(1, var_core_value_sig8E15), J(2, var_core_value_sig5B68)], Fs);
function Is(var_core_value_sig93DB, var_core_value_sigFBEC) {
  return typeof var_core_value_sig93DB == "string" ? var_core_value_sig93DB : typeof (var_core_value_sigFBEC == null ? undefined : var_core_value_sigFBEC.unitId) == "string" ? var_core_value_sigFBEC.unitId : undefined;
}
;
function Ls(var_core_value_sig4E78) {
  if (var_core_value_sig4E78 === "bases-exchange-client.operation.export-base" || var_core_value_sig4E78 === "bases-exchange-client.operation.export-base-by-format") return var_core_value_sigF383.Export;
  if (var_core_value_sig4E78.startsWith("thread-comment.command.") || var_core_value_sig4E78.startsWith("thread-comment.mutation.")) return var_core_value_sigF383.Comment;
}
;
function Rs(var_core_value_sigA1E7, var_core_value_sig1B4F, var_core_value_sigA6E0) {
  if (var_core_value_sigA6E0 === 'base.mutation.apply-base-json1' && Ks(var_core_value_sig1B4F.op)) return zs(var_core_value_sigA1E7, var_core_value_sig1B4F.op);
  let var_core_value_sig5B1A = new Set(),
    var_core_value_sig1004 = Us(var_core_value_sig1B4F, 'table'),
    var_core_value_sigAE05 = typeof var_core_value_sig1B4F.tableId == 'string' ? var_core_value_sig1B4F.tableId : var_core_value_sig1004[0];
  if (var_core_value_sig1004.forEach(var_core_value_sigD300 => var_core_value_sig5B1A.add(G(var_core_value_sigD300))), !var_core_value_sigAE05) return [...var_core_value_sig5B1A];
  let var_core_value_sigE5C6 = var_core_value_sigA1E7.getSnapshot().tables[var_core_value_sigAE05],
    var_core_value_sig6FB9 = new Set(Us(var_core_value_sig1B4F, "field")),
    var_core_value_sig0C7F = new Set(Us(var_core_value_sig1B4F, 'record')),
    var_core_value_sig41F0 = new Set(Us(var_core_value_sig1B4F, "view"));
  return Ws(var_core_value_sigE5C6, var_core_value_sig1B4F.patches, var_core_value_sig0C7F, var_core_value_sig6FB9), Gs(var_core_value_sig1B4F, var_core_value_sig6FB9), var_core_value_sig6FB9.forEach(var_core_value_sig6F77 => var_core_value_sig5B1A.add(K(var_core_value_sigAE05, var_core_value_sig6F77))), var_core_value_sig0C7F.forEach(var_core_value_sigFA4B => var_core_value_sig5B1A.add(q(var_core_value_sigAE05, var_core_value_sigFA4B))), var_core_value_sig41F0.forEach(var_core_value_sig2AB0 => var_core_value_sig5B1A.add(kr(var_core_value_sigAE05, var_core_value_sig2AB0))), [...var_core_value_sig5B1A];
}
;
function zs(var_core_value_sigA696, var_core_value_sig91AE) {
  let var_core_value_sigBC03 = var_core_value_sigA696.getSnapshot(),
    var_core_value_sig5CD8 = new R().getAffectedRanges(var_core_value_sig91AE),
    var_core_value_sigC707 = Bs(var_core_value_sig91AE),
    var_core_value_sig37BD = new Set();
  return var_core_value_sig5CD8.forEach(var_core_value_sig853D => {
    var var_core_value_sigD1F0, var_core_value_sig3D4E;
    let {
      tableId: var_core_value_sig79C0
    } = var_core_value_sig853D;
    if (!var_core_value_sig79C0) return;
    var_core_value_sig37BD.add(G(var_core_value_sig79C0));
    let var_core_value_sig173D = var_core_value_sigBC03.tables[var_core_value_sig79C0],
      var_core_value_sig6F1A = var_core_value_sig853D.recordId ?? (var_core_value_sig853D.row == null || var_core_value_sig173D == null || (var_core_value_sigD1F0 = var_core_value_sig173D.rowId) == null ? undefined : var_core_value_sigD1F0[var_core_value_sig853D.row]),
      var_core_value_sig1802 = var_core_value_sig853D.fieldId ?? (var_core_value_sig853D.column == null || var_core_value_sig173D == null || (var_core_value_sig3D4E = var_core_value_sig173D.colId) == null ? undefined : var_core_value_sig3D4E[var_core_value_sig853D.column]);
    var_core_value_sig6F1A && var_core_value_sig37BD.add(q(var_core_value_sig79C0, var_core_value_sig6F1A)), var_core_value_sig1802 && var_core_value_sig37BD.add(K(var_core_value_sig79C0, var_core_value_sig1802)), var_core_value_sig853D.viewId && var_core_value_sig37BD.add(kr(var_core_value_sig79C0, var_core_value_sig853D.viewId)), (var_core_value_sig853D.reason === "table" || var_core_value_sigC707.has(var_core_value_sig79C0)) && var_core_value_sig173D && (Object.keys(var_core_value_sig173D.fields).forEach(var_core_value_sig055E => var_core_value_sig37BD.add(K(var_core_value_sig79C0, var_core_value_sig055E))), Object.keys(var_core_value_sig173D.records).forEach(var_core_value_sig7C77 => var_core_value_sig37BD.add(q(var_core_value_sig79C0, var_core_value_sig7C77))), Object.keys(var_core_value_sig173D.views).forEach(var_core_value_sig9578 => var_core_value_sig37BD.add(kr(var_core_value_sig79C0, var_core_value_sig9578)))), var_core_value_sig853D.reason === "record" && var_core_value_sig173D && Object.keys(var_core_value_sig173D.fields).forEach(var_core_value_sigA2D31 => var_core_value_sig37BD.add(K(var_core_value_sig79C0, var_core_value_sigA2D31)));
  }), var_core_value_sig5CD8.length === 0 && Hs(var_core_value_sig91AE, "tableOrder") && Object.keys(var_core_value_sigBC03.tables).forEach(var_core_value_sigCFA7 => var_core_value_sig37BD.add(G(var_core_value_sigCFA7))), [...var_core_value_sig37BD];
}
;
function Bs(var_core_value_sig03EA) {
  let var_core_value_sig6457 = new Set(),
    var_core_value_sig112F = var_core_value_sig31C2 => {
      Array.isArray(var_core_value_sig31C2) && var_core_value_sig31C2.forEach((var_core_value_sigC218, var_core_value_sigADEC) => {
        var_core_value_sigC218 === "tables" && typeof var_core_value_sig31C2[var_core_value_sigADEC + 1] == "string" && Vs(var_core_value_sig31C2[var_core_value_sigADEC + 2]) && var_core_value_sig6457.add(var_core_value_sig31C2[var_core_value_sigADEC + 1]), var_core_value_sig112F(var_core_value_sigC218);
      });
    };
  return var_core_value_sig112F(var_core_value_sig03EA), var_core_value_sig6457;
}
;
function Vs(var_core_value_sig04D3) {
  return !!var_core_value_sig04D3 && typeof var_core_value_sig04D3 == "object" && !Array.isArray(var_core_value_sig04D3) && ('i' in var_core_value_sig04D3 || 'r' in var_core_value_sig04D3 || 'p' in var_core_value_sig04D3 || 'd' in var_core_value_sig04D3 || 'es' in var_core_value_sig04D3 || "ena" in var_core_value_sig04D3 || 'et' in var_core_value_sig04D3);
}
;
function Hs(var_core_value_sig876A, var_core_value_sigB1F9) {
  return Array.isArray(var_core_value_sig876A) && var_core_value_sig876A.some(var_core_value_sigA677 => var_core_value_sigA677 === var_core_value_sigB1F9 || Hs(var_core_value_sigA677, var_core_value_sigB1F9));
}
;
function Us(var_core_value_sig635D, var_core_value_sig6923) {
  let var_core_value_sig338F = new Set(),
    var_core_value_sig7B0E = var_core_value_sig6923 + 'Id',
    var_core_value_sigDD4B = var_core_value_sig6923 + "Ids",
    var_core_value_sig5E4F = (var_core_value_sigC015, var_core_value_sigAEBC = '') => {
      if (typeof var_core_value_sigC015 == "string") {
        var_core_value_sigAEBC === var_core_value_sig7B0E && var_core_value_sig338F.add(var_core_value_sigC015);
        return;
      }
      if (Array.isArray(var_core_value_sigC015)) {
        var_core_value_sigAEBC === var_core_value_sigDD4B ? var_core_value_sigC015.forEach(var_core_value_sigB33B => {
          typeof var_core_value_sigB33B == "string" && var_core_value_sig338F.add(var_core_value_sigB33B);
        }) : var_core_value_sigC015.forEach(var_core_value_sig24B9 => var_core_value_sig5E4F(var_core_value_sig24B9, var_core_value_sigAEBC));
        return;
      }
      qs(var_core_value_sigC015) && Object.entries(var_core_value_sigC015).forEach(([var_core_value_sig3D8E, var_core_value_sig37E5]) => {
        var_core_value_sig3D8E === 'id' && var_core_value_sigAEBC === var_core_value_sig6923 && typeof var_core_value_sig37E5 == "string" ? var_core_value_sig338F.add(var_core_value_sig37E5) : var_core_value_sig5E4F(var_core_value_sig37E5, var_core_value_sig3D8E);
      });
    };
  return var_core_value_sig5E4F(var_core_value_sig635D), [...var_core_value_sig338F];
}
;
function Ws(var_core_value_sig3736, var_core_value_sig7D19, var_core_value_sig9E9F, var_core_value_sig4A92) {
  !var_core_value_sig3736 || !Array.isArray(var_core_value_sig7D19) || var_core_value_sig7D19.forEach(var_core_value_sig366A => {
    if (!qs(var_core_value_sig366A)) return;
    let var_core_value_sigA89C = var_core_value_sig366A;
    if (typeof var_core_value_sigA89C.row == "number") {
      var var_core_value_sigDD3E;
      let var_core_value_sigF079 = (var_core_value_sigDD3E = var_core_value_sig3736.rowId) == null ? undefined : var_core_value_sigDD3E[var_core_value_sigA89C.row];
      var_core_value_sigF079 && var_core_value_sig9E9F.add(var_core_value_sigF079);
    }
    if (typeof var_core_value_sigA89C.col == "number") {
      var var_core_value_sig182B;
      let var_core_value_sigFCA0 = (var_core_value_sig182B = var_core_value_sig3736.colId) == null ? undefined : var_core_value_sig182B[var_core_value_sigA89C.col];
      var_core_value_sigFCA0 && var_core_value_sig4A92.add(var_core_value_sigFCA0);
    }
  });
}
;
function Gs(var_core_value_sig652F, var_core_value_sigA8CE, var_core_value_sig1941 = '') {
  if (!(!var_core_value_sig652F || typeof var_core_value_sig652F != "object")) {
    if (Array.isArray(var_core_value_sig652F)) {
      var_core_value_sig652F.forEach(var_core_value_sigE627 => Gs(var_core_value_sigE627, var_core_value_sigA8CE, var_core_value_sig1941));
      return;
    }
    qs(var_core_value_sig652F) && Object.entries(var_core_value_sig652F).forEach(([var_core_value_sigC84D, var_core_value_sigF2BC]) => {
      var_core_value_sig1941 === "values" && var_core_value_sigA8CE.add(var_core_value_sigC84D), Gs(var_core_value_sigF2BC, var_core_value_sigA8CE, var_core_value_sigC84D);
    });
  }
}
;
function Ks(var_core_value_sigF945) {
  return Array.isArray(var_core_value_sigF945);
}
;
function qs(var_core_value_sig6178) {
  return typeof var_core_value_sig6178 == 'object' && !!var_core_value_sig6178 && !Array.isArray(var_core_value_sig6178);
}
const Js = var_core_value_sig60D0("base.resource.service");
let Ys = class {
  constructor(var_core_value_sig2A99) {
    this._univerInstanceService = var_core_value_sig2A99;
  }
  getBase(var_core_value_sig18A6) {
    return this._univerInstanceService['getUnit'](var_core_value_sig18A6, var_core_value_sigE2E8.UNIVER_BASE) ?? null;
  }
  getAllBases() {
    return this._univerInstanceService["getAllUnitsForType"](var_core_value_sigE2E8.UNIVER_BASE);
  }
  createBase(var_core_value_sigA98B) {
    return this._univerInstanceService["createUnit"](var_core_value_sigE2E8.UNIVER_BASE, var_core_value_sigA98B);
  }
};
Ys = Y([J(0, var_core_value_sig5B68)], Ys);
const Xs = var_core_value_sig60D0("base.view-registry.service");
var Zs = class extends var_core_value_sig8A28 {
  constructor(...var_core_value_sig458C) {
    super(...var_core_value_sig458C), W(this, "_plugins", new Map());
  }
  register(var_core_value_sig8DEC) {
    return this._plugins["set"](var_core_value_sig8DEC.type, var_core_value_sig8DEC), var_core_value_sig8DAA(() => this._plugins["delete"](var_core_value_sig8DEC.type));
  }
  get(var_core_value_sig522F) {
    let var_core_value_sigD718 = this._plugins['get'](var_core_value_sig522F);
    if (!var_core_value_sigD718) throw Error("[BaseViewRegistryService]: view type \"" + var_core_value_sig522F + "\" is not registered.");
    return var_core_value_sigD718;
  }
  getAll() {
    return Array.from(this._plugins["values"]());
  }
};
const Qs = [Q];
let $s = class extends var_core_value_sig2956 {
  constructor(var_core_value_sig41CF = Ts, var_core_value_sig1EFD, var_core_value_sig38BB, var_core_value_sig017C, var_core_value_sig44BC, var_core_value_sigAB7B) {
    super(), this._config = var_core_value_sig41CF, this._injector = var_core_value_sig1EFD, this._commandService = var_core_value_sig38BB, this._univerInstanceService = var_core_value_sig017C, this._configService = var_core_value_sig44BC, this._dataSyncPrimaryController = var_core_value_sigAB7B, W(this, '_baseSyncDisposables', new Map());
    let {
      ...var_core_value_sig55EE
    } = var_core_value_sigA6D5({}, Ts, this._config);
    this._configService["setConfig"]('bases.config', var_core_value_sig55EE), this._univerInstanceService['registerCtorForType'](var_core_value_sigE2E8.UNIVER_BASE, var_core_value_sigE634), this._initDependencies(), this._initCommands(), this._initRegistries(), this._initDataSync();
  }
  onReady() {
    var_core_value_sig4960(this._injector, [[Ys], [Ur], [As]]), this._univerInstanceService["getAllUnitsForType"](var_core_value_sigE2E8.UNIVER_BASE).forEach(var_core_value_sigD37B => this._syncBaseUnit(var_core_value_sigD37B.getUnitId())), var_core_value_sig4960(this._injector, [[js], [Fs]]);
  }
  _initDependencies() {
    [[dr, {
      'useClass': fr
    }], [Xs, {
      'useClass': Zs
    }], [ei, {
      'useClass': ri
    }], [Js, {
      'useClass': Ys
    }], [Lr, {
      'useClass': Rr
    }], [X, {
      'useClass': Ur
    }], [As], [js], [Fs]].forEach(var_core_value_sigFA28 => this._injector["add"](var_core_value_sigFA28));
  }
  _initCommands() {
    [Ea, ro, Wa, yo, uo, lo, Sa, ba, _a, Ua, va, qa, Co, Qa, xa, Ka, xo, bo, ya, Ha, Za, jo, Va, Ja, io, oo, Ga, no, Ao, To, ao, so, So, go, vo, _o, fo, mo, ho, po, ...Qs].forEach(var_core_value_sig93BE => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig93BE))), Qs.forEach(var_core_value_sigABEC => {
      var var_core_value_sig2712;
      return (var_core_value_sig2712 = this._dataSyncPrimaryController) == null ? undefined : var_core_value_sig2712.registerSyncingMutations(var_core_value_sigABEC);
    });
  }
  _initDataSync() {
    this._dataSyncPrimaryController && (this.disposeWithMe(this._univerInstanceService["getTypeOfUnitAdded$"](var_core_value_sigE2E8.UNIVER_BASE).subscribe(({
      unit: var_core_value_sig0B9E
    }) => {
      this._syncBaseUnit(var_core_value_sig0B9E.getUnitId());
    })), this.disposeWithMe(this._univerInstanceService["getTypeOfUnitDisposed$"](var_core_value_sigE2E8.UNIVER_BASE).subscribe(var_core_value_sigC545 => {
      var var_core_value_sig12A7;
      (var_core_value_sig12A7 = this._baseSyncDisposables["get"](var_core_value_sigC545.getUnitId())) == null || var_core_value_sig12A7.dispose(), this._baseSyncDisposables['delete'](var_core_value_sigC545.getUnitId());
    })));
  }
  _syncBaseUnit(var_core_value_sigE9F6) {
    !this._dataSyncPrimaryController || this._baseSyncDisposables["has"](var_core_value_sigE9F6) || this._baseSyncDisposables["set"](var_core_value_sigE9F6, this._dataSyncPrimaryController["syncUnit"](var_core_value_sigE9F6));
  }
  _initRegistries() {
    let var_core_value_sig3BA9 = this._injector['get'](dr);
    In().forEach(var_core_value_sig6F4E => var_core_value_sig3BA9.register(var_core_value_sig6F4E));
    let var_core_value_sigE2301 = this._injector["get"](Xs),
      var_core_value_sig5AC8 = this._injector['get'](ei);
    Yr().forEach(var_core_value_sigA021 => {
      var_core_value_sigE2301.register(var_core_value_sigA021), var_core_value_sig5AC8.registerView(var_core_value_sigA021);
    });
  }
};
W($s, "pluginName", "BASES_PLUGIN"), W($s, 'packageName', Cs), W($s, 'version', ws), W($s, "type", var_core_value_sigE2E8.UNIVER_BASE), $s = Y([var_core_value_sig50B5(var_core_value_sig8481, var_core_value_sig3DA9), J(1, var_core_value_sig6EF5(var_core_value_sig5FE3)), J(2, var_core_value_sig4AEF), J(3, var_core_value_sig5B68), J(4, var_core_value_sigD64C), J(5, var_core_value_sig8954(var_core_value_sigC6E3))], $s);
let ec = class extends var_core_value_sig2956 {
  constructor(var_core_value_sigE492 = Es, var_core_value_sig3465, var_core_value_sig38DD, var_core_value_sig89AE, var_core_value_sig3A69) {
    super(), this._config = var_core_value_sigE492, this._injector = var_core_value_sig3465, this._commandService = var_core_value_sig38DD, this._configService = var_core_value_sig89AE, this._univerInstanceService = var_core_value_sig3A69;
    let {
      ...var_core_value_sigD64C1
    } = var_core_value_sigA6D5({}, Es, this._config);
    this._configService['setConfig']("bases.remote.config", var_core_value_sigD64C1), this._univerInstanceService["registerCtorForType"](var_core_value_sigE2E8.UNIVER_BASE, var_core_value_sigE634), [[dr, {
      'useClass': fr
    }], [ei, {
      'useClass': ri
    }]].forEach(var_core_value_sig49D9 => this._injector["add"](var_core_value_sig49D9)), Qs.forEach(var_core_value_sig320C => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig320C)));
  }
};
W(ec, 'pluginName', "REMOTE_BASES_PLUGIN"), W(ec, "packageName", Cs), W(ec, "version", ws), W(ec, "type", var_core_value_sigE2E8.UNIVER_BASE), ec = Y([var_core_value_sig50B5(var_core_value_sig8481, var_core_value_sig3DA9), J(1, var_core_value_sig6EF5(var_core_value_sig5FE3)), J(2, var_core_value_sig4AEF), J(3, var_core_value_sigD64C), J(4, var_core_value_sig5B68)], ec);
function tc(var_core_value_sig483F) {
  let var_core_value_sig2FD9 = hc(var_core_value_sig483F.query);
  if (!var_core_value_sig2FD9) return {
    'query': '',
    'total': 0,
    'matches': []
  };
  let var_core_value_sig3DB9 = [],
    var_core_value_sig5948 = [];
  for (let var_core_value_sig3B0B = 0; var_core_value_sig3B0B < var_core_value_sig483F.fieldIds["length"]; var_core_value_sig3B0B++) {
    if (!(var_core_value_sig3B0B in var_core_value_sig483F.fieldIds)) continue;
    let var_core_value_sigE7F0 = var_core_value_sig483F.table["fields"][var_core_value_sig483F.fieldIds[var_core_value_sig3B0B]];
    var_core_value_sigE7F0 && var_core_value_sig5948.push({
      'field': var_core_value_sigE7F0,
      'fieldIndex': var_core_value_sig3B0B
    });
  }
  var_core_value_sig483F.rows['forEach']((var_core_value_sig1E7C, var_core_value_sigD3C4) => {
    var_core_value_sig5948.forEach(({
      field: var_core_value_sigE837,
      fieldIndex: var_core_value_sig34F4
    }) => {
      let var_core_value_sigA45D = nc(var_core_value_sig1E7C.values[var_core_value_sigE837.id], var_core_value_sigE837);
      if (!var_core_value_sigA45D) return;
      let var_core_value_sig1BC7 = mc(var_core_value_sig2FD9, var_core_value_sigA45D.searchTexts);
      var_core_value_sig1BC7 <= 0 || var_core_value_sig3DB9.push({
        'recordId': var_core_value_sig1E7C.recordId,
        'fieldId': var_core_value_sigE837.id,
        'fieldType': var_core_value_sigE837.type,
        'text': var_core_value_sigA45D.displayText,
        'score': var_core_value_sig1BC7,
        'rowIndex': var_core_value_sigD3C4,
        'fieldIndex': var_core_value_sig34F4
      });
    });
  }), var_core_value_sig3DB9.sort((var_core_value_sigBC8B, var_core_value_sigEE2E) => var_core_value_sigEE2E.score - var_core_value_sigBC8B.score || var_core_value_sigBC8B.rowIndex - var_core_value_sigEE2E.rowIndex || var_core_value_sigBC8B.fieldIndex - var_core_value_sigEE2E.fieldIndex);
  let var_core_value_sigFA04 = var_core_value_sig483F.limit == null ? var_core_value_sig3DB9 : var_core_value_sig3DB9.slice(0, Math.max(0, var_core_value_sig483F.limit));
  return {
    'query': var_core_value_sig2FD9,
    'total': var_core_value_sig3DB9.length,
    'matches': _c(var_core_value_sigFA04)
  };
}
;
function nc(var_core_value_sig3986, var_core_value_sig1950) {
  let var_core_value_sigE263 = [];
  for (let var_core_value_sigCF06 of ic(var_core_value_sig3986, var_core_value_sig1950)) {
    let var_core_value_sig4956 = hc(var_core_value_sigCF06);
    var_core_value_sig4956 && var_core_value_sigE263.push(var_core_value_sig4956);
  }
  return var_core_value_sigE263.length ? {
    'displayText': rc(var_core_value_sig3986, var_core_value_sig1950),
    'searchTexts': gc(var_core_value_sigE263)
  } : null;
}
;
function rc(var_core_value_sig86D3, var_core_value_sigE5A5) {
  switch (var_core_value_sigE5A5.type) {
    case var_core_value_sig06E6.SingleSelect:
    case var_core_value_sig06E6.MultiSelect:
    case var_core_value_sig06E6.Group:
      return ac(var_core_value_sig86D3, var_core_value_sigE5A5).join(',\x20');
    case var_core_value_sig06E6.Link:
      return cc(var_core_value_sig86D3);
    case var_core_value_sig06E6.Date:
    case var_core_value_sig06E6.CreatedAt:
    case var_core_value_sig06E6.UpdatedAt:
      return lc(var_core_value_sig86D3, var_core_value_sigE5A5);
    case var_core_value_sig06E6.Number:
    case var_core_value_sig06E6.Currency:
      return uc(var_core_value_sig86D3, var_core_value_sigE5A5);
    case var_core_value_sig06E6.Progress:
      return dc(var_core_value_sig86D3, var_core_value_sigE5A5);
    case var_core_value_sig06E6.Checkbox:
      return var_core_value_sig86D3 ? "Checked" : "Unchecked";
    case var_core_value_sig06E6.Attachment:
      return fc(var_core_value_sig86D3).join(',\x20');
    default:
      return pc(var_core_value_sig86D3);
  }
}
;
function ic(var_core_value_sig1ABB, var_core_value_sig8781) {
  switch (var_core_value_sig8781.type) {
    case var_core_value_sig06E6.SingleSelect:
    case var_core_value_sig06E6.MultiSelect:
    case var_core_value_sig06E6.Group:
      {
        let var_core_value_sigCC9E = ac(var_core_value_sig1ABB, var_core_value_sig8781);
        if (Array.isArray(var_core_value_sig1ABB)) {
          let var_core_value_sigEF3E = [...var_core_value_sigCC9E];
          for (let var_core_value_sigF62A = 0; var_core_value_sigF62A < var_core_value_sig1ABB.length; var_core_value_sigF62A++) var_core_value_sigF62A in var_core_value_sig1ABB && var_core_value_sigEF3E.push(String(var_core_value_sig1ABB[var_core_value_sigF62A]));
          return var_core_value_sigEF3E;
        }
        return var_core_value_sig1ABB == null ? var_core_value_sigCC9E : [...var_core_value_sigCC9E, String(var_core_value_sig1ABB)];
      }
    case var_core_value_sig06E6.Link:
      {
        let var_core_value_sig444C = sc(var_core_value_sig1ABB);
        return [var_core_value_sig444C.text, var_core_value_sig444C.url];
      }
    case var_core_value_sig06E6.Date:
    case var_core_value_sig06E6.CreatedAt:
    case var_core_value_sig06E6.UpdatedAt:
      return [lc(var_core_value_sig1ABB, var_core_value_sig8781), pc(var_core_value_sig1ABB)];
    case var_core_value_sig06E6.Number:
    case var_core_value_sig06E6.Currency:
      return [uc(var_core_value_sig1ABB, var_core_value_sig8781), pc(var_core_value_sig1ABB)];
    case var_core_value_sig06E6.Progress:
      return [dc(var_core_value_sig1ABB, var_core_value_sig8781), pc(var_core_value_sig1ABB)];
    case var_core_value_sig06E6.Checkbox:
      return var_core_value_sig1ABB ? ["Checked", "Yes", "True"] : ["Unchecked", 'No', "False"];
    case var_core_value_sig06E6.Attachment:
      return fc(var_core_value_sig1ABB);
    default:
      return [pc(var_core_value_sig1ABB)];
  }
}
;
function ac(var_core_value_sig360F, var_core_value_sig79D71) {
  var var_core_value_sigE9A1;
  let var_core_value_sigCAD1 = Array.isArray((var_core_value_sigE9A1 = var_core_value_sig79D71.config) == null ? undefined : var_core_value_sigE9A1.options) ? var_core_value_sig79D71.config["options"] : [],
    var_core_value_sig3105 = [];
  if (Array.isArray(var_core_value_sig360F)) {
    for (let var_core_value_sigE42E = 0; var_core_value_sigE42E < var_core_value_sig360F.length; var_core_value_sigE42E++) {
      if (!(var_core_value_sigE42E in var_core_value_sig360F)) continue;
      let var_core_value_sig273D = String(var_core_value_sig360F[var_core_value_sigE42E]);
      var_core_value_sig273D && var_core_value_sig3105.push(oc(var_core_value_sigCAD1, var_core_value_sig273D));
    }
    return var_core_value_sig3105;
  }
  if (var_core_value_sig360F != null) {
    let var_core_value_sig6BCD = String(var_core_value_sig360F);
    var_core_value_sig6BCD && var_core_value_sig3105.push(oc(var_core_value_sigCAD1, var_core_value_sig6BCD));
  }
  return var_core_value_sig3105;
}
;
function oc(var_core_value_sig4D9D, var_core_value_sig6D0D) {
  for (let var_core_value_sigC664 of var_core_value_sig4D9D) {
    if (typeof var_core_value_sigC664 == "string" && var_core_value_sigC664 === var_core_value_sig6D0D) return var_core_value_sigC664;
    if (var_core_value_sigC664 && typeof var_core_value_sigC664 == "object") {
      let var_core_value_sig9A0D = var_core_value_sigC664;
      if (String(var_core_value_sig9A0D.id ?? var_core_value_sig9A0D.name ?? '') === var_core_value_sig6D0D || String(var_core_value_sig9A0D.name ?? '') === var_core_value_sig6D0D) return String(var_core_value_sig9A0D.name ?? var_core_value_sig9A0D.id ?? var_core_value_sig6D0D);
    }
  }
  return var_core_value_sig6D0D;
}
;
function sc(var_core_value_sig5BA6) {
  if (var_core_value_sig5BA6 && typeof var_core_value_sig5BA6 == "object" && !Array.isArray(var_core_value_sig5BA6)) {
    let var_core_value_sig1B7B = var_core_value_sig5BA6;
    return {
      'text': String(var_core_value_sig1B7B.text ?? var_core_value_sig1B7B.url ?? ''),
      'url': String(var_core_value_sig1B7B.url ?? '')
    };
  }
  return {
    'text': pc(var_core_value_sig5BA6),
    'url': pc(var_core_value_sig5BA6)
  };
}
;
function cc(var_core_value_sig33C81) {
  let var_core_value_sig851E = sc(var_core_value_sig33C81);
  return var_core_value_sig851E.text || var_core_value_sig851E.url;
}
;
function lc(var_core_value_sigD0FB, var_core_value_sig0A5F) {
  return typeof var_core_value_sigD0FB != 'number' || !Number.isFinite(var_core_value_sigD0FB) ? '' : dn(var_core_value_sigD0FB, var_core_value_sig0A5F.config);
}
;
function uc(var_core_value_sig53D2, var_core_value_sigEDB2) {
  let var_core_value_sig71CD = typeof var_core_value_sig53D2 == "number" ? var_core_value_sig53D2 : Number(var_core_value_sig53D2);
  return Number.isFinite(var_core_value_sig71CD) ? zo(var_core_value_sig71CD, var_core_value_sigEDB2.config) : '';
}
;
function dc(var_core_value_sig6687, var_core_value_sigCFDD) {
  let var_core_value_sigDC0A = typeof var_core_value_sig6687 == 'number' ? var_core_value_sig6687 : Number(var_core_value_sig6687);
  return Number.isFinite(var_core_value_sigDC0A) ? Wo(var_core_value_sigDC0A, var_core_value_sigCFDD.config) : '';
}
;
function fc(var_core_value_sig644F) {
  return Array.isArray(var_core_value_sig644F) ? var_core_value_sig644F.flatMap(var_core_value_sig1F31 => {
    if (!var_core_value_sig1F31 || typeof var_core_value_sig1F31 != "object") return [];
    let var_core_value_sigEA821 = var_core_value_sig1F31,
      var_core_value_sig65BB = String(var_core_value_sigEA821.name ?? var_core_value_sigEA821.url ?? '').trim();
    return var_core_value_sig65BB ? [var_core_value_sig65BB] : [];
  }) : [];
}
;
function pc(var_core_value_sigDB71) {
  if (var_core_value_sigDB71 == null) return '';
  if (typeof var_core_value_sigDB71 == "boolean") return var_core_value_sigDB71 ? "true" : "false";
  if (typeof var_core_value_sigDB71 == "number") return String(var_core_value_sigDB71);
  if (Array.isArray(var_core_value_sigDB71)) {
    let var_core_value_sig69B1 = [];
    for (let var_core_value_sigF039 = 0; var_core_value_sigF039 < var_core_value_sigDB71.length; var_core_value_sigF039++) {
      if (!(var_core_value_sigF039 in var_core_value_sigDB71)) continue;
      let var_core_value_sigA319 = pc(var_core_value_sigDB71[var_core_value_sigF039]);
      var_core_value_sigA319 && var_core_value_sig69B1.push(var_core_value_sigA319);
    }
    return var_core_value_sig69B1.join(',\x20');
  }
  if (typeof var_core_value_sigDB71 == "object") {
    let var_core_value_sigAEDE = var_core_value_sigDB71;
    return String(var_core_value_sigAEDE.title ?? var_core_value_sigAEDE.name ?? var_core_value_sigAEDE.text ?? var_core_value_sigAEDE.url ?? '').trim();
  }
  return String(var_core_value_sigDB71);
}
;
function mc(var_core_value_sig46F8, var_core_value_sig1F6D) {
  let var_core_value_sig077A = 0;
  for (let var_core_value_sig139C of var_core_value_sig1F6D) if (var_core_value_sig139C) {
    if (var_core_value_sig139C === var_core_value_sig46F8) {
      var_core_value_sig077A = Math.max(var_core_value_sig077A, 300);
      continue;
    }
    if (var_core_value_sig139C.startsWith(var_core_value_sig46F8)) {
      var_core_value_sig077A = Math.max(var_core_value_sig077A, 250);
      continue;
    }
    var_core_value_sig139C.includes(var_core_value_sig46F8) && (var_core_value_sig077A = Math.max(var_core_value_sig077A, 200));
  }
  return var_core_value_sig077A;
}
;
function hc(var_core_value_sig968D) {
  return var_core_value_sig968D.trim().replace(/\s+/g, '\x20').toLowerCase();
}
;
function gc(var_core_value_sig1441) {
  return Array.from(new Set(var_core_value_sig1441));
}
;
function _c(var_core_value_sigEF7F) {
  let var_core_value_sig1142 = [];
  for (let {
    rowIndex: var_core_value_sigF2D6,
    fieldIndex: var_core_value_sig810E,
    ...var_core_value_sigABB1
  } of var_core_value_sigEF7F) var_core_value_sig1142.push(var_core_value_sigABB1);
  return var_core_value_sig1142;
}
;
function vc(var_core_value_sig0CA2) {
  return {
    'compress': true,
    'kind': "base-range-values-v1",
    'u': var_core_value_sig0CA2.unitId,
    't': var_core_value_sig0CA2.tableId,
    'p': var_core_value_sig0CA2.patches["map"](var_core_value_sig3F70 => [var_core_value_sig3F70.row, var_core_value_sig3F70.col, Sc(var_core_value_sig3F70.value)]),
    ...(var_core_value_sig0CA2.trigger === undefined ? {} : {
      'g': var_core_value_sig0CA2.trigger
    })
  };
}
;
function yc(var_core_value_sig8FF7) {
  if (kc(var_core_value_sig8FF7, "base-range-values-v1"), !bc(var_core_value_sig8FF7)) {
    if (!Oc(var_core_value_sig8FF7)) throw Error("[BaseCompression]: invalid uncompressed range values payload.");
    return var_core_value_sig8FF7;
  }
  return {
    'unitId': var_core_value_sig8FF7.u,
    'tableId': var_core_value_sig8FF7.t,
    'patches': var_core_value_sig8FF7.p["map"](([var_core_value_sig9F91, var_core_value_sigC9C8, var_core_value_sigC444]) => ({
      'row': var_core_value_sig9F91,
      'col': var_core_value_sigC9C8,
      'value': Cc(var_core_value_sigC444)
    })),
    ...(var_core_value_sig8FF7.g === undefined ? {} : {
      'trigger': var_core_value_sig8FF7.g
    })
  };
}
;
function bc(var_core_value_sig02FD) {
  return !Ac(var_core_value_sig02FD) || var_core_value_sig02FD.compress !== true || var_core_value_sig02FD.kind !== "base-range-values-v1" ? false : typeof var_core_value_sig02FD.u == "string" && typeof var_core_value_sig02FD.t == "string" && (var_core_value_sig02FD.g === undefined || typeof var_core_value_sig02FD.g == "string") && Array.isArray(var_core_value_sig02FD.p) && var_core_value_sig02FD.p["every"](var_core_value_sig4B40 => Array.isArray(var_core_value_sig4B40) && var_core_value_sig4B40.length === 3 && Number.isInteger(var_core_value_sig4B40[0]) && Number.isInteger(var_core_value_sig4B40[1]));
}
;
function xc(var_core_value_sig1A37) {
  return !Ac(var_core_value_sig1A37) || var_core_value_sig1A37.compress !== true || var_core_value_sig1A37.kind !== "base-snapshot-v1" || !Ac(var_core_value_sig1A37.tables) ? false : Object.values(var_core_value_sig1A37.tables).every(var_core_value_sig9F6D => Ac(var_core_value_sig9F6D) && (var_core_value_sig9F6D.cd === undefined || Array.isArray(var_core_value_sig9F6D.cd) && var_core_value_sig9F6D.cd["every"](var_core_value_sigA321 => Array.isArray(var_core_value_sigA321) && var_core_value_sigA321.length === 3 && Number.isInteger(var_core_value_sigA321[0]) && Number.isInteger(var_core_value_sigA321[1]) && Dc(var_core_value_sigA321[2]))));
}
;
function Sc(var_core_value_sigF87C) {
  return Ec(var_core_value_sigF87C) ? wc(var_core_value_sigF87C) : var_core_value_sigF87C;
}
;
function Cc(var_core_value_sig563A) {
  return Dc(var_core_value_sig563A) ? Tc(var_core_value_sig563A) : var_core_value_sig563A;
}
;
function wc(var_core_value_sig8341) {
  return {
    'c': 1,
    ...(var_core_value_sig8341.v === undefined ? {} : {
      'v': var_core_value_sig8341.v
    }),
    ...(var_core_value_sig8341.t !== undefined && var_core_value_sig8341.t !== null ? {
      't': var_core_value_sig8341.t
    } : var_core_value_sig8341.t === null ? {
      't': null
    } : {}),
    ...(var_core_value_sig8341.f !== undefined && var_core_value_sig8341.f !== null ? {
      'f': var_core_value_sig8341.f
    } : var_core_value_sig8341.f === null ? {
      'f': null
    } : {}),
    ...(var_core_value_sig8341.si !== undefined && var_core_value_sig8341.si !== null ? {
      'si': var_core_value_sig8341.si
    } : var_core_value_sig8341.si === null ? {
      'si': null
    } : {}),
    ...(var_core_value_sig8341.p !== undefined && var_core_value_sig8341.p !== null ? {
      'p': var_core_value_sig8341.p
    } : var_core_value_sig8341.p === null ? {
      'p': null
    } : {})
  };
}
;
function Tc(var_core_value_sig1BAA) {
  return {
    ...(var_core_value_sig1BAA.v === undefined ? {} : {
      'v': var_core_value_sig1BAA.v
    }),
    ...(var_core_value_sig1BAA.t === undefined ? {} : {
      't': var_core_value_sig1BAA.t
    }),
    ...(var_core_value_sig1BAA.f === undefined ? {} : {
      'f': var_core_value_sig1BAA.f
    }),
    ...(var_core_value_sig1BAA.si === undefined ? {} : {
      'si': var_core_value_sig1BAA.si
    }),
    ...(var_core_value_sig1BAA.p === undefined ? {} : {
      'p': var_core_value_sig1BAA.p
    })
  };
}
;
function Ec(var_core_value_sigF583) {
  return !!var_core_value_sigF583 && typeof var_core_value_sigF583 == "object" && !Array.isArray(var_core_value_sigF583) && (Object.prototype["hasOwnProperty"].call(var_core_value_sigF583, 'v') || Object.prototype["hasOwnProperty"].call(var_core_value_sigF583, 't') || Object.prototype["hasOwnProperty"].call(var_core_value_sigF583, 'p') || Object.prototype['hasOwnProperty'].call(var_core_value_sigF583, 'f') || Object.prototype["hasOwnProperty"].call(var_core_value_sigF583, 'si'));
}
;
function Dc(var_core_value_sig0BFC) {
  return Ac(var_core_value_sig0BFC) && var_core_value_sig0BFC.c === 1;
}
;
function Oc(var_core_value_sigBA64) {
  return Ac(var_core_value_sigBA64) && typeof var_core_value_sigBA64.unitId == "string" && typeof var_core_value_sigBA64.tableId == 'string' && (var_core_value_sigBA64.trigger === undefined || typeof var_core_value_sigBA64.trigger == "string") && Array.isArray(var_core_value_sigBA64.patches) && var_core_value_sigBA64.patches["every"](var_core_value_sigE1A2 => Ac(var_core_value_sigE1A2) && Number.isInteger(var_core_value_sigE1A2.row) && Number.isInteger(var_core_value_sigE1A2.col) && "value" in var_core_value_sigE1A2);
}
;
function kc(var_core_value_sig9C5D, var_core_value_sig5B04) {
  if (!(!Ac(var_core_value_sig9C5D) || var_core_value_sig9C5D.compress !== true)) {
    if (var_core_value_sig9C5D.kind !== var_core_value_sig5B04) throw Error("[BaseCompression]: unsupported compressed payload kind \"" + String(var_core_value_sig9C5D.kind) + '\x22.');
    if (!(var_core_value_sig5B04 === "base-range-values-v1" ? bc(var_core_value_sig9C5D) : xc(var_core_value_sig9C5D))) throw Error("[BaseCompression]: invalid compressed payload \"" + var_core_value_sig5B04 + '\x22.');
  }
}
;
function Ac(var_core_value_sig3D58) {
  return !!var_core_value_sig3D58 && typeof var_core_value_sig3D58 == "object" && !Array.isArray(var_core_value_sig3D58);
}
export { Q as ApplyBaseJson1Mutation, Ko as BASE_FIELD_STAT_TYPES, Be as BASE_HIERARCHY_MAX_LEVELS, Ve as BASE_HIERARCHY_PARENT_FIELD_ID, Ca as BASE_TABLE_NAME_REQUIREMENTS, Sr as BASE_UNIT_PERMISSION_ACTIONS, wo as BaseConditionalColorRuleUpdateType, Ue as BaseEventSource, Ki as BaseFormulaService, N as BaseHierarchyError, He as BaseHierarchyErrorCode, Pi as BaseHistoryAction, R as BaseJson1OpApplier, U as BaseJson1OpFactory, _a as BatchCreateBaseRecordsCommand, va as BatchDeleteBaseRecordsCommand, ya as ChangeBaseFieldTypeCommand, ba as CreateBaseChildRecordCommand, xa as CreateBaseFieldCommand, Sa as CreateBaseRecordCommand, Ea as CreateBaseTableCommand, Va as CreateBaseViewCommand, Ha as DeleteBaseFieldCommand, Ua as DeleteBaseRecordCommand, Wa as DeleteBaseTableCommand, Ga as DeleteBaseViewCommand, Ka as DuplicateBaseFieldCommand, qa as DuplicateBaseRecordCommand, No as EMBED_BASES_TABLE_RESOURCE_KEY, Ja as EnsureBaseTemporalViewDateFieldsCommand, X as IBaseCommandService, Lr as IBasePermissionService, ei as IBaseProjectionService, Xs as IBaseViewRegistryService, Za as MoveBaseFieldCommand, Qa as MoveBaseHierarchyRecordCommand, no as MoveBaseViewCommand, ro as RenameBaseTableCommand, io as RenameBaseViewCommand, ao as SetBaseKanbanGroupFieldCommand, oo as SetBaseNameCommand, so as SetBasePermissionCommand, lo as SetBaseRangeValuesCommand, uo as SetBaseRecordValuesCommand, fo as SetBaseTableHierarchyFieldCommand, po as SetBaseViewFieldOrderCommand, mo as SetBaseViewFieldVisibleCommand, ho as SetBaseViewFieldWidthCommand, go as SetBaseViewFilterCommand, _o as SetBaseViewGroupCommand, vo as SetBaseViewSortCommand, $s as UniverBasesPlugin, ec as UniverRemoteBasesPlugin, yo as UpdateBaseCellCommand, xo as UpdateBaseFieldCommand, bo as UpdateBaseFieldDescriptionCommand, So as UpdateBaseKanbanConfigCommand, Co as UpdateBaseRecordOrderCommand, To as UpdateBaseViewConditionalColorRulesCommand, Ao as UpdateBaseViewConfigCommand, jo as ValidateBaseFormulaCommand, cn as baseDateSerialToDateMs, Qe as buildBaseHierarchyIndex, rs as calculateBaseFieldStat, Ir as canEditBaseTargets, vc as compressBaseRangeValuesPayload, Ss as copyBaseTableSnapshot, Ke as createBaseHierarchyParentField, Mo as createDefaultBaseTableSnapshot, Po as createEmbedBasesTable, Fo as createEmbedBasesTableAddMutation, Io as createEmbedBasesTableRemoveMutation, Ta as createUniqueBaseTableName, z as dateToExcelSerial, yc as decompressBaseRangeValuesPayload, I as ensureBaseTableCellLayout, ze as findRecordLinkReferences, dn as formatBaseDateValue, is as formatBaseFieldStatValue, zo as formatBaseNumberValue, Wo as formatBaseProgressValue, qe as getActiveBaseHierarchyFieldIds, _t as getBaseCellFormulaValue, gt as getBaseCellValue, hn as getBaseConditionalColorOperators, Ar as getBaseDashboardPermissionObjectId, K as getBaseFieldPermissionObjectId, var_core_value_sig9A2B as getBaseFormulaTableName, Ze as getBaseHierarchyDeletePromotions, We as getBaseHierarchyFieldId, Mr as getBasePermissionValue, q as getBaseRecordPermissionObjectId, G as getBaseTablePermissionObjectId, kr as getBaseViewPermissionObjectId, M as getRecordLinkFieldConfig, ts as getSupportedBaseFieldStatTypes, et as getVisibleBaseHierarchyRows, Uo as inferBaseSeparatorStyle, gn as isBaseConditionalColorDateField, as as isBaseFieldStatEmptyValue, ns as isBaseFieldStatSupported, $o as isBaseFieldStatType, P as isBaseHierarchyField, bc as isCompressedBaseRangeValuesPayload, vn as matchesBaseCondition, un as normalizeBaseDateFieldConfig, sn as normalizeBaseDateSerial, es as normalizeBaseFieldStatsConfig, Pe as parseRecordLinkIds, $e as projectBaseHierarchy, ln as resolveBaseDateFieldConfig, Ge as resolveBaseHierarchyFieldId, co as resolveBaseRangeHierarchyPatches, tc as searchBaseTable, Fe as serializeRecordLinkIds, Nr as setBasePermissionValue, F as traceBasePerformance, Da as uniqueFieldName, tt as validateBaseHierarchyMove, Ye as validateBaseHierarchyRecordCreations, Je as validateBaseHierarchyRecordPatches, wa as validateBaseTableName, Ie as validateCanonicalRecordLinkValue, Le as validateRecordLinkField, Re as validateRecordLinkValue };
