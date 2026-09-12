import {
  BooleanNumber as _0x1b8c8d,
  CommandType as _0x2348ed,
  DependentOn as _0x33031c,
  Disposable as _0x10b325,
  DrawingTypeEnum as _0x41274d,
  ICommandService as _0xf66d63,
  IConfigService as _0x9c1dd4,
  IResourceManagerService as _0x21d4e7,
  IUndoRedoService as _0x33b01c,
  IUniverInstanceService as _0x2f4124,
  Inject as _0x2702ca,
  Injector as _0x16cc1b,
  ObjectMatrix as _0x3277a5,
  Plugin as _0xe7e457,
  Rectangle as _0x4d816b,
  Tools as _0x36b85f,
  UniverInstanceType as _0x34bdbd,
  createBaseFormulaTableNameMap as _0x1003c6,
  createIdentifier as _0x186af1,
  getOriginCellValue as _0x27cc09,
  merge as _0x563418,
  sequenceExecute as _0x4a4b2d,
  toDisposable as _0x50161f,
  touchDependencies as _0x21a20a,
} from "@univerjs/core";
import {
  InsertColMutation as _0x6ec2eb,
  InsertRowMutation as _0x5ab48e,
  InsertSheetMutation as _0x27cc61,
  RemoveColMutation as _0x3ba504,
  RemoveRowMutation as _0x2a9fa9,
  RemoveSheetMutation as _0x3cc0a2,
  ReorderRangeMutation as _0x1dd7a6,
  SetRangeValuesMutation as _0x7e42e0,
  SheetSkeletonService as _0x1d1ba6,
} from "@univerjs/sheets";
import {
  DrawingApplyType as _0x3e9316,
  ISheetDrawingService as _0x307455,
  SetDrawingApplyMutation as _0x33c295,
  SheetDrawingAnchorType as _0x2821de,
  applySheetDrawingPlacement as _0x4cbe76,
  getSheetDrawingPlacement as _0x17ccd8,
} from "@univerjs/sheets-drawing";
import {
  IFormulaReferenceDataProviderRegistry as _0x9f6bd6,
  createUnavailableReferenceDataResponse as _0x3cd38d,
} from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin as _0x52b33d } from "@univerjs-pro/license";
import {
  AddBoardElementMutation as _0x36d28f,
  IBoardElementService as _0x315fa1,
  RemoveBoardElementMutation as _0x2a43ef,
  UpdateBoardElementMutation as _0x420fe0,
  collectBoardElementIdsForRemoveWithBoundConnectors as _0x3ecab1,
  createEmbedBoardsFloatingElement as _0x2680b3,
  isEmbedBoardsFloatingElement as _0x31b9f2,
} from "@univerjs-pro/boards";
import {
  AddSlideElementMutation as _0x50d571,
  AddSlidePageMutation as _0xc57942,
  ISlideDrawingService as _0xc8c674,
  RemoveSlideElementMutation as _0x27b7c9,
  RemoveSlidePageMutation as _0x59f625,
  UpdateSlideElementMutation as _0x54b460,
  createEmbedSlidesFloatingElement as _0x4fe993,
  createEmbedSlidesPage as _0x1b0f51,
  getEmbedSlidesFloatingCustomData as _0x49ae7f,
  resolvedSlideLayersToDrawingMap as _0x53da91,
} from "@univerjs-pro/slides";
import { IDrawingManagerService as _0xea53dd } from "@univerjs/drawing";
import {
  ApplyBaseJson1Mutation as _0x4c531d,
  BaseJson1OpApplier as _0x17fffe,
  createEmbedBasesTable as _0x3e5f32,
  createEmbedBasesTableAddMutation as _0xe2de9b,
  createEmbedBasesTableRemoveMutation as _0x428cfd,
  ensureBaseTableCellLayout as _0x380eaf,
  getBaseCellFormulaValue as _0x23cb5d,
} from "@univerjs-pro/bases";
import {
  createDocsCustomBlockInsertMutation as _0x5e616b,
  createDocsCustomBlockRemoveMutation as _0x412cae,
} from "@univerjs/docs";
import { BehaviorSubject as _0x14caf3 } from "rxjs";
const Qe = "embed.mutation.create-host-anchor",
  $e = "embed.mutation.remove-host-anchor",
  v = "embed.mutation.set-host-anchor-record",
  y = "embed.mutation.remove-host-anchor-record",
  et = { makeCurrent: false, skipAutoRender: true, embeddedRender: true },
  b = {
    DocsCustomBlock: "docs-custom-block",
    SheetsFloatingObject: "sheets-floating-object",
    SheetsSheetTab: "sheets-sheet-tab",
    BasesTableListBlock: "bases-table-list-block",
    SlidesFloatingObject: "slides-floating-object",
    SlidesPageListBlock: "slides-page-list-block",
    BoardsFloatingObject: "boards-floating-object",
  },
  tt = {
    ribbon: "host",
    productToolbar: "child",
    contextMenu: "child",
    floatToolbar: "child",
    footer: "child",
    sidePanel: "child",
    floatingMenu: "hidden",
  },
  nt = {
    ribbon: "hidden",
    productToolbar: "child",
    contextMenu: "child",
    floatToolbar: "child",
    footer: "compact",
    sidePanel: "compact",
    floatingMenu: "child",
  },
  rt = {
    ribbon: "hidden",
    productToolbar: "child",
    contextMenu: "child",
    floatToolbar: "child",
    footer: "compact",
    sidePanel: "compact",
    floatingMenu: "child",
  };
function it(_0x4ff568) {
  "@babel/helpers - typeof";
  return (
    (it =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4f6b04) {
            return typeof _0x4f6b04;
          }
        : function (_0x252ee0) {
            return _0x252ee0 &&
              typeof Symbol == "function" &&
              _0x252ee0.constructor === Symbol &&
              _0x252ee0 !== Symbol.prototype
              ? "symbol"
              : typeof _0x252ee0;
          }),
    it(_0x4ff568)
  );
}
function at(_0x18ca5f, _0x81a73) {
  if (it(_0x18ca5f) != "object" || !_0x18ca5f) return _0x18ca5f;
  var _0x2baab7 = _0x18ca5f[Symbol.toPrimitive];
  if (_0x2baab7 !== undefined) {
    var _0x52e8c6 = _0x2baab7.call(_0x18ca5f, _0x81a73 || "default");
    if (it(_0x52e8c6) != "object") return _0x52e8c6;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x81a73 === "string" ? String : Number)(_0x18ca5f);
}
function ot(_0x3a7f19) {
  var _0xf0539c = at(_0x3a7f19, "string");
  return it(_0xf0539c) == "symbol" ? _0xf0539c : _0xf0539c + "";
}
function x(_0x12fa79, _0x12f1c3, _0x3d10b9) {
  return (
    (_0x12f1c3 = ot(_0x12f1c3)) in _0x12fa79
      ? Object.defineProperty(_0x12fa79, _0x12f1c3, {
          value: _0x3d10b9,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x12fa79[_0x12f1c3] = _0x3d10b9),
    _0x12fa79
  );
}
let st = (function (_0x23a099) {
  return (
    (_0x23a099.HostUnitNotFound = "EMBED_HOST_UNIT_NOT_FOUND"),
    (_0x23a099.CreateFailed = "EMBED_CREATE_FAILED"),
    (_0x23a099.CapabilityNotSupported = "EMBED_CAPABILITY_NOT_SUPPORTED"),
    (_0x23a099.HostContextInvalid = "EMBED_HOST_CONTEXT_INVALID"),
    (_0x23a099.SheetFloatingPlacementRequired =
      "EMBED_SHEET_FLOATING_PLACEMENT_REQUIRED"),
    (_0x23a099.DescriptorNotFound = "EMBED_DESCRIPTOR_NOT_FOUND"),
    (_0x23a099.DescriptorChildTypeRequired =
      "EMBED_DESCRIPTOR_CHILD_TYPE_REQUIRED"),
    (_0x23a099.DescriptorChildTypeMismatch =
      "EMBED_DESCRIPTOR_CHILD_TYPE_MISMATCH"),
    (_0x23a099.DescriptorDisplayTargetInvalid =
      "EMBED_DESCRIPTOR_DISPLAY_TARGET_INVALID"),
    (_0x23a099.ChildUnitAlreadyEmbedded = "EMBED_CHILD_UNIT_ALREADY_EMBEDDED"),
    (_0x23a099.CopyNotSupported = "EMBED_COPY_NOT_SUPPORTED"),
    (_0x23a099.MaterializedChildUnitNotLoaded =
      "EMBED_MATERIALIZED_CHILD_UNIT_NOT_LOADED"),
    (_0x23a099.MaterializedChildUnitRequired =
      "EMBED_MATERIALIZED_CHILD_UNIT_REQUIRED"),
    (_0x23a099.LocalRuntimeResourceRefUnsupported =
      "LOCAL_RUNTIME_RESOURCE_REF_UNSUPPORTED"),
    (_0x23a099.LocalRuntimeResourceRefUnitTypeMismatch =
      "LOCAL_RUNTIME_RESOURCE_REF_UNIT_TYPE_MISMATCH"),
    (_0x23a099.LocalRuntimeResourceRefUnitNotFound =
      "LOCAL_RUNTIME_RESOURCE_REF_UNIT_NOT_FOUND"),
    (_0x23a099.LocalRuntimeResourceRefDataSelectorUnsupported =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED"),
    (_0x23a099.LocalRuntimeResourceRefDataUnitTypeUnsupported =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_TYPE_UNSUPPORTED"),
    (_0x23a099.LocalRuntimeResourceRefDataUnitNotFound =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND"),
    (_0x23a099.LocalRuntimeResourceRefDataSheetNotFound =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_SHEET_NOT_FOUND"),
    (_0x23a099.LocalRuntimeResourceRefDataTableNotFound =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_TABLE_NOT_FOUND"),
    (_0x23a099.LocalRuntimeResourceRefRangeInvalid =
      "LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID"),
    _0x23a099
  );
})({});
var S = class extends Error {
  constructor(_0x3c96ae, _0x12de99) {
    (super(_0x3c96ae),
      x(this, "code", undefined),
      x(this, "details", undefined),
      (this.name = "EmbedError"),
      (this.code = _0x3c96ae),
      (this.details = _0x12de99));
  }
};
const ct = new Set(["componentKey", "interactionMode", "startIndex"]);
function lt(_0x28f8c4) {
  let { hostContext: _0x15fd92, maxStartIndex: _0x33b310 } = _0x28f8c4;
  if (_0x15fd92 === undefined) return;
  (!_0x15fd92 || typeof _0x15fd92 != "object" || Array.isArray(_0x15fd92)) &&
    ut(_0x28f8c4, "context must be an object");
  let _0x2ed002 = Object.keys(_0x15fd92).filter(
    (_0x459c47) => !ct.has(_0x459c47),
  );
  _0x2ed002.length > 0 &&
    ut(_0x28f8c4, "context contains unknown fields", {
      unknownKeys: _0x2ed002,
    });
  let {
    componentKey: _0x1185aa,
    interactionMode: _0x1132d9,
    startIndex: _0x17039e,
  } = _0x15fd92;
  (_0x1185aa !== undefined &&
    typeof _0x1185aa != "string" &&
    ut(_0x28f8c4, "componentKey must be a string", {
      key: "componentKey",
      value: _0x1185aa,
    }),
    _0x1132d9 !== undefined &&
      _0x1132d9 !== "block" &&
      _0x1132d9 !== "inline" &&
      ut(_0x28f8c4, 'interactionMode must be "block" or "inline"', {
        key: "interactionMode",
        value: _0x1132d9,
      }),
    _0x17039e !== undefined &&
      (typeof _0x17039e != "number" ||
        !Number.isFinite(_0x17039e) ||
        !Number.isInteger(_0x17039e) ||
        _0x17039e < 0 ||
        (_0x33b310 !== undefined && _0x17039e > _0x33b310)) &&
      ut(
        _0x28f8c4,
        "startIndex must be " +
          (_0x33b310 === undefined
            ? "a non-negative integer"
            : "an integer between 0 and " + _0x33b310),
        {
          key: "startIndex",
          value: _0x17039e,
          ...(_0x33b310 === undefined ? {} : { maxStartIndex: _0x33b310 }),
        },
      ));
}
function ut(_0x1efac3, _0x980255, _0x4a4428 = {}) {
  throw new S("EMBED_HOST_CONTEXT_INVALID", {
    hostUnitId: _0x1efac3.hostUnitId,
    entry: _0x1efac3.entry,
    reason: _0x980255,
    ..._0x4a4428,
  });
}
const dt = {
  [b.SheetsSheetTab]: new Set(["sheetIndex", "sheetName"]),
  [b.SheetsFloatingObject]: new Set([
    "subUnitId",
    "placement",
    "componentKey",
    "allowTransform",
    "resizeBehavior",
    "aspectRatio",
    "runtimeMountMode",
  ]),
  [b.BasesTableListBlock]: new Set(["tableIndex", "tableName"]),
  [b.SlidesPageListBlock]: new Set(["pageIndex", "pageName"]),
  [b.SlidesFloatingObject]: new Set([
    "subUnitId",
    "left",
    "top",
    "width",
    "height",
  ]),
  [b.BoardsFloatingObject]: new Set([
    "subUnitId",
    "left",
    "top",
    "width",
    "height",
  ]),
};
function C(_0x1f886c) {
  if (_0x1f886c.entry === b.DocsCustomBlock) {
    lt(_0x1f886c);
    return;
  }
  let _0x10049c = dt[_0x1f886c.entry];
  if (!_0x10049c || _0x1f886c.hostContext === undefined) return;
  (!_0x1f886c.hostContext ||
    typeof _0x1f886c.hostContext != "object" ||
    Array.isArray(_0x1f886c.hostContext)) &&
    O(_0x1f886c, "context\x20must\x20be\x20an\x20object");
  let _0x26d74d = _0x1f886c.hostContext,
    _0x4429f5 = Object.keys(_0x26d74d).filter(
      (_0x8cb036) => !_0x10049c.has(_0x8cb036),
    );
  switch (
    (_0x4429f5.length > 0 &&
      O(_0x1f886c, "context contains unknown fields", {
        unknownKeys: _0x4429f5,
      }),
    _0x1f886c.entry)
  ) {
    case b.SheetsSheetTab:
      (ft(_0x1f886c, _0x26d74d, "sheetIndex"),
        w(_0x1f886c, _0x26d74d, "sheetName"));
      return;
    case b.SheetsFloatingObject:
      (w(_0x1f886c, _0x26d74d, "subUnitId"),
        w(_0x1f886c, _0x26d74d, "componentKey"),
        pt(_0x1f886c, _0x26d74d, "allowTransform"),
        gt(_0x1f886c, _0x26d74d, "resizeBehavior", [
          "free",
          "aspect-ratio",
          "height-auto",
          "disabled",
        ]),
        ht(_0x1f886c, _0x26d74d, "aspectRatio"),
        gt(_0x1f886c, _0x26d74d, "runtimeMountMode", ["always", "stage2"]),
        _0x26d74d.placement !== undefined &&
          _t(_0x1f886c, _0x26d74d.placement));
      return;
    case b.BasesTableListBlock:
      (ft(_0x1f886c, _0x26d74d, "tableIndex"),
        w(_0x1f886c, _0x26d74d, "tableName"));
      return;
    case b.SlidesPageListBlock:
      (ft(_0x1f886c, _0x26d74d, "pageIndex"),
        w(_0x1f886c, _0x26d74d, "pageName"));
      return;
    case b.SlidesFloatingObject:
    case b.BoardsFloatingObject:
      (w(_0x1f886c, _0x26d74d, "subUnitId"),
        mt(_0x1f886c, _0x26d74d, "left"),
        mt(_0x1f886c, _0x26d74d, "top"),
        ht(_0x1f886c, _0x26d74d, "width"),
        ht(_0x1f886c, _0x26d74d, "height"));
  }
}
function ft(_0x586972, _0x1b3e50, _0x81487) {
  let _0x476d14 = _0x1b3e50[_0x81487];
  _0x476d14 !== undefined &&
    (typeof _0x476d14 != "number" ||
      !Number.isFinite(_0x476d14) ||
      !Number.isInteger(_0x476d14) ||
      _0x476d14 < 0 ||
      (_0x586972.maxIndex !== undefined && _0x476d14 > _0x586972.maxIndex)) &&
    O(
      _0x586972,
      _0x81487 +
        " must be " +
        (_0x586972.maxIndex === undefined
          ? "a non-negative integer"
          : "an integer between 0 and " + _0x586972.maxIndex),
      {
        key: _0x81487,
        value: _0x476d14,
        ...(_0x586972.maxIndex === undefined
          ? {}
          : { maxIndex: _0x586972.maxIndex }),
      },
    );
}
function w(_0x202f8e, _0x17267c, _0x3cc6d6) {
  let _0x904d93 = _0x17267c[_0x3cc6d6];
  _0x904d93 !== undefined &&
    typeof _0x904d93 != "string" &&
    O(_0x202f8e, _0x3cc6d6 + " must be a string", {
      key: _0x3cc6d6,
      value: _0x904d93,
    });
}
function pt(_0x7d1d49, _0x185dd5, _0x2b8d26) {
  let _0x559feb = _0x185dd5[_0x2b8d26];
  _0x559feb !== undefined &&
    typeof _0x559feb != "boolean" &&
    O(_0x7d1d49, _0x2b8d26 + " must be a boolean", {
      key: _0x2b8d26,
      value: _0x559feb,
    });
}
function mt(_0x19ee4b, _0xc177ab, _0x2c27ee) {
  let _0x30b1e9 = _0xc177ab[_0x2c27ee];
  _0x30b1e9 !== undefined &&
    (typeof _0x30b1e9 != "number" || !Number.isFinite(_0x30b1e9)) &&
    O(_0x19ee4b, _0x2c27ee + " must be a finite number", {
      key: _0x2c27ee,
      value: _0x30b1e9,
    });
}
function ht(_0xa047c3, _0x49d115, _0x403e28) {
  let _0x38723a = _0x49d115[_0x403e28];
  _0x38723a !== undefined &&
    (typeof _0x38723a != "number" ||
      !Number.isFinite(_0x38723a) ||
      _0x38723a <= 0) &&
    O(_0xa047c3, _0x403e28 + " must be a positive finite number", {
      key: _0x403e28,
      value: _0x38723a,
    });
}
function gt(_0x4919f9, _0xfbec7e, _0x443ef7, _0xc78a7d) {
  let _0x41ac80 = _0xfbec7e[_0x443ef7];
  _0x41ac80 !== undefined &&
    !_0xc78a7d.includes(_0x41ac80) &&
    O(_0x4919f9, _0x443ef7 + " has an unsupported value", {
      key: _0x443ef7,
      value: _0x41ac80,
      allowed: _0xc78a7d,
    });
}
function _t(_0x5c2563, _0x10e6aa) {
  let _0x46c7f8 = bt(_0x5c2563, _0x10e6aa, "placement"),
    _0x138bf4 = _0x46c7f8.kind;
  if (
    (_0x138bf4 !== "0" &&
      _0x138bf4 !== "1" &&
      _0x138bf4 !== "2" &&
      O(_0x5c2563, "placement.kind\x20has\x20an\x20unsupported\x20value", {
        key: "placement.kind",
        value: _0x138bf4,
      }),
    "bounds" in _0x46c7f8)
  ) {
    (D(_0x5c2563, _0x46c7f8, ["kind", "bounds"], "placement"),
      vt(_0x5c2563, _0x46c7f8.bounds, "placement.bounds"));
    return;
  }
  switch (_0x138bf4) {
    case "0":
      (D(
        _0x5c2563,
        _0x46c7f8,
        ["kind", "from", "width", "height"],
        "placement",
      ),
        yt(_0x5c2563, _0x46c7f8.from, "placement.from"),
        E(_0x5c2563, _0x46c7f8, "width", "placement.width"),
        E(_0x5c2563, _0x46c7f8, "height", "placement.height"));
      return;
    case "1":
      (D(_0x5c2563, _0x46c7f8, ["kind", "from", "to"], "placement"),
        yt(_0x5c2563, _0x46c7f8.from, "placement.from"),
        yt(_0x5c2563, _0x46c7f8.to, "placement.to"));
      return;
    case "2":
      (D(
        _0x5c2563,
        _0x46c7f8,
        ["kind", "left", "top", "width", "height"],
        "placement",
      ),
        T(_0x5c2563, _0x46c7f8, "left", "placement.left"),
        T(_0x5c2563, _0x46c7f8, "top", "placement.top"),
        E(_0x5c2563, _0x46c7f8, "width", "placement.width"),
        E(_0x5c2563, _0x46c7f8, "height", "placement.height"));
  }
}
function vt(_0x208d05, _0x36db26, _0x49cc08) {
  let _0x34a470 = bt(_0x208d05, _0x36db26, _0x49cc08);
  (D(_0x208d05, _0x34a470, ["left", "top", "width", "height"], _0x49cc08),
    T(_0x208d05, _0x34a470, "left", _0x49cc08 + ".left"),
    T(_0x208d05, _0x34a470, "top", _0x49cc08 + ".top"),
    E(_0x208d05, _0x34a470, "width", _0x49cc08 + ".width"),
    E(_0x208d05, _0x34a470, "height", _0x49cc08 + ".height"));
}
function yt(_0x24e358, _0x2af56e, _0x416739) {
  let _0x22af0e = bt(_0x24e358, _0x2af56e, _0x416739);
  D(
    _0x24e358,
    _0x22af0e,
    ["row", "column", "rowOffset", "columnOffset"],
    _0x416739,
  );
  for (let _0x83a69e of ["row", "column"]) {
    let _0x40c1da = _0x22af0e[_0x83a69e];
    (typeof _0x40c1da != "number" ||
      !Number.isInteger(_0x40c1da) ||
      _0x40c1da < 0) &&
      O(
        _0x24e358,
        _0x416739 + "." + _0x83a69e + " must be a non-negative integer",
        { key: _0x416739 + "." + _0x83a69e, value: _0x40c1da },
      );
  }
  (T(_0x24e358, _0x22af0e, "rowOffset", _0x416739 + ".rowOffset"),
    T(_0x24e358, _0x22af0e, "columnOffset", _0x416739 + ".columnOffset"));
}
function T(_0x42f83c, _0x52e800, _0x38ae73, _0x55363e) {
  let _0x538797 = _0x52e800[_0x38ae73];
  (typeof _0x538797 != "number" || !Number.isFinite(_0x538797)) &&
    O(_0x42f83c, _0x55363e + " must be a finite number", {
      key: _0x55363e,
      value: _0x538797,
    });
}
function E(_0x52e30e, _0x8d7f43, _0x8544ed, _0x2b63b1) {
  let _0x32b698 = _0x8d7f43[_0x8544ed];
  (typeof _0x32b698 != "number" ||
    !Number.isFinite(_0x32b698) ||
    _0x32b698 <= 0) &&
    O(_0x52e30e, _0x2b63b1 + " must be a positive finite number", {
      key: _0x2b63b1,
      value: _0x32b698,
    });
}
function bt(_0x3039c6, _0x5699c6, _0x1a4604) {
  return (
    (!_0x5699c6 || typeof _0x5699c6 != "object" || Array.isArray(_0x5699c6)) &&
      O(_0x3039c6, _0x1a4604 + " must be an object", {
        key: _0x1a4604,
        value: _0x5699c6,
      }),
    _0x5699c6
  );
}
function D(_0x2a7099, _0x19b3e8, _0x2749c8, _0x38c17c) {
  let _0x5f4cd5 = Object.keys(_0x19b3e8).filter(
    (_0x392501) => !_0x2749c8.includes(_0x392501),
  );
  _0x5f4cd5.length > 0 &&
    O(_0x2a7099, _0x38c17c + " contains unknown fields", {
      key: _0x38c17c,
      unknownKeys: _0x5f4cd5,
    });
}
function O(_0x156d96, _0x3a1695, _0x4ca433 = {}) {
  throw new S("EMBED_HOST_CONTEXT_INVALID", {
    hostUnitId: _0x156d96.hostUnitId,
    entry: _0x156d96.entry,
    reason: _0x3a1695,
    ..._0x4ca433,
  });
}
const xt = "UniverEmbedSheetsFloatingObject";
function St(_0x98f884) {
  return {
    version: 1,
    embedId: _0x98f884.embedId,
    hostType: _0x34bdbd.UNIVER_SHEET,
    childType: _0x98f884.childType,
    hostUnitId: _0x98f884.hostUnitId,
    hostAnchorId: _0x98f884.hostAnchorId,
    runtimeMountMode: _0x98f884.runtimeMountMode ?? "stage2",
    resizeBehavior: _0x98f884.resizeBehavior,
    aspectRatio: _0x98f884.aspectRatio,
    disablePopup: true,
  };
}
function Ct(_0x215448) {
  let _0x303f32 = _0x215448.left ?? 80,
    _0x440f64 = _0x215448.top ?? 80,
    { width: _0x1e101a, height: _0x8127ac } = wt({
      width: _0x215448.width,
      height: _0x215448.height,
      resizeBehavior: _0x215448.resizeBehavior,
      aspectRatio: _0x215448.aspectRatio,
    }),
    _0x4f6a70 =
      _0x215448.sheetTransform ??
      Tt(_0x303f32, _0x440f64, _0x1e101a, _0x8127ac);
  return {
    unitId: _0x215448.hostUnitId,
    subUnitId: _0x215448.hostSubUnitId,
    drawingId: _0x215448.hostAnchorId,
    drawingType: _0x41274d.DRAWING_BLOCK,
    componentKey: _0x215448.componentKey ?? "UniverEmbedSheetsFloatingObject",
    sheetTransform: _0x4f6a70,
    axisAlignSheetTransform: _0x4f6a70,
    transform: {
      left: _0x303f32,
      top: _0x440f64,
      width: _0x1e101a,
      height: _0x8127ac,
    },
    data: St(_0x215448),
    allowTransform: _0x215448.allowTransform ?? true,
  };
}
function wt(_0xbcf932) {
  let _0x5cdc69 = Et(_0xbcf932.width) ? _0xbcf932.width : 560,
    _0x513520 = Et(_0xbcf932.height) ? _0xbcf932.height : 360,
    _0x4c8da4 = Et(_0xbcf932.aspectRatio) ? _0xbcf932.aspectRatio : undefined;
  return _0xbcf932.resizeBehavior !== "aspect-ratio" || !_0x4c8da4
    ? { width: _0x5cdc69, height: _0x513520 }
    : Et(_0xbcf932.width)
      ? { width: _0x5cdc69, height: Math.max(1, _0x5cdc69 / _0x4c8da4) }
      : Et(_0xbcf932.height)
        ? { width: Math.max(1, _0x513520 * _0x4c8da4), height: _0x513520 }
        : { width: _0x5cdc69, height: Math.max(1, _0x5cdc69 / _0x4c8da4) };
}
function Tt(_0x4c6977, _0x5287ec, _0x54c771, _0x1aa427) {
  return {
    from: { column: 0, columnOffset: _0x4c6977, row: 0, rowOffset: _0x5287ec },
    to: {
      column: 0,
      columnOffset: _0x4c6977 + _0x54c771,
      row: 0,
      rowOffset: _0x5287ec + _0x1aa427,
    },
  };
}
function Et(_0x3a3dcb) {
  return (
    typeof _0x3a3dcb == "number" && Number.isFinite(_0x3a3dcb) && _0x3a3dcb > 0
  );
}
function Dt(_0x56c91f, _0xb78684, _0x25b797, _0x62004f) {
  return {
    hostType: _0x34bdbd.UNIVER_SHEET,
    entry: b.SheetsFloatingObject,
    createAnchorPlan: (_0x117add) =>
      nn(
        Nt(_0x117add, $t(_0xb78684), tn(_0x62004f)),
        "EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE",
      ),
    restoreAnchor: (_0x5e5c3a) =>
      rn(
        It(_0x5e5c3a, $t(_0xb78684), en(_0x25b797), tn(_0x62004f)),
        "EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE",
      ),
    removeAnchorPlan: (_0x271ed9) => {
      let _0x4faa9a =
        (_0x56c91f == null
          ? undefined
          : _0x56c91f.getAnchor(
              _0x271ed9.hostUnitId,
              _0x271ed9.hostAnchorId,
            )) ?? Ft(_0x271ed9);
      return (
        Pt(_0x271ed9, _0x4faa9a, $t(_0xb78684)) ?? zt(_0x271ed9, _0x4faa9a)
      );
    },
    readContext: (_0x5dc423) => kt(_0x5dc423, _0x56c91f, $t(_0xb78684)),
    createBoundsUpdatePlan: (_0x5bce80) => {
      let _0x2dd1bf = Mt($t(_0xb78684), tn(_0x62004f)),
        _0x400a1c = kt(_0x5bce80, _0x56c91f, _0x2dd1bf.sheetDrawingService);
      if (!_0x400a1c.resolved)
        throw Error("EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE");
      return Ot(
        _0x5bce80,
        { kind: _0x400a1c.placement["kind"], bounds: _0x5bce80.bounds },
        _0x56c91f,
        _0x2dd1bf.sheetDrawingService,
        _0x2dd1bf.sheetSkeletonService,
      );
    },
  };
}
function Ot(_0x2a4a6f, _0x51fb30, _0x46aced, _0x1bf855, _0x58db5a) {
  var _0x2f8779, _0x26436b, _0x1d5e6c, _0xb27970, _0x7ad25d;
  let _0x4e7edd = At(
    _0x2a4a6f.hostUnitId,
    _0x2a4a6f.hostAnchorId,
    _0x46aced == null ||
      (_0x2f8779 = _0x46aced.getAnchor(
        _0x2a4a6f.hostUnitId,
        _0x2a4a6f.hostAnchorId,
      )) == null
      ? undefined
      : _0x2f8779.hostContext,
    _0x1bf855,
  );
  if (!_0x4e7edd) throw Error("EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE");
  let _0xbd1ec2 =
      _0x51fb30.kind === _0x2821de.None
        ? undefined
        : _0x58db5a.ensureSkeleton(_0x2a4a6f.hostUnitId, _0x4e7edd.subUnitId),
    _0x483eda = _0x4cbe76(_0x4e7edd.drawing, _0x51fb30, _0xbd1ec2),
    _0x2f02fe = _0x1bf855.getBatchUpdateOp([_0x483eda]),
    _0xb60639 =
      _0x46aced == null
        ? undefined
        : _0x46aced.getAnchor(_0x2a4a6f.hostUnitId, _0x2a4a6f.hostAnchorId),
    _0x387a84 = {
      ...(_0xb60639 ??
        Ft({
          ..._0x2a4a6f,
          requestedAnchorId: _0x2a4a6f.hostAnchorId,
          hostContext: { subUnitId: _0x4e7edd.subUnitId },
        })),
      hostContext: {
        ...(_0xb60639 == null ? undefined : _0xb60639.hostContext),
        subUnitId: _0x4e7edd.subUnitId,
        left:
          (_0x26436b = _0x483eda.transform) == null
            ? undefined
            : _0x26436b.left,
        top:
          (_0x1d5e6c = _0x483eda.transform) == null ? undefined : _0x1d5e6c.top,
        width:
          (_0xb27970 = _0x483eda.transform) == null
            ? undefined
            : _0xb27970.width,
        height:
          (_0x7ad25d = _0x483eda.transform) == null
            ? undefined
            : _0x7ad25d.height,
        placement: _0x17ccd8(_0x483eda),
      },
      lifecycle: "active",
    };
  return {
    redoMutations: [
      j(_0x2f02fe, _0x3e9316.UPDATE, "redo"),
      { id: v, params: { record: _0x387a84 } },
    ],
    undoMutations: [
      _0xb60639
        ? { id: v, params: { record: _0xb60639 } }
        : {
            id: y,
            params: {
              hostUnitId: _0x2a4a6f.hostUnitId,
              hostAnchorId: _0x2a4a6f.hostAnchorId,
            },
          },
      j(_0x2f02fe, _0x3e9316.UPDATE, "undo"),
    ],
  };
}
function kt(_0x2c6284, _0x22ac42, _0x331eb6) {
  let _0x594f0e =
      _0x22ac42 == null
        ? undefined
        : _0x22ac42.getAnchor(_0x2c6284.hostUnitId, _0x2c6284.hostAnchorId),
    _0x28924b = _0x331eb6
      ? At(
          _0x2c6284.hostUnitId,
          _0x2c6284.hostAnchorId,
          _0x594f0e == null ? undefined : _0x594f0e.hostContext,
          _0x331eb6,
        )
      : undefined,
    _0x501f8b = _0x28924b ? jt(_0x28924b.drawing) : undefined;
  return !_0x28924b || !_0x501f8b
    ? { resolved: false, entry: b.SheetsFloatingObject }
    : {
        resolved: true,
        entry: b.SheetsFloatingObject,
        subUnitId: _0x28924b.subUnitId,
        bounds: _0x501f8b,
        placement: _0x17ccd8(_0x28924b.drawing),
      };
}
function At(_0x2ae6b3, _0x542c7b, _0xefbe65, _0x46f754) {
  let _0x4f35e4 = Bt(_0xefbe65);
  if (_0x4f35e4) {
    let _0x5da643 = _0x46f754.getDrawingByParam({
      unitId: _0x2ae6b3,
      subUnitId: _0x4f35e4,
      drawingId: _0x542c7b,
    });
    if (_0x5da643) return { subUnitId: _0x4f35e4, drawing: _0x5da643 };
  }
  for (let [_0x23c5bd, _0x10db8c] of Object.entries(
    _0x46f754.getDrawingDataForUnit(_0x2ae6b3),
  )) {
    var _0x50ac9b;
    let _0xd83c29 =
      (_0x50ac9b = _0x10db8c.data) == null ? undefined : _0x50ac9b[_0x542c7b];
    if (_0xd83c29) return { subUnitId: _0x23c5bd, drawing: _0xd83c29 };
  }
}
function jt(_0x1a70ed) {
  let {
    left: _0x7bf3d0,
    top: _0x4aef5f,
    width: _0x309510,
    height: _0x521eea,
  } = _0x1a70ed.transform ?? {};
  if (
    [_0x7bf3d0, _0x4aef5f, _0x309510, _0x521eea].every(
      (_0x57484a) => typeof _0x57484a == "number" && Number.isFinite(_0x57484a),
    ) &&
    !(
      _0x309510 == null ||
      _0x521eea == null ||
      _0x309510 <= 0 ||
      _0x521eea <= 0 ||
      _0x7bf3d0 == null ||
      _0x4aef5f == null
    )
  )
    return {
      left: _0x7bf3d0,
      top: _0x4aef5f,
      width: _0x309510,
      height: _0x521eea,
    };
}
function Mt(_0x1cf47f, _0xfd0e68) {
  if (!_0x1cf47f || !_0xfd0e68)
    throw Error("EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE");
  return { sheetDrawingService: _0x1cf47f, sheetSkeletonService: _0xfd0e68 };
}
function Nt(_0x1ba610, _0x4f2151, _0x34e209) {
  C({
    hostUnitId: _0x1ba610.hostUnitId,
    entry: _0x1ba610.entry,
    hostContext: _0x1ba610.hostContext,
  });
  let _0x42ed8d = Bt(_0x1ba610.hostContext);
  if (!_0x4f2151 || !_0x42ed8d) return;
  let _0x64ba67 = Ft(_0x1ba610),
    _0x1ec371 = Lt(_0x1ba610, _0x64ba67, _0x42ed8d, _0x34e209);
  if (!_0x1ec371) return;
  let _0x19b6c8 = _0x4f2151.getBatchAddOp([_0x1ec371]),
    _0x56b324 = {
      unitId: _0x64ba67.hostUnitId,
      subUnitId: _0x42ed8d,
      drawingId: _0x64ba67.hostAnchorId,
    };
  return {
    hostAnchorId: _0x64ba67.hostAnchorId,
    redoMutations: [
      j(_0x19b6c8, _0x3e9316.INSERT, "redo"),
      { id: v, params: { record: _0x64ba67 } },
    ],
    undoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x64ba67.hostUnitId,
          hostAnchorId: _0x64ba67.hostAnchorId,
        },
      },
      j({ ..._0x19b6c8, objects: [_0x56b324] }, _0x3e9316.REMOVE, "undo"),
    ],
  };
}
function Pt(_0x7fa42f, _0x323369, _0x53241f) {
  let _0x4dbe8d = Bt(_0x323369.hostContext);
  if (!_0x53241f || !_0x4dbe8d) return;
  let _0x578844 = _0x53241f.getBatchRemoveOp([
    {
      unitId: _0x7fa42f.hostUnitId,
      subUnitId: _0x4dbe8d,
      drawingId: _0x7fa42f.hostAnchorId,
    },
  ]);
  return {
    redoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x7fa42f.hostUnitId,
          hostAnchorId: _0x7fa42f.hostAnchorId,
        },
      },
      j(_0x578844, _0x3e9316.REMOVE, "redo"),
    ],
    undoMutations: [
      j(_0x578844, _0x3e9316.INSERT, "undo"),
      { id: v, params: { record: { ..._0x323369, lifecycle: "active" } } },
    ],
  };
}
function Ft(_0x4a6e6c) {
  return Rt(
    { ..._0x4a6e6c, hostContext: an(_0x4a6e6c) },
    b.SheetsFloatingObject,
    "sheets-floating",
  );
}
function It(_0x29240d, _0x92391, _0x951b41, _0x51dfd4) {
  var _0x308d91;
  let _0x121e2b = Bt(_0x29240d.hostContext);
  if (!_0x92391 || !_0x951b41 || !_0x121e2b) return;
  let _0x1b2cec = Ft({
      ..._0x29240d,
      requestedAnchorId: _0x29240d.hostAnchorId,
    }),
    _0x4a125b = Lt(_0x29240d, _0x1b2cec, _0x121e2b, _0x51dfd4);
  if (!_0x4a125b) return;
  let _0x327c3b = {
    unitId: _0x1b2cec.hostUnitId,
    subUnitId: _0x121e2b,
    drawingId: _0x1b2cec.hostAnchorId,
  };
  if (!(
    (_0x308d91 = _0x92391.getDrawingData(_0x1b2cec.hostUnitId, _0x121e2b)) !=
      null && _0x308d91[_0x1b2cec.hostAnchorId]
  )) {
    let _0x25445e = _0x92391.getBatchAddOp([_0x4a125b]);
    (_0x951b41.applyJson1(_0x1b2cec.hostUnitId, _0x121e2b, _0x25445e.redo),
      _0x92391.applyJson1(_0x1b2cec.hostUnitId, _0x121e2b, _0x25445e.redo),
      _0x951b41.addNotification([_0x327c3b]),
      _0x92391.addNotification([_0x327c3b]));
  }
  return _0x1b2cec;
}
function Lt(_0x3a0cb9, _0x2531d6, _0x2b88f0, _0x58916b) {
  var _0x61c5c9, _0x4da63d;
  let _0x44b7bc = Ct({
    embedId: _0x2531d6.embedId,
    childType:
      (_0x61c5c9 = _0x3a0cb9.descriptor) == null
        ? undefined
        : _0x61c5c9.childType,
    hostUnitId: _0x2531d6.hostUnitId,
    hostSubUnitId: _0x2b88f0,
    hostAnchorId: _0x2531d6.hostAnchorId,
    componentKey: Vt(_0x2531d6.hostContext, "componentKey") ?? undefined,
    left: k(_0x2531d6.hostContext, "left"),
    top: k(_0x2531d6.hostContext, "top"),
    width: k(_0x2531d6.hostContext, "width"),
    height: k(_0x2531d6.hostContext, "height"),
    sheetTransform: Ut(_0x2531d6.hostContext),
    allowTransform: Ht(_0x2531d6.hostContext, "allowTransform"),
    resizeBehavior: on(_0x2531d6.hostContext),
    aspectRatio:
      k(_0x2531d6.hostContext, "aspectRatio") ??
      (((_0x4da63d = _0x3a0cb9.descriptor) == null
        ? undefined
        : _0x4da63d.childType) === _0x34bdbd.UNIVER_SLIDE
        ? 16 / 9
        : undefined),
    runtimeMountMode: sn(_0x2531d6.hostContext),
  });
  _0x58916b == null ||
    _0x58916b.ensureSkeleton(_0x2531d6.hostUnitId, _0x2b88f0);
  let _0x4b96fa =
    _0x58916b == null
      ? undefined
      : _0x58916b.getSkeletonParam(_0x2531d6.hostUnitId, _0x2b88f0);
  if (!_0x4b96fa) return;
  let _0x5e4d9d = Wt(_0x2531d6.hostContext);
  if (_0x5e4d9d) return _0x4cbe76(_0x44b7bc, _0x5e4d9d, _0x4b96fa.skeleton);
  let _0x1d8f85 = Ut(_0x2531d6.hostContext)
    ? undefined
    : Gt(_0x2531d6.hostContext);
  if (_0x1d8f85)
    return _0x4cbe76(
      _0x44b7bc,
      { kind: _0x2821de.Position, bounds: _0x1d8f85 },
      _0x4b96fa.skeleton,
    );
  let _0x5670b5 = Gt(_0x44b7bc.transform);
  if (_0x5670b5)
    return _0x4cbe76(
      _0x44b7bc,
      { kind: _0x2821de.Position, bounds: _0x5670b5 },
      _0x4b96fa.skeleton,
    );
}
function Rt(_0x315142, _0x42e252, _0x5dae6b) {
  return {
    hostAnchorId:
      _0x315142.requestedAnchorId ?? _0x5dae6b + ":" + _0x315142.embedId,
    embedId: _0x315142.embedId,
    hostUnitId: _0x315142.hostUnitId,
    hostType: _0x315142.hostType,
    entry: _0x315142.entry,
    kind: _0x42e252,
    hostContext: _0x315142.hostContext,
    lifecycle: "active",
  };
}
function zt(_0x42b07f, _0x2dc80a) {
  return {
    redoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x42b07f.hostUnitId,
          hostAnchorId: _0x42b07f.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      { id: v, params: { record: { ..._0x2dc80a, lifecycle: "active" } } },
    ],
  };
}
function Bt(_0xb69f16) {
  return typeof (_0xb69f16 == null ? undefined : _0xb69f16.subUnitId) ==
    "string"
    ? _0xb69f16.subUnitId
    : undefined;
}
function k(_0x4768f0, _0x276eec) {
  return typeof (_0x4768f0 == null ? undefined : _0x4768f0[_0x276eec]) ==
    "number"
    ? _0x4768f0[_0x276eec]
    : undefined;
}
function Vt(_0x2f6b54, _0x350d17) {
  return typeof (_0x2f6b54 == null ? undefined : _0x2f6b54[_0x350d17]) ==
    "string"
    ? _0x2f6b54[_0x350d17]
    : undefined;
}
function Ht(_0x371e55, _0x4e804c) {
  return typeof (_0x371e55 == null ? undefined : _0x371e55[_0x4e804c]) ==
    "boolean"
    ? _0x371e55[_0x4e804c]
    : undefined;
}
function Ut(_0x1a38cb) {
  let _0x38a4df = Xt(_0x1a38cb == null ? undefined : _0x1a38cb.sheetTransform),
    _0x2caa43 = Yt(_0x38a4df == null ? undefined : _0x38a4df.from),
    _0x289c76 = Yt(_0x38a4df == null ? undefined : _0x38a4df.to);
  if (!(!_0x2caa43 || !_0x289c76)) return { from: _0x2caa43, to: _0x289c76 };
}
function Wt(_0x212c5c) {
  let _0x5139a2 = Xt(_0x212c5c == null ? undefined : _0x212c5c.placement);
  if (!_0x5139a2) return;
  let _0x246ab2 = _0x5139a2 == null ? undefined : _0x5139a2.kind;
  if (
    _0x246ab2 !== _0x2821de.Position &&
    _0x246ab2 !== _0x2821de.Both &&
    _0x246ab2 !== _0x2821de.None
  )
    return;
  let _0x56ff45 = Gt(_0x5139a2.bounds);
  if (_0x56ff45) return { kind: _0x246ab2, bounds: _0x56ff45 };
  switch (_0x246ab2) {
    case _0x2821de.None:
      return Kt(_0x5139a2);
    case _0x2821de.Position:
      return qt(_0x5139a2);
    case _0x2821de.Both:
      return Jt(_0x5139a2);
  }
}
function Gt(_0x4cb7b1) {
  let _0x26ce77 = Xt(_0x4cb7b1),
    _0xc21605 = A(_0x26ce77, "left"),
    _0x43c5e2 = A(_0x26ce77, "top"),
    _0x1b5e57 = Zt(_0x26ce77, "width"),
    _0x414590 = Zt(_0x26ce77, "height");
  return _0xc21605 == null ||
    _0x43c5e2 == null ||
    _0x1b5e57 == null ||
    _0x414590 == null
    ? undefined
    : { left: _0xc21605, top: _0x43c5e2, width: _0x1b5e57, height: _0x414590 };
}
function Kt(_0x21fc27) {
  let _0x1f1898 = Gt(_0x21fc27);
  return _0x1f1898 ? { kind: _0x2821de.None, ..._0x1f1898 } : undefined;
}
function qt(_0x41c119) {
  let _0x5dbbd3 = Yt(_0x41c119.from),
    _0x497cee = Zt(_0x41c119, "width"),
    _0x52d5d8 = Zt(_0x41c119, "height");
  return !_0x5dbbd3 || _0x497cee == null || _0x52d5d8 == null
    ? undefined
    : {
        kind: _0x2821de.Position,
        from: _0x5dbbd3,
        width: _0x497cee,
        height: _0x52d5d8,
      };
}
function Jt(_0x54e65a) {
  let _0x207cba = Yt(_0x54e65a.from),
    _0x53524a = Yt(_0x54e65a.to);
  return !_0x207cba || !_0x53524a
    ? undefined
    : { kind: _0x2821de.Both, from: _0x207cba, to: _0x53524a };
}
function Yt(_0x83634d) {
  let _0x4f918b = Xt(_0x83634d),
    _0x24f197 = Qt(_0x4f918b, "row"),
    _0xa74a30 = Qt(_0x4f918b, "column"),
    _0x1738c9 = A(_0x4f918b, "rowOffset"),
    _0x3c8e45 = A(_0x4f918b, "columnOffset");
  return _0x24f197 == null ||
    _0xa74a30 == null ||
    _0x1738c9 == null ||
    _0x3c8e45 == null
    ? undefined
    : {
        row: _0x24f197,
        column: _0xa74a30,
        rowOffset: _0x1738c9,
        columnOffset: _0x3c8e45,
      };
}
function Xt(_0x22fcb1) {
  return typeof _0x22fcb1 == "object" && _0x22fcb1 && !Array.isArray(_0x22fcb1)
    ? Object.fromEntries(Object.entries(_0x22fcb1))
    : undefined;
}
function A(_0x3cb7b2, _0x22aca0) {
  let _0x2a85d3 = _0x3cb7b2 == null ? undefined : _0x3cb7b2[_0x22aca0];
  return typeof _0x2a85d3 == "number" && Number.isFinite(_0x2a85d3)
    ? _0x2a85d3
    : undefined;
}
function Zt(_0x2a217a, _0x3ada9c) {
  let _0x3d927d = A(_0x2a217a, _0x3ada9c);
  return _0x3d927d != null && _0x3d927d > 0 ? _0x3d927d : undefined;
}
function Qt(_0x42f9af, _0x333ba6) {
  let _0x40375c = A(_0x42f9af, _0x333ba6);
  return _0x40375c != null && Number.isInteger(_0x40375c) && _0x40375c >= 0
    ? _0x40375c
    : undefined;
}
function $t(_0x4fda78) {
  return typeof _0x4fda78 == "function" ? _0x4fda78() : _0x4fda78;
}
function en(_0x1ecbb1) {
  return typeof _0x1ecbb1 == "function" ? _0x1ecbb1() : _0x1ecbb1;
}
function tn(_0x20a645) {
  return typeof _0x20a645 == "function" ? _0x20a645() : _0x20a645;
}
function nn(_0x54d830, _0x33905c) {
  if (!_0x54d830) throw Error(_0x33905c);
  return _0x54d830;
}
function rn(_0x3ffa42, _0xc7686e) {
  if (!_0x3ffa42) throw Error(_0xc7686e);
  return _0x3ffa42;
}
function an(_0x2c9c23) {
  var _0x3f7030, _0x513ddb;
  let _0x4c9084 = _0x2c9c23.hostContext,
    _0x2e311a = on(_0x4c9084),
    _0x53e094 =
      _0x2e311a === "aspect-ratio" ||
      ((_0x3f7030 = _0x2c9c23.descriptor) == null
        ? undefined
        : _0x3f7030.childType) === _0x34bdbd.UNIVER_SLIDE
        ? "aspect-ratio"
        : _0x2e311a,
    _0x4788d7 =
      k(_0x4c9084, "aspectRatio") ??
      (((_0x513ddb = _0x2c9c23.descriptor) == null
        ? undefined
        : _0x513ddb.childType) === _0x34bdbd.UNIVER_SLIDE
        ? 16 / 9
        : undefined);
  if (_0x53e094 !== "aspect-ratio" || _0x4788d7 == null) return _0x4c9084;
  let _0x5a1e57 = wt({
    width: k(_0x4c9084, "width"),
    height: k(_0x4c9084, "height"),
    resizeBehavior: _0x53e094,
    aspectRatio: _0x4788d7,
  });
  return {
    ..._0x4c9084,
    width: _0x5a1e57.width,
    height: _0x5a1e57.height,
    resizeBehavior: _0x53e094,
    aspectRatio: _0x4788d7,
  };
}
function on(_0x152238) {
  let _0x914460 = Vt(_0x152238, "resizeBehavior");
  return _0x914460 === "free" ||
    _0x914460 === "aspect-ratio" ||
    _0x914460 === "height-auto" ||
    _0x914460 === "disabled"
    ? _0x914460
    : undefined;
}
function sn(_0x53eb55) {
  let _0x5cb3aa = Vt(_0x53eb55, "runtimeMountMode");
  return _0x5cb3aa === "always" || _0x5cb3aa === "stage2"
    ? _0x5cb3aa
    : undefined;
}
function j(_0x5aba30, _0x43147b, _0x3f4d5f) {
  return {
    id: _0x33c295.id,
    params: {
      unitId: _0x5aba30.unitId,
      subUnitId: _0x5aba30.subUnitId,
      op: _0x3f4d5f === "redo" ? _0x5aba30.redo : _0x5aba30.undo,
      objects: _0x5aba30.objects,
      type: _0x43147b,
    },
  };
}
var M = class {
  constructor() {
    x(this, "_records", new Map());
  }
  clearUnit(_0x547a06) {
    this._records["delete"](_0x547a06);
  }
  setAnchor(_0x3abe64) {
    var _0x17fa34;
    let _0x5967af = this._ensureRecords(_0x3abe64.hostUnitId),
      _0x2c2cab = Date.now();
    _0x5967af[_0x3abe64.hostAnchorId] = {
      ..._0x3abe64,
      lifecycle: "active",
      createdAt:
        _0x3abe64.createdAt ??
        ((_0x17fa34 = _0x5967af[_0x3abe64.hostAnchorId]) == null
          ? undefined
          : _0x17fa34.createdAt) ??
        _0x2c2cab,
      updatedAt: _0x2c2cab,
    };
  }
  removeAnchor(_0x2ec367, _0x258238) {
    let _0x51a90c = this._ensureRecords(_0x2ec367),
      _0x161d17 = _0x51a90c[_0x258238];
    _0x161d17 &&
      (_0x51a90c[_0x258238] = {
        ..._0x161d17,
        lifecycle: "removed",
        updatedAt: Date.now(),
      });
  }
  getAnchor(_0x4d5873, _0x262c0b) {
    let _0x2c9018 = this._ensureRecords(_0x4d5873)[_0x262c0b];
    return _0x2c9018 ? { ..._0x2c9018 } : undefined;
  }
  listAnchors(_0x3be0a2) {
    return Object.values(this._ensureRecords(_0x3be0a2)).map((_0x4dc1b5) => ({
      ..._0x4dc1b5,
    }));
  }
  _ensureRecords(_0x483bd0) {
    let _0x366a16 = this._records["get"](_0x483bd0);
    return (
      _0x366a16 ||
        ((_0x366a16 = {}), this._records["set"](_0x483bd0, _0x366a16)),
      _0x366a16
    );
  }
};
const cn = new Set(["subUnitId"]),
  ln = new Set(["pageId"]),
  un = new Set(["dashboardId", "tableId", "viewId"]);
