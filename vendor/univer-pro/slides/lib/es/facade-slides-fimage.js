import { FConnectorShape, FShape } from '@univerjs-pro/engine-shape/facade';
import { AddSlideElementCommand, AddSlidePageCommand, CancelSlideGroupMutation, MoveSlidePageCommand, PageElementTypeEnum, PageTypeEnum, PlaceholderTypeEnum, RemoveSlideElementCommand, RemoveSlidePageCommand, SLIDE_INSERT_DEFAULT_SIZE, SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID, SetActiveSlideCommand, SetPresentationBackgroundGraphicsCommand, SetSlideGroupMutation, SetSlideNameCommand, SetSlidePageSizeCommand, SetSlidePermissionCommand, SetSlideSpeakerNotesCommand, SetSlideTransitionCommand, SlideBackgroundTypeEnum, SlidePageSizePresetEnum, SlidePresentationBackgroundGraphicFitEnum, SlidePresentationBackgroundGraphicsTargetEnum, SlideTransitionDirectionEnum, SlideTransitionSpeedEnum, SlideTransitionTypeEnum, UpdateSlideDrawingCommand, UpdateSlidePageBackgroundCommand, applySlideElementTextDocument, canEditSlideTargets, getPresentationBackgroundGraphics, getSlideElementPermissionObjectId, getSlidePagePermissionObjectId, getSlidePermissionValue, resolvePresentationBackgroundTargetMasterIds, resolveSlideElementTextDocument, resolveSlideTransition } from '@univerjs-pro/slides';
import { FBase, FBaseInitialable, FEnum, FUniver } from '@univerjs/core/facade';
import { ICommandService, IPermissionService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, RichTextValue, Tools, UniverInstanceType, generateRandomId } from '@univerjs/core';
import { IShapeHostAdapterRegistry, ShapeTypeEnum, createSmartArtDataFromLayout, isConnectorShape } from '@univerjs-pro/engine-shape';
import { UnitAction } from '@univerjs/protocol';
import { K } from "./facade-slides-fpage-element.js";
import { Z } from "./facade-slides-fimage-builder.js";
let X = class extends K {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131);
  }
  getSource() {
    return this.getData().source;
  }
  setSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140) {
    return this._updateElement({
      ...this.getData(),
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139,
      'imageSourceType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140
    });
  }
  setCrop(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143) {
    return this._updateElement({
      ...this.getData(),
      'crop': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143
    });
  }
  setClipShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) {
    return this._updateElement({
      ...this.getData(),
      'prstGeom': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145,
      'adjustValues': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146
    });
  }
  setShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149) {
    return this._updateElement({
      ...this.getData(),
      'shapeData': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149
    });
  }
  toBuilder() {
    return this._injector["createInstance"](Z, this.unitId, this.subUnitId, this._injector, this.getData());
  }
};
export { X as FImage };
