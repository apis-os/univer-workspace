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
const U = "docs-formula-ui.config",
  W = {};
export { U as DOCS_FORMULA_UI_PLUGIN_CONFIG_KEY };
export { W };
