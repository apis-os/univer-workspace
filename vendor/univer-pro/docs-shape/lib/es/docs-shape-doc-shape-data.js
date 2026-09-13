import { IConnectorShapeHostAdapter, IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, canApplyShapeFormulaLastValue, createDefaultInsertedShapeData, isConnectorShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, Tools, UniverInstanceType, WrapTextType, generateRandomId, getParagraphContentStartOffset, merge, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, InsertDocDrawingCommand, RemoveDocDrawingCommand, SetDocDrawingArrangeCommand, TextWrappingStyle, UniverDocsDrawingPlugin, UpdateDrawingDocTransformCommand, WRAPPING_STYLE_TO_LAYOUT_TYPE } from "@univerjs/docs-drawing";
import { RichTextEditingMutation, buildDocTransform, docDrawingPositionToTransform } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { B } from "./docs-shape-docs-shape.js";
import { G } from "./docs-shape-insert-doc-shape.js";
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 of Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 !== undefined && (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 == "object" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 == "object" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185] = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636);
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17;
}
const q = {
  type: CommandType.COMMAND,
  id: "doc.command.update-shape-data",
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.get(B),
      {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502,
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504,
        shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505,
        replaceShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506,
        oldShapeJSON: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501.getShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.get(ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.get(IUndoRedoService),
      {
        oldShapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510,
        oldShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511 = {}
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511 : K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 || {}),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19 = {
        id: G.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505,
          replaceShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506
        }
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20 = {
        id: G.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504,
          shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510,
          shapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512,
          replaceShapeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506
        }
      };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508.syncExecuteCommand(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19.params) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502,
      undoMutations: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20],
      redoMutations: [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB19]
    }), true) : false;
  }
};
export { q as UpdateDocShapeDataCommand };
