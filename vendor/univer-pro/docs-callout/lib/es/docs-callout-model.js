import { BooleanNumber, BuildTextUtils, CommandType, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentBlockRangeType, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, TextXActionType, UniverInstanceType, containsInteriorInsertionOffset, containsStreamIndex, createParagraphId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getParagraphContentStartOffset, getParagraphContentStartOffsets, getParagraphFollowingBlockOffset, getSingleDataStreamChange, intersectsOperationalIntervals, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { Subject } from "rxjs";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange, isHeaderFooterSelection } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { b } from "./docs-callout-metadata-resource.js";
import { Te, we } from "./internal-glue.js";
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) {
  "@babel/helpers - typeof";

  return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618;
  }, C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193);
}
function Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196) {
  if (C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 || "default");
    if (C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195);
}
function De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 = Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203, "string");
  return C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 + "";
}
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207;
}
var T = class extends Disposable {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620), w(this, "_resources", new Map()), w(this, "_change$", new Subject()), w(this, "change$", this._change$["asObservable"]());
  }
  getCalloutConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) {
    return b(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622)).callouts[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623];
  }
  setCalloutConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628) {
    this._setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, we(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628));
  }
  removeCallout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) {
    this._setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, Te(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633));
  }
  serialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) {
    return b(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636));
  }
  deserialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) {
    this._resources["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, b(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639)), this._change$["next"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638
    });
  }
  removeUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642) {
    this._resources["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642), this._change$["next"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642
    });
  }
  dispose() {
    super.dispose(), this._resources["clear"](), this._change$["complete"]();
  }
  _setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) {
    this._resources["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646), this._change$["next"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644,
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645
    });
  }
};
export { T as DocsCalloutModel };
export { w };
