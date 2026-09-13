var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype["hasOwnProperty"],
  o = (var_core_value_sig2AD8, var_core_value_sig2AD0, var_core_value_sig3EEE, var_core_value_sigBC46) => {
    if (var_core_value_sig2AD0 && typeof var_core_value_sig2AD0 == "object" || typeof var_core_value_sig2AD0 == "function") {
      for (var var_core_value_sig3D7D = r(var_core_value_sig2AD0), var_core_value_sig27E5 = 0, var_core_value_sig8061 = var_core_value_sig3D7D.length, var_core_value_sig4D4C; var_core_value_sig27E5 < var_core_value_sig8061; var_core_value_sig27E5++) var_core_value_sig4D4C = var_core_value_sig3D7D[var_core_value_sig27E5], !a.call(var_core_value_sig2AD8, var_core_value_sig4D4C) && var_core_value_sig4D4C !== var_core_value_sig3EEE && t(var_core_value_sig2AD8, var_core_value_sig4D4C, {
        get: (var_core_value_sig7524 => var_core_value_sig2AD0[var_core_value_sig7524]).bind(null, var_core_value_sig4D4C),
        enumerable: !(var_core_value_sigBC46 = n(var_core_value_sig2AD0, var_core_value_sig4D4C)) || var_core_value_sigBC46.enumerable
      });
    }
    return var_core_value_sig2AD8;
  },
  s = (var_core_value_sigC9E0, var_core_value_sig76BA, var_core_value_sigFBFA) => (var_core_value_sigFBFA = var_core_value_sigC9E0 == null ? {} : e(i(var_core_value_sigC9E0)), o(var_core_value_sig76BA || !var_core_value_sigC9E0 || !var_core_value_sigC9E0.__esModule ? t(var_core_value_sigFBFA, "default", {
    value: var_core_value_sigC9E0,
    enumerable: true
  }) : var_core_value_sigFBFA, var_core_value_sigC9E0));
Object.defineProperty(exports, "t", {
  enumerable: true,
  get: function () {
    return s;
  }
});
