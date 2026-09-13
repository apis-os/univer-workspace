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
import { F, I, N, P } from "./internal-glue.js";
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.get(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.get(DocSelectionManagerService);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.next(Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313));
    };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.textSelection$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.focused$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100);
    return () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.unsubscribe();
    };
  });
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.get(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.get(DocSelectionManagerService);
  return new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.next(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.columnCount < (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.minColumnCount ?? 1) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.maxColumnCount != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.columnCount > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.maxColumnCount);
    };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.textSelection$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.focused$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108);
    return () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.unsubscribe(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.unsubscribe();
    };
  });
}
function je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.columnCount < DOCS_COLUMN_MAX_COLUMN_COUNT ? {
    columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.columnGroupId,
    targetColumnId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.columnId,
    position: "right"
  } : undefined;
}
function Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 ? {
    columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.columnGroupId,
    columnId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330.columnId
  } : undefined;
}
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 ? {
    columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.columnGroupId
  } : undefined;
}
function Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 ? {
    columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.columnGroupId,
    widthRatios: Array.from({
      length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.columnCount
    }, () => 1)
  } : undefined;
}
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 != "number") return null;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 of ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343.columnGroups) ?? []) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = getColumnGroupRangeById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.columnGroupId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.columns["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.startOffset && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.endOffset);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613) return {
      columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.columnGroupId,
      columnId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.columnId,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.column,
      columnCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.columns["length"]
    };
  }
  return null;
}
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.get(DocSelectionManagerService)) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.getSnapshot(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.getActiveTextRange();
  return A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.collapsed) === false ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.startOffset);
}
function Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.get(DocSelectionManagerService)) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.getSnapshot();
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 || !Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361) || Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361);
}
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.get(DocSelectionManagerService)) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.id),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 ? [(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.menuRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.startOffset, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.moveRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373.startOffset] : [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.getActiveTextRange(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.collapsed) === false ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.startOffset,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 == "number");
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.length === 0 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 => canResolveDocsColumnInsertOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117));
}
function Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.get(DocSelectionManagerService)) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.id);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 && (M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.menuRange) || M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.moveRange))) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.getActiveTextRange();
  return A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.collapsed) === false ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.startOffset) != null;
}
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.startOffset + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.endOffset - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.endOffset].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 => A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) != null) : false;
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463) {
  return {
    id: F.id,
    commandId: F.id,
    selectionsCommandId: F.id,
    params: () => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130;
      return {
        columnCount: 2,
        offset: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, {
          consumeContentInsertRange: true,
          snapToParagraphEnd: true
        })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.offset
      };
    },
    type: MenuItemType.BUTTON_SELECTOR,
    icon: "GridIcon",
    title: "docs-column-ui.menu.column",
    tooltip: "docs-column-ui.menu.column",
    hidden$: O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463),
    selections: [{
      label: {
        name: I,
        hoverable: false,
        selectable: false
      }
    }]
  };
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465) {
  return {
    ...L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465),
    id: F.id + ".below",
    commandId: F.id,
    selectionsCommandId: F.id,
    hidden$: O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465),
    params: () => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132;
      return {
        offset: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465, {
          consumeContentInsertRange: true,
          placement: "below",
          snapToParagraphEnd: true
        })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.offset
      };
    }
  };
}
function He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467) {
  return {
    id: AddDocColumnCommand.id,
    type: MenuItemType.BUTTON,
    icon: "InsertDoubleIcon",
    title: "docs-column-ui.menu.addColumn",
    tooltip: "docs-column-ui.menu.addColumn",
    hidden$: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467, {
      maxColumnCount: DOCS_COLUMN_MAX_COLUMN_COUNT - 1
    }),
    params: () => je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467)
  };
}
function Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469) {
  return {
    id: DeleteDocColumnCommand.id,
    type: MenuItemType.BUTTON,
    icon: "DeleteIcon",
    title: "docs-column-ui.menu.deleteColumn",
    tooltip: "docs-column-ui.menu.deleteColumn",
    hidden$: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, {
      minColumnCount: 3
    }),
    params: () => Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469)
  };
}
function We(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471) {
  return {
    id: DeleteDocColumnGroupCommand.id,
    type: MenuItemType.BUTTON,
    icon: "DeleteIcon",
    title: "docs-column-ui.menu.deleteColumnGroup",
    tooltip: "docs-column-ui.menu.deleteColumnGroup",
    hidden$: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471),
    params: () => Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471)
  };
}
function Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473) {
  return {
    id: ResizeDocColumnGroupCommand.id,
    type: MenuItemType.BUTTON,
    icon: "HorizontallyIcon",
    title: "docs-column-ui.menu.equalWidth",
    tooltip: "docs-column-ui.menu.equalWidth",
    hidden$: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473),
    params: () => Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473)
  };
}
const Ke = {
  [ContextMenuPosition.PARAGRAPH]: {
    [ContextMenuGroup.LAYOUT]: {
      [INSERT_BELLOW_MENU_ID]: {
        [F.id + ".below"]: {
          order: 3,
          menuItemFactory: R
        }
      }
    },
    [EMPTY_PARAGRAPH_MENU_ID]: {
      [ContextMenuGroup.LAYOUT]: {
        [F.id]: {
          order: 3,
          menuItemFactory: L
        }
      }
    },
    [DOC_CONTENT_INSERT_MENU_ID]: {
      [ContextMenuGroup.LAYOUT]: {
        [F.id + ".below"]: {
          order: 3,
          menuItemFactory: R
        }
      }
    },
    [DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
      insert: {
        [F.id]: {
          order: 1,
          menuItemFactory: L
        }
      }
    },
    [DOC_PARAGRAPH_T_EDIT_MENU_ID]: {
      quickBottom: {
        [AddDocColumnCommand.id]: {
          order: 6,
          menuItemFactory: He
        },
        [DeleteDocColumnCommand.id]: {
          order: 7,
          menuItemFactory: Ue
        },
        [DeleteDocColumnGroupCommand.id]: {
          order: 8,
          menuItemFactory: We
        },
        [ResizeDocColumnGroupCommand.id]: {
          order: 9,
          menuItemFactory: Ge
        }
      }
    },
    [DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
      insert: {
        [F.id + ".below"]: {
          order: 1,
          menuItemFactory: R
        }
      }
    },
    [DOC_TABLE_BLOCK_MENU_ID]: {
      [ContextMenuGroup.LAYOUT]: {
        [INSERT_BELLOW_MENU_ID]: {
          [F.id + ".below"]: {
            order: 3,
            menuItemFactory: R
          }
        }
      }
    }
  }
};
export { Ke as DocsColumnUIMenuSchema };