function dn(_0x58ef2f, _0x2ee242) {
  if (_0x2ee242 !== undefined)
    switch (
      ((!_0x2ee242 ||
        typeof _0x2ee242 != "object" ||
        Array.isArray(_0x2ee242)) &&
        N(_0x58ef2f, _0x2ee242),
      _0x58ef2f)
    ) {
      case _0x34bdbd.UNIVER_SHEET:
        return (
          pn(_0x2ee242, cn, _0x58ef2f),
          mn(_0x2ee242.subUnitId) || N(_0x58ef2f, _0x2ee242),
          { subUnitId: _0x2ee242.subUnitId }
        );
      case _0x34bdbd.UNIVER_SLIDE:
        return (
          pn(_0x2ee242, ln, _0x58ef2f),
          mn(_0x2ee242.pageId) || N(_0x58ef2f, _0x2ee242),
          { pageId: _0x2ee242.pageId }
        );
      case _0x34bdbd.UNIVER_BASE:
        return (
          pn(_0x2ee242, un, _0x58ef2f),
          (!mn(_0x2ee242.tableId) ||
            (_0x2ee242.viewId !== undefined && !mn(_0x2ee242.viewId)) ||
            (_0x2ee242.dashboardId !== undefined &&
              !mn(_0x2ee242.dashboardId))) &&
            N(_0x58ef2f, _0x2ee242),
          {
            tableId: _0x2ee242.tableId,
            ...(_0x2ee242.viewId === undefined
              ? {}
              : { viewId: _0x2ee242.viewId }),
            ...(_0x2ee242.dashboardId === undefined
              ? {}
              : { dashboardId: _0x2ee242.dashboardId }),
          }
        );
      default:
        N(_0x58ef2f, _0x2ee242);
    }
}
function fn(_0x17fc24, _0x2062ad) {
  return _0x17fc24 === _0x2062ad
    ? true
    : !_0x17fc24 || !_0x2062ad
      ? false
      : _0x17fc24.subUnitId === _0x2062ad.subUnitId &&
        _0x17fc24.pageId === _0x2062ad.pageId &&
        _0x17fc24.tableId === _0x2062ad.tableId &&
        _0x17fc24.viewId === _0x2062ad.viewId &&
        _0x17fc24.dashboardId === _0x2062ad.dashboardId;
}
function pn(_0x5a3c28, _0x419fcc, _0x18d5be) {
  Object.keys(_0x5a3c28).some((_0x20787d) => !_0x419fcc.has(_0x20787d)) &&
    N(_0x18d5be, _0x5a3c28);
}
function mn(_0x42fb04) {
  return typeof _0x42fb04 == "string" && _0x42fb04.length > 0;
}
function N(_0x1552d6, _0x3fc51e) {
  throw new S("EMBED_DESCRIPTOR_DISPLAY_TARGET_INVALID", {
    childType: _0x1552d6,
    target: _0x3fc51e,
  });
}
function hn() {
  return { version: 1, embeds: {} };
}
function gn(_0x20d1db) {
  return JSON.parse(JSON.stringify(_0x20d1db ?? hn()));
}
const P = { SELF: "self", RELATIVE: "relative", URI: "uri" };
let _n = (function (_0x24f65b) {
  return (
    (_0x24f65b.InvalidUriReference = "INVALID_URI_REFERENCE"),
    (_0x24f65b.InvalidFragmentSyntax = "INVALID_FRAGMENT_SYNTAX"),
    (_0x24f65b.InvalidPercentEncoding = "INVALID_PERCENT_ENCODING"),
    (_0x24f65b.MissingUnit = "MISSING_UNIT"),
    (_0x24f65b.MissingType = "MISSING_TYPE"),
    (_0x24f65b.ResourceRefInvalid = "RESOURCE_REF_INVALID"),
    (_0x24f65b.ResourceRefInvalidFile = "RESOURCE_REF_INVALID_FILE"),
    (_0x24f65b.ResourceRefInvalidFileKind = "RESOURCE_REF_INVALID_FILE_KIND"),
    (_0x24f65b.ResourceRefInvalidRelativePath =
      "RESOURCE_REF_INVALID_RELATIVE_PATH"),
    (_0x24f65b.ResourceRefInvalidUri = "RESOURCE_REF_INVALID_URI"),
    (_0x24f65b.ResourceRefInvalidUnit = "RESOURCE_REF_INVALID_UNIT"),
    (_0x24f65b.ResourceRefInvalidUnitType = "RESOURCE_REF_INVALID_UNIT_TYPE"),
    (_0x24f65b.ResourceRefInvalidPart = "RESOURCE_REF_INVALID_PART"),
    (_0x24f65b.ResourceRefInvalidPartKind = "RESOURCE_REF_INVALID_PART_KIND"),
    (_0x24f65b.ResourceRefInvalidSheetPart = "RESOURCE_REF_INVALID_SHEET_PART"),
    (_0x24f65b.ResourceRefInvalidRangePart = "RESOURCE_REF_INVALID_RANGE_PART"),
    (_0x24f65b.ResourceRefInvalidExtensions =
      "RESOURCE_REF_INVALID_EXTENSIONS"),
    (_0x24f65b.ResourceRefInvalidExtensionKey =
      "RESOURCE_REF_INVALID_EXTENSION_KEY"),
    (_0x24f65b.ResourceRefInvalidExtensionValue =
      "RESOURCE_REF_INVALID_EXTENSION_VALUE"),
    (_0x24f65b.ResourceRefFileUnsupported = "RESOURCE_REF_FILE_UNSUPPORTED"),
    (_0x24f65b.ResourceRefUriUnsupported = "RESOURCE_REF_URI_UNSUPPORTED"),
    _0x24f65b
  );
})({});
var F = class extends Error {
  constructor(_0x180ab1, _0x1f3bc3) {
    (super(_0x180ab1),
      x(this, "code", undefined),
      x(this, "details", undefined),
      (this.name = "ResourceRefError"),
      (this.code = _0x180ab1),
      (this.details = _0x1f3bc3));
  }
};
const vn = /%(?![0-9A-Fa-f]{2})/,
  yn = new Set(["unit", "type"]);
