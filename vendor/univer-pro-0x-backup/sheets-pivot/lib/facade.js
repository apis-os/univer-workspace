import {
  DataFieldManager as _0x13ba7c,
  PivotCallbackEnum as _0x968caa,
  PivotCellStyleTypeEnum as _0x241514,
  PivotDataFieldDataTypeEnum as _0x68fb28,
  PivotDataFieldSortOperatorEnum as _0x1c1860,
  PivotDataFieldSortTypeEnum as _0x405009,
  PivotDataFieldTypeEnum as _0x32e685,
  PivotDateGroupFieldDateSystemEnum as _0x502e72,
  PivotDateGroupFieldDateTypeEnum as _0x27d861,
  PivotFilterTypeEnum as _0xfad645,
  PivotLayoutTypeEnum as _0x5014bd,
  PivotShowAsBaseItemTypeEnum as _0x131173,
  PivotShowAsTypeEnum as _0x41304a,
  PivotSubtotalPositionEnum as _0x151c8b,
  PivotSubtotalTypeEnum as _0x53f254,
  PivotTable as _0x227638,
  PivotTableChangeTypeEnum as _0x29f3ef,
  PivotTableFiledAreaEnum as _0x340246,
  PivotTableValuePositionEnum as _0x13cbd3,
  PivotViewCellValueTypeEnum as _0x43b710,
  ST_PivotFilterOperatorEnum as _0x3d841c,
  generateHexNumber as _0x260c50,
  isValueFilterOperator as _0x9ef39b,
} from "@univerjs-pro/engine-pivot";
import {
  AddPivotFieldCommand as _0x4c8579,
  AddPivotTableCommand as _0x1b30c4,
  AddPivotTableWithConfigCommand as _0x22362c,
  MovePivotFieldCommand as _0x36d246,
  MovePivotTableCommand as _0x2cd5d0,
  PivotDrillDownCommand as _0x2094ff,
  PositionType as _0x4a61dc,
  RemovePivotFieldCommand as _0x51a320,
  RemovePivotTableCommand as _0x1448e6,
  RemovePivotTableMutation as _0xa113ab,
  ResetPivotFieldsConfigCommand as _0x6aa823,
  SetPivotCollapseCommand as _0x3f7c00,
  SetPivotDateGroupCommand as _0x33c7a5,
  SetPivotFieldsConfigCommand as _0x28a2bc,
  SetPivotFilterCommand as _0x41a486,
  SetPivotLayoutCommand as _0x54375a,
  SetPivotOptionCommand as _0x2c2993,
  SetPivotSortCommand as _0x45ddbc,
  SetPivotValueFilterCommand as _0x339419,
  SheetsPivotTableAdaptorModel as _0x48c749,
  SheetsPivotTableConfigModel as _0x6ac32,
  UpdatePivotFieldSettingCommand as _0x1bc823,
  UpdatePivotTableSourceRangeCommand as _0x3b6755,
  UpdatePivotValuePositionCommand as _0x473fdd,
  unionPivotViewRange as _0x1fe184,
} from "@univerjs-pro/sheets-pivot";
import {
  DateSystem as _0x5406f6,
  DisposableCollection as _0x2ad640,
  ICommandService as _0x287ca8,
  IUniverInstanceService as _0x539e2a,
  LifecycleService as _0x2b6c9f,
  LifecycleStages as _0x578479,
  LocaleService as _0x7ac122,
  LocaleType as _0x3280d5,
  excelDateTimeSerial as _0x360517,
  numfmt as _0x27c823,
} from "@univerjs/core";
import {
  FWorkbook as _0x1eb3b1,
  FWorksheet as _0x52fb4d,
} from "@univerjs/sheets/facade";
import {
  FEnum as _0x594752,
  FEventName as _0x2f19da,
  FUniver as _0x2dab3d,
} from "@univerjs/core/facade";
import { auditTime as _0x5d64b3 } from "rxjs";
function q(_0x2e21b5) {
  "@babel/helpers - typeof";
  return (
    (q =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x262ca3) {
            return typeof _0x262ca3;
          }
        : function (_0x22ca58) {
            return _0x22ca58 &&
              typeof Symbol == "function" &&
              _0x22ca58.constructor === Symbol &&
              _0x22ca58 !== Symbol.prototype
              ? "symbol"
              : typeof _0x22ca58;
          }),
    q(_0x2e21b5)
  );
}
function _e(_0x34bdba, _0x3414c4) {
  if (q(_0x34bdba) != "object" || !_0x34bdba) return _0x34bdba;
  var _0x3fd7ce = _0x34bdba[Symbol.toPrimitive];
  if (_0x3fd7ce !== undefined) {
    var _0x1faaa9 = _0x3fd7ce.call(_0x34bdba, _0x3414c4 || "default");
    if (q(_0x1faaa9) != "object") return _0x1faaa9;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3414c4 === "string" ? String : Number)(_0x34bdba);
}
function ve(_0x1a9e9f) {
  var _0x515fe2 = _e(_0x1a9e9f, "string");
  return q(_0x515fe2) == "symbol" ? _0x515fe2 : _0x515fe2 + "";
}
function J(_0x11bbfc, _0x2c0272, _0x2455f0) {
  return (
    (_0x2c0272 = ve(_0x2c0272)) in _0x11bbfc
      ? Object.defineProperty(_0x11bbfc, _0x2c0272, {
          value: _0x2455f0,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x11bbfc[_0x2c0272] = _0x2455f0),
    _0x11bbfc
  );
}
const Y = { type: _0x41304a.normal, baseFieldId: "", baseItem: "" };
function X(_0x2bd314) {
  return {
    ..._0x2bd314,
    expected: Array.isArray(_0x2bd314.expected)
      ? _0x2bd314.expected["concat"]()
      : _0x2bd314.expected,
  };
}
var Z = class {
    constructor(_0x562bb5, _0xd8ec6c, _0xb021b5, _0x12c20c) {
      (J(this, "unitId", undefined),
        J(this, "subUnitId", undefined),
        J(this, "pivotTableId", undefined),
        J(this, "_injector", undefined),
        (this.unitId = _0x562bb5),
        (this.subUnitId = _0xd8ec6c),
        (this.pivotTableId = _0xb021b5),
        (this._injector = _0x12c20c));
    }
    getConfig() {
      return this._injector["get"](_0x6ac32).getPivotTableConfig(
        this.unitId,
        this.subUnitId,
        this.pivotTableId,
      );
    }
    getId() {
      return this.pivotTableId;
    }
    getSourceRangeInfo() {
      var _0x4ac894;
      let _0x38eee1 =
        (_0x4ac894 = this.getConfig()) == null
          ? undefined
          : _0x4ac894.sourceRangeInfo;
      if (_0x38eee1) return { ..._0x38eee1, range: { ..._0x38eee1.range } };
    }
    getTargetCellInfo() {
      var _0xb17d52;
      let _0x39a56f =
        (_0xb17d52 = this.getConfig()) == null
          ? undefined
          : _0xb17d52.targetCellInfo;
      if (_0x39a56f) return { ..._0x39a56f };
    }
    getOptions() {
      var _0x1da094;
      let _0x843c5a =
        (_0x1da094 = this.getConfig()) == null
          ? undefined
          : _0x1da094.fieldsConfig["options"];
      if (_0x843c5a) return { ..._0x843c5a };
    }
    getLayout() {
      var _0x100a1d;
      let _0x52810b =
        (_0x100a1d = this.getConfig()) == null
          ? undefined
          : _0x100a1d.fieldsConfig;
      if (_0x52810b) return _0x52810b.layout ?? _0x5014bd.tabular;
    }
    getPivotTableMatrixInfo() {
      return this._injector["get"](_0x6ac32).getPivotTableMatrixInfo(
        this.unitId,
        this.subUnitId,
        this.pivotTableId,
      );
    }
    setFieldsConfig(_0x35eff3) {
      let _0x23fb13 = this._injector["get"](_0x287ca8),
        _0x51bcd9 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          pivotTableConfig: _0x35eff3,
        };
      return _0x23fb13.executeCommand(_0x28a2bc.id, _0x51bcd9);
    }
    setOptions(_0x54c92d) {
      let _0x54e96a = this._injector["get"](_0x287ca8),
        _0x33810a = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          options: _0x54c92d,
        };
      return _0x54e96a.executeCommand(_0x2c2993.id, _0x33810a);
    }
    setLayout(_0x83a0e2) {
      let _0x2f92cb = this._injector["get"](_0x287ca8),
        _0x336100 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          layout: _0x83a0e2,
        };
      return _0x2f92cb.executeCommand(_0x54375a.id, _0x336100);
    }
    setSourceRange(_0x24c666) {
      let _0x1e4220 = this._injector["get"](_0x287ca8),
        _0x8998ab = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          token: this.pivotTableId,
          dataRangeInfo: _0x24c666,
        };
      return _0x1e4220.executeCommand(_0x3b6755.id, _0x8998ab);
    }
    updateSourceRange(_0xa6b77c) {
      return this.setSourceRange(_0xa6b77c);
    }
    reset(_0x296f66) {
      let _0x3e9d10 = this._injector["get"](_0x287ca8),
        _0x316ff3 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          resetArea: _0x296f66,
        };
      return _0x3e9d10.executeCommand(_0x6aa823.id, _0x316ff3);
    }
    getPivotTableId() {
      return this.pivotTableId;
    }
    getFieldSetting(_0x44ffce) {
      let _0x5e2c2f = this._injector["get"](_0x6ac32).getPivotTableConfig(
          this.unitId,
          this.subUnitId,
          this.pivotTableId,
        ),
        _0x294a71 = _0x5e2c2f == null ? undefined : _0x5e2c2f.fieldsConfig;
      if (_0x294a71)
        return _0x294a71.dimension[_0x44ffce] || _0x294a71.measure[_0x44ffce];
    }
    getSourceFieldsInfo() {
      let _0x52367c = this._injector,
        _0x5eabb3 = this.unitId,
        _0x1f29aa = this.pivotTableId,
        _0xc590f = _0x52367c.get(_0x6ac32).getCollection(_0x5eabb3, _0x1f29aa);
      if (_0xc590f) {
        let _0x412b9d = _0xc590f.fieldIds,
          _0x54913e = _0xc590f.fields,
          _0x24fc75 = _0xc590f.displayNameRecord,
          _0x466594 = [];
        for (let _0x583feb of _0x412b9d) {
          let _0x264210 = _0x54913e[_0x583feb];
          if (_0x264210) {
            let _0x118c78 = {
              id: _0x583feb,
              name: _0x264210.name,
              fieldDataType: _0x264210.fieldDataType,
            };
            (_0x24fc75 &&
              _0x24fc75[_0x583feb] !== undefined &&
              (_0x118c78.displayName = _0x24fc75[_0x583feb]),
              _0x466594.push(_0x118c78));
          }
        }
        return _0x466594;
      }
      return [];
    }
    getValueFilter(_0x5e25d9) {
      var _0x46d2c3;
      let _0xf9a815 = this._injector["get"](_0x6ac32).getPivotTableConfig(
          this.unitId,
          this.subUnitId,
          this.pivotTableId,
        ),
        _0x17f14c =
          _0xf9a815 == null ? undefined : _0xf9a815.fieldsConfig["valueFilter"],
        _0x1293b2 =
          _0x17f14c == null ||
          (_0x46d2c3 = _0x17f14c.find(
            (_0x2c7142) => _0x2c7142.fieldId === _0x5e25d9,
          )) == null
            ? undefined
            : _0x46d2c3.filterInfo;
      return _0x1293b2 ? X(_0x1293b2) : undefined;
    }
    getValueFilters() {
      let _0x3c84ea = this._injector["get"](_0x6ac32).getPivotTableConfig(
          this.unitId,
          this.subUnitId,
          this.pivotTableId,
        ),
        _0x16eeeb =
          _0x3c84ea == null ? undefined : _0x3c84ea.fieldsConfig["valueFilter"];
      return (
        (_0x16eeeb == null
          ? undefined
          : _0x16eeeb.map(({ fieldId: _0x447825, filterInfo: _0x24083a }) => ({
              fieldId: _0x447825,
              filterInfo: X(_0x24083a),
            }))) || []
      );
    }
    getFieldIdsByArea(_0x1687d8) {
      let _0x2da53d = this._injector["get"](_0x6ac32).getPivotTableConfig(
          this.unitId,
          this.subUnitId,
          this.pivotTableId,
        ),
        _0x237b36 = _0x2da53d == null ? undefined : _0x2da53d.fieldsConfig;
      if (_0x237b36)
        switch (_0x1687d8) {
          case _0x340246.Column:
            return _0x237b36.columnFields["concat"]();
          case _0x340246.Row:
            return _0x237b36.rowFields["concat"]();
          case _0x340246.Value:
            return _0x237b36.valueFields["concat"]();
          case _0x340246.Filter:
            return _0x237b36.filterFields["concat"]();
          case _0x340246.Hidden:
            return _0x237b36.hiddenFields["concat"]();
        }
      return [];
    }
    getPivotTableRangeInfo() {
      var _0x18c365;
      let _0x1dbb14 =
        (_0x18c365 = this._injector["get"](_0x6ac32).getPivotTableRangeInfo(
          this.unitId,
          this.subUnitId,
          this.pivotTableId,
        )) == null
          ? undefined
          : _0x18c365.rangeInfo;
      if (_0x1dbb14) return _0x1fe184(_0x1dbb14);
    }
    async remove() {
      return this._injector["get"](_0x287ca8).executeCommand(_0x1448e6.id, {
        unitId: this.unitId,
        subUnitId: this.subUnitId,
        pivotTableId: this.pivotTableId,
      });
    }
    async addField(_0xd38083, _0x2d977b, _0x574a8e) {
      let _0x4ee570 = this._injector,
        _0x4aebf9 = this.unitId,
        _0x4236a8 = this.subUnitId,
        _0xd4a5b0 = this.pivotTableId,
        _0x5eca0e = _0x4ee570.get(_0x287ca8),
        _0x4fa6f3 = _0x4ee570.get(_0x6ac32),
        _0xfc329f = _0x4fa6f3.getPivotTableConfig(
          _0x4aebf9,
          _0x4236a8,
          _0xd4a5b0,
        ),
        _0x486974 = _0x4fa6f3.getCollection(_0x4aebf9, _0xd4a5b0);
      if (!_0xfc329f || !_0x486974) return false;
      let _0x3b4bf4 = _0xd38083;
      typeof _0x3b4bf4 == "number" &&
        (_0x3b4bf4 = _0x4fa6f3.getCollection(_0x4aebf9, _0xd4a5b0).fieldIds[
          _0xd38083
        ]);
      let _0x1e2f74 = {
        unitId: _0x4aebf9,
        subUnitId: _0x4236a8,
        pivotTableId: _0xd4a5b0,
        dataFieldId: _0x3b4bf4,
        fieldArea: _0x2d977b,
        index: _0x574a8e,
      };
      return _0x5eca0e.executeCommand(_0x4c8579.id, _0x1e2f74);
    }
    async removeField(_0x44f5e6) {
      let _0x755b26 = this._injector,
        _0x2bb5f7 = this.unitId,
        _0x2bb731 = this.subUnitId,
        _0x5ed6bd = this.pivotTableId,
        _0x1f6ee4 = _0x755b26.get(_0x287ca8),
        _0x21cd59 = {
          unitId: _0x2bb5f7,
          subUnitId: _0x2bb731,
          pivotTableId: _0x5ed6bd,
          fieldIds: _0x44f5e6,
        };
      return _0x1f6ee4.executeCommand(_0x51a320.id, _0x21cd59);
    }
    async updateFieldPosition(_0x40db8e, _0x2630fb, _0x2dcf86) {
      let _0x3cd88d = this._injector,
        _0x2e144e = this.unitId,
        _0x1573ca = this.subUnitId,
        _0x1cbd33 = this.pivotTableId,
        _0x325728 = _0x3cd88d.get(_0x287ca8),
        _0x2409bf = {
          unitId: _0x2e144e,
          subUnitId: _0x1573ca,
          pivotTableId: _0x1cbd33,
          fieldId: _0x40db8e,
          area: _0x2630fb,
          index: _0x2dcf86,
        };
      return _0x325728.executeCommand(_0x36d246.id, _0x2409bf);
    }
    async updateValuePosition(_0x2dbf35, _0x4f5b78) {
      let _0x25deb7 = this._injector,
        _0x2e35c5 = this.unitId,
        _0x381f65 = this.subUnitId,
        _0x5a637f = this.pivotTableId,
        _0x194b83 = _0x25deb7.get(_0x287ca8),
        _0x289d7c = {
          unitId: _0x2e35c5,
          subUnitId: _0x381f65,
          pivotTableId: _0x5a637f,
          position: _0x2dbf35,
          index: _0x4f5b78,
        };
      return _0x194b83.executeCommand(_0x473fdd.id, _0x289d7c);
    }
    async setSubtotalType(_0xdd87d4, _0x22ac00) {
      return this.setFieldSetting(_0xdd87d4, { subtotalType: _0x22ac00 });
    }
    async setFieldSetting(_0x1b617e, _0x3a9746) {
      var _0x55831a;
      let _0x275837 = this._injector,
        _0x27a054 = this.unitId,
        _0xcd9e8b = this.subUnitId,
        _0x53d980 = this.pivotTableId,
        _0x551a15 = _0x275837.get(_0x287ca8),
        _0x4d1369 = this._getPivotPanelTableFieldInfo(_0x1b617e),
        _0x230cda = _0x4d1369
          ? this._getPivotPanelSourceFieldInfo(_0x4d1369.dataFieldId)
          : undefined;
      if (
        !_0x4d1369 ||
        !_0x230cda ||
        (_0x3a9746.showDataAs !== undefined &&
          !(
            (_0x55831a = this.getConfig()) != null &&
            _0x55831a.fieldsConfig["measure"][_0x1b617e]
          ))
      )
        return (
          console.warn("[Pivot Table]: The pivot table field info is invalid"),
          false
        );
      let _0x59b4e0 = {
        unitId: _0x27a054,
        subUnitId: _0xcd9e8b,
        pivotTableId: _0x53d980,
        tableFieldId: _0x1b617e,
        displayName: _0x3a9746.displayName,
        format: _0x3a9746.format,
        subtotalType: _0x3a9746.subtotalType,
        showDataAs:
          _0x3a9746.showDataAs === undefined
            ? undefined
            : { ..._0x3a9746.showDataAs },
        tableFieldInfo: _0x4d1369,
        dataFieldInfo: _0x230cda,
      };
      return _0x551a15.executeCommand(_0x1bc823.id, _0x59b4e0);
    }
    getShowDataAs(_0x3a2fbd) {
      var _0x26f5f1;
      let _0x177343 = this.getFieldSetting(_0x3a2fbd);
      if (!(!_0x177343 || !("subtotal" in _0x177343)))
        return ((_0x26f5f1 = _0x177343.showDataAs) == null
          ? undefined
          : _0x26f5f1.type) === undefined
          ? { ...Y }
          : { ..._0x177343.showDataAs };
    }
    setShowDataAs(_0x3c6d7f, _0x2935f1) {
      return this.setFieldSetting(_0x3c6d7f, { showDataAs: _0x2935f1 });
    }
    resetShowDataAs(_0x893eac) {
      return this.setShowDataAs(_0x893eac, { ...Y });
    }
    async setLabelSort(_0x203098, _0x597682) {
      let _0x77a1e9 = this._injector,
        _0x30205e = this.unitId,
        _0x45d419 = this.subUnitId,
        _0x4bed15 = this.pivotTableId,
        _0x38a76a = _0x77a1e9.get(_0x287ca8),
        _0x1dbc84 = {
          unitId: _0x30205e,
          subUnitId: _0x45d419,
          tableFieldId: _0x203098,
          pivotTableId: _0x4bed15,
          info: _0x597682,
        };
      return _0x38a76a.executeCommand(_0x45ddbc.id, _0x1dbc84);
    }
    async clearLabelSort(_0x8cad38) {
      return this._injector["get"](_0x287ca8).executeCommand(_0x45ddbc.id, {
        unitId: this.unitId,
        subUnitId: this.subUnitId,
        pivotTableId: this.pivotTableId,
        tableFieldId: _0x8cad38,
        info: undefined,
      });
    }
    async setLabelManualFilter(_0x3e0093, _0x4dd43c, _0x57e52b) {
      let _0x13ca70 = this._injector,
        _0x862f3 = this.unitId,
        _0x537c89 = this.subUnitId,
        _0x4c6038 = this.pivotTableId,
        _0x4d245c = _0x13ca70.get(_0x287ca8),
        _0x3e7a7f = {
          unitId: _0x862f3,
          subUnitId: _0x537c89,
          pivotTableId: _0x4c6038,
          tableFieldId: _0x3e0093,
          items: _0x4dd43c,
          isAll: _0x57e52b,
        };
      return _0x4d245c.executeCommand(_0x41a486.id, _0x3e7a7f);
    }
    async setValueFilter(_0x1cf54a, _0x1a705f) {
      var _0x52262f;
      let _0x438f95 = this._injector,
        _0x32630f = this.unitId,
        _0x2e8892 = this.subUnitId,
        _0x21d457 = this.pivotTableId,
        _0x59a70d =
          (_0x52262f = this.getConfig()) == null
            ? undefined
            : _0x52262f.fieldsConfig,
        _0x39cec2 = !!(
          _0x59a70d &&
          (_0x59a70d.rowFields["includes"](_0x1cf54a) ||
            _0x59a70d.columnFields["includes"](_0x1cf54a))
        );
      if (
        !_0x59a70d ||
        !_0x39cec2 ||
        (_0x1a705f !== undefined &&
          (!_0x59a70d.measure[_0x1a705f.valueFieldId] ||
            !_0x9ef39b(_0x1a705f.operator)))
      )
        return false;
      let _0x3d876d = _0x438f95.get(_0x287ca8),
        _0x349ebc = {
          unitId: _0x32630f,
          subUnitId: _0x2e8892,
          pivotTableId: _0x21d457,
          fieldId: _0x1cf54a,
          valueFilterInfo: _0x1a705f
            ? X({ ..._0x1a705f, type: _0xfad645.ValueFilter })
            : undefined,
        };
      return _0x3d876d.executeCommand(_0x339419.id, _0x349ebc);
    }
    clearValueFilter(_0x352976) {
      return this.setValueFilter(_0x352976, undefined);
    }
    async renameField(_0x439487, _0x42f427) {
      return this.setFieldSetting(_0x439487, { displayName: _0x42f427 });
    }
    async move(_0x4baa74, _0x480300, _0x5839c1) {
      let _0x3536a5 = this._injector["get"](_0x287ca8),
        _0xbe671 = this._injector["get"](_0x539e2a).getUnit(this.unitId),
        _0x222463 =
          _0xbe671 == null
            ? undefined
            : _0xbe671.getSheetBySheetName(_0x4baa74);
      if (!_0xbe671 || !_0x222463)
        throw Error("[Pivot Table]: Target sheet is not valid");
      return _0x3536a5.executeCommand(_0x2cd5d0.id, {
        pivotTableId: this.pivotTableId,
        targetCellInfo: {
          subUnitId: _0x222463.getSheetId(),
          unitId: this.unitId,
          row: _0x480300,
          col: _0x5839c1,
        },
        originTargetInfo: { subUnitId: this.subUnitId, unitId: this.unitId },
      });
    }
    async setDateGroupType(_0x168d95, _0x5ef041) {
      let _0x3b3b97 = this._injector,
        _0x326f6b = this.unitId,
        _0x22870a = this.subUnitId,
        _0x2ba688 = this.pivotTableId,
        _0x35b6a7 = _0x3b3b97.get(_0x287ca8),
        _0x43e0b4 = {
          unitId: _0x326f6b,
          subUnitId: _0x22870a,
          pivotTableId: _0x2ba688,
          tableFieldId: _0x168d95,
          dateType: _0x5ef041,
        };
      return _0x35b6a7.executeCommand(_0x33c7a5.id, _0x43e0b4);
    }
    async setCellCollapse(_0x574544, _0x55a0f9, _0x87502e) {
      return this._isCellInCurrentPivotTable(_0x574544, _0x55a0f9)
        ? this._injector["get"](_0x287ca8).executeCommand(_0x3f7c00.id, {
            unitId: this.unitId,
            subUnitId: this.subUnitId,
            row: _0x574544,
            col: _0x55a0f9,
            collapse: _0x87502e,
          })
        : false;
    }
    async drillDown(_0x2f0345, _0x772d97) {
      return this._isCellInCurrentPivotTable(_0x2f0345, _0x772d97)
        ? this._injector["get"](_0x287ca8).executeCommand(_0x2094ff.id, {
            row: _0x2f0345,
            col: _0x772d97,
          })
        : false;
    }
    _getPivotPanelTableFieldInfo(_0x470bde) {
      let _0x355da9 = this.getConfig(),
        _0x154990 =
          (_0x355da9 == null
            ? undefined
            : _0x355da9.fieldsConfig["dimension"][_0x470bde]) ||
          (_0x355da9 == null
            ? undefined
            : _0x355da9.fieldsConfig["measure"][_0x470bde]);
      if (!_0x154990) return;
      let _0x23f240 = {
        tableFieldId: _0x470bde,
        displayName: _0x154990.displayName,
        dataFieldId: _0x154990.dataFieldId,
        format: _0x154990.format,
      };
      return (
        "subtotal" in _0x154990 &&
          ((_0x23f240.subTotalType = _0x154990.subtotal),
          (_0x23f240.showDataAs = { ..._0x154990.showDataAs })),
        _0x23f240
      );
    }
    _getPivotPanelSourceFieldInfo(_0x148ccb) {
      var _0xed71e9;
      let _0x44aa97 = this._injector["get"](_0x6ac32).getCollection(
          this.unitId,
          this.pivotTableId,
        ),
        _0x49b8b3 =
          (_0x44aa97 == null ? undefined : _0x44aa97.fields[_0x148ccb]) ||
          (_0x44aa97 == null
            ? undefined
            : _0x44aa97.customFields["find"](
                (_0x11d1bc) => _0x11d1bc.id === _0x148ccb,
              ));
      if (_0x49b8b3)
        return {
          id: _0x49b8b3.id,
          dataFieldId: _0x49b8b3.id,
          name:
            (_0x44aa97 == null ||
            (_0xed71e9 = _0x44aa97.displayNameRecord) == null
              ? undefined
              : _0xed71e9[_0x49b8b3.id]) ?? _0x49b8b3.name,
          type: _0x49b8b3.fieldDataType,
          checked: this._isDataFieldUsed(_0x49b8b3.id),
          pivotTableId: this.pivotTableId,
        };
    }
    _isDataFieldUsed(_0x13344f) {
      let _0x4f95ee = this.getConfig();
      return _0x4f95ee
        ? Object.values(_0x4f95ee.fieldsConfig["dimension"]).some(
            (_0x539bc7) => _0x539bc7.dataFieldId === _0x13344f,
          ) ||
            Object.values(_0x4f95ee.fieldsConfig["measure"]).some(
              (_0x3cfe62) => _0x3cfe62.dataFieldId === _0x13344f,
            )
        : false;
    }
    _isCellInCurrentPivotTable(_0x6a8b58, _0x398430) {
      return (
        this._injector["get"](_0x48c749).getPivotTableIdByCell(
          this.unitId,
          this.subUnitId,
          _0x6a8b58,
          _0x398430,
        ) === this.pivotTableId
      );
    }
  },
  ye = class extends _0x1eb3b1 {
    async addPivotTable(_0x1387c7, _0x487e1a, _0x36d35e) {
      let _0x509a6e = this._injector,
        _0x4d0009 = _0x509a6e.get(_0x287ca8),
        _0x1884aa = _0x260c50(8),
        _0x2b2408 = {
          positionType: _0x487e1a,
          pivotTableId: _0x1884aa,
          pivotTableConfig: {
            targetCellInfo: _0x36d35e,
            sourceRangeInfo: _0x1387c7,
            isEmpty: true,
          },
        };
      if (await _0x4d0009.executeCommand(_0x1b30c4.id, _0x2b2408)) {
        let _0x480832 = _0x509a6e.get(_0x6ac32);
        if (
          await this._waitForPivotTableReady(
            _0x480832,
            _0x36d35e.unitId,
            _0x36d35e.subUnitId,
            _0x1884aa,
          )
        )
          return new Z(
            _0x36d35e.unitId,
            _0x36d35e.subUnitId,
            _0x1884aa,
            _0x509a6e,
          );
      }
    }
    _waitForPivotTableReady(_0x2d82ec, _0x2da24c, _0x1906ba, _0x4f2624) {
      let _0x29026a = () =>
        !!(
          _0x2d82ec.getPivotTableConfig(_0x2da24c, _0x1906ba, _0x4f2624) &&
          _0x2d82ec.getCollection(_0x2da24c, _0x4f2624)
        );
      return _0x29026a()
        ? Promise.resolve(true)
        : new Promise((_0x44632a) => {
            let _0x44837b = false,
              _0x1de3a8,
              _0x3e2667 = [],
              _0x4163b6 = (_0x38a167) => {
                _0x44837b ||
                  ((_0x44837b = true),
                  _0x1de3a8 && clearTimeout(_0x1de3a8),
                  _0x3e2667.forEach((_0x3f2cb1) => _0x3f2cb1.unsubscribe()),
                  _0x44632a(_0x38a167));
              },
              _0x5b2b74 = () => {
                _0x29026a() && _0x4163b6(true);
              };
            ((_0x3e2667 = [
              _0x2d82ec.pivotConfigChange$["subscribe"](_0x5b2b74),
              _0x2d82ec.configVersion$["subscribe"](_0x5b2b74),
            ]),
              (_0x1de3a8 = setTimeout(() => _0x4163b6(false), 10000)),
              _0x5b2b74());
          });
    }
    getPivotTableByCell(_0x4e7ce2, _0x50e70f, _0x5c98e0, _0x409757) {
      let _0x15c27e = this._injector,
        _0x44e65e = _0x15c27e
          .get(_0x48c749)
          .getPivotTableIdByCell(_0x4e7ce2, _0x50e70f, _0x5c98e0, _0x409757);
      if (_0x44e65e) return new Z(_0x4e7ce2, _0x50e70f, _0x44e65e, _0x15c27e);
    }
    getPivotTableById(_0x50fc40) {
      let _0x173c61 = this._injector,
        _0x4306ab = _0x173c61
          .get(_0x6ac32)
          .getTargetByPivotTableId(this.getId(), _0x50fc40);
      if (_0x4306ab)
        return new Z(
          _0x4306ab.unitId,
          _0x4306ab.subUnitId,
          _0x50fc40,
          _0x173c61,
        );
    }
  };
