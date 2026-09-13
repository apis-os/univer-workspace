Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/edit-history"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets");
const i = "sheets-history.config",
  a = {};
var o = "@univerjs-pro/sheets-history",
  s = "1.0.0-insiders.20260907-70fc579";
function c(var_core_value_sigCB82, var_core_value_sigCF4E) {
  return function (var_core_value_sig877E, var_core_value_sig20C8) {
    var_core_value_sigCF4E(var_core_value_sig877E, var_core_value_sig20C8, var_core_value_sigCB82);
  };
}
function l(var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sigB2CE) {
  var var_core_value_sig443C = arguments.length,
    var_core_value_sig39B1 = var_core_value_sig443C < 3 ? var_core_value_sig8CF5 : var_core_value_sigB2CE === null ? var_core_value_sigB2CE = Object.getOwnPropertyDescriptor(var_core_value_sig8CF5, var_core_value_sigDDD7) : var_core_value_sigB2CE,
    var_core_value_sig210D;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig39B1 = Reflect.decorate(var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sigB2CE);else {
    for (var var_core_value_sigB4B4 = var_core_value_sig6CAD.length - 1; var_core_value_sigB4B4 >= 0; var_core_value_sigB4B4--) (var_core_value_sig210D = var_core_value_sig6CAD[var_core_value_sigB4B4]) && (var_core_value_sig39B1 = (var_core_value_sig443C < 3 ? var_core_value_sig210D(var_core_value_sig39B1) : var_core_value_sig443C > 3 ? var_core_value_sig210D(var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sig39B1) : var_core_value_sig210D(var_core_value_sig8CF5, var_core_value_sigDDD7)) || var_core_value_sig39B1);
  }
  return var_core_value_sig443C > 3 && var_core_value_sig39B1 && Object.defineProperty(var_core_value_sig8CF5, var_core_value_sigDDD7, var_core_value_sig39B1), var_core_value_sig39B1;
}
let u = class extends n.Disposable {
  constructor(var_core_value_sigE9A7, var_core_value_sigBECE, var_core_value_sig1B22, var_core_value_sig7F72, var_core_value_sig7B2A, var_core_value_sig06CD) {
    super(), this._commandService = var_core_value_sigE9A7, this._permissionService = var_core_value_sig1B22, this._univerInstanceService = var_core_value_sig7F72, this._selectionService = var_core_value_sig7B2A, this._rangeProtectionRuleModel = var_core_value_sig06CD, this.disposeWithMe(var_core_value_sigBECE.register({
      type: n.UniverInstanceType["UNIVER_SHEET"],
      canView: var_core_value_sig4383 => this._hasPermission(new r.WorkbookViewHistoryPermission(var_core_value_sig4383).id),
      canRevert: var_core_value_sig186C => this._canRevert(var_core_value_sig186C),
      captureLocation: var_core_value_sigD955 => this._captureLocation(var_core_value_sigD955),
      restoreLocation: (var_core_value_sig48BD, var_core_value_sig429F) => this._restoreLocation(var_core_value_sig48BD, d(var_core_value_sig429F) ? var_core_value_sig429F : undefined)
    }));
  }
  _captureLocation(var_core_value_sigA5F1) {
    var var_core_value_sig97A2;
    let var_core_value_sig07E9 = this._univerInstanceService["getUnit"](var_core_value_sigA5F1, n.UniverInstanceType["UNIVER_SHEET"]),
      var_core_value_sig4F59 = var_core_value_sig07E9 == null ? undefined : var_core_value_sig07E9.getActiveSheet();
    if (var_core_value_sig4F59) return {
      subUnitId: var_core_value_sig4F59.getSheetId(),
      range: (var_core_value_sig97A2 = this._selectionService["getCurrentLastSelection"]()) == null ? undefined : var_core_value_sig97A2.range
    };
  }
  async _restoreLocation(var_core_value_sigF564, var_core_value_sig8CFA) {
    var_core_value_sig8CFA && (await this._commandService["executeCommand"](r.SetWorksheetActivateCommand["id"], {
      unitId: var_core_value_sigF564,
      subUnitId: var_core_value_sig8CFA.subUnitId
    }), var_core_value_sig8CFA.range && (await this._commandService["executeCommand"](r.SelectRangeCommand["id"], {
      unitId: var_core_value_sigF564,
      subUnit: var_core_value_sig8CFA.subUnitId,
      range: var_core_value_sig8CFA.range
    })));
  }
  _hasPermission(var_core_value_sig2E11) {
    return this._permissionService["composePermission"]([var_core_value_sig2E11]).every(var_core_value_sigF62A => !!var_core_value_sigF62A.value);
  }
  _canRevert(var_core_value_sig5B69) {
    let var_core_value_sigB098 = this._univerInstanceService["getUnit"](var_core_value_sig5B69, n.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sigB098) return false;
    let var_core_value_sigCE71 = var_core_value_sigB098.getSheets().map(var_core_value_sig8178 => var_core_value_sig8178.getSheetId()),
      var_core_value_sig21D8 = var_core_value_sigCE71.map(var_core_value_sigE9ED => new r["WorksheetEditPermission"](var_core_value_sig5B69, var_core_value_sigE9ED).id),
      var_core_value_sig2B65 = var_core_value_sigCE71.flatMap(var_core_value_sigB577 => this._rangeProtectionRuleModel["getSubunitRuleList"](var_core_value_sig5B69, var_core_value_sigB577).map(var_core_value_sig27E5 => new r["RangeProtectionPermissionEditPoint"](var_core_value_sig5B69, var_core_value_sigB577, var_core_value_sig27E5.permissionId).id)),
      var_core_value_sigD7EA = [new r.WorkbookEditablePermission(var_core_value_sig5B69).id, ...var_core_value_sig21D8, ...var_core_value_sig2B65, new r["WorkbookRecoverHistoryPermission"](var_core_value_sig5B69).id];
    return this._permissionService["composePermission"](var_core_value_sigD7EA).every(var_core_value_sig9572 => !!var_core_value_sig9572.value);
  }
};
u = l([c(0, n.ICommandService), c(1, (0, n.Inject)(e.HistoryUnitAdapterRegistryService)), c(2, n.IPermissionService), c(3, n.IUniverInstanceService), c(4, (0, n.Inject)(r.SheetsSelectionsService)), c(5, (0, n.Inject)(r.RangeProtectionRuleModel))], u);
function d(var_core_value_sigD407) {
  return typeof var_core_value_sigD407 == "object" && !!var_core_value_sigD407 && "subUnitId" in var_core_value_sigD407 && typeof var_core_value_sigD407.subUnitId == "string";
}
function f(var_core_value_sig63F3) {
  "@babel/helpers - typeof";

  return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigB33B) {
    return typeof var_core_value_sigB33B;
  } : function (var_core_value_sig24B9) {
    return var_core_value_sig24B9 && typeof Symbol == "function" && var_core_value_sig24B9.constructor === Symbol && var_core_value_sig24B9 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig24B9;
  }, f(var_core_value_sig63F3);
}
function p(var_core_value_sig6A71, var_core_value_sig3BF6) {
  if (f(var_core_value_sig6A71) != "object" || !var_core_value_sig6A71) return var_core_value_sig6A71;
  var var_core_value_sig38CE = var_core_value_sig6A71[Symbol.toPrimitive];
  if (var_core_value_sig38CE !== undefined) {
    var var_core_value_sig62B7 = var_core_value_sig38CE.call(var_core_value_sig6A71, var_core_value_sig3BF6 || "default");
    if (f(var_core_value_sig62B7) != "object") return var_core_value_sig62B7;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig3BF6 === "string" ? String : Number)(var_core_value_sig6A71);
}
function m(var_core_value_sig37A8) {
  var var_core_value_sigA90D = p(var_core_value_sig37A8, "string");
  return f(var_core_value_sigA90D) == "symbol" ? var_core_value_sigA90D : var_core_value_sigA90D + "";
}
function h(var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44) {
  return (var_core_value_sig0511 = m(var_core_value_sig0511)) in var_core_value_sig7A3C ? Object.defineProperty(var_core_value_sig7A3C, var_core_value_sig0511, {
    value: var_core_value_sig1F44,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig7A3C[var_core_value_sig0511] = var_core_value_sig1F44, var_core_value_sig7A3C;
}
const g = [e.UnitComparisonEntityType["WORKBOOK"], e.UnitComparisonEntityType["WORKSHEET"], e.UnitComparisonEntityType["CELL"], e.UnitComparisonEntityType["ROW_COLUMN"], e.UnitComparisonEntityType["CONDITION_FORMAT"], e.UnitComparisonEntityType["DATA_VALIDATION"], e.UnitComparisonEntityType["SPARKLINE"], e.UnitComparisonEntityType["TABLE"], e.UnitComparisonEntityType["SHAPE"], e.UnitComparisonEntityType["CHART"], e.UnitComparisonEntityType["PIVOT"]],
  _ = [[e.UnitComparisonEntityType["CONDITION_FORMAT"], "SHEET_CONDITIONAL_FORMATTING_PLUGIN"], [e.UnitComparisonEntityType["DATA_VALIDATION"], "SHEET_DATA_VALIDATION_PLUGIN"], [e.UnitComparisonEntityType["SPARKLINE"], "SHEET_SPARKLINE_PLUGIN"], [e.UnitComparisonEntityType["TABLE"], "SHEET_TABLE_PLUGIN"], [e.UnitComparisonEntityType["SHAPE"], "SHEET_DRAWING_PLUGIN"], [e.UnitComparisonEntityType["CHART"], "SHEET_CHART_PLUGIN"], [e.UnitComparisonEntityType["PIVOT"], "SHEET_PIVOT_TABLE_PLUGIN"]],
  v = new Set(["sheet.mutation.insert-col", "sheet.mutation.insert-row", "sheet.mutation.move-columns", "sheet.mutation.move-cols", "sheet.mutation.move-rows", "sheet.mutation.remove-col", "sheet.mutation.remove-rows"]),
  y = new Set([...v, "sheet.mutation.insert-sheet", "sheet.mutation.remove-sheet"]),
  b = /(?:^|\.)(?:insert|remove|delete|move|reorder)-(?:(?:row|rows|col|cols|column|columns)(?:-|$)|(?:sheet|sheets)$)/iu;
var x = class {
  constructor() {
    h(this, "type", n.UniverInstanceType["UNIVER_SHEET"]);
  }
  compare(var_core_value_sigE627) {
    let var_core_value_sigEF3E = S(var_core_value_sigE627.leftData),
      var_core_value_sig273D = S(var_core_value_sigE627.rightData),
      var_core_value_sig9A0D = (0, e.asRecord)(var_core_value_sigEF3E == null ? undefined : var_core_value_sigEF3E.sheets),
      var_core_value_sigA319 = (0, e.asRecord)(var_core_value_sig273D == null ? undefined : var_core_value_sig273D.sheets),
      var_core_value_sig2D58 = (0, e.withoutComparisonKeys)("cellData", "rowData", "columnData"),
      var_core_value_sig223F = (0, e.recordComparisonEntries)(var_core_value_sig9A0D, var_core_value_sigEF3E == null ? undefined : var_core_value_sigEF3E.sheetOrder, var_core_value_sig2D58),
      var_core_value_sigD749 = (0, e.recordComparisonEntries)(var_core_value_sigA319, var_core_value_sig273D == null ? undefined : var_core_value_sig273D.sheetOrder, var_core_value_sig2D58),
      var_core_value_sigCFFA = new Set([...Object.keys(var_core_value_sig9A0D ?? {}), ...Object.keys(var_core_value_sigA319 ?? {})]),
      var_core_value_sig58C1 = W(var_core_value_sigE627.leftChangesets, var_core_value_sigEF3E),
      var_core_value_sig5090 = W(var_core_value_sigE627.rightChangesets, var_core_value_sig273D),
      var_core_value_sigC368 = [...var_core_value_sig58C1, ...var_core_value_sig5090].some(var_core_value_sigD873 => v.has(var_core_value_sigD873.id)),
      var_core_value_sigAD56 = [...var_core_value_sigCFFA].map(var_core_value_sigA12B => re(var_core_value_sigA12B, var_core_value_sig9A0D, var_core_value_sigA319, var_core_value_sig58C1, var_core_value_sig5090, var_core_value_sigC368)),
      var_core_value_sigDB4A = [...ee(var_core_value_sigEF3E, var_core_value_sig273D, var_core_value_sig9A0D, var_core_value_sigA319), ...var_core_value_sigAD56.flatMap(var_core_value_sigF230 => var_core_value_sigF230.items), ..._.flatMap(([var_core_value_sig09B8, var_core_value_sig6F91]) => te(var_core_value_sig09B8, var_core_value_sig6F91, var_core_value_sigE627.leftData, var_core_value_sigE627.rightData, [...var_core_value_sigCFFA]))],
      var_core_value_sig6418 = [...new Set([...G(var_core_value_sig58C1), ...G(var_core_value_sig5090), ...var_core_value_sigAD56.flatMap(var_core_value_sigF9C7 => var_core_value_sigF9C7.unsupportedMutationIds)])].sort(),
      var_core_value_sig1896 = [...var_core_value_sigCFFA].flatMap((var_core_value_sig8895, var_core_value_sigC80B) => {
        let var_core_value_sig284F = var_core_value_sigDB4A.filter(var_core_value_sig8061 => var_core_value_sig8061.parentStableId === var_core_value_sig8895 || var_core_value_sig8061.entityType === e.UnitComparisonEntityType["WORKSHEET"] && var_core_value_sig8061.stableId === var_core_value_sig8895).length;
        if (!var_core_value_sig284F) return [];
        let var_core_value_sigE154 = (0, e.asRecord)(var_core_value_sig9A0D == null ? undefined : var_core_value_sig9A0D[var_core_value_sig8895]),
          var_core_value_sig4632 = (0, e.asRecord)(var_core_value_sigA319 == null ? undefined : var_core_value_sigA319[var_core_value_sig8895]);
        return [{
          sheetId: var_core_value_sig8895,
          name: typeof (var_core_value_sig4632 == null ? undefined : var_core_value_sig4632.name) == "string" ? var_core_value_sig4632.name : typeof (var_core_value_sigE154 == null ? undefined : var_core_value_sigE154.name) == "string" ? var_core_value_sigE154.name : var_core_value_sig8895,
          changeCount: var_core_value_sig284F,
          rows: var_core_value_sigAD56[var_core_value_sigC80B].rows,
          columns: var_core_value_sigAD56[var_core_value_sigC80B].columns
        }];
      }),
      var_core_value_sig0285 = var_core_value_sigAD56.some(var_core_value_sig12F2 => var_core_value_sig12F2.snapshotAxisAmbiguous),
      var_core_value_sig777D = (0, e.buildScopedUnitComparison)({
        entityType: e.UnitComparisonEntityType["WORKSHEET"],
        items: var_core_value_sigDB4A,
        left: var_core_value_sig223F,
        right: var_core_value_sigD749
      });
    return {
      items: var_core_value_sig777D.items,
      supportedEntityTypes: g,
      scopes: var_core_value_sig777D.scopes,
      productContext: {
        type: n.UniverInstanceType["UNIVER_SHEET"],
        sheets: var_core_value_sig1896
      },
      ...(var_core_value_sig6418.length || var_core_value_sig0285 ? {
        unsupportedMutationIds: var_core_value_sig6418,
        readiness: e.UnitComparisonReadiness["DEGRADED"],
        diagnosticCodes: [...(var_core_value_sig6418.length ? [e.UnitComparisonDiagnosticCode["SHEET_STRUCTURAL_HISTORY_FALLBACK"]] : []), ...(var_core_value_sig0285 ? [e.UnitComparisonDiagnosticCode["SHEET_SNAPSHOT_AXIS_IDENTITY_AMBIGUOUS"]] : [])]
      } : {})
    };
  }
};
function S(var_core_value_sigCB04) {
  let var_core_value_sig947E = (0, e.asRecord)(var_core_value_sigCB04);
  if (var_core_value_sig947E === undefined) return;
  let var_core_value_sig4545 = (0, e.asRecord)(var_core_value_sig947E.styles) ?? {},
    {
      styles: var_core_value_sigF39A,
      ...var_core_value_sigF79C
    } = w(var_core_value_sig947E, var_core_value_sig4545, "defaultStyle");
  return {
    ...var_core_value_sigF79C,
    ...(var_core_value_sig947E.sheets === undefined ? {} : {
      sheets: T(var_core_value_sig947E.sheets, var_core_value_sig3F4C => {
        let var_core_value_sigD65A = (0, e.asRecord)(var_core_value_sig3F4C);
        return var_core_value_sigD65A === undefined ? var_core_value_sig3F4C : {
          ...w(var_core_value_sigD65A, var_core_value_sig4545, "defaultStyle"),
          ...(var_core_value_sigD65A.cellData === undefined ? {} : {
            cellData: T(var_core_value_sigD65A.cellData, var_core_value_sig2259 => T(var_core_value_sig2259, var_core_value_sig4D4C => C(var_core_value_sig4D4C, var_core_value_sig4545)))
          }),
          ...(var_core_value_sigD65A.rowData === undefined ? {} : {
            rowData: T(var_core_value_sigD65A.rowData, var_core_value_sig9E2F => C(var_core_value_sig9E2F, var_core_value_sig4545))
          }),
          ...(var_core_value_sigD65A.columnData === undefined ? {} : {
            columnData: T(var_core_value_sigD65A.columnData, var_core_value_sigD082 => C(var_core_value_sigD082, var_core_value_sig4545))
          })
        };
      })
    })
  };
}
function C(var_core_value_sig2E54, var_core_value_sig7658) {
  let var_core_value_sigDCF5 = (0, e.asRecord)(var_core_value_sig2E54);
  return var_core_value_sigDCF5 === undefined ? var_core_value_sig2E54 : w(var_core_value_sigDCF5, var_core_value_sig7658, "s");
}
function w(var_core_value_sigC786, var_core_value_sigC0D9, var_core_value_sigF051) {
  let var_core_value_sig5825 = var_core_value_sigC786[var_core_value_sigF051];
  return typeof var_core_value_sig5825 == "string" && Object.prototype["hasOwnProperty"].call(var_core_value_sigC0D9, var_core_value_sig5825) ? {
    ...var_core_value_sigC786,
    [var_core_value_sigF051]: var_core_value_sigC0D9[var_core_value_sig5825]
  } : var_core_value_sigC786;
}
function T(var_core_value_sig4EB7, var_core_value_sig73AF) {
  let var_core_value_sig548A = (0, e.asRecord)(var_core_value_sig4EB7);
  return var_core_value_sig548A === undefined ? var_core_value_sig4EB7 : Object.fromEntries(Object.entries(var_core_value_sig548A).map(([var_core_value_sig5A13, var_core_value_sigF593]) => [var_core_value_sig5A13, var_core_value_sig73AF(var_core_value_sigF593)]));
}
function ee(var_core_value_sigE026, var_core_value_sig339E, var_core_value_sig7550, var_core_value_sig2983) {
  return [...(0, e.buildSemanticComparisonItems)({
    entityType: e.UnitComparisonEntityType["WORKBOOK"],
    left: var_core_value_sigE026 === undefined ? [] : [{
      stableId: "workbook",
      position: 0,
      value: (0, e.withoutComparisonKeys)("sheets", "sheetOrder", "resources", "rev")(var_core_value_sigE026)
    }],
    right: var_core_value_sig339E === undefined ? [] : [{
      stableId: "workbook",
      position: 0,
      value: (0, e.withoutComparisonKeys)("sheets", "sheetOrder", "resources", "rev")(var_core_value_sig339E)
    }]
  }), ...(0, e.buildSemanticComparisonItems)({
    entityType: e.UnitComparisonEntityType["WORKSHEET"],
    left: (0, e.recordComparisonEntries)(var_core_value_sig7550, var_core_value_sigE026 == null ? undefined : var_core_value_sigE026.sheetOrder, (0, e.withoutComparisonKeys)("cellData", "rowData", "columnData")),
    right: (0, e.recordComparisonEntries)(var_core_value_sig2983, var_core_value_sig339E == null ? undefined : var_core_value_sig339E.sheetOrder, (0, e.withoutComparisonKeys)("cellData", "rowData", "columnData"))
  })];
}
function te(var_core_value_sigE1B0, var_core_value_sigD4FF, var_core_value_sig1E5B, var_core_value_sigB680, var_core_value_sig1F64) {
  let var_core_value_sigDD1C = O(var_core_value_sig1E5B, var_core_value_sigD4FF),
    var_core_value_sig2C39 = O(var_core_value_sigB680, var_core_value_sigD4FF);
  return var_core_value_sig1F64.some(var_core_value_sig3607 => A(var_core_value_sigDD1C, var_core_value_sig3607) || A(var_core_value_sig2C39, var_core_value_sig3607)) ? var_core_value_sig1F64.flatMap(var_core_value_sigB512 => (0, e.buildSemanticComparisonItems)({
    entityType: var_core_value_sigE1B0,
    parentStableId: var_core_value_sigB512,
    left: j(var_core_value_sigDD1C, var_core_value_sigB512, var_core_value_sigE1B0),
    right: j(var_core_value_sig2C39, var_core_value_sigB512, var_core_value_sigE1B0)
  }).map(E)) : (0, e.buildSemanticComparisonItems)({
    entityType: var_core_value_sigE1B0,
    left: (0, e.resourceComparisonEntries)(var_core_value_sig1E5B, var_core_value_sigD4FF),
    right: (0, e.resourceComparisonEntries)(var_core_value_sigB680, var_core_value_sigD4FF)
  }).map(E);
}
function E(var_core_value_sigB7D1) {
  let var_core_value_sig64F0 = var_core_value_sigF2E6 => {
    var var_core_value_sig34C8;
    let var_core_value_sigB744 = var_core_value_sigB7D1.locations[var_core_value_sigF2E6],
      var_core_value_sigEAE2 = (0, e.asRecord)((var_core_value_sig34C8 = var_core_value_sigB7D1.values) == null ? undefined : var_core_value_sig34C8[var_core_value_sigF2E6]);
    if (var_core_value_sigB744 === null || var_core_value_sigEAE2 === undefined) return var_core_value_sigB744;
    let var_core_value_sigE68A = (0, e.asRecord)(var_core_value_sigEAE2.range),
      var_core_value_sig3E68 = Array.isArray(var_core_value_sigEAE2.ranges) ? var_core_value_sigEAE2.ranges : undefined,
      var_core_value_sigF4C5 = var_core_value_sigB744.target,
      var_core_value_sig5410 = D(var_core_value_sigE68A),
      var_core_value_sig492F = var_core_value_sig3E68 == null ? undefined : var_core_value_sig3E68.map(D).filter(var_core_value_sigDBB7 => var_core_value_sigDBB7 !== undefined);
    return var_core_value_sigE68A === undefined && var_core_value_sig3E68 === undefined ? var_core_value_sigB744 : (var_core_value_sigF4C5 == null ? undefined : var_core_value_sigF4C5.kind) === "entity" ? {
      ...var_core_value_sigB744,
      target: {
        ...var_core_value_sigF4C5,
        kind: "sheet-range",
        ...(var_core_value_sig5410 === undefined ? {} : {
          range: var_core_value_sig5410
        }),
        ...(var_core_value_sig492F === undefined ? {} : {
          ranges: var_core_value_sig492F
        })
      }
    } : var_core_value_sigB744;
  };
  return {
    ...var_core_value_sigB7D1,
    locations: {
      left: var_core_value_sig64F0("left"),
      right: var_core_value_sig64F0("right")
    }
  };
}
function D(var_core_value_sig85B1) {
  let var_core_value_sig3141 = (0, e.asRecord)(var_core_value_sig85B1);
  if (!(var_core_value_sig3141 === undefined || !Number.isSafeInteger(var_core_value_sig3141.startRow) || !Number.isSafeInteger(var_core_value_sig3141.endRow) || !Number.isSafeInteger(var_core_value_sig3141.startColumn) || !Number.isSafeInteger(var_core_value_sig3141.endColumn))) return {
    startRow: var_core_value_sig3141.startRow,
    endRow: var_core_value_sig3141.endRow,
    startColumn: var_core_value_sig3141.startColumn,
    endColumn: var_core_value_sig3141.endColumn
  };
}
function O(var_core_value_sig2162, var_core_value_sig2EAD) {
  var var_core_value_sig6774;
  let var_core_value_sig340D = k(var_core_value_sig2162, var_core_value_sig2EAD),
    var_core_value_sig82D4 = (0, e.asRecord)(var_core_value_sig340D);
  if (var_core_value_sig82D4 === undefined) return var_core_value_sig340D;
  let var_core_value_sigBDE4 = (var_core_value_sig6774 = (0, e.asRecord)(var_core_value_sig2162)) == null ? undefined : var_core_value_sig6774.id;
  if (var_core_value_sig2EAD === "SHEET_SPARKLINE_PLUGIN" && typeof var_core_value_sigBDE4 == "string" && (0, e.asRecord)(var_core_value_sig82D4[var_core_value_sigBDE4]) !== undefined) return var_core_value_sig82D4[var_core_value_sigBDE4];
  if (var_core_value_sig2EAD === "SHEET_TABLE_PLUGIN") return Object.fromEntries(Object.entries(var_core_value_sig82D4).map(([var_core_value_sig8EA0, var_core_value_sigA6F6]) => {
    let var_core_value_sigCDDA = (0, e.asRecord)(var_core_value_sigA6F6);
    return Array.isArray(var_core_value_sigCDDA == null ? undefined : var_core_value_sigCDDA.tables) ? [var_core_value_sig8EA0, var_core_value_sigCDDA.tables["map"](var_core_value_sigD0A8 => {
      let var_core_value_sigF4B9 = (0, e.asRecord)(var_core_value_sigD0A8);
      return var_core_value_sigF4B9 === undefined ? var_core_value_sigD0A8 : {
        ...var_core_value_sigF4B9,
        columns: Array.isArray(var_core_value_sigF4B9.columns) ? var_core_value_sigF4B9.columns["map"]((0, e.withoutComparisonKeys)("id")) : var_core_value_sigF4B9.columns
      };
    })] : [var_core_value_sig8EA0, var_core_value_sigA6F6];
  }));
  if (var_core_value_sig2EAD === "SHEET_PIVOT_TABLE_PLUGIN" && (0, e.asRecord)(var_core_value_sig82D4.pivotTableConfigs) !== undefined) {
    let var_core_value_sigE243 = (0, e.asRecord)(var_core_value_sig82D4.pivotTableConfigs),
      var_core_value_sig74A8 = (0, e.asRecord)(var_core_value_sig82D4.dataFieldManagerConfig) ?? {},
      var_core_value_sig21B2 = {};
    for (let [var_core_value_sig5CEE, var_core_value_sigE92A] of Object.entries(var_core_value_sigE243)) {
      var var_core_value_sig7DF1;
      let var_core_value_sigC9E0 = (0, e.asRecord)((var_core_value_sig7DF1 = (0, e.asRecord)(var_core_value_sig74A8[var_core_value_sig5CEE])) == null ? undefined : var_core_value_sig7DF1.collections) ?? {};
      for (let [var_core_value_sig2AD0, var_core_value_sig3EEE] of Object.entries((0, e.asRecord)(var_core_value_sigE92A) ?? {})) var_core_value_sig21B2[var_core_value_sig2AD0] = Object.fromEntries(Object.entries((0, e.asRecord)(var_core_value_sig3EEE) ?? {}).map(([var_core_value_sig7524, var_core_value_sig2AD8]) => [var_core_value_sig7524, {
        ...(0, e.asRecord)(var_core_value_sig2AD8),
        ...(var_core_value_sigC9E0[var_core_value_sig7524] === undefined ? {} : {
          collection: var_core_value_sigC9E0[var_core_value_sig7524]
        })
      }]));
    }
    return var_core_value_sig21B2;
  }
  return var_core_value_sig340D;
}
function k(var_core_value_sigDC86, var_core_value_sig0B0C) {
  var var_core_value_sigA39E;
  let var_core_value_sigBBEE = (Array.isArray((var_core_value_sigA39E = (0, e.asRecord)(var_core_value_sigDC86)) == null ? undefined : var_core_value_sigA39E.resources) ? (0, e.asRecord)(var_core_value_sigDC86).resources : []).map(e.asRecord).find(var_core_value_sigDE08 => (var_core_value_sigDE08 == null ? undefined : var_core_value_sigDE08.name) === var_core_value_sig0B0C);
  if (typeof (var_core_value_sigBBEE == null ? undefined : var_core_value_sigBBEE.data) != "string") return var_core_value_sigBBEE == null ? undefined : var_core_value_sigBBEE.data;
  try {
    return JSON.parse(var_core_value_sigBBEE.data);
  } catch {
    return var_core_value_sigBBEE.data;
  }
}
function A(var_core_value_sig011D, var_core_value_sig6167) {
  let var_core_value_sig65A1 = (0, e.asRecord)(var_core_value_sig011D);
  return var_core_value_sig65A1 !== undefined && (Object.prototype["hasOwnProperty"].call(var_core_value_sig65A1, var_core_value_sig6167) || Object.values(var_core_value_sig65A1).some(var_core_value_sigACCB => {
    let var_core_value_sig7F33 = (0, e.asRecord)(var_core_value_sigACCB);
    return (var_core_value_sig7F33 == null ? undefined : var_core_value_sig7F33.sheetId) === var_core_value_sig6167 || (var_core_value_sig7F33 == null ? undefined : var_core_value_sig7F33.subUnitId) === var_core_value_sig6167;
  }));
}
function j(var_core_value_sig7F19, var_core_value_sig7827, var_core_value_sig652C) {
  let var_core_value_sig7E32 = (0, e.asRecord)(var_core_value_sig7F19);
  return var_core_value_sig7E32 === undefined ? [] : Object.prototype["hasOwnProperty"].call(var_core_value_sig7E32, var_core_value_sig7827) ? var_core_value_sig652C === e.UnitComparisonEntityType["SHAPE"] ? ne(var_core_value_sig7E32[var_core_value_sig7827]) : M(var_core_value_sig7E32[var_core_value_sig7827]) : M(Object.fromEntries(Object.entries(var_core_value_sig7E32).filter(([, var_core_value_sig0C53]) => {
    let var_core_value_sigEA04 = (0, e.asRecord)(var_core_value_sig0C53);
    return (var_core_value_sigEA04 == null ? undefined : var_core_value_sigEA04.sheetId) === var_core_value_sig7827 || (var_core_value_sigEA04 == null ? undefined : var_core_value_sigEA04.subUnitId) === var_core_value_sig7827;
  })));
}
function ne(var_core_value_sig4C07) {
  let var_core_value_sig79AB = (0, e.asRecord)(var_core_value_sig4C07),
    var_core_value_sig8E74 = (0, e.asRecord)(var_core_value_sig79AB == null ? undefined : var_core_value_sig79AB.data);
  return var_core_value_sig8E74 === undefined ? M(var_core_value_sig4C07) : (0, e.recordComparisonEntries)(var_core_value_sig8E74, Array.isArray(var_core_value_sig79AB == null ? undefined : var_core_value_sig79AB.order) ? var_core_value_sig79AB.order["filter"](var_core_value_sig7A62 => typeof var_core_value_sig7A62 == "string") : undefined);
}
function M(var_core_value_sig104C) {
  return (Array.isArray(var_core_value_sig104C) ? var_core_value_sig104C.map((var_core_value_sig8109, var_core_value_sig7565) => [String(var_core_value_sig7565), var_core_value_sig8109]) : (0, e.recordComparisonEntries)(var_core_value_sig104C, undefined).map(var_core_value_sigD4FB => [var_core_value_sigD4FB.stableId, var_core_value_sigD4FB.value])).map(([var_core_value_sig3E71, var_core_value_sig01B3], var_core_value_sig7442) => {
    var var_core_value_sigDF87, var_core_value_sig9EE0, var_core_value_sigF0511;
    let var_core_value_sig0B45 = (0, e.asRecord)(var_core_value_sig01B3),
      var_core_value_sig36F8 = ["id", "ruleId", "cfId", "uid", "tableId", "chartId", "pivotTableId"].map(var_core_value_sig362B => var_core_value_sig0B45 == null ? undefined : var_core_value_sig0B45[var_core_value_sig362B]).find(var_core_value_sig5CA5 => typeof var_core_value_sig5CA5 == "string") ?? var_core_value_sig3E71,
      var_core_value_sig03E1 = [var_core_value_sig0B45 == null ? undefined : var_core_value_sig0B45.name, var_core_value_sig0B45 == null ? undefined : var_core_value_sig0B45.title, (var_core_value_sigDF87 = (0, e.asRecord)((var_core_value_sig9EE0 = (0, e.asRecord)((var_core_value_sigF0511 = (0, e.asRecord)(var_core_value_sig0B45 == null ? undefined : var_core_value_sig0B45.style)) == null ? undefined : var_core_value_sigF0511.titles)) == null ? undefined : var_core_value_sig9EE0.title)) == null ? undefined : var_core_value_sigDF87.content].find(var_core_value_sigE90F => typeof var_core_value_sigE90F == "string");
    return {
      stableId: var_core_value_sig36F8,
      position: var_core_value_sig7442,
      value: var_core_value_sig01B3,
      ...(var_core_value_sig03E1 === undefined ? {} : {
        displayName: var_core_value_sig03E1
      })
    };
  });
}
function re(var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5, var_core_value_sigACC6, var_core_value_sig1614, var_core_value_sig85C3) {
  let var_core_value_sigB996 = (0, e.asRecord)(var_core_value_sig90CB == null ? undefined : var_core_value_sig90CB[var_core_value_sig841D]),
    var_core_value_sig4BBA = (0, e.asRecord)(var_core_value_sigBDF5 == null ? undefined : var_core_value_sigBDF5[var_core_value_sig841D]),
    var_core_value_sig6201 = ie(var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sig841D, var_core_value_sigACC6, var_core_value_sig1614, var_core_value_sig85C3),
    var_core_value_sig5151 = var_core_value_sig6201.leftRows === undefined ? N(var_core_value_sigB996, var_core_value_sig4BBA, "row") : undefined,
    var_core_value_sigB542 = var_core_value_sig6201.leftColumns === undefined ? N(var_core_value_sigB996, var_core_value_sig4BBA, "column") : undefined,
    var_core_value_sigBB6C = {
      ...var_core_value_sig6201,
      ...(var_core_value_sig5151 === undefined ? {} : {
        leftRows: var_core_value_sig5151.left,
        rightRows: var_core_value_sig5151.right
      }),
      ...(var_core_value_sigB542 === undefined ? {} : {
        leftColumns: var_core_value_sigB542.left,
        rightColumns: var_core_value_sigB542.right
      })
    };
  return {
    snapshotAxisAmbiguous: (var_core_value_sig5151 == null ? undefined : var_core_value_sig5151.ambiguous) === true || (var_core_value_sigB542 == null ? undefined : var_core_value_sigB542.ambiguous) === true,
    items: [...(0, e.buildSemanticComparisonItems)({
      entityType: e.UnitComparisonEntityType["CELL"],
      parentStableId: var_core_value_sig841D,
      left: R(var_core_value_sigB996 == null ? undefined : var_core_value_sigB996.cellData, var_core_value_sigBB6C.leftRows, var_core_value_sigBB6C.leftColumns),
      right: R(var_core_value_sig4BBA == null ? undefined : var_core_value_sig4BBA.cellData, var_core_value_sigBB6C.rightRows, var_core_value_sigBB6C.rightColumns)
    }), ...z(var_core_value_sig841D, "row", var_core_value_sigB996 == null ? undefined : var_core_value_sigB996.rowData, var_core_value_sig4BBA == null ? undefined : var_core_value_sig4BBA.rowData, var_core_value_sigBB6C.leftRows, var_core_value_sigBB6C.rightRows), ...z(var_core_value_sig841D, "column", var_core_value_sigB996 == null ? undefined : var_core_value_sigB996.columnData, var_core_value_sig4BBA == null ? undefined : var_core_value_sig4BBA.columnData, var_core_value_sigBB6C.leftColumns, var_core_value_sigBB6C.rightColumns)],
    unsupportedMutationIds: var_core_value_sigBB6C.unsupportedMutationIds,
    rows: I(var_core_value_sigBB6C.leftRows, var_core_value_sigBB6C.rightRows, X(var_core_value_sigB996, "row"), X(var_core_value_sig4BBA, "row")),
    columns: I(var_core_value_sigBB6C.leftColumns, var_core_value_sigBB6C.rightColumns, X(var_core_value_sigB996, "column"), X(var_core_value_sig4BBA, "column"))
  };
}
function N(var_core_value_sigE2BF, var_core_value_sigB8C7, var_core_value_sigA56E) {
  if (var_core_value_sigE2BF === undefined || var_core_value_sigB8C7 === undefined) return;
  let var_core_value_sig1998 = P(var_core_value_sigE2BF, var_core_value_sigA56E),
    var_core_value_sigFF19 = P(var_core_value_sigB8C7, var_core_value_sigA56E);
  if (var_core_value_sig1998 === undefined || var_core_value_sigFF19 === undefined || var_core_value_sig1998 === var_core_value_sigFF19) return;
  let var_core_value_sig43B8 = var_core_value_sig1998 < var_core_value_sigFF19,
    var_core_value_sigD98F = Math.min(var_core_value_sig1998, var_core_value_sigFF19),
    var_core_value_sig66C0 = Math.abs(var_core_value_sig1998 - var_core_value_sigFF19),
    var_core_value_sig9D15 = F(var_core_value_sig43B8 ? var_core_value_sigE2BF : var_core_value_sigB8C7, var_core_value_sigA56E, var_core_value_sigD98F),
    var_core_value_sigB785 = F(var_core_value_sig43B8 ? var_core_value_sigB8C7 : var_core_value_sigE2BF, var_core_value_sigA56E, var_core_value_sigD98F + var_core_value_sig66C0),
    var_core_value_sig130F = [...new Set([...var_core_value_sig9D15.keys(), ...var_core_value_sigB785.keys(), ...[...var_core_value_sigB785.keys()].map(var_core_value_sigBB57 => var_core_value_sigBB57 - var_core_value_sig66C0)])].filter(var_core_value_sig7C4A => var_core_value_sig7C4A >= 0 && var_core_value_sig7C4A < var_core_value_sigD98F).sort((var_core_value_sigE799, var_core_value_sigB601) => var_core_value_sigE799 - var_core_value_sigB601),
    var_core_value_sigC0E3 = (var_core_value_sig8B71, var_core_value_sigAEFB) => Number((var_core_value_sig9D15.get(var_core_value_sig8B71) ?? "") !== (var_core_value_sigB785.get(var_core_value_sig8B71 + var_core_value_sigAEFB) ?? "")),
    var_core_value_sig52F7 = var_core_value_sig130F.reduce((var_core_value_sig826B, var_core_value_sigCF89) => var_core_value_sig826B + var_core_value_sigC0E3(var_core_value_sigCF89, var_core_value_sig66C0), 0),
    var_core_value_sig866F = var_core_value_sig52F7,
    var_core_value_sigDE3D = 0,
    var_core_value_sigF175 = (var_core_value_sig130F[0] ?? var_core_value_sigD98F) + 1;
  for (let var_core_value_sig00CB = 0; var_core_value_sig00CB < var_core_value_sig130F.length; var_core_value_sig00CB += 1) {
    let var_core_value_sigEFD4 = var_core_value_sig130F[var_core_value_sig00CB];
    var_core_value_sig52F7 += var_core_value_sigC0E3(var_core_value_sigEFD4, 0) - var_core_value_sigC0E3(var_core_value_sigEFD4, var_core_value_sig66C0);
    let var_core_value_sig861B = (var_core_value_sig130F[var_core_value_sig00CB + 1] ?? var_core_value_sigD98F) - var_core_value_sigEFD4;
    var_core_value_sig52F7 < var_core_value_sig866F ? (var_core_value_sig866F = var_core_value_sig52F7, var_core_value_sigDE3D = var_core_value_sigEFD4 + 1, var_core_value_sigF175 = var_core_value_sig861B) : var_core_value_sig52F7 === var_core_value_sig866F && (var_core_value_sigF175 += var_core_value_sig861B);
  }
  let var_core_value_sig6A18 = var_core_value_sigD98F > 0 ? [{
      prefix: var_core_value_sigA56E + ":snapshot",
      start: 0,
      count: var_core_value_sigD98F
    }] : [],
    var_core_value_sig4E3D = var_core_value_sig6A18.map(var_core_value_sig77EE => ({
      ...var_core_value_sig77EE
    }));
  return q(var_core_value_sig4E3D, var_core_value_sigDE3D, 0, [{
    prefix: var_core_value_sigA56E + ":snapshot-extra",
    start: 0,
    count: var_core_value_sig66C0
  }]), {
    left: var_core_value_sig43B8 ? var_core_value_sig6A18 : var_core_value_sig4E3D,
    right: var_core_value_sig43B8 ? var_core_value_sig4E3D : var_core_value_sig6A18,
    ambiguous: var_core_value_sigF175 !== 1 || var_core_value_sig866F !== 0
  };
}
function P(var_core_value_sig49B0, var_core_value_sig2547) {
  let var_core_value_sigBCA9 = var_core_value_sig49B0[var_core_value_sig2547 === "row" ? "rowCount" : "columnCount"];
  return typeof var_core_value_sigBCA9 == "number" && Number.isSafeInteger(var_core_value_sigBCA9) && var_core_value_sigBCA9 >= 0 ? var_core_value_sigBCA9 : undefined;
}
function F(var_core_value_sig4CDF, var_core_value_sig3F79, var_core_value_sig880E) {
  let var_core_value_sigC9ED = new Map();
  for (let [var_core_value_sig9F76, var_core_value_sigB008] of Object.entries((0, e.asRecord)(var_core_value_sig4CDF.cellData) ?? {})) for (let [var_core_value_sig5237, var_core_value_sigBB00] of Object.entries((0, e.asRecord)(var_core_value_sigB008) ?? {})) {
    let var_core_value_sig76BA = Number(var_core_value_sig3F79 === "row" ? var_core_value_sig9F76 : var_core_value_sig5237),
      var_core_value_sigFBFA = Number(var_core_value_sig3F79 === "row" ? var_core_value_sig5237 : var_core_value_sig9F76);
    if (!Number.isInteger(var_core_value_sig76BA) || var_core_value_sig76BA < 0 || var_core_value_sig76BA >= var_core_value_sig880E || !Number.isInteger(var_core_value_sigFBFA) || var_core_value_sigFBFA < 0) continue;
    let var_core_value_sigF602 = var_core_value_sigC9ED.get(var_core_value_sig76BA) ?? [];
    var_core_value_sigF602.push([var_core_value_sigFBFA, var_core_value_sigBB00]), var_core_value_sigC9ED.set(var_core_value_sig76BA, var_core_value_sigF602);
  }
  let var_core_value_sigB57B = (0, e.asRecord)(var_core_value_sig3F79 === "row" ? var_core_value_sig4CDF.rowData : var_core_value_sig4CDF.columnData) ?? {},
    var_core_value_sig780B = new Set([...var_core_value_sigC9ED.keys(), ...Object.keys(var_core_value_sigB57B).map(Number)]);
  return new Map([...var_core_value_sig780B].filter(var_core_value_sig8721 => Number.isInteger(var_core_value_sig8721) && var_core_value_sig8721 >= 0 && var_core_value_sig8721 < var_core_value_sig880E).map(var_core_value_sig08BA => [var_core_value_sig08BA, (0, e.stableJson)({
    cells: (var_core_value_sigC9ED.get(var_core_value_sig08BA) ?? []).sort((var_core_value_sig7E54, var_core_value_sig9A8D) => var_core_value_sig7E54[0] - var_core_value_sig9A8D[0]),
    dimension: var_core_value_sigB57B[var_core_value_sig08BA]
  })]));
}
function I(var_core_value_sig7D1B, var_core_value_sig7BE0, var_core_value_sig7D40, var_core_value_sig6C7E) {
  let var_core_value_sig68BE = var_core_value_sig7D1B ?? (var_core_value_sig7D40 > 0 ? [{
      prefix: "coordinate",
      start: 0,
      count: var_core_value_sig7D40
    }] : []),
    var_core_value_sig04C6 = var_core_value_sig7BE0 ?? (var_core_value_sig6C7E > 0 ? [{
      prefix: "coordinate",
      start: 0,
      count: var_core_value_sig6C7E
    }] : []),
    var_core_value_sigCA05 = new Map();
  for (let var_core_value_sigDBB5 of [...var_core_value_sig68BE, ...var_core_value_sig04C6]) {
    let var_core_value_sigC259 = var_core_value_sigCA05.get(var_core_value_sigDBB5.prefix) ?? new Set();
    var_core_value_sigC259.add(var_core_value_sigDBB5.start), var_core_value_sigC259.add(var_core_value_sigDBB5.start + var_core_value_sigDBB5.count), var_core_value_sigCA05.set(var_core_value_sigDBB5.prefix, var_core_value_sigC259);
  }
  let var_core_value_sig2F2B = new Map([...var_core_value_sigCA05].map(([var_core_value_sigCFAC, var_core_value_sig237B]) => [var_core_value_sigCFAC, [...var_core_value_sig237B].sort((var_core_value_sig9C9F, var_core_value_sigFDEA) => var_core_value_sig9C9F - var_core_value_sigFDEA)])),
    var_core_value_sig70AF = var_core_value_sigFEAB => {
      let var_core_value_sigE347 = 0;
      return var_core_value_sigFEAB.flatMap(var_core_value_sig86D0 => {
        let var_core_value_sig4CD2 = var_core_value_sig2F2B.get(var_core_value_sig86D0.prefix).filter(var_core_value_sig1BBD => var_core_value_sig1BBD >= var_core_value_sig86D0.start && var_core_value_sig1BBD <= var_core_value_sig86D0.start + var_core_value_sig86D0.count),
          var_core_value_sig48CA = var_core_value_sig4CD2.slice(0, -1).map((var_core_value_sigF704, var_core_value_sig2BCF) => ({
            id: var_core_value_sig86D0.prefix + ":" + var_core_value_sigF704,
            position: var_core_value_sigE347 + var_core_value_sigF704 - var_core_value_sig86D0.start,
            count: var_core_value_sig4CD2[var_core_value_sig2BCF + 1] - var_core_value_sigF704
          }));
        return var_core_value_sigE347 += var_core_value_sig86D0.count, var_core_value_sig48CA;
      });
    },
    var_core_value_sigD04E = var_core_value_sig70AF(var_core_value_sig68BE),
    var_core_value_sigB99B = var_core_value_sig70AF(var_core_value_sig04C6);
  return (0, e.alignComparisonIdentities)(var_core_value_sigD04E.map(var_core_value_sig3C5B => var_core_value_sig3C5B.id), var_core_value_sigB99B.map(var_core_value_sig200B => var_core_value_sig200B.id)).map(var_core_value_sig3863 => ({
    leftStart: var_core_value_sig3863.leftIndex === null ? null : var_core_value_sigD04E[var_core_value_sig3863.leftIndex].position,
    rightStart: var_core_value_sig3863.rightIndex === null ? null : var_core_value_sigB99B[var_core_value_sig3863.rightIndex].position,
    count: var_core_value_sig3863.leftIndex === null ? var_core_value_sigB99B[var_core_value_sig3863.rightIndex].count : var_core_value_sigD04E[var_core_value_sig3863.leftIndex].count
  }));
}
function ie(var_core_value_sig5A75, var_core_value_sig7BAF, var_core_value_sig8F69, var_core_value_sig6884, var_core_value_sig066E, var_core_value_sig9B0D) {
  if (!var_core_value_sig9B0D || var_core_value_sig5A75 === undefined || var_core_value_sig7BAF === undefined) return {
    unsupportedMutationIds: []
  };
  let var_core_value_sig3D2C = K(var_core_value_sig5A75, var_core_value_sig8F69, "row", var_core_value_sig6884),
    var_core_value_sigC56D = K(var_core_value_sig7BAF, var_core_value_sig8F69, "row", var_core_value_sig066E),
    var_core_value_sig3A17 = K(var_core_value_sig5A75, var_core_value_sig8F69, "column", var_core_value_sig6884),
    var_core_value_sig938F = K(var_core_value_sig7BAF, var_core_value_sig8F69, "column", var_core_value_sig066E),
    var_core_value_sigD948 = var_core_value_sig3D2C.identities !== undefined && var_core_value_sigC56D.identities !== undefined,
    var_core_value_sigBE5E = var_core_value_sig3A17.identities !== undefined && var_core_value_sig938F.identities !== undefined;
  return {
    ...(var_core_value_sigD948 ? {
      leftRows: var_core_value_sig3D2C.identities,
      rightRows: var_core_value_sigC56D.identities
    } : {}),
    ...(var_core_value_sigBE5E ? {
      leftColumns: var_core_value_sig3A17.identities,
      rightColumns: var_core_value_sig938F.identities
    } : {}),
    unsupportedMutationIds: [...var_core_value_sig3D2C.unsupportedMutationIds, ...var_core_value_sigC56D.unsupportedMutationIds, ...var_core_value_sig3A17.unsupportedMutationIds, ...var_core_value_sig938F.unsupportedMutationIds, ...(var_core_value_sigD948 ? [] : L(var_core_value_sig6884, var_core_value_sig066E, var_core_value_sig8F69, "row")), ...(var_core_value_sigBE5E ? [] : L(var_core_value_sig6884, var_core_value_sig066E, var_core_value_sig8F69, "column"))]
  };
}
function L(var_core_value_sig0281, var_core_value_sigED71, var_core_value_sig281C, var_core_value_sig3C92) {
  return [...var_core_value_sig0281, ...var_core_value_sigED71].filter(var_core_value_sigC97C => var_core_value_sigC97C.params["subUnitId"] === var_core_value_sig281C && Y(var_core_value_sigC97C.id, var_core_value_sig3C92)).map(var_core_value_sigC4B1 => var_core_value_sigC4B1.id);
}
function R(var_core_value_sigB16B, var_core_value_sig585D, var_core_value_sigE722) {
  let var_core_value_sig062A = (0, e.asRecord)(var_core_value_sigB16B) ?? {};
  return Object.keys(var_core_value_sig062A).map(Number).filter(Number.isInteger).sort((var_core_value_sig1BD9, var_core_value_sigE43E) => var_core_value_sig1BD9 - var_core_value_sigE43E).flatMap(var_core_value_sigA937 => {
    let var_core_value_sigCAD5 = (0, e.asRecord)(var_core_value_sig062A[String(var_core_value_sigA937)]) ?? {};
    return Object.keys(var_core_value_sigCAD5).map(Number).filter(Number.isInteger).sort((var_core_value_sig50AF, var_core_value_sigA942) => var_core_value_sig50AF - var_core_value_sigA942).map(var_core_value_sigA621 => {
      let var_core_value_sigBBFF = le(var_core_value_sigA937, var_core_value_sigA621);
      return {
        stableId: var_core_value_sig585D === undefined && var_core_value_sigE722 === undefined ? var_core_value_sigBBFF : (var_core_value_sig585D === undefined ? "row:coordinate:" + var_core_value_sigA937 : U(var_core_value_sig585D, var_core_value_sigA937)) + "|" + (var_core_value_sigE722 === undefined ? "column:coordinate:" + var_core_value_sigA621 : U(var_core_value_sigE722, var_core_value_sigA621)),
        ...(var_core_value_sig585D === undefined && var_core_value_sigE722 === undefined ? {} : {
          nativeStableId: var_core_value_sigBBFF
        }),
        position: var_core_value_sigA937 * 16384 + var_core_value_sigA621,
        value: ae(var_core_value_sigCAD5[String(var_core_value_sigA621)])
      };
    });
  });
}
function ae(var_core_value_sig050A) {
  let var_core_value_sig8B32 = (0, e.asRecord)(var_core_value_sig050A);
  if (var_core_value_sig8B32 === undefined) return var_core_value_sig050A;
  let {
    f: var_core_value_sig870F,
    s: var_core_value_sigB683,
    t: var_core_value_sig26EC,
    v: var_core_value_sigEEDB,
    ...var_core_value_sig36E7
  } = var_core_value_sig8B32;
  return {
    ...var_core_value_sig36E7,
    ...(var_core_value_sigEEDB === undefined ? {} : {
      value: var_core_value_sigEEDB
    }),
    ...(var_core_value_sig870F === undefined ? {} : {
      formula: var_core_value_sig870F
    }),
    ...(var_core_value_sig26EC === undefined ? {} : {
      valueType: var_core_value_sig26EC
    }),
    ...(var_core_value_sigB683 === undefined ? {} : {
      style: var_core_value_sigB683
    })
  };
}
function z(var_core_value_sig6A78, var_core_value_sigF7EF, var_core_value_sig27F9, var_core_value_sig393E, var_core_value_sigB609, var_core_value_sig390D) {
  let var_core_value_sigC928 = new Map();
  for (let [var_core_value_sigE503, var_core_value_sig48DD] of [[var_core_value_sigB609, var_core_value_sig27F9], [var_core_value_sig390D, var_core_value_sig393E]]) {
    for (let var_core_value_sig0D69 of var_core_value_sigE503 ?? []) {
      let var_core_value_sigBC46 = var_core_value_sigC928.get(var_core_value_sig0D69.prefix) ?? new Set();
      var_core_value_sigBC46.add(var_core_value_sig0D69.start), var_core_value_sigBC46.add(var_core_value_sig0D69.start + var_core_value_sig0D69.count), var_core_value_sigC928.set(var_core_value_sig0D69.prefix, var_core_value_sigBC46);
    }
    for (let var_core_value_sig480E of Object.keys((0, e.asRecord)(var_core_value_sig48DD) ?? {}).map(Number).filter(Number.isSafeInteger)) {
      let var_core_value_sig3D7D = H(var_core_value_sigE503, var_core_value_sig480E);
      var_core_value_sig3D7D !== undefined && (var_core_value_sigC928.get(var_core_value_sig3D7D.prefix).add(var_core_value_sig3D7D.start), var_core_value_sigC928.get(var_core_value_sig3D7D.prefix).add(var_core_value_sig3D7D.start + 1));
    }
  }
  let var_core_value_sig39B7 = new Map([...var_core_value_sigC928].map(([var_core_value_sig5E6A, var_core_value_sigB7FC]) => [var_core_value_sig5E6A, [...var_core_value_sigB7FC].sort((var_core_value_sig8889, var_core_value_sig32F8) => var_core_value_sig8889 - var_core_value_sig32F8)])),
    var_core_value_sig18E0 = V(var_core_value_sig27F9, var_core_value_sigF7EF, var_core_value_sigB609, var_core_value_sig39B7),
    var_core_value_sigE161 = V(var_core_value_sig393E, var_core_value_sigF7EF, var_core_value_sig390D, var_core_value_sig39B7),
    var_core_value_sigBDEE = new Map(var_core_value_sig18E0.map(var_core_value_sig9CD9 => [var_core_value_sig9CD9.stableId, var_core_value_sig9CD9])),
    var_core_value_sig1F40 = new Map(var_core_value_sigE161.map(var_core_value_sigFD0C => [var_core_value_sigFD0C.stableId, var_core_value_sigFD0C]));
  return (0, e.buildSemanticComparisonItems)({
    entityType: e.UnitComparisonEntityType["ROW_COLUMN"],
    parentStableId: var_core_value_sig6A78,
    left: var_core_value_sig18E0,
    right: var_core_value_sigE161
  }).map(var_core_value_sig849B => ({
    ...var_core_value_sig849B,
    locations: {
      left: B(var_core_value_sig849B.locations["left"], var_core_value_sigBDEE.get(var_core_value_sig849B.stableId), var_core_value_sigF7EF),
      right: B(var_core_value_sig849B.locations["right"], var_core_value_sig1F40.get(var_core_value_sig849B.stableId), var_core_value_sigF7EF)
    }
  }));
}
function B(var_core_value_sig3FC7, var_core_value_sig1E1B, var_core_value_sig3B10) {
  if (var_core_value_sig3FC7 === null || var_core_value_sig1E1B === undefined) return null;
  let var_core_value_sig89E6 = var_core_value_sig3FC7.target;
  return (var_core_value_sig89E6 == null ? undefined : var_core_value_sig89E6.kind) === "entity" ? {
    ...var_core_value_sig3FC7,
    target: {
      ...var_core_value_sig89E6,
      kind: "sheet-axis",
      axis: var_core_value_sig3B10,
      start: var_core_value_sig1E1B.position,
      end: var_core_value_sig1E1B.position + var_core_value_sig1E1B.count - 1
    }
  } : var_core_value_sig3FC7;
}
function V(var_core_value_sig4743, var_core_value_sigEB6A, var_core_value_sig3D46, var_core_value_sigCC93) {
  let var_core_value_sig5964 = (0, e.asRecord)(var_core_value_sig4743) ?? {};
  if (var_core_value_sig3D46 === undefined) return Object.keys(var_core_value_sig5964).map(Number).filter(Number.isSafeInteger).sort((var_core_value_sig5F1A, var_core_value_sigB455) => var_core_value_sig5F1A - var_core_value_sigB455).map(var_core_value_sig5241 => ({
    stableId: var_core_value_sigEB6A + ":" + var_core_value_sig5241,
    position: var_core_value_sig5241,
    count: 1,
    value: var_core_value_sig5964[String(var_core_value_sig5241)] ?? {}
  }));
  let var_core_value_sig808B = 0;
  return var_core_value_sig3D46.flatMap(var_core_value_sigC6E5 => {
    let var_core_value_sigCEFB = var_core_value_sigCC93.get(var_core_value_sigC6E5.prefix).filter(var_core_value_sig5B67 => var_core_value_sig5B67 >= var_core_value_sigC6E5.start && var_core_value_sig5B67 <= var_core_value_sigC6E5.start + var_core_value_sigC6E5.count),
      var_core_value_sig1537 = var_core_value_sigCEFB.slice(0, -1).map((var_core_value_sig1758, var_core_value_sig4805) => {
        let var_core_value_sigE67E = var_core_value_sigCEFB[var_core_value_sig4805 + 1] - var_core_value_sig1758,
          var_core_value_sig2902 = var_core_value_sig808B + var_core_value_sig1758 - var_core_value_sigC6E5.start;
        return {
          stableId: var_core_value_sigE67E === 1 ? var_core_value_sigC6E5.prefix + ":" + var_core_value_sig1758 : var_core_value_sigC6E5.prefix + ":" + var_core_value_sig1758 + "-" + (var_core_value_sig1758 + var_core_value_sigE67E - 1),
          nativeStableId: var_core_value_sigEB6A + ":" + var_core_value_sig2902,
          position: var_core_value_sig2902,
          count: var_core_value_sigE67E,
          value: var_core_value_sig5964[String(var_core_value_sig2902)] ?? {}
        };
      });
    return var_core_value_sig808B += var_core_value_sigC6E5.count, var_core_value_sig1537;
  });
}
function H(var_core_value_sig2A26, var_core_value_sig1179) {
  if (var_core_value_sig1179 < 0) return;
  let var_core_value_sigEA92 = var_core_value_sig1179;
  for (let var_core_value_sigE4C6 of var_core_value_sig2A26 ?? []) {
    if (var_core_value_sigEA92 < var_core_value_sigE4C6.count) return {
      prefix: var_core_value_sigE4C6.prefix,
      start: var_core_value_sigE4C6.start + var_core_value_sigEA92,
      count: 1
    };
    var_core_value_sigEA92 -= var_core_value_sigE4C6.count;
  }
}
function U(var_core_value_sig8FD9, var_core_value_sig1AE5) {
  let var_core_value_sig7100 = H(var_core_value_sig8FD9, var_core_value_sig1AE5);
  return var_core_value_sig7100 === undefined ? undefined : var_core_value_sig7100.prefix + ":" + var_core_value_sig7100.start;
}
function W(var_core_value_sigA19A, var_core_value_sigD3F5) {
  let var_core_value_sig3082 = 0,
    var_core_value_sigF5D1;
  return var_core_value_sigA19A.flatMap(var_core_value_sig4313 => {
    var var_core_value_sigFC87;
    let var_core_value_sig156F = (var_core_value_sigFC87 = (0, e.asRecord)(var_core_value_sig4313)) == null ? undefined : var_core_value_sigFC87.mutations;
    return (Array.isArray(var_core_value_sig156F) ? var_core_value_sig156F : []).flatMap(var_core_value_sig9989 => {
      let var_core_value_sig698E = (0, e.asRecord)(var_core_value_sig9989);
      if (typeof (var_core_value_sig698E == null ? undefined : var_core_value_sig698E.id) != "string") return [];
      var_core_value_sigF5D1 ??= Q((0, e.stableJson)({
        changesets: var_core_value_sigA19A,
        snapshot: var_core_value_sigD3F5
      }));
      let var_core_value_sig2809 = var_core_value_sig3082;
      return var_core_value_sig3082 += 1, [{
        branchIdentity: var_core_value_sigF5D1,
        id: var_core_value_sig698E.id,
        params: oe(var_core_value_sig698E.data),
        sequence: var_core_value_sig2809
      }];
    });
  });
}
function oe(var_core_value_sig8775) {
  if (typeof var_core_value_sig8775 != "string") return (0, e.asRecord)(var_core_value_sig8775) ?? {};
  try {
    return (0, e.asRecord)(JSON.parse(var_core_value_sig8775)) ?? {};
  } catch {
    return {};
  }
}
function G(var_core_value_sig481B) {
  return var_core_value_sig481B.map(var_core_value_sigDD51 => var_core_value_sigDD51.id).filter(var_core_value_sigF057 => b.test(var_core_value_sigF057) && !y.has(var_core_value_sigF057));
}
function K(var_core_value_sig13D7, var_core_value_sig90C0, var_core_value_sigF1B2, var_core_value_sigC2BB) {
  let var_core_value_sigD9DB = var_core_value_sigC2BB.filter(var_core_value_sig72F6 => var_core_value_sig72F6.params["subUnitId"] === var_core_value_sig90C0 && Y(var_core_value_sig72F6.id, var_core_value_sigF1B2)),
    var_core_value_sigA363 = X(var_core_value_sig13D7, var_core_value_sigF1B2),
    var_core_value_sigFBA5 = var_core_value_sigC2BB.filter(var_core_value_sig9FBA => var_core_value_sig9FBA.id !== "sheet.mutation.insert-sheet" && var_core_value_sig9FBA.id !== "sheet.mutation.remove-sheet" && (var_core_value_sig9FBA.params["subUnitId"] === undefined || var_core_value_sig9FBA.params["subUnitId"] === var_core_value_sig90C0) && b.test(var_core_value_sig9FBA.id) && (!y.has(var_core_value_sig9FBA.id) || typeof var_core_value_sig9FBA.params["subUnitId"] != "string"));
  if (var_core_value_sigFBA5.length > 0) return {
    unsupportedMutationIds: var_core_value_sigFBA5.map(var_core_value_sigFE01 => var_core_value_sigFE01.id)
  };
  let var_core_value_sigAC47 = var_core_value_sigA363 - var_core_value_sigD9DB.reduce((var_core_value_sigA2CE, var_core_value_sig1975) => {
    let var_core_value_sig6EA1 = Z(var_core_value_sig1975.params["range"], var_core_value_sigF1B2);
    if (var_core_value_sig6EA1 === undefined) return var_core_value_sigA2CE;
    let var_core_value_sig029F = var_core_value_sig6EA1.end - var_core_value_sig6EA1.start + 1;
    return var_core_value_sig1975.id["startsWith"]("sheet.mutation.insert-") ? var_core_value_sigA2CE + var_core_value_sig029F : var_core_value_sig1975.id["startsWith"]("sheet.mutation.remove-") ? var_core_value_sigA2CE - var_core_value_sig029F : var_core_value_sigA2CE;
  }, 0);
  if (!Number.isSafeInteger(var_core_value_sigAC47) || var_core_value_sigAC47 < 0 || !Number.isSafeInteger(var_core_value_sigA363)) return {
    unsupportedMutationIds: var_core_value_sigD9DB.map(var_core_value_sig3767 => var_core_value_sig3767.id)
  };
  let var_core_value_sigA06F = var_core_value_sigAC47 > 0 ? [{
      prefix: var_core_value_sigF1B2 + ":base",
      start: 0,
      count: var_core_value_sigAC47
    }] : [],
    var_core_value_sig770E = var_core_value_sigAC47;
  for (let var_core_value_sig670B of var_core_value_sigD9DB) {
    if (var_core_value_sig670B.id["startsWith"]("sheet.mutation.insert-")) {
      let var_core_value_sig26DB = Z(var_core_value_sig670B.params["range"], var_core_value_sigF1B2);
      if (var_core_value_sig26DB === undefined || var_core_value_sig26DB.start > var_core_value_sig770E) return {
        unsupportedMutationIds: [var_core_value_sig670B.id]
      };
      let var_core_value_sigF0F9 = var_core_value_sig26DB.end - var_core_value_sig26DB.start + 1;
      q(var_core_value_sigA06F, var_core_value_sig26DB.start, 0, [{
        prefix: var_core_value_sigF1B2 + ":insert:" + ce(var_core_value_sig670B),
        start: 0,
        count: var_core_value_sigF0F9
      }]), var_core_value_sig770E += var_core_value_sigF0F9;
      continue;
    }
    if (var_core_value_sig670B.id["startsWith"]("sheet.mutation.remove-")) {
      let var_core_value_sig1A0F = Z(var_core_value_sig670B.params["range"], var_core_value_sigF1B2);
      if (var_core_value_sig1A0F === undefined || var_core_value_sig1A0F.end >= var_core_value_sig770E) return {
        unsupportedMutationIds: [var_core_value_sig670B.id]
      };
      let var_core_value_sigFBA4 = var_core_value_sig1A0F.end - var_core_value_sig1A0F.start + 1;
      q(var_core_value_sigA06F, var_core_value_sig1A0F.start, var_core_value_sigFBA4, []), var_core_value_sig770E -= var_core_value_sigFBA4;
      continue;
    }
    if (!se(var_core_value_sigA06F, var_core_value_sig670B, var_core_value_sigF1B2, var_core_value_sig770E)) return {
      unsupportedMutationIds: [var_core_value_sig670B.id]
    };
  }
  return var_core_value_sig770E === var_core_value_sigA363 ? {
    identities: var_core_value_sigA06F,
    unsupportedMutationIds: []
  } : {
    unsupportedMutationIds: var_core_value_sigD9DB.map(var_core_value_sig6912 => var_core_value_sig6912.id)
  };
}
function se(var_core_value_sig4654, var_core_value_sigB26B, var_core_value_sig019B, var_core_value_sigC6BC) {
  let var_core_value_sig8EC2 = Z(var_core_value_sigB26B.params["sourceRange"], var_core_value_sig019B),
    var_core_value_sigA8C3 = Z(var_core_value_sigB26B.params["targetRange"], var_core_value_sig019B);
  if (var_core_value_sig8EC2 === undefined || var_core_value_sigA8C3 === undefined || var_core_value_sig8EC2.end >= var_core_value_sigC6BC || var_core_value_sigA8C3.start > var_core_value_sigC6BC || var_core_value_sigA8C3.start > var_core_value_sig8EC2.start && var_core_value_sigA8C3.start <= var_core_value_sig8EC2.end) return false;
  let var_core_value_sig5276 = var_core_value_sig8EC2.end - var_core_value_sig8EC2.start + 1,
    var_core_value_sig031B = q(var_core_value_sig4654, var_core_value_sig8EC2.start, var_core_value_sig5276, []);
  return q(var_core_value_sig4654, var_core_value_sigA8C3.start > var_core_value_sig8EC2.start ? var_core_value_sigA8C3.start - var_core_value_sig5276 : var_core_value_sigA8C3.start, 0, var_core_value_sig031B), true;
}
function q(var_core_value_sig9DC0, var_core_value_sig95F0, var_core_value_sig9CCB, var_core_value_sigE718) {
  let var_core_value_sigAEC8 = J(var_core_value_sig9DC0, var_core_value_sig95F0),
    var_core_value_sigB977 = J(var_core_value_sig9DC0, var_core_value_sig95F0 + var_core_value_sig9CCB);
  return var_core_value_sig9DC0.splice(var_core_value_sigAEC8, var_core_value_sigB977 - var_core_value_sigAEC8, ...var_core_value_sigE718);
}
function J(var_core_value_sig2949, var_core_value_sig308A) {
  let var_core_value_sig528D = var_core_value_sig308A;
  for (let var_core_value_sigE235 = 0; var_core_value_sigE235 < var_core_value_sig2949.length; var_core_value_sigE235 += 1) {
    let var_core_value_sig2DAB = var_core_value_sig2949[var_core_value_sigE235];
    if (var_core_value_sig528D === 0) return var_core_value_sigE235;
    if (var_core_value_sig528D < var_core_value_sig2DAB.count) return var_core_value_sig2949.splice(var_core_value_sigE235, 1, {
      ...var_core_value_sig2DAB,
      count: var_core_value_sig528D
    }, {
      ...var_core_value_sig2DAB,
      start: var_core_value_sig2DAB.start + var_core_value_sig528D,
      count: var_core_value_sig2DAB.count - var_core_value_sig528D
    }), var_core_value_sigE235 + 1;
    var_core_value_sig528D -= var_core_value_sig2DAB.count;
  }
  return var_core_value_sig2949.length;
}
function Y(var_core_value_sigA309, var_core_value_sig9E20) {
  return var_core_value_sig9E20 === "row" ? var_core_value_sigA309 === "sheet.mutation.insert-row" || var_core_value_sigA309 === "sheet.mutation.remove-rows" || var_core_value_sigA309 === "sheet.mutation.move-rows" : var_core_value_sigA309 === "sheet.mutation.insert-col" || var_core_value_sigA309 === "sheet.mutation.remove-col" || var_core_value_sigA309 === "sheet.mutation.move-columns" || var_core_value_sigA309 === "sheet.mutation.move-cols";
}
function X(var_core_value_sig26BB, var_core_value_sig19B4) {
  let var_core_value_sig218A = var_core_value_sig26BB == null ? undefined : var_core_value_sig26BB[var_core_value_sig19B4 === "row" ? "rowCount" : "columnCount"],
    var_core_value_sig14CB = (0, e.asRecord)(var_core_value_sig26BB == null ? undefined : var_core_value_sig26BB[var_core_value_sig19B4 === "row" ? "rowData" : "columnData"]),
    var_core_value_sigFDEE = (0, e.asRecord)(var_core_value_sig26BB == null ? undefined : var_core_value_sig26BB.cellData),
    var_core_value_sigA676 = var_core_value_sig19B4 === "row" ? Object.keys(var_core_value_sigFDEE ?? {}).map(Number) : Object.values(var_core_value_sigFDEE ?? {}).flatMap(var_core_value_sig7664 => Object.keys((0, e.asRecord)(var_core_value_sig7664) ?? {}).map(Number));
  return [...Object.keys(var_core_value_sig14CB ?? {}).map(Number), ...var_core_value_sigA676].filter(Number.isInteger).reduce((var_core_value_sig2281, var_core_value_sig5E86) => Math.max(var_core_value_sig2281, var_core_value_sig5E86 + 1), typeof var_core_value_sig218A == "number" ? var_core_value_sig218A : 0);
}
function Z(var_core_value_sigC27E, var_core_value_sigA70D) {
  let var_core_value_sigCE10 = (0, e.asRecord)(var_core_value_sigC27E),
    var_core_value_sigA386 = var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10[var_core_value_sigA70D === "row" ? "startRow" : "startColumn"],
    var_core_value_sigCD82 = var_core_value_sigCE10 == null ? undefined : var_core_value_sigCE10[var_core_value_sigA70D === "row" ? "endRow" : "endColumn"];
  return typeof var_core_value_sigA386 == "number" && typeof var_core_value_sigCD82 == "number" && Number.isSafeInteger(var_core_value_sigA386) && Number.isSafeInteger(var_core_value_sigCD82) && var_core_value_sigA386 >= 0 && var_core_value_sigCD82 >= var_core_value_sigA386 ? {
    start: var_core_value_sigA386,
    end: var_core_value_sigCD82
  } : undefined;
}
function ce(var_core_value_sig44DD) {
  return Q((0, e.stableJson)({
    id: var_core_value_sig44DD.id,
    branchIdentity: var_core_value_sig44DD.branchIdentity,
    sequence: var_core_value_sig44DD.sequence,
    subUnitId: var_core_value_sig44DD.params["subUnitId"],
    range: var_core_value_sig44DD.params["range"],
    sourceRange: var_core_value_sig44DD.params["sourceRange"],
    targetRange: var_core_value_sig44DD.params["targetRange"]
  }));
}
function Q(var_core_value_sig96FA) {
  let var_core_value_sigAB68 = 2166136261;
  for (let var_core_value_sig6998 = 0; var_core_value_sig6998 < var_core_value_sig96FA.length; var_core_value_sig6998 += 1) var_core_value_sigAB68 ^= var_core_value_sig96FA.charCodeAt(var_core_value_sig6998), var_core_value_sigAB68 = Math.imul(var_core_value_sigAB68, 16777619);
  return (var_core_value_sigAB68 >>> 0).toString(36);
}
function le(var_core_value_sig040A, var_core_value_sig2AE0) {
  let var_core_value_sigC349 = Math.max(0, var_core_value_sig2AE0),
    var_core_value_sig9D96 = "";
  do var_core_value_sig9D96 = String.fromCharCode(65 + var_core_value_sigC349 % 26) + var_core_value_sig9D96, var_core_value_sigC349 = Math.floor(var_core_value_sigC349 / 26) - 1; while (var_core_value_sigC349 >= 0);
  return "" + var_core_value_sig9D96 + (var_core_value_sig040A + 1);
}
let $ = class extends n.Plugin {
  constructor(var_core_value_sigF639 = a, var_core_value_sigEAE5, var_core_value_sigE94C) {
    super(), this._config = var_core_value_sigF639, this._injector = var_core_value_sigEAE5, this._configService = var_core_value_sigE94C;
    let {
      ...var_core_value_sig6D47
    } = (0, n.merge)({}, a, this._config);
    this._configService["setConfig"](i, var_core_value_sig6D47);
  }
  onStarting() {
    (0, n.registerDependencies)(this._injector, [[u], [x]]), this.disposeWithMe(this._injector["get"](e.UnitComparisonAdapterRegistryService).register(this._injector["get"](x))), this._injector["get"](u);
  }
};
h($, "pluginName", "UNIVER_SHEETS_HISTORY_PLUGIN"), h($, "packageName", o), h($, "version", s), h($, "type", n.UniverInstanceType["UNIVER_SHEET"]), $ = l([(0, n.DependentOn)(t.UniverLicensePlugin, e.UniverEditHistoryPlugin, r.UniverSheetsPlugin), c(1, (0, n.Inject)(n.Injector)), c(2, n.IConfigService)], $), exports.SHEETS_HISTORY_PLUGIN_CONFIG_KEY = i, exports.SheetsUnitComparisonAdapter = x, Object.defineProperty(exports, "UniverSheetsHistoryPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
