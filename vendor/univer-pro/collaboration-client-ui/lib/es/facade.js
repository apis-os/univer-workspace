import { RemoteUniscriptService as remoteUniscriptService } from "@univerjs-pro/collaboration-client-ui";
import { FUniver as fUniver } from "@univerjs/core/facade";
var n = class extends fUniver {
  runOnServer(var_core_value_sig7524, var_core_value_sig2AD8, ...var_core_value_sig2AD0) {
    return this._injector["get"](remoteUniscriptService).runOnServer(var_core_value_sig7524, var_core_value_sig2AD8, {}, ...var_core_value_sig2AD0);
  }
};
fUniver.extend(n);
export {};
