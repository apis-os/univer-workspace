import { DOCS_CODE_PLUGIN, DocsCodeCancelEmptyParagraphCommand, DocsCodeConsumeBoundaryDeleteCommand, DocsCodeInsertBelowCommand, DocsCodeInsertCommand, DocsCodeModel, DocsCodeRemoveCommand, DocsCodeUpdateCommand, RemoveDocsCodeConfigMutation, SetDocsCodeConfigMutation, UniverDocsCodePlugin, buildCancelEmptyCodeParagraphActions, isCodeBoundaryDelete, normalizeDocsCodeConfig, normalizeDocsCodeMetadataResource } from "@univerjs-pro/docs-code";
import { CommandType, CustomCommandExecutionError, DataStreamTreeTokenType, DependentOn, Disposable, DocumentBlockRangeType, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, merge } from "@univerjs/core";
import { AlignCenterCommand, AlignJustifyCommand, AlignLeftCommand, AlignOperationCommand, AlignRightCommand, BulletListCommand, CheckListCommand, DOC_CONTENT_INSERT_MENU_ID, DOC_PARAGRAPH_T_EDIT_MENU_ID, DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID, DOC_PARAGRAPH_T_INSERT_MENU_ID, DeleteCurrentParagraphCommand, DeleteLeftCommand, DeleteRightCommand, DocAutoFormatService, DocCanvasPopManagerService, DocParagraphMenuService, EMPTY_PARAGRAPH_MENU_ID, FLOAT_TEXT_STYLE_MENU_ID, FLOAT_TOOLBAR_MENU_POSITION, IDocClipboardPasteAdapterService, IDocClipboardService, INSERT_BELLOW_MENU_ID, OrderListCommand, SetInlineFormatBoldCommand, SetInlineFormatCommand, SetInlineFormatFontFamilyCommand, SetInlineFormatFontSizeCommand, SetInlineFormatItalicCommand, SetInlineFormatStrikethroughCommand, SetInlineFormatSubscriptCommand, SetInlineFormatSuperscriptCommand, SetInlineFormatTextBackgroundColorCommand, SetInlineFormatTextColorCommand, SetInlineFormatUnderlineCommand, SetParagraphNamedStyleCommand, UniverDocsUIPlugin, disableMenuWhenHeaderFooterEditing, getDocBlockRangeMenuId, hideMenuWhenSelectionInBlockRange } from "@univerjs/docs-ui";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, IMenuManagerService, IconManager, MenuItemType, MenuManagerPosition, RibbonInsertGroup, RibbonPosition, getMenuHiddenObservable, useDependency } from "@univerjs/ui";
import { CURSOR_TYPE, IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { Observable, combineLatest, map } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DocSelectionManagerService, DocSkeletonManagerService, UniverDocsPlugin, canEditDocumentTargets, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId } from "@univerjs/docs";
import { CheckMarkIcon, CodeBlockIcon } from "@univerjs/icons";
import { Button, clsx } from "@univerjs/design";
import { jsx, jsxs } from "react/jsx-runtime";
import { documentSkeletonLineIterator } from "@univerjs-pro/docs-column";
import var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 from "prismjs";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-c.js";
import "prismjs/components/prism-cpp.js";
import "prismjs/components/prism-csharp.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-go.js";
import "prismjs/components/prism-java.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-kotlin.js";
import "prismjs/components/prism-markdown.js";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-php.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-ruby.js";
import "prismjs/components/prism-rust.js";
import "prismjs/components/prism-sql.js";
import "prismjs/components/prism-swift.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-yaml.js";
import { N } from "./internal-glue.js";
import { Ct, L } from "./docs-code-ui-docs-code-uimenu-schema.js";
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 = N.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.label) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316;
}
const R = {};
let V = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) {
    super(), this._clipboardService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, this._pasteAdapterService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, this._model = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, this.disposeWithMe(this._clipboardService["addClipboardHook"]({
      onCopyDocData: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643) => this._appendConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.sourceDocuments)
    })), this.disposeWithMe(this._pasteAdapterService["registerAdapter"]({
      getPasteMutationInfos: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => this._getPasteMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644)
    }));
  }
  _appendConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {};
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.blockRanges) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.blockType !== DocumentBlockRangeType.CODE) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = this._model["getCodeConfig"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.blockId);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.blockId] = normalizeDocsCodeConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612));
      });
    }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB).length === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167,
      resources: [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.resources ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.name !== DOCS_CODE_PLUGIN), {
        name: DOCS_CODE_PLUGIN,
        data: JSON.stringify({
          codes: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB
        })
      }]
    };
  }
  _getPasteMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.doc["resources"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.name === DOCS_CODE_PLUGIN),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 ? Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.data).codes : {},
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = [];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.blockRangeMappings["forEach"](({
      sourceBlockRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
      targetBlockRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652
    }) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.blockType !== DocumentBlockRangeType.CODE) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.blockId];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
        id: SetDocsCodeConfigMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.unitId,
          blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.blockId,
          config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.push({
        id: RemoveDocsCodeConfigMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.unitId,
          blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.blockId
        }
      }));
    }), {
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4,
      undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5
    };
  }
};
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357) {
  try {
    return normalizeDocsCodeMetadataResource(JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357));
  } catch {
    return {
      codes: {}
    };
  }
}
const H = "docs-code-ui.language-picker";
function Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.popup) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.extraProps) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.activeLanguage,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.popup) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.extraProps) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.onSelect;
  return jsxs("section", {
    "data-u-comp": H,
    className: "univer-max-h-[320px]\x20univer-w-[188px]\x20univer-overflow-hidden\x20univer-overflow-y-auto\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow-lg\x20dark:!univer-border-gray-600\x20dark:!univer-bg-gray-900",
    children: [jsx("div", {
      className: "univer-px-2 univer-pb-1 univer-pt-0.5 univer-text-xs univer-leading-5 univer-text-gray-500 dark:!univer-text-gray-400",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.t("docs-code-ui.language.title")
    }), N.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 => {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363;
      return jsxs(Button, {
        size: "small",
        variant: "ghost",
        type: "button",
        className: clsx("univer-w-full univer-justify-between", {
          "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A
        }),
        onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.value),
        children: [jsx("span", {
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.label
        }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A && jsx(CheckMarkIcon, {
          className: "univer-text-sm"
        })]
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.value);
    })]
  });
}
let U = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, this._iconManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, this._registerComponents(), this._registerIcons();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      CodeBlockIcon: CodeBlockIcon
    }));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](H, Dt));
  }
};
const Ot = {
    boolean: "blue.700",
    builtin: "purple.700",
    className: "orange.700",
    comment: "gray.500",
    constant: "blue.700",
    function: "purple.600",
    keyword: "red.600",
    number: "blue.700",
    operator: "blue.700",
    property: "green.700",
    punctuation: "gray.900",
    regex: "green.700",
    selector: "green.700",
    string: "blue.800",
    tag: "green.700"
  },
  W = "gray.900";
function kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 === "plaintext") return [];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.languages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.languages["javascript"];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371) return [];
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28 = [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = 0;
  return G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.tokenize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.push({
      color: Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184),
      end: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10,
      start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185
    });
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28;
}
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.start <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.end)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.color) ?? W;
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 = "") {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 => {
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 == "string") {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.type),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.content;
    typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191) : G(Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191);
  });
}
function jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.replace(/-([a-z])/g, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.toUpperCase());
}
function Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391) {
  return Ot[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391] ?? W;
}
function Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 => {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.pageIndex >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.ed >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.st <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.endIndex);
    Array.from(new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.pageIndex))).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.pageIndex === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659);
      Array.from(new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.layoutFragment))).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.layoutFragment === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(K)),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(Lt)),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(Pt)) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396,
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(Ft)) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = It(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A);
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30.push({
          blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.blockId,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618,
          height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 * 2,
          left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
          pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659,
          top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395,
          width: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2
        });
      });
    });
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30;
}
function Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.visualLeft ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.left;
}
function Ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.visualLeft ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.left) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.visualWidth ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.width);
}
function It(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200.clipLeft).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 != null),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.clipRight).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 != null);
  if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32.length || !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.length) return {};
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 ? {
    clipLeft: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12,
    clipRight: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13
  } : {};
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.top + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.marginTop ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407.paddingTop ?? 0);
}
function Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.contentHeight == null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.height - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.marginBottom ?? 0) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.paddingBottom ?? 0) : K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.contentHeight;
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411) {
  "@babel/helpers - typeof";

  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206;
  }, q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411);
}
function Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) {
  if (q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 || "default");
    if (q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413);
}
function zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 = Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, "string");
  return q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 + "";
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 = zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425;
}
const Y = -10990,
  Bt = "gray.700";
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214) {
    super(), this._context = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, this._docSkeletonManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209, this._docSelectionManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210, this._docsCodeModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, this._docCanvasPopManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214, J(this, "_languageHitRects", []), J(this, "_blockHitRects", []), J(this, "_languagePopoverDisposable", null), J(this, "_activeLanguageBlockId", null), J(this, "_hoveredCodeBlockId", null), J(this, "_cursorBeforeLanguageHover", null), this._initRender(), this._initPointer(), this.disposeWithMe(this._docsCodeModel["change$"].subscribe(({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661
    }) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 === this._context["unitId"] && this._makeDirty();
    })), this.disposeWithMe(this._docSelectionManagerService["textSelection$"].subscribe(({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663
    }) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 === this._context["unitId"] && this._makeDirty();
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      this._closeLanguagePopover(), this._setHoveredCodeBlock(null), this._restorePointerCursor(), this._makeDirty();
    }));
  }
  _initRender() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 = this._context["mainComponent"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223.pageRender$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => this._drawPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 && this.disposeWithMe({
      dispose: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.unsubscribe) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224)) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.dispose) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224));
      }
    });
  }
  _initPointer() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = this._context["mainComponent"] ?? this._context["scene"];
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.onPointerMove$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670]) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.offsetY, this._context["scene"]),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 = this._hitLanguageButton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.y);
        this._setHoveredCodeBlock((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.blockId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = this._hitCodeBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.y)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.blockId) ?? null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 && this._canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.blockId) ? this._setPointerCursor() : this._restorePointerCursor();
      },
      priority: Y
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.onPointerLeave$["subscribeEvent"](() => {
      this._setHoveredCodeBlock(null), this._restorePointerCursor();
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.onPointerDown$["subscribeEvent"]({
      next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679]) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.button === 2) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.offsetX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.offsetY, this._context["scene"]),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = this._hitLanguageButton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.y);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684) {
          this._closeLanguagePopover();
          return;
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.skipNextObservers = true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678), this._openLanguagePopover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684);
      },
      priority: Y
    }));
  }
  _drawPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 = this._context["unit"].getBody(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.blockType === DocumentBlockRangeType.CODE)) ?? [];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 || !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.length) {
      this._languageHitRects = [], this._blockHitRects = [];
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = this._docSkeletonManagerService["getSkeleton"]().getSkeletonData(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.pages) ?? [],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.page);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 < 0) return;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 === 0 && (this._languageHitRects = [], this._blockHitRects = []);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = this._collectLines(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = Z(this._context["mainComponent"]),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = Nt(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234, 8, 0).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.pageIndex === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 => Gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.ctx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694, () => {
      Wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.ctx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.height, 6);
    })), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = Kt({
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.blockId,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsTop,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsLeft,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsLeft,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsTop
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsLeft);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 && this._blockHitRects["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696);
    });
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591 = new Map();
    this._collectGlyphRuns(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A11, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.pageIndex === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.blockRange["blockId"];
      if (!var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102)) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 = normalizeDocsCodeConfig(this._docsCodeModel["getCodeConfig"](this._context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.blockRange["blockId"])),
          {
            codeText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
            streamOffsetToCodeOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623
          } = Ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.dataStream, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.blockRange);
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.language)), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.streamOffset);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 != null && Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.ctx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100, At(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102) ?? [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103));
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 => {
      if (!this._shouldDrawLanguageButton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.blockId)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = normalizeDocsCodeConfig(this._docsCodeModel["getCodeConfig"](this._context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.blockId)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = Gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.ctx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, () => qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.ctx, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.language)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = Kt({
          blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.blockId,
          bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.bottom + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsTop,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsLeft,
          right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.right + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsLeft,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsTop
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.docsLeft);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 && this._languageHitRects["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111);
    });
  }
  _collectLines(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = this._getCodeParagraphOwners(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = Z(this._context["mainComponent"]);
    return documentSkeletonLineIterator(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242, {
      docsLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.docsLeft,
      pageMarginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.pageMarginTop,
      tableCellInsetX: 6,
      unitId: this._context["unitId"]
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.line["paragraphIndex"]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.push(Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117));
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16;
  }
  _collectGlyphRuns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = this._getCodeParagraphOwners(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = Z(this._context["mainComponent"]);
    return documentSkeletonLineIterator(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, {
      docsLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.docsLeft,
      pageMarginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.pageMarginTop,
      tableCellInsetX: 6,
      unitId: this._context["unitId"]
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.line["paragraphIndex"]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.line["divides"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.st;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.glyphGroup["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462;
          if (Ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461)) {
            let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.pageLeft + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.column["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.paddingLeft + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.xOffset;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.clipLeft != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.clipRight != null && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.clipLeft || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.clipRight)) {
              var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 += Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.count, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.content) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.length) ?? 1);
              return;
            }
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push({
              blockRange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121,
              divide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624,
              glyph: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461,
              line: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.line,
              pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.pageIndex,
              streamOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625,
              x: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
              y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.sectionTop + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.line["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.line["marginTop"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.line["paddingTop"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.line["asc"]
            });
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 += Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.count, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.content) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.length) ?? 1);
        });
      });
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18;
  }
  _getCodeParagraphOwners(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259;
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594 = new Map(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 = this._context["unit"].getBody()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.paragraphs) ?? [];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 => {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.startIndex > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.startIndex < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.endIndex && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.startIndex, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124);
      });
    }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594;
  }
  _makeDirty() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = this._context["mainComponent"]) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.makeDirty(true), this._context["scene"].makeDirty();
  }
  _hitLanguageButton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265) {
    return this._languageHitRects["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.right && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.bottom) ?? null;
  }
  _hitCodeBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269) {
    return this._blockHitRects["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.right && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.bottom) ?? null;
  }
  _setHoveredCodeBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272) {
    this._hoveredCodeBlockId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 && (this._hoveredCodeBlockId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, this._makeDirty());
  }
  _shouldDrawLanguageButton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274) {
    return this._canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274) && (this._activeLanguageBlockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 || this._hoveredCodeBlockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 || this._getFocusedCodeBlockId() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274);
  }
  _getFocusedCodeBlockId() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22 = this._docSelectionManagerService["getTextRanges"]({
      unitId: this._context["unitId"],
      subUnitId: this._context["unitId"]
    }) ?? [];
    if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.length) return null;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = this._context["unit"].getBody()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.blockRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.blockType === DocumentBlockRangeType.CODE)) ?? [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.isActive) ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22[0];
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.startOffset) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.endOffset) == null ? null : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.startOffset >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278.endOffset <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.endIndex)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.blockId) ?? null;
  }
  _openLanguagePopover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282) {
    if (this._closeLanguagePopover(), !this._canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.blockId)) return;
    this._activeLanguageBlockId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.blockId;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = normalizeDocsCodeConfig(this._docsCodeModel["getCodeConfig"](this._context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.blockId));
    this._languagePopoverDisposable = this._docCanvasPopManagerService["attachPopupToRect"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282, {
      componentKey: H,
      direction: "bottom-right",
      extraProps: {
        activeLanguage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283.language,
        onSelect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = this._activeLanguageBlockId;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 && (this._commandService["executeCommand"](DocsCodeUpdateCommand.id, {
            blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132,
            config: {
              language: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131
            }
          }), this._closeLanguagePopover());
        }
      },
      onClickOutside: () => this._closeLanguagePopover(),
      onContextMenu: () => this._closeLanguagePopover(),
      zIndex: 102
    }, this._context["unitId"]);
  }
  _closeLanguagePopover() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = this._languagePopoverDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.dispose(), this._languagePopoverDisposable = null, this._activeLanguageBlockId = null;
  }
  _canEditBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288) {
    return canEditDocumentTargets(this._permissionService, this._context["unitId"], [...getDocumentEntityParentPermissionObjectIds(this._context["unit"], "", "custom-block", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288), getDocumentEntityPermissionObjectId("", "custom-block", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288)]);
  }
  _setPointerCursor() {
    this._cursorBeforeLanguageHover ??= this._context["scene"].getCursor(), this._context["scene"].setCursor(CURSOR_TYPE.POINTER);
  }
  _restorePointerCursor() {
    this._cursorBeforeLanguageHover != null && (this._context["scene"].setCursor(this._cursorBeforeLanguageHover), this._cursorBeforeLanguageHover = null);
  }
};
function Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432) {
  let {
    column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433,
    line: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434,
    pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435,
    pageLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436,
    sectionTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431;
  return {
    layoutFragment: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433,
    contentHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.contentHeight,
    ed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.ed,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.lineHeight,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.left,
    clipLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.clipLeft,
    clipRight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.clipRight,
    visualLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.visualLeft,
    visualWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.visualWidth,
    marginBottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.marginBottom,
    marginTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.marginTop,
    paddingBottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.paddingBottom,
    paddingTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.paddingTop,
    pageIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435,
    st: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.st,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.top,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.width
  };
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445.getOffsetConfig) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445);
  return {
    docsLeft: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.docsLeft) ?? 0,
    docsTop: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.docsTop) ?? 0,
    pageMarginTop: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.pageMarginTop) ?? 0
  };
}
function Ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.content && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.streamType !== DataStreamTreeTokenType.PARAGRAPH && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.streamType !== DataStreamTreeTokenType.BLOCK_START && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.streamType !== DataStreamTreeTokenType.BLOCK_END;
}
function Ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596 = new Map(),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = "";
  for (let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.startIndex + 1; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.endIndex; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3++) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 !== DataStreamTreeTokenType.BLOCK_START && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 !== DataStreamTreeTokenType.BLOCK_END && (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.set(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4.length), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 === DataStreamTreeTokenType.PARAGRAPH ? "\x0a" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135);
  }
  return {
    codeText: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4,
    streamOffsetToCodeOffset: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596
  };
}
function Wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 / 2);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.fillStyle = "gray.100", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.strokeStyle = "gray.200", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.lineWidth = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.restore();
}
function Gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.clipLeft == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.clipRight == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.clipRight <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.clipLeft) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.rectByPrecision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.clipLeft, -100000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.clipRight - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.clipLeft, 200000), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.clip();
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.restore(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472;
}
function Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.clipLeft == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.clipRight == null) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.clipLeft + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.right, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.clipRight + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477,
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18,
    right: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19
  } : null;
}
function qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488 = gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.font = "12px sans-serif";
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.measureText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488).width,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = Math.min(118, Math.max(70, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489 + 14 + 5 + 6)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 - 6,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485 - 22 - 5;
  return Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, 22, 5), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.fillStyle = Bt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.textBaseline = "middle", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 + 7, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 + 22 / 2), Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 - 7 - 6, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 + 22 / 2 - 2, 6), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.restore(), {
    bottom: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 + 22,
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23,
    right: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24
  };
}
function Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 / 2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.strokeStyle = Bt, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.lineWidth = 1.4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.lineCap = "round", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.lineJoin = "round", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.restore();
}
function Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 / 2);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.beginPath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.moveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.lineTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.quadraticCurveTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.closePath(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.fillStyle = "gray.50", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.fill(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.strokeStyle = "gray.200", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.lineWidth = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.stroke(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.restore();
}
function Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519) {
  let {
    glyph: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520,
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.font = Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.textBaseline = "alphabetic", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.fillStyle = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.content, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.restore();
}
function Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.fontStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530.fontString) ?? (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.ts) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.fs) ?? 12) + "pt monospace";
}
function Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537) {
  let {
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537.getAncestorScale(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537.getViewport("viewMain");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540 ? {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540.viewportScrollX,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540.viewportScrollY
  } : {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536
  };
}
const var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set([AlignCenterCommand.id, AlignJustifyCommand.id, AlignLeftCommand.id, AlignOperationCommand.id, AlignRightCommand.id, BulletListCommand.id, CheckListCommand.id, OrderListCommand.id, SetInlineFormatBoldCommand.id, SetInlineFormatCommand.id, SetInlineFormatFontFamilyCommand.id, SetInlineFormatFontSizeCommand.id, SetInlineFormatItalicCommand.id, SetInlineFormatStrikethroughCommand.id, SetInlineFormatSubscriptCommand.id, SetInlineFormatSuperscriptCommand.id, SetInlineFormatTextBackgroundColorCommand.id, SetInlineFormatTextColorCommand.id, SetInlineFormatUnderlineCommand.id, SetParagraphNamedStyleCommand.id]),
  en = {
    id: DeleteCurrentParagraphCommand.id,
    name: "docs-code.command.delete-current-paragraph",
    type: CommandType.COMMAND,
    multi: true,
    priority: 100,
    handler: async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549;
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.blockRange) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549.blockType) === DocumentBlockRangeType.CODE ? (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.get(ICommandService).executeCommand(DocsCodeRemoveCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.unitId,
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548.blockRange["blockId"]
      }), true) : false;
    }
  };
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294) {
    super(), this._docAutoFormatService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290, this._docSelectionManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294, this._menuManagerService["mergeMenu"](L), this._menuManagerService["appendRootMenu"](Ct), this._initBoundaryDeleteGuard(), this._initCancelEmptyCodeParagraphAutoFormat(), this._initStyleCommandGuard(), this.disposeWithMe(this._commandService["registerMultipleCommand"](en));
  }
  _initBoundaryDeleteGuard() {
    [{
      id: DeleteLeftCommand.id,
      direction: "left"
    }, {
      id: DeleteRightCommand.id,
      direction: "right"
    }].forEach(({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136,
      direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137
    }) => {
      this.disposeWithMe(this._docAutoFormatService["registerAutoFormat"]({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136,
        match: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.selection["collapsed"] ? isCodeBoundaryDelete({
          cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.selection["startOffset"],
          direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137,
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.unit["getSnapshot"]()
        }) : false,
        getMutations: () => [{
          id: DocsCodeConsumeBoundaryDeleteCommand.id
        }],
        priority: 50
      }));
    });
  }
  _initCancelEmptyCodeParagraphAutoFormat() {
    [DeleteLeftCommand.id, DeleteRightCommand.id].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 => {
      this.disposeWithMe(this._docAutoFormatService["registerAutoFormat"]({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140,
        match: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.selection["collapsed"] ? buildCancelEmptyCodeParagraphActions({
          cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.selection["startOffset"],
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.unit["getSnapshot"]()
        }) != null : false,
        getMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => [{
          id: DocsCodeCancelEmptyParagraphCommand.id,
          params: {
            cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.selection["startOffset"]
          }
        }],
        priority: 100
      }));
    });
  }
  _initStyleCommandGuard() {
    this.disposeWithMe(this._commandService["beforeCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142 => {
      if (!(!var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.id) || !this._isSelectionInCodeBlock())) throw new CustomCommandExecutionError("Style commands are disabled inside docs code blocks.");
    }));
  }
  _isSelectionInCodeBlock() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 = this._univerInstanceService["getCurrentUnitOfType"](UniverInstanceType.UNIVER_DOC),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.getBody(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = this._docSelectionManagerService["getTextRanges"]() ?? [];
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.length === 0 ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301.blockRanges ?? []).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.blockType === DocumentBlockRangeType.CODE && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 => Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.startIndex) <= Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.endOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.endIndex)));
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 = R, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307;
    let {
      menu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309
    } = merge({}, R, this._config);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 && this._configService["setConfig"]("menu", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308, {
      merge: true
    }), this._configService["setConfig"]("docs-code-ui.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309);
  }
  onStarting() {
    this._injector["add"]([U]), this._injector["add"]([V]), this._injector["get"](U), this._injector["get"](V), this._injector["add"]([Q]), this._injector["get"](Q);
  }
  onRendered() {
    this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_DOC, [X]));
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 as UniverDocsCodeUIPlugin };
export { V, U, X, Q, J };
