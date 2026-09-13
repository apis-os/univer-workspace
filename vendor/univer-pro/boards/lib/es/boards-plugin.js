import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { I, Jt, ic, id, to } from "./internal-core-endo.js";
import { ec, tc } from "./boards-board-unit-permission-actions.js";
import { cl, sl } from "./boards-add-board-element-operation.js";
import { al } from "./boards-add-board-elements-operation.js";
import { M } from "./boards-board-element-type.js";
import { dc, fc, lc, uc } from "./boards-board-permission.js";
import { Qo, sn, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
import { Cu, Tu, wu } from "./boards-insert-board-draft-operation.js";
import { Iu } from "./boards-reorder-board-elements-operation.js";
import { ln } from "./boards-board-custom-shape-type.js";
import { In } from "./boards-board-shape-sequence-lifeline-data.js";
import { ua } from "./boards-board-shape-element.js";
import { Ln } from "./boards-board-shape-sequence-activation-data.js";
import { Zi } from "./boards-board-insert-default-size.js";
import { la } from "./boards-board-connector-element.js";
import { jf } from "./boards-iboard-line-adapter.js";
import { Gr, Wr } from "./boards-analyze-board-model-layout.js";
import { Ms, Ns, ws } from "./boards-remove-board-element.js";
import { ac } from "./boards-board-permission-value.js";
import { rc } from "./boards-board-element-permission-object-id.js";
import { cc } from "./boards-edit-board-targets.js";
import { ff } from "./boards-board-model.js";
import { L } from "./boards-iboard-element.js";
import { hs, ms, ps } from "./boards-board-elements.js";
import { gl, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466257 } from "./boards-begin-board-import-operation.js";
import { bl, yl } from "./boards-begin-board-mind-map-operation.js";
import { Cl, Sl } from "./boards-begin-board-pen-operation.js";
import { wl } from "./boards-board-resources-adapter.js";
import { ml, pl } from "./boards-begin-board-export-operation.js";
import { dl, ul } from "./boards-begin-board-container-operation.js";
import { Dl, El, Tl } from "./boards-begin-board-resources-operation.js";
import { Ss } from "./boards-add-board-element.js";
import { Gs, Hs, Us, Vs, Ws } from "./boards-board-connector-label-style.js";
import { kl } from "./boards-begin-board-translate-operation.js";
import { ql } from "./boards-commit-board-container-transform-operation.js";
import { Zl } from "./boards-disband-board-container-operation.js";
import { Nc } from "./boards-fit-board-container-to-content-operation.js";
import { qr } from "./boards-insert-board-chart.js";
import { qs } from "./boards-board-page-background.js";
import { Gd } from "./boards-wrap-board-elements-in-container-operation.js";
import { sd } from "./boards-board-container-auto-resize-operation.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB218 } from "./boards-board-container-membership-lock-operation.js";
import { Cd } from "./boards-board-elements-metadata-operation.js";
import { Ad } from "./boards-board-swimlane-lane-size-operation.js";
import { Td } from "./boards-board-swimlane-lanes-operation.js";
import { ad } from "./boards-reparent-board-elements-operation.js";
import { Uu } from "./boards-reorder-board-object-list-element-operation.js";
import { ks } from "./boards-remove-board-elements-operation.js";
import { Nu } from "./boards-remove-board-swimlane-lane-operation.js";
import { Pd } from "./boards-board-theme-operation.js";
var Kr = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231, 1);
    });
  }
  getInsertChartMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 of this._adapters) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.getInsertChartMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100;
    }
    return null;
  }
  getRemoveChartMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {
      redoMutations: [],
      undoMutations: []
    };
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 of this._adapters) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.getRemoveChartMutationInfos) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.redoMutations["push"](...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.redoMutations), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.undoMutations["push"](...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.undoMutations));
    }
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10;
  }
};
var gs = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261, 1);
    });
  }
  insertTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 of this._adapters) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263.insertTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117)) return true;
    return false;
  }
  getRemoveTableMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20 = {
      redoMutations: [],
      undoMutations: []
    };
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 of this._adapters) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.getRemoveTableMutationInfos) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20.redoMutations["push"](...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.redoMutations), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20.undoMutations["push"](...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.undoMutations));
    }
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20;
  }
  getSearchEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 of this._adapters) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.getSearchEntries) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110);
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10;
  }
};
function sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464473) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472.getAllPermissionPoint().forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 => {
      tc.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.type) && "unitId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464473 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472.deletePermissionPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258);
    }).unsubscribe();
  });
}
var ll = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320, 1);
    });
  }
  beginContainerMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 of this._adapters) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322.beginContainerMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453)) return true;
    return false;
  }
  beginSwimlaneMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 of this._adapters) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456;
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.beginSwimlaneMode) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455)) return true;
    }
    return false;
  }
};
var fl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324, 1);
    });
  }
  beginExport(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 of this._adapters) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.beginExport(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461)) return true;
    return false;
  }
};
var hl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327, 1);
    });
  }
  beginImport(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461465) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 of this._adapters) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329.beginImport(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461465)) return true;
    return false;
  }
};
var vl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, 1);
    });
  }
  beginMindMapMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 of this._adapters) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332.beginMindMapMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469)) return true;
    return false;
  }
};
var xl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461471) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461471), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461471);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, 1);
    });
  }
  beginPenMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 of this._adapters) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.beginPenMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473)) return true;
    return false;
  }
};
var Ol = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, 1);
    });
  }
  beginTranslate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 of this._adapters) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.beginTranslate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481)) return true;
    return false;
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466258 = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986) {
    this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985, this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986, I(this, "hostType", UniverInstanceType.UNIVER_BOARD);
  }
  get shapeChanged$() {
    return mergeLocal(this._boardElementService["elementAdd$"], this._boardElementService["elementUpdate$"], this._boardElementService["elementRemove$"]).pipe(mergeMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 => [...new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.map(({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183
    }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183))]), map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 => ({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427
    })));
  }
  getShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991 = this._getElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991 ? this._toSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991) : null;
  }
  listShapes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994) {
    return this._boardElementService["getElementOrder"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994.subUnitId).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 => this.getShape({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428
    })).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429);
  }
  listShapesInUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461997 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996, UniverInstanceType.UNIVER_BOARD);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461997 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461997.getSnapshot().pageOrder["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 => this.listShapes({
      hostType: this.hostType,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430
    }))) ?? [];
  }
  createShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002 = this._createShapeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001);
    return this._commandService["syncExecuteCommand"](sl.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000.subUnitId,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002
    }) ? this._toSnapshot({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.id
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002) : null;
  }
  createShapes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007.length === 0) return null;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 => this._createShapeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431));
    return this._commandService["syncExecuteCommand"](al.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006.subUnitId,
      elements: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26
    }) ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 => this._toSnapshot({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.id
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432)) : null;
  }
  updateShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012 = this._getElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012.type === M.Connector ? this._updateConnector(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011) : this._updateBasicShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011);
    return this._commandService["syncExecuteCommand"](uc.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010.shapeId,
      allowInactiveTarget: true,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013
    });
  }
  createFormulaLastValueMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021 = this._getElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021.type !== M.Shape) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021.shapeData["formulaBinding"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022) return null;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021.shapeData,
        formulaBinding: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022,
          lastValue: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020)
        }
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021,
        shapeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45
      };
    return {
      id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018.shapeId,
        allowInactiveTarget: true,
        element: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB46,
        formulaLastValueGuard: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019
      }
    };
  }
  removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028) {
    return this._commandService["syncExecuteCommand"](Tu.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028.shapeId
    });
  }
  bringToFront(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030) {
    return this._arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030, "front");
  }
  bringForward(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032) {
    return this._arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032, "forward");
  }
  sendBackward(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462034) {
    return this._arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462034, "backward");
  }
  sendToBack(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036) {
    return this._arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036, "back");
  }
  setZOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039) {
    return this._commandService["syncExecuteCommand"](Iu.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038.subUnitId,
      elementIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038.shapeId],
      zOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039
    });
  }
  _getElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043 = this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042.shapeId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043.element;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044.type) === M.Shape || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044.type) === M.Connector ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 : null;
  }
  _toSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049.type === M.Connector) return this._connectorToSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049.shapeData["shapeType"] ?? ShapeTypeEnum.Rect;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050,
      shapeData: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049.shapeData),
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049.name,
      description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049.description,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049.visible !== false,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049.selectable !== false,
      transform: vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049.transform)
    };
  }
  _connectorToSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058 = computeConnectorRouteLayout(this._getConnectorRoute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055), yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.connectorData["routing"])),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059 = xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.connectorData["start"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.connectorData["end"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060 = Sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.connectorData["style"]),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49 = {
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.lineType,
        adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.adjustValues,
        stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060,
        relation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059.from || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059.to ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059 : undefined,
        ln: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060,
          startArrow: Cf((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.connectorData["style"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056.startMarker),
          endArrow: Cf((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.connectorData["style"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.endMarker)
        }
      };
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.lineType,
      shapeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB49,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.name,
      description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.description,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.visible !== false,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.selectable !== false,
      transform: {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.worldRect["left"],
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.worldRect["top"],
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.worldRect["width"],
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.worldRect["height"],
        rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.rotation,
        flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.worldRect["flipX"] ?? false,
        flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.worldRect["flipY"] ?? false
      }
    };
  }
  _getConnectorRoute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072 = this._getEndpointPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.connectorData["start"], true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.transform),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073 = this._getEndpointPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.connectorData["end"], false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.transform),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462074 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.connectorData["routing"] === "curve" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.connectorData["curveData"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.anchors : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.connectorData["routing"] === "orthogonal" ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.connectorData["orthogonalData"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071.routePoints) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.connectorData["waypoints"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.connectorData["waypoints"],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462074 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462074.map(({
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434
      }) => ({
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434
      }))) ?? [];
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.length > 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.connectorData["routing"] === "straight") return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073];
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073.x) / 2;
    return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072, {
      x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072.y
    }, {
      x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073.y
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073];
  }
  _getEndpointPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.kind === "free") return {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.x,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.y
    };
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.kind === "shapeSite") {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462087;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.connectionPosition !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.fallbackPoint) return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.fallbackPoint
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 = this.getShape({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.shapeId
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086 = In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.shapeData)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086.participantEngineShapeType,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436 ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436,
          shapeData: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.shapeData,
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436,
            isCustom: false,
            customGeometry: undefined
          }
        } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462087 = resolveShapeConnectionPoint(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.connectionSiteId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462087.point);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.fallbackPoint) return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.fallbackPoint
    };
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085.left ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085.top ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085.width ?? 1,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085.height ?? 1;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084 ? {
      x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55,
      y: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 / 2
    } : {
      x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57,
      y: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 / 2
    };
  }
  _createShapeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094.shapeType;
    return isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095) ? this._createConnector({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094,
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095
    }) : this._createBasicShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094);
  }
  _createBasicShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462102;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462103 = ua({
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.shapeType,
        left: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099.left) ?? 0,
        top: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.top) ?? 0,
        width: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101.width,
        height: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462102.height
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462103.shapeData,
        ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.shapeData ?? {}),
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462103.shapeData["shapeType"]
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104 = In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462103.shapeData),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462103.shapeData);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106;
      Object.assign(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51, {
        sequenceLifeline: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104,
          ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106.sequenceLifeline)
        }
      });
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107;
      Object.assign(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51, {
        sequenceActivation: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105,
          ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.shapeData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107.sequenceActivation)
        }
      });
    }
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462103,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.name,
      description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.description,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.visible ?? true,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.selectable ?? true,
      transform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462103.transform,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.transform
      },
      shapeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51
    };
  }
  _createConnector(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53 = {
        left: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119.left) ?? 0,
        top: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.top) ?? 0,
        width: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121.width) ?? Zi.shapeWidth,
        height: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122.height) ?? Zi.shapeHeight,
        rotation: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123.rotation) ?? 0,
        flipX: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.flipX) ?? false,
        flipY: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125.flipY) ?? false
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54 = {
        ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.shapeData ?? {}),
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.shapeType
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB55 = {
        hostType: this.hostType,
        unitId: "",
        subUnitId: "",
        shapeId: generateRandomId(6),
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.shapeType,
        shapeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54,
        name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.name,
        description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.description,
        visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.visible ?? true,
        selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.selectable ?? true,
        transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 = resolveConnectorRoutePoints(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB55),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128[0] ?? {
        x: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.left,
        y: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.top
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB57 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128.length - 1] ?? {
        x: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.left + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.width,
        y: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.top + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.height
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129 = Of((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54.relation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.from, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130 = Of((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54.relation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127.to, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB57),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128.slice(1, -1).map(Af),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.shapeType);
    return {
      ...la({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB55.shapeId,
        start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129,
        end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130,
        routing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131,
        routingMode: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30.length > 0 ? "manual" : "auto",
        waypoints: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30,
        orthogonalData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 === "orthogonal" ? {
          routePoints: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30
        } : undefined,
        style: Tf(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54, undefined)
      }),
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.name,
      description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.description,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.visible ?? true,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.selectable ?? true
    };
  }
  _updateBasicShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.shapeData ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.shapeData);
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146,
      name: "name" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.name : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.name,
      description: "description" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.description : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.description,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.visible ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.visible,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.selectable ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.selectable,
      transform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.transform,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.transform
      },
      shapeData: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148,
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.shapeType ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148.shapeType ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.shapeData["shapeType"]
      }
    };
  }
  _updateConnector(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462157 = this._connectorToSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.shapeData ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462157.shapeData),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.shapeType ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.shapeType ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462157.shapeType,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB63 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462157,
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159,
        shapeData: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159
        },
        transform: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462157.transform,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.transform
        }
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160 = resolveConnectorRoutePoints(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB63),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462161 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160[0] ?? this._getEndpointPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.connectorData["start"], true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.transform),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.length - 1] ?? this._getEndpointPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.connectorData["end"], false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.transform),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462157.shapeData["relation"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164 = kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.connectorData["start"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163.from, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.relation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462155.from, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462161),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165 = kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.connectorData["end"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163.to, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.relation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462156.to, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166 = bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.slice(1, -1).map(Af),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.connectorData,
        start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164,
        end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165,
        routing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166,
        routingMode: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32.length > 0 ? "manual" : "auto",
        waypoints: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32,
        style: Tf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.connectorData["style"])
      };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166 === "orthogonal" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64.orthogonalData = {
      routePoints: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32
    } : delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64.orthogonalData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166 !== "curve" && delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64.curveData, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153,
      name: "name" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.name : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.name,
      description: "description" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.description : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.description,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.visible ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.visible,
      selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154.selectable ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.selectable,
      transform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153.transform,
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB63.transform
      },
      connectorData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64
    };
  }
  _arrange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183) {
    return this._commandService["syncExecuteCommand"](Iu.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182.subUnitId,
      elementIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182.shapeId],
      placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183
    });
  }
};
function vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136) {
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136.left ?? 0,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136.top ?? 0,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136.width ?? Zi.shapeWidth,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136.height ?? Zi.shapeHeight,
    rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136.rotation ?? 0,
    flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136.flipX ?? false,
    flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136.flipY ?? false
  };
}
function yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466138) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466138 === "straight" ? ShapeTypeEnum.StraightConnector1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466138 === "curve" ? ShapeTypeEnum.CurvedConnector3 : ShapeTypeEnum.BentConnector3;
}
function bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466140) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466140 === ShapeTypeEnum.Line || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466140 === ShapeTypeEnum.StraightConnector1 ? "straight" : isCurvedConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466140) ? "curve" : "orthogonal";
}
function xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466143) {
  return {
    from: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466142.kind === "shapeSite" ? {
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466142.shapeId,
      cxnIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466142.connectionSiteId
    } : undefined,
    to: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466143.kind === "shapeSite" ? {
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466143.shapeId,
      cxnIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466143.connectionSiteId
    } : undefined
  };
}
function Sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146) {
  return {
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146.stroke,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146.strokeWidth,
    opacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146.opacity,
    dashType: !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146.dash) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146.dash["length"] === 0 ? ShapeLineDashEnum.Solid : ShapeLineDashEnum.Dash
  };
}
function Cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466148) {
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466148 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466148.type === "none")) return {
    type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466148.type === "openArrow" ? ShapeArrowTypeEnum.OpenArrow : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466148.type === "openDiamond" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466148.type === "filledDiamond" ? ShapeArrowTypeEnum.DiamondArrow : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466148.type === "openCircle" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466148.type === "filledCircle" ? ShapeArrowTypeEnum.OvalArrow : ShapeArrowTypeEnum.Arrow,
    size: wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466148.size)
  };
}
function wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466150) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466150 === "sm") return ShapeArrowSizeEnum.Small;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466150 === "lg") return ShapeArrowSizeEnum.Large;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466150 === "md") return ShapeArrowSizeEnum.Medium;
}
function Tf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466153) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466155;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB213 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466152.stroke ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466152.ln ?? {};
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466153,
    stroke: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB213.color,
    strokeWidth: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB213.width,
    opacity: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB213.opacity,
    dash: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB213.dashType === ShapeLineDashEnum.Solid ? [] : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB213.dashType === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466153 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466153.dash : [8, 4],
    startMarker: Ef((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466152.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466154.startArrow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466153 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466153.startMarker),
    endMarker: Ef((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466152.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466155.endArrow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466153 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466153.endMarker)
  };
}
function Ef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466161) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466162 = Cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466161);
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160.type) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466162 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466162.type) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160.size) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466162 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466162.size)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466161;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160.type) !== undefined) return {
    type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160.type === ShapeArrowTypeEnum.None ? "none" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160.type === ShapeArrowTypeEnum.OpenArrow ? "openArrow" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160.type === ShapeArrowTypeEnum.DiamondArrow ? "filledDiamond" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160.type === ShapeArrowTypeEnum.OvalArrow ? "filledCircle" : "filledArrow",
    size: Df(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466160.size)
  };
}
function Df(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466166) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466166 === ShapeArrowSizeEnum.Small) return "sm";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466166 === ShapeArrowSizeEnum.Large) return "lg";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466166 === ShapeArrowSizeEnum.Medium) return "md";
}
function Of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466169) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466168 ? {
    kind: "shapeSite",
    shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466168.shapeId,
    connectionSiteId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466168.cxnIndex,
    fallbackPoint: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466169
    }
  } : {
    kind: "free",
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466169
  };
}
function kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466175) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A77 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173.shapeId) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174.shapeId) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173.cxnIndex) === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174.cxnIndex),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466172.kind === "free" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466172 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466172.fallbackPoint;
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A77 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466176 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466176.x) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466175.x && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466176.y === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466175.y ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466172 : Of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466175);
}
function Af(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466183) {
  return {
    id: "shape-api-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466183,
    kind: "manual",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466182.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466182.y
  };
}
var Mf = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438, 1);
    });
  }
  beginLineMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 of this._adapters) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.beginLineMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188)) return true;
    return false;
  }
};
const Nf = {
    id: "board.operation.begin-line",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466187) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466187 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466186.get(jf).beginLineMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466187) : false
  },
  Pf = {};
