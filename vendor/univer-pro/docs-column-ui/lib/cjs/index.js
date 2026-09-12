Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-column"),
  t = require("@univerjs/docs-ui"),
  n = require("@univerjs/ui"),
  r = require("@univerjs/core"),
  i = require("@univerjs/docs"),
  a = require("@univerjs/engine-render"),
  o = require("rxjs"),
  s = require("react"),
  c = require("react/jsx-runtime"),
  l = require("@univerjs-pro/license");
function u(_0xda248e) {
  let _0x37db99 = _0xda248e.get(r.IUniverInstanceService),
    _0x214385 = _0xda248e.get(i.DocSelectionManagerService);
  return new o["Observable"]((_0x43f660) => {
    let _0x3354ee = () => {
      _0x43f660.next(ne(_0xda248e, _0x37db99, _0x214385));
    };
    _0x3354ee();
    let _0x36aaaf = _0x214385.textSelection$["subscribe"](_0x3354ee),
      _0x8d020e = _0x37db99.focused$["subscribe"](_0x3354ee);
    return () => {
      (_0x36aaaf.unsubscribe(), _0x8d020e.unsubscribe());
    };
  });
}
function d(_0x9ee7a0, _0x1cc6e1 = {}) {
  let _0x5ae568 = _0x9ee7a0.get(r.IUniverInstanceService),
    _0x3beb62 = _0x9ee7a0.get(i.DocSelectionManagerService);
  return new o["Observable"]((_0x3a6089) => {
    let _0x9b5a92 = () => {
      let _0x4bca2a = h(_0x9ee7a0, _0x5ae568, _0x3beb62);
      _0x3a6089.next(
        !_0x4bca2a ||
          _0x4bca2a.columnCount < (_0x1cc6e1.minColumnCount ?? 1) ||
          (_0x1cc6e1.maxColumnCount != null &&
            _0x4bca2a.columnCount > _0x1cc6e1.maxColumnCount),
      );
    };
    _0x9b5a92();
    let _0x155b0e = _0x3beb62.textSelection$["subscribe"](_0x9b5a92),
      _0x17e977 = _0x5ae568.focused$["subscribe"](_0x9b5a92);
    return () => {
      (_0x155b0e.unsubscribe(), _0x17e977.unsubscribe());
    };
  });
}
function f(_0x59c260) {
  let _0x48bd2d = h(_0x59c260);
  return _0x48bd2d && _0x48bd2d.columnCount < e.DOCS_COLUMN_MAX_COLUMN_COUNT
    ? {
        columnGroupId: _0x48bd2d.columnGroupId,
        targetColumnId: _0x48bd2d.columnId,
        position: "right",
      }
    : undefined;
}
function p(_0x53d1da) {
  let _0x17e3d9 = h(_0x53d1da);
  return _0x17e3d9
    ? { columnGroupId: _0x17e3d9.columnGroupId, columnId: _0x17e3d9.columnId }
    : undefined;
}
function ee(_0x15f5af) {
  let _0x3d76b8 = h(_0x15f5af);
  return _0x3d76b8 ? { columnGroupId: _0x3d76b8.columnGroupId } : undefined;
}
function te(_0x1f2aa5) {
  let _0x633cff = h(_0x1f2aa5);
  return _0x633cff
    ? {
        columnGroupId: _0x633cff.columnGroupId,
        widthRatios: Array.from({ length: _0x633cff.columnCount }, () => 1),
      }
    : undefined;
}
function m(_0x472359, _0x5efffe) {
  var _0x52c184;
  if (!_0x472359 || typeof _0x5efffe != "number") return null;
  for (let _0x193225 of ((_0x52c184 = _0x472359.body) == null
    ? undefined
    : _0x52c184.columnGroups) ?? []) {
    let _0x41818c = (0, e.getColumnGroupRangeById)(
        _0x472359,
        _0x193225.columnGroupId,
      ),
      _0x2c654e =
        _0x41818c == null
          ? undefined
          : _0x41818c.columns["find"](
              (_0x120572) =>
                _0x5efffe > _0x120572.startOffset &&
                _0x5efffe < _0x120572.endOffset,
            );
    if (_0x41818c && _0x2c654e)
      return {
        columnGroupId: _0x41818c.columnGroupId,
        columnId: _0x2c654e.columnId,
        column: _0x2c654e.column,
        columnCount: _0x41818c.columns["length"],
      };
  }
  return null;
}
function h(
  _0x249152,
  _0x3c97d9 = _0x249152.get(r.IUniverInstanceService),
  _0x325a99 = _0x249152.get(i.DocSelectionManagerService),
) {
  var _0x201957;
  let _0x4f369d =
      (_0x201957 = _0x3c97d9.getCurrentUnitOfType(
        r.UniverInstanceType["UNIVER_DOC"],
      )) == null
        ? undefined
        : _0x201957.getSnapshot(),
    _0x2785a7 = _0x325a99.getActiveTextRange();
  return m(
    _0x4f369d,
    (_0x2785a7 == null ? undefined : _0x2785a7.collapsed) === false
      ? null
      : _0x2785a7 == null
        ? undefined
        : _0x2785a7.startOffset,
  );
}
function ne(
  _0x3ac7b4,
  _0x34f76a = _0x3ac7b4.get(r.IUniverInstanceService),
  _0x5be4ab = _0x3ac7b4.get(i.DocSelectionManagerService),
) {
  var _0x1d1e4d;
  let _0x22dc8a =
    (_0x1d1e4d = _0x34f76a.getCurrentUnitOfType(
      r.UniverInstanceType["UNIVER_DOC"],
    )) == null
      ? undefined
      : _0x1d1e4d.getSnapshot();
  return (
    !_0x22dc8a ||
    !g(_0x3ac7b4, _0x22dc8a, _0x5be4ab) ||
    re(_0x3ac7b4, _0x22dc8a, _0x5be4ab)
  );
}
function g(
  _0x3fcbd2,
  _0x153a3c,
  _0x4cc209 = _0x3fcbd2.get(i.DocSelectionManagerService),
) {
  var _0x56c2f8, _0x5a5139;
  let _0x3e4547 = v(_0x3fcbd2, _0x153a3c.id),
    _0x4fa5f3 = _0x3e4547
      ? [
          (_0x56c2f8 = _0x3e4547.menuRange) == null
            ? undefined
            : _0x56c2f8.startOffset,
          (_0x5a5139 = _0x3e4547.moveRange) == null
            ? undefined
            : _0x5a5139.startOffset,
        ]
      : [],
    _0x4d4880 = _0x4cc209.getActiveTextRange(),
    _0x10c5f6 =
      (_0x4d4880 == null ? undefined : _0x4d4880.collapsed) === false
        ? null
        : _0x4d4880 == null
          ? undefined
          : _0x4d4880.startOffset,
    _0x2e4fc2 = [..._0x4fa5f3, _0x10c5f6].filter(
      (_0x42fab6) => typeof _0x42fab6 == "number",
    );
  return (
    _0x2e4fc2.length === 0 ||
    _0x2e4fc2.some((_0x1ebcf8) =>
      (0, e.canResolveDocsColumnInsertOffset)(_0x153a3c, _0x1ebcf8),
    )
  );
}
function re(
  _0x210d78,
  _0x5b825f,
  _0x2b4f6e = _0x210d78.get(i.DocSelectionManagerService),
) {
  let _0x491c38 = v(_0x210d78, _0x5b825f.id);
  if (
    _0x491c38 &&
    (_(_0x5b825f, _0x491c38.menuRange) || _(_0x5b825f, _0x491c38.moveRange))
  )
    return true;
  let _0x3f5f26 = _0x2b4f6e.getActiveTextRange();
  return (
    m(
      _0x5b825f,
      (_0x3f5f26 == null ? undefined : _0x3f5f26.collapsed) === false
        ? null
        : _0x3f5f26 == null
          ? undefined
          : _0x3f5f26.startOffset,
    ) != null
  );
}
function _(_0x1aab95, _0x54c373) {
  return _0x54c373
    ? [
        _0x54c373.startOffset,
        _0x54c373.startOffset + 1,
        _0x54c373.endOffset - 1,
        _0x54c373.endOffset,
      ].some((_0x1fc2a8) => m(_0x1aab95, _0x1fc2a8) != null)
    : false;
}
function v(_0x25276f, _0x254b20) {
  try {
    let _0x37a165 = _0x25276f
        .get(a.IRenderManagerService)
        .getRenderUnitById(_0x254b20),
      _0x76b39a =
        _0x37a165 == null
          ? undefined
          : _0x37a165.with(t.DocParagraphMenuService);
    return (_0x76b39a == null ? undefined : _0x76b39a.activeTarget) ?? null;
  } catch {
    return null;
  }
}
function y(_0x4f2a16, _0x5cbe82 = {}) {
  let _0x4b83f8 = _0x4f2a16
    .get(r.IUniverInstanceService)
    .getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"]);
  if (!_0x4b83f8) return null;
  let _0x157c3d = _0x4b83f8.getUnitId(),
    _0x21a739 = _0x4b83f8.getSnapshot(),
    _0x41ea0d = ie(_0x4f2a16, _0x157c3d, _0x5cbe82);
  if (!_0x41ea0d) return null;
  let _0x32c592 = (0, e.normalizeDocsColumnInsertOffset)(
    _0x21a739,
    _0x41ea0d.offset,
    { snapToParagraphEnd: _0x5cbe82.snapToParagraphEnd },
  );
  return (0, e.canResolveDocsColumnInsertOffset)(_0x21a739, _0x32c592)
    ? {
        offset: _0x32c592,
        rawOffset: _0x41ea0d.offset,
        source: _0x41ea0d.source,
      }
    : null;
}
function ie(_0x2df608, _0x598b59, _0x16b016) {
  if (typeof _0x16b016.explicitOffset == "number")
    return { offset: _0x16b016.explicitOffset, source: "explicit" };
  if (_0x16b016.consumeContentInsertRange) {
    let _0x41723f = (0, i.consumeContentInsertRange)(_0x2df608, _0x598b59);
    if (_0x41723f)
      return { offset: _0x41723f.startOffset, source: "contentInsertRange" };
  }
  let _0x3bd368 = b(_0x2df608, _0x598b59, _0x16b016.placement ?? "target");
  if (typeof _0x3bd368 == "number")
    return { offset: _0x3bd368, source: "paragraphTarget" };
  let _0x25047b = _0x2df608
    .get(i.DocSelectionManagerService)
    .getActiveTextRange();
  return !_0x25047b ||
    _0x25047b.collapsed === false ||
    _0x25047b.startOffset !== _0x25047b.endOffset
    ? null
    : { offset: _0x25047b.startOffset, source: "selection" };
}
function b(_0x226995, _0x203805, _0x1753f7) {
  var _0x5e398e, _0xb387b1;
  let _0x7bdf89 = v(_0x226995, _0x203805);
  if (!_0x7bdf89) return null;
  if (_0x1753f7 === "below") {
    var _0x2304a9, _0x3cc860;
    return (
      ((_0x2304a9 = _0x7bdf89.moveRange) == null
        ? undefined
        : _0x2304a9.endOffset) ??
      ((_0x3cc860 = _0x7bdf89.menuRange) == null
        ? undefined
        : _0x3cc860.endOffset) ??
      null
    );
  }
  return (
    ((_0x5e398e = _0x7bdf89.menuRange) == null
      ? undefined
      : _0x5e398e.startOffset) ??
    ((_0xb387b1 = _0x7bdf89.moveRange) == null
      ? undefined
      : _0xb387b1.startOffset) ??
    null
  );
}
const x = {
    id: "doc.command.menu-insert-column-group",
    type: r.CommandType["COMMAND"],
    handler: (_0x390877, _0x32f573) => {
      if (!_0x32f573) return false;
      let _0x29cbc5 = y(_0x390877, {
        explicitOffset: _0x32f573.offset,
        consumeContentInsertRange: true,
        snapToParagraphEnd: true,
      });
      return _0x29cbc5
        ? _0x390877
            .get(r.ICommandService)
            .syncExecuteCommand(e.InsertDocColumnGroupCommand["id"], {
              ..._0x32f573,
              offset: _0x29cbc5.offset,
            })
        : false;
    },
  },
  S = "docs-column-ui.insert-column-picker",
  ae = Array.from({ length: 5 }, (_0x43a364, _0x2ae6cc) => _0x2ae6cc + 1);
