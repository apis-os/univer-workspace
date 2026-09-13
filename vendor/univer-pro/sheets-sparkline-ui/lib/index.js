import { AddSheetSparklineCommand as var_core_value_sig1263, AddSheetSparklineMutation as var_core_value_sig457C, PLUGIN_NAME as var_core_value_sigA4E6, RemoveSheetSparklineCommand as var_core_value_sig934F, RemoveSheetSparklineMutation as var_core_value_sig74A7, SetSheetSparklineCommand as var_core_value_sig3685, SpacialShowAsEnum as var_core_value_sigC621, SparklineDataSourceModel as var_core_value_sig86D7, SparklineExtremumTypeEnum as var_core_value_sig431B, SparklinePointsNames as var_core_value_sig5C7C, SparklineThemeMapping as var_core_value_sig87E2, SparklineThemeTypeEnum as var_core_value_sig2E04, SparklineTypeEnum as var_core_value_sig2EDD, UniverSheetSparklinePlugin as var_core_value_sig27D2 } from "@univerjs-pro/sheets-sparkline";
import { ComponentManager as var_core_value_sig355D, ContextMenuGroup as var_core_value_sig8B21, ContextMenuPosition as var_core_value_sigEB36, IDialogService as var_core_value_sig5C27, IMenuManagerService as var_core_value_sigD494, ISidebarService as var_core_value_sigBF6D, IconManager as var_core_value_sigD051, MenuItemType as var_core_value_sig16D9, RibbonInsertGroup as var_core_value_sigF378, getMenuHiddenObservable as var_core_value_sig5F6C, useDependency as var_core_value_sig7E85, useObservable as var_core_value_sigF204 } from "@univerjs/ui";
import { ColorKit as var_core_value_sig7A15, CommandType as var_core_value_sigEEA6, DependentOn as var_core_value_sigEAE1, Direction as var_core_value_sigC69F, Disposable as var_core_value_sig0442, ICommandService as var_core_value_sig697A, IConfigService as var_core_value_sigDB65, IUniverInstanceService as var_core_value_sig045E, Inject as var_core_value_sig4524, Injector as var_core_value_sig64D5, LocaleService as var_core_value_sig9678, ObjectMatrix as var_core_value_sig5E74, Plugin as var_core_value_sig75FC, Range as var_core_value_sig639A, Rectangle as var_core_value_sig567C, Tools as var_core_value_sig825F, UniverInstanceType as var_core_value_sig546D, cellToRange as var_core_value_sig8078, generateRandomId as var_core_value_sigDCED, isValidRange as var_core_value_sig2829, merge as var_core_value_sig6EE2, touchDependencies as var_core_value_sig4CCC } from "@univerjs/core";
import { AUTO_FILL_APPLY_TYPE as var_core_value_sig6E47, IAutoFillService as var_core_value_sigB64D, RangeProtectionCache as var_core_value_sig2407, RangeProtectionPermissionEditPoint as var_core_value_sigE4D0, SetWorksheetActiveOperation as var_core_value_sigD5F1, SheetPermissionCheckController as var_core_value_sigBC19, SheetsSelectionsService as var_core_value_sig4F3C, UniverSheetsPlugin as var_core_value_sig8D44, WorkbookEditablePermission as var_core_value_sig1660, WorksheetEditPermission as var_core_value_sigEE7B, discreteRangeToRange as var_core_value_sig44DF, getSheetCommandTarget as var_core_value_sig7E48 } from "@univerjs/sheets";
import { UnitAction as var_core_value_sig7B9E } from "@univerjs/protocol";
import { COPY_TYPE as var_core_value_sig5C3B, IMarkSelectionService as var_core_value_sig4002, ISheetClipboardService as var_core_value_sig4153, PREDEFINED_HOOK_NAME as var_core_value_sig2825, SheetPrintInterceptorService as var_core_value_sig5FD0, UniverSheetsUIPlugin as var_core_value_sigA7E3, getCurrentRangeDisable$ as var_core_value_sigA784 } from "@univerjs/sheets-ui";
import { auditTime as var_core_value_sig4406, combineLatest as var_core_value_sig6806, distinctUntilChanged as var_core_value_sigD4AA, filter as var_core_value_sigDC41, map as var_core_value_sigFB47, merge as var_core_value_sig9B3D, of as var_core_value_sigC1CF, startWith as var_core_value_sigEE12, switchMap as var_core_value_sigD70C } from "rxjs";
import { UniverLicensePlugin as var_core_value_sigF047 } from "@univerjs-pro/license";
import { IRenderManagerService as var_core_value_sigC2F9, SheetExtension as var_core_value_sig1F51, UniverRenderEnginePlugin as var_core_value_sig29F5 } from "@univerjs/engine-render";
import { ColumnSparklineIcon as var_core_value_sig5A51, DeleteIcon as var_core_value_sigF1D1, GroupSparklineIcon as var_core_value_sig370E, LineSparklineIcon as var_core_value_sigDE14, MoreDownIcon as var_core_value_sig02CB, MoreRightIcon as var_core_value_sig6CBB, PieChartIcon as var_core_value_sig68DA, PointColorDoubleIcon as var_core_value_sig64D8, UngroupSparklineIcon as var_core_value_sigD755, WinlossSparklineIcon as var_core_value_sigF897, WriteIcon as var_core_value_sigA578 } from "@univerjs/icons";
import { ActionRow as var_core_value_sig0260, Button as var_core_value_sig034D, Checkbox as var_core_value_sig89EC, ColorPicker as var_core_value_sig9975, Dropdown as var_core_value_sigD6D9, InputNumber as var_core_value_sig2637, Radio as var_core_value_sigAF1D, RadioGroup as var_core_value_sigC92D, Segmented as var_core_value_sigEA3D, Select as var_core_value_sig2841, borderBottomClassName as var_core_value_sig9FE1, borderClassName as var_core_value_sig9DAA, clsx as var_core_value_sig1F8A, selectClassName as var_core_value_sigEBB4 } from "@univerjs/design";
import { useCallback as var_core_value_sig2B74, useEffect as var_core_value_sig0483, useMemo as var_core_value_sig4A48, useRef as var_core_value_sigD170, useState as var_core_value_sig90E5 } from "react";
import { Fragment as var_core_value_sig7000, jsx as var_core_value_sigD7C5, jsxs as var_core_value_sig3633 } from "react/jsx-runtime";
import { deserializeRangeWithSheet as var_core_value_sig1DF5, serializeRange as var_core_value_sig90A3 } from "@univerjs/engine-formula";
import { RangeSelector as var_core_value_sig28BE } from "@univerjs/sheets-formula-ui";
const ut = "SHEET_SPARKLINE_MENU",
  dt = "SHEET_SPARKLINE_SELECTOR",
  ft = "SHEET_SPARKLINE_PANEL",
  pt = "SHEET_SPARKLINE_PANEL_ID",
  mt = {
    id: "sheet.operation.open-sparkline-panel",
    type: var_core_value_sigEEA6.OPERATION,
    handler: var_core_value_sig4A83 => {
      let var_core_value_sig58AA = var_core_value_sig4A83.get(var_core_value_sigBF6D),
        var_core_value_sig84C4 = var_core_value_sig4A83.get(var_core_value_sig9678),
        var_core_value_sigB6F7 = var_core_value_sig4A83.get(var_core_value_sig5C27),
        var_core_value_sigB495 = {
          id: pt,
          header: {
            title: var_core_value_sig84C4.t("sheets-sparkline-ui.panel.title")
          },
          children: {
            label: ft
          },
          width: 330,
          onClose: () => {
            var_core_value_sigB6F7.close(dt);
          }
        };
      return var_core_value_sig58AA.open(var_core_value_sigB495), true;
    }
  },
  ht = {
    type: var_core_value_sigEEA6.OPERATION,
    id: "sheet.operation.open-sparkline-selector",
    handler: async var_core_value_sig70D0 => {
      let var_core_value_sig2A8A = var_core_value_sig7E48(var_core_value_sig70D0.get(var_core_value_sig045E));
      if (!var_core_value_sig2A8A) return false;
      let var_core_value_sig3782 = await gt(var_core_value_sig70D0, var_core_value_sig70D0.get(var_core_value_sig4F3C).getCurrentSelections().map(var_core_value_sig68BE => var_core_value_sig68BE.range));
      if (!var_core_value_sig3782) return false;
      let {
        unitId: var_core_value_sigD22E,
        subUnitId: var_core_value_sig3455
      } = var_core_value_sig2A8A;
      return var_core_value_sig70D0.get(var_core_value_sig697A).executeCommand(var_core_value_sig1263.id, {
        sourceRanges: var_core_value_sig3782.sourceRanges,
        targetRanges: var_core_value_sig3782.targetRanges,
        targetInfo: {
          unitId: var_core_value_sigD22E,
          subUnitId: var_core_value_sig3455
        }
      }), true;
    }
  };
async function gt(var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395, var_core_value_sig9FA0) {
  let var_core_value_sig055E = var_core_value_sig5CEF.get(var_core_value_sig5C27),
    var_core_value_sig7C77 = var_core_value_sig5CEF.get(var_core_value_sig9678);
  return new Promise(var_core_value_sig04C6 => {
    let var_core_value_sigCA05,
      var_core_value_sig2F2B = {
        sourceRanges: var_core_value_sig43D5,
        targetRanges: var_core_value_sig1395,
        resetCtx: var_core_value_sig9FA0,
        onConfirm: var_core_value_sig156F => {
          var_core_value_sig04C6(var_core_value_sig156F), var_core_value_sigCA05 == null || var_core_value_sigCA05.dispose();
        },
        onCancel: () => {
          var_core_value_sig04C6(null), var_core_value_sigCA05 == null || var_core_value_sigCA05.dispose();
        }
      };
    var_core_value_sigCA05 = var_core_value_sig055E.open({
      id: dt,
      title: {
        title: var_core_value_sig7C77.t("sheets-sparkline-ui.selector.title")
      },
      draggable: true,
      mask: false,
      maskClosable: false,
      children: {
        label: {
          name: dt,
          props: var_core_value_sig2F2B
        }
      },
      width: 400,
      onClose: () => {
        var_core_value_sigCA05.dispose();
      }
    });
  });
}
const _t = "sheet.sparkline.context-menu-id";
function vt(var_core_value_sig9578) {
  return {
    id: ht.id,
    title: "sheets-sparkline-ui.title",
    tooltip: "sheets-sparkline-ui.title",
    icon: ut,
    type: var_core_value_sig16D9.BUTTON,
    hidden$: var_core_value_sig5F6C(var_core_value_sig9578, var_core_value_sig546D.UNIVER_SHEET),
    disabled$: var_core_value_sigA784(var_core_value_sig9578, {
      workbookTypes: [var_core_value_sig1660],
      worksheetTypes: [var_core_value_sigEE7B],
      rangeTypes: [var_core_value_sigE4D0]
    })
  };
}
function yt(var_core_value_sigA2D3) {
  return {
    id: _t,
    type: var_core_value_sig16D9.SUBITEMS,
    icon: ut,
    title: "sheets-sparkline-ui.title",
    hidden$: var_core_value_sig6806([var_core_value_sig5F6C(var_core_value_sigA2D3, var_core_value_sig546D.UNIVER_SHEET), St(var_core_value_sigA2D3)]).pipe(var_core_value_sigFB47(([var_core_value_sig70AF, var_core_value_sigD04E]) => var_core_value_sig70AF || var_core_value_sigD04E))
  };
}
function bt(var_core_value_sigC218) {
  return {
    id: var_core_value_sig934F.id,
    type: var_core_value_sig16D9.BUTTON,
    title: "sheets-sparkline-ui.remove",
    tooltip: "sheets-sparkline-ui.remove",
    disabled$: var_core_value_sigA784(var_core_value_sigC218, {
      workbookTypes: [var_core_value_sig1660],
      worksheetTypes: [var_core_value_sigEE7B],
      rangeTypes: [var_core_value_sigE4D0]
    })
  };
}
function xt(var_core_value_sigADEC) {
  return {
    id: mt.id,
    title: "sheets-sparkline-ui.edit",
    tooltip: "sheets-sparkline-ui.edit",
    type: var_core_value_sig16D9.BUTTON,
    disabled$: var_core_value_sigA784(var_core_value_sigADEC, {
      workbookTypes: [var_core_value_sig1660],
      worksheetTypes: [var_core_value_sigEE7B],
      rangeTypes: [var_core_value_sigE4D0]
    })
  };
}
function St(var_core_value_sig3D8E) {
  let var_core_value_sig37E5 = var_core_value_sig3D8E.get(var_core_value_sig045E).getCurrentTypeOfUnit$(var_core_value_sig546D.UNIVER_SHEET),
    var_core_value_sigF079 = var_core_value_sig3D8E.get(var_core_value_sig86D7),
    var_core_value_sigFCA0 = var_core_value_sig3D8E.get(var_core_value_sig2407);
  return var_core_value_sig37E5.pipe(var_core_value_sigD70C(var_core_value_sigB99B => var_core_value_sigB99B ? var_core_value_sigB99B.activeSheet$["pipe"](var_core_value_sigD70C(var_core_value_sigDD51 => {
    if (!var_core_value_sigDD51) return var_core_value_sigC1CF(true);
    let var_core_value_sigF057 = var_core_value_sig3D8E.get(var_core_value_sig4F3C);
    return var_core_value_sig9B3D(var_core_value_sigC1CF(undefined), var_core_value_sigF057.selectionMoveEnd$, var_core_value_sigF079.updateConfig$).pipe(var_core_value_sigFB47(() => {
      let var_core_value_sigEA04 = var_core_value_sigF057.getCurrentSelections();
      if (var_core_value_sigEA04.length > 1 || var_core_value_sigEA04.length === 0) return true;
      let {
        primary: var_core_value_sig7A62,
        range: var_core_value_sig8109
      } = var_core_value_sigEA04[0];
      if (!var_core_value_sig7A62) return true;
      let var_core_value_sig7565 = var_core_value_sigB99B.getUnitId(),
        var_core_value_sigD4FB = var_core_value_sigDD51.getSheetId();
      if (!var_core_value_sigF079.getSparkline(var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig7A62.actualRow, var_core_value_sig7A62.actualColumn)) return true;
      let var_core_value_sig3E71 = new Set();
      var_core_value_sig639A.foreach(var_core_value_sig8109, (var_core_value_sig777D, var_core_value_sig3F4C) => {
        let var_core_value_sigD65A = var_core_value_sigF079.getSparkline(var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig777D, var_core_value_sig3F4C);
        var_core_value_sigD65A && var_core_value_sigF079.getSparklineById(var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sigD65A) && var_core_value_sig3E71.add(var_core_value_sigD65A);
      });
      let var_core_value_sig01B3 = true;
      return var_core_value_sig3E71.forEach(var_core_value_sig5A13 => {
        let var_core_value_sigF593 = var_core_value_sigF079.getSparklineById(var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig5A13);
        var_core_value_sigF593 && var_core_value_sig01B3 && var_core_value_sigF593.sparklines["forValue"]((var_core_value_sig5B69, var_core_value_sigB098) => {
          var var_core_value_sigCE71;
          ((var_core_value_sigCE71 = var_core_value_sigFCA0.getCellInfo(var_core_value_sig7565, var_core_value_sigD4FB, var_core_value_sig5B69, var_core_value_sigB098)) == null ? undefined : var_core_value_sigCE71[var_core_value_sig7B9E.Edit]) === false && (var_core_value_sig01B3 = false);
        });
      }), !var_core_value_sig01B3;
    }));
  })) : var_core_value_sigC1CF(true)));
}
const Ct = {
  [var_core_value_sigF378.MEDIA]: {
    [ht.id]: {
      order: 3,
      menuItemFactory: vt
    }
  },
  [var_core_value_sigEB36.MAIN_AREA]: {
    [var_core_value_sig8B21.DATA]: {
      [_t]: {
        order: 5,
        menuItemFactory: yt,
        [mt.id]: {
          menuItemFactory: xt
        },
        [var_core_value_sig934F.id]: {
          menuItemFactory: bt
        }
      }
    }
  },
  [var_core_value_sigEB36.COL_HEADER]: {
    [var_core_value_sig8B21.LAYOUT]: {
      [_t]: {
        [mt.id]: {
          menuItemFactory: xt
        },
        [var_core_value_sig934F.id]: {
          menuItemFactory: bt
        }
      }
    }
  },
  [var_core_value_sigEB36.ROW_HEADER]: {
    [var_core_value_sig8B21.LAYOUT]: {
      [_t]: {
        [mt.id]: {
          menuItemFactory: xt
        },
        [var_core_value_sig934F.id]: {
          menuItemFactory: bt
        }
      }
    }
  }
};
var wt = "@univerjs-pro/sheets-sparkline-ui",
  Tt = "1.0.0-insiders.20260907-70fc579";
