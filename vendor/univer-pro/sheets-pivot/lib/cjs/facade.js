let e = require("@univerjs-pro/engine-pivot"),
  t = require("@univerjs-pro/sheets-pivot"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets/facade"),
  i = require("@univerjs/core/facade"),
  a = require("rxjs");
function o(var_core_value_sigFDEE) {
  "@babel/helpers - typeof";

  return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigC4B1) {
    return typeof var_core_value_sigC4B1;
  } : function (var_core_value_sig1BD9) {
    return var_core_value_sig1BD9 && typeof Symbol == "function" && var_core_value_sig1BD9.constructor === Symbol && var_core_value_sig1BD9 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig1BD9;
  }, o(var_core_value_sigFDEE);
}
function s(var_core_value_sigA676, var_core_value_sigC27E) {
  if (o(var_core_value_sigA676) != "object" || !var_core_value_sigA676) return var_core_value_sigA676;
  var var_core_value_sigA70D = var_core_value_sigA676[Symbol.toPrimitive];
  if (var_core_value_sigA70D !== undefined) {
    var var_core_value_sigCE10 = var_core_value_sigA70D.call(var_core_value_sigA676, var_core_value_sigC27E || "default");
    if (o(var_core_value_sigCE10) != "object") return var_core_value_sigCE10;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigC27E === "string" ? String : Number)(var_core_value_sigA676);
}
function c(var_core_value_sigA386) {
  var var_core_value_sigCD82 = s(var_core_value_sigA386, "string");
  return o(var_core_value_sigCD82) == "symbol" ? var_core_value_sigCD82 : var_core_value_sigCD82 + "";
}
function l(var_core_value_sig44DD, var_core_value_sig96FA, var_core_value_sigAB68) {
  return (var_core_value_sig96FA = c(var_core_value_sig96FA)) in var_core_value_sig44DD ? Object.defineProperty(var_core_value_sig44DD, var_core_value_sig96FA, {
    value: var_core_value_sigAB68,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig44DD[var_core_value_sig96FA] = var_core_value_sigAB68, var_core_value_sig44DD;
}
const u = {
  type: e.PivotShowAsTypeEnum["normal"],
  baseFieldId: "",
  baseItem: ""
};
function d(var_core_value_sig040A) {
  return {
    ...var_core_value_sig040A,
    expected: Array.isArray(var_core_value_sig040A.expected) ? var_core_value_sig040A.expected["concat"]() : var_core_value_sig040A.expected
  };
}
var f = class {
    constructor(var_core_value_sigE43E, var_core_value_sigA937, var_core_value_sigCAD5, var_core_value_sigE503) {
      l(this, "unitId", undefined), l(this, "subUnitId", undefined), l(this, "pivotTableId", undefined), l(this, "_injector", undefined), this.unitId = var_core_value_sigE43E, this.subUnitId = var_core_value_sigA937, this.pivotTableId = var_core_value_sigCAD5, this._injector = var_core_value_sigE503;
    }
    getConfig() {
      return this._injector["get"](t.SheetsPivotTableConfigModel).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId);
    }
    getId() {
      return this.pivotTableId;
    }
    getSourceRangeInfo() {
      var var_core_value_sig48DD;
      let var_core_value_sig5E6A = (var_core_value_sig48DD = this.getConfig()) == null ? undefined : var_core_value_sig48DD.sourceRangeInfo;
      if (var_core_value_sig5E6A) return {
        ...var_core_value_sig5E6A,
        range: {
          ...var_core_value_sig5E6A.range
        }
      };
    }
    getTargetCellInfo() {
      var var_core_value_sigB7FC;
      let var_core_value_sig9CD9 = (var_core_value_sigB7FC = this.getConfig()) == null ? undefined : var_core_value_sigB7FC.targetCellInfo;
      if (var_core_value_sig9CD9) return {
        ...var_core_value_sig9CD9
      };
    }
    getOptions() {
      var var_core_value_sigFD0C;
      let var_core_value_sig849B = (var_core_value_sigFD0C = this.getConfig()) == null ? undefined : var_core_value_sigFD0C.fieldsConfig["options"];
      if (var_core_value_sig849B) return {
        ...var_core_value_sig849B
      };
    }
    getLayout() {
      var var_core_value_sig5F1A;
      let var_core_value_sigB455 = (var_core_value_sig5F1A = this.getConfig()) == null ? undefined : var_core_value_sig5F1A.fieldsConfig;
      if (var_core_value_sigB455) return var_core_value_sigB455.layout ?? e.PivotLayoutTypeEnum["tabular"];
    }
    getPivotTableMatrixInfo() {
      return this._injector["get"](t.SheetsPivotTableConfigModel).getPivotTableMatrixInfo(this.unitId, this.subUnitId, this.pivotTableId);
    }
    setFieldsConfig(var_core_value_sig5241) {
      let var_core_value_sigC6E5 = this._injector["get"](n.ICommandService),
        var_core_value_sigCEFB = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          pivotTableConfig: var_core_value_sig5241
        };
      return var_core_value_sigC6E5.executeCommand(t.SetPivotFieldsConfigCommand["id"], var_core_value_sigCEFB);
    }
    setOptions(var_core_value_sig1537) {
      let var_core_value_sigE4C6 = this._injector["get"](n.ICommandService),
        var_core_value_sig4313 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          options: var_core_value_sig1537
        };
      return var_core_value_sigE4C6.executeCommand(t.SetPivotOptionCommand["id"], var_core_value_sig4313);
    }
    setLayout(var_core_value_sigFC87) {
      let var_core_value_sig156F = this._injector["get"](n.ICommandService),
        var_core_value_sigDD51 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          layout: var_core_value_sigFC87
        };
      return var_core_value_sig156F.executeCommand(t.SetPivotLayoutCommand["id"], var_core_value_sigDD51);
    }
    setSourceRange(var_core_value_sigF057) {
      let var_core_value_sig72F6 = this._injector["get"](n.ICommandService),
        var_core_value_sig9FBA = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          token: this.pivotTableId,
          dataRangeInfo: var_core_value_sigF057
        };
      return var_core_value_sig72F6.executeCommand(t.UpdatePivotTableSourceRangeCommand["id"], var_core_value_sig9FBA);
    }
    updateSourceRange(var_core_value_sigFE01) {
      return this.setSourceRange(var_core_value_sigFE01);
    }
    reset(var_core_value_sigA2CE) {
      let var_core_value_sig1975 = this._injector["get"](n.ICommandService),
        var_core_value_sig6EA1 = {
          unitId: this.unitId,
          subUnitId: this.subUnitId,
          pivotTableId: this.pivotTableId,
          resetArea: var_core_value_sigA2CE
        };
      return var_core_value_sig1975.executeCommand(t.ResetPivotFieldsConfigCommand["id"], var_core_value_sig6EA1);
    }
    getPivotTableId() {
      return this.pivotTableId;
    }
    getFieldSetting(var_core_value_sig029F) {
      let var_core_value_sig3767 = this._injector["get"](t.SheetsPivotTableConfigModel).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId),
        var_core_value_sig670B = var_core_value_sig3767 == null ? undefined : var_core_value_sig3767.fieldsConfig;
      if (var_core_value_sig670B) return var_core_value_sig670B.dimension[var_core_value_sig029F] || var_core_value_sig670B.measure[var_core_value_sig029F];
    }
    getSourceFieldsInfo() {
      let var_core_value_sig6912 = this._injector,
        var_core_value_sigE235 = this.unitId,
        var_core_value_sig7664 = this.pivotTableId,
        var_core_value_sig2281 = var_core_value_sig6912.get(t.SheetsPivotTableConfigModel).getCollection(var_core_value_sigE235, var_core_value_sig7664);
      if (var_core_value_sig2281) {
        let var_core_value_sigA621 = var_core_value_sig2281.fieldIds,
          var_core_value_sigBBFF = var_core_value_sig2281.fields,
          var_core_value_sig8889 = var_core_value_sig2281.displayNameRecord,
          var_core_value_sig32F8 = [];
        for (let var_core_value_sig12F2 of var_core_value_sigA621) {
          let var_core_value_sig186C = var_core_value_sigBBFF[var_core_value_sig12F2];
          if (var_core_value_sig186C) {
            let var_core_value_sig1BBD = {
              id: var_core_value_sig12F2,
              name: var_core_value_sig186C.name,
              fieldDataType: var_core_value_sig186C.fieldDataType
            };
            var_core_value_sig8889 && var_core_value_sig8889[var_core_value_sig12F2] !== undefined && (var_core_value_sig1BBD.displayName = var_core_value_sig8889[var_core_value_sig12F2]), var_core_value_sig32F8.push(var_core_value_sig1BBD);
          }
        }
        return var_core_value_sig32F8;
      }
      return [];
    }
    getValueFilter(var_core_value_sig5E86) {
      var var_core_value_sig6998;
      let var_core_value_sigF639 = this._injector["get"](t.SheetsPivotTableConfigModel).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId),
        var_core_value_sigEAE5 = var_core_value_sigF639 == null ? undefined : var_core_value_sigF639.fieldsConfig["valueFilter"],
        var_core_value_sigE94C = var_core_value_sigEAE5 == null || (var_core_value_sig6998 = var_core_value_sigEAE5.find(var_core_value_sig5B67 => var_core_value_sig5B67.fieldId === var_core_value_sig5E86)) == null ? undefined : var_core_value_sig6998.filterInfo;
      return var_core_value_sigE94C ? d(var_core_value_sigE94C) : undefined;
    }
    getValueFilters() {
      let var_core_value_sig6D47 = this._injector["get"](t.SheetsPivotTableConfigModel).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId),
        var_core_value_sigCB82 = var_core_value_sig6D47 == null ? undefined : var_core_value_sig6D47.fieldsConfig["valueFilter"];
      return (var_core_value_sigCB82 == null ? undefined : var_core_value_sigCB82.map(({
        fieldId: var_core_value_sig1758,
        filterInfo: var_core_value_sig4805
      }) => ({
        fieldId: var_core_value_sig1758,
        filterInfo: d(var_core_value_sig4805)
      }))) || [];
    }
    getFieldIdsByArea(var_core_value_sigCF4E) {
      let var_core_value_sig6CAD = this._injector["get"](t.SheetsPivotTableConfigModel).getPivotTableConfig(this.unitId, this.subUnitId, this.pivotTableId),
        var_core_value_sig8CF5 = var_core_value_sig6CAD == null ? undefined : var_core_value_sig6CAD.fieldsConfig;
      if (var_core_value_sig8CF5) switch (var_core_value_sigCF4E) {
        case e.PivotTableFiledAreaEnum["Column"]:
          return var_core_value_sig8CF5.columnFields["concat"]();
        case e.PivotTableFiledAreaEnum["Row"]:
          return var_core_value_sig8CF5.rowFields["concat"]();
        case e.PivotTableFiledAreaEnum["Value"]:
          return var_core_value_sig8CF5.valueFields["concat"]();
        case e.PivotTableFiledAreaEnum["Filter"]:
          return var_core_value_sig8CF5.filterFields["concat"]();
        case e.PivotTableFiledAreaEnum["Hidden"]:
          return var_core_value_sig8CF5.hiddenFields["concat"]();
      }
      return [];
    }
    getPivotTableRangeInfo() {
      var var_core_value_sigDDD7;
      let var_core_value_sigB2CE = (var_core_value_sigDDD7 = this._injector["get"](t.SheetsPivotTableConfigModel).getPivotTableRangeInfo(this.unitId, this.subUnitId, this.pivotTableId)) == null ? undefined : var_core_value_sigDDD7.rangeInfo;
      if (var_core_value_sigB2CE) return (0, t.unionPivotViewRange)(var_core_value_sigB2CE);
    }
    async remove() {
      return this._injector["get"](n.ICommandService).executeCommand(t.RemovePivotTableCommand["id"], {
        unitId: this.unitId,
        subUnitId: this.subUnitId,
        pivotTableId: this.pivotTableId
      });
    }
    async addField(var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sig210D) {
      let var_core_value_sigB4B4 = this._injector,
        var_core_value_sigD407 = this.unitId,
        var_core_value_sig63F3 = this.subUnitId,
        var_core_value_sig6A71 = this.pivotTableId,
        var_core_value_sig3BF6 = var_core_value_sigB4B4.get(n.ICommandService),
        var_core_value_sig38CE = var_core_value_sigB4B4.get(t.SheetsPivotTableConfigModel),
        var_core_value_sig62B7 = var_core_value_sig38CE.getPivotTableConfig(var_core_value_sigD407, var_core_value_sig63F3, var_core_value_sig6A71),
        var_core_value_sig37A8 = var_core_value_sig38CE.getCollection(var_core_value_sigD407, var_core_value_sig6A71);
      if (!var_core_value_sig62B7 || !var_core_value_sig37A8) return false;
      let var_core_value_sigA90D = var_core_value_sig443C;
      typeof var_core_value_sigA90D == "number" && (var_core_value_sigA90D = var_core_value_sig38CE.getCollection(var_core_value_sigD407, var_core_value_sig6A71).fieldIds[var_core_value_sig443C]);
      let var_core_value_sig7A3C = {
        unitId: var_core_value_sigD407,
        subUnitId: var_core_value_sig63F3,
        pivotTableId: var_core_value_sig6A71,
        dataFieldId: var_core_value_sigA90D,
        fieldArea: var_core_value_sig39B1,
        index: var_core_value_sig210D
      };
      return var_core_value_sig3BF6.executeCommand(t.AddPivotFieldCommand["id"], var_core_value_sig7A3C);
    }
    async removeField(var_core_value_sig0511) {
      let var_core_value_sig1F44 = this._injector,
        var_core_value_sigCB04 = this.unitId,
        var_core_value_sig947E = this.subUnitId,
        var_core_value_sig4545 = this.pivotTableId,
        var_core_value_sigF39A = var_core_value_sig1F44.get(n.ICommandService),
        var_core_value_sigF79C = {
          unitId: var_core_value_sigCB04,
          subUnitId: var_core_value_sig947E,
          pivotTableId: var_core_value_sig4545,
          fieldIds: var_core_value_sig0511
        };
      return var_core_value_sigF39A.executeCommand(t.RemovePivotFieldCommand["id"], var_core_value_sigF79C);
    }
    async updateFieldPosition(var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sigDCF5) {
      let var_core_value_sigC786 = this._injector,
        var_core_value_sigC0D9 = this.unitId,
        var_core_value_sigF051 = this.subUnitId,
        var_core_value_sig5825 = this.pivotTableId,
        var_core_value_sig4EB7 = var_core_value_sigC786.get(n.ICommandService),
        var_core_value_sig73AF = {
          unitId: var_core_value_sigC0D9,
          subUnitId: var_core_value_sigF051,
          pivotTableId: var_core_value_sig5825,
          fieldId: var_core_value_sig2E54,
          area: var_core_value_sig7658,
          index: var_core_value_sigDCF5
        };
      return var_core_value_sig4EB7.executeCommand(t.MovePivotFieldCommand["id"], var_core_value_sig73AF);
    }
    async updateValuePosition(var_core_value_sig548A, var_core_value_sigE026) {
      let var_core_value_sig339E = this._injector,
        var_core_value_sig7550 = this.unitId,
        var_core_value_sig2983 = this.subUnitId,
        var_core_value_sigE1B0 = this.pivotTableId,
        var_core_value_sigD4FF = var_core_value_sig339E.get(n.ICommandService),
        var_core_value_sig1E5B = {
          unitId: var_core_value_sig7550,
          subUnitId: var_core_value_sig2983,
          pivotTableId: var_core_value_sigE1B0,
          position: var_core_value_sig548A,
          index: var_core_value_sigE026
        };
      return var_core_value_sigD4FF.executeCommand(t.UpdatePivotValuePositionCommand["id"], var_core_value_sig1E5B);
    }
    async setSubtotalType(var_core_value_sigB680, var_core_value_sig1F64) {
      return this.setFieldSetting(var_core_value_sigB680, {
        subtotalType: var_core_value_sig1F64
      });
    }
    async setFieldSetting(var_core_value_sigDD1C, var_core_value_sig2C39) {
      var var_core_value_sigB7D1;
      let var_core_value_sig64F0 = this._injector,
        var_core_value_sig85B1 = this.unitId,
        var_core_value_sig3141 = this.subUnitId,
        var_core_value_sig2162 = this.pivotTableId,
        var_core_value_sig2EAD = var_core_value_sig64F0.get(n.ICommandService),
        var_core_value_sig6774 = this._getPivotPanelTableFieldInfo(var_core_value_sigDD1C),
        var_core_value_sig340D = var_core_value_sig6774 ? this._getPivotPanelSourceFieldInfo(var_core_value_sig6774.dataFieldId) : undefined;
      if (!var_core_value_sig6774 || !var_core_value_sig340D || var_core_value_sig2C39.showDataAs !== undefined && !((var_core_value_sigB7D1 = this.getConfig()) != null && var_core_value_sigB7D1.fieldsConfig["measure"][var_core_value_sigDD1C])) return console.warn("[Pivot Table]: The pivot table field info is invalid"), false;
      let var_core_value_sig82D4 = {
        unitId: var_core_value_sig85B1,
        subUnitId: var_core_value_sig3141,
        pivotTableId: var_core_value_sig2162,
        tableFieldId: var_core_value_sigDD1C,
        displayName: var_core_value_sig2C39.displayName,
        format: var_core_value_sig2C39.format,
        subtotalType: var_core_value_sig2C39.subtotalType,
        showDataAs: var_core_value_sig2C39.showDataAs === undefined ? undefined : {
          ...var_core_value_sig2C39.showDataAs
        },
        tableFieldInfo: var_core_value_sig6774,
        dataFieldInfo: var_core_value_sig340D
      };
      return var_core_value_sig2EAD.executeCommand(t.UpdatePivotFieldSettingCommand["id"], var_core_value_sig82D4);
    }
    getShowDataAs(var_core_value_sigBDE4) {
      var var_core_value_sig7DF1;
      let var_core_value_sigDC86 = this.getFieldSetting(var_core_value_sigBDE4);
      if (!(!var_core_value_sigDC86 || !("subtotal" in var_core_value_sigDC86))) return ((var_core_value_sig7DF1 = var_core_value_sigDC86.showDataAs) == null ? undefined : var_core_value_sig7DF1.type) === undefined ? {
        ...u
      } : {
        ...var_core_value_sigDC86.showDataAs
      };
    }
    setShowDataAs(var_core_value_sig0B0C, var_core_value_sigA39E) {
      return this.setFieldSetting(var_core_value_sig0B0C, {
        showDataAs: var_core_value_sigA39E
      });
    }
    resetShowDataAs(var_core_value_sigBBEE) {
      return this.setShowDataAs(var_core_value_sigBBEE, {
        ...u
      });
    }
    async setLabelSort(var_core_value_sig011D, var_core_value_sig6167) {
      let var_core_value_sig65A1 = this._injector,
        var_core_value_sig7F19 = this.unitId,
        var_core_value_sig7827 = this.subUnitId,
        var_core_value_sig652C = this.pivotTableId,
        var_core_value_sig7E32 = var_core_value_sig65A1.get(n.ICommandService),
        var_core_value_sig4C07 = {
          unitId: var_core_value_sig7F19,
          subUnitId: var_core_value_sig7827,
          tableFieldId: var_core_value_sig011D,
          pivotTableId: var_core_value_sig652C,
          info: var_core_value_sig6167
        };
      return var_core_value_sig7E32.executeCommand(t.SetPivotSortCommand["id"], var_core_value_sig4C07);
    }
    async clearLabelSort(var_core_value_sig79AB) {
      return this._injector["get"](n.ICommandService).executeCommand(t.SetPivotSortCommand["id"], {
        unitId: this.unitId,
        subUnitId: this.subUnitId,
        pivotTableId: this.pivotTableId,
        tableFieldId: var_core_value_sig79AB,
        info: undefined
      });
    }
    async setLabelManualFilter(var_core_value_sig8E74, var_core_value_sig104C, var_core_value_sig841D) {
      let var_core_value_sig90CB = this._injector,
        var_core_value_sigBDF5 = this.unitId,
        var_core_value_sigACC6 = this.subUnitId,
        var_core_value_sig1614 = this.pivotTableId,
        var_core_value_sig85C3 = var_core_value_sig90CB.get(n.ICommandService),
        var_core_value_sigB996 = {
          unitId: var_core_value_sigBDF5,
          subUnitId: var_core_value_sigACC6,
          pivotTableId: var_core_value_sig1614,
          tableFieldId: var_core_value_sig8E74,
          items: var_core_value_sig104C,
          isAll: var_core_value_sig841D
        };
      return var_core_value_sig85C3.executeCommand(t.SetPivotFilterCommand["id"], var_core_value_sigB996);
    }
    async setValueFilter(var_core_value_sig4BBA, var_core_value_sig6201) {
      var var_core_value_sig5151;
      let var_core_value_sigB542 = this._injector,
        var_core_value_sigBB6C = this.unitId,
        var_core_value_sigE2BF = this.subUnitId,
        var_core_value_sigB8C7 = this.pivotTableId,
        var_core_value_sigA56E = (var_core_value_sig5151 = this.getConfig()) == null ? undefined : var_core_value_sig5151.fieldsConfig,
        var_core_value_sig1998 = !!(var_core_value_sigA56E && (var_core_value_sigA56E.rowFields["includes"](var_core_value_sig4BBA) || var_core_value_sigA56E.columnFields["includes"](var_core_value_sig4BBA)));
      if (!var_core_value_sigA56E || !var_core_value_sig1998 || var_core_value_sig6201 !== undefined && (!var_core_value_sigA56E.measure[var_core_value_sig6201.valueFieldId] || !(0, e.isValueFilterOperator)(var_core_value_sig6201.operator))) return false;
      let var_core_value_sigFF19 = var_core_value_sigB542.get(n.ICommandService),
        var_core_value_sig43B8 = {
          unitId: var_core_value_sigBB6C,
          subUnitId: var_core_value_sigE2BF,
          pivotTableId: var_core_value_sigB8C7,
          fieldId: var_core_value_sig4BBA,
          valueFilterInfo: var_core_value_sig6201 ? d({
            ...var_core_value_sig6201,
            type: e.PivotFilterTypeEnum["ValueFilter"]
          }) : undefined
        };
      return var_core_value_sigFF19.executeCommand(t.SetPivotValueFilterCommand["id"], var_core_value_sig43B8);
    }
    clearValueFilter(var_core_value_sigD98F) {
      return this.setValueFilter(var_core_value_sigD98F, undefined);
    }
    async renameField(var_core_value_sig66C0, var_core_value_sig9D15) {
      return this.setFieldSetting(var_core_value_sig66C0, {
        displayName: var_core_value_sig9D15
      });
    }
    async move(var_core_value_sigB785, var_core_value_sig130F, var_core_value_sigC0E3) {
      let var_core_value_sig52F7 = this._injector["get"](n.ICommandService),
        var_core_value_sig866F = this._injector["get"](n.IUniverInstanceService).getUnit(this.unitId),
        var_core_value_sigDE3D = var_core_value_sig866F == null ? undefined : var_core_value_sig866F.getSheetBySheetName(var_core_value_sigB785);
      if (!var_core_value_sig866F || !var_core_value_sigDE3D) throw Error("[Pivot\x20Table]:\x20Target\x20sheet\x20is\x20not\x20valid");
      return var_core_value_sig52F7.executeCommand(t.MovePivotTableCommand["id"], {
        pivotTableId: this.pivotTableId,
        targetCellInfo: {
          subUnitId: var_core_value_sigDE3D.getSheetId(),
          unitId: this.unitId,
          row: var_core_value_sig130F,
          col: var_core_value_sigC0E3
        },
        originTargetInfo: {
          subUnitId: this.subUnitId,
          unitId: this.unitId
        }
      });
    }
    async setDateGroupType(var_core_value_sigF175, var_core_value_sig6A18) {
      let var_core_value_sig4E3D = this._injector,
        var_core_value_sig49B0 = this.unitId,
        var_core_value_sig2547 = this.subUnitId,
        var_core_value_sigBCA9 = this.pivotTableId,
        var_core_value_sig4CDF = var_core_value_sig4E3D.get(n.ICommandService),
        var_core_value_sig3F79 = {
          unitId: var_core_value_sig49B0,
          subUnitId: var_core_value_sig2547,
          pivotTableId: var_core_value_sigBCA9,
          tableFieldId: var_core_value_sigF175,
          dateType: var_core_value_sig6A18
        };
      return var_core_value_sig4CDF.executeCommand(t.SetPivotDateGroupCommand["id"], var_core_value_sig3F79);
    }
    async setCellCollapse(var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B) {
      return this._isCellInCurrentPivotTable(var_core_value_sig880E, var_core_value_sigC9ED) ? this._injector["get"](n.ICommandService).executeCommand(t.SetPivotCollapseCommand["id"], {
        unitId: this.unitId,
        subUnitId: this.subUnitId,
        row: var_core_value_sig880E,
        col: var_core_value_sigC9ED,
        collapse: var_core_value_sigB57B
      }) : false;
    }
    async drillDown(var_core_value_sig780B, var_core_value_sig7D1B) {
      return this._isCellInCurrentPivotTable(var_core_value_sig780B, var_core_value_sig7D1B) ? this._injector["get"](n.ICommandService).executeCommand(t.PivotDrillDownCommand["id"], {
        row: var_core_value_sig780B,
        col: var_core_value_sig7D1B
      }) : false;
    }
    _getPivotPanelTableFieldInfo(var_core_value_sig7BE0) {
      let var_core_value_sig7D40 = this.getConfig(),
        var_core_value_sig6C7E = (var_core_value_sig7D40 == null ? undefined : var_core_value_sig7D40.fieldsConfig["dimension"][var_core_value_sig7BE0]) || (var_core_value_sig7D40 == null ? undefined : var_core_value_sig7D40.fieldsConfig["measure"][var_core_value_sig7BE0]);
      if (!var_core_value_sig6C7E) return;
      let var_core_value_sig68BE = {
        tableFieldId: var_core_value_sig7BE0,
        displayName: var_core_value_sig6C7E.displayName,
        dataFieldId: var_core_value_sig6C7E.dataFieldId,
        format: var_core_value_sig6C7E.format
      };
      return "subtotal" in var_core_value_sig6C7E && (var_core_value_sig68BE.subTotalType = var_core_value_sig6C7E.subtotal, var_core_value_sig68BE.showDataAs = {
        ...var_core_value_sig6C7E.showDataAs
      }), var_core_value_sig68BE;
    }
    _getPivotPanelSourceFieldInfo(var_core_value_sig04C6) {
      var var_core_value_sigCA05;
      let var_core_value_sig2F2B = this._injector["get"](t.SheetsPivotTableConfigModel).getCollection(this.unitId, this.pivotTableId),
        var_core_value_sig70AF = (var_core_value_sig2F2B == null ? undefined : var_core_value_sig2F2B.fields[var_core_value_sig04C6]) || (var_core_value_sig2F2B == null ? undefined : var_core_value_sig2F2B.customFields["find"](var_core_value_sigE67E => var_core_value_sigE67E.id === var_core_value_sig04C6));
      if (var_core_value_sig70AF) return {
        id: var_core_value_sig70AF.id,
        dataFieldId: var_core_value_sig70AF.id,
        name: (var_core_value_sig2F2B == null || (var_core_value_sigCA05 = var_core_value_sig2F2B.displayNameRecord) == null ? undefined : var_core_value_sigCA05[var_core_value_sig70AF.id]) ?? var_core_value_sig70AF.name,
        type: var_core_value_sig70AF.fieldDataType,
        checked: this._isDataFieldUsed(var_core_value_sig70AF.id),
        pivotTableId: this.pivotTableId
      };
    }
    _isDataFieldUsed(var_core_value_sigD04E) {
      let var_core_value_sigB99B = this.getConfig();
      return var_core_value_sigB99B ? Object.values(var_core_value_sigB99B.fieldsConfig["dimension"]).some(var_core_value_sig2902 => var_core_value_sig2902.dataFieldId === var_core_value_sigD04E) || Object.values(var_core_value_sigB99B.fieldsConfig["measure"]).some(var_core_value_sig9989 => var_core_value_sig9989.dataFieldId === var_core_value_sigD04E) : false;
    }
    _isCellInCurrentPivotTable(var_core_value_sig5A75, var_core_value_sig7BAF) {
      return this._injector["get"](t.SheetsPivotTableAdaptorModel).getPivotTableIdByCell(this.unitId, this.subUnitId, var_core_value_sig5A75, var_core_value_sig7BAF) === this.pivotTableId;
    }
  },
  p = class extends r.FWorkbook {
    async addPivotTable(var_core_value_sig8F69, var_core_value_sig6884, var_core_value_sig066E) {
      let var_core_value_sig9B0D = this._injector,
        var_core_value_sig3D2C = var_core_value_sig9B0D.get(n.ICommandService),
        var_core_value_sigC56D = (0, e.generateHexNumber)(8),
        var_core_value_sig3A17 = {
          positionType: var_core_value_sig6884,
          pivotTableId: var_core_value_sigC56D,
          pivotTableConfig: {
            targetCellInfo: var_core_value_sig066E,
            sourceRangeInfo: var_core_value_sig8F69,
            isEmpty: true
          }
        };
      if (await var_core_value_sig3D2C.executeCommand(t.AddPivotTableCommand["id"], var_core_value_sig3A17)) {
        let var_core_value_sig698E = var_core_value_sig9B0D.get(t.SheetsPivotTableConfigModel);
        if (await this._waitForPivotTableReady(var_core_value_sig698E, var_core_value_sig066E.unitId, var_core_value_sig066E.subUnitId, var_core_value_sigC56D)) return new f(var_core_value_sig066E.unitId, var_core_value_sig066E.subUnitId, var_core_value_sigC56D, var_core_value_sig9B0D);
      }
    }
    _waitForPivotTableReady(var_core_value_sig938F, var_core_value_sigD948, var_core_value_sigBE5E, var_core_value_sig0281) {
      let var_core_value_sigED71 = () => !!(var_core_value_sig938F.getPivotTableConfig(var_core_value_sigD948, var_core_value_sigBE5E, var_core_value_sig0281) && var_core_value_sig938F.getCollection(var_core_value_sigD948, var_core_value_sig0281));
      return var_core_value_sigED71() ? Promise.resolve(true) : new Promise(var_core_value_sig2809 => {
        let var_core_value_sig2DAB = false,
          var_core_value_sig877E,
          var_core_value_sig20C8 = [],
          var_core_value_sigE9A7 = var_core_value_sig2259 => {
            var_core_value_sig2DAB || (var_core_value_sig2DAB = true, var_core_value_sig877E && clearTimeout(var_core_value_sig877E), var_core_value_sig20C8.forEach(var_core_value_sigD955 => var_core_value_sigD955.unsubscribe()), var_core_value_sig2809(var_core_value_sig2259));
          },
          var_core_value_sigBECE = () => {
            var_core_value_sigED71() && var_core_value_sigE9A7(true);
          };
        var_core_value_sig20C8 = [var_core_value_sig938F.pivotConfigChange$["subscribe"](var_core_value_sigBECE), var_core_value_sig938F.configVersion$["subscribe"](var_core_value_sigBECE)], var_core_value_sig877E = setTimeout(() => var_core_value_sigE9A7(false), 10000), var_core_value_sigBECE();
      });
    }
    getPivotTableByCell(var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sigB16B, var_core_value_sig585D) {
      let var_core_value_sigE722 = this._injector,
        var_core_value_sig062A = var_core_value_sigE722.get(t.SheetsPivotTableAdaptorModel).getPivotTableIdByCell(var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sigB16B, var_core_value_sig585D);
      if (var_core_value_sig062A) return new f(var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sig062A, var_core_value_sigE722);
    }
    getPivotTableById(var_core_value_sig050A) {
      let var_core_value_sig8B32 = this._injector,
        var_core_value_sig870F = var_core_value_sig8B32.get(t.SheetsPivotTableConfigModel).getTargetByPivotTableId(this.getId(), var_core_value_sig050A);
      if (var_core_value_sig870F) return new f(var_core_value_sig870F.unitId, var_core_value_sig870F.subUnitId, var_core_value_sig050A, var_core_value_sig8B32);
    }
  };
