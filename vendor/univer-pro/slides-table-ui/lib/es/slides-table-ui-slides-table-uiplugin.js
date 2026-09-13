import { UniverLicensePlugin } from "@univerjs-pro/license";
import { ISlideDrawingService, PageElementTypeEnum, ReorderSlideElementsCommand, UniverSlidesPlugin, UpdateSlideDrawingCommand, getSlidePermissionValue, normalizeSlideDocumentDataStream, slideDocumentDataToPlainText } from "@univerjs-pro/slides";
import { DEFAULT_SLIDE_TABLE_THEME_PRESETS, DeleteSlideTableColumnsCommand, DeleteSlideTableRowsCommand, InsertSlideTableColumnsCommand, InsertSlideTableRowsCommand, MergeSlideTableCellsCommand, MoveSlideTableColumnsCommand, MoveSlideTableRowsCommand, RemoveSlideTableCommand, RemoveSlideTableMutation, SLIDE_TABLE_CONTROL_GUTTER, SetSlideTableMutation, SlideTableBorderDashEnum, SlideTableBorderPresetEnum, SlideTableFillTypeEnum, SlideTableModelService, SlideTablePictureFillModeEnum, SlideTableResourceService, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum, UniverSlidesTablePlugin, UnmergeSlideTableCellsCommand, UpdateSlideTableCommand, buildBorderPresetPatch, buildDefaultSlideTableThemes, buildSlideTableCellTextDataPatch, buildSlideTableControls, buildSlideTableTriggers, canMoveSlideTableColumns, canMoveSlideTableRows, collectSlideTableMergeRanges, expandSlideTableRangeToMergedCells, findSlideTableMergeRange, freezeSlideTableTheme, getDefaultSlideTableBorder, hitTestSlideTableControl, hitTestSlideTableFloatingControl, hitTestSlideTableTrigger, isPointInRect, isSlideTableMultiCellRange, iterateSelectedSlideTableCells, mergeSlideTableCellStyle, mergeSlideTableCells, normalizeSlideTableCellRange, resolveSlideTableCellBoundaryBorder, resolveSlideTableCellRect, resolveSlideTableCellTextMargins, resolveSlideTableRenderModel, resolveSlideTableThemePalette, unmergeSlideTableCells } from "@univerjs-pro/slides-table";
import { IEditorUIService, ISlideAlignmentGuideService, ISlideClipboardResourceAdapterService, ISlideDrawingStateService, ISlideEmbedFloatingActiveService, ISlideEmbedFocusOwnerService, ISlideEmbedMountService, ISlideTransformerVisibilityService, SLIDES_UI_PLUGIN_CONFIG_KEY, SLIDE_MAIN_VIEWPORT_KEY, SlideHitTestService, SlideInsertService, UniverSlidesUIPlugin, buildDrawingOKey, stripEditorUIDocumentData, withSlideEditPermission } from "@univerjs-pro/slides-ui";
import { ArrangeTypeEnum, BooleanNumber, ColorKit, CommandType, DEFAULT_STYLES, DependentOn, Disposable, DocumentDataModel, DocumentFlavor, EDITOR_ACTIVATED, FOCUSING_COMMON_DRAWINGS, FOCUSING_SLIDE, HorizontalAlign, ICommandService, IConfigService, IContextService, IImageIoService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Optional, Plugin, PresetListType, RxDisposable, ThemeService, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createParagraphId, generateRandomId, merge, toDisposable, touchDependencies } from "@univerjs/core";
import { CURSOR_TYPE, DocumentSkeleton, DocumentViewModel, Documents, IRenderManagerService, RENDER_CLASS_TYPE, Rect, Transform, UniverRenderEnginePlugin, VERTICAL_ROTATE_ANGLE, Vector2, pxToNum } from "@univerjs/engine-render";
import { BuiltInUIPart, ComponentManager, ContextMenuGroup, FONT_SIZE_LIST, FontFamilyDropdown, IContextMenuService, IMenuManagerService, IRibbonService, IShortcutService, IUIPartsService, IconManager, KeyCode, MenuItemType, MenuManagerPosition, MetaKeys, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { BehaviorSubject, combineLatest, map, merge as mergeLocal, of, startWith } from "rxjs";
import { AdjustHeightDoubleIcon, AdjustWidthDoubleIcon, AlignBottomIcon, AlignTextBothIcon, AlignTopIcon, AllBorderIcon, BoldIcon, CancelMergeIcon, CheckMarkIcon, DeleteColumnDoubleIcon, DeleteIcon, DeleteRowDoubleIcon, DownBorderDoubleIcon, FontColorDoubleIcon, FontSizeIncreaseIcon, FontSizeReduceIcon, HorizontalBorderDoubleIcon, HorizontallyIcon, InnerBorderDoubleIcon, InsertRowAboveDoubleIcon, InsertRowBelowDoubleIcon, ItalicIcon, LeftBorderDoubleIcon, LeftInsertColumnDoubleIcon, LeftJustifyingIcon, MergeAllIcon, MoreDownIcon, NoBorderIcon, OrderIcon, OuterBorderDoubleIcon, PaintBucketDoubleIcon, PaintIcon, RightBorderDoubleIcon, RightInsertColumnDoubleIcon, RightJustifyingIcon, ShapeBackgroundColorDoubleIcon, StrikethroughIcon, TextIcon, UnderlineIcon, UnorderIcon, UpBorderDoubleIcon, VerticalBorderDoubleIcon, VerticalCenterIcon } from "@univerjs/icons";
import { FillStyleTabsEditor, keepFloatingToolbarPanelInteraction } from "@univerjs-pro/shape-editor-ui";
import { Button, Checkbox, ColorPicker, Dropdown, InputNumber, Select, Separator, Tooltip, borderClassName, clsx } from "@univerjs/design";
import { BulletListTypePicker, OrderListTypePicker, convertBodyToHtml, convertClipboardHtmlToDocumentData, removeClipboardHtmlImages } from "@univerjs/docs-ui";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getImageSize } from "@univerjs/drawing";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { extractClipboardHtmlImageFiles, extractClipboardImageFiles, extractClipboardTextImageFile, isClipboardTextImage, normalizeClipboardImageFile } from "@univerjs/drawing-ui";
import { UnitAction } from "@univerjs/protocol";
import { parseHtmlTableClipboard } from "@univerjs-pro/docs-table";
import { q } from "./slides-table-ui-slide-table-context-menu-actions.js";
import { G } from "./slides-table-ui-slide-table-selection.js";
import { J } from "./slides-table-ui-slide-table-selection-context.js";
import { Dr } from "./slides-table-ui-slide-table-context-menu.js";
import { Rr } from "./slides-table-ui-slide-table-border-preset-patch.js";
import { kr } from "./slides-table-ui-slide-table-text-align-patch.js";
import { Nr } from "./slides-table-ui-slide-table-background-color-patch.js";
import { Fr } from "./slides-table-ui-slide-table-text-color-patch.js";
import { Co, Gr, Ho, Hr, Kr, No, Oo, Sa, Uo, Ur, Vo, Vr, W, Wr, bl, bo, cl, fa, fo, fs, jo, ko, oo, ts, ul, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78, xc } from "./internal-core-endo.js";
import { aa } from "./slides-table-ui-table-keyboard.js";
import { ra } from "./slides-table-ui-slide-table-document-editor-target.js";
import { na } from "./slides-table-ui-slide-table-editable-target.js";
import { la } from "./slides-table-ui-slide-table-keyboard-shortcut-bindings.js";
import { Xa } from "./slides-table-ui-slide-table-merge-toolbar.js";
import { Za } from "./slides-table-ui-slide-table-toolbar.js";
import { lo } from "./slides-table-ui-table-toolbar-dropdown-interaction-guard.js";
import { Ca } from "./slides-table-ui-slide-table-default-background-color.js";
import { ac } from "./slides-table-ui-slide-table-selection-to-text.js";
import { oc } from "./slides-table-ui-slide-table-selection-to-html.js";
import { uc } from "./slides-table-ui-slide-table-clear-text-patch.js";
import { lc } from "./slides-table-ui-slide-table-paste-html-patch.js";
import { cc } from "./slides-table-ui-slide-table-paste-text-patch.js";
import { Cc } from "./slides-table-ui-slide-table-insert-dot-trigger.js";
import { wc } from "./slides-table-ui-slide-table-insert-dot-control-state.js";
import { ua } from "./slides-table-ui-slide-table-keyboard-movement.js";
import { da } from "./slides-table-ui-next-slide-table-keyboard-cell.js";
import { Ws } from "./slides-table-ui-replace-slide-table-cell-document-text.js";
import { Gs } from "./slides-table-ui-slide-table-cell-editor-layout.js";
import { qs } from "./slides-table-ui-slide-table-cell-document-data.js";
import { sc } from "./slides-table-ui-slide-table-cell-style-attribute.js";
import { Ia } from "./slides-table-ui-slide-table-fill-type.js";
import { Ba } from "./slides-table-ui-slide-table-gradient-value.js";
import { Ha } from "./slides-table-ui-slide-table-fill-preview-style.js";
import { Pr } from "./slides-table-ui-slide-table-background-fill-patch.js";
import { Lr } from "./slides-table-ui-slide-table-border-style-patch.js";
import { zr } from "./slides-table-ui-slide-table-font-family-patch.js";
import { Ga } from "./slides-table-ui-option.js";
import { Br } from "./slides-table-ui-slide-table-font-size-patch.js";
import { ti } from "./slides-table-ui-slide-table-text-style-patch.js";
import { Ir } from "./slides-table-ui-slide-table-text-fill-patch.js";
import { Ro } from "./slides-table-ui-table-theme-gallery.js";
import { vr, yr } from "./slides-table-ui-plugin-config-key.js";
const oi = {
    insertRows: InsertSlideTableRowsCommand.id,
    insertColumns: InsertSlideTableColumnsCommand.id,
    deleteRows: DeleteSlideTableRowsCommand.id,
    deleteColumns: DeleteSlideTableColumnsCommand.id,
    mergeCells: MergeSlideTableCellsCommand.id,
    unmergeCells: UnmergeSlideTableCellsCommand.id,
    updateTable: UpdateSlideTableCommand.id
  },
  si = [{
    title: "slides-table-ui.contextMenu.resetColor"
  }, {
    title: "white",
    color: "white"
  }, {
    title: "gray.100",
    color: "gray.100"
  }, {
    title: "primary.100",
    color: "primary.100"
  }, {
    title: "blue.100",
    color: "blue.100"
  }, {
    title: "green.100",
    color: "green.100"
  }, {
    title: "yellow.100",
    color: "yellow.100"
  }, {
    title: "red.100",
    color: "red.100"
  }],
  ci = [{
    title: "slides-table-ui.contextMenu.resetColor"
  }, {
    title: "gray.900",
    color: "gray.900"
  }, {
    title: "gray.500",
    color: "gray.500"
  }, {
    title: "red.600",
    color: "red.600"
  }, {
    title: "orange.600",
    color: "orange.600"
  }, {
    title: "yellow.700",
    color: "yellow.700"
  }, {
    title: "green.600",
    color: "green.600"
  }, {
    title: "blue.600",
    color: "blue.600"
  }, {
    title: "purple.600",
    color: "purple.600"
  }],
  li = Hi("slide.operation.slide-table-insert-row-above", q.InsertRowAbove),
  ui = Hi("slide.operation.slide-table-insert-row-below", q.InsertRowBelow),
  di = Hi("slide.operation.slide-table-insert-column-left", q.InsertColumnLeft),
  fi = Hi("slide.operation.slide-table-insert-column-right", q.InsertColumnRight),
  pi = Hi("slide.operation.slide-table-delete-rows", q.DeleteRows),
  mi = Hi("slide.operation.slide-table-delete-columns", q.DeleteColumns),
  hi = Hi("slide.operation.slide-table-merge-cells", q.MergeCells),
  gi = Hi("slide.operation.slide-table-unmerge-cells", q.UnmergeCells),
  var_L0_core_endo_options_pure_O1_zalloc_nothrow_sig29DC = Hi("slide.operation.slide-table-distribute-rows", q.DistributeRows),
  vi = Hi("slide.operation.slide-table-distribute-columns", q.DistributeColumns),
  yi = {
    id: "slide.operation.slide-table-copy-table",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463271 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463271.get(ICommandService).executeCommand("slide.operation.copy-selection")
  },
  bi = {
    id: "slide.operation.slide-table-cut-table",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463272 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463272.get(ICommandService).executeCommand("slide.operation.cut-selection")
  },
  xi = {
    id: "slide.operation.slide-table-delete-table",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463273 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463274 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463273.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463275 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463273.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463273.get(ISlideDrawingStateService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463273.get(G),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463278 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277.getSelection(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463279 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463278),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463278 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463279 ? {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463279.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463278.subUnitId,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463279.tableId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463279.elementId
        } : null;
      if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463276.getSnapshot(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.selectedIds["length"] === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.selectedIds[0] : undefined,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.context && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463275.getDrawingByParam({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.context,
            drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636
          }) : null;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.context && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637.element["type"]) === PageElementTypeEnum.Table && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.context["unitId"],
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635.context["subUnitId"],
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637.element["tableId"],
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636
        });
      }
      if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463280 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463274.syncExecuteCommand(RemoveSlideTableCommand.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463280 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277.clear(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463276.clearSelection()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463280;
    }
  };
function Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289,
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.get(ISlideDrawingService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.get(ISlideDrawingStateService).getSnapshot(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.selectedIds["length"] === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.selectedIds[0] : undefined;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.context || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.getDrawingByParam({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.context,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641
      });
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642.element["type"]) !== PageElementTypeEnum.Table) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.getDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.context["subUnitId"]),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641);
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 < 0) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290 === ArrangeTypeEnum.forward && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.length - 1) [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 + 1]] = [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 + 1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59]];else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290 === ArrangeTypeEnum.backward && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 > 0) [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 - 1]] = [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 - 1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59]];else {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290 === ArrangeTypeEnum.front && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.length - 1) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59, 1), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641);else {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290 === ArrangeTypeEnum.back && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 > 0) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59, 1), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.unshift(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641);else return false;
          }
        }
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.get(ICommandService).executeCommand(ReorderSlideElementsCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.context["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.context["subUnitId"],
        drawingIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8
      });
    }
  };
}
const Ci = Si("slide-table.operation.arrange-forward", ArrangeTypeEnum.forward),
  wi = Si("slide-table.operation.arrange-backward", ArrangeTypeEnum.backward),
  Ti = Si("slide-table.operation.arrange-front", ArrangeTypeEnum.front),
  Ei = Si("slide-table.operation.arrange-back", ArrangeTypeEnum.back),
  Di = Ui("slide-table.operation.border-all", SlideTableBorderPresetEnum.All),
  Oi = Ui("slide-table.operation.border-outer", SlideTableBorderPresetEnum.Outer),
  ki = Ui("slide-table.operation.border-inner", SlideTableBorderPresetEnum.Inner),
  Ai = Ui("slide-table.operation.border-none", SlideTableBorderPresetEnum.None),
  ji = Wi("slide-table.operation.align-left", {
    axis: "horizontal",
    value: HorizontalAlign.LEFT
  }),
  Mi = Wi("slide-table.operation.align-center", {
    axis: "horizontal",
    value: HorizontalAlign.CENTER
  }),
  Ni = Wi("slide-table.operation.align-right", {
    axis: "horizontal",
    value: HorizontalAlign.RIGHT
  }),
  Pi = Wi("slide-table.operation.align-top", {
    axis: "vertical",
    value: VerticalAlign.TOP
  }),
  Fi = Wi("slide-table.operation.align-middle", {
    axis: "vertical",
    value: VerticalAlign.MIDDLE
  }),
  Ii = Wi("slide-table.operation.align-bottom", {
    axis: "vertical",
    value: VerticalAlign.BOTTOM
  }),
  Li = si.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463294) => Gi("slide-table.operation.background-color-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463293)),
  Ri = ci.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463296) => Ki("slide-table.operation.text-color-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463295)),
  zi = [li, ui, di, fi, pi, mi, hi, gi, var_L0_core_endo_options_pure_O1_zalloc_nothrow_sig29DC, vi, yi, bi, xi, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, ...Li, ...Ri];
function Bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463297) {
  return J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463297.getSelection());
}
function Vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463301) {
  return Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463301, oi);
}
function Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463306) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463305,
    type: CommandType.OPERATION,
    handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650.get(G).getSelection(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653 = Vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.tableId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463306);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650.get(ICommandService).executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.commandId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.params) : false;
    }
  };
}
function Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463309, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463309,
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659 = Bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658.get(G));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659.tableId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658.get(ICommandService).executeCommand(UpdateSlideTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659.tableId,
        patch: Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659.range, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310)
      }) : false;
    }
  };
}
function Wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463314) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463313,
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665 = Bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.get(G));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.tableId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.get(ICommandService).executeCommand(UpdateSlideTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.tableId,
        patch: kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.range, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463314)
      }) : false;
    }
  };
}
function Gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463318) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463318.title,
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671 = Bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670.get(G));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.tableId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670.get(ICommandService).executeCommand(UpdateSlideTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.tableId,
        patch: Nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.range, qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463318.color))
      }) : false;
    }
  };
}
function Ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463322) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463321,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463322.title,
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 = Bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676.get(G));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.tableId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676.get(ICommandService).executeCommand(UpdateSlideTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.tableId,
        patch: Fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.range, qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463322.color))
      }) : false;
    }
  };
}
function qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463326) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463326) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463325.get(ThemeService);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327.isValidThemeColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463326) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327.getColorFromTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463326) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463326;
}
function Ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463331) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463331.get(G).getSelection(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463333 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332);
  return Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463333 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463331.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463333.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463333.tableId) : null);
}
function Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463337) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463338 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463337.get(G).getSelection(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463338);
  return Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463337.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463339.tableId) : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463338);
}
function Xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463343) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463344 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463343.get(G).getSelection(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463345 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463344);
  return Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463345 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463343.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463345.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463345.tableId) : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463344);
}
function Zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463349) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463349.get(G).getSelection(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463351 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350);
  return Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463351 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463349.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463351.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463351.tableId) : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463350);
}
function Qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463355) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463356 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463355.get(G).getSelection(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463356);
  return Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463355.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357.tableId) : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463356);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463361) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463361.get(G).getSelection(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362);
  return Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463361.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363.tableId) : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362);
}
let sa = class extends aa {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706) {
    super(), this._contextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706;
  }
  canHandleNativeInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709) {
    return !this._contextService["getContextValue"](FOCUSING_SLIDE) || !this._contextService["getContextValue"]("FOCUSING_SLIDE_TABLE") ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.allowDocsEditor && ra(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708.target) ? true : !na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708.target);
  }
};
const ha = {
    id: "slide-table.operation.keyboard",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428.action ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463427.get(sa).handle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428.action) : false
  },
  ga = [ha],
  var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A77 = la({
    "arrow-left": KeyCode.ARROW_LEFT,
    "arrow-right": KeyCode.ARROW_RIGHT,
    "arrow-up": KeyCode.ARROW_UP,
    "arrow-down": KeyCode.ARROW_DOWN,
    "shift-arrow-left": KeyCode.ARROW_LEFT | MetaKeys.SHIFT,
    "shift-arrow-right": KeyCode.ARROW_RIGHT | MetaKeys.SHIFT,
    "shift-arrow-up": KeyCode.ARROW_UP | MetaKeys.SHIFT,
    "shift-arrow-down": KeyCode.ARROW_DOWN | MetaKeys.SHIFT,
    tab: KeyCode.TAB,
    "shift-tab": KeyCode.TAB | MetaKeys.SHIFT,
    enter: KeyCode.ENTER,
    f2: KeyCode.F2,
    delete: KeyCode.DELETE,
    backspace: KeyCode.BACKSPACE
  }).map(({
    binding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463429,
    action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463430
  }) => ya(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463430)),
  va = [KeyCode.DELETE, KeyCode.BACKSPACE].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463431 => ({
    id: xi.id,
    binding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463431,
    priority: 130,
    preconditions: xa
  }));
function ya(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433) {
  return {
    id: ha.id,
    binding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463432,
    priority: 130,
    preconditions: ba,
    staticParameters: {
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433
    }
  };
}
function ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463436) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463436.getContextValue(FOCUSING_SLIDE) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463436.getContextValue("FOCUSING_SLIDE_TABLE"));
}
function xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463438) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463438.getContextValue(FOCUSING_SLIDE) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463438.getContextValue(FOCUSING_COMMON_DRAWINGS) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463438.getContextValue("FOCUSING_SLIDE_TABLE_OBJECT") && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463438.getContextValue(EDITOR_ACTIVATED));
}
function so(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463635) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463633 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463634 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463635 ? null : Xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463633, {
    action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463634,
    range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463635
  }, {
    mergeCells: MergeSlideTableCellsCommand.id,
    unmergeCells: UnmergeSlideTableCellsCommand.id
  });
}
function co(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640) {
  return Za(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640, {
    deleteRows: DeleteSlideTableRowsCommand.id,
    deleteColumns: DeleteSlideTableColumnsCommand.id
  });
}
function wo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463728) {
  return jsx("div", {
    className: "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463728.children
  });
}
function To(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463730) {
  return jsx(Tooltip, {
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463730.title,
    placement: "bottom",
    children: jsx("span", {
      children: jsx(Button, {
        size: "small",
        variant: "ghost",
        type: "button",
        "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463730["data-toolbar-item"],
        "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463730.title,
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463730.title,
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463730.onClick();
        },
        onMouseDown: keepFloatingToolbarPanelInteraction,
        onPointerDown: keepFloatingToolbarPanelInteraction,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463730.children
      })
    })
  });
}
function Eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732) {
  return jsx(Tooltip, {
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.title,
    placement: "bottom",
    children: jsx(Button, {
      size: "small",
      variant: "ghost",
      type: "button",
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.title,
      className: clsx({
        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.active
      }),
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.onClick();
      },
      onMouseDown: keepFloatingToolbarPanelInteraction,
      onPointerDown: keepFloatingToolbarPanelInteraction,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.children
    })
  });
}
function Do(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463735 = useDependency(LocaleService);
  return jsx(lo, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.onOpenChange,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.open,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786,
      overlay: jsxs("section", {
        className: clsx(Co, "univer-grid univer-gap-2 univer-p-2", borderClassName),
        "data-u-comp": "slide-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116);
        },
        children: [jsxs("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-2",
          children: [jsx(Eo, {
            active: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].bold && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["bold"],
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463735.t("slides-table-ui.editorToolbar.bold"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.onToggleStyle({
              bl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].bold || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["bold"] ? BooleanNumber.TRUE : BooleanNumber.FALSE
            }),
            children: jsx(BoldIcon, {})
          }), jsx(Eo, {
            active: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].italic && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["italic"],
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463735.t("slides-table-ui.editorToolbar.italic"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.onToggleStyle({
              it: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].italic || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["italic"] ? BooleanNumber.TRUE : BooleanNumber.FALSE
            }),
            children: jsx(ItalicIcon, {})
          }), jsx(Eo, {
            active: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].underline && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["underline"],
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463735.t("slides-table-ui.editorToolbar.underline"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.onToggleStyle({
              ul: {
                s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].underline || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["underline"] ? BooleanNumber.TRUE : BooleanNumber.FALSE
              }
            }),
            children: jsx(UnderlineIcon, {})
          }), jsx(Eo, {
            active: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].strike && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["strike"],
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463735.t("slides-table-ui.editorToolbar.strikethrough"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.onToggleStyle({
              st: {
                s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].strike || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["strike"] ? BooleanNumber.TRUE : BooleanNumber.FALSE
              }
            }),
            children: jsx(StrikethroughIcon, {})
          })]
        }), jsx(Separator, {}), jsx("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-2",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.horizontalAlignOptions["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 => jsx(Eo, {
            active: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].horizontalAlign && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["horizontalAlign"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.value,
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463735.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.labelKey),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.onHorizontalAlign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.value),
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.icon
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.value))
        }), jsx(Separator, {}), jsx("div", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.verticalAlignOptions["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 => jsx(Eo, {
            active: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["mixed"].verticalAlign && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.values["verticalAlign"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.value,
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463735.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.labelKey),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.onVerticalAlign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.value),
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.icon
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.value))
        })]
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463735.t("slides-table-ui.editorToolbar.textFormat"),
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            type: "button",
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.open,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463735.t("slides-table-ui.editorToolbar.textFormat"),
            className: clsx({
              "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463734.open
            }),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [jsx(TextIcon, {}), jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
const ns = "slides-table-ui.ribbon.tableDesign",
  rs = "slides-table-ui.ribbon.styles-control",
  is = "slides-table-ui.ribbon.cell-style-control",
  as = "slides-table-ui.ribbon.text-control";
function os(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463924,
    type: MenuItemType.BUTTON,
    label: {
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925,
      hoverable: false,
      selectable: false
    }
  };
}
function ss() {
  return os(rs, Vo);
}
function cs() {
  return os(is, Ho);
}
function ls() {
  return os(as, Uo);
}
function us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463930 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928.get(Sa),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463928.get(IConfigService).getConfig(SLIDES_UI_PLUGIN_CONFIG_KEY)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929.editor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463929.enabled) !== false;
  return {
    id: Ca.id,
    type: MenuItemType.BUTTON,
    icon: "ShowToolbarIcon",
    title: "slides-table-ui.ribbon.floatingToolbar",
    tooltip: "slides-table-ui.ribbon.floatingToolbar",
    activated$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463930.enabled$,
    disabled$: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 ? undefined : of(true)
  };
}
const ds = {
  forward: {
    id: Ci.id,
    icon: "MoveUpIcon",
    title: "slides-table-ui.ribbon.arrangeForward"
  },
  backward: {
    id: wi.id,
    icon: "MoveDownIcon",
    title: "slides-table-ui.ribbon.arrangeBackward"
  },
  front: {
    id: Ti.id,
    icon: "TopmostIcon",
    title: "slides-table-ui.ribbon.bringToFront"
  },
  back: {
    id: Ei.id,
    icon: "BottomIcon",
    title: "slides-table-ui.ribbon.sendToBack"
  }
};
function ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463947) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948 = ds[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463947];
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948.id,
    type: MenuItemType.BUTTON,
    icon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948.icon,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948.title,
    tooltip: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948.title,
    disabled$: fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463947)
  };
}
const ms = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463952 => ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463952, "forward"),
  hs = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463953 => ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463953, "backward"),
  gs = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463954 => ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463954, "front"),
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464932 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463955 => ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463955, "back");
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463956, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463957) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463958 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463956.get(IConfigService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463959 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463956.get(SlideTableModelService);
  return combineLatest([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463956.get(G).selection$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463959.tableChange$["pipe"](startWith(undefined))]).pipe(map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914]) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463958.getConfig(SLIDES_UI_PLUGIN_CONFIG_KEY)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.editor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.enabled) === false || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914.kind) === "text" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463957(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463956);
  }));
}
const vs = "slide-table.menu.insert",
  ys = "slide-table.menu.delete",
  bs = "slide-table.menu.distribute";
