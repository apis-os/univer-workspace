import { CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { L } from "./docs-latex-model.js";
import { me } from "./docs-latex-latex-formula-actions.js";
import { he } from "./docs-latex-remove-latex-formula-actions.js";
import { pe } from "./docs-latex-insert-latex-formula-actions.js";
import { T } from "./internal-core-endo.js";
import { E } from "./docs-latex-formula-range.js";
const Ne = {
    id: "docs-latex.mutation.set-formula",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359) => !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.rangeId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.config ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.get(L).setFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.config), true)
  },
  Pe = {
    id: "docs-latex.mutation.remove-formula",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361) => !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.rangeId ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.get(L).removeFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.rangeId), true)
  },
  R = {
    id: "docs-latex.command.insert-formula",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363) return false;
      let {
        latex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365.trim()) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.unitId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366) return false;
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.startOffset != null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.endOffset != null,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.selection ?? Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366.getUnitId()),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.segmentId ?? "" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.segmentId ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.segmentId) ?? "",
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 = Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 = Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.actionDocumentData["body"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.model, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.unitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = ze({
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.actionDocumentData,
          endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.endOffset,
          latex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365,
          metadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.model["serialize"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.unitId),
          properties: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.properties,
          rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
          startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.startOffset
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.nextMetadata) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364.formulas[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370];
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 || !K({
        actionDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.actionDocumentData,
        bodyPath: getRichTextEditPath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.document, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4),
        commandService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.commandService,
        cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.cursorOffset,
        nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.nextDocumentData,
        nextMetadataConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372,
        previousMetadataConfig: undefined,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
        segmentId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4,
        selectionManager: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.selectionManager,
        trigger: R.id,
        undoRedoService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.undoRedoService,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.unitId
      }) ? false : {
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.cursorOffset,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
        segmentId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4,
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.cursorOffset - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365.length
      };
    }
  },
  z = {
    id: "docs-latex.command.update-formula",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.latex;
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.rangeId) || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.trim())) return false;
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.segmentId ?? "",
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.unitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 ? U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6) : null;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 = me({
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.actionDocumentData,
        latex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387,
        metadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.model["serialize"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.unitId),
        properties: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.properties,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.rangeId
      });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.nextMetadata) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.formulas[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.rangeId];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 ? K({
        actionDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.actionDocumentData,
        bodyPath: getRichTextEditPath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.document, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6),
        commandService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.commandService,
        cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.cursorOffset,
        nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390.nextDocumentData,
        nextMetadataConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391,
        previousMetadataConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.model["getFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.rangeId),
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.rangeId,
        segmentId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6,
        selectionManager: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.selectionManager,
        trigger: z.id,
        undoRedoService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.undoRedoService,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.unitId
      }) : false;
    }
  },
  B = {
    id: "docs-latex.command.remove-formula",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401) => Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, undefined, B.id)
  },
  V = {
    id: "docs-latex.command.replace-formula-with-text",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403) => Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.text) ?? "", V.id)
  };
