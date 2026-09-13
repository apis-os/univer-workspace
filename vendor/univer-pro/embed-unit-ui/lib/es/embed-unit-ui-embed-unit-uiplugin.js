import { IReferencedUnitCatalogService, UniverEmbedPlugin, fromResourceRefUnitType, getResourceRefUnitKey } from "@univerjs-pro/embed";
import { AuthzIoLocalService, BaseDataModel, DependentOn, Disposable, DisposableCollection, IAuthzIoService, IConfigService, IContextService, IMentionIOService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleService, MentionIOLocalService, Plugin, ThemeService, Tools, Univer, UniverInstanceType, Workbook, createIdentifier, merge, toDisposable } from "@univerjs/core";
import { UniverUIPlugin, useDependency, useObservable } from "@univerjs/ui";
import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { LS_CONFIG_KEY, UniverLicensePlugin } from "@univerjs-pro/license";
import { BehaviorSubject, Subject } from "rxjs";
import { IBasePermissionService, UniverBasesPlugin } from "@univerjs-pro/bases";
import { IBaseCanvasRootResolverService, IBaseUIStateService, UniverBasesUIPlugin, createScopedBaseCanvasRootResolverService } from "@univerjs-pro/bases-ui";
import { IAttachmentIoService, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverRPCMainThreadPlugin } from "@univerjs/rpc";
import { IRefSelectionsService, REF_SELECTIONS_ENABLED, UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { RefSelectionsRenderService, UniverSheetsFormulaUIPlugin } from "@univerjs/sheets-formula-ui";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { Z } from "./embed-unit-ui-ireferenced-unit-viewer.js";
const W = "embed-unit-ui.config",
  G = {};
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219) {
  "@babel/helpers - typeof";

  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644;
  }, K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219);
}
function Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222) {
  if (K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 || "default");
    if (K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221);
}
function ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229, "string");
  return K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 + "";
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233;
}
const J = ["pointerup", "mouseup", "keyup"];
var Ae = class {
  createSocket() {
    return Promise.resolve(null);
  }
};
const je = [[IAuthzIoService, null], [IUndoRedoService, null], [IMentionIOService, null]],
  Me = [[IAuthzIoService, {
    useClass: AuthzIoLocalService
  }], [IAttachmentIoService, null], [IMentionIOService, {
    useClass: MentionIOLocalService
  }]];
