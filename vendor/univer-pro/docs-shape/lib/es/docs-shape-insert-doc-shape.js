import { IConnectorShapeHostAdapter, IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, canApplyShapeFormulaLastValue, createDefaultInsertedShapeData, isConnectorShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, Tools, UniverInstanceType, WrapTextType, generateRandomId, getParagraphContentStartOffset, merge, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, InsertDocDrawingCommand, RemoveDocDrawingCommand, SetDocDrawingArrangeCommand, TextWrappingStyle, UniverDocsDrawingPlugin, UpdateDrawingDocTransformCommand, WRAPPING_STYLE_TO_LAYOUT_TYPE } from "@univerjs/docs-drawing";
import { RichTextEditingMutation, buildDocTransform, docDrawingPositionToTransform } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { B } from "./docs-shape-docs-shape.js";
const V = {
    id: "doc.mutation.insert-shape",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378) => {
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379,
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381,
        shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.get(B).insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382), true;
    }
  },
  H = {
    id: "doc.mutation.remove-shape",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390) => {
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.get(B).removeShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392), true;
    }
  };
function fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398.segmentId ?? "",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397.getSelfOrHeaderFooterModel(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.getBody();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400) return null;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400.paragraphs ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.paragraphId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398.paragraphId);
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.length !== 1) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402 = getParagraphContentStartOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.startIndex,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398.position === "offset") {
    let {
      offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398;
    if (!Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402) return null;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178;
  } else {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398.position === "paragraph-start") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402;else {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398.position !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398.position !== "paragraph-end") return null;
    }
  }
  return {
    startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404,
    collapsed: true,
    segmentId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB
  };
}
function pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 = WRAPPING_STYLE_TO_LAYOUT_TYPE[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.wrappingStyle];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.wrappingStyle === TextWrappingStyle.INLINE && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.position !== undefined) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.anchor);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 ? {
    layoutType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415,
    textRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416
  } : null;
}
function me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428;
  let {
      placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.width) ?? 160,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.height) ?? 96,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426.rotation) ?? 0,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {
      ...buildDocTransform(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429.wrappingStyle === TextWrappingStyle.INLINE ? undefined : {
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429.position) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.horizontalOffset,
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429.position) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428.verticalOffset
      }),
      angle: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
      ...docDrawingPositionToTransform(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7),
      angle: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = {};
  return isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.shapeType) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9.fill = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9.rotateEnabled = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9.resizeEnabled = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9.borderEnabled = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.rotateEnabled = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.resizeEnabled = false, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.borderEnabled = false), {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.unitId,
    drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422,
    drawingType: DrawingTypeEnum.DRAWING_SHAPE,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.name,
    transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8,
    docTransform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7,
    data: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9,
    behindDoc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429.wrappingStyle === TextWrappingStyle.BEHIND_TEXT ? BooleanNumber.TRUE : BooleanNumber.FALSE,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.name ?? "",
    description: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.description ?? "",
    layoutType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423,
    wrapText: WrapTextType.BOTH_SIDES,
    distB: 0,
    distL: 0,
    distR: 0,
    distT: 0,
    allowTransform: true,
    hidden: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.visible === false,
    selectable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.selectable ?? true
  };
}
const U = {
    type: CommandType.COMMAND,
    id: "doc.command.insert-shape",
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.unitId, UniverInstanceType.UNIVER_DOC);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.placement) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441.anchor ? pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.placement) : null;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.shapeId ?? generateRandomId(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 = me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.layoutType),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.shapeData ?? createDefaultInsertedShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.shapeType),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.unitId,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.shapeType,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448
        },
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = "doc-shape-insert:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.unitId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.__tempBatchingUndoRedo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.unitId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.syncExecuteCommand(V.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.dispose(), false;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.pushUndoRedo({
        id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2,
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.unitId,
        redoMutations: [{
          id: V.id,
          params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13
        }],
        undoMutations: [{
          id: H.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.unitId,
            shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446
          }
        }]
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.syncExecuteCommand(InsertDocDrawingCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.unitId,
        drawings: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447],
        textRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.textRange
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 ? true : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.rollback(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.unitId), false);
    }
  },
  he = ["name", "title", "description", "hidden", "visible", "selectable"],
  W = {
    id: "doc.command.update-drawing-metadata",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.patches["length"] === 0) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.unitId, UniverInstanceType.UNIVER_DOC),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.getSnapshot().drawings;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 = JSONX.getInstance(),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = [];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.patches["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.drawingId];
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 && he.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 => {
          if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179)) return;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629],
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629];
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630) return;
          let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = ["drawings", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629];
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 === undefined) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 !== undefined && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.removeOp(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631));
            return;
          }
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.insertOp(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.replaceOp(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630));
        });
      }), !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.length) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 = {
        id: RichTextEditingMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.unitId,
          actions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184) => JSONX.compose(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184), null),
          textRanges: null
        }
      };
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.syncExecuteCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15.params);
    }
  },
  G = {
    id: "doc.mutation.update-shape-data",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481,
          replaceShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482,
          formulaLastValueGuard: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.get(B).getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 ? canApplyShapeFormulaLastValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475, {
        hostType: UniverInstanceType.UNIVER_DOC,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480
      }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.getShapeData().formulaBinding) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.formula, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.setShapeType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.setShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482), true) : true : false;
    }
  };
export { V as InsertDocShapeMutation, U as InsertDocShapeCommand, W as UpdateDocDrawingMetadataCommand, G as UpdateDocShapeDataMutation };
export { H };