const Et = {};
function Dt({
  title: var_core_value_sigC84D,
  children: var_core_value_sigF2BC,
  containerStyle: var_core_value_sigD37B
}) {
  let [var_core_value_sigFA28, var_core_value_sig93BE] = var_core_value_sig90E5(false);
  return var_core_value_sig3633("div", {
    className: var_core_value_sig1F8A("univer-px-0 univer-py-2.5", var_core_value_sig9FE1),
    style: var_core_value_sigD37B,
    children: [var_core_value_sig3633("div", {
      className: "univer-flex univer-cursor-pointer univer-items-center univer-px-0 univer-py-1.5 univer-text-sm univer-font-medium",
      onClick: () => var_core_value_sig93BE(!var_core_value_sigFA28),
      children: [var_core_value_sigD7C5("span", {
        className: "univer-size-4 univer-pr-1",
        children: var_core_value_sigD7C5(var_core_value_sigFA28 ? var_core_value_sig02CB : var_core_value_sig6CBB, {})
      }), var_core_value_sigC84D]
    }), var_core_value_sigFA28 && var_core_value_sigD7C5("div", {
      className: "univer-pb-4 univer-pl-4 univer-pt-2.5",
      children: var_core_value_sigF2BC
    })]
  });
}
const Ot = var_core_value_sigABEC => {
    let {
        color: var_core_value_sig2712,
        onChange: var_core_value_sig0B9E
      } = var_core_value_sigABEC,
      [var_core_value_sigC545, var_core_value_sig12A7] = var_core_value_sig90E5(false),
      var_core_value_sig6F4E = var_core_value_sig7E85(var_core_value_sig9678),
      var_core_value_sigA021 = var_core_value_sig2712 === "transparent" || var_core_value_sig2712 == null,
      var_core_value_sig49D9 = var_core_value_sig2B74(var_core_value_sig5A75 => {
        var_core_value_sig0B9E == null || var_core_value_sig0B9E(var_core_value_sig5A75), var_core_value_sig12A7(false);
      }, [var_core_value_sig0B9E]);
    return var_core_value_sigD7C5(var_core_value_sigD6D9, {
      overlay: var_core_value_sigD7C5("div", {
        className: var_core_value_sig1F8A("univer-flex\x20univer-flex-col\x20univer-items-center\x20univer-gap-3\x20univer-p-3\x20univer-text-xs", var_core_value_sig9DAA),
        children: var_core_value_sigD7C5(var_core_value_sig9975, {
          value: var_core_value_sigA021 ? "#ffffff" : var_core_value_sig2712,
          onChange: var_core_value_sig49D9
        })
      }),
      open: var_core_value_sigC545,
      onOpenChange: var_core_value_sig12A7,
      children: var_core_value_sig3633("button", {
        className: var_core_value_sig1F8A(var_core_value_sigEBB4, "univer-w-full !univer-min-w-0 univer-text-gray-500 hover:univer-border-primary-600 dark:!univer-text-gray-0", {
          "univer-border-primary-600\x20univer-outline-none\x20univer-ring-2\x20univer-ring-primary-50\x20dark:!univer-ring-primary-900": var_core_value_sigC545,
          "univer-cursor-pointer": !var_core_value_sigC545
        }),
        type: "button",
        children: [var_core_value_sigA021 ? var_core_value_sigD7C5("div", {
          className: "univer-flex-1 univer-truncate univer-text-sm univer-text-gray-500 dark:!univer-text-gray-0",
          children: var_core_value_sig6F4E.t("sheets-sparkline-ui.panel.default")
        }) : var_core_value_sigD7C5("div", {
          className: var_core_value_sig1F8A("univer-size-5", var_core_value_sig9DAA),
          style: {
            backgroundColor: var_core_value_sig2712
          }
        }), var_core_value_sigD7C5(var_core_value_sig02CB, {
          className: "univer-flex-shrink-0\x20dark:!univer-text-gray-0"
        })]
      })
    });
  },
  kt = ({
    config: var_core_value_sig320C,
    ctx: var_core_value_sigE7F0
  }) => {
    var var_core_value_sigE837, var_core_value_sig34F4, var_core_value_sigA45D, var_core_value_sig1BC7, var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039, var_core_value_sigA321, var_core_value_sigBF4C;
    let var_core_value_sig3457 = var_core_value_sig7E85(var_core_value_sig697A),
      var_core_value_sig4A08 = var_core_value_sig7E85(var_core_value_sig9678),
      var_core_value_sig1BC4 = var_core_value_sig7E85(var_core_value_sig86D7),
      {
        unitId: var_core_value_sig9EAB,
        subUnitId: var_core_value_sigA5C3,
        range: var_core_value_sig3A1E
      } = var_core_value_sigE7F0,
      var_core_value_sigDC92 = var_core_value_sig7BAF => {
        let var_core_value_sig8F69 = var_core_value_sig825F.deepClone(var_core_value_sig320C);
        var_core_value_sig8F69.config ||= {}, var_core_value_sig8F69.config["type"] && delete var_core_value_sig8F69.config["type"], var_core_value_sig8F69.config["axis"] || (var_core_value_sig8F69.config["axis"] = {}), var_core_value_sig8F69.config["axis"].visible = var_core_value_sig7BAF, var_core_value_sig3457.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig8F69,
          isChangeDataSource: false
        });
      },
      var_core_value_sig3515 = var_core_value_sig6884 => {
        let var_core_value_sig066E = var_core_value_sig825F.deepClone(var_core_value_sig320C);
        var_core_value_sig066E.config ||= {}, var_core_value_sig066E.config["type"] && delete var_core_value_sig066E.config["type"], var_core_value_sig066E.config["axis"] || (var_core_value_sig066E.config["axis"] = {}), var_core_value_sig066E.config["axis"].color = var_core_value_sig6884, var_core_value_sig3457.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig066E,
          isChangeDataSource: false
        });
      },
      var_core_value_sigC2A0 = var_core_value_sig9B0D => {
        let var_core_value_sig3D2C = var_core_value_sig825F.deepClone(var_core_value_sig320C);
        var_core_value_sig3D2C.config ||= {}, var_core_value_sig3D2C.config["type"] && delete var_core_value_sig3D2C.config["type"], var_core_value_sig3D2C.config["axis"] || (var_core_value_sig3D2C.config["axis"] = {}), var_core_value_sig3D2C.config["axis"].reverse = var_core_value_sig9B0D, var_core_value_sig3457.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig3D2C,
          isChangeDataSource: false
        });
      },
      var_core_value_sig7C65 = (var_core_value_sigC56D, var_core_value_sig3A17) => {
        let var_core_value_sig938F = var_core_value_sig3A17 === "min" ? "extremumMin" : "extremumMax",
          var_core_value_sigD948 = var_core_value_sig825F.deepClone(var_core_value_sig320C);
        var_core_value_sigD948.config ||= {}, var_core_value_sigD948.config["type"] && delete var_core_value_sigD948.config["type"], var_core_value_sigD948.config[var_core_value_sig938F] || (var_core_value_sigD948.config[var_core_value_sig938F] = {}), var_core_value_sigD948.config[var_core_value_sig938F].type = var_core_value_sigC56D, var_core_value_sig3457.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sigD948,
          isChangeDataSource: false
        });
      },
      var_core_value_sig7F05 = (var_core_value_sigBE5E, var_core_value_sig0281) => {
        let var_core_value_sigED71 = var_core_value_sig0281 === "min" ? "extremumMin" : "extremumMax",
          var_core_value_sig281C = var_core_value_sig825F.deepClone(var_core_value_sig320C);
        var_core_value_sig281C.config ||= {}, var_core_value_sig281C.config["type"] && delete var_core_value_sig281C.config["type"], var_core_value_sig281C.config[var_core_value_sigED71] || (var_core_value_sig281C.config[var_core_value_sigED71] = {}), var_core_value_sig281C.config[var_core_value_sigED71].type = var_core_value_sig431B.CUSTOM_EXTREMUM, var_core_value_sig281C.config[var_core_value_sigED71].value = var_core_value_sigBE5E, var_core_value_sig3457.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig281C,
          isChangeDataSource: false
        });
      },
      var_core_value_sig41F3 = (var_core_value_sig3C92, var_core_value_sigB16B) => {
        let var_core_value_sig585D = var_core_value_sigB16B === "empty" ? "emptyShowAs" : "nonNumShowAs",
          var_core_value_sigE722 = var_core_value_sig825F.deepClone(var_core_value_sig320C);
        var_core_value_sigE722.config ||= {}, var_core_value_sigE722.config["type"] && delete var_core_value_sigE722.config["type"], var_core_value_sigE722.config[var_core_value_sig585D] = var_core_value_sig3C92, var_core_value_sig3457.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sigE722,
          isChangeDataSource: false
        });
      },
      var_core_value_sigF455 = () => {
        let var_core_value_sig062A = var_core_value_sig825F.deepClone(var_core_value_sig320C);
        var_core_value_sig3457.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig062A,
          combine: true
        });
      },
      var_core_value_sig6E78 = () => {
        let var_core_value_sig050A = var_core_value_sig825F.deepClone(var_core_value_sig320C);
        var_core_value_sig3457.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig050A,
          unCombine: true
        });
      },
      var_core_value_sigB3EE = var_core_value_sig8B32 => {
        let var_core_value_sig870F = var_core_value_sig825F.deepClone(var_core_value_sig320C);
        var_core_value_sig870F.config ||= {}, var_core_value_sig870F.config["type"] && delete var_core_value_sig870F.config["type"], var_core_value_sig870F.config["containHiddenCells"] = var_core_value_sig8B32, var_core_value_sig3457.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig870F,
          isChangeDataSource: false
        });
      },
      var_core_value_sigC50A = var_core_value_sig1BC4.getSparklineCache(),
      var_core_value_sig11D0 = var_core_value_sigC50A == null || (var_core_value_sigE837 = var_core_value_sigC50A.sparklineAnchorMap["get"](var_core_value_sig9EAB)) == null ? undefined : var_core_value_sigE837.get(var_core_value_sigA5C3),
      var_core_value_sigB8ED = false,
      var_core_value_sig8EAE = false,
      var_core_value_sig1CDD = new Set(),
      {
        startRow: var_core_value_sig0DB1,
        endRow: var_core_value_sig68A2,
        startColumn: var_core_value_sigCC17,
        endColumn: var_core_value_sig32AE
      } = var_core_value_sig3A1E;
    for (let var_core_value_sigB683 = var_core_value_sig0DB1; var_core_value_sigB683 <= var_core_value_sig68A2; var_core_value_sigB683++) for (let var_core_value_sig72F6 = var_core_value_sigCC17; var_core_value_sig72F6 <= var_core_value_sig32AE; var_core_value_sig72F6++) {
      var var_core_value_sigC753;
      let var_core_value_sig7442 = var_core_value_sig11D0 == null || (var_core_value_sigC753 = var_core_value_sig11D0.matrix["getValue"](var_core_value_sigB683, var_core_value_sig72F6)) == null ? undefined : var_core_value_sigC753.groupId;
      var_core_value_sig7442 && var_core_value_sig1CDD.add(var_core_value_sig7442);
    }
    if (var_core_value_sig1CDD.size > 1) var_core_value_sigB8ED = true, Array.from(var_core_value_sig1CDD).forEach(var_core_value_sig26EC => {
      var var_core_value_sigEEDB;
      let var_core_value_sig36E7 = (var_core_value_sigEEDB = var_core_value_sigC50A.sparklineModel["get"](var_core_value_sig9EAB)) == null || (var_core_value_sigEEDB = var_core_value_sigEEDB.get(var_core_value_sigA5C3)) == null ? undefined : var_core_value_sigEEDB.get(var_core_value_sig26EC);
      ((var_core_value_sig36E7 == null ? undefined : var_core_value_sig36E7.sparklines["toNativeArray"]().length) ?? 0) > 1 && (var_core_value_sig8EAE = true);
    });else {
      if (var_core_value_sig1CDD.size === 1) {
        var var_core_value_sigFFD1;
        let var_core_value_sig9FBA = Array.from(var_core_value_sig1CDD)[0],
          var_core_value_sigFE01 = (var_core_value_sigFFD1 = var_core_value_sigC50A.sparklineModel["get"](var_core_value_sig9EAB)) == null || (var_core_value_sigFFD1 = var_core_value_sigFFD1.get(var_core_value_sigA5C3)) == null ? undefined : var_core_value_sigFFD1.get(var_core_value_sig9FBA);
        var_core_value_sig8EAE = ((var_core_value_sigFE01 == null ? undefined : var_core_value_sigFE01.sparklines["toNativeArray"]().length) ?? 0) > 1;
        let var_core_value_sigA2CE = 0,
          var_core_value_sig1975 = 0;
        var_core_value_sigFE01 == null || var_core_value_sigFE01.sparklines["forValue"]((var_core_value_sigDF87, var_core_value_sig9EE0) => {
          let var_core_value_sigF051 = var_core_value_sig8078(var_core_value_sigDF87, var_core_value_sig9EE0);
          var_core_value_sig567C.intersects(var_core_value_sigF051, var_core_value_sig3A1E) ? var_core_value_sigA2CE++ : var_core_value_sig1975++;
        }), var_core_value_sigB8ED = var_core_value_sig1975 > 0 && var_core_value_sigA2CE > 1;
      }
    }
    return var_core_value_sig3633("div", {
      children: [var_core_value_sigD7C5(Dt, {
        title: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.composeManager"),
        children: var_core_value_sig3633(var_core_value_sig0260, {
          className: "univer-flex univer-justify-between",
          children: [var_core_value_sig3633(var_core_value_sig034D, {
            disabled: !var_core_value_sigB8ED,
            onClick: () => var_core_value_sigF455(),
            children: [var_core_value_sigD7C5(var_core_value_sig370E, {}), var_core_value_sig4A08.t("sheets-sparkline-ui.panel.compose")]
          }), var_core_value_sig3633(var_core_value_sig034D, {
            disabled: !var_core_value_sig8EAE,
            onClick: () => var_core_value_sig6E78(),
            children: [var_core_value_sigD7C5(var_core_value_sigD755, {}), var_core_value_sig4A08.t("sheets-sparkline-ui.panel.unCompose")]
          })]
        })
      }), var_core_value_sig3633(Dt, {
        title: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.horizontal"),
        children: [var_core_value_sigD7C5("div", {
          className: "univer-mb-2 univer-text-sm",
          children: var_core_value_sigD7C5(var_core_value_sig89EC, {
            checked: (var_core_value_sig34F4 = var_core_value_sig320C.config["axis"]) == null ? undefined : var_core_value_sig34F4.visible,
            onChange: var_core_value_sig6A78 => var_core_value_sigDC92(var_core_value_sig6A78),
            children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.showZeroAxis")
          })
        }), ((var_core_value_sigA45D = var_core_value_sig320C.config["axis"]) == null ? undefined : var_core_value_sigA45D.visible) && var_core_value_sig3633("div", {
          className: "univer-mb-2",
          children: [var_core_value_sigD7C5("div", {
            className: "univer-mb-2",
            children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.axisColor")
          }), var_core_value_sigD7C5(Ot, {
            color: ((var_core_value_sig1BC7 = var_core_value_sig320C.config["axis"]) == null ? undefined : var_core_value_sig1BC7.color) ?? "#000",
            onChange: var_core_value_sigF7EF => var_core_value_sig3515(var_core_value_sigF7EF)
          })]
        }), var_core_value_sigD7C5("div", {
          className: "univer-mb-2\x20univer-text-sm",
          children: var_core_value_sigD7C5(var_core_value_sig89EC, {
            checked: (var_core_value_sig4956 = var_core_value_sig320C.config["axis"]) == null ? undefined : var_core_value_sig4956.reverse,
            onChange: var_core_value_sig27F9 => var_core_value_sigC2A0(var_core_value_sig27F9),
            children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.reverse")
          })
        })]
      }), var_core_value_sigD7C5(Dt, {
        title: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.vertical"),
        children: var_core_value_sig3633("div", {
          children: [var_core_value_sigD7C5("div", {
            className: "univer-mx-0 univer-my-2 univer-text-sm univer-text-gray-500",
            children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.min")
          }), var_core_value_sig3633(var_core_value_sigC92D, {
            value: ((var_core_value_sigCC9E = var_core_value_sig320C.config["extremumMin"]) == null ? undefined : var_core_value_sigCC9E.type) ?? var_core_value_sig431B.SELF_EXTREMUM,
            className: "univer-flex univer-flex-col",
            onChange: var_core_value_sig393E => var_core_value_sig7C65(var_core_value_sig393E, "min"),
            children: [var_core_value_sigD7C5(var_core_value_sigAF1D, {
              value: var_core_value_sig431B.SELF_EXTREMUM,
              children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.itemMin")
            }), var_core_value_sigD7C5(var_core_value_sigAF1D, {
              value: var_core_value_sig431B.GROUP_EXTREMUM,
              children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.groupMin")
            }), var_core_value_sigD7C5(var_core_value_sigAF1D, {
              value: var_core_value_sig431B.CUSTOM_EXTREMUM,
              children: var_core_value_sig3633("div", {
                className: "univer-flex univer-items-center",
                children: [var_core_value_sigD7C5("div", {
                  children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.customMin")
                }), var_core_value_sigD7C5(var_core_value_sig2637, {
                  disabled: ((var_core_value_sig444C = var_core_value_sig320C.config["extremumMin"]) == null ? undefined : var_core_value_sig444C.type) !== var_core_value_sig431B.CUSTOM_EXTREMUM,
                  value: (var_core_value_sigE42E = var_core_value_sig320C.config["extremumMin"]) == null ? undefined : var_core_value_sigE42E.value,
                  onChange: var_core_value_sigB609 => {
                    typeof var_core_value_sigB609 == "number" && var_core_value_sig7F05(var_core_value_sigB609, "min");
                  },
                  className: "univer-ml-3 univer-h-6 univer-w-14"
                })]
              })
            })]
          }), var_core_value_sigD7C5("br", {}), var_core_value_sigD7C5("div", {
            className: "univer-mx-0\x20univer-my-2\x20univer-text-sm\x20univer-text-gray-500",
            children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.max")
          }), var_core_value_sig3633(var_core_value_sigC92D, {
            value: ((var_core_value_sigF039 = var_core_value_sig320C.config["extremumMax"]) == null ? undefined : var_core_value_sigF039.type) ?? var_core_value_sig431B.SELF_EXTREMUM,
            className: "univer-flex univer-flex-col",
            onChange: var_core_value_sig390D => var_core_value_sig7C65(var_core_value_sig390D, "max"),
            children: [var_core_value_sigD7C5(var_core_value_sigAF1D, {
              value: var_core_value_sig431B.SELF_EXTREMUM,
              children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.itemMax")
            }), var_core_value_sigD7C5(var_core_value_sigAF1D, {
              value: var_core_value_sig431B.GROUP_EXTREMUM,
              children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.groupMax")
            }), var_core_value_sigD7C5(var_core_value_sigAF1D, {
              value: var_core_value_sig431B.CUSTOM_EXTREMUM,
              children: var_core_value_sig3633("div", {
                className: "univer-flex univer-items-center",
                children: [var_core_value_sigD7C5("div", {
                  children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.customMax")
                }), var_core_value_sigD7C5(var_core_value_sig2637, {
                  disabled: ((var_core_value_sigA321 = var_core_value_sig320C.config["extremumMax"]) == null ? undefined : var_core_value_sigA321.type) !== var_core_value_sig431B.CUSTOM_EXTREMUM,
                  value: (var_core_value_sigBF4C = var_core_value_sig320C.config["extremumMax"]) == null ? undefined : var_core_value_sigBF4C.value,
                  onChange: var_core_value_sigC928 => {
                    typeof var_core_value_sigC928 == "number" && var_core_value_sig7F05(var_core_value_sigC928, "max");
                  },
                  className: "univer-ml-3 univer-h-6 univer-w-14"
                })]
              })
            })]
          })]
        })
      }), var_core_value_sig3633(Dt, {
        title: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.moreSetting"),
        containerStyle: {
          border: "none"
        },
        children: [var_core_value_sigD7C5(var_core_value_sig89EC, {
          checked: var_core_value_sig320C.config["containHiddenCells"],
          onChange: var_core_value_sig39B7 => var_core_value_sigB3EE(var_core_value_sig39B7),
          children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.showHidden")
        }), var_core_value_sig3633("div", {
          className: "univer-mt-3",
          children: [var_core_value_sigD7C5("div", {
            className: "univer-mb-2 univer-text-sm univer-text-gray-800 dark:!univer-text-gray-100",
            children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.showEmptyAs")
          }), var_core_value_sigD7C5(var_core_value_sig2841, {
            className: "univer-w-full !univer-min-w-0",
            value: var_core_value_sig320C.config["emptyShowAs"] ?? var_core_value_sigC621.SPACING,
            options: [{
              label: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.spacing"),
              value: var_core_value_sigC621.SPACING
            }, {
              label: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.zeroValue"),
              value: var_core_value_sigC621.ZERO_VALUE
            }, {
              label: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.connectWithLine"),
              value: var_core_value_sigC621.CONNECT_WITH_LINE
            }],
            onChange: var_core_value_sig18E0 => var_core_value_sig41F3(var_core_value_sig18E0, "empty")
          })]
        }), var_core_value_sig3633("div", {
          className: "univer-mt-3",
          children: [var_core_value_sigD7C5("div", {
            className: "univer-mb-2 univer-text-sm univer-text-gray-800 dark:!univer-text-gray-100",
            children: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.showNonNumAs")
          }), var_core_value_sigD7C5(var_core_value_sig2841, {
            className: "univer-w-full !univer-min-w-0",
            value: var_core_value_sig320C.config["nonNumShowAs"] ?? var_core_value_sigC621.SPACING,
            options: [{
              label: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.spacing"),
              value: var_core_value_sigC621.SPACING
            }, {
              label: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.zeroValue"),
              value: var_core_value_sigC621.ZERO_VALUE
            }, {
              label: var_core_value_sig4A08.t("sheets-sparkline-ui.panel.connectWithLine"),
              value: var_core_value_sigC621.CONNECT_WITH_LINE
            }],
            onChange: var_core_value_sigE161 => var_core_value_sig41F3(var_core_value_sigE161, "nonNum")
          })]
        })]
      })]
    });
  },
  At = var_core_value_sig81AE => {
    let {
        onCheckboxChange: var_core_value_sigF79F,
        onColorChange: var_core_value_sig0E54,
        type: var_core_value_sig3B17,
        config: var_core_value_sig6C4A,
        chartType: var_core_value_sig73D9
      } = var_core_value_sig81AE,
      var_core_value_sigEAF8 = var_core_value_sig7E85(var_core_value_sig9678),
      var_core_value_sig0455 = var_core_value_sig87E2.standard[1],
      var_core_value_sig737C = var_core_value_sig4A48(() => new var_core_value_sig7A15(var_core_value_sig0455).toHexString(), [var_core_value_sig0455]),
      var_core_value_sig5AF5 = var_core_value_sig3B17 === "markersPoint" && var_core_value_sig73D9 !== var_core_value_sig2EDD.LINE_CHART,
      var_core_value_sig9DE4 = (var_core_value_sig6C4A == null ? undefined : var_core_value_sig6C4A.color) ?? var_core_value_sig0455,
      var_core_value_sig77FA = new var_core_value_sig7A15(var_core_value_sig9DE4).isDark();
    return var_core_value_sig3633("div", {
      className: var_core_value_sig1F8A("univer-flex univer-h-5 univer-w-[45%] univer-items-center univer-justify-between univer-rounded-sm hover:univer-bg-gray-200"),
      children: [var_core_value_sigD7C5(var_core_value_sig89EC, {
        checked: var_core_value_sig6C4A == null ? undefined : var_core_value_sig6C4A.visible,
        disabled: var_core_value_sig5AF5,
        onChange: var_core_value_sigBDEE => var_core_value_sigF79F(var_core_value_sigBDEE, var_core_value_sig3B17),
        children: var_core_value_sigEAF8.t("sheets-sparkline-ui.panel." + var_core_value_sig3B17)
      }), (var_core_value_sig6C4A == null ? undefined : var_core_value_sig6C4A.visible) && var_core_value_sigD7C5(var_core_value_sigD6D9, {
        overlay: var_core_value_sigD7C5("div", {
          className: "univer-p-4",
          children: var_core_value_sigD7C5(var_core_value_sig9975, {
            value: (var_core_value_sig6C4A == null ? undefined : var_core_value_sig6C4A.color) ?? var_core_value_sig737C,
            onChange: var_core_value_sig1F40 => var_core_value_sig0E54(var_core_value_sig1F40, var_core_value_sig3B17)
          })
        }),
        children: var_core_value_sigD7C5("span", {
          children: var_core_value_sigD7C5(var_core_value_sig64D8, {
            className: var_core_value_sig1F8A("univer-mr-0.5 univer-mt-0.5", {
              "univer-text-gray-0": var_core_value_sig77FA
            }),
            extend: {
              colorChannel1: var_core_value_sig9DE4
            }
          })
        })
      })]
    });
  },
  jt = ({
    config: var_core_value_sigA4A7,
    ctx: var_core_value_sigA4DF
  }) => {
    var var_core_value_sigCC9D, var_core_value_sig90F5, var_core_value_sigD2BA, var_core_value_sigCD3A, var_core_value_sig519D, var_core_value_sigC7E7;
    let var_core_value_sig6E1C = var_core_value_sig7E85(var_core_value_sig697A),
      var_core_value_sigFABC = var_core_value_sig7E85(var_core_value_sig64D5),
      var_core_value_sig413D = var_core_value_sig7E85(var_core_value_sig9678),
      var_core_value_sig5BCE = var_core_value_sig7E85(var_core_value_sig86D7),
      var_core_value_sig8EF0 = (var_core_value_sigA4A7 == null ? undefined : var_core_value_sigA4A7.config["type"]) ?? var_core_value_sig2EDD.LINE_CHART,
      var_core_value_sig78AC = var_core_value_sig8EF0 === var_core_value_sig2EDD.LINE_CHART,
      var_core_value_sig4CEF = var_core_value_sig3FC7 => {
        let var_core_value_sig1E1B = var_core_value_sig825F.deepClone(var_core_value_sigA4A7) ?? {};
        var_core_value_sig1E1B != null && var_core_value_sig1E1B.config || (var_core_value_sig1E1B.config = {}), var_core_value_sig1E1B.config["type"] = var_core_value_sig3FC7, var_core_value_sig6E1C.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig1E1B,
          isChangeDataSource: false
        });
      },
      var_core_value_sigD57D = (var_core_value_sig3B10, var_core_value_sig89E6) => {
        var var_core_value_sig4743;
        let var_core_value_sigEB6A = var_core_value_sig825F.deepClone(var_core_value_sigA4A7) ?? {};
        var_core_value_sigEB6A != null && var_core_value_sigEB6A.config || (var_core_value_sigEB6A.config = {}), var_core_value_sigEB6A.config["type"] && delete var_core_value_sigEB6A.config["type"], var_core_value_sigEB6A != null && var_core_value_sigEB6A.config["points"] || (var_core_value_sigEB6A.config["points"] = {}), var_core_value_sigEB6A != null && (var_core_value_sig4743 = var_core_value_sigEB6A.config["points"]) != null && var_core_value_sig4743[var_core_value_sig89E6] || (var_core_value_sigEB6A.config["points"][var_core_value_sig89E6] = {}), var_core_value_sigEB6A.config["points"][var_core_value_sig89E6].visible = var_core_value_sig3B10, var_core_value_sig6E1C.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sigEB6A,
          isChangeDataSource: false
        });
      },
      var_core_value_sig2CC7 = (var_core_value_sig3D46, var_core_value_sigCC93) => {
        var var_core_value_sig5964;
        let var_core_value_sig808B = var_core_value_sig825F.deepClone(var_core_value_sigA4A7) ?? {};
        var_core_value_sig808B != null && var_core_value_sig808B.config || (var_core_value_sig808B.config = {}), var_core_value_sig808B.config["type"] && delete var_core_value_sig808B.config["type"], var_core_value_sig808B != null && var_core_value_sig808B.config["points"] || (var_core_value_sig808B.config["points"] = {}), var_core_value_sig808B != null && (var_core_value_sig5964 = var_core_value_sig808B.config["points"]) != null && var_core_value_sig5964[var_core_value_sigCC93] || (var_core_value_sig808B.config["points"][var_core_value_sigCC93] = {}), var_core_value_sig808B.config["points"][var_core_value_sigCC93].color = var_core_value_sig3D46, var_core_value_sig808B.config["themeType"] = var_core_value_sig2E04.CUSTOM, var_core_value_sig6E1C.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig808B,
          isChangeDataSource: false
        });
      },
      var_core_value_sig4784 = var_core_value_sig2A26 => {
        let var_core_value_sig1179 = var_core_value_sig825F.deepClone(var_core_value_sigA4A7) ?? {};
        var_core_value_sig1179 != null && var_core_value_sig1179.config || (var_core_value_sig1179.config = {}), var_core_value_sig1179.config["type"] && delete var_core_value_sig1179.config["type"], var_core_value_sig1179.config["themeType"] = var_core_value_sig2A26, var_core_value_sig1179.config["seriesColor"] != null && (var_core_value_sig1179.config["seriesColor"] = undefined), var_core_value_sig1179 != null && var_core_value_sig1179.config["points"] || (var_core_value_sig1179.config["points"] = {});
        let var_core_value_sigEA92 = var_core_value_sig87E2[var_core_value_sig2A26];
        var_core_value_sig5C7C.forEach(var_core_value_sig6EA1 => {
          var var_core_value_sig029F;
          var_core_value_sig1179 != null && (var_core_value_sig029F = var_core_value_sig1179.config["points"]) != null && var_core_value_sig029F[var_core_value_sig6EA1] ? var_core_value_sig1179.config["points"][var_core_value_sig6EA1].color = var_core_value_sigEA92[1] : var_core_value_sig1179.config["points"][var_core_value_sig6EA1] = {
            color: var_core_value_sigEA92[1]
          };
        }), var_core_value_sig6E1C.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig1179,
          isChangeDataSource: false
        });
      },
      var_core_value_sigC39E = var_core_value_sig8FD9 => {
        let var_core_value_sig1AE5 = var_core_value_sig825F.deepClone(var_core_value_sigA4A7) ?? {};
        var_core_value_sig1AE5 != null && var_core_value_sig1AE5.config || (var_core_value_sig1AE5.config = {}), var_core_value_sig1AE5.config["type"] && delete var_core_value_sig1AE5.config["type"], var_core_value_sig1AE5.config["seriesColor"] = var_core_value_sig8FD9, var_core_value_sig1AE5.config["themeType"] = var_core_value_sig2E04.CUSTOM, var_core_value_sig6E1C.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sig1AE5,
          isChangeDataSource: false
        });
      },
      var_core_value_sig16C7 = var_core_value_sig7100 => {
        let var_core_value_sigA19A = var_core_value_sig825F.deepClone(var_core_value_sigA4A7) ?? {};
        var_core_value_sigA19A != null && var_core_value_sigA19A.config || (var_core_value_sigA19A.config = {}), var_core_value_sigA19A.config["type"] && delete var_core_value_sigA19A.config["type"];
        let var_core_value_sigD3F5 = Number.parseInt(var_core_value_sig7100, 10);
        var_core_value_sigA19A.config["lineWidth"] = var_core_value_sigD3F5, var_core_value_sig6E1C.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sigA19A,
          isChangeDataSource: false
        });
      },
      var_core_value_sig7481 = var_core_value_sig3082 => {
        let var_core_value_sigF5D1 = var_core_value_sig825F.deepClone(var_core_value_sigA4A7) ?? {};
        var_core_value_sigF5D1 != null && var_core_value_sigF5D1.config || (var_core_value_sigF5D1.config = {}), var_core_value_sigF5D1.config["type"] && delete var_core_value_sigF5D1.config["type"], var_core_value_sig78AC ? var_core_value_sigF5D1.config["showGradient"] = var_core_value_sig3082 : var_core_value_sigF5D1.config["showRadius"] = var_core_value_sig3082, var_core_value_sig6E1C.executeCommand(var_core_value_sig3685.id, {
          config: var_core_value_sigF5D1,
          isChangeDataSource: false
        });
      },
      var_core_value_sig08A3 = var_core_value_sig8775 => {
        var_core_value_sig6E1C.executeCommand(var_core_value_sig934F.id, {
          isIcon: var_core_value_sig8775
        });
      },
      var_core_value_sig77D8 = new Set([var_core_value_sigA4DF.groupId]),
      var_core_value_sig78A3 = var_core_value_sigA4DF.range;
    for (let var_core_value_sig481B = var_core_value_sig78A3.startRow; var_core_value_sig481B <= var_core_value_sig78A3.endRow; var_core_value_sig481B++) for (let var_core_value_sig3767 = var_core_value_sig78A3.startColumn; var_core_value_sig3767 <= var_core_value_sig78A3.endColumn; var_core_value_sig3767++) {
      let var_core_value_sig0B45 = var_core_value_sig5BCE.getSparkline(var_core_value_sigA4DF.unitId, var_core_value_sigA4DF.subUnitId, var_core_value_sig481B, var_core_value_sig3767);
      if (var_core_value_sig0B45 && (var_core_value_sig77D8.add(var_core_value_sig0B45), var_core_value_sig77D8.size > 1)) break;
    }
    return var_core_value_sig3633("div", {
      children: [var_core_value_sig3633("div", {
        className: "univer-mb-3 univer-flex univer-items-center univer-justify-between",
        children: [var_core_value_sigD7C5("div", {
          className: "univer-text-sm\x20univer-font-medium",
          children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.sourceAndPosition")
        }), var_core_value_sigD7C5("div", {
          className: var_core_value_sig1F8A("univer-cursor-pointer", {
            "univer-cursor-not-allowed": var_core_value_sig77D8.size > 1
          }),
          onClick: async () => {
            if (var_core_value_sig77D8.size > 1) return;
            let {
              primary: var_core_value_sig13D7,
              range: var_core_value_sig90C0,
              groupId: var_core_value_sigF1B2
            } = var_core_value_sigA4DF;
            if (!(await gt(var_core_value_sigFABC, [var_core_value_sig90C0], undefined, {
              groupId: var_core_value_sigF1B2,
              primary: var_core_value_sig825F.deepClone(var_core_value_sig13D7)
            }))) return false;
          },
          children: var_core_value_sigD7C5(var_core_value_sigA578, {})
        })]
      }), var_core_value_sig3633("div", {
        children: [var_core_value_sigD7C5("div", {
          className: "univer-mb-3 univer-text-sm univer-font-medium",
          children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.type")
        }), var_core_value_sigD7C5("div", {
          className: "univer-mb-5 univer-text-sm",
          children: var_core_value_sigD7C5(var_core_value_sigEA3D, {
            className: "univer-w-full",
            value: var_core_value_sig8EF0,
            items: [{
              label: var_core_value_sig3633("span", {
                className: "univer-flex univer-items-center univer-justify-center univer-gap-1",
                children: [var_core_value_sigD7C5(var_core_value_sigDE14, {
                  className: "univer-flex-shrink-0"
                }), var_core_value_sigD7C5("span", {
                  className: "univer-truncate",
                  children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.line")
                })]
              }),
              value: var_core_value_sig2EDD.LINE_CHART
            }, {
              label: var_core_value_sig3633("span", {
                className: "univer-flex\x20univer-items-center\x20univer-justify-center\x20univer-gap-1",
                children: [var_core_value_sigD7C5(var_core_value_sig5A51, {
                  className: "univer-flex-shrink-0"
                }), var_core_value_sigD7C5("span", {
                  className: "univer-truncate",
                  children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.bar")
                })]
              }),
              value: var_core_value_sig2EDD.BAR_CHART
            }, {
              label: var_core_value_sig3633("span", {
                className: "univer-flex\x20univer-items-center\x20univer-justify-center\x20univer-gap-1",
                children: [var_core_value_sigD7C5(var_core_value_sigF897, {
                  className: "univer-flex-shrink-0"
                }), var_core_value_sigD7C5("span", {
                  className: "univer-truncate",
                  children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.profitAndLoss")
                })]
              }),
              value: var_core_value_sig2EDD.PROFIT_AND_LOSS_CHART
            }, {
              label: var_core_value_sig3633("span", {
                className: "univer-flex univer-items-center univer-justify-center univer-gap-1",
                children: [var_core_value_sigD7C5(var_core_value_sig68DA, {
                  className: "univer-flex-shrink-0"
                }), var_core_value_sigD7C5("span", {
                  className: "univer-truncate",
                  children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.pie")
                })]
              }),
              value: var_core_value_sig2EDD.PIE_CHART
            }],
            onChange: var_core_value_sig4CEF
          })
        })]
      }), var_core_value_sigA4A7.config["type"] !== var_core_value_sig2EDD.PIE_CHART && var_core_value_sig3633(var_core_value_sig7000, {
        children: [var_core_value_sig3633("div", {
          children: [var_core_value_sigD7C5("div", {
            className: "univer-mb-3 univer-text-sm univer-font-medium",
            children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.theme")
          }), var_core_value_sigD7C5("div", {
            className: "univer-mb-5\x20univer-text-sm",
            children: var_core_value_sigD7C5(var_core_value_sig2841, {
              className: "univer-w-full\x20!univer-min-w-0",
              value: var_core_value_sig413D.t("sheets-sparkline-ui.panel." + ((var_core_value_sigA4A7 == null ? undefined : var_core_value_sigA4A7.config["themeType"]) ?? var_core_value_sig2E04.STANDARD)),
              options: Object.keys(var_core_value_sig87E2).map(var_core_value_sigC2BB => {
                let var_core_value_sigD9DB = var_core_value_sig87E2[var_core_value_sigC2BB];
                return {
                  label: var_core_value_sig3633("div", {
                    className: "univer-flex univer-items-center",
                    children: [var_core_value_sigD7C5("div", {
                      className: "univer-rounded-tl-0.5 univer-rounded-bl-0.5 univer-h-4 univer-w-6",
                      style: {
                        background: var_core_value_sigD9DB[0]
                      }
                    }), var_core_value_sigD7C5("div", {
                      className: "univer-rounded-tl-0.5 univer-rounded-bl-0.5 univer-mr-2 univer-h-4 univer-w-6",
                      style: {
                        background: var_core_value_sigD9DB[1]
                      }
                    }), var_core_value_sigD7C5("div", {
                      children: var_core_value_sig413D.t("sheets-sparkline-ui.panel." + var_core_value_sigC2BB)
                    })]
                  }),
                  value: var_core_value_sigC2BB
                };
              }),
              onChange: var_core_value_sigA363 => var_core_value_sig4784(var_core_value_sigA363)
            })
          })]
        }), var_core_value_sig3633("div", {
          children: [var_core_value_sigD7C5("div", {
            className: "univer-mb-3\x20univer-text-sm\x20univer-font-medium",
            children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.adjustStyle")
          }), var_core_value_sig3633("div", {
            className: "univer-mb-5\x20univer-text-sm",
            children: [var_core_value_sig3633("div", {
              className: "univer-flex\x20univer-gap-5",
              children: [var_core_value_sig3633("div", {
                className: "univer-flex-1",
                children: [var_core_value_sigD7C5("div", {
                  className: "univer-mb-2",
                  children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.sparklineColor")
                }), var_core_value_sigD7C5(Ot, {
                  color: (var_core_value_sigA4A7 == null ? undefined : var_core_value_sigA4A7.config["seriesColor"]) ?? "transparent",
                  onChange: var_core_value_sigC39E
                })]
              }), var_core_value_sig8EF0 === var_core_value_sig2EDD.LINE_CHART && var_core_value_sig3633("div", {
                className: "univer-flex-1",
                children: [var_core_value_sigD7C5("div", {
                  className: "univer-mb-2",
                  children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.lineWidth")
                }), var_core_value_sigD7C5(var_core_value_sig2841, {
                  className: "univer-w-full !univer-min-w-0",
                  value: var_core_value_sigA4A7 != null && var_core_value_sigA4A7.config["lineWidth"] ? var_core_value_sigA4A7.config["lineWidth"] + "px" : "2px",
                  options: [{
                    value: "1px",
                    label: "1px"
                  }, {
                    value: "2px",
                    label: "2px"
                  }, {
                    value: "3px",
                    label: "3px"
                  }, {
                    value: "4px",
                    label: "4px"
                  }],
                  onChange: var_core_value_sigFBA5 => var_core_value_sig16C7(var_core_value_sigFBA5)
                })]
              })]
            }), var_core_value_sigD7C5(var_core_value_sig89EC, {
              className: "univer-mt-2",
              checked: var_core_value_sig78AC ? var_core_value_sigA4A7 == null ? undefined : var_core_value_sigA4A7.config["showGradient"] : var_core_value_sigA4A7 == null ? undefined : var_core_value_sigA4A7.config["showRadius"],
              onChange: var_core_value_sigAC47 => var_core_value_sig7481(var_core_value_sigAC47),
              children: var_core_value_sig78AC ? var_core_value_sig413D.t("sheets-sparkline-ui.panel.gradient") : var_core_value_sig413D.t("sheets-sparkline-ui.panel.radius")
            })]
          })]
        }), var_core_value_sig3633("div", {
          children: [var_core_value_sigD7C5("div", {
            className: "univer-mb-3\x20univer-text-sm\x20univer-font-medium",
            children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.marker")
          }), var_core_value_sig3633("div", {
            className: "univer-mb-5\x20univer-text-sm",
            children: [var_core_value_sig3633("div", {
              className: "univer-mb-2\x20univer-flex\x20univer-w-full\x20univer-justify-between",
              children: [var_core_value_sigD7C5(At, {
                onCheckboxChange: var_core_value_sigD57D,
                onColorChange: var_core_value_sig2CC7,
                chartType: var_core_value_sig8EF0,
                type: "highPoint",
                config: var_core_value_sigA4A7 == null || (var_core_value_sigCC9D = var_core_value_sigA4A7.config["points"]) == null ? undefined : var_core_value_sigCC9D.highPoint
              }, "highPoint"), var_core_value_sigD7C5(At, {
                onCheckboxChange: var_core_value_sigD57D,
                onColorChange: var_core_value_sig2CC7,
                chartType: var_core_value_sig8EF0,
                type: "firstPoint",
                config: var_core_value_sigA4A7 == null || (var_core_value_sig90F5 = var_core_value_sigA4A7.config["points"]) == null ? undefined : var_core_value_sig90F5.firstPoint
              }, "firstPoint")]
            }), var_core_value_sig3633("div", {
              className: "univer-mb-2 univer-flex univer-w-full univer-justify-between",
              children: [var_core_value_sigD7C5(At, {
                onCheckboxChange: var_core_value_sigD57D,
                onColorChange: var_core_value_sig2CC7,
                chartType: var_core_value_sig8EF0,
                type: "lowPoint",
                config: var_core_value_sigA4A7 == null || (var_core_value_sigD2BA = var_core_value_sigA4A7.config["points"]) == null ? undefined : var_core_value_sigD2BA.lowPoint
              }, "lowPoint"), var_core_value_sigD7C5(At, {
                onCheckboxChange: var_core_value_sigD57D,
                onColorChange: var_core_value_sig2CC7,
                chartType: var_core_value_sig8EF0,
                type: "lastPoint",
                config: var_core_value_sigA4A7 == null || (var_core_value_sigCD3A = var_core_value_sigA4A7.config["points"]) == null ? undefined : var_core_value_sigCD3A.lastPoint
              }, "lastPoint")]
            }), var_core_value_sig3633("div", {
              className: "univer-mb-2 univer-flex univer-w-full univer-justify-between",
              children: [var_core_value_sigD7C5(At, {
                onCheckboxChange: var_core_value_sigD57D,
                onColorChange: var_core_value_sig2CC7,
                chartType: var_core_value_sig8EF0,
                type: "negativePoint",
                config: var_core_value_sigA4A7 == null || (var_core_value_sig519D = var_core_value_sigA4A7.config["points"]) == null ? undefined : var_core_value_sig519D.negativePoint
              }, "negativePoint"), var_core_value_sigD7C5(At, {
                onCheckboxChange: var_core_value_sigD57D,
                onColorChange: var_core_value_sig2CC7,
                chartType: var_core_value_sig8EF0,
                type: "markersPoint",
                config: var_core_value_sigA4A7 == null || (var_core_value_sigC7E7 = var_core_value_sigA4A7.config["points"]) == null ? undefined : var_core_value_sigC7E7.markersPoint
              }, "markersPoint")]
            })]
          })]
        })]
      }), var_core_value_sigA4A7.config["type"] === var_core_value_sig2EDD.PIE_CHART && var_core_value_sigD7C5("div", {
        className: "univer-mb-3 univer-text-sm univer-font-medium",
        children: var_core_value_sig413D.t("sheets-sparkline-ui.panel.manager")
      }), var_core_value_sig3633(var_core_value_sig0260, {
        className: "univer-flex univer-justify-between",
        children: [var_core_value_sig3633(var_core_value_sig034D, {
          onClick: () => var_core_value_sig08A3(true),
          children: [var_core_value_sigD7C5(var_core_value_sigF1D1, {}), var_core_value_sig413D.t("sheets-sparkline-ui.panel.removeItem")]
        }), var_core_value_sig3633(var_core_value_sig034D, {
          onClick: () => var_core_value_sig08A3(false),
          children: [var_core_value_sigD7C5(var_core_value_sigF1D1, {}), var_core_value_sig413D.t("sheets-sparkline-ui.panel.removeGroup")]
        })]
      })]
    });
  },
  Mt = () => {
    var var_core_value_sig649B, var_core_value_sig6256, var_core_value_sigE7A6;
    let var_core_value_sigB505 = var_core_value_sigF204(var_core_value_sig7E85(var_core_value_sig4F3C).selectionMoveEnd$),
      var_core_value_sig7428 = var_core_value_sig7E85(var_core_value_sig86D7),
      var_core_value_sig1DCE = var_core_value_sig7E85(var_core_value_sig045E),
      var_core_value_sig0567 = var_core_value_sig7E85(var_core_value_sig9678),
      var_core_value_sigA7F3 = var_core_value_sig7E48(var_core_value_sig1DCE),
      [var_core_value_sigEACD, var_core_value_sig901E] = var_core_value_sig90E5("basic"),
      var_core_value_sigF7BB = var_core_value_sigEACD === "basic",
      var_core_value_sigFA38 = var_core_value_sigA7F3 == null ? undefined : var_core_value_sigA7F3.unitId,
      var_core_value_sig102B = var_core_value_sigA7F3 == null ? undefined : var_core_value_sigA7F3.subUnitId,
      var_core_value_sigA7DB = (var_core_value_sigB505 == null ? undefined : var_core_value_sigB505.length) === 1 ? var_core_value_sigB505[0] : undefined,
      var_core_value_sig5EEE = var_core_value_sigA7DB == null ? undefined : var_core_value_sigA7DB.primary,
      var_core_value_sig65B4 = var_core_value_sigA7DB == null ? undefined : var_core_value_sigA7DB.range,
      var_core_value_sigF98E = var_core_value_sig7428.getSparklineCache(),
      var_core_value_sigA470 = var_core_value_sigFA38 && var_core_value_sig102B ? var_core_value_sigF98E == null || (var_core_value_sig649B = var_core_value_sigF98E.sparklineAnchorMap["get"](var_core_value_sigFA38)) == null ? undefined : var_core_value_sig649B.get(var_core_value_sig102B) : undefined,
      var_core_value_sig19A1 = var_core_value_sig5EEE ? var_core_value_sigA470 == null || (var_core_value_sig6256 = var_core_value_sigA470.matrix["getValue"](var_core_value_sig5EEE.actualRow, var_core_value_sig5EEE.actualColumn)) == null ? undefined : var_core_value_sig6256.groupId : undefined,
      var_core_value_sig81F7 = var_core_value_sigFA38 && var_core_value_sig102B && var_core_value_sig19A1 ? (var_core_value_sigE7A6 = var_core_value_sigF98E.sparklineModel["get"](var_core_value_sigFA38)) == null || (var_core_value_sigE7A6 = var_core_value_sigE7A6.get(var_core_value_sig102B)) == null ? undefined : var_core_value_sigE7A6.get(var_core_value_sig19A1) : undefined,
      var_core_value_sigBE51 = var_core_value_sigF204(var_core_value_sigFA38 && var_core_value_sig102B && var_core_value_sig19A1 ? () => var_core_value_sig7428.updateConfig$["pipe"](var_core_value_sigDC41(var_core_value_sig670B => var_core_value_sig670B.unitId === var_core_value_sigFA38 && var_core_value_sig670B.subUnitId === var_core_value_sig102B && var_core_value_sig670B.groupId === var_core_value_sig19A1), var_core_value_sigFB47(var_core_value_sig6912 => var_core_value_sig6912.config), var_core_value_sigEE12(var_core_value_sig81F7)) : null, var_core_value_sig81F7, false, [var_core_value_sig81F7, var_core_value_sig19A1, var_core_value_sig7428, var_core_value_sig102B, var_core_value_sigFA38]);
    if (!var_core_value_sigFA38 || !var_core_value_sig102B || !var_core_value_sig5EEE || !var_core_value_sig65B4 || !var_core_value_sig19A1 || !var_core_value_sigBE51) return null;
    let var_core_value_sigAAD1 = {
      unitId: var_core_value_sigFA38,
      subUnitId: var_core_value_sig102B,
      range: var_core_value_sig65B4,
      primary: var_core_value_sig5EEE,
      groupId: var_core_value_sig19A1
    };
    return var_core_value_sig3633("div", {
      className: "univer-max-w-[290px]\x20univer-pb-4\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
      children: [var_core_value_sig3633("div", {
        className: "univer-relative univer-mx-0 univer-my-4 univer-box-border univer-flex univer-h-10 univer-items-center univer-justify-around",
        children: [var_core_value_sig3633("div", {
          className: var_core_value_sig1F8A("univer-relative univer-flex univer-h-full univer-cursor-pointer univer-flex-col univer-font-medium univer-leading-7", {
            "univer-text-primary-600": var_core_value_sigF7BB
          }),
          children: [var_core_value_sigD7C5("div", {
            onClick: () => var_core_value_sig901E("basic"),
            children: var_core_value_sig0567.t("sheets-sparkline-ui.panel.basic")
          }), var_core_value_sigF7BB && var_core_value_sigD7C5("div", {
            className: "univer-absolute univer-bottom-0 univer-h-0.5 univer-w-full univer-rounded-sm univer-bg-primary-600 univer-transition-transform univer-duration-300 univer-ease-in-out"
          })]
        }), var_core_value_sig3633("div", {
          className: var_core_value_sig1F8A("univer-relative\x20univer-flex\x20univer-h-full\x20univer-cursor-pointer\x20univer-flex-col\x20univer-font-medium\x20univer-leading-7", {
            "univer-text-primary-600": !var_core_value_sigF7BB,
            "univer-cursor-not-allowed\x20univer-text-gray-200": var_core_value_sigBE51.config["type"] === var_core_value_sig2EDD.PIE_CHART
          }),
          children: [var_core_value_sigD7C5("div", {
            onClick: () => {
              var_core_value_sigBE51.config["type"] !== var_core_value_sig2EDD.PIE_CHART && var_core_value_sig901E("advanced");
            },
            children: var_core_value_sig0567.t("sheets-sparkline-ui.panel.advanced")
          }), !var_core_value_sigF7BB && var_core_value_sigD7C5("div", {
            className: "univer-bg-pruniver-text-primary-600\x20univer-absolute\x20univer-bottom-0\x20univer-h-0.5\x20univer-w-full\x20univer-rounded-sm\x20univer-transition-transform\x20univer-duration-300\x20univer-ease-in-out"
          })]
        })]
      }), var_core_value_sigD7C5("div", {
        children: var_core_value_sigD7C5(var_core_value_sigF7BB ? jt : kt, {
          config: var_core_value_sigBE51,
          ctx: var_core_value_sigAAD1
        })
      })]
    });
  };