_0x1eb3b1.extend(ye);
var be = class extends _0x52fb4d {
  getPivotTableByCell(_0x90e5ec, _0x5739eb) {
    let _0x574e74 = this._injector,
      _0x44c679 = _0x574e74.get(_0x48c749),
      _0x372ac3 = this._workbook["getUnitId"](),
      _0xad59d8 = this.getSheetId(),
      _0x1d5cf5 = _0x44c679.getPivotTableIdByCell(
        _0x372ac3,
        _0xad59d8,
        _0x90e5ec,
        _0x5739eb,
      );
    if (_0x1d5cf5) return new Z(_0x372ac3, _0xad59d8, _0x1d5cf5, _0x574e74);
  }
};
_0x52fb4d.extend(be);
var Q = class extends _0x594752 {
  get PivotSubtotalTypeEnum() {
    return _0x53f254;
  }
  get PivotFilterTypeEnum() {
    return _0xfad645;
  }
  get PivotTableFiledAreaEnum() {
    return _0x340246;
  }
  get PivotTableValuePositionEnum() {
    return _0x13cbd3;
  }
  get PivotDataFieldDataTypeEnum() {
    return _0x68fb28;
  }
  get PivotDataFieldSortTypeEnum() {
    return _0x405009;
  }
  get PivotDataFieldSortOperatorEnum() {
    return _0x1c1860;
  }
  get PivotFilterOperatorEnum() {
    return _0x3d841c;
  }
  get PositionTypeEnum() {
    return _0x4a61dc;
  }
  get PivotTableChangeTypeEnum() {
    return _0x29f3ef;
  }
  get PivotDateGroupFieldDateTypeEnum() {
    return _0x27d861;
  }
  get PivotShowAsTypeEnum() {
    return _0x41304a;
  }
  get PivotShowAsBaseItemTypeEnum() {
    return _0x131173;
  }
  get PivotLayoutTypeEnum() {
    return _0x5014bd;
  }
  get PivotSubtotalPositionEnum() {
    return _0x151c8b;
  }
  get PivotCallbackEnum() {
    return _0x968caa;
  }
  get PivotDataFieldTypeEnum() {
    return _0x32e685;
  }
  get PivotDateGroupFieldDateSystemEnum() {
    return _0x502e72;
  }
  get PivotCellStyleTypeEnum() {
    return _0x241514;
  }
  get PivotViewCellValueTypeEnum() {
    return _0x43b710;
  }
};
_0x594752.extend(Q);
var xe = class extends _0x2f19da {
  get PivotTableAdded() {
    return "PivotTableAdded";
  }
  get BeforePivotTableAdd() {
    return "BeforePivotTableAdd";
  }
  get PivotTableRemoved() {
    return "PivotTableRemoved";
  }
  get PivotTableMoved() {
    return "PivotTableMoved";
  }
  get PivotTableRendered() {
    return "PivotTableRendered";
  }
  get PivotTableFieldAdded() {
    return "PivotTableFieldAdded";
  }
  get PivotTableFieldRemoved() {
    return "PivotTableFieldRemoved";
  }
  get PivotTableFieldMoved() {
    return "PivotTableFieldMoved";
  }
  get PivotTableFieldCollapseChanged() {
    return "PivotTableFieldCollapseChanged";
  }
  get PivotTableFieldFilterChanged() {
    return "PivotTableFieldFilterChanged";
  }
  get PivotTableFieldSortChanged() {
    return "PivotTableFieldSortChanged";
  }
  get PivotTableFieldSettingChanged() {
    return "PivotTableFieldSettingChanged";
  }
  get PivotTableValuePositionChanged() {
    return "PivotTableValuePositionChanged";
  }
};
_0x2f19da.extend(xe);
const $ = "YYYY-MM-DD";
function Se(_0x4b60de, _0x40c7e4 = _0x5406f6.Date1900) {
  return _0x360517(new Date(_0x4b60de), _0x40c7e4);
}
function Ce(_0x319ec5, _0x5d9a1d, _0x221bdb, _0x7960af) {
  let _0x86b66f = [],
    _0x574f73 = [],
    _0x2665c8 = [],
    { showRowGrandTotal: _0x40c83, showRowSubTotal: _0x562534 } = _0x7960af,
    {
      cornerView: _0x42c463,
      colView: _0x19550c,
      rowView: _0x13da0a,
      dataView: _0x1e8845,
      formatMap: _0x49e5de,
    } = _0x5d9a1d,
    _0x574a7a = _0x42c463.getRowCount(),
    _0x15490e = _0x42c463.getColCount();
  for (let _0x585aad = 0; _0x585aad < _0x574a7a; _0x585aad++)
    for (let _0x21c3b3 = 0; _0x21c3b3 < _0x15490e; _0x21c3b3++) {
      var _0x4b8d3b;
      let _0x25022a = {
        ...((_0x4b8d3b = _0x42c463.data) == null ||
        (_0x4b8d3b = _0x4b8d3b[_0x585aad]) == null
          ? undefined
          : _0x4b8d3b[_0x21c3b3]),
      };
      _0x25022a.v &&
        (_0x86b66f[_0x585aad] || (_0x86b66f[_0x585aad] = []),
        _0x2665c8[_0x585aad] || (_0x2665c8[_0x585aad] = []),
        (_0x86b66f[_0x585aad][_0x21c3b3] = _0x25022a.v),
        (_0x2665c8[_0x585aad][_0x21c3b3] = _0x25022a.v));
    }
  for (let _0x1c9476 = 0; _0x1c9476 < _0x19550c.getRowCount(); _0x1c9476++) {
    var _0x2806a6;
    let _0x408618 =
        _0x19550c == null ||
        (_0x2806a6 = _0x19550c.headerMap) == null ||
        (_0x2806a6 = _0x2806a6[_0x1c9476]) == null
          ? undefined
          : _0x2806a6.tableFieldId,
      _0x119a82 = _0x408618 ? _0x49e5de[_0x408618] : "";
    for (let _0x5b69cd = 0; _0x5b69cd < _0x19550c.getColCount(); _0x5b69cd++) {
      var _0x51f160;
      let _0x1e1e8f = {
        ...((_0x51f160 = _0x19550c.data) == null ||
        (_0x51f160 = _0x51f160[_0x1c9476]) == null
          ? undefined
          : _0x51f160[_0x5b69cd]),
      };
      if ((_0x1e1e8f == null ? undefined : _0x1e1e8f.v) !== undefined) {
        let _0x11946f = _0x119a82
          ? _0x27c823.format(_0x119a82, Number(_0x1e1e8f.v))
          : _0x1e1e8f.v;
        ((_0x1e1e8f == null ? undefined : _0x1e1e8f.s) === _0x241514.Subtotal
          ? (_0x11946f = _0x221bdb ? "小计 " + _0x11946f : "Total " + _0x11946f)
          : (_0x1e1e8f == null ? undefined : _0x1e1e8f.s) ===
              _0x241514.GrandTotal &&
            (_0x11946f = _0x221bdb
              ? "总计\x20" + _0x11946f
              : "Grand Total " + _0x11946f),
          (_0x1e1e8f == null ? undefined : _0x1e1e8f.t) === _0x43b710.blank &&
            (_0x11946f = _0x221bdb ? "（空白）" : "(blank)"),
          (_0x1e1e8f == null ? undefined : _0x1e1e8f.t) === _0x43b710.other &&
            (_0x11946f = _0x221bdb ? "（其他）" : "(other)"),
          _0x86b66f[_0x1c9476] || (_0x86b66f[_0x1c9476] = []),
          _0x2665c8[_0x1c9476] || (_0x2665c8[_0x1c9476] = []),
          (_0x86b66f[_0x1c9476][_0x5b69cd + _0x15490e] = _0x11946f),
          (_0x2665c8[_0x1c9476][_0x5b69cd + _0x15490e] = _0x11946f));
      }
    }
  }
  let _0x56d1ed = 0,
    _0x4e812e = 0,
    _0xa4d2ae = 0;
  for (let _0x32cb39 = 0; _0x32cb39 < _0x13da0a.getRowCount(); _0x32cb39++) {
    let _0x4649b0 = _0x13da0a.info[_0x32cb39];
    if (!_0x562534 && _0x4649b0.isBottomTotal && _0x4649b0.level !== 0) {
      (_0xa4d2ae++, (_0x4e812e = 0));
      continue;
    }
    if (!(!_0x40c83 && _0x4649b0.isBottomTotal && _0x4649b0.level === 0)) {
      for (
        let _0x449630 = 0;
        _0x449630 < _0x13da0a.getColCount();
        _0x449630++
      ) {
        var _0x2633f5, _0x4f1cfa;
        let _0x1b5008 = {
            ...((_0x2633f5 = _0x13da0a.data) == null ||
            (_0x2633f5 = _0x2633f5[_0x32cb39]) == null
              ? undefined
              : _0x2633f5[_0x449630]),
          },
          _0x495fb0 =
            _0x13da0a == null ||
            (_0x4f1cfa = _0x13da0a.headerMap) == null ||
            (_0x4f1cfa = _0x4f1cfa[_0x449630]) == null
              ? undefined
              : _0x4f1cfa.tableFieldId,
          _0x162b58 = _0x495fb0 ? _0x49e5de[_0x495fb0] : "";
        if ((_0x1b5008 == null ? undefined : _0x1b5008.v) !== undefined) {
          let _0x1160ef = _0x162b58
            ? _0x27c823.format(_0x162b58, Number(_0x1b5008.v))
            : _0x1b5008.v;
          ((_0x1b5008 == null ? undefined : _0x1b5008.s) === _0x241514.Subtotal
            ? (_0x1160ef = _0x221bdb
                ? "小计 " + _0x1160ef
                : "Total " + _0x1160ef)
            : (_0x1b5008 == null ? undefined : _0x1b5008.s) ===
                _0x241514.GrandTotal &&
              (_0x1160ef = _0x221bdb
                ? "总计 " + _0x1160ef
                : "Grand Total " + _0x1160ef),
            (_0x1b5008 == null ? undefined : _0x1b5008.t) === _0x43b710.blank &&
              (_0x1160ef = _0x221bdb ? "（空白）" : "(blank)"),
            (_0x1b5008 == null ? undefined : _0x1b5008.t) === _0x43b710.other &&
              (_0x1160ef = _0x221bdb ? "（其他）" : "(other)"),
            _0x86b66f[_0x56d1ed + _0x574a7a] ||
              (_0x86b66f[_0x56d1ed + _0x574a7a] = []));
          let _0x351554 = _0x574f73[_0xa4d2ae];
          (_0x351554 ||
            ((_0x351554 = [..._0x2665c8]), (_0x574f73[_0xa4d2ae] = _0x351554)),
            _0x351554[_0x4e812e + _0x574a7a] ||
              (_0x351554[_0x4e812e + _0x574a7a] = []),
            (_0x351554[_0x4e812e + _0x574a7a][_0x449630] = _0x1160ef),
            (_0x86b66f[_0x56d1ed + _0x574a7a][_0x449630] = _0x1160ef));
        }
      }
      (_0x56d1ed++,
        _0x13da0a.info[_0x32cb39].isBottomTotal
          ? (_0xa4d2ae++, (_0x4e812e = 0))
          : _0x4e812e++);
    }
  }
  ((_0x56d1ed = 0), (_0xa4d2ae = 0), (_0x4e812e = 0));
  for (let _0x2d61f5 = 0; _0x2d61f5 < _0x1e8845.getRowCount(); _0x2d61f5++) {
    let _0x2155c6 = _0x13da0a.info[_0x2d61f5];
    if (!_0x562534 && _0x2155c6.isBottomTotal && _0x2155c6.level !== 0) {
      (_0xa4d2ae++, (_0x4e812e = 0));
      continue;
    }
    if (!(!_0x40c83 && _0x2155c6.isBottomTotal && _0x2155c6.level === 0)) {
      for (
        let _0x4f4f89 = 0;
        _0x4f4f89 < _0x1e8845.getColCount();
        _0x4f4f89++
      ) {
        var _0x11e600;
        let _0x41e7f2 = {
          ...((_0x11e600 = _0x1e8845.data) == null ||
          (_0x11e600 = _0x11e600[_0x2d61f5]) == null
            ? undefined
            : _0x11e600[_0x4f4f89]),
        };
        if (_0x41e7f2.v) {
          let _0x30dc8e = _0x13da0a.info[_0x2d61f5].valueIndex,
            _0x9dabe9 = _0x19550c.info[_0x4f4f89].valueIndex,
            _0x3a3c87 = Math.max(_0x30dc8e, _0x9dabe9),
            _0x53ae52 = _0x319ec5.getValueFields().concat(),
            _0x49a3e7 = "";
          _0x49a3e7 =
            _0x3a3c87 < 0 ? (_0x53ae52[0] ?? "") : (_0x53ae52[_0x3a3c87] ?? "");
          let _0x37eeca = _0x49e5de[_0x49a3e7] ?? "";
          _0x86b66f[_0x56d1ed + _0x574a7a] ||
            (_0x86b66f[_0x56d1ed + _0x574a7a] = []);
          let _0x2358fc = _0x574f73[_0xa4d2ae];
          (_0x2358fc ||
            ((_0x2358fc = [..._0x2665c8]), (_0x574f73[_0xa4d2ae] = _0x2358fc)),
            _0x2358fc[_0x4e812e + _0x574a7a] ||
              (_0x2358fc[_0x4e812e + _0x574a7a] = []));
          let _0x23eb23 = _0x37eeca
            ? _0x27c823.format(_0x37eeca, Number(_0x41e7f2.v))
            : _0x41e7f2.v;
          ((_0x2358fc[_0x4e812e + _0x574a7a][_0x4f4f89 + _0x15490e] =
            _0x23eb23),
            (_0x86b66f[_0x56d1ed + _0x574a7a][_0x4f4f89 + _0x15490e] =
              _0x23eb23));
        }
      }
      (_0x56d1ed++,
        _0x13da0a.info[_0x2d61f5].isBottomTotal
          ? (_0xa4d2ae++, (_0x4e812e = 0))
          : _0x4e812e++);
    }
  }
  return { dataArr: _0x86b66f, dataArrWithSplit: _0x574f73 };
}
var we = class {
    constructor(_0x54add7, _0x1fe250, _0x273dcd, _0xdb001c) {
      (J(this, "_pivot", undefined),
        J(this, "_sourceData", undefined),
        J(this, "_injector", undefined),
        J(this, "_isZhCN", undefined),
        J(this, "_id", undefined),
        (this._injector = _0x54add7),
        (this._pivot = _0x1fe250),
        (this._sourceData = _0x273dcd),
        (this._id = _0xdb001c));
      let _0x59333f = this._injector["get"](_0x7ac122);
      this._isZhCN = _0x59333f.getCurrentLocale() === _0x3280d5.ZH_CN;
    }
    _getSourceIdByName(_0xdff3f7) {
      let _0x3da11e = this._pivot["getDataFieldIdByDisplayName"](_0xdff3f7);
      if (!_0x3da11e)
        throw Error(
          "[PivotTable]: The field name " +
            _0xdff3f7 +
            " is not found in the pivot table.",
        );
      return _0x3da11e;
    }
    addFieldWithName(_0x7d89ce, _0x390fb1) {
      let _0xb885ab = this._getSourceIdByName(_0x7d89ce),
        _0x28623c = this._pivot["addFieldWithSourceId"](_0xb885ab, _0x390fb1);
      if (!_0x28623c)
        throw Error("[PivotTable]: add field " + _0x7d89ce + " failed.");
      if (_0x390fb1 === _0x340246.Value) {
        let _0x448d67 = _0x28623c.getId(),
          _0x3442db = this._pivot["getDataFieldByTableId"](_0x448d67);
        if (_0x3442db) {
          let _0x57ec83 =
            _0x3442db == null ? undefined : _0x3442db.getFieldDataType();
          this._pivot["setSubtotalType"](
            _0x448d67,
            _0x57ec83 === _0x68fb28.number ? _0x53f254.sum : _0x53f254.count,
          );
        }
        let _0x40c8eb = this._pivot["getValueIndex"](),
          _0x11dc9a = this._pivot["getValuePosition"](),
          _0x494e7d = this._pivot["getFieldCountByArea"](_0x340246.Value);
        if (_0x40c8eb === -1 && _0x494e7d > 1) {
          let _0x50ff66 =
              _0x11dc9a === _0x13cbd3.None ? _0x13cbd3.Column : _0x11dc9a,
            _0x4a3132 =
              _0x50ff66 === _0x13cbd3.Row ? _0x340246.Row : _0x340246.Column;
          this._pivot["updateValuePosition"](
            _0x50ff66,
            this._pivot["getFieldCountByArea"](_0x4a3132),
          );
        }
      } else {
        if (_0x390fb1 === _0x340246.Row || _0x390fb1 === _0x340246.Column) {
          let _0x57dce0 = _0x28623c.getId(),
            _0x468606 = this._pivot["getDataFieldByTableId"](_0x57dce0);
          if (
            _0x468606 &&
            (_0x468606 == null ? undefined : _0x468606.getFieldDataType()) ===
              _0x68fb28.date
          ) {
            let _0x12af7c = _0x468606.getformat();
            _0x12af7c && this._pivot["setFieldFormat"](_0x57dce0, _0x12af7c);
          }
        }
      }
      return _0x28623c;
    }
    addFilterFieldWithName(_0x39d326, _0x505222) {
      let _0x199fbb = this._getSourceIdByName(_0x39d326),
        _0xcb1d73 = this._pivot["addFieldWithSourceId"](
          _0x199fbb,
          _0x340246.Filter,
        );
      return (_0xcb1d73.setFilterInfo(_0x505222), _0xcb1d73);
    }
    addValueFieldWithName(_0x34cd04, _0x3f6b7b) {
      let _0x20aea1 = this.addFieldWithName(_0x34cd04, _0x340246.Value);
      return (
        _0x3f6b7b != null &&
          _0x3f6b7b.subtotal &&
          _0x20aea1.setSubtotal(
            _0x3f6b7b == null ? undefined : _0x3f6b7b.subtotal,
          ),
        _0x20aea1
      );
    }
    removeFieldWithName(_0x5adc0c) {
      let _0x490772 = this._getSourceIdByName(_0x5adc0c);
      this._pivot["getTableFieldsByDataFieldId"](_0x490772).forEach(
        (_0x5573b0) => {
          let _0x207e4c = _0x5573b0.getId();
          this._pivot["removeField"](_0x207e4c);
        },
      );
    }
    getResultByCalculate(_0x557e09 = {}) {
      let _0x4ce9fd = this._pivot["query"](),
        { dataArr: _0x15e509, dataArrWithSplit: _0x7cc2e8 } = Ce(
          this._pivot,
          _0x4ce9fd,
          this._isZhCN,
          _0x557e09,
        );
      return { dataArr: _0x15e509, dataArrWithSplit: _0x7cc2e8 };
    }
    getNameWithColumnIndex(_0x1b5b66) {
      return this._pivot["getFieldDisplayNames"]()[_0x1b5b66];
    }
    reset() {
      this._pivot["reset"]();
    }
    resetDimension(_0x4a7a8e) {
      this._pivot["reset"](_0x4a7a8e);
    }
    getFieldDataTypeByColumnIndex(_0x151e31) {
      let _0x461e78 = this._pivot["dataFieldsCollection"],
        _0x5a0d3e = _0x461e78.getFieldIds()[_0x151e31];
      if (_0x5a0d3e)
        return _0x461e78.getFieldById(_0x5a0d3e).getFieldDataType();
    }
    getFieldDataTypeByFieldName(_0x542c12) {
      let _0x53b8fd = this._getSourceIdByName(_0x542c12),
        _0x39af1f = this._pivot["dataFieldsCollection"].getFieldById(_0x53b8fd);
      return _0x39af1f == null ? undefined : _0x39af1f.getFieldDataType();
    }
    getDimensionInfo() {
      let _0x464a08 = {};
      return (
        [
          [_0x340246.Row, "row"],
          [_0x340246.Column, "column"],
          [_0x340246.Filter, "filter"],
          [_0x340246.Value, "value"],
        ].forEach((_0x3b7670) => {
          let [_0x4de651, _0x5de4d0] = _0x3b7670;
          this._pivot["iterateFieldByArea"](_0x4de651, (_0x66ed65) => {
            (_0x464a08[_0x5de4d0] || (_0x464a08[_0x5de4d0] = []),
              _0x464a08[_0x5de4d0].push(_0x66ed65.getSourceName()));
          });
        }),
        Object.keys(_0x464a08).length > 0 ? _0x464a08 : undefined
      );
    }
    getPivotSourceData() {
      return this._sourceData;
    }
    getLayout() {
      return this._pivot["getLayout"]();
    }
    setLayout(_0x47e402) {
      this._pivot["setLayout"](_0x47e402);
    }
    setOptions(_0x33e474) {
      this._pivot["setOptions"](_0x33e474);
    }
    remove() {
      this._pivot["dispose"]();
    }
  },
  Te = class extends _0x13ba7c {
    getRangeData(_0x334fea) {
      if (Array.isArray(_0x334fea) && _0x334fea.length > 0) {
        let _0x187df5 = [],
          _0x2e297c = _0x334fea[0],
          _0x20a869 = {},
          _0x7d286a = _0x334fea[1];
        for (let _0x58cf61 = 0; _0x58cf61 < _0x7d286a.length; _0x58cf61++) {
          let _0x26ddbf = _0x7d286a[_0x58cf61];
          if (typeof _0x26ddbf == "object" && _0x26ddbf instanceof Date)
            _0x20a869[_0x58cf61] = $;
          else {
            if (typeof _0x26ddbf == "string") {
              let _0x5ef761 = new Date(_0x26ddbf);
              Number.isNaN(_0x5ef761.getTime()) || (_0x20a869[_0x58cf61] = $);
            }
          }
        }
        for (let _0x58b164 = 1; _0x58b164 < _0x334fea.length; _0x58b164++) {
          let _0x45e5c7 = _0x334fea[_0x58b164],
            _0xad0d89 = [];
          for (let _0x24f127 = 0; _0x24f127 < _0x45e5c7.length; _0x24f127++)
            if (_0x20a869[_0x24f127]) {
              let _0x449e4a = _0x45e5c7[_0x24f127],
                _0x14c472 = {
                  v: Se(
                    (typeof _0x449e4a == "object" && _0x449e4a instanceof Date
                      ? _0x449e4a
                      : new Date(_0x449e4a)
                    ).getTime(),
                  ),
                  f: _0x20a869[_0x24f127],
                };
              _0xad0d89.push(_0x14c472);
            } else _0xad0d89.push(_0x45e5c7[_0x24f127]);
          _0x187df5.push(_0xad0d89);
        }
        return { header: _0x2e297c, data: _0x187df5 };
      } else
        throw Error(
          "[DataFieldManager]:\x20Data\x20is\x20not\x20a\x20valid\x20array",
        );
    }
  },
  Ee = class extends _0x2dab3d {
    _initialize(_0x45a3b3) {
      let _0x275f66 = _0x45a3b3.get(_0x287ca8);
      (this.disposeWithMe(
        this.registerEventHandler(this.Event["BeforePivotTableAdd"], () =>
          _0x275f66.beforeCommandExecuted((_0x4fbcc9) => {
            switch (_0x4fbcc9.id) {
              case _0x2cd5d0.id: {
                let _0x3ca8a5 = _0x4fbcc9.params;
                this._fireBeforeMovePivotTableEvent(_0x3ca8a5);
                break;
              }
            }
          }),
        ),
      ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["BeforePivotTableMove"], () =>
            _0x275f66.beforeCommandExecuted((_0x5da7f8) => {
              switch (_0x5da7f8.id) {
                case _0x22362c.id:
                case _0x1b30c4.id: {
                  let _0x3bc450 = _0x5da7f8.params;
                  this._fireBeforeAddPivotTableEvent(_0x3bc450);
                  break;
                }
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableAdded"], () =>
            _0x275f66.onCommandExecuted((_0x4415f1) => {
              if (
                _0x4415f1.id === _0x22362c.id ||
                _0x4415f1.id === _0x1b30c4.id
              ) {
                let _0x328d3f = _0x4415f1.params;
                this._fireAddPivotTableEvent(_0x328d3f);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableMoved"], () =>
            _0x275f66.onCommandExecuted((_0x2f4cd7) => {
              if (_0x2f4cd7.id === _0x2cd5d0.id) {
                let _0x1e3b02 = _0x2f4cd7.params;
                this._fireMovedPivotTableEvent(_0x1e3b02);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableRemoved"], () =>
            _0x275f66.onCommandExecuted((_0x31f5cc) => {
              if (_0x31f5cc.id === _0xa113ab.id) {
                let _0x2b0d78 = _0x31f5cc.params;
                this._firePivotTableRemovedEvent(_0x2b0d78);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableFieldAdded"], () =>
            _0x275f66.onCommandExecuted((_0x166579) => {
              if (_0x166579.id === _0x4c8579.id) {
                let _0x2cd021 = _0x166579.params;
                this._firePivotTableFieldAddedEvent(_0x2cd021);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableFieldRemoved"], () =>
            _0x275f66.onCommandExecuted((_0x5b267e) => {
              if (_0x5b267e.id === _0x51a320.id) {
                let _0x23a560 = _0x5b267e.params;
                this._firePivotTableFieldRemovedEvent(_0x23a560);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableFieldMoved"], () =>
            _0x275f66.onCommandExecuted((_0x5ed21f) => {
              if (_0x5ed21f.id === _0x36d246.id) {
                let _0x1b2793 = _0x5ed21f.params;
                this._firePivotTableFieldMovedEvent(_0x1b2793);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableFieldCollapseChanged"],
            () =>
              _0x275f66.onCommandExecuted((_0x55bce1) => {
                if (_0x55bce1.id === _0x3f7c00.id) {
                  let _0x2b3ed1 = _0x55bce1.params;
                  this._firePivotTableFieldCollapsedEvent(_0x2b3ed1);
                }
              }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableFieldFilterChanged"],
            () =>
              _0x275f66.onCommandExecuted((_0x4324b2) => {
                if (_0x4324b2.id === _0x41a486.id) {
                  let _0x24d1d7 = _0x4324b2.params;
                  this._firePivotTableFieldFilterChangedEvent(_0x24d1d7);
                }
              }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableFieldSortChanged"],
            () =>
              _0x275f66.onCommandExecuted((_0x113e8f) => {
                if (_0x113e8f.id === _0x45ddbc.id) {
                  let _0x441dc9 = _0x113e8f.params;
                  this._firePivotTableFieldSortChangedEvent(_0x441dc9);
                }
              }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableFieldSettingChanged"],
            () =>
              _0x275f66.onCommandExecuted((_0x437a3e) => {
                if (_0x437a3e.id === _0x1bc823.id) {
                  let _0x3db367 = _0x437a3e.params;
                  this._firePivotTableFieldSettingChangedEvent(_0x3db367);
                }
              }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableValuePositionChanged"],
            () =>
              _0x275f66.onCommandExecuted((_0x226201) => {
                if (_0x226201.id === _0x473fdd.id) {
                  let _0x5efcc0 = _0x226201.params;
                  this._firePivotTableValuePositionChangedEvent(_0x5efcc0);
                }
              }),
          ),
        ));
      let _0x4e6ea2 = _0x45a3b3.get(_0x2b6c9f),
        _0x458e6e = new _0x2ad640();
      this.disposeWithMe(
        _0x4e6ea2.lifecycle$["subscribe"]((_0x4dd22e) => {
          if (_0x4dd22e === _0x578479.Ready) {
            if (!_0x45a3b3.has(_0x48c749)) return;
            let _0x5aa0e3 = _0x45a3b3.get(_0x48c749);
            (_0x458e6e.dispose(),
              _0x458e6e.add(
                this.registerEventHandler(
                  this.Event["PivotTableRendered"],
                  () =>
                    _0x5aa0e3.viewUpdate$["pipe"](_0x5d64b3(50)).subscribe(
                      (_0x402a58) => {
                        this._fireRenderPivotTableEvent(_0x402a58);
                      },
                    ),
                ),
              ),
              this.disposeWithMe(_0x458e6e));
          }
        }),
      );
    }
    _firePivotTableFieldAddedEvent(_0x2b7c39) {
      if (_0x2b7c39) {
        let {
          unitId: _0x5dc143,
          subUnitId: _0xdacd25,
          pivotTableId: _0x57d7b3,
          dataFieldId: _0x433feb,
          fieldArea: _0x44b5ec,
          index: _0x6177c0,
        } = _0x2b7c39;
        this.fireEvent(this.Event["PivotTableFieldAdded"], {
          unitId: _0x5dc143,
          subUnitId: _0xdacd25,
          pivotTableId: _0x57d7b3,
          dataFieldId: _0x433feb,
          fieldArea: _0x44b5ec,
          index: _0x6177c0,
        });
      }
    }
    _firePivotTableFieldRemovedEvent(_0x40a35e) {
      if (_0x40a35e) {
        let {
          unitId: _0x245b0f,
          subUnitId: _0x57884a,
          pivotTableId: _0x1d7a33,
          fieldIds: _0x5ba2af,
        } = _0x40a35e;
        this.fireEvent(this.Event["PivotTableFieldRemoved"], {
          unitId: _0x245b0f,
          subUnitId: _0x57884a,
          pivotTableId: _0x1d7a33,
          fieldIds: _0x5ba2af.concat(),
        });
      }
    }
    _firePivotTableFieldMovedEvent(_0x12f7de) {
      if (_0x12f7de) {
        let {
          unitId: _0x2b79c5,
          subUnitId: _0x20c5d6,
          pivotTableId: _0x15b2cd,
          fieldId: _0x4e13b4,
          area: _0x469222,
          index: _0x54d86d,
        } = _0x12f7de;
        this.fireEvent(this.Event["PivotTableFieldMoved"], {
          unitId: _0x2b79c5,
          subUnitId: _0x20c5d6,
          pivotTableId: _0x15b2cd,
          fieldId: _0x4e13b4,
          area: _0x469222,
          index: _0x54d86d,
        });
      }
    }
    _firePivotTableFieldCollapsedEvent(_0x200e38) {
      if (_0x200e38) {
        let {
          unitId: _0x411947,
          subUnitId: _0x5512c7,
          row: _0x767e8c,
          col: _0x263ff7,
          collapse: _0x294043,
        } = _0x200e38;
        this.fireEvent(this.Event["PivotTableFieldCollapseChanged"], {
          unitId: _0x411947,
          subUnitId: _0x5512c7,
          row: _0x767e8c,
          col: _0x263ff7,
          collapse: _0x294043,
        });
      }
    }
    _firePivotTableFieldFilterChangedEvent(_0x541a9d) {
      if (_0x541a9d) {
        let {
          unitId: _0xe605f4,
          subUnitId: _0xcff843,
          pivotTableId: _0x3039dd,
          tableFieldId: _0x572434,
          items: _0x388211,
          isAll: _0x1b30a7,
        } = _0x541a9d;
        this.fireEvent(this.Event["PivotTableFieldFilterChanged"], {
          unitId: _0xe605f4,
          subUnitId: _0xcff843,
          pivotTableId: _0x3039dd,
          tableFieldId: _0x572434,
          items: _0x388211.concat(),
          isAll: _0x1b30a7,
        });
      }
    }
    _firePivotTableFieldSortChangedEvent(_0x13bdf1) {
      if (_0x13bdf1) {
        let {
          unitId: _0x171a53,
          subUnitId: _0x4cf7b9,
          pivotTableId: _0x580d8e,
          tableFieldId: _0x220d17,
          info: _0x5479ec,
        } = _0x13bdf1;
        this.fireEvent(this.Event["PivotTableFieldSortChanged"], {
          unitId: _0x171a53,
          subUnitId: _0x4cf7b9,
          pivotTableId: _0x580d8e,
          tableFieldId: _0x220d17,
          info: _0x5479ec ? { ..._0x5479ec } : undefined,
        });
      }
    }
    _firePivotTableFieldSettingChangedEvent(_0x3fa8d3) {
      if (_0x3fa8d3) {
        let {
          unitId: _0x2d63b9,
          subUnitId: _0x197723,
          tableFieldId: _0x5c9261,
          pivotTableId: _0x6d9a75,
          displayName: _0x6da7c9,
          format: _0x2f3779,
          subtotalType: _0x26e96c,
          showDataAs: _0x5065e0,
          tableFieldInfo: _0x252b4f,
          dataFieldInfo: _0x46d83f,
        } = _0x3fa8d3;
        this.fireEvent(this.Event["PivotTableFieldSettingChanged"], {
          unitId: _0x2d63b9,
          subUnitId: _0x197723,
          tableFieldId: _0x5c9261,
          pivotTableId: _0x6d9a75,
          displayName: _0x6da7c9,
          format: _0x2f3779,
          subtotalType: _0x26e96c,
          showDataAs: _0x5065e0 === undefined ? undefined : { ..._0x5065e0 },
          tableFieldInfo: _0x252b4f,
          dataFieldInfo: _0x46d83f,
        });
      }
    }
    _firePivotTableValuePositionChangedEvent(_0x73177e) {
      if (_0x73177e) {
        let {
          pivotTableId: _0x4a1ea4,
          position: _0x196bf4,
          index: _0xe0a333,
        } = _0x73177e;
        this.fireEvent(this.Event["PivotTableValuePositionChanged"], {
          pivotTableId: _0x4a1ea4,
          position: _0x196bf4,
          index: _0xe0a333,
        });
      }
    }
    _fireAddPivotTableEvent(_0x1f2f19) {
      if (_0x1f2f19) {
        let {
            positionType: _0x37eba6,
            pivotTableId: _0x2bfc80,
            pivotTableConfig: _0x199b2c,
          } = _0x1f2f19,
          { targetCellInfo: _0x29b04b, sourceRangeInfo: _0x7877e } = _0x199b2c,
          { unitId: _0x75788c } = _0x29b04b;
        this.fireEvent(this.Event["PivotTableAdded"], {
          unitId: _0x75788c,
          positionType: _0x37eba6,
          pivotTableId: _0x2bfc80,
          sourceRangeInfo: {
            startRow: _0x7877e.range["startRow"],
            endRow: _0x7877e.range["endRow"],
            startColumn: _0x7877e.range["startColumn"],
            endColumn: _0x7877e.range["endColumn"],
            unitId: _0x7877e.unitId,
            subUnitId: _0x7877e.subUnitId,
            sheetName: _0x7877e.sheetName,
          },
          targetCellInfo: {
            row: _0x29b04b.row,
            column: _0x29b04b.col,
            sheetName: _0x29b04b.sheetName,
            unitId: _0x29b04b.unitId,
            subUnitId: _0x29b04b.subUnitId,
          },
        });
      }
    }
    _fireBeforeAddPivotTableEvent(_0x4c3989) {
      if (_0x4c3989) {
        let {
            positionType: _0x4ad112,
            pivotTableId: _0x2425f2,
            pivotTableConfig: _0x16fcdd,
          } = _0x4c3989,
          { targetCellInfo: _0x270bb9, sourceRangeInfo: _0xa3e437 } = _0x16fcdd,
          { unitId: _0x414240 } = _0x270bb9,
          _0x2dd9c8 = {
            unitId: _0x414240,
            positionType: _0x4ad112,
            pivotTableId: _0x2425f2,
            sourceRangeInfo: {
              startRow: _0xa3e437.range["startRow"],
              endRow: _0xa3e437.range["endRow"],
              startColumn: _0xa3e437.range["startColumn"],
              endColumn: _0xa3e437.range["endColumn"],
              unitId: _0xa3e437.unitId,
              subUnitId: _0xa3e437.subUnitId,
              sheetName: _0xa3e437.sheetName,
            },
            targetCellInfo: {
              row: _0x270bb9.row,
              column: _0x270bb9.col,
              sheetName: _0x270bb9.sheetName,
              unitId: _0x270bb9.unitId,
              subUnitId: _0x270bb9.subUnitId,
            },
            cancel: false,
          };
        if (
          (this.fireEvent(this.Event["BeforePivotTableAdd"], _0x2dd9c8),
          _0x2dd9c8.cancel)
        )
          throw Error("Before add pivot table event canceled");
      }
    }
    _firePivotTableRemovedEvent(_0x174801) {
      if (_0x174801) {
        let { unitId: _0x1c4fe9, pivotTableId: _0x1e21d0 } = _0x174801;
        this.fireEvent(this.Event["PivotTableRemoved"], {
          unitId: _0x1c4fe9,
          pivotTableId: _0x1e21d0,
        });
      }
    }
    _fireBeforeMovePivotTableEvent(_0x3a57b8) {
      if (_0x3a57b8) {
        let {
            originTargetInfo: _0x4431fc,
            pivotTableId: _0x366847,
            targetCellInfo: _0x40354a,
          } = _0x3a57b8,
          { unitId: _0x2a3309 } = _0x4431fc,
          _0xab7e2 = this._injector["get"](_0x6ac32).getPivotTableConfig(
            _0x4431fc.unitId,
            _0x4431fc.subUnitId,
            _0x366847,
          );
        if (!_0xab7e2) return;
        let _0x37b012 = {
          unitId: _0x2a3309,
          pivotTableId: _0x366847,
          originTargetInfo: {
            row: _0xab7e2.targetCellInfo["row"],
            column: _0xab7e2.targetCellInfo["col"],
            unitId: _0xab7e2.targetCellInfo["unitId"],
            subUnitId: _0xab7e2.targetCellInfo["subUnitId"],
          },
          targetCellInfo: {
            row: _0x40354a.row,
            column: _0x40354a.col,
            unitId: _0x40354a.unitId,
            subUnitId: _0x40354a.subUnitId,
          },
          cancel: false,
        };
        if (
          (this.fireEvent(this.Event["BeforePivotTableMove"], _0x37b012),
          _0x37b012.cancel)
        )
          throw Error("Before move pivot table event canceled");
      }
    }
    _fireMovedPivotTableEvent(_0x442129) {
      if (_0x442129) {
        let {
            originTargetInfo: _0x5df702,
            pivotTableId: _0x3494b3,
            targetCellInfo: _0x18e955,
          } = _0x442129,
          { unitId: _0x3f73a3 } = _0x5df702,
          _0x41387e = this._injector["get"](_0x6ac32).getPivotTableConfig(
            _0x5df702.unitId,
            _0x5df702.subUnitId,
            _0x3494b3,
          );
        if (!_0x41387e) return;
        this.fireEvent(this.Event["PivotTableMoved"], {
          unitId: _0x3f73a3,
          pivotTableId: _0x3494b3,
          originTargetInfo: {
            row: _0x41387e.targetCellInfo["row"],
            column: _0x41387e.targetCellInfo["col"],
            unitId: _0x41387e.targetCellInfo["unitId"],
            subUnitId: _0x41387e.targetCellInfo["subUnitId"],
          },
          targetCellInfo: {
            row: _0x18e955.row,
            column: _0x18e955.col,
            unitId: _0x18e955.unitId,
            subUnitId: _0x18e955.subUnitId,
          },
        });
      }
    }
    _fireRenderPivotTableEvent(_0x559f76) {
      if (_0x559f76) {
        let {
          unitId: _0x113d56,
          subUnitId: _0x11a467,
          pivotTableId: _0x3bfed0,
          type: _0x3510be,
          rangesCache: _0x16ae06,
          isEmpty: _0x20751f,
        } = _0x559f76;
        this.fireEvent(this.Event["PivotTableRendered"], {
          unitId: _0x113d56,
          subUnitId: _0x11a467,
          pivotTableId: _0x3bfed0,
          changeType: _0x3510be,
          isEmpty: !!_0x20751f,
          rangeInfo: _0x16ae06,
        });
      }
    }
    generatePivotTable(_0xe824de, _0x28927f) {
      let _0x57effa = (_0x28927f ? new _0x28927f() : new Te()).createCollection(
          "data",
          _0xe824de,
        ),
        _0x379a31 = _0xe824de[0];
      _0x57effa.getFieldIds().forEach((_0x2dfff6, _0x298c13) => {
        _0x57effa.setDisplayName(_0x2dfff6, _0x379a31[_0x298c13]);
      });
      let _0x42114a = _0x260c50(8),
        _0x20dae4 = new _0x227638(_0x57effa, undefined, _0x42114a);
      return new we(this._injector, _0x20dae4, _0xe824de, _0x42114a);
    }
  };
_0x2dab3d.extend(Ee);
export {};
