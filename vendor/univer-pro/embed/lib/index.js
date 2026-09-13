import { BooleanNumber as var_core_value_sig3E9C, CommandType as var_core_value_sig7835, DependentOn as var_core_value_sig1257, Disposable as var_core_value_sig97E2, DrawingTypeEnum as var_core_value_sigBFA3, ICommandService as var_core_value_sig6663, IConfigService as var_core_value_sigB250, IResourceManagerService as var_core_value_sig4EAB, IUndoRedoService as var_core_value_sig2FD0, IUniverInstanceService as var_core_value_sig035C, Inject as var_core_value_sigA7F0, Injector as var_core_value_sig6AE2, ObjectMatrix as var_core_value_sigFD17, Plugin as var_core_value_sigA5E0, Rectangle as var_core_value_sigC38F, Tools as var_core_value_sigFAFE, UniverInstanceType as var_core_value_sig2B86, createBaseFormulaTableNameMap as var_core_value_sig8873, createIdentifier as var_core_value_sigB9C5, getOriginCellValue as var_core_value_sig511D, merge as var_core_value_sig1610, sequenceExecute as var_core_value_sig23AB, toDisposable as var_core_value_sigA15D, touchDependencies as var_core_value_sig7E90 } from "@univerjs/core";
import { InsertColMutation as var_core_value_sig03F7, InsertRowMutation as var_core_value_sig756F, InsertSheetMutation as var_core_value_sig0DB1, RemoveColMutation as var_core_value_sig4950, RemoveRowMutation as var_core_value_sig4424, RemoveSheetMutation as var_core_value_sig57E8, ReorderRangeMutation as var_core_value_sig76B6, SetRangeValuesMutation as var_core_value_sig89BC, SheetSkeletonService as var_core_value_sig2191 } from "@univerjs/sheets";
import { DrawingApplyType as var_core_value_sig3B2E, ISheetDrawingService as var_core_value_sig5A9A, SetDrawingApplyMutation as var_core_value_sigB524, SheetDrawingAnchorType as var_core_value_sig8CFB, applySheetDrawingPlacement as var_core_value_sigB52C, getSheetDrawingPlacement as var_core_value_sigA4B8 } from "@univerjs/sheets-drawing";
import { IFormulaReferenceDataProviderRegistry as var_core_value_sigFF9C, createUnavailableReferenceDataResponse as var_core_value_sig278D } from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin as var_core_value_sigC0FE } from "@univerjs-pro/license";
import { AddBoardElementMutation as var_core_value_sigDD22, IBoardElementService as var_core_value_sig2D35, RemoveBoardElementMutation as var_core_value_sig7A4B, UpdateBoardElementMutation as var_core_value_sigE50A, collectBoardElementIdsForRemoveWithBoundConnectors as var_core_value_sigC8AC, createEmbedBoardsFloatingElement as var_core_value_sig8E63, isEmbedBoardsFloatingElement as var_core_value_sig300D } from "@univerjs-pro/boards";
import { AddSlideElementMutation as var_core_value_sig520B, AddSlidePageMutation as var_core_value_sigFE26, ISlideDrawingService as var_core_value_sig1019, RemoveSlideElementMutation as var_core_value_sig32AB, RemoveSlidePageMutation as var_core_value_sig72BE, UpdateSlideElementMutation as var_core_value_sig3E4A, createEmbedSlidesFloatingElement as var_core_value_sig3171, createEmbedSlidesPage as var_core_value_sigEBC4, getEmbedSlidesFloatingCustomData as var_core_value_sig788B, resolvedSlideLayersToDrawingMap as var_core_value_sig9A80 } from "@univerjs-pro/slides";
import { IDrawingManagerService as var_core_value_sig7C69 } from "@univerjs/drawing";
import { ApplyBaseJson1Mutation as var_core_value_sig01EF, BaseJson1OpApplier as var_core_value_sig3603, createEmbedBasesTable as var_core_value_sigC163, createEmbedBasesTableAddMutation as var_core_value_sigF5F3, createEmbedBasesTableRemoveMutation as var_core_value_sig5E69, ensureBaseTableCellLayout as var_core_value_sig7B39, getBaseCellFormulaValue as var_core_value_sigDCAB } from "@univerjs-pro/bases";
import { createDocsCustomBlockInsertMutation as var_core_value_sigF569, createDocsCustomBlockRemoveMutation as var_core_value_sig2A9F } from "@univerjs/docs";
import { BehaviorSubject as var_core_value_sigB14A } from "rxjs";
const Qe = "embed.mutation.create-host-anchor",
  $e = "embed.mutation.remove-host-anchor",
  v = "embed.mutation.set-host-anchor-record",
  y = "embed.mutation.remove-host-anchor-record",
  et = {
    makeCurrent: false,
    skipAutoRender: true,
    embeddedRender: true
  },
  b = {
    DocsCustomBlock: "docs-custom-block",
    SheetsFloatingObject: "sheets-floating-object",
    SheetsSheetTab: "sheets-sheet-tab",
    BasesTableListBlock: "bases-table-list-block",
    SlidesFloatingObject: "slides-floating-object",
    SlidesPageListBlock: "slides-page-list-block",
    BoardsFloatingObject: "boards-floating-object"
  },
  tt = {
    ribbon: "host",
    productToolbar: "child",
    contextMenu: "child",
    floatToolbar: "child",
    footer: "child",
    sidePanel: "child",
    floatingMenu: "hidden"
  },
  nt = {
    ribbon: "hidden",
    productToolbar: "child",
    contextMenu: "child",
    floatToolbar: "child",
    footer: "compact",
    sidePanel: "compact",
    floatingMenu: "child"
  },
  rt = {
    ribbon: "hidden",
    productToolbar: "child",
    contextMenu: "child",
    floatToolbar: "child",
    footer: "compact",
    sidePanel: "compact",
    floatingMenu: "child"
  };
function it(var_core_value_sig16C7) {
  "@babel/helpers - typeof";

  return it = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigB744) {
    return typeof var_core_value_sigB744;
  } : function (var_core_value_sigEAE2) {
    return var_core_value_sigEAE2 && typeof Symbol == "function" && var_core_value_sigEAE2.constructor === Symbol && var_core_value_sigEAE2 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigEAE2;
  }, it(var_core_value_sig16C7);
}
function at(var_core_value_sig7481, var_core_value_sig08A3) {
  if (it(var_core_value_sig7481) != "object" || !var_core_value_sig7481) return var_core_value_sig7481;
  var var_core_value_sig77D8 = var_core_value_sig7481[Symbol.toPrimitive];
  if (var_core_value_sig77D8 !== undefined) {
    var var_core_value_sig78A3 = var_core_value_sig77D8.call(var_core_value_sig7481, var_core_value_sig08A3 || "default");
    if (it(var_core_value_sig78A3) != "object") return var_core_value_sig78A3;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig08A3 === "string" ? String : Number)(var_core_value_sig7481);
}
function ot(var_core_value_sig649B) {
  var var_core_value_sig6256 = at(var_core_value_sig649B, "string");
  return it(var_core_value_sig6256) == "symbol" ? var_core_value_sig6256 : var_core_value_sig6256 + "";
}
function x(var_core_value_sigE7A6, var_core_value_sigB505, var_core_value_sig7428) {
  return (var_core_value_sigB505 = ot(var_core_value_sigB505)) in var_core_value_sigE7A6 ? Object.defineProperty(var_core_value_sigE7A6, var_core_value_sigB505, {
    value: var_core_value_sig7428,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigE7A6[var_core_value_sigB505] = var_core_value_sig7428, var_core_value_sigE7A6;
}
let st = function (var_core_value_sig1DCE) {
  return var_core_value_sig1DCE.HostUnitNotFound = "EMBED_HOST_UNIT_NOT_FOUND", var_core_value_sig1DCE.CreateFailed = "EMBED_CREATE_FAILED", var_core_value_sig1DCE.CapabilityNotSupported = "EMBED_CAPABILITY_NOT_SUPPORTED", var_core_value_sig1DCE.HostContextInvalid = "EMBED_HOST_CONTEXT_INVALID", var_core_value_sig1DCE.SheetFloatingPlacementRequired = "EMBED_SHEET_FLOATING_PLACEMENT_REQUIRED", var_core_value_sig1DCE.DescriptorNotFound = "EMBED_DESCRIPTOR_NOT_FOUND", var_core_value_sig1DCE.DescriptorChildTypeRequired = "EMBED_DESCRIPTOR_CHILD_TYPE_REQUIRED", var_core_value_sig1DCE.DescriptorChildTypeMismatch = "EMBED_DESCRIPTOR_CHILD_TYPE_MISMATCH", var_core_value_sig1DCE.DescriptorDisplayTargetInvalid = "EMBED_DESCRIPTOR_DISPLAY_TARGET_INVALID", var_core_value_sig1DCE.ChildUnitAlreadyEmbedded = "EMBED_CHILD_UNIT_ALREADY_EMBEDDED", var_core_value_sig1DCE.CopyNotSupported = "EMBED_COPY_NOT_SUPPORTED", var_core_value_sig1DCE.MaterializedChildUnitNotLoaded = "EMBED_MATERIALIZED_CHILD_UNIT_NOT_LOADED", var_core_value_sig1DCE.MaterializedChildUnitRequired = "EMBED_MATERIALIZED_CHILD_UNIT_REQUIRED", var_core_value_sig1DCE.LocalRuntimeResourceRefUnsupported = "LOCAL_RUNTIME_RESOURCE_REF_UNSUPPORTED", var_core_value_sig1DCE.LocalRuntimeResourceRefUnitTypeMismatch = "LOCAL_RUNTIME_RESOURCE_REF_UNIT_TYPE_MISMATCH", var_core_value_sig1DCE.LocalRuntimeResourceRefUnitNotFound = "LOCAL_RUNTIME_RESOURCE_REF_UNIT_NOT_FOUND", var_core_value_sig1DCE.LocalRuntimeResourceRefDataSelectorUnsupported = "LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED", var_core_value_sig1DCE.LocalRuntimeResourceRefDataUnitTypeUnsupported = "LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_TYPE_UNSUPPORTED", var_core_value_sig1DCE.LocalRuntimeResourceRefDataUnitNotFound = "LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND", var_core_value_sig1DCE.LocalRuntimeResourceRefDataSheetNotFound = "LOCAL_RUNTIME_RESOURCE_REF_DATA_SHEET_NOT_FOUND", var_core_value_sig1DCE.LocalRuntimeResourceRefDataTableNotFound = "LOCAL_RUNTIME_RESOURCE_REF_DATA_TABLE_NOT_FOUND", var_core_value_sig1DCE.LocalRuntimeResourceRefRangeInvalid = "LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", var_core_value_sig1DCE;
}({});
var S = class extends Error {
  constructor(var_core_value_sigE68A, var_core_value_sig3E68) {
    super(var_core_value_sigE68A), x(this, "code", undefined), x(this, "details", undefined), this.name = "EmbedError", this.code = var_core_value_sigE68A, this.details = var_core_value_sig3E68;
  }
};
const ct = new Set(["componentKey", "interactionMode", "startIndex"]);
function lt(var_core_value_sig0567) {
  let {
    hostContext: var_core_value_sigA7F3,
    maxStartIndex: var_core_value_sigEACD
  } = var_core_value_sig0567;
  if (var_core_value_sigA7F3 === undefined) return;
  (!var_core_value_sigA7F3 || typeof var_core_value_sigA7F3 != "object" || Array.isArray(var_core_value_sigA7F3)) && ut(var_core_value_sig0567, "context must be an object");
  let var_core_value_sig901E = Object.keys(var_core_value_sigA7F3).filter(var_core_value_sigF4C5 => !ct.has(var_core_value_sigF4C5));
  var_core_value_sig901E.length > 0 && ut(var_core_value_sig0567, "context contains unknown fields", {
    unknownKeys: var_core_value_sig901E
  });
  let {
    componentKey: var_core_value_sigF7BB,
    interactionMode: var_core_value_sigFA38,
    startIndex: var_core_value_sig102B
  } = var_core_value_sigA7F3;
  var_core_value_sigF7BB !== undefined && typeof var_core_value_sigF7BB != "string" && ut(var_core_value_sig0567, "componentKey must be a string", {
    key: "componentKey",
    value: var_core_value_sigF7BB
  }), var_core_value_sigFA38 !== undefined && var_core_value_sigFA38 !== "block" && var_core_value_sigFA38 !== "inline" && ut(var_core_value_sig0567, 'interactionMode must be "block" or "inline"', {
    key: "interactionMode",
    value: var_core_value_sigFA38
  }), var_core_value_sig102B !== undefined && (typeof var_core_value_sig102B != "number" || !Number.isFinite(var_core_value_sig102B) || !Number.isInteger(var_core_value_sig102B) || var_core_value_sig102B < 0 || var_core_value_sigEACD !== undefined && var_core_value_sig102B > var_core_value_sigEACD) && ut(var_core_value_sig0567, "startIndex must be " + (var_core_value_sigEACD === undefined ? "a non-negative integer" : "an integer between 0 and " + var_core_value_sigEACD), {
    key: "startIndex",
    value: var_core_value_sig102B,
    ...(var_core_value_sigEACD === undefined ? {} : {
      maxStartIndex: var_core_value_sigEACD
    })
  });
}
function ut(var_core_value_sigA7DB, var_core_value_sig5EEE, var_core_value_sig65B4 = {}) {
  throw new S("EMBED_HOST_CONTEXT_INVALID", {
    hostUnitId: var_core_value_sigA7DB.hostUnitId,
    entry: var_core_value_sigA7DB.entry,
    reason: var_core_value_sig5EEE,
    ...var_core_value_sig65B4
  });
}
const dt = {
  [b.SheetsSheetTab]: new Set(["sheetIndex", "sheetName"]),
  [b.SheetsFloatingObject]: new Set(["subUnitId", "placement", "componentKey", "allowTransform", "resizeBehavior", "aspectRatio", "runtimeMountMode"]),
  [b.BasesTableListBlock]: new Set(["tableIndex", "tableName"]),
  [b.SlidesPageListBlock]: new Set(["pageIndex", "pageName"]),
  [b.SlidesFloatingObject]: new Set(["subUnitId", "left", "top", "width", "height"]),
  [b.BoardsFloatingObject]: new Set(["subUnitId", "left", "top", "width", "height"])
};
function C(var_core_value_sigF98E) {
  if (var_core_value_sigF98E.entry === b.DocsCustomBlock) {
    lt(var_core_value_sigF98E);
    return;
  }
  let var_core_value_sigA470 = dt[var_core_value_sigF98E.entry];
  if (!var_core_value_sigA470 || var_core_value_sigF98E.hostContext === undefined) return;
  (!var_core_value_sigF98E.hostContext || typeof var_core_value_sigF98E.hostContext != "object" || Array.isArray(var_core_value_sigF98E.hostContext)) && O(var_core_value_sigF98E, "context\x20must\x20be\x20an\x20object");
  let var_core_value_sig19A1 = var_core_value_sigF98E.hostContext,
    var_core_value_sig81F7 = Object.keys(var_core_value_sig19A1).filter(var_core_value_sig5410 => !var_core_value_sigA470.has(var_core_value_sig5410));
  switch (var_core_value_sig81F7.length > 0 && O(var_core_value_sigF98E, "context contains unknown fields", {
    unknownKeys: var_core_value_sig81F7
  }), var_core_value_sigF98E.entry) {
    case b.SheetsSheetTab:
      ft(var_core_value_sigF98E, var_core_value_sig19A1, "sheetIndex"), w(var_core_value_sigF98E, var_core_value_sig19A1, "sheetName");
      return;
    case b.SheetsFloatingObject:
      w(var_core_value_sigF98E, var_core_value_sig19A1, "subUnitId"), w(var_core_value_sigF98E, var_core_value_sig19A1, "componentKey"), pt(var_core_value_sigF98E, var_core_value_sig19A1, "allowTransform"), gt(var_core_value_sigF98E, var_core_value_sig19A1, "resizeBehavior", ["free", "aspect-ratio", "height-auto", "disabled"]), ht(var_core_value_sigF98E, var_core_value_sig19A1, "aspectRatio"), gt(var_core_value_sigF98E, var_core_value_sig19A1, "runtimeMountMode", ["always", "stage2"]), var_core_value_sig19A1.placement !== undefined && _t(var_core_value_sigF98E, var_core_value_sig19A1.placement);
      return;
    case b.BasesTableListBlock:
      ft(var_core_value_sigF98E, var_core_value_sig19A1, "tableIndex"), w(var_core_value_sigF98E, var_core_value_sig19A1, "tableName");
      return;
    case b.SlidesPageListBlock:
      ft(var_core_value_sigF98E, var_core_value_sig19A1, "pageIndex"), w(var_core_value_sigF98E, var_core_value_sig19A1, "pageName");
      return;
    case b.SlidesFloatingObject:
    case b.BoardsFloatingObject:
      w(var_core_value_sigF98E, var_core_value_sig19A1, "subUnitId"), mt(var_core_value_sigF98E, var_core_value_sig19A1, "left"), mt(var_core_value_sigF98E, var_core_value_sig19A1, "top"), ht(var_core_value_sigF98E, var_core_value_sig19A1, "width"), ht(var_core_value_sigF98E, var_core_value_sig19A1, "height");
  }
}
function ft(var_core_value_sigBE51, var_core_value_sigAAD1, var_core_value_sigBC1A) {
  let var_core_value_sig3F3A = var_core_value_sigAAD1[var_core_value_sigBC1A];
  var_core_value_sig3F3A !== undefined && (typeof var_core_value_sig3F3A != "number" || !Number.isFinite(var_core_value_sig3F3A) || !Number.isInteger(var_core_value_sig3F3A) || var_core_value_sig3F3A < 0 || var_core_value_sigBE51.maxIndex !== undefined && var_core_value_sig3F3A > var_core_value_sigBE51.maxIndex) && O(var_core_value_sigBE51, var_core_value_sigBC1A + " must be " + (var_core_value_sigBE51.maxIndex === undefined ? "a non-negative integer" : "an integer between 0 and " + var_core_value_sigBE51.maxIndex), {
    key: var_core_value_sigBC1A,
    value: var_core_value_sig3F3A,
    ...(var_core_value_sigBE51.maxIndex === undefined ? {} : {
      maxIndex: var_core_value_sigBE51.maxIndex
    })
  });
}
function w(var_core_value_sigA984, var_core_value_sigA504, var_core_value_sig05FF) {
  let var_core_value_sigFBF0 = var_core_value_sigA504[var_core_value_sig05FF];
  var_core_value_sigFBF0 !== undefined && typeof var_core_value_sigFBF0 != "string" && O(var_core_value_sigA984, var_core_value_sig05FF + " must be a string", {
    key: var_core_value_sig05FF,
    value: var_core_value_sigFBF0
  });
}
function pt(var_core_value_sig2F95, var_core_value_sigF0E1, var_core_value_sig2D8D) {
  let var_core_value_sigE5A6 = var_core_value_sigF0E1[var_core_value_sig2D8D];
  var_core_value_sigE5A6 !== undefined && typeof var_core_value_sigE5A6 != "boolean" && O(var_core_value_sig2F95, var_core_value_sig2D8D + " must be a boolean", {
    key: var_core_value_sig2D8D,
    value: var_core_value_sigE5A6
  });
}
function mt(var_core_value_sigF449, var_core_value_sig38C5, var_core_value_sigC87D) {
  let var_core_value_sigCCDC = var_core_value_sig38C5[var_core_value_sigC87D];
  var_core_value_sigCCDC !== undefined && (typeof var_core_value_sigCCDC != "number" || !Number.isFinite(var_core_value_sigCCDC)) && O(var_core_value_sigF449, var_core_value_sigC87D + " must be a finite number", {
    key: var_core_value_sigC87D,
    value: var_core_value_sigCCDC
  });
}
function ht(var_core_value_sigC310, var_core_value_sigA4E8, var_core_value_sigDC07) {
  let var_core_value_sig3474 = var_core_value_sigA4E8[var_core_value_sigDC07];
  var_core_value_sig3474 !== undefined && (typeof var_core_value_sig3474 != "number" || !Number.isFinite(var_core_value_sig3474) || var_core_value_sig3474 <= 0) && O(var_core_value_sigC310, var_core_value_sigDC07 + " must be a positive finite number", {
    key: var_core_value_sigDC07,
    value: var_core_value_sig3474
  });
}
function gt(var_core_value_sig4E80, var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C) {
  let var_core_value_sig7D42 = var_core_value_sigD23B[var_core_value_sig2B2A];
  var_core_value_sig7D42 !== undefined && !var_core_value_sig0B5C.includes(var_core_value_sig7D42) && O(var_core_value_sig4E80, var_core_value_sig2B2A + " has an unsupported value", {
    key: var_core_value_sig2B2A,
    value: var_core_value_sig7D42,
    allowed: var_core_value_sig0B5C
  });
}
function _t(var_core_value_sig8FDE, var_core_value_sig78E6) {
  let var_core_value_sig541F = bt(var_core_value_sig8FDE, var_core_value_sig78E6, "placement"),
    var_core_value_sig417B = var_core_value_sig541F.kind;
  if (var_core_value_sig417B !== "0" && var_core_value_sig417B !== "1" && var_core_value_sig417B !== "2" && O(var_core_value_sig8FDE, "placement.kind\x20has\x20an\x20unsupported\x20value", {
    key: "placement.kind",
    value: var_core_value_sig417B
  }), "bounds" in var_core_value_sig541F) {
    D(var_core_value_sig8FDE, var_core_value_sig541F, ["kind", "bounds"], "placement"), vt(var_core_value_sig8FDE, var_core_value_sig541F.bounds, "placement.bounds");
    return;
  }
  switch (var_core_value_sig417B) {
    case "0":
      D(var_core_value_sig8FDE, var_core_value_sig541F, ["kind", "from", "width", "height"], "placement"), yt(var_core_value_sig8FDE, var_core_value_sig541F.from, "placement.from"), E(var_core_value_sig8FDE, var_core_value_sig541F, "width", "placement.width"), E(var_core_value_sig8FDE, var_core_value_sig541F, "height", "placement.height");
      return;
    case "1":
      D(var_core_value_sig8FDE, var_core_value_sig541F, ["kind", "from", "to"], "placement"), yt(var_core_value_sig8FDE, var_core_value_sig541F.from, "placement.from"), yt(var_core_value_sig8FDE, var_core_value_sig541F.to, "placement.to");
      return;
    case "2":
      D(var_core_value_sig8FDE, var_core_value_sig541F, ["kind", "left", "top", "width", "height"], "placement"), T(var_core_value_sig8FDE, var_core_value_sig541F, "left", "placement.left"), T(var_core_value_sig8FDE, var_core_value_sig541F, "top", "placement.top"), E(var_core_value_sig8FDE, var_core_value_sig541F, "width", "placement.width"), E(var_core_value_sig8FDE, var_core_value_sig541F, "height", "placement.height");
  }
}
function vt(var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sig9940) {
  let var_core_value_sig682D = bt(var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sig9940);
  D(var_core_value_sigAA90, var_core_value_sig682D, ["left", "top", "width", "height"], var_core_value_sig9940), T(var_core_value_sigAA90, var_core_value_sig682D, "left", var_core_value_sig9940 + ".left"), T(var_core_value_sigAA90, var_core_value_sig682D, "top", var_core_value_sig9940 + ".top"), E(var_core_value_sigAA90, var_core_value_sig682D, "width", var_core_value_sig9940 + ".width"), E(var_core_value_sigAA90, var_core_value_sig682D, "height", var_core_value_sig9940 + ".height");
}
function yt(var_core_value_sig1435, var_core_value_sig4082, var_core_value_sigC049) {
  let var_core_value_sigE5C3 = bt(var_core_value_sig1435, var_core_value_sig4082, var_core_value_sigC049);
  D(var_core_value_sig1435, var_core_value_sigE5C3, ["row", "column", "rowOffset", "columnOffset"], var_core_value_sigC049);
  for (let var_core_value_sig492F of ["row", "column"]) {
    let var_core_value_sig429F = var_core_value_sigE5C3[var_core_value_sig492F];
    (typeof var_core_value_sig429F != "number" || !Number.isInteger(var_core_value_sig429F) || var_core_value_sig429F < 0) && O(var_core_value_sig1435, var_core_value_sigC049 + "." + var_core_value_sig492F + " must be a non-negative integer", {
      key: var_core_value_sigC049 + "." + var_core_value_sig492F,
      value: var_core_value_sig429F
    });
  }
  T(var_core_value_sig1435, var_core_value_sigE5C3, "rowOffset", var_core_value_sigC049 + ".rowOffset"), T(var_core_value_sig1435, var_core_value_sigE5C3, "columnOffset", var_core_value_sigC049 + ".columnOffset");
}
function T(var_core_value_sigCCAA, var_core_value_sigF32D, var_core_value_sig9427, var_core_value_sig21F4) {
  let var_core_value_sigA345 = var_core_value_sigF32D[var_core_value_sig9427];
  (typeof var_core_value_sigA345 != "number" || !Number.isFinite(var_core_value_sigA345)) && O(var_core_value_sigCCAA, var_core_value_sig21F4 + " must be a finite number", {
    key: var_core_value_sig21F4,
    value: var_core_value_sigA345
  });
}
function E(var_core_value_sigA468, var_core_value_sig1561, var_core_value_sigDF14, var_core_value_sig842F) {
  let var_core_value_sigC4C0 = var_core_value_sig1561[var_core_value_sigDF14];
  (typeof var_core_value_sigC4C0 != "number" || !Number.isFinite(var_core_value_sigC4C0) || var_core_value_sigC4C0 <= 0) && O(var_core_value_sigA468, var_core_value_sig842F + " must be a positive finite number", {
    key: var_core_value_sig842F,
    value: var_core_value_sigC4C0
  });
}
function bt(var_core_value_sig214A, var_core_value_sigCCC3, var_core_value_sig986E) {
  return (!var_core_value_sigCCC3 || typeof var_core_value_sigCCC3 != "object" || Array.isArray(var_core_value_sigCCC3)) && O(var_core_value_sig214A, var_core_value_sig986E + " must be an object", {
    key: var_core_value_sig986E,
    value: var_core_value_sigCCC3
  }), var_core_value_sigCCC3;
}
function D(var_core_value_sig537C, var_core_value_sigBBBC, var_core_value_sig5440, var_core_value_sigE28B) {
  let var_core_value_sig0FD9 = Object.keys(var_core_value_sigBBBC).filter(var_core_value_sig8EA0 => !var_core_value_sig5440.includes(var_core_value_sig8EA0));
  var_core_value_sig0FD9.length > 0 && O(var_core_value_sig537C, var_core_value_sigE28B + " contains unknown fields", {
    key: var_core_value_sigE28B,
    unknownKeys: var_core_value_sig0FD9
  });
}
function O(var_core_value_sig5649, var_core_value_sigAF82, var_core_value_sig21A2 = {}) {
  throw new S("EMBED_HOST_CONTEXT_INVALID", {
    hostUnitId: var_core_value_sig5649.hostUnitId,
    entry: var_core_value_sig5649.entry,
    reason: var_core_value_sigAF82,
    ...var_core_value_sig21A2
  });
}
const xt = "UniverEmbedSheetsFloatingObject";
function St(var_core_value_sig5C1D) {
  return {
    version: 1,
    embedId: var_core_value_sig5C1D.embedId,
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    childType: var_core_value_sig5C1D.childType,
    hostUnitId: var_core_value_sig5C1D.hostUnitId,
    hostAnchorId: var_core_value_sig5C1D.hostAnchorId,
    runtimeMountMode: var_core_value_sig5C1D.runtimeMountMode ?? "stage2",
    resizeBehavior: var_core_value_sig5C1D.resizeBehavior,
    aspectRatio: var_core_value_sig5C1D.aspectRatio,
    disablePopup: true
  };
}
function Ct(var_core_value_sig4CBA) {
  let var_core_value_sig8E65 = var_core_value_sig4CBA.left ?? 80,
    var_core_value_sig772C = var_core_value_sig4CBA.top ?? 80,
    {
      width: var_core_value_sigF309,
      height: var_core_value_sig44F9
    } = wt({
      width: var_core_value_sig4CBA.width,
      height: var_core_value_sig4CBA.height,
      resizeBehavior: var_core_value_sig4CBA.resizeBehavior,
      aspectRatio: var_core_value_sig4CBA.aspectRatio
    }),
    var_core_value_sigE532 = var_core_value_sig4CBA.sheetTransform ?? Tt(var_core_value_sig8E65, var_core_value_sig772C, var_core_value_sigF309, var_core_value_sig44F9);
  return {
    unitId: var_core_value_sig4CBA.hostUnitId,
    subUnitId: var_core_value_sig4CBA.hostSubUnitId,
    drawingId: var_core_value_sig4CBA.hostAnchorId,
    drawingType: var_core_value_sigBFA3.DRAWING_BLOCK,
    componentKey: var_core_value_sig4CBA.componentKey ?? "UniverEmbedSheetsFloatingObject",
    sheetTransform: var_core_value_sigE532,
    axisAlignSheetTransform: var_core_value_sigE532,
    transform: {
      left: var_core_value_sig8E65,
      top: var_core_value_sig772C,
      width: var_core_value_sigF309,
      height: var_core_value_sig44F9
    },
    data: St(var_core_value_sig4CBA),
    allowTransform: var_core_value_sig4CBA.allowTransform ?? true
  };
}
function wt(var_core_value_sigF381) {
  let var_core_value_sigCB92 = Et(var_core_value_sigF381.width) ? var_core_value_sigF381.width : 560,
    var_core_value_sigC844 = Et(var_core_value_sigF381.height) ? var_core_value_sigF381.height : 360,
    var_core_value_sig2ED4 = Et(var_core_value_sigF381.aspectRatio) ? var_core_value_sigF381.aspectRatio : undefined;
  return var_core_value_sigF381.resizeBehavior !== "aspect-ratio" || !var_core_value_sig2ED4 ? {
    width: var_core_value_sigCB92,
    height: var_core_value_sigC844
  } : Et(var_core_value_sigF381.width) ? {
    width: var_core_value_sigCB92,
    height: Math.max(1, var_core_value_sigCB92 / var_core_value_sig2ED4)
  } : Et(var_core_value_sigF381.height) ? {
    width: Math.max(1, var_core_value_sigC844 * var_core_value_sig2ED4),
    height: var_core_value_sigC844
  } : {
    width: var_core_value_sigCB92,
    height: Math.max(1, var_core_value_sigCB92 / var_core_value_sig2ED4)
  };
}
function Tt(var_core_value_sig0477, var_core_value_sig6FDF, var_core_value_sig27C4, var_core_value_sig3E1A) {
  return {
    from: {
      column: 0,
      columnOffset: var_core_value_sig0477,
      row: 0,
      rowOffset: var_core_value_sig6FDF
    },
    to: {
      column: 0,
      columnOffset: var_core_value_sig0477 + var_core_value_sig27C4,
      row: 0,
      rowOffset: var_core_value_sig6FDF + var_core_value_sig3E1A
    }
  };
}
function Et(var_core_value_sig7FB0) {
  return typeof var_core_value_sig7FB0 == "number" && Number.isFinite(var_core_value_sig7FB0) && var_core_value_sig7FB0 > 0;
}
function Dt(var_core_value_sig5215, var_core_value_sig5204, var_core_value_sig5E11, var_core_value_sig4D58) {
  return {
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    entry: b.SheetsFloatingObject,
    createAnchorPlan: var_core_value_sigA6F6 => nn(Nt(var_core_value_sigA6F6, $t(var_core_value_sig5204), tn(var_core_value_sig4D58)), "EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE"),
    restoreAnchor: var_core_value_sigCDDA => rn(It(var_core_value_sigCDDA, $t(var_core_value_sig5204), en(var_core_value_sig5E11), tn(var_core_value_sig4D58)), "EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_core_value_sigE243 => {
      let var_core_value_sig74A8 = (var_core_value_sig5215 == null ? undefined : var_core_value_sig5215.getAnchor(var_core_value_sigE243.hostUnitId, var_core_value_sigE243.hostAnchorId)) ?? Ft(var_core_value_sigE243);
      return Pt(var_core_value_sigE243, var_core_value_sig74A8, $t(var_core_value_sig5204)) ?? zt(var_core_value_sigE243, var_core_value_sig74A8);
    },
    readContext: var_core_value_sig21B2 => kt(var_core_value_sig21B2, var_core_value_sig5215, $t(var_core_value_sig5204)),
    createBoundsUpdatePlan: var_core_value_sigDE08 => {
      let var_core_value_sigACCB = Mt($t(var_core_value_sig5204), tn(var_core_value_sig4D58)),
        var_core_value_sig7F33 = kt(var_core_value_sigDE08, var_core_value_sig5215, var_core_value_sigACCB.sheetDrawingService);
      if (!var_core_value_sig7F33.resolved) throw Error("EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE");
      return Ot(var_core_value_sigDE08, {
        kind: var_core_value_sig7F33.placement["kind"],
        bounds: var_core_value_sigDE08.bounds
      }, var_core_value_sig5215, var_core_value_sigACCB.sheetDrawingService, var_core_value_sigACCB.sheetSkeletonService);
    }
  };
}
function Ot(var_core_value_sig2DBD, var_core_value_sig424E, var_core_value_sigF481, var_core_value_sigD7F2, var_core_value_sig7CF3) {
  var var_core_value_sig9DC6, var_core_value_sig6643, var_core_value_sig4124, var_core_value_sigBF1C, var_core_value_sigEEEF;
  let var_core_value_sig9A01 = At(var_core_value_sig2DBD.hostUnitId, var_core_value_sig2DBD.hostAnchorId, var_core_value_sigF481 == null || (var_core_value_sig9DC6 = var_core_value_sigF481.getAnchor(var_core_value_sig2DBD.hostUnitId, var_core_value_sig2DBD.hostAnchorId)) == null ? undefined : var_core_value_sig9DC6.hostContext, var_core_value_sigD7F2);
  if (!var_core_value_sig9A01) throw Error("EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE");
  let var_core_value_sig674F = var_core_value_sig424E.kind === var_core_value_sig8CFB.None ? undefined : var_core_value_sig7CF3.ensureSkeleton(var_core_value_sig2DBD.hostUnitId, var_core_value_sig9A01.subUnitId),
    var_core_value_sigC8F6 = var_core_value_sigB52C(var_core_value_sig9A01.drawing, var_core_value_sig424E, var_core_value_sig674F),
    var_core_value_sig8A26 = var_core_value_sigD7F2.getBatchUpdateOp([var_core_value_sigC8F6]),
    var_core_value_sigD073 = var_core_value_sigF481 == null ? undefined : var_core_value_sigF481.getAnchor(var_core_value_sig2DBD.hostUnitId, var_core_value_sig2DBD.hostAnchorId),
    var_core_value_sigF631 = {
      ...(var_core_value_sigD073 ?? Ft({
        ...var_core_value_sig2DBD,
        requestedAnchorId: var_core_value_sig2DBD.hostAnchorId,
        hostContext: {
          subUnitId: var_core_value_sig9A01.subUnitId
        }
      })),
      hostContext: {
        ...(var_core_value_sigD073 == null ? undefined : var_core_value_sigD073.hostContext),
        subUnitId: var_core_value_sig9A01.subUnitId,
        left: (var_core_value_sig6643 = var_core_value_sigC8F6.transform) == null ? undefined : var_core_value_sig6643.left,
        top: (var_core_value_sig4124 = var_core_value_sigC8F6.transform) == null ? undefined : var_core_value_sig4124.top,
        width: (var_core_value_sigBF1C = var_core_value_sigC8F6.transform) == null ? undefined : var_core_value_sigBF1C.width,
        height: (var_core_value_sigEEEF = var_core_value_sigC8F6.transform) == null ? undefined : var_core_value_sigEEEF.height,
        placement: var_core_value_sigA4B8(var_core_value_sigC8F6)
      },
      lifecycle: "active"
    };
  return {
    redoMutations: [j(var_core_value_sig8A26, var_core_value_sig3B2E.UPDATE, "redo"), {
      id: v,
      params: {
        record: var_core_value_sigF631
      }
    }],
    undoMutations: [var_core_value_sigD073 ? {
      id: v,
      params: {
        record: var_core_value_sigD073
      }
    } : {
      id: y,
      params: {
        hostUnitId: var_core_value_sig2DBD.hostUnitId,
        hostAnchorId: var_core_value_sig2DBD.hostAnchorId
      }
    }, j(var_core_value_sig8A26, var_core_value_sig3B2E.UPDATE, "undo")]
  };
}
function kt(var_core_value_sig2278, var_core_value_sig7053, var_core_value_sig52F1) {
  let var_core_value_sig1E74 = var_core_value_sig7053 == null ? undefined : var_core_value_sig7053.getAnchor(var_core_value_sig2278.hostUnitId, var_core_value_sig2278.hostAnchorId),
    var_core_value_sig1E84 = var_core_value_sig52F1 ? At(var_core_value_sig2278.hostUnitId, var_core_value_sig2278.hostAnchorId, var_core_value_sig1E74 == null ? undefined : var_core_value_sig1E74.hostContext, var_core_value_sig52F1) : undefined,
    var_core_value_sig133B = var_core_value_sig1E84 ? jt(var_core_value_sig1E84.drawing) : undefined;
  return !var_core_value_sig1E84 || !var_core_value_sig133B ? {
    resolved: false,
    entry: b.SheetsFloatingObject
  } : {
    resolved: true,
    entry: b.SheetsFloatingObject,
    subUnitId: var_core_value_sig1E84.subUnitId,
    bounds: var_core_value_sig133B,
    placement: var_core_value_sigA4B8(var_core_value_sig1E84.drawing)
  };
}
function At(var_core_value_sig69B8, var_core_value_sig983D, var_core_value_sig9A03, var_core_value_sig3363) {
  let var_core_value_sigF64A = Bt(var_core_value_sig9A03);
  if (var_core_value_sigF64A) {
    let var_core_value_sig0C53 = var_core_value_sig3363.getDrawingByParam({
      unitId: var_core_value_sig69B8,
      subUnitId: var_core_value_sigF64A,
      drawingId: var_core_value_sig983D
    });
    if (var_core_value_sig0C53) return {
      subUnitId: var_core_value_sigF64A,
      drawing: var_core_value_sig0C53
    };
  }
  for (let [var_core_value_sigEA04, var_core_value_sig7A62] of Object.entries(var_core_value_sig3363.getDrawingDataForUnit(var_core_value_sig69B8))) {
    var var_core_value_sig25EC;
    let var_core_value_sigF62A = (var_core_value_sig25EC = var_core_value_sig7A62.data) == null ? undefined : var_core_value_sig25EC[var_core_value_sig983D];
    if (var_core_value_sigF62A) return {
      subUnitId: var_core_value_sigEA04,
      drawing: var_core_value_sigF62A
    };
  }
}
function jt(var_core_value_sigA790) {
  let {
    left: var_core_value_sig9A5E,
    top: var_core_value_sig01B9,
    width: var_core_value_sigD6A9,
    height: var_core_value_sig0FCF
  } = var_core_value_sigA790.transform ?? {};
  if ([var_core_value_sig9A5E, var_core_value_sig01B9, var_core_value_sigD6A9, var_core_value_sig0FCF].every(var_core_value_sig8109 => typeof var_core_value_sig8109 == "number" && Number.isFinite(var_core_value_sig8109)) && !(var_core_value_sigD6A9 == null || var_core_value_sig0FCF == null || var_core_value_sigD6A9 <= 0 || var_core_value_sig0FCF <= 0 || var_core_value_sig9A5E == null || var_core_value_sig01B9 == null)) return {
    left: var_core_value_sig9A5E,
    top: var_core_value_sig01B9,
    width: var_core_value_sigD6A9,
    height: var_core_value_sig0FCF
  };
}
function Mt(var_core_value_sigCF96, var_core_value_sigC4E9) {
  if (!var_core_value_sigCF96 || !var_core_value_sigC4E9) throw Error("EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE");
  return {
    sheetDrawingService: var_core_value_sigCF96,
    sheetSkeletonService: var_core_value_sigC4E9
  };
}
function Nt(var_core_value_sigF612, var_core_value_sigAA6C, var_core_value_sig8BFA) {
  C({
    hostUnitId: var_core_value_sigF612.hostUnitId,
    entry: var_core_value_sigF612.entry,
    hostContext: var_core_value_sigF612.hostContext
  });
  let var_core_value_sig236B = Bt(var_core_value_sigF612.hostContext);
  if (!var_core_value_sigAA6C || !var_core_value_sig236B) return;
  let var_core_value_sig1951 = Ft(var_core_value_sigF612),
    var_core_value_sigFEA0 = Lt(var_core_value_sigF612, var_core_value_sig1951, var_core_value_sig236B, var_core_value_sig8BFA);
  if (!var_core_value_sigFEA0) return;
  let var_core_value_sig931A = var_core_value_sigAA6C.getBatchAddOp([var_core_value_sigFEA0]),
    var_core_value_sigEE7D = {
      unitId: var_core_value_sig1951.hostUnitId,
      subUnitId: var_core_value_sig236B,
      drawingId: var_core_value_sig1951.hostAnchorId
    };
  return {
    hostAnchorId: var_core_value_sig1951.hostAnchorId,
    redoMutations: [j(var_core_value_sig931A, var_core_value_sig3B2E.INSERT, "redo"), {
      id: v,
      params: {
        record: var_core_value_sig1951
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sig1951.hostUnitId,
        hostAnchorId: var_core_value_sig1951.hostAnchorId
      }
    }, j({
      ...var_core_value_sig931A,
      objects: [var_core_value_sigEE7D]
    }, var_core_value_sig3B2E.REMOVE, "undo")]
  };
}
function Pt(var_core_value_sig3585, var_core_value_sig31A8, var_core_value_sigA4DA) {
  let var_core_value_sig6FC0 = Bt(var_core_value_sig31A8.hostContext);
  if (!var_core_value_sigA4DA || !var_core_value_sig6FC0) return;
  let var_core_value_sig6217 = var_core_value_sigA4DA.getBatchRemoveOp([{
    unitId: var_core_value_sig3585.hostUnitId,
    subUnitId: var_core_value_sig6FC0,
    drawingId: var_core_value_sig3585.hostAnchorId
  }]);
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sig3585.hostUnitId,
        hostAnchorId: var_core_value_sig3585.hostAnchorId
      }
    }, j(var_core_value_sig6217, var_core_value_sig3B2E.REMOVE, "redo")],
    undoMutations: [j(var_core_value_sig6217, var_core_value_sig3B2E.INSERT, "undo"), {
      id: v,
      params: {
        record: {
          ...var_core_value_sig31A8,
          lifecycle: "active"
        }
      }
    }]
  };
}
function Ft(var_core_value_sigB805) {
  return Rt({
    ...var_core_value_sigB805,
    hostContext: an(var_core_value_sigB805)
  }, b.SheetsFloatingObject, "sheets-floating");
}
function It(var_core_value_sig4FAE, var_core_value_sig1FCC, var_core_value_sigB7F9, var_core_value_sigB1A2) {
  var var_core_value_sig526D;
  let var_core_value_sigBDB5 = Bt(var_core_value_sig4FAE.hostContext);
  if (!var_core_value_sig1FCC || !var_core_value_sigB7F9 || !var_core_value_sigBDB5) return;
  let var_core_value_sig59CE = Ft({
      ...var_core_value_sig4FAE,
      requestedAnchorId: var_core_value_sig4FAE.hostAnchorId
    }),
    var_core_value_sig3AD7 = Lt(var_core_value_sig4FAE, var_core_value_sig59CE, var_core_value_sigBDB5, var_core_value_sigB1A2);
  if (!var_core_value_sig3AD7) return;
  let var_core_value_sig04E4 = {
    unitId: var_core_value_sig59CE.hostUnitId,
    subUnitId: var_core_value_sigBDB5,
    drawingId: var_core_value_sig59CE.hostAnchorId
  };
  if (!((var_core_value_sig526D = var_core_value_sig1FCC.getDrawingData(var_core_value_sig59CE.hostUnitId, var_core_value_sigBDB5)) != null && var_core_value_sig526D[var_core_value_sig59CE.hostAnchorId])) {
    let var_core_value_sig7565 = var_core_value_sig1FCC.getBatchAddOp([var_core_value_sig3AD7]);
    var_core_value_sigB7F9.applyJson1(var_core_value_sig59CE.hostUnitId, var_core_value_sigBDB5, var_core_value_sig7565.redo), var_core_value_sig1FCC.applyJson1(var_core_value_sig59CE.hostUnitId, var_core_value_sigBDB5, var_core_value_sig7565.redo), var_core_value_sigB7F9.addNotification([var_core_value_sig04E4]), var_core_value_sig1FCC.addNotification([var_core_value_sig04E4]);
  }
  return var_core_value_sig59CE;
}
function Lt(var_core_value_sigD8F0, var_core_value_sig1475, var_core_value_sig08B7, var_core_value_sig2008) {
  var var_core_value_sig496B, var_core_value_sig7161;
  let var_core_value_sig2AB8 = Ct({
    embedId: var_core_value_sig1475.embedId,
    childType: (var_core_value_sig496B = var_core_value_sigD8F0.descriptor) == null ? undefined : var_core_value_sig496B.childType,
    hostUnitId: var_core_value_sig1475.hostUnitId,
    hostSubUnitId: var_core_value_sig08B7,
    hostAnchorId: var_core_value_sig1475.hostAnchorId,
    componentKey: Vt(var_core_value_sig1475.hostContext, "componentKey") ?? undefined,
    left: k(var_core_value_sig1475.hostContext, "left"),
    top: k(var_core_value_sig1475.hostContext, "top"),
    width: k(var_core_value_sig1475.hostContext, "width"),
    height: k(var_core_value_sig1475.hostContext, "height"),
    sheetTransform: Ut(var_core_value_sig1475.hostContext),
    allowTransform: Ht(var_core_value_sig1475.hostContext, "allowTransform"),
    resizeBehavior: on(var_core_value_sig1475.hostContext),
    aspectRatio: k(var_core_value_sig1475.hostContext, "aspectRatio") ?? (((var_core_value_sig7161 = var_core_value_sigD8F0.descriptor) == null ? undefined : var_core_value_sig7161.childType) === var_core_value_sig2B86.UNIVER_SLIDE ? 16 / 9 : undefined),
    runtimeMountMode: sn(var_core_value_sig1475.hostContext)
  });
  var_core_value_sig2008 == null || var_core_value_sig2008.ensureSkeleton(var_core_value_sig1475.hostUnitId, var_core_value_sig08B7);
  let var_core_value_sig3FCF = var_core_value_sig2008 == null ? undefined : var_core_value_sig2008.getSkeletonParam(var_core_value_sig1475.hostUnitId, var_core_value_sig08B7);
  if (!var_core_value_sig3FCF) return;
  let var_core_value_sig675A = Wt(var_core_value_sig1475.hostContext);
  if (var_core_value_sig675A) return var_core_value_sigB52C(var_core_value_sig2AB8, var_core_value_sig675A, var_core_value_sig3FCF.skeleton);
  let var_core_value_sig837F = Ut(var_core_value_sig1475.hostContext) ? undefined : Gt(var_core_value_sig1475.hostContext);
  if (var_core_value_sig837F) return var_core_value_sigB52C(var_core_value_sig2AB8, {
    kind: var_core_value_sig8CFB.Position,
    bounds: var_core_value_sig837F
  }, var_core_value_sig3FCF.skeleton);
  let var_core_value_sig9D6E = Gt(var_core_value_sig2AB8.transform);
  if (var_core_value_sig9D6E) return var_core_value_sigB52C(var_core_value_sig2AB8, {
    kind: var_core_value_sig8CFB.Position,
    bounds: var_core_value_sig9D6E
  }, var_core_value_sig3FCF.skeleton);
}
function Rt(var_core_value_sigB205, var_core_value_sigBF78, var_core_value_sig8AF3) {
  return {
    hostAnchorId: var_core_value_sigB205.requestedAnchorId ?? var_core_value_sig8AF3 + ":" + var_core_value_sigB205.embedId,
    embedId: var_core_value_sigB205.embedId,
    hostUnitId: var_core_value_sigB205.hostUnitId,
    hostType: var_core_value_sigB205.hostType,
    entry: var_core_value_sigB205.entry,
    kind: var_core_value_sigBF78,
    hostContext: var_core_value_sigB205.hostContext,
    lifecycle: "active"
  };
}
function zt(var_core_value_sigA0CC, var_core_value_sigB3A1) {
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sigA0CC.hostUnitId,
        hostAnchorId: var_core_value_sigA0CC.hostAnchorId
      }
    }],
    undoMutations: [{
      id: v,
      params: {
        record: {
          ...var_core_value_sigB3A1,
          lifecycle: "active"
        }
      }
    }]
  };
}
function Bt(var_core_value_sig1FB9) {
  return typeof (var_core_value_sig1FB9 == null ? undefined : var_core_value_sig1FB9.subUnitId) == "string" ? var_core_value_sig1FB9.subUnitId : undefined;
}
function k(var_core_value_sig53A9, var_core_value_sigDACD) {
  return typeof (var_core_value_sig53A9 == null ? undefined : var_core_value_sig53A9[var_core_value_sigDACD]) == "number" ? var_core_value_sig53A9[var_core_value_sigDACD] : undefined;
}
function Vt(var_core_value_sig691E, var_core_value_sigD6D6) {
  return typeof (var_core_value_sig691E == null ? undefined : var_core_value_sig691E[var_core_value_sigD6D6]) == "string" ? var_core_value_sig691E[var_core_value_sigD6D6] : undefined;
}
function Ht(var_core_value_sig0347, var_core_value_sig52A3) {
  return typeof (var_core_value_sig0347 == null ? undefined : var_core_value_sig0347[var_core_value_sig52A3]) == "boolean" ? var_core_value_sig0347[var_core_value_sig52A3] : undefined;
}
function Ut(var_core_value_sigAD91) {
  let var_core_value_sigF64E = Xt(var_core_value_sigAD91 == null ? undefined : var_core_value_sigAD91.sheetTransform),
    var_core_value_sig9B3D = Yt(var_core_value_sigF64E == null ? undefined : var_core_value_sigF64E.from),
    var_core_value_sigB217 = Yt(var_core_value_sigF64E == null ? undefined : var_core_value_sigF64E.to);
  if (!(!var_core_value_sig9B3D || !var_core_value_sigB217)) return {
    from: var_core_value_sig9B3D,
    to: var_core_value_sigB217
  };
}
function Wt(var_core_value_sig1FE6) {
  let var_core_value_sig2471 = Xt(var_core_value_sig1FE6 == null ? undefined : var_core_value_sig1FE6.placement);
  if (!var_core_value_sig2471) return;
  let var_core_value_sigD1FC = var_core_value_sig2471 == null ? undefined : var_core_value_sig2471.kind;
  if (var_core_value_sigD1FC !== var_core_value_sig8CFB.Position && var_core_value_sigD1FC !== var_core_value_sig8CFB.Both && var_core_value_sigD1FC !== var_core_value_sig8CFB.None) return;
  let var_core_value_sigE2F9 = Gt(var_core_value_sig2471.bounds);
  if (var_core_value_sigE2F9) return {
    kind: var_core_value_sigD1FC,
    bounds: var_core_value_sigE2F9
  };
  switch (var_core_value_sigD1FC) {
    case var_core_value_sig8CFB.None:
      return Kt(var_core_value_sig2471);
    case var_core_value_sig8CFB.Position:
      return qt(var_core_value_sig2471);
    case var_core_value_sig8CFB.Both:
      return Jt(var_core_value_sig2471);
  }
}
function Gt(var_core_value_sigD689) {
  let var_core_value_sig7AE3 = Xt(var_core_value_sigD689),
    var_core_value_sig1EB3 = A(var_core_value_sig7AE3, "left"),
    var_core_value_sigE120 = A(var_core_value_sig7AE3, "top"),
    var_core_value_sigD6E7 = Zt(var_core_value_sig7AE3, "width"),
    var_core_value_sig3669 = Zt(var_core_value_sig7AE3, "height");
  return var_core_value_sig1EB3 == null || var_core_value_sigE120 == null || var_core_value_sigD6E7 == null || var_core_value_sig3669 == null ? undefined : {
    left: var_core_value_sig1EB3,
    top: var_core_value_sigE120,
    width: var_core_value_sigD6E7,
    height: var_core_value_sig3669
  };
}
function Kt(var_core_value_sig5CBC) {
  let var_core_value_sig20BE = Gt(var_core_value_sig5CBC);
  return var_core_value_sig20BE ? {
    kind: var_core_value_sig8CFB.None,
    ...var_core_value_sig20BE
  } : undefined;
}
function qt(var_core_value_sig6BD0) {
  let var_core_value_sig8C15 = Yt(var_core_value_sig6BD0.from),
    var_core_value_sig6DF7 = Zt(var_core_value_sig6BD0, "width"),
    var_core_value_sigB411 = Zt(var_core_value_sig6BD0, "height");
  return !var_core_value_sig8C15 || var_core_value_sig6DF7 == null || var_core_value_sigB411 == null ? undefined : {
    kind: var_core_value_sig8CFB.Position,
    from: var_core_value_sig8C15,
    width: var_core_value_sig6DF7,
    height: var_core_value_sigB411
  };
}
function Jt(var_core_value_sigA81B) {
  let var_core_value_sigFE8D = Yt(var_core_value_sigA81B.from),
    var_core_value_sig8595 = Yt(var_core_value_sigA81B.to);
  return !var_core_value_sigFE8D || !var_core_value_sig8595 ? undefined : {
    kind: var_core_value_sig8CFB.Both,
    from: var_core_value_sigFE8D,
    to: var_core_value_sig8595
  };
}
function Yt(var_core_value_sigF8DE) {
  let var_core_value_sigFE76 = Xt(var_core_value_sigF8DE),
    var_core_value_sig84C8 = Qt(var_core_value_sigFE76, "row"),
    var_core_value_sig80C0 = Qt(var_core_value_sigFE76, "column"),
    var_core_value_sig22B4 = A(var_core_value_sigFE76, "rowOffset"),
    var_core_value_sigBB37 = A(var_core_value_sigFE76, "columnOffset");
  return var_core_value_sig84C8 == null || var_core_value_sig80C0 == null || var_core_value_sig22B4 == null || var_core_value_sigBB37 == null ? undefined : {
    row: var_core_value_sig84C8,
    column: var_core_value_sig80C0,
    rowOffset: var_core_value_sig22B4,
    columnOffset: var_core_value_sigBB37
  };
}
function Xt(var_core_value_sig0C51) {
  return typeof var_core_value_sig0C51 == "object" && var_core_value_sig0C51 && !Array.isArray(var_core_value_sig0C51) ? Object.fromEntries(Object.entries(var_core_value_sig0C51)) : undefined;
}
function A(var_core_value_sigADA4, var_core_value_sig0E48) {
  let var_core_value_sig495B = var_core_value_sigADA4 == null ? undefined : var_core_value_sigADA4[var_core_value_sig0E48];
  return typeof var_core_value_sig495B == "number" && Number.isFinite(var_core_value_sig495B) ? var_core_value_sig495B : undefined;
}
function Zt(var_core_value_sig310C, var_core_value_sig759E) {
  let var_core_value_sig6C80 = A(var_core_value_sig310C, var_core_value_sig759E);
  return var_core_value_sig6C80 != null && var_core_value_sig6C80 > 0 ? var_core_value_sig6C80 : undefined;
}
function Qt(var_core_value_sig6B99, var_core_value_sig6ADC) {
  let var_core_value_sig41AD = A(var_core_value_sig6B99, var_core_value_sig6ADC);
  return var_core_value_sig41AD != null && Number.isInteger(var_core_value_sig41AD) && var_core_value_sig41AD >= 0 ? var_core_value_sig41AD : undefined;
}
function $t(var_core_value_sigDBC2) {
  return typeof var_core_value_sigDBC2 == "function" ? var_core_value_sigDBC2() : var_core_value_sigDBC2;
}
function en(var_core_value_sig7739) {
  return typeof var_core_value_sig7739 == "function" ? var_core_value_sig7739() : var_core_value_sig7739;
}
function tn(var_core_value_sig4040) {
  return typeof var_core_value_sig4040 == "function" ? var_core_value_sig4040() : var_core_value_sig4040;
}
function nn(var_core_value_sig1AAA, var_core_value_sig58DB) {
  if (!var_core_value_sig1AAA) throw Error(var_core_value_sig58DB);
  return var_core_value_sig1AAA;
}
function rn(var_core_value_sig4840, var_core_value_sigB76D) {
  if (!var_core_value_sig4840) throw Error(var_core_value_sigB76D);
  return var_core_value_sig4840;
}
function an(var_core_value_sig1015) {
  var var_core_value_sig6223, var_core_value_sigC6B6;
  let var_core_value_sig498A = var_core_value_sig1015.hostContext,
    var_core_value_sigEF45 = on(var_core_value_sig498A),
    var_core_value_sig36FE = var_core_value_sigEF45 === "aspect-ratio" || ((var_core_value_sig6223 = var_core_value_sig1015.descriptor) == null ? undefined : var_core_value_sig6223.childType) === var_core_value_sig2B86.UNIVER_SLIDE ? "aspect-ratio" : var_core_value_sigEF45,
    var_core_value_sig3AF5 = k(var_core_value_sig498A, "aspectRatio") ?? (((var_core_value_sigC6B6 = var_core_value_sig1015.descriptor) == null ? undefined : var_core_value_sigC6B6.childType) === var_core_value_sig2B86.UNIVER_SLIDE ? 16 / 9 : undefined);
  if (var_core_value_sig36FE !== "aspect-ratio" || var_core_value_sig3AF5 == null) return var_core_value_sig498A;
  let var_core_value_sig14E6 = wt({
    width: k(var_core_value_sig498A, "width"),
    height: k(var_core_value_sig498A, "height"),
    resizeBehavior: var_core_value_sig36FE,
    aspectRatio: var_core_value_sig3AF5
  });
  return {
    ...var_core_value_sig498A,
    width: var_core_value_sig14E6.width,
    height: var_core_value_sig14E6.height,
    resizeBehavior: var_core_value_sig36FE,
    aspectRatio: var_core_value_sig3AF5
  };
}
function on(var_core_value_sig8690) {
  let var_core_value_sigDF29 = Vt(var_core_value_sig8690, "resizeBehavior");
  return var_core_value_sigDF29 === "free" || var_core_value_sigDF29 === "aspect-ratio" || var_core_value_sigDF29 === "height-auto" || var_core_value_sigDF29 === "disabled" ? var_core_value_sigDF29 : undefined;
}
function sn(var_core_value_sigC0F8) {
  let var_core_value_sig3C75 = Vt(var_core_value_sigC0F8, "runtimeMountMode");
  return var_core_value_sig3C75 === "always" || var_core_value_sig3C75 === "stage2" ? var_core_value_sig3C75 : undefined;
}
function j(var_core_value_sig992D, var_core_value_sigE4E4, var_core_value_sigA4B0) {
  return {
    id: var_core_value_sigB524.id,
    params: {
      unitId: var_core_value_sig992D.unitId,
      subUnitId: var_core_value_sig992D.subUnitId,
      op: var_core_value_sigA4B0 === "redo" ? var_core_value_sig992D.redo : var_core_value_sig992D.undo,
      objects: var_core_value_sig992D.objects,
      type: var_core_value_sigE4E4
    }
  };
}
var M = class {
  constructor() {
    x(this, "_records", new Map());
  }
  clearUnit(var_core_value_sigD4FB) {
    this._records["delete"](var_core_value_sigD4FB);
  }
  setAnchor(var_core_value_sig3E71) {
    var var_core_value_sig01B3;
    let var_core_value_sig7442 = this._ensureRecords(var_core_value_sig3E71.hostUnitId),
      var_core_value_sigDF87 = Date.now();
    var_core_value_sig7442[var_core_value_sig3E71.hostAnchorId] = {
      ...var_core_value_sig3E71,
      lifecycle: "active",
      createdAt: var_core_value_sig3E71.createdAt ?? ((var_core_value_sig01B3 = var_core_value_sig7442[var_core_value_sig3E71.hostAnchorId]) == null ? undefined : var_core_value_sig01B3.createdAt) ?? var_core_value_sigDF87,
      updatedAt: var_core_value_sigDF87
    };
  }
  removeAnchor(var_core_value_sig9EE0, var_core_value_sigF051) {
    let var_core_value_sig0B45 = this._ensureRecords(var_core_value_sig9EE0),
      var_core_value_sig36F8 = var_core_value_sig0B45[var_core_value_sigF051];
    var_core_value_sig36F8 && (var_core_value_sig0B45[var_core_value_sigF051] = {
      ...var_core_value_sig36F8,
      lifecycle: "removed",
      updatedAt: Date.now()
    });
  }
  getAnchor(var_core_value_sig03E1, var_core_value_sigBB57) {
    let var_core_value_sig7C4A = this._ensureRecords(var_core_value_sig03E1)[var_core_value_sigBB57];
    return var_core_value_sig7C4A ? {
      ...var_core_value_sig7C4A
    } : undefined;
  }
  listAnchors(var_core_value_sigE799) {
    return Object.values(this._ensureRecords(var_core_value_sigE799)).map(var_core_value_sig8178 => ({
      ...var_core_value_sig8178
    }));
  }
  _ensureRecords(var_core_value_sigB601) {
    let var_core_value_sig8B71 = this._records["get"](var_core_value_sigB601);
    return var_core_value_sig8B71 || (var_core_value_sig8B71 = {}, this._records["set"](var_core_value_sigB601, var_core_value_sig8B71)), var_core_value_sig8B71;
  }
};
const cn = new Set(["subUnitId"]),
  ln = new Set(["pageId"]),
  un = new Set(["dashboardId", "tableId", "viewId"]);
