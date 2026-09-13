import { BooleanNumber, BuildTextUtils, CommandType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentBlockRangeType, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, UniverInstanceType, containsInteriorInsertionOffset, containsStreamIndex, createParagraphId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getParagraphContentStartOffset, getParagraphContentStartOffsets, getParagraphFollowingBlockOffset, getSingleDataStreamChange, intersectsOperationalIntervals, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { Subject } from "rxjs";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange, isHeaderFooterSelection } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { y } from "./docs-code-metadata-resource.js";
import { b, x } from "./internal-glue.js";
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184) {
  "@babel/helpers - typeof";

  return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618;
  }, S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184);
}
function Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187) {
  if (S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 || "default");
    if (S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186);
}
function we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194, "string");
  return S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 + "";
}
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 = we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198;
}
var w = class extends Disposable {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620), C(this, "_resources", new Map()), C(this, "_change$", new Subject()), C(this, "change$", this._change$["asObservable"]());
  }
  getCodeConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) {
    return y(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622)).codes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623];
  }
  setCodeConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628) {
    this._setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, b(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628));
  }
  removeCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) {
    this._setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, x(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633));
  }
  serialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) {
    return y(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636));
  }
  deserialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) {
    this._resources["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639)), this._change$["next"]({
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
export { w as DocsCodeModel };
export { C };
