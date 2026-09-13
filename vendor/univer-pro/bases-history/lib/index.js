import { UniverBasesPlugin as var_core_value_sig77EE } from "@univerjs-pro/bases";
import { HistoryMutationService as var_core_value_sig9F76, UnitComparisonAdapterRegistryService as var_core_value_sigB008, UnitComparisonEntityType as var_core_value_sig8721, UniverEditHistoryPlugin as var_core_value_sig08BA, asRecord as var_core_value_sigDBB5, buildScopedUnitComparison as var_core_value_sigCFAC, buildSemanticComparisonItems as var_core_value_sig237B, recordComparisonEntries as var_core_value_sigFEAB, withoutComparisonKeys as var_core_value_sigE347 } from "@univerjs-pro/edit-history";
import { UniverLicensePlugin as var_core_value_sig3C5B } from "@univerjs-pro/license";
import { DependentOn as var_core_value_sig200B, IConfigService as var_core_value_sig3863, Inject as var_core_value_sigC97C, Injector as var_core_value_sigC4B1, JSON1 as var_core_value_sig1BD9, Plugin as var_core_value_sigE43E, UniverInstanceType as var_core_value_sigA937, merge as var_core_value_sigCAD5, registerDependencies as var_core_value_sigE503 } from "@univerjs/core";
var b = "@univerjs-pro/bases-history",
  x = "1.0.0-insiders.20260907-70fc579";
const S = {},
  ee = ["recordOrder", "fieldOrder", "viewOrder", "rowIndex", "rowId", "colIndex", "colId", "cellData"];
