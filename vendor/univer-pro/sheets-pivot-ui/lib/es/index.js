import {
  ComponentManager as _0x1663d6,
  ContextMenuGroup as _0x2fd353,
  ContextMenuPosition as _0xc990de,
  IDialogService as _0x42b513,
  IMenuManagerService as _0x47814d,
  IMessageService as _0x145fa8,
  ISidebarService as _0xa50157,
  IconManager as _0x3f03ea,
  MenuItemType as _0x46d5c6,
  RibbonDataGroup as _0xde37b7,
  getMenuHiddenObservable as _0x160f14,
  useDependency as _0x473eb2,
  useObservable as _0x483d52,
} from "@univerjs/ui";
import {
  AddPivotFieldCommand as _0x5007d3,
  AddPivotTableCommand as _0x16838d,
  MovePivotFieldCommand as _0x415706,
  PIVOT_DATE_GROUP_TYPES as _0x5b7256,
  PivotDisplayDataType as _0x3ba488,
  PivotDrillDownCommand as _0x5c2aba,
  PositionType as _0x4e516a,
  RemovePivotFieldCommand as _0x40504d,
  RemovePivotTableMutation as _0x50829c,
  SHEETS_PIVOT_PLUGIN_CONFIG_KEY as _0x1d972c,
  SHEET_PIVOT_TABLE_PLUGIN as _0x56c979,
  SetPivotCollapseCommand as _0x18a0be,
  SetPivotDateGroupCommand as _0x59f3ab,
  SetPivotFilterCommand as _0x2e8123,
  SetPivotLayoutCommand as _0x112e8b,
  SetPivotOptionCommand as _0x4af03c,
  SetPivotSortCommand as _0xc90518,
  SetPivotValueFilterCommand as _0x3739c8,
  SheetsPivotRPCService as _0x2a1a15,
  SheetsPivotTableAdaptorModel as _0x1c6c95,
  SheetsPivotTableConfigModel as _0x52d40e,
  SheetsPivotTableService as _0x1ffe95,
  UniverSheetsPivotTablePlugin as _0x4c380c,
  UpdatePivotFieldSettingCommand as _0x44c3e1,
  UpdatePivotTableSourceRangeCommand as _0x94240e,
  UpdatePivotValuePositionCommand as _0x5bfae0,
  generateSetRangeValueMutations as _0x3326e8,
  getPivotAppliedRanges as _0xa807ca,
  getPivotDateGroupContext as _0x16df51,
  isPivotDateGroupTypeDisabled as _0x24f691,
  isolateTextForBidiContext as _0x3f3e5b,
  mapPivotSheetColumn as _0x12022e,
  mapPivotSheetRange as _0x2f5c84,
  resolvePivotSheetCell as _0x2a191e,
  resolvePivotValueFieldId as _0x3c8549,
  resolvePivotValueFilterTarget as _0x155ca6,
  unionPivotViewRange as _0x16b0ff,
} from "@univerjs-pro/sheets-pivot";
import {
  CommandType as _0x3b7b03,
  CustomCommandExecutionError as _0x43ae95,
  DependentOn as _0x4851d9,
  Disposable as _0x4b2a77,
  DisposableCollection as _0x4256e5,
  ICommandService as _0x5c53fb,
  IConfigService as _0x4766cd,
  IConfirmService as _0x3ba214,
  ILogService as _0x4c8ad2,
  IPermissionService as _0x893235,
  IUniverInstanceService as _0x4a41b2,
  Inject as _0x46baf8,
  Injector as _0x2a2b22,
  LocaleService as _0x21b801,
  Plugin as _0x12182f,
  RANGE_TYPE as _0x1c329e,
  Rectangle as _0x54a654,
  ThemeService as _0x158b27,
  UniverInstanceType as _0x33bcb3,
  cellToRange as _0x2e8d6f,
  currencySymbols as _0x537c61,
  debounce as _0x5f59f1,
  generateRandomId as _0x21431b,
  isPatternEqualWithoutDecimal as _0x14fe41,
  isValidRange as _0x1db1c9,
  merge as _0x38a06e,
  numfmt as _0x4d00e6,
} from "@univerjs/core";
import {
  AddWorksheetMergeMutation as _0x52f251,
  InsertColCommand as _0x23d750,
  InsertRowCommand as _0x132fbe,
  MergeCellController as _0x2da3b3,
  MoveRangeCommand as _0x3f7896,
  RangeProtectionPermissionEditPoint as _0x689e5b,
  RangeProtectionPermissionViewPoint as _0x2b4c89,
  RemoveColCommand as _0x5651a8,
  RemoveRowCommand as _0x5a269b,
  SheetInterceptorService as _0x13c89a,
  SheetPermissionCheckController as _0x21ceff,
  SheetsSelectionsService as _0x28a598,
  UniverSheetsPlugin as _0x2e843d,
  WorkbookEditablePermission as _0x443e77,
  WorksheetEditPermission as _0x747f01,
  WorksheetPivotTablePermission as _0x22c740,
  WorksheetViewPermission as _0x5d9f5f,
  checkRangesEditablePermission as _0x823016,
  expandToContinuousRange as _0x2ce08e,
  getSheetCommandTarget as _0x25afea,
  isSingleCellSelection as _0x2070a7,
} from "@univerjs/sheets";
import {
  ActionRow as _0x2be7cc,
  Button as _0x31eb36,
  Checkbox as _0x5ae922,
  Dropdown as _0x5d93ad,
  Input as _0x989aa5,
  InputNumber as _0x582285,
  MessageType as _0x567a3a,
  Radio as _0x3e0c7a,
  RadioGroup as _0x58121b,
  Select as _0x61011e,
  SelectList as _0x388486,
  Tooltip as _0x4dd9b6,
  borderClassName as _0x4dca92,
  clsx as _0x37c9a5,
  scrollbarClassName as _0x147e92,
} from "@univerjs/design";
import {
  deserializeRangeWithSheet as _0x124f11,
  serializeRangeWithSheet as _0x121c3b,
} from "@univerjs/engine-formula";
import { RangeSelector as _0x16cbba } from "@univerjs/sheets-formula-ui";
import {
  createContext as _0x1e3e41,
  useCallback as _0x144089,
  useContext as _0x53b194,
  useEffect as _0x41acdd,
  useMemo as _0x3f1f87,
  useRef as _0x41a68e,
  useState as _0x4b7ac9,
} from "react";
import {
  Subject as _0x28ae5e,
  auditTime as _0x23ee41,
  map as _0x1236f6,
  merge as _0x17aa8b,
  startWith as _0x2839a7,
} from "rxjs";
import {
  PivotCellStyleTypeEnum as _0x3a8679,
  PivotDataFieldDataTypeEnum as _0x3add37,
  PivotDataFieldSortOperatorEnum as _0x534c9f,
  PivotFilterTypeEnum as _0x4e03be,
  PivotLayoutTypeEnum as _0xc3cd2b,
  PivotShowAsBaseItemTypeEnum as _0x1bfa7e,
  PivotShowAsTypeEnum as _0x36dc83,
  PivotSubtotalPositionEnum as _0x2f77ff,
  PivotSubtotalTypeEnum as _0x18daee,
  PivotTableFiledAreaEnum as _0x487c30,
  PivotTableValuePositionEnum as _0x4b4afe,
  ST_PivotFilterOperatorEnum as _0x561a2b,
  isManualPivotFilter as _0x79d356,
  isValueFilterOperator as _0x5f4c18,
} from "@univerjs-pro/engine-pivot";
import {
  Fragment as _0x947289,
  jsx as _0x211556,
  jsxs as _0x44caca,
} from "react/jsx-runtime";
import {
  IFormatPainterService as _0x2cf811,
  ISheetClipboardService as _0xaea4fd,
  ISheetSelectionRenderService as _0x449b70,
  SetCellEditVisibleOperation as _0x1a715c,
  SheetPrintInterceptorService as _0x3b9af9,
  SheetSkeletonManagerService as _0x4f7550,
  UniverSheetsUIPlugin as _0x1ac3fd,
  getCoordByCell as _0x5c7d8c,
  getCoordByOffset as _0x50fd4c,
  getCurrentRangeDisable$ as _0x2aae2d,
  getObservableWithExclusiveRange$ as _0x5358dd,
  getSheetObject as _0x441540,
} from "@univerjs/sheets-ui";
import { UniverLicensePlugin as _0x467a1c } from "@univerjs-pro/license";
import {
  CURSOR_TYPE as _0x36b46e,
  IRenderManagerService as _0x3c0f1f,
  Rect as _0x212b3e,
  Shape as _0x50c988,
  UniverRenderEnginePlugin as _0x2d46c5,
  Vector2 as _0x33d0a5,
} from "@univerjs/engine-render";
import {
  ArrowLeftIcon as _0x3cc7ee,
  AscendingIcon as _0x2c7612,
  CalendarIcon as _0x5de6e0,
  CheckMarkIcon as _0x46b78c,
  ColumnIcon as _0x2043e7,
  DescendingIcon as _0x26efc4,
  FilterIcon as _0x281fda,
  FunctionIcon as _0x1a0b44,
  GripVerticalIcon as _0x23e263,
  MoreDownIcon as _0x5dc689,
  MoreHorizontalIcon as _0x455b1f,
  NumberIcon as _0x2f31ee,
  PivotTableIcon as _0x2ad0c3,
  RowIcon as _0x3bcbdd,
  SearchIcon as _0x59db09,
  TextIcon as _0x1abe08,
} from "@univerjs/icons";
import { InsertTextCommand as _0x3e0db4 } from "@univerjs/docs";
import { IMEInputCommand as _0x4a5ad4 } from "@univerjs/docs-ui";
const wn = "UNIVER_SHEET_PIVOT_PANEL",
  Tn = "UNIVER_SHEET_PIVOT_PANEL_ID",
  En = "UNIVER_SHEET_PIVOT_FILTER_PANEL",
  Dn = "UNIVER_SHEET_PIVOT_FILTER_PANEL_ID",
  On = "UNIVER_SHEET_PIVOT_FIELD_SETTING",
  kn = "UNIVER_SHEET_PIVOT_FIELD_SETTING_ID",
  An = "UNIVER_SHEET_PIVOT_FIELD_NUMFMT",
  jn = "UNIVER_SHEET_PIVOT_FIELD_NUMFMT_ID",
  Mn = "UNIVER_SHEET_PIVOT_SHOW_DATA_AS_DIALOG",
  Nn = "UNIVER_SHEET_PIVOT_VALUE_FILTER_DIALOG";