var Ne = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) {
    super(), this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, this._onSelection = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, q(this, "_univer", null), q(this, "_container", null), q(this, "_activeUnitId", null), q(this, "_activeUnit", null), q(this, "_isApplyingDecoration", false), q(this, "_selectionDisposables", new DisposableCollection());
  }
  mount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) {
    this._container === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 && this._univer || (this._disposeUniver(), this._container = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, this._univer = this._createUniver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654));
  }
  unmount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) {
    this._container === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 && this._disposeUniver();
  }
  async open(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = this._univer;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.__getInjector().get(IUniverInstanceService);
    this._selectionDisposables["dispose"](), this._selectionDisposables = new DisposableCollection(), this._activeUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.disposeUnit(this._activeUnitId), this._activeUnit = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = fromResourceRefUnitType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.ref["unit"].type);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 === UniverInstanceType.UNIVER_SHEET) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.createUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659));else {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 === UniverInstanceType.UNIVER_BASE) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659);
        this._makeBaseSnapshotReadOnly(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.id = "__referenced_unit_viewer_base__" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.ref["unit"].selector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.createUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461), this._setBasePermissionsReadOnly(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662);
      } else throw Error("REFERENCED_UNIT_VIEWER_UNSUPPORTED_UNIT_TYPE");
    }
    return this._activeUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.getUnitId()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.getUnitId()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 instanceof Workbook ? this._observeSheetSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 instanceof BaseDataModel && this._observeBaseSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662;
  }
  setDecoration(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = this._univer;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 || !this._activeUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670) return;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.kind === "sheet-range") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.__getInjector().get(IUniverInstanceService).getUnit(this._activeUnitId, UniverInstanceType.UNIVER_SHEET),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.getSheetBySheetId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.sheetId)) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.getSheetBySheetName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.sheetName));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) return;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.setActiveSheet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.__getInjector().get(IContextService).setContextValue(REF_SELECTIONS_ENABLED, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.__getInjector().get(IRefSelectionsService).setSelections(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.getSheetId(), [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.selections]);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.__getInjector().get(IBaseUIStateService);
    this._isApplyingDecoration = true;
    try {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.activateTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.selection["tableId"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.activateView(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.selection["viewId"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.setSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.selection);
    } finally {
      this._isApplyingDecoration = false;
    }
  }
  dispose() {
    this._disposeUniver(), super.dispose();
  }
  _disposeUniver() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676;
    this._selectionDisposables["dispose"](), this._selectionDisposables = new DisposableCollection(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = this._univer) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.dispose(), this._univer = null, this._container = null, this._activeUnitId = null, this._activeUnit = null;
  }
  _observeSheetSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.__getInjector().get(IContextService);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.setContextValue(REF_SELECTIONS_ENABLED, true), this._selectionDisposables["add"](toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.setContextValue(REF_SELECTIONS_ENABLED, false);
    }));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.__getInjector().get(IRenderManagerService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.getUnitId())) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.with(RefSelectionsRenderService);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 && (this._selectionDisposables["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.enableSelectionChanging()), this._selectionDisposables["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.selectionMoveEnd$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = this._activeUnit,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.getActiveSheet();
          !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 || this._onSelection({
            kind: "sheet-range",
            ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.rangeWithCoord),
            unit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463,
            sheetId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.getSheetId(),
            sheetName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.getName()
          });
        })));
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682(), this._selectionDisposables["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.created$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.getUnitId() && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682();
    }));
  }
  _observeBaseSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.__getInjector().get(IBaseUIStateService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.getSnapshot(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.tableOrder[0] ?? Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.tables)[0],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.tables[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693] : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.viewOrder) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690[0]) ?? Object.keys((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.views) ?? {})[0];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.activateTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.activateView(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695), this._selectionDisposables["add"](Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.state$, document, () => this._isApplyingDecoration, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = this._activeUnit;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 && this._onSelection({
        kind: "base-grid",
        unit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619,
        selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.tableId,
        viewId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.viewId
      });
    }));
  }
  _makeBaseSnapshotReadOnly(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) {
    Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.tables).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => {
      Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.fields).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.readonly = true;
      });
    });
  }
  _setBasePermissionsReadOnly(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.__getInjector().get(IBasePermissionService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.getSnapshot();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.setBasePermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.getUnitId(), {
      createTable: false
    }), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.tables).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.setTablePermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.id, {
        edit: false,
        createField: false,
        createRecord: false,
        delete: false,
        manageView: false
      });
    });
  }
  _createUniver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = this._configService["getConfig"](W),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.workerURL,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = this._localeService["getCurrentLocale"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = this._localeService["getLocales"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = new Univer({
        darkMode: this._themeService["darkMode"],
        direction: this._localeService["getDirection"](),
        locale: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 ? {
          locales: {
            [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118
          }
        } : null),
        override: je,
        theme: this._themeService["getCurrentTheme"]()
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = this._configService["getConfig"](LS_CONFIG_KEY);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverLicensePlugin, {
      license: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.ls
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverRPCMainThreadPlugin, {
      workerURL: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverRenderEnginePlugin), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverUIPlugin, {
      container: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
      contextMenu: false,
      disableAutoFocus: true,
      footer: true,
      header: false,
      headerMenu: false,
      toolbar: false
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverProFormulaEnginePlugin, {
      notExecuteFormula: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverDocsPlugin), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverDocsUIPlugin), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverSheetsPlugin), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverSheetsFormulaPlugin), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverSheetsUIPlugin, {
      disableAutoFocus: true,
      disableEdit: true,
      footer: {
        addSheetButtonConfig: {
          show: false
        },
        menus: false,
        sheetBar: true,
        statisticBar: false,
        zoomSlider: false
      },
      formulaBar: false
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverSheetsFormulaUIPlugin, {
      functionScreenTips: false,
      menu: {}
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverCollaborationClientPlugin, {
      enableCollaboration: false,
      override: Me,
      socketService: Ae
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverBasesPlugin), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.registerPlugin(UniverBasesUIPlugin, {
      disableEdit: true,
      override: [[IBaseCanvasRootResolverService, {
        useValue: createScopedBaseCanvasRootResolverService(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114)
      }]],
      workbench: {
        collaborationStatus: false,
        fallbackToFirstUnit: true,
        footer: false,
        global: false,
        header: false,
        headerMenu: false,
        leftSidebar: true,
        mobile: false,
        rightSidebar: false,
        route: false
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119;
  }
};
function Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241()) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = null;
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.selection ?? null;
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 &&= (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243), null);
    };
  return J.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.addEventListener(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245)), toDisposable(() => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.unsubscribe(), J.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.removeEventListener(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245));
  });
}
let Q = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138) {
    this._catalog = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138;
  }
  createSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 = {}) {
    return new Le(this._catalog, this._configService, this._localeService, this._themeService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143);
  }
};
var Le = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149) {
    super(), this._catalog = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, this._options = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, q(this, "_state$", new BehaviorSubject({
      activeUnit: null,
      units: [],
      status: "loading"
    })), q(this, "_selection$", new Subject()), q(this, "_runtime", undefined), q(this, "_container", null), q(this, "_decoration", null), q(this, "_generation", 0), q(this, "_lastSelectionKey", ""), q(this, "_isDisposed", false), q(this, "selection$", this._selection$["asObservable"]()), q(this, "state$", this._state$["asObservable"]()), this._runtime = new Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 => this._publishSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627)), this.disposeWithMe(this._runtime), this._initialize().catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => {
      this._setState({
        ...this.getState(),
        error: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628,
        status: "unavailable"
      });
    });
  }
  getState() {
    return this._state$["getValue"]();
  }
  mount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155) {
    this._container = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, this._runtime["mount"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = this.getState().activeUnit;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 && this._openUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => {
      this._setState({
        ...this.getState(),
        error: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630,
        status: "unavailable"
      });
    });
  }
  unmount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159) {
    this._container === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 && (this._generation += 1, this._container = null, this._runtime["unmount"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159));
  }
  async activateUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161) {
    this._lastSelectionKey = "", this._setState({
      activeUnit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161,
      units: this.getState().units,
      status: "loading"
    }), this._container && (await this._openUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161));
  }
  async refresh() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = this.getState().activeUnit;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 && (this._setState({
      activeUnit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163,
      units: this.getState().units,
      status: "loading"
    }), await this._openUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163));
  }
  setDecoration(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165) {
    this._decoration = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 = this.getState().activeUnit;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 && getResourceRefUnitKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.ref) === getResourceRefUnitKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.unit["ref"]) && this._runtime["setDecoration"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165);
  }
  dispose() {
    this._isDisposed = true, this._generation += 1, this._selection$["complete"](), this._state$["complete"](), super.dispose();
  }
  async _initialize() {
    let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170] = await Promise.all([this._catalog["listUnits"](UniverInstanceType.UNIVER_SHEET), this._catalog["listUnits"](UniverInstanceType.UNIVER_BASE)]),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170];
    if (this._isDisposed) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 = this._options["initialRef"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => getResourceRefUnitKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.ref) === getResourceRefUnitKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171)) ?? null : this._options["initialRefRequired"] ? null : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0] ?? null;
    this._setState({
      activeUnit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172,
      units: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A,
      status: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 ? "loading" : "unavailable"
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 && this._container ? await this._openUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 || this._setState({
      activeUnit: null,
      units: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A,
      status: "unavailable"
    });
  }
  async _openUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 = ++this._generation;
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = await this._catalog["loadUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 !== this._generation) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = await this._runtime["open"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 !== this._generation) return;
      this._setState({
        activeUnit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177,
        units: this.getState().units,
        status: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 ? "ready" : "loading"
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 && this._decoration && getResourceRefUnitKey(this._decoration["unit"].ref) === getResourceRefUnitKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.ref) && this._runtime["setDecoration"](this._decoration);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 === this._generation && this._setState({
        ...this.getState(),
        error: var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5,
        status: "unavailable"
      }), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5;
    }
  }
  _publishSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.kind === "sheet-range" ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.kind, getResourceRefUnitKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.unit["ref"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.sheetId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.ranges] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.kind, getResourceRefUnitKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.unit["ref"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.selection]);
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 !== this._lastSelectionKey && (this._lastSelectionKey = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, this._selection$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181));
  }
  _setState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183) {
    this._isDisposed || this._state$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183);
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = G, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188
    } = merge({}, G, this._config);
    this._configService["setConfig"](W, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188);
  }
  onStarting() {
    [[Z, {
      useClass: Q
    }]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635));
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 as UniverEmbedUnitUIPlugin };
export { Q, q };
