import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
const B = {
    ActorLifeline: "sequence_actor_lifeline",
    BoundaryLifeline: "sequence_boundary_lifeline",
    ControlLifeline: "sequence_control_lifeline",
    EntityLifeline: "sequence_entity_lifeline",
    CollectionLifeline: "sequence_collection_lifeline",
    ObjectLifeline: "sequence_object_lifeline",
    MagneticDiskLifeline: "sequence_magnetic_disk_lifeline",
    DirectAccessStorageLifeline: "sequence_direct_access_storage_lifeline",
    ActivationBar: "sequence_activation_bar"
  },
  En = {
    Object: "object",
    MagneticDisk: "magnetic_disk",
    DirectAccessStorage: "direct_access_storage"
  },
  Dn = {
    color: "#000000",
    width: 4,
    capType: ShapeLineCapEnum.Round,
    lineJoinType: ShapeLineJoinEnum.Round
  };
export { B as BoardSequenceShapeType };
export { Dn, En };
