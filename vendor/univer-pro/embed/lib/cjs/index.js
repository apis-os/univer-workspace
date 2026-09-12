Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs/sheets"),
  n = require("@univerjs/sheets-drawing"),
  r = require("@univerjs-pro/engine-formula"),
  i = require("@univerjs-pro/license"),
  a = require("@univerjs-pro/boards"),
  o = require("@univerjs-pro/slides"),
  s = require("@univerjs/drawing"),
  c = require("@univerjs-pro/bases"),
  l = require("@univerjs/docs"),
  u = require("rxjs");
const d = "embed.mutation.create-host-anchor",
  f = "embed.mutation.remove-host-anchor",
  p = "embed.mutation.set-host-anchor-record",
  m = "embed.mutation.remove-host-anchor-record",
  h = { makeCurrent: false, skipAutoRender: true, embeddedRender: true },
  g = {
    DocsCustomBlock: "docs-custom-block",
    SheetsFloatingObject: "sheets-floating-object",
    SheetsSheetTab: "sheets-sheet-tab",
    BasesTableListBlock: "bases-table-list-block",
    SlidesFloatingObject: "slides-floating-object",
    SlidesPageListBlock: "slides-page-list-block",
    BoardsFloatingObject: "boards-floating-object",
  },
  _ = {
    ribbon: "host",
    productToolbar: "child",
    contextMenu: "child",
    floatToolbar: "child",
    footer: "child",
    sidePanel: "child",
    floatingMenu: "hidden",
  },
  ee = {
    ribbon: "hidden",
    productToolbar: "child",
    contextMenu: "child",
    floatToolbar: "child",
    footer: "compact",
    sidePanel: "compact",
    floatingMenu: "child",
  },
  te = {
    ribbon: "hidden",
    productToolbar: "child",
    contextMenu: "child",
    floatToolbar: "child",
    footer: "compact",
    sidePanel: "compact",
    floatingMenu: "child",
  };
function ne(_0x74506) {
  "@babel/helpers - typeof";
  return (
    (ne =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5d83b2) {
            return typeof _0x5d83b2;
          }
        : function (_0x1164de) {
            return _0x1164de &&
              typeof Symbol == "function" &&
              _0x1164de.constructor === Symbol &&
              _0x1164de !== Symbol.prototype
              ? "symbol"
              : typeof _0x1164de;
          }),
    ne(_0x74506)
  );
}
function re(_0x281622, _0x40b745) {
  if (ne(_0x281622) != "object" || !_0x281622) return _0x281622;
  var _0x2718f8 = _0x281622[Symbol.toPrimitive];
  if (_0x2718f8 !== undefined) {
    var _0x327391 = _0x2718f8.call(_0x281622, _0x40b745 || "default");
    if (ne(_0x327391) != "object") return _0x327391;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x40b745 === "string" ? String : Number)(_0x281622);
}
function ie(_0x1b6582) {
  var _0x15716b = re(_0x1b6582, "string");
  return ne(_0x15716b) == "symbol" ? _0x15716b : _0x15716b + "";
}
function v(_0x56139f, _0x11b1c2, _0x41389d) {
  return (
    (_0x11b1c2 = ie(_0x11b1c2)) in _0x56139f
      ? Object.defineProperty(_0x56139f, _0x11b1c2, {
          value: _0x41389d,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x56139f[_0x11b1c2] = _0x41389d),
    _0x56139f
  );
}
let ae = (function (_0x34a187) {
  return (
    (_0x34a187.HostUnitNotFound = "EMBED_HOST_UNIT_NOT_FOUND"),
    (_0x34a187.CreateFailed = "EMBED_CREATE_FAILED"),
    (_0x34a187.CapabilityNotSupported = "EMBED_CAPABILITY_NOT_SUPPORTED"),
    (_0x34a187.HostContextInvalid = "EMBED_HOST_CONTEXT_INVALID"),
    (_0x34a187.SheetFloatingPlacementRequired =
      "EMBED_SHEET_FLOATING_PLACEMENT_REQUIRED"),
    (_0x34a187.DescriptorNotFound = "EMBED_DESCRIPTOR_NOT_FOUND"),
    (_0x34a187.DescriptorChildTypeRequired =
      "EMBED_DESCRIPTOR_CHILD_TYPE_REQUIRED"),
    (_0x34a187.DescriptorChildTypeMismatch =
      "EMBED_DESCRIPTOR_CHILD_TYPE_MISMATCH"),
    (_0x34a187.DescriptorDisplayTargetInvalid =
      "EMBED_DESCRIPTOR_DISPLAY_TARGET_INVALID"),
    (_0x34a187.ChildUnitAlreadyEmbedded = "EMBED_CHILD_UNIT_ALREADY_EMBEDDED"),
    (_0x34a187.CopyNotSupported = "EMBED_COPY_NOT_SUPPORTED"),
    (_0x34a187.MaterializedChildUnitNotLoaded =
      "EMBED_MATERIALIZED_CHILD_UNIT_NOT_LOADED"),
    (_0x34a187.MaterializedChildUnitRequired =
      "EMBED_MATERIALIZED_CHILD_UNIT_REQUIRED"),
    (_0x34a187.LocalRuntimeResourceRefUnsupported =
      "LOCAL_RUNTIME_RESOURCE_REF_UNSUPPORTED"),
    (_0x34a187.LocalRuntimeResourceRefUnitTypeMismatch =
      "LOCAL_RUNTIME_RESOURCE_REF_UNIT_TYPE_MISMATCH"),
    (_0x34a187.LocalRuntimeResourceRefUnitNotFound =
      "LOCAL_RUNTIME_RESOURCE_REF_UNIT_NOT_FOUND"),
    (_0x34a187.LocalRuntimeResourceRefDataSelectorUnsupported =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED"),
    (_0x34a187.LocalRuntimeResourceRefDataUnitTypeUnsupported =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_TYPE_UNSUPPORTED"),
    (_0x34a187.LocalRuntimeResourceRefDataUnitNotFound =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND"),
    (_0x34a187.LocalRuntimeResourceRefDataSheetNotFound =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_SHEET_NOT_FOUND"),
    (_0x34a187.LocalRuntimeResourceRefDataTableNotFound =
      "LOCAL_RUNTIME_RESOURCE_REF_DATA_TABLE_NOT_FOUND"),
    (_0x34a187.LocalRuntimeResourceRefRangeInvalid =
      "LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID"),
    _0x34a187
  );
})({});
var y = class extends Error {
  constructor(_0x2e34f1, _0x36bd01) {
    (super(_0x2e34f1),
      v(this, "code", undefined),
      v(this, "details", undefined),
      (this.name = "EmbedError"),
      (this.code = _0x2e34f1),
      (this.details = _0x36bd01));
  }
};
const oe = new Set(["componentKey", "interactionMode", "startIndex"]);
function se(_0x4dc52e) {
  let { hostContext: _0x4ad87e, maxStartIndex: _0x58872f } = _0x4dc52e;
  if (_0x4ad87e === undefined) return;
  (!_0x4ad87e || typeof _0x4ad87e != "object" || Array.isArray(_0x4ad87e)) &&
    ce(_0x4dc52e, "context must be an object");
  let _0x322534 = Object.keys(_0x4ad87e).filter(
    (_0x367580) => !oe.has(_0x367580),
  );
  _0x322534.length > 0 &&
    ce(_0x4dc52e, "context contains unknown fields", {
      unknownKeys: _0x322534,
    });
  let {
    componentKey: _0x668032,
    interactionMode: _0x5f930d,
    startIndex: _0xd27997,
  } = _0x4ad87e;
  (_0x668032 !== undefined &&
    typeof _0x668032 != "string" &&
    ce(_0x4dc52e, "componentKey must be a string", {
      key: "componentKey",
      value: _0x668032,
    }),
    _0x5f930d !== undefined &&
      _0x5f930d !== "block" &&
      _0x5f930d !== "inline" &&
      ce(
        _0x4dc52e,
        "interactionMode\x20must\x20be\x20\x22block\x22\x20or\x20\x22inline\x22",
        { key: "interactionMode", value: _0x5f930d },
      ),
    _0xd27997 !== undefined &&
      (typeof _0xd27997 != "number" ||
        !Number.isFinite(_0xd27997) ||
        !Number.isInteger(_0xd27997) ||
        _0xd27997 < 0 ||
        (_0x58872f !== undefined && _0xd27997 > _0x58872f)) &&
      ce(
        _0x4dc52e,
        "startIndex must be " +
          (_0x58872f === undefined
            ? "a non-negative integer"
            : "an\x20integer\x20between\x200\x20and\x20" + _0x58872f),
        {
          key: "startIndex",
          value: _0xd27997,
          ...(_0x58872f === undefined ? {} : { maxStartIndex: _0x58872f }),
        },
      ));
}
function ce(_0x32e1a9, _0x512d78, _0x3718dc = {}) {
  throw new y("EMBED_HOST_CONTEXT_INVALID", {
    hostUnitId: _0x32e1a9.hostUnitId,
    entry: _0x32e1a9.entry,
    reason: _0x512d78,
    ..._0x3718dc,
  });
}
const le = {
  [g.SheetsSheetTab]: new Set(["sheetIndex", "sheetName"]),
  [g.SheetsFloatingObject]: new Set([
    "subUnitId",
    "placement",
    "componentKey",
    "allowTransform",
    "resizeBehavior",
    "aspectRatio",
    "runtimeMountMode",
  ]),
  [g.BasesTableListBlock]: new Set(["tableIndex", "tableName"]),
  [g.SlidesPageListBlock]: new Set(["pageIndex", "pageName"]),
  [g.SlidesFloatingObject]: new Set([
    "subUnitId",
    "left",
    "top",
    "width",
    "height",
  ]),
  [g.BoardsFloatingObject]: new Set([
    "subUnitId",
    "left",
    "top",
    "width",
    "height",
  ]),
};
function b(_0x4f4c4d) {
  if (_0x4f4c4d.entry === g.DocsCustomBlock) {
    se(_0x4f4c4d);
    return;
  }
  let _0x18c847 = le[_0x4f4c4d.entry];
  if (!_0x18c847 || _0x4f4c4d.hostContext === undefined) return;
  (!_0x4f4c4d.hostContext ||
    typeof _0x4f4c4d.hostContext != "object" ||
    Array.isArray(_0x4f4c4d.hostContext)) &&
    T(_0x4f4c4d, "context must be an object");
  let _0x2f6d79 = _0x4f4c4d.hostContext,
    _0x4e1813 = Object.keys(_0x2f6d79).filter(
      (_0x51feb6) => !_0x18c847.has(_0x51feb6),
    );
  switch (
    (_0x4e1813.length > 0 &&
      T(_0x4f4c4d, "context contains unknown fields", {
        unknownKeys: _0x4e1813,
      }),
    _0x4f4c4d.entry)
  ) {
    case g.SheetsSheetTab:
      (ue(_0x4f4c4d, _0x2f6d79, "sheetIndex"),
        x(_0x4f4c4d, _0x2f6d79, "sheetName"));
      return;
    case g.SheetsFloatingObject:
      (x(_0x4f4c4d, _0x2f6d79, "subUnitId"),
        x(_0x4f4c4d, _0x2f6d79, "componentKey"),
        de(_0x4f4c4d, _0x2f6d79, "allowTransform"),
        me(_0x4f4c4d, _0x2f6d79, "resizeBehavior", [
          "free",
          "aspect-ratio",
          "height-auto",
          "disabled",
        ]),
        pe(_0x4f4c4d, _0x2f6d79, "aspectRatio"),
        me(_0x4f4c4d, _0x2f6d79, "runtimeMountMode", ["always", "stage2"]),
        _0x2f6d79.placement !== undefined &&
          he(_0x4f4c4d, _0x2f6d79.placement));
      return;
    case g.BasesTableListBlock:
      (ue(_0x4f4c4d, _0x2f6d79, "tableIndex"),
        x(_0x4f4c4d, _0x2f6d79, "tableName"));
      return;
    case g.SlidesPageListBlock:
      (ue(_0x4f4c4d, _0x2f6d79, "pageIndex"),
        x(_0x4f4c4d, _0x2f6d79, "pageName"));
      return;
    case g.SlidesFloatingObject:
    case g.BoardsFloatingObject:
      (x(_0x4f4c4d, _0x2f6d79, "subUnitId"),
        fe(_0x4f4c4d, _0x2f6d79, "left"),
        fe(_0x4f4c4d, _0x2f6d79, "top"),
        pe(_0x4f4c4d, _0x2f6d79, "width"),
        pe(_0x4f4c4d, _0x2f6d79, "height"));
  }
}
function ue(_0x55a204, _0x56f11e, _0x5477e9) {
  let _0x3745bb = _0x56f11e[_0x5477e9];
  _0x3745bb !== undefined &&
    (typeof _0x3745bb != "number" ||
      !Number.isFinite(_0x3745bb) ||
      !Number.isInteger(_0x3745bb) ||
      _0x3745bb < 0 ||
      (_0x55a204.maxIndex !== undefined && _0x3745bb > _0x55a204.maxIndex)) &&
    T(
      _0x55a204,
      _0x5477e9 +
        "\x20must\x20be\x20" +
        (_0x55a204.maxIndex === undefined
          ? "a non-negative integer"
          : "an integer between 0 and " + _0x55a204.maxIndex),
      {
        key: _0x5477e9,
        value: _0x3745bb,
        ...(_0x55a204.maxIndex === undefined
          ? {}
          : { maxIndex: _0x55a204.maxIndex }),
      },
    );
}
function x(_0x4e3a7b, _0x32e726, _0x450d77) {
  let _0x2284db = _0x32e726[_0x450d77];
  _0x2284db !== undefined &&
    typeof _0x2284db != "string" &&
    T(_0x4e3a7b, _0x450d77 + " must be a string", {
      key: _0x450d77,
      value: _0x2284db,
    });
}
function de(_0xd6a5ad, _0x5487a7, _0x1c04a7) {
  let _0xf38ace = _0x5487a7[_0x1c04a7];
  _0xf38ace !== undefined &&
    typeof _0xf38ace != "boolean" &&
    T(_0xd6a5ad, _0x1c04a7 + " must be a boolean", {
      key: _0x1c04a7,
      value: _0xf38ace,
    });
}
function fe(_0x26bd7e, _0x317123, _0x5780de) {
  let _0x535206 = _0x317123[_0x5780de];
  _0x535206 !== undefined &&
    (typeof _0x535206 != "number" || !Number.isFinite(_0x535206)) &&
    T(_0x26bd7e, _0x5780de + " must be a finite number", {
      key: _0x5780de,
      value: _0x535206,
    });
}
function pe(_0x367266, _0x114be4, _0x2f1229) {
  let _0x2f4b37 = _0x114be4[_0x2f1229];
  _0x2f4b37 !== undefined &&
    (typeof _0x2f4b37 != "number" ||
      !Number.isFinite(_0x2f4b37) ||
      _0x2f4b37 <= 0) &&
    T(_0x367266, _0x2f1229 + " must be a positive finite number", {
      key: _0x2f1229,
      value: _0x2f4b37,
    });
}
function me(_0x4a8713, _0x57d593, _0x1ad4ca, _0x452d3d) {
  let _0x14454f = _0x57d593[_0x1ad4ca];
  _0x14454f !== undefined &&
    !_0x452d3d.includes(_0x14454f) &&
    T(_0x4a8713, _0x1ad4ca + " has an unsupported value", {
      key: _0x1ad4ca,
      value: _0x14454f,
      allowed: _0x452d3d,
    });
}
function he(_0x18c384, _0x11de3c) {
  let _0x122959 = ve(_0x18c384, _0x11de3c, "placement"),
    _0x339526 = _0x122959.kind;
  if (
    (_0x339526 !== "0" &&
      _0x339526 !== "1" &&
      _0x339526 !== "2" &&
      T(_0x18c384, "placement.kind has an unsupported value", {
        key: "placement.kind",
        value: _0x339526,
      }),
    "bounds" in _0x122959)
  ) {
    (w(_0x18c384, _0x122959, ["kind", "bounds"], "placement"),
      ge(_0x18c384, _0x122959.bounds, "placement.bounds"));
    return;
  }
  switch (_0x339526) {
    case "0":
      (w(
        _0x18c384,
        _0x122959,
        ["kind", "from", "width", "height"],
        "placement",
      ),
        _e(_0x18c384, _0x122959.from, "placement.from"),
        C(_0x18c384, _0x122959, "width", "placement.width"),
        C(_0x18c384, _0x122959, "height", "placement.height"));
      return;
    case "1":
      (w(_0x18c384, _0x122959, ["kind", "from", "to"], "placement"),
        _e(_0x18c384, _0x122959.from, "placement.from"),
        _e(_0x18c384, _0x122959.to, "placement.to"));
      return;
    case "2":
      (w(
        _0x18c384,
        _0x122959,
        ["kind", "left", "top", "width", "height"],
        "placement",
      ),
        S(_0x18c384, _0x122959, "left", "placement.left"),
        S(_0x18c384, _0x122959, "top", "placement.top"),
        C(_0x18c384, _0x122959, "width", "placement.width"),
        C(_0x18c384, _0x122959, "height", "placement.height"));
  }
}
function ge(_0x1e7302, _0x5faf98, _0x2b5f45) {
  let _0x49ec13 = ve(_0x1e7302, _0x5faf98, _0x2b5f45);
  (w(_0x1e7302, _0x49ec13, ["left", "top", "width", "height"], _0x2b5f45),
    S(_0x1e7302, _0x49ec13, "left", _0x2b5f45 + ".left"),
    S(_0x1e7302, _0x49ec13, "top", _0x2b5f45 + ".top"),
    C(_0x1e7302, _0x49ec13, "width", _0x2b5f45 + ".width"),
    C(_0x1e7302, _0x49ec13, "height", _0x2b5f45 + ".height"));
}
function _e(_0x100efe, _0x568f6a, _0x4343c1) {
  let _0x442403 = ve(_0x100efe, _0x568f6a, _0x4343c1);
  w(
    _0x100efe,
    _0x442403,
    ["row", "column", "rowOffset", "columnOffset"],
    _0x4343c1,
  );
  for (let _0x222282 of ["row", "column"]) {
    let _0x5d2dad = _0x442403[_0x222282];
    (typeof _0x5d2dad != "number" ||
      !Number.isInteger(_0x5d2dad) ||
      _0x5d2dad < 0) &&
      T(
        _0x100efe,
        _0x4343c1 +
          "." +
          _0x222282 +
          "\x20must\x20be\x20a\x20non-negative\x20integer",
        { key: _0x4343c1 + "." + _0x222282, value: _0x5d2dad },
      );
  }
  (S(_0x100efe, _0x442403, "rowOffset", _0x4343c1 + ".rowOffset"),
    S(_0x100efe, _0x442403, "columnOffset", _0x4343c1 + ".columnOffset"));
}
function S(_0x4163a9, _0x506395, _0x52ed31, _0x101087) {
  let _0x10875f = _0x506395[_0x52ed31];
  (typeof _0x10875f != "number" || !Number.isFinite(_0x10875f)) &&
    T(_0x4163a9, _0x101087 + "\x20must\x20be\x20a\x20finite\x20number", {
      key: _0x101087,
      value: _0x10875f,
    });
}
function C(_0x1f261d, _0x401f63, _0x4c1c8c, _0xcb406a) {
  let _0x3e15da = _0x401f63[_0x4c1c8c];
  (typeof _0x3e15da != "number" ||
    !Number.isFinite(_0x3e15da) ||
    _0x3e15da <= 0) &&
    T(_0x1f261d, _0xcb406a + " must be a positive finite number", {
      key: _0xcb406a,
      value: _0x3e15da,
    });
}
function ve(_0x3c7329, _0x5cc5a6, _0x2cd2ed) {
  return (
    (!_0x5cc5a6 || typeof _0x5cc5a6 != "object" || Array.isArray(_0x5cc5a6)) &&
      T(_0x3c7329, _0x2cd2ed + " must be an object", {
        key: _0x2cd2ed,
        value: _0x5cc5a6,
      }),
    _0x5cc5a6
  );
}
function w(_0x12e7ae, _0x4c004c, _0x185042, _0x48ef63) {
  let _0x261d59 = Object.keys(_0x4c004c).filter(
    (_0x4b813d) => !_0x185042.includes(_0x4b813d),
  );
  _0x261d59.length > 0 &&
    T(_0x12e7ae, _0x48ef63 + " contains unknown fields", {
      key: _0x48ef63,
      unknownKeys: _0x261d59,
    });
}
function T(_0x6fd7c2, _0x282fe6, _0x823d40 = {}) {
  throw new y("EMBED_HOST_CONTEXT_INVALID", {
    hostUnitId: _0x6fd7c2.hostUnitId,
    entry: _0x6fd7c2.entry,
    reason: _0x282fe6,
    ..._0x823d40,
  });
}
function ye(_0x2585c0) {
  return {
    version: 1,
    embedId: _0x2585c0.embedId,
    hostType: e.UniverInstanceType["UNIVER_SHEET"],
    childType: _0x2585c0.childType,
    hostUnitId: _0x2585c0.hostUnitId,
    hostAnchorId: _0x2585c0.hostAnchorId,
    runtimeMountMode: _0x2585c0.runtimeMountMode ?? "stage2",
    resizeBehavior: _0x2585c0.resizeBehavior,
    aspectRatio: _0x2585c0.aspectRatio,
    disablePopup: true,
  };
}
function be(_0x5e8d3c) {
  let _0x3f3206 = _0x5e8d3c.left ?? 80,
    _0x311081 = _0x5e8d3c.top ?? 80,
    { width: _0x27cbf, height: _0x4d6fc9 } = xe({
      width: _0x5e8d3c.width,
      height: _0x5e8d3c.height,
      resizeBehavior: _0x5e8d3c.resizeBehavior,
      aspectRatio: _0x5e8d3c.aspectRatio,
    }),
    _0x5329e8 =
      _0x5e8d3c.sheetTransform ?? Se(_0x3f3206, _0x311081, _0x27cbf, _0x4d6fc9);
  return {
    unitId: _0x5e8d3c.hostUnitId,
    subUnitId: _0x5e8d3c.hostSubUnitId,
    drawingId: _0x5e8d3c.hostAnchorId,
    drawingType: e.DrawingTypeEnum["DRAWING_BLOCK"],
    componentKey: _0x5e8d3c.componentKey ?? "UniverEmbedSheetsFloatingObject",
    sheetTransform: _0x5329e8,
    axisAlignSheetTransform: _0x5329e8,
    transform: {
      left: _0x3f3206,
      top: _0x311081,
      width: _0x27cbf,
      height: _0x4d6fc9,
    },
    data: ye(_0x5e8d3c),
    allowTransform: _0x5e8d3c.allowTransform ?? true,
  };
}
function xe(_0xb14be1) {
  let _0x3cc3de = Ce(_0xb14be1.width) ? _0xb14be1.width : 560,
    _0x3528f6 = Ce(_0xb14be1.height) ? _0xb14be1.height : 360,
    _0xbfc4aa = Ce(_0xb14be1.aspectRatio) ? _0xb14be1.aspectRatio : undefined;
  return _0xb14be1.resizeBehavior !== "aspect-ratio" || !_0xbfc4aa
    ? { width: _0x3cc3de, height: _0x3528f6 }
    : Ce(_0xb14be1.width)
      ? { width: _0x3cc3de, height: Math.max(1, _0x3cc3de / _0xbfc4aa) }
      : Ce(_0xb14be1.height)
        ? { width: Math.max(1, _0x3528f6 * _0xbfc4aa), height: _0x3528f6 }
        : { width: _0x3cc3de, height: Math.max(1, _0x3cc3de / _0xbfc4aa) };
}
function Se(_0x578ca1, _0x30afdd, _0x48fe0b, _0x5ef3e) {
  return {
    from: { column: 0, columnOffset: _0x578ca1, row: 0, rowOffset: _0x30afdd },
    to: {
      column: 0,
      columnOffset: _0x578ca1 + _0x48fe0b,
      row: 0,
      rowOffset: _0x30afdd + _0x5ef3e,
    },
  };
}
function Ce(_0x17ecda) {
  return (
    typeof _0x17ecda == "number" && Number.isFinite(_0x17ecda) && _0x17ecda > 0
  );
}
function we(_0x397ea2, _0x4d33eb, _0x5c7177, _0x1b5bf5) {
  return {
    hostType: e.UniverInstanceType["UNIVER_SHEET"],
    entry: g.SheetsFloatingObject,
    createAnchorPlan: (_0x495547) =>
      $e(
        Ae(_0x495547, Xe(_0x4d33eb), Qe(_0x1b5bf5)),
        "EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE",
      ),
    restoreAnchor: (_0x35b6a4) =>
      et(
        Ne(_0x35b6a4, Xe(_0x4d33eb), Ze(_0x5c7177), Qe(_0x1b5bf5)),
        "EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE",
      ),
    removeAnchorPlan: (_0x346f36) => {
      let _0x4aa76e =
        (_0x397ea2 == null
          ? undefined
          : _0x397ea2.getAnchor(
              _0x346f36.hostUnitId,
              _0x346f36.hostAnchorId,
            )) ?? Me(_0x346f36);
      return (
        je(_0x346f36, _0x4aa76e, Xe(_0x4d33eb)) ?? Ie(_0x346f36, _0x4aa76e)
      );
    },
    readContext: (_0xee8d2d) => Ee(_0xee8d2d, _0x397ea2, Xe(_0x4d33eb)),
    createBoundsUpdatePlan: (_0x474adc) => {
      let _0x25723f = ke(Xe(_0x4d33eb), Qe(_0x1b5bf5)),
        _0x36cb8e = Ee(_0x474adc, _0x397ea2, _0x25723f.sheetDrawingService);
      if (!_0x36cb8e.resolved)
        throw Error("EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE");
      return Te(
        _0x474adc,
        { kind: _0x36cb8e.placement["kind"], bounds: _0x474adc.bounds },
        _0x397ea2,
        _0x25723f.sheetDrawingService,
        _0x25723f.sheetSkeletonService,
      );
    },
  };
}
function Te(_0x34c929, _0x256ec0, _0x4ec305, _0xd828da, _0x2687d3) {
  var _0x293c4e, _0x523f65, _0x3eb451, _0x2cc4fb, _0x2c27d4;
  let _0xecab03 = De(
    _0x34c929.hostUnitId,
    _0x34c929.hostAnchorId,
    _0x4ec305 == null ||
      (_0x293c4e = _0x4ec305.getAnchor(
        _0x34c929.hostUnitId,
        _0x34c929.hostAnchorId,
      )) == null
      ? undefined
      : _0x293c4e.hostContext,
    _0xd828da,
  );
  if (!_0xecab03) throw Error("EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE");
  let _0x5682bc =
      _0x256ec0.kind === n.SheetDrawingAnchorType["None"]
        ? undefined
        : _0x2687d3.ensureSkeleton(_0x34c929.hostUnitId, _0xecab03.subUnitId),
    _0x14b188 = (0, n.applySheetDrawingPlacement)(
      _0xecab03.drawing,
      _0x256ec0,
      _0x5682bc,
    ),
    _0x4fa086 = _0xd828da.getBatchUpdateOp([_0x14b188]),
    _0x1ed9fb =
      _0x4ec305 == null
        ? undefined
        : _0x4ec305.getAnchor(_0x34c929.hostUnitId, _0x34c929.hostAnchorId),
    _0x22b892 = {
      ...(_0x1ed9fb ??
        Me({
          ..._0x34c929,
          requestedAnchorId: _0x34c929.hostAnchorId,
          hostContext: { subUnitId: _0xecab03.subUnitId },
        })),
      hostContext: {
        ...(_0x1ed9fb == null ? undefined : _0x1ed9fb.hostContext),
        subUnitId: _0xecab03.subUnitId,
        left:
          (_0x523f65 = _0x14b188.transform) == null
            ? undefined
            : _0x523f65.left,
        top:
          (_0x3eb451 = _0x14b188.transform) == null ? undefined : _0x3eb451.top,
        width:
          (_0x2cc4fb = _0x14b188.transform) == null
            ? undefined
            : _0x2cc4fb.width,
        height:
          (_0x2c27d4 = _0x14b188.transform) == null
            ? undefined
            : _0x2c27d4.height,
        placement: (0, n.getSheetDrawingPlacement)(_0x14b188),
      },
      lifecycle: "active",
    };
  return {
    redoMutations: [
      O(_0x4fa086, n.DrawingApplyType["UPDATE"], "redo"),
      { id: p, params: { record: _0x22b892 } },
    ],
    undoMutations: [
      _0x1ed9fb
        ? { id: p, params: { record: _0x1ed9fb } }
        : {
            id: m,
            params: {
              hostUnitId: _0x34c929.hostUnitId,
              hostAnchorId: _0x34c929.hostAnchorId,
            },
          },
      O(_0x4fa086, n.DrawingApplyType["UPDATE"], "undo"),
    ],
  };
}
function Ee(_0x48a882, _0x460f51, _0x41e702) {
  let _0x2197ef =
      _0x460f51 == null
        ? undefined
        : _0x460f51.getAnchor(_0x48a882.hostUnitId, _0x48a882.hostAnchorId),
    _0x8fa862 = _0x41e702
      ? De(
          _0x48a882.hostUnitId,
          _0x48a882.hostAnchorId,
          _0x2197ef == null ? undefined : _0x2197ef.hostContext,
          _0x41e702,
        )
      : undefined,
    _0x28fbfe = _0x8fa862 ? Oe(_0x8fa862.drawing) : undefined;
  return !_0x8fa862 || !_0x28fbfe
    ? { resolved: false, entry: g.SheetsFloatingObject }
    : {
        resolved: true,
        entry: g.SheetsFloatingObject,
        subUnitId: _0x8fa862.subUnitId,
        bounds: _0x28fbfe,
        placement: (0, n.getSheetDrawingPlacement)(_0x8fa862.drawing),
      };
}
function De(_0x489741, _0x1d31b2, _0x2e8932, _0x52abff) {
  let _0x2ba2b1 = Le(_0x2e8932);
  if (_0x2ba2b1) {
    let _0x17106b = _0x52abff.getDrawingByParam({
      unitId: _0x489741,
      subUnitId: _0x2ba2b1,
      drawingId: _0x1d31b2,
    });
    if (_0x17106b) return { subUnitId: _0x2ba2b1, drawing: _0x17106b };
  }
  for (let [_0x5c5316, _0x29aa27] of Object.entries(
    _0x52abff.getDrawingDataForUnit(_0x489741),
  )) {
    var _0x37662e;
    let _0x582918 =
      (_0x37662e = _0x29aa27.data) == null ? undefined : _0x37662e[_0x1d31b2];
    if (_0x582918) return { subUnitId: _0x5c5316, drawing: _0x582918 };
  }
}
function Oe(_0x16d96e) {
  let {
    left: _0x2e6c01,
    top: _0xb6f3fe,
    width: _0x340004,
    height: _0x3eec74,
  } = _0x16d96e.transform ?? {};
  if (
    [_0x2e6c01, _0xb6f3fe, _0x340004, _0x3eec74].every(
      (_0x3296f1) => typeof _0x3296f1 == "number" && Number.isFinite(_0x3296f1),
    ) &&
    !(
      _0x340004 == null ||
      _0x3eec74 == null ||
      _0x340004 <= 0 ||
      _0x3eec74 <= 0 ||
      _0x2e6c01 == null ||
      _0xb6f3fe == null
    )
  )
    return {
      left: _0x2e6c01,
      top: _0xb6f3fe,
      width: _0x340004,
      height: _0x3eec74,
    };
}
function ke(_0x3a3a53, _0x4c7081) {
  if (!_0x3a3a53 || !_0x4c7081)
    throw Error("EMBED_SHEETS_FLOATING_ANCHOR_UNAVAILABLE");
  return { sheetDrawingService: _0x3a3a53, sheetSkeletonService: _0x4c7081 };
}
function Ae(_0x584e78, _0xde8eb2, _0x350070) {
  b({
    hostUnitId: _0x584e78.hostUnitId,
    entry: _0x584e78.entry,
    hostContext: _0x584e78.hostContext,
  });
  let _0x151d5a = Le(_0x584e78.hostContext);
  if (!_0xde8eb2 || !_0x151d5a) return;
  let _0x18818a = Me(_0x584e78),
    _0x9277a2 = Pe(_0x584e78, _0x18818a, _0x151d5a, _0x350070);
  if (!_0x9277a2) return;
  let _0x2dc9c0 = _0xde8eb2.getBatchAddOp([_0x9277a2]),
    _0x5ded38 = {
      unitId: _0x18818a.hostUnitId,
      subUnitId: _0x151d5a,
      drawingId: _0x18818a.hostAnchorId,
    };
  return {
    hostAnchorId: _0x18818a.hostAnchorId,
    redoMutations: [
      O(_0x2dc9c0, n.DrawingApplyType["INSERT"], "redo"),
      { id: p, params: { record: _0x18818a } },
    ],
    undoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x18818a.hostUnitId,
          hostAnchorId: _0x18818a.hostAnchorId,
        },
      },
      O(
        { ..._0x2dc9c0, objects: [_0x5ded38] },
        n.DrawingApplyType["REMOVE"],
        "undo",
      ),
    ],
  };
}
function je(_0xf5b147, _0x321077, _0x298527) {
  let _0x17180d = Le(_0x321077.hostContext);
  if (!_0x298527 || !_0x17180d) return;
  let _0x4793b2 = _0x298527.getBatchRemoveOp([
    {
      unitId: _0xf5b147.hostUnitId,
      subUnitId: _0x17180d,
      drawingId: _0xf5b147.hostAnchorId,
    },
  ]);
  return {
    redoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0xf5b147.hostUnitId,
          hostAnchorId: _0xf5b147.hostAnchorId,
        },
      },
      O(_0x4793b2, n.DrawingApplyType["REMOVE"], "redo"),
    ],
    undoMutations: [
      O(_0x4793b2, n.DrawingApplyType["INSERT"], "undo"),
      { id: p, params: { record: { ..._0x321077, lifecycle: "active" } } },
    ],
  };
}
function Me(_0x3e2f26) {
  return Fe(
    { ..._0x3e2f26, hostContext: tt(_0x3e2f26) },
    g.SheetsFloatingObject,
    "sheets-floating",
  );
}
function Ne(_0x2ff04d, _0x1a9ed6, _0x3e6ad5, _0x528cdd) {
  var _0x441424;
  let _0x22fe0e = Le(_0x2ff04d.hostContext);
  if (!_0x1a9ed6 || !_0x3e6ad5 || !_0x22fe0e) return;
  let _0x2e73e0 = Me({
      ..._0x2ff04d,
      requestedAnchorId: _0x2ff04d.hostAnchorId,
    }),
    _0x3ef097 = Pe(_0x2ff04d, _0x2e73e0, _0x22fe0e, _0x528cdd);
  if (!_0x3ef097) return;
  let _0x1ff154 = {
    unitId: _0x2e73e0.hostUnitId,
    subUnitId: _0x22fe0e,
    drawingId: _0x2e73e0.hostAnchorId,
  };
  if (!(
    (_0x441424 = _0x1a9ed6.getDrawingData(_0x2e73e0.hostUnitId, _0x22fe0e)) !=
      null && _0x441424[_0x2e73e0.hostAnchorId]
  )) {
    let _0x25cbea = _0x1a9ed6.getBatchAddOp([_0x3ef097]);
    (_0x3e6ad5.applyJson1(_0x2e73e0.hostUnitId, _0x22fe0e, _0x25cbea.redo),
      _0x1a9ed6.applyJson1(_0x2e73e0.hostUnitId, _0x22fe0e, _0x25cbea.redo),
      _0x3e6ad5.addNotification([_0x1ff154]),
      _0x1a9ed6.addNotification([_0x1ff154]));
  }
  return _0x2e73e0;
}
function Pe(_0x49fec3, _0x4d55cc, _0x3ae3ab, _0x205d70) {
  var _0x74ddee, _0x227e6c;
  let _0x4381b4 = be({
    embedId: _0x4d55cc.embedId,
    childType:
      (_0x74ddee = _0x49fec3.descriptor) == null
        ? undefined
        : _0x74ddee.childType,
    hostUnitId: _0x4d55cc.hostUnitId,
    hostSubUnitId: _0x3ae3ab,
    hostAnchorId: _0x4d55cc.hostAnchorId,
    componentKey: Re(_0x4d55cc.hostContext, "componentKey") ?? undefined,
    left: E(_0x4d55cc.hostContext, "left"),
    top: E(_0x4d55cc.hostContext, "top"),
    width: E(_0x4d55cc.hostContext, "width"),
    height: E(_0x4d55cc.hostContext, "height"),
    sheetTransform: Be(_0x4d55cc.hostContext),
    allowTransform: ze(_0x4d55cc.hostContext, "allowTransform"),
    resizeBehavior: nt(_0x4d55cc.hostContext),
    aspectRatio:
      E(_0x4d55cc.hostContext, "aspectRatio") ??
      (((_0x227e6c = _0x49fec3.descriptor) == null
        ? undefined
        : _0x227e6c.childType) === e.UniverInstanceType["UNIVER_SLIDE"]
        ? 16 / 9
        : undefined),
    runtimeMountMode: rt(_0x4d55cc.hostContext),
  });
  _0x205d70 == null ||
    _0x205d70.ensureSkeleton(_0x4d55cc.hostUnitId, _0x3ae3ab);
  let _0x23614f =
    _0x205d70 == null
      ? undefined
      : _0x205d70.getSkeletonParam(_0x4d55cc.hostUnitId, _0x3ae3ab);
  if (!_0x23614f) return;
  let _0x4c3bdf = Ve(_0x4d55cc.hostContext);
  if (_0x4c3bdf)
    return (0, n.applySheetDrawingPlacement)(
      _0x4381b4,
      _0x4c3bdf,
      _0x23614f.skeleton,
    );
  let _0x5e7d9 = Be(_0x4d55cc.hostContext)
    ? undefined
    : He(_0x4d55cc.hostContext);
  if (_0x5e7d9)
    return (0, n.applySheetDrawingPlacement)(
      _0x4381b4,
      { kind: n.SheetDrawingAnchorType["Position"], bounds: _0x5e7d9 },
      _0x23614f.skeleton,
    );
  let _0x7801b7 = He(_0x4381b4.transform);
  if (_0x7801b7)
    return (0, n.applySheetDrawingPlacement)(
      _0x4381b4,
      { kind: n.SheetDrawingAnchorType["Position"], bounds: _0x7801b7 },
      _0x23614f.skeleton,
    );
}
function Fe(_0x4d86a6, _0x1a036e, _0xc27ead) {
  return {
    hostAnchorId:
      _0x4d86a6.requestedAnchorId ?? _0xc27ead + ":" + _0x4d86a6.embedId,
    embedId: _0x4d86a6.embedId,
    hostUnitId: _0x4d86a6.hostUnitId,
    hostType: _0x4d86a6.hostType,
    entry: _0x4d86a6.entry,
    kind: _0x1a036e,
    hostContext: _0x4d86a6.hostContext,
    lifecycle: "active",
  };
}
function Ie(_0x47a922, _0x4dbda4) {
  return {
    redoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x47a922.hostUnitId,
          hostAnchorId: _0x47a922.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      { id: p, params: { record: { ..._0x4dbda4, lifecycle: "active" } } },
    ],
  };
}
function Le(_0x3ea230) {
  return typeof (_0x3ea230 == null ? undefined : _0x3ea230.subUnitId) ==
    "string"
    ? _0x3ea230.subUnitId
    : undefined;
}
function E(_0x198f92, _0x5dc26e) {
  return typeof (_0x198f92 == null ? undefined : _0x198f92[_0x5dc26e]) ==
    "number"
    ? _0x198f92[_0x5dc26e]
    : undefined;
}
function Re(_0x40a71e, _0x2a4594) {
  return typeof (_0x40a71e == null ? undefined : _0x40a71e[_0x2a4594]) ==
    "string"
    ? _0x40a71e[_0x2a4594]
    : undefined;
}
function ze(_0x20fd5f, _0x368bb1) {
  return typeof (_0x20fd5f == null ? undefined : _0x20fd5f[_0x368bb1]) ==
    "boolean"
    ? _0x20fd5f[_0x368bb1]
    : undefined;
}
function Be(_0x11b0d3) {
  let _0x1c94b0 = qe(_0x11b0d3 == null ? undefined : _0x11b0d3.sheetTransform),
    _0x449c62 = Ke(_0x1c94b0 == null ? undefined : _0x1c94b0.from),
    _0x4d044c = Ke(_0x1c94b0 == null ? undefined : _0x1c94b0.to);
  if (!(!_0x449c62 || !_0x4d044c)) return { from: _0x449c62, to: _0x4d044c };
}
function Ve(_0x721e) {
  let _0x1a524c = qe(_0x721e == null ? undefined : _0x721e.placement);
  if (!_0x1a524c) return;
  let _0x50e340 = _0x1a524c == null ? undefined : _0x1a524c.kind;
  if (
    _0x50e340 !== n.SheetDrawingAnchorType["Position"] &&
    _0x50e340 !== n.SheetDrawingAnchorType["Both"] &&
    _0x50e340 !== n.SheetDrawingAnchorType["None"]
  )
    return;
  let _0x1c56fa = He(_0x1a524c.bounds);
  if (_0x1c56fa) return { kind: _0x50e340, bounds: _0x1c56fa };
  switch (_0x50e340) {
    case n.SheetDrawingAnchorType["None"]:
      return Ue(_0x1a524c);
    case n.SheetDrawingAnchorType["Position"]:
      return We(_0x1a524c);
    case n.SheetDrawingAnchorType["Both"]:
      return Ge(_0x1a524c);
  }
}
function He(_0x2703f7) {
  let _0x1b4d84 = qe(_0x2703f7),
    _0x2b50fe = D(_0x1b4d84, "left"),
    _0x25a712 = D(_0x1b4d84, "top"),
    _0x2a090d = Je(_0x1b4d84, "width"),
    _0x499495 = Je(_0x1b4d84, "height");
  return _0x2b50fe == null ||
    _0x25a712 == null ||
    _0x2a090d == null ||
    _0x499495 == null
    ? undefined
    : { left: _0x2b50fe, top: _0x25a712, width: _0x2a090d, height: _0x499495 };
}
function Ue(_0x1640e4) {
  let _0x22bb9c = He(_0x1640e4);
  return _0x22bb9c
    ? { kind: n.SheetDrawingAnchorType["None"], ..._0x22bb9c }
    : undefined;
}
function We(_0x1c719b) {
  let _0x58fdbc = Ke(_0x1c719b.from),
    _0x5b2f14 = Je(_0x1c719b, "width"),
    _0x385b91 = Je(_0x1c719b, "height");
  return !_0x58fdbc || _0x5b2f14 == null || _0x385b91 == null
    ? undefined
    : {
        kind: n.SheetDrawingAnchorType["Position"],
        from: _0x58fdbc,
        width: _0x5b2f14,
        height: _0x385b91,
      };
}
function Ge(_0x47fac4) {
  let _0x281833 = Ke(_0x47fac4.from),
    _0x5227a9 = Ke(_0x47fac4.to);
  return !_0x281833 || !_0x5227a9
    ? undefined
    : {
        kind: n.SheetDrawingAnchorType["Both"],
        from: _0x281833,
        to: _0x5227a9,
      };
}
function Ke(_0x1cc441) {
  let _0x4a5ffe = qe(_0x1cc441),
    _0x6c542c = Ye(_0x4a5ffe, "row"),
    _0x4b33b7 = Ye(_0x4a5ffe, "column"),
    _0xbe0f57 = D(_0x4a5ffe, "rowOffset"),
    _0x3ff73b = D(_0x4a5ffe, "columnOffset");
  return _0x6c542c == null ||
    _0x4b33b7 == null ||
    _0xbe0f57 == null ||
    _0x3ff73b == null
    ? undefined
    : {
        row: _0x6c542c,
        column: _0x4b33b7,
        rowOffset: _0xbe0f57,
        columnOffset: _0x3ff73b,
      };
}
function qe(_0x4b633f) {
  return typeof _0x4b633f == "object" && _0x4b633f && !Array.isArray(_0x4b633f)
    ? Object.fromEntries(Object.entries(_0x4b633f))
    : undefined;
}
function D(_0x163566, _0x1bf96f) {
  let _0x4fb91d = _0x163566 == null ? undefined : _0x163566[_0x1bf96f];
  return typeof _0x4fb91d == "number" && Number.isFinite(_0x4fb91d)
    ? _0x4fb91d
    : undefined;
}
function Je(_0x3daf60, _0x5be3b4) {
  let _0x2e3ea9 = D(_0x3daf60, _0x5be3b4);
  return _0x2e3ea9 != null && _0x2e3ea9 > 0 ? _0x2e3ea9 : undefined;
}
function Ye(_0x2065a3, _0xd6b158) {
  let _0x52ea08 = D(_0x2065a3, _0xd6b158);
  return _0x52ea08 != null && Number.isInteger(_0x52ea08) && _0x52ea08 >= 0
    ? _0x52ea08
    : undefined;
}
function Xe(_0x1e0882) {
  return typeof _0x1e0882 == "function" ? _0x1e0882() : _0x1e0882;
}
function Ze(_0x1564b6) {
  return typeof _0x1564b6 == "function" ? _0x1564b6() : _0x1564b6;
}
function Qe(_0x4e085e) {
  return typeof _0x4e085e == "function" ? _0x4e085e() : _0x4e085e;
}
function $e(_0xf71741, _0x2bb986) {
  if (!_0xf71741) throw Error(_0x2bb986);
  return _0xf71741;
}
function et(_0x51b45a, _0x26f479) {
  if (!_0x51b45a) throw Error(_0x26f479);
  return _0x51b45a;
}
function tt(_0x2ff5ae) {
  var _0x54cd87, _0x26e7b2;
  let _0x1bd5f5 = _0x2ff5ae.hostContext,
    _0x2606a6 = nt(_0x1bd5f5),
    _0x57b4aa =
      _0x2606a6 === "aspect-ratio" ||
      ((_0x54cd87 = _0x2ff5ae.descriptor) == null
        ? undefined
        : _0x54cd87.childType) === e.UniverInstanceType["UNIVER_SLIDE"]
        ? "aspect-ratio"
        : _0x2606a6,
    _0x475dcf =
      E(_0x1bd5f5, "aspectRatio") ??
      (((_0x26e7b2 = _0x2ff5ae.descriptor) == null
        ? undefined
        : _0x26e7b2.childType) === e.UniverInstanceType["UNIVER_SLIDE"]
        ? 16 / 9
        : undefined);
  if (_0x57b4aa !== "aspect-ratio" || _0x475dcf == null) return _0x1bd5f5;
  let _0x276bde = xe({
    width: E(_0x1bd5f5, "width"),
    height: E(_0x1bd5f5, "height"),
    resizeBehavior: _0x57b4aa,
    aspectRatio: _0x475dcf,
  });
  return {
    ..._0x1bd5f5,
    width: _0x276bde.width,
    height: _0x276bde.height,
    resizeBehavior: _0x57b4aa,
    aspectRatio: _0x475dcf,
  };
}
function nt(_0x551985) {
  let _0x609e35 = Re(_0x551985, "resizeBehavior");
  return _0x609e35 === "free" ||
    _0x609e35 === "aspect-ratio" ||
    _0x609e35 === "height-auto" ||
    _0x609e35 === "disabled"
    ? _0x609e35
    : undefined;
}
function rt(_0x4fa95b) {
  let _0x3e85cf = Re(_0x4fa95b, "runtimeMountMode");
  return _0x3e85cf === "always" || _0x3e85cf === "stage2"
    ? _0x3e85cf
    : undefined;
}
function O(_0x11103, _0x41e7a5, _0x5bfd5a) {
  return {
    id: n.SetDrawingApplyMutation["id"],
    params: {
      unitId: _0x11103.unitId,
      subUnitId: _0x11103.subUnitId,
      op: _0x5bfd5a === "redo" ? _0x11103.redo : _0x11103.undo,
      objects: _0x11103.objects,
      type: _0x41e7a5,
    },
  };
}
var k = class {
  constructor() {
    v(this, "_records", new Map());
  }
  clearUnit(_0x4d93e2) {
    this._records["delete"](_0x4d93e2);
  }
  setAnchor(_0xd6dafd) {
    var _0x434013;
    let _0x43f042 = this._ensureRecords(_0xd6dafd.hostUnitId),
      _0x32e909 = Date.now();
    _0x43f042[_0xd6dafd.hostAnchorId] = {
      ..._0xd6dafd,
      lifecycle: "active",
      createdAt:
        _0xd6dafd.createdAt ??
        ((_0x434013 = _0x43f042[_0xd6dafd.hostAnchorId]) == null
          ? undefined
          : _0x434013.createdAt) ??
        _0x32e909,
      updatedAt: _0x32e909,
    };
  }
  removeAnchor(_0x753b50, _0x1c22e4) {
    let _0x47e584 = this._ensureRecords(_0x753b50),
      _0x1abb8a = _0x47e584[_0x1c22e4];
    _0x1abb8a &&
      (_0x47e584[_0x1c22e4] = {
        ..._0x1abb8a,
        lifecycle: "removed",
        updatedAt: Date.now(),
      });
  }
  getAnchor(_0x3c5f0a, _0x2c5c28) {
    let _0x372e07 = this._ensureRecords(_0x3c5f0a)[_0x2c5c28];
    return _0x372e07 ? { ..._0x372e07 } : undefined;
  }
  listAnchors(_0x33583d) {
    return Object.values(this._ensureRecords(_0x33583d)).map((_0x414a7e) => ({
      ..._0x414a7e,
    }));
  }
  _ensureRecords(_0x452267) {
    let _0x2f566e = this._records["get"](_0x452267);
    return (
      _0x2f566e ||
        ((_0x2f566e = {}), this._records["set"](_0x452267, _0x2f566e)),
      _0x2f566e
    );
  }
};
const it = new Set(["subUnitId"]),
  at = new Set(["pageId"]),
  ot = new Set(["dashboardId", "tableId", "viewId"]);
