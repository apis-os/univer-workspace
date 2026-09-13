import { ApplyPdfHistoryCommand, ApplyPdfMutationBatchMutation, DEFAULT_PDF_TABLE_THEME_PRESETS, PDF_A4_PAGE_HEIGHT_PT, PDF_A4_PAGE_WIDTH_PT, PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA, PdfAnnotationType, PdfAssetType, PdfDisplayOpType, PdfEditorMutationSource, PdfExportDisposition, PdfListKind, PdfListPresetId, PdfObjectType, PdfSemanticRole, PdfTableCellVerticalAlign, PdfTextAnchor, createPdfDefaultDividerInsertionBbox, createPdfDefaultListInsertionBbox, createPdfDefaultParagraphInsertionBbox, createPdfDefaultTableInsertionLayout, createPdfDefaultTextBoxInsertionBbox, createPdfEditorSession, createPdfNativeTextHitTargets, createPdfPage, createPdfTableGrid, emuToPt, isPdfEditorDividerObject, normalizePdfEditorManagedImageResource, pdfAddAnnotationAction, pdfAddDividerAction, pdfAddImageAction, pdfAddListAction, pdfAddParagraphAction, pdfAddTableAction, pdfAddTextBoxAction, pdfChangeListLevelAction, pdfChangeListStyleAction, pdfCropImageAction, pdfDeleteObjectsAction, pdfEditTextAction, pdfInsertListItemAction, pdfInsertPageAction, pdfInsertParagraphBlockAction, pdfMoveObjectAction, pdfPromoteNativeTextAction, pdfRemoveListItemAction, pdfRemoveManagedImageAction, pdfRemoveParagraphBlockAction, pdfReorderObjectAction, pdfResizeTableAction, pdfSetListStartNumberAction, pdfUpdateManagedImageAction, pdfUpdateObjectAppearanceAction, pdfUpdateObjectStateAction, pdfUpdateObjectStrokeAction, pdfUpdateParagraphStyleAction, pdfUpdateTableCellStyleAction, pdfUpdateTableThemeAction, pdfUpdateTextRangeStyleAction, pdfUpdateTextStyleAction, ptToEmu } from "@univerjs-pro/pdfs";
import { FBaseInitialable, FEnum, FUniver } from "@univerjs/core/facade";
import { HorizontalAlign, ICommandService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, generateRandomId } from "@univerjs/core";
import { N } from "./facade-pdfs-fpdf-annotation.js";
import { F } from "./facade-pdfs-fpdf-divider.js";
import { R } from "./facade-pdfs-fpdf-image.js";
import { V } from "./facade-pdfs-fpdf-list.js";
import { H } from "./facade-pdfs-fpdf-paragraph.js";
import { U } from "./facade-pdfs-fpdf-table.js";
import { W } from "./facade-pdfs-fpdf-table-cell.js";
import { K } from "./facade-pdfs-fpdf-text-box.js";
import { q } from "./facade-pdfs-fpdf-text-span.js";
import { J } from "./facade-pdfs-fpdf-page.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 } from "./facade-pdfs-fpdf.js";
var Xe = class extends FEnum {
  get PdfAnnotationType() {
    return PdfAnnotationType;
  }
  get PdfListKind() {
    return PdfListKind;
  }
  get PdfListPresetId() {
    return PdfListPresetId;
  }
  get PdfTextAnchor() {
    return PdfTextAnchor;
  }
  get PdfTableCellVerticalAlign() {
    return PdfTableCellVerticalAlign;
  }
};
FEnum.extend(Xe);
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708 == null) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708;
  let {
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709,
    dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710,
    dashPhase: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709 === undefined ? {} : {
      width: ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709)
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 === undefined ? {} : {
      dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 => ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101))
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711 === undefined ? {} : {
      dashPhase: ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711)
    })
  };
}
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728.getUnitId(),
    var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242 = Date.now(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733 = createPdfEditorSession({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732 + ":facade",
      documentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
      now: var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730.execute({
      documentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
      editState: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728.getEditState(),
      selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.selection,
      baseRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728.getEditState().revision,
      now: var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig2242,
      createId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 + ":" + generateRandomId(12)
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.batch;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735) throw Error("PDF action " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730.id + "\x20did\x20not\x20produce\x20a\x20durable\x20mutation\x20batch.");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.get(ICommandService).syncExecuteCommand(ApplyPdfMutationBatchMutation.id, {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
    batch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735
  })) throw Error("PDF\x20action\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730.id + " was rejected.");
  return Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734;
}
function Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.mutations["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.inverse).reverse();
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747.every(Boolean)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.getUnitId();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.get(IUniverInstanceService).focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.get(IUndoRedoService).pushUndoRedo({
    unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748,
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.id,
    undoMutations: [{
      id: ApplyPdfHistoryCommand.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748,
        source: PdfEditorMutationSource.UNDO,
        mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747,
        atomic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.atomic
      }
    }],
    redoMutations: [{
      id: ApplyPdfHistoryCommand.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748,
        source: PdfEditorMutationSource.REDO,
        mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.mutations,
        atomic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.atomic
      }
    }]
  });
}
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776);
  };
}
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785;
}
N = M([j(3, Inject(Injector))], N);
F = M([j(3, Inject(Injector))], F);
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808) {
  "@babel/helpers - typeof";

  return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211;
  }, I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808);
}
function nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811) {
  if (I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811 || "default");
    if (I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810);
}
function rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 = nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818, "string");
  return I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 + "";
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823 = rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822;
}
R = M([j(3, Inject(Injector))], R);
function ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830) {
  let {
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830;
  return {
    asset: {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831.assetId ?? pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831.source, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831.imageSourceType),
      type: PdfAssetType.IMAGE,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831.transform["width"],
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831.transform["height"]
    },
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831.source,
    imageSourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831.imageSourceType
  };
}
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 = ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834.getEditState().managedResources[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.asset["id"]];
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837.source) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.source && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837.imageSourceType === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.imageSourceType ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836;
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.left), ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.top), ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.width), ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.height)],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.rotation * Math.PI / 180,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.flipX ? -1 : 1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.flipY ? -1 : 1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 = -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14[0] + var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14[2]) / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14[1] + var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14[3]) / 2;
  return {
    bbox: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14,
    transform: [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42]
  };
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845[0] + ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.left), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845[1] + ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.top), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845[0] + ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.right), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845[1] + ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.bottom)];
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = 2166136261;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 < var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6++) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 ^= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2.charCodeAt(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = Math.imul(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54, 16777619);
  return "pdf-facade-asset-" + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 >>> 0).toString(36);
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858) {
  if (z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.left, "crop.left"), z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.top, "crop.top"), z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.right, "crop.right"), z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.bottom, "crop.bottom"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.right <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.left || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.bottom <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.top) throw RangeError("PDF image crop must have positive width and height.");
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860) {
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860 > 1) throw RangeError("PDF\x20image\x20opacity\x20must\x20be\x20between\x200\x20and\x201.");
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863) {
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862)) throw RangeError("PDF\x20image\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863 + "\x20must\x20be\x20finite.");
}
V = M([j(3, Inject(Injector))], V);
H = M([j(3, Inject(Injector))], H);
U = M([j(3, Inject(Injector))], U);
W = M([j(4, Inject(Injector))], W);
K = M([j(3, Inject(Injector))], K);
q = M([j(4, Inject(Injector))], q);
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882.getEditState().sourceSuppressions).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.exportDisposition !== PdfExportDisposition.PRESERVE_NATIVE && bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883));
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.pageId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.pageId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.pageId) return false;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.operationPath) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896.length) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898;
    return xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.operationPath, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898.operationPath);
  }
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.displayOperationIds ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897.operatorIds) ?? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895.id];
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.operatorIds ?? []).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558));
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.displayListId === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.displayListId) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.operatorId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.operatorId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.resourceName === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.resourceName && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.objectRef === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.objectRef && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.assetId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.assetId;
  }));
}
J = M([j(2, Inject(Injector))], J);
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 = M([j(1, Inject(Injector))], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994);
var Pt = class extends FUniver {
  createPdf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696 = {}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698 = this._injector["get"](IUniverInstanceService).createUnit(UniverInstanceType.UNIVER_PDF, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697);
    return this._injector["createInstance"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698);
  }
  getActivePdf() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702 = this._injector["get"](IUniverInstanceService).getCurrentUnitOfType(UniverInstanceType.UNIVER_PDF);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702 ? this._injector["createInstance"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702) : null;
  }
  getPdf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705 = this._injector["get"](IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704, UniverInstanceType.UNIVER_PDF);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705 ? this._injector["createInstance"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705) : null;
  }
  getPdfTableThemePresets() {
    return DEFAULT_PDF_TABLE_THEME_PRESETS.map(({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699,
      group: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100
    }) => ({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699,
      group: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100
    }));
  }
};
FUniver.extend(Pt);
export { D, T, mt, lt, ht, ct, st, L, z, ot, vt };
