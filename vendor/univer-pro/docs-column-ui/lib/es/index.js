import {
  AddDocColumnCommand as _0x2a45f6,
  DOCS_COLUMN_MAX_COLUMN_COUNT as _0x3eb84c,
  DeleteDocColumnCommand as _0x5790a2,
  DeleteDocColumnGroupCommand as _0x4749fc,
  InsertDocColumnGroupCommand as _0x5d251b,
  ResizeDocColumnGroupCommand as _0x3a4df4,
  UniverDocsColumnPlugin as _0x44fa37,
  calculateResizeDragWidthRatios as _0x47ad55,
  canResolveDocsColumnInsertOffset as _0x71cf54,
  getColumnGroupRangeById as _0x23f107,
  normalizeDocsColumnInsertOffset as _0xbe27ed,
} from "@univerjs-pro/docs-column";
import {
  DOC_CONTENT_INSERT_MENU_ID as _0x34e268,
  DOC_PARAGRAPH_T_EDIT_MENU_ID as _0x3248b7,
  DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID as _0x10321d,
  DOC_PARAGRAPH_T_INSERT_MENU_ID as _0x541a7f,
  DOC_TABLE_BLOCK_MENU_ID as _0x446c62,
  DocParagraphMenuService as _0x19dd67,
  EMPTY_PARAGRAPH_MENU_ID as _0x5749c0,
  INSERT_BELLOW_MENU_ID as _0x18396a,
  UniverDocsUIPlugin as _0x5dd4f2,
  VIEWPORT_KEY as _0x397875,
} from "@univerjs/docs-ui";
import {
  ComponentManager as _0x495f5f,
  ContextMenuGroup as _0x121a37,
  ContextMenuPosition as _0x470122,
  IMenuManagerService as _0x327412,
  MenuItemType as _0x35198d,
  useDependency as _0x14c775,
} from "@univerjs/ui";
import {
  CommandType as _0x173aab,
  DependentOn as _0x29d060,
  Disposable as _0x342131,
  ICommandService as _0x458d88,
  IConfigService as _0x4b47af,
  IPermissionService as _0x2c0a4c,
  IUniverInstanceService as _0x4341ac,
  Inject as _0x15f43c,
  Injector as _0x22937d,
  LocaleService as _0x58ce08,
  Plugin as _0x2ea0e5,
  UniverInstanceType as _0x1befda,
  isInternalEditorID as _0x58f651,
  merge as _0x45852a,
} from "@univerjs/core";
import {
  DocSelectionManagerService as _0x5a6347,
  DocSkeletonManagerService as _0x57e65a,
  UniverDocsPlugin as _0x55ee1f,
  canEditDocumentTargets as _0x3ab0b4,
  consumeContentInsertRange as _0x5efefb,
  getDocumentEntityParentPermissionObjectIds as _0xdf84c8,
  getDocumentEntityPermissionObjectId as _0x1d8e8c,
} from "@univerjs/docs";
import {
  CURSOR_TYPE as _0x48741d,
  IRenderManagerService as _0x228707,
  UniverRenderEnginePlugin as _0x1b6c8a,
} from "@univerjs/engine-render";
import {
  EMPTY as _0x524c8e,
  Observable as _0x34ca7d,
  switchMap as _0x5ecbae,
} from "rxjs";
import { useRef as _0x439bda, useState as _0x5de352 } from "react";
import { jsx as _0x53a071, jsxs as _0x5636c8 } from "react/jsx-runtime";
import { UniverLicensePlugin as _0x258520 } from "@univerjs-pro/license";
function O(_0x5a31d3) {
  let _0x51a648 = _0x5a31d3.get(_0x4341ac),
    _0x5dde53 = _0x5a31d3.get(_0x5a6347);
  return new _0x34ca7d((_0x3bd172) => {
    let _0x7b35f6 = () => {
      _0x3bd172.next(Fe(_0x5a31d3, _0x51a648, _0x5dde53));
    };
    _0x7b35f6();
    let _0x5dca29 = _0x5dde53.textSelection$["subscribe"](_0x7b35f6),
      _0x41030f = _0x51a648.focused$["subscribe"](_0x7b35f6);
    return () => {
      (_0x5dca29.unsubscribe(), _0x41030f.unsubscribe());
    };
  });
}
function k(_0x36e3ec, _0x1835eb = {}) {
  let _0x288664 = _0x36e3ec.get(_0x4341ac),
    _0xed9524 = _0x36e3ec.get(_0x5a6347);
  return new _0x34ca7d((_0x259f3d) => {
    let _0x37155e = () => {
      let _0x3f6972 = j(_0x36e3ec, _0x288664, _0xed9524);
      _0x259f3d.next(
        !_0x3f6972 ||
          _0x3f6972.columnCount < (_0x1835eb.minColumnCount ?? 1) ||
          (_0x1835eb.maxColumnCount != null &&
            _0x3f6972.columnCount > _0x1835eb.maxColumnCount),
      );
    };
    _0x37155e();
    let _0x321be7 = _0xed9524.textSelection$["subscribe"](_0x37155e),
      _0x4f3981 = _0x288664.focused$["subscribe"](_0x37155e);
    return () => {
      (_0x321be7.unsubscribe(), _0x4f3981.unsubscribe());
    };
  });
}
function je(_0x33eee0) {
  let _0x400487 = j(_0x33eee0);
  return _0x400487 && _0x400487.columnCount < _0x3eb84c
    ? {
        columnGroupId: _0x400487.columnGroupId,
        targetColumnId: _0x400487.columnId,
        position: "right",
      }
    : undefined;
}
function Me(_0x5cc472) {
  let _0x197c0f = j(_0x5cc472);
  return _0x197c0f
    ? { columnGroupId: _0x197c0f.columnGroupId, columnId: _0x197c0f.columnId }
    : undefined;
}
function Ne(_0x370ea3) {
  let _0x4ec229 = j(_0x370ea3);
  return _0x4ec229 ? { columnGroupId: _0x4ec229.columnGroupId } : undefined;
}
function Pe(_0x282e17) {
  let _0x3f7059 = j(_0x282e17);
  return _0x3f7059
    ? {
        columnGroupId: _0x3f7059.columnGroupId,
        widthRatios: Array.from({ length: _0x3f7059.columnCount }, () => 1),
      }
    : undefined;
}
function A(_0xb02917, _0x401336) {
  var _0x3206e5;
  if (!_0xb02917 || typeof _0x401336 != "number") return null;
  for (let _0x16b56b of ((_0x3206e5 = _0xb02917.body) == null
    ? undefined
    : _0x3206e5.columnGroups) ?? []) {
    let _0x65439c = _0x23f107(_0xb02917, _0x16b56b.columnGroupId),
      _0x1d0a9e =
        _0x65439c == null
          ? undefined
          : _0x65439c.columns["find"](
              (_0x5f42a0) =>
                _0x401336 > _0x5f42a0.startOffset &&
                _0x401336 < _0x5f42a0.endOffset,
            );
    if (_0x65439c && _0x1d0a9e)
      return {
        columnGroupId: _0x65439c.columnGroupId,
        columnId: _0x1d0a9e.columnId,
        column: _0x1d0a9e.column,
        columnCount: _0x65439c.columns["length"],
      };
  }
  return null;
}
function j(
  _0x28c61b,
  _0x200825 = _0x28c61b.get(_0x4341ac),
  _0xf97a4 = _0x28c61b.get(_0x5a6347),
) {
  var _0xdb60a9;
  let _0x3b0040 =
      (_0xdb60a9 = _0x200825.getCurrentUnitOfType(_0x1befda.UNIVER_DOC)) == null
        ? undefined
        : _0xdb60a9.getSnapshot(),
    _0x25ad34 = _0xf97a4.getActiveTextRange();
  return A(
    _0x3b0040,
    (_0x25ad34 == null ? undefined : _0x25ad34.collapsed) === false
      ? null
      : _0x25ad34 == null
        ? undefined
        : _0x25ad34.startOffset,
  );
}
function Fe(
  _0x210cea,
  _0x4388e1 = _0x210cea.get(_0x4341ac),
  _0x22f12a = _0x210cea.get(_0x5a6347),
) {
  var _0x46d768;
  let _0x2b974c =
    (_0x46d768 = _0x4388e1.getCurrentUnitOfType(_0x1befda.UNIVER_DOC)) == null
      ? undefined
      : _0x46d768.getSnapshot();
  return (
    !_0x2b974c ||
    !Ie(_0x210cea, _0x2b974c, _0x22f12a) ||
    Le(_0x210cea, _0x2b974c, _0x22f12a)
  );
}
function Ie(_0x5dc14e, _0x510aba, _0x45024d = _0x5dc14e.get(_0x5a6347)) {
  var _0xbf67ee, _0x44cbd0;
  let _0xe6e965 = N(_0x5dc14e, _0x510aba.id),
    _0x389187 = _0xe6e965
      ? [
          (_0xbf67ee = _0xe6e965.menuRange) == null
            ? undefined
            : _0xbf67ee.startOffset,
          (_0x44cbd0 = _0xe6e965.moveRange) == null
            ? undefined
            : _0x44cbd0.startOffset,
        ]
      : [],
    _0x216840 = _0x45024d.getActiveTextRange(),
    _0x52661b =
      (_0x216840 == null ? undefined : _0x216840.collapsed) === false
        ? null
        : _0x216840 == null
          ? undefined
          : _0x216840.startOffset,
    _0x309a77 = [..._0x389187, _0x52661b].filter(
      (_0x57a335) => typeof _0x57a335 == "number",
    );
  return (
    _0x309a77.length === 0 ||
    _0x309a77.some((_0x3a7fb1) => _0x71cf54(_0x510aba, _0x3a7fb1))
  );
}
function Le(_0x4e302c, _0x393d2a, _0x5218b0 = _0x4e302c.get(_0x5a6347)) {
  let _0x102d67 = N(_0x4e302c, _0x393d2a.id);
  if (
    _0x102d67 &&
    (M(_0x393d2a, _0x102d67.menuRange) || M(_0x393d2a, _0x102d67.moveRange))
  )
    return true;
  let _0x230853 = _0x5218b0.getActiveTextRange();
  return (
    A(
      _0x393d2a,
      (_0x230853 == null ? undefined : _0x230853.collapsed) === false
        ? null
        : _0x230853 == null
          ? undefined
          : _0x230853.startOffset,
    ) != null
  );
}
function M(_0xdba6cc, _0x35e27e) {
  return _0x35e27e
    ? [
        _0x35e27e.startOffset,
        _0x35e27e.startOffset + 1,
        _0x35e27e.endOffset - 1,
        _0x35e27e.endOffset,
      ].some((_0x15c013) => A(_0xdba6cc, _0x15c013) != null)
    : false;
}
function N(_0x243b44, _0x4bd158) {
  try {
    let _0x51ce60 = _0x243b44.get(_0x228707).getRenderUnitById(_0x4bd158),
      _0x23550c = _0x51ce60 == null ? undefined : _0x51ce60.with(_0x19dd67);
    return (_0x23550c == null ? undefined : _0x23550c.activeTarget) ?? null;
  } catch {
    return null;
  }
}
function P(_0x473536, _0x12981d = {}) {
  let _0x198ed6 = _0x473536
    .get(_0x4341ac)
    .getCurrentUnitOfType(_0x1befda.UNIVER_DOC);
  if (!_0x198ed6) return null;
  let _0x343f12 = _0x198ed6.getUnitId(),
    _0x5c49f9 = _0x198ed6.getSnapshot(),
    _0x2583c3 = Re(_0x473536, _0x343f12, _0x12981d);
  if (!_0x2583c3) return null;
  let _0x1fea03 = _0xbe27ed(_0x5c49f9, _0x2583c3.offset, {
    snapToParagraphEnd: _0x12981d.snapToParagraphEnd,
  });
  return _0x71cf54(_0x5c49f9, _0x1fea03)
    ? {
        offset: _0x1fea03,
        rawOffset: _0x2583c3.offset,
        source: _0x2583c3.source,
      }
    : null;
}
function Re(_0xeaa114, _0x3f9838, _0x53f9eb) {
  if (typeof _0x53f9eb.explicitOffset == "number")
    return { offset: _0x53f9eb.explicitOffset, source: "explicit" };
  if (_0x53f9eb.consumeContentInsertRange) {
    let _0x242cf8 = _0x5efefb(_0xeaa114, _0x3f9838);
    if (_0x242cf8)
      return { offset: _0x242cf8.startOffset, source: "contentInsertRange" };
  }
  let _0x5a3d1b = ze(_0xeaa114, _0x3f9838, _0x53f9eb.placement ?? "target");
  if (typeof _0x5a3d1b == "number")
    return { offset: _0x5a3d1b, source: "paragraphTarget" };
  let _0x2126e9 = _0xeaa114.get(_0x5a6347).getActiveTextRange();
  return !_0x2126e9 ||
    _0x2126e9.collapsed === false ||
    _0x2126e9.startOffset !== _0x2126e9.endOffset
    ? null
    : { offset: _0x2126e9.startOffset, source: "selection" };
}
function ze(_0xc12e75, _0x139cd8, _0x54c8dc) {
  var _0x5d3a81, _0x3055c5;
  let _0x3d882b = N(_0xc12e75, _0x139cd8);
  if (!_0x3d882b) return null;
  if (_0x54c8dc === "below") {
    var _0x4864dc, _0x4791de;
    return (
      ((_0x4864dc = _0x3d882b.moveRange) == null
        ? undefined
        : _0x4864dc.endOffset) ??
      ((_0x4791de = _0x3d882b.menuRange) == null
        ? undefined
        : _0x4791de.endOffset) ??
      null
    );
  }
  return (
    ((_0x5d3a81 = _0x3d882b.menuRange) == null
      ? undefined
      : _0x5d3a81.startOffset) ??
    ((_0x3055c5 = _0x3d882b.moveRange) == null
      ? undefined
      : _0x3055c5.startOffset) ??
    null
  );
}
const F = {
    id: "doc.command.menu-insert-column-group",
    type: _0x173aab.COMMAND,
    handler: (_0x40b8a5, _0x2682ee) => {
      if (!_0x2682ee) return false;
      let _0x145cde = P(_0x40b8a5, {
        explicitOffset: _0x2682ee.offset,
        consumeContentInsertRange: true,
        snapToParagraphEnd: true,
      });
      return _0x145cde
        ? _0x40b8a5
            .get(_0x458d88)
            .syncExecuteCommand(_0x5d251b.id, {
              ..._0x2682ee,
              offset: _0x145cde.offset,
            })
        : false;
    },
  },
  I = "docs-column-ui.insert-column-picker",
  Be = Array.from({ length: 5 }, (_0x50a068, _0xbfdf27) => _0xbfdf27 + 1);
