import { BASES_UI_PLUGIN_CONFIG_KEY, BaseEditorService, BaseSelectionService, BaseUIStateService } from "@univerjs-pro/bases-ui";
import { IConfigService } from "@univerjs/core";
import { FUniver } from "@univerjs/core/facade";
var o = class {
  constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462) {
    this._viewId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46, this._viewType = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461, this._controller = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462;
  }
  getViewId() {
    return this._viewId;
  }
  getViewType() {
    return this._viewType;
  }
  getViewport() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  refresh() {
    this._controller["invalidate"]();
  }
  hitTest(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468 = this._controller["hitTest"](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467);
    switch (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468 == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468.type) {
      case "grid-attachment-add":
      case "grid-attachment-expand":
      case "grid-attachment-item":
        return {
          type: "grid-cell",
          tableId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468.tableId,
          viewId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468.viewId,
          recordId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468.recordId,
          fieldId: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468.fieldId,
          virtual: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468.virtual
        };
      default:
        return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468;
    }
  }
};
export { o as FBaseRenderedView };