function dn(var_core_value_sig5F50, var_core_value_sig4494) {
  if (var_core_value_sig4494 !== undefined) switch ((!var_core_value_sig4494 || typeof var_core_value_sig4494 != "object" || Array.isArray(var_core_value_sig4494)) && N(var_core_value_sig5F50, var_core_value_sig4494), var_core_value_sig5F50) {
    case var_core_value_sig2B86.UNIVER_SHEET:
      return pn(var_core_value_sig4494, cn, var_core_value_sig5F50), mn(var_core_value_sig4494.subUnitId) || N(var_core_value_sig5F50, var_core_value_sig4494), {
        subUnitId: var_core_value_sig4494.subUnitId
      };
    case var_core_value_sig2B86.UNIVER_SLIDE:
      return pn(var_core_value_sig4494, ln, var_core_value_sig5F50), mn(var_core_value_sig4494.pageId) || N(var_core_value_sig5F50, var_core_value_sig4494), {
        pageId: var_core_value_sig4494.pageId
      };
    case var_core_value_sig2B86.UNIVER_BASE:
      return pn(var_core_value_sig4494, un, var_core_value_sig5F50), (!mn(var_core_value_sig4494.tableId) || var_core_value_sig4494.viewId !== undefined && !mn(var_core_value_sig4494.viewId) || var_core_value_sig4494.dashboardId !== undefined && !mn(var_core_value_sig4494.dashboardId)) && N(var_core_value_sig5F50, var_core_value_sig4494), {
        tableId: var_core_value_sig4494.tableId,
        ...(var_core_value_sig4494.viewId === undefined ? {} : {
          viewId: var_core_value_sig4494.viewId
        }),
        ...(var_core_value_sig4494.dashboardId === undefined ? {} : {
          dashboardId: var_core_value_sig4494.dashboardId
        })
      };
    default:
      N(var_core_value_sig5F50, var_core_value_sig4494);
  }
}
function fn(var_core_value_sigFFAF, var_core_value_sig478B) {
  return var_core_value_sigFFAF === var_core_value_sig478B ? true : !var_core_value_sigFFAF || !var_core_value_sig478B ? false : var_core_value_sigFFAF.subUnitId === var_core_value_sig478B.subUnitId && var_core_value_sigFFAF.pageId === var_core_value_sig478B.pageId && var_core_value_sigFFAF.tableId === var_core_value_sig478B.tableId && var_core_value_sigFFAF.viewId === var_core_value_sig478B.viewId && var_core_value_sigFFAF.dashboardId === var_core_value_sig478B.dashboardId;
}
function pn(var_core_value_sig1E21, var_core_value_sig9DBF, var_core_value_sig36CC) {
  Object.keys(var_core_value_sig1E21).some(var_core_value_sigAEFB => !var_core_value_sig9DBF.has(var_core_value_sigAEFB)) && N(var_core_value_sig36CC, var_core_value_sig1E21);
}
function mn(var_core_value_sigA568) {
  return typeof var_core_value_sigA568 == "string" && var_core_value_sigA568.length > 0;
}
function N(var_core_value_sigD22D, var_core_value_sig85D5) {
  throw new S("EMBED_DESCRIPTOR_DISPLAY_TARGET_INVALID", {
    childType: var_core_value_sigD22D,
    target: var_core_value_sig85D5
  });
}
function hn() {
  return {
    version: 1,
    embeds: {}
  };
}
function gn(var_core_value_sig5D2E) {
  return JSON.parse(JSON.stringify(var_core_value_sig5D2E ?? hn()));
}
const P = {
  SELF: "self",
  RELATIVE: "relative",
  URI: "uri"
};
let _n = function (var_core_value_sig7221) {
  return var_core_value_sig7221.InvalidUriReference = "INVALID_URI_REFERENCE", var_core_value_sig7221.InvalidFragmentSyntax = "INVALID_FRAGMENT_SYNTAX", var_core_value_sig7221.InvalidPercentEncoding = "INVALID_PERCENT_ENCODING", var_core_value_sig7221.MissingUnit = "MISSING_UNIT", var_core_value_sig7221.MissingType = "MISSING_TYPE", var_core_value_sig7221.ResourceRefInvalid = "RESOURCE_REF_INVALID", var_core_value_sig7221.ResourceRefInvalidFile = "RESOURCE_REF_INVALID_FILE", var_core_value_sig7221.ResourceRefInvalidFileKind = "RESOURCE_REF_INVALID_FILE_KIND", var_core_value_sig7221.ResourceRefInvalidRelativePath = "RESOURCE_REF_INVALID_RELATIVE_PATH", var_core_value_sig7221.ResourceRefInvalidUri = "RESOURCE_REF_INVALID_URI", var_core_value_sig7221.ResourceRefInvalidUnit = "RESOURCE_REF_INVALID_UNIT", var_core_value_sig7221.ResourceRefInvalidUnitType = "RESOURCE_REF_INVALID_UNIT_TYPE", var_core_value_sig7221.ResourceRefInvalidPart = "RESOURCE_REF_INVALID_PART", var_core_value_sig7221.ResourceRefInvalidPartKind = "RESOURCE_REF_INVALID_PART_KIND", var_core_value_sig7221.ResourceRefInvalidSheetPart = "RESOURCE_REF_INVALID_SHEET_PART", var_core_value_sig7221.ResourceRefInvalidRangePart = "RESOURCE_REF_INVALID_RANGE_PART", var_core_value_sig7221.ResourceRefInvalidExtensions = "RESOURCE_REF_INVALID_EXTENSIONS", var_core_value_sig7221.ResourceRefInvalidExtensionKey = "RESOURCE_REF_INVALID_EXTENSION_KEY", var_core_value_sig7221.ResourceRefInvalidExtensionValue = "RESOURCE_REF_INVALID_EXTENSION_VALUE", var_core_value_sig7221.ResourceRefFileUnsupported = "RESOURCE_REF_FILE_UNSUPPORTED", var_core_value_sig7221.ResourceRefUriUnsupported = "RESOURCE_REF_URI_UNSUPPORTED", var_core_value_sig7221;
}({});
var F = class extends Error {
  constructor(var_core_value_sig826B, var_core_value_sigCF89) {
    super(var_core_value_sig826B), x(this, "code", undefined), x(this, "details", undefined), this.name = "ResourceRefError", this.code = var_core_value_sig826B, this.details = var_core_value_sigCF89;
  }
};
const vn = /%(?![0-9A-Fa-f]{2})/,
  yn = new Set(["unit", "type"]);