function Ve(_0x534a1e) {
  let _0x3ba654 = _0x14c775(_0x58ce08),
    [_0x197a75, _0x2885cd] = _0x5de352(3),
    _0x52b470 = _0x439bda(false),
    _0x11355a = (_0xd7dd7a) => {
      var _0x55fbc1;
      (_0x55fbc1 = _0x534a1e.onChange) == null ||
        _0x55fbc1.call(_0x534a1e, String(_0xd7dd7a));
    };
  return _0x5636c8("section", {
    className: "univer-py-2",
    "data-u-comp": I,
    onClick: (_0x57151a) => _0x57151a.stopPropagation(),
    onMouseDown: (_0x4c6c93) => _0x4c6c93.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: 8,
      boxSizing: "border-box",
      color: "#1f2329",
      display: "block",
      width: 254,
    },
    children: [
      _0x5636c8("div", {
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
          _0x53a071("span", {
            style: { color: "#4e5969" },
            children: _0x3ba654.t("docs-column-ui.menu.selectColumnCount"),
          }),
          _0x53a071("span", {
            style: {
              color: "#1f2329",
              fontWeight: 500,
              minWidth: 16,
              textAlign: "right",
            },
            children: _0x197a75,
          }),
        ],
      }),
      _0x53a071("div", {
        "aria-label": _0x3ba654.t("docs-column-ui.menu.selectColumnCount"),
        role: "group",
        style: {
          alignItems: "stretch",
          background: "#fff",
          border: "1px solid #dee0e3",
          borderRadius: 2,
          boxSizing: "border-box",
          display: "flex",
          gap: 8,
          height: 158,
          padding: "18px 18px 17px",
          width: 254,
        },
        children: Be.map((_0x3f1f3e) => {
          let _0x4df5cb = Math.max(2, _0x3f1f3e),
            _0x318690 = _0x3f1f3e <= _0x197a75;
          return _0x53a071(
            "button",
            {
              type: "button",
              "aria-label": _0x3ba654.t(
                "docs-column-ui.menu.insertColumnCount",
                String(_0x4df5cb),
              ),
              onClick: () => {
                if (_0x52b470.current) {
                  _0x52b470.current = false;
                  return;
                }
                _0x11355a(_0x4df5cb);
              },
              onMouseDown: (_0x55677e) => {
                (_0x55677e.preventDefault(),
                  _0x55677e.stopPropagation(),
                  (_0x52b470.current = true),
                  _0x11355a(_0x4df5cb));
              },
              onMouseEnter: () => _0x2885cd(_0x4df5cb),
              style: {
                background: "transparent",
                border: 0,
                boxSizing: "border-box",
                cursor: "pointer",
                flex: 1,
                minWidth: 0,
                padding: 0,
              },
              children: _0x53a071("span", {
                style: {
                  backgroundColor: _0x318690 ? "#8fafef" : "#edf0f4",
                  display: "block",
                  height: "100%",
                  transition: "background-color\x20120ms\x20ease",
                  width: "100%",
                },
              }),
            },
            _0x3f1f3e,
          );
        }),
      }),
    ],
  });
}
function L(_0x147c05) {
  return {
    id: F.id,
    commandId: F.id,
    selectionsCommandId: F.id,
    params: () => {
      var _0x3dd4d0;
      return {
        columnCount: 2,
        offset:
          (_0x3dd4d0 = P(_0x147c05, {
            consumeContentInsertRange: true,
            snapToParagraphEnd: true,
          })) == null
            ? undefined
            : _0x3dd4d0.offset,
      };
    },
    type: _0x35198d.BUTTON_SELECTOR,
    icon: "GridIcon",
    title: "docs-column-ui.menu.column",
    tooltip: "docs-column-ui.menu.column",
    hidden$: O(_0x147c05),
    selections: [{ label: { name: I, hoverable: false, selectable: false } }],
  };
}
function R(_0x1388a3) {
  return {
    ...L(_0x1388a3),
    id: F.id + ".below",
    commandId: F.id,
    selectionsCommandId: F.id,
    hidden$: O(_0x1388a3),
    params: () => {
      var _0x2813ad;
      return {
        offset:
          (_0x2813ad = P(_0x1388a3, {
            consumeContentInsertRange: true,
            placement: "below",
            snapToParagraphEnd: true,
          })) == null
            ? undefined
            : _0x2813ad.offset,
      };
    },
  };
}
function He(_0xabaf29) {
  return {
    id: _0x2a45f6.id,
    type: _0x35198d.BUTTON,
    icon: "InsertDoubleIcon",
    title: "docs-column-ui.menu.addColumn",
    tooltip: "docs-column-ui.menu.addColumn",
    hidden$: k(_0xabaf29, { maxColumnCount: _0x3eb84c - 1 }),
    params: () => je(_0xabaf29),
  };
}
function Ue(_0x58f2e0) {
  return {
    id: _0x5790a2.id,
    type: _0x35198d.BUTTON,
    icon: "DeleteIcon",
    title: "docs-column-ui.menu.deleteColumn",
    tooltip: "docs-column-ui.menu.deleteColumn",
    hidden$: k(_0x58f2e0, { minColumnCount: 3 }),
    params: () => Me(_0x58f2e0),
  };
}
function We(_0x304b7f) {
  return {
    id: _0x4749fc.id,
    type: _0x35198d.BUTTON,
    icon: "DeleteIcon",
    title: "docs-column-ui.menu.deleteColumnGroup",
    tooltip: "docs-column-ui.menu.deleteColumnGroup",
    hidden$: k(_0x304b7f),
    params: () => Ne(_0x304b7f),
  };
}
function Ge(_0xcfa1d1) {
  return {
    id: _0x3a4df4.id,
    type: _0x35198d.BUTTON,
    icon: "HorizontallyIcon",
    title: "docs-column-ui.menu.equalWidth",
    tooltip: "docs-column-ui.menu.equalWidth",
    hidden$: k(_0xcfa1d1),
    params: () => Pe(_0xcfa1d1),
  };
}
_0x470122.PARAGRAPH;
const Ke = {
  [_0x470122.PARAGRAPH]: {
    [_0x121a37.LAYOUT]: {
      [_0x18396a]: { [F.id + ".below"]: { order: 3, menuItemFactory: R } },
    },
    [_0x5749c0]: {
      [_0x121a37.LAYOUT]: { [F.id]: { order: 3, menuItemFactory: L } },
    },
    [_0x34e268]: {
      [_0x121a37.LAYOUT]: {
        [F.id + ".below"]: { order: 3, menuItemFactory: R },
      },
    },
    [_0x541a7f]: { insert: { [F.id]: { order: 1, menuItemFactory: L } } },
    [_0x3248b7]: {
      quickBottom: {
        [_0x2a45f6.id]: { order: 6, menuItemFactory: He },
        [_0x5790a2.id]: { order: 7, menuItemFactory: Ue },
        [_0x4749fc.id]: { order: 8, menuItemFactory: We },
        [_0x3a4df4.id]: { order: 9, menuItemFactory: Ge },
      },
    },
    [_0x10321d]: {
      insert: { [F.id + ".below"]: { order: 1, menuItemFactory: R } },
    },
    [_0x446c62]: {
      [_0x121a37.LAYOUT]: {
        [_0x18396a]: { [F.id + ".below"]: { order: 3, menuItemFactory: R } },
      },
    },
  },
};
var qe = "@univerjs-pro/docs-column-ui",
  Je = "1.0.0-insiders.20260907-70fc579";
