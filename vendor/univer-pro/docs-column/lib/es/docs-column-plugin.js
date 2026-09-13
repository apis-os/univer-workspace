import { ColumnLayoutType, ColumnResponsiveType, CommandType, DataStreamTreeTokenType, DependentOn, DocumentFlavor, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, JSONX, ObjectRelativeFromH, ObjectRelativeFromV, Plugin, TableAlignmentType, TableRowHeightRule, TableSizeType, TableTextWrapType, TextX, Tools, UniverInstanceType, containsInteriorInsertionOffset, createParagraphId, createSectionId, generateRandomId, getBlockRangeInterval, getColumnGroupRangeInterval, getTableRangeInterval, merge, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, consumeContentInsertRange } from "@univerjs/docs";
import { getDocsTableRenderViewport } from "@univerjs/engine-render";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Ge, Je, Ke, We, Ye, qe } from "./docs-column-resize-doc-column-group.js";
const vn = {};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 = vn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358
    } = merge({}, vn, this._config);
    this._configService["setConfig"]("docs-column.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358);
  }
  onStarting() {
    [Ye, Ge, Ke, qe, We, Je].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 => this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669)));
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 as UniverDocsColumnPlugin };
