import {
  AddSheetSparklineCommand as _0xfd6253,
  AddSheetSparklineMutation as _0x1d9878,
  PLUGIN_NAME as _0x59c3bd,
  RemoveSheetSparklineCommand as _0x4d1ea0,
  RemoveSheetSparklineMutation as _0x4e3099,
  SetSheetSparklineCommand as _0x4b88fa,
  SpacialShowAsEnum as _0x15931d,
  SparklineDataSourceModel as _0x593f58,
  SparklineExtremumTypeEnum as _0x38ff27,
  SparklinePointsNames as _0x21fefa,
  SparklineThemeMapping as _0x13bdd4,
  SparklineThemeTypeEnum as _0x27e692,
  SparklineTypeEnum as _0x4046bd,
  UniverSheetSparklinePlugin as _0x3861a2,
} from "@univerjs-pro/sheets-sparkline";
import {
  ComponentManager as _0x1adc6c,
  ContextMenuGroup as _0x2f5773,
  ContextMenuPosition as _0x168c65,
  IDialogService as _0x87fb4b,
  IMenuManagerService as _0x3261ea,
  ISidebarService as _0x226574,
  IconManager as _0x3b8a6d,
  MenuItemType as _0x5d1b8e,
  RibbonInsertGroup as _0x2ce3a0,
  getMenuHiddenObservable as _0x508a48,
  useDependency as _0x5d1332,
  useObservable as _0x39f5d7,
} from "@univerjs/ui";
import {
  ColorKit as _0x3315ae,
  CommandType as _0xf10006,
  DependentOn as _0x49a109,
  Direction as _0xbfe979,
  Disposable as _0x97f247,
  ICommandService as _0x4350b0,
  IConfigService as _0x586a2a,
  IUniverInstanceService as _0x195930,
  Inject as _0x5e3acc,
  Injector as _0x29fa15,
  LocaleService as _0x5a68f9,
  ObjectMatrix as _0x76302f,
  Plugin as _0x3174ca,
  Range as _0x2f9a02,
  Rectangle as _0x3ec95c,
  Tools as _0x50da01,
  UniverInstanceType as _0x1e27a6,
  cellToRange as _0x206932,
  generateRandomId as _0xcea22b,
  isValidRange as _0x3f295b,
  merge as _0x2bfe1f,
  touchDependencies as _0x58bed8,
} from "@univerjs/core";
import {
  AUTO_FILL_APPLY_TYPE as _0x374a4c,
  IAutoFillService as _0x421fac,
  RangeProtectionCache as _0x34c74b,
  RangeProtectionPermissionEditPoint as _0x5bbb4f,
  SetWorksheetActiveOperation as _0x25d1f9,
  SheetPermissionCheckController as _0x22f0b5,
  SheetsSelectionsService as _0x43d454,
  UniverSheetsPlugin as _0x14b526,
  WorkbookEditablePermission as _0x49b3d2,
  WorksheetEditPermission as _0x3f3845,
  discreteRangeToRange as _0x2ff026,
  getSheetCommandTarget as _0x1004a3,
} from "@univerjs/sheets";
import { UnitAction as _0x3cf92f } from "@univerjs/protocol";
import {
  COPY_TYPE as _0x258cea,
  IMarkSelectionService as _0xddc7f,
  ISheetClipboardService as _0x553803,
  PREDEFINED_HOOK_NAME as _0x45dc7b,
  SheetPrintInterceptorService as _0x4e15b2,
  UniverSheetsUIPlugin as _0x1d65ae,
  getCurrentRangeDisable$ as _0x461e43,
} from "@univerjs/sheets-ui";
import {
  auditTime as _0x2aab0a,
  combineLatest as _0x54b86b,
  distinctUntilChanged as _0x5cb450,
  filter as _0xb42bcd,
  map as _0x1f3069,
  merge as _0x211361,
  of as _0x3179cd,
  startWith as _0x6980a3,
  switchMap as _0x3e18b7,
} from "rxjs";
import { UniverLicensePlugin as _0xda5999 } from "@univerjs-pro/license";
import {
  IRenderManagerService as _0x189ab8,
  SheetExtension as _0x4edeb5,
  UniverRenderEnginePlugin as _0x43fd2a,
} from "@univerjs/engine-render";
import {
  ColumnSparklineIcon as _0x4561ae,
  DeleteIcon as _0x42c83c,
  GroupSparklineIcon as _0x1790b0,
  LineSparklineIcon as _0x503856,
  MoreDownIcon as _0x7f4910,
  MoreRightIcon as _0x395658,
  PieChartIcon as _0xf6b6e0,
  PointColorDoubleIcon as _0x1fb7da,
  UngroupSparklineIcon as _0x5e7e23,
  WinlossSparklineIcon as _0x24fbfb,
  WriteIcon as _0x2a5b9d,
} from "@univerjs/icons";
import {
  ActionRow as _0x19bb03,
  Button as _0x28df0b,
  Checkbox as _0x1162fd,
  ColorPicker as _0x2f0c95,
  Dropdown as _0x2b33d7,
  InputNumber as _0x178de7,
  Radio as _0x40aab1,
  RadioGroup as _0x2ba552,
  Segmented as _0x48a552,
  Select as _0x101d2f,
  borderBottomClassName as _0x36f1f1,
  borderClassName as _0x1c49ae,
  clsx as _0x566260,
  selectClassName as _0x37c2a8,
} from "@univerjs/design";
import {
  useCallback as _0x215ef2,
  useEffect as _0x21f357,
  useMemo as _0x5c01d2,
  useRef as _0x5c2ac0,
  useState as _0x41dd48,
} from "react";
import {
  Fragment as _0x2cf30d,
  jsx as _0x2b76a7,
  jsxs as _0x3141f9,
} from "react/jsx-runtime";
import {
  deserializeRangeWithSheet as _0x50fea9,
  serializeRange as _0x3bba5c,
} from "@univerjs/engine-formula";
import { RangeSelector as _0x307e3f } from "@univerjs/sheets-formula-ui";
const ut = "SHEET_SPARKLINE_MENU",
  dt = "SHEET_SPARKLINE_SELECTOR",
  ft = "SHEET_SPARKLINE_PANEL",
  pt = "SHEET_SPARKLINE_PANEL_ID",
  mt = {
    id: "sheet.operation.open-sparkline-panel",
    type: _0xf10006.OPERATION,
    handler: (_0x68ef64) => {
      let _0x12dd7e = _0x68ef64.get(_0x226574),
        _0x31bdf2 = _0x68ef64.get(_0x5a68f9),
        _0x97108 = _0x68ef64.get(_0x87fb4b),
        _0x201a2c = {
          id: pt,
          header: { title: _0x31bdf2.t("sheets-sparkline-ui.panel.title") },
          children: { label: ft },
          width: 330,
          onClose: () => {
            _0x97108.close(dt);
          },
        };
      return (_0x12dd7e.open(_0x201a2c), true);
    },
  },
  ht = {
    type: _0xf10006.OPERATION,
    id: "sheet.operation.open-sparkline-selector",
    handler: async (_0x2cc38a) => {
      let _0x2682fa = _0x1004a3(_0x2cc38a.get(_0x195930));
      if (!_0x2682fa) return false;
      let _0x29a881 = await gt(
        _0x2cc38a,
        _0x2cc38a
          .get(_0x43d454)
          .getCurrentSelections()
          .map((_0x5cfa16) => _0x5cfa16.range),
      );
      if (!_0x29a881) return false;
      let { unitId: _0x96afca, subUnitId: _0xd9e8 } = _0x2682fa;
      return (
        _0x2cc38a
          .get(_0x4350b0)
          .executeCommand(_0xfd6253.id, {
            sourceRanges: _0x29a881.sourceRanges,
            targetRanges: _0x29a881.targetRanges,
            targetInfo: { unitId: _0x96afca, subUnitId: _0xd9e8 },
          }),
        true
      );
    },
  };
async function gt(_0xdc40b7, _0x4b1985, _0x2245a4, _0x150f29) {
  let _0xc2b419 = _0xdc40b7.get(_0x87fb4b),
    _0x44bdca = _0xdc40b7.get(_0x5a68f9);
  return new Promise((_0x5e4820) => {
    let _0x4a92ed,
      _0x502b24 = {
        sourceRanges: _0x4b1985,
        targetRanges: _0x2245a4,
        resetCtx: _0x150f29,
        onConfirm: (_0x3d5563) => {
          (_0x5e4820(_0x3d5563), _0x4a92ed == null || _0x4a92ed.dispose());
        },
        onCancel: () => {
          (_0x5e4820(null), _0x4a92ed == null || _0x4a92ed.dispose());
        },
      };
    _0x4a92ed = _0xc2b419.open({
      id: dt,
      title: { title: _0x44bdca.t("sheets-sparkline-ui.selector.title") },
      draggable: true,
      mask: false,
      maskClosable: false,
      children: { label: { name: dt, props: _0x502b24 } },
      width: 400,
      onClose: () => {
        _0x4a92ed.dispose();
      },
    });
  });
}
const _t = "sheet.sparkline.context-menu-id";
function vt(_0x3768b2) {
  return {
    id: ht.id,
    title: "sheets-sparkline-ui.title",
    tooltip: "sheets-sparkline-ui.title",
    icon: ut,
    type: _0x5d1b8e.BUTTON,
    hidden$: _0x508a48(_0x3768b2, _0x1e27a6.UNIVER_SHEET),
    disabled$: _0x461e43(_0x3768b2, {
      workbookTypes: [_0x49b3d2],
      worksheetTypes: [_0x3f3845],
      rangeTypes: [_0x5bbb4f],
    }),
  };
}
function yt(_0x26d8f2) {
  return {
    id: _t,
    type: _0x5d1b8e.SUBITEMS,
    icon: ut,
    title: "sheets-sparkline-ui.title",
    hidden$: _0x54b86b([
      _0x508a48(_0x26d8f2, _0x1e27a6.UNIVER_SHEET),
      St(_0x26d8f2),
    ]).pipe(_0x1f3069(([_0x1c88ed, _0x2fe773]) => _0x1c88ed || _0x2fe773)),
  };
}
function bt(_0xf00647) {
  return {
    id: _0x4d1ea0.id,
    type: _0x5d1b8e.BUTTON,
    title: "sheets-sparkline-ui.remove",
    tooltip: "sheets-sparkline-ui.remove",
    disabled$: _0x461e43(_0xf00647, {
      workbookTypes: [_0x49b3d2],
      worksheetTypes: [_0x3f3845],
      rangeTypes: [_0x5bbb4f],
    }),
  };
}
function xt(_0x5605c1) {
  return {
    id: mt.id,
    title: "sheets-sparkline-ui.edit",
    tooltip: "sheets-sparkline-ui.edit",
    type: _0x5d1b8e.BUTTON,
    disabled$: _0x461e43(_0x5605c1, {
      workbookTypes: [_0x49b3d2],
      worksheetTypes: [_0x3f3845],
      rangeTypes: [_0x5bbb4f],
    }),
  };
}
function St(_0x54206c) {
  let _0x209c89 = _0x54206c
      .get(_0x195930)
      .getCurrentTypeOfUnit$(_0x1e27a6.UNIVER_SHEET),
    _0x459406 = _0x54206c.get(_0x593f58),
    _0x3d595e = _0x54206c.get(_0x34c74b);
  return _0x209c89.pipe(
    _0x3e18b7((_0x257177) =>
      _0x257177
        ? _0x257177.activeSheet$["pipe"](
            _0x3e18b7((_0x12790b) => {
              if (!_0x12790b) return _0x3179cd(true);
              let _0x103dfc = _0x54206c.get(_0x43d454);
              return _0x211361(
                _0x3179cd(undefined),
                _0x103dfc.selectionMoveEnd$,
                _0x459406.updateConfig$,
              ).pipe(
                _0x1f3069(() => {
                  let _0x853944 = _0x103dfc.getCurrentSelections();
                  if (_0x853944.length > 1 || _0x853944.length === 0)
                    return true;
                  let { primary: _0x54afed, range: _0xb89b0d } = _0x853944[0];
                  if (!_0x54afed) return true;
                  let _0x2af4b3 = _0x257177.getUnitId(),
                    _0x4c3d89 = _0x12790b.getSheetId();
                  if (
                    !_0x459406.getSparkline(
                      _0x2af4b3,
                      _0x4c3d89,
                      _0x54afed.actualRow,
                      _0x54afed.actualColumn,
                    )
                  )
                    return true;
                  let _0x35acec = new Set();
                  _0x2f9a02.foreach(_0xb89b0d, (_0x48b7fd, _0x51459e) => {
                    let _0x3f8232 = _0x459406.getSparkline(
                      _0x2af4b3,
                      _0x4c3d89,
                      _0x48b7fd,
                      _0x51459e,
                    );
                    _0x3f8232 &&
                      _0x459406.getSparklineById(
                        _0x2af4b3,
                        _0x4c3d89,
                        _0x3f8232,
                      ) &&
                      _0x35acec.add(_0x3f8232);
                  });
                  let _0x3e4844 = true;
                  return (
                    _0x35acec.forEach((_0x2ebfb7) => {
                      let _0x40422c = _0x459406.getSparklineById(
                        _0x2af4b3,
                        _0x4c3d89,
                        _0x2ebfb7,
                      );
                      _0x40422c &&
                        _0x3e4844 &&
                        _0x40422c.sparklines["forValue"](
                          (_0x10c711, _0x34b0d5) => {
                            var _0x1828fd;
                            ((_0x1828fd = _0x3d595e.getCellInfo(
                              _0x2af4b3,
                              _0x4c3d89,
                              _0x10c711,
                              _0x34b0d5,
                            )) == null
                              ? undefined
                              : _0x1828fd[_0x3cf92f.Edit]) === false &&
                              (_0x3e4844 = false);
                          },
                        );
                    }),
                    !_0x3e4844
                  );
                }),
              );
            }),
          )
        : _0x3179cd(true),
    ),
  );
}
const Ct = {
  [_0x2ce3a0.MEDIA]: { [ht.id]: { order: 3, menuItemFactory: vt } },
  [_0x168c65.MAIN_AREA]: {
    [_0x2f5773.DATA]: {
      [_t]: {
        order: 5,
        menuItemFactory: yt,
        [mt.id]: { menuItemFactory: xt },
        [_0x4d1ea0.id]: { menuItemFactory: bt },
      },
    },
  },
  [_0x168c65.COL_HEADER]: {
    [_0x2f5773.LAYOUT]: {
      [_t]: {
        [mt.id]: { menuItemFactory: xt },
        [_0x4d1ea0.id]: { menuItemFactory: bt },
      },
    },
  },
  [_0x168c65.ROW_HEADER]: {
    [_0x2f5773.LAYOUT]: {
      [_t]: {
        [mt.id]: { menuItemFactory: xt },
        [_0x4d1ea0.id]: { menuItemFactory: bt },
      },
    },
  },
};
var wt = "@univerjs-pro/sheets-sparkline-ui",
  Tt = "1.0.0-insiders.20260907-70fc579";