function Nt(var_core_value_sigBC1A, var_core_value_sig3F3A, var_core_value_sigA984) {
  if (!var_core_value_sigA984) return false;
  if (var_core_value_sig3F3A.length !== var_core_value_sigA984.length) {
    if (var_core_value_sigA984.length === 1) {
      let var_core_value_sigE235 = var_core_value_sigA984[0];
      if (var_core_value_sigE235.startRow !== var_core_value_sigE235.endRow && var_core_value_sigE235.startColumn !== var_core_value_sigE235.endColumn) return false;
    } else return false;
  }
  if (var_core_value_sigBC1A === "item") {
    if (var_core_value_sigA984.length !== 1) return false;
    let {
      startRow: var_core_value_sigA06F,
      startColumn: var_core_value_sig770E,
      endRow: var_core_value_sig4654,
      endColumn: var_core_value_sigB26B
    } = var_core_value_sigA984[0];
    if (var_core_value_sigA06F !== var_core_value_sig4654 && var_core_value_sig770E !== var_core_value_sigB26B) return false;
  }
  if (var_core_value_sigA984.length > 1) {
    if (var_core_value_sigA984.some(var_core_value_sig7664 => {
      let {
        startRow: var_core_value_sig2281,
        startColumn: var_core_value_sig5E86,
        endRow: var_core_value_sig6998,
        endColumn: var_core_value_sigF639
      } = var_core_value_sig7664;
      return var_core_value_sig2281 !== var_core_value_sig6998 || var_core_value_sig5E86 !== var_core_value_sigF639;
    })) return false;
  } else {
    let {
      startRow: var_core_value_sig019B,
      startColumn: var_core_value_sigC6BC,
      endRow: var_core_value_sig8EC2,
      endColumn: var_core_value_sigA8C3
    } = var_core_value_sigA984[0];
    if (var_core_value_sig019B !== var_core_value_sig8EC2 && var_core_value_sigC6BC !== var_core_value_sigA8C3) return false;
  }
  let var_core_value_sigA504 = 0;
  for (let var_core_value_sig5276 of var_core_value_sigA984) var_core_value_sigA504 += (var_core_value_sig5276.endRow - var_core_value_sig5276.startRow + 1) * (var_core_value_sig5276.endColumn - var_core_value_sig5276.startColumn + 1);
  if (var_core_value_sig3F3A.length > 1) {
    for (let var_core_value_sigEAE5 of var_core_value_sig3F3A) {
      let {
        startColumn: var_core_value_sig36F8,
        startRow: var_core_value_sig03E1,
        endRow: var_core_value_sigBB57,
        endColumn: var_core_value_sig7C4A
      } = var_core_value_sigEAE5;
      if (var_core_value_sig36F8 !== var_core_value_sig7C4A && var_core_value_sig03E1 !== var_core_value_sigBB57) return false;
    }
    for (let var_core_value_sigE94C of var_core_value_sigA984) {
      let {
        startColumn: var_core_value_sigE799,
        startRow: var_core_value_sigB601,
        endRow: var_core_value_sig8B71,
        endColumn: var_core_value_sigAEFB
      } = var_core_value_sigE94C;
      if (var_core_value_sigE799 !== var_core_value_sigAEFB && var_core_value_sigB601 !== var_core_value_sig8B71) return false;
    }
    return true;
  } else {
    let var_core_value_sig031B = var_core_value_sig3F3A[0].endRow - var_core_value_sig3F3A[0].startRow + 1,
      var_core_value_sig9DC0 = var_core_value_sig3F3A[0].endColumn - var_core_value_sig3F3A[0].startColumn + 1;
    return var_core_value_sigA504 === var_core_value_sig031B || var_core_value_sigA504 === var_core_value_sig9DC0;
  }
}
const Pt = {
    cellSourceRanges: [],
    cellTargetRanges: [],
    groupSourceRanges: [],
    groupTargetRanges: []
  },
  Ft = (var_core_value_sig05FF, var_core_value_sigFBF0, var_core_value_sig2F95) => {
    var var_core_value_sigF0E1, var_core_value_sig2D8D;
    if (!var_core_value_sigFBF0 || !var_core_value_sig2F95) return Pt;
    let var_core_value_sigE5A6 = var_core_value_sig05FF.get(var_core_value_sig045E),
      var_core_value_sigF449 = var_core_value_sig05FF.get(var_core_value_sig86D7),
      var_core_value_sig38C5 = var_core_value_sig7E48(var_core_value_sigE5A6);
    if (!var_core_value_sig38C5) return;
    let {
        unitId: var_core_value_sigC87D,
        subUnitId: var_core_value_sigCCDC
      } = var_core_value_sig38C5,
      {
        actualRow: var_core_value_sigC310,
        actualColumn: var_core_value_sigA4E8
      } = var_core_value_sigFBF0,
      var_core_value_sigDC07 = (var_core_value_sigF0E1 = var_core_value_sigF449.getSparklineCache().sparklineModel["get"](var_core_value_sigC87D)) == null || (var_core_value_sigF0E1 = var_core_value_sigF0E1.get(var_core_value_sigCCDC)) == null || (var_core_value_sigF0E1 = var_core_value_sigF0E1.get(var_core_value_sig2F95)) == null ? undefined : var_core_value_sigF0E1.sparklines["getValue"](var_core_value_sigC310, var_core_value_sigA4E8);
    if (!var_core_value_sigDC07) return;
    let var_core_value_sig3474 = [var_core_value_sigDC07],
      var_core_value_sig4E80 = [var_core_value_sig8078(var_core_value_sigC310, var_core_value_sigA4E8)],
      var_core_value_sigD23B = [],
      var_core_value_sig2B2A = [],
      var_core_value_sig0B5C = (var_core_value_sig2D8D = var_core_value_sigF449.getSparklineCache().sparklineModel["get"](var_core_value_sigC87D)) == null || (var_core_value_sig2D8D = var_core_value_sig2D8D.get(var_core_value_sigCCDC)) == null || (var_core_value_sig2D8D = var_core_value_sig2D8D.get(var_core_value_sig2F95)) == null ? undefined : var_core_value_sig2D8D.sparklines;
    return var_core_value_sig0B5C == null || var_core_value_sig0B5C.forValue((var_core_value_sig95F0, var_core_value_sig9CCB, var_core_value_sigE718) => {
      let var_core_value_sigAEC8 = var_core_value_sigE718;
      var_core_value_sigD23B.push(var_core_value_sigAEC8), var_core_value_sig2B2A.push(var_core_value_sig8078(var_core_value_sig95F0, var_core_value_sig9CCB));
    }), {
      cellSourceRanges: var_core_value_sig3474,
      cellTargetRanges: var_core_value_sig4E80,
      groupSourceRanges: var_core_value_sigD23B,
      groupTargetRanges: var_core_value_sig2B2A
    };
  };
