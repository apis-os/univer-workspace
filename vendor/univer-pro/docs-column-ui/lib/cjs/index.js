Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
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
function u(var_core_value_sigE503) {
  let var_core_value_sig48DD = var_core_value_sigE503.get(r.IUniverInstanceService),
    var_core_value_sig5E6A = var_core_value_sigE503.get(i.DocSelectionManagerService);
  return new o["Observable"](var_core_value_sig86D0 => {
    let var_core_value_sig4CD2 = () => {
      var_core_value_sig86D0.next(ne(var_core_value_sigE503, var_core_value_sig48DD, var_core_value_sig5E6A));
    };
    var_core_value_sig4CD2();
    let var_core_value_sig48CA = var_core_value_sig5E6A.textSelection$["subscribe"](var_core_value_sig4CD2),
      var_core_value_sig50AF = var_core_value_sig48DD.focused$["subscribe"](var_core_value_sig4CD2);
    return () => {
      var_core_value_sig48CA.unsubscribe(), var_core_value_sig50AF.unsubscribe();
    };
  });
}
function d(var_core_value_sigB7FC, var_core_value_sig9CD9 = {}) {
  let var_core_value_sigFD0C = var_core_value_sigB7FC.get(r.IUniverInstanceService),
    var_core_value_sig849B = var_core_value_sigB7FC.get(i.DocSelectionManagerService);
  return new o["Observable"](var_core_value_sigA942 => {
    let var_core_value_sigA621 = () => {
      let var_core_value_sigFBFA = h(var_core_value_sigB7FC, var_core_value_sigFD0C, var_core_value_sig849B);
      var_core_value_sigA942.next(!var_core_value_sigFBFA || var_core_value_sigFBFA.columnCount < (var_core_value_sig9CD9.minColumnCount ?? 1) || var_core_value_sig9CD9.maxColumnCount != null && var_core_value_sigFBFA.columnCount > var_core_value_sig9CD9.maxColumnCount);
    };
    var_core_value_sigA621();
    let var_core_value_sigBBFF = var_core_value_sig849B.textSelection$["subscribe"](var_core_value_sigA621),
      var_core_value_sig8889 = var_core_value_sigFD0C.focused$["subscribe"](var_core_value_sigA621);
    return () => {
      var_core_value_sigBBFF.unsubscribe(), var_core_value_sig8889.unsubscribe();
    };
  });
}
function f(var_core_value_sig5F1A) {
  let var_core_value_sigB455 = h(var_core_value_sig5F1A);
  return var_core_value_sigB455 && var_core_value_sigB455.columnCount < e.DOCS_COLUMN_MAX_COLUMN_COUNT ? {
    columnGroupId: var_core_value_sigB455.columnGroupId,
    targetColumnId: var_core_value_sigB455.columnId,
    position: "right"
  } : undefined;
}
function p(var_core_value_sig5241) {
  let var_core_value_sigC6E5 = h(var_core_value_sig5241);
  return var_core_value_sigC6E5 ? {
    columnGroupId: var_core_value_sigC6E5.columnGroupId,
    columnId: var_core_value_sigC6E5.columnId
  } : undefined;
}
function ee(var_core_value_sigCEFB) {
  let var_core_value_sig1537 = h(var_core_value_sigCEFB);
  return var_core_value_sig1537 ? {
    columnGroupId: var_core_value_sig1537.columnGroupId
  } : undefined;
}
function te(var_core_value_sigE4C6) {
  let var_core_value_sig4313 = h(var_core_value_sigE4C6);
  return var_core_value_sig4313 ? {
    columnGroupId: var_core_value_sig4313.columnGroupId,
    widthRatios: Array.from({
      length: var_core_value_sig4313.columnCount
    }, () => 1)
  } : undefined;
}
function m(var_core_value_sigFC87, var_core_value_sig156F) {
  var var_core_value_sigDD51;
  if (!var_core_value_sigFC87 || typeof var_core_value_sig156F != "number") return null;
  for (let var_core_value_sig32F8 of ((var_core_value_sigDD51 = var_core_value_sigFC87.body) == null ? undefined : var_core_value_sigDD51.columnGroups) ?? []) {
    let var_core_value_sigF602 = (0, e.getColumnGroupRangeById)(var_core_value_sigFC87, var_core_value_sig32F8.columnGroupId),
      var_core_value_sig1BBD = var_core_value_sigF602 == null ? undefined : var_core_value_sigF602.columns["find"](var_core_value_sig2AD8 => var_core_value_sig156F > var_core_value_sig2AD8.startOffset && var_core_value_sig156F < var_core_value_sig2AD8.endOffset);
    if (var_core_value_sigF602 && var_core_value_sig1BBD) return {
      columnGroupId: var_core_value_sigF602.columnGroupId,
      columnId: var_core_value_sig1BBD.columnId,
      column: var_core_value_sig1BBD.column,
      columnCount: var_core_value_sigF602.columns["length"]
    };
  }
  return null;
}
function h(var_core_value_sigF057, var_core_value_sig72F6 = var_core_value_sigF057.get(r.IUniverInstanceService), var_core_value_sig9FBA = var_core_value_sigF057.get(i.DocSelectionManagerService)) {
  var var_core_value_sigFE01;
  let var_core_value_sigA2CE = (var_core_value_sigFE01 = var_core_value_sig72F6.getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"])) == null ? undefined : var_core_value_sigFE01.getSnapshot(),
    var_core_value_sig1975 = var_core_value_sig9FBA.getActiveTextRange();
  return m(var_core_value_sigA2CE, (var_core_value_sig1975 == null ? undefined : var_core_value_sig1975.collapsed) === false ? null : var_core_value_sig1975 == null ? undefined : var_core_value_sig1975.startOffset);
}
function ne(var_core_value_sig6EA1, var_core_value_sig029F = var_core_value_sig6EA1.get(r.IUniverInstanceService), var_core_value_sig3767 = var_core_value_sig6EA1.get(i.DocSelectionManagerService)) {
  var var_core_value_sig670B;
  let var_core_value_sig6912 = (var_core_value_sig670B = var_core_value_sig029F.getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"])) == null ? undefined : var_core_value_sig670B.getSnapshot();
  return !var_core_value_sig6912 || !g(var_core_value_sig6EA1, var_core_value_sig6912, var_core_value_sig3767) || re(var_core_value_sig6EA1, var_core_value_sig6912, var_core_value_sig3767);
}
function g(var_core_value_sigE235, var_core_value_sig7664, var_core_value_sig2281 = var_core_value_sigE235.get(i.DocSelectionManagerService)) {
  var var_core_value_sig5E86, var_core_value_sig6998;
  let var_core_value_sigF639 = v(var_core_value_sigE235, var_core_value_sig7664.id),
    var_core_value_sigEAE5 = var_core_value_sigF639 ? [(var_core_value_sig5E86 = var_core_value_sigF639.menuRange) == null ? undefined : var_core_value_sig5E86.startOffset, (var_core_value_sig6998 = var_core_value_sigF639.moveRange) == null ? undefined : var_core_value_sig6998.startOffset] : [],
    var_core_value_sigE94C = var_core_value_sig2281.getActiveTextRange(),
    var_core_value_sig6D47 = (var_core_value_sigE94C == null ? undefined : var_core_value_sigE94C.collapsed) === false ? null : var_core_value_sigE94C == null ? undefined : var_core_value_sigE94C.startOffset,
    var_core_value_sigCB82 = [...var_core_value_sigEAE5, var_core_value_sig6D47].filter(var_core_value_sig5B67 => typeof var_core_value_sig5B67 == "number");
  return var_core_value_sigCB82.length === 0 || var_core_value_sigCB82.some(var_core_value_sig1758 => (0, e.canResolveDocsColumnInsertOffset)(var_core_value_sig7664, var_core_value_sig1758));
}
function re(var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5 = var_core_value_sigCF4E.get(i.DocSelectionManagerService)) {
  let var_core_value_sigDDD7 = v(var_core_value_sigCF4E, var_core_value_sig6CAD.id);
  if (var_core_value_sigDDD7 && (_(var_core_value_sig6CAD, var_core_value_sigDDD7.menuRange) || _(var_core_value_sig6CAD, var_core_value_sigDDD7.moveRange))) return true;
  let var_core_value_sigB2CE = var_core_value_sig8CF5.getActiveTextRange();
  return m(var_core_value_sig6CAD, (var_core_value_sigB2CE == null ? undefined : var_core_value_sigB2CE.collapsed) === false ? null : var_core_value_sigB2CE == null ? undefined : var_core_value_sigB2CE.startOffset) != null;
}
function _(var_core_value_sig443C, var_core_value_sig39B1) {
  return var_core_value_sig39B1 ? [var_core_value_sig39B1.startOffset, var_core_value_sig39B1.startOffset + 1, var_core_value_sig39B1.endOffset - 1, var_core_value_sig39B1.endOffset].some(var_core_value_sig4805 => m(var_core_value_sig443C, var_core_value_sig4805) != null) : false;
}
function v(var_core_value_sig210D, var_core_value_sigB4B4) {
  try {
    let var_core_value_sigE67E = var_core_value_sig210D.get(a.IRenderManagerService).getRenderUnitById(var_core_value_sigB4B4),
      var_core_value_sig2902 = var_core_value_sigE67E == null ? undefined : var_core_value_sigE67E.with(t.DocParagraphMenuService);
    return (var_core_value_sig2902 == null ? undefined : var_core_value_sig2902.activeTarget) ?? null;
  } catch {
    return null;
  }
}
function y(var_core_value_sigD407, var_core_value_sig63F3 = {}) {
  let var_core_value_sig6A71 = var_core_value_sigD407.get(r.IUniverInstanceService).getCurrentUnitOfType(r.UniverInstanceType["UNIVER_DOC"]);
  if (!var_core_value_sig6A71) return null;
  let var_core_value_sig3BF6 = var_core_value_sig6A71.getUnitId(),
    var_core_value_sig38CE = var_core_value_sig6A71.getSnapshot(),
    var_core_value_sig62B7 = ie(var_core_value_sigD407, var_core_value_sig3BF6, var_core_value_sig63F3);
  if (!var_core_value_sig62B7) return null;
  let var_core_value_sig37A8 = (0, e.normalizeDocsColumnInsertOffset)(var_core_value_sig38CE, var_core_value_sig62B7.offset, {
    snapToParagraphEnd: var_core_value_sig63F3.snapToParagraphEnd
  });
  return (0, e.canResolveDocsColumnInsertOffset)(var_core_value_sig38CE, var_core_value_sig37A8) ? {
    offset: var_core_value_sig37A8,
    rawOffset: var_core_value_sig62B7.offset,
    source: var_core_value_sig62B7.source
  } : null;
}
function ie(var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511) {
  if (typeof var_core_value_sig0511.explicitOffset == "number") return {
    offset: var_core_value_sig0511.explicitOffset,
    source: "explicit"
  };
  if (var_core_value_sig0511.consumeContentInsertRange) {
    let var_core_value_sig9989 = (0, i.consumeContentInsertRange)(var_core_value_sigA90D, var_core_value_sig7A3C);
    if (var_core_value_sig9989) return {
      offset: var_core_value_sig9989.startOffset,
      source: "contentInsertRange"
    };
  }
  let var_core_value_sig1F44 = b(var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511.placement ?? "target");
  if (typeof var_core_value_sig1F44 == "number") return {
    offset: var_core_value_sig1F44,
    source: "paragraphTarget"
  };
  let var_core_value_sigCB04 = var_core_value_sigA90D.get(i.DocSelectionManagerService).getActiveTextRange();
  return !var_core_value_sigCB04 || var_core_value_sigCB04.collapsed === false || var_core_value_sigCB04.startOffset !== var_core_value_sigCB04.endOffset ? null : {
    offset: var_core_value_sigCB04.startOffset,
    source: "selection"
  };
}
function b(var_core_value_sig947E, var_core_value_sig4545, var_core_value_sigF39A) {
  var var_core_value_sigF79C, var_core_value_sig2E54;
  let var_core_value_sig7658 = v(var_core_value_sig947E, var_core_value_sig4545);
  if (!var_core_value_sig7658) return null;
  if (var_core_value_sigF39A === "below") {
    var var_core_value_sigDCF5, var_core_value_sigC786;
    return ((var_core_value_sigDCF5 = var_core_value_sig7658.moveRange) == null ? undefined : var_core_value_sigDCF5.endOffset) ?? ((var_core_value_sigC786 = var_core_value_sig7658.menuRange) == null ? undefined : var_core_value_sigC786.endOffset) ?? null;
  }
  return ((var_core_value_sigF79C = var_core_value_sig7658.menuRange) == null ? undefined : var_core_value_sigF79C.startOffset) ?? ((var_core_value_sig2E54 = var_core_value_sig7658.moveRange) == null ? undefined : var_core_value_sig2E54.startOffset) ?? null;
}
const x = {
    id: "doc.command.menu-insert-column-group",
    type: r.CommandType["COMMAND"],
    handler: (var_core_value_sigC0D9, var_core_value_sigF051) => {
      if (!var_core_value_sigF051) return false;
      let var_core_value_sig5825 = y(var_core_value_sigC0D9, {
        explicitOffset: var_core_value_sigF051.offset,
        consumeContentInsertRange: true,
        snapToParagraphEnd: true
      });
      return var_core_value_sig5825 ? var_core_value_sigC0D9.get(r.ICommandService).syncExecuteCommand(e.InsertDocColumnGroupCommand["id"], {
        ...var_core_value_sigF051,
        offset: var_core_value_sig5825.offset
      }) : false;
    }
  },
  S = "docs-column-ui.insert-column-picker",
  ae = Array.from({
    length: 5
  }, (var_core_value_sig4EB7, var_core_value_sig73AF) => var_core_value_sig73AF + 1);
function oe(var_core_value_sig548A) {
  let var_core_value_sigE026 = (0, n.useDependency)(r.LocaleService),
    [var_core_value_sig339E, var_core_value_sig7550] = (0, s.useState)(3),
    var_core_value_sig2983 = (0, s.useRef)(false),
    var_core_value_sigE1B0 = var_core_value_sig698E => {
      var var_core_value_sig2809;
      (var_core_value_sig2809 = var_core_value_sig548A.onChange) == null || var_core_value_sig2809.call(var_core_value_sig548A, String(var_core_value_sig698E));
    };
  return (0, c.jsxs)("section", {
    className: "univer-py-2",
    "data-u-comp": S,
    onClick: var_core_value_sig2DAB => var_core_value_sig2DAB.stopPropagation(),
    onMouseDown: var_core_value_sig877E => var_core_value_sig877E.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: 8,
      boxSizing: "border-box",
      color: "#1f2329",
      display: "block",
      width: 254
    },
    children: [(0, c.jsxs)("div", {
      style: {
        alignItems: "center",
        display: "flex",
        fontSize: 14,
        justifyContent: "space-between",
        lineHeight: "20px",
        marginBottom: 22,
        whiteSpace: "nowrap"
      },
      children: [(0, c.jsx)("span", {
        style: {
          color: "#4e5969"
        },
        children: var_core_value_sigE026.t("docs-column-ui.menu.selectColumnCount")
      }), (0, c.jsx)("span", {
        style: {
          color: "#1f2329",
          fontWeight: 500,
          minWidth: 16,
          textAlign: "right"
        },
        children: var_core_value_sig339E
      })]
    }), (0, c.jsx)("div", {
      "aria-label": var_core_value_sigE026.t("docs-column-ui.menu.selectColumnCount"),
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
        width: 254
      },
      children: ae.map(var_core_value_sig20C8 => {
        let var_core_value_sigE9A7 = Math.max(2, var_core_value_sig20C8),
          var_core_value_sigBECE = var_core_value_sig20C8 <= var_core_value_sig339E;
        return (0, c.jsx)("button", {
          type: "button",
          "aria-label": var_core_value_sigE026.t("docs-column-ui.menu.insertColumnCount", String(var_core_value_sigE9A7)),
          onClick: () => {
            if (var_core_value_sig2983.current) {
              var_core_value_sig2983.current = false;
              return;
            }
            var_core_value_sigE1B0(var_core_value_sigE9A7);
          },
          onMouseDown: var_core_value_sigF704 => {
            var_core_value_sigF704.preventDefault(), var_core_value_sigF704.stopPropagation(), var_core_value_sig2983.current = true, var_core_value_sigE1B0(var_core_value_sigE9A7);
          },
          onMouseEnter: () => var_core_value_sig7550(var_core_value_sigE9A7),
          style: {
            background: "transparent",
            border: 0,
            boxSizing: "border-box",
            cursor: "pointer",
            flex: 1,
            minWidth: 0,
            padding: 0
          },
          children: (0, c.jsx)("span", {
            style: {
              backgroundColor: var_core_value_sigBECE ? "#8fafef" : "#edf0f4",
              display: "block",
              height: "100%",
              transition: "background-color 120ms ease",
              width: "100%"
            }
          })
        }, var_core_value_sig20C8);
      })
    })]
  });
}
function C(var_core_value_sigD4FF) {
  return {
    id: x.id,
    commandId: x.id,
    selectionsCommandId: x.id,
    params: () => {
      var var_core_value_sig1B22;
      return {
        columnCount: 2,
        offset: (var_core_value_sig1B22 = y(var_core_value_sigD4FF, {
          consumeContentInsertRange: true,
          snapToParagraphEnd: true
        })) == null ? undefined : var_core_value_sig1B22.offset
      };
    },
    type: n.MenuItemType["BUTTON_SELECTOR"],
    icon: "GridIcon",
    title: "docs-column-ui.menu.column",
    tooltip: "docs-column-ui.menu.column",
    hidden$: u(var_core_value_sigD4FF),
    selections: [{
      label: {
        name: S,
        hoverable: false,
        selectable: false
      }
    }]
  };
}
function w(var_core_value_sig1E5B) {
  return {
    ...C(var_core_value_sig1E5B),
    id: x.id + ".below",
    commandId: x.id,
    selectionsCommandId: x.id,
    hidden$: u(var_core_value_sig1E5B),
    params: () => {
      var var_core_value_sig7F72;
      return {
        offset: (var_core_value_sig7F72 = y(var_core_value_sig1E5B, {
          consumeContentInsertRange: true,
          placement: "below",
          snapToParagraphEnd: true
        })) == null ? undefined : var_core_value_sig7F72.offset
      };
    }
  };
}
function se(var_core_value_sigB680) {
  return {
    id: e.AddDocColumnCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "InsertDoubleIcon",
    title: "docs-column-ui.menu.addColumn",
    tooltip: "docs-column-ui.menu.addColumn",
    hidden$: d(var_core_value_sigB680, {
      maxColumnCount: e.DOCS_COLUMN_MAX_COLUMN_COUNT - 1
    }),
    params: () => f(var_core_value_sigB680)
  };
}
function ce(var_core_value_sig1F64) {
  return {
    id: e.DeleteDocColumnCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "DeleteIcon",
    title: "docs-column-ui.menu.deleteColumn",
    tooltip: "docs-column-ui.menu.deleteColumn",
    hidden$: d(var_core_value_sig1F64, {
      minColumnCount: 3
    }),
    params: () => p(var_core_value_sig1F64)
  };
}
function le(var_core_value_sigDD1C) {
  return {
    id: e.DeleteDocColumnGroupCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "DeleteIcon",
    title: "docs-column-ui.menu.deleteColumnGroup",
    tooltip: "docs-column-ui.menu.deleteColumnGroup",
    hidden$: d(var_core_value_sigDD1C),
    params: () => ee(var_core_value_sigDD1C)
  };
}
function ue(var_core_value_sig2C39) {
  return {
    id: e.ResizeDocColumnGroupCommand["id"],
    type: n.MenuItemType["BUTTON"],
    icon: "HorizontallyIcon",
    title: "docs-column-ui.menu.equalWidth",
    tooltip: "docs-column-ui.menu.equalWidth",
    hidden$: d(var_core_value_sig2C39),
    params: () => te(var_core_value_sig2C39)
  };
}
n.ContextMenuPosition["PARAGRAPH"];
const T = {
  [n.ContextMenuPosition["PARAGRAPH"]]: {
    [n.ContextMenuGroup["LAYOUT"]]: {
      [t.INSERT_BELLOW_MENU_ID]: {
        [x.id + ".below"]: {
          order: 3,
          menuItemFactory: w
        }
      }
    },
    [t.EMPTY_PARAGRAPH_MENU_ID]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [x.id]: {
          order: 3,
          menuItemFactory: C
        }
      }
    },
    [t.DOC_CONTENT_INSERT_MENU_ID]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [x.id + ".below"]: {
          order: 3,
          menuItemFactory: w
        }
      }
    },
    [t.DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
      insert: {
        [x.id]: {
          order: 1,
          menuItemFactory: C
        }
      }
    },
    [t.DOC_PARAGRAPH_T_EDIT_MENU_ID]: {
      quickBottom: {
        [e.AddDocColumnCommand["id"]]: {
          order: 6,
          menuItemFactory: se
        },
        [e.DeleteDocColumnCommand["id"]]: {
          order: 7,
          menuItemFactory: ce
        },
        [e.DeleteDocColumnGroupCommand["id"]]: {
          order: 8,
          menuItemFactory: le
        },
        [e.ResizeDocColumnGroupCommand["id"]]: {
          order: 9,
          menuItemFactory: ue
        }
      }
    },
    [t.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
      insert: {
        [x.id + ".below"]: {
          order: 1,
          menuItemFactory: w
        }
      }
    },
    [t.DOC_TABLE_BLOCK_MENU_ID]: {
      [n.ContextMenuGroup["LAYOUT"]]: {
        [t.INSERT_BELLOW_MENU_ID]: {
          [x.id + ".below"]: {
            order: 3,
            menuItemFactory: w
          }
        }
      }
    }
  }
};
var de = "@univerjs-pro/docs-column-ui",
  fe = "1.0.0-insiders.20260907-70fc579";
