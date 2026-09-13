import { AddDocColumnCommand, DOCS_COLUMN_MAX_COLUMN_COUNT, DeleteDocColumnCommand, DeleteDocColumnGroupCommand, InsertDocColumnGroupCommand, ResizeDocColumnGroupCommand, UniverDocsColumnPlugin, calculateResizeDragWidthRatios, canResolveDocsColumnInsertOffset, getColumnGroupRangeById, normalizeDocsColumnInsertOffset } from "@univerjs-pro/docs-column";
import { DOC_CONTENT_INSERT_MENU_ID, DOC_PARAGRAPH_T_EDIT_MENU_ID, DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID, DOC_PARAGRAPH_T_INSERT_MENU_ID, DOC_TABLE_BLOCK_MENU_ID, DocParagraphMenuService, EMPTY_PARAGRAPH_MENU_ID, INSERT_BELLOW_MENU_ID, UniverDocsUIPlugin, VIEWPORT_KEY } from "@univerjs/docs-ui";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, IMenuManagerService, MenuItemType, useDependency } from "@univerjs/ui";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, isInternalEditorID, merge } from "@univerjs/core";
import { DocSelectionManagerService, DocSkeletonManagerService, UniverDocsPlugin, canEditDocumentTargets, consumeContentInsertRange, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId } from "@univerjs/docs";
import { CURSOR_TYPE, IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { EMPTY, Observable, switchMap } from "rxjs";
import { useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Be, F, H, I } from "./internal-glue.js";
import { Ze } from "./docs-column-ui-column-resize-drag-command-params.js";
import { Xe } from "./docs-column-ui-column-resize-handles.js";
import { Ke } from "./docs-column-ui-docs-column-uimenu-schema.js";
function Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 = useDependency(LocaleService),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454] = useState(3),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 = useRef(false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.onChange) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122));
    };
  return jsxs("section", {
    className: "univer-py-2",
    "data-u-comp": I,
    onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.stopPropagation(),
    onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: 8,
      boxSizing: "border-box",
      color: "#1f2329",
      display: "block",
      width: 254
    },
    children: [jsxs("div", {
      style: {
        alignItems: "center",
        display: "flex",
        fontSize: 14,
        justifyContent: "space-between",
        lineHeight: "20px",
        marginBottom: 22,
        whiteSpace: "nowrap"
      },
      children: [jsx("span", {
        style: {
          color: "#4e5969"
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.t("docs-column-ui.menu.selectColumnCount")
      }), jsx("span", {
        style: {
          color: "#1f2329",
          fontWeight: 500,
          minWidth: 16,
          textAlign: "right"
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453
      })]
    }), jsx("div", {
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.t("docs-column-ui.menu.selectColumnCount"),
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
        width: 254
      },
      children: Be.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 => {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Math.max(2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128),
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453;
        return jsx("button", {
          type: "button",
          "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.t("docs-column-ui.menu.insertColumnCount", String(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2)),
          onClick: () => {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.current) {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.current = false;
              return;
            }
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2);
          },
          onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.current = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2);
          },
          onMouseEnter: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2),
          style: {
            background: "transparent",
            border: 0,
            boxSizing: "border-box",
            cursor: "pointer",
            flex: 1,
            minWidth: 0,
            padding: 0
          },
          children: jsx("span", {
            style: {
              backgroundColor: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A ? "#8fafef" : "#edf0f4",
              display: "block",
              height: "100%",
              transition: "background-color\x20120ms\x20ease",
              width: "100%"
            }
          })
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128);
      })
    })]
  });
}
const Ye = {};
let V = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](I, Ve));
  }
};
function Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510 = 12) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510 / 2,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511 = null,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = 1 / 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.left);
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.top || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.height || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511;
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518) {
  return {
    handle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517,
    startX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518.x
  };
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.startX;
}
const et = 0.36,
  tt = 0.9;
function nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.length !== 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.fillStyle = "#eef1f5", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.globalAlpha = 0.48, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.globalCompositeOperation = "multiply", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147);
    ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.columns) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.columns : [{
      left: 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.width
    }]).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => {
      it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149);
    });
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.restore());
}
function rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 = {}) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531;
  !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.hoveredHandle && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.fillStyle = "#1a73e8", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.globalAlpha = et, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.hoveredHandle && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.globalAlpha = tt, W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.hoveredHandle["left"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.hoveredHandle["top"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.hoveredHandle["height"])), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.globalAlpha = et, W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["handle"].left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["handle"].top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["handle"].height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.globalAlpha = tt, W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["handle"].left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["delta"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["handle"].top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["handle"].height)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.restore(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.columnGroup && at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["columnGroup"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["handle"].separatorIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.activeDrag["delta"]));
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535.fillRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 - 2 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537, 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538);
}
function it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.beginPath || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.roundRect || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.fill) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.fillRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547);
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.roundRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547, 8), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.fill();
}
function at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.fillText) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.width), 0);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 <= 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 => Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.width) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 * 100));
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.font = "600 12px Arial, sans-serif", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.textBaseline = "middle", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.globalAlpha = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.globalCompositeOperation = "source-over", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157] + "%",
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.measureText) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6).width) ?? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6.length * 7) + 12,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.width - 8 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.top + 4;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.fillStyle = "#9ca3af", ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4, 22, 5), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.fillStyle = "#ffffff", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.fillText(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 + 6, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 + 22 / 2);
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.restore();
}
function ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.columns) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.columns : [{
    left: 0,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.width
  }]).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162
  }));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 >= var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.length - 1) return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6;
  var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568].width = Math.max(0, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568].width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 + 1].width = Math.max(0, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 + 1].width - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569);
  for (let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 + 1; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.length; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10++) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 - 1],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Math.max(0, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.columns) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10].left) ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10].left) - Math.max(0, (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.columns) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 - 1].left) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.left) + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.columns) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 - 1].width) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.width));
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10].left = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.width + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1;
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6;
}
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 => Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = 100 - var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, 0);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.length > 0 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.length - 1] += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8;
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.beginPath || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.roundRect || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.fill) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.fillRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587);
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.roundRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.fill();
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595) {
  "@babel/helpers - typeof";

  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168;
  }, G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595);
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598) {
  if (G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 || "default");
    if (G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597);
}
function ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 = lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, "string");
  return G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 + "";
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 = ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609;
}
let q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, this._docSkeletonManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, this._docSelectionManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, this._docParagraphMenuService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176, K(this, "_resizeHandles", []), K(this, "_columnGroups", new Map()), K(this, "_resizeDragState", null), K(this, "_resizeDragDelta", 0), K(this, "_hoveredResizeHandle", null), K(this, "_hoveredColumnGroupId", null), K(this, "_canvasPointerEventsInitialized", false), K(this, "_canvasPointerEventsRetryCount", 0), !isInternalEditorID(this._context["unitId"]) && (this.disposeWithMe(this._docSkeletonManagerService["currentSkeleton$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => {
      this._refreshColumnResizeState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 ?? undefined, true), this._makeDirty();
    })), this.disposeWithMe(this._docSkeletonManagerService["currentSkeleton$"].pipe(switchMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.dirty$) ?? EMPTY)).subscribe(() => {
      this._refreshColumnResizeState(), this._makeDirty();
    })), this.disposeWithMe(this._docSelectionManagerService["textSelection$"].subscribe(({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622
    }) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 === this._context["unitId"] && (this._refreshColumnResizeState(), this._makeDirty());
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      this._cancelResizeInteraction(), this._refreshColumnResizeState(), this._setDefaultCursor(), this._makeDirty();
    })), this._initPointerEvents(), this._initCanvasRender());
  }
  getResizeHandles() {
    return this._resizeHandles;
  }
  async resizeColumnFromHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185) {
    if (!this._canEditColumnGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.columnGroupId)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = this._columnGroups["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.columnGroupId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.separatorIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 ? !!(await this._commandService["executeCommand"](ResizeDocColumnGroupCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187)) : false;
  }
  startResizeDragAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = Qe(this._resizeHandles, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.y);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 ? (this._resizeDragState = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192), this._resizeDragDelta = 0, true) : false;
  }
  async releaseResizeDragAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = this._resizeDragState;
    return this._resizeDragState = null, this._resizeDragDelta = 0, !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 ? false : this.resizeColumnFromHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.handle, U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196));
  }
  _initPointerEvents() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(this._context);
    this._initCanvasPointerEvents(), !(!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.onPointerDown$) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.onPointerUp$) && (this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.onPointerDown$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625]) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.offsetY, this._context["scene"]);
        this.startResizeDragAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628) && (this._hoveredResizeHandle = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 = this._resizeDragState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.handle) ?? null, this._hoveredColumnGroupId = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = this._resizeDragState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.handle["columnGroupId"]) ?? null, this._setResizeCursor(), this._consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625), this._makeDirty());
      }
    })), this.disposeWithMe(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.onPointerMove$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.subscribeEvent({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635]) => {
        if (!this._resizeDragState) {
          this._updateHoverAtPoint(J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.offsetY, this._context["scene"]));
          return;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.offsetY, this._context["scene"]);
        this._resizeDragDelta = U(this._resizeDragState, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636), this._setResizeCursor(), this._consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635), this._makeDirty();
      }
    })) ?? {
      dispose: () => undefined
    }), this.disposeWithMe(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.onPointerLeave$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.subscribeEvent({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641]) => {
        if (!(!this._resizeDragState && !this._hoveredResizeHandle && !this._hoveredColumnGroupId)) {
          if (!this._resizeDragState && this._retainActiveColumnHoverOnLeave()) {
            this._setDefaultCursor(), this._consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641), this._makeDirty();
            return;
          }
          this._cancelResizeInteraction(), this._setDefaultCursor(), this._consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641), this._makeDirty();
        }
      }
    })) ?? {
      dispose: () => undefined
    }), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.onPointerUp$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645]) => {
        if (!this._resizeDragState) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.offsetY, this._context["scene"]);
        this.releaseResizeDragAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, true), this._consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645), this._makeDirty();
      }
    })));
  }
  _initCanvasPointerEvents() {
    if (this._canvasPointerEventsInitialized) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = vt(this._context);
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.addEventListener) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.removeEventListener) {
      this._retryInitCanvasPointerEvents();
      return;
    }
    this._canvasPointerEventsInitialized = true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => {
        this._resizeDragState || this._updateHoverAtPoint(J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.offsetY, this._context["scene"]));
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, this._context["scene"]);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) {
          if (this._resizeDragState) {
            this._resizeDragDelta = U(this._resizeDragState, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653), this._setResizeCursor(), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652), this._makeDirty();
            return;
          }
          this._updateHoverAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, this._resolveActiveParagraphMenuColumnGroupId() != null);
        }
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656.offsetY, this._context["scene"]);
        this.startResizeDragAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) && (this._hoveredResizeHandle = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = this._resizeDragState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.handle) ?? null, this._hoveredColumnGroupId = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 = this._resizeDragState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.handle["columnGroupId"]) ?? null, this._setResizeCursor(), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656), this._makeDirty());
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 => {
        if (!this._resizeDragState) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, this._context["scene"]);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) {
          this._cancelResizeInteraction(), this._setDefaultCursor(), this._makeDirty();
          return;
        }
        this.releaseResizeDragAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, true), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664), this._makeDirty();
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 = () => {
        if (!this._resizeDragState && !(!this._hoveredResizeHandle && !this._hoveredColumnGroupId)) {
          if (this._retainActiveColumnHoverOnLeave()) {
            this._setDefaultCursor(), this._makeDirty();
            return;
          }
          this._hoveredResizeHandle = null, this._hoveredColumnGroupId = null, this._setDefaultCursor(), this._makeDirty();
        }
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.ownerDocument,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.defaultView;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.addEventListener("pointerdown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.addEventListener("mousedown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.addEventListener("pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.addEventListener("mousemove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.addEventListener("pointerleave", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.addEventListener("mouseleave", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.addEventListener("pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.addEventListener("mousemove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.addEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.addEventListener("mouseup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.addEventListener("pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.addEventListener("mousemove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.addEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.addEventListener("mouseup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, true), this.disposeWithMe({
      dispose: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.removeEventListener) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, "pointerdown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.removeEventListener) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, "mousedown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.removeEventListener) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, "pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.removeEventListener) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, "mousemove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.removeEventListener) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, "pointerleave", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.removeEventListener) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, "mouseleave", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.removeEventListener("pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.removeEventListener("mousemove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.removeEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.removeEventListener("mouseup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.removeEventListener("pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.removeEventListener("mousemove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.removeEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.removeEventListener("mouseup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, true);
      }
    });
  }
  _retryInitCanvasPointerEvents() {
    if (this._canvasPointerEventsRetryCount >= 10 || typeof window > "u") return;
    this._canvasPointerEventsRetryCount += 1;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 = window.setTimeout(() => this._initCanvasPointerEvents(), 100);
    this.disposeWithMe({
      dispose: () => window.clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224)
    });
  }
  _updateHoverAtPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 = false) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228;
    this._refreshColumnResizeState();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 = Qe(this._resizeHandles, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.y),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.columnGroupId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = xt(this._columnGroups["values"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.columnGroupId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 ? this._resolveActiveColumnGroupId() : null);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 !== this._hoveredResizeHandle || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 !== this._hoveredColumnGroupId) && (this._hoveredResizeHandle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229, this._hoveredColumnGroupId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 ? this._setResizeCursor() : this._setDefaultCursor(), this._makeDirty());
  }
  _refreshColumnResizeState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = this._docSkeletonManagerService["getSkeleton"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 = false) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 == null && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 = dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236, this._getDocumentPageMarginFallback());
    this._columnGroups = new Map([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238.columnGroups].filter(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680]) => this._canEditColumnGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680))), this._resizeHandles = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238.handles["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 => this._columnGroups["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.columnGroupId)), this._hoveredColumnGroupId && !this._columnGroups["has"](this._hoveredColumnGroupId) && (this._hoveredColumnGroupId = null), this._hoveredResizeHandle && !this._columnGroups["has"](this._hoveredResizeHandle["columnGroupId"]) && (this._hoveredResizeHandle = null, this._setDefaultCursor()), this._resizeDragState && !this._columnGroups["has"](this._resizeDragState["handle"].columnGroupId) && (this._resizeDragState = null, this._resizeDragDelta = 0, this._setDefaultCursor());
  }
  _initCanvasRender() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = this._context["scene"];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.afterRender$ && this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.afterRender$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.getContext) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = this._context["scene"],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [...new Set([(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = this._resizeDragState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684.handle["columnGroupId"], this._hoveredColumnGroupId, this._resolveActiveColumnGroupId()].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 != null))].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => this._columnGroups["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 != null),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = this._resizeDragState ? this._columnGroups["get"](this._resizeDragState["handle"].columnGroupId) : null;
      nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686))), rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, {
        activeDrag: this._resizeDragState ? {
          columnGroup: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 ? St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) : null,
          delta: this._resizeDragDelta * Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686).scaleX,
          handle: Z(this._resizeDragState["handle"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686)
        } : null,
        hoveredHandle: this._hoveredResizeHandle ? Z(this._hoveredResizeHandle, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) : null
      });
    }));
  }
  _setResizeCursor() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = this._context["scene"]).setCursor) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245, CURSOR_TYPE.EAST_WEST_RESIZE);
  }
  _setDefaultCursor() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 = this._context["scene"]).setCursor) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249, CURSOR_TYPE.DEFAULT);
  }
  _cancelResizeInteraction() {
    this._resizeDragState = null, this._resizeDragDelta = 0, this._hoveredResizeHandle = null, this._hoveredColumnGroupId = null;
  }
  _canEditColumnGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252) {
    return canEditDocumentTargets(this._permissionService, this._context["unitId"], [...getDocumentEntityParentPermissionObjectIds(this._context["unit"], "", "column-group", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252), getDocumentEntityPermissionObjectId("", "column-group", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252)]);
  }
  _retainActiveColumnHoverOnLeave() {
    return this._resolveActiveColumnGroupId() ? (this._resizeDragState = null, this._resizeDragDelta = 0, this._hoveredResizeHandle = null, this._hoveredColumnGroupId = null, true) : false;
  }
  _resolveActiveColumnGroupId() {
    return this._resolveActiveParagraphMenuColumnGroupId() ?? this._resolveSelectionColumnGroupId();
  }
  _resolveActiveParagraphMenuColumnGroupId() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 = this._docParagraphMenuService["activeTarget"];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 ? this._resolveColumnGroupIdByRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.menuRange) ?? this._resolveColumnGroupIdByRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.moveRange) : null;
  }
  _resolveSelectionColumnGroupId() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = this._docSelectionManagerService["getActiveTextRange"]();
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.collapsed === false ? null : this._resolveColumnGroupIdByOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.startOffset);
  }
  _resolveColumnGroupIdByRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258) {
    return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.startOffset + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.endOffset - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.endOffset].reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 ?? this._resolveColumnGroupIdByOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695), null);
  }
  _resolveColumnGroupIdByOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 of this._columnGroups["values"]()) if (!(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.st != "number" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.ed != "number" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.st || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.ed) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.columns["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.st == "number" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.ed == "number" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.st && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.ed)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.columnGroupId;
    return null;
  }
  _makeDirty() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = this._context["mainComponent"]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 = this._context["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265);
  }
  _consumePointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.skipNextObservers = true, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270);
  }
  _getDocumentPageMarginFallback() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 = this._univerInstanceService["getUnit"](this._context["unitId"], UniverInstanceType.UNIVER_DOC) ?? this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_DOC),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279.getSnapshot) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279).documentStyle,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = this._context["mainComponent"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.getOffsetConfig) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.width) ?? yt(this._context),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.pageSize) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.width,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.docsLeft) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284) / 2 : undefined),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.docsTop) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.pageMarginTop) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.pageMarginTop) ?? (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 == null ? undefined : 20);
    return {
      marginLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.marginLeft,
      marginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.marginTop,
      pageLeft: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8,
      pageTop: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9
    };
  }
};
function dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 = {}) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.getSkeletonData()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.pages) ?? [],
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 of ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.skeColumnGroups) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618.values()) ?? []) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616);
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.columnGroupId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11.push(...Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46));
    }
  }
  return {
    columnGroups: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59,
    handles: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11
  };
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627 = pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.marginLeft ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625.marginLeft ?? ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.pageWidth, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.width),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.marginTop ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.originMarginTop ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625.marginTop ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.pageWidth == null ? 0 : 20),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625.pageLeft ?? mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.parent) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.left ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625.pageTop ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.parent) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626.top) ?? 0) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.left + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.top + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12
  };
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.parent,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.columns[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637.page;
  return {
    left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.left) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.left) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.left,
    marginLeft: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.marginLeft) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.marginLeft) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.marginLeft,
    marginTop: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.marginTop) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.marginTop) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.marginTop,
    originMarginTop: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.originMarginTop) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.originMarginTop) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.originMarginTop,
    pageWidth: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.pageWidth) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.pageWidth) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.pageWidth,
    parent: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.parent) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.parent) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636.parent
  };
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 && "left" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645.left : undefined;
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647 == null || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648 ? 0 : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648) / 2;
}
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651 != null && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651 : undefined;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653) {
  let {
    scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654,
    mainComponent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.onPointerDown$ || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.onPointerMove$ || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.onPointerUp$ ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654;
}
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659.engine) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660.getCanvasElement) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660)) || (typeof document > "u" ? null : document.querySelector("canvas"));
}
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 = vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665);
  return gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667).width);
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673.getAncestorScale) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673)) ?? {},
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.scaleX || 1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.scaleY || 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673.getViewport) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673, VIEWPORT_KEY.VIEW_MAIN);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 ? {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676.viewportScrollX ?? 0),
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676.viewportScrollY ?? 0)
  } : {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23
  };
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687 ? J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.clientX - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687.left ?? 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.clientY - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687.top ?? 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685) : null;
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696;
  (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.stopImmediatePropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693);
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.y >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.y <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.columns["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.left,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.width;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.x >= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.x <= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1;
    })) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295;
  }
  return null;
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708;
  let {
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710
    } = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707.getViewport) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707, VIEWPORT_KEY.VIEW_MAIN);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711 ? {
    x: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705 - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711.viewportScrollX ?? 0)) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709,
    y: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706 - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711.viewportScrollY ?? 0)) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710
  } : {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710
  };
}
function St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720),
    {
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723
    } = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720);
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719,
    columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.left * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.width * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722
    })),
    height: H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721.x,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721.y,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.width * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722
  };
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730),
    {
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732
    } = Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730);
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.height * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731.x,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731.y
  };
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.getAncestorScale) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737)) ?? {};
  return {
    scaleX: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.scaleX || 1,
    scaleY: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.scaleY || 1
  };
}
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 = Ye, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303
    } = merge({}, Ye, this._config);
    this._configService["setConfig"]("docs-column-ui.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303);
  }
  onStarting() {
    this._injector["add"]([V]), this._injector["get"](V), [F].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 => this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698))), this._menuManagerService["mergeMenu"](Ke);
  }
  onRendered() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_DOC, [q]));
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741 as UniverDocsColumnUIPlugin };
export { V, q, K };
