import { FConnectorShape, FShape } from '@univerjs-pro/engine-shape/facade';
import { AddSlideElementCommand, AddSlidePageCommand, CancelSlideGroupMutation, MoveSlidePageCommand, PageElementTypeEnum, PageTypeEnum, PlaceholderTypeEnum, RemoveSlideElementCommand, RemoveSlidePageCommand, SLIDE_INSERT_DEFAULT_SIZE, SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID, SetActiveSlideCommand, SetPresentationBackgroundGraphicsCommand, SetSlideGroupMutation, SetSlideNameCommand, SetSlidePageSizeCommand, SetSlidePermissionCommand, SetSlideSpeakerNotesCommand, SetSlideTransitionCommand, SlideBackgroundTypeEnum, SlidePageSizePresetEnum, SlidePresentationBackgroundGraphicFitEnum, SlidePresentationBackgroundGraphicsTargetEnum, SlideTransitionDirectionEnum, SlideTransitionSpeedEnum, SlideTransitionTypeEnum, UpdateSlideDrawingCommand, UpdateSlidePageBackgroundCommand, applySlideElementTextDocument, canEditSlideTargets, getPresentationBackgroundGraphics, getSlideElementPermissionObjectId, getSlidePagePermissionObjectId, getSlidePermissionValue, resolvePresentationBackgroundTargetMasterIds, resolveSlideElementTextDocument, resolveSlideTransition } from '@univerjs-pro/slides';
import { FBase, FBaseInitialable, FEnum, FUniver } from '@univerjs/core/facade';
import { ICommandService, IPermissionService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, RichTextValue, Tools, UniverInstanceType, generateRandomId } from '@univerjs/core';
import { IShapeHostAdapterRegistry, ShapeTypeEnum, createSmartArtDataFromLayout, isConnectorShape } from '@univerjs-pro/engine-shape';
import { UnitAction } from '@univerjs/protocol';
import { U } from "./facade-slides-fpresentation-permission.js";
let K = class extends FBase {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) {
    super(), this.unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, this.subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, this.elementId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, this._slideModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659;
  }
  getId() {
    return this.elementId;
  }
  getPermission() {
    return new U(this.unitId, getSlideElementPermissionObjectId(PageTypeEnum.Slide, this.subUnitId, this.elementId), [getSlidePagePermissionObjectId(this.subUnitId)], this._commandService, this._permissionService);
  }
  getType() {
    return this.getData().type;
  }
  getData() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = this._slideModel["getSnapshot"]().slides[this.subUnitId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.elements[this.elementId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668) throw Error("Slide element \"" + this.elementId + "\" was not found.");
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668;
  }
  getRichText() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = resolveSlideElementTextDocument(this.getData());
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 ? RichTextValue.create(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) : null;
  }
  setRichText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = applySlideElementTextDocument(this.getData(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.getData());
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674) throw Error("Slide element \"" + this.elementId + '\x22\x20does\x20not\x20support\x20rich\x20text.');
    return this._updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674);
  }
  getTransform() {
    return {
      ...this.getData().transform
    };
  }
  setTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = this.getData();
    return this._updateElement({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678,
      'transform': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.transform,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677
      }
    });
  }
  setPosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) {
    return this.setTransform({
      'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681,
      'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682
    });
  }
  setSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) {
    return this.setTransform({
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686
    });
  }
  setName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689) {
    return this._updateElement({
      ...this.getData(),
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689
    });
  }
  setDescription(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691) {
    return this._updateElement({
      ...this.getData(),
      'description': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691
    });
  }
  setVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693) {
    return this._updateElement({
      ...this.getData(),
      'visible': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693
    });
  }
  setSelectable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695) {
    return this._updateElement({
      ...this.getData(),
      'selectable': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695
    });
  }
  _updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697) {
    return this._commandService["syncExecuteCommand"](UpdateSlideDrawingCommand.id, {
      'patches': [{
        'unitId': this.unitId,
        'subUnitId': this.subUnitId,
        'drawingId': this.elementId,
        'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697
      }]
    }), this;
  }
};
export { K as FPageElement };
