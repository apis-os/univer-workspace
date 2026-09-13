import { UnitComparisonService as var_core_value_sig27E5 } from "@univerjs-pro/edit-history";
import { FUniver as var_core_value_sig8061 } from "@univerjs/core/facade";
var n = class {
    constructor(var_core_value_sig7524, var_core_value_sig2AD8) {
      this._service = var_core_value_sig7524, this._prepared = var_core_value_sig2AD8;
    }
    query(var_core_value_sig2AD0) {
      return this._service["query"](this._prepared, var_core_value_sig2AD0);
    }
  },
  r = class extends var_core_value_sig8061 {
    compareUnitData(var_core_value_sig3EEE) {
      return this._injector["get"](var_core_value_sig27E5).compare(var_core_value_sig3EEE);
    }
    prepareUnitComparison(var_core_value_sigBC46) {
      let var_core_value_sig3D7D = this._injector["get"](var_core_value_sig27E5);
      return new n(var_core_value_sig3D7D, var_core_value_sig3D7D.prepare(var_core_value_sigBC46));
    }
  };
var_core_value_sig8061.extend(r);
export { n as FUnitComparison };
