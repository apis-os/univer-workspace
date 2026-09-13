import { BooleanNumber, BuildTextUtils, CommandType, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentBlockRangeType, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, TextXActionType, UniverInstanceType, containsInteriorInsertionOffset, containsStreamIndex, createParagraphId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getParagraphContentStartOffset, getParagraphContentStartOffsets, getParagraphFollowingBlockOffset, getSingleDataStreamChange, intersectsOperationalIntervals, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { Subject } from "rxjs";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange, isHeaderFooterSelection } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { b } from "./docs-callout-metadata-resource.js";
import { T } from "./docs-callout-model.js";
import { B, G, H, U, V, W, ct, lt, st } from "./docs-callout-insert-below.js";
import { D, E } from "./docs-callout-config.js";
const Tt = "DOC_CALLOUT_PLUGIN",
  Et = "orange.50",
  Dt = "orange.200";
const At = {};
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158) {
    super(), this._resourceManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, this._docsCalloutModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, this._initResource();
  }
  _initResource() {
    this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: Tt,
      businesses: [UniverInstanceType.UNIVER_DOC],
      toJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => JSON.stringify(this._docsCalloutModel["serialize"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468)),
      parseJson: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => b(JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469)),
      onLoad: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) => this._docsCalloutModel["deserialize"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611),
      onUnLoad: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => this._docsCalloutModel["removeUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612)
    }));
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 = At, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165
    } = merge({}, At, this._config);
    this._configService["setConfig"]("docs-callout.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165);
  }
  onStarting() {
    this._injector["add"]([T]), this._injector["add"]([Q]), this._injector["get"](T), this._injector["get"](Q), [G, ct, U, W, st, B, H, V, lt, E, D].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613)));
  }
};
export { Tt as DOCS_CALLOUT_PLUGIN, Et as DOCS_CALLOUT_BACKGROUND_COLOR_TOKEN, Dt as DOCS_CALLOUT_BORDER_COLOR_TOKEN, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 as UniverDocsCalloutPlugin };
export { Q };
