import {
  CommandType as _0x5d389e,
  DependentOn as _0x3f6f33,
  Disposable as _0x11b9ef,
  ICommandService as _0x445c48,
  IConfigService as _0x3478e8,
  IUndoRedoService as _0xd023d0,
  IUniverInstanceService as _0x537c57,
  Inject as _0x1dbdaf,
  Injector as _0x4c7ca6,
  Plugin as _0x3f178f,
  Tools as _0x4aa08a,
  UniverInstanceType as _0x4a3622,
  merge as _0x10608a,
  registerDependencies as _0x5901b7,
  toDisposable as _0x4bc74e,
} from "@univerjs/core";
import {
  RevertRevisionMutation as _0x5ba92d,
  UniverCollaborationPlugin as _0x204cd5,
  parseProtocolChangeset as _0x525eb9,
} from "@univerjs-pro/collaboration";
import { UniverLicensePlugin as _0x52dd4f } from "@univerjs-pro/license";
import { HTTPService as _0x219935 } from "@univerjs/network";
import { ErrorCode as _0x5554d6 } from "@univerjs/protocol";
import { BehaviorSubject as _0x1abe4d } from "rxjs";
let ae = (function (_0x1eb873) {
    return (
      (_0x1eb873.HISTORY = "history"),
      (_0x1eb873.SNAPSHOT = "snapshot"),
      _0x1eb873
    );
  })({}),
  oe = (function (_0x13bc4a) {
    return (
      (_0x13bc4a.DELETE = "delete"),
      (_0x13bc4a.INSERT = "insert"),
      (_0x13bc4a.UPDATE = "update"),
      _0x13bc4a
    );
  })({}),
  se = (function (_0x454038) {
    return (
      (_0x454038.SUMMARY = "summary"),
      (_0x454038.CHANGES = "changes"),
      (_0x454038.FULL = "full"),
      _0x454038
    );
  })({}),
  ce = (function (_0x2eca06) {
    return (
      (_0x2eca06.DELETE = "delete"),
      (_0x2eca06.EQUAL = "equal"),
      (_0x2eca06.INSERT = "insert"),
      _0x2eca06
    );
  })({}),
  le = (function (_0x5a4b00) {
    return (
      (_0x5a4b00.ARRAY = "array"),
      (_0x5a4b00.BOOLEAN = "boolean"),
      (_0x5a4b00.COLOR = "color"),
      (_0x5a4b00.FORMULA = "formula"),
      (_0x5a4b00.GEOMETRY = "geometry"),
      (_0x5a4b00.NULL = "null"),
      (_0x5a4b00.NUMBER = "number"),
      (_0x5a4b00.OBJECT = "object"),
      (_0x5a4b00.POSITION = "position"),
      (_0x5a4b00.REFERENCE = "reference"),
      (_0x5a4b00.STYLE = "style"),
      (_0x5a4b00.TEXT = "text"),
      (_0x5a4b00.UNKNOWN = "unknown"),
      _0x5a4b00
    );
  })({}),
  ue = (function (_0x2b8132) {
    return (
      (_0x2b8132.UNIT = "unit"),
      (_0x2b8132.WORKBOOK = "workbook"),
      (_0x2b8132.WORKSHEET = "worksheet"),
      (_0x2b8132.CELL = "cell"),
      (_0x2b8132.ROW_COLUMN = "row-column"),
      (_0x2b8132.MOVE = "move"),
      (_0x2b8132.CONDITION_FORMAT = "condition-format"),
      (_0x2b8132.DATA_VALIDATION = "data-validation"),
      (_0x2b8132.SPARKLINE = "sparkline"),
      (_0x2b8132.TABLE = "table"),
      (_0x2b8132.SHAPE = "shape"),
      (_0x2b8132.CHART = "chart"),
      (_0x2b8132.PIVOT = "pivot"),
      (_0x2b8132.PARAGRAPH = "paragraph"),
      (_0x2b8132.TEXT_STYLE = "text-style"),
      (_0x2b8132.SECTION = "section"),
      (_0x2b8132.BLOCK_RANGE = "block-range"),
      (_0x2b8132.CUSTOM_RANGE = "custom-range"),
      (_0x2b8132.TABLE_RANGE = "table-range"),
      (_0x2b8132.CUSTOM_BLOCK = "custom-block"),
      (_0x2b8132.COLUMN_GROUP = "column-group"),
      (_0x2b8132.DRAWING = "drawing"),
      (_0x2b8132.HEADER = "header"),
      (_0x2b8132.FOOTER = "footer"),
      (_0x2b8132.DOCUMENT_STYLE = "document-style"),
      (_0x2b8132.DOCUMENT_SETTING = "document-setting"),
      (_0x2b8132.CUSTOM_DECORATION = "custom-decoration"),
      (_0x2b8132.DOC_HYPERLINK = "doc-hyperlink"),
      (_0x2b8132.DOC_CALLOUT = "doc-callout"),
      (_0x2b8132.DOC_QUOTE = "doc-quote"),
      (_0x2b8132.DOC_CHART = "doc-chart"),
      (_0x2b8132.DOC_CHART_DATA = "doc-chart-data"),
      (_0x2b8132.DOC_CODE = "doc-code"),
      (_0x2b8132.DOC_LATEX = "doc-latex"),
      (_0x2b8132.DOC_SHAPE_RESOURCE = "doc-shape-resource"),
      (_0x2b8132.DOC_TABLE_RESOURCE = "doc-table-resource"),
      (_0x2b8132.SLIDE = "slide"),
      (_0x2b8132.SLIDE_ELEMENT = "slide-element"),
      (_0x2b8132.SLIDE_TRANSITION = "slide-transition"),
      (_0x2b8132.SLIDE_TRANSITION_REFERENCE = "slide-transition-ref"),
      (_0x2b8132.SLIDE_MASTER = "slide-master"),
      (_0x2b8132.SLIDE_LAYOUT = "slide-layout"),
      (_0x2b8132.SLIDE_THEME = "slide-theme"),
      (_0x2b8132.SLIDE_CHART = "slide-chart"),
      (_0x2b8132.SLIDE_CHART_DATA = "slide-chart-data"),
      (_0x2b8132.SLIDE_TABLE = "slide-table"),
      (_0x2b8132.BASE = "base"),
      (_0x2b8132.FIELD = "field"),
      (_0x2b8132.RECORD = "record"),
      (_0x2b8132.VIEW = "view"),
      (_0x2b8132.BOARD_PAGE = "board-page"),
      (_0x2b8132.BOARD_ELEMENT = "board-element"),
      (_0x2b8132.BOARD_THEME = "board-theme"),
      (_0x2b8132.BOARD_CHART = "board-chart"),
      (_0x2b8132.BOARD_CHART_DATA = "board-chart-data"),
      (_0x2b8132.BOARD_TABLE = "board-table"),
      _0x2b8132
    );
  })({}),
  de = (function (_0x51db6e) {
    return (
      (_0x51db6e.DEGRADED = "degraded"),
      (_0x51db6e.READY = "ready"),
      _0x51db6e
    );
  })({}),
  fe = (function (_0x186d0d) {
    return (
      (_0x186d0d.SHEET_SNAPSHOT_AXIS_IDENTITY_AMBIGUOUS =
        "sheet-snapshot-axis-identity-ambiguous"),
      (_0x186d0d.SHEET_STRUCTURAL_HISTORY_FALLBACK =
        "sheet-structural-history-partially-falls-back-to-snapshot-coordinates"),
      _0x186d0d
    );
  })({});
function _(_0x3ffd38, _0x27a49f) {
  if (JSON.stringify(_0x3ffd38) > JSON.stringify(_0x27a49f))
    return _(_0x27a49f, _0x3ffd38).map((_0x1b112d) => ({
      leftIndex: _0x1b112d.rightIndex,
      rightIndex: _0x1b112d.leftIndex,
    }));
  let _0x27a24a = new Map(
      _0x27a49f.map((_0x471c20, _0x59fe84) => [_0x471c20, _0x59fe84]),
    ),
    _0x37c512 = _0x3ffd38.flatMap((_0x4eaba8, _0x4a3ebb) => {
      let _0x35c9fb = _0x27a24a.get(_0x4eaba8);
      return _0x35c9fb === undefined
        ? []
        : [{ leftIndex: _0x4a3ebb, rightIndex: _0x35c9fb }];
    }),
    _0x3d6008 = [],
    _0x421559 = new Int32Array(_0x37c512.length).fill(-1);
  _0x37c512.forEach((_0x1145ee, _0x3a0496) => {
    let _0x1f372e = 0,
      _0x571e79 = _0x3d6008.length;
    for (; _0x1f372e < _0x571e79;) {
      let _0x26d40e = (_0x1f372e + _0x571e79) >>> 1;
      _0x37c512[_0x3d6008[_0x26d40e]].rightIndex < _0x1145ee.rightIndex
        ? (_0x1f372e = _0x26d40e + 1)
        : (_0x571e79 = _0x26d40e);
    }
    (_0x1f372e > 0 && (_0x421559[_0x3a0496] = _0x3d6008[_0x1f372e - 1]),
      (_0x3d6008[_0x1f372e] = _0x3a0496));
  });
  let _0x299baa = [];
  for (
    let _0x459688 = _0x3d6008[_0x3d6008.length - 1] ?? -1;
    _0x459688 >= 0;
    _0x459688 = _0x421559[_0x459688]
  )
    _0x299baa.push(_0x37c512[_0x459688]);
  (_0x299baa.reverse(),
    _0x299baa.push({
      leftIndex: _0x3ffd38.length,
      rightIndex: _0x27a49f.length,
    }));
  let _0x5963d2 = [],
    _0x59e459 = 0,
    _0x1a6db7 = 0;
  for (let _0x4d13bd of _0x299baa) {
    for (; _0x59e459 < _0x4d13bd.leftIndex;)
      _0x5963d2.push({ leftIndex: _0x59e459++, rightIndex: null });
    for (; _0x1a6db7 < _0x4d13bd.rightIndex;)
      _0x5963d2.push({ leftIndex: null, rightIndex: _0x1a6db7++ });
    _0x59e459 < _0x3ffd38.length &&
      _0x1a6db7 < _0x27a49f.length &&
      _0x5963d2.push({ leftIndex: _0x59e459++, rightIndex: _0x1a6db7++ });
  }
  return _0x5963d2;
}
const v = new Set([
    "angle",
    "height",
    "left",
    "rotation",
    "top",
    "transform",
    "width",
    "x",
    "y",
  ]),
  pe = new Set(["index", "order", "orderKey", "position", "zIndex"]),
  me = new Set([
    "background",
    "backgroundColor",
    "bold",
    "border",
    "fill",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "italic",
    "lineHeight",
    "numberFormat",
    "opacity",
    "shadow",
    "stroke",
    "style",
    "textColor",
    "underline",
  ]),
  he = new Set([
    "dataSourceId",
    "endId",
    "layoutId",
    "masterId",
    "parentId",
    "refId",
    "sourceId",
    "startId",
    "targetId",
  ]);