function I(var_core_value_sig0A5A) {
  return typeof var_core_value_sig0A5A == "string" ? R(var_core_value_sig0A5A) : bn(var_core_value_sig0A5A);
}
function bn(var_core_value_sigE6D6) {
  return Sn(var_core_value_sigE6D6), {
    file: kn(var_core_value_sigE6D6.file),
    unit: {
      selector: var_core_value_sigE6D6.unit["selector"],
      type: var_core_value_sigE6D6.unit["type"]
    },
    ...(var_core_value_sigE6D6.part ? {
      part: An(var_core_value_sigE6D6.part)
    } : {}),
    ...(var_core_value_sigE6D6.extensions ? {
      extensions: jn(var_core_value_sigE6D6.extensions)
    } : {})
  };
}
function L(var_core_value_sig8507) {
  return JSON.stringify(xn(var_core_value_sig8507));
}
function xn(var_core_value_sig8A7F) {
  let var_core_value_sig9E81 = bn(var_core_value_sig8A7F);
  return {
    file: var_core_value_sig9E81.file,
    unit: var_core_value_sig9E81.unit
  };
}
function Sn(var_core_value_sig8295) {
  if (!var_core_value_sig8295 || typeof var_core_value_sig8295 != "object") throw new F("RESOURCE_REF_INVALID", {
    ref: var_core_value_sig8295
  });
  if (En(var_core_value_sig8295.file), Dn(var_core_value_sig8295.unit), var_core_value_sig8295.part && On(var_core_value_sig8295.part), var_core_value_sig8295.extensions != null) {
    if (typeof var_core_value_sig8295.extensions != "object" || Array.isArray(var_core_value_sig8295.extensions)) throw new F("RESOURCE_REF_INVALID_EXTENSIONS", {
      extensions: var_core_value_sig8295.extensions
    });
    for (let [var_core_value_sigE9ED, var_core_value_sigB577] of Object.entries(var_core_value_sig8295.extensions)) {
      if (!var_core_value_sigE9ED) throw new F("RESOURCE_REF_INVALID_EXTENSION_KEY", {
        key: var_core_value_sigE9ED
      });
      if (typeof var_core_value_sigB577 != "string" && (!Array.isArray(var_core_value_sigB577) || var_core_value_sigB577.some(var_core_value_sig3EEE => typeof var_core_value_sig3EEE != "string"))) throw new F("RESOURCE_REF_INVALID_EXTENSION_VALUE", {
        key: var_core_value_sigE9ED,
        value: var_core_value_sigB577
      });
    }
  }
}
function Cn(var_core_value_sigA975) {
  return !!var_core_value_sigA975 && var_core_value_sigA975.kind === "range" && typeof var_core_value_sigA975.ref == "string" && typeof var_core_value_sigA975.sheetName == "string" && typeof var_core_value_sigA975.range == "string";
}
function wn(var_core_value_sig1263) {
  return !!var_core_value_sig1263 && var_core_value_sig1263.kind === "table" && typeof var_core_value_sig1263.tableName == "string" && var_core_value_sig1263.tableName["length"] > 0;
}
function R(var_core_value_sig457C, var_core_value_sigA4E6 = {}) {
  if (typeof var_core_value_sig457C != "string") throw new F("INVALID_URI_REFERENCE", {
    uriReference: var_core_value_sig457C
  });
  let var_core_value_sig934F = var_core_value_sig457C.indexOf("#");
  if (var_core_value_sig934F !== 0) throw new F("INVALID_URI_REFERENCE", {
    uriReference: var_core_value_sig457C
  });
  let var_core_value_sig74A7 = Mn(var_core_value_sig457C.slice(var_core_value_sig934F + 1)),
    var_core_value_sig3685 = var_core_value_sig74A7.get("unit"),
    var_core_value_sigC621 = var_core_value_sig74A7.get("type");
  if (!var_core_value_sig3685) throw new F("MISSING_UNIT", {
    uriReference: var_core_value_sig457C
  });
  if (!var_core_value_sigC621) throw new F("MISSING_TYPE", {
    uriReference: var_core_value_sig457C
  });
  return bn({
    file: {
      kind: P.SELF
    },
    unit: {
      selector: var_core_value_sig3685,
      type: var_core_value_sigC621
    }
  });
}
function Tn(var_core_value_sig86D7, var_core_value_sig431B = {}) {
  let var_core_value_sig5C7C = bn(var_core_value_sig86D7);
  if (var_core_value_sig5C7C.file["kind"] !== P.SELF) throw new F("RESOURCE_REF_FILE_UNSUPPORTED", {
    file: var_core_value_sig5C7C.file
  });
  if (var_core_value_sig5C7C.part || var_core_value_sig5C7C.extensions) throw new F("RESOURCE_REF_URI_UNSUPPORTED", {
    part: var_core_value_sig5C7C.part,
    extensions: var_core_value_sig5C7C.extensions
  });
  return "#unit=" + encodeURIComponent(var_core_value_sig5C7C.unit["selector"]) + "&type=" + encodeURIComponent(var_core_value_sig5C7C.unit["type"]);
}
function En(var_core_value_sig87E2) {
  if (!var_core_value_sig87E2 || typeof var_core_value_sig87E2 != "object") throw new F("RESOURCE_REF_INVALID_FILE", {
    file: var_core_value_sig87E2
  });
  switch (var_core_value_sig87E2.kind) {
    case P.SELF:
      return;
    case P.RELATIVE:
      if (!var_core_value_sig87E2.path) throw new F("RESOURCE_REF_INVALID_RELATIVE_PATH", {
        file: var_core_value_sig87E2
      });
      return;
    case P.URI:
      if (!var_core_value_sig87E2.uri) throw new F("RESOURCE_REF_INVALID_URI", {
        file: var_core_value_sig87E2
      });
      return;
    default:
      throw new F("RESOURCE_REF_INVALID_FILE_KIND", {
        file: var_core_value_sig87E2
      });
  }
}
function Dn(var_core_value_sig2E04) {
  if (!var_core_value_sig2E04 || typeof var_core_value_sig2E04 != "object" || !var_core_value_sig2E04.selector || typeof var_core_value_sig2E04.type != "string" || !var_core_value_sig2E04.type) throw new F("RESOURCE_REF_INVALID_UNIT", {
    unit: var_core_value_sig2E04
  });
}
function On(var_core_value_sig2EDD) {
  if (!var_core_value_sig2EDD || typeof var_core_value_sig2EDD != "object" || typeof var_core_value_sig2EDD.kind != "string" || !var_core_value_sig2EDD.kind) throw new F("RESOURCE_REF_INVALID_PART", {
    part: var_core_value_sig2EDD
  });
  switch (var_core_value_sig2EDD.kind) {
    case "sheet":
      if (!var_core_value_sig2EDD.sheetName) throw new F("RESOURCE_REF_INVALID_SHEET_PART", {
        part: var_core_value_sig2EDD
      });
      return;
    case "range":
      if (!var_core_value_sig2EDD.ref || !var_core_value_sig2EDD.sheetName || !var_core_value_sig2EDD.range) throw new F("RESOURCE_REF_INVALID_RANGE_PART", {
        part: var_core_value_sig2EDD
      });
      break;
    case "table":
      if (!var_core_value_sig2EDD.tableName) throw new F("RESOURCE_REF_INVALID_PART", {
        part: var_core_value_sig2EDD
      });
      break;
    default:
      break;
  }
  for (let [var_core_value_sig00CB, var_core_value_sig77EE] of Object.entries(var_core_value_sig2EDD)) if (!var_core_value_sig00CB || var_core_value_sig77EE != null && typeof var_core_value_sig77EE != "string" && (!Array.isArray(var_core_value_sig77EE) || var_core_value_sig77EE.some(var_core_value_sig9572 => typeof var_core_value_sig9572 != "string"))) throw new F("RESOURCE_REF_INVALID_PART", {
    part: var_core_value_sig2EDD
  });
}
function kn(var_core_value_sig27D2) {
  switch (var_core_value_sig27D2.kind) {
    case P.SELF:
      return {
        kind: P.SELF
      };
    case P.RELATIVE:
      return {
        kind: P.RELATIVE,
        path: var_core_value_sig27D2.path
      };
    case P.URI:
      return {
        kind: P.URI,
        uri: var_core_value_sig27D2.uri
      };
  }
}
function An(var_core_value_sig355D) {
  switch (var_core_value_sig355D.kind) {
    case "sheet":
      return {
        kind: "sheet",
        sheetName: var_core_value_sig355D.sheetName,
        ...(var_core_value_sig355D.sheetId ? {
          sheetId: var_core_value_sig355D.sheetId
        } : {})
      };
    case "range":
      return {
        kind: "range",
        ref: var_core_value_sig355D.ref,
        sheetName: var_core_value_sig355D.sheetName,
        range: var_core_value_sig355D.range,
        ...(var_core_value_sig355D.sheetId ? {
          sheetId: var_core_value_sig355D.sheetId
        } : {})
      };
    case "table":
      return {
        kind: "table",
        tableName: var_core_value_sig355D.tableName,
        ...(var_core_value_sig355D.tableId ? {
          tableId: var_core_value_sig355D.tableId
        } : {})
      };
    default:
      return Object.fromEntries(Object.entries(var_core_value_sig355D).sort(([var_core_value_sigD873], [var_core_value_sigA12B]) => var_core_value_sigD873.localeCompare(var_core_value_sigA12B)).map(([var_core_value_sigF230, var_core_value_sig09B8]) => [var_core_value_sigF230, Array.isArray(var_core_value_sig09B8) ? [...var_core_value_sig09B8] : var_core_value_sig09B8]));
  }
}
function jn(var_core_value_sig8B21) {
  return Object.fromEntries(Object.entries(var_core_value_sig8B21).sort(([var_core_value_sig9F76], [var_core_value_sigB008]) => var_core_value_sig9F76.localeCompare(var_core_value_sigB008)).map(([var_core_value_sig8721, var_core_value_sig08BA]) => [var_core_value_sig8721, Array.isArray(var_core_value_sig08BA) ? [...var_core_value_sig08BA] : var_core_value_sig08BA]));
}
function Mn(var_core_value_sigEB36) {
  if (!var_core_value_sigEB36) throw new F("INVALID_FRAGMENT_SYNTAX", {
    fragment: var_core_value_sigEB36
  });
  let var_core_value_sig5C27 = new Map();
  for (let var_core_value_sigDBB5 of var_core_value_sigEB36.split("&")) {
    let var_core_value_sig6F91 = var_core_value_sigDBB5.indexOf("=");
    if (var_core_value_sig6F91 <= 0) throw new F("INVALID_FRAGMENT_SYNTAX", {
      fragment: var_core_value_sigEB36,
      rawParam: var_core_value_sigDBB5
    });
    let var_core_value_sigF9C7 = Nn(var_core_value_sigDBB5.slice(0, var_core_value_sig6F91)),
      var_core_value_sig8895 = Nn(var_core_value_sigDBB5.slice(var_core_value_sig6F91 + 1));
    if (!var_core_value_sig8895 || !yn.has(var_core_value_sigF9C7) || var_core_value_sig5C27.has(var_core_value_sigF9C7)) throw new F("INVALID_FRAGMENT_SYNTAX", {
      fragment: var_core_value_sigEB36,
      key: var_core_value_sigF9C7,
      value: var_core_value_sig8895
    });
    var_core_value_sig5C27.set(var_core_value_sigF9C7, var_core_value_sig8895);
  }
  return var_core_value_sig5C27;
}
function Nn(var_core_value_sigD494) {
  if (vn.test(var_core_value_sigD494)) throw new F("INVALID_PERCENT_ENCODING", {
    value: var_core_value_sigD494
  });
  try {
    return decodeURIComponent(var_core_value_sigD494);
  } catch {
    throw new F("INVALID_PERCENT_ENCODING", {
      value: var_core_value_sigD494
    });
  }
}
function Pn(var_core_value_sigBF6D) {
  if (!var_core_value_sigBF6D || var_core_value_sigBF6D.trim() !== var_core_value_sigBF6D) throw Error("RESOURCE_REF_LOCATOR_INVALID");
  return Tn(R(var_core_value_sigBF6D));
}
function Fn(var_core_value_sigD051) {
  return typeof var_core_value_sigD051 == "string" ? Pn(var_core_value_sigD051) : Tn(var_core_value_sigD051);
}
function z(var_core_value_sig16D9) {
  return JSON.stringify({
    uriReference: Fn(var_core_value_sig16D9)
  });
}
function In(var_core_value_sigF378) {
  return R(Fn(var_core_value_sigF378)).unit["selector"];
}
function Ln(var_core_value_sig5F6C) {
  switch (var_core_value_sig5F6C) {
    case var_core_value_sig2B86.UNIVER_SHEET:
      return "sheet";
    case var_core_value_sig2B86.UNIVER_DOC:
      return "doc";
    case var_core_value_sig2B86.UNIVER_SLIDE:
      return "slide";
    case var_core_value_sig2B86.UNIVER_BASE:
      return "base";
    case var_core_value_sig2B86.UNIVER_BOARD:
      return "board";
    default:
      throw Error("UNSUPPORTED_UNIT_TYPE:" + var_core_value_sig5F6C);
  }
}
function B(var_core_value_sig7E85) {
  switch (var_core_value_sig7E85) {
    case "sheet":
      return var_core_value_sig2B86.UNIVER_SHEET;
    case "doc":
      return var_core_value_sig2B86.UNIVER_DOC;
    case "slide":
      return var_core_value_sig2B86.UNIVER_SLIDE;
    case "base":
      return var_core_value_sig2B86.UNIVER_BASE;
    case "board":
      return var_core_value_sig2B86.UNIVER_BOARD;
    default:
      throw Error("UNSUPPORTED_UNIT_TYPE:" + var_core_value_sig7E85);
  }
}
var Rn = class {
  constructor() {
    x(this, "_leasesByOwner", new Map()), x(this, "_leasesByChildUnit", new Map());
  }
  acquire(var_core_value_sigCFAC) {
    let var_core_value_sig237B = {
        ...var_core_value_sigCFAC
      },
      var_core_value_sigFEAB = this._getOwnerKey(var_core_value_sig237B),
      var_core_value_sigE347 = this._leasesByOwner["get"](var_core_value_sigFEAB);
    if (var_core_value_sigE347) {
      if (var_core_value_sigE347.record["childUnitId"] === var_core_value_sig237B.childUnitId && var_core_value_sigE347.record["childType"] === var_core_value_sig237B.childType) return var_core_value_sigA15D(() => {});
      throw this._createConflictError(var_core_value_sig237B, var_core_value_sigE347.record);
    }
    let var_core_value_sig3C5B = this._leasesByChildUnit["get"](var_core_value_sig237B.childUnitId);
    if (var_core_value_sig3C5B) throw this._createConflictError(var_core_value_sig237B, var_core_value_sig3C5B.record);
    let var_core_value_sig200B = {
      ownerKey: var_core_value_sigFEAB,
      token: Symbol(var_core_value_sigFEAB),
      record: var_core_value_sig237B
    };
    this._leasesByOwner["set"](var_core_value_sigFEAB, var_core_value_sig200B), this._leasesByChildUnit["set"](var_core_value_sig237B.childUnitId, var_core_value_sig200B);
    let var_core_value_sig3863 = false;
    return var_core_value_sigA15D(() => {
      var_core_value_sig3863 || (var_core_value_sig3863 = true, this._releaseState(var_core_value_sig200B));
    });
  }
  hasLease(var_core_value_sigC97C, var_core_value_sigC4B1) {
    var var_core_value_sig1BD9;
    return ((var_core_value_sig1BD9 = this._leasesByOwner["get"](this._getOwnerKey(var_core_value_sigC97C))) == null ? undefined : var_core_value_sig1BD9.record["childUnitId"]) === var_core_value_sigC4B1;
  }
  getLease(var_core_value_sigE43E) {
    var var_core_value_sigA937;
    let var_core_value_sigCAD5 = (var_core_value_sigA937 = this._leasesByChildUnit["get"](var_core_value_sigE43E)) == null ? undefined : var_core_value_sigA937.record;
    return var_core_value_sigCAD5 ? {
      ...var_core_value_sigCAD5
    } : undefined;
  }
  release(var_core_value_sigE503) {
    let var_core_value_sig48DD = this._leasesByOwner["get"](this._getOwnerKey(var_core_value_sigE503));
    var_core_value_sig48DD && this._releaseState(var_core_value_sig48DD);
  }
  releaseHost(var_core_value_sig5E6A) {
    for (let var_core_value_sigC80B of this._leasesByOwner["values"]()) var_core_value_sigC80B.record["hostUnitId"] === var_core_value_sig5E6A && this._releaseState(var_core_value_sigC80B);
  }
  releaseUnit(var_core_value_sigB7FC) {
    for (let var_core_value_sig284F of this._leasesByOwner["values"]()) (var_core_value_sig284F.record["hostUnitId"] === var_core_value_sigB7FC || var_core_value_sig284F.record["childUnitId"] === var_core_value_sigB7FC) && this._releaseState(var_core_value_sig284F);
  }
  dispose() {
    this._leasesByOwner["clear"](), this._leasesByChildUnit["clear"]();
  }
  _releaseState(var_core_value_sig9CD9) {
    var var_core_value_sigFD0C, var_core_value_sig849B;
    ((var_core_value_sigFD0C = this._leasesByOwner["get"](var_core_value_sig9CD9.ownerKey)) == null ? undefined : var_core_value_sigFD0C.token) === var_core_value_sig9CD9.token && this._leasesByOwner["delete"](var_core_value_sig9CD9.ownerKey), ((var_core_value_sig849B = this._leasesByChildUnit["get"](var_core_value_sig9CD9.record["childUnitId"])) == null ? undefined : var_core_value_sig849B.token) === var_core_value_sig9CD9.token && this._leasesByChildUnit["delete"](var_core_value_sig9CD9.record["childUnitId"]);
  }
  _createConflictError(var_core_value_sig5F1A, var_core_value_sigB455) {
    return new S("EMBED_CHILD_UNIT_ALREADY_EMBEDDED", {
      hostUnitId: var_core_value_sig5F1A.hostUnitId,
      embedId: var_core_value_sig5F1A.embedId,
      childUnitId: var_core_value_sig5F1A.childUnitId,
      duplicatedHostUnitId: var_core_value_sigB455.hostUnitId,
      duplicatedEmbedId: var_core_value_sigB455.embedId
    });
  }
  _getOwnerKey(var_core_value_sig5241) {
    return JSON.stringify([var_core_value_sig5241.hostUnitId, var_core_value_sig5241.embedId]);
  }
};
function V(var_core_value_sigF204, var_core_value_sig7A15) {
  return function (var_core_value_sigC6E5, var_core_value_sigCEFB) {
    var_core_value_sig7A15(var_core_value_sigC6E5, var_core_value_sigCEFB, var_core_value_sigF204);
  };
}
function H(var_core_value_sigEEA6, var_core_value_sigEAE1, var_core_value_sigC69F, var_core_value_sig0442) {
  var var_core_value_sig697A = arguments.length,
    var_core_value_sigDB65 = var_core_value_sig697A < 3 ? var_core_value_sigEAE1 : var_core_value_sig0442 === null ? var_core_value_sig0442 = Object.getOwnPropertyDescriptor(var_core_value_sigEAE1, var_core_value_sigC69F) : var_core_value_sig0442,
    var_core_value_sig045E;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigDB65 = Reflect.decorate(var_core_value_sigEEA6, var_core_value_sigEAE1, var_core_value_sigC69F, var_core_value_sig0442);else {
    for (var var_core_value_sig4524 = var_core_value_sigEEA6.length - 1; var_core_value_sig4524 >= 0; var_core_value_sig4524--) (var_core_value_sig045E = var_core_value_sigEEA6[var_core_value_sig4524]) && (var_core_value_sigDB65 = (var_core_value_sig697A < 3 ? var_core_value_sig045E(var_core_value_sigDB65) : var_core_value_sig697A > 3 ? var_core_value_sig045E(var_core_value_sigEAE1, var_core_value_sigC69F, var_core_value_sigDB65) : var_core_value_sig045E(var_core_value_sigEAE1, var_core_value_sigC69F)) || var_core_value_sigDB65);
  }
  return var_core_value_sig697A > 3 && var_core_value_sigDB65 && Object.defineProperty(var_core_value_sigEAE1, var_core_value_sigC69F, var_core_value_sigDB65), var_core_value_sigDB65;
}
let U = class {
  constructor(var_core_value_sig1537) {
    this._unitLeaseService = var_core_value_sig1537, x(this, "_resources", new Map());
  }
  addDescriptor(var_core_value_sigE4C6, var_core_value_sig4313) {
    let var_core_value_sigFC87 = Date.now(),
      var_core_value_sig156F = this._normalizeDescriptor(var_core_value_sigE4C6, var_core_value_sig4313),
      var_core_value_sigDD51 = this._ensureResource(var_core_value_sigE4C6);
    var_core_value_sig156F.hostType === var_core_value_sig2B86.UNIVER_BOARD && var_core_value_sig156F.entry === b.BoardsFloatingObject && var_core_value_sig156F.lifecycle !== "soft-delete d" && Object.values(var_core_value_sigDD51.embeds).find(var_core_value_sigE154 => var_core_value_sigE154.embedId !== var_core_value_sig156F.embedId && var_core_value_sigE154.lifecycle !== "soft-delete d" && var_core_value_sigE154.hostType === var_core_value_sig2B86.UNIVER_BOARD && var_core_value_sigE154.entry === b.BoardsFloatingObject && z(var_core_value_sigE154.source["ref"]) === z(var_core_value_sig156F.source["ref"])) && (var_core_value_sig156F.lifecycle = "soft-delete d"), var_core_value_sigDD51.embeds[var_core_value_sig156F.embedId] = {
      ...var_core_value_sig156F,
      createdAt: var_core_value_sig156F.createdAt ?? var_core_value_sigFC87,
      updatedAt: var_core_value_sigFC87
    };
  }
  applyDescriptorMutation(var_core_value_sigF057, var_core_value_sig72F6) {
    let var_core_value_sig9FBA = this.getDescriptor(var_core_value_sigF057, var_core_value_sig72F6.embedId),
      var_core_value_sigFE01 = this._getRuntimeChildUnitIdForMutation(var_core_value_sig9FBA, var_core_value_sig72F6);
    this.addDescriptor(var_core_value_sigF057, var_core_value_sigFE01 ? {
      ...var_core_value_sig72F6,
      childUnitId: var_core_value_sigFE01
    } : var_core_value_sig72F6);
  }
  getDescriptor(var_core_value_sigA2CE, var_core_value_sig1975) {
    var var_core_value_sig6EA1;
    return (var_core_value_sig6EA1 = this._resources["get"](var_core_value_sigA2CE)) == null ? undefined : var_core_value_sig6EA1.embeds[var_core_value_sig1975];
  }
  getActiveDescriptors(var_core_value_sig029F) {
    var var_core_value_sig3767;
    return Object.values(((var_core_value_sig3767 = this._resources["get"](var_core_value_sig029F)) == null ? undefined : var_core_value_sig3767.embeds) ?? {}).filter(var_core_value_sig4632 => var_core_value_sig4632.lifecycle !== "soft-delete d");
  }
  getAllActiveDescriptors() {
    return [...this._resources["values"]()].flatMap(var_core_value_sig12F2 => Object.values(var_core_value_sig12F2.embeds)).filter(var_core_value_sig2259 => var_core_value_sig2259.lifecycle !== "soft-delete d");
  }
  getActiveDescriptorsByChildUnit(var_core_value_sig670B) {
    return [...this._resources["values"]()].flatMap(var_core_value_sig9E2F => Object.values(var_core_value_sig9E2F.embeds)).filter(var_core_value_sigD082 => var_core_value_sigD082.lifecycle !== "soft-delete d" && var_core_value_sigD082.childUnitId === var_core_value_sig670B);
  }
  getDescriptors(var_core_value_sig6912) {
    var var_core_value_sigE235;
    return Object.values(((var_core_value_sigE235 = this._resources["get"](var_core_value_sig6912)) == null ? undefined : var_core_value_sigE235.embeds) ?? {});
  }
  getDescriptorsByResourceRef(var_core_value_sig7664, var_core_value_sig2281) {
    var var_core_value_sig5E86;
    let var_core_value_sig6998 = z(var_core_value_sig2281);
    return Object.values(((var_core_value_sig5E86 = this._resources["get"](var_core_value_sig7664)) == null ? undefined : var_core_value_sig5E86.embeds) ?? {}).filter(var_core_value_sigDBB7 => z(this._getDescriptorResourceRef(var_core_value_sigDBB7)) === var_core_value_sig6998);
  }
  getActiveDescriptorsByResourceRef(var_core_value_sigF639, var_core_value_sigEAE5) {
    return this.getDescriptorsByResourceRef(var_core_value_sigF639, var_core_value_sigEAE5).filter(var_core_value_sigD0A8 => var_core_value_sigD0A8.lifecycle !== "soft-delete d");
  }
  countReferencesByResourceRef(var_core_value_sigE94C, var_core_value_sig6D47) {
    return this.getDescriptorsByResourceRef(var_core_value_sigE94C, var_core_value_sig6D47).length;
  }
  countActiveReferencesByResourceRef(var_core_value_sigCB82, var_core_value_sigCF4E) {
    return this.getActiveDescriptorsByResourceRef(var_core_value_sigCB82, var_core_value_sigCF4E).length;
  }
  softDeleteDescriptor(var_core_value_sig6CAD, var_core_value_sig8CF5) {
    let var_core_value_sigDDD7 = this.getDescriptor(var_core_value_sig6CAD, var_core_value_sig8CF5);
    var_core_value_sigDDD7 && (this._unitLeaseService["release"]({
      hostUnitId: var_core_value_sig6CAD,
      embedId: var_core_value_sig8CF5
    }), var_core_value_sigDDD7.lifecycle = "soft-delete d", var_core_value_sigDDD7.updatedAt = Date.now());
  }
  restoreDescriptor(var_core_value_sigB2CE, var_core_value_sig443C) {
    let var_core_value_sig39B1 = this.getDescriptor(var_core_value_sigB2CE, var_core_value_sig443C);
    var_core_value_sig39B1 && (var_core_value_sig39B1.hostType === var_core_value_sig2B86.UNIVER_BOARD && var_core_value_sig39B1.entry === b.BoardsFloatingObject && this.getActiveDescriptorsByResourceRef(var_core_value_sigB2CE, var_core_value_sig39B1.source["ref"]).some(var_core_value_sigF4B9 => var_core_value_sigF4B9.embedId !== var_core_value_sig443C) || (var_core_value_sig39B1.lifecycle = "active", var_core_value_sig39B1.updatedAt = Date.now()));
  }
  serializeUnit(var_core_value_sig210D) {
    return this._cloneResource(this._toPersistedResource(this._resources["get"](var_core_value_sig210D) ?? this._createResource()));
  }
  loadUnit(var_core_value_sigB4B4, var_core_value_sigD407) {
    let var_core_value_sig63F3 = this._createResource();
    for (let [var_core_value_sig5CEE, var_core_value_sigE92A] of Object.entries(var_core_value_sigD407.embeds ?? {})) var_core_value_sig63F3.embeds[var_core_value_sig5CEE] = this._normalizeDescriptor(var_core_value_sigB4B4, {
      ...this._toPersistedDescriptor(var_core_value_sigE92A),
      embedId: var_core_value_sig5CEE
    });
    this._resources["set"](var_core_value_sigB4B4, this._cloneResource(var_core_value_sig63F3));
  }
  unloadUnit(var_core_value_sig6A71) {
    this._resources["delete"](var_core_value_sig6A71);
  }
  parseJson(var_core_value_sig3BF6) {
    if (!var_core_value_sig3BF6) return this._createResource();
    let var_core_value_sig38CE = JSON.parse(var_core_value_sig3BF6);
    return {
      ...hn(),
      embeds: Object.fromEntries(Object.entries(var_core_value_sig38CE.embeds ?? {}).map(([var_core_value_sig362B, var_core_value_sig5CA5]) => [var_core_value_sig362B, this._normalizeDescriptor(var_core_value_sig5CA5.hostUnitId, {
        ...this._toPersistedDescriptor(var_core_value_sig5CA5),
        embedId: var_core_value_sig362B
      })]))
    };
  }
  toJson(var_core_value_sig62B7) {
    return JSON.stringify(this.serializeUnit(var_core_value_sig62B7));
  }
  _normalizeDescriptor(var_core_value_sig37A8, var_core_value_sigA90D) {
    let var_core_value_sig7A3C = {
      ...var_core_value_sigA90D
    };
    delete var_core_value_sig7A3C.hostContext;
    let var_core_value_sig0511 = var_core_value_sigA90D.childType ?? var_core_value_sigA90D.source["unitType"];
    if (var_core_value_sig0511 == null) throw new S("EMBED_DESCRIPTOR_CHILD_TYPE_REQUIRED", {
      hostUnitId: var_core_value_sig37A8,
      embedId: var_core_value_sigA90D.embedId
    });
    let var_core_value_sig1F44 = Fn(var_core_value_sigA90D.source["ref"]),
      var_core_value_sigCB04 = R(var_core_value_sig1F44);
    if (var_core_value_sig0511 !== B(var_core_value_sigCB04.unit["type"])) throw new S("EMBED_DESCRIPTOR_CHILD_TYPE_MISMATCH", {
      hostUnitId: var_core_value_sig37A8,
      embedId: var_core_value_sigA90D.embedId,
      childType: var_core_value_sig0511,
      refUnitType: var_core_value_sigCB04.unit["type"]
    });
    return {
      ...var_core_value_sig7A3C,
      hostUnitId: var_core_value_sig37A8,
      source: {
        ref: var_core_value_sig1F44,
        unitType: var_core_value_sig0511,
        ...(var_core_value_sigA90D.source["creationConfig"] === undefined ? undefined : {
          creationConfig: var_core_value_sigA90D.source["creationConfig"]
        })
      },
      ...(var_core_value_sigA90D.displayTarget === undefined ? {} : {
        displayTarget: dn(var_core_value_sig0511, var_core_value_sigA90D.displayTarget)
      }),
      childUnitId: var_core_value_sigA90D.childUnitId,
      childType: var_core_value_sig0511,
      lifecycle: var_core_value_sigA90D.lifecycle ?? "active"
    };
  }
  _getDescriptorResourceRef(var_core_value_sig947E) {
    return var_core_value_sig947E.source["ref"];
  }
  _getRuntimeChildUnitIdForMutation(var_core_value_sig4545, var_core_value_sigF39A) {
    if (var_core_value_sigF39A.childUnitId || !(var_core_value_sig4545 != null && var_core_value_sig4545.childUnitId) || var_core_value_sig4545.lifecycle === "soft-delete d" || var_core_value_sigF39A.lifecycle === "soft-delete d") return var_core_value_sigF39A.childUnitId;
    let var_core_value_sigF79C = var_core_value_sigF39A.childType ?? var_core_value_sigF39A.source["unitType"];
    if (var_core_value_sig4545.childType === var_core_value_sigF79C && z(var_core_value_sig4545.source["ref"]) === z(var_core_value_sigF39A.source["ref"])) return var_core_value_sig4545.childUnitId;
  }
  _ensureResource(var_core_value_sig2E54) {
    let var_core_value_sig7658 = this._resources["get"](var_core_value_sig2E54);
    return var_core_value_sig7658 || (var_core_value_sig7658 = this._createResource(), this._resources["set"](var_core_value_sig2E54, var_core_value_sig7658)), var_core_value_sig7658;
  }
  _createResource() {
    return hn();
  }
  _cloneResource(var_core_value_sigDCF5) {
    return gn(var_core_value_sigDCF5);
  }
  _toPersistedResource(var_core_value_sigC786) {
    return {
      version: var_core_value_sigC786.version,
      embeds: Object.fromEntries(Object.entries(var_core_value_sigC786.embeds).map(([var_core_value_sigE90F, var_core_value_sigEFD4]) => [var_core_value_sigE90F, this._toPersistedDescriptor(var_core_value_sigEFD4)]))
    };
  }
  _toPersistedDescriptor(var_core_value_sigC0D9) {
    let var_core_value_sigF0511 = {
      ...var_core_value_sigC0D9
    };
    return delete var_core_value_sigF0511.childUnitId, var_core_value_sigF0511;
  }
};
U = H([V(0, var_core_value_sigA7F0(Rn))], U);
const zn = {
    id: "embed.mutation.set-descriptor",
    type: var_core_value_sig7835.MUTATION,
    handler: (var_core_value_sig64D5, var_core_value_sig9678) => var_core_value_sig9678 ? (var_core_value_sig64D5.get(U).applyDescriptorMutation(var_core_value_sig9678.unitId, var_core_value_sig9678.descriptor), true) : false
  },
  Bn = {
    id: "embed.mutation.soft-delete-descriptor",
    type: var_core_value_sig7835.MUTATION,
    handler: (var_core_value_sig5E74, var_core_value_sig75FC) => var_core_value_sig75FC ? (var_core_value_sig5E74.get(U).softDeleteDescriptor(var_core_value_sig75FC.unitId, var_core_value_sig75FC.embedId), true) : false
  },
  Vn = new WeakMap(),
  Hn = new Map([["sheets-sheet-tab", "sheet-tab"], ["bases-table-list-block", "table-list"], ["slides-page-list-block", "slide-page-list"]]);
function Un() {
  return [];
}
function Wn(var_core_value_sig639A) {
  let var_core_value_sig567C = {};
  return var_core_value_sig639A.renderHost && (var_core_value_sig567C.renderHost = var_core_value_sig639A.renderHost), var_core_value_sig639A.hostType === var_core_value_sig2B86.UNIVER_DOC && (var_core_value_sig639A.childType === var_core_value_sig2B86.UNIVER_SHEET || var_core_value_sig639A.childType === var_core_value_sig2B86.UNIVER_BASE) && (var_core_value_sig567C.verticalWheelMode = "host", var_core_value_sig567C.horizontalWheelMode = "expand-then-self"), var_core_value_sig639A.mode === "float" ? (var_core_value_sig567C.floating = {
    enabled: true,
    layout: var_core_value_sig639A.layout,
    fullscreen: true
  }, var_core_value_sig567C.tab = false, var_core_value_sig567C) : (var_core_value_sig567C.floating = false, var_core_value_sig567C.tab = {
    enabled: true,
    container: Hn.get(var_core_value_sig639A.entry),
    replaceHostMenu: var_core_value_sig639A.menuBehavior === "host-override",
    hideHostFxBar: var_core_value_sig639A.menuBehavior === "host-override",
    lockHostRibbon: var_core_value_sig639A.menuBehavior === "host-override",
    thumbnail: var_core_value_sig639A.entry === "slides-page-list-block"
  }, var_core_value_sig567C);
}
var W = class {
  constructor() {
    x(this, "_capabilities", new Map());
  }
  register(var_core_value_sig5825) {
    let var_core_value_sig4EB7 = this._key(var_core_value_sig5825.hostType, var_core_value_sig5825.childType, var_core_value_sig5825.entry);
    if (this._capabilities["has"](var_core_value_sig4EB7)) throw Error("Embed capability already registered: " + var_core_value_sig4EB7);
    this._capabilities["set"](var_core_value_sig4EB7, var_core_value_sig5825);
  }
  registerMany(var_core_value_sig73AF) {
    var_core_value_sig73AF.forEach(var_core_value_sig861B => this.register(var_core_value_sig861B));
  }
  getCapability(var_core_value_sig548A) {
    return this._capabilities["get"](this._key(var_core_value_sig548A.hostType, var_core_value_sig548A.childType, var_core_value_sig548A.entry));
  }
  list() {
    return [...this._capabilities["values"]()];
  }
  _key(var_core_value_sigE026, var_core_value_sig339E, var_core_value_sig7550) {
    return var_core_value_sigE026 + ":" + var_core_value_sig339E + ":" + var_core_value_sig7550;
  }
};
function Gn(var_core_value_sig825F) {
  if (!var_core_value_sig825F.has(W)) return;
  let var_core_value_sig546D = var_core_value_sig825F,
    var_core_value_sig8078 = Vn.get(var_core_value_sig546D) ?? [];
  if (!var_core_value_sig8078.length) return;
  let var_core_value_sigDCED = var_core_value_sig825F.get(W);
  var_core_value_sig8078.forEach(var_core_value_sig2983 => Kn(var_core_value_sigDCED, var_core_value_sig2983)), Vn.delete(var_core_value_sig546D);
}
function Kn(var_core_value_sig2829, var_core_value_sig6EE2) {
  var_core_value_sig2829.getCapability(var_core_value_sig6EE2) || var_core_value_sig2829.register(var_core_value_sig6EE2);
}
var qn = class {
    assertCanCreate(var_core_value_sigE1B0) {
      if (var_core_value_sigE1B0.parentEmbedId) throw Error("NESTED_EMBED_NOT_SUPPORTED");
    }
  },
  Jn = class {
    resolve(var_core_value_sigD4FF) {
      let var_core_value_sig1E5B = Fn(var_core_value_sigD4FF.ref);
      if (B(R(var_core_value_sig1E5B).unit["type"]) !== var_core_value_sigD4FF.unitType) throw Error("EMBED_SOURCE_TYPE_MISMATCH");
      return {
        childType: var_core_value_sigD4FF.unitType,
        source: {
          ref: var_core_value_sig1E5B,
          unitType: var_core_value_sigD4FF.unitType,
          ...(var_core_value_sigD4FF.creationConfig === undefined ? undefined : {
            creationConfig: var_core_value_sigD4FF.creationConfig
          })
        }
      };
    }
  };