function I(_0x6f08d9) {
  return typeof _0x6f08d9 == "string" ? R(_0x6f08d9) : bn(_0x6f08d9);
}
function bn(_0x433336) {
  return (
    Sn(_0x433336),
    {
      file: kn(_0x433336.file),
      unit: {
        selector: _0x433336.unit["selector"],
        type: _0x433336.unit["type"],
      },
      ...(_0x433336.part ? { part: An(_0x433336.part) } : {}),
      ...(_0x433336.extensions ? { extensions: jn(_0x433336.extensions) } : {}),
    }
  );
}
function L(_0x4562f8) {
  return JSON.stringify(xn(_0x4562f8));
}
function xn(_0x4d45f8) {
  let _0x490c7f = bn(_0x4d45f8);
  return { file: _0x490c7f.file, unit: _0x490c7f.unit };
}
function Sn(_0x51928e) {
  if (!_0x51928e || typeof _0x51928e != "object")
    throw new F("RESOURCE_REF_INVALID", { ref: _0x51928e });
  if (
    (En(_0x51928e.file),
    Dn(_0x51928e.unit),
    _0x51928e.part && On(_0x51928e.part),
    _0x51928e.extensions != null)
  ) {
    if (
      typeof _0x51928e.extensions != "object" ||
      Array.isArray(_0x51928e.extensions)
    )
      throw new F("RESOURCE_REF_INVALID_EXTENSIONS", {
        extensions: _0x51928e.extensions,
      });
    for (let [_0x1b7230, _0x377bc4] of Object.entries(_0x51928e.extensions)) {
      if (!_0x1b7230)
        throw new F("RESOURCE_REF_INVALID_EXTENSION_KEY", { key: _0x1b7230 });
      if (
        typeof _0x377bc4 != "string" &&
        (!Array.isArray(_0x377bc4) ||
          _0x377bc4.some((_0x15e413) => typeof _0x15e413 != "string"))
      )
        throw new F("RESOURCE_REF_INVALID_EXTENSION_VALUE", {
          key: _0x1b7230,
          value: _0x377bc4,
        });
    }
  }
}
function Cn(_0x4b8c18) {
  return (
    !!_0x4b8c18 &&
    _0x4b8c18.kind === "range" &&
    typeof _0x4b8c18.ref == "string" &&
    typeof _0x4b8c18.sheetName == "string" &&
    typeof _0x4b8c18.range == "string"
  );
}
function wn(_0x416945) {
  return (
    !!_0x416945 &&
    _0x416945.kind === "table" &&
    typeof _0x416945.tableName == "string" &&
    _0x416945.tableName["length"] > 0
  );
}
function R(_0x352e8e, _0x2451f0 = {}) {
  if (typeof _0x352e8e != "string")
    throw new F("INVALID_URI_REFERENCE", { uriReference: _0x352e8e });
  let _0x3c14b4 = _0x352e8e.indexOf("#");
  if (_0x3c14b4 !== 0)
    throw new F("INVALID_URI_REFERENCE", { uriReference: _0x352e8e });
  let _0x196f36 = Mn(_0x352e8e.slice(_0x3c14b4 + 1)),
    _0x3db0b8 = _0x196f36.get("unit"),
    _0x33ee2c = _0x196f36.get("type");
  if (!_0x3db0b8) throw new F("MISSING_UNIT", { uriReference: _0x352e8e });
  if (!_0x33ee2c) throw new F("MISSING_TYPE", { uriReference: _0x352e8e });
  return bn({
    file: { kind: P.SELF },
    unit: { selector: _0x3db0b8, type: _0x33ee2c },
  });
}
function Tn(_0x18d0db, _0x391bb6 = {}) {
  let _0x8830ed = bn(_0x18d0db);
  if (_0x8830ed.file["kind"] !== P.SELF)
    throw new F("RESOURCE_REF_FILE_UNSUPPORTED", { file: _0x8830ed.file });
  if (_0x8830ed.part || _0x8830ed.extensions)
    throw new F("RESOURCE_REF_URI_UNSUPPORTED", {
      part: _0x8830ed.part,
      extensions: _0x8830ed.extensions,
    });
  return (
    "#unit=" +
    encodeURIComponent(_0x8830ed.unit["selector"]) +
    "&type=" +
    encodeURIComponent(_0x8830ed.unit["type"])
  );
}
function En(_0x5d1e98) {
  if (!_0x5d1e98 || typeof _0x5d1e98 != "object")
    throw new F("RESOURCE_REF_INVALID_FILE", { file: _0x5d1e98 });
  switch (_0x5d1e98.kind) {
    case P.SELF:
      return;
    case P.RELATIVE:
      if (!_0x5d1e98.path)
        throw new F("RESOURCE_REF_INVALID_RELATIVE_PATH", { file: _0x5d1e98 });
      return;
    case P.URI:
      if (!_0x5d1e98.uri)
        throw new F("RESOURCE_REF_INVALID_URI", { file: _0x5d1e98 });
      return;
    default:
      throw new F("RESOURCE_REF_INVALID_FILE_KIND", { file: _0x5d1e98 });
  }
}
function Dn(_0xc6ffc1) {
  if (
    !_0xc6ffc1 ||
    typeof _0xc6ffc1 != "object" ||
    !_0xc6ffc1.selector ||
    typeof _0xc6ffc1.type != "string" ||
    !_0xc6ffc1.type
  )
    throw new F("RESOURCE_REF_INVALID_UNIT", { unit: _0xc6ffc1 });
}
function On(_0x2472ef) {
  if (
    !_0x2472ef ||
    typeof _0x2472ef != "object" ||
    typeof _0x2472ef.kind != "string" ||
    !_0x2472ef.kind
  )
    throw new F("RESOURCE_REF_INVALID_PART", { part: _0x2472ef });
  switch (_0x2472ef.kind) {
    case "sheet":
      if (!_0x2472ef.sheetName)
        throw new F("RESOURCE_REF_INVALID_SHEET_PART", { part: _0x2472ef });
      return;
    case "range":
      if (!_0x2472ef.ref || !_0x2472ef.sheetName || !_0x2472ef.range)
        throw new F("RESOURCE_REF_INVALID_RANGE_PART", { part: _0x2472ef });
      break;
    case "table":
      if (!_0x2472ef.tableName)
        throw new F("RESOURCE_REF_INVALID_PART", { part: _0x2472ef });
      break;
    default:
      break;
  }
  for (let [_0x48441d, _0x2a28f7] of Object.entries(_0x2472ef))
    if (
      !_0x48441d ||
      (_0x2a28f7 != null &&
        typeof _0x2a28f7 != "string" &&
        (!Array.isArray(_0x2a28f7) ||
          _0x2a28f7.some((_0x3400a2) => typeof _0x3400a2 != "string")))
    )
      throw new F("RESOURCE_REF_INVALID_PART", { part: _0x2472ef });
}
function kn(_0x3477a4) {
  switch (_0x3477a4.kind) {
    case P.SELF:
      return { kind: P.SELF };
    case P.RELATIVE:
      return { kind: P.RELATIVE, path: _0x3477a4.path };
    case P.URI:
      return { kind: P.URI, uri: _0x3477a4.uri };
  }
}
function An(_0x1a2797) {
  switch (_0x1a2797.kind) {
    case "sheet":
      return {
        kind: "sheet",
        sheetName: _0x1a2797.sheetName,
        ...(_0x1a2797.sheetId ? { sheetId: _0x1a2797.sheetId } : {}),
      };
    case "range":
      return {
        kind: "range",
        ref: _0x1a2797.ref,
        sheetName: _0x1a2797.sheetName,
        range: _0x1a2797.range,
        ...(_0x1a2797.sheetId ? { sheetId: _0x1a2797.sheetId } : {}),
      };
    case "table":
      return {
        kind: "table",
        tableName: _0x1a2797.tableName,
        ...(_0x1a2797.tableId ? { tableId: _0x1a2797.tableId } : {}),
      };
    default:
      return Object.fromEntries(
        Object.entries(_0x1a2797)
          .sort(([_0x2b09a1], [_0xacc02a]) =>
            _0x2b09a1.localeCompare(_0xacc02a),
          )
          .map(([_0x11ac82, _0x5656ea]) => [
            _0x11ac82,
            Array.isArray(_0x5656ea) ? [..._0x5656ea] : _0x5656ea,
          ]),
      );
  }
}
function jn(_0xd940a9) {
  return Object.fromEntries(
    Object.entries(_0xd940a9)
      .sort(([_0x5af35c], [_0x103254]) => _0x5af35c.localeCompare(_0x103254))
      .map(([_0x25b79e, _0xc02938]) => [
        _0x25b79e,
        Array.isArray(_0xc02938) ? [..._0xc02938] : _0xc02938,
      ]),
  );
}
function Mn(_0x5a5878) {
  if (!_0x5a5878)
    throw new F("INVALID_FRAGMENT_SYNTAX", { fragment: _0x5a5878 });
  let _0x4901ae = new Map();
  for (let _0x5544a3 of _0x5a5878.split("&")) {
    let _0xbb8520 = _0x5544a3.indexOf("=");
    if (_0xbb8520 <= 0)
      throw new F("INVALID_FRAGMENT_SYNTAX", {
        fragment: _0x5a5878,
        rawParam: _0x5544a3,
      });
    let _0x5aa1a1 = Nn(_0x5544a3.slice(0, _0xbb8520)),
      _0x44843e = Nn(_0x5544a3.slice(_0xbb8520 + 1));
    if (!_0x44843e || !yn.has(_0x5aa1a1) || _0x4901ae.has(_0x5aa1a1))
      throw new F("INVALID_FRAGMENT_SYNTAX", {
        fragment: _0x5a5878,
        key: _0x5aa1a1,
        value: _0x44843e,
      });
    _0x4901ae.set(_0x5aa1a1, _0x44843e);
  }
  return _0x4901ae;
}
function Nn(_0x7b75e9) {
  if (vn.test(_0x7b75e9))
    throw new F("INVALID_PERCENT_ENCODING", { value: _0x7b75e9 });
  try {
    return decodeURIComponent(_0x7b75e9);
  } catch {
    throw new F("INVALID_PERCENT_ENCODING", { value: _0x7b75e9 });
  }
}
function Pn(_0x2d0f1e) {
  if (!_0x2d0f1e || _0x2d0f1e.trim() !== _0x2d0f1e)
    throw Error("RESOURCE_REF_LOCATOR_INVALID");
  return Tn(R(_0x2d0f1e));
}
function Fn(_0x4138dd) {
  return typeof _0x4138dd == "string" ? Pn(_0x4138dd) : Tn(_0x4138dd);
}
function z(_0x5f4832) {
  return JSON.stringify({ uriReference: Fn(_0x5f4832) });
}
function In(_0x4483bc) {
  return R(Fn(_0x4483bc)).unit["selector"];
}
function Ln(_0x43fcdf) {
  switch (_0x43fcdf) {
    case _0x34bdbd.UNIVER_SHEET:
      return "sheet";
    case _0x34bdbd.UNIVER_DOC:
      return "doc";
    case _0x34bdbd.UNIVER_SLIDE:
      return "slide";
    case _0x34bdbd.UNIVER_BASE:
      return "base";
    case _0x34bdbd.UNIVER_BOARD:
      return "board";
    default:
      throw Error("UNSUPPORTED_UNIT_TYPE:" + _0x43fcdf);
  }
}
function B(_0x12c889) {
  switch (_0x12c889) {
    case "sheet":
      return _0x34bdbd.UNIVER_SHEET;
    case "doc":
      return _0x34bdbd.UNIVER_DOC;
    case "slide":
      return _0x34bdbd.UNIVER_SLIDE;
    case "base":
      return _0x34bdbd.UNIVER_BASE;
    case "board":
      return _0x34bdbd.UNIVER_BOARD;
    default:
      throw Error("UNSUPPORTED_UNIT_TYPE:" + _0x12c889);
  }
}
var Rn = class {
  constructor() {
    (x(this, "_leasesByOwner", new Map()),
      x(this, "_leasesByChildUnit", new Map()));
  }
  acquire(_0x56df77) {
    let _0x146d4d = { ..._0x56df77 },
      _0x5fcefc = this._getOwnerKey(_0x146d4d),
      _0x59146d = this._leasesByOwner["get"](_0x5fcefc);
    if (_0x59146d) {
      if (
        _0x59146d.record["childUnitId"] === _0x146d4d.childUnitId &&
        _0x59146d.record["childType"] === _0x146d4d.childType
      )
        return _0x50161f(() => {});
      throw this._createConflictError(_0x146d4d, _0x59146d.record);
    }
    let _0x5cc46c = this._leasesByChildUnit["get"](_0x146d4d.childUnitId);
    if (_0x5cc46c) throw this._createConflictError(_0x146d4d, _0x5cc46c.record);
    let _0x3eea3d = {
      ownerKey: _0x5fcefc,
      token: Symbol(_0x5fcefc),
      record: _0x146d4d,
    };
    (this._leasesByOwner["set"](_0x5fcefc, _0x3eea3d),
      this._leasesByChildUnit["set"](_0x146d4d.childUnitId, _0x3eea3d));
    let _0xbff94c = false;
    return _0x50161f(() => {
      _0xbff94c || ((_0xbff94c = true), this._releaseState(_0x3eea3d));
    });
  }
  hasLease(_0x5accb4, _0x4eb9f2) {
    var _0x22ae1f;
    return (
      ((_0x22ae1f = this._leasesByOwner["get"](this._getOwnerKey(_0x5accb4))) ==
      null
        ? undefined
        : _0x22ae1f.record["childUnitId"]) === _0x4eb9f2
    );
  }
  getLease(_0x2bbd1f) {
    var _0x50ab24;
    let _0xea2f74 =
      (_0x50ab24 = this._leasesByChildUnit["get"](_0x2bbd1f)) == null
        ? undefined
        : _0x50ab24.record;
    return _0xea2f74 ? { ..._0xea2f74 } : undefined;
  }
  release(_0xf71a78) {
    let _0x964805 = this._leasesByOwner["get"](this._getOwnerKey(_0xf71a78));
    _0x964805 && this._releaseState(_0x964805);
  }
  releaseHost(_0xaada73) {
    for (let _0x45733b of this._leasesByOwner["values"]())
      _0x45733b.record["hostUnitId"] === _0xaada73 &&
        this._releaseState(_0x45733b);
  }
  releaseUnit(_0x46d486) {
    for (let _0x44085d of this._leasesByOwner["values"]())
      (_0x44085d.record["hostUnitId"] === _0x46d486 ||
        _0x44085d.record["childUnitId"] === _0x46d486) &&
        this._releaseState(_0x44085d);
  }
  dispose() {
    (this._leasesByOwner["clear"](), this._leasesByChildUnit["clear"]());
  }
  _releaseState(_0x3a3e13) {
    var _0x215950, _0x359629;
    (((_0x215950 = this._leasesByOwner["get"](_0x3a3e13.ownerKey)) == null
      ? undefined
      : _0x215950.token) === _0x3a3e13.token &&
      this._leasesByOwner["delete"](_0x3a3e13.ownerKey),
      ((_0x359629 = this._leasesByChildUnit["get"](
        _0x3a3e13.record["childUnitId"],
      )) == null
        ? undefined
        : _0x359629.token) === _0x3a3e13.token &&
        this._leasesByChildUnit["delete"](_0x3a3e13.record["childUnitId"]));
  }
  _createConflictError(_0x2f1b5e, _0x203ffe) {
    return new S("EMBED_CHILD_UNIT_ALREADY_EMBEDDED", {
      hostUnitId: _0x2f1b5e.hostUnitId,
      embedId: _0x2f1b5e.embedId,
      childUnitId: _0x2f1b5e.childUnitId,
      duplicatedHostUnitId: _0x203ffe.hostUnitId,
      duplicatedEmbedId: _0x203ffe.embedId,
    });
  }
  _getOwnerKey(_0x44ba1f) {
    return JSON.stringify([_0x44ba1f.hostUnitId, _0x44ba1f.embedId]);
  }
};
function V(_0x4c7e6a, _0xd9c169) {
  return function (_0x45cb26, _0x16075) {
    _0xd9c169(_0x45cb26, _0x16075, _0x4c7e6a);
  };
}
function H(_0xaa995b, _0x3b3bc3, _0x248b68, _0x340e65) {
  var _0x9e74a = arguments.length,
    _0x4d98a9 =
      _0x9e74a < 3
        ? _0x3b3bc3
        : _0x340e65 === null
          ? (_0x340e65 = Object.getOwnPropertyDescriptor(_0x3b3bc3, _0x248b68))
          : _0x340e65,
    _0x583522;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4d98a9 = Reflect.decorate(_0xaa995b, _0x3b3bc3, _0x248b68, _0x340e65);
  else {
    for (var _0x4971a2 = _0xaa995b.length - 1; _0x4971a2 >= 0; _0x4971a2--)
      (_0x583522 = _0xaa995b[_0x4971a2]) &&
        (_0x4d98a9 =
          (_0x9e74a < 3
            ? _0x583522(_0x4d98a9)
            : _0x9e74a > 3
              ? _0x583522(_0x3b3bc3, _0x248b68, _0x4d98a9)
              : _0x583522(_0x3b3bc3, _0x248b68)) || _0x4d98a9);
  }
  return (
    _0x9e74a > 3 &&
      _0x4d98a9 &&
      Object.defineProperty(_0x3b3bc3, _0x248b68, _0x4d98a9),
    _0x4d98a9
  );
}
let U = class {
  constructor(_0x25f304) {
    ((this._unitLeaseService = _0x25f304), x(this, "_resources", new Map()));
  }
  addDescriptor(_0x248ddc, _0x349627) {
    let _0x51d3cc = Date.now(),
      _0x18cef4 = this._normalizeDescriptor(_0x248ddc, _0x349627),
      _0x27e196 = this._ensureResource(_0x248ddc);
    (_0x18cef4.hostType === _0x34bdbd.UNIVER_BOARD &&
      _0x18cef4.entry === b.BoardsFloatingObject &&
      _0x18cef4.lifecycle !== "soft-delete d" &&
      Object.values(_0x27e196.embeds).find(
        (_0x8d011f) =>
          _0x8d011f.embedId !== _0x18cef4.embedId &&
          _0x8d011f.lifecycle !== "soft-delete d" &&
          _0x8d011f.hostType === _0x34bdbd.UNIVER_BOARD &&
          _0x8d011f.entry === b.BoardsFloatingObject &&
          z(_0x8d011f.source["ref"]) === z(_0x18cef4.source["ref"]),
      ) &&
      (_0x18cef4.lifecycle = "soft-delete d"),
      (_0x27e196.embeds[_0x18cef4.embedId] = {
        ..._0x18cef4,
        createdAt: _0x18cef4.createdAt ?? _0x51d3cc,
        updatedAt: _0x51d3cc,
      }));
  }
  applyDescriptorMutation(_0x4c89af, _0x4c51c4) {
    let _0x604f0b = this.getDescriptor(_0x4c89af, _0x4c51c4.embedId),
      _0x62db98 = this._getRuntimeChildUnitIdForMutation(_0x604f0b, _0x4c51c4);
    this.addDescriptor(
      _0x4c89af,
      _0x62db98 ? { ..._0x4c51c4, childUnitId: _0x62db98 } : _0x4c51c4,
    );
  }
  getDescriptor(_0x240a9e, _0x1ee504) {
    var _0x3dd1cd;
    return (_0x3dd1cd = this._resources["get"](_0x240a9e)) == null
      ? undefined
      : _0x3dd1cd.embeds[_0x1ee504];
  }
  getActiveDescriptors(_0x479f3a) {
    var _0x221d97;
    return Object.values(
      ((_0x221d97 = this._resources["get"](_0x479f3a)) == null
        ? undefined
        : _0x221d97.embeds) ?? {},
    ).filter((_0x2aa78b) => _0x2aa78b.lifecycle !== "soft-delete d");
  }
  getAllActiveDescriptors() {
    return [...this._resources["values"]()]
      .flatMap((_0x6d5e33) => Object.values(_0x6d5e33.embeds))
      .filter((_0x32bbb6) => _0x32bbb6.lifecycle !== "soft-delete d");
  }
  getActiveDescriptorsByChildUnit(_0x12e6ae) {
    return [...this._resources["values"]()]
      .flatMap((_0x3ef834) => Object.values(_0x3ef834.embeds))
      .filter(
        (_0x21e26f) =>
          _0x21e26f.lifecycle !== "soft-delete d" &&
          _0x21e26f.childUnitId === _0x12e6ae,
      );
  }
  getDescriptors(_0x52850d) {
    var _0x4f49a0;
    return Object.values(
      ((_0x4f49a0 = this._resources["get"](_0x52850d)) == null
        ? undefined
        : _0x4f49a0.embeds) ?? {},
    );
  }
  getDescriptorsByResourceRef(_0x45fae8, _0x454591) {
    var _0x52bea9;
    let _0x33d1bc = z(_0x454591);
    return Object.values(
      ((_0x52bea9 = this._resources["get"](_0x45fae8)) == null
        ? undefined
        : _0x52bea9.embeds) ?? {},
    ).filter(
      (_0x189070) => z(this._getDescriptorResourceRef(_0x189070)) === _0x33d1bc,
    );
  }
  getActiveDescriptorsByResourceRef(_0x2cd2cd, _0x5554ab) {
    return this.getDescriptorsByResourceRef(_0x2cd2cd, _0x5554ab).filter(
      (_0x204ad2) => _0x204ad2.lifecycle !== "soft-delete d",
    );
  }
  countReferencesByResourceRef(_0x94f24e, _0x5642ad) {
    return this.getDescriptorsByResourceRef(_0x94f24e, _0x5642ad).length;
  }
  countActiveReferencesByResourceRef(_0x384362, _0x4d63b8) {
    return this.getActiveDescriptorsByResourceRef(_0x384362, _0x4d63b8).length;
  }
  softDeleteDescriptor(_0x51fc83, _0xd53dcc) {
    let _0x295472 = this.getDescriptor(_0x51fc83, _0xd53dcc);
    _0x295472 &&
      (this._unitLeaseService["release"]({
        hostUnitId: _0x51fc83,
        embedId: _0xd53dcc,
      }),
      (_0x295472.lifecycle = "soft-delete d"),
      (_0x295472.updatedAt = Date.now()));
  }
  restoreDescriptor(_0x20d7a9, _0x3103d8) {
    let _0x1f2c1a = this.getDescriptor(_0x20d7a9, _0x3103d8);
    _0x1f2c1a &&
      ((_0x1f2c1a.hostType === _0x34bdbd.UNIVER_BOARD &&
        _0x1f2c1a.entry === b.BoardsFloatingObject &&
        this.getActiveDescriptorsByResourceRef(
          _0x20d7a9,
          _0x1f2c1a.source["ref"],
        ).some((_0x5f20b3) => _0x5f20b3.embedId !== _0x3103d8)) ||
        ((_0x1f2c1a.lifecycle = "active"), (_0x1f2c1a.updatedAt = Date.now())));
  }
  serializeUnit(_0x67657d) {
    return this._cloneResource(
      this._toPersistedResource(
        this._resources["get"](_0x67657d) ?? this._createResource(),
      ),
    );
  }
  loadUnit(_0x18057b, _0x1d1b2a) {
    let _0x435e4d = this._createResource();
    for (let [_0x20a320, _0x1d109f] of Object.entries(_0x1d1b2a.embeds ?? {}))
      _0x435e4d.embeds[_0x20a320] = this._normalizeDescriptor(_0x18057b, {
        ...this._toPersistedDescriptor(_0x1d109f),
        embedId: _0x20a320,
      });
    this._resources["set"](_0x18057b, this._cloneResource(_0x435e4d));
  }
  unloadUnit(_0x4c712d) {
    this._resources["delete"](_0x4c712d);
  }
  parseJson(_0x4009bc) {
    if (!_0x4009bc) return this._createResource();
    let _0x20f114 = JSON.parse(_0x4009bc);
    return {
      ...hn(),
      embeds: Object.fromEntries(
        Object.entries(_0x20f114.embeds ?? {}).map(([_0x46f0a7, _0x10c4e4]) => [
          _0x46f0a7,
          this._normalizeDescriptor(_0x10c4e4.hostUnitId, {
            ...this._toPersistedDescriptor(_0x10c4e4),
            embedId: _0x46f0a7,
          }),
        ]),
      ),
    };
  }
  toJson(_0x9ec48d) {
    return JSON.stringify(this.serializeUnit(_0x9ec48d));
  }
  _normalizeDescriptor(_0x489cac, _0x40ad04) {
    let _0x4927c9 = { ..._0x40ad04 };
    delete _0x4927c9.hostContext;
    let _0x3d790d = _0x40ad04.childType ?? _0x40ad04.source["unitType"];
    if (_0x3d790d == null)
      throw new S("EMBED_DESCRIPTOR_CHILD_TYPE_REQUIRED", {
        hostUnitId: _0x489cac,
        embedId: _0x40ad04.embedId,
      });
    let _0x293810 = Fn(_0x40ad04.source["ref"]),
      _0x559b19 = R(_0x293810);
    if (_0x3d790d !== B(_0x559b19.unit["type"]))
      throw new S("EMBED_DESCRIPTOR_CHILD_TYPE_MISMATCH", {
        hostUnitId: _0x489cac,
        embedId: _0x40ad04.embedId,
        childType: _0x3d790d,
        refUnitType: _0x559b19.unit["type"],
      });
    return {
      ..._0x4927c9,
      hostUnitId: _0x489cac,
      source: {
        ref: _0x293810,
        unitType: _0x3d790d,
        ...(_0x40ad04.source["creationConfig"] === undefined
          ? undefined
          : { creationConfig: _0x40ad04.source["creationConfig"] }),
      },
      ...(_0x40ad04.displayTarget === undefined
        ? {}
        : { displayTarget: dn(_0x3d790d, _0x40ad04.displayTarget) }),
      childUnitId: _0x40ad04.childUnitId,
      childType: _0x3d790d,
      lifecycle: _0x40ad04.lifecycle ?? "active",
    };
  }
  _getDescriptorResourceRef(_0x7801a8) {
    return _0x7801a8.source["ref"];
  }
  _getRuntimeChildUnitIdForMutation(_0x34c0ab, _0x48c5c7) {
    if (
      _0x48c5c7.childUnitId ||
      !(_0x34c0ab != null && _0x34c0ab.childUnitId) ||
      _0x34c0ab.lifecycle === "soft-delete d" ||
      _0x48c5c7.lifecycle === "soft-delete d"
    )
      return _0x48c5c7.childUnitId;
    let _0x88529d = _0x48c5c7.childType ?? _0x48c5c7.source["unitType"];
    if (
      _0x34c0ab.childType === _0x88529d &&
      z(_0x34c0ab.source["ref"]) === z(_0x48c5c7.source["ref"])
    )
      return _0x34c0ab.childUnitId;
  }
  _ensureResource(_0x13dcec) {
    let _0xda713d = this._resources["get"](_0x13dcec);
    return (
      _0xda713d ||
        ((_0xda713d = this._createResource()),
        this._resources["set"](_0x13dcec, _0xda713d)),
      _0xda713d
    );
  }
  _createResource() {
    return hn();
  }
  _cloneResource(_0x1179f7) {
    return gn(_0x1179f7);
  }
  _toPersistedResource(_0x4eb1b4) {
    return {
      version: _0x4eb1b4.version,
      embeds: Object.fromEntries(
        Object.entries(_0x4eb1b4.embeds).map(([_0x1aa0dd, _0x4bb6f6]) => [
          _0x1aa0dd,
          this._toPersistedDescriptor(_0x4bb6f6),
        ]),
      ),
    };
  }
  _toPersistedDescriptor(_0x35840d) {
    let _0x3ea1af = { ..._0x35840d };
    return (delete _0x3ea1af.childUnitId, _0x3ea1af);
  }
};
U = H([V(0, _0x2702ca(Rn))], U);
const zn = {
    id: "embed.mutation.set-descriptor",
    type: _0x2348ed.MUTATION,
    handler: (_0x5839bb, _0x2c9c53) =>
      _0x2c9c53
        ? (_0x5839bb
            .get(U)
            .applyDescriptorMutation(_0x2c9c53.unitId, _0x2c9c53.descriptor),
          true)
        : false,
  },
  Bn = {
    id: "embed.mutation.soft-delete-descriptor",
    type: _0x2348ed.MUTATION,
    handler: (_0x5c6003, _0x4e49bf) =>
      _0x4e49bf
        ? (_0x5c6003
            .get(U)
            .softDeleteDescriptor(_0x4e49bf.unitId, _0x4e49bf.embedId),
          true)
        : false,
  },
  Vn = new WeakMap(),
  Hn = new Map([
    ["sheets-sheet-tab", "sheet-tab"],
    ["bases-table-list-block", "table-list"],
    ["slides-page-list-block", "slide-page-list"],
  ]);
function Un() {
  return [];
}
function Wn(_0x2a78d0) {
  let _0x653c6f = {};
  return (
    _0x2a78d0.renderHost && (_0x653c6f.renderHost = _0x2a78d0.renderHost),
    _0x2a78d0.hostType === _0x34bdbd.UNIVER_DOC &&
      (_0x2a78d0.childType === _0x34bdbd.UNIVER_SHEET ||
        _0x2a78d0.childType === _0x34bdbd.UNIVER_BASE) &&
      ((_0x653c6f.verticalWheelMode = "host"),
      (_0x653c6f.horizontalWheelMode = "expand-then-self")),
    _0x2a78d0.mode === "float"
      ? ((_0x653c6f.floating = {
          enabled: true,
          layout: _0x2a78d0.layout,
          fullscreen: true,
        }),
        (_0x653c6f.tab = false),
        _0x653c6f)
      : ((_0x653c6f.floating = false),
        (_0x653c6f.tab = {
          enabled: true,
          container: Hn.get(_0x2a78d0.entry),
          replaceHostMenu: _0x2a78d0.menuBehavior === "host-override",
          hideHostFxBar: _0x2a78d0.menuBehavior === "host-override",
          lockHostRibbon: _0x2a78d0.menuBehavior === "host-override",
          thumbnail: _0x2a78d0.entry === "slides-page-list-block",
        }),
        _0x653c6f)
  );
}
var W = class {
  constructor() {
    x(this, "_capabilities", new Map());
  }
  register(_0x18625a) {
    let _0x5c92c8 = this._key(
      _0x18625a.hostType,
      _0x18625a.childType,
      _0x18625a.entry,
    );
    if (this._capabilities["has"](_0x5c92c8))
      throw Error("Embed capability already registered: " + _0x5c92c8);
    this._capabilities["set"](_0x5c92c8, _0x18625a);
  }
  registerMany(_0x1a1bea) {
    _0x1a1bea.forEach((_0x13574b) => this.register(_0x13574b));
  }
  getCapability(_0x476f36) {
    return this._capabilities["get"](
      this._key(_0x476f36.hostType, _0x476f36.childType, _0x476f36.entry),
    );
  }
  list() {
    return [...this._capabilities["values"]()];
  }
  _key(_0x440341, _0x31cb71, _0x4d0851) {
    return _0x440341 + ":" + _0x31cb71 + ":" + _0x4d0851;
  }
};
function Gn(_0x12c769) {
  if (!_0x12c769.has(W)) return;
  let _0x77608f = _0x12c769,
    _0x4e2969 = Vn.get(_0x77608f) ?? [];
  if (!_0x4e2969.length) return;
  let _0x1ed681 = _0x12c769.get(W);
  (_0x4e2969.forEach((_0x12f1d4) => Kn(_0x1ed681, _0x12f1d4)),
    Vn.delete(_0x77608f));
}
function Kn(_0x2b3d04, _0x7da1ce) {
  _0x2b3d04.getCapability(_0x7da1ce) || _0x2b3d04.register(_0x7da1ce);
}
var qn = class {
    assertCanCreate(_0x2fc5f7) {
      if (_0x2fc5f7.parentEmbedId) throw Error("NESTED_EMBED_NOT_SUPPORTED");
    }
  },
  Jn = class {
    resolve(_0x3d8830) {
      let _0x4a4267 = Fn(_0x3d8830.ref);
      if (B(R(_0x4a4267).unit["type"]) !== _0x3d8830.unitType)
        throw Error("EMBED_SOURCE_TYPE_MISMATCH");
      return {
        childType: _0x3d8830.unitType,
        source: {
          ref: _0x4a4267,
          unitType: _0x3d8830.unitType,
          ...(_0x3d8830.creationConfig === undefined
            ? undefined
            : { creationConfig: _0x3d8830.creationConfig }),
        },
      };
    }
  };
