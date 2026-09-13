Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/core"),
  t = require("@univerjs/sheets"),
  n = require("@univerjs-pro/collaboration"),
  r = require("@univerjs-pro/collaboration-client"),
  i = require("@univerjs-pro/engine-formula"),
  a = require("@univerjs-pro/license"),
  o = require("@univerjs-pro/sheets-chart"),
  s = require("@univerjs-pro/sheets-chart-ui"),
  c = require("@univerjs-pro/sheets-pivot"),
  l = require("@univerjs-pro/sheets-shape"),
  u = require("@univerjs-pro/sheets-shape-ui"),
  d = require("@univerjs-pro/sheets-sparkline"),
  f = require("@univerjs-pro/sheets-sparkline-ui"),
  p = require("@univerjs/data-validation"),
  m = require("@univerjs/design"),
  h = require("@univerjs/docs"),
  g = require("@univerjs/docs-ui"),
  _ = require("@univerjs/drawing"),
  v = require("@univerjs/drawing-ui"),
  y = require("@univerjs/engine-render"),
  b = require("@univerjs/network"),
  x = require("@univerjs/rpc"),
  S = require("@univerjs/sheets-conditional-formatting"),
  C = require("@univerjs/sheets-conditional-formatting-ui"),
  w = require("@univerjs/sheets-data-validation"),
  T = require("@univerjs/sheets-data-validation-ui"),
  E = require("@univerjs/sheets-drawing"),
  D = require("@univerjs/sheets-drawing-ui"),
  O = require("@univerjs/sheets-filter"),
  k = require("@univerjs/sheets-filter-ui"),
  A = require("@univerjs/sheets-formula"),
  ee = require("@univerjs/sheets-formula-ui"),
  te = require("@univerjs/sheets-hyper-link"),
  ne = require("@univerjs/sheets-hyper-link-ui"),
  re = require("@univerjs/sheets-numfmt"),
  j = require("@univerjs/sheets-table"),
  M = require("@univerjs/sheets-ui"),
  N = require("@univerjs/ui"),
  P = require("rxjs"),
  F = require("@univerjs/icons"),
  I = require("react"),
  L = require("@univerjs/protocol"),
  R = require("react/jsx-runtime"),
  z = require("@univerjs-pro/collaboration-client-ui"),
  ie = require("@univerjs-pro/sheets-history");
const B = "sheets-history-ui.config",
  ae = "history-panel",
  V = {
    historyPanelComponentKey: ae
  };
function oe(var_core_value_sig6CBB) {
  return (var_core_value_sig6CBB == null ? undefined : var_core_value_sig6CBB.historyServerUrl) ?? "/universer-api/history";
}
var se = "@univerjs-pro/sheets-history-ui",
  ce = "1.0.0-insiders.20260907-70fc579";
