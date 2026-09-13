import { ConvertDocFormulaToTextCommand, DOC_FORMULA_PLUGIN, DOC_FORMULA_SCHEMA_VERSION, DocFormulaDisplayTextService, DocFormulaModel, DocFormulaService, InsertDocFormulaCommand, RemoveDocFormulaCommand, RemoveDocFormulaMutation, SetDocFormulaMutation, SetDocFormulaNumberFormatCommand, UniverDocsFormulaPlugin, UpdateDocFormulaCommand, findDocFormulaRange, isDocFormulaRange, isDocFormulaResource } from "@univerjs-pro/docs-formula";
import { CommandType, DEFAULT_NUMBER_FORMAT, DependentOn, Disposable, DocumentDataModel, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, ThemeService, Tools, UniverInstanceType, VerticalAlign, createParagraphId, merge, touchDependencies } from "@univerjs/core";
import { DOC_INTERCEPTOR_POINT, DOC_SELECTION_OPTION_PRESERVE_CARET, DocInterceptorService, DocLayoutExecutorService, DocSelectionManagerService, DocSkeletonManagerService, UniverDocsPlugin, canEditDocumentTargets, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId } from "@univerjs/docs";
import { DocCanvasPopManagerService, DocFloatMenuService, DocHtmlExportService, DocParagraphMenuService, DocRenderController, IDocClipboardPasteAdapterService, IDocClipboardService, UniverDocsUIPlugin, disableMenuWhenHeaderFooterEditing, drawDocCustomRangeChrome, resolveDocCustomRangeChromeTheme } from "@univerjs/docs-ui";
import { CURSOR_TYPE, ComponentExtension, DocumentSkeleton, DocumentViewModel, Documents, IRenderManagerService, UniverRenderEnginePlugin, pixelToPt, ptToPixel } from "@univerjs/engine-render";
import { BehaviorSubject } from "rxjs";
import { ComponentManager, IMenuManagerService, IShortcutService, IconManager, KeyCode, MenuItemType, MenuManagerPosition, MetaKeys, RibbonInsertGroup, RibbonPosition, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { FormulaBindingEditorDialog, FormulaBindingNumberFormatDialog, SHAPE_EDITOR_UI_PLUGIN_CONFIG_KEY, UniverShapeEditorUIPlugin } from "@univerjs-pro/shape-editor-ui";
import { DeleteIcon, FxIcon, NumberIcon, TextIcon, WriteIcon } from "@univerjs/icons";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Button, Tooltip } from "@univerjs/design";
import { useState } from "react";
import { A, L, M, P, j } from "./internal-core-endo.js";
import { B, R, V, z } from "./docs-formula-ui-open-doc-formula-editor-operation.js";
import { G } from "./docs-formula-ui-docs-formula-root-menu-schema.js";
import { U, W } from "./docs-formula-ui-plugin-config-key.js";
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.fill) === A.fill && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.stroke === A.stroke && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.strokeActive === A.strokeActive && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.strokeWidth === A.strokeWidth;
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.ascent - 2,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.ascent + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.descent + 4,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 + ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399);
  return {
    bottom: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6,
    contentRight: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7,
    height: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400,
    textX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 + 2,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7
  };
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.width + 4;
}
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408) {
  return ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408;
}
function St() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481 = useDependency(DocFormulaModel),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = useDependency(L),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.editorTarget$);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.rangeId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481.getFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.rangeId) : undefined;
  return jsx(FormulaBindingEditorDialog, {
    open: true,
    host: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.unitId
    },
    value: {
      formula: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.formula) ?? "=",
      numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.numberFormat
    },
    onClose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.closeEditor(),
    onConfirm: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 => {
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.rangeId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.syncExecuteCommand(UpdateDocFormulaCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.unitId,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.rangeId,
        formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.formula,
        numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.numberFormat,
        externalReferences: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.externalReferences
      }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.syncExecuteCommand(InsertDocFormulaCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.unitId,
        formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.formula,
        numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.numberFormat,
        externalReferences: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.externalReferences,
        target: {
          type: "selection",
          selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.selection
        }
      })) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.closeEditor();
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.unitId + ":" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.rangeId ?? "new"));
}
function Ct() {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493 = useDependency(DocFormulaModel),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 = useDependency(DocFormulaDisplayTextService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = useDependency(L),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.hoverTarget$),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498] = useState(false);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.unitId,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.rangeId
      }) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.closeHover();
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493.getFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.rangeId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.resolveFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.rangeId);
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: "univer-flex univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 dark:!univer-border-gray-600 dark:!univer-bg-gray-900",
      role: "toolbar",
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.formula") + ":\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 + ".\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.actions"),
      "aria-live": "polite",
      children: [jsx(Tooltip, {
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.edit"),
        children: jsx(Button, {
          type: "button",
          size: "small",
          "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.edit"),
          onClick: () => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.syncExecuteCommand(R.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496);
          },
          children: jsx(WriteIcon, {})
        })
      }), jsx(Tooltip, {
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.numberFormat"),
        children: jsx(Button, {
          type: "button",
          size: "small",
          "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.numberFormat"),
          onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498(true),
          children: jsx(NumberIcon, {})
        })
      }), jsx(Tooltip, {
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.convertToText"),
        children: jsx(Button, {
          type: "button",
          size: "small",
          "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.convertToText"),
          onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499(ConvertDocFormulaToTextCommand.id),
          children: jsx(TextIcon, {})
        })
      }), jsx(Tooltip, {
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.delete"),
        children: jsx(Button, {
          type: "button",
          size: "small",
          "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.t("docs-formula-ui.menu.delete"),
          onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499(RemoveDocFormulaCommand.id),
          children: jsx(DeleteIcon, {})
        })
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 && jsx(FormulaBindingNumberFormatDialog, {
      open: true,
      pattern: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.numberFormat) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490.pattern) ?? DEFAULT_NUMBER_FORMAT,
      onClose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498(false),
      onConfirm: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.syncExecuteCommand(SetDocFormulaNumberFormatCommand.id, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.unitId,
          rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.rangeId,
          numberFormat: {
            pattern: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177
          }
        }) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498(false);
      }
    })]
  });
}
let K = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, this._iconManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, this._registerComponents(), this._registerIcons();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](j, St)), this.disposeWithMe(this._componentManager["register"](M, Ct));
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      FxIcon: FxIcon
    }));
  }
};
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516) {
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6--) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.right && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.bottom) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616;
  }
  return null;
}
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.collapsed ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.startOffset >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.startOffset <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.endIndex : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.startOffset === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.endOffset === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.endIndex + 1;
}
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.collapsed ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.startOffset >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.startOffset <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.endIndex : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.startOffset < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.endIndex + 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.endOffset > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.startIndex;
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533 = 0) {
  return {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533
  };
}
var Dt = class extends ComponentExtension {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183) {
    super(), this._state = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, P(this, "uKey", "DocFormulaExtension"), P(this, "type", 0), P(this, "Z_INDEX", 110);
  }
  draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 == null) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = this._state["getBody"]()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => isDocFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.startIndex === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = this.extensionOffset["spanPointWithFont"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = this._state["getResult"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.rangeId),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.text) || "…",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.color,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 = ptToPixel(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.fontStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.originFontSize) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.ts) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.fs) ?? 14),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = this._state["renderService"].getMetrics(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = this._state["isActive"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.rangeId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 = mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 && drawDocCustomRangeChrome(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, {
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.bottom,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.left,
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.contentRight,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.top
    }, this._state["getChromeTheme"]()), this._state["renderService"].draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.textX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.y), this._state["setHitRect"]({
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.bottom,
      contentRight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.contentRight,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.left,
      range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192,
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.contentRight,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.top
    });
  }
  clearCache() {
    this._state["clearHitRects"]();
  }
};
function Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540.parent;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.glyphGroup)) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.st;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541.glyphGroup) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.count || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.content) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.length) || 1;
  }
  return null;
}
function kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 = {
    fs: pixelToPt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 ? {
      cl: {
        rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550
      }
    } : null)
  };
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548,
    body: {
      dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549 + "\x0d\x0a",
      paragraphs: [{
        startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549.length,
        paragraphId: createParagraphId(new Set()),
        paragraphStyle: {
          textStyle: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15
        }
      }],
      textRuns: [{
        st: 0,
        ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549.length,
        ts: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15
      }]
    },
    documentStyle: {
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      pageSize: {
        width: 10000,
        height: Math.max(100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551 * 4)
      },
      renderConfig: {
        horizontalAlign: HorizontalAlign.LEFT,
        verticalAlign: VerticalAlign.TOP
      },
      textStyle: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15
    }
  };
}
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.getSkeletonData()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.pages[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.sections[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.columns[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560.lines[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.divides[0];
  return {
    column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560,
    divide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562,
    glyph: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.glyphGroup[0],
    line: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561,
    page: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558,
    section: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559
  };
}
function jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.line) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.divides["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.glyphGroupWidth ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.glyphGroup["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.width, 0)), 0)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571 * 0.6;
  return {
    ascent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.line && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.line["asc"] > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.line["asc"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571 * 0.8,
    descent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.line && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.line["dsc"] > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.line["dsc"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571 * 0.2,
    width: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11)
  };
}
function Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 = At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 = jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577);
  return {
    metrics: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579,
    originBaseline: Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579.ascent),
    originX: Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578)
  };
}
function Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590;
  return (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.page) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.marginTop) ?? 0) + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.section) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.top) ?? 0) + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.line) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.top) ?? 0) + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.line) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589.marginTop) ?? 0) + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.line) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590.paddingTop) ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585;
}
function Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603;
  return (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.page) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46599.marginLeft) ?? 0) + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.column) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600.left) ?? 0) + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.divide) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.left) ?? 0) + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.divide) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.paddingLeft) ?? 0) + (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46598.glyph) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.left) ?? 0);
}
let J = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218) {
    super(), this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218, P(this, "_layouts", new Map());
  }
  getMetrics(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222) {
    return this._getLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222).metrics;
  }
  draw(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 = this._getLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.translateWithPrecision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.originX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.originBaseline), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.documents["draw"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.restore(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.metrics;
  }
  dispose() {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 of this._layouts["values"]()) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.documents["dispose"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.documentSkeleton["dispose"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.documentViewModel["dispose"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.documentModel["dispose"]();
    this._layouts["clear"](), super.dispose();
  }
  _getLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 || "\x20",
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = JSON.stringify([var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 ?? "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = this._layouts["get"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = new DocumentDataModel(kt("doc-formula-render-" + this._layouts["size"], var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = new DocumentViewModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = DocumentSkeleton.create(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245, this._localeService);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246.calculate();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 = Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 = new Documents(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, {
        pageMarginLeft: 0,
        pageMarginTop: 0
      });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.resize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.metrics["width"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.metrics["ascent"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.metrics["descent"]);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
      documents: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248,
      documentModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244,
      documentSkeleton: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246,
      documentViewModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247
    };
    return this._layouts["set"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5;
  }
};
const Ft = -10980;
let Y = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, this._formulaService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, this._textRenderService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, this._popupService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261, this._interceptorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, this._docLayoutExecutorService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263, this._selectionManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264, this._skeletonManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, this._floatMenuService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266, this._paragraphMenuService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269, P(this, "_hitRects", new Map()), P(this, "_activeRangeIds", new Set()), P(this, "_hoveredRangeId", null), P(this, "_cursorBeforeHover", null), P(this, "_normalizingSelectionRangeId", null), this._initExtension(), this._initCustomRangeInterceptor(), this._initWorkerCustomRangePresentation(), this._initSelection(), this._initPointer(), this.disposeWithMe(this._formulaService["presentationChanged$"].subscribe(({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621
    }) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 === this._context["unitId"] && this._recalculateLayout();
    })), this.disposeWithMe(this._themeService["currentTheme$"].subscribe(() => {
      this._context["scene"].makeDirty(true);
    })), this.disposeWithMe(this._themeService["darkMode$"].subscribe(() => {
      this._context["scene"].makeDirty(true);
    }));
  }
  _initExtension() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = this._context["mainComponent"];
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 instanceof Documents)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.register(new Dt({
      clearHitRects: () => this._hitRects["clear"](),
      getBody: () => this._context["unit"].getBody(),
      getChromeTheme: () => resolveDocCustomRangeChromeTheme(this._themeService),
      getResult: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => this._formulaService["getResult"]({
        unitId: this._context["unitId"],
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623
      }),
      isActive: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => this._hoveredRangeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 || this._activeRangeIds["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624),
      renderService: this._textRenderService,
      setHitRect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 => this._hitRects["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.range["rangeId"], this._toDocumentHitRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625))
    }));
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283);
  }
  _initCustomRangeInterceptor() {
    this.disposeWithMe(this._interceptorService["intercept"](DOC_INTERCEPTOR_POINT.CUSTOM_RANGE, {
      priority: 110,
      handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626);
        return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 || !isDocFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 : {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
          ...this._getFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629)
        };
      }
    }));
  }
  _initWorkerCustomRangePresentation() {
    this.disposeWithMe(this._docLayoutExecutorService["registerCustomRangePresentationProvider"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 !== this._context["unitId"] || !isDocFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) ? null : this._getFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635)));
  }
  _getFormulaPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = this._formulaService["getResult"]({
        unitId: this._context["unitId"],
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.rangeId
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = ptToPixel(14),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = this._textRenderService["getMetrics"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.text) || "…", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288);
    return {
      active: this._activeRangeIds["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.rangeId),
      glyphAscentEm: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289.ascent / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288,
      glyphDescentEm: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289.descent / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288,
      glyphWidthEm: gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288),
      show: false
    };
  }
  _initSelection() {
    this.disposeWithMe(this._selectionManagerService["textSelection$"].subscribe(({
      textRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637,
      options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638
    }) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 === this._context["unitId"] && this._updateSelectionState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638[DOC_SELECTION_OPTION_PRESERVE_CARET]) === true);
    }));
  }
  _updateSelectionState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = false) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296;
    this._activeRangeIds["clear"]();
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 = this._context["unit"].getBody()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.filter(isDocFormulaRange)) ?? [],
      {
        focusedRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
        focusedSelection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
        focusedTarget: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299
      } = Lt(It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.length) === 1, this._activeRangeIds);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.collapsed || !pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.style)) && this._normalizingSelectionRangeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.rangeId) {
      this._normalizingSelectionRangeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.rangeId, this._selectFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298);
      return;
    }
    (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 || pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.style)) && (this._normalizingSelectionRangeId = null), this._popupService["hasOpenEditor"] || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 ? (this._closeCompetingContextMenus(), this._popupService["showHover"]({
      unitId: this._context["unitId"],
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299
    }, () => this._getFormulaAnchorRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.rangeId))) : this._popupService["closeHover"]()), this._context["scene"].makeDirty(true);
  }
  _initPointer() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 = this._context["mainComponent"] ?? this._context["scene"];
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.onPointerMove$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642]) => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.buttons > 0) {
          this._restoreCursor();
          return;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 = Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.offsetY, this._context["scene"]),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 = wt([...this._hitRects["values"]()], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.y);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) {
          this._setHoveredRange(null), this._restoreCursor();
          return;
        }
        this._setHoveredRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.range["rangeId"]), this._setPointerCursor();
      },
      priority: Ft
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.onPointerLeave$["subscribeEvent"](() => {
      this._setHoveredRange(null), this._restoreCursor();
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.onPointerDown$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649]) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.button === 2) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.offsetY, this._context["scene"]),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = wt([...this._hitRects["values"]()], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.y);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.skipNextObservers = true, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648), this._closeCompetingContextMenus(), this._selectFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.range, {
          segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.segmentId,
          segmentPage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.segmentPage
        }), this._popupService["showHover"]({
          unitId: this._context["unitId"],
          rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.range["rangeId"],
          segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.segmentId,
          segmentPage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.segmentPage
        }, () => this._getFormulaAnchorRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.range["rangeId"])));
      },
      priority: Ft
    }));
  }
  _selectFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309) {
    this._selectionManagerService["replaceDocRanges"]([{
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.endIndex + 1,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.segmentId,
      segmentPage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.segmentPage,
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.startIndex,
      style: A
    }], {
      subUnitId: this._context["unitId"],
      unitId: this._context["unitId"]
    });
  }
  _closeCompetingContextMenus() {
    this._floatMenuService["hideFloatMenu"](), this._paragraphMenuService["hideParagraphMenu"](true);
  }
  _getFormulaAnchorRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = this._hitRects["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 ? {
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.bottom,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.left,
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.right,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.top
    } : undefined;
  }
  _toDocumentHitRect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 = this._context["mainComponent"];
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 instanceof Documents)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316;
    let {
      docsLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 = 0,
      docsTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = 0
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.getOffsetConfig();
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316,
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.bottom + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319,
      contentRight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.contentRight + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318,
      right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.right + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319
    };
  }
  _setPointerCursor() {
    this._cursorBeforeHover ??= this._context["scene"].getCursor(), this._context["scene"].setCursor(CURSOR_TYPE.POINTER);
  }
  _setHoveredRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324) {
    this._hoveredRangeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 && (this._hoveredRangeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324, this._context["scene"].makeDirty(true));
  }
  _restoreCursor() {
    this._cursorBeforeHover != null && (this._context["scene"].setCursor(this._cursorBeforeHover), this._cursorBeforeHover = null);
  }
  _recalculateLayout() {
    if (this._docLayoutExecutorService["getExecutor"]() != null) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Math.min(...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = this._context["unit"].getBody()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.filter(isDocFormulaRange).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.startIndex)) ?? [0])),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = this._renderManagerService["getRenderUnitById"](this._context["unitId"])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327.with(DocRenderController);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 != null) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1) ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 : 0;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.reRender(this._context["unitId"], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, undefined, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D, false, true);
        return;
      }
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 = this._skeletonManagerService["getSkeleton"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.makeDirty(true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.calculate(), this._context["scene"].makeDirty(true);
  }
};
function It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332.collapsed)) ?? [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 ?? [];
}
function Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618 = null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619 = null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620 = null;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
      collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.collapsed,
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.endOffset ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.startOffset ?? 0,
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.startOffset ?? 0
    };
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615) Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.rangeId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 && Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620 = {
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.rangeId,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.segmentId,
      segmentPage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.segmentPage
    });
  }
  return {
    focusedRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618,
    focusedSelection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619,
    focusedTarget: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620
  };
}
function Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630) {
  let {
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.getAncestorScale(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.getViewport("viewMain");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 ? q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633.viewportScrollX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633.viewportScrollY) : q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632);
}
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338) {
    super(), this._displayTextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, this._model = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338, this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.addClipboardHook({
      onBeforePaste: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662) => this._degradeCrossDocumentPaste(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.documentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.targetUnitId),
      onCopyDocData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664) => this._appendFormulaResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.sourceDocuments),
      onCopyContent: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.segmentId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.body["dataStream"].slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) : this._displayTextService["resolveText"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666)
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.registerAdapter({
      getPasteMutationInfos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 => this._getPasteMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668)
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.registerTransformer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 => this._displayTextService["degradeDocumentData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669)));
  }
  _appendFormulaResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345.length !== 1) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345[0],
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {};
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.customRanges) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 => {
      if (!isDocFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = this._model["getFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.rangeId);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.rangeId] = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.rangeId] = this._displayTextService["resolveFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.rangeId));
    }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7).length === 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = {
      schemaVersion: DOC_FORMULA_SCHEMA_VERSION,
      formulas: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7,
      clipboard: {
        sourceUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.id,
        displayText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8
      }
    };
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344,
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.id,
      resources: [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344.resources ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.name !== DOC_FORMULA_PLUGIN), {
        name: DOC_FORMULA_PLUGIN,
        data: JSON.stringify(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9)
      }]
    };
  }
  _degradeCrossDocumentPaste(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355 = zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355.clipboard["sourceUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 : this._displayTextService["degradeBody"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355.clipboard["sourceUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355.clipboard["displayText"]);
  }
  _getPasteMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.doc);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.clipboard["sourceUnitId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.unitId) return {
      redoMutations: [],
      undoMutations: []
    };
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.customRangeMappings ?? []) {
      if (!isDocFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.sourceRange)) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.formulas[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.sourceRange["rangeId"]];
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 || !isDocFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.targetRange) || (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push({
        id: SetDocFormulaMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.unitId,
          rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.targetRange["rangeId"],
          config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.push({
        id: RemoveDocFormulaMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.unitId,
          rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.targetRange["rangeId"]
        }
      }));
    }
    return {
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2,
      undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3
    };
  }
};
function zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.name === DOC_FORMULA_PLUGIN);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642) return null;
  try {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642.data);
    if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 || typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 != "object" || Array.isArray(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13) || Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13).length !== 3 || !("schemaVersion" in var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13) || !("formulas" in var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13) || !("clipboard" in var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13)) return null;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = {
      schemaVersion: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.schemaVersion,
      formulas: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.formulas
    };
    if (!isDocFormulaResource(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 = Bt(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.clipboard);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 ? {
      schemaVersion: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.schemaVersion,
      formulas: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.formulas,
      clipboard: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365
    } : null;
  } catch {
    return null;
  }
}
function Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646 != "object" || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646) || Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646).length !== 2 || !("sourceUnitId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646) || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646.sourceUnitId != "string" || !("displayText" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646.displayText || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646.displayText != "object" || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646.displayText)) return null;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646.displayText)) {
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 != "string") return null;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367;
  }
  return {
    sourceUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646.sourceUnitId,
    displayText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17
  };
}
const Z = 1000;
function Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 => Ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.target, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648.hasSelectedFormula);
  return [{
    id: R.id,
    binding: KeyCode.ENTER,
    priority: Z,
    eventPreconditions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649
  }, {
    id: z.id,
    binding: KeyCode.F10 | MetaKeys.SHIFT,
    priority: Z,
    eventPreconditions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649
  }, {
    id: B.id,
    binding: KeyCode.ESC,
    priority: Z,
    eventPreconditions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648.hasOpenPopup
  }, {
    id: V.id,
    binding: KeyCode.BACKSPACE,
    priority: Z,
    eventPreconditions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649
  }, {
    id: V.id,
    binding: KeyCode.DELETE,
    priority: Z,
    eventPreconditions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649
  }];
}
function Ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653) {
  return !Ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653();
}
function Ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656) {
  return typeof HTMLElement < "u" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 instanceof HTMLElement && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.isContentEditable || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 instanceof HTMLInputElement || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 instanceof HTMLTextAreaElement);
}
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, this._shortcutService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372, this._popupService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373, [R, z, B, V].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676));
    }), Vt({
      hasOpenPopup: () => this._popupService["hasOpenPopup"],
      hasSelectedFormula: () => this._hasSelectedFormula()
    }).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 => {
      this.disposeWithMe(this._shortcutService["registerShortcut"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678));
    }), this._menuManagerService["appendRootMenu"](G);
  }
  _hasSelectedFormula() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_DOC)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.getUnitId();
    return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 && this._popupService["getSelectedFormulaTarget"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380));
  }
};
const Wt = [Y];
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 = W, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386;
    let {
      menu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388
    } = merge({}, W, this._config);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 && this._configService["setConfig"]("menu", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387, {
      merge: true
    }), this._configService["setConfig"](U, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388), this._configService["setConfig"](SHAPE_EDITOR_UI_PLUGIN_CONFIG_KEY, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, {
      merge: true
    });
  }
  onStarting() {
    this._injector["add"]([J]), this._injector["add"]([L]), this._injector["add"]([K]), this._injector["add"]([Q]), this._injector["add"]([X]), touchDependencies(this._injector, [[J], [K], [Q], [X]]);
  }
  onRendered() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_DOC, Wt));
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 as UniverDocsFormulaUIPlugin };
export { K, J, Y, X, Q };