function st(_0x59e45e, _0x5a425c) {
  if (_0x5a425c !== undefined)
    switch (
      ((!_0x5a425c ||
        typeof _0x5a425c != "object" ||
        Array.isArray(_0x5a425c)) &&
        A(_0x59e45e, _0x5a425c),
      _0x59e45e)
    ) {
      case e.UniverInstanceType["UNIVER_SHEET"]:
        return (
          lt(_0x5a425c, it, _0x59e45e),
          ut(_0x5a425c.subUnitId) || A(_0x59e45e, _0x5a425c),
          { subUnitId: _0x5a425c.subUnitId }
        );
      case e.UniverInstanceType["UNIVER_SLIDE"]:
        return (
          lt(_0x5a425c, at, _0x59e45e),
          ut(_0x5a425c.pageId) || A(_0x59e45e, _0x5a425c),
          { pageId: _0x5a425c.pageId }
        );
      case e.UniverInstanceType["UNIVER_BASE"]:
        return (
          lt(_0x5a425c, ot, _0x59e45e),
          (!ut(_0x5a425c.tableId) ||
            (_0x5a425c.viewId !== undefined && !ut(_0x5a425c.viewId)) ||
            (_0x5a425c.dashboardId !== undefined &&
              !ut(_0x5a425c.dashboardId))) &&
            A(_0x59e45e, _0x5a425c),
          {
            tableId: _0x5a425c.tableId,
            ...(_0x5a425c.viewId === undefined
              ? {}
              : { viewId: _0x5a425c.viewId }),
            ...(_0x5a425c.dashboardId === undefined
              ? {}
              : { dashboardId: _0x5a425c.dashboardId }),
          }
        );
      default:
        A(_0x59e45e, _0x5a425c);
    }
}
function ct(_0x44fec8, _0xc582da) {
  return _0x44fec8 === _0xc582da
    ? true
    : !_0x44fec8 || !_0xc582da
      ? false
      : _0x44fec8.subUnitId === _0xc582da.subUnitId &&
        _0x44fec8.pageId === _0xc582da.pageId &&
        _0x44fec8.tableId === _0xc582da.tableId &&
        _0x44fec8.viewId === _0xc582da.viewId &&
        _0x44fec8.dashboardId === _0xc582da.dashboardId;
}
function lt(_0x2b92f6, _0x5c6b35, _0x3ca50d) {
  Object.keys(_0x2b92f6).some((_0x41a7ac) => !_0x5c6b35.has(_0x41a7ac)) &&
    A(_0x3ca50d, _0x2b92f6);
}
function ut(_0x32f0ff) {
  return typeof _0x32f0ff == "string" && _0x32f0ff.length > 0;
}
function A(_0xc6f2e5, _0x5831d7) {
  throw new y("EMBED_DESCRIPTOR_DISPLAY_TARGET_INVALID", {
    childType: _0xc6f2e5,
    target: _0x5831d7,
  });
}
function dt() {
  return { version: 1, embeds: {} };
}
function ft(_0x1370b6) {
  return JSON.parse(JSON.stringify(_0x1370b6 ?? dt()));
}
const j = { SELF: "self", RELATIVE: "relative", URI: "uri" };
let pt = (function (_0x456277) {
  return (
    (_0x456277.InvalidUriReference = "INVALID_URI_REFERENCE"),
    (_0x456277.InvalidFragmentSyntax = "INVALID_FRAGMENT_SYNTAX"),
    (_0x456277.InvalidPercentEncoding = "INVALID_PERCENT_ENCODING"),
    (_0x456277.MissingUnit = "MISSING_UNIT"),
    (_0x456277.MissingType = "MISSING_TYPE"),
    (_0x456277.ResourceRefInvalid = "RESOURCE_REF_INVALID"),
    (_0x456277.ResourceRefInvalidFile = "RESOURCE_REF_INVALID_FILE"),
    (_0x456277.ResourceRefInvalidFileKind = "RESOURCE_REF_INVALID_FILE_KIND"),
    (_0x456277.ResourceRefInvalidRelativePath =
      "RESOURCE_REF_INVALID_RELATIVE_PATH"),
    (_0x456277.ResourceRefInvalidUri = "RESOURCE_REF_INVALID_URI"),
    (_0x456277.ResourceRefInvalidUnit = "RESOURCE_REF_INVALID_UNIT"),
    (_0x456277.ResourceRefInvalidUnitType = "RESOURCE_REF_INVALID_UNIT_TYPE"),
    (_0x456277.ResourceRefInvalidPart = "RESOURCE_REF_INVALID_PART"),
    (_0x456277.ResourceRefInvalidPartKind = "RESOURCE_REF_INVALID_PART_KIND"),
    (_0x456277.ResourceRefInvalidSheetPart = "RESOURCE_REF_INVALID_SHEET_PART"),
    (_0x456277.ResourceRefInvalidRangePart = "RESOURCE_REF_INVALID_RANGE_PART"),
    (_0x456277.ResourceRefInvalidExtensions =
      "RESOURCE_REF_INVALID_EXTENSIONS"),
    (_0x456277.ResourceRefInvalidExtensionKey =
      "RESOURCE_REF_INVALID_EXTENSION_KEY"),
    (_0x456277.ResourceRefInvalidExtensionValue =
      "RESOURCE_REF_INVALID_EXTENSION_VALUE"),
    (_0x456277.ResourceRefFileUnsupported = "RESOURCE_REF_FILE_UNSUPPORTED"),
    (_0x456277.ResourceRefUriUnsupported = "RESOURCE_REF_URI_UNSUPPORTED"),
    _0x456277
  );
})({});
var M = class extends Error {
  constructor(_0x3f5ff1, _0xae961e) {
    (super(_0x3f5ff1),
      v(this, "code", undefined),
      v(this, "details", undefined),
      (this.name = "ResourceRefError"),
      (this.code = _0x3f5ff1),
      (this.details = _0xae961e));
  }
};
const mt = /%(?![0-9A-Fa-f]{2})/,
  ht = new Set(["unit", "type"]);