const E = {};
function D(var_core_value_sigB7D1, var_core_value_sig64F0) {
  return function (var_core_value_sig7B2A, var_core_value_sig06CD) {
    var_core_value_sig64F0(var_core_value_sig7B2A, var_core_value_sig06CD, var_core_value_sigB7D1);
  };
}
function O(var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig2EAD) {
  var var_core_value_sig6774 = arguments.length,
    var_core_value_sig340D = var_core_value_sig6774 < 3 ? var_core_value_sig3141 : var_core_value_sig2EAD === null ? var_core_value_sig2EAD = Object.getOwnPropertyDescriptor(var_core_value_sig3141, var_core_value_sig2162) : var_core_value_sig2EAD,
    var_core_value_sig82D4;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig340D = Reflect.decorate(var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig2EAD);else {
    for (var var_core_value_sigBDE4 = var_core_value_sig85B1.length - 1; var_core_value_sigBDE4 >= 0; var_core_value_sigBDE4--) (var_core_value_sig82D4 = var_core_value_sig85B1[var_core_value_sigBDE4]) && (var_core_value_sig340D = (var_core_value_sig6774 < 3 ? var_core_value_sig82D4(var_core_value_sig340D) : var_core_value_sig6774 > 3 ? var_core_value_sig82D4(var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig340D) : var_core_value_sig82D4(var_core_value_sig3141, var_core_value_sig2162)) || var_core_value_sig340D);
  }
  return var_core_value_sig6774 > 3 && var_core_value_sig340D && Object.defineProperty(var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig340D), var_core_value_sig340D;
}
let k = class extends r.Disposable {
  constructor(var_core_value_sigA5F1) {
    super(), this._componentManager = var_core_value_sigA5F1, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](S, oe));
  }
};
k = O([D(0, (0, r.Inject)(n.ComponentManager))], k);
function A(var_core_value_sig7DF1) {
  return Math.max(var_core_value_sig7DF1.height, 72);
}
function j(var_core_value_sigDC86) {
  let var_core_value_sig0B0C = A(var_core_value_sigDC86);
  return var_core_value_sigDC86.columns["slice"](0, -1).map((var_core_value_sig97A2, var_core_value_sig07E9) => {
    let var_core_value_sig4F59 = var_core_value_sigDC86.columns[var_core_value_sig07E9 + 1],
      var_core_value_sigF564 = var_core_value_sig97A2.left + var_core_value_sig97A2.width + (var_core_value_sig4F59.left - var_core_value_sig97A2.left - var_core_value_sig97A2.width) / 2;
    return {
      columnGroupId: var_core_value_sigDC86.columnGroupId,
      separatorIndex: var_core_value_sig07E9,
      left: var_core_value_sigDC86.left + var_core_value_sigF564,
      top: var_core_value_sigDC86.top,
      height: var_core_value_sig0B0C
    };
  });
}
function M(var_core_value_sigA39E, var_core_value_sigBBEE, var_core_value_sig011D) {
  let var_core_value_sig6167 = (0, e.calculateResizeDragWidthRatios)({
    source: var_core_value_sigA39E.columnGroupSource,
    availableWidth: var_core_value_sigA39E.width,
    separatorIndex: var_core_value_sigBBEE,
    delta: var_core_value_sig011D
  });
  return var_core_value_sig6167 ? {
    columnGroupId: var_core_value_sigA39E.columnGroupId,
    widthRatios: var_core_value_sig6167
  } : null;
}
function N(var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig7827, var_core_value_sig652C = 12) {
  let var_core_value_sig7E32 = var_core_value_sig652C / 2,
    var_core_value_sig4C07 = null,
    var_core_value_sig79AB = 1 / 0;
  for (let var_core_value_sig8CFA of var_core_value_sig65A1) {
    let var_core_value_sig2BCF = Math.abs(var_core_value_sig7F19 - var_core_value_sig8CFA.left);
    var_core_value_sig2BCF > var_core_value_sig7E32 || var_core_value_sig7827 < var_core_value_sig8CFA.top || var_core_value_sig7827 >= var_core_value_sig8CFA.top + var_core_value_sig8CFA.height || var_core_value_sig2BCF < var_core_value_sig79AB && (var_core_value_sig4C07 = var_core_value_sig8CFA, var_core_value_sig79AB = var_core_value_sig2BCF);
  }
  return var_core_value_sig4C07;
}
function pe(var_core_value_sig8E74, var_core_value_sig104C) {
  return {
    handle: var_core_value_sig8E74,
    startX: var_core_value_sig104C.x
  };
}
function P(var_core_value_sig841D, var_core_value_sig90CB) {
  return var_core_value_sig90CB.x - var_core_value_sig841D.startX;
}
const F = 0.36,
  I = 0.9;