function oe(_0x3d0a08) {
  let _0xf4cf9c = (0, n.useDependency)(r.LocaleService),
    [_0x20d63c, _0x564c5e] = (0, s.useState)(3),
    _0x45cac0 = (0, s.useRef)(false),
    _0x4f69cd = (_0x27b9d7) => {
      var _0x833e1c;
      (_0x833e1c = _0x3d0a08.onChange) == null ||
        _0x833e1c.call(_0x3d0a08, String(_0x27b9d7));
    };
  return (0, c.jsxs)("section", {
    className: "univer-py-2",
    "data-u-comp": S,
    onClick: (_0x2be7cb) => _0x2be7cb.stopPropagation(),
    onMouseDown: (_0x119cb5) => _0x119cb5.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: 8,
      boxSizing: "border-box",
      color: "#1f2329",
      display: "block",
      width: 254,
    },
    children: [
      (0, c.jsxs)("div", {
        style: {
          alignItems: "center",
          display: "flex",
          fontSize: 14,
          justifyContent: "space-between",
          lineHeight: "20px",
          marginBottom: 22,
          whiteSpace: "nowrap",
        },
        children: [
          (0, c.jsx)("span", {
            style: { color: "#4e5969" },
            children: _0xf4cf9c.t("docs-column-ui.menu.selectColumnCount"),
          }),
          (0, c.jsx)("span", {
            style: {
              color: "#1f2329",
              fontWeight: 500,
              minWidth: 16,
              textAlign: "right",
            },
            children: _0x20d63c,
          }),
        ],
      }),
      (0, c.jsx)("div", {
        "aria-label": _0xf4cf9c.t("docs-column-ui.menu.selectColumnCount"),
        role: "group",
        style: {
          alignItems: "stretch",
          background: "#fff",
          border: "1px\x20solid\x20#dee0e3",
          borderRadius: 2,
          boxSizing: "border-box",
          display: "flex",
          gap: 8,
          height: 158,
          padding: "18px 18px 17px",
          width: 254,
        },
        children: ae.map((_0x3f3d39) => {
          let _0x1a7623 = Math.max(2, _0x3f3d39),
            _0x23c98e = _0x3f3d39 <= _0x20d63c;
          return (0, c.jsx)(
            "button",
            {
              type: "button",
              "aria-label": _0xf4cf9c.t(
                "docs-column-ui.menu.insertColumnCount",
                String(_0x1a7623),
              ),
              onClick: () => {
                if (_0x45cac0.current) {
                  _0x45cac0.current = false;
                  return;
                }
                _0x4f69cd(_0x1a7623);
              },
              onMouseDown: (_0x4879c2) => {
                (_0x4879c2.preventDefault(),
                  _0x4879c2.stopPropagation(),
                  (_0x45cac0.current = true),
                  _0x4f69cd(_0x1a7623));
              },
              onMouseEnter: () => _0x564c5e(_0x1a7623),
              style: {
                background: "transparent",
                border: 0,
                boxSizing: "border-box",
                cursor: "pointer",
                flex: 1,
                minWidth: 0,
                padding: 0,
              },
              children: (0, c.jsx)("span", {
                style: {
                  backgroundColor: _0x23c98e ? "#8fafef" : "#edf0f4",
                  display: "block",
                  height: "100%",
                  transition: "background-color 120ms ease",
                  width: "100%",
                },
              }),
            },
            _0x3f3d39,
          );
        }),
      }),
    ],
  });
}
function C(_0x489d09) {
  return {
    id: x.id,
    commandId: x.id,
    selectionsCommandId: x.id,
    params: () => {
      var _0x5bd04e;
      return {
        columnCount: 2,
        offset:
          (_0x5bd04e = y(_0x489d09, {
            consumeContentInsertRange: true,
            snapToParagraphEnd: true,
          })) == null
            ? undefined
            : _0x5bd04e.offset,
      };
    },
    type: n.MenuItemType["BUTTON_SELECTOR"],
    icon: "GridIcon",
    title: "docs-column-ui.menu.column",
    tooltip: "docs-column-ui.menu.column",
    hidden$: u(_0x489d09),
    selections: [{ label: { name: S, hoverable: false, selectable: false } }],
  };
}
function w(_0x57c03d) {
  return {
    ...C(_0x57c03d),
    id: x.id + ".below",
    commandId: x.id,
    selectionsCommandId: x.id,
    hidden$: u(_0x57c03d),
    params: () => {
      var _0x169c11;
      return {
        offset:
          (_0x169c11 = y(_0x57c03d, {
            consumeContentInsertRange: true,
            placement: "below",
            snapToParagraphEnd: true,
          })) == null
            ? undefined
            : _0x169c11.offset,
      };
    },
  };
}
function se(_0x46e93e) {
  return {
    id: e.AddDocColumnCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "InsertDoubleIcon",
    title: "docs-column-ui.menu.addColumn",
    tooltip: "docs-column-ui.menu.addColumn",
    hidden$: d(_0x46e93e, {
      maxColumnCount: e.DOCS_COLUMN_MAX_COLUMN_COUNT - 1,
    }),
    params: () => f(_0x46e93e),
  };
}
function ce(_0x5b50ad) {
  return {
    id: e.DeleteDocColumnCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "DeleteIcon",
    title: "docs-column-ui.menu.deleteColumn",
    tooltip: "docs-column-ui.menu.deleteColumn",
    hidden$: d(_0x5b50ad, { minColumnCount: 3 }),
    params: () => p(_0x5b50ad),
  };
}
function le(_0x156d20) {
  return {
    id: e.DeleteDocColumnGroupCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "DeleteIcon",
    title: "docs-column-ui.menu.deleteColumnGroup",
    tooltip: "docs-column-ui.menu.deleteColumnGroup",
    hidden$: d(_0x156d20),
    params: () => ee(_0x156d20),
  };
}
function ue(_0x3f18c6) {
  return {
    id: e.ResizeDocColumnGroupCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "HorizontallyIcon",
    title: "docs-column-ui.menu.equalWidth",
    tooltip: "docs-column-ui.menu.equalWidth",
    hidden$: d(_0x3f18c6),
    params: () => te(_0x3f18c6),
  };
}
n.ContextMenuPosition["PARAGRAPH"];
const T = {
  [n.ContextMenuPosition["PARAGRAPH"]]: {
    [n.ContextMenuGroup["LAYOUT"]]: {
      [t.INSERT_BELLOW_MENU_ID]: {
        [x.id + ".below"]: { order: 3, menuItemFactory: w },
      },
    },
    [t.EMPTY_PARAGRAPH_MENU_ID]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [x.id]: { order: 3, menuItemFactory: C },
      },
    },
    [t.DOC_CONTENT_INSERT_MENU_ID]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [x.id + ".below"]: { order: 3, menuItemFactory: w },
      },
    },
    [t.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
      insert: { [x.id]: { order: 1, menuItemFactory: C } },
    },
    [t.DOC_PARAGRAPH_T_EDIT_MENU_ID]: {
      quickBottom: {
        [e.AddDocColumnCommand["id"]]: { order: 6, menuItemFactory: se },
        [e.DeleteDocColumnCommand["id"]]: { order: 7, menuItemFactory: ce },
        [e.DeleteDocColumnGroupCommand["id"]]: {
          order: 8,
          menuItemFactory: le,
        },
        [e.ResizeDocColumnGroupCommand["id"]]: {
          order: 9,
          menuItemFactory: ue,
        },
      },
    },
    [t.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
      insert: { [x.id + ".below"]: { order: 1, menuItemFactory: w } },
    },
    [t.DOC_TABLE_BLOCK_MENU_ID]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [t.INSERT_BELLOW_MENU_ID]: {
          [x.id + ".below"]: { order: 3, menuItemFactory: w },
        },
      },
    },
  },
};
var de = "@univerjs-pro/docs-column-ui",
  fe = "1.0.0-insiders.20260907-70fc579";
