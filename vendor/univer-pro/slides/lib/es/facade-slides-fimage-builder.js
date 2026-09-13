import { FConnectorShape, FShape } from '@univerjs-pro/engine-shape/facade';
import { AddSlideElementCommand, AddSlidePageCommand, CancelSlideGroupMutation, MoveSlidePageCommand, PageElementTypeEnum, PageTypeEnum, PlaceholderTypeEnum, RemoveSlideElementCommand, RemoveSlidePageCommand, SLIDE_INSERT_DEFAULT_SIZE, SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID, SetActiveSlideCommand, SetPresentationBackgroundGraphicsCommand, SetSlideGroupMutation, SetSlideNameCommand, SetSlidePageSizeCommand, SetSlidePermissionCommand, SetSlideSpeakerNotesCommand, SetSlideTransitionCommand, SlideBackgroundTypeEnum, SlidePageSizePresetEnum, SlidePresentationBackgroundGraphicFitEnum, SlidePresentationBackgroundGraphicsTargetEnum, SlideTransitionDirectionEnum, SlideTransitionSpeedEnum, SlideTransitionTypeEnum, UpdateSlideDrawingCommand, UpdateSlidePageBackgroundCommand, applySlideElementTextDocument, canEditSlideTargets, getPresentationBackgroundGraphics, getSlideElementPermissionObjectId, getSlidePagePermissionObjectId, getSlidePermissionValue, resolvePresentationBackgroundTargetMasterIds, resolveSlideElementTextDocument, resolveSlideTransition } from '@univerjs-pro/slides';
import { FBase, FBaseInitialable, FEnum, FUniver } from '@univerjs/core/facade';
import { ICommandService, IPermissionService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, RichTextValue, Tools, UniverInstanceType, generateRandomId } from '@univerjs/core';
import { IShapeHostAdapterRegistry, ShapeTypeEnum, createSmartArtDataFromLayout, isConnectorShape } from '@univerjs-pro/engine-shape';
import { UnitAction } from '@univerjs/protocol';
import { Y } from "./facade-internal-core-endo.js";
var Z = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159;
    this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153, Y(this, "unitId", undefined), Y(this, "subUnitId", undefined), Y(this, "elementId", undefined), Y(this, "transform", {}), Y(this, 'source', undefined), Y(this, "imageSourceType", undefined), Y(this, "crop", undefined), Y(this, "prstGeom", undefined), Y(this, 'adjustValues', undefined), Y(this, "shapeData", undefined), this.unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, this.subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, this.elementId = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.id) || generateRandomId(6), this.transform = {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.transform),
      'left': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.left) ?? 0,
      'top': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.top) ?? 0,
      'width': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.width) ?? SLIDE_INSERT_DEFAULT_SIZE.fallbackImageWidth,
      'height': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.height) ?? SLIDE_INSERT_DEFAULT_SIZE.fallbackImageHeight,
      'rotation': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.transform) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159.rotation) ?? 0
    }, this.source = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.source, this.imageSourceType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.imageSourceType, this.crop = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.crop, this.prstGeom = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.prstGeom, this.adjustValues = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.adjustValues, this.shapeData = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.shapeData;
  }
  setSource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170) {
    return this.source = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, this.imageSourceType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, this;
  }
  setAbsolutePosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) {
    return this.transform["left"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, this.transform['top'] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, this;
  }
  setSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178) {
    return this.transform["width"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, this.transform["height"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, this;
  }
  setRotation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181) {
    return this.transform["rotation"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181, this;
  }
  setCrop(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183) {
    return this.crop = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, this;
  }
  setClipShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) {
    return this.prstGeom = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, this.adjustValues = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, this;
  }
  setShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189) {
    return this.shapeData = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, this;
  }
  build() {
    if (!this.source) throw Error("Image source is required. Please call setSource() before build().");
    return {
      'unitId': this.unitId,
      'subUnitId': this.subUnitId,
      'element': {
        'id': this.elementId,
        'type': PageElementTypeEnum.Image,
        'source': this.source,
        'imageSourceType': this.imageSourceType,
        'crop': this.crop,
        'prstGeom': this.prstGeom,
        'adjustValues': this.adjustValues,
        'shapeData': this.shapeData,
        'transform': this.transform
      }
    };
  }
};
export { Z as FImageBuilder };
