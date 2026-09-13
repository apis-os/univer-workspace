import { BooleanNumber, CommandType, DOC_RANGE_TYPE, DashStyleType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getCustomBlockIdsInSelections, getParagraphContentStartOffset, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, merge } from "@univerjs/core";
import { DocHistoryAction, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { G, N, nt, tt } from "./internal-core-endo.js";
function rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180 = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180.tables[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177] ?? {};
  return {
    tables: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180.tables,
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461177]: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13,
        columnTypes: {
          ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.columnTypes ?? {}),
          [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179
        }
      }
    }
  };
}
var J = class extends Disposable {
  constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742) {
    super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742), G(this, "_resources", new Map()), G(this, "_change$", new Subject()), G(this, "change$", this._change$["asObservable"]());
  }
  getTableMetadata(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 = this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.tables[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747) return N({
      tables: {
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747
      }
    }).tables[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745];
  }
  setHeaderRowCount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754) {
    this._setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753, tt(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754));
  }
  setTitleRow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760) {
    this._setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759, nt(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760));
  }
  setColumnType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767) {
    this._setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765, rt(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767));
  }
  serialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772) {
    return N(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772));
  }
  deserialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775) {
    this._resources["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774, N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775)), this._change$["next"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774
    });
  }
  removeUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778) {
    this._resources["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778), this._change$["next"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778
    });
  }
  dispose() {
    super.dispose(), this._resources["clear"](), this._change$["complete"]();
  }
  _setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782) {
    this._resources["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782), this._change$["next"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781
    });
  }
};
export { J as DocsTableModel };