let G = class {
  constructor(var_core_value_sigB680, var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig2C39) {
    this._model = var_core_value_sigB680, this._capabilityRegistry = var_core_value_sig1F64, this._sourceResolver = var_core_value_sigDD1C, this._nestedGuard = var_core_value_sig2C39;
  }
  prepareCreateEmbed(var_core_value_sigB7D1) {
    this._nestedGuard["assertCanCreate"](var_core_value_sigB7D1);
    let var_core_value_sig64F0 = this._sourceResolver["resolve"](var_core_value_sigB7D1.source),
      var_core_value_sig85B1 = I(var_core_value_sig64F0.source["ref"]),
      var_core_value_sig3141 = L(var_core_value_sig85B1),
      var_core_value_sig2162 = this._model["getAllActiveDescriptors"]().find(var_core_value_sig5237 => L(I(var_core_value_sig5237.source["ref"])) === var_core_value_sig3141);
    if (var_core_value_sig2162) {
      let var_core_value_sigBB00 = var_core_value_sig64F0.childUnitId ?? var_core_value_sig85B1.unit["selector"],
        var_core_value_sig7E54 = new S("EMBED_CHILD_UNIT_ALREADY_EMBEDDED", {
          hostUnitId: var_core_value_sigB7D1.hostUnitId,
          embedId: var_core_value_sigB7D1.embedId,
          childUnitId: var_core_value_sigBB00,
          duplicatedHostUnitId: var_core_value_sig2162.hostUnitId,
          duplicatedEmbedId: var_core_value_sig2162.embedId
        });
      throw var_core_value_sig7E54.message = var_core_value_sig7E54.code + " child Unit " + JSON.stringify(var_core_value_sigBB00) + " is already used by Embed " + JSON.stringify(var_core_value_sig2162.embedId) + " and cannot also be used by Embed " + JSON.stringify(var_core_value_sigB7D1.embedId) + ".\x20Each\x20child\x20Unit\x20can\x20belong\x20to\x20only\x20one\x20active\x20Embed;\x20remove\x20the\x20existing\x20Embed\x20or\x20create\x20a\x20separate\x20child\x20Unit.", var_core_value_sig7E54;
    }
    let var_core_value_sig2EAD = this._capabilityRegistry["getCapability"]({
      hostType: var_core_value_sigB7D1.hostType,
      childType: var_core_value_sig64F0.childType,
      entry: var_core_value_sigB7D1.entry
    });
    if (!var_core_value_sig2EAD) throw new S("EMBED_CAPABILITY_NOT_SUPPORTED", {
      hostType: var_core_value_sigB7D1.hostType,
      childType: var_core_value_sig64F0.childType,
      entry: var_core_value_sigB7D1.entry
    });
    return {
      descriptor: {
        embedId: var_core_value_sigB7D1.embedId,
        hostUnitId: var_core_value_sigB7D1.hostUnitId,
        hostType: var_core_value_sigB7D1.hostType,
        hostAnchorId: var_core_value_sigB7D1.hostAnchorId,
        entry: var_core_value_sigB7D1.entry,
        source: var_core_value_sig64F0.source,
        childUnitId: var_core_value_sig64F0.childUnitId,
        childType: var_core_value_sig64F0.childType,
        mode: var_core_value_sigB7D1.mode ?? "interactive",
        sourceMeta: var_core_value_sigB7D1.sourceMeta ?? Wn(var_core_value_sig2EAD),
        displayTarget: dn(var_core_value_sig64F0.childType, var_core_value_sigB7D1.displayTarget)
      },
      resolvedSource: var_core_value_sig64F0
    };
  }
  createEmbed(var_core_value_sig6774) {
    let {
      descriptor: var_core_value_sig340D,
      resolvedSource: var_core_value_sig82D4
    } = this.prepareCreateEmbed(var_core_value_sig6774);
    return this._model["addDescriptor"](var_core_value_sig6774.hostUnitId, var_core_value_sig340D), {
      descriptor: this._model["getDescriptor"](var_core_value_sig6774.hostUnitId, var_core_value_sig6774.embedId),
      resolvedSource: var_core_value_sig82D4
    };
  }
  prepareCopyEmbed(var_core_value_sigBDE4) {
    let var_core_value_sig7DF1 = this._model["getDescriptor"](var_core_value_sigBDE4.hostUnitId, var_core_value_sigBDE4.sourceEmbedId);
    if (!var_core_value_sig7DF1) throw new S("EMBED_DESCRIPTOR_NOT_FOUND", var_core_value_sigBDE4);
    if (var_core_value_sig7DF1.hostType === var_core_value_sig2B86.UNIVER_BOARD) throw new S("EMBED_COPY_NOT_SUPPORTED", {
      hostUnitId: var_core_value_sigBDE4.hostUnitId,
      embedId: var_core_value_sigBDE4.sourceEmbedId
    });
    return {
      ...var_core_value_sig7DF1,
      embedId: var_core_value_sigBDE4.nextEmbedId,
      hostAnchorId: var_core_value_sigBDE4.nextHostAnchorId,
      childUnitId: undefined,
      lifecycle: "active",
      createdAt: undefined,
      updatedAt: undefined
    };
  }
  copyEmbed(var_core_value_sigDC86) {
    let var_core_value_sig0B0C = this.prepareCopyEmbed(var_core_value_sigDC86);
    return this._model["addDescriptor"](var_core_value_sigDC86.hostUnitId, var_core_value_sig0B0C), this._model["getDescriptor"](var_core_value_sigDC86.hostUnitId, var_core_value_sigDC86.nextEmbedId);
  }
  removeEmbed(var_core_value_sigA39E) {
    this._model["softDeleteDescriptor"](var_core_value_sigA39E.hostUnitId, var_core_value_sigA39E.embedId);
  }
};
G = H([V(0, var_core_value_sigA7F0(U)), V(1, var_core_value_sigA7F0(W)), V(2, var_core_value_sigA7F0(Jn)), V(3, var_core_value_sigA7F0(qn))], G);
const Yn = new WeakMap();
var K = class {
  constructor() {
    x(this, "_contributions", new Map());
  }
  register(var_core_value_sigBBEE) {
    let var_core_value_sig011D = this._key(var_core_value_sigBBEE.hostType, var_core_value_sigBBEE.entry);
    if (this._contributions["has"](var_core_value_sig011D)) throw Error("Embed\x20host\x20adapter\x20contribution\x20already\x20registered:\x20" + var_core_value_sig011D);
    this._contributions["set"](var_core_value_sig011D, var_core_value_sigBBEE);
  }
  get(var_core_value_sig6167, var_core_value_sig65A1) {
    return this._contributions["get"](this._key(var_core_value_sig6167, var_core_value_sig65A1));
  }
  list() {
    return [...this._contributions["values"]()];
  }
  readContext(var_core_value_sig7F19) {
    var var_core_value_sig7827, var_core_value_sig652C;
    return ((var_core_value_sig7827 = this.get(var_core_value_sig7F19.hostType, var_core_value_sig7F19.entry)) == null || (var_core_value_sig652C = var_core_value_sig7827.readContext) == null ? undefined : var_core_value_sig652C.call(var_core_value_sig7827, {
      embedId: var_core_value_sig7F19.embedId,
      hostUnitId: var_core_value_sig7F19.hostUnitId,
      hostType: var_core_value_sig7F19.hostType,
      entry: var_core_value_sig7F19.entry,
      hostAnchorId: var_core_value_sig7F19.hostAnchorId,
      descriptor: var_core_value_sig7F19
    })) ?? {
      resolved: false,
      entry: var_core_value_sig7F19.entry
    };
  }
  createBoundsUpdatePlan(var_core_value_sig7E32, var_core_value_sig4C07) {
    let var_core_value_sig79AB = this.get(var_core_value_sig7E32.hostType, var_core_value_sig7E32.entry);
    if (!(var_core_value_sig79AB != null && var_core_value_sig79AB.createBoundsUpdatePlan)) throw Error("EMBED_HOST_BOUNDS_NOT_SUPPORTED:" + var_core_value_sig7E32.hostType + ":" + var_core_value_sig7E32.entry);
    return var_core_value_sig79AB.createBoundsUpdatePlan({
      embedId: var_core_value_sig7E32.embedId,
      hostUnitId: var_core_value_sig7E32.hostUnitId,
      hostType: var_core_value_sig7E32.hostType,
      entry: var_core_value_sig7E32.entry,
      hostAnchorId: var_core_value_sig7E32.hostAnchorId,
      descriptor: var_core_value_sig7E32,
      bounds: var_core_value_sig4C07
    });
  }
  createAnchor(var_core_value_sig8E74) {
    let var_core_value_sig104C = this.get(var_core_value_sig8E74.hostType, var_core_value_sig8E74.entry);
    if (!var_core_value_sig104C) throw Error("EMBED_HOST_ADAPTER_NOT_REGISTERED:" + var_core_value_sig8E74.hostType + ":" + var_core_value_sig8E74.entry);
    if (!var_core_value_sig104C.createAnchor) throw Error("EMBED_HOST_ADAPTER_CREATE_ANCHOR_NOT_IMPLEMENTED:" + var_core_value_sig8E74.hostType + ":" + var_core_value_sig8E74.entry);
    return var_core_value_sig104C.createAnchor(var_core_value_sig8E74);
  }
  createAnchorPlan(var_core_value_sig841D) {
    let var_core_value_sig90CB = this.get(var_core_value_sig841D.hostType, var_core_value_sig841D.entry);
    if (!var_core_value_sig90CB) throw Error("EMBED_HOST_ADAPTER_NOT_REGISTERED:" + var_core_value_sig841D.hostType + ":" + var_core_value_sig841D.entry);
    if (var_core_value_sig90CB.createAnchorPlan) return var_core_value_sig90CB.createAnchorPlan(var_core_value_sig841D);
    if (!var_core_value_sig90CB.createAnchor) throw Error("EMBED_HOST_ADAPTER_CREATE_ANCHOR_NOT_IMPLEMENTED:" + var_core_value_sig841D.hostType + ":" + var_core_value_sig841D.entry);
    let var_core_value_sigBDF5 = var_core_value_sig841D.requestedAnchorId ?? var_core_value_sig841D.embedId + "-anchor",
      var_core_value_sigACC6 = {
        embedId: var_core_value_sig841D.embedId,
        hostUnitId: var_core_value_sig841D.hostUnitId,
        hostType: var_core_value_sig841D.hostType,
        entry: var_core_value_sig841D.entry,
        hostAnchorId: var_core_value_sigBDF5
      };
    return {
      hostAnchorId: var_core_value_sigBDF5,
      redoMutations: [{
        id: Qe,
        params: var_core_value_sigACC6
      }],
      undoMutations: [{
        id: $e,
        params: var_core_value_sigACC6
      }]
    };
  }
  removeAnchor(var_core_value_sig1614) {
    var var_core_value_sig85C3, var_core_value_sigB996;
    (var_core_value_sig85C3 = this.get(var_core_value_sig1614.hostType, var_core_value_sig1614.entry)) == null || (var_core_value_sigB996 = var_core_value_sig85C3.removeAnchor) == null || var_core_value_sigB996.call(var_core_value_sig85C3, var_core_value_sig1614);
  }
  afterCreateAnchor(var_core_value_sig4BBA) {
    var var_core_value_sig6201, var_core_value_sig5151;
    (var_core_value_sig6201 = this.get(var_core_value_sig4BBA.hostType, var_core_value_sig4BBA.entry)) == null || (var_core_value_sig5151 = var_core_value_sig6201.afterCreateAnchor) == null || var_core_value_sig5151.call(var_core_value_sig6201, var_core_value_sig4BBA);
  }
  afterRemoveAnchor(var_core_value_sigB542) {
    var var_core_value_sigBB6C, var_core_value_sigE2BF;
    (var_core_value_sigBB6C = this.get(var_core_value_sigB542.hostType, var_core_value_sigB542.entry)) == null || (var_core_value_sigE2BF = var_core_value_sigBB6C.afterRemoveAnchor) == null || var_core_value_sigE2BF.call(var_core_value_sigBB6C, var_core_value_sigB542);
  }
  activateAnchor(var_core_value_sigB8C7) {
    var var_core_value_sigA56E, var_core_value_sig1998;
    (var_core_value_sigA56E = this.get(var_core_value_sigB8C7.hostType, var_core_value_sigB8C7.entry)) == null || (var_core_value_sig1998 = var_core_value_sigA56E.activateAnchor) == null || var_core_value_sig1998.call(var_core_value_sigA56E, var_core_value_sigB8C7);
  }
  restoreAnchor(var_core_value_sigFF19) {
    let var_core_value_sig43B8 = this.get(var_core_value_sigFF19.hostType, var_core_value_sigFF19.entry);
    if (!var_core_value_sig43B8) throw Error("EMBED_HOST_ADAPTER_NOT_REGISTERED:" + var_core_value_sigFF19.hostType + ":" + var_core_value_sigFF19.entry);
    if (!var_core_value_sig43B8.restoreAnchor) throw Error("EMBED_HOST_ADAPTER_RESTORE_ANCHOR_NOT_IMPLEMENTED:" + var_core_value_sigFF19.hostType + ":" + var_core_value_sigFF19.entry);
    return var_core_value_sig43B8.restoreAnchor(var_core_value_sigFF19);
  }
  removeAnchorPlan(var_core_value_sigD98F) {
    let var_core_value_sig66C0 = this.get(var_core_value_sigD98F.hostType, var_core_value_sigD98F.entry);
    if (var_core_value_sig66C0 != null && var_core_value_sig66C0.removeAnchorPlan) return var_core_value_sig66C0.removeAnchorPlan(var_core_value_sigD98F);
    let var_core_value_sig9D15 = {
      embedId: var_core_value_sigD98F.embedId,
      hostUnitId: var_core_value_sigD98F.hostUnitId,
      hostType: var_core_value_sigD98F.hostType,
      entry: var_core_value_sigD98F.entry,
      hostAnchorId: var_core_value_sigD98F.hostAnchorId
    };
    return {
      redoMutations: [{
        id: $e,
        params: var_core_value_sig9D15
      }],
      undoMutations: [{
        id: Qe,
        params: var_core_value_sig9D15
      }]
    };
  }
  _key(var_core_value_sigB785, var_core_value_sig130F) {
    return var_core_value_sigB785 + ":" + var_core_value_sig130F;
  }
};
function Xn(var_core_value_sig4CCC, var_core_value_sig6E47) {
  if (var_core_value_sig4CCC.has(K)) {
    let var_core_value_sigC0E3 = var_core_value_sig4CCC.get(K);
    var_core_value_sig6E47.forEach(var_core_value_sig9A8D => Qn(var_core_value_sigC0E3, var_core_value_sig9A8D));
    return;
  }
  let var_core_value_sigB64D = var_core_value_sig4CCC,
    var_core_value_sig2407 = Yn.get(var_core_value_sigB64D) ?? [];
  var_core_value_sig6E47.forEach(var_core_value_sig52F7 => {
    var_core_value_sig2407.some(var_core_value_sigC259 => $n(var_core_value_sigC259, var_core_value_sig52F7)) || var_core_value_sig2407.push(var_core_value_sig52F7);
  }), Yn.set(var_core_value_sigB64D, var_core_value_sig2407);
}
function Zn(var_core_value_sigE4D0) {
  if (!var_core_value_sigE4D0.has(K)) return;
  let var_core_value_sigD5F1 = var_core_value_sigE4D0,
    var_core_value_sigBC19 = Yn.get(var_core_value_sigD5F1) ?? [];
  if (!var_core_value_sigBC19.length) return;
  let var_core_value_sig4F3C = var_core_value_sigE4D0.get(K);
  var_core_value_sigBC19.forEach(var_core_value_sig866F => Qn(var_core_value_sig4F3C, var_core_value_sig866F)), Yn.delete(var_core_value_sigD5F1);
}
function Qn(var_core_value_sig8D44, var_core_value_sig1660) {
  var_core_value_sig8D44.get(var_core_value_sig1660.hostType, var_core_value_sig1660.entry) || var_core_value_sig8D44.register(var_core_value_sig1660);
}
function $n(var_core_value_sigEE7B, var_core_value_sig44DF) {
  return var_core_value_sigEE7B.hostType === var_core_value_sig44DF.hostType && var_core_value_sigEE7B.entry === var_core_value_sig44DF.entry;
}
let q = class {
  constructor(var_core_value_sigDE3D, var_core_value_sigF175, var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547) {
    this._creationService = var_core_value_sigDE3D, this._modelService = var_core_value_sigF175, this._univerInstanceService = var_core_value_sig6A18, this._hostAdapterRegistry = var_core_value_sig4E3D, this._commandService = var_core_value_sig49B0, this._undoRedoService = var_core_value_sig2547;
  }
  createEmbed(var_core_value_sigBCA9) {
    let var_core_value_sig4CDF = this._normalizeHostContext(var_core_value_sigBCA9),
      var_core_value_sig3F79 = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: var_core_value_sigBCA9.embedId,
        hostUnitId: var_core_value_sigBCA9.hostUnitId,
        hostType: var_core_value_sigBCA9.hostType,
        entry: var_core_value_sigBCA9.entry,
        requestedAnchorId: var_core_value_sigBCA9.requestedHostAnchorId,
        hostContext: var_core_value_sig4CDF
      }),
      var_core_value_sig880E = this._creationService["prepareCreateEmbed"]({
        ...var_core_value_sigBCA9,
        hostContext: var_core_value_sig4CDF,
        hostAnchorId: var_core_value_sig3F79.hostAnchorId
      }),
      var_core_value_sigC9ED = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: var_core_value_sigBCA9.embedId,
        hostUnitId: var_core_value_sigBCA9.hostUnitId,
        hostType: var_core_value_sigBCA9.hostType,
        entry: var_core_value_sigBCA9.entry,
        requestedAnchorId: var_core_value_sig880E.descriptor["hostAnchorId"],
        hostContext: var_core_value_sig4CDF,
        descriptor: var_core_value_sig880E.descriptor
      }),
      var_core_value_sigB57B = [...var_core_value_sigC9ED.redoMutations, this._toSetDescriptorMutation(var_core_value_sig880E.descriptor)],
      var_core_value_sig780B = [this._toSoftDeleteDescriptorMutation(var_core_value_sig880E.descriptor), ...var_core_value_sigC9ED.undoMutations];
    this._executeAndPushUndoRedo(var_core_value_sig880E.descriptor["hostUnitId"], var_core_value_sigB57B, var_core_value_sig780B);
    let var_core_value_sig7D1B = this._getDescriptor(var_core_value_sig880E.descriptor["hostUnitId"], var_core_value_sig880E.descriptor["embedId"]);
    return this._afterCreateAnchor(var_core_value_sig7D1B, var_core_value_sig4CDF), var_core_value_sig7D1B;
  }
  copyEmbed(var_core_value_sig7BE0) {
    let var_core_value_sig7D40 = this._getDescriptor(var_core_value_sig7BE0.hostUnitId, var_core_value_sig7BE0.sourceEmbedId),
      var_core_value_sig6C7E = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: var_core_value_sig7BE0.nextEmbedId,
        hostUnitId: var_core_value_sig7BE0.hostUnitId,
        hostType: var_core_value_sig7D40.hostType,
        entry: var_core_value_sig7D40.entry,
        requestedAnchorId: var_core_value_sig7BE0.requestedHostAnchorId,
        hostContext: var_core_value_sig7BE0.hostContext
      }),
      var_core_value_sig68BE = this._creationService["prepareCopyEmbed"]({
        hostUnitId: var_core_value_sig7BE0.hostUnitId,
        sourceEmbedId: var_core_value_sig7BE0.sourceEmbedId,
        nextEmbedId: var_core_value_sig7BE0.nextEmbedId,
        nextHostAnchorId: var_core_value_sig6C7E.hostAnchorId
      }),
      var_core_value_sig04C6 = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: var_core_value_sig7BE0.nextEmbedId,
        hostUnitId: var_core_value_sig7BE0.hostUnitId,
        hostType: var_core_value_sig7D40.hostType,
        entry: var_core_value_sig7D40.entry,
        requestedAnchorId: var_core_value_sig68BE.hostAnchorId,
        hostContext: var_core_value_sig7BE0.hostContext,
        descriptor: var_core_value_sig68BE
      }),
      var_core_value_sigCA05 = [...var_core_value_sig04C6.redoMutations, this._toSetDescriptorMutation(var_core_value_sig68BE)],
      var_core_value_sig2F2B = [this._toSoftDeleteDescriptorMutation(var_core_value_sig68BE), ...var_core_value_sig04C6.undoMutations];
    this._executeAndPushUndoRedo(var_core_value_sig68BE.hostUnitId, var_core_value_sigCA05, var_core_value_sig2F2B);
    let var_core_value_sig70AF = this._getDescriptor(var_core_value_sig68BE.hostUnitId, var_core_value_sig68BE.embedId);
    return this._afterCreateAnchor(var_core_value_sig70AF, var_core_value_sig7BE0.hostContext), var_core_value_sig70AF;
  }
  removeEmbed(var_core_value_sigD04E) {
    let var_core_value_sigB99B = this._modelService["getDescriptor"](var_core_value_sigD04E.hostUnitId, var_core_value_sigD04E.embedId);
    if (!var_core_value_sigB99B || var_core_value_sigB99B.lifecycle === "soft-delete d") return false;
    let var_core_value_sig5A75 = this._hostAdapterRegistry["removeAnchorPlan"]({
        embedId: var_core_value_sigB99B.embedId,
        hostUnitId: var_core_value_sigB99B.hostUnitId,
        hostType: var_core_value_sigB99B.hostType,
        entry: var_core_value_sigB99B.entry,
        hostAnchorId: var_core_value_sigB99B.hostAnchorId,
        descriptor: var_core_value_sigB99B
      }),
      var_core_value_sig7BAF = [...var_core_value_sig5A75.redoMutations, this._toSoftDeleteDescriptorMutation(var_core_value_sigB99B)],
      var_core_value_sig8F69 = [...var_core_value_sig5A75.undoMutations, this._toSetDescriptorMutation({
        ...var_core_value_sigB99B,
        lifecycle: "active"
      })];
    return this._executeAndPushUndoRedo(var_core_value_sigB99B.hostUnitId, var_core_value_sig7BAF, var_core_value_sig8F69), this._afterRemoveAnchor(var_core_value_sigB99B), true;
  }
  setDisplayTarget(var_core_value_sig6884) {
    let var_core_value_sig066E = this._modelService["getDescriptor"](var_core_value_sig6884.hostUnitId, var_core_value_sig6884.embedId);
    if (!var_core_value_sig066E || var_core_value_sig066E.lifecycle === "soft-delete d") return false;
    let var_core_value_sig9B0D = dn(var_core_value_sig066E.childType, var_core_value_sig6884.displayTarget);
    if (fn(var_core_value_sig066E.displayTarget, var_core_value_sig9B0D)) return true;
    let var_core_value_sig3D2C = {
      ...var_core_value_sig066E,
      displayTarget: var_core_value_sig9B0D
    };
    return this._executeAndPushUndoRedo(var_core_value_sig066E.hostUnitId, [this._toSetDescriptorMutation(var_core_value_sig3D2C)], [this._toSetDescriptorMutation(var_core_value_sig066E)]), true;
  }
  setBounds(var_core_value_sigC56D) {
    cr(var_core_value_sigC56D.bounds);
    let var_core_value_sig3A17 = this._modelService["getDescriptor"](var_core_value_sigC56D.hostUnitId, var_core_value_sigC56D.embedId);
    if (!var_core_value_sig3A17 || var_core_value_sig3A17.lifecycle === "soft-delete d") return false;
    let var_core_value_sig938F = this._hostAdapterRegistry["createBoundsUpdatePlan"](var_core_value_sig3A17, var_core_value_sigC56D.bounds);
    return this._executeAndPushUndoRedo(var_core_value_sig3A17.hostUnitId, var_core_value_sig938F.redoMutations, var_core_value_sig938F.undoMutations), true;
  }
  _executeAndPushUndoRedo(var_core_value_sigD948, var_core_value_sigBE5E, var_core_value_sig0281) {
    let var_core_value_sigED71 = tr(var_core_value_sigBE5E),
      var_core_value_sig281C = tr(var_core_value_sig0281),
      var_core_value_sig3C92 = var_core_value_sig23AB(var_core_value_sigED71, this._commandService);
    if (!var_core_value_sig3C92.result) {
      let var_core_value_sig9C9F = var_core_value_sigED71[var_core_value_sig3C92.index],
        var_core_value_sigFDEA = var_core_value_sig3C92.error instanceof Error ? var_core_value_sig3C92.error["message"] : String(var_core_value_sig3C92.error ?? "");
      throw Error("EMBED_HOST_LIFECYCLE_MUTATION_FAILED:" + ((var_core_value_sig9C9F == null ? undefined : var_core_value_sig9C9F.id) ?? var_core_value_sig3C92.index) + ":" + var_core_value_sigFDEA);
    }
    this._undoRedoService["pushUndoRedo"]({
      unitID: var_core_value_sigD948,
      undoMutations: var_core_value_sig281C,
      redoMutations: var_core_value_sigED71
    });
  }
  _getDescriptor(var_core_value_sigB16B, var_core_value_sig585D) {
    let var_core_value_sigE722 = this._modelService["getDescriptor"](var_core_value_sigB16B, var_core_value_sig585D);
    if (!var_core_value_sigE722) throw Error("EMBED_DESCRIPTOR_NOT_FOUND");
    return var_core_value_sigE722;
  }
  _normalizeHostContext(var_core_value_sig062A) {
    C({
      hostUnitId: var_core_value_sig062A.hostUnitId,
      entry: var_core_value_sig062A.entry,
      hostContext: var_core_value_sig062A.hostContext
    });
    let var_core_value_sig050A = var_core_value_sig062A.hostContext ? {
      ...var_core_value_sig062A.hostContext
    } : undefined;
    if (var_core_value_sig062A.hostType === var_core_value_sig2B86.UNIVER_SHEET && var_core_value_sig062A.entry === b.SheetsFloatingObject) {
      if (typeof (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.subUnitId) == "string") return var_core_value_sig050A;
      let var_core_value_sig86D0 = rr(this._univerInstanceService, var_core_value_sig062A.hostUnitId);
      return var_core_value_sig86D0 ? {
        ...var_core_value_sig050A,
        subUnitId: var_core_value_sig86D0
      } : var_core_value_sig050A;
    }
    if (var_core_value_sig062A.hostType === var_core_value_sig2B86.UNIVER_SLIDE && var_core_value_sig062A.entry === b.SlidesFloatingObject) {
      if (typeof (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.subUnitId) == "string") return var_core_value_sig050A;
      let var_core_value_sig4CD2 = ir(this._univerInstanceService, var_core_value_sig062A.hostUnitId);
      return var_core_value_sig4CD2 ? {
        ...var_core_value_sig050A,
        subUnitId: var_core_value_sig4CD2
      } : var_core_value_sig050A;
    }
    if (var_core_value_sig062A.hostType === var_core_value_sig2B86.UNIVER_BOARD && var_core_value_sig062A.entry === b.BoardsFloatingObject) {
      if (typeof (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.subUnitId) == "string") return var_core_value_sig050A;
      let var_core_value_sig48CA = nr(this._univerInstanceService, var_core_value_sig062A.hostUnitId);
      return var_core_value_sig48CA ? {
        ...var_core_value_sig050A,
        subUnitId: var_core_value_sig48CA
      } : var_core_value_sig050A;
    }
    return var_core_value_sig050A;
  }
  _toSetDescriptorMutation(var_core_value_sig8B32) {
    let var_core_value_sig870F = {
      ...var_core_value_sig8B32
    };
    return delete var_core_value_sig870F.childUnitId, {
      id: zn.id,
      params: {
        unitId: var_core_value_sig8B32.hostUnitId,
        descriptor: var_core_value_sig870F
      }
    };
  }
  _toSoftDeleteDescriptorMutation(var_core_value_sigB683) {
    return {
      id: Bn.id,
      params: {
        unitId: var_core_value_sigB683.hostUnitId,
        embedId: var_core_value_sigB683.embedId
      }
    };
  }
  _afterCreateAnchor(var_core_value_sig26EC, var_core_value_sigEEDB) {
    try {
      this._hostAdapterRegistry["afterCreateAnchor"]({
        embedId: var_core_value_sig26EC.embedId,
        hostUnitId: var_core_value_sig26EC.hostUnitId,
        hostType: var_core_value_sig26EC.hostType,
        entry: var_core_value_sig26EC.entry,
        hostAnchorId: var_core_value_sig26EC.hostAnchorId,
        hostContext: var_core_value_sigEEDB,
        descriptor: var_core_value_sig26EC
      });
    } catch {}
  }
  _afterRemoveAnchor(var_core_value_sig36E7) {
    try {
      this._hostAdapterRegistry["afterRemoveAnchor"]({
        embedId: var_core_value_sig36E7.embedId,
        hostUnitId: var_core_value_sig36E7.hostUnitId,
        hostType: var_core_value_sig36E7.hostType,
        entry: var_core_value_sig36E7.entry,
        hostAnchorId: var_core_value_sig36E7.hostAnchorId,
        descriptor: var_core_value_sig36E7
      });
    } catch {}
  }
};
q = H([V(0, var_core_value_sigA7F0(G)), V(1, var_core_value_sigA7F0(U)), V(2, var_core_value_sig035C), V(3, var_core_value_sigA7F0(K)), V(4, var_core_value_sig6663), V(5, var_core_value_sig2FD0)], q);
const er = new Set([zn.id, Bn.id, v, y]);
function tr(var_core_value_sig7E48) {
  return [...var_core_value_sig7E48.filter(var_core_value_sig6A78 => !er.has(var_core_value_sig6A78.id)), ...var_core_value_sig7E48.filter(var_core_value_sigF7EF => er.has(var_core_value_sigF7EF.id))];
}
function nr(var_core_value_sig7B9E, var_core_value_sig5C3B) {
  var var_core_value_sig4002;
  return (var_core_value_sig4002 = var_core_value_sig7B9E.getUnit(var_core_value_sig5C3B, var_core_value_sig2B86.UNIVER_BOARD)) == null ? undefined : var_core_value_sig4002.getActivePageId();
}
function rr(var_core_value_sig4153, var_core_value_sig2825) {
  var var_core_value_sig5FD0, var_core_value_sigA7E3, var_core_value_sigA784, var_core_value_sig4406;
  let var_core_value_sig6806 = var_core_value_sig4153.getUnit(var_core_value_sig2825, var_core_value_sig2B86.UNIVER_SHEET),
    var_core_value_sigD4AA = var_core_value_sig6806 == null || (var_core_value_sig5FD0 = var_core_value_sig6806.getActiveSheet) == null ? undefined : var_core_value_sig5FD0.call(var_core_value_sig6806);
  return (var_core_value_sigD4AA == null || (var_core_value_sigA7E3 = var_core_value_sigD4AA.getSheetId) == null ? undefined : var_core_value_sigA7E3.call(var_core_value_sigD4AA)) ?? (var_core_value_sigD4AA == null || (var_core_value_sigA784 = var_core_value_sigD4AA.getSheetID) == null ? undefined : var_core_value_sigA784.call(var_core_value_sigD4AA)) ?? (var_core_value_sigD4AA == null || (var_core_value_sig4406 = var_core_value_sigD4AA.getConfig) == null ? undefined : var_core_value_sig4406.call(var_core_value_sigD4AA).id);
}
function ir(var_core_value_sigDC41, var_core_value_sigFB47) {
  var var_core_value_sig9B3D1, var_core_value_sigC1CF, var_core_value_sigEE12, var_core_value_sigD70C, var_core_value_sigF047, var_core_value_sigC2F9, var_core_value_sig1F51;
  let var_core_value_sig29F5 = var_core_value_sigDC41.getUnit(var_core_value_sigFB47, var_core_value_sig2B86.UNIVER_SLIDE),
    var_core_value_sig5A51 = or((var_core_value_sig29F5 == null || (var_core_value_sig9B3D1 = var_core_value_sig29F5.pageManager) == null || (var_core_value_sigC1CF = var_core_value_sig9B3D1.getActiveSlide) == null ? undefined : var_core_value_sigC1CF.call(var_core_value_sig9B3D1)) ?? (var_core_value_sig29F5 == null || (var_core_value_sigEE12 = var_core_value_sig29F5.getActivePage) == null ? undefined : var_core_value_sigEE12.call(var_core_value_sig29F5)));
  if (var_core_value_sig5A51) return var_core_value_sig5A51;
  let var_core_value_sigF1D1 = var_core_value_sig29F5 == null || (var_core_value_sigD70C = var_core_value_sig29F5.getSnapshot) == null ? undefined : var_core_value_sigD70C.call(var_core_value_sig29F5);
  return (typeof (var_core_value_sigF1D1 == null ? undefined : var_core_value_sigF1D1.activeSlideId) == "string" ? var_core_value_sigF1D1.activeSlideId : undefined) || (ar(var_core_value_sigF1D1 == null ? undefined : var_core_value_sigF1D1.slideOrder) ?? ar((var_core_value_sigF047 = sr(var_core_value_sigF1D1 == null ? undefined : var_core_value_sigF1D1.body)) == null ? undefined : var_core_value_sigF047.pageOrder)) || (var_core_value_sig29F5 == null || (var_core_value_sigC2F9 = var_core_value_sig29F5.pageManager) == null || (var_core_value_sig1F51 = var_core_value_sigC2F9.getSlides) == null || (var_core_value_sig1F51 = var_core_value_sig1F51.call(var_core_value_sigC2F9)) == null ? undefined : var_core_value_sig1F51.map(var_core_value_sig27F9 => or(var_core_value_sig27F9)).find(var_core_value_sig393E => typeof var_core_value_sig393E == "string"));
}
function ar(var_core_value_sig370E) {
  return Array.isArray(var_core_value_sig370E) ? var_core_value_sig370E.find(var_core_value_sigB609 => typeof var_core_value_sigB609 == "string") : undefined;
}
function or(var_core_value_sigDE14) {
  let var_core_value_sig02CB = sr(var_core_value_sigDE14);
  if (typeof (var_core_value_sig02CB == null ? undefined : var_core_value_sig02CB.id) == "string") return var_core_value_sig02CB.id;
  let var_core_value_sig6CBB = typeof (var_core_value_sig02CB == null ? undefined : var_core_value_sig02CB.getId) == "function" ? var_core_value_sig02CB.getId : undefined,
    var_core_value_sig68DA = var_core_value_sig6CBB == null ? undefined : var_core_value_sig6CBB.call(var_core_value_sigDE14);
  return typeof var_core_value_sig68DA == "string" ? var_core_value_sig68DA : undefined;
}
function sr(var_core_value_sig64D8) {
  return var_core_value_sig64D8 && typeof var_core_value_sig64D8 == "object" && !Array.isArray(var_core_value_sig64D8) ? var_core_value_sig64D8 : undefined;
}
function cr(var_core_value_sigD755) {
  if (![var_core_value_sigD755.left, var_core_value_sigD755.top, var_core_value_sigD755.width, var_core_value_sigD755.height].every(Number.isFinite) || var_core_value_sigD755.width <= 0 || var_core_value_sigD755.height <= 0) throw Error("EMBED_BOUNDS_INVALID");
}
const lr = {
    id: "embed.command.create",
    type: var_core_value_sig7835.COMMAND,
    handler: (var_core_value_sigF897, var_core_value_sigA578) => var_core_value_sigA578 ? var_core_value_sigF897.get(q).createEmbed(var_core_value_sigA578) : false
  },
  ur = {
    id: "embed.command.copy",
    type: var_core_value_sig7835.COMMAND,
    handler: (var_core_value_sig0260, var_core_value_sig034D) => var_core_value_sig034D ? var_core_value_sig0260.get(q).copyEmbed(var_core_value_sig034D) : false
  },
  dr = {
    id: "embed.command.remove",
    type: var_core_value_sig7835.COMMAND,
    handler: (var_core_value_sig89EC, var_core_value_sig9975) => var_core_value_sig9975 ? var_core_value_sig89EC.get(q).removeEmbed(var_core_value_sig9975) : false
  },
  fr = {
    id: "embed.command.set-display-target",
    type: var_core_value_sig7835.COMMAND,
    handler: (var_core_value_sigD6D9, var_core_value_sig2637) => var_core_value_sig2637 ? var_core_value_sigD6D9.get(q).setDisplayTarget(var_core_value_sig2637) : false
  },
  pr = {
    id: "embed.command.set-bounds",
    type: var_core_value_sig7835.COMMAND,
    handler: (var_core_value_sigAF1D, var_core_value_sigC92D) => var_core_value_sigC92D ? var_core_value_sigAF1D.get(q).setBounds(var_core_value_sigC92D) : false
  },
  mr = {
    id: "embed.command.set-sheet-placement",
    type: var_core_value_sig7835.COMMAND,
    handler: (var_core_value_sigEA3D, var_core_value_sig2841) => {
      if (!var_core_value_sig2841) return false;
      let var_core_value_sig9FE1 = var_core_value_sigEA3D.get(U).getDescriptor(var_core_value_sig2841.hostUnitId, var_core_value_sig2841.embedId);
      if (!var_core_value_sig9FE1 || var_core_value_sig9FE1.lifecycle === "soft-delete d" || var_core_value_sig9FE1.entry !== b.SheetsFloatingObject) return false;
      let var_core_value_sig9DAA = Ot({
          embedId: var_core_value_sig9FE1.embedId,
          hostUnitId: var_core_value_sig9FE1.hostUnitId,
          hostType: var_core_value_sig9FE1.hostType,
          entry: var_core_value_sig9FE1.entry,
          hostAnchorId: var_core_value_sig9FE1.hostAnchorId,
          descriptor: var_core_value_sig9FE1
        }, var_core_value_sig2841.placement, var_core_value_sigEA3D.get(M), var_core_value_sigEA3D.get(var_core_value_sig5A9A), var_core_value_sigEA3D.get(var_core_value_sig2191)),
        var_core_value_sig1F8A = var_core_value_sigEA3D.get(var_core_value_sig6663);
      return var_core_value_sig23AB(var_core_value_sig9DAA.redoMutations, var_core_value_sig1F8A).result ? (var_core_value_sigEA3D.get(var_core_value_sig2FD0).pushUndoRedo({
        unitID: var_core_value_sig9FE1.hostUnitId,
        undoMutations: var_core_value_sig9DAA.undoMutations,
        redoMutations: var_core_value_sig9DAA.redoMutations
      }), true) : false;
    }
  };
var hr = "@univerjs-pro/embed",
  gr = "1.0.0-insiders.20260907-70fc579";
const _r = {
    id: v,
    type: var_core_value_sig7835.MUTATION,
    handler: (var_core_value_sigEBB4, var_core_value_sig2B74) => var_core_value_sig2B74 ? (var_core_value_sigEBB4.get(M).setAnchor(var_core_value_sig2B74.record), true) : false
  },
  vr = {
    id: y,
    type: var_core_value_sig7835.MUTATION,
    handler: (var_core_value_sig0483, var_core_value_sig4A48) => var_core_value_sig4A48 ? (var_core_value_sig0483.get(M).removeAnchor(var_core_value_sig4A48.hostUnitId, var_core_value_sig4A48.hostAnchorId), true) : false
  },
  yr = {
    id: Qe,
    type: var_core_value_sig7835.MUTATION,
    handler: (var_core_value_sigD170, var_core_value_sig90E5) => {
      if (!var_core_value_sig90E5) return false;
      if (var_core_value_sigD170.get(K).createAnchor({
        embedId: var_core_value_sig90E5.embedId,
        hostUnitId: var_core_value_sig90E5.hostUnitId,
        hostType: var_core_value_sig90E5.hostType,
        entry: var_core_value_sig90E5.entry,
        requestedAnchorId: var_core_value_sig90E5.hostAnchorId
      }) !== var_core_value_sig90E5.hostAnchorId) throw Error("EMBED_HOST_ANCHOR_RESTORE_MISMATCH");
      return true;
    }
  },
  br = {
    id: $e,
    type: var_core_value_sig7835.MUTATION,
    handler: (var_core_value_sig7000, var_core_value_sigD7C5) => var_core_value_sigD7C5 ? (var_core_value_sig7000.get(K).removeAnchor(var_core_value_sigD7C5), true) : false
  },
  xr = {};
let Sr = function (var_core_value_sig3633) {
  return var_core_value_sig3633.RANGE = "range", var_core_value_sig3633.TABLE = "table", var_core_value_sig3633;
}({});
var J = class extends Error {
  constructor(var_core_value_sig390D, var_core_value_sigC928) {
    super(var_core_value_sig390D), x(this, "code", undefined), x(this, "details", undefined), this.name = "ReferencedUnitError", this.code = var_core_value_sig390D, this.details = var_core_value_sigC928;
  }
};
const Y = var_core_value_sigB9C5("univer.embed.referenced-unit-manager-service");
let Cr = class extends var_core_value_sig97E2 {
  constructor(var_core_value_sig39B7, var_core_value_sig18E0, var_core_value_sigE161, var_core_value_sigBDEE) {
    super(), this._resourceManagerService = var_core_value_sig39B7, this._referencedUnitManagerService = var_core_value_sig18E0, this._embedModelService = var_core_value_sigE161, this._unitLeaseService = var_core_value_sigBDEE, this._initResource();
  }
  _initResource() {
    this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: "UNIVER_EMBED_RESOURCE_PLUGIN",
      businesses: [var_core_value_sig2B86.UNIVER_DOC, var_core_value_sig2B86.UNIVER_SHEET, var_core_value_sig2B86.UNIVER_BASE, var_core_value_sig2B86.UNIVER_SLIDE, var_core_value_sig2B86.UNIVER_BOARD],
      toJson: var_core_value_sig50AF => this._embedModelService["toJson"](var_core_value_sig50AF),
      parseJson: var_core_value_sigA942 => this._embedModelService["parseJson"](var_core_value_sigA942),
      onLoad: (var_core_value_sigA621, var_core_value_sigBBFF) => this._embedModelService["loadUnit"](var_core_value_sigA621, var_core_value_sigBBFF),
      onUnLoad: var_core_value_sig8889 => this._unloadUnit(var_core_value_sig8889)
    }));
  }
  _unloadUnit(var_core_value_sig1F40) {
    this._embedModelService["unloadUnit"](var_core_value_sig1F40), this._unitLeaseService["releaseUnit"](var_core_value_sig1F40), this._referencedUnitManagerService["releaseUnit"](var_core_value_sig1F40);
  }
};
Cr = H([V(0, var_core_value_sig4EAB), V(1, var_core_value_sigA7F0(Y)), V(2, var_core_value_sigA7F0(U)), V(3, var_core_value_sigA7F0(Rn))], Cr);
const wr = [{
    hostType: var_core_value_sig2B86.UNIVER_DOC,
    childType: var_core_value_sig2B86.UNIVER_BOARD,
    entry: b.DocsCustomBlock,
    mode: "float",
    layout: "content-bounds-fit",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_DOC,
    childType: var_core_value_sig2B86.UNIVER_SHEET,
    entry: b.DocsCustomBlock,
    mode: "float",
    layout: "docs-sticky-sheet",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_DOC,
    childType: var_core_value_sig2B86.UNIVER_BASE,
    entry: b.DocsCustomBlock,
    mode: "float",
    layout: "docs-sticky-base",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_DOC,
    childType: var_core_value_sig2B86.UNIVER_SLIDE,
    entry: b.DocsCustomBlock,
    mode: "float",
    layout: "aspect-fit",
    menuBehavior: "floating",
    nestedEmbed: false
  }],
  Tr = [{
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    childType: var_core_value_sig2B86.UNIVER_BOARD,
    entry: b.SheetsFloatingObject,
    mode: "float",
    renderHost: "sheets-drawing-dom",
    layout: "content-bounds-fit",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    childType: var_core_value_sig2B86.UNIVER_BOARD,
    entry: b.SheetsSheetTab,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    childType: var_core_value_sig2B86.UNIVER_DOC,
    entry: b.SheetsFloatingObject,
    mode: "float",
    renderHost: "sheets-drawing-dom",
    layout: "doc-width-scale",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    childType: var_core_value_sig2B86.UNIVER_SLIDE,
    entry: b.SheetsFloatingObject,
    mode: "float",
    renderHost: "sheets-drawing-dom",
    layout: "aspect-fit",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    childType: var_core_value_sig2B86.UNIVER_BASE,
    entry: b.SheetsFloatingObject,
    mode: "float",
    renderHost: "sheets-drawing-dom",
    layout: "scroll-contained",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    childType: var_core_value_sig2B86.UNIVER_BASE,
    entry: b.SheetsSheetTab,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    childType: var_core_value_sig2B86.UNIVER_DOC,
    entry: b.SheetsSheetTab,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    childType: var_core_value_sig2B86.UNIVER_SLIDE,
    entry: b.SheetsSheetTab,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }],
  Er = [{
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    childType: var_core_value_sig2B86.UNIVER_BOARD,
    entry: b.SlidesFloatingObject,
    mode: "float",
    renderHost: "slides-object-dom",
    layout: "content-bounds-fit",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    childType: var_core_value_sig2B86.UNIVER_BOARD,
    entry: b.SlidesPageListBlock,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    childType: var_core_value_sig2B86.UNIVER_SHEET,
    entry: b.SlidesFloatingObject,
    mode: "float",
    renderHost: "slides-object-dom",
    layout: "scroll-contained",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    childType: var_core_value_sig2B86.UNIVER_BASE,
    entry: b.SlidesFloatingObject,
    mode: "float",
    renderHost: "slides-object-dom",
    layout: "scroll-contained",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    childType: var_core_value_sig2B86.UNIVER_DOC,
    entry: b.SlidesFloatingObject,
    mode: "float",
    renderHost: "slides-object-dom",
    layout: "doc-width-scale",
    menuBehavior: "floating",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    childType: var_core_value_sig2B86.UNIVER_SHEET,
    entry: b.SlidesPageListBlock,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    childType: var_core_value_sig2B86.UNIVER_BASE,
    entry: b.SlidesPageListBlock,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    childType: var_core_value_sig2B86.UNIVER_DOC,
    entry: b.SlidesPageListBlock,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }],
  Dr = [{
    hostType: var_core_value_sig2B86.UNIVER_BASE,
    childType: var_core_value_sig2B86.UNIVER_BOARD,
    entry: b.BasesTableListBlock,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_BASE,
    childType: var_core_value_sig2B86.UNIVER_SHEET,
    entry: b.BasesTableListBlock,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_BASE,
    childType: var_core_value_sig2B86.UNIVER_DOC,
    entry: b.BasesTableListBlock,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }, {
    hostType: var_core_value_sig2B86.UNIVER_BASE,
    childType: var_core_value_sig2B86.UNIVER_SLIDE,
    entry: b.BasesTableListBlock,
    mode: "tab",
    layout: "tab-peer",
    menuBehavior: "host-override",
    nestedEmbed: false
  }],
  Or = [var_core_value_sig2B86.UNIVER_SHEET, var_core_value_sig2B86.UNIVER_DOC, var_core_value_sig2B86.UNIVER_SLIDE, var_core_value_sig2B86.UNIVER_BASE].map(var_core_value_sig1DF5 => ({
    hostType: var_core_value_sig2B86.UNIVER_BOARD,
    childType: var_core_value_sig1DF5,
    entry: b.BoardsFloatingObject,
    mode: "float",
    renderHost: "boards-object-dom",
    layout: var_core_value_sig1DF5 === var_core_value_sig2B86.UNIVER_DOC ? "doc-width-scale" : var_core_value_sig1DF5 === var_core_value_sig2B86.UNIVER_SLIDE ? "aspect-fit" : "scroll-contained",
    menuBehavior: "floating",
    nestedEmbed: false
  }));
