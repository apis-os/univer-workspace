import { AddBoardElementsOperation, AnalyzeBoardModelLayoutCommand, BeginBoardExportOperation, BeginBoardImportOperation, BoardBackgroundType, BoardConnectorLabelAnchor, BoardConnectorLabelOffsetSpace, BoardConnectorLabelOrientation, BoardConnectorLabelSide, BoardConnectorLabelSizing, BoardConnectorSite, BoardConnectorSiteBySide, BoardCustomShapeType, BoardElementType, BoardSequenceShapeType, BoardToolType, DisbandBoardContainerOperation, FitBoardContainerToContentOperation, NormalizeBoardConnectorRoutingCommand, RemoveBoardConnectorLabelCommand, RemoveBoardElementOperation, RemoveBoardElementsOperation, RemoveBoardSwimlaneLaneOperation, ReorderBoardElementsOperation, ReparentBoardElementsOperation, ResolveBoardCaptureBoundsCommand, SetBoardConnectorLabelStyleCommand, SetBoardConnectorLabelTextCommand, SetBoardContainerAutoResizeOperation, SetBoardContainerMembershipLockOperation, SetBoardElementsMetadataOperation, SetBoardNameCommand, SetBoardPageBackgroundCommand, SetBoardPermissionCommand, SetBoardSwimlaneLaneSizeOperation, SetBoardSwimlaneLanesOperation, SetBoardThemeOperation, UpdateBoardElementCommand, UpdateBoardElementsCommand, WrapBoardElementsInContainerOperation, canEditBoardTargets, createBoardConnectorElement, createBoardContainerElement, createBoardImageElement, createBoardShapeElement, createBoardSwimlaneElement, createBoardTextBoxShapeTextData, createBoardTextElement, getBoardConnectorLabelDocumentData, getBoardConnectorLabelText, getBoardConnectorLabels, getBoardElementPermissionObjectId, getBoardPermissionValue, getBoardShapeSequenceActivationData, getBoardShapeSequenceLifelineData, hasBoardSwimlaneLaneChildren, isBoardSequenceLifelineElement, isValidBoardConnectorLabels, mergeBoardRichTextDocument, normalizeBoardSwimlaneData, resolveBoardContainerBounds, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardStructuredSelectionRootIds, resolveBoardSwimlaneContentLaneAtPointInFilledBounds, setBoardConnectorLabels, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { FBaseInitialable, FEnum, FUniver } from "@univerjs/core/facade";
import { HorizontalAlign, ICommandService, IPermissionService, IResourceLoaderService, IUniverInstanceService, ImageSourceType, Inject, Injector, RedoCommand, RichTextValue, Tools, UndoCommand, UniverInstanceType, VerticalAlign, generateRandomId } from "@univerjs/core";
import { IShapeHostAdapterRegistry, applyShapeTextBoxOptions, isConnectorShape } from "@univerjs-pro/engine-shape";
import { FConnectorShape, FShape } from "@univerjs-pro/engine-shape/facade";
import { UnitAction } from "@univerjs/protocol";
var Dt = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171) {
      this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171;
    }
    async setPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176) {
      await this._commandService["executeCommand"](SetBoardPermissionCommand.id, {
        unitId: this._unitId,
        objectId: this._unitId,
        action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175,
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176
      });
    }
    getPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179) {
      return getBoardPermissionValue(this._permissionService, this._unitId, this._unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179);
    }
    async setEditable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = true) {
      await this._commandService["executeCommand"](SetBoardPermissionCommand.id, {
        unitId: this._unitId,
        objectId: this._unitId,
        action: UnitAction.Edit,
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181
      });
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](SetBoardPermissionCommand.id, {
        unitId: this._unitId,
        objectId: this._unitId,
        action: UnitAction.Edit,
        value: false
      });
    }
    canEdit() {
      return getBoardPermissionValue(this._permissionService, this._unitId, this._unitId, UnitAction.Edit);
    }
  },
  Ot = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) {
      this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, this._objectId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186;
    }
    async setEditable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = true) {
      await this._commandService["executeCommand"](SetBoardPermissionCommand.id, {
        unitId: this._unitId,
        objectId: this._objectId,
        action: UnitAction.Edit,
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191
      });
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](SetBoardPermissionCommand.id, {
        unitId: this._unitId,
        objectId: this._objectId,
        action: UnitAction.Edit,
        value: false
      });
    }
    canEdit() {
      return canEditBoardTargets(this._permissionService, this._unitId, [this._objectId]);
    }
  };
export { Dt as FBoardPermission, Ot as FBoardElementPermission };
