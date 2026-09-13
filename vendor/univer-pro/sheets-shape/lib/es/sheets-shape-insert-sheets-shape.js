import { IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, buildConnectorEndpointUpdate, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createDefaultInsertedShapeData, createFreeConnectorPointInfo, createUniqueShapeName, getBasicShapeRotateBound, isConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, routeConnectorLineShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, getSheetCommandTarget } from "@univerjs/sheets";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, SheetDrawingAnchorType, SheetDrawingTransformPlanService, UniverSheetsDrawingPlugin, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IDrawingManagerService, UniverDrawingPlugin } from "@univerjs/drawing";
import { Q } from "./sheets-shape-sheets-shape.js";
const ue = {
    id: "sheet.mutation.insert-shape",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567) => {
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569,
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571,
        shapeName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572,
        shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.get(Q).insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571, Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572), true;
    }
  },
  de = {
    id: "sheet.mutation.remove-shape",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583) => {
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.get(Q).removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586), true;
    }
  },
  fe = {
    type: CommandType.COMMAND,
    id: "sheet.command.insert-shape",
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.get(SheetSkeletonService),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.ensureSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.get(SheetInterceptorService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.get(ISheetDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.get(Q),
        {
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.shapeData ?? createDefaultInsertedShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.shapeId || generateRandomId(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606,
          shapeName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.shapeName ?? createUniqueShapeName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.getShapeDisplayNames(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597)),
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605
        },
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.width || 200,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.height || 200,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = 0;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.position) {
        let {
          x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273,
          y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.position;
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274;
      } else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.range) {
          let {
              startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
              startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.range,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.getCellWithCoordByIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109);
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.startX + 10, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.startY + 10;
        }
      }
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {
          left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19,
          top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20,
          width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17,
          height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.rotation ?? 0,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.flipX ?? false,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.flipY ?? false
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607 = transformToDrawingPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608 = transformToAxisAlignPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606,
          drawingType: DrawingTypeEnum.DRAWING_SHAPE,
          anchorType: SheetDrawingAnchorType.Both,
          name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.name,
          description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.description,
          sheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28,
          data: {
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604,
            shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605
          },
          axisAlignSheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608,
          allowTransform: true,
          hidden: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.visible === false,
          selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.selectable ?? true
        };
      isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.data["fill"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.data["rotateEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.data["resizeEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.data["borderEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.transform["rotateEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.transform["resizeEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.transform["borderEnabled"] = false);
      let {
          undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609,
          redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610,
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.getBatchAddOp([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.onCommandExecute({
          id: InsertSheetDrawingCommand.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
            drawings: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29]
          }
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.preRedos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611,
            type: DrawingApplyType.INSERT
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.redos, {
          id: ue.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11 = [{
          id: de.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
            shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606
          }
        }, ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.preUndos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611,
            type: DrawingApplyType.REMOVE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.undos];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10
      }), true) : false;
    }
  },
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59 = {
    id: "sheet.mutation.update-shape-data",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635) => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640,
          replace: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641,
          formulaLastValueGuard: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634.get(Q).getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644;
        if (!canApplyShapeFormulaLastValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, {
          hostType: UniverInstanceType.UNIVER_SHEET,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639
        }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.getShapeData().formulaBinding) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644.formula, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642)) return true;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.setShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.setShapeData(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641));
      }
      return true;
    }
  },
  pe = {
    type: CommandType.COMMAND,
    id: "sheet.command.set-shape-drawing-data",
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.get(SheetSkeletonService),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659.ensureSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.get(Q),
        {
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666,
          position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.get(SheetInterceptorService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.get(ISheetDrawingService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666,
          replace: true
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670.getShapeType(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670.getShapeData(),
        {
          x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677,
          y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34 = {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.rotation ?? 0,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.flipX ?? false,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.flipY ?? false
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679 = transformToDrawingPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680 = transformToAxisAlignPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664,
          drawingType: DrawingTypeEnum.DRAWING_SHAPE,
          name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.name,
          description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.description,
          sheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34,
          data: {
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665,
            shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666
          },
          axisAlignSheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680,
          allowTransform: true,
          hidden: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.visible,
          selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657.selectable
        };
      isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35.data["fill"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35.data["rotateEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35.data["resizeEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35.data["borderEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35.transform["rotateEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35.transform["resizeEnabled"] = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35.transform["borderEnabled"] = false);
      let {
          undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681,
          redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682,
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.getBatchUpdateOp([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673.onCommandExecute({
          id: SetSheetDrawingCommand.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660,
            drawings: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35]
          }
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.preRedos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.redos, {
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.preUndos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.undos, {
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661,
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675,
            shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664,
            shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676,
            replace: true
          }
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14
      }), true) : false;
    }
  },
  me = {
    type: CommandType.COMMAND,
    id: "sheet.command.toggle-shape-flip",
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.get(SheetSkeletonService),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717.getSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.get(ISheetDrawingService),
        {
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722,
          flipH: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723,
          flipV: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.get(Q).getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714.get(SheetInterceptorService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725.transform
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39.flipX = !var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39.flipX), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39.flipY = !var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39.flipY);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730 = transformToDrawingPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731 = transformToAxisAlignPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726.getShapeType(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726.getShapeData(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722,
          drawingType: DrawingTypeEnum.DRAWING_SHAPE,
          sheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39,
          data: {
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
            shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733
          },
          axisAlignSheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731,
          allowTransform: true
        },
        {
          undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734,
          redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735,
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721.getBatchUpdateOp([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.onCommandExecute({
          id: SetSheetDrawingCommand.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
            drawings: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40]
          }
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.preRedos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.redos],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.preUndos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.undos];
      if (isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732)) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726.getShapeRelation();
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275) {
          let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275
          };
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.from = undefined, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.to = undefined, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push({
            id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719,
              shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722,
              shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
              shapeData: {
                relation: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6
              }
            }
          }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19.push({
            id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719,
              shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722,
              shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
              shapeData: {
                relation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275
              }
            }
          });
        }
      }
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18
      }), true) : false;
    }
  },
  he = {
    type: CommandType.COMMAND,
    id: "sheet.command.set-shape-rotate",
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762.get(SheetSkeletonService),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.getSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762.get(ISheetDrawingService),
        {
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770,
          rotate: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762.get(Q).getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762.get(SheetInterceptorService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.transform
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43.angle = (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43.angle || 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777 = transformToDrawingPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778 = transformToAxisAlignPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773.getShapeType(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773.getShapeData(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770,
          drawingType: DrawingTypeEnum.DRAWING_SHAPE,
          sheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43,
          data: {
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779,
            shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780
          },
          axisAlignSheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778,
          allowTransform: true
        },
        {
          undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781,
          redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782,
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769.getBatchUpdateOp([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776.onCommandExecute({
          id: SetSheetDrawingCommand.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766,
            drawings: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44]
          }
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784.preRedos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784.redos],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784.preUndos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784.undos];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22
      }), true) : false;
    }
  },
  ge = {
    type: CommandType.COMMAND,
    id: "sheet.command.set-shape-text-vertical-toggle",
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810,
        {
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.get(Q).getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814.getShapeTextData(),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.isHorizontal) ?? true,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.get(IUndoRedoService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813,
          shapeData: {
            shapeText: {
              isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9
            }
          }
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813,
          shapeData: {
            shapeText: {
              isHorizontal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8
            }
          }
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = [{
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27 = [{
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26
      }), true) : false;
    }
  },
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60 = {
    type: CommandType.COMMAND,
    id: "sheet.command.update-connector-relation",
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.get(SheetSkeletonService),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832.getSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.get(ISheetDrawingService),
        {
          connectorShapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46839,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843,
          rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844,
          oldAdjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845,
          newAdjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846,
          oldLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847,
          newLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848,
          oldRelation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849,
          newRelation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.get(Q).getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828.get(SheetInterceptorService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851.transform,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46839,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830.angle) ?? 0
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856 = transformToDrawingPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 = transformToAxisAlignPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852.getShapeType(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852.getShapeData(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837,
          drawingType: DrawingTypeEnum.DRAWING_SHAPE,
          sheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51,
          data: {
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858,
            shapeData: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859,
              adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859.adjustValues),
              relation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859.relation)
            }
          },
          axisAlignSheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857,
          allowTransform: true
        },
        {
          undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860,
          redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861,
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.getBatchUpdateOp([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855.onCommandExecute({
          id: SetSheetDrawingCommand.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833,
            drawings: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52]
          }
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.preRedos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.redos, {
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834,
            shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837,
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848,
            shapeData: {
              adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846,
              relation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850
            }
          }
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.preUndos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.undos, {
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834,
            shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837,
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858,
            shapeData: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859,
              adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859.adjustValues),
              relation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859.relation)
            }
          }
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A31,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30
      }), true) : false;
    }
  },
  ve = {
    type: CommandType.COMMAND,
    id: "sheet.command.update-line-shape-resize",
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902 = getSheetCommandTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.get(SheetSkeletonService),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.getSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.get(ISheetDrawingService),
        {
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915,
          oldAdjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916,
          newAdjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917,
          oldLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918,
          newLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.getDrawingByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.get(Q).getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.get(SheetInterceptorService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB55 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.transform,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925 = transformToDrawingPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB55, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926 = transformToAxisAlignPosition(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB55, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.getShapeType(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.getShapeData(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908,
          drawingType: DrawingTypeEnum.DRAWING_SHAPE,
          sheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB55,
          data: {
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927,
            shapeData: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928,
              adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928.adjustValues)
            }
          },
          axisAlignSheetTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926,
          allowTransform: true
        },
        {
          undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929,
          redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930,
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.getBatchUpdateOp([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924.onCommandExecute({
          id: SetSheetDrawingCommand.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
            drawings: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56]
          }
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932.preRedos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932.redos, {
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905,
            shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908,
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919,
            shapeData: {
              adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917
            }
          }
        }],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35 = [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932.preUndos ?? []), {
          id: SetDrawingApplyMutation.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905,
            op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929,
            objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931,
            type: DrawingApplyType.UPDATE
          }
        }, {
          id: ClearSheetDrawingTransformerOperation.id,
          params: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904]
        }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932.undos, {
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905,
            shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908,
            shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927,
            shapeData: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928,
              adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928.adjustValues)
            }
          }
        }];
      return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34
      }), true) : false;
    }
  },
  ye = {
    id: "sheet.mutation.update-shape-type",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967) => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966.get(Q).getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973.setShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973.setShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972))), true;
    }
  };
export { ue as InsertSheetsShapeMutation, de as RemoveSheetsShapeMutation, fe as InsertShapeCommand, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59 as UpdateSheetsShapeDataMutation, pe as SetShapeDrawingDataCommand, me as ToggleSheetsShapeFlipCommand, he as SetSheetsShapeRotateCommand, ge as SetSheetsShapeTextVerticalToggleCommand, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60 as UpdateConnectorRelationCommand, ve as UpdateLineShapeResizeCommand, ye as UpdateSheetsShapeTypeMutation };