let G = class {
  constructor(_0x1c7081, _0x3c321f, _0x3c47eb, _0x40d59c) {
    ((this._model = _0x1c7081),
      (this._capabilityRegistry = _0x3c321f),
      (this._sourceResolver = _0x3c47eb),
      (this._nestedGuard = _0x40d59c));
  }
  prepareCreateEmbed(_0x32a7a5) {
    this._nestedGuard["assertCanCreate"](_0x32a7a5);
    let _0x19d341 = this._sourceResolver["resolve"](_0x32a7a5.source),
      _0x2ed1cd = I(_0x19d341.source["ref"]),
      _0x114dce = L(_0x2ed1cd),
      _0x330f5e = this._model["getAllActiveDescriptors"]().find(
        (_0x3ae322) => L(I(_0x3ae322.source["ref"])) === _0x114dce,
      );
    if (_0x330f5e) {
      let _0x1b4e5d = _0x19d341.childUnitId ?? _0x2ed1cd.unit["selector"],
        _0x3c200a = new S("EMBED_CHILD_UNIT_ALREADY_EMBEDDED", {
          hostUnitId: _0x32a7a5.hostUnitId,
          embedId: _0x32a7a5.embedId,
          childUnitId: _0x1b4e5d,
          duplicatedHostUnitId: _0x330f5e.hostUnitId,
          duplicatedEmbedId: _0x330f5e.embedId,
        });
      throw (
        (_0x3c200a.message =
          _0x3c200a.code +
          " child Unit " +
          JSON.stringify(_0x1b4e5d) +
          " is already used by Embed " +
          JSON.stringify(_0x330f5e.embedId) +
          " and cannot also be used by Embed " +
          JSON.stringify(_0x32a7a5.embedId) +
          ".\x20Each\x20child\x20Unit\x20can\x20belong\x20to\x20only\x20one\x20active\x20Embed;\x20remove\x20the\x20existing\x20Embed\x20or\x20create\x20a\x20separate\x20child\x20Unit."),
        _0x3c200a
      );
    }
    let _0x2bb85a = this._capabilityRegistry["getCapability"]({
      hostType: _0x32a7a5.hostType,
      childType: _0x19d341.childType,
      entry: _0x32a7a5.entry,
    });
    if (!_0x2bb85a)
      throw new S("EMBED_CAPABILITY_NOT_SUPPORTED", {
        hostType: _0x32a7a5.hostType,
        childType: _0x19d341.childType,
        entry: _0x32a7a5.entry,
      });
    return {
      descriptor: {
        embedId: _0x32a7a5.embedId,
        hostUnitId: _0x32a7a5.hostUnitId,
        hostType: _0x32a7a5.hostType,
        hostAnchorId: _0x32a7a5.hostAnchorId,
        entry: _0x32a7a5.entry,
        source: _0x19d341.source,
        childUnitId: _0x19d341.childUnitId,
        childType: _0x19d341.childType,
        mode: _0x32a7a5.mode ?? "interactive",
        sourceMeta: _0x32a7a5.sourceMeta ?? Wn(_0x2bb85a),
        displayTarget: dn(_0x19d341.childType, _0x32a7a5.displayTarget),
      },
      resolvedSource: _0x19d341,
    };
  }
  createEmbed(_0x330a0f) {
    let { descriptor: _0x5e9be6, resolvedSource: _0x2c9645 } =
      this.prepareCreateEmbed(_0x330a0f);
    return (
      this._model["addDescriptor"](_0x330a0f.hostUnitId, _0x5e9be6),
      {
        descriptor: this._model["getDescriptor"](
          _0x330a0f.hostUnitId,
          _0x330a0f.embedId,
        ),
        resolvedSource: _0x2c9645,
      }
    );
  }
  prepareCopyEmbed(_0x29e601) {
    let _0x12255b = this._model["getDescriptor"](
      _0x29e601.hostUnitId,
      _0x29e601.sourceEmbedId,
    );
    if (!_0x12255b) throw new S("EMBED_DESCRIPTOR_NOT_FOUND", _0x29e601);
    if (_0x12255b.hostType === _0x34bdbd.UNIVER_BOARD)
      throw new S("EMBED_COPY_NOT_SUPPORTED", {
        hostUnitId: _0x29e601.hostUnitId,
        embedId: _0x29e601.sourceEmbedId,
      });
    return {
      ..._0x12255b,
      embedId: _0x29e601.nextEmbedId,
      hostAnchorId: _0x29e601.nextHostAnchorId,
      childUnitId: undefined,
      lifecycle: "active",
      createdAt: undefined,
      updatedAt: undefined,
    };
  }
  copyEmbed(_0x3da9a5) {
    let _0x3b0d06 = this.prepareCopyEmbed(_0x3da9a5);
    return (
      this._model["addDescriptor"](_0x3da9a5.hostUnitId, _0x3b0d06),
      this._model["getDescriptor"](_0x3da9a5.hostUnitId, _0x3da9a5.nextEmbedId)
    );
  }
  removeEmbed(_0x2cfee9) {
    this._model["softDeleteDescriptor"](
      _0x2cfee9.hostUnitId,
      _0x2cfee9.embedId,
    );
  }
};
G = H(
  [
    V(0, _0x2702ca(U)),
    V(1, _0x2702ca(W)),
    V(2, _0x2702ca(Jn)),
    V(3, _0x2702ca(qn)),
  ],
  G,
);
const Yn = new WeakMap();
var K = class {
  constructor() {
    x(this, "_contributions", new Map());
  }
  register(_0x473385) {
    let _0x305318 = this._key(_0x473385.hostType, _0x473385.entry);
    if (this._contributions["has"](_0x305318))
      throw Error(
        "Embed\x20host\x20adapter\x20contribution\x20already\x20registered:\x20" +
          _0x305318,
      );
    this._contributions["set"](_0x305318, _0x473385);
  }
  get(_0x502385, _0x362748) {
    return this._contributions["get"](this._key(_0x502385, _0x362748));
  }
  list() {
    return [...this._contributions["values"]()];
  }
  readContext(_0xccdc25) {
    var _0x44c55f, _0x46030a;
    return (
      ((_0x44c55f = this.get(_0xccdc25.hostType, _0xccdc25.entry)) == null ||
      (_0x46030a = _0x44c55f.readContext) == null
        ? undefined
        : _0x46030a.call(_0x44c55f, {
            embedId: _0xccdc25.embedId,
            hostUnitId: _0xccdc25.hostUnitId,
            hostType: _0xccdc25.hostType,
            entry: _0xccdc25.entry,
            hostAnchorId: _0xccdc25.hostAnchorId,
            descriptor: _0xccdc25,
          })) ?? { resolved: false, entry: _0xccdc25.entry }
    );
  }
  createBoundsUpdatePlan(_0xfbdaf0, _0x31a610) {
    let _0x426424 = this.get(_0xfbdaf0.hostType, _0xfbdaf0.entry);
    if (!(_0x426424 != null && _0x426424.createBoundsUpdatePlan))
      throw Error(
        "EMBED_HOST_BOUNDS_NOT_SUPPORTED:" +
          _0xfbdaf0.hostType +
          ":" +
          _0xfbdaf0.entry,
      );
    return _0x426424.createBoundsUpdatePlan({
      embedId: _0xfbdaf0.embedId,
      hostUnitId: _0xfbdaf0.hostUnitId,
      hostType: _0xfbdaf0.hostType,
      entry: _0xfbdaf0.entry,
      hostAnchorId: _0xfbdaf0.hostAnchorId,
      descriptor: _0xfbdaf0,
      bounds: _0x31a610,
    });
  }
  createAnchor(_0x52ac46) {
    let _0x27f419 = this.get(_0x52ac46.hostType, _0x52ac46.entry);
    if (!_0x27f419)
      throw Error(
        "EMBED_HOST_ADAPTER_NOT_REGISTERED:" +
          _0x52ac46.hostType +
          ":" +
          _0x52ac46.entry,
      );
    if (!_0x27f419.createAnchor)
      throw Error(
        "EMBED_HOST_ADAPTER_CREATE_ANCHOR_NOT_IMPLEMENTED:" +
          _0x52ac46.hostType +
          ":" +
          _0x52ac46.entry,
      );
    return _0x27f419.createAnchor(_0x52ac46);
  }
  createAnchorPlan(_0x5d4ff5) {
    let _0x54906d = this.get(_0x5d4ff5.hostType, _0x5d4ff5.entry);
    if (!_0x54906d)
      throw Error(
        "EMBED_HOST_ADAPTER_NOT_REGISTERED:" +
          _0x5d4ff5.hostType +
          ":" +
          _0x5d4ff5.entry,
      );
    if (_0x54906d.createAnchorPlan)
      return _0x54906d.createAnchorPlan(_0x5d4ff5);
    if (!_0x54906d.createAnchor)
      throw Error(
        "EMBED_HOST_ADAPTER_CREATE_ANCHOR_NOT_IMPLEMENTED:" +
          _0x5d4ff5.hostType +
          ":" +
          _0x5d4ff5.entry,
      );
    let _0x2c9e74 =
        _0x5d4ff5.requestedAnchorId ?? _0x5d4ff5.embedId + "-anchor",
      _0x6b4590 = {
        embedId: _0x5d4ff5.embedId,
        hostUnitId: _0x5d4ff5.hostUnitId,
        hostType: _0x5d4ff5.hostType,
        entry: _0x5d4ff5.entry,
        hostAnchorId: _0x2c9e74,
      };
    return {
      hostAnchorId: _0x2c9e74,
      redoMutations: [{ id: Qe, params: _0x6b4590 }],
      undoMutations: [{ id: $e, params: _0x6b4590 }],
    };
  }
  removeAnchor(_0x369cae) {
    var _0x33acb7, _0x1a90f5;
    (_0x33acb7 = this.get(_0x369cae.hostType, _0x369cae.entry)) == null ||
      (_0x1a90f5 = _0x33acb7.removeAnchor) == null ||
      _0x1a90f5.call(_0x33acb7, _0x369cae);
  }
  afterCreateAnchor(_0x2bd4f3) {
    var _0x1e8200, _0x1a3428;
    (_0x1e8200 = this.get(_0x2bd4f3.hostType, _0x2bd4f3.entry)) == null ||
      (_0x1a3428 = _0x1e8200.afterCreateAnchor) == null ||
      _0x1a3428.call(_0x1e8200, _0x2bd4f3);
  }
  afterRemoveAnchor(_0x23da83) {
    var _0x4c9ac8, _0x21f6fe;
    (_0x4c9ac8 = this.get(_0x23da83.hostType, _0x23da83.entry)) == null ||
      (_0x21f6fe = _0x4c9ac8.afterRemoveAnchor) == null ||
      _0x21f6fe.call(_0x4c9ac8, _0x23da83);
  }
  activateAnchor(_0x1e2d16) {
    var _0x20b907, _0x1b6233;
    (_0x20b907 = this.get(_0x1e2d16.hostType, _0x1e2d16.entry)) == null ||
      (_0x1b6233 = _0x20b907.activateAnchor) == null ||
      _0x1b6233.call(_0x20b907, _0x1e2d16);
  }
  restoreAnchor(_0x4cdde6) {
    let _0xb81b4e = this.get(_0x4cdde6.hostType, _0x4cdde6.entry);
    if (!_0xb81b4e)
      throw Error(
        "EMBED_HOST_ADAPTER_NOT_REGISTERED:" +
          _0x4cdde6.hostType +
          ":" +
          _0x4cdde6.entry,
      );
    if (!_0xb81b4e.restoreAnchor)
      throw Error(
        "EMBED_HOST_ADAPTER_RESTORE_ANCHOR_NOT_IMPLEMENTED:" +
          _0x4cdde6.hostType +
          ":" +
          _0x4cdde6.entry,
      );
    return _0xb81b4e.restoreAnchor(_0x4cdde6);
  }
  removeAnchorPlan(_0x4ca138) {
    let _0x4005af = this.get(_0x4ca138.hostType, _0x4ca138.entry);
    if (_0x4005af != null && _0x4005af.removeAnchorPlan)
      return _0x4005af.removeAnchorPlan(_0x4ca138);
    let _0x257772 = {
      embedId: _0x4ca138.embedId,
      hostUnitId: _0x4ca138.hostUnitId,
      hostType: _0x4ca138.hostType,
      entry: _0x4ca138.entry,
      hostAnchorId: _0x4ca138.hostAnchorId,
    };
    return {
      redoMutations: [{ id: $e, params: _0x257772 }],
      undoMutations: [{ id: Qe, params: _0x257772 }],
    };
  }
  _key(_0x525628, _0x1f16b2) {
    return _0x525628 + ":" + _0x1f16b2;
  }
};
function Xn(_0xf6bab2, _0x12fde8) {
  if (_0xf6bab2.has(K)) {
    let _0x43920d = _0xf6bab2.get(K);
    _0x12fde8.forEach((_0xd917e3) => Qn(_0x43920d, _0xd917e3));
    return;
  }
  let _0xeaf1eb = _0xf6bab2,
    _0x514e3c = Yn.get(_0xeaf1eb) ?? [];
  (_0x12fde8.forEach((_0x3f13a5) => {
    _0x514e3c.some((_0x4f1c8e) => $n(_0x4f1c8e, _0x3f13a5)) ||
      _0x514e3c.push(_0x3f13a5);
  }),
    Yn.set(_0xeaf1eb, _0x514e3c));
}
function Zn(_0x3ebfa5) {
  if (!_0x3ebfa5.has(K)) return;
  let _0x17117a = _0x3ebfa5,
    _0x598149 = Yn.get(_0x17117a) ?? [];
  if (!_0x598149.length) return;
  let _0x1e0151 = _0x3ebfa5.get(K);
  (_0x598149.forEach((_0x34fb79) => Qn(_0x1e0151, _0x34fb79)),
    Yn.delete(_0x17117a));
}
function Qn(_0x14b814, _0x108fdb) {
  _0x14b814.get(_0x108fdb.hostType, _0x108fdb.entry) ||
    _0x14b814.register(_0x108fdb);
}
function $n(_0x4fc8bf, _0x3d626a) {
  return (
    _0x4fc8bf.hostType === _0x3d626a.hostType &&
    _0x4fc8bf.entry === _0x3d626a.entry
  );
}
let q = class {
  constructor(
    _0x46bc42,
    _0x571d06,
    _0x122526,
    _0x523d4c,
    _0x486048,
    _0x29e576,
  ) {
    ((this._creationService = _0x46bc42),
      (this._modelService = _0x571d06),
      (this._univerInstanceService = _0x122526),
      (this._hostAdapterRegistry = _0x523d4c),
      (this._commandService = _0x486048),
      (this._undoRedoService = _0x29e576));
  }
  createEmbed(_0x1baa25) {
    let _0x22617a = this._normalizeHostContext(_0x1baa25),
      _0x2ee3fe = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: _0x1baa25.embedId,
        hostUnitId: _0x1baa25.hostUnitId,
        hostType: _0x1baa25.hostType,
        entry: _0x1baa25.entry,
        requestedAnchorId: _0x1baa25.requestedHostAnchorId,
        hostContext: _0x22617a,
      }),
      _0x166b3 = this._creationService["prepareCreateEmbed"]({
        ..._0x1baa25,
        hostContext: _0x22617a,
        hostAnchorId: _0x2ee3fe.hostAnchorId,
      }),
      _0x20f145 = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: _0x1baa25.embedId,
        hostUnitId: _0x1baa25.hostUnitId,
        hostType: _0x1baa25.hostType,
        entry: _0x1baa25.entry,
        requestedAnchorId: _0x166b3.descriptor["hostAnchorId"],
        hostContext: _0x22617a,
        descriptor: _0x166b3.descriptor,
      }),
      _0x442ce3 = [
        ..._0x20f145.redoMutations,
        this._toSetDescriptorMutation(_0x166b3.descriptor),
      ],
      _0x1f720e = [
        this._toSoftDeleteDescriptorMutation(_0x166b3.descriptor),
        ..._0x20f145.undoMutations,
      ];
    this._executeAndPushUndoRedo(
      _0x166b3.descriptor["hostUnitId"],
      _0x442ce3,
      _0x1f720e,
    );
    let _0x4f1ceb = this._getDescriptor(
      _0x166b3.descriptor["hostUnitId"],
      _0x166b3.descriptor["embedId"],
    );
    return (this._afterCreateAnchor(_0x4f1ceb, _0x22617a), _0x4f1ceb);
  }
  copyEmbed(_0x13dc06) {
    let _0x1687e8 = this._getDescriptor(
        _0x13dc06.hostUnitId,
        _0x13dc06.sourceEmbedId,
      ),
      _0x4986ec = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: _0x13dc06.nextEmbedId,
        hostUnitId: _0x13dc06.hostUnitId,
        hostType: _0x1687e8.hostType,
        entry: _0x1687e8.entry,
        requestedAnchorId: _0x13dc06.requestedHostAnchorId,
        hostContext: _0x13dc06.hostContext,
      }),
      _0x547e75 = this._creationService["prepareCopyEmbed"]({
        hostUnitId: _0x13dc06.hostUnitId,
        sourceEmbedId: _0x13dc06.sourceEmbedId,
        nextEmbedId: _0x13dc06.nextEmbedId,
        nextHostAnchorId: _0x4986ec.hostAnchorId,
      }),
      _0x5b262e = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: _0x13dc06.nextEmbedId,
        hostUnitId: _0x13dc06.hostUnitId,
        hostType: _0x1687e8.hostType,
        entry: _0x1687e8.entry,
        requestedAnchorId: _0x547e75.hostAnchorId,
        hostContext: _0x13dc06.hostContext,
        descriptor: _0x547e75,
      }),
      _0x948117 = [
        ..._0x5b262e.redoMutations,
        this._toSetDescriptorMutation(_0x547e75),
      ],
      _0x320208 = [
        this._toSoftDeleteDescriptorMutation(_0x547e75),
        ..._0x5b262e.undoMutations,
      ];
    this._executeAndPushUndoRedo(_0x547e75.hostUnitId, _0x948117, _0x320208);
    let _0x519185 = this._getDescriptor(
      _0x547e75.hostUnitId,
      _0x547e75.embedId,
    );
    return (
      this._afterCreateAnchor(_0x519185, _0x13dc06.hostContext),
      _0x519185
    );
  }
  removeEmbed(_0x43da44) {
    let _0x4ec8d7 = this._modelService["getDescriptor"](
      _0x43da44.hostUnitId,
      _0x43da44.embedId,
    );
    if (!_0x4ec8d7 || _0x4ec8d7.lifecycle === "soft-delete d") return false;
    let _0x502ebb = this._hostAdapterRegistry["removeAnchorPlan"]({
        embedId: _0x4ec8d7.embedId,
        hostUnitId: _0x4ec8d7.hostUnitId,
        hostType: _0x4ec8d7.hostType,
        entry: _0x4ec8d7.entry,
        hostAnchorId: _0x4ec8d7.hostAnchorId,
        descriptor: _0x4ec8d7,
      }),
      _0x44dcb3 = [
        ..._0x502ebb.redoMutations,
        this._toSoftDeleteDescriptorMutation(_0x4ec8d7),
      ],
      _0x20e3b6 = [
        ..._0x502ebb.undoMutations,
        this._toSetDescriptorMutation({ ..._0x4ec8d7, lifecycle: "active" }),
      ];
    return (
      this._executeAndPushUndoRedo(_0x4ec8d7.hostUnitId, _0x44dcb3, _0x20e3b6),
      this._afterRemoveAnchor(_0x4ec8d7),
      true
    );
  }
  setDisplayTarget(_0x508d6e) {
    let _0x23ae93 = this._modelService["getDescriptor"](
      _0x508d6e.hostUnitId,
      _0x508d6e.embedId,
    );
    if (!_0x23ae93 || _0x23ae93.lifecycle === "soft-delete d") return false;
    let _0x3a9b1e = dn(_0x23ae93.childType, _0x508d6e.displayTarget);
    if (fn(_0x23ae93.displayTarget, _0x3a9b1e)) return true;
    let _0x146a66 = { ..._0x23ae93, displayTarget: _0x3a9b1e };
    return (
      this._executeAndPushUndoRedo(
        _0x23ae93.hostUnitId,
        [this._toSetDescriptorMutation(_0x146a66)],
        [this._toSetDescriptorMutation(_0x23ae93)],
      ),
      true
    );
  }
  setBounds(_0x1a7701) {
    cr(_0x1a7701.bounds);
    let _0x3d8061 = this._modelService["getDescriptor"](
      _0x1a7701.hostUnitId,
      _0x1a7701.embedId,
    );
    if (!_0x3d8061 || _0x3d8061.lifecycle === "soft-delete d") return false;
    let _0x5daf2b = this._hostAdapterRegistry["createBoundsUpdatePlan"](
      _0x3d8061,
      _0x1a7701.bounds,
    );
    return (
      this._executeAndPushUndoRedo(
        _0x3d8061.hostUnitId,
        _0x5daf2b.redoMutations,
        _0x5daf2b.undoMutations,
      ),
      true
    );
  }
  _executeAndPushUndoRedo(_0xb22247, _0x1bdea6, _0x243c25) {
    let _0x44bfb1 = tr(_0x1bdea6),
      _0x352688 = tr(_0x243c25),
      _0x41a8c0 = _0x4a4b2d(_0x44bfb1, this._commandService);
    if (!_0x41a8c0.result) {
      let _0x1f4293 = _0x44bfb1[_0x41a8c0.index],
        _0x402a53 =
          _0x41a8c0.error instanceof Error
            ? _0x41a8c0.error["message"]
            : String(_0x41a8c0.error ?? "");
      throw Error(
        "EMBED_HOST_LIFECYCLE_MUTATION_FAILED:" +
          ((_0x1f4293 == null ? undefined : _0x1f4293.id) ?? _0x41a8c0.index) +
          ":" +
          _0x402a53,
      );
    }
    this._undoRedoService["pushUndoRedo"]({
      unitID: _0xb22247,
      undoMutations: _0x352688,
      redoMutations: _0x44bfb1,
    });
  }
  _getDescriptor(_0x24e6f2, _0x12ea73) {
    let _0x43d80a = this._modelService["getDescriptor"](_0x24e6f2, _0x12ea73);
    if (!_0x43d80a) throw Error("EMBED_DESCRIPTOR_NOT_FOUND");
    return _0x43d80a;
  }
  _normalizeHostContext(_0x3148f7) {
    C({
      hostUnitId: _0x3148f7.hostUnitId,
      entry: _0x3148f7.entry,
      hostContext: _0x3148f7.hostContext,
    });
    let _0x4f0e1d = _0x3148f7.hostContext
      ? { ..._0x3148f7.hostContext }
      : undefined;
    if (
      _0x3148f7.hostType === _0x34bdbd.UNIVER_SHEET &&
      _0x3148f7.entry === b.SheetsFloatingObject
    ) {
      if (
        typeof (_0x4f0e1d == null ? undefined : _0x4f0e1d.subUnitId) == "string"
      )
        return _0x4f0e1d;
      let _0x128a3e = rr(this._univerInstanceService, _0x3148f7.hostUnitId);
      return _0x128a3e ? { ..._0x4f0e1d, subUnitId: _0x128a3e } : _0x4f0e1d;
    }
    if (
      _0x3148f7.hostType === _0x34bdbd.UNIVER_SLIDE &&
      _0x3148f7.entry === b.SlidesFloatingObject
    ) {
      if (
        typeof (_0x4f0e1d == null ? undefined : _0x4f0e1d.subUnitId) == "string"
      )
        return _0x4f0e1d;
      let _0x669049 = ir(this._univerInstanceService, _0x3148f7.hostUnitId);
      return _0x669049 ? { ..._0x4f0e1d, subUnitId: _0x669049 } : _0x4f0e1d;
    }
    if (
      _0x3148f7.hostType === _0x34bdbd.UNIVER_BOARD &&
      _0x3148f7.entry === b.BoardsFloatingObject
    ) {
      if (
        typeof (_0x4f0e1d == null ? undefined : _0x4f0e1d.subUnitId) == "string"
      )
        return _0x4f0e1d;
      let _0x363ee8 = nr(this._univerInstanceService, _0x3148f7.hostUnitId);
      return _0x363ee8 ? { ..._0x4f0e1d, subUnitId: _0x363ee8 } : _0x4f0e1d;
    }
    return _0x4f0e1d;
  }
  _toSetDescriptorMutation(_0x4a7669) {
    let _0x48d622 = { ..._0x4a7669 };
    return (
      delete _0x48d622.childUnitId,
      {
        id: zn.id,
        params: { unitId: _0x4a7669.hostUnitId, descriptor: _0x48d622 },
      }
    );
  }
  _toSoftDeleteDescriptorMutation(_0x462fb8) {
    return {
      id: Bn.id,
      params: { unitId: _0x462fb8.hostUnitId, embedId: _0x462fb8.embedId },
    };
  }
  _afterCreateAnchor(_0x1d3cc5, _0x4154bf) {
    try {
      this._hostAdapterRegistry["afterCreateAnchor"]({
        embedId: _0x1d3cc5.embedId,
        hostUnitId: _0x1d3cc5.hostUnitId,
        hostType: _0x1d3cc5.hostType,
        entry: _0x1d3cc5.entry,
        hostAnchorId: _0x1d3cc5.hostAnchorId,
        hostContext: _0x4154bf,
        descriptor: _0x1d3cc5,
      });
    } catch {}
  }
  _afterRemoveAnchor(_0x57f0e1) {
    try {
      this._hostAdapterRegistry["afterRemoveAnchor"]({
        embedId: _0x57f0e1.embedId,
        hostUnitId: _0x57f0e1.hostUnitId,
        hostType: _0x57f0e1.hostType,
        entry: _0x57f0e1.entry,
        hostAnchorId: _0x57f0e1.hostAnchorId,
        descriptor: _0x57f0e1,
      });
    } catch {}
  }
};
q = H(
  [
    V(0, _0x2702ca(G)),
    V(1, _0x2702ca(U)),
    V(2, _0x2f4124),
    V(3, _0x2702ca(K)),
    V(4, _0xf66d63),
    V(5, _0x33b01c),
  ],
  q,
);
const er = new Set([zn.id, Bn.id, v, y]);
function tr(_0x370801) {
  return [
    ..._0x370801.filter((_0x59f114) => !er.has(_0x59f114.id)),
    ..._0x370801.filter((_0x29bbfc) => er.has(_0x29bbfc.id)),
  ];
}
function nr(_0x124cf0, _0x4733ce) {
  var _0x3e512f;
  return (_0x3e512f = _0x124cf0.getUnit(_0x4733ce, _0x34bdbd.UNIVER_BOARD)) ==
    null
    ? undefined
    : _0x3e512f.getActivePageId();
}
function rr(_0x15a9e6, _0x1dda53) {
  var _0x42a6e6, _0x5597ce, _0x2f65be, _0x2db5d3;
  let _0xb47fb2 = _0x15a9e6.getUnit(_0x1dda53, _0x34bdbd.UNIVER_SHEET),
    _0x33a1fc =
      _0xb47fb2 == null || (_0x42a6e6 = _0xb47fb2.getActiveSheet) == null
        ? undefined
        : _0x42a6e6.call(_0xb47fb2);
  return (
    (_0x33a1fc == null || (_0x5597ce = _0x33a1fc.getSheetId) == null
      ? undefined
      : _0x5597ce.call(_0x33a1fc)) ??
    (_0x33a1fc == null || (_0x2f65be = _0x33a1fc.getSheetID) == null
      ? undefined
      : _0x2f65be.call(_0x33a1fc)) ??
    (_0x33a1fc == null || (_0x2db5d3 = _0x33a1fc.getConfig) == null
      ? undefined
      : _0x2db5d3.call(_0x33a1fc).id)
  );
}
function ir(_0x553b8f, _0x5189b0) {
  var _0x45744e,
    _0x5c9306,
    _0x246ebb,
    _0x49f667,
    _0x2f4dea,
    _0x87ddb4,
    _0x3cf7b9;
  let _0x125cc1 = _0x553b8f.getUnit(_0x5189b0, _0x34bdbd.UNIVER_SLIDE),
    _0xc98ffb = or(
      (_0x125cc1 == null ||
      (_0x45744e = _0x125cc1.pageManager) == null ||
      (_0x5c9306 = _0x45744e.getActiveSlide) == null
        ? undefined
        : _0x5c9306.call(_0x45744e)) ??
        (_0x125cc1 == null || (_0x246ebb = _0x125cc1.getActivePage) == null
          ? undefined
          : _0x246ebb.call(_0x125cc1)),
    );
  if (_0xc98ffb) return _0xc98ffb;
  let _0xf55af4 =
    _0x125cc1 == null || (_0x49f667 = _0x125cc1.getSnapshot) == null
      ? undefined
      : _0x49f667.call(_0x125cc1);
  return (
    (typeof (_0xf55af4 == null ? undefined : _0xf55af4.activeSlideId) ==
    "string"
      ? _0xf55af4.activeSlideId
      : undefined) ||
    (ar(_0xf55af4 == null ? undefined : _0xf55af4.slideOrder) ??
      ar(
        (_0x2f4dea = sr(_0xf55af4 == null ? undefined : _0xf55af4.body)) == null
          ? undefined
          : _0x2f4dea.pageOrder,
      )) ||
    (_0x125cc1 == null ||
    (_0x87ddb4 = _0x125cc1.pageManager) == null ||
    (_0x3cf7b9 = _0x87ddb4.getSlides) == null ||
    (_0x3cf7b9 = _0x3cf7b9.call(_0x87ddb4)) == null
      ? undefined
      : _0x3cf7b9
          .map((_0x203a88) => or(_0x203a88))
          .find((_0x389ed2) => typeof _0x389ed2 == "string"))
  );
}
function ar(_0x4674fb) {
  return Array.isArray(_0x4674fb)
    ? _0x4674fb.find((_0xd86abc) => typeof _0xd86abc == "string")
    : undefined;
}
function or(_0x1fd2c3) {
  let _0x5d4d05 = sr(_0x1fd2c3);
  if (typeof (_0x5d4d05 == null ? undefined : _0x5d4d05.id) == "string")
    return _0x5d4d05.id;
  let _0x311560 =
      typeof (_0x5d4d05 == null ? undefined : _0x5d4d05.getId) == "function"
        ? _0x5d4d05.getId
        : undefined,
    _0x3556c6 = _0x311560 == null ? undefined : _0x311560.call(_0x1fd2c3);
  return typeof _0x3556c6 == "string" ? _0x3556c6 : undefined;
}
function sr(_0x5817b6) {
  return _0x5817b6 && typeof _0x5817b6 == "object" && !Array.isArray(_0x5817b6)
    ? _0x5817b6
    : undefined;
}
function cr(_0x334312) {
  if (
    ![_0x334312.left, _0x334312.top, _0x334312.width, _0x334312.height].every(
      Number.isFinite,
    ) ||
    _0x334312.width <= 0 ||
    _0x334312.height <= 0
  )
    throw Error("EMBED_BOUNDS_INVALID");
}
const lr = {
    id: "embed.command.create",
    type: _0x2348ed.COMMAND,
    handler: (_0xa2a636, _0x38e036) =>
      _0x38e036 ? _0xa2a636.get(q).createEmbed(_0x38e036) : false,
  },
  ur = {
    id: "embed.command.copy",
    type: _0x2348ed.COMMAND,
    handler: (_0x31d8fe, _0x1f2d8d) =>
      _0x1f2d8d ? _0x31d8fe.get(q).copyEmbed(_0x1f2d8d) : false,
  },
  dr = {
    id: "embed.command.remove",
    type: _0x2348ed.COMMAND,
    handler: (_0x736915, _0xcdd1b0) =>
      _0xcdd1b0 ? _0x736915.get(q).removeEmbed(_0xcdd1b0) : false,
  },
  fr = {
    id: "embed.command.set-display-target",
    type: _0x2348ed.COMMAND,
    handler: (_0x57bcb3, _0x48c528) =>
      _0x48c528 ? _0x57bcb3.get(q).setDisplayTarget(_0x48c528) : false,
  },
  pr = {
    id: "embed.command.set-bounds",
    type: _0x2348ed.COMMAND,
    handler: (_0x141cb, _0x1f4c56) =>
      _0x1f4c56 ? _0x141cb.get(q).setBounds(_0x1f4c56) : false,
  },
  mr = {
    id: "embed.command.set-sheet-placement",
    type: _0x2348ed.COMMAND,
    handler: (_0xed4156, _0x2b7333) => {
      if (!_0x2b7333) return false;
      let _0x438644 = _0xed4156
        .get(U)
        .getDescriptor(_0x2b7333.hostUnitId, _0x2b7333.embedId);
      if (
        !_0x438644 ||
        _0x438644.lifecycle === "soft-delete d" ||
        _0x438644.entry !== b.SheetsFloatingObject
      )
        return false;
      let _0x175705 = Ot(
          {
            embedId: _0x438644.embedId,
            hostUnitId: _0x438644.hostUnitId,
            hostType: _0x438644.hostType,
            entry: _0x438644.entry,
            hostAnchorId: _0x438644.hostAnchorId,
            descriptor: _0x438644,
          },
          _0x2b7333.placement,
          _0xed4156.get(M),
          _0xed4156.get(_0x307455),
          _0xed4156.get(_0x1d1ba6),
        ),
        _0x26e627 = _0xed4156.get(_0xf66d63);
      return _0x4a4b2d(_0x175705.redoMutations, _0x26e627).result
        ? (_0xed4156
            .get(_0x33b01c)
            .pushUndoRedo({
              unitID: _0x438644.hostUnitId,
              undoMutations: _0x175705.undoMutations,
              redoMutations: _0x175705.redoMutations,
            }),
          true)
        : false;
    },
  };
var hr = "@univerjs-pro/embed",
  gr = "1.0.0-insiders.20260907-70fc579";
const _r = {
    id: v,
    type: _0x2348ed.MUTATION,
    handler: (_0x22b133, _0x178ddb) =>
      _0x178ddb ? (_0x22b133.get(M).setAnchor(_0x178ddb.record), true) : false,
  },
  vr = {
    id: y,
    type: _0x2348ed.MUTATION,
    handler: (_0x2221b3, _0x59ee46) =>
      _0x59ee46
        ? (_0x2221b3
            .get(M)
            .removeAnchor(_0x59ee46.hostUnitId, _0x59ee46.hostAnchorId),
          true)
        : false,
  },
  yr = {
    id: Qe,
    type: _0x2348ed.MUTATION,
    handler: (_0x1f06cf, _0x59a3a8) => {
      if (!_0x59a3a8) return false;
      if (
        _0x1f06cf
          .get(K)
          .createAnchor({
            embedId: _0x59a3a8.embedId,
            hostUnitId: _0x59a3a8.hostUnitId,
            hostType: _0x59a3a8.hostType,
            entry: _0x59a3a8.entry,
            requestedAnchorId: _0x59a3a8.hostAnchorId,
          }) !== _0x59a3a8.hostAnchorId
      )
        throw Error("EMBED_HOST_ANCHOR_RESTORE_MISMATCH");
      return true;
    },
  },
  br = {
    id: $e,
    type: _0x2348ed.MUTATION,
    handler: (_0x3dc048, _0x6194dd) =>
      _0x6194dd ? (_0x3dc048.get(K).removeAnchor(_0x6194dd), true) : false,
  },
  xr = {};
