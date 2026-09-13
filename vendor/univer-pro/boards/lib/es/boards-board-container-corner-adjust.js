import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
const var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216 = {
    headerSize: 32,
    padding: {
      top: 12,
      right: 12,
      bottom: 12,
      left: 12
    },
    expelHysteresis: 12
  },
  ea = 2500,
  ta = {
    shapeType: ShapeTypeEnum.RoundRect,
    adjustValues: {
      adj: ea
    },
    fill: {
      color: "rgba(255, 255, 255, 0.72)"
    },
    stroke: {
      color: "#94a3b8",
      width: 1
    }
  },
  na = {
    acceptsChildren: true,
    acceptsContainer: true,
    allowNested: true,
    autoCapture: true,
    autoResize: true,
    membershipLocked: false,
    membershipAwareness: "interactive",
    clipChildren: false
  },
  ra = {
    enabled: true,
    captureMode: "strict",
    expelMode: "hysteresis",
    expelHysteresis: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216.expelHysteresis,
    allowCaptureFromSiblingContainer: false,
    allowCaptureFromAncestorContainer: true,
    allowCaptureContainer: true,
    allowCaptureLockedObjects: false,
    modifierToDisable: "Alt",
    modifierToForce: "Shift"
  },
  Y = {
    title: "Swimlane",
    collapsedLaneSize: 32,
    laneGap: 0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    laneCount: 3,
    horizontalHeaderSize: 270,
    horizontalLaneSize: 270,
    horizontalWidth: 1440,
    verticalHeaderSize: 108,
    verticalLaneSize: 405,
    verticalHeight: 810
  };
export { ea as BOARD_CONTAINER_CORNER_ADJUST };
export { Y, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216, na, ra, ta };