function xs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463964) {
  return {
    id: vs,
    type: MenuItemType.SUBITEMS,
    title: "slides-table-ui.contextMenu.insert",
    hidden$: Ss(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463964)
  };
}
function Ss(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463966) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463966) return of(true);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463967 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463966.get(G),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463968 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463966.get(SlideTableResourceService);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463967.selection$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463968.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.tableId);
  }));
}
function Cs() {
  return {
    id: ys,
    type: MenuItemType.SUBITEMS,
    icon: "DeleteIcon",
    title: "slides-table-ui.contextMenu.delete",
    tooltip: "slides-table-ui.contextMenu.delete"
  };
}
function ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463973 = combineLatest([X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972, Xi), X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972, Zi)]).pipe(map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923]) => [{
    id: pi.id,
    value: pi.id,
    icon: "DeleteRowDoubleIcon",
    label: {
      name: "slides-table-ui.contextMenu.deleteRow",
      selectable: false
    },
    params: {},
    disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922
  }, {
    id: mi.id,
    value: mi.id,
    icon: "DeleteColumnDoubleIcon",
    label: {
      name: "slides-table-ui.contextMenu.deleteColumn",
      selectable: false
    },
    params: {},
    disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923
  }]));
  return {
    ...Cs(),
    selections: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463973
  };
}
function Ts() {
  return {
    id: bs,
    type: MenuItemType.SUBITEMS,
    icon: "AdjustHeightDoubleIcon",
    title: "slides-table-ui.contextMenu.distribute"
  };
}
function Es(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463976) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463977;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A29 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463977 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463976.get(IConfigService).getConfig(SLIDES_UI_PLUGIN_CONFIG_KEY)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463977 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463977.editor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463977.enabled) === false,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463978 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463976.get(G).selection$["pipe"](startWith(null), map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924 => var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A29 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924.kind) === "text"));
  return {
    id: xi.id,
    type: MenuItemType.BUTTON,
    icon: "DeleteIcon",
    title: "slides-table-ui.contextMenu.deleteTable",
    tooltip: "slides-table-ui.contextMenu.deleteTable",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463978
  };
}
function Ds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463982) {
  return {
    id: li.id,
    type: MenuItemType.BUTTON,
    icon: "InsertRowAboveDoubleIcon",
    title: "slides-table-ui.contextMenu.insertRowAbove",
    tooltip: "slides-table-ui.contextMenu.insertRowAbove",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463982 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463982, Ls) : undefined
  };
}
function Os(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984) {
  return {
    id: ui.id,
    type: MenuItemType.BUTTON,
    icon: "InsertRowBelowDoubleIcon",
    title: "slides-table-ui.contextMenu.insertRowBelow",
    tooltip: "slides-table-ui.contextMenu.insertRowBelow",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984, Ls) : undefined
  };
}
function ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986) {
  return {
    id: di.id,
    type: MenuItemType.BUTTON,
    icon: "LeftInsertColumnDoubleIcon",
    title: "slides-table-ui.contextMenu.insertColumnLeft",
    tooltip: "slides-table-ui.contextMenu.insertColumnLeft",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986, Ls) : undefined
  };
}
function As(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988) {
  return {
    id: fi.id,
    type: MenuItemType.BUTTON,
    icon: "RightInsertColumnDoubleIcon",
    title: "slides-table-ui.contextMenu.insertColumnRight",
    tooltip: "slides-table-ui.contextMenu.insertColumnRight",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988, Ls) : undefined
  };
}
function js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463990) {
  return {
    id: pi.id,
    type: MenuItemType.BUTTON,
    icon: "DeleteRowDoubleIcon",
    title: "slides-table-ui.contextMenu.deleteRow",
    tooltip: "slides-table-ui.contextMenu.deleteRow",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463990 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463990, Xi) : undefined
  };
}
function Ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463992) {
  return {
    id: mi.id,
    type: MenuItemType.BUTTON,
    icon: "DeleteColumnDoubleIcon",
    title: "slides-table-ui.contextMenu.deleteColumn",
    tooltip: "slides-table-ui.contextMenu.deleteColumn",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463992 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463992, Zi) : undefined
  };
}
function Ns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463994) {
  return {
    id: hi.id,
    type: MenuItemType.BUTTON,
    icon: "MergeAllIcon",
    title: "slides-table-ui.editorToolbar.mergeCells",
    tooltip: "slides-table-ui.editorToolbar.mergeCells",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463994 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463994, Ji) : undefined
  };
}
function Ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996) {
  return {
    id: gi.id,
    type: MenuItemType.BUTTON,
    icon: "CancelMergeIcon",
    title: "slides-table-ui.editorToolbar.unmergeCells",
    tooltip: "slides-table-ui.editorToolbar.unmergeCells",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996, Yi) : undefined
  };
}
function Fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463998) {
  return {
    id: var_L0_core_endo_options_pure_O1_zalloc_nothrow_sig29DC.id,
    type: MenuItemType.BUTTON,
    icon: "AdjustHeightDoubleIcon",
    title: "slides-table-ui.contextMenu.distributeRows",
    tooltip: "slides-table-ui.contextMenu.distributeRows",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463998 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463998, Qi) : undefined
  };
}
function Is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464000) {
  return {
    id: vi.id,
    type: MenuItemType.BUTTON,
    icon: "AdjustWidthDoubleIcon",
    title: "slides-table-ui.contextMenu.distributeColumns",
    tooltip: "slides-table-ui.contextMenu.distributeColumns",
    disabled$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464000 ? X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464000, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F) : undefined
  };
}
function Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464002) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464002.get(G).getSelection();
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003.kind !== "text" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464003.ranges["length"] > 0;
}
const Rs = {
    [MenuManagerPosition.CONTEXT_MENU]: {
      "slide-table.contextMenu.cell": {
        order: 23,
        [ContextMenuGroup.LAYOUT]: {
          order: 0,
          [vs]: {
            order: 0,
            menuItemFactory: withSlideEditPermission(xs),
            "slide-table.menu.insert-row-above": {
              order: 0,
              menuItemFactory: withSlideEditPermission(Ds)
            },
            "slide-table.menu.insert-row-below": {
              order: 1,
              menuItemFactory: withSlideEditPermission(Os)
            },
            "slide-table.menu.insert-column-left": {
              order: 2,
              menuItemFactory: withSlideEditPermission(ks)
            },
            "slide-table.menu.insert-column-right": {
              order: 3,
              menuItemFactory: withSlideEditPermission(As)
            }
          },
          [ys]: {
            order: 1,
            menuItemFactory: withSlideEditPermission(Cs),
            "slide-table.menu.delete-rows": {
              order: 0,
              menuItemFactory: withSlideEditPermission(js)
            },
            "slide-table.menu.delete-columns": {
              order: 1,
              menuItemFactory: withSlideEditPermission(Ms)
            }
          },
          "slide-table.menu.merge-cells": {
            order: 2,
            menuItemFactory: withSlideEditPermission(Ns)
          },
          "slide-table.menu.unmerge-cells": {
            order: 3,
            menuItemFactory: withSlideEditPermission(Ps)
          },
          [bs]: {
            order: 4,
            menuItemFactory: withSlideEditPermission(Ts),
            "slide-table.menu.distribute-rows": {
              order: 0,
              menuItemFactory: withSlideEditPermission(Fs)
            },
            "slide-table.menu.distribute-columns": {
              order: 1,
              menuItemFactory: withSlideEditPermission(Is)
            }
          }
        },
        [ContextMenuGroup.OTHERS]: {
          order: 1,
          [xi.id]: {
            order: 0,
            menuItemFactory: withSlideEditPermission(Es)
          }
        }
      }
    }
  },
  zs = {
    [MenuManagerPosition.RIBBON]: {
      [ns]: {
        order: 101,
        contextual: true,
        "slides-table-ui.ribbon.styles": {
          order: 0,
          [rs]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              columnSpan: 2,
              width: 112
            },
            menuItemFactory: withSlideEditPermission(ss)
          }
        },
        "slides-table-ui.ribbon.cellStyle": {
          order: 1,
          [is]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 56
            },
            menuItemFactory: withSlideEditPermission(cs)
          }
        },
        "slides-table-ui.ribbon.text": {
          order: 2,
          [as]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 344
            },
            menuItemFactory: withSlideEditPermission(ls)
          }
        },
        "slides-table-ui.ribbon.layout": {
          order: 3,
          "slide-table.ribbon.insert-row-above": {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1
            },
            menuItemFactory: withSlideEditPermission(Ds)
          },
          "slide-table.ribbon.insert-row-below": {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1
            },
            menuItemFactory: withSlideEditPermission(Os)
          },
          "slide-table.ribbon.insert-column-left": {
            order: 2,
            gridLayout: {
              row: 1,
              column: 2
            },
            menuItemFactory: withSlideEditPermission(ks)
          },
          "slide-table.ribbon.insert-column-right": {
            order: 3,
            gridLayout: {
              row: 2,
              column: 2
            },
            menuItemFactory: withSlideEditPermission(As)
          },
          "slide-table.ribbon.merge-cells": {
            order: 4,
            gridLayout: {
              row: 1,
              column: 3
            },
            menuItemFactory: withSlideEditPermission(Ns)
          },
          "slide-table.ribbon.unmerge-cells": {
            order: 5,
            gridLayout: {
              row: 2,
              column: 3
            },
            menuItemFactory: withSlideEditPermission(Ps)
          },
          "slide-table.ribbon.distribute-rows": {
            order: 6,
            gridLayout: {
              row: 1,
              column: 4
            },
            menuItemFactory: withSlideEditPermission(Fs)
          },
          "slide-table.ribbon.distribute-columns": {
            order: 7,
            gridLayout: {
              row: 2,
              column: 4
            },
            menuItemFactory: withSlideEditPermission(Is)
          }
        },
        "slides-table-ui.ribbon.arrange": {
          order: 4,
          "slide-table.ribbon.arrange-forward": {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1
            },
            menuItemFactory: withSlideEditPermission(ms)
          },
          "slide-table.ribbon.arrange-backward": {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1
            },
            menuItemFactory: withSlideEditPermission(hs)
          },
          "slide-table.ribbon.arrange-front": {
            order: 2,
            gridLayout: {
              row: 1,
              column: 2
            },
            menuItemFactory: withSlideEditPermission(gs)
          },
          "slide-table.ribbon.arrange-back": {
            order: 3,
            gridLayout: {
              row: 2,
              column: 2
            },
            menuItemFactory: withSlideEditPermission(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464932)
          }
        },
        "slides-table-ui.ribbon.panel": {
          order: 5,
          [ys]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              showLabel: true
            },
            menuItemFactory: withSlideEditPermission(ws),
            [xi.id]: {
              order: 0,
              menuItemFactory: withSlideEditPermission(Es)
            }
          },
          [Ca.id]: {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1,
              showLabel: true
            },
            menuItemFactory: us
          }
        }
      }
    }
  },
  Bs = "slides-table-ui.contextual-ribbon";
let Vs = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932) {
    super(), this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925, this._ribbonService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926, this._slideDrawingStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927, this._slideDrawingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928, this._floatingToolbarService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929, this._embedFocusOwnerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930, this._embedFloatingActiveService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, this._embedMountService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932, W(this, "_tableDesignVisible", false), this._menuManagerService["mergeMenu"](zs), this._listenSelection();
  }
  dispose() {
    this._floatingToolbarService["setFallbackVisible"](false, Bs), this._hideTableDesignTab(), super.dispose();
  }
  _listenSelection() {
    this.disposeWithMe(toDisposable(this._slideDrawingStateService["state$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194;
      if (!this._isSingleTableSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) || this._isActiveFloatingEmbedHostSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193)) {
        this._floatingToolbarService["setFallbackVisible"](false, Bs), this._hideTableDesignTab();
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194.unitId;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 && this._isIsolatedEmbedChildSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195)) {
        this._floatingToolbarService["setFallbackVisible"](true, Bs), this._hideTableDesignTab();
        return;
      }
      this._floatingToolbarService["setFallbackVisible"](false, Bs), this._tableDesignVisible || (this._tableDesignVisible = true, this._ribbonService["showContextualTab"](ns, {
        activate: true
      }));
    })));
  }
  _isSingleTableSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941.context;
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941.selectedIds["length"] !== 1 ? false : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942 = this._slideDrawingService["getDrawingByParam"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941.selectedIds[0]
    })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942.element["type"]) === PageElementTypeEnum.Table;
  }
  _isNonFullscreenFloatingEmbedChildSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948 = this._embedFocusOwnerService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.getFocusOwner(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949 = this._embedFloatingActiveService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.getActive();
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950.childUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951.childUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951.stage === "stage2";
  }
  _isIsolatedEmbedChildSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958;
    return this._isNonFullscreenFloatingEmbedChildSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957) ? true : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958 = this._embedMountService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.listSessions().some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.layout !== "tab-peer")) ?? false;
  }
  _isActiveFloatingEmbedHostSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962 = this._embedFloatingActiveService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962.getActive();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966.stage === "inactive" || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963.unitId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966.hostUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961.selectedIds["length"] !== 1) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 = this._embedMountService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.listSessions().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966.hostUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966.childUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965.descriptor["hostAnchorId"];
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961.selectedIds[0] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968;
  }
  _hideTableDesignTab() {
    this._tableDesignVisible && (this._tableDesignVisible = false, this._ribbonService["hideContextualTab"](ns), this._ribbonService["setCollapsedIds"]([]));
  }
};
const Tc = "SLIDE_TABLE_EDITOR_UNIT_ID",
  Ec = -10000;
function Dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258.insertIndex == "number" && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258.insertIndex)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258.insertIndex;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464259 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258.kind === "row-insert-dot" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258.row : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464258.column;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464259 == "number" && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464259) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464259 + 1 : null;
}
function Oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464267 = 6) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464263 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464264) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464268 = Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464262.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021.width), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464263),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464269 = Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464262.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461022 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461022.height ?? 24), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464264),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464270 = zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464267),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464271 = zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464267);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464270 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464271 ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464270 && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464271 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464270.distance <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464271.distance) ? {
    axis: "column",
    boundaryIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464270.boundaryIndex
  } : {
    axis: "row",
    boundaryIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464271.boundaryIndex
  };
}
function kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464285) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464286 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D207 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464285.minSize ?? 12);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464285.axis === "column") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464286.columns = Bc(Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023.width), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464283), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464285.boundaryIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464285.delta, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D207).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024 => ({
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024
  }));else {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025 = Bc(Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222.height ?? 24), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464284), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464285.boundaryIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464285.delta, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D207);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464286.rows = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464286.rows["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224) => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223.height ?? 24
    }));
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464286;
}
let Ac = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026, this._hitTestService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027, this._tableResourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, this._tableSelectionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, this._editorUIService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, this._drawingStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031, this._contextMenuService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033, this._keyboardService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, this._contextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036, this._slideDrawingService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037, this._transformerVisibilityService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039, this._alignmentGuideService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040, this._slideInsertService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041, W(this, "_editorDisposable", null), W(this, "_resizeDragContext", null), W(this, "_rangeDragContext", null), W(this, "_rangeDragWindowCleanup", null), W(this, "_tableMoveDragContext", null), W(this, "_editorSessionId", 0), W(this, "_activeEditorContextKey", null), W(this, "_lastActiveTableContext", null), W(this, "_tableActivationStage", null), W(this, "_pendingStage1TableDragContext", null), W(this, "_hoveredTrigger", null), W(this, "_headerSelectionDragState", null), W(this, "_pendingHeaderSelection", null), W(this, "_rowColumnMoveState", null), W(this, "_rowColumnMoveTarget", null), W(this, "_headerSelectionDragCleanup", null), W(this, "_resizeHoverActive", false), W(this, "_ownsStructuralCursor", false), W(this, "_resizeWireScheduled", false), W(this, "_editorLayoutSyncScheduled", false), W(this, "_structuralInsertHoverObject", null), W(this, "_wiredResizeObjectRefs", new Map()), W(this, "_handleClipboardCopy", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 = this._resolveTableClipboardTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225);
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.clipboardData || !this._canCopyTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.selection) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.clipboardData["setData"]("text/plain", ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.selection)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.clipboardData["setData"]("text/html", oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.selection)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.stopPropagation());
    }), W(this, "_handleClipboardCut", async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = this._resolveTableClipboardTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.clipboardData || !this._canCopyTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.selection)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.selection);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.clipboardData["setData"]("text/plain", ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.selection)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.clipboardData["setData"]("text/html", oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.selection)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.stopPropagation(), await this._commitClipboardPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231));
    }), W(this, "_handleClipboardPaste", async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = this._resolveTableClipboardTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.clipboardData) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.clipboardData["getData"]("text/html"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.clipboardData["getData"]("text/plain"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 = isClipboardTextImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238) ? await extractClipboardTextImageFile(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238) : null,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 ? null : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 ? lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.selection, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237) : null) ?? cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.selection, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239] : await al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.clipboardData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237);
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.length === 0 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.stopPropagation(), !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 && !(await this._commitClipboardPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240))) && (await this._insertClipboardImages(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3, +!!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240)));
    }), this._init();
  }
  dispose() {
    this._editorLayoutSyncScheduled = false, this._resetTableInteraction(), super.dispose();
  }
  _init() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059;
    document.addEventListener("copy", this._handleClipboardCopy, true), document.addEventListener("cut", this._handleClipboardCut, true), document.addEventListener("paste", this._handleClipboardPaste, true), this.disposeWithMe(toDisposable(() => {
      document.removeEventListener("copy", this._handleClipboardCopy, true), document.removeEventListener("cut", this._handleClipboardCut, true), document.removeEventListener("paste", this._handleClipboardPaste, true);
    })), this.disposeWithMe(this._keyboardService["setHandler"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 => this._handleKeyboardAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247))), this.disposeWithMe(this._keyboardService["setInputHandler"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 => this._handleKeyboardInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248)));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059 = this._transformerVisibilityService).registerGuard) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 => this._shouldShowTransformerForDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 && this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060), this.disposeWithMe(this._keyboardService["setHandler"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 => this._handleKeyboardAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250))), this.disposeWithMe(this._renderContext["scene"].onDblclick$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251 => {
      this._handleSceneDoubleClick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251);
    })), this.disposeWithMe(this._renderContext["engine"].onTransformChange$["subscribeEvent"](() => {
      this._scheduleActiveEditorLayoutSync();
    }));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061 = this._drawingStateService["state$"];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632;
        this._syncActiveTableFromDrawingState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = this._tableSelectionService["getSelection"]();
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635;
          let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = this._tableSelectionService).isTableInternalInteractionActive) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635)) ?? false;
          this._lastActiveTableContext && this._tableActivationStage && !this._isLastActiveTableSelected(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A && this._resetTableInteraction();
          return;
        }
        if (!(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.context["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.selectedIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.elementId))) {
          if (!this._isExternalDrawingSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) && this._isTableInteractionInProgress(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633)) return;
          this._resetTableInteraction();
        }
      });
      this.disposeWithMe({
        dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.unsubscribe()
      });
    }
    this._initResizeInteraction(), this._initPointerDownContextMenu();
  }
  _scheduleActiveEditorLayoutSync() {
    this._editorLayoutSyncScheduled || (this._editorLayoutSyncScheduled = true, Promise.resolve().then(() => {
      this._editorLayoutSyncScheduled && (this._editorLayoutSyncScheduled = false, this._syncActiveEditorLayout());
    }));
  }
  _syncActiveEditorLayout() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066 = this._editorUIService["getSession"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066.context;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067 || !this._isCurrentEditorSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068 = this._resolveTableObjectFromContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068) return;
    let {
        object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069,
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071 = resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461070),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067.column && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.hidden);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073 = this._resolveEditorLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066.documentData);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073 && this._editorUIService["update"]({
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073
    });
  }
  _syncActiveTableFromDrawingState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.context || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.selectedIds["length"] !== 1) return;
    let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.selectedIds,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.context["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085 = this._resolveSelectedTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.context["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085.element["type"] !== PageElementTypeEnum.Table) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086 = this._tableSelectionService["getSelection"]();
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085.drawingId) {
      this._syncTableSelectionToObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086), this._syncActivationStageFromSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086);
      return;
    }
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461086.kind) === "table" && this._tableSelectionService["clear"](), this._lastActiveTableContext = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085.drawingId
    }, this._activateTableObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084);
  }
  _isLastActiveTableSelected(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 = this._lastActiveTableContext;
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.context["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092.selectedIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094.elementId);
  }
  _isExternalDrawingSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098.selectedIds["length"] === 0) return true;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098.context) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099.elementId));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098.selectedIds["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099.elementId) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098.context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098.context["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255));
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100;
    });
  }
  _resolveSelectedTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107 = this._hitTestService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107.getOrderedTopLevelDrawings;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461109.call(this._hitTestService)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.drawingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106)) ?? null;
  }
  _resolveInsertDotAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117 = this._hitTestService) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117.getOrderedTopLevelDrawings,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461118.call(this._hitTestService)) ?? [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119 = new Vector2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116.y);
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14--) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.unitId !== this._renderContext["unitId"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.element["type"] !== PageElementTypeEnum.Table || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.groupId || !this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.element["tableId"])) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.drawingId));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.isInGroup) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 = this._resolveInsertDotTriggerForObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643) return {
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641,
        object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642,
        trigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643
      };
    }
    return null;
  }
  _resolveInsertDotTriggerForObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124.hitTestStructuralTriggerAtScenePoint) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461126.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125);
    return Cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127 : null;
  }
  _initPointerDownContextMenu() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 = this._renderContext["scene"];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132.onPointerDown$ && this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132.onPointerDown$["subscribeEvent"]({
      priority: Ec,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261]) => {
        this._handleActiveTableControlPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261);
      }
    }));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133 = this._hitTestService["onPointerDown$"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 => this._handleHitTestPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264));
    this.disposeWithMe({
      dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134.unsubscribe()
    });
  }
  _handleActiveTableControlPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.button ?? 0;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 !== 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 !== 2) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140 = this._resolvePointerViewportPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141 = this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140.y);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 === 0 && !this._isTableTextEditing()) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 = this._resolveInsertDotAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143;
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139.skipNextObservers = true, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138), this._hideContextMenu(), this._editorUIService["complete"](), this._lastActiveTableContext = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.drawing["unitId"],
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.drawing["subUnitId"],
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.drawing["drawingId"]
        }, this._handleStructuralInsertTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.trigger, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141), true;
      }
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144 = this._resolveActiveTableObject();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144.drawing["element"].type !== PageElementTypeEnum.Table) return false;
    let {
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145,
        object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147 = buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.drawingId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148 = this._resolveTableControlHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141.y),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148 ? null : this._resolveCellHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141.y);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149) return false;
    if (!this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151;
      return this._drawingStateService["selectDrawings"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.subUnitId
      }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.drawingId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.drawingId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139.skipNextObservers = true, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138), this._hideContextMenu(), this._editorUIService["complete"](), this._lastActiveTableContext = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.drawingId
      }, this._activateTableObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146), true;
    }
    return this._handleTablePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146, this._createViewportPointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148), true;
  }
  _handleHitTestPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.nativeEvent["button"] ?? 0;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 !== 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 !== 2) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.nativeEvent;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.offsetX === undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.offsetX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.offsetX), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.offsetY === undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.offsetY = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.offsetY);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 = this._renderContext["scene"].getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.oKey);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 !== 2 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.drawing["element"].type !== PageElementTypeEnum.Table || this._isTableTextEditing() || this._handleCellContextMenuPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.oKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167, {
      stopPropagation: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.stopPropagation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167);
      },
      skipNextObservers: false
    }));
  }
  _initResizeInteraction() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 = this._renderContext["scene"];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.onPointerMove$ && this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.onPointerMove$["subscribeEvent"]({
      priority: Ec,
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268]) => {
        this._handleResizeHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268), this._updateTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268);
      }
    })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.addObject$) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.addObject$["subscribe"](() => this._scheduleWireResizeObjects());
      this.disposeWithMe({
        dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.unsubscribe()
      });
    }
    this._scheduleWireResizeObjects();
  }
  _scheduleWireResizeObjects() {
    this._resizeWireScheduled || (this._resizeWireScheduled = true, Promise.resolve().then(() => {
      this._resizeWireScheduled = false, this._wireResizeObjects();
    }));
  }
  _wireResizeObjects() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174 = this._hitTestService["getOrderedTopLevelDrawings"];
    ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461174.call(this._hitTestService)) ?? []).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.element["type"] !== PageElementTypeEnum.Table) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 = buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.drawingId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 = this._renderContext["scene"].getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.isInGroup || (this._syncTableSelectionToObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273), this._wiredResizeObjectRefs["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.onPointerDown$["subscribeEvent"]({
        priority: Ec,
        next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645]) => {
          this._handleTablePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645);
        }
      });
      this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274), this._wiredResizeObjectRefs["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273);
    });
  }
  _handleSceneDoubleClick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177 = this._hitTestService["hitTest"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176.offsetY);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178 = this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176.offsetY);
    this._handleDoubleClick({
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177.drawing,
      oKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177.oKey,
      offsetX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178.x,
      offsetY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178.y,
      nativeEvent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176
    });
  }
  _resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187 = new Vector2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188.getActiveViewportByCoord) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187)) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188.getViewports) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461188)[0]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189.transformVector2SceneCoord) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187;
    return {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190.x,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190.y
    };
  }
  _handleResizeHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200) {
    if (this._resizeDragContext) return;
    if (this._isTableTextEditing()) {
      this._resetResizeCursor();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201 = this._hitTestService["hitTest"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200.offsetY);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.drawing["element"].type !== PageElementTypeEnum.Table) {
      this._resetResizeCursor();
      return;
    }
    if (!this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.drawing)) {
      this._resetResizeCursor();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202 = this._renderContext["scene"].getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.oKey);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202) {
      this._resetResizeCursor();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203 = this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200.offsetY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461204 = this._resolveResizeHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203.y);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461204) {
      this._resetResizeCursor();
      return;
    }
    this._setResizeCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461204.handle["axis"]);
  }
  _handleTablePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213.button ?? 0;
    if (this._handleTableControlPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215) || this._handleTextEditingCellPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 === 2 && this._handleCellContextMenuPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214) || this._handleResizePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 !== 0 || this._isTableTextEditing() || !this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218 = this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213.offsetY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219 = this._resolveCellHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218.y);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219) {
      if (this._tableActivationStage === "table") {
        this._startStage1TableBodyPointer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219);
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214.skipNextObservers = true, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213), this._hideContextMenu(), this._editorUIService["complete"](), this._selectResolvedCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219), this._rangeDragContext = {
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210,
        objectKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211,
        object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461212,
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219.table,
        anchor: {
          row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219.row,
          column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219.column
        },
        current: {
          row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219.row,
          column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219.column
        }
      }, this._bindRangeDragWindowEvents();
    }
  }
  _handleTextEditingCellPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.button ?? 0) !== 0 || !this._isTableTextEditing() || !this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230.element["type"] !== PageElementTypeEnum.Table) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 = this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.offsetY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 = this._resolveCellHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237.y);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238) return false;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234.skipNextObservers = true, this._hideContextMenu();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239 = this._tableSelectionService["getSelection"]();
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239.kind) === "text" && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239.focus) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235.row) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239.focus["column"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.column ? true : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232.setEditingCell) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232, null), this._openCellEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238, {
      handoffCurrent: true
    }), true);
  }
  _handleTableControlPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.button ?? 0) !== 0 || this._isTableTextEditing() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.element["type"] !== PageElementTypeEnum.Table) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255 ?? this._resolveTableControlHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258.y);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259) return false;
    if (Cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.skipNextObservers = true, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253), this._hideContextMenu(), this._editorUIService["complete"](), this._lastActiveTableContext = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250.drawingId
      }, this._handleStructuralInsertTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258);
    }
    return this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.skipNextObservers = true, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253), this._hideContextMenu(), this._editorUIService["complete"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.kind === "row-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.kind === "column-header" ? (this._handleStructuralHeaderPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258), true) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.kind === "table-handle" ? (this._startTableMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253), true) : false) : false;
  }
  _handleCellContextMenuPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278) {
    if (!this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274.element["type"] !== PageElementTypeEnum.Table) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280 = this._resolveCellHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279.y);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278.skipNextObservers = true, this._hideContextMenu(), this._editorUIService["complete"](), this._selectResolvedCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280), this._openContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277, "slide-table.contextMenu.cell"), true) : false;
  }
  _handleResizePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291.button ?? 0) !== 0 || this._isTableTextEditing() || !this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295 = this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291.offsetY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 = this._resolveResizeHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.y);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.element["type"] !== PageElementTypeEnum.Table) return false;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.skipNextObservers = true, this._hideContextMenu(), this._editorUIService["complete"](), this._tableSelectionService["clear"](), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290, null), this._resizeDragContext = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.element["tableId"],
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290,
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.table,
      handle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.handle,
      startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.point,
      pendingTable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.table
    }, this._setResizeCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.handle["axis"]);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 = this._renderContext["scene"];
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.disableObjectsEvent) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.onPointerMove$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 => this._updateResizeDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.onPointerUp$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299.unsubscribe(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.enableObjectsEvent) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297), this._finishResizeDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280);
      });
    return this.disposeWithMe({
      dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298.unsubscribe()
    }), this.disposeWithMe({
      dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299.unsubscribe()
    }), true;
  }
  _resolveResizeHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.unitId !== this._renderContext["unitId"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.element["type"] !== PageElementTypeEnum.Table || !this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.groupId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.isInGroup) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.element["tableId"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317 = this._resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318 = Oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317.y, 6);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318 ? {
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316,
      handle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318,
      point: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317
    } : null;
  }
  _resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326.getInverseCoord(new Vector2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328));
    return {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326.width / 2,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326.height / 2
    };
  }
  _resolveTableControlHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.element["type"] !== PageElementTypeEnum.Table) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.element["tableId"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339 = this._resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340 = this._resolveTableTriggerHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.y);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340.kind === "table-handle" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340.kind === "row-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340.kind === "column-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340.kind === "row-insert-dot" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340.kind === "column-insert-dot") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340 : hitTestSlideTableControl(buildSlideTableControls(resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.height).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.kind === "table-handle"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.y);
  }
  _updateTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348) {
    if (this._isTableTextEditing()) {
      this._clearTableControlHover();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350 = this._resolveInsertDotAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350) {
      this._clearStructuralInsertHoverObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.object), this._structuralInsertHoverObject = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.object, this._updateStructuralControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.trigger), this._setTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.object, null), this._setTableCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.object, null);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351 = this._resolveActiveTableObject();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351) {
      this._clearTableControlHover();
      return;
    }
    this._clearStructuralInsertHoverObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.object);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 = this._resolveTableControlHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.y),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352.kind === "row-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352.kind === "column-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352.kind === "row-insert-dot" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352.kind === "column-insert-dot") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 : null;
    this._updateStructuralControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353), this._setTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.object, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352.kind) === "table-handle" ? {
      kind: "table-handle"
    } : null), this._updateCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349.y, !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352);
  }
  _clearTableControlHover() {
    this._setStructuralCursor(false);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360 = this._resolveActiveTableObject();
    this._clearStructuralInsertHoverObject((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.object) ?? null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360 && (this._hoveredTrigger = null, this._setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.object, null), this._setTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.object, null), this._setTableCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.object, null));
  }
  _clearStructuralInsertHoverObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362 = null) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363 = this._structuralInsertHoverObject;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363 && (this._structuralInsertHoverObject = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362 && (this._hoveredTrigger = null, this._setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363, null), this._setTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363, null), this._setTableCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363, null)));
  }
  _setTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461367) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461368;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461368 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366.setTableControlHover) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461368.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461367)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370, true);
    }
  }
  _updateCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461380) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461380 || !this._tableActivationStage) {
      this._setTableCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377, null);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381 = this._resolveCellHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376, buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376.drawingId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379);
    this._setTableCellHover((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.object) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381 ? {
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.cell["row"],
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.cell["column"]
    } : null);
  }
  _setTableCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388.setTableCellHover) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461391 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461391.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392, true);
    }
  }
  _buildActiveTableTriggers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 = resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401 = this._renderContext["scene"]).getAncestorScale) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404 = Z((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403.scaleX) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403.scaleY), 1);
    return buildSlideTableTriggers({
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398.id,
      tableWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399.width,
      tableHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399.height,
      rowHeights: Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.height ?? 24), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399.height),
      columnWidths: Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.width), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399.width),
      mergedCells: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.cells["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.hidden && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.rowSpan > 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.columnSpan > 1)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 => ({
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.row,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.rowSpan - 1,
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.column,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.columnSpan - 1
      })),
      zoom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404
    });
  }
  _resolveTableTriggerHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415) {
    return hitTestSlideTableTrigger(this._buildActiveTableTriggers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415);
  }
  _updateStructuralControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.kind === "row-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.kind === "column-header" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.kind === "row-insert-dot" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.kind === "column-insert-dot") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421 : null;
    this._hoveredTrigger = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 ? Dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422) : null,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422.kind) === "row-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423 !== null ? {
        kind: "row",
        index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423
      } : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422.kind) === "column-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423 !== null ? {
        kind: "column",
        index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423
      } : null,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = this._headerSelectionDragState ? {
        kind: this._headerSelectionDragState["kind"],
        start: Math.min(this._headerSelectionDragState["anchor"], this._headerSelectionDragState["current"]),
        end: Math.max(this._headerSelectionDragState["anchor"], this._headerSelectionDragState["current"])
      } : null,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = this._rowColumnMoveTarget ? {
        kind: this._rowColumnMoveTarget["kind"],
        index: this._rowColumnMoveTarget["guideIndex"]
      } : null,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 || !!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 || !!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 || !!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12;
    this._setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A7 ? {
      visible: true,
      hoveredTrigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422,
      selectedStructuralRange: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11,
      insertGuide: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10,
      reorderGuide: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12
    } : null), this._setStructuralCursor(!!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422);
  }
  _setStructuralCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 = this._renderContext["scene"];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428) {
      this._ownsStructuralCursor = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.setCursor(CURSOR_TYPE.POINTER);
      return;
    }
    this._ownsStructuralCursor && (this._ownsStructuralCursor = false, !this._resizeHoverActive && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.getCursor() === CURSOR_TYPE.POINTER && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.resetCursor());
  }
  _setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461434;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461434 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432.setTableControlState) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461434.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436, true);
    }
  }
  _handleStructuralHeaderPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461446;
    if (this._finishHeaderSelectionDrag(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.kind === "row-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.row !== undefined) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = this._getSelectedHeaderRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442, "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.row);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 ? this._pendingHeaderSelection = {
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442,
        object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443,
        kind: "row",
        start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289.start,
        end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289.end,
        startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445
      } : (this._selectRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.row), this._headerSelectionDragState = {
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442,
        object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443,
        kind: "row",
        anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.row,
        current: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.row
      });
    } else {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.kind === "column-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.column !== undefined) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = this._getSelectedHeaderRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442, "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.column);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 ? this._pendingHeaderSelection = {
          drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442,
          object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443,
          kind: "column",
          start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.start,
          end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.end,
          startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445
        } : (this._selectColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.column), this._headerSelectionDragState = {
          drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442,
          object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443,
          kind: "column",
          anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.column,
          current: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.column
        });
      } else return;
    }
    this._setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443, {
      visible: true,
      hoveredTrigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444,
      selectedStructuralRange: this._headerSelectionDragState ? {
        kind: this._headerSelectionDragState["kind"],
        start: this._headerSelectionDragState["anchor"],
        end: this._headerSelectionDragState["current"]
      } : this._pendingHeaderSelection ? {
        kind: this._pendingHeaderSelection["kind"],
        start: this._pendingHeaderSelection["start"],
        end: this._pendingHeaderSelection["end"]
      } : null
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447 = this._renderContext["scene"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.onPointerMove$ || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.onPointerUp$) return;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.disableObjectsEvent) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461446.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.onPointerMove$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290 => this._updateHeaderSelectionDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.onPointerUp$["subscribeEvent"](() => this._finishHeaderSelectionDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443));
    this._headerSelectionDragCleanup = () => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.unsubscribe(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.enableObjectsEvent) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447);
    }, this.disposeWithMe({
      dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448.unsubscribe()
    }), this.disposeWithMe({
      dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.unsubscribe()
    });
  }
  _finishHeaderSelectionDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463 = this._headerSelectionDragCleanup;
    this._headerSelectionDragCleanup = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458 ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460 = this._rowColumnMoveState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460.object) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461 = this._pendingHeaderSelection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461.object) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462 = this._headerSelectionDragState) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462.object);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459.commitMove) !== false && this._executeRowColumnMove(), this._headerSelectionDragState = null, this._pendingHeaderSelection = null, this._rowColumnMoveState = null, this._rowColumnMoveTarget = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464 && this._updateStructuralControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464, this._hoveredTrigger);
  }
  _updateHeaderSelectionDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473 = this._pendingHeaderSelection,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474 = this._rowColumnMoveState;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474) {
      this._updateRowColumnMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475 = this._headerSelectionDragState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.drawing["element"].type !== PageElementTypeEnum.Table) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472.buttons & 1) != 1) {
      this._finishHeaderSelectionDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.object);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.drawing["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.drawing["element"].tableId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478 = this._resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477.y),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479 = hitTestSlideTableFloatingControl(this._buildActiveTableTriggers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.object), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.y);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.kind === "row" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.kind === "row-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.row !== undefined) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.current = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.row, this._selectRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.anchor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.row);else {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.kind === "column" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.kind === "column-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.column !== undefined) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.current = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.column, this._selectColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.anchor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.column);else return;
      }
      this._setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.object, {
        visible: true,
        hoveredTrigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479,
        selectedStructuralRange: {
          kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.kind,
          start: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.anchor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.current),
          end: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.anchor, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475.current)
        }
      });
    }
  }
  _updateRowColumnMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489 = this._pendingHeaderSelection,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490 = this._rowColumnMoveState,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491.drawing["element"].type !== PageElementTypeEnum.Table) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488.buttons & 1) != 1) {
      this._finishHeaderSelectionDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461491.object, {
        commitMove: false
      });
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.startPoint["x"],
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.startPoint["y"];
      if (Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16) < 8) return;
      this._rowColumnMoveState = {
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.drawing,
        object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.object,
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.kind,
        start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.start,
        end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489.end
      }, this._pendingHeaderSelection = null;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493 = this._rowColumnMoveState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.drawing["element"].type !== PageElementTypeEnum.Table) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.drawing["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.drawing["element"].tableId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494) {
      this._rowColumnMoveTarget = null, this._setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.object, null);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495 = this._resolveRowColumnMoveTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.kind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.kind === "row" ? canMoveSlideTableRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.start,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.end
      }, {
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.targetRow,
        position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.position
      }) : canMoveSlideTableColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, {
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.start,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.end
      }, {
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.targetColumn,
        position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.position
      }));
    this._rowColumnMoveTarget = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495 : null, this._setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495 ? {
      visible: true,
      selectedStructuralRange: {
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.kind,
        start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.start,
        end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.end
      },
      reorderGuide: {
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.kind,
        index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.guideIndex
      }
    } : null);
  }
  _executeRowColumnMove() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506 = this._rowColumnMoveState,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507 = this._rowColumnMoveTarget;
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.drawing["element"].type !== PageElementTypeEnum.Table || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.kind === "row" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.kind === "row" ? this._commandService["executeCommand"](MoveSlideTableRowsCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.drawing["unitId"],
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.drawing["element"].tableId,
      startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.start,
      endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.end,
      targetRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.targetRow,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.position
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.kind === "column" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.kind === "column" && this._commandService["executeCommand"](MoveSlideTableColumnsCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.drawing["unitId"],
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.drawing["element"].tableId,
      startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.start,
      endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.end,
      targetColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.targetColumn,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.position
    }));
  }
  _getSelectedHeaderRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510.element["type"] !== PageElementTypeEnum.Table) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461513 = this._tableSelectionService["getSelection"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461513 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461513.kind !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461513.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510.unitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461513.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510.subUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461513.elementId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510.drawingId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461513.tableId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510.element["tableId"]) return null;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461513.ranges) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511 === "row" ? Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.endRow) : Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.endColumn),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511 === "row" ? Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.endRow) : Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.endColumn);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5) return {
        start: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4,
        end: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5
      };
    }
    return null;
  }
  _resolveRowColumnMoveTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522 = this._resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521.y),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520 === "row" ? Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.height ?? 24), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519.height) : Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295.width), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519.width);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.length === 0) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524 = Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522.y : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522.x),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524 <= 0 ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.length - 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524 <= 0 ? "before" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.length ? "after" : "before";
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520 === "row" ? {
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520,
      targetRow: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76,
      position: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45,
      guideIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524
    } : {
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520,
      targetColumn: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76,
      position: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45,
      guideIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524
    };
  }
  _handleStructuralInsertTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.element["type"] !== PageElementTypeEnum.Table) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461537 = Dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534.kind === "row-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461537 !== null ? var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = !!this._commandService["executeCommand"](InsertSlideTableRowsCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.drawingId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.element["tableId"],
      rowIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461537,
      count: 1
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534.kind === "column-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461537 !== null && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = !!this._commandService["executeCommand"](InsertSlideTableColumnsCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.drawingId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.element["tableId"],
      columnIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461537,
      count: 1
    })), !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532.element["tableId"]);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533.setTable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539 = wc((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535 ? this._resolveInsertDotTriggerForObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, new Vector2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535.y)) : null) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534);
    return this._structuralInsertHoverObject = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, this._setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539), this._setTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, null), this._setTableCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, null), true;
  }
  _resolveActiveTableObject() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549 = this._drawingStateService).getSnapshot) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551 = this._tableSelectionService["getSelection"](),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550.context) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551.subUnitId
      } : null),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550.selectedIds["length"]) === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550.selectedIds[0] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551.elementId;
    return !var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552 ? this._resolveTableObjectFromContext(this._lastActiveTableContext) : this._resolveTableObjectFromContext({
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552
    }) ?? this._resolveTableObjectFromContext(this._lastActiveTableContext);
  }
  _resolveTableObjectFromContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559 = this._resolveSelectedTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.elementId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559.element["type"] !== PageElementTypeEnum.Table) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559.element["tableId"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.elementId));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561 ? {
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561,
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560
    } : null;
  }
  _openContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569 = this._createContextMenuEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461566);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569), this._contextMenuService["triggerContextMenu"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567);
  }
  _createContextMenuEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574;
    if (Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.clientX) && Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.clientY)) return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578,
      clientX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.clientX,
      clientY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.clientY,
      preventDefault: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.preventDefault) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578);
      },
      stopPropagation: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.stopPropagation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578);
      }
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575 = this._renderContext["engine"]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575.getCanvasElement) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579.left) ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574.offsetX ?? 0),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579.top) ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574.offsetY ?? 0);
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578,
      clientX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78,
      clientY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79,
      preventDefault: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.preventDefault) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578);
      },
      stopPropagation: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.stopPropagation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578);
      }
    };
  }
  _hideContextMenu() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586 = this._contextMenuService) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586.hideContextMenu) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586);
  }
  _startStage1TableBodyPointer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596;
    this._finishPendingStage1TableDrag({
      focusCell: false
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593.skipNextObservers = true, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592), this._hideContextMenu(), this._editorUIService["complete"]();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600 = typeof window > "u" ? null : window,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601 = () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.removeEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603);
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 => this._updatePendingStage1TableDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603 = () => this._finishPendingStage1TableDrag({
        focusCell: true
      });
    this._pendingStage1TableDragContext = {
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591,
      resolved: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594,
      startEvent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592,
      startPoint: this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592),
      cleanup: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597.onPointerMove$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597.onPointerUp$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.addEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603, {
      once: true
    }), this.disposeWithMe({
      dispose: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601
    });
  }
  _updatePendingStage1TableDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619 = this._pendingStage1TableDragContext;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618.buttons & 1) != 1) {
      this._finishPendingStage1TableDrag({
        focusCell: true
      });
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619.startPoint["x"],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619.startPoint["y"];
    Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83) < 8 || (this._finishPendingStage1TableDrag({
      focusCell: false
    }), this._startTableMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619.startEvent), this._updateTableMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618));
  }
  _finishPendingStage1TableDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625 = this._pendingStage1TableDragContext;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625 && (this._pendingStage1TableDragContext = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.cleanup(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624.focusCell && this._selectResolvedCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.resolved));
  }
  _startTableMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633 = Nc(this._resolveCurrentTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629);
    this._tableMoveDragContext = {
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629,
      activationStage: this._tableActivationStage,
      startEvent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630,
      startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632,
      lastPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632,
      startObjectLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629.left,
      startObjectTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629.top,
      startTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633,
      moved: false,
      clickFallbackTimer: null
    }, this._alignmentGuideService["start"](this._renderContext["unitId"], new Map([[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629.oKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629]]));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634 = this._renderContext["scene"];
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634.disableObjectsEvent) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634);
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 = false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637 = typeof window > "u" ? null : window,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306;
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 || (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637.removeEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634.enableObjectsEvent) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634), this._finishTableMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305));
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634.onPointerMove$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 => this._updateTableMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634.onPointerUp$["subscribeEvent"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637.addEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638, {
      once: true
    }), this._tableMoveDragContext["clickFallbackTimer"] = setTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638, 180), this.disposeWithMe({
      dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635.unsubscribe()
    }), this.disposeWithMe({
      dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636.unsubscribe()
    }), this.disposeWithMe({
      dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637.removeEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638)
    });
  }
  _resolveCurrentTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650) {
    return this._slideDrawingService["getDrawingByParam"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.subUnitId,
      drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.drawingId
    }) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650;
  }
  _updateTableMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655 = this._tableMoveDragContext;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.startPoint["x"],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.startPoint["y"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.moved && Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87) < 8) return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.moved || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.clickFallbackTimer &&= (clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.clickFallbackTimer), null), this._hideContextMenu());
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.lastPoint["x"],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.lastPoint["y"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.object;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657.left += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657.top += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657.makeDirty(true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.activationStage === "table" && this._syncTableMoveTransformerControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.object), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.moved = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.lastPoint = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656, this._alignmentGuideService["move"](this._renderContext["unitId"], new Map([[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.object["oKey"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.object]])), this._slideDrawingService["refreshTransformNotification"]([{
      ...this._resolveCurrentTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.drawing),
      transform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.startTransform,
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.startTransform["left"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.startObjectLeft,
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.startTransform["top"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461657.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.startObjectTop
      }
    }]), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654, true);
  }
  _syncTableMoveTransformerControls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666 = this._renderContext["scene"]).getTransformer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.isInGroup) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670.getSelectedObjectMap) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.oKey)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670.setSelectedControl) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664);
    }
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670.updateControl) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670);
  }
  _finishTableMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682 && this._updateTableMoveDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683 = this._tableMoveDragContext;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683) return;
    if (this._tableMoveDragContext = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.clickFallbackTimer &&= (clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.clickFallbackTimer), null), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.moved) {
      this._alignmentGuideService["end"](this._renderContext["unitId"], new Map([[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.object["oKey"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.object]])), this._selectTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.object);
      return;
    }
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.startTransform["left"] ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.startTransform["top"] ?? 0,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.object,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.startObjectLeft,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D97 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.startObjectTop;
    this._alignmentGuideService["end"](this._renderContext["unitId"], new Map([[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.object["oKey"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.object]]));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685 = this._resolveCurrentTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.drawing),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.startTransform,
        left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96,
        top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D97
      };
    this._commandService["executeCommand"](UpdateSlideDrawingCommand.id, {
      patches: [{
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.drawing["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.drawing["subUnitId"],
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.drawing["drawingId"],
        element: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685.element,
          transform: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685.element["transform"],
            left: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.left,
            top: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18.top
          }
        },
        transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
      }]
    });
  }
  _resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691.preferOffset && Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.offsetX) && Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.offsetY)) return this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.offsetY);
    if (Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.clientX) && Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.clientY)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693 = this._renderContext["engine"]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693.getCanvasElement) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310) return this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.clientX - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.clientY - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.top);
    }
    return this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.offsetX ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.offsetY ?? 0);
  }
  _resolvePointerViewportPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702;
    if (Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703.clientX) && Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703.clientY)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461706;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704 = this._renderContext["engine"]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704.getCanvasElement) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461706 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461706.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705);
      return {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703.clientX - ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.left) ?? 0),
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703.clientY - ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.top) ?? 0)
      };
    }
    return {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703.offsetX ?? 0,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703.offsetY ?? 0
    };
  }
  _createViewportPointerEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714,
      button: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.button,
      buttons: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.buttons,
      offsetX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713.x,
      offsetY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713.y,
      clientX: undefined,
      clientY: undefined,
      preventDefault: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.preventDefault) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714);
      },
      stopPropagation: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.stopPropagation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714);
      }
    };
  }
  _updateResizeDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723 = this._resizeDragContext;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724 = this._resolveScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718.offsetY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725 = this._resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724.y),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.handle["axis"] === "column" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.startPoint["x"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.startPoint["y"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 = kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.object["width"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.object["height"], {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.handle,
        delta: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102,
        minSize: 12
      });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.pendingTable = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.object).setPreviewTable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726), this._setResizeCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.handle["axis"]), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722, true);
  }
  _finishResizeDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739 = this._resizeDragContext;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739) return;
    this._updateResizeDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.pendingTable;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.object).setPreviewTable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738, null), this._resizeDragContext = null, this._resetResizeCursor(), Vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.handle["axis"]) && this._commandService["executeCommand"](UpdateSlideTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.tableId,
      patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.handle["axis"] === "column" ? {
        columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740.columns
      } : {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740.rows
      }
    });
  }
  _setResizeCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746) {
    this._resizeHoverActive = true, this._renderContext["scene"].setCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746 === "column" ? CURSOR_TYPE.COLUMN_RESIZE : CURSOR_TYPE.ROW_RESIZE);
  }
  _resetResizeCursor() {
    this._resizeHoverActive && (this._resizeHoverActive = false, this._renderContext["scene"].resetCursor());
  }
  _isTableTextEditing() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748 = this._tableSelectionService["getSelection"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748.kind) === "text";
  }
  _isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751 = this._tableSelectionService) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751.getSelection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756.kind) === "text" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.drawingId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.element["type"] === PageElementTypeEnum.Table && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.element["tableId"]) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753 = this._drawingStateService) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753.getSnapshot) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757.context["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757.selectedIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.drawingId);
  }
  _isTableInteractionInProgress(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.drawing ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.drawing["unitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.drawing["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.drawing["drawingId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766.elementId : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766.tableId : false,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768 = this._tableSelectionService).isTableInternalInteractionActive) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768)) ?? false;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766.kind === "text" || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769(this._rangeDragContext) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769(this._pendingStage1TableDragContext) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769(this._tableMoveDragContext) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769(this._resizeDragContext) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769(this._pendingHeaderSelection) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769(this._rowColumnMoveState);
  }
  _selectResolvedCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774.element["type"] !== PageElementTypeEnum.Table) return;
    this._enterCellStage();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780 = this._tableSelectionService["selectCell"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774.drawingId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774.element["tableId"],
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776.column
    });
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780.kind),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780.ranges,
      active: {
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776.row,
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776.column
      }
    }), this._setTableKeyboardFocus(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779, true);
  }
  _syncTableSelectionToObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790 = this._tableSelectionService["getSelection"]()) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.element["type"] !== PageElementTypeEnum.Table || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.unitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.subUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.elementId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.drawingId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.tableId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.element["tableId"]) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.focus ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.anchor ?? Fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.ranges);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.kind),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.ranges,
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793
    }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.setEditingCell) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790.kind === "text" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 ?? null : null);
  }
  _selectRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.element["type"] !== PageElementTypeEnum.Table) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.element["tableId"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807) return;
    this._enterCellStage();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807, {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803,
        startColumn: 0,
        endColumn: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807.columns["length"] - 1)
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809 = this._tableSelectionService["selectRows"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.drawingId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.element["tableId"],
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808.startRow,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808.endRow,
        columnCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807.columns["length"]
      });
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809.kind),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809.ranges
    }), this._setTableKeyboardFocus(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806, true);
  }
  _selectColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820.element["type"] !== PageElementTypeEnum.Table) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820.element["tableId"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827) return;
    this._enterCellStage();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827, {
        startRow: 0,
        endRow: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.rows["length"] - 1),
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829 = this._tableSelectionService["selectColumns"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820.drawingId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820.element["tableId"],
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.startColumn,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.endColumn,
        rowCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.rows["length"]
      });
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461824 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461824.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829.kind),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829.ranges
    }), this._setTableKeyboardFocus(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826, true);
  }
  _selectTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.element["type"] !== PageElementTypeEnum.Table) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.element["tableId"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845) return;
    this._enterCellStage();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846 = this._tableSelectionService["selectTable"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.drawingId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.element["tableId"],
      rowCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845.rows["length"],
      columnCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845.columns["length"]
    });
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.kind),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.ranges
    }), this._setTableKeyboardFocus(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844, true);
  }
  _activateTableObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857;
    this._tableActivationStage = "table", (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854, {
      ranges: []
    }), this._setTableKeyboardFocus(false), this._setTableObjectKeyboardFocus(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857, true);
  }
  _enterCellStage() {
    this._tableActivationStage !== "cell" && (this._tableActivationStage = "cell"), this._setTableObjectKeyboardFocus(false), this._hideTableTransformerControls();
  }
  _syncActivationStageFromSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863;
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 = !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862.ranges) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863.length);
    this._tableActivationStage = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 ? "cell" : "table", this._setTableKeyboardFocus(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862.kind !== "text"), this._setTableObjectKeyboardFocus(!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 && this._hideTableTransformerControls();
  }
  _shouldShowTransformerForDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.element["type"] !== PageElementTypeEnum.Table) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869 = this._tableSelectionService["getSelection"]();
    return !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.drawingId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869.kind === "text" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869.ranges) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867.length) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868 = this._lastActiveTableContext) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.unitId && this._lastActiveTableContext["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.subUnitId && this._lastActiveTableContext["elementId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.drawingId && this._tableActivationStage === "cell");
  }
  _hideTableTransformerControls() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461874, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461876, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461874 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875 = this._renderContext["scene"]).getTransformer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461874.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461876 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879.clearSelectedObjects) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461876.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878, true);
  }
  _handleKeyboardAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888;
    if (this._isTableTextEditing()) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 = this._editorUIService["getSession"](),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 = Mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886);
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 ? false : this._handleCellEditorKeyDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.context, this._editorSessionId);
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886 === "edit-cell") return this._openSelectionEditor();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889 = this._resolveActiveSelectionForKeyboard();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.drawing["element"].type !== PageElementTypeEnum.Table) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886 === "clear-cells") return this._clearSelectedCellContents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890 = ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890.extend) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.selection["anchor"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.focus,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.focus, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.table["rows"].length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.table["columns"].length),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.table, {
          startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.row,
          startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.column,
          endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.row,
          endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.column
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 = this._tableSelectionService["selectRange"]({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.drawing["unitId"],
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.drawing["subUnitId"],
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.drawing["drawingId"],
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.drawing["element"].tableId,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321
        });
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.object).setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, {
        kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322.kind),
        ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322.ranges,
        active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320
      });
    } else {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 = da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.focus, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.table["rows"].length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.table["columns"].length),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 = this._tableSelectionService["selectCell"]({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.drawing["unitId"],
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.drawing["subUnitId"],
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.drawing["drawingId"],
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.drawing["element"].tableId,
          row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.row,
          column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323.column
        });
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889.object).setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894, {
        kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.kind),
        ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.ranges,
        active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323
      });
    }
    return this._setTableKeyboardFocus(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888, true), true;
  }
  _resolveTableClipboardTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904.defaultPrevented || !this._contextService["getContextValue"]("FOCUSING_SLIDE_TABLE") || this._isTableTextEditing()) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905 = this._resolveActiveSelectionForKeyboard();
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905.selection["unitId"]) === this._renderContext["unitId"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905 : null;
  }
  _canCopyTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908) {
    return getSlidePermissionValue(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.unitId, UnitAction.Copy);
  }
  async _commitClipboardPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915;
    return (await this._commandService["executeCommand"](UpdateSlideTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910.selection["unitId"],
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910.selection["tableId"],
      patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911
    })) ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910.object).setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910.selection["kind"]),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910.selection["ranges"],
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910.selection["focus"]
    }), this._setTableKeyboardFocus(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915, true), true) : false;
  }
  async _insertClipboardImages(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923 = 0) {
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = await normalizeClipboardImageFile(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17) * 32;
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 === 0 ? await this._slideInsertService["insertImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650) : await this._slideInsertService["insertImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, {
          offset: {
            x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
            y: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2
          }
        });
      }
    }
  }
  _handleKeyboardInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.kind === "composition-start" ? this._openSelectionEditor() : this._isTableTextEditing() || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.text ? false : this._openSelectionEditor({
      initialText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.text
    });
  }
  _clearSelectedCellContents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933 = uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.selection);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933 && this._commandService["executeCommand"](UpdateSlideTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.selection["unitId"],
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.selection["tableId"],
      patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933
    }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.object).setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.selection["kind"]),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.selection["ranges"],
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.selection["focus"]
    }), this._setTableKeyboardFocus(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932, true), true;
  }
  _openSelectionEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941 = this._resolveActiveSelectionForKeyboard();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.drawing["element"].type !== PageElementTypeEnum.Table) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942 = resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.table),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.focus["row"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.focus["column"] && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.hidden) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.hidden && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.focus["row"] >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.focus["row"] < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.rowSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.focus["column"] >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.focus["column"] < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.columnSpan);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 ? (this._openCellEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.drawing, {
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.table,
      model: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942,
      cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943,
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943.column,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.object
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940), true) : false;
  }
  _resolveActiveSelectionForKeyboard() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948 = this._tableSelectionService["getSelection"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.ranges[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.kind === "text") return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950 = this._resolveSelectedTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.elementId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.element["type"] !== PageElementTypeEnum.Table || !this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.tableId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.elementId));
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952 ? null : {
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952,
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951,
      selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948,
      focus: fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.focus ?? {
        row: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949.endRow),
        column: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461949.endColumn)
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.rows["length"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951.columns["length"])
    };
  }
  _setTableKeyboardFocus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958) {
    this._contextService["setContextValue"]("FOCUSING_SLIDE_TABLE", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958);
  }
  _setTableObjectKeyboardFocus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960) {
    this._contextService["setContextValue"]("FOCUSING_SLIDE_TABLE_OBJECT", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960);
  }
  _updateRangeDrag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963 = this._rangeDragContext;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.drawing["element"].type !== PageElementTypeEnum.Table) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.buttons & 1) != 1) {
      this._finishRangeDrag();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461964 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461965 = this._resolveCellHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.objectKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461964.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461964.y);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461965 && this._applyRangeDragSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963, {
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461965.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461965.column
    });
  }
  _applyRangeDragSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.drawing["element"].type !== PageElementTypeEnum.Table || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.current["row"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.current["column"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971.column && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972 = this._tableSelectionService["getSelection"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972.kind) === "range") return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.current = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.table, {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.anchor["row"],
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.anchor["column"],
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971.row,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971.column
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978 = this._tableSelectionService["selectRange"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.drawing["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.drawing["subUnitId"],
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.drawing["drawingId"],
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.drawing["element"].tableId,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977
      });
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.object).setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.kind),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.ranges,
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971
    }), this._setTableKeyboardFocus(true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976, true);
  }
  _resetTableInteraction() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995 = this._tableSelectionService["getSelection"](),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995.elementId
      } : null, this._lastActiveTableContext].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.filter((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328.elementId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988 = this._editorDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.dispose(), this._editorDisposable = null, this._editorSessionId += 1, this._activeEditorContextKey = null, this._finishRangeDrag(), this._rangeDragContext = null, this._finishPendingStage1TableDrag({
      focusCell: false
    }), this._hoveredTrigger = null, this._finishHeaderSelectionDrag(undefined, {
      commitMove: false
    }), this._tableActivationStage = null, this._lastActiveTableContext = null, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989 = this._tableMoveDragContext) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989.clickFallbackTimer && clearTimeout(this._tableMoveDragContext["clickFallbackTimer"]), this._tableMoveDragContext && this._alignmentGuideService["end"](this._renderContext["unitId"], new Map([[this._tableMoveDragContext["object"].oKey, this._tableMoveDragContext["object"]]])), this._tableMoveDragContext = null, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990 = this._resizeDragContext) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990.object).setPreviewTable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991, null), this._resizeDragContext = null, this._resetResizeCursor(), this._setStructuralCursor(false), this._setTableKeyboardFocus(false), this._setTableObjectKeyboardFocus(false), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A15.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.elementId));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.setEditingCell) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.setPreviewTable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.setTableCellHover) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.setTableControlState) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.setTableControlHover) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, null);
    }), this._tableSelectionService["clear"](), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994, true);
  }
  _handleDoubleClick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004.drawing["unitId"] !== this._renderContext["unitId"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004.drawing["element"].type !== PageElementTypeEnum.Table || !this._isTableDrawingActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004.drawing)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005 = this._resolveCellHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004.oKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004.offsetY);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005 && this._openCellEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004.drawing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005);
  }
  _openCellEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.element["type"] !== PageElementTypeEnum.Table) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.element,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.drawingId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015.tableId,
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.row,
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.column,
        drawingTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.transform
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010.initialText) === undefined ? this._resolveCellDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.column) : Ws(this._resolveCellDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.column), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010.initialText),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017 = this._resolveEditorLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.model, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.cell, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017) return;
    this._enterCellStage();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018 = Hc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20);
    this._hideContextMenu();
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 = (this._editorSessionId ?? 0) + 1;
    if (this._editorSessionId = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104, this._activeEditorContextKey = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010.handoffCurrent) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020 = this._editorUIService).getSession) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020);
      this._editorUIService["complete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.documentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.measurement, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.sessionId);
    } else this._editorUIService["complete"]();
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.object).setEditingCell) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012, {
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.cell["row"],
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.cell["column"]
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021 = this._tableSelectionService["enterTextMode"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.object).setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021.kind),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021.ranges,
      active: {
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.row,
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.column
      }
    }), this._makeSceneDirty(), this._setTableKeyboardFocus(false), this._editorDisposable = this._editorUIService["open"]({
      editorId: Tc,
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016,
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017,
      context: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20,
      appearance: "table-cell",
      autoFocus: true,
      hideFloatingToolbarAlignment: true,
      cellFillColor: Jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.cell),
      isSingle: false,
      onCellFillColorChange: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348) => {
        this._commitCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, {
          fill: qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347)
        });
      },
      onChange: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353) => {
        this._autoGrowCellEditorRowHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104);
      },
      onComplete: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359) => {
        this._commitCellDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104);
      },
      onCancel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 => {
        this._finishCellEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104);
      },
      onPointerDown: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366) => this._handleCellEditorPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104),
      onKeyDown: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368) => this._handleCellEditorKeyDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104)
    });
  }
  _handleCellEditorPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037 || !this._isCurrentEditorSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.tableId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041 = this._resolveSelectedTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.elementId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041.element["type"] !== PageElementTypeEnum.Table) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042 = buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.elementId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043 = this._renderContext["scene"].getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 = this._resolvePointerScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045 = this._resolveCellHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044.y);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.column ? false : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036.stopTextSelectionDrag) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036), this._openCellEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041, {
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040,
      model: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.model,
      cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.cell,
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.column,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043
    }, {
      handoffCurrent: true
    }), true);
  }
  _handleCellEditorKeyDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057 || !this._isCurrentEditorSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060 = jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.tableId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062 = this._resolveSelectedTableDrawing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.elementId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062.element["type"] !== PageElementTypeEnum.Table) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063 = da({
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.column
    }, {
      rowDelta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060.rowDelta,
      columnDelta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060.columnDelta,
      wrap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060.wrap
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.rows["length"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.columns["length"]);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.column) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064 = buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.elementId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462065 = this._renderContext["scene"].getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462065) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066 = resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462067 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063.column && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.hidden) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.hidden && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063.row >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063.row < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.rowSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063.column >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.column && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063.column < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.columnSpan);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462067) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068 = this._editorUIService["getSession"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068) return false;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056.stopPropagation(), this._editorUIService["complete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068.documentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068.measurement, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068.sessionId);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069 = this._tableSelectionService["selectCell"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062.drawingId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062.element["tableId"],
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462067.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462067.column
    });
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462065.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462065, {
      kind: Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.kind),
      ranges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.ranges,
      active: {
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462067.row,
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462067.column
      }
    }), this._enterCellStage(), this._setTableKeyboardFocus(true), this._makeSceneDirty(), true;
  }
  _resolveCellHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462087) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084.element["type"] !== PageElementTypeEnum.Table || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084.groupId) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084.element["tableId"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089 = this._renderContext["scene"].getObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089.isInGroup) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462090 = resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091 = this._resolveTablePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462087),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092 = xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462090, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091.y);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462093 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462090.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092.column && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.hidden);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462093 ? {
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088,
      model: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462090,
      cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462093,
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092.column,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462089
    } : null;
  }
  _resolveTablePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.getInverseCoord(new Vector2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107)),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.width / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB48 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462108.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.height / 2,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.width, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105.height / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.height, 1);
    return {
      x: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462109,
      y: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB48 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462110
    };
  }
  _resolveEditorLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123;
    if (!this._renderContext["engine"].getCanvasElement()) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124 = this._renderContext["scene"].getAncestorScale(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.scaleX, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.scaleY, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127 = Gs({
        rect: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.getCellTextRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.height)) ?? resolveSlideTableCellRect({
          cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120,
          tableWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119.width,
          tableHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119.height,
          targetWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.width,
          targetHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.height,
          includeMargins: true
        }),
        tableTransform: {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.left,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.top,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.height,
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.angle,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.flipX,
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118.flipY
        },
        scale: {
          scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125,
          scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126
        },
        scenePointToViewportPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 => this._resolveScenePointToEditorPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372)
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.style["textDirection"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123.renderConfig;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127,
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.horizontalAlign,
      isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 !== "vertical" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 !== "vertical270",
      verticalAlign: Uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.style["verticalAlign"]) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.verticalAlign)
    };
  }
  _resolveScenePointToEditorPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.getViewports) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146)[0],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147.getAbsoluteVector) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462147, new Vector2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.y));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148) return {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148.x,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148.y
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149 = this._renderContext["engine"].getCanvasElement(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149)) ?? {
        left: 0,
        top: 0
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146.getAncestorScale(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150.scaleX, 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150.scaleY, 1);
    return {
      x: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151,
      y: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152
    };
  }
  _resolveCellDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462167;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51 = Tc + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164.id + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165 + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166;
    return qs(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462167.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462166]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462167.textData) || {
      id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51,
      body: {
        dataStream: "\x0d\x0a"
      },
      documentStyle: {}
    }, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB51);
  }
  _commitCellDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.tableId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177) {
      this._isCurrentEditorSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175) && this._tableSelectionService["clear"]();
      return;
    }
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB53 = Tc + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177.id + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.row + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.column,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178 = qs(stripEditorUIDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB53),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179 = Wc((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.documentStyle) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.renderConfig) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.verticalAlign),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180 = buildSlideTableCellTextDataPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178, {
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180) {
      this._isCurrentEditorSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175) && this._tableSelectionService["clear"]();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462181 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180.rows,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182 = this._applyAutoGrowRowHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174);
    this._commandService["executeCommand"](UpdateSlideTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.tableId,
      patch: {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462181
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182 > 0 && this._growTableDrawingHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182), this._finishCellEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175);
  }
  _autoGrowCellEditorRowHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 || !this._isCurrentEditorSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.tableId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198.rows),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200 = this._applyAutoGrowRowHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200 <= 0) return;
    this._commandService["executeCommand"](UpdateSlideTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.tableId,
      patch: {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199
      }
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.elementId));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201.setPreviewTable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462197.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462198,
      rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462199
    }), this._growTableDrawingHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200), this._makeSceneDirty();
  }
  _handleCellEditorPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212) {}
  _handoffCellEditorToRangeSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225 = this._editorUIService["getSession"]();
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225 || !this._isCurrentEditorSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225.context, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216.stopTextSelectionDrag) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216), this._editorUIService["complete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225.documentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225.measurement), this._rangeDragContext = {
      drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219,
      objectKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462220,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462221,
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222,
      anchor: {
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217.row,
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217.column
      },
      current: {
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217.row,
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217.column
      }
    }, this._bindRangeDragWindowEvents(), this._applyRangeDragSelection(this._rangeDragContext, {
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223.column
    }));
  }
  _bindRangeDragWindowEvents() {
    if (this._rangeDragWindowCleanup || typeof window > "u") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 => {
        this._updateRangeDrag({
          buttons: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373.buttons,
          clientX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373.clientX,
          clientY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373.clientY
        });
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237 = () => {
        this._finishRangeDrag();
      };
    window.addEventListener("pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236), window.addEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237), this._rangeDragWindowCleanup = () => {
      window.removeEventListener("pointermove", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462236), window.removeEventListener("pointerup", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237), this._rangeDragWindowCleanup = null;
    };
  }
  _finishRangeDrag() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240 = this._rangeDragWindowCleanup;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240(), this._rangeDragContext = null;
  }
  _handleCellEditorPointerUp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462243) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462244;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462242 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462244 = this._rangeDragContext) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462244.drawing["unitId"]) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462242.unitId && this._rangeDragContext["drawing"].drawingId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462242.elementId && this._finishRangeDrag();
  }
  _applyAutoGrowRowHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251) return 0;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250.elementId));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252) return 0;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253 = resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462254 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250.column && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.hidden);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462254) return 0;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253.height),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462256 = Rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462257 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251.contentHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462256),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 = Math.ceil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462257 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462256);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 <= 0) return 0;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D107 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 * (Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462255),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249[Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249.length - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462254.row + Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462254.rowSpan) - 1)];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258.height = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258.height, 24) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D107, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106) : 0;
  }
  _growTableDrawingHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462271) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462272 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270.drawingTransform;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462272) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270.elementId)),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D110 = Math.max(Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462272.height, 0), Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273.height, 0)),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462272,
        height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D110 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462271
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270.drawingTransform = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24, this._commandService["executeCommand"](UpdateSlideDrawingCommand.id, {
      patches: [{
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270.elementId,
        transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24
      }]
    });
  }
  _commitCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462280 = this._tableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278.tableId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462280) {
      this._tableSelectionService["clear"]();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462280.rows),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278.row],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278.column];
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278.column] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283,
      style: Gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283.style, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279)
    }, this._commandService["executeCommand"](UpdateSlideTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278.tableId,
      patch: {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281
      }
    }));
  }
  _finishCellEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462291) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295;
    if (!this._isCurrentEditorSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462291) || (this._tableSelectionService["clear"](), this._editorDisposable = null, this._activeEditorContextKey = null, this._setTableKeyboardFocus(false), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290)) return;
    this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290.unitId);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290.elementId));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296.setEditingCell) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296, null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296.setTableSelection) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296, null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296.setTableControlHover) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296, null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296.setPreviewTable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296, null), this._restoreTableDrawingSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290), this._makeSceneDirty();
  }
  _isCurrentEditorSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305 !== this._editorSessionId ? false : this._activeEditorContextKey === Hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305 === this._editorSessionId;
  }
  _restoreTableDrawingSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309;
    this._drawingStateService["selectDrawings"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.subUnitId
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.elementId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.elementId);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310 = this._renderContext["scene"].getTransformer(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311 = this._renderContext["scene"].getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.elementId));
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311.isInGroup || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310.setSelectedControl) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311);
  }
  _makeSceneDirty() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462317;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462317 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462317, true);
  }
};
function jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292.altKey || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292.ctrlKey || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292.metaKey) return null;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292.key) {
    case "Tab":
      return {
        rowDelta: 0,
        columnDelta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292.shiftKey ? -1 : 1,
        wrap: true
      };
    default:
      return null;
  }
}
function Mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464294) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66 = {
    preventDefault: () => {},
    stopPropagation: () => {}
  };
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464294) {
    case "move-left":
    case "extend-left":
      return {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66,
        key: "ArrowLeft"
      };
    case "move-right":
    case "extend-right":
      return {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66,
        key: "ArrowRight"
      };
    case "move-up":
    case "extend-up":
      return {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66,
        key: "ArrowUp"
      };
    case "move-down":
    case "extend-down":
      return {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66,
        key: "ArrowDown"
      };
    case "tab-forward":
      return {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66,
        key: "Tab"
      };
    case "tab-backward":
      return {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66,
        key: "Tab",
        shiftKey: true
      };
    case "edit-cell":
      return {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66,
        key: "Enter"
      };
    default:
      return null;
  }
}
function Nc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464297) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464296.element["transform"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464296.transform;
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298.left ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299.left) ?? 0,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298.top ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299.top) ?? 0,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298.width ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299.width) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464297 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464297.width),
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298.height ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299.height) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464297 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464297.height),
    angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298.rotation ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299.angle) ?? 0,
    flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298.flipX ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299.flipX),
    flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464298.flipY ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464299.flipY)
  };
}
function Pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464305 = 0) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464304 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464304) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464304 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464305;
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464309) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464310 = Pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464309);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464310 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464310 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464309;
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464314) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464314 === "none" ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464314;
}
function Fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464317 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316[0];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464317) return {
    row: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464317.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464317.endRow),
    column: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464317.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464317.endColumn)
  };
}
function Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464321) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464322 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464321, 1),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A61 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464320.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320 => Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320, 1)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464323 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A61.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322, 0);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A61.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462323 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462323 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464323 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464322);
}
function Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464329) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D209 = 0,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68 = {
      index: 0,
      distance: Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464329)
    };
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D112 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D112 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464328.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D112 += 1) {
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D209 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464328[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D112];
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464329 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D209);
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 < var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68.distance && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68 = {
      index: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D112 + 1,
      distance: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18
    });
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68.index;
}
function Rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464334) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464335 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464334 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464333.height, 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464336 = resolveSlideTableCellTextMargins(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464332.style["margins"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464336.top,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464338 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464336.bottom;
  return Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464332.bounds["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464335 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464337 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464338);
}
function zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D211 = 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464349 = null;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464346.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113 += 1) {
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D211 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464346[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113];
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464347 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D211);
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348 || (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464349 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464349.distance) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464349 = {
      boundaryIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113 + 1,
      distance: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19
    });
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464349;
}
function Bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464357) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D213 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464355 - 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464358 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464355;
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D213 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464358 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464354.length) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464354;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464359 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464354[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D213],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464360 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464354[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464358],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D214 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464357 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464359,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D215 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464360 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464357,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D216 = Math.min(Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464356, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D214), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D215),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464354.slice();
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D213] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464359 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D216, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464358] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464360 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D216, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63;
}
function Vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370 === "column" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464368.columns["some"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462325) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.width !== ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462325]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326.width);
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464368.rows["some"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330.height ?? 24) !== (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332.height) ?? 24);
  });
}
function Hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.unitId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.subUnitId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.elementId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.tableId + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.row + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.column;
}
function Uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464376) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464376 === "middle") return VerticalAlign.MIDDLE;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464376 === "bottom") return VerticalAlign.BOTTOM;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464376 === "top") return VerticalAlign.TOP;
}
function Wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378 === VerticalAlign.MIDDLE) return SlideTableVerticalAlignEnum.Middle;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378 === VerticalAlign.BOTTOM) return SlideTableVerticalAlignEnum.Bottom;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378 === VerticalAlign.TOP) return SlideTableVerticalAlignEnum.Top;
}
function Gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381.fill ? {
      fill: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380.fill),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381.fill
      }
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381.borders ? {
      borders: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380.borders),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381.borders
      }
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381.margins ? {
      margins: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380.margins),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464381.margins
      }
    } : {})
  };
}
function Kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384) {
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384.type) === "none") return "transparent";
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384.color;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386 = Zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114 = tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386.a) ?? 1;
    return "rgba(" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386.r + ",\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386.g + ",\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386.b + ",\x20" + rl(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114) + ")";
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387 = Qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D221 = tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384.alpha) ?? 1;
  return "rgba(" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387.r + ",\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387.g + ",\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387.b + ",\x20" + rl(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D221) + ")";
}
function qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464392) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393 = Zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464392);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393) return {
    color: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F3(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393.r, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393.g, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393.b),
    alpha: tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393.a) ?? 1
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464394 = Qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464392);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464394 ? {
    color: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F3(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464394.r, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464394.g, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464394.b)
  } : {
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464392
  };
}
function Jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464399) {
  return Kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464399.style["fill"]) ?? Yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464399.row);
}
function Yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464403) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464402.options["firstRow"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464403 === 0 ? "#E8F1FF" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464402.options["bandRow"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464403 % 2 == 0 ? "#F7FAFF" : "#FFFFFF";
}
function Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464406) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464406 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464406);
}
function Zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464408) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464409 = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d+(?:\.\d+)?|\.\d+))?\s*\)$/i.exec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464408.trim());
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464409) return {
    r: el(Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464409[1], 10)),
    g: el(Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464409[2], 10)),
    b: el(Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464409[3], 10)),
    a: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464409[4] === undefined ? 1 : Number.parseFloat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464409[4])
  };
}
function Qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464412) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB91 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464412.trim(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464413 = /^#([0-9a-f]{3})$/i.exec(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB91);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464413) {
    let [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464413[1].split("").map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 => Number.parseInt("" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, 16));
    return {
      r: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18,
      g: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A19,
      b: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464414 = /^#([0-9a-f]{6})$/i.exec(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB91);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464414) return {
    r: Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464414[1].slice(0, 2), 16),
    g: Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464414[1].slice(2, 4), 16),
    b: Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464414[1].slice(4, 6), 16)
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F3(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464420) {
  return ("#" + [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464420].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336 => el(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336).toString(16).padStart(2, "0")).join("")).toUpperCase();
}
function el(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464424) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464424) ? Math.min(255, Math.max(0, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464424))) : 0;
}
function tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426) {
  if (!(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426 != "number" || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426))) return nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426 <= 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426 <= 100 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426 / 100 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426 / 100000);
}
function nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464428) {
  return Math.min(1, Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464428));
}
function rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464430) {
  return Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464430.toFixed(4)).toString();
}
function il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464432) {
  return new DOMParser().parseFromString(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464432, "text/html").querySelector("img") !== null;
}
async function al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464435) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464436 = extractClipboardImageFiles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464434);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464435 ? il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464435) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464436.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464436 : extractClipboardHtmlImageFiles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464435) : [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464436;
}
function ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464440) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464440.type === PageElementTypeEnum.Table;
}
let sl = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337) {
    this._resourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337, W(this, "key", "slide-table");
  }
  collect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26 = {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27 = {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {};
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339.elements["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 => {
      if (!ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 = this._resourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.tableId);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.id] = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.themeId)) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = this._resourceService["getTheme"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.themeId);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.id] = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652));
      }
    }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26).length === 0 ? null : {
      tables: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26,
      themes: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27,
      tableIdByElementId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28
    };
  }
  serialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341.elements["filter"](ol).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 => this._resourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381.tableId)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 !== undefined);
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.length > 0 ? {
      html: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.map(dl).join("<br>"),
      plainText: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A21.map(ul).join("\x0a")
    } : null;
  }
  preparePaste(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343) {
    if (!cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343.payload)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343.payload,
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343.elementIdMap["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384) => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384));
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592 = new Map(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343.elements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 => {
        if (!ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.id),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344.tableIdByElementId[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386] : undefined;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344.tables[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387]) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = generateRandomId(6), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388)), {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388
        };
      }),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = [];
    return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344.tables[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.id = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.themeId) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344.themes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.themeId];
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.id);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = freezeSlideTableTheme(generateRandomId(6), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653).id, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 = {
            ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653),
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.themeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617;
        } else delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.themeId;
      }
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.push({
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396,
        theme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397
      });
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.length === 0 ? null : {
      elements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345,
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.map(({
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403,
        theme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404
      }) => ({
        id: SetSlideTableMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343.targetUnitId,
          table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403,
          theme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404
        }
      })),
      undoMutations: [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23].reverse().map(({
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405
      }) => ({
        id: RemoveSlideTableMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343.targetUnitId,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.id
        }
      }))
    };
  }
};
function dl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464448) {
  return "<table><colgroup>" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464448.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350 => '<col style="width: ' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350.width + 'px">').join("") + "</colgroup><tbody>" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464448.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351 => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351.cells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.hMerge || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.vMerge) return "";
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.rowSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.rowSpan > 1 ? 'rowspan="' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.rowSpan + "\x22" : "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.columnSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.columnSpan > 1 ? "colspan=\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.columnSpan + "\x22" : "", sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407)].filter(Boolean).join("\x20"),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.textData ? convertBodyToHtml(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.textData)) : "";
      return "<td" + (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 ? "\x20" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 : "") + ">" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 + "</td>";
    }).join("");
    return "<tr" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351.height ? ' style="height: ' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351.height + "px\x22" : "") + ">" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 + "</tr>";
  }).join("") + "</tbody></table>";
}
function fl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464452) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A65 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464451.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353.subscribeEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464450)] : []),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464452 && typeof ResizeObserver < "u" ? new ResizeObserver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464450) : null;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464452 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464453 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464453.observe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464452)), () => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A65.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.unsubscribe()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464453 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464453.disconnect();
  };
}
function pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464459 = ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.selection),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.scale["scaleX"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.canvasScale,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.scale["scaleY"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.canvasScale,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.canvasRect["left"] + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464459.centerX - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.scroll["x"]) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.canvasRect["top"] + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464459.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.scroll["y"] - SLIDE_TABLE_CONTROL_GUTTER) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D224 - 42 - 5,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D226 = Math.max(352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.viewportWidth - 340 - 12);
  return {
    left: Math.min(Math.max(352, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB93), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D226),
    top: Math.max(12, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225)
  };
}
function ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464463 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464.kind !== "row" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464.kind !== "column") return {
    centerX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.width / 2,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.top
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464465 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464.ranges[0];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464465) return {
    centerX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.width / 2,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.top
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464466 = normalizeSlideTableCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464465),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464467 = hl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464463.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354.width), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464466.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464466.endColumn),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464468 = hl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464463.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355.height ?? 24), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464466.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464466.endRow);
  return {
    centerX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464467.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464467.size / 2,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464468.start
  };
}
function hl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464479) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464480 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, 0);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464480 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476.length === 0) return {
    start: 0,
    size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477
  };
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231 = Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476.length - 1)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476.length - 1)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464481 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476.slice(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359, 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464482 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232 + 1).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0);
  return {
    start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464481 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464480 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477,
    size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464482 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464480 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477
  };
}
function gl() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490 = useDependency(Sa),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491 = useDependency(G),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492 = useDependency(SlideTableResourceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494 = useDependency(IRenderManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464496 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.direction$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.getDirection()),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497 = useDependency(ThemeService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464498 = useDependency(SlideTableModelService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491.selection$),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490.visible$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490.getVisible());
  useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464498.tableChange$);
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502] = useState(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464504] = useState({
      selectionKey: null,
      value: null
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505 = useCallback(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491.markTableInternalInteraction();
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.kind === "text" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.ranges["length"] ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB95 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.elementId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.tableId, ...Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.ranges[0] ?? {})].join("|") : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503.selectionKey === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB95 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503.value : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508 = useCallback(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462366, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462367;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502(null);
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462368 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494.getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462368 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462368.scene,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462370 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369.getObject) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369, buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.elementId));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462370) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502(null);
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462368 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462368.engine) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462364 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363.getCanvasElement) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462364.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462365 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462365.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371)) ?? {
          left: 0,
          top: 0,
          width: 0
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462372 = pxToNum((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371.style["width"]) ?? ""),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462372 > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462372 : 1,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462366 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369.getAncestorScale) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462366.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369)) ?? {
          scaleX: 1,
          scaleY: 1
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462373 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462367 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369.getViewport) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462367.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462369, SLIDE_MAIN_VIEWPORT_KEY),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462374 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.tableId);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502(pl({
        canvasRect: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32,
        canvasScale: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115,
        object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462370,
        scale: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33,
        scroll: {
          x: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462373 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462373.viewportScrollX) ?? 0,
          y: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462373 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462373.viewportScrollY) ?? 0
        },
        selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506,
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462374,
        viewportWidth: window.innerWidth
      }));
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506]);
  useEffect(() => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462388;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462389 = requestAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506) return () => cancelAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462389);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494.getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390.scene,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391.getObject(buildDrawingOKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.elementId)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462393 = fl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390.engine["onTransformChange$"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391.onTransformChange$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392.onTransformChange$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391.getViewport(SLIDE_MAIN_VIEWPORT_KEY)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462388.onScrollAfter$], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390.engine["getCanvasElement"]());
    return window.addEventListener("resize", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508), () => {
      cancelAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462389), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462393(), window.removeEventListener("resize", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508);
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.tableId) : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510 = oo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510.values,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462400 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462401 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.ranges[0],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.tableId);
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462401 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493.executeCommand(UpdateSlideTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.tableId,
        patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462400(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462401)
      });
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464513 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493.executeCommand(UpdateSlideTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.tableId,
        patch: {
          styleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462406
        }
      });
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464514 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462408 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493.executeCommand(UpdateSlideTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.tableId,
        patch: {
          options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462408
        }
      });
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515 = useCallback((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462410, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464504({
        selectionKey: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB95,
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462410 : null
      });
    }, [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB95]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464516 = useMemo(() => resolveSlideTableThemePalette(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497.getColorFromTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410)), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497]);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509) return null;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70 = {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501.top,
      width: "max-content",
      maxWidth: "min(760px, calc(100vw - 24px))",
      minHeight: 42,
      transform: "translateX(-50%)",
      zIndex: 10050
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A67 = [{
      labelKey: "slides-table-ui.editorToolbar.alignLeft",
      value: HorizontalAlign.LEFT,
      icon: jsx(LeftJustifyingIcon, {})
    }, {
      labelKey: "slides-table-ui.editorToolbar.alignCenter",
      value: HorizontalAlign.CENTER,
      icon: jsx(HorizontallyIcon, {})
    }, {
      labelKey: "slides-table-ui.editorToolbar.alignRight",
      value: HorizontalAlign.RIGHT,
      icon: jsx(RightJustifyingIcon, {})
    }, {
      labelKey: "slides-table-ui.editorToolbar.alignJustify",
      value: HorizontalAlign.JUSTIFIED,
      icon: jsx(AlignTextBothIcon, {})
    }],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68 = [{
      labelKey: "slides-table-ui.editorToolbar.alignTop",
      value: VerticalAlign.TOP,
      icon: jsx(AlignTopIcon, {})
    }, {
      labelKey: "slides-table-ui.editorToolbar.alignMiddle",
      value: VerticalAlign.MIDDLE,
      icon: jsx(VerticalCenterIcon, {})
    }, {
      labelKey: "slides-table-ui.editorToolbar.alignBottom",
      value: VerticalAlign.BOTTOM,
      icon: jsx(AlignBottomIcon, {})
    }],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464517 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.ranges[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510.mergeState,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519 = co(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464520 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519.kind) === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.t("slides-table-ui.contextMenu.deleteRow") : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519.kind) === "column" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.t("slides-table-ui.contextMenu.deleteColumn") : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464521 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493.executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519.commandId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519.params);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464522 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518.action) === "unmerge" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.t("slides-table-ui.editorToolbar.unmergeCells") : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518.action) === "merge" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.t("slides-table-ui.editorToolbar.mergeCells") : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464523 = () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414 = so(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518.action) ?? null, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518.range) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464517 ?? null);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493.executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414.commandId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414.params);
    };
  return jsxs("div", {
    "data-u-comp": "slide-table-floating-toolbar",
    role: "toolbar",
    className: clsx("univer-fixed\x20univer-box-border\x20univer-flex\x20univer-max-w-[760px]\x20univer-flex-nowrap\x20univer-items-center\x20univer-rounded\x20univer-bg-gray-0\x20univer-px-1\x20univer-py-1\x20univer-shadow-sm\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900", borderClassName),
    dir: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464496,
    style: {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70,
      direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464496
    },
    onMouseDownCapture: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505,
    onPointerDownCapture: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505,
    onMouseDown: keepFloatingToolbarPanelInteraction,
    onPointerDown: keepFloatingToolbarPanelInteraction,
    children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464520 ? jsxs(Fragment, {
      children: [jsx(wo, {
        children: jsx(To, {
          "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464519.kind === "row" ? "delete-row" : "delete-column",
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464520,
          onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464521,
          children: jsx(DeleteIcon, {})
        })
      }), jsx(Separator, {
        orientation: "vertical"
      })]
    }) : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464522 ? jsxs(Fragment, {
      children: [jsx(wo, {
        children: jsx(To, {
          "data-toolbar-item": "merge-cells",
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464522,
          onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464523,
          children: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518.action) === "unmerge" ? jsx(CancelMergeIcon, {}) : jsx(MergeAllIcon, {})
        })
      }), jsx(Separator, {
        orientation: "vertical"
      })]
    }) : null, jsxs(wo, {
      children: [jsx(fo, {
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.backgroundColor,
        value: Ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.backgroundFill),
        gradientValue: Ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.backgroundFill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.backgroundColor),
        previewStyle: Ha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.backgroundFill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.backgroundColor),
        showPreview: false,
        tableFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.backgroundFill,
        mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["backgroundFill"],
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 === "background",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515("background", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416),
        onTableFillChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412) => Pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417)),
        children: jsx(ShapeBackgroundColorDoubleIcon, {
          extend: {
            colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.backgroundColor
          }
        })
      }), jsx(ko, {
        direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464496,
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.borderColor,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.borderWidth,
        dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.borderDash,
        presets: bo,
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 === "border",
        mixed: !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["borderColor"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["borderWidth"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["borderDash"]),
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462418 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515("border", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462418),
        onSelectPreset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462419 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) => Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462419)),
        onChangeColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462420 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416) => Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416, {
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462420
        })),
        onChangeWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462421 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418) => Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418, {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462421,
          dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462421 === 0 ? SlideTableBorderDashEnum.None : undefined
        })),
        onChangeDash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462422 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420) => Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420, {
          dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462422
        }))
      })]
    }), jsx(Separator, {
      orientation: "vertical"
    }), jsxs(wo, {
      children: [jsx(FontFamilyDropdown, {
        ariaLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.t("slides-table-ui.editorToolbar.fontFamily"),
        className: "univer-w-28",
        inputClassName: "univer-w-auto",
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["fontFamily"] ? "" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.fontFamily,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462423 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422) => zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462423)),
        onMouseDown: keepFloatingToolbarPanelInteraction,
        onPointerDown: keepFloatingToolbarPanelInteraction
      }), jsx(No, {
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.t("slides-table-ui.editorToolbar.fontSize"),
        widthClassName: "univer-w-14",
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["fontSize"] ? "" : String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.fontSize),
        options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["fontSize"] ? [{
          label: "—",
          value: ""
        }, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78] : Ga(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78, String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.fontSize)),
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462424 => {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D117 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462424);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462424 && !Number.isNaN(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D117) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424) => Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D117));
        }
      }), jsx(Do, {
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 === "textFormat",
        values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511,
        horizontalAlignOptions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A67,
        verticalAlignOptions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68,
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462426 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515("textFormat", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462426),
        onToggleStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462427 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426) => ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462427)),
        onHorizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428) => kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, {
          axis: "horizontal",
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462428
        })),
        onVerticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430) => kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430, {
          axis: "vertical",
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429
        }))
      })]
    }), jsx(Separator, {
      orientation: "vertical"
    }), jsxs(wo, {
      children: [jsx(jo, {
        "data-toolbar-item": "text-color",
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.t("slides-table-ui.editorToolbar.textColor"),
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.textColor,
        mixed: !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["textColor"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["textFill"]),
        icon: "font",
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 === "textColor",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462430 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515("textColor", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462430),
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432) => Ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, {
          type: "solid",
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431,
          opacity: 1
        }))
      }), jsx(jo, {
        "data-toolbar-item": "text-background",
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.t("slides-table-ui.editorToolbar.textBackgroundColor"),
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.textBackgroundColor,
        mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.mixed["textBackgroundColor"],
        icon: "bucket",
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 === "textBackground",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515("textBackground", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432),
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434) => ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434, {
          bg: {
            rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433
          }
        }))
      })]
    }), jsx(Separator, {
      orientation: "vertical"
    }), jsx(wo, {
      children: jsx(Oo, {
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 === "theme",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462434 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515("theme", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462434),
        children: jsx(Ro, {
          currentStyleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.styleId,
          currentOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.options ?? {},
          direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464496,
          palette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464516,
          onApplyTheme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462435 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464513(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462435), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515("theme", false);
          },
          onChangeOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464514
        })
      })
    }), jsx(Separator, {
      orientation: "vertical"
    }), jsx(wo, {
      children: jsx(To, {
        "data-toolbar-item": "delete-table",
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495.t("slides-table-ui.contextMenu.deleteTable"),
        onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493.executeCommand(xi.id),
        children: jsx(DeleteIcon, {})
      })
    })]
  });
}
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462437 = yr, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462440, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462437, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462440, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462441, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, this._shortcutService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443, this._uiPartsService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445
    } = merge({}, yr, this._config);
    this._configService["setConfig"](vr, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445), this._initCommands(), this._initShortcuts();
  }
  onStarting() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455 = this._injector;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.has(Sa) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.add([Sa]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.add([ts]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.add([Vs]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.has(G) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.add([G]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.has(sa) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.add([sa]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.has(sl) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.add([sl]), touchDependencies(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455, [[ts], [G], [sa], [Sa], [sl]]), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.get(ISlideClipboardResourceAdapterService).registerAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455.get(sl)));
  }
  onReady() {
    this._menuManagerService["mergeMenu"](Rs), this._injector["get"](Vs), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_SLIDE, Ac)), this.disposeWithMe(this._uiPartsService["registerComponent"](BuiltInUIPart.CONTENT, () => connectInjector(gl, this._injector)));
  }
  _initCommands() {
    [...zi, ...ga, Ca].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435));
    });
  }
  _initShortcuts() {
    [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A77, ...va].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 => {
      this.disposeWithMe(this._shortcutService["registerShortcut"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437));
    });
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933 as UniverSlidesTableUIPlugin };
export { sa, Vs, Ac, sl };
