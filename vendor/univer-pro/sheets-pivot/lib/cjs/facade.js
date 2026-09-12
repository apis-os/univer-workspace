let e = require("@univerjs-pro/engine-pivot"),
  t = require("@univerjs-pro/sheets-pivot"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets/facade"),
  i = require("@univerjs/core/facade"),
  a = require("rxjs");
function o(_0xaadbef) {
  "@babel/helpers - typeof";
  return (
    (o =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3efaf3) {
            return typeof _0x3efaf3;
          }
        : function (_0x546912) {
            return _0x546912 &&
              typeof Symbol == "function" &&
              _0x546912.constructor === Symbol &&
              _0x546912 !== Symbol.prototype
              ? "symbol"
              : typeof _0x546912;
          }),
    o(_0xaadbef)
  );
}
function s(_0x2e0eb9, _0x41a768) {
  if (o(_0x2e0eb9) != "object" || !_0x2e0eb9) return _0x2e0eb9;
  var _0x3dd6d7 = _0x2e0eb9[Symbol.toPrimitive];
  if (_0x3dd6d7 !== undefined) {
    var _0x1b41c4 = _0x3dd6d7.call(_0x2e0eb9, _0x41a768 || "default");
    if (o(_0x1b41c4) != "object") return _0x1b41c4;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x41a768 === "string" ? String : Number)(_0x2e0eb9);
}
function c(_0x525ee4) {
  var _0x82d578 = s(_0x525ee4, "string");
  return o(_0x82d578) == "symbol" ? _0x82d578 : _0x82d578 + "";
}
function l(_0xbc29b4, _0x174fc8, _0x47b346) {
  return (
    (_0x174fc8 = c(_0x174fc8)) in _0xbc29b4
      ? Object.defineProperty(_0xbc29b4, _0x174fc8, {
          value: _0x47b346,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xbc29b4[_0x174fc8] = _0x47b346),
    _0xbc29b4
  );
}
const u = {
  type: e.PivotShowAsTypeEnum["normal"],
  baseFieldId: "",
  baseItem: "",
};
function d(_0x1ea9c6) {
  return {
    ..._0x1ea9c6,
    expected: Array.isArray(_0x1ea9c6.expected)
      ? _0x1ea9c6.expected["concat"]()
      : _0x1ea9c6.expected,
  };
}
var f = class {
    constructor(_0x2e9b63, _0x5f4149, _0x16836b, _0x1a15a4) {
      (l(this, "unitId", undefined),
        l(this, "subUnitId", undefined),
        l(this, "pivotTableId", undefined),
        l(this, "_injector", undefined),
        (this.unitId = _0x2e9b63),
        (this.subUnitId = _0x5f4149),
        (this.pivotTableId = _0x16836b),
        (this._injector = _0x1a15a4));
    }
    getConfig() {
      return this._injector["get"](
        t.SheetsPivotTableConfigModel,
      ).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId);
    }
    getId() {
      return this.pivotTableId;
    }
    getSourceRangeInfo() {
      var _0x23d46d;
      let _0x55590a =
        (_0x23d46d = this.getConfig()) == null
          ? undefined
          : _0x23d46d.sourceRangeInfo;
      if (_0x55590a) return { ..._0x55590a, range: { ..._0x55590a.range } };
    }
    getTargetCellInfo() {
      var _0x227b72;
      let _0xccce2c =
        (_0x227b72 = this.getConfig()) == null
          ? undefined
          : _0x227b72.targetCellInfo;
      if (_0xccce2c) return { ..._0xccce2c };
    }
    getOptions() {
      var _0x44a18e;
      let _0x24e26f =
        (_0x44a18e = this.getConfig()) == null
          ? undefined
          : _0x44a18e.fieldsConfig["options"];
      if (_0x24e26f) return { ..._0x24e26f };
    }
    getLayout() {
      var _0x10f17c;
      let _0x241974 =
        (_0x10f17c = this.getConfig()) == null
          ? undefined
          : _0x10f17c.fieldsConfig;
      if (_0x241974)
        return _0x241974.layout ?? e.PivotLayoutTypeEnum["tabular"];
    }
    getPivotTableMatrixInfo() {
      return this._injector["get"](
        t.SheetsPivotTableConfigModel,
      ).getPivotTableMatrixInfo(this.unitId, this.subUnitId, this.pivotTableId);
    }
    setFieldsConfig(_0x4a88a8) {
      let _0x3f041a = this._injector["get"](n.ICommandService),
        _0x53e78c = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          pivotTableConfig: _0x4a88a8,
        };
      return _0x3f041a.executeCommand(
        t.SetPivotFieldsConfigCommand["id"],
        _0x53e78c,
      );
    }
    setOptions(_0x1c5860) {
      let _0x23e08a = this._injector["get"](n.ICommandService),
        _0x3114b5 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          options: _0x1c5860,
        };
      return _0x23e08a.executeCommand(t.SetPivotOptionCommand["id"], _0x3114b5);
    }
    setLayout(_0x50102a) {
      let _0x5191fc = this._injector["get"](n.ICommandService),
        _0x5e3a23 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          layout: _0x50102a,
        };
      return _0x5191fc.executeCommand(t.SetPivotLayoutCommand["id"], _0x5e3a23);
    }
    setSourceRange(_0x557075) {
      let _0x49cf74 = this._injector["get"](n.ICommandService),
        _0x38ccf3 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          token: this.pivotTableId,
          dataRangeInfo: _0x557075,
        };
      return _0x49cf74.executeCommand(
        t.UpdatePivotTableSourceRangeCommand["id"],
        _0x38ccf3,
      );
    }
    updateSourceRange(_0x164214) {
      return this.setSourceRange(_0x164214);
    }
    reset(_0x4401d2) {
      let _0x37fcfb = this._injector["get"](n.ICommandService),
        _0x218c68 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          resetArea: _0x4401d2,
        };
      return _0x37fcfb.executeCommand(
        t.ResetPivotFieldsConfigCommand["id"],
        _0x218c68,
      );
    }
    getPivotTableId() {
      return this.pivotTableId;
    }
    getFieldSetting(_0x5c6ef8) {
      let _0xd41158 = this._injector["get"](
          t.SheetsPivotTableConfigModel,
        ).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId),
        _0x3bb484 = _0xd41158 == null ? undefined : _0xd41158.fieldsConfig;
      if (_0x3bb484)
        return _0x3bb484.dimension[_0x5c6ef8] || _0x3bb484.measure[_0x5c6ef8];
    }
    getSourceFieldsInfo() {
      let _0x2f3d79 = this._injector,
        _0x34a117 = this.unitId,
        _0x4745c5 = this.pivotTableId,
        _0x54f426 = _0x2f3d79
          .get(t.SheetsPivotTableConfigModel)
          .getCollection(_0x34a117, _0x4745c5);
      if (_0x54f426) {
        let _0x1e2f6b = _0x54f426.fieldIds,
          _0x314b96 = _0x54f426.fields,
          _0x482063 = _0x54f426.displayNameRecord,
          _0x48aa39 = [];
        for (let _0x20b884 of _0x1e2f6b) {
          let _0x4b9a64 = _0x314b96[_0x20b884];
          if (_0x4b9a64) {
            let _0x3709df = {
              id: _0x20b884,
              name: _0x4b9a64.name,
              fieldDataType: _0x4b9a64.fieldDataType,
            };
            (_0x482063 &&
              _0x482063[_0x20b884] !== undefined &&
              (_0x3709df.displayName = _0x482063[_0x20b884]),
              _0x48aa39.push(_0x3709df));
          }
        }
        return _0x48aa39;
      }
      return [];
    }
    getValueFilter(_0x19177b) {
      var _0x46f2c0;
      let _0x544b70 = this._injector["get"](
          t.SheetsPivotTableConfigModel,
        ).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId),
        _0x231a17 =
          _0x544b70 == null ? undefined : _0x544b70.fieldsConfig["valueFilter"],
        _0x2d5633 =
          _0x231a17 == null ||
          (_0x46f2c0 = _0x231a17.find(
            (_0x441fe6) => _0x441fe6.fieldId === _0x19177b,
          )) == null
            ? undefined
            : _0x46f2c0.filterInfo;
      return _0x2d5633 ? d(_0x2d5633) : undefined;
    }
    getValueFilters() {
      let _0x26808b = this._injector["get"](
          t.SheetsPivotTableConfigModel,
        ).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId),
        _0x329916 =
          _0x26808b == null ? undefined : _0x26808b.fieldsConfig["valueFilter"];
      return (
        (_0x329916 == null
          ? undefined
          : _0x329916.map(({ fieldId: _0x20562b, filterInfo: _0x10929f }) => ({
              fieldId: _0x20562b,
              filterInfo: d(_0x10929f),
            }))) || []
      );
    }
    getFieldIdsByArea(_0x535926) {
      let _0x33f571 = this._injector["get"](
          t.SheetsPivotTableConfigModel,
        ).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId),
        _0x195d9c = _0x33f571 == null ? undefined : _0x33f571.fieldsConfig;
      if (_0x195d9c)
        switch (_0x535926) {
          case e.PivotTableFiledAreaEnum["Column"]:
            return _0x195d9c.columnFields["concat"]();
          case e.PivotTableFiledAreaEnum["Row"]:
            return _0x195d9c.rowFields["concat"]();
          case e.PivotTableFiledAreaEnum["Value"]:
            return _0x195d9c.valueFields["concat"]();
          case e.PivotTableFiledAreaEnum["Filter"]:
            return _0x195d9c.filterFields["concat"]();
          case e.PivotTableFiledAreaEnum["Hidden"]:
            return _0x195d9c.hiddenFields["concat"]();
        }
      return [];
    }
    getPivotTableRangeInfo() {
      var _0x551829;
      let _0x48c51c =
        (_0x551829 = this._injector["get"](
          t.SheetsPivotTableConfigModel,
        ).getPivotTableRangeInfo(
          this.unitId,
          this.subUnitId,
          this.pivotTableId,
        )) == null
          ? undefined
          : _0x551829.rangeInfo;
      if (_0x48c51c) return (0, t.unionPivotViewRange)(_0x48c51c);
    }
    async remove() {
      return this._injector["get"](n.ICommandService).executeCommand(
        t.RemovePivotTableCommand["id"],
        {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
        },
      );
    }
    async addField(_0x97619, _0x301944, _0x1dff37) {
      let _0x3e9c8c = this._injector,
        _0x47c14c = this.unitId,
        _0x358318 = this.subUnitId,
        _0x534963 = this.pivotTableId,
        _0x6c935d = _0x3e9c8c.get(n.ICommandService),
        _0x3b5c99 = _0x3e9c8c.get(t.SheetsPivotTableConfigModel),
        _0x3badea = _0x3b5c99.getPivotTableConfig(
          _0x47c14c,
          _0x358318,
          _0x534963,
        ),
        _0x43cb97 = _0x3b5c99.getCollection(_0x47c14c, _0x534963);
      if (!_0x3badea || !_0x43cb97) return false;
      let _0x25c1b0 = _0x97619;
      typeof _0x25c1b0 == "number" &&
        (_0x25c1b0 = _0x3b5c99.getCollection(_0x47c14c, _0x534963).fieldIds[
          _0x97619
        ]);
      let _0x469534 = {
        unitId: _0x47c14c,
        subUnitId: _0x358318,
        pivotTableId: _0x534963,
        dataFieldId: _0x25c1b0,
        fieldArea: _0x301944,
        index: _0x1dff37,
      };
      return _0x6c935d.executeCommand(t.AddPivotFieldCommand["id"], _0x469534);
    }
    async removeField(_0x7ffcbe) {
      let _0x493050 = this._injector,
        _0x1f652b = this.unitId,
        _0x2ad694 = this.subUnitId,
        _0xaa8329 = this.pivotTableId,
        _0x2d1821 = _0x493050.get(n.ICommandService),
        _0x412d3c = {
          unitId: _0x1f652b,
          subUnitId: _0x2ad694,
          pivotTableId: _0xaa8329,
          fieldIds: _0x7ffcbe,
        };
      return _0x2d1821.executeCommand(
        t.RemovePivotFieldCommand["id"],
        _0x412d3c,
      );
    }
    async updateFieldPosition(_0x3f6bcf, _0x5d1ec1, _0x7fd5c3) {
      let _0xba6fc6 = this._injector,
        _0x2cd8bc = this.unitId,
        _0x13cd31 = this.subUnitId,
        _0x177494 = this.pivotTableId,
        _0x10c4a6 = _0xba6fc6.get(n.ICommandService),
        _0x17f16c = {
          unitId: _0x2cd8bc,
          subUnitId: _0x13cd31,
          pivotTableId: _0x177494,
          fieldId: _0x3f6bcf,
          area: _0x5d1ec1,
          index: _0x7fd5c3,
        };
      return _0x10c4a6.executeCommand(t.MovePivotFieldCommand["id"], _0x17f16c);
    }
    async updateValuePosition(_0x252027, _0x4cfb3e) {
      let _0x4029b0 = this._injector,
        _0x473174 = this.unitId,
        _0x444fc5 = this.subUnitId,
        _0x36b4e1 = this.pivotTableId,
        _0x48d5fa = _0x4029b0.get(n.ICommandService),
        _0x3ef33c = {
          unitId: _0x473174,
          subUnitId: _0x444fc5,
          pivotTableId: _0x36b4e1,
          position: _0x252027,
          index: _0x4cfb3e,
        };
      return _0x48d5fa.executeCommand(
        t.UpdatePivotValuePositionCommand["id"],
        _0x3ef33c,
      );
    }
    async setSubtotalType(_0xa630d1, _0x442f16) {
      return this.setFieldSetting(_0xa630d1, { subtotalType: _0x442f16 });
    }
    async setFieldSetting(_0x14cd62, _0x2d29d6) {
      var _0x8a754e;
      let _0x475016 = this._injector,
        _0x55237c = this.unitId,
        _0x2d3f63 = this.subUnitId,
        _0x7b6787 = this.pivotTableId,
        _0x18c962 = _0x475016.get(n.ICommandService),
        _0x22d54e = this._getPivotPanelTableFieldInfo(_0x14cd62),
        _0xbd4185 = _0x22d54e
          ? this._getPivotPanelSourceFieldInfo(_0x22d54e.dataFieldId)
          : undefined;
      if (
        !_0x22d54e ||
        !_0xbd4185 ||
        (_0x2d29d6.showDataAs !== undefined &&
          !(
            (_0x8a754e = this.getConfig()) != null &&
            _0x8a754e.fieldsConfig["measure"][_0x14cd62]
          ))
      )
        return (
          console.warn("[Pivot Table]: The pivot table field info is invalid"),
          false
        );
      let _0x5334d0 = {
        unitId: _0x55237c,
        subUnitId: _0x2d3f63,
        pivotTableId: _0x7b6787,
        tableFieldId: _0x14cd62,
        displayName: _0x2d29d6.displayName,
        format: _0x2d29d6.format,
        subtotalType: _0x2d29d6.subtotalType,
        showDataAs:
          _0x2d29d6.showDataAs === undefined
            ? undefined
            : { ..._0x2d29d6.showDataAs },
        tableFieldInfo: _0x22d54e,
        dataFieldInfo: _0xbd4185,
      };
      return _0x18c962.executeCommand(
        t.UpdatePivotFieldSettingCommand["id"],
        _0x5334d0,
      );
    }
    getShowDataAs(_0x5e2ed7) {
      var _0x26b9c3;
      let _0x3180fa = this.getFieldSetting(_0x5e2ed7);
      if (!(!_0x3180fa || !("subtotal" in _0x3180fa)))
        return ((_0x26b9c3 = _0x3180fa.showDataAs) == null
          ? undefined
          : _0x26b9c3.type) === undefined
          ? { ...u }
          : { ..._0x3180fa.showDataAs };
    }
    setShowDataAs(_0x420804, _0x4f7956) {
      return this.setFieldSetting(_0x420804, { showDataAs: _0x4f7956 });
    }
    resetShowDataAs(_0x5b5ddf) {
      return this.setShowDataAs(_0x5b5ddf, { ...u });
    }
    async setLabelSort(_0x855dba, _0x5d31f9) {
      let _0x38f932 = this._injector,
        _0x7ca570 = this.unitId,
        _0x52057f = this.subUnitId,
        _0x51acde = this.pivotTableId,
        _0xccb916 = _0x38f932.get(n.ICommandService),
        _0x101447 = {
          unitId: _0x7ca570,
          subUnitId: _0x52057f,
          tableFieldId: _0x855dba,
          pivotTableId: _0x51acde,
          info: _0x5d31f9,
        };
      return _0xccb916.executeCommand(t.SetPivotSortCommand["id"], _0x101447);
    }
    async clearLabelSort(_0x2ef0e4) {
      return this._injector["get"](n.ICommandService).executeCommand(
        t.SetPivotSortCommand["id"],
        {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          tableFieldId: _0x2ef0e4,
          info: undefined,
        },
      );
    }
    async setLabelManualFilter(_0x1c711b, _0x3ca6a4, _0x39b6e0) {
      let _0x54703d = this._injector,
        _0x37dd05 = this.unitId,
        _0x25a333 = this.subUnitId,
        _0xbdae25 = this.pivotTableId,
        _0xa8cf92 = _0x54703d.get(n.ICommandService),
        _0x2e12b4 = {
          unitId: _0x37dd05,
          subUnitId: _0x25a333,
          pivotTableId: _0xbdae25,
          tableFieldId: _0x1c711b,
          items: _0x3ca6a4,
          isAll: _0x39b6e0,
        };
      return _0xa8cf92.executeCommand(t.SetPivotFilterCommand["id"], _0x2e12b4);
    }
    async setValueFilter(_0x391c48, _0x6a9b8e) {
      var _0x3fe780;
      let _0x2c9162 = this._injector,
        _0x219434 = this.unitId,
        _0x3217b0 = this.subUnitId,
        _0x354d87 = this.pivotTableId,
        _0x3bbe62 =
          (_0x3fe780 = this.getConfig()) == null
            ? undefined
            : _0x3fe780.fieldsConfig,
        _0xd364f = !!(
          _0x3bbe62 &&
          (_0x3bbe62.rowFields["includes"](_0x391c48) ||
            _0x3bbe62.columnFields["includes"](_0x391c48))
        );
      if (
        !_0x3bbe62 ||
        !_0xd364f ||
        (_0x6a9b8e !== undefined &&
          (!_0x3bbe62.measure[_0x6a9b8e.valueFieldId] ||
            !(0, e.isValueFilterOperator)(_0x6a9b8e.operator)))
      )
        return false;
      let _0x54726b = _0x2c9162.get(n.ICommandService),
        _0x234cee = {
          unitId: _0x219434,
          subUnitId: _0x3217b0,
          pivotTableId: _0x354d87,
          fieldId: _0x391c48,
          valueFilterInfo: _0x6a9b8e
            ? d({ ..._0x6a9b8e, type: e.PivotFilterTypeEnum["ValueFilter"] })
            : undefined,
        };
      return _0x54726b.executeCommand(
        t.SetPivotValueFilterCommand["id"],
        _0x234cee,
      );
    }
    clearValueFilter(_0x3abfdf) {
      return this.setValueFilter(_0x3abfdf, undefined);
    }
    async renameField(_0x268ca0, _0x5d2409) {
      return this.setFieldSetting(_0x268ca0, { displayName: _0x5d2409 });
    }
    async move(_0x374902, _0x4ec5b0, _0x39c571) {
      let _0x5baab8 = this._injector["get"](n.ICommandService),
        _0x588d32 = this._injector["get"](n.IUniverInstanceService).getUnit(
          this.unitId,
        ),
        _0x549bf4 =
          _0x588d32 == null
            ? undefined
            : _0x588d32.getSheetBySheetName(_0x374902);
      if (!_0x588d32 || !_0x549bf4)
        throw Error(
          "[Pivot\x20Table]:\x20Target\x20sheet\x20is\x20not\x20valid",
        );
      return _0x5baab8.executeCommand(t.MovePivotTableCommand["id"], {
        pivotTableId: this.pivotTableId,
        targetCellInfo: {
          subUnitId: _0x549bf4.getSheetId(),
          unitId: this.unitId,
          row: _0x4ec5b0,
          col: _0x39c571,
        },
        originTargetInfo: { subUnitId: this.subUnitId, unitId: this.unitId },
      });
    }
    async setDateGroupType(_0x4cdb9f, _0x67c6b5) {
      let _0x3a9de3 = this._injector,
        _0x3afaaa = this.unitId,
        _0x5c86f4 = this.subUnitId,
        _0x2317cb = this.pivotTableId,
        _0x2e76a5 = _0x3a9de3.get(n.ICommandService),
        _0x542718 = {
          unitId: _0x3afaaa,
          subUnitId: _0x5c86f4,
          pivotTableId: _0x2317cb,
          tableFieldId: _0x4cdb9f,
          dateType: _0x67c6b5,
        };
      return _0x2e76a5.executeCommand(
        t.SetPivotDateGroupCommand["id"],
        _0x542718,
      );
    }
    async setCellCollapse(_0x594365, _0x1ecc7e, _0x3c5167) {
      return this._isCellInCurrentPivotTable(_0x594365, _0x1ecc7e)
        ? this._injector["get"](n.ICommandService).executeCommand(
            t.SetPivotCollapseCommand["id"],
            {
              unitId: this.unitId,
              subUnitId: this.subUnitId,
              row: _0x594365,
              col: _0x1ecc7e,
              collapse: _0x3c5167,
            },
          )
        : false;
    }
    async drillDown(_0x58a28b, _0x5906ce) {
      return this._isCellInCurrentPivotTable(_0x58a28b, _0x5906ce)
        ? this._injector["get"](n.ICommandService).executeCommand(
            t.PivotDrillDownCommand["id"],
            { row: _0x58a28b, col: _0x5906ce },
          )
        : false;
    }
    _getPivotPanelTableFieldInfo(_0x19af09) {
      let _0xf88074 = this.getConfig(),
        _0x3709ba =
          (_0xf88074 == null
            ? undefined
            : _0xf88074.fieldsConfig["dimension"][_0x19af09]) ||
          (_0xf88074 == null
            ? undefined
            : _0xf88074.fieldsConfig["measure"][_0x19af09]);
      if (!_0x3709ba) return;
      let _0x2ff680 = {
        tableFieldId: _0x19af09,
        displayName: _0x3709ba.displayName,
        dataFieldId: _0x3709ba.dataFieldId,
        format: _0x3709ba.format,
      };
      return (
        "subtotal" in _0x3709ba &&
          ((_0x2ff680.subTotalType = _0x3709ba.subtotal),
          (_0x2ff680.showDataAs = { ..._0x3709ba.showDataAs })),
        _0x2ff680
      );
    }
    _getPivotPanelSourceFieldInfo(_0x160846) {
      var _0x319146;
      let _0x336907 = this._injector["get"](
          t.SheetsPivotTableConfigModel,
        ).getCollection(this.unitId, this.pivotTableId),
        _0x34c12c =
          (_0x336907 == null ? undefined : _0x336907.fields[_0x160846]) ||
          (_0x336907 == null
            ? undefined
            : _0x336907.customFields["find"](
                (_0x5d308f) => _0x5d308f.id === _0x160846,
              ));
      if (_0x34c12c)
        return {
          id: _0x34c12c.id,
          dataFieldId: _0x34c12c.id,
          name:
            (_0x336907 == null ||
            (_0x319146 = _0x336907.displayNameRecord) == null
              ? undefined
              : _0x319146[_0x34c12c.id]) ?? _0x34c12c.name,
          type: _0x34c12c.fieldDataType,
          checked: this._isDataFieldUsed(_0x34c12c.id),
          pivotTableId: this.pivotTableId,
        };
    }
    _isDataFieldUsed(_0x1fd51d) {
      let _0x318b87 = this.getConfig();
      return _0x318b87
        ? Object.values(_0x318b87.fieldsConfig["dimension"]).some(
            (_0xb6744d) => _0xb6744d.dataFieldId === _0x1fd51d,
          ) ||
            Object.values(_0x318b87.fieldsConfig["measure"]).some(
              (_0x194635) => _0x194635.dataFieldId === _0x1fd51d,
            )
        : false;
    }
    _isCellInCurrentPivotTable(_0x250334, _0x3e59e9) {
      return (
        this._injector["get"](
          t.SheetsPivotTableAdaptorModel,
        ).getPivotTableIdByCell(
          this.unitId,
          this.subUnitId,
          _0x250334,
          _0x3e59e9,
        ) === this.pivotTableId
      );
    }
  },
  p = class extends r.FWorkbook {
    async addPivotTable(_0x39b241, _0x1f54b1, _0x19ed78) {
      let _0x148b74 = this._injector,
        _0x2fb37a = _0x148b74.get(n.ICommandService),
        _0x58a941 = (0, e.generateHexNumber)(8),
        _0x5028ef = {
          positionType: _0x1f54b1,
          pivotTableId: _0x58a941,
          pivotTableConfig: {
            targetCellInfo: _0x19ed78,
            sourceRangeInfo: _0x39b241,
            isEmpty: true,
          },
        };
      if (
        await _0x2fb37a.executeCommand(t.AddPivotTableCommand["id"], _0x5028ef)
      ) {
        let _0x215702 = _0x148b74.get(t.SheetsPivotTableConfigModel);
        if (
          await this._waitForPivotTableReady(
            _0x215702,
            _0x19ed78.unitId,
            _0x19ed78.subUnitId,
            _0x58a941,
          )
        )
          return new f(
            _0x19ed78.unitId,
            _0x19ed78.subUnitId,
            _0x58a941,
            _0x148b74,
          );
      }
    }
    _waitForPivotTableReady(_0x3e28e6, _0x1f29a3, _0x32b401, _0x2c0501) {
      let _0x3388f8 = () =>
        !!(
          _0x3e28e6.getPivotTableConfig(_0x1f29a3, _0x32b401, _0x2c0501) &&
          _0x3e28e6.getCollection(_0x1f29a3, _0x2c0501)
        );
      return _0x3388f8()
        ? Promise.resolve(true)
        : new Promise((_0x302727) => {
            let _0x178d52 = false,
              _0xe397a7,
              _0x59d2a7 = [],
              _0x31d1ec = (_0x1ccdd6) => {
                _0x178d52 ||
                  ((_0x178d52 = true),
                  _0xe397a7 && clearTimeout(_0xe397a7),
                  _0x59d2a7.forEach((_0x50efa2) => _0x50efa2.unsubscribe()),
                  _0x302727(_0x1ccdd6));
              },
              _0x3dd2fd = () => {
                _0x3388f8() && _0x31d1ec(true);
              };
            ((_0x59d2a7 = [
              _0x3e28e6.pivotConfigChange$["subscribe"](_0x3dd2fd),
              _0x3e28e6.configVersion$["subscribe"](_0x3dd2fd),
            ]),
              (_0xe397a7 = setTimeout(() => _0x31d1ec(false), 10000)),
              _0x3dd2fd());
          });
    }
    getPivotTableByCell(_0xf9c3ba, _0x5e6314, _0x51b7c4, _0x7f3567) {
      let _0x43bdde = this._injector,
        _0x2d1407 = _0x43bdde
          .get(t.SheetsPivotTableAdaptorModel)
          .getPivotTableIdByCell(_0xf9c3ba, _0x5e6314, _0x51b7c4, _0x7f3567);
      if (_0x2d1407) return new f(_0xf9c3ba, _0x5e6314, _0x2d1407, _0x43bdde);
    }
    getPivotTableById(_0x31e0a6) {
      let _0x4b73f8 = this._injector,
        _0x62c053 = _0x4b73f8
          .get(t.SheetsPivotTableConfigModel)
          .getTargetByPivotTableId(this.getId(), _0x31e0a6);
      if (_0x62c053)
        return new f(
          _0x62c053.unitId,
          _0x62c053.subUnitId,
          _0x31e0a6,
          _0x4b73f8,
        );
    }
  };