function N(_0x4dfe4e) {
  return typeof _0x4dfe4e == "string" ? I(_0x4dfe4e) : gt(_0x4dfe4e);
}
function gt(_0xad11ea) {
  return (
    vt(_0xad11ea),
    {
      file: wt(_0xad11ea.file),
      unit: {
        selector: _0xad11ea.unit["selector"],
        type: _0xad11ea.unit["type"],
      },
      ...(_0xad11ea.part ? { part: Tt(_0xad11ea.part) } : {}),
      ...(_0xad11ea.extensions ? { extensions: Et(_0xad11ea.extensions) } : {}),
    }
  );
}
function P(_0x20eddc) {
  return JSON.stringify(_t(_0x20eddc));
}
function _t(_0x556b26) {
  let _0x3bd290 = gt(_0x556b26);
  return { file: _0x3bd290.file, unit: _0x3bd290.unit };
}
function vt(_0x2609b3) {
  if (!_0x2609b3 || typeof _0x2609b3 != "object")
    throw new M("RESOURCE_REF_INVALID", { ref: _0x2609b3 });
  if (
    (xt(_0x2609b3.file),
    St(_0x2609b3.unit),
    _0x2609b3.part && Ct(_0x2609b3.part),
    _0x2609b3.extensions != null)
  ) {
    if (
      typeof _0x2609b3.extensions != "object" ||
      Array.isArray(_0x2609b3.extensions)
    )
      throw new M("RESOURCE_REF_INVALID_EXTENSIONS", {
        extensions: _0x2609b3.extensions,
      });
    for (let [_0x20a624, _0x1be92b] of Object.entries(_0x2609b3.extensions)) {
      if (!_0x20a624)
        throw new M("RESOURCE_REF_INVALID_EXTENSION_KEY", { key: _0x20a624 });
      if (
        typeof _0x1be92b != "string" &&
        (!Array.isArray(_0x1be92b) ||
          _0x1be92b.some((_0x475247) => typeof _0x475247 != "string"))
      )
        throw new M("RESOURCE_REF_INVALID_EXTENSION_VALUE", {
          key: _0x20a624,
          value: _0x1be92b,
        });
    }
  }
}
function F(_0x312218) {
  return (
    !!_0x312218 &&
    _0x312218.kind === "range" &&
    typeof _0x312218.ref == "string" &&
    typeof _0x312218.sheetName == "string" &&
    typeof _0x312218.range == "string"
  );
}
function yt(_0x50532a) {
  return (
    !!_0x50532a &&
    _0x50532a.kind === "table" &&
    typeof _0x50532a.tableName == "string" &&
    _0x50532a.tableName["length"] > 0
  );
}
function I(_0x4ddd4d, _0x2bd0d5 = {}) {
  if (typeof _0x4ddd4d != "string")
    throw new M("INVALID_URI_REFERENCE", { uriReference: _0x4ddd4d });
  let _0x34c97b = _0x4ddd4d.indexOf("#");
  if (_0x34c97b !== 0)
    throw new M("INVALID_URI_REFERENCE", { uriReference: _0x4ddd4d });
  let _0x42d2c8 = Dt(_0x4ddd4d.slice(_0x34c97b + 1)),
    _0x547ee1 = _0x42d2c8.get("unit"),
    _0x274a0d = _0x42d2c8.get("type");
  if (!_0x547ee1) throw new M("MISSING_UNIT", { uriReference: _0x4ddd4d });
  if (!_0x274a0d) throw new M("MISSING_TYPE", { uriReference: _0x4ddd4d });
  return gt({
    file: { kind: j.SELF },
    unit: { selector: _0x547ee1, type: _0x274a0d },
  });
}
function bt(_0x27e15f, _0x4c74e4 = {}) {
  let _0x31f07c = gt(_0x27e15f);
  if (_0x31f07c.file["kind"] !== j.SELF)
    throw new M("RESOURCE_REF_FILE_UNSUPPORTED", { file: _0x31f07c.file });
  if (_0x31f07c.part || _0x31f07c.extensions)
    throw new M("RESOURCE_REF_URI_UNSUPPORTED", {
      part: _0x31f07c.part,
      extensions: _0x31f07c.extensions,
    });
  return (
    "#unit=" +
    encodeURIComponent(_0x31f07c.unit["selector"]) +
    "&type=" +
    encodeURIComponent(_0x31f07c.unit["type"])
  );
}
function xt(_0x43f3f5) {
  if (!_0x43f3f5 || typeof _0x43f3f5 != "object")
    throw new M("RESOURCE_REF_INVALID_FILE", { file: _0x43f3f5 });
  switch (_0x43f3f5.kind) {
    case j.SELF:
      return;
    case j.RELATIVE:
      if (!_0x43f3f5.path)
        throw new M("RESOURCE_REF_INVALID_RELATIVE_PATH", { file: _0x43f3f5 });
      return;
    case j.URI:
      if (!_0x43f3f5.uri)
        throw new M("RESOURCE_REF_INVALID_URI", { file: _0x43f3f5 });
      return;
    default:
      throw new M("RESOURCE_REF_INVALID_FILE_KIND", { file: _0x43f3f5 });
  }
}
function St(_0x452cd7) {
  if (
    !_0x452cd7 ||
    typeof _0x452cd7 != "object" ||
    !_0x452cd7.selector ||
    typeof _0x452cd7.type != "string" ||
    !_0x452cd7.type
  )
    throw new M("RESOURCE_REF_INVALID_UNIT", { unit: _0x452cd7 });
}
function Ct(_0x3f4821) {
  if (
    !_0x3f4821 ||
    typeof _0x3f4821 != "object" ||
    typeof _0x3f4821.kind != "string" ||
    !_0x3f4821.kind
  )
    throw new M("RESOURCE_REF_INVALID_PART", { part: _0x3f4821 });
  switch (_0x3f4821.kind) {
    case "sheet":
      if (!_0x3f4821.sheetName)
        throw new M("RESOURCE_REF_INVALID_SHEET_PART", { part: _0x3f4821 });
      return;
    case "range":
      if (!_0x3f4821.ref || !_0x3f4821.sheetName || !_0x3f4821.range)
        throw new M("RESOURCE_REF_INVALID_RANGE_PART", { part: _0x3f4821 });
      break;
    case "table":
      if (!_0x3f4821.tableName)
        throw new M("RESOURCE_REF_INVALID_PART", { part: _0x3f4821 });
      break;
    default:
      break;
  }
  for (let [_0x1001d3, _0xd1588a] of Object.entries(_0x3f4821))
    if (
      !_0x1001d3 ||
      (_0xd1588a != null &&
        typeof _0xd1588a != "string" &&
        (!Array.isArray(_0xd1588a) ||
          _0xd1588a.some((_0x204f98) => typeof _0x204f98 != "string")))
    )
      throw new M("RESOURCE_REF_INVALID_PART", { part: _0x3f4821 });
}
function wt(_0x233445) {
  switch (_0x233445.kind) {
    case j.SELF:
      return { kind: j.SELF };
    case j.RELATIVE:
      return { kind: j.RELATIVE, path: _0x233445.path };
    case j.URI:
      return { kind: j.URI, uri: _0x233445.uri };
  }
}
function Tt(_0x403141) {
  switch (_0x403141.kind) {
    case "sheet":
      return {
        kind: "sheet",
        sheetName: _0x403141.sheetName,
        ...(_0x403141.sheetId ? { sheetId: _0x403141.sheetId } : {}),
      };
    case "range":
      return {
        kind: "range",
        ref: _0x403141.ref,
        sheetName: _0x403141.sheetName,
        range: _0x403141.range,
        ...(_0x403141.sheetId ? { sheetId: _0x403141.sheetId } : {}),
      };
    case "table":
      return {
        kind: "table",
        tableName: _0x403141.tableName,
        ...(_0x403141.tableId ? { tableId: _0x403141.tableId } : {}),
      };
    default:
      return Object.fromEntries(
        Object.entries(_0x403141)
          .sort(([_0x2be76f], [_0x498f3c]) =>
            _0x2be76f.localeCompare(_0x498f3c),
          )
          .map(([_0x4ab356, _0x5e25c1]) => [
            _0x4ab356,
            Array.isArray(_0x5e25c1) ? [..._0x5e25c1] : _0x5e25c1,
          ]),
      );
  }
}
function Et(_0x29c2da) {
  return Object.fromEntries(
    Object.entries(_0x29c2da)
      .sort(([_0x5a50c5], [_0xae733d]) => _0x5a50c5.localeCompare(_0xae733d))
      .map(([_0x204618, _0x252fae]) => [
        _0x204618,
        Array.isArray(_0x252fae) ? [..._0x252fae] : _0x252fae,
      ]),
  );
}
function Dt(_0x1992cc) {
  if (!_0x1992cc)
    throw new M("INVALID_FRAGMENT_SYNTAX", { fragment: _0x1992cc });
  let _0x5af90e = new Map();
  for (let _0x55b51c of _0x1992cc.split("&")) {
    let _0x3e8873 = _0x55b51c.indexOf("=");
    if (_0x3e8873 <= 0)
      throw new M("INVALID_FRAGMENT_SYNTAX", {
        fragment: _0x1992cc,
        rawParam: _0x55b51c,
      });
    let _0x18dc70 = Ot(_0x55b51c.slice(0, _0x3e8873)),
      _0x2e4a12 = Ot(_0x55b51c.slice(_0x3e8873 + 1));
    if (!_0x2e4a12 || !ht.has(_0x18dc70) || _0x5af90e.has(_0x18dc70))
      throw new M("INVALID_FRAGMENT_SYNTAX", {
        fragment: _0x1992cc,
        key: _0x18dc70,
        value: _0x2e4a12,
      });
    _0x5af90e.set(_0x18dc70, _0x2e4a12);
  }
  return _0x5af90e;
}
function Ot(_0x8469d7) {
  if (mt.test(_0x8469d7))
    throw new M("INVALID_PERCENT_ENCODING", { value: _0x8469d7 });
  try {
    return decodeURIComponent(_0x8469d7);
  } catch {
    throw new M("INVALID_PERCENT_ENCODING", { value: _0x8469d7 });
  }
}
function kt(_0x11aaa4) {
  if (!_0x11aaa4 || _0x11aaa4.trim() !== _0x11aaa4)
    throw Error("RESOURCE_REF_LOCATOR_INVALID");
  return bt(I(_0x11aaa4));
}
function At(_0x33ffb3) {
  return typeof _0x33ffb3 == "string" ? kt(_0x33ffb3) : bt(_0x33ffb3);
}
function L(_0x5e90f7) {
  return JSON.stringify({ uriReference: At(_0x5e90f7) });
}
function jt(_0x6c6094) {
  return I(At(_0x6c6094)).unit["selector"];
}
function Mt(_0x2cac41) {
  switch (_0x2cac41) {
    case e.UniverInstanceType["UNIVER_SHEET"]:
      return "sheet";
    case e.UniverInstanceType["UNIVER_DOC"]:
      return "doc";
    case e.UniverInstanceType["UNIVER_SLIDE"]:
      return "slide";
    case e.UniverInstanceType["UNIVER_BASE"]:
      return "base";
    case e.UniverInstanceType["UNIVER_BOARD"]:
      return "board";
    default:
      throw Error("UNSUPPORTED_UNIT_TYPE:" + _0x2cac41);
  }
}
function R(_0x35cb19) {
  switch (_0x35cb19) {
    case "sheet":
      return e.UniverInstanceType["UNIVER_SHEET"];
    case "doc":
      return e.UniverInstanceType["UNIVER_DOC"];
    case "slide":
      return e.UniverInstanceType["UNIVER_SLIDE"];
    case "base":
      return e.UniverInstanceType["UNIVER_BASE"];
    case "board":
      return e.UniverInstanceType["UNIVER_BOARD"];
    default:
      throw Error("UNSUPPORTED_UNIT_TYPE:" + _0x35cb19);
  }
}
var Nt = class {
  constructor() {
    (v(this, "_leasesByOwner", new Map()),
      v(this, "_leasesByChildUnit", new Map()));
  }
  acquire(_0x3aab2f) {
    let _0x54cf0f = { ..._0x3aab2f },
      _0x297aec = this._getOwnerKey(_0x54cf0f),
      _0x6a265c = this._leasesByOwner["get"](_0x297aec);
    if (_0x6a265c) {
      if (
        _0x6a265c.record["childUnitId"] === _0x54cf0f.childUnitId &&
        _0x6a265c.record["childType"] === _0x54cf0f.childType
      )
        return (0, e.toDisposable)(() => {});
      throw this._createConflictError(_0x54cf0f, _0x6a265c.record);
    }
    let _0x11f815 = this._leasesByChildUnit["get"](_0x54cf0f.childUnitId);
    if (_0x11f815) throw this._createConflictError(_0x54cf0f, _0x11f815.record);
    let _0x46aba6 = {
      ownerKey: _0x297aec,
      token: Symbol(_0x297aec),
      record: _0x54cf0f,
    };
    (this._leasesByOwner["set"](_0x297aec, _0x46aba6),
      this._leasesByChildUnit["set"](_0x54cf0f.childUnitId, _0x46aba6));
    let _0x2d5573 = false;
    return (0, e.toDisposable)(() => {
      _0x2d5573 || ((_0x2d5573 = true), this._releaseState(_0x46aba6));
    });
  }
  hasLease(_0x27894b, _0x19d936) {
    var _0x19b1d7;
    return (
      ((_0x19b1d7 = this._leasesByOwner["get"](this._getOwnerKey(_0x27894b))) ==
      null
        ? undefined
        : _0x19b1d7.record["childUnitId"]) === _0x19d936
    );
  }
  getLease(_0xb4bc79) {
    var _0x31d788;
    let _0x1fc991 =
      (_0x31d788 = this._leasesByChildUnit["get"](_0xb4bc79)) == null
        ? undefined
        : _0x31d788.record;
    return _0x1fc991 ? { ..._0x1fc991 } : undefined;
  }
  release(_0xba414d) {
    let _0x4a366c = this._leasesByOwner["get"](this._getOwnerKey(_0xba414d));
    _0x4a366c && this._releaseState(_0x4a366c);
  }
  releaseHost(_0x13237b) {
    for (let _0x3bde92 of this._leasesByOwner["values"]())
      _0x3bde92.record["hostUnitId"] === _0x13237b &&
        this._releaseState(_0x3bde92);
  }
  releaseUnit(_0x2f00e5) {
    for (let _0xdfd2f of this._leasesByOwner["values"]())
      (_0xdfd2f.record["hostUnitId"] === _0x2f00e5 ||
        _0xdfd2f.record["childUnitId"] === _0x2f00e5) &&
        this._releaseState(_0xdfd2f);
  }
  dispose() {
    (this._leasesByOwner["clear"](), this._leasesByChildUnit["clear"]());
  }
  _releaseState(_0xad009d) {
    var _0x45b096, _0x6b8c63;
    (((_0x45b096 = this._leasesByOwner["get"](_0xad009d.ownerKey)) == null
      ? undefined
      : _0x45b096.token) === _0xad009d.token &&
      this._leasesByOwner["delete"](_0xad009d.ownerKey),
      ((_0x6b8c63 = this._leasesByChildUnit["get"](
        _0xad009d.record["childUnitId"],
      )) == null
        ? undefined
        : _0x6b8c63.token) === _0xad009d.token &&
        this._leasesByChildUnit["delete"](_0xad009d.record["childUnitId"]));
  }
  _createConflictError(_0x4eb8ba, _0x2d7515) {
    return new y("EMBED_CHILD_UNIT_ALREADY_EMBEDDED", {
      hostUnitId: _0x4eb8ba.hostUnitId,
      embedId: _0x4eb8ba.embedId,
      childUnitId: _0x4eb8ba.childUnitId,
      duplicatedHostUnitId: _0x2d7515.hostUnitId,
      duplicatedEmbedId: _0x2d7515.embedId,
    });
  }
  _getOwnerKey(_0x3e4cba) {
    return JSON.stringify([_0x3e4cba.hostUnitId, _0x3e4cba.embedId]);
  }
};
function z(_0x16f33f, _0x248a47) {
  return function (_0x2a17f6, _0x5be1da) {
    _0x248a47(_0x2a17f6, _0x5be1da, _0x16f33f);
  };
}
function B(_0x203f24, _0x2a3b8a, _0x5ee623, _0x85ef79) {
  var _0x52a364 = arguments.length,
    _0xf7a9f4 =
      _0x52a364 < 3
        ? _0x2a3b8a
        : _0x85ef79 === null
          ? (_0x85ef79 = Object.getOwnPropertyDescriptor(_0x2a3b8a, _0x5ee623))
          : _0x85ef79,
    _0x4c5301;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xf7a9f4 = Reflect.decorate(_0x203f24, _0x2a3b8a, _0x5ee623, _0x85ef79);
  else {
    for (var _0xcdef5d = _0x203f24.length - 1; _0xcdef5d >= 0; _0xcdef5d--)
      (_0x4c5301 = _0x203f24[_0xcdef5d]) &&
        (_0xf7a9f4 =
          (_0x52a364 < 3
            ? _0x4c5301(_0xf7a9f4)
            : _0x52a364 > 3
              ? _0x4c5301(_0x2a3b8a, _0x5ee623, _0xf7a9f4)
              : _0x4c5301(_0x2a3b8a, _0x5ee623)) || _0xf7a9f4);
  }
  return (
    _0x52a364 > 3 &&
      _0xf7a9f4 &&
      Object.defineProperty(_0x2a3b8a, _0x5ee623, _0xf7a9f4),
    _0xf7a9f4
  );
}
let V = class {
  constructor(_0x25fb31) {
    ((this._unitLeaseService = _0x25fb31), v(this, "_resources", new Map()));
  }
  addDescriptor(_0x22cdd6, _0x39928c) {
    let _0x1a0b62 = Date.now(),
      _0x1e4b58 = this._normalizeDescriptor(_0x22cdd6, _0x39928c),
      _0x4357ec = this._ensureResource(_0x22cdd6);
    (_0x1e4b58.hostType === e.UniverInstanceType["UNIVER_BOARD"] &&
      _0x1e4b58.entry === g.BoardsFloatingObject &&
      _0x1e4b58.lifecycle !== "soft-delete d" &&
      Object.values(_0x4357ec.embeds).find(
        (_0x29f4ea) =>
          _0x29f4ea.embedId !== _0x1e4b58.embedId &&
          _0x29f4ea.lifecycle !== "soft-delete d" &&
          _0x29f4ea.hostType === e.UniverInstanceType["UNIVER_BOARD"] &&
          _0x29f4ea.entry === g.BoardsFloatingObject &&
          L(_0x29f4ea.source["ref"]) === L(_0x1e4b58.source["ref"]),
      ) &&
      (_0x1e4b58.lifecycle = "soft-delete d"),
      (_0x4357ec.embeds[_0x1e4b58.embedId] = {
        ..._0x1e4b58,
        createdAt: _0x1e4b58.createdAt ?? _0x1a0b62,
        updatedAt: _0x1a0b62,
      }));
  }
  applyDescriptorMutation(_0x57c7e1, _0x36e01a) {
    let _0x5bac4a = this.getDescriptor(_0x57c7e1, _0x36e01a.embedId),
      _0x5d3492 = this._getRuntimeChildUnitIdForMutation(_0x5bac4a, _0x36e01a);
    this.addDescriptor(
      _0x57c7e1,
      _0x5d3492 ? { ..._0x36e01a, childUnitId: _0x5d3492 } : _0x36e01a,
    );
  }
  getDescriptor(_0x5bf955, _0x272fb7) {
    var _0x4c5995;
    return (_0x4c5995 = this._resources["get"](_0x5bf955)) == null
      ? undefined
      : _0x4c5995.embeds[_0x272fb7];
  }
  getActiveDescriptors(_0x58710f) {
    var _0x56abe5;
    return Object.values(
      ((_0x56abe5 = this._resources["get"](_0x58710f)) == null
        ? undefined
        : _0x56abe5.embeds) ?? {},
    ).filter((_0x88e26d) => _0x88e26d.lifecycle !== "soft-delete d");
  }
  getAllActiveDescriptors() {
    return [...this._resources["values"]()]
      .flatMap((_0x22178e) => Object.values(_0x22178e.embeds))
      .filter((_0x275fad) => _0x275fad.lifecycle !== "soft-delete d");
  }
  getActiveDescriptorsByChildUnit(_0x18a04b) {
    return [...this._resources["values"]()]
      .flatMap((_0x76af2d) => Object.values(_0x76af2d.embeds))
      .filter(
        (_0x4ea967) =>
          _0x4ea967.lifecycle !== "soft-delete d" &&
          _0x4ea967.childUnitId === _0x18a04b,
      );
  }
  getDescriptors(_0xb4741b) {
    var _0x49620a;
    return Object.values(
      ((_0x49620a = this._resources["get"](_0xb4741b)) == null
        ? undefined
        : _0x49620a.embeds) ?? {},
    );
  }
  getDescriptorsByResourceRef(_0x2c3ff4, _0x40c9fa) {
    var _0x2ed6a9;
    let _0x3edad2 = L(_0x40c9fa);
    return Object.values(
      ((_0x2ed6a9 = this._resources["get"](_0x2c3ff4)) == null
        ? undefined
        : _0x2ed6a9.embeds) ?? {},
    ).filter(
      (_0x2f0ceb) => L(this._getDescriptorResourceRef(_0x2f0ceb)) === _0x3edad2,
    );
  }
  getActiveDescriptorsByResourceRef(_0x419d29, _0x348574) {
    return this.getDescriptorsByResourceRef(_0x419d29, _0x348574).filter(
      (_0x516c5b) => _0x516c5b.lifecycle !== "soft-delete d",
    );
  }
  countReferencesByResourceRef(_0x10b0c8, _0x486dd4) {
    return this.getDescriptorsByResourceRef(_0x10b0c8, _0x486dd4).length;
  }
  countActiveReferencesByResourceRef(_0x56cd70, _0xbb079b) {
    return this.getActiveDescriptorsByResourceRef(_0x56cd70, _0xbb079b).length;
  }
  softDeleteDescriptor(_0x48ab42, _0x30eea7) {
    let _0x2af09f = this.getDescriptor(_0x48ab42, _0x30eea7);
    _0x2af09f &&
      (this._unitLeaseService["release"]({
        hostUnitId: _0x48ab42,
        embedId: _0x30eea7,
      }),
      (_0x2af09f.lifecycle = "soft-delete d"),
      (_0x2af09f.updatedAt = Date.now()));
  }
  restoreDescriptor(_0x5379e8, _0x1dcffd) {
    let _0x1314a5 = this.getDescriptor(_0x5379e8, _0x1dcffd);
    _0x1314a5 &&
      ((_0x1314a5.hostType === e.UniverInstanceType["UNIVER_BOARD"] &&
        _0x1314a5.entry === g.BoardsFloatingObject &&
        this.getActiveDescriptorsByResourceRef(
          _0x5379e8,
          _0x1314a5.source["ref"],
        ).some((_0x432615) => _0x432615.embedId !== _0x1dcffd)) ||
        ((_0x1314a5.lifecycle = "active"), (_0x1314a5.updatedAt = Date.now())));
  }
  serializeUnit(_0x1bcc83) {
    return this._cloneResource(
      this._toPersistedResource(
        this._resources["get"](_0x1bcc83) ?? this._createResource(),
      ),
    );
  }
  loadUnit(_0x1cbbce, _0x4aa6ab) {
    let _0x15cb9f = this._createResource();
    for (let [_0x53047e, _0x45ce79] of Object.entries(_0x4aa6ab.embeds ?? {}))
      _0x15cb9f.embeds[_0x53047e] = this._normalizeDescriptor(_0x1cbbce, {
        ...this._toPersistedDescriptor(_0x45ce79),
        embedId: _0x53047e,
      });
    this._resources["set"](_0x1cbbce, this._cloneResource(_0x15cb9f));
  }
  unloadUnit(_0x25289a) {
    this._resources["delete"](_0x25289a);
  }
  parseJson(_0x375eb9) {
    if (!_0x375eb9) return this._createResource();
    let _0x292ca6 = JSON.parse(_0x375eb9);
    return {
      ...dt(),
      embeds: Object.fromEntries(
        Object.entries(_0x292ca6.embeds ?? {}).map(([_0x147466, _0x1c8f05]) => [
          _0x147466,
          this._normalizeDescriptor(_0x1c8f05.hostUnitId, {
            ...this._toPersistedDescriptor(_0x1c8f05),
            embedId: _0x147466,
          }),
        ]),
      ),
    };
  }
  toJson(_0x54c66b) {
    return JSON.stringify(this.serializeUnit(_0x54c66b));
  }
  _normalizeDescriptor(_0x5ed76f, _0x183345) {
    let _0x42d6b3 = { ..._0x183345 };
    delete _0x42d6b3.hostContext;
    let _0x59c53d = _0x183345.childType ?? _0x183345.source["unitType"];
    if (_0x59c53d == null)
      throw new y("EMBED_DESCRIPTOR_CHILD_TYPE_REQUIRED", {
        hostUnitId: _0x5ed76f,
        embedId: _0x183345.embedId,
      });
    let _0x57cdd1 = At(_0x183345.source["ref"]),
      _0x44e3fe = I(_0x57cdd1);
    if (_0x59c53d !== R(_0x44e3fe.unit["type"]))
      throw new y("EMBED_DESCRIPTOR_CHILD_TYPE_MISMATCH", {
        hostUnitId: _0x5ed76f,
        embedId: _0x183345.embedId,
        childType: _0x59c53d,
        refUnitType: _0x44e3fe.unit["type"],
      });
    return {
      ..._0x42d6b3,
      hostUnitId: _0x5ed76f,
      source: {
        ref: _0x57cdd1,
        unitType: _0x59c53d,
        ...(_0x183345.source["creationConfig"] === undefined
          ? undefined
          : { creationConfig: _0x183345.source["creationConfig"] }),
      },
      ...(_0x183345.displayTarget === undefined
        ? {}
        : { displayTarget: st(_0x59c53d, _0x183345.displayTarget) }),
      childUnitId: _0x183345.childUnitId,
      childType: _0x59c53d,
      lifecycle: _0x183345.lifecycle ?? "active",
    };
  }
  _getDescriptorResourceRef(_0x39ef98) {
    return _0x39ef98.source["ref"];
  }
  _getRuntimeChildUnitIdForMutation(_0x386a84, _0x17fb6e) {
    if (
      _0x17fb6e.childUnitId ||
      !(_0x386a84 != null && _0x386a84.childUnitId) ||
      _0x386a84.lifecycle === "soft-delete d" ||
      _0x17fb6e.lifecycle === "soft-delete d"
    )
      return _0x17fb6e.childUnitId;
    let _0x4d6bfa = _0x17fb6e.childType ?? _0x17fb6e.source["unitType"];
    if (
      _0x386a84.childType === _0x4d6bfa &&
      L(_0x386a84.source["ref"]) === L(_0x17fb6e.source["ref"])
    )
      return _0x386a84.childUnitId;
  }
  _ensureResource(_0x55a37a) {
    let _0x595267 = this._resources["get"](_0x55a37a);
    return (
      _0x595267 ||
        ((_0x595267 = this._createResource()),
        this._resources["set"](_0x55a37a, _0x595267)),
      _0x595267
    );
  }
  _createResource() {
    return dt();
  }
  _cloneResource(_0x8fce5a) {
    return ft(_0x8fce5a);
  }
  _toPersistedResource(_0x1fad44) {
    return {
      version: _0x1fad44.version,
      embeds: Object.fromEntries(
        Object.entries(_0x1fad44.embeds).map(([_0xe44648, _0x149994]) => [
          _0xe44648,
          this._toPersistedDescriptor(_0x149994),
        ]),
      ),
    };
  }
  _toPersistedDescriptor(_0xc5e847) {
    let _0x4e5d28 = { ..._0xc5e847 };
    return (delete _0x4e5d28.childUnitId, _0x4e5d28);
  }
};
V = B([z(0, (0, e.Inject)(Nt))], V);
const Pt = {
    id: "embed.mutation.set-descriptor",
    type: e.CommandType["MUTATION"],
    handler: (_0x13c4a7, _0x2c6409) =>
      _0x2c6409
        ? (_0x13c4a7
            .get(V)
            .applyDescriptorMutation(_0x2c6409.unitId, _0x2c6409.descriptor),
          true)
        : false,
  },
  Ft = {
    id: "embed.mutation.soft-delete-descriptor",
    type: e.CommandType["MUTATION"],
    handler: (_0x5357b7, _0x16d946) =>
      _0x16d946
        ? (_0x5357b7
            .get(V)
            .softDeleteDescriptor(_0x16d946.unitId, _0x16d946.embedId),
          true)
        : false,
  },
  It = new WeakMap(),
  Lt = new Map([
    ["sheets-sheet-tab", "sheet-tab"],
    ["bases-table-list-block", "table-list"],
    ["slides-page-list-block", "slide-page-list"],
  ]);
function Rt() {
  return [];
}
function zt(_0x586a10) {
  let _0x101f29 = {};
  return (
    _0x586a10.renderHost && (_0x101f29.renderHost = _0x586a10.renderHost),
    _0x586a10.hostType === e.UniverInstanceType["UNIVER_DOC"] &&
      (_0x586a10.childType === e.UniverInstanceType["UNIVER_SHEET"] ||
        _0x586a10.childType === e.UniverInstanceType["UNIVER_BASE"]) &&
      ((_0x101f29.verticalWheelMode = "host"),
      (_0x101f29.horizontalWheelMode = "expand-then-self")),
    _0x586a10.mode === "float"
      ? ((_0x101f29.floating = {
          enabled: true,
          layout: _0x586a10.layout,
          fullscreen: true,
        }),
        (_0x101f29.tab = false),
        _0x101f29)
      : ((_0x101f29.floating = false),
        (_0x101f29.tab = {
          enabled: true,
          container: Lt.get(_0x586a10.entry),
          replaceHostMenu: _0x586a10.menuBehavior === "host-override",
          hideHostFxBar: _0x586a10.menuBehavior === "host-override",
          lockHostRibbon: _0x586a10.menuBehavior === "host-override",
          thumbnail: _0x586a10.entry === "slides-page-list-block",
        }),
        _0x101f29)
  );
}
var H = class {
  constructor() {
    v(this, "_capabilities", new Map());
  }
  register(_0x2c58df) {
    let _0x49ed5c = this._key(
      _0x2c58df.hostType,
      _0x2c58df.childType,
      _0x2c58df.entry,
    );
    if (this._capabilities["has"](_0x49ed5c))
      throw Error("Embed capability already registered: " + _0x49ed5c);
    this._capabilities["set"](_0x49ed5c, _0x2c58df);
  }
  registerMany(_0x1354b8) {
    _0x1354b8.forEach((_0x268398) => this.register(_0x268398));
  }
  getCapability(_0x4a6c58) {
    return this._capabilities["get"](
      this._key(_0x4a6c58.hostType, _0x4a6c58.childType, _0x4a6c58.entry),
    );
  }
  list() {
    return [...this._capabilities["values"]()];
  }
  _key(_0x46ea0a, _0x515038, _0x273bad) {
    return _0x46ea0a + ":" + _0x515038 + ":" + _0x273bad;
  }
};
function Bt(_0x5d71ae) {
  if (!_0x5d71ae.has(H)) return;
  let _0xf3831c = _0x5d71ae,
    _0x1b6fd8 = It.get(_0xf3831c) ?? [];
  if (!_0x1b6fd8.length) return;
  let _0x4a5cf6 = _0x5d71ae.get(H);
  (_0x1b6fd8.forEach((_0xa180cc) => Vt(_0x4a5cf6, _0xa180cc)),
    It.delete(_0xf3831c));
}
function Vt(_0x53118d, _0x4fa299) {
  _0x53118d.getCapability(_0x4fa299) || _0x53118d.register(_0x4fa299);
}
var Ht = class {
    assertCanCreate(_0x1bc552) {
      if (_0x1bc552.parentEmbedId) throw Error("NESTED_EMBED_NOT_SUPPORTED");
    }
  },
  Ut = class {
    resolve(_0x401986) {
      let _0x4063ba = At(_0x401986.ref);
      if (R(I(_0x4063ba).unit["type"]) !== _0x401986.unitType)
        throw Error("EMBED_SOURCE_TYPE_MISMATCH");
      return {
        childType: _0x401986.unitType,
        source: {
          ref: _0x4063ba,
          unitType: _0x401986.unitType,
          ...(_0x401986.creationConfig === undefined
            ? undefined
            : { creationConfig: _0x401986.creationConfig }),
        },
      };
    }
  };
