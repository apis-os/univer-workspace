import { FBaseTableRecord } from "@univerjs-pro/bases/facade";
import * as var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620 from "@univerjs/thread-comment";
var n = class extends FBaseTableRecord {
  _initialize(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612) {
    let var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4613;
    Object.defineProperty(this, "_threadCommentService", {
      get: () => var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4613 ??= var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612.get(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620.ThreadCommentFacadeService)
    });
  }
  createCommentAsync(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = {}) {
    return this._threadCommentService["createCommentAsync"]({
      ...var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4617,
      unitId: this._baseUnitId,
      subUnitId: this._baseTableId,
      anchor: {
        kind: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620.ThreadCommentAnchorKind["BASE_RECORD"],
        tableId: this._baseTableId,
        recordId: this._recordId
      },
      content: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4616
    });
  }
  getComments() {
    return this._threadCommentService["getComments"]({
      unitIds: [this._baseUnitId],
      subUnitIds: [this._baseTableId],
      anchorKinds: [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620.ThreadCommentAnchorKind["BASE_RECORD"]]
    }).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46 => {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461 = ox29b1c3,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462;
      return ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461(346)]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D462.kind) === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461(345)][var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461(366)] && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46.anchor[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461(347)] === this._recordId;
    });
  }
  async listCommentsAsync() {
    return (await this._threadCommentService["listCommentsAsync"]({
      unitIds: [this._baseUnitId],
      subUnitIds: [this._baseTableId],
      anchorKinds: [var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620.ThreadCommentAnchorKind["BASE_RECORD"]]
    })).filter(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466 => {
      var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467 = ox1d91fa,
        var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468;
      return ((var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467(346)]) == null ? undefined : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468.kind) === var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4620.ThreadCommentAnchorKind[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467(366)] && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D466.anchor[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467(347)] === this[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467(365)];
    });
  }
};
export { n as FBaseTableRecordThreadCommentMixin };
