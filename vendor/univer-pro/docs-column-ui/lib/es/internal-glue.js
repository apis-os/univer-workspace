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
import { K, V, q, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741 } from "./docs-column-ui-docs-column-uiplugin.js";
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400) {
  try {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.get(IRenderManagerService).getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.with(DocParagraphMenuService);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.activeTarget) ?? null;
  } catch {
    return null;
  }
}
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.get(IUniverInstanceService).getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.getUnitId(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.getSnapshot(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 = normalizeDocsColumnInsertOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.offset, {
    snapToParagraphEnd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404.snapToParagraphEnd
  });
  return canResolveDocsColumnInsertOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409) ? {
    offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409,
    rawOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.offset,
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.source
  } : null;
}
function Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.explicitOffset == "number") return {
    offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.explicitOffset,
    source: "explicit"
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.consumeContentInsertRange) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121 = consumeContentInsertRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121) return {
      offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.startOffset,
      source: "contentInsertRange"
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 = ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.placement ?? "target");
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 == "number") return {
    offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420,
    source: "paragraphTarget"
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.get(DocSelectionManagerService).getActiveTextRange();
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.collapsed === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.startOffset !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.endOffset ? null : {
    offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.startOffset,
    source: "selection"
  };
}
function ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432) return null;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429 === "below") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.moveRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.endOffset) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.menuRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.endOffset) ?? null;
  }
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.menuRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.startOffset) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.moveRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.startOffset) ?? null;
}
const F = {
    id: "doc.command.menu-insert-column-group",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, {
        explicitOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.offset,
        consumeContentInsertRange: true,
        snapToParagraphEnd: true
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.get(ICommandService).syncExecuteCommand(InsertDocColumnGroupCommand.id, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444,
        offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.offset
      }) : false;
    }
  },
  I = "docs-column-ui.insert-column-picker",
  Be = Array.from({
    length: 5
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 + 1);
ContextMenuPosition.PARAGRAPH;
var qe = "@univerjs-pro/docs-column-ui",
  Je = "1.0.0-insiders.20260907-70fc579";
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475);
  };
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484;
}
V = B([z(0, Inject(ComponentManager))], V);
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493) {
  return Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493.height, 72);
}
q = B([z(1, Inject(DocSkeletonManagerService)), z(2, ICommandService), z(3, IUniverInstanceService), z(4, Inject(DocSelectionManagerService)), z(5, Inject(DocParagraphMenuService)), z(6, IPermissionService)], q);
K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741, "pluginName", "DOCS_COLUMN_UI_PLUGIN"), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741, "packageName", qe), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741, "version", Je), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741, "type", UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741 = B([DependentOn(UniverLicensePlugin, UniverDocsPlugin, UniverRenderEnginePlugin, UniverDocsColumnPlugin, UniverDocsUIPlugin), z(1, Inject(Injector)), z(2, IConfigService), z(3, ICommandService), z(4, IMenuManagerService), z(5, IRenderManagerService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741);
export { N, F, P, I, Be, H };