function It(var_core_value_sig7D42) {
  let {
      sourceRanges: var_core_value_sig8FDE,
      targetRanges: var_core_value_sig78E6,
      onConfirm: var_core_value_sig541F,
      onCancel: var_core_value_sig417B,
      resetCtx: var_core_value_sigAA90
    } = var_core_value_sig7D42,
    var_core_value_sigE92D = var_core_value_sig7E85(var_core_value_sig045E),
    var_core_value_sig9940 = var_core_value_sig7E85(var_core_value_sig697A),
    var_core_value_sig682D = var_core_value_sig7E85(var_core_value_sig86D7),
    var_core_value_sig1435 = var_core_value_sig7E85(var_core_value_sig9678),
    var_core_value_sig4082 = var_core_value_sig7E85(var_core_value_sig64D5),
    [var_core_value_sigC049, var_core_value_sigE5C3] = var_core_value_sig90E5(),
    [var_core_value_sigCCAA, var_core_value_sigF32D] = var_core_value_sig90E5(),
    [var_core_value_sig9427, var_core_value_sig21F4] = var_core_value_sig90E5(var_core_value_sigAA90 ? "item" : "none"),
    var_core_value_sigA345 = var_core_value_sig4A48(() => Ft(var_core_value_sig4082, var_core_value_sigAA90 == null ? undefined : var_core_value_sigAA90.primary, var_core_value_sigAA90 == null ? undefined : var_core_value_sigAA90.groupId), [var_core_value_sig4082, var_core_value_sigAA90 == null ? undefined : var_core_value_sigAA90.groupId, var_core_value_sigAA90 == null ? undefined : var_core_value_sigAA90.primary]),
    {
      cellSourceRanges: var_core_value_sigA468,
      cellTargetRanges: var_core_value_sig1561,
      groupSourceRanges: var_core_value_sigDF14,
      groupTargetRanges: var_core_value_sig842F
    } = var_core_value_sigA345 ?? {},
    [var_core_value_sigC4C0, var_core_value_sig214A] = var_core_value_sig90E5(var_core_value_sigAA90 ? var_core_value_sigA468 : var_core_value_sig8FDE),
    [var_core_value_sigCCC3, var_core_value_sig986E] = var_core_value_sig90E5(var_core_value_sigAA90 ? var_core_value_sig1561 : var_core_value_sig78E6),
    var_core_value_sig537C = var_core_value_sig7E85(var_core_value_sig5C27),
    var_core_value_sigBBBC = var_core_value_sigD170(null);
  var_core_value_sig0483(() => {
    (var_core_value_sigC4C0 == null ? undefined : var_core_value_sigC4C0.length) === 0 && var_core_value_sigE5C3(undefined), (var_core_value_sigCCC3 == null ? undefined : var_core_value_sigCCC3.length) === 0 && var_core_value_sigF32D(undefined);
    let var_core_value_sigB977 = Nt(var_core_value_sig9427, var_core_value_sigC4C0, var_core_value_sigCCC3);
    var_core_value_sigF32D(var_core_value_sigB977 ? undefined : var_core_value_sig1435.t("sheets-sparkline-ui.selector.targetError"));
  }, [var_core_value_sig1435, var_core_value_sig9427, var_core_value_sigC4C0, var_core_value_sigCCC3]);
  let var_core_value_sig5440 = var_core_value_sig2949 => {
      var_core_value_sig21F4(var_core_value_sig2949), var_core_value_sig214A(var_core_value_sig2949 === "item" ? var_core_value_sigA345 == null ? undefined : var_core_value_sigA345.cellSourceRanges : var_core_value_sigA345 == null ? undefined : var_core_value_sigA345.groupSourceRanges), var_core_value_sig986E(var_core_value_sig2949 === "item" ? var_core_value_sigA345 == null ? undefined : var_core_value_sigA345.cellTargetRanges : var_core_value_sigA345 == null ? undefined : var_core_value_sigA345.groupTargetRanges);
    },
    {
      initSourceRangeStr: var_core_value_sigE28B,
      initTargetRangeStr: var_core_value_sig0FD9
    } = var_core_value_sig4A48(() => {
      let var_core_value_sig308A, var_core_value_sig528D;
      return var_core_value_sigAA90 ? (var_core_value_sig308A = var_core_value_sig9427 === "item" ? var_core_value_sigA468 : var_core_value_sigDF14, var_core_value_sig528D = var_core_value_sig9427 === "item" ? var_core_value_sig1561 : var_core_value_sig842F) : (var_core_value_sig308A = var_core_value_sig8FDE, var_core_value_sig528D = var_core_value_sig78E6), {
        initSourceRangeStr: (var_core_value_sig308A == null ? undefined : var_core_value_sig308A.map(var_core_value_sig6D47 => {
          if (!var_core_value_sig2829(var_core_value_sig6D47)) return var_core_value_sigE5C3(var_core_value_sig1435.t("sheets-sparkline-ui.selector.targetError")), "#REF!";
          let var_core_value_sigCB82 = var_core_value_sig90A3(var_core_value_sig6D47);
          return var_core_value_sigCB82 === "NaN" ? "" : var_core_value_sigCB82;
        }).filter(var_core_value_sigCF4E => !!var_core_value_sigCF4E).join(",")) ?? "",
        initTargetRangeStr: (var_core_value_sig528D == null ? undefined : var_core_value_sig528D.map(var_core_value_sig6CAD => {
          let var_core_value_sig8CF5 = var_core_value_sig90A3(var_core_value_sig6CAD);
          return var_core_value_sig8CF5 === "NaN" ? "" : var_core_value_sig8CF5;
        }).filter(var_core_value_sigDDD7 => !!var_core_value_sigDDD7).join(",")) ?? ""
      };
    }, [var_core_value_sigA468, var_core_value_sig1561, var_core_value_sigDF14, var_core_value_sig842F, var_core_value_sig1435, var_core_value_sig8FDE, var_core_value_sig78E6, var_core_value_sigAA90, var_core_value_sig9427]),
    var_core_value_sig5649 = var_core_value_sig7E48(var_core_value_sigE92D);
  if (!var_core_value_sig5649) return null;
  let {
    unitId: var_core_value_sigAF82,
    subUnitId: var_core_value_sig21A2,
    worksheet: var_core_value_sig5C1D
  } = var_core_value_sig5649;
  return var_core_value_sig3633("div", {
    ref: var_core_value_sigBBBC,
    children: [!!var_core_value_sigAA90 && var_core_value_sig3633(var_core_value_sig7000, {
      children: [var_core_value_sigD7C5("div", {
        className: "univer-mb-2\x20univer-text-sm",
        children: var_core_value_sig1435.t("sheets-sparkline-ui.selector.changeType")
      }), var_core_value_sig3633("div", {
        className: var_core_value_sig1F8A("univer-mb-4\x20univer-box-content\x20univer-flex\x20univer-h-7\x20univer-w-full\x20univer-rounded-sm\x20univer-p-0.5", var_core_value_sig9DAA),
        children: [var_core_value_sigD7C5("div", {
          className: var_core_value_sig1F8A("univer-h-7 univer-flex-1 univer-cursor-pointer univer-rounded-sm univer-text-center univer-text-sm univer-leading-7", {
            "univer-bg-blue-200\x20univer-scrollbar-corner-primary-600": var_core_value_sig9427 === "item"
          }),
          onClick: () => var_core_value_sig5440("item"),
          children: var_core_value_sig1435.t("sheets-sparkline-ui.selector.sparkline")
        }), var_core_value_sigD7C5("div", {
          className: var_core_value_sig1F8A("univer-h-7 univer-flex-1 univer-cursor-pointer univer-rounded-sm univer-text-center univer-text-sm univer-leading-7", {
            "univer-bg-blue-200\x20univer-scrollbar-corner-primary-600": var_core_value_sig9427 === "group"
          }),
          onClick: () => var_core_value_sig5440("group"),
          children: var_core_value_sig1435.t("sheets-sparkline-ui.selector.sparklineGroup")
        })]
      })]
    }), var_core_value_sig3633("div", {
      className: "univer-mb-4",
      children: [var_core_value_sigD7C5("div", {
        className: "univer-mb-2 univer-text-sm univer-text-gray-800 dark:!univer-text-gray-100",
        children: var_core_value_sig1435.t("sheets-sparkline-ui.selector.setSource")
      }), var_core_value_sigD7C5(var_core_value_sig28BE, {
        unitId: var_core_value_sigAF82,
        subUnitId: var_core_value_sig21A2,
        initialValue: var_core_value_sigE28B,
        onChange: (var_core_value_sigA309, var_core_value_sig9E20) => {
          let var_core_value_sig26BB = var_core_value_sig9E20.split(",").map(var_core_value_sig1DF5).map(var_core_value_sigB2CE => var_core_value_sig639A.transformRange(var_core_value_sigB2CE.range, var_core_value_sig5C1D));
          if (!var_core_value_sig26BB.some(var_core_value_sig443C => !var_core_value_sig2829(var_core_value_sig443C) || var_core_value_sig443C.endColumn < var_core_value_sig443C.startColumn || var_core_value_sig443C.endRow < var_core_value_sig443C.startRow)) {
            if (var_core_value_sig26BB.length > 1) {
              if (var_core_value_sig9427 === "item") {
                var_core_value_sigE5C3(var_core_value_sig1435.t("sheets-sparkline-ui.selector.singleSourceError"));
                return;
              }
              let var_core_value_sig826B = var_core_value_sig26BB.some(var_core_value_sig3607 => {
                let {
                  startRow: var_core_value_sigB512,
                  endRow: var_core_value_sigF2E6,
                  startColumn: var_core_value_sig34C8,
                  endColumn: var_core_value_sigB744
                } = var_core_value_sig3607;
                return var_core_value_sigB512 !== var_core_value_sigF2E6 && var_core_value_sig34C8 !== var_core_value_sigB744;
              });
              var_core_value_sigE5C3(var_core_value_sig826B ? var_core_value_sig1435.t("sheets-sparkline-ui.selector.multSourceError") : undefined), var_core_value_sig826B || var_core_value_sig214A(var_core_value_sig26BB);
              return;
            } else {
              let {
                startRow: var_core_value_sigCF89,
                endRow: var_core_value_sig00CB,
                startColumn: var_core_value_sig77EE,
                endColumn: var_core_value_sig9F76
              } = var_core_value_sig26BB[0];
              if (var_core_value_sig9427 === "item" && var_core_value_sigCF89 !== var_core_value_sig00CB && var_core_value_sig77EE !== var_core_value_sig9F76) {
                var_core_value_sigE5C3(var_core_value_sig1435.t("sheets-sparkline-ui.selector.resetSourceError"));
                return;
              }
            }
            var_core_value_sigE5C3(undefined), var_core_value_sig214A(var_core_value_sig26BB);
          }
        },
        supportAcrossSheet: false
      }, var_core_value_sigE28B), var_core_value_sigC049 ? var_core_value_sigD7C5("div", {
        className: "univer-text-xs univer-text-red-500",
        children: var_core_value_sigC049
      }) : null]
    }), var_core_value_sig3633("div", {
      className: "univer-mb-4",
      children: [var_core_value_sigD7C5("div", {
        className: "univer-mb-2\x20univer-text-sm\x20univer-text-gray-800\x20dark:!univer-text-gray-100",
        children: var_core_value_sig1435.t("sheets-sparkline-ui.selector.setTarget")
      }), var_core_value_sigD7C5(var_core_value_sig28BE, {
        unitId: var_core_value_sigAF82,
        subUnitId: var_core_value_sig21A2,
        initialValue: var_core_value_sig0FD9,
        onChange: (var_core_value_sig19B4, var_core_value_sig218A) => {
          let var_core_value_sig14CB = var_core_value_sig218A.split(",").map(var_core_value_sig1DF5).map(var_core_value_sig39B1 => var_core_value_sig39B1.range);
          var_core_value_sig14CB.some(var_core_value_sig210D => !var_core_value_sig2829(var_core_value_sig210D) || var_core_value_sig210D.endColumn < var_core_value_sig210D.startColumn || var_core_value_sig210D.endRow < var_core_value_sig210D.startRow) || var_core_value_sig986E(var_core_value_sig14CB);
        },
        supportAcrossSheet: false
      }, var_core_value_sig0FD9), var_core_value_sigCCAA ? var_core_value_sigD7C5("div", {
        className: "univer-text-xs univer-text-red-500",
        children: var_core_value_sigCCAA
      }) : null]
    }), var_core_value_sig3633(var_core_value_sig0260, {
      className: "univer-flex univer-justify-end univer-gap-2",
      children: [var_core_value_sigD7C5(var_core_value_sig034D, {
        onClick: () => {
          var_core_value_sig537C.close(dt);
        },
        children: var_core_value_sig1435.t("sheets-sparkline-ui.selector.cancel")
      }), var_core_value_sigD7C5(var_core_value_sig034D, {
        variant: "primary",
        onClick: () => {
          if (var_core_value_sigC4C0 && var_core_value_sigCCC3 && !var_core_value_sigC049 && !var_core_value_sigCCAA) {
            if (var_core_value_sigAA90) {
              var var_core_value_sigFDEE;
              let var_core_value_sigB008 = (var_core_value_sigFDEE = var_core_value_sig682D.getSparklineCache().sparklineModel["get"](var_core_value_sigAF82)) == null || (var_core_value_sigFDEE = var_core_value_sigFDEE.get(var_core_value_sig21A2)) == null ? undefined : var_core_value_sigFDEE.get(var_core_value_sigAA90.groupId);
              var_core_value_sig9940.executeCommand(var_core_value_sig3685.id, {
                config: var_core_value_sigB008,
                isChangeDataSource: true,
                changeDataSourceInfo: {
                  sourceRanges: var_core_value_sigC4C0,
                  targetRanges: var_core_value_sigCCC3,
                  groupId: var_core_value_sigAA90.groupId,
                  resetType: var_core_value_sig9427,
                  primary: var_core_value_sigAA90.primary
                }
              }), var_core_value_sig417B();
            } else var_core_value_sig541F({
              sourceRanges: var_core_value_sigC4C0,
              targetRanges: var_core_value_sigCCC3
            });
          }
        },
        disabled: !!(var_core_value_sigC049 || var_core_value_sigCCAA),
        children: var_core_value_sig1435.t("sheets-sparkline-ui.selector.confirm")
      })]
    })]
  });
}
function $(var_core_value_sig4CBA, var_core_value_sig8E65) {
  return function (var_core_value_sigA676, var_core_value_sigC27E) {
    var_core_value_sig8E65(var_core_value_sigA676, var_core_value_sigC27E, var_core_value_sig4CBA);
  };
}
function Lt(var_core_value_sig772C, var_core_value_sigF309, var_core_value_sig44F9, var_core_value_sigE532) {
  var var_core_value_sigF381 = arguments.length,
    var_core_value_sigCB92 = var_core_value_sigF381 < 3 ? var_core_value_sigF309 : var_core_value_sigE532 === null ? var_core_value_sigE532 = Object.getOwnPropertyDescriptor(var_core_value_sigF309, var_core_value_sig44F9) : var_core_value_sigE532,
    var_core_value_sigC844;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigCB92 = Reflect.decorate(var_core_value_sig772C, var_core_value_sigF309, var_core_value_sig44F9, var_core_value_sigE532);else {
    for (var var_core_value_sig2ED4 = var_core_value_sig772C.length - 1; var_core_value_sig2ED4 >= 0; var_core_value_sig2ED4--) (var_core_value_sigC844 = var_core_value_sig772C[var_core_value_sig2ED4]) && (var_core_value_sigCB92 = (var_core_value_sigF381 < 3 ? var_core_value_sigC844(var_core_value_sigCB92) : var_core_value_sigF381 > 3 ? var_core_value_sigC844(var_core_value_sigF309, var_core_value_sig44F9, var_core_value_sigCB92) : var_core_value_sigC844(var_core_value_sigF309, var_core_value_sig44F9)) || var_core_value_sigCB92);
  }
  return var_core_value_sigF381 > 3 && var_core_value_sigCB92 && Object.defineProperty(var_core_value_sigF309, var_core_value_sig44F9, var_core_value_sigCB92), var_core_value_sigCB92;
}
let Rt = class extends var_core_value_sig0442 {
  constructor(var_core_value_sigA70D, var_core_value_sigCE10) {
    super(), this._componentManager = var_core_value_sigA70D, this._iconManager = var_core_value_sigCE10, this._registerComponents(), this._registerIcons();
  }
  _registerComponents() {
    [[dt, It], [ft, Mt]].forEach(([var_core_value_sigB4B4, var_core_value_sigD407]) => {
      this.disposeWithMe(this._componentManager["register"](var_core_value_sigB4B4, var_core_value_sigD407));
    });
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      [ut]: var_core_value_sigDE14
    }));
  }
};
Rt = Lt([$(0, var_core_value_sig4524(var_core_value_sig355D)), $(1, var_core_value_sig4524(var_core_value_sigD051))], Rt);
let zt = class extends var_core_value_sig0442 {
  constructor(var_core_value_sigA386, var_core_value_sigCD82, var_core_value_sig44DD, var_core_value_sig96FA) {
    super(), this._injector = var_core_value_sigA386, this._univerInstanceService = var_core_value_sigCD82, this._autoFillService = var_core_value_sig44DD, this._sparklineDataSourceModel = var_core_value_sig96FA, this._initAutoFillWithSparkline();
  }
  _initAutoFillWithSparkline() {
    let var_core_value_sigAB68 = () => ({
        redos: [],
        undos: []
      }),
      var_core_value_sig040A = (var_core_value_sig63F3, var_core_value_sig6A71) => {
        let var_core_value_sig3BF6 = [],
          var_core_value_sig38CE = [],
          {
            source: var_core_value_sig62B7,
            target: var_core_value_sig37A8,
            unitId: var_core_value_sigA90D,
            subUnitId: var_core_value_sig7A3C
          } = var_core_value_sig63F3;
        if (!var_core_value_sig62B7 || !var_core_value_sig37A8 || var_core_value_sig6A71 == null) return {
          undos: var_core_value_sig3BF6,
          redos: var_core_value_sig38CE
        };
        let var_core_value_sig0511 = var_core_value_sig44DF(var_core_value_sig62B7),
          var_core_value_sig1F44 = var_core_value_sig44DF(var_core_value_sig37A8),
          var_core_value_sigCB04 = var_core_value_sig0511.endRow - var_core_value_sig0511.startRow + 1,
          var_core_value_sig947E = var_core_value_sig0511.endColumn - var_core_value_sig0511.startColumn + 1,
          var_core_value_sig4545 = var_core_value_sig1F44.endRow - var_core_value_sig1F44.startRow + 1,
          var_core_value_sigF39A = var_core_value_sig1F44.endColumn - var_core_value_sig1F44.startColumn + 1;
        if (var_core_value_sig567C.contains(var_core_value_sig0511, var_core_value_sig1F44)) return {
          undos: var_core_value_sig3BF6,
          redos: var_core_value_sig38CE
        };
        if (var_core_value_sig6A71 === var_core_value_sigC69F.UP) {
          let var_core_value_sig8721 = {},
            var_core_value_sig08BA = {},
            var_core_value_sigDBB5 = new Set();
          for (let var_core_value_sigEAE2 = 0; var_core_value_sigEAE2 < var_core_value_sig947E; var_core_value_sigEAE2++) for (let var_core_value_sig21D8 = 0; var_core_value_sig21D8 < var_core_value_sig4545; var_core_value_sig21D8++) {
            let var_core_value_sig4CD2 = var_core_value_sig21D8 % var_core_value_sigCB04,
              var_core_value_sig48CA = var_core_value_sig1F44.startRow + var_core_value_sig21D8,
              var_core_value_sig50AF = var_core_value_sig1F44.startColumn + var_core_value_sigEAE2,
              var_core_value_sigA942 = var_core_value_sig0511.startRow + var_core_value_sig4CD2,
              var_core_value_sigA621 = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig48CA, var_core_value_sig50AF);
            if (var_core_value_sigA621) {
              var_core_value_sigDBB5.add(var_core_value_sigA621);
              let var_core_value_sig4632 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigA621);
              if (var_core_value_sig4632) {
                var_core_value_sig08BA[var_core_value_sigA621] = {
                  config: var_core_value_sig825F.deepClone(var_core_value_sig4632.config),
                  sparklines: var_core_value_sig825F.deepClone(var_core_value_sig4632.sparklines["clone"]())
                };
                let var_core_value_sig429F = var_core_value_sig8721[var_core_value_sigA621];
                var_core_value_sig429F || (var_core_value_sig429F = {
                  config: var_core_value_sig825F.deepClone(var_core_value_sig4632.config),
                  sparklines: new var_core_value_sig5E74(var_core_value_sig4632.sparklines["clone"]())
                }, var_core_value_sig8721[var_core_value_sigA621] = var_core_value_sig429F), var_core_value_sig429F.sparklines["realDeleteValue"](var_core_value_sig48CA, var_core_value_sig50AF);
              }
            }
            let var_core_value_sigBBFF = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigA942, var_core_value_sig50AF);
            if (var_core_value_sigBBFF) {
              let var_core_value_sig12F2 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigBBFF);
              if (var_core_value_sig12F2) {
                var var_core_value_sigF79C;
                var_core_value_sig08BA[var_core_value_sigBBFF] = {
                  config: var_core_value_sig825F.deepClone(var_core_value_sig12F2.config),
                  sparklines: var_core_value_sig825F.deepClone(var_core_value_sig12F2.sparklines["clone"]())
                };
                let var_core_value_sigF62A = var_core_value_sig8721[var_core_value_sigBBFF];
                var_core_value_sigF62A || (var_core_value_sigF62A = {
                  config: var_core_value_sig825F.deepClone(var_core_value_sig12F2.config),
                  sparklines: new var_core_value_sig5E74(var_core_value_sig12F2.sparklines["clone"]())
                }, var_core_value_sig8721[var_core_value_sigBBFF] = var_core_value_sigF62A), var_core_value_sigF62A.sparklines["realDeleteValue"](var_core_value_sig48CA, var_core_value_sig50AF);
                let var_core_value_sig8178 = (var_core_value_sigF79C = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigBBFF)) == null ? undefined : var_core_value_sigF79C.sparklines,
                  var_core_value_sigE9ED = var_core_value_sig8178 == null ? undefined : var_core_value_sig8178.getValue(var_core_value_sigA942, var_core_value_sig50AF);
                if (var_core_value_sigE9ED) {
                  let var_core_value_sig1BBD = {
                    ...var_core_value_sigE9ED,
                    startRow: var_core_value_sigE9ED.startRow + var_core_value_sig48CA - var_core_value_sigA942,
                    endRow: var_core_value_sigE9ED.endRow + var_core_value_sig48CA - var_core_value_sigA942
                  };
                  var_core_value_sigF62A.sparklines["setValue"](var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sig1BBD), var_core_value_sigDBB5.add(var_core_value_sigBBFF);
                }
              }
            }
            let var_core_value_sig8889 = {};
            Object.entries(var_core_value_sig8721).forEach(([var_core_value_sig2259, var_core_value_sig9E2F]) => {
              var_core_value_sig9E2F.sparklines["getSizeOf"]() && (var_core_value_sig8889[var_core_value_sig2259] = {
                config: var_core_value_sig9E2F.config,
                sparklines: var_core_value_sig9E2F.sparklines["clone"]()
              });
            }), var_core_value_sigDBB5.size && (var_core_value_sig38CE.push({
              id: var_core_value_sig74A7.id,
              params: {
                unitId: var_core_value_sigA90D,
                subUnitId: var_core_value_sig7A3C,
                groupIds: Array.from(var_core_value_sigDBB5),
                isSingle: false
              }
            }), var_core_value_sig3BF6.push({
              id: var_core_value_sig74A7.id,
              params: {
                unitId: var_core_value_sigA90D,
                subUnitId: var_core_value_sig7A3C,
                groupIds: Array.from(var_core_value_sigDBB5),
                isSingle: false
              }
            }), var_core_value_sig38CE.push({
              id: var_core_value_sig457C.id,
              params: {
                unitId: var_core_value_sigA90D,
                subUnitId: var_core_value_sig7A3C,
                sparklineConfigMap: var_core_value_sig8889
              }
            }), var_core_value_sig3BF6.push({
              id: var_core_value_sig457C.id,
              params: {
                unitId: var_core_value_sigA90D,
                subUnitId: var_core_value_sig7A3C,
                sparklineConfigMap: var_core_value_sig08BA
              }
            }));
          }
        } else {
          if (var_core_value_sig6A71 === var_core_value_sigC69F.DOWN) {
            let var_core_value_sigE68A = {},
              var_core_value_sig3E68 = {},
              var_core_value_sigF4C5 = new Set();
            for (let var_core_value_sig2B65 = 0; var_core_value_sig2B65 < var_core_value_sig947E; var_core_value_sig2B65++) for (let var_core_value_sig32F8 = 0; var_core_value_sig32F8 < var_core_value_sig4545; var_core_value_sig32F8++) {
              let var_core_value_sigD082 = var_core_value_sig32F8 % var_core_value_sigCB04,
                var_core_value_sigDBB7 = var_core_value_sig1F44.startRow + var_core_value_sig32F8,
                var_core_value_sigD0A8 = var_core_value_sig1F44.startColumn + var_core_value_sig2B65,
                var_core_value_sigF4B9 = var_core_value_sig0511.startRow + var_core_value_sigD082,
                var_core_value_sig5CEE = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigF4B9, var_core_value_sigD0A8),
                var_core_value_sigE92A = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigDBB7, var_core_value_sigD0A8);
              if (var_core_value_sigE92A) {
                var_core_value_sigF4C5.add(var_core_value_sigE92A);
                let var_core_value_sigB577 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigE92A);
                if (var_core_value_sigB577) {
                  var_core_value_sig3E68[var_core_value_sigE92A] = {
                    config: var_core_value_sig825F.deepClone(var_core_value_sigB577.config),
                    sparklines: var_core_value_sig825F.deepClone(var_core_value_sigB577.sparklines["clone"]())
                  };
                  let var_core_value_sigF704 = var_core_value_sigE68A[var_core_value_sigE92A];
                  var_core_value_sigF704 || (var_core_value_sigF704 = {
                    config: var_core_value_sig825F.deepClone(var_core_value_sigB577.config),
                    sparklines: new var_core_value_sig5E74(var_core_value_sigB577.sparklines["clone"]())
                  }, var_core_value_sigE68A[var_core_value_sigE92A] = var_core_value_sigF704), var_core_value_sigF704.sparklines["realDeleteValue"](var_core_value_sigDBB7, var_core_value_sigD0A8);
                }
              }
              if (var_core_value_sig5CEE) {
                let var_core_value_sig9572 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig5CEE);
                if (var_core_value_sig9572) {
                  var var_core_value_sig2E54;
                  var_core_value_sig3E68[var_core_value_sig5CEE] = {
                    config: var_core_value_sig825F.deepClone(var_core_value_sig9572.config),
                    sparklines: var_core_value_sig825F.deepClone(var_core_value_sig9572.sparklines["clone"]())
                  };
                  let var_core_value_sig2BCF = var_core_value_sigE68A[var_core_value_sig5CEE];
                  var_core_value_sig2BCF || (var_core_value_sig2BCF = {
                    config: var_core_value_sig825F.deepClone(var_core_value_sig9572.config),
                    sparklines: new var_core_value_sig5E74(var_core_value_sig9572.sparklines["clone"]())
                  }, var_core_value_sigE68A[var_core_value_sig5CEE] = var_core_value_sig2BCF), var_core_value_sig2BCF.sparklines["realDeleteValue"](var_core_value_sigDBB7, var_core_value_sigD0A8);
                  let var_core_value_sig0D69 = (var_core_value_sig2E54 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig5CEE)) == null ? undefined : var_core_value_sig2E54.sparklines,
                    var_core_value_sig480E = var_core_value_sig0D69 == null ? undefined : var_core_value_sig0D69.getValue(var_core_value_sigF4B9, var_core_value_sigD0A8);
                  if (var_core_value_sig480E) {
                    let var_core_value_sig27E5 = {
                      ...var_core_value_sig480E,
                      startRow: var_core_value_sig480E.startRow + var_core_value_sigDBB7 - var_core_value_sigF4B9,
                      endRow: var_core_value_sig480E.endRow + var_core_value_sigDBB7 - var_core_value_sigF4B9
                    };
                    var_core_value_sig2BCF.sparklines["setValue"](var_core_value_sigDBB7, var_core_value_sigD0A8, var_core_value_sig27E5), var_core_value_sigF4C5.add(var_core_value_sig5CEE);
                  }
                }
              }
            }
            let var_core_value_sig5410 = {};
            Object.entries(var_core_value_sigE68A).forEach(([var_core_value_sigD7EA, var_core_value_sigB33B]) => {
              var_core_value_sigB33B.sparklines["getSizeOf"]() && (var_core_value_sig5410[var_core_value_sigD7EA] = {
                config: var_core_value_sigB33B.config,
                sparklines: var_core_value_sigB33B.sparklines["clone"]()
              });
            }), var_core_value_sigF4C5.size && (var_core_value_sig38CE.push({
              id: var_core_value_sig74A7.id,
              params: {
                unitId: var_core_value_sigA90D,
                subUnitId: var_core_value_sig7A3C,
                groupIds: Array.from(var_core_value_sigF4C5),
                isSingle: false
              }
            }), var_core_value_sig3BF6.push({
              id: var_core_value_sig74A7.id,
              params: {
                unitId: var_core_value_sigA90D,
                subUnitId: var_core_value_sig7A3C,
                groupIds: Array.from(var_core_value_sigF4C5),
                isSingle: false
              }
            }), var_core_value_sig38CE.push({
              id: var_core_value_sig457C.id,
              params: {
                unitId: var_core_value_sigA90D,
                subUnitId: var_core_value_sig7A3C,
                sparklineConfigMap: var_core_value_sig5410
              }
            }), var_core_value_sig3BF6.push({
              id: var_core_value_sig457C.id,
              params: {
                unitId: var_core_value_sigA90D,
                subUnitId: var_core_value_sig7A3C,
                sparklineConfigMap: var_core_value_sig3E68
              }
            }));
          } else {
            if (var_core_value_sig6A71 === var_core_value_sigC69F.LEFT) {
              let var_core_value_sig24B9 = {},
                var_core_value_sigE627 = {},
                var_core_value_sigEF3E = new Set();
              for (let var_core_value_sig5B67 = 0; var_core_value_sig5B67 < var_core_value_sigCB04; var_core_value_sig5B67++) for (let var_core_value_sig362B = 0; var_core_value_sig362B < var_core_value_sigF39A; var_core_value_sig362B++) {
                let var_core_value_sigD873 = var_core_value_sig362B % var_core_value_sig947E,
                  var_core_value_sigA12B = var_core_value_sig1F44.startRow + var_core_value_sig5B67,
                  var_core_value_sigF230 = var_core_value_sig1F44.startColumn + var_core_value_sig362B,
                  var_core_value_sig09B8 = var_core_value_sig0511.startColumn + var_core_value_sigD873,
                  var_core_value_sig6F91 = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigA12B, var_core_value_sigF230);
                if (var_core_value_sig6F91) {
                  var_core_value_sigEF3E.add(var_core_value_sig6F91);
                  let var_core_value_sig26DB = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig6F91);
                  if (var_core_value_sig26DB) {
                    var_core_value_sigE627[var_core_value_sig6F91] = {
                      config: var_core_value_sig825F.deepClone(var_core_value_sig26DB.config),
                      sparklines: var_core_value_sig825F.deepClone(var_core_value_sig26DB.sparklines["clone"]())
                    };
                    let var_core_value_sig8061 = var_core_value_sig24B9[var_core_value_sig6F91];
                    var_core_value_sig8061 || (var_core_value_sig8061 = {
                      config: var_core_value_sig825F.deepClone(var_core_value_sig26DB.config),
                      sparklines: new var_core_value_sig5E74(var_core_value_sig26DB.sparklines["clone"]())
                    }, var_core_value_sig24B9[var_core_value_sig6F91] = var_core_value_sig8061), var_core_value_sig8061.sparklines["realDeleteValue"](var_core_value_sigA12B, var_core_value_sigF230);
                  }
                }
                let var_core_value_sigF9C7 = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigA12B, var_core_value_sig09B8);
                if (var_core_value_sigF9C7) {
                  let var_core_value_sigF0F9 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigF9C7);
                  if (var_core_value_sigF0F9) {
                    var var_core_value_sig7658;
                    var_core_value_sigE627[var_core_value_sigF9C7] = {
                      config: var_core_value_sig825F.deepClone(var_core_value_sigF0F9.config),
                      sparklines: var_core_value_sig825F.deepClone(var_core_value_sigF0F9.sparklines["clone"]())
                    };
                    let var_core_value_sig4D4C = var_core_value_sig24B9[var_core_value_sigF9C7];
                    var_core_value_sig4D4C || (var_core_value_sig4D4C = {
                      config: var_core_value_sig825F.deepClone(var_core_value_sigF0F9.config),
                      sparklines: new var_core_value_sig5E74(var_core_value_sigF0F9.sparklines["clone"]())
                    }, var_core_value_sig24B9[var_core_value_sigF9C7] = var_core_value_sig4D4C), var_core_value_sig4D4C.sparklines["realDeleteValue"](var_core_value_sigA12B, var_core_value_sigF230);
                    let var_core_value_sigC9E0 = (var_core_value_sig7658 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigF9C7)) == null ? undefined : var_core_value_sig7658.sparklines,
                      var_core_value_sig76BA = var_core_value_sigC9E0 == null ? undefined : var_core_value_sigC9E0.getValue(var_core_value_sigA12B, var_core_value_sig09B8);
                    if (var_core_value_sig76BA) {
                      let var_core_value_sig2AD8 = {
                        ...var_core_value_sig76BA,
                        startColumn: var_core_value_sig76BA.startColumn + var_core_value_sigF230 - var_core_value_sig09B8,
                        endColumn: var_core_value_sig76BA.endColumn + var_core_value_sigF230 - var_core_value_sig09B8
                      };
                      var_core_value_sig4D4C.sparklines["setValue"](var_core_value_sigA12B, var_core_value_sigF230, var_core_value_sig2AD8), var_core_value_sigEF3E.add(var_core_value_sigF9C7);
                    }
                  }
                }
              }
              let var_core_value_sig273D = {};
              Object.entries(var_core_value_sig24B9).forEach(([var_core_value_sig1758, var_core_value_sig4805]) => {
                var_core_value_sig4805.sparklines["getSizeOf"]() && (var_core_value_sig273D[var_core_value_sig1758] = {
                  config: var_core_value_sig4805.config,
                  sparklines: var_core_value_sig4805.sparklines["clone"]()
                });
              }), var_core_value_sigEF3E.size && (var_core_value_sig38CE.push({
                id: var_core_value_sig74A7.id,
                params: {
                  unitId: var_core_value_sigA90D,
                  subUnitId: var_core_value_sig7A3C,
                  groupIds: Array.from(var_core_value_sigEF3E),
                  isSingle: false
                }
              }), var_core_value_sig3BF6.push({
                id: var_core_value_sig74A7.id,
                params: {
                  unitId: var_core_value_sigA90D,
                  subUnitId: var_core_value_sig7A3C,
                  groupIds: Array.from(var_core_value_sigEF3E),
                  isSingle: false
                }
              }), var_core_value_sig38CE.push({
                id: var_core_value_sig457C.id,
                params: {
                  unitId: var_core_value_sigA90D,
                  subUnitId: var_core_value_sig7A3C,
                  sparklineConfigMap: var_core_value_sig273D
                }
              }), var_core_value_sig3BF6.push({
                id: var_core_value_sig457C.id,
                params: {
                  unitId: var_core_value_sigA90D,
                  subUnitId: var_core_value_sig7A3C,
                  sparklineConfigMap: var_core_value_sigE627
                }
              }));
            } else {
              if (var_core_value_sig6A71 === var_core_value_sigC69F.RIGHT) {
                let var_core_value_sigE67E = {},
                  var_core_value_sig2902 = {},
                  var_core_value_sig9989 = new Set();
                for (let var_core_value_sig5CA5 = 0; var_core_value_sig5CA5 < var_core_value_sigCB04; var_core_value_sig5CA5++) for (let var_core_value_sig8895 = 0; var_core_value_sig8895 < var_core_value_sigF39A; var_core_value_sig8895++) {
                  let var_core_value_sig1A0F = var_core_value_sig8895 % var_core_value_sig947E,
                    var_core_value_sigFBA4 = var_core_value_sig1F44.startRow + var_core_value_sig5CA5,
                    var_core_value_sig4383 = var_core_value_sig1F44.startColumn + var_core_value_sig8895,
                    var_core_value_sig186C = var_core_value_sig0511.startColumn + var_core_value_sig1A0F,
                    var_core_value_sigD955 = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigFBA4, var_core_value_sig4383);
                  if (var_core_value_sigD955) {
                    var_core_value_sig9989.add(var_core_value_sigD955);
                    let var_core_value_sigFBFA = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigD955);
                    if (var_core_value_sigFBFA) {
                      var_core_value_sig2902[var_core_value_sigD955] = {
                        config: var_core_value_sig825F.deepClone(var_core_value_sigFBFA.config),
                        sparklines: var_core_value_sig825F.deepClone(var_core_value_sigFBFA.sparklines["clone"]())
                      };
                      let var_core_value_sig2AD0 = var_core_value_sigE67E[var_core_value_sigD955];
                      var_core_value_sig2AD0 || (var_core_value_sig2AD0 = {
                        config: var_core_value_sig825F.deepClone(var_core_value_sigFBFA.config),
                        sparklines: new var_core_value_sig5E74(var_core_value_sigFBFA.sparklines["clone"]())
                      }, var_core_value_sigE67E[var_core_value_sigD955] = var_core_value_sig2AD0), var_core_value_sig2AD0.sparklines["realDeleteValue"](var_core_value_sigFBA4, var_core_value_sig4383);
                    }
                  }
                  let var_core_value_sig48BD = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigFBA4, var_core_value_sig186C);
                  if (var_core_value_sig48BD) {
                    let var_core_value_sigF602 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig48BD);
                    if (var_core_value_sigF602) {
                      var var_core_value_sigDCF5;
                      var_core_value_sig2902[var_core_value_sig48BD] = {
                        config: var_core_value_sig825F.deepClone(var_core_value_sigF602.config),
                        sparklines: var_core_value_sig825F.deepClone(var_core_value_sigF602.sparklines["clone"]())
                      };
                      let var_core_value_sig3EEE = var_core_value_sigE67E[var_core_value_sig48BD];
                      var_core_value_sig3EEE || (var_core_value_sig3EEE = {
                        config: var_core_value_sig825F.deepClone(var_core_value_sigF602.config),
                        sparklines: new var_core_value_sig5E74(var_core_value_sigF602.sparklines["clone"]())
                      }, var_core_value_sigE67E[var_core_value_sig48BD] = var_core_value_sig3EEE), var_core_value_sig3EEE.sparklines["realDeleteValue"](var_core_value_sigFBA4, var_core_value_sig4383);
                      let var_core_value_sigBC46 = (var_core_value_sigDCF5 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig48BD)) == null ? undefined : var_core_value_sigDCF5.sparklines,
                        var_core_value_sig3D7D = var_core_value_sigBC46 == null ? undefined : var_core_value_sigBC46.getValue(var_core_value_sigFBA4, var_core_value_sig186C);
                      if (var_core_value_sig3D7D) {
                        let var_core_value_sig7524 = {
                          ...var_core_value_sig3D7D,
                          startColumn: var_core_value_sig3D7D.startColumn + var_core_value_sig4383 - var_core_value_sig186C,
                          endColumn: var_core_value_sig3D7D.endColumn + var_core_value_sig4383 - var_core_value_sig186C
                        };
                        var_core_value_sig3EEE.sparklines["setValue"](var_core_value_sigFBA4, var_core_value_sig4383, var_core_value_sig7524), var_core_value_sig9989.add(var_core_value_sig48BD);
                      }
                    }
                  }
                }
                let var_core_value_sig698E = {};
                Object.entries(var_core_value_sigE67E).forEach(([var_core_value_sigE90F, var_core_value_sigEFD4]) => {
                  var_core_value_sigEFD4.sparklines["getSizeOf"]() && (var_core_value_sig698E[var_core_value_sigE90F] = {
                    config: var_core_value_sigEFD4.config,
                    sparklines: var_core_value_sigEFD4.sparklines["clone"]()
                  });
                }), var_core_value_sig9989.size && (var_core_value_sig38CE.push({
                  id: var_core_value_sig74A7.id,
                  params: {
                    unitId: var_core_value_sigA90D,
                    subUnitId: var_core_value_sig7A3C,
                    groupIds: Array.from(var_core_value_sig9989),
                    isSingle: false
                  }
                }), var_core_value_sig3BF6.push({
                  id: var_core_value_sig74A7.id,
                  params: {
                    unitId: var_core_value_sigA90D,
                    subUnitId: var_core_value_sig7A3C,
                    groupIds: Array.from(var_core_value_sig9989),
                    isSingle: false
                  }
                }), var_core_value_sig38CE.push({
                  id: var_core_value_sig457C.id,
                  params: {
                    unitId: var_core_value_sigA90D,
                    subUnitId: var_core_value_sig7A3C,
                    sparklineConfigMap: var_core_value_sig698E
                  }
                }), var_core_value_sig3BF6.push({
                  id: var_core_value_sig457C.id,
                  params: {
                    unitId: var_core_value_sigA90D,
                    subUnitId: var_core_value_sig7A3C,
                    sparklineConfigMap: var_core_value_sig2902
                  }
                }));
              }
            }
          }
        }
        return {
          undos: var_core_value_sig3BF6,
          redos: var_core_value_sig38CE
        };
      },
      var_core_value_sig2AE0 = {
        id: var_core_value_sigA4E6,
        onFillData: (var_core_value_sigC786, var_core_value_sigC0D9, var_core_value_sigF0511) => var_core_value_sigF0511 === var_core_value_sig6E47.COPY || var_core_value_sigF0511 === var_core_value_sig6E47.ONLY_FORMAT || var_core_value_sigF0511 === var_core_value_sig6E47.SERIES ? var_core_value_sig040A(var_core_value_sigC786, var_core_value_sigC0D9) : var_core_value_sigAB68()
      };
    this.disposeWithMe(this._autoFillService["addHook"](var_core_value_sig2AE0));
  }
};
zt = Lt([$(0, var_core_value_sig4524(var_core_value_sig64D5)), $(1, var_core_value_sig4524(var_core_value_sig045E)), $(2, var_core_value_sig4524(var_core_value_sigB64D)), $(3, var_core_value_sig4524(var_core_value_sig86D7))], zt);
let Bt = class extends var_core_value_sig0442 {
  constructor(var_core_value_sigC349, var_core_value_sig9D96) {
    super(), this._sheetClipboardService = var_core_value_sigC349, this._sparklineDataSourceModel = var_core_value_sig9D96, this._initClipboardWithSparkline();
  }
  _initClipboardWithSparkline() {
    this.disposeWithMe(this._sheetClipboardService["addClipboardHook"]({
      id: var_core_value_sigA4E6,
      onPasteCells: (var_core_value_sig5825, var_core_value_sig4EB7, var_core_value_sig73AF, var_core_value_sig548A) => {
        let var_core_value_sigE026 = [],
          var_core_value_sig339E = [],
          {
            copyType: var_core_value_sig7550 = var_core_value_sig5C3B.COPY
          } = var_core_value_sig548A,
          var_core_value_sig2983 = {};
        if (var_core_value_sig7550 === var_core_value_sig5C3B.CUT || var_core_value_sig548A.pasteType !== var_core_value_sig2825.DEFAULT_PASTE || !var_core_value_sig5825 || var_core_value_sig4EB7.unitId !== var_core_value_sig5825.unitId) return {
          undos: var_core_value_sigE026,
          redos: var_core_value_sig339E
        };
        let {
            range: var_core_value_sigE1B0,
            unitId: var_core_value_sigD4FF,
            subUnitId: var_core_value_sig1E5B
          } = var_core_value_sig4EB7,
          {
            range: var_core_value_sigB680,
            unitId: var_core_value_sig1F64,
            subUnitId: var_core_value_sigDD1C
          } = var_core_value_sig5825,
          var_core_value_sig2C39 = {},
          var_core_value_sigB7D1 = {},
          var_core_value_sig64F0 = {},
          var_core_value_sig85B1 = new Set(),
          var_core_value_sig3141 = new Set();
        for (let var_core_value_sigCFAC = 0; var_core_value_sigCFAC < var_core_value_sigE1B0.rows["length"]; var_core_value_sigCFAC++) for (let var_core_value_sig492F = 0; var_core_value_sig492F < var_core_value_sigE1B0.cols["length"]; var_core_value_sig492F++) {
          let var_core_value_sig9A0D = var_core_value_sigB680.rows[var_core_value_sigCFAC],
            var_core_value_sigA319 = var_core_value_sigB680.cols[var_core_value_sig492F];
          if (!this._sparklineDataSourceModel["getSparkline"](var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig9A0D, var_core_value_sigA319)) continue;
          let var_core_value_sig2D58 = var_core_value_sigE1B0.rows[var_core_value_sigCFAC],
            var_core_value_sig223F = var_core_value_sigE1B0.cols[var_core_value_sig492F],
            var_core_value_sigD749 = var_core_value_sigE1B0.rows[var_core_value_sigCFAC] - var_core_value_sig9A0D,
            var_core_value_sigCFFA = var_core_value_sigE1B0.cols[var_core_value_sig492F] - var_core_value_sigA319,
            var_core_value_sig58C1 = this._sparklineDataSourceModel["getSparkline"](var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig9A0D, var_core_value_sigA319);
          if (var_core_value_sig58C1) {
            let var_core_value_sig2809 = var_core_value_sig2C39[var_core_value_sig2983[var_core_value_sig58C1]],
              var_core_value_sig2DAB = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig58C1);
            if (!var_core_value_sig2DAB) continue;
            if (!var_core_value_sig2983[var_core_value_sig58C1] && var_core_value_sig2DAB) {
              let var_core_value_sig861B = "g_" + var_core_value_sigDCED(6);
              var_core_value_sig2809 = {
                newGroupId: var_core_value_sig861B,
                config: {
                  config: var_core_value_sig825F.deepClone(var_core_value_sig2DAB.config),
                  sparklines: {}
                }
              }, var_core_value_sig2C39[var_core_value_sig861B] = var_core_value_sig2809, var_core_value_sig2983[var_core_value_sig58C1] = var_core_value_sig861B;
            }
            var_core_value_sig2809.config["sparklines"][var_core_value_sig2D58] || (var_core_value_sig2809.config["sparklines"][var_core_value_sig2D58] = {});
            let var_core_value_sig877E = var_core_value_sig2DAB.sparklines["getValue"](var_core_value_sig9A0D, var_core_value_sigA319);
            if (var_core_value_sig877E) {
              let var_core_value_sig5237 = {
                startRow: var_core_value_sig877E.startRow + var_core_value_sigD749,
                startColumn: var_core_value_sig877E.startColumn + var_core_value_sigCFFA,
                endRow: var_core_value_sig877E.endRow + var_core_value_sigD749,
                endColumn: var_core_value_sig877E.endColumn + var_core_value_sigCFFA
              };
              var_core_value_sig2809.config["sparklines"][var_core_value_sig2D58][var_core_value_sig223F] = var_core_value_sig5237;
            }
          }
          let var_core_value_sig5090 = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigD4FF, var_core_value_sig1E5B, var_core_value_sigE1B0.rows[var_core_value_sigCFAC], var_core_value_sigE1B0.cols[var_core_value_sig492F]);
          if (var_core_value_sig5090) {
            let var_core_value_sig20C8 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigD4FF, var_core_value_sig1E5B, var_core_value_sig5090);
            if (var_core_value_sig20C8) {
              var var_core_value_sig2162;
              var_core_value_sig85B1.add(var_core_value_sig5090), var_core_value_sig64F0[var_core_value_sig5090] = {
                config: var_core_value_sig825F.deepClone(var_core_value_sig20C8.config),
                sparklines: var_core_value_sig825F.deepClone(var_core_value_sig20C8.sparklines["getMatrix"]())
              }, var_core_value_sigB7D1[var_core_value_sig5090] && (var_core_value_sigB7D1[var_core_value_sig5090] = {
                config: var_core_value_sig825F.deepClone(var_core_value_sig20C8.config),
                sparklines: var_core_value_sig825F.deepClone(var_core_value_sig20C8.sparklines["getMatrix"]())
              }), (var_core_value_sig2162 = var_core_value_sigB7D1[var_core_value_sig5090]) != null && (var_core_value_sig2162 = var_core_value_sig2162.sparklines) != null && (var_core_value_sig2162 = var_core_value_sig2162[var_core_value_sigCFAC]) != null && var_core_value_sig2162[var_core_value_sig492F] && delete var_core_value_sigB7D1[var_core_value_sig5090].sparklines[var_core_value_sigCFAC][var_core_value_sig492F];
            }
          }
        }
        return Object.keys(var_core_value_sig2C39).forEach(var_core_value_sig237B => {
          let var_core_value_sigFEAB = var_core_value_sig2C39[var_core_value_sig237B];
          var_core_value_sigFEAB && (var_core_value_sig3141.add(var_core_value_sig237B), var_core_value_sigB7D1[var_core_value_sig237B] = var_core_value_sigFEAB.config);
        }), var_core_value_sig3141.size > 0 && var_core_value_sigE026.push({
          id: var_core_value_sig74A7.id,
          params: {
            unitId: var_core_value_sigD4FF,
            subUnitId: var_core_value_sig1E5B,
            groupIds: Array.from(var_core_value_sig3141),
            isSingle: false
          }
        }), Object.keys(var_core_value_sig64F0).length > 0 && var_core_value_sigE026.push({
          id: var_core_value_sig457C.id,
          params: {
            unitId: var_core_value_sigD4FF,
            subUnitId: var_core_value_sig1E5B,
            sparklineConfigMap: var_core_value_sig64F0
          }
        }), var_core_value_sig85B1.size > 0 && var_core_value_sig339E.push({
          id: var_core_value_sig74A7.id,
          params: {
            unitId: var_core_value_sigD4FF,
            subUnitId: var_core_value_sig1E5B,
            groupIds: Array.from(var_core_value_sig85B1),
            isSingle: false
          }
        }), Object.keys(var_core_value_sigB7D1).length > 0 && var_core_value_sig339E.push({
          id: var_core_value_sig457C.id,
          params: {
            unitId: var_core_value_sigD4FF,
            subUnitId: var_core_value_sig1E5B,
            sparklineConfigMap: var_core_value_sigB7D1
          }
        }), {
          undos: var_core_value_sigE026,
          redos: var_core_value_sig339E
        };
      }
    }));
  }
};
Bt = Lt([$(0, var_core_value_sig4524(var_core_value_sig4153)), $(1, var_core_value_sig4524(var_core_value_sig86D7))], Bt);
let Vt = class extends var_core_value_sig0442 {
  constructor(var_core_value_sig2776) {
    super(), this._menuManagerService = var_core_value_sig2776, this._initMenu();
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](Ct);
  }
};
Vt = Lt([$(0, var_core_value_sigD494)], Vt);
function Ht(var_core_value_sig0477) {
  "@babel/helpers - typeof";

  return Ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig6FB2) {
    return typeof var_core_value_sig6FB2;
  } : function (var_core_value_sigEB43) {
    return var_core_value_sigEB43 && typeof Symbol == "function" && var_core_value_sigEB43.constructor === Symbol && var_core_value_sigEB43 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigEB43;
  }, Ht(var_core_value_sig0477);
}
function Ut(var_core_value_sig6FDF, var_core_value_sig27C4) {
  if (Ht(var_core_value_sig6FDF) != "object" || !var_core_value_sig6FDF) return var_core_value_sig6FDF;
  var var_core_value_sig3E1A = var_core_value_sig6FDF[Symbol.toPrimitive];
  if (var_core_value_sig3E1A !== undefined) {
    var var_core_value_sig7FB0 = var_core_value_sig3E1A.call(var_core_value_sig6FDF, var_core_value_sig27C4 || "default");
    if (Ht(var_core_value_sig7FB0) != "object") return var_core_value_sig7FB0;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig27C4 === "string" ? String : Number)(var_core_value_sig6FDF);
}
function Wt(var_core_value_sig5215) {
  var var_core_value_sig5204 = Ut(var_core_value_sig5215, "string");
  return Ht(var_core_value_sig5204) == "symbol" ? var_core_value_sig5204 : var_core_value_sig5204 + "";
}
function Gt(var_core_value_sig5E11, var_core_value_sig4D58, var_core_value_sig2DBD) {
  return (var_core_value_sig4D58 = Wt(var_core_value_sig4D58)) in var_core_value_sig5E11 ? Object.defineProperty(var_core_value_sig5E11, var_core_value_sig4D58, {
    value: var_core_value_sig2DBD,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig5E11[var_core_value_sig4D58] = var_core_value_sig2DBD, var_core_value_sig5E11;
}
let Kt = class extends var_core_value_sig0442 {
  constructor(var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866, var_core_value_sig5EFB, var_core_value_sig3A85, var_core_value_sig2682, var_core_value_sig4BB5) {
    super(), this._sheetSelectionService = var_core_value_sig4186, this._univerInstanceService = var_core_value_sigF963, this._sparklineDataSourceModel = var_core_value_sigB608, this._sidebarService = var_core_value_sigF866, this._markSelectionService = var_core_value_sig5EFB, this._rangeProtectionCache = var_core_value_sig3A85, this._commandService = var_core_value_sig2682, this._dialogService = var_core_value_sig4BB5, Gt(this, "_targetIds", []), Gt(this, "_sourceIds", []), this._initSelectionMove(), this._initWorksheetChange();
  }
  _initWorksheetChange() {
    this._commandService["onCommandExecuted"](var_core_value_sig2EAD => {
      var_core_value_sig2EAD.id === var_core_value_sigD5F1.id && (this._closePanel(), this._dialogService["close"](dt));
    });
  }
  _initSelectionMove() {
    this.disposeWithMe(var_core_value_sig9B3D(this._sheetSelectionService["selectionMoveEnd$"].pipe(var_core_value_sigD4AA((var_core_value_sig6774, var_core_value_sig340D) => var_core_value_sig6774.length === var_core_value_sig340D.length && !var_core_value_sig340D.some((var_core_value_sigE347, var_core_value_sig3C5B) => !var_core_value_sig567C.equals(var_core_value_sigE347.range, var_core_value_sig6774[var_core_value_sig3C5B].range)))), this._sparklineDataSourceModel["updateConfig$"].pipe(var_core_value_sig4406(500))).subscribe(() => {
      var var_core_value_sig82D4, var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86;
      let var_core_value_sig0B0C = this._sheetSelectionService["getCurrentSelections"]();
      [...this._targetIds, ...this._sourceIds].forEach(var_core_value_sig200B => {
        var_core_value_sig200B && this._markSelectionService["removeShape"](var_core_value_sig200B);
      });
      let var_core_value_sigA39E = var_core_value_sig7E48(this._univerInstanceService);
      if (!var_core_value_sigA39E) {
        this._closePanel();
        return;
      }
      let {
        unitId: var_core_value_sigBBEE,
        subUnitId: var_core_value_sig011D,
        worksheet: var_core_value_sig6167
      } = var_core_value_sigA39E;
      if (!var_core_value_sig0B0C || var_core_value_sig0B0C.length !== 1) {
        this._closePanel();
        return;
      }
      let {
        primary: var_core_value_sig65A1,
        range: var_core_value_sig7F19
      } = var_core_value_sig0B0C[0];
      if (!var_core_value_sig65A1) {
        this._closePanel();
        return;
      }
      let var_core_value_sig7827 = var_core_value_sig65A1.actualRow,
        var_core_value_sig652C = var_core_value_sig65A1.actualColumn,
        var_core_value_sig7E32 = var_core_value_sig6167.getMergedCell(var_core_value_sig65A1 == null ? undefined : var_core_value_sig65A1.actualRow, var_core_value_sig65A1 == null ? undefined : var_core_value_sig65A1.actualColumn);
      if (var_core_value_sig7E32 && (var_core_value_sig7827 = var_core_value_sig7E32.startRow, var_core_value_sig652C = var_core_value_sig7E32.startColumn), ((var_core_value_sig82D4 = this._rangeProtectionCache["getCellInfo"](var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig7827, var_core_value_sig652C)) == null ? undefined : var_core_value_sig82D4[var_core_value_sig7B9E.Edit]) === false) {
        this._closePanel();
        return;
      }
      let var_core_value_sig4C07 = this._sparklineDataSourceModel["getSparklineCache"](),
        var_core_value_sig79AB = var_core_value_sig4C07 == null || (var_core_value_sigBDE4 = var_core_value_sig4C07.sparklineAnchorMap["get"](var_core_value_sigBBEE)) == null ? undefined : var_core_value_sigBDE4.get(var_core_value_sig011D),
        var_core_value_sig8E74 = var_core_value_sig79AB == null || (var_core_value_sig7DF1 = var_core_value_sig79AB.matrix["getValue"](var_core_value_sig7827, var_core_value_sig652C)) == null ? undefined : var_core_value_sig7DF1.groupId;
      if (!var_core_value_sig8E74) {
        this._closePanel();
        return;
      }
      let var_core_value_sig104C = (var_core_value_sigDC86 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig8E74)) == null ? undefined : var_core_value_sigDC86.sparklines;
      var_core_value_sig104C && (Jt(var_core_value_sig104C.getMatrix(), var_core_value_sig6167).forEach(var_core_value_sig3863 => {
        let var_core_value_sigC97C = qt(var_core_value_sig3863, this._markSelectionService, "#49B811", "rgba(73, 184, 17, 0.05)");
        var_core_value_sigC97C && this._sourceIds["push"](var_core_value_sigC97C);
      }), var_core_value_sig104C.forValue((var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E) => {
        let var_core_value_sigA937 = var_core_value_sigE43E;
        if (var_core_value_sigA937 && var_core_value_sig567C.intersects(var_core_value_sig8078(var_core_value_sigC4B1, var_core_value_sig1BD9), var_core_value_sig7F19)) {
          let var_core_value_sig8EA0 = qt(var_core_value_sigA937, this._markSelectionService, "#f00c0c", "rgba(232, 95, 95, 0.05)");
          var_core_value_sig8EA0 && this._sourceIds["push"](var_core_value_sig8EA0);
        }
      }), this._markSelectionService["refreshShapes"]());
    }));
  }
  _closePanel() {
    let var_core_value_sig6709 = this._sidebarService["options"];
    var_core_value_sig6709.id === "SHEET_SPARKLINE_PANEL_ID" && var_core_value_sig6709.visible && this._sidebarService["close"](pt);
  }
};
Kt = Lt([$(0, var_core_value_sig4524(var_core_value_sig4F3C)), $(1, var_core_value_sig4524(var_core_value_sig045E)), $(2, var_core_value_sig4524(var_core_value_sig86D7)), $(3, var_core_value_sig4524(var_core_value_sigBF6D)), $(4, var_core_value_sig4524(var_core_value_sig4002)), $(5, var_core_value_sig4524(var_core_value_sig2407)), $(6, var_core_value_sig4524(var_core_value_sig697A)), $(7, var_core_value_sig4524(var_core_value_sig5C27))], Kt);
function qt(var_core_value_sig424E, var_core_value_sigF481, var_core_value_sigD7F2, var_core_value_sig7CF3) {
  if (var_core_value_sig2829(var_core_value_sig424E)) {
    let var_core_value_sig52CA = var_core_value_sigF481.addShapeWithNoFresh({
      range: var_core_value_sig424E,
      style: {
        fill: var_core_value_sig7CF3,
        strokeWidth: 1,
        stroke: var_core_value_sigD7F2,
        widgets: {}
      },
      primary: null
    }, undefined, -10);
    if (var_core_value_sig52CA) return var_core_value_sig52CA;
  }
}
function Jt(var_core_value_sig9DC6, var_core_value_sig6643) {
  let var_core_value_sig4124 = [],
    var_core_value_sigBF1C = new Set();
  for (let var_core_value_sigC030 in var_core_value_sig9DC6) {
    let var_core_value_sig841D = Number.parseInt(var_core_value_sigC030, 10);
    for (let var_core_value_sigCAD5 in var_core_value_sig9DC6[var_core_value_sig841D]) {
      let var_core_value_sigA6F6 = Number.parseInt(var_core_value_sigCAD5, 10),
        var_core_value_sigCDDA = var_core_value_sig841D + "-" + var_core_value_sigA6F6;
      if (!var_core_value_sigBF1C.has(var_core_value_sigCDDA)) {
        let var_core_value_sigC368 = ox505b47(var_core_value_sig841D, var_core_value_sigA6F6);
        var_core_value_sig4124.push(...var_core_value_sigC368);
      }
    }
  }
  return var_core_value_sig4124;
}
let Yt = class extends var_core_value_sig0442 {
  constructor(var_core_value_sig88F6, var_core_value_sig37DB, var_core_value_sig5542, var_core_value_sigE0A9, var_core_value_sigA73E, var_core_value_sig7620) {
    super(), this._commandService = var_core_value_sig88F6, this._localeService = var_core_value_sig37DB, this._sheetPermissionCheckController = var_core_value_sig5542, this._sheetsSelectionsService = var_core_value_sigE0A9, this._univerInstanceService = var_core_value_sigA73E, this._sparklineDataSourceModel = var_core_value_sig7620, this._initPermissionWithSparkline();
  }
  _initPermissionWithSparkline() {
    this.disposeWithMe(this._commandService["beforeCommandExecuted"](var_core_value_sig90CB => {
      if (var_core_value_sig90CB.id === var_core_value_sig1263.id) {
        let {
            targetRanges: var_core_value_sigE503,
            targetInfo: var_core_value_sig48DD
          } = var_core_value_sig90CB.params,
          {
            unitId: var_core_value_sig5E6A,
            subUnitId: var_core_value_sigB7FC
          } = var_core_value_sig48DD;
        this._sheetPermissionCheckController["permissionCheckWithRanges"]({
          workbookTypes: [var_core_value_sig1660],
          worksheetTypes: [var_core_value_sigEE7B],
          rangeTypes: [var_core_value_sigE4D0]
        }, var_core_value_sigE503, var_core_value_sig5E6A, var_core_value_sigB7FC) || this._sheetPermissionCheckController["blockExecuteWithoutPermission"](this._localeService["t"]("sheets-sparkline-ui.permission.editErr"));
      } else {
        if (var_core_value_sig90CB.id === var_core_value_sig3685.id) {
          let {
              isChangeDataSource: var_core_value_sigE243,
              changeDataSourceInfo: var_core_value_sig74A8
            } = var_core_value_sig90CB.params,
            var_core_value_sig21B2 = var_core_value_sig7E48(this._univerInstanceService);
          if (!var_core_value_sig21B2) return;
          let var_core_value_sigDE08 = this._sheetsSelectionsService["getCurrentSelections"]().map(var_core_value_sigAD56 => var_core_value_sigAD56.range),
            {
              unitId: var_core_value_sigACCB,
              subUnitId: var_core_value_sig7F33
            } = var_core_value_sig21B2;
          if (var_core_value_sigE243) {
            if (var_core_value_sig74A8) {
              let {
                  targetRanges: var_core_value_sigE9A7,
                  sourceRanges: var_core_value_sigBECE,
                  resetType: var_core_value_sig1B22
                } = var_core_value_sig74A8,
                var_core_value_sig7F72 = var_core_value_sig1B22 === "item" ? var_core_value_sigE9A7 : [...var_core_value_sigBECE, ...var_core_value_sigE9A7];
              this._sheetPermissionCheckController["permissionCheckWithRanges"]({
                workbookTypes: [var_core_value_sig1660],
                worksheetTypes: [var_core_value_sigEE7B],
                rangeTypes: [var_core_value_sigE4D0]
              }, var_core_value_sig7F72, var_core_value_sigACCB, var_core_value_sig7F33) || this._sheetPermissionCheckController["blockExecuteWithoutPermission"](this._localeService["t"]("sheets-sparkline-ui.permission.editErr"));
            }
          } else {
            let var_core_value_sigDB4A = new Set();
            var_core_value_sigDE08.forEach(var_core_value_sig7B2A => {
              var_core_value_sig639A.foreach(var_core_value_sig7B2A, (var_core_value_sigBB00, var_core_value_sig7E54) => {
                let var_core_value_sig9A8D = this._sparklineDataSourceModel["getSparkline"](var_core_value_sigACCB, var_core_value_sig7F33, var_core_value_sigBB00, var_core_value_sig7E54);
                var_core_value_sig9A8D && this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigACCB, var_core_value_sig7F33, var_core_value_sig9A8D) && var_core_value_sigDB4A.add(var_core_value_sig9A8D);
              });
            });
            let var_core_value_sig6418 = [];
            var_core_value_sigDB4A.forEach(var_core_value_sig06CD => {
              let var_core_value_sigA5F1 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sigACCB, var_core_value_sig7F33, var_core_value_sig06CD);
              var_core_value_sigA5F1 && var_core_value_sig6418.push(...Jt(var_core_value_sigA5F1.sparklines["getMatrix"](), var_core_value_sig21B2.worksheet));
            }), this._sheetPermissionCheckController["permissionCheckWithRanges"]({
              workbookTypes: [var_core_value_sig1660],
              worksheetTypes: [var_core_value_sigEE7B],
              rangeTypes: [var_core_value_sigE4D0]
            }, var_core_value_sig6418, var_core_value_sigACCB, var_core_value_sig7F33) || this._sheetPermissionCheckController["blockExecuteWithoutPermission"](this._localeService["t"]("sheets-sparkline-ui.permission.editErr"));
          }
        } else {
          if (var_core_value_sig90CB.id === var_core_value_sig934F.id) {
            let {
              isSingle: var_core_value_sig1896
            } = var_core_value_sig90CB.params;
            if (var_core_value_sig1896) this._sheetPermissionCheckController["permissionCheckWithRanges"]({
              workbookTypes: [var_core_value_sig1660],
              worksheetTypes: [var_core_value_sigEE7B],
              rangeTypes: [var_core_value_sigE4D0]
            }) || this._sheetPermissionCheckController["blockExecuteWithoutPermission"](this._localeService["t"]("sheets-sparkline-ui.permission.editErr"));else {
              let var_core_value_sig97A2 = var_core_value_sig7E48(this._univerInstanceService);
              if (!var_core_value_sig97A2) return;
              let var_core_value_sig07E9 = this._sheetsSelectionsService["getCurrentSelections"]().map(var_core_value_sigC259 => var_core_value_sigC259.range),
                {
                  unitId: var_core_value_sig4F59,
                  subUnitId: var_core_value_sigF564
                } = var_core_value_sig97A2,
                var_core_value_sig8CFA = new Set();
              var_core_value_sig07E9.forEach(var_core_value_sig9C9F => {
                var_core_value_sig639A.foreach(var_core_value_sig9C9F, (var_core_value_sigC80B, var_core_value_sig284F) => {
                  let var_core_value_sigE154 = this._sparklineDataSourceModel["getSparkline"](var_core_value_sig4F59, var_core_value_sigF564, var_core_value_sigC80B, var_core_value_sig284F);
                  var_core_value_sigE154 && this._sparklineDataSourceModel["getSparklineById"](var_core_value_sig4F59, var_core_value_sigF564, var_core_value_sigE154) && var_core_value_sig8CFA.add(var_core_value_sigE154);
                });
              });
              let var_core_value_sig2E11 = [];
              var_core_value_sig8CFA.forEach(var_core_value_sigFDEA => {
                let var_core_value_sig86D0 = this._sparklineDataSourceModel["getSparklineById"](var_core_value_sig4F59, var_core_value_sigF564, var_core_value_sigFDEA);
                var_core_value_sig86D0 && var_core_value_sig2E11.push(...Jt(var_core_value_sig86D0.sparklines["getMatrix"](), var_core_value_sig97A2.worksheet));
              }), this._sheetPermissionCheckController["permissionCheckWithRanges"]({
                workbookTypes: [var_core_value_sig1660],
                worksheetTypes: [var_core_value_sigEE7B],
                rangeTypes: [var_core_value_sigE4D0]
              }, var_core_value_sig2E11, var_core_value_sig4F59, var_core_value_sigF564) || this._sheetPermissionCheckController["blockExecuteWithoutPermission"](this._localeService["t"]("sheets-sparkline-ui.permission.editErr"));
            }
          }
        }
      }
    }));
  }
};
Yt = Lt([$(0, var_core_value_sig4524(var_core_value_sig697A)), $(1, var_core_value_sig4524(var_core_value_sig9678)), $(2, var_core_value_sig4524(var_core_value_sigBC19)), $(3, var_core_value_sig4524(var_core_value_sig4F3C)), $(4, var_core_value_sig4524(var_core_value_sig045E)), $(5, var_core_value_sig4524(var_core_value_sig86D7))], Yt);
let Xt = class extends var_core_value_sig0442 {
  constructor(var_core_value_sigB9FC, var_core_value_sig5055) {
    super(), this._sheetPrintInterceptorService = var_core_value_sigB9FC, this._sparklineDataSourceModel = var_core_value_sig5055, this._init();
  }
  _init() {
    this.disposeWithMe(this._sheetPrintInterceptorService["interceptor"].intercept(this._sheetPrintInterceptorService["interceptor"].getInterceptPoints().PRINTING_RANGE, {
      handler: (var_core_value_sigBDF5, var_core_value_sigACC6, var_core_value_sig1614) => {
        let {
            unitId: var_core_value_sig85C3,
            subUnitId: var_core_value_sigB996
          } = var_core_value_sigACC6,
          var_core_value_sig4BBA = this._sparklineDataSourceModel["getSubUnitSparkline"](var_core_value_sig85C3, var_core_value_sigB996),
          var_core_value_sig6201 = var_core_value_sigBDF5;
        return var_core_value_sig4BBA && Array.from(var_core_value_sig4BBA.values()).forEach(var_core_value_sig9CD9 => {
          let var_core_value_sigFD0C = var_core_value_sig9CD9.sparklines["getDataRange"]();
          var_core_value_sig6201 = var_core_value_sig6201 && var_core_value_sigFD0C.endRow >= 0 ? var_core_value_sig567C.realUnion(var_core_value_sig6201, var_core_value_sigFD0C) : var_core_value_sigFD0C;
        }), var_core_value_sig1614(var_core_value_sig6201);
      }
    }));
  }
};
Xt = Lt([$(0, var_core_value_sig4524(var_core_value_sig5FD0)), $(1, var_core_value_sig4524(var_core_value_sig86D7))], Xt);
const Zt = (var_core_value_sigEEEF, var_core_value_sig9A01, var_core_value_sig674F, var_core_value_sigC8F6, var_core_value_sig8A26) => {
    var var_core_value_sigD073, var_core_value_sigF631, var_core_value_sig2278, var_core_value_sig7053, var_core_value_sig52F1, var_core_value_sig1E74, var_core_value_sig1E84, var_core_value_sig133B, var_core_value_sig69B8, var_core_value_sig983D;
    let {
      startX: var_core_value_sig9A03,
      startY: var_core_value_sig3363,
      endX: var_core_value_sigF64A,
      endY: var_core_value_sig25EC
    } = var_core_value_sig9A01.mergeInfo;
    if (!var_core_value_sigC8F6) return;
    let {
        max: var_core_value_sigA790,
        min: var_core_value_sig9A5E,
        highIndex: var_core_value_sig01B9,
        lowIndex: var_core_value_sigD6A9,
        negativeIndexes: var_core_value_sig0FCF,
        data: var_core_value_sigCF96
      } = var_core_value_sigC8F6,
      var_core_value_sigC4E9 = var_core_value_sigF64A - var_core_value_sig9A03 - 8,
      var_core_value_sigF612 = var_core_value_sig25EC - var_core_value_sig3363 - 8,
      var_core_value_sigAA6C = var_core_value_sig9A03 + 4,
      var_core_value_sig8BFA = var_core_value_sig3363 + 4,
      var_core_value_sig236B = ((var_core_value_sigD073 = var_core_value_sig674F.extremumMax) == null ? undefined : var_core_value_sigD073.type) ?? var_core_value_sig431B.SELF_EXTREMUM,
      var_core_value_sig1951 = ((var_core_value_sigF631 = var_core_value_sig674F.extremumMin) == null ? undefined : var_core_value_sigF631.type) ?? var_core_value_sig431B.SELF_EXTREMUM,
      var_core_value_sigFEA0 = (var_core_value_sig8A26 == null ? undefined : var_core_value_sig8A26.showMax) ?? var_core_value_sigA790,
      var_core_value_sig931A = (var_core_value_sig8A26 == null ? undefined : var_core_value_sig8A26.showMin) ?? var_core_value_sig9A5E,
      var_core_value_sigEE7D = var_core_value_sig236B === var_core_value_sig431B.SELF_EXTREMUM ? var_core_value_sigA790 : var_core_value_sigFEA0,
      var_core_value_sig3585 = var_core_value_sig1951 === var_core_value_sig431B.SELF_EXTREMUM ? var_core_value_sig9A5E : var_core_value_sig931A,
      var_core_value_sig31A8 = false,
      var_core_value_sigA4DA = var_core_value_sigCF96[var_core_value_sig01B9];
    typeof var_core_value_sigA4DA == "number" && var_core_value_sigA4DA < var_core_value_sig3585 && (var_core_value_sig31A8 = true);
    let var_core_value_sig6FC0 = false,
      var_core_value_sig6217 = var_core_value_sigCF96[var_core_value_sigD6A9];
    if (typeof var_core_value_sig6217 == "number" && var_core_value_sig6217 > var_core_value_sigEE7D && (var_core_value_sig6FC0 = true), var_core_value_sig3585 > var_core_value_sigEE7D || var_core_value_sig31A8 || var_core_value_sig6FC0) return;
    let var_core_value_sigB805 = var_core_value_sigEE7D === var_core_value_sig3585,
      var_core_value_sig4FAE = var_core_value_sigEE7D - var_core_value_sig3585,
      var_core_value_sig1FCC = var_core_value_sigC4E9 / (var_core_value_sigCF96.length - 1),
      var_core_value_sigB7F9 = ((var_core_value_sig2278 = var_core_value_sig674F.axis) == null ? undefined : var_core_value_sig2278.reverse) ?? false,
      var_core_value_sigB1A2 = [];
    var_core_value_sigEEEF.save(), var_core_value_sigEEEF.beginPath(), var_core_value_sigEEEF.rect(var_core_value_sig9A03 + 4, var_core_value_sig3363 + 4, var_core_value_sigC4E9, var_core_value_sigF612), var_core_value_sigEEEF.clip(), var_core_value_sigEEEF.beginPath();
    let var_core_value_sig526D = null;
    for (let var_core_value_sig3801 = 0; var_core_value_sig3801 < var_core_value_sigCF96.length; var_core_value_sig3801++) {
      let var_core_value_sig5151 = var_core_value_sigCF96[var_core_value_sig3801];
      if (var_core_value_sig5151 === "u-spacing") {
        var_core_value_sig526D = null;
        continue;
      }
      if (var_core_value_sig5151 === "u-connect") continue;
      let var_core_value_sigB542 = {
        x: var_core_value_sigB7F9 ? var_core_value_sigF64A - 4 - var_core_value_sig3801 * var_core_value_sig1FCC : var_core_value_sigAA6C + var_core_value_sig3801 * var_core_value_sig1FCC,
        y: var_core_value_sigB805 ? var_core_value_sig8BFA + var_core_value_sigF612 / 2 : var_core_value_sig8BFA + var_core_value_sigF612 - (Number(var_core_value_sig5151) - var_core_value_sig3585) / var_core_value_sig4FAE * var_core_value_sigF612
      };
      var_core_value_sigB1A2.push(var_core_value_sigB542), var_core_value_sig526D ? (var_core_value_sigEEEF.moveTo(var_core_value_sig526D.x, var_core_value_sig526D.y), var_core_value_sigEEEF.lineTo(var_core_value_sigB542.x, var_core_value_sigB542.y)) : var_core_value_sigEEEF.moveTo(var_core_value_sigB542.x, var_core_value_sigB542.y), var_core_value_sig526D = var_core_value_sigB542;
    }
    let var_core_value_sigBDB5 = var_core_value_sig674F.themeType ?? var_core_value_sig2E04.STANDARD,
      var_core_value_sig59CE = var_core_value_sig674F.seriesColor ?? ((var_core_value_sig7053 = var_core_value_sig87E2[var_core_value_sigBDB5]) == null ? undefined : var_core_value_sig7053[0]) ?? var_core_value_sig87E2.standard[0],
      var_core_value_sig3AD7 = var_core_value_sig8A26 == null ? undefined : var_core_value_sig8A26.startGradient,
      var_core_value_sig04E4 = var_core_value_sig8A26 == null ? undefined : var_core_value_sig8A26.endGradient;
    var_core_value_sigEEEF.strokeStyle = var_core_value_sig59CE, var_core_value_sigEEEF.lineWidth = var_core_value_sig674F.lineWidth || 2, var_core_value_sigEEEF.lineJoin = "round", var_core_value_sigEEEF.stroke();
    let var_core_value_sigD8F0 = [],
      var_core_value_sig1475 = [];
    if (var_core_value_sig674F.showGradient && var_core_value_sig3AD7 && var_core_value_sig04E4) {
      let var_core_value_sig45F0 = var_core_value_sigEEEF.createLinearGradient(0, var_core_value_sig8BFA, 0, var_core_value_sig8BFA + var_core_value_sigF612);
      var_core_value_sig45F0.addColorStop(0, var_core_value_sig3AD7), var_core_value_sig45F0.addColorStop(1, var_core_value_sig04E4), var_core_value_sigEEEF.beginPath();
      let var_core_value_sigBC91 = [],
        var_core_value_sigCB88 = null,
        var_core_value_sig8D65 = 0;
      for (let var_core_value_sigBB6C = 0; var_core_value_sigBB6C <= var_core_value_sigCF96.length; var_core_value_sigBB6C++) {
        let var_core_value_sig849B = var_core_value_sigCF96[var_core_value_sigBB6C],
          var_core_value_sig5F1A = var_core_value_sig849B === "u-spacing",
          var_core_value_sigB455 = var_core_value_sig849B === "u-connect",
          var_core_value_sig5241 = var_core_value_sigBB6C === var_core_value_sigCF96.length;
        var_core_value_sig849B === var_core_value_sigA4DA && var_core_value_sigD8F0.push(var_core_value_sigBB6C), var_core_value_sig849B === var_core_value_sig6217 && var_core_value_sig1475.push(var_core_value_sigBB6C), var_core_value_sig5F1A || var_core_value_sig5241 ? var_core_value_sigCB88 !== null && (var_core_value_sigBC91.push([var_core_value_sigCB88, var_core_value_sig8D65 - 1]), var_core_value_sigCB88 = null) : var_core_value_sigB455 || (var_core_value_sigCB88 === null && (var_core_value_sigCB88 = var_core_value_sig8D65), var_core_value_sig8D65++);
      }
      var_core_value_sigBC91.forEach(([var_core_value_sigE2BF, var_core_value_sigB8C7]) => {
        let var_core_value_sigA56E = var_core_value_sigB1A2[var_core_value_sigE2BF],
          var_core_value_sig1998 = var_core_value_sigB1A2[var_core_value_sigB8C7];
        if (!(!var_core_value_sigA56E || !var_core_value_sig1998 || var_core_value_sigE2BF === var_core_value_sigB8C7)) {
          var_core_value_sigEEEF.beginPath(), var_core_value_sigEEEF.moveTo(var_core_value_sigA56E.x, var_core_value_sigA56E.y);
          for (let var_core_value_sig0C53 = var_core_value_sigE2BF; var_core_value_sig0C53 <= var_core_value_sigB8C7; var_core_value_sig0C53++) {
            let var_core_value_sig0285 = var_core_value_sigB1A2[var_core_value_sig0C53];
            var_core_value_sig0285 && var_core_value_sigEEEF.lineTo(var_core_value_sig0285.x, var_core_value_sig0285.y);
          }
          var_core_value_sigEEEF.lineTo(var_core_value_sigB1A2[var_core_value_sigB8C7].x, var_core_value_sig8BFA + var_core_value_sigF612), var_core_value_sigEEEF.lineTo(var_core_value_sigB1A2[var_core_value_sigE2BF].x, var_core_value_sig8BFA + var_core_value_sigF612), var_core_value_sigEEEF.closePath(), var_core_value_sigEEEF.fillStyle = var_core_value_sig45F0, var_core_value_sigEEEF.fill();
        }
      });
    } else for (let var_core_value_sig8122 = 0; var_core_value_sig8122 <= var_core_value_sigCF96.length; var_core_value_sig8122++) {
      let var_core_value_sigFF19 = var_core_value_sigCF96[var_core_value_sig8122];
      var_core_value_sigFF19 === var_core_value_sigA4DA && var_core_value_sigD8F0.push(var_core_value_sig8122), var_core_value_sigFF19 === var_core_value_sig6217 && var_core_value_sig1475.push(var_core_value_sig8122);
    }
    let var_core_value_sig08B7 = "rgb(64,\x20159,\x2017)";
    if ((var_core_value_sig52F1 = var_core_value_sig674F.points) != null && (var_core_value_sig52F1 = var_core_value_sig52F1.markersPoint) != null && var_core_value_sig52F1.visible && (var_core_value_sigEEEF.fillStyle = var_core_value_sig674F.points["markersPoint"].color || var_core_value_sig08B7, var_core_value_sigB1A2.forEach(var_core_value_sigEDC6 => {
      var_core_value_sigEEEF.beginPath(), var_core_value_sigEEEF.arc(var_core_value_sigEDC6.x, var_core_value_sigEDC6.y, 2, 0, Math.PI * 2), var_core_value_sigEEEF.fill();
    })), (var_core_value_sig1E74 = var_core_value_sig674F.points) != null && (var_core_value_sig1E74 = var_core_value_sig1E74.firstPoint) != null && var_core_value_sig1E74.visible) {
      var_core_value_sigEEEF.fillStyle = var_core_value_sig674F.points["firstPoint"].color || var_core_value_sig08B7;
      let var_core_value_sig611A = var_core_value_sigB1A2[0];
      var_core_value_sig611A && (var_core_value_sigEEEF.beginPath(), var_core_value_sigEEEF.arc(var_core_value_sig611A.x, var_core_value_sig611A.y, 2, 0, Math.PI * 2), var_core_value_sigEEEF.fill());
    }
    if ((var_core_value_sig1E84 = var_core_value_sig674F.points) != null && (var_core_value_sig1E84 = var_core_value_sig1E84.lastPoint) != null && var_core_value_sig1E84.visible) {
      var_core_value_sigEEEF.fillStyle = var_core_value_sig674F.points["lastPoint"].color || var_core_value_sig08B7;
      let var_core_value_sig6BD9 = var_core_value_sigB1A2[var_core_value_sigB1A2.length - 1];
      var_core_value_sig6BD9 && (var_core_value_sigEEEF.beginPath(), var_core_value_sigEEEF.arc(var_core_value_sig6BD9.x, var_core_value_sig6BD9.y, 2, 0, Math.PI * 2), var_core_value_sigEEEF.fill());
    }
    (var_core_value_sig133B = var_core_value_sig674F.points) != null && (var_core_value_sig133B = var_core_value_sig133B.highPoint) != null && var_core_value_sig133B.visible && (var_core_value_sigEEEF.fillStyle = var_core_value_sig674F.points["highPoint"].color || var_core_value_sig08B7, var_core_value_sigD8F0.forEach(var_core_value_sig7E56 => {
      let var_core_value_sig4161 = var_core_value_sigB1A2[var_core_value_sig7E56];
      var_core_value_sig4161 && (var_core_value_sigEEEF.beginPath(), var_core_value_sigEEEF.arc(var_core_value_sig4161.x, var_core_value_sig4161.y, 2, 0, Math.PI * 2), var_core_value_sigEEEF.fill());
    })), (var_core_value_sig69B8 = var_core_value_sig674F.points) != null && (var_core_value_sig69B8 = var_core_value_sig69B8.lowPoint) != null && var_core_value_sig69B8.visible && (var_core_value_sigEEEF.fillStyle = var_core_value_sig674F.points["lowPoint"].color || var_core_value_sig08B7, var_core_value_sig1475.forEach(var_core_value_sig7580 => {
      let var_core_value_sig1F18 = var_core_value_sigB1A2[var_core_value_sig7580];
      var_core_value_sig1F18 && (var_core_value_sigEEEF.beginPath(), var_core_value_sigEEEF.arc(var_core_value_sig1F18.x, var_core_value_sig1F18.y, 2, 0, Math.PI * 2), var_core_value_sigEEEF.fill());
    })), (var_core_value_sig983D = var_core_value_sig674F.points) != null && (var_core_value_sig983D = var_core_value_sig983D.negativePoint) != null && var_core_value_sig983D.visible && (var_core_value_sigEEEF.fillStyle = var_core_value_sig674F.points["negativePoint"].color || var_core_value_sig08B7, var_core_value_sig0FCF.forEach(var_core_value_sigD5A0 => {
      let var_core_value_sig81B2 = var_core_value_sigB1A2[var_core_value_sigD5A0];
      var_core_value_sig81B2 && (var_core_value_sigEEEF.beginPath(), var_core_value_sigEEEF.arc(var_core_value_sig81B2.x, var_core_value_sig81B2.y, 2, 0, Math.PI * 2), var_core_value_sigEEEF.fill());
    }));
    let var_core_value_sig2008 = true;
    if (var_core_value_sigB805) {
      var var_core_value_sig496B;
      var_core_value_sig2008 = !!((var_core_value_sig496B = var_core_value_sig674F.axis) != null && var_core_value_sig496B.visible);
    } else {
      var var_core_value_sig7161;
      var_core_value_sig2008 = !!(var_core_value_sig3585 <= 0 && (var_core_value_sig7161 = var_core_value_sig674F.axis) != null && var_core_value_sig7161.visible);
    }
    if (var_core_value_sig2008) {
      var var_core_value_sig2AB8;
      let var_core_value_sigA0A5 = var_core_value_sig8BFA;
      var_core_value_sigB805 ? var_core_value_sig3585 === 0 ? var_core_value_sigA0A5 = var_core_value_sig8BFA + var_core_value_sigF612 / 2 : var_core_value_sig3585 > 0 && (var_core_value_sigA0A5 = var_core_value_sig8BFA + var_core_value_sigF612) : var_core_value_sigA0A5 = var_core_value_sig8BFA + var_core_value_sigF612 - (0 - var_core_value_sig3585) / var_core_value_sig4FAE * var_core_value_sigF612, var_core_value_sigEEEF.beginPath(), var_core_value_sigEEEF.moveTo(var_core_value_sigAA6C, var_core_value_sigA0A5), var_core_value_sigEEEF.lineTo(var_core_value_sigAA6C + var_core_value_sigC4E9, var_core_value_sigA0A5), var_core_value_sigEEEF.strokeStyle = ((var_core_value_sig2AB8 = var_core_value_sig674F.axis) == null ? undefined : var_core_value_sig2AB8.color) ?? "rgb(0, 0, 0)", var_core_value_sigEEEF.lineWidth = 1, var_core_value_sigEEEF.stroke();
    }
    var_core_value_sigEEEF.restore();
  },
  Qt = (var_core_value_sig3FCF, var_core_value_sig675A, var_core_value_sig837F, var_core_value_sig9D6E, var_core_value_sigB205) => {
    var var_core_value_sigBF78, var_core_value_sig8AF3, var_core_value_sigA0CC, var_core_value_sigB3A1;
    let {
      startX: var_core_value_sig1FB9,
      startY: var_core_value_sig53A9,
      endX: var_core_value_sigDACD,
      endY: var_core_value_sig691E
    } = var_core_value_sig675A;
    if (!var_core_value_sig9D6E) return;
    let {
        max: var_core_value_sigD6D6,
        min: var_core_value_sig0347,
        highIndex: var_core_value_sig52A3,
        lowIndex: var_core_value_sigAD91,
        negativeIndexes: var_core_value_sigF64E,
        data: var_core_value_sig9B3D1
      } = var_core_value_sig9D6E,
      var_core_value_sigB217 = var_core_value_sigDACD - var_core_value_sig1FB9 - 8,
      var_core_value_sig1FE6 = var_core_value_sig691E - var_core_value_sig53A9 - 8,
      var_core_value_sig2471 = var_core_value_sig1FB9 + 4,
      var_core_value_sigD1FC = var_core_value_sig53A9 + 4,
      var_core_value_sigE2F9 = ((var_core_value_sigBF78 = var_core_value_sig837F.extremumMax) == null ? undefined : var_core_value_sigBF78.type) ?? var_core_value_sig431B.SELF_EXTREMUM,
      var_core_value_sigD689 = ((var_core_value_sig8AF3 = var_core_value_sig837F.extremumMin) == null ? undefined : var_core_value_sig8AF3.type) ?? var_core_value_sig431B.SELF_EXTREMUM,
      var_core_value_sig7AE3 = (var_core_value_sigB205 == null ? undefined : var_core_value_sigB205.showMax) ?? var_core_value_sigD6D6,
      var_core_value_sig1EB3 = (var_core_value_sigB205 == null ? undefined : var_core_value_sigB205.showMin) ?? var_core_value_sig0347,
      var_core_value_sigE120 = var_core_value_sigE2F9 === var_core_value_sig431B.SELF_EXTREMUM ? var_core_value_sigD6D6 : var_core_value_sig7AE3,
      var_core_value_sigD6E7 = var_core_value_sigD689 === var_core_value_sig431B.SELF_EXTREMUM ? var_core_value_sig0347 : var_core_value_sig1EB3,
      var_core_value_sig3669 = var_core_value_sigE120 - var_core_value_sigD6E7,
      var_core_value_sig5CBC = var_core_value_sigB217,
      var_core_value_sig20BE = var_core_value_sigE120 === var_core_value_sigD6E7,
      var_core_value_sig6BD0 = var_core_value_sig5CBC / (var_core_value_sig9B3D1.length * 1.2),
      var_core_value_sig8C15 = var_core_value_sig6BD0 * 0.2,
      var_core_value_sig6DF7 = ((var_core_value_sigA0CC = var_core_value_sig837F.axis) == null ? undefined : var_core_value_sigA0CC.reverse) ?? false,
      var_core_value_sigB411 = var_core_value_sig837F.showRadius ?? false,
      var_core_value_sigA81B = 0;
    var_core_value_sig20BE || (var_core_value_sigA81B = var_core_value_sigD6E7 >= 0 ? var_core_value_sigD6E7 : var_core_value_sigE120 <= 0 ? var_core_value_sigE120 : 0);
    let var_core_value_sigFE8D = var_core_value_sigD1FC + var_core_value_sig1FE6;
    var_core_value_sig20BE ? var_core_value_sigD6E7 === 0 ? var_core_value_sigFE8D = var_core_value_sigD1FC + var_core_value_sig1FE6 / 2 : var_core_value_sigD6E7 > 0 ? var_core_value_sigFE8D = var_core_value_sigD1FC + var_core_value_sig1FE6 : var_core_value_sigD6E7 < 0 && (var_core_value_sigFE8D = var_core_value_sigD1FC) : var_core_value_sigFE8D = var_core_value_sigD6E7 >= 0 ? var_core_value_sigD1FC + var_core_value_sig1FE6 : var_core_value_sigE120 <= 0 ? var_core_value_sigD1FC : var_core_value_sigD1FC + var_core_value_sig1FE6 - (0 - var_core_value_sigD6E7) / var_core_value_sig3669 * var_core_value_sig1FE6, var_core_value_sig3FCF.save(), var_core_value_sig3FCF.beginPath(), var_core_value_sig3FCF.rect(var_core_value_sig1FB9, var_core_value_sig53A9, var_core_value_sigDACD - var_core_value_sig1FB9, var_core_value_sig691E - var_core_value_sig53A9), var_core_value_sig3FCF.clip();
    let var_core_value_sig8595 = var_core_value_sig837F.themeType ?? var_core_value_sig2E04.STANDARD,
      var_core_value_sigF8DE = var_core_value_sig837F.seriesColor ?? ((var_core_value_sigB3A1 = var_core_value_sig87E2[var_core_value_sig8595]) == null ? undefined : var_core_value_sigB3A1[0]) ?? var_core_value_sig87E2.standard[0],
      var_core_value_sigFE76 = var_core_value_sig9B3D1[var_core_value_sig52A3],
      var_core_value_sig84C8 = var_core_value_sig9B3D1[var_core_value_sigAD91];
    var_core_value_sig9B3D1.forEach((var_core_value_sig10AA, var_core_value_sigE6D0) => {
      var var_core_value_sig8E91, var_core_value_sig00BE, var_core_value_sig7BB5, var_core_value_sig6AAD, var_core_value_sig1157;
      if (typeof var_core_value_sig10AA == "string" || var_core_value_sig10AA === undefined) return;
      let var_core_value_sigA694 = var_core_value_sig6DF7 ? var_core_value_sigDACD - 4 - (var_core_value_sigE6D0 + 1) * (var_core_value_sig6BD0 + var_core_value_sig8C15) + var_core_value_sig8C15 / 2 : var_core_value_sig2471 + var_core_value_sigE6D0 * (var_core_value_sig6BD0 + var_core_value_sig8C15) + var_core_value_sig8C15 / 2,
        var_core_value_sig18E01 = 0;
      var_core_value_sig20BE ? var_core_value_sigD6E7 !== 0 && (var_core_value_sig18E01 = var_core_value_sig1FE6) : var_core_value_sig18E01 = var_core_value_sig10AA < var_core_value_sigD6E7 ? 0 : var_core_value_sig10AA > var_core_value_sigE120 ? var_core_value_sig1FE6 : var_core_value_sig10AA === 0 ? 0 : Math.max(Math.abs(var_core_value_sig10AA - var_core_value_sigA81B) / var_core_value_sig3669 * var_core_value_sig1FE6, 2);
      let var_core_value_sig0428 = var_core_value_sigF8DE;
      (var_core_value_sig8E91 = var_core_value_sig837F.points) != null && (var_core_value_sig8E91 = var_core_value_sig8E91.firstPoint) != null && var_core_value_sig8E91.visible && var_core_value_sigE6D0 === 0 && (var_core_value_sig0428 = var_core_value_sig837F.points["firstPoint"].color || var_core_value_sigF8DE), (var_core_value_sig00BE = var_core_value_sig837F.points) != null && (var_core_value_sig00BE = var_core_value_sig00BE.lastPoint) != null && var_core_value_sig00BE.visible && var_core_value_sigE6D0 === var_core_value_sig9B3D1.length - 1 && (var_core_value_sig0428 = var_core_value_sig837F.points["lastPoint"].color || var_core_value_sigF8DE), (var_core_value_sig7BB5 = var_core_value_sig837F.points) != null && (var_core_value_sig7BB5 = var_core_value_sig7BB5.highPoint) != null && var_core_value_sig7BB5.visible && var_core_value_sig10AA === var_core_value_sigFE76 && (var_core_value_sig0428 = var_core_value_sig837F.points["highPoint"].color || var_core_value_sigF8DE), (var_core_value_sig6AAD = var_core_value_sig837F.points) != null && (var_core_value_sig6AAD = var_core_value_sig6AAD.lowPoint) != null && var_core_value_sig6AAD.visible && var_core_value_sig10AA === var_core_value_sig84C8 && (var_core_value_sig0428 = var_core_value_sig837F.points["lowPoint"].color || var_core_value_sigF8DE), (var_core_value_sig1157 = var_core_value_sig837F.points) != null && (var_core_value_sig1157 = var_core_value_sig1157.negativePoint) != null && var_core_value_sig1157.visible && var_core_value_sigF64E.includes(var_core_value_sigE6D0) && (var_core_value_sig0428 = var_core_value_sig837F.points["negativePoint"].color || var_core_value_sigF8DE), var_core_value_sig3FCF.fillStyle = var_core_value_sig0428, var_core_value_sig6BD0 >= 4 && var_core_value_sigB411 && var_core_value_sig18E01 >= 2 ? (var_core_value_sig3FCF.beginPath(), var_core_value_sig10AA >= var_core_value_sigA81B ? (var_core_value_sig3FCF.moveTo(var_core_value_sigA694, var_core_value_sigFE8D - var_core_value_sig18E01 + 2), var_core_value_sig3FCF.arcTo(var_core_value_sigA694, var_core_value_sigFE8D - var_core_value_sig18E01, var_core_value_sigA694 + var_core_value_sig6BD0, var_core_value_sigFE8D - var_core_value_sig18E01, 2), var_core_value_sig3FCF.arcTo(var_core_value_sigA694 + var_core_value_sig6BD0, var_core_value_sigFE8D - var_core_value_sig18E01, var_core_value_sigA694 + var_core_value_sig6BD0, var_core_value_sigFE8D - var_core_value_sig18E01 + 2, 2), var_core_value_sig3FCF.lineTo(var_core_value_sigA694 + var_core_value_sig6BD0, var_core_value_sigFE8D), var_core_value_sig3FCF.lineTo(var_core_value_sigA694, var_core_value_sigFE8D), var_core_value_sig3FCF.closePath(), var_core_value_sig3FCF.fill()) : (var_core_value_sig3FCF.moveTo(var_core_value_sigA694, var_core_value_sigFE8D), var_core_value_sig3FCF.lineTo(var_core_value_sigA694 + var_core_value_sig6BD0, var_core_value_sigFE8D), var_core_value_sig3FCF.arcTo(var_core_value_sigA694 + var_core_value_sig6BD0, var_core_value_sigFE8D + var_core_value_sig18E01, var_core_value_sigA694 + var_core_value_sig6BD0 - 2, var_core_value_sigFE8D + var_core_value_sig18E01, 2), var_core_value_sig3FCF.arcTo(var_core_value_sigA694, var_core_value_sigFE8D + var_core_value_sig18E01, var_core_value_sigA694, var_core_value_sigFE8D + var_core_value_sig18E01 - 2, 2), var_core_value_sig3FCF.lineTo(var_core_value_sigA694, var_core_value_sigFE8D), var_core_value_sig3FCF.closePath(), var_core_value_sig3FCF.fill())) : var_core_value_sig10AA >= var_core_value_sigA81B ? var_core_value_sig3FCF.fillRect(var_core_value_sigA694, var_core_value_sigFE8D - var_core_value_sig18E01, var_core_value_sig6BD0, var_core_value_sig18E01) : var_core_value_sig3FCF.fillRect(var_core_value_sigA694, var_core_value_sigFE8D, var_core_value_sig6BD0, var_core_value_sig18E01);
    });
    let var_core_value_sig80C0 = true;
    if (var_core_value_sig20BE) {
      var var_core_value_sig22B4;
      var_core_value_sig80C0 = !!((var_core_value_sig22B4 = var_core_value_sig837F.axis) != null && var_core_value_sig22B4.visible);
    } else {
      var var_core_value_sigBB37;
      var_core_value_sig80C0 = !!((var_core_value_sigBB37 = var_core_value_sig837F.axis) != null && var_core_value_sigBB37.visible && !(var_core_value_sigE120 < 0 || var_core_value_sigD6E7 > 0));
    }
    if (var_core_value_sig80C0) {
      var var_core_value_sig0C51;
      var_core_value_sig3FCF.beginPath(), var_core_value_sig3FCF.moveTo(var_core_value_sig2471, var_core_value_sigFE8D), var_core_value_sig3FCF.lineTo(var_core_value_sig2471 + var_core_value_sigB217, var_core_value_sigFE8D), var_core_value_sig3FCF.strokeStyle = ((var_core_value_sig0C51 = var_core_value_sig837F.axis) == null ? undefined : var_core_value_sig0C51.color) ?? "rgb(0, 0, 0)", var_core_value_sig3FCF.lineWidth = 1, var_core_value_sig3FCF.stroke();
    }
    var_core_value_sig3FCF.restore();
  },
  $t = (var_core_value_sigADA4, var_core_value_sig0E48, var_core_value_sig495B, var_core_value_sig310C, var_core_value_sig759E) => {
    var var_core_value_sig6C80, var_core_value_sig6B99, var_core_value_sig6ADC;
    let {
      startX: var_core_value_sig41AD,
      startY: var_core_value_sigDBC2,
      endX: var_core_value_sig7739,
      endY: var_core_value_sig4040
    } = var_core_value_sig0E48;
    if (!var_core_value_sig310C) return;
    let {
        highIndex: var_core_value_sig1AAA,
        lowIndex: var_core_value_sig58DB,
        negativeIndexes: var_core_value_sig4840,
        data: var_core_value_sigB76D
      } = var_core_value_sig310C,
      var_core_value_sig1015 = var_core_value_sig7739 - var_core_value_sig41AD - 8,
      var_core_value_sig6223 = var_core_value_sig4040 - var_core_value_sigDBC2 - 8,
      var_core_value_sigC6B6 = var_core_value_sig41AD + 4,
      var_core_value_sig498A = var_core_value_sigDBC2 + 4,
      var_core_value_sigEF45 = var_core_value_sig1015 / (var_core_value_sigB76D.length * 1.2),
      var_core_value_sig36FE = var_core_value_sigEF45 * 0.2,
      var_core_value_sig3AF5 = ((var_core_value_sig6C80 = var_core_value_sig495B.axis) == null ? undefined : var_core_value_sig6C80.reverse) ?? false,
      var_core_value_sig14E6 = var_core_value_sig495B.showRadius ?? false,
      var_core_value_sig8690 = var_core_value_sig498A + var_core_value_sig6223 / 2;
    var_core_value_sigADA4.save(), var_core_value_sigADA4.beginPath(), var_core_value_sigADA4.rect(var_core_value_sig41AD, var_core_value_sigDBC2, var_core_value_sig7739 - var_core_value_sig41AD, var_core_value_sig4040 - var_core_value_sigDBC2), var_core_value_sigADA4.clip();
    let var_core_value_sigDF29 = var_core_value_sig495B.themeType ?? var_core_value_sig2E04.STANDARD,
      var_core_value_sigC0F8 = var_core_value_sig495B.seriesColor ?? ((var_core_value_sig6B99 = var_core_value_sig87E2[var_core_value_sigDF29]) == null ? undefined : var_core_value_sig6B99[0]) ?? var_core_value_sig87E2.standard[0],
      var_core_value_sig3C75 = var_core_value_sigB76D[var_core_value_sig1AAA],
      var_core_value_sig992D = var_core_value_sigB76D[var_core_value_sig58DB];
    var_core_value_sigB76D.forEach((var_core_value_sigBE07, var_core_value_sig555F) => {
      var var_core_value_sig3D6F, var_core_value_sig336C, var_core_value_sig6E68, var_core_value_sig8DFE, var_core_value_sig48EA;
      if (typeof var_core_value_sigBE07 == "string" || var_core_value_sigBE07 === undefined) return;
      let var_core_value_sig5E16 = var_core_value_sigBE07 === 0 ? 0 : var_core_value_sig6223 / 2,
        var_core_value_sig09F3 = var_core_value_sig3AF5 ? var_core_value_sig7739 - 4 - (var_core_value_sig555F + 1) * (var_core_value_sigEF45 + var_core_value_sig36FE) + var_core_value_sig36FE / 2 : var_core_value_sigC6B6 + var_core_value_sig555F * (var_core_value_sigEF45 + var_core_value_sig36FE) + var_core_value_sig36FE / 2,
        var_core_value_sig4592 = var_core_value_sigBE07 >= 0,
        var_core_value_sigC5C4 = var_core_value_sigC0F8;
      (var_core_value_sig3D6F = var_core_value_sig495B.points) != null && (var_core_value_sig3D6F = var_core_value_sig3D6F.firstPoint) != null && var_core_value_sig3D6F.visible && var_core_value_sig555F === 0 && (var_core_value_sigC5C4 = var_core_value_sig495B.points["firstPoint"].color || var_core_value_sigC0F8), (var_core_value_sig336C = var_core_value_sig495B.points) != null && (var_core_value_sig336C = var_core_value_sig336C.lastPoint) != null && var_core_value_sig336C.visible && var_core_value_sig555F === var_core_value_sigB76D.length - 1 && (var_core_value_sigC5C4 = var_core_value_sig495B.points["lastPoint"].color || var_core_value_sigC0F8), (var_core_value_sig6E68 = var_core_value_sig495B.points) != null && (var_core_value_sig6E68 = var_core_value_sig6E68.highPoint) != null && var_core_value_sig6E68.visible && var_core_value_sigBE07 === var_core_value_sig3C75 && (var_core_value_sigC5C4 = var_core_value_sig495B.points["highPoint"].color || var_core_value_sigC0F8), (var_core_value_sig8DFE = var_core_value_sig495B.points) != null && (var_core_value_sig8DFE = var_core_value_sig8DFE.lowPoint) != null && var_core_value_sig8DFE.visible && var_core_value_sigBE07 === var_core_value_sig992D && (var_core_value_sigC5C4 = var_core_value_sig495B.points["lowPoint"].color || var_core_value_sigC0F8), (var_core_value_sig48EA = var_core_value_sig495B.points) != null && (var_core_value_sig48EA = var_core_value_sig48EA.negativePoint) != null && var_core_value_sig48EA.visible && var_core_value_sig4840.includes(var_core_value_sig555F) && (var_core_value_sigC5C4 = var_core_value_sig495B.points["negativePoint"].color || var_core_value_sigC0F8), var_core_value_sigADA4.fillStyle = var_core_value_sigC5C4, var_core_value_sigEF45 >= 4 && var_core_value_sig14E6 ? (var_core_value_sigADA4.beginPath(), var_core_value_sig4592 ? (var_core_value_sigADA4.moveTo(var_core_value_sig09F3, var_core_value_sig8690 - var_core_value_sig5E16 + 2), var_core_value_sigADA4.arcTo(var_core_value_sig09F3, var_core_value_sig8690 - var_core_value_sig5E16, var_core_value_sig09F3 + var_core_value_sigEF45, var_core_value_sig8690 - var_core_value_sig5E16, 2), var_core_value_sigADA4.arcTo(var_core_value_sig09F3 + var_core_value_sigEF45, var_core_value_sig8690 - var_core_value_sig5E16, var_core_value_sig09F3 + var_core_value_sigEF45, var_core_value_sig8690 - var_core_value_sig5E16 + 2, 2), var_core_value_sigADA4.lineTo(var_core_value_sig09F3 + var_core_value_sigEF45, var_core_value_sig8690), var_core_value_sigADA4.lineTo(var_core_value_sig09F3, var_core_value_sig8690), var_core_value_sigADA4.closePath(), var_core_value_sigADA4.fill()) : (var_core_value_sigADA4.moveTo(var_core_value_sig09F3, var_core_value_sig8690), var_core_value_sigADA4.lineTo(var_core_value_sig09F3 + var_core_value_sigEF45, var_core_value_sig8690), var_core_value_sigADA4.arcTo(var_core_value_sig09F3 + var_core_value_sigEF45, var_core_value_sig8690 + var_core_value_sig5E16, var_core_value_sig09F3 + var_core_value_sigEF45 - 2, var_core_value_sig8690 + var_core_value_sig5E16, 2), var_core_value_sigADA4.arcTo(var_core_value_sig09F3, var_core_value_sig8690 + var_core_value_sig5E16, var_core_value_sig09F3, var_core_value_sig8690 + var_core_value_sig5E16 - 2, 2), var_core_value_sigADA4.lineTo(var_core_value_sig09F3, var_core_value_sig8690), var_core_value_sigADA4.closePath(), var_core_value_sigADA4.fill())) : var_core_value_sig4592 ? var_core_value_sigADA4.fillRect(var_core_value_sig09F3, var_core_value_sig8690 - var_core_value_sig5E16, var_core_value_sigEF45, var_core_value_sig5E16) : var_core_value_sigADA4.fillRect(var_core_value_sig09F3, var_core_value_sig8690, var_core_value_sigEF45, var_core_value_sig5E16);
    }), (var_core_value_sig6ADC = var_core_value_sig495B.axis) != null && var_core_value_sig6ADC.visible && (var_core_value_sigADA4.beginPath(), var_core_value_sigADA4.moveTo(0 + var_core_value_sigC6B6, var_core_value_sig498A + var_core_value_sig6223 / 2), var_core_value_sigADA4.lineTo(var_core_value_sig1015 + var_core_value_sigC6B6, var_core_value_sig498A + var_core_value_sig6223 / 2), var_core_value_sigADA4.strokeStyle = var_core_value_sig495B.axis["color"] ?? "rgb(0, 0, 0)", var_core_value_sigADA4.lineWidth = 1, var_core_value_sigADA4.stroke()), var_core_value_sigADA4.restore();
  },
  en = (var_core_value_sigE4E4, var_core_value_sigA4B0, var_core_value_sig5F50, var_core_value_sig4494, var_core_value_sigFFAF) => {
    let {
      startX: var_core_value_sig478B,
      startY: var_core_value_sig1E21,
      endX: var_core_value_sig9DBF,
      endY: var_core_value_sig36CC
    } = var_core_value_sigA4B0.mergeInfo;
    if (!var_core_value_sig4494) return;
    let {
        data: var_core_value_sigA568
      } = var_core_value_sig4494,
      var_core_value_sigD22D = var_core_value_sig9DBF - var_core_value_sig478B - 8,
      var_core_value_sig85D5 = var_core_value_sig36CC - var_core_value_sig1E21 - 8,
      var_core_value_sig5D2E = var_core_value_sig478B + 4,
      var_core_value_sig7221 = var_core_value_sig1E21 + 4,
      var_core_value_sig0A5A = Math.min(var_core_value_sigD22D, var_core_value_sig85D5) / 2,
      var_core_value_sigE6D6 = var_core_value_sig5D2E + var_core_value_sigD22D / 2,
      var_core_value_sig8507 = var_core_value_sig7221 + var_core_value_sig85D5 / 2,
      var_core_value_sig8A7F = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#E7E9ED", "#B4A0E5"],
      var_core_value_sig9E81 = var_core_value_sigA568.filter(var_core_value_sig1617 => typeof var_core_value_sig1617 == "number" && !Number.isNaN(var_core_value_sig1617)),
      var_core_value_sig8295 = var_core_value_sig9E81.reduce((var_core_value_sig4169, var_core_value_sig6D19) => var_core_value_sig4169 + var_core_value_sig6D19, 0);
    if (var_core_value_sig8295 === 0 || var_core_value_sig9E81.length === 0) return;
    let var_core_value_sigA975 = -Math.PI / 2;
    var_core_value_sig9E81.forEach((var_core_value_sig279C, var_core_value_sigAC51) => {
      let var_core_value_sig8986 = var_core_value_sig279C / var_core_value_sig8295 * 2 * Math.PI,
        var_core_value_sigCAF7 = var_core_value_sigA975 + var_core_value_sig8986;
      var_core_value_sigE4E4.beginPath(), var_core_value_sigE4E4.moveTo(var_core_value_sigE6D6, var_core_value_sig8507), var_core_value_sigE4E4.arc(var_core_value_sigE6D6, var_core_value_sig8507, var_core_value_sig0A5A, var_core_value_sigA975, var_core_value_sigCAF7), var_core_value_sigE4E4.closePath(), var_core_value_sigE4E4.fillStyle = var_core_value_sig8A7F[var_core_value_sigAC51 % var_core_value_sig8A7F.length], var_core_value_sigE4E4.fill(), var_core_value_sigE4E4.lineWidth = 1, var_core_value_sigE4E4.strokeStyle = "#ffffff", var_core_value_sigE4E4.stroke(), var_core_value_sigA975 = var_core_value_sigCAF7;
    });
  };
