import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { I } from "./internal-core-endo.js";
var wl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475) {
    return this._adapters["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = this._adapters["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 >= 0 && this._adapters["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, 1);
    });
  }
  beginResourcesPanel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 of this._adapters) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.beginResourcesPanel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477)) return true;
    return false;
  }
};
export { wl as BoardResourcesAdapterService };