let Ff = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462191) {
    super(), this._instanceSrv = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462190, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462191, this._initUnitListener();
  }
  _initUnitListener() {
    this._instanceSrv["getAllUnitsForType"](UniverInstanceType.UNIVER_BOARD).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 => this._loadUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441)), this.disposeWithMe(this._instanceSrv["getTypeOfUnitAdded$"](UniverInstanceType.UNIVER_BOARD).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 => this._loadUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.unit))), this.disposeWithMe(this._instanceSrv["getTypeOfUnitDisposed$"](UniverInstanceType.UNIVER_BOARD).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 => {
      this._boardElementService["removeElementDataForUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.getUnitId());
    }));
  }
  _loadUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.getActivePage(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67 = {},
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.id;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197] = Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.elements, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.elementOrder, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.getThemeData()), this._boardElementService["registerElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67), this._boardElementService["initializeElementNotification"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195);
  }
};
const If = new Set([lc.id, Wr.id, Ns.id]);
let Lf = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462202, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462203, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204, this._univerInstanceService["getAllUnitsForType"](UniverInstanceType.UNIVER_BOARD).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 => this._registerUnitPermissionPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.getUnitId())), this.disposeWithMe(this._univerInstanceService["getTypeOfUnitAdded$"](UniverInstanceType.UNIVER_BOARD).subscribe(({
      unit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446
    }) => this._registerUnitPermissionPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.getUnitId()))), this.disposeWithMe(this._commandService["beforeCommandExecuted"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448) => this._check(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448))), this.disposeWithMe(this._univerInstanceService["getTypeOfUnitDisposed$"](UniverInstanceType.UNIVER_BOARD).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 => sc(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.getUnitId())));
  }
  _registerUnitPermissionPoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462208) {
    ec.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450);
      this._permissionService["getPermissionPoint"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.id) || this._permissionService["addPermissionPoint"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451);
    });
  }
  _check(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.fromCollab || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.fromChangeset) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214 = qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.params) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.params : undefined;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.id === "board.mutation.update-element" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.formulaLastValueGuard) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215 = zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216 = Rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212 = this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_BOARD)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212.getUnitId() : undefined);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216 || this._univerInstanceService["getUnitType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216) !== UniverInstanceType.UNIVER_BOARD) return;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215) {
      if (!ac(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215)) throw new CustomCommandExecutionError("Board " + UnitAction[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215] + " permission denied.");
      if (Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214) && !ac(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216, UnitAction.Edit)) throw new CustomCommandExecutionError("Board Edit permission denied.");
      return;
    }
    if (!Vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.id)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216, UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218 = typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.subUnitId) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.subUnitId : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217.getActivePageId(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB69 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217.getSnapshot().pages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213.elements) ?? {},
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914 = new Set(Hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219 = Uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219.size && Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB69).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 => {
      if (!qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454) || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.id != "string") return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219.has(String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.chartId ?? "")) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219.has(String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.tableId ?? ""))) && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.id);
    });
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = [...Wf(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB69, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914)].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 => rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458));
    if (!cc(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34)) throw new CustomCommandExecutionError("Board edit permission denied.");
  }
};
function Rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466189) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466188 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466188 : typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466189 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466189.unitId) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466189.unitId : undefined;
}
function zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466193) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "board.operation.copy-selection" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "board.operation.cut-selection" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "board.operation.mind-map.copy-node" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "board.operation.clipboard-shortcut" && typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466193 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466193.action) == "string" && ["copy", "copyAsImage", "copyStyle", "cut", "makeCopy"].includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466193.action)) return UnitAction.Copy;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "boards-print.operation.print") return UnitAction.Print;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "boards-print.operation.export-image" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "boards-exchange-client.operation.export-board" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "board.operation.mind-map.export-opml") return UnitAction.Export;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192.startsWith("thread-comment.command.") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192.startsWith("thread-comment.mutation.") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "board.operation.start-comment-placement" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466192 === "board.operation.add-element-comment") return UnitAction.Comment;
}
function Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 === "board.operation.cut-selection" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 === "board.operation.clipboard-shortcut" && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197.action) === "cut" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197.action) === "makeCopy");
}
function Vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466200) {
  return If.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466200) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466200.startsWith("board.operation.begin-") ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466200.startsWith("board.command.") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466200.startsWith("board.mutation.") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466200.startsWith("board.operation.");
}
function Hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203 = "") {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299142 = new Set();
  return Kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299142), [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299142];
}
function Uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466207 = "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208 = new Set()) {
  return qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466206) ? Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466206) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466206.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462230 => Uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208) : (Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466206).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232]) => {
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231 === "chartId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231 === "tableId") && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231 === "id" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466207 === "chart" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466207 === "table") && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232), Uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208);
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208;
}
function Wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466213) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299144 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466213),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A292 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466212).filter(qf).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462235 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462235.id == "string"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466214 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466212[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236];
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237 != "object" || Gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237, /^(parentId|groupId|parentNodeId|structureScopeId)$/i).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 => {
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299144.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466212[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459] || (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299144.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466214(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459));
      });
    };
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466213.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466214);
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299145 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466213),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A79 = true;
  for (; var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A79;) var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A79 = false, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A292.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 => {
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299145.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461.id) || Gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461, /(?:parent|group|child|owner|root|start|end|from|to|bound|structureScope).*(?:Id|Ids)$/i).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299145.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184)) && (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299145.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461.id), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299144.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461.id), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A79 = true);
  });
  return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299144;
}
function Gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466220 = "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221 = new Set()) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466218 == "string" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466220) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466218), [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221]) : Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466218) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466220) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466218.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240 => {
    typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240);
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466218.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462242 => Gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221)), [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221]) : (qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466218) && Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466218).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462244]) => Gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221)), [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466221]);
}
function Kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226 == "string") {
    /^(elementId|drawingId|connectorId|containerId|swimlaneId|[a-z]*nodeId)$/i.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226);
    return;
  }
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226)) {
    /^(element|drawing|connector|container|swimlane|[a-z]*node)Ids$/i.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463 => {
      typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463);
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465 => Kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228));
    return;
  }
  qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226) && Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462246]) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462245 === "id" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227 === "element" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227 === "elements") ? typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462246 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462246) : Kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228);
  });
}
function qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466232) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466232 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466232 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466232);
}
let Jf = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250) {
    super(), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249.register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250));
  }
};
const Yf = createIdentifier("board.resource.service");
let Xf = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253) {
    this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253;
  }
  getBoard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255) {
    return this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255, UniverInstanceType.UNIVER_BOARD) ?? null;
  }
  getAllBoards() {
    return this._univerInstanceService["getAllUnitsForType"](UniverInstanceType.UNIVER_BOARD);
  }
  createBoard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462257) {
    return this._univerInstanceService["createUnit"](UniverInstanceType.UNIVER_BOARD, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462257);
  }
};
let Zf = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462259 = Pf, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462263) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462259, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462263;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264
    } = merge({}, Pf, this._config);
    this._configService["setConfig"]("boards.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264);
  }
  onStarting() {
    this._univerInstanceService["registerCtorForType"](UniverInstanceType.UNIVER_BOARD, ff), [[Yf, {
      useClass: Xf
    }], [L, {
      useClass: sn
    }], [cl, {
      useClass: ll
    }], [hs, {
      useClass: gs
    }], [Gr, {
      useClass: Kr
    }], [jf, {
      useClass: Mf
    }], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466257, {
      useClass: vl
    }], [bl, {
      useClass: xl
    }], [Cl, {
      useClass: wl
    }], [ml, {
      useClass: hl
    }], [dl, {
      useClass: fl
    }], [Dl, {
      useClass: Ol
    }], [Ff], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466258], [Jf], [Lf]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 => this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466)), [Ss, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217, ws, dc, fc, Us, Gs, sl, al, ul, pl, gl, Nf, yl, Sl, Tl, El, kl, ql, wu, Cu, Zl, Nc, Wr, qr, Qo, Ns, ms, Ms, Vs, Hs, Ws, lc, qs, uc, ps, Gd, sd, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB218, Cd, Ad, Td, ad, Uu, Iu, Tu, ks, Nu, Pd].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 => this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467))), this._injector["get"](Ff), this._injector["get"](Jf), this._injector["get"](Lf);
  }
};
export { Zf as UniverBoardsPlugin };
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466258, Ff, Lf, Jf, Xf };