const E = {};
function D(_0x10035b, _0x2e9e9a) {
  return function (_0x2225dd, _0x18dc58) {
    _0x2e9e9a(_0x2225dd, _0x18dc58, _0x10035b);
  };
}
function O(_0x317b36, _0x3f405b, _0x3f07da, _0x7439f1) {
  var _0x1d148e = arguments.length,
    _0x530511 =
      _0x1d148e < 3
        ? _0x3f405b
        : _0x7439f1 === null
          ? (_0x7439f1 = Object.getOwnPropertyDescriptor(_0x3f405b, _0x3f07da))
          : _0x7439f1,
    _0x42a989;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x530511 = Reflect.decorate(_0x317b36, _0x3f405b, _0x3f07da, _0x7439f1);
  else {
    for (var _0x31c474 = _0x317b36.length - 1; _0x31c474 >= 0; _0x31c474--)
      (_0x42a989 = _0x317b36[_0x31c474]) &&
        (_0x530511 =
          (_0x1d148e < 3
            ? _0x42a989(_0x530511)
            : _0x1d148e > 3
              ? _0x42a989(_0x3f405b, _0x3f07da, _0x530511)
              : _0x42a989(_0x3f405b, _0x3f07da)) || _0x530511);
  }
  return (
    _0x1d148e > 3 &&
      _0x530511 &&
      Object.defineProperty(_0x3f405b, _0x3f07da, _0x530511),
    _0x530511
  );
}
let k = class extends r.Disposable {
  constructor(_0x43231a) {
    (super(), (this._componentManager = _0x43231a), this._registerComponents());
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](S, oe));
  }
};
k = O([D(0, (0, r.Inject)(n.ComponentManager))], k);
function A(_0xbb209) {
  return Math.max(_0xbb209.height, 72);
}
function j(_0x253775) {
  let _0xf2cf33 = A(_0x253775);
  return _0x253775.columns["slice"](0, -1).map((_0x132c86, _0x4a11c3) => {
    let _0x38597e = _0x253775.columns[_0x4a11c3 + 1],
      _0x46894b =
        _0x132c86.left +
        _0x132c86.width +
        (_0x38597e.left - _0x132c86.left - _0x132c86.width) / 2;
    return {
      columnGroupId: _0x253775.columnGroupId,
      separatorIndex: _0x4a11c3,
      left: _0x253775.left + _0x46894b,
      top: _0x253775.top,
      height: _0xf2cf33,
    };
  });
}
function M(_0x522e93, _0x46ec3b, _0x3a09a8) {
  let _0x339969 = (0, e.calculateResizeDragWidthRatios)({
    source: _0x522e93.columnGroupSource,
    availableWidth: _0x522e93.width,
    separatorIndex: _0x46ec3b,
    delta: _0x3a09a8,
  });
  return _0x339969
    ? { columnGroupId: _0x522e93.columnGroupId, widthRatios: _0x339969 }
    : null;
}
function N(_0x46e454, _0xc6cc92, _0x3ac93f, _0x696f2e = 12) {
  let _0x35a90d = _0x696f2e / 2,
    _0x5ca310 = null,
    _0x512887 = 1 / 0;
  for (let _0x290a31 of _0x46e454) {
    let _0x5b5adb = Math.abs(_0xc6cc92 - _0x290a31.left);
    _0x5b5adb > _0x35a90d ||
      _0x3ac93f < _0x290a31.top ||
      _0x3ac93f >= _0x290a31.top + _0x290a31.height ||
      (_0x5b5adb < _0x512887 &&
        ((_0x5ca310 = _0x290a31), (_0x512887 = _0x5b5adb)));
  }
  return _0x5ca310;
}
function pe(_0x2746e2, _0x373896) {
  return { handle: _0x2746e2, startX: _0x373896.x };
}
function P(_0x5edc7b, _0x51ae09) {
  return _0x51ae09.x - _0x5edc7b.startX;
}
const F = 0.36,
  I = 0.9;
