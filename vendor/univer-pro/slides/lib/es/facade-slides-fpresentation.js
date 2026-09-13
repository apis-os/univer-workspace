import { FConnectorShape, FShape } from '@univerjs-pro/engine-shape/facade';
import { AddSlideElementCommand, AddSlidePageCommand, CancelSlideGroupMutation, MoveSlidePageCommand, PageElementTypeEnum, PageTypeEnum, PlaceholderTypeEnum, RemoveSlideElementCommand, RemoveSlidePageCommand, SLIDE_INSERT_DEFAULT_SIZE, SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID, SetActiveSlideCommand, SetPresentationBackgroundGraphicsCommand, SetSlideGroupMutation, SetSlideNameCommand, SetSlidePageSizeCommand, SetSlidePermissionCommand, SetSlideSpeakerNotesCommand, SetSlideTransitionCommand, SlideBackgroundTypeEnum, SlidePageSizePresetEnum, SlidePresentationBackgroundGraphicFitEnum, SlidePresentationBackgroundGraphicsTargetEnum, SlideTransitionDirectionEnum, SlideTransitionSpeedEnum, SlideTransitionTypeEnum, UpdateSlideDrawingCommand, UpdateSlidePageBackgroundCommand, applySlideElementTextDocument, canEditSlideTargets, getPresentationBackgroundGraphics, getSlideElementPermissionObjectId, getSlidePagePermissionObjectId, getSlidePermissionValue, resolvePresentationBackgroundTargetMasterIds, resolveSlideElementTextDocument, resolveSlideTransition } from '@univerjs-pro/slides';
import { FBase, FBaseInitialable, FEnum, FUniver } from '@univerjs/core/facade';
import { ICommandService, IPermissionService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, RichTextValue, Tools, UniverInstanceType, generateRandomId } from '@univerjs/core';
import { IShapeHostAdapterRegistry, ShapeTypeEnum, createSmartArtDataFromLayout, isConnectorShape } from '@univerjs-pro/engine-shape';
import { UnitAction } from '@univerjs/protocol';
import { Y } from "./facade-internal-core-endo.js";
import { H, U } from "./facade-slides-fpresentation-permission.js";
import { Q } from "./facade-slides-fslide.js";
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 = class extends FBaseInitialable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312), this._slideModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, this._resourceLoaderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, Y(this, 'id', undefined), this.id = this._slideModel["getUnitId"]();
  }
  getId() {
    return this.id;
  }
  getPermission() {
    return new H(this.id, this._commandService, this._permissionService);
  }
  getMasterViewPermission() {
    return new U(this.id, SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID, [], this._commandService, this._permissionService);
  }
  getMasterElementPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) {
    return new U(this.id, getSlideElementPermissionObjectId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323), [SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID], this._commandService, this._permissionService);
  }
  getName() {
    return this._slideModel["getSnapshot"]().name;
  }
  setName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) {
    return this._commandService["syncExecuteCommand"](SetSlideNameCommand.id, {
      'unitId': this.id,
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327
    }), this;
  }
  getPresentation() {
    return this._slideModel;
  }
  save() {
    return this._resourceLoaderService["saveUnit"](this.id) ?? Tools.deepClone(this._slideModel["getSnapshot"]());
  }
  getPageSize() {
    return this._slideModel["getSnapshot"]().defaultPageSize;
  }
  setPageSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) {
    return this._commandService['syncExecuteCommand'](SetSlidePageSizeCommand.id, {
      'unitId': this.id,
      'pageId': undefined,
      'pageSize': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329
    }), this;
  }
  getPresentationBackgroundGraphics(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 = this._slideModel["getSnapshot"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 ?? resolvePresentationBackgroundTargetMasterIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, SlidePresentationBackgroundGraphicsTargetEnum.ActiveMaster)[0] ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.masterPageOrder) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619;
        return !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.masterPages) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618]);
      })) ?? Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.masterPages ?? {})[0],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.masterPages) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335] : undefined;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 ? getPresentationBackgroundGraphics(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336) : [];
  }
  setPresentationBackgroundGraphics(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344 = {}) {
    return this._commandService["syncExecuteCommand"](SetPresentationBackgroundGraphicsCommand.id, {
      'unitId': this.id,
      'target': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344.target ?? SlidePresentationBackgroundGraphicsTargetEnum.AllMasters,
      'masterPageIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344.masterPageIds,
      'graphics': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343
    }), this;
  }
  clearPresentationBackgroundGraphics(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347) {
    return this.setPresentationBackgroundGraphics([], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347);
  }
  applyTransitionToAll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349) {
    return this._commandService["syncExecuteCommand"](SetSlideTransitionCommand.id, {
      'unitId': this.id,
      'applyToAll': true,
      'transition': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349
    }), this;
  }
  getSlides() {
    return this._slideModel["pageManager"].getSlides().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => this._injector['createInstance'](Q, this, this._slideModel, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622));
  }
  getSlideById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 = this._slideModel["pageManager"].getSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 ? this._injector["createInstance"](Q, this, this._slideModel, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352) : null;
  }
  getSlideByIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355) {
    return this.getSlides()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355] ?? null;
  }
  getActiveSlide() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357 = this._slideModel["pageManager"].getActiveSlide();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357 ? this._injector['createInstance'](Q, this, this._slideModel, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357) : null;
  }
  setActiveSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359) {
    return this._commandService["syncExecuteCommand"](SetActiveSlideCommand.id, {
      'unitId': this.id,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.getId()
    }), this;
  }
  appendSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = {}) {
    return this.insertSlide(this.getSlides().length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361);
  }
  insertSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 = {}) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 = this._createSlideData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364);
    if (!this._commandService["syncExecuteCommand"](AddSlidePageCommand.id, {
      'unitId': this.id,
      'slide': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
      'insertIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363,
      'setActive': true
    })) throw Error("Failed to insert slide.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 = this.getSlideById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365.id);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366) throw Error('Inserted\x20slide\x20is\x20unavailable.');
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366;
  }
  moveSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372) {
    return this._commandService["syncExecuteCommand"](MoveSlidePageCommand.id, {
      'unitId': this.id,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.getId(),
      'toIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372
    });
  }
  deleteSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375) {
    return this._commandService["syncExecuteCommand"](RemoveSlidePageCommand.id, {
      'unitId': this.id,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.getId()
    });
  }
  _createSlideData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 = this._slideModel['getSnapshot']().slideOrder;
    return {
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.id ?? generateRandomId(6),
      'pageType': PageTypeEnum.Slide,
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.name ?? 'Slide\x20' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.length + 1),
      'elementOrder': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.elementOrder ?? [],
      'elements': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.elements ?? {},
      'showMasterSp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.showMasterSp ?? true,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377
    };
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 as FPresentation };
