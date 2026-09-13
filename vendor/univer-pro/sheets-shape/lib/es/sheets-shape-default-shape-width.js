import { IShapeHostAdapterRegistry, ShapeModel, UniverShapePlugin, buildConnectorEndpointUpdate, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createDefaultInsertedShapeData, createFreeConnectorPointInfo, createUniqueShapeName, getBasicShapeRotateBound, isConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, routeConnectorLineShape } from "@univerjs-pro/engine-shape";
import { ArrangeTypeEnum, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from "@univerjs/core";
import { SheetInterceptorService, SheetSkeletonService, UniverSheetsPlugin, getSheetCommandTarget } from "@univerjs/sheets";
import { ClearSheetDrawingTransformerOperation, DrawingApplyType, ISheetDrawingService, InsertSheetDrawingCommand, RemoveSheetDrawingCommand, SetDrawingApplyMutation, SetDrawingArrangeCommand, SetSheetDrawingCommand, SheetDrawingAnchorType, SheetDrawingTransformPlanService, UniverSheetsDrawingPlugin, transformToAxisAlignPosition, transformToDrawingPosition } from "@univerjs/sheets-drawing";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IDrawingManagerService, UniverDrawingPlugin } from "@univerjs/drawing";
const re = 200,
  ie = 200;
export { re as DEFAULT_SHAPE_WIDTH, ie as DEFAULT_SHAPE_HEIGHT };