function L(var_core_value_sigBDF5, var_core_value_sigACC6) {
  var_core_value_sigACC6.length !== 0 && (var_core_value_sigBDF5.save(), var_core_value_sigBDF5.fillStyle = "#eef1f5", var_core_value_sigBDF5.globalAlpha = 0.48, var_core_value_sigBDF5.globalCompositeOperation = "multiply", var_core_value_sigACC6.forEach(var_core_value_sig2E11 => {
    var var_core_value_sig5B69;
    let var_core_value_sigB098 = A(var_core_value_sig2E11);
    ((var_core_value_sig5B69 = var_core_value_sig2E11.columns) != null && var_core_value_sig5B69.length ? var_core_value_sig2E11.columns : [{
      left: 0,
      width: var_core_value_sig2E11.width
    }]).forEach(var_core_value_sig0D69 => {
      me(var_core_value_sigBDF5, var_core_value_sig2E11.left + var_core_value_sig0D69.left, var_core_value_sig2E11.top, var_core_value_sig0D69.width, var_core_value_sigB098);
    });
  }), var_core_value_sigBDF5.restore());
}
function R(var_core_value_sig1614, var_core_value_sig85C3 = {}) {
  var var_core_value_sigB996;
  !var_core_value_sig85C3.hoveredHandle && !var_core_value_sig85C3.activeDrag || (var_core_value_sig1614.save(), var_core_value_sig1614.fillStyle = "#1a73e8", var_core_value_sig1614.globalAlpha = F, var_core_value_sig85C3.hoveredHandle && (var_core_value_sig1614.globalAlpha = I, z(var_core_value_sig1614, var_core_value_sig85C3.hoveredHandle["left"], var_core_value_sig85C3.hoveredHandle["top"], var_core_value_sig85C3.hoveredHandle["height"])), var_core_value_sig85C3.activeDrag && (var_core_value_sig1614.globalAlpha = F, z(var_core_value_sig1614, var_core_value_sig85C3.activeDrag["handle"].left, var_core_value_sig85C3.activeDrag["handle"].top, var_core_value_sig85C3.activeDrag["handle"].height), var_core_value_sig1614.globalAlpha = I, z(var_core_value_sig1614, var_core_value_sig85C3.activeDrag["handle"].left + var_core_value_sig85C3.activeDrag["delta"], var_core_value_sig85C3.activeDrag["handle"].top, var_core_value_sig85C3.activeDrag["handle"].height)), var_core_value_sig1614.restore(), (var_core_value_sigB996 = var_core_value_sig85C3.activeDrag) != null && var_core_value_sigB996.columnGroup && he(var_core_value_sig1614, var_core_value_sig85C3.activeDrag["columnGroup"], var_core_value_sig85C3.activeDrag["handle"].separatorIndex, var_core_value_sig85C3.activeDrag["delta"]));
}
function z(var_core_value_sig4BBA, var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542) {
  var_core_value_sig4BBA.fillRect(var_core_value_sig6201 - 2 / 2, var_core_value_sig5151, 2, var_core_value_sigB542);
}
function me(var_core_value_sigBB6C, var_core_value_sigE2BF, var_core_value_sigB8C7, var_core_value_sigA56E, var_core_value_sig1998) {
  if (!var_core_value_sigBB6C.beginPath || !var_core_value_sigBB6C.roundRect || !var_core_value_sigBB6C.fill) {
    var_core_value_sigBB6C.fillRect(var_core_value_sigE2BF, var_core_value_sigB8C7, var_core_value_sigA56E, var_core_value_sig1998);
    return;
  }
  var_core_value_sigBB6C.beginPath(), var_core_value_sigBB6C.roundRect(var_core_value_sigE2BF, var_core_value_sigB8C7, var_core_value_sigA56E, var_core_value_sig1998, 8), var_core_value_sigBB6C.fill();
}
function he(var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F, var_core_value_sig66C0) {
  if (!var_core_value_sigFF19.fillText) return;
  let var_core_value_sig9D15 = ge(var_core_value_sig43B8, var_core_value_sigD98F, var_core_value_sig66C0),
    var_core_value_sigB785 = var_core_value_sig9D15.reduce((var_core_value_sigCE71, var_core_value_sig21D8) => var_core_value_sigCE71 + Math.max(0, var_core_value_sig21D8.width), 0);
  if (var_core_value_sigB785 <= 0) return;
  let var_core_value_sig130F = _e(var_core_value_sig9D15.map(var_core_value_sig2B65 => Math.max(0, var_core_value_sig2B65.width) / var_core_value_sigB785 * 100));
  var_core_value_sigFF19.save(), var_core_value_sigFF19.font = "600 12px Arial, sans-serif", var_core_value_sigFF19.textBaseline = "middle", var_core_value_sigFF19.globalAlpha = 1, var_core_value_sigFF19.globalCompositeOperation = "source-over", var_core_value_sig9D15.forEach((var_core_value_sigD7EA, var_core_value_sigB33B) => {
    var var_core_value_sig24B9;
    let var_core_value_sigE627 = var_core_value_sig130F[var_core_value_sigB33B] + "%",
      var_core_value_sigEF3E = (((var_core_value_sig24B9 = var_core_value_sigFF19.measureText) == null ? undefined : var_core_value_sig24B9.call(var_core_value_sigFF19, var_core_value_sigE627).width) ?? var_core_value_sigE627.length * 7) + 12,
      var_core_value_sig273D = var_core_value_sig43B8.left + var_core_value_sigD7EA.left + var_core_value_sigD7EA.width - 8 - var_core_value_sigEF3E,
      var_core_value_sig9A0D = var_core_value_sig43B8.top + 4;
    var_core_value_sigFF19.fillStyle = "#9ca3af", ve(var_core_value_sigFF19, var_core_value_sig273D, var_core_value_sig9A0D, var_core_value_sigEF3E, 22, 5), var_core_value_sigFF19.fillStyle = "#ffffff", var_core_value_sigFF19.fillText(var_core_value_sigE627, var_core_value_sig273D + 6, var_core_value_sig9A0D + 22 / 2);
  }), var_core_value_sigFF19.restore();
}
function ge(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F) {
  var var_core_value_sigDE3D;
  let var_core_value_sigF175 = ((var_core_value_sigDE3D = var_core_value_sigC0E3.columns) != null && var_core_value_sigDE3D.length ? var_core_value_sigC0E3.columns : [{
    left: 0,
    width: var_core_value_sigC0E3.width
  }]).map(var_core_value_sigA319 => ({
    ...var_core_value_sigA319
  }));
  if (var_core_value_sig52F7 < 0 || var_core_value_sig52F7 >= var_core_value_sigF175.length - 1) return var_core_value_sigF175;
  var_core_value_sigF175[var_core_value_sig52F7].width = Math.max(0, var_core_value_sigF175[var_core_value_sig52F7].width + var_core_value_sig866F), var_core_value_sigF175[var_core_value_sig52F7 + 1].width = Math.max(0, var_core_value_sigF175[var_core_value_sig52F7 + 1].width - var_core_value_sig866F);
  for (let var_core_value_sig2D58 = var_core_value_sig52F7 + 1; var_core_value_sig2D58 < var_core_value_sigF175.length; var_core_value_sig2D58++) {
    var var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0;
    let var_core_value_sig480E = var_core_value_sigF175[var_core_value_sig2D58 - 1],
      var_core_value_sig26DB = Math.max(0, ((var_core_value_sig6A18 = var_core_value_sigC0E3.columns) == null ? undefined : var_core_value_sig6A18[var_core_value_sig2D58].left) ?? var_core_value_sigF175[var_core_value_sig2D58].left) - Math.max(0, (((var_core_value_sig4E3D = var_core_value_sigC0E3.columns) == null ? undefined : var_core_value_sig4E3D[var_core_value_sig2D58 - 1].left) ?? var_core_value_sig480E.left) + (((var_core_value_sig49B0 = var_core_value_sigC0E3.columns) == null ? undefined : var_core_value_sig49B0[var_core_value_sig2D58 - 1].width) ?? var_core_value_sig480E.width));
    var_core_value_sigF175[var_core_value_sig2D58].left = var_core_value_sig480E.left + var_core_value_sig480E.width + var_core_value_sig26DB;
  }
  return var_core_value_sigF175;
}
function _e(var_core_value_sig2547) {
  let var_core_value_sigBCA9 = var_core_value_sig2547.map(var_core_value_sig223F => Math.round(var_core_value_sig223F)),
    var_core_value_sig4CDF = 100 - var_core_value_sigBCA9.reduce((var_core_value_sigD749, var_core_value_sigCFFA) => var_core_value_sigD749 + var_core_value_sigCFFA, 0);
  return var_core_value_sigBCA9.length > 0 && (var_core_value_sigBCA9[var_core_value_sigBCA9.length - 1] += var_core_value_sig4CDF), var_core_value_sigBCA9;
}
function ve(var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B, var_core_value_sig7D1B) {
  if (!var_core_value_sig3F79.beginPath || !var_core_value_sig3F79.roundRect || !var_core_value_sig3F79.fill) {
    var_core_value_sig3F79.fillRect(var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B);
    return;
  }
  var_core_value_sig3F79.beginPath(), var_core_value_sig3F79.roundRect(var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B, var_core_value_sig7D1B), var_core_value_sig3F79.fill();
}
function B(var_core_value_sig7BE0) {
  "@babel/helpers - typeof";

  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig58C1) {
    return typeof var_core_value_sig58C1;
  } : function (var_core_value_sig5090) {
    return var_core_value_sig5090 && typeof Symbol == "function" && var_core_value_sig5090.constructor === Symbol && var_core_value_sig5090 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig5090;
  }, B(var_core_value_sig7BE0);
}
function ye(var_core_value_sig7D40, var_core_value_sig6C7E) {
  if (B(var_core_value_sig7D40) != "object" || !var_core_value_sig7D40) return var_core_value_sig7D40;
  var var_core_value_sig68BE = var_core_value_sig7D40[Symbol.toPrimitive];
  if (var_core_value_sig68BE !== undefined) {
    var var_core_value_sig04C6 = var_core_value_sig68BE.call(var_core_value_sig7D40, var_core_value_sig6C7E || "default");
    if (B(var_core_value_sig04C6) != "object") return var_core_value_sig04C6;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig6C7E === "string" ? String : Number)(var_core_value_sig7D40);
}
function be(var_core_value_sigCA05) {
  var var_core_value_sig2F2B = ye(var_core_value_sigCA05, "string");
  return B(var_core_value_sig2F2B) == "symbol" ? var_core_value_sig2F2B : var_core_value_sig2F2B + "";
}
function V(var_core_value_sig70AF, var_core_value_sigD04E, var_core_value_sigB99B) {
  return (var_core_value_sigD04E = be(var_core_value_sigD04E)) in var_core_value_sig70AF ? Object.defineProperty(var_core_value_sig70AF, var_core_value_sigD04E, {
    value: var_core_value_sigB99B,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig70AF[var_core_value_sigD04E] = var_core_value_sigB99B, var_core_value_sig70AF;
}
let H = class extends r.Disposable {
  constructor(var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A, var_core_value_sig6418, var_core_value_sig1896, var_core_value_sig0285, var_core_value_sig777D) {
    super(), this._context = var_core_value_sigC368, this._docSkeletonManagerService = var_core_value_sigAD56, this._commandService = var_core_value_sigDB4A, this._univerInstanceService = var_core_value_sig6418, this._docSelectionManagerService = var_core_value_sig1896, this._docParagraphMenuService = var_core_value_sig0285, this._permissionService = var_core_value_sig777D, V(this, "_resizeHandles", []), V(this, "_columnGroups", new Map()), V(this, "_resizeDragState", null), V(this, "_resizeDragDelta", 0), V(this, "_hoveredResizeHandle", null), V(this, "_hoveredColumnGroupId", null), V(this, "_canvasPointerEventsInitialized", false), V(this, "_canvasPointerEventsRetryCount", 0), !(0, r.isInternalEditorID)(this._context["unitId"]) && (this.disposeWithMe(this._docSkeletonManagerService["currentSkeleton$"].subscribe(var_core_value_sigF0F9 => {
      this._refreshColumnResizeState(var_core_value_sigF0F9 ?? undefined, true), this._makeDirty();
    })), this.disposeWithMe(this._docSkeletonManagerService["currentSkeleton$"].pipe((0, o.switchMap)(var_core_value_sig1A0F => (var_core_value_sig1A0F == null ? undefined : var_core_value_sig1A0F.dirty$) ?? o.EMPTY)).subscribe(() => {
      this._refreshColumnResizeState(), this._makeDirty();
    })), this.disposeWithMe(this._docSelectionManagerService["textSelection$"].subscribe(({
      unitId: var_core_value_sigFBA4
    }) => {
      var_core_value_sigFBA4 === this._context["unitId"] && (this._refreshColumnResizeState(), this._makeDirty());
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      this._cancelResizeInteraction(), this._refreshColumnResizeState(), this._setDefaultCursor(), this._makeDirty();
    })), this._initPointerEvents(), this._initCanvasRender());
  }
  getResizeHandles() {
    return this._resizeHandles;
  }
  async resizeColumnFromHandle(var_core_value_sig3F4C, var_core_value_sigD65A) {
    if (!this._canEditColumnGroup(var_core_value_sig3F4C.columnGroupId)) return false;
    let var_core_value_sig5A13 = this._columnGroups["get"](var_core_value_sig3F4C.columnGroupId);
    if (!var_core_value_sig5A13) return false;
    let var_core_value_sigF593 = M(var_core_value_sig5A13, var_core_value_sig3F4C.separatorIndex, var_core_value_sigD65A);
    return var_core_value_sigF593 ? !!(await this._commandService["executeCommand"](e.ResizeDocColumnGroupCommand["id"], var_core_value_sigF593)) : false;
  }
  startResizeDragAtPoint(var_core_value_sig3607) {
    let var_core_value_sigB512 = N(this._resizeHandles, var_core_value_sig3607.x, var_core_value_sig3607.y);
    return var_core_value_sigB512 ? (this._resizeDragState = pe(var_core_value_sigB512, var_core_value_sig3607), this._resizeDragDelta = 0, true) : false;
  }
  async releaseResizeDragAtPoint(var_core_value_sigF2E6, var_core_value_sig34C8) {
    let var_core_value_sigB744 = this._resizeDragState;
    return this._resizeDragState = null, this._resizeDragDelta = 0, !var_core_value_sigB744 || !var_core_value_sig34C8 ? false : this.resizeColumnFromHandle(var_core_value_sigB744.handle, P(var_core_value_sigB744, var_core_value_sigF2E6));
  }
  _initPointerEvents() {
    var var_core_value_sigEAE2, var_core_value_sigE68A;
    let var_core_value_sig3E68 = Te(this._context);
    this._initCanvasPointerEvents(), !(!(var_core_value_sig3E68 != null && var_core_value_sig3E68.onPointerDown$) || !var_core_value_sig3E68.onPointerUp$) && (this.disposeWithMe(var_core_value_sig3E68.onPointerDown$["subscribeEvent"]({
      next: ([var_core_value_sig4383, var_core_value_sig186C]) => {
        var var_core_value_sigD955, var_core_value_sig48BD;
        let var_core_value_sig429F = K(var_core_value_sig4383.offsetX, var_core_value_sig4383.offsetY, this._context["scene"]);
        this.startResizeDragAtPoint(var_core_value_sig429F) && (this._hoveredResizeHandle = ((var_core_value_sigD955 = this._resizeDragState) == null ? undefined : var_core_value_sigD955.handle) ?? null, this._hoveredColumnGroupId = ((var_core_value_sig48BD = this._resizeDragState) == null ? undefined : var_core_value_sig48BD.handle["columnGroupId"]) ?? null, this._setResizeCursor(), this._consumePointerEvent(var_core_value_sig4383, var_core_value_sig186C), this._makeDirty());
      }
    })), this.disposeWithMe(((var_core_value_sigEAE2 = var_core_value_sig3E68.onPointerMove$) == null ? undefined : var_core_value_sigEAE2.subscribeEvent({
      next: ([var_core_value_sigF62A, var_core_value_sig8178]) => {
        if (!this._resizeDragState) {
          this._updateHoverAtPoint(K(var_core_value_sigF62A.offsetX, var_core_value_sigF62A.offsetY, this._context["scene"]));
          return;
        }
        let var_core_value_sigE9ED = K(var_core_value_sigF62A.offsetX, var_core_value_sigF62A.offsetY, this._context["scene"]);
        this._resizeDragDelta = P(this._resizeDragState, var_core_value_sigE9ED), this._setResizeCursor(), this._consumePointerEvent(var_core_value_sigF62A, var_core_value_sig8178), this._makeDirty();
      }
    })) ?? {
      dispose: () => undefined
    }), this.disposeWithMe(((var_core_value_sigE68A = var_core_value_sig3E68.onPointerLeave$) == null ? undefined : var_core_value_sigE68A.subscribeEvent({
      next: ([var_core_value_sigB577, var_core_value_sig9572]) => {
        if (!(!this._resizeDragState && !this._hoveredResizeHandle && !this._hoveredColumnGroupId)) {
          if (!this._resizeDragState && this._retainActiveColumnHoverOnLeave()) {
            this._setDefaultCursor(), this._consumePointerEvent(var_core_value_sigB577, var_core_value_sig9572), this._makeDirty();
            return;
          }
          this._cancelResizeInteraction(), this._setDefaultCursor(), this._consumePointerEvent(var_core_value_sigB577, var_core_value_sig9572), this._makeDirty();
        }
      }
    })) ?? {
      dispose: () => undefined
    }), this.disposeWithMe(var_core_value_sig3E68.onPointerUp$["subscribeEvent"]({
      next: ([var_core_value_sigD873, var_core_value_sigA12B]) => {
        if (!this._resizeDragState) return;
        let var_core_value_sigF230 = K(var_core_value_sigD873.offsetX, var_core_value_sigD873.offsetY, this._context["scene"]);
        this.releaseResizeDragAtPoint(var_core_value_sigF230, true), this._consumePointerEvent(var_core_value_sigD873, var_core_value_sigA12B), this._makeDirty();
      }
    })));
  }
  _initCanvasPointerEvents() {
    if (this._canvasPointerEventsInitialized) return;
    let var_core_value_sigF4C5 = G(this._context);
    if (!(var_core_value_sigF4C5 != null && var_core_value_sigF4C5.addEventListener) || !var_core_value_sigF4C5.removeEventListener) {
      this._retryInitCanvasPointerEvents();
      return;
    }
    this._canvasPointerEventsInitialized = true;
    let var_core_value_sig5410 = var_core_value_sig09B8 => {
        this._resizeDragState || this._updateHoverAtPoint(K(var_core_value_sig09B8.offsetX, var_core_value_sig09B8.offsetY, this._context["scene"]));
      },
      var_core_value_sig492F = var_core_value_sig6F91 => {
        let var_core_value_sigF9C7 = q(var_core_value_sig6F91, var_core_value_sigF4C5, this._context["scene"]);
        if (var_core_value_sigF9C7) {
          if (this._resizeDragState) {
            this._resizeDragDelta = P(this._resizeDragState, var_core_value_sigF9C7), this._setResizeCursor(), J(var_core_value_sig6F91), this._makeDirty();
            return;
          }
          this._updateHoverAtPoint(var_core_value_sigF9C7, this._resolveActiveParagraphMenuColumnGroupId() != null);
        }
      },
      var_core_value_sig8EA0 = var_core_value_sig8895 => {
        var var_core_value_sigC80B, var_core_value_sig284F;
        let var_core_value_sigE154 = K(var_core_value_sig8895.offsetX, var_core_value_sig8895.offsetY, this._context["scene"]);
        this.startResizeDragAtPoint(var_core_value_sigE154) && (this._hoveredResizeHandle = ((var_core_value_sigC80B = this._resizeDragState) == null ? undefined : var_core_value_sigC80B.handle) ?? null, this._hoveredColumnGroupId = ((var_core_value_sig284F = this._resizeDragState) == null ? undefined : var_core_value_sig284F.handle["columnGroupId"]) ?? null, this._setResizeCursor(), J(var_core_value_sig8895), this._makeDirty());
      },
      var_core_value_sigA6F6 = var_core_value_sig4632 => {
        if (!this._resizeDragState) return;
        let var_core_value_sig12F2 = q(var_core_value_sig4632, var_core_value_sigF4C5, this._context["scene"]);
        if (!var_core_value_sig12F2) {
          this._cancelResizeInteraction(), this._setDefaultCursor(), this._makeDirty();
          return;
        }
        this.releaseResizeDragAtPoint(var_core_value_sig12F2, true), J(var_core_value_sig4632), this._makeDirty();
      },
      var_core_value_sigCDDA = () => {
        if (!this._resizeDragState && !(!this._hoveredResizeHandle && !this._hoveredColumnGroupId)) {
          if (this._retainActiveColumnHoverOnLeave()) {
            this._setDefaultCursor(), this._makeDirty();
            return;
          }
          this._hoveredResizeHandle = null, this._hoveredColumnGroupId = null, this._setDefaultCursor(), this._makeDirty();
        }
      },
      var_core_value_sigE243 = var_core_value_sigF4C5.ownerDocument,
      var_core_value_sig74A8 = var_core_value_sigE243 == null ? undefined : var_core_value_sigE243.defaultView;
    var_core_value_sigF4C5.addEventListener("pointerdown", var_core_value_sig8EA0, true), var_core_value_sigF4C5.addEventListener("mousedown", var_core_value_sig8EA0, true), var_core_value_sigF4C5.addEventListener("pointermove", var_core_value_sig5410), var_core_value_sigF4C5.addEventListener("mousemove", var_core_value_sig5410), var_core_value_sigF4C5.addEventListener("pointerleave", var_core_value_sigCDDA), var_core_value_sigF4C5.addEventListener("mouseleave", var_core_value_sigCDDA), var_core_value_sigE243 == null || var_core_value_sigE243.addEventListener("pointermove", var_core_value_sig492F), var_core_value_sigE243 == null || var_core_value_sigE243.addEventListener("mousemove", var_core_value_sig492F), var_core_value_sigE243 == null || var_core_value_sigE243.addEventListener("pointerup", var_core_value_sigA6F6), var_core_value_sigE243 == null || var_core_value_sigE243.addEventListener("mouseup", var_core_value_sigA6F6), var_core_value_sig74A8 == null || var_core_value_sig74A8.addEventListener("pointermove", var_core_value_sig492F, true), var_core_value_sig74A8 == null || var_core_value_sig74A8.addEventListener("mousemove", var_core_value_sig492F, true), var_core_value_sig74A8 == null || var_core_value_sig74A8.addEventListener("pointerup", var_core_value_sigA6F6, true), var_core_value_sig74A8 == null || var_core_value_sig74A8.addEventListener("mouseup", var_core_value_sigA6F6, true), this.disposeWithMe({
      dispose: () => {
        var var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7, var_core_value_sigD0A8, var_core_value_sigF4B9;
        (var_core_value_sig2259 = var_core_value_sigF4C5.removeEventListener) == null || var_core_value_sig2259.call(var_core_value_sigF4C5, "pointerdown", var_core_value_sig8EA0, true), (var_core_value_sig9E2F = var_core_value_sigF4C5.removeEventListener) == null || var_core_value_sig9E2F.call(var_core_value_sigF4C5, "mousedown", var_core_value_sig8EA0, true), (var_core_value_sigD082 = var_core_value_sigF4C5.removeEventListener) == null || var_core_value_sigD082.call(var_core_value_sigF4C5, "pointermove", var_core_value_sig5410), (var_core_value_sigDBB7 = var_core_value_sigF4C5.removeEventListener) == null || var_core_value_sigDBB7.call(var_core_value_sigF4C5, "mousemove", var_core_value_sig5410), (var_core_value_sigD0A8 = var_core_value_sigF4C5.removeEventListener) == null || var_core_value_sigD0A8.call(var_core_value_sigF4C5, "pointerleave", var_core_value_sigCDDA), (var_core_value_sigF4B9 = var_core_value_sigF4C5.removeEventListener) == null || var_core_value_sigF4B9.call(var_core_value_sigF4C5, "mouseleave", var_core_value_sigCDDA), var_core_value_sigE243 == null || var_core_value_sigE243.removeEventListener("pointermove", var_core_value_sig492F), var_core_value_sigE243 == null || var_core_value_sigE243.removeEventListener("mousemove", var_core_value_sig492F), var_core_value_sigE243 == null || var_core_value_sigE243.removeEventListener("pointerup", var_core_value_sigA6F6), var_core_value_sigE243 == null || var_core_value_sigE243.removeEventListener("mouseup", var_core_value_sigA6F6), var_core_value_sig74A8 == null || var_core_value_sig74A8.removeEventListener("pointermove", var_core_value_sig492F, true), var_core_value_sig74A8 == null || var_core_value_sig74A8.removeEventListener("mousemove", var_core_value_sig492F, true), var_core_value_sig74A8 == null || var_core_value_sig74A8.removeEventListener("pointerup", var_core_value_sigA6F6, true), var_core_value_sig74A8 == null || var_core_value_sig74A8.removeEventListener("mouseup", var_core_value_sigA6F6, true);
      }
    });
  }
  _retryInitCanvasPointerEvents() {
    if (this._canvasPointerEventsRetryCount >= 10 || typeof window > "u") return;
    this._canvasPointerEventsRetryCount += 1;
    let var_core_value_sig21B2 = window.setTimeout(() => this._initCanvasPointerEvents(), 100);
    this.disposeWithMe({
      dispose: () => window.clearTimeout(var_core_value_sig21B2)
    });
  }
  _updateHoverAtPoint(var_core_value_sigDE08, var_core_value_sigACCB = false) {
    var var_core_value_sig7F33;
    this._refreshColumnResizeState();
    let var_core_value_sig0C53 = N(this._resizeHandles, var_core_value_sigDE08.x, var_core_value_sigDE08.y),
      var_core_value_sigEA04 = (var_core_value_sig0C53 == null ? undefined : var_core_value_sig0C53.columnGroupId) ?? ((var_core_value_sig7F33 = De(this._columnGroups["values"](), var_core_value_sigDE08)) == null ? undefined : var_core_value_sig7F33.columnGroupId) ?? (var_core_value_sigACCB ? this._resolveActiveColumnGroupId() : null);
    (var_core_value_sig0C53 !== this._hoveredResizeHandle || var_core_value_sigEA04 !== this._hoveredColumnGroupId) && (this._hoveredResizeHandle = var_core_value_sig0C53, this._hoveredColumnGroupId = var_core_value_sigEA04, var_core_value_sig0C53 ? this._setResizeCursor() : this._setDefaultCursor(), this._makeDirty());
  }
  _refreshColumnResizeState(var_core_value_sig7A62 = this._docSkeletonManagerService["getSkeleton"](), var_core_value_sig8109 = false) {
    if (var_core_value_sig7A62 == null && !var_core_value_sig8109) return;
    let var_core_value_sig7565 = xe(var_core_value_sig7A62, this._getDocumentPageMarginFallback());
    this._columnGroups = new Map([...var_core_value_sig7565.columnGroups].filter(([var_core_value_sig5CEE]) => this._canEditColumnGroup(var_core_value_sig5CEE))), this._resizeHandles = var_core_value_sig7565.handles["filter"](var_core_value_sigE92A => this._columnGroups["has"](var_core_value_sigE92A.columnGroupId)), this._hoveredColumnGroupId && !this._columnGroups["has"](this._hoveredColumnGroupId) && (this._hoveredColumnGroupId = null), this._hoveredResizeHandle && !this._columnGroups["has"](this._hoveredResizeHandle["columnGroupId"]) && (this._hoveredResizeHandle = null, this._setDefaultCursor()), this._resizeDragState && !this._columnGroups["has"](this._resizeDragState["handle"].columnGroupId) && (this._resizeDragState = null, this._resizeDragDelta = 0, this._setDefaultCursor());
  }
  _initCanvasRender() {
    let var_core_value_sigD4FB = this._context["scene"];
    var_core_value_sigD4FB != null && var_core_value_sigD4FB.afterRender$ && this.disposeWithMe(var_core_value_sigD4FB.afterRender$["subscribe"](var_core_value_sig362B => {
      var var_core_value_sig5CA5, var_core_value_sigE90F;
      let var_core_value_sigEFD4 = var_core_value_sig362B == null || (var_core_value_sig5CA5 = var_core_value_sig362B.getContext) == null ? undefined : var_core_value_sig5CA5.call(var_core_value_sig362B);
      if (!var_core_value_sigEFD4) return;
      let var_core_value_sig861B = this._context["scene"],
        var_core_value_sig5237 = [...new Set([(var_core_value_sigE90F = this._resizeDragState) == null ? undefined : var_core_value_sigE90F.handle["columnGroupId"], this._hoveredColumnGroupId, this._resolveActiveColumnGroupId()].filter(var_core_value_sig2AD0 => var_core_value_sig2AD0 != null))].map(var_core_value_sig3EEE => this._columnGroups["get"](var_core_value_sig3EEE)).filter(var_core_value_sigBC46 => var_core_value_sigBC46 != null),
        var_core_value_sigBB00 = this._resizeDragState ? this._columnGroups["get"](this._resizeDragState["handle"].columnGroupId) : null;
      L(var_core_value_sigEFD4, var_core_value_sig5237.map(var_core_value_sig3D7D => X(var_core_value_sig3D7D, var_core_value_sig861B))), R(var_core_value_sigEFD4, {
        activeDrag: this._resizeDragState ? {
          columnGroup: var_core_value_sigBB00 ? X(var_core_value_sigBB00, var_core_value_sig861B) : null,
          delta: this._resizeDragDelta * Q(var_core_value_sig861B).scaleX,
          handle: Z(this._resizeDragState["handle"], var_core_value_sig861B)
        } : null,
        hoveredHandle: this._hoveredResizeHandle ? Z(this._hoveredResizeHandle, var_core_value_sig861B) : null
      });
    }));
  }
  _setResizeCursor() {
    var var_core_value_sig3E71, var_core_value_sig01B3;
    (var_core_value_sig3E71 = (var_core_value_sig01B3 = this._context["scene"]).setCursor) == null || var_core_value_sig3E71.call(var_core_value_sig01B3, a.CURSOR_TYPE["EAST_WEST_RESIZE"]);
  }
  _setDefaultCursor() {
    var var_core_value_sig7442, var_core_value_sigDF87;
    (var_core_value_sig7442 = (var_core_value_sigDF87 = this._context["scene"]).setCursor) == null || var_core_value_sig7442.call(var_core_value_sigDF87, a.CURSOR_TYPE["DEFAULT"]);
  }
  _cancelResizeInteraction() {
    this._resizeDragState = null, this._resizeDragDelta = 0, this._hoveredResizeHandle = null, this._hoveredColumnGroupId = null;
  }
  _canEditColumnGroup(var_core_value_sig9EE0) {
    return (0, i.canEditDocumentTargets)(this._permissionService, this._context["unitId"], [...(0, i.getDocumentEntityParentPermissionObjectIds)(this._context["unit"], "", "column-group", var_core_value_sig9EE0), (0, i.getDocumentEntityPermissionObjectId)("", "column-group", var_core_value_sig9EE0)]);
  }
  _retainActiveColumnHoverOnLeave() {
    return this._resolveActiveColumnGroupId() ? (this._resizeDragState = null, this._resizeDragDelta = 0, this._hoveredResizeHandle = null, this._hoveredColumnGroupId = null, true) : false;
  }
  _resolveActiveColumnGroupId() {
    return this._resolveActiveParagraphMenuColumnGroupId() ?? this._resolveSelectionColumnGroupId();
  }
  _resolveActiveParagraphMenuColumnGroupId() {
    let var_core_value_sigF0511 = this._docParagraphMenuService["activeTarget"];
    return var_core_value_sigF0511 ? this._resolveColumnGroupIdByRange(var_core_value_sigF0511.menuRange) ?? this._resolveColumnGroupIdByRange(var_core_value_sigF0511.moveRange) : null;
  }
  _resolveSelectionColumnGroupId() {
    let var_core_value_sig0B45 = this._docSelectionManagerService["getActiveTextRange"]();
    return !var_core_value_sig0B45 || var_core_value_sig0B45.collapsed === false ? null : this._resolveColumnGroupIdByOffset(var_core_value_sig0B45.startOffset);
  }
  _resolveColumnGroupIdByRange(var_core_value_sig36F8) {
    return [var_core_value_sig36F8.startOffset, var_core_value_sig36F8.startOffset + 1, var_core_value_sig36F8.endOffset - 1, var_core_value_sig36F8.endOffset].reduce((var_core_value_sig7E54, var_core_value_sig9A8D) => var_core_value_sig7E54 ?? this._resolveColumnGroupIdByOffset(var_core_value_sig9A8D), null);
  }
  _resolveColumnGroupIdByOffset(var_core_value_sig03E1) {
    for (let var_core_value_sigC259 of this._columnGroups["values"]()) if (!(typeof var_core_value_sigC259.st != "number" || typeof var_core_value_sigC259.ed != "number" || var_core_value_sig03E1 < var_core_value_sigC259.st || var_core_value_sig03E1 > var_core_value_sigC259.ed) && var_core_value_sigC259.columns["find"](var_core_value_sig27E5 => typeof var_core_value_sig27E5.st == "number" && typeof var_core_value_sig27E5.ed == "number" && var_core_value_sig03E1 >= var_core_value_sig27E5.st && var_core_value_sig03E1 <= var_core_value_sig27E5.ed)) return var_core_value_sigC259.columnGroupId;
    return null;
  }
  _makeDirty() {
    var var_core_value_sigBB57, var_core_value_sig7C4A, var_core_value_sigE799, var_core_value_sigB601;
    (var_core_value_sigBB57 = this._context["mainComponent"]) == null || (var_core_value_sig7C4A = var_core_value_sigBB57.makeDirty) == null || var_core_value_sig7C4A.call(var_core_value_sigBB57, true), (var_core_value_sigE799 = (var_core_value_sigB601 = this._context["scene"]).makeDirty) == null || var_core_value_sigE799.call(var_core_value_sigB601);
  }
  _consumePointerEvent(var_core_value_sig8B71, var_core_value_sigAEFB) {
    var var_core_value_sig826B;
    var_core_value_sigAEFB.stopPropagation(), var_core_value_sigAEFB.skipNextObservers = true, (var_core_value_sig826B = var_core_value_sig8B71.preventDefault) == null || var_core_value_sig826B.call(var_core_value_sig8B71);
  }
  _getDocumentPageMarginFallback() {
    var var_core_value_sigCF89, var_core_value_sig00CB, var_core_value_sig77EE;
    let var_core_value_sig9F76 = this._univerInstanceService["getUnit"](this._context["unitId"], r.UniverInstanceType["UNIVER_DOC"]) ?? this._univerInstanceService["getCurrentUnitOfType"](r.UniverInstanceType["UNIVER_DOC"]),
      var_core_value_sigB008 = var_core_value_sig9F76 == null || (var_core_value_sigCF89 = var_core_value_sig9F76.getSnapshot) == null ? undefined : var_core_value_sigCF89.call(var_core_value_sig9F76).documentStyle,
      var_core_value_sig8721 = this._context["mainComponent"],
      var_core_value_sig08BA = var_core_value_sig8721 == null || (var_core_value_sig00CB = var_core_value_sig8721.getOffsetConfig) == null ? undefined : var_core_value_sig00CB.call(var_core_value_sig8721),
      var_core_value_sigDBB5 = W(var_core_value_sig8721 == null ? undefined : var_core_value_sig8721.width) ?? Ee(this._context),
      var_core_value_sigCFAC = var_core_value_sigB008 == null || (var_core_value_sig77EE = var_core_value_sigB008.pageSize) == null ? undefined : var_core_value_sig77EE.width,
      var_core_value_sig237B = (var_core_value_sig08BA == null ? undefined : var_core_value_sig08BA.docsLeft) ?? (var_core_value_sigDBB5 != null && var_core_value_sigCFAC != null && var_core_value_sigDBB5 > var_core_value_sigCFAC ? (var_core_value_sigDBB5 - var_core_value_sigCFAC) / 2 : undefined),
      var_core_value_sigFEAB = (var_core_value_sig08BA == null ? undefined : var_core_value_sig08BA.docsTop) ?? (var_core_value_sig08BA == null ? undefined : var_core_value_sig08BA.pageMarginTop) ?? (var_core_value_sig8721 == null ? undefined : var_core_value_sig8721.pageMarginTop) ?? (var_core_value_sig237B == null ? undefined : 20);
    return {
      marginLeft: var_core_value_sigB008 == null ? undefined : var_core_value_sigB008.marginLeft,
      marginTop: var_core_value_sigB008 == null ? undefined : var_core_value_sigB008.marginTop,
      pageLeft: var_core_value_sig237B,
      pageTop: var_core_value_sigFEAB
    };
  }
};
H = O([D(1, (0, r.Inject)(i.DocSkeletonManagerService)), D(2, r.ICommandService), D(3, r.IUniverInstanceService), D(4, (0, r.Inject)(i.DocSelectionManagerService)), D(5, (0, r.Inject)(t.DocParagraphMenuService)), D(6, r.IPermissionService)], H);
function xe(var_core_value_sig5A75, var_core_value_sig7BAF = {}) {
  var var_core_value_sig8F69;
  let var_core_value_sig6884 = (var_core_value_sig5A75 == null || (var_core_value_sig8F69 = var_core_value_sig5A75.getSkeletonData()) == null ? undefined : var_core_value_sig8F69.pages) ?? [],
    var_core_value_sig066E = new Map(),
    var_core_value_sig9B0D = [];
  for (let var_core_value_sigE347 of var_core_value_sig6884) {
    var var_core_value_sig3D2C;
    for (let var_core_value_sig8061 of ((var_core_value_sig3D2C = var_core_value_sigE347.skeColumnGroups) == null ? undefined : var_core_value_sig3D2C.values()) ?? []) {
      let var_core_value_sig7524 = U(var_core_value_sig8061, var_core_value_sigE347, var_core_value_sig7BAF);
      var_core_value_sig066E.set(var_core_value_sig7524.columnGroupId, var_core_value_sig7524), var_core_value_sig9B0D.push(...j(var_core_value_sig7524));
    }
  }
  return {
    columnGroups: var_core_value_sig066E,
    handles: var_core_value_sig9B0D
  };
}
function U(var_core_value_sigC56D, var_core_value_sig3A17, var_core_value_sig938F) {
  var var_core_value_sigD948;
  let var_core_value_sigBE5E = Se(var_core_value_sigC56D, var_core_value_sig3A17),
    var_core_value_sig0281 = var_core_value_sigBE5E.marginLeft ?? var_core_value_sig938F.marginLeft ?? we(var_core_value_sigBE5E.pageWidth, var_core_value_sigC56D.width),
    var_core_value_sigED71 = var_core_value_sigBE5E.marginTop ?? var_core_value_sigBE5E.originMarginTop ?? var_core_value_sig938F.marginTop ?? (var_core_value_sigBE5E.pageWidth == null ? 0 : 20),
    var_core_value_sig281C = (var_core_value_sig938F.pageLeft ?? Ce(var_core_value_sigBE5E.parent) ?? var_core_value_sigBE5E.left ?? 0) + var_core_value_sig0281,
    var_core_value_sig3C92 = (var_core_value_sig938F.pageTop ?? ((var_core_value_sigD948 = var_core_value_sigBE5E.parent) == null ? undefined : var_core_value_sigD948.top) ?? 0) + var_core_value_sigED71;
  return {
    ...var_core_value_sigC56D,
    left: var_core_value_sigC56D.left + var_core_value_sig281C,
    top: var_core_value_sigC56D.top + var_core_value_sig3C92
  };
}
function Se(var_core_value_sigB16B, var_core_value_sig585D) {
  var var_core_value_sigE722;
  let var_core_value_sig062A = var_core_value_sigB16B.parent,
    var_core_value_sig050A = (var_core_value_sigE722 = var_core_value_sigB16B.columns[0]) == null ? undefined : var_core_value_sigE722.page;
  return {
    left: (var_core_value_sig062A == null ? undefined : var_core_value_sig062A.left) ?? (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.left) ?? var_core_value_sig585D.left,
    marginLeft: (var_core_value_sig062A == null ? undefined : var_core_value_sig062A.marginLeft) ?? (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.marginLeft) ?? var_core_value_sig585D.marginLeft,
    marginTop: (var_core_value_sig062A == null ? undefined : var_core_value_sig062A.marginTop) ?? (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.marginTop) ?? var_core_value_sig585D.marginTop,
    originMarginTop: (var_core_value_sig062A == null ? undefined : var_core_value_sig062A.originMarginTop) ?? (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.originMarginTop) ?? var_core_value_sig585D.originMarginTop,
    pageWidth: (var_core_value_sig062A == null ? undefined : var_core_value_sig062A.pageWidth) ?? (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.pageWidth) ?? var_core_value_sig585D.pageWidth,
    parent: (var_core_value_sig062A == null ? undefined : var_core_value_sig062A.parent) ?? (var_core_value_sig050A == null ? undefined : var_core_value_sig050A.parent) ?? var_core_value_sig585D.parent
  };
}
function Ce(var_core_value_sig8B32) {
  return var_core_value_sig8B32 && "left" in var_core_value_sig8B32 ? var_core_value_sig8B32.left : undefined;
}
function we(var_core_value_sig870F, var_core_value_sigB683) {
  return var_core_value_sig870F == null || !Number.isFinite(var_core_value_sig870F) || var_core_value_sig870F <= var_core_value_sigB683 ? 0 : (var_core_value_sig870F - var_core_value_sigB683) / 2;
}
function W(var_core_value_sig26EC) {
  return var_core_value_sig26EC != null && Number.isFinite(var_core_value_sig26EC) && var_core_value_sig26EC > 0 ? var_core_value_sig26EC : undefined;
}
function Te(var_core_value_sigEEDB) {
  let {
    scene: var_core_value_sig36E7,
    mainComponent: var_core_value_sig6A78
  } = var_core_value_sigEEDB;
  return var_core_value_sig36E7 != null && var_core_value_sig36E7.onPointerDown$ || var_core_value_sig36E7 != null && var_core_value_sig36E7.onPointerMove$ || var_core_value_sig36E7 != null && var_core_value_sig36E7.onPointerUp$ ? var_core_value_sig36E7 : var_core_value_sig6A78 ?? var_core_value_sig36E7;
}
function G(var_core_value_sigF7EF) {
  var var_core_value_sig27F9, var_core_value_sig393E;
  return ((var_core_value_sig27F9 = var_core_value_sigF7EF.engine) == null || (var_core_value_sig393E = var_core_value_sig27F9.getCanvasElement) == null ? undefined : var_core_value_sig393E.call(var_core_value_sig27F9)) || (typeof document > "u" ? null : document.querySelector("canvas"));
}
function Ee(var_core_value_sigB609) {
  var var_core_value_sig390D;
  let var_core_value_sigC928 = G(var_core_value_sigB609);
  return W(var_core_value_sigC928 == null || (var_core_value_sig390D = var_core_value_sigC928.getBoundingClientRect) == null ? undefined : var_core_value_sig390D.call(var_core_value_sigC928).width);
}
function K(var_core_value_sig39B7, var_core_value_sig18E0, var_core_value_sigE161) {
  var var_core_value_sigBDEE, var_core_value_sig1F40;
  let var_core_value_sig3FC7 = ((var_core_value_sigBDEE = var_core_value_sigE161.getAncestorScale) == null ? undefined : var_core_value_sigBDEE.call(var_core_value_sigE161)) ?? {},
    var_core_value_sig1E1B = var_core_value_sig3FC7.scaleX || 1,
    var_core_value_sig3B10 = var_core_value_sig3FC7.scaleY || 1,
    var_core_value_sig89E6 = (var_core_value_sig1F40 = var_core_value_sigE161.getViewport) == null ? undefined : var_core_value_sig1F40.call(var_core_value_sigE161, t.VIEWPORT_KEY["VIEW_MAIN"]);
  return var_core_value_sig89E6 ? {
    x: var_core_value_sig39B7 / var_core_value_sig1E1B + (var_core_value_sig89E6.viewportScrollX ?? 0),
    y: var_core_value_sig18E0 / var_core_value_sig3B10 + (var_core_value_sig89E6.viewportScrollY ?? 0)
  } : {
    x: var_core_value_sig39B7 / var_core_value_sig1E1B,
    y: var_core_value_sig18E0 / var_core_value_sig3B10
  };
}
function q(var_core_value_sig4743, var_core_value_sigEB6A, var_core_value_sig3D46) {
  var var_core_value_sigCC93;
  let var_core_value_sig5964 = (var_core_value_sigCC93 = var_core_value_sigEB6A.getBoundingClientRect) == null ? undefined : var_core_value_sigCC93.call(var_core_value_sigEB6A);
  return var_core_value_sig5964 ? K(var_core_value_sig4743.clientX - (var_core_value_sig5964.left ?? 0), var_core_value_sig4743.clientY - (var_core_value_sig5964.top ?? 0), var_core_value_sig3D46) : null;
}
function J(var_core_value_sig808B) {
  var var_core_value_sig2A26, var_core_value_sig1179, var_core_value_sigEA92;
  (var_core_value_sig2A26 = var_core_value_sig808B.preventDefault) == null || var_core_value_sig2A26.call(var_core_value_sig808B), (var_core_value_sig1179 = var_core_value_sig808B.stopPropagation) == null || var_core_value_sig1179.call(var_core_value_sig808B), (var_core_value_sigEA92 = var_core_value_sig808B.stopImmediatePropagation) == null || var_core_value_sigEA92.call(var_core_value_sig808B);
}
function De(var_core_value_sig8FD9, var_core_value_sig1AE5) {
  for (let var_core_value_sig3C5B of var_core_value_sig8FD9) {
    let var_core_value_sig9C9F = A(var_core_value_sig3C5B);
    if (var_core_value_sig1AE5.y >= var_core_value_sig3C5B.top && var_core_value_sig1AE5.y <= var_core_value_sig3C5B.top + var_core_value_sig9C9F && var_core_value_sig3C5B.columns["some"](var_core_value_sig4D4C => {
      let var_core_value_sigC9E0 = var_core_value_sig3C5B.left + var_core_value_sig4D4C.left,
        var_core_value_sig76BA = var_core_value_sigC9E0 + var_core_value_sig4D4C.width;
      return var_core_value_sig1AE5.x >= var_core_value_sigC9E0 && var_core_value_sig1AE5.x <= var_core_value_sig76BA;
    })) return var_core_value_sig3C5B;
  }
  return null;
}
function Y(var_core_value_sig7100, var_core_value_sigA19A, var_core_value_sigD3F5) {
  var var_core_value_sig3082;
  let {
      scaleX: var_core_value_sigF5D1,
      scaleY: var_core_value_sig8775
    } = Q(var_core_value_sigD3F5),
    var_core_value_sig481B = (var_core_value_sig3082 = var_core_value_sigD3F5.getViewport) == null ? undefined : var_core_value_sig3082.call(var_core_value_sigD3F5, t.VIEWPORT_KEY["VIEW_MAIN"]);
  return var_core_value_sig481B ? {
    x: (var_core_value_sig7100 - (var_core_value_sig481B.viewportScrollX ?? 0)) * var_core_value_sigF5D1,
    y: (var_core_value_sigA19A - (var_core_value_sig481B.viewportScrollY ?? 0)) * var_core_value_sig8775
  } : {
    x: var_core_value_sig7100 * var_core_value_sigF5D1,
    y: var_core_value_sigA19A * var_core_value_sig8775
  };
}
function X(var_core_value_sig13D7, var_core_value_sig90C0) {
  let var_core_value_sigF1B2 = Y(var_core_value_sig13D7.left, var_core_value_sig13D7.top, var_core_value_sig90C0),
    {
      scaleX: var_core_value_sigC2BB,
      scaleY: var_core_value_sigD9DB
    } = Q(var_core_value_sig90C0);
  return {
    ...var_core_value_sig13D7,
    columns: var_core_value_sig13D7.columns["map"](var_core_value_sig200B => ({
      ...var_core_value_sig200B,
      left: var_core_value_sig200B.left * var_core_value_sigC2BB,
      width: var_core_value_sig200B.width * var_core_value_sigC2BB
    })),
    height: A(var_core_value_sig13D7) * var_core_value_sigD9DB,
    left: var_core_value_sigF1B2.x,
    top: var_core_value_sigF1B2.y,
    width: var_core_value_sig13D7.width * var_core_value_sigC2BB
  };
}
function Z(var_core_value_sigA363, var_core_value_sigFBA5) {
  let var_core_value_sigAC47 = Y(var_core_value_sigA363.left, var_core_value_sigA363.top, var_core_value_sigFBA5),
    {
      scaleY: var_core_value_sigA06F
    } = Q(var_core_value_sigFBA5);
  return {
    ...var_core_value_sigA363,
    height: var_core_value_sigA363.height * var_core_value_sigA06F,
    left: var_core_value_sigAC47.x,
    top: var_core_value_sigAC47.y
  };
}
function Q(var_core_value_sig770E) {
  var var_core_value_sig4654;
  let var_core_value_sigB26B = ((var_core_value_sig4654 = var_core_value_sig770E.getAncestorScale) == null ? undefined : var_core_value_sig4654.call(var_core_value_sig770E)) ?? {};
  return {
    scaleX: var_core_value_sigB26B.scaleX || 1,
    scaleY: var_core_value_sigB26B.scaleY || 1
  };
}
let $ = class extends r.Plugin {
  constructor(var_core_value_sig3863 = E, var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937) {
    super(), this._config = var_core_value_sig3863, this._injector = var_core_value_sigC97C, this._configService = var_core_value_sigC4B1, this._commandService = var_core_value_sig1BD9, this._menuManagerService = var_core_value_sigE43E, this._renderManagerService = var_core_value_sigA937;
    let {
      ...var_core_value_sigCAD5
    } = (0, r.merge)({}, E, this._config);
    this._configService["setConfig"]("docs-column-ui.config", var_core_value_sigCAD5);
  }
  onStarting() {
    this._injector["add"]([k]), this._injector["get"](k), [x].forEach(var_core_value_sigFDEA => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigFDEA))), this._menuManagerService["mergeMenu"](T);
  }
  onRendered() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](r.UniverInstanceType["UNIVER_DOC"], [H]));
  }
};
V($, "pluginName", "DOCS_COLUMN_UI_PLUGIN"), V($, "packageName", de), V($, "version", fe), V($, "type", r.UniverInstanceType["UNIVER_DOC"]), $ = O([(0, r.DependentOn)(l.UniverLicensePlugin, i.UniverDocsPlugin, a.UniverRenderEnginePlugin, e.UniverDocsColumnPlugin, t.UniverDocsUIPlugin), D(1, (0, r.Inject)(r.Injector)), D(2, r.IConfigService), D(3, r.ICommandService), D(4, n.IMenuManagerService), D(5, a.IRenderManagerService)], $), exports.DocsColumnUIMenuSchema = T, Object.defineProperty(exports, "UniverDocsColumnUIPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.getColumnResizeDragCommandParams = M, exports.getColumnResizeHandles = j;