function L(_0x81813a, _0x4905d3) {
  _0x4905d3.length !== 0 &&
    (_0x81813a.save(),
    (_0x81813a.fillStyle = "#eef1f5"),
    (_0x81813a.globalAlpha = 0.48),
    (_0x81813a.globalCompositeOperation = "multiply"),
    _0x4905d3.forEach((_0x299a1a) => {
      var _0x7ec98b;
      let _0x5037a0 = A(_0x299a1a);
      ((_0x7ec98b = _0x299a1a.columns) != null && _0x7ec98b.length
        ? _0x299a1a.columns
        : [{ left: 0, width: _0x299a1a.width }]
      ).forEach((_0xfdeea0) => {
        me(
          _0x81813a,
          _0x299a1a.left + _0xfdeea0.left,
          _0x299a1a.top,
          _0xfdeea0.width,
          _0x5037a0,
        );
      });
    }),
    _0x81813a.restore());
}
function R(_0x626fa7, _0x56881a = {}) {
  var _0x1e0ce6;
  (!_0x56881a.hoveredHandle && !_0x56881a.activeDrag) ||
    (_0x626fa7.save(),
    (_0x626fa7.fillStyle = "#1a73e8"),
    (_0x626fa7.globalAlpha = F),
    _0x56881a.hoveredHandle &&
      ((_0x626fa7.globalAlpha = I),
      z(
        _0x626fa7,
        _0x56881a.hoveredHandle["left"],
        _0x56881a.hoveredHandle["top"],
        _0x56881a.hoveredHandle["height"],
      )),
    _0x56881a.activeDrag &&
      ((_0x626fa7.globalAlpha = F),
      z(
        _0x626fa7,
        _0x56881a.activeDrag["handle"].left,
        _0x56881a.activeDrag["handle"].top,
        _0x56881a.activeDrag["handle"].height,
      ),
      (_0x626fa7.globalAlpha = I),
      z(
        _0x626fa7,
        _0x56881a.activeDrag["handle"].left + _0x56881a.activeDrag["delta"],
        _0x56881a.activeDrag["handle"].top,
        _0x56881a.activeDrag["handle"].height,
      )),
    _0x626fa7.restore(),
    (_0x1e0ce6 = _0x56881a.activeDrag) != null &&
      _0x1e0ce6.columnGroup &&
      he(
        _0x626fa7,
        _0x56881a.activeDrag["columnGroup"],
        _0x56881a.activeDrag["handle"].separatorIndex,
        _0x56881a.activeDrag["delta"],
      ));
}
function z(_0x4fa3ac, _0x57f00c, _0x49fd39, _0xa5b274) {
  _0x4fa3ac.fillRect(_0x57f00c - 2 / 2, _0x49fd39, 2, _0xa5b274);
}
function me(_0x399413, _0x12c010, _0x4a3b2, _0x32d081, _0x376b83) {
  if (!_0x399413.beginPath || !_0x399413.roundRect || !_0x399413.fill) {
    _0x399413.fillRect(_0x12c010, _0x4a3b2, _0x32d081, _0x376b83);
    return;
  }
  (_0x399413.beginPath(),
    _0x399413.roundRect(_0x12c010, _0x4a3b2, _0x32d081, _0x376b83, 8),
    _0x399413.fill());
}
function he(_0x5424ea, _0x42002e, _0x28d125, _0x4f123e) {
  if (!_0x5424ea.fillText) return;
  let _0x3a592f = ge(_0x42002e, _0x28d125, _0x4f123e),
    _0x2e6a83 = _0x3a592f.reduce(
      (_0x1826bd, _0x1b76b2) => _0x1826bd + Math.max(0, _0x1b76b2.width),
      0,
    );
  if (_0x2e6a83 <= 0) return;
  let _0x2ca2e7 = _e(
    _0x3a592f.map(
      (_0x1c817a) => (Math.max(0, _0x1c817a.width) / _0x2e6a83) * 100,
    ),
  );
  (_0x5424ea.save(),
    (_0x5424ea.font = "600 12px Arial, sans-serif"),
    (_0x5424ea.textBaseline = "middle"),
    (_0x5424ea.globalAlpha = 1),
    (_0x5424ea.globalCompositeOperation = "source-over"),
    _0x3a592f.forEach((_0x552041, _0x44c0bd) => {
      var _0x30c818;
      let _0x24601b = _0x2ca2e7[_0x44c0bd] + "%",
        _0x1034de =
          (((_0x30c818 = _0x5424ea.measureText) == null
            ? undefined
            : _0x30c818.call(_0x5424ea, _0x24601b).width) ??
            _0x24601b.length * 7) + 12,
        _0x211f3b =
          _0x42002e.left + _0x552041.left + _0x552041.width - 8 - _0x1034de,
        _0x103280 = _0x42002e.top + 4;
      ((_0x5424ea.fillStyle = "#9ca3af"),
        ve(_0x5424ea, _0x211f3b, _0x103280, _0x1034de, 22, 5),
        (_0x5424ea.fillStyle = "#ffffff"),
        _0x5424ea.fillText(_0x24601b, _0x211f3b + 6, _0x103280 + 22 / 2));
    }),
    _0x5424ea.restore());
}
function ge(_0x11efe3, _0x43d968, _0x30c8f4) {
  var _0x359c8f;
  let _0x8c4504 = (
    (_0x359c8f = _0x11efe3.columns) != null && _0x359c8f.length
      ? _0x11efe3.columns
      : [{ left: 0, width: _0x11efe3.width }]
  ).map((_0x43618f) => ({ ..._0x43618f }));
  if (_0x43d968 < 0 || _0x43d968 >= _0x8c4504.length - 1) return _0x8c4504;
  ((_0x8c4504[_0x43d968].width = Math.max(
    0,
    _0x8c4504[_0x43d968].width + _0x30c8f4,
  )),
    (_0x8c4504[_0x43d968 + 1].width = Math.max(
      0,
      _0x8c4504[_0x43d968 + 1].width - _0x30c8f4,
    )));
  for (
    let _0x545ed9 = _0x43d968 + 1;
    _0x545ed9 < _0x8c4504.length;
    _0x545ed9++
  ) {
    var _0x350694, _0x40e05d, _0x399270;
    let _0x1145ac = _0x8c4504[_0x545ed9 - 1],
      _0x1b55a2 =
        Math.max(
          0,
          ((_0x350694 = _0x11efe3.columns) == null
            ? undefined
            : _0x350694[_0x545ed9].left) ?? _0x8c4504[_0x545ed9].left,
        ) -
        Math.max(
          0,
          (((_0x40e05d = _0x11efe3.columns) == null
            ? undefined
            : _0x40e05d[_0x545ed9 - 1].left) ?? _0x1145ac.left) +
            (((_0x399270 = _0x11efe3.columns) == null
              ? undefined
              : _0x399270[_0x545ed9 - 1].width) ?? _0x1145ac.width),
        );
    _0x8c4504[_0x545ed9].left = _0x1145ac.left + _0x1145ac.width + _0x1b55a2;
  }
  return _0x8c4504;
}
function _e(_0xfb42fb) {
  let _0x2bb82c = _0xfb42fb.map((_0xd49d5c) => Math.round(_0xd49d5c)),
    _0x58bcb2 =
      100 -
      _0x2bb82c.reduce((_0x19193f, _0x5b9acf) => _0x19193f + _0x5b9acf, 0);
  return (
    _0x2bb82c.length > 0 && (_0x2bb82c[_0x2bb82c.length - 1] += _0x58bcb2),
    _0x2bb82c
  );
}
function ve(_0x2610c1, _0x23002c, _0x40c630, _0x11f6c1, _0x1506cf, _0x71988e) {
  if (!_0x2610c1.beginPath || !_0x2610c1.roundRect || !_0x2610c1.fill) {
    _0x2610c1.fillRect(_0x23002c, _0x40c630, _0x11f6c1, _0x1506cf);
    return;
  }
  (_0x2610c1.beginPath(),
    _0x2610c1.roundRect(_0x23002c, _0x40c630, _0x11f6c1, _0x1506cf, _0x71988e),
    _0x2610c1.fill());
}
function B(_0xed4ac3) {
  "@babel/helpers - typeof";
  return (
    (B =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x24163b) {
            return typeof _0x24163b;
          }
        : function (_0x394978) {
            return _0x394978 &&
              typeof Symbol == "function" &&
              _0x394978.constructor === Symbol &&
              _0x394978 !== Symbol.prototype
              ? "symbol"
              : typeof _0x394978;
          }),
    B(_0xed4ac3)
  );
}
function ye(_0x1444b3, _0x29fc64) {
  if (B(_0x1444b3) != "object" || !_0x1444b3) return _0x1444b3;
  var _0x5671fa = _0x1444b3[Symbol.toPrimitive];
  if (_0x5671fa !== undefined) {
    var _0x19e8c3 = _0x5671fa.call(_0x1444b3, _0x29fc64 || "default");
    if (B(_0x19e8c3) != "object") return _0x19e8c3;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x29fc64 === "string" ? String : Number)(_0x1444b3);
}
function be(_0x4be646) {
  var _0x13c1ee = ye(_0x4be646, "string");
  return B(_0x13c1ee) == "symbol" ? _0x13c1ee : _0x13c1ee + "";
}
function V(_0x2972ca, _0x2aeffa, _0x13e041) {
  return (
    (_0x2aeffa = be(_0x2aeffa)) in _0x2972ca
      ? Object.defineProperty(_0x2972ca, _0x2aeffa, {
          value: _0x13e041,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2972ca[_0x2aeffa] = _0x13e041),
    _0x2972ca
  );
}
let H = class extends r.Disposable {
  constructor(
    _0x11aa4f,
    _0x5e474c,
    _0x2ac2a,
    _0x4372f2,
    _0x1f43e8,
    _0x5b01ec,
    _0x43d288,
  ) {
    (super(),
      (this._context = _0x11aa4f),
      (this._docSkeletonManagerService = _0x5e474c),
      (this._commandService = _0x2ac2a),
      (this._univerInstanceService = _0x4372f2),
      (this._docSelectionManagerService = _0x1f43e8),
      (this._docParagraphMenuService = _0x5b01ec),
      (this._permissionService = _0x43d288),
      V(this, "_resizeHandles", []),
      V(this, "_columnGroups", new Map()),
      V(this, "_resizeDragState", null),
      V(this, "_resizeDragDelta", 0),
      V(this, "_hoveredResizeHandle", null),
      V(this, "_hoveredColumnGroupId", null),
      V(this, "_canvasPointerEventsInitialized", false),
      V(this, "_canvasPointerEventsRetryCount", 0),
      !(0, r.isInternalEditorID)(this._context["unitId"]) &&
        (this.disposeWithMe(
          this._docSkeletonManagerService["currentSkeleton$"].subscribe(
            (_0x571552) => {
              (this._refreshColumnResizeState(_0x571552 ?? undefined, true),
                this._makeDirty());
            },
          ),
        ),
        this.disposeWithMe(
          this._docSkeletonManagerService["currentSkeleton$"]
            .pipe(
              (0, o.switchMap)(
                (_0x50ce06) =>
                  (_0x50ce06 == null ? undefined : _0x50ce06.dirty$) ?? o.EMPTY,
              ),
            )
            .subscribe(() => {
              (this._refreshColumnResizeState(), this._makeDirty());
            }),
        ),
        this.disposeWithMe(
          this._docSelectionManagerService["textSelection$"].subscribe(
            ({ unitId: _0x1e9591 }) => {
              _0x1e9591 === this._context["unitId"] &&
                (this._refreshColumnResizeState(), this._makeDirty());
            },
          ),
        ),
        this.disposeWithMe(
          this._permissionService["permissionPointUpdate$"].subscribe(() => {
            (this._cancelResizeInteraction(),
              this._refreshColumnResizeState(),
              this._setDefaultCursor(),
              this._makeDirty());
          }),
        ),
        this._initPointerEvents(),
        this._initCanvasRender()));
  }
  getResizeHandles() {
    return this._resizeHandles;
  }
  async resizeColumnFromHandle(_0x482c26, _0x21259c) {
    if (!this._canEditColumnGroup(_0x482c26.columnGroupId)) return false;
    let _0x122312 = this._columnGroups["get"](_0x482c26.columnGroupId);
    if (!_0x122312) return false;
    let _0xff6939 = M(_0x122312, _0x482c26.separatorIndex, _0x21259c);
    return _0xff6939
      ? !!(await this._commandService["executeCommand"](
          e.ResizeDocColumnGroupCommand["id"],
          _0xff6939,
        ))
      : false;
  }
  startResizeDragAtPoint(_0x50d9ab) {
    let _0x134c0f = N(this._resizeHandles, _0x50d9ab.x, _0x50d9ab.y);
    return _0x134c0f
      ? ((this._resizeDragState = pe(_0x134c0f, _0x50d9ab)),
        (this._resizeDragDelta = 0),
        true)
      : false;
  }
  async releaseResizeDragAtPoint(_0xee9c0b, _0x2d17f7) {
    let _0x46194d = this._resizeDragState;
    return (
      (this._resizeDragState = null),
      (this._resizeDragDelta = 0),
      !_0x46194d || !_0x2d17f7
        ? false
        : this.resizeColumnFromHandle(_0x46194d.handle, P(_0x46194d, _0xee9c0b))
    );
  }
  _initPointerEvents() {
    var _0x39d02a, _0x44f198;
    let _0x331222 = Te(this._context);
    (this._initCanvasPointerEvents(),
      !(
        !(_0x331222 != null && _0x331222.onPointerDown$) ||
        !_0x331222.onPointerUp$
      ) &&
        (this.disposeWithMe(
          _0x331222.onPointerDown$["subscribeEvent"]({
            next: ([_0x45b65e, _0x3bf99b]) => {
              var _0x103b4c, _0x234cef;
              let _0x27dfee = K(
                _0x45b65e.offsetX,
                _0x45b65e.offsetY,
                this._context["scene"],
              );
              this.startResizeDragAtPoint(_0x27dfee) &&
                ((this._hoveredResizeHandle =
                  ((_0x103b4c = this._resizeDragState) == null
                    ? undefined
                    : _0x103b4c.handle) ?? null),
                (this._hoveredColumnGroupId =
                  ((_0x234cef = this._resizeDragState) == null
                    ? undefined
                    : _0x234cef.handle["columnGroupId"]) ?? null),
                this._setResizeCursor(),
                this._consumePointerEvent(_0x45b65e, _0x3bf99b),
                this._makeDirty());
            },
          }),
        ),
        this.disposeWithMe(
          ((_0x39d02a = _0x331222.onPointerMove$) == null
            ? undefined
            : _0x39d02a.subscribeEvent({
                next: ([_0x567334, _0x6becd9]) => {
                  if (!this._resizeDragState) {
                    this._updateHoverAtPoint(
                      K(
                        _0x567334.offsetX,
                        _0x567334.offsetY,
                        this._context["scene"],
                      ),
                    );
                    return;
                  }
                  let _0x7bab20 = K(
                    _0x567334.offsetX,
                    _0x567334.offsetY,
                    this._context["scene"],
                  );
                  ((this._resizeDragDelta = P(
                    this._resizeDragState,
                    _0x7bab20,
                  )),
                    this._setResizeCursor(),
                    this._consumePointerEvent(_0x567334, _0x6becd9),
                    this._makeDirty());
                },
              })) ?? { dispose: () => undefined },
        ),
        this.disposeWithMe(
          ((_0x44f198 = _0x331222.onPointerLeave$) == null
            ? undefined
            : _0x44f198.subscribeEvent({
                next: ([_0x4d42a0, _0x14d529]) => {
                  if (!(
                    !this._resizeDragState &&
                    !this._hoveredResizeHandle &&
                    !this._hoveredColumnGroupId
                  )) {
                    if (
                      !this._resizeDragState &&
                      this._retainActiveColumnHoverOnLeave()
                    ) {
                      (this._setDefaultCursor(),
                        this._consumePointerEvent(_0x4d42a0, _0x14d529),
                        this._makeDirty());
                      return;
                    }
                    (this._cancelResizeInteraction(),
                      this._setDefaultCursor(),
                      this._consumePointerEvent(_0x4d42a0, _0x14d529),
                      this._makeDirty());
                  }
                },
              })) ?? { dispose: () => undefined },
        ),
        this.disposeWithMe(
          _0x331222.onPointerUp$["subscribeEvent"]({
            next: ([_0x456cef, _0x4497cd]) => {
              if (!this._resizeDragState) return;
              let _0x1d815b = K(
                _0x456cef.offsetX,
                _0x456cef.offsetY,
                this._context["scene"],
              );
              (this.releaseResizeDragAtPoint(_0x1d815b, true),
                this._consumePointerEvent(_0x456cef, _0x4497cd),
                this._makeDirty());
            },
          }),
        )));
  }
  _initCanvasPointerEvents() {
    if (this._canvasPointerEventsInitialized) return;
    let _0x1b5281 = G(this._context);
    if (
      !(_0x1b5281 != null && _0x1b5281.addEventListener) ||
      !_0x1b5281.removeEventListener
    ) {
      this._retryInitCanvasPointerEvents();
      return;
    }
    this._canvasPointerEventsInitialized = true;
    let _0x3572c2 = (_0x2684e4) => {
        this._resizeDragState ||
          this._updateHoverAtPoint(
            K(_0x2684e4.offsetX, _0x2684e4.offsetY, this._context["scene"]),
          );
      },
      _0x4c407d = (_0x38530c) => {
        let _0x26d2eb = q(_0x38530c, _0x1b5281, this._context["scene"]);
        if (_0x26d2eb) {
          if (this._resizeDragState) {
            ((this._resizeDragDelta = P(this._resizeDragState, _0x26d2eb)),
              this._setResizeCursor(),
              J(_0x38530c),
              this._makeDirty());
            return;
          }
          this._updateHoverAtPoint(
            _0x26d2eb,
            this._resolveActiveParagraphMenuColumnGroupId() != null,
          );
        }
      },
      _0x5e07a5 = (_0x1bd89d) => {
        var _0x224284, _0x3d79c8;
        let _0x3edac0 = K(
          _0x1bd89d.offsetX,
          _0x1bd89d.offsetY,
          this._context["scene"],
        );
        this.startResizeDragAtPoint(_0x3edac0) &&
          ((this._hoveredResizeHandle =
            ((_0x224284 = this._resizeDragState) == null
              ? undefined
              : _0x224284.handle) ?? null),
          (this._hoveredColumnGroupId =
            ((_0x3d79c8 = this._resizeDragState) == null
              ? undefined
              : _0x3d79c8.handle["columnGroupId"]) ?? null),
          this._setResizeCursor(),
          J(_0x1bd89d),
          this._makeDirty());
      },
      _0x36f777 = (_0x5e79de) => {
        if (!this._resizeDragState) return;
        let _0x3265f6 = q(_0x5e79de, _0x1b5281, this._context["scene"]);
        if (!_0x3265f6) {
          (this._cancelResizeInteraction(),
            this._setDefaultCursor(),
            this._makeDirty());
          return;
        }
        (this.releaseResizeDragAtPoint(_0x3265f6, true),
          J(_0x5e79de),
          this._makeDirty());
      },
      _0x4f8a52 = () => {
        if (
          !this._resizeDragState &&
          !(!this._hoveredResizeHandle && !this._hoveredColumnGroupId)
        ) {
          if (this._retainActiveColumnHoverOnLeave()) {
            (this._setDefaultCursor(), this._makeDirty());
            return;
          }
          ((this._hoveredResizeHandle = null),
            (this._hoveredColumnGroupId = null),
            this._setDefaultCursor(),
            this._makeDirty());
        }
      },
      _0x29fbcc = _0x1b5281.ownerDocument,
      _0x3063d7 = _0x29fbcc == null ? undefined : _0x29fbcc.defaultView;
    (_0x1b5281.addEventListener("pointerdown", _0x5e07a5, true),
      _0x1b5281.addEventListener("mousedown", _0x5e07a5, true),
      _0x1b5281.addEventListener("pointermove", _0x3572c2),
      _0x1b5281.addEventListener("mousemove", _0x3572c2),
      _0x1b5281.addEventListener("pointerleave", _0x4f8a52),
      _0x1b5281.addEventListener("mouseleave", _0x4f8a52),
      _0x29fbcc == null || _0x29fbcc.addEventListener("pointermove", _0x4c407d),
      _0x29fbcc == null || _0x29fbcc.addEventListener("mousemove", _0x4c407d),
      _0x29fbcc == null || _0x29fbcc.addEventListener("pointerup", _0x36f777),
      _0x29fbcc == null || _0x29fbcc.addEventListener("mouseup", _0x36f777),
      _0x3063d7 == null ||
        _0x3063d7.addEventListener("pointermove", _0x4c407d, true),
      _0x3063d7 == null ||
        _0x3063d7.addEventListener("mousemove", _0x4c407d, true),
      _0x3063d7 == null ||
        _0x3063d7.addEventListener("pointerup", _0x36f777, true),
      _0x3063d7 == null ||
        _0x3063d7.addEventListener("mouseup", _0x36f777, true),
      this.disposeWithMe({
        dispose: () => {
          var _0x3b86fc, _0x44cc41, _0x4165ea, _0x4ecfa9, _0xc9f6e6, _0x44a5af;
          ((_0x3b86fc = _0x1b5281.removeEventListener) == null ||
            _0x3b86fc.call(_0x1b5281, "pointerdown", _0x5e07a5, true),
            (_0x44cc41 = _0x1b5281.removeEventListener) == null ||
              _0x44cc41.call(_0x1b5281, "mousedown", _0x5e07a5, true),
            (_0x4165ea = _0x1b5281.removeEventListener) == null ||
              _0x4165ea.call(_0x1b5281, "pointermove", _0x3572c2),
            (_0x4ecfa9 = _0x1b5281.removeEventListener) == null ||
              _0x4ecfa9.call(_0x1b5281, "mousemove", _0x3572c2),
            (_0xc9f6e6 = _0x1b5281.removeEventListener) == null ||
              _0xc9f6e6.call(_0x1b5281, "pointerleave", _0x4f8a52),
            (_0x44a5af = _0x1b5281.removeEventListener) == null ||
              _0x44a5af.call(_0x1b5281, "mouseleave", _0x4f8a52),
            _0x29fbcc == null ||
              _0x29fbcc.removeEventListener("pointermove", _0x4c407d),
            _0x29fbcc == null ||
              _0x29fbcc.removeEventListener("mousemove", _0x4c407d),
            _0x29fbcc == null ||
              _0x29fbcc.removeEventListener("pointerup", _0x36f777),
            _0x29fbcc == null ||
              _0x29fbcc.removeEventListener("mouseup", _0x36f777),
            _0x3063d7 == null ||
              _0x3063d7.removeEventListener("pointermove", _0x4c407d, true),
            _0x3063d7 == null ||
              _0x3063d7.removeEventListener("mousemove", _0x4c407d, true),
            _0x3063d7 == null ||
              _0x3063d7.removeEventListener("pointerup", _0x36f777, true),
            _0x3063d7 == null ||
              _0x3063d7.removeEventListener("mouseup", _0x36f777, true));
        },
      }));
  }
  _retryInitCanvasPointerEvents() {
    if (this._canvasPointerEventsRetryCount >= 10 || typeof window > "u")
      return;
    this._canvasPointerEventsRetryCount += 1;
    let _0x4d4ef1 = window.setTimeout(
      () => this._initCanvasPointerEvents(),
      100,
    );
    this.disposeWithMe({ dispose: () => window.clearTimeout(_0x4d4ef1) });
  }
  _updateHoverAtPoint(_0x3a26a0, _0x10ae90 = false) {
    var _0x4401e3;
    this._refreshColumnResizeState();
    let _0x598f66 = N(this._resizeHandles, _0x3a26a0.x, _0x3a26a0.y),
      _0x2398f9 =
        (_0x598f66 == null ? undefined : _0x598f66.columnGroupId) ??
        ((_0x4401e3 = De(this._columnGroups["values"](), _0x3a26a0)) == null
          ? undefined
          : _0x4401e3.columnGroupId) ??
        (_0x10ae90 ? this._resolveActiveColumnGroupId() : null);
    (_0x598f66 !== this._hoveredResizeHandle ||
      _0x2398f9 !== this._hoveredColumnGroupId) &&
      ((this._hoveredResizeHandle = _0x598f66),
      (this._hoveredColumnGroupId = _0x2398f9),
      _0x598f66 ? this._setResizeCursor() : this._setDefaultCursor(),
      this._makeDirty());
  }
  _refreshColumnResizeState(
    _0x5a6e28 = this._docSkeletonManagerService["getSkeleton"](),
    _0x17a4d2 = false,
  ) {
    if (_0x5a6e28 == null && !_0x17a4d2) return;
    let _0x29fb25 = xe(_0x5a6e28, this._getDocumentPageMarginFallback());
    ((this._columnGroups = new Map(
      [..._0x29fb25.columnGroups].filter(([_0xbd47e7]) =>
        this._canEditColumnGroup(_0xbd47e7),
      ),
    )),
      (this._resizeHandles = _0x29fb25.handles["filter"]((_0xbeb199) =>
        this._columnGroups["has"](_0xbeb199.columnGroupId),
      )),
      this._hoveredColumnGroupId &&
        !this._columnGroups["has"](this._hoveredColumnGroupId) &&
        (this._hoveredColumnGroupId = null),
      this._hoveredResizeHandle &&
        !this._columnGroups["has"](
          this._hoveredResizeHandle["columnGroupId"],
        ) &&
        ((this._hoveredResizeHandle = null), this._setDefaultCursor()),
      this._resizeDragState &&
        !this._columnGroups["has"](
          this._resizeDragState["handle"].columnGroupId,
        ) &&
        ((this._resizeDragState = null),
        (this._resizeDragDelta = 0),
        this._setDefaultCursor()));
  }
  _initCanvasRender() {
    let _0xc0cd24 = this._context["scene"];
    _0xc0cd24 != null &&
      _0xc0cd24.afterRender$ &&
      this.disposeWithMe(
        _0xc0cd24.afterRender$["subscribe"]((_0xd1187e) => {
          var _0x529555, _0x4e4c90;
          let _0x1a10a7 =
            _0xd1187e == null || (_0x529555 = _0xd1187e.getContext) == null
              ? undefined
              : _0x529555.call(_0xd1187e);
          if (!_0x1a10a7) return;
          let _0x4d841f = this._context["scene"],
            _0x2da615 = [
              ...new Set(
                [
                  (_0x4e4c90 = this._resizeDragState) == null
                    ? undefined
                    : _0x4e4c90.handle["columnGroupId"],
                  this._hoveredColumnGroupId,
                  this._resolveActiveColumnGroupId(),
                ].filter((_0x17d65d) => _0x17d65d != null),
              ),
            ]
              .map((_0x53ae15) => this._columnGroups["get"](_0x53ae15))
              .filter((_0x334316) => _0x334316 != null),
            _0x5ab5b0 = this._resizeDragState
              ? this._columnGroups["get"](
                  this._resizeDragState["handle"].columnGroupId,
                )
              : null;
          (L(
            _0x1a10a7,
            _0x2da615.map((_0xbf3d9) => X(_0xbf3d9, _0x4d841f)),
          ),
            R(_0x1a10a7, {
              activeDrag: this._resizeDragState
                ? {
                    columnGroup: _0x5ab5b0 ? X(_0x5ab5b0, _0x4d841f) : null,
                    delta: this._resizeDragDelta * Q(_0x4d841f).scaleX,
                    handle: Z(this._resizeDragState["handle"], _0x4d841f),
                  }
                : null,
              hoveredHandle: this._hoveredResizeHandle
                ? Z(this._hoveredResizeHandle, _0x4d841f)
                : null,
            }));
        }),
      );
  }
  _setResizeCursor() {
    var _0x13b1a8, _0x5ee4e7;
    (_0x13b1a8 = (_0x5ee4e7 = this._context["scene"]).setCursor) == null ||
      _0x13b1a8.call(_0x5ee4e7, a.CURSOR_TYPE["EAST_WEST_RESIZE"]);
  }
  _setDefaultCursor() {
    var _0x2ba5f3, _0x33c06b;
    (_0x2ba5f3 = (_0x33c06b = this._context["scene"]).setCursor) == null ||
      _0x2ba5f3.call(_0x33c06b, a.CURSOR_TYPE["DEFAULT"]);
  }
  _cancelResizeInteraction() {
    ((this._resizeDragState = null),
      (this._resizeDragDelta = 0),
      (this._hoveredResizeHandle = null),
      (this._hoveredColumnGroupId = null));
  }
  _canEditColumnGroup(_0x2499f8) {
    return (0, i.canEditDocumentTargets)(
      this._permissionService,
      this._context["unitId"],
      [
        ...(0, i.getDocumentEntityParentPermissionObjectIds)(
          this._context["unit"],
          "",
          "column-group",
          _0x2499f8,
        ),
        (0, i.getDocumentEntityPermissionObjectId)(
          "",
          "column-group",
          _0x2499f8,
        ),
      ],
    );
  }
  _retainActiveColumnHoverOnLeave() {
    return this._resolveActiveColumnGroupId()
      ? ((this._resizeDragState = null),
        (this._resizeDragDelta = 0),
        (this._hoveredResizeHandle = null),
        (this._hoveredColumnGroupId = null),
        true)
      : false;
  }
  _resolveActiveColumnGroupId() {
    return (
      this._resolveActiveParagraphMenuColumnGroupId() ??
      this._resolveSelectionColumnGroupId()
    );
  }
  _resolveActiveParagraphMenuColumnGroupId() {
    let _0x46871c = this._docParagraphMenuService["activeTarget"];
    return _0x46871c
      ? (this._resolveColumnGroupIdByRange(_0x46871c.menuRange) ??
          this._resolveColumnGroupIdByRange(_0x46871c.moveRange))
      : null;
  }
  _resolveSelectionColumnGroupId() {
    let _0x36a5d2 = this._docSelectionManagerService["getActiveTextRange"]();
    return !_0x36a5d2 || _0x36a5d2.collapsed === false
      ? null
      : this._resolveColumnGroupIdByOffset(_0x36a5d2.startOffset);
  }
  _resolveColumnGroupIdByRange(_0x4d0351) {
    return [
      _0x4d0351.startOffset,
      _0x4d0351.startOffset + 1,
      _0x4d0351.endOffset - 1,
      _0x4d0351.endOffset,
    ].reduce(
      (_0x4529c8, _0x5c621a) =>
        _0x4529c8 ?? this._resolveColumnGroupIdByOffset(_0x5c621a),
      null,
    );
  }
  _resolveColumnGroupIdByOffset(_0xb02771) {
    for (let _0x18ddf1 of this._columnGroups["values"]())
      if (
        !(
          typeof _0x18ddf1.st != "number" ||
          typeof _0x18ddf1.ed != "number" ||
          _0xb02771 < _0x18ddf1.st ||
          _0xb02771 > _0x18ddf1.ed
        ) &&
        _0x18ddf1.columns["find"](
          (_0xedf716) =>
            typeof _0xedf716.st == "number" &&
            typeof _0xedf716.ed == "number" &&
            _0xb02771 >= _0xedf716.st &&
            _0xb02771 <= _0xedf716.ed,
        )
      )
        return _0x18ddf1.columnGroupId;
    return null;
  }
  _makeDirty() {
    var _0x1816e6, _0x4cb0ac, _0x2fe234, _0x2aaaad;
    ((_0x1816e6 = this._context["mainComponent"]) == null ||
      (_0x4cb0ac = _0x1816e6.makeDirty) == null ||
      _0x4cb0ac.call(_0x1816e6, true),
      (_0x2fe234 = (_0x2aaaad = this._context["scene"]).makeDirty) == null ||
        _0x2fe234.call(_0x2aaaad));
  }
  _consumePointerEvent(_0x2e0326, _0x178957) {
    var _0x588ed9;
    (_0x178957.stopPropagation(),
      (_0x178957.skipNextObservers = true),
      (_0x588ed9 = _0x2e0326.preventDefault) == null ||
        _0x588ed9.call(_0x2e0326));
  }
  _getDocumentPageMarginFallback() {
    var _0x54a9ea, _0x175cbc, _0x43508c;
    let _0x4b99b3 =
        this._univerInstanceService["getUnit"](
          this._context["unitId"],
          r.UniverInstanceType["UNIVER_DOC"],
        ) ??
        this._univerInstanceService["getCurrentUnitOfType"](
          r.UniverInstanceType["UNIVER_DOC"],
        ),
      _0x3c95a8 =
        _0x4b99b3 == null || (_0x54a9ea = _0x4b99b3.getSnapshot) == null
          ? undefined
          : _0x54a9ea.call(_0x4b99b3).documentStyle,
      _0x523729 = this._context["mainComponent"],
      _0x48b01b =
        _0x523729 == null || (_0x175cbc = _0x523729.getOffsetConfig) == null
          ? undefined
          : _0x175cbc.call(_0x523729),
      _0x224357 =
        W(_0x523729 == null ? undefined : _0x523729.width) ?? Ee(this._context),
      _0x2e3acb =
        _0x3c95a8 == null || (_0x43508c = _0x3c95a8.pageSize) == null
          ? undefined
          : _0x43508c.width,
      _0x2ee3c4 =
        (_0x48b01b == null ? undefined : _0x48b01b.docsLeft) ??
        (_0x224357 != null && _0x2e3acb != null && _0x224357 > _0x2e3acb
          ? (_0x224357 - _0x2e3acb) / 2
          : undefined),
      _0x411af0 =
        (_0x48b01b == null ? undefined : _0x48b01b.docsTop) ??
        (_0x48b01b == null ? undefined : _0x48b01b.pageMarginTop) ??
        (_0x523729 == null ? undefined : _0x523729.pageMarginTop) ??
        (_0x2ee3c4 == null ? undefined : 20);
    return {
      marginLeft: _0x3c95a8 == null ? undefined : _0x3c95a8.marginLeft,
      marginTop: _0x3c95a8 == null ? undefined : _0x3c95a8.marginTop,
      pageLeft: _0x2ee3c4,
      pageTop: _0x411af0,
    };
  }
};
H = O(
  [
    D(1, (0, r.Inject)(i.DocSkeletonManagerService)),
    D(2, r.ICommandService),
    D(3, r.IUniverInstanceService),
    D(4, (0, r.Inject)(i.DocSelectionManagerService)),
    D(5, (0, r.Inject)(t.DocParagraphMenuService)),
    D(6, r.IPermissionService),
  ],
  H,
);
function xe(_0x483938, _0xc09302 = {}) {
  var _0x8181b9;
  let _0x8b6c1d =
      (_0x483938 == null || (_0x8181b9 = _0x483938.getSkeletonData()) == null
        ? undefined
        : _0x8181b9.pages) ?? [],
    _0xcfadec = new Map(),
    _0x11ef1b = [];
  for (let _0x2d7299 of _0x8b6c1d) {
    var _0x1ec167;
    for (let _0x5c5464 of ((_0x1ec167 = _0x2d7299.skeColumnGroups) == null
      ? undefined
      : _0x1ec167.values()) ?? []) {
      let _0x5b2808 = U(_0x5c5464, _0x2d7299, _0xc09302);
      (_0xcfadec.set(_0x5b2808.columnGroupId, _0x5b2808),
        _0x11ef1b.push(...j(_0x5b2808)));
    }
  }
  return { columnGroups: _0xcfadec, handles: _0x11ef1b };
}
function U(_0x3b8a60, _0x5c6438, _0x1766d8) {
  var _0x3a4da5;
  let _0x1d589b = Se(_0x3b8a60, _0x5c6438),
    _0x352b74 =
      _0x1d589b.marginLeft ??
      _0x1766d8.marginLeft ??
      we(_0x1d589b.pageWidth, _0x3b8a60.width),
    _0x39a04f =
      _0x1d589b.marginTop ??
      _0x1d589b.originMarginTop ??
      _0x1766d8.marginTop ??
      (_0x1d589b.pageWidth == null ? 0 : 20),
    _0x48845c =
      (_0x1766d8.pageLeft ?? Ce(_0x1d589b.parent) ?? _0x1d589b.left ?? 0) +
      _0x352b74,
    _0x1a13f6 =
      (_0x1766d8.pageTop ??
        ((_0x3a4da5 = _0x1d589b.parent) == null ? undefined : _0x3a4da5.top) ??
        0) + _0x39a04f;
  return {
    ..._0x3b8a60,
    left: _0x3b8a60.left + _0x48845c,
    top: _0x3b8a60.top + _0x1a13f6,
  };
}
function Se(_0x9b8eda, _0x4f2040) {
  var _0x567818;
  let _0x31cb41 = _0x9b8eda.parent,
    _0x51629a =
      (_0x567818 = _0x9b8eda.columns[0]) == null ? undefined : _0x567818.page;
  return {
    left:
      (_0x31cb41 == null ? undefined : _0x31cb41.left) ??
      (_0x51629a == null ? undefined : _0x51629a.left) ??
      _0x4f2040.left,
    marginLeft:
      (_0x31cb41 == null ? undefined : _0x31cb41.marginLeft) ??
      (_0x51629a == null ? undefined : _0x51629a.marginLeft) ??
      _0x4f2040.marginLeft,
    marginTop:
      (_0x31cb41 == null ? undefined : _0x31cb41.marginTop) ??
      (_0x51629a == null ? undefined : _0x51629a.marginTop) ??
      _0x4f2040.marginTop,
    originMarginTop:
      (_0x31cb41 == null ? undefined : _0x31cb41.originMarginTop) ??
      (_0x51629a == null ? undefined : _0x51629a.originMarginTop) ??
      _0x4f2040.originMarginTop,
    pageWidth:
      (_0x31cb41 == null ? undefined : _0x31cb41.pageWidth) ??
      (_0x51629a == null ? undefined : _0x51629a.pageWidth) ??
      _0x4f2040.pageWidth,
    parent:
      (_0x31cb41 == null ? undefined : _0x31cb41.parent) ??
      (_0x51629a == null ? undefined : _0x51629a.parent) ??
      _0x4f2040.parent,
  };
}
function Ce(_0x4c4d2b) {
  return _0x4c4d2b && "left" in _0x4c4d2b ? _0x4c4d2b.left : undefined;
}
function we(_0x554be9, _0x113a0d) {
  return _0x554be9 == null ||
    !Number.isFinite(_0x554be9) ||
    _0x554be9 <= _0x113a0d
    ? 0
    : (_0x554be9 - _0x113a0d) / 2;
}
function W(_0x3a17e3) {
  return _0x3a17e3 != null && Number.isFinite(_0x3a17e3) && _0x3a17e3 > 0
    ? _0x3a17e3
    : undefined;
}
function Te(_0x4ed0bb) {
  let { scene: _0x259389, mainComponent: _0x29bee0 } = _0x4ed0bb;
  return (_0x259389 != null && _0x259389.onPointerDown$) ||
    (_0x259389 != null && _0x259389.onPointerMove$) ||
    (_0x259389 != null && _0x259389.onPointerUp$)
    ? _0x259389
    : (_0x29bee0 ?? _0x259389);
}
function G(_0x3514fe) {
  var _0x6c0c61, _0x147998;
  return (
    ((_0x6c0c61 = _0x3514fe.engine) == null ||
    (_0x147998 = _0x6c0c61.getCanvasElement) == null
      ? undefined
      : _0x147998.call(_0x6c0c61)) ||
    (typeof document > "u" ? null : document.querySelector("canvas"))
  );
}
function Ee(_0x32bcc7) {
  var _0x59ec4a;
  let _0x281fcc = G(_0x32bcc7);
  return W(
    _0x281fcc == null || (_0x59ec4a = _0x281fcc.getBoundingClientRect) == null
      ? undefined
      : _0x59ec4a.call(_0x281fcc).width,
  );
}
function K(_0x4bfe28, _0x2419dd, _0x486102) {
  var _0xfe3e1b, _0x5c55da;
  let _0x180cba =
      ((_0xfe3e1b = _0x486102.getAncestorScale) == null
        ? undefined
        : _0xfe3e1b.call(_0x486102)) ?? {},
    _0x4141a4 = _0x180cba.scaleX || 1,
    _0x4447e6 = _0x180cba.scaleY || 1,
    _0x74c4d0 =
      (_0x5c55da = _0x486102.getViewport) == null
        ? undefined
        : _0x5c55da.call(_0x486102, t.VIEWPORT_KEY["VIEW_MAIN"]);
  return _0x74c4d0
    ? {
        x: _0x4bfe28 / _0x4141a4 + (_0x74c4d0.viewportScrollX ?? 0),
        y: _0x2419dd / _0x4447e6 + (_0x74c4d0.viewportScrollY ?? 0),
      }
    : { x: _0x4bfe28 / _0x4141a4, y: _0x2419dd / _0x4447e6 };
}
function q(_0x5ae01d, _0x307cbe, _0x5b83c1) {
  var _0xebbb39;
  let _0x10269b =
    (_0xebbb39 = _0x307cbe.getBoundingClientRect) == null
      ? undefined
      : _0xebbb39.call(_0x307cbe);
  return _0x10269b
    ? K(
        _0x5ae01d.clientX - (_0x10269b.left ?? 0),
        _0x5ae01d.clientY - (_0x10269b.top ?? 0),
        _0x5b83c1,
      )
    : null;
}
function J(_0x1a7683) {
  var _0x19d98f, _0x393ff4, _0x10fb10;
  ((_0x19d98f = _0x1a7683.preventDefault) == null || _0x19d98f.call(_0x1a7683),
    (_0x393ff4 = _0x1a7683.stopPropagation) == null ||
      _0x393ff4.call(_0x1a7683),
    (_0x10fb10 = _0x1a7683.stopImmediatePropagation) == null ||
      _0x10fb10.call(_0x1a7683));
}
function De(_0x13410e, _0x440b9c) {
  for (let _0x29b6df of _0x13410e) {
    let _0x50d554 = A(_0x29b6df);
    if (
      _0x440b9c.y >= _0x29b6df.top &&
      _0x440b9c.y <= _0x29b6df.top + _0x50d554 &&
      _0x29b6df.columns["some"]((_0x5eaa58) => {
        let _0x1406a3 = _0x29b6df.left + _0x5eaa58.left,
          _0x3ad595 = _0x1406a3 + _0x5eaa58.width;
        return _0x440b9c.x >= _0x1406a3 && _0x440b9c.x <= _0x3ad595;
      })
    )
      return _0x29b6df;
  }
  return null;
}
function Y(_0x118a50, _0x1926c0, _0x15f59f) {
  var _0x5f5299;
  let { scaleX: _0x435d03, scaleY: _0x184820 } = Q(_0x15f59f),
    _0x145ad8 =
      (_0x5f5299 = _0x15f59f.getViewport) == null
        ? undefined
        : _0x5f5299.call(_0x15f59f, t.VIEWPORT_KEY["VIEW_MAIN"]);
  return _0x145ad8
    ? {
        x: (_0x118a50 - (_0x145ad8.viewportScrollX ?? 0)) * _0x435d03,
        y: (_0x1926c0 - (_0x145ad8.viewportScrollY ?? 0)) * _0x184820,
      }
    : { x: _0x118a50 * _0x435d03, y: _0x1926c0 * _0x184820 };
}
function X(_0x21c538, _0x5109c1) {
  let _0xae8605 = Y(_0x21c538.left, _0x21c538.top, _0x5109c1),
    { scaleX: _0x2f29d6, scaleY: _0x2a0997 } = Q(_0x5109c1);
  return {
    ..._0x21c538,
    columns: _0x21c538.columns["map"]((_0x55fe67) => ({
      ..._0x55fe67,
      left: _0x55fe67.left * _0x2f29d6,
      width: _0x55fe67.width * _0x2f29d6,
    })),
    height: A(_0x21c538) * _0x2a0997,
    left: _0xae8605.x,
    top: _0xae8605.y,
    width: _0x21c538.width * _0x2f29d6,
  };
}
function Z(_0x5a32e7, _0x22fa77) {
  let _0x356839 = Y(_0x5a32e7.left, _0x5a32e7.top, _0x22fa77),
    { scaleY: _0x2968d5 } = Q(_0x22fa77);
  return {
    ..._0x5a32e7,
    height: _0x5a32e7.height * _0x2968d5,
    left: _0x356839.x,
    top: _0x356839.y,
  };
}
function Q(_0x5f036f) {
  var _0x3e0e6b;
  let _0x43fd78 =
    ((_0x3e0e6b = _0x5f036f.getAncestorScale) == null
      ? undefined
      : _0x3e0e6b.call(_0x5f036f)) ?? {};
  return { scaleX: _0x43fd78.scaleX || 1, scaleY: _0x43fd78.scaleY || 1 };
}
let $ = class extends r.Plugin {
  constructor(
    _0xf42f51 = E,
    _0x1a5fe6,
    _0x2e5273,
    _0x2a646f,
    _0x152f18,
    _0x5a5486,
  ) {
    (super(),
      (this._config = _0xf42f51),
      (this._injector = _0x1a5fe6),
      (this._configService = _0x2e5273),
      (this._commandService = _0x2a646f),
      (this._menuManagerService = _0x152f18),
      (this._renderManagerService = _0x5a5486));
    let { ..._0x25a7f8 } = (0, r.merge)({}, E, this._config);
    this._configService["setConfig"]("docs-column-ui.config", _0x25a7f8);
  }
  onStarting() {
    (this._injector["add"]([k]),
      this._injector["get"](k),
      [x].forEach((_0x3c463e) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x3c463e)),
      ),
      this._menuManagerService["mergeMenu"](T));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        r.UniverInstanceType["UNIVER_DOC"],
        [H],
      ),
    );
  }
};
(V($, "pluginName", "DOCS_COLUMN_UI_PLUGIN"),
  V($, "packageName", de),
  V($, "version", fe),
  V($, "type", r.UniverInstanceType["UNIVER_DOC"]),
  ($ = O(
    [
      (0, r.DependentOn)(
        l.UniverLicensePlugin,
        i.UniverDocsPlugin,
        a.UniverRenderEnginePlugin,
        e.UniverDocsColumnPlugin,
        t.UniverDocsUIPlugin,
      ),
      D(1, (0, r.Inject)(r.Injector)),
      D(2, r.IConfigService),
      D(3, r.ICommandService),
      D(4, n.IMenuManagerService),
      D(5, a.IRenderManagerService),
    ],
    $,
  )),
  (exports.DocsColumnUIMenuSchema = T),
  Object.defineProperty(exports, "UniverDocsColumnUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.getColumnResizeDragCommandParams = M),
  (exports.getColumnResizeHandles = j));