function Fe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407) {
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.rangeId)) return false;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.segmentId ?? "",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.unitId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 ? U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8) : null;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 = he({
    documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.actionDocumentData,
    metadata: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.model["serialize"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.unitId),
    rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.rangeId,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406
  });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 ? K({
    actionDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.actionDocumentData,
    bodyPath: getRichTextEditPath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.document, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8),
    commandService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.commandService,
    cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410.cursorOffset,
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410.nextDocumentData,
    nextMetadataConfig: undefined,
    previousMetadataConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.model["getFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.rangeId),
    rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.rangeId,
    segmentId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8,
    selectionManager: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.selectionManager,
    trigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407,
    undoRedoService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.undoRedoService,
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.unitId
  }) : false;
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.get(IUniverInstanceService);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419, UniverInstanceType.UNIVER_DOC) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC)) ?? null;
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.getSnapshot().disabled) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.getSelfOrHeaderFooterModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 ? {
    actionDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.getSnapshot(),
    commandService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.get(ICommandService),
    document: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425,
    model: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.get(L),
    selectionManager: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.get(DocSelectionManagerService),
    undoRedoService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424.get(IUndoRedoService),
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425.getUnitId()
  } : null;
}
function Ie(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.get(DocSelectionManagerService).getTextRanges({
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433,
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433
  })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434[0];
}
function Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 = generateRandomId(6);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.customRanges) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.rangeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439.getFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442);) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 = generateRandomId(6);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442;
}
function Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.startOffset != null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.endOffset != null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.startOffset == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.endOffset == null ? null : {
    endOffset: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.endOffset),
    startOffset: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.endOffset)
  } : !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.segmentId != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448.segmentId !== (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.segmentId ?? "") ? null : {
    endOffset: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.endOffset),
    startOffset: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449.endOffset)
  };
}
function ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452) {
  try {
    return pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452);
  } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
    if (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5 instanceof T) return null;
    throw var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5;
  }
}
function Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.body,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.body,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 = Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457) ?? Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.dataStream, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459.dataStream);
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459 ? He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456) : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46460 ? null : Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456)].filter(Boolean).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) => JSONX.compose(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698), null);
}
function Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.dataStream === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.dataStream) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.rangeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 && E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.rangeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 && E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100));
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = getCustomRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 = getCustomRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.startOffset === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.startOffset ? {
    start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.startOffset,
    deleteLength: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.endOffset - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.startOffset,
    insertLength: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.endOffset - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476.startOffset
  } : null;
}
function He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489 = new TextX();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.retain(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.start), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.insertLength > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.insert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.insertLength, getBodySliceForTextXAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.insertLength, false)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.deleteLength > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487.deleteLength), JSONX.getInstance().editOp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.serialize(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488);
}
function Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.length && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2];) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2++;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.length;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 - 1] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 - 1];) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496--, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497--;
  return {
    start: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
    deleteLength: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
    insertLength: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2
  };
}
const We = ["paragraphs", "sectionBreaks", "tables", "columnGroups", "blockRanges", "customBlocks", "customRanges", "customDecorations", "textRuns"];
function Ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502 ? Ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503 ? Ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503) : undefined;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 of We) W(JSONX.getInstance(), [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) => JSONX.compose(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103), null);
}
function Ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512;
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518) {
  if (!G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517)) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 == null) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.insertOp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517));
      return;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 == null) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.removeOp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516));
      return;
    }
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516) && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517)) {
      qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518);
      return;
    }
    if (Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516) && Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517)) {
      new Set([...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516), ...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517)]).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => {
        W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518);
      });
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.replaceOp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517));
  }
}
function qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527.length) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) => W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524, [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528));
    return;
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.length && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527.length && G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4]);) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4++;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526.length - 1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527.length - 1;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 && G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6]);) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5--, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6--;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104--) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.removeOp([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104]));
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105++) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524.insertOp([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105]));
}
function Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534);
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537) {
  return JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536) === JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46537);
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540) {
  let {
      actionDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541,
      bodyPath: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542,
      commandService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543,
      cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544,
      nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545,
      nextMetadataConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546,
      previousMetadataConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547,
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549,
      selectionManager: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550,
      trigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551,
      undoRedoService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 ? Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551) : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = null,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = false;
  try {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.params);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) return false;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = {
        id: RichTextEditingMutation.id,
        params: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466,
          noHistory: true,
          noNeedSetTextRange: true,
          segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549
        }
      };
    }
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.params)) return Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558), false;
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552.pushUndoRedo({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548,
      redoMutations: [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557] : []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555],
      undoMutations: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556, ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558] : [])],
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553
    });
  } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
    try {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.params);
    } finally {
      Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558);
    }
    throw var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52;
  }
  return Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544), true;
}
function Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578.replaceDocRanges([{
    startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581,
    segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580
  }], {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579
  }, false, {
    [DOC_SELECTION_OPTION_PRESERVE_CARET]: true
  });
}
function Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590) {
  return {
    id: RichTextEditingMutation.id,
    params: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586,
      actions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587,
      textRanges: [{
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588,
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588,
        collapsed: true,
        segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587
      }],
      isEditing: false,
      noHistory: true,
      noNeedSetTextRange: true,
      trigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590
    }
  };
}
function Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.params);
}
function Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 ? {
    id: Ne.id,
    params: {
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602,
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600
    }
  } : {
    id: Pe.id,
    params: {
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600
    }
  };
}
export { R as InsertDocsLatexFormulaCommand, z as UpdateDocsLatexFormulaCommand, B as RemoveDocsLatexFormulaCommand, V as ReplaceDocsLatexFormulaWithTextCommand };
export { Pe, Ne };
