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
function Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502 = calculateResizeDragWidthRatios({
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.columnGroupSource,
    availableWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.width,
    separatorIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500,
    delta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501
  });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502 ? {
    columnGroupId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.columnGroupId,
    widthRatios: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502
  } : null;
}
export { Ze as getColumnResizeDragCommandParams };