const Ye = {};
function z(_0x357595, _0x588163) {
  return function (_0x51eac1, _0xfe72ff) {
    _0x588163(_0x51eac1, _0xfe72ff, _0x357595);
  };
}
function B(_0x5fd611, _0x2dd5e2, _0x104b1b, _0x212c93) {
  var _0x173f1f = arguments.length,
    _0x47c202 =
      _0x173f1f < 3
        ? _0x2dd5e2
        : _0x212c93 === null
          ? (_0x212c93 = Object.getOwnPropertyDescriptor(_0x2dd5e2, _0x104b1b))
          : _0x212c93,
    _0x4a0f8c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x47c202 = Reflect.decorate(_0x5fd611, _0x2dd5e2, _0x104b1b, _0x212c93);
  else {
    for (var _0xd5d5dd = _0x5fd611.length - 1; _0xd5d5dd >= 0; _0xd5d5dd--)
      (_0x4a0f8c = _0x5fd611[_0xd5d5dd]) &&
        (_0x47c202 =
          (_0x173f1f < 3
            ? _0x4a0f8c(_0x47c202)
            : _0x173f1f > 3
              ? _0x4a0f8c(_0x2dd5e2, _0x104b1b, _0x47c202)
              : _0x4a0f8c(_0x2dd5e2, _0x104b1b)) || _0x47c202);
  }
  return (
    _0x173f1f > 3 &&
      _0x47c202 &&
      Object.defineProperty(_0x2dd5e2, _0x104b1b, _0x47c202),
    _0x47c202
  );
}
let V = class extends _0x342131 {
  constructor(_0x200149) {
    (super(), (this._componentManager = _0x200149), this._registerComponents());
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](I, Ve));
  }
};
V = B([z(0, _0x15f43c(_0x495f5f))], V);
function H(_0x49b922) {
  return Math.max(_0x49b922.height, 72);
}
function Xe(_0x1ef7b0) {
  let _0x4510df = H(_0x1ef7b0);
  return _0x1ef7b0.columns["slice"](0, -1).map((_0x50589b, _0xde9e02) => {
    let _0x9f5b03 = _0x1ef7b0.columns[_0xde9e02 + 1],
      _0x405e11 =
        _0x50589b.left +
        _0x50589b.width +
        (_0x9f5b03.left - _0x50589b.left - _0x50589b.width) / 2;
    return {
      columnGroupId: _0x1ef7b0.columnGroupId,
      separatorIndex: _0xde9e02,
      left: _0x1ef7b0.left + _0x405e11,
      top: _0x1ef7b0.top,
      height: _0x4510df,
    };
  });
}
function Ze(_0x2638a2, _0x4ee612, _0x1581d5) {
  let _0x33eccd = _0x47ad55({
    source: _0x2638a2.columnGroupSource,
    availableWidth: _0x2638a2.width,
    separatorIndex: _0x4ee612,
    delta: _0x1581d5,
  });
  return _0x33eccd
    ? { columnGroupId: _0x2638a2.columnGroupId, widthRatios: _0x33eccd }
    : null;
}
function Qe(_0x46ff10, _0x314421, _0x4fed74, _0x2a91e8 = 12) {
  let _0x21764a = _0x2a91e8 / 2,
    _0x13ba90 = null,
    _0x1666fa = 1 / 0;
  for (let _0x4a3117 of _0x46ff10) {
    let _0x5aaf27 = Math.abs(_0x314421 - _0x4a3117.left);
    _0x5aaf27 > _0x21764a ||
      _0x4fed74 < _0x4a3117.top ||
      _0x4fed74 >= _0x4a3117.top + _0x4a3117.height ||
      (_0x5aaf27 < _0x1666fa &&
        ((_0x13ba90 = _0x4a3117), (_0x1666fa = _0x5aaf27)));
  }
  return _0x13ba90;
}
function $e(_0x1df790, _0x4b372e) {
  return { handle: _0x1df790, startX: _0x4b372e.x };
}
function U(_0x4a7f4, _0x3a6c34) {
  return _0x3a6c34.x - _0x4a7f4.startX;
}
const et = 0.36,
  tt = 0.9;