let U = class {
  constructor(_0x40ffeb, _0x40a414, _0x1f0a87, _0x2de31c) {
    ((this._model = _0x40ffeb),
      (this._capabilityRegistry = _0x40a414),
      (this._sourceResolver = _0x1f0a87),
      (this._nestedGuard = _0x2de31c));
  }
  prepareCreateEmbed(_0x106429) {
    this._nestedGuard["assertCanCreate"](_0x106429);
    let _0x466878 = this._sourceResolver["resolve"](_0x106429.source),
      _0x42f9c9 = N(_0x466878.source["ref"]),
      _0x54b42b = P(_0x42f9c9),
      _0x3ea63f = this._model["getAllActiveDescriptors"]().find(
        (_0x27b1ad) => P(N(_0x27b1ad.source["ref"])) === _0x54b42b,
      );
    if (_0x3ea63f) {
      let _0x410172 = _0x466878.childUnitId ?? _0x42f9c9.unit["selector"],
        _0x1bcbc6 = new y("EMBED_CHILD_UNIT_ALREADY_EMBEDDED", {
          hostUnitId: _0x106429.hostUnitId,
          embedId: _0x106429.embedId,
          childUnitId: _0x410172,
          duplicatedHostUnitId: _0x3ea63f.hostUnitId,
          duplicatedEmbedId: _0x3ea63f.embedId,
        });
      throw (
        (_0x1bcbc6.message =
          _0x1bcbc6.code +
          "\x20child\x20Unit\x20" +
          JSON.stringify(_0x410172) +
          "\x20is\x20already\x20used\x20by\x20Embed\x20" +
          JSON.stringify(_0x3ea63f.embedId) +
          "\x20and\x20cannot\x20also\x20be\x20used\x20by\x20Embed\x20" +
          JSON.stringify(_0x106429.embedId) +
          ".\x20Each\x20child\x20Unit\x20can\x20belong\x20to\x20only\x20one\x20active\x20Embed;\x20remove\x20the\x20existing\x20Embed\x20or\x20create\x20a\x20separate\x20child\x20Unit."),
        _0x1bcbc6
      );
    }
    let _0x4858a6 = this._capabilityRegistry["getCapability"]({
      hostType: _0x106429.hostType,
      childType: _0x466878.childType,
      entry: _0x106429.entry,
    });
    if (!_0x4858a6)
      throw new y("EMBED_CAPABILITY_NOT_SUPPORTED", {
        hostType: _0x106429.hostType,
        childType: _0x466878.childType,
        entry: _0x106429.entry,
      });
    return {
      descriptor: {
        embedId: _0x106429.embedId,
        hostUnitId: _0x106429.hostUnitId,
        hostType: _0x106429.hostType,
        hostAnchorId: _0x106429.hostAnchorId,
        entry: _0x106429.entry,
        source: _0x466878.source,
        childUnitId: _0x466878.childUnitId,
        childType: _0x466878.childType,
        mode: _0x106429.mode ?? "interactive",
        sourceMeta: _0x106429.sourceMeta ?? zt(_0x4858a6),
        displayTarget: st(_0x466878.childType, _0x106429.displayTarget),
      },
      resolvedSource: _0x466878,
    };
  }
  createEmbed(_0x492218) {
    let { descriptor: _0x4256eb, resolvedSource: _0x471735 } =
      this.prepareCreateEmbed(_0x492218);
    return (
      this._model["addDescriptor"](_0x492218.hostUnitId, _0x4256eb),
      {
        descriptor: this._model["getDescriptor"](
          _0x492218.hostUnitId,
          _0x492218.embedId,
        ),
        resolvedSource: _0x471735,
      }
    );
  }
  prepareCopyEmbed(_0x449842) {
    let _0x2e1686 = this._model["getDescriptor"](
      _0x449842.hostUnitId,
      _0x449842.sourceEmbedId,
    );
    if (!_0x2e1686) throw new y("EMBED_DESCRIPTOR_NOT_FOUND", _0x449842);
    if (_0x2e1686.hostType === e.UniverInstanceType["UNIVER_BOARD"])
      throw new y("EMBED_COPY_NOT_SUPPORTED", {
        hostUnitId: _0x449842.hostUnitId,
        embedId: _0x449842.sourceEmbedId,
      });
    return {
      ..._0x2e1686,
      embedId: _0x449842.nextEmbedId,
      hostAnchorId: _0x449842.nextHostAnchorId,
      childUnitId: undefined,
      lifecycle: "active",
      createdAt: undefined,
      updatedAt: undefined,
    };
  }
  copyEmbed(_0x7b75ca) {
    let _0x3214e1 = this.prepareCopyEmbed(_0x7b75ca);
    return (
      this._model["addDescriptor"](_0x7b75ca.hostUnitId, _0x3214e1),
      this._model["getDescriptor"](_0x7b75ca.hostUnitId, _0x7b75ca.nextEmbedId)
    );
  }
  removeEmbed(_0x48e52d) {
    this._model["softDeleteDescriptor"](
      _0x48e52d.hostUnitId,
      _0x48e52d.embedId,
    );
  }
};
U = B(
  [
    z(0, (0, e.Inject)(V)),
    z(1, (0, e.Inject)(H)),
    z(2, (0, e.Inject)(Ut)),
    z(3, (0, e.Inject)(Ht)),
  ],
  U,
);
const Wt = new WeakMap();
var W = class {
  constructor() {
    v(this, "_contributions", new Map());
  }
  register(_0x4a1227) {
    let _0x52b4d2 = this._key(_0x4a1227.hostType, _0x4a1227.entry);
    if (this._contributions["has"](_0x52b4d2))
      throw Error(
        "Embed host adapter contribution already registered: " + _0x52b4d2,
      );
    this._contributions["set"](_0x52b4d2, _0x4a1227);
  }
  get(_0x3841d9, _0x2a1e96) {
    return this._contributions["get"](this._key(_0x3841d9, _0x2a1e96));
  }
  list() {
    return [...this._contributions["values"]()];
  }
  readContext(_0x4263b9) {
    var _0x114eaa, _0x5ea94c;
    return (
      ((_0x114eaa = this.get(_0x4263b9.hostType, _0x4263b9.entry)) == null ||
      (_0x5ea94c = _0x114eaa.readContext) == null
        ? undefined
        : _0x5ea94c.call(_0x114eaa, {
            embedId: _0x4263b9.embedId,
            hostUnitId: _0x4263b9.hostUnitId,
            hostType: _0x4263b9.hostType,
            entry: _0x4263b9.entry,
            hostAnchorId: _0x4263b9.hostAnchorId,
            descriptor: _0x4263b9,
          })) ?? { resolved: false, entry: _0x4263b9.entry }
    );
  }
  createBoundsUpdatePlan(_0x22e3be, _0x35ba12) {
    let _0x5c701e = this.get(_0x22e3be.hostType, _0x22e3be.entry);
    if (!(_0x5c701e != null && _0x5c701e.createBoundsUpdatePlan))
      throw Error(
        "EMBED_HOST_BOUNDS_NOT_SUPPORTED:" +
          _0x22e3be.hostType +
          ":" +
          _0x22e3be.entry,
      );
    return _0x5c701e.createBoundsUpdatePlan({
      embedId: _0x22e3be.embedId,
      hostUnitId: _0x22e3be.hostUnitId,
      hostType: _0x22e3be.hostType,
      entry: _0x22e3be.entry,
      hostAnchorId: _0x22e3be.hostAnchorId,
      descriptor: _0x22e3be,
      bounds: _0x35ba12,
    });
  }
  createAnchor(_0x33d4cb) {
    let _0x52856e = this.get(_0x33d4cb.hostType, _0x33d4cb.entry);
    if (!_0x52856e)
      throw Error(
        "EMBED_HOST_ADAPTER_NOT_REGISTERED:" +
          _0x33d4cb.hostType +
          ":" +
          _0x33d4cb.entry,
      );
    if (!_0x52856e.createAnchor)
      throw Error(
        "EMBED_HOST_ADAPTER_CREATE_ANCHOR_NOT_IMPLEMENTED:" +
          _0x33d4cb.hostType +
          ":" +
          _0x33d4cb.entry,
      );
    return _0x52856e.createAnchor(_0x33d4cb);
  }
  createAnchorPlan(_0x64212b) {
    let _0x4553eb = this.get(_0x64212b.hostType, _0x64212b.entry);
    if (!_0x4553eb)
      throw Error(
        "EMBED_HOST_ADAPTER_NOT_REGISTERED:" +
          _0x64212b.hostType +
          ":" +
          _0x64212b.entry,
      );
    if (_0x4553eb.createAnchorPlan)
      return _0x4553eb.createAnchorPlan(_0x64212b);
    if (!_0x4553eb.createAnchor)
      throw Error(
        "EMBED_HOST_ADAPTER_CREATE_ANCHOR_NOT_IMPLEMENTED:" +
          _0x64212b.hostType +
          ":" +
          _0x64212b.entry,
      );
    let _0x3db179 =
        _0x64212b.requestedAnchorId ?? _0x64212b.embedId + "-anchor",
      _0x3f2541 = {
        embedId: _0x64212b.embedId,
        hostUnitId: _0x64212b.hostUnitId,
        hostType: _0x64212b.hostType,
        entry: _0x64212b.entry,
        hostAnchorId: _0x3db179,
      };
    return {
      hostAnchorId: _0x3db179,
      redoMutations: [{ id: d, params: _0x3f2541 }],
      undoMutations: [{ id: f, params: _0x3f2541 }],
    };
  }
  removeAnchor(_0x3e3b2c) {
    var _0x93a9bf, _0xbb5032;
    (_0x93a9bf = this.get(_0x3e3b2c.hostType, _0x3e3b2c.entry)) == null ||
      (_0xbb5032 = _0x93a9bf.removeAnchor) == null ||
      _0xbb5032.call(_0x93a9bf, _0x3e3b2c);
  }
  afterCreateAnchor(_0x37eed0) {
    var _0x11819f, _0x3a1b6a;
    (_0x11819f = this.get(_0x37eed0.hostType, _0x37eed0.entry)) == null ||
      (_0x3a1b6a = _0x11819f.afterCreateAnchor) == null ||
      _0x3a1b6a.call(_0x11819f, _0x37eed0);
  }
  afterRemoveAnchor(_0x5a6d4a) {
    var _0x20057d, _0x5248a5;
    (_0x20057d = this.get(_0x5a6d4a.hostType, _0x5a6d4a.entry)) == null ||
      (_0x5248a5 = _0x20057d.afterRemoveAnchor) == null ||
      _0x5248a5.call(_0x20057d, _0x5a6d4a);
  }
  activateAnchor(_0x5eed06) {
    var _0x4ca3de, _0x3c3dcc;
    (_0x4ca3de = this.get(_0x5eed06.hostType, _0x5eed06.entry)) == null ||
      (_0x3c3dcc = _0x4ca3de.activateAnchor) == null ||
      _0x3c3dcc.call(_0x4ca3de, _0x5eed06);
  }
  restoreAnchor(_0xc44fd1) {
    let _0x59ec18 = this.get(_0xc44fd1.hostType, _0xc44fd1.entry);
    if (!_0x59ec18)
      throw Error(
        "EMBED_HOST_ADAPTER_NOT_REGISTERED:" +
          _0xc44fd1.hostType +
          ":" +
          _0xc44fd1.entry,
      );
    if (!_0x59ec18.restoreAnchor)
      throw Error(
        "EMBED_HOST_ADAPTER_RESTORE_ANCHOR_NOT_IMPLEMENTED:" +
          _0xc44fd1.hostType +
          ":" +
          _0xc44fd1.entry,
      );
    return _0x59ec18.restoreAnchor(_0xc44fd1);
  }
  removeAnchorPlan(_0x533b04) {
    let _0x423059 = this.get(_0x533b04.hostType, _0x533b04.entry);
    if (_0x423059 != null && _0x423059.removeAnchorPlan)
      return _0x423059.removeAnchorPlan(_0x533b04);
    let _0xdd9cf0 = {
      embedId: _0x533b04.embedId,
      hostUnitId: _0x533b04.hostUnitId,
      hostType: _0x533b04.hostType,
      entry: _0x533b04.entry,
      hostAnchorId: _0x533b04.hostAnchorId,
    };
    return {
      redoMutations: [{ id: f, params: _0xdd9cf0 }],
      undoMutations: [{ id: d, params: _0xdd9cf0 }],
    };
  }
  _key(_0x3cb468, _0x2e54bd) {
    return _0x3cb468 + ":" + _0x2e54bd;
  }
};
function Gt(_0x3f05fd, _0x59d5dd) {
  if (_0x3f05fd.has(W)) {
    let _0x12a93b = _0x3f05fd.get(W);
    _0x59d5dd.forEach((_0x541a8a) => qt(_0x12a93b, _0x541a8a));
    return;
  }
  let _0x2b49b2 = _0x3f05fd,
    _0x3cfcfd = Wt.get(_0x2b49b2) ?? [];
  (_0x59d5dd.forEach((_0x223ff9) => {
    _0x3cfcfd.some((_0x16e39c) => Jt(_0x16e39c, _0x223ff9)) ||
      _0x3cfcfd.push(_0x223ff9);
  }),
    Wt.set(_0x2b49b2, _0x3cfcfd));
}
function Kt(_0x3849ac) {
  if (!_0x3849ac.has(W)) return;
  let _0x138093 = _0x3849ac,
    _0x7c9e2c = Wt.get(_0x138093) ?? [];
  if (!_0x7c9e2c.length) return;
  let _0x3c1589 = _0x3849ac.get(W);
  (_0x7c9e2c.forEach((_0x16d2f3) => qt(_0x3c1589, _0x16d2f3)),
    Wt.delete(_0x138093));
}
function qt(_0x134ca0, _0x20468e) {
  _0x134ca0.get(_0x20468e.hostType, _0x20468e.entry) ||
    _0x134ca0.register(_0x20468e);
}
function Jt(_0x12b456, _0x4a724e) {
  return (
    _0x12b456.hostType === _0x4a724e.hostType &&
    _0x12b456.entry === _0x4a724e.entry
  );
}
let G = class {
  constructor(
    _0x2de8e5,
    _0x5a3ba8,
    _0x38fcd1,
    _0x3b4e7c,
    _0x5c0d63,
    _0x1e79c9,
  ) {
    ((this._creationService = _0x2de8e5),
      (this._modelService = _0x5a3ba8),
      (this._univerInstanceService = _0x38fcd1),
      (this._hostAdapterRegistry = _0x3b4e7c),
      (this._commandService = _0x5c0d63),
      (this._undoRedoService = _0x1e79c9));
  }
  createEmbed(_0x2ae61d) {
    let _0x35053d = this._normalizeHostContext(_0x2ae61d),
      _0x49b109 = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: _0x2ae61d.embedId,
        hostUnitId: _0x2ae61d.hostUnitId,
        hostType: _0x2ae61d.hostType,
        entry: _0x2ae61d.entry,
        requestedAnchorId: _0x2ae61d.requestedHostAnchorId,
        hostContext: _0x35053d,
      }),
      _0x346479 = this._creationService["prepareCreateEmbed"]({
        ..._0x2ae61d,
        hostContext: _0x35053d,
        hostAnchorId: _0x49b109.hostAnchorId,
      }),
      _0x1b7f6f = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: _0x2ae61d.embedId,
        hostUnitId: _0x2ae61d.hostUnitId,
        hostType: _0x2ae61d.hostType,
        entry: _0x2ae61d.entry,
        requestedAnchorId: _0x346479.descriptor["hostAnchorId"],
        hostContext: _0x35053d,
        descriptor: _0x346479.descriptor,
      }),
      _0x57652e = [
        ..._0x1b7f6f.redoMutations,
        this._toSetDescriptorMutation(_0x346479.descriptor),
      ],
      _0x220a35 = [
        this._toSoftDeleteDescriptorMutation(_0x346479.descriptor),
        ..._0x1b7f6f.undoMutations,
      ];
    this._executeAndPushUndoRedo(
      _0x346479.descriptor["hostUnitId"],
      _0x57652e,
      _0x220a35,
    );
    let _0x14a930 = this._getDescriptor(
      _0x346479.descriptor["hostUnitId"],
      _0x346479.descriptor["embedId"],
    );
    return (this._afterCreateAnchor(_0x14a930, _0x35053d), _0x14a930);
  }
  copyEmbed(_0xbe8b3a) {
    let _0x53e555 = this._getDescriptor(
        _0xbe8b3a.hostUnitId,
        _0xbe8b3a.sourceEmbedId,
      ),
      _0x55e2a5 = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: _0xbe8b3a.nextEmbedId,
        hostUnitId: _0xbe8b3a.hostUnitId,
        hostType: _0x53e555.hostType,
        entry: _0x53e555.entry,
        requestedAnchorId: _0xbe8b3a.requestedHostAnchorId,
        hostContext: _0xbe8b3a.hostContext,
      }),
      _0x4c7eb6 = this._creationService["prepareCopyEmbed"]({
        hostUnitId: _0xbe8b3a.hostUnitId,
        sourceEmbedId: _0xbe8b3a.sourceEmbedId,
        nextEmbedId: _0xbe8b3a.nextEmbedId,
        nextHostAnchorId: _0x55e2a5.hostAnchorId,
      }),
      _0x1ecfe1 = this._hostAdapterRegistry["createAnchorPlan"]({
        embedId: _0xbe8b3a.nextEmbedId,
        hostUnitId: _0xbe8b3a.hostUnitId,
        hostType: _0x53e555.hostType,
        entry: _0x53e555.entry,
        requestedAnchorId: _0x4c7eb6.hostAnchorId,
        hostContext: _0xbe8b3a.hostContext,
        descriptor: _0x4c7eb6,
      }),
      _0x564e36 = [
        ..._0x1ecfe1.redoMutations,
        this._toSetDescriptorMutation(_0x4c7eb6),
      ],
      _0x4e103f = [
        this._toSoftDeleteDescriptorMutation(_0x4c7eb6),
        ..._0x1ecfe1.undoMutations,
      ];
    this._executeAndPushUndoRedo(_0x4c7eb6.hostUnitId, _0x564e36, _0x4e103f);
    let _0xc28de = this._getDescriptor(_0x4c7eb6.hostUnitId, _0x4c7eb6.embedId);
    return (this._afterCreateAnchor(_0xc28de, _0xbe8b3a.hostContext), _0xc28de);
  }
  removeEmbed(_0x49bdf2) {
    let _0x20b041 = this._modelService["getDescriptor"](
      _0x49bdf2.hostUnitId,
      _0x49bdf2.embedId,
    );
    if (!_0x20b041 || _0x20b041.lifecycle === "soft-delete d") return false;
    let _0x357183 = this._hostAdapterRegistry["removeAnchorPlan"]({
        embedId: _0x20b041.embedId,
        hostUnitId: _0x20b041.hostUnitId,
        hostType: _0x20b041.hostType,
        entry: _0x20b041.entry,
        hostAnchorId: _0x20b041.hostAnchorId,
        descriptor: _0x20b041,
      }),
      _0x50ed3e = [
        ..._0x357183.redoMutations,
        this._toSoftDeleteDescriptorMutation(_0x20b041),
      ],
      _0x3aa4eb = [
        ..._0x357183.undoMutations,
        this._toSetDescriptorMutation({ ..._0x20b041, lifecycle: "active" }),
      ];
    return (
      this._executeAndPushUndoRedo(_0x20b041.hostUnitId, _0x50ed3e, _0x3aa4eb),
      this._afterRemoveAnchor(_0x20b041),
      true
    );
  }
  setDisplayTarget(_0x45ca94) {
    let _0x24818d = this._modelService["getDescriptor"](
      _0x45ca94.hostUnitId,
      _0x45ca94.embedId,
    );
    if (!_0x24818d || _0x24818d.lifecycle === "soft-delete d") return false;
    let _0x5de847 = st(_0x24818d.childType, _0x45ca94.displayTarget);
    if (ct(_0x24818d.displayTarget, _0x5de847)) return true;
    let _0x38aef4 = { ..._0x24818d, displayTarget: _0x5de847 };
    return (
      this._executeAndPushUndoRedo(
        _0x24818d.hostUnitId,
        [this._toSetDescriptorMutation(_0x38aef4)],
        [this._toSetDescriptorMutation(_0x24818d)],
      ),
      true
    );
  }
  setBounds(_0x47fdc6) {
    rn(_0x47fdc6.bounds);
    let _0x381a83 = this._modelService["getDescriptor"](
      _0x47fdc6.hostUnitId,
      _0x47fdc6.embedId,
    );
    if (!_0x381a83 || _0x381a83.lifecycle === "soft-delete d") return false;
    let _0x2c4da7 = this._hostAdapterRegistry["createBoundsUpdatePlan"](
      _0x381a83,
      _0x47fdc6.bounds,
    );
    return (
      this._executeAndPushUndoRedo(
        _0x381a83.hostUnitId,
        _0x2c4da7.redoMutations,
        _0x2c4da7.undoMutations,
      ),
      true
    );
  }
  _executeAndPushUndoRedo(_0x2652c1, _0x4e321a, _0x1f441c) {
    let _0x180b08 = Xt(_0x4e321a),
      _0x37006a = Xt(_0x1f441c),
      _0x2268b6 = (0, e.sequenceExecute)(_0x180b08, this._commandService);
    if (!_0x2268b6.result) {
      let _0x104639 = _0x180b08[_0x2268b6.index],
        _0x286419 =
          _0x2268b6.error instanceof Error
            ? _0x2268b6.error["message"]
            : String(_0x2268b6.error ?? "");
      throw Error(
        "EMBED_HOST_LIFECYCLE_MUTATION_FAILED:" +
          ((_0x104639 == null ? undefined : _0x104639.id) ?? _0x2268b6.index) +
          ":" +
          _0x286419,
      );
    }
    this._undoRedoService["pushUndoRedo"]({
      unitID: _0x2652c1,
      undoMutations: _0x37006a,
      redoMutations: _0x180b08,
    });
  }
  _getDescriptor(_0x5083b8, _0x346821) {
    let _0x2beba9 = this._modelService["getDescriptor"](_0x5083b8, _0x346821);
    if (!_0x2beba9) throw Error("EMBED_DESCRIPTOR_NOT_FOUND");
    return _0x2beba9;
  }
  _normalizeHostContext(_0x380d7f) {
    b({
      hostUnitId: _0x380d7f.hostUnitId,
      entry: _0x380d7f.entry,
      hostContext: _0x380d7f.hostContext,
    });
    let _0x3b8e22 = _0x380d7f.hostContext
      ? { ..._0x380d7f.hostContext }
      : undefined;
    if (
      _0x380d7f.hostType === e.UniverInstanceType["UNIVER_SHEET"] &&
      _0x380d7f.entry === g.SheetsFloatingObject
    ) {
      if (
        typeof (_0x3b8e22 == null ? undefined : _0x3b8e22.subUnitId) == "string"
      )
        return _0x3b8e22;
      let _0x545f43 = Qt(this._univerInstanceService, _0x380d7f.hostUnitId);
      return _0x545f43 ? { ..._0x3b8e22, subUnitId: _0x545f43 } : _0x3b8e22;
    }
    if (
      _0x380d7f.hostType === e.UniverInstanceType["UNIVER_SLIDE"] &&
      _0x380d7f.entry === g.SlidesFloatingObject
    ) {
      if (
        typeof (_0x3b8e22 == null ? undefined : _0x3b8e22.subUnitId) == "string"
      )
        return _0x3b8e22;
      let _0x41d5d5 = $t(this._univerInstanceService, _0x380d7f.hostUnitId);
      return _0x41d5d5 ? { ..._0x3b8e22, subUnitId: _0x41d5d5 } : _0x3b8e22;
    }
    if (
      _0x380d7f.hostType === e.UniverInstanceType["UNIVER_BOARD"] &&
      _0x380d7f.entry === g.BoardsFloatingObject
    ) {
      if (
        typeof (_0x3b8e22 == null ? undefined : _0x3b8e22.subUnitId) == "string"
      )
        return _0x3b8e22;
      let _0x553f2b = Zt(this._univerInstanceService, _0x380d7f.hostUnitId);
      return _0x553f2b ? { ..._0x3b8e22, subUnitId: _0x553f2b } : _0x3b8e22;
    }
    return _0x3b8e22;
  }
  _toSetDescriptorMutation(_0x1f6c1f) {
    let _0x34c1d1 = { ..._0x1f6c1f };
    return (
      delete _0x34c1d1.childUnitId,
      {
        id: Pt.id,
        params: { unitId: _0x1f6c1f.hostUnitId, descriptor: _0x34c1d1 },
      }
    );
  }
  _toSoftDeleteDescriptorMutation(_0x1dc23d) {
    return {
      id: Ft.id,
      params: { unitId: _0x1dc23d.hostUnitId, embedId: _0x1dc23d.embedId },
    };
  }
  _afterCreateAnchor(_0x4c390c, _0xb3bdbd) {
    try {
      this._hostAdapterRegistry["afterCreateAnchor"]({
        embedId: _0x4c390c.embedId,
        hostUnitId: _0x4c390c.hostUnitId,
        hostType: _0x4c390c.hostType,
        entry: _0x4c390c.entry,
        hostAnchorId: _0x4c390c.hostAnchorId,
        hostContext: _0xb3bdbd,
        descriptor: _0x4c390c,
      });
    } catch {}
  }
  _afterRemoveAnchor(_0x2da05e) {
    try {
      this._hostAdapterRegistry["afterRemoveAnchor"]({
        embedId: _0x2da05e.embedId,
        hostUnitId: _0x2da05e.hostUnitId,
        hostType: _0x2da05e.hostType,
        entry: _0x2da05e.entry,
        hostAnchorId: _0x2da05e.hostAnchorId,
        descriptor: _0x2da05e,
      });
    } catch {}
  }
};
G = B(
  [
    z(0, (0, e.Inject)(U)),
    z(1, (0, e.Inject)(V)),
    z(2, e.IUniverInstanceService),
    z(3, (0, e.Inject)(W)),
    z(4, e.ICommandService),
    z(5, e.IUndoRedoService),
  ],
  G,
);
const Yt = new Set([Pt.id, Ft.id, p, m]);
function Xt(_0x432856) {
  return [
    ..._0x432856.filter((_0x2b61d2) => !Yt.has(_0x2b61d2.id)),
    ..._0x432856.filter((_0x276f5e) => Yt.has(_0x276f5e.id)),
  ];
}
function Zt(_0x59e26b, _0x36245a) {
  var _0x22fa5b;
  return (_0x22fa5b = _0x59e26b.getUnit(
    _0x36245a,
    e.UniverInstanceType["UNIVER_BOARD"],
  )) == null
    ? undefined
    : _0x22fa5b.getActivePageId();
}
function Qt(_0x6e3877, _0x668996) {
  var _0x5970cd, _0x2cf078, _0x24b610, _0x1e3d56;
  let _0x430ed1 = _0x6e3877.getUnit(
      _0x668996,
      e.UniverInstanceType["UNIVER_SHEET"],
    ),
    _0x4f9273 =
      _0x430ed1 == null || (_0x5970cd = _0x430ed1.getActiveSheet) == null
        ? undefined
        : _0x5970cd.call(_0x430ed1);
  return (
    (_0x4f9273 == null || (_0x2cf078 = _0x4f9273.getSheetId) == null
      ? undefined
      : _0x2cf078.call(_0x4f9273)) ??
    (_0x4f9273 == null || (_0x24b610 = _0x4f9273.getSheetID) == null
      ? undefined
      : _0x24b610.call(_0x4f9273)) ??
    (_0x4f9273 == null || (_0x1e3d56 = _0x4f9273.getConfig) == null
      ? undefined
      : _0x1e3d56.call(_0x4f9273).id)
  );
}
function $t(_0x29def2, _0x5a4967) {
  var _0x293fe9,
    _0x465d90,
    _0x346b65,
    _0x3fcb8c,
    _0xaec95d,
    _0x4d01b2,
    _0x443046;
  let _0x32f05c = _0x29def2.getUnit(
      _0x5a4967,
      e.UniverInstanceType["UNIVER_SLIDE"],
    ),
    _0x420600 = tn(
      (_0x32f05c == null ||
      (_0x293fe9 = _0x32f05c.pageManager) == null ||
      (_0x465d90 = _0x293fe9.getActiveSlide) == null
        ? undefined
        : _0x465d90.call(_0x293fe9)) ??
        (_0x32f05c == null || (_0x346b65 = _0x32f05c.getActivePage) == null
          ? undefined
          : _0x346b65.call(_0x32f05c)),
    );
  if (_0x420600) return _0x420600;
  let _0x9256d4 =
    _0x32f05c == null || (_0x3fcb8c = _0x32f05c.getSnapshot) == null
      ? undefined
      : _0x3fcb8c.call(_0x32f05c);
  return (
    (typeof (_0x9256d4 == null ? undefined : _0x9256d4.activeSlideId) ==
    "string"
      ? _0x9256d4.activeSlideId
      : undefined) ||
    (en(_0x9256d4 == null ? undefined : _0x9256d4.slideOrder) ??
      en(
        (_0xaec95d = nn(_0x9256d4 == null ? undefined : _0x9256d4.body)) == null
          ? undefined
          : _0xaec95d.pageOrder,
      )) ||
    (_0x32f05c == null ||
    (_0x4d01b2 = _0x32f05c.pageManager) == null ||
    (_0x443046 = _0x4d01b2.getSlides) == null ||
    (_0x443046 = _0x443046.call(_0x4d01b2)) == null
      ? undefined
      : _0x443046
          .map((_0x321c84) => tn(_0x321c84))
          .find((_0x3fed13) => typeof _0x3fed13 == "string"))
  );
}
function en(_0x214981) {
  return Array.isArray(_0x214981)
    ? _0x214981.find((_0x8c6d9a) => typeof _0x8c6d9a == "string")
    : undefined;
}
function tn(_0x345348) {
  let _0xf60dd8 = nn(_0x345348);
  if (typeof (_0xf60dd8 == null ? undefined : _0xf60dd8.id) == "string")
    return _0xf60dd8.id;
  let _0x198897 =
      typeof (_0xf60dd8 == null ? undefined : _0xf60dd8.getId) == "function"
        ? _0xf60dd8.getId
        : undefined,
    _0x1fc4dc = _0x198897 == null ? undefined : _0x198897.call(_0x345348);
  return typeof _0x1fc4dc == "string" ? _0x1fc4dc : undefined;
}
function nn(_0x352125) {
  return _0x352125 && typeof _0x352125 == "object" && !Array.isArray(_0x352125)
    ? _0x352125
    : undefined;
}
function rn(_0x2ec74e) {
  if (
    ![_0x2ec74e.left, _0x2ec74e.top, _0x2ec74e.width, _0x2ec74e.height].every(
      Number.isFinite,
    ) ||
    _0x2ec74e.width <= 0 ||
    _0x2ec74e.height <= 0
  )
    throw Error("EMBED_BOUNDS_INVALID");
}
const an = {
    id: "embed.command.create",
    type: e.CommandType["COMMAND"],
    handler: (_0x4a265c, _0x2e3908) =>
      _0x2e3908 ? _0x4a265c.get(G).createEmbed(_0x2e3908) : false,
  },
  on = {
    id: "embed.command.copy",
    type: e.CommandType["COMMAND"],
    handler: (_0xb92491, _0x23ae74) =>
      _0x23ae74 ? _0xb92491.get(G).copyEmbed(_0x23ae74) : false,
  },
  sn = {
    id: "embed.command.remove",
    type: e.CommandType["COMMAND"],
    handler: (_0x3d5d2e, _0x4fa1b8) =>
      _0x4fa1b8 ? _0x3d5d2e.get(G).removeEmbed(_0x4fa1b8) : false,
  },
  cn = {
    id: "embed.command.set-display-target",
    type: e.CommandType["COMMAND"],
    handler: (_0x19b0a2, _0x120d53) =>
      _0x120d53 ? _0x19b0a2.get(G).setDisplayTarget(_0x120d53) : false,
  },
  ln = {
    id: "embed.command.set-bounds",
    type: e.CommandType["COMMAND"],
    handler: (_0x201237, _0x42fabc) =>
      _0x42fabc ? _0x201237.get(G).setBounds(_0x42fabc) : false,
  },
  un = {
    id: "embed.command.set-sheet-placement",
    type: e.CommandType["COMMAND"],
    handler: (_0x52e726, _0x2825f7) => {
      if (!_0x2825f7) return false;
      let _0x1b9f70 = _0x52e726
        .get(V)
        .getDescriptor(_0x2825f7.hostUnitId, _0x2825f7.embedId);
      if (
        !_0x1b9f70 ||
        _0x1b9f70.lifecycle === "soft-delete d" ||
        _0x1b9f70.entry !== g.SheetsFloatingObject
      )
        return false;
      let _0x478fe8 = Te(
          {
            embedId: _0x1b9f70.embedId,
            hostUnitId: _0x1b9f70.hostUnitId,
            hostType: _0x1b9f70.hostType,
            entry: _0x1b9f70.entry,
            hostAnchorId: _0x1b9f70.hostAnchorId,
            descriptor: _0x1b9f70,
          },
          _0x2825f7.placement,
          _0x52e726.get(k),
          _0x52e726.get(n.ISheetDrawingService),
          _0x52e726.get(t.SheetSkeletonService),
        ),
        _0x172667 = _0x52e726.get(e.ICommandService);
      return (0, e.sequenceExecute)(_0x478fe8.redoMutations, _0x172667).result
        ? (_0x52e726
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x1b9f70.hostUnitId,
              undoMutations: _0x478fe8.undoMutations,
              redoMutations: _0x478fe8.redoMutations,
            }),
          true)
        : false;
    },
  };
var dn = "@univerjs-pro/embed",
  fn = "1.0.0-insiders.20260907-70fc579";
const pn = {
    id: p,
    type: e.CommandType["MUTATION"],
    handler: (_0x4cc814, _0x14bc57) =>
      _0x14bc57 ? (_0x4cc814.get(k).setAnchor(_0x14bc57.record), true) : false,
  },
  mn = {
    id: m,
    type: e.CommandType["MUTATION"],
    handler: (_0x500ad0, _0x43e9a8) =>
      _0x43e9a8
        ? (_0x500ad0
            .get(k)
            .removeAnchor(_0x43e9a8.hostUnitId, _0x43e9a8.hostAnchorId),
          true)
        : false,
  },
  hn = {
    id: d,
    type: e.CommandType["MUTATION"],
    handler: (_0x350b72, _0x4722e0) => {
      if (!_0x4722e0) return false;
      if (
        _0x350b72
          .get(W)
          .createAnchor({
            embedId: _0x4722e0.embedId,
            hostUnitId: _0x4722e0.hostUnitId,
            hostType: _0x4722e0.hostType,
            entry: _0x4722e0.entry,
            requestedAnchorId: _0x4722e0.hostAnchorId,
          }) !== _0x4722e0.hostAnchorId
      )
        throw Error("EMBED_HOST_ANCHOR_RESTORE_MISMATCH");
      return true;
    },
  },
  gn = {
    id: f,
    type: e.CommandType["MUTATION"],
    handler: (_0x535b56, _0x4a2225) =>
      _0x4a2225 ? (_0x535b56.get(W).removeAnchor(_0x4a2225), true) : false,
  },
  _n = {};