r.FWorkbook["extend"](p);
var m = class extends r.FWorksheet {
  getPivotTableByCell(_0x1ab7b7, _0x5e7d87) {
    let _0x940085 = this._injector,
      _0x595fa6 = _0x940085.get(t.SheetsPivotTableAdaptorModel),
      _0x419b09 = this._workbook["getUnitId"](),
      _0x27ca88 = this.getSheetId(),
      _0x46f3ac = _0x595fa6.getPivotTableIdByCell(
        _0x419b09,
        _0x27ca88,
        _0x1ab7b7,
        _0x5e7d87,
      );
    if (_0x46f3ac) return new f(_0x419b09, _0x27ca88, _0x46f3ac, _0x940085);
  }
};
r.FWorksheet["extend"](m);
var h = class extends i.FEnum {
  get PivotSubtotalTypeEnum() {
    return e.PivotSubtotalTypeEnum;
  }
  get PivotFilterTypeEnum() {
    return e.PivotFilterTypeEnum;
  }
  get PivotTableFiledAreaEnum() {
    return e.PivotTableFiledAreaEnum;
  }
  get PivotTableValuePositionEnum() {
    return e.PivotTableValuePositionEnum;
  }
  get PivotDataFieldDataTypeEnum() {
    return e.PivotDataFieldDataTypeEnum;
  }
  get PivotDataFieldSortTypeEnum() {
    return e.PivotDataFieldSortTypeEnum;
  }
  get PivotDataFieldSortOperatorEnum() {
    return e.PivotDataFieldSortOperatorEnum;
  }
  get PivotFilterOperatorEnum() {
    return e.ST_PivotFilterOperatorEnum;
  }
  get PositionTypeEnum() {
    return t.PositionType;
  }
  get PivotTableChangeTypeEnum() {
    return e.PivotTableChangeTypeEnum;
  }
  get PivotDateGroupFieldDateTypeEnum() {
    return e.PivotDateGroupFieldDateTypeEnum;
  }
  get PivotShowAsTypeEnum() {
    return e.PivotShowAsTypeEnum;
  }
  get PivotShowAsBaseItemTypeEnum() {
    return e.PivotShowAsBaseItemTypeEnum;
  }
  get PivotLayoutTypeEnum() {
    return e.PivotLayoutTypeEnum;
  }
  get PivotSubtotalPositionEnum() {
    return e.PivotSubtotalPositionEnum;
  }
  get PivotCallbackEnum() {
    return e.PivotCallbackEnum;
  }
  get PivotDataFieldTypeEnum() {
    return e.PivotDataFieldTypeEnum;
  }
  get PivotDateGroupFieldDateSystemEnum() {
    return e.PivotDateGroupFieldDateSystemEnum;
  }
  get PivotCellStyleTypeEnum() {
    return e.PivotCellStyleTypeEnum;
  }
  get PivotViewCellValueTypeEnum() {
    return e.PivotViewCellValueTypeEnum;
  }
};
i.FEnum["extend"](h);
var g = class extends i.FEventName {
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
i.FEventName["extend"](g);
const _ = "YYYY-MM-DD";
function v(_0x4493e4, _0xa074f4 = n.DateSystem["Date1900"]) {
  return (0, n.excelDateTimeSerial)(new Date(_0x4493e4), _0xa074f4);
}
function y(_0x4513a4, _0x1d15bc, _0x5cb3eb, _0x77d2c7) {
  let _0x7c03f8 = [],
    _0x629eb5 = [],
    _0x200408 = [],
    { showRowGrandTotal: _0x44a411, showRowSubTotal: _0x134ed2 } = _0x77d2c7,
    {
      cornerView: _0x44f246,
      colView: _0x326304,
      rowView: _0x522e3e,
      dataView: _0x401e20,
      formatMap: _0x5210a0,
    } = _0x1d15bc,
    _0x32d74 = _0x44f246.getRowCount(),
    _0x523444 = _0x44f246.getColCount();
  for (let _0x3cecac = 0; _0x3cecac < _0x32d74; _0x3cecac++)
    for (let _0x2f4c3f = 0; _0x2f4c3f < _0x523444; _0x2f4c3f++) {
      var _0xe2204d;
      let _0xd98287 = {
        ...((_0xe2204d = _0x44f246.data) == null ||
        (_0xe2204d = _0xe2204d[_0x3cecac]) == null
          ? undefined
          : _0xe2204d[_0x2f4c3f]),
      };
      _0xd98287.v &&
        (_0x7c03f8[_0x3cecac] || (_0x7c03f8[_0x3cecac] = []),
        _0x200408[_0x3cecac] || (_0x200408[_0x3cecac] = []),
        (_0x7c03f8[_0x3cecac][_0x2f4c3f] = _0xd98287.v),
        (_0x200408[_0x3cecac][_0x2f4c3f] = _0xd98287.v));
    }
  for (let _0x2292bd = 0; _0x2292bd < _0x326304.getRowCount(); _0x2292bd++) {
    var _0x4bcf36;
    let _0x358211 =
        _0x326304 == null ||
        (_0x4bcf36 = _0x326304.headerMap) == null ||
        (_0x4bcf36 = _0x4bcf36[_0x2292bd]) == null
          ? undefined
          : _0x4bcf36.tableFieldId,
      _0x3e4edd = _0x358211 ? _0x5210a0[_0x358211] : "";
    for (let _0xb7ed8d = 0; _0xb7ed8d < _0x326304.getColCount(); _0xb7ed8d++) {
      var _0x159b25;
      let _0x4c24de = {
        ...((_0x159b25 = _0x326304.data) == null ||
        (_0x159b25 = _0x159b25[_0x2292bd]) == null
          ? undefined
          : _0x159b25[_0xb7ed8d]),
      };
      if ((_0x4c24de == null ? undefined : _0x4c24de.v) !== undefined) {
        let _0x663bdc = _0x3e4edd
          ? n.numfmt["format"](_0x3e4edd, Number(_0x4c24de.v))
          : _0x4c24de.v;
        ((_0x4c24de == null ? undefined : _0x4c24de.s) ===
        e.PivotCellStyleTypeEnum["Subtotal"]
          ? (_0x663bdc = _0x5cb3eb ? "小计 " + _0x663bdc : "Total " + _0x663bdc)
          : (_0x4c24de == null ? undefined : _0x4c24de.s) ===
              e.PivotCellStyleTypeEnum["GrandTotal"] &&
            (_0x663bdc = _0x5cb3eb
              ? "总计\x20" + _0x663bdc
              : "Grand Total " + _0x663bdc),
          (_0x4c24de == null ? undefined : _0x4c24de.t) ===
            e.PivotViewCellValueTypeEnum["blank"] &&
            (_0x663bdc = _0x5cb3eb ? "（空白）" : "(blank)"),
          (_0x4c24de == null ? undefined : _0x4c24de.t) ===
            e.PivotViewCellValueTypeEnum["other"] &&
            (_0x663bdc = _0x5cb3eb ? "（其他）" : "(other)"),
          _0x7c03f8[_0x2292bd] || (_0x7c03f8[_0x2292bd] = []),
          _0x200408[_0x2292bd] || (_0x200408[_0x2292bd] = []),
          (_0x7c03f8[_0x2292bd][_0xb7ed8d + _0x523444] = _0x663bdc),
          (_0x200408[_0x2292bd][_0xb7ed8d + _0x523444] = _0x663bdc));
      }
    }
  }
  let _0x46985e = 0,
    _0x2b8937 = 0,
    _0x329b2a = 0;
  for (let _0x5d4b0f = 0; _0x5d4b0f < _0x522e3e.getRowCount(); _0x5d4b0f++) {
    let _0xe14cee = _0x522e3e.info[_0x5d4b0f];
    if (!_0x134ed2 && _0xe14cee.isBottomTotal && _0xe14cee.level !== 0) {
      (_0x329b2a++, (_0x2b8937 = 0));
      continue;
    }
    if (!(!_0x44a411 && _0xe14cee.isBottomTotal && _0xe14cee.level === 0)) {
      for (
        let _0x136be2 = 0;
        _0x136be2 < _0x522e3e.getColCount();
        _0x136be2++
      ) {
        var _0x2681eb, _0x349be8;
        let _0x573a19 = {
            ...((_0x2681eb = _0x522e3e.data) == null ||
            (_0x2681eb = _0x2681eb[_0x5d4b0f]) == null
              ? undefined
              : _0x2681eb[_0x136be2]),
          },
          _0x47b275 =
            _0x522e3e == null ||
            (_0x349be8 = _0x522e3e.headerMap) == null ||
            (_0x349be8 = _0x349be8[_0x136be2]) == null
              ? undefined
              : _0x349be8.tableFieldId,
          _0x8d79fb = _0x47b275 ? _0x5210a0[_0x47b275] : "";
        if ((_0x573a19 == null ? undefined : _0x573a19.v) !== undefined) {
          let _0x3e750c = _0x8d79fb
            ? n.numfmt["format"](_0x8d79fb, Number(_0x573a19.v))
            : _0x573a19.v;
          ((_0x573a19 == null ? undefined : _0x573a19.s) ===
          e.PivotCellStyleTypeEnum["Subtotal"]
            ? (_0x3e750c = _0x5cb3eb
                ? "小计 " + _0x3e750c
                : "Total " + _0x3e750c)
            : (_0x573a19 == null ? undefined : _0x573a19.s) ===
                e.PivotCellStyleTypeEnum["GrandTotal"] &&
              (_0x3e750c = _0x5cb3eb
                ? "总计 " + _0x3e750c
                : "Grand Total " + _0x3e750c),
            (_0x573a19 == null ? undefined : _0x573a19.t) ===
              e.PivotViewCellValueTypeEnum["blank"] &&
              (_0x3e750c = _0x5cb3eb ? "（空白）" : "(blank)"),
            (_0x573a19 == null ? undefined : _0x573a19.t) ===
              e.PivotViewCellValueTypeEnum["other"] &&
              (_0x3e750c = _0x5cb3eb ? "（其他）" : "(other)"),
            _0x7c03f8[_0x46985e + _0x32d74] ||
              (_0x7c03f8[_0x46985e + _0x32d74] = []));
          let _0x4b70c1 = _0x629eb5[_0x329b2a];
          (_0x4b70c1 ||
            ((_0x4b70c1 = [..._0x200408]), (_0x629eb5[_0x329b2a] = _0x4b70c1)),
            _0x4b70c1[_0x2b8937 + _0x32d74] ||
              (_0x4b70c1[_0x2b8937 + _0x32d74] = []),
            (_0x4b70c1[_0x2b8937 + _0x32d74][_0x136be2] = _0x3e750c),
            (_0x7c03f8[_0x46985e + _0x32d74][_0x136be2] = _0x3e750c));
        }
      }
      (_0x46985e++,
        _0x522e3e.info[_0x5d4b0f].isBottomTotal
          ? (_0x329b2a++, (_0x2b8937 = 0))
          : _0x2b8937++);
    }
  }
  ((_0x46985e = 0), (_0x329b2a = 0), (_0x2b8937 = 0));
  for (let _0xae6e9c = 0; _0xae6e9c < _0x401e20.getRowCount(); _0xae6e9c++) {
    let _0x91b7c0 = _0x522e3e.info[_0xae6e9c];
    if (!_0x134ed2 && _0x91b7c0.isBottomTotal && _0x91b7c0.level !== 0) {
      (_0x329b2a++, (_0x2b8937 = 0));
      continue;
    }
    if (!(!_0x44a411 && _0x91b7c0.isBottomTotal && _0x91b7c0.level === 0)) {
      for (
        let _0x2e8dc1 = 0;
        _0x2e8dc1 < _0x401e20.getColCount();
        _0x2e8dc1++
      ) {
        var _0x260c38;
        let _0x4b76ba = {
          ...((_0x260c38 = _0x401e20.data) == null ||
          (_0x260c38 = _0x260c38[_0xae6e9c]) == null
            ? undefined
            : _0x260c38[_0x2e8dc1]),
        };
        if (_0x4b76ba.v) {
          let _0x1c772f = _0x522e3e.info[_0xae6e9c].valueIndex,
            _0x191dbf = _0x326304.info[_0x2e8dc1].valueIndex,
            _0x15974a = Math.max(_0x1c772f, _0x191dbf),
            _0x2336a6 = _0x4513a4.getValueFields().concat(),
            _0x46ba7a = "";
          _0x46ba7a =
            _0x15974a < 0 ? (_0x2336a6[0] ?? "") : (_0x2336a6[_0x15974a] ?? "");
          let _0xeadb3a = _0x5210a0[_0x46ba7a] ?? "";
          _0x7c03f8[_0x46985e + _0x32d74] ||
            (_0x7c03f8[_0x46985e + _0x32d74] = []);
          let _0x500ed9 = _0x629eb5[_0x329b2a];
          (_0x500ed9 ||
            ((_0x500ed9 = [..._0x200408]), (_0x629eb5[_0x329b2a] = _0x500ed9)),
            _0x500ed9[_0x2b8937 + _0x32d74] ||
              (_0x500ed9[_0x2b8937 + _0x32d74] = []));
          let _0x499643 = _0xeadb3a
            ? n.numfmt["format"](_0xeadb3a, Number(_0x4b76ba.v))
            : _0x4b76ba.v;
          ((_0x500ed9[_0x2b8937 + _0x32d74][_0x2e8dc1 + _0x523444] = _0x499643),
            (_0x7c03f8[_0x46985e + _0x32d74][_0x2e8dc1 + _0x523444] =
              _0x499643));
        }
      }
      (_0x46985e++,
        _0x522e3e.info[_0xae6e9c].isBottomTotal
          ? (_0x329b2a++, (_0x2b8937 = 0))
          : _0x2b8937++);
    }
  }
  return { dataArr: _0x7c03f8, dataArrWithSplit: _0x629eb5 };
}
var b = class {
    constructor(_0x3c736b, _0x2b4686, _0x5021b4, _0x26e973) {
      (l(this, "_pivot", undefined),
        l(this, "_sourceData", undefined),
        l(this, "_injector", undefined),
        l(this, "_isZhCN", undefined),
        l(this, "_id", undefined),
        (this._injector = _0x3c736b),
        (this._pivot = _0x2b4686),
        (this._sourceData = _0x5021b4),
        (this._id = _0x26e973));
      let _0x36b980 = this._injector["get"](n.LocaleService);
      this._isZhCN = _0x36b980.getCurrentLocale() === n.LocaleType["ZH_CN"];
    }
    _getSourceIdByName(_0x22a59c) {
      let _0x149256 = this._pivot["getDataFieldIdByDisplayName"](_0x22a59c);
      if (!_0x149256)
        throw Error(
          "[PivotTable]: The field name " +
            _0x22a59c +
            " is not found in the pivot table.",
        );
      return _0x149256;
    }
    addFieldWithName(_0x40859d, _0x49b332) {
      let _0x1a43d5 = this._getSourceIdByName(_0x40859d),
        _0x4131ef = this._pivot["addFieldWithSourceId"](_0x1a43d5, _0x49b332);
      if (!_0x4131ef)
        throw Error("[PivotTable]: add field " + _0x40859d + " failed.");
      if (_0x49b332 === e.PivotTableFiledAreaEnum["Value"]) {
        let _0x2f089c = _0x4131ef.getId(),
          _0x269539 = this._pivot["getDataFieldByTableId"](_0x2f089c);
        if (_0x269539) {
          let _0x3d1593 =
            _0x269539 == null ? undefined : _0x269539.getFieldDataType();
          this._pivot["setSubtotalType"](
            _0x2f089c,
            _0x3d1593 === e.PivotDataFieldDataTypeEnum["number"]
              ? e.PivotSubtotalTypeEnum["sum"]
              : e.PivotSubtotalTypeEnum["count"],
          );
        }
        let _0x47d5d5 = this._pivot["getValueIndex"](),
          _0x5875ff = this._pivot["getValuePosition"](),
          _0x1cc249 = this._pivot["getFieldCountByArea"](
            e.PivotTableFiledAreaEnum["Value"],
          );
        if (_0x47d5d5 === -1 && _0x1cc249 > 1) {
          let _0x5e80de =
              _0x5875ff === e.PivotTableValuePositionEnum["None"]
                ? e.PivotTableValuePositionEnum["Column"]
                : _0x5875ff,
            _0x5ca381 =
              _0x5e80de === e.PivotTableValuePositionEnum["Row"]
                ? e.PivotTableFiledAreaEnum["Row"]
                : e.PivotTableFiledAreaEnum["Column"];
          this._pivot["updateValuePosition"](
            _0x5e80de,
            this._pivot["getFieldCountByArea"](_0x5ca381),
          );
        }
      } else {
        if (
          _0x49b332 === e.PivotTableFiledAreaEnum["Row"] ||
          _0x49b332 === e.PivotTableFiledAreaEnum["Column"]
        ) {
          let _0x201c67 = _0x4131ef.getId(),
            _0x3d9b10 = this._pivot["getDataFieldByTableId"](_0x201c67);
          if (
            _0x3d9b10 &&
            (_0x3d9b10 == null ? undefined : _0x3d9b10.getFieldDataType()) ===
              e.PivotDataFieldDataTypeEnum["date"]
          ) {
            let _0x37dfda = _0x3d9b10.getformat();
            _0x37dfda && this._pivot["setFieldFormat"](_0x201c67, _0x37dfda);
          }
        }
      }
      return _0x4131ef;
    }
    addFilterFieldWithName(_0x2795c8, _0x590af6) {
      let _0x298668 = this._getSourceIdByName(_0x2795c8),
        _0x25eb9e = this._pivot["addFieldWithSourceId"](
          _0x298668,
          e.PivotTableFiledAreaEnum["Filter"],
        );
      return (_0x25eb9e.setFilterInfo(_0x590af6), _0x25eb9e);
    }
    addValueFieldWithName(_0x539aef, _0x40148a) {
      let _0x541c2b = this.addFieldWithName(
        _0x539aef,
        e.PivotTableFiledAreaEnum["Value"],
      );
      return (
        _0x40148a != null &&
          _0x40148a.subtotal &&
          _0x541c2b.setSubtotal(
            _0x40148a == null ? undefined : _0x40148a.subtotal,
          ),
        _0x541c2b
      );
    }
    removeFieldWithName(_0x3ec8d8) {
      let _0x5e2bf3 = this._getSourceIdByName(_0x3ec8d8);
      this._pivot["getTableFieldsByDataFieldId"](_0x5e2bf3).forEach(
        (_0x22182b) => {
          let _0x578036 = _0x22182b.getId();
          this._pivot["removeField"](_0x578036);
        },
      );
    }
    getResultByCalculate(_0x63703 = {}) {
      let _0x4a2f39 = this._pivot["query"](),
        { dataArr: _0x5e1c8b, dataArrWithSplit: _0x2c5ea2 } = y(
          this._pivot,
          _0x4a2f39,
          this._isZhCN,
          _0x63703,
        );
      return { dataArr: _0x5e1c8b, dataArrWithSplit: _0x2c5ea2 };
    }
    getNameWithColumnIndex(_0x520d0f) {
      return this._pivot["getFieldDisplayNames"]()[_0x520d0f];
    }
    reset() {
      this._pivot["reset"]();
    }
    resetDimension(_0x2c9cc9) {
      this._pivot["reset"](_0x2c9cc9);
    }
    getFieldDataTypeByColumnIndex(_0x274fae) {
      let _0x30411d = this._pivot["dataFieldsCollection"],
        _0x5cd03e = _0x30411d.getFieldIds()[_0x274fae];
      if (_0x5cd03e)
        return _0x30411d.getFieldById(_0x5cd03e).getFieldDataType();
    }
    getFieldDataTypeByFieldName(_0x269f44) {
      let _0x593ab7 = this._getSourceIdByName(_0x269f44),
        _0x452900 = this._pivot["dataFieldsCollection"].getFieldById(_0x593ab7);
      return _0x452900 == null ? undefined : _0x452900.getFieldDataType();
    }
    getDimensionInfo() {
      let _0xf39406 = {};
      return (
        [
          [e.PivotTableFiledAreaEnum["Row"], "row"],
          [e.PivotTableFiledAreaEnum["Column"], "column"],
          [e.PivotTableFiledAreaEnum["Filter"], "filter"],
          [e.PivotTableFiledAreaEnum["Value"], "value"],
        ].forEach((_0x3bf5ac) => {
          let [_0x2c156c, _0x3b6cb3] = _0x3bf5ac;
          this._pivot["iterateFieldByArea"](_0x2c156c, (_0x514ce2) => {
            (_0xf39406[_0x3b6cb3] || (_0xf39406[_0x3b6cb3] = []),
              _0xf39406[_0x3b6cb3].push(_0x514ce2.getSourceName()));
          });
        }),
        Object.keys(_0xf39406).length > 0 ? _0xf39406 : undefined
      );
    }
    getPivotSourceData() {
      return this._sourceData;
    }
    getLayout() {
      return this._pivot["getLayout"]();
    }
    setLayout(_0x58548e) {
      this._pivot["setLayout"](_0x58548e);
    }
    setOptions(_0x320158) {
      this._pivot["setOptions"](_0x320158);
    }
    remove() {
      this._pivot["dispose"]();
    }
  },
  x = class extends e.DataFieldManager {
    getRangeData(_0x50e1e3) {
      if (Array.isArray(_0x50e1e3) && _0x50e1e3.length > 0) {
        let _0x4a18c2 = [],
          _0x45fbdf = _0x50e1e3[0],
          _0x51715c = {},
          _0x488d5f = _0x50e1e3[1];
        for (let _0xca48f = 0; _0xca48f < _0x488d5f.length; _0xca48f++) {
          let _0xf60bcc = _0x488d5f[_0xca48f];
          if (typeof _0xf60bcc == "object" && _0xf60bcc instanceof Date)
            _0x51715c[_0xca48f] = _;
          else {
            if (typeof _0xf60bcc == "string") {
              let _0x3e80c8 = new Date(_0xf60bcc);
              Number.isNaN(_0x3e80c8.getTime()) || (_0x51715c[_0xca48f] = _);
            }
          }
        }
        for (let _0x1a9381 = 1; _0x1a9381 < _0x50e1e3.length; _0x1a9381++) {
          let _0x44eecd = _0x50e1e3[_0x1a9381],
            _0x43f85b = [];
          for (let _0x17b116 = 0; _0x17b116 < _0x44eecd.length; _0x17b116++)
            if (_0x51715c[_0x17b116]) {
              let _0x57eb12 = _0x44eecd[_0x17b116],
                _0xb83095 = {
                  v: v(
                    (typeof _0x57eb12 == "object" && _0x57eb12 instanceof Date
                      ? _0x57eb12
                      : new Date(_0x57eb12)
                    ).getTime(),
                  ),
                  f: _0x51715c[_0x17b116],
                };
              _0x43f85b.push(_0xb83095);
            } else _0x43f85b.push(_0x44eecd[_0x17b116]);
          _0x4a18c2.push(_0x43f85b);
        }
        return { header: _0x45fbdf, data: _0x4a18c2 };
      } else throw Error("[DataFieldManager]: Data is not a valid array");
    }
  },
  S = class extends i.FUniver {
    _initialize(_0x33ae46) {
      let _0x5d2da6 = _0x33ae46.get(n.ICommandService);
      (this.disposeWithMe(
        this.registerEventHandler(this.Event["BeforePivotTableAdd"], () =>
          _0x5d2da6.beforeCommandExecuted((_0x3b9176) => {
            switch (_0x3b9176.id) {
              case t.MovePivotTableCommand["id"]: {
                let _0x3da938 = _0x3b9176.params;
                this._fireBeforeMovePivotTableEvent(_0x3da938);
                break;
              }
            }
          }),
        ),
      ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["BeforePivotTableMove"], () =>
            _0x5d2da6.beforeCommandExecuted((_0x590a46) => {
              switch (_0x590a46.id) {
                case t.AddPivotTableWithConfigCommand["id"]:
                case t.AddPivotTableCommand["id"]: {
                  let _0x16df43 = _0x590a46.params;
                  this._fireBeforeAddPivotTableEvent(_0x16df43);
                  break;
                }
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableAdded"], () =>
            _0x5d2da6.onCommandExecuted((_0x463327) => {
              if (
                _0x463327.id === t.AddPivotTableWithConfigCommand["id"] ||
                _0x463327.id === t.AddPivotTableCommand["id"]
              ) {
                let _0x4442fb = _0x463327.params;
                this._fireAddPivotTableEvent(_0x4442fb);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableMoved"], () =>
            _0x5d2da6.onCommandExecuted((_0x15d3c8) => {
              if (_0x15d3c8.id === t.MovePivotTableCommand["id"]) {
                let _0x14a2cf = _0x15d3c8.params;
                this._fireMovedPivotTableEvent(_0x14a2cf);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableRemoved"], () =>
            _0x5d2da6.onCommandExecuted((_0x2f0381) => {
              if (_0x2f0381.id === t.RemovePivotTableMutation["id"]) {
                let _0x46edf4 = _0x2f0381.params;
                this._firePivotTableRemovedEvent(_0x46edf4);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableFieldAdded"], () =>
            _0x5d2da6.onCommandExecuted((_0x571e55) => {
              if (_0x571e55.id === t.AddPivotFieldCommand["id"]) {
                let _0x3e2706 = _0x571e55.params;
                this._firePivotTableFieldAddedEvent(_0x3e2706);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableFieldRemoved"], () =>
            _0x5d2da6.onCommandExecuted((_0x59d7fa) => {
              if (_0x59d7fa.id === t.RemovePivotFieldCommand["id"]) {
                let _0x34bf8a = _0x59d7fa.params;
                this._firePivotTableFieldRemovedEvent(_0x34bf8a);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(this.Event["PivotTableFieldMoved"], () =>
            _0x5d2da6.onCommandExecuted((_0xdb7309) => {
              if (_0xdb7309.id === t.MovePivotFieldCommand["id"]) {
                let _0x428770 = _0xdb7309.params;
                this._firePivotTableFieldMovedEvent(_0x428770);
              }
            }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableFieldCollapseChanged"],
            () =>
              _0x5d2da6.onCommandExecuted((_0x4f5b11) => {
                if (_0x4f5b11.id === t.SetPivotCollapseCommand["id"]) {
                  let _0x13304c = _0x4f5b11.params;
                  this._firePivotTableFieldCollapsedEvent(_0x13304c);
                }
              }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableFieldFilterChanged"],
            () =>
              _0x5d2da6.onCommandExecuted((_0x424846) => {
                if (_0x424846.id === t.SetPivotFilterCommand["id"]) {
                  let _0x27dbf0 = _0x424846.params;
                  this._firePivotTableFieldFilterChangedEvent(_0x27dbf0);
                }
              }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableFieldSortChanged"],
            () =>
              _0x5d2da6.onCommandExecuted((_0xfa198e) => {
                if (_0xfa198e.id === t.SetPivotSortCommand["id"]) {
                  let _0x5d325d = _0xfa198e.params;
                  this._firePivotTableFieldSortChangedEvent(_0x5d325d);
                }
              }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableFieldSettingChanged"],
            () =>
              _0x5d2da6.onCommandExecuted((_0x3f8c87) => {
                if (_0x3f8c87.id === t.UpdatePivotFieldSettingCommand["id"]) {
                  let _0x42294c = _0x3f8c87.params;
                  this._firePivotTableFieldSettingChangedEvent(_0x42294c);
                }
              }),
          ),
        ),
        this.disposeWithMe(
          this.registerEventHandler(
            this.Event["PivotTableValuePositionChanged"],
            () =>
              _0x5d2da6.onCommandExecuted((_0x5d8e99) => {
                if (_0x5d8e99.id === t.UpdatePivotValuePositionCommand["id"]) {
                  let _0x10d8b0 = _0x5d8e99.params;
                  this._firePivotTableValuePositionChangedEvent(_0x10d8b0);
                }
              }),
          ),
        ));
      let _0x602082 = _0x33ae46.get(n.LifecycleService),
        _0x3cdaca = new n["DisposableCollection"]();
      this.disposeWithMe(
        _0x602082.lifecycle$["subscribe"]((_0x1ebd24) => {
          if (_0x1ebd24 === n.LifecycleStages["Ready"]) {
            if (!_0x33ae46.has(t.SheetsPivotTableAdaptorModel)) return;
            let _0x33b407 = _0x33ae46.get(t.SheetsPivotTableAdaptorModel);
            (_0x3cdaca.dispose(),
              _0x3cdaca.add(
                this.registerEventHandler(
                  this.Event["PivotTableRendered"],
                  () =>
                    _0x33b407.viewUpdate$["pipe"](
                      (0, a.auditTime)(50),
                    ).subscribe((_0x568c2d) => {
                      this._fireRenderPivotTableEvent(_0x568c2d);
                    }),
                ),
              ),
              this.disposeWithMe(_0x3cdaca));
          }
        }),
      );
    }
    _firePivotTableFieldAddedEvent(_0xcde635) {
      if (_0xcde635) {
        let {
          unitId: _0x53fc91,
          subUnitId: _0x5f2a77,
          pivotTableId: _0x3dc54b,
          dataFieldId: _0x1ad433,
          fieldArea: _0x2ef434,
          index: _0x338433,
        } = _0xcde635;
        this.fireEvent(this.Event["PivotTableFieldAdded"], {
          unitId: _0x53fc91,
          subUnitId: _0x5f2a77,
          pivotTableId: _0x3dc54b,
          dataFieldId: _0x1ad433,
          fieldArea: _0x2ef434,
          index: _0x338433,
        });
      }
    }
    _firePivotTableFieldRemovedEvent(_0x549dac) {
      if (_0x549dac) {
        let {
          unitId: _0x2493f8,
          subUnitId: _0x2b6683,
          pivotTableId: _0xcd92f8,
          fieldIds: _0x568d8d,
        } = _0x549dac;
        this.fireEvent(this.Event["PivotTableFieldRemoved"], {
          unitId: _0x2493f8,
          subUnitId: _0x2b6683,
          pivotTableId: _0xcd92f8,
          fieldIds: _0x568d8d.concat(),
        });
      }
    }
    _firePivotTableFieldMovedEvent(_0x44f975) {
      if (_0x44f975) {
        let {
          unitId: _0x4a69a0,
          subUnitId: _0x470108,
          pivotTableId: _0x5e10fe,
          fieldId: _0x32b498,
          area: _0x39404a,
          index: _0x1a8938,
        } = _0x44f975;
        this.fireEvent(this.Event["PivotTableFieldMoved"], {
          unitId: _0x4a69a0,
          subUnitId: _0x470108,
          pivotTableId: _0x5e10fe,
          fieldId: _0x32b498,
          area: _0x39404a,
          index: _0x1a8938,
        });
      }
    }
    _firePivotTableFieldCollapsedEvent(_0x12eb87) {
      if (_0x12eb87) {
        let {
          unitId: _0x5e4e45,
          subUnitId: _0xea0443,
          row: _0x584469,
          col: _0x5d3035,
          collapse: _0x2c0926,
        } = _0x12eb87;
        this.fireEvent(this.Event["PivotTableFieldCollapseChanged"], {
          unitId: _0x5e4e45,
          subUnitId: _0xea0443,
          row: _0x584469,
          col: _0x5d3035,
          collapse: _0x2c0926,
        });
      }
    }
    _firePivotTableFieldFilterChangedEvent(_0x352900) {
      if (_0x352900) {
        let {
          unitId: _0x40cd34,
          subUnitId: _0x1bc317,
          pivotTableId: _0x4fd564,
          tableFieldId: _0x5a7a45,
          items: _0x56026e,
          isAll: _0x3f9ef8,
        } = _0x352900;
        this.fireEvent(this.Event["PivotTableFieldFilterChanged"], {
          unitId: _0x40cd34,
          subUnitId: _0x1bc317,
          pivotTableId: _0x4fd564,
          tableFieldId: _0x5a7a45,
          items: _0x56026e.concat(),
          isAll: _0x3f9ef8,
        });
      }
    }
    _firePivotTableFieldSortChangedEvent(_0x5f3cb5) {
      if (_0x5f3cb5) {
        let {
          unitId: _0xd9e554,
          subUnitId: _0x7c324a,
          pivotTableId: _0x5a2be2,
          tableFieldId: _0x23b62a,
          info: _0x35e0de,
        } = _0x5f3cb5;
        this.fireEvent(this.Event["PivotTableFieldSortChanged"], {
          unitId: _0xd9e554,
          subUnitId: _0x7c324a,
          pivotTableId: _0x5a2be2,
          tableFieldId: _0x23b62a,
          info: _0x35e0de ? { ..._0x35e0de } : undefined,
        });
      }
    }
    _firePivotTableFieldSettingChangedEvent(_0x58fb5d) {
      if (_0x58fb5d) {
        let {
          unitId: _0x1359a8,
          subUnitId: _0x13f522,
          tableFieldId: _0x7487b2,
          pivotTableId: _0x31efff,
          displayName: _0x5c058c,
          format: _0x27392e,
          subtotalType: _0x4959cc,
          showDataAs: _0x4932da,
          tableFieldInfo: _0x162bf2,
          dataFieldInfo: _0x2280e8,
        } = _0x58fb5d;
        this.fireEvent(this.Event["PivotTableFieldSettingChanged"], {
          unitId: _0x1359a8,
          subUnitId: _0x13f522,
          tableFieldId: _0x7487b2,
          pivotTableId: _0x31efff,
          displayName: _0x5c058c,
          format: _0x27392e,
          subtotalType: _0x4959cc,
          showDataAs: _0x4932da === undefined ? undefined : { ..._0x4932da },
          tableFieldInfo: _0x162bf2,
          dataFieldInfo: _0x2280e8,
        });
      }
    }
    _firePivotTableValuePositionChangedEvent(_0x3bb0b7) {
      if (_0x3bb0b7) {
        let {
          pivotTableId: _0x202a68,
          position: _0x20807a,
          index: _0x2f179b,
        } = _0x3bb0b7;
        this.fireEvent(this.Event["PivotTableValuePositionChanged"], {
          pivotTableId: _0x202a68,
          position: _0x20807a,
          index: _0x2f179b,
        });
      }
    }
    _fireAddPivotTableEvent(_0x5509d9) {
      if (_0x5509d9) {
        let {
            positionType: _0x2e07c0,
            pivotTableId: _0x377923,
            pivotTableConfig: _0x10a7b1,
          } = _0x5509d9,
          { targetCellInfo: _0x115e9c, sourceRangeInfo: _0x46fce7 } = _0x10a7b1,
          { unitId: _0x2f2547 } = _0x115e9c;
        this.fireEvent(this.Event["PivotTableAdded"], {
          unitId: _0x2f2547,
          positionType: _0x2e07c0,
          pivotTableId: _0x377923,
          sourceRangeInfo: {
            startRow: _0x46fce7.range["startRow"],
            endRow: _0x46fce7.range["endRow"],
            startColumn: _0x46fce7.range["startColumn"],
            endColumn: _0x46fce7.range["endColumn"],
            unitId: _0x46fce7.unitId,
            subUnitId: _0x46fce7.subUnitId,
            sheetName: _0x46fce7.sheetName,
          },
          targetCellInfo: {
            row: _0x115e9c.row,
            column: _0x115e9c.col,
            sheetName: _0x115e9c.sheetName,
            unitId: _0x115e9c.unitId,
            subUnitId: _0x115e9c.subUnitId,
          },
        });
      }
    }
    _fireBeforeAddPivotTableEvent(_0x26679f) {
      if (_0x26679f) {
        let {
            positionType: _0x49cda7,
            pivotTableId: _0x19ffbe,
            pivotTableConfig: _0x1bc717,
          } = _0x26679f,
          { targetCellInfo: _0x3329d0, sourceRangeInfo: _0x2a7888 } = _0x1bc717,
          { unitId: _0x34dc7b } = _0x3329d0,
          _0x41c150 = {
            unitId: _0x34dc7b,
            positionType: _0x49cda7,
            pivotTableId: _0x19ffbe,
            sourceRangeInfo: {
              startRow: _0x2a7888.range["startRow"],
              endRow: _0x2a7888.range["endRow"],
              startColumn: _0x2a7888.range["startColumn"],
              endColumn: _0x2a7888.range["endColumn"],
              unitId: _0x2a7888.unitId,
              subUnitId: _0x2a7888.subUnitId,
              sheetName: _0x2a7888.sheetName,
            },
            targetCellInfo: {
              row: _0x3329d0.row,
              column: _0x3329d0.col,
              sheetName: _0x3329d0.sheetName,
              unitId: _0x3329d0.unitId,
              subUnitId: _0x3329d0.subUnitId,
            },
            cancel: false,
          };
        if (
          (this.fireEvent(this.Event["BeforePivotTableAdd"], _0x41c150),
          _0x41c150.cancel)
        )
          throw Error("Before\x20add\x20pivot\x20table\x20event\x20canceled");
      }
    }
    _firePivotTableRemovedEvent(_0x2287d7) {
      if (_0x2287d7) {
        let { unitId: _0x4f72bd, pivotTableId: _0x397b3b } = _0x2287d7;
        this.fireEvent(this.Event["PivotTableRemoved"], {
          unitId: _0x4f72bd,
          pivotTableId: _0x397b3b,
        });
      }
    }
    _fireBeforeMovePivotTableEvent(_0x570092) {
      if (_0x570092) {
        let {
            originTargetInfo: _0x3d76fe,
            pivotTableId: _0x6a8d2e,
            targetCellInfo: _0x1bdff5,
          } = _0x570092,
          { unitId: _0x3d6143 } = _0x3d76fe,
          _0x2d778f = this._injector["get"](
            t.SheetsPivotTableConfigModel,
          ).getPivotTableConfig(
            _0x3d76fe.unitId,
            _0x3d76fe.subUnitId,
            _0x6a8d2e,
          );
        if (!_0x2d778f) return;
        let _0x48baee = {
          unitId: _0x3d6143,
          pivotTableId: _0x6a8d2e,
          originTargetInfo: {
            row: _0x2d778f.targetCellInfo["row"],
            column: _0x2d778f.targetCellInfo["col"],
            unitId: _0x2d778f.targetCellInfo["unitId"],
            subUnitId: _0x2d778f.targetCellInfo["subUnitId"],
          },
          targetCellInfo: {
            row: _0x1bdff5.row,
            column: _0x1bdff5.col,
            unitId: _0x1bdff5.unitId,
            subUnitId: _0x1bdff5.subUnitId,
          },
          cancel: false,
        };
        if (
          (this.fireEvent(this.Event["BeforePivotTableMove"], _0x48baee),
          _0x48baee.cancel)
        )
          throw Error("Before move pivot table event canceled");
      }
    }
    _fireMovedPivotTableEvent(_0x95ff6c) {
      if (_0x95ff6c) {
        let {
            originTargetInfo: _0x5a4b04,
            pivotTableId: _0x2e3ad3,
            targetCellInfo: _0x4b9342,
          } = _0x95ff6c,
          { unitId: _0x10f970 } = _0x5a4b04,
          _0x4cab70 = this._injector["get"](
            t.SheetsPivotTableConfigModel,
          ).getPivotTableConfig(
            _0x5a4b04.unitId,
            _0x5a4b04.subUnitId,
            _0x2e3ad3,
          );
        if (!_0x4cab70) return;
        this.fireEvent(this.Event["PivotTableMoved"], {
          unitId: _0x10f970,
          pivotTableId: _0x2e3ad3,
          originTargetInfo: {
            row: _0x4cab70.targetCellInfo["row"],
            column: _0x4cab70.targetCellInfo["col"],
            unitId: _0x4cab70.targetCellInfo["unitId"],
            subUnitId: _0x4cab70.targetCellInfo["subUnitId"],
          },
          targetCellInfo: {
            row: _0x4b9342.row,
            column: _0x4b9342.col,
            unitId: _0x4b9342.unitId,
            subUnitId: _0x4b9342.subUnitId,
          },
        });
      }
    }
    _fireRenderPivotTableEvent(_0x3576df) {
      if (_0x3576df) {
        let {
          unitId: _0x563959,
          subUnitId: _0x197011,
          pivotTableId: _0x144fa0,
          type: _0x208bc9,
          rangesCache: _0x1db163,
          isEmpty: _0x578b3f,
        } = _0x3576df;
        this.fireEvent(this.Event["PivotTableRendered"], {
          unitId: _0x563959,
          subUnitId: _0x197011,
          pivotTableId: _0x144fa0,
          changeType: _0x208bc9,
          isEmpty: !!_0x578b3f,
          rangeInfo: _0x1db163,
        });
      }
    }
    generatePivotTable(_0x3bba9c, _0x132d6f) {
      let _0x3002e1 = (_0x132d6f ? new _0x132d6f() : new x()).createCollection(
          "data",
          _0x3bba9c,
        ),
        _0x3cb733 = _0x3bba9c[0];
      _0x3002e1.getFieldIds().forEach((_0x15a476, _0x4ace43) => {
        _0x3002e1.setDisplayName(_0x15a476, _0x3cb733[_0x4ace43]);
      });
      let _0x30428b = (0, e.generateHexNumber)(8),
        _0x2109a1 = new e["PivotTable"](_0x3002e1, undefined, _0x30428b);
      return new b(this._injector, _0x2109a1, _0x3bba9c, _0x30428b);
    }
  };
i.FUniver["extend"](S);
