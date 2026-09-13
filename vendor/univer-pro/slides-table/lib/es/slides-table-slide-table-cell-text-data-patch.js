import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461681;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675.rows),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461681.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.textData = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678) : delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.textData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679.verticalAlign && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.style = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.style,
    'verticalAlign': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679.verticalAlign
  }), Tools.diffValue(Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682), Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684)) ? null : {
    'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683
  };
}
function Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696.textData = Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696.textData), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696;
}
function Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699 ?? {
    'id': '',
    'body': {
      'dataStream': '\x0d\x0a'
    },
    'documentStyle': {}
  });
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.id = '', (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.body) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.paragraphs) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.body["paragraphs"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 => {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652
      };
      return delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.paragraphId, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.startIndex, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4;
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.body["paragraphs"] = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2;
  }
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.body) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701.sectionBreaks) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.body["sectionBreaks"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 => {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654
      };
      return delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.sectionId, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.startIndex, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6;
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.body["sectionBreaks"] = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3;
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.documentStyle) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.documentStyle
    };
    delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.documentFlavor, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.marginBottom, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.marginLeft, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.marginRight, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.marginTop, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.pageSize;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 = {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.renderConfig
    };
    delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17.verticalAlign, Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.renderConfig = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 : delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16.renderConfig, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702.documentStyle = Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 : {};
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702;
}
export { Mn as buildSlideTableCellTextDataPatch };