let Sr = (function (_0x41e192) {
  return ((_0x41e192.RANGE = "range"), (_0x41e192.TABLE = "table"), _0x41e192);
})({});
var J = class extends Error {
  constructor(_0x1131e2, _0x2b144e) {
    (super(_0x1131e2),
      x(this, "code", undefined),
      x(this, "details", undefined),
      (this.name = "ReferencedUnitError"),
      (this.code = _0x1131e2),
      (this.details = _0x2b144e));
  }
};
const Y = _0x186af1("univer.embed.referenced-unit-manager-service");
let Cr = class extends _0x10b325 {
  constructor(_0x5d3226, _0x3e3734, _0x12dd26, _0x55d2f7) {
    (super(),
      (this._resourceManagerService = _0x5d3226),
      (this._referencedUnitManagerService = _0x3e3734),
      (this._embedModelService = _0x12dd26),
      (this._unitLeaseService = _0x55d2f7),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: "UNIVER_EMBED_RESOURCE_PLUGIN",
        businesses: [
          _0x34bdbd.UNIVER_DOC,
          _0x34bdbd.UNIVER_SHEET,
          _0x34bdbd.UNIVER_BASE,
          _0x34bdbd.UNIVER_SLIDE,
          _0x34bdbd.UNIVER_BOARD,
        ],
        toJson: (_0x366464) => this._embedModelService["toJson"](_0x366464),
        parseJson: (_0x565d21) =>
          this._embedModelService["parseJson"](_0x565d21),
        onLoad: (_0x37577b, _0xaa96c7) =>
          this._embedModelService["loadUnit"](_0x37577b, _0xaa96c7),
        onUnLoad: (_0x5ffaf1) => this._unloadUnit(_0x5ffaf1),
      }),
    );
  }
  _unloadUnit(_0x2d4bcd) {
    (this._embedModelService["unloadUnit"](_0x2d4bcd),
      this._unitLeaseService["releaseUnit"](_0x2d4bcd),
      this._referencedUnitManagerService["releaseUnit"](_0x2d4bcd));
  }
};
Cr = H(
  [
    V(0, _0x21d4e7),
    V(1, _0x2702ca(Y)),
    V(2, _0x2702ca(U)),
    V(3, _0x2702ca(Rn)),
  ],
  Cr,
);
const wr = [
    {
      hostType: _0x34bdbd.UNIVER_DOC,
      childType: _0x34bdbd.UNIVER_BOARD,
      entry: b.DocsCustomBlock,
      mode: "float",
      layout: "content-bounds-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_DOC,
      childType: _0x34bdbd.UNIVER_SHEET,
      entry: b.DocsCustomBlock,
      mode: "float",
      layout: "docs-sticky-sheet",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_DOC,
      childType: _0x34bdbd.UNIVER_BASE,
      entry: b.DocsCustomBlock,
      mode: "float",
      layout: "docs-sticky-base",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_DOC,
      childType: _0x34bdbd.UNIVER_SLIDE,
      entry: b.DocsCustomBlock,
      mode: "float",
      layout: "aspect-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
  ],
  Tr = [
    {
      hostType: _0x34bdbd.UNIVER_SHEET,
      childType: _0x34bdbd.UNIVER_BOARD,
      entry: b.SheetsFloatingObject,
      mode: "float",
      renderHost: "sheets-drawing-dom",
      layout: "content-bounds-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SHEET,
      childType: _0x34bdbd.UNIVER_BOARD,
      entry: b.SheetsSheetTab,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SHEET,
      childType: _0x34bdbd.UNIVER_DOC,
      entry: b.SheetsFloatingObject,
      mode: "float",
      renderHost: "sheets-drawing-dom",
      layout: "doc-width-scale",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SHEET,
      childType: _0x34bdbd.UNIVER_SLIDE,
      entry: b.SheetsFloatingObject,
      mode: "float",
      renderHost: "sheets-drawing-dom",
      layout: "aspect-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SHEET,
      childType: _0x34bdbd.UNIVER_BASE,
      entry: b.SheetsFloatingObject,
      mode: "float",
      renderHost: "sheets-drawing-dom",
      layout: "scroll-contained",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SHEET,
      childType: _0x34bdbd.UNIVER_BASE,
      entry: b.SheetsSheetTab,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SHEET,
      childType: _0x34bdbd.UNIVER_DOC,
      entry: b.SheetsSheetTab,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SHEET,
      childType: _0x34bdbd.UNIVER_SLIDE,
      entry: b.SheetsSheetTab,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
  ],
  Er = [
    {
      hostType: _0x34bdbd.UNIVER_SLIDE,
      childType: _0x34bdbd.UNIVER_BOARD,
      entry: b.SlidesFloatingObject,
      mode: "float",
      renderHost: "slides-object-dom",
      layout: "content-bounds-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SLIDE,
      childType: _0x34bdbd.UNIVER_BOARD,
      entry: b.SlidesPageListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SLIDE,
      childType: _0x34bdbd.UNIVER_SHEET,
      entry: b.SlidesFloatingObject,
      mode: "float",
      renderHost: "slides-object-dom",
      layout: "scroll-contained",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SLIDE,
      childType: _0x34bdbd.UNIVER_BASE,
      entry: b.SlidesFloatingObject,
      mode: "float",
      renderHost: "slides-object-dom",
      layout: "scroll-contained",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SLIDE,
      childType: _0x34bdbd.UNIVER_DOC,
      entry: b.SlidesFloatingObject,
      mode: "float",
      renderHost: "slides-object-dom",
      layout: "doc-width-scale",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SLIDE,
      childType: _0x34bdbd.UNIVER_SHEET,
      entry: b.SlidesPageListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SLIDE,
      childType: _0x34bdbd.UNIVER_BASE,
      entry: b.SlidesPageListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_SLIDE,
      childType: _0x34bdbd.UNIVER_DOC,
      entry: b.SlidesPageListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
  ],
  Dr = [
    {
      hostType: _0x34bdbd.UNIVER_BASE,
      childType: _0x34bdbd.UNIVER_BOARD,
      entry: b.BasesTableListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_BASE,
      childType: _0x34bdbd.UNIVER_SHEET,
      entry: b.BasesTableListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_BASE,
      childType: _0x34bdbd.UNIVER_DOC,
      entry: b.BasesTableListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: _0x34bdbd.UNIVER_BASE,
      childType: _0x34bdbd.UNIVER_SLIDE,
      entry: b.BasesTableListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
  ],
  Or = [
    _0x34bdbd.UNIVER_SHEET,
    _0x34bdbd.UNIVER_DOC,
    _0x34bdbd.UNIVER_SLIDE,
    _0x34bdbd.UNIVER_BASE,
  ].map((_0x3b8de8) => ({
    hostType: _0x34bdbd.UNIVER_BOARD,
    childType: _0x3b8de8,
    entry: b.BoardsFloatingObject,
    mode: "float",
    renderHost: "boards-object-dom",
    layout:
      _0x3b8de8 === _0x34bdbd.UNIVER_DOC
        ? "doc-width-scale"
        : _0x3b8de8 === _0x34bdbd.UNIVER_SLIDE
          ? "aspect-fit"
          : "scroll-contained",
    menuBehavior: "floating",
    nestedEmbed: false,
  }));
function kr() {
  return [...wr, ...Tr, ...Er, ...Dr, ...Or];
}
function Ar(_0x4b4b22, _0x53e83b) {
  return {
    hostType: _0x34bdbd.UNIVER_BASE,
    entry: b.BasesTableListBlock,
    createAnchorPlan: (_0x331492) =>
      Hr(Mr(_0x331492, _0x53e83b), "EMBED_BASES_TABLE_LIST_ANCHOR_UNAVAILABLE"),
    restoreAnchor: (_0x1ed8c3) =>
      Ur(Fr(_0x1ed8c3, _0x53e83b), "EMBED_BASES_TABLE_LIST_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: (_0x34cd42) => {
      let _0x2a2bd2 =
        (_0x4b4b22 == null
          ? undefined
          : _0x4b4b22.getAnchor(
              _0x34cd42.hostUnitId,
              _0x34cd42.hostAnchorId,
            )) ?? Pr(_0x34cd42);
      return (
        Nr(_0x34cd42, _0x2a2bd2, _0x53e83b) ?? {
          redoMutations: [
            {
              id: "embed.mutation.remove-host-anchor-record",
              params: {
                hostUnitId: _0x34cd42.hostUnitId,
                hostAnchorId: _0x34cd42.hostAnchorId,
              },
            },
          ],
          undoMutations: [
            {
              id: "embed.mutation.set-host-anchor-record",
              params: { record: { ..._0x2a2bd2, lifecycle: "active" } },
            },
          ],
        }
      );
    },
    readContext: (_0x4ff48d) => jr(_0x4ff48d, _0x53e83b),
  };
}
function jr(_0x1e122a, _0x30ef0e) {
  let _0x36804a = Ir(_0x30ef0e, _0x1e122a.hostUnitId),
    _0x378fa1 =
      _0x36804a == null ? undefined : _0x36804a.tables[_0x1e122a.hostAnchorId],
    _0x5c9d25 =
      (_0x36804a == null
        ? undefined
        : _0x36804a.tableOrder["indexOf"](_0x1e122a.hostAnchorId)) ?? -1;
  return !_0x378fa1 || _0x5c9d25 < 0
    ? { resolved: false, entry: b.BasesTableListBlock }
    : {
        resolved: true,
        entry: b.BasesTableListBlock,
        tableId: _0x1e122a.hostAnchorId,
        index: _0x5c9d25,
        name: _0x378fa1.name,
      };
}
function Mr(_0x45ac27, _0x441e35) {
  var _0x1b278e, _0x29c6ed;
  let _0x503914 = Ir(_0x441e35, _0x45ac27.hostUnitId);
  if (!_0x503914) return;
  C({
    hostUnitId: _0x45ac27.hostUnitId,
    entry: _0x45ac27.entry,
    hostContext: _0x45ac27.hostContext,
    maxIndex: _0x503914.tableOrder["length"],
  });
  let _0x153a4f = Pr(_0x45ac27),
    _0x4c4342 = Rr(_0x153a4f.hostContext, "tableName") ?? _0x45ac27.embedId,
    _0x49a328 = _0x3e5f32({
      embedId: _0x153a4f.embedId,
      hostAnchorId: _0x153a4f.hostAnchorId,
      name: _0x4c4342,
      childUnitId:
        (_0x1b278e = _0x45ac27.descriptor) == null
          ? undefined
          : _0x1b278e.childUnitId,
      childType:
        (_0x29c6ed = _0x45ac27.descriptor) == null
          ? undefined
          : _0x29c6ed.childType,
    }),
    _0x3c2a86 = Br(
      Lr(_0x153a4f.hostContext, "tableIndex") ?? _0x503914.tableOrder["length"],
      _0x503914.tableOrder["length"],
    ),
    _0x934e9b = _0xe2de9b({
      unitId: _0x153a4f.hostUnitId,
      snapshot: _0x503914,
      table: _0x49a328,
      index: _0x3c2a86,
    });
  return (
    (_0x153a4f.hostContext = {
      ..._0x153a4f.hostContext,
      tableIndex: _0x3c2a86,
      tableName: _0x4c4342,
    }),
    {
      hostAnchorId: _0x153a4f.hostAnchorId,
      redoMutations: [_0x934e9b, { id: v, params: { record: _0x153a4f } }],
      undoMutations: [
        {
          id: y,
          params: {
            hostUnitId: _0x153a4f.hostUnitId,
            hostAnchorId: _0x153a4f.hostAnchorId,
          },
        },
        Vr(_0x503914, _0x934e9b),
      ],
    }
  );
}
function Nr(_0x54ecdd, _0x17afe8, _0x450f7a) {
  let _0x5872b9 = Ir(_0x450f7a, _0x54ecdd.hostUnitId),
    _0x5873db =
      _0x5872b9 == null ? undefined : _0x5872b9.tables[_0x54ecdd.hostAnchorId];
  if (!_0x5872b9 || !_0x5873db) return;
  let _0x57524c = _0x5872b9.tableOrder["indexOf"](_0x54ecdd.hostAnchorId),
    _0x16bd44 = _0x428cfd({
      unitId: _0x54ecdd.hostUnitId,
      snapshot: _0x5872b9,
      tableId: _0x54ecdd.hostAnchorId,
    });
  if (_0x16bd44)
    return {
      redoMutations: [
        {
          id: y,
          params: {
            hostUnitId: _0x54ecdd.hostUnitId,
            hostAnchorId: _0x54ecdd.hostAnchorId,
          },
        },
        _0x16bd44,
      ],
      undoMutations: [
        Vr(_0x5872b9, _0x16bd44),
        {
          id: v,
          params: {
            record: {
              ..._0x17afe8,
              lifecycle: "active",
              hostContext: { ..._0x17afe8.hostContext, tableIndex: _0x57524c },
            },
          },
        },
      ],
    };
}
function Pr(_0x1ba49c) {
  return {
    hostAnchorId:
      _0x1ba49c.requestedAnchorId ?? "bases-table-list:" + _0x1ba49c.embedId,
    embedId: _0x1ba49c.embedId,
    hostUnitId: _0x1ba49c.hostUnitId,
    hostType: _0x1ba49c.hostType,
    entry: _0x1ba49c.entry,
    kind: "bases-table-list-block",
    hostContext: _0x1ba49c.hostContext,
    lifecycle: "active",
  };
}
function Fr(_0x4873f5, _0xb7baf4) {
  let _0x5a30c9 = Ir(_0xb7baf4, _0x4873f5.hostUnitId);
  if (!_0x5a30c9) return;
  let _0x1567f9 = Pr({
      ..._0x4873f5,
      requestedAnchorId: _0x4873f5.hostAnchorId,
    }),
    _0x4b8b2f = Rr(_0x1567f9.hostContext, "tableName") ?? _0x4873f5.embedId,
    _0x221fda = Br(
      Lr(_0x1567f9.hostContext, "tableIndex") ?? _0x5a30c9.tableOrder["length"],
      _0x5a30c9.tableOrder["length"],
    );
  if (!_0x5a30c9.tables[_0x1567f9.hostAnchorId]) {
    var _0x1f687c, _0x150e69;
    ((_0x5a30c9.tables[_0x1567f9.hostAnchorId] = _0x3e5f32({
      embedId: _0x1567f9.embedId,
      hostAnchorId: _0x1567f9.hostAnchorId,
      name: _0x4b8b2f,
      childUnitId:
        (_0x1f687c = _0x4873f5.descriptor) == null
          ? undefined
          : _0x1f687c.childUnitId,
      childType:
        (_0x150e69 = _0x4873f5.descriptor) == null
          ? undefined
          : _0x150e69.childType,
    })),
      (_0x5a30c9.tableOrder = zr(
        _0x5a30c9.tableOrder,
        _0x1567f9.hostAnchorId,
        _0x221fda,
      )));
  }
  return {
    ..._0x1567f9,
    hostContext: {
      ..._0x1567f9.hostContext,
      tableIndex: _0x221fda,
      tableName: _0x4b8b2f,
    },
  };
}
function Ir(_0x2f9686, _0x355cf0) {
  var _0x3f56d8;
  return _0x2f9686 == null ||
    (_0x3f56d8 = _0x2f9686.getUnit(_0x355cf0, _0x34bdbd.UNIVER_BASE)) == null
    ? undefined
    : _0x3f56d8.getSnapshot();
}
function Lr(_0x1dc4ee, _0x27550f) {
  return typeof (_0x1dc4ee == null ? undefined : _0x1dc4ee[_0x27550f]) ==
    "number"
    ? _0x1dc4ee[_0x27550f]
    : undefined;
}
function Rr(_0x8491de, _0x5af3ff) {
  return typeof (_0x8491de == null ? undefined : _0x8491de[_0x5af3ff]) ==
    "string"
    ? _0x8491de[_0x5af3ff]
    : undefined;
}
function zr(_0x672492, _0x2a3a80, _0x530834) {
  let _0x3654f0 = _0x672492.filter((_0x45d6f2) => _0x45d6f2 !== _0x2a3a80);
  return (
    _0x3654f0.splice(
      Math.max(0, Math.min(_0x530834, _0x3654f0.length)),
      0,
      _0x2a3a80,
    ),
    _0x3654f0
  );
}
function Br(_0x46dcf2, _0x16dcd8) {
  return Math.max(0, Math.min(_0x46dcf2, _0x16dcd8));
}
function Vr(_0x37908a, _0x4fa651) {
  return {
    id: _0x4fa651.id,
    params: {
      ..._0x4fa651.params,
      op: new _0x17fffe().invertOp(_0x37908a, _0x4fa651.params["op"]),
    },
  };
}
function Hr(_0x2e64dd, _0x411c77) {
  if (!_0x2e64dd) throw Error(_0x411c77);
  return _0x2e64dd;
}
function Ur(_0x3aae59, _0x580c7d) {
  if (!_0x3aae59) throw Error(_0x580c7d);
  return _0x3aae59;
}
function Wr(_0x3f4afc, _0xa5fda6, _0x42401f) {
  return {
    hostType: _0x34bdbd.UNIVER_BOARD,
    entry: b.BoardsFloatingObject,
    createAnchorPlan: (_0x19abfd) =>
      ai(Kr(_0x19abfd), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"),
    restoreAnchor: (_0x1a18a7) =>
      ai(
        Xr(_0x1a18a7, _0xa5fda6, Gr(_0x42401f)),
        "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE",
      ),
    removeAnchorPlan: (_0x2b08f9) => {
      let _0x52f578 =
        (_0x3f4afc == null
          ? undefined
          : _0x3f4afc.getAnchor(
              _0x2b08f9.hostUnitId,
              _0x2b08f9.hostAnchorId,
            )) ??
        ti({ ..._0x2b08f9, requestedAnchorId: _0x2b08f9.hostAnchorId });
      return (
        qr(_0x2b08f9, _0x52f578, _0xa5fda6, Gr(_0x42401f)) ??
        ri(_0x2b08f9, _0x52f578)
      );
    },
    readContext: (_0x2e6921) =>
      Jr(_0x2e6921, _0x3f4afc, _0xa5fda6, Gr(_0x42401f)),
    createBoundsUpdatePlan: (_0x4c0340) =>
      Yr(
        _0x4c0340,
        _0x3f4afc,
        _0xa5fda6,
        ai(Gr(_0x42401f), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"),
      ),
  };
}
function Gr(_0x4e12ba) {
  return typeof _0x4e12ba == "function" ? _0x4e12ba() : _0x4e12ba;
}
function Kr(_0x15f175) {
  C({
    hostUnitId: _0x15f175.hostUnitId,
    entry: _0x15f175.entry,
    hostContext: _0x15f175.hostContext,
  });
  let _0xc01589 = ti(_0x15f175),
    _0x287775 = ii(_0xc01589.hostContext, "subUnitId");
  if (!_0x287775) return;
  let _0x433448 = ni(_0x15f175, _0xc01589);
  return {
    hostAnchorId: _0xc01589.hostAnchorId,
    redoMutations: [
      {
        id: _0x36d28f.id,
        params: {
          unitId: _0xc01589.hostUnitId,
          subUnitId: _0x287775,
          element: _0x433448,
          allowEmbedAnchor: true,
        },
      },
      { id: v, params: { record: _0xc01589 } },
    ],
    undoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0xc01589.hostUnitId,
          hostAnchorId: _0xc01589.hostAnchorId,
        },
      },
      {
        id: _0x2a43ef.id,
        params: {
          unitId: _0xc01589.hostUnitId,
          subUnitId: _0x287775,
          elementId: _0xc01589.hostAnchorId,
        },
      },
    ],
  };
}
function qr(_0x451ddd, _0x1d64bf, _0x3fefce, _0x150c7a) {
  var _0x3536c8;
  let _0x1a8bcd = Zr(
    _0x451ddd.hostUnitId,
    _0x451ddd.hostAnchorId,
    ii(_0x1d64bf.hostContext, "subUnitId"),
    _0x3fefce,
    _0x150c7a,
  );
  if (!_0x1a8bcd) return;
  let _0x26675f =
    _0x150c7a == null ||
    (_0x3536c8 = _0x150c7a.getElementById(
      _0x1d64bf.hostUnitId,
      _0x1a8bcd,
      _0x1d64bf.hostAnchorId,
    )) == null
      ? undefined
      : _0x3536c8.element;
  if (!_0x26675f || !_0x31b9f2(_0x26675f)) return;
  let _0xe5d8f2 = _0x150c7a.getElementData(_0x1d64bf.hostUnitId, _0x1a8bcd),
    _0x4ccd85 = _0x150c7a.getElementOrder(_0x1d64bf.hostUnitId, _0x1a8bcd),
    _0x1a46ec = new Set(_0x3ecab1(_0xe5d8f2, _0x4ccd85, [_0x26675f.id])),
    _0x125974 = _0x4ccd85.flatMap((_0x4860fd, _0x22ab2a) =>
      _0x1a46ec.has(_0x4860fd)
        ? [
            {
              id: _0x36d28f.id,
              params: {
                unitId: _0x1d64bf.hostUnitId,
                subUnitId: _0x1a8bcd,
                element: _0x36b85f.deepClone(_0xe5d8f2[_0x4860fd].element),
                insertIndex: _0x22ab2a,
                allowEmbedAnchor: true,
              },
            },
          ]
        : [],
    );
  return {
    redoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x1d64bf.hostUnitId,
          hostAnchorId: _0x1d64bf.hostAnchorId,
        },
      },
      {
        id: _0x2a43ef.id,
        params: {
          unitId: _0x1d64bf.hostUnitId,
          subUnitId: _0x1a8bcd,
          elementId: _0x1d64bf.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      ..._0x125974,
      {
        id: v,
        params: {
          record: {
            ..._0x1d64bf,
            hostContext: { ..._0x1d64bf.hostContext, subUnitId: _0x1a8bcd },
            lifecycle: "active",
          },
        },
      },
    ],
  };
}
function Jr(_0x24190f, _0x5e23ba, _0x2c025c, _0x205b37) {
  let _0x41828a =
      _0x5e23ba == null
        ? undefined
        : _0x5e23ba.getAnchor(_0x24190f.hostUnitId, _0x24190f.hostAnchorId),
    _0xdd35ea = Qr(
      _0x24190f.hostUnitId,
      _0x24190f.hostAnchorId,
      ii(_0x41828a == null ? undefined : _0x41828a.hostContext, "subUnitId"),
      _0x2c025c,
      _0x205b37,
    ),
    _0x375f4a = _0xdd35ea ? $r(_0xdd35ea.element) : undefined;
  return !_0xdd35ea || !_0x375f4a
    ? { resolved: false, entry: b.BoardsFloatingObject }
    : {
        resolved: true,
        entry: b.BoardsFloatingObject,
        subUnitId: _0xdd35ea.subUnitId,
        bounds: _0x375f4a,
      };
}
function Yr(_0x586875, _0x36bb3d, _0x550c69, _0x52ee7b) {
  ei(_0x586875.bounds);
  let _0x3943fe =
      _0x36bb3d == null
        ? undefined
        : _0x36bb3d.getAnchor(_0x586875.hostUnitId, _0x586875.hostAnchorId),
    _0x5c47fd = Qr(
      _0x586875.hostUnitId,
      _0x586875.hostAnchorId,
      ii(_0x3943fe == null ? undefined : _0x3943fe.hostContext, "subUnitId"),
      _0x550c69,
      _0x52ee7b,
    );
  if (!_0x5c47fd) throw Error("EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE");
  let _0x2deb25 = {
      ..._0x5c47fd.element,
      transform: { ..._0x5c47fd.element["transform"], ..._0x586875.bounds },
    },
    _0x102972 = {
      ...(_0x3943fe ??
        ti({
          ..._0x586875,
          requestedAnchorId: _0x586875.hostAnchorId,
          hostContext: { subUnitId: _0x5c47fd.subUnitId },
        })),
      hostContext: {
        ...(_0x3943fe == null ? undefined : _0x3943fe.hostContext),
        subUnitId: _0x5c47fd.subUnitId,
        ..._0x586875.bounds,
      },
      lifecycle: "active",
    };
  return {
    redoMutations: [
      {
        id: _0x420fe0.id,
        params: {
          unitId: _0x586875.hostUnitId,
          subUnitId: _0x5c47fd.subUnitId,
          elementId: _0x586875.hostAnchorId,
          element: _0x2deb25,
        },
      },
      { id: v, params: { record: _0x102972 } },
    ],
    undoMutations: [
      _0x3943fe
        ? { id: v, params: { record: _0x3943fe } }
        : {
            id: y,
            params: {
              hostUnitId: _0x586875.hostUnitId,
              hostAnchorId: _0x586875.hostAnchorId,
            },
          },
      {
        id: _0x420fe0.id,
        params: {
          unitId: _0x586875.hostUnitId,
          subUnitId: _0x5c47fd.subUnitId,
          elementId: _0x586875.hostAnchorId,
          element: _0x5c47fd.element,
        },
      },
    ],
  };
}
function Xr(_0x2ac222, _0x50e43f, _0x42880a) {
  let _0x34818c = Zr(
    _0x2ac222.hostUnitId,
    _0x2ac222.hostAnchorId,
    ii(_0x2ac222.hostContext, "subUnitId"),
    _0x50e43f,
    _0x42880a,
  );
  if (_0x34818c)
    return ti({
      ..._0x2ac222,
      requestedAnchorId: _0x2ac222.hostAnchorId,
      hostContext: { ..._0x2ac222.hostContext, subUnitId: _0x34818c },
    });
}
function Zr(_0x422e16, _0x5742f2, _0x161c6b, _0x45c5a3, _0x3e3e1c) {
  if (!_0x3e3e1c) return;
  let _0x4ac140 = (_0x4a0aa5) => {
    var _0x79e376;
    return _0x31b9f2(
      (_0x79e376 = _0x3e3e1c.getElementById(_0x422e16, _0x4a0aa5, _0x5742f2)) ==
        null
        ? undefined
        : _0x79e376.element,
    );
  };
  if (_0x161c6b && _0x4ac140(_0x161c6b)) return _0x161c6b;
  let _0x3c7945 =
    _0x45c5a3 == null
      ? undefined
      : _0x45c5a3.getUnit(_0x422e16, _0x34bdbd.UNIVER_BOARD);
  return _0x3c7945 == null
    ? undefined
    : _0x3c7945.getSnapshot().pageOrder["find"](_0x4ac140);
}
function Qr(_0xf1542c, _0x13a032, _0x44d78b, _0x34ed6b, _0x1a15ad) {
  if (!_0x1a15ad) return;
  let _0x226e3c = (_0x4a7b47) => {
    var _0x127b66;
    return (_0x127b66 = _0x1a15ad.getElementById(
      _0xf1542c,
      _0x4a7b47,
      _0x13a032,
    )) == null
      ? undefined
      : _0x127b66.element;
  };
  if (_0x44d78b) {
    let _0x3f90da = _0x226e3c(_0x44d78b);
    if (_0x3f90da && _0x31b9f2(_0x3f90da))
      return { subUnitId: _0x44d78b, element: _0x3f90da };
  }
  let _0x21cd38 =
    _0x34ed6b == null
      ? undefined
      : _0x34ed6b.getUnit(_0xf1542c, _0x34bdbd.UNIVER_BOARD);
  for (let _0x28ef4c of (_0x21cd38 == null
    ? undefined
    : _0x21cd38.getSnapshot().pageOrder) ?? []) {
    let _0x34b524 = _0x226e3c(_0x28ef4c);
    if (_0x34b524 && _0x31b9f2(_0x34b524))
      return { subUnitId: _0x28ef4c, element: _0x34b524 };
  }
}
function $r(_0x4ddc93) {
  let {
    left: _0x27e89a,
    top: _0x8aa89a,
    width: _0x42d6dd,
    height: _0x31a540,
  } = _0x4ddc93.transform;
  if (
    _0x27e89a == null ||
    _0x8aa89a == null ||
    _0x42d6dd == null ||
    _0x31a540 == null
  )
    return;
  let _0x4978c5 = {
    left: _0x27e89a,
    top: _0x8aa89a,
    width: _0x42d6dd,
    height: _0x31a540,
  };
  try {
    return (ei(_0x4978c5), _0x4978c5);
  } catch {
    return;
  }
}
function ei(_0x461df0) {
  if (
    ![_0x461df0.left, _0x461df0.top, _0x461df0.width, _0x461df0.height].every(
      Number.isFinite,
    ) ||
    _0x461df0.width <= 0 ||
    _0x461df0.height <= 0
  )
    throw Error("EMBED_BOUNDS_INVALID");
}
function ti(_0x3eead8) {
  return {
    hostAnchorId: _0x3eead8.requestedAnchorId ?? _0x3eead8.embedId + "-anchor",
    embedId: _0x3eead8.embedId,
    hostUnitId: _0x3eead8.hostUnitId,
    hostType: _0x34bdbd.UNIVER_BOARD,
    entry: b.BoardsFloatingObject,
    kind: b.BoardsFloatingObject,
    hostContext: {
      ..._0x3eead8.hostContext,
      left: X(_0x3eead8.hostContext, "left") ?? 80,
      top: X(_0x3eead8.hostContext, "top") ?? 80,
      width: X(_0x3eead8.hostContext, "width") ?? 560,
      height: X(_0x3eead8.hostContext, "height") ?? 360,
    },
    lifecycle: "active",
  };
}
function ni(_0xbd13d5, _0x8e5e1) {
  var _0x568f74, _0x4ad905;
  return _0x2680b3({
    embedId: _0x8e5e1.embedId,
    hostAnchorId: _0x8e5e1.hostAnchorId,
    childUnitId:
      (_0x568f74 = _0xbd13d5.descriptor) == null
        ? undefined
        : _0x568f74.childUnitId,
    childType:
      (_0x4ad905 = _0xbd13d5.descriptor) == null
        ? undefined
        : _0x4ad905.childType,
    left: X(_0x8e5e1.hostContext, "left"),
    top: X(_0x8e5e1.hostContext, "top"),
    width: X(_0x8e5e1.hostContext, "width"),
    height: X(_0x8e5e1.hostContext, "height"),
  });
}
function ri(_0x5302af, _0x52148a) {
  return {
    redoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x5302af.hostUnitId,
          hostAnchorId: _0x5302af.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      { id: v, params: { record: { ..._0x52148a, lifecycle: "active" } } },
    ],
  };
}
function X(_0x57272a, _0x5e898b) {
  return typeof (_0x57272a == null ? undefined : _0x57272a[_0x5e898b]) ==
    "number"
    ? _0x57272a[_0x5e898b]
    : undefined;
}
function ii(_0x14e836, _0x397022) {
  return typeof (_0x14e836 == null ? undefined : _0x14e836[_0x397022]) ==
    "string"
    ? _0x14e836[_0x397022]
    : undefined;
}
function ai(_0x67851b, _0xba01e) {
  if (!_0x67851b) throw Error(_0xba01e);
  return _0x67851b;
}
function oi(_0x50b2d1, _0x2c3b25) {
  return {
    hostType: _0x34bdbd.UNIVER_DOC,
    entry: b.DocsCustomBlock,
    createAnchorPlan: (_0x2cf618) =>
      yi(
        ci(_0x2cf618, _0x2c3b25),
        "EMBED_DOCS_CUSTOM_BLOCK_ANCHOR_UNAVAILABLE",
      ),
    removeAnchorPlan: (_0x19622f) => {
      let _0x14abed =
        (_0x50b2d1 == null
          ? undefined
          : _0x50b2d1.getAnchor(
              _0x19622f.hostUnitId,
              _0x19622f.hostAnchorId,
            )) ?? ui(_0x19622f);
      return (
        li(_0x19622f, _0x14abed, _0x2c3b25) || {
          redoMutations: [
            {
              id: y,
              params: {
                hostUnitId: _0x19622f.hostUnitId,
                hostAnchorId: _0x19622f.hostAnchorId,
              },
            },
          ],
          undoMutations: [
            {
              id: v,
              params: { record: { ..._0x14abed, lifecycle: "active" } },
            },
          ],
        }
      );
    },
    readContext: (_0x4704e6) => si(_0x4704e6, _0x2c3b25),
  };
}
function si(_0x46fd87, _0x2d478e) {
  var _0x5a1f7c;
  let _0x53c8b1 =
      ((_0x5a1f7c = pi(_0x2d478e, _0x46fd87.hostUnitId)) == null
        ? undefined
        : _0x5a1f7c.customBlocks) ?? [],
    _0x102a79 = _0x53c8b1.findIndex(
      (_0x36c033) => _0x36c033.blockId === _0x46fd87.hostAnchorId,
    );
  return _0x102a79 < 0
    ? { resolved: false, entry: b.DocsCustomBlock }
    : {
        resolved: true,
        entry: b.DocsCustomBlock,
        blockId: _0x46fd87.hostAnchorId,
        startIndex: _0x53c8b1[_0x102a79].startIndex,
        index: _0x102a79,
      };
}
function ci(_0xd9490f, _0x1f4b82) {
  var _0x2b6f9f, _0x25813d, _0x34d2b1;
  if (!_0x1f4b82) return;
  let _0x1bce77 = ui(_0xd9490f),
    _0x45aa33 = di(_0xd9490f, _0x1f4b82);
  if (_0x45aa33 == null) return;
  let _0x5458ab =
    ((_0x2b6f9f = mi(_0x1f4b82, _0xd9490f.hostUnitId)) == null
      ? undefined
      : _0x2b6f9f.length) ?? 0;
  return (
    (_0x1bce77.hostContext = {
      ..._0x1bce77.hostContext,
      startIndex: _0x45aa33,
      drawingOrderIndex: _0x5458ab,
    }),
    {
      hostAnchorId: _0x1bce77.hostAnchorId,
      redoMutations: [
        _0x5e616b({
          unitId: _0x1bce77.hostUnitId,
          blockId: _0x1bce77.hostAnchorId,
          startIndex: _0x45aa33,
          drawingOrderIndex: _0x5458ab,
          embedId: _0x1bce77.embedId,
          childUnitId:
            (_0x25813d = _0xd9490f.descriptor) == null
              ? undefined
              : _0x25813d.childUnitId,
          childType:
            (_0x34d2b1 = _0xd9490f.descriptor) == null
              ? undefined
              : _0x34d2b1.childType,
          componentKey: _i(_0x1bce77.hostContext, "componentKey") ?? undefined,
          interactionMode: vi(_0x1bce77.hostContext),
        }),
        { id: v, params: { record: _0x1bce77 } },
      ],
      undoMutations: [
        {
          id: y,
          params: {
            hostUnitId: _0x1bce77.hostUnitId,
            hostAnchorId: _0x1bce77.hostAnchorId,
          },
        },
        _0x412cae({
          unitId: _0x1bce77.hostUnitId,
          blockId: _0x1bce77.hostAnchorId,
          startIndex: _0x45aa33,
          drawingOrderIndex: _0x5458ab,
        }),
      ],
    }
  );
}
function li(_0x2f4994, _0x4fb229, _0x597ede) {
  var _0x263577, _0x3766f5;
  if (!_0x597ede) return;
  let _0x38ad95 =
      fi(_0x597ede, _0x2f4994.hostUnitId, _0x2f4994.hostAnchorId) ??
      gi(_0x4fb229.hostContext, "startIndex"),
    _0x5edd50 =
      hi(_0x597ede, _0x2f4994.hostUnitId, _0x2f4994.hostAnchorId) ??
      gi(_0x4fb229.hostContext, "drawingOrderIndex") ??
      0;
  if (_0x38ad95 != null)
    return {
      redoMutations: [
        {
          id: y,
          params: {
            hostUnitId: _0x2f4994.hostUnitId,
            hostAnchorId: _0x2f4994.hostAnchorId,
          },
        },
        _0x412cae({
          unitId: _0x2f4994.hostUnitId,
          blockId: _0x2f4994.hostAnchorId,
          startIndex: _0x38ad95,
          drawingOrderIndex: _0x5edd50,
        }),
      ],
      undoMutations: [
        _0x5e616b({
          unitId: _0x2f4994.hostUnitId,
          blockId: _0x2f4994.hostAnchorId,
          startIndex: _0x38ad95,
          drawingOrderIndex: _0x5edd50,
          embedId: _0x4fb229.embedId,
          childUnitId:
            (_0x263577 = _0x2f4994.descriptor) == null
              ? undefined
              : _0x263577.childUnitId,
          childType:
            (_0x3766f5 = _0x2f4994.descriptor) == null
              ? undefined
              : _0x3766f5.childType,
          componentKey: _i(_0x4fb229.hostContext, "componentKey") ?? undefined,
          interactionMode: vi(_0x4fb229.hostContext),
        }),
        {
          id: v,
          params: {
            record: {
              ..._0x4fb229,
              lifecycle: "active",
              hostContext: {
                ..._0x4fb229.hostContext,
                startIndex: _0x38ad95,
                drawingOrderIndex: _0x5edd50,
              },
            },
          },
        },
      ],
    };
}
function ui(_0x15d58d) {
  return {
    hostAnchorId:
      _0x15d58d.requestedAnchorId ?? "docs-custom-block:" + _0x15d58d.embedId,
    embedId: _0x15d58d.embedId,
    hostUnitId: _0x15d58d.hostUnitId,
    hostType: _0x15d58d.hostType,
    entry: _0x15d58d.entry,
    kind: "docs-custom-block",
    hostContext: _0x15d58d.hostContext,
    lifecycle: "active",
  };
}
function di(_0x3397da, _0x3f0a4b) {
  let _0x184ac3 = pi(_0x3f0a4b, _0x3397da.hostUnitId);
  if (!(_0x184ac3 != null && _0x184ac3.dataStream)) return;
  let _0x2954d1 = Math.max(0, _0x184ac3.dataStream["length"] - 2);
  return (
    lt({
      hostUnitId: _0x3397da.hostUnitId,
      entry: _0x3397da.entry,
      hostContext: _0x3397da.hostContext,
      maxStartIndex: _0x2954d1,
    }),
    gi(_0x3397da.hostContext, "startIndex") ?? _0x2954d1
  );
}
function fi(_0x52f639, _0x99bc4a, _0x4bf1f6) {
  var _0x511192;
  return (_0x511192 = pi(_0x52f639, _0x99bc4a)) == null ||
    (_0x511192 = _0x511192.customBlocks) == null ||
    (_0x511192 = _0x511192.find(
      (_0x300af5) => _0x300af5.blockId === _0x4bf1f6,
    )) == null
    ? undefined
    : _0x511192.startIndex;
}
function pi(_0x802d39, _0x3b1746) {
  var _0x5f22a6;
  return _0x802d39 == null ||
    (_0x5f22a6 = _0x802d39.getUnit(_0x3b1746, _0x34bdbd.UNIVER_DOC)) == null
    ? undefined
    : _0x5f22a6.getBody();
}
function mi(_0x373c61, _0x18bbcf) {
  var _0x52f582, _0x1d0385;
  return _0x373c61 == null ||
    (_0x52f582 = _0x373c61.getUnit(_0x18bbcf, _0x34bdbd.UNIVER_DOC)) == null ||
    (_0x1d0385 = _0x52f582.getSnapshot) == null
    ? undefined
    : _0x1d0385.call(_0x52f582).drawingsOrder;
}
function hi(_0x5cf5eb, _0x3dd4ae, _0x4df9d2) {
  var _0xd29c4c;
  let _0x570c08 =
    (_0xd29c4c = mi(_0x5cf5eb, _0x3dd4ae)) == null
      ? undefined
      : _0xd29c4c.indexOf(_0x4df9d2);
  return _0x570c08 == null || _0x570c08 < 0 ? undefined : _0x570c08;
}
function gi(_0x274eda, _0x45acbc) {
  return typeof (_0x274eda == null ? undefined : _0x274eda[_0x45acbc]) ==
    "number"
    ? _0x274eda[_0x45acbc]
    : undefined;
}
function _i(_0x569112, _0x51337e) {
  return typeof (_0x569112 == null ? undefined : _0x569112[_0x51337e]) ==
    "string"
    ? _0x569112[_0x51337e]
    : undefined;
}
function vi(_0x504a7a) {
  let _0x4eebe8 = _i(_0x504a7a, "interactionMode");
  return _0x4eebe8 === "inline" || _0x4eebe8 === "block"
    ? _0x4eebe8
    : undefined;
}
function yi(_0x326ff1, _0x450f83) {
  if (!_0x326ff1) throw Error(_0x450f83);
  return _0x326ff1;
}
const bi = "UNIVER_EMBED_SHEETS_TAB";
function xi(_0x152af0) {
  return {
    id: _0x152af0.hostAnchorId,
    name: _0x152af0.name ?? _0x152af0.embedId,
    tabColor: "",
    hidden: _0x1b8c8d.FALSE,
    rowCount: 1,
    columnCount: 1,
    zoomRatio: 1,
    freeze: { startRow: -1, startColumn: -1, ySplit: 0, xSplit: 0 },
    scrollTop: 0,
    scrollLeft: 0,
    defaultColumnWidth: 88,
    defaultRowHeight: 24,
    mergeData: [],
    cellData: {},
    rowData: {},
    columnData: {},
    showGridlines: _0x1b8c8d.FALSE,
    rowHeader: { width: 46, hidden: _0x1b8c8d.TRUE },
    columnHeader: { height: 20, hidden: _0x1b8c8d.TRUE },
    rightToLeft: _0x1b8c8d.FALSE,
    custom: { [bi]: Si(_0x152af0) },
  };
}
function Si(_0x58f054) {
  return {
    version: 1,
    embedId: _0x58f054.embedId,
    hostAnchorId: _0x58f054.hostAnchorId,
    childType: _0x58f054.childType,
  };
}
function Ci(_0x262e26) {
  var _0x4d275a;
  let _0xf40ef9 =
    (_0x4d275a = _0x262e26.custom) == null ? undefined : _0x4d275a[bi];
  if (wi(_0xf40ef9)) return _0xf40ef9;
}
function wi(_0x343892) {
  if (!_0x343892 || typeof _0x343892 != "object") return false;
  let _0x4096b9 = _0x343892;
  return (
    _0x4096b9.version === 1 &&
    typeof _0x4096b9.embedId == "string" &&
    typeof _0x4096b9.hostAnchorId == "string" &&
    (_0x4096b9.childType === undefined ||
      typeof _0x4096b9.childType == "number")
  );
}
function Ti(_0x15dd0c, _0x35971c) {
  return {
    hostType: _0x34bdbd.UNIVER_SHEET,
    entry: b.SheetsSheetTab,
    createAnchorPlan: (_0xb15839) => Di(_0xb15839, _0x35971c),
    restoreAnchor: (_0x5e48c9) =>
      Pi(ki(_0x5e48c9, _0x35971c), "EMBED_SHEETS_TAB_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: (_0x53c04a) =>
      Oi(
        _0x53c04a,
        (_0x15dd0c == null
          ? undefined
          : _0x15dd0c.getAnchor(
              _0x53c04a.hostUnitId,
              _0x53c04a.hostAnchorId,
            )) ?? Ai(_0x53c04a),
      ),
    activateAnchor: (_0x40c2aa) => {
      let _0x561bbb = Fi(_0x35971c, _0x40c2aa.hostUnitId),
        _0x18acd8 =
          _0x561bbb == null
            ? undefined
            : _0x561bbb.getSheetBySheetId(_0x40c2aa.hostAnchorId);
      _0x18acd8 && (_0x561bbb == null || _0x561bbb.setActiveSheet(_0x18acd8));
    },
    readContext: (_0x3d68a3) => Ei(_0x3d68a3, _0x35971c),
  };
}
function Ei(_0x459c2b, _0x2342bf) {
  let _0x5128dd = Fi(_0x2342bf, _0x459c2b.hostUnitId),
    _0x453125 =
      _0x5128dd == null
        ? undefined
        : _0x5128dd.getSheetBySheetId(_0x459c2b.hostAnchorId),
    _0x3c41e2 =
      (_0x5128dd == null
        ? undefined
        : _0x5128dd.getSheetOrders().indexOf(_0x459c2b.hostAnchorId)) ?? -1;
  return !_0x453125 || _0x3c41e2 < 0
    ? { resolved: false, entry: b.SheetsSheetTab }
    : {
        resolved: true,
        entry: b.SheetsSheetTab,
        subUnitId: _0x459c2b.hostAnchorId,
        index: _0x3c41e2,
        name: _0x453125.getName(),
      };
}
function Di(_0x2bdb5f, _0x10a29f) {
  var _0x862ee3;
  let _0x1669c3 = Fi(_0x10a29f, _0x2bdb5f.hostUnitId);
  C({
    hostUnitId: _0x2bdb5f.hostUnitId,
    entry: _0x2bdb5f.entry,
    hostContext: _0x2bdb5f.hostContext,
    maxIndex: _0x1669c3 == null ? undefined : _0x1669c3.getSheetOrders().length,
  });
  let _0x1ae7fc = Ai(_0x2bdb5f),
    _0xb01edd = ji(_0x1ae7fc.hostContext),
    _0x5c5127 = Mi(_0x1ae7fc.hostContext) ?? _0x2bdb5f.embedId,
    _0x12b89b = xi({
      embedId: _0x1ae7fc.embedId,
      hostAnchorId: _0x1ae7fc.hostAnchorId,
      name: _0x5c5127,
      childType:
        (_0x862ee3 = _0x2bdb5f.descriptor) == null
          ? undefined
          : _0x862ee3.childType,
    });
  return {
    hostAnchorId: _0x1ae7fc.hostAnchorId,
    redoMutations: [
      {
        id: _0x27cc61.id,
        params: {
          unitId: _0x1ae7fc.hostUnitId,
          index: _0xb01edd,
          sheet: _0x12b89b,
        },
      },
      { id: v, params: { record: _0x1ae7fc } },
    ],
    undoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x1ae7fc.hostUnitId,
          hostAnchorId: _0x1ae7fc.hostAnchorId,
        },
      },
      {
        id: _0x3cc0a2.id,
        params: {
          unitId: _0x1ae7fc.hostUnitId,
          subUnitId: _0x1ae7fc.hostAnchorId,
          subUnitName: _0x12b89b.name,
        },
      },
    ],
  };
}
function Oi(_0x5ae1a4, _0x5840fa) {
  var _0x1eefa7;
  let _0xfa1be7 = ji(_0x5840fa.hostContext),
    _0x521451 = Mi(_0x5840fa.hostContext) ?? _0x5840fa.embedId,
    _0x2322bd = xi({
      embedId: _0x5840fa.embedId,
      hostAnchorId: _0x5840fa.hostAnchorId,
      name: _0x521451,
      childType:
        ((_0x1eefa7 = _0x5ae1a4.descriptor) == null
          ? undefined
          : _0x1eefa7.childType) ?? Ni(_0x5840fa.hostContext),
    });
  return {
    redoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x5ae1a4.hostUnitId,
          hostAnchorId: _0x5ae1a4.hostAnchorId,
        },
      },
      {
        id: _0x3cc0a2.id,
        params: {
          unitId: _0x5ae1a4.hostUnitId,
          subUnitId: _0x5ae1a4.hostAnchorId,
          subUnitName: _0x2322bd.name,
        },
      },
    ],
    undoMutations: [
      {
        id: _0x27cc61.id,
        params: {
          unitId: _0x5ae1a4.hostUnitId,
          index: _0xfa1be7,
          sheet: _0x2322bd,
        },
      },
      { id: v, params: { record: { ..._0x5840fa, lifecycle: "active" } } },
    ],
  };
}
function ki(_0x23018c, _0x51dc05) {
  var _0x5a9cb6;
  let _0x80b30b = Fi(_0x51dc05, _0x23018c.hostUnitId);
  if (!_0x80b30b) return;
  let _0x124641 = Ai({
      ..._0x23018c,
      requestedAnchorId: _0x23018c.hostAnchorId,
    }),
    _0x2554f0 = Mi(_0x124641.hostContext) ?? _0x23018c.embedId,
    _0x170ae6 = ji(_0x124641.hostContext);
  if (!(
    (_0x5a9cb6 = _0x80b30b.getSheetBySheetId) != null &&
    _0x5a9cb6.call(_0x80b30b, _0x124641.hostAnchorId)
  )) {
    var _0x423439, _0x238ed0;
    let _0x6fceb0 =
      (_0x423439 = _0x80b30b.getActiveSheet) == null
        ? undefined
        : _0x423439.call(_0x80b30b, true);
    if (
      (_0x80b30b.addWorksheet(
        _0x124641.hostAnchorId,
        _0x170ae6,
        xi({
          embedId: _0x124641.embedId,
          hostAnchorId: _0x124641.hostAnchorId,
          name: _0x2554f0,
          childType:
            ((_0x238ed0 = _0x23018c.descriptor) == null
              ? undefined
              : _0x238ed0.childType) ?? Ni(_0x124641.hostContext),
        }),
      ),
      _0x6fceb0)
    ) {
      var _0xd275b4;
      (_0xd275b4 = _0x80b30b.setActiveSheet) == null ||
        _0xd275b4.call(_0x80b30b, _0x6fceb0);
    }
  }
  return {
    ..._0x124641,
    hostContext: {
      ..._0x124641.hostContext,
      sheetIndex: _0x170ae6,
      sheetName: _0x2554f0,
    },
  };
}
function Ai(_0x6615aa) {
  var _0x347141;
  let _0x226d2e =
    _0x6615aa.requestedAnchorId ?? "sheets-tab:" + _0x6615aa.embedId;
  return {
    hostAnchorId: _0x226d2e,
    embedId: _0x6615aa.embedId,
    hostUnitId: _0x6615aa.hostUnitId,
    hostType: _0x6615aa.hostType,
    entry: _0x6615aa.entry,
    kind: "sheets-sheet-tab",
    hostContext: {
      ..._0x6615aa.hostContext,
      sheetIndex: ji(_0x6615aa.hostContext),
      sheetName: Mi(_0x6615aa.hostContext) ?? _0x6615aa.embedId,
      sheetTab: Si({
        embedId: _0x6615aa.embedId,
        hostAnchorId: _0x226d2e,
        childType:
          (_0x347141 = _0x6615aa.descriptor) == null
            ? undefined
            : _0x347141.childType,
      }),
    },
    lifecycle: "active",
  };
}
function ji(_0x497568) {
  return typeof (_0x497568 == null ? undefined : _0x497568.sheetIndex) ==
    "number"
    ? _0x497568.sheetIndex
    : 2 ** 53 - 1;
}
function Mi(_0x5de045) {
  return typeof (_0x5de045 == null ? undefined : _0x5de045.sheetName) ==
    "string"
    ? _0x5de045.sheetName
    : undefined;
}
function Ni(_0x4f8953) {
  let _0x50c3b2 = _0x4f8953 == null ? undefined : _0x4f8953.sheetTab;
  if (!_0x50c3b2 || typeof _0x50c3b2 != "object") return;
  let _0x1ee131 = _0x50c3b2.childType;
  return typeof _0x1ee131 == "number" ? _0x1ee131 : undefined;
}
function Pi(_0xbe78cc, _0x6c823f) {
  if (!_0xbe78cc) throw Error(_0x6c823f);
  return _0xbe78cc;
}
function Fi(_0x41e3c6, _0x55fe35) {
  return (
    (_0x41e3c6 == null
      ? undefined
      : _0x41e3c6.getUnit(_0x55fe35, _0x34bdbd.UNIVER_SHEET)) ?? undefined
  );
}
function Ii(_0x57029f, _0x1bd013, _0x99af1) {
  return {
    hostType: _0x34bdbd.UNIVER_SLIDE,
    entry: b.SlidesFloatingObject,
    createAnchorPlan: (_0xf657bb) =>
      aa(Bi(_0xf657bb), "EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE"),
    restoreAnchor: (_0x421149) =>
      oa(
        qi(_0x421149, _0x1bd013, Li(_0x99af1)),
        "EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE",
      ),
    removeAnchorPlan: (_0x33b640) => {
      let _0x3211a4 =
        (_0x57029f == null
          ? undefined
          : _0x57029f.getAnchor(
              _0x33b640.hostUnitId,
              _0x33b640.hostAnchorId,
            )) ?? $i(_0x33b640);
      return Vi(_0x33b640, _0x3211a4) ?? na(_0x33b640, _0x3211a4);
    },
    readContext: (_0x152413) =>
      Hi(_0x152413, _0x57029f, _0x1bd013, Li(_0x99af1)),
    createBoundsUpdatePlan: (_0x178f8a) =>
      Ui(
        _0x178f8a,
        _0x57029f,
        _0x1bd013,
        ca(Li(_0x99af1), "EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE"),
      ),
  };
}
function Li(_0x26e382) {
  return typeof _0x26e382 == "function" ? _0x26e382() : _0x26e382;
}
function Ri(_0x4e7686, _0x254760) {
  return {
    hostType: _0x34bdbd.UNIVER_SLIDE,
    entry: b.SlidesPageListBlock,
    activateAnchor: (_0x3ef904) => {
      var _0x21fe8d;
      (_0x21fe8d = sa(_0x254760, _0x3ef904.hostUnitId)) == null ||
        _0x21fe8d.pageManager["setActiveSlide"](_0x3ef904.hostAnchorId);
    },
    createAnchorPlan: (_0x3155e0) => Ji(_0x3155e0, _0x254760),
    restoreAnchor: (_0x19e20b) =>
      oa(Yi(_0x19e20b, _0x254760), "EMBED_SLIDES_PAGE_LIST_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: (_0x178e04) =>
      Xi(
        _0x178e04,
        (_0x4e7686 == null
          ? undefined
          : _0x4e7686.getAnchor(
              _0x178e04.hostUnitId,
              _0x178e04.hostAnchorId,
            )) ?? ea(_0x178e04),
      ),
    readContext: (_0x18ccc2) => zi(_0x18ccc2, _0x254760),
  };
}
function zi(_0x282b8f, _0x50a796) {
  var _0x3f6813;
  let _0x36e15c =
      (_0x3f6813 = sa(_0x50a796, _0x282b8f.hostUnitId)) == null
        ? undefined
        : _0x3f6813.getSnapshot(),
    _0x3eaea9 =
      _0x36e15c == null ? undefined : _0x36e15c.slides[_0x282b8f.hostAnchorId],
    _0x2ea773 =
      (_0x36e15c == null
        ? undefined
        : _0x36e15c.slideOrder["indexOf"](_0x282b8f.hostAnchorId)) ?? -1;
  return !_0x3eaea9 || _0x2ea773 < 0
    ? { resolved: false, entry: b.SlidesPageListBlock }
    : {
        resolved: true,
        entry: b.SlidesPageListBlock,
        pageId: _0x282b8f.hostAnchorId,
        index: _0x2ea773,
        name: _0x3eaea9.name ?? _0x282b8f.hostAnchorId,
      };
}
function Bi(_0x2a1d65) {
  var _0x3448b2, _0x76710c;
  C({
    hostUnitId: _0x2a1d65.hostUnitId,
    entry: _0x2a1d65.entry,
    hostContext: _0x2a1d65.hostContext,
  });
  let _0x430eb4 = ra(_0x2a1d65.hostContext);
  if (!_0x430eb4) return;
  let _0x4bc6f0 = $i(_0x2a1d65),
    _0x56e6a8 = _0x4fe993({
      embedId: _0x4bc6f0.embedId,
      hostAnchorId: _0x4bc6f0.hostAnchorId,
      childUnitId:
        (_0x3448b2 = _0x2a1d65.descriptor) == null
          ? undefined
          : _0x3448b2.childUnitId,
      childType:
        (_0x76710c = _0x2a1d65.descriptor) == null
          ? undefined
          : _0x76710c.childType,
      left: Z(_0x4bc6f0.hostContext, "left"),
      top: Z(_0x4bc6f0.hostContext, "top"),
      width: Z(_0x4bc6f0.hostContext, "width"),
      height: Z(_0x4bc6f0.hostContext, "height"),
    });
  return {
    hostAnchorId: _0x4bc6f0.hostAnchorId,
    redoMutations: [
      {
        id: _0x50d571.id,
        params: {
          unitId: _0x4bc6f0.hostUnitId,
          subUnitId: _0x430eb4,
          element: _0x56e6a8,
        },
      },
      { id: v, params: { record: _0x4bc6f0 } },
    ],
    undoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x4bc6f0.hostUnitId,
          hostAnchorId: _0x4bc6f0.hostAnchorId,
        },
      },
      {
        id: _0x27b7c9.id,
        params: {
          unitId: _0x4bc6f0.hostUnitId,
          subUnitId: _0x430eb4,
          drawingId: _0x4bc6f0.hostAnchorId,
        },
      },
    ],
  };
}
function Vi(_0x3e8bba, _0x1f8bf8) {
  var _0x5d0b10, _0x153719;
  let _0x22ea1c = ra(_0x1f8bf8.hostContext);
  if (!_0x22ea1c) return;
  let _0x6608b0 = _0x4fe993({
    embedId: _0x1f8bf8.embedId,
    hostAnchorId: _0x1f8bf8.hostAnchorId,
    childUnitId:
      (_0x5d0b10 = _0x3e8bba.descriptor) == null
        ? undefined
        : _0x5d0b10.childUnitId,
    childType:
      (_0x153719 = _0x3e8bba.descriptor) == null
        ? undefined
        : _0x153719.childType,
    left: Z(_0x1f8bf8.hostContext, "left"),
    top: Z(_0x1f8bf8.hostContext, "top"),
    width: Z(_0x1f8bf8.hostContext, "width"),
    height: Z(_0x1f8bf8.hostContext, "height"),
  });
  return {
    redoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x3e8bba.hostUnitId,
          hostAnchorId: _0x3e8bba.hostAnchorId,
        },
      },
      {
        id: _0x27b7c9.id,
        params: {
          unitId: _0x3e8bba.hostUnitId,
          subUnitId: _0x22ea1c,
          drawingId: _0x3e8bba.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      {
        id: _0x50d571.id,
        params: {
          unitId: _0x3e8bba.hostUnitId,
          subUnitId: _0x22ea1c,
          element: _0x6608b0,
        },
      },
      { id: v, params: { record: { ..._0x1f8bf8, lifecycle: "active" } } },
    ],
  };
}
function Hi(_0x15236f, _0xd243d3, _0x4453a6, _0x296999) {
  let _0x3427f8 =
      _0xd243d3 == null
        ? undefined
        : _0xd243d3.getAnchor(_0x15236f.hostUnitId, _0x15236f.hostAnchorId),
    _0x24310e = Wi(
      _0x15236f.hostUnitId,
      _0x15236f.hostAnchorId,
      ra(_0x3427f8 == null ? undefined : _0x3427f8.hostContext),
      _0x4453a6,
      _0x296999,
    ),
    _0x5d09a7 = _0x24310e ? Gi(_0x24310e.drawing) : undefined;
  return !_0x24310e || !_0x5d09a7
    ? { resolved: false, entry: b.SlidesFloatingObject }
    : {
        resolved: true,
        entry: b.SlidesFloatingObject,
        subUnitId: _0x24310e.subUnitId,
        bounds: _0x5d09a7,
      };
}
function Ui(_0x523e5d, _0x6ab694, _0x58280a, _0x154931) {
  Ki(_0x523e5d.bounds);
  let _0x566278 =
      _0x6ab694 == null
        ? undefined
        : _0x6ab694.getAnchor(_0x523e5d.hostUnitId, _0x523e5d.hostAnchorId),
    _0x1aa8fb = Wi(
      _0x523e5d.hostUnitId,
      _0x523e5d.hostAnchorId,
      ra(_0x566278 == null ? undefined : _0x566278.hostContext),
      _0x58280a,
      _0x154931,
    );
  if (!_0x1aa8fb) throw Error("EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE");
  let _0x45371a = { ..._0x1aa8fb.drawing["transform"], ..._0x523e5d.bounds },
    _0x21ccc9 = {
      ..._0x1aa8fb.drawing["element"],
      transform: {
        ..._0x1aa8fb.drawing["element"].transform,
        ..._0x523e5d.bounds,
      },
    },
    _0x575385 = {
      ...(_0x566278 ??
        $i({
          ..._0x523e5d,
          requestedAnchorId: _0x523e5d.hostAnchorId,
          hostContext: { subUnitId: _0x1aa8fb.subUnitId },
        })),
      hostContext: {
        ...(_0x566278 == null ? undefined : _0x566278.hostContext),
        subUnitId: _0x1aa8fb.subUnitId,
        ..._0x523e5d.bounds,
      },
      lifecycle: "active",
    };
  return {
    redoMutations: [
      {
        id: _0x54b460.id,
        params: {
          unitId: _0x523e5d.hostUnitId,
          subUnitId: _0x1aa8fb.subUnitId,
          drawingId: _0x523e5d.hostAnchorId,
          element: _0x21ccc9,
          transform: _0x45371a,
        },
      },
      { id: v, params: { record: _0x575385 } },
    ],
    undoMutations: [
      _0x566278
        ? { id: v, params: { record: _0x566278 } }
        : {
            id: y,
            params: {
              hostUnitId: _0x523e5d.hostUnitId,
              hostAnchorId: _0x523e5d.hostAnchorId,
            },
          },
      {
        id: _0x54b460.id,
        params: {
          unitId: _0x523e5d.hostUnitId,
          subUnitId: _0x1aa8fb.subUnitId,
          drawingId: _0x523e5d.hostAnchorId,
          element: _0x1aa8fb.drawing["element"],
          transform: _0x1aa8fb.drawing["transform"],
        },
      },
    ],
  };
}
function Wi(_0x5a3130, _0x5d630e, _0x328461, _0x2366a5, _0x1142c0) {
  if (!_0x1142c0) return;
  let _0x2c8011 = (_0x41632a) =>
    _0x1142c0.getDrawingByParam({
      unitId: _0x5a3130,
      subUnitId: _0x41632a,
      drawingId: _0x5d630e,
    });
  if (_0x328461) {
    let _0x375f74 = _0x2c8011(_0x328461);
    if (_0x375f74 && _0x49ae7f(_0x375f74.element))
      return { subUnitId: _0x328461, drawing: _0x375f74 };
  }
  let _0x2b60de = sa(_0x2366a5, _0x5a3130);
  for (let _0x317135 of (_0x2b60de == null
    ? undefined
    : _0x2b60de.getSnapshot().slideOrder) ?? []) {
    let _0x2ffb80 = _0x2c8011(_0x317135);
    if (_0x2ffb80 && _0x49ae7f(_0x2ffb80.element))
      return { subUnitId: _0x317135, drawing: _0x2ffb80 };
  }
}
function Gi(_0x33dce1) {
  let {
    left: _0x47cfbf,
    top: _0x14f1b8,
    width: _0x3a6039,
    height: _0x756e65,
  } = _0x33dce1.transform ?? {};
  if (
    _0x47cfbf == null ||
    _0x14f1b8 == null ||
    _0x3a6039 == null ||
    _0x756e65 == null
  )
    return;
  let _0x8212df = {
    left: _0x47cfbf,
    top: _0x14f1b8,
    width: _0x3a6039,
    height: _0x756e65,
  };
  try {
    return (Ki(_0x8212df), _0x8212df);
  } catch {
    return;
  }
}
function Ki(_0x3fb348) {
  if (
    ![_0x3fb348.left, _0x3fb348.top, _0x3fb348.width, _0x3fb348.height].every(
      Number.isFinite,
    ) ||
    _0x3fb348.width <= 0 ||
    _0x3fb348.height <= 0
  )
    throw Error("EMBED_BOUNDS_INVALID");
}
function qi(_0x27c0e6, _0x416a0b, _0x51eecc) {
  var _0x218d45;
  let _0x25bf80 = ra(_0x27c0e6.hostContext),
    _0x190b5 = sa(_0x416a0b, _0x27c0e6.hostUnitId),
    _0x5efd63 = _0x25bf80
      ? _0x190b5 == null
        ? undefined
        : _0x190b5.pageManager["getSlide"](_0x25bf80)
      : undefined;
  if (!_0x25bf80 || !_0x5efd63) return;
  let _0x1bbde1 = $i({
    ..._0x27c0e6,
    requestedAnchorId: _0x27c0e6.hostAnchorId,
  });
  if (!(
    (_0x218d45 = _0x5efd63.getData().elements) != null &&
    _0x218d45[_0x1bbde1.hostAnchorId]
  )) {
    var _0x48bae6, _0x31e13f;
    let _0x52cf35 = _0x4fe993({
      embedId: _0x1bbde1.embedId,
      hostAnchorId: _0x1bbde1.hostAnchorId,
      childUnitId:
        (_0x48bae6 = _0x27c0e6.descriptor) == null
          ? undefined
          : _0x48bae6.childUnitId,
      childType:
        (_0x31e13f = _0x27c0e6.descriptor) == null
          ? undefined
          : _0x31e13f.childType,
      left: Z(_0x1bbde1.hostContext, "left"),
      top: Z(_0x1bbde1.hostContext, "top"),
      width: Z(_0x1bbde1.hostContext, "width"),
      height: Z(_0x1bbde1.hostContext, "height"),
    });
    _0x5efd63.addElement(_0x52cf35);
  }
  return (Zi(_0x51eecc, _0x190b5, _0x1bbde1.hostUnitId, _0x25bf80), _0x1bbde1);
}
function Ji(_0x2c4347, _0x143c6d) {
  var _0x3bca30, _0xb92cf6;
  let _0x527f9b = sa(_0x143c6d, _0x2c4347.hostUnitId);
  C({
    hostUnitId: _0x2c4347.hostUnitId,
    entry: _0x2c4347.entry,
    hostContext: _0x2c4347.hostContext,
    maxIndex:
      _0x527f9b == null
        ? undefined
        : _0x527f9b.getSnapshot().slideOrder["length"],
  });
  let _0x393482 = ea(_0x2c4347),
    _0x3ef20c = ia(_0x393482.hostContext, "pageName") ?? _0x2c4347.embedId,
    _0x39a61e = _0x1b0f51({
      embedId: _0x393482.embedId,
      hostAnchorId: _0x393482.hostAnchorId,
      name: _0x3ef20c,
      childUnitId:
        (_0x3bca30 = _0x2c4347.descriptor) == null
          ? undefined
          : _0x3bca30.childUnitId,
      childType:
        (_0xb92cf6 = _0x2c4347.descriptor) == null
          ? undefined
          : _0xb92cf6.childType,
    });
  return (
    (_0x393482.hostContext = { ..._0x393482.hostContext, pageName: _0x3ef20c }),
    {
      hostAnchorId: _0x393482.hostAnchorId,
      redoMutations: [
        {
          id: _0xc57942.id,
          params: {
            unitId: _0x393482.hostUnitId,
            slide: _0x39a61e,
            insertIndex: Z(_0x393482.hostContext, "pageIndex"),
          },
        },
        { id: v, params: { record: _0x393482 } },
      ],
      undoMutations: [
        {
          id: y,
          params: {
            hostUnitId: _0x393482.hostUnitId,
            hostAnchorId: _0x393482.hostAnchorId,
          },
        },
        {
          id: _0x59f625.id,
          params: {
            unitId: _0x393482.hostUnitId,
            subUnitId: _0x393482.hostAnchorId,
          },
        },
      ],
    }
  );
}
function Yi(_0x574a76, _0x4bec28) {
  let _0x2e6f47 = sa(_0x4bec28, _0x574a76.hostUnitId);
  if (!_0x2e6f47) return;
  let _0x3b509a = ea({
      ..._0x574a76,
      requestedAnchorId: _0x574a76.hostAnchorId,
    }),
    _0x390d26 = ia(_0x3b509a.hostContext, "pageName") ?? _0x574a76.embedId,
    _0x14de9c = Z(_0x3b509a.hostContext, "pageIndex");
  if (!_0x2e6f47.pageManager["getSlide"](_0x3b509a.hostAnchorId)) {
    var _0xa39cd6, _0x445210;
    _0x2e6f47.pageManager["createSlide"](
      _0x1b0f51({
        embedId: _0x3b509a.embedId,
        hostAnchorId: _0x3b509a.hostAnchorId,
        name: _0x390d26,
        childUnitId:
          (_0xa39cd6 = _0x574a76.descriptor) == null
            ? undefined
            : _0xa39cd6.childUnitId,
        childType:
          (_0x445210 = _0x574a76.descriptor) == null
            ? undefined
            : _0x445210.childType,
      }),
      _0x14de9c,
    );
  }
  return {
    ..._0x3b509a,
    hostContext: { ..._0x3b509a.hostContext, pageName: _0x390d26 },
  };
}
function Xi(_0x151ed7, _0x33d6a4) {
  var _0x53196f, _0x27cf01;
  let _0x29d960 = ia(_0x33d6a4.hostContext, "pageName") ?? _0x33d6a4.embedId,
    _0x4e7e2d = _0x1b0f51({
      embedId: _0x33d6a4.embedId,
      hostAnchorId: _0x33d6a4.hostAnchorId,
      name: _0x29d960,
      childUnitId:
        (_0x53196f = _0x151ed7.descriptor) == null
          ? undefined
          : _0x53196f.childUnitId,
      childType:
        (_0x27cf01 = _0x151ed7.descriptor) == null
          ? undefined
          : _0x27cf01.childType,
    });
  return {
    redoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x151ed7.hostUnitId,
          hostAnchorId: _0x151ed7.hostAnchorId,
        },
      },
      {
        id: _0x59f625.id,
        params: {
          unitId: _0x151ed7.hostUnitId,
          subUnitId: _0x151ed7.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      {
        id: _0xc57942.id,
        params: {
          unitId: _0x151ed7.hostUnitId,
          slide: _0x4e7e2d,
          insertIndex: Z(_0x33d6a4.hostContext, "pageIndex"),
        },
      },
      {
        id: v,
        params: {
          record: {
            ..._0x33d6a4,
            lifecycle: "active",
            hostContext: { ..._0x33d6a4.hostContext, pageName: _0x29d960 },
          },
        },
      },
    ],
  };
}
function Zi(_0x48c850, _0x10177b, _0x50258b, _0x2376d7) {
  if (!_0x48c850 || !_0x10177b) return;
  let _0x35e3f5 = _0x10177b.pageManager["getSlide"](_0x2376d7);
  if (!_0x35e3f5) return;
  let _0x10f2f0 = _0x48c850.getDrawingData(_0x50258b, _0x2376d7),
    _0x27bd8e = _0x48c850.getDrawingOrder(_0x50258b, _0x2376d7),
    _0x466285 = new Set(_0x27bd8e),
    { data: _0x4ae121, order: _0x17f015 } = _0x53da91(
      _0x50258b,
      _0x2376d7,
      _0x35e3f5.resolveElements(),
      _0x10177b.getThemeDataForPage(_0x2376d7),
    ),
    _0x264c73 = new Set(_0x17f015);
  (_0x48c850.drawingManagerData[_0x50258b] ||
    (_0x48c850.drawingManagerData[_0x50258b] = {}),
    (_0x48c850.drawingManagerData[_0x50258b][_0x2376d7] = {
      data: _0x4ae121,
      order: _0x17f015,
    }));
  let _0x52426a = _0x27bd8e.filter((_0x8148ad) => !_0x264c73.has(_0x8148ad)),
    _0x5439e8 = _0x17f015.filter((_0x53efdb) => !_0x466285.has(_0x53efdb)),
    _0x79fd40 = _0x17f015.filter(
      (_0x4b5cc6) =>
        _0x466285.has(_0x4b5cc6) &&
        _0x10f2f0[_0x4b5cc6] !== _0x4ae121[_0x4b5cc6],
    );
  (_0x52426a.length > 0 &&
    _0x48c850.removeNotification(Qi(_0x50258b, _0x2376d7, _0x52426a)),
    _0x5439e8.length > 0 &&
      _0x48c850.addNotification(Qi(_0x50258b, _0x2376d7, _0x5439e8)),
    _0x79fd40.length > 0 &&
      _0x48c850.updateNotification(Qi(_0x50258b, _0x2376d7, _0x79fd40)));
}
function Qi(_0x1debce, _0x2c2d08, _0x1bc774) {
  return _0x1bc774.map((_0x266582) => ({
    unitId: _0x1debce,
    subUnitId: _0x2c2d08,
    drawingId: _0x266582,
  }));
}
function $i(_0x358a3d) {
  return ta(_0x358a3d, b.SlidesFloatingObject, "slides-floating");
}
function ea(_0x591b74) {
  return ta(_0x591b74, b.SlidesPageListBlock, "slides-page-list");
}
function ta(_0x328cc5, _0xb25bb9, _0x53a371) {
  return {
    hostAnchorId:
      _0x328cc5.requestedAnchorId ?? _0x53a371 + ":" + _0x328cc5.embedId,
    embedId: _0x328cc5.embedId,
    hostUnitId: _0x328cc5.hostUnitId,
    hostType: _0x328cc5.hostType,
    entry: _0x328cc5.entry,
    kind: _0xb25bb9,
    hostContext: _0x328cc5.hostContext,
    lifecycle: "active",
  };
}
function na(_0x283f4c, _0x2f4d63) {
  return {
    redoMutations: [
      {
        id: y,
        params: {
          hostUnitId: _0x283f4c.hostUnitId,
          hostAnchorId: _0x283f4c.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      { id: v, params: { record: { ..._0x2f4d63, lifecycle: "active" } } },
    ],
  };
}
function ra(_0xe3e66a) {
  return typeof (_0xe3e66a == null ? undefined : _0xe3e66a.subUnitId) ==
    "string"
    ? _0xe3e66a.subUnitId
    : undefined;
}
function Z(_0x199cfd, _0x415c98) {
  return typeof (_0x199cfd == null ? undefined : _0x199cfd[_0x415c98]) ==
    "number"
    ? _0x199cfd[_0x415c98]
    : undefined;
}
function ia(_0x5f3846, _0x5a3c6e) {
  return typeof (_0x5f3846 == null ? undefined : _0x5f3846[_0x5a3c6e]) ==
    "string"
    ? _0x5f3846[_0x5a3c6e]
    : undefined;
}
function aa(_0x40d4af, _0x2b7c1d) {
  if (!_0x40d4af) throw Error(_0x2b7c1d);
  return _0x40d4af;
}
function oa(_0x4d2e68, _0x59db27) {
  if (!_0x4d2e68) throw Error(_0x59db27);
  return _0x4d2e68;
}
function sa(_0x40c013, _0x4d73ad) {
  return (
    (_0x40c013 == null
      ? undefined
      : _0x40c013.getUnit(_0x4d73ad, _0x34bdbd.UNIVER_SLIDE)) ?? undefined
  );
}
function ca(_0x2f7379, _0x2e40f9) {
  if (!_0x2f7379) throw Error(_0x2e40f9);
  return _0x2f7379;
}
function la(_0x1ec919) {
  let _0x4396f0 = _0x1ec919.has(M) ? _0x1ec919.get(M) : undefined,
    _0x18cd86 = _0x1ec919.has(_0x2f4124) ? _0x1ec919.get(_0x2f4124) : undefined;
  Xn(_0x1ec919, [
    oi(_0x4396f0, _0x18cd86),
    Dt(
      _0x4396f0,
      () => (_0x1ec919.has(_0x307455) ? _0x1ec919.get(_0x307455) : undefined),
      () => (_0x1ec919.has(_0xea53dd) ? _0x1ec919.get(_0xea53dd) : undefined),
      () => (_0x1ec919.has(_0x1d1ba6) ? _0x1ec919.get(_0x1d1ba6) : undefined),
    ),
    Ti(_0x4396f0, _0x18cd86),
    Ii(_0x4396f0, _0x18cd86, () =>
      _0x1ec919.has(_0xc8c674) ? _0x1ec919.get(_0xc8c674) : undefined,
    ),
    Ri(_0x4396f0, _0x18cd86),
    Ar(_0x4396f0, _0x18cd86),
    Wr(_0x4396f0, _0x18cd86, () =>
      _0x1ec919.has(_0x315fa1) ? _0x1ec919.get(_0x315fa1) : undefined,
    ),
  ]);
}
let ua = class {
  constructor(_0x1513de) {
    this._modelService = _0x1513de;
  }
  getRetentionState(_0x196412, _0x10ae7a) {
    let _0x187e4d = this._modelService["getDescriptorsByResourceRef"](
      _0x196412,
      _0x10ae7a,
    );
    return this._toState(_0x196412, _0x10ae7a, _0x187e4d);
  }
  listCleanupCandidates(_0x5d22f7) {
    let _0x44d32a = new Map();
    for (let _0x5591ab of this._modelService["getDescriptors"](_0x5d22f7)) {
      let _0x562fe4 = _0x5591ab.source["ref"],
        _0x41fb88 = z(_0x562fe4),
        _0x271db2 = _0x44d32a.get(_0x41fb88);
      _0x271db2
        ? _0x271db2.descriptors["push"](_0x5591ab)
        : _0x44d32a.set(_0x41fb88, {
            ref: _0x562fe4,
            descriptors: [_0x5591ab],
          });
    }
    return [..._0x44d32a.values()]
      .map(({ ref: _0x49b13a, descriptors: _0x3a25a3 }) =>
        this._toState(_0x5d22f7, _0x49b13a, _0x3a25a3),
      )
      .filter((_0x5deab2) => _0x5deab2.eligibleForCleanup);
  }
  _toState(_0x5e25e0, _0x2e24a1, _0x14a500) {
    let _0x3806fd = _0x14a500.filter(
      (_0x5ea820) => _0x5ea820.lifecycle !== "soft-delete d",
    ).length;
    return {
      hostUnitId: _0x5e25e0,
      ref: _0x2e24a1,
      childUnitIds: [
        ...new Set(
          _0x14a500
            .map((_0x397d3e) => _0x397d3e.childUnitId)
            .filter((_0x60b5ad) => typeof _0x60b5ad == "string"),
        ),
      ],
      totalReferences: _0x14a500.length,
      activeReferences: _0x3806fd,
      softDeletedReferences: _0x14a500.length - _0x3806fd,
      shouldDisposeNow: false,
      eligibleForCleanup: _0x14a500.length > 0 && _0x3806fd === 0,
    };
  }
};
ua = H([V(0, _0x2702ca(U))], ua);
var da = class {
  constructor() {
    (x(this, "_focusOwner$", new _0x14caf3(null)),
      x(this, "focusOwner$", this._focusOwner$["asObservable"]()));
  }
  getFocusOwner() {
    return this._focusOwner$["getValue"]();
  }
  setFocusOwner(_0x3e9a06) {
    let _0x9761f6 = this.getFocusOwner();
    (_0x9761f6 &&
      _0x9761f6.hostUnitId === _0x3e9a06.hostUnitId &&
      _0x9761f6.embedId === _0x3e9a06.embedId &&
      _0x9761f6.childUnitId === _0x3e9a06.childUnitId &&
      _0x9761f6.childType === _0x3e9a06.childType &&
      _0x9761f6.reason === _0x3e9a06.reason) ||
      this._focusOwner$["next"](_0x3e9a06);
  }
  clearFocusOwner(_0x9aa5d7) {
    let _0x557a2e = this.getFocusOwner();
    _0x557a2e &&
      (!_0x9aa5d7 || _0x557a2e.embedId === _0x9aa5d7) &&
      this._focusOwner$["next"](null);
  }
};
let fa = class {
  constructor(_0x468876) {
    ((this._referencedUnitManager = _0x468876),
      x(this, "id", "embed-resource-ref-formula-data"),
      x(this, "priority", 100));
  }
  canRead(_0xc55477) {
    if (_0xc55477.target["sourceUnitId"]) return true;
    if (!_0xc55477.target["uri"]) return false;
    try {
      return (I(_0xc55477.target["uri"]), true);
    } catch {
      return false;
    }
  }
  async readData(_0x2b6d43) {
    if (!_0x2b6d43.target["uri"] && !_0x2b6d43.target["sourceUnitId"]) return;
    let _0x380ff0 = pa(_0x2b6d43),
      _0x21e68e = new Map(),
      _0xa3d3a8 = [];
    try {
      for (let _0x39446b of _0x2b6d43.ranges) {
        if (_0x39446b.tableName) {
          let _0xd2e2 = await this._referencedUnitManager["readData"]({
            ..._0x380ff0,
            part: { kind: "table", tableName: _0x39446b.tableName },
          });
          if (_0xd2e2.type !== "table") continue;
          let _0x242967 = {
            name: _0xd2e2.sheetName,
            sheetId: _0xd2e2.sheetId,
            rowCount: _0xd2e2.range["endRow"] + 1,
            columnCount: _0xd2e2.range["endColumn"] + 1,
            coverage: [_0xd2e2.range],
            cells: [],
          };
          (ma(_0x242967, _0xd2e2.values, _0xd2e2.range),
            _0x21e68e.set(_0xd2e2.sheetId, _0x242967),
            _0xa3d3a8.push({
              name: _0xd2e2.tableName,
              sheetId: _0xd2e2.sheetId,
              range: _0xd2e2.range,
              columns: _0xd2e2.columns,
              showHeader: _0xd2e2.showHeader,
            }));
          continue;
        }
        if (!_0x39446b.range || !_0x39446b.sheetName) continue;
        let _0x43593d = await this._referencedUnitManager["readData"]({
          ..._0x380ff0,
          part: {
            kind: "range",
            ref: _0x39446b.sheetName + "!" + ha(_0x39446b.range),
            sheetName: _0x39446b.sheetName,
            ...(_0x39446b.sheetId ? { sheetId: _0x39446b.sheetId } : {}),
            range: ha(_0x39446b.range),
          },
        });
        if (_0x43593d.type !== "range") continue;
        let _0x8cda3e =
            _0x43593d.sheetId ?? _0x39446b.sheetId ?? _0x39446b.sheetName,
          _0x468524 = _0x43593d.sheetName ?? _0x39446b.sheetName,
          _0x4d2ae4 = _0x8cda3e,
          _0x5f584e = _0x21e68e.get(_0x4d2ae4) ?? {
            name: _0x468524,
            sheetId: _0x8cda3e,
            rowCount: _0x39446b.range["endRow"] + 1,
            columnCount: _0x39446b.range["endColumn"] + 1,
            coverage: [],
            cells: [],
          };
        ((_0x5f584e.rowCount = Math.max(
          _0x5f584e.rowCount,
          _0x39446b.range["endRow"] + 1,
        )),
          (_0x5f584e.columnCount = Math.max(
            _0x5f584e.columnCount,
            _0x39446b.range["endColumn"] + 1,
          )),
          _0x5f584e.coverage["push"](_0x39446b.range),
          ma(_0x5f584e, _0x43593d.values, _0x39446b.range),
          _0x21e68e.set(_0x4d2ae4, _0x5f584e));
      }
    } catch {
      return _0x3cd38d(_0x2b6d43);
    }
    return {
      requestId: _0x2b6d43.requestId,
      calculationId: _0x2b6d43.calculationId,
      source: "provider",
      freshness: "fresh",
      sheets: Array.from(_0x21e68e.values()),
      tables: _0xa3d3a8,
    };
  }
};
fa = H([V(0, Y)], fa);
function pa(_0x3b86e3) {
  return _0x3b86e3.target["sourceUnitId"]
    ? {
        file: { kind: P.SELF },
        unit: {
          selector: _0x3b86e3.target["sourceUnitId"],
          type: Ln(_0x3b86e3.target["unitType"]),
        },
      }
    : I(_0x3b86e3.target["uri"]);
}
function ma(_0xdcc565, _0xf968ec, _0x44c40a) {
  _0xf968ec.forEach((_0x30a8c6, _0x31040f) => {
    _0x30a8c6.forEach((_0x3138f1, _0x1157ad) => {
      _0x3138f1 != null &&
        _0xdcc565.cells["push"]({
          row: _0x44c40a.startRow + _0x31040f,
          column: _0x44c40a.startColumn + _0x1157ad,
          cell: { v: _0x3138f1 },
        });
    });
  });
}
function ha(_0x3c6299) {
  let _0x535a1b = "" + ga(_0x3c6299.startColumn) + (_0x3c6299.startRow + 1),
    _0x3ca6ab = "" + ga(_0x3c6299.endColumn) + (_0x3c6299.endRow + 1);
  return _0x535a1b === _0x3ca6ab ? _0x535a1b : _0x535a1b + ":" + _0x3ca6ab;
}
function ga(_0x232e1b) {
  let _0x1d6029 = _0x232e1b + 1,
    _0x22e915 = "";
  for (; _0x1d6029 > 0;)
    (_0x1d6029--,
      (_0x22e915 = String.fromCharCode(65 + (_0x1d6029 % 26)) + _0x22e915),
      (_0x1d6029 = Math.floor(_0x1d6029 / 26)));
  return _0x22e915;
}
const _a = -100;
let va = class {
  constructor(_0x428291) {
    this._univerInstanceService = _0x428291;
  }
  ensureUnit(_0x105ef7) {
    (ka(_0x105ef7.ref), Aa(_0x105ef7.ref, _0x105ef7.unitType));
    let _0x3511bc = this._univerInstanceService["getUnit"](
      _0x105ef7.ref["unit"].selector,
      _0x105ef7.unitType,
    );
    if (!_0x3511bc)
      throw new S("LOCAL_RUNTIME_RESOURCE_REF_UNIT_NOT_FOUND", {
        ref: _0x105ef7.ref,
        unitType: _0x105ef7.unitType,
      });
    return { unitId: _0x3511bc.getUnitId(), unitType: _0x105ef7.unitType };
  }
};
va = H([V(0, _0x2f4124)], va);
let ya = class {
  constructor(_0xc1d43d, _0x224cf9, _0x59aa80) {
    ((this._referencedUnitManager = _0xc1d43d),
      (this._univerInstanceService = _0x224cf9),
      (this._commandService = _0x59aa80));
  }
  async readData(_0x1f96af) {
    let _0xad6b00 =
        _0x1f96af.dataType === "range" && Cn(_0x1f96af.selector)
          ? _0x1f96af.selector
          : undefined,
      _0x5d814b =
        _0x1f96af.dataType === "table" && wn(_0x1f96af.selector)
          ? _0x1f96af.selector
          : undefined;
    if (!_0xad6b00 && !_0x5d814b)
      throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED", {
        dataType: _0x1f96af.dataType,
        selector: _0x1f96af.selector,
      });
    let _0x150526 = await this._referencedUnitManager["ensure"](
      ja(_0x1f96af.ref),
      { unitType: _0x1f96af.unitType, signal: _0x1f96af.signal },
    );
    if (_0xad6b00 && _0x150526.unitType === _0x34bdbd.UNIVER_SHEET)
      return this._readSheetRange(_0x1f96af.ref, _0x150526.unitId, _0xad6b00);
    if (_0x5d814b && _0x150526.unitType === _0x34bdbd.UNIVER_BASE)
      return this._readBaseTable(_0x1f96af.ref, _0x150526.unitId, _0x5d814b);
    throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_TYPE_UNSUPPORTED", {
      ref: _0x1f96af.ref,
      unitType: _0x150526.unitType,
    });
  }
  watchData(_0xe0f860, _0x41dd12) {
    if (
      (ka(_0xe0f860.ref),
      _0xe0f860.unitType === _0x34bdbd.UNIVER_SHEET &&
        _0xe0f860.dataType === "range" &&
        Cn(_0xe0f860.selector))
    )
      return this._watchSheetRange(
        _0xe0f860.ref,
        _0xe0f860.selector,
        _0x41dd12,
      );
    if (
      _0xe0f860.unitType === _0x34bdbd.UNIVER_BASE &&
      _0xe0f860.dataType === "table" &&
      wn(_0xe0f860.selector)
    )
      return this._watchBaseTable(_0xe0f860.ref, _0x41dd12);
    throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED", {
      dataType: _0xe0f860.dataType,
      selector: _0xe0f860.selector,
    });
  }
  _watchSheetRange(_0x33640f, _0x4de3d7, _0x1c02e8) {
    let _0x4ce2ac = _0x4de3d7.sheetId,
      _0x2a3978 = Na(_0x4de3d7.range);
    return this._commandService["onCommandExecuted"]((_0x469349) => {
      if (Sa(_0x469349)) {
        if (!_0x4ce2ac) {
          var _0x565243;
          let _0x53d353 = this._univerInstanceService["getUnit"](
            _0x33640f.unit["selector"],
            _0x34bdbd.UNIVER_SHEET,
          );
          _0x4ce2ac =
            _0x53d353 == null ||
            (_0x565243 = _0x53d353.getSheetBySheetName(_0x4de3d7.sheetName)) ==
              null
              ? undefined
              : _0x565243.getSheetId();
        }
        if (
          _0x469349.params["unitId"] === _0x33640f.unit["selector"] &&
          _0x469349.params["subUnitId"] === _0x4ce2ac
        ) {
          if (Ta(_0x469349, _0x7e42e0)) {
            if (!_0x469349.params["cellValue"]) {
              _0x1c02e8();
              return;
            }
            let _0x361d22 = new _0x3277a5(
              _0x469349.params["cellValue"],
            ).getStartEndScope();
            _0x4d816b.intersects(_0x2a3978, _0x361d22) && _0x1c02e8();
            return;
          }
          if (Ta(_0x469349, _0x1dd7a6)) {
            _0x4d816b.intersects(_0x2a3978, _0x469349.params["range"]) &&
              _0x1c02e8();
            return;
          }
          Ca(_0x469349) && _0x1c02e8();
        }
      }
    });
  }
  _watchBaseTable(_0x3f6bde, _0x265ffb) {
    return this._commandService["onCommandExecuted"]((_0x2b7993) => {
      _0x2b7993.id === _0x4c531d.id &&
        wa(_0x2b7993) &&
        _0x2b7993.params["unitId"] === _0x3f6bde.unit["selector"] &&
        _0x265ffb();
    });
  }
  _readSheetRange(_0x11044d, _0x2f92b3, _0x4740c2) {
    let _0x165a56 = this._univerInstanceService["getUnit"](
      _0x2f92b3,
      _0x34bdbd.UNIVER_SHEET,
    );
    if (!_0x165a56)
      throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND", {
        ref: _0x11044d,
        unitId: _0x2f92b3,
      });
    let _0x508593 = _0x4740c2.sheetId
      ? _0x165a56.getSheetBySheetId(_0x4740c2.sheetId)
      : _0x165a56.getSheetBySheetName(_0x4740c2.sheetName);
    if (!_0x508593)
      throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_SHEET_NOT_FOUND", {
        ref: _0x11044d,
        selector: _0x4740c2,
      });
    return {
      type: "range",
      sheetId: _0x508593.getSheetId(),
      sheetName: _0x508593.getName(),
      values: _0x508593
        .getRange(Na(_0x4740c2.range))
        .getValues()
        .map((_0x143ed0) =>
          _0x143ed0.map((_0x7f7a9b) => Fa(_0x27cc09(_0x7f7a9b))),
        ),
    };
  }
  _readBaseTable(_0x32c845, _0x933aca, _0x4ade53) {
    let _0xa0b783 = this._univerInstanceService["getUnit"](
      _0x933aca,
      _0x34bdbd.UNIVER_BASE,
    );
    if (!_0xa0b783)
      throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND", {
        ref: _0x32c845,
        unitId: _0x933aca,
      });
    let _0x23f410 = Ia(
      _0xa0b783.getSnapshot().tables,
      _0x4ade53.tableName,
      _0x4ade53.tableId,
    );
    if (!_0x23f410)
      throw new S("LOCAL_RUNTIME_RESOURCE_REF_DATA_TABLE_NOT_FOUND", {
        ref: _0x32c845,
        selector: _0x4ade53,
      });
    let _0xbbc791 = Ea(_0x23f410)
        ? _0x23f410
        : _0x380eaf(_0x36b85f.deepClone(_0x23f410)),
      _0x1dbb88 = _0xbbc791.recordOrder ?? [],
      _0x1ee941 = _0xbbc791.fieldOrder;
    return {
      type: "table",
      tableName: _0x4ade53.tableName,
      sheetName: _0xbbc791.name,
      sheetId: _0xbbc791.id,
      range: {
        startRow: 0,
        endRow: Math.max(0, _0x1dbb88.length - 1),
        startColumn: 0,
        endColumn: Math.max(0, _0x1ee941.length - 1),
      },
      columns: _0x1ee941.map((_0x185fe5) => {
        var _0x49eba8;
        return (
          ((_0x49eba8 = _0xbbc791.fields[_0x185fe5]) == null
            ? undefined
            : _0x49eba8.name) ?? _0x185fe5
        );
      }),
      showHeader: false,
      values: _0x1dbb88.map((_0x2fb119) =>
        _0x1ee941.map(
          (_0x18b4cb) => _0x23cb5d(_0xbbc791, _0x2fb119, _0x18b4cb) ?? null,
        ),
      ),
    };
  }
};
ya = H([V(0, _0x2702ca(Y)), V(1, _0x2f4124), V(2, _0xf66d63)], ya);
const ba = new Set([_0x5ab48e.id, _0x6ec2eb.id, _0x2a9fa9.id, _0x3ba504.id]),
  xa = new Set([_0x7e42e0.id, _0x1dd7a6.id, ...ba]);
