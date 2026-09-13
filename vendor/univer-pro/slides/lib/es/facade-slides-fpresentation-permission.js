import { FConnectorShape, FShape } from '@univerjs-pro/engine-shape/facade';
import { AddSlideElementCommand, AddSlidePageCommand, CancelSlideGroupMutation, MoveSlidePageCommand, PageElementTypeEnum, PageTypeEnum, PlaceholderTypeEnum, RemoveSlideElementCommand, RemoveSlidePageCommand, SLIDE_INSERT_DEFAULT_SIZE, SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID, SetActiveSlideCommand, SetPresentationBackgroundGraphicsCommand, SetSlideGroupMutation, SetSlideNameCommand, SetSlidePageSizeCommand, SetSlidePermissionCommand, SetSlideSpeakerNotesCommand, SetSlideTransitionCommand, SlideBackgroundTypeEnum, SlidePageSizePresetEnum, SlidePresentationBackgroundGraphicFitEnum, SlidePresentationBackgroundGraphicsTargetEnum, SlideTransitionDirectionEnum, SlideTransitionSpeedEnum, SlideTransitionTypeEnum, UpdateSlideDrawingCommand, UpdateSlidePageBackgroundCommand, applySlideElementTextDocument, canEditSlideTargets, getPresentationBackgroundGraphics, getSlideElementPermissionObjectId, getSlidePagePermissionObjectId, getSlidePermissionValue, resolvePresentationBackgroundTargetMasterIds, resolveSlideElementTextDocument, resolveSlideTransition } from '@univerjs-pro/slides';
import { FBase, FBaseInitialable, FEnum, FUniver } from '@univerjs/core/facade';
import { ICommandService, IPermissionService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, RichTextValue, Tools, UniverInstanceType, generateRandomId } from '@univerjs/core';
import { IShapeHostAdapterRegistry, ShapeTypeEnum, createSmartArtDataFromLayout, isConnectorShape } from '@univerjs-pro/engine-shape';
import { UnitAction } from '@univerjs/protocol';
var H = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) {
      this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625;
    }
    async setPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630) {
      await this._commandService['executeCommand'](SetSlidePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._unitId,
        'action': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
        'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630
      });
    }
    getPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) {
      return getSlidePermissionValue(this._permissionService, this._unitId, this._unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633);
    }
    async setEditable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = true) {
      await this._commandService['executeCommand'](SetSlidePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._unitId,
        'action': UnitAction.Edit,
        'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635
      });
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](SetSlidePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._unitId,
        'action': UnitAction.Edit,
        'value': false
      });
    }
    canEdit() {
      return getSlidePermissionValue(this._permissionService, this._unitId, this._unitId, UnitAction.Edit);
    }
  },
  U = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641) {
      this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, this._objectId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, this._parentObjectIds = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641;
    }
    async setEditable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = true) {
      await this._commandService["executeCommand"](SetSlidePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._objectId,
        'action': UnitAction.Edit,
        'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647
      });
    }
    async setReadOnly() {
      await this._commandService['executeCommand'](SetSlidePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._objectId,
        'action': UnitAction.Edit,
        'value': false
      });
    }
    canEdit() {
      return canEditSlideTargets(this._permissionService, this._unitId, [...this._parentObjectIds, this._objectId]);
    }
  };
export { H as FPresentationPermission, U as FSlideObjectPermission };