const Et = {};
function Dt({
  title: _0x653bc5,
  children: _0x2decb6,
  containerStyle: _0x178226,
}) {
  let [_0x29ef8e, _0x268e7e] = _0x41dd48(false);
  return _0x3141f9("div", {
    className: _0x566260("univer-px-0 univer-py-2.5", _0x36f1f1),
    style: _0x178226,
    children: [
      _0x3141f9("div", {
        className:
          "univer-flex univer-cursor-pointer univer-items-center univer-px-0 univer-py-1.5 univer-text-sm univer-font-medium",
        onClick: () => _0x268e7e(!_0x29ef8e),
        children: [
          _0x2b76a7("span", {
            className: "univer-size-4 univer-pr-1",
            children: _0x2b76a7(_0x29ef8e ? _0x7f4910 : _0x395658, {}),
          }),
          _0x653bc5,
        ],
      }),
      _0x29ef8e &&
        _0x2b76a7("div", {
          className: "univer-pb-4 univer-pl-4 univer-pt-2.5",
          children: _0x2decb6,
        }),
    ],
  });
}
const Ot = (_0x5e6540) => {
    let { color: _0x73730a, onChange: _0x5e55ce } = _0x5e6540,
      [_0xb77bd7, _0x2864e7] = _0x41dd48(false),
      _0x39c4a8 = _0x5d1332(_0x5a68f9),
      _0x9d2077 = _0x73730a === "transparent" || _0x73730a == null,
      _0xa5d9b1 = _0x215ef2(
        (_0x4771c5) => {
          (_0x5e55ce == null || _0x5e55ce(_0x4771c5), _0x2864e7(false));
        },
        [_0x5e55ce],
      );
    return _0x2b76a7(_0x2b33d7, {
      overlay: _0x2b76a7("div", {
        className: _0x566260(
          "univer-flex\x20univer-flex-col\x20univer-items-center\x20univer-gap-3\x20univer-p-3\x20univer-text-xs",
          _0x1c49ae,
        ),
        children: _0x2b76a7(_0x2f0c95, {
          value: _0x9d2077 ? "#ffffff" : _0x73730a,
          onChange: _0xa5d9b1,
        }),
      }),
      open: _0xb77bd7,
      onOpenChange: _0x2864e7,
      children: _0x3141f9("button", {
        className: _0x566260(
          _0x37c2a8,
          "univer-w-full !univer-min-w-0 univer-text-gray-500 hover:univer-border-primary-600 dark:!univer-text-gray-0",
          {
            "univer-border-primary-600\x20univer-outline-none\x20univer-ring-2\x20univer-ring-primary-50\x20dark:!univer-ring-primary-900":
              _0xb77bd7,
            "univer-cursor-pointer": !_0xb77bd7,
          },
        ),
        type: "button",
        children: [
          _0x9d2077
            ? _0x2b76a7("div", {
                className:
                  "univer-flex-1 univer-truncate univer-text-sm univer-text-gray-500 dark:!univer-text-gray-0",
                children: _0x39c4a8.t("sheets-sparkline-ui.panel.default"),
              })
            : _0x2b76a7("div", {
                className: _0x566260("univer-size-5", _0x1c49ae),
                style: { backgroundColor: _0x73730a },
              }),
          _0x2b76a7(_0x7f4910, {
            className: "univer-flex-shrink-0\x20dark:!univer-text-gray-0",
          }),
        ],
      }),
    });
  },
  kt = ({ config: _0x417800, ctx: _0x3c93fc }) => {
    var _0x458177,
      _0x28017f,
      _0x301cce,
      _0x5e573c,
      _0x3fa645,
      _0x50684d,
      _0x14f940,
      _0x5f16f1,
      _0x5c42e0,
      _0x3bcad2,
      _0x2138bb;
    let _0x1b8b94 = _0x5d1332(_0x4350b0),
      _0x29f940 = _0x5d1332(_0x5a68f9),
      _0x4cdb88 = _0x5d1332(_0x593f58),
      { unitId: _0x558679, subUnitId: _0x308eb2, range: _0x2f876a } = _0x3c93fc,
      _0x285f13 = (_0x449803) => {
        let _0x4716f9 = _0x50da01.deepClone(_0x417800);
        ((_0x4716f9.config ||= {}),
          _0x4716f9.config["type"] && delete _0x4716f9.config["type"],
          _0x4716f9.config["axis"] || (_0x4716f9.config["axis"] = {}),
          (_0x4716f9.config["axis"].visible = _0x449803),
          _0x1b8b94.executeCommand(_0x4b88fa.id, {
            config: _0x4716f9,
            isChangeDataSource: false,
          }));
      },
      _0x4e54c5 = (_0x565e2a) => {
        let _0x168735 = _0x50da01.deepClone(_0x417800);
        ((_0x168735.config ||= {}),
          _0x168735.config["type"] && delete _0x168735.config["type"],
          _0x168735.config["axis"] || (_0x168735.config["axis"] = {}),
          (_0x168735.config["axis"].color = _0x565e2a),
          _0x1b8b94.executeCommand(_0x4b88fa.id, {
            config: _0x168735,
            isChangeDataSource: false,
          }));
      },
      _0x394b21 = (_0x58535b) => {
        let _0x127a99 = _0x50da01.deepClone(_0x417800);
        ((_0x127a99.config ||= {}),
          _0x127a99.config["type"] && delete _0x127a99.config["type"],
          _0x127a99.config["axis"] || (_0x127a99.config["axis"] = {}),
          (_0x127a99.config["axis"].reverse = _0x58535b),
          _0x1b8b94.executeCommand(_0x4b88fa.id, {
            config: _0x127a99,
            isChangeDataSource: false,
          }));
      },
      _0x53da56 = (_0x1ca97f, _0x2b02de) => {
        let _0x3805ec = _0x2b02de === "min" ? "extremumMin" : "extremumMax",
          _0x244b7d = _0x50da01.deepClone(_0x417800);
        ((_0x244b7d.config ||= {}),
          _0x244b7d.config["type"] && delete _0x244b7d.config["type"],
          _0x244b7d.config[_0x3805ec] || (_0x244b7d.config[_0x3805ec] = {}),
          (_0x244b7d.config[_0x3805ec].type = _0x1ca97f),
          _0x1b8b94.executeCommand(_0x4b88fa.id, {
            config: _0x244b7d,
            isChangeDataSource: false,
          }));
      },
      _0x158030 = (_0x2e106a, _0x5c4c6b) => {
        let _0x22432a = _0x5c4c6b === "min" ? "extremumMin" : "extremumMax",
          _0x47cf6c = _0x50da01.deepClone(_0x417800);
        ((_0x47cf6c.config ||= {}),
          _0x47cf6c.config["type"] && delete _0x47cf6c.config["type"],
          _0x47cf6c.config[_0x22432a] || (_0x47cf6c.config[_0x22432a] = {}),
          (_0x47cf6c.config[_0x22432a].type = _0x38ff27.CUSTOM_EXTREMUM),
          (_0x47cf6c.config[_0x22432a].value = _0x2e106a),
          _0x1b8b94.executeCommand(_0x4b88fa.id, {
            config: _0x47cf6c,
            isChangeDataSource: false,
          }));
      },
      _0x38f33d = (_0x125b6b, _0xaab65b) => {
        let _0x46a694 = _0xaab65b === "empty" ? "emptyShowAs" : "nonNumShowAs",
          _0x5ccb50 = _0x50da01.deepClone(_0x417800);
        ((_0x5ccb50.config ||= {}),
          _0x5ccb50.config["type"] && delete _0x5ccb50.config["type"],
          (_0x5ccb50.config[_0x46a694] = _0x125b6b),
          _0x1b8b94.executeCommand(_0x4b88fa.id, {
            config: _0x5ccb50,
            isChangeDataSource: false,
          }));
      },
      _0x4b0a24 = () => {
        let _0x2bbfc = _0x50da01.deepClone(_0x417800);
        _0x1b8b94.executeCommand(_0x4b88fa.id, {
          config: _0x2bbfc,
          combine: true,
        });
      },
      _0x4231b4 = () => {
        let _0x58e339 = _0x50da01.deepClone(_0x417800);
        _0x1b8b94.executeCommand(_0x4b88fa.id, {
          config: _0x58e339,
          unCombine: true,
        });
      },
      _0xc0284 = (_0x35f630) => {
        let _0x21ab8b = _0x50da01.deepClone(_0x417800);
        ((_0x21ab8b.config ||= {}),
          _0x21ab8b.config["type"] && delete _0x21ab8b.config["type"],
          (_0x21ab8b.config["containHiddenCells"] = _0x35f630),
          _0x1b8b94.executeCommand(_0x4b88fa.id, {
            config: _0x21ab8b,
            isChangeDataSource: false,
          }));
      },
      _0xb58f80 = _0x4cdb88.getSparklineCache(),
      _0x1d507c =
        _0xb58f80 == null ||
        (_0x458177 = _0xb58f80.sparklineAnchorMap["get"](_0x558679)) == null
          ? undefined
          : _0x458177.get(_0x308eb2),
      _0x49b2dd = false,
      _0x4cb798 = false,
      _0x36b456 = new Set(),
      {
        startRow: _0xbbcf56,
        endRow: _0x1ec603,
        startColumn: _0x125dbc,
        endColumn: _0x4596d4,
      } = _0x2f876a;
    for (let _0xbade03 = _0xbbcf56; _0xbade03 <= _0x1ec603; _0xbade03++)
      for (let _0x1c7fd7 = _0x125dbc; _0x1c7fd7 <= _0x4596d4; _0x1c7fd7++) {
        var _0x2027be;
        let _0x44c285 =
          _0x1d507c == null ||
          (_0x2027be = _0x1d507c.matrix["getValue"](_0xbade03, _0x1c7fd7)) ==
            null
            ? undefined
            : _0x2027be.groupId;
        _0x44c285 && _0x36b456.add(_0x44c285);
      }
    if (_0x36b456.size > 1)
      ((_0x49b2dd = true),
        Array.from(_0x36b456).forEach((_0x5078ba) => {
          var _0xcfd171;
          let _0x5178c2 =
            (_0xcfd171 = _0xb58f80.sparklineModel["get"](_0x558679)) == null ||
            (_0xcfd171 = _0xcfd171.get(_0x308eb2)) == null
              ? undefined
              : _0xcfd171.get(_0x5078ba);
          ((_0x5178c2 == null
            ? undefined
            : _0x5178c2.sparklines["toNativeArray"]().length) ?? 0) > 1 &&
            (_0x4cb798 = true);
        }));
    else {
      if (_0x36b456.size === 1) {
        var _0x9eb56e;
        let _0x53cb23 = Array.from(_0x36b456)[0],
          _0x3fc817 =
            (_0x9eb56e = _0xb58f80.sparklineModel["get"](_0x558679)) == null ||
            (_0x9eb56e = _0x9eb56e.get(_0x308eb2)) == null
              ? undefined
              : _0x9eb56e.get(_0x53cb23);
        _0x4cb798 =
          ((_0x3fc817 == null
            ? undefined
            : _0x3fc817.sparklines["toNativeArray"]().length) ?? 0) > 1;
        let _0x47f1a9 = 0,
          _0x16ee23 = 0;
        (_0x3fc817 == null ||
          _0x3fc817.sparklines["forValue"]((_0x594051, _0x5efef8) => {
            let _0x4d32b5 = _0x206932(_0x594051, _0x5efef8);
            _0x3ec95c.intersects(_0x4d32b5, _0x2f876a)
              ? _0x47f1a9++
              : _0x16ee23++;
          }),
          (_0x49b2dd = _0x16ee23 > 0 && _0x47f1a9 > 1));
      }
    }
    return _0x3141f9("div", {
      children: [
        _0x2b76a7(Dt, {
          title: _0x29f940.t("sheets-sparkline-ui.panel.composeManager"),
          children: _0x3141f9(_0x19bb03, {
            className: "univer-flex univer-justify-between",
            children: [
              _0x3141f9(_0x28df0b, {
                disabled: !_0x49b2dd,
                onClick: () => _0x4b0a24(),
                children: [
                  _0x2b76a7(_0x1790b0, {}),
                  _0x29f940.t("sheets-sparkline-ui.panel.compose"),
                ],
              }),
              _0x3141f9(_0x28df0b, {
                disabled: !_0x4cb798,
                onClick: () => _0x4231b4(),
                children: [
                  _0x2b76a7(_0x5e7e23, {}),
                  _0x29f940.t("sheets-sparkline-ui.panel.unCompose"),
                ],
              }),
            ],
          }),
        }),
        _0x3141f9(Dt, {
          title: _0x29f940.t("sheets-sparkline-ui.panel.horizontal"),
          children: [
            _0x2b76a7("div", {
              className: "univer-mb-2 univer-text-sm",
              children: _0x2b76a7(_0x1162fd, {
                checked:
                  (_0x28017f = _0x417800.config["axis"]) == null
                    ? undefined
                    : _0x28017f.visible,
                onChange: (_0x53e49c) => _0x285f13(_0x53e49c),
                children: _0x29f940.t("sheets-sparkline-ui.panel.showZeroAxis"),
              }),
            }),
            ((_0x301cce = _0x417800.config["axis"]) == null
              ? undefined
              : _0x301cce.visible) &&
              _0x3141f9("div", {
                className: "univer-mb-2",
                children: [
                  _0x2b76a7("div", {
                    className: "univer-mb-2",
                    children: _0x29f940.t(
                      "sheets-sparkline-ui.panel.axisColor",
                    ),
                  }),
                  _0x2b76a7(Ot, {
                    color:
                      ((_0x5e573c = _0x417800.config["axis"]) == null
                        ? undefined
                        : _0x5e573c.color) ?? "#000",
                    onChange: (_0x4649a1) => _0x4e54c5(_0x4649a1),
                  }),
                ],
              }),
            _0x2b76a7("div", {
              className: "univer-mb-2\x20univer-text-sm",
              children: _0x2b76a7(_0x1162fd, {
                checked:
                  (_0x3fa645 = _0x417800.config["axis"]) == null
                    ? undefined
                    : _0x3fa645.reverse,
                onChange: (_0x1ecec8) => _0x394b21(_0x1ecec8),
                children: _0x29f940.t("sheets-sparkline-ui.panel.reverse"),
              }),
            }),
          ],
        }),
        _0x2b76a7(Dt, {
          title: _0x29f940.t("sheets-sparkline-ui.panel.vertical"),
          children: _0x3141f9("div", {
            children: [
              _0x2b76a7("div", {
                className:
                  "univer-mx-0 univer-my-2 univer-text-sm univer-text-gray-500",
                children: _0x29f940.t("sheets-sparkline-ui.panel.min"),
              }),
              _0x3141f9(_0x2ba552, {
                value:
                  ((_0x50684d = _0x417800.config["extremumMin"]) == null
                    ? undefined
                    : _0x50684d.type) ?? _0x38ff27.SELF_EXTREMUM,
                className: "univer-flex univer-flex-col",
                onChange: (_0x18d9c8) => _0x53da56(_0x18d9c8, "min"),
                children: [
                  _0x2b76a7(_0x40aab1, {
                    value: _0x38ff27.SELF_EXTREMUM,
                    children: _0x29f940.t("sheets-sparkline-ui.panel.itemMin"),
                  }),
                  _0x2b76a7(_0x40aab1, {
                    value: _0x38ff27.GROUP_EXTREMUM,
                    children: _0x29f940.t("sheets-sparkline-ui.panel.groupMin"),
                  }),
                  _0x2b76a7(_0x40aab1, {
                    value: _0x38ff27.CUSTOM_EXTREMUM,
                    children: _0x3141f9("div", {
                      className: "univer-flex univer-items-center",
                      children: [
                        _0x2b76a7("div", {
                          children: _0x29f940.t(
                            "sheets-sparkline-ui.panel.customMin",
                          ),
                        }),
                        _0x2b76a7(_0x178de7, {
                          disabled:
                            ((_0x14f940 = _0x417800.config["extremumMin"]) ==
                            null
                              ? undefined
                              : _0x14f940.type) !== _0x38ff27.CUSTOM_EXTREMUM,
                          value:
                            (_0x5f16f1 = _0x417800.config["extremumMin"]) ==
                            null
                              ? undefined
                              : _0x5f16f1.value,
                          onChange: (_0x34d556) => {
                            typeof _0x34d556 == "number" &&
                              _0x158030(_0x34d556, "min");
                          },
                          className: "univer-ml-3 univer-h-6 univer-w-14",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              _0x2b76a7("br", {}),
              _0x2b76a7("div", {
                className:
                  "univer-mx-0\x20univer-my-2\x20univer-text-sm\x20univer-text-gray-500",
                children: _0x29f940.t("sheets-sparkline-ui.panel.max"),
              }),
              _0x3141f9(_0x2ba552, {
                value:
                  ((_0x5c42e0 = _0x417800.config["extremumMax"]) == null
                    ? undefined
                    : _0x5c42e0.type) ?? _0x38ff27.SELF_EXTREMUM,
                className: "univer-flex univer-flex-col",
                onChange: (_0x388bf2) => _0x53da56(_0x388bf2, "max"),
                children: [
                  _0x2b76a7(_0x40aab1, {
                    value: _0x38ff27.SELF_EXTREMUM,
                    children: _0x29f940.t("sheets-sparkline-ui.panel.itemMax"),
                  }),
                  _0x2b76a7(_0x40aab1, {
                    value: _0x38ff27.GROUP_EXTREMUM,
                    children: _0x29f940.t("sheets-sparkline-ui.panel.groupMax"),
                  }),
                  _0x2b76a7(_0x40aab1, {
                    value: _0x38ff27.CUSTOM_EXTREMUM,
                    children: _0x3141f9("div", {
                      className: "univer-flex univer-items-center",
                      children: [
                        _0x2b76a7("div", {
                          children: _0x29f940.t(
                            "sheets-sparkline-ui.panel.customMax",
                          ),
                        }),
                        _0x2b76a7(_0x178de7, {
                          disabled:
                            ((_0x3bcad2 = _0x417800.config["extremumMax"]) ==
                            null
                              ? undefined
                              : _0x3bcad2.type) !== _0x38ff27.CUSTOM_EXTREMUM,
                          value:
                            (_0x2138bb = _0x417800.config["extremumMax"]) ==
                            null
                              ? undefined
                              : _0x2138bb.value,
                          onChange: (_0x2772e5) => {
                            typeof _0x2772e5 == "number" &&
                              _0x158030(_0x2772e5, "max");
                          },
                          className: "univer-ml-3 univer-h-6 univer-w-14",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        _0x3141f9(Dt, {
          title: _0x29f940.t("sheets-sparkline-ui.panel.moreSetting"),
          containerStyle: { border: "none" },
          children: [
            _0x2b76a7(_0x1162fd, {
              checked: _0x417800.config["containHiddenCells"],
              onChange: (_0x3a9d6f) => _0xc0284(_0x3a9d6f),
              children: _0x29f940.t("sheets-sparkline-ui.panel.showHidden"),
            }),
            _0x3141f9("div", {
              className: "univer-mt-3",
              children: [
                _0x2b76a7("div", {
                  className:
                    "univer-mb-2 univer-text-sm univer-text-gray-800 dark:!univer-text-gray-100",
                  children: _0x29f940.t(
                    "sheets-sparkline-ui.panel.showEmptyAs",
                  ),
                }),
                _0x2b76a7(_0x101d2f, {
                  className: "univer-w-full !univer-min-w-0",
                  value: _0x417800.config["emptyShowAs"] ?? _0x15931d.SPACING,
                  options: [
                    {
                      label: _0x29f940.t("sheets-sparkline-ui.panel.spacing"),
                      value: _0x15931d.SPACING,
                    },
                    {
                      label: _0x29f940.t("sheets-sparkline-ui.panel.zeroValue"),
                      value: _0x15931d.ZERO_VALUE,
                    },
                    {
                      label: _0x29f940.t(
                        "sheets-sparkline-ui.panel.connectWithLine",
                      ),
                      value: _0x15931d.CONNECT_WITH_LINE,
                    },
                  ],
                  onChange: (_0x50e54a) => _0x38f33d(_0x50e54a, "empty"),
                }),
              ],
            }),
            _0x3141f9("div", {
              className: "univer-mt-3",
              children: [
                _0x2b76a7("div", {
                  className:
                    "univer-mb-2 univer-text-sm univer-text-gray-800 dark:!univer-text-gray-100",
                  children: _0x29f940.t(
                    "sheets-sparkline-ui.panel.showNonNumAs",
                  ),
                }),
                _0x2b76a7(_0x101d2f, {
                  className: "univer-w-full !univer-min-w-0",
                  value: _0x417800.config["nonNumShowAs"] ?? _0x15931d.SPACING,
                  options: [
                    {
                      label: _0x29f940.t("sheets-sparkline-ui.panel.spacing"),
                      value: _0x15931d.SPACING,
                    },
                    {
                      label: _0x29f940.t("sheets-sparkline-ui.panel.zeroValue"),
                      value: _0x15931d.ZERO_VALUE,
                    },
                    {
                      label: _0x29f940.t(
                        "sheets-sparkline-ui.panel.connectWithLine",
                      ),
                      value: _0x15931d.CONNECT_WITH_LINE,
                    },
                  ],
                  onChange: (_0x52dedf) => _0x38f33d(_0x52dedf, "nonNum"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  At = (_0x2e9390) => {
    let {
        onCheckboxChange: _0x177ee6,
        onColorChange: _0x2b6ab4,
        type: _0x2f952c,
        config: _0x24b8c0,
        chartType: _0x56870e,
      } = _0x2e9390,
      _0x2665f8 = _0x5d1332(_0x5a68f9),
      _0x2a1bda = _0x13bdd4.standard[1],
      _0x5c4a2e = _0x5c01d2(
        () => new _0x3315ae(_0x2a1bda).toHexString(),
        [_0x2a1bda],
      ),
      _0x1d1104 =
        _0x2f952c === "markersPoint" && _0x56870e !== _0x4046bd.LINE_CHART,
      _0x24886d =
        (_0x24b8c0 == null ? undefined : _0x24b8c0.color) ?? _0x2a1bda,
      _0xb0847b = new _0x3315ae(_0x24886d).isDark();
    return _0x3141f9("div", {
      className: _0x566260(
        "univer-flex univer-h-5 univer-w-[45%] univer-items-center univer-justify-between univer-rounded-sm hover:univer-bg-gray-200",
      ),
      children: [
        _0x2b76a7(_0x1162fd, {
          checked: _0x24b8c0 == null ? undefined : _0x24b8c0.visible,
          disabled: _0x1d1104,
          onChange: (_0x1db2b1) => _0x177ee6(_0x1db2b1, _0x2f952c),
          children: _0x2665f8.t("sheets-sparkline-ui.panel." + _0x2f952c),
        }),
        (_0x24b8c0 == null ? undefined : _0x24b8c0.visible) &&
          _0x2b76a7(_0x2b33d7, {
            overlay: _0x2b76a7("div", {
              className: "univer-p-4",
              children: _0x2b76a7(_0x2f0c95, {
                value:
                  (_0x24b8c0 == null ? undefined : _0x24b8c0.color) ??
                  _0x5c4a2e,
                onChange: (_0x2e01c7) => _0x2b6ab4(_0x2e01c7, _0x2f952c),
              }),
            }),
            children: _0x2b76a7("span", {
              children: _0x2b76a7(_0x1fb7da, {
                className: _0x566260("univer-mr-0.5 univer-mt-0.5", {
                  "univer-text-gray-0": _0xb0847b,
                }),
                extend: { colorChannel1: _0x24886d },
              }),
            }),
          }),
      ],
    });
  },
  jt = ({ config: _0x40672d, ctx: _0x33b4c2 }) => {
    var _0x50b4f6, _0x574300, _0x2522e5, _0x130f67, _0xf1b71e, _0x2ca243;
    let _0x322d51 = _0x5d1332(_0x4350b0),
      _0x1c953e = _0x5d1332(_0x29fa15),
      _0x2e882f = _0x5d1332(_0x5a68f9),
      _0x28f042 = _0x5d1332(_0x593f58),
      _0x5ee9dc =
        (_0x40672d == null ? undefined : _0x40672d.config["type"]) ??
        _0x4046bd.LINE_CHART,
      _0x5e2e47 = _0x5ee9dc === _0x4046bd.LINE_CHART,
      _0x123ada = (_0x34de10) => {
        let _0x5652cd = _0x50da01.deepClone(_0x40672d) ?? {};
        ((_0x5652cd != null && _0x5652cd.config) || (_0x5652cd.config = {}),
          (_0x5652cd.config["type"] = _0x34de10),
          _0x322d51.executeCommand(_0x4b88fa.id, {
            config: _0x5652cd,
            isChangeDataSource: false,
          }));
      },
      _0x579641 = (_0x1f94cc, _0x1ef5d3) => {
        var _0x2e4f67;
        let _0x582f24 = _0x50da01.deepClone(_0x40672d) ?? {};
        ((_0x582f24 != null && _0x582f24.config) || (_0x582f24.config = {}),
          _0x582f24.config["type"] && delete _0x582f24.config["type"],
          (_0x582f24 != null && _0x582f24.config["points"]) ||
            (_0x582f24.config["points"] = {}),
          (_0x582f24 != null &&
            (_0x2e4f67 = _0x582f24.config["points"]) != null &&
            _0x2e4f67[_0x1ef5d3]) ||
            (_0x582f24.config["points"][_0x1ef5d3] = {}),
          (_0x582f24.config["points"][_0x1ef5d3].visible = _0x1f94cc),
          _0x322d51.executeCommand(_0x4b88fa.id, {
            config: _0x582f24,
            isChangeDataSource: false,
          }));
      },
      _0x3b51bc = (_0x2b1258, _0x2ba459) => {
        var _0x53cc60;
        let _0x4e8ffb = _0x50da01.deepClone(_0x40672d) ?? {};
        ((_0x4e8ffb != null && _0x4e8ffb.config) || (_0x4e8ffb.config = {}),
          _0x4e8ffb.config["type"] && delete _0x4e8ffb.config["type"],
          (_0x4e8ffb != null && _0x4e8ffb.config["points"]) ||
            (_0x4e8ffb.config["points"] = {}),
          (_0x4e8ffb != null &&
            (_0x53cc60 = _0x4e8ffb.config["points"]) != null &&
            _0x53cc60[_0x2ba459]) ||
            (_0x4e8ffb.config["points"][_0x2ba459] = {}),
          (_0x4e8ffb.config["points"][_0x2ba459].color = _0x2b1258),
          (_0x4e8ffb.config["themeType"] = _0x27e692.CUSTOM),
          _0x322d51.executeCommand(_0x4b88fa.id, {
            config: _0x4e8ffb,
            isChangeDataSource: false,
          }));
      },
      _0xea5f7a = (_0x1a9c08) => {
        let _0x2d71c4 = _0x50da01.deepClone(_0x40672d) ?? {};
        ((_0x2d71c4 != null && _0x2d71c4.config) || (_0x2d71c4.config = {}),
          _0x2d71c4.config["type"] && delete _0x2d71c4.config["type"],
          (_0x2d71c4.config["themeType"] = _0x1a9c08),
          _0x2d71c4.config["seriesColor"] != null &&
            (_0x2d71c4.config["seriesColor"] = undefined),
          (_0x2d71c4 != null && _0x2d71c4.config["points"]) ||
            (_0x2d71c4.config["points"] = {}));
        let _0x4e242e = _0x13bdd4[_0x1a9c08];
        (_0x21fefa.forEach((_0x408aca) => {
          var _0x27a822;
          _0x2d71c4 != null &&
          (_0x27a822 = _0x2d71c4.config["points"]) != null &&
          _0x27a822[_0x408aca]
            ? (_0x2d71c4.config["points"][_0x408aca].color = _0x4e242e[1])
            : (_0x2d71c4.config["points"][_0x408aca] = { color: _0x4e242e[1] });
        }),
          _0x322d51.executeCommand(_0x4b88fa.id, {
            config: _0x2d71c4,
            isChangeDataSource: false,
          }));
      },
      _0x197b19 = (_0x11e2db) => {
        let _0x188b29 = _0x50da01.deepClone(_0x40672d) ?? {};
        ((_0x188b29 != null && _0x188b29.config) || (_0x188b29.config = {}),
          _0x188b29.config["type"] && delete _0x188b29.config["type"],
          (_0x188b29.config["seriesColor"] = _0x11e2db),
          (_0x188b29.config["themeType"] = _0x27e692.CUSTOM),
          _0x322d51.executeCommand(_0x4b88fa.id, {
            config: _0x188b29,
            isChangeDataSource: false,
          }));
      },
      _0x2fe0bc = (_0x225b52) => {
        let _0x92f248 = _0x50da01.deepClone(_0x40672d) ?? {};
        ((_0x92f248 != null && _0x92f248.config) || (_0x92f248.config = {}),
          _0x92f248.config["type"] && delete _0x92f248.config["type"]);
        let _0x2443ed = Number.parseInt(_0x225b52, 10);
        ((_0x92f248.config["lineWidth"] = _0x2443ed),
          _0x322d51.executeCommand(_0x4b88fa.id, {
            config: _0x92f248,
            isChangeDataSource: false,
          }));
      },
      _0x5c879b = (_0xec5454) => {
        let _0xf833d1 = _0x50da01.deepClone(_0x40672d) ?? {};
        ((_0xf833d1 != null && _0xf833d1.config) || (_0xf833d1.config = {}),
          _0xf833d1.config["type"] && delete _0xf833d1.config["type"],
          _0x5e2e47
            ? (_0xf833d1.config["showGradient"] = _0xec5454)
            : (_0xf833d1.config["showRadius"] = _0xec5454),
          _0x322d51.executeCommand(_0x4b88fa.id, {
            config: _0xf833d1,
            isChangeDataSource: false,
          }));
      },
      _0x2382f5 = (_0x1794a8) => {
        _0x322d51.executeCommand(_0x4d1ea0.id, { isIcon: _0x1794a8 });
      },
      _0xf29fc0 = new Set([_0x33b4c2.groupId]),
      _0x1a6b8b = _0x33b4c2.range;
    for (
      let _0x4b601c = _0x1a6b8b.startRow;
      _0x4b601c <= _0x1a6b8b.endRow;
      _0x4b601c++
    )
      for (
        let _0x543185 = _0x1a6b8b.startColumn;
        _0x543185 <= _0x1a6b8b.endColumn;
        _0x543185++
      ) {
        let _0x502f2b = _0x28f042.getSparkline(
          _0x33b4c2.unitId,
          _0x33b4c2.subUnitId,
          _0x4b601c,
          _0x543185,
        );
        if (_0x502f2b && (_0xf29fc0.add(_0x502f2b), _0xf29fc0.size > 1)) break;
      }
    return _0x3141f9("div", {
      children: [
        _0x3141f9("div", {
          className:
            "univer-mb-3 univer-flex univer-items-center univer-justify-between",
          children: [
            _0x2b76a7("div", {
              className: "univer-text-sm\x20univer-font-medium",
              children: _0x2e882f.t(
                "sheets-sparkline-ui.panel.sourceAndPosition",
              ),
            }),
            _0x2b76a7("div", {
              className: _0x566260("univer-cursor-pointer", {
                "univer-cursor-not-allowed": _0xf29fc0.size > 1,
              }),
              onClick: async () => {
                if (_0xf29fc0.size > 1) return;
                let {
                  primary: _0x63fd93,
                  range: _0x433cf1,
                  groupId: _0x14febc,
                } = _0x33b4c2;
                if (
                  !(await gt(_0x1c953e, [_0x433cf1], undefined, {
                    groupId: _0x14febc,
                    primary: _0x50da01.deepClone(_0x63fd93),
                  }))
                )
                  return false;
              },
              children: _0x2b76a7(_0x2a5b9d, {}),
            }),
          ],
        }),
        _0x3141f9("div", {
          children: [
            _0x2b76a7("div", {
              className: "univer-mb-3 univer-text-sm univer-font-medium",
              children: _0x2e882f.t("sheets-sparkline-ui.panel.type"),
            }),
            _0x2b76a7("div", {
              className: "univer-mb-5 univer-text-sm",
              children: _0x2b76a7(_0x48a552, {
                className: "univer-w-full",
                value: _0x5ee9dc,
                items: [
                  {
                    label: _0x3141f9("span", {
                      className:
                        "univer-flex univer-items-center univer-justify-center univer-gap-1",
                      children: [
                        _0x2b76a7(_0x503856, {
                          className: "univer-flex-shrink-0",
                        }),
                        _0x2b76a7("span", {
                          className: "univer-truncate",
                          children: _0x2e882f.t(
                            "sheets-sparkline-ui.panel.line",
                          ),
                        }),
                      ],
                    }),
                    value: _0x4046bd.LINE_CHART,
                  },
                  {
                    label: _0x3141f9("span", {
                      className:
                        "univer-flex\x20univer-items-center\x20univer-justify-center\x20univer-gap-1",
                      children: [
                        _0x2b76a7(_0x4561ae, {
                          className: "univer-flex-shrink-0",
                        }),
                        _0x2b76a7("span", {
                          className: "univer-truncate",
                          children: _0x2e882f.t(
                            "sheets-sparkline-ui.panel.bar",
                          ),
                        }),
                      ],
                    }),
                    value: _0x4046bd.BAR_CHART,
                  },
                  {
                    label: _0x3141f9("span", {
                      className:
                        "univer-flex\x20univer-items-center\x20univer-justify-center\x20univer-gap-1",
                      children: [
                        _0x2b76a7(_0x24fbfb, {
                          className: "univer-flex-shrink-0",
                        }),
                        _0x2b76a7("span", {
                          className: "univer-truncate",
                          children: _0x2e882f.t(
                            "sheets-sparkline-ui.panel.profitAndLoss",
                          ),
                        }),
                      ],
                    }),
                    value: _0x4046bd.PROFIT_AND_LOSS_CHART,
                  },
                  {
                    label: _0x3141f9("span", {
                      className:
                        "univer-flex univer-items-center univer-justify-center univer-gap-1",
                      children: [
                        _0x2b76a7(_0xf6b6e0, {
                          className: "univer-flex-shrink-0",
                        }),
                        _0x2b76a7("span", {
                          className: "univer-truncate",
                          children: _0x2e882f.t(
                            "sheets-sparkline-ui.panel.pie",
                          ),
                        }),
                      ],
                    }),
                    value: _0x4046bd.PIE_CHART,
                  },
                ],
                onChange: _0x123ada,
              }),
            }),
          ],
        }),
        _0x40672d.config["type"] !== _0x4046bd.PIE_CHART &&
          _0x3141f9(_0x2cf30d, {
            children: [
              _0x3141f9("div", {
                children: [
                  _0x2b76a7("div", {
                    className: "univer-mb-3 univer-text-sm univer-font-medium",
                    children: _0x2e882f.t("sheets-sparkline-ui.panel.theme"),
                  }),
                  _0x2b76a7("div", {
                    className: "univer-mb-5\x20univer-text-sm",
                    children: _0x2b76a7(_0x101d2f, {
                      className: "univer-w-full\x20!univer-min-w-0",
                      value: _0x2e882f.t(
                        "sheets-sparkline-ui.panel." +
                          ((_0x40672d == null
                            ? undefined
                            : _0x40672d.config["themeType"]) ??
                            _0x27e692.STANDARD),
                      ),
                      options: Object.keys(_0x13bdd4).map((_0x30ea49) => {
                        let _0x466297 = _0x13bdd4[_0x30ea49];
                        return {
                          label: _0x3141f9("div", {
                            className: "univer-flex univer-items-center",
                            children: [
                              _0x2b76a7("div", {
                                className:
                                  "univer-rounded-tl-0.5 univer-rounded-bl-0.5 univer-h-4 univer-w-6",
                                style: { background: _0x466297[0] },
                              }),
                              _0x2b76a7("div", {
                                className:
                                  "univer-rounded-tl-0.5 univer-rounded-bl-0.5 univer-mr-2 univer-h-4 univer-w-6",
                                style: { background: _0x466297[1] },
                              }),
                              _0x2b76a7("div", {
                                children: _0x2e882f.t(
                                  "sheets-sparkline-ui.panel." + _0x30ea49,
                                ),
                              }),
                            ],
                          }),
                          value: _0x30ea49,
                        };
                      }),
                      onChange: (_0x3c1562) => _0xea5f7a(_0x3c1562),
                    }),
                  }),
                ],
              }),
              _0x3141f9("div", {
                children: [
                  _0x2b76a7("div", {
                    className:
                      "univer-mb-3\x20univer-text-sm\x20univer-font-medium",
                    children: _0x2e882f.t(
                      "sheets-sparkline-ui.panel.adjustStyle",
                    ),
                  }),
                  _0x3141f9("div", {
                    className: "univer-mb-5\x20univer-text-sm",
                    children: [
                      _0x3141f9("div", {
                        className: "univer-flex\x20univer-gap-5",
                        children: [
                          _0x3141f9("div", {
                            className: "univer-flex-1",
                            children: [
                              _0x2b76a7("div", {
                                className: "univer-mb-2",
                                children: _0x2e882f.t(
                                  "sheets-sparkline-ui.panel.sparklineColor",
                                ),
                              }),
                              _0x2b76a7(Ot, {
                                color:
                                  (_0x40672d == null
                                    ? undefined
                                    : _0x40672d.config["seriesColor"]) ??
                                  "transparent",
                                onChange: _0x197b19,
                              }),
                            ],
                          }),
                          _0x5ee9dc === _0x4046bd.LINE_CHART &&
                            _0x3141f9("div", {
                              className: "univer-flex-1",
                              children: [
                                _0x2b76a7("div", {
                                  className: "univer-mb-2",
                                  children: _0x2e882f.t(
                                    "sheets-sparkline-ui.panel.lineWidth",
                                  ),
                                }),
                                _0x2b76a7(_0x101d2f, {
                                  className: "univer-w-full !univer-min-w-0",
                                  value:
                                    _0x40672d != null &&
                                    _0x40672d.config["lineWidth"]
                                      ? _0x40672d.config["lineWidth"] + "px"
                                      : "2px",
                                  options: [
                                    { value: "1px", label: "1px" },
                                    { value: "2px", label: "2px" },
                                    { value: "3px", label: "3px" },
                                    { value: "4px", label: "4px" },
                                  ],
                                  onChange: (_0x3a6b60) => _0x2fe0bc(_0x3a6b60),
                                }),
                              ],
                            }),
                        ],
                      }),
                      _0x2b76a7(_0x1162fd, {
                        className: "univer-mt-2",
                        checked: _0x5e2e47
                          ? _0x40672d == null
                            ? undefined
                            : _0x40672d.config["showGradient"]
                          : _0x40672d == null
                            ? undefined
                            : _0x40672d.config["showRadius"],
                        onChange: (_0x533e62) => _0x5c879b(_0x533e62),
                        children: _0x5e2e47
                          ? _0x2e882f.t("sheets-sparkline-ui.panel.gradient")
                          : _0x2e882f.t("sheets-sparkline-ui.panel.radius"),
                      }),
                    ],
                  }),
                ],
              }),
              _0x3141f9("div", {
                children: [
                  _0x2b76a7("div", {
                    className:
                      "univer-mb-3\x20univer-text-sm\x20univer-font-medium",
                    children: _0x2e882f.t("sheets-sparkline-ui.panel.marker"),
                  }),
                  _0x3141f9("div", {
                    className: "univer-mb-5\x20univer-text-sm",
                    children: [
                      _0x3141f9("div", {
                        className:
                          "univer-mb-2\x20univer-flex\x20univer-w-full\x20univer-justify-between",
                        children: [
                          _0x2b76a7(
                            At,
                            {
                              onCheckboxChange: _0x579641,
                              onColorChange: _0x3b51bc,
                              chartType: _0x5ee9dc,
                              type: "highPoint",
                              config:
                                _0x40672d == null ||
                                (_0x50b4f6 = _0x40672d.config["points"]) == null
                                  ? undefined
                                  : _0x50b4f6.highPoint,
                            },
                            "highPoint",
                          ),
                          _0x2b76a7(
                            At,
                            {
                              onCheckboxChange: _0x579641,
                              onColorChange: _0x3b51bc,
                              chartType: _0x5ee9dc,
                              type: "firstPoint",
                              config:
                                _0x40672d == null ||
                                (_0x574300 = _0x40672d.config["points"]) == null
                                  ? undefined
                                  : _0x574300.firstPoint,
                            },
                            "firstPoint",
                          ),
                        ],
                      }),
                      _0x3141f9("div", {
                        className:
                          "univer-mb-2 univer-flex univer-w-full univer-justify-between",
                        children: [
                          _0x2b76a7(
                            At,
                            {
                              onCheckboxChange: _0x579641,
                              onColorChange: _0x3b51bc,
                              chartType: _0x5ee9dc,
                              type: "lowPoint",
                              config:
                                _0x40672d == null ||
                                (_0x2522e5 = _0x40672d.config["points"]) == null
                                  ? undefined
                                  : _0x2522e5.lowPoint,
                            },
                            "lowPoint",
                          ),
                          _0x2b76a7(
                            At,
                            {
                              onCheckboxChange: _0x579641,
                              onColorChange: _0x3b51bc,
                              chartType: _0x5ee9dc,
                              type: "lastPoint",
                              config:
                                _0x40672d == null ||
                                (_0x130f67 = _0x40672d.config["points"]) == null
                                  ? undefined
                                  : _0x130f67.lastPoint,
                            },
                            "lastPoint",
                          ),
                        ],
                      }),
                      _0x3141f9("div", {
                        className:
                          "univer-mb-2 univer-flex univer-w-full univer-justify-between",
                        children: [
                          _0x2b76a7(
                            At,
                            {
                              onCheckboxChange: _0x579641,
                              onColorChange: _0x3b51bc,
                              chartType: _0x5ee9dc,
                              type: "negativePoint",
                              config:
                                _0x40672d == null ||
                                (_0xf1b71e = _0x40672d.config["points"]) == null
                                  ? undefined
                                  : _0xf1b71e.negativePoint,
                            },
                            "negativePoint",
                          ),
                          _0x2b76a7(
                            At,
                            {
                              onCheckboxChange: _0x579641,
                              onColorChange: _0x3b51bc,
                              chartType: _0x5ee9dc,
                              type: "markersPoint",
                              config:
                                _0x40672d == null ||
                                (_0x2ca243 = _0x40672d.config["points"]) == null
                                  ? undefined
                                  : _0x2ca243.markersPoint,
                            },
                            "markersPoint",
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        _0x40672d.config["type"] === _0x4046bd.PIE_CHART &&
          _0x2b76a7("div", {
            className: "univer-mb-3 univer-text-sm univer-font-medium",
            children: _0x2e882f.t("sheets-sparkline-ui.panel.manager"),
          }),
        _0x3141f9(_0x19bb03, {
          className: "univer-flex univer-justify-between",
          children: [
            _0x3141f9(_0x28df0b, {
              onClick: () => _0x2382f5(true),
              children: [
                _0x2b76a7(_0x42c83c, {}),
                _0x2e882f.t("sheets-sparkline-ui.panel.removeItem"),
              ],
            }),
            _0x3141f9(_0x28df0b, {
              onClick: () => _0x2382f5(false),
              children: [
                _0x2b76a7(_0x42c83c, {}),
                _0x2e882f.t("sheets-sparkline-ui.panel.removeGroup"),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Mt = () => {
    var _0xcd2f39, _0xf99ec8, _0x1c339d;
    let _0x134b02 = _0x39f5d7(_0x5d1332(_0x43d454).selectionMoveEnd$),
      _0x34da3d = _0x5d1332(_0x593f58),
      _0x235585 = _0x5d1332(_0x195930),
      _0x15829b = _0x5d1332(_0x5a68f9),
      _0x8e7b19 = _0x1004a3(_0x235585),
      [_0x15b4fd, _0x7fd52] = _0x41dd48("basic"),
      _0x288b56 = _0x15b4fd === "basic",
      _0x225647 = _0x8e7b19 == null ? undefined : _0x8e7b19.unitId,
      _0x2fd3bf = _0x8e7b19 == null ? undefined : _0x8e7b19.subUnitId,
      _0x579d3a =
        (_0x134b02 == null ? undefined : _0x134b02.length) === 1
          ? _0x134b02[0]
          : undefined,
      _0x256d5a = _0x579d3a == null ? undefined : _0x579d3a.primary,
      _0x372e1b = _0x579d3a == null ? undefined : _0x579d3a.range,
      _0x302858 = _0x34da3d.getSparklineCache(),
      _0x28ede3 =
        _0x225647 && _0x2fd3bf
          ? _0x302858 == null ||
            (_0xcd2f39 = _0x302858.sparklineAnchorMap["get"](_0x225647)) == null
            ? undefined
            : _0xcd2f39.get(_0x2fd3bf)
          : undefined,
      _0x735b83 = _0x256d5a
        ? _0x28ede3 == null ||
          (_0xf99ec8 = _0x28ede3.matrix["getValue"](
            _0x256d5a.actualRow,
            _0x256d5a.actualColumn,
          )) == null
          ? undefined
          : _0xf99ec8.groupId
        : undefined,
      _0x33e2c0 =
        _0x225647 && _0x2fd3bf && _0x735b83
          ? (_0x1c339d = _0x302858.sparklineModel["get"](_0x225647)) == null ||
            (_0x1c339d = _0x1c339d.get(_0x2fd3bf)) == null
            ? undefined
            : _0x1c339d.get(_0x735b83)
          : undefined,
      _0x2320df = _0x39f5d7(
        _0x225647 && _0x2fd3bf && _0x735b83
          ? () =>
              _0x34da3d.updateConfig$["pipe"](
                _0xb42bcd(
                  (_0x2b0a78) =>
                    _0x2b0a78.unitId === _0x225647 &&
                    _0x2b0a78.subUnitId === _0x2fd3bf &&
                    _0x2b0a78.groupId === _0x735b83,
                ),
                _0x1f3069((_0x50683c) => _0x50683c.config),
                _0x6980a3(_0x33e2c0),
              )
          : null,
        _0x33e2c0,
        false,
        [_0x33e2c0, _0x735b83, _0x34da3d, _0x2fd3bf, _0x225647],
      );
    if (
      !_0x225647 ||
      !_0x2fd3bf ||
      !_0x256d5a ||
      !_0x372e1b ||
      !_0x735b83 ||
      !_0x2320df
    )
      return null;
    let _0x364862 = {
      unitId: _0x225647,
      subUnitId: _0x2fd3bf,
      range: _0x372e1b,
      primary: _0x256d5a,
      groupId: _0x735b83,
    };
    return _0x3141f9("div", {
      className:
        "univer-max-w-[290px]\x20univer-pb-4\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
      children: [
        _0x3141f9("div", {
          className:
            "univer-relative univer-mx-0 univer-my-4 univer-box-border univer-flex univer-h-10 univer-items-center univer-justify-around",
          children: [
            _0x3141f9("div", {
              className: _0x566260(
                "univer-relative univer-flex univer-h-full univer-cursor-pointer univer-flex-col univer-font-medium univer-leading-7",
                { "univer-text-primary-600": _0x288b56 },
              ),
              children: [
                _0x2b76a7("div", {
                  onClick: () => _0x7fd52("basic"),
                  children: _0x15829b.t("sheets-sparkline-ui.panel.basic"),
                }),
                _0x288b56 &&
                  _0x2b76a7("div", {
                    className:
                      "univer-absolute univer-bottom-0 univer-h-0.5 univer-w-full univer-rounded-sm univer-bg-primary-600 univer-transition-transform univer-duration-300 univer-ease-in-out",
                  }),
              ],
            }),
            _0x3141f9("div", {
              className: _0x566260(
                "univer-relative\x20univer-flex\x20univer-h-full\x20univer-cursor-pointer\x20univer-flex-col\x20univer-font-medium\x20univer-leading-7",
                {
                  "univer-text-primary-600": !_0x288b56,
                  "univer-cursor-not-allowed\x20univer-text-gray-200":
                    _0x2320df.config["type"] === _0x4046bd.PIE_CHART,
                },
              ),
              children: [
                _0x2b76a7("div", {
                  onClick: () => {
                    _0x2320df.config["type"] !== _0x4046bd.PIE_CHART &&
                      _0x7fd52("advanced");
                  },
                  children: _0x15829b.t("sheets-sparkline-ui.panel.advanced"),
                }),
                !_0x288b56 &&
                  _0x2b76a7("div", {
                    className:
                      "univer-bg-pruniver-text-primary-600\x20univer-absolute\x20univer-bottom-0\x20univer-h-0.5\x20univer-w-full\x20univer-rounded-sm\x20univer-transition-transform\x20univer-duration-300\x20univer-ease-in-out",
                  }),
              ],
            }),
          ],
        }),
        _0x2b76a7("div", {
          children: _0x2b76a7(_0x288b56 ? jt : kt, {
            config: _0x2320df,
            ctx: _0x364862,
          }),
        }),
      ],
    });
  };
function Nt(_0x5b5802, _0x532425, _0x46374d) {
  if (!_0x46374d) return false;
  if (_0x532425.length !== _0x46374d.length) {
    if (_0x46374d.length === 1) {
      let _0x143eda = _0x46374d[0];
      if (
        _0x143eda.startRow !== _0x143eda.endRow &&
        _0x143eda.startColumn !== _0x143eda.endColumn
      )
        return false;
    } else return false;
  }
  if (_0x5b5802 === "item") {
    if (_0x46374d.length !== 1) return false;
    let {
      startRow: _0x14e983,
      startColumn: _0x31e655,
      endRow: _0x30146f,
      endColumn: _0x256c6e,
    } = _0x46374d[0];
    if (_0x14e983 !== _0x30146f && _0x31e655 !== _0x256c6e) return false;
  }
  if (_0x46374d.length > 1) {
    if (
      _0x46374d.some((_0x491c90) => {
        let {
          startRow: _0x4a9e35,
          startColumn: _0x1e588b,
          endRow: _0x340b33,
          endColumn: _0x1f3c88,
        } = _0x491c90;
        return _0x4a9e35 !== _0x340b33 || _0x1e588b !== _0x1f3c88;
      })
    )
      return false;
  } else {
    let {
      startRow: _0x5e6037,
      startColumn: _0xb2ee4f,
      endRow: _0x1f82c3,
      endColumn: _0x51a80e,
    } = _0x46374d[0];
    if (_0x5e6037 !== _0x1f82c3 && _0xb2ee4f !== _0x51a80e) return false;
  }
  let _0x277933 = 0;
  for (let _0x377d2a of _0x46374d)
    _0x277933 +=
      (_0x377d2a.endRow - _0x377d2a.startRow + 1) *
      (_0x377d2a.endColumn - _0x377d2a.startColumn + 1);
  if (_0x532425.length > 1) {
    for (let _0x5488f3 of _0x532425) {
      let {
        startColumn: _0x27fb4b,
        startRow: _0xc40f72,
        endRow: _0x298dec,
        endColumn: _0x3d67ab,
      } = _0x5488f3;
      if (_0x27fb4b !== _0x3d67ab && _0xc40f72 !== _0x298dec) return false;
    }
    for (let _0x283c9e of _0x46374d) {
      let {
        startColumn: _0x32542a,
        startRow: _0x527603,
        endRow: _0x474dfe,
        endColumn: _0x3df1a0,
      } = _0x283c9e;
      if (_0x32542a !== _0x3df1a0 && _0x527603 !== _0x474dfe) return false;
    }
    return true;
  } else {
    let _0x1a9a47 = _0x532425[0].endRow - _0x532425[0].startRow + 1,
      _0x271281 = _0x532425[0].endColumn - _0x532425[0].startColumn + 1;
    return _0x277933 === _0x1a9a47 || _0x277933 === _0x271281;
  }
}
const Pt = {
    cellSourceRanges: [],
    cellTargetRanges: [],
    groupSourceRanges: [],
    groupTargetRanges: [],
  },
  Ft = (_0x5a046a, _0x1164e1, _0x30da7f) => {
    var _0x3406df, _0x4b748e;
    if (!_0x1164e1 || !_0x30da7f) return Pt;
    let _0x5b93de = _0x5a046a.get(_0x195930),
      _0x1a9c0b = _0x5a046a.get(_0x593f58),
      _0x30fb14 = _0x1004a3(_0x5b93de);
    if (!_0x30fb14) return;
    let { unitId: _0x2e9883, subUnitId: _0x4895d7 } = _0x30fb14,
      { actualRow: _0x4431be, actualColumn: _0x50c937 } = _0x1164e1,
      _0x1ded8d =
        (_0x3406df = _0x1a9c0b
          .getSparklineCache()
          .sparklineModel["get"](_0x2e9883)) == null ||
        (_0x3406df = _0x3406df.get(_0x4895d7)) == null ||
        (_0x3406df = _0x3406df.get(_0x30da7f)) == null
          ? undefined
          : _0x3406df.sparklines["getValue"](_0x4431be, _0x50c937);
    if (!_0x1ded8d) return;
    let _0x373852 = [_0x1ded8d],
      _0x4922a2 = [_0x206932(_0x4431be, _0x50c937)],
      _0x23432c = [],
      _0x1bdd0a = [],
      _0x283337 =
        (_0x4b748e = _0x1a9c0b
          .getSparklineCache()
          .sparklineModel["get"](_0x2e9883)) == null ||
        (_0x4b748e = _0x4b748e.get(_0x4895d7)) == null ||
        (_0x4b748e = _0x4b748e.get(_0x30da7f)) == null
          ? undefined
          : _0x4b748e.sparklines;
    return (
      _0x283337 == null ||
        _0x283337.forValue((_0x56252a, _0x3e7627, _0xa0c410) => {
          let _0x1d9e00 = _0xa0c410;
          (_0x23432c.push(_0x1d9e00),
            _0x1bdd0a.push(_0x206932(_0x56252a, _0x3e7627)));
        }),
      {
        cellSourceRanges: _0x373852,
        cellTargetRanges: _0x4922a2,
        groupSourceRanges: _0x23432c,
        groupTargetRanges: _0x1bdd0a,
      }
    );
  };
function It(_0x32ac62) {
  let {
      sourceRanges: _0x4f5bf7,
      targetRanges: _0x59ae65,
      onConfirm: _0x23191e,
      onCancel: _0x3a2cb7,
      resetCtx: _0x54c2e6,
    } = _0x32ac62,
    _0xc9c766 = _0x5d1332(_0x195930),
    _0x57f108 = _0x5d1332(_0x4350b0),
    _0x1c62e3 = _0x5d1332(_0x593f58),
    _0x21469e = _0x5d1332(_0x5a68f9),
    _0x59c414 = _0x5d1332(_0x29fa15),
    [_0x171a1d, _0x50ce35] = _0x41dd48(),
    [_0x695e03, _0x1c6c9f] = _0x41dd48(),
    [_0x5ce50b, _0x13667a] = _0x41dd48(_0x54c2e6 ? "item" : "none"),
    _0x5e4af6 = _0x5c01d2(
      () =>
        Ft(
          _0x59c414,
          _0x54c2e6 == null ? undefined : _0x54c2e6.primary,
          _0x54c2e6 == null ? undefined : _0x54c2e6.groupId,
        ),
      [
        _0x59c414,
        _0x54c2e6 == null ? undefined : _0x54c2e6.groupId,
        _0x54c2e6 == null ? undefined : _0x54c2e6.primary,
      ],
    ),
    {
      cellSourceRanges: _0x395ad3,
      cellTargetRanges: _0x18155d,
      groupSourceRanges: _0x4fd1ab,
      groupTargetRanges: _0x120f3d,
    } = _0x5e4af6 ?? {},
    [_0x10553c, _0x59f0f1] = _0x41dd48(_0x54c2e6 ? _0x395ad3 : _0x4f5bf7),
    [_0xa5778a, _0x1f29b1] = _0x41dd48(_0x54c2e6 ? _0x18155d : _0x59ae65),
    _0x3aa264 = _0x5d1332(_0x87fb4b),
    _0x2b86f5 = _0x5c2ac0(null);
  _0x21f357(() => {
    ((_0x10553c == null ? undefined : _0x10553c.length) === 0 &&
      _0x50ce35(undefined),
      (_0xa5778a == null ? undefined : _0xa5778a.length) === 0 &&
        _0x1c6c9f(undefined));
    let _0x54e236 = Nt(_0x5ce50b, _0x10553c, _0xa5778a);
    _0x1c6c9f(
      _0x54e236
        ? undefined
        : _0x21469e.t("sheets-sparkline-ui.selector.targetError"),
    );
  }, [_0x21469e, _0x5ce50b, _0x10553c, _0xa5778a]);
  let _0x5b3dbd = (_0x5992d8) => {
      (_0x13667a(_0x5992d8),
        _0x59f0f1(
          _0x5992d8 === "item"
            ? _0x5e4af6 == null
              ? undefined
              : _0x5e4af6.cellSourceRanges
            : _0x5e4af6 == null
              ? undefined
              : _0x5e4af6.groupSourceRanges,
        ),
        _0x1f29b1(
          _0x5992d8 === "item"
            ? _0x5e4af6 == null
              ? undefined
              : _0x5e4af6.cellTargetRanges
            : _0x5e4af6 == null
              ? undefined
              : _0x5e4af6.groupTargetRanges,
        ));
    },
    { initSourceRangeStr: _0x5f235d, initTargetRangeStr: _0xfa7996 } =
      _0x5c01d2(() => {
        let _0x1fb56e, _0x49fd4a;
        return (
          _0x54c2e6
            ? ((_0x1fb56e = _0x5ce50b === "item" ? _0x395ad3 : _0x4fd1ab),
              (_0x49fd4a = _0x5ce50b === "item" ? _0x18155d : _0x120f3d))
            : ((_0x1fb56e = _0x4f5bf7), (_0x49fd4a = _0x59ae65)),
          {
            initSourceRangeStr:
              (_0x1fb56e == null
                ? undefined
                : _0x1fb56e
                    .map((_0x3457fc) => {
                      if (!_0x3f295b(_0x3457fc))
                        return (
                          _0x50ce35(
                            _0x21469e.t(
                              "sheets-sparkline-ui.selector.targetError",
                            ),
                          ),
                          "#REF!"
                        );
                      let _0x3ba09f = _0x3bba5c(_0x3457fc);
                      return _0x3ba09f === "NaN" ? "" : _0x3ba09f;
                    })
                    .filter((_0x182517) => !!_0x182517)
                    .join(",")) ?? "",
            initTargetRangeStr:
              (_0x49fd4a == null
                ? undefined
                : _0x49fd4a
                    .map((_0x549da7) => {
                      let _0x2332dc = _0x3bba5c(_0x549da7);
                      return _0x2332dc === "NaN" ? "" : _0x2332dc;
                    })
                    .filter((_0x177d27) => !!_0x177d27)
                    .join(",")) ?? "",
          }
        );
      }, [
        _0x395ad3,
        _0x18155d,
        _0x4fd1ab,
        _0x120f3d,
        _0x21469e,
        _0x4f5bf7,
        _0x59ae65,
        _0x54c2e6,
        _0x5ce50b,
      ]),
    _0x2a25a8 = _0x1004a3(_0xc9c766);
  if (!_0x2a25a8) return null;
  let {
    unitId: _0x55acd2,
    subUnitId: _0xfa0c75,
    worksheet: _0x1ecac4,
  } = _0x2a25a8;
  return _0x3141f9("div", {
    ref: _0x2b86f5,
    children: [
      !!_0x54c2e6 &&
        _0x3141f9(_0x2cf30d, {
          children: [
            _0x2b76a7("div", {
              className: "univer-mb-2\x20univer-text-sm",
              children: _0x21469e.t("sheets-sparkline-ui.selector.changeType"),
            }),
            _0x3141f9("div", {
              className: _0x566260(
                "univer-mb-4\x20univer-box-content\x20univer-flex\x20univer-h-7\x20univer-w-full\x20univer-rounded-sm\x20univer-p-0.5",
                _0x1c49ae,
              ),
              children: [
                _0x2b76a7("div", {
                  className: _0x566260(
                    "univer-h-7 univer-flex-1 univer-cursor-pointer univer-rounded-sm univer-text-center univer-text-sm univer-leading-7",
                    {
                      "univer-bg-blue-200\x20univer-scrollbar-corner-primary-600":
                        _0x5ce50b === "item",
                    },
                  ),
                  onClick: () => _0x5b3dbd("item"),
                  children: _0x21469e.t(
                    "sheets-sparkline-ui.selector.sparkline",
                  ),
                }),
                _0x2b76a7("div", {
                  className: _0x566260(
                    "univer-h-7 univer-flex-1 univer-cursor-pointer univer-rounded-sm univer-text-center univer-text-sm univer-leading-7",
                    {
                      "univer-bg-blue-200\x20univer-scrollbar-corner-primary-600":
                        _0x5ce50b === "group",
                    },
                  ),
                  onClick: () => _0x5b3dbd("group"),
                  children: _0x21469e.t(
                    "sheets-sparkline-ui.selector.sparklineGroup",
                  ),
                }),
              ],
            }),
          ],
        }),
      _0x3141f9("div", {
        className: "univer-mb-4",
        children: [
          _0x2b76a7("div", {
            className:
              "univer-mb-2 univer-text-sm univer-text-gray-800 dark:!univer-text-gray-100",
            children: _0x21469e.t("sheets-sparkline-ui.selector.setSource"),
          }),
          _0x2b76a7(
            _0x307e3f,
            {
              unitId: _0x55acd2,
              subUnitId: _0xfa0c75,
              initialValue: _0x5f235d,
              onChange: (_0x4aa1b7, _0x415922) => {
                let _0x452515 = _0x415922
                  .split(",")
                  .map(_0x50fea9)
                  .map((_0xae4ba3) =>
                    _0x2f9a02.transformRange(_0xae4ba3.range, _0x1ecac4),
                  );
                if (
                  !_0x452515.some(
                    (_0x55b245) =>
                      !_0x3f295b(_0x55b245) ||
                      _0x55b245.endColumn < _0x55b245.startColumn ||
                      _0x55b245.endRow < _0x55b245.startRow,
                  )
                ) {
                  if (_0x452515.length > 1) {
                    if (_0x5ce50b === "item") {
                      _0x50ce35(
                        _0x21469e.t(
                          "sheets-sparkline-ui.selector.singleSourceError",
                        ),
                      );
                      return;
                    }
                    let _0x1288ca = _0x452515.some((_0x3cf82d) => {
                      let {
                        startRow: _0x544612,
                        endRow: _0x50cace,
                        startColumn: _0x13afc7,
                        endColumn: _0x5694e5,
                      } = _0x3cf82d;
                      return _0x544612 !== _0x50cace && _0x13afc7 !== _0x5694e5;
                    });
                    (_0x50ce35(
                      _0x1288ca
                        ? _0x21469e.t(
                            "sheets-sparkline-ui.selector.multSourceError",
                          )
                        : undefined,
                    ),
                      _0x1288ca || _0x59f0f1(_0x452515));
                    return;
                  } else {
                    let {
                      startRow: _0x565132,
                      endRow: _0x47e392,
                      startColumn: _0x49be74,
                      endColumn: _0x5cfa31,
                    } = _0x452515[0];
                    if (
                      _0x5ce50b === "item" &&
                      _0x565132 !== _0x47e392 &&
                      _0x49be74 !== _0x5cfa31
                    ) {
                      _0x50ce35(
                        _0x21469e.t(
                          "sheets-sparkline-ui.selector.resetSourceError",
                        ),
                      );
                      return;
                    }
                  }
                  (_0x50ce35(undefined), _0x59f0f1(_0x452515));
                }
              },
              supportAcrossSheet: false,
            },
            _0x5f235d,
          ),
          _0x171a1d
            ? _0x2b76a7("div", {
                className: "univer-text-xs univer-text-red-500",
                children: _0x171a1d,
              })
            : null,
        ],
      }),
      _0x3141f9("div", {
        className: "univer-mb-4",
        children: [
          _0x2b76a7("div", {
            className:
              "univer-mb-2\x20univer-text-sm\x20univer-text-gray-800\x20dark:!univer-text-gray-100",
            children: _0x21469e.t("sheets-sparkline-ui.selector.setTarget"),
          }),
          _0x2b76a7(
            _0x307e3f,
            {
              unitId: _0x55acd2,
              subUnitId: _0xfa0c75,
              initialValue: _0xfa7996,
              onChange: (_0x29ec73, _0x3d1488) => {
                let _0x28eaa4 = _0x3d1488
                  .split(",")
                  .map(_0x50fea9)
                  .map((_0x1636e9) => _0x1636e9.range);
                _0x28eaa4.some(
                  (_0x2fe244) =>
                    !_0x3f295b(_0x2fe244) ||
                    _0x2fe244.endColumn < _0x2fe244.startColumn ||
                    _0x2fe244.endRow < _0x2fe244.startRow,
                ) || _0x1f29b1(_0x28eaa4);
              },
              supportAcrossSheet: false,
            },
            _0xfa7996,
          ),
          _0x695e03
            ? _0x2b76a7("div", {
                className: "univer-text-xs univer-text-red-500",
                children: _0x695e03,
              })
            : null,
        ],
      }),
      _0x3141f9(_0x19bb03, {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [
          _0x2b76a7(_0x28df0b, {
            onClick: () => {
              _0x3aa264.close(dt);
            },
            children: _0x21469e.t("sheets-sparkline-ui.selector.cancel"),
          }),
          _0x2b76a7(_0x28df0b, {
            variant: "primary",
            onClick: () => {
              if (_0x10553c && _0xa5778a && !_0x171a1d && !_0x695e03) {
                if (_0x54c2e6) {
                  var _0x5132c5;
                  let _0x4b03ac =
                    (_0x5132c5 = _0x1c62e3
                      .getSparklineCache()
                      .sparklineModel["get"](_0x55acd2)) == null ||
                    (_0x5132c5 = _0x5132c5.get(_0xfa0c75)) == null
                      ? undefined
                      : _0x5132c5.get(_0x54c2e6.groupId);
                  (_0x57f108.executeCommand(_0x4b88fa.id, {
                    config: _0x4b03ac,
                    isChangeDataSource: true,
                    changeDataSourceInfo: {
                      sourceRanges: _0x10553c,
                      targetRanges: _0xa5778a,
                      groupId: _0x54c2e6.groupId,
                      resetType: _0x5ce50b,
                      primary: _0x54c2e6.primary,
                    },
                  }),
                    _0x3a2cb7());
                } else
                  _0x23191e({
                    sourceRanges: _0x10553c,
                    targetRanges: _0xa5778a,
                  });
              }
            },
            disabled: !!(_0x171a1d || _0x695e03),
            children: _0x21469e.t("sheets-sparkline-ui.selector.confirm"),
          }),
        ],
      }),
    ],
  });
}
function $(_0x465081, _0x4644c0) {
  return function (_0x38390a, _0x5ac5d2) {
    _0x4644c0(_0x38390a, _0x5ac5d2, _0x465081);
  };
}
function Lt(_0x316973, _0x339919, _0x25fe66, _0x4457bd) {
  var _0x5607ec = arguments.length,
    _0x5b0a7f =
      _0x5607ec < 3
        ? _0x339919
        : _0x4457bd === null
          ? (_0x4457bd = Object.getOwnPropertyDescriptor(_0x339919, _0x25fe66))
          : _0x4457bd,
    _0x39a6c0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5b0a7f = Reflect.decorate(_0x316973, _0x339919, _0x25fe66, _0x4457bd);
  else {
    for (var _0x184e5b = _0x316973.length - 1; _0x184e5b >= 0; _0x184e5b--)
      (_0x39a6c0 = _0x316973[_0x184e5b]) &&
        (_0x5b0a7f =
          (_0x5607ec < 3
            ? _0x39a6c0(_0x5b0a7f)
            : _0x5607ec > 3
              ? _0x39a6c0(_0x339919, _0x25fe66, _0x5b0a7f)
              : _0x39a6c0(_0x339919, _0x25fe66)) || _0x5b0a7f);
  }
  return (
    _0x5607ec > 3 &&
      _0x5b0a7f &&
      Object.defineProperty(_0x339919, _0x25fe66, _0x5b0a7f),
    _0x5b0a7f
  );
}
let Rt = class extends _0x97f247 {
  constructor(_0x5a6c83, _0x1046db) {
    (super(),
      (this._componentManager = _0x5a6c83),
      (this._iconManager = _0x1046db),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    [
      [dt, It],
      [ft, Mt],
    ].forEach(([_0x10b547, _0x491f06]) => {
      this.disposeWithMe(
        this._componentManager["register"](_0x10b547, _0x491f06),
      );
    });
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({ [ut]: _0x503856 }));
  }
};
Rt = Lt([$(0, _0x5e3acc(_0x1adc6c)), $(1, _0x5e3acc(_0x3b8a6d))], Rt);
let zt = class extends _0x97f247 {
  constructor(_0x44e2c5, _0x2eb017, _0x4e8faf, _0x1ae0bb) {
    (super(),
      (this._injector = _0x44e2c5),
      (this._univerInstanceService = _0x2eb017),
      (this._autoFillService = _0x4e8faf),
      (this._sparklineDataSourceModel = _0x1ae0bb),
      this._initAutoFillWithSparkline());
  }
  _initAutoFillWithSparkline() {
    let _0x2ff688 = () => ({ redos: [], undos: [] }),
      _0x448732 = (_0x396bbf, _0x45c1f9) => {
        let _0x450721 = [],
          _0x44377d = [],
          {
            source: _0x69ac2a,
            target: _0xf57610,
            unitId: _0x50757c,
            subUnitId: _0x304329,
          } = _0x396bbf;
        if (!_0x69ac2a || !_0xf57610 || _0x45c1f9 == null)
          return { undos: _0x450721, redos: _0x44377d };
        let _0x5dfdab = _0x2ff026(_0x69ac2a),
          _0x1db660 = _0x2ff026(_0xf57610),
          _0x39b512 = _0x5dfdab.endRow - _0x5dfdab.startRow + 1,
          _0x1e6c22 = _0x5dfdab.endColumn - _0x5dfdab.startColumn + 1,
          _0x16777d = _0x1db660.endRow - _0x1db660.startRow + 1,
          _0x5f13ef = _0x1db660.endColumn - _0x1db660.startColumn + 1;
        if (_0x3ec95c.contains(_0x5dfdab, _0x1db660))
          return { undos: _0x450721, redos: _0x44377d };
        if (_0x45c1f9 === _0xbfe979.UP) {
          let _0x1bb80b = {},
            _0x5c1ac6 = {},
            _0x5d06d7 = new Set();
          for (let _0x1725fe = 0; _0x1725fe < _0x1e6c22; _0x1725fe++)
            for (let _0x34fe85 = 0; _0x34fe85 < _0x16777d; _0x34fe85++) {
              let _0x50fd7d = _0x34fe85 % _0x39b512,
                _0x3280cf = _0x1db660.startRow + _0x34fe85,
                _0x23b5eb = _0x1db660.startColumn + _0x1725fe,
                _0x239aff = _0x5dfdab.startRow + _0x50fd7d,
                _0x3b739c = this._sparklineDataSourceModel["getSparkline"](
                  _0x50757c,
                  _0x304329,
                  _0x3280cf,
                  _0x23b5eb,
                );
              if (_0x3b739c) {
                _0x5d06d7.add(_0x3b739c);
                let _0x292c98 = this._sparklineDataSourceModel[
                  "getSparklineById"
                ](_0x50757c, _0x304329, _0x3b739c);
                if (_0x292c98) {
                  _0x5c1ac6[_0x3b739c] = {
                    config: _0x50da01.deepClone(_0x292c98.config),
                    sparklines: _0x50da01.deepClone(
                      _0x292c98.sparklines["clone"](),
                    ),
                  };
                  let _0x12b168 = _0x1bb80b[_0x3b739c];
                  (_0x12b168 ||
                    ((_0x12b168 = {
                      config: _0x50da01.deepClone(_0x292c98.config),
                      sparklines: new _0x76302f(
                        _0x292c98.sparklines["clone"](),
                      ),
                    }),
                    (_0x1bb80b[_0x3b739c] = _0x12b168)),
                    _0x12b168.sparklines["realDeleteValue"](
                      _0x3280cf,
                      _0x23b5eb,
                    ));
                }
              }
              let _0xde0117 = this._sparklineDataSourceModel["getSparkline"](
                _0x50757c,
                _0x304329,
                _0x239aff,
                _0x23b5eb,
              );
              if (_0xde0117) {
                let _0x1a1c39 = this._sparklineDataSourceModel[
                  "getSparklineById"
                ](_0x50757c, _0x304329, _0xde0117);
                if (_0x1a1c39) {
                  var _0x45094d;
                  _0x5c1ac6[_0xde0117] = {
                    config: _0x50da01.deepClone(_0x1a1c39.config),
                    sparklines: _0x50da01.deepClone(
                      _0x1a1c39.sparklines["clone"](),
                    ),
                  };
                  let _0x578353 = _0x1bb80b[_0xde0117];
                  (_0x578353 ||
                    ((_0x578353 = {
                      config: _0x50da01.deepClone(_0x1a1c39.config),
                      sparklines: new _0x76302f(
                        _0x1a1c39.sparklines["clone"](),
                      ),
                    }),
                    (_0x1bb80b[_0xde0117] = _0x578353)),
                    _0x578353.sparklines["realDeleteValue"](
                      _0x3280cf,
                      _0x23b5eb,
                    ));
                  let _0x41df8c =
                      (_0x45094d = this._sparklineDataSourceModel[
                        "getSparklineById"
                      ](_0x50757c, _0x304329, _0xde0117)) == null
                        ? undefined
                        : _0x45094d.sparklines,
                    _0x2b445f =
                      _0x41df8c == null
                        ? undefined
                        : _0x41df8c.getValue(_0x239aff, _0x23b5eb);
                  if (_0x2b445f) {
                    let _0x441324 = {
                      ..._0x2b445f,
                      startRow: _0x2b445f.startRow + _0x3280cf - _0x239aff,
                      endRow: _0x2b445f.endRow + _0x3280cf - _0x239aff,
                    };
                    (_0x578353.sparklines["setValue"](
                      _0x3280cf,
                      _0x23b5eb,
                      _0x441324,
                    ),
                      _0x5d06d7.add(_0xde0117));
                  }
                }
              }
              let _0x4f2054 = {};
              (Object.entries(_0x1bb80b).forEach(([_0x4718c6, _0x3dd011]) => {
                _0x3dd011.sparklines["getSizeOf"]() &&
                  (_0x4f2054[_0x4718c6] = {
                    config: _0x3dd011.config,
                    sparklines: _0x3dd011.sparklines["clone"](),
                  });
              }),
                _0x5d06d7.size &&
                  (_0x44377d.push({
                    id: _0x4e3099.id,
                    params: {
                      unitId: _0x50757c,
                      subUnitId: _0x304329,
                      groupIds: Array.from(_0x5d06d7),
                      isSingle: false,
                    },
                  }),
                  _0x450721.push({
                    id: _0x4e3099.id,
                    params: {
                      unitId: _0x50757c,
                      subUnitId: _0x304329,
                      groupIds: Array.from(_0x5d06d7),
                      isSingle: false,
                    },
                  }),
                  _0x44377d.push({
                    id: _0x1d9878.id,
                    params: {
                      unitId: _0x50757c,
                      subUnitId: _0x304329,
                      sparklineConfigMap: _0x4f2054,
                    },
                  }),
                  _0x450721.push({
                    id: _0x1d9878.id,
                    params: {
                      unitId: _0x50757c,
                      subUnitId: _0x304329,
                      sparklineConfigMap: _0x5c1ac6,
                    },
                  })));
            }
        } else {
          if (_0x45c1f9 === _0xbfe979.DOWN) {
            let _0x301bb0 = {},
              _0x17dc3f = {},
              _0x4899fe = new Set();
            for (let _0x24d007 = 0; _0x24d007 < _0x1e6c22; _0x24d007++)
              for (let _0x4ead8f = 0; _0x4ead8f < _0x16777d; _0x4ead8f++) {
                let _0x38f9c0 = _0x4ead8f % _0x39b512,
                  _0x1a9e7c = _0x1db660.startRow + _0x4ead8f,
                  _0xf980a5 = _0x1db660.startColumn + _0x24d007,
                  _0x4af56b = _0x5dfdab.startRow + _0x38f9c0,
                  _0x52fc55 = this._sparklineDataSourceModel["getSparkline"](
                    _0x50757c,
                    _0x304329,
                    _0x4af56b,
                    _0xf980a5,
                  ),
                  _0x548e36 = this._sparklineDataSourceModel["getSparkline"](
                    _0x50757c,
                    _0x304329,
                    _0x1a9e7c,
                    _0xf980a5,
                  );
                if (_0x548e36) {
                  _0x4899fe.add(_0x548e36);
                  let _0x3b0163 = this._sparklineDataSourceModel[
                    "getSparklineById"
                  ](_0x50757c, _0x304329, _0x548e36);
                  if (_0x3b0163) {
                    _0x17dc3f[_0x548e36] = {
                      config: _0x50da01.deepClone(_0x3b0163.config),
                      sparklines: _0x50da01.deepClone(
                        _0x3b0163.sparklines["clone"](),
                      ),
                    };
                    let _0x415bc3 = _0x301bb0[_0x548e36];
                    (_0x415bc3 ||
                      ((_0x415bc3 = {
                        config: _0x50da01.deepClone(_0x3b0163.config),
                        sparklines: new _0x76302f(
                          _0x3b0163.sparklines["clone"](),
                        ),
                      }),
                      (_0x301bb0[_0x548e36] = _0x415bc3)),
                      _0x415bc3.sparklines["realDeleteValue"](
                        _0x1a9e7c,
                        _0xf980a5,
                      ));
                  }
                }
                if (_0x52fc55) {
                  let _0x261700 = this._sparklineDataSourceModel[
                    "getSparklineById"
                  ](_0x50757c, _0x304329, _0x52fc55);
                  if (_0x261700) {
                    var _0x346b2e;
                    _0x17dc3f[_0x52fc55] = {
                      config: _0x50da01.deepClone(_0x261700.config),
                      sparklines: _0x50da01.deepClone(
                        _0x261700.sparklines["clone"](),
                      ),
                    };
                    let _0xc2f379 = _0x301bb0[_0x52fc55];
                    (_0xc2f379 ||
                      ((_0xc2f379 = {
                        config: _0x50da01.deepClone(_0x261700.config),
                        sparklines: new _0x76302f(
                          _0x261700.sparklines["clone"](),
                        ),
                      }),
                      (_0x301bb0[_0x52fc55] = _0xc2f379)),
                      _0xc2f379.sparklines["realDeleteValue"](
                        _0x1a9e7c,
                        _0xf980a5,
                      ));
                    let _0x101aca =
                        (_0x346b2e = this._sparklineDataSourceModel[
                          "getSparklineById"
                        ](_0x50757c, _0x304329, _0x52fc55)) == null
                          ? undefined
                          : _0x346b2e.sparklines,
                      _0x58f616 =
                        _0x101aca == null
                          ? undefined
                          : _0x101aca.getValue(_0x4af56b, _0xf980a5);
                    if (_0x58f616) {
                      let _0x5e8f4d = {
                        ..._0x58f616,
                        startRow: _0x58f616.startRow + _0x1a9e7c - _0x4af56b,
                        endRow: _0x58f616.endRow + _0x1a9e7c - _0x4af56b,
                      };
                      (_0xc2f379.sparklines["setValue"](
                        _0x1a9e7c,
                        _0xf980a5,
                        _0x5e8f4d,
                      ),
                        _0x4899fe.add(_0x52fc55));
                    }
                  }
                }
              }
            let _0x10936d = {};
            (Object.entries(_0x301bb0).forEach(([_0x361da, _0x445787]) => {
              _0x445787.sparklines["getSizeOf"]() &&
                (_0x10936d[_0x361da] = {
                  config: _0x445787.config,
                  sparklines: _0x445787.sparklines["clone"](),
                });
            }),
              _0x4899fe.size &&
                (_0x44377d.push({
                  id: _0x4e3099.id,
                  params: {
                    unitId: _0x50757c,
                    subUnitId: _0x304329,
                    groupIds: Array.from(_0x4899fe),
                    isSingle: false,
                  },
                }),
                _0x450721.push({
                  id: _0x4e3099.id,
                  params: {
                    unitId: _0x50757c,
                    subUnitId: _0x304329,
                    groupIds: Array.from(_0x4899fe),
                    isSingle: false,
                  },
                }),
                _0x44377d.push({
                  id: _0x1d9878.id,
                  params: {
                    unitId: _0x50757c,
                    subUnitId: _0x304329,
                    sparklineConfigMap: _0x10936d,
                  },
                }),
                _0x450721.push({
                  id: _0x1d9878.id,
                  params: {
                    unitId: _0x50757c,
                    subUnitId: _0x304329,
                    sparklineConfigMap: _0x17dc3f,
                  },
                })));
          } else {
            if (_0x45c1f9 === _0xbfe979.LEFT) {
              let _0x361315 = {},
                _0x24272d = {},
                _0x553e5 = new Set();
              for (let _0x381c16 = 0; _0x381c16 < _0x39b512; _0x381c16++)
                for (let _0x3cb2fe = 0; _0x3cb2fe < _0x5f13ef; _0x3cb2fe++) {
                  let _0x2e4a9c = _0x3cb2fe % _0x1e6c22,
                    _0x19e41e = _0x1db660.startRow + _0x381c16,
                    _0x13b198 = _0x1db660.startColumn + _0x3cb2fe,
                    _0x481781 = _0x5dfdab.startColumn + _0x2e4a9c,
                    _0x55d5fa = this._sparklineDataSourceModel["getSparkline"](
                      _0x50757c,
                      _0x304329,
                      _0x19e41e,
                      _0x13b198,
                    );
                  if (_0x55d5fa) {
                    _0x553e5.add(_0x55d5fa);
                    let _0x2f00ab = this._sparklineDataSourceModel[
                      "getSparklineById"
                    ](_0x50757c, _0x304329, _0x55d5fa);
                    if (_0x2f00ab) {
                      _0x24272d[_0x55d5fa] = {
                        config: _0x50da01.deepClone(_0x2f00ab.config),
                        sparklines: _0x50da01.deepClone(
                          _0x2f00ab.sparklines["clone"](),
                        ),
                      };
                      let _0x41309a = _0x361315[_0x55d5fa];
                      (_0x41309a ||
                        ((_0x41309a = {
                          config: _0x50da01.deepClone(_0x2f00ab.config),
                          sparklines: new _0x76302f(
                            _0x2f00ab.sparklines["clone"](),
                          ),
                        }),
                        (_0x361315[_0x55d5fa] = _0x41309a)),
                        _0x41309a.sparklines["realDeleteValue"](
                          _0x19e41e,
                          _0x13b198,
                        ));
                    }
                  }
                  let _0x3b3bcb = this._sparklineDataSourceModel[
                    "getSparkline"
                  ](_0x50757c, _0x304329, _0x19e41e, _0x481781);
                  if (_0x3b3bcb) {
                    let _0x5aee50 = this._sparklineDataSourceModel[
                      "getSparklineById"
                    ](_0x50757c, _0x304329, _0x3b3bcb);
                    if (_0x5aee50) {
                      var _0x5ab3ef;
                      _0x24272d[_0x3b3bcb] = {
                        config: _0x50da01.deepClone(_0x5aee50.config),
                        sparklines: _0x50da01.deepClone(
                          _0x5aee50.sparklines["clone"](),
                        ),
                      };
                      let _0x3df7a4 = _0x361315[_0x3b3bcb];
                      (_0x3df7a4 ||
                        ((_0x3df7a4 = {
                          config: _0x50da01.deepClone(_0x5aee50.config),
                          sparklines: new _0x76302f(
                            _0x5aee50.sparklines["clone"](),
                          ),
                        }),
                        (_0x361315[_0x3b3bcb] = _0x3df7a4)),
                        _0x3df7a4.sparklines["realDeleteValue"](
                          _0x19e41e,
                          _0x13b198,
                        ));
                      let _0x3e2f64 =
                          (_0x5ab3ef = this._sparklineDataSourceModel[
                            "getSparklineById"
                          ](_0x50757c, _0x304329, _0x3b3bcb)) == null
                            ? undefined
                            : _0x5ab3ef.sparklines,
                        _0x133c18 =
                          _0x3e2f64 == null
                            ? undefined
                            : _0x3e2f64.getValue(_0x19e41e, _0x481781);
                      if (_0x133c18) {
                        let _0x279ffe = {
                          ..._0x133c18,
                          startColumn:
                            _0x133c18.startColumn + _0x13b198 - _0x481781,
                          endColumn:
                            _0x133c18.endColumn + _0x13b198 - _0x481781,
                        };
                        (_0x3df7a4.sparklines["setValue"](
                          _0x19e41e,
                          _0x13b198,
                          _0x279ffe,
                        ),
                          _0x553e5.add(_0x3b3bcb));
                      }
                    }
                  }
                }
              let _0x3bb8ab = {};
              (Object.entries(_0x361315).forEach(([_0x4a90a6, _0x2594e5]) => {
                _0x2594e5.sparklines["getSizeOf"]() &&
                  (_0x3bb8ab[_0x4a90a6] = {
                    config: _0x2594e5.config,
                    sparklines: _0x2594e5.sparklines["clone"](),
                  });
              }),
                _0x553e5.size &&
                  (_0x44377d.push({
                    id: _0x4e3099.id,
                    params: {
                      unitId: _0x50757c,
                      subUnitId: _0x304329,
                      groupIds: Array.from(_0x553e5),
                      isSingle: false,
                    },
                  }),
                  _0x450721.push({
                    id: _0x4e3099.id,
                    params: {
                      unitId: _0x50757c,
                      subUnitId: _0x304329,
                      groupIds: Array.from(_0x553e5),
                      isSingle: false,
                    },
                  }),
                  _0x44377d.push({
                    id: _0x1d9878.id,
                    params: {
                      unitId: _0x50757c,
                      subUnitId: _0x304329,
                      sparklineConfigMap: _0x3bb8ab,
                    },
                  }),
                  _0x450721.push({
                    id: _0x1d9878.id,
                    params: {
                      unitId: _0x50757c,
                      subUnitId: _0x304329,
                      sparklineConfigMap: _0x24272d,
                    },
                  })));
            } else {
              if (_0x45c1f9 === _0xbfe979.RIGHT) {
                let _0x2e8bd9 = {},
                  _0x38a209 = {},
                  _0x568564 = new Set();
                for (let _0x41680e = 0; _0x41680e < _0x39b512; _0x41680e++)
                  for (let _0x3efe7d = 0; _0x3efe7d < _0x5f13ef; _0x3efe7d++) {
                    let _0x431021 = _0x3efe7d % _0x1e6c22,
                      _0x18ed5b = _0x1db660.startRow + _0x41680e,
                      _0x23fedd = _0x1db660.startColumn + _0x3efe7d,
                      _0xd9d397 = _0x5dfdab.startColumn + _0x431021,
                      _0xb7fec4 = this._sparklineDataSourceModel[
                        "getSparkline"
                      ](_0x50757c, _0x304329, _0x18ed5b, _0x23fedd);
                    if (_0xb7fec4) {
                      _0x568564.add(_0xb7fec4);
                      let _0x2bf371 = this._sparklineDataSourceModel[
                        "getSparklineById"
                      ](_0x50757c, _0x304329, _0xb7fec4);
                      if (_0x2bf371) {
                        _0x38a209[_0xb7fec4] = {
                          config: _0x50da01.deepClone(_0x2bf371.config),
                          sparklines: _0x50da01.deepClone(
                            _0x2bf371.sparklines["clone"](),
                          ),
                        };
                        let _0x38ab9e = _0x2e8bd9[_0xb7fec4];
                        (_0x38ab9e ||
                          ((_0x38ab9e = {
                            config: _0x50da01.deepClone(_0x2bf371.config),
                            sparklines: new _0x76302f(
                              _0x2bf371.sparklines["clone"](),
                            ),
                          }),
                          (_0x2e8bd9[_0xb7fec4] = _0x38ab9e)),
                          _0x38ab9e.sparklines["realDeleteValue"](
                            _0x18ed5b,
                            _0x23fedd,
                          ));
                      }
                    }
                    let _0x18cdcf = this._sparklineDataSourceModel[
                      "getSparkline"
                    ](_0x50757c, _0x304329, _0x18ed5b, _0xd9d397);
                    if (_0x18cdcf) {
                      let _0x4cb3a4 = this._sparklineDataSourceModel[
                        "getSparklineById"
                      ](_0x50757c, _0x304329, _0x18cdcf);
                      if (_0x4cb3a4) {
                        var _0x582cb5;
                        _0x38a209[_0x18cdcf] = {
                          config: _0x50da01.deepClone(_0x4cb3a4.config),
                          sparklines: _0x50da01.deepClone(
                            _0x4cb3a4.sparklines["clone"](),
                          ),
                        };
                        let _0x2b0893 = _0x2e8bd9[_0x18cdcf];
                        (_0x2b0893 ||
                          ((_0x2b0893 = {
                            config: _0x50da01.deepClone(_0x4cb3a4.config),
                            sparklines: new _0x76302f(
                              _0x4cb3a4.sparklines["clone"](),
                            ),
                          }),
                          (_0x2e8bd9[_0x18cdcf] = _0x2b0893)),
                          _0x2b0893.sparklines["realDeleteValue"](
                            _0x18ed5b,
                            _0x23fedd,
                          ));
                        let _0x5bc275 =
                            (_0x582cb5 = this._sparklineDataSourceModel[
                              "getSparklineById"
                            ](_0x50757c, _0x304329, _0x18cdcf)) == null
                              ? undefined
                              : _0x582cb5.sparklines,
                          _0x3e4c93 =
                            _0x5bc275 == null
                              ? undefined
                              : _0x5bc275.getValue(_0x18ed5b, _0xd9d397);
                        if (_0x3e4c93) {
                          let _0x1569f4 = {
                            ..._0x3e4c93,
                            startColumn:
                              _0x3e4c93.startColumn + _0x23fedd - _0xd9d397,
                            endColumn:
                              _0x3e4c93.endColumn + _0x23fedd - _0xd9d397,
                          };
                          (_0x2b0893.sparklines["setValue"](
                            _0x18ed5b,
                            _0x23fedd,
                            _0x1569f4,
                          ),
                            _0x568564.add(_0x18cdcf));
                        }
                      }
                    }
                  }
                let _0x16f7fd = {};
                (Object.entries(_0x2e8bd9).forEach(([_0x90d3de, _0x41d4de]) => {
                  _0x41d4de.sparklines["getSizeOf"]() &&
                    (_0x16f7fd[_0x90d3de] = {
                      config: _0x41d4de.config,
                      sparklines: _0x41d4de.sparklines["clone"](),
                    });
                }),
                  _0x568564.size &&
                    (_0x44377d.push({
                      id: _0x4e3099.id,
                      params: {
                        unitId: _0x50757c,
                        subUnitId: _0x304329,
                        groupIds: Array.from(_0x568564),
                        isSingle: false,
                      },
                    }),
                    _0x450721.push({
                      id: _0x4e3099.id,
                      params: {
                        unitId: _0x50757c,
                        subUnitId: _0x304329,
                        groupIds: Array.from(_0x568564),
                        isSingle: false,
                      },
                    }),
                    _0x44377d.push({
                      id: _0x1d9878.id,
                      params: {
                        unitId: _0x50757c,
                        subUnitId: _0x304329,
                        sparklineConfigMap: _0x16f7fd,
                      },
                    }),
                    _0x450721.push({
                      id: _0x1d9878.id,
                      params: {
                        unitId: _0x50757c,
                        subUnitId: _0x304329,
                        sparklineConfigMap: _0x38a209,
                      },
                    })));
              }
            }
          }
        }
        return { undos: _0x450721, redos: _0x44377d };
      },
      _0x3f7a8f = {
        id: _0x59c3bd,
        onFillData: (_0x1c5746, _0x5c6860, _0x291379) =>
          _0x291379 === _0x374a4c.COPY ||
          _0x291379 === _0x374a4c.ONLY_FORMAT ||
          _0x291379 === _0x374a4c.SERIES
            ? _0x448732(_0x1c5746, _0x5c6860)
            : _0x2ff688(),
      };
    this.disposeWithMe(this._autoFillService["addHook"](_0x3f7a8f));
  }
};
zt = Lt(
  [
    $(0, _0x5e3acc(_0x29fa15)),
    $(1, _0x5e3acc(_0x195930)),
    $(2, _0x5e3acc(_0x421fac)),
    $(3, _0x5e3acc(_0x593f58)),
  ],
  zt,
);
let Bt = class extends _0x97f247 {
  constructor(_0x35e7c2, _0x50a048) {
    (super(),
      (this._sheetClipboardService = _0x35e7c2),
      (this._sparklineDataSourceModel = _0x50a048),
      this._initClipboardWithSparkline());
  }
  _initClipboardWithSparkline() {
    this.disposeWithMe(
      this._sheetClipboardService["addClipboardHook"]({
        id: _0x59c3bd,
        onPasteCells: (_0x349a7c, _0x39e152, _0x3863e2, _0x3e2bc5) => {
          let _0x47bcbd = [],
            _0x157d68 = [],
            { copyType: _0x56c043 = _0x258cea.COPY } = _0x3e2bc5,
            _0x599a1e = {};
          if (
            _0x56c043 === _0x258cea.CUT ||
            _0x3e2bc5.pasteType !== _0x45dc7b.DEFAULT_PASTE ||
            !_0x349a7c ||
            _0x39e152.unitId !== _0x349a7c.unitId
          )
            return { undos: _0x47bcbd, redos: _0x157d68 };
          let {
              range: _0x57dd90,
              unitId: _0xb1b2d9,
              subUnitId: _0x48f4a5,
            } = _0x39e152,
            {
              range: _0x554b0e,
              unitId: _0x2c0053,
              subUnitId: _0x49c50f,
            } = _0x349a7c,
            _0x5c430d = {},
            _0x36ac04 = {},
            _0x9ca22e = {},
            _0x22dfc8 = new Set(),
            _0x23f595 = new Set();
          for (
            let _0x1a65b7 = 0;
            _0x1a65b7 < _0x57dd90.rows["length"];
            _0x1a65b7++
          )
            for (
              let _0xbdc076 = 0;
              _0xbdc076 < _0x57dd90.cols["length"];
              _0xbdc076++
            ) {
              let _0x5dc24 = _0x554b0e.rows[_0x1a65b7],
                _0x38330f = _0x554b0e.cols[_0xbdc076];
              if (
                !this._sparklineDataSourceModel["getSparkline"](
                  _0x2c0053,
                  _0x49c50f,
                  _0x5dc24,
                  _0x38330f,
                )
              )
                continue;
              let _0x1ae605 = _0x57dd90.rows[_0x1a65b7],
                _0x4d2eee = _0x57dd90.cols[_0xbdc076],
                _0x5375e8 = _0x57dd90.rows[_0x1a65b7] - _0x5dc24,
                _0x198d45 = _0x57dd90.cols[_0xbdc076] - _0x38330f,
                _0x539603 = this._sparklineDataSourceModel["getSparkline"](
                  _0x2c0053,
                  _0x49c50f,
                  _0x5dc24,
                  _0x38330f,
                );
              if (_0x539603) {
                let _0x4e1152 = _0x5c430d[_0x599a1e[_0x539603]],
                  _0x4850ed = this._sparklineDataSourceModel[
                    "getSparklineById"
                  ](_0x2c0053, _0x49c50f, _0x539603);
                if (!_0x4850ed) continue;
                if (!_0x599a1e[_0x539603] && _0x4850ed) {
                  let _0x14ce48 = "g_" + _0xcea22b(6);
                  ((_0x4e1152 = {
                    newGroupId: _0x14ce48,
                    config: {
                      config: _0x50da01.deepClone(_0x4850ed.config),
                      sparklines: {},
                    },
                  }),
                    (_0x5c430d[_0x14ce48] = _0x4e1152),
                    (_0x599a1e[_0x539603] = _0x14ce48));
                }
                _0x4e1152.config["sparklines"][_0x1ae605] ||
                  (_0x4e1152.config["sparklines"][_0x1ae605] = {});
                let _0xd450ca = _0x4850ed.sparklines["getValue"](
                  _0x5dc24,
                  _0x38330f,
                );
                if (_0xd450ca) {
                  let _0x468a15 = {
                    startRow: _0xd450ca.startRow + _0x5375e8,
                    startColumn: _0xd450ca.startColumn + _0x198d45,
                    endRow: _0xd450ca.endRow + _0x5375e8,
                    endColumn: _0xd450ca.endColumn + _0x198d45,
                  };
                  _0x4e1152.config["sparklines"][_0x1ae605][_0x4d2eee] =
                    _0x468a15;
                }
              }
              let _0x4a1c57 = this._sparklineDataSourceModel["getSparkline"](
                _0xb1b2d9,
                _0x48f4a5,
                _0x57dd90.rows[_0x1a65b7],
                _0x57dd90.cols[_0xbdc076],
              );
              if (_0x4a1c57) {
                let _0x352a42 = this._sparklineDataSourceModel[
                  "getSparklineById"
                ](_0xb1b2d9, _0x48f4a5, _0x4a1c57);
                if (_0x352a42) {
                  var _0x31cc75;
                  (_0x22dfc8.add(_0x4a1c57),
                    (_0x9ca22e[_0x4a1c57] = {
                      config: _0x50da01.deepClone(_0x352a42.config),
                      sparklines: _0x50da01.deepClone(
                        _0x352a42.sparklines["getMatrix"](),
                      ),
                    }),
                    _0x36ac04[_0x4a1c57] &&
                      (_0x36ac04[_0x4a1c57] = {
                        config: _0x50da01.deepClone(_0x352a42.config),
                        sparklines: _0x50da01.deepClone(
                          _0x352a42.sparklines["getMatrix"](),
                        ),
                      }),
                    (_0x31cc75 = _0x36ac04[_0x4a1c57]) != null &&
                      (_0x31cc75 = _0x31cc75.sparklines) != null &&
                      (_0x31cc75 = _0x31cc75[_0x1a65b7]) != null &&
                      _0x31cc75[_0xbdc076] &&
                      delete _0x36ac04[_0x4a1c57].sparklines[_0x1a65b7][
                        _0xbdc076
                      ]);
                }
              }
            }
          return (
            Object.keys(_0x5c430d).forEach((_0x2f5cb6) => {
              let _0x3f82f3 = _0x5c430d[_0x2f5cb6];
              _0x3f82f3 &&
                (_0x23f595.add(_0x2f5cb6),
                (_0x36ac04[_0x2f5cb6] = _0x3f82f3.config));
            }),
            _0x23f595.size > 0 &&
              _0x47bcbd.push({
                id: _0x4e3099.id,
                params: {
                  unitId: _0xb1b2d9,
                  subUnitId: _0x48f4a5,
                  groupIds: Array.from(_0x23f595),
                  isSingle: false,
                },
              }),
            Object.keys(_0x9ca22e).length > 0 &&
              _0x47bcbd.push({
                id: _0x1d9878.id,
                params: {
                  unitId: _0xb1b2d9,
                  subUnitId: _0x48f4a5,
                  sparklineConfigMap: _0x9ca22e,
                },
              }),
            _0x22dfc8.size > 0 &&
              _0x157d68.push({
                id: _0x4e3099.id,
                params: {
                  unitId: _0xb1b2d9,
                  subUnitId: _0x48f4a5,
                  groupIds: Array.from(_0x22dfc8),
                  isSingle: false,
                },
              }),
            Object.keys(_0x36ac04).length > 0 &&
              _0x157d68.push({
                id: _0x1d9878.id,
                params: {
                  unitId: _0xb1b2d9,
                  subUnitId: _0x48f4a5,
                  sparklineConfigMap: _0x36ac04,
                },
              }),
            { undos: _0x47bcbd, redos: _0x157d68 }
          );
        },
      }),
    );
  }
};
Bt = Lt([$(0, _0x5e3acc(_0x553803)), $(1, _0x5e3acc(_0x593f58))], Bt);
let Vt = class extends _0x97f247 {
  constructor(_0x18096c) {
    (super(), (this._menuManagerService = _0x18096c), this._initMenu());
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](Ct);
  }
};
Vt = Lt([$(0, _0x3261ea)], Vt);
function Ht(_0x3bd354) {
  "@babel/helpers - typeof";
  return (
    (Ht =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x16bd3f) {
            return typeof _0x16bd3f;
          }
        : function (_0x35275b) {
            return _0x35275b &&
              typeof Symbol == "function" &&
              _0x35275b.constructor === Symbol &&
              _0x35275b !== Symbol.prototype
              ? "symbol"
              : typeof _0x35275b;
          }),
    Ht(_0x3bd354)
  );
}
function Ut(_0x259f07, _0x45ba12) {
  if (Ht(_0x259f07) != "object" || !_0x259f07) return _0x259f07;
  var _0x32adca = _0x259f07[Symbol.toPrimitive];
  if (_0x32adca !== undefined) {
    var _0x4680cc = _0x32adca.call(_0x259f07, _0x45ba12 || "default");
    if (Ht(_0x4680cc) != "object") return _0x4680cc;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x45ba12 === "string" ? String : Number)(_0x259f07);
}
function Wt(_0x2a9436) {
  var _0x2b5369 = Ut(_0x2a9436, "string");
  return Ht(_0x2b5369) == "symbol" ? _0x2b5369 : _0x2b5369 + "";
}
function Gt(_0x158faf, _0x21ead9, _0x2d8d2c) {
  return (
    (_0x21ead9 = Wt(_0x21ead9)) in _0x158faf
      ? Object.defineProperty(_0x158faf, _0x21ead9, {
          value: _0x2d8d2c,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x158faf[_0x21ead9] = _0x2d8d2c),
    _0x158faf
  );
}
let Kt = class extends _0x97f247 {
  constructor(
    _0x551bf3,
    _0x5a08ff,
    _0x265a62,
    _0x106bd4,
    _0x1f4343,
    _0x4540a5,
    _0x4990e5,
    _0xd16fac,
  ) {
    (super(),
      (this._sheetSelectionService = _0x551bf3),
      (this._univerInstanceService = _0x5a08ff),
      (this._sparklineDataSourceModel = _0x265a62),
      (this._sidebarService = _0x106bd4),
      (this._markSelectionService = _0x1f4343),
      (this._rangeProtectionCache = _0x4540a5),
      (this._commandService = _0x4990e5),
      (this._dialogService = _0xd16fac),
      Gt(this, "_targetIds", []),
      Gt(this, "_sourceIds", []),
      this._initSelectionMove(),
      this._initWorksheetChange());
  }
  _initWorksheetChange() {
    this._commandService["onCommandExecuted"]((_0xfbf008) => {
      _0xfbf008.id === _0x25d1f9.id &&
        (this._closePanel(), this._dialogService["close"](dt));
    });
  }
  _initSelectionMove() {
    this.disposeWithMe(
      _0x211361(
        this._sheetSelectionService["selectionMoveEnd$"].pipe(
          _0x5cb450(
            (_0x4c80f7, _0x529f29) =>
              _0x4c80f7.length === _0x529f29.length &&
              !_0x529f29.some(
                (_0x3125d4, _0x4cf9e2) =>
                  !_0x3ec95c.equals(
                    _0x3125d4.range,
                    _0x4c80f7[_0x4cf9e2].range,
                  ),
              ),
          ),
        ),
        this._sparklineDataSourceModel["updateConfig$"].pipe(_0x2aab0a(500)),
      ).subscribe(() => {
        var _0x5c7c03, _0x37a56c, _0x1a0456, _0x50c929;
        let _0x5b50db = this._sheetSelectionService["getCurrentSelections"]();
        [...this._targetIds, ...this._sourceIds].forEach((_0xd44995) => {
          _0xd44995 && this._markSelectionService["removeShape"](_0xd44995);
        });
        let _0x53d1f5 = _0x1004a3(this._univerInstanceService);
        if (!_0x53d1f5) {
          this._closePanel();
          return;
        }
        let {
          unitId: _0x2971ee,
          subUnitId: _0x4a92f9,
          worksheet: _0x307f5c,
        } = _0x53d1f5;
        if (!_0x5b50db || _0x5b50db.length !== 1) {
          this._closePanel();
          return;
        }
        let { primary: _0x1a2650, range: _0x52f478 } = _0x5b50db[0];
        if (!_0x1a2650) {
          this._closePanel();
          return;
        }
        let _0x22b4a1 = _0x1a2650.actualRow,
          _0x363d82 = _0x1a2650.actualColumn,
          _0x18a2b1 = _0x307f5c.getMergedCell(
            _0x1a2650 == null ? undefined : _0x1a2650.actualRow,
            _0x1a2650 == null ? undefined : _0x1a2650.actualColumn,
          );
        if (
          (_0x18a2b1 &&
            ((_0x22b4a1 = _0x18a2b1.startRow),
            (_0x363d82 = _0x18a2b1.startColumn)),
          ((_0x5c7c03 = this._rangeProtectionCache["getCellInfo"](
            _0x2971ee,
            _0x4a92f9,
            _0x22b4a1,
            _0x363d82,
          )) == null
            ? undefined
            : _0x5c7c03[_0x3cf92f.Edit]) === false)
        ) {
          this._closePanel();
          return;
        }
        let _0x56669f = this._sparklineDataSourceModel["getSparklineCache"](),
          _0x1ad726 =
            _0x56669f == null ||
            (_0x37a56c = _0x56669f.sparklineAnchorMap["get"](_0x2971ee)) == null
              ? undefined
              : _0x37a56c.get(_0x4a92f9),
          _0x4f1af6 =
            _0x1ad726 == null ||
            (_0x1a0456 = _0x1ad726.matrix["getValue"](_0x22b4a1, _0x363d82)) ==
              null
              ? undefined
              : _0x1a0456.groupId;
        if (!_0x4f1af6) {
          this._closePanel();
          return;
        }
        let _0x1c3930 =
          (_0x50c929 = this._sparklineDataSourceModel["getSparklineById"](
            _0x2971ee,
            _0x4a92f9,
            _0x4f1af6,
          )) == null
            ? undefined
            : _0x50c929.sparklines;
        _0x1c3930 &&
          (Jt(_0x1c3930.getMatrix(), _0x307f5c).forEach((_0x288686) => {
            let _0x23d398 = qt(
              _0x288686,
              this._markSelectionService,
              "#49B811",
              "rgba(73, 184, 17, 0.05)",
            );
            _0x23d398 && this._sourceIds["push"](_0x23d398);
          }),
          _0x1c3930.forValue((_0x525aed, _0x2e6bce, _0x1860d1) => {
            let _0x2c3533 = _0x1860d1;
            if (
              _0x2c3533 &&
              _0x3ec95c.intersects(_0x206932(_0x525aed, _0x2e6bce), _0x52f478)
            ) {
              let _0x1e1f6a = qt(
                _0x2c3533,
                this._markSelectionService,
                "#f00c0c",
                "rgba(232, 95, 95, 0.05)",
              );
              _0x1e1f6a && this._sourceIds["push"](_0x1e1f6a);
            }
          }),
          this._markSelectionService["refreshShapes"]());
      }),
    );
  }
  _closePanel() {
    let _0x532455 = this._sidebarService["options"];
    _0x532455.id === "SHEET_SPARKLINE_PANEL_ID" &&
      _0x532455.visible &&
      this._sidebarService["close"](pt);
  }
};
Kt = Lt(
  [
    $(0, _0x5e3acc(_0x43d454)),
    $(1, _0x5e3acc(_0x195930)),
    $(2, _0x5e3acc(_0x593f58)),
    $(3, _0x5e3acc(_0x226574)),
    $(4, _0x5e3acc(_0xddc7f)),
    $(5, _0x5e3acc(_0x34c74b)),
    $(6, _0x5e3acc(_0x4350b0)),
    $(7, _0x5e3acc(_0x87fb4b)),
  ],
  Kt,
);
function qt(_0x539f7d, _0x344782, _0x13ebb9, _0x261e54) {
  if (_0x3f295b(_0x539f7d)) {
    let _0x426d22 = _0x344782.addShapeWithNoFresh(
      {
        range: _0x539f7d,
        style: {
          fill: _0x261e54,
          strokeWidth: 1,
          stroke: _0x13ebb9,
          widgets: {},
        },
        primary: null,
      },
      undefined,
      -10,
    );
    if (_0x426d22) return _0x426d22;
  }
}
function Jt(_0x1af1ee, _0x24c756) {
  let _0x21c90a = [],
    _0x4e0684 = new Set();
  for (let _0x14fb84 in _0x1af1ee) {
    let _0x40228e = Number.parseInt(_0x14fb84, 10);
    for (let _0x2e82c1 in _0x1af1ee[_0x40228e]) {
      let _0x598b7a = Number.parseInt(_0x2e82c1, 10),
        _0x507d93 = _0x40228e + "-" + _0x598b7a;
      if (!_0x4e0684.has(_0x507d93)) {
        let _0x254bfa = _0x505b47(_0x40228e, _0x598b7a);
        _0x21c90a.push(..._0x254bfa);
      }
    }
  }
  return _0x21c90a;
}
let Yt = class extends _0x97f247 {
  constructor(
    _0x36b2f7,
    _0x3242c3,
    _0x51bbc2,
    _0x227408,
    _0x382336,
    _0x4d6f53,
  ) {
    (super(),
      (this._commandService = _0x36b2f7),
      (this._localeService = _0x3242c3),
      (this._sheetPermissionCheckController = _0x51bbc2),
      (this._sheetsSelectionsService = _0x227408),
      (this._univerInstanceService = _0x382336),
      (this._sparklineDataSourceModel = _0x4d6f53),
      this._initPermissionWithSparkline());
  }
  _initPermissionWithSparkline() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x42eef4) => {
        if (_0x42eef4.id === _0xfd6253.id) {
          let { targetRanges: _0x2f177d, targetInfo: _0x120838 } =
              _0x42eef4.params,
            { unitId: _0x29239b, subUnitId: _0x190a96 } = _0x120838;
          this._sheetPermissionCheckController["permissionCheckWithRanges"](
            {
              workbookTypes: [_0x49b3d2],
              worksheetTypes: [_0x3f3845],
              rangeTypes: [_0x5bbb4f],
            },
            _0x2f177d,
            _0x29239b,
            _0x190a96,
          ) ||
            this._sheetPermissionCheckController[
              "blockExecuteWithoutPermission"
            ](
              this._localeService["t"](
                "sheets-sparkline-ui.permission.editErr",
              ),
            );
        } else {
          if (_0x42eef4.id === _0x4b88fa.id) {
            let {
                isChangeDataSource: _0x5eeba1,
                changeDataSourceInfo: _0x2447c2,
              } = _0x42eef4.params,
              _0x13e223 = _0x1004a3(this._univerInstanceService);
            if (!_0x13e223) return;
            let _0x1166a3 = this._sheetsSelectionsService[
                "getCurrentSelections"
              ]().map((_0x3a5482) => _0x3a5482.range),
              { unitId: _0x2af576, subUnitId: _0x2a4016 } = _0x13e223;
            if (_0x5eeba1) {
              if (_0x2447c2) {
                let {
                    targetRanges: _0x1cdf92,
                    sourceRanges: _0x52f2c5,
                    resetType: _0x17d617,
                  } = _0x2447c2,
                  _0x73bd1b =
                    _0x17d617 === "item"
                      ? _0x1cdf92
                      : [..._0x52f2c5, ..._0x1cdf92];
                this._sheetPermissionCheckController[
                  "permissionCheckWithRanges"
                ](
                  {
                    workbookTypes: [_0x49b3d2],
                    worksheetTypes: [_0x3f3845],
                    rangeTypes: [_0x5bbb4f],
                  },
                  _0x73bd1b,
                  _0x2af576,
                  _0x2a4016,
                ) ||
                  this._sheetPermissionCheckController[
                    "blockExecuteWithoutPermission"
                  ](
                    this._localeService["t"](
                      "sheets-sparkline-ui.permission.editErr",
                    ),
                  );
              }
            } else {
              let _0x4c8738 = new Set();
              _0x1166a3.forEach((_0x47a3dc) => {
                _0x2f9a02.foreach(_0x47a3dc, (_0xc114bc, _0x594b4d) => {
                  let _0x1d0a11 = this._sparklineDataSourceModel[
                    "getSparkline"
                  ](_0x2af576, _0x2a4016, _0xc114bc, _0x594b4d);
                  _0x1d0a11 &&
                    this._sparklineDataSourceModel["getSparklineById"](
                      _0x2af576,
                      _0x2a4016,
                      _0x1d0a11,
                    ) &&
                    _0x4c8738.add(_0x1d0a11);
                });
              });
              let _0x233fb4 = [];
              (_0x4c8738.forEach((_0x3dd4a4) => {
                let _0x5432bd = this._sparklineDataSourceModel[
                  "getSparklineById"
                ](_0x2af576, _0x2a4016, _0x3dd4a4);
                _0x5432bd &&
                  _0x233fb4.push(
                    ...Jt(
                      _0x5432bd.sparklines["getMatrix"](),
                      _0x13e223.worksheet,
                    ),
                  );
              }),
                this._sheetPermissionCheckController[
                  "permissionCheckWithRanges"
                ](
                  {
                    workbookTypes: [_0x49b3d2],
                    worksheetTypes: [_0x3f3845],
                    rangeTypes: [_0x5bbb4f],
                  },
                  _0x233fb4,
                  _0x2af576,
                  _0x2a4016,
                ) ||
                  this._sheetPermissionCheckController[
                    "blockExecuteWithoutPermission"
                  ](
                    this._localeService["t"](
                      "sheets-sparkline-ui.permission.editErr",
                    ),
                  ));
            }
          } else {
            if (_0x42eef4.id === _0x4d1ea0.id) {
              let { isSingle: _0x43f87f } = _0x42eef4.params;
              if (_0x43f87f)
                this._sheetPermissionCheckController[
                  "permissionCheckWithRanges"
                ]({
                  workbookTypes: [_0x49b3d2],
                  worksheetTypes: [_0x3f3845],
                  rangeTypes: [_0x5bbb4f],
                }) ||
                  this._sheetPermissionCheckController[
                    "blockExecuteWithoutPermission"
                  ](
                    this._localeService["t"](
                      "sheets-sparkline-ui.permission.editErr",
                    ),
                  );
              else {
                let _0x15e5a0 = _0x1004a3(this._univerInstanceService);
                if (!_0x15e5a0) return;
                let _0x337737 = this._sheetsSelectionsService[
                    "getCurrentSelections"
                  ]().map((_0x52c35e) => _0x52c35e.range),
                  { unitId: _0x6c042f, subUnitId: _0x5730f8 } = _0x15e5a0,
                  _0x4afbe5 = new Set();
                _0x337737.forEach((_0x2b12a4) => {
                  _0x2f9a02.foreach(_0x2b12a4, (_0x5a0732, _0x42e62d) => {
                    let _0x2000eb = this._sparklineDataSourceModel[
                      "getSparkline"
                    ](_0x6c042f, _0x5730f8, _0x5a0732, _0x42e62d);
                    _0x2000eb &&
                      this._sparklineDataSourceModel["getSparklineById"](
                        _0x6c042f,
                        _0x5730f8,
                        _0x2000eb,
                      ) &&
                      _0x4afbe5.add(_0x2000eb);
                  });
                });
                let _0x61589 = [];
                (_0x4afbe5.forEach((_0x3307b5) => {
                  let _0x1f0590 = this._sparklineDataSourceModel[
                    "getSparklineById"
                  ](_0x6c042f, _0x5730f8, _0x3307b5);
                  _0x1f0590 &&
                    _0x61589.push(
                      ...Jt(
                        _0x1f0590.sparklines["getMatrix"](),
                        _0x15e5a0.worksheet,
                      ),
                    );
                }),
                  this._sheetPermissionCheckController[
                    "permissionCheckWithRanges"
                  ](
                    {
                      workbookTypes: [_0x49b3d2],
                      worksheetTypes: [_0x3f3845],
                      rangeTypes: [_0x5bbb4f],
                    },
                    _0x61589,
                    _0x6c042f,
                    _0x5730f8,
                  ) ||
                    this._sheetPermissionCheckController[
                      "blockExecuteWithoutPermission"
                    ](
                      this._localeService["t"](
                        "sheets-sparkline-ui.permission.editErr",
                      ),
                    ));
              }
            }
          }
        }
      }),
    );
  }
};
Yt = Lt(
  [
    $(0, _0x5e3acc(_0x4350b0)),
    $(1, _0x5e3acc(_0x5a68f9)),
    $(2, _0x5e3acc(_0x22f0b5)),
    $(3, _0x5e3acc(_0x43d454)),
    $(4, _0x5e3acc(_0x195930)),
    $(5, _0x5e3acc(_0x593f58)),
  ],
  Yt,
);
let Xt = class extends _0x97f247 {
  constructor(_0x55f9e1, _0x4c1f7d) {
    (super(),
      (this._sheetPrintInterceptorService = _0x55f9e1),
      (this._sparklineDataSourceModel = _0x4c1f7d),
      this._init());
  }
  _init() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_RANGE,
        {
          handler: (_0x178d5c, _0x5e82e8, _0x521d24) => {
            let { unitId: _0xe78891, subUnitId: _0x1ae2b4 } = _0x5e82e8,
              _0x56aed4 = this._sparklineDataSourceModel["getSubUnitSparkline"](
                _0xe78891,
                _0x1ae2b4,
              ),
              _0x271b61 = _0x178d5c;
            return (
              _0x56aed4 &&
                Array.from(_0x56aed4.values()).forEach((_0x66611b) => {
                  let _0x563587 = _0x66611b.sparklines["getDataRange"]();
                  _0x271b61 =
                    _0x271b61 && _0x563587.endRow >= 0
                      ? _0x3ec95c.realUnion(_0x271b61, _0x563587)
                      : _0x563587;
                }),
              _0x521d24(_0x271b61)
            );
          },
        },
      ),
    );
  }
};
Xt = Lt([$(0, _0x5e3acc(_0x4e15b2)), $(1, _0x5e3acc(_0x593f58))], Xt);
const Zt = (_0x563e50, _0x533da3, _0x57e887, _0x1488f7, _0x26311a) => {
    var _0x993889,
      _0x4cbf4b,
      _0x126197,
      _0x33996b,
      _0x44798d,
      _0x22c5b5,
      _0x36fb3f,
      _0x2f319b,
      _0x46b330,
      _0x157003;
    let {
      startX: _0x29631b,
      startY: _0x162b01,
      endX: _0x19a97c,
      endY: _0x2ae3b3,
    } = _0x533da3.mergeInfo;
    if (!_0x1488f7) return;
    let {
        max: _0x4e8852,
        min: _0x1c7588,
        highIndex: _0x38a00a,
        lowIndex: _0x633301,
        negativeIndexes: _0x7bbdb4,
        data: _0x44fde0,
      } = _0x1488f7,
      _0x468ee1 = _0x19a97c - _0x29631b - 8,
      _0x5f47b8 = _0x2ae3b3 - _0x162b01 - 8,
      _0x398cc3 = _0x29631b + 4,
      _0x5d5940 = _0x162b01 + 4,
      _0x3663de =
        ((_0x993889 = _0x57e887.extremumMax) == null
          ? undefined
          : _0x993889.type) ?? _0x38ff27.SELF_EXTREMUM,
      _0xcc95e0 =
        ((_0x4cbf4b = _0x57e887.extremumMin) == null
          ? undefined
          : _0x4cbf4b.type) ?? _0x38ff27.SELF_EXTREMUM,
      _0x4268a4 =
        (_0x26311a == null ? undefined : _0x26311a.showMax) ?? _0x4e8852,
      _0x33165e =
        (_0x26311a == null ? undefined : _0x26311a.showMin) ?? _0x1c7588,
      _0x3c71e1 = _0x3663de === _0x38ff27.SELF_EXTREMUM ? _0x4e8852 : _0x4268a4,
      _0x554ed7 = _0xcc95e0 === _0x38ff27.SELF_EXTREMUM ? _0x1c7588 : _0x33165e,
      _0x5494c6 = false,
      _0x5002a9 = _0x44fde0[_0x38a00a];
    typeof _0x5002a9 == "number" && _0x5002a9 < _0x554ed7 && (_0x5494c6 = true);
    let _0x1c9e31 = false,
      _0x297b9d = _0x44fde0[_0x633301];
    if (
      (typeof _0x297b9d == "number" &&
        _0x297b9d > _0x3c71e1 &&
        (_0x1c9e31 = true),
      _0x554ed7 > _0x3c71e1 || _0x5494c6 || _0x1c9e31)
    )
      return;
    let _0x2c3112 = _0x3c71e1 === _0x554ed7,
      _0x26a8d9 = _0x3c71e1 - _0x554ed7,
      _0x1891ad = _0x468ee1 / (_0x44fde0.length - 1),
      _0xac3c6f =
        ((_0x126197 = _0x57e887.axis) == null
          ? undefined
          : _0x126197.reverse) ?? false,
      _0x1501ae = [];
    (_0x563e50.save(),
      _0x563e50.beginPath(),
      _0x563e50.rect(_0x29631b + 4, _0x162b01 + 4, _0x468ee1, _0x5f47b8),
      _0x563e50.clip(),
      _0x563e50.beginPath());
    let _0x4dc6ff = null;
    for (let _0x3876a0 = 0; _0x3876a0 < _0x44fde0.length; _0x3876a0++) {
      let _0x2ea021 = _0x44fde0[_0x3876a0];
      if (_0x2ea021 === "u-spacing") {
        _0x4dc6ff = null;
        continue;
      }
      if (_0x2ea021 === "u-connect") continue;
      let _0xfa7aea = {
        x: _0xac3c6f
          ? _0x19a97c - 4 - _0x3876a0 * _0x1891ad
          : _0x398cc3 + _0x3876a0 * _0x1891ad,
        y: _0x2c3112
          ? _0x5d5940 + _0x5f47b8 / 2
          : _0x5d5940 +
            _0x5f47b8 -
            ((Number(_0x2ea021) - _0x554ed7) / _0x26a8d9) * _0x5f47b8,
      };
      (_0x1501ae.push(_0xfa7aea),
        _0x4dc6ff
          ? (_0x563e50.moveTo(_0x4dc6ff.x, _0x4dc6ff.y),
            _0x563e50.lineTo(_0xfa7aea.x, _0xfa7aea.y))
          : _0x563e50.moveTo(_0xfa7aea.x, _0xfa7aea.y),
        (_0x4dc6ff = _0xfa7aea));
    }
    let _0x5b48c3 = _0x57e887.themeType ?? _0x27e692.STANDARD,
      _0x381ec1 =
        _0x57e887.seriesColor ??
        ((_0x33996b = _0x13bdd4[_0x5b48c3]) == null
          ? undefined
          : _0x33996b[0]) ??
        _0x13bdd4.standard[0],
      _0x17f8f1 = _0x26311a == null ? undefined : _0x26311a.startGradient,
      _0x6d1cdd = _0x26311a == null ? undefined : _0x26311a.endGradient;
    ((_0x563e50.strokeStyle = _0x381ec1),
      (_0x563e50.lineWidth = _0x57e887.lineWidth || 2),
      (_0x563e50.lineJoin = "round"),
      _0x563e50.stroke());
    let _0x24373d = [],
      _0x3f54db = [];
    if (_0x57e887.showGradient && _0x17f8f1 && _0x6d1cdd) {
      let _0x14321f = _0x563e50.createLinearGradient(
        0,
        _0x5d5940,
        0,
        _0x5d5940 + _0x5f47b8,
      );
      (_0x14321f.addColorStop(0, _0x17f8f1),
        _0x14321f.addColorStop(1, _0x6d1cdd),
        _0x563e50.beginPath());
      let _0x4eb525 = [],
        _0x59e028 = null,
        _0x5c151e = 0;
      for (let _0x16c656 = 0; _0x16c656 <= _0x44fde0.length; _0x16c656++) {
        let _0x4914d7 = _0x44fde0[_0x16c656],
          _0x47c09a = _0x4914d7 === "u-spacing",
          _0xfe6dd4 = _0x4914d7 === "u-connect",
          _0x2c81b8 = _0x16c656 === _0x44fde0.length;
        (_0x4914d7 === _0x5002a9 && _0x24373d.push(_0x16c656),
          _0x4914d7 === _0x297b9d && _0x3f54db.push(_0x16c656),
          _0x47c09a || _0x2c81b8
            ? _0x59e028 !== null &&
              (_0x4eb525.push([_0x59e028, _0x5c151e - 1]), (_0x59e028 = null))
            : _0xfe6dd4 ||
              (_0x59e028 === null && (_0x59e028 = _0x5c151e), _0x5c151e++));
      }
      _0x4eb525.forEach(([_0x1db462, _0x914d28]) => {
        let _0x40d181 = _0x1501ae[_0x1db462],
          _0x4fecee = _0x1501ae[_0x914d28];
        if (!(!_0x40d181 || !_0x4fecee || _0x1db462 === _0x914d28)) {
          (_0x563e50.beginPath(), _0x563e50.moveTo(_0x40d181.x, _0x40d181.y));
          for (let _0x17883c = _0x1db462; _0x17883c <= _0x914d28; _0x17883c++) {
            let _0x15d93b = _0x1501ae[_0x17883c];
            _0x15d93b && _0x563e50.lineTo(_0x15d93b.x, _0x15d93b.y);
          }
          (_0x563e50.lineTo(_0x1501ae[_0x914d28].x, _0x5d5940 + _0x5f47b8),
            _0x563e50.lineTo(_0x1501ae[_0x1db462].x, _0x5d5940 + _0x5f47b8),
            _0x563e50.closePath(),
            (_0x563e50.fillStyle = _0x14321f),
            _0x563e50.fill());
        }
      });
    } else
      for (let _0x589a91 = 0; _0x589a91 <= _0x44fde0.length; _0x589a91++) {
        let _0xe5ace8 = _0x44fde0[_0x589a91];
        (_0xe5ace8 === _0x5002a9 && _0x24373d.push(_0x589a91),
          _0xe5ace8 === _0x297b9d && _0x3f54db.push(_0x589a91));
      }
    let _0x38b03b = "rgb(64,\x20159,\x2017)";
    if (
      ((_0x44798d = _0x57e887.points) != null &&
        (_0x44798d = _0x44798d.markersPoint) != null &&
        _0x44798d.visible &&
        ((_0x563e50.fillStyle =
          _0x57e887.points["markersPoint"].color || _0x38b03b),
        _0x1501ae.forEach((_0x19f231) => {
          (_0x563e50.beginPath(),
            _0x563e50.arc(_0x19f231.x, _0x19f231.y, 2, 0, Math.PI * 2),
            _0x563e50.fill());
        })),
      (_0x22c5b5 = _0x57e887.points) != null &&
        (_0x22c5b5 = _0x22c5b5.firstPoint) != null &&
        _0x22c5b5.visible)
    ) {
      _0x563e50.fillStyle = _0x57e887.points["firstPoint"].color || _0x38b03b;
      let _0xa57bc5 = _0x1501ae[0];
      _0xa57bc5 &&
        (_0x563e50.beginPath(),
        _0x563e50.arc(_0xa57bc5.x, _0xa57bc5.y, 2, 0, Math.PI * 2),
        _0x563e50.fill());
    }
    if (
      (_0x36fb3f = _0x57e887.points) != null &&
      (_0x36fb3f = _0x36fb3f.lastPoint) != null &&
      _0x36fb3f.visible
    ) {
      _0x563e50.fillStyle = _0x57e887.points["lastPoint"].color || _0x38b03b;
      let _0x2c7db7 = _0x1501ae[_0x1501ae.length - 1];
      _0x2c7db7 &&
        (_0x563e50.beginPath(),
        _0x563e50.arc(_0x2c7db7.x, _0x2c7db7.y, 2, 0, Math.PI * 2),
        _0x563e50.fill());
    }
    ((_0x2f319b = _0x57e887.points) != null &&
      (_0x2f319b = _0x2f319b.highPoint) != null &&
      _0x2f319b.visible &&
      ((_0x563e50.fillStyle = _0x57e887.points["highPoint"].color || _0x38b03b),
      _0x24373d.forEach((_0x41b045) => {
        let _0x1e7eb7 = _0x1501ae[_0x41b045];
        _0x1e7eb7 &&
          (_0x563e50.beginPath(),
          _0x563e50.arc(_0x1e7eb7.x, _0x1e7eb7.y, 2, 0, Math.PI * 2),
          _0x563e50.fill());
      })),
      (_0x46b330 = _0x57e887.points) != null &&
        (_0x46b330 = _0x46b330.lowPoint) != null &&
        _0x46b330.visible &&
        ((_0x563e50.fillStyle =
          _0x57e887.points["lowPoint"].color || _0x38b03b),
        _0x3f54db.forEach((_0x6a5819) => {
          let _0x55a534 = _0x1501ae[_0x6a5819];
          _0x55a534 &&
            (_0x563e50.beginPath(),
            _0x563e50.arc(_0x55a534.x, _0x55a534.y, 2, 0, Math.PI * 2),
            _0x563e50.fill());
        })),
      (_0x157003 = _0x57e887.points) != null &&
        (_0x157003 = _0x157003.negativePoint) != null &&
        _0x157003.visible &&
        ((_0x563e50.fillStyle =
          _0x57e887.points["negativePoint"].color || _0x38b03b),
        _0x7bbdb4.forEach((_0x422a39) => {
          let _0x19d237 = _0x1501ae[_0x422a39];
          _0x19d237 &&
            (_0x563e50.beginPath(),
            _0x563e50.arc(_0x19d237.x, _0x19d237.y, 2, 0, Math.PI * 2),
            _0x563e50.fill());
        })));
    let _0xf4ef79 = true;
    if (_0x2c3112) {
      var _0x5c7357;
      _0xf4ef79 = !!((_0x5c7357 = _0x57e887.axis) != null && _0x5c7357.visible);
    } else {
      var _0x47536f;
      _0xf4ef79 = !!(
        _0x554ed7 <= 0 &&
        (_0x47536f = _0x57e887.axis) != null &&
        _0x47536f.visible
      );
    }
    if (_0xf4ef79) {
      var _0x19fc86;
      let _0x58a27b = _0x5d5940;
      (_0x2c3112
        ? _0x554ed7 === 0
          ? (_0x58a27b = _0x5d5940 + _0x5f47b8 / 2)
          : _0x554ed7 > 0 && (_0x58a27b = _0x5d5940 + _0x5f47b8)
        : (_0x58a27b =
            _0x5d5940 + _0x5f47b8 - ((0 - _0x554ed7) / _0x26a8d9) * _0x5f47b8),
        _0x563e50.beginPath(),
        _0x563e50.moveTo(_0x398cc3, _0x58a27b),
        _0x563e50.lineTo(_0x398cc3 + _0x468ee1, _0x58a27b),
        (_0x563e50.strokeStyle =
          ((_0x19fc86 = _0x57e887.axis) == null
            ? undefined
            : _0x19fc86.color) ?? "rgb(0, 0, 0)"),
        (_0x563e50.lineWidth = 1),
        _0x563e50.stroke());
    }
    _0x563e50.restore();
  },
  Qt = (_0x1ac3e8, _0x2e006c, _0x4c5739, _0x142676, _0x37187f) => {
    var _0x1b373e, _0x4b5dc6, _0x32968b, _0x386470;
    let {
      startX: _0x35594f,
      startY: _0x5a5671,
      endX: _0x126dd6,
      endY: _0x3f3f23,
    } = _0x2e006c;
    if (!_0x142676) return;
    let {
        max: _0x322464,
        min: _0x517e40,
        highIndex: _0x2a2fe7,
        lowIndex: _0x33cc76,
        negativeIndexes: _0x1cf9c6,
        data: _0x299296,
      } = _0x142676,
      _0x4f0ce5 = _0x126dd6 - _0x35594f - 8,
      _0x405112 = _0x3f3f23 - _0x5a5671 - 8,
      _0x9ddd3c = _0x35594f + 4,
      _0x21920f = _0x5a5671 + 4,
      _0x1564e7 =
        ((_0x1b373e = _0x4c5739.extremumMax) == null
          ? undefined
          : _0x1b373e.type) ?? _0x38ff27.SELF_EXTREMUM,
      _0x18e8b4 =
        ((_0x4b5dc6 = _0x4c5739.extremumMin) == null
          ? undefined
          : _0x4b5dc6.type) ?? _0x38ff27.SELF_EXTREMUM,
      _0x110220 =
        (_0x37187f == null ? undefined : _0x37187f.showMax) ?? _0x322464,
      _0x166cf2 =
        (_0x37187f == null ? undefined : _0x37187f.showMin) ?? _0x517e40,
      _0x1c0863 = _0x1564e7 === _0x38ff27.SELF_EXTREMUM ? _0x322464 : _0x110220,
      _0x44a486 = _0x18e8b4 === _0x38ff27.SELF_EXTREMUM ? _0x517e40 : _0x166cf2,
      _0x1c71d5 = _0x1c0863 - _0x44a486,
      _0x3b802e = _0x4f0ce5,
      _0x29d929 = _0x1c0863 === _0x44a486,
      _0x10ea86 = _0x3b802e / (_0x299296.length * 1.2),
      _0x557151 = _0x10ea86 * 0.2,
      _0x1a36be =
        ((_0x32968b = _0x4c5739.axis) == null
          ? undefined
          : _0x32968b.reverse) ?? false,
      _0x2047c1 = _0x4c5739.showRadius ?? false,
      _0x35792c = 0;
    _0x29d929 ||
      (_0x35792c = _0x44a486 >= 0 ? _0x44a486 : _0x1c0863 <= 0 ? _0x1c0863 : 0);
    let _0x59adda = _0x21920f + _0x405112;
    (_0x29d929
      ? _0x44a486 === 0
        ? (_0x59adda = _0x21920f + _0x405112 / 2)
        : _0x44a486 > 0
          ? (_0x59adda = _0x21920f + _0x405112)
          : _0x44a486 < 0 && (_0x59adda = _0x21920f)
      : (_0x59adda =
          _0x44a486 >= 0
            ? _0x21920f + _0x405112
            : _0x1c0863 <= 0
              ? _0x21920f
              : _0x21920f +
                _0x405112 -
                ((0 - _0x44a486) / _0x1c71d5) * _0x405112),
      _0x1ac3e8.save(),
      _0x1ac3e8.beginPath(),
      _0x1ac3e8.rect(
        _0x35594f,
        _0x5a5671,
        _0x126dd6 - _0x35594f,
        _0x3f3f23 - _0x5a5671,
      ),
      _0x1ac3e8.clip());
    let _0x4bb604 = _0x4c5739.themeType ?? _0x27e692.STANDARD,
      _0x1af991 =
        _0x4c5739.seriesColor ??
        ((_0x386470 = _0x13bdd4[_0x4bb604]) == null
          ? undefined
          : _0x386470[0]) ??
        _0x13bdd4.standard[0],
      _0x5dfc16 = _0x299296[_0x2a2fe7],
      _0x142202 = _0x299296[_0x33cc76];
    _0x299296.forEach((_0x12e405, _0x2f75a0) => {
      var _0x22f5f0, _0x38104d, _0x3424da, _0x5b9795, _0x55a480;
      if (typeof _0x12e405 == "string" || _0x12e405 === undefined) return;
      let _0x341631 = _0x1a36be
          ? _0x126dd6 -
            4 -
            (_0x2f75a0 + 1) * (_0x10ea86 + _0x557151) +
            _0x557151 / 2
          : _0x9ddd3c + _0x2f75a0 * (_0x10ea86 + _0x557151) + _0x557151 / 2,
        _0x5eaf92 = 0;
      _0x29d929
        ? _0x44a486 !== 0 && (_0x5eaf92 = _0x405112)
        : (_0x5eaf92 =
            _0x12e405 < _0x44a486
              ? 0
              : _0x12e405 > _0x1c0863
                ? _0x405112
                : _0x12e405 === 0
                  ? 0
                  : Math.max(
                      (Math.abs(_0x12e405 - _0x35792c) / _0x1c71d5) * _0x405112,
                      2,
                    ));
      let _0x2e43f8 = _0x1af991;
      ((_0x22f5f0 = _0x4c5739.points) != null &&
        (_0x22f5f0 = _0x22f5f0.firstPoint) != null &&
        _0x22f5f0.visible &&
        _0x2f75a0 === 0 &&
        (_0x2e43f8 = _0x4c5739.points["firstPoint"].color || _0x1af991),
        (_0x38104d = _0x4c5739.points) != null &&
          (_0x38104d = _0x38104d.lastPoint) != null &&
          _0x38104d.visible &&
          _0x2f75a0 === _0x299296.length - 1 &&
          (_0x2e43f8 = _0x4c5739.points["lastPoint"].color || _0x1af991),
        (_0x3424da = _0x4c5739.points) != null &&
          (_0x3424da = _0x3424da.highPoint) != null &&
          _0x3424da.visible &&
          _0x12e405 === _0x5dfc16 &&
          (_0x2e43f8 = _0x4c5739.points["highPoint"].color || _0x1af991),
        (_0x5b9795 = _0x4c5739.points) != null &&
          (_0x5b9795 = _0x5b9795.lowPoint) != null &&
          _0x5b9795.visible &&
          _0x12e405 === _0x142202 &&
          (_0x2e43f8 = _0x4c5739.points["lowPoint"].color || _0x1af991),
        (_0x55a480 = _0x4c5739.points) != null &&
          (_0x55a480 = _0x55a480.negativePoint) != null &&
          _0x55a480.visible &&
          _0x1cf9c6.includes(_0x2f75a0) &&
          (_0x2e43f8 = _0x4c5739.points["negativePoint"].color || _0x1af991),
        (_0x1ac3e8.fillStyle = _0x2e43f8),
        _0x10ea86 >= 4 && _0x2047c1 && _0x5eaf92 >= 2
          ? (_0x1ac3e8.beginPath(),
            _0x12e405 >= _0x35792c
              ? (_0x1ac3e8.moveTo(_0x341631, _0x59adda - _0x5eaf92 + 2),
                _0x1ac3e8.arcTo(
                  _0x341631,
                  _0x59adda - _0x5eaf92,
                  _0x341631 + _0x10ea86,
                  _0x59adda - _0x5eaf92,
                  2,
                ),
                _0x1ac3e8.arcTo(
                  _0x341631 + _0x10ea86,
                  _0x59adda - _0x5eaf92,
                  _0x341631 + _0x10ea86,
                  _0x59adda - _0x5eaf92 + 2,
                  2,
                ),
                _0x1ac3e8.lineTo(_0x341631 + _0x10ea86, _0x59adda),
                _0x1ac3e8.lineTo(_0x341631, _0x59adda),
                _0x1ac3e8.closePath(),
                _0x1ac3e8.fill())
              : (_0x1ac3e8.moveTo(_0x341631, _0x59adda),
                _0x1ac3e8.lineTo(_0x341631 + _0x10ea86, _0x59adda),
                _0x1ac3e8.arcTo(
                  _0x341631 + _0x10ea86,
                  _0x59adda + _0x5eaf92,
                  _0x341631 + _0x10ea86 - 2,
                  _0x59adda + _0x5eaf92,
                  2,
                ),
                _0x1ac3e8.arcTo(
                  _0x341631,
                  _0x59adda + _0x5eaf92,
                  _0x341631,
                  _0x59adda + _0x5eaf92 - 2,
                  2,
                ),
                _0x1ac3e8.lineTo(_0x341631, _0x59adda),
                _0x1ac3e8.closePath(),
                _0x1ac3e8.fill()))
          : _0x12e405 >= _0x35792c
            ? _0x1ac3e8.fillRect(
                _0x341631,
                _0x59adda - _0x5eaf92,
                _0x10ea86,
                _0x5eaf92,
              )
            : _0x1ac3e8.fillRect(_0x341631, _0x59adda, _0x10ea86, _0x5eaf92));
    });
    let _0x2ac4f3 = true;
    if (_0x29d929) {
      var _0x132de3;
      _0x2ac4f3 = !!((_0x132de3 = _0x4c5739.axis) != null && _0x132de3.visible);
    } else {
      var _0x3057cc;
      _0x2ac4f3 = !!(
        (_0x3057cc = _0x4c5739.axis) != null &&
        _0x3057cc.visible &&
        !(_0x1c0863 < 0 || _0x44a486 > 0)
      );
    }
    if (_0x2ac4f3) {
      var _0x365d65;
      (_0x1ac3e8.beginPath(),
        _0x1ac3e8.moveTo(_0x9ddd3c, _0x59adda),
        _0x1ac3e8.lineTo(_0x9ddd3c + _0x4f0ce5, _0x59adda),
        (_0x1ac3e8.strokeStyle =
          ((_0x365d65 = _0x4c5739.axis) == null
            ? undefined
            : _0x365d65.color) ?? "rgb(0, 0, 0)"),
        (_0x1ac3e8.lineWidth = 1),
        _0x1ac3e8.stroke());
    }
    _0x1ac3e8.restore();
  },
  $t = (_0x1d22e7, _0x384916, _0x3b8bb7, _0x3ac374, _0x31f4ad) => {
    var _0x239cf2, _0xaaccfa, _0xa12433;
    let {
      startX: _0x549724,
      startY: _0x10c134,
      endX: _0x4bc5bd,
      endY: _0x6d9ff8,
    } = _0x384916;
    if (!_0x3ac374) return;
    let {
        highIndex: _0x341baf,
        lowIndex: _0x2e4bb9,
        negativeIndexes: _0x63f9bc,
        data: _0x13ff26,
      } = _0x3ac374,
      _0x355eda = _0x4bc5bd - _0x549724 - 8,
      _0xb98096 = _0x6d9ff8 - _0x10c134 - 8,
      _0x22bd3c = _0x549724 + 4,
      _0x2350cb = _0x10c134 + 4,
      _0x2c7264 = _0x355eda / (_0x13ff26.length * 1.2),
      _0x34eecc = _0x2c7264 * 0.2,
      _0x231ef4 =
        ((_0x239cf2 = _0x3b8bb7.axis) == null
          ? undefined
          : _0x239cf2.reverse) ?? false,
      _0x34b88f = _0x3b8bb7.showRadius ?? false,
      _0x4fa657 = _0x2350cb + _0xb98096 / 2;
    (_0x1d22e7.save(),
      _0x1d22e7.beginPath(),
      _0x1d22e7.rect(
        _0x549724,
        _0x10c134,
        _0x4bc5bd - _0x549724,
        _0x6d9ff8 - _0x10c134,
      ),
      _0x1d22e7.clip());
    let _0x4637db = _0x3b8bb7.themeType ?? _0x27e692.STANDARD,
      _0x25458d =
        _0x3b8bb7.seriesColor ??
        ((_0xaaccfa = _0x13bdd4[_0x4637db]) == null
          ? undefined
          : _0xaaccfa[0]) ??
        _0x13bdd4.standard[0],
      _0x232e69 = _0x13ff26[_0x341baf],
      _0x5a1b4c = _0x13ff26[_0x2e4bb9];
    (_0x13ff26.forEach((_0x57a081, _0x150401) => {
      var _0x44ec84, _0x1d7189, _0x45cee4, _0x54d5b6, _0x47a777;
      if (typeof _0x57a081 == "string" || _0x57a081 === undefined) return;
      let _0x54a5d0 = _0x57a081 === 0 ? 0 : _0xb98096 / 2,
        _0xc41b8 = _0x231ef4
          ? _0x4bc5bd -
            4 -
            (_0x150401 + 1) * (_0x2c7264 + _0x34eecc) +
            _0x34eecc / 2
          : _0x22bd3c + _0x150401 * (_0x2c7264 + _0x34eecc) + _0x34eecc / 2,
        _0x4ee4d8 = _0x57a081 >= 0,
        _0x84e48b = _0x25458d;
      ((_0x44ec84 = _0x3b8bb7.points) != null &&
        (_0x44ec84 = _0x44ec84.firstPoint) != null &&
        _0x44ec84.visible &&
        _0x150401 === 0 &&
        (_0x84e48b = _0x3b8bb7.points["firstPoint"].color || _0x25458d),
        (_0x1d7189 = _0x3b8bb7.points) != null &&
          (_0x1d7189 = _0x1d7189.lastPoint) != null &&
          _0x1d7189.visible &&
          _0x150401 === _0x13ff26.length - 1 &&
          (_0x84e48b = _0x3b8bb7.points["lastPoint"].color || _0x25458d),
        (_0x45cee4 = _0x3b8bb7.points) != null &&
          (_0x45cee4 = _0x45cee4.highPoint) != null &&
          _0x45cee4.visible &&
          _0x57a081 === _0x232e69 &&
          (_0x84e48b = _0x3b8bb7.points["highPoint"].color || _0x25458d),
        (_0x54d5b6 = _0x3b8bb7.points) != null &&
          (_0x54d5b6 = _0x54d5b6.lowPoint) != null &&
          _0x54d5b6.visible &&
          _0x57a081 === _0x5a1b4c &&
          (_0x84e48b = _0x3b8bb7.points["lowPoint"].color || _0x25458d),
        (_0x47a777 = _0x3b8bb7.points) != null &&
          (_0x47a777 = _0x47a777.negativePoint) != null &&
          _0x47a777.visible &&
          _0x63f9bc.includes(_0x150401) &&
          (_0x84e48b = _0x3b8bb7.points["negativePoint"].color || _0x25458d),
        (_0x1d22e7.fillStyle = _0x84e48b),
        _0x2c7264 >= 4 && _0x34b88f
          ? (_0x1d22e7.beginPath(),
            _0x4ee4d8
              ? (_0x1d22e7.moveTo(_0xc41b8, _0x4fa657 - _0x54a5d0 + 2),
                _0x1d22e7.arcTo(
                  _0xc41b8,
                  _0x4fa657 - _0x54a5d0,
                  _0xc41b8 + _0x2c7264,
                  _0x4fa657 - _0x54a5d0,
                  2,
                ),
                _0x1d22e7.arcTo(
                  _0xc41b8 + _0x2c7264,
                  _0x4fa657 - _0x54a5d0,
                  _0xc41b8 + _0x2c7264,
                  _0x4fa657 - _0x54a5d0 + 2,
                  2,
                ),
                _0x1d22e7.lineTo(_0xc41b8 + _0x2c7264, _0x4fa657),
                _0x1d22e7.lineTo(_0xc41b8, _0x4fa657),
                _0x1d22e7.closePath(),
                _0x1d22e7.fill())
              : (_0x1d22e7.moveTo(_0xc41b8, _0x4fa657),
                _0x1d22e7.lineTo(_0xc41b8 + _0x2c7264, _0x4fa657),
                _0x1d22e7.arcTo(
                  _0xc41b8 + _0x2c7264,
                  _0x4fa657 + _0x54a5d0,
                  _0xc41b8 + _0x2c7264 - 2,
                  _0x4fa657 + _0x54a5d0,
                  2,
                ),
                _0x1d22e7.arcTo(
                  _0xc41b8,
                  _0x4fa657 + _0x54a5d0,
                  _0xc41b8,
                  _0x4fa657 + _0x54a5d0 - 2,
                  2,
                ),
                _0x1d22e7.lineTo(_0xc41b8, _0x4fa657),
                _0x1d22e7.closePath(),
                _0x1d22e7.fill()))
          : _0x4ee4d8
            ? _0x1d22e7.fillRect(
                _0xc41b8,
                _0x4fa657 - _0x54a5d0,
                _0x2c7264,
                _0x54a5d0,
              )
            : _0x1d22e7.fillRect(_0xc41b8, _0x4fa657, _0x2c7264, _0x54a5d0));
    }),
      (_0xa12433 = _0x3b8bb7.axis) != null &&
        _0xa12433.visible &&
        (_0x1d22e7.beginPath(),
        _0x1d22e7.moveTo(0 + _0x22bd3c, _0x2350cb + _0xb98096 / 2),
        _0x1d22e7.lineTo(_0x355eda + _0x22bd3c, _0x2350cb + _0xb98096 / 2),
        (_0x1d22e7.strokeStyle = _0x3b8bb7.axis["color"] ?? "rgb(0, 0, 0)"),
        (_0x1d22e7.lineWidth = 1),
        _0x1d22e7.stroke()),
      _0x1d22e7.restore());
  },
  en = (_0x285bf0, _0x2702c7, _0x4d2723, _0x31951b, _0x109396) => {
    let {
      startX: _0x5e8049,
      startY: _0x130749,
      endX: _0x3bde05,
      endY: _0x390d9b,
    } = _0x2702c7.mergeInfo;
    if (!_0x31951b) return;
    let { data: _0x35ce7b } = _0x31951b,
      _0x5367ef = _0x3bde05 - _0x5e8049 - 8,
      _0x43db79 = _0x390d9b - _0x130749 - 8,
      _0x27b165 = _0x5e8049 + 4,
      _0x4e6214 = _0x130749 + 4,
      _0x313624 = Math.min(_0x5367ef, _0x43db79) / 2,
      _0xcbef52 = _0x27b165 + _0x5367ef / 2,
      _0x34c0d6 = _0x4e6214 + _0x43db79 / 2,
      _0x11f73d = [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#FF9F40",
        "#E7E9ED",
        "#B4A0E5",
      ],
      _0x960423 = _0x35ce7b.filter(
        (_0x35b379) => typeof _0x35b379 == "number" && !Number.isNaN(_0x35b379),
      ),
      _0xc2adce = _0x960423.reduce(
        (_0x15951e, _0x52241f) => _0x15951e + _0x52241f,
        0,
      );
    if (_0xc2adce === 0 || _0x960423.length === 0) return;
    let _0x2336a7 = -Math.PI / 2;
    _0x960423.forEach((_0x2986ab, _0x1cffad) => {
      let _0x4b2bb3 = (_0x2986ab / _0xc2adce) * 2 * Math.PI,
        _0x3d8403 = _0x2336a7 + _0x4b2bb3;
      (_0x285bf0.beginPath(),
        _0x285bf0.moveTo(_0xcbef52, _0x34c0d6),
        _0x285bf0.arc(_0xcbef52, _0x34c0d6, _0x313624, _0x2336a7, _0x3d8403),
        _0x285bf0.closePath(),
        (_0x285bf0.fillStyle = _0x11f73d[_0x1cffad % _0x11f73d.length]),
        _0x285bf0.fill(),
        (_0x285bf0.lineWidth = 1),
        (_0x285bf0.strokeStyle = "#ffffff"),
        _0x285bf0.stroke(),
        (_0x2336a7 = _0x3d8403));
    });
  };
var tn = class e extends _0x4edeb5 {
  constructor(_0x4b6112) {
    (super(),
      (this._renderer = _0x4b6112),
      Gt(this, "uKey", "SHEET_SPARKLINE_RENDERER"),
      Gt(this, "Z_INDEX", 35));
  }
  draw(_0x106b16, _0x5d546a, _0x125ebd, _0xeee0a4, { viewRanges: _0xd110f8 }) {
    _0xd110f8.forEach((_0x725f34) => {
      _0x2f9a02.foreach(_0x725f34, (_0x33bbec, _0x44cd81) => {
        let _0x74f488 = _0x125ebd.getCellWithCoordByIndex(
          _0x33bbec,
          _0x44cd81,
          false,
        );
        _0x74f488 && this._renderer(_0x106b16, _0x125ebd, _0x74f488);
      });
    });
  }
  copyForPrinting() {
    return new e(this._renderer);
  }
};
let nn = class extends _0x97f247 {
  constructor(_0x42d35d, _0x33d3a0, _0x700635, _0x3d2f8a) {
    (super(),
      (this._context = _0x42d35d),
      (this._sparklineDataSourceModel = _0x33d3a0),
      (this._rangeProtectionCache = _0x700635),
      (this._sheetPrintInterceptorService = _0x3d2f8a),
      Gt(this, "_sparklineExtension", null),
      this._initRender(),
      this._initPrinting(),
      this._initSkeleton());
  }
  _initRender() {
    let _0x13c11f = this._sparklineDataSourceModel["getSparklineCache"](),
      _0x30308e = _0x13c11f.sparklineAnchorMap,
      _0x21b8f1 = _0x13c11f.sparklineModel,
      _0x1a5ccb = (_0x2c249a, _0x439866, _0x5143f0) => {
        var _0x1b63a9, _0x4eb90d, _0x35b836;
        let { actualRow: _0x148798, actualColumn: _0x299c37 } = _0x5143f0,
          { worksheet: _0x2ddffb } = _0x439866,
          _0x29fe79 = _0x2ddffb.getSheetId(),
          _0x25a5fa = _0x2ddffb.getUnitId();
        if (
          ((_0x1b63a9 = this._rangeProtectionCache["getCellInfo"](
            _0x25a5fa,
            _0x29fe79,
            _0x148798,
            _0x299c37,
          )) == null
            ? undefined
            : _0x1b63a9[_0x3cf92f.View]) === false
        )
          return;
        let _0x55678d = _0x2ddffb.getRowVisible(_0x148798),
          _0x344eea = _0x2ddffb.getColVisible(_0x299c37);
        if (!_0x55678d || !_0x344eea) return;
        let _0x3eb67f =
            (_0x4eb90d = _0x30308e.get(_0x25a5fa)) == null
              ? undefined
              : _0x4eb90d.get(_0x29fe79),
          _0x156b8b =
            _0x3eb67f == null || (_0x35b836 = _0x3eb67f.matrix) == null
              ? undefined
              : _0x35b836.getValue(_0x148798, _0x299c37);
        if (_0x156b8b) {
          var _0x59356a;
          let _0x140bd3 =
              _0x3eb67f == null
                ? undefined
                : _0x3eb67f.extra[_0x156b8b.groupId],
            _0x5ae310 =
              (_0x59356a = _0x21b8f1.get(_0x25a5fa)) == null ||
              (_0x59356a = _0x59356a.get(_0x29fe79)) == null
                ? undefined
                : _0x59356a.get(
                    _0x156b8b == null ? undefined : _0x156b8b.groupId,
                  );
          if (!_0x5ae310) return;
          let _0x4544f7 =
            (_0x5ae310 == null ? undefined : _0x5ae310.config["type"]) ??
            _0x4046bd.LINE_CHART;
          _0x4544f7 === _0x4046bd.LINE_CHART
            ? Zt(_0x2c249a, _0x5143f0, _0x5ae310.config, _0x156b8b, _0x140bd3)
            : _0x4544f7 === _0x4046bd.BAR_CHART
              ? Qt(_0x2c249a, _0x5143f0, _0x5ae310.config, _0x156b8b, _0x140bd3)
              : _0x4544f7 === _0x4046bd.PROFIT_AND_LOSS_CHART
                ? $t(
                    _0x2c249a,
                    _0x5143f0,
                    _0x5ae310.config,
                    _0x156b8b,
                    _0x140bd3,
                  )
                : _0x4544f7 === _0x4046bd.PIE_CHART &&
                  en(
                    _0x2c249a,
                    _0x5143f0,
                    _0x5ae310.config,
                    _0x156b8b,
                    _0x140bd3,
                  );
        }
      },
      _0x3143d5 = this._context["mainComponent"];
    _0x3143d5.getExtensionByKey("SHEET_SPARKLINE_RENDERER") ||
      ((this._sparklineExtension = new tn(_0x1a5ccb)),
      _0x3143d5.register(this._sparklineExtension));
  }
  _initPrinting() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_COMPONENT_COLLECT,
        {
          handler: (_0x825c7a, _0x160a83, _0x573720) => {
            var _0x7eb35;
            let { spreadsheet: _0x21a261 } = _0x160a83;
            return (
              this._sparklineExtension &&
                !(
                  (_0x7eb35 = _0x21a261.getExtensionByKey) != null &&
                  _0x7eb35.call(_0x21a261, "SHEET_SPARKLINE_RENDERER")
                ) &&
                _0x21a261.register(
                  this._sparklineExtension["copyForPrinting"](),
                ),
              _0x573720(_0x825c7a)
            );
          },
        },
      ),
    );
  }
  _initSkeleton() {
    this.disposeWithMe(
      this._sparklineDataSourceModel["updateConfig$"]
        .pipe(_0x2aab0a(300))
        .subscribe(() => {
          var _0x194831;
          (_0x194831 = this._context["mainComponent"]) == null ||
            _0x194831.makeDirty();
        }),
    );
  }
};
nn = Lt(
  [
    $(1, _0x5e3acc(_0x593f58)),
    $(2, _0x5e3acc(_0x34c74b)),
    $(3, _0x5e3acc(_0x4e15b2)),
  ],
  nn,
);
let rn = class extends _0x3174ca {
  constructor(_0x3fb99e = Et, _0x25180a, _0x43c976, _0x19460e, _0x219152) {
    (super(),
      (this._config = _0x3fb99e),
      (this._configService = _0x25180a),
      (this._injector = _0x43c976),
      (this._commandService = _0x19460e),
      (this._renderManagerService = _0x219152));
    let { menu: _0x57a3db, ..._0x1952c0 } = _0x2bfe1f({}, Et, this._config);
    (_0x57a3db &&
      this._configService["setConfig"]("menu", _0x57a3db, { merge: true }),
      this._configService["setConfig"]("sheets-sparkline-ui.config", _0x1952c0),
      this._initRegisterCommand());
  }
  onStarting() {
    (this._injector["add"]([Rt]),
      this._injector["get"](Rt),
      [[Vt], [Kt], [zt], [Yt], [Bt], [Xt]].forEach((_0x507aa2) => {
        this._injector["add"](_0x507aa2);
      }),
      _0x58bed8(this._injector, [[Vt]]));
  }
  onRendered() {
    ([[nn]].forEach((_0x2a9d06) => {
      this._renderManagerService["registerRenderModule"](
        _0x1e27a6.UNIVER_SHEET,
        _0x2a9d06,
      );
    }),
      _0x58bed8(this._injector, [[Kt], [zt], [Yt], [Bt], [Xt]]));
  }
  _initRegisterCommand() {
    [ht, mt].forEach((_0x1bffec) =>
      this._commandService["registerCommand"](_0x1bffec),
    );
  }
};
(Gt(rn, "pluginName", "SHEET_SPARKLINE_UI_PLUGIN"),
  Gt(rn, "packageName", wt),
  Gt(rn, "version", Tt),
  Gt(rn, "type", _0x1e27a6.UNIVER_SHEET),
  (rn = Lt(
    [
      _0x49a109(_0xda5999, _0x43fd2a, _0x14b526, _0x3861a2, _0x1d65ae),
      $(1, _0x586a2a),
      $(2, _0x5e3acc(_0x29fa15)),
      $(3, _0x5e3acc(_0x4350b0)),
      $(4, _0x189ab8),
    ],
    rn,
  )));
export {
  Ct as SheetsSparklineUIMenuSchema,
  rn as UniverSheetSparklineUIPlugin,
};