function C(var_core_value_sig4CD2) {
  let var_core_value_sig48CA = null,
    var_core_value_sig50AF = null,
    var_core_value_sigA942 = var_core_value_sig4CD2.map((var_core_value_sig4D4C, var_core_value_sigC9E0) => ({
      entry: var_core_value_sig4D4C,
      index: var_core_value_sigC9E0
    })).sort((var_core_value_sig76BA, var_core_value_sigFBFA) => var_core_value_sig76BA.entry["revision"] - var_core_value_sigFBFA.entry["revision"] || var_core_value_sig76BA.index - var_core_value_sigFBFA.index);
  for (let {
    entry: var_core_value_sigF602
  } of var_core_value_sigA942) P(var_core_value_sigF602.mutation["params"]) && (var_core_value_sig48CA = var_core_value_sig48CA === null ? var_core_value_sigF602.mutation["params"].op : var_core_value_sig1BD9.type["compose"](var_core_value_sig48CA, var_core_value_sigF602.mutation["params"].op), var_core_value_sig50AF = var_core_value_sigF602);
  if (var_core_value_sig48CA === null || var_core_value_sig50AF === null) return [];
  let var_core_value_sigA621 = j(var_core_value_sig48CA).filter(var_core_value_sig1BBD => !te(var_core_value_sig1BBD)),
    var_core_value_sigBBFF = k(var_core_value_sigA621, "recordOrder"),
    var_core_value_sig8889 = k(var_core_value_sigA621, "fieldOrder");
  return var_core_value_sigA621.flatMap((var_core_value_sigF704, var_core_value_sig2BCF) => {
    let var_core_value_sig0D69 = O(var_core_value_sigF704.path);
    if (!var_core_value_sig0D69) return [];
    let var_core_value_sig480E = w(var_core_value_sigF704, var_core_value_sig0D69);
    return [{
      id: var_core_value_sig50AF.revision + ":" + var_core_value_sig2BCF,
      kind: var_core_value_sig480E,
      label: var_core_value_sig0D69.label,
      memberId: var_core_value_sig50AF.memberId,
      tableId: var_core_value_sig0D69.tableId,
      viewId: var_core_value_sig0D69.viewId,
      recordId: var_core_value_sig0D69.recordId,
      recordIndex: var_core_value_sig0D69.recordId ? var_core_value_sigBBFF.get(var_core_value_sig0D69.recordId) : undefined,
      removedRecord: var_core_value_sig480E === "delete" ? ne(var_core_value_sigF704, var_core_value_sig0D69) : undefined,
      fieldId: var_core_value_sig0D69.fieldId,
      fieldIndex: var_core_value_sig0D69.fieldId ? var_core_value_sig8889.get(var_core_value_sig0D69.fieldId) : undefined
    }];
  });
}
function w(var_core_value_sig32F8, var_core_value_sig5B67) {
  if (!E(var_core_value_sig32F8.path, var_core_value_sig5B67)) return "update";
  let var_core_value_sig1758 = Object.prototype["hasOwnProperty"].call(var_core_value_sig32F8.value, "i"),
    var_core_value_sig4805 = Object.prototype["hasOwnProperty"].call(var_core_value_sig32F8.value, "r");
  return var_core_value_sig1758 && !var_core_value_sig4805 ? "insert" : var_core_value_sig4805 && !var_core_value_sig1758 ? "delete" : "update";
}
function te(var_core_value_sigE67E) {
  return Object.prototype["hasOwnProperty"].call(var_core_value_sigE67E.value, "i") && Object.prototype["hasOwnProperty"].call(var_core_value_sigE67E.value, "r") && T(var_core_value_sigE67E.value["i"], var_core_value_sigE67E.value["r"]);
}
function T(var_core_value_sig2902, var_core_value_sig9989) {
  if (var_core_value_sig2902 === var_core_value_sig9989) return true;
  if (Array.isArray(var_core_value_sig2902) || Array.isArray(var_core_value_sig9989)) return Array.isArray(var_core_value_sig2902) && Array.isArray(var_core_value_sig9989) && var_core_value_sig2902.length === var_core_value_sig9989.length && var_core_value_sig2902.every((var_core_value_sig26DB, var_core_value_sigF0F9) => T(var_core_value_sig26DB, var_core_value_sig9989[var_core_value_sigF0F9]));
  if (!F(var_core_value_sig2902) || !F(var_core_value_sig9989)) return false;
  let var_core_value_sig698E = Object.keys(var_core_value_sig2902),
    var_core_value_sig2809 = Object.keys(var_core_value_sig9989);
  return var_core_value_sig698E.length === var_core_value_sig2809.length && var_core_value_sig698E.every(var_core_value_sig1A0F => Object.prototype["hasOwnProperty"].call(var_core_value_sig9989, var_core_value_sig1A0F) && T(var_core_value_sig2902[var_core_value_sig1A0F], var_core_value_sig9989[var_core_value_sig1A0F]));
}
function E(var_core_value_sig2DAB, var_core_value_sig877E) {
  return var_core_value_sig877E.tableId ? var_core_value_sig877E.recordId && var_core_value_sig877E.fieldId ? D(var_core_value_sig2DAB, ["tables", var_core_value_sig877E.tableId, "records", var_core_value_sig877E.recordId, "values", var_core_value_sig877E.fieldId]) : var_core_value_sig877E.recordId ? D(var_core_value_sig2DAB, ["tables", var_core_value_sig877E.tableId, "records", var_core_value_sig877E.recordId]) : var_core_value_sig877E.fieldId ? D(var_core_value_sig2DAB, ["tables", var_core_value_sig877E.tableId, "fields", var_core_value_sig877E.fieldId]) : var_core_value_sig877E.viewId ? D(var_core_value_sig2DAB, ["tables", var_core_value_sig877E.tableId, "views", var_core_value_sig877E.viewId]) : D(var_core_value_sig2DAB, ["tables", var_core_value_sig877E.tableId]) : false;
}
function D(var_core_value_sig20C8, var_core_value_sigE9A7) {
  return var_core_value_sig20C8.length === var_core_value_sigE9A7.length && var_core_value_sig20C8.every((var_core_value_sigFBA4, var_core_value_sig4383) => var_core_value_sigFBA4 === var_core_value_sigE9A7[var_core_value_sig4383]);
}
function O(var_core_value_sigBECE) {
  let var_core_value_sig1B22 = var_core_value_sigBECE.indexOf("tables"),
    var_core_value_sig7F72 = var_core_value_sigBECE[var_core_value_sig1B22 + 1];
  if (var_core_value_sig1B22 < 0 || typeof var_core_value_sig7F72 != "string") return null;
  let var_core_value_sig7B2A = var_core_value_sigBECE[var_core_value_sig1B22 + 2],
    var_core_value_sig06CD = var_core_value_sigBECE[var_core_value_sig1B22 + 3];
  if (var_core_value_sig7B2A === "records" && typeof var_core_value_sig06CD == "string") {
    let var_core_value_sig186C = var_core_value_sigBECE[var_core_value_sig1B22 + 4],
      var_core_value_sigD955 = var_core_value_sigBECE[var_core_value_sig1B22 + 5];
    return var_core_value_sig186C === "values" && typeof var_core_value_sigD955 == "string" ? {
      label: "base:cell",
      tableId: var_core_value_sig7F72,
      recordId: var_core_value_sig06CD,
      fieldId: var_core_value_sigD955
    } : var_core_value_sig186C === "updatedAt" || var_core_value_sig186C === "updatedBy" ? null : {
      label: "base:record",
      tableId: var_core_value_sig7F72,
      recordId: var_core_value_sig06CD
    };
  }
  return var_core_value_sig7B2A === "fields" && typeof var_core_value_sig06CD == "string" ? {
    label: "base:field",
    tableId: var_core_value_sig7F72,
    fieldId: var_core_value_sig06CD
  } : var_core_value_sig7B2A === "views" && typeof var_core_value_sig06CD == "string" ? {
    label: "base:view",
    tableId: var_core_value_sig7F72,
    viewId: var_core_value_sig06CD
  } : ee.some(var_core_value_sig48BD => var_core_value_sig48BD === var_core_value_sig7B2A) ? null : {
    label: var_core_value_sig7B2A === undefined ? "base:table" : "base:unknown",
    tableId: var_core_value_sig7F72
  };
}
function k(var_core_value_sigA5F1, var_core_value_sig97A2) {
  let var_core_value_sig07E9 = new Map();
  return var_core_value_sigA5F1.forEach(var_core_value_sig429F => {
    let var_core_value_sigF62A = var_core_value_sig429F.path["indexOf"](var_core_value_sig97A2),
      var_core_value_sig8178 = var_core_value_sig429F.path[var_core_value_sigF62A + 1],
      var_core_value_sigE9ED = var_core_value_sig429F.value["r"];
    if (var_core_value_sigF62A >= 0 && typeof var_core_value_sig8178 == "number" && typeof var_core_value_sigE9ED == "string") {
      var_core_value_sig07E9.set(var_core_value_sigE9ED, var_core_value_sig8178);
      return;
    }
    if (var_core_value_sigF62A !== var_core_value_sig429F.path["length"] - 1 || !Array.isArray(var_core_value_sigE9ED)) return;
    let var_core_value_sigB577 = new Set(Array.isArray(var_core_value_sig429F.value["i"]) ? var_core_value_sig429F.value["i"].filter(var_core_value_sig2AD8 => typeof var_core_value_sig2AD8 == "string") : []);
    var_core_value_sigE9ED.forEach((var_core_value_sig2AD0, var_core_value_sig3EEE) => {
      typeof var_core_value_sig2AD0 == "string" && !var_core_value_sigB577.has(var_core_value_sig2AD0) && var_core_value_sig07E9.set(var_core_value_sig2AD0, var_core_value_sig3EEE);
    });
  }), var_core_value_sig07E9;
}
function ne(var_core_value_sig4F59, var_core_value_sigF564) {
  if (!(!var_core_value_sigF564.recordId || var_core_value_sigF564.fieldId || !E(var_core_value_sig4F59.path, var_core_value_sigF564))) return A(var_core_value_sig4F59.value["r"]) ? var_core_value_sig4F59.value["r"] : undefined;
}
function A(var_core_value_sig8CFA) {
  return F(var_core_value_sig8CFA) && typeof var_core_value_sig8CFA.id == "string" && F(var_core_value_sig8CFA.values) && typeof var_core_value_sig8CFA.orderKey == "string" && typeof var_core_value_sig8CFA.createdAt == "number" && typeof var_core_value_sig8CFA.updatedAt == "number";
}
function j(var_core_value_sig2E11) {
  let var_core_value_sig5B69 = [];
  return M(var_core_value_sig2E11, [], var_core_value_sig5B69), var_core_value_sig5B69;
}
function M(var_core_value_sigB098, var_core_value_sigCE71, var_core_value_sig21D8) {
  if (!Array.isArray(var_core_value_sigB098)) return;
  let var_core_value_sig2B65 = [];
  var_core_value_sigB098.forEach(var_core_value_sig9572 => {
    if (Array.isArray(var_core_value_sig9572)) {
      M(var_core_value_sig9572, [...var_core_value_sigCE71, ...var_core_value_sig2B65], var_core_value_sig21D8);
      return;
    }
    if (N(var_core_value_sig9572)) {
      var_core_value_sig21D8.push({
        path: [...var_core_value_sigCE71, ...var_core_value_sig2B65],
        value: var_core_value_sig9572
      });
      return;
    }
    (typeof var_core_value_sig9572 == "string" || typeof var_core_value_sig9572 == "number") && var_core_value_sig2B65.push(var_core_value_sig9572);
  });
}
function N(var_core_value_sigD7EA) {
  return F(var_core_value_sigD7EA) && ["i", "r", "p", "d", "es", "ena", "et"].some(var_core_value_sigD873 => Object.prototype["hasOwnProperty"].call(var_core_value_sigD7EA, var_core_value_sigD873));
}
function P(var_core_value_sigB33B) {
  return typeof var_core_value_sigB33B == "object" && !!var_core_value_sigB33B && "op" in var_core_value_sigB33B && Array.isArray(var_core_value_sigB33B.op);
}
function F(var_core_value_sig24B9) {
  return typeof var_core_value_sig24B9 == "object" && !!var_core_value_sig24B9;
}
function I(var_core_value_sigE627, var_core_value_sigEF3E) {
  return function (var_core_value_sigA12B, var_core_value_sigF230) {
    var_core_value_sigEF3E(var_core_value_sigA12B, var_core_value_sigF230, var_core_value_sigE627);
  };
}
function L(var_core_value_sig273D, var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sig2D58) {
  var var_core_value_sig223F = arguments.length,
    var_core_value_sigD749 = var_core_value_sig223F < 3 ? var_core_value_sig9A0D : var_core_value_sig2D58 === null ? var_core_value_sig2D58 = Object.getOwnPropertyDescriptor(var_core_value_sig9A0D, var_core_value_sigA319) : var_core_value_sig2D58,
    var_core_value_sigCFFA;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigD749 = Reflect.decorate(var_core_value_sig273D, var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sig2D58);else {
    for (var var_core_value_sig58C1 = var_core_value_sig273D.length - 1; var_core_value_sig58C1 >= 0; var_core_value_sig58C1--) (var_core_value_sigCFFA = var_core_value_sig273D[var_core_value_sig58C1]) && (var_core_value_sigD749 = (var_core_value_sig223F < 3 ? var_core_value_sigCFFA(var_core_value_sigD749) : var_core_value_sig223F > 3 ? var_core_value_sigCFFA(var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sigD749) : var_core_value_sigCFFA(var_core_value_sig9A0D, var_core_value_sigA319)) || var_core_value_sigD749);
  }
  return var_core_value_sig223F > 3 && var_core_value_sigD749 && Object.defineProperty(var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sigD749), var_core_value_sigD749;
}
let R = class {
  constructor(var_core_value_sig09B8) {
    this._mutationService = var_core_value_sig09B8;
  }
  async compare(var_core_value_sig6F91, var_core_value_sigF9C7) {
    return C(await this._mutationService["load"](var_core_value_sig6F91, var_core_value_sigF9C7));
  }
};
R = L([I(0, var_core_value_sigC97C(var_core_value_sig9F76))], R);
function z(var_core_value_sig5090) {
  "@babel/helpers - typeof";

  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig8895) {
    return typeof var_core_value_sig8895;
  } : function (var_core_value_sigC80B) {
    return var_core_value_sigC80B && typeof Symbol == "function" && var_core_value_sigC80B.constructor === Symbol && var_core_value_sigC80B !== Symbol.prototype ? "symbol" : typeof var_core_value_sigC80B;
  }, z(var_core_value_sig5090);
}
function B(var_core_value_sigC368, var_core_value_sigAD56) {
  if (z(var_core_value_sigC368) != "object" || !var_core_value_sigC368) return var_core_value_sigC368;
  var var_core_value_sigDB4A = var_core_value_sigC368[Symbol.toPrimitive];
  if (var_core_value_sigDB4A !== undefined) {
    var var_core_value_sig6418 = var_core_value_sigDB4A.call(var_core_value_sigC368, var_core_value_sigAD56 || "default");
    if (z(var_core_value_sig6418) != "object") return var_core_value_sig6418;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigAD56 === "string" ? String : Number)(var_core_value_sigC368);
}
function V(var_core_value_sig1896) {
  var var_core_value_sig0285 = B(var_core_value_sig1896, "string");
  return z(var_core_value_sig0285) == "symbol" ? var_core_value_sig0285 : var_core_value_sig0285 + "";
}
function H(var_core_value_sig777D, var_core_value_sig3F4C, var_core_value_sigD65A) {
  return (var_core_value_sig3F4C = V(var_core_value_sig3F4C)) in var_core_value_sig777D ? Object.defineProperty(var_core_value_sig777D, var_core_value_sig3F4C, {
    value: var_core_value_sigD65A,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig777D[var_core_value_sig3F4C] = var_core_value_sigD65A, var_core_value_sig777D;
}
const U = ["rev", "createdAt", "updatedAt"],
  W = [var_core_value_sig8721.BASE, var_core_value_sig8721.TABLE, var_core_value_sig8721.FIELD, var_core_value_sig8721.RECORD, var_core_value_sig8721.VIEW, var_core_value_sig8721.CELL],
  G = var_core_value_sigE347("fields", "fieldOrder", "records", "recordOrder", "views", "viewOrder", "cellData", "colId", "colIndex", "rowId", "rowIndex", ...U);
var K = class {
  constructor() {
    H(this, "type", var_core_value_sigA937.UNIVER_BASE);
  }
  compare(var_core_value_sig284F) {
    let var_core_value_sigE154 = var_core_value_sigDBB5(var_core_value_sig284F.leftData),
      var_core_value_sig4632 = var_core_value_sigDBB5(var_core_value_sig284F.rightData),
      var_core_value_sig12F2 = var_core_value_sigDBB5(var_core_value_sigE154 == null ? undefined : var_core_value_sigE154.tables),
      var_core_value_sig2259 = var_core_value_sigDBB5(var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.tables),
      var_core_value_sig9E2F = new Set([...Object.keys(var_core_value_sig12F2 ?? {}), ...Object.keys(var_core_value_sig2259 ?? {})]),
      var_core_value_sigD082 = var_core_value_sigFEAB(var_core_value_sig12F2, var_core_value_sigE154 == null ? undefined : var_core_value_sigE154.tableOrder, G),
      var_core_value_sigDBB7 = var_core_value_sigFEAB(var_core_value_sig2259, var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.tableOrder, G),
      var_core_value_sigD0A8 = [...var_core_value_sig237B({
        entityType: var_core_value_sig8721.BASE,
        left: var_core_value_sigE154 === undefined ? [] : [{
          stableId: "base",
          position: 0,
          value: var_core_value_sigE347("tables", "tableOrder", "resources", ...U)(var_core_value_sigE154)
        }],
        right: var_core_value_sig4632 === undefined ? [] : [{
          stableId: "base",
          position: 0,
          value: var_core_value_sigE347("tables", "tableOrder", "resources", ...U)(var_core_value_sig4632)
        }]
      }), ...var_core_value_sig237B({
        entityType: var_core_value_sig8721.TABLE,
        left: var_core_value_sigD082,
        right: var_core_value_sigDBB7
      }), ...[...var_core_value_sig9E2F].flatMap(var_core_value_sigBC46 => q(var_core_value_sigBC46, var_core_value_sig12F2, var_core_value_sig2259))],
      var_core_value_sigF4B9 = var_core_value_sigCFAC({
        entityType: var_core_value_sig8721.TABLE,
        items: var_core_value_sigD0A8,
        left: var_core_value_sigD082,
        right: var_core_value_sigDBB7
      });
    return {
      items: var_core_value_sigF4B9.items,
      supportedEntityTypes: W,
      scopes: var_core_value_sigF4B9.scopes,
      productContext: {
        type: var_core_value_sigA937.UNIVER_BASE,
        visualProjection: "raw-table-data"
      }
    };
  }
};
function q(var_core_value_sig5A13, var_core_value_sigF593, var_core_value_sig3607) {
  let var_core_value_sigB512 = var_core_value_sigDBB5(var_core_value_sigF593 == null ? undefined : var_core_value_sigF593[var_core_value_sig5A13]) ?? {},
    var_core_value_sigF2E6 = var_core_value_sigDBB5(var_core_value_sig3607 == null ? undefined : var_core_value_sig3607[var_core_value_sig5A13]) ?? {},
    var_core_value_sig34C8 = var_core_value_sigDBB5(var_core_value_sigB512.fields),
    var_core_value_sigB744 = var_core_value_sigDBB5(var_core_value_sigF2E6.fields),
    var_core_value_sigEAE2 = var_core_value_sigDBB5(var_core_value_sigB512.records),
    var_core_value_sigE68A = var_core_value_sigDBB5(var_core_value_sigF2E6.records);
  return [...J(var_core_value_sig8721.FIELD, var_core_value_sig5A13, var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigB512.fieldOrder, var_core_value_sigF2E6.fieldOrder, var_core_value_sigE347(...U)), ...J(var_core_value_sig8721.RECORD, var_core_value_sig5A13, var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sigB512.recordOrder, var_core_value_sigF2E6.recordOrder, var_core_value_sigE347("values", "orderKey", ...U)), ...J(var_core_value_sig8721.VIEW, var_core_value_sig5A13, var_core_value_sigB512.views, var_core_value_sigF2E6.views, var_core_value_sigB512.viewOrder, var_core_value_sigF2E6.viewOrder, var_core_value_sigE347("orderKey", ...U)), ...Y(var_core_value_sig5A13, var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sigB512.fieldOrder, var_core_value_sigF2E6.fieldOrder, var_core_value_sigB512.recordOrder, var_core_value_sigF2E6.recordOrder, var_core_value_sigB512.primaryFieldId, var_core_value_sigF2E6.primaryFieldId)];
}
function J(var_core_value_sig3E68, var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigA6F6, var_core_value_sigCDDA) {
  return var_core_value_sig237B({
    entityType: var_core_value_sig3E68,
    parentStableId: var_core_value_sigF4C5,
    left: var_core_value_sigFEAB(var_core_value_sig5410, var_core_value_sig8EA0, var_core_value_sigCDDA),
    right: var_core_value_sigFEAB(var_core_value_sig492F, var_core_value_sigA6F6, var_core_value_sigCDDA)
  });
}
function Y(var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sig21B2, var_core_value_sigDE08, var_core_value_sigACCB, var_core_value_sig7F33, var_core_value_sig0C53, var_core_value_sigEA04, var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565) {
  let var_core_value_sigD4FB = Z(var_core_value_sig74A8, var_core_value_sigDE08, var_core_value_sig7F33, var_core_value_sigEA04, var_core_value_sig8109),
    var_core_value_sig3E71 = Z(var_core_value_sig21B2, var_core_value_sigACCB, var_core_value_sig0C53, var_core_value_sig7A62, var_core_value_sig7565),
    var_core_value_sig01B3 = new Map(var_core_value_sigD4FB.map(var_core_value_sig5CEE => [var_core_value_sig5CEE.stableId, var_core_value_sig5CEE])),
    var_core_value_sig7442 = new Map(var_core_value_sig3E71.map(var_core_value_sigE92A => [var_core_value_sigE92A.stableId, var_core_value_sigE92A]));
  return var_core_value_sig237B({
    entityType: var_core_value_sig8721.CELL,
    parentStableId: var_core_value_sigE243,
    left: var_core_value_sigD4FB,
    right: var_core_value_sig3E71
  }).map(var_core_value_sig362B => ({
    ...var_core_value_sig362B,
    locations: {
      left: X(var_core_value_sig362B.locations["left"], var_core_value_sig01B3.get(var_core_value_sig362B.stableId), var_core_value_sigE243),
      right: X(var_core_value_sig362B.locations["right"], var_core_value_sig7442.get(var_core_value_sig362B.stableId), var_core_value_sigE243)
    }
  }));
}
function X(var_core_value_sigDF87, var_core_value_sig9EE0, var_core_value_sigF051) {
  if (var_core_value_sigDF87 === null || var_core_value_sig9EE0 === undefined) return null;
  let var_core_value_sig0B45 = var_core_value_sigDF87.target;
  return (var_core_value_sig0B45 == null ? undefined : var_core_value_sig0B45.kind) === "entity" ? {
    ...var_core_value_sigDF87,
    parentStableId: var_core_value_sig9EE0.recordId,
    target: {
      ...var_core_value_sig0B45,
      kind: "base-cell",
      tableId: var_core_value_sigF051,
      recordId: var_core_value_sig9EE0.recordId,
      fieldId: var_core_value_sig9EE0.fieldId
    }
  } : var_core_value_sigDF87;
}
function Z(var_core_value_sig36F8, var_core_value_sig03E1, var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigE799) {
  let var_core_value_sigB601 = Q(var_core_value_sig36F8, var_core_value_sigBB57);
  return Q(var_core_value_sig03E1, var_core_value_sig7C4A).flatMap((var_core_value_sig5CA5, var_core_value_sigE90F) => {
    var var_core_value_sigEFD4;
    let var_core_value_sig861B = var_core_value_sigDBB5((var_core_value_sigEFD4 = var_core_value_sigDBB5(var_core_value_sig03E1 == null ? undefined : var_core_value_sig03E1[var_core_value_sig5CA5])) == null ? undefined : var_core_value_sigEFD4.values);
    if (var_core_value_sig861B === undefined) return [];
    let var_core_value_sig5237 = typeof var_core_value_sigE799 == "string" ? var_core_value_sig861B[var_core_value_sigE799] : undefined,
      var_core_value_sigBB00 = typeof var_core_value_sig5237 == "string" || typeof var_core_value_sig5237 == "number" ? String(var_core_value_sig5237) : undefined;
    return var_core_value_sigB601.flatMap((var_core_value_sig3D7D, var_core_value_sig27E5) => {
      var var_core_value_sig8061;
      return var_core_value_sig3D7D in var_core_value_sig861B ? [{
        stableId: var_core_value_sig5CA5 + ":" + var_core_value_sig3D7D,
        recordId: var_core_value_sig5CA5,
        fieldId: var_core_value_sig3D7D,
        position: var_core_value_sigE90F * Math.max(1, var_core_value_sigB601.length) + var_core_value_sig27E5,
        displayName: [var_core_value_sigBB00, (var_core_value_sig8061 = var_core_value_sigDBB5(var_core_value_sig36F8 == null ? undefined : var_core_value_sig36F8[var_core_value_sig3D7D])) == null ? undefined : var_core_value_sig8061.name].filter(var_core_value_sig7524 => typeof var_core_value_sig7524 == "string" && var_core_value_sig7524.length > 0).join("\x20·\x20"),
        value: var_core_value_sig861B[var_core_value_sig3D7D]
      }] : [];
    });
  });
}
function Q(var_core_value_sig8B71, var_core_value_sigAEFB) {
  let var_core_value_sig826B = var_core_value_sig8B71 ?? {},
    var_core_value_sigCF89 = Array.isArray(var_core_value_sigAEFB) ? var_core_value_sigAEFB.filter(var_core_value_sig7E54 => typeof var_core_value_sig7E54 == "string" && var_core_value_sig7E54 in var_core_value_sig826B) : [],
    var_core_value_sig00CB = new Set(var_core_value_sigCF89);
  return [...var_core_value_sigCF89, ...Object.keys(var_core_value_sig826B).filter(var_core_value_sig9A8D => !var_core_value_sig00CB.has(var_core_value_sig9A8D))];
}
let $ = class extends var_core_value_sigE43E {
  constructor(var_core_value_sigC259 = S, var_core_value_sig9C9F, var_core_value_sigFDEA) {
    super(), this._config = var_core_value_sigC259, this._injector = var_core_value_sig9C9F, this._configService = var_core_value_sigFDEA;
    let {
      ...var_core_value_sig86D0
    } = var_core_value_sigCAD5({}, S, this._config);
    this._configService["setConfig"]("bases-history.config", var_core_value_sig86D0);
  }
  onStarting() {
    var_core_value_sigE503(this._injector, [[R], [K]]), this.disposeWithMe(this._injector["get"](var_core_value_sigB008).register(this._injector["get"](K)));
  }
};
H($, "pluginName", "UNIVER_BASES_HISTORY_PLUGIN"), H($, "packageName", b), H($, "version", x), H($, "type", var_core_value_sigA937.UNIVER_BASE), $ = L([var_core_value_sig200B(var_core_value_sig3C5B, var_core_value_sig08BA, var_core_value_sig77EE), I(1, var_core_value_sigC97C(var_core_value_sigC4B1)), I(2, var_core_value_sig3863)], $);
export { R as BasesHistoryDiffService, K as BasesUnitComparisonAdapter, $ as UniverBasesHistoryPlugin };
