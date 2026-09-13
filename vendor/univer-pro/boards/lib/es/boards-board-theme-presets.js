import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Je } from "./boards-board-connector-site.js";
import { mt } from "./boards-board-theme-preset.js";
const ht = Object.keys(Je).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462377 => mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462377)),
  gt = {
    dk1: "#000000",
    dk2: "#44546a",
    lt1: "#ffffff",
    lt2: "#e7e6e6",
    acc1: "#4472c4",
    acc2: "#ed7d31",
    acc3: "#a5a5a5",
    acc4: "#ffc000",
    acc5: "#5b9bd5",
    acc6: "#70ad47"
  };
export { ht as BOARD_THEME_PRESETS };
export { gt };