function Sa(_0x61a358) {
  return !xa.has(_0x61a358.id) ||
    _0x61a358.params == null ||
    typeof _0x61a358.params != "object"
    ? false
    : "unitId" in _0x61a358.params && "subUnitId" in _0x61a358.params;
}
function Ca(_0x5a037b) {
  return ba.has(_0x5a037b.id);
}
function wa(_0x1f3eae) {
  return (
    _0x1f3eae.params != null &&
    typeof _0x1f3eae.params == "object" &&
    "unitId" in _0x1f3eae.params &&
    "op" in _0x1f3eae.params
  );
}
function Ta(_0x49888b, _0x3c978b) {
  return _0x49888b.id === _0x3c978b.id && _0x49888b.params !== undefined;
}
function Ea(_0x4bb38d) {
  let _0x1f7ff4 = _0x4bb38d.recordOrder;
  return _0x1f7ff4 == null ||
    _0x1f7ff4.length !== Object.keys(_0x4bb38d.records ?? {}).length
    ? false
    : _0x4bb38d.cellData != null &&
        _0x1f7ff4.every((_0x413401, _0x2d329e) => {
          var _0x52e903, _0x1e34e4;
          return (
            ((_0x52e903 = _0x4bb38d.rowIndex) == null
              ? undefined
              : _0x52e903[_0x413401]) === _0x2d329e &&
            ((_0x1e34e4 = _0x4bb38d.rowId) == null
              ? undefined
              : _0x1e34e4[_0x2d329e]) === _0x413401
          );
        }) &&
        _0x4bb38d.fieldOrder["every"]((_0x2dd28c, _0x99edb9) => {
          var _0x2d04a9, _0x406bb5;
          return (
            ((_0x2d04a9 = _0x4bb38d.colIndex) == null
              ? undefined
              : _0x2d04a9[_0x2dd28c]) === _0x99edb9 &&
            ((_0x406bb5 = _0x4bb38d.colId) == null
              ? undefined
              : _0x406bb5[_0x99edb9]) === _0x2dd28c
          );
        });
}
function Da(_0x146d46) {
  return {
    registrationId: "local-runtime-resource-ref-unit-provider",
    match: {
      fileKinds: [P.SELF],
      unitTypes: ["sheet", "doc", "slide", "base", "board"],
    },
    priority: _a,
    provider: _0x146d46,
  };
}
function Oa(_0x1461f1) {
  return {
    registrationId: "local-runtime-resource-ref-data-provider",
    match: { fileKinds: [P.SELF], unitTypes: ["sheet", "base"] },
    priority: _a,
    provider: _0x1461f1,
  };
}
function ka(_0x10e0da) {
  if (
    (typeof _0x10e0da == "string" ? R(_0x10e0da) : _0x10e0da).file["kind"] !==
    P.SELF
  )
    throw new S("LOCAL_RUNTIME_RESOURCE_REF_UNSUPPORTED", { ref: _0x10e0da });
}
function Aa(_0x45a71a, _0x1a58f8) {
  if (
    (typeof _0x45a71a == "string" ? R(_0x45a71a) : _0x45a71a).unit["type"] !==
    Ln(_0x1a58f8)
  )
    throw new S("LOCAL_RUNTIME_RESOURCE_REF_UNIT_TYPE_MISMATCH", {
      ref: _0x45a71a,
      unitType: _0x1a58f8,
    });
}
function ja(_0x4a5138) {
  return { file: _0x4a5138.file, unit: _0x4a5138.unit };
}
const Ma = /^\$?([A-Za-z]+)\$?([1-9]\d*)(?::\$?([A-Za-z]+)\$?([1-9]\d*))?$/;
function Na(_0x65e696) {
  let _0x10a5b8 = Ma.exec(_0x65e696);
  if (!_0x10a5b8)
    throw new S("LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", {
      range: _0x65e696,
    });
  let _0x4dd423 = Pa(_0x10a5b8[1]),
    _0x530a6f = Number(_0x10a5b8[2]) - 1,
    _0x49ed16 = _0x10a5b8[3] ? Pa(_0x10a5b8[3]) : _0x4dd423,
    _0x4cbcd4 = _0x10a5b8[4] ? Number(_0x10a5b8[4]) - 1 : _0x530a6f;
  if (_0x4cbcd4 < _0x530a6f || _0x49ed16 < _0x4dd423)
    throw new S("LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", {
      range: _0x65e696,
    });
  return {
    startRow: _0x530a6f,
    endRow: _0x4cbcd4,
    startColumn: _0x4dd423,
    endColumn: _0x49ed16,
  };
}
function Pa(_0x522b45) {
  let _0x33150c = 0;
  for (let _0x216411 of _0x522b45.toUpperCase()) {
    let _0x33cf95 = _0x216411.charCodeAt(0);
    if (_0x33cf95 < 65 || _0x33cf95 > 90)
      throw new S("LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", {
        label: _0x522b45,
      });
    _0x33150c = _0x33150c * 26 + _0x33cf95 - 64;
  }
  return _0x33150c - 1;
}
function Fa(_0xda7016) {
  return typeof _0xda7016 == "string" ||
    typeof _0xda7016 == "number" ||
    typeof _0xda7016 == "boolean"
    ? _0xda7016
    : null;
}
function Ia(_0x261ef0, _0x43b258, _0x571e45) {
  if (_0x571e45 && _0x261ef0[_0x571e45]) return _0x261ef0[_0x571e45];
  let _0xb8659f = _0x261ef0[_0x43b258];
  if (_0xb8659f) return _0xb8659f;
  let _0x155052 = _0x43b258.trim().toLowerCase(),
    _0x35752d = _0x1003c6({ tables: _0x261ef0 }),
    _0x1445e9 = Object.values(_0x261ef0).filter(
      (_0x30ff0d) => _0x30ff0d.name["trim"]().toLowerCase() === _0x155052,
    ),
    _0x49d4e0 = Object.values(_0x261ef0).filter((_0x2249af) => {
      var _0x56349c;
      return (
        ((_0x56349c = _0x35752d.get(_0x2249af.id)) == null
          ? undefined
          : _0x56349c.toLowerCase()) === _0x155052
      );
    });
  return _0x49d4e0.length === 1
    ? _0x49d4e0[0]
    : _0x1445e9.length === 1
      ? _0x1445e9[0]
      : undefined;
}
const La = new WeakMap();
var Q = class {
  constructor() {
    x(this, "_registrations", []);
  }
  register(_0x90eb8b) {
    if (
      this._registrations["some"](
        (_0x3f52b6) => _0x3f52b6.registrationId === _0x90eb8b.registrationId,
      )
    )
      throw Error(
        "Referenced unit API resolver already registered: " +
          _0x90eb8b.registrationId,
      );
    return (
      this._registrations["push"](_0x90eb8b),
      _0x50161f(() => {
        let _0x2d8b09 = this._registrations["indexOf"](_0x90eb8b);
        _0x2d8b09 >= 0 && this._registrations["splice"](_0x2d8b09, 1);
      })
    );
  }
  registerMany(_0x4bfdbe) {
    return _0x4bfdbe.map((_0x39f156) => this.register(_0x39f156));
  }
  resolve(_0x5ce9e1) {
    let _0x251f03 = this._registrations["filter"](
      (_0x366159) => _0x366159.unitType === _0x5ce9e1.unitType,
    );
    if (_0x251f03.length > 1)
      throw Error("REFERENCED_UNIT_API_RESOLVER_CONFLICT");
    let _0x148e46 = _0x251f03[0];
    if (!_0x148e46) throw Error("REFERENCED_UNIT_API_UNAVAILABLE");
    let _0xda3ff6 = _0x148e46.resolve(_0x5ce9e1);
    if (!_0xda3ff6) throw Error("REFERENCED_UNIT_API_UNAVAILABLE");
    return _0xda3ff6;
  }
  list() {
    return [...this._registrations];
  }
};
function Ra() {
  return [
    {
      registrationId: "univer.sheet.workbook.api",
      unitType: _0x34bdbd.UNIVER_SHEET,
      resolve: ({ api: _0x573ea8, unitId: _0x4bdfb1 }) => {
        var _0x395abf;
        return (_0x395abf = Ha(_0x573ea8, "getWorkbook")) == null
          ? undefined
          : _0x395abf(_0x4bdfb1);
      },
    },
    {
      registrationId: "univer.doc.document.api",
      unitType: _0x34bdbd.UNIVER_DOC,
      resolve: ({ api: _0x37bd65, unitId: _0x39cd0 }) => {
        var _0x58fd79;
        return (_0x58fd79 = Ha(_0x37bd65, "getDocument")) == null
          ? undefined
          : _0x58fd79(_0x39cd0);
      },
    },
    {
      registrationId: "univer-pro.slide.presentation.api",
      unitType: _0x34bdbd.UNIVER_SLIDE,
      resolve: ({ api: _0xade1ab, unitId: _0x587a32 }) => {
        var _0x2a9dcd;
        return (_0x2a9dcd = Ha(_0xade1ab, "getPresentation")) == null
          ? undefined
          : _0x2a9dcd(_0x587a32);
      },
    },
    {
      registrationId: "univer-pro.base.api",
      unitType: _0x34bdbd.UNIVER_BASE,
      resolve: ({ api: _0x3587e7, unitId: _0x5cc2fe }) => {
        var _0x1951e2;
        return (_0x1951e2 = Ha(_0x3587e7, "getBase")) == null
          ? undefined
          : _0x1951e2(_0x5cc2fe);
      },
    },
    {
      registrationId: "univer-pro.board.api",
      unitType: _0x34bdbd.UNIVER_BOARD,
      resolve: ({ api: _0x188074, unitId: _0x1e3cd3 }) => {
        var _0x33a022;
        return (_0x33a022 = Ha(_0x188074, "getBoard")) == null
          ? undefined
          : _0x33a022(_0x1e3cd3);
      },
    },
  ];
}
function za(_0x117a38, _0x22802b) {
  let _0x176bf4 = Va(_0x22802b);
  if (_0x117a38.has(Q)) {
    let _0x2a7ec4 = _0x117a38.get(Q);
    _0x176bf4.forEach((_0x35c6e5) => {
      _0x2a7ec4
        .list()
        .some(
          (_0x405e2d) => _0x405e2d.registrationId === _0x35c6e5.registrationId,
        ) || _0x2a7ec4.register(_0x35c6e5);
    });
    return;
  }
  let _0x134a03 = _0x117a38,
    _0x5bdf01 = La.get(_0x134a03) ?? [];
  (_0x176bf4.forEach((_0x5bd6a2) => {
    _0x5bdf01.some(
      (_0x435f59) => _0x435f59.registrationId === _0x5bd6a2.registrationId,
    ) || _0x5bdf01.push(_0x5bd6a2);
  }),
    La.set(_0x134a03, _0x5bdf01));
}
function Ba(_0x3b871b) {
  if (!_0x3b871b.has(Q)) return;
  let _0x4e2457 = La.get(_0x3b871b);
  if (!(_0x4e2457 != null && _0x4e2457.length)) return;
  let _0x333f9e = _0x3b871b.get(Q);
  (_0x4e2457.forEach((_0x563847) => {
    _0x333f9e
      .list()
      .some(
        (_0xeb86b0) => _0xeb86b0.registrationId === _0x563847.registrationId,
      ) || _0x333f9e.register(_0x563847);
  }),
    La.delete(_0x3b871b));
}
function Va(_0x3fdf60) {
  let _0x474f43 = [];
  return (
    _0x3fdf60.forEach((_0x27db17) => {
      _0x474f43.some(
        (_0x2e8e51) => _0x2e8e51.registrationId === _0x27db17.registrationId,
      ) || _0x474f43.push(_0x27db17);
    }),
    _0x474f43
  );
}
function Ha(_0x2916ee, _0x47a453) {
  let _0x1d60bc = _0x2916ee[_0x47a453];
  return typeof _0x1d60bc == "function" ? _0x1d60bc.bind(_0x2916ee) : undefined;
}
var Ua = class {
  constructor() {
    (x(this, "_unitRegistrations", []), x(this, "_dataRegistrations", []));
  }
  registerUnitProvider(_0x4d2d14) {
    return this._register(this._unitRegistrations, _0x4d2d14, "unit");
  }
  registerDataProvider(_0x11c76b) {
    return this._register(this._dataRegistrations, _0x11c76b, "data");
  }
  getUnitProvider(_0x21a5ac, _0x151239) {
    return this._get(this._unitRegistrations, _0x21a5ac, _0x151239, "unit");
  }
  getDataProvider(_0x44a5dc, _0x2a6fa5) {
    return this._get(this._dataRegistrations, _0x44a5dc, _0x2a6fa5, "data");
  }
  listUnitProviders() {
    return [...this._unitRegistrations];
  }
  listDataProviders() {
    return [...this._dataRegistrations];
  }
  _register(_0x326528, _0x49988a, _0x2ce8c3) {
    if (
      _0x326528.some(
        (_0x3ee22b) => _0x3ee22b.registrationId === _0x49988a.registrationId,
      )
    )
      throw Error(
        "Embed IResourceRef " +
          _0x2ce8c3 +
          "\x20provider\x20already\x20registered:\x20" +
          _0x49988a.registrationId,
      );
    return (
      _0x326528.push(_0x49988a),
      _0x50161f(() => {
        let _0x639af7 = _0x326528.indexOf(_0x49988a);
        _0x639af7 >= 0 && _0x326528.splice(_0x639af7, 1);
      })
    );
  }
  _get(_0x1ff7cb, _0x556320, _0x5a1fd9, _0x3b923a) {
    let _0x82a067 = _0x1ff7cb.filter((_0x59f982) =>
      this._matches(_0x59f982.match, _0x556320, _0x5a1fd9),
    );
    if (_0x82a067.length === 0) return;
    let _0x5304ad = Math.max(
        ..._0x82a067.map((_0x2f6ee5) => _0x2f6ee5.priority ?? 0),
      ),
      _0x4a4b21 = _0x82a067.filter(
        (_0x5bdaf5) => (_0x5bdaf5.priority ?? 0) === _0x5304ad,
      );
    if (_0x4a4b21.length > 1)
      throw new J("provider-conflict", {
        capability: _0x3b923a,
        registrationIds: _0x4a4b21.map((_0x407164) =>
          "registrationId" in _0x407164 ? _0x407164.registrationId : undefined,
        ),
      });
    return _0x4a4b21[0];
  }
  _matches(_0xe825ac, _0x3a93b1, _0x4b3863) {
    if (
      _0xe825ac.fileKinds &&
      !_0xe825ac.fileKinds["includes"](_0x3a93b1.file["kind"])
    )
      return false;
    if (_0xe825ac.uriSchemes) {
      if (_0x3a93b1.file["kind"] !== P.URI) return false;
      let _0x3cef89 = Wa(_0x3a93b1.file["uri"]);
      if (
        !_0x3cef89 ||
        !_0xe825ac.uriSchemes["some"](
          (_0x185c48) => _0x185c48.toLowerCase() === _0x3cef89,
        )
      )
        return false;
    }
    return !(
      (_0xe825ac.unitTypes &&
        !_0xe825ac.unitTypes["includes"](
          _0x4b3863 ?? _0x3a93b1.unit["type"],
        )) ||
      (_0xe825ac.unitSelectors &&
        !_0xe825ac.unitSelectors["includes"](_0x3a93b1.unit["selector"]))
    );
  }
};
function Wa(_0x9a4083) {
  var _0x5210d9;
  return (_0x5210d9 = /^([a-z][a-z0-9+.-]*):/i.exec(_0x9a4083)) == null ||
    (_0x5210d9 = _0x5210d9[1]) == null
    ? undefined
    : _0x5210d9.toLowerCase();
}
let Ga = class {
  constructor(_0x48062d) {
    ((this._resourceRefProviderRegistry = _0x48062d),
      x(this, "_loadStates", new Map()),
      x(this, "_loadStatesByRuntimeUnitId", new Map()),
      x(this, "_usageCounts", new Map()));
  }
  ensure(_0x580a41, _0x4ab2aa = {}) {
    let _0x1beb46 = I(_0x580a41),
      _0x354d2b = this._resolveUnitType(_0x1beb46, _0x4ab2aa.unitType),
      _0x551bf8 = this._getUnitLoadKey(_0x1beb46, _0x354d2b),
      _0x54dee8 = this._loadStates["get"](_0x551bf8);
    if (_0x54dee8)
      return this._withOptionalAbort(
        _0x54dee8.providerLoadPromise,
        _0x4ab2aa.signal,
      );
    let _0x2d65e2 = this._getUnitProvider(_0x1beb46, _0x354d2b),
      _0x2b4f68 = this._createLoadState({
        ref: _0x1beb46,
        unitType: _0x354d2b,
        unitLoadKey: _0x551bf8,
        provider: _0x2d65e2,
        createOptions: _0x4ab2aa.createOptions ?? et,
        signal: _0x4ab2aa.signal,
      });
    return this._withOptionalAbort(
      _0x2b4f68.providerLoadPromise,
      _0x4ab2aa.signal,
    );
  }
  async readData(_0xbdf1e4, _0x3086e9 = {}) {
    let _0x9900b4 = I(_0xbdf1e4),
      _0x2e0099 = Cn(_0x9900b4.part)
        ? "range"
        : wn(_0x9900b4.part)
          ? "table"
          : undefined;
    if (!_0x2e0099) throw new J("missing-data-selector", { ref: _0x9900b4 });
    let _0x2db0a7 = _0x9900b4.part,
      _0x8ec9a7 = this._resolveUnitType(_0x9900b4, undefined),
      _0x5502e9 = this._resourceRefProviderRegistry["getDataProvider"](
        _0x9900b4,
        _0x9900b4.unit["type"],
      );
    if (!_0x5502e9)
      throw new J("provider-missing", {
        capability: "data",
        ref: _0x9900b4,
        unitType: _0x8ec9a7,
      });
    return _0x5502e9.provider["readData"]({
      ref: _0x9900b4,
      unitType: _0x8ec9a7,
      dataType: _0x2e0099,
      selector: _0x2db0a7,
      signal: _0x3086e9.signal,
    });
  }
  watchData(_0x2ddc69, _0x9cbf1f) {
    let _0x53c540 = I(_0x2ddc69),
      _0x1b42c1 = Cn(_0x53c540.part)
        ? "range"
        : wn(_0x53c540.part)
          ? "table"
          : undefined;
    if (!_0x1b42c1) throw new J("missing-data-selector", { ref: _0x53c540 });
    let _0xf68879 = this._resolveUnitType(_0x53c540, undefined),
      _0x58f43f = this._resourceRefProviderRegistry["getDataProvider"](
        _0x53c540,
        _0x53c540.unit["type"],
      );
    if (!_0x58f43f)
      throw new J("provider-missing", {
        capability: "data",
        ref: _0x53c540,
        unitType: _0xf68879,
      });
    if (_0x58f43f.provider["watchData"])
      return _0x58f43f.provider["watchData"](
        {
          ref: _0x53c540,
          unitType: _0xf68879,
          dataType: _0x1b42c1,
          selector: _0x53c540.part,
        },
        _0x9cbf1f,
      );
  }
  addUsage(_0x572e3c, _0x10f05a, _0x428cd8 = 1) {
    let _0x104e23 = this._getUsageKey(_0x572e3c, _0x10f05a);
    this._usageCounts["set"](
      _0x104e23,
      (this._usageCounts["get"](_0x104e23) ?? 0) + _0x428cd8,
    );
    let _0x3e03bf = false;
    return _0x50161f(() => {
      if (_0x3e03bf) return;
      _0x3e03bf = true;
      let _0xc9a74b = (this._usageCounts["get"](_0x104e23) ?? 0) - _0x428cd8;
      if (_0xc9a74b <= 0) {
        this._usageCounts["delete"](_0x104e23);
        return;
      }
      this._usageCounts["set"](_0x104e23, _0xc9a74b);
    });
  }
  releaseUnit(_0x4bddfc) {
    for (let [_0x431cdc] of this._usageCounts) {
      let [_0x28d7b0, _0x521d38] = JSON.parse(_0x431cdc);
      (_0x28d7b0 === _0x4bddfc || _0x521d38 === _0x4bddfc) &&
        this._usageCounts["delete"](_0x431cdc);
    }
    for (let _0x258a3f of this._loadStates["values"]()) {
      var _0xd817c7;
      ((_0xd817c7 = _0x258a3f.record) == null
        ? undefined
        : _0xd817c7.unitId) === _0x4bddfc && this._removeLoadState(_0x258a3f);
    }
  }
  _getUnitProvider(_0x4d69bf, _0x286ead) {
    let _0x42988d = this._resourceRefProviderRegistry["getUnitProvider"](
      _0x4d69bf,
      Ln(_0x286ead),
    );
    if (!_0x42988d)
      throw new J("provider-missing", {
        capability: "unit",
        ref: _0x4d69bf,
        unitType: _0x286ead,
      });
    return _0x42988d.provider;
  }
  _createLoadState(_0x2984b3) {
    let _0x10ff0a = {
      unitLoadKey: _0x2984b3.unitLoadKey,
      ref: _0x2984b3.ref,
      token: Symbol(_0x2984b3.unitLoadKey),
      providerLoadPromise: Promise.resolve(null),
    };
    return (
      this._addLoadState(_0x10ff0a),
      (_0x10ff0a.providerLoadPromise = Promise.resolve()
        .then(() =>
          _0x2984b3.provider["ensureUnit"]({
            ref: _0x2984b3.ref,
            unitType: _0x2984b3.unitType,
            createOptions: _0x2984b3.createOptions,
            signal: _0x2984b3.signal,
          }),
        )
        .then((_0x459842) => {
          if (_0x459842.unitType !== _0x2984b3.unitType)
            throw new J("unit-type-mismatch", {
              expected: _0x2984b3.unitType,
              actual: _0x459842.unitType,
            });
          let _0x155ca5 = {
            ref: this._formatUnitRef(_0x2984b3.ref),
            unitId: _0x459842.unitId,
            unitType: _0x459842.unitType,
          };
          return (
            this._loadStates["get"](_0x10ff0a.unitLoadKey) === _0x10ff0a &&
              ((_0x10ff0a.record = _0x155ca5),
              this._addRuntimeUnitLoadState(_0x155ca5.unitId, _0x10ff0a)),
            _0x155ca5
          );
        })
        .catch((_0x1f44fb) => {
          throw (this._removeLoadState(_0x10ff0a), _0x1f44fb);
        })),
      _0x10ff0a
    );
  }
  _addLoadState(_0x341143) {
    this._loadStates["set"](_0x341143.unitLoadKey, _0x341143);
  }
  _removeLoadState(_0x4a2319) {
    if (
      (this._loadStates["get"](_0x4a2319.unitLoadKey) === _0x4a2319 &&
        this._loadStates["delete"](_0x4a2319.unitLoadKey),
      _0x4a2319.record)
    ) {
      let _0x1670f2 = this._loadStatesByRuntimeUnitId["get"](
        _0x4a2319.record["unitId"],
      );
      (_0x1670f2 == null || _0x1670f2.delete(_0x4a2319),
        (_0x1670f2 == null ? undefined : _0x1670f2.size) === 0 &&
          this._loadStatesByRuntimeUnitId["delete"](
            _0x4a2319.record["unitId"],
          ));
    }
  }
  _addRuntimeUnitLoadState(_0x4b888b, _0x1ce1eb) {
    let _0x1e27f5 = this._loadStatesByRuntimeUnitId["get"](_0x4b888b);
    (_0x1e27f5 ||
      ((_0x1e27f5 = new Set()),
      this._loadStatesByRuntimeUnitId["set"](_0x4b888b, _0x1e27f5)),
      _0x1e27f5.add(_0x1ce1eb));
  }
  _withOptionalAbort(_0x2a5cfe, _0x1af1b4) {
    return _0x1af1b4 ? this._withAbort(_0x2a5cfe, _0x1af1b4) : _0x2a5cfe;
  }
  _withAbort(_0x470121, _0x41ba0e) {
    return _0x41ba0e.aborted
      ? Promise.reject(Error("REFERENCED_UNIT_LOAD_ABORTED"))
      : new Promise((_0x47175a, _0x3c1b1f) => {
          let _0x4c1016 = () => {
            (_0x41ba0e.removeEventListener("abort", _0x4c1016),
              _0x3c1b1f(Error("REFERENCED_UNIT_LOAD_ABORTED")));
          };
          (_0x41ba0e.addEventListener("abort", _0x4c1016, { once: true }),
            _0x470121.then(
              (_0x4ec9c4) => {
                (_0x41ba0e.removeEventListener("abort", _0x4c1016),
                  _0x47175a(_0x4ec9c4));
              },
              (_0x4d8b78) => {
                (_0x41ba0e.removeEventListener("abort", _0x4c1016),
                  _0x3c1b1f(_0x4d8b78));
              },
            ));
        });
  }
  _getUnitLoadKey(_0x5e9040, _0x71b68f) {
    return JSON.stringify([L(_0x5e9040), _0x71b68f]);
  }
  _getUsageKey(_0x31e2a8, _0x3b7c7d) {
    return JSON.stringify([_0x31e2a8, _0x3b7c7d]);
  }
  _resolveUnitType(_0x25ac9e, _0x3a4e5c) {
    let _0x417d09 = B(_0x25ac9e.unit["type"]);
    if (
      _0x3a4e5c !== undefined &&
      _0x3a4e5c !== _0x34bdbd.UNRECOGNIZED &&
      _0x3a4e5c !== _0x417d09
    )
      throw new J("unit-type-mismatch", {
        expected: _0x3a4e5c,
        actual: _0x417d09,
      });
    return _0x417d09;
  }
  _formatUnitRef(_0x2fa1ca) {
    return Tn({ file: _0x2fa1ca.file, unit: _0x2fa1ca.unit });
  }
};
Ga = H([V(0, _0x2702ca(Ua))], Ga);
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
  constructor(_0x579591, _0x2dc017, _0x2c9f99, _0x1d19e0, _0x267f47) {
    ((this._modelService = _0x579591),
      (this._unitLeaseService = _0x2dc017),
      (this._unitLeasePolicyService = _0x2c9f99),
      (this._referencedUnitManager = _0x1d19e0),
      (this._univerInstanceService = _0x267f47),
      x(this, "_materializingDescriptors", new Map()));
  }
  async materializeDescriptor(_0x18c9c9) {
    let _0x22e8be = this._getLoadedDescriptorState(_0x18c9c9.descriptor);
    if (_0x22e8be)
      return _0x22e8be.stored
        ? (this._leaseMaterializedDescriptor(_0x22e8be.descriptor),
          _0x22e8be.descriptor)
        : this._commitMaterializedDescriptor(_0x22e8be.descriptor);
    let _0x2e28a9 = this._getMaterializeKey(_0x18c9c9.descriptor),
      _0x417a88 = this._materializingDescriptors["get"](_0x2e28a9);
    if (_0x417a88) return _0x417a88;
    let _0x4b1c60 = this._loadAndCommitDescriptor(_0x18c9c9);
    this._materializingDescriptors["set"](_0x2e28a9, _0x4b1c60);
    let _0x5708e6 = () => {
      this._materializingDescriptors["get"](_0x2e28a9) === _0x4b1c60 &&
        this._materializingDescriptors["delete"](_0x2e28a9);
    };
    return (_0x4b1c60.then(_0x5708e6, _0x5708e6), _0x4b1c60);
  }
  async _loadAndCommitDescriptor(_0x5cbada) {
    return this._commitMaterializedDescriptor(
      await this._loadDescriptor(_0x5cbada),
    );
  }
  async _loadDescriptor(_0x50ce0c) {
    let _0x35671a = _0x50ce0c.descriptor,
      _0x5e1cbe = await this._referencedUnitManager["ensure"](
        _0x35671a.source["ref"],
        {
          unitType: _0x35671a.childType,
          signal: _0x50ce0c.signal,
          createOptions: _0x50ce0c.createOptions ?? et,
        },
      );
    return {
      ..._0x35671a,
      source: {
        unitType: _0x35671a.childType,
        ref: _0x5e1cbe.ref,
        ...(_0x35671a.source["creationConfig"] === undefined
          ? undefined
          : { creationConfig: _0x35671a.source["creationConfig"] }),
      },
      childUnitId: _0x5e1cbe.unitId,
      childType: _0x5e1cbe.unitType,
    };
  }
  _commitMaterializedDescriptor(_0x5e2ec8) {
    let _0x52f455;
    try {
      return (
        (_0x52f455 = this._leaseMaterializedDescriptor(_0x5e2ec8)),
        this._modelService["addDescriptor"](_0x5e2ec8.hostUnitId, _0x5e2ec8),
        this._modelService["getDescriptor"](
          _0x5e2ec8.hostUnitId,
          _0x5e2ec8.embedId,
        )
      );
    } catch (_0xd13456) {
      throw (_0x52f455 == null || _0x52f455.dispose(), _0xd13456);
    }
  }
  _leaseMaterializedDescriptor(_0x3a9cc2) {
    if (
      !_0x3a9cc2.childUnitId ||
      _0x3a9cc2.childType == null ||
      this._unitLeasePolicyService["getPolicy"]() !== "exclusive"
    )
      return;
    let _0x2065aa = this._getDescriptorOwner(_0x3a9cc2);
    if (!this._unitLeaseService["hasLease"](_0x2065aa, _0x3a9cc2.childUnitId))
      return this._unitLeaseService["acquire"]({
        ..._0x2065aa,
        childUnitId: _0x3a9cc2.childUnitId,
        childType: _0x3a9cc2.childType,
      });
  }
  _getLoadedDescriptorState(_0x4054e6) {
    let _0x45a680 = this._modelService["getDescriptor"](
        _0x4054e6.hostUnitId,
        _0x4054e6.embedId,
      ),
      _0x22ca93 = _0x45a680 ?? _0x4054e6;
    if (!(!_0x22ca93.childUnitId || _0x22ca93.childType == null)) {
      if (
        this._univerInstanceService["getUnitType"](_0x22ca93.childUnitId) !==
        _0x22ca93.childType
      )
        throw new S("EMBED_MATERIALIZED_CHILD_UNIT_NOT_LOADED", {
          hostUnitId: _0x22ca93.hostUnitId,
          embedId: _0x22ca93.embedId,
          childUnitId: _0x22ca93.childUnitId,
          childType: _0x22ca93.childType,
        });
      return { descriptor: _0x22ca93, stored: _0x45a680 != null };
    }
  }
  _getMaterializeKey(_0x485108) {
    return JSON.stringify([
      _0x485108.hostUnitId,
      _0x485108.embedId,
      _0x485108.childType,
      z(_0x485108.source["ref"]),
    ]);
  }
  _getDescriptorOwner(_0x31d5db) {
    return { hostUnitId: _0x31d5db.hostUnitId, embedId: _0x31d5db.embedId };
  }
};
qa = H(
  [
    V(0, _0x2702ca(U)),
    V(1, _0x2702ca(Rn)),
    V(2, _0x2702ca(Ka)),
    V(3, _0x2702ca(Y)),
    V(4, _0x2f4124),
  ],
  qa,
);
const Ja = _0x186af1("embed.referenced-unit-catalog.service");
var Ya = class {
  constructor(_0x2a5400) {
    this._instanceService = _0x2a5400;
  }
  async listUnits(_0xe5f94) {
    return _0xe5f94 === _0x34bdbd.UNIVER_SHEET
      ? this._instanceService["getAllUnitsForType"](_0xe5f94).map(
          (_0x1f5491) => ({
            name: _0x1f5491.name,
            ref: Qa(_0x1f5491.getUnitId(), _0xe5f94),
          }),
        )
      : this._instanceService["getAllUnitsForType"](_0xe5f94).map(
          (_0x3d7cfe) => ({
            name: _0x3d7cfe.getSnapshot().name,
            ref: Qa(_0x3d7cfe.getUnitId(), _0xe5f94),
          }),
        );
  }
  async loadUnit(_0xe03e56) {
    if (_0xe03e56.ref["file"].kind !== P.SELF)
      throw Error("REFERENCED_UNIT_SOURCE_UNSUPPORTED");
    let _0x18b76a;
    try {
      _0x18b76a = B(_0xe03e56.ref["unit"].type);
    } catch {
      throw Error("REFERENCED_UNIT_SOURCE_UNSUPPORTED");
    }
    if (_0x18b76a === _0x34bdbd.UNIVER_SHEET) {
      let _0x268a7f = this._instanceService["getUnit"](
        _0xe03e56.ref["unit"].selector,
        _0x18b76a,
      );
      if (_0x268a7f) return _0x268a7f.getSnapshot();
    } else {
      if (_0x18b76a === _0x34bdbd.UNIVER_BASE) {
        let _0x560542 = this._instanceService["getUnit"](
          _0xe03e56.ref["unit"].selector,
          _0x18b76a,
        );
        if (_0x560542) return _0x560542.getSnapshot();
      } else throw Error("REFERENCED_UNIT_SOURCE_UNSUPPORTED");
    }
    throw Error("REFERENCED_UNIT_NOT_FOUND");
  }
};
let Xa = class extends _0x10b325 {
  constructor(_0x235b3b) {
    (super(),
      x(this, "_loadedSource", undefined),
      x(this, "_sources", []),
      x(this, "_unitOwners", new Map()),
      (this._loadedSource = new Ya(_0x235b3b)));
  }
  registerSource(_0x5358dd) {
    return (
      this._sources["push"](_0x5358dd),
      _0x50161f(() => {
        let _0x574075 = this._sources["indexOf"](_0x5358dd);
        _0x574075 >= 0 && this._sources["splice"](_0x574075, 1);
        for (let [_0x4f9478, _0x1669cc] of this._unitOwners)
          _0x1669cc === _0x5358dd && this._unitOwners["delete"](_0x4f9478);
      })
    );
  }
  async listUnits(_0x29e306) {
    let _0x136459 = [],
      _0x19b162 = new Set();
    await this._appendSourceUnits(
      this._loadedSource,
      _0x29e306,
      _0x136459,
      _0x19b162,
    );
    for (let _0x4268ab of this._sources)
      try {
        await this._appendSourceUnits(
          _0x4268ab,
          _0x29e306,
          _0x136459,
          _0x19b162,
        );
      } catch {}
    return _0x136459;
  }
  async loadUnit(_0x2a5cef) {
    let _0x531ff4 = this._unitOwners["get"](L(_0x2a5cef.ref));
    if (!_0x531ff4) throw Error("REFERENCED_UNIT_NOT_LISTED");
    return _0x531ff4.loadUnit(_0x2a5cef);
  }
  async _appendSourceUnits(_0x485604, _0x426049, _0x2acd19, _0x2728d6) {
    let _0x32218c = await _0x485604.listUnits(_0x426049);
    (_0x485604 !== this._loadedSource &&
      !this._sources["includes"](_0x485604)) ||
      _0x32218c.forEach((_0x3136b1) => {
        if (!Za(_0x3136b1, _0x426049)) return;
        let _0x5b0579 = L(_0x3136b1.ref);
        _0x2728d6.has(_0x5b0579) ||
          (_0x2728d6.add(_0x5b0579),
          this._unitOwners["set"](_0x5b0579, _0x485604),
          _0x2acd19.push(_0x3136b1));
      });
  }
};
Xa = H([V(0, _0x2f4124)], Xa);
function Za(_0x591f4a, _0x381595) {
  try {
    return B(_0x591f4a.ref["unit"].type) === _0x381595;
  } catch {
    return false;
  }
}
function Qa(_0x5728be, _0x592b57) {
  return {
    file: { kind: P.SELF },
    unit: { selector: _0x5728be, type: Ln(_0x592b57) },
  };
}
let $ = class extends _0xe7e457 {
  constructor(_0x3dc79d = xr, _0x2d3e25, _0x45048e, _0x2f9cbf) {
    (super(),
      (this._config = _0x3dc79d),
      (this._injector = _0x2d3e25),
      (this._commandService = _0x45048e),
      (this._configService = _0x2f9cbf));
    let { ..._0x3d9ea6 } = _0x563418({}, xr, this._config);
    this._configService["setConfig"]("embed.config", _0x3d9ea6);
  }
  onStarting() {
    (this._registerDependencies(),
      this._registerReferencedUnitSources(),
      this._flushPendingContributions());
    let _0x247834 = this._injector["get"](W);
    (_0x247834.list().length === 0 && _0x247834.registerMany(Un()),
      kr().forEach((_0x1e4e5b) => {
        _0x247834.getCapability(_0x1e4e5b) || _0x247834.register(_0x1e4e5b);
      }),
      la(this._injector),
      this._flushPendingContributions());
    let _0x4c818f = this._injector["get"](Ua);
    (this.disposeWithMe(
      _0x4c818f.registerUnitProvider(Da(this._injector["get"](va))),
    ),
      this.disposeWithMe(
        _0x4c818f.registerDataProvider(Oa(this._injector["get"](ya))),
      ),
      (this._config["resourceRefUnitProviderRegistrations"] ?? []).forEach(
        (_0x45f10b) =>
          this.disposeWithMe(_0x4c818f.registerUnitProvider(_0x45f10b)),
      ),
      (this._config["resourceRefDataProviderRegistrations"] ?? []).forEach(
        (_0x5ca924) =>
          this.disposeWithMe(_0x4c818f.registerDataProvider(_0x5ca924)),
      ));
    let _0x522fd4 = this._injector["get"](Q);
    (Ra().forEach((_0x342f01) => {
      _0x522fd4
        .list()
        .some((_0x58d5a8) => _0x58d5a8.unitType === _0x342f01.unitType) ||
        this.disposeWithMe(_0x522fd4.register(_0x342f01));
    }),
      this._flushPendingContributions(),
      _0x21a20a(this._injector, [
        [U],
        [ua],
        [K],
        [M],
        [q],
        [da],
        [Ua],
        [Ja],
        [Q],
        [Y],
        [Ka],
        [Rn],
        [qa],
        [va],
        [ya],
        [Jn],
        [G],
        [Cr],
      ]),
      [zn, Bn, yr, br, _r, vr, lr, ur, dr, fr, pr, mr].forEach((_0x55a481) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x55a481)),
      ));
  }
  _registerReferencedUnitSources() {
    let _0x36638b = this._injector["get"](Ja);
    (this.disposeWithMe(_0x36638b),
      (this._config["referencedUnitSources"] ?? []).forEach((_0x237028) => {
        this.disposeWithMe(_0x36638b.registerSource(_0x237028));
      }));
  }
  _registerDependencies() {
    [
      [U],
      [ua],
      [W],
      [K],
      [M],
      [q],
      [da],
      [fa],
      [Ua],
      [Ja, { useClass: Xa }],
      [Q],
      [Y, { useClass: Ga }],
      [Ka],
      [Rn],
      [qa],
      [va],
      [ya],
      [Jn],
      [qn],
      [G],
      [Cr],
    ].forEach((_0xaf1998) => this._injector["add"](_0xaf1998));
  }
  onReady() {
    (this._flushPendingContributions(),
      this._injector["has"](_0x9f6bd6) &&
        this.disposeWithMe(
          this._injector["get"](_0x9f6bd6).register(this._injector["get"](fa)),
        ));
  }
  _flushPendingContributions() {
    (Gn(this._injector), Zn(this._injector), Ba(this._injector));
  }
};
(x($, "pluginName", "UNIVER_EMBED_PLUGIN"),
  x($, "packageName", hr),
  x($, "version", gr),
  x($, "type", _0x34bdbd.UNIVER_UNKNOWN),
  ($ = H(
    [
      _0x33031c(_0x52b33d),
      V(1, _0x2702ca(_0x16cc1b)),
      V(2, _0xf66d63),
      V(3, _0x9c1dd4),
    ],
    $,
  )));