function Pn(_0x179ace, _0x135866, _0x3b0aa4) {
  let _0x42daf6 = _0x3b0aa4.fieldIds,
    { fieldsConfig: _0x4dd71f } = _0x135866,
    {
      rowFields: _0x2086e3,
      columnFields: _0x3f7e2c,
      valueFields: _0x5c34a2,
      filterFields: _0x46c854,
      hiddenFields: _0xc5b6ac,
      dimension: _0x28b15a,
      measure: _0x32828d,
      valueIndex: _0x3ad170,
      valuePosition: _0x26209a,
    } = _0x4dd71f,
    _0x235dad = new Set();
  [
    ..._0x2086e3,
    ..._0x3f7e2c,
    ..._0x5c34a2,
    ..._0x46c854,
    ..._0xc5b6ac,
  ].forEach((_0x169818) => {
    let _0x271c77 = _0x28b15a[_0x169818] || _0x32828d[_0x169818];
    _0x271c77 && _0x235dad.add(_0x271c77.dataFieldId);
  });
  let _0x43d931 = _0x42daf6.map((_0x1b0e2a) => {
      let _0x5ad2fa = _0x3b0aa4.fields[_0x1b0e2a];
      return {
        checked: _0x235dad.has(_0x1b0e2a),
        dataFieldId: _0x5ad2fa.id,
        id: _0x5ad2fa.id,
        name: _0x5ad2fa.name,
        type: _0x5ad2fa.fieldDataType,
        pivotTableId: _0x179ace,
      };
    }),
    _0x5c51d0 = _0x2086e3.flatMap((_0x438b95) => {
      let _0x5efd62 = _0x28b15a[_0x438b95];
      return _0x5efd62
        ? [
            {
              dataFieldId: _0x5efd62.dataFieldId,
              tableFieldId: _0x5efd62.id,
              displayName: _0x5efd62.displayName,
            },
          ]
        : [];
    }),
    _0x2e13d1 = _0x3f7e2c.flatMap((_0x38694c) => {
      let _0x3e0fd9 = _0x28b15a[_0x38694c];
      return _0x3e0fd9
        ? [
            {
              dataFieldId: _0x3e0fd9.dataFieldId,
              tableFieldId: _0x3e0fd9.id,
              displayName: _0x3e0fd9.displayName,
            },
          ]
        : [];
    }),
    _0x27db54 = _0x5c34a2.flatMap((_0x63fc1d) => {
      let _0x299621 = _0x32828d[_0x63fc1d];
      return _0x299621
        ? [
            {
              dataFieldId: _0x299621.dataFieldId,
              tableFieldId: _0x299621.id,
              displayName: _0x299621.displayName,
              format: _0x299621.format,
              subTotalType: _0x299621.subtotal,
            },
          ]
        : [];
    }),
    _0x48f169 = _0x46c854.flatMap((_0x465a04) => {
      let _0xf9e425 = _0x28b15a[_0x465a04];
      return _0xf9e425
        ? [
            {
              dataFieldId: _0xf9e425.dataFieldId,
              tableFieldId: _0xf9e425.id,
              displayName: _0xf9e425.displayName,
            },
          ]
        : [];
    });
  return (
    _0x27db54.length > 1 &&
      (_0x26209a === _0x4b4afe.Row ? _0x5c51d0 : _0x2e13d1).splice(
        _0x3ad170,
        0,
        {
          dataFieldId: "",
          tableFieldId: "PivotMultipleValueId",
          displayName: "ΣValue",
        },
      ),
    {
      sourceList: _0x43d931,
      sourceRange: _0x135866.sourceRangeInfo,
      rowFields: _0x5c51d0,
      columnFields: _0x2e13d1,
      valueFields: _0x27db54,
      filterFields: _0x48f169,
      positionInfo: _0x135866.targetCellInfo,
    }
  );
}
const Fn = {
  type: _0x3b7b03.OPERATION,
  id: "sheet.operation.open-pivot-table-panel",
  async handler(_0x2a86af, _0x2bf7fe) {
    let _0x547798 = _0x2bf7fe == null ? undefined : _0x2bf7fe.pivotTableId;
    if (!_0x547798) return false;
    let _0x567358 = _0x2a86af.get(_0xa50157),
      _0x118a70 = _0x2a86af.get(_0x4a41b2),
      _0x3602ff = _0x2a86af.get(_0x21b801),
      _0x17a1a6 = _0x2a86af.get(_0x52d40e),
      _0x1f8497 = _0x25afea(_0x118a70);
    if (!_0x1f8497) return false;
    let { unitId: _0x6b6ce, subUnitId: _0xd77589 } = _0x1f8497,
      _0x3a5cba = _0x17a1a6.getPivotTableConfig(_0x6b6ce, _0xd77589, _0x547798),
      _0x5b39ed = _0x17a1a6.getCollection(_0x6b6ce, _0x547798);
    if (!_0x3a5cba || !_0x5b39ed) return false;
    let _0x3ada3d = Pn(_0x547798, _0x3a5cba, _0x5b39ed),
      _0x2fafed = {
        header: { title: _0x3602ff.t("sheets-pivot-ui.title") },
        id: Tn,
        children: {
          label: wn,
          panelInfo: _0x3ada3d,
          version: Math.random(),
          setVersion: () => Math.random(),
          pivotTableId: _0x547798,
          unitId: _0x6b6ce,
          subUnitId: _0xd77589,
        },
        width: 346,
      };
    return (_0x567358.open(_0x2fafed), true);
  },
};
function In(_0x1905bb) {
  "@babel/helpers - typeof";
  return (
    (In =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x588c71) {
            return typeof _0x588c71;
          }
        : function (_0x202a33) {
            return _0x202a33 &&
              typeof Symbol == "function" &&
              _0x202a33.constructor === Symbol &&
              _0x202a33 !== Symbol.prototype
              ? "symbol"
              : typeof _0x202a33;
          }),
    In(_0x1905bb)
  );
}
function Ln(_0x29580d, _0x2e6912) {
  if (In(_0x29580d) != "object" || !_0x29580d) return _0x29580d;
  var _0xe7cd71 = _0x29580d[Symbol.toPrimitive];
  if (_0xe7cd71 !== undefined) {
    var _0x2f19dc = _0xe7cd71.call(_0x29580d, _0x2e6912 || "default");
    if (In(_0x2f19dc) != "object") return _0x2f19dc;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x2e6912 === "string" ? String : Number)(_0x29580d);
}
function Rn(_0x3ead63) {
  var _0x1c4b55 = Ln(_0x3ead63, "string");
  return In(_0x1c4b55) == "symbol" ? _0x1c4b55 : _0x1c4b55 + "";
}
function Z(_0x4e20bf, _0x3b99a6, _0xa8d1fb) {
  return (
    (_0x3b99a6 = Rn(_0x3b99a6)) in _0x4e20bf
      ? Object.defineProperty(_0x4e20bf, _0x3b99a6, {
          value: _0xa8d1fb,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4e20bf[_0x3b99a6] = _0xa8d1fb),
    _0x4e20bf
  );
}
function Q(_0x2dc29d, _0x3c0a62) {
  return function (_0x80a78c, _0x316019) {
    _0x3c0a62(_0x80a78c, _0x316019, _0x2dc29d);
  };
}
function $(_0x187f8d, _0x566980, _0x30e44f, _0x75d01e) {
  var _0x379a2e = arguments.length,
    _0x5755d8 =
      _0x379a2e < 3
        ? _0x566980
        : _0x75d01e === null
          ? (_0x75d01e = Object.getOwnPropertyDescriptor(_0x566980, _0x30e44f))
          : _0x75d01e,
    _0x14223b;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5755d8 = Reflect.decorate(_0x187f8d, _0x566980, _0x30e44f, _0x75d01e);
  else {
    for (var _0x45ba54 = _0x187f8d.length - 1; _0x45ba54 >= 0; _0x45ba54--)
      (_0x14223b = _0x187f8d[_0x45ba54]) &&
        (_0x5755d8 =
          (_0x379a2e < 3
            ? _0x14223b(_0x5755d8)
            : _0x379a2e > 3
              ? _0x14223b(_0x566980, _0x30e44f, _0x5755d8)
              : _0x14223b(_0x566980, _0x30e44f)) || _0x5755d8);
  }
  return (
    _0x379a2e > 3 &&
      _0x5755d8 &&
      Object.defineProperty(_0x566980, _0x30e44f, _0x5755d8),
    _0x5755d8
  );
}
let zn = class extends _0x4b2a77 {
  constructor(
    _0x3eb9bd,
    _0x3af6ef,
    _0x1a5d2f,
    _0x417536,
    _0x1c45ae,
    _0x2dabec,
    _0x4ec0d0,
    _0x58f9da,
  ) {
    (super(),
      (this._sheetsSelectionsService = _0x3eb9bd),
      (this._univerInstanceService = _0x3af6ef),
      (this._sheetsPivotTableAdaptorModel = _0x1a5d2f),
      (this._commandService = _0x417536),
      (this._sidebarService = _0x1c45ae),
      (this._dialogService = _0x2dabec),
      (this._injector = _0x4ec0d0),
      (this._permissionService = _0x58f9da),
      Z(this, "_pivotTableId", undefined),
      Z(this, "_pivotTablePanelVisible$", new _0x28ae5e()),
      Z(
        this,
        "pivotTablePanelVisible$",
        this._pivotTablePanelVisible$["asObservable"](),
      ),
      Z(this, "_isRangeSelectorFocus", false),
      Z(this, "_isRangeSelector2Focus", false),
      this._initPanelOpen(),
      this._initSheetChange());
  }
  setIsRangeSelectorFocus(_0x3459e9) {
    this._isRangeSelectorFocus = _0x3459e9;
  }
  setIsRangeSelector2Focus(_0x509284) {
    this._isRangeSelector2Focus = _0x509284;
  }
  _setPivotTableId(_0x4cad8e) {
    this._pivotTableId = _0x4cad8e;
  }
  _closePivotPanel() {
    this._isRangeSelectorFocus ||
      this._isRangeSelector2Focus ||
      (this._setPivotTableId(undefined), this._sidebarService["close"](Tn));
  }
  _initPanelOpen() {
    let _0x43b525 = this._univerInstanceService["getCurrentUnitOfType"](
      _0x33bcb3.UNIVER_SHEET,
    );
    if (_0x43b525) {
      let _0x52cbc9 = _0x43b525.activeSheet$;
      (this.disposeWithMe(
        _0x17aa8b(
          _0x52cbc9,
          this._sheetsSelectionsService["selectionMoveEnd$"],
        ).subscribe(() => {
          let _0x1824ea =
            this._sheetsSelectionsService["getCurrentSelections"]();
          if (!_0x1824ea) return;
          let _0x3169ae = _0x1824ea[_0x1824ea.length - 1];
          if (!_0x3169ae) return;
          let _0x5e7b83 = _0x3169ae.primary;
          if (!_0x5e7b83) return;
          let _0x1341a3 = this._univerInstanceService["getCurrentUnitOfType"](
              _0x33bcb3.UNIVER_SHEET,
            ),
            _0x334ec0 =
              _0x1341a3 == null ? undefined : _0x1341a3.getActiveSheet();
          if (!_0x1341a3 || !_0x334ec0) return;
          let _0x53bad2 = _0x1341a3.getUnitId(),
            _0x5ab596 = _0x334ec0.getSheetId(),
            _0x119dfc = this._sheetsPivotTableAdaptorModel[
              "getPivotTableIdByCell"
            ](_0x53bad2, _0x5ab596, _0x5e7b83.startRow, _0x5e7b83.startColumn);
          if (_0x119dfc) {
            var _0x42338, _0x2c2b2e;
            let _0x2c031a = _0x16b0ff(
                (_0x42338 = this._sheetsPivotTableAdaptorModel[
                  "getPivotItemRenderInfoCache"
                ](_0x53bad2, _0x5ab596, _0x119dfc)) == null
                  ? undefined
                  : _0x42338.rangesInfo,
              ),
              _0x250b86 = _0x823016(
                this._injector,
                _0x53bad2,
                _0x5ab596,
                _0x2c031a,
              ),
              _0x128fda =
                (_0x2c2b2e = this._permissionService["getPermissionPoint"](
                  new _0x22c740(_0x53bad2, _0x5ab596).id,
                )) == null
                  ? undefined
                  : _0x2c2b2e.value;
            if (!_0x250b86 || !_0x128fda) return;
            (this._setPivotTableId(_0x119dfc),
              this._pivotTablePanelVisible$["next"](true),
              this._commandService["executeCommand"](Fn.id, {
                pivotTableId: _0x119dfc,
              }));
          } else this._closePivotPanel();
        }),
      ),
        this.disposeWithMe(
          this._commandService["onCommandExecuted"]((_0x47bfc6) => {
            _0x47bfc6.id === _0x50829c.id &&
              _0x47bfc6.params["pivotTableId"] === this._pivotTableId &&
              this._sidebarService["close"](Tn);
          }),
        ));
    }
  }
  _initSheetChange() {
    let _0x357fa7 = this._univerInstanceService["getCurrentUnitOfType"](
      _0x33bcb3.UNIVER_SHEET,
    );
    (_0x357fa7 &&
      this.disposeWithMe(
        _0x357fa7.sheetDisposed$["subscribe"](() => {
          this._sidebarService["close"]();
        }),
      ),
      this.disposeWithMe(
        this._sidebarService["sidebarOptions$"].subscribe((_0x4bac3a) => {
          if (_0x4bac3a.id === "UNIVER_SHEET_PIVOT_PANEL_ID") {
            let _0x10913e = !!_0x4bac3a.visible;
            (this._pivotTablePanelVisible$["next"](_0x10913e),
              _0x10913e || this._dialogService["close"](kn));
          }
        }),
      ),
      this.disposeWithMe(
        this._dialogService["getDialogs$"]().subscribe((_0x2a175d) => {
          let _0x56b4e6 = _0x2a175d.find(
            (_0x123bdb) => _0x123bdb.id === wr.componentKey,
          );
          _0x56b4e6 &&
            _0x56b4e6.open === false &&
            this._dialogService["close"](wr.componentKey);
        }),
      ));
  }
};
zn = $(
  [
    Q(0, _0x46baf8(_0x28a598)),
    Q(1, _0x46baf8(_0x4a41b2)),
    Q(2, _0x46baf8(_0x1c6c95)),
    Q(3, _0x46baf8(_0x5c53fb)),
    Q(4, _0x46baf8(_0xa50157)),
    Q(5, _0x46baf8(_0x42b513)),
    Q(6, _0x46baf8(_0x2a2b22)),
    Q(7, _0x46baf8(_0x893235)),
  ],
  zn,
);
const Bn = {
    type: _0x3b7b03.OPERATION,
    id: "sheet.operation.open-pivot-table-filter-panel",
    async handler(_0x24bd63, _0x7aa871) {
      if (!_0x7aa871) return false;
      let {
          row: _0x362834,
          col: _0x4182eb,
          unitId: _0x40234e,
          subUnitId: _0x579052,
          tableFieldId: _0x5d68eb,
          pivotTableId: _0x33e942,
        } = _0x7aa871,
        _0x591198 = _0x24bd63.get(_0x1c6c95),
        _0x5efb7b =
          _0x33e942 ||
          _0x591198.getPivotTableIdByCell(
            _0x40234e,
            _0x579052,
            _0x362834,
            _0x4182eb,
          );
      if (!_0x5efb7b) return false;
      let _0x48c7dc = _0x24bd63.get(_0x2a1a15),
        _0x3fd484 = _0x591198.getPivotItemRenderInfoCache(
          _0x40234e,
          _0x579052,
          _0x5efb7b,
        );
      if (!(_0x3fd484 != null && _0x3fd484.rangesInfo)) return false;
      let _0x374aac = _0x591198.getPivotTableCellData(
          _0x40234e,
          _0x579052,
          _0x362834,
          _0x4182eb,
        ),
        _0x36f41e = (
          await _0x48c7dc.getPivotDisplayConfig({
            unitId: _0x40234e,
            subUnitId: _0x579052,
            pivotTableId: _0x5efb7b,
            params: {
              type: _0x3ba488.Filter,
              filter: {
                row: _0x362834,
                col: _0x4182eb,
                tableFieldId: _0x5d68eb,
                cellData: _0x374aac,
                pivotItemRenderInfoCache: _0x3fd484,
              },
            },
          })
        ).result["filter"];
      if (!_0x36f41e) return false;
      let _0xe67942 = _0x24bd63.get(_0x42b513),
        _0x453f2f = {
          id: Dn,
          draggable: true,
          mask: false,
          maskClosable: false,
          width: 336,
          dialogStyles: {
            header: { padding: "16px 16px 0", height: 0 },
            body: { padding: "0 16px 16px" },
          },
          closable: false,
          children: {
            label: En,
            unitId: _0x40234e,
            subUnitId: _0x579052,
            key: _0x362834 + "-" + _0x4182eb + "-" + (_0x5d68eb || ""),
            filterItemInfo: _0x36f41e,
          },
          onClose: () => {
            _0xe67942.close(Dn);
          },
        };
      return (_0xe67942.open(_0x453f2f), true);
    },
  },
  Vn = {
    type: _0x3b7b03.OPERATION,
    id: "sheet.operation.open-pivot-table-field-setting-panel",
    handler(_0x202f69, _0x6641ee) {
      if (!_0x6641ee) return false;
      let _0x48032b = _0x202f69.get(_0x21b801),
        {
          tableFieldId: _0x4f09bb,
          pivotTableId: _0x798962,
          unitId: _0x6346e8,
          subUnitId: _0x2dcf6b,
          tableFieldInfo: _0x4b1f56,
          dataFieldInfo: _0x56ab92,
        } = _0x6641ee,
        _0x1a6b06 = _0x202f69.get(_0x42b513),
        _0xfecc55 = {
          id: kn,
          title: { title: _0x48032b.t("sheets-pivot-ui.fieldSettings") },
          draggable: true,
          mask: false,
          maskClosable: false,
          width: 400,
          children: {
            label: On,
            tableFieldId: _0x4f09bb,
            pivotTableId: _0x798962,
            tableFieldInfo: _0x4b1f56,
            dataFieldInfo: _0x56ab92,
            unitId: _0x6346e8,
            subUnitId: _0x2dcf6b,
            version: Math.random(),
            key: "field-setting-" + (_0x4f09bb || ""),
            closeFn: () => {
              _0x1a6b06.close(kn);
            },
          },
          onClose: () => {
            _0x1a6b06.close(kn);
          },
        };
      return (_0x1a6b06.open(_0xfecc55), true);
    },
  },
  Hn = [
    { label: "1930-08-05", suffix: "yyyy-MM-dd" },
    { label: "1930/08/05", suffix: "yyyy/MM/dd" },
    { label: "1930年08月05日", suffix: 'yyyy"年"MM"月"dd"日"' },
    { label: "08-05", suffix: "MM-dd" },
    { label: "8月5日", suffix: 'M"月"d"日"' },
    { label: "13:30:30", suffix: "h:mm:ss" },
    { label: "13:30", suffix: "h:mm" },
    { label: "下午01:30", suffix: "A/P\x20hh:mm" },
    { label: "下午1:30", suffix: "A/P\x20h:mm" },
    { label: "下午1:30:30", suffix: "A/P h:mm:ss" },
    { label: "08-05 下午 01:30", suffix: "MM-dd A/P hh:mm" },
  ],
  Un = [
    { label: "(1,235)", suffix: "#,##0_);(#,##0)" },
    { label: "(1,235)\x20", suffix: "#,##0_);[Red](#,##0)", color: "red" },
    { label: "1,234.56", suffix: "#,##0.00_);#,##0.00" },
    { label: "1,234.56", suffix: "#,##0.00_);[Red]#,##0.00", color: "red" },
    { label: "-1,234.56", suffix: "#,##0.00_);-#,##0.00" },
    { label: "-1,234.56", suffix: "#,##0.00_);[Red]-#,##0.00", color: "red" },
  ],
  Wn = [
    {
      label: (_0x1b65bc) => _0x1b65bc + "1,235",
      suffix: (_0x5388fb) =>
        "\x22" + _0x5388fb + '"#,##0.00_);"' + _0x5388fb + '"#,##0.00',
    },
    {
      label: (_0x3ce218) => _0x3ce218 + "1,235",
      suffix: (_0x3e3683) =>
        "\x22" + _0x3e3683 + '"#,##0.00_);[Red]"' + _0x3e3683 + '"#,##0.00',
      color: "red",
    },
    {
      label: (_0x3d1418) => "(" + _0x3d1418 + "1,235)",
      suffix: (_0xdb1c4c) =>
        "\x22" + _0xdb1c4c + '"#,##0.00_);("' + _0xdb1c4c + '"#,##0.00)',
    },
    {
      label: (_0xdbb2d7) => "(" + _0xdbb2d7 + "1,235)",
      suffix: (_0xd7869e) =>
        "\x22" +
        _0xd7869e +
        "\x22#,##0.00_);[Red](\x22" +
        _0xd7869e +
        '"#,##0.00)',
      color: "red",
    },
    {
      label: (_0x543cfa) => "-" + _0x543cfa + "1,235",
      suffix: (_0x11558f) =>
        "\x22" + _0x11558f + "\x22#,##0.00_);-\x22" + _0x11558f + '"#,##0.00',
    },
    {
      label: (_0x52d35e) => "-" + _0x52d35e + "1,235",
      suffix: (_0x5b77ec) =>
        "\x22" +
        _0x5b77ec +
        "\x22#,##0.00_);[Red]-\x22" +
        _0x5b77ec +
        '"#,##0.00',
      color: "red",
    },
  ],
  Gn = "PivotMultipleValueId";
function Kn(_0x115881, _0x4644e5) {
  let _0xa367f7 = _0x3f3e5b(_0x4644e5, _0x115881);
  return _0x115881.includes("{0}")
    ? _0x115881.replace("{0}", _0xa367f7)
    : "" + _0x115881 + _0xa367f7;
}
const qn = (_0x553b15) => {
  switch (_0x553b15) {
    case "filter":
      return _0x487c30.Filter;
    case "row":
      return _0x487c30.Row;
    case "column":
      return _0x487c30.Column;
    case "value":
      return _0x487c30.Value;
    default:
      return _0x487c30.Row;
  }
};
function Jn(_0x9ebee2, _0x3a0ced) {
  switch (_0x3a0ced.rangeType || _0x1c329e.NORMAL) {
    case _0x1c329e.NORMAL:
      return {
        startRow: _0x3a0ced.startRow,
        startColumn: _0x3a0ced.startColumn,
        endRow: _0x3a0ced.endRow,
        endColumn: _0x3a0ced.endColumn,
      };
    case _0x1c329e.ROW:
      return {
        startRow: _0x3a0ced.startRow,
        startColumn: 0,
        endRow: _0x3a0ced.endRow,
        endColumn: _0x9ebee2.getColumnCount() - 1,
      };
    case _0x1c329e.COLUMN:
      return {
        startRow: 0,
        startColumn: _0x3a0ced.startColumn,
        endRow: _0x9ebee2.getRowCount() - 1,
        endColumn: _0x3a0ced.endColumn,
      };
    case _0x1c329e.ALL:
      return {
        startRow: 0,
        startColumn: 0,
        endRow: _0x9ebee2.getRowCount() - 1,
        endColumn: _0x9ebee2.getColumnCount() - 1,
      };
  }
}
function Yn(_0x4e1df5, _0x31c8a9) {
  if (!_0x31c8a9 || !_0x4e1df5 || _0x31c8a9.endRow - _0x31c8a9.startRow <= 0)
    return 1;
  let {
      startRow: _0x122e78,
      startColumn: _0x5998d3,
      endRow: _0x2e3cf0,
      endColumn: _0x30fa31,
    } = Jn(_0x4e1df5, _0x31c8a9),
    _0x4cab65 = _0x4e1df5.getCellMatrix(),
    _0x264d1d = false;
  for (let _0x12c7bc = _0x122e78; _0x12c7bc <= _0x2e3cf0; _0x12c7bc++) {
    for (let _0x38019b = _0x5998d3; _0x38019b <= _0x30fa31; _0x38019b++)
      if (_0x4cab65.getValue(_0x12c7bc, _0x38019b) != null) {
        _0x264d1d = true;
        break;
      }
    if (_0x264d1d) break;
  }
  return _0x264d1d ? 2 : 0;
}
async function Xn(_0x5ecfb0, _0x34ab2c, _0x104315) {
  let {
      commandService: _0x236765,
      pivotTableInfo: _0x4d4088,
      pivotTableId: _0x156c8f,
      unitId: _0x565e8b,
      subUnitId: _0x538974,
    } = _0x5ecfb0,
    _0x5a822b = [],
    {
      rowFields: _0x234f0a,
      columnFields: _0xcb8578,
      filterFields: _0x56615c,
      valueFields: _0x206e5b,
    } = _0x4d4088,
    _0xc4c61c = [..._0x234f0a, ..._0xcb8578, ..._0x56615c, ..._0x206e5b];
  (_0x34ab2c === "PivotMultipleValueId" &&
    _0x206e5b.forEach((_0xeece8d) => {
      _0x5a822b.push(_0xeece8d.tableFieldId);
    }),
    _0x104315 === "source" &&
      _0xc4c61c.forEach((_0x597055) => {
        _0x597055.dataFieldId === _0x34ab2c &&
          _0x5a822b.push(_0x597055.tableFieldId);
      }),
    _0x104315 !== "source" &&
      _0xc4c61c.find((_0x58ee85) => _0x58ee85.tableFieldId === _0x34ab2c) &&
      _0x5a822b.push(_0x34ab2c),
    await _0x236765.executeCommand(_0x40504d.id, {
      pivotTableId: _0x156c8f,
      fieldIds: _0x5a822b,
      unitId: _0x565e8b,
      subUnitId: _0x538974,
    }));
}
async function Zn(_0x54c9b9, _0x1068cf, _0x10dcc2, _0xa0b48b, _0x167800) {
  let _0x4f47c0 = {
    unitId: _0xa0b48b,
    subUnitId: _0x167800,
    token: _0x1068cf,
    dataRangeInfo: _0x10dcc2,
  };
  await _0x54c9b9.executeCommand(_0x94240e.id, _0x4f47c0);
}
const Qn = (_0x22eef5, _0x2b36c4) => {
  let {
      rowFields: _0x2424f4,
      columnFields: _0x450e74,
      filterFields: _0x19ed85,
    } = _0x22eef5,
    _0x36dc77 = [..._0x2424f4, ..._0x450e74, ..._0x19ed85],
    _0x5beee8 = [];
  return (
    _0x36dc77.forEach((_0x580faa) => {
      _0x580faa.dataFieldId === _0x2b36c4 &&
        _0x5beee8.push(_0x580faa.tableFieldId);
    }),
    _0x5beee8
  );
};
async function $n(_0x9407dc, _0x40bebb, _0x2989c2, _0x332c35, _0x2c563a) {
  if (_0x2989c2 === "source" && _0x332c35 === "source") return;
  let _0x53bfac = _0x40bebb === Gn,
    {
      commandService: _0x1248a2,
      pivotTableInfo: _0x31f010,
      pivotTableId: _0x53e61c,
      unitId: _0x461c08,
      subUnitId: _0x3bc562,
    } = _0x9407dc;
  if (_0x2989c2 === "source" && _0x332c35 !== "source") {
    let { sourceList: _0x46ee57 } = _0x31f010,
      _0x5e4ad8 = _0x46ee57.find((_0x22e0a0) => _0x22e0a0.id === _0x40bebb);
    if (_0x5e4ad8) {
      let _0xcea98a = Qn(_0x31f010, _0x40bebb);
      if (_0x332c35 !== "value" && _0xcea98a.length > 0) {
        let _0x385053 = _0xcea98a[0];
        await _0x1248a2.executeCommand(_0x415706.id, {
          pivotTableId: _0x53e61c,
          fieldId: _0x385053,
          area: qn(_0x332c35),
          index: _0x2c563a,
          unitId: _0x461c08,
          subUnitId: _0x3bc562,
        });
      } else
        await _0x1248a2.executeCommand(_0x5007d3.id, {
          pivotTableId: _0x53e61c,
          dataFieldId: _0x5e4ad8.dataFieldId,
          fieldArea: qn(_0x332c35),
          index: _0x2c563a,
          unitId: _0x461c08,
          subUnitId: _0x3bc562,
        });
    }
  }
  if (_0x2989c2 !== "source" && _0x332c35 === "source") {
    let {
        rowFields: _0x191ede,
        columnFields: _0x539e19,
        filterFields: _0x241d03,
        valueFields: _0x3d5fc1,
      } = _0x31f010,
      _0x50f802 = [..._0x191ede, ..._0x539e19, ..._0x241d03, ..._0x3d5fc1],
      _0x4be507 = [];
    (_0x53bfac
      ? _0x3d5fc1.forEach((_0x1d52b9) => {
          _0x4be507.push(_0x1d52b9.tableFieldId);
        })
      : _0x50f802.find((_0x517802) => _0x517802.tableFieldId === _0x40bebb) &&
        _0x4be507.push(_0x40bebb),
      await er(_0x9407dc, _0x4be507));
    return;
  }
  _0x2989c2 !== "source" &&
    _0x332c35 !== "source" &&
    (await nr(_0x9407dc, _0x40bebb, _0x2989c2, _0x332c35, _0x2c563a));
}
async function er(_0x553e66, _0x579fab) {
  let {
    commandService: _0x4c672b,
    pivotTableId: _0x2b55a7,
    unitId: _0x2535b7,
    subUnitId: _0x459057,
  } = _0x553e66;
  await _0x4c672b.executeCommand(_0x40504d.id, {
    pivotTableId: _0x2b55a7,
    fieldIds: _0x579fab,
    unitId: _0x2535b7,
    subUnitId: _0x459057,
  });
}
async function tr(_0x244431, _0x584a19, _0x55d24b) {
  let {
    commandService: _0x4ca89d,
    pivotTableId: _0x531ee6,
    unitId: _0x4cfb7b,
    subUnitId: _0x422ca6,
  } = _0x244431;
  await _0x4ca89d.executeCommand(_0x5bfae0.id, {
    pivotTableId: _0x531ee6,
    position: _0x584a19,
    index: _0x55d24b,
    unitId: _0x4cfb7b,
    subUnitId: _0x422ca6,
  });
}
async function nr(_0x2815f4, _0x2ee134, _0x4513ad, _0x1c20bb, _0x4a1a41) {
  let _0x36a45e = _0x2ee134 === Gn,
    {
      commandService: _0x154100,
      pivotTableInfo: _0x14ce69,
      pivotTableId: _0x2255dd,
      unitId: _0x3dcfe0,
      subUnitId: _0x2aa68e,
    } = _0x2815f4;
  if (_0x36a45e) {
    let _0x5af5a9 = qn(_0x1c20bb);
    (_0x5af5a9 === _0x487c30.Row || _0x5af5a9 === _0x487c30.Column) &&
      (await _0x154100.executeCommand(_0x5bfae0.id, {
        pivotTableId: _0x2255dd,
        position:
          _0x5af5a9 === _0x487c30.Row ? _0x4b4afe.Row : _0x4b4afe.Column,
        index: _0x4a1a41,
        unitId: _0x3dcfe0,
        subUnitId: _0x2aa68e,
      }));
    return;
  }
  let {
      rowFields: _0xcc6817,
      columnFields: _0x52ff19,
      filterFields: _0x3dae8f,
      valueFields: _0x5819f9,
    } = _0x14ce69,
    _0x5638b6 = [..._0xcc6817, ..._0x52ff19, ..._0x3dae8f, ..._0x5819f9].find(
      (_0x50c7e0) => _0x50c7e0.tableFieldId === _0x2ee134,
    );
  if (_0x5638b6) {
    let _0x489279 = [..._0xcc6817, ..._0x52ff19, ..._0x3dae8f];
    if (
      _0x4513ad === "value" &&
      _0x1c20bb !== "value" &&
      _0x489279.find(
        (_0x5775d5) => _0x5775d5.dataFieldId === _0x5638b6.dataFieldId,
      )
    ) {
      await er(_0x2815f4, [_0x2ee134]);
      return;
    }
    await _0x154100.executeCommand(_0x415706.id, {
      pivotTableId: _0x2255dd,
      fieldId: _0x2ee134,
      area: qn(_0x1c20bb),
      index: _0x4a1a41,
      unitId: _0x3dcfe0,
      subUnitId: _0x2aa68e,
    });
  }
}
function rr(_0x2a3437, _0x2ed985, _0x5912f2, _0x57c19c, _0x5ce450) {
  _0x2a3437.executeCommand(Bn.id, {
    row: -1,
    col: -1,
    unitId: _0x2ed985,
    subUnitId: _0x5912f2,
    tableFieldId: _0x5ce450,
    pivotTableId: _0x57c19c,
  });
}
function ir(_0x5aa871, _0x1ab07c, _0xfa9e39, _0x451ff6, _0x33e9eb, _0x403bbd) {
  let {
      sourceList: _0x56b60a,
      rowFields: _0x3542d1,
      columnFields: _0x3c5b80,
      valueFields: _0x1c8c36,
      filterFields: _0x34cf51,
    } = _0x403bbd,
    _0x4646df = [..._0x3542d1, ..._0x3c5b80, ..._0x1c8c36, ..._0x34cf51].find(
      (_0x5f110c) => _0x5f110c.tableFieldId === _0xfa9e39,
    ),
    _0x204184 = _0x56b60a.find(
      (_0xfe0d7c) =>
        _0xfe0d7c.id ===
        (_0x4646df == null ? undefined : _0x4646df.dataFieldId),
    );
  if (_0x4646df && _0x204184) {
    let _0x90b37b = {
      tableFieldId: _0xfa9e39,
      pivotTableId: _0x1ab07c,
      unitId: _0x451ff6,
      subUnitId: _0x33e9eb,
      tableFieldInfo: _0x4646df,
      dataFieldInfo: _0x204184,
    };
    _0x5aa871.executeCommand(Vn.id, _0x90b37b);
  }
}
const ar = [
    { type: _0x18daee.average, textKey: "sheets-pivot-ui.subtotal.average" },
    { type: _0x18daee.count, textKey: "sheets-pivot-ui.subtotal.count" },
    {
      type: _0x18daee.countNums,
      textKey: "sheets-pivot-ui.subtotal.countNums",
    },
    { type: _0x18daee.max, textKey: "sheets-pivot-ui.subtotal.max" },
    { type: _0x18daee.min, textKey: "sheets-pivot-ui.subtotal.min" },
    { type: _0x18daee.product, textKey: "sheets-pivot-ui.subtotal.product" },
    { type: _0x18daee.stdDev, textKey: "sheets-pivot-ui.subtotal.stdDev" },
    { type: _0x18daee.stdDevp, textKey: "sheets-pivot-ui.subtotal.stdDevp" },
    { type: _0x18daee.sum, textKey: "sheets-pivot-ui.subtotal.sum" },
    { type: _0x18daee.var, textKey: "sheets-pivot-ui.subtotal.var" },
    { type: _0x18daee.varp, textKey: "sheets-pivot-ui.subtotal.varp" },
  ],
  or = (_0x754519, _0x3aa382 = 0) =>
    _0x754519
      ? (_0x4d00e6.getFormatInfo(_0x754519).maxDecimals ?? _0x3aa382)
      : _0x3aa382,
  sr = (_0x5473aa) =>
    Array(Math.min(Math.max(0, Number(_0x5473aa)), 30))
      .fill(0)
      .join(""),
  cr = (_0xa67af4, _0x500399) =>
    _0xa67af4
      .split(";")
      .map((_0x1e806c) =>
        /\.0?/["test"](_0x1e806c)
          ? _0x1e806c.replace(
              /\.0*/g,
              "" + (_0x500399 > 0 ? "." : "") + sr(Number(_0x500399 || 0)),
            )
          : /0[^0]?/["test"](_0x1e806c)
            ? _0x1e806c.replace(
                /0[^0]+|0$/,
                "0" + (_0x500399 > 0 ? "." : "") + sr(Number(_0x500399 || 0)),
              )
            : _0x1e806c,
      )
      .join(";"),
  lr = (_0x2eb61b) =>
    _0x537c61.find((_0x380f89) => _0x2eb61b.includes(_0x380f89)),
  ur = (_0x5e0272) => !_0x5e0272,
  dr = (_0x274cc6) => !!lr(_0x274cc6) && _0x274cc6.startsWith("_("),
  fr = (_0x1084bc) => !!lr(_0x1084bc) && !_0x1084bc.startsWith("_("),
  pr = () =>
    Hn.map((_0x57c852) => ({
      label: _0x57c852.label,
      value: _0x57c852.suffix,
    })),
  mr = (_0x41ee85) => {
    let _0x423239 = _0x4d00e6.getFormatInfo(_0x41ee85);
    return (
      pr()
        .map((_0x11bb2b) => _0x11bb2b.value)
        .includes(_0x41ee85) ||
      ["date", "datetime", "time"].includes(_0x423239.type)
    );
  },
  hr = () =>
    Un.map((_0x46a04f) => ({
      label: _0x46a04f.label,
      value: _0x46a04f.suffix,
      color: _0x46a04f.color,
    })),
  gr = (_0x146c92) =>
    hr().some((_0x3700cd) => _0x14fe41(_0x3700cd.value, _0x146c92)),
  _r = (_0x4352ca, _0xd73eb) => {
    switch (_0xd73eb) {
      case _0x487c30.Row:
        return _0x4352ca.rowFields["length"];
      case _0x487c30.Column:
        return _0x4352ca.columnFields["length"];
      case _0x487c30.Filter:
        return _0x4352ca.filterFields["length"];
      case _0x487c30.Value:
        return _0x4352ca.valueFields["length"];
      default:
        return 0;
    }
  },
  vr = (_0xf100bd, _0x53cc04, _0xe28eda) => {
    for (let _0x13ebba of [
      "sheets-pivot-ui.averageName",
      "sheets-pivot-ui.countName",
      "sheets-pivot-ui.countNumsName",
      "sheets-pivot-ui.maxName",
      "sheets-pivot-ui.minName",
      "sheets-pivot-ui.productName",
      "sheets-pivot-ui.stdDevName",
      "sheets-pivot-ui.stdDevpName",
      "sheets-pivot-ui.sumName",
      "sheets-pivot-ui.varName",
      "sheets-pivot-ui.varpName",
    ]) {
      let _0x3520a2 = _0xe28eda[_0x13ebba];
      if (
        _0x3520a2 + _0x3f3e5b(_0xf100bd, _0x3520a2) === _0x53cc04 ||
        _0x3520a2 + _0xf100bd === _0x53cc04
      )
        return true;
    }
    return false;
  },
  yr = (_0x1c7174, _0x3aec08, _0x57229d) => {
    let _0x53d039 = "";
    switch (_0x57229d) {
      case _0x18daee.average:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.averageName"];
        break;
      case _0x18daee.count:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.countName"];
        break;
      case _0x18daee.countNums:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.countNumsName"];
        break;
      case _0x18daee.max:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.maxName"];
        break;
      case _0x18daee.min:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.minName"];
        break;
      case _0x18daee.product:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.productName"];
        break;
      case _0x18daee.stdDev:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.stdDevName"];
        break;
      case _0x18daee.stdDevp:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.stdDevpName"];
        break;
      case _0x18daee.sum:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.sumName"];
        break;
      case _0x18daee.var:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.varName"];
        break;
      case _0x18daee.varp:
        _0x53d039 = _0x3aec08["sheets-pivot-ui.varpName"];
        break;
      default:
        return _0x1c7174;
    }
    return _0x53d039 + _0x3f3e5b(_0x1c7174, _0x53d039);
  };
function br(_0x56e51e, _0x52cf63) {
  if (!_0x56e51e) return "NotFilter";
  if (_0x79d356(_0x56e51e)) {
    var _0x25ff4e;
    return _0x56e51e.isAll ||
      ((_0x25ff4e = _0x52cf63.items) == null ? undefined : _0x25ff4e.length) ===
        _0x56e51e.list["length"]
      ? "NotFilter"
      : "HasFilter";
  }
  return "NotFilter";
}
const xr = (_0x37a995) => {
    let [_0x436bc0, _0x45ac38] = _0x4b7ac9(false),
      _0x40c8f1 = _0x473eb2(zn);
    return (
      _0x41acdd(() => {
        _0x40c8f1.setIsRangeSelector2Focus(_0x436bc0);
      }, [_0x436bc0, _0x40c8f1]),
      _0x211556(_0x16cbba, {
        ..._0x37a995,
        onFocusChange: (_0x3c0d6f) => {
          var _0x2bc377;
          ((_0x2bc377 = _0x37a995.onFocusChange) == null ||
            _0x2bc377.call(_0x37a995, _0x3c0d6f),
            _0x45ac38(_0x3c0d6f));
        },
      })
    );
  },
  Sr = (_0x88c9bd, _0x19df2e, _0x2f071c, _0x2cb31f, _0xcf28d3, _0x3eda87) =>
    _0x211556(xr, {
      unitId: _0x88c9bd,
      subUnitId: _0x19df2e,
      initialValue: _0x2cb31f,
      onChange: (_0x4b888c, _0x154d2d) => _0x2f071c(_0x154d2d),
      maxRangeCount: 1,
      supportAcrossSheet: true,
      keepSheetReference: true,
    }),
  Cr = (_0x349454, _0x2336a4) => {
    switch (_0x349454) {
      case 1:
        return _0x2336a4.t("sheets-pivot-ui.msg.invalidSize");
      case 0:
        return _0x2336a4.t("sheets-pivot-ui.msg.emptySourceRange");
      default:
        return "";
    }
  };
function wr(_0x48782f) {
  let {
      unitId: _0x34d77a,
      sourceRange: _0x25578a,
      positionRange: _0xd9d38d,
      sourceSheetName: _0x2510c3,
      positionSheetName: _0xc1f9ba,
      onConfirm: _0x44947a,
      onCancel: _0x166da1,
    } = _0x48782f,
    _0x35b317 = _0x473eb2(_0x21b801),
    _0x38e8dd = _0x473eb2(_0x4a41b2),
    _0x4ef2c3 = _0x35b317.getDirection(),
    _0xe024ef = _0x38e8dd.getUnit(_0x34d77a),
    _0x366248 = _0x3f1f87(
      () => _0xe024ef.getActiveSheet().getSheetId(),
      [_0xe024ef],
    ),
    [_0x762084, _0x4acbae] = _0x4b7ac9(_0x25578a),
    [_0x3c81e9, _0x14b987] = _0x4b7ac9(_0xd9d38d),
    [_0x177868, _0x34f31a] = _0x4b7ac9(_0x2510c3),
    [_0x3377ad, _0x41acb9] = _0x4b7ac9(_0xc1f9ba),
    _0x5788c9 = _0x41a68e(undefined),
    [_0x407734, _0x3ce319] = _0x4b7ac9(),
    [_0x4ec56a, _0x562501] = _0x4b7ac9(_0x4e516a.New),
    [_0x5759a7, _0x4e34d2] = _0x4b7ac9(true),
    [_0x5d29c0, _0x36d268] = _0x4b7ac9(true),
    [_0x1cb622, _0x3efc47] = _0x4b7ac9(undefined);
  _0x41acdd(() => {
    let _0x3dc291 = Yn(_0xe024ef.getSheetBySheetName(_0x177868), _0x762084);
    (_0x36d268(_0x3dc291 === 2), _0x3efc47(Cr(_0x3dc291, _0x35b317)));
  }, [_0x762084, _0x177868, _0xe024ef, _0x35b317]);
  let _0x1d670e = (_0xf92842) => {
      if (_0x121c3b(_0x177868, _0x762084) === _0xf92842) return;
      let _0x8dc21d = _0xf92842
        .split(",")
        .filter((_0x144195) => !!_0x144195)
        .map(_0x124f11);
      if (Array.isArray(_0x8dc21d) && _0x8dc21d.length > 0) {
        let { range: _0x16ef5f, sheetName: _0x514596 } = _0x8dc21d[0];
        (_0x4acbae(_0x16ef5f), _0x34f31a(_0x514596));
      }
      _0x8dc21d[0] ||
        _0x3efc47(_0x35b317.t("sheets-pivot-ui.msg.emptySourceRange"));
    },
    _0x483d83 = Sr(
      _0x34d77a,
      _0x366248,
      (_0x1ae62c) => {
        if (_0x3c81e9 && _0x121c3b(_0x3377ad, _0x3c81e9) === _0x1ae62c) return;
        let _0x4839bc = _0x1ae62c
          .split(",")
          .filter((_0x4ba7e9) => !!_0x4ba7e9)
          .map(_0x124f11);
        if (_0x4839bc.length === 0) {
          _0x14b987(null);
          return;
        }
        let _0x1751e8 = _0x4839bc[0];
        (_0x14b987(_0x1751e8.range),
          _0x41acb9(_0x1751e8.sheetName || _0x2510c3),
          _0x1751e8.sheetName === _0x2510c3 &&
          _0x54a654.intersects(_0x1751e8.range, _0x762084)
            ? _0x4e34d2(false)
            : _0x4e34d2(true));
      },
      _0x3c81e9 ? _0x121c3b(_0x3377ad, _0x3c81e9) : "",
      false,
      _0x407734,
    ),
    _0x2ae3e6 = () =>
      !!(
        _0x762084 &&
        _0x3c81e9 &&
        _0x177868 &&
        _0x3377ad &&
        _0x4ec56a === _0x4e516a.Existing &&
        _0x5759a7 &&
        _0x5d29c0
      ) ||
      !!(_0x762084 && _0x177868 && _0x4ec56a === _0x4e516a.New && _0x5d29c0);
  return (
    _0x41acdd(() => {
      _0x3ce319(_0x5788c9.current);
    }, []),
    _0x44caca("div", {
      ref: _0x5788c9,
      dir: _0x4ef2c3,
      children: [
        _0x211556("div", {
          className: "univer-mb-2 univer-h-5 univer-text-sm univer-font-medium",
          children: _0x35b317.t("sheets-pivot-ui.dialog.source.sourceData"),
        }),
        Sr(
          _0x34d77a,
          _0x366248,
          _0x1d670e,
          _0x121c3b(_0x177868, _0x762084),
          true,
          _0x407734,
        ),
        _0x1cb622 &&
          _0x211556("div", {
            className:
              "univer-mt-2\x20univer-h-5\x20univer-text-xs\x20univer-text-red-400",
            children: _0x1cb622,
          }),
        _0x211556("div", {
          className:
            "univer-mb-2 univer-mt-5 univer-h-5 univer-text-sm univer-font-medium",
          children: _0x35b317.t("sheets-pivot-ui.dialog.source.position"),
        }),
        _0x44caca(_0x58121b, {
          value: _0x4ec56a,
          onChange: (_0x24f61f) => _0x562501(_0x24f61f),
          className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
          children: [
            _0x211556(_0x3e0c7a, {
              value: _0x4e516a.New,
              children: _0x35b317.t("sheets-pivot-ui.dialog.source.newSheet"),
            }),
            _0x211556(_0x3e0c7a, {
              value: _0x4e516a.Existing,
              children: _0x35b317.t(
                "sheets-pivot-ui.dialog.source.existingSheet",
              ),
            }),
          ],
        }),
        _0x4ec56a === _0x4e516a.Existing &&
          _0x44caca(_0x947289, {
            children: [
              _0x483d83,
              !_0x5759a7 &&
                _0x211556("span", {
                  className: "univer-h-5 univer-text-sm univer-text-red-400",
                  children: _0x35b317.t(
                    "sheets-pivot-ui.dialog.source.intersect",
                  ),
                }),
            ],
          }),
        _0x211556("footer", {
          className: "univer-mt-5",
          children: _0x44caca(_0x2be7cc, {
            className: "univer-flex\x20univer-justify-end\x20univer-gap-2",
            children: [
              _0x211556(_0x31eb36, {
                onClick: () => _0x166da1(),
                children: _0x35b317.t("sheets-pivot-ui.dialog.cancel"),
              }),
              _0x211556(_0x31eb36, {
                variant: "primary",
                onClick: () => {
                  _0x2ae3e6() &&
                    (_0x4ec56a === _0x4e516a.Existing
                      ? _0x44947a({
                          sourceRange: _0x762084,
                          sourceSheetName: _0x177868,
                          positionRange: _0x3c81e9,
                          positionSheetName: _0x3377ad,
                          positionType: _0x4ec56a,
                        })
                      : _0x44947a({
                          sourceRange: _0x762084,
                          sourceSheetName: _0x177868,
                          positionType: _0x4ec56a,
                        }));
                },
                children: _0x35b317.t("sheets-pivot-ui.dialog.ok"),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
wr.componentKey = "univer.sheet.pivot-table-range-selector";
const Tr = {
  type: _0x3b7b03.OPERATION,
  id: "sheet.operation.open-pivot-table-range-selector-panel",
  async handler(_0x4058b4) {
    var _0xea182b;
    let _0x22838e = _0x4058b4.get(_0x4a41b2),
      _0xf33a99 = _0x4058b4.get(_0x5c53fb),
      _0x36c1b9 = _0x25afea(_0x22838e),
      _0x934076 = _0x4058b4.get(_0x21b801);
    if (!_0x36c1b9) return false;
    let {
        unitId: _0x5535f0,
        subUnitId: _0x1274d2,
        worksheet: _0xf0d361,
        workbook: _0x43b06c,
      } = _0x36c1b9,
      _0x200ea4 = _0x4058b4.get(_0x28a598).getCurrentLastSelection(),
      _0x30a89f = (_0x200ea4 == null ? undefined : _0x200ea4.range) ?? {
        startRow: 0,
        endRow: 0,
        startColumn: 0,
        endColumn: 0,
        rangeType: _0x1c329e.NORMAL,
      },
      _0x3866f4 = await Er(
        _0x4058b4,
        _0x5535f0,
        _0x1274d2,
        _0x2070a7(_0x200ea4)
          ? _0x2ce08e(
              _0x30a89f,
              { up: true, left: true, right: true, down: true },
              _0xf0d361,
            )
          : _0x30a89f,
        _0xf0d361.getName(),
      );
    if (!_0x3866f4) return false;
    let _0x19edc5;
    if (_0x3866f4.positionType === _0x4e516a.New)
      _0x19edc5 = {
        row: 0,
        col: 0,
        unitId: _0x5535f0,
        subUnitId: _0x21431b(),
        sheetName: _0x43b06c.generateNewSheetName(
          "" + _0x934076.t("sheets-pivot-ui.sheet"),
        ),
      };
    else {
      var _0x1f30b8;
      _0x19edc5 = {
        row: _0x3866f4.positionRange["startRow"],
        col: _0x3866f4.positionRange["startColumn"],
        unitId: _0x5535f0,
        subUnitId:
          (_0x1f30b8 = _0x43b06c
            .getSheets()
            .find(
              (_0x498006) =>
                _0x498006.getName() === _0x3866f4.positionSheetName,
            )) == null
            ? undefined
            : _0x1f30b8.getSheetId(),
        sheetName: _0x3866f4.positionSheetName,
      };
    }
    return (
      _0xf33a99.executeCommand(_0x16838d.id, {
        pivotTableConfig: {
          targetCellInfo: _0x19edc5,
          sourceRangeInfo: {
            range: _0x3866f4.sourceRange,
            unitId: _0x5535f0,
            sheetName: _0x3866f4.sourceSheetName,
            subUnitId:
              (_0xea182b = _0x43b06c
                .getSheets()
                .find(
                  (_0x174e91) =>
                    _0x174e91.getName() === _0x3866f4.sourceSheetName,
                )) == null
                ? undefined
                : _0xea182b.getSheetId(),
          },
        },
        positionType: _0x3866f4.positionType,
      }),
      true
    );
  },
};
async function Er(_0x1a8ab7, _0x14f1b0, _0x48f9b1, _0x3cf9fb, _0x12ebe4) {
  let _0x5dab77 = _0x1a8ab7.get(_0x42b513),
    _0x34a944 = _0x1a8ab7.get(_0x21b801);
  return new Promise((_0x17789e) => {
    let _0x3bc41e,
      _0x2d6e1e = {
        unitId: _0x14f1b0,
        subUnitId: _0x48f9b1,
        sourceRange: _0x3cf9fb,
        positionRange: null,
        sourceSheetName: _0x12ebe4,
        positionSheetName: _0x12ebe4,
        onConfirm: (_0x3fe3a7) => {
          (_0x17789e(_0x3fe3a7), _0x3bc41e == null || _0x3bc41e.dispose());
        },
        onCancel: () => {
          (_0x17789e(null), _0x3bc41e == null || _0x3bc41e.dispose());
        },
      };
    _0x3bc41e = _0x5dab77.open({
      id: wr.componentKey,
      title: {
        title: _0x34a944.t("sheets-pivot-ui.dialog.source.insertPivotTable"),
      },
      draggable: true,
      mask: false,
      maskClosable: false,
      children: { label: { name: wr.componentKey, props: _0x2d6e1e } },
      width: 400,
      onClose: () => {
        _0x3bc41e.dispose();
      },
    });
  });
}
const Dr = {
  type: _0x3b7b03.OPERATION,
  id: "sheet.operation.set-pivot-date-group",
  async handler(_0x3cf0aa, _0x8aa630) {
    if (!_0x8aa630) return false;
    let _0x493bab = Or(_0x3cf0aa);
    return _0x493bab
      ? _0x3cf0aa
          .get(_0x5c53fb)
          .executeCommand(_0x59f3ab.id, {
            unitId: _0x493bab.unitId,
            subUnitId: _0x493bab.subUnitId,
            pivotTableId: _0x493bab.pivotTableId,
            tableFieldId: _0x493bab.tableFieldId,
            dateType: _0x8aa630.dateType,
          })
      : false;
  },
};
function Or(_0x529b43) {
  let _0x3daad9 = _0x25afea(_0x529b43.get(_0x4a41b2));
  if (!_0x3daad9) return;
  let _0x5c9a48 = _0x529b43.get(_0x28a598).getCurrentLastSelection(),
    _0x2fef6d = _0x5c9a48 == null ? undefined : _0x5c9a48.primary;
  if (!_0x2fef6d) return;
  let { unitId: _0x8925e4, subUnitId: _0x344954 } = _0x3daad9,
    _0x5e294a = _0x2fef6d.startRow,
    _0x539097 = _0x2fef6d.startColumn,
    _0x3cec89 = _0x529b43
      .get(_0x1c6c95)
      .getPivotTableIdByCell(_0x8925e4, _0x344954, _0x5e294a, _0x539097);
  if (!_0x3cec89) return;
  let _0x38abe5 = kr(
    _0x529b43,
    _0x8925e4,
    _0x344954,
    _0x3cec89,
    _0x5e294a,
    _0x539097,
  );
  if (!_0x38abe5) return;
  let _0x28aa40 = _0x529b43.get(_0x52d40e),
    _0x55deae = _0x28aa40.getPivotTableConfig(_0x8925e4, _0x344954, _0x3cec89),
    _0x41a005 = _0x28aa40.getCollection(_0x8925e4, _0x3cec89),
    _0x6f83cb = _0x16df51(
      _0x55deae == null ? undefined : _0x55deae.fieldsConfig,
      _0x41a005,
      _0x38abe5,
    );
  if (_0x6f83cb)
    return {
      unitId: _0x8925e4,
      subUnitId: _0x344954,
      pivotTableId: _0x3cec89,
      tableFieldId: _0x38abe5,
      row: _0x5e294a,
      col: _0x539097,
      dateGroupContext: _0x6f83cb,
    };
}
function kr(_0x58e25c, _0x1938ed, _0x546c69, _0xca2270, _0x35a98c, _0x3136cd) {
  let _0x472778 = _0x58e25c
    .get(_0x1c6c95)
    .getPivotItemRenderInfoCache(_0x1938ed, _0x546c69, _0xca2270);
  if (!_0x472778) return;
  let _0x34727f = _0x2a191e(
    _0x35a98c,
    _0x3136cd,
    _0x58e25c
      .get(_0x1c6c95)
      .getPivotTableCellData(_0x1938ed, _0x546c69, _0x35a98c, _0x3136cd),
    _0x472778,
  );
  return _0x34727f == null ? undefined : _0x34727f.tableFieldId;
}
const Ar = [
    {
      type: _0x36dc83.normal,
      localeKey: "sheets-pivot-ui.showValuesAs.normal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.percentOfGrandTotal,
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfGrandTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.percentOfRowTotal,
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfRowTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.percentOfColumnTotal,
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfColumnTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.percentOfParentRowTotal,
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfParentRowTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.percentOfParentColumnTotal,
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfParentColumnTotal",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.index,
      localeKey: "sheets-pivot-ui.showValuesAs.index",
      requiresParameters: false,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.percentOfParent,
      localeKey: "sheets-pivot-ui.showValuesAs.percentOfParent",
      requiresParameters: true,
      baseItemMode: "none",
      parentFieldOnly: true,
    },
    {
      type: _0x36dc83.percentOf,
      localeKey: "sheets-pivot-ui.showValuesAs.percentOf",
      requiresParameters: true,
      baseItemMode: "item",
    },
    {
      type: _0x36dc83.differenceFrom,
      localeKey: "sheets-pivot-ui.showValuesAs.differenceFrom",
      requiresParameters: true,
      baseItemMode: "item-or-relative",
    },
    {
      type: _0x36dc83.percentDifferenceFrom,
      localeKey: "sheets-pivot-ui.showValuesAs.percentDifferenceFrom",
      requiresParameters: true,
      baseItemMode: "item-or-relative",
    },
    {
      type: _0x36dc83.runningTotal,
      localeKey: "sheets-pivot-ui.showValuesAs.runningTotal",
      requiresParameters: true,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.percentRunningTotal,
      localeKey: "sheets-pivot-ui.showValuesAs.percentRunningTotal",
      requiresParameters: true,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.rankAscending,
      localeKey: "sheets-pivot-ui.showValuesAs.rankAscending",
      requiresParameters: true,
      baseItemMode: "none",
    },
    {
      type: _0x36dc83.rankDescending,
      localeKey: "sheets-pivot-ui.showValuesAs.rankDescending",
      requiresParameters: true,
      baseItemMode: "none",
    },
  ],
  jr = {
    type: _0x3b7b03.OPERATION,
    id: "sheet.operation.set-pivot-show-data-as",
    async handler(_0xce7566, _0x486529) {
      let _0x3d7af3 =
        _0x486529 && Ar.find((_0x1b8279) => _0x1b8279.type === _0x486529.type);
      if (!_0x3d7af3) return false;
      let _0x50ff98 = Nr(_0xce7566);
      if (!_0x50ff98) return false;
      if (!_0x3d7af3.requiresParameters)
        return _0xce7566
          .get(_0x5c53fb)
          .executeCommand(_0x44c3e1.id, {
            unitId: _0x50ff98.unitId,
            subUnitId: _0x50ff98.subUnitId,
            pivotTableId: _0x50ff98.pivotTableId,
            tableFieldId: _0x50ff98.tableFieldId,
            showDataAs: { type: _0x3d7af3.type, baseFieldId: "", baseItem: "" },
            tableFieldInfo: _0x50ff98.tableFieldInfo,
            dataFieldInfo: _0x50ff98.dataFieldInfo,
          });
      let _0x451455 = Pr(_0xce7566, _0x50ff98);
      if (!_0x451455) return false;
      let _0x2ab313 = Mr(_0x451455.config, _0x451455.collection, _0x3d7af3);
      if (_0x2ab313.length === 0) return false;
      let _0xc77810 = {};
      if (_0x3d7af3.baseItemMode !== "none") {
        try {
          _0xc77810 = await Fr(
            _0xce7566,
            _0x451455.config,
            _0x50ff98.pivotTableId,
            _0x2ab313,
          );
        } catch {
          return false;
        }
        if (
          !_0x2ab313.some(
            (_0x3202fd) =>
              _0xc77810[_0x3202fd] &&
              (_0x3d7af3.baseItemMode === "item-or-relative" ||
                _0xc77810[_0x3202fd].items["length"] > 0),
          )
        )
          return false;
      }
      let _0x50f150 = _0xce7566.get(_0x42b513),
        _0x33d58f = _0xce7566.get(_0x21b801),
        _0x5cff87 = null,
        _0x1c1bcf = false,
        _0x5b3a70 = false,
        _0x26463d = () => {
          _0x1c1bcf ||
            ((_0x1c1bcf = true),
            _0x5cff87 == null || _0x5cff87.dispose(),
            (_0x5cff87 = null));
        };
      try {
        _0x5cff87 = _0x50f150.open({
          id: "UNIVER_SHEET_PIVOT_SHOW_DATA_AS_DIALOG_ID",
          title: {
            title: _0x33d58f.t("sheets-pivot-ui.showValuesAs.dialogTitle"),
          },
          draggable: true,
          mask: true,
          maskClosable: false,
          width: 400,
          children: {
            label: {
              name: Mn,
              props: {
                unitId: _0x50ff98.unitId,
                subUnitId: _0x50ff98.subUnitId,
                pivotTableId: _0x50ff98.pivotTableId,
                tableFieldId: _0x50ff98.tableFieldId,
                type: _0x3d7af3.type,
                baseItems: _0xc77810,
                onCancel: _0x26463d,
                onConfirm: async (_0x4414fb) => {
                  if (!_0x5b3a70) {
                    _0x5b3a70 = true;
                    try {
                      let _0x4f17de = Pr(_0xce7566, _0x50ff98);
                      if (
                        !_0x4f17de ||
                        !Ir(
                          _0x4f17de.config,
                          _0x4f17de.collection,
                          _0x3d7af3,
                          _0x4414fb,
                        )
                      )
                        return;
                      if (
                        _0x3d7af3.baseItemMode !== "none" &&
                        _0x4414fb.baseItemType === undefined
                      ) {
                        var _0x5a7eeb;
                        if (!(
                          (_0x5a7eeb = (
                            await Fr(
                              _0xce7566,
                              _0x4f17de.config,
                              _0x4f17de.context["pivotTableId"],
                              [_0x4414fb.baseFieldId],
                            )
                          )[_0x4414fb.baseFieldId]) != null &&
                          _0x5a7eeb.items["includes"](_0x4414fb.baseItem)
                        ))
                          return;
                      }
                      await _0xce7566
                        .get(_0x5c53fb)
                        .executeCommand(_0x44c3e1.id, {
                          unitId: _0x4f17de.context["unitId"],
                          subUnitId: _0x4f17de.context["subUnitId"],
                          pivotTableId: _0x4f17de.context["pivotTableId"],
                          tableFieldId: _0x4f17de.context["tableFieldId"],
                          showDataAs: _0x4414fb,
                          tableFieldInfo: _0x4f17de.context["tableFieldInfo"],
                          dataFieldInfo: _0x4f17de.context["dataFieldInfo"],
                        });
                    } catch {
                    } finally {
                      _0x26463d();
                    }
                  }
                },
              },
            },
          },
          onClose: _0x26463d,
        });
      } catch {
        return (_0x26463d(), false);
      }
      return true;
    },
  };
function Mr(_0x489a79, _0x1151d1, _0x233eec) {
  let {
    rowFields: _0x5a236d,
    columnFields: _0x46401f,
    dimension: _0x399d74,
  } = _0x489a79.fieldsConfig;
  return (
    _0x233eec.parentFieldOnly
      ? [..._0x5a236d.slice(0, -1), ..._0x46401f.slice(0, -1)]
      : [..._0x5a236d, ..._0x46401f]
  ).filter((_0x4acc91) => {
    let _0x133eb6 = _0x399d74[_0x4acc91];
    return !!(
      _0x133eb6 &&
      (_0x1151d1.fields[_0x133eb6.dataFieldId] ||
        _0x1151d1.customFields["find"](
          (_0x42b991) => _0x42b991.id === _0x133eb6.dataFieldId,
        ))
    );
  });
}
function Nr(_0x333834) {
  var _0xc779bd, _0x31bf32;
  let _0x309190 = _0x25afea(_0x333834.get(_0x4a41b2)),
    _0xc57c02 =
      (_0xc779bd = _0x333834.get(_0x28a598).getCurrentLastSelection()) == null
        ? undefined
        : _0xc779bd.primary;
  if (!_0x309190 || !_0xc57c02) return;
  let { unitId: _0x159bf4, subUnitId: _0x1fb139 } = _0x309190,
    _0x2d63b6 = _0xc57c02.startRow,
    _0x946ef5 = _0xc57c02.startColumn,
    _0x230c18 = _0x333834.get(_0x1c6c95),
    _0x53fd37 = _0x230c18.getPivotTableIdByCell(
      _0x159bf4,
      _0x1fb139,
      _0x2d63b6,
      _0x946ef5,
    );
  if (!_0x53fd37) return;
  let _0x2f9a7b = _0x333834
      .get(_0x52d40e)
      .getPivotTableConfig(_0x159bf4, _0x1fb139, _0x53fd37),
    _0x2c40a5 = _0x230c18.getPivotItemRenderInfoCache(
      _0x159bf4,
      _0x1fb139,
      _0x53fd37,
    ),
    _0x46180f = _0x230c18.getPivotTableCellData(
      _0x159bf4,
      _0x1fb139,
      _0x2d63b6,
      _0x946ef5,
    );
  if (!_0x2f9a7b || !_0x2c40a5) return;
  let _0x5d4482 = _0x2a191e(_0x2d63b6, _0x946ef5, _0x46180f, _0x2c40a5);
  if (!_0x5d4482) return;
  let _0x57306a = _0x3c8549(_0x5d4482, _0x2f9a7b.fieldsConfig["valueFields"]);
  if (_0x57306a)
    return (_0x31bf32 = Pr(_0x333834, {
      unitId: _0x159bf4,
      subUnitId: _0x1fb139,
      pivotTableId: _0x53fd37,
      tableFieldId: _0x57306a,
    })) == null
      ? undefined
      : _0x31bf32.context;
}
function Pr(_0x28b7dd, _0xcae9e) {
  let {
      unitId: _0x358617,
      subUnitId: _0x7e1105,
      pivotTableId: _0x1fabb6,
      tableFieldId: _0x40b635,
    } = _0xcae9e,
    _0x3e04c6 = _0x28b7dd.get(_0x52d40e),
    _0x291b27 = _0x3e04c6.getPivotTableConfig(_0x358617, _0x7e1105, _0x1fabb6),
    _0x4d22d3 = _0x3e04c6.getCollection(_0x358617, _0x1fabb6),
    _0x3292f1 =
      _0x291b27 == null
        ? undefined
        : _0x291b27.fieldsConfig["measure"][_0x40b635];
  if (
    !_0x291b27 ||
    !_0x4d22d3 ||
    !_0x3292f1 ||
    !_0x291b27.fieldsConfig["valueFields"].includes(_0x3292f1.id)
  )
    return;
  let _0x1a65f8 =
    _0x4d22d3.fields[_0x3292f1.dataFieldId] ??
    _0x4d22d3.customFields["find"](
      (_0x281aab) => _0x281aab.id === _0x3292f1.dataFieldId,
    );
  if (!_0x1a65f8) return;
  let _0x4ce118 = { ..._0x3292f1.showDataAs };
  return {
    config: _0x291b27,
    collection: _0x4d22d3,
    context: {
      unitId: _0x358617,
      subUnitId: _0x7e1105,
      pivotTableId: _0x1fabb6,
      tableFieldId: _0x3292f1.id,
      currentShowDataAs: _0x4ce118,
      tableFieldInfo: {
        tableFieldId: _0x3292f1.id,
        displayName: _0x3292f1.displayName,
        dataFieldId: _0x3292f1.dataFieldId,
        format: _0x3292f1.format,
        subTotalType: _0x3292f1.subtotal,
        showDataAs: { ..._0x4ce118 },
      },
      dataFieldInfo: {
        id: _0x1a65f8.id,
        dataFieldId: _0x1a65f8.id,
        name: _0x1a65f8.name,
        type: _0x1a65f8.fieldDataType,
        checked: true,
        pivotTableId: _0x1fabb6,
      },
    },
  };
}
async function Fr(_0x361918, _0x52d5f2, _0x396bd6, _0x4f2d0e) {
  let { unitId: _0x56568d, subUnitId: _0x5c2ad3 } = _0x52d5f2.targetCellInfo,
    _0x4920d9 = _0x52d5f2.targetCellInfo,
    _0x1af699 = _0x361918
      .get(_0x1c6c95)
      .getPivotItemRenderInfoCache(_0x56568d, _0x5c2ad3, _0x396bd6);
  if (!_0x1af699)
    throw Error("[sheets-pivot-ui]: Pivot render cache is unavailable");
  return (
    await Promise.all(
      _0x4f2d0e.map(async (_0x2ff28d) => {
        try {
          return [
            _0x2ff28d,
            (
              await _0x361918
                .get(_0x2a1a15)
                .getPivotDisplayConfig({
                  unitId: _0x56568d,
                  subUnitId: _0x5c2ad3,
                  pivotTableId: _0x396bd6,
                  params: {
                    type: _0x3ba488.Filter,
                    filter: {
                      row: _0x4920d9.row,
                      col: _0x4920d9.col,
                      tableFieldId: _0x2ff28d,
                      pivotItemRenderInfoCache: _0x1af699,
                    },
                  },
                })
            ).result["filter"],
          ];
        } catch {
          return [_0x2ff28d, undefined];
        }
      }),
    )
  ).reduce(
    (_0x561528, [_0xe8acd9, _0x146591]) => (
      _0x146591 &&
        (_0x561528[_0xe8acd9] = {
          items: _0x146591.items,
          itemTypes: _0x146591.itemTypes,
          format: _0x146591.format,
        }),
      _0x561528
    ),
    {},
  );
}
function Ir(_0x1fbe89, _0x2b5270, _0x54da0d, _0x36d3a7) {
  return _0x36d3a7.type !== _0x54da0d.type ||
    !Mr(_0x1fbe89, _0x2b5270, _0x54da0d).includes(_0x36d3a7.baseFieldId)
    ? false
    : _0x54da0d.baseItemMode === "none"
      ? _0x36d3a7.baseItem === "" && _0x36d3a7.baseItemType === undefined
      : _0x36d3a7.baseItemType === undefined
        ? _0x36d3a7.baseItem !== ""
        : _0x54da0d.baseItemMode === "item-or-relative" &&
          _0x36d3a7.baseItem === "" &&
          (_0x36d3a7.baseItemType === _0x1bfa7e.previous ||
            _0x36d3a7.baseItemType === _0x1bfa7e.next);
}
function Lr(_0x5c2442) {
  return {
    ..._0x5c2442,
    expected: Array.isArray(_0x5c2442.expected)
      ? _0x5c2442.expected["concat"]()
      : _0x5c2442.expected,
  };
}
function Rr(_0x35f590, _0x1f7d90) {
  let _0x2f6aed = _0x35f590
    .get(_0x52d40e)
    .getPivotTableConfig(
      _0x1f7d90.unitId,
      _0x1f7d90.subUnitId,
      _0x1f7d90.pivotTableId,
    );
  if (!(
    !_0x2f6aed ||
    !_0x2f6aed.fieldsConfig["dimension"][_0x1f7d90.targetFieldId] ||
    !(
      _0x2f6aed.fieldsConfig["rowFields"].includes(_0x1f7d90.targetFieldId) ||
      _0x2f6aed.fieldsConfig["columnFields"].includes(_0x1f7d90.targetFieldId)
    )
  ))
    return _0x2f6aed;
}
function zr(_0x5b1b4c) {
  var _0x28d7bc, _0x267732;
  let _0x1b26ef = _0x25afea(_0x5b1b4c.get(_0x4a41b2)),
    _0x40b72d =
      (_0x28d7bc = _0x5b1b4c.get(_0x28a598).getCurrentLastSelection()) == null
        ? undefined
        : _0x28d7bc.primary;
  if (!_0x1b26ef || !_0x40b72d) return;
  let { unitId: _0x15c3b5, subUnitId: _0x8fa80a } = _0x1b26ef,
    _0x1af901 = _0x40b72d.startRow,
    _0x48bf12 = _0x40b72d.startColumn,
    _0x10aa70 = _0x5b1b4c.get(_0x1c6c95),
    _0x982eeb = _0x10aa70.getPivotTableIdByCell(
      _0x15c3b5,
      _0x8fa80a,
      _0x1af901,
      _0x48bf12,
    );
  if (!_0x982eeb) return;
  let _0x5b6612 = _0x5b1b4c
      .get(_0x52d40e)
      .getPivotTableConfig(_0x15c3b5, _0x8fa80a, _0x982eeb),
    _0x1fdffa = _0x10aa70.getPivotItemRenderInfoCache(
      _0x15c3b5,
      _0x8fa80a,
      _0x982eeb,
    );
  if (!_0x5b6612 || !_0x1fdffa) return;
  let _0x5de8a7 = _0x2a191e(
      _0x1af901,
      _0x48bf12,
      _0x10aa70.getPivotTableCellData(
        _0x15c3b5,
        _0x8fa80a,
        _0x1af901,
        _0x48bf12,
      ),
      _0x1fdffa,
    ),
    _0x165170 = _0x5de8a7 && _0x155ca6(_0x5de8a7, _0x5b6612.fieldsConfig);
  if (!_0x165170) return;
  let _0x3f09cb = _0x5b6612.fieldsConfig["dimension"][_0x165170.targetFieldId],
    _0x5714d4 = _0x5b6612.fieldsConfig["valueFields"].flatMap((_0x5dfab6) => {
      let _0x21f3f9 = _0x5b6612.fieldsConfig["measure"][_0x5dfab6];
      return _0x21f3f9
        ? [{ id: _0x21f3f9.id, label: _0x21f3f9.displayName }]
        : [];
    });
  if (!_0x3f09cb || _0x5714d4.length === 0) return;
  let _0x4620a9 =
    (_0x267732 = _0x5b6612.fieldsConfig["valueFilter"]) == null ||
    (_0x267732 = _0x267732.find(
      (_0x434baf) => _0x434baf.fieldId === _0x165170.targetFieldId,
    )) == null
      ? undefined
      : _0x267732.filterInfo;
  return {
    unitId: _0x15c3b5,
    subUnitId: _0x8fa80a,
    pivotTableId: _0x982eeb,
    targetFieldId: _0x165170.targetFieldId,
    targetFieldName: _0x3f09cb.displayName,
    valueFields: _0x5714d4,
    defaultValueFieldId: _0x165170.defaultValueFieldId,
    ...(_0x4620a9 ? { currentFilter: Lr(_0x4620a9) } : {}),
  };
}
const Br = {
    type: _0x3b7b03.OPERATION,
    id: "sheet.operation.set-pivot-value-filter",
    async handler(_0x14df46) {
      let _0x39e6c1 = zr(_0x14df46);
      if (!_0x39e6c1) return false;
      let _0x32dc19 = _0x14df46.get(_0x42b513),
        _0x52d4e1 = _0x14df46.get(_0x21b801),
        _0x53d1b1 = null,
        _0x3d93fe = false,
        _0xa8ec0b = false,
        _0x43d2b8 = () => {
          _0x3d93fe ||
            ((_0x3d93fe = true),
            _0x53d1b1 == null || _0x53d1b1.dispose(),
            (_0x53d1b1 = null));
        },
        _0x33d33c = async (_0x15a97d) => {
          if (!_0xa8ec0b) {
            _0xa8ec0b = true;
            try {
              let _0x23ca50 = Rr(_0x14df46, _0x39e6c1);
              if (
                !_0x23ca50 ||
                (_0x15a97d &&
                  (!_0x23ca50.fieldsConfig["measure"][_0x15a97d.valueFieldId] ||
                    !_0x23ca50.fieldsConfig["valueFields"].includes(
                      _0x15a97d.valueFieldId,
                    ) ||
                    !_0x5f4c18(_0x15a97d.operator)))
              )
                return;
              await _0x14df46
                .get(_0x5c53fb)
                .executeCommand(_0x3739c8.id, {
                  unitId: _0x39e6c1.unitId,
                  subUnitId: _0x39e6c1.subUnitId,
                  pivotTableId: _0x39e6c1.pivotTableId,
                  fieldId: _0x39e6c1.targetFieldId,
                  valueFilterInfo: _0x15a97d
                    ? {
                        ..._0x15a97d,
                        type: _0x4e03be.ValueFilter,
                        expected: Array.isArray(_0x15a97d.expected)
                          ? _0x15a97d.expected["concat"]()
                          : _0x15a97d.expected,
                      }
                    : undefined,
                });
            } catch {
            } finally {
              _0x43d2b8();
            }
          }
        };
      try {
        _0x53d1b1 = _0x32dc19.open({
          id: "UNIVER_SHEET_PIVOT_VALUE_FILTER_DIALOG_ID",
          title: {
            title: _0x52d4e1.t("sheets-pivot-ui.valueFilter.dialogTitle"),
          },
          draggable: true,
          mask: true,
          maskClosable: false,
          width: 420,
          children: {
            label: {
              name: Nn,
              props: {
                targetFieldId: _0x39e6c1.targetFieldId,
                targetFieldName: _0x39e6c1.targetFieldName,
                valueFields: _0x39e6c1.valueFields,
                defaultValueFieldId: _0x39e6c1.defaultValueFieldId,
                currentFilter: _0x39e6c1.currentFilter,
                onConfirm: (_0x3dfa1f) => _0x33d33c(_0x3dfa1f),
                onClear: () => _0x33d33c(undefined),
                onCancel: _0x43d2b8,
              },
            },
          },
          onClose: _0x43d2b8,
        });
      } catch {
        return (_0x43d2b8(), false);
      }
      return true;
    },
  },
  Vr = "sheet.pivot.context-menu.date-group",
  Hr = "sheet.pivot.context-menu.show-data-as",
  Ur = "sheet.pivot.context-menu.value-filter",
  Wr = {
    year: "sheets-pivot-ui.dateGroup.year",
    "year-quarter": "sheets-pivot-ui.dateGroup.yearQuarter",
    quarter: "sheets-pivot-ui.dateGroup.quarter",
    "year-month": "sheets-pivot-ui.dateGroup.yearMonth",
    month: "sheets-pivot-ui.dateGroup.month",
    "month-date": "sheets-pivot-ui.dateGroup.monthDate",
    "year-month-date": "sheets-pivot-ui.dateGroup.yearMonthDate",
    date: "sheets-pivot-ui.dateGroup.date",
    hour: "sheets-pivot-ui.dateGroup.hour",
    minute: "sheets-pivot-ui.dateGroup.minute",
    "hour-minute": "sheets-pivot-ui.dateGroup.hourMinute",
  };
function Gr(_0x5b708e) {
  return {
    id: Tr.id,
    type: _0x46d5c6.BUTTON,
    icon: "PivotTableIcon",
    hidden$: _0x160f14(_0x5b708e, _0x33bcb3.UNIVER_SHEET),
    disabled$: _0x5358dd(
      _0x5b708e,
      _0x2aae2d(_0x5b708e, {
        workbookTypes: [_0x443e77],
        worksheetTypes: [_0x5d9f5f, _0x22c740],
        rangeTypes: [_0x2b4c89],
      }),
    ),
    tooltip: "sheets-pivot-ui.title",
    title: "sheets-pivot-ui.title",
  };
}
function Kr(_0x268108) {
  return {
    id: Vr,
    type: _0x46d5c6.SUBITEMS,
    title: "sheets-pivot-ui.dateGroup.title",
    hidden$: Yr(_0x268108),
  };
}
function qr(_0x21699b) {
  return (_0x462872) => ({
    id: Jr(_0x21699b),
    commandId: Dr.id,
    type: _0x46d5c6.BUTTON,
    title: Wr[_0x21699b],
    params: { dateType: _0x21699b },
    disabled$: Xr(_0x462872, _0x21699b),
    activated$: Zr(_0x462872, _0x21699b),
  });
}
function Jr(_0x325d91) {
  return "sheet.pivot.context-menu.date-group." + _0x325d91;
}
function Yr(_0x4aabff) {
  return Qr(_0x4aabff).pipe(_0x1236f6(() => !Or(_0x4aabff)));
}
function Xr(_0x53d212, _0x3c01bc) {
  return Qr(_0x53d212).pipe(
    _0x1236f6(() => {
      let _0x455697 = Or(_0x53d212);
      return !_0x455697 || _0x24f691(_0x455697.dateGroupContext, _0x3c01bc);
    }),
  );
}
function Zr(_0x1416a4, _0x19f76e) {
  return Qr(_0x1416a4).pipe(
    _0x1236f6(() => {
      let _0x22d435 = Or(_0x1416a4);
      return (
        (_0x22d435 == null
          ? undefined
          : _0x22d435.dateGroupContext["currentDateType"]) === _0x19f76e
      );
    }),
  );
}
function Qr(_0x5de526) {
  return _0x5de526.get(_0x28a598).selectionMoveEnd$["pipe"](_0x2839a7(null));
}
const $r = _0x5b7256.map((_0x3dd7d6) => ({
  dateType: _0x3dd7d6,
  id: Jr(_0x3dd7d6),
  menuItemFactory: qr(_0x3dd7d6),
}));
function ei(_0x19589e) {
  return {
    id: Hr,
    type: _0x46d5c6.SUBITEMS,
    title: "sheets-pivot-ui.showValuesAs.title",
    hidden$: ri(_0x19589e).pipe(_0x1236f6(() => !Nr(_0x19589e))),
  };
}
function ti(_0x555eca) {
  return (_0x3e2dfe) => ({
    id: ni(_0x555eca.type),
    commandId: jr.id,
    type: _0x46d5c6.BUTTON,
    title: _0x555eca.localeKey,
    params: { type: _0x555eca.type },
    activated$: ri(_0x3e2dfe).pipe(
      _0x1236f6(() => {
        let _0xfa569b = Nr(_0x3e2dfe);
        return !!(
          _0xfa569b &&
          (_0xfa569b.currentShowDataAs["type"] ?? _0x36dc83.normal) ===
            _0x555eca.type
        );
      }),
    ),
  });
}
function ni(_0x3273ff) {
  return "sheet.pivot.context-menu.show-data-as." + _0x3273ff;
}
function ri(_0x2d9ba3) {
  return _0x2d9ba3.get(_0x28a598).selectionMoveEnd$["pipe"](_0x2839a7(null));
}
const ii = Ar.map((_0x518d4d) => ({
  rule: _0x518d4d,
  id: ni(_0x518d4d.type),
  menuItemFactory: ti(_0x518d4d),
}));
function ai(_0x2628bd) {
  return {
    id: Ur,
    commandId: Br.id,
    type: _0x46d5c6.BUTTON,
    title: "sheets-pivot-ui.valueFilter.title",
    hidden$: _0x2628bd.get(_0x28a598).selectionMoveEnd$["pipe"](
      _0x2839a7(null),
      _0x1236f6(() => !zr(_0x2628bd)),
    ),
  };
}
const oi = $r.reduce(
    (_0x9cc85, _0x11b3d5, _0x25bd34) => (
      (_0x9cc85[_0x11b3d5.id] = {
        order: _0x25bd34 + 1,
        menuItemFactory: _0x11b3d5.menuItemFactory,
      }),
      _0x9cc85
    ),
    {},
  ),
  si = ii.reduce(
    (_0x4eec95, _0x30edb2, _0x4ee482) => (
      (_0x4eec95[_0x30edb2.id] = {
        order: _0x4ee482 + 1,
        menuItemFactory: _0x30edb2.menuItemFactory,
      }),
      _0x4eec95
    ),
    {},
  ),
  ci = {
    [_0xde37b7.ORGANIZATION]: {
      [Tr.id]: {
        order: 1,
        gridLayout: { row: 2, column: 1 },
        menuItemFactory: Gr,
      },
    },
    [_0xc990de.MAIN_AREA]: {
      [_0x2fd353.DATA]: {
        [Tr.id]: { order: 1, menuItemFactory: Gr },
        [Vr]: { order: 2, menuItemFactory: Kr, ...oi },
        [Hr]: { order: 3, menuItemFactory: ei, ...si },
        [Ur]: { order: 4, menuItemFactory: ai },
      },
    },
    [_0xc990de.COL_HEADER]: {
      [_0x2fd353.DATA]: {
        [Tr.id]: { order: 1, menuItemFactory: Gr },
        [Vr]: { order: 2, menuItemFactory: Kr, ...oi },
      },
    },
  };
var li = "@univerjs-pro/sheets-pivot-ui",
  ui = "1.0.0-insiders.20260907-70fc579";
const di = {};
function fi(_0x36f7c4) {
  let {
      filterItemInfo: _0x5e6b55,
      unitId: _0x41d018,
      subUnitId: _0xc2e153,
    } = _0x36f7c4,
    {
      format: _0xf47e8f,
      filterInfo: _0x336041,
      sortInfo: _0x22f824,
    } = _0x5e6b55,
    _0x4fac46 = _0x473eb2(_0x5c53fb),
    _0x17038e = _0x473eb2(_0x21b801),
    _0x54167e = _0x473eb2(_0x42b513),
    _0x509648 = _0x473eb2(_0x4a41b2),
    _0x6d411b = _0x483d52(_0x17038e.direction$, _0x17038e.getDirection()),
    [_0x35fef1, _0x5e7662] = _0x4b7ac9(false),
    [_0x116b57, _0x27c9cb] = _0x4b7ac9(() =>
      _0x5e6b55
        ? ((_0x336041 == null ? undefined : _0x336041.list) ?? _0x5e6b55.items)
        : [],
    ),
    [_0x54ee04, _0x44824d] = _0x4b7ac9(
      _0x116b57.length ===
        (_0x5e6b55 == null ? undefined : _0x5e6b55.items["length"]),
    ),
    [_0xae14, _0x1bd3a3] = _0x4b7ac9(() => {
      if (_0x5e6b55) return _0x22f824 == null ? undefined : _0x22f824.type;
    }),
    _0x1c0b3c = () => {
      _0x54167e.close(Dn);
    };
  if (
    (_0x41acdd(() => {
      (_0x116b57.length ? _0x5e7662(false) : _0x5e7662(true),
        _0x116b57.length === _0x5e6b55.items["length"]
          ? _0x44824d(true)
          : _0x44824d(false));
    }, [_0x116b57, _0x5e6b55.items["length"]]),
    _0x41acdd(() => {
      let _0x16e883 = _0x509648.getCurrentUnitOfType(_0x33bcb3.UNIVER_SHEET);
      if (!_0x16e883) return;
      let _0xbc6c48 = _0x16e883.activeSheet$["subscribe"]((_0x27641a) => {
        _0x27641a && _0x27641a.getSheetId() !== _0xc2e153 && _0x1c0b3c();
      });
      return () => (_0xbc6c48 == null ? undefined : _0xbc6c48.unsubscribe());
    }, [_0xc2e153]),
    !_0x5e6b55)
  )
    return;
  let _0x32886d = () => {
      (_0x27c9cb(_0x54ee04 ? [] : _0x5e6b55.items), _0x44824d(!_0x54ee04));
    },
    _0xfa7fd3 = (_0x47aa74) => {
      _0x116b57.find((_0x31c2cb) => _0x31c2cb === _0x47aa74)
        ? _0x27c9cb(_0x116b57.filter((_0x547d4c) => _0x547d4c !== _0x47aa74))
        : _0x27c9cb([..._0x116b57, _0x47aa74]);
    },
    _0x1b7a34 = () => {
      let { tableFieldId: _0x706620, pivotTableId: _0x14f528 } = _0x5e6b55;
      !_0x706620 ||
        !_0x14f528 ||
        (_0x4fac46.executeCommand(_0x2e8123.id, {
          unitId: _0x41d018,
          subUnitId: _0xc2e153,
          pivotTableId: _0x14f528,
          tableFieldId: _0x706620,
          items: _0x116b57,
          isAll: _0x54ee04,
        }),
        _0x1c0b3c());
    },
    _0x41de09 = () => {
      _0x1c0b3c();
    },
    _0x21ecbd = () => {
      let { tableFieldId: _0x196ceb, pivotTableId: _0x3ff0ad } = _0x5e6b55;
      !_0x196ceb ||
        !_0x3ff0ad ||
        (_0x27c9cb(_0x5e6b55.items),
        _0x44824d(true),
        _0x4fac46.executeCommand(_0x2e8123.id, {
          unitId: _0x41d018,
          subUnitId: _0xc2e153,
          pivotTableId: _0x3ff0ad,
          tableFieldId: _0x196ceb,
          items: _0x5e6b55.items,
          isAll: true,
        }),
        _0x1c0b3c());
    },
    _0x82e94c = (_0x5228f0) => {
      let { tableFieldId: _0x16dbdb, pivotTableId: _0x184d65 } = _0x5e6b55;
      !_0x16dbdb ||
        !_0x184d65 ||
        (_0x4fac46.executeCommand(_0xc90518.id, {
          unitId: _0x41d018,
          subUnitId: _0xc2e153,
          pivotTableId: _0x184d65,
          tableFieldId: _0x16dbdb,
          info: { type: _0x5228f0 },
        }),
        _0x1bd3a3(_0x5228f0),
        _0x1c0b3c());
    },
    _0x50f593 = br(_0x336041, { items: _0x5e6b55.items });
  return _0x44caca("div", {
    dir: _0x6d411b,
    children: [
      _0x44caca("div", {
        className: "univer-flex",
        children: [
          _0x44caca("div", {
            className: _0x37c9a5(
              "univer-flex\x20univer-h-8\x20univer-w-[140px]\x20univer-flex-1\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center\x20univer-rounded-l-md\x20univer-text-center\x20univer-text-sm\x20hover:univer-bg-gray-100\x20rtl:univer-rounded-l-none\x20rtl:univer-rounded-r-md\x20dark:hover:!univer-bg-gray-700",
              _0x4dca92,
              {
                "univer-bg-gray-100\x20dark:!univer-bg-gray-700":
                  _0xae14 === _0x534c9f.ascending,
              },
            ),
            onClick: () => _0x82e94c(_0x534c9f.ascending),
            children: [
              _0x211556(_0x2c7612, {}),
              _0x17038e.t("sheets-pivot-ui.dialog.filter.ascending"),
            ],
          }),
          _0x44caca("div", {
            className: _0x37c9a5(
              "univer-flex\x20univer-h-8\x20univer-w-[140px]\x20univer-flex-1\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center\x20univer-rounded-r-md\x20univer-text-center\x20univer-text-sm\x20hover:univer-bg-gray-100\x20rtl:univer-rounded-l-md\x20rtl:univer-rounded-r-none\x20dark:hover:!univer-bg-gray-700",
              _0x4dca92,
              {
                "univer-bg-gray-100\x20dark:!univer-bg-gray-700":
                  _0xae14 === _0x534c9f.descending,
              },
            ),
            onClick: () => _0x82e94c(_0x534c9f.descending),
            children: [
              _0x211556(_0x26efc4, {}),
              _0x17038e.t("sheets-pivot-ui.dialog.filter.descending"),
            ],
          }),
        ],
      }),
      _0x211556("div", {
        className: _0x37c9a5(
          "univer-mx-0\x20univer-mb-4\x20univer-mt-3\x20univer-h-[300px]\x20univer-rounded-lg\x20univer-p-2",
          _0x4dca92,
        ),
        children: _0x44caca("div", {
          className: _0x37c9a5(
            "univer-h-full univer-overflow-y-auto",
            _0x147e92,
          ),
          children: [
            _0x211556("div", {
              className:
                "univer-mb-1\x20univer-box-border\x20univer-h-7\x20univer-py-[5px]\x20univer-pl-[22px]\x20univer-pr-1\x20univer-text-sm\x20rtl:univer-pl-1\x20rtl:univer-pr-[22px]",
              children: _0x211556(_0x5ae922, {
                checked: _0x54ee04,
                onChange: _0x32886d,
                indeterminate:
                  _0x116b57.length > 0 &&
                  _0x116b57.length < _0x5e6b55.items["length"],
                children: _0x17038e.t(
                  "sheets-pivot-ui.dialog.filter.selectAll",
                ),
              }),
            }),
            _0x5e6b55.items["map"]((_0x446f03, _0xf098e8) => {
              var _0x12e74c;
              let _0x265472 = _0x446f03,
                _0x4208f0 =
                  (_0x12e74c = _0x5e6b55.itemTypes) == null
                    ? undefined
                    : _0x12e74c[_0xf098e8];
              return (
                _0x4208f0 === _0x3add37.blank
                  ? (_0x265472 = _0x17038e.t(
                      "sheets-pivot-ui.dialog.filter.blank",
                    ))
                  : _0x4208f0 === _0x3add37.date &&
                    (_0x265472 = _0xf47e8f
                      ? _0x4d00e6.format(_0xf47e8f, Number(_0x265472))
                      : _0x265472),
                _0x211556(
                  "div",
                  {
                    className:
                      "univer-mb-1 univer-box-border univer-h-7 univer-py-1 univer-pl-[22px] univer-pr-1 univer-text-sm rtl:univer-pl-1 rtl:univer-pr-[22px]",
                    children: _0x211556(_0x5ae922, {
                      checked: !!_0x116b57.find(
                        (_0x57c349) => _0x57c349 === _0x446f03,
                      ),
                      onChange: () => _0xfa7fd3(_0x446f03),
                      contentClassName: "univer-max-w-[200px] univer-truncate",
                      children: _0x265472,
                    }),
                  },
                  _0x446f03,
                )
              );
            }),
          ],
        }),
      }),
      _0x44caca(_0x2be7cc, {
        className: "univer-flex univer-items-center univer-justify-between",
        children: [
          _0x211556("div", {
            className:
              "univer-cursor-pointer univer-text-xs univer-text-primary-600",
            children: _0x211556(_0x31eb36, {
              variant: "link",
              disabled: _0x50f593 === "NotFilter",
              onClick: _0x21ecbd,
              children: _0x17038e.t(
                "sheets-pivot-ui.dialog.filter.clearFilter",
              ),
            }),
          }),
          _0x44caca(_0x2be7cc, {
            className:
              "univer-flex univer-flex-1 univer-items-center univer-gap-3",
            children: [
              _0x211556(_0x31eb36, {
                onClick: _0x41de09,
                children: _0x17038e.t("sheets-pivot-ui.dialog.filter.cancel"),
              }),
              _0x211556(_0x31eb36, {
                variant: "primary",
                disabled: _0x35fef1,
                onClick: _0x1b7a34,
                children: _0x17038e.t("sheets-pivot-ui.dialog.filter.confirm"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const pi = ({ handlePatternChange: _0x7236da }) => {
    let _0x1212d1 = _0x473eb2(_0x21b801);
    return (
      _0x41acdd(() => {
        _0x7236da("");
      }, []),
      _0x211556("div", {
        className:
          "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
        children: _0x1212d1.t("sheets-pivot-ui.dialog.numfmt.generalDesc"),
      })
    );
  },
  mi = ({ originPattern: _0x18327a, handlePatternChange: _0x4ec0c3 }) => {
    let _0x36a602 = _0x473eb2(_0x21b801),
      _0x1f18cd = _0x537c61.map((_0x300c28) => ({
        label: _0x300c28,
        value: _0x300c28,
      })),
      [_0xb0cc06, _0x20abf0] = _0x4b7ac9(() => or(_0x18327a || "", 2)),
      [_0xb3911a, _0x288838] = _0x4b7ac9(
        () => lr(_0x18327a ?? "") || _0x1f18cd[0].value,
      );
    return (
      _0x41acdd(() => {
        _0x4ec0c3(
          cr(
            '_("' + _0xb3911a + '"* #,##0' + (_0xb0cc06 > 0 ? ".0" : "") + "_)",
            _0xb0cc06,
          ),
        );
      }, []),
      _0x44caca("div", {
        className: "univer-mt-5",
        children: [
          _0x44caca("div", {
            className: "univer-flex univer-items-center univer-justify-between",
            children: [
              _0x44caca("div", {
                className: "univer-w-[136px]",
                children: [
                  _0x211556("div", {
                    className: "univer-mb-2 univer-text-sm univer-font-medium",
                    children: _0x36a602.t(
                      "sheets-pivot-ui.dialog.numfmt.decimalPlaces",
                    ),
                  }),
                  _0x211556(_0x582285, {
                    className: "univer-box-border univer-h-8",
                    value: _0xb0cc06,
                    max: 20,
                    min: 0,
                    onChange: (_0x506ba1) => {
                      let _0x31b4dc = _0x506ba1 ?? 0;
                      (_0x20abf0(_0x31b4dc),
                        _0x4ec0c3(
                          cr(
                            '_("' +
                              _0xb3911a +
                              '"* #,##0' +
                              (_0x31b4dc > 0 ? ".0" : "") +
                              "_)",
                            _0x31b4dc,
                          ),
                        ));
                    },
                  }),
                ],
              }),
              _0x44caca("div", {
                className: "univer-w-[136px]",
                children: [
                  _0x211556("div", {
                    className:
                      "univer-mb-2\x20univer-text-sm\x20univer-font-medium",
                    children: _0x36a602.t(
                      "sheets-pivot-ui.dialog.numfmt.currencyTypes",
                    ),
                  }),
                  _0x211556(_0x61011e, {
                    options: _0x1f18cd,
                    value: _0xb3911a,
                    onChange: (_0x1a4f45) => {
                      (_0x288838(_0x1a4f45),
                        _0x4ec0c3(
                          cr(
                            '_("' +
                              _0x1a4f45 +
                              "\x22*\x20#,##0" +
                              (_0xb0cc06 > 0 ? ".0" : "") +
                              "_)",
                            _0xb0cc06,
                          ),
                        ));
                    },
                  }),
                ],
              }),
            ],
          }),
          _0x211556("div", {
            className:
              "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
            children: _0x36a602.t(
              "sheets-pivot-ui.dialog.numfmt.accountingDesc",
            ),
          }),
        ],
      })
    );
  },
  hi = ({ originPattern: _0x9aa2eb, handlePatternChange: _0x59e80b }) => {
    let _0x5f2119 = _0x473eb2(_0x21b801),
      _0x166bfd = _0x537c61.map((_0x4aedd0) => ({
        label: _0x4aedd0,
        value: _0x4aedd0,
      })),
      [_0x545413, _0x480472] = _0x4b7ac9(() => or(_0x9aa2eb || "", 2)),
      [_0x544256, _0xf8b3a8] = _0x4b7ac9(
        () => lr(_0x9aa2eb ?? "") || _0x166bfd[0].value,
      ),
      _0x12bbca = Wn.map((_0x174798) => ({
        label: _0x174798.label(_0x544256),
        value: _0x174798.suffix(_0x544256),
        color: _0x174798.color,
      })),
      [_0x40b0a9, _0xba00e0] = _0x4b7ac9(() => {
        var _0x3e12ea;
        return (
          ((_0x3e12ea = _0x12bbca.find((_0x55e6a5) =>
            _0x14fe41(_0x55e6a5.value, _0x9aa2eb ?? ""),
          )) == null
            ? undefined
            : _0x3e12ea.value) || _0x12bbca[0].value
        );
      });
    return (
      _0x41acdd(() => {
        _0x59e80b(cr(_0x40b0a9, _0x545413));
      }, []),
      _0x44caca("div", {
        className: "univer-mt-5",
        children: [
          _0x44caca("div", {
            className: "univer-flex univer-items-center univer-justify-between",
            children: [
              _0x44caca("div", {
                className: "univer-w-[136px]",
                children: [
                  _0x211556("div", {
                    className: "univer-mb-2 univer-text-sm univer-font-medium",
                    children: _0x5f2119.t(
                      "sheets-pivot-ui.dialog.numfmt.decimalPlaces",
                    ),
                  }),
                  _0x211556(_0x582285, {
                    className: "univer-box-border\x20univer-h-8",
                    value: _0x545413,
                    max: 20,
                    min: 0,
                    onChange: (_0x164209) => {
                      _0x164209 &&
                        (_0x480472(_0x164209),
                        _0x59e80b(cr(_0x40b0a9, _0x164209)));
                    },
                  }),
                ],
              }),
              _0x44caca("div", {
                className: "univer-w-[136px]",
                children: [
                  _0x211556("div", {
                    className: "univer-mb-2 univer-text-sm univer-font-medium",
                    children: _0x5f2119.t(
                      "sheets-pivot-ui.dialog.numfmt.currencyTypes",
                    ),
                  }),
                  _0x211556(_0x61011e, {
                    options: _0x166bfd,
                    value: _0x544256,
                    onChange: (_0xb3e333) => {
                      _0xf8b3a8(_0xb3e333);
                      let _0x1eb3ae = Wn.map((_0x512839) => ({
                        label: _0x512839.label(_0xb3e333),
                        value: _0x512839.suffix(_0xb3e333),
                        color: _0x512839.color,
                      }));
                      (_0xba00e0(_0x1eb3ae[0].value),
                        _0x59e80b(cr(_0x1eb3ae[0].value, _0x545413)));
                    },
                  }),
                ],
              }),
            ],
          }),
          _0x44caca("div", {
            className: "univer-mt-4",
            children: [
              _0x211556("div", {
                className: "univer-mb-2 univer-text-sm univer-font-medium",
                children: _0x5f2119.t(
                  "sheets-pivot-ui.dialog.numfmt.negativeNumberTypes",
                ),
              }),
              _0x211556(_0x388486, {
                className: "univer-rounded-lg univer-p-2",
                options: _0x12bbca,
                value: _0x40b0a9,
                onChange: (_0xf5277d) => {
                  (_0xba00e0(_0xf5277d), _0x59e80b(cr(_0xf5277d, _0x545413)));
                },
              }),
              _0x211556("div", {
                className:
                  "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
                children: _0x5f2119.t(
                  "sheets-pivot-ui.dialog.numfmt.currencyDesc",
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  gi = ({ originPattern: _0x36166b, handlePatternChange: _0x4c4874 }) => {
    let _0x4b82c8 = _0x473eb2(_0x21b801),
      _0x15d88f = Hn.map((_0x3a7035) => ({
        label: _0x3a7035.label,
        value: _0x3a7035.suffix,
      })),
      [_0x278e81, _0x57ab72] = _0x4b7ac9(() => {
        if (_0x36166b) {
          let _0x4d8c08 = _0x15d88f.find(
            (_0xcc28cd) => _0xcc28cd.value === _0x36166b,
          );
          if (_0x4d8c08) return _0x4d8c08.value;
        }
        return _0x15d88f[0].value;
      });
    return (
      _0x41acdd(() => {
        _0x4c4874(_0x278e81);
      }, []),
      _0x211556("div", {
        className: "univer-mt-5",
        children: _0x44caca("div", {
          className: "univer-mt-5",
          children: [
            _0x211556("div", {
              className: "univer-mb-2 univer-text-sm univer-font-medium",
              children: _0x4b82c8.t("sheets-pivot-ui.dialog.numfmt.dateTypes"),
            }),
            _0x211556("div", {
              children: _0x211556(_0x388486, {
                className: "univer-rounded-lg univer-p-2",
                options: _0x15d88f,
                value: _0x278e81,
                onChange: (_0x2adf91) => {
                  (_0x57ab72(_0x2adf91), _0x4c4874(_0x2adf91));
                },
              }),
            }),
            _0x211556("div", {
              className:
                "univer-mt-1.5 univer-text-sm univer-leading-5 univer-text-gray-600 dark:!univer-text-gray-200",
              children: _0x4b82c8.t("sheets-pivot-ui.dialog.numfmt.dateDesc"),
            }),
          ],
        }),
      })
    );
  },
  _i = ({ originPattern: _0x4d3623, handlePatternChange: _0x1b28c4 }) => {
    let _0x34b400 = _0x473eb2(_0x21b801),
      [_0x15e6cd, _0x3dc149] = _0x4b7ac9(() => or(_0x4d3623 || "", 0)),
      _0x347e80 = Un.map((_0x45da74) => ({
        label: _0x45da74.label,
        value: _0x45da74.suffix,
        color: _0x45da74.color,
      })),
      [_0x41048f, _0x5c4814] = _0x4b7ac9(() => {
        let _0x48d03d = _0x347e80.find((_0x4abad1) =>
          _0x14fe41(_0x4abad1.value, _0x4d3623 || ""),
        );
        return (
          (_0x48d03d == null ? undefined : _0x48d03d.value) ||
          _0x347e80[0].value
        );
      });
    return (
      _0x41acdd(() => {
        _0x1b28c4(cr(_0x41048f, Number(_0x15e6cd || 0)));
      }, []),
      _0x44caca("div", {
        className: "univer-mt-5",
        children: [
          _0x211556("div", {
            className: "univer-flex univer-items-center univer-justify-between",
            children: _0x44caca("div", {
              className: "univer-w-[136px]",
              children: [
                _0x211556("div", {
                  className: "univer-mb-2 univer-text-sm univer-font-medium",
                  children: _0x34b400.t(
                    "sheets-pivot-ui.dialog.numfmt.decimalPlaces",
                  ),
                }),
                _0x211556(_0x582285, {
                  className: "univer-box-border univer-h-8",
                  value: _0x15e6cd,
                  max: 20,
                  min: 0,
                  onChange: (_0x251669) => {
                    _0x251669 &&
                      (_0x3dc149(_0x251669),
                      _0x1b28c4(cr(_0x41048f, Number(_0x251669))));
                  },
                }),
              ],
            }),
          }),
          _0x44caca("div", {
            className: "univer-mt-4",
            children: [
              _0x211556("div", {
                className: "univer-mb-2 univer-text-sm univer-font-medium",
                children: _0x34b400.t(
                  "sheets-pivot-ui.dialog.numfmt.negativeNumberTypes",
                ),
              }),
              _0x211556(_0x388486, {
                className: "univer-rounded-lg univer-p-2",
                options: _0x347e80,
                value: _0x41048f,
                onChange: (_0xdba00c) => {
                  (_0x3dc149(or(_0xdba00c, 0)),
                    _0x5c4814(_0xdba00c),
                    _0x1b28c4(_0xdba00c));
                },
              }),
              _0x211556("div", {
                className:
                  "univer-mt-1.5\x20univer-text-sm\x20univer-leading-5\x20univer-text-gray-600\x20dark:!univer-text-gray-200",
                children: _0x34b400.t(
                  "sheets-pivot-ui.dialog.numfmt.thousandthPercentileDesc",
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  vi = ({
    unitId: _0x4fa14b,
    subUnitId: _0x5a18c0,
    pivotTableId: _0x58cf6c,
    tableFieldId: _0x329a20,
    originPattern: _0x83d5ab,
    tableFieldInfo: _0x27d587,
    dataFieldInfo: _0x344485,
  }) => {
    let _0x516eef = _0x473eb2(_0x21b801),
      _0x57017a = _0x473eb2(_0x42b513),
      _0x212659 = _0x516eef.getDirection(),
      _0x52abe0 = _0x3f1f87(
        () =>
          [
            {
              label: "sheets-pivot-ui.dialog.numfmt.general",
              component: pi,
              key: "sheet.numfmt.general",
            },
            {
              label: "sheets-pivot-ui.dialog.numfmt.accounting",
              component: mi,
              key: "sheet.numfmt.accounting",
            },
            {
              label: "sheets-pivot-ui.dialog.numfmt.currency",
              component: hi,
              key: "sheet.numfmt.currency",
            },
            {
              label: "sheets-pivot-ui.dialog.numfmt.date",
              component: gi,
              key: "sheet.numfmt.date",
            },
            {
              label: "sheets-pivot-ui.dialog.numfmt.thousandthPercentile",
              component: _i,
              key: "sheet.numfmt.thousandthPercentile",
            },
          ].map((_0x1577cb) => ({
            ..._0x1577cb,
            label: _0x516eef.t(_0x1577cb.label),
          })),
        [_0x516eef],
      ),
      _0x1cefa3 = _0x52abe0.map((_0x1f5017) => ({
        label: _0x1f5017.label,
        value: _0x1f5017.key,
      })),
      [_0x4a0cb4, _0x47134d] = _0x4b7ac9(
        () =>
          [ur, dr, fr, mr, gr].reduce(
            (_0x5681d5, _0x417ac5, _0x402353) =>
              _0x5681d5 ||
              (_0x417ac5(_0x83d5ab ?? "") ? _0x52abe0[_0x402353].key : ""),
            "",
          ) || _0x52abe0[0].key,
      ),
      [_0xd25a83, _0x1a14a6] = _0x4b7ac9(_0x83d5ab),
      _0x3ee670 = (_0x4ee733) => _0x1a14a6(_0x4ee733),
      _0x337a08 = (_0x386a8d) => {
        _0x47134d(_0x386a8d);
      },
      _0x9b3d88 = (_0x13e06d) => ({
        id: kn,
        title: { title: _0x516eef.t("sheets-pivot-ui.fieldSettings") },
        draggable: true,
        mask: false,
        maskClosable: false,
        width: 400,
        children: {
          label: On,
          tableFieldId: _0x329a20,
          pivotTableId: _0x58cf6c,
          unitId: _0x4fa14b,
          subUnitId: _0x5a18c0,
          tableFieldInfo: _0x27d587,
          dataFieldInfo: _0x344485,
          key: "field-setting-" + (_0x329a20 || ""),
          closeFn: () => {
            _0x57017a.close(kn);
          },
          format: _0x13e06d ? _0xd25a83 : "",
        },
        onClose: () => {
          _0x57017a.close(kn);
        },
      }),
      _0xc43468 = () => {
        _0x57017a.close(jn);
        let _0x380103 = _0x9b3d88(false);
        _0x57017a.open(_0x380103);
      };
    return _0x44caca("div", {
      dir: _0x212659,
      children: [
        _0x211556("div", {
          className: "univer-flex",
          children: _0x44caca("div", {
            className:
              "univer-mb-5 univer-flex univer-h-6 univer-cursor-pointer univer-items-center univer-text-base univer-font-medium univer-leading-6",
            onClick: _0xc43468,
            children: [
              _0x211556(_0x3cc7ee, {}),
              _0x516eef.t("sheets-pivot-ui.dialog.numfmt.fieldSetting"),
            ],
          }),
        }),
        _0x211556("div", {
          className:
            "univer-mb-2 univer-h-5 univer-text-sm univer-font-medium univer-leading-5",
          children: _0x516eef.t("sheets-pivot-ui.dialog.numfmt.formatTypes"),
        }),
        _0x211556("div", {
          children: _0x211556(_0x61011e, {
            className: "univer-w-full",
            value: _0x4a0cb4,
            options: _0x1cefa3,
            onChange: (_0x20dbce) => _0x337a08(_0x20dbce),
          }),
        }),
        _0x44caca("div", {
          children: [
            _0x4a0cb4 === "sheet.numfmt.general" &&
              _0x211556(pi, {
                originPattern: _0x83d5ab,
                handlePatternChange: _0x3ee670,
              }),
            _0x4a0cb4 === "sheet.numfmt.accounting" &&
              _0x211556(mi, {
                originPattern: _0x83d5ab,
                handlePatternChange: _0x3ee670,
              }),
            _0x4a0cb4 === "sheet.numfmt.currency" &&
              _0x211556(hi, {
                originPattern: _0x83d5ab,
                handlePatternChange: _0x3ee670,
              }),
            _0x4a0cb4 === "sheet.numfmt.date" &&
              _0x211556(gi, {
                originPattern: _0x83d5ab,
                handlePatternChange: _0x3ee670,
              }),
            _0x4a0cb4 === "sheet.numfmt.thousandthPercentile" &&
              _0x211556(_i, {
                originPattern: _0x83d5ab,
                handlePatternChange: _0x3ee670,
              }),
          ],
        }),
        _0x44caca(_0x2be7cc, {
          className: "univer-mt-2 univer-flex univer-justify-end",
          children: [
            _0x211556(_0x31eb36, {
              onClick: _0xc43468,
              children: _0x516eef.t("sheets-pivot-ui.dialog.numfmt.cancel"),
            }),
            _0x211556(_0x31eb36, {
              className: "univer-ml-3\x20rtl:univer-ml-0\x20rtl:univer-mr-3",
              variant: "primary",
              onClick: () => {
                _0x57017a.close(jn);
                let _0x47eb73 = _0x9b3d88(true);
                _0x57017a.open(_0x47eb73);
              },
              children: _0x516eef.t("sheets-pivot-ui.dialog.numfmt.confirm"),
            }),
          ],
        }),
      ],
    });
  },
  yi = [
    { label: "sheets-pivot-ui.config.pageDownThenOver", value: "false" },
    { label: "sheets-pivot-ui.config.pageOverThenDown", value: "true" },
  ],
  bi = [
    {
      label: "sheets-pivot-ui.config.layoutTabular",
      value: String(_0xc3cd2b.tabular),
    },
    {
      label: "sheets-pivot-ui.config.layoutCompact",
      value: String(_0xc3cd2b.compact),
    },
    {
      label: "sheets-pivot-ui.config.layoutOutline",
      value: String(_0xc3cd2b.outline),
    },
  ],
  xi = [
    {
      label: "sheets-pivot-ui.config.rowSubtotalTop",
      value: String(_0x2f77ff.top),
    },
    {
      label: "sheets-pivot-ui.config.rowSubtotalBottom",
      value: String(_0x2f77ff.bottom),
    },
  ];
function Si(_0x35119c) {
  let {
      unitId: _0x20f6a4,
      subUnitId: _0x170366,
      pivotTableId: _0x3b8641,
    } = _0x35119c,
    _0x472eb5 = _0x473eb2(_0x5c53fb),
    _0x4f58f1 = _0x473eb2(_0x4c8ad2),
    _0x262842 = _0x473eb2(_0x21b801),
    _0x44e9c1 = _0x473eb2(_0x52d40e),
    [_0x3e1dab, _0x5a0d84] = _0x4b7ac9(() => {
      var _0x59ec86, _0x3dedd4;
      let _0x2414eb = _0x44e9c1.getPivotTableConfig(
          _0x20f6a4,
          _0x170366,
          _0x3b8641,
        ),
        _0x495d0d =
          (_0x2414eb == null || (_0x59ec86 = _0x2414eb.fieldsConfig) == null
            ? undefined
            : _0x59ec86.options) ?? {};
      return {
        showRowSubtotal: _0x495d0d.showRowSubtotal ?? true,
        showRowGrandTotal: _0x495d0d.showRowGrandTotal ?? true,
        showColSubtotal: _0x495d0d.showColSubtotal ?? true,
        showColGrandTotal: _0x495d0d.showColGrandTotal ?? true,
        pageWrap: _0x495d0d.pageWrap ?? 1,
        pageOverThenDown: _0x495d0d.pageOverThenDown ?? false,
        repeatRowLabels: _0x495d0d.repeatRowLabels ?? false,
        repeatColLabels: _0x495d0d.repeatColLabels ?? false,
        layout:
          (_0x2414eb == null || (_0x3dedd4 = _0x2414eb.fieldsConfig) == null
            ? undefined
            : _0x3dedd4.layout) ?? _0xc3cd2b.tabular,
        rowSubtotalPosition: _0x495d0d.rowSubtotalPosition ?? _0x2f77ff.top,
      };
    }),
    _0x45e3bf = (_0x382547) => {
      let _0x454d61 = {
        unitId: _0x20f6a4,
        subUnitId: _0x170366,
        pivotTableId: _0x3b8641,
        options: _0x382547,
      };
      (_0x472eb5
        .executeCommand(_0x4af03c.id, _0x454d61)
        .catch((_0x2ec00f) => _0x4f58f1.error("[PivotConfigPanel]", _0x2ec00f)),
        _0x5a0d84((_0x31a908) => ({ ..._0x31a908, ..._0x382547 })));
    },
    _0x2d9ad5 = (_0x132481) => {
      let _0x3b2aae = {
        unitId: _0x20f6a4,
        subUnitId: _0x170366,
        pivotTableId: _0x3b8641,
        layout: _0x132481,
      };
      (_0x472eb5
        .executeCommand(_0x112e8b.id, _0x3b2aae)
        .catch((_0x476fa8) => _0x4f58f1.error("[PivotConfigPanel]", _0x476fa8)),
        _0x5a0d84((_0x4ad77a) => ({ ..._0x4ad77a, layout: _0x132481 })));
    };
  return _0x44caca("div", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-4\x20univer-p-4",
    children: [
      _0x44caca("section", {
        children: [
          _0x211556("div", {
            className:
              "univer-mb-2 univer-text-sm univer-font-medium univer-text-gray-600",
            children: _0x262842.t("sheets-pivot-ui.config.displaySection"),
          }),
          _0x44caca("div", {
            className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
            children: [
              _0x44caca("div", {
                className:
                  "univer-flex univer-items-center univer-justify-between univer-gap-2",
                children: [
                  _0x211556("span", {
                    className: "univer-text-sm univer-text-gray-600",
                    children: _0x262842.t("sheets-pivot-ui.config.layout"),
                  }),
                  _0x211556(_0x61011e, {
                    className: "univer-w-36",
                    value: String(_0x3e1dab.layout),
                    options: bi.map((_0x4d74bb) => ({
                      ..._0x4d74bb,
                      label: _0x262842.t(_0x4d74bb.label),
                    })),
                    onChange: (_0x14d016) => _0x2d9ad5(Number(_0x14d016)),
                  }),
                ],
              }),
              _0x44caca("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  _0x211556(_0x5ae922, {
                    checked: _0x3e1dab.repeatRowLabels,
                    disabled: _0x3e1dab.layout === _0xc3cd2b.compact,
                    onChange: (_0x42be3e) =>
                      _0x45e3bf({ repeatRowLabels: !!_0x42be3e }),
                  }),
                  _0x262842.t("sheets-pivot-ui.config.repeatRowLabels"),
                ],
              }),
              _0x44caca("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  _0x211556(_0x5ae922, {
                    checked: _0x3e1dab.repeatColLabels,
                    onChange: (_0xa5176a) =>
                      _0x45e3bf({ repeatColLabels: !!_0xa5176a }),
                  }),
                  _0x262842.t("sheets-pivot-ui.config.repeatColLabels"),
                ],
              }),
            ],
          }),
        ],
      }),
      _0x44caca("section", {
        children: [
          _0x211556("div", {
            className: _0x37c9a5(
              "univer-mb-2\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-600",
            ),
            children: _0x262842.t("sheets-pivot-ui.config.totalsSection"),
          }),
          _0x44caca("div", {
            className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
            children: [
              _0x44caca("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  _0x211556(_0x5ae922, {
                    checked: _0x3e1dab.showRowSubtotal,
                    onChange: (_0x230051) =>
                      _0x45e3bf({ showRowSubtotal: !!_0x230051 }),
                  }),
                  _0x262842.t("sheets-pivot-ui.config.showRowSubtotal"),
                ],
              }),
              _0x3e1dab.layout === _0xc3cd2b.outline &&
                _0x44caca("div", {
                  className:
                    "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-gap-2",
                  children: [
                    _0x211556("span", {
                      className: "univer-text-sm univer-text-gray-600",
                      children: _0x262842.t(
                        "sheets-pivot-ui.config.rowSubtotalPosition",
                      ),
                    }),
                    _0x211556(_0x61011e, {
                      className: "univer-w-36",
                      value: String(_0x3e1dab.rowSubtotalPosition),
                      options: xi.map((_0x473314) => ({
                        ..._0x473314,
                        label: _0x262842.t(_0x473314.label),
                      })),
                      onChange: (_0x956f8c) =>
                        _0x45e3bf({ rowSubtotalPosition: Number(_0x956f8c) }),
                    }),
                  ],
                }),
              _0x44caca("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  _0x211556(_0x5ae922, {
                    checked: _0x3e1dab.showRowGrandTotal,
                    onChange: (_0x284448) =>
                      _0x45e3bf({ showRowGrandTotal: !!_0x284448 }),
                  }),
                  _0x262842.t("sheets-pivot-ui.config.showRowGrandTotal"),
                ],
              }),
              _0x44caca("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  _0x211556(_0x5ae922, {
                    checked: _0x3e1dab.showColSubtotal,
                    onChange: (_0x387e62) =>
                      _0x45e3bf({ showColSubtotal: !!_0x387e62 }),
                  }),
                  _0x262842.t("sheets-pivot-ui.config.showColSubtotal"),
                ],
              }),
              _0x44caca("label", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-text-sm univer-text-gray-600",
                children: [
                  _0x211556(_0x5ae922, {
                    checked: _0x3e1dab.showColGrandTotal,
                    onChange: (_0x31be47) =>
                      _0x45e3bf({ showColGrandTotal: !!_0x31be47 }),
                  }),
                  _0x262842.t("sheets-pivot-ui.config.showColGrandTotal"),
                ],
              }),
            ],
          }),
        ],
      }),
      _0x44caca("section", {
        children: [
          _0x211556("div", {
            className:
              "univer-mb-2\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-600",
            children: _0x262842.t("sheets-pivot-ui.config.pageSection"),
          }),
          _0x44caca("div", {
            className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
            children: [
              _0x44caca("div", {
                className:
                  "univer-flex univer-items-center univer-justify-between univer-gap-2",
                children: [
                  _0x211556("span", {
                    className: "univer-text-sm univer-text-gray-600",
                    children: _0x262842.t("sheets-pivot-ui.config.pageWrap"),
                  }),
                  _0x211556(_0x582285, {
                    className: "univer-w-24",
                    value: _0x3e1dab.pageWrap,
                    min: 1,
                    max: 20,
                    onChange: (_0x5eaeee) => {
                      let _0x57dafc = Number(_0x5eaeee);
                      Number.isFinite(_0x57dafc) &&
                        _0x57dafc >= 1 &&
                        _0x45e3bf({ pageWrap: _0x57dafc });
                    },
                  }),
                ],
              }),
              _0x44caca("div", {
                className:
                  "univer-flex univer-items-center univer-justify-between univer-gap-2",
                children: [
                  _0x211556("span", {
                    className: "univer-text-sm\x20univer-text-gray-600",
                    children: _0x262842.t(
                      "sheets-pivot-ui.config.pageDirection",
                    ),
                  }),
                  _0x211556(_0x61011e, {
                    className: "univer-w-36",
                    value: String(_0x3e1dab.pageOverThenDown),
                    options: yi.map((_0x507273) => ({
                      ..._0x507273,
                      label: _0x262842.t(_0x507273.label),
                    })),
                    onChange: (_0x15c72e) =>
                      _0x45e3bf({ pageOverThenDown: _0x15c72e === "true" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Ci = _0x1e3e41(null),
  wi = _0x1e3e41(null);
function Ti(_0xe56fd1, _0x223041) {
  return _0xe56fd1 === _0x223041
    ? true
    : !_0xe56fd1 || !_0x223041
      ? false
      : _0xe56fd1.droppableId === _0x223041.droppableId &&
        _0xe56fd1.index === _0x223041.index;
}
function Ei(_0x585740) {
  if (!(_0x585740 instanceof Element)) return null;
  let _0x41e7b3 = _0x585740.closest("[data-univer-dnd-droppable-id]");
  return _0x41e7b3 instanceof HTMLElement ? _0x41e7b3 : null;
}
function Di(_0x26e11e, _0xe28d17, _0x107e50, _0x486b02) {
  let _0x20d7ee = Array.from(
    _0x26e11e.querySelectorAll('[data-univer-dnd-item="true"]'),
  ).filter((_0x29655a) => {
    let _0x486eaa = _0x29655a.dataset["univerDndId"];
    return _0x486eaa
      ? _0x486eaa !== _0x107e50.draggableId ||
          _0x107e50.source["droppableId"] !== _0x486b02
      : false;
  });
  if (!_0x20d7ee.length) return 0;
  for (let _0x3988d6 = 0; _0x3988d6 < _0x20d7ee.length - 1; _0x3988d6++) {
    let _0x58c333 = _0x20d7ee[_0x3988d6].getBoundingClientRect();
    if (_0xe28d17 < _0x58c333.top + _0x58c333.height / 2) return _0x3988d6;
  }
  let _0x19a1ba = _0x20d7ee.length - 1,
    _0x368111 = _0x20d7ee[_0x19a1ba].getBoundingClientRect();
  return _0xe28d17 < _0x368111.top + _0x368111.height * 0.35
    ? _0x19a1ba
    : _0x20d7ee.length;
}
function Oi() {
  let _0x1aadfe = _0x53b194(Ci);
  if (!_0x1aadfe)
    throw Error("Draggable/Droppable must be used inside DragDropContext");
  return _0x1aadfe;
}
function ki(_0xf26b36) {
  let {
      children: _0x16d049,
      onDragEnd: _0x421a31,
      onDragStart: _0x5be1a4,
      onDragUpdate: _0x5b4b2a,
    } = _0xf26b36,
    [_0x388bed, _0x326759] = _0x4b7ac9(null),
    _0x37eb81 = _0x41a68e(null),
    _0x565ecd = _0x144089(
      (_0x26138e, _0x3df0e8) => {
        let _0x237388 = {
          draggableId: _0x26138e,
          source: _0x3df0e8,
          destination: null,
        };
        ((_0x37eb81.current = _0x237388),
          _0x326759(_0x237388),
          _0x5be1a4 == null ||
            _0x5be1a4({ draggableId: _0x26138e, source: _0x3df0e8 }),
          _0x5b4b2a == null ||
            _0x5b4b2a({
              draggableId: _0x26138e,
              source: _0x3df0e8,
              destination: null,
            }));
      },
      [_0x5be1a4, _0x5b4b2a],
    ),
    _0x59c3eb = _0x144089(
      (_0x2328c2) => {
        let _0x1686ab = _0x37eb81.current;
        if (!_0x1686ab || Ti(_0x1686ab.destination, _0x2328c2)) return;
        let _0x238534 = { ..._0x1686ab, destination: _0x2328c2 };
        ((_0x37eb81.current = _0x238534),
          _0x326759(_0x238534),
          _0x5b4b2a == null ||
            _0x5b4b2a({
              draggableId: _0x238534.draggableId,
              source: _0x238534.source,
              destination: _0x238534.destination,
            }));
      },
      [_0x5b4b2a],
    ),
    _0x1485e4 = _0x144089(
      async (_0x385228, _0x1e5f0b) => {
        let _0xbbf6e7 = _0x37eb81.current;
        _0xbbf6e7 &&
          ((_0x37eb81.current = null),
          _0x326759(null),
          await (_0x421a31 == null
            ? undefined
            : _0x421a31({
                draggableId: _0xbbf6e7.draggableId,
                source: _0xbbf6e7.source,
                destination:
                  _0x1e5f0b === undefined ? _0xbbf6e7.destination : _0x1e5f0b,
                reason: _0x385228,
              })));
      },
      [_0x421a31],
    );
  _0x41acdd(() => {
    if (!_0x388bed) return;
    let _0x8acc10 = (_0x3ba559) => {
      let _0x1c8441 = Ei(_0x3ba559.target);
      (!_0x1c8441 || _0x1c8441.dataset["univerDndDropDisabled"] === "true") &&
        _0x59c3eb(null);
    };
    return (
      window.addEventListener("dragover", _0x8acc10, true),
      () => {
        window.removeEventListener("dragover", _0x8acc10, true);
      }
    );
  }, [_0x388bed, _0x59c3eb]);
  let _0x48ecf7 = _0x3f1f87(
    () => ({
      activeDrag: _0x388bed,
      startDrag: _0x565ecd,
      updateDestination: _0x59c3eb,
      endDrag: _0x1485e4,
    }),
    [_0x388bed, _0x565ecd, _0x59c3eb, _0x1485e4],
  );
  return _0x211556(Ci.Provider, { value: _0x48ecf7, children: _0x16d049 });
}
function Ai(_0x4a9806) {
  var _0x15d698;
  let {
      children: _0x1d8e04,
      droppableId: _0x4e6433,
      isDropDisabled: _0x14d373 = false,
    } = _0x4a9806,
    {
      activeDrag: _0x4a3cb9,
      updateDestination: _0x4a327c,
      endDrag: _0x4991db,
    } = Oi(),
    _0xfc7305 = _0x41a68e(null),
    _0xef2b53 = {
      innerRef: _0x144089((_0x3b2156) => {
        _0xfc7305.current = _0x3b2156;
      }, []),
      droppableProps: {
        onDragOver: _0x144089(
          (_0x58d066) => {
            if (!_0x4a3cb9 || _0x14d373 || !_0xfc7305.current) return;
            _0x58d066.preventDefault();
            let _0x489d88 = Di(
              _0xfc7305.current,
              _0x58d066.clientY,
              _0x4a3cb9,
              _0x4e6433,
            );
            _0x4a327c({ droppableId: _0x4e6433, index: _0x489d88 });
          },
          [_0x4a3cb9, _0x14d373, _0x4e6433, _0x4a327c],
        ),
        onDrop: _0x144089(
          (_0x13f36e) => {
            var _0x5a611c;
            if (!_0x4a3cb9 || _0x14d373 || !_0xfc7305.current) return;
            _0x13f36e.preventDefault();
            let _0x14797a = (((_0x5a611c = _0x4a3cb9.destination) == null
              ? undefined
              : _0x5a611c.droppableId) === _0x4e6433
              ? _0x4a3cb9.destination
              : null) ?? {
              droppableId: _0x4e6433,
              index: Di(
                _0xfc7305.current,
                _0x13f36e.clientY,
                _0x4a3cb9,
                _0x4e6433,
              ),
            };
            return _0x4991db("DROP", _0x14797a);
          },
          [_0x4a3cb9, _0x4991db, _0x14d373, _0x4e6433],
        ),
        "data-univer-dnd-droppable-id": _0x4e6433,
        "data-univer-dnd-drop-disabled": String(_0x14d373),
      },
      placeholder: null,
    },
    _0x52640e = {
      isDraggingOver: !!(
        _0x4a3cb9 &&
        ((_0x15d698 = _0x4a3cb9.destination) == null
          ? undefined
          : _0x15d698.droppableId) === _0x4e6433
      ),
    };
  return _0x211556(wi.Provider, {
    value: _0x4e6433,
    children: _0x1d8e04(_0xef2b53, _0x52640e),
  });
}
function ji(_0xe58712) {
  var _0x17bf5a;
  let {
      children: _0x381e7e,
      draggableId: _0x186913,
      index: _0x4abefe,
      isDragDisabled: _0x4f0222 = false,
    } = _0xe58712,
    {
      activeDrag: _0x192229,
      startDrag: _0x351adc,
      updateDestination: _0x2a0f4d,
      endDrag: _0x2b13b9,
    } = Oi(),
    _0x10e694 = _0x53b194(wi),
    _0x1b3363 = _0x41a68e(null),
    _0x1c778d = _0x41a68e(null),
    _0x2b29e8 = _0x41a68e(false),
    _0x4f7886 = _0x41a68e(null),
    _0x3b6746 = _0x41a68e(null),
    _0x102ff6 = _0x41a68e(false),
    _0x31f7c9 = _0x41a68e(null),
    _0x2776ce = _0x41a68e(null),
    _0x28e26a = _0x41a68e(null),
    _0x565e88 = _0x144089((_0x1fe6cc) => {
      _0x1b3363.current = _0x1fe6cc;
    }, []),
    _0x53ffcc =
      (_0x192229 == null ? undefined : _0x192229.draggableId) === _0x186913,
    _0x488718 = _0x144089(() => {
      _0x3b6746.current &&= (window.clearTimeout(_0x3b6746.current), null);
    }, []),
    _0x314603 = _0x144089(() => {
      (_0x488718(),
        (_0x28e26a.current = null),
        (_0x4f7886.current &&= (_0x4f7886.current(), null)),
        (_0x31f7c9.current &&= (_0x31f7c9.current["remove"](), null)),
        (_0x2776ce.current = null),
        (_0x2b29e8.current = false));
    }, [_0x488718]);
  _0x41acdd(() => _0x314603, [_0x314603]);
  let _0x4f95ab = _0x144089((_0x2cf3ef, _0x4a5a2f) => {
      if (_0x31f7c9.current) return;
      let _0xe7d2c = _0x1b3363.current;
      if (!_0xe7d2c) return;
      let _0x3898b3 = _0xe7d2c.getBoundingClientRect(),
        _0xa635c = _0x2cf3ef > 0 ? Math.max(0, _0x2cf3ef - _0x3898b3.left) : 12,
        _0xa72d19 = _0x4a5a2f > 0 ? Math.max(0, _0x4a5a2f - _0x3898b3.top) : 12,
        _0x177510 = _0xe7d2c.cloneNode(true);
      if (!(_0x177510 instanceof HTMLDivElement)) return;
      let _0x10bb8a = _0x177510;
      ((_0x10bb8a.style["position"] = "fixed"),
        (_0x10bb8a.style["left"] = "0px"),
        (_0x10bb8a.style["top"] = "0px"),
        (_0x10bb8a.style["width"] = _0x3898b3.width + "px"),
        (_0x10bb8a.style["height"] = _0x3898b3.height + "px"),
        (_0x10bb8a.style["pointerEvents"] = "none"),
        (_0x10bb8a.style["opacity"] = "0.9"),
        (_0x10bb8a.style["zIndex"] = "2147483647"),
        (_0x10bb8a.style["boxSizing"] = "border-box"),
        (_0x10bb8a.style["transform"] =
          "translate(" +
          Math.max(0, _0x2cf3ef - _0xa635c) +
          "px, " +
          Math.max(0, _0x4a5a2f - _0xa72d19) +
          "px)"),
        document.body["appendChild"](_0x10bb8a),
        (_0x31f7c9.current = _0x10bb8a),
        (_0x2776ce.current = { x: _0xa635c, y: _0xa72d19 }));
    }, []),
    _0x569268 = _0x144089((_0x2f61f6, _0x2ccf77) => {
      let _0x137c0c = _0x31f7c9.current,
        _0x29103d = _0x2776ce.current;
      !_0x137c0c ||
        !_0x29103d ||
        (_0x137c0c.style["transform"] =
          "translate(" +
          Math.max(0, _0x2f61f6 - _0x29103d.x) +
          "px, " +
          Math.max(0, _0x2ccf77 - _0x29103d.y) +
          "px)");
    }, []),
    _0x10f3ca = _0x144089(
      (_0x5bc784, _0x12b7b5) => {
        let _0x129c1e = Ei(document.elementFromPoint(_0x5bc784, _0x12b7b5));
        if (!_0x129c1e || _0x129c1e.dataset["univerDndDropDisabled"] === "true")
          return null;
        let _0x390cd0 = _0x129c1e.dataset["univerDndDroppableId"];
        return _0x390cd0
          ? {
              droppableId: _0x390cd0,
              index: Di(
                _0x129c1e,
                _0x12b7b5,
                {
                  draggableId: _0x186913,
                  source: { droppableId: _0x10e694 ?? "", index: _0x4abefe },
                  destination: null,
                },
                _0x390cd0,
              ),
            }
          : null;
      },
      [_0x186913, _0x10e694, _0x4abefe],
    ),
    _0x5a7958 = _0x144089(
      (_0x20d4c0, _0x31d5ca, _0x5ac3d5, _0x510c2e) => {
        if (_0x2b29e8.current || _0x102ff6.current || _0x4f0222 || !_0x10e694)
          return;
        ((_0x2b29e8.current = true), _0x488718(), (_0x102ff6.current = false));
        try {
          var _0x3bef9c;
          (_0x3bef9c = _0x1b3363.current) == null ||
            _0x3bef9c.setPointerCapture(_0x31d5ca);
        } catch {}
        (_0x4f95ab(_0x5ac3d5, _0x510c2e),
          _0x351adc(_0x186913, { droppableId: _0x10e694, index: _0x4abefe }));
        let _0xb34ca1 = _0x10f3ca(_0x5ac3d5, _0x510c2e);
        _0x2a0f4d(_0xb34ca1);
        try {
          _0x20d4c0.preventDefault();
        } catch {}
      },
      [
        _0x488718,
        _0x186913,
        _0x10e694,
        _0x4abefe,
        _0x4f0222,
        _0x4f95ab,
        _0x10f3ca,
        _0x351adc,
        _0x2a0f4d,
      ],
    ),
    _0x5e920b = _0x144089(
      (_0x40aacc) => {
        if (
          _0x4f0222 ||
          !_0x10e694 ||
          (_0x40aacc.pointerType === "mouse" && _0x40aacc.button !== 0)
        )
          return;
        _0x102ff6.current = false;
        let _0x121542 = _0x40aacc.pointerId;
        ((_0x28e26a.current = {
          pointerId: _0x121542,
          pointerType: _0x40aacc.pointerType,
          startX: _0x40aacc.clientX,
          startY: _0x40aacc.clientY,
        }),
          _0x488718(),
          _0x40aacc.pointerType !== "mouse" &&
            (_0x3b6746.current = window.setTimeout(() => {
              let _0x47b192 = _0x28e26a.current;
              !_0x47b192 ||
                _0x47b192.pointerId !== _0x121542 ||
                _0x5a7958(
                  _0x40aacc.nativeEvent,
                  _0x47b192.pointerId,
                  _0x47b192.startX,
                  _0x47b192.startY,
                );
            }, 150)));
        let _0x385174 = (_0x1078cb) => {
            let _0x29a4da = _0x28e26a.current;
            if (!_0x29a4da || _0x1078cb.pointerId !== _0x29a4da.pointerId)
              return;
            if (!_0x2b29e8.current) {
              if (_0x102ff6.current) {
                _0x314603();
                return;
              }
              if (_0x29a4da.pointerType === "mouse") {
                let _0x1fee6d = _0x1078cb.clientX - _0x29a4da.startX,
                  _0x49f2d0 = _0x1078cb.clientY - _0x29a4da.startY;
                _0x1fee6d * _0x1fee6d + _0x49f2d0 * _0x49f2d0 >= 16 &&
                  _0x5a7958(
                    _0x1078cb,
                    _0x29a4da.pointerId,
                    _0x1078cb.clientX,
                    _0x1078cb.clientY,
                  );
              }
              return;
            }
            _0x569268(_0x1078cb.clientX, _0x1078cb.clientY);
            let _0x377f4d = _0x10f3ca(_0x1078cb.clientX, _0x1078cb.clientY);
            _0x2a0f4d(_0x377f4d);
            try {
              _0x1078cb.preventDefault();
            } catch {}
          },
          _0xe331c2 = (_0x45aef8) => {
            let _0x3e73e7 = _0x28e26a.current;
            if (!_0x3e73e7 || _0x45aef8.pointerId !== _0x3e73e7.pointerId)
              return;
            let _0x43872b = _0x2b29e8.current
                ? _0x10f3ca(_0x45aef8.clientX, _0x45aef8.clientY)
                : null,
              _0x505c6d = _0x2b29e8.current
                ? _0x2b13b9(_0x43872b ? "DROP" : "CANCEL", _0x43872b)
                : Promise.resolve();
            return (_0x314603(), _0x505c6d);
          };
        (window.addEventListener("pointermove", _0x385174, {
          capture: true,
          passive: false,
        }),
          window.addEventListener("pointerup", _0xe331c2, { capture: true }),
          window.addEventListener("pointercancel", _0xe331c2, {
            capture: true,
          }),
          (_0x4f7886.current = () => {
            (window.removeEventListener("pointermove", _0x385174, true),
              window.removeEventListener("pointerup", _0xe331c2, true),
              window.removeEventListener("pointercancel", _0xe331c2, true));
          }));
      },
      [
        _0x314603,
        _0x488718,
        _0x10e694,
        _0x2b13b9,
        _0x4f0222,
        _0x10f3ca,
        _0x5a7958,
        _0x2a0f4d,
        _0x569268,
      ],
    ),
    _0x50de7c = _0x144089((_0x41ed32) => {
      let _0x4f49f2 = _0x41ed32.dataTransfer;
      if (!_0x4f49f2 || typeof _0x4f49f2.setDragImage != "function") return;
      let _0x2df1f = _0x41ed32.currentTarget,
        _0x12d054 = _0x2df1f.cloneNode(true);
      if (!(_0x12d054 instanceof HTMLDivElement)) return;
      let _0x11f991 = _0x12d054;
      ((_0x11f991.style["position"] = "fixed"),
        (_0x11f991.style["left"] = "-9999px"),
        (_0x11f991.style["top"] = "-9999px"),
        (_0x11f991.style["width"] =
          _0x2df1f.getBoundingClientRect().width + "px"),
        (_0x11f991.style["pointerEvents"] = "none"),
        (_0x11f991.style["opacity"] = "0.95"),
        (_0x11f991.style["zIndex"] = "2147483647"),
        document.body["appendChild"](_0x11f991));
      let _0x105638 = _0x2df1f.getBoundingClientRect(),
        _0x5604a3 =
          _0x41ed32.clientX > 0
            ? Math.max(0, _0x41ed32.clientX - _0x105638.left)
            : 12,
        _0x4f39cb =
          _0x41ed32.clientY > 0
            ? Math.max(0, _0x41ed32.clientY - _0x105638.top)
            : 12;
      (_0x4f49f2.setDragImage(_0x11f991, _0x5604a3, _0x4f39cb),
        _0x1c778d.current &&
          _0x1c778d.current !== _0x11f991 &&
          _0x1c778d.current["remove"](),
        (_0x1c778d.current = _0x11f991));
    }, []),
    _0x536359 = _0x144089(
      (_0x32b692) => {
        if (_0x2b29e8.current) {
          _0x32b692.preventDefault();
          return;
        }
        if (_0x4f0222 || !_0x10e694) {
          _0x32b692.preventDefault();
          return;
        }
        ((_0x102ff6.current = true),
          _0x488718(),
          (_0x28e26a.current = null),
          (_0x4f7886.current &&= (_0x4f7886.current(), null)));
        let _0x182010 = _0x32b692.dataTransfer;
        if (_0x182010) {
          try {
            _0x182010.effectAllowed = "move";
          } catch {}
          try {
            _0x182010.setData("text/plain", _0x186913);
          } catch {}
        }
        try {
          _0x50de7c(_0x32b692);
        } catch {}
        _0x351adc(_0x186913, { droppableId: _0x10e694, index: _0x4abefe });
      },
      [
        _0x50de7c,
        _0x488718,
        _0x186913,
        _0x10e694,
        _0x4abefe,
        _0x4f0222,
        _0x351adc,
      ],
    ),
    _0x389fcf = _0x144089(
      () => (
        (_0x1c778d.current &&= (_0x1c778d.current["remove"](), null)),
        _0x2b13b9("CANCEL", null)
      ),
      [_0x2b13b9],
    );
  return _0x381e7e(
    {
      innerRef: _0x565e88,
      draggableProps: {
        draggable: !_0x4f0222,
        onDragStart: _0x536359,
        onDragEnd: _0x389fcf,
        style: _0x53ffcc ? { opacity: 1 } : undefined,
        "data-univer-dnd-item": "true",
        "data-univer-dnd-id": _0x186913,
        "data-univer-dnd-index": String(_0x4abefe),
      },
      dragHandleProps: { onPointerDown: _0x5e920b },
    },
    {
      isDragging: _0x53ffcc,
      draggingOver:
        _0x192229 == null || (_0x17bf5a = _0x192229.destination) == null
          ? undefined
          : _0x17bf5a.droppableId,
    },
  );
}
function Mi(_0x2a11c9, _0x4a4453) {
  switch (_0x2a11c9) {
    case "filter":
      return _0x4a4453.t("sheets-pivot-ui.filter");
    case "row":
      return _0x4a4453.t("sheets-pivot-ui.row");
    case "column":
      return _0x4a4453.t("sheets-pivot-ui.column");
    case "value":
      return _0x4a4453.t("sheets-pivot-ui.value");
  }
}
function Ni(_0x523f5b) {
  switch (_0x523f5b) {
    case "filter":
      return _0x211556(_0x281fda, {
        className: "univer-flex univer-flex-row univer-gap-4",
      });
    case "row":
      return _0x211556(_0x2043e7, {
        className: "univer-flex univer-flex-row univer-gap-4",
      });
    case "column":
      return _0x211556(_0x3bcbdd, {
        className: "univer-flex univer-flex-row univer-gap-4",
      });
    case "value":
      return _0x211556(_0x1a0b44, {
        className: "univer-flex univer-flex-row univer-gap-4",
      });
  }
}
function Pi(_0x3c595b) {
  switch (_0x3c595b) {
    case "filter":
      return _0x44caca("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [
          _0x211556("path", {
            d: "M4.99957 1.875C2.84556 1.875 1.67491 4.3932 3.06336 6.04001L11.5946 16.1587V26.4187C11.5946 27.4582 12.2298 28.3922 13.1966 28.7741L16.1601 29.9449C17.8221 30.6015 19.6232 29.3766 19.6232 27.5895V16.1587L28.1544 6.04C29.5428 4.3932 28.3722 1.875 26.2182 1.875H4.99957Z",
            fill: "#ECECEC",
          }),
          _0x211556("rect", {
            x: "21.9404",
            y: "17.8544",
            width: "7.59766",
            height: "2.2793",
            rx: "1.13965",
            fill: "#274FEE",
          }),
          _0x211556("rect", {
            x: "21.9404",
            y: "21.9067",
            width: "7.59766",
            height: "2.2793",
            rx: "1.13965",
            fill: "#274FEE",
          }),
          _0x211556("rect", {
            x: "21.9404",
            y: "25.959",
            width: "7.59766",
            height: "2.2793",
            rx: "1.13965",
            fill: "#274FEE",
          }),
        ],
      });
    case "row":
      return _0x44caca("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [
          _0x211556("path", {
            d: "M2 12.3661C2 12.0347 2.26863 11.7661 2.6 11.7661H9.24705C9.57842 11.7661 9.84705 12.0347 9.84705 12.3661V29.278C9.84705 29.6093 9.57842 29.878 9.24705 29.878H4C2.89543 29.878 2 28.9825 2 27.878V12.3661Z",
            fill: "#D8D8D8",
          }),
          _0x211556("path", {
            d: "M2\x204.0863C2\x202.98173\x202.89543\x202.0863\x204\x202.0863H9.24705C9.57842\x202.0863\x209.84705\x202.35493\x209.84705\x202.6863V8.73981C9.84705\x209.07118\x209.57842\x209.33981\x209.24705\x209.33981H2.6C2.26863\x209.33981\x202\x209.07118\x202\x208.73981V4.0863Z",
            fill: "#D8D8D8",
          }),
          _0x211556("path", {
            d: "M12.2983 12.4011C12.2982 12.0697 12.5669 11.8009 12.8983 11.8009L29.3931 11.8009C29.7243 11.8009 29.9929 12.0694 29.9931 12.4007L29.9993 27.9129C29.9997 29.0178 29.1042 29.9137 27.9993 29.9137H12.9051C12.5738 29.9137 12.3053 29.6452 12.3051 29.314L12.2983 12.4011Z",
            fill: "#ECECEC",
          }),
          _0x211556("path", {
            d: "M12.2517 2.6863C12.2517 2.35493 12.5203 2.0863 12.8517 2.0863H27.9582C29.0628 2.0863 29.9582 2.98173 29.9582 4.0863V8.73627C29.9582 9.06764 29.6896 9.33627 29.3582 9.33627H12.8517C12.5203 9.33627 12.2517 9.06764 12.2517 8.73627L12.2517 2.6863Z",
            fill: "#274FEE",
          }),
        ],
      });
    case "column":
      return _0x44caca("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [
          _0x211556("path", {
            d: "M2\x2012.3661C2\x2012.0347\x202.26863\x2011.7661\x202.6\x2011.7661H9.24705C9.57842\x2011.7661\x209.84705\x2012.0347\x209.84705\x2012.3661V29.278C9.84705\x2029.6093\x209.57842\x2029.878\x209.24705\x2029.878H4C2.89543\x2029.878\x202\x2028.9825\x202\x2027.878V12.3661Z",
            fill: "#274FEE",
          }),
          _0x211556("path", {
            d: "M2 4.0863C2 2.98173 2.89543 2.0863 4 2.0863H9.24705C9.57842 2.0863 9.84705 2.35493 9.84705 2.6863V8.73981C9.84705 9.07118 9.57842 9.33981 9.24705 9.33981H2.6C2.26863 9.33981 2 9.07118 2 8.73981V4.0863Z",
            fill: "#D8D8D8",
          }),
          _0x211556("path", {
            d: "M12.2637 2.6863C12.2637 2.35493 12.5323 2.0863 12.8637 2.0863H27.9702C29.0748 2.0863 29.9702 2.98173 29.9702 4.0863V8.73627C29.9702 9.06764 29.7016 9.33627 29.3702 9.33627H12.8637C12.5323 9.33627 12.2637 9.06764 12.2637 8.73627L12.2637 2.6863Z",
            fill: "#D8D8D8",
          }),
          _0x211556("path", {
            d: "M12.2982 12.4011C12.2981 12.0697 12.5667 11.8009 12.8982 11.8009L29.3929 11.8009C29.7242 11.8009 29.9928 12.0694 29.9929 12.4007L29.9992 27.9129C29.9996 29.0178 29.104 29.9137 27.9992 29.9137H12.905C12.5737 29.9137 12.3051 29.6452 12.305 29.314L12.2982 12.4011Z",
            fill: "#ECECEC",
          }),
        ],
      });
    case "value":
      return _0x44caca("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        children: [
          _0x211556("path", {
            d: "M2 12.3661C2 12.0347 2.26863 11.7661 2.6 11.7661H9.24705C9.57842 11.7661 9.84705 12.0347 9.84705 12.3661V29.278C9.84705 29.6093 9.57842 29.878 9.24705 29.878H4C2.89543 29.878 2 28.9825 2 27.878V12.3661Z",
            fill: "#D8D8D8",
          }),
          _0x211556("path", {
            d: "M2 4.0863C2 2.98173 2.89543 2.0863 4 2.0863H9.24705C9.57842 2.0863 9.84705 2.35493 9.84705 2.6863V8.73981C9.84705 9.07118 9.57842 9.33981 9.24705 9.33981H2.6C2.26863 9.33981 2 9.07118 2 8.73981V4.0863Z",
            fill: "#D8D8D8",
          }),
          _0x211556("path", {
            d: "M12.2637 2.6863C12.2637 2.35493 12.5323 2.0863 12.8637 2.0863H27.9702C29.0748 2.0863 29.9702 2.98173 29.9702 4.0863V8.73627C29.9702 9.06764 29.7016 9.33627 29.3702 9.33627H12.8637C12.5323 9.33627 12.2637 9.06764 12.2637 8.73627L12.2637 2.6863Z",
            fill: "#D8D8D8",
          }),
          _0x211556("path", {
            d: "M12.2982 12.4011C12.2981 12.0697 12.5667 11.8009 12.8982 11.8009L29.3929 11.8009C29.7242 11.8009 29.9928 12.0694 29.9929 12.4007L29.9992 27.9129C29.9996 29.0178 29.104 29.9137 27.9992 29.9137H12.905C12.5737 29.9137 12.3051 29.6452 12.305 29.314L12.2982 12.4011Z",
            fill: "#274FEE",
          }),
        ],
      });
  }
}
function Fi(_0xe43ab7, _0x1de853) {
  switch (_0xe43ab7) {
    case "filter":
      return _0x1de853.t("sheets-pivot-ui.filterDesc");
    case "row":
      return _0x1de853.t("sheets-pivot-ui.rowDesc");
    case "column":
      return _0x1de853.t("sheets-pivot-ui.columnDesc");
    case "value":
      return _0x1de853.t("sheets-pivot-ui.valueDesc");
  }
}
function Ii(_0x5560c1) {
  let _0x1d8a8d = _0x473eb2(_0x21b801),
    { areaType: _0x1c400f } = _0x5560c1,
    _0x15723b = Fi(_0x1c400f, _0x1d8a8d);
  return _0x44caca("div", {
    className:
      "univer-flex univer-h-[140px] univer-flex-col univer-items-center univer-justify-center univer-gap-1 univer-self-stretch univer-px-2",
    children: [
      _0x211556("div", { className: "univer-size-8", children: Pi(_0x1c400f) }),
      _0x211556("div", {
        className:
          "univer-text-center univer-text-xs univer-leading-4 univer-text-gray-600 dark:!univer-text-gray-200",
        children: _0x15723b,
      }),
    ],
  });
}
function Li(_0x50f2a4) {
  let {
      areaType: _0x32f28d,
      items: _0x4058e3,
      positionInfo: _0x1f6a2d,
      pivotTableId: _0x46920c,
      pivotTableInfo: _0x3b39dc,
    } = _0x50f2a4,
    _0x394c2f = _0x473eb2(_0x21b801);
  return _0x44caca("div", {
    className: "univer-min-h-[200px] univer-flex-1 univer-p-1",
    children: [
      _0x44caca("div", {
        className:
          "univer-mb-2 univer-mt-0 univer-flex univer-w-full univer-text-sm univer-leading-4 univer-text-gray-900",
        children: [
          Ni(_0x32f28d),
          _0x211556("span", {
            className: "univer-inline-block\x20univer-align-top",
            children: Mi(_0x32f28d, _0x394c2f),
          }),
        ],
      }),
      _0x211556(Ai, {
        droppableId: "" + _0x32f28d,
        isCombineEnabled: false,
        isDropDisabled: false,
        ignoreContainerClipping: false,
        direction: "vertical",
        children: (_0x529b3d, _0x4e3cef) =>
          _0x211556("div", {
            className: _0x37c9a5(
              "univer-box-border univer-h-[161px] univer-w-full univer-flex-col univer-items-center univer-justify-center univer-overflow-x-hidden univer-rounded-lg univer-bg-gray-50 univer-py-2 dark:!univer-bg-gray-900",
              _0x4dca92,
              { "univer-border-primary-600": _0x4e3cef.isDraggingOver },
            ),
            children: _0x211556("div", {
              className: _0x37c9a5(
                "univer-h-full univer-overflow-y-auto",
                _0x147e92,
              ),
              children: _0x44caca("div", {
                ref: _0x529b3d.innerRef,
                className: "univer-box-border\x20univer-h-full\x20univer-px-2",
                ..._0x529b3d.droppableProps,
                children: [
                  _0x4058e3.length > 0 &&
                    _0x4058e3.map((_0x3383f3, _0x9b5c8) =>
                      _0x211556(
                        "div",
                        {
                          children: _0x211556(
                            ji,
                            {
                              isDragDisabled: false,
                              draggableId: _0x3383f3.tableFieldId,
                              index: _0x9b5c8,
                              children: (_0x4c8a6b, _0x1a0d1e) =>
                                _0x211556(_0x947289, {
                                  children: _0x211556("div", {
                                    ref: _0x4c8a6b.innerRef,
                                    ..._0x4c8a6b.draggableProps,
                                    ..._0x4c8a6b.dragHandleProps,
                                    style: _0x4c8a6b.draggableProps["style"],
                                    className: _0x37c9a5(
                                      "univer-flex univer-items-center univer-gap-1 univer-self-stretch univer-border univer-border-transparent univer-p-0.5 univer-leading-4 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
                                      _0x1a0d1e.draggingOver &&
                                        "univer-border-primary-600",
                                    ),
                                    children: _0x211556(Ri, {
                                      pivotTableId: _0x46920c,
                                      positionInfo: _0x1f6a2d,
                                      item: _0x3383f3,
                                      areaType: _0x32f28d,
                                      pivotTableInfo: _0x3b39dc,
                                    }),
                                  }),
                                }),
                            },
                            _0x3383f3.tableFieldId,
                          ),
                        },
                        _0x3383f3.tableFieldId,
                      ),
                    ),
                  _0x4058e3.length === 0 &&
                    _0x211556(Ii, { areaType: _0x32f28d }),
                ],
              }),
            }),
          }),
      }),
    ],
  });
}
function Ri(_0x2dce74) {
  let {
      areaType: _0x299c03,
      item: _0x35f286,
      positionInfo: _0x1304f0,
      pivotTableId: _0x584728,
      pivotTableInfo: _0x2b07e2,
    } = _0x2dce74,
    { unitId: _0x5b0f27, subUnitId: _0x393834 } = _0x1304f0,
    _0x5b4d8b = _0x35f286.tableFieldId === Gn,
    _0x3e277f = _0x473eb2(_0x5c53fb),
    _0x187668 = _0x473eb2(_0x21b801),
    _0x17c00f = () => {
      if (_0x5b4d8b) {
        let _0x3f9dd9 = (_0x2b07e2.valueFields || []).map(
          (_0x2ec53d) => _0x2ec53d.tableFieldId,
        );
        er(
          {
            pivotTableId: _0x584728,
            unitId: _0x5b0f27,
            subUnitId: _0x393834,
            commandService: _0x3e277f,
          },
          _0x3f9dd9,
        );
      } else
        er(
          {
            pivotTableId: _0x584728,
            unitId: _0x5b0f27,
            subUnitId: _0x393834,
            commandService: _0x3e277f,
          },
          [_0x35f286.tableFieldId],
        );
    },
    _0x372542 = () => {
      !_0x5b0f27 ||
        !_0x393834 ||
        rr(_0x3e277f, _0x5b0f27, _0x393834, _0x584728, _0x35f286.tableFieldId);
    },
    _0x1f4e2e = () => {
      !_0x5b0f27 ||
        !_0x393834 ||
        ir(
          _0x3e277f,
          _0x584728,
          _0x35f286.tableFieldId,
          _0x5b0f27,
          _0x393834,
          _0x2b07e2,
        );
    },
    _0x1ec920 = (_0x2922eb) => {
      let _0x2d2d4d = _0x2922eb === "column" ? _0x4b4afe.Row : _0x4b4afe.Column,
        _0x452e2f =
          _0x2922eb === "column"
            ? _0x2b07e2.rowFields["length"]
            : _0x2b07e2.columnFields["length"];
      tr(
        {
          pivotTableId: _0x584728,
          unitId: _0x5b0f27,
          subUnitId: _0x393834,
          commandService: _0x3e277f,
        },
        _0x2d2d4d,
        _0x452e2f,
      );
    },
    _0x2934c3 = _0x44caca("div", {
      className:
        "univer-inline-flex univer-flex-col univer-rounded-lg univer-border univer-border-gray-200 univer-bg-gray-0 univer-p-2 univer-shadow-lg",
      children: [
        _0x211556("div", {
          className:
            "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-self-stretch\x20univer-px-2\x20univer-py-1.5\x20univer-text-sm\x20univer-leading-5\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
          onClick: () => {
            _0x17c00f();
          },
          children: _0x187668.t("sheets-pivot-ui.removeField"),
        }),
        _0x299c03 !== "value" &&
          !_0x5b4d8b &&
          _0x211556("div", {
            className:
              "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 dark:!univer-text-gray-0",
            onClick: () => {
              _0x372542();
            },
            children: _0x187668.t("sheets-pivot-ui.filterField"),
          }),
        _0x5b4d8b &&
          _0x211556("div", {
            className:
              "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-self-stretch\x20univer-px-2\x20univer-py-1.5\x20univer-text-sm\x20univer-leading-5\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
            onClick: () => {
              _0x1ec920(_0x299c03);
            },
            children:
              _0x299c03 === "column"
                ? _0x187668.t("sheets-pivot-ui.moveToRow")
                : _0x187668.t("sheets-pivot-ui.moveToColumn"),
          }),
        _0x299c03 === "value" &&
          _0x211556("div", {
            className:
              "univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-self-stretch\x20univer-px-2\x20univer-py-1.5\x20univer-text-sm\x20univer-leading-5\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
            onClick: () => {
              _0x1f4e2e();
            },
            children: _0x187668.t("sheets-pivot-ui.fieldSettings"),
          }),
      ],
    }),
    _0x763a32 = _0x211556("bdi", {
      dir: "auto",
      children: _0x5b4d8b
        ? _0x187668.t("sheets-pivot-ui.multipleValue")
        : _0x35f286.displayName,
    });
  return _0x44caca(_0x947289, {
    children: [
      _0x211556(_0x23e263, {}),
      _0x211556("div", {
        className:
          "univer-max-w-[66px] univer-flex-1 univer-shrink-0 univer-truncate univer-text-xs univer-leading-4 univer-text-gray-800 dark:!univer-text-gray-100",
        children: _0x211556(_0x4dd9b6, {
          title: _0x763a32,
          children: _0x763a32,
        }),
      }),
      _0x211556("div", {
        className: "univer-cursor-pointer",
        children: _0x211556(_0x5d93ad, {
          align: "end",
          overlay: _0x2934c3,
          children: _0x211556("span", { children: _0x211556(_0x455b1f, {}) }),
        }),
      }),
    ],
  });
}
function zi(_0x1ccd09) {
  var _0x34709b;
  let _0x100101 = _0x473eb2(_0x4a41b2),
    _0x3f57fb = _0x473eb2(_0x21b801),
    _0x1bb8c1 = _0x473eb2(_0x5c53fb),
    _0x2a9238 = _0x473eb2(zn),
    {
      sourceRangeInfo: _0xe9e9e8,
      refreshHandler: _0x432667,
      pivotTableId: _0x10a631,
      positionInfo: _0x95dd4a,
    } = _0x1ccd09,
    { unitId: _0x5c61dc, range: _0x1e8621, subUnitId: _0x59a532 } = _0xe9e9e8,
    _0x413158 = _0x100101.getUnit(_0x5c61dc),
    _0x4aa5df =
      (_0x413158 == null ||
      (_0x34709b = _0x413158.getSheetBySheetId(_0x59a532)) == null
        ? undefined
        : _0x34709b.getName()) ?? "",
    [_0x4e463f, _0x1e61ac] = _0x4b7ac9(undefined),
    _0x56b43b = _0x41a68e(_0x4e463f);
  _0x56b43b.current = _0x4e463f;
  let [_0x9eaae1, _0x584788] = _0x4b7ac9(_0x1e8621),
    [_0x56ad34, _0x26c1e6] = _0x4b7ac9(_0x4aa5df),
    [_0x51ebac, _0x34eff1] = _0x4b7ac9(false);
  (_0x41acdd(() => {
    _0x2a9238.setIsRangeSelectorFocus(_0x51ebac);
  }, [_0x51ebac, _0x2a9238]),
    _0x41acdd(() => {
      (_0x584788(_0xe9e9e8.range), _0x26c1e6(_0x4aa5df));
    }, [_0xe9e9e8, _0x4aa5df]));
  let _0x14dcb7 = _0x3f1f87(
    () =>
      _0x5f59f1(
        async (_0x48c28a) => {
          let _0x348ce3 = _0x48c28a
            .split(",")
            .filter((_0x2d06ec) => !!_0x2d06ec)
            .map(_0x124f11);
          if (!_0x348ce3[0]) return;
          let _0x2f0436 = _0x348ce3[0];
          if (!_0x413158 || _0x56b43b.current) return;
          let _0x902e11 = _0x2f0436.sheetName || _0xe9e9e8.sheetName;
          (_0x584788(_0x2f0436.range), _0x26c1e6(_0x902e11));
          let _0xedf5ba = {
            unitId: _0x5c61dc,
            subUnitId: _0x413158.getSheetBySheetName(_0x902e11).getSheetId(),
            range: { ..._0x2f0436.range },
            sheetName: _0x902e11,
          };
          (await Zn(
            _0x1bb8c1,
            _0x10a631,
            _0xedf5ba,
            _0x95dd4a.unitId,
            _0x95dd4a.subUnitId,
          ),
            _0x432667());
        },
        300,
        { leading: false, maxWait: 1000, trailing: true },
      ),
    [],
  );
  return _0x44caca("div", {
    className: "univer-mb-4",
    children: [
      _0x44caca("div", {
        className:
          "univer-mb-2 univer-flex univer-h-5 univer-justify-between univer-text-sm univer-leading-5",
        children: [
          _0x211556("span", {
            className:
              "univer-text-justify\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
            children: _0x3f57fb.t("sheets-pivot-ui.sourceRangeLabel"),
          }),
          _0x211556("span", {
            className:
              "univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
            children: _0x3f57fb.t("sheets-pivot-ui.sourceRangePlaceholder"),
          }),
        ],
      }),
      _0x44caca("div", {
        className: "univer-relative",
        children: [
          _0x211556(_0x16cbba, {
            unitId: _0x5c61dc,
            subUnitId: _0x59a532,
            initialValue: _0x121c3b(_0x56ad34, _0x9eaae1),
            onChange: (_0x38d69c, _0x482b4a) => {
              _0x121c3b(_0x56ad34, _0x9eaae1) !== _0x482b4a &&
                _0x14dcb7(_0x482b4a);
            },
            keepSheetReference: true,
            supportAcrossSheet: true,
            onVerify: (_0x48d362, _0x104cf8) => {
              let _0x347e38 = _0x104cf8
                .split(",")
                .filter((_0x18023f) => !!_0x18023f);
              if (!_0x347e38[0]) {
                _0x1e61ac(_0x3f57fb.t("sheets-pivot-ui.msg.emptySourceRange"));
                return;
              }
              if (!_0x48d362) {
                _0x1e61ac(_0x3f57fb.t("sheets-pivot-ui.msg.invalidSize"));
                return;
              }
              let _0x59965d = _0x124f11(_0x347e38[0]),
                _0x163175 = _0x59965d.sheetName || _0xe9e9e8.sheetName;
              if (_0x413158)
                switch (
                  Yn(_0x413158.getSheetBySheetName(_0x163175), _0x59965d.range)
                ) {
                  case 2:
                    _0x1e61ac(undefined);
                    break;
                  case 0:
                    _0x1e61ac(
                      _0x3f57fb.t("sheets-pivot-ui.msg.emptySourceRange"),
                    );
                    break;
                  case 1:
                    _0x1e61ac(_0x3f57fb.t("sheets-pivot-ui.msg.invalidSize"));
                    break;
                }
            },
            maxRangeCount: 1,
            onFocusChange: (_0x525e94) => {
              _0x34eff1(_0x525e94);
            },
            onRangeSelectorDialogVisibleChange: (_0x523fbe) => {
              _0x34eff1(!!_0x523fbe);
            },
          }),
          _0x4e463f
            ? _0x211556("div", {
                className: "univer-my-1 univer-text-xs univer-text-red-500",
                children: _0x4e463f,
              })
            : null,
        ],
      }),
    ],
  });
}
function Bi(_0x24565d) {
  let { type: _0x184de4 } = _0x24565d;
  switch (_0x184de4) {
    case _0x3add37.text:
      return _0x211556(_0x1abe08, {
        className:
          "univer-mx-1.5 univer-my-0 univer-h-4 univer-text-xs univer-text-gray-200 dark:!univer-text-gray-600",
      });
    case _0x3add37.number:
      return _0x211556(_0x2f31ee, {
        className:
          "univer-mx-1.5 univer-my-0 univer-h-4 univer-text-xs univer-text-gray-200 dark:!univer-text-gray-600",
      });
    case _0x3add37.date:
      return _0x211556(_0x5de6e0, {
        className:
          "univer-mx-1.5 univer-my-0 univer-h-4 univer-text-xs univer-text-gray-200 dark:!univer-text-gray-600",
      });
  }
}
function Vi(_0x240178) {
  let {
      name: _0xe2864c,
      dataFieldId: _0x3d7316,
      checked: _0x13d194,
      type: _0x272d67,
      refreshHandler: _0x582261,
      pivotTableId: _0xf1f52d,
      draggingId: _0x4f9ffb,
      pivotTableInfo: _0x26bbc3,
      unitId: _0x528424,
      subUnitId: _0x1041f9,
    } = _0x240178,
    [_0x4c5418, _0xf49d5] = _0x4b7ac9(false),
    _0x326bf4 = _0x473eb2(_0x5c53fb),
    _0x45b615 = _0x473eb2(_0x21b801);
  if (!_0x26bbc3) return null;
  let {
      rowFields: _0x3f6ded,
      columnFields: _0x1ae93b,
      filterFields: _0x3333ca,
      valueFields: _0x314e87,
    } = _0x26bbc3,
    _0x2ed18e = [..._0x3f6ded, ..._0x1ae93b, ..._0x3333ca, ..._0x314e87],
    _0x3dcb21 = async (_0x236df8) => {
      let _0x346ec0 = !!_0x236df8,
        _0x242627 = false;
      if (_0x346ec0) {
        let _0x520ea2 = {
          pivotTableId: _0xf1f52d,
          dataFieldId: _0x3d7316,
          fieldArea:
            _0x272d67 === _0x3add37.number ? _0x487c30.Value : _0x487c30.Row,
          unitId: _0x528424,
          subUnitId: _0x1041f9,
          index:
            _0x272d67 === _0x3add37.number
              ? _0x314e87.length
              : _0x3f6ded.length,
        };
        _0x242627 = await _0x326bf4.executeCommand(_0x5007d3.id, _0x520ea2);
      } else {
        let _0x1ebe42 = [];
        (_0x2ed18e.forEach((_0x86437e) => {
          _0x86437e.dataFieldId === _0x3d7316 &&
            _0x1ebe42.push(_0x86437e.tableFieldId);
        }),
          (_0x242627 = await _0x326bf4.executeCommand(_0x40504d.id, {
            pivotTableId: _0xf1f52d,
            fieldIds: _0x1ebe42,
            unitId: _0x528424,
            subUnitId: _0x1041f9,
          })));
      }
      _0x242627 && _0x582261();
    },
    _0x33ab03 = async (_0x329a87) => {
      let _0x223117 = false,
        _0x53d211 = "";
      if (
        ([..._0x3f6ded, ..._0x1ae93b, ..._0x3333ca].forEach((_0x4fdaed) => {
          _0x4fdaed.dataFieldId === _0x3d7316 &&
            ((_0x223117 = true), (_0x53d211 = _0x4fdaed.tableFieldId));
        }),
        _0x223117 && _0x329a87 !== _0x487c30.Value)
      ) {
        if (_0xf1f52d) {
          let _0x61b7a7 = _r(_0x26bbc3, _0x329a87),
            _0x4fa5af = {
              pivotTableId: _0xf1f52d,
              area: _0x329a87,
              index: _0x61b7a7,
              fieldId: _0x53d211,
              unitId: _0x528424,
              subUnitId: _0x1041f9,
            };
          (await _0x326bf4.executeCommand(_0x415706.id, _0x4fa5af)) &&
            _0x582261();
        }
      } else {
        if (_0xf1f52d) {
          let _0x446739 = {
            pivotTableId: _0xf1f52d,
            dataFieldId: _0x3d7316,
            fieldArea: _0x329a87,
            unitId: _0x528424,
            subUnitId: _0x1041f9,
            index: _r(_0x26bbc3, _0x329a87),
          };
          (await _0x326bf4.executeCommand(_0x5007d3.id, _0x446739)) &&
            _0x582261();
        }
      }
    };
  return _0x44caca(
    "div",
    {
      className: _0x37c9a5(
        "univer-group univer-relative univer-box-border univer-flex univer-h-8 univer-w-full univer-flex-row univer-items-center univer-rounded-md univer-px-1 univer-py-2 univer-leading-4 univer-transition-all hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
        {
          "univer-flex\x20univer-bg-gray-100\x20dark:!univer-bg-gray-700":
            _0x4f9ffb === _0x3d7316,
        },
      ),
      id: "source-" + _0x3d7316,
      onContextMenu: (_0x45baeb) => {
        (_0x45baeb.preventDefault(), _0xf49d5(true));
      },
      children: [
        _0x211556("span", {
          className: "univer-mr-2 univer-w-4 rtl:univer-ml-2 rtl:univer-mr-0",
          children: _0x211556(_0x23e263, {}),
        }),
        _0x211556(_0x5ae922, {
          className: "univer-w-[14px] univer-text-sm univer-text-gray-200",
          checked: _0x13d194,
          onChange: _0x3dcb21,
        }),
        _0x44caca("div", {
          className:
            "univer-flex univer-min-w-0 univer-flex-1 univer-items-center univer-text-xs univer-leading-4 univer-text-gray-900 dark:!univer-text-gray-0",
          children: [
            _0x211556(Bi, { type: _0x272d67 }),
            _0x211556("span", {
              className: "univer-truncate",
              children: _0xe2864c,
            }),
          ],
        }),
        _0x211556(_0x5d93ad, {
          align: "end",
          side: "bottom",
          open: _0x4c5418,
          onOpenChange: _0xf49d5,
          overlay: _0x44caca("div", {
            children: [
              _0x211556("div", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
                onClick: () => {
                  (_0xf49d5(false), _0x33ab03(_0x487c30.Row));
                },
                children: _0x45b615.t("sheets-pivot-ui.addToRow"),
              }),
              _0x211556("div", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
                onClick: () => {
                  (_0xf49d5(false), _0x33ab03(_0x487c30.Column));
                },
                children: _0x45b615.t("sheets-pivot-ui.addToColumn"),
              }),
              _0x211556("div", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
                onClick: () => {
                  (_0xf49d5(false), _0x33ab03(_0x487c30.Value));
                },
                children: _0x45b615.t("sheets-pivot-ui.addToValue"),
              }),
              _0x211556("div", {
                className:
                  "univer-flex univer-cursor-pointer univer-items-center univer-self-stretch univer-px-2 univer-py-1.5 univer-text-sm univer-leading-5 univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
                onClick: () => {
                  (_0xf49d5(false), _0x33ab03(_0x487c30.Filter));
                },
                children: _0x45b615.t("sheets-pivot-ui.addToFilter"),
              }),
            ],
          }),
          children: _0x211556("div", {
            className: _0x37c9a5(
              "univer-ml-1 univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-md univer-transition-opacity hover:univer-bg-gray-200 rtl:univer-ml-0 rtl:univer-mr-1 dark:hover:!univer-bg-gray-700",
              {
                "univer-opacity-100": _0x4c5418,
                "univer-opacity-0\x20group-hover:univer-opacity-100":
                  !_0x4c5418,
              },
            ),
            onMouseDown: (_0x5b9734) => _0x5b9734.stopPropagation(),
            onClick: (_0x17bd57) => _0x17bd57.stopPropagation(),
            children: _0x211556(_0x5dc689, {
              className: "univer-text-gray-400\x20dark:!univer-text-gray-500",
            }),
          }),
        }),
      ],
    },
    _0x3d7316,
  );
}
function Hi(_0x291104) {
  let {
      sourceList: _0x11b89b,
      refreshHandler: _0x1701db,
      pivotTableId: _0x281b21,
      pivotTableInfo: _0x1f1108,
      unitId: _0x23e962,
      draggingId: _0x393cce,
      subUnitId: _0x526efc,
    } = _0x291104,
    _0x7643ce = _0x473eb2(_0x21b801),
    [_0x4ba1ae, _0x407116] = _0x4b7ac9(""),
    _0x20289a = _0x4ba1ae.trim().toLocaleLowerCase(),
    _0x5d834b = _0x20289a
      ? _0x11b89b.filter((_0x1b0dfa) =>
          _0x1b0dfa.name["toLocaleLowerCase"]().includes(_0x20289a),
        )
      : _0x11b89b;
  return _0x44caca("div", {
    className:
      "univer-mb-4 univer-flex univer-min-h-0 univer-flex-1 univer-flex-col",
    children: [
      _0x211556("p", {
        className:
          "univer-mb-1 univer-mt-0 univer-text-sm univer-font-medium univer-leading-5 univer-text-gray-900 dark:!univer-text-gray-0",
        children: _0x7643ce.t("sheets-pivot-ui.sourceFieldTile"),
      }),
      _0x211556("p", {
        className:
          "univer-mb-2 univer-mt-0 univer-text-xs univer-leading-4 univer-text-gray-600 dark:!univer-text-gray-200",
        children: _0x7643ce.t("sheets-pivot-ui.sourceFieldDescription"),
      }),
      _0x211556(_0x989aa5, {
        allowClear: true,
        className: "univer-mb-2",
        placeholder: _0x7643ce.t("sheets-pivot-ui.searchFieldPlaceholder"),
        slot: _0x211556(_0x59db09, {}),
        value: _0x4ba1ae,
        onChange: _0x407116,
      }),
      _0x211556("div", {
        className: _0x37c9a5(
          "univer-box-border univer-min-h-0 univer-flex-1 univer-rounded-lg univer-bg-gray-0 univer-p-2 dark:!univer-bg-gray-900",
          _0x4dca92,
        ),
        children: _0x211556("div", {
          className: _0x37c9a5(
            "univer-relative univer-h-full univer-overflow-y-auto",
            _0x147e92,
          ),
          "data-testid": "pivot-source-field-viewport",
          children: _0x211556(Ai, {
            droppableId: "source",
            direction: "vertical",
            isCombineEnabled: false,
            ignoreContainerClipping: false,
            isDropDisabled: true,
            children: (_0x3deb1d) =>
              _0x44caca("div", {
                ref: _0x3deb1d.innerRef,
                className: "univer-box-border univer-h-full univer-px-2",
                ..._0x3deb1d.droppableProps,
                children: [
                  _0x5d834b.map((_0xf5836d, _0x47a528) =>
                    _0x211556(
                      "div",
                      {
                        className:
                          "univer-relative univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-1 univer-self-stretch univer-border univer-border-transparent univer-p-0.5 univer-leading-4 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
                        children: _0x211556(
                          ji,
                          {
                            draggableId: _0xf5836d.id,
                            isDragDisabled: false,
                            index: _0x47a528,
                            children: ({
                              innerRef: _0x25f180,
                              draggableProps: _0x5761a6,
                              dragHandleProps: _0x2c4396,
                            }) =>
                              _0x211556("div", {
                                ref: _0x25f180,
                                ..._0x5761a6,
                                ..._0x2c4396,
                                className: "univer-h-8 univer-w-full",
                                style: _0x5761a6.style,
                                children: _0x211556(Vi, {
                                  draggingId: _0x393cce,
                                  unitId: _0x23e962,
                                  subUnitId: _0x526efc,
                                  ..._0xf5836d,
                                  refreshHandler: _0x1701db,
                                  pivotTableId: _0x281b21,
                                  pivotTableInfo: _0x1f1108,
                                }),
                              }),
                          },
                          _0xf5836d.id,
                        ),
                      },
                      _0xf5836d.id,
                    ),
                  ),
                  _0x5d834b.length === 0 &&
                    _0x211556("div", {
                      className:
                        "univer-py-4 univer-text-center univer-text-xs univer-text-gray-500",
                      children: _0x7643ce.t("sheets-pivot-ui.noMatchingFields"),
                    }),
                ],
              }),
          }),
        }),
      }),
    ],
  });
}
function Ui(_0x27a9fc) {
  let {
      pivotTableId: _0x15db3a,
      version: _0x16dad3,
      unitId: _0x3ca4a4,
      subUnitId: _0x17f926,
      panelInfo: _0x207dbe,
    } = _0x27a9fc,
    _0x5a6be0 = _0x473eb2(_0x52d40e),
    _0x41c8d7 = _0x483d52(_0x5a6be0.configVersion$),
    _0x57f00a = _0x473eb2(_0x2a1a15),
    _0x273874 = _0x483d52(_0x473eb2(zn).pivotTablePanelVisible$, true),
    _0x285e14 = _0x473eb2(_0x5c53fb),
    _0x23a0f3 = _0x473eb2(_0x4c8ad2),
    [_0x13adb1, _0x4e36f3] = _0x4b7ac9(_0x207dbe),
    [_0x51f01e, _0x5934f8] = _0x4b7ac9(null),
    _0x49b659 = _0x144089(async () => {
      if (!_0x5a6be0.getPivotTableConfig(_0x3ca4a4, _0x17f926, _0x15db3a))
        return;
      let _0x469146 = await _0x57f00a.getPivotDisplayConfig({
        unitId: _0x3ca4a4,
        subUnitId: _0x17f926,
        pivotTableId: _0x15db3a,
        params: { type: _0x3ba488.Panel, panel: { pivotTableId: _0x15db3a } },
      });
      _0x469146.result["panel"] && _0x4e36f3(_0x469146.result["panel"]);
    }, [_0x15db3a, _0x57f00a, _0x5a6be0, _0x17f926, _0x3ca4a4]);
  _0x41acdd(() => {
    _0x49b659().catch((_0x8beadd) =>
      _0x23a0f3.error("[PivotPanel]", _0x8beadd),
    );
  }, [_0x23a0f3, _0x41c8d7, _0x15db3a, _0x49b659, _0x16dad3]);
  let _0x751eb = async (_0x5dbc15) => {
      let {
        source: _0x266b30,
        destination: _0x316454,
        draggableId: _0x3a7ff1,
      } = _0x5dbc15;
      _0x5934f8(null);
      let _0x4d4aad = {
          pivotTableInfo: _0x13adb1,
          pivotTableId: _0x15db3a,
          commandService: _0x285e14,
          unitId: _0x3ca4a4,
          subUnitId: _0x17f926,
        },
        _0x3d38f6 = _0x266b30.droppableId;
      if (_0x316454 && _0x316454.droppableId) {
        let _0x1618f8 = _0x316454.droppableId;
        (await $n(_0x4d4aad, _0x3a7ff1, _0x3d38f6, _0x1618f8, _0x316454.index),
          await _0x49b659());
      }
      _0x316454 === null &&
        (await Xn(_0x4d4aad, _0x3a7ff1, _0x3d38f6), await _0x49b659());
    },
    _0x284c4a = (_0x1c74fe) => {
      _0x5934f8({ draggingId: _0x1c74fe.draggableId });
    },
    _0xbd92de = (_0x278495) => {
      let {
        draggableId: _0x407c8a,
        destination: _0x27a367,
        source: _0xf1ff47,
      } = _0x278495;
      _0x5934f8({
        draggingId: _0x407c8a,
        destination: _0x27a367,
        source: _0xf1ff47,
      });
    };
  if (!_0x273874 || !_0x13adb1) return null;
  let {
    sourceList: _0x1510ab,
    rowFields: _0x1e7871,
    columnFields: _0x1a2a6e,
    filterFields: _0x30f811,
    valueFields: _0x27876e,
    sourceRange: _0x1343a8,
    positionInfo: _0x264324,
  } = _0x13adb1;
  return _0x44caca("div", {
    className: _0x37c9a5(
      "univer-mt-4 univer-flex univer-h-[calc(100%-16px)] univer-min-h-0 univer-w-full univer-flex-col univer-overflow-y-auto univer-overflow-x-hidden",
      _0x147e92,
    ),
    children: [
      _0x211556(zi, {
        sourceRangeInfo: _0x1343a8,
        pivotTableId: _0x15db3a,
        refreshHandler: _0x49b659,
        positionInfo: _0x264324,
      }),
      _0x44caca(ki, {
        onDragEnd: _0x751eb,
        onDragStart: _0x284c4a,
        onDragUpdate: _0xbd92de,
        children: [
          _0x211556(Hi, {
            draggingId:
              (_0x51f01e == null ? undefined : _0x51f01e.draggingId) ?? "",
            sourceList: _0x1510ab,
            refreshHandler: _0x49b659,
            pivotTableId: _0x15db3a,
            pivotTableInfo: _0x13adb1,
            unitId: _0x3ca4a4,
            subUnitId: _0x17f926,
          }),
          _0x211556(Wi, {
            rowFields: _0x1e7871,
            columnFields: _0x1a2a6e,
            filterFields: _0x30f811,
            valueFields: _0x27876e,
            refreshHandler: _0x49b659,
            positionInfo: _0x264324,
            pivotTableId: _0x15db3a,
            pivotTableInfo: _0x13adb1,
          }),
        ],
      }),
    ],
  });
}
function Wi(_0x4e1733) {
  let {
    rowFields: _0xe655ca,
    columnFields: _0x166b34,
    filterFields: _0xcde384,
    valueFields: _0x58a8c7,
    refreshHandler: _0x1b32f6,
    pivotTableInfo: _0x461253,
    positionInfo: _0x21768,
    pivotTableId: _0x56752e,
  } = _0x4e1733;
  return _0x44caca("div", {
    className: "univer-shrink-0",
    "data-testid": "pivot-field-areas",
    children: [
      _0x44caca("div", {
        className: "univer-flex univer-flex-row univer-gap-4",
        children: [
          _0x211556(Li, {
            areaType: "filter",
            items: _0xcde384,
            positionInfo: _0x21768,
            pivotTableId: _0x56752e,
            pivotTableInfo: _0x461253,
            refreshHandler: _0x1b32f6,
          }),
          _0x211556(Li, {
            areaType: "column",
            items: _0x166b34,
            positionInfo: _0x21768,
            pivotTableId: _0x56752e,
            pivotTableInfo: _0x461253,
            refreshHandler: _0x1b32f6,
          }),
        ],
      }),
      _0x44caca("div", {
        className: "univer-flex univer-flex-row univer-gap-4",
        children: [
          _0x211556(Li, {
            areaType: "row",
            items: _0xe655ca,
            positionInfo: _0x21768,
            pivotTableId: _0x56752e,
            pivotTableInfo: _0x461253,
            refreshHandler: _0x1b32f6,
          }),
          _0x211556(Li, {
            areaType: "value",
            items: _0x58a8c7,
            positionInfo: _0x21768,
            pivotTableId: _0x56752e,
            pivotTableInfo: _0x461253,
            refreshHandler: _0x1b32f6,
          }),
        ],
      }),
    ],
  });
}
function Gi(_0x4516cf) {
  let {
      className: _0x5ecf65,
      unitId: _0x3259c5,
      subUnitId: _0xfce85f,
      pivotTableId: _0xb6b192,
    } = _0x4516cf,
    [_0x481d02, _0x504ee0] = _0x4b7ac9(0),
    _0x38c825 = _0x473eb2(_0x21b801),
    _0x566c70 = _0x38c825.getDirection();
  return _0x44caca("div", {
    className: _0x37c9a5(
      "univer-flex\x20univer-size-full\x20univer-min-h-0\x20univer-flex-col",
      _0x5ecf65,
    ),
    dir: _0x566c70,
    children: [
      _0x44caca("div", {
        className:
          "univer-flex univer-shrink-0 univer-items-center univer-border-b univer-border-gray-200",
        children: [
          _0x44caca("div", {
            className: _0x37c9a5(
              "univer-mr-5 univer-cursor-default univer-py-4 univer-text-center univer-text-sm univer-font-semibold rtl:univer-ml-5 rtl:univer-mr-0",
              _0x481d02 === 0
                ? "univer-text-primary-600"
                : "univer-text-gray-500",
            ),
            onClick: () => _0x504ee0(0),
            children: [
              _0x38c825.t("sheets-pivot-ui.fieldPanel"),
              _0x211556("div", {
                className: _0x37c9a5(
                  "univer-mx-auto univer-mt-2 univer-h-1 univer-w-1/2 univer-rounded-md",
                  {
                    "univer-bg-primary-600": _0x481d02 === 0,
                    "univer-bg-transparent": _0x481d02 !== 0,
                  },
                ),
              }),
            ],
          }),
          _0x44caca("div", {
            className: _0x37c9a5(
              "univer-mr-5 univer-cursor-default univer-py-4 univer-text-center univer-text-sm univer-font-semibold rtl:univer-ml-5 rtl:univer-mr-0",
              {
                "univer-text-primary-600": _0x481d02 === 1,
                "univer-text-gray-500": _0x481d02 !== 1,
              },
            ),
            onClick: () => _0x504ee0(1),
            children: [
              _0x38c825.t("sheets-pivot-ui.configPanel"),
              _0x211556("div", {
                className: _0x37c9a5(
                  "univer-mx-auto\x20univer-mt-2\x20univer-h-1\x20univer-w-1/2\x20univer-rounded-md\x20univer-bg-primary-600",
                  {
                    "univer-bg-primary-600": _0x481d02 === 1,
                    "univer-bg-transparent": _0x481d02 !== 1,
                  },
                ),
              }),
            ],
          }),
        ],
      }),
      _0x211556("div", {
        className: _0x37c9a5(
          "univer-min-h-0 univer-flex-1",
          _0x481d02 === 0 ? "univer-overflow-hidden" : "univer-overflow-auto",
        ),
        children:
          _0x481d02 === 0
            ? _0x211556(Ui, { ..._0x4516cf })
            : _0x211556(Si, {
                unitId: _0x3259c5,
                subUnitId: _0xfce85f,
                pivotTableId: _0xb6b192,
              }),
      }),
    ],
  });
}
function Ki(_0x4e986e) {
  let {
      unitId: _0x167c52,
      subUnitId: _0x5ee585,
      pivotTableId: _0x4fa107,
      tableFieldId: _0x8ad819,
      type: _0x52e434,
    } = _0x4e986e,
    _0x4a7d33 = JSON.stringify([
      _0x167c52,
      _0x5ee585,
      _0x4fa107,
      _0x8ad819,
      _0x52e434,
    ]);
  return _0x211556(qi, { ..._0x4e986e }, _0x4a7d33);
}
function qi({
  unitId: _0x4c1c83,
  subUnitId: _0x3abf26,
  pivotTableId: _0x2840b6,
  tableFieldId: _0x210419,
  type: _0x2f3d43,
  baseItems: _0x1e1616,
  onConfirm: _0x20b098,
  onCancel: _0x35d8a5,
}) {
  var _0x3dc824;
  let _0x304aab = _0x473eb2(_0x52d40e),
    _0x41761a = _0x473eb2(_0x21b801),
    _0x412fa5 = _0x483d52(_0x41761a.direction$, _0x41761a.getDirection()),
    _0x339a6e = Ar.find((_0x1d9161) => _0x1d9161.type === _0x2f3d43),
    _0x31c52b = _0x304aab.getPivotTableConfig(_0x4c1c83, _0x3abf26, _0x2840b6),
    _0x5327cd =
      _0x31c52b == null ||
      (_0x3dc824 = _0x31c52b.fieldsConfig["measure"][_0x210419]) == null
        ? undefined
        : _0x3dc824.showDataAs,
    _0x31ee91 = () => {
      var _0xa896ac;
      if (
        (_0x5327cd == null ? undefined : _0x5327cd.type) !== _0x2f3d43 ||
        !_0x5327cd.baseFieldId
      )
        return "";
      if (_0x5327cd.baseItemType === _0x1bfa7e.previous)
        return "relative:previous";
      if (_0x5327cd.baseItemType === _0x1bfa7e.next) return "relative:next";
      let _0x4e913e =
        ((_0xa896ac = _0x1e1616[_0x5327cd.baseFieldId]) == null
          ? undefined
          : _0xa896ac.items["indexOf"](_0x5327cd.baseItem)) ?? -1;
      return _0x4e913e < 0 ? "" : "item:" + _0x4e913e;
    },
    [_0x4f225e, _0x28b93a] = _0x4b7ac9(
      (_0x5327cd == null ? undefined : _0x5327cd.type) === _0x2f3d43
        ? _0x5327cd.baseFieldId
        : "",
    ),
    [_0x1495b6, _0x5c94ab] = _0x4b7ac9(_0x31ee91),
    _0x202513 = _0x41a68e(false),
    [_0x4dce43, _0x2fc505] = _0x4b7ac9(false),
    _0x3ae3c0 = _0x304aab.getPivotTableConfig(_0x4c1c83, _0x3abf26, _0x2840b6),
    _0x4e0a76 = _0x304aab.getCollection(_0x4c1c83, _0x2840b6),
    _0x1c611a =
      _0x3ae3c0 == null
        ? undefined
        : _0x3ae3c0.fieldsConfig["measure"][_0x210419],
    _0x33224c = !!(
      _0x1c611a &&
      _0x4e0a76 &&
      (_0x4e0a76.fields[_0x1c611a.dataFieldId] ||
        _0x4e0a76.customFields["find"](
          (_0x3e54e3) => _0x3e54e3.id === _0x1c611a.dataFieldId,
        ))
    ),
    _0x526f00 = (
      _0x3ae3c0 && _0x4e0a76 && _0x339a6e
        ? Mr(_0x3ae3c0, _0x4e0a76, _0x339a6e)
        : []
    ).filter((_0x33ea45) => {
      let _0x2102aa = _0x1e1616[_0x33ea45];
      return (
        (_0x339a6e == null ? undefined : _0x339a6e.baseItemMode) === "none" ||
        !!(
          _0x2102aa &&
          ((_0x339a6e == null ? undefined : _0x339a6e.baseItemMode) ===
            "item-or-relative" ||
            _0x2102aa.items["length"] > 0)
        )
      );
    }),
    _0x3eead1 = _0x526f00.map((_0x1037cc) => ({
      label: _0x3ae3c0.fieldsConfig["dimension"][_0x1037cc].displayName,
      value: _0x1037cc,
    })),
    _0x1eb8be =
      _0x3ae3c0 == null
        ? undefined
        : _0x3ae3c0.fieldsConfig["dimension"][_0x4f225e],
    _0x3340a9 =
      _0x1eb8be &&
      _0x4e0a76 &&
      (_0x4e0a76.fields[_0x1eb8be.dataFieldId] ??
        _0x4e0a76.customFields["find"](
          (_0x25c592) => _0x25c592.id === _0x1eb8be.dataFieldId,
        )),
    _0x2f8c96 = _0x1e1616[_0x4f225e],
    _0x5ec3db =
      (_0x2f8c96 == null
        ? undefined
        : _0x2f8c96.items["map"]((_0x1c0880, _0x1864a3) => {
            let _0x883073 = _0x2f8c96.itemTypes[_0x1864a3],
              _0x5a0584 = _0x1c0880;
            return (
              _0x883073 === _0x3add37.blank
                ? (_0x5a0584 = _0x41761a.t(
                    "sheets-pivot-ui.dialog.filter.blank",
                  ))
                : _0x883073 === _0x3add37.other
                  ? (_0x5a0584 = _0x41761a.t(
                      "sheets-pivot-ui.showValuesAs.other",
                    ))
                  : (_0x883073 === _0x3add37.date ||
                      _0x883073 === _0x3add37.number) &&
                    _0x2f8c96.format &&
                    (_0x5a0584 = _0x4d00e6.format(
                      _0x2f8c96.format,
                      Number(_0x1c0880),
                    )),
              {
                label: _0x5a0584,
                value: "item:" + _0x1864a3,
                itemKey: _0x1c0880,
              }
            );
          })) ?? [];
  (_0x339a6e == null ? undefined : _0x339a6e.baseItemMode) ===
    "item-or-relative" &&
    _0x5ec3db.push(
      {
        label: _0x41761a.t("sheets-pivot-ui.showValuesAs.previous"),
        value: "relative:previous",
        itemKey: "",
        itemType: _0x1bfa7e.previous,
      },
      {
        label: _0x41761a.t("sheets-pivot-ui.showValuesAs.next"),
        value: "relative:next",
        itemKey: "",
        itemType: _0x1bfa7e.next,
      },
    );
  let _0x56f900 = _0x5ec3db.find((_0x4484f8) => _0x4484f8.value === _0x1495b6),
    _0x26a51e = !!(
      _0x339a6e != null &&
      _0x339a6e.baseItemMode &&
      _0x339a6e.baseItemMode !== "none"
    ),
    _0x7c4f59 = !!(
      _0x339a6e &&
      _0x3ae3c0 &&
      _0x4e0a76 &&
      _0x33224c &&
      _0x3ae3c0.fieldsConfig["valueFields"].includes(_0x210419) &&
      _0x526f00.includes(_0x4f225e) &&
      _0x3340a9 &&
      (!_0x26a51e || _0x56f900)
    );
  return _0x44caca("div", {
    dir: _0x412fa5,
    children: [
      _0x44caca("div", {
        className: "univer-mb-4",
        children: [
          _0x211556("div", {
            className: "univer-mb-2 univer-text-sm univer-font-medium",
            children: _0x41761a.t("sheets-pivot-ui.showValuesAs.baseField"),
          }),
          _0x211556(_0x61011e, {
            className: "univer-w-full",
            value: _0x4f225e,
            options: _0x3eead1,
            onChange: (_0x359c3e) => {
              (_0x28b93a(_0x359c3e), _0x5c94ab(""));
            },
          }),
        ],
      }),
      _0x26a51e &&
        _0x44caca("div", {
          className: "univer-mb-4",
          children: [
            _0x211556("div", {
              className: "univer-mb-2 univer-text-sm univer-font-medium",
              children: _0x41761a.t("sheets-pivot-ui.showValuesAs.baseItem"),
            }),
            _0x211556(_0x61011e, {
              className: "univer-w-full",
              value: _0x1495b6,
              options: _0x5ec3db,
              disabled: !_0x4f225e,
              onChange: _0x5c94ab,
            }),
          ],
        }),
      _0x44caca("div", {
        className: "univer-flex univer-justify-end univer-gap-3",
        children: [
          _0x211556(_0x31eb36, {
            onClick: _0x35d8a5,
            children: _0x41761a.t("sheets-pivot-ui.showValuesAs.cancel"),
          }),
          _0x211556(_0x31eb36, {
            variant: "primary",
            disabled: !_0x7c4f59 || _0x4dce43,
            onClick: async () => {
              let _0x173b39 = _0x304aab.getPivotTableConfig(
                  _0x4c1c83,
                  _0x3abf26,
                  _0x2840b6,
                ),
                _0x4bc10f = _0x304aab.getCollection(_0x4c1c83, _0x2840b6),
                _0x4567d3 =
                  _0x173b39 == null
                    ? undefined
                    : _0x173b39.fieldsConfig["measure"][_0x210419];
              if (
                !_0x339a6e ||
                !_0x173b39 ||
                !_0x4bc10f ||
                !_0x4567d3 ||
                _0x202513.current ||
                !_0x173b39.fieldsConfig["valueFields"].includes(_0x210419) ||
                !(
                  _0x4bc10f.fields[_0x4567d3.dataFieldId] ||
                  _0x4bc10f.customFields["find"](
                    (_0x4f2d7f) => _0x4f2d7f.id === _0x4567d3.dataFieldId,
                  )
                ) ||
                !Mr(_0x173b39, _0x4bc10f, _0x339a6e).includes(_0x4f225e) ||
                (_0x26a51e && !_0x56f900)
              )
                return;
              let _0x147a76 = {
                type: _0x2f3d43,
                baseFieldId: _0x4f225e,
                baseItem:
                  (_0x56f900 == null ? undefined : _0x56f900.itemKey) ?? "",
              };
              ((_0x56f900 == null ? undefined : _0x56f900.itemType) !==
                undefined && (_0x147a76.baseItemType = _0x56f900.itemType),
                (_0x202513.current = true),
                _0x2fc505(true));
              try {
                await _0x20b098(_0x147a76);
              } catch {
              } finally {
                ((_0x202513.current = false), _0x2fc505(false));
              }
            },
            children: _0x41761a.t("sheets-pivot-ui.showValuesAs.ok"),
          }),
        ],
      }),
    ],
  });
}
const Ji = [
  {
    id: "equal",
    localeKey: "sheets-pivot-ui.valueFilter.equal",
    operator: _0x561a2b.valueEqual,
  },
  {
    id: "notEqual",
    localeKey: "sheets-pivot-ui.valueFilter.notEqual",
    operator: _0x561a2b.valueNotEqual,
  },
  {
    id: "greaterThan",
    localeKey: "sheets-pivot-ui.valueFilter.greaterThan",
    operator: _0x561a2b.valueGreaterThan,
  },
  {
    id: "greaterThanOrEqual",
    localeKey: "sheets-pivot-ui.valueFilter.greaterThanOrEqual",
    operator: _0x561a2b.valueGreaterThanOrEqual,
  },
  {
    id: "lessThan",
    localeKey: "sheets-pivot-ui.valueFilter.lessThan",
    operator: _0x561a2b.valueLessThan,
  },
  {
    id: "lessThanOrEqual",
    localeKey: "sheets-pivot-ui.valueFilter.lessThanOrEqual",
    operator: _0x561a2b.valueLessThanOrEqual,
  },
  {
    id: "between",
    localeKey: "sheets-pivot-ui.valueFilter.between",
    operator: _0x561a2b.valueBetween,
    isBetween: true,
  },
  {
    id: "notBetween",
    localeKey: "sheets-pivot-ui.valueFilter.notBetween",
    operator: _0x561a2b.valueNotBetween,
    isBetween: true,
  },
  {
    id: "topCount",
    localeKey: "sheets-pivot-ui.valueFilter.topCount",
    operator: _0x561a2b.count,
    isCount: true,
  },
  {
    id: "bottomCount",
    localeKey: "sheets-pivot-ui.valueFilter.bottomCount",
    operator: _0x561a2b.count,
    isBottom: true,
    isCount: true,
  },
  {
    id: "topPercent",
    localeKey: "sheets-pivot-ui.valueFilter.topPercent",
    operator: _0x561a2b.percent,
    isPercent: true,
  },
  {
    id: "bottomPercent",
    localeKey: "sheets-pivot-ui.valueFilter.bottomPercent",
    operator: _0x561a2b.percent,
    isBottom: true,
    isPercent: true,
  },
];
function Yi(_0x506a15) {
  var _0x2e9510;
  return (_0x506a15 == null ? undefined : _0x506a15.operator) ===
    _0x561a2b.count
    ? _0x506a15.isBottom
      ? "bottomCount"
      : "topCount"
    : (_0x506a15 == null ? undefined : _0x506a15.operator) === _0x561a2b.percent
      ? _0x506a15.isBottom
        ? "bottomPercent"
        : "topPercent"
      : (((_0x2e9510 = Ji.find(
          (_0x4359c2) =>
            _0x4359c2.operator ===
            (_0x506a15 == null ? undefined : _0x506a15.operator),
        )) == null
          ? undefined
          : _0x2e9510.id) ?? "greaterThan");
}
function Xi({
  targetFieldId: _0x391e43,
  targetFieldName: _0x3143e4,
  valueFields: _0x46855d,
  defaultValueFieldId: _0x146871,
  currentFilter: _0x3990f9,
  onConfirm: _0x13ecdb,
  onClear: _0x2f5540,
  onCancel: _0x4afe3a,
}) {
  let _0x248a76 = _0x473eb2(_0x21b801),
    _0x368e20 = _0x483d52(_0x248a76.direction$, _0x248a76.getDirection()),
    _0x12e04e = _0x3990f9 == null ? undefined : _0x3990f9.expected,
    [_0x2640e0, _0x1bcde8] = _0x4b7ac9(() => {
      let _0xdbad2c = _0x3990f9 == null ? undefined : _0x3990f9.valueFieldId;
      return _0xdbad2c &&
        _0x46855d.some((_0x401f16) => _0x401f16.id === _0xdbad2c)
        ? _0xdbad2c
        : _0x146871 && _0x46855d.some((_0xfd1383) => _0xfd1383.id === _0x146871)
          ? _0x146871
          : _0x46855d.length === 1
            ? _0x46855d[0].id
            : "";
    }),
    [_0x260442, _0x30a899] = _0x4b7ac9(() => Yi(_0x3990f9)),
    [_0x32c22b, _0x3065ab] = _0x4b7ac9(() =>
      Number(Array.isArray(_0x12e04e) ? _0x12e04e[0] : (_0x12e04e ?? 0)),
    ),
    [_0x382fd6, _0x18d8e1] = _0x4b7ac9(() =>
      Array.isArray(_0x12e04e) ? Number(_0x12e04e[1]) : 0,
    ),
    _0x41240c = _0x41a68e(false),
    [_0x5630be, _0x41b305] = _0x4b7ac9(false),
    _0x4e79ac = Ji.find((_0x45565e) => _0x45565e.id === _0x260442),
    _0x15b3ae = _0x32c22b !== "" && Number.isFinite(_0x32c22b),
    _0x15f6a2 =
      !_0x4e79ac.isBetween || (_0x382fd6 !== "" && Number.isFinite(_0x382fd6)),
    _0x2b6cdf =
      !_0x4e79ac.isCount ||
      (Number.isInteger(_0x32c22b) && Number(_0x32c22b) >= 1),
    _0x50e799 =
      !_0x4e79ac.isPercent ||
      (Number(_0x32c22b) >= 0 && Number(_0x32c22b) <= 100),
    _0x40ddcb = !!(
      _0x46855d.some((_0x4ada08) => _0x4ada08.id === _0x2640e0) &&
      _0x15b3ae &&
      _0x15f6a2 &&
      _0x2b6cdf &&
      _0x50e799
    ),
    _0x5f5aaf = async (_0x171295) => {
      if (!_0x41240c.current) {
        ((_0x41240c.current = true), _0x41b305(true));
        try {
          await _0x171295();
        } catch {
        } finally {
          ((_0x41240c.current = false), _0x41b305(false));
        }
      }
    };
  return _0x44caca("div", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-4",
    "data-target-field-id": _0x391e43,
    dir: _0x368e20,
    children: [
      _0x211556("div", {
        className: "univer-text-sm univer-font-medium",
        children: _0x211556("bdi", { dir: "auto", children: _0x3143e4 }),
      }),
      _0x44caca("label", {
        className:
          "univer-flex\x20univer-flex-col\x20univer-gap-2\x20univer-text-sm",
        children: [
          _0x248a76.t("sheets-pivot-ui.valueFilter.valueField"),
          _0x44caca("select", {
            className:
              "univer-h-8 univer-rounded univer-border univer-border-gray-200 univer-bg-white univer-px-2 dark:!univer-border-gray-500 dark:!univer-bg-gray-700",
            "data-testid": "pivot-value-filter-value-field",
            value: _0x2640e0,
            onChange: (_0x28966c) => _0x1bcde8(_0x28966c.target["value"]),
            children: [
              _0x211556("option", {
                value: "",
                children: _0x248a76.t(
                  "sheets-pivot-ui.valueFilter.selectValueField",
                ),
              }),
              _0x46855d.map((_0x5ef05e) =>
                _0x211556(
                  "option",
                  { value: _0x5ef05e.id, children: _0x5ef05e.label },
                  _0x5ef05e.id,
                ),
              ),
            ],
          }),
        ],
      }),
      _0x44caca("label", {
        className: "univer-flex univer-flex-col univer-gap-2 univer-text-sm",
        children: [
          _0x248a76.t("sheets-pivot-ui.valueFilter.condition"),
          _0x211556("select", {
            className:
              "univer-h-8 univer-rounded univer-border univer-border-gray-200 univer-bg-white univer-px-2 dark:!univer-border-gray-500 dark:!univer-bg-gray-700",
            "data-testid": "pivot-value-filter-rule",
            value: _0x260442,
            onChange: (_0x3c726e) => _0x30a899(_0x3c726e.target["value"]),
            children: Ji.map((_0x14c529) =>
              _0x211556(
                "option",
                {
                  value: _0x14c529.id,
                  children: _0x248a76.t(_0x14c529.localeKey),
                },
                _0x14c529.id,
              ),
            ),
          }),
        ],
      }),
      _0x44caca("div", {
        className: "univer-flex univer-gap-2",
        children: [
          _0x211556("input", {
            "aria-label": _0x248a76.t("sheets-pivot-ui.valueFilter.condition"),
            className:
              "univer-h-8 univer-min-w-0 univer-flex-1 univer-rounded univer-border univer-border-gray-200 univer-px-2 dark:!univer-border-gray-500",
            "data-testid": "pivot-value-filter-expected",
            type: "number",
            min: _0x4e79ac.isCount ? 1 : _0x4e79ac.isPercent ? 0 : undefined,
            max: _0x4e79ac.isPercent ? 100 : undefined,
            step: _0x4e79ac.isCount ? 1 : undefined,
            value: _0x32c22b,
            onChange: (_0x55b6b0) =>
              _0x3065ab(
                _0x55b6b0.target["value"] === ""
                  ? ""
                  : Number(_0x55b6b0.target["value"]),
              ),
          }),
          _0x4e79ac.isBetween &&
            _0x211556("input", {
              "aria-label": _0x248a76.t(
                "sheets-pivot-ui.valueFilter.condition",
              ),
              className:
                "univer-h-8 univer-min-w-0 univer-flex-1 univer-rounded univer-border univer-border-gray-200 univer-px-2 dark:!univer-border-gray-500",
              "data-testid": "pivot-value-filter-expected",
              type: "number",
              value: _0x382fd6,
              onChange: (_0x18b0d6) =>
                _0x18d8e1(
                  _0x18b0d6.target["value"] === ""
                    ? ""
                    : Number(_0x18b0d6.target["value"]),
                ),
            }),
        ],
      }),
      _0x44caca("div", {
        className: "univer-flex\x20univer-justify-between\x20univer-gap-3",
        children: [
          _0x211556(_0x31eb36, {
            "data-testid": "pivot-value-filter-clear",
            disabled: _0x5630be,
            onClick: () => _0x5f5aaf(_0x2f5540),
            children: _0x248a76.t("sheets-pivot-ui.valueFilter.clear"),
          }),
          _0x44caca("div", {
            className: "univer-flex\x20univer-gap-3",
            children: [
              _0x211556(_0x31eb36, {
                disabled: _0x5630be,
                onClick: _0x4afe3a,
                children: _0x248a76.t("sheets-pivot-ui.valueFilter.cancel"),
              }),
              _0x211556(_0x31eb36, {
                "data-testid": "pivot-value-filter-confirm",
                variant: "primary",
                disabled: !_0x40ddcb || _0x5630be,
                onClick: () =>
                  _0x5f5aaf(async () => {
                    if (!_0x40ddcb) return;
                    let _0x58f05e = {
                      operator: _0x4e79ac.operator,
                      expected: _0x4e79ac.isBetween
                        ? [Number(_0x32c22b), Number(_0x382fd6)]
                        : Number(_0x32c22b),
                      valueFieldId: _0x2640e0,
                    };
                    (_0x4e79ac.isBottom && (_0x58f05e.isBottom = true),
                      await _0x13ecdb(_0x58f05e));
                  }),
                children: _0x248a76.t("sheets-pivot-ui.valueFilter.ok"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Zi(_0x53a6b1) {
  let {
      pivotTableId: _0x321349,
      tableFieldId: _0x356c20,
      closeFn: _0x150103,
      unitId: _0x16113d,
      subUnitId: _0x34a588,
      format: _0x44453c,
      tableFieldInfo: _0x9d0415,
      dataFieldInfo: _0x5ec463,
      version: _0x2e3a0a,
    } = _0x53a6b1,
    [_0x445fe9, _0x44bb90] = _0x4b7ac9(_0x9d0415.displayName),
    [_0x308b72, _0x2d782c] = _0x4b7ac9(_0x9d0415.subTotalType),
    _0x4f3ec9 = _0x473eb2(_0x21b801),
    _0xf87e0b = _0x473eb2(_0x5c53fb),
    _0x5d81e0 = _0x473eb2(_0x42b513),
    _0x4b991f = { ..._0x473eb2(_0x52d40e).getTextInfo() };
  for (let _0x5aef25 of [
    "sheets-pivot-ui.averageName",
    "sheets-pivot-ui.countName",
    "sheets-pivot-ui.countNumsName",
    "sheets-pivot-ui.maxName",
    "sheets-pivot-ui.minName",
    "sheets-pivot-ui.productName",
    "sheets-pivot-ui.stdDevName",
    "sheets-pivot-ui.stdDevpName",
    "sheets-pivot-ui.sumName",
    "sheets-pivot-ui.varName",
    "sheets-pivot-ui.varpName",
  ])
    _0x4b991f[_0x5aef25] = _0x4f3ec9.t(_0x5aef25);
  if (
    (_0x41acdd(() => {
      (_0x44bb90(_0x9d0415.displayName), _0x2d782c(_0x9d0415.subTotalType));
    }, [_0x2e3a0a]),
    !_0x9d0415 || !_0x5ec463)
  )
    return;
  let _0xce7444 = _0x5ec463.name,
    _0x3fecc3 = _0x4f3ec9.getDirection(),
    _0x43ff2b = _0x44453c ?? _0x9d0415.format,
    _0x41d5c1 = ar.map((_0x2d3df8) => ({
      value: "" + _0x2d3df8.type,
      type: _0x2d3df8.type,
      label: _0x4f3ec9.t(_0x2d3df8.textKey),
    })),
    _0x4fb699 = (_0x1ef131) => {
      let _0x399503 = _0x1ef131;
      if (
        (Array.isArray(_0x1ef131) && (_0x399503 = _0x1ef131[0]),
        _0x399503 !== undefined)
      ) {
        let _0x4759db = Number(_0x399503);
        (_0x2d782c(_0x4759db),
          vr(_0xce7444, _0x445fe9, _0x4b991f) &&
            _0x44bb90(yr(_0xce7444, _0x4b991f, _0x4759db)));
      }
    };
  return _0x44caca("div", {
    dir: _0x3fecc3,
    children: [
      _0x44caca("div", {
        className:
          "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-self-stretch\x20univer-leading-5",
        children: [
          _0x211556("span", {
            className:
              "univer-text-sm univer-font-medium univer-leading-5 univer-text-gray-900",
            children: _0x4f3ec9.t("sheets-pivot-ui.dialog.fieldName"),
          }),
          _0x211556("span", {
            className:
              "univer-text-xs\x20univer-leading-4\x20univer-text-gray-600",
            children: Kn(
              _0x4f3ec9.t("sheets-pivot-ui.dialog.sourceName"),
              _0xce7444,
            ),
          }),
        ],
      }),
      _0x211556("div", {
        children: _0x211556(_0x989aa5, {
          className:
            "univer-mb-5 univer-mt-2 univer-box-border univer-h-8 univer-w-full univer-rounded-md univer-py-1.5 univer-text-sm univer-leading-5",
          value: _0x445fe9,
          onChange: (_0x46eb70) => _0x44bb90(_0x46eb70),
        }),
      }),
      _0x211556("label", {
        className:
          "univer-mb-2 univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
        children: _0x4f3ec9.t("sheets-pivot-ui.dialog.summarizeBy"),
      }),
      _0x211556("div", {
        className: _0x37c9a5(
          "univer-h-40 univer-flex-1 univer-overflow-y-auto univer-rounded-lg",
          _0x4dca92,
          _0x147e92,
        ),
        children: _0x41d5c1.map((_0xa8e7e0) =>
          _0x44caca(
            "div",
            {
              className:
                "univer-flex\x20univer-items-center\x20univer-gap-1.5\x20univer-self-stretch\x20univer-rounded-md\x20univer-px-2\x20univer-py-1.5\x20univer-text-sm\x20univer-capitalize\x20univer-leading-5",
              onClick: () => _0x4fb699(_0xa8e7e0.value),
              children: [
                _0x211556("span", {
                  className:
                    "univer-w-4 univer-text-base univer-text-primary-600",
                  children: _0x211556(_0x46b78c, {
                    className: _0x37c9a5({
                      "univer-hidden": _0x308b72 !== _0xa8e7e0.type,
                    }),
                  }),
                }),
                _0x211556("span", { children: _0xa8e7e0.label }),
              ],
            },
            _0xa8e7e0.type,
          ),
        ),
      }),
      _0x211556("footer", {
        className: "univer-mt-5",
        children: _0x44caca(_0x2be7cc, {
          className:
            "univer-flex univer-items-center univer-justify-between univer-self-stretch",
          children: [
            _0x211556(_0x31eb36, {
              className:
                "univer-flex\x20univer-h-8\x20univer-cursor-pointer\x20univer-items-center\x20univer-justify-center\x20univer-gap-1.5\x20univer-rounded\x20univer-border-none\x20univer-bg-gray-0\x20univer-px-3\x20univer-text-primary-600",
              onClick: () => {
                let _0x151a62 = {
                  id: kn,
                  draggable: true,
                  mask: false,
                  maskClosable: false,
                  width: 400,
                  children: {
                    label: An,
                    unitId: _0x16113d,
                    subUnitId: _0x34a588,
                    pivotTableId: _0x321349,
                    tableFieldId: _0x356c20,
                    originPattern: _0x43ff2b,
                    tableFieldInfo: _0x9d0415,
                    dataFieldInfo: _0x5ec463,
                  },
                  dialogStyles: {
                    header: { padding: "20px 24px 0", height: 0 },
                    body: { padding: "0\x2024px\x2020px" },
                  },
                  closable: false,
                  onClose: () => {
                    _0x5d81e0.close(kn);
                  },
                };
                _0x5d81e0.open(_0x151a62);
              },
              children: _0x4f3ec9.t("sheets-pivot-ui.dialog.format"),
            }),
            _0x44caca(_0x2be7cc, {
              className:
                "univer-flex univer-flex-1 univer-gap-2 univer-text-sm rtl:univer-flex-row-reverse",
              children: [
                _0x211556(_0x31eb36, {
                  onClick: () => {
                    _0x150103 && _0x150103();
                  },
                  children: _0x4f3ec9.t("sheets-pivot-ui.dialog.cancel"),
                }),
                _0x211556(_0x31eb36, {
                  variant: "primary",
                  disabled: _0x445fe9 === "",
                  onClick: () => {
                    let _0x36a4c6 = _0x9d0415.displayName,
                      _0x5b507c = _0x9d0415.subTotalType,
                      _0xe9601b = _0x9d0415.format,
                      _0x59af02 =
                        _0x36a4c6 === _0x445fe9 ? undefined : _0x445fe9,
                      _0x59c0a3 =
                        _0x5b507c === _0x308b72 ? undefined : _0x308b72,
                      _0x3cf49c =
                        _0xe9601b === _0x43ff2b ? undefined : _0x43ff2b;
                    if (
                      _0x36a4c6 !== _0x445fe9 ||
                      _0x5b507c !== _0x308b72 ||
                      _0xe9601b !== _0x3cf49c
                    ) {
                      let _0x4d9f86 = {
                        displayName: _0x59af02,
                        subtotalType: _0x59c0a3,
                        format: _0x3cf49c,
                        tableFieldId: _0x356c20,
                        pivotTableId: _0x321349,
                        unitId: _0x16113d,
                        subUnitId: _0x34a588,
                        tableFieldInfo: _0x9d0415,
                        dataFieldInfo: _0x5ec463,
                      };
                      _0xf87e0b.executeCommand(_0x44c3e1.id, _0x4d9f86);
                    }
                    _0x150103 && _0x150103();
                  },
                  children: _0x4f3ec9.t("sheets-pivot-ui.dialog.ok"),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
let Qi = class extends _0x4b2a77 {
  constructor(_0x125367, _0x10a306) {
    (super(),
      (this._componentManager = _0x125367),
      (this._iconManager = _0x10a306),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    [
      [wr.componentKey, wr],
      [wn, Gi],
      [En, fi],
      [On, Zi],
      [An, vi],
      [Mn, Ki],
      [Nn, Xi],
    ].forEach(([_0x5bd56c, _0x2710d0]) => {
      this.disposeWithMe(
        this._componentManager["register"](_0x5bd56c, _0x2710d0),
      );
    });
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ PivotTableIcon: _0x2ad0c3 }),
    );
  }
};
Qi = $([Q(0, _0x46baf8(_0x1663d6)), Q(1, _0x46baf8(_0x3f03ea))], Qi);
let $i = class extends _0x4b2a77 {
  constructor(
    _0x3eb25f,
    _0x494337,
    _0x281598,
    _0x5c566f,
    _0x56c131,
    _0x455422,
    _0x239f4a,
  ) {
    var _0xf89bd;
    (super(),
      (this._localeService = _0x3eb25f),
      (this._sheetInterceptorService = _0x494337),
      (this._injector = _0x281598),
      (this._confirmService = _0x5c566f),
      (this._sheetsPivotTableService = _0x56c131),
      (this._configService = _0x455422),
      (this._sheetPermissionCheckController = _0x239f4a),
      Z(this, "_defaultOverride", false),
      this._initUIInterceptListener(),
      (this._defaultOverride =
        ((_0xf89bd = this._configService["getConfig"](_0x1d972c)) == null
          ? undefined
          : _0xf89bd.defaultOverride) ?? false));
  }
  _getPivotAppliedRanges(_0x2d1251, _0x1dc85d, _0x5ca3b0) {
    return _0xa807ca(
      _0x2d1251,
      _0x1dc85d,
      _0x5ca3b0,
      this._localeService["getDirection"](),
    );
  }
  _initUIInterceptListener() {
    this._sheetsPivotTableService["asyncInterceptor"].interceptAsync(
      this._sheetsPivotTableService["asyncInterceptor"].getInterceptPoints()
        .PIVOT_PERFORM_CHECK,
      {
        handler: async (_0x342dc0, _0x5496dc) => {
          let {
              cellInfo: _0x1d6eaa,
              view: _0x37ecee,
              isEmpty: _0x1b71b2,
            } = _0x5496dc,
            { unitId: _0xe98e22, subUnitId: _0x461539 } = _0x1d6eaa,
            _0x56e217 = this._getPivotAppliedRanges(
              _0x1d6eaa,
              _0x37ecee,
              _0x1b71b2,
            );
          if (!_0x823016(this._injector, _0xe98e22, _0x461539, _0x56e217)) {
            let _0x123295 = this._localeService["t"](
              "sheets-pivot-ui.msg.permissionError",
            );
            this._sheetPermissionCheckController[
              "blockExecuteWithoutPermission"
            ](_0x123295);
          }
          let _0x18e38d = this._sheetInterceptorService[
              "generateMutationsByRanges"
            ]({ unitId: _0xe98e22, subUnitId: _0x461539, ranges: _0x56e217 }),
            _0x4a8cdc = _0x3326e8(
              this._injector,
              _0xe98e22,
              _0x461539,
              _0x56e217,
            );
          if (_0x18e38d.redos["length"] || _0x4a8cdc.shouldClear) {
            if (this._defaultOverride) return Promise.resolve(true);
            {
              let _0x326795 = await this._confirmService["confirm"]({
                id: "sheet-pivot.confirm.add-sheet-pivot",
                title: {
                  title: this._localeService["t"](
                    "sheets-pivot-ui.perform.tips",
                  ),
                },
                children: {
                  title: this._localeService["t"](
                    "sheets-pivot-ui.perform.info",
                  ),
                },
                cancelText: this._localeService["t"](
                  "sheets-pivot-ui.perform.cancel",
                ),
                confirmText: this._localeService["t"](
                  "sheets-pivot-ui.perform.confirm",
                ),
              });
              return Promise.resolve(_0x326795);
            }
          }
          return Promise.resolve(true);
        },
      },
    );
  }
};
$i = $(
  [
    Q(0, _0x46baf8(_0x21b801)),
    Q(1, _0x46baf8(_0x13c89a)),
    Q(2, _0x46baf8(_0x2a2b22)),
    Q(3, _0x46baf8(_0x3ba214)),
    Q(4, _0x46baf8(_0x1ffe95)),
    Q(5, _0x46baf8(_0x4766cd)),
    Q(6, _0x46baf8(_0x21ceff)),
  ],
  $i,
);
let ea = class extends _0x4b2a77 {
  constructor(_0x258e56, _0x1a14ac, _0x4c95b1) {
    (super(),
      (this._univerInstanceService = _0x258e56),
      (this._sheetsPivotTableAdaptorModel = _0x1a14ac),
      (this._sheetClipboardService = _0x4c95b1),
      this._initialize());
  }
  _initialize() {
    let _0x57f4cd = this,
      _0x1c733a,
      _0x405975;
    this.disposeWithMe(
      this._sheetClipboardService["addClipboardHook"]({
        id: _0x56c979,
        onBeforeCopy(_0x3dcd22, _0xb2c387) {
          let _0x1696e2 = _0x57f4cd._univerInstanceService["getUnit"](
            _0x3dcd22,
            _0x33bcb3.UNIVER_SHEET,
          );
          _0x1696e2 &&
            ((_0x1c733a = _0x57f4cd._sheetsPivotTableAdaptorModel[
              "getSubUnitPivotMatrix"
            ](_0x3dcd22, _0xb2c387)),
            (_0x405975 = _0x1696e2.getStyles()));
        },
        onAfterCopy() {
          ((_0x1c733a = null), (_0x405975 = null));
        },
        getCellValueBySpecialMatrix(_0x53fcdd, _0x53e245) {
          if (!_0x1c733a) return;
          let _0x1e688d =
            _0x1c733a == null
              ? undefined
              : _0x1c733a.getValue(_0x53fcdd, _0x53e245);
          if (_0x1e688d) {
            var _0x508017;
            return {
              ..._0x1e688d,
              s: _0x405975 == null ? undefined : _0x405975.get(_0x1e688d.s),
              displayV:
                ((_0x508017 = _0x1e688d.v) == null
                  ? undefined
                  : _0x508017.toString()) || "",
            };
          }
        },
      }),
    );
  }
};
ea = $(
  [Q(0, _0x46baf8(_0x4a41b2)), Q(1, _0x46baf8(_0x1c6c95)), Q(2, _0xaea4fd)],
  ea,
);
const ta = [_0x132fbe.id, _0x5651a8.id, _0x5a269b.id, _0x23d750.id];
let na = class extends _0x4b2a77 {
  constructor(
    _0x57b8ea,
    _0x36850d,
    _0x45b5fc,
    _0x18e2d8,
    _0x180370,
    _0x6722b,
    _0x42d6bd,
    _0x35fb5f,
    _0xe22f6e,
  ) {
    var _0x43d829;
    (super(),
      (this._injector = _0x57b8ea),
      (this._univerInstanceService = _0x36850d),
      (this._sheetsPivotTableAdaptorModel = _0x45b5fc),
      (this._sheetInterceptorService = _0x18e2d8),
      (this._confirmService = _0x180370),
      (this._localeService = _0x6722b),
      (this._sheetsPivotTableConfigModel = _0x42d6bd),
      (this._messageService = _0x35fb5f),
      (this._configService = _0xe22f6e),
      Z(this, "_defaultOverride", false),
      this._initMoveRangeConfirmCheck(),
      this._initRowColOperationCheck(),
      (this._defaultOverride =
        ((_0x43d829 = this._configService["getConfig"](_0x1d972c)) == null
          ? undefined
          : _0x43d829.defaultOverride) ?? false));
  }
  _initMoveRangeConfirmCheck() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptBeforeCommand"]({
        performCheck: async (_0xbe43a1) => {
          if (_0xbe43a1.id === _0x3f7896.id) {
            let _0x2d4f47 = _0x25afea(this._univerInstanceService);
            if (!_0x2d4f47) return Promise.resolve(false);
            let { unitId: _0x44ad98, subUnitId: _0x3a89ce } = _0x2d4f47,
              { fromRange: _0x385ac5, toRange: _0x24582a } = _0xbe43a1.params,
              _0x2702fb = this._sheetsPivotTableConfigModel[
                "getSubUnitPivotConfigs"
              ](_0x44ad98, _0x3a89ce);
            if (!(_0x2702fb != null && _0x2702fb.size))
              return Promise.resolve(true);
            for (let [_0x4e7abd, _0x50d8ec] of _0x2702fb) {
              let { targetCellInfo: _0x3ef218 } = _0x50d8ec,
                { row: _0x276c16, col: _0x2a2468 } = _0x3ef218,
                _0x1c6aea = _0x276c16 - _0x385ac5.startRow,
                _0xa5387d = _0x2a2468 - _0x385ac5.startColumn,
                _0x7f02ee = {
                  row: _0x24582a.startRow + _0x1c6aea,
                  col: _0x24582a.startColumn + _0xa5387d,
                },
                _0x285be0 = _0x7f02ee.row - _0x3ef218.row,
                _0x38b736 = _0x7f02ee.col - _0x3ef218.col,
                _0x4a943d = this._sheetsPivotTableAdaptorModel[
                  "getPivotItemRenderInfoCache"
                ](_0x44ad98, _0x3a89ce, _0x4e7abd),
                _0x306ba2 =
                  _0x4a943d == null ? undefined : _0x4a943d.rangesInfo;
              if (!_0x306ba2) return Promise.resolve(true);
              let _0x2cf40b = [];
              Object.keys(_0x306ba2).forEach((_0x1afb49) => {
                _0x306ba2[_0x1afb49].forEach((_0x1a43b7) => {
                  let _0x38a61e = { ..._0x1a43b7 };
                  ((_0x38a61e.startRow = _0x1a43b7.startRow + _0x285be0),
                    (_0x38a61e.endRow = _0x1a43b7.endRow + _0x285be0),
                    (_0x38a61e.startColumn = _0x1a43b7.startColumn + _0x38b736),
                    (_0x38a61e.endColumn = _0x1a43b7.endColumn + _0x38b736),
                    _0x2cf40b.push(_0x38a61e));
                });
              });
              let _0x4db4d = this._sheetInterceptorService[
                  "generateMutationsByRanges"
                ]({
                  unitId: _0x44ad98,
                  subUnitId: _0x3a89ce,
                  ranges: _0x2cf40b,
                }),
                _0x26d2ac = _0x3326e8(
                  this._injector,
                  _0x44ad98,
                  _0x3a89ce,
                  _0x2cf40b,
                );
              if (_0x4db4d.redos["length"] || _0x26d2ac.shouldClear) {
                if (this._defaultOverride) return Promise.resolve(true);
                {
                  let _0x38c296 = await this._confirmService["confirm"]({
                    id: "sheet-pivot.confirm.add-sheet-pivot",
                    title: {
                      title: this._localeService["t"](
                        "sheets-pivot-ui.perform.tips",
                      ),
                    },
                    children: {
                      title: this._localeService["t"](
                        "sheets-pivot-ui.perform.info",
                      ),
                    },
                    cancelText: this._localeService["t"](
                      "sheets-pivot-ui.perform.cancel",
                    ),
                    confirmText: this._localeService["t"](
                      "sheets-pivot-ui.perform.confirm",
                    ),
                  });
                  return Promise.resolve(_0x38c296);
                }
              }
            }
          }
          return Promise.resolve(true);
        },
      }),
    );
  }
  _initRowColOperationCheck() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptBeforeCommand"]({
        performCheck: async (_0x26632e) => {
          if (ta.includes(_0x26632e.id)) {
            let _0x13c5c0 = _0x26632e.params,
              { range: _0x4b0e57 } = _0x13c5c0,
              _0x5eaa09 = _0x25afea(this._univerInstanceService),
              _0x3770df =
                _0x13c5c0.unitId ||
                (_0x5eaa09 == null ? undefined : _0x5eaa09.unitId),
              _0xc3e797 =
                _0x13c5c0.subUnitId ||
                (_0x5eaa09 == null ? undefined : _0x5eaa09.subUnitId);
            if (!_0x3770df || !_0xc3e797) return Promise.resolve(true);
            let _0x180d12 = this._sheetsPivotTableConfigModel[
              "getSubUnitPivotConfigs"
            ](_0x3770df, _0xc3e797);
            if (_0x180d12 != null && _0x180d12.size)
              for (let [_0x6de4d, _0x8e4602] of _0x180d12) {
                let _0x4721d1 = this._sheetsPivotTableAdaptorModel[
                  "getPivotItemRenderInfoCache"
                ](_0x3770df, _0xc3e797, _0x6de4d);
                if (_0x4721d1 != null && _0x4721d1.rangesInfo) {
                  for (let _0x55a5ef of Object.keys(_0x4721d1.rangesInfo))
                    if (
                      _0x4721d1.rangesInfo[_0x55a5ef].some((_0x4c15c1) =>
                        _0x54a654.intersects(_0x4c15c1, _0x4b0e57),
                      )
                    )
                      return (
                        this._messageService["show"]({
                          type: _0x567a3a.Error,
                          content: this._localeService["t"](
                            "sheets-pivot-ui.perform.rowColError",
                          ),
                        }),
                        Promise.resolve(false)
                      );
                }
              }
          }
          return Promise.resolve(true);
        },
      }),
    );
  }
};
na = $(
  [
    Q(0, _0x46baf8(_0x2a2b22)),
    Q(1, _0x46baf8(_0x4a41b2)),
    Q(2, _0x46baf8(_0x1c6c95)),
    Q(3, _0x46baf8(_0x13c89a)),
    Q(4, _0x46baf8(_0x3ba214)),
    Q(5, _0x46baf8(_0x21b801)),
    Q(6, _0x46baf8(_0x52d40e)),
    Q(7, _0x46baf8(_0x145fa8)),
    Q(8, _0x46baf8(_0x4766cd)),
  ],
  na,
);
const ra = [_0x3e0db4.id, _0x4a5ad4.id, _0x1a715c.id];
let ia = class extends _0x4b2a77 {
  constructor(
    _0x1e31ae,
    _0x25d31c,
    _0x5b9836,
    _0x573244,
    _0x228bbe,
    _0x39336f,
  ) {
    (super(),
      (this._sheetsSelectionsService = _0x1e31ae),
      (this._univerInstanceService = _0x25d31c),
      (this._sheetsPivotTableAdaptorModel = _0x5b9836),
      (this._commandService = _0x573244),
      (this._sheetsPivotTableConfigModel = _0x228bbe),
      (this._localeService = _0x39336f),
      this._initEditListener());
  }
  _initEditListener() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x4333e6) => {
        if (ra.includes(_0x4333e6.id)) {
          var _0x4ef191;
          let _0x54825d =
            (_0x4ef191 =
              this._sheetsSelectionsService["getCurrentLastSelection"]()) ==
            null
              ? undefined
              : _0x4ef191.primary;
          if (!_0x54825d) return;
          let { actualRow: _0x55634f, actualColumn: _0x52364a } = _0x54825d,
            _0x3f7c22 = _0x2e8d6f(_0x55634f, _0x52364a),
            _0x3b76f1 = _0x25afea(
              this._univerInstanceService,
              _0x4333e6.params,
            );
          if (!_0x3b76f1) return;
          let { unitId: _0x50032d, subUnitId: _0x1e6db5 } = _0x3b76f1,
            _0x4d5f67 = this._sheetsPivotTableConfigModel[
              "getSubUnitPivotConfigs"
            ](_0x50032d, _0x1e6db5);
          if (_0x4d5f67 != null && _0x4d5f67.size)
            for (let [_0x4a71da] of _0x4d5f67) {
              let _0x9b9105 = this._sheetsPivotTableAdaptorModel[
                "getPivotItemRenderInfoCache"
              ](_0x50032d, _0x1e6db5, _0x4a71da);
              if (_0x9b9105 != null && _0x9b9105.rangesInfo) {
                for (let _0x29cb7c of Object.keys(_0x9b9105.rangesInfo))
                  if (
                    _0x9b9105.rangesInfo[_0x29cb7c].some((_0x20a062) =>
                      _0x54a654.intersects(_0x20a062, _0x3f7c22),
                    )
                  )
                    throw new _0x43ae95(
                      this._localeService["t"](
                        "sheets-pivot-ui.msg.editCellError",
                      ),
                    );
              }
            }
        }
      }),
    );
  }
};
ia = $(
  [
    Q(0, _0x46baf8(_0x28a598)),
    Q(1, _0x46baf8(_0x4a41b2)),
    Q(2, _0x46baf8(_0x1c6c95)),
    Q(3, _0x46baf8(_0x5c53fb)),
    Q(4, _0x46baf8(_0x52d40e)),
    Q(5, _0x46baf8(_0x21b801)),
  ],
  ia,
);
let aa = class extends _0x4b2a77 {
  constructor(_0x52e150) {
    (super(), (this._menuManagerService = _0x52e150), this._initMenu());
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](ci);
  }
};
aa = $([Q(0, _0x47814d)], aa);
let oa = class extends _0x4b2a77 {
  constructor(_0x400919, _0x374788, _0x2e6e21, _0x4b6d25) {
    (super(),
      (this._sheetsPivotTableAdaptorModel = _0x400919),
      (this._formatPainterService = _0x374788),
      (this._messageService = _0x2e6e21),
      (this._localeService = _0x4b6d25),
      this._initFormatPainterListener());
  }
  _initFormatPainterListener() {
    let _0x51e3f6 = this._sheetsPivotTableAdaptorModel,
      _0x27ddcb = this._messageService,
      _0x126099 = this._localeService;
    this._formatPainterService["addHook"]({
      id: "pivot-format-painter-hook",
      onBeforeApply(_0x4c4592) {
        let { redoMutationsInfo: _0x28e56b } = _0x4c4592;
        for (let _0x5241b1 of _0x28e56b)
          if (_0x5241b1.id === _0x52f251.id) {
            let {
              unitId: _0x1dac8c,
              subUnitId: _0x2c0df6,
              ranges: _0x11866a,
            } = _0x5241b1.params;
            for (let _0xcb7e9f of _0x11866a)
              if (
                _0x51e3f6.getIntersectsPivotTable(
                  _0x1dac8c,
                  _0x2c0df6,
                  _0xcb7e9f,
                ).length > 0
              )
                return (
                  _0x27ddcb.show({
                    type: _0x567a3a.Error,
                    content: _0x126099.t("sheets-pivot-ui.msg.mergeCellError"),
                  }),
                  false
                );
          }
        return true;
      },
    });
  }
};
oa = $(
  [
    Q(0, _0x46baf8(_0x1c6c95)),
    Q(1, _0x46baf8(_0x2cf811)),
    Q(2, _0x46baf8(_0x145fa8)),
    Q(3, _0x46baf8(_0x21b801)),
  ],
  oa,
);
let sa = class extends _0x4b2a77 {
  constructor(_0x772895, _0x3ee4e2, _0x4df0f8) {
    (super(),
      (this._sheetPrintInterceptorService = _0x772895),
      (this._sheetsPivotTableAdaptorModel = _0x3ee4e2),
      (this._sheetsPivotTableConfigModel = _0x4df0f8),
      this._initPrintArea());
  }
  _initPrintArea() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_RANGE,
        {
          handler: (_0x271842, _0x14149a, _0x376b10) => {
            let { unitId: _0x208227, subUnitId: _0xba87f6 } = _0x14149a,
              _0x6cb096 =
                (_0x271842 == null ? undefined : _0x271842.startRow) ?? 1 / 0,
              _0x1d51d2 =
                (_0x271842 == null ? undefined : _0x271842.endRow) ?? -1 / 0,
              _0x30e694 =
                (_0x271842 == null ? undefined : _0x271842.startColumn) ??
                1 / 0,
              _0x423b70 =
                (_0x271842 == null ? undefined : _0x271842.endColumn) ?? -1 / 0,
              _0x4d558c = this._sheetsPivotTableConfigModel[
                "getSubUnitPivotConfigs"
              ](_0x208227, _0xba87f6);
            if (!_0x4d558c) return _0x376b10(_0x271842);
            for (let [_0x527157, _0x33c063] of _0x4d558c) {
              var _0x51575c;
              let _0xf96b4b =
                (_0x51575c = this._sheetsPivotTableAdaptorModel[
                  "getPivotItemRenderInfoCache"
                ](_0x208227, _0xba87f6, _0x527157)) == null
                  ? undefined
                  : _0x51575c.rangesInfo;
              _0xf96b4b &&
                Object.values(_0xf96b4b).forEach((_0x454d5d) => {
                  _0x454d5d.forEach((_0x2f5da2) => {
                    let {
                      startRow: _0x3561dc,
                      endRow: _0x4aeb68,
                      startColumn: _0x2e44bf,
                      endColumn: _0x17e1fb,
                    } = _0x2f5da2;
                    ((_0x6cb096 = Math.min(_0x3561dc, _0x6cb096)),
                      (_0x1d51d2 = Math.max(_0x4aeb68, _0x1d51d2)),
                      (_0x30e694 = Math.min(_0x2e44bf, _0x30e694)),
                      (_0x423b70 = Math.max(_0x17e1fb, _0x423b70)));
                  });
                });
            }
            let _0x39a023 = {
              startRow: _0x6cb096,
              endRow: _0x1d51d2,
              startColumn: _0x30e694,
              endColumn: _0x423b70,
            };
            return _0x1db1c9(_0x39a023)
              ? _0x376b10(_0x39a023)
              : _0x376b10(_0x271842);
          },
        },
      ),
    );
  }
};
((sa = $(
  [
    Q(0, _0x46baf8(_0x3b9af9)),
    Q(1, _0x46baf8(_0x1c6c95)),
    Q(2, _0x46baf8(_0x52d40e)),
  ],
  sa,
)),
  new Path2D(
    "M3.30363 3C2.79117 3 2.51457 3.60097 2.84788 3.99024L6.8 8.60593V12.5662C6.8 12.7184 6.8864 12.8575 7.02289 12.9249L8.76717 13.7863C8.96655 13.8847 9.2 13.7396 9.2 13.5173V8.60593L13.1521 3.99024C13.4854 3.60097 13.2088 3 12.6964 3H3.30363Z",
  ));
var ca = class {
  static drawNoSetting(_0x206021, _0x417e44, _0x16e10a, _0x40c4de) {
    (_0x206021.save(),
      _0x212b3e.drawWith(_0x206021, {
        radius: 2,
        width: 16,
        height: 16,
        fill: _0x40c4de,
      }),
      (_0x206021.lineCap = "square"),
      (_0x206021.strokeStyle = _0x16e10a),
      _0x206021.scale(_0x417e44 / 16, _0x417e44 / 16),
      _0x206021.beginPath(),
      (_0x206021.lineWidth = 1),
      (_0x206021.lineCap = "round"),
      _0x206021.moveTo(3, 4),
      _0x206021.lineTo(13, 4),
      _0x206021.moveTo(4.5, 8),
      _0x206021.lineTo(11.5, 8),
      _0x206021.moveTo(6, 12),
      _0x206021.lineTo(10, 12),
      _0x206021.stroke(),
      _0x206021.restore());
  }
  static drawExpand(_0x5bb16c, _0x106690, _0x1e03e5, _0x46cc6e, _0x1ed3cf) {
    let _0x519a07 = (_0x1ed3cf - _0x106690) / 2;
    (_0x5bb16c.save(),
      (_0x5bb16c.fillStyle = _0x46cc6e),
      (_0x5bb16c.strokeStyle = _0x1e03e5),
      _0x5bb16c.beginPath(),
      _0x5bb16c.moveTo(6, _0x519a07),
      _0x5bb16c.lineTo(4 + _0x106690 - 2, _0x519a07),
      _0x5bb16c.arcTo(
        4 + _0x106690,
        _0x519a07,
        4 + _0x106690,
        _0x519a07 + 2,
        2,
      ),
      _0x5bb16c.lineTo(4 + _0x106690, _0x519a07 + _0x106690 - 2),
      _0x5bb16c.arcTo(
        4 + _0x106690,
        _0x519a07 + _0x106690,
        4 + _0x106690 - 2,
        _0x519a07 + _0x106690,
        2,
      ),
      _0x5bb16c.lineTo(6, _0x519a07 + _0x106690),
      _0x5bb16c.arcTo(
        4,
        _0x519a07 + _0x106690,
        4,
        _0x519a07 + _0x106690 - 2,
        2,
      ),
      _0x5bb16c.lineTo(4, _0x519a07 + 2),
      _0x5bb16c.arcTo(4, _0x519a07, 6, _0x519a07, 2),
      _0x5bb16c.closePath(),
      _0x5bb16c.stroke(),
      _0x5bb16c.fill(),
      _0x5bb16c.beginPath(),
      _0x5bb16c.moveTo(4 + _0x106690 / 2, _0x519a07 + 2),
      _0x5bb16c.lineTo(4 + _0x106690 / 2, _0x519a07 + _0x106690 - 2),
      _0x5bb16c.moveTo(6, _0x519a07 + _0x106690 / 2),
      _0x5bb16c.lineTo(4 + _0x106690 - 2, _0x519a07 + _0x106690 / 2),
      _0x5bb16c.stroke(),
      _0x5bb16c.restore());
  }
  static drawCollapse(_0x499e86, _0x50ec29, _0x3f3e33, _0x21f09c, _0x5cf6df) {
    let _0x318641 = (_0x5cf6df - _0x50ec29) / 2;
    (_0x499e86.save(),
      (_0x499e86.fillStyle = _0x21f09c),
      (_0x499e86.strokeStyle = _0x3f3e33),
      _0x499e86.beginPath(),
      _0x499e86.moveTo(6, _0x318641),
      _0x499e86.lineTo(4 + _0x50ec29 - 2, _0x318641),
      _0x499e86.arcTo(
        4 + _0x50ec29,
        _0x318641,
        4 + _0x50ec29,
        _0x318641 + 2,
        2,
      ),
      _0x499e86.lineTo(4 + _0x50ec29, _0x318641 + _0x50ec29 - 2),
      _0x499e86.arcTo(
        4 + _0x50ec29,
        _0x318641 + _0x50ec29,
        4 + _0x50ec29 - 2,
        _0x318641 + _0x50ec29,
        2,
      ),
      _0x499e86.lineTo(6, _0x318641 + _0x50ec29),
      _0x499e86.arcTo(
        4,
        _0x318641 + _0x50ec29,
        4,
        _0x318641 + _0x50ec29 - 2,
        2,
      ),
      _0x499e86.lineTo(4, _0x318641 + 2),
      _0x499e86.arcTo(4, _0x318641, 6, _0x318641, 2),
      _0x499e86.closePath(),
      _0x499e86.fill(),
      _0x499e86.stroke(),
      _0x499e86.beginPath(),
      _0x499e86.moveTo(6, _0x318641 + _0x50ec29 / 2),
      _0x499e86.lineTo(4 + _0x50ec29 - 2, _0x318641 + _0x50ec29 / 2),
      _0x499e86.stroke(),
      _0x499e86.restore());
  }
  static drawIconByPath(_0x389610, _0x5300b1, _0x1712f6, _0x322d96) {
    (_0x389610.save(),
      (_0x389610.strokeStyle = _0x1712f6),
      (_0x389610.fillStyle = _0x322d96),
      _0x212b3e.drawWith(_0x389610, {
        radius: 2,
        width: 16,
        height: 16,
        fill: _0x322d96,
      }),
      _0x5300b1.forEach((_0x3a12a1) => {
        let _0x212123 = new Path2D(_0x3a12a1);
        ((_0x389610.fillStyle = _0x1712f6),
          _0x389610.fill(_0x212123, "evenodd"));
      }),
      _0x389610.restore());
  }
};
const la = [
    "M3.30363 3C2.79117 3 2.51457 3.60097 2.84788 3.99024L6.8 8.60593V12.5662C6.8 12.7184 6.8864 12.8575 7.02289 12.9249L8.76717 13.7863C8.96655 13.8847 9.2 13.7396 9.2 13.5173V8.60593L13.1521 3.99024C13.4854 3.60097 13.2088 3 12.6964 3H3.30363Z",
  ],
  ua = [
    "M12.4008\x2013.1831C12.6907\x2013.1831\x2012.9258\x2012.9481\x2012.9258\x2012.6581V4.60873L14.013\x205.69597C14.218\x205.901\x2014.5505\x205.901\x2014.7555\x205.69597C14.9605\x205.49094\x2014.9605\x205.15853\x2014.7555\x204.95351L12.7721\x202.97017C12.5671\x202.76515\x2012.2347\x202.76515\x2012.0297\x202.97017L10.0463\x204.95351C9.84132\x205.15853\x209.84132\x205.49094\x2010.0463\x205.69597C10.2514\x205.901\x2010.5838\x205.901\x2010.7888\x205.69597L11.8758\x204.60901V12.6581C11.8758\x2012.9481\x2012.1108\x2013.1831\x2012.4008\x2013.1831Z",
    "M1.28069 4.85447C0.842195 4.33439 1.21191 3.5391 1.89218 3.5391H8.59333C9.2736 3.5391 9.64331 4.33439 9.20482 4.85447L6.51052 8.0501V11.6601C6.51052 12.2245 5.94174 12.6114 5.41683 12.404L4.48092 12.0343C4.1756 11.9136 3.97498 11.6187 3.97498 11.2904V8.0501L1.28069 4.85447Z",
  ],
  da = [
    "M12.4008 2.81641C12.6907 2.81641 12.9258 3.05146 12.9258 3.34141V11.3908L14.013 10.3036C14.218 10.0986 14.5505 10.0986 14.7555 10.3036C14.9605 10.5086 14.9605 10.841 14.7555 11.046L12.7721 13.0294C12.5671 13.2344 12.2347 13.2344 12.0297 13.0294L10.0463 11.046C9.84132 10.841 9.84132 10.5086 10.0463 10.3036C10.2514 10.0986 10.5838 10.0986 10.7888 10.3036L11.8758 11.3905V3.34141C11.8758 3.05146 12.1108 2.81641 12.4008 2.81641Z",
    "M1.28069 4.85444C0.842195 4.33435 1.21191 3.53906 1.89218 3.53906H8.59333C9.2736 3.53906 9.64331 4.33435 9.20482 4.85443L6.51052 8.05006V11.6601C6.51052 12.2245 5.94174 12.6113 5.41683 12.404L4.48092 12.0342C4.1756 11.9136 3.97498 11.6186 3.97498 11.2903V8.05006L1.28069 4.85444Z",
  ],
  fa = [
    "M11.9003\x2013.7046C11.9003\x2013.9969\x2011.6633\x2014.2339\x2011.371\x2014.2339C11.0787\x2014.2339\x2010.8417\x2013.9969\x2010.8417\x2013.7046V3.57272L9.74577\x204.66862C9.53906\x204.87534\x209.20391\x204.87534\x208.9972\x204.66862C8.79048\x204.46191\x208.79048\x204.12676\x208.9972\x203.92005L10.9969\x201.92039C11.2036\x201.71368\x2011.5387\x201.71368\x2011.7454\x201.92039L13.7451\x203.92005C13.9518\x204.12676\x2013.9518\x204.46191\x2013.7451\x204.66862C13.5384\x204.87534\x2013.2032\x204.87534\x2012.9965\x204.66862L11.9003\x203.57243V13.7046Z",
    "M2.69779 10.0113C2.40546 10.0113 2.16847 9.77429 2.16847 9.48196C2.16847 9.18962 2.40546 8.95264 2.69779 8.95264H6.67804C6.89213 8.95264 7.08514 9.0816 7.16707 9.2794C7.249 9.47719 7.20371 9.70486 7.05233 9.85624L3.97569 12.9329H6.67804C6.97038 12.9329 7.20736 13.1699 7.20736 13.4622C7.20736 13.7545 6.97038 13.9915 6.67804 13.9915H2.69779C2.4837 13.9915 2.29069 13.8626 2.20876 13.6648C2.12684 13.467 2.17212 13.2393 2.32351 13.0879L5.40015 10.0113H2.69779Z",
    "M5.51638 2.58693C5.23363 1.81542 4.14248 1.81543 3.85973 2.58693L2.13245 7.29995C2.03185 7.57443 2.17281 7.87849 2.4473 7.97909C2.72178 8.07969 3.02584 7.93872 3.12644 7.66424L3.64346 6.25351L3.64504 6.25351H5.73266L6.24968 7.66424C6.35027 7.93872 6.65433 8.07969 6.92882 7.97909C7.2033 7.87849 7.34426 7.57443 7.24367 7.29995L5.51638 2.58693ZM5.34467 5.19487L4.68806 3.40325L4.03144 5.19487H5.34467Z",
  ],
  pa = [
    "M11.9003 2.29495C11.9003 2.00261 11.6633 1.76562 11.371 1.76562C11.0787 1.76562 10.8417 2.00261 10.8417 2.29495V12.4268L9.74577 11.3309C9.53906 11.1242 9.20391 11.1242 8.9972 11.3309C8.79048 11.5376 8.79048 11.8727 8.9972 12.0795L10.9969 14.0791C11.2036 14.2858 11.5387 14.2858 11.7454 14.0791L13.7451 12.0795C13.9518 11.8727 13.9518 11.5376 13.7451 11.3309C13.5384 11.1242 13.2032 11.1242 12.9965 11.3309L11.9003 12.4271V2.29495Z",
    "M2.69792 10.0113C2.40558 10.0113 2.16859 9.77429 2.16859 9.48196C2.16859 9.18962 2.40558 8.95264 2.69792 8.95264H6.67816C6.89225 8.95264 7.08526 9.0816 7.16719 9.2794C7.24912 9.47719 7.20384 9.70486 7.05245 9.85624L3.97581 12.9329H6.67816C6.9705 12.9329 7.20749 13.1699 7.20749 13.4622C7.20749 13.7545 6.9705 13.9915 6.67816 13.9915H2.69792C2.48383 13.9915 2.29082 13.8626 2.20889 13.6648C2.12696 13.467 2.17224 13.2393 2.32363 13.0879L5.40027 10.0113H2.69792Z",
    "M5.5165 2.58693C5.23375 1.81542 4.1426 1.81543 3.85985 2.58693L2.13257 7.29995C2.03197 7.57443 2.17294 7.8785 2.44742 7.97909C2.7219 8.07969 3.02596 7.93872 3.12656 7.66424L3.64358 6.25351L3.64516 6.25351H5.73278L6.2498 7.66424C6.35039 7.93872 6.65446 8.07969 6.92894 7.97909C7.20342 7.8785 7.34438 7.57443 7.24379 7.29995L5.5165 2.58693ZM5.34479 5.19487L4.68818 3.40325L4.03156 5.19487H5.34479Z",
  ],
  ma = new Set([
    _0x3a8679.FilterAll,
    _0x3a8679.FilterPartial,
    _0x3a8679.FilterSingle,
    _0x3a8679.FilterNoneSortNone,
    _0x3a8679.FilteredSortAsc,
    _0x3a8679.FilteredSortDesc,
    _0x3a8679.FilteredSortNone,
    _0x3a8679.FilterNoneSortAsc,
    _0x3a8679.FilterNoneSortDesc,
  ]),
  ha = new Set([_0x3a8679.Expand, _0x3a8679.Collapse]);
let ga = class extends _0x50c988 {
  constructor(_0x573bc5, _0x243e2c, _0x5e77d7, _0x520d54) {
    (super(_0x573bc5, _0x243e2c),
      (this._commandService = _0x5e77d7),
      (this._themeService = _0x520d54),
      Z(this, "_cellWidth", 0),
      Z(this, "_cellHeight", 0),
      Z(this, "_hovered", false),
      Z(this, "_pivotParams", undefined),
      this.setShapeProps(_0x243e2c),
      this.onPointerDown$["subscribeEvent"]((_0x450e89) =>
        this.onPointerDown(_0x450e89),
      ),
      this.onPointerEnter$["subscribeEvent"](() => this.onPointerEnter()),
      this.onPointerLeave$["subscribeEvent"](() => this.onPointerLeave()));
  }
  setShapeProps(_0x596e59) {
    (_0x596e59.cellHeight !== undefined &&
      (this._cellHeight = _0x596e59.cellHeight),
      _0x596e59.cellWidth !== undefined &&
        (this._cellWidth = _0x596e59.cellWidth),
      _0x596e59.pivotParams !== undefined &&
        (this._pivotParams = _0x596e59.pivotParams),
      this.transformByState({
        width: _0x596e59.width,
        height: _0x596e59.height,
      }));
  }
  onPointerDown(_0x3b68fb) {
    if (_0x3b68fb.button === 2) return;
    let {
      col: _0x328a5b,
      row: _0xe99436,
      unitId: _0x333f7b,
      subUnitId: _0xbaa396,
      buttonType: _0x13d15b,
    } = this._pivotParams;
    ma.has(_0x13d15b)
      ? setTimeout(() => {
          this._commandService["executeCommand"](Bn.id, {
            row: _0xe99436,
            col: _0x328a5b,
            unitId: _0x333f7b,
            subUnitId: _0xbaa396,
          });
        }, 200)
      : this._commandService["executeCommand"](_0x18a0be.id, {
          row: _0xe99436,
          col: _0x328a5b,
          unitId: _0x333f7b,
          subUnitId: _0xbaa396,
          collapse: _0x13d15b === _0x3a8679.Expand,
        });
  }
  onPointerEnter() {
    ((this._hovered = true),
      this.setCursor(_0x36b46e.POINTER),
      this.makeDirty(true));
  }
  onPointerLeave() {
    ((this._hovered = false),
      this.setCursor(_0x36b46e.DEFAULT),
      this.makeDirty(true));
  }
  _draw(_0x390d9a) {
    var _0x33cd6d, _0x39a27f;
    if (!((_0x33cd6d = this._pivotParams) != null && _0x33cd6d.buttonType))
      return;
    let _0x1d19fd = this._themeService["getColorFromTheme"]("primary.600"),
      _0x2a48e6 = this._themeService["getColorFromTheme"]("gray.50");
    _0x390d9a.save();
    let _0xf1c8e6 = new Path2D();
    (_0xf1c8e6.rect(0, 0, this._cellWidth, this._cellHeight),
      _0x390d9a.clip(_0xf1c8e6),
      ((_0x39a27f = this._pivotParams) == null
        ? undefined
        : _0x39a27f.buttonType) === _0x3a8679.Collapse
        ? ca.drawExpand(_0x390d9a, 12, _0x1d19fd, _0x2a48e6, this._cellHeight)
        : this._pivotParams["buttonType"] === _0x3a8679.Expand
          ? ca.drawCollapse(
              _0x390d9a,
              12,
              _0x1d19fd,
              _0x2a48e6,
              this._cellHeight,
            )
          : this._pivotParams["buttonType"] === _0x3a8679.FilterAll ||
              this._pivotParams["buttonType"] === _0x3a8679.FilterNoneSortNone
            ? ca.drawNoSetting(_0x390d9a, 16, _0x1d19fd, _0x2a48e6)
            : this._pivotParams["buttonType"] === _0x3a8679.FilterPartial ||
                this._pivotParams["buttonType"] === _0x3a8679.FilterSingle ||
                this._pivotParams["buttonType"] === _0x3a8679.FilteredSortNone
              ? ca.drawIconByPath(_0x390d9a, la, _0x1d19fd, _0x2a48e6)
              : this._pivotParams["buttonType"] === _0x3a8679.FilterNoneSortAsc
                ? ca.drawIconByPath(_0x390d9a, fa, _0x1d19fd, _0x2a48e6)
                : this._pivotParams["buttonType"] ===
                    _0x3a8679.FilterNoneSortDesc
                  ? ca.drawIconByPath(_0x390d9a, pa, _0x1d19fd, _0x2a48e6)
                  : this._pivotParams["buttonType"] ===
                      _0x3a8679.FilteredSortAsc
                    ? ca.drawIconByPath(_0x390d9a, ua, _0x1d19fd, _0x2a48e6)
                    : this._pivotParams["buttonType"] ===
                        _0x3a8679.FilteredSortDesc &&
                      ca.drawIconByPath(_0x390d9a, da, _0x1d19fd, _0x2a48e6),
      _0x390d9a.restore());
  }
};
ga = $([Q(2, _0x5c53fb), Q(3, _0x46baf8(_0x158b27))], ga);
function _a(_0x278444, _0x4d1d95, _0x578beb) {
  let {
    startX: _0x1c8101,
    startY: _0x3f2c1f,
    endX: _0x4d4555,
    endY: _0x1f0b38,
  } = _0x578beb;
  return {
    left: (_0x4d1d95 === "filter" ? _0x278444 !== "rtl" : _0x278444 === "rtl")
      ? _0x4d4555 - 16 - 1
      : _0x1c8101 + 1,
    top: _0x4d1d95 === "filter" ? _0x1f0b38 - 16 - 1 : _0x3f2c1f + 1,
  };
}
let va = class extends _0x4b2a77 {
  constructor(
    _0x66ae2b,
    _0x5830c4,
    _0x22ed64,
    _0x54025c,
    _0xdcd9c8,
    _0x504170,
    _0x197e18,
    _0x14eed4,
    _0xdc7e03,
  ) {
    (super(),
      (this._context = _0x66ae2b),
      (this._injector = _0x5830c4),
      (this._sheetsPivotTableAdaptorModel = _0x22ed64),
      (this._sheetSkeletonManagerService = _0x54025c),
      (this._sheetsPivotTableConfigModel = _0xdcd9c8),
      (this._commandService = _0x504170),
      (this._sheetPermissionCheckController = _0x197e18),
      (this._permissionService = _0x14eed4),
      (this._localeService = _0xdc7e03),
      Z(this, "_pivotButtonShapesArr", []),
      this._initButtonRender(),
      this._initSkeleton(),
      this._initListener());
  }
  _initButtonRender() {
    this.disposeWithMe(
      _0x17aa8b(
        this._sheetsPivotTableAdaptorModel["viewUpdate$"].pipe(_0x23ee41(0)),
        this._sheetSkeletonManagerService["currentSkeleton$"],
        this._sheetsPivotTableConfigModel["pivotConfigChange$"],
        this._permissionService["permissionPointUpdate$"].pipe(_0x23ee41(100)),
      ).subscribe(() => {
        if (!this._context["unit"]) return;
        let _0x4e3ac4 = this._context["unitId"],
          _0x315d87 = this._context["unit"].getActiveSheet().getSheetId(),
          { scene: _0x443028 } = this._context,
          _0x343326 = this._localeService["getDirection"](),
          _0x4416e4 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
        if (!_0x4416e4) return;
        let _0x53a135 = this._pivotButtonShapesArr;
        (_0x53a135.forEach((_0x4d04a1) => _0x4d04a1.dispose()),
          _0x53a135.splice(0, _0x53a135.length),
          this._sheetsPivotTableAdaptorModel["getSubUnitPivotMatrix"](
            _0x4e3ac4,
            _0x315d87,
          ).forValue((_0x491356, _0x4cac7a, _0x3f8aec) => {
            if (_0x3f8aec != null && _0x3f8aec.pbt) {
              let _0x2364fb =
                  "sheets-pivot-button-" +
                  _0x491356 +
                  "-" +
                  _0x4cac7a +
                  "-" +
                  _0x4e3ac4 +
                  "-" +
                  _0x315d87,
                {
                  startX: _0x272746,
                  startY: _0x357c08,
                  endX: _0xdf0f34,
                  endY: _0x19d3f6,
                } = _0x5c7d8c(_0x491356, _0x4cac7a, _0x443028, _0x4416e4),
                _0x259a85 = _0xdf0f34 - _0x272746,
                _0x551c15 = _0x19d3f6 - _0x357c08;
              if (
                _0x551c15 < 16 / 2 ||
                _0x259a85 < 16 / 2 ||
                this._sheetPermissionCheckController[
                  "permissionCheckWithRanges"
                ](
                  {
                    workbookTypes: [_0x443e77],
                    worksheetTypes: [_0x5d9f5f, _0x747f01, _0x22c740],
                    rangeTypes: [_0x2b4c89, _0x689e5b],
                  },
                  [
                    {
                      startRow: _0x491356,
                      endRow: _0x491356,
                      startColumn: _0x4cac7a,
                      endColumn: _0x4cac7a,
                    },
                  ],
                  _0x4e3ac4,
                  _0x315d87,
                ) === false
              )
                return;
              let _0x287540;
              if (ma.has(_0x3f8aec.pbt)) {
                let { left: _0x5ad3cb, top: _0x14be29 } = _a(
                  _0x343326,
                  "filter",
                  {
                    startX: _0x272746,
                    startY: _0x357c08,
                    endX: _0xdf0f34,
                    endY: _0x19d3f6,
                  },
                );
                _0x287540 = {
                  left: _0x5ad3cb,
                  top: _0x14be29,
                  height: 16,
                  width: 16,
                  zIndex: 5000,
                  cellWidth: _0x259a85,
                  cellHeight: _0x551c15,
                  pivotParams: {
                    col: _0x4cac7a,
                    row: _0x491356,
                    unitId: _0x4e3ac4,
                    subUnitId: _0x315d87,
                    buttonType: _0x3f8aec.pbt,
                  },
                };
              } else {
                if (ha.has(_0x3f8aec.pbt)) {
                  let { left: _0xcf4802, top: _0xcc60cb } = _a(
                    _0x343326,
                    "collapse",
                    {
                      startX: _0x272746,
                      startY: _0x357c08,
                      endX: _0xdf0f34,
                      endY: _0x19d3f6,
                    },
                  );
                  _0x287540 = {
                    left: _0xcf4802,
                    top: _0xcc60cb,
                    height: 16,
                    width: 16,
                    zIndex: 5000,
                    cellWidth: _0x259a85,
                    cellHeight: _0x551c15,
                    pivotParams: {
                      col: _0x4cac7a,
                      row: _0x491356,
                      unitId: _0x4e3ac4,
                      subUnitId: _0x315d87,
                      buttonType: _0x3f8aec.pbt,
                    },
                  };
                } else return;
              }
              let _0x4eeb36 = this._injector["createInstance"](
                ga,
                _0x2364fb,
                _0x287540,
              );
              _0x53a135.push(_0x4eeb36);
            }
          }),
          _0x53a135.length && _0x443028.addObjects(_0x53a135),
          _0x443028.makeDirty());
      }),
    );
  }
  _initSkeleton() {
    var _0x25eb72;
    this.disposeWithMe(
      this._sheetsPivotTableAdaptorModel["markDirty$"].subscribe(
        ({ unitId: _0x4e2274, subUnitId: _0xad265a }) => {
          if (
            _0x4e2274 === this._context["unitId"] &&
            (this._sheetSkeletonManagerService["makeDirty"]({
              sheetId: _0xad265a,
            }),
            this._context["unit"].getActiveSheet().getSheetId() === _0xad265a)
          ) {
            var _0x855d9d;
            (this._sheetSkeletonManagerService["reCalculate"](),
              (_0x855d9d = this._context["mainComponent"]) == null ||
                _0x855d9d.makeDirty());
          }
        },
      ),
    );
    let _0x2c4291 = this._context["unitId"];
    (this._context["unit"].getSheets().forEach((_0x88cd1f) => {
      var _0x10c165;
      let _0x450c52 = _0x88cd1f.getSheetId();
      (_0x10c165 = this._sheetsPivotTableAdaptorModel[
        "getSubUnitPivotRenderCache"
      ](_0x2c4291, _0x450c52)) != null &&
        _0x10c165.size &&
        this._sheetSkeletonManagerService["makeDirty"]({ sheetId: _0x450c52 });
    }),
      this._sheetSkeletonManagerService["reCalculate"](),
      (_0x25eb72 = this._context["mainComponent"]) == null ||
        _0x25eb72.makeDirty());
  }
  _initListener() {
    let _0xa054d5 = new _0x4256e5(),
      { spreadsheet: _0x1f8375 } = _0x441540(
        this._context["unit"],
        this._context,
      );
    _0xa054d5.add(
      _0x1f8375.onDblclick$["subscribeEvent"]((_0x11bebd) => {
        if (_0x11bebd.button === 2) return;
        let _0x58c96b =
          this._sheetSkeletonManagerService["getCurrentSkeleton"]();
        if (_0x58c96b == null) return;
        let _0x4e5a71 = this._context["scene"],
          { row: _0x42316e, column: _0x352e2c } = _0x50fd4c(
            _0x11bebd.offsetX,
            _0x11bebd.offsetY,
            _0x4e5a71,
            _0x58c96b,
          );
        this._commandService["executeCommand"](_0x5c2aba.id, {
          row: _0x42316e,
          col: _0x352e2c,
        });
      }),
    );
  }
};
va = $(
  [
    Q(1, _0x46baf8(_0x2a2b22)),
    Q(2, _0x46baf8(_0x1c6c95)),
    Q(3, _0x46baf8(_0x4f7550)),
    Q(4, _0x46baf8(_0x52d40e)),
    Q(5, _0x46baf8(_0x5c53fb)),
    Q(6, _0x46baf8(_0x21ceff)),
    Q(7, _0x46baf8(_0x893235)),
    Q(8, _0x46baf8(_0x21b801)),
  ],
  va,
);
var ya = class e extends _0x50c988 {
  constructor(_0x47f7cf) {
    (super("SHEET_PIVOT_MOVE_KEY"),
      Z(this, "_moveType", undefined),
      (this._moveType = _0x47f7cf));
  }
  _draw(_0x34574f) {
    this.width !== 0 && this.height !== 0 && e.drawWith(_0x34574f, this);
  }
  static drawWith(_0x3b6ed3, _0x32c08e) {
    let _0x1b1542 = _0x32c08e._moveType;
    if (
      (_0x3b6ed3.save(),
      (_0x3b6ed3.strokeStyle = "#8bc34a"),
      (_0x3b6ed3.lineWidth = 2),
      _0x1b1542 === "row")
    ) {
      let _0x58b789 = _0x32c08e.width;
      if (!_0x58b789) return;
      (_0x3b6ed3.beginPath(),
        _0x3b6ed3.moveTo(0, 0),
        _0x3b6ed3.lineTo(0 + _0x58b789, 0),
        _0x3b6ed3.moveTo(0, 0 - 20 / 2),
        _0x3b6ed3.lineTo(0, 10),
        _0x3b6ed3.moveTo(0 + _0x58b789, 0 - 20 / 2),
        _0x3b6ed3.lineTo(0 + _0x58b789, 10));
    } else {
      let _0x56b840 = _0x32c08e.height;
      if (!_0x56b840) return;
      (_0x3b6ed3.moveTo(0, 0),
        _0x3b6ed3.lineTo(0, 0 + _0x56b840),
        _0x3b6ed3.moveTo(0 - 20 / 2, 0),
        _0x3b6ed3.lineTo(10, 0),
        _0x3b6ed3.moveTo(0 - 20 / 2, 0 + _0x56b840),
        _0x3b6ed3.lineTo(10, 0 + _0x56b840));
    }
    (_0x3b6ed3.stroke(), _0x3b6ed3.restore());
  }
};
let ba = class extends _0x4b2a77 {
  constructor(
    _0x14ad41,
    _0x5c49f9,
    _0x57afa4,
    _0xe925aa,
    _0x1daf42,
    _0x9d58f3,
  ) {
    (super(),
      (this._context = _0x14ad41),
      (this._sheetsPivotTableAdaptorModel = _0x5c49f9),
      (this._sheetSkeletonManagerService = _0x57afa4),
      (this._commandService = _0xe925aa),
      (this._selectionRenderService = _0x1daf42),
      (this._sheetsSelectionsService = _0x9d58f3),
      Z(this, "_pivotSelectionMoveShape", undefined),
      Z(this, "_scenePointerMoveSubscribe", undefined),
      Z(this, "_scenePointerUpSubscribe", undefined),
      Z(this, "_selectionControl", undefined),
      Z(this, "_moveStartRange", undefined),
      Z(this, "_moveStartCellIndex", undefined),
      Z(this, "_moveRowOrCol", "row"),
      Z(this, "_targetRange", undefined),
      Z(this, "_movePivotId", undefined),
      this._initControl());
  }
  _controlMoving(_0x2d8adf, _0x2fcb93) {
    let _0x4b6d7d = this._context["scene"],
      _0x501b4d = _0x4b6d7d.getScrollXYInfoByViewport(
        _0x33d0a5.FromArray([_0x2d8adf, _0x2fcb93]),
      ),
      { scaleX: _0x4d76be, scaleY: _0x3577ab } = _0x4b6d7d.getAncestorScale(),
      _0x4f4066 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!_0x4f4066 || !this._moveStartRange || !this._moveStartCellIndex)
      return;
    let { row: _0x1c590b, column: _0x46e44f } = _0x4f4066.getCellIndexByOffset(
      _0x2d8adf,
      _0x2fcb93,
      _0x4d76be,
      _0x3577ab,
      _0x501b4d,
    );
    if (this._moveRowOrCol === "row") {
      var _0x13ccb8;
      let _0x116853 = 0,
        _0x4b93aa = 0,
        _0x43d5cc =
          this._moveStartRange["endColumn"] -
          this._moveStartRange["startColumn"] +
          1;
      if (
        this._moveStartCellIndex["column"] ===
        this._moveStartRange["startColumn"]
      )
        ((_0x116853 = _0x46e44f), (_0x4b93aa = _0x46e44f + _0x43d5cc - 1));
      else {
        if (
          this._moveStartCellIndex["column"] ===
          this._moveStartRange["endColumn"]
        )
          ((_0x4b93aa = _0x46e44f), (_0x116853 = _0x46e44f - _0x43d5cc + 1));
        else {
          let _0x1e6de0 =
            this._moveStartCellIndex["column"] -
            this._moveStartRange["startColumn"];
          ((_0x116853 = _0x46e44f - _0x1e6de0),
            (_0x4b93aa = _0x46e44f - _0x1e6de0 + _0x43d5cc - 1));
        }
      }
      let _0x3f708a = _0x4f4066.getCellWithCoordByIndex(_0x1c590b, _0x116853),
        _0x4aa43f = _0x4f4066.getCellWithCoordByIndex(_0x1c590b, _0x4b93aa),
        { startX: _0x20d3e5, endY: _0x1764b0 } = _0x3f708a,
        { endX: _0x160f61 } = _0x4aa43f;
      ((this._targetRange = {
        startRow: _0x1c590b,
        endRow: _0x1c590b,
        startColumn: _0x116853,
        endColumn: _0x4b93aa,
      }),
        (_0x13ccb8 = this._pivotSelectionMoveShape) == null ||
          _0x13ccb8.transformByState({
            left: _0x20d3e5,
            top: _0x1764b0,
            width: _0x160f61 - _0x20d3e5,
            height: 20,
          }));
    } else {
      var _0x54bfcd;
      let _0x489c55 = 0,
        _0x583d08 = 0,
        _0x4ddd64 =
          this._moveStartRange["endRow"] - this._moveStartRange["startRow"] + 1;
      if (this._moveStartCellIndex["row"] === this._moveStartRange["startRow"])
        ((_0x489c55 = _0x1c590b), (_0x583d08 = _0x1c590b + _0x4ddd64 - 1));
      else {
        if (this._moveStartCellIndex["row"] === this._moveStartRange["endRow"])
          ((_0x583d08 = _0x1c590b), (_0x489c55 = _0x1c590b - _0x4ddd64 + 1));
        else {
          let _0x51e4dd =
            this._moveStartCellIndex["row"] - this._moveStartRange["startRow"];
          ((_0x489c55 = _0x1c590b - _0x51e4dd),
            (_0x583d08 = _0x1c590b - _0x51e4dd + _0x4ddd64 - 1));
        }
      }
      let _0x4e8520 = _0x4f4066.getCellWithCoordByIndex(_0x489c55, _0x46e44f),
        _0x3cd6a4 = _0x4f4066.getCellWithCoordByIndex(_0x583d08, _0x46e44f),
        { startX: _0x77adb1, startY: _0x286f34 } = _0x4e8520,
        { endY: _0x50af43 } = _0x3cd6a4;
      ((this._targetRange = {
        startColumn: _0x46e44f,
        endColumn: _0x46e44f,
        startRow: _0x489c55,
        endRow: _0x583d08,
      }),
        (_0x54bfcd = this._pivotSelectionMoveShape) == null ||
          _0x54bfcd.transformByState({
            left: _0x77adb1,
            top: _0x286f34,
            width: 20,
            height: _0x50af43 - _0x286f34,
          }));
    }
  }
  _controlPointerDownHandler(_0x6f5ca1) {
    var _0x3b08af, _0x46f4c2, _0x189fff;
    ((_0x3b08af = this._selectionControl) == null ||
      _0x3b08af.setControlExtensionDisable(false),
      this._context["scene"].setCursor(_0x36b46e.DEFAULT));
    let _0x25b85e = this._sheetsSelectionsService["getCurrentSelections"]();
    if (!_0x25b85e.length || _0x25b85e.length > 1) return;
    let _0x5a1ed2 = _0x25b85e[0].range,
      _0x37de63 = this._context["unit"],
      _0x3d3b9d = _0x37de63.getActiveSheet(),
      _0x5368c9 = _0x37de63.getUnitId(),
      _0x7d63b2 = _0x3d3b9d.getSheetId(),
      _0x257583 = this._sheetsPivotTableAdaptorModel[
        "getSubUnitPivotRenderCache"
      ](_0x5368c9, _0x7d63b2);
    if (!(_0x257583 != null && _0x257583.size)) return;
    let _0x166e7d = Array.from(_0x257583).find(([_0x64bdc2, _0xc88700]) => {
      let { rangesInfo: _0x4a6ece } = _0xc88700;
      if (!_0x4a6ece) return false;
      let { rowRanges: _0x45ce27, colRanges: _0x57d62d } = _0x4a6ece,
        _0x38e798 = _0x45ce27[0],
        _0x200336 = _0x57d62d[0],
        _0x67ff34 = false;
      return (
        _0x38e798 &&
          ((_0x67ff34 = _0x54a654.realContain(_0x38e798, _0x5a1ed2)),
          (this._moveRowOrCol = "row")),
        !_0x67ff34 &&
          _0x200336 &&
          ((_0x67ff34 = _0x54a654.realContain(_0x200336, _0x5a1ed2)),
          (this._moveRowOrCol = "col")),
        _0x67ff34
      );
    });
    if (!_0x166e7d) return;
    ((this._movePivotId = _0x166e7d[0]),
      this._pivotSelectionMoveShape ||
        ((this._pivotSelectionMoveShape = new ya(this._moveRowOrCol)),
        this._context["scene"].addObject(this._pivotSelectionMoveShape)));
    let _0x187ab9 = this._context["scene"],
      _0x2f1be2 = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!_0x2f1be2) return;
    let { offsetX: _0x49084c, offsetY: _0x257fb4 } = _0x6f5ca1,
      _0xf4e970 = _0x187ab9.getCoordRelativeToViewport(
        _0x33d0a5.FromArray([_0x49084c, _0x257fb4]),
      ),
      { x: _0x3dbe6e, y: _0x376fa5 } = _0xf4e970,
      _0x416b1d = _0x187ab9.getScrollXYInfoByViewport(_0xf4e970),
      { scaleX: _0x1afc0b, scaleY: _0x15365f } = _0x187ab9.getAncestorScale(),
      { row: _0x5da9e6, column: _0x35546a } = _0x2f1be2.getCellIndexByOffset(
        _0x3dbe6e,
        _0x376fa5,
        _0x1afc0b,
        _0x15365f,
        _0x416b1d,
      ),
      _0x62f125 =
        (_0x46f4c2 = this._selectionControl) == null
          ? undefined
          : _0x46f4c2.model["getRange"]();
    if (((this._moveStartRange = _0x62f125), !_0x62f125)) return;
    let _0x177eae = 0;
    _0x177eae =
      _0x5da9e6 < _0x62f125.startRow
        ? _0x62f125.startRow
        : _0x5da9e6 > _0x62f125.endRow
          ? _0x62f125.endRow
          : _0x5da9e6;
    let _0xec78e3 = 0;
    ((_0xec78e3 =
      _0x35546a < _0x62f125.startColumn
        ? _0x62f125.startColumn
        : _0x35546a > _0x62f125.endColumn
          ? _0x62f125.endColumn
          : _0x35546a),
      (this._moveStartCellIndex = { row: _0x177eae, column: _0xec78e3 }),
      (_0x189fff = this._selectionControl) == null ||
        _0x189fff.setControlExtensionDisable(true),
      (this._scenePointerMoveSubscribe = _0x187ab9.onPointerMove$[
        "subscribeEvent"
      ]((_0x5f4d0c) => {
        let { offsetX: _0x249442, offsetY: _0x502cf1 } = _0x5f4d0c,
          { x: _0x396f9e, y: _0x903a8a } = _0x187ab9.getCoordRelativeToViewport(
            _0x33d0a5.FromArray([_0x249442, _0x502cf1]),
          );
        (this._controlMoving(_0x396f9e, _0x903a8a),
          _0x187ab9.setCursor(_0x36b46e.MOVE));
      })),
      (this._scenePointerUpSubscribe = _0x187ab9.onPointerUp$["subscribeEvent"](
        (_0x4f7b9c) => {
          var _0x4b861e, _0x3717cc, _0x59ce16;
          ((_0x4b861e = this._scenePointerMoveSubscribe) == null ||
            _0x4b861e.unsubscribe(),
            (this._scenePointerMoveSubscribe = null),
            (_0x3717cc = this._selectionControl) == null ||
              _0x3717cc.setControlExtensionDisable(false),
            (this._selectionControl = null),
            _0x187ab9.setCursor(_0x36b46e.DEFAULT),
            _0x187ab9.removeObject(this._pivotSelectionMoveShape),
            (this._pivotSelectionMoveShape = null),
            this._updatePivotSort(),
            (_0x59ce16 = this._scenePointerUpSubscribe) == null ||
              _0x59ce16.unsubscribe(),
            (this._scenePointerUpSubscribe = null));
        },
      )));
  }
  _updatePivotSort() {
    if (!this._moveStartRange || !this._targetRange || !this._movePivotId)
      return;
    let _0x52776a = this._context["unit"].getUnitId(),
      _0xcff82f = this._context["unit"].getActiveSheet().getSheetId();
    if (this._moveRowOrCol === "row") {
      var _0x45264b;
      let _0x459ed9 =
        (_0x45264b = this._sheetsPivotTableAdaptorModel[
          "getSubUnitPivotRenderCache"
        ](_0x52776a, _0xcff82f)) == null
          ? undefined
          : _0x45264b.get(this._movePivotId);
      if (!_0x459ed9) return;
      let _0x1b6272 = this._sheetsPivotTableAdaptorModel[
        "getSubUnitPivotMatrix"
      ](_0x52776a, _0xcff82f);
      if (!_0x1b6272) return;
      let _0x5895b9 = [],
        _0x3a42ca = "",
        { headerMap: _0xea4d9b, rangesInfo: _0x4a62ca } = _0x459ed9;
      for (
        let _0x2eef10 = this._moveStartRange["startColumn"];
        _0x2eef10 <= this._moveStartRange["endColumn"];
        _0x2eef10++
      ) {
        var _0x9930fe;
        let _0x2ed82d =
          _0xea4d9b == null || (_0x9930fe = _0xea4d9b.rowHeaderMap) == null
            ? undefined
            : _0x9930fe[_0x2eef10];
        if (!_0x2ed82d) continue;
        _0x3a42ca = _0x2ed82d.tableFieldId;
        let _0x30d0f8 = _0x4a62ca == null ? undefined : _0x4a62ca.rowRanges,
          _0x16a65a = _0x30d0f8 == null ? undefined : _0x30d0f8[0];
        if (!_0x16a65a) continue;
        let _0x4e4756 = {
          ..._0x16a65a,
          startColumn: _0x2eef10,
          endColumn: _0x2eef10,
        };
        for (
          let _0x163823 = _0x4e4756.startRow;
          _0x163823 <= _0x4e4756.endRow;
          _0x163823++
        ) {
          let _0x40c361 = _0x1b6272.getValue(_0x163823, _0x2eef10);
          if (!_0x40c361) continue;
          let { v: _0x5d5d85, pbt: _0x5dfd20 } = _0x40c361;
          _0x5d5d85 &&
            _0x5dfd20 !== _0x3a8679.Subtotal &&
            _0x5dfd20 !== _0x3a8679.GrandTotal &&
            (typeof _0x5d5d85 == "string"
              ? (_0x5895b9[_0x163823] = _0x5d5d85)
              : typeof _0x5d5d85 == "number" &&
                (_0x5895b9[_0x163823] = _0x5d5d85.toString()));
        }
        break;
      }
      if (!_0x3a42ca) return;
      let _0x56dc5c = this._moveStartRange["startRow"],
        _0x2dd12c =
          this._moveStartRange["endRow"] - this._moveStartRange["startRow"] + 1,
        _0xb3bf9b = this._targetRange["startRow"];
      if (_0x56dc5c < _0xb3bf9b) {
        let _0x5c86c3 = _0x5895b9.splice(_0x56dc5c, _0x2dd12c);
        _0x5895b9.splice(_0xb3bf9b - _0x2dd12c, 0, ..._0x5c86c3);
      } else {
        let _0x12c021 = _0x5895b9.splice(_0x56dc5c, _0x2dd12c);
        _0x5895b9.splice(_0xb3bf9b, 0, ..._0x12c021);
      }
      let _0x55f033 = _0x5895b9.filter((_0x8ca9b9) => _0x8ca9b9 !== undefined);
      this._commandService["executeCommand"](_0xc90518.id, {
        unitId: _0x52776a,
        subUnitId: _0xcff82f,
        pivotTableId: this._movePivotId,
        tableFieldId: _0x3a42ca,
        info: { type: _0x534c9f.custom, customOrder: _0x55f033 },
      });
    } else {
      var _0xd43a15;
      let _0xf9df6 =
        (_0xd43a15 = this._sheetsPivotTableAdaptorModel[
          "getSubUnitPivotRenderCache"
        ](_0x52776a, _0xcff82f)) == null
          ? undefined
          : _0xd43a15.get(this._movePivotId);
      if (!_0xf9df6) return;
      let _0x19bd2e = this._sheetsPivotTableAdaptorModel[
        "getSubUnitPivotMatrix"
      ](_0x52776a, _0xcff82f);
      if (!_0x19bd2e) return;
      let _0x489894 = [],
        _0xa3f691 = "",
        { headerMap: _0x4b6cd4, rangesInfo: _0x31c025 } = _0xf9df6;
      for (
        let _0x27d6d0 = this._moveStartRange["startRow"];
        _0x27d6d0 <= this._moveStartRange["endRow"];
        _0x27d6d0++
      ) {
        var _0x3c9c5b;
        let _0x49380a =
          _0x4b6cd4 == null || (_0x3c9c5b = _0x4b6cd4.colHeaderMap) == null
            ? undefined
            : _0x3c9c5b[_0x27d6d0];
        if (!_0x49380a) continue;
        _0xa3f691 = _0x49380a.tableFieldId;
        let _0x2de234 = _0x31c025 == null ? undefined : _0x31c025.colRanges,
          _0x263eea = _0x2de234 == null ? undefined : _0x2de234[0];
        if (!_0x263eea) continue;
        let _0x34bf0e = {
          ..._0x263eea,
          startRow: _0x27d6d0,
          endRow: _0x27d6d0,
        };
        for (
          let _0x5a8813 = _0x34bf0e.startColumn;
          _0x5a8813 <= _0x34bf0e.endColumn;
          _0x5a8813++
        ) {
          let _0x47d563 = _0x19bd2e.getValue(_0x27d6d0, _0x5a8813);
          if (!_0x47d563) continue;
          let { v: _0x38ef6a, pbt: _0x3fdb48 } = _0x47d563;
          if (
            _0x38ef6a &&
            _0x3fdb48 !== _0x3a8679.Subtotal &&
            _0x3fdb48 !== _0x3a8679.GrandTotal
          ) {
            if (typeof _0x38ef6a == "string") {
              let _0x4792e8 = _0xf9df6.projection
                ? _0x12022e(_0xf9df6.projection, _0x5a8813)
                : _0x5a8813;
              _0x489894[_0x4792e8] = _0x38ef6a;
            } else {
              if (typeof _0x38ef6a == "number") {
                let _0x1e1d4 = _0xf9df6.projection
                  ? _0x12022e(_0xf9df6.projection, _0x5a8813)
                  : _0x5a8813;
                _0x489894[_0x1e1d4] = _0x38ef6a.toString();
              }
            }
          }
        }
        break;
      }
      if (!_0xa3f691) return;
      let _0x2444b2 = _0xf9df6.projection
          ? _0x2f5c84(_0xf9df6.projection, this._moveStartRange)
          : this._moveStartRange,
        _0x1f2ad5 = _0xf9df6.projection
          ? _0x2f5c84(_0xf9df6.projection, this._targetRange)
          : this._targetRange,
        _0x10372 = _0x2444b2.startColumn,
        _0x2d2bb9 =
          this._moveStartRange["endColumn"] -
          this._moveStartRange["startColumn"] +
          1,
        _0x6f9208 = _0x1f2ad5.startColumn;
      if (_0x10372 < _0x6f9208) {
        let _0x55720c = _0x489894.splice(_0x10372, _0x2d2bb9);
        _0x489894.splice(_0x6f9208 - _0x2d2bb9, 0, ..._0x55720c);
      } else {
        let _0x5c13e9 = _0x489894.splice(_0x10372, _0x2d2bb9);
        _0x489894.splice(_0x6f9208, 0, ..._0x5c13e9);
      }
      let _0xaf262e = _0x489894.filter((_0x5dfd19) => _0x5dfd19 !== undefined);
      this._commandService["executeCommand"](_0xc90518.id, {
        unitId: _0x52776a,
        subUnitId: _0xcff82f,
        pivotTableId: this._movePivotId,
        tableFieldId: _0xa3f691,
        info: { type: _0x534c9f.custom, customOrder: _0xaf262e },
      });
    }
  }
  _initControl() {
    this.disposeWithMe(
      this._sheetsSelectionsService["selectionMoveEnd$"].subscribe(() => {
        let _0x15b97f = this._selectionRenderService["getSelectionControls"]();
        if (
          ((this._selectionControl = _0x15b97f[_0x15b97f.length - 1]),
          this._selectionControl &&
            this._selectionControl["setControlExtensionDisable"](false),
          !this._selectionControl)
        )
          return;
        let {
          leftControl: _0x47881d,
          rightControl: _0x294aac,
          topControl: _0x4e8399,
          bottomControl: _0x4b0a43,
        } = this._selectionControl;
        [_0x47881d, _0x294aac, _0x4e8399, _0x4b0a43].forEach((_0x1f77fc) => {
          _0x1f77fc.onPointerDown$["subscribeEvent"](
            this._controlPointerDownHandler["bind"](this),
          );
        });
      }),
    );
  }
  dispose() {
    var _0x41cc57, _0x22f760;
    ((_0x41cc57 = this._scenePointerMoveSubscribe) == null ||
      _0x41cc57.unsubscribe(),
      (this._scenePointerMoveSubscribe = null),
      (_0x22f760 = this._scenePointerUpSubscribe) == null ||
        _0x22f760.unsubscribe(),
      (this._scenePointerUpSubscribe = null),
      (this._selectionControl = null),
      (this._moveStartRange = null),
      (this._moveStartCellIndex = null),
      (this._targetRange = null),
      super.dispose());
  }
};
ba = $(
  [
    Q(1, _0x46baf8(_0x1c6c95)),
    Q(2, _0x46baf8(_0x4f7550)),
    Q(3, _0x46baf8(_0x5c53fb)),
    Q(4, _0x449b70),
    Q(5, _0x46baf8(_0x28a598)),
  ],
  ba,
);
let xa = class extends _0x4b2a77 {
  constructor(_0x384ab8, _0x18a120, _0x1b7da8) {
    (super(),
      (this._mergeCellController = _0x384ab8),
      (this._univerInstanceService = _0x18a120),
      (this._sheetsPivotTableConfigModel = _0x1b7da8),
      this._initMenuInterceptor());
  }
  _initMenuInterceptor() {
    this.disposeWithMe(
      this._mergeCellController["interceptor"].intercept(
        this._mergeCellController["interceptor"].getInterceptPoints()
          .MERGE_CELL_INTERCEPTOR_CHECK,
        {
          handler: (_0x1d82c4, _0x4c5038) => {
            let _0x35b457 = _0x25afea(this._univerInstanceService);
            if (!_0x35b457) return _0x1d82c4;
            let { unitId: _0x3dfa9b, subUnitId: _0x39da82 } = _0x35b457,
              _0x17737b = this._sheetsPivotTableConfigModel[
                "getSubUnitPivotConfigs"
              ](_0x3dfa9b, _0x39da82),
              _0x3b6ec4 = [];
            return (
              _0x17737b &&
                _0x17737b.forEach((_0x4ecb79, _0x2c9de3) => {
                  var _0x10a924;
                  let _0x183ab4 =
                    (_0x10a924 = this._sheetsPivotTableConfigModel[
                      "getPivotTableRangeInfo"
                    ](_0x3dfa9b, _0x39da82, _0x2c9de3)) == null
                      ? undefined
                      : _0x10a924.rangeInfo;
                  _0x183ab4 &&
                    Object.keys(_0x183ab4).forEach((_0x125309) => {
                      let _0x26ceb2 = _0x183ab4[_0x125309];
                      Array.isArray(_0x26ceb2) && _0x3b6ec4.push(..._0x26ceb2);
                    });
                }),
              _0x3b6ec4.length &&
              _0x4c5038.some((_0x19b2df) =>
                _0x3b6ec4.some((_0x5a4523) =>
                  _0x54a654.intersects(_0x5a4523, _0x19b2df),
                ),
              )
                ? true
                : _0x1d82c4
            );
          },
        },
      ),
    );
  }
};
xa = $(
  [
    Q(0, _0x46baf8(_0x2da3b3)),
    Q(1, _0x46baf8(_0x4a41b2)),
    Q(2, _0x46baf8(_0x52d40e)),
  ],
  xa,
);
let Sa = class extends _0x12182f {
  constructor(_0x283185 = di, _0x365f0f, _0x31fa06, _0x341056, _0x30d070) {
    (super(),
      (this._config = _0x283185),
      (this._injector = _0x365f0f),
      (this._commandService = _0x31fa06),
      (this._renderManagerService = _0x341056),
      (this._configService = _0x30d070));
    let { menu: _0x2a978b, ..._0x17f645 } = _0x38a06e({}, di, this._config);
    (_0x2a978b &&
      this._configService["setConfig"]("menu", _0x2a978b, { merge: true }),
      this._configService["setConfig"]("sheets-pivot-ui.config", _0x17f645),
      this._initRegisterCommand());
  }
  onStarting() {
    (this._injector["add"]([Qi]),
      this._injector["get"](Qi),
      [[aa], [xa], [na], [zn], [sa], [ia], [oa], [$i], [ea]].forEach(
        (_0x353671) => this._injector["add"](_0x353671),
      ),
      this._injector["get"]($i));
  }
  onReady() {
    (this._registerRenderModules(), this._injector["get"](aa));
  }
  onRendered() {
    (this._injector["get"](na),
      this._injector["get"](zn),
      this._injector["get"](sa),
      this._injector["get"](ia),
      this._injector["get"](oa),
      this._injector["get"](ea));
  }
  onSteady() {
    this._injector["get"](xa);
  }
  _registerRenderModules() {
    [[va], [ba]].forEach((_0x4ca804) => {
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x33bcb3.UNIVER_SHEET,
          _0x4ca804,
        ),
      );
    });
  }
  _initRegisterCommand() {
    [Fn, Tr, Bn, Vn, Dr, jr, Br].forEach((_0x3fd520) =>
      this._commandService["registerCommand"](_0x3fd520),
    );
  }
};
(Z(Sa, "pluginName", _0x56c979 + "_UI_PLUGIN"),
  Z(Sa, "packageName", li),
  Z(Sa, "version", ui),
  Z(Sa, "type", _0x33bcb3.UNIVER_SHEET),
  (Sa = $(
    [
      _0x4851d9(_0x467a1c, _0x2d46c5, _0x2e843d, _0x4c380c, _0x1ac3fd),
      Q(1, _0x46baf8(_0x2a2b22)),
      Q(2, _0x46baf8(_0x5c53fb)),
      Q(3, _0x3c0f1f),
      Q(4, _0x4766cd),
    ],
    Sa,
  )));
export {
  ci as SheetsPivotTableUIMenuSchema,
  Sa as UniverSheetsPivotTableUIPlugin,
};
