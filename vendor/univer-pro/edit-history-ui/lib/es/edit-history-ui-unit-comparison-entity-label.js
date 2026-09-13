import { HistorySessionService, HistorySessionStatus, UnitComparisonEntityType, UniverEditHistoryPlugin, getVersionComparison } from "@univerjs-pro/edit-history";
import { BooleanNumber, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IConfirmService, ILogService, Inject, Injector, LOCALE_META, LocaleService, Plugin, ThemeService, UniverInstanceType, VerticalAlign, WrapStrategy, dateKit, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BuiltInUIPart, ComponentManager, IMessageService, ISidebarService, IUIPartsService, UniverUIPlugin, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { Button, MessageType, borderBottomClassName, clsx } from "@univerjs/design";
import { BehaviorSubject } from "rxjs";
import { AiAssistantMultiIcon, ArrowLeftIcon, LoadingMultiIcon, MoreDownIcon, MoreRightIcon } from "@univerjs/icons";
import { Fragment, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { IRenderManagerService, Rect } from "@univerjs/engine-render";
import { I } from "./internal-glue.js";
const we = {
  [UnitComparisonEntityType.UNIT]: "unit",
  [UnitComparisonEntityType.WORKBOOK]: "workbook",
  [UnitComparisonEntityType.WORKSHEET]: "worksheet",
  [UnitComparisonEntityType.CELL]: "cell",
  [UnitComparisonEntityType.ROW_COLUMN]: "rowColumn",
  [UnitComparisonEntityType.MOVE]: "move",
  [UnitComparisonEntityType.CONDITION_FORMAT]: "conditionFormat",
  [UnitComparisonEntityType.DATA_VALIDATION]: "dataValidation",
  [UnitComparisonEntityType.SPARKLINE]: "sparkline",
  [UnitComparisonEntityType.TABLE]: "table",
  [UnitComparisonEntityType.SHAPE]: "shape",
  [UnitComparisonEntityType.CHART]: "chart",
  [UnitComparisonEntityType.PIVOT]: "pivot",
  [UnitComparisonEntityType.PARAGRAPH]: "paragraph",
  [UnitComparisonEntityType.TEXT_STYLE]: "styles",
  [UnitComparisonEntityType.SECTION]: "section",
  [UnitComparisonEntityType.BLOCK_RANGE]: "range",
  [UnitComparisonEntityType.CUSTOM_RANGE]: "range",
  [UnitComparisonEntityType.TABLE_RANGE]: "range",
  [UnitComparisonEntityType.CUSTOM_BLOCK]: "block",
  [UnitComparisonEntityType.COLUMN_GROUP]: "columnGroup",
  [UnitComparisonEntityType.DRAWING]: "drawing",
  [UnitComparisonEntityType.HEADER]: "header",
  [UnitComparisonEntityType.FOOTER]: "footer",
  [UnitComparisonEntityType.DOCUMENT_STYLE]: "styles",
  [UnitComparisonEntityType.DOCUMENT_SETTING]: "settings",
  [UnitComparisonEntityType.CUSTOM_DECORATION]: "decoration",
  [UnitComparisonEntityType.DOC_HYPERLINK]: "link",
  [UnitComparisonEntityType.DOC_CALLOUT]: "callout",
  [UnitComparisonEntityType.DOC_QUOTE]: "quote",
  [UnitComparisonEntityType.DOC_CHART]: "chart",
  [UnitComparisonEntityType.DOC_CHART_DATA]: "chartData",
  [UnitComparisonEntityType.DOC_CODE]: "code",
  [UnitComparisonEntityType.DOC_LATEX]: "formula",
  [UnitComparisonEntityType.DOC_SHAPE_RESOURCE]: "shape",
  [UnitComparisonEntityType.DOC_TABLE_RESOURCE]: "table",
  [UnitComparisonEntityType.SLIDE]: "slide",
  [UnitComparisonEntityType.SLIDE_ELEMENT]: "slideElement",
  [UnitComparisonEntityType.SLIDE_TRANSITION]: "transition",
  [UnitComparisonEntityType.SLIDE_TRANSITION_REFERENCE]: "transitionReference",
  [UnitComparisonEntityType.SLIDE_MASTER]: "slideMaster",
  [UnitComparisonEntityType.SLIDE_LAYOUT]: "slideLayout",
  [UnitComparisonEntityType.SLIDE_THEME]: "theme",
  [UnitComparisonEntityType.SLIDE_CHART]: "chart",
  [UnitComparisonEntityType.SLIDE_CHART_DATA]: "chartData",
  [UnitComparisonEntityType.SLIDE_TABLE]: "table",
  [UnitComparisonEntityType.BASE]: "base",
  [UnitComparisonEntityType.FIELD]: "field",
  [UnitComparisonEntityType.RECORD]: "record",
  [UnitComparisonEntityType.VIEW]: "view",
  [UnitComparisonEntityType.BOARD_PAGE]: "boardPage",
  [UnitComparisonEntityType.BOARD_ELEMENT]: "boardElement",
  [UnitComparisonEntityType.BOARD_THEME]: "theme",
  [UnitComparisonEntityType.BOARD_CHART]: "chart",
  [UnitComparisonEntityType.BOARD_CHART_DATA]: "chartData",
  [UnitComparisonEntityType.BOARD_TABLE]: "table"
};
function Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.split(":")[0];
  return I(we[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288] ?? "content");
}
export { Te as getUnitComparisonEntityLabel };