export {
  Qe as CREATE_EMBED_HOST_ANCHOR_MUTATION_ID,
  lr as CreateEmbedCommand,
  rt as DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY,
  nt as DEFAULT_EMBED_FLOAT_LAYOUT_POLICY,
  tt as DEFAULT_EMBED_TAB_LAYOUT_POLICY,
  et as EMBED_CHILD_CREATE_OPTIONS,
  xt as EMBED_SHEETS_FLOATING_COMPONENT_KEY,
  W as EmbedCapabilityRegistryService,
  G as EmbedCreationService,
  S as EmbedError,
  st as EmbedErrorCode,
  da as EmbedFocusOwnerService,
  fa as EmbedFormulaReferenceDataProvider,
  K as EmbedHostAdapterRegistryService,
  M as EmbedHostAnchorModelService,
  b as EmbedHostEntryEnum,
  U as EmbedModelService,
  Q as EmbedReferencedUnitApiResolverRegistryService,
  qa as EmbedReferencedUnitMaterializeService,
  Ua as EmbedResourceRefProviderRegistryService,
  Ka as EmbedUnitLeasePolicyService,
  Ja as IReferencedUnitCatalogService,
  Y as IReferencedUnitManagerService,
  $e as REMOVE_EMBED_HOST_ANCHOR_MUTATION_ID,
  y as REMOVE_EMBED_HOST_ANCHOR_RECORD_MUTATION_ID,
  P as RESOURCE_REF_FILE_KIND,
  Sr as ReferencedUnitDataType,
  dr as RemoveEmbedCommand,
  F as ResourceRefError,
  _n as ResourceRefErrorCode,
  v as SET_EMBED_HOST_ANCHOR_RECORD_MUTATION_ID,
  pr as SetEmbedBoundsCommand,
  zn as SetEmbedDescriptorMutation,
  fr as SetEmbedDisplayTargetCommand,
  mr as SetEmbedSheetPlacementCommand,
  Bn as SoftDeleteEmbedDescriptorMutation,
  $ as UniverEmbedPlugin,
  Ar as createBasesTableListBlockHostAdapterContribution,
  Wr as createBoardsFloatingObjectHostAdapterContribution,
  Wn as createDefaultEmbedSourceMeta,
  oi as createDocsCustomBlockHostAdapterContribution,
  kr as createProEmbedProductCapabilities,
  Ii as createSlidesFloatingObjectHostAdapterContribution,
  Ri as createSlidesPageListBlockHostAdapterContribution,
  B as fromResourceRefUnitType,
  Ci as getEmbedSheetsTabCustomData,
  In as getResourceRefInputUnitSelector,
  L as getResourceRefUnitKey,
  Cn as isResourceRefRangePart,
  wn as isResourceRefTablePart,
  I as normalizeResourceRefInput,
  Pn as normalizeResourceRefLocator,
  R as parseResourceRef,
  Xn as registerEmbedHostAdapterContributions,
  za as registerReferencedUnitApiResolvers,
  Ln as toResourceRefUnitType,
};