r.FWorkbook["extend"](p);
var m = class extends r.FWorksheet {
  getPivotTableByCell(var_core_value_sigB683, var_core_value_sig26EC) {
    let var_core_value_sigEEDB = this._injector,
      var_core_value_sig36E7 = var_core_value_sigEEDB.get(t.SheetsPivotTableAdaptorModel),
      var_core_value_sig6A78 = this._workbook["getUnitId"](),
      var_core_value_sigF7EF = this.getSheetId(),
      var_core_value_sig27F9 = var_core_value_sig36E7.getPivotTableIdByCell(var_core_value_sig6A78, var_core_value_sigF7EF, var_core_value_sigB683, var_core_value_sig26EC);
    if (var_core_value_sig27F9) return new f(var_core_value_sig6A78, var_core_value_sigF7EF, var_core_value_sig27F9, var_core_value_sigEEDB);
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
function v(var_core_value_sig2AE0, var_core_value_sigC349 = n.DateSystem["Date1900"]) {
  return (0, n.excelDateTimeSerial)(new Date(var_core_value_sig2AE0), var_core_value_sigC349);
}
function y(var_core_value_sig9D96, var_core_value_sig2776, var_core_value_sig6FB2, var_core_value_sigEB43) {
  let var_core_value_sig4186 = [],
    var_core_value_sigF963 = [],
    var_core_value_sigB608 = [],
    {
      showRowGrandTotal: var_core_value_sigF866,
      showRowSubTotal: var_core_value_sig5EFB
    } = var_core_value_sigEB43,
    {
      cornerView: var_core_value_sig3A85,
      colView: var_core_value_sig2682,
      rowView: var_core_value_sig4BB5,
      dataView: var_core_value_sig6709,
      formatMap: var_core_value_sig52CA
    } = var_core_value_sig2776,
    var_core_value_sigC030 = var_core_value_sig3A85.getRowCount(),
    var_core_value_sig88F6 = var_core_value_sig3A85.getColCount();
  for (let var_core_value_sig393E = 0; var_core_value_sig393E < var_core_value_sigC030; var_core_value_sig393E++) for (let var_core_value_sig1B22 = 0; var_core_value_sig1B22 < var_core_value_sig88F6; var_core_value_sig1B22++) {
    var var_core_value_sig37DB;
    let var_core_value_sig9E2F = {
      ...((var_core_value_sig37DB = var_core_value_sig3A85.data) == null || (var_core_value_sig37DB = var_core_value_sig37DB[var_core_value_sig393E]) == null ? undefined : var_core_value_sig37DB[var_core_value_sig1B22])
    };
    var_core_value_sig9E2F.v && (var_core_value_sig4186[var_core_value_sig393E] || (var_core_value_sig4186[var_core_value_sig393E] = []), var_core_value_sigB608[var_core_value_sig393E] || (var_core_value_sigB608[var_core_value_sig393E] = []), var_core_value_sig4186[var_core_value_sig393E][var_core_value_sig1B22] = var_core_value_sig9E2F.v, var_core_value_sigB608[var_core_value_sig393E][var_core_value_sig1B22] = var_core_value_sig9E2F.v);
  }
  for (let var_core_value_sigB609 = 0; var_core_value_sigB609 < var_core_value_sig2682.getRowCount(); var_core_value_sigB609++) {
    var var_core_value_sig5542;
    let var_core_value_sig7F72 = var_core_value_sig2682 == null || (var_core_value_sig5542 = var_core_value_sig2682.headerMap) == null || (var_core_value_sig5542 = var_core_value_sig5542[var_core_value_sigB609]) == null ? undefined : var_core_value_sig5542.tableFieldId,
      var_core_value_sig7B2A = var_core_value_sig7F72 ? var_core_value_sig52CA[var_core_value_sig7F72] : "";
    for (let var_core_value_sigD082 = 0; var_core_value_sigD082 < var_core_value_sig2682.getColCount(); var_core_value_sigD082++) {
      var var_core_value_sigE0A9;
      let var_core_value_sig48BD = {
        ...((var_core_value_sigE0A9 = var_core_value_sig2682.data) == null || (var_core_value_sigE0A9 = var_core_value_sigE0A9[var_core_value_sigB609]) == null ? undefined : var_core_value_sigE0A9[var_core_value_sigD082])
      };
      if ((var_core_value_sig48BD == null ? undefined : var_core_value_sig48BD.v) !== undefined) {
        let var_core_value_sigF704 = var_core_value_sig7B2A ? n.numfmt["format"](var_core_value_sig7B2A, Number(var_core_value_sig48BD.v)) : var_core_value_sig48BD.v;
        (var_core_value_sig48BD == null ? undefined : var_core_value_sig48BD.s) === e.PivotCellStyleTypeEnum["Subtotal"] ? var_core_value_sigF704 = var_core_value_sig6FB2 ? "小计 " + var_core_value_sigF704 : "Total " + var_core_value_sigF704 : (var_core_value_sig48BD == null ? undefined : var_core_value_sig48BD.s) === e.PivotCellStyleTypeEnum["GrandTotal"] && (var_core_value_sigF704 = var_core_value_sig6FB2 ? "总计\x20" + var_core_value_sigF704 : "Grand Total " + var_core_value_sigF704), (var_core_value_sig48BD == null ? undefined : var_core_value_sig48BD.t) === e.PivotViewCellValueTypeEnum["blank"] && (var_core_value_sigF704 = var_core_value_sig6FB2 ? "（空白）" : "(blank)"), (var_core_value_sig48BD == null ? undefined : var_core_value_sig48BD.t) === e.PivotViewCellValueTypeEnum["other"] && (var_core_value_sigF704 = var_core_value_sig6FB2 ? "（其他）" : "(other)"), var_core_value_sig4186[var_core_value_sigB609] || (var_core_value_sig4186[var_core_value_sigB609] = []), var_core_value_sigB608[var_core_value_sigB609] || (var_core_value_sigB608[var_core_value_sigB609] = []), var_core_value_sig4186[var_core_value_sigB609][var_core_value_sigD082 + var_core_value_sig88F6] = var_core_value_sigF704, var_core_value_sigB608[var_core_value_sigB609][var_core_value_sigD082 + var_core_value_sig88F6] = var_core_value_sigF704;
      }
    }
  }
  let var_core_value_sigA73E = 0,
    var_core_value_sig7620 = 0,
    var_core_value_sigB9FC = 0;
  for (let var_core_value_sig390D = 0; var_core_value_sig390D < var_core_value_sig4BB5.getRowCount(); var_core_value_sig390D++) {
    let var_core_value_sig06CD = var_core_value_sig4BB5.info[var_core_value_sig390D];
    if (!var_core_value_sig5EFB && var_core_value_sig06CD.isBottomTotal && var_core_value_sig06CD.level !== 0) {
      var_core_value_sigB9FC++, var_core_value_sig7620 = 0;
      continue;
    }
    if (!(!var_core_value_sigF866 && var_core_value_sig06CD.isBottomTotal && var_core_value_sig06CD.level === 0)) {
      for (let var_core_value_sig429F = 0; var_core_value_sig429F < var_core_value_sig4BB5.getColCount(); var_core_value_sig429F++) {
        var var_core_value_sig5055, var_core_value_sig3801;
        let var_core_value_sig2BCF = {
            ...((var_core_value_sig5055 = var_core_value_sig4BB5.data) == null || (var_core_value_sig5055 = var_core_value_sig5055[var_core_value_sig390D]) == null ? undefined : var_core_value_sig5055[var_core_value_sig429F])
          },
          var_core_value_sig0D69 = var_core_value_sig4BB5 == null || (var_core_value_sig3801 = var_core_value_sig4BB5.headerMap) == null || (var_core_value_sig3801 = var_core_value_sig3801[var_core_value_sig429F]) == null ? undefined : var_core_value_sig3801.tableFieldId,
          var_core_value_sig480E = var_core_value_sig0D69 ? var_core_value_sig52CA[var_core_value_sig0D69] : "";
        if ((var_core_value_sig2BCF == null ? undefined : var_core_value_sig2BCF.v) !== undefined) {
          let var_core_value_sig7524 = var_core_value_sig480E ? n.numfmt["format"](var_core_value_sig480E, Number(var_core_value_sig2BCF.v)) : var_core_value_sig2BCF.v;
          (var_core_value_sig2BCF == null ? undefined : var_core_value_sig2BCF.s) === e.PivotCellStyleTypeEnum["Subtotal"] ? var_core_value_sig7524 = var_core_value_sig6FB2 ? "小计 " + var_core_value_sig7524 : "Total " + var_core_value_sig7524 : (var_core_value_sig2BCF == null ? undefined : var_core_value_sig2BCF.s) === e.PivotCellStyleTypeEnum["GrandTotal"] && (var_core_value_sig7524 = var_core_value_sig6FB2 ? "总计 " + var_core_value_sig7524 : "Grand Total " + var_core_value_sig7524), (var_core_value_sig2BCF == null ? undefined : var_core_value_sig2BCF.t) === e.PivotViewCellValueTypeEnum["blank"] && (var_core_value_sig7524 = var_core_value_sig6FB2 ? "（空白）" : "(blank)"), (var_core_value_sig2BCF == null ? undefined : var_core_value_sig2BCF.t) === e.PivotViewCellValueTypeEnum["other"] && (var_core_value_sig7524 = var_core_value_sig6FB2 ? "（其他）" : "(other)"), var_core_value_sig4186[var_core_value_sigA73E + var_core_value_sigC030] || (var_core_value_sig4186[var_core_value_sigA73E + var_core_value_sigC030] = []);
          let var_core_value_sig2AD8 = var_core_value_sigF963[var_core_value_sigB9FC];
          var_core_value_sig2AD8 || (var_core_value_sig2AD8 = [...var_core_value_sigB608], var_core_value_sigF963[var_core_value_sigB9FC] = var_core_value_sig2AD8), var_core_value_sig2AD8[var_core_value_sig7620 + var_core_value_sigC030] || (var_core_value_sig2AD8[var_core_value_sig7620 + var_core_value_sigC030] = []), var_core_value_sig2AD8[var_core_value_sig7620 + var_core_value_sigC030][var_core_value_sig429F] = var_core_value_sig7524, var_core_value_sig4186[var_core_value_sigA73E + var_core_value_sigC030][var_core_value_sig429F] = var_core_value_sig7524;
        }
      }
      var_core_value_sigA73E++, var_core_value_sig4BB5.info[var_core_value_sig390D].isBottomTotal ? (var_core_value_sigB9FC++, var_core_value_sig7620 = 0) : var_core_value_sig7620++;
    }
  }
  var_core_value_sigA73E = 0, var_core_value_sigB9FC = 0, var_core_value_sig7620 = 0;
  for (let var_core_value_sigC928 = 0; var_core_value_sigC928 < var_core_value_sig6709.getRowCount(); var_core_value_sigC928++) {
    let var_core_value_sigA5F1 = var_core_value_sig4BB5.info[var_core_value_sigC928];
    if (!var_core_value_sig5EFB && var_core_value_sigA5F1.isBottomTotal && var_core_value_sigA5F1.level !== 0) {
      var_core_value_sigB9FC++, var_core_value_sig7620 = 0;
      continue;
    }
    if (!(!var_core_value_sigF866 && var_core_value_sigA5F1.isBottomTotal && var_core_value_sigA5F1.level === 0)) {
      for (let var_core_value_sigF62A = 0; var_core_value_sigF62A < var_core_value_sig6709.getColCount(); var_core_value_sigF62A++) {
        var var_core_value_sig45F0;
        let var_core_value_sig26DB = {
          ...((var_core_value_sig45F0 = var_core_value_sig6709.data) == null || (var_core_value_sig45F0 = var_core_value_sig45F0[var_core_value_sigC928]) == null ? undefined : var_core_value_sig45F0[var_core_value_sigF62A])
        };
        if (var_core_value_sig26DB.v) {
          let var_core_value_sig2AD0 = var_core_value_sig4BB5.info[var_core_value_sigC928].valueIndex,
            var_core_value_sig3EEE = var_core_value_sig2682.info[var_core_value_sigF62A].valueIndex,
            var_core_value_sigBC46 = Math.max(var_core_value_sig2AD0, var_core_value_sig3EEE),
            var_core_value_sig3D7D = var_core_value_sig9D96.getValueFields().concat(),
            var_core_value_sig27E5 = "";
          var_core_value_sig27E5 = var_core_value_sigBC46 < 0 ? var_core_value_sig3D7D[0] ?? "" : var_core_value_sig3D7D[var_core_value_sigBC46] ?? "";
          let var_core_value_sig8061 = var_core_value_sig52CA[var_core_value_sig27E5] ?? "";
          var_core_value_sig4186[var_core_value_sigA73E + var_core_value_sigC030] || (var_core_value_sig4186[var_core_value_sigA73E + var_core_value_sigC030] = []);
          let var_core_value_sig4D4C = var_core_value_sigF963[var_core_value_sigB9FC];
          var_core_value_sig4D4C || (var_core_value_sig4D4C = [...var_core_value_sigB608], var_core_value_sigF963[var_core_value_sigB9FC] = var_core_value_sig4D4C), var_core_value_sig4D4C[var_core_value_sig7620 + var_core_value_sigC030] || (var_core_value_sig4D4C[var_core_value_sig7620 + var_core_value_sigC030] = []);
          let var_core_value_sigC9E0 = var_core_value_sig8061 ? n.numfmt["format"](var_core_value_sig8061, Number(var_core_value_sig26DB.v)) : var_core_value_sig26DB.v;
          var_core_value_sig4D4C[var_core_value_sig7620 + var_core_value_sigC030][var_core_value_sigF62A + var_core_value_sig88F6] = var_core_value_sigC9E0, var_core_value_sig4186[var_core_value_sigA73E + var_core_value_sigC030][var_core_value_sigF62A + var_core_value_sig88F6] = var_core_value_sigC9E0;
        }
      }
      var_core_value_sigA73E++, var_core_value_sig4BB5.info[var_core_value_sigC928].isBottomTotal ? (var_core_value_sigB9FC++, var_core_value_sig7620 = 0) : var_core_value_sig7620++;
    }
  }
  return {
    dataArr: var_core_value_sig4186,
    dataArrWithSplit: var_core_value_sigF963
  };
}
var b = class {
    constructor(var_core_value_sig39B7, var_core_value_sig18E0, var_core_value_sigE161, var_core_value_sigBDEE) {
      l(this, "_pivot", undefined), l(this, "_sourceData", undefined), l(this, "_injector", undefined), l(this, "_isZhCN", undefined), l(this, "_id", undefined), this._injector = var_core_value_sig39B7, this._pivot = var_core_value_sig18E0, this._sourceData = var_core_value_sigE161, this._id = var_core_value_sigBDEE;
      let var_core_value_sig1F40 = this._injector["get"](n.LocaleService);
      this._isZhCN = var_core_value_sig1F40.getCurrentLocale() === n.LocaleType["ZH_CN"];
    }
    _getSourceIdByName(var_core_value_sig3FC7) {
      let var_core_value_sig1E1B = this._pivot["getDataFieldIdByDisplayName"](var_core_value_sig3FC7);
      if (!var_core_value_sig1E1B) throw Error("[PivotTable]: The field name " + var_core_value_sig3FC7 + " is not found in the pivot table.");
      return var_core_value_sig1E1B;
    }
    addFieldWithName(var_core_value_sig3B10, var_core_value_sig89E6) {
      let var_core_value_sig4743 = this._getSourceIdByName(var_core_value_sig3B10),
        var_core_value_sigEB6A = this._pivot["addFieldWithSourceId"](var_core_value_sig4743, var_core_value_sig89E6);
      if (!var_core_value_sigEB6A) throw Error("[PivotTable]: add field " + var_core_value_sig3B10 + " failed.");
      if (var_core_value_sig89E6 === e.PivotTableFiledAreaEnum["Value"]) {
        let var_core_value_sig97A2 = var_core_value_sigEB6A.getId(),
          var_core_value_sig07E9 = this._pivot["getDataFieldByTableId"](var_core_value_sig97A2);
        if (var_core_value_sig07E9) {
          let var_core_value_sigDBB7 = var_core_value_sig07E9 == null ? undefined : var_core_value_sig07E9.getFieldDataType();
          this._pivot["setSubtotalType"](var_core_value_sig97A2, var_core_value_sigDBB7 === e.PivotDataFieldDataTypeEnum["number"] ? e.PivotSubtotalTypeEnum["sum"] : e.PivotSubtotalTypeEnum["count"]);
        }
        let var_core_value_sig4F59 = this._pivot["getValueIndex"](),
          var_core_value_sigF564 = this._pivot["getValuePosition"](),
          var_core_value_sig8CFA = this._pivot["getFieldCountByArea"](e.PivotTableFiledAreaEnum["Value"]);
        if (var_core_value_sig4F59 === -1 && var_core_value_sig8CFA > 1) {
          let var_core_value_sigD0A8 = var_core_value_sigF564 === e.PivotTableValuePositionEnum["None"] ? e.PivotTableValuePositionEnum["Column"] : var_core_value_sigF564,
            var_core_value_sigF4B9 = var_core_value_sigD0A8 === e.PivotTableValuePositionEnum["Row"] ? e.PivotTableFiledAreaEnum["Row"] : e.PivotTableFiledAreaEnum["Column"];
          this._pivot["updateValuePosition"](var_core_value_sigD0A8, this._pivot["getFieldCountByArea"](var_core_value_sigF4B9));
        }
      } else {
        if (var_core_value_sig89E6 === e.PivotTableFiledAreaEnum["Row"] || var_core_value_sig89E6 === e.PivotTableFiledAreaEnum["Column"]) {
          let var_core_value_sig5CEE = var_core_value_sigEB6A.getId(),
            var_core_value_sigE92A = this._pivot["getDataFieldByTableId"](var_core_value_sig5CEE);
          if (var_core_value_sigE92A && (var_core_value_sigE92A == null ? undefined : var_core_value_sigE92A.getFieldDataType()) === e.PivotDataFieldDataTypeEnum["date"]) {
            let var_core_value_sig8178 = var_core_value_sigE92A.getformat();
            var_core_value_sig8178 && this._pivot["setFieldFormat"](var_core_value_sig5CEE, var_core_value_sig8178);
          }
        }
      }
      return var_core_value_sigEB6A;
    }
    addFilterFieldWithName(var_core_value_sig3D46, var_core_value_sigCC93) {
      let var_core_value_sig5964 = this._getSourceIdByName(var_core_value_sig3D46),
        var_core_value_sig808B = this._pivot["addFieldWithSourceId"](var_core_value_sig5964, e.PivotTableFiledAreaEnum["Filter"]);
      return var_core_value_sig808B.setFilterInfo(var_core_value_sigCC93), var_core_value_sig808B;
    }
    addValueFieldWithName(var_core_value_sig2A26, var_core_value_sig1179) {
      let var_core_value_sigEA92 = this.addFieldWithName(var_core_value_sig2A26, e.PivotTableFiledAreaEnum["Value"]);
      return var_core_value_sig1179 != null && var_core_value_sig1179.subtotal && var_core_value_sigEA92.setSubtotal(var_core_value_sig1179 == null ? undefined : var_core_value_sig1179.subtotal), var_core_value_sigEA92;
    }
    removeFieldWithName(var_core_value_sig8FD9) {
      let var_core_value_sig1AE5 = this._getSourceIdByName(var_core_value_sig8FD9);
      this._pivot["getTableFieldsByDataFieldId"](var_core_value_sig1AE5).forEach(var_core_value_sig2E11 => {
        let var_core_value_sig5B69 = var_core_value_sig2E11.getId();
        this._pivot["removeField"](var_core_value_sig5B69);
      });
    }
    getResultByCalculate(var_core_value_sig7100 = {}) {
      let var_core_value_sigA19A = this._pivot["query"](),
        {
          dataArr: var_core_value_sigD3F5,
          dataArrWithSplit: var_core_value_sig3082
        } = y(this._pivot, var_core_value_sigA19A, this._isZhCN, var_core_value_sig7100);
      return {
        dataArr: var_core_value_sigD3F5,
        dataArrWithSplit: var_core_value_sig3082
      };
    }
    getNameWithColumnIndex(var_core_value_sigF5D1) {
      return this._pivot["getFieldDisplayNames"]()[var_core_value_sigF5D1];
    }
    reset() {
      this._pivot["reset"]();
    }
    resetDimension(var_core_value_sig8775) {
      this._pivot["reset"](var_core_value_sig8775);
    }
    getFieldDataTypeByColumnIndex(var_core_value_sig481B) {
      let var_core_value_sig13D7 = this._pivot["dataFieldsCollection"],
        var_core_value_sig90C0 = var_core_value_sig13D7.getFieldIds()[var_core_value_sig481B];
      if (var_core_value_sig90C0) return var_core_value_sig13D7.getFieldById(var_core_value_sig90C0).getFieldDataType();
    }
    getFieldDataTypeByFieldName(var_core_value_sigF1B2) {
      let var_core_value_sigC2BB = this._getSourceIdByName(var_core_value_sigF1B2),
        var_core_value_sigD9DB = this._pivot["dataFieldsCollection"].getFieldById(var_core_value_sigC2BB);
      return var_core_value_sigD9DB == null ? undefined : var_core_value_sigD9DB.getFieldDataType();
    }
    getDimensionInfo() {
      let var_core_value_sigA363 = {};
      return [[e.PivotTableFiledAreaEnum["Row"], "row"], [e.PivotTableFiledAreaEnum["Column"], "column"], [e.PivotTableFiledAreaEnum["Filter"], "filter"], [e.PivotTableFiledAreaEnum["Value"], "value"]].forEach(var_core_value_sigB098 => {
        let [var_core_value_sigCE71, var_core_value_sig21D8] = var_core_value_sigB098;
        this._pivot["iterateFieldByArea"](var_core_value_sigCE71, var_core_value_sig362B => {
          var_core_value_sigA363[var_core_value_sig21D8] || (var_core_value_sigA363[var_core_value_sig21D8] = []), var_core_value_sigA363[var_core_value_sig21D8].push(var_core_value_sig362B.getSourceName());
        });
      }), Object.keys(var_core_value_sigA363).length > 0 ? var_core_value_sigA363 : undefined;
    }
    getPivotSourceData() {
      return this._sourceData;
    }
    getLayout() {
      return this._pivot["getLayout"]();
    }
    setLayout(var_core_value_sigFBA5) {
      this._pivot["setLayout"](var_core_value_sigFBA5);
    }
    setOptions(var_core_value_sigAC47) {
      this._pivot["setOptions"](var_core_value_sigAC47);
    }
    remove() {
      this._pivot["dispose"]();
    }
  },
  x = class extends e.DataFieldManager {
    getRangeData(var_core_value_sigA06F) {
      if (Array.isArray(var_core_value_sigA06F) && var_core_value_sigA06F.length > 0) {
        let var_core_value_sig2B65 = [],
          var_core_value_sigD7EA = var_core_value_sigA06F[0],
          var_core_value_sigB33B = {},
          var_core_value_sig24B9 = var_core_value_sigA06F[1];
        for (let var_core_value_sig5CA5 = 0; var_core_value_sig5CA5 < var_core_value_sig24B9.length; var_core_value_sig5CA5++) {
          let var_core_value_sigE9ED = var_core_value_sig24B9[var_core_value_sig5CA5];
          if (typeof var_core_value_sigE9ED == "object" && var_core_value_sigE9ED instanceof Date) var_core_value_sigB33B[var_core_value_sig5CA5] = _;else {
            if (typeof var_core_value_sigE9ED == "string") {
              let var_core_value_sig76BA = new Date(var_core_value_sigE9ED);
              Number.isNaN(var_core_value_sig76BA.getTime()) || (var_core_value_sigB33B[var_core_value_sig5CA5] = _);
            }
          }
        }
        for (let var_core_value_sigE90F = 1; var_core_value_sigE90F < var_core_value_sigA06F.length; var_core_value_sigE90F++) {
          let var_core_value_sigB577 = var_core_value_sigA06F[var_core_value_sigE90F],
            var_core_value_sig9572 = [];
          for (let var_core_value_sigF0F9 = 0; var_core_value_sigF0F9 < var_core_value_sigB577.length; var_core_value_sigF0F9++) if (var_core_value_sigB33B[var_core_value_sigF0F9]) {
            let var_core_value_sigFBFA = var_core_value_sigB577[var_core_value_sigF0F9],
              var_core_value_sigF602 = {
                v: v((typeof var_core_value_sigFBFA == "object" && var_core_value_sigFBFA instanceof Date ? var_core_value_sigFBFA : new Date(var_core_value_sigFBFA)).getTime()),
                f: var_core_value_sigB33B[var_core_value_sigF0F9]
              };
            var_core_value_sig9572.push(var_core_value_sigF602);
          } else var_core_value_sig9572.push(var_core_value_sigB577[var_core_value_sigF0F9]);
          var_core_value_sig2B65.push(var_core_value_sig9572);
        }
        return {
          header: var_core_value_sigD7EA,
          data: var_core_value_sig2B65
        };
      } else throw Error("[DataFieldManager]: Data is not a valid array");
    }
  },
  S = class extends i.FUniver {
    _initialize(var_core_value_sig770E) {
      let var_core_value_sig4654 = var_core_value_sig770E.get(n.ICommandService);
      this.disposeWithMe(this.registerEventHandler(this.Event["BeforePivotTableAdd"], () => var_core_value_sig4654.beforeCommandExecuted(var_core_value_sigEFD4 => {
        switch (var_core_value_sigEFD4.id) {
          case t.MovePivotTableCommand["id"]:
            {
              let var_core_value_sig1A0F = var_core_value_sigEFD4.params;
              this._fireBeforeMovePivotTableEvent(var_core_value_sig1A0F);
              break;
            }
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["BeforePivotTableMove"], () => var_core_value_sig4654.beforeCommandExecuted(var_core_value_sig861B => {
        switch (var_core_value_sig861B.id) {
          case t.AddPivotTableWithConfigCommand["id"]:
          case t.AddPivotTableCommand["id"]:
            {
              let var_core_value_sigFBA4 = var_core_value_sig861B.params;
              this._fireBeforeAddPivotTableEvent(var_core_value_sigFBA4);
              break;
            }
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableAdded"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sig5237 => {
        if (var_core_value_sig5237.id === t.AddPivotTableWithConfigCommand["id"] || var_core_value_sig5237.id === t.AddPivotTableCommand["id"]) {
          let var_core_value_sigD873 = var_core_value_sig5237.params;
          this._fireAddPivotTableEvent(var_core_value_sigD873);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableMoved"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sigBB00 => {
        if (var_core_value_sigBB00.id === t.MovePivotTableCommand["id"]) {
          let var_core_value_sigA12B = var_core_value_sigBB00.params;
          this._fireMovedPivotTableEvent(var_core_value_sigA12B);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableRemoved"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sig7E54 => {
        if (var_core_value_sig7E54.id === t.RemovePivotTableMutation["id"]) {
          let var_core_value_sigF230 = var_core_value_sig7E54.params;
          this._firePivotTableRemovedEvent(var_core_value_sigF230);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableFieldAdded"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sig9A8D => {
        if (var_core_value_sig9A8D.id === t.AddPivotFieldCommand["id"]) {
          let var_core_value_sig09B8 = var_core_value_sig9A8D.params;
          this._firePivotTableFieldAddedEvent(var_core_value_sig09B8);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableFieldRemoved"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sigC259 => {
        if (var_core_value_sigC259.id === t.RemovePivotFieldCommand["id"]) {
          let var_core_value_sig6F91 = var_core_value_sigC259.params;
          this._firePivotTableFieldRemovedEvent(var_core_value_sig6F91);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableFieldMoved"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sig9C9F => {
        if (var_core_value_sig9C9F.id === t.MovePivotFieldCommand["id"]) {
          let var_core_value_sigF9C7 = var_core_value_sig9C9F.params;
          this._firePivotTableFieldMovedEvent(var_core_value_sigF9C7);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableFieldCollapseChanged"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sigFDEA => {
        if (var_core_value_sigFDEA.id === t.SetPivotCollapseCommand["id"]) {
          let var_core_value_sig8895 = var_core_value_sigFDEA.params;
          this._firePivotTableFieldCollapsedEvent(var_core_value_sig8895);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableFieldFilterChanged"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sig86D0 => {
        if (var_core_value_sig86D0.id === t.SetPivotFilterCommand["id"]) {
          let var_core_value_sigC80B = var_core_value_sig86D0.params;
          this._firePivotTableFieldFilterChangedEvent(var_core_value_sigC80B);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableFieldSortChanged"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sig4CD2 => {
        if (var_core_value_sig4CD2.id === t.SetPivotSortCommand["id"]) {
          let var_core_value_sig284F = var_core_value_sig4CD2.params;
          this._firePivotTableFieldSortChangedEvent(var_core_value_sig284F);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableFieldSettingChanged"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sig48CA => {
        if (var_core_value_sig48CA.id === t.UpdatePivotFieldSettingCommand["id"]) {
          let var_core_value_sigE154 = var_core_value_sig48CA.params;
          this._firePivotTableFieldSettingChangedEvent(var_core_value_sigE154);
        }
      }))), this.disposeWithMe(this.registerEventHandler(this.Event["PivotTableValuePositionChanged"], () => var_core_value_sig4654.onCommandExecuted(var_core_value_sig50AF => {
        if (var_core_value_sig50AF.id === t.UpdatePivotValuePositionCommand["id"]) {
          let var_core_value_sig4632 = var_core_value_sig50AF.params;
          this._firePivotTableValuePositionChangedEvent(var_core_value_sig4632);
        }
      })));
      let var_core_value_sigB26B = var_core_value_sig770E.get(n.LifecycleService),
        var_core_value_sig019B = new n["DisposableCollection"]();
      this.disposeWithMe(var_core_value_sigB26B.lifecycle$["subscribe"](var_core_value_sigE627 => {
        if (var_core_value_sigE627 === n.LifecycleStages["Ready"]) {
          if (!var_core_value_sig770E.has(t.SheetsPivotTableAdaptorModel)) return;
          let var_core_value_sigA942 = var_core_value_sig770E.get(t.SheetsPivotTableAdaptorModel);
          var_core_value_sig019B.dispose(), var_core_value_sig019B.add(this.registerEventHandler(this.Event["PivotTableRendered"], () => var_core_value_sigA942.viewUpdate$["pipe"]((0, a.auditTime)(50)).subscribe(var_core_value_sig4383 => {
            this._fireRenderPivotTableEvent(var_core_value_sig4383);
          }))), this.disposeWithMe(var_core_value_sig019B);
        }
      }));
    }
    _firePivotTableFieldAddedEvent(var_core_value_sigC6BC) {
      if (var_core_value_sigC6BC) {
        let {
          unitId: var_core_value_sigEF3E,
          subUnitId: var_core_value_sig273D,
          pivotTableId: var_core_value_sig9A0D,
          dataFieldId: var_core_value_sigA319,
          fieldArea: var_core_value_sig2D58,
          index: var_core_value_sig223F
        } = var_core_value_sigC6BC;
        this.fireEvent(this.Event["PivotTableFieldAdded"], {
          unitId: var_core_value_sigEF3E,
          subUnitId: var_core_value_sig273D,
          pivotTableId: var_core_value_sig9A0D,
          dataFieldId: var_core_value_sigA319,
          fieldArea: var_core_value_sig2D58,
          index: var_core_value_sig223F
        });
      }
    }
    _firePivotTableFieldRemovedEvent(var_core_value_sig8EC2) {
      if (var_core_value_sig8EC2) {
        let {
          unitId: var_core_value_sigD749,
          subUnitId: var_core_value_sigCFFA,
          pivotTableId: var_core_value_sig58C1,
          fieldIds: var_core_value_sig5090
        } = var_core_value_sig8EC2;
        this.fireEvent(this.Event["PivotTableFieldRemoved"], {
          unitId: var_core_value_sigD749,
          subUnitId: var_core_value_sigCFFA,
          pivotTableId: var_core_value_sig58C1,
          fieldIds: var_core_value_sig5090.concat()
        });
      }
    }
    _firePivotTableFieldMovedEvent(var_core_value_sigA8C3) {
      if (var_core_value_sigA8C3) {
        let {
          unitId: var_core_value_sigC368,
          subUnitId: var_core_value_sigAD56,
          pivotTableId: var_core_value_sigDB4A,
          fieldId: var_core_value_sig6418,
          area: var_core_value_sig1896,
          index: var_core_value_sig0285
        } = var_core_value_sigA8C3;
        this.fireEvent(this.Event["PivotTableFieldMoved"], {
          unitId: var_core_value_sigC368,
          subUnitId: var_core_value_sigAD56,
          pivotTableId: var_core_value_sigDB4A,
          fieldId: var_core_value_sig6418,
          area: var_core_value_sig1896,
          index: var_core_value_sig0285
        });
      }
    }
    _firePivotTableFieldCollapsedEvent(var_core_value_sig5276) {
      if (var_core_value_sig5276) {
        let {
          unitId: var_core_value_sig777D,
          subUnitId: var_core_value_sig3F4C,
          row: var_core_value_sigD65A,
          col: var_core_value_sig5A13,
          collapse: var_core_value_sigF593
        } = var_core_value_sig5276;
        this.fireEvent(this.Event["PivotTableFieldCollapseChanged"], {
          unitId: var_core_value_sig777D,
          subUnitId: var_core_value_sig3F4C,
          row: var_core_value_sigD65A,
          col: var_core_value_sig5A13,
          collapse: var_core_value_sigF593
        });
      }
    }
    _firePivotTableFieldFilterChangedEvent(var_core_value_sig031B) {
      if (var_core_value_sig031B) {
        let {
          unitId: var_core_value_sig3607,
          subUnitId: var_core_value_sigB512,
          pivotTableId: var_core_value_sigF2E6,
          tableFieldId: var_core_value_sig34C8,
          items: var_core_value_sigB744,
          isAll: var_core_value_sigEAE2
        } = var_core_value_sig031B;
        this.fireEvent(this.Event["PivotTableFieldFilterChanged"], {
          unitId: var_core_value_sig3607,
          subUnitId: var_core_value_sigB512,
          pivotTableId: var_core_value_sigF2E6,
          tableFieldId: var_core_value_sig34C8,
          items: var_core_value_sigB744.concat(),
          isAll: var_core_value_sigEAE2
        });
      }
    }
    _firePivotTableFieldSortChangedEvent(var_core_value_sig9DC0) {
      if (var_core_value_sig9DC0) {
        let {
          unitId: var_core_value_sigE68A,
          subUnitId: var_core_value_sig3E68,
          pivotTableId: var_core_value_sigF4C5,
          tableFieldId: var_core_value_sig5410,
          info: var_core_value_sig492F
        } = var_core_value_sig9DC0;
        this.fireEvent(this.Event["PivotTableFieldSortChanged"], {
          unitId: var_core_value_sigE68A,
          subUnitId: var_core_value_sig3E68,
          pivotTableId: var_core_value_sigF4C5,
          tableFieldId: var_core_value_sig5410,
          info: var_core_value_sig492F ? {
            ...var_core_value_sig492F
          } : undefined
        });
      }
    }
    _firePivotTableFieldSettingChangedEvent(var_core_value_sig95F0) {
      if (var_core_value_sig95F0) {
        let {
          unitId: var_core_value_sig8EA0,
          subUnitId: var_core_value_sigA6F6,
          tableFieldId: var_core_value_sigCDDA,
          pivotTableId: var_core_value_sigE243,
          displayName: var_core_value_sig74A8,
          format: var_core_value_sig21B2,
          subtotalType: var_core_value_sigDE08,
          showDataAs: var_core_value_sigACCB,
          tableFieldInfo: var_core_value_sig7F33,
          dataFieldInfo: var_core_value_sig0C53
        } = var_core_value_sig95F0;
        this.fireEvent(this.Event["PivotTableFieldSettingChanged"], {
          unitId: var_core_value_sig8EA0,
          subUnitId: var_core_value_sigA6F6,
          tableFieldId: var_core_value_sigCDDA,
          pivotTableId: var_core_value_sigE243,
          displayName: var_core_value_sig74A8,
          format: var_core_value_sig21B2,
          subtotalType: var_core_value_sigDE08,
          showDataAs: var_core_value_sigACCB === undefined ? undefined : {
            ...var_core_value_sigACCB
          },
          tableFieldInfo: var_core_value_sig7F33,
          dataFieldInfo: var_core_value_sig0C53
        });
      }
    }
    _firePivotTableValuePositionChangedEvent(var_core_value_sig9CCB) {
      if (var_core_value_sig9CCB) {
        let {
          pivotTableId: var_core_value_sigEA04,
          position: var_core_value_sig7A62,
          index: var_core_value_sig8109
        } = var_core_value_sig9CCB;
        this.fireEvent(this.Event["PivotTableValuePositionChanged"], {
          pivotTableId: var_core_value_sigEA04,
          position: var_core_value_sig7A62,
          index: var_core_value_sig8109
        });
      }
    }
    _fireAddPivotTableEvent(var_core_value_sigE718) {
      if (var_core_value_sigE718) {
        let {
            positionType: var_core_value_sig7565,
            pivotTableId: var_core_value_sigD4FB,
            pivotTableConfig: var_core_value_sig3E71
          } = var_core_value_sigE718,
          {
            targetCellInfo: var_core_value_sig01B3,
            sourceRangeInfo: var_core_value_sig7442
          } = var_core_value_sig3E71,
          {
            unitId: var_core_value_sigDF87
          } = var_core_value_sig01B3;
        this.fireEvent(this.Event["PivotTableAdded"], {
          unitId: var_core_value_sigDF87,
          positionType: var_core_value_sig7565,
          pivotTableId: var_core_value_sigD4FB,
          sourceRangeInfo: {
            startRow: var_core_value_sig7442.range["startRow"],
            endRow: var_core_value_sig7442.range["endRow"],
            startColumn: var_core_value_sig7442.range["startColumn"],
            endColumn: var_core_value_sig7442.range["endColumn"],
            unitId: var_core_value_sig7442.unitId,
            subUnitId: var_core_value_sig7442.subUnitId,
            sheetName: var_core_value_sig7442.sheetName
          },
          targetCellInfo: {
            row: var_core_value_sig01B3.row,
            column: var_core_value_sig01B3.col,
            sheetName: var_core_value_sig01B3.sheetName,
            unitId: var_core_value_sig01B3.unitId,
            subUnitId: var_core_value_sig01B3.subUnitId
          }
        });
      }
    }
    _fireBeforeAddPivotTableEvent(var_core_value_sigAEC8) {
      if (var_core_value_sigAEC8) {
        let {
            positionType: var_core_value_sig9EE0,
            pivotTableId: var_core_value_sigF0511,
            pivotTableConfig: var_core_value_sig0B45
          } = var_core_value_sigAEC8,
          {
            targetCellInfo: var_core_value_sig36F8,
            sourceRangeInfo: var_core_value_sig03E1
          } = var_core_value_sig0B45,
          {
            unitId: var_core_value_sigBB57
          } = var_core_value_sig36F8,
          var_core_value_sig7C4A = {
            unitId: var_core_value_sigBB57,
            positionType: var_core_value_sig9EE0,
            pivotTableId: var_core_value_sigF0511,
            sourceRangeInfo: {
              startRow: var_core_value_sig03E1.range["startRow"],
              endRow: var_core_value_sig03E1.range["endRow"],
              startColumn: var_core_value_sig03E1.range["startColumn"],
              endColumn: var_core_value_sig03E1.range["endColumn"],
              unitId: var_core_value_sig03E1.unitId,
              subUnitId: var_core_value_sig03E1.subUnitId,
              sheetName: var_core_value_sig03E1.sheetName
            },
            targetCellInfo: {
              row: var_core_value_sig36F8.row,
              column: var_core_value_sig36F8.col,
              sheetName: var_core_value_sig36F8.sheetName,
              unitId: var_core_value_sig36F8.unitId,
              subUnitId: var_core_value_sig36F8.subUnitId
            },
            cancel: false
          };
        if (this.fireEvent(this.Event["BeforePivotTableAdd"], var_core_value_sig7C4A), var_core_value_sig7C4A.cancel) throw Error("Before\x20add\x20pivot\x20table\x20event\x20canceled");
      }
    }
    _firePivotTableRemovedEvent(var_core_value_sigB977) {
      if (var_core_value_sigB977) {
        let {
          unitId: var_core_value_sigE799,
          pivotTableId: var_core_value_sigB601
        } = var_core_value_sigB977;
        this.fireEvent(this.Event["PivotTableRemoved"], {
          unitId: var_core_value_sigE799,
          pivotTableId: var_core_value_sigB601
        });
      }
    }
    _fireBeforeMovePivotTableEvent(var_core_value_sig2949) {
      if (var_core_value_sig2949) {
        let {
            originTargetInfo: var_core_value_sig8B71,
            pivotTableId: var_core_value_sigAEFB,
            targetCellInfo: var_core_value_sig826B
          } = var_core_value_sig2949,
          {
            unitId: var_core_value_sigCF89
          } = var_core_value_sig8B71,
          var_core_value_sig00CB = this._injector["get"](t.SheetsPivotTableConfigModel).getPivotTableConfig(var_core_value_sig8B71.unitId, var_core_value_sig8B71.subUnitId, var_core_value_sigAEFB);
        if (!var_core_value_sig00CB) return;
        let var_core_value_sig77EE = {
          unitId: var_core_value_sigCF89,
          pivotTableId: var_core_value_sigAEFB,
          originTargetInfo: {
            row: var_core_value_sig00CB.targetCellInfo["row"],
            column: var_core_value_sig00CB.targetCellInfo["col"],
            unitId: var_core_value_sig00CB.targetCellInfo["unitId"],
            subUnitId: var_core_value_sig00CB.targetCellInfo["subUnitId"]
          },
          targetCellInfo: {
            row: var_core_value_sig826B.row,
            column: var_core_value_sig826B.col,
            unitId: var_core_value_sig826B.unitId,
            subUnitId: var_core_value_sig826B.subUnitId
          },
          cancel: false
        };
        if (this.fireEvent(this.Event["BeforePivotTableMove"], var_core_value_sig77EE), var_core_value_sig77EE.cancel) throw Error("Before move pivot table event canceled");
      }
    }
    _fireMovedPivotTableEvent(var_core_value_sig308A) {
      if (var_core_value_sig308A) {
        let {
            originTargetInfo: var_core_value_sig9F76,
            pivotTableId: var_core_value_sigB008,
            targetCellInfo: var_core_value_sig8721
          } = var_core_value_sig308A,
          {
            unitId: var_core_value_sig08BA
          } = var_core_value_sig9F76,
          var_core_value_sigDBB5 = this._injector["get"](t.SheetsPivotTableConfigModel).getPivotTableConfig(var_core_value_sig9F76.unitId, var_core_value_sig9F76.subUnitId, var_core_value_sigB008);
        if (!var_core_value_sigDBB5) return;
        this.fireEvent(this.Event["PivotTableMoved"], {
          unitId: var_core_value_sig08BA,
          pivotTableId: var_core_value_sigB008,
          originTargetInfo: {
            row: var_core_value_sigDBB5.targetCellInfo["row"],
            column: var_core_value_sigDBB5.targetCellInfo["col"],
            unitId: var_core_value_sigDBB5.targetCellInfo["unitId"],
            subUnitId: var_core_value_sigDBB5.targetCellInfo["subUnitId"]
          },
          targetCellInfo: {
            row: var_core_value_sig8721.row,
            column: var_core_value_sig8721.col,
            unitId: var_core_value_sig8721.unitId,
            subUnitId: var_core_value_sig8721.subUnitId
          }
        });
      }
    }
    _fireRenderPivotTableEvent(var_core_value_sig528D) {
      if (var_core_value_sig528D) {
        let {
          unitId: var_core_value_sigCFAC,
          subUnitId: var_core_value_sig237B,
          pivotTableId: var_core_value_sigFEAB,
          type: var_core_value_sigE347,
          rangesCache: var_core_value_sig3C5B,
          isEmpty: var_core_value_sig200B
        } = var_core_value_sig528D;
        this.fireEvent(this.Event["PivotTableRendered"], {
          unitId: var_core_value_sigCFAC,
          subUnitId: var_core_value_sig237B,
          pivotTableId: var_core_value_sigFEAB,
          changeType: var_core_value_sigE347,
          isEmpty: !!var_core_value_sig200B,
          rangeInfo: var_core_value_sig3C5B
        });
      }
    }
    generatePivotTable(var_core_value_sigA309, var_core_value_sig9E20) {
      let var_core_value_sig26BB = (var_core_value_sig9E20 ? new var_core_value_sig9E20() : new x()).createCollection("data", var_core_value_sigA309),
        var_core_value_sig19B4 = var_core_value_sigA309[0];
      var_core_value_sig26BB.getFieldIds().forEach((var_core_value_sig3863, var_core_value_sigC97C) => {
        var_core_value_sig26BB.setDisplayName(var_core_value_sig3863, var_core_value_sig19B4[var_core_value_sigC97C]);
      });
      let var_core_value_sig218A = (0, e.generateHexNumber)(8),
        var_core_value_sig14CB = new e["PivotTable"](var_core_value_sig26BB, undefined, var_core_value_sig218A);
      return new b(this._injector, var_core_value_sig14CB, var_core_value_sigA309, var_core_value_sig218A);
    }
  };
i.FUniver["extend"](S);