function nt(_0x51c453, _0x248f73) {
  _0x248f73.length !== 0 &&
    (_0x51c453.save(),
    (_0x51c453.fillStyle = "#eef1f5"),
    (_0x51c453.globalAlpha = 0.48),
    (_0x51c453.globalCompositeOperation = "multiply"),
    _0x248f73.forEach((_0x587c6e) => {
      var _0x37bf83;
      let _0x44f7fd = H(_0x587c6e);
      ((_0x37bf83 = _0x587c6e.columns) != null && _0x37bf83.length
        ? _0x587c6e.columns
        : [{ left: 0, width: _0x587c6e.width }]
      ).forEach((_0x228275) => {
        it(
          _0x51c453,
          _0x587c6e.left + _0x228275.left,
          _0x587c6e.top,
          _0x228275.width,
          _0x44f7fd,
        );
      });
    }),
    _0x51c453.restore());
}
function rt(_0x3cfd5e, _0x37081d = {}) {
  var _0x3ccf02;
  (!_0x37081d.hoveredHandle && !_0x37081d.activeDrag) ||
    (_0x3cfd5e.save(),
    (_0x3cfd5e.fillStyle = "#1a73e8"),
    (_0x3cfd5e.globalAlpha = et),
    _0x37081d.hoveredHandle &&
      ((_0x3cfd5e.globalAlpha = tt),
      W(
        _0x3cfd5e,
        _0x37081d.hoveredHandle["left"],
        _0x37081d.hoveredHandle["top"],
        _0x37081d.hoveredHandle["height"],
      )),
    _0x37081d.activeDrag &&
      ((_0x3cfd5e.globalAlpha = et),
      W(
        _0x3cfd5e,
        _0x37081d.activeDrag["handle"].left,
        _0x37081d.activeDrag["handle"].top,
        _0x37081d.activeDrag["handle"].height,
      ),
      (_0x3cfd5e.globalAlpha = tt),
      W(
        _0x3cfd5e,
        _0x37081d.activeDrag["handle"].left + _0x37081d.activeDrag["delta"],
        _0x37081d.activeDrag["handle"].top,
        _0x37081d.activeDrag["handle"].height,
      )),
    _0x3cfd5e.restore(),
    (_0x3ccf02 = _0x37081d.activeDrag) != null &&
      _0x3ccf02.columnGroup &&
      at(
        _0x3cfd5e,
        _0x37081d.activeDrag["columnGroup"],
        _0x37081d.activeDrag["handle"].separatorIndex,
        _0x37081d.activeDrag["delta"],
      ));
}
function W(_0x3961f0, _0x3ebccd, _0x274014, _0x31c8e8) {
  _0x3961f0.fillRect(_0x3ebccd - 2 / 2, _0x274014, 2, _0x31c8e8);
}
function it(_0x3a80fe, _0x4f649a, _0x304b4c, _0x3f8d4a, _0x581df1) {
  if (!_0x3a80fe.beginPath || !_0x3a80fe.roundRect || !_0x3a80fe.fill) {
    _0x3a80fe.fillRect(_0x4f649a, _0x304b4c, _0x3f8d4a, _0x581df1);
    return;
  }
  (_0x3a80fe.beginPath(),
    _0x3a80fe.roundRect(_0x4f649a, _0x304b4c, _0x3f8d4a, _0x581df1, 8),
    _0x3a80fe.fill());
}
function at(_0x223ce6, _0x4b43b1, _0x4d8a94, _0x31758b) {
  if (!_0x223ce6.fillText) return;
  let _0x217e26 = ot(_0x4b43b1, _0x4d8a94, _0x31758b),
    _0x56a913 = _0x217e26.reduce(
      (_0x5815cd, _0x12a16c) => _0x5815cd + Math.max(0, _0x12a16c.width),
      0,
    );
  if (_0x56a913 <= 0) return;
  let _0x22b1fd = st(
    _0x217e26.map(
      (_0x1711b9) => (Math.max(0, _0x1711b9.width) / _0x56a913) * 100,
    ),
  );
  (_0x223ce6.save(),
    (_0x223ce6.font = "600 12px Arial, sans-serif"),
    (_0x223ce6.textBaseline = "middle"),
    (_0x223ce6.globalAlpha = 1),
    (_0x223ce6.globalCompositeOperation = "source-over"),
    _0x217e26.forEach((_0x23f652, _0x50ce2e) => {
      var _0x570036;
      let _0x2c50a4 = _0x22b1fd[_0x50ce2e] + "%",
        _0x2d74b4 =
          (((_0x570036 = _0x223ce6.measureText) == null
            ? undefined
            : _0x570036.call(_0x223ce6, _0x2c50a4).width) ??
            _0x2c50a4.length * 7) + 12,
        _0x3d24ac =
          _0x4b43b1.left + _0x23f652.left + _0x23f652.width - 8 - _0x2d74b4,
        _0x41aa4e = _0x4b43b1.top + 4;
      ((_0x223ce6.fillStyle = "#9ca3af"),
        ct(_0x223ce6, _0x3d24ac, _0x41aa4e, _0x2d74b4, 22, 5),
        (_0x223ce6.fillStyle = "#ffffff"),
        _0x223ce6.fillText(_0x2c50a4, _0x3d24ac + 6, _0x41aa4e + 22 / 2));
    }),
    _0x223ce6.restore());
}
function ot(_0x4170d9, _0x2aafa, _0x1ea399) {
  var _0xb87aa4;
  let _0x1b2098 = (
    (_0xb87aa4 = _0x4170d9.columns) != null && _0xb87aa4.length
      ? _0x4170d9.columns
      : [{ left: 0, width: _0x4170d9.width }]
  ).map((_0x16274a) => ({ ..._0x16274a }));
  if (_0x2aafa < 0 || _0x2aafa >= _0x1b2098.length - 1) return _0x1b2098;
  ((_0x1b2098[_0x2aafa].width = Math.max(
    0,
    _0x1b2098[_0x2aafa].width + _0x1ea399,
  )),
    (_0x1b2098[_0x2aafa + 1].width = Math.max(
      0,
      _0x1b2098[_0x2aafa + 1].width - _0x1ea399,
    )));
  for (
    let _0x284240 = _0x2aafa + 1;
    _0x284240 < _0x1b2098.length;
    _0x284240++
  ) {
    var _0x21b5fb, _0x49c6d1, _0x1e66be;
    let _0x21ad36 = _0x1b2098[_0x284240 - 1],
      _0x1d0a57 =
        Math.max(
          0,
          ((_0x21b5fb = _0x4170d9.columns) == null
            ? undefined
            : _0x21b5fb[_0x284240].left) ?? _0x1b2098[_0x284240].left,
        ) -
        Math.max(
          0,
          (((_0x49c6d1 = _0x4170d9.columns) == null
            ? undefined
            : _0x49c6d1[_0x284240 - 1].left) ?? _0x21ad36.left) +
            (((_0x1e66be = _0x4170d9.columns) == null
              ? undefined
              : _0x1e66be[_0x284240 - 1].width) ?? _0x21ad36.width),
        );
    _0x1b2098[_0x284240].left = _0x21ad36.left + _0x21ad36.width + _0x1d0a57;
  }
  return _0x1b2098;
}
function st(_0x3715c9) {
  let _0x1d95ab = _0x3715c9.map((_0x4e391b) => Math.round(_0x4e391b)),
    _0x14df9b =
      100 -
      _0x1d95ab.reduce((_0x316552, _0x44fd43) => _0x316552 + _0x44fd43, 0);
  return (
    _0x1d95ab.length > 0 && (_0x1d95ab[_0x1d95ab.length - 1] += _0x14df9b),
    _0x1d95ab
  );
}
function ct(_0x331294, _0x43dfc8, _0x2fc4fd, _0x3b3fdc, _0x2e4137, _0x243b10) {
  if (!_0x331294.beginPath || !_0x331294.roundRect || !_0x331294.fill) {
    _0x331294.fillRect(_0x43dfc8, _0x2fc4fd, _0x3b3fdc, _0x2e4137);
    return;
  }
  (_0x331294.beginPath(),
    _0x331294.roundRect(_0x43dfc8, _0x2fc4fd, _0x3b3fdc, _0x2e4137, _0x243b10),
    _0x331294.fill());
}
function G(_0x434443) {
  "@babel/helpers - typeof";
  return (
    (G =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5028ad) {
            return typeof _0x5028ad;
          }
        : function (_0x1ee972) {
            return _0x1ee972 &&
              typeof Symbol == "function" &&
              _0x1ee972.constructor === Symbol &&
              _0x1ee972 !== Symbol.prototype
              ? "symbol"
              : typeof _0x1ee972;
          }),
    G(_0x434443)
  );
}
function lt(_0x4040b4, _0x3329fc) {
  if (G(_0x4040b4) != "object" || !_0x4040b4) return _0x4040b4;
  var _0x29b056 = _0x4040b4[Symbol.toPrimitive];
  if (_0x29b056 !== undefined) {
    var _0x20a4a5 = _0x29b056.call(_0x4040b4, _0x3329fc || "default");
    if (G(_0x20a4a5) != "object") return _0x20a4a5;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x3329fc === "string" ? String : Number)(_0x4040b4);
}
function ut(_0x31889f) {
  var _0x55a44d = lt(_0x31889f, "string");
  return G(_0x55a44d) == "symbol" ? _0x55a44d : _0x55a44d + "";
}
function K(_0x3158e3, _0x2f91af, _0x5c52ba) {
  return (
    (_0x2f91af = ut(_0x2f91af)) in _0x3158e3
      ? Object.defineProperty(_0x3158e3, _0x2f91af, {
          value: _0x5c52ba,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3158e3[_0x2f91af] = _0x5c52ba),
    _0x3158e3
  );
}
let q = class extends _0x342131 {
  constructor(
    _0x4139e5,
    _0x45910a,
    _0x4ee035,
    _0x3aed87,
    _0x1efba7,
    _0x4d9769,
    _0x23cf7f,
  ) {
    (super(),
      (this._context = _0x4139e5),
      (this._docSkeletonManagerService = _0x45910a),
      (this._commandService = _0x4ee035),
      (this._univerInstanceService = _0x3aed87),
      (this._docSelectionManagerService = _0x1efba7),
      (this._docParagraphMenuService = _0x4d9769),
      (this._permissionService = _0x23cf7f),
      K(this, "_resizeHandles", []),
      K(this, "_columnGroups", new Map()),
      K(this, "_resizeDragState", null),
      K(this, "_resizeDragDelta", 0),
      K(this, "_hoveredResizeHandle", null),
      K(this, "_hoveredColumnGroupId", null),
      K(this, "_canvasPointerEventsInitialized", false),
      K(this, "_canvasPointerEventsRetryCount", 0),
      !_0x58f651(this._context["unitId"]) &&
        (this.disposeWithMe(
          this._docSkeletonManagerService["currentSkeleton$"].subscribe(
            (_0x35feef) => {
              (this._refreshColumnResizeState(_0x35feef ?? undefined, true),
                this._makeDirty());
            },
          ),
        ),
        this.disposeWithMe(
          this._docSkeletonManagerService["currentSkeleton$"]
            .pipe(
              _0x5ecbae(
                (_0xf06a50) =>
                  (_0xf06a50 == null ? undefined : _0xf06a50.dirty$) ??
                  _0x524c8e,
              ),
            )
            .subscribe(() => {
              (this._refreshColumnResizeState(), this._makeDirty());
            }),
        ),
        this.disposeWithMe(
          this._docSelectionManagerService["textSelection$"].subscribe(
            ({ unitId: _0x5e0674 }) => {
              _0x5e0674 === this._context["unitId"] &&
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
  async resizeColumnFromHandle(_0x2ba569, _0x37665e) {
    if (!this._canEditColumnGroup(_0x2ba569.columnGroupId)) return false;
    let _0x57d354 = this._columnGroups["get"](_0x2ba569.columnGroupId);
    if (!_0x57d354) return false;
    let _0x138a71 = Ze(_0x57d354, _0x2ba569.separatorIndex, _0x37665e);
    return _0x138a71
      ? !!(await this._commandService["executeCommand"](
          _0x3a4df4.id,
          _0x138a71,
        ))
      : false;
  }
  startResizeDragAtPoint(_0x4697a2) {
    let _0x163f9f = Qe(this._resizeHandles, _0x4697a2.x, _0x4697a2.y);
    return _0x163f9f
      ? ((this._resizeDragState = $e(_0x163f9f, _0x4697a2)),
        (this._resizeDragDelta = 0),
        true)
      : false;
  }
  async releaseResizeDragAtPoint(_0x309f38, _0x152de0) {
    let _0xe6e813 = this._resizeDragState;
    return (
      (this._resizeDragState = null),
      (this._resizeDragDelta = 0),
      !_0xe6e813 || !_0x152de0
        ? false
        : this.resizeColumnFromHandle(_0xe6e813.handle, U(_0xe6e813, _0x309f38))
    );
  }
  _initPointerEvents() {
    var _0x949956, _0x159ee1;
    let _0x45d855 = _t(this._context);
    (this._initCanvasPointerEvents(),
      !(
        !(_0x45d855 != null && _0x45d855.onPointerDown$) ||
        !_0x45d855.onPointerUp$
      ) &&
        (this.disposeWithMe(
          _0x45d855.onPointerDown$["subscribeEvent"]({
            next: ([_0xd61235, _0x31ba51]) => {
              var _0x5b06cf, _0x18150f;
              let _0x560aee = J(
                _0xd61235.offsetX,
                _0xd61235.offsetY,
                this._context["scene"],
              );
              this.startResizeDragAtPoint(_0x560aee) &&
                ((this._hoveredResizeHandle =
                  ((_0x5b06cf = this._resizeDragState) == null
                    ? undefined
                    : _0x5b06cf.handle) ?? null),
                (this._hoveredColumnGroupId =
                  ((_0x18150f = this._resizeDragState) == null
                    ? undefined
                    : _0x18150f.handle["columnGroupId"]) ?? null),
                this._setResizeCursor(),
                this._consumePointerEvent(_0xd61235, _0x31ba51),
                this._makeDirty());
            },
          }),
        ),
        this.disposeWithMe(
          ((_0x949956 = _0x45d855.onPointerMove$) == null
            ? undefined
            : _0x949956.subscribeEvent({
                next: ([_0x57ae03, _0x22f7cc]) => {
                  if (!this._resizeDragState) {
                    this._updateHoverAtPoint(
                      J(
                        _0x57ae03.offsetX,
                        _0x57ae03.offsetY,
                        this._context["scene"],
                      ),
                    );
                    return;
                  }
                  let _0x36f597 = J(
                    _0x57ae03.offsetX,
                    _0x57ae03.offsetY,
                    this._context["scene"],
                  );
                  ((this._resizeDragDelta = U(
                    this._resizeDragState,
                    _0x36f597,
                  )),
                    this._setResizeCursor(),
                    this._consumePointerEvent(_0x57ae03, _0x22f7cc),
                    this._makeDirty());
                },
              })) ?? { dispose: () => undefined },
        ),
        this.disposeWithMe(
          ((_0x159ee1 = _0x45d855.onPointerLeave$) == null
            ? undefined
            : _0x159ee1.subscribeEvent({
                next: ([_0x3a4a4b, _0x3e04da]) => {
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
                        this._consumePointerEvent(_0x3a4a4b, _0x3e04da),
                        this._makeDirty());
                      return;
                    }
                    (this._cancelResizeInteraction(),
                      this._setDefaultCursor(),
                      this._consumePointerEvent(_0x3a4a4b, _0x3e04da),
                      this._makeDirty());
                  }
                },
              })) ?? { dispose: () => undefined },
        ),
        this.disposeWithMe(
          _0x45d855.onPointerUp$["subscribeEvent"]({
            next: ([_0x434605, _0x3abfae]) => {
              if (!this._resizeDragState) return;
              let _0x245d91 = J(
                _0x434605.offsetX,
                _0x434605.offsetY,
                this._context["scene"],
              );
              (this.releaseResizeDragAtPoint(_0x245d91, true),
                this._consumePointerEvent(_0x434605, _0x3abfae),
                this._makeDirty());
            },
          }),
        )));
  }
  _initCanvasPointerEvents() {
    if (this._canvasPointerEventsInitialized) return;
    let _0x231e1b = vt(this._context);
    if (
      !(_0x231e1b != null && _0x231e1b.addEventListener) ||
      !_0x231e1b.removeEventListener
    ) {
      this._retryInitCanvasPointerEvents();
      return;
    }
    this._canvasPointerEventsInitialized = true;
    let _0x22e3d5 = (_0x2de66e) => {
        this._resizeDragState ||
          this._updateHoverAtPoint(
            J(_0x2de66e.offsetX, _0x2de66e.offsetY, this._context["scene"]),
          );
      },
      _0x23f8a4 = (_0x70dc7c) => {
        let _0x3d3350 = bt(_0x70dc7c, _0x231e1b, this._context["scene"]);
        if (_0x3d3350) {
          if (this._resizeDragState) {
            ((this._resizeDragDelta = U(this._resizeDragState, _0x3d3350)),
              this._setResizeCursor(),
              Y(_0x70dc7c),
              this._makeDirty());
            return;
          }
          this._updateHoverAtPoint(
            _0x3d3350,
            this._resolveActiveParagraphMenuColumnGroupId() != null,
          );
        }
      },
      _0x28b96c = (_0x1245d2) => {
        var _0x486014, _0xc52d9e;
        let _0x19f707 = J(
          _0x1245d2.offsetX,
          _0x1245d2.offsetY,
          this._context["scene"],
        );
        this.startResizeDragAtPoint(_0x19f707) &&
          ((this._hoveredResizeHandle =
            ((_0x486014 = this._resizeDragState) == null
              ? undefined
              : _0x486014.handle) ?? null),
          (this._hoveredColumnGroupId =
            ((_0xc52d9e = this._resizeDragState) == null
              ? undefined
              : _0xc52d9e.handle["columnGroupId"]) ?? null),
          this._setResizeCursor(),
          Y(_0x1245d2),
          this._makeDirty());
      },
      _0x18f643 = (_0x334616) => {
        if (!this._resizeDragState) return;
        let _0x1d0f5a = bt(_0x334616, _0x231e1b, this._context["scene"]);
        if (!_0x1d0f5a) {
          (this._cancelResizeInteraction(),
            this._setDefaultCursor(),
            this._makeDirty());
          return;
        }
        (this.releaseResizeDragAtPoint(_0x1d0f5a, true),
          Y(_0x334616),
          this._makeDirty());
      },
      _0x1c6ac5 = () => {
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
      _0x336f30 = _0x231e1b.ownerDocument,
      _0x1e354b = _0x336f30 == null ? undefined : _0x336f30.defaultView;
    (_0x231e1b.addEventListener("pointerdown", _0x28b96c, true),
      _0x231e1b.addEventListener("mousedown", _0x28b96c, true),
      _0x231e1b.addEventListener("pointermove", _0x22e3d5),
      _0x231e1b.addEventListener("mousemove", _0x22e3d5),
      _0x231e1b.addEventListener("pointerleave", _0x1c6ac5),
      _0x231e1b.addEventListener("mouseleave", _0x1c6ac5),
      _0x336f30 == null || _0x336f30.addEventListener("pointermove", _0x23f8a4),
      _0x336f30 == null || _0x336f30.addEventListener("mousemove", _0x23f8a4),
      _0x336f30 == null || _0x336f30.addEventListener("pointerup", _0x18f643),
      _0x336f30 == null || _0x336f30.addEventListener("mouseup", _0x18f643),
      _0x1e354b == null ||
        _0x1e354b.addEventListener("pointermove", _0x23f8a4, true),
      _0x1e354b == null ||
        _0x1e354b.addEventListener("mousemove", _0x23f8a4, true),
      _0x1e354b == null ||
        _0x1e354b.addEventListener("pointerup", _0x18f643, true),
      _0x1e354b == null ||
        _0x1e354b.addEventListener("mouseup", _0x18f643, true),
      this.disposeWithMe({
        dispose: () => {
          var _0x272532, _0x86e9ae, _0x5e2723, _0x1d2212, _0x234a06, _0xe99056;
          ((_0x272532 = _0x231e1b.removeEventListener) == null ||
            _0x272532.call(_0x231e1b, "pointerdown", _0x28b96c, true),
            (_0x86e9ae = _0x231e1b.removeEventListener) == null ||
              _0x86e9ae.call(_0x231e1b, "mousedown", _0x28b96c, true),
            (_0x5e2723 = _0x231e1b.removeEventListener) == null ||
              _0x5e2723.call(_0x231e1b, "pointermove", _0x22e3d5),
            (_0x1d2212 = _0x231e1b.removeEventListener) == null ||
              _0x1d2212.call(_0x231e1b, "mousemove", _0x22e3d5),
            (_0x234a06 = _0x231e1b.removeEventListener) == null ||
              _0x234a06.call(_0x231e1b, "pointerleave", _0x1c6ac5),
            (_0xe99056 = _0x231e1b.removeEventListener) == null ||
              _0xe99056.call(_0x231e1b, "mouseleave", _0x1c6ac5),
            _0x336f30 == null ||
              _0x336f30.removeEventListener("pointermove", _0x23f8a4),
            _0x336f30 == null ||
              _0x336f30.removeEventListener("mousemove", _0x23f8a4),
            _0x336f30 == null ||
              _0x336f30.removeEventListener("pointerup", _0x18f643),
            _0x336f30 == null ||
              _0x336f30.removeEventListener("mouseup", _0x18f643),
            _0x1e354b == null ||
              _0x1e354b.removeEventListener("pointermove", _0x23f8a4, true),
            _0x1e354b == null ||
              _0x1e354b.removeEventListener("mousemove", _0x23f8a4, true),
            _0x1e354b == null ||
              _0x1e354b.removeEventListener("pointerup", _0x18f643, true),
            _0x1e354b == null ||
              _0x1e354b.removeEventListener("mouseup", _0x18f643, true));
        },
      }));
  }
  _retryInitCanvasPointerEvents() {
    if (this._canvasPointerEventsRetryCount >= 10 || typeof window > "u")
      return;
    this._canvasPointerEventsRetryCount += 1;
    let _0xc31e77 = window.setTimeout(
      () => this._initCanvasPointerEvents(),
      100,
    );
    this.disposeWithMe({ dispose: () => window.clearTimeout(_0xc31e77) });
  }
  _updateHoverAtPoint(_0xc85ae4, _0x5b3189 = false) {
    var _0x486862;
    this._refreshColumnResizeState();
    let _0x46d225 = Qe(this._resizeHandles, _0xc85ae4.x, _0xc85ae4.y),
      _0x8abd4e =
        (_0x46d225 == null ? undefined : _0x46d225.columnGroupId) ??
        ((_0x486862 = xt(this._columnGroups["values"](), _0xc85ae4)) == null
          ? undefined
          : _0x486862.columnGroupId) ??
        (_0x5b3189 ? this._resolveActiveColumnGroupId() : null);
    (_0x46d225 !== this._hoveredResizeHandle ||
      _0x8abd4e !== this._hoveredColumnGroupId) &&
      ((this._hoveredResizeHandle = _0x46d225),
      (this._hoveredColumnGroupId = _0x8abd4e),
      _0x46d225 ? this._setResizeCursor() : this._setDefaultCursor(),
      this._makeDirty());
  }
  _refreshColumnResizeState(
    _0x3d9d04 = this._docSkeletonManagerService["getSkeleton"](),
    _0x449442 = false,
  ) {
    if (_0x3d9d04 == null && !_0x449442) return;
    let _0x1ac55b = dt(_0x3d9d04, this._getDocumentPageMarginFallback());
    ((this._columnGroups = new Map(
      [..._0x1ac55b.columnGroups].filter(([_0x51b42d]) =>
        this._canEditColumnGroup(_0x51b42d),
      ),
    )),
      (this._resizeHandles = _0x1ac55b.handles["filter"]((_0x467647) =>
        this._columnGroups["has"](_0x467647.columnGroupId),
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
    let _0x3b2d16 = this._context["scene"];
    _0x3b2d16 != null &&
      _0x3b2d16.afterRender$ &&
      this.disposeWithMe(
        _0x3b2d16.afterRender$["subscribe"]((_0x22210b) => {
          var _0x8c7a88, _0x12ec79;
          let _0x81b2eb =
            _0x22210b == null || (_0x8c7a88 = _0x22210b.getContext) == null
              ? undefined
              : _0x8c7a88.call(_0x22210b);
          if (!_0x81b2eb) return;
          let _0x4dc72c = this._context["scene"],
            _0x30ce27 = [
              ...new Set(
                [
                  (_0x12ec79 = this._resizeDragState) == null
                    ? undefined
                    : _0x12ec79.handle["columnGroupId"],
                  this._hoveredColumnGroupId,
                  this._resolveActiveColumnGroupId(),
                ].filter((_0x279273) => _0x279273 != null),
              ),
            ]
              .map((_0x344738) => this._columnGroups["get"](_0x344738))
              .filter((_0x1d1e89) => _0x1d1e89 != null),
            _0xe1521f = this._resizeDragState
              ? this._columnGroups["get"](
                  this._resizeDragState["handle"].columnGroupId,
                )
              : null;
          (nt(
            _0x81b2eb,
            _0x30ce27.map((_0x7dcf12) => St(_0x7dcf12, _0x4dc72c)),
          ),
            rt(_0x81b2eb, {
              activeDrag: this._resizeDragState
                ? {
                    columnGroup: _0xe1521f ? St(_0xe1521f, _0x4dc72c) : null,
                    delta: this._resizeDragDelta * Q(_0x4dc72c).scaleX,
                    handle: Z(this._resizeDragState["handle"], _0x4dc72c),
                  }
                : null,
              hoveredHandle: this._hoveredResizeHandle
                ? Z(this._hoveredResizeHandle, _0x4dc72c)
                : null,
            }));
        }),
      );
  }
  _setResizeCursor() {
    var _0x39afdc, _0x2117ac;
    (_0x39afdc = (_0x2117ac = this._context["scene"]).setCursor) == null ||
      _0x39afdc.call(_0x2117ac, _0x48741d.EAST_WEST_RESIZE);
  }
  _setDefaultCursor() {
    var _0x589c08, _0x2b5dfe;
    (_0x589c08 = (_0x2b5dfe = this._context["scene"]).setCursor) == null ||
      _0x589c08.call(_0x2b5dfe, _0x48741d.DEFAULT);
  }
  _cancelResizeInteraction() {
    ((this._resizeDragState = null),
      (this._resizeDragDelta = 0),
      (this._hoveredResizeHandle = null),
      (this._hoveredColumnGroupId = null));
  }
  _canEditColumnGroup(_0x595487) {
    return _0x3ab0b4(this._permissionService, this._context["unitId"], [
      ..._0xdf84c8(this._context["unit"], "", "column-group", _0x595487),
      _0x1d8e8c("", "column-group", _0x595487),
    ]);
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
    let _0x2d7004 = this._docParagraphMenuService["activeTarget"];
    return _0x2d7004
      ? (this._resolveColumnGroupIdByRange(_0x2d7004.menuRange) ??
          this._resolveColumnGroupIdByRange(_0x2d7004.moveRange))
      : null;
  }
  _resolveSelectionColumnGroupId() {
    let _0x534286 = this._docSelectionManagerService["getActiveTextRange"]();
    return !_0x534286 || _0x534286.collapsed === false
      ? null
      : this._resolveColumnGroupIdByOffset(_0x534286.startOffset);
  }
  _resolveColumnGroupIdByRange(_0x1f2914) {
    return [
      _0x1f2914.startOffset,
      _0x1f2914.startOffset + 1,
      _0x1f2914.endOffset - 1,
      _0x1f2914.endOffset,
    ].reduce(
      (_0x32511f, _0x2905fd) =>
        _0x32511f ?? this._resolveColumnGroupIdByOffset(_0x2905fd),
      null,
    );
  }
  _resolveColumnGroupIdByOffset(_0x41b166) {
    for (let _0xb0f614 of this._columnGroups["values"]())
      if (
        !(
          typeof _0xb0f614.st != "number" ||
          typeof _0xb0f614.ed != "number" ||
          _0x41b166 < _0xb0f614.st ||
          _0x41b166 > _0xb0f614.ed
        ) &&
        _0xb0f614.columns["find"](
          (_0x45b93a) =>
            typeof _0x45b93a.st == "number" &&
            typeof _0x45b93a.ed == "number" &&
            _0x41b166 >= _0x45b93a.st &&
            _0x41b166 <= _0x45b93a.ed,
        )
      )
        return _0xb0f614.columnGroupId;
    return null;
  }
  _makeDirty() {
    var _0x19721e, _0x4cb6d3, _0x5d94a8, _0xa324f6;
    ((_0x19721e = this._context["mainComponent"]) == null ||
      (_0x4cb6d3 = _0x19721e.makeDirty) == null ||
      _0x4cb6d3.call(_0x19721e, true),
      (_0x5d94a8 = (_0xa324f6 = this._context["scene"]).makeDirty) == null ||
        _0x5d94a8.call(_0xa324f6));
  }
  _consumePointerEvent(_0x5b0ca, _0x11bf0b) {
    var _0xdb89f4;
    (_0x11bf0b.stopPropagation(),
      (_0x11bf0b.skipNextObservers = true),
      (_0xdb89f4 = _0x5b0ca.preventDefault) == null ||
        _0xdb89f4.call(_0x5b0ca));
  }
  _getDocumentPageMarginFallback() {
    var _0x16e649, _0x22a53b, _0x3f4514;
    let _0x22d2ff =
        this._univerInstanceService["getUnit"](
          this._context["unitId"],
          _0x1befda.UNIVER_DOC,
        ) ??
        this._univerInstanceService["getCurrentUnitOfType"](
          _0x1befda.UNIVER_DOC,
        ),
      _0x1c39b4 =
        _0x22d2ff == null || (_0x16e649 = _0x22d2ff.getSnapshot) == null
          ? undefined
          : _0x16e649.call(_0x22d2ff).documentStyle,
      _0x2979b2 = this._context["mainComponent"],
      _0x3c8a32 =
        _0x2979b2 == null || (_0x22a53b = _0x2979b2.getOffsetConfig) == null
          ? undefined
          : _0x22a53b.call(_0x2979b2),
      _0x269711 =
        gt(_0x2979b2 == null ? undefined : _0x2979b2.width) ??
        yt(this._context),
      _0x47da68 =
        _0x1c39b4 == null || (_0x3f4514 = _0x1c39b4.pageSize) == null
          ? undefined
          : _0x3f4514.width,
      _0x39d827 =
        (_0x3c8a32 == null ? undefined : _0x3c8a32.docsLeft) ??
        (_0x269711 != null && _0x47da68 != null && _0x269711 > _0x47da68
          ? (_0x269711 - _0x47da68) / 2
          : undefined),
      _0x42fbb6 =
        (_0x3c8a32 == null ? undefined : _0x3c8a32.docsTop) ??
        (_0x3c8a32 == null ? undefined : _0x3c8a32.pageMarginTop) ??
        (_0x2979b2 == null ? undefined : _0x2979b2.pageMarginTop) ??
        (_0x39d827 == null ? undefined : 20);
    return {
      marginLeft: _0x1c39b4 == null ? undefined : _0x1c39b4.marginLeft,
      marginTop: _0x1c39b4 == null ? undefined : _0x1c39b4.marginTop,
      pageLeft: _0x39d827,
      pageTop: _0x42fbb6,
    };
  }
};
q = B(
  [
    z(1, _0x15f43c(_0x57e65a)),
    z(2, _0x458d88),
    z(3, _0x4341ac),
    z(4, _0x15f43c(_0x5a6347)),
    z(5, _0x15f43c(_0x19dd67)),
    z(6, _0x2c0a4c),
  ],
  q,
);
function dt(_0x206bd2, _0x3abb2d = {}) {
  var _0x1324fc;
  let _0x4299c3 =
      (_0x206bd2 == null || (_0x1324fc = _0x206bd2.getSkeletonData()) == null
        ? undefined
        : _0x1324fc.pages) ?? [],
    _0x5adeb9 = new Map(),
    _0x454425 = [];
  for (let _0x512ab8 of _0x4299c3) {
    var _0x394772;
    for (let _0x43ba74 of ((_0x394772 = _0x512ab8.skeColumnGroups) == null
      ? undefined
      : _0x394772.values()) ?? []) {
      let _0x2482f0 = ft(_0x43ba74, _0x512ab8, _0x3abb2d);
      (_0x5adeb9.set(_0x2482f0.columnGroupId, _0x2482f0),
        _0x454425.push(...Xe(_0x2482f0)));
    }
  }
  return { columnGroups: _0x5adeb9, handles: _0x454425 };
}
function ft(_0x58ba6b, _0x355f46, _0x4f2718) {
  var _0x31f1e5;
  let _0x2a561d = pt(_0x58ba6b, _0x355f46),
    _0x51baa4 =
      _0x2a561d.marginLeft ??
      _0x4f2718.marginLeft ??
      ht(_0x2a561d.pageWidth, _0x58ba6b.width),
    _0x3aca0e =
      _0x2a561d.marginTop ??
      _0x2a561d.originMarginTop ??
      _0x4f2718.marginTop ??
      (_0x2a561d.pageWidth == null ? 0 : 20),
    _0x597356 =
      (_0x4f2718.pageLeft ?? mt(_0x2a561d.parent) ?? _0x2a561d.left ?? 0) +
      _0x51baa4,
    _0x58ff39 =
      (_0x4f2718.pageTop ??
        ((_0x31f1e5 = _0x2a561d.parent) == null ? undefined : _0x31f1e5.top) ??
        0) + _0x3aca0e;
  return {
    ..._0x58ba6b,
    left: _0x58ba6b.left + _0x597356,
    top: _0x58ba6b.top + _0x58ff39,
  };
}
function pt(_0x4db932, _0x12c44) {
  var _0x24abcd;
  let _0x40e1c2 = _0x4db932.parent,
    _0x42b2f8 =
      (_0x24abcd = _0x4db932.columns[0]) == null ? undefined : _0x24abcd.page;
  return {
    left:
      (_0x40e1c2 == null ? undefined : _0x40e1c2.left) ??
      (_0x42b2f8 == null ? undefined : _0x42b2f8.left) ??
      _0x12c44.left,
    marginLeft:
      (_0x40e1c2 == null ? undefined : _0x40e1c2.marginLeft) ??
      (_0x42b2f8 == null ? undefined : _0x42b2f8.marginLeft) ??
      _0x12c44.marginLeft,
    marginTop:
      (_0x40e1c2 == null ? undefined : _0x40e1c2.marginTop) ??
      (_0x42b2f8 == null ? undefined : _0x42b2f8.marginTop) ??
      _0x12c44.marginTop,
    originMarginTop:
      (_0x40e1c2 == null ? undefined : _0x40e1c2.originMarginTop) ??
      (_0x42b2f8 == null ? undefined : _0x42b2f8.originMarginTop) ??
      _0x12c44.originMarginTop,
    pageWidth:
      (_0x40e1c2 == null ? undefined : _0x40e1c2.pageWidth) ??
      (_0x42b2f8 == null ? undefined : _0x42b2f8.pageWidth) ??
      _0x12c44.pageWidth,
    parent:
      (_0x40e1c2 == null ? undefined : _0x40e1c2.parent) ??
      (_0x42b2f8 == null ? undefined : _0x42b2f8.parent) ??
      _0x12c44.parent,
  };
}
function mt(_0x2ef653) {
  return _0x2ef653 && "left" in _0x2ef653 ? _0x2ef653.left : undefined;
}
function ht(_0x4e51e0, _0x5af989) {
  return _0x4e51e0 == null ||
    !Number.isFinite(_0x4e51e0) ||
    _0x4e51e0 <= _0x5af989
    ? 0
    : (_0x4e51e0 - _0x5af989) / 2;
}
function gt(_0x5a8b7b) {
  return _0x5a8b7b != null && Number.isFinite(_0x5a8b7b) && _0x5a8b7b > 0
    ? _0x5a8b7b
    : undefined;
}
function _t(_0x8bd8c0) {
  let { scene: _0xc4854a, mainComponent: _0x5e5851 } = _0x8bd8c0;
  return (_0xc4854a != null && _0xc4854a.onPointerDown$) ||
    (_0xc4854a != null && _0xc4854a.onPointerMove$) ||
    (_0xc4854a != null && _0xc4854a.onPointerUp$)
    ? _0xc4854a
    : (_0x5e5851 ?? _0xc4854a);
}
function vt(_0x3a123a) {
  var _0x7de7e4, _0x386c94;
  return (
    ((_0x7de7e4 = _0x3a123a.engine) == null ||
    (_0x386c94 = _0x7de7e4.getCanvasElement) == null
      ? undefined
      : _0x386c94.call(_0x7de7e4)) ||
    (typeof document > "u" ? null : document.querySelector("canvas"))
  );
}
function yt(_0x194b78) {
  var _0xc2b37e;
  let _0x20ad4a = vt(_0x194b78);
  return gt(
    _0x20ad4a == null || (_0xc2b37e = _0x20ad4a.getBoundingClientRect) == null
      ? undefined
      : _0xc2b37e.call(_0x20ad4a).width,
  );
}
function J(_0x4ca1ea, _0x433a6d, _0x1e3205) {
  var _0x434319, _0x57717c;
  let _0x13c759 =
      ((_0x434319 = _0x1e3205.getAncestorScale) == null
        ? undefined
        : _0x434319.call(_0x1e3205)) ?? {},
    _0x4c88a6 = _0x13c759.scaleX || 1,
    _0xb6d37c = _0x13c759.scaleY || 1,
    _0x19cfd3 =
      (_0x57717c = _0x1e3205.getViewport) == null
        ? undefined
        : _0x57717c.call(_0x1e3205, _0x397875.VIEW_MAIN);
  return _0x19cfd3
    ? {
        x: _0x4ca1ea / _0x4c88a6 + (_0x19cfd3.viewportScrollX ?? 0),
        y: _0x433a6d / _0xb6d37c + (_0x19cfd3.viewportScrollY ?? 0),
      }
    : { x: _0x4ca1ea / _0x4c88a6, y: _0x433a6d / _0xb6d37c };
}
function bt(_0xe17ea3, _0x4fafe6, _0x40dec7) {
  var _0x273584;
  let _0x27b1f4 =
    (_0x273584 = _0x4fafe6.getBoundingClientRect) == null
      ? undefined
      : _0x273584.call(_0x4fafe6);
  return _0x27b1f4
    ? J(
        _0xe17ea3.clientX - (_0x27b1f4.left ?? 0),
        _0xe17ea3.clientY - (_0x27b1f4.top ?? 0),
        _0x40dec7,
      )
    : null;
}
function Y(_0x5301a7) {
  var _0x4edbad, _0x2504e4, _0x3f0acb;
  ((_0x4edbad = _0x5301a7.preventDefault) == null || _0x4edbad.call(_0x5301a7),
    (_0x2504e4 = _0x5301a7.stopPropagation) == null ||
      _0x2504e4.call(_0x5301a7),
    (_0x3f0acb = _0x5301a7.stopImmediatePropagation) == null ||
      _0x3f0acb.call(_0x5301a7));
}
function xt(_0x4d77e8, _0x3e1c9c) {
  for (let _0x1ebc30 of _0x4d77e8) {
    let _0x430a0b = H(_0x1ebc30);
    if (
      _0x3e1c9c.y >= _0x1ebc30.top &&
      _0x3e1c9c.y <= _0x1ebc30.top + _0x430a0b &&
      _0x1ebc30.columns["some"]((_0x546e2a) => {
        let _0x16766d = _0x1ebc30.left + _0x546e2a.left,
          _0x860936 = _0x16766d + _0x546e2a.width;
        return _0x3e1c9c.x >= _0x16766d && _0x3e1c9c.x <= _0x860936;
      })
    )
      return _0x1ebc30;
  }
  return null;
}
function X(_0x1465a9, _0x25247b, _0xa393ed) {
  var _0x560748;
  let { scaleX: _0x1e4ce6, scaleY: _0x322834 } = Q(_0xa393ed),
    _0x326c8e =
      (_0x560748 = _0xa393ed.getViewport) == null
        ? undefined
        : _0x560748.call(_0xa393ed, _0x397875.VIEW_MAIN);
  return _0x326c8e
    ? {
        x: (_0x1465a9 - (_0x326c8e.viewportScrollX ?? 0)) * _0x1e4ce6,
        y: (_0x25247b - (_0x326c8e.viewportScrollY ?? 0)) * _0x322834,
      }
    : { x: _0x1465a9 * _0x1e4ce6, y: _0x25247b * _0x322834 };
}
function St(_0x4f597a, _0x4396b6) {
  let _0x33d2d7 = X(_0x4f597a.left, _0x4f597a.top, _0x4396b6),
    { scaleX: _0xb35583, scaleY: _0xd6d9f4 } = Q(_0x4396b6);
  return {
    ..._0x4f597a,
    columns: _0x4f597a.columns["map"]((_0x17af81) => ({
      ..._0x17af81,
      left: _0x17af81.left * _0xb35583,
      width: _0x17af81.width * _0xb35583,
    })),
    height: H(_0x4f597a) * _0xd6d9f4,
    left: _0x33d2d7.x,
    top: _0x33d2d7.y,
    width: _0x4f597a.width * _0xb35583,
  };
}
function Z(_0x558747, _0x480b8d) {
  let _0x4ce076 = X(_0x558747.left, _0x558747.top, _0x480b8d),
    { scaleY: _0x235219 } = Q(_0x480b8d);
  return {
    ..._0x558747,
    height: _0x558747.height * _0x235219,
    left: _0x4ce076.x,
    top: _0x4ce076.y,
  };
}
function Q(_0xad728a) {
  var _0x440c46;
  let _0x3972aa =
    ((_0x440c46 = _0xad728a.getAncestorScale) == null
      ? undefined
      : _0x440c46.call(_0xad728a)) ?? {};
  return { scaleX: _0x3972aa.scaleX || 1, scaleY: _0x3972aa.scaleY || 1 };
}
let $ = class extends _0x2ea0e5 {
  constructor(
    _0x1ee3ca = Ye,
    _0x18e0f2,
    _0x4b1fb6,
    _0x349548,
    _0x1d819f,
    _0x15c8c7,
  ) {
    (super(),
      (this._config = _0x1ee3ca),
      (this._injector = _0x18e0f2),
      (this._configService = _0x4b1fb6),
      (this._commandService = _0x349548),
      (this._menuManagerService = _0x1d819f),
      (this._renderManagerService = _0x15c8c7));
    let { ..._0x5117cc } = _0x45852a({}, Ye, this._config);
    this._configService["setConfig"]("docs-column-ui.config", _0x5117cc);
  }
  onStarting() {
    (this._injector["add"]([V]),
      this._injector["get"](V),
      [F].forEach((_0x3aeb4f) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x3aeb4f)),
      ),
      this._menuManagerService["mergeMenu"](Ke));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](_0x1befda.UNIVER_DOC, [
        q,
      ]),
    );
  }
};
(K($, "pluginName", "DOCS_COLUMN_UI_PLUGIN"),
  K($, "packageName", qe),
  K($, "version", Je),
  K($, "type", _0x1befda.UNIVER_DOC),
  ($ = B(
    [
      _0x29d060(_0x258520, _0x55ee1f, _0x1b6c8a, _0x44fa37, _0x5dd4f2),
      z(1, _0x15f43c(_0x22937d)),
      z(2, _0x4b47af),
      z(3, _0x458d88),
      z(4, _0x327412),
      z(5, _0x228707),
    ],
    $,
  )));
export {
  Ke as DocsColumnUIMenuSchema,
  $ as UniverDocsColumnUIPlugin,
  Ze as getColumnResizeDragCommandParams,
  Xe as getColumnResizeHandles,
};
