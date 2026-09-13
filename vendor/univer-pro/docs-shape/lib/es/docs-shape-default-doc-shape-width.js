import { IConnectorShapeHostAdapter, IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, canApplyShapeFormulaLastValue, createDefaultInsertedShapeData, isConnectorShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, Tools, UniverInstanceType, WrapTextType, generateRandomId, getParagraphContentStartOffset, merge, touchDependencies } from "@univerjs/core";
import { IDocDrawingAdapterService, InsertDocDrawingCommand, RemoveDocDrawingCommand, SetDocDrawingArrangeCommand, TextWrappingStyle, UniverDocsDrawingPlugin, UpdateDrawingDocTransformCommand, WRAPPING_STYLE_TO_LAYOUT_TYPE } from "@univerjs/docs-drawing";
import { RichTextEditingMutation, buildDocTransform, docDrawingPositionToTransform } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
const N = 160,
  ce = 96;
export { N as DEFAULT_DOC_SHAPE_WIDTH, ce as DEFAULT_DOC_SHAPE_HEIGHT };