var tn = class e extends var_core_value_sig1F51 {
  constructor(var_core_value_sigED1C) {
    super(), this._renderer = var_core_value_sigED1C, Gt(this, "uKey", "SHEET_SPARKLINE_RENDERER"), Gt(this, "Z_INDEX", 35);
  }
  draw(var_core_value_sig726E, var_core_value_sig2CD3, var_core_value_sig038E, var_core_value_sigAA1E, {
    viewRanges: var_core_value_sigC9F5
  }) {
    var_core_value_sigC9F5.forEach(var_core_value_sig43B8 => {
      var_core_value_sig639A.foreach(var_core_value_sig43B8, (var_core_value_sigC6E5, var_core_value_sigCEFB) => {
        let var_core_value_sig1537 = var_core_value_sig038E.getCellWithCoordByIndex(var_core_value_sigC6E5, var_core_value_sigCEFB, false);
        var_core_value_sig1537 && this._renderer(var_core_value_sig726E, var_core_value_sig038E, var_core_value_sig1537);
      });
    });
  }
  copyForPrinting() {
    return new e(this._renderer);
  }
};
let nn = class extends var_core_value_sig0442 {
  constructor(var_core_value_sig7EEA, var_core_value_sig59CE1, var_core_value_sig33C8, var_core_value_sig957F) {
    super(), this._context = var_core_value_sig7EEA, this._sparklineDataSourceModel = var_core_value_sig59CE1, this._rangeProtectionCache = var_core_value_sig33C8, this._sheetPrintInterceptorService = var_core_value_sig957F, Gt(this, "_sparklineExtension", null), this._initRender(), this._initPrinting(), this._initSkeleton();
  }
  _initRender() {
    let var_core_value_sig803B = this._sparklineDataSourceModel["getSparklineCache"](),
      var_core_value_sig5830 = var_core_value_sig803B.sparklineAnchorMap,
      var_core_value_sig4A7C = var_core_value_sig803B.sparklineModel,
      var_core_value_sigF975 = (var_core_value_sigD98F, var_core_value_sig66C0, var_core_value_sig9D15) => {
        var var_core_value_sigB785, var_core_value_sig130F, var_core_value_sigC0E3;
        let {
            actualRow: var_core_value_sig52F7,
            actualColumn: var_core_value_sig866F
          } = var_core_value_sig9D15,
          {
            worksheet: var_core_value_sigDE3D
          } = var_core_value_sig66C0,
          var_core_value_sigF175 = var_core_value_sigDE3D.getSheetId(),
          var_core_value_sig6A18 = var_core_value_sigDE3D.getUnitId();
        if (((var_core_value_sigB785 = this._rangeProtectionCache["getCellInfo"](var_core_value_sig6A18, var_core_value_sigF175, var_core_value_sig52F7, var_core_value_sig866F)) == null ? undefined : var_core_value_sigB785[var_core_value_sig7B9E.View]) === false) return;
        let var_core_value_sig4E3D = var_core_value_sigDE3D.getRowVisible(var_core_value_sig52F7),
          var_core_value_sig49B0 = var_core_value_sigDE3D.getColVisible(var_core_value_sig866F);
        if (!var_core_value_sig4E3D || !var_core_value_sig49B0) return;
        let var_core_value_sig2547 = (var_core_value_sig130F = var_core_value_sig5830.get(var_core_value_sig6A18)) == null ? undefined : var_core_value_sig130F.get(var_core_value_sigF175),
          var_core_value_sigBCA9 = var_core_value_sig2547 == null || (var_core_value_sigC0E3 = var_core_value_sig2547.matrix) == null ? undefined : var_core_value_sigC0E3.getValue(var_core_value_sig52F7, var_core_value_sig866F);
        if (var_core_value_sigBCA9) {
          var var_core_value_sig4CDF;
          let var_core_value_sigE4C6 = var_core_value_sig2547 == null ? undefined : var_core_value_sig2547.extra[var_core_value_sigBCA9.groupId],
            var_core_value_sig4313 = (var_core_value_sig4CDF = var_core_value_sig4A7C.get(var_core_value_sig6A18)) == null || (var_core_value_sig4CDF = var_core_value_sig4CDF.get(var_core_value_sigF175)) == null ? undefined : var_core_value_sig4CDF.get(var_core_value_sigBCA9 == null ? undefined : var_core_value_sigBCA9.groupId);
          if (!var_core_value_sig4313) return;
          let var_core_value_sigFC87 = (var_core_value_sig4313 == null ? undefined : var_core_value_sig4313.config["type"]) ?? var_core_value_sig2EDD.LINE_CHART;
          var_core_value_sigFC87 === var_core_value_sig2EDD.LINE_CHART ? Zt(var_core_value_sigD98F, var_core_value_sig9D15, var_core_value_sig4313.config, var_core_value_sigBCA9, var_core_value_sigE4C6) : var_core_value_sigFC87 === var_core_value_sig2EDD.BAR_CHART ? Qt(var_core_value_sigD98F, var_core_value_sig9D15, var_core_value_sig4313.config, var_core_value_sigBCA9, var_core_value_sigE4C6) : var_core_value_sigFC87 === var_core_value_sig2EDD.PROFIT_AND_LOSS_CHART ? $t(var_core_value_sigD98F, var_core_value_sig9D15, var_core_value_sig4313.config, var_core_value_sigBCA9, var_core_value_sigE4C6) : var_core_value_sigFC87 === var_core_value_sig2EDD.PIE_CHART && en(var_core_value_sigD98F, var_core_value_sig9D15, var_core_value_sig4313.config, var_core_value_sigBCA9, var_core_value_sigE4C6);
        }
      },
      var_core_value_sigCDAF = this._context["mainComponent"];
    var_core_value_sigCDAF.getExtensionByKey("SHEET_SPARKLINE_RENDERER") || (this._sparklineExtension = new tn(var_core_value_sigF975), var_core_value_sigCDAF.register(this._sparklineExtension));
  }
  _initPrinting() {
    this.disposeWithMe(this._sheetPrintInterceptorService["interceptor"].intercept(this._sheetPrintInterceptorService["interceptor"].getInterceptPoints().PRINTING_COMPONENT_COLLECT, {
      handler: (var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sigC9ED) => {
        var var_core_value_sigB57B;
        let {
          spreadsheet: var_core_value_sig780B
        } = var_core_value_sig880E;
        return this._sparklineExtension && !((var_core_value_sigB57B = var_core_value_sig780B.getExtensionByKey) != null && var_core_value_sigB57B.call(var_core_value_sig780B, "SHEET_SPARKLINE_RENDERER")) && var_core_value_sig780B.register(this._sparklineExtension["copyForPrinting"]()), var_core_value_sigC9ED(var_core_value_sig3F79);
      }
    }));
  }
  _initSkeleton() {
    this.disposeWithMe(this._sparklineDataSourceModel["updateConfig$"].pipe(var_core_value_sig4406(300)).subscribe(() => {
      var var_core_value_sig7D1B;
      (var_core_value_sig7D1B = this._context["mainComponent"]) == null || var_core_value_sig7D1B.makeDirty();
    }));
  }
};
nn = Lt([$(1, var_core_value_sig4524(var_core_value_sig86D7)), $(2, var_core_value_sig4524(var_core_value_sig2407)), $(3, var_core_value_sig4524(var_core_value_sig5FD0))], nn);
let rn = class extends var_core_value_sig75FC {
  constructor(var_core_value_sigA298 = Et, var_core_value_sig0B40, var_core_value_sig330B, var_core_value_sig3625, var_core_value_sig0B4E) {
    super(), this._config = var_core_value_sigA298, this._configService = var_core_value_sig0B40, this._injector = var_core_value_sig330B, this._commandService = var_core_value_sig3625, this._renderManagerService = var_core_value_sig0B4E;
    let {
      menu: var_core_value_sig0E9F,
      ...var_core_value_sigE5BA
    } = var_core_value_sig6EE2({}, Et, this._config);
    var_core_value_sig0E9F && this._configService["setConfig"]("menu", var_core_value_sig0E9F, {
      merge: true
    }), this._configService["setConfig"]("sheets-sparkline-ui.config", var_core_value_sigE5BA), this._initRegisterCommand();
  }
  onStarting() {
    this._injector["add"]([Rt]), this._injector["get"](Rt), [[Vt], [Kt], [zt], [Yt], [Bt], [Xt]].forEach(var_core_value_sig7BE0 => {
      this._injector["add"](var_core_value_sig7BE0);
    }), var_core_value_sig4CCC(this._injector, [[Vt]]);
  }
  onRendered() {
    [[nn]].forEach(var_core_value_sig7D40 => {
      this._renderManagerService["registerRenderModule"](var_core_value_sig546D.UNIVER_SHEET, var_core_value_sig7D40);
    }), var_core_value_sig4CCC(this._injector, [[Kt], [zt], [Yt], [Bt], [Xt]]);
  }
  _initRegisterCommand() {
    [ht, mt].forEach(var_core_value_sig6C7E => this._commandService["registerCommand"](var_core_value_sig6C7E));
  }
};
Gt(rn, "pluginName", "SHEET_SPARKLINE_UI_PLUGIN"), Gt(rn, "packageName", wt), Gt(rn, "version", Tt), Gt(rn, "type", var_core_value_sig546D.UNIVER_SHEET), rn = Lt([var_core_value_sigEAE1(var_core_value_sigF047, var_core_value_sig29F5, var_core_value_sig8D44, var_core_value_sig27D2, var_core_value_sigA7E3), $(1, var_core_value_sigDB65), $(2, var_core_value_sig4524(var_core_value_sig64D5)), $(3, var_core_value_sig4524(var_core_value_sig697A)), $(4, var_core_value_sigC2F9)], rn);
export { Ct as SheetsSparklineUIMenuSchema, rn as UniverSheetSparklineUIPlugin };