function ge(_0x319976) {
  let _0x3013c5 = new Map(),
    _0x3ebee4 = new Map();
  for (let _0x3ef4ed of _0x319976.left)
    _0x3013c5.set(_0x3ef4ed.stableId, _0x3ef4ed);
  for (let _0x16e5b5 of _0x319976.right)
    _0x3ebee4.set(_0x16e5b5.stableId, _0x16e5b5);
  let _0x24e569 = _e(_0x319976.left, _0x3ebee4),
    _0xa0a570 = _e(_0x319976.right, _0x3013c5),
    _0x4f3090 = [];
  for (let [_0x2321c6, _0xc52e6f] of _0x3013c5) {
    let _0x3b5007 = ve(
      _0x319976,
      _0x2321c6,
      _0xc52e6f,
      _0x3ebee4.get(_0x2321c6),
      _0x24e569,
      _0xa0a570,
    );
    _0x3b5007 !== undefined && _0x4f3090.push(_0x3b5007);
  }
  for (let [_0x22873d, _0xb828de] of _0x3ebee4)
    if (!_0x3013c5.has(_0x22873d)) {
      let _0x3b32cc = ve(
        _0x319976,
        _0x22873d,
        undefined,
        _0xb828de,
        _0x24e569,
        _0xa0a570,
      );
      _0x3b32cc !== undefined && _0x4f3090.push(_0x3b32cc);
    }
  return _0x4f3090;
}
function _e(_0x11ca8c, _0x5d6103) {
  let _0x17f75f = new Map(),
    _0x518343 = 0;
  for (let _0x3f776d of _0x11ca8c)
    _0x5d6103.has(_0x3f776d.stableId) &&
      _0x17f75f.set(_0x3f776d.stableId, _0x518343++);
  return _0x17f75f;
}
function ve(_0x271c22, _0x57537e, _0x179ef2, _0x11d452, _0x3cf5be, _0x4955e5) {
  let _0x206a71 = ye(_0x179ef2, _0x11d452),
    _0x47ff74 = be(_0x57537e, _0x179ef2, _0x11d452, _0x3cf5be, _0x4955e5);
  if (xe(_0x179ef2, _0x11d452, _0x47ff74)) return;
  let _0x3ab5c3 =
      _0x271c22.parentStableId === undefined
        ? [_0x271c22.entityType, _0x57537e]
        : [_0x271c22.entityType, _0x271c22.parentStableId, _0x57537e],
    _0x466d7e = we(
      _0x179ef2 == null ? undefined : _0x179ef2.value,
      _0x11d452 == null ? undefined : _0x11d452.value,
      _0x206a71,
    );
  Se(_0x466d7e, _0x179ef2, _0x11d452, _0x47ff74);
  let _0x3379ce =
    (_0x11d452 == null ? undefined : _0x11d452.displayName) ??
    (_0x179ef2 == null ? undefined : _0x179ef2.displayName);
  return {
    id: [_0x271c22.entityType, _0x271c22.parentStableId, _0x206a71, _0x57537e]
      .filter(Boolean)
      .join(":"),
    stableId: _0x57537e,
    ...(_0x271c22.parentStableId === undefined
      ? {}
      : { parentStableId: _0x271c22.parentStableId }),
    kind: _0x206a71,
    entityType: _0x271c22.entityType,
    path: _0x3ab5c3,
    ...(_0x3379ce === undefined ? {} : { displayName: _0x3379ce }),
    moved: _0x47ff74,
    changes: _0x466d7e,
    locations: {
      left: Ce(_0x271c22, _0x57537e, _0x3ab5c3, _0x179ef2),
      right: Ce(_0x271c22, _0x57537e, _0x3ab5c3, _0x11d452),
    },
    values: {
      ...(_0x179ef2 === undefined ? {} : { left: _0x179ef2.value }),
      ...(_0x11d452 === undefined ? {} : { right: _0x11d452.value }),
    },
  };
}
function ye(_0x12ec16, _0x560161) {
  return _0x12ec16 === undefined
    ? "insert"
    : _0x560161 === undefined
      ? "delete"
      : "update";
}
function be(_0x1f386e, _0xd9d6fa, _0x431929, _0x1d52d8, _0x1ae9b8) {
  return (
    _0xd9d6fa !== undefined &&
    _0x431929 !== undefined &&
    _0x1d52d8.get(_0x1f386e) !== _0x1ae9b8.get(_0x1f386e)
  );
}
function xe(_0x4ed764, _0x1d08c9, _0x54eef5) {
  return (
    _0x4ed764 !== undefined &&
    _0x1d08c9 !== undefined &&
    !_0x54eef5 &&
    y(_0x4ed764.value, _0x1d08c9.value)
  );
}
function y(_0x45b293, _0x4fe7a8) {
  if (_0x45b293 === _0x4fe7a8) return true;
  let _0x525ad9 = T(_0x45b293),
    _0x91928f = T(_0x4fe7a8);
  if (_0x525ad9 !== undefined && _0x91928f !== undefined) {
    let _0x972e40 = Object.keys(_0x525ad9);
    return (
      _0x972e40.length === Object.keys(_0x91928f).length &&
      _0x972e40.every(
        (_0x16b591) =>
          Object.prototype["hasOwnProperty"].call(_0x91928f, _0x16b591) &&
          y(_0x525ad9[_0x16b591], _0x91928f[_0x16b591]),
      )
    );
  }
  return E(_0x45b293) === E(_0x4fe7a8);
}
function Se(_0x3cff73, _0x40fbaa, _0x5c5a2e, _0xe0e8bd) {
  !_0xe0e8bd ||
    _0x3cff73.some((_0xc17aca) => _0xc17aca.valueType === "position") ||
    _0x3cff73.push({
      path: ["position"],
      kind: "update",
      valueType: "position",
      before: (_0x40fbaa == null ? undefined : _0x40fbaa.position) ?? null,
      after: (_0x5c5a2e == null ? undefined : _0x5c5a2e.position) ?? null,
    });
}
function Ce(_0x229f78, _0x1c17a6, _0x46c19b, _0x2e5d8c) {
  if (_0x2e5d8c === undefined) return null;
  let _0x1b8de1 = _0x2e5d8c.nativeStableId ?? _0x1c17a6;
  return {
    path: _0x46c19b,
    stableId: _0x1b8de1,
    ...(_0x229f78.parentStableId === undefined
      ? {}
      : { parentStableId: _0x229f78.parentStableId }),
    position: _0x2e5d8c.position,
    target: {
      kind: "entity",
      entityType: _0x229f78.entityType,
      stableId: _0x1b8de1,
      comparisonStableId: _0x1c17a6,
      ...(_0x229f78.parentStableId === undefined
        ? {}
        : { parentStableId: _0x229f78.parentStableId }),
    },
  };
}
function we(_0x468064, _0x5d4d1d, _0x568c21 = "update") {
  if (_0x568c21 !== "update") {
    let _0x43e976 = _0x568c21 === "delete" ? _0x468064 : _0x5d4d1d,
      _0x22e7ac = [];
    return (b(_0x43e976, [], _0x568c21, _0x22e7ac), _0x22e7ac);
  }
  let _0x32e28e = [];
  D(_0x468064, _0x5d4d1d, [], _0x32e28e);
  let _0x57c7f3 = new Set();
  return _0x32e28e
    .filter((_0x553309) => {
      let _0x19a9f7 = E([
        _0x553309.sourcePath ?? _0x553309.path,
        _0x553309.kind,
        _0x553309.before,
        _0x553309.after,
      ]);
      return _0x57c7f3.has(_0x19a9f7)
        ? false
        : (_0x57c7f3.add(_0x19a9f7), true);
    })
    .sort((_0xaca91f, _0x1d53d8) =>
      E(_0xaca91f.path).localeCompare(E(_0x1d53d8.path)),
    );
}
function b(_0x284aa7, _0xf86c02, _0x4de4d9, _0x3e6572) {
  let _0x4ccc2d = T(_0x284aa7);
  if (_0x4ccc2d !== undefined && Object.keys(_0x4ccc2d).length > 0) {
    for (let _0x20e7b8 of Object.keys(_0x4ccc2d).sort())
      b(_0x4ccc2d[_0x20e7b8], [..._0xf86c02, _0x20e7b8], _0x4de4d9, _0x3e6572);
    return;
  }
  let _0x6110de = k(_0xf86c02);
  _0x3e6572.push({
    path: _0x6110de,
    ...(E(_0x6110de) === E(_0xf86c02) ? {} : { sourcePath: _0xf86c02 }),
    kind: _0x4de4d9,
    valueType: A(_0x6110de, _0x284aa7),
    ...(_0x4de4d9 === "delete" ? { before: _0x284aa7 } : { after: _0x284aa7 }),
  });
}
function x(_0x3d42a9, _0xa47558, _0x37f9ec = (_0xb601be) => _0xb601be) {
  let _0x540228 = T(_0x3d42a9) ?? {},
    _0x455f2f = Array.isArray(_0xa47558)
      ? _0xa47558.filter(
          (_0x20cbf7) => typeof _0x20cbf7 == "string" && _0x20cbf7 in _0x540228,
        )
      : [],
    _0x1db467 = new Set(_0x455f2f);
  return [
    ..._0x455f2f,
    ...Object.keys(_0x540228)
      .filter((_0x2cecea) => !_0x1db467.has(_0x2cecea))
      .sort(),
  ].map((_0x4881d8, _0x2a7f94) => {
    let _0x3574e8 = P(_0x540228[_0x4881d8]);
    return {
      stableId: _0x4881d8,
      position: _0x2a7f94,
      ...(_0x3574e8 === undefined ? {} : { displayName: _0x3574e8 }),
      value: _0x37f9ec(_0x540228[_0x4881d8]),
    };
  });
}
function Te(_0x5cf48c) {
  return S(_0x5cf48c).scopes;
}
function S(_0xeca339) {
  let _0xc32aa4 = new Map(
      _0xeca339.left["map"]((_0x2121f3) => [_0x2121f3.stableId, _0x2121f3]),
    ),
    _0xfecf73 = new Map(
      _0xeca339.right["map"]((_0xc48cdf) => [_0xc48cdf.stableId, _0xc48cdf]),
    ),
    _0x1d9e17 = new Set([..._0xc32aa4.keys(), ..._0xfecf73.keys()]),
    _0x81f563 = Ee(_0xeca339.items, _0x1d9e17, _0xeca339.references),
    _0xbd447d = _0xeca339.items["map"]((_0x48d694, _0x440723) => {
      let _0x59c142 = _0x81f563[_0x440723];
      return _0x59c142 === undefined
        ? _0x48d694
        : {
            ..._0x48d694,
            scope: { entityType: _0xeca339.entityType, stableId: _0x59c142 },
          };
    });
  return {
    items: _0xbd447d,
    scopes: De(
      _0xeca339.entityType,
      _0xbd447d,
      _0xeca339.left,
      _0xeca339.right,
      _0xc32aa4,
      _0xfecf73,
    ),
  };
}
function Ee(_0x1de6e7, _0x218c90, _0x128315) {
  let _0x41456a = new Map();
  _0x1de6e7.forEach((_0x44cc0d, _0x351cfe) => {
    let _0x11f7a7 = _0x41456a.get(_0x44cc0d.stableId) ?? [];
    (_0x11f7a7.push(_0x351cfe), _0x41456a.set(_0x44cc0d.stableId, _0x11f7a7));
  });
  let _0x363cbf = new Set(_0x41456a.keys()),
    _0x57ca8d = _0x1de6e7.map((_0x4efaf7) =>
      _0x4efaf7.scope !== undefined &&
      _0x218c90.has(_0x4efaf7.scope["stableId"])
        ? _0x4efaf7.scope["stableId"]
        : _0x218c90.has(_0x4efaf7.stableId)
          ? _0x4efaf7.stableId
          : _0x4efaf7.parentStableId !== undefined &&
              _0x218c90.has(_0x4efaf7.parentStableId)
            ? _0x4efaf7.parentStableId
            : undefined,
    ),
    _0x241af3 = _0x57ca8d.flatMap((_0x230263, _0x431f1c) =>
      _0x230263 === undefined ? [] : [_0x431f1c],
    );
  for (let _0x54df15 of [
    ...((_0x128315 == null ? undefined : _0x128315.left) ?? []),
    ...((_0x128315 == null ? undefined : _0x128315.right) ?? []),
  ])
    _0x218c90.has(_0x54df15.stableId) &&
      C(
        _0x54df15.value,
        _0x54df15.stableId,
        _0x41456a,
        _0x363cbf,
        _0x57ca8d,
        _0x241af3,
      );
  for (let _0x4a5185 = 0; _0x4a5185 < _0x241af3.length; _0x4a5185 += 1) {
    let _0x3fa127 = _0x241af3[_0x4a5185],
      _0x5a46e3 = _0x57ca8d[_0x3fa127],
      _0x3f5675 = _0x1de6e7[_0x3fa127];
    _0x5a46e3 !== undefined &&
      _0x3f5675 !== undefined &&
      C(
        _0x3f5675.values,
        _0x5a46e3,
        _0x41456a,
        _0x363cbf,
        _0x57ca8d,
        _0x241af3,
      );
  }
  return _0x57ca8d;
}
function De(_0x3cf50b, _0x21dbbf, _0x2395ea, _0x43fdd8, _0x3a1a52, _0xd42c59) {
  let _0x19d5b4 = new Map(),
    _0x6e5fb7 = new Map();
  for (let _0x2987c7 of _0x21dbbf) {
    var _0x2fd587;
    let _0x11a261 =
      (_0x2fd587 = _0x2987c7.scope) == null ? undefined : _0x2fd587.stableId;
    _0x11a261 !== undefined &&
      (_0x19d5b4.set(_0x11a261, (_0x19d5b4.get(_0x11a261) ?? 0) + 1),
      _0x2987c7.entityType === _0x3cf50b &&
        _0x6e5fb7.set(_0x11a261, _0x2987c7));
  }
  return ke(_0x2395ea, _0x43fdd8).flatMap((_0xb80e75) => {
    let _0x22c213 = _0x19d5b4.get(_0xb80e75);
    if (_0x22c213 === undefined) return [];
    let _0x134db8 = _0x3a1a52.get(_0xb80e75),
      _0xd2fa95 = _0xd42c59.get(_0xb80e75),
      _0x5b1d53 = _0x6e5fb7.get(_0xb80e75);
    return [
      {
        entityType: _0x3cf50b,
        stableId: _0xb80e75,
        displayName:
          (_0xd2fa95 == null ? undefined : _0xd2fa95.displayName) ??
          (_0x134db8 == null ? undefined : _0x134db8.displayName) ??
          _0xb80e75,
        kind:
          _0x134db8 === undefined
            ? "insert"
            : _0xd2fa95 === undefined
              ? "delete"
              : "update",
        changeCount: _0x22c213,
        moved: (_0x5b1d53 == null ? undefined : _0x5b1d53.moved) ?? false,
        locations: {
          left: w(_0x3cf50b, _0xb80e75, _0x134db8),
          right: w(_0x3cf50b, _0xb80e75, _0xd2fa95),
        },
      },
    ];
  });
}
function C(_0x1dd1e9, _0x54e244, _0x31a732, _0x1823e9, _0x35cd88, _0x10c410) {
  for (let _0x2f5256 of Oe(_0x1dd1e9, _0x1823e9))
    for (let _0x4e038c of _0x31a732.get(_0x2f5256) ?? [])
      _0x35cd88[_0x4e038c] === undefined &&
        ((_0x35cd88[_0x4e038c] = _0x54e244), _0x10c410.push(_0x4e038c));
}
function Oe(_0x26edde, _0x2313bc) {
  let _0x3f21af = new Set(),
    _0x391c66 = [_0x26edde],
    _0x40f94f = new Set();
  for (; _0x391c66.length > 0;) {
    let _0x447e31 = _0x391c66.pop();
    if (typeof _0x447e31 == "string") {
      _0x2313bc.has(_0x447e31) && _0x3f21af.add(_0x447e31);
      continue;
    }
    typeof _0x447e31 != "object" ||
      !_0x447e31 ||
      _0x40f94f.has(_0x447e31) ||
      (_0x40f94f.add(_0x447e31),
      _0x391c66.push(
        ...(Array.isArray(_0x447e31) ? _0x447e31 : Object.values(_0x447e31)),
      ));
  }
  return _0x3f21af;
}
function ke(_0x5d0818, _0x9d84e4) {
  let _0x19b483 = _0x9d84e4.map((_0x4b64fb) => _0x4b64fb.stableId),
    _0x48b991 = new Set(_0x19b483),
    _0x34c6d1 = new Map(),
    _0x542fb9 = [];
  for (let _0x56a424 of _0x5d0818) {
    if (!_0x48b991.has(_0x56a424.stableId)) {
      _0x542fb9.push(_0x56a424.stableId);
      continue;
    }
    _0x542fb9.length > 0 &&
      (_0x34c6d1.set(_0x56a424.stableId, _0x542fb9), (_0x542fb9 = []));
  }
  return _0x19b483
    .flatMap((_0x323440) => [...(_0x34c6d1.get(_0x323440) ?? []), _0x323440])
    .concat(_0x542fb9);
}
function w(_0xb7113e, _0x5ddc8f, _0x318b98) {
  return _0x318b98 === undefined
    ? null
    : {
        path: [_0xb7113e, _0x5ddc8f],
        stableId: _0x318b98.nativeStableId ?? _0x5ddc8f,
        position: _0x318b98.position,
        target: {
          kind: "entity",
          entityType: _0xb7113e,
          stableId: _0x318b98.nativeStableId ?? _0x5ddc8f,
          comparisonStableId: _0x5ddc8f,
        },
      };
}
function Ae(_0x37de00, _0x18edd9, _0x2f6023 = (_0x414f80) => _0x414f80) {
  return (Array.isArray(_0x37de00) ? _0x37de00 : []).flatMap(
    (_0x19b534, _0x1c1598) => {
      let _0x3b8d8f = T(_0x19b534),
        _0xa6d2c0 = _0x3b8d8f == null ? undefined : _0x3b8d8f[_0x18edd9];
      if (typeof _0xa6d2c0 != "string") return [];
      let _0x18d053 = P(_0x19b534);
      return [
        {
          stableId: _0xa6d2c0,
          position: _0x1c1598,
          ...(_0x18d053 === undefined ? {} : { displayName: _0x18d053 }),
          value: _0x2f6023(_0x19b534),
        },
      ];
    },
  );
}
function je(_0x5549dc, _0x12107b, _0x40e5b3) {
  var _0xa58568, _0x24c1c5, _0x49ffd6;
  let _0x4510be = (
    Array.isArray(
      (_0xa58568 = T(_0x5549dc)) == null ? undefined : _0xa58568.resources,
    )
      ? (_0x24c1c5 = T(_0x5549dc)) == null
        ? undefined
        : _0x24c1c5.resources
      : []
  )
    .map(T)
    .find(
      (_0x532be3) =>
        (_0x532be3 == null ? undefined : _0x532be3.name) === _0x12107b,
    );
  if (_0x4510be === undefined) return [];
  let _0x139971 = _0x4510be.data;
  if (typeof _0x139971 == "string")
    try {
      _0x139971 = JSON.parse(_0x139971);
    } catch {
      return [{ stableId: "resource", position: 0, value: _0x139971 }];
    }
  let _0x179e22 =
    _0x40e5b3 === undefined
      ? _0x139971
      : (_0x49ffd6 = T(_0x139971)) == null
        ? undefined
        : _0x49ffd6[_0x40e5b3];
  return Array.isArray(_0x179e22)
    ? _0x179e22.map((_0x5c04e5, _0x13adf4) => {
        let _0x56207a = P(_0x5c04e5);
        return {
          stableId: Fe(_0x5c04e5, _0x13adf4),
          position: _0x13adf4,
          ...(_0x56207a === undefined ? {} : { displayName: _0x56207a }),
          value: _0x5c04e5,
        };
      })
    : x(_0x179e22, undefined);
}
function T(_0x4ee3cd) {
  return typeof _0x4ee3cd == "object" && _0x4ee3cd && !Array.isArray(_0x4ee3cd)
    ? _0x4ee3cd
    : undefined;
}
function Me(..._0x47f78c) {
  return (_0x1d1bb1) => {
    let _0x506310 = T(_0x1d1bb1);
    return _0x506310 === undefined
      ? _0x1d1bb1
      : Object.fromEntries(
          Object.entries(_0x506310).filter(
            ([_0x49c867]) => !_0x47f78c.includes(_0x49c867),
          ),
        );
  };
}
function E(_0x3af928) {
  if (Array.isArray(_0x3af928)) return "[" + _0x3af928.map(E).join(",") + "]";
  let _0x4abfc6 = T(_0x3af928);
  return _0x4abfc6 === undefined
    ? (JSON.stringify(_0x3af928) ?? "undefined")
    : "{" +
        Object.keys(_0x4abfc6)
          .sort()
          .map(
            (_0x2e43af) =>
              JSON.stringify(_0x2e43af) + ":" + E(_0x4abfc6[_0x2e43af]),
          )
          .join(",") +
        "}";
}
function D(_0x205a2, _0x3ff46c, _0x2f6f1c, _0x1b54e6) {
  if (y(_0x205a2, _0x3ff46c)) return;
  if (
    Array.isArray(_0x205a2) &&
    Array.isArray(_0x3ff46c) &&
    !O(_0x205a2) &&
    !O(_0x3ff46c)
  ) {
    for (
      let _0x597baf = 0;
      _0x597baf < Math.max(_0x205a2.length, _0x3ff46c.length);
      _0x597baf += 1
    ) {
      let _0x4dd55c = [..._0x2f6f1c, String(_0x597baf)];
      if (_0x597baf < _0x205a2.length && _0x597baf < _0x3ff46c.length)
        D(_0x205a2[_0x597baf], _0x3ff46c[_0x597baf], _0x4dd55c, _0x1b54e6);
      else {
        let _0x40c0ba = _0x597baf < _0x205a2.length ? "delete" : "insert";
        b(
          _0x597baf < _0x205a2.length
            ? _0x205a2[_0x597baf]
            : _0x3ff46c[_0x597baf],
          _0x4dd55c,
          _0x40c0ba,
          _0x1b54e6,
        );
      }
    }
    return;
  }
  let _0x11b13b = T(_0x205a2),
    _0x43e046 = T(_0x3ff46c);
  if (_0x11b13b !== undefined && _0x43e046 !== undefined) {
    let _0x21f88d = [
      ...new Set([...Object.keys(_0x11b13b), ...Object.keys(_0x43e046)]),
    ].sort();
    for (let _0x5d2e4b of _0x21f88d) {
      let _0x48db84 = Object.prototype["hasOwnProperty"].call(
          _0x11b13b,
          _0x5d2e4b,
        ),
        _0x329cc7 = Object.prototype["hasOwnProperty"].call(
          _0x43e046,
          _0x5d2e4b,
        );
      if (_0x48db84 && _0x329cc7) {
        D(
          _0x11b13b[_0x5d2e4b],
          _0x43e046[_0x5d2e4b],
          [..._0x2f6f1c, _0x5d2e4b],
          _0x1b54e6,
        );
        continue;
      }
      let _0x3e919d = k([..._0x2f6f1c, _0x5d2e4b]),
        _0x59ab1f = _0x48db84 ? "delete" : "insert",
        _0x212266 = _0x48db84 ? _0x11b13b[_0x5d2e4b] : _0x43e046[_0x5d2e4b];
      _0x1b54e6.push({
        path: _0x3e919d,
        ...(E(_0x3e919d) === E([..._0x2f6f1c, _0x5d2e4b])
          ? {}
          : { sourcePath: [..._0x2f6f1c, _0x5d2e4b] }),
        kind: _0x59ab1f,
        valueType: A(_0x3e919d, _0x212266),
        ...(_0x48db84 ? { before: _0x212266 } : { after: _0x212266 }),
      });
    }
    return;
  }
  let _0x5d80dc = k(_0x2f6f1c),
    _0x163650 = A(_0x5d80dc, _0x3ff46c === undefined ? _0x205a2 : _0x3ff46c);
  _0x1b54e6.push({
    path: _0x5d80dc,
    ...(E(_0x5d80dc) === E(_0x2f6f1c) ? {} : { sourcePath: _0x2f6f1c }),
    kind: "update",
    valueType: _0x163650,
    before: _0x205a2,
    after: _0x3ff46c,
    ...Ne(_0x205a2, _0x3ff46c, _0x163650),
  });
}
function O(_0x39e0bf) {
  for (let _0x3a10a = 0; _0x3a10a < _0x39e0bf.length; _0x3a10a += 1)
    if (!Object.prototype["hasOwnProperty"].call(_0x39e0bf, _0x3a10a))
      return true;
  return false;
}
function k(_0x3348d2) {
  if (
    _0x3348d2[_0x3348d2.length - 1] === "dataStream" &&
    _0x3348d2.includes("body")
  )
    return ["text"];
  if (_0x3348d2[0] === "values" && _0x3348d2.length === 2)
    return ["field", _0x3348d2[1]];
  let _0x26cc49 = _0x3348d2.findIndex((_0x332a9a) => v.has(_0x332a9a));
  if (_0x26cc49 >= 0) return ["geometry", ..._0x3348d2.slice(_0x26cc49)];
  let _0x39e96b = _0x3348d2.findIndex((_0x1fae0b) => me.has(_0x1fae0b));
  return _0x39e96b >= 0
    ? [
        "style",
        ..._0x3348d2.slice(_0x39e96b + +(_0x3348d2[_0x39e96b] === "style")),
      ]
    : _0x3348d2;
}
function A(_0x923f9e, _0x27e00d) {
  var _0x338455;
  let _0x5d5500 =
    ((_0x338455 = _0x923f9e[_0x923f9e.length - 1]) == null
      ? undefined
      : _0x338455.toLocaleLowerCase()) ?? "";
  return _0x5d5500.includes("formula") || _0x5d5500 === "f"
    ? "formula"
    : _0x923f9e.some(
          (_0x486130) => _0x486130 === "geometry" || v.has(_0x486130),
        )
      ? "geometry"
      : _0x923f9e.some(
            (_0x2c5898) => _0x2c5898 === "position" || pe.has(_0x2c5898),
          )
        ? "position"
        : _0x923f9e.some((_0xdea231) =>
              _0xdea231.toLocaleLowerCase().includes("color"),
            )
          ? "color"
          : _0x923f9e.some(
                (_0x1cd589) => _0x1cd589 === "style" || me.has(_0x1cd589),
              )
            ? "style"
            : _0x923f9e.some(
                  (_0x4d9d75) =>
                    he.has(_0x4d9d75) || /(?:Id|Ref)$/u.test(_0x4d9d75),
                )
              ? "reference"
              : _0x27e00d === null
                ? "null"
                : Array.isArray(_0x27e00d)
                  ? "array"
                  : typeof _0x27e00d == "boolean"
                    ? "boolean"
                    : typeof _0x27e00d == "number"
                      ? "number"
                      : typeof _0x27e00d == "string"
                        ? "text"
                        : T(_0x27e00d) === undefined
                          ? "unknown"
                          : "object";
}
function Ne(_0xf6583b, _0x30de38, _0x3e6bdd) {
  if (
    typeof _0xf6583b != "string" ||
    typeof _0x30de38 != "string" ||
    (_0x3e6bdd !== "text" && _0x3e6bdd !== "formula")
  )
    return {};
  let _0x476af3 = _0xf6583b > _0x30de38,
    _0x1d5ee4 = _0x476af3 ? _0x30de38 : _0xf6583b,
    _0x1ebb29 = _0x476af3 ? _0xf6583b : _0x30de38,
    _0x3c3c3e = _0x3e6bdd === "text" ? Array.from(_0x1d5ee4) : M(_0x1d5ee4),
    _0xb99d29 = _0x3e6bdd === "text" ? Array.from(_0x1ebb29) : M(_0x1ebb29),
    _0x397a19 = 0;
  for (
    ;
    _0x397a19 < _0x3c3c3e.length &&
    _0x397a19 < _0xb99d29.length &&
    _0x3c3c3e[_0x397a19] === _0xb99d29[_0x397a19];
  )
    _0x397a19 += 1;
  let _0x16ca71 = 0;
  for (
    ;
    _0x16ca71 < _0x3c3c3e.length - _0x397a19 &&
    _0x16ca71 < _0xb99d29.length - _0x397a19 &&
    _0x3c3c3e[_0x3c3c3e.length - 1 - _0x16ca71] ===
      _0xb99d29[_0xb99d29.length - 1 - _0x16ca71];
  )
    _0x16ca71 += 1;
  let _0x2b9b81 = _0x3c3c3e.slice(_0x397a19, _0x3c3c3e.length - _0x16ca71),
    _0x4d2c57 = _0xb99d29.slice(_0x397a19, _0xb99d29.length - _0x16ca71),
    _0x89e57e =
      _0x2b9b81.length + _0x4d2c57.length > 800
        ? {
            left: _0x2b9b81.length
              ? [{ kind: "delete", text: _0x2b9b81.join("") }]
              : [],
            right: _0x4d2c57.length
              ? [{ kind: "insert", text: _0x4d2c57.join("") }]
              : [],
          }
        : Pe(_0x2b9b81, _0x4d2c57),
    _0x4dac3d = {
      left: j(
        _0x89e57e.left,
        _0x3c3c3e.slice(0, _0x397a19).join(""),
        _0x3c3c3e.slice(_0x3c3c3e.length - _0x16ca71).join(""),
      ),
      right: j(
        _0x89e57e.right,
        _0xb99d29.slice(0, _0x397a19).join(""),
        _0xb99d29.slice(_0xb99d29.length - _0x16ca71).join(""),
      ),
    };
  return {
    segments: _0x476af3
      ? {
          left: _0x4dac3d.right["map"]((_0x3c4748) => ({
            ..._0x3c4748,
            kind: _0x3c4748.kind === "equal" ? _0x3c4748.kind : "delete",
          })),
          right: _0x4dac3d.left["map"]((_0x41abd2) => ({
            ..._0x41abd2,
            kind: _0x41abd2.kind === "equal" ? _0x41abd2.kind : "insert",
          })),
        }
      : _0x4dac3d,
  };
}
function j(_0x4e14d2, _0x1339b1, _0x30ca88) {
  let _0x404d04 = [];
  _0x1339b1 && N(_0x404d04, { kind: "equal", text: _0x1339b1 });
  for (let _0x4efa04 of _0x4e14d2) N(_0x404d04, _0x4efa04);
  return (
    _0x30ca88 && N(_0x404d04, { kind: "equal", text: _0x30ca88 }),
    _0x404d04
  );
}
function M(_0x9a2136) {
  return (
    _0x9a2136.match(
      /(\r?\n|\s+|\$?[A-Za-z]+\$?\d+|[A-Za-z_]+[A-Za-z0-9_]*|[0-9]+(?:\.\d+)?|[\u3400-\u9FFF]|.)/gu,
    ) ?? []
  );
}
function Pe(_0x5ab6c9, _0x3ab589) {
  let _0x16fefe = Array.from(
    { length: _0x5ab6c9.length + 1 },
    () => new Uint16Array(_0x3ab589.length + 1),
  );
  for (let _0x48c58c = 1; _0x48c58c <= _0x5ab6c9.length; _0x48c58c += 1)
    for (let _0x4f507b = 1; _0x4f507b <= _0x3ab589.length; _0x4f507b += 1)
      _0x16fefe[_0x48c58c][_0x4f507b] =
        _0x5ab6c9[_0x48c58c - 1] === _0x3ab589[_0x4f507b - 1]
          ? _0x16fefe[_0x48c58c - 1][_0x4f507b - 1] + 1
          : Math.max(
              _0x16fefe[_0x48c58c - 1][_0x4f507b],
              _0x16fefe[_0x48c58c][_0x4f507b - 1],
            );
  let _0x2ae7a8 = [],
    _0x5e4462 = _0x5ab6c9.length,
    _0x1b1455 = _0x3ab589.length;
  for (; _0x5e4462 > 0 || _0x1b1455 > 0;)
    _0x5e4462 > 0 &&
    _0x1b1455 > 0 &&
    _0x5ab6c9[_0x5e4462 - 1] === _0x3ab589[_0x1b1455 - 1]
      ? (_0x2ae7a8.push({ kind: "equal", text: _0x5ab6c9[_0x5e4462 - 1] }),
        --_0x5e4462,
        --_0x1b1455)
      : _0x5e4462 > 0 &&
          (_0x1b1455 === 0 ||
            _0x16fefe[_0x5e4462 - 1][_0x1b1455] >=
              _0x16fefe[_0x5e4462][_0x1b1455 - 1])
        ? (_0x2ae7a8.push({ kind: "delete", text: _0x5ab6c9[_0x5e4462 - 1] }),
          --_0x5e4462)
        : (_0x2ae7a8.push({ kind: "insert", text: _0x3ab589[_0x1b1455 - 1] }),
          --_0x1b1455);
  let _0x40d087 = [],
    _0x47ed97 = [];
  for (let _0x1d967a of _0x2ae7a8.reverse())
    (_0x1d967a.kind !== "insert" && N(_0x40d087, _0x1d967a),
      _0x1d967a.kind !== "delete" && N(_0x47ed97, _0x1d967a));
  return { left: _0x40d087, right: _0x47ed97 };
}
function N(_0x5527c2, _0x10cb08) {
  let _0x13128b = _0x5527c2[_0x5527c2.length - 1];
  (_0x13128b == null ? undefined : _0x13128b.kind) === _0x10cb08.kind
    ? (_0x13128b.text += _0x10cb08.text)
    : _0x5527c2.push({ ..._0x10cb08 });
}
function Fe(_0x47a08c, _0x414eaf) {
  if (typeof _0x47a08c == "string") return _0x47a08c;
  let _0x59044a = T(_0x47a08c);
  return (
    [
      _0x59044a == null ? undefined : _0x59044a.id,
      _0x59044a == null ? undefined : _0x59044a.chartId,
      _0x59044a == null ? undefined : _0x59044a.tableId,
      _0x59044a == null ? undefined : _0x59044a.formulaId,
      _0x59044a == null ? undefined : _0x59044a.rangeId,
      _0x59044a == null ? undefined : _0x59044a.blockId,
      _0x59044a == null ? undefined : _0x59044a.linkId,
      _0x59044a == null ? undefined : _0x59044a.drawingId,
    ].find((_0x416c31) => typeof _0x416c31 == "string") ?? "entry-" + _0x414eaf
  );
}
function P(_0x4c3bc2, _0x3ecf68 = 0) {
  if (_0x3ecf68 > 6) return;
  if (typeof _0x4c3bc2 == "string") return F(_0x4c3bc2);
  if (typeof _0x4c3bc2 == "number" || typeof _0x4c3bc2 == "boolean")
    return String(_0x4c3bc2);
  if (Array.isArray(_0x4c3bc2)) {
    for (
      let _0x1e7bbb = 0;
      _0x1e7bbb < Math.min(8, _0x4c3bc2.length);
      _0x1e7bbb++
    ) {
      let _0x2b5ec1 = P(_0x4c3bc2[_0x1e7bbb], _0x3ecf68 + 1);
      if (_0x2b5ec1 !== undefined) return _0x2b5ec1;
    }
    return;
  }
  let _0x3c3607 = T(_0x4c3bc2);
  if (_0x3c3607 !== undefined) {
    for (let _0x546b25 of [
      "title",
      "label",
      "text",
      "caption",
      "description",
      "dataStream",
      "formula",
      "code",
    ]) {
      let _0x3d25d6 = _0x3c3607[_0x546b25];
      if (typeof _0x3d25d6 == "string") {
        let _0x5383ee = F(_0x3d25d6);
        if (_0x5383ee !== undefined) return _0x5383ee;
      }
    }
    for (let _0x48f77a of [
      "textData",
      "body",
      "shapeData",
      "dataModel",
      "content",
      "props",
      "value",
      "values",
    ]) {
      let _0xe10667 = P(_0x3c3607[_0x48f77a], _0x3ecf68 + 1);
      if (_0xe10667 !== undefined) return _0xe10667;
    }
    return typeof _0x3c3607.name == "string" ? F(_0x3c3607.name) : undefined;
  }
}
function F(_0x2f6ccb) {
  let _0x3a0dd6 = "",
    _0x53041e = false;
  for (let _0x1d9746 of _0x2f6ccb) {
    let _0x14d431 = _0x1d9746.charCodeAt(0);
    if (
      _0x14d431 <= 32 ||
      (_0x14d431 >= 127 && _0x14d431 <= 159) ||
      /\s/u.test(_0x1d9746)
    ) {
      _0x53041e = _0x3a0dd6.length > 0;
      continue;
    }
    if (
      ((_0x3a0dd6 += _0x53041e ? "\x20" + _0x1d9746 : _0x1d9746),
      (_0x53041e = false),
      _0x3a0dd6.length > 72)
    )
      return _0x3a0dd6.slice(0, 69).trimEnd() + "…";
  }
  return _0x3a0dd6 || undefined;
}
function I(_0x2d8cf5) {
  "@babel/helpers - typeof";
  return (
    (I =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5664fd) {
            return typeof _0x5664fd;
          }
        : function (_0x4684ae) {
            return _0x4684ae &&
              typeof Symbol == "function" &&
              _0x4684ae.constructor === Symbol &&
              _0x4684ae !== Symbol.prototype
              ? "symbol"
              : typeof _0x4684ae;
          }),
    I(_0x2d8cf5)
  );
}
function Ie(_0x4be61f, _0x28d909) {
  if (I(_0x4be61f) != "object" || !_0x4be61f) return _0x4be61f;
  var _0x5028b5 = _0x4be61f[Symbol.toPrimitive];
  if (_0x5028b5 !== undefined) {
    var _0x1f6870 = _0x5028b5.call(_0x4be61f, _0x28d909 || "default");
    if (I(_0x1f6870) != "object") return _0x1f6870;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x28d909 === "string" ? String : Number)(_0x4be61f);
}
function Le(_0x38d6c0) {
  var _0x54a8c4 = Ie(_0x38d6c0, "string");
  return I(_0x54a8c4) == "symbol" ? _0x54a8c4 : _0x54a8c4 + "";
}
function L(_0x168fc8, _0x415341, _0x379733) {
  return (
    (_0x415341 = Le(_0x415341)) in _0x168fc8
      ? Object.defineProperty(_0x168fc8, _0x415341, {
          value: _0x379733,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x168fc8[_0x415341] = _0x379733),
    _0x168fc8
  );
}
var R = class extends _0x11b9ef {
  constructor(..._0x3cf9cb) {
    (super(..._0x3cf9cb), L(this, "_adapters", new Map()));
  }
  register(_0x43498c) {
    if (this._adapters["has"](_0x43498c.type))
      throw Error(
        "[UnitComparisonAdapterRegistryService]: Adapter for unit type " +
          _0x43498c.type +
          " is registered.",
      );
    return (
      this._adapters["set"](_0x43498c.type, _0x43498c),
      _0x4bc74e(() => {
        this._adapters["get"](_0x43498c.type) === _0x43498c &&
          this._adapters["delete"](_0x43498c.type);
      })
    );
  }
  get(_0x16d3c3) {
    return this._adapters["get"](_0x16d3c3);
  }
  dispose() {
    (this._adapters["clear"](), super.dispose());
  }
};
const z = 1000;
function Re(_0xab6894) {
  let _0x17462a = new Map();
  for (let _0x2cfd1c of _0xab6894) {
    if (_0x17462a.has(_0x2cfd1c.type))
      throw Error(
        "[createUnitComparisonEngine]:\x20Adapter\x20for\x20unit\x20type\x20" +
          _0x2cfd1c.type +
          " is already registered.",
      );
    _0x17462a.set(_0x2cfd1c.type, _0x2cfd1c);
  }
  let _0x290691 = (_0xdf3571) => {
    let _0x22f1fd = _0x17462a.get(_0xdf3571);
    if (!_0x22f1fd)
      throw Error(
        "[createUnitComparisonEngine]: No comparison adapter for unit type " +
          _0xdf3571 +
          ".",
      );
    return _0x22f1fd;
  };
  return {
    compare(_0xe94fc) {
      let { query: _0x19a027, ..._0x3cec38 } = _0xe94fc;
      return V(B(_0x3cec38, _0x290691(_0xe94fc.type)), _0x19a027);
    },
    prepare: (_0x22db90) => B(_0x22db90, _0x290691(_0x22db90.type)),
    query: V,
  };
}
function B(_0x3aefa8, _0x3006ac) {
  let _0x39beaa = H(_0x3aefa8),
    _0x284a90 = _0x3006ac.compare({
      unitId: _0x39beaa.unitId,
      leftData: _0x39beaa.leftData,
      rightData: _0x39beaa.rightData,
      leftChangesets: _0x39beaa.leftChangesets ?? [],
      rightChangesets: _0x39beaa.rightChangesets ?? [],
    }),
    _0x452a8a = _0x284a90.scopes ?? [],
    _0x56ed76 = new Map(
      _0x452a8a.map((_0x4f37f8) => [_0x4f37f8.stableId, _0x4f37f8]),
    );
  return {
    metadata: {
      comparisonId: _0x39beaa.comparisonId,
      unitId: _0x39beaa.unitId,
      ...(_0x39beaa.unitName === undefined
        ? {}
        : { unitName: _0x39beaa.unitName }),
      type: _0x39beaa.type,
      fidelity: _0x39beaa.fidelity,
      ...(_0x39beaa.commonBaseRevision === undefined
        ? {}
        : { commonBaseRevision: _0x39beaa.commonBaseRevision }),
      stale: _0x39beaa.stale ?? false,
    },
    adapterResult: {
      ..._0x284a90,
      items: _0x284a90.items["map"]((_0x5ee6d9) => {
        let _0x56810c = _0x56ed76.get(_0x5ee6d9.stableId),
          _0x7b2682 =
            (_0x56810c == null ? undefined : _0x56810c.entityType) ===
            _0x5ee6d9.entityType
              ? _0x56810c
              : _0x5ee6d9.parentStableId === undefined
                ? undefined
                : _0x56ed76.get(_0x5ee6d9.parentStableId);
        return _0x7b2682 === undefined
          ? _0x5ee6d9
          : {
              ..._0x5ee6d9,
              scope: {
                entityType: _0x7b2682.entityType,
                stableId: _0x7b2682.stableId,
              },
            };
      }),
    },
  };
}
function V(_0x7d61c7, _0x2fdba0 = {}) {
  let { adapterResult: _0x4477ff, metadata: _0x1c341e } = _0x7d61c7,
    _0x38b6ad = Be(_0x4477ff.items, _0x2fdba0),
    _0x11c8e0 = U(_0x2fdba0.offset, 0, 0, 2 ** 53 - 1),
    _0x4c36ca = U(_0x2fdba0.limit, 100, 1, z),
    _0xcca587 = _0x38b6ad
      .slice(_0x11c8e0, _0x11c8e0 + _0x4c36ca)
      .map((_0x4a4b63) => Ve(_0x4a4b63, _0x2fdba0.detail)),
    _0x546d41 = _0x4477ff.unsupportedMutationIds ?? [],
    _0x18f1f0 = ze(_0x4477ff.productContext, _0x2fdba0);
  return H({
    schemaVersion: 1,
    comparisonId: _0x1c341e.comparisonId,
    unit: {
      unitId: _0x1c341e.unitId,
      type: _0x1c341e.type,
      ...(_0x1c341e.unitName === undefined ? {} : { name: _0x1c341e.unitName }),
    },
    fidelity: _0x1c341e.fidelity,
    ...(_0x1c341e.commonBaseRevision === undefined
      ? {}
      : { commonBaseRevision: _0x1c341e.commonBaseRevision }),
    stale: _0x1c341e.stale,
    detail: _0x2fdba0.detail ?? "changes",
    summary: He(_0x4477ff.items),
    coverage: { supportedEntityTypes: _0x4477ff.supportedEntityTypes },
    scopes: _0x4477ff.scopes ?? [],
    page: {
      offset: _0x11c8e0,
      limit: _0x4c36ca,
      matched: _0x38b6ad.length,
      hasMore: _0x11c8e0 + _0xcca587.length < _0x38b6ad.length,
    },
    items: _0xcca587,
    diagnostics: {
      readiness:
        _0x546d41.length || _0x4477ff.readiness === "degraded"
          ? "degraded"
          : "ready",
      unsupportedMutationIds: _0x546d41,
      codes: _0x4477ff.diagnosticCodes ?? [],
    },
    ...(_0x18f1f0 === undefined ? {} : { productContext: _0x18f1f0 }),
  });
}
function H(_0x2c51e9) {
  if (Array.isArray(_0x2c51e9))
    return _0x2c51e9.map((_0x12a458) => H(_0x12a458));
  if (typeof _0x2c51e9 == "object" && _0x2c51e9) {
    let _0x42474c = Object.getPrototypeOf(_0x2c51e9);
    if (_0x42474c === Object.prototype || _0x42474c === null) {
      let _0xa87cb5 = Object.fromEntries(
        Object.entries(_0x2c51e9).map(([_0x53d790, _0x3f5720]) => [
          _0x53d790,
          H(_0x3f5720),
        ]),
      );
      return Object.setPrototypeOf(_0xa87cb5, _0x42474c);
    }
  }
  return _0x4aa08a.deepClone(_0x2c51e9);
}
function U(_0x21bf2d, _0x33f7f2, _0x4b9000, _0xe35a81) {
  return _0x21bf2d === undefined || !Number.isFinite(_0x21bf2d)
    ? _0x33f7f2
    : Math.min(_0xe35a81, Math.max(_0x4b9000, Math.trunc(_0x21bf2d)));
}
function ze(_0x509380, _0x498d08) {
  if ((_0x509380 == null ? undefined : _0x509380.type) !== _0x4a3622.UNIVER_DOC)
    return _0x509380;
  let _0x5a65b3 = U(_0x498d08.contextOffset, 0, 0, 2 ** 53 - 1),
    _0x599ef6 = U(_0x498d08.contextLimit, z, 1, z),
    _0x362928 = _0x509380.paragraphAlignment["slice"](
      _0x5a65b3,
      _0x5a65b3 + _0x599ef6,
    );
  return {
    ..._0x509380,
    paragraphAlignment: _0x362928,
    paragraphAlignmentPage: {
      offset: _0x5a65b3,
      limit: _0x599ef6,
      matched: _0x509380.paragraphAlignment["length"],
      hasMore:
        _0x5a65b3 + _0x362928.length < _0x509380.paragraphAlignment["length"],
    },
  };
}
function Be(_0x525c81, _0x428cea) {
  var _0x161425;
  let _0x1cb623 =
    (_0x161425 = _0x428cea.search) == null
      ? undefined
      : _0x161425.trim().toLocaleLowerCase();
  return _0x525c81.filter((_0x395099) => {
    var _0x4c6c1d, _0x40aef1, _0x409f2f, _0x4a1fd2, _0x413896;
    return ((_0x4c6c1d = _0x428cea.kinds) != null &&
      _0x4c6c1d.length &&
      !_0x428cea.kinds["includes"](_0x395099.kind)) ||
      ((_0x40aef1 = _0x428cea.entityTypes) != null &&
        _0x40aef1.length &&
        !_0x428cea.entityTypes["includes"](_0x395099.entityType)) ||
      (_0x428cea.parentStableId !== undefined &&
        _0x395099.parentStableId !== _0x428cea.parentStableId &&
        ((_0x409f2f = _0x395099.locations["left"]) == null
          ? undefined
          : _0x409f2f.parentStableId) !== _0x428cea.parentStableId &&
        ((_0x4a1fd2 = _0x395099.locations["right"]) == null
          ? undefined
          : _0x4a1fd2.parentStableId) !== _0x428cea.parentStableId) ||
      (_0x428cea.scope !== undefined &&
        (((_0x413896 = _0x395099.scope) == null
          ? undefined
          : _0x413896.entityType) !== _0x428cea.scope["entityType"] ||
          _0x395099.scope["stableId"] !== _0x428cea.scope["stableId"]))
      ? false
      : !_0x1cb623 ||
          [
            _0x395099.displayName,
            _0x395099.stableId,
            _0x395099.parentStableId,
            ..._0x395099.path,
            ..._0x395099.changes["flatMap"]((_0x3c50b3) => [
              ..._0x3c50b3.path,
              E(_0x3c50b3.before),
              E(_0x3c50b3.after),
            ]),
          ].some((_0x333c1d) =>
            _0x333c1d == null
              ? undefined
              : _0x333c1d.toLocaleLowerCase().includes(_0x1cb623),
          );
  });
}
function Ve(_0x2a4478, _0x5a7409 = "changes") {
  if (_0x5a7409 === "full") return _0x2a4478;
  if (_0x5a7409 === "summary") {
    let { values: _0x10e7bd, ..._0x4ac8eb } = _0x2a4478;
    return { ..._0x4ac8eb, changes: [] };
  }
  let { values: _0x3a23cb, ..._0x4f760b } = _0x2a4478;
  return _0x4f760b;
}
function He(_0x310cdc) {
  let _0x4a8f0f = {},
    _0x1beee2 = 0,
    _0x3a185f = 0,
    _0xa5a19b = 0,
    _0x395335 = 0;
  for (let _0x3b3945 of _0x310cdc)
    (_0x3b3945.kind === "insert"
      ? (_0x1beee2 += 1)
      : _0x3b3945.kind === "delete"
        ? (_0x3a185f += 1)
        : (_0xa5a19b += 1),
      _0x3b3945.moved && (_0x395335 += 1),
      (_0x4a8f0f[_0x3b3945.entityType] =
        (_0x4a8f0f[_0x3b3945.entityType] ?? 0) + 1));
  return {
    total: _0x310cdc.length,
    insert: _0x1beee2,
    delete: _0x3a185f,
    update: _0xa5a19b,
    moved: _0x395335,
    byEntityType: _0x4a8f0f,
  };
}
function W(_0x299d0e, _0x581b04) {
  return function (_0x3f7e5d, _0x207be8) {
    _0x581b04(_0x3f7e5d, _0x207be8, _0x299d0e);
  };
}
function G(_0x5b3e28, _0x28807d, _0x56660b, _0x420cc2) {
  var _0x41940a = arguments.length,
    _0x504399 =
      _0x41940a < 3
        ? _0x28807d
        : _0x420cc2 === null
          ? (_0x420cc2 = Object.getOwnPropertyDescriptor(_0x28807d, _0x56660b))
          : _0x420cc2,
    _0x3b8b03;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x504399 = Reflect.decorate(_0x5b3e28, _0x28807d, _0x56660b, _0x420cc2);
  else {
    for (var _0x1f163c = _0x5b3e28.length - 1; _0x1f163c >= 0; _0x1f163c--)
      (_0x3b8b03 = _0x5b3e28[_0x1f163c]) &&
        (_0x504399 =
          (_0x41940a < 3
            ? _0x3b8b03(_0x504399)
            : _0x41940a > 3
              ? _0x3b8b03(_0x28807d, _0x56660b, _0x504399)
              : _0x3b8b03(_0x28807d, _0x56660b)) || _0x504399);
  }
  return (
    _0x41940a > 3 &&
      _0x504399 &&
      Object.defineProperty(_0x28807d, _0x56660b, _0x504399),
    _0x504399
  );
}
let K = class {
  constructor(_0xfd5321) {
    this._adapterRegistry = _0xfd5321;
  }
  compare(_0x17f4e9) {
    let { query: _0x38b551, ..._0x5dcb48 } = _0x17f4e9;
    return this.query(this.prepare(_0x5dcb48), _0x38b551);
  }
  prepare(_0x3f1d4d) {
    let _0x1db734 = this._adapterRegistry["get"](_0x3f1d4d.type);
    if (!_0x1db734)
      throw Error(
        "[UnitComparisonService]: No comparison adapter for unit type " +
          _0x3f1d4d.type +
          ".",
      );
    return B(_0x3f1d4d, _0x1db734);
  }
  query(_0x2070c3, _0x46c4bf = {}) {
    return V(_0x2070c3, _0x46c4bf);
  }
};
K = G([W(0, _0x1dbdaf(R))], K);
const Ue = "edit-history.config",
  q = { historyServerUrl: "/universer-api/history", pageSize: 20 };
var We = "@univerjs-pro/edit-history",
  Ge = "1.0.0-insiders.20260907-70fc579",
  J = class extends _0x11b9ef {
    constructor(..._0x572f24) {
      (super(..._0x572f24), L(this, "_adapters", new Map()));
    }
    register(_0x8eba6f) {
      if (this._adapters["has"](_0x8eba6f.type))
        throw Error(
          "[HistoryUnitAdapterRegistryService]:\x20Adapter\x20for\x20unit\x20type\x20" +
            _0x8eba6f.type +
            " is already registered.",
        );
      return (
        this._adapters["set"](_0x8eba6f.type, _0x8eba6f),
        _0x4bc74e(() => {
          this._adapters["get"](_0x8eba6f.type) === _0x8eba6f &&
            this._adapters["delete"](_0x8eba6f.type);
        })
      );
    }
    get(_0x12d2c8) {
      return this._adapters["get"](_0x12d2c8);
    }
    dispose() {
      (this._adapters["clear"](), super.dispose());
    }
  };
const Ke = {
  id: "edit-history.command.restore-history",
  type: _0x5d389e.COMMAND,
  handler: async (_0x4bfac1, _0x441d51) => {
    if (!_0x441d51) return false;
    let _0x11885c = _0x4bfac1.get(J).get(_0x441d51.type);
    if (!_0x11885c)
      throw Error(
        "[RestoreHistoryCommand]: No history adapter is registered for unit type " +
          _0x441d51.type +
          ".",
      );
    if (!(await _0x11885c.canRevert(_0x441d51.unitId)))
      throw Error(
        "[RestoreHistoryCommand]: The current user cannot restore history for this unit.",
      );
    let _0x59af45 = _0x4bfac1
      .get(_0x537c57)
      .getUnit(_0x441d51.unitId, _0x441d51.type);
    if (!_0x59af45)
      throw Error(
        "[RestoreHistoryCommand]: Unit " +
          _0x441d51.unitId +
          " is not available.",
      );
    let _0x861302 = _0x59af45.getRev();
    return (await _0x4bfac1
      .get(_0x445c48)
      .executeCommand(_0x5ba92d.id, {
        unitId: _0x441d51.unitId,
        revision: _0x441d51.revision,
      }))
      ? (_0x4bfac1
          .get(_0xd023d0)
          .pushUndoRedo({
            unitID: _0x441d51.unitId,
            undoMutations: [
              {
                id: _0x5ba92d.id,
                params: { unitId: _0x441d51.unitId, revision: _0x861302 },
              },
            ],
            redoMutations: [
              {
                id: _0x5ba92d.id,
                params: {
                  unitId: _0x441d51.unitId,
                  revision: _0x441d51.revision,
                },
              },
            ],
          }),
        true)
      : false;
  },
};
let Y = class {
  constructor(_0x3e0d8c, _0x3670a9) {
    ((this._configService = _0x3e0d8c), (this._httpService = _0x3670a9));
  }
  async fetchVersions(_0x3c7e34, _0xa2f06c = {}) {
    var _0xca76ae;
    let _0x1991dc = new URL();
    SearchParams();
    (_0x1991dc.set("length", String(this._getPageSize())),
      _0xa2f06c.lastLabel && _0x1991dc.set("lastLabel", _0xa2f06c.lastLabel),
      (_0xca76ae = _0xa2f06c.userIds) == null ||
        _0xca76ae.forEach((_0x57df08) =>
          _0x1991dc.append("userIds", _0x57df08),
        ),
      _0xa2f06c.origin && _0x1991dc.set("origin", String(_0xa2f06c.origin)));
    let _0x336af1 = (
      await this._httpService["get"](
        this._getApiPrefix() +
          "/" +
          _0x3c7e34 +
          "/list?" +
          _0x1991dc.toString(),
      )
    ).body;
    return (
      this._assertOk(_0x336af1.error, "list versions"),
      {
        hasMore: _0x336af1.hasMore,
        lastLabel: _0x336af1.lastLabel,
        versions: Xe(_0x336af1),
        members: Ye(_0x336af1.entities["users"]),
      }
    );
  }
  async fetchCreators(_0x29d9de) {
    let _0x539463 = await this._httpService["get"](
      this._getApiPrefix() + "/" + _0x29d9de + "/creators",
    );
    return (
      this._assertOk(_0x539463.body["error"], "list creators"),
      _0x539463.body["creators"] ?? []
    );
  }
  async fetchVersionDetails(_0x4c3f14, _0x50f407) {
    if (_0x50f407.startRevision === _0x50f407.endRevision) return [];
    let _0x87cee2 = await this.fetchChangesets(_0x4c3f14, {
      baseRevision: Math.max(0, _0x50f407.startRevision - 1),
      targetRevision: _0x50f407.endRevision,
    });
    return [..._0x87cee2.changesets].reverse().map((_0x4c3437) => {
      let _0x4f1f70 = _0x525eb9(_0x4c3437),
        _0x425f8b =
          _0x87cee2.members[_0x4f1f70.userID] ??
          _0x87cee2.members[_0x4f1f70.memberID],
        _0x5b1342 =
          _0x425f8b != null && _0x425f8b.anonymous
            ? ""
            : ((_0x425f8b == null ? undefined : _0x425f8b.name) ?? "");
      return {
        unitId: _0x4c3f14,
        id: _0x50f407.id + ":revision:" + _0x4f1f70.revision,
        startRevision: _0x4f1f70.revision,
        endRevision: _0x4f1f70.revision,
        createTime: _0x4c3437.createTime
          ? Number(_0x4c3437.createTime) * 1000
          : undefined,
        creatorName: _0x5b1342,
        creatorNames: _0x5b1342 ? [_0x5b1342] : [],
        isAnonymous: !!(_0x425f8b != null && _0x425f8b.anonymous),
        commands: qe(_0x4f1f70.mutations),
        mutations: _0x4f1f70.mutations,
        additionalFields: _0x4f1f70.additionalFields,
        isDetail: true,
        parentId: _0x50f407.id,
      };
    });
  }
  async fetchChangesets(_0x5efb0e, _0x4b97f1) {
    if (_0x4b97f1.targetRevision < _0x4b97f1.baseRevision)
      throw Error(
        "[HistoryGatewayService]:\x20targetRevision\x20must\x20be\x20greater\x20than\x20or\x20equal\x20to\x20baseRevision.",
      );
    if (_0x4b97f1.targetRevision === _0x4b97f1.baseRevision)
      return { comparison: _0x4b97f1, changesets: [], members: {} };
    let _0x499240 = _0x4b97f1.baseRevision + 1,
      _0x12c5cc = await this._httpService["get"](
        this._getApiPrefix() +
          "/" +
          _0x5efb0e +
          "/cs?startRevision=" +
          _0x499240 +
          "&endRevision=" +
          _0x4b97f1.targetRevision,
      );
    return (
      this._assertOk(_0x12c5cc.body["error"], "load changesets"),
      {
        comparison: _0x4b97f1,
        changesets: _0x12c5cc.body["changesets"] ?? [],
        members: Ye(_0x12c5cc.body["users"] ?? {}),
      }
    );
  }
  _getApiPrefix() {
    var _0x193d54;
    return (
      ((_0x193d54 = this._configService["getConfig"]("edit-history.config")) ==
      null
        ? undefined
        : _0x193d54.historyServerUrl) ?? "/universer-api/history"
    );
  }
  _getPageSize() {
    var _0x3e32cb;
    return (
      ((_0x3e32cb = this._configService["getConfig"]("edit-history.config")) ==
      null
        ? undefined
        : _0x3e32cb.pageSize) ?? 20
    );
  }
  _assertOk(_0x4b5fa8, _0x308582) {
    if (!_0x4b5fa8 || _0x4b5fa8.code !== _0x5554d6.OK)
      throw Error(
        "[HistoryGatewayService]:\x20Failed\x20to\x20" +
          _0x308582 +
          (_0x4b5fa8 != null && _0x4b5fa8.message
            ? ":\x20" + _0x4b5fa8.message
            : "."),
      );
  }
};
Y = G([W(0, _0x3478e8), W(1, _0x1dbdaf(_0x219935))], Y);
function qe(_0x45e9eb) {
  if (!_0x45e9eb) return [];
  let _0x43a409 = _0x45e9eb.flatMap((_0x48e519) => {
    let _0x1b5a52 = Je(_0x48e519.params);
    return _0x1b5a52 ? [_0x1b5a52, _0x48e519.id] : [_0x48e519.id];
  });
  return [...new Set(_0x43a409)];
}
function Je(_0x28eea1) {
  if (!(
    typeof _0x28eea1 != "object" ||
    !_0x28eea1 ||
    !("trigger" in _0x28eea1)
  ))
    return typeof _0x28eea1.trigger == "string" ? _0x28eea1.trigger : undefined;
}
function Ye(_0x54df18) {
  return Object.fromEntries(
    Object.entries(_0x54df18).map(([_0x5db3c9, _0x4d3edb]) => [
      _0x5db3c9,
      {
        userId: _0x4d3edb.userID || _0x5db3c9,
        name: _0x4d3edb.name,
        avatar: _0x4d3edb.avatar,
        anonymous: !!_0x4d3edb.anonymous,
      },
    ]),
  );
}
function Xe(_0x3548f5) {
  return _0x3548f5.historyIds["flatMap"]((_0x46f007) => {
    let _0xf33548 = _0x3548f5.entities["datas"][_0x46f007];
    if (!_0xf33548) return [];
    let _0x5a4b83 = _0x3548f5.entities["users"][_0xf33548.userId],
      _0x19ce50 = !!(_0x5a4b83 != null && _0x5a4b83.anonymous);
    return [
      {
        unitId: _0xf33548.unitId,
        id: _0x46f007,
        startRevision: Number(_0xf33548.startRevision),
        endRevision: Number(_0xf33548.endRevision),
        createTime: _0xf33548.createTime
          ? Number(_0xf33548.createTime)
          : undefined,
        creatorName: _0x19ce50
          ? ""
          : ((_0x5a4b83 == null ? undefined : _0x5a4b83.name) ?? ""),
        creatorNames: _0xf33548.userIds["map"]((_0x2b3dbb) => {
          var _0x57b8f6;
          return (
            ((_0x57b8f6 = _0x3548f5.entities["users"][_0x2b3dbb]) == null
              ? undefined
              : _0x57b8f6.name) ?? ""
          );
        }).filter(Boolean),
        isAnonymous: _0x19ce50,
        commands: _0xf33548.command,
        recoverTime: _0xf33548.recoverTime
          ? Number(_0xf33548.recoverTime)
          : undefined,
        additionalFields: _0xf33548.additionalFields,
        startRevisionCreateTime: _0xf33548.startRevCreateTime
          ? Number(_0xf33548.startRevCreateTime)
          : undefined,
        endRevisionCreateTime: _0xf33548.endRevCreateTime
          ? Number(_0xf33548.endRevCreateTime)
          : undefined,
      },
    ];
  });
}
let X = class {
  constructor(_0x430722) {
    this._gateway = _0x430722;
  }
  async load(_0x1c7522, _0x4d9b5f) {
    return (
      await this._gateway["fetchChangesets"](_0x1c7522, _0x4d9b5f)
    ).changesets["flatMap"]((_0x4c8c3c) => {
      let _0x2a1fc8 = _0x525eb9(_0x4c8c3c),
        _0x40b268 = _0x2a1fc8.memberID || _0x2a1fc8.userID || "unknownUser";
      return _0x2a1fc8.mutations["map"]((_0x56c2f9) => ({
        mutation: _0x56c2f9,
        memberId: _0x40b268,
        revision: _0x2a1fc8.revision,
      }));
    });
  }
};
X = G([W(0, _0x1dbdaf(Y))], X);
let Z = class {
  constructor(_0x2d2bcd) {
    this._commandService = _0x2d2bcd;
  }
  async restore(_0x3c2cfd, _0x1899f7, _0x590864) {
    return !!(await this._commandService["executeCommand"](Ke.id, {
      unitId: _0x3c2cfd,
      type: _0x1899f7,
      revision: _0x590864,
    }));
  }
};
Z = G([W(0, _0x445c48)], Z);
let Ze = (function (_0xdd2704) {
    return (
      (_0xdd2704.Idle = "idle"),
      (_0xdd2704.Opening = "opening"),
      (_0xdd2704.Ready = "ready"),
      (_0xdd2704.LoadingMore = "loading-more"),
      (_0xdd2704.Error = "error"),
      (_0xdd2704.Closing = "closing"),
      _0xdd2704
    );
  })({}),
  Q = class extends _0x11b9ef {
    constructor(_0x1a7bc3) {
      (super(),
        (this._gateway = _0x1a7bc3),
        L(this, "_status$", new _0x1abe4d("idle")),
        L(this, "status$", this._status$["asObservable"]()),
        L(this, "_versions$", new _0x1abe4d([])),
        L(this, "versions$", this._versions$["asObservable"]()),
        L(this, "_currentVersion$", new _0x1abe4d(null)),
        L(this, "currentVersion$", this._currentVersion$["asObservable"]()),
        L(this, "_creators$", new _0x1abe4d([])),
        L(this, "creators$", this._creators$["asObservable"]()),
        L(this, "_members$", new _0x1abe4d({})),
        L(this, "members$", this._members$["asObservable"]()),
        L(this, "_error$", new _0x1abe4d(null)),
        L(this, "error$", this._error$["asObservable"]()),
        L(this, "_descriptor", null),
        L(this, "_query", {}),
        L(this, "_hasMore", false),
        L(this, "_lastLabel", ""),
        L(this, "_sessionGeneration", 0),
        L(this, "_listRequestGeneration", 0),
        L(this, "_versionDetails", new Map()),
        L(this, "_versionDetailRequests", new Map()));
    }
    get descriptor() {
      return this._descriptor;
    }
    get currentVersion() {
      return this._currentVersion$["value"];
    }
    get hasMore() {
      return this._hasMore;
    }
    async open(_0x384353, _0x169aa0 = {}) {
      let _0x1bfeed = ++this._sessionGeneration,
        _0x5059bf = ++this._listRequestGeneration;
      (this._versionDetails["clear"](),
        this._versionDetailRequests["clear"](),
        (this._descriptor = _0x384353),
        (this._query = _0x169aa0),
        this._status$["next"]("opening"),
        this._error$["next"](null));
      try {
        let _0x3ea99b = await this._gateway["fetchVersions"](
          _0x384353.unitId,
          _0x169aa0,
        );
        if (
          _0x1bfeed !== this._sessionGeneration ||
          _0x5059bf !== this._listRequestGeneration
        )
          return;
        let _0x19694b = [Qe(_0x384353.unitId)];
        (_0x3ea99b.versions["length"] > 0 &&
          (_0x19694b = _0x3ea99b.versions["map"]((_0x3a6823, _0x35d1a1) =>
            _0x35d1a1 === 0 ? { ..._0x3a6823, isCurrent: true } : _0x3a6823,
          )),
          this._versions$["next"](_0x19694b),
          this._members$["next"](_0x3ea99b.members),
          this._currentVersion$["next"](_0x19694b[0]),
          (this._hasMore = _0x3ea99b.hasMore),
          (this._lastLabel = _0x3ea99b.lastLabel),
          this._status$["next"]("ready"),
          this._loadCreators(_0x384353.unitId, _0x1bfeed));
      } catch (_0x3ea095) {
        if (
          _0x1bfeed !== this._sessionGeneration ||
          _0x5059bf !== this._listRequestGeneration
        )
          return;
        let _0xcd54e1 =
          _0x3ea095 instanceof Error ? _0x3ea095 : Error(String(_0x3ea095));
        throw (
          this._error$["next"](_0xcd54e1),
          this._status$["next"]("error"),
          _0xcd54e1
        );
      }
    }
    _loadCreators(_0x4a7ccf, _0x4964c2) {
      this._gateway["fetchCreators"](_0x4a7ccf)
        .then((_0x3bb0cd) => {
          _0x4964c2 === this._sessionGeneration &&
            this._creators$["next"](_0x3bb0cd);
        })
        .catch(() => {
          _0x4964c2 === this._sessionGeneration && this._creators$["next"]([]);
        });
    }
    async loadMore() {
      if (
        !this._descriptor ||
        !this._hasMore ||
        !this._lastLabel ||
        this._status$["value"] === "loading-more"
      )
        return;
      let _0x165481 = this._sessionGeneration,
        _0x53f5b8 = ++this._listRequestGeneration;
      (this._status$["next"]("loading-more"), this._error$["next"](null));
      try {
        let _0xf7f128 = await this._gateway["fetchVersions"](
          this._descriptor["unitId"],
          { ...this._query, lastLabel: this._lastLabel },
        );
        if (
          _0x165481 !== this._sessionGeneration ||
          _0x53f5b8 !== this._listRequestGeneration
        )
          return;
        (this._versions$["next"]([
          ...this._versions$["value"],
          ..._0xf7f128.versions,
        ]),
          this._members$["next"]({
            ...this._members$["value"],
            ..._0xf7f128.members,
          }),
          (this._hasMore = _0xf7f128.hasMore),
          (this._lastLabel = _0xf7f128.lastLabel),
          this._status$["next"]("ready"));
      } catch (_0x2ce917) {
        if (
          _0x165481 !== this._sessionGeneration ||
          _0x53f5b8 !== this._listRequestGeneration
        )
          return;
        let _0x4b58e4 =
          _0x2ce917 instanceof Error ? _0x2ce917 : Error(String(_0x2ce917));
        throw (
          this._error$["next"](_0x4b58e4),
          this._status$["next"]("error"),
          _0x4b58e4
        );
      }
    }
    async loadVersionDetails(_0x2cba78) {
      let _0x290908 = this._versionDetails["get"](_0x2cba78);
      if (_0x290908) return _0x290908;
      let _0x47b216 = this._versionDetailRequests["get"](_0x2cba78);
      if (_0x47b216) return _0x47b216;
      let _0x29edda = this._versions$["value"].find(
        (_0x75be50) => _0x75be50.id === _0x2cba78,
      );
      if (!_0x29edda)
        throw Error(
          "[HistorySessionService]: Unknown history version " + _0x2cba78 + ".",
        );
      let _0x367a0f = this._sessionGeneration,
        _0x51000c = this._gateway["fetchVersionDetails"](
          _0x29edda.unitId,
          _0x29edda,
        )
          .then((_0x5618b8) =>
            _0x367a0f === this._sessionGeneration
              ? (this._versionDetails["set"](_0x2cba78, _0x5618b8), _0x5618b8)
              : [],
          )
          .finally(() => {
            this._versionDetailRequests["get"](_0x2cba78) === _0x51000c &&
              this._versionDetailRequests["delete"](_0x2cba78);
          });
      return (
        this._versionDetailRequests["set"](_0x2cba78, _0x51000c),
        _0x51000c
      );
    }
    selectVersion(_0x3f0180) {
      let _0x5a0b95 =
        typeof _0x3f0180 == "string"
          ? this._versions$["value"].find(
              (_0x33c840) => _0x33c840.id === _0x3f0180,
            )
          : _0x3f0180;
      if (!_0x5a0b95)
        throw Error(
          "[HistorySessionService]:\x20Unknown\x20history\x20version\x20" +
            String(_0x3f0180) +
            ".",
        );
      return (this._currentVersion$["next"](_0x5a0b95), _0x5a0b95);
    }
    close() {
      (++this._sessionGeneration,
        ++this._listRequestGeneration,
        this._status$["next"]("closing"),
        (this._descriptor = null),
        (this._query = {}),
        (this._hasMore = false),
        (this._lastLabel = ""),
        this._versionDetails["clear"](),
        this._versionDetailRequests["clear"](),
        this._versions$["next"]([]),
        this._currentVersion$["next"](null),
        this._creators$["next"]([]),
        this._members$["next"]({}),
        this._error$["next"](null),
        this._status$["next"]("idle"));
    }
    dispose() {
      (this.close(),
        this._status$["complete"](),
        this._versions$["complete"](),
        this._currentVersion$["complete"](),
        this._creators$["complete"](),
        this._members$["complete"](),
        this._error$["complete"](),
        super.dispose());
    }
  };
Q = G([W(0, _0x1dbdaf(Y))], Q);
function Qe(_0x205a04) {
  return {
    unitId: _0x205a04,
    id: _0x205a04 + ":current",
    startRevision: 1,
    endRevision: 0,
    creatorName: "",
    creatorNames: [],
    isAnonymous: false,
    commands: [],
    isCurrent: true,
  };
}
let $ = class extends _0x3f178f {
  constructor(_0x467fb3 = q, _0x14039f, _0x1492e0, _0x5463b7) {
    (super(),
      (this._config = _0x467fb3),
      (this._injector = _0x14039f),
      (this._configService = _0x1492e0),
      (this._commandService = _0x5463b7));
    let { ..._0x5b9971 } = _0x10608a({}, q, this._config);
    this._configService["setConfig"](Ue, _0x5b9971);
  }
  onStarting() {
    (this.disposeWithMe(this._commandService["registerCommand"](Ke)),
      _0x5901b7(this._injector, [[Y], [X], [Z], [J], [Q], [R], [K]]));
  }
};
(L($, "pluginName", "UNIVER_EDIT_HISTORY_PLUGIN"),
  L($, "packageName", We),
  L($, "version", Ge),
  L($, "type", _0x4a3622.UNIVER_UNKNOWN),
  ($ = G(
    [
      _0x3f6f33(_0x52dd4f, _0x204cd5),
      W(1, _0x1dbdaf(_0x4c7ca6)),
      W(2, _0x3478e8),
      W(3, _0x445c48),
    ],
    $,
  )));
let $e = (function (_0x15521e) {
  return (
    (_0x15521e[(_0x15521e.Unspecified = 0)] = "Unspecified"),
    (_0x15521e[(_0x15521e.User = 1)] = "User"),
    (_0x15521e[(_0x15521e.Character = 2)] = "Character"),
    _0x15521e
  );
})({});
function et(_0x1445f4) {
  return {
    baseRevision: Math.max(0, _0x1445f4.startRevision - 1),
    targetRevision: _0x1445f4.endRevision,
  };
}
function tt(_0x570d2c, _0x386d81) {
  return _0x525eb9(_0x570d2c.data).mutations["some"](
    (_0x26e3aa) =>
      _0x26e3aa.id === _0x5ba92d.id &&
      Reflect.get(_0x26e3aa.params, "revision") === _0x386d81,
  );
}
export {
  Ue as EDIT_HISTORY_PLUGIN_CONFIG_KEY,
  Y as HistoryGatewayService,
  X as HistoryMutationService,
  $e as HistoryOrigin,
  Z as HistoryRestoreService,
  Q as HistorySessionService,
  Ze as HistorySessionStatus,
  J as HistoryUnitAdapterRegistryService,
  R as UnitComparisonAdapterRegistryService,
  oe as UnitComparisonChangeKind,
  se as UnitComparisonDetailLevel,
  fe as UnitComparisonDiagnosticCode,
  ue as UnitComparisonEntityType,
  ae as UnitComparisonFidelity,
  de as UnitComparisonReadiness,
  ce as UnitComparisonSegmentKind,
  K as UnitComparisonService,
  le as UnitComparisonValueType,
  $ as UniverEditHistoryPlugin,
  _ as alignComparisonIdentities,
  Ae as arrayComparisonEntries,
  T as asRecord,
  S as buildScopedUnitComparison,
  ge as buildSemanticComparisonItems,
  we as buildSemanticLeafChanges,
  Te as buildUnitComparisonScopes,
  Re as createUnitComparisonEngine,
  et as getVersionComparison,
  tt as isHistoryRestoreAcknowledgement,
  x as recordComparisonEntries,
  je as resourceComparisonEntries,
  E as stableJson,
  Me as withoutComparisonKeys,
};