function le(var_core_value_sig68DA) {
  "@babel/helpers - typeof";

  return le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig4161) {
    return typeof var_core_value_sig4161;
  } : function (var_core_value_sig7580) {
    return var_core_value_sig7580 && typeof Symbol == "function" && var_core_value_sig7580.constructor === Symbol && var_core_value_sig7580 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig7580;
  }, le(var_core_value_sig68DA);
}
function ue(var_core_value_sig64D8, var_core_value_sigD755) {
  if (le(var_core_value_sig64D8) != "object" || !var_core_value_sig64D8) return var_core_value_sig64D8;
  var var_core_value_sigF897 = var_core_value_sig64D8[Symbol.toPrimitive];
  if (var_core_value_sigF897 !== undefined) {
    var var_core_value_sigA578 = var_core_value_sigF897.call(var_core_value_sig64D8, var_core_value_sigD755 || "default");
    if (le(var_core_value_sigA578) != "object") return var_core_value_sigA578;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigD755 === "string" ? String : Number)(var_core_value_sig64D8);
}
function de(var_core_value_sig0260) {
  var var_core_value_sig034D = ue(var_core_value_sig0260, "string");
  return le(var_core_value_sig034D) == "symbol" ? var_core_value_sig034D : var_core_value_sig034D + "";
}
function H(var_core_value_sig89EC, var_core_value_sig9975, var_core_value_sigD6D9) {
  return (var_core_value_sig9975 = de(var_core_value_sig9975)) in var_core_value_sig89EC ? Object.defineProperty(var_core_value_sig89EC, var_core_value_sig9975, {
    value: var_core_value_sigD6D9,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig89EC[var_core_value_sig9975] = var_core_value_sigD6D9, var_core_value_sig89EC;
}
function U(var_core_value_sig2637, var_core_value_sigAF1D) {
  return function (var_core_value_sig1F18, var_core_value_sigD5A0) {
    var_core_value_sigAF1D(var_core_value_sig1F18, var_core_value_sigD5A0, var_core_value_sig2637);
  };
}
function W(var_core_value_sigC92D, var_core_value_sigEA3D, var_core_value_sig2841, var_core_value_sig9FE1) {
  var var_core_value_sig9DAA = arguments.length,
    var_core_value_sig1F8A = var_core_value_sig9DAA < 3 ? var_core_value_sigEA3D : var_core_value_sig9FE1 === null ? var_core_value_sig9FE1 = Object.getOwnPropertyDescriptor(var_core_value_sigEA3D, var_core_value_sig2841) : var_core_value_sig9FE1,
    var_core_value_sigEBB4;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig1F8A = Reflect.decorate(var_core_value_sigC92D, var_core_value_sigEA3D, var_core_value_sig2841, var_core_value_sig9FE1);else {
    for (var var_core_value_sig2B74 = var_core_value_sigC92D.length - 1; var_core_value_sig2B74 >= 0; var_core_value_sig2B74--) (var_core_value_sigEBB4 = var_core_value_sigC92D[var_core_value_sig2B74]) && (var_core_value_sig1F8A = (var_core_value_sig9DAA < 3 ? var_core_value_sigEBB4(var_core_value_sig1F8A) : var_core_value_sig9DAA > 3 ? var_core_value_sigEBB4(var_core_value_sigEA3D, var_core_value_sig2841, var_core_value_sig1F8A) : var_core_value_sigEBB4(var_core_value_sigEA3D, var_core_value_sig2841)) || var_core_value_sig1F8A);
  }
  return var_core_value_sig9DAA > 3 && var_core_value_sig1F8A && Object.defineProperty(var_core_value_sigEA3D, var_core_value_sig2841, var_core_value_sig1F8A), var_core_value_sig1F8A;
}
let G = class extends e.Disposable {
  constructor(var_core_value_sig81B2, var_core_value_sigA0A5, var_core_value_sig10AA, var_core_value_sigE6D0, var_core_value_sig8E91, var_core_value_sig00BE, var_core_value_sig7BB5, var_core_value_sig6AAD, var_core_value_sig1157) {
    super(), this._snapshotServerService = var_core_value_sig81B2, this._univerInstanceService = var_core_value_sigA0A5, this._commandService = var_core_value_sig10AA, this._permissionService = var_core_value_sigE6D0, this._drawingManagerService = var_core_value_sig8E91, this._configService = var_core_value_sig00BE, this._httpService = var_core_value_sig7BB5, this._compressMutationService = var_core_value_sig6AAD, this._sheetPermissionInitController = var_core_value_sig1157, H(this, "_workbookDataCache", undefined), this._workbookDataCache = new e["LRUMap"](60);
  }
  dispose() {
    this._workbookDataCache["clear"](), super.dispose();
  }
  async fetchCreatorList(var_core_value_sigA694) {
    try {
      let var_core_value_sig7827 = (await this._httpService["get"](this._getAPIPrefix() + "/" + var_core_value_sigA694 + "/creators")).body;
      if (var_core_value_sig7827 && var_core_value_sig7827.error && var_core_value_sig7827.error["code"] === L.ErrorCode["OK"]) return var_core_value_sig7827.creators ?? [];
    } catch (var_core_value_sig652C) {
      console.error(var_core_value_sig652C);
    }
    return [];
  }
  async getVersions(var_core_value_sig18E0, var_core_value_sig0428) {
    let {
        userIds: var_core_value_sigBE07,
        lastLabel: var_core_value_sig555F,
        origin: var_core_value_sig3D6F
      } = var_core_value_sig0428 ?? {},
      var_core_value_sig336C = new URL();
    SearchParams();
    var_core_value_sig336C.set("length", "20"), var_core_value_sig555F && var_core_value_sig336C.set("lastLabel", var_core_value_sig555F), var_core_value_sigBE07 == null || var_core_value_sigBE07.forEach(var_core_value_sig7E32 => {
      var_core_value_sig336C.append("userIds", var_core_value_sig7E32);
    }), var_core_value_sig3D6F && var_core_value_sig336C.set("origin", var_core_value_sig3D6F.toString());
    let var_core_value_sig6E68 = this._getAPIPrefix() + "/" + var_core_value_sig18E0 + "/list?" + var_core_value_sig336C.toString();
    try {
      let var_core_value_sig4C07 = (await this._httpService["get"](var_core_value_sig6E68)).body;
      if (var_core_value_sig4C07 && var_core_value_sig4C07.error && var_core_value_sig4C07.error["code"] === L.ErrorCode["OK"]) {
        let {
          hasMore: var_core_value_sigB098,
          lastLabel: var_core_value_sigCE71
        } = var_core_value_sig4C07;
        return {
          hasMore: var_core_value_sigB098,
          lastLabel: var_core_value_sigCE71,
          versions: pe(var_core_value_sig4C07),
          members: var_core_value_sig4C07.entities["users"]
        };
      }
    } catch (var_core_value_sig79AB) {
      console.error(var_core_value_sig79AB);
    }
    return null;
  }
  async getHistoryChangesets(var_core_value_sig8DFE, var_core_value_sig48EA) {
    let {
        unitId: var_core_value_sig5E16,
        startRevision: var_core_value_sig09F3,
        endRevision: var_core_value_sig4592
      } = var_core_value_sig48EA,
      var_core_value_sigC5C4 = this._getAPIPrefix() + "/" + var_core_value_sig5E16 + "/cs?startRevision=" + var_core_value_sig09F3 + "&endRevision=" + var_core_value_sig4592;
    return (await this._httpService["get"](var_core_value_sigC5C4)).body;
  }
  _getAPIPrefix() {
    return oe(this._configService["getConfig"](B));
  }
  _cacheKey(var_core_value_sig1617, var_core_value_sig4169) {
    return var_core_value_sig1617 + ":" + var_core_value_sig4169;
  }
  async loadSheet(var_core_value_sig6D19, var_core_value_sig279C, var_core_value_sigAC51 = {}) {
    let var_core_value_sig8986 = this._cacheKey(var_core_value_sig6D19, var_core_value_sig279C),
      var_core_value_sigCAF7 = this._workbookDataCache["get"](var_core_value_sig8986);
    if (var_core_value_sigCAF7) {
      let {
        workbookData: var_core_value_sig8E74,
        changesets: var_core_value_sig104C
      } = var_core_value_sigCAF7;
      return await this._applyWorkbookData(var_core_value_sig8E74, var_core_value_sig104C), true;
    }
    let {
      snapshot: var_core_value_sigED1C,
      changesets: var_core_value_sig726E,
      error: var_core_value_sig2CD3
    } = await this._snapshotServerService["getUnitOnRev"](var_core_value_sigAC51, {
      unitID: var_core_value_sig6D19,
      type: e.UniverInstanceType["UNIVER_SHEET"],
      revision: var_core_value_sig279C
    });
    if ((0, L.isError)(var_core_value_sig2CD3) || !var_core_value_sigED1C || !var_core_value_sigED1C.workbook) throw Error("[HistoryFetchService]: request snapshot error!");
    let var_core_value_sig038E = (var_core_value_sig726E == null ? undefined : var_core_value_sig726E.length) ?? 0;
    if (var_core_value_sig279C !== 0 && var_core_value_sigED1C.rev + var_core_value_sig038E !== var_core_value_sig279C) throw Error("[HistoryFetchService]: wrong rev from the server!");
    let {
        workbook: var_core_value_sigAA1E
      } = var_core_value_sigED1C,
      var_core_value_sigC9F5 = var_core_value_sigAA1E.blockMeta ? Object.values(var_core_value_sigAA1E.blockMeta).flatMap(var_core_value_sig841D => var_core_value_sig841D.blocks ?? []) : [],
      var_core_value_sig7EEA = await (0, n.transformSnapshotToWorkbookData)(var_core_value_sigED1C, (await Promise.all(var_core_value_sigC9F5.map(var_core_value_sig90CB => this._snapshotServerService["getDeserializedSheetBlock"](var_core_value_sigAC51, {
        unitID: var_core_value_sig6D19,
        type: e.UniverInstanceType["UNIVER_SHEET"],
        blockID: var_core_value_sig90CB
      }).then(var_core_value_sig21D8 => var_core_value_sig21D8.block)))).filter(Boolean), var_core_value_sigAC51);
    return this._workbookDataCache["set"](var_core_value_sig8986, {
      workbookData: var_core_value_sig7EEA,
      changesets: var_core_value_sig726E
    }), await this._applyWorkbookData(var_core_value_sig7EEA, var_core_value_sig726E), true;
  }
  async _applyWorkbookData(var_core_value_sig59CE, var_core_value_sig33C8) {
    let var_core_value_sig957F = this._univerInstanceService["getCurrentUnitOfType"](e.UniverInstanceType["UNIVER_SHEET"]);
    var_core_value_sig957F && (this._univerInstanceService["disposeUnit"](var_core_value_sig957F.getUnitId()), await Promise.resolve());
    let var_core_value_sig803B = JSON.parse(JSON.stringify(var_core_value_sig59CE));
    this._drawingManagerService["setDrawingEditable"](false);
    let var_core_value_sig5830 = this._createUnit(var_core_value_sig803B, var_core_value_sig33C8);
    fe(this._permissionService, this._drawingManagerService, var_core_value_sig5830), this._sheetPermissionInitController["refreshRangeProtectPermission"]();
  }
  _createUnit(var_core_value_sig4A7C, var_core_value_sigF975) {
    let var_core_value_sigCDAF = this._univerInstanceService["createUnit"](e.UniverInstanceType["UNIVER_SHEET"], var_core_value_sig4A7C);
    this._univerInstanceService["focusUnit"](var_core_value_sigCDAF.getUnitId());
    let var_core_value_sigA298 = this._compressMutationService["interceptor"].fetchThroughInterceptors(this._compressMutationService["interceptor"].getInterceptPoints().COMPRESS_MUTATION_APPLY);
    return var_core_value_sigF975 == null || var_core_value_sigF975.forEach(var_core_value_sigBDF5 => {
      let var_core_value_sigACC6 = var_core_value_sigBDF5.mutations["map"](var_core_value_sig2B65 => ({
        id: var_core_value_sig2B65.id,
        params: JSON.parse(var_core_value_sig2B65.data)
      }));
      (var_core_value_sigA298(var_core_value_sigACC6, null) || var_core_value_sigACC6).forEach(var_core_value_sigD7EA => {
        this._commandService["hasCommand"](var_core_value_sigD7EA.id) && this._commandService["syncExecuteCommand"](var_core_value_sigD7EA.id, var_core_value_sigD7EA.params, {
          fromChangeset: true
        });
      });
    }), var_core_value_sigCDAF;
  }
};
G = W([U(0, n.ISnapshotServerService), U(1, e.IUniverInstanceService), U(2, e.ICommandService), U(3, e.IPermissionService), U(4, _.IDrawingManagerService), U(5, e.IConfigService), U(6, (0, e.Inject)(b.HTTPService)), U(7, (0, e.Inject)(n.CompressMutationService)), U(8, (0, e.Inject)(t.SheetPermissionInitController))], G);
function fe(var_core_value_sig0483, var_core_value_sig4A48, var_core_value_sigD170) {
  let var_core_value_sig90E5 = var_core_value_sigD170.getUnitId();
  var_core_value_sig4A48.setDrawingEditable(false), var_core_value_sig0483.updatePermissionPoint(new t["WorkbookEditablePermission"](var_core_value_sig90E5).id, false), var_core_value_sigD170.getSheets().forEach(var_core_value_sig0B40 => {
    var_core_value_sig0483.updatePermissionPoint(new t.WorksheetEditPermission(var_core_value_sig90E5, var_core_value_sig0B40.getSheetId()).id, false);
  });
}
function pe(var_core_value_sig7000) {
  let var_core_value_sigD7C5 = [],
    {
      entities: var_core_value_sig3633,
      historyIds: var_core_value_sig1DF5
    } = var_core_value_sig7000,
    {
      datas: var_core_value_sig90A3,
      users: var_core_value_sig28BE
    } = var_core_value_sig3633;
  for (let var_core_value_sig330B of var_core_value_sig1DF5) {
    let var_core_value_sig1614 = var_core_value_sig90A3[var_core_value_sig330B];
    if (var_core_value_sig1614) {
      var var_core_value_sig0224, var_core_value_sig854B;
      let var_core_value_sigB33B = !!((var_core_value_sig0224 = var_core_value_sig28BE[var_core_value_sig1614.userId]) != null && var_core_value_sig0224.anonymous);
      var_core_value_sigD7C5.push({
        unitId: var_core_value_sig1614.unitId,
        user: var_core_value_sigB33B ? "" : (var_core_value_sig28BE == null || (var_core_value_sig854B = var_core_value_sig28BE[var_core_value_sig1614.userId]) == null ? undefined : var_core_value_sig854B.name) || "",
        users: var_core_value_sig1614.userIds["map"](var_core_value_sig186C => {
          var var_core_value_sigD955;
          return (var_core_value_sig28BE == null || (var_core_value_sigD955 = var_core_value_sig28BE[var_core_value_sig186C]) == null ? undefined : var_core_value_sigD955.name) || "";
        }).filter(var_core_value_sig48BD => var_core_value_sig48BD),
        isAnonymous: var_core_value_sigB33B,
        id: var_core_value_sig330B,
        time: var_core_value_sig1614.createTime ? Number(var_core_value_sig1614.createTime) : undefined,
        commands: var_core_value_sig1614.command,
        startRev: Number(var_core_value_sig1614.startRevision),
        endRev: Number(var_core_value_sig1614.endRevision),
        recoverTime: var_core_value_sig1614.recoverTime ? Number(var_core_value_sig1614.recoverTime) : undefined,
        additionalFields: var_core_value_sig1614.additionalFields,
        startRevCreateTime: var_core_value_sig1614.startRevCreateTime ? Number(var_core_value_sig1614.startRevCreateTime) : undefined,
        endRevCreateTime: var_core_value_sig1614.endRevCreateTime ? Number(var_core_value_sig1614.endRevCreateTime) : undefined
      });
    }
  }
  return var_core_value_sigD7C5;
}
function me(var_core_value_sig1FF6 = "sheets-history-ui.viewer.action.") {
  return {
    collaboration: [{
      id: n.CreateUnitMutation["id"],
      action: var_core_value_sig1FF6 + "createSheet"
    }, {
      id: n.RevertRevisionMutation["id"],
      action: var_core_value_sig1FF6 + "revertSheet"
    }],
    sheets: [{
      id: t.InsertSheetMutation["id"],
      action: var_core_value_sig1FF6 + "insertSheet"
    }, {
      id: t.RemoveSheetMutation["id"],
      action: var_core_value_sig1FF6 + "removeSheet"
    }, {
      id: t.SetWorksheetNameMutation["id"],
      action: var_core_value_sig1FF6 + "renameSheet"
    }, {
      id: t.SetWorksheetOrderMutation["id"],
      action: var_core_value_sig1FF6 + "reorderSheet"
    }, {
      id: t.SetWorksheetHideMutation["id"],
      action: var_core_value_sig1FF6 + "hideSheet"
    }, {
      id: t.CopyWorksheetEndMutation["id"],
      action: var_core_value_sig1FF6 + "copySheet"
    }, {
      id: t.SetTabColorMutation["id"],
      action: var_core_value_sig1FF6 + "setTabColor"
    }, {
      id: t.SetWorkbookNameMutation["id"],
      action: var_core_value_sig1FF6 + "renameWorkbook"
    }, {
      id: t.InsertRowMutation["id"],
      action: var_core_value_sig1FF6 + "insertRow"
    }, {
      id: t.InsertColMutation["id"],
      action: var_core_value_sig1FF6 + "insertCol"
    }, {
      id: t.RemoveRowMutation["id"],
      action: var_core_value_sig1FF6 + "removeRow"
    }, {
      id: t.RemoveColMutation["id"],
      action: var_core_value_sig1FF6 + "removeCol"
    }, {
      id: t.MoveRowsMutation["id"],
      action: var_core_value_sig1FF6 + "moveRows"
    }, {
      id: t.MoveColsMutation["id"],
      action: var_core_value_sig1FF6 + "moveCols"
    }, {
      id: t.SetRowVisibleMutation["id"],
      action: var_core_value_sig1FF6 + "showRow"
    }, {
      id: t.SetRowHiddenMutation["id"],
      action: var_core_value_sig1FF6 + "hideRow"
    }, {
      id: t.SetColVisibleMutation["id"],
      action: var_core_value_sig1FF6 + "showCol"
    }, {
      id: t.SetColHiddenMutation["id"],
      action: var_core_value_sig1FF6 + "hideCol"
    }, {
      id: t.SetWorksheetRowHeightMutation["id"],
      action: var_core_value_sig1FF6 + "setRowHeight"
    }, {
      id: t.SetWorksheetColWidthMutation["id"],
      action: var_core_value_sig1FF6 + "setColWidth"
    }, {
      id: t.SetWorksheetRowAutoHeightMutation["id"],
      action: var_core_value_sig1FF6 + "setRowAutoHeight"
    }, {
      id: t.SetWorksheetRowIsAutoHeightMutation["id"],
      action: var_core_value_sig1FF6 + "setRowIsAutoHeight"
    }, {
      id: t.SetRowDataMutation["id"],
      action: var_core_value_sig1FF6 + "setRowData"
    }, {
      id: t.SetColDataMutation["id"],
      action: var_core_value_sig1FF6 + "setColData"
    }, {
      id: t.SetWorksheetRowCountMutation["id"],
      action: var_core_value_sig1FF6 + "setRowCount"
    }, {
      id: t.SetWorksheetColumnCountMutation["id"],
      action: var_core_value_sig1FF6 + "setColCount"
    }, {
      id: t.SetRangeValuesMutation["id"],
      action: var_core_value_sig1FF6 + "setRangeValues"
    }, {
      id: t.MoveRangeMutation["id"],
      action: var_core_value_sig1FF6 + "moveRange"
    }, {
      id: t.ReorderRangeMutation["id"],
      action: var_core_value_sig1FF6 + "reorderRange"
    }, {
      id: t.AddWorksheetMergeMutation["id"],
      action: var_core_value_sig1FF6 + "mergeCells"
    }, {
      id: t.RemoveWorksheetMergeMutation["id"],
      action: var_core_value_sig1FF6 + "unmergeCells"
    }, {
      id: t.SetFrozenMutation["id"],
      action: var_core_value_sig1FF6 + "setFrozen"
    }, {
      id: t.ToggleGridlinesMutation["id"],
      action: var_core_value_sig1FF6 + "toggleGridlines"
    }, {
      id: t.SetGridlinesColorMutation["id"],
      action: var_core_value_sig1FF6 + "setGridlinesColor"
    }, {
      id: t.SetWorksheetRightToLeftMutation["id"],
      action: var_core_value_sig1FF6 + "setRightToLeft"
    }, {
      id: t.SetWorksheetDefaultStyleMutation["id"],
      action: var_core_value_sig1FF6 + "setDefaultStyle"
    }, {
      id: t.AddWorksheetProtectionMutation["id"],
      action: var_core_value_sig1FF6 + "addProtection"
    }, {
      id: t.SetWorksheetProtectionMutation["id"],
      action: var_core_value_sig1FF6 + "setProtection"
    }, {
      id: t.DeleteWorksheetProtectionMutation["id"],
      action: var_core_value_sig1FF6 + "deleteProtection"
    }, {
      id: t.AddRangeProtectionMutation["id"],
      action: var_core_value_sig1FF6 + "addRangeProtection"
    }, {
      id: t.SetRangeProtectionMutation["id"],
      action: var_core_value_sig1FF6 + "setRangeProtection"
    }, {
      id: t.DeleteRangeProtectionMutation["id"],
      action: var_core_value_sig1FF6 + "deleteRangeProtection"
    }, {
      id: t.SetWorksheetPermissionPointsMutation["id"],
      action: var_core_value_sig1FF6 + "setPermissionPoints"
    }, {
      id: t.SetNumfmtMutation["id"],
      action: var_core_value_sig1FF6 + "setNumfmt"
    }, {
      id: t.RemoveNumfmtMutation["id"],
      action: var_core_value_sig1FF6 + "removeNumfmt"
    }, {
      id: t.AddRangeThemeMutation["id"],
      action: var_core_value_sig1FF6 + "addRangeTheme"
    }, {
      id: t.SetRangeThemeMutation["id"],
      action: var_core_value_sig1FF6 + "setRangeTheme"
    }, {
      id: t.RemoveRangeThemeMutation["id"],
      action: var_core_value_sig1FF6 + "removeRangeTheme"
    }, {
      id: t.SetWorksheetRangeThemeStyleMutation["id"],
      action: var_core_value_sig1FF6 + "setWorksheetRangeTheme"
    }, {
      id: t.DeleteWorksheetRangeThemeStyleMutation["id"],
      action: var_core_value_sig1FF6 + "deleteWorksheetRangeTheme"
    }],
    sheetsConditionalFormatting: [{
      id: S.AddConditionalRuleMutation["id"],
      action: var_core_value_sig1FF6 + "setCF"
    }, {
      id: S.SetConditionalRuleMutation["id"],
      action: var_core_value_sig1FF6 + "setCF"
    }, {
      id: S.DeleteConditionalRuleMutation["id"],
      action: var_core_value_sig1FF6 + "deleteCF"
    }, {
      id: S.MoveConditionalRuleMutation["id"],
      action: var_core_value_sig1FF6 + "moveCF"
    }],
    sheetsFilter: [{
      id: O.SetSheetsFilterRangeMutation["id"],
      action: var_core_value_sig1FF6 + "setFilter"
    }, {
      id: O.SetSheetsFilterCriteriaMutation["id"],
      action: var_core_value_sig1FF6 + "setFilterCriteria"
    }, {
      id: O.RemoveSheetsFilterMutation["id"],
      action: var_core_value_sig1FF6 + "removeFilter"
    }, {
      id: O.ReCalcSheetsFilterMutation["id"],
      action: var_core_value_sig1FF6 + "recalcFilter"
    }],
    dataValidation: [{
      id: p.AddDataValidationMutation["id"],
      action: var_core_value_sig1FF6 + "setDV"
    }, {
      id: p.UpdateDataValidationMutation["id"],
      action: var_core_value_sig1FF6 + "setDV"
    }, {
      id: p.RemoveDataValidationMutation["id"],
      action: var_core_value_sig1FF6 + "removeDV"
    }],
    sheetsChart: [{
      id: o.InsertSheetsChartMutation["id"],
      action: var_core_value_sig1FF6 + "insertChart"
    }, {
      id: o.RemoveSheetsChartMutation["id"],
      action: var_core_value_sig1FF6 + "removeChart"
    }, {
      id: o.ChartUpdateConfigMutation["id"],
      action: var_core_value_sig1FF6 + "updateChartConfig"
    }, {
      id: o.ChartUpdateSourceConfigMutation["id"],
      action: var_core_value_sig1FF6 + "updateChartSource"
    }],
    sheetsSparkline: [{
      id: d.AddSheetSparklineMutation["id"],
      action: var_core_value_sig1FF6 + "addSparkline"
    }, {
      id: d.SetSheetSparklineMutation["id"],
      action: var_core_value_sig1FF6 + "setSparkline"
    }, {
      id: d.RemoveSheetSparklineMutation["id"],
      action: var_core_value_sig1FF6 + "removeSparkline"
    }],
    sheetsPivot: [{
      id: c.AddPivotTableMutation["id"],
      action: var_core_value_sig1FF6 + "addPivotTable"
    }, {
      id: c.RemovePivotTableMutation["id"],
      action: var_core_value_sig1FF6 + "removePivotTable"
    }, {
      id: c.SetPivotOptionMutation["id"],
      action: var_core_value_sig1FF6 + "setPivotOption"
    }, {
      id: c.SetPivotPositionMutation["id"],
      action: var_core_value_sig1FF6 + "setPivotPosition"
    }, {
      id: c.UpdatePivotTableSourceRangeMutation["id"],
      action: var_core_value_sig1FF6 + "updatePivotSource"
    }, {
      id: c.AddPivotFieldMutation["id"],
      action: var_core_value_sig1FF6 + "addPivotField"
    }, {
      id: c.RemovePivotFieldMutation["id"],
      action: var_core_value_sig1FF6 + "removePivotField"
    }, {
      id: c.RenamePivotFieldMutation["id"],
      action: var_core_value_sig1FF6 + "renamePivotField"
    }, {
      id: c.UpdateFieldPositionMutation["id"],
      action: var_core_value_sig1FF6 + "updateFieldPosition"
    }, {
      id: c.UpdateValuePositionMutation["id"],
      action: var_core_value_sig1FF6 + "updateValuePosition"
    }, {
      id: c.UpdatePivotFieldSourceInfoMutation["id"],
      action: var_core_value_sig1FF6 + "updatePivotFieldSource"
    }, {
      id: c.SetPivotFieldFormatMutation["id"],
      action: var_core_value_sig1FF6 + "setPivotFieldFormat"
    }, {
      id: c.SetPivotFilterMutation["id"],
      action: var_core_value_sig1FF6 + "setPivotFilter"
    }, {
      id: c.SetPivotValueFilterMutation["id"],
      action: var_core_value_sig1FF6 + "setPivotValueFilter"
    }, {
      id: c.SetPivotSortMutation["id"],
      action: var_core_value_sig1FF6 + "setPivotSort"
    }, {
      id: c.SetPivotCollapseMutation["id"],
      action: var_core_value_sig1FF6 + "setPivotCollapse"
    }, {
      id: c.SetPivotSubtotalTypeMutation["id"],
      action: var_core_value_sig1FF6 + "setPivotSubtotalType"
    }],
    sheetsShape: [{
      id: l.InsertSheetsShapeMutation["id"],
      action: var_core_value_sig1FF6 + "insertShape"
    }, {
      id: l.RemoveSheetsShapeMutation["id"],
      action: var_core_value_sig1FF6 + "removeShape"
    }, {
      id: l.UpdateSheetsShapeDataMutation["id"],
      action: var_core_value_sig1FF6 + "updateShapeData"
    }, {
      id: l.UpdateSheetsShapeTypeMutation["id"],
      action: var_core_value_sig1FF6 + "updateShapeType"
    }],
    sheetsTable: [{
      id: j.AddSheetTableMutation["id"],
      action: var_core_value_sig1FF6 + "addTable"
    }, {
      id: j.DeleteSheetTableMutation["id"],
      action: var_core_value_sig1FF6 + "removeTable"
    }, {
      id: j.SetSheetTableMutation["id"],
      action: var_core_value_sig1FF6 + "updateTable"
    }, {
      id: j.SetSheetTableFilterMutation["id"],
      action: var_core_value_sig1FF6 + "setTableFilter"
    }],
    sheetsDrawing: [{
      id: E.SetDrawingApplyMutation["id"],
      action: var_core_value_sig1FF6 + "updateDrawing"
    }]
  };
}
function he(var_core_value_sig4B27 = "sheets-history-ui.viewer.action.") {
  let var_core_value_sig3A41 = me(var_core_value_sig4B27);
  return Object.values(var_core_value_sig3A41).flat();
}
function ge(var_core_value_sig269A) {
  return e.LOCALE_META[var_core_value_sig269A.getCurrentLocale()].tag;
}
const K = (var_core_value_sigBF53, var_core_value_sigD9BB) => {
    if (!var_core_value_sigBF53) return {
      date: "",
      time: ""
    };
    let var_core_value_sigF549 = (0, e.dateKit)(var_core_value_sigBF53);
    return {
      date: ye(var_core_value_sigF549.format("YYYY-MM-DD"), var_core_value_sigD9BB),
      time: var_core_value_sigF549.formatIntl(ge(var_core_value_sigD9BB), {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      })
    };
  },
  _e = (var_core_value_sigC125, var_core_value_sigB63D) => {
    if (var_core_value_sigC125.commands["some"](var_core_value_sig3625 => var_core_value_sig3625 === n.RevertRevisionMutation["id"]) && var_core_value_sigC125.recoverTime) {
      let var_core_value_sig0B4E = K(var_core_value_sigC125.recoverTime, var_core_value_sigB63D),
        var_core_value_sig0E9F = var_core_value_sig0B4E.date + "\x20" + var_core_value_sig0B4E.time;
      return var_core_value_sigB63D.t("sheets-history-ui.viewer.action.revertSheetPrefix") + "\x20" + var_core_value_sig0E9F + "\x20" + var_core_value_sigB63D.t("sheets-history-ui.viewer.action.revertSheetSuffix");
    }
    let var_core_value_sig8255 = ve(var_core_value_sigC125),
      var_core_value_sigBFC7 = Array.from(new Set(var_core_value_sig8255)),
      var_core_value_sig933F;
    if (var_core_value_sigBFC7.length === 1) var_core_value_sig933F = var_core_value_sigB63D.t(var_core_value_sigBFC7[0]);else {
      let var_core_value_sigE5BA = var_core_value_sigBFC7.slice(0, 5).map(var_core_value_sig85C3 => var_core_value_sigB63D.t(var_core_value_sig85C3)).join(",\x20");
      var_core_value_sig933F = var_core_value_sigBFC7.length > 5 ? "" + var_core_value_sigE5BA + var_core_value_sigB63D.t("sheets-history-ui.viewer.action.etc") : var_core_value_sigE5BA;
    }
    return "" + var_core_value_sig933F;
  };
function ve(var_core_value_sig29DE) {
  if (var_core_value_sig29DE.commands["length"] === 0) return [""];
  let var_core_value_sig4AFB = "sheets-history-ui.viewer.action.",
    var_core_value_sigC7EA = var_core_value_sig4AFB + "editSheet",
    var_core_value_sigDAB9 = he(var_core_value_sig4AFB).filter(var_core_value_sig4A83 => var_core_value_sig29DE.commands["includes"](var_core_value_sig4A83.id));
  return var_core_value_sigDAB9 != null && var_core_value_sigDAB9.length ? var_core_value_sigDAB9.map(var_core_value_sig58AA => var_core_value_sig58AA.action) : [var_core_value_sigC7EA];
}
function ye(var_core_value_sig9CF7, var_core_value_sigCCE5) {
  let [var_core_value_sig5933, var_core_value_sig884B, var_core_value_sig4E30] = (0, e.dateKit)().format("YYYY-MM-DD").split("-"),
    [var_core_value_sig9730, var_core_value_sig8E4A, var_core_value_sig300B] = var_core_value_sig9CF7.split("-");
  if (var_core_value_sig5933 === var_core_value_sig9730 && var_core_value_sig884B === var_core_value_sig8E4A && var_core_value_sig4E30 === var_core_value_sig300B) return var_core_value_sigCCE5.t("sheets-history-ui.viewer.panel.today");
  let var_core_value_sig8457 = ge(var_core_value_sigCCE5);
  return var_core_value_sig5933 === var_core_value_sig9730 ? (0, e.dateKit)(var_core_value_sig9CF7).formatIntl(var_core_value_sig8457, {
    month: "numeric",
    day: "numeric"
  }) : (0, e.dateKit)(var_core_value_sig9CF7).formatIntl(var_core_value_sig8457, {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
}
function be(var_core_value_sigB30D) {
  return var_core_value_sigB30D ? var_core_value_sigB30D.reduce((var_core_value_sig84C4, var_core_value_sigB6F7) => {
    let var_core_value_sigB495 = (0, e.dateKit)(var_core_value_sigB6F7.time ?? Date.now()).format("YYYY-MM-DD"),
      var_core_value_sig70D0 = var_core_value_sigB6F7.startRevCreateTime ? (0, e.dateKit)(var_core_value_sigB6F7.startRevCreateTime).format("YYYY-MM-DD") : var_core_value_sigB495,
      var_core_value_sig2A8A = var_core_value_sigB6F7.endRevCreateTime ? (0, e.dateKit)(var_core_value_sigB6F7.endRevCreateTime).format("YYYY-MM-DD") : var_core_value_sigB495;
    return var_core_value_sig84C4.length > 0 && var_core_value_sig84C4[var_core_value_sig84C4.length - 1].startDateString === var_core_value_sig70D0 ? var_core_value_sig84C4[var_core_value_sig84C4.length - 1].versions["push"](var_core_value_sigB6F7) : var_core_value_sig84C4.push({
      dateString: var_core_value_sigB495,
      startDateString: var_core_value_sig70D0,
      endDateString: var_core_value_sig2A8A,
      versions: [var_core_value_sigB6F7]
    }), var_core_value_sig84C4;
  }, []) : [];
}
const xe = "VIRTUAL_VERSION_NOW";
let q = class extends e.Disposable {
  _setFetching(var_core_value_sig3782) {
    this._fetching$["next"](var_core_value_sig3782);
  }
  get fetching() {
    return this._fetching$["value"];
  }
  constructor(var_core_value_sigD22E, var_core_value_sig3455, var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395) {
    super(), this._messageService = var_core_value_sigD22E, this._confirmService = var_core_value_sig3455, this._logService = var_core_value_sig5CEF, this._localeService = var_core_value_sig43D5, this._historyFetchService = var_core_value_sig1395, H(this, "_versions$", new P["BehaviorSubject"]([])), H(this, "versions$", this._versions$["asObservable"]()), H(this, "_currentVersion$", new P["BehaviorSubject"]("")), H(this, "currentVersion$", this._currentVersion$["asObservable"]()), H(this, "_status$", new P["BehaviorSubject"]("entered")), H(this, "status$", this._status$["asObservable"]()), H(this, "_revertRevision$", new P["BehaviorSubject"](0)), H(this, "revertRevision$", this._revertRevision$["asObservable"]()), H(this, "_unitId$", new P.BehaviorSubject("")), H(this, "unitId$", this._unitId$["asObservable"]()), H(this, "_fetching$", new P.BehaviorSubject(false)), H(this, "fetching$", this._fetching$["asObservable"]()), H(this, "_creators$", new P["BehaviorSubject"]([])), H(this, "creators$", this._creators$["asObservable"]()), H(this, "_openPanel$", new P["BehaviorSubject"](false)), H(this, "openPanel$", this._openPanel$["asObservable"]()), H(this, "_detailVersionsMap", new Map()), H(this, "_loadingState$", new P["BehaviorSubject"]("init")), H(this, "loadingState$", this._loadingState$["asObservable"]()), H(this, "_lastLabel", null), H(this, "_hasMore", true), H(this, "_members", new Map()), H(this, "_canRevert", false), H(this, "_loadParams", null), H(this, "_unitCurrentVersionMap", new Map());
  }
  async triggerLoadVersions(var_core_value_sig9FA0, var_core_value_sig055E) {
    this._canRevert = var_core_value_sig055E, this._openPanel$["next"](true), await this.loadInitialVersions(var_core_value_sig9FA0);
  }
  triggerCustomVersions(var_core_value_sig7C77, var_core_value_sig9578, var_core_value_sigA2D3) {
    let {
        versions: var_core_value_sigC218,
        hasMore: var_core_value_sigADEC,
        lastLabel: var_core_value_sig3D8E,
        members: var_core_value_sig37E5
      } = var_core_value_sigA2D3,
      var_core_value_sigF079 = var_core_value_sigC218.length > 0 ? var_core_value_sigC218 : [{
        unitId: var_core_value_sig7C77,
        id: xe,
        startRev: 1,
        endRev: 0,
        time: Date.now(),
        user: this._localeService["t"]("sheets-history-ui.viewer.panel.currentUser"),
        users: [this._localeService["t"]("sheets-history-ui.viewer.panel.currentUser")],
        commands: [],
        isAnonymous: false
      }];
    this._canRevert = var_core_value_sig9578, this._unitId$["next"](var_core_value_sig7C77), this._updateVersions(var_core_value_sigF079, var_core_value_sigADEC, var_core_value_sig3D8E, false, var_core_value_sig37E5), this._currentVersion$["next"](var_core_value_sigF079[0].id);
  }
  async loadInitialVersions(var_core_value_sigFCA0, var_core_value_sigC84D) {
    this._unitId$["next"](var_core_value_sigFCA0), this._loadParams = var_core_value_sigC84D ?? null, this._setFetching(true);
    let var_core_value_sigF2BC = await this._historyFetchService["getVersions"](var_core_value_sigFCA0, var_core_value_sigC84D);
    if (this._setFetching(false), var_core_value_sigF2BC) {
      let {
        versions: var_core_value_sigB996,
        lastLabel: var_core_value_sig4BBA,
        hasMore: var_core_value_sig6201,
        members: var_core_value_sig5151
      } = var_core_value_sigF2BC;
      var_core_value_sigB996.length === 0 && var_core_value_sigB996.push({
        unitId: var_core_value_sigFCA0,
        id: xe,
        startRev: 1,
        endRev: 0,
        time: Date.now(),
        user: this._localeService["t"]("sheets-history-ui.viewer.panel.currentUser"),
        users: [this._localeService["t"]("sheets-history-ui.viewer.panel.currentUser")],
        commands: [],
        isAnonymous: false
      }), this._updateVersions(var_core_value_sigB996, var_core_value_sig6201, var_core_value_sig4BBA, false, var_core_value_sig5151), this._currentVersion$["next"](var_core_value_sigB996[0].id), this._unitCurrentVersionMap["set"](var_core_value_sigFCA0, var_core_value_sigB996[0].endRev);
    } else this._status$["next"]("error");
  }
  async loadMoreVersions() {
    if (!this._lastLabel || !this._hasMore || this.fetching) return false;
    this._setFetching(true);
    let var_core_value_sigD37B = await this._historyFetchService["getVersions"](this.unitId, {
      lastLabel: this._lastLabel,
      ...this._loadParams
    });
    if (this._setFetching(false), var_core_value_sigD37B) {
      let {
        versions: var_core_value_sigB542,
        lastLabel: var_core_value_sigBB6C,
        hasMore: var_core_value_sigE2BF,
        members: var_core_value_sigB8C7
      } = var_core_value_sigD37B;
      this._updateVersions(var_core_value_sigB542, var_core_value_sigE2BF, var_core_value_sigBB6C, true, var_core_value_sigB8C7);
    } else this._messageService["show"]({
      content: this._localeService["t"]("sheets-history-ui.viewer.panel.listFetchError"),
      type: m.MessageType["Error"],
      duration: 3000
    });
    return true;
  }
  async loadHistoryCreatorList() {
    let {
      unitId: var_core_value_sigFA28
    } = this;
    if (!var_core_value_sigFA28) return;
    let var_core_value_sig93BE = await this._historyFetchService["fetchCreatorList"](var_core_value_sigFA28);
    var_core_value_sig93BE && this._creators$["next"](var_core_value_sig93BE);
  }
  async triggerLoadSheet(var_core_value_sigABEC) {
    let {
      endRev: var_core_value_sig2712
    } = this.getVersion(var_core_value_sigABEC) || {};
    if (var_core_value_sig2712 || var_core_value_sig2712 === 0) {
      this._loadingState$["next"]("loading");
      try {
        await this._historyFetchService["loadSheet"](this.unitId, var_core_value_sig2712), this._loadingState$["next"]("loaded");
      } catch (var_core_value_sig24B9) {
        this._logService["error"]("[HistoryManagerService]:\x20Failed\x20to\x20load\x20history\x20revision.", var_core_value_sig24B9), this._loadingState$["next"]("error"), this._status$["next"]("error");
      }
    } else this._status$["next"]("error");
  }
  async triggerRevert(var_core_value_sig0B9E) {
    let var_core_value_sigC545 = var_core_value_sig0B9E ? this.getVersion(var_core_value_sig0B9E) : this.getCurrentVersion();
    if (!var_core_value_sigC545) return;
    let var_core_value_sig12A7 = var_core_value_sigC545.endRev,
      var_core_value_sig6F4E = K(var_core_value_sigC545.time, this._localeService);
    (await this._confirmService["confirm"]({
      id: "confirm-revert-revision",
      title: {
        title: this._localeService["t"]("sheets-history-ui.viewer.panel.revertConfirm")
      },
      children: {
        title: this._localeService["t"]("sheets-history-ui.viewer.panel.revertConfirmText", var_core_value_sig6F4E.date, var_core_value_sig6F4E.time)
      },
      cancelText: this._localeService["t"]("sheets-history-ui.viewer.panel.cancel"),
      confirmText: this._localeService["t"]("sheets-history-ui.viewer.panel.confirm")
    })) && this._revertRevision$["next"](var_core_value_sig12A7);
  }
  _updateVersions(var_core_value_sigA021, var_core_value_sig49D9, var_core_value_sig320C, var_core_value_sigE7F0, var_core_value_sigE837) {
    this._setVersions(var_core_value_sigE7F0 ? this._versions$["value"].concat(var_core_value_sigA021) : var_core_value_sigA021), this._hasMore = var_core_value_sig49D9, this._lastLabel = var_core_value_sig320C, var_core_value_sigE837 && Object.keys(var_core_value_sigE837).forEach(var_core_value_sigA56E => this._members["set"](var_core_value_sigA56E, var_core_value_sigE837[var_core_value_sigA56E]));
  }
  getCurrentVersion() {
    return this.getVersion(this._currentVersion$["value"]);
  }
  _setVersions(var_core_value_sig34F4) {
    this._versions$["next"](var_core_value_sig34F4);
  }
  getVersion(var_core_value_sigA45D) {
    var var_core_value_sig1BC7;
    return ((var_core_value_sig1BC7 = this._versions$["value"]) == null ? undefined : var_core_value_sig1BC7.find(var_core_value_sig1998 => var_core_value_sig1998.id === var_core_value_sigA45D)) || this._detailVersionsMap["get"](var_core_value_sigA45D);
  }
  registerDetailVersion(var_core_value_sig4956) {
    this._detailVersionsMap["set"](var_core_value_sig4956.id, var_core_value_sig4956);
  }
  getCurrentUnitCurrentVersion() {
    if (this.unitId) return this._unitCurrentVersionMap["get"](this.unitId);
  }
  getSelectedVersionIsCurrentVersion() {
    var var_core_value_sigCC9E;
    return ((var_core_value_sigCC9E = this.getCurrentVersion()) == null ? undefined : var_core_value_sigCC9E.endRev) === this.getCurrentUnitCurrentVersion();
  }
  getSelectedVersionCanRevert() {
    return !this.getSelectedVersionIsCurrentVersion() && this.canRevert;
  }
  getMember(var_core_value_sig444C) {
    return this._members["get"](var_core_value_sig444C);
  }
  exitHistoryMode() {
    this._status$["next"]("exited");
  }
  set status(var_core_value_sigE42E) {
    this._status$["next"](var_core_value_sigE42E);
  }
  get status() {
    return this._status$["value"];
  }
  selectVersion(var_core_value_sigF039) {
    var_core_value_sigF039 !== this._currentVersion$["value"] && this._currentVersion$["next"](var_core_value_sigF039);
  }
  get currentVersion() {
    return this._currentVersion$["value"];
  }
  set unitId(var_core_value_sigA321) {
    this._unitId$["next"](var_core_value_sigA321);
  }
  get unitId() {
    return this._unitId$["value"];
  }
  get canRevert() {
    return this._canRevert;
  }
  get loadingState() {
    return this._loadingState$["value"];
  }
};
q = W([U(0, N.IMessageService), U(1, e.IConfirmService), U(2, e.ILogService), U(3, (0, e.Inject)(e.LocaleService)), U(4, (0, e.Inject)(G))], q);
let J = class extends e.Disposable {
  constructor(var_core_value_sigBF4C, var_core_value_sig3457, var_core_value_sig4A08, var_core_value_sig1BC4, var_core_value_sig9EAB, var_core_value_sigA5C3, var_core_value_sig3A1E, var_core_value_sigDC92, var_core_value_sig3515, var_core_value_sigC2A0, var_core_value_sig7C65, var_core_value_sig7F05, var_core_value_sig41F3) {
    super(), this._historyManagerService = var_core_value_sigBF4C, this._transformService = var_core_value_sig3457, this._snapshotServerService = var_core_value_sig4A08, this._rangeProtectionRuleModel = var_core_value_sig1BC4, this._conditionalFormattingRuleModel = var_core_value_sig9EAB, this._dataValidationModel = var_core_value_sigA5C3, this._sheetsFilterService = var_core_value_sig3A1E, this._sparklineDataSourceModel = var_core_value_sigDC92, this._sheetsPivotTableConfigModel = var_core_value_sig3515, this._sheetTableService = var_core_value_sigC2A0, this._localeService = var_core_value_sig7C65, this._sheetsChartService = var_core_value_sig7F05, this._historyFetchService = var_core_value_sig41F3, H(this, "_diffRangesMap", new Map()), H(this, "_currentVersionDiff$", new P.BehaviorSubject({
      ranges: new Map(),
      active: null,
      subUnitIds: []
    })), H(this, "currentVersionDiff$", this._currentVersionDiff$["asObservable"]()), this._init();
  }
  _init() {
    this._diffRangesMap = new Map(), this.disposeWithMe(this._historyManagerService["unitId$"].subscribe(var_core_value_sigFF19 => {
      var_core_value_sigFF19 && !this._diffRangesMap["has"](var_core_value_sigFF19) && this._diffRangesMap["set"](var_core_value_sigFF19, new Map());
    })), this.disposeWithMe(this._historyManagerService["currentVersion$"].subscribe(async var_core_value_sig43B8 => {
      if (var_core_value_sig43B8) {
        var var_core_value_sigD98F;
        await this.ensureVersion(var_core_value_sig43B8), this._currentVersionDiff$["next"](((var_core_value_sigD98F = this._diffRangesMap["get"](this._historyManagerService["unitId"])) == null ? undefined : var_core_value_sigD98F.get(var_core_value_sig43B8)) || {
          ranges: new Map(),
          active: null,
          subUnitIds: []
        });
      }
    }));
  }
  async ensureVersion(var_core_value_sigF455) {
    var var_core_value_sig6E78, var_core_value_sigB3EE;
    let var_core_value_sigC50A = this._historyManagerService["getVersion"](var_core_value_sigF455),
      var_core_value_sig11D0 = this._historyManagerService["unitId"];
    if (!var_core_value_sigC50A || !var_core_value_sig11D0) return;
    let var_core_value_sigB8ED = this._diffRangesMap["get"](var_core_value_sig11D0);
    if (var_core_value_sigB8ED || this._diffRangesMap["set"](var_core_value_sig11D0, new Map()), (var_core_value_sig6E78 = this._diffRangesMap["get"](var_core_value_sig11D0)) != null && var_core_value_sig6E78.has(var_core_value_sigC50A.id)) return;
    let {
      startRev: var_core_value_sig8EAE,
      endRev: var_core_value_sig1CDD
    } = var_core_value_sigC50A;
    if (var_core_value_sig8EAE === 1) {
      var_core_value_sigB8ED.set(var_core_value_sigC50A.id, {
        ranges: new Map(),
        active: null,
        subUnitIds: []
      });
      return;
    }
    let var_core_value_sig0DB1 = var_core_value_sig8EAE,
      var_core_value_sig68A2 = var_core_value_sig1CDD,
      var_core_value_sigCC17 = await this._historyFetchService["getHistoryChangesets"]({}, {
        unitId: var_core_value_sig11D0,
        startRevision: var_core_value_sig0DB1,
        endRevision: var_core_value_sig68A2
      });
    if (((var_core_value_sigB3EE = var_core_value_sigCC17.error) == null ? undefined : var_core_value_sigB3EE.code) === L.ErrorCode["OK"]) {
      let var_core_value_sig66C0 = var_core_value_sigCC17.changesets["map"](var_core_value_sigE627 => ((var_core_value_sigE627.mutations === null || var_core_value_sigE627.mutations === undefined) && (var_core_value_sigE627.mutations = []), (0, n.parseProtocolChangeset)(var_core_value_sigE627))).map(var_core_value_sigEF3E => var_core_value_sigEF3E.mutations["map"](var_core_value_sig429F => ({
          ...var_core_value_sig429F,
          params: {
            ...var_core_value_sig429F.params,
            memberId: var_core_value_sigEF3E.userID || "unknownUser"
          }
        }))).flat(),
        var_core_value_sig9D15 = await this._transformMutationByOrder(var_core_value_sig66C0),
        var_core_value_sigB785 = this._getActiveSubUnitId(var_core_value_sig66C0),
        var_core_value_sig130F = this._extractRanges(var_core_value_sig9D15);
      var_core_value_sigB8ED.set(var_core_value_sigC50A.id, {
        ...var_core_value_sig130F,
        active: var_core_value_sigB785
      });
    }
  }
  getMutationActionMap() {
    let var_core_value_sig32AE = me("sheets-history-ui.viewer.action."),
      var_core_value_sigC753 = new Map();
    return Object.values(var_core_value_sig32AE).flat().forEach(var_core_value_sigC0E3 => {
      var_core_value_sigC753.set(var_core_value_sigC0E3.id, var_core_value_sigC0E3.action);
    }), var_core_value_sigC753;
  }
  categorizeMutationRanges(var_core_value_sigFFD1, var_core_value_sig81AE) {
    return this._categorizeMutationRanges(var_core_value_sigFFD1, var_core_value_sig81AE);
  }
  async _transformMutationByOrder(var_core_value_sigF79F) {
    let var_core_value_sig0E54 = [];
    for (let var_core_value_sig52F7 = 0; var_core_value_sig52F7 < var_core_value_sigF79F.length; var_core_value_sig52F7++) {
      let var_core_value_sig273D = var_core_value_sigF79F[var_core_value_sig52F7];
      if (var_core_value_sig0E54.push(var_core_value_sig273D), var_core_value_sig52F7 !== var_core_value_sigF79F.length - 1) {
        let var_core_value_sigF62A = var_core_value_sigF79F[var_core_value_sig52F7 + 1],
          var_core_value_sig8178 = this._transformService["transformMutations"](var_core_value_sig0E54, [var_core_value_sigF62A]);
        var_core_value_sig0E54 = (0, n.isTransformMutationsSuccess)(var_core_value_sig8178) ? var_core_value_sig8178.m1Prime : [];
      }
      var_core_value_sig52F7 % 10 == 0 && var_core_value_sig52F7 > 0 && (await this._yieldToMain());
    }
    return var_core_value_sig0E54;
  }
  _yieldToMain() {
    return new Promise(var_core_value_sig866F => {
      typeof requestIdleCallback == "function" ? requestIdleCallback(() => var_core_value_sig866F(), {
        timeout: 100
      }) : setTimeout(var_core_value_sig866F, 0);
    });
  }
  _getActiveSubUnitId(var_core_value_sig3B17) {
    let var_core_value_sig6C4A = [];
    return var_core_value_sig3B17.forEach(var_core_value_sigDE3D => {
      if (var_core_value_sigDE3D.id === t.InsertSheetMutation["id"]) {
        let var_core_value_sig9A0D = var_core_value_sigDE3D.params;
        var_core_value_sig6C4A.push(var_core_value_sig9A0D.sheet["id"]);
      } else {
        if (var_core_value_sigDE3D.id === t.RemoveSheetMutation["id"]) {
          let var_core_value_sigE9ED = var_core_value_sigDE3D.params;
          var_core_value_sig6C4A.length > 0 && (var_core_value_sig6C4A = var_core_value_sig6C4A.filter(var_core_value_sig8061 => var_core_value_sig8061 !== var_core_value_sigE9ED.subUnitId));
        } else {
          if (var_core_value_sigDE3D.id === t.SetWorksheetHideMutation["id"]) {
            let var_core_value_sig4D4C = var_core_value_sigDE3D.params;
            var_core_value_sig4D4C.hidden ? var_core_value_sig6C4A = var_core_value_sig6C4A.filter(var_core_value_sig2AD0 => var_core_value_sig2AD0 !== var_core_value_sig4D4C.subUnitId) : var_core_value_sig6C4A.push(var_core_value_sig4D4C.subUnitId);
          } else {
            let var_core_value_sigC9E0 = var_core_value_sigDE3D.params;
            var_core_value_sigC9E0.subUnitId && var_core_value_sig6C4A.push(var_core_value_sigC9E0.subUnitId);
          }
        }
      }
    }), var_core_value_sig6C4A.length > 0 ? var_core_value_sig6C4A[var_core_value_sig6C4A.length - 1] : null;
  }
  _extractRanges(var_core_value_sig73D9) {
    let var_core_value_sigEAF8 = new Map(),
      var_core_value_sig0455 = new Map(),
      var_core_value_sig737C = new Map(),
      var_core_value_sig5AF5 = new Map(),
      var_core_value_sig9DE4 = new Map(),
      var_core_value_sig77FA = new Map(),
      var_core_value_sigA4A7 = new Map(),
      var_core_value_sigA4DF = new Map(),
      var_core_value_sigCC9D = new Map(),
      var_core_value_sig90F5 = new Map(),
      var_core_value_sigD2BA = new Map(),
      var_core_value_sigCD3A = new Map(),
      var_core_value_sig519D = new Set(),
      var_core_value_sigC7E7 = this.getMutationActionMap();
    return var_core_value_sig73D9.forEach(var_core_value_sigF175 => {
      var var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547, var_core_value_sigBCA9, var_core_value_sig4CDF, var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B, var_core_value_sig7D1B, var_core_value_sig7BE0;
      let var_core_value_sig7D40 = (var_core_value_sig6A18 = var_core_value_sigF175.params) == null ? undefined : var_core_value_sig6A18.memberId;
      if (!var_core_value_sig7D40) return;
      var_core_value_sigEAF8.has(var_core_value_sig7D40) || (var_core_value_sigEAF8.set(var_core_value_sig7D40, []), var_core_value_sig0455.set(var_core_value_sig7D40, []), var_core_value_sig737C.set(var_core_value_sig7D40, []), var_core_value_sig5AF5.set(var_core_value_sig7D40, []), var_core_value_sig9DE4.set(var_core_value_sig7D40, []), var_core_value_sig77FA.set(var_core_value_sig7D40, []), var_core_value_sigA4A7.set(var_core_value_sig7D40, []), var_core_value_sigA4DF.set(var_core_value_sig7D40, []), var_core_value_sigCC9D.set(var_core_value_sig7D40, []), var_core_value_sig90F5.set(var_core_value_sig7D40, []), var_core_value_sigD2BA.set(var_core_value_sig7D40, []), var_core_value_sigCD3A.set(var_core_value_sig7D40, []));
      let var_core_value_sig6C7E = this._categorizeMutationRanges(var_core_value_sigF175, var_core_value_sigC7E7);
      var_core_value_sig6C7E.subUnitIds["forEach"](var_core_value_sigA319 => var_core_value_sig519D.add(var_core_value_sigA319)), (var_core_value_sig4E3D = var_core_value_sigEAF8.get(var_core_value_sig7D40)) == null || var_core_value_sig4E3D.push(...var_core_value_sig6C7E.allRanges), (var_core_value_sig49B0 = var_core_value_sig0455.get(var_core_value_sig7D40)) == null || var_core_value_sig49B0.push(...var_core_value_sig6C7E.insertCellRanges), (var_core_value_sig2547 = var_core_value_sig737C.get(var_core_value_sig7D40)) == null || var_core_value_sig2547.push(...var_core_value_sig6C7E.deleteCellRanges), (var_core_value_sigBCA9 = var_core_value_sig5AF5.get(var_core_value_sig7D40)) == null || var_core_value_sigBCA9.push(...var_core_value_sig6C7E.updateCellRanges), (var_core_value_sig4CDF = var_core_value_sig9DE4.get(var_core_value_sig7D40)) == null || var_core_value_sig4CDF.push(...var_core_value_sig6C7E.insertBorderRanges), (var_core_value_sig3F79 = var_core_value_sig77FA.get(var_core_value_sig7D40)) == null || var_core_value_sig3F79.push(...var_core_value_sig6C7E.deleteBorderRanges), (var_core_value_sig880E = var_core_value_sigA4A7.get(var_core_value_sig7D40)) == null || var_core_value_sig880E.push(...var_core_value_sig6C7E.updateBorderRanges), (var_core_value_sigC9ED = var_core_value_sigA4DF.get(var_core_value_sig7D40)) == null || var_core_value_sigC9ED.push(...var_core_value_sig6C7E.arrowRowRanges), (var_core_value_sigB57B = var_core_value_sigCC9D.get(var_core_value_sig7D40)) == null || var_core_value_sigB57B.push(...var_core_value_sig6C7E.arrowColumnRanges), (var_core_value_sig780B = var_core_value_sigD2BA.get(var_core_value_sig7D40)) == null || var_core_value_sig780B.push(...var_core_value_sig6C7E.insertDrawings), (var_core_value_sig7D1B = var_core_value_sigCD3A.get(var_core_value_sig7D40)) == null || var_core_value_sig7D1B.push(...var_core_value_sig6C7E.deleteDrawings), (var_core_value_sig7BE0 = var_core_value_sig90F5.get(var_core_value_sig7D40)) == null || var_core_value_sig7BE0.push(...var_core_value_sig6C7E.updateDrawings);
    }), var_core_value_sigEAF8.forEach((var_core_value_sig68BE, var_core_value_sig04C6) => {
      var_core_value_sigEAF8.set(var_core_value_sig04C6, this._combineRanges(var_core_value_sig68BE)), var_core_value_sig0455.set(var_core_value_sig04C6, this._combineRanges(var_core_value_sig0455.get(var_core_value_sig04C6) || [])), var_core_value_sig737C.set(var_core_value_sig04C6, this._combineRanges(var_core_value_sig737C.get(var_core_value_sig04C6) || [])), var_core_value_sig5AF5.set(var_core_value_sig04C6, this._combineRanges(var_core_value_sig5AF5.get(var_core_value_sig04C6) || [])), var_core_value_sig9DE4.set(var_core_value_sig04C6, this._combineRanges(var_core_value_sig9DE4.get(var_core_value_sig04C6) || [])), var_core_value_sig77FA.set(var_core_value_sig04C6, this._combineRanges(var_core_value_sig77FA.get(var_core_value_sig04C6) || [])), var_core_value_sigA4A7.set(var_core_value_sig04C6, this._combineRanges(var_core_value_sigA4A7.get(var_core_value_sig04C6) || [])), var_core_value_sigA4DF.set(var_core_value_sig04C6, this._combineRanges(var_core_value_sigA4DF.get(var_core_value_sig04C6) || [])), var_core_value_sigCC9D.set(var_core_value_sig04C6, this._combineRanges(var_core_value_sigCC9D.get(var_core_value_sig04C6) || []));
    }), {
      ranges: var_core_value_sigEAF8,
      insertCellRanges: var_core_value_sig0455,
      deleteCellRanges: var_core_value_sig737C,
      updateCellRanges: var_core_value_sig5AF5,
      insertBorderRanges: var_core_value_sig9DE4,
      deleteBorderRanges: var_core_value_sig77FA,
      updateBorderRanges: var_core_value_sigA4A7,
      arrowRowRanges: var_core_value_sigA4DF,
      arrowColumnRanges: var_core_value_sigCC9D,
      insertDrawings: var_core_value_sigD2BA,
      deleteDrawings: var_core_value_sigCD3A,
      updateDrawings: var_core_value_sig90F5,
      subUnitIds: Array.from(var_core_value_sig519D)
    };
  }
  _categorizeMutationRanges(var_core_value_sig6E1C, var_core_value_sigFABC) {
    let var_core_value_sig413D = {
        allRanges: [],
        insertCellRanges: [],
        deleteCellRanges: [],
        updateCellRanges: [],
        insertBorderRanges: [],
        deleteBorderRanges: [],
        updateBorderRanges: [],
        arrowRowRanges: [],
        arrowColumnRanges: [],
        insertDrawings: [],
        deleteDrawings: [],
        updateDrawings: [],
        subUnitIds: []
      },
      var_core_value_sig5BCE = var_core_value_sig6E1C.id,
      var_core_value_sig8EF0 = var_core_value_sig6E1C.params,
      var_core_value_sig78AC = var_core_value_sigFABC.get(var_core_value_sig5BCE),
      var_core_value_sig4CEF = var_core_value_sig78AC ? this._localeService["t"](var_core_value_sig78AC) : "";
    var_core_value_sig8EF0.subUnitId && var_core_value_sig413D.subUnitIds["push"](var_core_value_sig8EF0.subUnitId);
    let var_core_value_sigD57D = (var_core_value_sigCA05, var_core_value_sig2F2B) => {
      let var_core_value_sig70AF = var_core_value_sigCA05.map(var_core_value_sig2D58 => ({
        ...var_core_value_sig2D58,
        showText: var_core_value_sig4CEF
      }));
      switch (var_core_value_sig413D.allRanges["push"](...var_core_value_sig70AF), var_core_value_sig2F2B) {
        case "insert":
          var_core_value_sig413D.insertCellRanges["push"](...var_core_value_sig70AF);
          break;
        case "delete":
          var_core_value_sig413D.deleteCellRanges["push"](...var_core_value_sig70AF);
          break;
        case "update":
          var_core_value_sig413D.updateCellRanges["push"](...var_core_value_sig70AF);
          break;
        case "insertBorder":
          var_core_value_sig413D.insertBorderRanges["push"](...var_core_value_sig70AF);
          break;
        case "deleteBorder":
          var_core_value_sig413D.deleteBorderRanges["push"](...var_core_value_sig70AF);
          break;
        case "updateBorder":
          var_core_value_sig413D.updateBorderRanges["push"](...var_core_value_sig70AF);
          break;
        case "arrowRow":
          var_core_value_sig413D.arrowRowRanges["push"](...var_core_value_sig70AF);
          break;
        case "arrowColumn":
          var_core_value_sig413D.arrowColumnRanges["push"](...var_core_value_sig70AF);
          break;
      }
    };
    switch (var_core_value_sig5BCE) {
      case t.InsertRowMutation["id"]:
        {
          let var_core_value_sig223F = var_core_value_sig8EF0;
          var_core_value_sigD57D([{
            range: {
              ...var_core_value_sig223F.range,
              rangeType: e.RANGE_TYPE["ROW"]
            },
            unitId: var_core_value_sig223F.unitId,
            subUnitId: var_core_value_sig223F.subUnitId,
            showText: "insertRow",
            highlightRow: true
          }], "insert");
          break;
        }
      case t.InsertColMutation["id"]:
        {
          let var_core_value_sigD749 = var_core_value_sig8EF0;
          var_core_value_sigD57D([{
            range: {
              ...var_core_value_sigD749.range,
              rangeType: e.RANGE_TYPE["COLUMN"]
            },
            unitId: var_core_value_sigD749.unitId,
            subUnitId: var_core_value_sigD749.subUnitId,
            showText: "insertCol",
            highlightColumn: true
          }], "insert");
          break;
        }
      case t.AddWorksheetMergeMutation["id"]:
        {
          let var_core_value_sigCFFA = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sigCFFA.ranges["map"](var_core_value_sigB577 => ({
            range: var_core_value_sigB577,
            unitId: var_core_value_sigCFFA.unitId,
            subUnitId: var_core_value_sigCFFA.subUnitId,
            showText: "mergeCells"
          })), "insert");
          break;
        }
      case t.SetNumfmtMutation["id"]:
        {
          let var_core_value_sig58C1 = var_core_value_sig8EF0;
          var_core_value_sigD57D(Object.values(var_core_value_sig58C1.values).map(var_core_value_sig9572 => var_core_value_sig9572.ranges["map"](var_core_value_sig76BA => ({
            range: var_core_value_sig76BA,
            unitId: var_core_value_sig58C1.unitId,
            subUnitId: var_core_value_sig58C1.subUnitId,
            showText: "setNumfmt"
          }))).flat(), "insert");
          break;
        }
      case t.RemoveWorksheetMergeMutation["id"]:
        {
          let var_core_value_sig5090 = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sig5090.ranges["map"](var_core_value_sigD873 => ({
            range: var_core_value_sigD873,
            unitId: var_core_value_sig5090.unitId,
            subUnitId: var_core_value_sig5090.subUnitId,
            showText: "unmergeCells"
          })), "delete");
          break;
        }
      case t.RemoveNumfmtMutation["id"]:
        {
          let var_core_value_sigC368 = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sigC368.ranges["map"](var_core_value_sigA12B => ({
            range: var_core_value_sigA12B,
            unitId: var_core_value_sigC368.unitId,
            subUnitId: var_core_value_sigC368.subUnitId,
            showText: "removeNumfmt"
          })), "delete");
          break;
        }
      case t.MoveRowsMutation["id"]:
        {
          let var_core_value_sigAD56 = var_core_value_sig8EF0;
          var_core_value_sigD57D([{
            range: {
              ...var_core_value_sigAD56.sourceRange,
              rangeType: e.RANGE_TYPE["ROW"]
            },
            unitId: var_core_value_sigAD56.unitId,
            subUnitId: var_core_value_sigAD56.subUnitId,
            showText: "moveRows"
          }], "delete"), var_core_value_sigD57D([{
            range: {
              ...var_core_value_sigAD56.targetRange,
              rangeType: e.RANGE_TYPE["ROW"]
            },
            unitId: var_core_value_sigAD56.unitId,
            subUnitId: var_core_value_sigAD56.subUnitId,
            showText: "moveRows"
          }], "insert");
          break;
        }
      case t.MoveColsMutation["id"]:
        {
          let var_core_value_sigDB4A = var_core_value_sig8EF0;
          var_core_value_sigD57D([{
            range: {
              ...var_core_value_sigDB4A.sourceRange,
              rangeType: e.RANGE_TYPE["COLUMN"]
            },
            unitId: var_core_value_sigDB4A.unitId,
            subUnitId: var_core_value_sigDB4A.subUnitId,
            showText: "moveCols"
          }], "delete"), var_core_value_sigD57D([{
            range: {
              ...var_core_value_sigDB4A.targetRange,
              rangeType: e.RANGE_TYPE["COLUMN"]
            },
            unitId: var_core_value_sigDB4A.unitId,
            subUnitId: var_core_value_sigDB4A.subUnitId,
            showText: "moveCols"
          }], "insert");
          break;
        }
      case t.SetRowVisibleMutation["id"]:
        {
          let var_core_value_sig6418 = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sig6418.ranges["map"](var_core_value_sigF230 => ({
            range: {
              ...var_core_value_sigF230,
              rangeType: e.RANGE_TYPE["ROW"]
            },
            unitId: var_core_value_sig6418.unitId,
            subUnitId: var_core_value_sig6418.subUnitId,
            showText: "showRow",
            highlightRow: true
          })), "update");
          break;
        }
      case t.SetRowDataMutation["id"]:
        {
          let var_core_value_sig1896 = var_core_value_sig8EF0;
          var_core_value_sig1896.rowData && var_core_value_sig1896.subUnitId && Object.keys(var_core_value_sig1896.rowData).map(Number).forEach(var_core_value_sig09B8 => {
            var_core_value_sigD57D([{
              range: {
                startRow: var_core_value_sig09B8,
                endRow: var_core_value_sig09B8,
                startColumn: NaN,
                endColumn: NaN,
                rangeType: e.RANGE_TYPE["ROW"]
              },
              unitId: var_core_value_sig1896.unitId,
              subUnitId: var_core_value_sig1896.subUnitId,
              showText: "setRowData",
              highlightRow: true
            }], "update");
          });
          break;
        }
      case t.SetColVisibleMutation["id"]:
        {
          let var_core_value_sig0285 = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sig0285.ranges["map"](var_core_value_sig6F91 => ({
            range: {
              ...var_core_value_sig6F91,
              rangeType: e.RANGE_TYPE["COLUMN"]
            },
            unitId: var_core_value_sig0285.unitId,
            subUnitId: var_core_value_sig0285.subUnitId,
            showText: "showCol",
            highlightColumn: true
          })), "update");
          break;
        }
      case t.SetColDataMutation["id"]:
        {
          let var_core_value_sig777D = var_core_value_sig8EF0;
          var_core_value_sig777D.columnData && var_core_value_sig777D.subUnitId && Object.keys(var_core_value_sig777D.columnData).map(Number).forEach(var_core_value_sigF9C7 => {
            var_core_value_sigD57D([{
              range: {
                startRow: NaN,
                endRow: NaN,
                startColumn: var_core_value_sigF9C7,
                endColumn: var_core_value_sigF9C7,
                rangeType: e.RANGE_TYPE["COLUMN"]
              },
              unitId: var_core_value_sig777D.unitId,
              subUnitId: var_core_value_sig777D.subUnitId,
              showText: "setColData",
              highlightColumn: true
            }], "update");
          });
          break;
        }
      case t.SetRangeValuesMutation["id"]:
        {
          let var_core_value_sig3F4C = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sig3F4C.cellValue ? Ce(var_core_value_sig3F4C.cellValue).map(var_core_value_sig8895 => ({
            range: var_core_value_sig8895,
            unitId: var_core_value_sig3F4C.unitId,
            subUnitId: var_core_value_sig3F4C.subUnitId,
            showText: "setRangeValues"
          })) : [], "update");
          break;
        }
      case t.MoveRangeMutation["id"]:
        {
          let var_core_value_sigD65A = var_core_value_sig6E1C.params;
          var_core_value_sigD57D([{
            range: Se(var_core_value_sigD65A.from["value"]),
            unitId: var_core_value_sigD65A.unitId,
            subUnitId: var_core_value_sigD65A.from["subUnitId"],
            showText: "moveRange"
          }], "delete"), var_core_value_sigD57D([{
            range: Se(var_core_value_sigD65A.to["value"]),
            unitId: var_core_value_sigD65A.unitId,
            subUnitId: var_core_value_sigD65A.to["subUnitId"],
            showText: "moveRange"
          }], "insert");
          break;
        }
      case t.ReorderRangeMutation["id"]:
        {
          let var_core_value_sig5A13 = var_core_value_sig8EF0;
          var_core_value_sigD57D([{
            range: var_core_value_sig5A13.range,
            unitId: var_core_value_sig5A13.unitId,
            subUnitId: var_core_value_sig5A13.subUnitId
          }], "update");
          break;
        }
      case t.SetWorksheetRowHeightMutation["id"]:
        {
          let var_core_value_sigF593 = var_core_value_sig8EF0;
          var_core_value_sigF593.ranges && var_core_value_sigF593.ranges["length"] > 0 && var_core_value_sigF593.subUnitId && var_core_value_sigD57D(var_core_value_sigF593.ranges["map"](var_core_value_sigC80B => ({
            range: var_core_value_sigC80B,
            unitId: var_core_value_sigF593.unitId,
            subUnitId: var_core_value_sigF593.subUnitId,
            showText: "setRowHeight"
          })), "arrowRow");
          break;
        }
      case t.SetWorksheetColWidthMutation["id"]:
        {
          let var_core_value_sig3607 = var_core_value_sig8EF0;
          var_core_value_sig3607.ranges && var_core_value_sig3607.ranges["length"] > 0 && var_core_value_sig3607.subUnitId && var_core_value_sigD57D(var_core_value_sig3607.ranges["map"](var_core_value_sig284F => ({
            range: var_core_value_sig284F,
            unitId: var_core_value_sig3607.unitId,
            subUnitId: var_core_value_sig3607.subUnitId,
            showText: "setColWidth"
          })), "arrowColumn");
          break;
        }
      case t.AddRangeProtectionMutation["id"]:
        {
          let var_core_value_sigB512 = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sigB512.rules["map"](var_core_value_sigE154 => var_core_value_sigE154.ranges["map"](var_core_value_sigFBFA => ({
            range: var_core_value_sigFBFA,
            unitId: var_core_value_sigB512.unitId,
            subUnitId: var_core_value_sigB512.subUnitId,
            showText: "addRangeProtection"
          }))).flat(), "insertBorder");
          break;
        }
      case S.AddConditionalRuleMutation["id"]:
        {
          let var_core_value_sigF2E6 = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sigF2E6.rule["ranges"].map(var_core_value_sig4632 => ({
            range: var_core_value_sig4632,
            unitId: var_core_value_sigF2E6.unitId,
            subUnitId: var_core_value_sigF2E6.subUnitId,
            showText: "setCF"
          })), "insertBorder");
          break;
        }
      case p.AddDataValidationMutation["id"]:
        {
          let var_core_value_sig34C8 = var_core_value_sig8EF0;
          var_core_value_sigD57D((Array.isArray(var_core_value_sig34C8.rule) ? var_core_value_sig34C8.rule : [var_core_value_sig34C8.rule]).map(var_core_value_sig12F2 => var_core_value_sig12F2.ranges["map"](var_core_value_sigF602 => ({
            range: var_core_value_sigF602,
            unitId: var_core_value_sig34C8.unitId,
            subUnitId: var_core_value_sig34C8.subUnitId,
            showText: "setDV"
          }))).flat(), "insertBorder");
          break;
        }
      case t.DeleteRangeProtectionMutation["id"]:
        {
          let var_core_value_sigB744 = var_core_value_sig8EF0,
            var_core_value_sigEAE2 = var_core_value_sigB744.unitId,
            var_core_value_sigE68A = var_core_value_sigB744.subUnitId;
          var_core_value_sigB744.ruleIds && var_core_value_sigB744.ruleIds["length"] > 0 && var_core_value_sigB744.subUnitId && var_core_value_sigB744.ruleIds["forEach"](var_core_value_sig2259 => {
            let var_core_value_sig9E2F = this._rangeProtectionRuleModel["getRule"](var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sig2259),
              var_core_value_sigD082 = (var_core_value_sig9E2F == null ? undefined : var_core_value_sig9E2F.ranges["map"](var_core_value_sig1BBD => ({
                range: var_core_value_sig1BBD,
                unitId: var_core_value_sigEAE2,
                subUnitId: var_core_value_sigE68A,
                showText: "deleteRangeProtection"
              }))) || [];
            var_core_value_sigD082.length > 0 && var_core_value_sigD57D(var_core_value_sigD082, "deleteBorder");
          });
          break;
        }
      case S.DeleteConditionalRuleMutation["id"]:
        {
          let var_core_value_sig3E68 = var_core_value_sig8EF0;
          if (var_core_value_sig3E68.cfId && var_core_value_sig3E68.subUnitId) {
            let var_core_value_sigDBB7 = this._conditionalFormattingRuleModel["getRule"](var_core_value_sig3E68.unitId, var_core_value_sig3E68.subUnitId, var_core_value_sig3E68.cfId);
            if (var_core_value_sigDBB7) {
              let var_core_value_sigF704 = var_core_value_sigDBB7.ranges["map"](var_core_value_sig3EEE => ({
                range: var_core_value_sig3EEE,
                unitId: var_core_value_sig3E68.unitId,
                subUnitId: var_core_value_sig3E68.subUnitId,
                showText: "deleteCF"
              }));
              var_core_value_sigF704.length > 0 && var_core_value_sigD57D(var_core_value_sigF704, "deleteBorder");
            }
          }
          break;
        }
      case p.RemoveDataValidationMutation["id"]:
        {
          let var_core_value_sigF4C5 = var_core_value_sig8EF0,
            var_core_value_sig5410 = Array.isArray(var_core_value_sigF4C5.ruleId) ? var_core_value_sigF4C5.ruleId : [var_core_value_sigF4C5.ruleId];
          var_core_value_sig5410.length > 0 && var_core_value_sigF4C5.subUnitId && var_core_value_sig5410.forEach(var_core_value_sigD0A8 => {
            let var_core_value_sigF4B9 = this._dataValidationModel["getRuleById"](var_core_value_sigF4C5.unitId, var_core_value_sigF4C5.subUnitId, var_core_value_sigD0A8),
              var_core_value_sig5CEE = (var_core_value_sigF4B9 == null ? undefined : var_core_value_sigF4B9.ranges["map"](var_core_value_sig2BCF => ({
                range: var_core_value_sig2BCF,
                unitId: var_core_value_sigF4C5.unitId,
                subUnitId: var_core_value_sigF4C5.subUnitId,
                showText: "removeDV"
              }))) || [];
            var_core_value_sig5CEE.length > 0 && var_core_value_sigD57D(var_core_value_sig5CEE, "deleteBorder");
          });
          break;
        }
      case t.SetRangeProtectionMutation["id"]:
        {
          let var_core_value_sig492F = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sig492F.rule["ranges"].map(var_core_value_sigE92A => ({
            range: var_core_value_sigE92A,
            unitId: var_core_value_sig492F.unitId,
            subUnitId: var_core_value_sig492F.subUnitId,
            showText: "setRangeProtection"
          })), "updateBorder");
          break;
        }
      case t.SetWorksheetRangeThemeStyleMutation["id"]:
        {
          let var_core_value_sig8EA0 = var_core_value_sig8EF0;
          var_core_value_sigD57D([{
            range: var_core_value_sig8EA0.range,
            unitId: var_core_value_sig8EA0.unitId,
            subUnitId: var_core_value_sig8EA0.subUnitId,
            showText: "setWorksheetRangeTheme"
          }], "updateBorder");
          break;
        }
      case t.DeleteWorksheetRangeThemeStyleMutation["id"]:
        {
          let var_core_value_sigA6F6 = var_core_value_sig8EF0;
          var_core_value_sigD57D([{
            range: var_core_value_sigA6F6.range,
            unitId: var_core_value_sigA6F6.unitId,
            subUnitId: var_core_value_sigA6F6.subUnitId,
            showText: "deleteWorksheetRangeTheme"
          }], "updateBorder");
          break;
        }
      case S.SetConditionalRuleMutation["id"]:
        {
          let var_core_value_sigCDDA = var_core_value_sig8EF0;
          var_core_value_sigD57D(var_core_value_sigCDDA.rule["ranges"].map(var_core_value_sig362B => ({
            range: var_core_value_sig362B,
            unitId: var_core_value_sigCDDA.unitId,
            subUnitId: var_core_value_sigCDDA.subUnitId,
            showText: "setCF"
          })), "updateBorder");
          break;
        }
      case S.MoveConditionalRuleMutation["id"]:
        {
          let var_core_value_sigE243 = var_core_value_sig8EF0,
            var_core_value_sig74A8 = this._conditionalFormattingRuleModel["getRule"](var_core_value_sigE243.unitId, var_core_value_sigE243.subUnitId, var_core_value_sigE243.start["id"]),
            var_core_value_sig21B2 = this._conditionalFormattingRuleModel["getRule"](var_core_value_sigE243.unitId, var_core_value_sigE243.subUnitId, var_core_value_sigE243.end["id"]);
          var_core_value_sig74A8 && var_core_value_sigD57D(var_core_value_sig74A8.ranges["map"](var_core_value_sig5CA5 => ({
            range: var_core_value_sig5CA5,
            unitId: var_core_value_sigE243.unitId,
            subUnitId: var_core_value_sigE243.subUnitId,
            showText: "moveCF"
          })), "deleteBorder"), var_core_value_sig21B2 && var_core_value_sigD57D(var_core_value_sig21B2.ranges["map"](var_core_value_sigE90F => ({
            range: var_core_value_sigE90F,
            unitId: var_core_value_sigE243.unitId,
            subUnitId: var_core_value_sigE243.subUnitId,
            showText: "moveCF"
          })), "insertBorder");
          break;
        }
      case O.SetSheetsFilterRangeMutation["id"]:
        {
          let var_core_value_sigDE08 = var_core_value_sig8EF0;
          var_core_value_sigD57D([{
            range: var_core_value_sigDE08.range,
            unitId: var_core_value_sigDE08.unitId,
            subUnitId: var_core_value_sigDE08.subUnitId,
            showText: "setFilter"
          }], "updateBorder");
          break;
        }
      case O.SetSheetsFilterCriteriaMutation["id"]:
        {
          let var_core_value_sigACCB = var_core_value_sig8EF0,
            var_core_value_sig7F33 = this._sheetsFilterService["getFilterModel"](var_core_value_sigACCB.unitId, var_core_value_sigACCB.subUnitId);
          if (var_core_value_sig7F33) {
            let var_core_value_sigEFD4 = var_core_value_sig7F33.getRange();
            var_core_value_sigD57D(var_core_value_sigEFD4 ? [{
              range: var_core_value_sigEFD4,
              unitId: var_core_value_sigACCB.unitId,
              subUnitId: var_core_value_sigACCB.subUnitId,
              showText: "setFilterCriteria"
            }] : [], "updateBorder");
          }
          break;
        }
      case O.RemoveSheetsFilterMutation["id"]:
        {
          let var_core_value_sig0C53 = var_core_value_sig8EF0,
            var_core_value_sigEA04 = this._sheetsFilterService["getFilterModel"](var_core_value_sig0C53.unitId, var_core_value_sig0C53.subUnitId);
          if (var_core_value_sigEA04) {
            let var_core_value_sig861B = var_core_value_sigEA04.getRange();
            var_core_value_sigD57D(var_core_value_sig861B ? [{
              range: var_core_value_sig861B,
              unitId: var_core_value_sig0C53.unitId,
              subUnitId: var_core_value_sig0C53.subUnitId,
              showText: "removeFilter"
            }] : [], "updateBorder");
          }
          break;
        }
      case O.ReCalcSheetsFilterMutation["id"]:
        {
          let var_core_value_sig7A62 = var_core_value_sig8EF0,
            var_core_value_sig8109 = this._sheetsFilterService["getFilterModel"](var_core_value_sig7A62.unitId, var_core_value_sig7A62.subUnitId);
          if (var_core_value_sig8109) {
            let var_core_value_sig5237 = var_core_value_sig8109.getRange();
            var_core_value_sigD57D(var_core_value_sig5237 ? [{
              range: var_core_value_sig5237,
              unitId: var_core_value_sig7A62.unitId,
              subUnitId: var_core_value_sig7A62.subUnitId,
              showText: "removeFilter"
            }] : [], "updateBorder");
          }
          break;
        }
      case p.UpdateDataValidationMutation["id"]:
        {
          let var_core_value_sig7565 = var_core_value_sig8EF0,
            var_core_value_sigD4FB = this._dataValidationModel["getRuleById"](var_core_value_sig7565.unitId, var_core_value_sig7565.subUnitId, var_core_value_sig7565.ruleId);
          var_core_value_sigD4FB && var_core_value_sigD57D(var_core_value_sigD4FB.ranges["map"](var_core_value_sigBB00 => ({
            range: var_core_value_sigBB00,
            unitId: var_core_value_sig7565.unitId,
            subUnitId: var_core_value_sig7565.subUnitId,
            showText: "setDV"
          })), "updateBorder");
          break;
        }
      case d.AddSheetSparklineMutation["id"]:
        {
          let var_core_value_sig3E71 = var_core_value_sig8EF0,
            var_core_value_sig01B3 = var_core_value_sig3E71.unitId,
            var_core_value_sig7442 = var_core_value_sig3E71.subUnitId,
            var_core_value_sigDF87 = var_core_value_sig3E71.sparklineConfigMap;
          var_core_value_sig3E71.sparklineConfigMap && var_core_value_sig7442 && Object.keys(var_core_value_sig3E71.sparklineConfigMap).forEach(var_core_value_sig7E54 => {
            let var_core_value_sig9A8D = var_core_value_sigDF87[var_core_value_sig7E54],
              var_core_value_sigC259 = Ce(var_core_value_sig9A8D.sparklines).map(var_core_value_sig0D69 => ({
                range: var_core_value_sig0D69,
                unitId: var_core_value_sig01B3,
                subUnitId: var_core_value_sig7442,
                showText: "addSparkline"
              }));
            var_core_value_sigD57D(var_core_value_sigC259, "insert");
          });
          break;
        }
      case d.SetSheetSparklineMutation["id"]:
        {
          let var_core_value_sig9EE0 = var_core_value_sig8EF0;
          var_core_value_sig9EE0.groupIds && var_core_value_sig9EE0.groupIds["length"] > 0 && var_core_value_sig9EE0.subUnitId && var_core_value_sig9EE0.groupIds["forEach"](var_core_value_sig9C9F => {
            let var_core_value_sigFDEA = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sig9EE0.unitId, var_core_value_sig9EE0.subUnitId, var_core_value_sig9C9F);
            if (var_core_value_sigFDEA) {
              let var_core_value_sig480E = Ce(var_core_value_sigFDEA.sparklines["getMatrix"]()).map(var_core_value_sigBC46 => ({
                range: var_core_value_sigBC46,
                unitId: var_core_value_sig9EE0.unitId,
                subUnitId: var_core_value_sig9EE0.subUnitId,
                showText: "setSparkline"
              }));
              var_core_value_sigD57D(var_core_value_sig480E, "update");
            }
          });
          break;
        }
      case d.RemoveSheetSparklineMutation["id"]:
        {
          let var_core_value_sigF051 = var_core_value_sig8EF0;
          var_core_value_sigF051.groupIds && var_core_value_sigF051.groupIds["length"] > 0 && var_core_value_sigF051.subUnitId && var_core_value_sigF051.groupIds["forEach"](var_core_value_sig86D0 => {
            let var_core_value_sig4CD2 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigF051.unitId, var_core_value_sigF051.subUnitId, var_core_value_sig86D0);
            if (var_core_value_sig4CD2) {
              let var_core_value_sig26DB = Ce(var_core_value_sig4CD2.sparklines["getMatrix"]()).map(var_core_value_sig3D7D => ({
                range: var_core_value_sig3D7D,
                unitId: var_core_value_sigF051.unitId,
                subUnitId: var_core_value_sigF051.subUnitId,
                showText: "removeSparkline"
              }));
              var_core_value_sigD57D(var_core_value_sig26DB, "delete");
            }
          });
          break;
        }
      case j.AddSheetTableMutation["id"]:
        {
          let var_core_value_sig0B45 = var_core_value_sig8EF0;
          var_core_value_sig0B45.tableId && var_core_value_sig0B45.subUnitId && var_core_value_sigD57D([{
            range: var_core_value_sig0B45.range,
            unitId: var_core_value_sig0B45.unitId,
            subUnitId: var_core_value_sig0B45.subUnitId,
            showText: "addTable"
          }], "insert");
          break;
        }
      case j.DeleteSheetTableMutation["id"]:
        {
          let var_core_value_sig36F8 = var_core_value_sig8EF0;
          if (var_core_value_sig36F8.tableId && var_core_value_sig36F8.subUnitId) {
            var var_core_value_sig2CC7;
            let var_core_value_sig48CA = (var_core_value_sig2CC7 = this._sheetTableService["getTableInfo"](var_core_value_sig36F8.unitId, var_core_value_sig36F8.tableId)) == null ? undefined : var_core_value_sig2CC7.range;
            var_core_value_sig48CA && var_core_value_sigD57D([{
              range: var_core_value_sig48CA,
              unitId: var_core_value_sig36F8.unitId,
              subUnitId: var_core_value_sig36F8.subUnitId,
              showText: "removeTable"
            }], "delete");
          }
          break;
        }
      case j.SetSheetTableFilterMutation["id"]:
        {
          let var_core_value_sig03E1 = var_core_value_sig6E1C.params;
          if (var_core_value_sig03E1.tableId) {
            let var_core_value_sig50AF = this._sheetTableService["getTableInfo"](var_core_value_sig03E1.unitId, var_core_value_sig03E1.tableId);
            var_core_value_sig50AF && var_core_value_sig50AF.range && var_core_value_sig50AF.subUnitId && (var_core_value_sig413D.subUnitIds["push"](var_core_value_sig50AF.subUnitId), var_core_value_sigD57D([{
              range: var_core_value_sig50AF.range,
              unitId: var_core_value_sig03E1.unitId,
              subUnitId: var_core_value_sig50AF.subUnitId,
              showText: "setTableFilter"
            }], "update"));
          }
          break;
        }
      case j.SetSheetTableMutation["id"]:
        {
          let var_core_value_sigBB57 = var_core_value_sig8EF0;
          if (var_core_value_sigBB57.tableId && var_core_value_sigBB57.subUnitId) {
            var var_core_value_sig4784;
            let var_core_value_sigA942 = (var_core_value_sig4784 = this._sheetTableService["getTableInfo"](var_core_value_sigBB57.unitId, var_core_value_sigBB57.tableId)) == null ? undefined : var_core_value_sig4784.range;
            var_core_value_sigA942 && var_core_value_sigD57D([{
              range: var_core_value_sigA942,
              unitId: var_core_value_sigBB57.unitId,
              subUnitId: var_core_value_sigBB57.subUnitId,
              showText: "updateTable"
            }], "update");
          }
          break;
        }
      case c.AddPivotTableMutation["id"]:
        {
          let var_core_value_sig7C4A = var_core_value_sig8EF0;
          if (var_core_value_sig7C4A.pivotTableId && var_core_value_sig7C4A.subUnitId) {
            var var_core_value_sigC39E;
            let var_core_value_sigA621 = (var_core_value_sigC39E = this._sheetsPivotTableConfigModel["getPivotTableRangeInfo"](var_core_value_sig7C4A.unitId, var_core_value_sig7C4A.subUnitId, var_core_value_sig7C4A.pivotTableId)) == null ? undefined : var_core_value_sigC39E.rangeInfo;
            var_core_value_sigA621 && var_core_value_sigD57D((0, c.unionPivotViewRange)(var_core_value_sigA621).map(var_core_value_sigF0F9 => ({
              range: var_core_value_sigF0F9,
              unitId: var_core_value_sig7C4A.unitId,
              subUnitId: var_core_value_sig7C4A.subUnitId,
              showText: "addPivotTable"
            })), "insert");
          }
          break;
        }
      case c.RemovePivotTableMutation["id"]:
        {
          let var_core_value_sigE799 = var_core_value_sig8EF0;
          if (var_core_value_sigE799.pivotTableId && var_core_value_sigE799.subUnitId) {
            var var_core_value_sig16C7;
            let var_core_value_sigBBFF = (var_core_value_sig16C7 = this._sheetsPivotTableConfigModel["getPivotTableRangeInfo"](var_core_value_sigE799.unitId, var_core_value_sigE799.subUnitId, var_core_value_sigE799.pivotTableId)) == null ? undefined : var_core_value_sig16C7.rangeInfo;
            var_core_value_sigBBFF && var_core_value_sigD57D((0, c.unionPivotViewRange)(var_core_value_sigBBFF).map(var_core_value_sig1A0F => ({
              range: var_core_value_sig1A0F,
              unitId: var_core_value_sigE799.unitId,
              subUnitId: var_core_value_sigE799.subUnitId,
              showText: "removePivotTable"
            })), "delete");
          }
          break;
        }
      case c.SetPivotOptionMutation["id"]:
      case c.SetPivotPositionMutation["id"]:
      case c.UpdatePivotTableSourceRangeMutation["id"]:
      case c.AddPivotFieldMutation["id"]:
      case c.RemovePivotFieldMutation["id"]:
      case c.RenamePivotFieldMutation["id"]:
      case c.UpdateFieldPositionMutation["id"]:
      case c.UpdateValuePositionMutation["id"]:
      case c.UpdatePivotFieldSourceInfoMutation["id"]:
      case c.SetPivotFilterMutation["id"]:
      case c.SetPivotValueFilterMutation["id"]:
      case c.SetPivotSortMutation["id"]:
      case c.SetPivotCollapseMutation["id"]:
      case c.SetPivotFieldFormatMutation["id"]:
      case c.SetPivotSubtotalTypeMutation["id"]:
        {
          let var_core_value_sigB601 = var_core_value_sig8EF0,
            var_core_value_sig8B71 = "setPivotOption";
          if (var_core_value_sig5BCE === c.SetPivotOptionMutation["id"] ? var_core_value_sig8B71 = "setPivotOption" : var_core_value_sig5BCE === c.SetPivotPositionMutation["id"] ? var_core_value_sig8B71 = "setPivotPosition" : var_core_value_sig5BCE === c.UpdatePivotTableSourceRangeMutation["id"] ? var_core_value_sig8B71 = "updatePivotSource" : var_core_value_sig5BCE === c.AddPivotFieldMutation["id"] ? var_core_value_sig8B71 = "addPivotField" : var_core_value_sig5BCE === c.RemovePivotFieldMutation["id"] ? var_core_value_sig8B71 = "removePivotField" : var_core_value_sig5BCE === c.RenamePivotFieldMutation["id"] ? var_core_value_sig8B71 = "renamePivotField" : var_core_value_sig5BCE === c.UpdateFieldPositionMutation["id"] ? var_core_value_sig8B71 = "updateFieldPosition" : var_core_value_sig5BCE === c.UpdateValuePositionMutation["id"] ? var_core_value_sig8B71 = "updateValuePosition" : var_core_value_sig5BCE === c.UpdatePivotFieldSourceInfoMutation["id"] ? var_core_value_sig8B71 = "updatePivotFieldSource" : var_core_value_sig5BCE === c.SetPivotFilterMutation["id"] ? var_core_value_sig8B71 = "setPivotFilter" : var_core_value_sig5BCE === c.SetPivotValueFilterMutation["id"] ? var_core_value_sig8B71 = "setPivotValueFilter" : var_core_value_sig5BCE === c.SetPivotSortMutation["id"] ? var_core_value_sig8B71 = "setPivotSort" : var_core_value_sig5BCE === c.SetPivotCollapseMutation["id"] ? var_core_value_sig8B71 = "setPivotCollapse" : var_core_value_sig5BCE === c.SetPivotSubtotalTypeMutation["id"] ? var_core_value_sig8B71 = "setPivotSubtotalType" : var_core_value_sig5BCE === c.SetPivotFieldFormatMutation["id"] && (var_core_value_sig8B71 = "setPivotFieldFormat"), var_core_value_sigB601.pivotTableId && var_core_value_sigB601.subUnitId) {
            var var_core_value_sig7481;
            let var_core_value_sig8889 = (var_core_value_sig7481 = this._sheetsPivotTableConfigModel["getPivotTableRangeInfo"](var_core_value_sigB601.unitId, var_core_value_sigB601.subUnitId, var_core_value_sigB601.pivotTableId)) == null ? undefined : var_core_value_sig7481.rangeInfo;
            var_core_value_sig8889 && var_core_value_sigD57D((0, c.unionPivotViewRange)(var_core_value_sig8889).map(var_core_value_sigFBA4 => ({
              range: var_core_value_sigFBA4,
              unitId: var_core_value_sigB601.unitId,
              subUnitId: var_core_value_sigB601.subUnitId,
              showText: var_core_value_sig8B71
            })), "update");
          }
          break;
        }
      case o.InsertSheetsChartMutation["id"]:
        {
          let var_core_value_sigAEFB = var_core_value_sig8EF0;
          var_core_value_sigAEFB.chartId && var_core_value_sig413D.insertDrawings["push"]({
            drawingId: var_core_value_sigAEFB.chartId,
            unitId: var_core_value_sigAEFB.unitId,
            subUnitId: var_core_value_sigAEFB.subUnitId,
            showText: var_core_value_sig4CEF
          });
          break;
        }
      case o.RemoveSheetsChartMutation["id"]:
        {
          let var_core_value_sig826B = var_core_value_sig8EF0;
          var_core_value_sig826B.chartId && var_core_value_sig413D.deleteDrawings["push"]({
            drawingId: var_core_value_sig826B.chartId,
            unitId: var_core_value_sig826B.unitId,
            subUnitId: var_core_value_sig826B.subUnitId,
            showText: var_core_value_sig4CEF
          });
          break;
        }
      case o.ChartUpdateConfigMutation["id"]:
        {
          let var_core_value_sigCF89 = var_core_value_sig6E1C.params;
          if (var_core_value_sigCF89.chartModelId) {
            let var_core_value_sig32F8 = this._sheetsChartService["getSubUnitId"](var_core_value_sigCF89.unitId, var_core_value_sigCF89.chartModelId);
            var_core_value_sig32F8 && (var_core_value_sig413D.subUnitIds["push"](var_core_value_sig32F8), var_core_value_sig413D.updateDrawings["push"]({
              drawingId: var_core_value_sigCF89.chartModelId,
              unitId: var_core_value_sigCF89.unitId,
              subUnitId: var_core_value_sig32F8,
              showText: var_core_value_sig4CEF
            }));
          }
          break;
        }
      case o.ChartUpdateSourceConfigMutation["id"]:
        {
          let var_core_value_sig00CB = var_core_value_sig6E1C.params;
          if (var_core_value_sig00CB.chartModelId) {
            let var_core_value_sig5B67 = this._sheetsChartService["getSubUnitId"](var_core_value_sig00CB.unitId, var_core_value_sig00CB.chartModelId);
            var_core_value_sig5B67 && (var_core_value_sig413D.subUnitIds["push"](var_core_value_sig5B67), var_core_value_sig413D.updateDrawings["push"]({
              drawingId: var_core_value_sig00CB.chartModelId,
              unitId: var_core_value_sig00CB.unitId,
              subUnitId: var_core_value_sig5B67,
              showText: var_core_value_sig4CEF
            }));
          }
          break;
        }
      case l.InsertSheetsShapeMutation["id"]:
        {
          let var_core_value_sig77EE = var_core_value_sig8EF0;
          var_core_value_sig77EE.shapeId && var_core_value_sig413D.insertDrawings["push"]({
            drawingId: var_core_value_sig77EE.shapeId,
            unitId: var_core_value_sig77EE.unitId,
            subUnitId: var_core_value_sig77EE.subUnitId,
            showText: var_core_value_sig4CEF
          });
          break;
        }
      case l.RemoveSheetsShapeMutation["id"]:
        {
          let var_core_value_sig9F76 = var_core_value_sig8EF0;
          var_core_value_sig9F76.shapeId && var_core_value_sig413D.deleteDrawings["push"]({
            drawingId: var_core_value_sig9F76.shapeId,
            unitId: var_core_value_sig9F76.unitId,
            subUnitId: var_core_value_sig9F76.subUnitId,
            showText: var_core_value_sig4CEF
          });
          break;
        }
      case l.UpdateSheetsShapeDataMutation["id"]:
      case l.UpdateSheetsShapeTypeMutation["id"]:
        {
          let var_core_value_sigB008 = var_core_value_sig8EF0;
          var_core_value_sigB008.shapeId && var_core_value_sig413D.updateDrawings["push"]({
            drawingId: var_core_value_sigB008.shapeId,
            unitId: var_core_value_sigB008.unitId,
            subUnitId: var_core_value_sigB008.subUnitId,
            showText: var_core_value_sig4CEF
          });
          break;
        }
      case E.SetDrawingApplyMutation["id"]:
        {
          let var_core_value_sig8721 = var_core_value_sig8EF0,
            var_core_value_sig08BA = var_core_value_sig8721.objects,
            var_core_value_sigDBB5 = var_core_value_sig8721.type,
            var_core_value_sigCFAC = var_core_value_sigDBB5 !== E.DrawingApplyType["INSERT"] && var_core_value_sigDBB5 !== E.DrawingApplyType["REMOVE"],
            var_core_value_sig237B = var_core_value_sigDBB5 === E.DrawingApplyType["INSERT"],
            var_core_value_sigFEAB = var_core_value_sigDBB5 === E.DrawingApplyType["REMOVE"],
            var_core_value_sigE347 = var_core_value_sig4CEF;
          if (var_core_value_sigDBB5 === E.DrawingApplyType["INSERT"] ? var_core_value_sigE347 = this._localeService["t"]("sheets-history-ui.viewer.action.insertDrawing") : var_core_value_sigDBB5 === E.DrawingApplyType["REMOVE"] && (var_core_value_sigE347 = this._localeService["t"]("sheets-history-ui.viewer.action.removeDrawing")), Array.isArray(var_core_value_sig08BA)) var_core_value_sig08BA.forEach(var_core_value_sig1758 => {
            if ("drawingId" in var_core_value_sig1758 && var_core_value_sig1758.drawingId) var_core_value_sigCFAC ? var_core_value_sig413D.updateDrawings["push"]({
              drawingId: var_core_value_sig1758.drawingId,
              unitId: var_core_value_sig8721.unitId,
              subUnitId: var_core_value_sig8721.subUnitId,
              showText: var_core_value_sigE347
            }) : var_core_value_sig237B ? var_core_value_sig413D.insertDrawings["push"]({
              drawingId: var_core_value_sig1758.drawingId,
              unitId: var_core_value_sig8721.unitId,
              subUnitId: var_core_value_sig8721.subUnitId,
              showText: var_core_value_sigE347
            }) : var_core_value_sigFEAB && var_core_value_sig413D.deleteDrawings["push"]({
              drawingId: var_core_value_sig1758.drawingId,
              unitId: var_core_value_sig8721.unitId,
              subUnitId: var_core_value_sig8721.subUnitId,
              showText: var_core_value_sigE347
            });else {
              if ("parent" in var_core_value_sig1758 && "children" in var_core_value_sig1758) {
                var var_core_value_sig4805, var_core_value_sigE67E;
                (var_core_value_sig4805 = var_core_value_sig1758.parent) != null && var_core_value_sig4805.drawingId && (var_core_value_sigCFAC ? var_core_value_sig413D.updateDrawings["push"]({
                  drawingId: var_core_value_sig1758.parent["drawingId"],
                  unitId: var_core_value_sig8721.unitId,
                  subUnitId: var_core_value_sig8721.subUnitId,
                  showText: var_core_value_sigE347
                }) : var_core_value_sig237B ? var_core_value_sig413D.insertDrawings["push"]({
                  drawingId: var_core_value_sig1758.parent["drawingId"],
                  unitId: var_core_value_sig8721.unitId,
                  subUnitId: var_core_value_sig8721.subUnitId,
                  showText: var_core_value_sigE347
                }) : var_core_value_sigFEAB && var_core_value_sig413D.deleteDrawings["push"]({
                  drawingId: var_core_value_sig1758.parent["drawingId"],
                  unitId: var_core_value_sig8721.unitId,
                  subUnitId: var_core_value_sig8721.subUnitId,
                  showText: var_core_value_sigE347
                })), (var_core_value_sigE67E = var_core_value_sig1758.children) == null || var_core_value_sigE67E.forEach(var_core_value_sig2AD8 => {
                  var_core_value_sig2AD8.drawingId && (var_core_value_sigCFAC ? var_core_value_sig413D.updateDrawings["push"]({
                    drawingId: var_core_value_sig2AD8.drawingId,
                    unitId: var_core_value_sig8721.unitId,
                    subUnitId: var_core_value_sig8721.subUnitId,
                    showText: var_core_value_sigE347
                  }) : var_core_value_sig237B ? var_core_value_sig413D.insertDrawings["push"]({
                    drawingId: var_core_value_sig2AD8.drawingId,
                    unitId: var_core_value_sig8721.unitId,
                    subUnitId: var_core_value_sig8721.subUnitId,
                    showText: var_core_value_sigE347
                  }) : var_core_value_sigFEAB && var_core_value_sig413D.deleteDrawings["push"]({
                    drawingId: var_core_value_sig2AD8.drawingId,
                    unitId: var_core_value_sig8721.unitId,
                    subUnitId: var_core_value_sig8721.subUnitId,
                    showText: var_core_value_sigE347
                  }));
                });
              }
            }
          });else {
            if (var_core_value_sig08BA && typeof var_core_value_sig08BA == "object") {
              if ("drawingIds" in var_core_value_sig08BA && Array.isArray(var_core_value_sig08BA.drawingIds)) var_core_value_sig08BA.drawingIds["forEach"](var_core_value_sig27E5 => {
                var_core_value_sigCFAC ? var_core_value_sig413D.updateDrawings["push"]({
                  drawingId: var_core_value_sig27E5,
                  unitId: var_core_value_sig8721.unitId,
                  subUnitId: var_core_value_sig8721.subUnitId,
                  showText: var_core_value_sigE347
                }) : var_core_value_sig237B ? var_core_value_sig413D.insertDrawings["push"]({
                  drawingId: var_core_value_sig27E5,
                  unitId: var_core_value_sig8721.unitId,
                  subUnitId: var_core_value_sig8721.subUnitId,
                  showText: var_core_value_sigE347
                }) : var_core_value_sigFEAB && var_core_value_sig413D.deleteDrawings["push"]({
                  drawingId: var_core_value_sig27E5,
                  unitId: var_core_value_sig8721.unitId,
                  subUnitId: var_core_value_sig8721.subUnitId,
                  showText: var_core_value_sigE347
                });
              });else {
                if ("parent" in var_core_value_sig08BA && "children" in var_core_value_sig08BA) {
                  var var_core_value_sig08A3, var_core_value_sig77D8;
                  (var_core_value_sig08A3 = var_core_value_sig08BA.parent) != null && var_core_value_sig08A3.drawingId && (var_core_value_sigCFAC ? var_core_value_sig413D.updateDrawings["push"]({
                    drawingId: var_core_value_sig08BA.parent["drawingId"],
                    unitId: var_core_value_sig8721.unitId,
                    subUnitId: var_core_value_sig8721.subUnitId,
                    showText: var_core_value_sigE347
                  }) : var_core_value_sig237B ? var_core_value_sig413D.insertDrawings["push"]({
                    drawingId: var_core_value_sig08BA.parent["drawingId"],
                    unitId: var_core_value_sig8721.unitId,
                    subUnitId: var_core_value_sig8721.subUnitId,
                    showText: var_core_value_sigE347
                  }) : var_core_value_sigFEAB && var_core_value_sig413D.deleteDrawings["push"]({
                    drawingId: var_core_value_sig08BA.parent["drawingId"],
                    unitId: var_core_value_sig8721.unitId,
                    subUnitId: var_core_value_sig8721.subUnitId,
                    showText: var_core_value_sigE347
                  })), (var_core_value_sig77D8 = var_core_value_sig08BA.children) == null || var_core_value_sig77D8.forEach(var_core_value_sig7524 => {
                    var_core_value_sig7524.drawingId && (var_core_value_sigCFAC ? var_core_value_sig413D.updateDrawings["push"]({
                      drawingId: var_core_value_sig7524.drawingId,
                      unitId: var_core_value_sig8721.unitId,
                      subUnitId: var_core_value_sig8721.subUnitId,
                      showText: var_core_value_sigE347
                    }) : var_core_value_sig237B ? var_core_value_sig413D.insertDrawings["push"]({
                      drawingId: var_core_value_sig7524.drawingId,
                      unitId: var_core_value_sig8721.unitId,
                      subUnitId: var_core_value_sig8721.subUnitId,
                      showText: var_core_value_sigE347
                    }) : var_core_value_sigFEAB && var_core_value_sig413D.deleteDrawings["push"]({
                      drawingId: var_core_value_sig7524.drawingId,
                      unitId: var_core_value_sig8721.unitId,
                      subUnitId: var_core_value_sig8721.subUnitId,
                      showText: var_core_value_sigE347
                    }));
                  });
                }
              }
            }
          }
          break;
        }
    }
    return var_core_value_sig413D;
  }
  _combineRanges(var_core_value_sig78A3) {
    if (var_core_value_sig78A3.length <= 1) return var_core_value_sig78A3;
    let var_core_value_sig649B = new Map();
    return var_core_value_sig78A3.forEach(var_core_value_sigD04E => {
      let {
          unitId: var_core_value_sigB99B,
          subUnitId: var_core_value_sig5A75
        } = var_core_value_sigD04E,
        var_core_value_sig7BAF = var_core_value_sigB99B + "-" + var_core_value_sig5A75;
      if (!var_core_value_sig649B.has(var_core_value_sig7BAF)) var_core_value_sig649B.set(var_core_value_sig7BAF, [var_core_value_sigD04E]);else {
        var var_core_value_sig8F69;
        (var_core_value_sig8F69 = var_core_value_sig649B.get(var_core_value_sig7BAF)) == null || var_core_value_sig8F69.push(var_core_value_sigD04E);
      }
    }), Array.from(var_core_value_sig649B.values()).map(var_core_value_sig6884 => new t.RangeMergeUtil().add(...var_core_value_sig6884.map(var_core_value_sig3C5B => var_core_value_sig3C5B.range)).merge().map(var_core_value_sig200B => ({
      range: var_core_value_sig200B,
      unitId: var_core_value_sig6884[0].unitId,
      subUnitId: var_core_value_sig6884[0].subUnitId,
      showText: var_core_value_sig6884[0].showText,
      highlightRow: var_core_value_sig6884[0].highlightRow,
      highlightColumn: var_core_value_sig6884[0].highlightColumn
    }))).flat();
  }
};
J = W([U(0, (0, e.Inject)(q)), U(1, n.ITransformService), U(2, n.ISnapshotServerService), U(3, (0, e.Inject)(t.RangeProtectionRuleModel)), U(4, (0, e.Inject)(S.ConditionalFormattingRuleModel)), U(5, (0, e.Inject)(w.SheetDataValidationModel)), U(6, (0, e.Inject)(O.SheetsFilterService)), U(7, (0, e.Inject)(d.SparklineDataSourceModel)), U(8, (0, e.Inject)(c.SheetsPivotTableConfigModel)), U(9, (0, e.Inject)(j.SheetTableService)), U(10, (0, e.Inject)(e.LocaleService)), U(11, (0, e.Inject)(o.SheetsChartService)), U(12, (0, e.Inject)(G))], J);
function Se(var_core_value_sigDB33) {
  return new e["ObjectMatrix"](var_core_value_sigDB33).getDataRange();
}
function Ce(var_core_value_sig6C8C) {
  let var_core_value_sig7A5E = new e.ObjectMatrix(var_core_value_sig6C8C),
    var_core_value_sig838E = new e["ObjectMatrix"]();
  return var_core_value_sig7A5E.forValue((var_core_value_sig6256, var_core_value_sigE7A6) => {
    var_core_value_sig838E.setValue(var_core_value_sig6256, var_core_value_sigE7A6, 1);
  }), (0, t.findAllRectangle)(var_core_value_sig838E);
}
const we = [{
  key: 0,
  labelKey: "sheets-history-ui.viewer.panel.filterAll"
}, {
  key: 1,
  labelKey: "sheets-history-ui.viewer.panel.filterUser"
}, {
  key: 2,
  labelKey: "sheets-history-ui.viewer.panel.filterAi"
}];
function Te(var_core_value_sig9A5B) {
  let {
      value: var_core_value_sigC860,
      onChange: var_core_value_sigE64C
    } = var_core_value_sig9A5B,
    var_core_value_sigF39B = (0, N.useDependency)(e.LocaleService);
  return (0, R.jsx)("div", {
    className: "univer-relative univer-h-8",
    children: (0, R.jsx)(m.Segmented, {
      items: we.map(var_core_value_sigB505 => ({
        label: var_core_value_sigF39B.t(var_core_value_sigB505.labelKey),
        value: var_core_value_sigB505.key
      })),
      value: var_core_value_sigC860,
      onChange: var_core_value_sigE64C
    })
  });
}
function Ee() {
  var var_core_value_sig9B88;
  let var_core_value_sig992A = (0, N.useDependency)(q),
    var_core_value_sig6281 = (0, N.useDependency)(G),
    var_core_value_sig9B01 = (0, N.useDependency)(J),
    var_core_value_sigA724 = (0, N.useDependency)(e.IConfigService),
    var_core_value_sig385E = (0, N.useObservable)(var_core_value_sig992A.versions$),
    var_core_value_sig10D3 = (0, N.useObservable)(var_core_value_sig992A.creators$, []),
    [var_core_value_sig41F2, var_core_value_sig32DD] = (0, I.useState)(() => new Set()),
    [var_core_value_sig7A88, var_core_value_sig6CFC] = (0, I.useState)(() => new Map()),
    [var_core_value_sig3EC0, var_core_value_sigEA69] = (0, I.useState)(() => new Set()),
    [var_core_value_sigF42A, var_core_value_sig898E] = (0, I.useState)(0),
    var_core_value_sigC481 = (0, N.useDependency)(e.LocaleService),
    var_core_value_sig27B7 = (0, I.useRef)(null),
    [var_core_value_sig2DAD, var_core_value_sig00DE] = (0, I.useState)(false),
    [var_core_value_sigEF7C, var_core_value_sig07E7] = (0, I.useState)([]),
    var_core_value_sig6005 = ((var_core_value_sig9B88 = var_core_value_sigA724.getConfig("sheets-history-ui.config")) == null ? undefined : var_core_value_sig9B88.historyAIassistantEnabled) ?? false,
    var_core_value_sig25A4 = be(var_core_value_sig385E),
    [var_core_value_sigB591, var_core_value_sigB272] = (0, I.useState)([]),
    var_core_value_sig6F52 = (0, I.useMemo)(() => var_core_value_sig10D3.map(var_core_value_sig066E => ({
      key: var_core_value_sig066E.userId,
      label: var_core_value_sig066E.name
    })), [var_core_value_sig10D3]);
  (0, I.useEffect)(() => {
    var_core_value_sig992A.loadHistoryCreatorList().catch(() => undefined);
  }, [var_core_value_sig992A]);
  let var_core_value_sig09C4 = (0, I.useCallback)(var_core_value_sig7428 => {
    var_core_value_sigB272([]), var_core_value_sig898E(var_core_value_sig7428), var_core_value_sig992A.unitId && var_core_value_sig992A.loadInitialVersions(var_core_value_sig992A.unitId, {
      origin: var_core_value_sig7428
    }).catch(() => undefined);
  }, [var_core_value_sig992A]);
  (0, I.useEffect)(() => {
    let var_core_value_sig1DCE = var_core_value_sig27B7.current;
    if (!var_core_value_sig1DCE) return;
    let var_core_value_sig0567,
      var_core_value_sigA7F3 = () => {
        clearTimeout(var_core_value_sig0567), var_core_value_sig0567 = setTimeout(() => {
          let {
            scrollTop: var_core_value_sig3863,
            scrollHeight: var_core_value_sigC97C,
            clientHeight: var_core_value_sigC4B1
          } = var_core_value_sig1DCE;
          var_core_value_sig3863 + var_core_value_sigC4B1 >= var_core_value_sigC97C - 5 && var_core_value_sig992A.loadMoreVersions().catch(() => undefined);
        }, 100);
      };
    return var_core_value_sig1DCE.addEventListener("scroll", var_core_value_sigA7F3), () => {
      clearTimeout(var_core_value_sig0567), var_core_value_sig1DCE.removeEventListener("scroll", var_core_value_sigA7F3);
    };
  }, [var_core_value_sig992A]);
  let var_core_value_sig8E3E = (0, I.useCallback)(async var_core_value_sigEACD => {
    let var_core_value_sig901E = var_core_value_sigEACD.id;
    if (var_core_value_sig41F2.has(var_core_value_sig901E)) {
      var_core_value_sig32DD(var_core_value_sig1BD9 => {
        let var_core_value_sigE43E = new Set(var_core_value_sig1BD9);
        return var_core_value_sigE43E.delete(var_core_value_sig901E), var_core_value_sigE43E;
      });
      return;
    }
    if (var_core_value_sig7A88.has(var_core_value_sig901E)) {
      var_core_value_sig32DD(var_core_value_sigA937 => new Set(var_core_value_sigA937).add(var_core_value_sig901E));
      return;
    }
    var_core_value_sigEA69(var_core_value_sig9B0D => new Set(var_core_value_sig9B0D).add(var_core_value_sig901E));
    try {
      var var_core_value_sigF7BB;
      let var_core_value_sig3D2C = var_core_value_sig992A.unitId;
      if (!var_core_value_sig3D2C) return;
      let var_core_value_sigC56D = await var_core_value_sig6281.getHistoryChangesets({}, {
        unitId: var_core_value_sig3D2C,
        startRevision: var_core_value_sigEACD.startRev,
        endRevision: var_core_value_sigEACD.endRev
      });
      if (((var_core_value_sigF7BB = var_core_value_sigC56D.error) == null ? undefined : var_core_value_sigF7BB.code) === 1 && var_core_value_sigC56D.changesets) {
        let var_core_value_sigCAD5 = var_core_value_sigC56D.changesets["reverse"]().map(var_core_value_sig2902 => {
          var var_core_value_sig9989, var_core_value_sig698E;
          let var_core_value_sig2809 = (0, n.parseProtocolChangeset)(var_core_value_sig2902),
            var_core_value_sig2DAB = var_core_value_sig2902.userID || var_core_value_sig2809.userID,
            var_core_value_sig877E = (var_core_value_sig9989 = var_core_value_sigC56D.users) == null ? undefined : var_core_value_sig9989[var_core_value_sig2DAB],
            var_core_value_sig20C8 = ((var_core_value_sig698E = var_core_value_sig2902.mutations) == null ? undefined : var_core_value_sig698E.map(var_core_value_sig4383 => var_core_value_sig4383.id)) || [];
          return {
            id: var_core_value_sig901E + "-detail-" + var_core_value_sig2902.revision,
            unitId: var_core_value_sig2902.unitID,
            startRev: var_core_value_sig2902.revision,
            endRev: var_core_value_sig2902.revision,
            time: var_core_value_sig2902.createTime ? var_core_value_sig2902.createTime * 1000 : undefined,
            user: (var_core_value_sig877E == null ? undefined : var_core_value_sig877E.name) || "",
            users: [(var_core_value_sig877E == null ? undefined : var_core_value_sig877E.name) || ""],
            commands: var_core_value_sig20C8,
            isAnonymous: false,
            isDetail: true,
            parentId: var_core_value_sig901E,
            additionalFields: var_core_value_sig2902.additionalFields
          };
        });
        var_core_value_sig6CFC(var_core_value_sigE9A7 => new Map(var_core_value_sigE9A7).set(var_core_value_sig901E, var_core_value_sigCAD5)), var_core_value_sigCAD5.forEach(var_core_value_sigBECE => {
          var_core_value_sig992A.registerDetailVersion(var_core_value_sigBECE);
        });
        for (let var_core_value_sig1B22 of var_core_value_sigCAD5) await var_core_value_sig9B01.ensureVersion(var_core_value_sig1B22.id);
        var_core_value_sig32DD(var_core_value_sig7F72 => new Set(var_core_value_sig7F72).add(var_core_value_sig901E));
      }
    } catch (var_core_value_sig3A17) {
      console.error("Failed to fetch version details:", var_core_value_sig3A17);
    } finally {
      var_core_value_sigEA69(var_core_value_sigE503 => {
        let var_core_value_sig48DD = new Set(var_core_value_sigE503);
        return var_core_value_sig48DD.delete(var_core_value_sig901E), var_core_value_sig48DD;
      });
    }
  }, [var_core_value_sig41F2, var_core_value_sig7A88, var_core_value_sig992A, var_core_value_sig6281, var_core_value_sig9B01]);
  return var_core_value_sig385E ? (0, R.jsxs)("div", {
    ref: var_core_value_sig27B7,
    className: "univer-absolute\x20univer-flex\x20univer-h-[calc(100%-32px)]\x20univer-w-[calc(100%-16px)]\x20univer-flex-col\x20univer-overflow-auto",
    children: [var_core_value_sig6005 && (0, R.jsxs)("div", {
      className: "univer-sticky univer-top-0 univer-z-10 univer-mb-3 univer-flex univer-items-center univer-gap-2 univer-bg-gray-0 dark:!univer-bg-gray-200",
      children: [(0, R.jsx)("div", {
        className: "univer-flex-1",
        children: (0, R.jsx)(Te, {
          value: var_core_value_sigF42A,
          onChange: var_core_value_sig09C4
        })
      }), (0, R.jsx)(m.Dropdown, {
        align: "end",
        open: var_core_value_sig2DAD,
        onOpenChange: var_core_value_sigFA38 => {
          var_core_value_sig00DE(var_core_value_sigFA38), var_core_value_sigFA38 && var_core_value_sig07E7(var_core_value_sigB591);
        },
        overlay: (0, R.jsxs)("div", {
          className: "univer-min-w-[240px]",
          children: [(0, R.jsx)("div", {
            className: "univer-px-3 univer-py-2 univer-text-sm univer-font-semibold",
            children: var_core_value_sigC481.t("sheets-history-ui.viewer.panel.filterCollaborator")
          }), (0, R.jsx)("div", {
            className: "univer-border-t univer-border-gray-200 dark:!univer-border-gray-700"
          }), (0, R.jsx)("div", {
            className: "univer-max-h-[300px] univer-overflow-y-auto univer-py-1",
            children: var_core_value_sig6F52.map(var_core_value_sig102B => {
              let var_core_value_sigA7DB = var_core_value_sigEF7C.includes(var_core_value_sig102B.key);
              return (0, R.jsxs)("div", {
                className: "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-px-3 univer-py-2 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800",
                onClick: () => {
                  let var_core_value_sig938F = var_core_value_sigA7DB ? var_core_value_sigEF7C.filter(var_core_value_sig5E6A => var_core_value_sig5E6A !== var_core_value_sig102B.key) : [...var_core_value_sigEF7C, var_core_value_sig102B.key];
                  var_core_value_sig07E7(var_core_value_sig938F);
                },
                children: [(0, R.jsx)(m.Checkbox, {
                  checked: var_core_value_sigA7DB
                }), (0, R.jsx)("span", {
                  className: "univer-text-sm",
                  children: var_core_value_sig102B.label
                })]
              }, var_core_value_sig102B.key);
            })
          }), (0, R.jsx)("div", {
            className: "univer-border-t univer-border-gray-200 dark:!univer-border-gray-700"
          }), (0, R.jsxs)("div", {
            className: "univer-flex\x20univer-items-center\x20univer-justify-end\x20univer-gap-2\x20univer-p-2",
            children: [(0, R.jsx)(m.Button, {
              variant: "ghost",
              onClick: () => {
                var_core_value_sig07E7(var_core_value_sigB591), var_core_value_sig00DE(false);
              },
              children: var_core_value_sigC481.t("sheets-history-ui.viewer.panel.filterCollaboratorCancel")
            }), (0, R.jsx)(m.Button, {
              onClick: () => {
                var_core_value_sigB272(var_core_value_sigEF7C), var_core_value_sig992A.unitId && var_core_value_sig992A.loadInitialVersions(var_core_value_sig992A.unitId, {
                  origin: var_core_value_sigF42A,
                  userIds: var_core_value_sigEF7C
                }).catch(() => undefined), var_core_value_sig00DE(false);
              },
              children: var_core_value_sigC481.t("sheets-history-ui.viewer.panel.filterCollaboratorConfirm")
            })]
          })]
        }),
        children: (0, R.jsx)(m.Button, {
          variant: "ghost",
          children: (0, R.jsx)(F.FunnelIcon, {
            className: (0, m.clsx)("univer-size-4", {
              "univer-text-blue-600\x20dark:!univer-text-blue-400": var_core_value_sigB591.length > 0
            })
          })
        })
      })]
    }), (0, R.jsx)("div", {
      className: "univer-relative\x20univer-flex-1\x20univer-space-y-2\x20univer-pb-4",
      children: var_core_value_sig25A4.map(var_core_value_sig5EEE => (0, R.jsxs)(I.Fragment, {
        children: [(0, R.jsx)(Oe, {
          date: var_core_value_sig5EEE.dateString,
          startDate: var_core_value_sig5EEE.startDateString,
          endDate: var_core_value_sig5EEE.endDateString
        }), var_core_value_sig5EEE.versions["map"](var_core_value_sigD948 => {
          let var_core_value_sigBE5E = var_core_value_sig41F2.has(var_core_value_sigD948.id),
            var_core_value_sig0281 = var_core_value_sig3EC0.has(var_core_value_sigD948.id),
            var_core_value_sigED71 = var_core_value_sig7A88.get(var_core_value_sigD948.id) || [];
          return (0, R.jsxs)(I.Fragment, {
            children: [(0, R.jsx)(ke, {
              item: var_core_value_sigD948,
              onToggleExpand: var_core_value_sig8E3E,
              isExpanded: var_core_value_sigBE5E,
              isLoadingDetail: var_core_value_sig0281
            }), var_core_value_sigBE5E && var_core_value_sigED71.map((var_core_value_sigB7FC, var_core_value_sig9CD9) => (0, R.jsxs)("div", {
              className: "univer-relative\x20!univer-mb-0\x20!univer-mt-0",
              children: [(0, R.jsxs)("div", {
                className: "univer-absolute univer-left-[30px] univer-top-0 univer-h-full univer-w-2.5 rtl:univer-left-auto rtl:univer-right-[30px]",
                children: [var_core_value_sig9CD9 < var_core_value_sigED71.length - 1 && (0, R.jsx)("div", {
                  className: "univer-absolute univer-left-0 univer-top-0 univer-h-full univer-w-px univer-bg-gray-100 rtl:univer-left-auto rtl:univer-right-0 dark:!univer-bg-gray-800"
                }), var_core_value_sig9CD9 === var_core_value_sigED71.length - 1 && (0, R.jsx)("div", {
                  className: "univer-absolute\x20univer-left-0\x20univer-top-0\x20univer-h-1/2\x20univer-w-px\x20univer-bg-gray-100\x20rtl:univer-left-auto\x20rtl:univer-right-0\x20dark:!univer-bg-gray-800"
                }), (0, R.jsx)("div", {
                  className: "univer-absolute\x20univer-left-0\x20univer-top-1/2\x20univer-h-px\x20univer-w-2.5\x20-univer-translate-y-1/2\x20univer-bg-gray-100\x20rtl:univer-left-auto\x20rtl:univer-right-0\x20dark:!univer-bg-gray-800"
                })]
              }), (0, R.jsx)(ke, {
                item: var_core_value_sigB7FC,
                isDetail: true
              })]
            }, var_core_value_sigD948.id + "-detail-" + var_core_value_sigB7FC.id))]
          }, var_core_value_sigD948.id);
        })]
      }, var_core_value_sig5EEE.dateString))
    })]
  }) : (0, R.jsx)(De, {});
}
function De() {
  return (0, R.jsx)("div", {
    className: "univer-flex univer-items-center univer-justify-center",
    children: (0, R.jsx)("span", {
      className: "univer-text-gray-500",
      children: (0, R.jsx)(F.LoadingMultiIcon, {
        className: "univer-m-auto univer-animate-spin"
      })
    })
  });
}
function Oe(var_core_value_sigC3D3) {
  let var_core_value_sig1451 = (0, N.useDependency)(e.LocaleService),
    {
      date: var_core_value_sigAD57,
      startDate: var_core_value_sig58A8 = var_core_value_sigAD57
    } = var_core_value_sigC3D3;
  return (0, R.jsx)("div", {
    className: "univer-flex univer-items-center univer-gap-2.5 univer-pt-1.5 univer-text-sm univer-font-medium",
    children: ye(var_core_value_sig58A8, var_core_value_sig1451)
  });
}
function ke(var_core_value_sigEC1A) {
  let {
      item: var_core_value_sigBDED,
      onToggleExpand: var_core_value_sig4BFF,
      isExpanded: var_core_value_sig40E7,
      isLoadingDetail: var_core_value_sigEDBA,
      isDetail: var_core_value_sigE863
    } = var_core_value_sigEC1A,
    {
      time: var_core_value_sig04B4,
      user: var_core_value_sig1C07,
      startRevCreateTime: var_core_value_sig93D6,
      endRevCreateTime: var_core_value_sigDD05,
      users: var_core_value_sig3932
    } = var_core_value_sigBDED,
    var_core_value_sig48B2 = (0, N.useDependency)(q),
    var_core_value_sig57DF = (0, N.useDependency)(J),
    var_core_value_sigC985 = (0, N.useObservable)(var_core_value_sig48B2.currentVersion$, "", true) === var_core_value_sigBDED.id,
    var_core_value_sig8DA6 = var_core_value_sig48B2.getCurrentUnitCurrentVersion() === var_core_value_sigBDED.endRev,
    var_core_value_sigCA69 = !var_core_value_sig8DA6 && var_core_value_sig48B2.canRevert,
    var_core_value_sigB77C = (0, N.useDependency)(e.LocaleService),
    var_core_value_sig9AFF = K(var_core_value_sig04B4, var_core_value_sigB77C),
    var_core_value_sig3545 = K(var_core_value_sig93D6, var_core_value_sigB77C),
    var_core_value_sig5EE4 = K(var_core_value_sigDD05, var_core_value_sigB77C),
    var_core_value_sig7EAB = var_core_value_sigB77C.t("sheets-history-ui.viewer.panel.currentVersion"),
    var_core_value_sig56B9 = var_core_value_sigBDED.startRev !== var_core_value_sigBDED.endRev,
    var_core_value_sig90CF = !!var_core_value_sigBDED.additionalFields,
    var_core_value_sigA386 = (0, I.useMemo)(() => {
      let var_core_value_sig65B4 = var_core_value_sig1C07 || var_core_value_sigB77C.t("sheets-history-ui.viewer.panel.unknownUser");
      return var_core_value_sig3932 && var_core_value_sig3932.filter(var_core_value_sig281C => var_core_value_sig281C).length > 0 && (var_core_value_sig65B4 = var_core_value_sig3932.filter(var_core_value_sig3C92 => var_core_value_sig3C92).join(",\x20")), var_core_value_sig90CF ? "" + var_core_value_sigB77C.t("sheets-history-ui.viewer.panel.aiAssistant") + (var_core_value_sig65B4 ? "\x20(" + var_core_value_sig65B4 + ")" : "") : var_core_value_sig65B4;
    }, [var_core_value_sig90CF, var_core_value_sig1C07, var_core_value_sig3932, var_core_value_sigB77C]),
    var_core_value_sigCD6E = (0, I.useCallback)(async var_core_value_sigF98E => {
      var_core_value_sig48B2.loadingState !== "loading" && (var_core_value_sig48B2.selectVersion(var_core_value_sigF98E), var_core_value_sigE863 && (await var_core_value_sig57DF.ensureVersion(var_core_value_sigF98E), await var_core_value_sig48B2.triggerLoadSheet(var_core_value_sigF98E)));
    }, [var_core_value_sig48B2, var_core_value_sig57DF, var_core_value_sigE863]),
    var_core_value_sigFD9D = (0, I.useCallback)(var_core_value_sigA470 => {
      var_core_value_sig48B2.triggerRevert(var_core_value_sigA470).catch(() => undefined);
    }, [var_core_value_sig48B2]),
    var_core_value_sigA2A4 = (0, I.useCallback)(var_core_value_sig19A1 => {
      var_core_value_sig19A1.stopPropagation(), var_core_value_sig4BFF && !var_core_value_sigEDBA && var_core_value_sig4BFF(var_core_value_sigBDED).catch(() => undefined);
    }, [var_core_value_sig4BFF, var_core_value_sigBDED, var_core_value_sigEDBA]),
    var_core_value_sigA1AC = (0, R.jsx)(F.MoreRightIcon, {
      className: "univer-size-8 univer-text-gray-400 rtl:univer-rotate-180"
    });
  var_core_value_sigEDBA ? var_core_value_sigA1AC = (0, R.jsx)(F.LoadingMultiIcon, {
    className: "univer-animate-spin"
  }) : var_core_value_sig40E7 && (var_core_value_sigA1AC = (0, R.jsx)(F.MoreDownIcon, {
    className: "univer-size-8 univer-text-gray-400"
  }));
  let var_core_value_sig6180 = var_core_value_sig3545.time;
  return var_core_value_sigE863 ? var_core_value_sig6180 = var_core_value_sig9AFF.time : var_core_value_sig93D6 !== var_core_value_sigDD05 && (var_core_value_sig6180 = var_core_value_sig3545.time + " - " + var_core_value_sig5EE4.time), (0, R.jsxs)("div", {
    className: (0, m.clsx)("univer-min-h-15\x20univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-gap-2\x20univer-rounded-md\x20univer-px-1\x20univer-py-1.5\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-800", {
      "univer-bg-gray-50\x20dark:!univer-bg-gray-900": var_core_value_sigC985,
      "univer-ml-6\x20rtl:univer-ml-0\x20rtl:univer-mr-6": var_core_value_sigE863
    }),
    onClick: () => var_core_value_sigCD6E(var_core_value_sigBDED.id).catch(() => undefined),
    children: [(0, R.jsx)("div", {
      className: "univer-flex\x20univer-w-3\x20univer-items-center\x20univer-justify-center",
      children: var_core_value_sig56B9 && !var_core_value_sigE863 && (0, R.jsx)("div", {
        onClick: var_core_value_sigA2A4,
        className: "univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center",
        children: var_core_value_sigA1AC
      })
    }), (0, R.jsxs)("div", {
      className: "univer-flex\x20univer-flex-1\x20univer-flex-col\x20univer-gap-1",
      children: [(0, R.jsxs)("div", {
        className: "univer-flex univer-min-h-6 univer-w-full univer-items-center univer-justify-between",
        children: [(0, R.jsxs)("div", {
          className: "univer-flex univer-flex-1 univer-items-center univer-gap-1.5 univer-text-sm univer-text-gray-600 dark:!univer-text-gray-200",
          children: [var_core_value_sig90CF && (0, R.jsx)(F.AiAssistantMultiIcon, {
            className: "univer-size-4\x20univer-shrink-0"
          }), (0, R.jsx)("span", {
            className: "univer-break-all\x20univer-font-medium\x20univer-text-gray-700\x20dark:!univer-text-gray-200",
            children: var_core_value_sigA386
          }), (0, R.jsx)("span", {
            className: "univer-text-center univer-text-gray-500 dark:!univer-text-gray-400",
            children: var_core_value_sig6180
          }), var_core_value_sig8DA6 && (0, R.jsx)("span", {
            className: "univer-ml-1 univer-flex univer-flex-shrink-0 univer-items-center univer-justify-center univer-rounded univer-border univer-border-primary-600 univer-bg-primary-50 univer-px-1.5 univer-text-xs univer-text-primary-600",
            children: var_core_value_sig7EAB
          })]
        }), (0, R.jsx)("div", {
          children: var_core_value_sigCA69 && (0, R.jsx)(m.Tooltip, {
            title: var_core_value_sigB77C.t("sheets-history-ui.viewer.panel.revertDesc"),
            children: (0, R.jsx)("div", {
              onClick: var_core_value_sig81F7 => {
                var_core_value_sig81F7.stopPropagation(), var_core_value_sigFD9D(var_core_value_sigBDED.id);
              },
              className: "univer-flex\x20univer-size-6\x20univer-items-center\x20univer-justify-center\x20univer-rounded\x20univer-text-gray-400\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700",
              children: (0, R.jsx)(F.RestoreIcon, {})
            })
          })
        })]
      }), (0, R.jsx)("div", {
        className: "univer-text-sm univer-leading-5 univer-text-gray-500 dark:!univer-text-gray-300",
        children: _e(var_core_value_sigBDED, var_core_value_sigB77C)
      })]
    })]
  });
}
let Y = class extends e.Disposable {
  constructor(var_core_value_sigBE51, var_core_value_sigAAD1) {
    super(), this.disposeWithMe(var_core_value_sigBE51.register(ae, Ee)), this.disposeWithMe(var_core_value_sigAAD1.register({
      HistoryIcon: F.HistoryIcon
    }));
  }
};
Y = W([U(0, (0, e.Inject)(N.ComponentManager)), U(1, (0, e.Inject)(N.IconManager))], Y);
let X = class extends e.Disposable {
  constructor(var_core_value_sigBC1A) {
    super(), this._cellEditorManagerService = var_core_value_sigBC1A, this._init();
  }
  _init() {
    this.disposeWithMe(this._cellEditorManagerService["state$"].subscribe(var_core_value_sigB16B => {
      var_core_value_sigB16B != null && var_core_value_sigB16B.show && this._cellEditorManagerService["setState"]({
        show: false
      });
    }));
  }
};
X = W([U(0, M.ICellEditorManagerService)], X);
function Ae() {
  let var_core_value_sigB93D = (0, N.useDependency)(q),
    var_core_value_sigB17C = (0, N.useDependency)(e.LocaleService);
  if ((0, N.useObservable)(var_core_value_sigB93D.loadingState$, "init") !== "loading") return null;
  let var_core_value_sig69B6 = var_core_value_sigB17C.t("sheets-history-ui.viewer.info.loading");
  return (0, R.jsx)("div", {
    "aria-busy": "true",
    "aria-label": var_core_value_sig69B6,
    className: "univer-bg-gray-0/70\x20dark:!univer-bg-gray-900/70\x20univer-fixed\x20univer-inset-0\x20univer-z-[1000]\x20univer-flex\x20univer-cursor-wait\x20univer-items-center\x20univer-justify-center\x20univer-backdrop-blur-sm",
    children: (0, R.jsxs)("div", {
      role: "status",
      "aria-live": "polite",
      className: "univer-flex univer-items-center univer-gap-3 univer-rounded-lg univer-bg-gray-0 univer-px-5 univer-py-4 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-bg-gray-700 dark:!univer-text-gray-0",
      children: [(0, R.jsx)(F.LoadingMultiIcon, {
        className: "univer-size-6\x20univer-animate-spin\x20univer-text-gray-500"
      }), (0, R.jsx)("span", {
        children: var_core_value_sig69B6
      })]
    })
  });
}
function je() {
  let var_core_value_sig708D = (0, N.useDependency)(q),
    var_core_value_sig1ED2 = (0, N.useDependency)(e.LocaleService),
    var_core_value_sig94C1 = (0, N.useObservable)(var_core_value_sig708D.currentVersion$),
    var_core_value_sigABAC = (0, I.useMemo)(() => var_core_value_sig94C1 ? var_core_value_sig708D.getSelectedVersionCanRevert() : false, [var_core_value_sig708D, var_core_value_sig94C1]),
    var_core_value_sigFAE6 = (0, I.useCallback)(() => {
      var_core_value_sig708D.exitHistoryMode();
    }, [var_core_value_sig708D]),
    var_core_value_sig06AC = (0, I.useCallback)(() => {
      var_core_value_sig708D.triggerRevert();
    }, [var_core_value_sig708D]);
  return (0, R.jsxs)("div", {
    className: (0, m.clsx)("univer-flex\x20univer-h-12\x20univer-cursor-default\x20univer-items-center\x20univer-justify-between\x20univer-px-3", m.borderBottomClassName),
    children: [(0, R.jsxs)(m.Button, {
      onClick: var_core_value_sigFAE6,
      children: [(0, R.jsx)(F.ArrowLeftIcon, {
        className: "univer-size-4"
      }), var_core_value_sig1ED2.t("sheets-history-ui.viewer.header.back")]
    }), (0, R.jsx)(m.Button, {
      variant: "primary",
      disabled: !var_core_value_sigABAC,
      onClick: var_core_value_sig06AC,
      children: var_core_value_sig1ED2.t("sheets-history-ui.viewer.header.revert")
    })]
  });
}
let Me = class extends e.Disposable {
  constructor(var_core_value_sig3F3A, var_core_value_sigA984, var_core_value_sigA504, var_core_value_sig05FF, var_core_value_sigFBF0, var_core_value_sig2F95, var_core_value_sigF0E1) {
    super(), this._permissionService = var_core_value_sig3F3A, this._uiPartsService = var_core_value_sigA984, this._messageService = var_core_value_sigA504, this._localeService = var_core_value_sig05FF, this._historyManagerService = var_core_value_sigFBF0, this._injector = var_core_value_sig2F95, this._configService = var_core_value_sigF0E1, this._init();
  }
  _init() {
    this.disposeWithMe(this._historyManagerService["currentVersion$"].subscribe(var_core_value_sig585D => {
      var_core_value_sig585D && this._historyManagerService["triggerLoadSheet"](var_core_value_sig585D);
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(var_core_value_sigE722 => {
      let var_core_value_sig062A = this._historyManagerService["unitId"];
      var_core_value_sig062A && (var_core_value_sigE722.subType === L.UnitAction["Edit"] && var_core_value_sigE722.value === true && this._permissionService["updatePermissionPoint"](new t["WorkbookEditablePermission"](var_core_value_sig062A).id, false), var_core_value_sigE722.subType === L.UnitAction["RenameSheet"] && var_core_value_sigE722.value === true && this._permissionService["updatePermissionPoint"](new t["WorkbookRenameSheetPermission"](var_core_value_sig062A).id, false), var_core_value_sigE722.subType === L.UnitAction["MoveSheet"] && var_core_value_sigE722.value === true && this._permissionService["updatePermissionPoint"](new t.WorkbookMoveSheetPermission(var_core_value_sig062A).id, false), var_core_value_sigE722.subType === L.UnitAction["HideSheet"] && var_core_value_sigE722.value === true && this._permissionService["updatePermissionPoint"](new t["WorkbookHideSheetPermission"](var_core_value_sig062A).id, false), var_core_value_sigE722.subType === L.UnitAction["Comment"] && var_core_value_sigE722.value === true && this._permissionService["updatePermissionPoint"](new t["WorkbookEditablePermission"](var_core_value_sig062A).id, false), var_core_value_sigE722.subType === L.UnitAction["FloatImg"] && var_core_value_sigE722.value === true && this._permissionService["updatePermissionPoint"](new t["WorkbookEditablePermission"](var_core_value_sig062A).id, false));
    })), this._registerHeader(), this._registerLoadingMask();
    let var_core_value_sig2D8D = null;
    this.disposeWithMe((0, e.toDisposable)(() => var_core_value_sig2D8D == null ? undefined : var_core_value_sig2D8D.dispose())), this.disposeWithMe(this._historyManagerService["loadingState$"].subscribe(var_core_value_sig050A => {
      var_core_value_sig2D8D == null || var_core_value_sig2D8D.dispose(), var_core_value_sig2D8D = null, var_core_value_sig050A === "loading" && (var_core_value_sig2D8D = this._messageService["show"]({
        type: m.MessageType["Info"],
        content: this._localeService["t"]("sheets-history-ui.viewer.info.loading"),
        duration: 1000
      }));
    }));
  }
  _registerHeader() {
    var var_core_value_sigE5A6;
    (var_core_value_sigE5A6 = this._configService["getConfig"]("sheets-history-ui.config")) != null && var_core_value_sigE5A6.historyPanelHidden || this.disposeWithMe(this._uiPartsService["registerComponent"](N.BuiltInUIPart["HEADER"], () => (0, N.connectInjector)(je, this._injector)));
  }
  _registerLoadingMask() {
    this.disposeWithMe(this._uiPartsService["registerComponent"](N.BuiltInUIPart["GLOBAL"], () => (0, N.connectInjector)(Ae, this._injector)));
  }
};
Me = W([U(0, e.IPermissionService), U(1, N.IUIPartsService), U(2, N.IMessageService), U(3, (0, e.Inject)(e.LocaleService)), U(4, (0, e.Inject)(q)), U(5, (0, e.Inject)(e.Injector)), U(6, e.IConfigService)], Me);
const Ne = {
  insert: "green.800",
  delete: "red.800",
  update: "blue.800"
};
let Pe = class extends e.Disposable {
  constructor(var_core_value_sigF449) {
    super(), this._themeService = var_core_value_sigF449, H(this, "_palette$", undefined), H(this, "palette$", undefined), this._palette$ = new P["BehaviorSubject"](this._createPalette()), this.palette$ = this._palette$["asObservable"](), this.disposeWithMe(this._themeService["currentTheme$"].pipe((0, P.skip)(1)).subscribe(() => {
      this._palette$["next"](this._createPalette());
    })), this.disposeWithMe((0, e.toDisposable)(() => this._palette$["complete"]()));
  }
  _createPalette() {
    return {
      insert: this._createStyle("insert"),
      delete: this._createStyle("delete"),
      update: this._createStyle("update")
    };
  }
  _createStyle(var_core_value_sig38C5) {
    let var_core_value_sigC87D = this._themeService["getColorFromTheme"](Ne[var_core_value_sig38C5]);
    return {
      fill: new e["ColorKit"](var_core_value_sigC87D).setAlpha(0.5).toRgbString(),
      stroke: new e.ColorKit(var_core_value_sigC87D).setAlpha(0.9).toRgbString()
    };
  }
};
Pe = W([U(0, (0, e.Inject)(e.ThemeService))], Pe);
var Fe = class extends y.Shape {
  constructor(var_core_value_sigCCDC, var_core_value_sigC310) {
    super(var_core_value_sigCCDC, var_core_value_sigC310), H(this, "_color", undefined), H(this, "_direction", undefined), H(this, "_highlight", false), H(this, "_highlightSecond", 4), H(this, "_blinkTimer", undefined), H(this, "_blinkIntervalTimer", undefined), H(this, "_isBlinkVisible", true), this._color = var_core_value_sigC310.color, this._direction = var_core_value_sigC310.direction, this.setShapeProps(var_core_value_sigC310), var_core_value_sigC310.highlight && this._startBlinking(var_core_value_sigC310.highlightSecond ?? this._highlightSecond);
  }
  setShapeProps(var_core_value_sigA4E8) {
    this._color = var_core_value_sigA4E8.color ?? this._color, this._direction = var_core_value_sigA4E8.direction ?? this._direction, this._highlight = var_core_value_sigA4E8.highlight ?? this._highlight, this._highlightSecond = var_core_value_sigA4E8.highlightSecond ?? this._highlightSecond, this.transformByState({
      width: var_core_value_sigA4E8.width ?? this.width,
      height: var_core_value_sigA4E8.height ?? this.height
    });
  }
  triggerDblclick(var_core_value_sigDC07) {
    return false;
  }
  dispose() {
    this._stopBlinking(), super.dispose();
  }
  _draw(var_core_value_sig3474) {
    var_core_value_sig3474.save(), var_core_value_sig3474.globalAlpha = this._highlight && !this._isBlinkVisible ? 0.25 : 1, var_core_value_sig3474.strokeStyle = this._color, var_core_value_sig3474.fillStyle = this._color, var_core_value_sig3474.lineWidth = 4, this._direction === "horizontal" ? this._drawHorizontalArrow(var_core_value_sig3474) : this._drawVerticalArrow(var_core_value_sig3474), var_core_value_sig3474.restore();
  }
  _startBlinking(var_core_value_sig4E80) {
    this._stopBlinking(), this._isBlinkVisible = true, this._blinkIntervalTimer = window.setInterval(() => {
      this._isBlinkVisible = !this._isBlinkVisible, this.makeDirty(true);
    }, 500), this._blinkTimer = window.setTimeout(() => {
      this._stopBlinking(), this._isBlinkVisible = true, this.makeDirty(true);
    }, var_core_value_sig4E80 * 1000);
  }
  _stopBlinking() {
    this._blinkIntervalTimer !== undefined && (window.clearInterval(this._blinkIntervalTimer), this._blinkIntervalTimer = undefined), this._blinkTimer !== undefined && (window.clearTimeout(this._blinkTimer), this._blinkTimer = undefined);
  }
  _drawHorizontalArrow(var_core_value_sigD23B) {
    let var_core_value_sig2B2A = this.height / 2;
    var_core_value_sigD23B.beginPath(), var_core_value_sigD23B.moveTo(12, var_core_value_sig2B2A), var_core_value_sigD23B.lineTo(this.width - 12, var_core_value_sig2B2A), var_core_value_sigD23B.stroke(), var_core_value_sigD23B.beginPath(), var_core_value_sigD23B.moveTo(0, var_core_value_sig2B2A), var_core_value_sigD23B.lineTo(12, var_core_value_sig2B2A - 12 / 2), var_core_value_sigD23B.lineTo(12, var_core_value_sig2B2A + 12 / 2), var_core_value_sigD23B.closePath(), var_core_value_sigD23B.fill(), var_core_value_sigD23B.beginPath(), var_core_value_sigD23B.moveTo(this.width, var_core_value_sig2B2A), var_core_value_sigD23B.lineTo(this.width - 12, var_core_value_sig2B2A - 12 / 2), var_core_value_sigD23B.lineTo(this.width - 12, var_core_value_sig2B2A + 12 / 2), var_core_value_sigD23B.closePath(), var_core_value_sigD23B.fill();
  }
  _drawVerticalArrow(var_core_value_sig0B5C) {
    let var_core_value_sig7D42 = this.width / 2;
    var_core_value_sig0B5C.beginPath(), var_core_value_sig0B5C.moveTo(var_core_value_sig7D42, 12), var_core_value_sig0B5C.lineTo(var_core_value_sig7D42, this.height - 12), var_core_value_sig0B5C.stroke(), var_core_value_sig0B5C.beginPath(), var_core_value_sig0B5C.moveTo(var_core_value_sig7D42, 0), var_core_value_sig0B5C.lineTo(var_core_value_sig7D42 - 12 / 2, 12), var_core_value_sig0B5C.lineTo(var_core_value_sig7D42 + 12 / 2, 12), var_core_value_sig0B5C.closePath(), var_core_value_sig0B5C.fill(), var_core_value_sig0B5C.beginPath(), var_core_value_sig0B5C.moveTo(var_core_value_sig7D42, this.height), var_core_value_sig0B5C.lineTo(var_core_value_sig7D42 - 12 / 2, this.height - 12), var_core_value_sig0B5C.lineTo(var_core_value_sig7D42 + 12 / 2, this.height - 12), var_core_value_sig0B5C.closePath(), var_core_value_sig0B5C.fill();
  }
};
let Ie = class extends e.Disposable {
  constructor(var_core_value_sig8FDE, var_core_value_sig78E6, var_core_value_sig541F, var_core_value_sig417B, var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sig9940, var_core_value_sig682D, var_core_value_sig1435, var_core_value_sig4082) {
    super(), this._context = var_core_value_sig8FDE, this._historyManagerService = var_core_value_sig78E6, this._versionDiffService = var_core_value_sig541F, this._univerInstanceService = var_core_value_sig417B, this._renderManagerService = var_core_value_sigAA90, this._sheetSkeletonManagerService = var_core_value_sigE92D, this._commandService = var_core_value_sig9940, this._drawingManagerService = var_core_value_sig682D, this._localeService = var_core_value_sig1435, this._diffColorService = var_core_value_sig4082, H(this, "_diffs", new Set()), H(this, "_borderDiffs", new Set()), H(this, "_arrowDiffs", new Set()), H(this, "_lastPointer", null), H(this, "_pointerMoveSubscription", null), this._init();
  }
  _init() {
    this._initRender(), this._initActiveSwitch();
  }
  _initRender() {
    this._initDiffRender(), this._initPointerEvents();
  }
  _initDiffRender() {
    this.disposeWithMe((0, P.combineLatest)([this._historyManagerService["loadingState$"], this._sheetSkeletonManagerService["currentSkeleton$"], this._diffColorService["palette$"]]).pipe((0, P.switchMap)(([var_core_value_sig8B32, var_core_value_sig870F, var_core_value_sigB683]) => {
      if (var_core_value_sig8B32 === "loaded" && var_core_value_sig870F) {
        let var_core_value_sigFD0C = var_core_value_sig870F.sheetId;
        return this._versionDiffService["currentVersionDiff$"].pipe((0, P.map)(var_core_value_sig7B2A => var_core_value_sig7B2A.subUnitIds["length"] === 0 || var_core_value_sig7B2A.subUnitIds["includes"](var_core_value_sigFD0C) ? {
          skeleton: var_core_value_sig870F,
          versionDiff: var_core_value_sig7B2A,
          sheetID: var_core_value_sigFD0C,
          palette: var_core_value_sigB683
        } : {
          skeleton: var_core_value_sig870F,
          versionDiff: null,
          palette: var_core_value_sigB683
        }));
      }
      return (0, P.of)({
        skeleton: null,
        versionDiff: null,
        sheetID: null,
        palette: var_core_value_sigB683
      });
    })).subscribe(({
      skeleton: var_core_value_sig26EC,
      versionDiff: var_core_value_sigEEDB,
      sheetID: var_core_value_sig36E7,
      palette: var_core_value_sig6A78
    }) => {
      this._removeDiffMarks(), var_core_value_sig26EC && var_core_value_sigEEDB && var_core_value_sig36E7 && this._updateDiffMarks(var_core_value_sig26EC, var_core_value_sigEEDB, var_core_value_sig36E7, var_core_value_sig6A78);
    }));
  }
  _initPointerEvents() {
    this.disposeWithMe(this._sheetSkeletonManagerService["currentSkeleton$"].subscribe(var_core_value_sigF7EF => {
      var var_core_value_sig27F9;
      if ((var_core_value_sig27F9 = this._pointerMoveSubscription) == null || var_core_value_sig27F9.unsubscribe(), this._pointerMoveSubscription = null, this._lastPointer = null, var_core_value_sigF7EF == null) return;
      let {
          skeleton: var_core_value_sig393E
        } = var_core_value_sigF7EF,
        {
          scene: var_core_value_sigB609
        } = this._context;
      this._pointerMoveSubscription = var_core_value_sigB609.onPointerMove$["subscribeEvent"]((0, e.debounce)(var_core_value_sig849B => {
        var var_core_value_sig5F1A, var_core_value_sigB455;
        let {
            offsetX: var_core_value_sig5241,
            offsetY: var_core_value_sigC6E5
          } = var_core_value_sig849B,
          {
            x: var_core_value_sigCEFB,
            y: var_core_value_sig1537
          } = var_core_value_sigB609.getCoordRelativeToViewport(y.Vector2["FromArray"]([var_core_value_sig5241, var_core_value_sigC6E5])),
          {
            scaleX: var_core_value_sigE4C6,
            scaleY: var_core_value_sig4313
          } = var_core_value_sigB609.getAncestorScale(),
          var_core_value_sigFC87 = var_core_value_sigB609.getViewport(y.SHEET_VIEWPORT_KEY["VIEW_MAIN"]),
          var_core_value_sig156F = var_core_value_sigB609.getScrollXYInfoByViewport(y.Vector2["FromArray"]([var_core_value_sigCEFB, var_core_value_sig1537]), var_core_value_sigFC87),
          var_core_value_sigDD51 = var_core_value_sig393E.getCellIndexByOffset(var_core_value_sig5241, var_core_value_sigC6E5, var_core_value_sigE4C6, var_core_value_sig4313, var_core_value_sig156F);
        (((var_core_value_sig5F1A = this._lastPointer) == null ? undefined : var_core_value_sig5F1A.column) !== var_core_value_sigDD51.column || ((var_core_value_sigB455 = this._lastPointer) == null ? undefined : var_core_value_sigB455.row) !== var_core_value_sigDD51.row) && (this._lastPointer = var_core_value_sigDD51, this._diffs["forEach"](var_core_value_sig06CD => {
          var_core_value_sig06CD.evented || var_core_value_sig06CD.onMouseMove(var_core_value_sigDD51);
        }));
      }, 100));
    }));
  }
  _initActiveSwitch() {
    this.disposeWithMe((0, P.combineLatest)([this._historyManagerService["loadingState$"], this._versionDiffService["currentVersionDiff$"]]).subscribe(([var_core_value_sig390D, var_core_value_sigC928]) => {
      var_core_value_sig390D === "loaded" && (this._updateWorksheetVisibility(var_core_value_sigC928.subUnitIds), var_core_value_sigC928.active && this._commandService["syncExecuteCommand"](t.SetWorksheetActiveOperation["id"], {
        unitId: this._context["unitId"],
        subUnitId: var_core_value_sigC928.active
      }));
    }));
  }
  _updateWorksheetVisibility(var_core_value_sigC049) {
    let var_core_value_sigE5C3 = this._univerInstanceService["getUnit"](this._context["unitId"], e.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sigE5C3) return;
    let var_core_value_sigCCAA = var_core_value_sigE5C3.getSheets();
    if (var_core_value_sigC049.length === 0) {
      var_core_value_sigCCAA.forEach(var_core_value_sigF057 => {
        var_core_value_sigF057.isSheetHidden() && this._setWorksheetVisibility(var_core_value_sigF057.getSheetId(), e.BooleanNumber["FALSE"]);
      });
      return;
    }
    var_core_value_sigCCAA.forEach(var_core_value_sig39B7 => {
      let var_core_value_sig18E01 = var_core_value_sig39B7.getSheetId(),
        var_core_value_sigE161 = var_core_value_sigC049.includes(var_core_value_sig18E01),
        var_core_value_sigBDEE = var_core_value_sig39B7.isSheetHidden();
      var_core_value_sigE161 && var_core_value_sigBDEE ? this._setWorksheetVisibility(var_core_value_sig18E01, e.BooleanNumber["FALSE"]) : !var_core_value_sigE161 && !var_core_value_sigBDEE && this._setWorksheetVisibility(var_core_value_sig18E01, e.BooleanNumber["TRUE"]);
    });
  }
  _setWorksheetVisibility(var_core_value_sigF32D, var_core_value_sig9427) {
    this._commandService["syncExecuteCommand"](t.SetWorksheetHideMutation["id"], {
      unitId: this._context["unitId"],
      subUnitId: var_core_value_sigF32D,
      hidden: var_core_value_sig9427
    });
  }
  _getLabelHorizontalPosition() {
    return this._localeService["getDirection"]() === "rtl" ? "left" : "right";
  }
  _updateDiffMarks(var_core_value_sig21F4, var_core_value_sigA345, var_core_value_sigA468, var_core_value_sig1561) {
    this._diffs["forEach"](var_core_value_sig1F40 => {
      var_core_value_sig1F40.makeDirty();
    });
    let var_core_value_sigDF14 = this._generateDiffMarks(var_core_value_sigA345, var_core_value_sigA468, var_core_value_sig1561);
    this._diffs = new Set(var_core_value_sigDF14.filter(var_core_value_sig3FC7 => var_core_value_sig3FC7 instanceof z.SheetCollabCursorShape)), this._borderDiffs = new Set(var_core_value_sigDF14.filter(var_core_value_sig1E1B => var_core_value_sig1E1B instanceof y.Rect)), this._arrowDiffs = new Set(var_core_value_sigDF14.filter(var_core_value_sig3B10 => var_core_value_sig3B10 instanceof Fe)), var_core_value_sigDF14.length > 0 && this._scrollToShape(var_core_value_sigDF14[0], this._context["scene"]);
  }
  _generateDiffMarks(var_core_value_sig842F, var_core_value_sigC4C0, var_core_value_sig214A) {
    let var_core_value_sigCCC3 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!var_core_value_sigCCC3) return [];
    let {
        scene: var_core_value_sig986E
      } = this._context,
      var_core_value_sig537C = [],
      var_core_value_sigBBBC = var_core_value_sig89E6 => {
        if (!var_core_value_sig89E6) return new Map();
        let var_core_value_sig4743 = new Map();
        return var_core_value_sig89E6.forEach((var_core_value_sig72F6, var_core_value_sig9FBA) => {
          let var_core_value_sigFE01 = var_core_value_sig72F6.filter(var_core_value_sigA5F1 => var_core_value_sigA5F1.subUnitId === var_core_value_sigC4C0);
          var_core_value_sigFE01.length > 0 && var_core_value_sig4743.set(var_core_value_sig9FBA, var_core_value_sigFE01);
        }), var_core_value_sig4743;
      };
    return this._renderCellRanges(var_core_value_sig986E, var_core_value_sigCCC3, var_core_value_sigBBBC(var_core_value_sig842F.insertCellRanges), var_core_value_sig214A.insert["fill"], var_core_value_sig537C), this._renderCellRanges(var_core_value_sig986E, var_core_value_sigCCC3, var_core_value_sigBBBC(var_core_value_sig842F.deleteCellRanges), var_core_value_sig214A.delete["fill"], var_core_value_sig537C), this._renderCellRanges(var_core_value_sig986E, var_core_value_sigCCC3, var_core_value_sigBBBC(var_core_value_sig842F.updateCellRanges), var_core_value_sig214A.update["fill"], var_core_value_sig537C), this._renderBorderRanges(var_core_value_sig986E, var_core_value_sigCCC3, var_core_value_sigBBBC(var_core_value_sig842F.insertBorderRanges), var_core_value_sig214A.insert["stroke"], var_core_value_sig537C), this._renderBorderRanges(var_core_value_sig986E, var_core_value_sigCCC3, var_core_value_sigBBBC(var_core_value_sig842F.deleteBorderRanges), var_core_value_sig214A.delete["stroke"], var_core_value_sig537C), this._renderBorderRanges(var_core_value_sig986E, var_core_value_sigCCC3, var_core_value_sigBBBC(var_core_value_sig842F.updateBorderRanges), var_core_value_sig214A.update["stroke"], var_core_value_sig537C), this._renderArrowRanges(var_core_value_sig986E, var_core_value_sigCCC3, var_core_value_sigBBBC(var_core_value_sig842F.arrowRowRanges), var_core_value_sig214A.update["fill"], "vertical", var_core_value_sig537C), this._renderArrowRanges(var_core_value_sig986E, var_core_value_sigCCC3, var_core_value_sigBBBC(var_core_value_sig842F.arrowColumnRanges), var_core_value_sig214A.update["fill"], "horizontal", var_core_value_sig537C), var_core_value_sig842F.insertDrawings && this._renderDrawingHighlights(var_core_value_sig986E, var_core_value_sig842F.insertDrawings, var_core_value_sig214A.insert["stroke"], var_core_value_sig537C), var_core_value_sig842F.deleteDrawings && this._renderDrawingHighlights(var_core_value_sig986E, var_core_value_sig842F.deleteDrawings, var_core_value_sig214A.delete["stroke"], var_core_value_sig537C), var_core_value_sig842F.updateDrawings && this._renderDrawingHighlights(var_core_value_sig986E, var_core_value_sig842F.updateDrawings, var_core_value_sig214A.update["stroke"], var_core_value_sig537C), this._handleOverlappingShapes(var_core_value_sig537C), var_core_value_sig986E.addObjects(var_core_value_sig537C, 20), var_core_value_sig537C;
  }
  hideDiffMarks() {
    this._diffs["forEach"](var_core_value_sigEB6A => {
      var_core_value_sigEB6A.hide();
    }), this._borderDiffs["forEach"](var_core_value_sig3D46 => {
      var_core_value_sig3D46.hide();
    }), this._arrowDiffs["forEach"](var_core_value_sigCC93 => {
      var_core_value_sigCC93.hide();
    });
  }
  showDiffMarks() {
    this._diffs["forEach"](var_core_value_sig5964 => {
      var_core_value_sig5964.show();
    }), this._borderDiffs["forEach"](var_core_value_sig808B => {
      var_core_value_sig808B.show();
    }), this._arrowDiffs["forEach"](var_core_value_sig2A26 => {
      var_core_value_sig2A26.show();
    });
  }
  removeDiffMarks() {
    this._removeDiffMarks();
  }
  scrollToShape(var_core_value_sig5440, var_core_value_sigE28B) {
    this._scrollToShape(var_core_value_sig5440, var_core_value_sigE28B);
  }
  _renderCellRanges(var_core_value_sig0FD9, var_core_value_sig5649, var_core_value_sigAF82, var_core_value_sig21A2, var_core_value_sig5C1D) {
    var_core_value_sigAF82.forEach((var_core_value_sig1179, var_core_value_sigEA92) => {
      var_core_value_sig1179.forEach(var_core_value_sigA2CE => {
        var var_core_value_sig1975;
        let {
            range: var_core_value_sig6EA1,
            subUnitId: var_core_value_sig029F,
            unitId: var_core_value_sig3767,
            showText: var_core_value_sigE235 = "",
            highlightColumn: var_core_value_sig670B,
            highlightRow: var_core_value_sig6912
          } = var_core_value_sigA2CE,
          {
            startColumn: var_core_value_sig7664,
            startRow: var_core_value_sig2281,
            endColumn: var_core_value_sig5E86,
            endRow: var_core_value_sig6998
          } = var_core_value_sig6EA1,
          var_core_value_sigF639 = (0, M.getCoordByCell)(var_core_value_sig2281, var_core_value_sig7664, var_core_value_sig0FD9, var_core_value_sig5649),
          var_core_value_sigEAE5 = (0, M.getCoordByCell)(var_core_value_sig6998, var_core_value_sig5E86, var_core_value_sig0FD9, var_core_value_sig5649),
          {
            columnHeaderHeightAndMarginTop: var_core_value_sigE94C
          } = var_core_value_sig5649,
          {
            startX: var_core_value_sig6D47,
            startY: var_core_value_sigCB82
          } = var_core_value_sigF639,
          {
            endX: var_core_value_sigCF4E,
            endY: var_core_value_sig6CAD
          } = var_core_value_sigEAE5,
          var_core_value_sig8CF5 = var_core_value_sig5649.rowHeaderWidth,
          var_core_value_sigDDD7 = var_core_value_sig5649.columnHeaderHeight;
        var_core_value_sig6912 && (var_core_value_sig6D47 -= var_core_value_sig8CF5), var_core_value_sig670B && (var_core_value_sigCB82 -= var_core_value_sigDDD7);
        let var_core_value_sigB2CE = var_core_value_sigCF4E - var_core_value_sig6D47,
          var_core_value_sig443C = var_core_value_sig6CAD - var_core_value_sigCB82,
          var_core_value_sig39B1 = {
            labelPosition: var_core_value_sigCB82 - var_core_value_sigE94C >= 20 ? "top" : "bottom",
            sheetID: var_core_value_sig029F,
            range: var_core_value_sig6EA1,
            color: var_core_value_sig21A2,
            fillAfterStrokeEnabled: true,
            backgroundColor: var_core_value_sig21A2,
            name: ((var_core_value_sig1975 = this._historyManagerService["getMember"](var_core_value_sigEA92)) == null ? undefined : var_core_value_sig1975.name) + "\x20" + var_core_value_sigE235 || var_core_value_sigE235,
            labelHorizontalPosition: this._getLabelHorizontalPosition(),
            selection: var_core_value_sig3767 + "-" + var_core_value_sig029F + "-" + var_core_value_sig6EA1.startColumn + "-" + var_core_value_sig6EA1.startRow + "-" + var_core_value_sig6EA1.endColumn + "-" + var_core_value_sig6EA1.endRow,
            left: var_core_value_sig6D47,
            top: var_core_value_sigCB82,
            width: var_core_value_sigB2CE,
            height: var_core_value_sig443C,
            evented: false,
            zIndex: 1000,
            highlight: true
          };
        var_core_value_sig5C1D.push(new z["SheetCollabCursorShape"]("", var_core_value_sig39B1));
      });
    });
  }
  _renderBorderRanges(var_core_value_sig4CBA, var_core_value_sig8E65, var_core_value_sig772C, var_core_value_sigF309, var_core_value_sig44F9) {
    var_core_value_sig772C.forEach((var_core_value_sig8FD9, var_core_value_sig1AE5) => {
      var_core_value_sig8FD9.forEach(var_core_value_sig210D => {
        var var_core_value_sigB4B4;
        let {
            range: var_core_value_sigD407,
            subUnitId: var_core_value_sig63F3,
            unitId: var_core_value_sig6A71,
            showText: var_core_value_sig3BF6 = ""
          } = var_core_value_sig210D,
          {
            startColumn: var_core_value_sig38CE,
            startRow: var_core_value_sig62B7,
            endColumn: var_core_value_sig37A8,
            endRow: var_core_value_sigA90D
          } = var_core_value_sigD407,
          var_core_value_sig7A3C = (0, M.getCoordByCell)(var_core_value_sig62B7, var_core_value_sig38CE, var_core_value_sig4CBA, var_core_value_sig8E65),
          var_core_value_sig0511 = (0, M.getCoordByCell)(var_core_value_sigA90D, var_core_value_sig37A8, var_core_value_sig4CBA, var_core_value_sig8E65),
          {
            columnHeaderHeightAndMarginTop: var_core_value_sig1F44
          } = var_core_value_sig8E65,
          {
            startX: var_core_value_sigCB04,
            startY: var_core_value_sig947E
          } = var_core_value_sig7A3C,
          {
            endX: var_core_value_sig4545,
            endY: var_core_value_sigF39A
          } = var_core_value_sig0511,
          var_core_value_sigF79C = var_core_value_sig4545 - var_core_value_sigCB04,
          var_core_value_sig2E54 = var_core_value_sigF39A - var_core_value_sig947E,
          var_core_value_sig7658 = {
            labelPosition: var_core_value_sig947E - var_core_value_sig1F44 >= 20 ? "top" : "bottom",
            sheetID: var_core_value_sig63F3,
            range: var_core_value_sigD407,
            color: var_core_value_sigF309,
            fillAfterStrokeEnabled: false,
            backgroundColor: "transparent",
            name: ((var_core_value_sigB4B4 = this._historyManagerService["getMember"](var_core_value_sig1AE5)) == null ? undefined : var_core_value_sigB4B4.name) + "\x20" + var_core_value_sig3BF6 || var_core_value_sig3BF6,
            labelHorizontalPosition: this._getLabelHorizontalPosition(),
            selection: var_core_value_sig6A71 + "-" + var_core_value_sig63F3 + "-" + var_core_value_sigD407.startColumn + "-" + var_core_value_sigD407.startRow + "-" + var_core_value_sigD407.endColumn + "-" + var_core_value_sigD407.endRow,
            left: var_core_value_sigCB04 - 12 / 2,
            top: var_core_value_sig947E - 12 / 2,
            width: var_core_value_sigF79C,
            height: var_core_value_sig2E54,
            evented: false,
            zIndex: 1000,
            strokeWidth: 12,
            highlight: true
          };
        var_core_value_sig44F9.push(new z.SheetCollabCursorShape("", var_core_value_sig7658));
      });
    });
  }
  _renderArrowRanges(var_core_value_sigE532, var_core_value_sigF381, var_core_value_sigCB92, var_core_value_sigC844, var_core_value_sig2ED4, var_core_value_sig0477) {
    let var_core_value_sig6FDF = var_core_value_sigF381.rowHeaderWidth,
      var_core_value_sig27C4 = var_core_value_sigF381.columnHeaderHeight;
    var_core_value_sigCB92.forEach(var_core_value_sig7100 => {
      var_core_value_sig7100.forEach(var_core_value_sigDCF5 => {
        let {
            range: var_core_value_sigC786
          } = var_core_value_sigDCF5,
          {
            startColumn: var_core_value_sigC0D9,
            startRow: var_core_value_sigF0511,
            endColumn: var_core_value_sig5825,
            endRow: var_core_value_sig4EB7
          } = var_core_value_sigC786,
          var_core_value_sig73AF = (0, M.getCoordByCell)(var_core_value_sigF0511, var_core_value_sigC0D9, var_core_value_sigE532, var_core_value_sigF381),
          var_core_value_sig548A = (0, M.getCoordByCell)(var_core_value_sig4EB7, var_core_value_sig5825, var_core_value_sigE532, var_core_value_sigF381),
          {
            startX: var_core_value_sigE026,
            startY: var_core_value_sig339E
          } = var_core_value_sig73AF,
          {
            endX: var_core_value_sig7550,
            endY: var_core_value_sig2983
          } = var_core_value_sig548A,
          var_core_value_sigE1B0;
        if (var_core_value_sig2ED4 === "horizontal") var_core_value_sigE1B0 = new Fe("", {
          color: var_core_value_sigC844,
          direction: "horizontal",
          left: var_core_value_sigE026,
          top: 2,
          width: var_core_value_sig7550 - var_core_value_sigE026,
          height: var_core_value_sig27C4 - 4,
          evented: false,
          zIndex: 1001,
          highlight: true,
          highlightSecond: 4
        }), var_core_value_sig0477.push(var_core_value_sigE1B0);else {
          let var_core_value_sig97A2 = var_core_value_sig2983 - var_core_value_sig339E;
          var_core_value_sigE1B0 = new Fe("", {
            color: var_core_value_sigC844,
            direction: "vertical",
            left: 2,
            top: var_core_value_sig339E,
            width: var_core_value_sig6FDF - 4,
            height: var_core_value_sig97A2,
            evented: false,
            zIndex: 1001,
            highlight: true,
            highlightSecond: 4
          }), var_core_value_sig0477.push(var_core_value_sigE1B0);
        }
      });
    });
  }
  _renderDrawingHighlights(var_core_value_sig3E1A, var_core_value_sig7FB0, var_core_value_sig5215, var_core_value_sig5204) {
    let var_core_value_sig5E11 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!var_core_value_sig5E11) return;
    let {
      columnHeaderHeightAndMarginTop: var_core_value_sig4D58
    } = var_core_value_sig5E11;
    var_core_value_sig7FB0.forEach((var_core_value_sigA19A, var_core_value_sigD3F5) => {
      var_core_value_sigA19A.forEach(var_core_value_sigD4FF => {
        let var_core_value_sig1E5B = this._createDrawingHighlight(var_core_value_sigD4FF, var_core_value_sigD3F5, var_core_value_sig5215, var_core_value_sig4D58, 12, var_core_value_sig5204);
        var_core_value_sig1E5B && var_core_value_sig5204.push(var_core_value_sig1E5B);
      });
    });
  }
  _createDrawingHighlight(var_core_value_sig2DBD, var_core_value_sig424E, var_core_value_sigF481, var_core_value_sigD7F2, var_core_value_sig7CF3, var_core_value_sig9DC6) {
    var var_core_value_sig6643;
    let {
        drawingId: var_core_value_sig4124,
        unitId: var_core_value_sigBF1C,
        subUnitId: var_core_value_sigEEEF,
        showText: var_core_value_sig9A01 = ""
      } = var_core_value_sig2DBD,
      var_core_value_sig674F = this._drawingManagerService["getDrawingByParam"]({
        unitId: var_core_value_sigBF1C,
        subUnitId: var_core_value_sigEEEF,
        drawingId: var_core_value_sig4124
      });
    if (!(var_core_value_sig674F != null && var_core_value_sig674F.transform)) return null;
    let {
        left: var_core_value_sigD073 = 0,
        top: var_core_value_sigF631 = 0,
        width: var_core_value_sigC8F6,
        height: var_core_value_sig8A26
      } = var_core_value_sig674F.transform,
      var_core_value_sig2278 = new z["SheetCollabCursorShape"]("", {
        labelPosition: var_core_value_sigF631 - var_core_value_sigD7F2 >= 20 ? "top" : "bottom",
        sheetID: var_core_value_sigEEEF,
        range: {
          startRow: 0,
          startColumn: 0,
          endRow: 0,
          endColumn: 0
        },
        color: var_core_value_sigF481,
        fillAfterStrokeEnabled: false,
        backgroundColor: "transparent",
        name: ((var_core_value_sig6643 = this._historyManagerService["getMember"](var_core_value_sig424E)) == null ? undefined : var_core_value_sig6643.name) + "\x20" + var_core_value_sig9A01 || var_core_value_sig9A01,
        labelHorizontalPosition: this._getLabelHorizontalPosition(),
        selection: var_core_value_sigBF1C + "-" + var_core_value_sigEEEF + "-drawing-" + var_core_value_sig4124,
        left: var_core_value_sigD073 - var_core_value_sig7CF3 / 2,
        top: var_core_value_sigF631 - var_core_value_sig7CF3 / 2,
        width: var_core_value_sigC8F6,
        height: var_core_value_sig8A26,
        evented: true,
        zIndex: 1000,
        strokeWidth: var_core_value_sig7CF3,
        highlight: true
      });
    return this._bindDrawingHighlightHover(var_core_value_sig2278, var_core_value_sig9DC6), var_core_value_sig2278;
  }
  _bindDrawingHighlightHover(var_core_value_sig7053, var_core_value_sig52F1) {
    var_core_value_sig7053.onPointerEnter$["subscribeEvent"](() => this._setOverlappingShapesHovered(var_core_value_sig7053, var_core_value_sig52F1, true)), var_core_value_sig7053.onPointerLeave$["subscribeEvent"](() => this._setOverlappingShapesHovered(var_core_value_sig7053, var_core_value_sig52F1, false));
  }
  _setOverlappingShapesHovered(var_core_value_sig1E74, var_core_value_sig1E84, var_core_value_sig133B) {
    this._findOverlappingShapes(var_core_value_sig1E74, var_core_value_sig1E84).forEach(var_core_value_sig3082 => {
      var_core_value_sig3082 instanceof z.SheetCollabCursorShape && var_core_value_sig3082.setShapeProps({
        hovered: var_core_value_sig133B
      });
    });
  }
  _removeDiffMarks() {
    this._diffs["forEach"](var_core_value_sigF5D1 => var_core_value_sigF5D1.dispose()), this._borderDiffs["forEach"](var_core_value_sig8775 => var_core_value_sig8775.dispose()), this._arrowDiffs["forEach"](var_core_value_sig481B => var_core_value_sig481B.dispose()), this._diffs["clear"](), this._borderDiffs["clear"](), this._arrowDiffs["clear"]();
  }
  _handleOverlappingShapes(var_core_value_sig69B8) {
    let var_core_value_sig983D = var_core_value_sig69B8.filter(var_core_value_sig13D7 => var_core_value_sig13D7 instanceof z.SheetCollabCursorShape);
    if (var_core_value_sig983D.length === 0) return;
    let var_core_value_sig9A03 = [],
      var_core_value_sig3363 = new Set();
    var_core_value_sig983D.forEach(var_core_value_sig90C0 => {
      if (var_core_value_sig3363.has(var_core_value_sig90C0)) return;
      let var_core_value_sigF1B2 = var_core_value_sig90C0.left || 0,
        var_core_value_sigC2BB = var_core_value_sig90C0.top || 0,
        var_core_value_sigD9DB = var_core_value_sigF1B2 + (var_core_value_sig90C0.width || 0),
        var_core_value_sigA363 = var_core_value_sigC2BB,
        var_core_value_sigFBA5 = [var_core_value_sig90C0];
      var_core_value_sig3363.add(var_core_value_sig90C0), var_core_value_sig983D.forEach(var_core_value_sigB680 => {
        if (var_core_value_sig3363.has(var_core_value_sigB680)) return;
        let var_core_value_sig1F64 = var_core_value_sigB680.left || 0,
          var_core_value_sigDD1C = var_core_value_sigB680.top || 0,
          var_core_value_sig2C39 = var_core_value_sig1F64 + (var_core_value_sigB680.width || 0),
          var_core_value_sigB7D1 = var_core_value_sigDD1C;
        Math.abs(var_core_value_sigD9DB - var_core_value_sig2C39) <= 10 && Math.abs(var_core_value_sigA363 - var_core_value_sigB7D1) <= 10 && (var_core_value_sigFBA5.push(var_core_value_sigB680), var_core_value_sig3363.add(var_core_value_sigB680));
      }), var_core_value_sigFBA5.length > 1 && var_core_value_sig9A03.push(var_core_value_sigFBA5);
    }), var_core_value_sig9A03.forEach(var_core_value_sigAC47 => {
      var_core_value_sigAC47.sort((var_core_value_sig64F0, var_core_value_sig85B1) => (var_core_value_sig64F0.top || 0) - (var_core_value_sig85B1.top || 0)), var_core_value_sigAC47.forEach((var_core_value_sig3141, var_core_value_sig2162) => {
        let var_core_value_sig2EAD = var_core_value_sig2162 * 22;
        var_core_value_sig3141.setOffsetY(var_core_value_sig2EAD);
      });
    });
  }
  _findOverlappingShapes(var_core_value_sigF64A, var_core_value_sig25EC) {
    let var_core_value_sigA790 = var_core_value_sigF64A.left || 0,
      var_core_value_sig9A5E = var_core_value_sigF64A.top || 0,
      var_core_value_sig01B9 = var_core_value_sigF64A.width || 0,
      var_core_value_sigD6A9 = var_core_value_sigF64A.height || 0,
      var_core_value_sig0FCF = var_core_value_sigA790 + var_core_value_sig01B9,
      var_core_value_sigCF96 = var_core_value_sig9A5E + var_core_value_sigD6A9;
    return var_core_value_sig25EC.filter(var_core_value_sigA06F => {
      let var_core_value_sig770E = var_core_value_sigA06F.left || 0,
        var_core_value_sig4654 = var_core_value_sigA06F.top || 0,
        var_core_value_sigB26B = var_core_value_sigA06F.width || 0,
        var_core_value_sig019B = var_core_value_sigA06F.height || 0,
        var_core_value_sigC6BC = var_core_value_sig770E + var_core_value_sigB26B,
        var_core_value_sig8EC2 = var_core_value_sig4654 + var_core_value_sig019B;
      return !(var_core_value_sig0FCF <= var_core_value_sig770E || var_core_value_sigA790 >= var_core_value_sigC6BC || var_core_value_sigCF96 <= var_core_value_sig4654 || var_core_value_sig9A5E >= var_core_value_sig8EC2);
    });
  }
  _scrollToShape(var_core_value_sigC4E9, var_core_value_sigF612) {
    let var_core_value_sigAA6C = var_core_value_sigF612.getViewport(y.SHEET_VIEWPORT_KEY["VIEW_MAIN"]);
    if (!var_core_value_sigAA6C) return;
    let var_core_value_sig8BFA = var_core_value_sigC4E9.left || 0,
      var_core_value_sig236B = var_core_value_sigC4E9.top || 0,
      var_core_value_sig1951 = var_core_value_sigC4E9.width || 0,
      var_core_value_sigFEA0 = var_core_value_sigC4E9.height || 0,
      var_core_value_sig931A = var_core_value_sigAA6C.width || 0,
      var_core_value_sigEE7D = var_core_value_sigAA6C.height || 0,
      var_core_value_sig3585 = var_core_value_sigAA6C.viewportScrollX || 0,
      var_core_value_sig31A8 = var_core_value_sigAA6C.viewportScrollY || 0,
      var_core_value_sigA4DA = var_core_value_sig3585,
      var_core_value_sig6FC0 = var_core_value_sig31A8,
      var_core_value_sig6217 = var_core_value_sig3585 + var_core_value_sig931A,
      var_core_value_sigB805 = var_core_value_sig31A8 + var_core_value_sigEE7D;
    if (var_core_value_sig8BFA >= var_core_value_sigA4DA && var_core_value_sig236B >= var_core_value_sig6FC0 && var_core_value_sig8BFA + var_core_value_sig1951 <= var_core_value_sig6217 && var_core_value_sig236B + var_core_value_sigFEA0 <= var_core_value_sigB805) return;
    let var_core_value_sig4FAE = Math.max(0, var_core_value_sig8BFA - var_core_value_sig931A / 2 + var_core_value_sig1951 / 2),
      var_core_value_sig1FCC = Math.max(0, var_core_value_sig236B - var_core_value_sigEE7D / 2 + var_core_value_sigFEA0 / 2);
    var_core_value_sigAA6C.scrollToViewportPos({
      viewportScrollX: var_core_value_sig4FAE,
      viewportScrollY: var_core_value_sig1FCC
    });
  }
  _getSheetObject() {
    return (0, M.getSheetObject)(this._univerInstanceService, this._renderManagerService);
  }
  dispose() {
    var var_core_value_sigB7F9;
    (var_core_value_sigB7F9 = this._pointerMoveSubscription) == null || var_core_value_sigB7F9.unsubscribe(), this._pointerMoveSubscription = null, this._removeDiffMarks(), super.dispose();
  }
};
Ie = W([U(1, (0, e.Inject)(q)), U(2, (0, e.Inject)(J)), U(3, e.IUniverInstanceService), U(4, y.IRenderManagerService), U(5, (0, e.Inject)(M.SheetSkeletonManagerService)), U(6, e.ICommandService), U(7, _.IDrawingManagerService), U(8, (0, e.Inject)(e.LocaleService)), U(9, (0, e.Inject)(Pe))], Ie);
let Le = class extends e.Disposable {
  constructor(var_core_value_sigB1A2, var_core_value_sig526D, var_core_value_sigBDB5, var_core_value_sig59CE1) {
    super(), this._sidebarService = var_core_value_sigB1A2, this._localeService = var_core_value_sig526D, this._historyManagerService = var_core_value_sigBDB5, this._configService = var_core_value_sig59CE1, H(this, "_sidebarDisposable", null), this._init();
  }
  _init() {
    this._initPanel();
  }
  _openPanel() {
    var var_core_value_sig3AD7;
    if (this._sidebarDisposable) return;
    let var_core_value_sig04E4 = (var_core_value_sig3AD7 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_core_value_sig3AD7.historyPanelComponentKey,
      var_core_value_sigD8F0 = {
        header: {
          title: this._localeService["t"]("sheets-history-ui.viewer.panel.title")
        },
        children: {
          label: var_core_value_sig04E4
        },
        onClose: () => {
          this._sidebarDisposable = null, this._historyManagerService["exitHistoryMode"]();
        }
      };
    this._sidebarDisposable = this._sidebarService["open"]({
      ...var_core_value_sigD8F0
    });
  }
  _initPanel() {
    this.disposeWithMe(this._historyManagerService["openPanel$"].subscribe(var_core_value_sigA8C3 => {
      var_core_value_sigA8C3 && this._openPanel();
    }));
  }
};
Le = W([U(0, N.ISidebarService), U(1, (0, e.Inject)(e.LocaleService)), U(2, (0, e.Inject)(q)), U(3, e.IConfigService)], Le);
var Re = class extends e.Disposable {
  constructor() {
    super(), H(this, "_dialogOptions$", new P["Subject"]());
  }
  open() {
    return (0, e.toDisposable)(() => {});
  }
  close() {}
  closeAll(var_core_value_sig1475) {}
  getDialogs$() {
    return this._dialogOptions$["asObservable"]();
  }
};
let ze = class extends e.Plugin {
  constructor(var_core_value_sig08B7 = V, var_core_value_sig2008, var_core_value_sig496B, var_core_value_sig7161) {
    super(), this._config = var_core_value_sig08B7, this._injector = var_core_value_sig2008, this._renderManagerService = var_core_value_sig496B, this._configService = var_core_value_sig7161;
    let {
      ...var_core_value_sig2AB8
    } = (0, e.merge)({}, V, this._config);
    this._configService["setConfig"](B, var_core_value_sig2AB8);
  }
  onStarting() {
    [[Y], [q], [Me], [J], [Pe], [G], [Le], [X], [n.ISnapshotServerService, {
      useClass: r.SnapshotServerOverHTTPService
    }], [N.IDialogService, {
      useClass: Re
    }], [e.IImageIoService, {
      useClass: r.CollaborationImageIoService
    }]].forEach(var_core_value_sig5276 => this._injector["add"](var_core_value_sig5276)), this._injector["get"](Me), this._injector["get"](Y);
  }
  onRendered() {
    [[Ie]].forEach(var_core_value_sig031B => {
      this.disposeWithMe(this._renderManagerService["registerRenderModule"](e.UniverInstanceType["UNIVER_SHEET"], var_core_value_sig031B));
    }), this._injector["get"](X), this._injector["get"](Le);
  }
  onSteady() {
    this._injector["get"](J);
  }
};
H(ze, "pluginName", "UNIVER_SHEETS_HISTORY_VIEWER_PLUGIN"), H(ze, "packageName", se), H(ze, "version", ce), ze = W([(0, e.DependentOn)(a.UniverLicensePlugin, _.UniverDrawingPlugin, y.UniverRenderEnginePlugin, b.UniverNetworkPlugin, O.UniverSheetsFilterPlugin, j.UniverSheetsTablePlugin, t.UniverSheetsPlugin, n.UniverCollaborationPlugin, S.UniverSheetsConditionalFormattingPlugin, o.UniverSheetsChartPlugin, c.UniverSheetsPivotTablePlugin, d.UniverSheetSparklinePlugin, M.UniverSheetsUIPlugin, w.UniverSheetsDataValidationPlugin), U(1, (0, e.Inject)(e.Injector)), U(2, y.IRenderManagerService), U(3, e.IConfigService)], ze);
function Be(var_core_value_sig57E2) {
  let var_core_value_sig01FC = var_core_value_sig57E2.getCurrentLocale();
  return {
    locale: var_core_value_sig01FC,
    locales: {
      [var_core_value_sig01FC]: var_core_value_sig57E2.getLocales()
    },
    direction: var_core_value_sig57E2.getDirection()
  };
}
function Ve(var_core_value_sig10FC, var_core_value_sig5374) {
  let var_core_value_sigB66D = var_core_value_sig5374.getDirection();
  var_core_value_sig10FC.dir = var_core_value_sigB66D, var_core_value_sig10FC.style["direction"] = var_core_value_sigB66D;
}
function He(var_core_value_sigD0F0) {
  return Ue(var_core_value_sigD0F0) ? typeof var_core_value_sigD0F0.hasMore == "boolean" && typeof var_core_value_sigD0F0.lastLabel == "string" && Array.isArray(var_core_value_sigD0F0.versions) && Ue(var_core_value_sigD0F0.members) : false;
}
function Ue(var_core_value_sig8E31) {
  return typeof var_core_value_sig8E31 == "object" && !!var_core_value_sig8E31;
}
const We = "univer-history-container";
let Z = class extends e.Disposable {
  constructor(var_core_value_sig3FCF, var_core_value_sig675A, var_core_value_sig837F, var_core_value_sig9D6E, var_core_value_sigB205, var_core_value_sigBF78, var_core_value_sig8AF3, var_core_value_sigA0CC, var_core_value_sigB3A1, var_core_value_sig1FB9) {
    super(), this._localeService = var_core_value_sig3FCF, this._univerInstanceService = var_core_value_sig675A, this._configService = var_core_value_sig837F, this._commandService = var_core_value_sig9D6E, this._messageService = var_core_value_sigB205, this._permissionService = var_core_value_sigBF78, this._selectionProtectionRuleModel = var_core_value_sig8AF3, this._dialogService = var_core_value_sigA0CC, this._sidebarService = var_core_value_sigB3A1, this._themeService = var_core_value_sig1FB9, H(this, "_historyUniver$", new P["BehaviorSubject"](null)), H(this, "historyUniver$", this._historyUniver$["asObservable"]()), H(this, "_disposableCollection", new e.DisposableCollection()), H(this, "_pluginMap", new Map()), H(this, "_internalWebWorker", null), this._init();
  }
  get historyUniver() {
    return this._historyUniver$["value"];
  }
  _init() {
    this._initContainer(), this._initPlugins();
  }
  _initContainer() {
    var var_core_value_sig53A9;
    let var_core_value_sigDACD = this._configService["getConfig"](B),
      var_core_value_sig691E = (var_core_value_sig53A9 = this._configService["getConfig"](N.UI_PLUGIN_CONFIG_KEY)) == null ? undefined : var_core_value_sig53A9.container,
      var_core_value_sigD6D6 = (var_core_value_sigDACD == null ? undefined : var_core_value_sigDACD.univerContainerId) ?? var_core_value_sig691E,
      var_core_value_sig0347 = typeof var_core_value_sigD6D6 == "string" ? document.getElementById(var_core_value_sigD6D6) : var_core_value_sigD6D6;
    if (!var_core_value_sig0347) throw Error("[HistoryLoaderService]: Configure a valid Univer container before opening history.");
    let var_core_value_sig52A3 = document.createElement("div");
    var_core_value_sig52A3.id = We, var_core_value_sig52A3.style["position"] = "absolute", var_core_value_sig52A3.style["top"] = "0", var_core_value_sig52A3.style["left"] = "0", var_core_value_sig52A3.style["width"] = "100%", var_core_value_sig52A3.style["height"] = "100%", var_core_value_sig52A3.style["zIndex"] = "49", var_core_value_sig52A3.style["display"] = "none", Ve(var_core_value_sig52A3, this._localeService), var_core_value_sig0347.appendChild(var_core_value_sig52A3);
  }
  _initPlugins() {
    [[y.UniverRenderEnginePlugin], [N.UniverUIPlugin, {
      container: We,
      header: true,
      toolbar: false,
      footer: true,
      contextMenu: false,
      override: [[N.IDialogService, null]]
    }], [b.UniverNetworkPlugin], [_.UniverDrawingPlugin, {
      override: [[e.IImageIoService, null]]
    }], [h.UniverDocsPlugin, {
      hasScroll: false
    }], [g.UniverDocsUIPlugin], [re.UniverSheetsNumfmtPlugin], [t.UniverSheetsPlugin, {
      notExecuteFormula: true
    }], [M.UniverSheetsUIPlugin], [A.UniverSheetsFormulaPlugin], [ee.UniverSheetsFormulaUIPlugin], [n.UniverCollaborationPlugin], [O.UniverSheetsFilterPlugin], [k.UniverSheetsFilterUIPlugin], [S.UniverSheetsConditionalFormattingPlugin], [C.UniverSheetsConditionalFormattingUIPlugin], [te.UniverSheetsHyperLinkPlugin], [ne.UniverSheetsHyperLinkUIPlugin], [p.UniverDataValidationPlugin], [w.UniverSheetsDataValidationPlugin], [T.UniverSheetsDataValidationUIPlugin], [i.UniverProFormulaEnginePlugin, {
      notExecuteFormula: true
    }], [v.UniverDrawingUIPlugin], [E.UniverSheetsDrawingPlugin], [D.UniverSheetsDrawingUIPlugin], [d.UniverSheetSparklinePlugin], [f.UniverSheetSparklineUIPlugin], [o.UniverSheetsChartPlugin], [s.UniverSheetsChartUIPlugin], [l.UniverSheetsShapePlugin], [u.UniverSheetsShapeUIPlugin], [c.UniverSheetsPivotTablePlugin, {
      notExecuteFormula: true
    }], [j.UniverSheetsTablePlugin]].forEach(([var_core_value_sig9DC0, var_core_value_sig95F0]) => this.registerPlugin(var_core_value_sig9DC0, var_core_value_sig95F0));
  }
  dispose() {
    super.dispose(), this.unMountHistoryContent(), this._pluginMap["clear"]();
  }
  registerPlugin(var_core_value_sigAD91, var_core_value_sigF64E, var_core_value_sig9B3D) {
    if (this._pluginMap["has"](var_core_value_sigAD91.pluginName) && !var_core_value_sig9B3D) throw Error("[HistoryLoaderService]: Plugin " + var_core_value_sigAD91.pluginName + " has been registered.");
    this._pluginMap["set"](var_core_value_sigAD91.pluginName, [var_core_value_sigAD91, var_core_value_sigF64E]);
  }
  getAllPlugins() {
    return Array.from(this._pluginMap["values"]());
  }
  mountHistoryContent(var_core_value_sigB217, var_core_value_sig1FE6) {
    let var_core_value_sig2471 = document.getElementById(We);
    var_core_value_sig2471 && (var_core_value_sig2471.style["display"] = "block", this._initUniver(var_core_value_sigB217, We, var_core_value_sig1FE6));
  }
  unMountHistoryContent() {
    var var_core_value_sigD1FC;
    this._disposableCollection["dispose"](), (var_core_value_sigD1FC = this.historyUniver) == null || var_core_value_sigD1FC.dispose(), this._historyUniver$["next"](null);
    let var_core_value_sigE2F9 = document.getElementById(We);
    var_core_value_sigE2F9 && (var_core_value_sigE2F9.style["display"] = "none", this._internalWebWorker &&= (this._internalWebWorker["terminate"](), null));
  }
  _initUniver(var_core_value_sigD689, var_core_value_sig7AE3, var_core_value_sig1EB3) {
    var var_core_value_sigE120, var_core_value_sigD6E7, var_core_value_sig3669, var_core_value_sig5CBC;
    if (this.historyUniver) return;
    let var_core_value_sig20BE = new e["Univer"]({
        ...Be(this._localeService),
        override: [[e.IAuthzIoService, {
          useClass: r.AuthzIoHttpService
        }]]
      }),
      var_core_value_sig6BD0 = var_core_value_sig20BE.__getInjector();
    this._syncViewerServices(var_core_value_sig6BD0, var_core_value_sig7AE3), var_core_value_sig6BD0.get(e.IConfigService).setConfig(r.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, this._configService["getConfig"](r.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY));
    let var_core_value_sig8C15 = this._configService["getConfig"](a.LS_CONFIG_KEY);
    var_core_value_sig8C15 && var_core_value_sig20BE.registerPlugin(a.UniverLicensePlugin, {
      license: var_core_value_sig8C15.ls
    });
    let var_core_value_sig6DF7 = (var_core_value_sigE120 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_core_value_sigE120.workerURL;
    var_core_value_sig6DF7 && (this._internalWebWorker = var_core_value_sig6DF7 instanceof Worker ? var_core_value_sig6DF7 : null, var_core_value_sig20BE.registerPlugin(x.UniverRPCMainThreadPlugin, {
      workerURL: var_core_value_sig6DF7
    })), this._pluginMap["forEach"](([var_core_value_sig9CCB, var_core_value_sigE718]) => {
      var_core_value_sig20BE.registerPlugin(var_core_value_sig9CCB, var_core_value_sigE718);
    }), var_core_value_sig20BE.registerPlugin(ze, {
      historyServerUrl: oe(this._configService["getConfig"](B)),
      historyPanelComponentKey: (var_core_value_sigD6E7 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_core_value_sigD6E7.historyPanelComponentKey,
      historyPanelHidden: (var_core_value_sig3669 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_core_value_sig3669.historyPanelHidden,
      historyAIassistantEnabled: (var_core_value_sig5CBC = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_core_value_sig5CBC.historyAIassistantEnabled
    }), var_core_value_sig6BD0.invoke(var_core_value_sigAEC8 => {
      this._initListener(var_core_value_sigAEC8, var_core_value_sigD689);
    }), this._historyUniver$["next"](var_core_value_sig20BE);
    let var_core_value_sigB411 = var_core_value_sig6BD0.get(q),
      var_core_value_sigA81B = this._checkCanRevert(var_core_value_sigD689);
    He(var_core_value_sig1EB3) ? var_core_value_sigB411.triggerCustomVersions(var_core_value_sigD689, var_core_value_sigA81B, var_core_value_sig1EB3) : var_core_value_sigB411.triggerLoadVersions(var_core_value_sigD689, var_core_value_sigA81B).catch(() => undefined);
  }
  _syncViewerServices(var_core_value_sigFE8D, var_core_value_sig8595) {
    let var_core_value_sigF8DE = var_core_value_sigFE8D.get(e.ThemeService);
    this._disposableCollection["add"](this._themeService["darkMode$"].subscribe(var_core_value_sigB977 => {
      var_core_value_sigF8DE.setDarkMode(var_core_value_sigB977);
    })), this._disposableCollection["add"](this._themeService["currentTheme$"].subscribe(var_core_value_sig2949 => {
      var_core_value_sigF8DE.setTheme(var_core_value_sig2949);
    }));
    let var_core_value_sigFE76 = var_core_value_sigFE8D.get(e.LocaleService);
    this._disposableCollection["add"](this._localeService["currentLocale$"].subscribe(var_core_value_sig308A => {
      let var_core_value_sig528D = this._localeService["getLocales"]();
      var_core_value_sig528D && var_core_value_sigFE76.load({
        [var_core_value_sig308A]: var_core_value_sig528D
      }), var_core_value_sigFE76.setLocale(var_core_value_sig308A);
    })), this._disposableCollection["add"](this._localeService["direction$"].subscribe(var_core_value_sigA309 => {
      var_core_value_sigFE76.setDirection(var_core_value_sigA309);
      let var_core_value_sig9E20 = document.getElementById(var_core_value_sig8595);
      var_core_value_sig9E20 && (var_core_value_sig9E20.dir = var_core_value_sigA309, var_core_value_sig9E20.style["direction"] = var_core_value_sigA309);
    }));
  }
  _initListener(var_core_value_sig84C8, var_core_value_sig80C0) {
    let var_core_value_sig22B4 = var_core_value_sig84C8.get(q);
    this._disposableCollection["add"](var_core_value_sig22B4.status$["subscribe"](var_core_value_sig26BB => {
      switch (var_core_value_sig26BB) {
        case "entered":
          this._dialogService["closeAll"](), this._sidebarService["close"]();
          break;
        case "exited":
          this._commandService["executeCommand"](Ke.id), this.unMountHistoryContent();
          break;
        case "error":
          this.unMountHistoryContent(), this._messageService["show"]({
            content: this._localeService["t"]("sheets-history-ui.loader.panel.listFetchError"),
            type: m.MessageType["Error"],
            duration: 3000
          });
          break;
        default:
          break;
      }
    })), this._disposableCollection["add"](var_core_value_sig22B4.revertRevision$["subscribe"](var_core_value_sig19B4 => {
      if (var_core_value_sig19B4) {
        let var_core_value_sig6774 = {
          unitId: var_core_value_sig80C0,
          revision: var_core_value_sig19B4
        };
        this._commandService["executeCommand"](n.RevertRevisionMutation["id"], var_core_value_sig6774).catch(() => {
          var_core_value_sig22B4.status = "error";
        });
      }
    }));
  }
  _checkCanRevert(var_core_value_sigBB37) {
    let var_core_value_sig0C51 = this._univerInstanceService["getUnit"](var_core_value_sigBB37);
    if (!var_core_value_sig0C51) return false;
    let var_core_value_sigADA4 = var_core_value_sig0C51.getSheets().map(var_core_value_sig218A => var_core_value_sig218A.getSheetId()),
      var_core_value_sig0E48 = new t["WorkbookEditablePermission"](var_core_value_sigBB37).id,
      var_core_value_sig495B = var_core_value_sigADA4.map(var_core_value_sig14CB => new t["WorksheetEditPermission"](var_core_value_sigBB37, var_core_value_sig14CB).id),
      var_core_value_sig310C = var_core_value_sigADA4.map(var_core_value_sigFDEE => this._selectionProtectionRuleModel["getSubunitRuleList"](var_core_value_sigBB37, var_core_value_sigFDEE).map(var_core_value_sig340D => new t["RangeProtectionPermissionEditPoint"](var_core_value_sigBB37, var_core_value_sigFDEE, var_core_value_sig340D.permissionId).id)).flat(),
      var_core_value_sig759E = new t["WorkbookRecoverHistoryPermission"](var_core_value_sigBB37).id;
    return this._permissionService["composePermission"]([var_core_value_sig0E48, ...var_core_value_sig495B, ...var_core_value_sig310C, var_core_value_sig759E]).every(var_core_value_sigA676 => !!var_core_value_sigA676.value);
  }
};
Z = W([U(0, (0, e.Inject)(e.LocaleService)), U(1, e.IUniverInstanceService), U(2, e.IConfigService), U(3, e.ICommandService), U(4, N.IMessageService), U(5, e.IPermissionService), U(6, (0, e.Inject)(t.RangeProtectionRuleModel)), U(7, (0, e.Inject)(N.IDialogService)), U(8, (0, e.Inject)(N.ISidebarService)), U(9, (0, e.Inject)(e.ThemeService))], Z);
const Ge = {
    id: "univer.operation.toggle-edit-history",
    type: e.CommandType["OPERATION"],
    handler: var_core_value_sig8339 => {
      let var_core_value_sigA01E = var_core_value_sig8339.get(Z),
        {
          unitId: var_core_value_sigA41E
        } = (0, t.getSheetCommandTarget)(var_core_value_sig8339.get(e.IUniverInstanceService)) || {};
      return var_core_value_sigA41E ? (var_core_value_sigA01E.mountHistoryContent(var_core_value_sigA41E), true) : false;
    }
  },
  Ke = {
    id: "univer.operation.exit-edit-history",
    type: e.CommandType["OPERATION"],
    handler: () => true
  };
function qe(var_core_value_sig939C) {
  return {
    id: Ge.id,
    type: N.MenuItemType["BUTTON"],
    icon: "HistoryIcon",
    title: "sheets-history-ui.loader.panel.title",
    tooltip: "sheets-history-ui.loader.panel.title",
    hidden$: (0, N.getMenuHiddenObservable)(var_core_value_sig939C, e.UniverInstanceType["UNIVER_SHEET"]),
    disabled$: (0, M.getCurrentRangeDisable$)(var_core_value_sig939C, {
      workbookTypes: [t.WorkbookViewHistoryPermission],
      worksheetTypes: [],
      rangeTypes: []
    })
  };
}
const Je = {
  [N.RibbonStartGroup["OTHERS"]]: {
    [Ge.id]: {
      order: 100,
      gridLayout: {
        row: 1,
        column: 5,
        rowSpan: 2,
        columnSpan: 2,
        showLabel: true
      },
      menuItemFactory: qe
    }
  }
};
function Ye(var_core_value_sigA49E) {
  return !!(var_core_value_sigA49E && "unitId" in var_core_value_sigA49E && typeof var_core_value_sigA49E.unitId == "string" && "revision" in var_core_value_sigA49E && typeof var_core_value_sigA49E.revision == "number");
}
function Xe(var_core_value_sig6DEB, var_core_value_sig2F0D) {
  return var_core_value_sig6DEB.eventID === n.CollaborationEvent["CHANGESET_ACK"] && (0, n.parseProtocolChangeset)(var_core_value_sig6DEB.data).mutations["some"](var_core_value_sig6C80 => var_core_value_sig6C80.id === n.RevertRevisionMutation["id"] && Ye(var_core_value_sig6C80.params) && var_core_value_sig6C80.params["unitId"] === var_core_value_sig2F0D.unitId && var_core_value_sig6C80.params["revision"] === var_core_value_sig2F0D.revision);
}
let Ze = class extends e.RxDisposable {
  constructor(var_core_value_sig6B99, var_core_value_sig6ADC, var_core_value_sig41AD, var_core_value_sigDBC2, var_core_value_sig7739, var_core_value_sig4040, var_core_value_sig1AAA, var_core_value_sig58DB, var_core_value_sig4840, var_core_value_sigB76D) {
    super(), this._commandService = var_core_value_sig6B99, this._menuManagerService = var_core_value_sig6ADC, this._historyManagerService = var_core_value_sig41AD, this._localeService = var_core_value_sigDBC2, this._messageService = var_core_value_sig7739, this._collaborationController = var_core_value_sig4040, this._localCacheService = var_core_value_sig1AAA, this._dataLoaderService = var_core_value_sig58DB, this._univerInstanceService = var_core_value_sig4840, this._urlService = var_core_value_sigB76D, H(this, "_revertAcknowledgementSubscription", null), this.disposeWithMe((0, e.toDisposable)(() => this._clearRevertAcknowledgement())), this._init();
  }
  _init() {
    [Ge, Ke].forEach(var_core_value_sigC27E => this.disposeWithMe((0, e.toDisposable)(this._commandService["registerCommand"](var_core_value_sigC27E)))), this._menuManagerService["mergeMenu"](Je), this.disposeWithMe(this._commandService["onCommandExecuted"]((var_core_value_sigA70D, var_core_value_sigCE10) => {
      if (var_core_value_sigA70D.id === n.RevertRevisionMutation["id"] && Ye(var_core_value_sigA70D.params)) {
        let {
          revision: var_core_value_sig82D4,
          unitId: var_core_value_sigBDE4
        } = var_core_value_sigA70D.params;
        this._messageService["show"]({
          content: this._localeService["t"]("sheets-history-ui.loader.panel.reverting"),
          type: m.MessageType["Loading"],
          duration: 5000
        });
        let var_core_value_sig7DF1 = this._collaborationController["getCollabEntity"](var_core_value_sigBDE4);
        if (!var_core_value_sig7DF1) {
          this._showRevertFailed();
          return;
        }
        var_core_value_sigCE10 != null && var_core_value_sigCE10.fromCollab ? this._handleRevertAcknowledgement(var_core_value_sig7DF1, {
          revision: var_core_value_sig82D4,
          unitId: var_core_value_sigBDE4
        }, async () => (setTimeout(() => window.location["reload"]()), true), true) : this._handleRevertAcknowledgement(var_core_value_sig7DF1, {
          revision: var_core_value_sig82D4,
          unitId: var_core_value_sigBDE4
        }, async () => {
          let var_core_value_sig07E9 = this._univerInstanceService["getCurrentUnitOfType"](e.UniverInstanceType["UNIVER_SHEET"]),
            var_core_value_sig4F59 = var_core_value_sig07E9 == null ? undefined : var_core_value_sig07E9.getActiveSheet();
          if (!var_core_value_sig4F59) return false;
          this._univerInstanceService["disposeUnit"](var_core_value_sigBDE4);
          let var_core_value_sigF564 = await this._dataLoaderService["loadUnit"](var_core_value_sigBDE4, e.UniverInstanceType["UNIVER_SHEET"]);
          return var_core_value_sigF564 && var_core_value_sigF564 instanceof e.Workbook ? (await this._setupSubUnitSync(var_core_value_sigF564, var_core_value_sig4F59.getSheetId()), true) : false;
        });
      }
    }));
  }
  _handleRevertAcknowledgement(var_core_value_sig1015, var_core_value_sig6223, var_core_value_sigC6B6, var_core_value_sig498A = false) {
    this._clearRevertAcknowledgement();
    let var_core_value_sigEF45 = (0, P.combineLatest)([var_core_value_sig1015.session["event$"], var_core_value_sig1015.state$]).pipe((0, P.filter)(([var_core_value_sigA3861, var_core_value_sigCD82]) => Xe(var_core_value_sigA3861, var_core_value_sig6223) && (var_core_value_sigCD82 == null ? undefined : var_core_value_sigCD82.status) === r.CollaborationStatus["SYNCED"]), (0, P.take)(1)),
      var_core_value_sig36FE = var_core_value_sigEF45;
    var_core_value_sig498A && (var_core_value_sig36FE = var_core_value_sigEF45.pipe((0, P.timeout)({
      first: 5000
    }))), this._revertAcknowledgementSubscription = var_core_value_sig36FE.pipe((0, P.switchMap)(async () => {
      let var_core_value_sig44DD = await var_core_value_sigC6B6();
      return var_core_value_sig44DD && (this._historyManagerService["unMountHistoryContent"](), await this._localCacheService["exhaustSavingTask"]()), var_core_value_sig44DD;
    }), (0, P.takeUntil)(this.dispose$)).subscribe({
      next: var_core_value_sig96FA => {
        this._clearRevertAcknowledgement(), var_core_value_sig96FA ? this._messageService["removeAll"]() : this._showRevertFailed();
      },
      error: () => {
        this._clearRevertAcknowledgement(), this._showRevertFailed();
      }
    });
  }
  _clearRevertAcknowledgement() {
    var var_core_value_sig3AF5;
    (var_core_value_sig3AF5 = this._revertAcknowledgementSubscription) == null || var_core_value_sig3AF5.unsubscribe(), this._revertAcknowledgementSubscription = null;
  }
  _showRevertFailed() {
    this._messageService["show"]({
      content: this._localeService["t"]("sheets-history-ui.loader.panel.revertFailed"),
      type: m.MessageType["Error"],
      duration: 3000
    });
  }
  async _setupSubUnitSync(var_core_value_sig14E6, var_core_value_sig8690) {
    await this._updateSubUnitFromURLParams(var_core_value_sig14E6, var_core_value_sig8690), var_core_value_sig14E6.activeSheet$["pipe"]((0, P.takeUntil)(this.dispose$)).subscribe(var_core_value_sigAB68 => {
      var_core_value_sigAB68 && this._updateURLWithCurrentState(var_core_value_sigAB68);
    }), this._urlService["urlChange$"].pipe((0, P.takeUntil)(this.dispose$)).subscribe(() => this._updateSubUnitFromURLParams(var_core_value_sig14E6, var_core_value_sig8690));
  }
  _updateURLWithCurrentState(var_core_value_sigDF29, var_core_value_sigC0F8 = false) {
    let var_core_value_sig3C75 = this._urlService["getParam"]("subunit");
    var_core_value_sigDF29.getSheetId() !== var_core_value_sig3C75 && this._urlService["setParam"]("subunit", var_core_value_sigDF29.getSheetId(), var_core_value_sigC0F8);
  }
  async _updateSubUnitFromURLParams(var_core_value_sig992D, var_core_value_sigE4E4) {
    var var_core_value_sigA4B0;
    if (!var_core_value_sigE4E4 || !var_core_value_sig992D.getSheetBySheetId(var_core_value_sigE4E4)) {
      let var_core_value_sig040A = var_core_value_sig992D.getUnhiddenWorksheets()[0],
        var_core_value_sig2AE0 = var_core_value_sig992D.getSheetBySheetId(var_core_value_sig040A);
      if (!var_core_value_sig2AE0) return;
      this._updateURLWithCurrentState(var_core_value_sig2AE0, true), await this._commandService["executeCommand"](t.SetWorksheetActivateCommand["id"], {
        unitId: var_core_value_sig992D.getUnitId(),
        subUnitId: var_core_value_sig040A
      });
      return;
    }
    ((var_core_value_sigA4B0 = var_core_value_sig992D.getActiveSheet()) == null ? undefined : var_core_value_sigA4B0.getSheetId()) !== var_core_value_sigE4E4 && (await this._commandService["executeCommand"](t.SetWorksheetActivateCommand["id"], {
      unitId: var_core_value_sig992D.getUnitId(),
      subUnitId: var_core_value_sigE4E4
    }));
  }
};
Ze = W([U(0, e.ICommandService), U(1, N.IMenuManagerService), U(2, (0, e.Inject)(Z)), U(3, (0, e.Inject)(e.LocaleService)), U(4, N.IMessageService), U(5, (0, e.Inject)(r.CollaborationController)), U(6, r.ILocalCacheService), U(7, (0, e.Inject)(r.DataLoaderService)), U(8, e.IUniverInstanceService), U(9, z.IURLService)], Ze);
function Qe() {
  let var_core_value_sig5141 = (0, N.useDependency)(q),
    var_core_value_sigA9E0 = (0, N.useDependency)(e.LocaleService),
    var_core_value_sig751D = (0, N.useObservable)(var_core_value_sig5141.currentVersion$),
    var_core_value_sig2E9A = (0, I.useMemo)(() => var_core_value_sig751D ? var_core_value_sig5141.getSelectedVersionCanRevert() : false, [var_core_value_sig5141, var_core_value_sig751D]),
    var_core_value_sigE105 = (0, I.useCallback)(() => {
      var_core_value_sig5141.exitHistoryMode();
    }, [var_core_value_sig5141]),
    var_core_value_sig0BD6 = (0, I.useCallback)(() => {
      var_core_value_sig5141.triggerRevert();
    }, [var_core_value_sig5141]);
  return (0, R.jsxs)("div", {
    className: "univer-flex univer-h-12 univer-items-center univer-border-b univer-border-gray-200 univer-bg-gray-0 univer-px-4 dark:!univer-border-gray-700 dark:!univer-bg-gray-950",
    children: [(0, R.jsx)(m.Button, {
      variant: "link",
      onClick: var_core_value_sigE105,
      children: var_core_value_sigA9E0.t("sheets-history-ui.viewer.header.back")
    }), var_core_value_sig2E9A ? (0, R.jsx)(m.Button, {
      variant: "link",
      onClick: var_core_value_sig0BD6,
      children: var_core_value_sigA9E0.t("sheets-history-ui.viewer.header.revert")
    }) : (0, R.jsx)("div", {
      className: "univer-w-10"
    })]
  });
}
let $e = class extends e.Disposable {
  constructor(var_core_value_sig5F50, var_core_value_sig4494, var_core_value_sigFFAF, var_core_value_sig478B, var_core_value_sig1E21, var_core_value_sig9DBF, var_core_value_sig36CC) {
    super(), this._permissionService = var_core_value_sig5F50, this._uiPartsService = var_core_value_sig4494, this._messageService = var_core_value_sigFFAF, this._localeService = var_core_value_sig478B, this._historyManagerService = var_core_value_sig1E21, this._injector = var_core_value_sig9DBF, this._configService = var_core_value_sig36CC, this._init();
  }
  _init() {
    this.disposeWithMe(this._historyManagerService["currentVersion$"].subscribe(var_core_value_sigC349 => {
      var_core_value_sigC349 && this._historyManagerService["triggerLoadSheet"](var_core_value_sigC349);
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(var_core_value_sig9D96 => {
      let var_core_value_sig2776 = this._historyManagerService["unitId"];
      var_core_value_sig2776 && (var_core_value_sig9D96.subType === L.UnitAction["Edit"] && var_core_value_sig9D96.value === true && this._permissionService["updatePermissionPoint"](new t["WorkbookEditablePermission"](var_core_value_sig2776).id, false), var_core_value_sig9D96.subType === L.UnitAction["RenameSheet"] && var_core_value_sig9D96.value === true && this._permissionService["updatePermissionPoint"](new t.WorkbookRenameSheetPermission(var_core_value_sig2776).id, false), var_core_value_sig9D96.subType === L.UnitAction["MoveSheet"] && var_core_value_sig9D96.value === true && this._permissionService["updatePermissionPoint"](new t["WorkbookMoveSheetPermission"](var_core_value_sig2776).id, false), var_core_value_sig9D96.subType === L.UnitAction["HideSheet"] && var_core_value_sig9D96.value === true && this._permissionService["updatePermissionPoint"](new t["WorkbookHideSheetPermission"](var_core_value_sig2776).id, false), var_core_value_sig9D96.subType === L.UnitAction["Comment"] && var_core_value_sig9D96.value === true && this._permissionService["updatePermissionPoint"](new t["WorkbookEditablePermission"](var_core_value_sig2776).id, false), var_core_value_sig9D96.subType === L.UnitAction["FloatImg"] && var_core_value_sig9D96.value === true && this._permissionService["updatePermissionPoint"](new t.WorkbookEditablePermission(var_core_value_sig2776).id, false));
    })), this._registerHeader(), this._registerLoadingMask();
    let var_core_value_sigA568 = null;
    this.disposeWithMe((0, e.toDisposable)(() => var_core_value_sigA568 == null ? undefined : var_core_value_sigA568.dispose())), this.disposeWithMe(this._historyManagerService["loadingState$"].subscribe(var_core_value_sig6FB2 => {
      var_core_value_sigA568 == null || var_core_value_sigA568.dispose(), var_core_value_sigA568 = null, var_core_value_sig6FB2 === "loading" && (var_core_value_sigA568 = this._messageService["show"]({
        type: m.MessageType["Info"],
        content: this._localeService["t"]("sheets-history-ui.viewer.info.loading"),
        duration: 1000
      }));
    }));
  }
  _registerHeader() {
    var var_core_value_sigD22D;
    (var_core_value_sigD22D = this._configService["getConfig"]("sheets-history-ui.config")) != null && var_core_value_sigD22D.historyPanelHidden || this.disposeWithMe(this._uiPartsService["registerComponent"](N.BuiltInUIPart["HEADER"], () => (0, N.connectInjector)(Qe, this._injector)));
  }
  _registerLoadingMask() {
    this.disposeWithMe(this._uiPartsService["registerComponent"](N.BuiltInUIPart["GLOBAL"], () => (0, N.connectInjector)(Ae, this._injector)));
  }
};
$e = W([U(0, e.IPermissionService), U(1, N.IUIPartsService), U(2, N.IMessageService), U(3, (0, e.Inject)(e.LocaleService)), U(4, (0, e.Inject)(q)), U(5, (0, e.Inject)(e.Injector)), U(6, e.IConfigService)], $e);
function et(var_core_value_sig3070) {
  var var_core_value_sigC66D;
  let {
      item: var_core_value_sig8EC5,
      isNewest: var_core_value_sig1056
    } = var_core_value_sig3070,
    var_core_value_sig6EE5 = (0, N.useDependency)(q),
    var_core_value_sig9DD9 = (0, N.useDependency)(J),
    var_core_value_sig09AC = (0, N.useDependency)(e.LocaleService),
    var_core_value_sig1613 = (0, N.useObservable)(var_core_value_sig6EE5.currentVersion$, "", true) === var_core_value_sig8EC5.id,
    var_core_value_sigADC6 = K(var_core_value_sig8EC5.time, var_core_value_sig09AC),
    var_core_value_sig4620 = !var_core_value_sig1056 && var_core_value_sig6EE5.canRevert,
    var_core_value_sig07FB = (0, I.useCallback)(async () => {
      var_core_value_sig6EE5.loadingState !== "loading" && (var_core_value_sig6EE5.selectVersion(var_core_value_sig8EC5.id), await var_core_value_sig9DD9.ensureVersion(var_core_value_sig8EC5.id));
    }, [var_core_value_sig6EE5, var_core_value_sig9DD9, var_core_value_sig8EC5.id]),
    var_core_value_sig617E = (0, I.useCallback)(var_core_value_sig85D5 => {
      var_core_value_sig85D5.stopPropagation(), var_core_value_sig6EE5.triggerRevert(var_core_value_sig8EC5.id);
    }, [var_core_value_sig6EE5, var_core_value_sig8EC5.id]),
    var_core_value_sigC85E = ((var_core_value_sigC66D = var_core_value_sig8EC5.users) == null ? undefined : var_core_value_sigC66D.filter(Boolean).join(",\x20")) || var_core_value_sig8EC5.user || var_core_value_sig09AC.t("sheets-history-ui.viewer.panel.unknownUser");
  return (0, R.jsxs)("div", {
    className: (0, m.clsx)("univer-flex univer-items-center univer-gap-3 univer-border-b univer-border-gray-100 univer-px-4 univer-py-3 dark:!univer-border-gray-800", var_core_value_sig1613 && "univer-bg-blue-50\x20dark:!univer-bg-gray-900"),
    onClick: var_core_value_sig07FB,
    children: [(0, R.jsxs)("div", {
      className: "univer-min-w-0\x20univer-flex-1",
      children: [(0, R.jsxs)("div", {
        className: "univer-mb-0.5\x20univer-flex\x20univer-items-center\x20univer-gap-2",
        children: [(0, R.jsx)("span", {
          className: "univer-truncate univer-text-sm univer-font-medium univer-text-gray-800 dark:!univer-text-gray-200",
          children: var_core_value_sigC85E
        }), var_core_value_sig1056 && (0, R.jsx)("span", {
          className: "univer-shrink-0 univer-rounded univer-border univer-border-primary-600 univer-bg-primary-50 univer-px-1.5 univer-py-0.5 univer-text-xs univer-text-primary-600 dark:!univer-bg-transparent",
          children: var_core_value_sig09AC.t("sheets-history-ui.viewer.panel.currentVersion")
        })]
      }), (0, R.jsxs)("div", {
        className: "univer-flex univer-items-center univer-gap-2",
        children: [(0, R.jsx)("span", {
          className: "univer-text-xs univer-text-gray-400",
          children: var_core_value_sigADC6.time
        }), (0, R.jsx)("span", {
          className: "univer-truncate univer-text-xs univer-text-gray-500 dark:!univer-text-gray-400",
          children: _e(var_core_value_sig8EC5, var_core_value_sig09AC)
        })]
      })]
    }), var_core_value_sig4620 && (0, R.jsx)(m.Button, {
      size: "small",
      variant: "primary",
      onClick: var_core_value_sig617E,
      children: var_core_value_sig09AC.t("sheets-history-ui.viewer.header.revert")
    })]
  });
}
function tt() {
  let var_core_value_sig8293 = (0, N.useDependency)(q),
    var_core_value_sig050D = (0, N.useDependency)(e.LocaleService),
    var_core_value_sig37AE = (0, N.useObservable)(var_core_value_sig8293.versions$),
    var_core_value_sig5B51 = (0, N.useObservable)(var_core_value_sig8293.fetching$),
    var_core_value_sig64FF = (0, I.useRef)(null),
    [var_core_value_sig86F4, var_core_value_sig9E0F] = (0, I.useState)(true);
  (0, I.useEffect)(() => {
    let var_core_value_sig5D2E = var_core_value_sig64FF.current;
    if (!var_core_value_sig5D2E || !var_core_value_sig86F4) return;
    let var_core_value_sig7221,
      var_core_value_sig0A5A = () => {
        clearTimeout(var_core_value_sig7221), var_core_value_sig7221 = setTimeout(() => {
          let {
            scrollTop: var_core_value_sigDC86,
            scrollHeight: var_core_value_sig0B0C,
            clientHeight: var_core_value_sigA39E
          } = var_core_value_sig5D2E;
          var_core_value_sigDC86 + var_core_value_sigA39E >= var_core_value_sig0B0C - 10 && var_core_value_sig8293.loadMoreVersions().catch(() => undefined);
        }, 100);
      };
    return var_core_value_sig5D2E.addEventListener("scroll", var_core_value_sig0A5A), () => {
      clearTimeout(var_core_value_sig7221), var_core_value_sig5D2E.removeEventListener("scroll", var_core_value_sig0A5A);
    };
  }, [var_core_value_sig8293, var_core_value_sig86F4]);
  let var_core_value_sig3A42 = be(var_core_value_sig37AE ?? []);
  return (0, R.jsx)("div", {
    className: "univer-pointer-events-none univer-absolute univer-inset-0 univer-z-10 univer-flex univer-flex-col univer-justify-end",
    children: (0, R.jsxs)("div", {
      className: (0, m.clsx)("univer-pointer-events-auto univer-flex univer-flex-col univer-rounded-t-2xl univer-bg-gray-0 univer-shadow-lg univer-transition-[height] univer-duration-300 dark:!univer-bg-gray-950", var_core_value_sig86F4 ? "univer-h-[60%]" : "univer-h-12"),
      children: [(0, R.jsxs)("div", {
        className: "univer-flex\x20univer-shrink-0\x20univer-cursor-pointer\x20univer-flex-col\x20univer-items-center\x20univer-py-2",
        onClick: () => var_core_value_sig9E0F(var_core_value_sigEB43 => !var_core_value_sigEB43),
        children: [(0, R.jsx)("div", {
          className: "univer-h-1\x20univer-w-10\x20univer-rounded-full\x20univer-bg-gray-300\x20dark:!univer-bg-gray-600"
        }), !var_core_value_sig86F4 && (0, R.jsx)("span", {
          className: "univer-mt-1 univer-text-xs univer-text-gray-500",
          children: var_core_value_sig050D.t("sheets-history-ui.viewer.panel.title")
        })]
      }), var_core_value_sig86F4 && (0, R.jsx)(R.Fragment, {
        children: var_core_value_sig37AE ? (0, R.jsxs)("div", {
          ref: var_core_value_sig64FF,
          className: "univer-flex-1 univer-overflow-y-auto",
          children: [var_core_value_sig3A42.map(var_core_value_sigE6D6 => (0, R.jsxs)("div", {
            children: [(0, R.jsx)("div", {
              className: "univer-sticky univer-top-0 univer-z-10 univer-bg-gray-50 univer-px-4 univer-py-2 univer-text-xs univer-font-semibold univer-text-gray-500 dark:!univer-bg-gray-900",
              children: ye(var_core_value_sigE6D6.startDateString, var_core_value_sig050D)
            }), var_core_value_sigE6D6.versions["map"]((var_core_value_sig4186, var_core_value_sigF963) => (0, R.jsx)(et, {
              item: var_core_value_sig4186,
              isNewest: var_core_value_sig3A42[0] === var_core_value_sigE6D6 && var_core_value_sigF963 === 0
            }, var_core_value_sig4186.id))]
          }, var_core_value_sigE6D6.dateString)), var_core_value_sig5B51 && (0, R.jsx)("div", {
            className: "univer-flex univer-items-center univer-justify-center univer-py-4",
            children: (0, R.jsx)(F.LoadingMultiIcon, {
              className: "univer-animate-spin univer-text-gray-400"
            })
          })]
        }) : (0, R.jsx)("div", {
          className: "univer-flex univer-flex-1 univer-items-center univer-justify-center",
          children: (0, R.jsx)(F.LoadingMultiIcon, {
            className: "univer-animate-spin univer-text-gray-400"
          })
        })
      })]
    })
  });
}
let nt = class extends e.Disposable {
  constructor(var_core_value_sig8507, var_core_value_sig8A7F) {
    super(), this._uiPartsService = var_core_value_sig8507, this._injector = var_core_value_sig8A7F, this.disposeWithMe(this._uiPartsService["registerComponent"](N.BuiltInUIPart["CONTENT"], () => (0, N.connectInjector)(tt, this._injector)));
  }
};
nt = W([U(0, N.IUIPartsService), U(1, (0, e.Inject)(e.Injector))], nt);
let rt = class extends e.Plugin {
  constructor(var_core_value_sig9E81 = V, var_core_value_sig8295, var_core_value_sigA975, var_core_value_sig1263) {
    super(), this._config = var_core_value_sig9E81, this._injector = var_core_value_sig8295, this._renderManagerService = var_core_value_sigA975, this._configService = var_core_value_sig1263;
    let {
      ...var_core_value_sig457C
    } = (0, e.merge)({}, V, this._config);
    this._configService["setConfig"](B, var_core_value_sig457C);
  }
  onStarting() {
    [[Y], [q], [$e], [J], [Pe], [G], [nt], [X], [n.ISnapshotServerService, {
      useClass: r.SnapshotServerOverHTTPService
    }], [N.IDialogService, {
      useClass: Re
    }], [e.IImageIoService, {
      useClass: r.CollaborationImageIoService
    }]].forEach(var_core_value_sigB608 => this._injector["add"](var_core_value_sigB608)), this._injector["get"]($e), this._injector["get"](Y);
  }
  onRendered() {
    [[Ie]].forEach(var_core_value_sigF866 => {
      this.disposeWithMe(this._renderManagerService["registerRenderModule"](e.UniverInstanceType["UNIVER_SHEET"], var_core_value_sigF866));
    }), this._injector["get"](X), this._injector["get"](nt);
  }
  onSteady() {
    this._injector["get"](J);
  }
};
H(rt, "pluginName", "UNIVER_SHEETS_HISTORY_VIEWER_MOBILE_PLUGIN"), H(rt, "packageName", se), H(rt, "version", ce), rt = W([(0, e.DependentOn)(a.UniverLicensePlugin, _.UniverDrawingPlugin, y.UniverRenderEnginePlugin, b.UniverNetworkPlugin, O.UniverSheetsFilterPlugin, j.UniverSheetsTablePlugin, t.UniverSheetsPlugin, N.UniverMobileUIPlugin, n.UniverCollaborationPlugin, S.UniverSheetsConditionalFormattingPlugin, o.UniverSheetsChartPlugin, c.UniverSheetsPivotTablePlugin, d.UniverSheetSparklinePlugin, M.UniverSheetsMobileUIPlugin, w.UniverSheetsDataValidationPlugin), U(1, (0, e.Inject)(e.Injector)), U(2, y.IRenderManagerService), U(3, e.IConfigService)], rt);
const it = "univer-history-container-mobile";
let at = class extends e.Disposable {
  constructor(var_core_value_sigA4E6, var_core_value_sig934F, var_core_value_sig74A7, var_core_value_sig3685, var_core_value_sigC621, var_core_value_sig86D7, var_core_value_sig431B, var_core_value_sig5C7C, var_core_value_sig87E2, var_core_value_sig2E04) {
    super(), this._localeService = var_core_value_sigA4E6, this._univerInstanceService = var_core_value_sig934F, this._configService = var_core_value_sig74A7, this._commandService = var_core_value_sig3685, this._messageService = var_core_value_sigC621, this._permissionService = var_core_value_sig86D7, this._selectionProtectionRuleModel = var_core_value_sig431B, this._dialogService = var_core_value_sig5C7C, this._sidebarService = var_core_value_sig87E2, this._themeService = var_core_value_sig2E04, H(this, "_historyUniver$", new P["BehaviorSubject"](null)), H(this, "historyUniver$", this._historyUniver$["asObservable"]()), H(this, "_disposableCollection", new e["DisposableCollection"]()), H(this, "_pluginMap", new Map()), H(this, "_internalWebWorker", null), this._init();
  }
  get historyUniver() {
    return this._historyUniver$["value"];
  }
  _init() {
    this._initContainer(), this._initPlugins();
  }
  _initContainer() {
    var var_core_value_sig2EDD;
    let var_core_value_sig27D2 = this._configService["getConfig"](B),
      var_core_value_sig355D = (var_core_value_sig2EDD = this._configService["getConfig"](N.UI_PLUGIN_CONFIG_KEY)) == null ? undefined : var_core_value_sig2EDD.container,
      var_core_value_sig8B21 = (var_core_value_sig27D2 == null ? undefined : var_core_value_sig27D2.univerContainerId) ?? var_core_value_sig355D,
      var_core_value_sigEB36 = typeof var_core_value_sig8B21 == "string" ? document.getElementById(var_core_value_sig8B21) : var_core_value_sig8B21;
    if (!var_core_value_sigEB36) throw Error("[MobileHistoryLoaderService]: Configure a valid Univer container before opening history.");
    let var_core_value_sig5C27 = document.createElement("div");
    var_core_value_sig5C27.id = it, var_core_value_sig5C27.style["position"] = "absolute", var_core_value_sig5C27.style["top"] = "0", var_core_value_sig5C27.style["left"] = "0", var_core_value_sig5C27.style["width"] = "100%", var_core_value_sig5C27.style["height"] = "100%", var_core_value_sig5C27.style["zIndex"] = "49", var_core_value_sig5C27.style["display"] = "none", Ve(var_core_value_sig5C27, this._localeService), var_core_value_sigEB36.appendChild(var_core_value_sig5C27);
  }
  _initPlugins() {
    [[y.UniverRenderEnginePlugin], [N.UniverMobileUIPlugin, {
      container: it,
      header: true,
      toolbar: false,
      footer: true,
      contextMenu: false,
      override: [[N.IDialogService, null]]
    }], [b.UniverNetworkPlugin], [_.UniverDrawingPlugin, {
      override: [[e.IImageIoService, null]]
    }], [h.UniverDocsPlugin, {
      hasScroll: false
    }], [g.UniverDocsUIPlugin], [re.UniverSheetsNumfmtPlugin], [t.UniverSheetsPlugin, {
      notExecuteFormula: true
    }], [M.UniverSheetsMobileUIPlugin], [A.UniverSheetsFormulaPlugin], [ee.UniverSheetsFormulaUIPlugin], [n.UniverCollaborationPlugin], [O.UniverSheetsFilterPlugin], [S.UniverSheetsConditionalFormattingPlugin], [te.UniverSheetsHyperLinkPlugin], [ne.UniverSheetsHyperLinkUIPlugin], [p.UniverDataValidationPlugin], [w.UniverSheetsDataValidationPlugin], [T.UniverSheetsDataValidationMobileUIPlugin], [i.UniverProFormulaEnginePlugin, {
      notExecuteFormula: true
    }], [v.UniverDrawingUIPlugin], [E.UniverSheetsDrawingPlugin], [D.UniverSheetsDrawingUIPlugin], [d.UniverSheetSparklinePlugin], [f.UniverSheetSparklineUIPlugin], [o.UniverSheetsChartPlugin], [s.UniverSheetsChartUIPlugin], [l.UniverSheetsShapePlugin], [u.UniverSheetsShapeUIPlugin], [c.UniverSheetsPivotTablePlugin, {
      notExecuteFormula: true
    }], [j.UniverSheetsTablePlugin]].forEach(([var_core_value_sig5EFB, var_core_value_sig3A85]) => this.registerPlugin(var_core_value_sig5EFB, var_core_value_sig3A85));
  }
  dispose() {
    super.dispose(), this.unMountHistoryContent(), this._pluginMap["clear"]();
  }
  registerPlugin(var_core_value_sigD494, var_core_value_sigBF6D, var_core_value_sigD051) {
    if (this._pluginMap["has"](var_core_value_sigD494.pluginName) && !var_core_value_sigD051) throw Error("[MobileHistoryLoaderService]: Plugin " + var_core_value_sigD494.pluginName + " has been registered.");
    this._pluginMap["set"](var_core_value_sigD494.pluginName, [var_core_value_sigD494, var_core_value_sigBF6D]);
  }
  getAllPlugins() {
    return Array.from(this._pluginMap["values"]());
  }
  mountHistoryContent(var_core_value_sig16D9, var_core_value_sigF378) {
    let var_core_value_sig5F6C = document.getElementById(it);
    var_core_value_sig5F6C && (var_core_value_sig5F6C.style["display"] = "block", this._initUniver(var_core_value_sig16D9, var_core_value_sigF378));
  }
  unMountHistoryContent() {
    var var_core_value_sig7E85;
    this._disposableCollection["dispose"](), (var_core_value_sig7E85 = this.historyUniver) == null || var_core_value_sig7E85.dispose(), this._historyUniver$["next"](null);
    let var_core_value_sigF204 = document.getElementById(it);
    var_core_value_sigF204 && (var_core_value_sigF204.style["display"] = "none", this._internalWebWorker &&= (this._internalWebWorker["terminate"](), null));
  }
  _initUniver(var_core_value_sig7A15, var_core_value_sigEEA6) {
    var var_core_value_sigEAE1, var_core_value_sigC69F, var_core_value_sig0442;
    if (this.historyUniver) return;
    let var_core_value_sig697A = new e.Univer({
        ...Be(this._localeService),
        override: [[e.IAuthzIoService, {
          useClass: r.AuthzIoHttpService
        }]]
      }),
      var_core_value_sigDB65 = var_core_value_sig697A.__getInjector(),
      var_core_value_sig045E = var_core_value_sigDB65.get(e.ThemeService);
    this._disposableCollection["add"](this._themeService["darkMode$"].subscribe(var_core_value_sig2682 => {
      var_core_value_sig045E.setDarkMode(var_core_value_sig2682);
    })), this._disposableCollection["add"](this._themeService["currentTheme$"].subscribe(var_core_value_sig4BB5 => {
      var_core_value_sig045E.setTheme(var_core_value_sig4BB5);
    }));
    let var_core_value_sig4524 = var_core_value_sigDB65.get(e.LocaleService);
    var_core_value_sig4524.setLocale(this._localeService["getCurrentLocale"]()), var_core_value_sig4524.setDirection(this._localeService["getDirection"]()), var_core_value_sigDB65.get(e.IConfigService).setConfig(r.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, this._configService["getConfig"](r.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY));
    let var_core_value_sig64D5 = this._configService["getConfig"](a.LS_CONFIG_KEY);
    var_core_value_sig64D5 && var_core_value_sig697A.registerPlugin(a.UniverLicensePlugin, {
      license: var_core_value_sig64D5.ls
    });
    let var_core_value_sig9678 = (var_core_value_sigEAE1 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_core_value_sigEAE1.workerURL,
      var_core_value_sig5E74 = !!var_core_value_sig9678;
    var_core_value_sig5E74 && (this._internalWebWorker = var_core_value_sig9678 instanceof Worker ? var_core_value_sig9678 : null, var_core_value_sig697A.registerPlugin(x.UniverRPCMainThreadPlugin, {
      workerURL: var_core_value_sig9678
    })), this._pluginMap["forEach"](([var_core_value_sig6709, var_core_value_sig52CA]) => {
      var_core_value_sig697A.registerPlugin(var_core_value_sig6709, var_core_value_sig52CA);
    }), var_core_value_sig697A.registerPlugin(rt, {
      historyServerUrl: oe(this._configService["getConfig"](B)),
      historyPanelComponentKey: (var_core_value_sigC69F = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_core_value_sigC69F.historyPanelComponentKey,
      historyPanelHidden: (var_core_value_sig0442 = this._configService["getConfig"]("sheets-history-ui.config")) == null ? undefined : var_core_value_sig0442.historyPanelHidden
    }), var_core_value_sigDB65.invoke(var_core_value_sigC030 => this._initListener(var_core_value_sigC030, var_core_value_sig7A15)), this._historyUniver$["next"](var_core_value_sig697A);
    let var_core_value_sig75FC = var_core_value_sigDB65.get(q),
      var_core_value_sig639A = this._checkCanRevert(var_core_value_sig7A15),
      var_core_value_sig567C = () => {
        He(var_core_value_sigEEA6) ? var_core_value_sig75FC.triggerCustomVersions(var_core_value_sig7A15, var_core_value_sig639A, var_core_value_sigEEA6) : var_core_value_sig75FC.triggerLoadVersions(var_core_value_sig7A15, var_core_value_sig639A).catch(() => {
          var_core_value_sig75FC.status = "error";
        });
      };
    if (this._messageService["show"]({
      content: this._localeService["t"]("sheets-history-ui.loader.info.initializing"),
      type: m.MessageType["Loading"]
    }), var_core_value_sig5E74) try {
      var_core_value_sigDB65.get(x.IRemoteInstanceService).whenReady().then(var_core_value_sig567C).catch(var_core_value_sig567C);
    } catch {
      var_core_value_sig567C();
    } else var_core_value_sig567C();
  }
  _initListener(var_core_value_sig825F, var_core_value_sig546D) {
    let var_core_value_sig8078 = var_core_value_sig825F.get(q);
    this._disposableCollection["add"](var_core_value_sig8078.status$["subscribe"](var_core_value_sig88F6 => {
      switch (var_core_value_sig88F6) {
        case "entered":
          this._dialogService["closeAll"](), this._sidebarService["close"]();
          break;
        case "exited":
          this._commandService["executeCommand"](Ke.id), this.unMountHistoryContent();
          break;
        case "error":
          this.unMountHistoryContent(), this._messageService["show"]({
            content: this._localeService["t"]("sheets-history-ui.loader.panel.listFetchError"),
            type: m.MessageType["Error"],
            duration: 3000
          });
          break;
        default:
          break;
      }
    })), this._disposableCollection["add"](var_core_value_sig8078.revertRevision$["subscribe"](var_core_value_sig37DB => {
      if (var_core_value_sig37DB) {
        let var_core_value_sigBBEE = {
          unitId: var_core_value_sig546D,
          revision: var_core_value_sig37DB
        };
        this._commandService["executeCommand"](n.RevertRevisionMutation["id"], var_core_value_sigBBEE).catch(() => {
          var_core_value_sig8078.status = "error";
        });
      }
    }));
  }
  _checkCanRevert(var_core_value_sigDCED) {
    let var_core_value_sig2829 = this._univerInstanceService["getUnit"](var_core_value_sigDCED);
    if (!var_core_value_sig2829) return false;
    let var_core_value_sig6EE2 = var_core_value_sig2829.getSheets().map(var_core_value_sig5542 => var_core_value_sig5542.getSheetId()),
      var_core_value_sig4CCC = new t.WorkbookEditablePermission(var_core_value_sigDCED).id,
      var_core_value_sig6E47 = var_core_value_sig6EE2.map(var_core_value_sigE0A9 => new t["WorksheetEditPermission"](var_core_value_sigDCED, var_core_value_sigE0A9).id),
      var_core_value_sigB64D = var_core_value_sig6EE2.map(var_core_value_sigA73E => this._selectionProtectionRuleModel["getSubunitRuleList"](var_core_value_sigDCED, var_core_value_sigA73E).map(var_core_value_sig011D => new t.RangeProtectionPermissionEditPoint(var_core_value_sigDCED, var_core_value_sigA73E, var_core_value_sig011D.permissionId).id)).flat(),
      var_core_value_sig2407 = new t["WorkbookRecoverHistoryPermission"](var_core_value_sigDCED).id;
    return this._permissionService["composePermission"]([var_core_value_sig4CCC, ...var_core_value_sig6E47, ...var_core_value_sigB64D, var_core_value_sig2407]).every(var_core_value_sig7620 => !!var_core_value_sig7620.value);
  }
};
at = W([U(0, (0, e.Inject)(e.LocaleService)), U(1, e.IUniverInstanceService), U(2, e.IConfigService), U(3, e.ICommandService), U(4, N.IMessageService), U(5, e.IPermissionService), U(6, (0, e.Inject)(t.RangeProtectionRuleModel)), U(7, (0, e.Inject)(N.IDialogService)), U(8, (0, e.Inject)(N.ISidebarService)), U(9, (0, e.Inject)(e.ThemeService))], at);
let Q = class extends e.Plugin {
  constructor(var_core_value_sigE4D0 = V, var_core_value_sigD5F1, var_core_value_sigBC19) {
    super(), this._config = var_core_value_sigE4D0, this._injector = var_core_value_sigD5F1, this._configService = var_core_value_sigBC19;
    let {
      menu: var_core_value_sig4F3C,
      ...var_core_value_sig8D44
    } = (0, e.merge)({}, V, this._config);
    var_core_value_sig4F3C && this._configService["setConfig"]("menu", var_core_value_sig4F3C, {
      merge: true
    }), this._configService["setConfig"](B, var_core_value_sig8D44);
  }
  onStarting() {
    this._injector["add"]([Y]), this._injector["get"](Y), [[Z, {
      useClass: at
    }], [Ze]].forEach(var_core_value_sigB9FC => this._injector["add"](var_core_value_sigB9FC));
  }
  onSteady() {
    this._injector["get"](Ze);
  }
};
H(Q, "type", e.UniverInstanceType["UNIVER_UNKNOWN"]), H(Q, "pluginName", "UNIVER_SHEETS_HISTORY_MOBILE_UI_PLUGIN"), H(Q, "packageName", se), H(Q, "version", ce), Q = W([(0, e.DependentOn)(a.UniverLicensePlugin, t.UniverSheetsPlugin, N.UniverMobileUIPlugin, r.UniverCollaborationClientPlugin, z.UniverCollaborationClientUIPlugin), U(1, (0, e.Inject)(e.Injector)), U(2, e.IConfigService)], Q);
let ot = class extends e.RxDisposable {
  constructor(var_core_value_sig1660, var_core_value_sigEE7B, var_core_value_sig44DF, var_core_value_sig7E48, var_core_value_sig7B9E, var_core_value_sig5C3B, var_core_value_sig4002, var_core_value_sig4153, var_core_value_sig2825, var_core_value_sig5FD0) {
    super(), this._commandService = var_core_value_sig1660, this._menuManagerService = var_core_value_sigEE7B, this._historyManagerService = var_core_value_sig44DF, this._localeService = var_core_value_sig7E48, this._messageService = var_core_value_sig7B9E, this._collaborationController = var_core_value_sig5C3B, this._localCacheService = var_core_value_sig4002, this._dataLoaderService = var_core_value_sig4153, this._univerInstanceService = var_core_value_sig2825, this._urlService = var_core_value_sig5FD0, H(this, "_revertAcknowledgementSubscription", null), this.disposeWithMe((0, e.toDisposable)(() => this._clearRevertAcknowledgement())), this._init();
  }
  _init() {
    [Ge, Ke].forEach(var_core_value_sig5055 => this.disposeWithMe((0, e.toDisposable)(this._commandService["registerCommand"](var_core_value_sig5055)))), this._menuManagerService["mergeMenu"](Je), this.disposeWithMe(this._commandService["onCommandExecuted"]((var_core_value_sig3801, var_core_value_sig45F0) => {
      if (var_core_value_sig3801.id === n.RevertRevisionMutation["id"] && Ye(var_core_value_sig3801.params)) {
        let {
          revision: var_core_value_sig6167,
          unitId: var_core_value_sig65A1
        } = var_core_value_sig3801.params;
        this._messageService["show"]({
          content: this._localeService["t"]("sheets-history-ui.loader.panel.reverting"),
          type: m.MessageType["Loading"],
          duration: 5000
        });
        let var_core_value_sig7F19 = this._collaborationController["getCollabEntity"](var_core_value_sig65A1);
        if (!var_core_value_sig7F19) {
          this._showRevertFailed();
          return;
        }
        var_core_value_sig45F0 != null && var_core_value_sig45F0.fromCollab ? this._handleRevertAcknowledgement(var_core_value_sig7F19, {
          revision: var_core_value_sig6167,
          unitId: var_core_value_sig65A1
        }, async () => (setTimeout(() => window.location["reload"]()), true), true) : this._handleRevertAcknowledgement(var_core_value_sig7F19, {
          revision: var_core_value_sig6167,
          unitId: var_core_value_sig65A1
        }, async () => {
          let var_core_value_sig8CFA = this._univerInstanceService["getCurrentUnitOfType"](e.UniverInstanceType["UNIVER_SHEET"]),
            var_core_value_sig2E11 = var_core_value_sig8CFA == null ? undefined : var_core_value_sig8CFA.getActiveSheet();
          if (!var_core_value_sig2E11) return false;
          this._univerInstanceService["disposeUnit"](var_core_value_sig65A1);
          let var_core_value_sig5B69 = await this._dataLoaderService["loadUnit"](var_core_value_sig65A1, e.UniverInstanceType["UNIVER_SHEET"]);
          return var_core_value_sig5B69 && var_core_value_sig5B69 instanceof e.Workbook ? (await this._setupSubUnitSync(var_core_value_sig5B69, var_core_value_sig2E11.getSheetId()), true) : false;
        });
      }
    }));
  }
  _handleRevertAcknowledgement(var_core_value_sigA7E3, var_core_value_sigA784, var_core_value_sig4406, var_core_value_sig6806 = false) {
    this._clearRevertAcknowledgement();
    let var_core_value_sigD4AA = (0, P.combineLatest)([var_core_value_sigA7E3.session["event$"], var_core_value_sigA7E3.state$]).pipe((0, P.filter)(([var_core_value_sigBC91, var_core_value_sigCB88]) => Xe(var_core_value_sigBC91, var_core_value_sigA784) && (var_core_value_sigCB88 == null ? undefined : var_core_value_sigCB88.status) === r.CollaborationStatus["SYNCED"]), (0, P.take)(1)),
      var_core_value_sigDC41 = var_core_value_sigD4AA;
    var_core_value_sig6806 && (var_core_value_sigDC41 = var_core_value_sigD4AA.pipe((0, P.timeout)({
      first: 5000
    }))), this._revertAcknowledgementSubscription = var_core_value_sigDC41.pipe((0, P.switchMap)(async () => {
      let var_core_value_sig8D65 = await var_core_value_sig4406();
      return var_core_value_sig8D65 && (this._historyManagerService["unMountHistoryContent"](), await this._localCacheService["exhaustSavingTask"]()), var_core_value_sig8D65;
    }), (0, P.takeUntil)(this.dispose$)).subscribe({
      next: var_core_value_sig8122 => {
        this._clearRevertAcknowledgement(), var_core_value_sig8122 || this._showRevertFailed();
      },
      error: () => {
        this._clearRevertAcknowledgement(), this._showRevertFailed();
      }
    });
  }
  _clearRevertAcknowledgement() {
    var var_core_value_sigFB47;
    (var_core_value_sigFB47 = this._revertAcknowledgementSubscription) == null || var_core_value_sigFB47.unsubscribe(), this._revertAcknowledgementSubscription = null;
  }
  _showRevertFailed() {
    this._messageService["show"]({
      content: this._localeService["t"]("sheets-history-ui.loader.panel.revertFailed"),
      type: m.MessageType["Error"],
      duration: 3000
    });
  }
  async _setupSubUnitSync(var_core_value_sig9B3D1, var_core_value_sigC1CF) {
    await this._updateSubUnitFromURLParams(var_core_value_sig9B3D1, var_core_value_sigC1CF), var_core_value_sig9B3D1.activeSheet$["pipe"]((0, P.takeUntil)(this.dispose$)).subscribe(var_core_value_sigEDC6 => {
      var_core_value_sigEDC6 && this._updateURLWithCurrentState(var_core_value_sigEDC6);
    }), this._urlService["urlChange$"].pipe((0, P.takeUntil)(this.dispose$)).subscribe(() => this._updateSubUnitFromURLParams(var_core_value_sig9B3D1, var_core_value_sigC1CF));
  }
  _updateURLWithCurrentState(var_core_value_sigEE12, var_core_value_sigD70C = false) {
    let var_core_value_sigF047 = this._urlService["getParam"]("subunit");
    var_core_value_sigEE12.getSheetId() !== var_core_value_sigF047 && this._urlService["setParam"]("subunit", var_core_value_sigEE12.getSheetId(), var_core_value_sigD70C);
  }
  async _updateSubUnitFromURLParams(var_core_value_sigC2F9, var_core_value_sig1F51) {
    var var_core_value_sig29F5;
    if (!var_core_value_sig1F51 || !var_core_value_sigC2F9.getSheetBySheetId(var_core_value_sig1F51)) {
      let var_core_value_sig611A = var_core_value_sigC2F9.getUnhiddenWorksheets()[0],
        var_core_value_sig6BD9 = var_core_value_sigC2F9.getSheetBySheetId(var_core_value_sig611A);
      if (!var_core_value_sig6BD9) return;
      this._updateURLWithCurrentState(var_core_value_sig6BD9, true), await this._commandService["executeCommand"](t.SetWorksheetActivateCommand["id"], {
        unitId: var_core_value_sigC2F9.getUnitId(),
        subUnitId: var_core_value_sig611A
      });
      return;
    }
    ((var_core_value_sig29F5 = var_core_value_sigC2F9.getActiveSheet()) == null ? undefined : var_core_value_sig29F5.getSheetId()) !== var_core_value_sig1F51 && (await this._commandService["executeCommand"](t.SetWorksheetActivateCommand["id"], {
      unitId: var_core_value_sigC2F9.getUnitId(),
      subUnitId: var_core_value_sig1F51
    }));
  }
};
ot = W([U(0, e.ICommandService), U(1, N.IMenuManagerService), U(2, (0, e.Inject)(Z)), U(3, (0, e.Inject)(e.LocaleService)), U(4, N.IMessageService), U(5, (0, e.Inject)(r.CollaborationController)), U(6, r.ILocalCacheService), U(7, (0, e.Inject)(r.DataLoaderService)), U(8, e.IUniverInstanceService), U(9, z.IURLService)], ot);
let $ = class extends e.Plugin {
  constructor(var_core_value_sig5A51 = V, var_core_value_sigF1D1, var_core_value_sig370E) {
    super(), this._config = var_core_value_sig5A51, this._injector = var_core_value_sigF1D1, this._configService = var_core_value_sig370E;
    let {
      menu: var_core_value_sigDE14,
      ...var_core_value_sig02CB
    } = (0, e.merge)({}, V, this._config);
    var_core_value_sigDE14 && this._configService["setConfig"]("menu", var_core_value_sigDE14, {
      merge: true
    }), this._configService["setConfig"](B, var_core_value_sig02CB);
  }
  onStarting() {
    this._injector["add"]([Y]), this._injector["get"](Y), [[Z], [ot]].forEach(var_core_value_sig7E56 => this._injector["add"](var_core_value_sig7E56));
  }
  onSteady() {
    this._injector["get"](ot);
  }
};
H($, "pluginName", "UNIVER_SHEETS_HISTORY_UI_PLUGIN"), H($, "packageName", se), H($, "version", ce), H($, "type", e.UniverInstanceType["UNIVER_SHEET"]), $ = W([(0, e.DependentOn)(a.UniverLicensePlugin, t.UniverSheetsPlugin, ie.UniverSheetsHistoryPlugin, r.UniverCollaborationClientPlugin, z.UniverCollaborationClientUIPlugin), U(1, (0, e.Inject)(e.Injector)), U(2, e.IConfigService)], $), exports.SHEETS_HISTORY_UI_PLUGIN_CONFIG_KEY = B, exports.ToggleEditHistoryOperation = Ge, Object.defineProperty(exports, "UniverSheetsHistoryMobileUIPlugin", {
  enumerable: true,
  get: function () {
    return Q;
  }
}), Object.defineProperty(exports, "UniverSheetsHistoryUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
