function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463073) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39 = '';
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463073; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78++) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = Math.floor(Math.random() * 16);
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39 += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36.toString(16);
  }
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39.toUpperCase();
}
export { M as generateHexNumber };
