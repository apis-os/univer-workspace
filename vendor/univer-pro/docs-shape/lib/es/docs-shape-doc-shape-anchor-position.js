import { IConnectorShapeHostAdapter, IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, canApplyShapeFormulaLastValue, createDefaultInsertedShapeData, isConnectorShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, Tools, UniverInstanceType, WrapTextType, generateRandomId, getParagraphContentStartOffset, merge, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, InsertDocDrawingCommand, RemoveDocDrawingCommand, SetDocDrawingArrangeCommand, TextWrappingStyle, UniverDocsDrawingPlugin, UpdateDrawingDocTransformCommand, WRAPPING_STYLE_TO_LAYOUT_TYPE } from "@univerjs/docs-drawing";
import { RichTextEditingMutation, buildDocTransform, docDrawingPositionToTransform } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
let le = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.PARAGRAPH_START = "paragraph-start", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.PARAGRAPH_END = "paragraph-end", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.OFFSET = "offset", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337;
}({});
export { le as DocShapeAnchorPosition };