let vn = (function (_0x47fc75) {
  return ((_0x47fc75.RANGE = "range"), (_0x47fc75.TABLE = "table"), _0x47fc75);
})({});
var K = class extends Error {
  constructor(_0x12c222, _0xd265d0) {
    (super(_0x12c222),
      v(this, "code", undefined),
      v(this, "details", undefined),
      (this.name = "ReferencedUnitError"),
      (this.code = _0x12c222),
      (this.details = _0xd265d0));
  }
};
const q = (0, e.createIdentifier)(
  "univer.embed.referenced-unit-manager-service",
);
let yn = class extends e.Disposable {
  constructor(_0x5035ab, _0x34cd75, _0x69cb40, _0x519573) {
    (super(),
      (this._resourceManagerService = _0x5035ab),
      (this._referencedUnitManagerService = _0x34cd75),
      (this._embedModelService = _0x69cb40),
      (this._unitLeaseService = _0x519573),
      this._initResource());
  }
  _initResource() {
    this.disposeWithMe(
      this._resourceManagerService["registerPluginResource"]({
        pluginName: "UNIVER_EMBED_RESOURCE_PLUGIN",
        businesses: [
          e.UniverInstanceType["UNIVER_DOC"],
          e.UniverInstanceType["UNIVER_SHEET"],
          e.UniverInstanceType["UNIVER_BASE"],
          e.UniverInstanceType["UNIVER_SLIDE"],
          e.UniverInstanceType["UNIVER_BOARD"],
        ],
        toJson: (_0x4b7abb) => this._embedModelService["toJson"](_0x4b7abb),
        parseJson: (_0x5c8f6a) =>
          this._embedModelService["parseJson"](_0x5c8f6a),
        onLoad: (_0x2f8a9c, _0x553af3) =>
          this._embedModelService["loadUnit"](_0x2f8a9c, _0x553af3),
        onUnLoad: (_0x147304) => this._unloadUnit(_0x147304),
      }),
    );
  }
  _unloadUnit(_0x517680) {
    (this._embedModelService["unloadUnit"](_0x517680),
      this._unitLeaseService["releaseUnit"](_0x517680),
      this._referencedUnitManagerService["releaseUnit"](_0x517680));
  }
};
yn = B(
  [
    z(0, e.IResourceManagerService),
    z(1, (0, e.Inject)(q)),
    z(2, (0, e.Inject)(V)),
    z(3, (0, e.Inject)(Nt)),
  ],
  yn,
);
const bn = [
    {
      hostType: e.UniverInstanceType["UNIVER_DOC"],
      childType: e.UniverInstanceType["UNIVER_BOARD"],
      entry: g.DocsCustomBlock,
      mode: "float",
      layout: "content-bounds-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_DOC"],
      childType: e.UniverInstanceType["UNIVER_SHEET"],
      entry: g.DocsCustomBlock,
      mode: "float",
      layout: "docs-sticky-sheet",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_DOC"],
      childType: e.UniverInstanceType["UNIVER_BASE"],
      entry: g.DocsCustomBlock,
      mode: "float",
      layout: "docs-sticky-base",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_DOC"],
      childType: e.UniverInstanceType["UNIVER_SLIDE"],
      entry: g.DocsCustomBlock,
      mode: "float",
      layout: "aspect-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
  ],
  xn = [
    {
      hostType: e.UniverInstanceType["UNIVER_SHEET"],
      childType: e.UniverInstanceType["UNIVER_BOARD"],
      entry: g.SheetsFloatingObject,
      mode: "float",
      renderHost: "sheets-drawing-dom",
      layout: "content-bounds-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SHEET"],
      childType: e.UniverInstanceType["UNIVER_BOARD"],
      entry: g.SheetsSheetTab,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SHEET"],
      childType: e.UniverInstanceType["UNIVER_DOC"],
      entry: g.SheetsFloatingObject,
      mode: "float",
      renderHost: "sheets-drawing-dom",
      layout: "doc-width-scale",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SHEET"],
      childType: e.UniverInstanceType["UNIVER_SLIDE"],
      entry: g.SheetsFloatingObject,
      mode: "float",
      renderHost: "sheets-drawing-dom",
      layout: "aspect-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SHEET"],
      childType: e.UniverInstanceType["UNIVER_BASE"],
      entry: g.SheetsFloatingObject,
      mode: "float",
      renderHost: "sheets-drawing-dom",
      layout: "scroll-contained",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SHEET"],
      childType: e.UniverInstanceType["UNIVER_BASE"],
      entry: g.SheetsSheetTab,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SHEET"],
      childType: e.UniverInstanceType["UNIVER_DOC"],
      entry: g.SheetsSheetTab,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SHEET"],
      childType: e.UniverInstanceType["UNIVER_SLIDE"],
      entry: g.SheetsSheetTab,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
  ],
  Sn = [
    {
      hostType: e.UniverInstanceType["UNIVER_SLIDE"],
      childType: e.UniverInstanceType["UNIVER_BOARD"],
      entry: g.SlidesFloatingObject,
      mode: "float",
      renderHost: "slides-object-dom",
      layout: "content-bounds-fit",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SLIDE"],
      childType: e.UniverInstanceType["UNIVER_BOARD"],
      entry: g.SlidesPageListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SLIDE"],
      childType: e.UniverInstanceType["UNIVER_SHEET"],
      entry: g.SlidesFloatingObject,
      mode: "float",
      renderHost: "slides-object-dom",
      layout: "scroll-contained",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SLIDE"],
      childType: e.UniverInstanceType["UNIVER_BASE"],
      entry: g.SlidesFloatingObject,
      mode: "float",
      renderHost: "slides-object-dom",
      layout: "scroll-contained",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SLIDE"],
      childType: e.UniverInstanceType["UNIVER_DOC"],
      entry: g.SlidesFloatingObject,
      mode: "float",
      renderHost: "slides-object-dom",
      layout: "doc-width-scale",
      menuBehavior: "floating",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SLIDE"],
      childType: e.UniverInstanceType["UNIVER_SHEET"],
      entry: g.SlidesPageListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SLIDE"],
      childType: e.UniverInstanceType["UNIVER_BASE"],
      entry: g.SlidesPageListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_SLIDE"],
      childType: e.UniverInstanceType["UNIVER_DOC"],
      entry: g.SlidesPageListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
  ],
  Cn = [
    {
      hostType: e.UniverInstanceType["UNIVER_BASE"],
      childType: e.UniverInstanceType["UNIVER_BOARD"],
      entry: g.BasesTableListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_BASE"],
      childType: e.UniverInstanceType["UNIVER_SHEET"],
      entry: g.BasesTableListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_BASE"],
      childType: e.UniverInstanceType["UNIVER_DOC"],
      entry: g.BasesTableListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
    {
      hostType: e.UniverInstanceType["UNIVER_BASE"],
      childType: e.UniverInstanceType["UNIVER_SLIDE"],
      entry: g.BasesTableListBlock,
      mode: "tab",
      layout: "tab-peer",
      menuBehavior: "host-override",
      nestedEmbed: false,
    },
  ],
  wn = [
    e.UniverInstanceType["UNIVER_SHEET"],
    e.UniverInstanceType["UNIVER_DOC"],
    e.UniverInstanceType["UNIVER_SLIDE"],
    e.UniverInstanceType["UNIVER_BASE"],
  ].map((_0x1d4bed) => ({
    hostType: e.UniverInstanceType["UNIVER_BOARD"],
    childType: _0x1d4bed,
    entry: g.BoardsFloatingObject,
    mode: "float",
    renderHost: "boards-object-dom",
    layout:
      _0x1d4bed === e.UniverInstanceType["UNIVER_DOC"]
        ? "doc-width-scale"
        : _0x1d4bed === e.UniverInstanceType["UNIVER_SLIDE"]
          ? "aspect-fit"
          : "scroll-contained",
    menuBehavior: "floating",
    nestedEmbed: false,
  }));
function Tn() {
  return [...bn, ...xn, ...Sn, ...Cn, ...wn];
}
function En(_0x257867, _0xe4b6f9) {
  return {
    hostType: e.UniverInstanceType["UNIVER_BASE"],
    entry: g.BasesTableListBlock,
    createAnchorPlan: (_0x421cb3) =>
      Rn(On(_0x421cb3, _0xe4b6f9), "EMBED_BASES_TABLE_LIST_ANCHOR_UNAVAILABLE"),
    restoreAnchor: (_0x47dbce) =>
      zn(jn(_0x47dbce, _0xe4b6f9), "EMBED_BASES_TABLE_LIST_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: (_0x2fa5a3) => {
      let _0x456ac5 =
        (_0x257867 == null
          ? undefined
          : _0x257867.getAnchor(
              _0x2fa5a3.hostUnitId,
              _0x2fa5a3.hostAnchorId,
            )) ?? An(_0x2fa5a3);
      return (
        kn(_0x2fa5a3, _0x456ac5, _0xe4b6f9) ?? {
          redoMutations: [
            {
              id: "embed.mutation.remove-host-anchor-record",
              params: {
                hostUnitId: _0x2fa5a3.hostUnitId,
                hostAnchorId: _0x2fa5a3.hostAnchorId,
              },
            },
          ],
          undoMutations: [
            {
              id: "embed.mutation.set-host-anchor-record",
              params: { record: { ..._0x456ac5, lifecycle: "active" } },
            },
          ],
        }
      );
    },
    readContext: (_0x3ec325) => Dn(_0x3ec325, _0xe4b6f9),
  };
}
function Dn(_0x5d93bb, _0x40be3d) {
  let _0x494e8a = Mn(_0x40be3d, _0x5d93bb.hostUnitId),
    _0x19591c =
      _0x494e8a == null ? undefined : _0x494e8a.tables[_0x5d93bb.hostAnchorId],
    _0xaf649a =
      (_0x494e8a == null
        ? undefined
        : _0x494e8a.tableOrder["indexOf"](_0x5d93bb.hostAnchorId)) ?? -1;
  return !_0x19591c || _0xaf649a < 0
    ? { resolved: false, entry: g.BasesTableListBlock }
    : {
        resolved: true,
        entry: g.BasesTableListBlock,
        tableId: _0x5d93bb.hostAnchorId,
        index: _0xaf649a,
        name: _0x19591c.name,
      };
}
function On(_0x12cc42, _0x2e5d9a) {
  var _0x2aefec, _0x263bcb;
  let _0x3f61c5 = Mn(_0x2e5d9a, _0x12cc42.hostUnitId);
  if (!_0x3f61c5) return;
  b({
    hostUnitId: _0x12cc42.hostUnitId,
    entry: _0x12cc42.entry,
    hostContext: _0x12cc42.hostContext,
    maxIndex: _0x3f61c5.tableOrder["length"],
  });
  let _0x55c102 = An(_0x12cc42),
    _0x3b0bbe = Pn(_0x55c102.hostContext, "tableName") ?? _0x12cc42.embedId,
    _0x136d05 = (0, c.createEmbedBasesTable)({
      embedId: _0x55c102.embedId,
      hostAnchorId: _0x55c102.hostAnchorId,
      name: _0x3b0bbe,
      childUnitId:
        (_0x2aefec = _0x12cc42.descriptor) == null
          ? undefined
          : _0x2aefec.childUnitId,
      childType:
        (_0x263bcb = _0x12cc42.descriptor) == null
          ? undefined
          : _0x263bcb.childType,
    }),
    _0x24238d = In(
      Nn(_0x55c102.hostContext, "tableIndex") ?? _0x3f61c5.tableOrder["length"],
      _0x3f61c5.tableOrder["length"],
    ),
    _0x5eb40a = (0, c.createEmbedBasesTableAddMutation)({
      unitId: _0x55c102.hostUnitId,
      snapshot: _0x3f61c5,
      table: _0x136d05,
      index: _0x24238d,
    });
  return (
    (_0x55c102.hostContext = {
      ..._0x55c102.hostContext,
      tableIndex: _0x24238d,
      tableName: _0x3b0bbe,
    }),
    {
      hostAnchorId: _0x55c102.hostAnchorId,
      redoMutations: [_0x5eb40a, { id: p, params: { record: _0x55c102 } }],
      undoMutations: [
        {
          id: m,
          params: {
            hostUnitId: _0x55c102.hostUnitId,
            hostAnchorId: _0x55c102.hostAnchorId,
          },
        },
        Ln(_0x3f61c5, _0x5eb40a),
      ],
    }
  );
}
function kn(_0x545dc9, _0x47ff9a, _0x2550e9) {
  let _0x2649d7 = Mn(_0x2550e9, _0x545dc9.hostUnitId),
    _0x5a89f3 =
      _0x2649d7 == null ? undefined : _0x2649d7.tables[_0x545dc9.hostAnchorId];
  if (!_0x2649d7 || !_0x5a89f3) return;
  let _0x41fdfc = _0x2649d7.tableOrder["indexOf"](_0x545dc9.hostAnchorId),
    _0x2e6067 = (0, c.createEmbedBasesTableRemoveMutation)({
      unitId: _0x545dc9.hostUnitId,
      snapshot: _0x2649d7,
      tableId: _0x545dc9.hostAnchorId,
    });
  if (_0x2e6067)
    return {
      redoMutations: [
        {
          id: m,
          params: {
            hostUnitId: _0x545dc9.hostUnitId,
            hostAnchorId: _0x545dc9.hostAnchorId,
          },
        },
        _0x2e6067,
      ],
      undoMutations: [
        Ln(_0x2649d7, _0x2e6067),
        {
          id: p,
          params: {
            record: {
              ..._0x47ff9a,
              lifecycle: "active",
              hostContext: { ..._0x47ff9a.hostContext, tableIndex: _0x41fdfc },
            },
          },
        },
      ],
    };
}
function An(_0x349f9a) {
  return {
    hostAnchorId:
      _0x349f9a.requestedAnchorId ?? "bases-table-list:" + _0x349f9a.embedId,
    embedId: _0x349f9a.embedId,
    hostUnitId: _0x349f9a.hostUnitId,
    hostType: _0x349f9a.hostType,
    entry: _0x349f9a.entry,
    kind: "bases-table-list-block",
    hostContext: _0x349f9a.hostContext,
    lifecycle: "active",
  };
}
function jn(_0x4b9321, _0x237c4b) {
  let _0x151e60 = Mn(_0x237c4b, _0x4b9321.hostUnitId);
  if (!_0x151e60) return;
  let _0x4ab6c9 = An({
      ..._0x4b9321,
      requestedAnchorId: _0x4b9321.hostAnchorId,
    }),
    _0x3976c2 = Pn(_0x4ab6c9.hostContext, "tableName") ?? _0x4b9321.embedId,
    _0x5d4dc4 = In(
      Nn(_0x4ab6c9.hostContext, "tableIndex") ?? _0x151e60.tableOrder["length"],
      _0x151e60.tableOrder["length"],
    );
  if (!_0x151e60.tables[_0x4ab6c9.hostAnchorId]) {
    var _0x407e7d, _0x5278bc;
    ((_0x151e60.tables[_0x4ab6c9.hostAnchorId] = (0, c.createEmbedBasesTable)({
      embedId: _0x4ab6c9.embedId,
      hostAnchorId: _0x4ab6c9.hostAnchorId,
      name: _0x3976c2,
      childUnitId:
        (_0x407e7d = _0x4b9321.descriptor) == null
          ? undefined
          : _0x407e7d.childUnitId,
      childType:
        (_0x5278bc = _0x4b9321.descriptor) == null
          ? undefined
          : _0x5278bc.childType,
    })),
      (_0x151e60.tableOrder = Fn(
        _0x151e60.tableOrder,
        _0x4ab6c9.hostAnchorId,
        _0x5d4dc4,
      )));
  }
  return {
    ..._0x4ab6c9,
    hostContext: {
      ..._0x4ab6c9.hostContext,
      tableIndex: _0x5d4dc4,
      tableName: _0x3976c2,
    },
  };
}
function Mn(_0x4dfaa4, _0x1cab52) {
  var _0xf8f13;
  return _0x4dfaa4 == null ||
    (_0xf8f13 = _0x4dfaa4.getUnit(
      _0x1cab52,
      e.UniverInstanceType["UNIVER_BASE"],
    )) == null
    ? undefined
    : _0xf8f13.getSnapshot();
}
function Nn(_0x2c53ff, _0x133051) {
  return typeof (_0x2c53ff == null ? undefined : _0x2c53ff[_0x133051]) ==
    "number"
    ? _0x2c53ff[_0x133051]
    : undefined;
}
function Pn(_0x55cf3e, _0x1c9216) {
  return typeof (_0x55cf3e == null ? undefined : _0x55cf3e[_0x1c9216]) ==
    "string"
    ? _0x55cf3e[_0x1c9216]
    : undefined;
}
function Fn(_0x6547e0, _0x54fd93, _0x2b22dd) {
  let _0x284219 = _0x6547e0.filter((_0x4c74d4) => _0x4c74d4 !== _0x54fd93);
  return (
    _0x284219.splice(
      Math.max(0, Math.min(_0x2b22dd, _0x284219.length)),
      0,
      _0x54fd93,
    ),
    _0x284219
  );
}
function In(_0x198937, _0x133b60) {
  return Math.max(0, Math.min(_0x198937, _0x133b60));
}
function Ln(_0x4d724c, _0x2e6392) {
  return {
    id: _0x2e6392.id,
    params: {
      ..._0x2e6392.params,
      op: new c["BaseJson1OpApplier"]().invertOp(
        _0x4d724c,
        _0x2e6392.params["op"],
      ),
    },
  };
}
function Rn(_0x4895b3, _0x717aba) {
  if (!_0x4895b3) throw Error(_0x717aba);
  return _0x4895b3;
}
function zn(_0x31f97b, _0x17725b) {
  if (!_0x31f97b) throw Error(_0x17725b);
  return _0x31f97b;
}
function Bn(_0x166b44, _0x2f7563, _0x46d688) {
  return {
    hostType: e.UniverInstanceType["UNIVER_BOARD"],
    entry: g.BoardsFloatingObject,
    createAnchorPlan: (_0x1a8065) =>
      tr(Hn(_0x1a8065), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"),
    restoreAnchor: (_0x5d85ab) =>
      tr(
        Kn(_0x5d85ab, _0x2f7563, Vn(_0x46d688)),
        "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE",
      ),
    removeAnchorPlan: (_0x3d6448) => {
      let _0x280383 =
        (_0x166b44 == null
          ? undefined
          : _0x166b44.getAnchor(
              _0x3d6448.hostUnitId,
              _0x3d6448.hostAnchorId,
            )) ??
        Zn({ ..._0x3d6448, requestedAnchorId: _0x3d6448.hostAnchorId });
      return (
        Un(_0x3d6448, _0x280383, _0x2f7563, Vn(_0x46d688)) ??
        $n(_0x3d6448, _0x280383)
      );
    },
    readContext: (_0x3bf2b5) =>
      Wn(_0x3bf2b5, _0x166b44, _0x2f7563, Vn(_0x46d688)),
    createBoundsUpdatePlan: (_0x4b0602) =>
      Gn(
        _0x4b0602,
        _0x166b44,
        _0x2f7563,
        tr(Vn(_0x46d688), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"),
      ),
  };
}
function Vn(_0x15abe4) {
  return typeof _0x15abe4 == "function" ? _0x15abe4() : _0x15abe4;
}
function Hn(_0x22fc2d) {
  b({
    hostUnitId: _0x22fc2d.hostUnitId,
    entry: _0x22fc2d.entry,
    hostContext: _0x22fc2d.hostContext,
  });
  let _0x4cc5f6 = Zn(_0x22fc2d),
    _0x4000ef = er(_0x4cc5f6.hostContext, "subUnitId");
  if (!_0x4000ef) return;
  let _0x47e812 = Qn(_0x22fc2d, _0x4cc5f6);
  return {
    hostAnchorId: _0x4cc5f6.hostAnchorId,
    redoMutations: [
      {
        id: a.AddBoardElementMutation["id"],
        params: {
          unitId: _0x4cc5f6.hostUnitId,
          subUnitId: _0x4000ef,
          element: _0x47e812,
          allowEmbedAnchor: true,
        },
      },
      { id: p, params: { record: _0x4cc5f6 } },
    ],
    undoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x4cc5f6.hostUnitId,
          hostAnchorId: _0x4cc5f6.hostAnchorId,
        },
      },
      {
        id: a.RemoveBoardElementMutation["id"],
        params: {
          unitId: _0x4cc5f6.hostUnitId,
          subUnitId: _0x4000ef,
          elementId: _0x4cc5f6.hostAnchorId,
        },
      },
    ],
  };
}
function Un(_0x3d8e54, _0x1ac9b0, _0xcf7a8f, _0x566a2d) {
  var _0x3e589a;
  let _0x52168f = qn(
    _0x3d8e54.hostUnitId,
    _0x3d8e54.hostAnchorId,
    er(_0x1ac9b0.hostContext, "subUnitId"),
    _0xcf7a8f,
    _0x566a2d,
  );
  if (!_0x52168f) return;
  let _0x238510 =
    _0x566a2d == null ||
    (_0x3e589a = _0x566a2d.getElementById(
      _0x1ac9b0.hostUnitId,
      _0x52168f,
      _0x1ac9b0.hostAnchorId,
    )) == null
      ? undefined
      : _0x3e589a.element;
  if (!_0x238510 || !(0, a.isEmbedBoardsFloatingElement)(_0x238510)) return;
  let _0x1accf5 = _0x566a2d.getElementData(_0x1ac9b0.hostUnitId, _0x52168f),
    _0x364453 = _0x566a2d.getElementOrder(_0x1ac9b0.hostUnitId, _0x52168f),
    _0x3cfcd5 = new Set(
      (0, a.collectBoardElementIdsForRemoveWithBoundConnectors)(
        _0x1accf5,
        _0x364453,
        [_0x238510.id],
      ),
    ),
    _0x44d82e = _0x364453.flatMap((_0x57443f, _0x1e5865) =>
      _0x3cfcd5.has(_0x57443f)
        ? [
            {
              id: a.AddBoardElementMutation["id"],
              params: {
                unitId: _0x1ac9b0.hostUnitId,
                subUnitId: _0x52168f,
                element: e.Tools["deepClone"](_0x1accf5[_0x57443f].element),
                insertIndex: _0x1e5865,
                allowEmbedAnchor: true,
              },
            },
          ]
        : [],
    );
  return {
    redoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x1ac9b0.hostUnitId,
          hostAnchorId: _0x1ac9b0.hostAnchorId,
        },
      },
      {
        id: a.RemoveBoardElementMutation["id"],
        params: {
          unitId: _0x1ac9b0.hostUnitId,
          subUnitId: _0x52168f,
          elementId: _0x1ac9b0.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      ..._0x44d82e,
      {
        id: p,
        params: {
          record: {
            ..._0x1ac9b0,
            hostContext: { ..._0x1ac9b0.hostContext, subUnitId: _0x52168f },
            lifecycle: "active",
          },
        },
      },
    ],
  };
}
function Wn(_0x184e3c, _0x4d3f5e, _0xdd65c8, _0x151669) {
  let _0x3ef91c =
      _0x4d3f5e == null
        ? undefined
        : _0x4d3f5e.getAnchor(_0x184e3c.hostUnitId, _0x184e3c.hostAnchorId),
    _0x246e33 = Jn(
      _0x184e3c.hostUnitId,
      _0x184e3c.hostAnchorId,
      er(_0x3ef91c == null ? undefined : _0x3ef91c.hostContext, "subUnitId"),
      _0xdd65c8,
      _0x151669,
    ),
    _0x34e19d = _0x246e33 ? Yn(_0x246e33.element) : undefined;
  return !_0x246e33 || !_0x34e19d
    ? { resolved: false, entry: g.BoardsFloatingObject }
    : {
        resolved: true,
        entry: g.BoardsFloatingObject,
        subUnitId: _0x246e33.subUnitId,
        bounds: _0x34e19d,
      };
}
function Gn(_0x4cc622, _0x4bc0a5, _0x2e2fc0, _0xbaf237) {
  Xn(_0x4cc622.bounds);
  let _0x2ca72f =
      _0x4bc0a5 == null
        ? undefined
        : _0x4bc0a5.getAnchor(_0x4cc622.hostUnitId, _0x4cc622.hostAnchorId),
    _0x346564 = Jn(
      _0x4cc622.hostUnitId,
      _0x4cc622.hostAnchorId,
      er(_0x2ca72f == null ? undefined : _0x2ca72f.hostContext, "subUnitId"),
      _0x2e2fc0,
      _0xbaf237,
    );
  if (!_0x346564) throw Error("EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE");
  let _0x2678af = {
      ..._0x346564.element,
      transform: { ..._0x346564.element["transform"], ..._0x4cc622.bounds },
    },
    _0xa95cbc = {
      ...(_0x2ca72f ??
        Zn({
          ..._0x4cc622,
          requestedAnchorId: _0x4cc622.hostAnchorId,
          hostContext: { subUnitId: _0x346564.subUnitId },
        })),
      hostContext: {
        ...(_0x2ca72f == null ? undefined : _0x2ca72f.hostContext),
        subUnitId: _0x346564.subUnitId,
        ..._0x4cc622.bounds,
      },
      lifecycle: "active",
    };
  return {
    redoMutations: [
      {
        id: a.UpdateBoardElementMutation["id"],
        params: {
          unitId: _0x4cc622.hostUnitId,
          subUnitId: _0x346564.subUnitId,
          elementId: _0x4cc622.hostAnchorId,
          element: _0x2678af,
        },
      },
      { id: p, params: { record: _0xa95cbc } },
    ],
    undoMutations: [
      _0x2ca72f
        ? { id: p, params: { record: _0x2ca72f } }
        : {
            id: m,
            params: {
              hostUnitId: _0x4cc622.hostUnitId,
              hostAnchorId: _0x4cc622.hostAnchorId,
            },
          },
      {
        id: a.UpdateBoardElementMutation["id"],
        params: {
          unitId: _0x4cc622.hostUnitId,
          subUnitId: _0x346564.subUnitId,
          elementId: _0x4cc622.hostAnchorId,
          element: _0x346564.element,
        },
      },
    ],
  };
}
function Kn(_0x59bc1a, _0x311616, _0x40b9f4) {
  let _0x312470 = qn(
    _0x59bc1a.hostUnitId,
    _0x59bc1a.hostAnchorId,
    er(_0x59bc1a.hostContext, "subUnitId"),
    _0x311616,
    _0x40b9f4,
  );
  if (_0x312470)
    return Zn({
      ..._0x59bc1a,
      requestedAnchorId: _0x59bc1a.hostAnchorId,
      hostContext: { ..._0x59bc1a.hostContext, subUnitId: _0x312470 },
    });
}
function qn(_0x5c027b, _0x5de8ad, _0x19b68b, _0x1ea077, _0x4ff3f4) {
  if (!_0x4ff3f4) return;
  let _0x5ae834 = (_0x116e46) => {
    var _0x289984;
    return (0, a.isEmbedBoardsFloatingElement)(
      (_0x289984 = _0x4ff3f4.getElementById(_0x5c027b, _0x116e46, _0x5de8ad)) ==
        null
        ? undefined
        : _0x289984.element,
    );
  };
  if (_0x19b68b && _0x5ae834(_0x19b68b)) return _0x19b68b;
  let _0xdc7900 =
    _0x1ea077 == null
      ? undefined
      : _0x1ea077.getUnit(_0x5c027b, e.UniverInstanceType["UNIVER_BOARD"]);
  return _0xdc7900 == null
    ? undefined
    : _0xdc7900.getSnapshot().pageOrder["find"](_0x5ae834);
}
function Jn(_0x3f9101, _0x5aa2f7, _0x5889dc, _0x486f07, _0x4d0d8a) {
  if (!_0x4d0d8a) return;
  let _0x4237bb = (_0x180e95) => {
    var _0x589a71;
    return (_0x589a71 = _0x4d0d8a.getElementById(
      _0x3f9101,
      _0x180e95,
      _0x5aa2f7,
    )) == null
      ? undefined
      : _0x589a71.element;
  };
  if (_0x5889dc) {
    let _0x4259f4 = _0x4237bb(_0x5889dc);
    if (_0x4259f4 && (0, a.isEmbedBoardsFloatingElement)(_0x4259f4))
      return { subUnitId: _0x5889dc, element: _0x4259f4 };
  }
  let _0x3f1081 =
    _0x486f07 == null
      ? undefined
      : _0x486f07.getUnit(_0x3f9101, e.UniverInstanceType["UNIVER_BOARD"]);
  for (let _0x4f87a8 of (_0x3f1081 == null
    ? undefined
    : _0x3f1081.getSnapshot().pageOrder) ?? []) {
    let _0x137646 = _0x4237bb(_0x4f87a8);
    if (_0x137646 && (0, a.isEmbedBoardsFloatingElement)(_0x137646))
      return { subUnitId: _0x4f87a8, element: _0x137646 };
  }
}
function Yn(_0x2dabf5) {
  let {
    left: _0x51cdac,
    top: _0x4c8171,
    width: _0x49d141,
    height: _0x45a7a0,
  } = _0x2dabf5.transform;
  if (
    _0x51cdac == null ||
    _0x4c8171 == null ||
    _0x49d141 == null ||
    _0x45a7a0 == null
  )
    return;
  let _0x5a039a = {
    left: _0x51cdac,
    top: _0x4c8171,
    width: _0x49d141,
    height: _0x45a7a0,
  };
  try {
    return (Xn(_0x5a039a), _0x5a039a);
  } catch {
    return;
  }
}
function Xn(_0x5475b2) {
  if (
    ![_0x5475b2.left, _0x5475b2.top, _0x5475b2.width, _0x5475b2.height].every(
      Number.isFinite,
    ) ||
    _0x5475b2.width <= 0 ||
    _0x5475b2.height <= 0
  )
    throw Error("EMBED_BOUNDS_INVALID");
}
function Zn(_0x2c8e28) {
  return {
    hostAnchorId: _0x2c8e28.requestedAnchorId ?? _0x2c8e28.embedId + "-anchor",
    embedId: _0x2c8e28.embedId,
    hostUnitId: _0x2c8e28.hostUnitId,
    hostType: e.UniverInstanceType["UNIVER_BOARD"],
    entry: g.BoardsFloatingObject,
    kind: g.BoardsFloatingObject,
    hostContext: {
      ..._0x2c8e28.hostContext,
      left: J(_0x2c8e28.hostContext, "left") ?? 80,
      top: J(_0x2c8e28.hostContext, "top") ?? 80,
      width: J(_0x2c8e28.hostContext, "width") ?? 560,
      height: J(_0x2c8e28.hostContext, "height") ?? 360,
    },
    lifecycle: "active",
  };
}
function Qn(_0xc6fb9a, _0x9664c2) {
  var _0x4dbbe5, _0x40b554;
  return (0, a.createEmbedBoardsFloatingElement)({
    embedId: _0x9664c2.embedId,
    hostAnchorId: _0x9664c2.hostAnchorId,
    childUnitId:
      (_0x4dbbe5 = _0xc6fb9a.descriptor) == null
        ? undefined
        : _0x4dbbe5.childUnitId,
    childType:
      (_0x40b554 = _0xc6fb9a.descriptor) == null
        ? undefined
        : _0x40b554.childType,
    left: J(_0x9664c2.hostContext, "left"),
    top: J(_0x9664c2.hostContext, "top"),
    width: J(_0x9664c2.hostContext, "width"),
    height: J(_0x9664c2.hostContext, "height"),
  });
}
function $n(_0x1f50fc, _0x1f7743) {
  return {
    redoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x1f50fc.hostUnitId,
          hostAnchorId: _0x1f50fc.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      { id: p, params: { record: { ..._0x1f7743, lifecycle: "active" } } },
    ],
  };
}
function J(_0x2315ff, _0x1fc7d8) {
  return typeof (_0x2315ff == null ? undefined : _0x2315ff[_0x1fc7d8]) ==
    "number"
    ? _0x2315ff[_0x1fc7d8]
    : undefined;
}
function er(_0x298c88, _0x26beeb) {
  return typeof (_0x298c88 == null ? undefined : _0x298c88[_0x26beeb]) ==
    "string"
    ? _0x298c88[_0x26beeb]
    : undefined;
}
function tr(_0x16a0f5, _0x1b8692) {
  if (!_0x16a0f5) throw Error(_0x1b8692);
  return _0x16a0f5;
}
function nr(_0x467e0a, _0x39c191) {
  return {
    hostType: e.UniverInstanceType["UNIVER_DOC"],
    entry: g.DocsCustomBlock,
    createAnchorPlan: (_0x101b4d) =>
      hr(
        ir(_0x101b4d, _0x39c191),
        "EMBED_DOCS_CUSTOM_BLOCK_ANCHOR_UNAVAILABLE",
      ),
    removeAnchorPlan: (_0xf89d5a) => {
      let _0x1c7350 =
        (_0x467e0a == null
          ? undefined
          : _0x467e0a.getAnchor(
              _0xf89d5a.hostUnitId,
              _0xf89d5a.hostAnchorId,
            )) ?? or(_0xf89d5a);
      return (
        ar(_0xf89d5a, _0x1c7350, _0x39c191) || {
          redoMutations: [
            {
              id: m,
              params: {
                hostUnitId: _0xf89d5a.hostUnitId,
                hostAnchorId: _0xf89d5a.hostAnchorId,
              },
            },
          ],
          undoMutations: [
            {
              id: p,
              params: { record: { ..._0x1c7350, lifecycle: "active" } },
            },
          ],
        }
      );
    },
    readContext: (_0x4809aa) => rr(_0x4809aa, _0x39c191),
  };
}
function rr(_0x394405, _0xdc64db) {
  var _0x5200b5;
  let _0x217ecb =
      ((_0x5200b5 = lr(_0xdc64db, _0x394405.hostUnitId)) == null
        ? undefined
        : _0x5200b5.customBlocks) ?? [],
    _0x1fe29b = _0x217ecb.findIndex(
      (_0x378b22) => _0x378b22.blockId === _0x394405.hostAnchorId,
    );
  return _0x1fe29b < 0
    ? { resolved: false, entry: g.DocsCustomBlock }
    : {
        resolved: true,
        entry: g.DocsCustomBlock,
        blockId: _0x394405.hostAnchorId,
        startIndex: _0x217ecb[_0x1fe29b].startIndex,
        index: _0x1fe29b,
      };
}
function ir(_0x2cbf7b, _0x555802) {
  var _0x3ac3b9, _0x37fed0, _0x2c3ecc;
  if (!_0x555802) return;
  let _0x1c5aba = or(_0x2cbf7b),
    _0x2497b7 = sr(_0x2cbf7b, _0x555802);
  if (_0x2497b7 == null) return;
  let _0x2add76 =
    ((_0x3ac3b9 = ur(_0x555802, _0x2cbf7b.hostUnitId)) == null
      ? undefined
      : _0x3ac3b9.length) ?? 0;
  return (
    (_0x1c5aba.hostContext = {
      ..._0x1c5aba.hostContext,
      startIndex: _0x2497b7,
      drawingOrderIndex: _0x2add76,
    }),
    {
      hostAnchorId: _0x1c5aba.hostAnchorId,
      redoMutations: [
        (0, l.createDocsCustomBlockInsertMutation)({
          unitId: _0x1c5aba.hostUnitId,
          blockId: _0x1c5aba.hostAnchorId,
          startIndex: _0x2497b7,
          drawingOrderIndex: _0x2add76,
          embedId: _0x1c5aba.embedId,
          childUnitId:
            (_0x37fed0 = _0x2cbf7b.descriptor) == null
              ? undefined
              : _0x37fed0.childUnitId,
          childType:
            (_0x2c3ecc = _0x2cbf7b.descriptor) == null
              ? undefined
              : _0x2c3ecc.childType,
          componentKey: pr(_0x1c5aba.hostContext, "componentKey") ?? undefined,
          interactionMode: mr(_0x1c5aba.hostContext),
        }),
        { id: p, params: { record: _0x1c5aba } },
      ],
      undoMutations: [
        {
          id: m,
          params: {
            hostUnitId: _0x1c5aba.hostUnitId,
            hostAnchorId: _0x1c5aba.hostAnchorId,
          },
        },
        (0, l.createDocsCustomBlockRemoveMutation)({
          unitId: _0x1c5aba.hostUnitId,
          blockId: _0x1c5aba.hostAnchorId,
          startIndex: _0x2497b7,
          drawingOrderIndex: _0x2add76,
        }),
      ],
    }
  );
}
function ar(_0x8b4f48, _0x1d3f7e, _0x3d0e64) {
  var _0x579f19, _0x579aa5;
  if (!_0x3d0e64) return;
  let _0x5965c9 =
      cr(_0x3d0e64, _0x8b4f48.hostUnitId, _0x8b4f48.hostAnchorId) ??
      fr(_0x1d3f7e.hostContext, "startIndex"),
    _0x70220b =
      dr(_0x3d0e64, _0x8b4f48.hostUnitId, _0x8b4f48.hostAnchorId) ??
      fr(_0x1d3f7e.hostContext, "drawingOrderIndex") ??
      0;
  if (_0x5965c9 != null)
    return {
      redoMutations: [
        {
          id: m,
          params: {
            hostUnitId: _0x8b4f48.hostUnitId,
            hostAnchorId: _0x8b4f48.hostAnchorId,
          },
        },
        (0, l.createDocsCustomBlockRemoveMutation)({
          unitId: _0x8b4f48.hostUnitId,
          blockId: _0x8b4f48.hostAnchorId,
          startIndex: _0x5965c9,
          drawingOrderIndex: _0x70220b,
        }),
      ],
      undoMutations: [
        (0, l.createDocsCustomBlockInsertMutation)({
          unitId: _0x8b4f48.hostUnitId,
          blockId: _0x8b4f48.hostAnchorId,
          startIndex: _0x5965c9,
          drawingOrderIndex: _0x70220b,
          embedId: _0x1d3f7e.embedId,
          childUnitId:
            (_0x579f19 = _0x8b4f48.descriptor) == null
              ? undefined
              : _0x579f19.childUnitId,
          childType:
            (_0x579aa5 = _0x8b4f48.descriptor) == null
              ? undefined
              : _0x579aa5.childType,
          componentKey: pr(_0x1d3f7e.hostContext, "componentKey") ?? undefined,
          interactionMode: mr(_0x1d3f7e.hostContext),
        }),
        {
          id: p,
          params: {
            record: {
              ..._0x1d3f7e,
              lifecycle: "active",
              hostContext: {
                ..._0x1d3f7e.hostContext,
                startIndex: _0x5965c9,
                drawingOrderIndex: _0x70220b,
              },
            },
          },
        },
      ],
    };
}
function or(_0x16107d) {
  return {
    hostAnchorId:
      _0x16107d.requestedAnchorId ?? "docs-custom-block:" + _0x16107d.embedId,
    embedId: _0x16107d.embedId,
    hostUnitId: _0x16107d.hostUnitId,
    hostType: _0x16107d.hostType,
    entry: _0x16107d.entry,
    kind: "docs-custom-block",
    hostContext: _0x16107d.hostContext,
    lifecycle: "active",
  };
}
function sr(_0x3e97c6, _0x1f1b00) {
  let _0x4e44eb = lr(_0x1f1b00, _0x3e97c6.hostUnitId);
  if (!(_0x4e44eb != null && _0x4e44eb.dataStream)) return;
  let _0x2202f7 = Math.max(0, _0x4e44eb.dataStream["length"] - 2);
  return (
    se({
      hostUnitId: _0x3e97c6.hostUnitId,
      entry: _0x3e97c6.entry,
      hostContext: _0x3e97c6.hostContext,
      maxStartIndex: _0x2202f7,
    }),
    fr(_0x3e97c6.hostContext, "startIndex") ?? _0x2202f7
  );
}
function cr(_0x352430, _0x5287bd, _0x5c780f) {
  var _0x243bf8;
  return (_0x243bf8 = lr(_0x352430, _0x5287bd)) == null ||
    (_0x243bf8 = _0x243bf8.customBlocks) == null ||
    (_0x243bf8 = _0x243bf8.find(
      (_0x4a8a65) => _0x4a8a65.blockId === _0x5c780f,
    )) == null
    ? undefined
    : _0x243bf8.startIndex;
}
function lr(_0x575fab, _0x48dff3) {
  var _0x46b7ea;
  return _0x575fab == null ||
    (_0x46b7ea = _0x575fab.getUnit(
      _0x48dff3,
      e.UniverInstanceType["UNIVER_DOC"],
    )) == null
    ? undefined
    : _0x46b7ea.getBody();
}
function ur(_0x1a7e6c, _0x3c96a6) {
  var _0x1294c9, _0x408de0;
  return _0x1a7e6c == null ||
    (_0x1294c9 = _0x1a7e6c.getUnit(
      _0x3c96a6,
      e.UniverInstanceType["UNIVER_DOC"],
    )) == null ||
    (_0x408de0 = _0x1294c9.getSnapshot) == null
    ? undefined
    : _0x408de0.call(_0x1294c9).drawingsOrder;
}
function dr(_0x2162df, _0x5a507f, _0x3137b5) {
  var _0x2cf2de;
  let _0x55e1cb =
    (_0x2cf2de = ur(_0x2162df, _0x5a507f)) == null
      ? undefined
      : _0x2cf2de.indexOf(_0x3137b5);
  return _0x55e1cb == null || _0x55e1cb < 0 ? undefined : _0x55e1cb;
}
function fr(_0x122156, _0x1112cb) {
  return typeof (_0x122156 == null ? undefined : _0x122156[_0x1112cb]) ==
    "number"
    ? _0x122156[_0x1112cb]
    : undefined;
}
function pr(_0x313809, _0x268290) {
  return typeof (_0x313809 == null ? undefined : _0x313809[_0x268290]) ==
    "string"
    ? _0x313809[_0x268290]
    : undefined;
}
function mr(_0x20aecb) {
  let _0x4b7b29 = pr(_0x20aecb, "interactionMode");
  return _0x4b7b29 === "inline" || _0x4b7b29 === "block"
    ? _0x4b7b29
    : undefined;
}
function hr(_0x5d1345, _0x23d120) {
  if (!_0x5d1345) throw Error(_0x23d120);
  return _0x5d1345;
}
const gr = "UNIVER_EMBED_SHEETS_TAB";
function _r(_0x5324d5) {
  return {
    id: _0x5324d5.hostAnchorId,
    name: _0x5324d5.name ?? _0x5324d5.embedId,
    tabColor: "",
    hidden: e.BooleanNumber["FALSE"],
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
    showGridlines: e.BooleanNumber["FALSE"],
    rowHeader: { width: 46, hidden: e.BooleanNumber["TRUE"] },
    columnHeader: { height: 20, hidden: e.BooleanNumber["TRUE"] },
    rightToLeft: e.BooleanNumber["FALSE"],
    custom: { [gr]: vr(_0x5324d5) },
  };
}
function vr(_0x42a2ab) {
  return {
    version: 1,
    embedId: _0x42a2ab.embedId,
    hostAnchorId: _0x42a2ab.hostAnchorId,
    childType: _0x42a2ab.childType,
  };
}
function yr(_0x2bc496) {
  var _0x284c17;
  let _0x45677c =
    (_0x284c17 = _0x2bc496.custom) == null ? undefined : _0x284c17[gr];
  if (br(_0x45677c)) return _0x45677c;
}
function br(_0x4e802f) {
  if (!_0x4e802f || typeof _0x4e802f != "object") return false;
  let _0x16a8fe = _0x4e802f;
  return (
    _0x16a8fe.version === 1 &&
    typeof _0x16a8fe.embedId == "string" &&
    typeof _0x16a8fe.hostAnchorId == "string" &&
    (_0x16a8fe.childType === undefined ||
      typeof _0x16a8fe.childType == "number")
  );
}
function xr(_0x3ef200, _0x45d887) {
  return {
    hostType: e.UniverInstanceType["UNIVER_SHEET"],
    entry: g.SheetsSheetTab,
    createAnchorPlan: (_0x16bdf2) => Cr(_0x16bdf2, _0x45d887),
    restoreAnchor: (_0x3e84e5) =>
      Ar(Tr(_0x3e84e5, _0x45d887), "EMBED_SHEETS_TAB_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: (_0x1bf2b0) =>
      wr(
        _0x1bf2b0,
        (_0x3ef200 == null
          ? undefined
          : _0x3ef200.getAnchor(
              _0x1bf2b0.hostUnitId,
              _0x1bf2b0.hostAnchorId,
            )) ?? Er(_0x1bf2b0),
      ),
    activateAnchor: (_0x5e9300) => {
      let _0xe90164 = jr(_0x45d887, _0x5e9300.hostUnitId),
        _0x2c87d2 =
          _0xe90164 == null
            ? undefined
            : _0xe90164.getSheetBySheetId(_0x5e9300.hostAnchorId);
      _0x2c87d2 && (_0xe90164 == null || _0xe90164.setActiveSheet(_0x2c87d2));
    },
    readContext: (_0xdf8370) => Sr(_0xdf8370, _0x45d887),
  };
}
function Sr(_0x453d4b, _0x5def67) {
  let _0x984a77 = jr(_0x5def67, _0x453d4b.hostUnitId),
    _0x523386 =
      _0x984a77 == null
        ? undefined
        : _0x984a77.getSheetBySheetId(_0x453d4b.hostAnchorId),
    _0x2ea75a =
      (_0x984a77 == null
        ? undefined
        : _0x984a77.getSheetOrders().indexOf(_0x453d4b.hostAnchorId)) ?? -1;
  return !_0x523386 || _0x2ea75a < 0
    ? { resolved: false, entry: g.SheetsSheetTab }
    : {
        resolved: true,
        entry: g.SheetsSheetTab,
        subUnitId: _0x453d4b.hostAnchorId,
        index: _0x2ea75a,
        name: _0x523386.getName(),
      };
}
function Cr(_0x185f16, _0x34d027) {
  var _0x4750db;
  let _0x10ae6b = jr(_0x34d027, _0x185f16.hostUnitId);
  b({
    hostUnitId: _0x185f16.hostUnitId,
    entry: _0x185f16.entry,
    hostContext: _0x185f16.hostContext,
    maxIndex: _0x10ae6b == null ? undefined : _0x10ae6b.getSheetOrders().length,
  });
  let _0x1a4860 = Er(_0x185f16),
    _0x1adeca = Dr(_0x1a4860.hostContext),
    _0xbd3fa9 = Or(_0x1a4860.hostContext) ?? _0x185f16.embedId,
    _0x3dccbb = _r({
      embedId: _0x1a4860.embedId,
      hostAnchorId: _0x1a4860.hostAnchorId,
      name: _0xbd3fa9,
      childType:
        (_0x4750db = _0x185f16.descriptor) == null
          ? undefined
          : _0x4750db.childType,
    });
  return {
    hostAnchorId: _0x1a4860.hostAnchorId,
    redoMutations: [
      {
        id: t.InsertSheetMutation["id"],
        params: {
          unitId: _0x1a4860.hostUnitId,
          index: _0x1adeca,
          sheet: _0x3dccbb,
        },
      },
      { id: p, params: { record: _0x1a4860 } },
    ],
    undoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x1a4860.hostUnitId,
          hostAnchorId: _0x1a4860.hostAnchorId,
        },
      },
      {
        id: t.RemoveSheetMutation["id"],
        params: {
          unitId: _0x1a4860.hostUnitId,
          subUnitId: _0x1a4860.hostAnchorId,
          subUnitName: _0x3dccbb.name,
        },
      },
    ],
  };
}
function wr(_0x5ea9e6, _0x47889a) {
  var _0x25b676;
  let _0x4a6a0e = Dr(_0x47889a.hostContext),
    _0x3919c7 = Or(_0x47889a.hostContext) ?? _0x47889a.embedId,
    _0x13a002 = _r({
      embedId: _0x47889a.embedId,
      hostAnchorId: _0x47889a.hostAnchorId,
      name: _0x3919c7,
      childType:
        ((_0x25b676 = _0x5ea9e6.descriptor) == null
          ? undefined
          : _0x25b676.childType) ?? kr(_0x47889a.hostContext),
    });
  return {
    redoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x5ea9e6.hostUnitId,
          hostAnchorId: _0x5ea9e6.hostAnchorId,
        },
      },
      {
        id: t.RemoveSheetMutation["id"],
        params: {
          unitId: _0x5ea9e6.hostUnitId,
          subUnitId: _0x5ea9e6.hostAnchorId,
          subUnitName: _0x13a002.name,
        },
      },
    ],
    undoMutations: [
      {
        id: t.InsertSheetMutation["id"],
        params: {
          unitId: _0x5ea9e6.hostUnitId,
          index: _0x4a6a0e,
          sheet: _0x13a002,
        },
      },
      { id: p, params: { record: { ..._0x47889a, lifecycle: "active" } } },
    ],
  };
}
function Tr(_0x2c128f, _0x5ef684) {
  var _0x5b026b;
  let _0x46fb4d = jr(_0x5ef684, _0x2c128f.hostUnitId);
  if (!_0x46fb4d) return;
  let _0x202a82 = Er({
      ..._0x2c128f,
      requestedAnchorId: _0x2c128f.hostAnchorId,
    }),
    _0x4ae34b = Or(_0x202a82.hostContext) ?? _0x2c128f.embedId,
    _0x35afd2 = Dr(_0x202a82.hostContext);
  if (!(
    (_0x5b026b = _0x46fb4d.getSheetBySheetId) != null &&
    _0x5b026b.call(_0x46fb4d, _0x202a82.hostAnchorId)
  )) {
    var _0x16408c, _0x35c465;
    let _0x18e5f1 =
      (_0x16408c = _0x46fb4d.getActiveSheet) == null
        ? undefined
        : _0x16408c.call(_0x46fb4d, true);
    if (
      (_0x46fb4d.addWorksheet(
        _0x202a82.hostAnchorId,
        _0x35afd2,
        _r({
          embedId: _0x202a82.embedId,
          hostAnchorId: _0x202a82.hostAnchorId,
          name: _0x4ae34b,
          childType:
            ((_0x35c465 = _0x2c128f.descriptor) == null
              ? undefined
              : _0x35c465.childType) ?? kr(_0x202a82.hostContext),
        }),
      ),
      _0x18e5f1)
    ) {
      var _0x2639bf;
      (_0x2639bf = _0x46fb4d.setActiveSheet) == null ||
        _0x2639bf.call(_0x46fb4d, _0x18e5f1);
    }
  }
  return {
    ..._0x202a82,
    hostContext: {
      ..._0x202a82.hostContext,
      sheetIndex: _0x35afd2,
      sheetName: _0x4ae34b,
    },
  };
}
function Er(_0x1f87d7) {
  var _0x5f96b5;
  let _0x3be7bd =
    _0x1f87d7.requestedAnchorId ?? "sheets-tab:" + _0x1f87d7.embedId;
  return {
    hostAnchorId: _0x3be7bd,
    embedId: _0x1f87d7.embedId,
    hostUnitId: _0x1f87d7.hostUnitId,
    hostType: _0x1f87d7.hostType,
    entry: _0x1f87d7.entry,
    kind: "sheets-sheet-tab",
    hostContext: {
      ..._0x1f87d7.hostContext,
      sheetIndex: Dr(_0x1f87d7.hostContext),
      sheetName: Or(_0x1f87d7.hostContext) ?? _0x1f87d7.embedId,
      sheetTab: vr({
        embedId: _0x1f87d7.embedId,
        hostAnchorId: _0x3be7bd,
        childType:
          (_0x5f96b5 = _0x1f87d7.descriptor) == null
            ? undefined
            : _0x5f96b5.childType,
      }),
    },
    lifecycle: "active",
  };
}
function Dr(_0x38393f) {
  return typeof (_0x38393f == null ? undefined : _0x38393f.sheetIndex) ==
    "number"
    ? _0x38393f.sheetIndex
    : 2 ** 53 - 1;
}
function Or(_0x312ffb) {
  return typeof (_0x312ffb == null ? undefined : _0x312ffb.sheetName) ==
    "string"
    ? _0x312ffb.sheetName
    : undefined;
}
function kr(_0x135d2e) {
  let _0x2d8149 = _0x135d2e == null ? undefined : _0x135d2e.sheetTab;
  if (!_0x2d8149 || typeof _0x2d8149 != "object") return;
  let _0xfbbc0 = _0x2d8149.childType;
  return typeof _0xfbbc0 == "number" ? _0xfbbc0 : undefined;
}
function Ar(_0x57e525, _0x4bd7a7) {
  if (!_0x57e525) throw Error(_0x4bd7a7);
  return _0x57e525;
}
function jr(_0x4d5766, _0x528350) {
  return (
    (_0x4d5766 == null
      ? undefined
      : _0x4d5766.getUnit(_0x528350, e.UniverInstanceType["UNIVER_SHEET"])) ??
    undefined
  );
}
function Mr(_0x48ac4c, _0x2068f3, _0x5d32de) {
  return {
    hostType: e.UniverInstanceType["UNIVER_SLIDE"],
    entry: g.SlidesFloatingObject,
    createAnchorPlan: (_0x223891) =>
      ei(Ir(_0x223891), "EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE"),
    restoreAnchor: (_0x2afb19) =>
      ti(
        Ur(_0x2afb19, _0x2068f3, Nr(_0x5d32de)),
        "EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE",
      ),
    removeAnchorPlan: (_0x12350b) => {
      let _0x2d55b7 =
        (_0x48ac4c == null
          ? undefined
          : _0x48ac4c.getAnchor(
              _0x12350b.hostUnitId,
              _0x12350b.hostAnchorId,
            )) ?? Yr(_0x12350b);
      return Lr(_0x12350b, _0x2d55b7) ?? Qr(_0x12350b, _0x2d55b7);
    },
    readContext: (_0x3cba4b) =>
      Rr(_0x3cba4b, _0x48ac4c, _0x2068f3, Nr(_0x5d32de)),
    createBoundsUpdatePlan: (_0x24bdb5) =>
      zr(
        _0x24bdb5,
        _0x48ac4c,
        _0x2068f3,
        ni(Nr(_0x5d32de), "EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE"),
      ),
  };
}
function Nr(_0xc13dfe) {
  return typeof _0xc13dfe == "function" ? _0xc13dfe() : _0xc13dfe;
}
function Pr(_0x9c1e7c, _0x1cef61) {
  return {
    hostType: e.UniverInstanceType["UNIVER_SLIDE"],
    entry: g.SlidesPageListBlock,
    activateAnchor: (_0x3f5833) => {
      var _0x2fcb2a;
      (_0x2fcb2a = Z(_0x1cef61, _0x3f5833.hostUnitId)) == null ||
        _0x2fcb2a.pageManager["setActiveSlide"](_0x3f5833.hostAnchorId);
    },
    createAnchorPlan: (_0x4fa82e) => Wr(_0x4fa82e, _0x1cef61),
    restoreAnchor: (_0x584cfe) =>
      ti(Gr(_0x584cfe, _0x1cef61), "EMBED_SLIDES_PAGE_LIST_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: (_0x44bf02) =>
      Kr(
        _0x44bf02,
        (_0x9c1e7c == null
          ? undefined
          : _0x9c1e7c.getAnchor(
              _0x44bf02.hostUnitId,
              _0x44bf02.hostAnchorId,
            )) ?? Xr(_0x44bf02),
      ),
    readContext: (_0x2d29df) => Fr(_0x2d29df, _0x1cef61),
  };
}
function Fr(_0x5aaec9, _0x2ee7e6) {
  var _0x4f4be4;
  let _0x3d74a9 =
      (_0x4f4be4 = Z(_0x2ee7e6, _0x5aaec9.hostUnitId)) == null
        ? undefined
        : _0x4f4be4.getSnapshot(),
    _0x5bd54b =
      _0x3d74a9 == null ? undefined : _0x3d74a9.slides[_0x5aaec9.hostAnchorId],
    _0x3fc036 =
      (_0x3d74a9 == null
        ? undefined
        : _0x3d74a9.slideOrder["indexOf"](_0x5aaec9.hostAnchorId)) ?? -1;
  return !_0x5bd54b || _0x3fc036 < 0
    ? { resolved: false, entry: g.SlidesPageListBlock }
    : {
        resolved: true,
        entry: g.SlidesPageListBlock,
        pageId: _0x5aaec9.hostAnchorId,
        index: _0x3fc036,
        name: _0x5bd54b.name ?? _0x5aaec9.hostAnchorId,
      };
}
function Ir(_0x57f0a2) {
  var _0x3c653d, _0x2cdc01;
  b({
    hostUnitId: _0x57f0a2.hostUnitId,
    entry: _0x57f0a2.entry,
    hostContext: _0x57f0a2.hostContext,
  });
  let _0x20638e = Y(_0x57f0a2.hostContext);
  if (!_0x20638e) return;
  let _0x232e00 = Yr(_0x57f0a2),
    _0x3246b3 = (0, o.createEmbedSlidesFloatingElement)({
      embedId: _0x232e00.embedId,
      hostAnchorId: _0x232e00.hostAnchorId,
      childUnitId:
        (_0x3c653d = _0x57f0a2.descriptor) == null
          ? undefined
          : _0x3c653d.childUnitId,
      childType:
        (_0x2cdc01 = _0x57f0a2.descriptor) == null
          ? undefined
          : _0x2cdc01.childType,
      left: X(_0x232e00.hostContext, "left"),
      top: X(_0x232e00.hostContext, "top"),
      width: X(_0x232e00.hostContext, "width"),
      height: X(_0x232e00.hostContext, "height"),
    });
  return {
    hostAnchorId: _0x232e00.hostAnchorId,
    redoMutations: [
      {
        id: o.AddSlideElementMutation["id"],
        params: {
          unitId: _0x232e00.hostUnitId,
          subUnitId: _0x20638e,
          element: _0x3246b3,
        },
      },
      { id: p, params: { record: _0x232e00 } },
    ],
    undoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x232e00.hostUnitId,
          hostAnchorId: _0x232e00.hostAnchorId,
        },
      },
      {
        id: o.RemoveSlideElementMutation["id"],
        params: {
          unitId: _0x232e00.hostUnitId,
          subUnitId: _0x20638e,
          drawingId: _0x232e00.hostAnchorId,
        },
      },
    ],
  };
}
function Lr(_0x3951c2, _0x29abb2) {
  var _0x320916, _0x4c6363;
  let _0x151baf = Y(_0x29abb2.hostContext);
  if (!_0x151baf) return;
  let _0x41d19c = (0, o.createEmbedSlidesFloatingElement)({
    embedId: _0x29abb2.embedId,
    hostAnchorId: _0x29abb2.hostAnchorId,
    childUnitId:
      (_0x320916 = _0x3951c2.descriptor) == null
        ? undefined
        : _0x320916.childUnitId,
    childType:
      (_0x4c6363 = _0x3951c2.descriptor) == null
        ? undefined
        : _0x4c6363.childType,
    left: X(_0x29abb2.hostContext, "left"),
    top: X(_0x29abb2.hostContext, "top"),
    width: X(_0x29abb2.hostContext, "width"),
    height: X(_0x29abb2.hostContext, "height"),
  });
  return {
    redoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x3951c2.hostUnitId,
          hostAnchorId: _0x3951c2.hostAnchorId,
        },
      },
      {
        id: o.RemoveSlideElementMutation["id"],
        params: {
          unitId: _0x3951c2.hostUnitId,
          subUnitId: _0x151baf,
          drawingId: _0x3951c2.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      {
        id: o.AddSlideElementMutation["id"],
        params: {
          unitId: _0x3951c2.hostUnitId,
          subUnitId: _0x151baf,
          element: _0x41d19c,
        },
      },
      { id: p, params: { record: { ..._0x29abb2, lifecycle: "active" } } },
    ],
  };
}
function Rr(_0x3e888f, _0x455339, _0x14385f, _0x1e9732) {
  let _0x319d11 =
      _0x455339 == null
        ? undefined
        : _0x455339.getAnchor(_0x3e888f.hostUnitId, _0x3e888f.hostAnchorId),
    _0x1e52d8 = Br(
      _0x3e888f.hostUnitId,
      _0x3e888f.hostAnchorId,
      Y(_0x319d11 == null ? undefined : _0x319d11.hostContext),
      _0x14385f,
      _0x1e9732,
    ),
    _0xb1f2f8 = _0x1e52d8 ? Vr(_0x1e52d8.drawing) : undefined;
  return !_0x1e52d8 || !_0xb1f2f8
    ? { resolved: false, entry: g.SlidesFloatingObject }
    : {
        resolved: true,
        entry: g.SlidesFloatingObject,
        subUnitId: _0x1e52d8.subUnitId,
        bounds: _0xb1f2f8,
      };
}
function zr(_0x1ce24d, _0x1bea63, _0x5ebe50, _0x3e190c) {
  Hr(_0x1ce24d.bounds);
  let _0xa9e0bc =
      _0x1bea63 == null
        ? undefined
        : _0x1bea63.getAnchor(_0x1ce24d.hostUnitId, _0x1ce24d.hostAnchorId),
    _0x369fdd = Br(
      _0x1ce24d.hostUnitId,
      _0x1ce24d.hostAnchorId,
      Y(_0xa9e0bc == null ? undefined : _0xa9e0bc.hostContext),
      _0x5ebe50,
      _0x3e190c,
    );
  if (!_0x369fdd) throw Error("EMBED_SLIDES_FLOATING_ANCHOR_UNAVAILABLE");
  let _0x511218 = { ..._0x369fdd.drawing["transform"], ..._0x1ce24d.bounds },
    _0x5b29d1 = {
      ..._0x369fdd.drawing["element"],
      transform: {
        ..._0x369fdd.drawing["element"].transform,
        ..._0x1ce24d.bounds,
      },
    },
    _0x52ff45 = {
      ...(_0xa9e0bc ??
        Yr({
          ..._0x1ce24d,
          requestedAnchorId: _0x1ce24d.hostAnchorId,
          hostContext: { subUnitId: _0x369fdd.subUnitId },
        })),
      hostContext: {
        ...(_0xa9e0bc == null ? undefined : _0xa9e0bc.hostContext),
        subUnitId: _0x369fdd.subUnitId,
        ..._0x1ce24d.bounds,
      },
      lifecycle: "active",
    };
  return {
    redoMutations: [
      {
        id: o.UpdateSlideElementMutation["id"],
        params: {
          unitId: _0x1ce24d.hostUnitId,
          subUnitId: _0x369fdd.subUnitId,
          drawingId: _0x1ce24d.hostAnchorId,
          element: _0x5b29d1,
          transform: _0x511218,
        },
      },
      { id: p, params: { record: _0x52ff45 } },
    ],
    undoMutations: [
      _0xa9e0bc
        ? { id: p, params: { record: _0xa9e0bc } }
        : {
            id: m,
            params: {
              hostUnitId: _0x1ce24d.hostUnitId,
              hostAnchorId: _0x1ce24d.hostAnchorId,
            },
          },
      {
        id: o.UpdateSlideElementMutation["id"],
        params: {
          unitId: _0x1ce24d.hostUnitId,
          subUnitId: _0x369fdd.subUnitId,
          drawingId: _0x1ce24d.hostAnchorId,
          element: _0x369fdd.drawing["element"],
          transform: _0x369fdd.drawing["transform"],
        },
      },
    ],
  };
}
function Br(_0x58165b, _0x1e1ba4, _0x295cfd, _0x1c9c6f, _0x278a42) {
  if (!_0x278a42) return;
  let _0x210694 = (_0x44b775) =>
    _0x278a42.getDrawingByParam({
      unitId: _0x58165b,
      subUnitId: _0x44b775,
      drawingId: _0x1e1ba4,
    });
  if (_0x295cfd) {
    let _0x92f1dd = _0x210694(_0x295cfd);
    if (_0x92f1dd && (0, o.getEmbedSlidesFloatingCustomData)(_0x92f1dd.element))
      return { subUnitId: _0x295cfd, drawing: _0x92f1dd };
  }
  let _0x58ce69 = Z(_0x1c9c6f, _0x58165b);
  for (let _0x70e309 of (_0x58ce69 == null
    ? undefined
    : _0x58ce69.getSnapshot().slideOrder) ?? []) {
    let _0x3f4ade = _0x210694(_0x70e309);
    if (_0x3f4ade && (0, o.getEmbedSlidesFloatingCustomData)(_0x3f4ade.element))
      return { subUnitId: _0x70e309, drawing: _0x3f4ade };
  }
}
function Vr(_0x2dc1ee) {
  let {
    left: _0x40fbc7,
    top: _0x3b7ba0,
    width: _0x4f8388,
    height: _0x63efe,
  } = _0x2dc1ee.transform ?? {};
  if (
    _0x40fbc7 == null ||
    _0x3b7ba0 == null ||
    _0x4f8388 == null ||
    _0x63efe == null
  )
    return;
  let _0x56a2ae = {
    left: _0x40fbc7,
    top: _0x3b7ba0,
    width: _0x4f8388,
    height: _0x63efe,
  };
  try {
    return (Hr(_0x56a2ae), _0x56a2ae);
  } catch {
    return;
  }
}
function Hr(_0x170071) {
  if (
    ![_0x170071.left, _0x170071.top, _0x170071.width, _0x170071.height].every(
      Number.isFinite,
    ) ||
    _0x170071.width <= 0 ||
    _0x170071.height <= 0
  )
    throw Error("EMBED_BOUNDS_INVALID");
}
function Ur(_0x446976, _0x42255f, _0x3cb10a) {
  var _0x2767a7;
  let _0xa40c7e = Y(_0x446976.hostContext),
    _0x19bbeb = Z(_0x42255f, _0x446976.hostUnitId),
    _0xdf7c89 = _0xa40c7e
      ? _0x19bbeb == null
        ? undefined
        : _0x19bbeb.pageManager["getSlide"](_0xa40c7e)
      : undefined;
  if (!_0xa40c7e || !_0xdf7c89) return;
  let _0x318735 = Yr({
    ..._0x446976,
    requestedAnchorId: _0x446976.hostAnchorId,
  });
  if (!(
    (_0x2767a7 = _0xdf7c89.getData().elements) != null &&
    _0x2767a7[_0x318735.hostAnchorId]
  )) {
    var _0x59c4c9, _0x11d45d;
    let _0x50a365 = (0, o.createEmbedSlidesFloatingElement)({
      embedId: _0x318735.embedId,
      hostAnchorId: _0x318735.hostAnchorId,
      childUnitId:
        (_0x59c4c9 = _0x446976.descriptor) == null
          ? undefined
          : _0x59c4c9.childUnitId,
      childType:
        (_0x11d45d = _0x446976.descriptor) == null
          ? undefined
          : _0x11d45d.childType,
      left: X(_0x318735.hostContext, "left"),
      top: X(_0x318735.hostContext, "top"),
      width: X(_0x318735.hostContext, "width"),
      height: X(_0x318735.hostContext, "height"),
    });
    _0xdf7c89.addElement(_0x50a365);
  }
  return (qr(_0x3cb10a, _0x19bbeb, _0x318735.hostUnitId, _0xa40c7e), _0x318735);
}
function Wr(_0x3ed744, _0x8d457a) {
  var _0x4f8408, _0x1fe570;
  let _0x1cfb24 = Z(_0x8d457a, _0x3ed744.hostUnitId);
  b({
    hostUnitId: _0x3ed744.hostUnitId,
    entry: _0x3ed744.entry,
    hostContext: _0x3ed744.hostContext,
    maxIndex:
      _0x1cfb24 == null
        ? undefined
        : _0x1cfb24.getSnapshot().slideOrder["length"],
  });
  let _0x17bda7 = Xr(_0x3ed744),
    _0x1410e6 = $r(_0x17bda7.hostContext, "pageName") ?? _0x3ed744.embedId,
    _0x5dbd40 = (0, o.createEmbedSlidesPage)({
      embedId: _0x17bda7.embedId,
      hostAnchorId: _0x17bda7.hostAnchorId,
      name: _0x1410e6,
      childUnitId:
        (_0x4f8408 = _0x3ed744.descriptor) == null
          ? undefined
          : _0x4f8408.childUnitId,
      childType:
        (_0x1fe570 = _0x3ed744.descriptor) == null
          ? undefined
          : _0x1fe570.childType,
    });
  return (
    (_0x17bda7.hostContext = { ..._0x17bda7.hostContext, pageName: _0x1410e6 }),
    {
      hostAnchorId: _0x17bda7.hostAnchorId,
      redoMutations: [
        {
          id: o.AddSlidePageMutation["id"],
          params: {
            unitId: _0x17bda7.hostUnitId,
            slide: _0x5dbd40,
            insertIndex: X(_0x17bda7.hostContext, "pageIndex"),
          },
        },
        { id: p, params: { record: _0x17bda7 } },
      ],
      undoMutations: [
        {
          id: m,
          params: {
            hostUnitId: _0x17bda7.hostUnitId,
            hostAnchorId: _0x17bda7.hostAnchorId,
          },
        },
        {
          id: o.RemoveSlidePageMutation["id"],
          params: {
            unitId: _0x17bda7.hostUnitId,
            subUnitId: _0x17bda7.hostAnchorId,
          },
        },
      ],
    }
  );
}
function Gr(_0x5cf0fa, _0x1e2ba8) {
  let _0x21244c = Z(_0x1e2ba8, _0x5cf0fa.hostUnitId);
  if (!_0x21244c) return;
  let _0x5f9c9 = Xr({
      ..._0x5cf0fa,
      requestedAnchorId: _0x5cf0fa.hostAnchorId,
    }),
    _0xb85e9b = $r(_0x5f9c9.hostContext, "pageName") ?? _0x5cf0fa.embedId,
    _0x171959 = X(_0x5f9c9.hostContext, "pageIndex");
  if (!_0x21244c.pageManager["getSlide"](_0x5f9c9.hostAnchorId)) {
    var _0x4d9415, _0x4d965b;
    _0x21244c.pageManager["createSlide"](
      (0, o.createEmbedSlidesPage)({
        embedId: _0x5f9c9.embedId,
        hostAnchorId: _0x5f9c9.hostAnchorId,
        name: _0xb85e9b,
        childUnitId:
          (_0x4d9415 = _0x5cf0fa.descriptor) == null
            ? undefined
            : _0x4d9415.childUnitId,
        childType:
          (_0x4d965b = _0x5cf0fa.descriptor) == null
            ? undefined
            : _0x4d965b.childType,
      }),
      _0x171959,
    );
  }
  return {
    ..._0x5f9c9,
    hostContext: { ..._0x5f9c9.hostContext, pageName: _0xb85e9b },
  };
}
function Kr(_0x41ed50, _0x1b6754) {
  var _0x33f69b, _0x2ab76f;
  let _0x38ee2a = $r(_0x1b6754.hostContext, "pageName") ?? _0x1b6754.embedId,
    _0x17c461 = (0, o.createEmbedSlidesPage)({
      embedId: _0x1b6754.embedId,
      hostAnchorId: _0x1b6754.hostAnchorId,
      name: _0x38ee2a,
      childUnitId:
        (_0x33f69b = _0x41ed50.descriptor) == null
          ? undefined
          : _0x33f69b.childUnitId,
      childType:
        (_0x2ab76f = _0x41ed50.descriptor) == null
          ? undefined
          : _0x2ab76f.childType,
    });
  return {
    redoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x41ed50.hostUnitId,
          hostAnchorId: _0x41ed50.hostAnchorId,
        },
      },
      {
        id: o.RemoveSlidePageMutation["id"],
        params: {
          unitId: _0x41ed50.hostUnitId,
          subUnitId: _0x41ed50.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      {
        id: o.AddSlidePageMutation["id"],
        params: {
          unitId: _0x41ed50.hostUnitId,
          slide: _0x17c461,
          insertIndex: X(_0x1b6754.hostContext, "pageIndex"),
        },
      },
      {
        id: p,
        params: {
          record: {
            ..._0x1b6754,
            lifecycle: "active",
            hostContext: { ..._0x1b6754.hostContext, pageName: _0x38ee2a },
          },
        },
      },
    ],
  };
}
function qr(_0x4af569, _0x89c25c, _0x3bd115, _0x224068) {
  if (!_0x4af569 || !_0x89c25c) return;
  let _0x517b75 = _0x89c25c.pageManager["getSlide"](_0x224068);
  if (!_0x517b75) return;
  let _0x34663b = _0x4af569.getDrawingData(_0x3bd115, _0x224068),
    _0x5b6d1f = _0x4af569.getDrawingOrder(_0x3bd115, _0x224068),
    _0x1c1a82 = new Set(_0x5b6d1f),
    { data: _0x4f32d5, order: _0x83a4e7 } = (0,
    o.resolvedSlideLayersToDrawingMap)(
      _0x3bd115,
      _0x224068,
      _0x517b75.resolveElements(),
      _0x89c25c.getThemeDataForPage(_0x224068),
    ),
    _0x595ea7 = new Set(_0x83a4e7);
  (_0x4af569.drawingManagerData[_0x3bd115] ||
    (_0x4af569.drawingManagerData[_0x3bd115] = {}),
    (_0x4af569.drawingManagerData[_0x3bd115][_0x224068] = {
      data: _0x4f32d5,
      order: _0x83a4e7,
    }));
  let _0x459845 = _0x5b6d1f.filter((_0x2cca41) => !_0x595ea7.has(_0x2cca41)),
    _0x554f16 = _0x83a4e7.filter((_0x4f3586) => !_0x1c1a82.has(_0x4f3586)),
    _0x1bc359 = _0x83a4e7.filter(
      (_0x339af2) =>
        _0x1c1a82.has(_0x339af2) &&
        _0x34663b[_0x339af2] !== _0x4f32d5[_0x339af2],
    );
  (_0x459845.length > 0 &&
    _0x4af569.removeNotification(Jr(_0x3bd115, _0x224068, _0x459845)),
    _0x554f16.length > 0 &&
      _0x4af569.addNotification(Jr(_0x3bd115, _0x224068, _0x554f16)),
    _0x1bc359.length > 0 &&
      _0x4af569.updateNotification(Jr(_0x3bd115, _0x224068, _0x1bc359)));
}
function Jr(_0x670bf9, _0x10e79c, _0x7471ee) {
  return _0x7471ee.map((_0x59ce14) => ({
    unitId: _0x670bf9,
    subUnitId: _0x10e79c,
    drawingId: _0x59ce14,
  }));
}
function Yr(_0x170d7d) {
  return Zr(_0x170d7d, g.SlidesFloatingObject, "slides-floating");
}
function Xr(_0x329b60) {
  return Zr(_0x329b60, g.SlidesPageListBlock, "slides-page-list");
}
function Zr(_0x121faf, _0x1403bc, _0xb0e5b1) {
  return {
    hostAnchorId:
      _0x121faf.requestedAnchorId ?? _0xb0e5b1 + ":" + _0x121faf.embedId,
    embedId: _0x121faf.embedId,
    hostUnitId: _0x121faf.hostUnitId,
    hostType: _0x121faf.hostType,
    entry: _0x121faf.entry,
    kind: _0x1403bc,
    hostContext: _0x121faf.hostContext,
    lifecycle: "active",
  };
}
function Qr(_0x795c86, _0x3470b7) {
  return {
    redoMutations: [
      {
        id: m,
        params: {
          hostUnitId: _0x795c86.hostUnitId,
          hostAnchorId: _0x795c86.hostAnchorId,
        },
      },
    ],
    undoMutations: [
      { id: p, params: { record: { ..._0x3470b7, lifecycle: "active" } } },
    ],
  };
}
function Y(_0x1ae0d6) {
  return typeof (_0x1ae0d6 == null ? undefined : _0x1ae0d6.subUnitId) ==
    "string"
    ? _0x1ae0d6.subUnitId
    : undefined;
}
function X(_0x1c0363, _0x599a16) {
  return typeof (_0x1c0363 == null ? undefined : _0x1c0363[_0x599a16]) ==
    "number"
    ? _0x1c0363[_0x599a16]
    : undefined;
}
function $r(_0x33ed0b, _0xe1bd6d) {
  return typeof (_0x33ed0b == null ? undefined : _0x33ed0b[_0xe1bd6d]) ==
    "string"
    ? _0x33ed0b[_0xe1bd6d]
    : undefined;
}
function ei(_0x1fc303, _0x5712c1) {
  if (!_0x1fc303) throw Error(_0x5712c1);
  return _0x1fc303;
}
function ti(_0x33b9ea, _0x1df4aa) {
  if (!_0x33b9ea) throw Error(_0x1df4aa);
  return _0x33b9ea;
}
function Z(_0x349fd0, _0xae82c0) {
  return (
    (_0x349fd0 == null
      ? undefined
      : _0x349fd0.getUnit(_0xae82c0, e.UniverInstanceType["UNIVER_SLIDE"])) ??
    undefined
  );
}
function ni(_0x55eb73, _0x52f6b6) {
  if (!_0x55eb73) throw Error(_0x52f6b6);
  return _0x55eb73;
}
function ri(_0x189c3f) {
  let _0xa7c3b5 = _0x189c3f.has(k) ? _0x189c3f.get(k) : undefined,
    _0x1e4011 = _0x189c3f.has(e.IUniverInstanceService)
      ? _0x189c3f.get(e.IUniverInstanceService)
      : undefined;
  Gt(_0x189c3f, [
    nr(_0xa7c3b5, _0x1e4011),
    we(
      _0xa7c3b5,
      () =>
        _0x189c3f.has(n.ISheetDrawingService)
          ? _0x189c3f.get(n.ISheetDrawingService)
          : undefined,
      () =>
        _0x189c3f.has(s.IDrawingManagerService)
          ? _0x189c3f.get(s.IDrawingManagerService)
          : undefined,
      () =>
        _0x189c3f.has(t.SheetSkeletonService)
          ? _0x189c3f.get(t.SheetSkeletonService)
          : undefined,
    ),
    xr(_0xa7c3b5, _0x1e4011),
    Mr(_0xa7c3b5, _0x1e4011, () =>
      _0x189c3f.has(o.ISlideDrawingService)
        ? _0x189c3f.get(o.ISlideDrawingService)
        : undefined,
    ),
    Pr(_0xa7c3b5, _0x1e4011),
    En(_0xa7c3b5, _0x1e4011),
    Bn(_0xa7c3b5, _0x1e4011, () =>
      _0x189c3f.has(a.IBoardElementService)
        ? _0x189c3f.get(a.IBoardElementService)
        : undefined,
    ),
  ]);
}
let ii = class {
  constructor(_0x81d9ee) {
    this._modelService = _0x81d9ee;
  }
  getRetentionState(_0x5f3640, _0x16c692) {
    let _0x2660d2 = this._modelService["getDescriptorsByResourceRef"](
      _0x5f3640,
      _0x16c692,
    );
    return this._toState(_0x5f3640, _0x16c692, _0x2660d2);
  }
  listCleanupCandidates(_0x1e97de) {
    let _0x554784 = new Map();
    for (let _0xb472de of this._modelService["getDescriptors"](_0x1e97de)) {
      let _0x15d698 = _0xb472de.source["ref"],
        _0x1e3288 = L(_0x15d698),
        _0x1f850f = _0x554784.get(_0x1e3288);
      _0x1f850f
        ? _0x1f850f.descriptors["push"](_0xb472de)
        : _0x554784.set(_0x1e3288, {
            ref: _0x15d698,
            descriptors: [_0xb472de],
          });
    }
    return [..._0x554784.values()]
      .map(({ ref: _0xa805e1, descriptors: _0x3b732c }) =>
        this._toState(_0x1e97de, _0xa805e1, _0x3b732c),
      )
      .filter((_0x163ac3) => _0x163ac3.eligibleForCleanup);
  }
  _toState(_0x5ef958, _0x257ae6, _0x3c031b) {
    let _0x4466c1 = _0x3c031b.filter(
      (_0x2614e2) => _0x2614e2.lifecycle !== "soft-delete d",
    ).length;
    return {
      hostUnitId: _0x5ef958,
      ref: _0x257ae6,
      childUnitIds: [
        ...new Set(
          _0x3c031b
            .map((_0xc27ac5) => _0xc27ac5.childUnitId)
            .filter((_0x17b225) => typeof _0x17b225 == "string"),
        ),
      ],
      totalReferences: _0x3c031b.length,
      activeReferences: _0x4466c1,
      softDeletedReferences: _0x3c031b.length - _0x4466c1,
      shouldDisposeNow: false,
      eligibleForCleanup: _0x3c031b.length > 0 && _0x4466c1 === 0,
    };
  }
};
ii = B([z(0, (0, e.Inject)(V))], ii);
var ai = class {
  constructor() {
    (v(this, "_focusOwner$", new u.BehaviorSubject(null)),
      v(this, "focusOwner$", this._focusOwner$["asObservable"]()));
  }
  getFocusOwner() {
    return this._focusOwner$["getValue"]();
  }
  setFocusOwner(_0x3d187b) {
    let _0xcc3ae3 = this.getFocusOwner();
    (_0xcc3ae3 &&
      _0xcc3ae3.hostUnitId === _0x3d187b.hostUnitId &&
      _0xcc3ae3.embedId === _0x3d187b.embedId &&
      _0xcc3ae3.childUnitId === _0x3d187b.childUnitId &&
      _0xcc3ae3.childType === _0x3d187b.childType &&
      _0xcc3ae3.reason === _0x3d187b.reason) ||
      this._focusOwner$["next"](_0x3d187b);
  }
  clearFocusOwner(_0x533d91) {
    let _0x2962eb = this.getFocusOwner();
    _0x2962eb &&
      (!_0x533d91 || _0x2962eb.embedId === _0x533d91) &&
      this._focusOwner$["next"](null);
  }
};
let oi = class {
  constructor(_0xd6adaf) {
    ((this._referencedUnitManager = _0xd6adaf),
      v(this, "id", "embed-resource-ref-formula-data"),
      v(this, "priority", 100));
  }
  canRead(_0x286d9f) {
    if (_0x286d9f.target["sourceUnitId"]) return true;
    if (!_0x286d9f.target["uri"]) return false;
    try {
      return (N(_0x286d9f.target["uri"]), true);
    } catch {
      return false;
    }
  }
  async readData(_0x264332) {
    if (!_0x264332.target["uri"] && !_0x264332.target["sourceUnitId"]) return;
    let _0x1186bf = si(_0x264332),
      _0x3cf589 = new Map(),
      _0x9553cf = [];
    try {
      for (let _0x4a7571 of _0x264332.ranges) {
        if (_0x4a7571.tableName) {
          let _0x57ec4e = await this._referencedUnitManager["readData"]({
            ..._0x1186bf,
            part: { kind: "table", tableName: _0x4a7571.tableName },
          });
          if (_0x57ec4e.type !== "table") continue;
          let _0x5bf726 = {
            name: _0x57ec4e.sheetName,
            sheetId: _0x57ec4e.sheetId,
            rowCount: _0x57ec4e.range["endRow"] + 1,
            columnCount: _0x57ec4e.range["endColumn"] + 1,
            coverage: [_0x57ec4e.range],
            cells: [],
          };
          (ci(_0x5bf726, _0x57ec4e.values, _0x57ec4e.range),
            _0x3cf589.set(_0x57ec4e.sheetId, _0x5bf726),
            _0x9553cf.push({
              name: _0x57ec4e.tableName,
              sheetId: _0x57ec4e.sheetId,
              range: _0x57ec4e.range,
              columns: _0x57ec4e.columns,
              showHeader: _0x57ec4e.showHeader,
            }));
          continue;
        }
        if (!_0x4a7571.range || !_0x4a7571.sheetName) continue;
        let _0x46c299 = await this._referencedUnitManager["readData"]({
          ..._0x1186bf,
          part: {
            kind: "range",
            ref: _0x4a7571.sheetName + "!" + li(_0x4a7571.range),
            sheetName: _0x4a7571.sheetName,
            ...(_0x4a7571.sheetId ? { sheetId: _0x4a7571.sheetId } : {}),
            range: li(_0x4a7571.range),
          },
        });
        if (_0x46c299.type !== "range") continue;
        let _0x1d57b8 =
            _0x46c299.sheetId ?? _0x4a7571.sheetId ?? _0x4a7571.sheetName,
          _0x3f1fb5 = _0x46c299.sheetName ?? _0x4a7571.sheetName,
          _0x3c0f80 = _0x1d57b8,
          _0x5b97ed = _0x3cf589.get(_0x3c0f80) ?? {
            name: _0x3f1fb5,
            sheetId: _0x1d57b8,
            rowCount: _0x4a7571.range["endRow"] + 1,
            columnCount: _0x4a7571.range["endColumn"] + 1,
            coverage: [],
            cells: [],
          };
        ((_0x5b97ed.rowCount = Math.max(
          _0x5b97ed.rowCount,
          _0x4a7571.range["endRow"] + 1,
        )),
          (_0x5b97ed.columnCount = Math.max(
            _0x5b97ed.columnCount,
            _0x4a7571.range["endColumn"] + 1,
          )),
          _0x5b97ed.coverage["push"](_0x4a7571.range),
          ci(_0x5b97ed, _0x46c299.values, _0x4a7571.range),
          _0x3cf589.set(_0x3c0f80, _0x5b97ed));
      }
    } catch {
      return (0, r.createUnavailableReferenceDataResponse)(_0x264332);
    }
    return {
      requestId: _0x264332.requestId,
      calculationId: _0x264332.calculationId,
      source: "provider",
      freshness: "fresh",
      sheets: Array.from(_0x3cf589.values()),
      tables: _0x9553cf,
    };
  }
};
oi = B([z(0, q)], oi);
function si(_0x471c24) {
  return _0x471c24.target["sourceUnitId"]
    ? {
        file: { kind: j.SELF },
        unit: {
          selector: _0x471c24.target["sourceUnitId"],
          type: Mt(_0x471c24.target["unitType"]),
        },
      }
    : N(_0x471c24.target["uri"]);
}
function ci(_0x474e74, _0x5dbe3b, _0x5571ae) {
  _0x5dbe3b.forEach((_0x7e6181, _0x13614b) => {
    _0x7e6181.forEach((_0xc30497, _0x12b82e) => {
      _0xc30497 != null &&
        _0x474e74.cells["push"]({
          row: _0x5571ae.startRow + _0x13614b,
          column: _0x5571ae.startColumn + _0x12b82e,
          cell: { v: _0xc30497 },
        });
    });
  });
}
function li(_0x187d5f) {
  let _0x4ea29a = "" + ui(_0x187d5f.startColumn) + (_0x187d5f.startRow + 1),
    _0x435ad7 = "" + ui(_0x187d5f.endColumn) + (_0x187d5f.endRow + 1);
  return _0x4ea29a === _0x435ad7 ? _0x4ea29a : _0x4ea29a + ":" + _0x435ad7;
}
function ui(_0x4355ff) {
  let _0x577aaa = _0x4355ff + 1,
    _0x485728 = "";
  for (; _0x577aaa > 0;)
    (_0x577aaa--,
      (_0x485728 = String.fromCharCode(65 + (_0x577aaa % 26)) + _0x485728),
      (_0x577aaa = Math.floor(_0x577aaa / 26)));
  return _0x485728;
}
const di = -100;
let fi = class {
  constructor(_0x39c871) {
    this._univerInstanceService = _0x39c871;
  }
  ensureUnit(_0x4be764) {
    (Ci(_0x4be764.ref), wi(_0x4be764.ref, _0x4be764.unitType));
    let _0x3ceb6d = this._univerInstanceService["getUnit"](
      _0x4be764.ref["unit"].selector,
      _0x4be764.unitType,
    );
    if (!_0x3ceb6d)
      throw new y("LOCAL_RUNTIME_RESOURCE_REF_UNIT_NOT_FOUND", {
        ref: _0x4be764.ref,
        unitType: _0x4be764.unitType,
      });
    return { unitId: _0x3ceb6d.getUnitId(), unitType: _0x4be764.unitType };
  }
};
fi = B([z(0, e.IUniverInstanceService)], fi);
let pi = class {
  constructor(_0x38c55d, _0xddf929, _0x1f05f8) {
    ((this._referencedUnitManager = _0x38c55d),
      (this._univerInstanceService = _0xddf929),
      (this._commandService = _0x1f05f8));
  }
  async readData(_0x5caa3f) {
    let _0x1e33a3 =
        _0x5caa3f.dataType === "range" && F(_0x5caa3f.selector)
          ? _0x5caa3f.selector
          : undefined,
      _0x1b32be =
        _0x5caa3f.dataType === "table" && yt(_0x5caa3f.selector)
          ? _0x5caa3f.selector
          : undefined;
    if (!_0x1e33a3 && !_0x1b32be)
      throw new y("LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED", {
        dataType: _0x5caa3f.dataType,
        selector: _0x5caa3f.selector,
      });
    let _0x571b93 = await this._referencedUnitManager["ensure"](
      Ti(_0x5caa3f.ref),
      { unitType: _0x5caa3f.unitType, signal: _0x5caa3f.signal },
    );
    if (
      _0x1e33a3 &&
      _0x571b93.unitType === e.UniverInstanceType["UNIVER_SHEET"]
    )
      return this._readSheetRange(_0x5caa3f.ref, _0x571b93.unitId, _0x1e33a3);
    if (_0x1b32be && _0x571b93.unitType === e.UniverInstanceType["UNIVER_BASE"])
      return this._readBaseTable(_0x5caa3f.ref, _0x571b93.unitId, _0x1b32be);
    throw new y("LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_TYPE_UNSUPPORTED", {
      ref: _0x5caa3f.ref,
      unitType: _0x571b93.unitType,
    });
  }
  watchData(_0x5e3b3e, _0x392e99) {
    if (
      (Ci(_0x5e3b3e.ref),
      _0x5e3b3e.unitType === e.UniverInstanceType["UNIVER_SHEET"] &&
        _0x5e3b3e.dataType === "range" &&
        F(_0x5e3b3e.selector))
    )
      return this._watchSheetRange(
        _0x5e3b3e.ref,
        _0x5e3b3e.selector,
        _0x392e99,
      );
    if (
      _0x5e3b3e.unitType === e.UniverInstanceType["UNIVER_BASE"] &&
      _0x5e3b3e.dataType === "table" &&
      yt(_0x5e3b3e.selector)
    )
      return this._watchBaseTable(_0x5e3b3e.ref, _0x392e99);
    throw new y("LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED", {
      dataType: _0x5e3b3e.dataType,
      selector: _0x5e3b3e.selector,
    });
  }
  _watchSheetRange(_0x5c1e9f, _0x5a472d, _0x2bfd41) {
    let _0x532250 = _0x5a472d.sheetId,
      _0x51070b = Di(_0x5a472d.range);
    return this._commandService["onCommandExecuted"]((_0x223ba7) => {
      if (gi(_0x223ba7)) {
        if (!_0x532250) {
          var _0x2da19a;
          let _0x24ead5 = this._univerInstanceService["getUnit"](
            _0x5c1e9f.unit["selector"],
            e.UniverInstanceType["UNIVER_SHEET"],
          );
          _0x532250 =
            _0x24ead5 == null ||
            (_0x2da19a = _0x24ead5.getSheetBySheetName(_0x5a472d.sheetName)) ==
              null
              ? undefined
              : _0x2da19a.getSheetId();
        }
        if (
          _0x223ba7.params["unitId"] === _0x5c1e9f.unit["selector"] &&
          _0x223ba7.params["subUnitId"] === _0x532250
        ) {
          if (yi(_0x223ba7, t.SetRangeValuesMutation)) {
            if (!_0x223ba7.params["cellValue"]) {
              _0x2bfd41();
              return;
            }
            let _0x3b4788 = new e["ObjectMatrix"](
              _0x223ba7.params["cellValue"],
            ).getStartEndScope();
            e.Rectangle["intersects"](_0x51070b, _0x3b4788) && _0x2bfd41();
            return;
          }
          if (yi(_0x223ba7, t.ReorderRangeMutation)) {
            e.Rectangle["intersects"](_0x51070b, _0x223ba7.params["range"]) &&
              _0x2bfd41();
            return;
          }
          _i(_0x223ba7) && _0x2bfd41();
        }
      }
    });
  }
  _watchBaseTable(_0x191b23, _0x5e6339) {
    return this._commandService["onCommandExecuted"]((_0x28da56) => {
      _0x28da56.id === c.ApplyBaseJson1Mutation["id"] &&
        vi(_0x28da56) &&
        _0x28da56.params["unitId"] === _0x191b23.unit["selector"] &&
        _0x5e6339();
    });
  }
  _readSheetRange(_0x5b2c48, _0x14a3c1, _0xee5f27) {
    let _0x1b568e = this._univerInstanceService["getUnit"](
      _0x14a3c1,
      e.UniverInstanceType["UNIVER_SHEET"],
    );
    if (!_0x1b568e)
      throw new y("LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND", {
        ref: _0x5b2c48,
        unitId: _0x14a3c1,
      });
    let _0x13e918 = _0xee5f27.sheetId
      ? _0x1b568e.getSheetBySheetId(_0xee5f27.sheetId)
      : _0x1b568e.getSheetBySheetName(_0xee5f27.sheetName);
    if (!_0x13e918)
      throw new y("LOCAL_RUNTIME_RESOURCE_REF_DATA_SHEET_NOT_FOUND", {
        ref: _0x5b2c48,
        selector: _0xee5f27,
      });
    return {
      type: "range",
      sheetId: _0x13e918.getSheetId(),
      sheetName: _0x13e918.getName(),
      values: _0x13e918
        .getRange(Di(_0xee5f27.range))
        .getValues()
        .map((_0x57059e) =>
          _0x57059e.map((_0x4a9ce9) =>
            ki((0, e.getOriginCellValue)(_0x4a9ce9)),
          ),
        ),
    };
  }
  _readBaseTable(_0x4bf651, _0x875e69, _0x2a9f52) {
    let _0x7fdd03 = this._univerInstanceService["getUnit"](
      _0x875e69,
      e.UniverInstanceType["UNIVER_BASE"],
    );
    if (!_0x7fdd03)
      throw new y("LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND", {
        ref: _0x4bf651,
        unitId: _0x875e69,
      });
    let _0x2a18ad = Ai(
      _0x7fdd03.getSnapshot().tables,
      _0x2a9f52.tableName,
      _0x2a9f52.tableId,
    );
    if (!_0x2a18ad)
      throw new y("LOCAL_RUNTIME_RESOURCE_REF_DATA_TABLE_NOT_FOUND", {
        ref: _0x4bf651,
        selector: _0x2a9f52,
      });
    let _0x1741b4 = bi(_0x2a18ad)
        ? _0x2a18ad
        : (0, c.ensureBaseTableCellLayout)(e.Tools["deepClone"](_0x2a18ad)),
      _0x2c6324 = _0x1741b4.recordOrder ?? [],
      _0x224477 = _0x1741b4.fieldOrder;
    return {
      type: "table",
      tableName: _0x2a9f52.tableName,
      sheetName: _0x1741b4.name,
      sheetId: _0x1741b4.id,
      range: {
        startRow: 0,
        endRow: Math.max(0, _0x2c6324.length - 1),
        startColumn: 0,
        endColumn: Math.max(0, _0x224477.length - 1),
      },
      columns: _0x224477.map((_0x473103) => {
        var _0x378978;
        return (
          ((_0x378978 = _0x1741b4.fields[_0x473103]) == null
            ? undefined
            : _0x378978.name) ?? _0x473103
        );
      }),
      showHeader: false,
      values: _0x2c6324.map((_0x15dcfe) =>
        _0x224477.map(
          (_0x35bf10) =>
            (0, c.getBaseCellFormulaValue)(_0x1741b4, _0x15dcfe, _0x35bf10) ??
            null,
        ),
      ),
    };
  }
};
pi = B(
  [
    z(0, (0, e.Inject)(q)),
    z(1, e.IUniverInstanceService),
    z(2, e.ICommandService),
  ],
  pi,
);
const mi = new Set([
    t.InsertRowMutation["id"],
    t.InsertColMutation["id"],
    t.RemoveRowMutation["id"],
    t.RemoveColMutation["id"],
  ]),
  hi = new Set([
    t.SetRangeValuesMutation["id"],
    t.ReorderRangeMutation["id"],
    ...mi,
  ]);