function kr() {
  return [...wr, ...Tr, ...Er, ...Dr, ...Or];
}
function Ar(var_core_value_sig90A3, var_core_value_sig28BE) {
  return {
    hostType: var_core_value_sig2B86.UNIVER_BASE,
    entry: b.BasesTableListBlock,
    createAnchorPlan: var_core_value_sig3FC7 => Hr(Mr(var_core_value_sig3FC7, var_core_value_sig28BE), "EMBED_BASES_TABLE_LIST_ANCHOR_UNAVAILABLE"),
    restoreAnchor: var_core_value_sig1E1B => Ur(Fr(var_core_value_sig1E1B, var_core_value_sig28BE), "EMBED_BASES_TABLE_LIST_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_core_value_sig3B10 => {
      let var_core_value_sig89E6 = (var_core_value_sig90A3 == null ? undefined : var_core_value_sig90A3.getAnchor(var_core_value_sig3B10.hostUnitId, var_core_value_sig3B10.hostAnchorId)) ?? Pr(var_core_value_sig3B10);
      return Nr(var_core_value_sig3B10, var_core_value_sig89E6, var_core_value_sig28BE) ?? {
        redoMutations: [{
          id: "embed.mutation.remove-host-anchor-record",
          params: {
            hostUnitId: var_core_value_sig3B10.hostUnitId,
            hostAnchorId: var_core_value_sig3B10.hostAnchorId
          }
        }],
        undoMutations: [{
          id: "embed.mutation.set-host-anchor-record",
          params: {
            record: {
              ...var_core_value_sig89E6,
              lifecycle: "active"
            }
          }
        }]
      };
    },
    readContext: var_core_value_sig4743 => jr(var_core_value_sig4743, var_core_value_sig28BE)
  };
}
function jr(var_core_value_sig0224, var_core_value_sig854B) {
  let var_core_value_sig1FF6 = Ir(var_core_value_sig854B, var_core_value_sig0224.hostUnitId),
    var_core_value_sig4B27 = var_core_value_sig1FF6 == null ? undefined : var_core_value_sig1FF6.tables[var_core_value_sig0224.hostAnchorId],
    var_core_value_sig3A41 = (var_core_value_sig1FF6 == null ? undefined : var_core_value_sig1FF6.tableOrder["indexOf"](var_core_value_sig0224.hostAnchorId)) ?? -1;
  return !var_core_value_sig4B27 || var_core_value_sig3A41 < 0 ? {
    resolved: false,
    entry: b.BasesTableListBlock
  } : {
    resolved: true,
    entry: b.BasesTableListBlock,
    tableId: var_core_value_sig0224.hostAnchorId,
    index: var_core_value_sig3A41,
    name: var_core_value_sig4B27.name
  };
}
function Mr(var_core_value_sig269A, var_core_value_sigBF53) {
  var var_core_value_sigD9BB, var_core_value_sigF549;
  let var_core_value_sigC125 = Ir(var_core_value_sigBF53, var_core_value_sig269A.hostUnitId);
  if (!var_core_value_sigC125) return;
  C({
    hostUnitId: var_core_value_sig269A.hostUnitId,
    entry: var_core_value_sig269A.entry,
    hostContext: var_core_value_sig269A.hostContext,
    maxIndex: var_core_value_sigC125.tableOrder["length"]
  });
  let var_core_value_sigB63D = Pr(var_core_value_sig269A),
    var_core_value_sig8255 = Rr(var_core_value_sigB63D.hostContext, "tableName") ?? var_core_value_sig269A.embedId,
    var_core_value_sigBFC7 = var_core_value_sigC163({
      embedId: var_core_value_sigB63D.embedId,
      hostAnchorId: var_core_value_sigB63D.hostAnchorId,
      name: var_core_value_sig8255,
      childUnitId: (var_core_value_sigD9BB = var_core_value_sig269A.descriptor) == null ? undefined : var_core_value_sigD9BB.childUnitId,
      childType: (var_core_value_sigF549 = var_core_value_sig269A.descriptor) == null ? undefined : var_core_value_sigF549.childType
    }),
    var_core_value_sig933F = Br(Lr(var_core_value_sigB63D.hostContext, "tableIndex") ?? var_core_value_sigC125.tableOrder["length"], var_core_value_sigC125.tableOrder["length"]),
    var_core_value_sig29DE = var_core_value_sigF5F3({
      unitId: var_core_value_sigB63D.hostUnitId,
      snapshot: var_core_value_sigC125,
      table: var_core_value_sigBFC7,
      index: var_core_value_sig933F
    });
  return var_core_value_sigB63D.hostContext = {
    ...var_core_value_sigB63D.hostContext,
    tableIndex: var_core_value_sig933F,
    tableName: var_core_value_sig8255
  }, {
    hostAnchorId: var_core_value_sigB63D.hostAnchorId,
    redoMutations: [var_core_value_sig29DE, {
      id: v,
      params: {
        record: var_core_value_sigB63D
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sigB63D.hostUnitId,
        hostAnchorId: var_core_value_sigB63D.hostAnchorId
      }
    }, Vr(var_core_value_sigC125, var_core_value_sig29DE)]
  };
}
function Nr(var_core_value_sig4AFB, var_core_value_sigC7EA, var_core_value_sigDAB9) {
  let var_core_value_sig9CF7 = Ir(var_core_value_sigDAB9, var_core_value_sig4AFB.hostUnitId),
    var_core_value_sigCCE5 = var_core_value_sig9CF7 == null ? undefined : var_core_value_sig9CF7.tables[var_core_value_sig4AFB.hostAnchorId];
  if (!var_core_value_sig9CF7 || !var_core_value_sigCCE5) return;
  let var_core_value_sig5933 = var_core_value_sig9CF7.tableOrder["indexOf"](var_core_value_sig4AFB.hostAnchorId),
    var_core_value_sig884B = var_core_value_sig5E69({
      unitId: var_core_value_sig4AFB.hostUnitId,
      snapshot: var_core_value_sig9CF7,
      tableId: var_core_value_sig4AFB.hostAnchorId
    });
  if (var_core_value_sig884B) return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sig4AFB.hostUnitId,
        hostAnchorId: var_core_value_sig4AFB.hostAnchorId
      }
    }, var_core_value_sig884B],
    undoMutations: [Vr(var_core_value_sig9CF7, var_core_value_sig884B), {
      id: v,
      params: {
        record: {
          ...var_core_value_sigC7EA,
          lifecycle: "active",
          hostContext: {
            ...var_core_value_sigC7EA.hostContext,
            tableIndex: var_core_value_sig5933
          }
        }
      }
    }]
  };
}
function Pr(var_core_value_sig4E30) {
  return {
    hostAnchorId: var_core_value_sig4E30.requestedAnchorId ?? "bases-table-list:" + var_core_value_sig4E30.embedId,
    embedId: var_core_value_sig4E30.embedId,
    hostUnitId: var_core_value_sig4E30.hostUnitId,
    hostType: var_core_value_sig4E30.hostType,
    entry: var_core_value_sig4E30.entry,
    kind: "bases-table-list-block",
    hostContext: var_core_value_sig4E30.hostContext,
    lifecycle: "active"
  };
}
function Fr(var_core_value_sig9730, var_core_value_sig8E4A) {
  let var_core_value_sig300B = Ir(var_core_value_sig8E4A, var_core_value_sig9730.hostUnitId);
  if (!var_core_value_sig300B) return;
  let var_core_value_sig8457 = Pr({
      ...var_core_value_sig9730,
      requestedAnchorId: var_core_value_sig9730.hostAnchorId
    }),
    var_core_value_sigB30D = Rr(var_core_value_sig8457.hostContext, "tableName") ?? var_core_value_sig9730.embedId,
    var_core_value_sigDB33 = Br(Lr(var_core_value_sig8457.hostContext, "tableIndex") ?? var_core_value_sig300B.tableOrder["length"], var_core_value_sig300B.tableOrder["length"]);
  if (!var_core_value_sig300B.tables[var_core_value_sig8457.hostAnchorId]) {
    var var_core_value_sig6C8C, var_core_value_sig7A5E;
    var_core_value_sig300B.tables[var_core_value_sig8457.hostAnchorId] = var_core_value_sigC163({
      embedId: var_core_value_sig8457.embedId,
      hostAnchorId: var_core_value_sig8457.hostAnchorId,
      name: var_core_value_sigB30D,
      childUnitId: (var_core_value_sig6C8C = var_core_value_sig9730.descriptor) == null ? undefined : var_core_value_sig6C8C.childUnitId,
      childType: (var_core_value_sig7A5E = var_core_value_sig9730.descriptor) == null ? undefined : var_core_value_sig7A5E.childType
    }), var_core_value_sig300B.tableOrder = zr(var_core_value_sig300B.tableOrder, var_core_value_sig8457.hostAnchorId, var_core_value_sigDB33);
  }
  return {
    ...var_core_value_sig8457,
    hostContext: {
      ...var_core_value_sig8457.hostContext,
      tableIndex: var_core_value_sigDB33,
      tableName: var_core_value_sigB30D
    }
  };
}
function Ir(var_core_value_sig838E, var_core_value_sig9A5B) {
  var var_core_value_sigC860;
  return var_core_value_sig838E == null || (var_core_value_sigC860 = var_core_value_sig838E.getUnit(var_core_value_sig9A5B, var_core_value_sig2B86.UNIVER_BASE)) == null ? undefined : var_core_value_sigC860.getSnapshot();
}
function Lr(var_core_value_sigE64C, var_core_value_sigF39B) {
  return typeof (var_core_value_sigE64C == null ? undefined : var_core_value_sigE64C[var_core_value_sigF39B]) == "number" ? var_core_value_sigE64C[var_core_value_sigF39B] : undefined;
}
function Rr(var_core_value_sig9B88, var_core_value_sig992A) {
  return typeof (var_core_value_sig9B88 == null ? undefined : var_core_value_sig9B88[var_core_value_sig992A]) == "string" ? var_core_value_sig9B88[var_core_value_sig992A] : undefined;
}
function zr(var_core_value_sig6281, var_core_value_sig9B01, var_core_value_sigA724) {
  let var_core_value_sig385E = var_core_value_sig6281.filter(var_core_value_sigEB6A => var_core_value_sigEB6A !== var_core_value_sig9B01);
  return var_core_value_sig385E.splice(Math.max(0, Math.min(var_core_value_sigA724, var_core_value_sig385E.length)), 0, var_core_value_sig9B01), var_core_value_sig385E;
}
function Br(var_core_value_sig10D3, var_core_value_sig41F2) {
  return Math.max(0, Math.min(var_core_value_sig10D3, var_core_value_sig41F2));
}
function Vr(var_core_value_sig32DD, var_core_value_sig7A88) {
  return {
    id: var_core_value_sig7A88.id,
    params: {
      ...var_core_value_sig7A88.params,
      op: new var_core_value_sig3603().invertOp(var_core_value_sig32DD, var_core_value_sig7A88.params["op"])
    }
  };
}
function Hr(var_core_value_sig6CFC, var_core_value_sig3EC0) {
  if (!var_core_value_sig6CFC) throw Error(var_core_value_sig3EC0);
  return var_core_value_sig6CFC;
}
function Ur(var_core_value_sigEA69, var_core_value_sigF42A) {
  if (!var_core_value_sigEA69) throw Error(var_core_value_sigF42A);
  return var_core_value_sigEA69;
}
function Wr(var_core_value_sig898E, var_core_value_sigC481, var_core_value_sig27B7) {
  return {
    hostType: var_core_value_sig2B86.UNIVER_BOARD,
    entry: b.BoardsFloatingObject,
    createAnchorPlan: var_core_value_sig3D46 => ai(Kr(var_core_value_sig3D46), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"),
    restoreAnchor: var_core_value_sigCC93 => ai(Xr(var_core_value_sigCC93, var_core_value_sigC481, Gr(var_core_value_sig27B7)), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_core_value_sig5964 => {
      let var_core_value_sig808B = (var_core_value_sig898E == null ? undefined : var_core_value_sig898E.getAnchor(var_core_value_sig5964.hostUnitId, var_core_value_sig5964.hostAnchorId)) ?? ti({
        ...var_core_value_sig5964,
        requestedAnchorId: var_core_value_sig5964.hostAnchorId
      });
      return qr(var_core_value_sig5964, var_core_value_sig808B, var_core_value_sigC481, Gr(var_core_value_sig27B7)) ?? ri(var_core_value_sig5964, var_core_value_sig808B);
    },
    readContext: var_core_value_sig2A26 => Jr(var_core_value_sig2A26, var_core_value_sig898E, var_core_value_sigC481, Gr(var_core_value_sig27B7)),
    createBoundsUpdatePlan: var_core_value_sig1179 => Yr(var_core_value_sig1179, var_core_value_sig898E, var_core_value_sigC481, ai(Gr(var_core_value_sig27B7), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"))
  };
}
function Gr(var_core_value_sig2DAD) {
  return typeof var_core_value_sig2DAD == "function" ? var_core_value_sig2DAD() : var_core_value_sig2DAD;
}
function Kr(var_core_value_sig00DE) {
  C({
    hostUnitId: var_core_value_sig00DE.hostUnitId,
    entry: var_core_value_sig00DE.entry,
    hostContext: var_core_value_sig00DE.hostContext
  });
  let var_core_value_sigEF7C = ti(var_core_value_sig00DE),
    var_core_value_sig07E7 = ii(var_core_value_sigEF7C.hostContext, "subUnitId");
  if (!var_core_value_sig07E7) return;
  let var_core_value_sig6005 = ni(var_core_value_sig00DE, var_core_value_sigEF7C);
  return {
    hostAnchorId: var_core_value_sigEF7C.hostAnchorId,
    redoMutations: [{
      id: var_core_value_sigDD22.id,
      params: {
        unitId: var_core_value_sigEF7C.hostUnitId,
        subUnitId: var_core_value_sig07E7,
        element: var_core_value_sig6005,
        allowEmbedAnchor: true
      }
    }, {
      id: v,
      params: {
        record: var_core_value_sigEF7C
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sigEF7C.hostUnitId,
        hostAnchorId: var_core_value_sigEF7C.hostAnchorId
      }
    }, {
      id: var_core_value_sig7A4B.id,
      params: {
        unitId: var_core_value_sigEF7C.hostUnitId,
        subUnitId: var_core_value_sig07E7,
        elementId: var_core_value_sigEF7C.hostAnchorId
      }
    }]
  };
}
function qr(var_core_value_sig25A4, var_core_value_sigB591, var_core_value_sigB272, var_core_value_sig6F52) {
  var var_core_value_sig09C4;
  let var_core_value_sig8E3E = Zr(var_core_value_sig25A4.hostUnitId, var_core_value_sig25A4.hostAnchorId, ii(var_core_value_sigB591.hostContext, "subUnitId"), var_core_value_sigB272, var_core_value_sig6F52);
  if (!var_core_value_sig8E3E) return;
  let var_core_value_sigC3D3 = var_core_value_sig6F52 == null || (var_core_value_sig09C4 = var_core_value_sig6F52.getElementById(var_core_value_sigB591.hostUnitId, var_core_value_sig8E3E, var_core_value_sigB591.hostAnchorId)) == null ? undefined : var_core_value_sig09C4.element;
  if (!var_core_value_sigC3D3 || !var_core_value_sig300D(var_core_value_sigC3D3)) return;
  let var_core_value_sig1451 = var_core_value_sig6F52.getElementData(var_core_value_sigB591.hostUnitId, var_core_value_sig8E3E),
    var_core_value_sigAD57 = var_core_value_sig6F52.getElementOrder(var_core_value_sigB591.hostUnitId, var_core_value_sig8E3E),
    var_core_value_sig58A8 = new Set(var_core_value_sigC8AC(var_core_value_sig1451, var_core_value_sigAD57, [var_core_value_sigC3D3.id])),
    var_core_value_sigEC1A = var_core_value_sigAD57.flatMap((var_core_value_sigEA92, var_core_value_sig8FD9) => var_core_value_sig58A8.has(var_core_value_sigEA92) ? [{
      id: var_core_value_sigDD22.id,
      params: {
        unitId: var_core_value_sigB591.hostUnitId,
        subUnitId: var_core_value_sig8E3E,
        element: var_core_value_sigFAFE.deepClone(var_core_value_sig1451[var_core_value_sigEA92].element),
        insertIndex: var_core_value_sig8FD9,
        allowEmbedAnchor: true
      }
    }] : []);
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sigB591.hostUnitId,
        hostAnchorId: var_core_value_sigB591.hostAnchorId
      }
    }, {
      id: var_core_value_sig7A4B.id,
      params: {
        unitId: var_core_value_sigB591.hostUnitId,
        subUnitId: var_core_value_sig8E3E,
        elementId: var_core_value_sigB591.hostAnchorId
      }
    }],
    undoMutations: [...var_core_value_sigEC1A, {
      id: v,
      params: {
        record: {
          ...var_core_value_sigB591,
          hostContext: {
            ...var_core_value_sigB591.hostContext,
            subUnitId: var_core_value_sig8E3E
          },
          lifecycle: "active"
        }
      }
    }]
  };
}
function Jr(var_core_value_sigBDED, var_core_value_sig4BFF, var_core_value_sig40E7, var_core_value_sigEDBA) {
  let var_core_value_sigE863 = var_core_value_sig4BFF == null ? undefined : var_core_value_sig4BFF.getAnchor(var_core_value_sigBDED.hostUnitId, var_core_value_sigBDED.hostAnchorId),
    var_core_value_sig04B4 = Qr(var_core_value_sigBDED.hostUnitId, var_core_value_sigBDED.hostAnchorId, ii(var_core_value_sigE863 == null ? undefined : var_core_value_sigE863.hostContext, "subUnitId"), var_core_value_sig40E7, var_core_value_sigEDBA),
    var_core_value_sig1C07 = var_core_value_sig04B4 ? $r(var_core_value_sig04B4.element) : undefined;
  return !var_core_value_sig04B4 || !var_core_value_sig1C07 ? {
    resolved: false,
    entry: b.BoardsFloatingObject
  } : {
    resolved: true,
    entry: b.BoardsFloatingObject,
    subUnitId: var_core_value_sig04B4.subUnitId,
    bounds: var_core_value_sig1C07
  };
}
function Yr(var_core_value_sig93D6, var_core_value_sigDD05, var_core_value_sig3932, var_core_value_sig48B2) {
  ei(var_core_value_sig93D6.bounds);
  let var_core_value_sig57DF = var_core_value_sigDD05 == null ? undefined : var_core_value_sigDD05.getAnchor(var_core_value_sig93D6.hostUnitId, var_core_value_sig93D6.hostAnchorId),
    var_core_value_sigC985 = Qr(var_core_value_sig93D6.hostUnitId, var_core_value_sig93D6.hostAnchorId, ii(var_core_value_sig57DF == null ? undefined : var_core_value_sig57DF.hostContext, "subUnitId"), var_core_value_sig3932, var_core_value_sig48B2);
  if (!var_core_value_sigC985) throw Error("EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE");
  let var_core_value_sig8DA6 = {
      ...var_core_value_sigC985.element,
      transform: {
        ...var_core_value_sigC985.element["transform"],
        ...var_core_value_sig93D6.bounds
      }
    },
    var_core_value_sigCA69 = {
      ...(var_core_value_sig57DF ?? ti({
        ...var_core_value_sig93D6,
        requestedAnchorId: var_core_value_sig93D6.hostAnchorId,
        hostContext: {
          subUnitId: var_core_value_sigC985.subUnitId
        }
      })),
      hostContext: {
        ...(var_core_value_sig57DF == null ? undefined : var_core_value_sig57DF.hostContext),
        subUnitId: var_core_value_sigC985.subUnitId,
        ...var_core_value_sig93D6.bounds
      },
      lifecycle: "active"
    };
  return {
    redoMutations: [{
      id: var_core_value_sigE50A.id,
      params: {
        unitId: var_core_value_sig93D6.hostUnitId,
        subUnitId: var_core_value_sigC985.subUnitId,
        elementId: var_core_value_sig93D6.hostAnchorId,
        element: var_core_value_sig8DA6
      }
    }, {
      id: v,
      params: {
        record: var_core_value_sigCA69
      }
    }],
    undoMutations: [var_core_value_sig57DF ? {
      id: v,
      params: {
        record: var_core_value_sig57DF
      }
    } : {
      id: y,
      params: {
        hostUnitId: var_core_value_sig93D6.hostUnitId,
        hostAnchorId: var_core_value_sig93D6.hostAnchorId
      }
    }, {
      id: var_core_value_sigE50A.id,
      params: {
        unitId: var_core_value_sig93D6.hostUnitId,
        subUnitId: var_core_value_sigC985.subUnitId,
        elementId: var_core_value_sig93D6.hostAnchorId,
        element: var_core_value_sigC985.element
      }
    }]
  };
}
function Xr(var_core_value_sigB77C, var_core_value_sig9AFF, var_core_value_sig3545) {
  let var_core_value_sig5EE4 = Zr(var_core_value_sigB77C.hostUnitId, var_core_value_sigB77C.hostAnchorId, ii(var_core_value_sigB77C.hostContext, "subUnitId"), var_core_value_sig9AFF, var_core_value_sig3545);
  if (var_core_value_sig5EE4) return ti({
    ...var_core_value_sigB77C,
    requestedAnchorId: var_core_value_sigB77C.hostAnchorId,
    hostContext: {
      ...var_core_value_sigB77C.hostContext,
      subUnitId: var_core_value_sig5EE4
    }
  });
}
function Zr(var_core_value_sig7EAB, var_core_value_sig56B9, var_core_value_sig90CF, var_core_value_sigA386, var_core_value_sigCD6E) {
  if (!var_core_value_sigCD6E) return;
  let var_core_value_sigFD9D = var_core_value_sig1AE5 => {
    var var_core_value_sig7100;
    return var_core_value_sig300D((var_core_value_sig7100 = var_core_value_sigCD6E.getElementById(var_core_value_sig7EAB, var_core_value_sig1AE5, var_core_value_sig56B9)) == null ? undefined : var_core_value_sig7100.element);
  };
  if (var_core_value_sig90CF && var_core_value_sigFD9D(var_core_value_sig90CF)) return var_core_value_sig90CF;
  let var_core_value_sigA2A4 = var_core_value_sigA386 == null ? undefined : var_core_value_sigA386.getUnit(var_core_value_sig7EAB, var_core_value_sig2B86.UNIVER_BOARD);
  return var_core_value_sigA2A4 == null ? undefined : var_core_value_sigA2A4.getSnapshot().pageOrder["find"](var_core_value_sigFD9D);
}
function Qr(var_core_value_sigA1AC, var_core_value_sig6180, var_core_value_sigB93D, var_core_value_sigB17C, var_core_value_sig69B6) {
  if (!var_core_value_sig69B6) return;
  let var_core_value_sig708D = var_core_value_sigA19A => {
    var var_core_value_sigD3F5;
    return (var_core_value_sigD3F5 = var_core_value_sig69B6.getElementById(var_core_value_sigA1AC, var_core_value_sigA19A, var_core_value_sig6180)) == null ? undefined : var_core_value_sigD3F5.element;
  };
  if (var_core_value_sigB93D) {
    let var_core_value_sig3082 = var_core_value_sig708D(var_core_value_sigB93D);
    if (var_core_value_sig3082 && var_core_value_sig300D(var_core_value_sig3082)) return {
      subUnitId: var_core_value_sigB93D,
      element: var_core_value_sig3082
    };
  }
  let var_core_value_sig1ED2 = var_core_value_sigB17C == null ? undefined : var_core_value_sigB17C.getUnit(var_core_value_sigA1AC, var_core_value_sig2B86.UNIVER_BOARD);
  for (let var_core_value_sigF5D1 of (var_core_value_sig1ED2 == null ? undefined : var_core_value_sig1ED2.getSnapshot().pageOrder) ?? []) {
    let var_core_value_sig32F8 = var_core_value_sig708D(var_core_value_sigF5D1);
    if (var_core_value_sig32F8 && var_core_value_sig300D(var_core_value_sig32F8)) return {
      subUnitId: var_core_value_sigF5D1,
      element: var_core_value_sig32F8
    };
  }
}
function $r(var_core_value_sig94C1) {
  let {
    left: var_core_value_sigABAC,
    top: var_core_value_sigFAE6,
    width: var_core_value_sig06AC,
    height: var_core_value_sig57E2
  } = var_core_value_sig94C1.transform;
  if (var_core_value_sigABAC == null || var_core_value_sigFAE6 == null || var_core_value_sig06AC == null || var_core_value_sig57E2 == null) return;
  let var_core_value_sig01FC = {
    left: var_core_value_sigABAC,
    top: var_core_value_sigFAE6,
    width: var_core_value_sig06AC,
    height: var_core_value_sig57E2
  };
  try {
    return ei(var_core_value_sig01FC), var_core_value_sig01FC;
  } catch {
    return;
  }
}
function ei(var_core_value_sig10FC) {
  if (![var_core_value_sig10FC.left, var_core_value_sig10FC.top, var_core_value_sig10FC.width, var_core_value_sig10FC.height].every(Number.isFinite) || var_core_value_sig10FC.width <= 0 || var_core_value_sig10FC.height <= 0) throw Error("EMBED_BOUNDS_INVALID");
}
function ti(var_core_value_sig5374) {
  return {
    hostAnchorId: var_core_value_sig5374.requestedAnchorId ?? var_core_value_sig5374.embedId + "-anchor",
    embedId: var_core_value_sig5374.embedId,
    hostUnitId: var_core_value_sig5374.hostUnitId,
    hostType: var_core_value_sig2B86.UNIVER_BOARD,
    entry: b.BoardsFloatingObject,
    kind: b.BoardsFloatingObject,
    hostContext: {
      ...var_core_value_sig5374.hostContext,
      left: X(var_core_value_sig5374.hostContext, "left") ?? 80,
      top: X(var_core_value_sig5374.hostContext, "top") ?? 80,
      width: X(var_core_value_sig5374.hostContext, "width") ?? 560,
      height: X(var_core_value_sig5374.hostContext, "height") ?? 360
    },
    lifecycle: "active"
  };
}
function ni(var_core_value_sigB66D, var_core_value_sigD0F0) {
  var var_core_value_sig8E31, var_core_value_sig8339;
  return var_core_value_sig8E63({
    embedId: var_core_value_sigD0F0.embedId,
    hostAnchorId: var_core_value_sigD0F0.hostAnchorId,
    childUnitId: (var_core_value_sig8E31 = var_core_value_sigB66D.descriptor) == null ? undefined : var_core_value_sig8E31.childUnitId,
    childType: (var_core_value_sig8339 = var_core_value_sigB66D.descriptor) == null ? undefined : var_core_value_sig8339.childType,
    left: X(var_core_value_sigD0F0.hostContext, "left"),
    top: X(var_core_value_sigD0F0.hostContext, "top"),
    width: X(var_core_value_sigD0F0.hostContext, "width"),
    height: X(var_core_value_sigD0F0.hostContext, "height")
  });
}
function ri(var_core_value_sigA01E, var_core_value_sigA41E) {
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sigA01E.hostUnitId,
        hostAnchorId: var_core_value_sigA01E.hostAnchorId
      }
    }],
    undoMutations: [{
      id: v,
      params: {
        record: {
          ...var_core_value_sigA41E,
          lifecycle: "active"
        }
      }
    }]
  };
}
function X(var_core_value_sig939C, var_core_value_sigA49E) {
  return typeof (var_core_value_sig939C == null ? undefined : var_core_value_sig939C[var_core_value_sigA49E]) == "number" ? var_core_value_sig939C[var_core_value_sigA49E] : undefined;
}
function ii(var_core_value_sig6DEB, var_core_value_sig2F0D) {
  return typeof (var_core_value_sig6DEB == null ? undefined : var_core_value_sig6DEB[var_core_value_sig2F0D]) == "string" ? var_core_value_sig6DEB[var_core_value_sig2F0D] : undefined;
}
function ai(var_core_value_sig5141, var_core_value_sigA9E0) {
  if (!var_core_value_sig5141) throw Error(var_core_value_sigA9E0);
  return var_core_value_sig5141;
}
function oi(var_core_value_sig751D, var_core_value_sig2E9A) {
  return {
    hostType: var_core_value_sig2B86.UNIVER_DOC,
    entry: b.DocsCustomBlock,
    createAnchorPlan: var_core_value_sig8775 => yi(ci(var_core_value_sig8775, var_core_value_sig2E9A), "EMBED_DOCS_CUSTOM_BLOCK_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_core_value_sig481B => {
      let var_core_value_sig13D7 = (var_core_value_sig751D == null ? undefined : var_core_value_sig751D.getAnchor(var_core_value_sig481B.hostUnitId, var_core_value_sig481B.hostAnchorId)) ?? ui(var_core_value_sig481B);
      return li(var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sig2E9A) || {
        redoMutations: [{
          id: y,
          params: {
            hostUnitId: var_core_value_sig481B.hostUnitId,
            hostAnchorId: var_core_value_sig481B.hostAnchorId
          }
        }],
        undoMutations: [{
          id: v,
          params: {
            record: {
              ...var_core_value_sig13D7,
              lifecycle: "active"
            }
          }
        }]
      };
    },
    readContext: var_core_value_sig90C0 => si(var_core_value_sig90C0, var_core_value_sig2E9A)
  };
}
function si(var_core_value_sigE105, var_core_value_sig0BD6) {
  var var_core_value_sig3070;
  let var_core_value_sigC66D = ((var_core_value_sig3070 = pi(var_core_value_sig0BD6, var_core_value_sigE105.hostUnitId)) == null ? undefined : var_core_value_sig3070.customBlocks) ?? [],
    var_core_value_sig8EC5 = var_core_value_sigC66D.findIndex(var_core_value_sigF1B2 => var_core_value_sigF1B2.blockId === var_core_value_sigE105.hostAnchorId);
  return var_core_value_sig8EC5 < 0 ? {
    resolved: false,
    entry: b.DocsCustomBlock
  } : {
    resolved: true,
    entry: b.DocsCustomBlock,
    blockId: var_core_value_sigE105.hostAnchorId,
    startIndex: var_core_value_sigC66D[var_core_value_sig8EC5].startIndex,
    index: var_core_value_sig8EC5
  };
}
function ci(var_core_value_sig1056, var_core_value_sig6EE5) {
  var var_core_value_sig9DD9, var_core_value_sig09AC, var_core_value_sig1613;
  if (!var_core_value_sig6EE5) return;
  let var_core_value_sigADC6 = ui(var_core_value_sig1056),
    var_core_value_sig4620 = di(var_core_value_sig1056, var_core_value_sig6EE5);
  if (var_core_value_sig4620 == null) return;
  let var_core_value_sig07FB = ((var_core_value_sig9DD9 = mi(var_core_value_sig6EE5, var_core_value_sig1056.hostUnitId)) == null ? undefined : var_core_value_sig9DD9.length) ?? 0;
  return var_core_value_sigADC6.hostContext = {
    ...var_core_value_sigADC6.hostContext,
    startIndex: var_core_value_sig4620,
    drawingOrderIndex: var_core_value_sig07FB
  }, {
    hostAnchorId: var_core_value_sigADC6.hostAnchorId,
    redoMutations: [var_core_value_sigF569({
      unitId: var_core_value_sigADC6.hostUnitId,
      blockId: var_core_value_sigADC6.hostAnchorId,
      startIndex: var_core_value_sig4620,
      drawingOrderIndex: var_core_value_sig07FB,
      embedId: var_core_value_sigADC6.embedId,
      childUnitId: (var_core_value_sig09AC = var_core_value_sig1056.descriptor) == null ? undefined : var_core_value_sig09AC.childUnitId,
      childType: (var_core_value_sig1613 = var_core_value_sig1056.descriptor) == null ? undefined : var_core_value_sig1613.childType,
      componentKey: _i(var_core_value_sigADC6.hostContext, "componentKey") ?? undefined,
      interactionMode: vi(var_core_value_sigADC6.hostContext)
    }), {
      id: v,
      params: {
        record: var_core_value_sigADC6
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sigADC6.hostUnitId,
        hostAnchorId: var_core_value_sigADC6.hostAnchorId
      }
    }, var_core_value_sig2A9F({
      unitId: var_core_value_sigADC6.hostUnitId,
      blockId: var_core_value_sigADC6.hostAnchorId,
      startIndex: var_core_value_sig4620,
      drawingOrderIndex: var_core_value_sig07FB
    })]
  };
}
function li(var_core_value_sig617E, var_core_value_sigC85E, var_core_value_sig8293) {
  var var_core_value_sig050D, var_core_value_sig37AE;
  if (!var_core_value_sig8293) return;
  let var_core_value_sig5B51 = fi(var_core_value_sig8293, var_core_value_sig617E.hostUnitId, var_core_value_sig617E.hostAnchorId) ?? gi(var_core_value_sigC85E.hostContext, "startIndex"),
    var_core_value_sig64FF = hi(var_core_value_sig8293, var_core_value_sig617E.hostUnitId, var_core_value_sig617E.hostAnchorId) ?? gi(var_core_value_sigC85E.hostContext, "drawingOrderIndex") ?? 0;
  if (var_core_value_sig5B51 != null) return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sig617E.hostUnitId,
        hostAnchorId: var_core_value_sig617E.hostAnchorId
      }
    }, var_core_value_sig2A9F({
      unitId: var_core_value_sig617E.hostUnitId,
      blockId: var_core_value_sig617E.hostAnchorId,
      startIndex: var_core_value_sig5B51,
      drawingOrderIndex: var_core_value_sig64FF
    })],
    undoMutations: [var_core_value_sigF569({
      unitId: var_core_value_sig617E.hostUnitId,
      blockId: var_core_value_sig617E.hostAnchorId,
      startIndex: var_core_value_sig5B51,
      drawingOrderIndex: var_core_value_sig64FF,
      embedId: var_core_value_sigC85E.embedId,
      childUnitId: (var_core_value_sig050D = var_core_value_sig617E.descriptor) == null ? undefined : var_core_value_sig050D.childUnitId,
      childType: (var_core_value_sig37AE = var_core_value_sig617E.descriptor) == null ? undefined : var_core_value_sig37AE.childType,
      componentKey: _i(var_core_value_sigC85E.hostContext, "componentKey") ?? undefined,
      interactionMode: vi(var_core_value_sigC85E.hostContext)
    }), {
      id: v,
      params: {
        record: {
          ...var_core_value_sigC85E,
          lifecycle: "active",
          hostContext: {
            ...var_core_value_sigC85E.hostContext,
            startIndex: var_core_value_sig5B51,
            drawingOrderIndex: var_core_value_sig64FF
          }
        }
      }
    }]
  };
}
function ui(var_core_value_sig86F4) {
  return {
    hostAnchorId: var_core_value_sig86F4.requestedAnchorId ?? "docs-custom-block:" + var_core_value_sig86F4.embedId,
    embedId: var_core_value_sig86F4.embedId,
    hostUnitId: var_core_value_sig86F4.hostUnitId,
    hostType: var_core_value_sig86F4.hostType,
    entry: var_core_value_sig86F4.entry,
    kind: "docs-custom-block",
    hostContext: var_core_value_sig86F4.hostContext,
    lifecycle: "active"
  };
}
function di(var_core_value_sig9E0F, var_core_value_sig3A42) {
  let var_core_value_sig8802 = pi(var_core_value_sig3A42, var_core_value_sig9E0F.hostUnitId);
  if (!(var_core_value_sig8802 != null && var_core_value_sig8802.dataStream)) return;
  let var_core_value_sig95D5 = Math.max(0, var_core_value_sig8802.dataStream["length"] - 2);
  return lt({
    hostUnitId: var_core_value_sig9E0F.hostUnitId,
    entry: var_core_value_sig9E0F.entry,
    hostContext: var_core_value_sig9E0F.hostContext,
    maxStartIndex: var_core_value_sig95D5
  }), gi(var_core_value_sig9E0F.hostContext, "startIndex") ?? var_core_value_sig95D5;
}
function fi(var_core_value_sigE027, var_core_value_sigE537, var_core_value_sig5D84) {
  var var_core_value_sigD120;
  return (var_core_value_sigD120 = pi(var_core_value_sigE027, var_core_value_sigE537)) == null || (var_core_value_sigD120 = var_core_value_sigD120.customBlocks) == null || (var_core_value_sigD120 = var_core_value_sigD120.find(var_core_value_sigC2BB => var_core_value_sigC2BB.blockId === var_core_value_sig5D84)) == null ? undefined : var_core_value_sigD120.startIndex;
}
function pi(var_core_value_sigAA05, var_core_value_sigC04C) {
  var var_core_value_sig2069;
  return var_core_value_sigAA05 == null || (var_core_value_sig2069 = var_core_value_sigAA05.getUnit(var_core_value_sigC04C, var_core_value_sig2B86.UNIVER_DOC)) == null ? undefined : var_core_value_sig2069.getBody();
}
function mi(var_core_value_sig5176, var_core_value_sig71A1) {
  var var_core_value_sig72AD, var_core_value_sig9ABE;
  return var_core_value_sig5176 == null || (var_core_value_sig72AD = var_core_value_sig5176.getUnit(var_core_value_sig71A1, var_core_value_sig2B86.UNIVER_DOC)) == null || (var_core_value_sig9ABE = var_core_value_sig72AD.getSnapshot) == null ? undefined : var_core_value_sig9ABE.call(var_core_value_sig72AD).drawingsOrder;
}
function hi(var_core_value_sig8EF0, var_core_value_sig234B, var_core_value_sig8169) {
  var var_core_value_sigC5FB;
  let var_core_value_sig5453 = (var_core_value_sigC5FB = mi(var_core_value_sig8EF0, var_core_value_sig234B)) == null ? undefined : var_core_value_sigC5FB.indexOf(var_core_value_sig8169);
  return var_core_value_sig5453 == null || var_core_value_sig5453 < 0 ? undefined : var_core_value_sig5453;
}
function gi(var_core_value_sig8725, var_core_value_sig513B) {
  return typeof (var_core_value_sig8725 == null ? undefined : var_core_value_sig8725[var_core_value_sig513B]) == "number" ? var_core_value_sig8725[var_core_value_sig513B] : undefined;
}
function _i(var_core_value_sig5501, var_core_value_sig7784) {
  return typeof (var_core_value_sig5501 == null ? undefined : var_core_value_sig5501[var_core_value_sig7784]) == "string" ? var_core_value_sig5501[var_core_value_sig7784] : undefined;
}
function vi(var_core_value_sigB706) {
  let var_core_value_sig5FD01 = _i(var_core_value_sigB706, "interactionMode");
  return var_core_value_sig5FD01 === "inline" || var_core_value_sig5FD01 === "block" ? var_core_value_sig5FD01 : undefined;
}
function yi(var_core_value_sig77E3, var_core_value_sigB071) {
  if (!var_core_value_sig77E3) throw Error(var_core_value_sigB071);
  return var_core_value_sig77E3;
}
const bi = "UNIVER_EMBED_SHEETS_TAB";
function xi(var_core_value_sig15FE) {
  return {
    id: var_core_value_sig15FE.hostAnchorId,
    name: var_core_value_sig15FE.name ?? var_core_value_sig15FE.embedId,
    tabColor: "",
    hidden: var_core_value_sig3E9C.FALSE,
    rowCount: 1,
    columnCount: 1,
    zoomRatio: 1,
    freeze: {
      startRow: -1,
      startColumn: -1,
      ySplit: 0,
      xSplit: 0
    },
    scrollTop: 0,
    scrollLeft: 0,
    defaultColumnWidth: 88,
    defaultRowHeight: 24,
    mergeData: [],
    cellData: {},
    rowData: {},
    columnData: {},
    showGridlines: var_core_value_sig3E9C.FALSE,
    rowHeader: {
      width: 46,
      hidden: var_core_value_sig3E9C.TRUE
    },
    columnHeader: {
      height: 20,
      hidden: var_core_value_sig3E9C.TRUE
    },
    rightToLeft: var_core_value_sig3E9C.FALSE,
    custom: {
      [bi]: Si(var_core_value_sig15FE)
    }
  };
}
function Si(var_core_value_sigCF47) {
  return {
    version: 1,
    embedId: var_core_value_sigCF47.embedId,
    hostAnchorId: var_core_value_sigCF47.hostAnchorId,
    childType: var_core_value_sigCF47.childType
  };
}
function Ci(var_core_value_sigB0F9) {
  var var_core_value_sigAF12;
  let var_core_value_sigC60C = (var_core_value_sigAF12 = var_core_value_sigB0F9.custom) == null ? undefined : var_core_value_sigAF12[bi];
  if (wi(var_core_value_sigC60C)) return var_core_value_sigC60C;
}
function wi(var_core_value_sig1C3C) {
  if (!var_core_value_sig1C3C || typeof var_core_value_sig1C3C != "object") return false;
  let var_core_value_sig71CF = var_core_value_sig1C3C;
  return var_core_value_sig71CF.version === 1 && typeof var_core_value_sig71CF.embedId == "string" && typeof var_core_value_sig71CF.hostAnchorId == "string" && (var_core_value_sig71CF.childType === undefined || typeof var_core_value_sig71CF.childType == "number");
}
function Ti(var_core_value_sigC341, var_core_value_sigBA47) {
  return {
    hostType: var_core_value_sig2B86.UNIVER_SHEET,
    entry: b.SheetsSheetTab,
    createAnchorPlan: var_core_value_sigD9DB => Di(var_core_value_sigD9DB, var_core_value_sigBA47),
    restoreAnchor: var_core_value_sigA363 => Pi(ki(var_core_value_sigA363, var_core_value_sigBA47), "EMBED_SHEETS_TAB_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_core_value_sigFBA5 => Oi(var_core_value_sigFBA5, (var_core_value_sigC341 == null ? undefined : var_core_value_sigC341.getAnchor(var_core_value_sigFBA5.hostUnitId, var_core_value_sigFBA5.hostAnchorId)) ?? Ai(var_core_value_sigFBA5)),
    activateAnchor: var_core_value_sigAC47 => {
      let var_core_value_sigA06F = Fi(var_core_value_sigBA47, var_core_value_sigAC47.hostUnitId),
        var_core_value_sig770E = var_core_value_sigA06F == null ? undefined : var_core_value_sigA06F.getSheetBySheetId(var_core_value_sigAC47.hostAnchorId);
      var_core_value_sig770E && (var_core_value_sigA06F == null || var_core_value_sigA06F.setActiveSheet(var_core_value_sig770E));
    },
    readContext: var_core_value_sig4654 => Ei(var_core_value_sig4654, var_core_value_sigBA47)
  };
}
function Ei(var_core_value_sig3DF7, var_core_value_sigD49F) {
  let var_core_value_sigCECC = Fi(var_core_value_sigD49F, var_core_value_sig3DF7.hostUnitId),
    var_core_value_sig0F47 = var_core_value_sigCECC == null ? undefined : var_core_value_sigCECC.getSheetBySheetId(var_core_value_sig3DF7.hostAnchorId),
    var_core_value_sig6B29 = (var_core_value_sigCECC == null ? undefined : var_core_value_sigCECC.getSheetOrders().indexOf(var_core_value_sig3DF7.hostAnchorId)) ?? -1;
  return !var_core_value_sig0F47 || var_core_value_sig6B29 < 0 ? {
    resolved: false,
    entry: b.SheetsSheetTab
  } : {
    resolved: true,
    entry: b.SheetsSheetTab,
    subUnitId: var_core_value_sig3DF7.hostAnchorId,
    index: var_core_value_sig6B29,
    name: var_core_value_sig0F47.getName()
  };
}
function Di(var_core_value_sig28E2, var_core_value_sig1578) {
  var var_core_value_sig52ED;
  let var_core_value_sig135F = Fi(var_core_value_sig1578, var_core_value_sig28E2.hostUnitId);
  C({
    hostUnitId: var_core_value_sig28E2.hostUnitId,
    entry: var_core_value_sig28E2.entry,
    hostContext: var_core_value_sig28E2.hostContext,
    maxIndex: var_core_value_sig135F == null ? undefined : var_core_value_sig135F.getSheetOrders().length
  });
  let var_core_value_sig416D = Ai(var_core_value_sig28E2),
    var_core_value_sigAD5D = ji(var_core_value_sig416D.hostContext),
    var_core_value_sig1B8A = Mi(var_core_value_sig416D.hostContext) ?? var_core_value_sig28E2.embedId,
    var_core_value_sigFB18 = xi({
      embedId: var_core_value_sig416D.embedId,
      hostAnchorId: var_core_value_sig416D.hostAnchorId,
      name: var_core_value_sig1B8A,
      childType: (var_core_value_sig52ED = var_core_value_sig28E2.descriptor) == null ? undefined : var_core_value_sig52ED.childType
    });
  return {
    hostAnchorId: var_core_value_sig416D.hostAnchorId,
    redoMutations: [{
      id: var_core_value_sig0DB1.id,
      params: {
        unitId: var_core_value_sig416D.hostUnitId,
        index: var_core_value_sigAD5D,
        sheet: var_core_value_sigFB18
      }
    }, {
      id: v,
      params: {
        record: var_core_value_sig416D
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sig416D.hostUnitId,
        hostAnchorId: var_core_value_sig416D.hostAnchorId
      }
    }, {
      id: var_core_value_sig57E8.id,
      params: {
        unitId: var_core_value_sig416D.hostUnitId,
        subUnitId: var_core_value_sig416D.hostAnchorId,
        subUnitName: var_core_value_sigFB18.name
      }
    }]
  };
}
function Oi(var_core_value_sig703C, var_core_value_sig96CF) {
  var var_core_value_sig49F1;
  let var_core_value_sig2F7B = ji(var_core_value_sig96CF.hostContext),
    var_core_value_sigB0DF = Mi(var_core_value_sig96CF.hostContext) ?? var_core_value_sig96CF.embedId,
    var_core_value_sig2E44 = xi({
      embedId: var_core_value_sig96CF.embedId,
      hostAnchorId: var_core_value_sig96CF.hostAnchorId,
      name: var_core_value_sigB0DF,
      childType: ((var_core_value_sig49F1 = var_core_value_sig703C.descriptor) == null ? undefined : var_core_value_sig49F1.childType) ?? Ni(var_core_value_sig96CF.hostContext)
    });
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sig703C.hostUnitId,
        hostAnchorId: var_core_value_sig703C.hostAnchorId
      }
    }, {
      id: var_core_value_sig57E8.id,
      params: {
        unitId: var_core_value_sig703C.hostUnitId,
        subUnitId: var_core_value_sig703C.hostAnchorId,
        subUnitName: var_core_value_sig2E44.name
      }
    }],
    undoMutations: [{
      id: var_core_value_sig0DB1.id,
      params: {
        unitId: var_core_value_sig703C.hostUnitId,
        index: var_core_value_sig2F7B,
        sheet: var_core_value_sig2E44
      }
    }, {
      id: v,
      params: {
        record: {
          ...var_core_value_sig96CF,
          lifecycle: "active"
        }
      }
    }]
  };
}
function ki(var_core_value_sig8560, var_core_value_sig138D) {
  var var_core_value_sig1E26;
  let var_core_value_sig5C6C = Fi(var_core_value_sig138D, var_core_value_sig8560.hostUnitId);
  if (!var_core_value_sig5C6C) return;
  let var_core_value_sigBE85 = Ai({
      ...var_core_value_sig8560,
      requestedAnchorId: var_core_value_sig8560.hostAnchorId
    }),
    var_core_value_sig56DE = Mi(var_core_value_sigBE85.hostContext) ?? var_core_value_sig8560.embedId,
    var_core_value_sig0278 = ji(var_core_value_sigBE85.hostContext);
  if (!((var_core_value_sig1E26 = var_core_value_sig5C6C.getSheetBySheetId) != null && var_core_value_sig1E26.call(var_core_value_sig5C6C, var_core_value_sigBE85.hostAnchorId))) {
    var var_core_value_sig08A6, var_core_value_sig04E1;
    let var_core_value_sigB26B = (var_core_value_sig08A6 = var_core_value_sig5C6C.getActiveSheet) == null ? undefined : var_core_value_sig08A6.call(var_core_value_sig5C6C, true);
    if (var_core_value_sig5C6C.addWorksheet(var_core_value_sigBE85.hostAnchorId, var_core_value_sig0278, xi({
      embedId: var_core_value_sigBE85.embedId,
      hostAnchorId: var_core_value_sigBE85.hostAnchorId,
      name: var_core_value_sig56DE,
      childType: ((var_core_value_sig04E1 = var_core_value_sig8560.descriptor) == null ? undefined : var_core_value_sig04E1.childType) ?? Ni(var_core_value_sigBE85.hostContext)
    })), var_core_value_sigB26B) {
      var var_core_value_sigC504;
      (var_core_value_sigC504 = var_core_value_sig5C6C.setActiveSheet) == null || var_core_value_sigC504.call(var_core_value_sig5C6C, var_core_value_sigB26B);
    }
  }
  return {
    ...var_core_value_sigBE85,
    hostContext: {
      ...var_core_value_sigBE85.hostContext,
      sheetIndex: var_core_value_sig0278,
      sheetName: var_core_value_sig56DE
    }
  };
}
function Ai(var_core_value_sig0515) {
  var var_core_value_sig9F34;
  let var_core_value_sig0247 = var_core_value_sig0515.requestedAnchorId ?? "sheets-tab:" + var_core_value_sig0515.embedId;
  return {
    hostAnchorId: var_core_value_sig0247,
    embedId: var_core_value_sig0515.embedId,
    hostUnitId: var_core_value_sig0515.hostUnitId,
    hostType: var_core_value_sig0515.hostType,
    entry: var_core_value_sig0515.entry,
    kind: "sheets-sheet-tab",
    hostContext: {
      ...var_core_value_sig0515.hostContext,
      sheetIndex: ji(var_core_value_sig0515.hostContext),
      sheetName: Mi(var_core_value_sig0515.hostContext) ?? var_core_value_sig0515.embedId,
      sheetTab: Si({
        embedId: var_core_value_sig0515.embedId,
        hostAnchorId: var_core_value_sig0247,
        childType: (var_core_value_sig9F34 = var_core_value_sig0515.descriptor) == null ? undefined : var_core_value_sig9F34.childType
      })
    },
    lifecycle: "active"
  };
}
function ji(var_core_value_sig6030) {
  return typeof (var_core_value_sig6030 == null ? undefined : var_core_value_sig6030.sheetIndex) == "number" ? var_core_value_sig6030.sheetIndex : 2 ** 53 - 1;
}
function Mi(var_core_value_sig0137) {
  return typeof (var_core_value_sig0137 == null ? undefined : var_core_value_sig0137.sheetName) == "string" ? var_core_value_sig0137.sheetName : undefined;
}
function Ni(var_core_value_sig14F3) {
  let var_core_value_sig34E8 = var_core_value_sig14F3 == null ? undefined : var_core_value_sig14F3.sheetTab;
  if (!var_core_value_sig34E8 || typeof var_core_value_sig34E8 != "object") return;
  let var_core_value_sigCFE7 = var_core_value_sig34E8.childType;
  return typeof var_core_value_sigCFE7 == "number" ? var_core_value_sigCFE7 : undefined;
}
function Pi(var_core_value_sigECBC, var_core_value_sig65D2) {
  if (!var_core_value_sigECBC) throw Error(var_core_value_sig65D2);
  return var_core_value_sigECBC;
}
function Fi(var_core_value_sig4306, var_core_value_sigFCD3) {
  return (var_core_value_sig4306 == null ? undefined : var_core_value_sig4306.getUnit(var_core_value_sigFCD3, var_core_value_sig2B86.UNIVER_SHEET)) ?? undefined;
}
function Ii(var_core_value_sig147A, var_core_value_sig829F, var_core_value_sig534C) {
  return {
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    entry: b.SlidesFloatingObject,
    createAnchorPlan: var_core_value_sig019B => aa(Bi(var_core_value_sig019B), "EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE"),
    restoreAnchor: var_core_value_sigC6BC => oa(qi(var_core_value_sigC6BC, var_core_value_sig829F, Li(var_core_value_sig534C)), "EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_core_value_sig8EC2 => {
      let var_core_value_sigA8C3 = (var_core_value_sig147A == null ? undefined : var_core_value_sig147A.getAnchor(var_core_value_sig8EC2.hostUnitId, var_core_value_sig8EC2.hostAnchorId)) ?? $i(var_core_value_sig8EC2);
      return Vi(var_core_value_sig8EC2, var_core_value_sigA8C3) ?? na(var_core_value_sig8EC2, var_core_value_sigA8C3);
    },
    readContext: var_core_value_sig5276 => Hi(var_core_value_sig5276, var_core_value_sig147A, var_core_value_sig829F, Li(var_core_value_sig534C)),
    createBoundsUpdatePlan: var_core_value_sig031B => Ui(var_core_value_sig031B, var_core_value_sig147A, var_core_value_sig829F, ca(Li(var_core_value_sig534C), "EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE"))
  };
}
function Li(var_core_value_sigABB7) {
  return typeof var_core_value_sigABB7 == "function" ? var_core_value_sigABB7() : var_core_value_sigABB7;
}
function Ri(var_core_value_sig9071, var_core_value_sig01A9) {
  return {
    hostType: var_core_value_sig2B86.UNIVER_SLIDE,
    entry: b.SlidesPageListBlock,
    activateAnchor: var_core_value_sig9DC0 => {
      var var_core_value_sig95F0;
      (var_core_value_sig95F0 = sa(var_core_value_sig01A9, var_core_value_sig9DC0.hostUnitId)) == null || var_core_value_sig95F0.pageManager["setActiveSlide"](var_core_value_sig9DC0.hostAnchorId);
    },
    createAnchorPlan: var_core_value_sig9CCB => Ji(var_core_value_sig9CCB, var_core_value_sig01A9),
    restoreAnchor: var_core_value_sigE718 => oa(Yi(var_core_value_sigE718, var_core_value_sig01A9), "EMBED_SLIDES_PAGE_LIST_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_core_value_sigAEC8 => Xi(var_core_value_sigAEC8, (var_core_value_sig9071 == null ? undefined : var_core_value_sig9071.getAnchor(var_core_value_sigAEC8.hostUnitId, var_core_value_sigAEC8.hostAnchorId)) ?? ea(var_core_value_sigAEC8)),
    readContext: var_core_value_sigB977 => zi(var_core_value_sigB977, var_core_value_sig01A9)
  };
}
function zi(var_core_value_sig9477, var_core_value_sig917C) {
  var var_core_value_sig27E2;
  let var_core_value_sig10D7 = (var_core_value_sig27E2 = sa(var_core_value_sig917C, var_core_value_sig9477.hostUnitId)) == null ? undefined : var_core_value_sig27E2.getSnapshot(),
    var_core_value_sig5A1A = var_core_value_sig10D7 == null ? undefined : var_core_value_sig10D7.slides[var_core_value_sig9477.hostAnchorId],
    var_core_value_sig77D2 = (var_core_value_sig10D7 == null ? undefined : var_core_value_sig10D7.slideOrder["indexOf"](var_core_value_sig9477.hostAnchorId)) ?? -1;
  return !var_core_value_sig5A1A || var_core_value_sig77D2 < 0 ? {
    resolved: false,
    entry: b.SlidesPageListBlock
  } : {
    resolved: true,
    entry: b.SlidesPageListBlock,
    pageId: var_core_value_sig9477.hostAnchorId,
    index: var_core_value_sig77D2,
    name: var_core_value_sig5A1A.name ?? var_core_value_sig9477.hostAnchorId
  };
}
function Bi(var_core_value_sig625E) {
  var var_core_value_sig6F04, var_core_value_sig48DA;
  C({
    hostUnitId: var_core_value_sig625E.hostUnitId,
    entry: var_core_value_sig625E.entry,
    hostContext: var_core_value_sig625E.hostContext
  });
  let var_core_value_sigD327 = ra(var_core_value_sig625E.hostContext);
  if (!var_core_value_sigD327) return;
  let var_core_value_sig6694 = $i(var_core_value_sig625E),
    var_core_value_sig2A21 = var_core_value_sig3171({
      embedId: var_core_value_sig6694.embedId,
      hostAnchorId: var_core_value_sig6694.hostAnchorId,
      childUnitId: (var_core_value_sig6F04 = var_core_value_sig625E.descriptor) == null ? undefined : var_core_value_sig6F04.childUnitId,
      childType: (var_core_value_sig48DA = var_core_value_sig625E.descriptor) == null ? undefined : var_core_value_sig48DA.childType,
      left: Z(var_core_value_sig6694.hostContext, "left"),
      top: Z(var_core_value_sig6694.hostContext, "top"),
      width: Z(var_core_value_sig6694.hostContext, "width"),
      height: Z(var_core_value_sig6694.hostContext, "height")
    });
  return {
    hostAnchorId: var_core_value_sig6694.hostAnchorId,
    redoMutations: [{
      id: var_core_value_sig520B.id,
      params: {
        unitId: var_core_value_sig6694.hostUnitId,
        subUnitId: var_core_value_sigD327,
        element: var_core_value_sig2A21
      }
    }, {
      id: v,
      params: {
        record: var_core_value_sig6694
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sig6694.hostUnitId,
        hostAnchorId: var_core_value_sig6694.hostAnchorId
      }
    }, {
      id: var_core_value_sig32AB.id,
      params: {
        unitId: var_core_value_sig6694.hostUnitId,
        subUnitId: var_core_value_sigD327,
        drawingId: var_core_value_sig6694.hostAnchorId
      }
    }]
  };
}
function Vi(var_core_value_sig0836, var_core_value_sigD95C) {
  var var_core_value_sig692E, var_core_value_sig3FAF;
  let var_core_value_sig378B = ra(var_core_value_sigD95C.hostContext);
  if (!var_core_value_sig378B) return;
  let var_core_value_sigDE50 = var_core_value_sig3171({
    embedId: var_core_value_sigD95C.embedId,
    hostAnchorId: var_core_value_sigD95C.hostAnchorId,
    childUnitId: (var_core_value_sig692E = var_core_value_sig0836.descriptor) == null ? undefined : var_core_value_sig692E.childUnitId,
    childType: (var_core_value_sig3FAF = var_core_value_sig0836.descriptor) == null ? undefined : var_core_value_sig3FAF.childType,
    left: Z(var_core_value_sigD95C.hostContext, "left"),
    top: Z(var_core_value_sigD95C.hostContext, "top"),
    width: Z(var_core_value_sigD95C.hostContext, "width"),
    height: Z(var_core_value_sigD95C.hostContext, "height")
  });
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sig0836.hostUnitId,
        hostAnchorId: var_core_value_sig0836.hostAnchorId
      }
    }, {
      id: var_core_value_sig32AB.id,
      params: {
        unitId: var_core_value_sig0836.hostUnitId,
        subUnitId: var_core_value_sig378B,
        drawingId: var_core_value_sig0836.hostAnchorId
      }
    }],
    undoMutations: [{
      id: var_core_value_sig520B.id,
      params: {
        unitId: var_core_value_sig0836.hostUnitId,
        subUnitId: var_core_value_sig378B,
        element: var_core_value_sigDE50
      }
    }, {
      id: v,
      params: {
        record: {
          ...var_core_value_sigD95C,
          lifecycle: "active"
        }
      }
    }]
  };
}
function Hi(var_core_value_sig3094, var_core_value_sig86CC, var_core_value_sig7868, var_core_value_sig9921) {
  let var_core_value_sig59BF = var_core_value_sig86CC == null ? undefined : var_core_value_sig86CC.getAnchor(var_core_value_sig3094.hostUnitId, var_core_value_sig3094.hostAnchorId),
    var_core_value_sigF001 = Wi(var_core_value_sig3094.hostUnitId, var_core_value_sig3094.hostAnchorId, ra(var_core_value_sig59BF == null ? undefined : var_core_value_sig59BF.hostContext), var_core_value_sig7868, var_core_value_sig9921),
    var_core_value_sigE511 = var_core_value_sigF001 ? Gi(var_core_value_sigF001.drawing) : undefined;
  return !var_core_value_sigF001 || !var_core_value_sigE511 ? {
    resolved: false,
    entry: b.SlidesFloatingObject
  } : {
    resolved: true,
    entry: b.SlidesFloatingObject,
    subUnitId: var_core_value_sigF001.subUnitId,
    bounds: var_core_value_sigE511
  };
}
function Ui(var_core_value_sig1C81, var_core_value_sig2C6A, var_core_value_sig7207, var_core_value_sig297F) {
  Ki(var_core_value_sig1C81.bounds);
  let var_core_value_sigA95A = var_core_value_sig2C6A == null ? undefined : var_core_value_sig2C6A.getAnchor(var_core_value_sig1C81.hostUnitId, var_core_value_sig1C81.hostAnchorId),
    var_core_value_sig94D6 = Wi(var_core_value_sig1C81.hostUnitId, var_core_value_sig1C81.hostAnchorId, ra(var_core_value_sigA95A == null ? undefined : var_core_value_sigA95A.hostContext), var_core_value_sig7207, var_core_value_sig297F);
  if (!var_core_value_sig94D6) throw Error("EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE");
  let var_core_value_sigC22E = {
      ...var_core_value_sig94D6.drawing["transform"],
      ...var_core_value_sig1C81.bounds
    },
    var_core_value_sig2321 = {
      ...var_core_value_sig94D6.drawing["element"],
      transform: {
        ...var_core_value_sig94D6.drawing["element"].transform,
        ...var_core_value_sig1C81.bounds
      }
    },
    var_core_value_sigFF33 = {
      ...(var_core_value_sigA95A ?? $i({
        ...var_core_value_sig1C81,
        requestedAnchorId: var_core_value_sig1C81.hostAnchorId,
        hostContext: {
          subUnitId: var_core_value_sig94D6.subUnitId
        }
      })),
      hostContext: {
        ...(var_core_value_sigA95A == null ? undefined : var_core_value_sigA95A.hostContext),
        subUnitId: var_core_value_sig94D6.subUnitId,
        ...var_core_value_sig1C81.bounds
      },
      lifecycle: "active"
    };
  return {
    redoMutations: [{
      id: var_core_value_sig3E4A.id,
      params: {
        unitId: var_core_value_sig1C81.hostUnitId,
        subUnitId: var_core_value_sig94D6.subUnitId,
        drawingId: var_core_value_sig1C81.hostAnchorId,
        element: var_core_value_sig2321,
        transform: var_core_value_sigC22E
      }
    }, {
      id: v,
      params: {
        record: var_core_value_sigFF33
      }
    }],
    undoMutations: [var_core_value_sigA95A ? {
      id: v,
      params: {
        record: var_core_value_sigA95A
      }
    } : {
      id: y,
      params: {
        hostUnitId: var_core_value_sig1C81.hostUnitId,
        hostAnchorId: var_core_value_sig1C81.hostAnchorId
      }
    }, {
      id: var_core_value_sig3E4A.id,
      params: {
        unitId: var_core_value_sig1C81.hostUnitId,
        subUnitId: var_core_value_sig94D6.subUnitId,
        drawingId: var_core_value_sig1C81.hostAnchorId,
        element: var_core_value_sig94D6.drawing["element"],
        transform: var_core_value_sig94D6.drawing["transform"]
      }
    }]
  };
}
function Wi(var_core_value_sig16E0, var_core_value_sig213C, var_core_value_sig31F8, var_core_value_sig6905, var_core_value_sigC3C0) {
  if (!var_core_value_sigC3C0) return;
  let var_core_value_sig1F39 = var_core_value_sig2949 => var_core_value_sigC3C0.getDrawingByParam({
    unitId: var_core_value_sig16E0,
    subUnitId: var_core_value_sig2949,
    drawingId: var_core_value_sig213C
  });
  if (var_core_value_sig31F8) {
    let var_core_value_sig308A = var_core_value_sig1F39(var_core_value_sig31F8);
    if (var_core_value_sig308A && var_core_value_sig788B(var_core_value_sig308A.element)) return {
      subUnitId: var_core_value_sig31F8,
      drawing: var_core_value_sig308A
    };
  }
  let var_core_value_sig9256 = sa(var_core_value_sig6905, var_core_value_sig16E0);
  for (let var_core_value_sig528D of (var_core_value_sig9256 == null ? undefined : var_core_value_sig9256.getSnapshot().slideOrder) ?? []) {
    let var_core_value_sig5B67 = var_core_value_sig1F39(var_core_value_sig528D);
    if (var_core_value_sig5B67 && var_core_value_sig788B(var_core_value_sig5B67.element)) return {
      subUnitId: var_core_value_sig528D,
      drawing: var_core_value_sig5B67
    };
  }
}
function Gi(var_core_value_sig98A0) {
  let {
    left: var_core_value_sig3EBD,
    top: var_core_value_sig1AC3,
    width: var_core_value_sig66B8,
    height: var_core_value_sig4C7F
  } = var_core_value_sig98A0.transform ?? {};
  if (var_core_value_sig3EBD == null || var_core_value_sig1AC3 == null || var_core_value_sig66B8 == null || var_core_value_sig4C7F == null) return;
  let var_core_value_sig2543 = {
    left: var_core_value_sig3EBD,
    top: var_core_value_sig1AC3,
    width: var_core_value_sig66B8,
    height: var_core_value_sig4C7F
  };
  try {
    return Ki(var_core_value_sig2543), var_core_value_sig2543;
  } catch {
    return;
  }
}
function Ki(var_core_value_sigB230) {
  if (![var_core_value_sigB230.left, var_core_value_sigB230.top, var_core_value_sigB230.width, var_core_value_sigB230.height].every(Number.isFinite) || var_core_value_sigB230.width <= 0 || var_core_value_sigB230.height <= 0) throw Error("EMBED_BOUNDS_INVALID");
}
function qi(var_core_value_sig407E, var_core_value_sig88CB, var_core_value_sigD615) {
  var var_core_value_sigB708;
  let var_core_value_sig60EF = ra(var_core_value_sig407E.hostContext),
    var_core_value_sigA6FB = sa(var_core_value_sig88CB, var_core_value_sig407E.hostUnitId),
    var_core_value_sigD6EA = var_core_value_sig60EF ? var_core_value_sigA6FB == null ? undefined : var_core_value_sigA6FB.pageManager["getSlide"](var_core_value_sig60EF) : undefined;
  if (!var_core_value_sig60EF || !var_core_value_sigD6EA) return;
  let var_core_value_sigA2D3 = $i({
    ...var_core_value_sig407E,
    requestedAnchorId: var_core_value_sig407E.hostAnchorId
  });
  if (!((var_core_value_sigB708 = var_core_value_sigD6EA.getData().elements) != null && var_core_value_sigB708[var_core_value_sigA2D3.hostAnchorId])) {
    var var_core_value_sig727A, var_core_value_sig6AF1;
    let var_core_value_sigA309 = var_core_value_sig3171({
      embedId: var_core_value_sigA2D3.embedId,
      hostAnchorId: var_core_value_sigA2D3.hostAnchorId,
      childUnitId: (var_core_value_sig727A = var_core_value_sig407E.descriptor) == null ? undefined : var_core_value_sig727A.childUnitId,
      childType: (var_core_value_sig6AF1 = var_core_value_sig407E.descriptor) == null ? undefined : var_core_value_sig6AF1.childType,
      left: Z(var_core_value_sigA2D3.hostContext, "left"),
      top: Z(var_core_value_sigA2D3.hostContext, "top"),
      width: Z(var_core_value_sigA2D3.hostContext, "width"),
      height: Z(var_core_value_sigA2D3.hostContext, "height")
    });
    var_core_value_sigD6EA.addElement(var_core_value_sigA309);
  }
  return Zi(var_core_value_sigD615, var_core_value_sigA6FB, var_core_value_sigA2D3.hostUnitId, var_core_value_sig60EF), var_core_value_sigA2D3;
}
function Ji(var_core_value_sig3F6A, var_core_value_sig23B4) {
  var var_core_value_sig350C, var_core_value_sig2335;
  let var_core_value_sig6233 = sa(var_core_value_sig23B4, var_core_value_sig3F6A.hostUnitId);
  C({
    hostUnitId: var_core_value_sig3F6A.hostUnitId,
    entry: var_core_value_sig3F6A.entry,
    hostContext: var_core_value_sig3F6A.hostContext,
    maxIndex: var_core_value_sig6233 == null ? undefined : var_core_value_sig6233.getSnapshot().slideOrder["length"]
  });
  let var_core_value_sig4230 = ea(var_core_value_sig3F6A),
    var_core_value_sig6136 = ia(var_core_value_sig4230.hostContext, "pageName") ?? var_core_value_sig3F6A.embedId,
    var_core_value_sigD25E = var_core_value_sigEBC4({
      embedId: var_core_value_sig4230.embedId,
      hostAnchorId: var_core_value_sig4230.hostAnchorId,
      name: var_core_value_sig6136,
      childUnitId: (var_core_value_sig350C = var_core_value_sig3F6A.descriptor) == null ? undefined : var_core_value_sig350C.childUnitId,
      childType: (var_core_value_sig2335 = var_core_value_sig3F6A.descriptor) == null ? undefined : var_core_value_sig2335.childType
    });
  return var_core_value_sig4230.hostContext = {
    ...var_core_value_sig4230.hostContext,
    pageName: var_core_value_sig6136
  }, {
    hostAnchorId: var_core_value_sig4230.hostAnchorId,
    redoMutations: [{
      id: var_core_value_sigFE26.id,
      params: {
        unitId: var_core_value_sig4230.hostUnitId,
        slide: var_core_value_sigD25E,
        insertIndex: Z(var_core_value_sig4230.hostContext, "pageIndex")
      }
    }, {
      id: v,
      params: {
        record: var_core_value_sig4230
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sig4230.hostUnitId,
        hostAnchorId: var_core_value_sig4230.hostAnchorId
      }
    }, {
      id: var_core_value_sig72BE.id,
      params: {
        unitId: var_core_value_sig4230.hostUnitId,
        subUnitId: var_core_value_sig4230.hostAnchorId
      }
    }]
  };
}
function Yi(var_core_value_sigE1BC, var_core_value_sigCF44) {
  let var_core_value_sig3C97 = sa(var_core_value_sigCF44, var_core_value_sigE1BC.hostUnitId);
  if (!var_core_value_sig3C97) return;
  let var_core_value_sigA920 = ea({
      ...var_core_value_sigE1BC,
      requestedAnchorId: var_core_value_sigE1BC.hostAnchorId
    }),
    var_core_value_sigAD56 = ia(var_core_value_sigA920.hostContext, "pageName") ?? var_core_value_sigE1BC.embedId,
    var_core_value_sig0454 = Z(var_core_value_sigA920.hostContext, "pageIndex");
  if (!var_core_value_sig3C97.pageManager["getSlide"](var_core_value_sigA920.hostAnchorId)) {
    var var_core_value_sigEE1A, var_core_value_sig4107;
    var_core_value_sig3C97.pageManager["createSlide"](var_core_value_sigEBC4({
      embedId: var_core_value_sigA920.embedId,
      hostAnchorId: var_core_value_sigA920.hostAnchorId,
      name: var_core_value_sigAD56,
      childUnitId: (var_core_value_sigEE1A = var_core_value_sigE1BC.descriptor) == null ? undefined : var_core_value_sigEE1A.childUnitId,
      childType: (var_core_value_sig4107 = var_core_value_sigE1BC.descriptor) == null ? undefined : var_core_value_sig4107.childType
    }), var_core_value_sig0454);
  }
  return {
    ...var_core_value_sigA920,
    hostContext: {
      ...var_core_value_sigA920.hostContext,
      pageName: var_core_value_sigAD56
    }
  };
}
function Xi(var_core_value_sigF35C, var_core_value_sigEF8D) {
  var var_core_value_sigE025, var_core_value_sigD549;
  let var_core_value_sigC79E = ia(var_core_value_sigEF8D.hostContext, "pageName") ?? var_core_value_sigEF8D.embedId,
    var_core_value_sig9221 = var_core_value_sigEBC4({
      embedId: var_core_value_sigEF8D.embedId,
      hostAnchorId: var_core_value_sigEF8D.hostAnchorId,
      name: var_core_value_sigC79E,
      childUnitId: (var_core_value_sigE025 = var_core_value_sigF35C.descriptor) == null ? undefined : var_core_value_sigE025.childUnitId,
      childType: (var_core_value_sigD549 = var_core_value_sigF35C.descriptor) == null ? undefined : var_core_value_sigD549.childType
    });
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sigF35C.hostUnitId,
        hostAnchorId: var_core_value_sigF35C.hostAnchorId
      }
    }, {
      id: var_core_value_sig72BE.id,
      params: {
        unitId: var_core_value_sigF35C.hostUnitId,
        subUnitId: var_core_value_sigF35C.hostAnchorId
      }
    }],
    undoMutations: [{
      id: var_core_value_sigFE26.id,
      params: {
        unitId: var_core_value_sigF35C.hostUnitId,
        slide: var_core_value_sig9221,
        insertIndex: Z(var_core_value_sigEF8D.hostContext, "pageIndex")
      }
    }, {
      id: v,
      params: {
        record: {
          ...var_core_value_sigEF8D,
          lifecycle: "active",
          hostContext: {
            ...var_core_value_sigEF8D.hostContext,
            pageName: var_core_value_sigC79E
          }
        }
      }
    }]
  };
}
function Zi(var_core_value_sig0351, var_core_value_sig4686, var_core_value_sig8E1C, var_core_value_sigD719) {
  if (!var_core_value_sig0351 || !var_core_value_sig4686) return;
  let var_core_value_sig323C = var_core_value_sig4686.pageManager["getSlide"](var_core_value_sigD719);
  if (!var_core_value_sig323C) return;
  let var_core_value_sig015D = var_core_value_sig0351.getDrawingData(var_core_value_sig8E1C, var_core_value_sigD719),
    var_core_value_sigBF8B = var_core_value_sig0351.getDrawingOrder(var_core_value_sig8E1C, var_core_value_sigD719),
    var_core_value_sigF7CE = new Set(var_core_value_sigBF8B),
    {
      data: var_core_value_sig7CF1,
      order: var_core_value_sigA552
    } = var_core_value_sig9A80(var_core_value_sig8E1C, var_core_value_sigD719, var_core_value_sig323C.resolveElements(), var_core_value_sig4686.getThemeDataForPage(var_core_value_sigD719)),
    var_core_value_sigAE32 = new Set(var_core_value_sigA552);
  var_core_value_sig0351.drawingManagerData[var_core_value_sig8E1C] || (var_core_value_sig0351.drawingManagerData[var_core_value_sig8E1C] = {}), var_core_value_sig0351.drawingManagerData[var_core_value_sig8E1C][var_core_value_sigD719] = {
    data: var_core_value_sig7CF1,
    order: var_core_value_sigA552
  };
  let var_core_value_sig9B4D = var_core_value_sigBF8B.filter(var_core_value_sig9E20 => !var_core_value_sigAE32.has(var_core_value_sig9E20)),
    var_core_value_sig2704 = var_core_value_sigA552.filter(var_core_value_sig26BB => !var_core_value_sigF7CE.has(var_core_value_sig26BB)),
    var_core_value_sigD0CC = var_core_value_sigA552.filter(var_core_value_sig19B4 => var_core_value_sigF7CE.has(var_core_value_sig19B4) && var_core_value_sig015D[var_core_value_sig19B4] !== var_core_value_sig7CF1[var_core_value_sig19B4]);
  var_core_value_sig9B4D.length > 0 && var_core_value_sig0351.removeNotification(Qi(var_core_value_sig8E1C, var_core_value_sigD719, var_core_value_sig9B4D)), var_core_value_sig2704.length > 0 && var_core_value_sig0351.addNotification(Qi(var_core_value_sig8E1C, var_core_value_sigD719, var_core_value_sig2704)), var_core_value_sigD0CC.length > 0 && var_core_value_sig0351.updateNotification(Qi(var_core_value_sig8E1C, var_core_value_sigD719, var_core_value_sigD0CC));
}
function Qi(var_core_value_sigF347, var_core_value_sig80C6, var_core_value_sigEBFB) {
  return var_core_value_sigEBFB.map(var_core_value_sig218A => ({
    unitId: var_core_value_sigF347,
    subUnitId: var_core_value_sig80C6,
    drawingId: var_core_value_sig218A
  }));
}
function $i(var_core_value_sigF3BF) {
  return ta(var_core_value_sigF3BF, b.SlidesFloatingObject, "slides-floating");
}
function ea(var_core_value_sigAE58) {
  return ta(var_core_value_sigAE58, b.SlidesPageListBlock, "slides-page-list");
}
function ta(var_core_value_sig8E13, var_core_value_sig3AAF, var_core_value_sig134E) {
  return {
    hostAnchorId: var_core_value_sig8E13.requestedAnchorId ?? var_core_value_sig134E + ":" + var_core_value_sig8E13.embedId,
    embedId: var_core_value_sig8E13.embedId,
    hostUnitId: var_core_value_sig8E13.hostUnitId,
    hostType: var_core_value_sig8E13.hostType,
    entry: var_core_value_sig8E13.entry,
    kind: var_core_value_sig3AAF,
    hostContext: var_core_value_sig8E13.hostContext,
    lifecycle: "active"
  };
}
function na(var_core_value_sigA3C0, var_core_value_sig723F) {
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_core_value_sigA3C0.hostUnitId,
        hostAnchorId: var_core_value_sigA3C0.hostAnchorId
      }
    }],
    undoMutations: [{
      id: v,
      params: {
        record: {
          ...var_core_value_sig723F,
          lifecycle: "active"
        }
      }
    }]
  };
}
function ra(var_core_value_sigD044) {
  return typeof (var_core_value_sigD044 == null ? undefined : var_core_value_sigD044.subUnitId) == "string" ? var_core_value_sigD044.subUnitId : undefined;
}
function Z(var_core_value_sig9797, var_core_value_sig8533) {
  return typeof (var_core_value_sig9797 == null ? undefined : var_core_value_sig9797[var_core_value_sig8533]) == "number" ? var_core_value_sig9797[var_core_value_sig8533] : undefined;
}
function ia(var_core_value_sig57C5, var_core_value_sig0DE9) {
  return typeof (var_core_value_sig57C5 == null ? undefined : var_core_value_sig57C5[var_core_value_sig0DE9]) == "string" ? var_core_value_sig57C5[var_core_value_sig0DE9] : undefined;
}
function aa(var_core_value_sigB00D, var_core_value_sig57C8) {
  if (!var_core_value_sigB00D) throw Error(var_core_value_sig57C8);
  return var_core_value_sigB00D;
}
function oa(var_core_value_sigC27D, var_core_value_sig7B95) {
  if (!var_core_value_sigC27D) throw Error(var_core_value_sig7B95);
  return var_core_value_sigC27D;
}
function sa(var_core_value_sig7D59, var_core_value_sig5863) {
  return (var_core_value_sig7D59 == null ? undefined : var_core_value_sig7D59.getUnit(var_core_value_sig5863, var_core_value_sig2B86.UNIVER_SLIDE)) ?? undefined;
}
function ca(var_core_value_sig5BE7, var_core_value_sigC74A) {
  if (!var_core_value_sig5BE7) throw Error(var_core_value_sigC74A);
  return var_core_value_sig5BE7;
}
function la(var_core_value_sig8F6A) {
  let var_core_value_sig46EA = var_core_value_sig8F6A.has(M) ? var_core_value_sig8F6A.get(M) : undefined,
    var_core_value_sig626C = var_core_value_sig8F6A.has(var_core_value_sig035C) ? var_core_value_sig8F6A.get(var_core_value_sig035C) : undefined;
  Xn(var_core_value_sig8F6A, [oi(var_core_value_sig46EA, var_core_value_sig626C), Dt(var_core_value_sig46EA, () => var_core_value_sig8F6A.has(var_core_value_sig5A9A) ? var_core_value_sig8F6A.get(var_core_value_sig5A9A) : undefined, () => var_core_value_sig8F6A.has(var_core_value_sig7C69) ? var_core_value_sig8F6A.get(var_core_value_sig7C69) : undefined, () => var_core_value_sig8F6A.has(var_core_value_sig2191) ? var_core_value_sig8F6A.get(var_core_value_sig2191) : undefined), Ti(var_core_value_sig46EA, var_core_value_sig626C), Ii(var_core_value_sig46EA, var_core_value_sig626C, () => var_core_value_sig8F6A.has(var_core_value_sig1019) ? var_core_value_sig8F6A.get(var_core_value_sig1019) : undefined), Ri(var_core_value_sig46EA, var_core_value_sig626C), Ar(var_core_value_sig46EA, var_core_value_sig626C), Wr(var_core_value_sig46EA, var_core_value_sig626C, () => var_core_value_sig8F6A.has(var_core_value_sig2D35) ? var_core_value_sig8F6A.get(var_core_value_sig2D35) : undefined)]);
}
let ua = class {
  constructor(var_core_value_sig14CB) {
    this._modelService = var_core_value_sig14CB;
  }
  getRetentionState(var_core_value_sigFDEE, var_core_value_sigA676) {
    let var_core_value_sigC27E = this._modelService["getDescriptorsByResourceRef"](var_core_value_sigFDEE, var_core_value_sigA676);
    return this._toState(var_core_value_sigFDEE, var_core_value_sigA676, var_core_value_sigC27E);
  }
  listCleanupCandidates(var_core_value_sigA70D) {
    let var_core_value_sigCE10 = new Map();
    for (let var_core_value_sig1758 of this._modelService["getDescriptors"](var_core_value_sigA70D)) {
      let var_core_value_sig76BA = var_core_value_sig1758.source["ref"],
        var_core_value_sigFBFA = z(var_core_value_sig76BA),
        var_core_value_sigF602 = var_core_value_sigCE10.get(var_core_value_sigFBFA);
      var_core_value_sigF602 ? var_core_value_sigF602.descriptors["push"](var_core_value_sig1758) : var_core_value_sigCE10.set(var_core_value_sigFBFA, {
        ref: var_core_value_sig76BA,
        descriptors: [var_core_value_sig1758]
      });
    }
    return [...var_core_value_sigCE10.values()].map(({
      ref: var_core_value_sig4805,
      descriptors: var_core_value_sigE67E
    }) => this._toState(var_core_value_sigA70D, var_core_value_sig4805, var_core_value_sigE67E)).filter(var_core_value_sig2902 => var_core_value_sig2902.eligibleForCleanup);
  }
  _toState(var_core_value_sigA3861, var_core_value_sigCD82, var_core_value_sig44DD) {
    let var_core_value_sig96FA = var_core_value_sig44DD.filter(var_core_value_sig9989 => var_core_value_sig9989.lifecycle !== "soft-delete d").length;
    return {
      hostUnitId: var_core_value_sigA3861,
      ref: var_core_value_sigCD82,
      childUnitIds: [...new Set(var_core_value_sig44DD.map(var_core_value_sig698E => var_core_value_sig698E.childUnitId).filter(var_core_value_sig2809 => typeof var_core_value_sig2809 == "string"))],
      totalReferences: var_core_value_sig44DD.length,
      activeReferences: var_core_value_sig96FA,
      softDeletedReferences: var_core_value_sig44DD.length - var_core_value_sig96FA,
      shouldDisposeNow: false,
      eligibleForCleanup: var_core_value_sig44DD.length > 0 && var_core_value_sig96FA === 0
    };
  }
};
ua = H([V(0, var_core_value_sigA7F0(U))], ua);
var da = class {
  constructor() {
    x(this, "_focusOwner$", new var_core_value_sigB14A(null)), x(this, "focusOwner$", this._focusOwner$["asObservable"]());
  }
  getFocusOwner() {
    return this._focusOwner$["getValue"]();
  }
  setFocusOwner(var_core_value_sigAB68) {
    let var_core_value_sig040A = this.getFocusOwner();
    var_core_value_sig040A && var_core_value_sig040A.hostUnitId === var_core_value_sigAB68.hostUnitId && var_core_value_sig040A.embedId === var_core_value_sigAB68.embedId && var_core_value_sig040A.childUnitId === var_core_value_sigAB68.childUnitId && var_core_value_sig040A.childType === var_core_value_sigAB68.childType && var_core_value_sig040A.reason === var_core_value_sigAB68.reason || this._focusOwner$["next"](var_core_value_sigAB68);
  }
  clearFocusOwner(var_core_value_sig2AE0) {
    let var_core_value_sigC349 = this.getFocusOwner();
    var_core_value_sigC349 && (!var_core_value_sig2AE0 || var_core_value_sigC349.embedId === var_core_value_sig2AE0) && this._focusOwner$["next"](null);
  }
};
let fa = class {
  constructor(var_core_value_sig9D96) {
    this._referencedUnitManager = var_core_value_sig9D96, x(this, "id", "embed-resource-ref-formula-data"), x(this, "priority", 100);
  }
  canRead(var_core_value_sig2776) {
    if (var_core_value_sig2776.target["sourceUnitId"]) return true;
    if (!var_core_value_sig2776.target["uri"]) return false;
    try {
      return I(var_core_value_sig2776.target["uri"]), true;
    } catch {
      return false;
    }
  }
  async readData(var_core_value_sig6FB2) {
    if (!var_core_value_sig6FB2.target["uri"] && !var_core_value_sig6FB2.target["sourceUnitId"]) return;
    let var_core_value_sigEB43 = pa(var_core_value_sig6FB2),
      var_core_value_sig4186 = new Map(),
      var_core_value_sigF963 = [];
    try {
      for (let var_core_value_sig1BBD of var_core_value_sig6FB2.ranges) {
        if (var_core_value_sig1BBD.tableName) {
          let var_core_value_sig7524 = await this._referencedUnitManager["readData"]({
            ...var_core_value_sigEB43,
            part: {
              kind: "table",
              tableName: var_core_value_sig1BBD.tableName
            }
          });
          if (var_core_value_sig7524.type !== "table") continue;
          let var_core_value_sig2AD8 = {
            name: var_core_value_sig7524.sheetName,
            sheetId: var_core_value_sig7524.sheetId,
            rowCount: var_core_value_sig7524.range["endRow"] + 1,
            columnCount: var_core_value_sig7524.range["endColumn"] + 1,
            coverage: [var_core_value_sig7524.range],
            cells: []
          };
          ma(var_core_value_sig2AD8, var_core_value_sig7524.values, var_core_value_sig7524.range), var_core_value_sig4186.set(var_core_value_sig7524.sheetId, var_core_value_sig2AD8), var_core_value_sigF963.push({
            name: var_core_value_sig7524.tableName,
            sheetId: var_core_value_sig7524.sheetId,
            range: var_core_value_sig7524.range,
            columns: var_core_value_sig7524.columns,
            showHeader: var_core_value_sig7524.showHeader
          });
          continue;
        }
        if (!var_core_value_sig1BBD.range || !var_core_value_sig1BBD.sheetName) continue;
        let var_core_value_sigBC46 = await this._referencedUnitManager["readData"]({
          ...var_core_value_sigEB43,
          part: {
            kind: "range",
            ref: var_core_value_sig1BBD.sheetName + "!" + ha(var_core_value_sig1BBD.range),
            sheetName: var_core_value_sig1BBD.sheetName,
            ...(var_core_value_sig1BBD.sheetId ? {
              sheetId: var_core_value_sig1BBD.sheetId
            } : {}),
            range: ha(var_core_value_sig1BBD.range)
          }
        });
        if (var_core_value_sigBC46.type !== "range") continue;
        let var_core_value_sig3D7D = var_core_value_sigBC46.sheetId ?? var_core_value_sig1BBD.sheetId ?? var_core_value_sig1BBD.sheetName,
          var_core_value_sig27E5 = var_core_value_sigBC46.sheetName ?? var_core_value_sig1BBD.sheetName,
          var_core_value_sig8061 = var_core_value_sig3D7D,
          var_core_value_sig4D4C = var_core_value_sig4186.get(var_core_value_sig8061) ?? {
            name: var_core_value_sig27E5,
            sheetId: var_core_value_sig3D7D,
            rowCount: var_core_value_sig1BBD.range["endRow"] + 1,
            columnCount: var_core_value_sig1BBD.range["endColumn"] + 1,
            coverage: [],
            cells: []
          };
        var_core_value_sig4D4C.rowCount = Math.max(var_core_value_sig4D4C.rowCount, var_core_value_sig1BBD.range["endRow"] + 1), var_core_value_sig4D4C.columnCount = Math.max(var_core_value_sig4D4C.columnCount, var_core_value_sig1BBD.range["endColumn"] + 1), var_core_value_sig4D4C.coverage["push"](var_core_value_sig1BBD.range), ma(var_core_value_sig4D4C, var_core_value_sigBC46.values, var_core_value_sig1BBD.range), var_core_value_sig4186.set(var_core_value_sig8061, var_core_value_sig4D4C);
      }
    } catch {
      return var_core_value_sig278D(var_core_value_sig6FB2);
    }
    return {
      requestId: var_core_value_sig6FB2.requestId,
      calculationId: var_core_value_sig6FB2.calculationId,
      source: "provider",
      freshness: "fresh",
      sheets: Array.from(var_core_value_sig4186.values()),
      tables: var_core_value_sigF963
    };
  }
};
fa = H([V(0, Y)], fa);
function pa(var_core_value_sig9077) {
  return var_core_value_sig9077.target["sourceUnitId"] ? {
    file: {
      kind: P.SELF
    },
    unit: {
      selector: var_core_value_sig9077.target["sourceUnitId"],
      type: Ln(var_core_value_sig9077.target["unitType"])
    }
  } : I(var_core_value_sig9077.target["uri"]);
}
function ma(var_core_value_sigC76C, var_core_value_sigB23A, var_core_value_sigBA66) {
  var_core_value_sigB23A.forEach((var_core_value_sigB608, var_core_value_sigF866) => {
    var_core_value_sigB608.forEach((var_core_value_sig2DAB, var_core_value_sig877E) => {
      var_core_value_sig2DAB != null && var_core_value_sigC76C.cells["push"]({
        row: var_core_value_sigBA66.startRow + var_core_value_sigF866,
        column: var_core_value_sigBA66.startColumn + var_core_value_sig877E,
        cell: {
          v: var_core_value_sig2DAB
        }
      });
    });
  });
}
function ha(var_core_value_sig3DF0) {
  let var_core_value_sig0512 = "" + ga(var_core_value_sig3DF0.startColumn) + (var_core_value_sig3DF0.startRow + 1),
    var_core_value_sig4B2B = "" + ga(var_core_value_sig3DF0.endColumn) + (var_core_value_sig3DF0.endRow + 1);
  return var_core_value_sig0512 === var_core_value_sig4B2B ? var_core_value_sig0512 : var_core_value_sig0512 + ":" + var_core_value_sig4B2B;
}
function ga(var_core_value_sigDF88) {
  let var_core_value_sigDB93 = var_core_value_sigDF88 + 1,
    var_core_value_sig67CF = "";
  for (; var_core_value_sigDB93 > 0;) var_core_value_sigDB93--, var_core_value_sig67CF = String.fromCharCode(65 + var_core_value_sigDB93 % 26) + var_core_value_sig67CF, var_core_value_sigDB93 = Math.floor(var_core_value_sigDB93 / 26);
  return var_core_value_sig67CF;
}
const _a = -100;
let va = class {
  constructor(var_core_value_sig5EFB) {
    this._univerInstanceService = var_core_value_sig5EFB;
  }
  ensureUnit(var_core_value_sig3A85) {
    ka(var_core_value_sig3A85.ref), Aa(var_core_value_sig3A85.ref, var_core_value_sig3A85.unitType);
    let var_core_value_sig2682 = this._univerInstanceService["getUnit"](var_core_value_sig3A85.ref["unit"].selector, var_core_value_sig3A85.unitType);
    if (!var_core_value_sig2682) throw new S("LOCAL_RUNTIME_RESOURCE_REF_UNIT_NOT_FOUND", {
      ref: var_core_value_sig3A85.ref,
      unitType: var_core_value_sig3A85.unitType
    });
    return {
      unitId: var_core_value_sig2682.getUnitId(),
      unitType: var_core_value_sig3A85.unitType
    };
  }
};
va = H([V(0, var_core_value_sig035C)], va);
let ya = class {
  constructor(var_core_value_sig4BB5, var_core_value_sig6709, var_core_value_sig52CA) {
    this._referencedUnitManager = var_core_value_sig4BB5, this._univerInstanceService = var_core_value_sig6709, this._commandService = var_core_value_sig52CA;
  }
  async readData(var_core_value_sigC030) {
    let var_core_value_sig88F6 = var_core_value_sigC030.dataType === "range" && Cn(var_core_value_sigC030.selector) ? var_core_value_sigC030.selector : undefined,
      var_core_value_sig37DB = var_core_value_sigC030.dataType === "table" && wn(var_core_value_sigC030.selector) ? var_core_value_sigC030.selector : undefined;
    if (!var_core_value_sig88F6 && !var_core_value_sig37DB) throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED", {
      dataType: var_core_value_sigC030.dataType,
      selector: var_core_value_sigC030.selector
    });
    let var_core_value_sig5542 = await this._referencedUnitManager["ensure"](ja(var_core_value_sigC030.ref), {
      unitType: var_core_value_sigC030.unitType,
      signal: var_core_value_sigC030.signal
    });
    if (var_core_value_sig88F6 && var_core_value_sig5542.unitType === var_core_value_sig2B86.UNIVER_SHEET) return this._readSheetRange(var_core_value_sigC030.ref, var_core_value_sig5542.unitId, var_core_value_sig88F6);
    if (var_core_value_sig37DB && var_core_value_sig5542.unitType === var_core_value_sig2B86.UNIVER_BASE) return this._readBaseTable(var_core_value_sigC030.ref, var_core_value_sig5542.unitId, var_core_value_sig37DB);
    throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_TYPE_UNSUPPORTED", {
      ref: var_core_value_sigC030.ref,
      unitType: var_core_value_sig5542.unitType
    });
  }
  watchData(var_core_value_sigE0A9, var_core_value_sigA73E) {
    if (ka(var_core_value_sigE0A9.ref), var_core_value_sigE0A9.unitType === var_core_value_sig2B86.UNIVER_SHEET && var_core_value_sigE0A9.dataType === "range" && Cn(var_core_value_sigE0A9.selector)) return this._watchSheetRange(var_core_value_sigE0A9.ref, var_core_value_sigE0A9.selector, var_core_value_sigA73E);
    if (var_core_value_sigE0A9.unitType === var_core_value_sig2B86.UNIVER_BASE && var_core_value_sigE0A9.dataType === "table" && wn(var_core_value_sigE0A9.selector)) return this._watchBaseTable(var_core_value_sigE0A9.ref, var_core_value_sigA73E);
    throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED", {
      dataType: var_core_value_sigE0A9.dataType,
      selector: var_core_value_sigE0A9.selector
    });
  }
  _watchSheetRange(var_core_value_sig7620, var_core_value_sigB9FC, var_core_value_sig5055) {
    let var_core_value_sig3801 = var_core_value_sigB9FC.sheetId,
      var_core_value_sig45F0 = Na(var_core_value_sigB9FC.range);
    return this._commandService["onCommandExecuted"](var_core_value_sig20C8 => {
      if (Sa(var_core_value_sig20C8)) {
        if (!var_core_value_sig3801) {
          var var_core_value_sigE9A7;
          let var_core_value_sigC9E0 = this._univerInstanceService["getUnit"](var_core_value_sig7620.unit["selector"], var_core_value_sig2B86.UNIVER_SHEET);
          var_core_value_sig3801 = var_core_value_sigC9E0 == null || (var_core_value_sigE9A7 = var_core_value_sigC9E0.getSheetBySheetName(var_core_value_sigB9FC.sheetName)) == null ? undefined : var_core_value_sigE9A7.getSheetId();
        }
        if (var_core_value_sig20C8.params["unitId"] === var_core_value_sig7620.unit["selector"] && var_core_value_sig20C8.params["subUnitId"] === var_core_value_sig3801) {
          if (Ta(var_core_value_sig20C8, var_core_value_sig89BC)) {
            if (!var_core_value_sig20C8.params["cellValue"]) {
              var_core_value_sig5055();
              return;
            }
            let var_core_value_sig2AD0 = new var_core_value_sigFD17(var_core_value_sig20C8.params["cellValue"]).getStartEndScope();
            var_core_value_sigC38F.intersects(var_core_value_sig45F0, var_core_value_sig2AD0) && var_core_value_sig5055();
            return;
          }
          if (Ta(var_core_value_sig20C8, var_core_value_sig76B6)) {
            var_core_value_sigC38F.intersects(var_core_value_sig45F0, var_core_value_sig20C8.params["range"]) && var_core_value_sig5055();
            return;
          }
          Ca(var_core_value_sig20C8) && var_core_value_sig5055();
        }
      }
    });
  }
  _watchBaseTable(var_core_value_sigBC91, var_core_value_sigCB88) {
    return this._commandService["onCommandExecuted"](var_core_value_sigBECE => {
      var_core_value_sigBECE.id === var_core_value_sig01EF.id && wa(var_core_value_sigBECE) && var_core_value_sigBECE.params["unitId"] === var_core_value_sigBC91.unit["selector"] && var_core_value_sigCB88();
    });
  }
  _readSheetRange(var_core_value_sig8D65, var_core_value_sig8122, var_core_value_sigEDC6) {
    let var_core_value_sig611A = this._univerInstanceService["getUnit"](var_core_value_sig8122, var_core_value_sig2B86.UNIVER_SHEET);
    if (!var_core_value_sig611A) throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND", {
      ref: var_core_value_sig8D65,
      unitId: var_core_value_sig8122
    });
    let var_core_value_sig6BD9 = var_core_value_sigEDC6.sheetId ? var_core_value_sig611A.getSheetBySheetId(var_core_value_sigEDC6.sheetId) : var_core_value_sig611A.getSheetBySheetName(var_core_value_sigEDC6.sheetName);
    if (!var_core_value_sig6BD9) throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_SHEET_NOT_FOUND", {
      ref: var_core_value_sig8D65,
      selector: var_core_value_sigEDC6
    });
    return {
      type: "range",
      sheetId: var_core_value_sig6BD9.getSheetId(),
      sheetName: var_core_value_sig6BD9.getName(),
      values: var_core_value_sig6BD9.getRange(Na(var_core_value_sigEDC6.range)).getValues().map(var_core_value_sig1B22 => var_core_value_sig1B22.map(var_core_value_sigF704 => Fa(var_core_value_sig511D(var_core_value_sigF704))))
    };
  }
  _readBaseTable(var_core_value_sig7E56, var_core_value_sig4161, var_core_value_sig7580) {
    let var_core_value_sig1F18 = this._univerInstanceService["getUnit"](var_core_value_sig4161, var_core_value_sig2B86.UNIVER_BASE);
    if (!var_core_value_sig1F18) throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND", {
      ref: var_core_value_sig7E56,
      unitId: var_core_value_sig4161
    });
    let var_core_value_sigD5A0 = Ia(var_core_value_sig1F18.getSnapshot().tables, var_core_value_sig7580.tableName, var_core_value_sig7580.tableId);
    if (!var_core_value_sigD5A0) throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_TABLE_NOT_FOUND", {
      ref: var_core_value_sig7E56,
      selector: var_core_value_sig7580
    });
    let var_core_value_sig81B2 = Ea(var_core_value_sigD5A0) ? var_core_value_sigD5A0 : var_core_value_sig7B39(var_core_value_sigFAFE.deepClone(var_core_value_sigD5A0)),
      var_core_value_sigA0A5 = var_core_value_sig81B2.recordOrder ?? [],
      var_core_value_sig10AA = var_core_value_sig81B2.fieldOrder;
    return {
      type: "table",
      tableName: var_core_value_sig7580.tableName,
      sheetName: var_core_value_sig81B2.name,
      sheetId: var_core_value_sig81B2.id,
      range: {
        startRow: 0,
        endRow: Math.max(0, var_core_value_sigA0A5.length - 1),
        startColumn: 0,
        endColumn: Math.max(0, var_core_value_sig10AA.length - 1)
      },
      columns: var_core_value_sig10AA.map(var_core_value_sig7F72 => {
        var var_core_value_sig7B2A;
        return ((var_core_value_sig7B2A = var_core_value_sig81B2.fields[var_core_value_sig7F72]) == null ? undefined : var_core_value_sig7B2A.name) ?? var_core_value_sig7F72;
      }),
      showHeader: false,
      values: var_core_value_sigA0A5.map(var_core_value_sig06CD => var_core_value_sig10AA.map(var_core_value_sig2BCF => var_core_value_sigDCAB(var_core_value_sig81B2, var_core_value_sig06CD, var_core_value_sig2BCF) ?? null))
    };
  }
};
ya = H([V(0, var_core_value_sigA7F0(Y)), V(1, var_core_value_sig035C), V(2, var_core_value_sig6663)], ya);
const ba = new Set([var_core_value_sig756F.id, var_core_value_sig03F7.id, var_core_value_sig4424.id, var_core_value_sig4950.id]),
  xa = new Set([var_core_value_sig89BC.id, var_core_value_sig76B6.id, ...ba]);
