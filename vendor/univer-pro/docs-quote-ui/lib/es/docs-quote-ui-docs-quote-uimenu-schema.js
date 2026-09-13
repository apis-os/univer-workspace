import { DOCS_QUOTE_LINE_COLOR_TOKEN, DOCS_QUOTE_LINE_WIDTH, DOCS_QUOTE_PLUGIN, DocsQuoteCancelEmptyParagraphCommand, DocsQuoteExitCommand, DocsQuoteInsertBelowCommand, DocsQuoteInsertCommand, DocsQuoteRemoveCommand, DocsQuoteUnwrapCommand, DocsQuoteUpdateStyleCommand, UniverDocsQuotePlugin, buildCancelEmptyQuoteParagraphActions, buildExitQuoteActions } from "@univerjs-pro/docs-quote";
import { DOC_CONTENT_INSERT_MENU_ID, DOC_PARAGRAPH_T_EDIT_MENU_ID, DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID, DOC_PARAGRAPH_T_INSERT_MENU_ID, DeleteCurrentParagraphCommand, DeleteLeftCommand, DeleteRightCommand, DocAutoFormatService, DocCanvasPopManagerService, EMPTY_PARAGRAPH_MENU_ID, EnterCommand, FLOAT_TEXT_STYLE_MENU_ID, FLOAT_TOOLBAR_MENU_POSITION, INSERT_BELLOW_MENU_ID, UniverDocsUIPlugin, disableMenuWhenHeaderFooterEditing, hideMenuWhenSelectionInBlockRange } from "@univerjs/docs-ui";
import { COLOR_PICKER_COMPONENT, ComponentManager, ContextMenuGroup, ContextMenuPosition, IMenuManagerService, IconManager, MenuItemType, MenuManagerPosition, RibbonInsertGroup, RibbonPosition, ToolbarButton, getMenuHiddenObservable, useDependency } from "@univerjs/ui";
import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, DocumentBlockRangeType, ICommandService, IConfigService, IPermissionService, Inject, Injector, LocaleService, Plugin, ThemeService, UniverInstanceType, merge } from "@univerjs/core";
import { combineLatest, map } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DocSkeletonManagerService, UniverDocsPlugin, canEditDocumentTargets, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId } from "@univerjs/docs";
import { Documents, IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { FontColorDoubleIcon, LeftBorderDoubleIcon, QuoteIcon, TextIcon } from "@univerjs/icons";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { documentSkeletonLineIterator } from "@univerjs-pro/docs-column";
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159) {
  return {
    id: DocsQuoteInsertCommand.id,
    type: MenuItemType.BUTTON,
    icon: "QuoteIcon",
    title: "docs-quote-ui.menu.quote",
    tooltip: "docs-quote-ui.menu.quote",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, UniverInstanceType.UNIVER_DOC),
    disabled$: disableMenuWhenHeaderFooterEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159)
  };
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161) {
  return {
    ...L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161),
    hidden$: combineLatest([getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, UniverInstanceType.UNIVER_DOC), hideMenuWhenSelectionInBlockRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161)]).pipe(map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649))
  };
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) {
  return {
    id: DocsQuoteInsertBelowCommand.id,
    type: MenuItemType.BUTTON,
    icon: "QuoteIcon",
    title: "docs-quote-ui.menu.quote",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, UniverInstanceType.UNIVER_DOC),
    disabled$: disableMenuWhenHeaderFooterEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163)
  };
}
const B = {
    [RibbonInsertGroup.MEDIA]: {
      [DocsQuoteInsertCommand.id]: {
        order: 6,
        menuItemFactory: L
      }
    }
  },
  Be = {
    [MenuManagerPosition.RIBBON]: {
      [RibbonPosition.INSERT]: B
    },
    [FLOAT_TOOLBAR_MENU_POSITION]: {
      [FLOAT_TEXT_STYLE_MENU_ID]: {
        [DocsQuoteInsertCommand.id]: {
          order: 10,
          menuItemFactory: R
        }
      }
    }
  },
  V = {
    ...B,
    [FLOAT_TEXT_STYLE_MENU_ID]: {
      [DocsQuoteInsertCommand.id]: {
        order: 10,
        menuItemFactory: R
      }
    },
    [ContextMenuPosition.PARAGRAPH]: {
      [ContextMenuGroup.LAYOUT]: {
        [INSERT_BELLOW_MENU_ID]: {
          [DocsQuoteInsertBelowCommand.id]: {
            order: 6,
            menuItemFactory: z
          }
        }
      },
      [DOC_CONTENT_INSERT_MENU_ID]: {
        [ContextMenuGroup.LAYOUT]: {
          [DocsQuoteInsertBelowCommand.id]: {
            order: 6,
            menuItemFactory: z
          }
        }
      },
      [EMPTY_PARAGRAPH_MENU_ID]: {
        [ContextMenuGroup.LAYOUT]: {
          [DocsQuoteInsertCommand.id]: {
            order: 6,
            menuItemFactory: L
          }
        }
      },
      [DOC_PARAGRAPH_T_INSERT_MENU_ID]: {
        quickBottom: {
          [DocsQuoteInsertCommand.id]: {
            order: 3,
            menuItemFactory: L
          }
        }
      },
      [DOC_PARAGRAPH_T_EDIT_MENU_ID]: {
        quickBottom: {
          [DocsQuoteInsertCommand.id]: {
            order: 4,
            menuItemFactory: L
          }
        }
      },
      [DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: {
        quickBottom: {
          [DocsQuoteInsertBelowCommand.id]: {
            order: 3,
            menuItemFactory: z
          }
        }
      }
    }
  };
export { V as DocsQuoteUIMenuSchema };
export { Be };