function gi(_0x22325d) {
  return !hi.has(_0x22325d.id) ||
    _0x22325d.params == null ||
    typeof _0x22325d.params != "object"
    ? false
    : "unitId" in _0x22325d.params && "subUnitId" in _0x22325d.params;
}
function _i(_0x1ebde8) {
  return mi.has(_0x1ebde8.id);
}
function vi(_0x30e40d) {
  return (
    _0x30e40d.params != null &&
    typeof _0x30e40d.params == "object" &&
    "unitId" in _0x30e40d.params &&
    "op" in _0x30e40d.params
  );
}
function yi(_0x230ea5, _0x4f5a2f) {
  return _0x230ea5.id === _0x4f5a2f.id && _0x230ea5.params !== undefined;
}
function bi(_0x37302e) {
  let _0x43a35e = _0x37302e.recordOrder;
  return _0x43a35e == null ||
    _0x43a35e.length !== Object.keys(_0x37302e.records ?? {}).length
    ? false
    : _0x37302e.cellData != null &&
        _0x43a35e.every((_0xb69352, _0x4e53da) => {
          var _0x25252c, _0x5c5d24;
          return (
            ((_0x25252c = _0x37302e.rowIndex) == null
              ? undefined
              : _0x25252c[_0xb69352]) === _0x4e53da &&
            ((_0x5c5d24 = _0x37302e.rowId) == null
              ? undefined
              : _0x5c5d24[_0x4e53da]) === _0xb69352
          );
        }) &&
        _0x37302e.fieldOrder["every"]((_0x52d809, _0x127b82) => {
          var _0x1525dc, _0x2597fe;
          return (
            ((_0x1525dc = _0x37302e.colIndex) == null
              ? undefined
              : _0x1525dc[_0x52d809]) === _0x127b82 &&
            ((_0x2597fe = _0x37302e.colId) == null
              ? undefined
              : _0x2597fe[_0x127b82]) === _0x52d809
          );
        });
}
function xi(_0x16f28e) {
  return {
    registrationId: "local-runtime-resource-ref-unit-provider",
    match: {
      fileKinds: [j.SELF],
      unitTypes: ["sheet", "doc", "slide", "base", "board"],
    },
    priority: di,
    provider: _0x16f28e,
  };
}
function Si(_0x3c6d74) {
  return {
    registrationId: "local-runtime-resource-ref-data-provider",
    match: { fileKinds: [j.SELF], unitTypes: ["sheet", "base"] },
    priority: di,
    provider: _0x3c6d74,
  };
}
function Ci(_0x51f2bf) {
  if (
    (typeof _0x51f2bf == "string" ? I(_0x51f2bf) : _0x51f2bf).file["kind"] !==
    j.SELF
  )
    throw new y("LOCAL_RUNTIME_RESOURCE_REF_UNSUPPORTED", { ref: _0x51f2bf });
}
function wi(_0x3363d3, _0x25ca2e) {
  if (
    (typeof _0x3363d3 == "string" ? I(_0x3363d3) : _0x3363d3).unit["type"] !==
    Mt(_0x25ca2e)
  )
    throw new y("LOCAL_RUNTIME_RESOURCE_REF_UNIT_TYPE_MISMATCH", {
      ref: _0x3363d3,
      unitType: _0x25ca2e,
    });
}
function Ti(_0x377a42) {
  return { file: _0x377a42.file, unit: _0x377a42.unit };
}
const Ei = /^\$?([A-Za-z]+)\$?([1-9]\d*)(?::\$?([A-Za-z]+)\$?([1-9]\d*))?$/;
function Di(_0x40637e) {
  let _0x16de39 = Ei.exec(_0x40637e);
  if (!_0x16de39)
    throw new y("LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", {
      range: _0x40637e,
    });
  let _0x3c2a5e = Oi(_0x16de39[1]),
    _0x40692a = Number(_0x16de39[2]) - 1,
    _0x204f09 = _0x16de39[3] ? Oi(_0x16de39[3]) : _0x3c2a5e,
    _0x1a8415 = _0x16de39[4] ? Number(_0x16de39[4]) - 1 : _0x40692a;
  if (_0x1a8415 < _0x40692a || _0x204f09 < _0x3c2a5e)
    throw new y("LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", {
      range: _0x40637e,
    });
  return {
    startRow: _0x40692a,
    endRow: _0x1a8415,
    startColumn: _0x3c2a5e,
    endColumn: _0x204f09,
  };
}
function Oi(_0x489773) {
  let _0x43d8a7 = 0;
  for (let _0x27b724 of _0x489773.toUpperCase()) {
    let _0x5f0631 = _0x27b724.charCodeAt(0);
    if (_0x5f0631 < 65 || _0x5f0631 > 90)
      throw new y("LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID", {
        label: _0x489773,
      });
    _0x43d8a7 = _0x43d8a7 * 26 + _0x5f0631 - 64;
  }
  return _0x43d8a7 - 1;
}
function ki(_0x16ff44) {
  return typeof _0x16ff44 == "string" ||
    typeof _0x16ff44 == "number" ||
    typeof _0x16ff44 == "boolean"
    ? _0x16ff44
    : null;
}
function Ai(_0x5ebcd3, _0xe215ed, _0x5c7270) {
  if (_0x5c7270 && _0x5ebcd3[_0x5c7270]) return _0x5ebcd3[_0x5c7270];
  let _0x1f4402 = _0x5ebcd3[_0xe215ed];
  if (_0x1f4402) return _0x1f4402;
  let _0x11f09f = _0xe215ed.trim().toLowerCase(),
    _0x515b52 = (0, e.createBaseFormulaTableNameMap)({ tables: _0x5ebcd3 }),
    _0xe5513d = Object.values(_0x5ebcd3).filter(
      (_0x3e8f9c) => _0x3e8f9c.name["trim"]().toLowerCase() === _0x11f09f,
    ),
    _0x5a887b = Object.values(_0x5ebcd3).filter((_0x15773f) => {
      var _0x13a03b;
      return (
        ((_0x13a03b = _0x515b52.get(_0x15773f.id)) == null
          ? undefined
          : _0x13a03b.toLowerCase()) === _0x11f09f
      );
    });
  return _0x5a887b.length === 1
    ? _0x5a887b[0]
    : _0xe5513d.length === 1
      ? _0xe5513d[0]
      : undefined;
}
const ji = new WeakMap();
var Q = class {
  constructor() {
    v(this, "_registrations", []);
  }
  register(_0x207146) {
    if (
      this._registrations["some"](
        (_0x29e7f0) => _0x29e7f0.registrationId === _0x207146.registrationId,
      )
    )
      throw Error(
        "Referenced unit API resolver already registered: " +
          _0x207146.registrationId,
      );
    return (
      this._registrations["push"](_0x207146),
      (0, e.toDisposable)(() => {
        let _0x568081 = this._registrations["indexOf"](_0x207146);
        _0x568081 >= 0 && this._registrations["splice"](_0x568081, 1);
      })
    );
  }
  registerMany(_0x34658c) {
    return _0x34658c.map((_0x2c275f) => this.register(_0x2c275f));
  }
  resolve(_0x334b29) {
    let _0x3a397b = this._registrations["filter"](
      (_0x3d88fb) => _0x3d88fb.unitType === _0x334b29.unitType,
    );
    if (_0x3a397b.length > 1)
      throw Error("REFERENCED_UNIT_API_RESOLVER_CONFLICT");
    let _0x4d69b2 = _0x3a397b[0];
    if (!_0x4d69b2) throw Error("REFERENCED_UNIT_API_UNAVAILABLE");
    let _0xd88fce = _0x4d69b2.resolve(_0x334b29);
    if (!_0xd88fce) throw Error("REFERENCED_UNIT_API_UNAVAILABLE");
    return _0xd88fce;
  }
  list() {
    return [...this._registrations];
  }
};
function Mi() {
  return [
    {
      registrationId: "univer.sheet.workbook.api",
      unitType: e.UniverInstanceType["UNIVER_SHEET"],
      resolve: ({ api: _0x4af143, unitId: _0x1b9aca }) => {
        var _0x2542dd;
        return (_0x2542dd = Ii(_0x4af143, "getWorkbook")) == null
          ? undefined
          : _0x2542dd(_0x1b9aca);
      },
    },
    {
      registrationId: "univer.doc.document.api",
      unitType: e.UniverInstanceType["UNIVER_DOC"],
      resolve: ({ api: _0xce51f, unitId: _0xaea998 }) => {
        var _0x54ec3e;
        return (_0x54ec3e = Ii(_0xce51f, "getDocument")) == null
          ? undefined
          : _0x54ec3e(_0xaea998);
      },
    },
    {
      registrationId: "univer-pro.slide.presentation.api",
      unitType: e.UniverInstanceType["UNIVER_SLIDE"],
      resolve: ({ api: _0x32d06b, unitId: _0x3c1f91 }) => {
        var _0x37c99a;
        return (_0x37c99a = Ii(_0x32d06b, "getPresentation")) == null
          ? undefined
          : _0x37c99a(_0x3c1f91);
      },
    },
    {
      registrationId: "univer-pro.base.api",
      unitType: e.UniverInstanceType["UNIVER_BASE"],
      resolve: ({ api: _0x152162, unitId: _0x3bd82b }) => {
        var _0x3d4de2;
        return (_0x3d4de2 = Ii(_0x152162, "getBase")) == null
          ? undefined
          : _0x3d4de2(_0x3bd82b);
      },
    },
    {
      registrationId: "univer-pro.board.api",
      unitType: e.UniverInstanceType["UNIVER_BOARD"],
      resolve: ({ api: _0x5dfe05, unitId: _0x4db0a6 }) => {
        var _0x1bd8da;
        return (_0x1bd8da = Ii(_0x5dfe05, "getBoard")) == null
          ? undefined
          : _0x1bd8da(_0x4db0a6);
      },
    },
  ];
}
function Ni(_0x5a4763, _0x466c47) {
  let _0x5adfa0 = Fi(_0x466c47);
  if (_0x5a4763.has(Q)) {
    let _0x2bd40c = _0x5a4763.get(Q);
    _0x5adfa0.forEach((_0x5782d1) => {
      _0x2bd40c
        .list()
        .some(
          (_0x2a9266) => _0x2a9266.registrationId === _0x5782d1.registrationId,
        ) || _0x2bd40c.register(_0x5782d1);
    });
    return;
  }
  let _0x19a8bd = _0x5a4763,
    _0x5dd221 = ji.get(_0x19a8bd) ?? [];
  (_0x5adfa0.forEach((_0x549242) => {
    _0x5dd221.some(
      (_0x1ec0de) => _0x1ec0de.registrationId === _0x549242.registrationId,
    ) || _0x5dd221.push(_0x549242);
  }),
    ji.set(_0x19a8bd, _0x5dd221));
}
function Pi(_0x4086b4) {
  if (!_0x4086b4.has(Q)) return;
  let _0x8d05f4 = ji.get(_0x4086b4);
  if (!(_0x8d05f4 != null && _0x8d05f4.length)) return;
  let _0x3f63ac = _0x4086b4.get(Q);
  (_0x8d05f4.forEach((_0x3d86fa) => {
    _0x3f63ac
      .list()
      .some(
        (_0x2adcc7) => _0x2adcc7.registrationId === _0x3d86fa.registrationId,
      ) || _0x3f63ac.register(_0x3d86fa);
  }),
    ji.delete(_0x4086b4));
}
function Fi(_0x957b9b) {
  let _0x361964 = [];
  return (
    _0x957b9b.forEach((_0x400206) => {
      _0x361964.some(
        (_0x4401ab) => _0x4401ab.registrationId === _0x400206.registrationId,
      ) || _0x361964.push(_0x400206);
    }),
    _0x361964
  );
}
function Ii(_0xe286c6, _0x530510) {
  let _0x2880e2 = _0xe286c6[_0x530510];
  return typeof _0x2880e2 == "function" ? _0x2880e2.bind(_0xe286c6) : undefined;
}
var Li = class {
  constructor() {
    (v(this, "_unitRegistrations", []), v(this, "_dataRegistrations", []));
  }
  registerUnitProvider(_0x153b21) {
    return this._register(this._unitRegistrations, _0x153b21, "unit");
  }
  registerDataProvider(_0x4f125f) {
    return this._register(this._dataRegistrations, _0x4f125f, "data");
  }
  getUnitProvider(_0x19b36d, _0x4e52d6) {
    return this._get(this._unitRegistrations, _0x19b36d, _0x4e52d6, "unit");
  }
  getDataProvider(_0x3e2b12, _0x294b16) {
    return this._get(this._dataRegistrations, _0x3e2b12, _0x294b16, "data");
  }
  listUnitProviders() {
    return [...this._unitRegistrations];
  }
  listDataProviders() {
    return [...this._dataRegistrations];
  }
  _register(_0x15b6e5, _0x304899, _0x4eb775) {
    if (
      _0x15b6e5.some(
        (_0x41e47d) => _0x41e47d.registrationId === _0x304899.registrationId,
      )
    )
      throw Error(
        "Embed IResourceRef " +
          _0x4eb775 +
          " provider already registered: " +
          _0x304899.registrationId,
      );
    return (
      _0x15b6e5.push(_0x304899),
      (0, e.toDisposable)(() => {
        let _0x29fb39 = _0x15b6e5.indexOf(_0x304899);
        _0x29fb39 >= 0 && _0x15b6e5.splice(_0x29fb39, 1);
      })
    );
  }
  _get(_0x234de6, _0x2ad0a5, _0x22961b, _0x450c5c) {
    let _0x51d00f = _0x234de6.filter((_0x4c9903) =>
      this._matches(_0x4c9903.match, _0x2ad0a5, _0x22961b),
    );
    if (_0x51d00f.length === 0) return;
    let _0x2fe8e9 = Math.max(
        ..._0x51d00f.map((_0xdbb621) => _0xdbb621.priority ?? 0),
      ),
      _0x392ae6 = _0x51d00f.filter(
        (_0x5a010d) => (_0x5a010d.priority ?? 0) === _0x2fe8e9,
      );
    if (_0x392ae6.length > 1)
      throw new K("provider-conflict", {
        capability: _0x450c5c,
        registrationIds: _0x392ae6.map((_0x5781e1) =>
          "registrationId" in _0x5781e1 ? _0x5781e1.registrationId : undefined,
        ),
      });
    return _0x392ae6[0];
  }
  _matches(_0x4d96be, _0x40c7d9, _0x3d8ee9) {
    if (
      _0x4d96be.fileKinds &&
      !_0x4d96be.fileKinds["includes"](_0x40c7d9.file["kind"])
    )
      return false;
    if (_0x4d96be.uriSchemes) {
      if (_0x40c7d9.file["kind"] !== j.URI) return false;
      let _0x3d3c25 = Ri(_0x40c7d9.file["uri"]);
      if (
        !_0x3d3c25 ||
        !_0x4d96be.uriSchemes["some"](
          (_0xbf93ac) => _0xbf93ac.toLowerCase() === _0x3d3c25,
        )
      )
        return false;
    }
    return !(
      (_0x4d96be.unitTypes &&
        !_0x4d96be.unitTypes["includes"](
          _0x3d8ee9 ?? _0x40c7d9.unit["type"],
        )) ||
      (_0x4d96be.unitSelectors &&
        !_0x4d96be.unitSelectors["includes"](_0x40c7d9.unit["selector"]))
    );
  }
};
function Ri(_0x3a4812) {
  var _0x1c582a;
  return (_0x1c582a = /^([a-z][a-z0-9+.-]*):/i.exec(_0x3a4812)) == null ||
    (_0x1c582a = _0x1c582a[1]) == null
    ? undefined
    : _0x1c582a.toLowerCase();
}
let zi = class {
  constructor(_0x964679) {
    ((this._resourceRefProviderRegistry = _0x964679),
      v(this, "_loadStates", new Map()),
      v(this, "_loadStatesByRuntimeUnitId", new Map()),
      v(this, "_usageCounts", new Map()));
  }
  ensure(_0x5f391b, _0x53ec46 = {}) {
    let _0x3425fd = N(_0x5f391b),
      _0x44139e = this._resolveUnitType(_0x3425fd, _0x53ec46.unitType),
      _0x24f864 = this._getUnitLoadKey(_0x3425fd, _0x44139e),
      _0x481b10 = this._loadStates["get"](_0x24f864);
    if (_0x481b10)
      return this._withOptionalAbort(
        _0x481b10.providerLoadPromise,
        _0x53ec46.signal,
      );
    let _0x1c4100 = this._getUnitProvider(_0x3425fd, _0x44139e),
      _0x3ce3dd = this._createLoadState({
        ref: _0x3425fd,
        unitType: _0x44139e,
        unitLoadKey: _0x24f864,
        provider: _0x1c4100,
        createOptions: _0x53ec46.createOptions ?? h,
        signal: _0x53ec46.signal,
      });
    return this._withOptionalAbort(
      _0x3ce3dd.providerLoadPromise,
      _0x53ec46.signal,
    );
  }
  async readData(_0x388aa0, _0x209d7f = {}) {
    let _0x4f7bf9 = N(_0x388aa0),
      _0x219bd8 = F(_0x4f7bf9.part)
        ? "range"
        : yt(_0x4f7bf9.part)
          ? "table"
          : undefined;
    if (!_0x219bd8) throw new K("missing-data-selector", { ref: _0x4f7bf9 });
    let _0x4101c4 = _0x4f7bf9.part,
      _0x2a90fe = this._resolveUnitType(_0x4f7bf9, undefined),
      _0x30c750 = this._resourceRefProviderRegistry["getDataProvider"](
        _0x4f7bf9,
        _0x4f7bf9.unit["type"],
      );
    if (!_0x30c750)
      throw new K("provider-missing", {
        capability: "data",
        ref: _0x4f7bf9,
        unitType: _0x2a90fe,
      });
    return _0x30c750.provider["readData"]({
      ref: _0x4f7bf9,
      unitType: _0x2a90fe,
      dataType: _0x219bd8,
      selector: _0x4101c4,
      signal: _0x209d7f.signal,
    });
  }
  watchData(_0x42fdb7, _0x37c13a) {
    let _0x18d5a8 = N(_0x42fdb7),
      _0x3ba147 = F(_0x18d5a8.part)
        ? "range"
        : yt(_0x18d5a8.part)
          ? "table"
          : undefined;
    if (!_0x3ba147) throw new K("missing-data-selector", { ref: _0x18d5a8 });
    let _0x4bd772 = this._resolveUnitType(_0x18d5a8, undefined),
      _0x29eb42 = this._resourceRefProviderRegistry["getDataProvider"](
        _0x18d5a8,
        _0x18d5a8.unit["type"],
      );
    if (!_0x29eb42)
      throw new K("provider-missing", {
        capability: "data",
        ref: _0x18d5a8,
        unitType: _0x4bd772,
      });
    if (_0x29eb42.provider["watchData"])
      return _0x29eb42.provider["watchData"](
        {
          ref: _0x18d5a8,
          unitType: _0x4bd772,
          dataType: _0x3ba147,
          selector: _0x18d5a8.part,
        },
        _0x37c13a,
      );
  }
  addUsage(_0x2b33fb, _0x7d3eaa, _0x5edd30 = 1) {
    let _0x1fd9a9 = this._getUsageKey(_0x2b33fb, _0x7d3eaa);
    this._usageCounts["set"](
      _0x1fd9a9,
      (this._usageCounts["get"](_0x1fd9a9) ?? 0) + _0x5edd30,
    );
    let _0x3f9a79 = false;
    return (0, e.toDisposable)(() => {
      if (_0x3f9a79) return;
      _0x3f9a79 = true;
      let _0x196129 = (this._usageCounts["get"](_0x1fd9a9) ?? 0) - _0x5edd30;
      if (_0x196129 <= 0) {
        this._usageCounts["delete"](_0x1fd9a9);
        return;
      }
      this._usageCounts["set"](_0x1fd9a9, _0x196129);
    });
  }
  releaseUnit(_0x3f64c8) {
    for (let [_0x3df7ac] of this._usageCounts) {
      let [_0x3e40b5, _0x4b80f0] = JSON.parse(_0x3df7ac);
      (_0x3e40b5 === _0x3f64c8 || _0x4b80f0 === _0x3f64c8) &&
        this._usageCounts["delete"](_0x3df7ac);
    }
    for (let _0x29610b of this._loadStates["values"]()) {
      var _0x8629dd;
      ((_0x8629dd = _0x29610b.record) == null
        ? undefined
        : _0x8629dd.unitId) === _0x3f64c8 && this._removeLoadState(_0x29610b);
    }
  }
  _getUnitProvider(_0x5f13c7, _0x1096f5) {
    let _0x28b536 = this._resourceRefProviderRegistry["getUnitProvider"](
      _0x5f13c7,
      Mt(_0x1096f5),
    );
    if (!_0x28b536)
      throw new K("provider-missing", {
        capability: "unit",
        ref: _0x5f13c7,
        unitType: _0x1096f5,
      });
    return _0x28b536.provider;
  }
  _createLoadState(_0x1de688) {
    let _0x5832cb = {
      unitLoadKey: _0x1de688.unitLoadKey,
      ref: _0x1de688.ref,
      token: Symbol(_0x1de688.unitLoadKey),
      providerLoadPromise: Promise.resolve(null),
    };
    return (
      this._addLoadState(_0x5832cb),
      (_0x5832cb.providerLoadPromise = Promise.resolve()
        .then(() =>
          _0x1de688.provider["ensureUnit"]({
            ref: _0x1de688.ref,
            unitType: _0x1de688.unitType,
            createOptions: _0x1de688.createOptions,
            signal: _0x1de688.signal,
          }),
        )
        .then((_0x5dfdc3) => {
          if (_0x5dfdc3.unitType !== _0x1de688.unitType)
            throw new K("unit-type-mismatch", {
              expected: _0x1de688.unitType,
              actual: _0x5dfdc3.unitType,
            });
          let _0x3c7699 = {
            ref: this._formatUnitRef(_0x1de688.ref),
            unitId: _0x5dfdc3.unitId,
            unitType: _0x5dfdc3.unitType,
          };
          return (
            this._loadStates["get"](_0x5832cb.unitLoadKey) === _0x5832cb &&
              ((_0x5832cb.record = _0x3c7699),
              this._addRuntimeUnitLoadState(_0x3c7699.unitId, _0x5832cb)),
            _0x3c7699
          );
        })
        .catch((_0x3d98cf) => {
          throw (this._removeLoadState(_0x5832cb), _0x3d98cf);
        })),
      _0x5832cb
    );
  }
  _addLoadState(_0x329c28) {
    this._loadStates["set"](_0x329c28.unitLoadKey, _0x329c28);
  }
  _removeLoadState(_0x30d510) {
    if (
      (this._loadStates["get"](_0x30d510.unitLoadKey) === _0x30d510 &&
        this._loadStates["delete"](_0x30d510.unitLoadKey),
      _0x30d510.record)
    ) {
      let _0x2c509a = this._loadStatesByRuntimeUnitId["get"](
        _0x30d510.record["unitId"],
      );
      (_0x2c509a == null || _0x2c509a.delete(_0x30d510),
        (_0x2c509a == null ? undefined : _0x2c509a.size) === 0 &&
          this._loadStatesByRuntimeUnitId["delete"](
            _0x30d510.record["unitId"],
          ));
    }
  }
  _addRuntimeUnitLoadState(_0xcaa43d, _0x2861e7) {
    let _0x45784e = this._loadStatesByRuntimeUnitId["get"](_0xcaa43d);
    (_0x45784e ||
      ((_0x45784e = new Set()),
      this._loadStatesByRuntimeUnitId["set"](_0xcaa43d, _0x45784e)),
      _0x45784e.add(_0x2861e7));
  }
  _withOptionalAbort(_0x21d118, _0x228059) {
    return _0x228059 ? this._withAbort(_0x21d118, _0x228059) : _0x21d118;
  }
  _withAbort(_0x3240b4, _0x4f4546) {
    return _0x4f4546.aborted
      ? Promise.reject(Error("REFERENCED_UNIT_LOAD_ABORTED"))
      : new Promise((_0x1762f3, _0x3dde5b) => {
          let _0x323c3f = () => {
            (_0x4f4546.removeEventListener("abort", _0x323c3f),
              _0x3dde5b(Error("REFERENCED_UNIT_LOAD_ABORTED")));
          };
          (_0x4f4546.addEventListener("abort", _0x323c3f, { once: true }),
            _0x3240b4.then(
              (_0x194fb4) => {
                (_0x4f4546.removeEventListener("abort", _0x323c3f),
                  _0x1762f3(_0x194fb4));
              },
              (_0x14c0f9) => {
                (_0x4f4546.removeEventListener("abort", _0x323c3f),
                  _0x3dde5b(_0x14c0f9));
              },
            ));
        });
  }
  _getUnitLoadKey(_0x54e9b3, _0x1cdec9) {
    return JSON.stringify([P(_0x54e9b3), _0x1cdec9]);
  }
  _getUsageKey(_0x5232ad, _0x2140c4) {
    return JSON.stringify([_0x5232ad, _0x2140c4]);
  }
  _resolveUnitType(_0x24848d, _0x19f714) {
    let _0xd446ad = R(_0x24848d.unit["type"]);
    if (
      _0x19f714 !== undefined &&
      _0x19f714 !== e.UniverInstanceType["UNRECOGNIZED"] &&
      _0x19f714 !== _0xd446ad
    )
      throw new K("unit-type-mismatch", {
        expected: _0x19f714,
        actual: _0xd446ad,
      });
    return _0xd446ad;
  }
  _formatUnitRef(_0x5a3d3e) {
    return bt({ file: _0x5a3d3e.file, unit: _0x5a3d3e.unit });
  }
};
zi = B([z(0, (0, e.Inject)(Li))], zi);
var Bi = class {
  constructor() {
    v(this, "_policy", "none");
  }
  getPolicy() {
    return this._policy;
  }
  enableExclusivePolicy() {
    this._policy = "exclusive";
  }
};
let Vi = class {
  constructor(_0x59ba44, _0x3437b8, _0x15f91c, _0x294aff, _0x26f088) {
    ((this._modelService = _0x59ba44),
      (this._unitLeaseService = _0x3437b8),
      (this._unitLeasePolicyService = _0x15f91c),
      (this._referencedUnitManager = _0x294aff),
      (this._univerInstanceService = _0x26f088),
      v(this, "_materializingDescriptors", new Map()));
  }
  async materializeDescriptor(_0x518f43) {
    let _0x4b6a96 = this._getLoadedDescriptorState(_0x518f43.descriptor);
    if (_0x4b6a96)
      return _0x4b6a96.stored
        ? (this._leaseMaterializedDescriptor(_0x4b6a96.descriptor),
          _0x4b6a96.descriptor)
        : this._commitMaterializedDescriptor(_0x4b6a96.descriptor);
    let _0x7b75a9 = this._getMaterializeKey(_0x518f43.descriptor),
      _0xf6db82 = this._materializingDescriptors["get"](_0x7b75a9);
    if (_0xf6db82) return _0xf6db82;
    let _0x23a6b8 = this._loadAndCommitDescriptor(_0x518f43);
    this._materializingDescriptors["set"](_0x7b75a9, _0x23a6b8);
    let _0x512cfa = () => {
      this._materializingDescriptors["get"](_0x7b75a9) === _0x23a6b8 &&
        this._materializingDescriptors["delete"](_0x7b75a9);
    };
    return (_0x23a6b8.then(_0x512cfa, _0x512cfa), _0x23a6b8);
  }
  async _loadAndCommitDescriptor(_0x13ed3f) {
    return this._commitMaterializedDescriptor(
      await this._loadDescriptor(_0x13ed3f),
    );
  }
  async _loadDescriptor(_0x36da36) {
    let _0x520c48 = _0x36da36.descriptor,
      _0x36f19b = await this._referencedUnitManager["ensure"](
        _0x520c48.source["ref"],
        {
          unitType: _0x520c48.childType,
          signal: _0x36da36.signal,
          createOptions: _0x36da36.createOptions ?? h,
        },
      );
    return {
      ..._0x520c48,
      source: {
        unitType: _0x520c48.childType,
        ref: _0x36f19b.ref,
        ...(_0x520c48.source["creationConfig"] === undefined
          ? undefined
          : { creationConfig: _0x520c48.source["creationConfig"] }),
      },
      childUnitId: _0x36f19b.unitId,
      childType: _0x36f19b.unitType,
    };
  }
  _commitMaterializedDescriptor(_0x3a1699) {
    let _0x338b3a;
    try {
      return (
        (_0x338b3a = this._leaseMaterializedDescriptor(_0x3a1699)),
        this._modelService["addDescriptor"](_0x3a1699.hostUnitId, _0x3a1699),
        this._modelService["getDescriptor"](
          _0x3a1699.hostUnitId,
          _0x3a1699.embedId,
        )
      );
    } catch (_0x49a149) {
      throw (_0x338b3a == null || _0x338b3a.dispose(), _0x49a149);
    }
  }
  _leaseMaterializedDescriptor(_0x272836) {
    if (
      !_0x272836.childUnitId ||
      _0x272836.childType == null ||
      this._unitLeasePolicyService["getPolicy"]() !== "exclusive"
    )
      return;
    let _0x14e249 = this._getDescriptorOwner(_0x272836);
    if (!this._unitLeaseService["hasLease"](_0x14e249, _0x272836.childUnitId))
      return this._unitLeaseService["acquire"]({
        ..._0x14e249,
        childUnitId: _0x272836.childUnitId,
        childType: _0x272836.childType,
      });
  }
  _getLoadedDescriptorState(_0x95d3f7) {
    let _0x1bd4d9 = this._modelService["getDescriptor"](
        _0x95d3f7.hostUnitId,
        _0x95d3f7.embedId,
      ),
      _0x16441f = _0x1bd4d9 ?? _0x95d3f7;
    if (!(!_0x16441f.childUnitId || _0x16441f.childType == null)) {
      if (
        this._univerInstanceService["getUnitType"](_0x16441f.childUnitId) !==
        _0x16441f.childType
      )
        throw new y("EMBED_MATERIALIZED_CHILD_UNIT_NOT_LOADED", {
          hostUnitId: _0x16441f.hostUnitId,
          embedId: _0x16441f.embedId,
          childUnitId: _0x16441f.childUnitId,
          childType: _0x16441f.childType,
        });
      return { descriptor: _0x16441f, stored: _0x1bd4d9 != null };
    }
  }
  _getMaterializeKey(_0x4153d2) {
    return JSON.stringify([
      _0x4153d2.hostUnitId,
      _0x4153d2.embedId,
      _0x4153d2.childType,
      L(_0x4153d2.source["ref"]),
    ]);
  }
  _getDescriptorOwner(_0x27c874) {
    return { hostUnitId: _0x27c874.hostUnitId, embedId: _0x27c874.embedId };
  }
};
Vi = B(
  [
    z(0, (0, e.Inject)(V)),
    z(1, (0, e.Inject)(Nt)),
    z(2, (0, e.Inject)(Bi)),
    z(3, (0, e.Inject)(q)),
    z(4, e.IUniverInstanceService),
  ],
  Vi,
);
const Hi = (0, e.createIdentifier)("embed.referenced-unit-catalog.service");
var Ui = class {
  constructor(_0x19f5d4) {
    this._instanceService = _0x19f5d4;
  }
  async listUnits(_0x40c4ce) {
    return _0x40c4ce === e.UniverInstanceType["UNIVER_SHEET"]
      ? this._instanceService["getAllUnitsForType"](_0x40c4ce).map(
          (_0x6fbe7f) => ({
            name: _0x6fbe7f.name,
            ref: Ki(_0x6fbe7f.getUnitId(), _0x40c4ce),
          }),
        )
      : this._instanceService["getAllUnitsForType"](_0x40c4ce).map(
          (_0x4d60cd) => ({
            name: _0x4d60cd.getSnapshot().name,
            ref: Ki(_0x4d60cd.getUnitId(), _0x40c4ce),
          }),
        );
  }
  async loadUnit(_0x52e67d) {
    if (_0x52e67d.ref["file"].kind !== j.SELF)
      throw Error("REFERENCED_UNIT_SOURCE_UNSUPPORTED");
    let _0x10b29b;
    try {
      _0x10b29b = R(_0x52e67d.ref["unit"].type);
    } catch {
      throw Error("REFERENCED_UNIT_SOURCE_UNSUPPORTED");
    }
    if (_0x10b29b === e.UniverInstanceType["UNIVER_SHEET"]) {
      let _0x15f1a8 = this._instanceService["getUnit"](
        _0x52e67d.ref["unit"].selector,
        _0x10b29b,
      );
      if (_0x15f1a8) return _0x15f1a8.getSnapshot();
    } else {
      if (_0x10b29b === e.UniverInstanceType["UNIVER_BASE"]) {
        let _0x45db00 = this._instanceService["getUnit"](
          _0x52e67d.ref["unit"].selector,
          _0x10b29b,
        );
        if (_0x45db00) return _0x45db00.getSnapshot();
      } else throw Error("REFERENCED_UNIT_SOURCE_UNSUPPORTED");
    }
    throw Error("REFERENCED_UNIT_NOT_FOUND");
  }
};
let Wi = class extends e.Disposable {
  constructor(_0x2d84e5) {
    (super(),
      v(this, "_loadedSource", undefined),
      v(this, "_sources", []),
      v(this, "_unitOwners", new Map()),
      (this._loadedSource = new Ui(_0x2d84e5)));
  }
  registerSource(_0x35cff4) {
    return (
      this._sources["push"](_0x35cff4),
      (0, e.toDisposable)(() => {
        let _0x5dc90f = this._sources["indexOf"](_0x35cff4);
        _0x5dc90f >= 0 && this._sources["splice"](_0x5dc90f, 1);
        for (let [_0x4e5279, _0xd9395a] of this._unitOwners)
          _0xd9395a === _0x35cff4 && this._unitOwners["delete"](_0x4e5279);
      })
    );
  }
  async listUnits(_0x596d3d) {
    let _0x3c7b2b = [],
      _0x32d263 = new Set();
    await this._appendSourceUnits(
      this._loadedSource,
      _0x596d3d,
      _0x3c7b2b,
      _0x32d263,
    );
    for (let _0x710bf6 of this._sources)
      try {
        await this._appendSourceUnits(
          _0x710bf6,
          _0x596d3d,
          _0x3c7b2b,
          _0x32d263,
        );
      } catch {}
    return _0x3c7b2b;
  }
  async loadUnit(_0x4ed77b) {
    let _0x32e651 = this._unitOwners["get"](P(_0x4ed77b.ref));
    if (!_0x32e651) throw Error("REFERENCED_UNIT_NOT_LISTED");
    return _0x32e651.loadUnit(_0x4ed77b);
  }
  async _appendSourceUnits(_0x2a2462, _0x3e413a, _0x13905d, _0x580764) {
    let _0x3da130 = await _0x2a2462.listUnits(_0x3e413a);
    (_0x2a2462 !== this._loadedSource &&
      !this._sources["includes"](_0x2a2462)) ||
      _0x3da130.forEach((_0x34d3bb) => {
        if (!Gi(_0x34d3bb, _0x3e413a)) return;
        let _0x5b172c = P(_0x34d3bb.ref);
        _0x580764.has(_0x5b172c) ||
          (_0x580764.add(_0x5b172c),
          this._unitOwners["set"](_0x5b172c, _0x2a2462),
          _0x13905d.push(_0x34d3bb));
      });
  }
};
Wi = B([z(0, e.IUniverInstanceService)], Wi);
function Gi(_0x2ff77c, _0x3f5813) {
  try {
    return R(_0x2ff77c.ref["unit"].type) === _0x3f5813;
  } catch {
    return false;
  }
}
function Ki(_0x2382bc, _0x2c45b8) {
  return {
    file: { kind: j.SELF },
    unit: { selector: _0x2382bc, type: Mt(_0x2c45b8) },
  };
}
let $ = class extends e.Plugin {
  constructor(_0x3aae4a = _n, _0x4d9c1e, _0x5e9884, _0x4e295d) {
    (super(),
      (this._config = _0x3aae4a),
      (this._injector = _0x4d9c1e),
      (this._commandService = _0x5e9884),
      (this._configService = _0x4e295d));
    let { ..._0x10d153 } = (0, e.merge)({}, _n, this._config);
    this._configService["setConfig"]("embed.config", _0x10d153);
  }
  onStarting() {
    (this._registerDependencies(),
      this._registerReferencedUnitSources(),
      this._flushPendingContributions());
    let _0x3c07aa = this._injector["get"](H);
    (_0x3c07aa.list().length === 0 && _0x3c07aa.registerMany(Rt()),
      Tn().forEach((_0x423d1f) => {
        _0x3c07aa.getCapability(_0x423d1f) || _0x3c07aa.register(_0x423d1f);
      }),
      ri(this._injector),
      this._flushPendingContributions());
    let _0x2f0cd4 = this._injector["get"](Li);
    (this.disposeWithMe(
      _0x2f0cd4.registerUnitProvider(xi(this._injector["get"](fi))),
    ),
      this.disposeWithMe(
        _0x2f0cd4.registerDataProvider(Si(this._injector["get"](pi))),
      ),
      (this._config["resourceRefUnitProviderRegistrations"] ?? []).forEach(
        (_0x1d29c2) =>
          this.disposeWithMe(_0x2f0cd4.registerUnitProvider(_0x1d29c2)),
      ),
      (this._config["resourceRefDataProviderRegistrations"] ?? []).forEach(
        (_0x556fd8) =>
          this.disposeWithMe(_0x2f0cd4.registerDataProvider(_0x556fd8)),
      ));
    let _0xa95c37 = this._injector["get"](Q);
    (Mi().forEach((_0x1d983e) => {
      _0xa95c37
        .list()
        .some((_0x55abd0) => _0x55abd0.unitType === _0x1d983e.unitType) ||
        this.disposeWithMe(_0xa95c37.register(_0x1d983e));
    }),
      this._flushPendingContributions(),
      (0, e.touchDependencies)(this._injector, [
        [V],
        [ii],
        [W],
        [k],
        [G],
        [ai],
        [Li],
        [Hi],
        [Q],
        [q],
        [Bi],
        [Nt],
        [Vi],
        [fi],
        [pi],
        [Ut],
        [U],
        [yn],
      ]),
      [Pt, Ft, hn, gn, pn, mn, an, on, sn, cn, ln, un].forEach((_0x24c478) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x24c478)),
      ));
  }
  _registerReferencedUnitSources() {
    let _0x477b1d = this._injector["get"](Hi);
    (this.disposeWithMe(_0x477b1d),
      (this._config["referencedUnitSources"] ?? []).forEach((_0x1a30c9) => {
        this.disposeWithMe(_0x477b1d.registerSource(_0x1a30c9));
      }));
  }
  _registerDependencies() {
    [
      [V],
      [ii],
      [H],
      [W],
      [k],
      [G],
      [ai],
      [oi],
      [Li],
      [Hi, { useClass: Wi }],
      [Q],
      [q, { useClass: zi }],
      [Bi],
      [Nt],
      [Vi],
      [fi],
      [pi],
      [Ut],
      [Ht],
      [U],
      [yn],
    ].forEach((_0x48b779) => this._injector["add"](_0x48b779));
  }
  onReady() {
    (this._flushPendingContributions(),
      this._injector["has"](r.IFormulaReferenceDataProviderRegistry) &&
        this.disposeWithMe(
          this._injector["get"](
            r.IFormulaReferenceDataProviderRegistry,
          ).register(this._injector["get"](oi)),
        ));
  }
  _flushPendingContributions() {
    (Bt(this._injector), Kt(this._injector), Pi(this._injector));
  }
};
(v($, "pluginName", "UNIVER_EMBED_PLUGIN"),
  v($, "packageName", dn),
  v($, "version", fn),
  v($, "type", e.UniverInstanceType["UNIVER_UNKNOWN"]),
  ($ = B(
    [
      (0, e.DependentOn)(i.UniverLicensePlugin),
      z(1, (0, e.Inject)(e.Injector)),
      z(2, e.ICommandService),
      z(3, e.IConfigService),
    ],
    $,
  )),
  (exports.CREATE_EMBED_HOST_ANCHOR_MUTATION_ID = d),
  (exports.CreateEmbedCommand = an),
  (exports.DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY = te),
  (exports.DEFAULT_EMBED_FLOAT_LAYOUT_POLICY = ee),
  (exports.DEFAULT_EMBED_TAB_LAYOUT_POLICY = _),
  (exports.EMBED_CHILD_CREATE_OPTIONS = h),
  (exports.EMBED_SHEETS_FLOATING_COMPONENT_KEY =
    "UniverEmbedSheetsFloatingObject"),
  (exports.EmbedCapabilityRegistryService = H),
  Object.defineProperty(exports, "EmbedCreationService", {
    enumerable: true,
    get: function () {
      return U;
    },
  }),
  (exports.EmbedError = y),
  (exports.EmbedErrorCode = ae),
  (exports.EmbedFocusOwnerService = ai),
  Object.defineProperty(exports, "EmbedFormulaReferenceDataProvider", {
    enumerable: true,
    get: function () {
      return oi;
    },
  }),
  (exports.EmbedHostAdapterRegistryService = W),
  (exports.EmbedHostAnchorModelService = k),
  (exports.EmbedHostEntryEnum = g),
  Object.defineProperty(exports, "EmbedModelService", {
    enumerable: true,
    get: function () {
      return V;
    },
  }),
  (exports.EmbedReferencedUnitApiResolverRegistryService = Q),
  Object.defineProperty(exports, "EmbedReferencedUnitMaterializeService", {
    enumerable: true,
    get: function () {
      return Vi;
    },
  }),
  (exports.EmbedResourceRefProviderRegistryService = Li),
  (exports.EmbedUnitLeasePolicyService = Bi),
  (exports.IReferencedUnitCatalogService = Hi),
  (exports.IReferencedUnitManagerService = q),
  (exports.REMOVE_EMBED_HOST_ANCHOR_MUTATION_ID = f),
  (exports.REMOVE_EMBED_HOST_ANCHOR_RECORD_MUTATION_ID = m),
  (exports.RESOURCE_REF_FILE_KIND = j),
  (exports.ReferencedUnitDataType = vn),
  (exports.RemoveEmbedCommand = sn),
  (exports.ResourceRefError = M),
  (exports.ResourceRefErrorCode = pt),
  (exports.SET_EMBED_HOST_ANCHOR_RECORD_MUTATION_ID = p),
  (exports.SetEmbedBoundsCommand = ln),
  (exports.SetEmbedDescriptorMutation = Pt),
  (exports.SetEmbedDisplayTargetCommand = cn),
  (exports.SetEmbedSheetPlacementCommand = un),
  (exports.SoftDeleteEmbedDescriptorMutation = Ft),
  Object.defineProperty(exports, "UniverEmbedPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.createBasesTableListBlockHostAdapterContribution = En),
  (exports.createBoardsFloatingObjectHostAdapterContribution = Bn),
  (exports.createDefaultEmbedSourceMeta = zt),
  (exports.createDocsCustomBlockHostAdapterContribution = nr),
  (exports.createProEmbedProductCapabilities = Tn),
  (exports.createSlidesFloatingObjectHostAdapterContribution = Mr),
  (exports.createSlidesPageListBlockHostAdapterContribution = Pr),
  (exports.fromResourceRefUnitType = R),
  (exports.getEmbedSheetsTabCustomData = yr),
  (exports.getResourceRefInputUnitSelector = jt),
  (exports.getResourceRefUnitKey = P),
  (exports.isResourceRefRangePart = F),
  (exports.isResourceRefTablePart = yt),
  (exports.normalizeResourceRefInput = N),
  (exports.normalizeResourceRefLocator = kt),
  (exports.parseResourceRef = I),
  (exports.registerEmbedHostAdapterContributions = Gt),
  (exports.registerReferencedUnitApiResolvers = Ni),
  (exports.toResourceRefUnitType = Mt));