function Sa(var_core_value_sigCA96) {
  return !xa.has(var_core_value_sigCA96.id) || var_core_value_sigCA96.params == null || typeof var_core_value_sigCA96.params != "object" ? false : "unitId" in var_core_value_sigCA96.params && "subUnitId" in var_core_value_sigCA96.params;
}
function Ca(var_core_value_sig6C5E) {
  return ba.has(var_core_value_sig6C5E.id);
}
function wa(var_core_value_sig4997) {
  return var_core_value_sig4997.params != null && typeof var_core_value_sig4997.params == "object" && "unitId" in var_core_value_sig4997.params && "op" in var_core_value_sig4997.params;
}
function Ta(var_core_value_sig7290, var_core_value_sigE835) {
  return var_core_value_sig7290.id === var_core_value_sigE835.id && var_core_value_sig7290.params !== undefined;
}
function Ea(var_core_value_sig4644) {
  let var_core_value_sig9DED = var_core_value_sig4644.recordOrder;
  return var_core_value_sig9DED == null || var_core_value_sig9DED.length !== Object.keys(var_core_value_sig4644.records ?? {}).length ? false : var_core_value_sig4644.cellData != null && var_core_value_sig9DED.every((var_core_value_sigE6D0, var_core_value_sig8E91) => {
    var var_core_value_sig00BE, var_core_value_sig7BB5;
    return ((var_core_value_sig00BE = var_core_value_sig4644.rowIndex) == null ? undefined : var_core_value_sig00BE[var_core_value_sigE6D0]) === var_core_value_sig8E91 && ((var_core_value_sig7BB5 = var_core_value_sig4644.rowId) == null ? undefined : var_core_value_sig7BB5[var_core_value_sig8E91]) === var_core_value_sigE6D0;
  }) && var_core_value_sig4644.fieldOrder["every"]((var_core_value_sig6AAD, var_core_value_sig1157) => {
    var var_core_value_sigA694, var_core_value_sig18E01;
    return ((var_core_value_sigA694 = var_core_value_sig4644.colIndex) == null ? undefined : var_core_value_sigA694[var_core_value_sig6AAD]) === var_core_value_sig1157 && ((var_core_value_sig18E01 = var_core_value_sig4644.colId) == null ? undefined : var_core_value_sig18E01[var_core_value_sig1157]) === var_core_value_sig6AAD;
  });
}
function Da(var_core_value_sig7DE6) {
  return {
    registrationId: "local-runtime-resource-ref-unit-provider",
    match: {
      fileKinds: [P.SELF],
      unitTypes: ["sheet", "doc", "slide", "base", "board"]
    },
    priority: _a,
    provider: var_core_value_sig7DE6
  };
}
function Oa(var_core_value_sig120E) {
  return {
    registrationId: "local-runtime-resource-ref-data-provider",
    match: {
      fileKinds: [P.SELF],
      unitTypes: ["sheet", "base"]
    },
    priority: _a,
    provider: var_core_value_sig120E
  };
}
function ka(var_core_value_sigD79B) {
  if ((typeof var_core_value_sigD79B == "string" ? R(var_core_value_sigD79B) : var_core_value_sigD79B).file["kind"] !== P.SELF) throw new S("LOCAL_RUNTIME_RESOURCE_REF_UNSUPPORTED", {
    ref: var_core_value_sigD79B
  });
}
function Aa(var_core_value_sig92A3, var_core_value_sig8911) {
  if ((typeof var_core_value_sig92A3 == "string" ? R(var_core_value_sig92A3) : var_core_value_sig92A3).unit["type"] !== Ln(var_core_value_sig8911)) throw new S("LOCAL_RUNTIME_RESOURCE_REF_UNIT_TYPE_MISMATCH", {
    ref: var_core_value_sig92A3,
    unitType: var_core_value_sig8911
  });
}
function ja(var_core_value_sig8D1B) {
  return {
    file: var_core_value_sig8D1B.file,
    unit: var_core_value_sig8D1B.unit
  };
}
const Ma = /^\$?([A-Za-z]+)\$?([1-9]\d*)(?::\$?([A-Za-z]+)\$?([1-9]\d*))?$/;
function Na(var_core_value_sigA915) {
  let var_core_value_sigE1F7 = Ma.exec(var_core_value_sigA915);
  if (!var_core_value_sigE1F7) throw new S("LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", {
    range: var_core_value_sigA915
  });
  let var_core_value_sig4BE7 = Pa(var_core_value_sigE1F7[1]),
    var_core_value_sigF9FF = Number(var_core_value_sigE1F7[2]) - 1,
    var_core_value_sigE0E3 = var_core_value_sigE1F7[3] ? Pa(var_core_value_sigE1F7[3]) : var_core_value_sig4BE7,
    var_core_value_sig3AB3 = var_core_value_sigE1F7[4] ? Number(var_core_value_sigE1F7[4]) - 1 : var_core_value_sigF9FF;
  if (var_core_value_sig3AB3 < var_core_value_sigF9FF || var_core_value_sigE0E3 < var_core_value_sig4BE7) throw new S("LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", {
    range: var_core_value_sigA915
  });
  return {
    startRow: var_core_value_sigF9FF,
    endRow: var_core_value_sig3AB3,
    startColumn: var_core_value_sig4BE7,
    endColumn: var_core_value_sigE0E3
  };
}
function Pa(var_core_value_sig816E) {
  let var_core_value_sigE6F3 = 0;
  for (let var_core_value_sig0428 of var_core_value_sig816E.toUpperCase()) {
    let var_core_value_sigA5F1 = var_core_value_sig0428.charCodeAt(0);
    if (var_core_value_sigA5F1 < 65 || var_core_value_sigA5F1 > 90) throw new S("LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", {
      label: var_core_value_sig816E
    });
    var_core_value_sigE6F3 = var_core_value_sigE6F3 * 26 + var_core_value_sigA5F1 - 64;
  }
  return var_core_value_sigE6F3 - 1;
}
function Fa(var_core_value_sig3EE1) {
  return typeof var_core_value_sig3EE1 == "string" || typeof var_core_value_sig3EE1 == "number" || typeof var_core_value_sig3EE1 == "boolean" ? var_core_value_sig3EE1 : null;
}
function Ia(var_core_value_sig9673, var_core_value_sig4917, var_core_value_sig3BE6) {
  if (var_core_value_sig3BE6 && var_core_value_sig9673[var_core_value_sig3BE6]) return var_core_value_sig9673[var_core_value_sig3BE6];
  let var_core_value_sigA1C9 = var_core_value_sig9673[var_core_value_sig4917];
  if (var_core_value_sigA1C9) return var_core_value_sigA1C9;
  let var_core_value_sig77D6 = var_core_value_sig4917.trim().toLowerCase(),
    var_core_value_sigE3CE = var_core_value_sig8873({
      tables: var_core_value_sig9673
    }),
    var_core_value_sig219B = Object.values(var_core_value_sig9673).filter(var_core_value_sigBE07 => var_core_value_sigBE07.name["trim"]().toLowerCase() === var_core_value_sig77D6),
    var_core_value_sig4493 = Object.values(var_core_value_sig9673).filter(var_core_value_sig555F => {
      var var_core_value_sig3D6F;
      return ((var_core_value_sig3D6F = var_core_value_sigE3CE.get(var_core_value_sig555F.id)) == null ? undefined : var_core_value_sig3D6F.toLowerCase()) === var_core_value_sig77D6;
    });
  return var_core_value_sig4493.length === 1 ? var_core_value_sig4493[0] : var_core_value_sig219B.length === 1 ? var_core_value_sig219B[0] : undefined;
}
const La = new WeakMap();
var Q = class {
  constructor() {
    x(this, "_registrations", []);
  }
  register(var_core_value_sig336C) {
    if (this._registrations["some"](var_core_value_sig97A2 => var_core_value_sig97A2.registrationId === var_core_value_sig336C.registrationId)) throw Error("Referenced unit API resolver already registered: " + var_core_value_sig336C.registrationId);
    return this._registrations["push"](var_core_value_sig336C), var_core_value_sigA15D(() => {
      let var_core_value_sig07E9 = this._registrations["indexOf"](var_core_value_sig336C);
      var_core_value_sig07E9 >= 0 && this._registrations["splice"](var_core_value_sig07E9, 1);
    });
  }
  registerMany(var_core_value_sig6E68) {
    return var_core_value_sig6E68.map(var_core_value_sig4F59 => this.register(var_core_value_sig4F59));
  }
  resolve(var_core_value_sig8DFE) {
    let var_core_value_sig48EA = this._registrations["filter"](var_core_value_sigF564 => var_core_value_sigF564.unitType === var_core_value_sig8DFE.unitType);
    if (var_core_value_sig48EA.length > 1) throw Error("REFERENCED_UNIT_API_RESOLVER_CONFLICT");
    let var_core_value_sig5E16 = var_core_value_sig48EA[0];
    if (!var_core_value_sig5E16) throw Error("REFERENCED_UNIT_API_UNAVAILABLE");
    let var_core_value_sig09F3 = var_core_value_sig5E16.resolve(var_core_value_sig8DFE);
    if (!var_core_value_sig09F3) throw Error("REFERENCED_UNIT_API_UNAVAILABLE");
    return var_core_value_sig09F3;
  }
  list() {
    return [...this._registrations];
  }
};
function Ra() {
  return [{
    registrationId: "univer.sheet.workbook.api",
    unitType: var_core_value_sig2B86.UNIVER_SHEET,
    resolve: ({
      api: var_core_value_sig4592,
      unitId: var_core_value_sigC5C4
    }) => {
      var var_core_value_sig1617;
      return (var_core_value_sig1617 = Ha(var_core_value_sig4592, "getWorkbook")) == null ? undefined : var_core_value_sig1617(var_core_value_sigC5C4);
    }
  }, {
    registrationId: "univer.doc.document.api",
    unitType: var_core_value_sig2B86.UNIVER_DOC,
    resolve: ({
      api: var_core_value_sig4169,
      unitId: var_core_value_sig6D19
    }) => {
      var var_core_value_sig279C;
      return (var_core_value_sig279C = Ha(var_core_value_sig4169, "getDocument")) == null ? undefined : var_core_value_sig279C(var_core_value_sig6D19);
    }
  }, {
    registrationId: "univer-pro.slide.presentation.api",
    unitType: var_core_value_sig2B86.UNIVER_SLIDE,
    resolve: ({
      api: var_core_value_sigAC51,
      unitId: var_core_value_sig8986
    }) => {
      var var_core_value_sigCAF7;
      return (var_core_value_sigCAF7 = Ha(var_core_value_sigAC51, "getPresentation")) == null ? undefined : var_core_value_sigCAF7(var_core_value_sig8986);
    }
  }, {
    registrationId: "univer-pro.base.api",
    unitType: var_core_value_sig2B86.UNIVER_BASE,
    resolve: ({
      api: var_core_value_sigED1C,
      unitId: var_core_value_sig726E
    }) => {
      var var_core_value_sig2CD3;
      return (var_core_value_sig2CD3 = Ha(var_core_value_sigED1C, "getBase")) == null ? undefined : var_core_value_sig2CD3(var_core_value_sig726E);
    }
  }, {
    registrationId: "univer-pro.board.api",
    unitType: var_core_value_sig2B86.UNIVER_BOARD,
    resolve: ({
      api: var_core_value_sig038E,
      unitId: var_core_value_sigAA1E
    }) => {
      var var_core_value_sigC9F5;
      return (var_core_value_sigC9F5 = Ha(var_core_value_sig038E, "getBoard")) == null ? undefined : var_core_value_sigC9F5(var_core_value_sigAA1E);
    }
  }];
}
function za(var_core_value_sig8B9C, var_core_value_sigA35B) {
  let var_core_value_sig82DD = Va(var_core_value_sigA35B);
  if (var_core_value_sig8B9C.has(Q)) {
    let var_core_value_sig7EEA = var_core_value_sig8B9C.get(Q);
    var_core_value_sig82DD.forEach(var_core_value_sig8CFA => {
      var_core_value_sig7EEA.list().some(var_core_value_sig0D69 => var_core_value_sig0D69.registrationId === var_core_value_sig8CFA.registrationId) || var_core_value_sig7EEA.register(var_core_value_sig8CFA);
    });
    return;
  }
  let var_core_value_sigAAC7 = var_core_value_sig8B9C,
    var_core_value_sig1999 = La.get(var_core_value_sigAAC7) ?? [];
  var_core_value_sig82DD.forEach(var_core_value_sig59CE1 => {
    var_core_value_sig1999.some(var_core_value_sig2E11 => var_core_value_sig2E11.registrationId === var_core_value_sig59CE1.registrationId) || var_core_value_sig1999.push(var_core_value_sig59CE1);
  }), La.set(var_core_value_sigAAC7, var_core_value_sig1999);
}
function Ba(var_core_value_sigFB45) {
  if (!var_core_value_sigFB45.has(Q)) return;
  let var_core_value_sigB86C = La.get(var_core_value_sigFB45);
  if (!(var_core_value_sigB86C != null && var_core_value_sigB86C.length)) return;
  let var_core_value_sigD892 = var_core_value_sigFB45.get(Q);
  var_core_value_sigB86C.forEach(var_core_value_sig33C8 => {
    var_core_value_sigD892.list().some(var_core_value_sig5B69 => var_core_value_sig5B69.registrationId === var_core_value_sig33C8.registrationId) || var_core_value_sigD892.register(var_core_value_sig33C8);
  }), La.delete(var_core_value_sigFB45);
}
function Va(var_core_value_sig6086) {
  let var_core_value_sigAED2 = [];
  return var_core_value_sig6086.forEach(var_core_value_sig957F => {
    var_core_value_sigAED2.some(var_core_value_sigB098 => var_core_value_sigB098.registrationId === var_core_value_sig957F.registrationId) || var_core_value_sigAED2.push(var_core_value_sig957F);
  }), var_core_value_sigAED2;
}
function Ha(var_core_value_sig3516, var_core_value_sigCDCD) {
  let var_core_value_sig206A = var_core_value_sig3516[var_core_value_sigCDCD];
  return typeof var_core_value_sig206A == "function" ? var_core_value_sig206A.bind(var_core_value_sig3516) : undefined;
}
var Ua = class {
  constructor() {
    x(this, "_unitRegistrations", []), x(this, "_dataRegistrations", []);
  }
  registerUnitProvider(var_core_value_sig803B) {
    return this._register(this._unitRegistrations, var_core_value_sig803B, "unit");
  }
  registerDataProvider(var_core_value_sig5830) {
    return this._register(this._dataRegistrations, var_core_value_sig5830, "data");
  }
  getUnitProvider(var_core_value_sig4A7C, var_core_value_sigF975) {
    return this._get(this._unitRegistrations, var_core_value_sig4A7C, var_core_value_sigF975, "unit");
  }
  getDataProvider(var_core_value_sigCDAF, var_core_value_sigA298) {
    return this._get(this._dataRegistrations, var_core_value_sigCDAF, var_core_value_sigA298, "data");
  }
  listUnitProviders() {
    return [...this._unitRegistrations];
  }
  listDataProviders() {
    return [...this._dataRegistrations];
  }
  _register(var_core_value_sig0B40, var_core_value_sig330B, var_core_value_sig3625) {
    if (var_core_value_sig0B40.some(var_core_value_sigCE71 => var_core_value_sigCE71.registrationId === var_core_value_sig330B.registrationId)) throw Error("Embed IResourceRef " + var_core_value_sig3625 + "\x20provider\x20already\x20registered:\x20" + var_core_value_sig330B.registrationId);
    return var_core_value_sig0B40.push(var_core_value_sig330B), var_core_value_sigA15D(() => {
      let var_core_value_sig21D8 = var_core_value_sig0B40.indexOf(var_core_value_sig330B);
      var_core_value_sig21D8 >= 0 && var_core_value_sig0B40.splice(var_core_value_sig21D8, 1);
    });
  }
  _get(var_core_value_sig0B4E, var_core_value_sig0E9F, var_core_value_sigE5BA, var_core_value_sig4A83) {
    let var_core_value_sig58AA = var_core_value_sig0B4E.filter(var_core_value_sig2B65 => this._matches(var_core_value_sig2B65.match, var_core_value_sig0E9F, var_core_value_sigE5BA));
    if (var_core_value_sig58AA.length === 0) return;
    let var_core_value_sig84C4 = Math.max(...var_core_value_sig58AA.map(var_core_value_sigD7EA => var_core_value_sigD7EA.priority ?? 0)),
      var_core_value_sigB6F7 = var_core_value_sig58AA.filter(var_core_value_sigB33B => (var_core_value_sigB33B.priority ?? 0) === var_core_value_sig84C4);
    if (var_core_value_sigB6F7.length > 1) throw new J("provider-conflict", {
      capability: var_core_value_sig4A83,
      registrationIds: var_core_value_sigB6F7.map(var_core_value_sig24B9 => "registrationId" in var_core_value_sig24B9 ? var_core_value_sig24B9.registrationId : undefined)
    });
    return var_core_value_sigB6F7[0];
  }
  _matches(var_core_value_sigB495, var_core_value_sig70D0, var_core_value_sig2A8A) {
    if (var_core_value_sigB495.fileKinds && !var_core_value_sigB495.fileKinds["includes"](var_core_value_sig70D0.file["kind"])) return false;
    if (var_core_value_sigB495.uriSchemes) {
      if (var_core_value_sig70D0.file["kind"] !== P.URI) return false;
      let var_core_value_sigE627 = Wa(var_core_value_sig70D0.file["uri"]);
      if (!var_core_value_sigE627 || !var_core_value_sigB495.uriSchemes["some"](var_core_value_sig480E => var_core_value_sig480E.toLowerCase() === var_core_value_sigE627)) return false;
    }
    return !(var_core_value_sigB495.unitTypes && !var_core_value_sigB495.unitTypes["includes"](var_core_value_sig2A8A ?? var_core_value_sig70D0.unit["type"]) || var_core_value_sigB495.unitSelectors && !var_core_value_sigB495.unitSelectors["includes"](var_core_value_sig70D0.unit["selector"]));
  }
};
function Wa(var_core_value_sig1EFE) {
  var var_core_value_sig9904;
  return (var_core_value_sig9904 = /^([a-z][a-z0-9+.-]*):/i.exec(var_core_value_sig1EFE)) == null || (var_core_value_sig9904 = var_core_value_sig9904[1]) == null ? undefined : var_core_value_sig9904.toLowerCase();
}
let Ga = class {
  constructor(var_core_value_sig3782) {
    this._resourceRefProviderRegistry = var_core_value_sig3782, x(this, "_loadStates", new Map()), x(this, "_loadStatesByRuntimeUnitId", new Map()), x(this, "_usageCounts", new Map());
  }
  ensure(var_core_value_sigD22E, var_core_value_sig3455 = {}) {
    let var_core_value_sig5CEF = I(var_core_value_sigD22E),
      var_core_value_sig43D5 = this._resolveUnitType(var_core_value_sig5CEF, var_core_value_sig3455.unitType),
      var_core_value_sig1395 = this._getUnitLoadKey(var_core_value_sig5CEF, var_core_value_sig43D5),
      var_core_value_sig9FA0 = this._loadStates["get"](var_core_value_sig1395);
    if (var_core_value_sig9FA0) return this._withOptionalAbort(var_core_value_sig9FA0.providerLoadPromise, var_core_value_sig3455.signal);
    let var_core_value_sig055E = this._getUnitProvider(var_core_value_sig5CEF, var_core_value_sig43D5),
      var_core_value_sig7C77 = this._createLoadState({
        ref: var_core_value_sig5CEF,
        unitType: var_core_value_sig43D5,
        unitLoadKey: var_core_value_sig1395,
        provider: var_core_value_sig055E,
        createOptions: var_core_value_sig3455.createOptions ?? et,
        signal: var_core_value_sig3455.signal
      });
    return this._withOptionalAbort(var_core_value_sig7C77.providerLoadPromise, var_core_value_sig3455.signal);
  }
  async readData(var_core_value_sig9578, var_core_value_sigA2D31 = {}) {
    let var_core_value_sigC218 = I(var_core_value_sig9578),
      var_core_value_sigADEC = Cn(var_core_value_sigC218.part) ? "range" : wn(var_core_value_sigC218.part) ? "table" : undefined;
    if (!var_core_value_sigADEC) throw new J("missing-data-selector", {
      ref: var_core_value_sigC218
    });
    let var_core_value_sig3D8E = var_core_value_sigC218.part,
      var_core_value_sig37E5 = this._resolveUnitType(var_core_value_sigC218, undefined),
      var_core_value_sigF079 = this._resourceRefProviderRegistry["getDataProvider"](var_core_value_sigC218, var_core_value_sigC218.unit["type"]);
    if (!var_core_value_sigF079) throw new J("provider-missing", {
      capability: "data",
      ref: var_core_value_sigC218,
      unitType: var_core_value_sig37E5
    });
    return var_core_value_sigF079.provider["readData"]({
      ref: var_core_value_sigC218,
      unitType: var_core_value_sig37E5,
      dataType: var_core_value_sigADEC,
      selector: var_core_value_sig3D8E,
      signal: var_core_value_sigA2D31.signal
    });
  }
  watchData(var_core_value_sigFCA0, var_core_value_sigC84D) {
    let var_core_value_sigF2BC = I(var_core_value_sigFCA0),
      var_core_value_sigD37B = Cn(var_core_value_sigF2BC.part) ? "range" : wn(var_core_value_sigF2BC.part) ? "table" : undefined;
    if (!var_core_value_sigD37B) throw new J("missing-data-selector", {
      ref: var_core_value_sigF2BC
    });
    let var_core_value_sigFA28 = this._resolveUnitType(var_core_value_sigF2BC, undefined),
      var_core_value_sig93BE = this._resourceRefProviderRegistry["getDataProvider"](var_core_value_sigF2BC, var_core_value_sigF2BC.unit["type"]);
    if (!var_core_value_sig93BE) throw new J("provider-missing", {
      capability: "data",
      ref: var_core_value_sigF2BC,
      unitType: var_core_value_sigFA28
    });
    if (var_core_value_sig93BE.provider["watchData"]) return var_core_value_sig93BE.provider["watchData"]({
      ref: var_core_value_sigF2BC,
      unitType: var_core_value_sigFA28,
      dataType: var_core_value_sigD37B,
      selector: var_core_value_sigF2BC.part
    }, var_core_value_sigC84D);
  }
  addUsage(var_core_value_sigABEC, var_core_value_sig2712, var_core_value_sig0B9E = 1) {
    let var_core_value_sigC545 = this._getUsageKey(var_core_value_sigABEC, var_core_value_sig2712);
    this._usageCounts["set"](var_core_value_sigC545, (this._usageCounts["get"](var_core_value_sigC545) ?? 0) + var_core_value_sig0B9E);
    let var_core_value_sig12A7 = false;
    return var_core_value_sigA15D(() => {
      if (var_core_value_sig12A7) return;
      var_core_value_sig12A7 = true;
      let var_core_value_sigEF3E = (this._usageCounts["get"](var_core_value_sigC545) ?? 0) - var_core_value_sig0B9E;
      if (var_core_value_sigEF3E <= 0) {
        this._usageCounts["delete"](var_core_value_sigC545);
        return;
      }
      this._usageCounts["set"](var_core_value_sigC545, var_core_value_sigEF3E);
    });
  }
  releaseUnit(var_core_value_sig6F4E) {
    for (let [var_core_value_sig273D] of this._usageCounts) {
      let [var_core_value_sig26DB, var_core_value_sigF0F9] = JSON.parse(var_core_value_sig273D);
      (var_core_value_sig26DB === var_core_value_sig6F4E || var_core_value_sigF0F9 === var_core_value_sig6F4E) && this._usageCounts["delete"](var_core_value_sig273D);
    }
    for (let var_core_value_sig9A0D of this._loadStates["values"]()) {
      var var_core_value_sigA021;
      ((var_core_value_sigA021 = var_core_value_sig9A0D.record) == null ? undefined : var_core_value_sigA021.unitId) === var_core_value_sig6F4E && this._removeLoadState(var_core_value_sig9A0D);
    }
  }
  _getUnitProvider(var_core_value_sig49D9, var_core_value_sig320C) {
    let var_core_value_sigE7F0 = this._resourceRefProviderRegistry["getUnitProvider"](var_core_value_sig49D9, Ln(var_core_value_sig320C));
    if (!var_core_value_sigE7F0) throw new J("provider-missing", {
      capability: "unit",
      ref: var_core_value_sig49D9,
      unitType: var_core_value_sig320C
    });
    return var_core_value_sigE7F0.provider;
  }
  _createLoadState(var_core_value_sigE837) {
    let var_core_value_sig34F4 = {
      unitLoadKey: var_core_value_sigE837.unitLoadKey,
      ref: var_core_value_sigE837.ref,
      token: Symbol(var_core_value_sigE837.unitLoadKey),
      providerLoadPromise: Promise.resolve(null)
    };
    return this._addLoadState(var_core_value_sig34F4), var_core_value_sig34F4.providerLoadPromise = Promise.resolve().then(() => var_core_value_sigE837.provider["ensureUnit"]({
      ref: var_core_value_sigE837.ref,
      unitType: var_core_value_sigE837.unitType,
      createOptions: var_core_value_sigE837.createOptions,
      signal: var_core_value_sigE837.signal
    })).then(var_core_value_sigA319 => {
      if (var_core_value_sigA319.unitType !== var_core_value_sigE837.unitType) throw new J("unit-type-mismatch", {
        expected: var_core_value_sigE837.unitType,
        actual: var_core_value_sigA319.unitType
      });
      let var_core_value_sig2D58 = {
        ref: this._formatUnitRef(var_core_value_sigE837.ref),
        unitId: var_core_value_sigA319.unitId,
        unitType: var_core_value_sigA319.unitType
      };
      return this._loadStates["get"](var_core_value_sig34F4.unitLoadKey) === var_core_value_sig34F4 && (var_core_value_sig34F4.record = var_core_value_sig2D58, this._addRuntimeUnitLoadState(var_core_value_sig2D58.unitId, var_core_value_sig34F4)), var_core_value_sig2D58;
    }).catch(var_core_value_sig223F => {
      throw this._removeLoadState(var_core_value_sig34F4), var_core_value_sig223F;
    }), var_core_value_sig34F4;
  }
  _addLoadState(var_core_value_sigA45D) {
    this._loadStates["set"](var_core_value_sigA45D.unitLoadKey, var_core_value_sigA45D);
  }
  _removeLoadState(var_core_value_sig1BC7) {
    if (this._loadStates["get"](var_core_value_sig1BC7.unitLoadKey) === var_core_value_sig1BC7 && this._loadStates["delete"](var_core_value_sig1BC7.unitLoadKey), var_core_value_sig1BC7.record) {
      let var_core_value_sigD749 = this._loadStatesByRuntimeUnitId["get"](var_core_value_sig1BC7.record["unitId"]);
      var_core_value_sigD749 == null || var_core_value_sigD749.delete(var_core_value_sig1BC7), (var_core_value_sigD749 == null ? undefined : var_core_value_sigD749.size) === 0 && this._loadStatesByRuntimeUnitId["delete"](var_core_value_sig1BC7.record["unitId"]);
    }
  }
  _addRuntimeUnitLoadState(var_core_value_sig4956, var_core_value_sigCC9E) {
    let var_core_value_sig444C = this._loadStatesByRuntimeUnitId["get"](var_core_value_sig4956);
    var_core_value_sig444C || (var_core_value_sig444C = new Set(), this._loadStatesByRuntimeUnitId["set"](var_core_value_sig4956, var_core_value_sig444C)), var_core_value_sig444C.add(var_core_value_sigCC9E);
  }
  _withOptionalAbort(var_core_value_sigE42E, var_core_value_sigF039) {
    return var_core_value_sigF039 ? this._withAbort(var_core_value_sigE42E, var_core_value_sigF039) : var_core_value_sigE42E;
  }
  _withAbort(var_core_value_sigA321, var_core_value_sigBF4C) {
    return var_core_value_sigBF4C.aborted ? Promise.reject(Error("REFERENCED_UNIT_LOAD_ABORTED")) : new Promise((var_core_value_sigCFFA, var_core_value_sig58C1) => {
      let var_core_value_sig5090 = () => {
        var_core_value_sigBF4C.removeEventListener("abort", var_core_value_sig5090), var_core_value_sig58C1(Error("REFERENCED_UNIT_LOAD_ABORTED"));
      };
      var_core_value_sigBF4C.addEventListener("abort", var_core_value_sig5090, {
        once: true
      }), var_core_value_sigA321.then(var_core_value_sig1A0F => {
        var_core_value_sigBF4C.removeEventListener("abort", var_core_value_sig5090), var_core_value_sigCFFA(var_core_value_sig1A0F);
      }, var_core_value_sigFBA4 => {
        var_core_value_sigBF4C.removeEventListener("abort", var_core_value_sig5090), var_core_value_sig58C1(var_core_value_sigFBA4);
      });
    });
  }
  _getUnitLoadKey(var_core_value_sig3457, var_core_value_sig4A08) {
    return JSON.stringify([L(var_core_value_sig3457), var_core_value_sig4A08]);
  }
  _getUsageKey(var_core_value_sig1BC4, var_core_value_sig9EAB) {
    return JSON.stringify([var_core_value_sig1BC4, var_core_value_sig9EAB]);
  }
  _resolveUnitType(var_core_value_sigA5C3, var_core_value_sig3A1E) {
    let var_core_value_sigDC92 = B(var_core_value_sigA5C3.unit["type"]);
    if (var_core_value_sig3A1E !== undefined && var_core_value_sig3A1E !== var_core_value_sig2B86.UNRECOGNIZED && var_core_value_sig3A1E !== var_core_value_sigDC92) throw new J("unit-type-mismatch", {
      expected: var_core_value_sig3A1E,
      actual: var_core_value_sigDC92
    });
    return var_core_value_sigDC92;
  }
  _formatUnitRef(var_core_value_sig3515) {
    return Tn({
      file: var_core_value_sig3515.file,
      unit: var_core_value_sig3515.unit
    });
  }
};
Ga = H([V(0, var_core_value_sigA7F0(Ua))], Ga);
var Ka = class {
  constructor() {
    x(this, "_policy", "none");
  }
  getPolicy() {
    return this._policy;
  }
  enableExclusivePolicy() {
    this._policy = "exclusive";
  }
};
let qa = class {
  constructor(var_core_value_sigC2A0, var_core_value_sig7C65, var_core_value_sig7F05, var_core_value_sig41F3, var_core_value_sigF455) {
    this._modelService = var_core_value_sigC2A0, this._unitLeaseService = var_core_value_sig7C65, this._unitLeasePolicyService = var_core_value_sig7F05, this._referencedUnitManager = var_core_value_sig41F3, this._univerInstanceService = var_core_value_sigF455, x(this, "_materializingDescriptors", new Map());
  }
  async materializeDescriptor(var_core_value_sig6E78) {
    let var_core_value_sigB3EE = this._getLoadedDescriptorState(var_core_value_sig6E78.descriptor);
    if (var_core_value_sigB3EE) return var_core_value_sigB3EE.stored ? (this._leaseMaterializedDescriptor(var_core_value_sigB3EE.descriptor), var_core_value_sigB3EE.descriptor) : this._commitMaterializedDescriptor(var_core_value_sigB3EE.descriptor);
    let var_core_value_sigC50A = this._getMaterializeKey(var_core_value_sig6E78.descriptor),
      var_core_value_sig11D0 = this._materializingDescriptors["get"](var_core_value_sigC50A);
    if (var_core_value_sig11D0) return var_core_value_sig11D0;
    let var_core_value_sigB8ED = this._loadAndCommitDescriptor(var_core_value_sig6E78);
    this._materializingDescriptors["set"](var_core_value_sigC50A, var_core_value_sigB8ED);
    let var_core_value_sig8EAE = () => {
      this._materializingDescriptors["get"](var_core_value_sigC50A) === var_core_value_sigB8ED && this._materializingDescriptors["delete"](var_core_value_sigC50A);
    };
    return var_core_value_sigB8ED.then(var_core_value_sig8EAE, var_core_value_sig8EAE), var_core_value_sigB8ED;
  }
  async _loadAndCommitDescriptor(var_core_value_sig1CDD) {
    return this._commitMaterializedDescriptor(await this._loadDescriptor(var_core_value_sig1CDD));
  }
  async _loadDescriptor(var_core_value_sig0DB11) {
    let var_core_value_sig68A2 = var_core_value_sig0DB11.descriptor,
      var_core_value_sigCC17 = await this._referencedUnitManager["ensure"](var_core_value_sig68A2.source["ref"], {
        unitType: var_core_value_sig68A2.childType,
        signal: var_core_value_sig0DB11.signal,
        createOptions: var_core_value_sig0DB11.createOptions ?? et
      });
    return {
      ...var_core_value_sig68A2,
      source: {
        unitType: var_core_value_sig68A2.childType,
        ref: var_core_value_sigCC17.ref,
        ...(var_core_value_sig68A2.source["creationConfig"] === undefined ? undefined : {
          creationConfig: var_core_value_sig68A2.source["creationConfig"]
        })
      },
      childUnitId: var_core_value_sigCC17.unitId,
      childType: var_core_value_sigCC17.unitType
    };
  }
  _commitMaterializedDescriptor(var_core_value_sig32AE) {
    let var_core_value_sigC753;
    try {
      return var_core_value_sigC753 = this._leaseMaterializedDescriptor(var_core_value_sig32AE), this._modelService["addDescriptor"](var_core_value_sig32AE.hostUnitId, var_core_value_sig32AE), this._modelService["getDescriptor"](var_core_value_sig32AE.hostUnitId, var_core_value_sig32AE.embedId);
    } catch (var_core_value_sigC368) {
      throw var_core_value_sigC753 == null || var_core_value_sigC753.dispose(), var_core_value_sigC368;
    }
  }
  _leaseMaterializedDescriptor(var_core_value_sigFFD1) {
    if (!var_core_value_sigFFD1.childUnitId || var_core_value_sigFFD1.childType == null || this._unitLeasePolicyService["getPolicy"]() !== "exclusive") return;
    let var_core_value_sig81AE = this._getDescriptorOwner(var_core_value_sigFFD1);
    if (!this._unitLeaseService["hasLease"](var_core_value_sig81AE, var_core_value_sigFFD1.childUnitId)) return this._unitLeaseService["acquire"]({
      ...var_core_value_sig81AE,
      childUnitId: var_core_value_sigFFD1.childUnitId,
      childType: var_core_value_sigFFD1.childType
    });
  }
  _getLoadedDescriptorState(var_core_value_sigF79F) {
    let var_core_value_sig0E54 = this._modelService["getDescriptor"](var_core_value_sigF79F.hostUnitId, var_core_value_sigF79F.embedId),
      var_core_value_sig3B17 = var_core_value_sig0E54 ?? var_core_value_sigF79F;
    if (!(!var_core_value_sig3B17.childUnitId || var_core_value_sig3B17.childType == null)) {
      if (this._univerInstanceService["getUnitType"](var_core_value_sig3B17.childUnitId) !== var_core_value_sig3B17.childType) throw new S("EMBED_MATERIALIZED_CHILD_UNIT_NOT_LOADED", {
        hostUnitId: var_core_value_sig3B17.hostUnitId,
        embedId: var_core_value_sig3B17.embedId,
        childUnitId: var_core_value_sig3B17.childUnitId,
        childType: var_core_value_sig3B17.childType
      });
      return {
        descriptor: var_core_value_sig3B17,
        stored: var_core_value_sig0E54 != null
      };
    }
  }
  _getMaterializeKey(var_core_value_sig6C4A) {
    return JSON.stringify([var_core_value_sig6C4A.hostUnitId, var_core_value_sig6C4A.embedId, var_core_value_sig6C4A.childType, z(var_core_value_sig6C4A.source["ref"])]);
  }
  _getDescriptorOwner(var_core_value_sig73D9) {
    return {
      hostUnitId: var_core_value_sig73D9.hostUnitId,
      embedId: var_core_value_sig73D9.embedId
    };
  }
};
qa = H([V(0, var_core_value_sigA7F0(U)), V(1, var_core_value_sigA7F0(Rn)), V(2, var_core_value_sigA7F0(Ka)), V(3, var_core_value_sigA7F0(Y)), V(4, var_core_value_sig035C)], qa);
const Ja = var_core_value_sigB9C5("embed.referenced-unit-catalog.service");
var Ya = class {
  constructor(var_core_value_sigEAF8) {
    this._instanceService = var_core_value_sigEAF8;
  }
  async listUnits(var_core_value_sig0455) {
    return var_core_value_sig0455 === var_core_value_sig2B86.UNIVER_SHEET ? this._instanceService["getAllUnitsForType"](var_core_value_sig0455).map(var_core_value_sigAD561 => ({
      name: var_core_value_sigAD561.name,
      ref: Qa(var_core_value_sigAD561.getUnitId(), var_core_value_sig0455)
    })) : this._instanceService["getAllUnitsForType"](var_core_value_sig0455).map(var_core_value_sigDB4A => ({
      name: var_core_value_sigDB4A.getSnapshot().name,
      ref: Qa(var_core_value_sigDB4A.getUnitId(), var_core_value_sig0455)
    }));
  }
  async loadUnit(var_core_value_sig737C) {
    if (var_core_value_sig737C.ref["file"].kind !== P.SELF) throw Error("REFERENCED_UNIT_SOURCE_UNSUPPORTED");
    let var_core_value_sig5AF5;
    try {
      var_core_value_sig5AF5 = B(var_core_value_sig737C.ref["unit"].type);
    } catch {
      throw Error("REFERENCED_UNIT_SOURCE_UNSUPPORTED");
    }
    if (var_core_value_sig5AF5 === var_core_value_sig2B86.UNIVER_SHEET) {
      let var_core_value_sig6418 = this._instanceService["getUnit"](var_core_value_sig737C.ref["unit"].selector, var_core_value_sig5AF5);
      if (var_core_value_sig6418) return var_core_value_sig6418.getSnapshot();
    } else {
      if (var_core_value_sig5AF5 === var_core_value_sig2B86.UNIVER_BASE) {
        let var_core_value_sig4383 = this._instanceService["getUnit"](var_core_value_sig737C.ref["unit"].selector, var_core_value_sig5AF5);
        if (var_core_value_sig4383) return var_core_value_sig4383.getSnapshot();
      } else throw Error("REFERENCED_UNIT_SOURCE_UNSUPPORTED");
    }
    throw Error("REFERENCED_UNIT_NOT_FOUND");
  }
};
let Xa = class extends var_core_value_sig97E2 {
  constructor(var_core_value_sig9DE4) {
    super(), x(this, "_loadedSource", undefined), x(this, "_sources", []), x(this, "_unitOwners", new Map()), this._loadedSource = new Ya(var_core_value_sig9DE4);
  }
  registerSource(var_core_value_sig77FA) {
    return this._sources["push"](var_core_value_sig77FA), var_core_value_sigA15D(() => {
      let var_core_value_sig1896 = this._sources["indexOf"](var_core_value_sig77FA);
      var_core_value_sig1896 >= 0 && this._sources["splice"](var_core_value_sig1896, 1);
      for (let [var_core_value_sig186C, var_core_value_sigD955] of this._unitOwners) var_core_value_sigD955 === var_core_value_sig77FA && this._unitOwners["delete"](var_core_value_sig186C);
    });
  }
  async listUnits(var_core_value_sigA4A7) {
    let var_core_value_sigA4DF = [],
      var_core_value_sigCC9D = new Set();
    await this._appendSourceUnits(this._loadedSource, var_core_value_sigA4A7, var_core_value_sigA4DF, var_core_value_sigCC9D);
    for (let var_core_value_sig0285 of this._sources) try {
      await this._appendSourceUnits(var_core_value_sig0285, var_core_value_sigA4A7, var_core_value_sigA4DF, var_core_value_sigCC9D);
    } catch {}
    return var_core_value_sigA4DF;
  }
  async loadUnit(var_core_value_sig90F5) {
    let var_core_value_sigD2BA = this._unitOwners["get"](L(var_core_value_sig90F5.ref));
    if (!var_core_value_sigD2BA) throw Error("REFERENCED_UNIT_NOT_LISTED");
    return var_core_value_sigD2BA.loadUnit(var_core_value_sig90F5);
  }
  async _appendSourceUnits(var_core_value_sigCD3A, var_core_value_sig519D, var_core_value_sigC7E7, var_core_value_sig6E1C) {
    let var_core_value_sigFABC = await var_core_value_sigCD3A.listUnits(var_core_value_sig519D);
    var_core_value_sigCD3A !== this._loadedSource && !this._sources["includes"](var_core_value_sigCD3A) || var_core_value_sigFABC.forEach(var_core_value_sig777D => {
      if (!Za(var_core_value_sig777D, var_core_value_sig519D)) return;
      let var_core_value_sig3F4C = L(var_core_value_sig777D.ref);
      var_core_value_sig6E1C.has(var_core_value_sig3F4C) || (var_core_value_sig6E1C.add(var_core_value_sig3F4C), this._unitOwners["set"](var_core_value_sig3F4C, var_core_value_sigCD3A), var_core_value_sigC7E7.push(var_core_value_sig777D));
    });
  }
};
Xa = H([V(0, var_core_value_sig035C)], Xa);
function Za(var_core_value_sig39C7, var_core_value_sigA022) {
  try {
    return B(var_core_value_sig39C7.ref["unit"].type) === var_core_value_sigA022;
  } catch {
    return false;
  }
}
function Qa(var_core_value_sig913A, var_core_value_sig991D) {
  return {
    file: {
      kind: P.SELF
    },
    unit: {
      selector: var_core_value_sig913A,
      type: Ln(var_core_value_sig991D)
    }
  };
}
let $ = class extends var_core_value_sigA5E0 {
  constructor(var_core_value_sig413D = xr, var_core_value_sig5BCE, var_core_value_sig8EF01, var_core_value_sig78AC) {
    super(), this._config = var_core_value_sig413D, this._injector = var_core_value_sig5BCE, this._commandService = var_core_value_sig8EF01, this._configService = var_core_value_sig78AC;
    let {
      ...var_core_value_sig4CEF
    } = var_core_value_sig1610({}, xr, this._config);
    this._configService["setConfig"]("embed.config", var_core_value_sig4CEF);
  }
  onStarting() {
    this._registerDependencies(), this._registerReferencedUnitSources(), this._flushPendingContributions();
    let var_core_value_sigD57D = this._injector["get"](W);
    var_core_value_sigD57D.list().length === 0 && var_core_value_sigD57D.registerMany(Un()), kr().forEach(var_core_value_sigD65A => {
      var_core_value_sigD57D.getCapability(var_core_value_sigD65A) || var_core_value_sigD57D.register(var_core_value_sigD65A);
    }), la(this._injector), this._flushPendingContributions();
    let var_core_value_sig2CC7 = this._injector["get"](Ua);
    this.disposeWithMe(var_core_value_sig2CC7.registerUnitProvider(Da(this._injector["get"](va)))), this.disposeWithMe(var_core_value_sig2CC7.registerDataProvider(Oa(this._injector["get"](ya)))), (this._config["resourceRefUnitProviderRegistrations"] ?? []).forEach(var_core_value_sig5A13 => this.disposeWithMe(var_core_value_sig2CC7.registerUnitProvider(var_core_value_sig5A13))), (this._config["resourceRefDataProviderRegistrations"] ?? []).forEach(var_core_value_sigF593 => this.disposeWithMe(var_core_value_sig2CC7.registerDataProvider(var_core_value_sigF593)));
    let var_core_value_sig4784 = this._injector["get"](Q);
    Ra().forEach(var_core_value_sig3607 => {
      var_core_value_sig4784.list().some(var_core_value_sig48BD => var_core_value_sig48BD.unitType === var_core_value_sig3607.unitType) || this.disposeWithMe(var_core_value_sig4784.register(var_core_value_sig3607));
    }), this._flushPendingContributions(), var_core_value_sig7E90(this._injector, [[U], [ua], [K], [M], [q], [da], [Ua], [Ja], [Q], [Y], [Ka], [Rn], [qa], [va], [ya], [Jn], [G], [Cr]]), [zn, Bn, yr, br, _r, vr, lr, ur, dr, fr, pr, mr].forEach(var_core_value_sigB512 => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigB512)));
  }
  _registerReferencedUnitSources() {
    let var_core_value_sigC39E = this._injector["get"](Ja);
    this.disposeWithMe(var_core_value_sigC39E), (this._config["referencedUnitSources"] ?? []).forEach(var_core_value_sigF2E6 => {
      this.disposeWithMe(var_core_value_sigC39E.registerSource(var_core_value_sigF2E6));
    });
  }
  _registerDependencies() {
    [[U], [ua], [W], [K], [M], [q], [da], [fa], [Ua], [Ja, {
      useClass: Xa
    }], [Q], [Y, {
      useClass: Ga
    }], [Ka], [Rn], [qa], [va], [ya], [Jn], [qn], [G], [Cr]].forEach(var_core_value_sig34C8 => this._injector["add"](var_core_value_sig34C8));
  }
  onReady() {
    this._flushPendingContributions(), this._injector["has"](var_core_value_sigFF9C) && this.disposeWithMe(this._injector["get"](var_core_value_sigFF9C).register(this._injector["get"](fa)));
  }
  _flushPendingContributions() {
    Gn(this._injector), Zn(this._injector), Ba(this._injector);
  }
};
x($, "pluginName", "UNIVER_EMBED_PLUGIN"), x($, "packageName", hr), x($, "version", gr), x($, "type", var_core_value_sig2B86.UNIVER_UNKNOWN), $ = H([var_core_value_sig1257(var_core_value_sigC0FE), V(1, var_core_value_sigA7F0(var_core_value_sig6AE2)), V(2, var_core_value_sig6663), V(3, var_core_value_sigB250)], $);
export { Qe as CREATE_EMBED_HOST_ANCHOR_MUTATION_ID, lr as CreateEmbedCommand, rt as DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY, nt as DEFAULT_EMBED_FLOAT_LAYOUT_POLICY, tt as DEFAULT_EMBED_TAB_LAYOUT_POLICY, et as EMBED_CHILD_CREATE_OPTIONS, xt as EMBED_SHEETS_FLOATING_COMPONENT_KEY, W as EmbedCapabilityRegistryService, G as EmbedCreationService, S as EmbedError, st as EmbedErrorCode, da as EmbedFocusOwnerService, fa as EmbedFormulaReferenceDataProvider, K as EmbedHostAdapterRegistryService, M as EmbedHostAnchorModelService, b as EmbedHostEntryEnum, U as EmbedModelService, Q as EmbedReferencedUnitApiResolverRegistryService, qa as EmbedReferencedUnitMaterializeService, Ua as EmbedResourceRefProviderRegistryService, Ka as EmbedUnitLeasePolicyService, Ja as IReferencedUnitCatalogService, Y as IReferencedUnitManagerService, $e as REMOVE_EMBED_HOST_ANCHOR_MUTATION_ID, y as REMOVE_EMBED_HOST_ANCHOR_RECORD_MUTATION_ID, P as RESOURCE_REF_FILE_KIND, Sr as ReferencedUnitDataType, dr as RemoveEmbedCommand, F as ResourceRefError, _n as ResourceRefErrorCode, v as SET_EMBED_HOST_ANCHOR_RECORD_MUTATION_ID, pr as SetEmbedBoundsCommand, zn as SetEmbedDescriptorMutation, fr as SetEmbedDisplayTargetCommand, mr as SetEmbedSheetPlacementCommand, Bn as SoftDeleteEmbedDescriptorMutation, $ as UniverEmbedPlugin, Ar as createBasesTableListBlockHostAdapterContribution, Wr as createBoardsFloatingObjectHostAdapterContribution, Wn as createDefaultEmbedSourceMeta, oi as createDocsCustomBlockHostAdapterContribution, kr as createProEmbedProductCapabilities, Ii as createSlidesFloatingObjectHostAdapterContribution, Ri as createSlidesPageListBlockHostAdapterContribution, B as fromResourceRefUnitType, Ci as getEmbedSheetsTabCustomData, In as getResourceRefInputUnitSelector, L as getResourceRefUnitKey, Cn as isResourceRefRangePart, wn as isResourceRefTablePart, I as normalizeResourceRefInput, Pn as normalizeResourceRefLocator, R as parseResourceRef, Xn as registerEmbedHostAdapterContributions, za as registerReferencedUnitApiResolvers, Ln as toResourceRefUnitType };
