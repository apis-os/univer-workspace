import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
let Ne = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273.Page = "page", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273.Master = "master", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273.Layout = "layout", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273.HandoutMaster = "handoutMaster", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273.NotesMaster = "notesMaster", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273;
  }({}),
  Pe = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275.Standard4By3 = "standard4By3", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275.WideScreen16By9 = "wideScreen16By9", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275.WideScreen16By10 = "wideScreen16By10", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275.Custom = "custom", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275;
  }({}),
  Fe = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277.None = "none", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277.Solid = "solid", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277.Gradient = "gradient", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277.Image = "image", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277.Pattern = "pattern", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277;
  }({}),
  Ie = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.None = "none", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.Fade = "fade", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.Push = "push", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.Wipe = "wipe", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.Cut = "cut", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.Cover = "cover", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.Uncover = "uncover", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.Reveal = "reveal", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.Split = "split", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.Zoom = "zoom", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279;
  }({}),
  Le = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.Left = "left", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.Right = "right", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.Up = "up", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.Down = "down", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281;
  }({}),
  Re = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283.Slow = "slow", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283.Medium = "medium", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283.Fast = "fast", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283;
  }({});
export { Ne as BoardPageType, Pe as BoardPageSizePreset, Fe as BoardBackgroundType, Ie as BoardTransitionType, Le as BoardTransitionDirection, Re as BoardTransitionSpeed };
