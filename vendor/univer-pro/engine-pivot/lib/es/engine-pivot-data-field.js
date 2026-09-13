import { F } from "./engine-pivot-excel-date-to-unix-milliseconds.js";
import { T } from "./internal-glue.js";
import { b } from "./engine-pivot-global-config.js";
import { D } from "./engine-pivot-date-value.js";
import { I } from "./engine-pivot-group-field.js";
import { M } from "./engine-pivot-generate-hex-number.js";
function ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463051) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463051 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463051 === '';
}
function xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463159) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463159.dataFieldType !== 1;
}
function Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463165 = true) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463166 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463165),
    var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242 = new Date(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463166);
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463164) {
    case "year":
      return '' + var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getFullYear();
    case "month":
      return '' + (var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getMonth() + 1);
    case 'date':
      return '' + var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getDate();
    case "month-date":
      return var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getMonth() + 1 + '_' + var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getDate();
    case "hour":
      return '' + var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getHours();
    case "minute":
      return '' + var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getMinutes();
    case "quarter":
      return '' + (Math.floor(var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getMonth() / 3) + 1);
    case "hour-minute":
      return var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getHours() + '_' + var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getMinutes();
    case "year-month":
      return var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getFullYear() + '_' + (var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getMonth() + 1);
    case 'year-quarter':
      return var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getFullYear() + '_' + (Math.floor(var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getMonth() / 3) + 1);
    case "year-month-date":
      return var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getFullYear() + '_' + (var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getMonth() + 1) + '_' + var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242.getDate();
  }
  return '';
}
var L = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622) {
      T(this, 'id', undefined), T(this, "name", undefined), T(this, "hexCode", undefined), T(this, "rangeKey", undefined), T(this, 'records', []), T(this, 'items', []), T(this, "itemTypes", []), T(this, "_fieldDataType", 1), T(this, "hasInteger", false), T(this, "hasDecimal", false), T(this, "hasDate", false), T(this, "hasBlank", false), T(this, 'hasText', false), T(this, "format", ''), T(this, "maxNumber", NaN), T(this, 'minNumber', NaN), T(this, "maxDate", -1 / 0), T(this, 'minDate', 1 / 0), T(this, "_itemIndexMap", undefined), T(this, "_itemsMap", {}), T(this, "_keyCounter", 0), this.id = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620, this.name = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, this.hexCode = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622, this._itemIndexMap = {};
    }
    getRangeKey() {
      return this.rangeKey;
    }
    getformat() {
      return this.format;
    }
    setRangeKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626) {
      this.rangeKey = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626;
    }
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    setName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628) {
      this.name = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628;
    }
    getFieldDataType() {
      return this.hasDate && !this.hasText && !this.hasDecimal && !this.hasInteger ? 4 : (this.hasDecimal || this.hasInteger) && !this.hasText && !this.hasDate ? 2 : this._fieldDataType;
    }
    getDataFieldType() {
      return 1;
    }
    getItemSharedKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630) {
      return this.hexCode + b.TUPLE_FIELD_SEPARATOR + this._itemsMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630];
    }
    getItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 = this.records[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632];
      if (D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633)) return String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633.v);
      if (ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633)) return b.BLANK_PLACEHOLDER;
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 = String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633);
      return this._itemsMap[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13] === undefined ? b.otherDataKey : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13;
    }
    getTypeByKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636) {
      return this.itemTypes[this._itemsMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636]];
    }
    getValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638) {
      return this.records[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638];
    }
    addRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641) {
      D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640) && (this.format = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.f, this._updateDateItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641));
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 = ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 && this._updateBlankItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641), typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 == "number" && this._updateNumberItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 == "string" && this._updateStringItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641), this.records["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640);
    }
    getIndexesByKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646) {
      return this._itemIndexMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646] || [];
    }
    getAllIndexMap() {
      return this._itemIndexMap;
    }
    _updateDateItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649) {
      this.hasDate ||= true, this.maxDate = Math.max(this.maxDate, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648.v), this.minDate = Math.min(this.minDate, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648.v);
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 = String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648.v);
      this._updateItemKey(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649, 4);
    }
    _updateBlankItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652) {
      this.hasBlank ||= true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653 = b.BLANK_PLACEHOLDER;
      this._itemIndexMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653] === undefined ? (this._itemIndexMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653] = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652], this.items["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653), this.itemTypes["push"](5), this._itemsMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653] = this.items['length'] - 1) : this._itemIndexMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653].push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652);
    }
    _updateStringItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657) {
      this.hasText ||= true, this._updateItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657, 1);
    }
    _updateNumberItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661) {
      this.hasDecimal ||= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660 % 1 != 0, this.hasInteger ||= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660 % 1 == 0, this.maxNumber = Math.max(this.maxNumber, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660), this.minNumber = Math.min(this.minNumber, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660);
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17 = String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660);
      this._updateItemKey(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661, 2);
    }
    _updateOtherItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664) {
      if (this._itemIndexMap[b.otherDataKey] === undefined) {
        this._itemIndexMap[b.otherDataKey] = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664];
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 = this.items["push"](b.otherDataKey);
        this._itemsMap[b.otherDataKey] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 - 1, this.itemTypes["push"](6), this._keyCounter++;
      } else this._itemIndexMap[b.otherDataKey].push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664);
    }
    _updateItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668) {
      if (this._itemIndexMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666] === undefined) {
        if (this._keyCounter >= b.maxLimitItemCount) return this._updateOtherItemKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667);
        this._itemIndexMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666] = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667];
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 = this.items["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666);
        this._itemsMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 - 1, this.itemTypes["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668), this._keyCounter++;
      } else this._itemIndexMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666].push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667);
    }
    getItemsMap() {
      return this._itemsMap;
    }
    getFieldInfo() {
      return {
        'id': this.id,
        'name': this.name,
        'records': this.records,
        'fieldDataType': this._fieldDataType,
        'maxNumber': this.maxNumber,
        'minNumber': this.minNumber,
        'maxDate': this.maxDate,
        'minDate': this.minDate,
        'format': this.format,
        'rangeKey': this.rangeKey,
        'dataFieldType': this.getDataFieldType()
      };
    }
    toJSON() {
      return {
        'id': this.id,
        'name': this.name,
        'fieldDataType': this.getFieldDataType(),
        'hexCode': this.hexCode,
        'rangeKey': this.rangeKey,
        'dataFieldType': this.getDataFieldType()
      };
    }
    fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672) {
      this.name = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672.name, this.id = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672.id, this.rangeKey = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672.rangeKey, this.hexCode = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672.hexCode;
    }
    reset() {
      this.records = [], this.items = [], this.itemTypes = [], this._itemIndexMap = {}, this.hasInteger = false, this.hasDecimal = false, this.hasDate = false, this.hasBlank = false, this.hasText = false, this.format = '', this.maxNumber = NaN, this.minNumber = NaN, this.maxDate = -1 / 0, this.minDate = 1 / 0, this._itemsMap = {}, this._keyCounter = 0;
    }
  },
  R = class extends L {
    constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674) {
      super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674), T(this, "originalFieldId", undefined);
    }
    getFieldInfo() {
      return {
        ...super.getFieldInfo(),
        'originalFieldId': this.getOriginFieldId(),
        'dataFieldType': this.getDataFieldType()
      };
    }
    toJSON() {
      return {
        ...super.toJSON(),
        'originalFieldId': this.originalFieldId
      };
    }
  },
  we = class extends R {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680) {
      super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678), T(this, "_dataIsValid", true), T(this, "_dateType", undefined), this.originalFieldId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679, this._dateType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680 ?? "year";
    }
    setDateType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686) {
      this._dateType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686;
    }
    getDateType() {
      return this._dateType;
    }
    getDateGroupValid() {
      return this._dataIsValid;
    }
    refreshGroupField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688) {
      this.reset(), this._dataIsValid = true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.records,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = b.dateSystem === "date1900";
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40++) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40];
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142 == null) continue;
        if (!D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142)) {
          this._dataIsValid = false;
          break;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.v,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 = Ce(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, this._dateType, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9);
        this.addRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40);
      }
    }
    getGroupInfo() {
      return {
        'type': 3,
        'dateType': this._dateType
      };
    }
    getDataFieldType() {
      return 3;
    }
    getOriginFieldId() {
      return this.originalFieldId;
    }
    getFieldInfo() {
      return {
        ...super.getFieldInfo(),
        'dateType': this._dateType,
        'originalFieldId': this.originalFieldId
      };
    }
    toJSON() {
      return {
        ...super.toJSON(),
        'dateType': this._dateType,
        'originalFieldId': this.originalFieldId
      };
    }
    fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692) {
      super.fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692), this._dateType = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692.dateType) ?? "year", this.originalFieldId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692.originalFieldId;
    }
  },
  z = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694) {
      T(this, "fieldIds", []), T(this, "displayNameRecord", {}), T(this, 'customFields', {}), T(this, "range", undefined), T(this, "dataRecordCount", undefined), T(this, "host", undefined), this.host = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694;
    }
    getFieldIds() {
      return this.fieldIds["concat"]();
    }
    getFieldDisplayNames() {
      return this.getFieldIds().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 => this.getDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308));
    }
    getFieldIdByDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696) {
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 of this.fieldIds) if (this.getDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309;
    }
    getGroupFieldMap() {
      let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591 = new Map();
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 of this.fieldIds) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = this.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310);
        I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.getOriginFieldId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.id);
      }
      return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591;
    }
    getGroupFieldsInfoByIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23 = [],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699 = this.getGroupFieldMap();
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = this.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) {
          if (I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146)) continue;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.id)) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.id);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23.push([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.id]);
          }
        }
      }
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A23;
    }
    hasField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702) {
      return this.fieldIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702);
    }
    hasSourceName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704) {
      return this.fieldIds["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 => this.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312).name === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704);
    }
    setRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706 && (this.range = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706
      });
    }
    addField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709) {
      this.fieldIds["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 = this.getUniqueDataFieldName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709);
      this.displayNameRecord[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710;
    }
    deleteField(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715 = this.fieldIds["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715 !== -1 && (this.fieldIds["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715, 1), delete this.displayNameRecord[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714]);
    }
    getDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719 = this.displayNameRecord[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719 === undefined ? this.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718).getName() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719;
    }
    setDisplayName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724) {
      this.displayNameRecord[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722] = this.getUniqueDataFieldName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724);
    }
    getUniqueDataFieldName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729 || this.displayNameRecord,
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set(Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86 = 1;
      if (!var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731;
      for (;;) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728 + '(' + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86 + ')', !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731;
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86++;
      }
    }
    updateAllDisplayName() {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = {};
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 of this.fieldIds) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313] = this.getUniqueDataFieldName(this.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313).getName(), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22);
      this.displayNameRecord = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22;
    }
    getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736) {
      return this.customFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736] ? this.customFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736] : this.host["dataFields"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736];
    }
    setDataRecordCount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738) {
      this.dataRecordCount = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738;
    }
    getDataRecordCount() {
      return this.dataRecordCount;
    }
    getDataFieldBySourceName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740) {
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 of this.fieldIds) if (this.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314).name === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740) return this.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314);
    }
    getFieldInfo() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742 = this.fieldIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 => this.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315).getFieldInfo()),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = Object.keys(this.customFields).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 => this.customFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316].getFieldInfo());
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742.concat(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25);
    }
    toJSON() {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = {};
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 of this.fieldIds) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317] = this.getFieldById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317).toJSON();
      return {
        'fields': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24,
        'fieldIds': this.fieldIds["concat"](),
        'displayNameRecord': {
          ...this.displayNameRecord
        },
        'customFields': Object.keys(this.customFields).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 => this.customFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318].toJSON()),
        'dataRecordCount': this.dataRecordCount,
        'range': this.range
      };
    }
    fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744) {
      this.fieldIds = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.fieldIds['concat'](), this.displayNameRecord = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.displayNameRecord ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.displayNameRecord
      } : {};
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.fields;
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745) {
        if (this.host["dataFields"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319]) continue;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = new L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319].name, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319].hexCode);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319]), this.host["dataFields"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147;
      }
      this.customFields = {};
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.customFields) {
        let {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148,
            name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149,
            hexCode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151 = new L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320), this.customFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151;
      }
      this.dataRecordCount = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.dataRecordCount, this.range = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.range;
    }
    dispose() {
      this.fieldIds = [], this.customFields = {}, this.dataRecordCount = 0, delete this.host;
    }
  },
  Te = class {
    constructor() {
      T(this, "dataFields", {}), T(this, 'collections', {});
    }
    createDataFieldId() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748 = M(5);
      return this.dataFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748] ? this.createDataFieldId() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748;
    }
    getAutoDisplayNameFunction() {
      return null;
    }
    getNoUsedDataFieldIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751 = this.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750].getFieldIds(),
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994 = new Set();
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 in this.collections) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 = this.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321].getFieldIds();
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152) var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666);
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322));
    }
    createCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755) {
      this.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754] = new z(this);
      let {
          header: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756,
          data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757
        } = this.getRangeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 = this.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27 = [];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = this.createDataFieldId(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = new L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323, M(3));
        this.dataFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.fieldIds['push'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154);
      }
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88 = 0;
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = 0;
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.addRecord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14++;
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D88++;
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.setDataRecordCount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.length), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758;
    }
    dispose() {
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 in this.collections) this.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325].dispose();
      this.collections = {}, this.dataFields = {};
    }
    toJSON() {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26 = {};
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 in this.collections) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326] = this.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326].toJSON();
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27 = {};
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 in this.dataFields) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327] = this.dataFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327].toJSON();
      return {
        'collections': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26,
        'dataFields': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27
      };
    }
    addCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767) {
      this.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.setRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766);
    }
    fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772) {
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.collections) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = new z(this);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.collections[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328]), this.addCollection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.range);
      }
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.dataFields) {
        let {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156,
            name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157,
            hexCode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.dataFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.dataFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329];
        if (xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159)) {
          let {
              dataFieldType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 === 3) {
            let {
              originalFieldId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611
            } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = new we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611);
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.dataFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329]), this.dataFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669);
        } else {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = new L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.fromJSON(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159), this.dataFields[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670;
        }
      }
    }
  };
export { L as DataField, R as BaseGroupField, we as DateGroupField, z as FieldsCollection, Te as DataFieldManager };
