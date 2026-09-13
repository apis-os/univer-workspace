import { FormulaShapeAnimationController as var_core_value_sig5C27, SHAPE_CHANGE_PICKER_COMPONENT as var_core_value_sigD494, SHAPE_EDITOR_TRANSFORMER_CONFIG as var_core_value_sigBF6D, SHEET_DOC_SHAPE_FLOATING_TOOLBAR_TOP_OFFSET as var_core_value_sigD051, ShapeEditPanel as var_core_value_sig16D9, ShapeFloatingToolbar as var_core_value_sigF378, ShapeFloatingToolbarService as var_core_value_sig5F6C, ShapeFloatingToolbarToggleFactory as var_core_value_sig7E85, ShapeFormulaRibbonControl as var_core_value_sigF204, ShapeGroupEnum as var_core_value_sig7A15, ShapePickerDropdown as var_core_value_sigEEA6, ShapePickerPanel as var_core_value_sigEAE1, ShapeQuickStyleGallery as var_core_value_sigC69F, ShapeStyleRibbonControl as var_core_value_sig0442, ShapeTextEditorContainer as var_core_value_sig697A, ShapeTextFloatMenuRenderControllerBase as var_core_value_sigDB65, ShapeTextFloatToolbar as var_core_value_sig045E, ShapeTextHyperLinkPopupService as var_core_value_sig4524, ShapeTextRibbonControl as var_core_value_sig64D5, ToggleShapeFloatingToolbarOperation as var_core_value_sig9678, UniverShapeEditorUIPlugin as var_core_value_sig5E74, activateDrawingObject as var_core_value_sig75FC, bindRenderTransformerLifecycle as var_core_value_sig639A, buildShapeTextDataUpdate as var_core_value_sig567C, clearActiveDrawingObjects as var_core_value_sig825F, drawFormulaShapeAnimationLayers as var_core_value_sig546D, getDrawingTypeNameKey as var_core_value_sig8078, getTextModel as var_core_value_sigDCED, getTextStyle as var_core_value_sig2829, normalizeShapeTextModel as var_core_value_sig6EE2, plainShapeTextToDocumentData as var_core_value_sig4CCC, prepareShapeTextDocumentData as var_core_value_sig6E47, resolveFormulaShapeAutoFitSize as var_core_value_sigB64D, resolveShapeContextualRibbonHostMode as var_core_value_sig2407, resolveShapeTextDocumentRenderLayout as var_core_value_sigE4D0, resolveShapeTextEditorBehaviorShapeData as var_core_value_sigD5F1, resolveShapeTextEditorWrapStrategy as var_core_value_sigBC19, shouldAllowShapeTextEditorHostSizeShrink as var_core_value_sig4F3C, shouldClipShapeTextDocument as var_core_value_sig8D44, useFormulaShapeToolbar as var_core_value_sig1660 } from "@univerjs-pro/shape-editor-ui";
import { DOCS_COMPONENT_MAIN_LAYER_INDEX as var_core_value_sigEE7B, DOC_CONTENT_INSERT_MENU_ID as var_core_value_sig44DF, DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID as var_core_value_sig7E48, DOC_PARAGRAPH_T_INSERT_MENU_ID as var_core_value_sig7B9E, DocCanvasPopManagerService as var_core_value_sig5C3B, DocEventManagerService as var_core_value_sig4002, DocLayoutInteractionService as var_core_value_sig4153, DocParagraphMenuService as var_core_value_sig2825, DocPrintInterceptorService as var_core_value_sig5FD0, DocRenderController as var_core_value_sigA7E3, DocSelectionRenderService as var_core_value_sigA784, EMPTY_PARAGRAPH_MENU_ID as var_core_value_sig4406, INSERT_BELLOW_MENU_ID as var_core_value_sig6806, UniverDocsUIPlugin as var_core_value_sigD4AA, VIEWPORT_KEY as var_core_value_sigDC41 } from "@univerjs/docs-ui";
import { BuiltInUIPart as var_core_value_sigFB47, ComponentManager as var_core_value_sig9B3D, ContextMenuGroup as var_core_value_sigC1CF, ContextMenuPosition as var_core_value_sigEE12, FloatingObjectToolbarPosition as var_core_value_sigD70C, IMenuManagerService as var_core_value_sigF047, IRibbonService as var_core_value_sigC2F9, ISidebarService as var_core_value_sig1F51, IUIPartsService as var_core_value_sig29F5, IconManager as var_core_value_sig5A51, MenuItemType as var_core_value_sigF1D1, MenuManagerPosition as var_core_value_sig370E, RibbonInsertGroup as var_core_value_sigDE14, connectInjector as var_core_value_sig02CB, getMenuHiddenObservable as var_core_value_sig6CBB, useDependency as var_core_value_sig68DA, useObservable as var_core_value_sig64D8 } from "@univerjs/ui";
import { DEFAULT_DOC_SHAPE_HEIGHT as var_core_value_sigD755, DEFAULT_DOC_SHAPE_WIDTH as var_core_value_sigF897, DocShapeAnchorPosition as var_core_value_sigA578, DocsShapeService as var_core_value_sig0260, InsertDocShapeCommand as var_core_value_sig034D, UniverDocsShapePlugin as var_core_value_sig89EC, UpdateDocDrawingMetadataCommand as var_core_value_sig9975, UpdateDocShapeDataCommand as var_core_value_sigD6D9, UpdateDocShapeDataMutation as var_core_value_sig2637 } from "@univerjs-pro/docs-shape";
import { ImageSourceTypeEnum as var_core_value_sigAF1D, ShapeArrowSizeEnum as var_core_value_sigC92D, ShapeArrowTypeEnum as var_core_value_sigEA3D, ShapeDefaultConfig as var_core_value_sig2841, ShapeFillEnum as var_core_value_sig9FE1, ShapeLineTypeEnum as var_core_value_sig9DAA, ShapeModel as var_core_value_sig1F8A, ShapeRenderModeEnum as var_core_value_sigEBB4, ShapeTypeEnum as var_core_value_sig2B74, isConnectorShape as var_core_value_sig0483 } from "@univerjs-pro/engine-shape";
import { ShapeFormulaService as var_core_value_sig4A48, UniverShapeEditorPlugin as var_core_value_sigD170, applyQuickStyleToShapeData as var_core_value_sig90E5, cloneShapeDataForType as var_core_value_sig7000, createShapeFormulaDocument as var_core_value_sigD7C5, createShapeTextBoxShapeData as var_core_value_sig3633, getShapeQuickStylePreset as var_core_value_sig1DF5, getShapeQuickStyleType as var_core_value_sig90A3, resolveActiveShapeQuickStylePresetId as var_core_value_sig28BE } from "@univerjs-pro/shape-editor";
import { ArrangeTypeEnum as var_core_value_sig0224, BooleanNumber as var_core_value_sig854B, CommandType as var_core_value_sig1FF6, DependentOn as var_core_value_sig4B27, Disposable as var_core_value_sig3A41, DisposableCollection as var_core_value_sig269A, DocumentDataModel as var_core_value_sigBF53, DrawingTypeEnum as var_core_value_sigD9BB, FOCUSING_COMMON_DRAWINGS as var_core_value_sigF549, FOCUSING_SHAPE_TEXT_EDITOR as var_core_value_sigC125, HorizontalAlign as var_core_value_sigB63D, ICommandService as var_core_value_sig8255, IConfigService as var_core_value_sigBFC7, IContextService as var_core_value_sig933F, IImageIoService as var_core_value_sig29DE, IPermissionService as var_core_value_sig4AFB, IURLImageService as var_core_value_sigC7EA, IUniverInstanceService as var_core_value_sigDAB9, Inject as var_core_value_sig9CF7, Injector as var_core_value_sigCCE5, LocaleService as var_core_value_sig5933, Plugin as var_core_value_sig884B, PositionedObjectLayoutType as var_core_value_sig4E30, UniverInstanceType as var_core_value_sig9730, VerticalAlign as var_core_value_sig8E4A, createInternalEditorID as var_core_value_sig300B, generateRandomId as var_core_value_sig8457, getParagraphContentStartOffset as var_core_value_sigB30D, merge as var_core_value_sigDB33, registerDependencies as var_core_value_sig6C8C, toDisposable as var_core_value_sig7A5E, touchDependencies as var_core_value_sig838E } from "@univerjs/core";
import { DocInterceptorService as var_core_value_sig9A5B, DocSelectionManagerService as var_core_value_sigC860, RichTextEditingMutation as var_core_value_sigE64C, UniverDocsPlugin as var_core_value_sigF39B, canEditDocumentTargets as var_core_value_sig9B88, getDocumentDrawingSegmentId as var_core_value_sig992A, getDocumentEntityParentPermissionObjectIds as var_core_value_sig6281, getDocumentEntityPermissionObjectId as var_core_value_sig9B01 } from "@univerjs/docs";
import { IDocDrawingService as var_core_value_sigA724, RemoveDocDrawingCommand as var_core_value_sig385E, SetDocDrawingArrangeCommand as var_core_value_sig10D3, TextWrappingStyle as var_core_value_sig41F2, UpdateDocDrawingWrappingStyleCommand as var_core_value_sig32DD, UpdateDrawingDocTransformCommand as var_core_value_sig7A88 } from "@univerjs/docs-drawing";
import { CURSOR_TYPE as var_core_value_sig6CFC, Circle as var_core_value_sig3EC0, DRAWING_OBJECT_LAYER_INDEX as var_core_value_sigEA69, DocumentSkeleton as var_core_value_sigF42A, DocumentViewModel as var_core_value_sig898E, Documents as var_core_value_sigC481, IRenderManagerService as var_core_value_sig27B7, RENDER_CLASS_TYPE as var_core_value_sig2DAD, Shape as var_core_value_sig00DE, Transform as var_core_value_sigEF7C, UniverRenderEnginePlugin as var_core_value_sig07E7, Vector2 as var_core_value_sig6005 } from "@univerjs/engine-render";
import { IDrawingManagerService as var_core_value_sig25A4, SetDrawingSelectedOperation as var_core_value_sigB591, UniverDrawingPlugin as var_core_value_sigB272, getDrawingShapeKeyByDrawingSearch as var_core_value_sig6F52 } from "@univerjs/drawing";
import { DrawingCommonPanel as var_core_value_sig09C4, DrawingImageClipService as var_core_value_sig8E3E, IMAGE_CLIP_SHAPE_PICKER_COMPONENT as var_core_value_sigC3D3, OBJECT_LIST_FLOATING_SECTION_ID as var_core_value_sig1451, ObjectListPanelBase as var_core_value_sigAD57, UniverDrawingUIPlugin as var_core_value_sig58A8, getObjectListPanelLabels as var_core_value_sigEC1A, getObjectListPanelSectionIdForDrawingType as var_core_value_sigBDED, getObjectListPanelTypeName as var_core_value_sig4BFF, insertGroupObject as var_core_value_sig40E7 } from "@univerjs/drawing-ui";
import { Fragment as var_core_value_sigEDBA, jsx as var_core_value_sigE863, jsxs as var_core_value_sig04B4 } from "react/jsx-runtime";
import { BehaviorSubject as var_core_value_sig1C07, Observable as var_core_value_sig93D6, distinctUntilChanged as var_core_value_sigDD05, map as var_core_value_sig3932, merge as var_core_value_sig48B2, startWith as var_core_value_sig57DF } from "rxjs";
import { UniverLicensePlugin as var_core_value_sigC985 } from "@univerjs-pro/license";
import { DocDrawingPosition as var_core_value_sig8DA6, DocDrawingTextWrap as var_core_value_sigCA69, UniverDocsDrawingUIPlugin as var_core_value_sigB77C } from "@univerjs/docs-drawing-ui";
import { BottomIcon as var_core_value_sig9AFF, MoveDownIcon as var_core_value_sig3545, MoveUpIcon as var_core_value_sig5EE4, ObjectLayersIcon as var_core_value_sig7EAB, ShapeFormatSettingIcon as var_core_value_sig56B9, TextWrapShapeIcon as var_core_value_sig90CF, TopmostIcon as var_core_value_sigA386 } from "@univerjs/icons";
import { memo as var_core_value_sigCD6E, useEffect as var_core_value_sigFD9D, useMemo as var_core_value_sigA2A4, useReducer as var_core_value_sigA1AC, useState as var_core_value_sig6180 } from "react";
function Gn(var_core_value_sigBC1A, var_core_value_sig3F3A) {
  if (var_core_value_sig3F3A) {
    if (var_core_value_sig0483(var_core_value_sigBC1A) && (var_core_value_sig3F3A.startArrow || var_core_value_sig3F3A.endArrow)) return {
      ln: {
        startArrow: var_core_value_sig3F3A.startArrow ? {
          type: var_core_value_sigEA3D.Arrow,
          size: var_core_value_sigC92D.Medium
        } : undefined,
        endArrow: var_core_value_sig3F3A.endArrow ? {
          type: var_core_value_sigEA3D.Arrow,
          size: var_core_value_sigC92D.Large
        } : undefined
      }
    };
    if (var_core_value_sigBC1A === var_core_value_sig2B74.Rect && (var_core_value_sig3F3A.horizontal || var_core_value_sig3F3A.vertical)) return var_core_value_sig3633({
      fill: {
        fillType: var_core_value_sig9FE1.SolidFill,
        color: "#3B82F6"
      },
      isHorizontal: !!var_core_value_sig3F3A.horizontal,
      stroke: {
        lineStrokeType: var_core_value_sig9DAA.SolidLine,
        width: 1,
        color: "#2563EB"
      }
    });
  }
}
function Kn(var_core_value_sigA984, var_core_value_sigA504) {
  var var_core_value_sig05FF;
  let var_core_value_sigFBF0 = var_core_value_sigA504.segmentId ?? "",
    var_core_value_sig2F95 = (var_core_value_sig05FF = var_core_value_sigA984.getSelfOrHeaderFooterModel(var_core_value_sigFBF0)) == null ? undefined : var_core_value_sig05FF.getBody();
  if (!var_core_value_sig2F95) return null;
  let var_core_value_sigF0E1 = var_core_value_sig2F95.paragraphs ?? [],
    var_core_value_sig2D8D = var_core_value_sigF0E1.find(var_core_value_sig8CF5 => {
      let var_core_value_sigDDD7 = var_core_value_sigB30D(var_core_value_sig2F95, var_core_value_sig8CF5);
      return var_core_value_sigA504.startOffset >= var_core_value_sigDDD7 && var_core_value_sigA504.startOffset <= var_core_value_sig8CF5.startIndex;
    }) ?? var_core_value_sigF0E1[var_core_value_sigF0E1.length - 1];
  return var_core_value_sig2D8D ? {
    paragraphId: var_core_value_sig2D8D.paragraphId,
    segmentId: var_core_value_sigFBF0,
    position: var_core_value_sigA578.OFFSET,
    offset: var_core_value_sigA504.startOffset - var_core_value_sigB30D(var_core_value_sig2F95, var_core_value_sig2D8D)
  } : null;
}
function qn(var_core_value_sigE5A6, var_core_value_sigF449, var_core_value_sig38C5) {
  var var_core_value_sigC87D, var_core_value_sigCCDC;
  if (!var_core_value_sig38C5) return null;
  let var_core_value_sigC310 = (var_core_value_sigC87D = var_core_value_sigE5A6.get(var_core_value_sig27B7).getRenderUnitById(var_core_value_sigF449)) == null ? undefined : var_core_value_sigC87D.with(var_core_value_sig2825).activeTarget;
  if (!var_core_value_sigC310) return null;
  let var_core_value_sigA4E8 = var_core_value_sig38C5 === "below" ? {
    startOffset: var_core_value_sigC310.moveRange["endOffset"],
    endOffset: var_core_value_sigC310.moveRange["endOffset"]
  } : var_core_value_sigC310.menuRange;
  return {
    startOffset: var_core_value_sigA4E8.startOffset,
    endOffset: var_core_value_sigA4E8.endOffset,
    collapsed: var_core_value_sigA4E8.startOffset === var_core_value_sigA4E8.endOffset,
    segmentId: ((var_core_value_sigCCDC = var_core_value_sigC310.paragraph) == null ? undefined : var_core_value_sigCCDC.segmentId) ?? ""
  };
}
const G = {
    type: var_core_value_sig1FF6.COMMAND,
    id: "doc.command.menu-insert-shape",
    handler: async (var_core_value_sigDC07, var_core_value_sig3474) => {
      let var_core_value_sig4E80 = var_core_value_sigDC07.get(var_core_value_sigDAB9).getCurrentUnitOfType(var_core_value_sig9730.UNIVER_DOC);
      if (!var_core_value_sig4E80) return false;
      let var_core_value_sigD23B = var_core_value_sigDC07.get(var_core_value_sig8255),
        var_core_value_sig2B2A = var_core_value_sig4E80.getUnitId(),
        var_core_value_sig0B5C = var_core_value_sig3474.shapeId ?? var_core_value_sig8457(),
        var_core_value_sig7D42 = var_core_value_sig3474.width ?? var_core_value_sigF897,
        var_core_value_sig8FDE = var_core_value_sig3474.height ?? var_core_value_sigD755,
        var_core_value_sig78E6 = var_core_value_sig3474.shapeData ?? Gn(var_core_value_sig3474.value, var_core_value_sig3474.enhanceParams),
        var_core_value_sig541F = qn(var_core_value_sigDC07, var_core_value_sig2B2A, var_core_value_sig3474.paragraphMenuPlacement) ?? var_core_value_sigDC07.get(var_core_value_sigC860).getActiveTextRange();
      if (!var_core_value_sig541F) return false;
      let var_core_value_sig417B = Kn(var_core_value_sig4E80, var_core_value_sig541F);
      return var_core_value_sig417B ? !!var_core_value_sigD23B.syncExecuteCommand(var_core_value_sig034D.id, {
        unitId: var_core_value_sig2B2A,
        shapeId: var_core_value_sig0B5C,
        shapeType: var_core_value_sig3474.value,
        shapeData: var_core_value_sig78E6,
        transform: {
          width: var_core_value_sig7D42,
          height: var_core_value_sig8FDE
        },
        placement: {
          wrappingStyle: var_core_value_sig41F2.INLINE,
          anchor: var_core_value_sig417B
        }
      }) : false;
    }
  },
  Jn = "doc.shape.edit.panel",
  Yn = "docs-shape-ui.ribbon.shape-format",
  Xn = "doc.shape.object-list.panel",
  Zn = var_core_value_sig300B("SHAPE_TEXT"),
  Qn = "doc.shape.text.float-menu",
  $n = {
    id: "doc.operation.open-shape-object-list-panel",
    type: var_core_value_sig1FF6.COMMAND,
    handler: (var_core_value_sigAA90, var_core_value_sigE92D) => {
      let var_core_value_sig9940 = var_core_value_sigAA90.get(var_core_value_sig1F51),
        var_core_value_sig682D = var_core_value_sigAA90.get(var_core_value_sig5933),
        var_core_value_sig1435 = var_core_value_sigAA90.get(var_core_value_sig25A4);
      return (var_core_value_sigE92D == null ? undefined : var_core_value_sigE92D.value) === "close" ? (var_core_value_sig9940.close(Xn), true) : (var_core_value_sig9940.open({
        id: Xn,
        header: {
          title: var_core_value_sig682D.t("docs-shape-ui.objectListPanel.title")
        },
        children: {
          label: Xn
        },
        onClose: () => {
          var_core_value_sig1435.focusDrawing(null);
        },
        width: 360
      }), true);
    }
  },
  er = {
    type: var_core_value_sig1FF6.OPERATION,
    id: "doc.operation.open-doc-shape-format-panel",
    handler() {
      return true;
    }
  };
function tr(var_core_value_sig4082) {
  let var_core_value_sigC049 = var_core_value_sig4082.get(var_core_value_sig25A4).getFocusDrawings(),
    var_core_value_sigE5C3 = var_core_value_sigC049.length === 1 ? var_core_value_sigC049[0] : null;
  if (!var_core_value_sigE5C3 || var_core_value_sigE5C3.drawingType !== var_core_value_sigD9BB.DRAWING_SHAPE) return null;
  let var_core_value_sigCCAA = var_core_value_sig4082.get(var_core_value_sig0260),
    var_core_value_sigF32D = var_core_value_sigCCAA.getShapeTypeById(var_core_value_sigE5C3.unitId, var_core_value_sigE5C3.subUnitId, var_core_value_sigE5C3.drawingId),
    var_core_value_sig9427 = var_core_value_sigCCAA.getShapeDataById(var_core_value_sigE5C3.unitId, var_core_value_sigE5C3.subUnitId, var_core_value_sigE5C3.drawingId);
  return var_core_value_sigF32D === undefined || !var_core_value_sig9427 ? null : {
    drawing: var_core_value_sigE5C3,
    shapeData: var_core_value_sig9427,
    shapeType: var_core_value_sigF32D
  };
}
const nr = {
    id: "doc.operation.apply-shape-quick-style",
    type: var_core_value_sig1FF6.OPERATION,
    handler: (var_core_value_sig21F4, var_core_value_sigA345) => {
      let var_core_value_sigA468 = tr(var_core_value_sig21F4),
        var_core_value_sig1561 = var_core_value_sig1DF5((var_core_value_sigA345 == null ? undefined : var_core_value_sigA345.presetId) ?? (var_core_value_sigA345 == null ? undefined : var_core_value_sigA345.value) ?? "");
      if (!var_core_value_sigA468 || !var_core_value_sig1561 || var_core_value_sig1561.type !== var_core_value_sig90A3(var_core_value_sigA468.shapeData)) return false;
      let var_core_value_sigDF14 = var_core_value_sig90E5(var_core_value_sigA468.shapeData, var_core_value_sig1561);
      if (!var_core_value_sigDF14) return false;
      let {
        drawing: var_core_value_sig842F
      } = var_core_value_sigA468;
      return var_core_value_sig21F4.get(var_core_value_sig8255).executeCommand(var_core_value_sigD6D9.id, {
        unitId: var_core_value_sig842F.unitId,
        shapeId: var_core_value_sig842F.drawingId,
        shapeData: var_core_value_sigDF14,
        oldShapeJSON: {
          oldShapeData: var_core_value_sigA468.shapeData
        }
      });
    }
  },
  rr = {
    id: "doc.operation.update-shape-type",
    type: var_core_value_sig1FF6.OPERATION,
    handler: (var_core_value_sigC4C0, var_core_value_sig214A) => {
      let var_core_value_sigCCC3 = tr(var_core_value_sigC4C0),
        var_core_value_sig986E = (var_core_value_sig214A == null ? undefined : var_core_value_sig214A.shapeType) ?? (var_core_value_sig214A == null ? undefined : var_core_value_sig214A.value);
      if (!var_core_value_sigCCC3 || !var_core_value_sig986E || var_core_value_sig0483(var_core_value_sigCCC3.shapeType) || var_core_value_sig0483(var_core_value_sig986E)) return false;
      let var_core_value_sig537C = var_core_value_sig7000(var_core_value_sigCCC3.shapeData, var_core_value_sig986E);
      if (!var_core_value_sig537C) return false;
      let {
        drawing: var_core_value_sigBBBC
      } = var_core_value_sigCCC3;
      return var_core_value_sigC4C0.get(var_core_value_sig8255).executeCommand(var_core_value_sigD6D9.id, {
        unitId: var_core_value_sigBBBC.unitId,
        shapeId: var_core_value_sigBBBC.drawingId,
        shapeType: var_core_value_sig986E,
        shapeData: var_core_value_sig537C,
        replaceShapeData: true,
        oldShapeJSON: {
          oldShapeType: var_core_value_sigCCC3.shapeType,
          oldShapeData: var_core_value_sigCCC3.shapeData
        }
      });
    }
  };
function K(var_core_value_sig5440, var_core_value_sigE28B) {
  return function (var_core_value_sigB2CE, var_core_value_sig443C) {
    var_core_value_sigE28B(var_core_value_sigB2CE, var_core_value_sig443C, var_core_value_sig5440);
  };
}
function q(var_core_value_sig0FD9, var_core_value_sig5649, var_core_value_sigAF82, var_core_value_sig21A2) {
  var var_core_value_sig5C1D = arguments.length,
    var_core_value_sig4CBA = var_core_value_sig5C1D < 3 ? var_core_value_sig5649 : var_core_value_sig21A2 === null ? var_core_value_sig21A2 = Object.getOwnPropertyDescriptor(var_core_value_sig5649, var_core_value_sigAF82) : var_core_value_sig21A2,
    var_core_value_sig8E65;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig4CBA = Reflect.decorate(var_core_value_sig0FD9, var_core_value_sig5649, var_core_value_sigAF82, var_core_value_sig21A2);else {
    for (var var_core_value_sig772C = var_core_value_sig0FD9.length - 1; var_core_value_sig772C >= 0; var_core_value_sig772C--) (var_core_value_sig8E65 = var_core_value_sig0FD9[var_core_value_sig772C]) && (var_core_value_sig4CBA = (var_core_value_sig5C1D < 3 ? var_core_value_sig8E65(var_core_value_sig4CBA) : var_core_value_sig5C1D > 3 ? var_core_value_sig8E65(var_core_value_sig5649, var_core_value_sigAF82, var_core_value_sig4CBA) : var_core_value_sig8E65(var_core_value_sig5649, var_core_value_sigAF82)) || var_core_value_sig4CBA);
  }
  return var_core_value_sig5C1D > 3 && var_core_value_sig4CBA && Object.defineProperty(var_core_value_sig5649, var_core_value_sigAF82, var_core_value_sig4CBA), var_core_value_sig4CBA;
}
let ir = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sig39B1, var_core_value_sig210D) {
    super(), this._clipService = var_core_value_sig39B1, this._drawingManagerService = var_core_value_sig210D, this._registerImageShapeClipDelegate(), this._clipService["setCanUseShapeClip"](true), this.disposeWithMe({
      dispose: () => this._clipService["setCanUseShapeClip"](false)
    });
  }
  _registerImageShapeClipDelegate() {
    let var_core_value_sigB4B4 = new Map(),
      var_core_value_sigD407 = this._clipService["registerClipDelegate"]((var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8, var_core_value_sigE9A7, var_core_value_sigBECE) => {
        let var_core_value_sig1B22 = var_core_value_sig877E;
        if (var_core_value_sig1B22 === var_core_value_sig2B74.None || var_core_value_sig877E === "custom") return false;
        try {
          let var_core_value_sig1A0F = var_core_value_sigB4B4.get(var_core_value_sig877E);
          return var_core_value_sig1A0F || (var_core_value_sig1A0F = new var_core_value_sig1F8A(var_core_value_sig1B22, "clip-" + var_core_value_sig877E), var_core_value_sigB4B4.set(var_core_value_sig877E, var_core_value_sig1A0F)), var_core_value_sig1A0F.clearAdjustValue(), var_core_value_sigBECE && Object.keys(var_core_value_sigBECE).length > 0 && var_core_value_sig1A0F.setShapeData({
            adjustValues: var_core_value_sigBECE
          }, true), var_core_value_sig1A0F.updateContext({
            width: var_core_value_sig20C8,
            height: var_core_value_sigE9A7
          }), var_core_value_sig1A0F.buildClipPath(var_core_value_sig2DAB, {
            left: 0,
            top: 0,
            width: var_core_value_sig20C8,
            height: var_core_value_sigE9A7
          });
        } catch {
          return false;
        }
      });
    this.disposeWithMe(var_core_value_sigD407), this.disposeWithMe({
      dispose: () => var_core_value_sigB4B4.clear()
    });
  }
  clipByShape(var_core_value_sig63F3, var_core_value_sig6A71, var_core_value_sig3BF6, var_core_value_sig38CE, var_core_value_sig62B7) {
    let var_core_value_sig37A8 = this._drawingManagerService["getDrawingData"](var_core_value_sig63F3, var_core_value_sig6A71)[var_core_value_sig3BF6];
    !var_core_value_sig37A8 || var_core_value_sig37A8.drawingType !== var_core_value_sigD9BB.DRAWING_IMAGE || this._drawingManagerService["featurePluginUpdateNotification"]([{
      ...var_core_value_sig37A8,
      prstGeom: var_core_value_sig38CE,
      adjustValues: var_core_value_sig62B7
    }]);
  }
};
ir = q([K(0, var_core_value_sig9CF7(var_core_value_sig8E3E)), K(1, var_core_value_sig9CF7(var_core_value_sig25A4))], ir);
const ar = "doc.shape.picker.component",
  or = "doc.image-clip.shape-picker.component";
function sr({
  onShapeClick: var_core_value_sigF309,
  excludeGroups: var_core_value_sig44F9
}) {
  return var_core_value_sigE863(var_core_value_sigEAE1, {
    excludeGroups: var_core_value_sig44F9,
    onShapeClick: var_core_value_sigF309,
    scrollContainer: "parent"
  });
}
function cr() {
  let var_core_value_sigE532 = var_core_value_sig68DA(var_core_value_sig25A4),
    var_core_value_sigF381 = var_core_value_sig68DA(ir);
  return var_core_value_sigE863(var_core_value_sigEEA6, {
    buttonLabel: "docs-shape-ui.crop.shape",
    excludeGroups: [var_core_value_sig7A15.Line],
    onShapeClick: var_core_value_sigA90D => {
      let var_core_value_sig7A3C = var_core_value_sigE532.getFocusDrawings().find(var_core_value_sig7F72 => var_core_value_sig7F72.drawingType === var_core_value_sigD9BB.DRAWING_IMAGE);
      if (!var_core_value_sig7A3C) return;
      let {
        unitId: var_core_value_sig0511,
        subUnitId: var_core_value_sig1F44,
        drawingId: var_core_value_sigCB04
      } = var_core_value_sig7A3C;
      var_core_value_sigF381.clipByShape(var_core_value_sig0511, var_core_value_sig1F44, var_core_value_sigCB04, var_core_value_sigA90D.type);
    }
  });
}
function lr() {
  let var_core_value_sigCB92 = var_core_value_sig68DA(var_core_value_sig9B3D),
    var_core_value_sigC844 = var_core_value_sig68DA(var_core_value_sig25A4),
    var_core_value_sig2ED4 = var_core_value_sig68DA(var_core_value_sigDAB9),
    var_core_value_sig0477 = var_core_value_sigC844.getFocusDrawings()[0],
    var_core_value_sig6FDF = var_core_value_sig0477 ? var_core_value_sig2ED4.getUnitType(var_core_value_sig0477.unitId) : undefined,
    var_core_value_sig27C4 = var_core_value_sig6FDF === var_core_value_sig9730.UNIVER_DOC ? or : var_core_value_sig6FDF === var_core_value_sig9730.UNIVER_SHEET ? "sheet.image-clip.shape-picker.component" : undefined,
    var_core_value_sig3E1A = var_core_value_sig27C4 ? var_core_value_sigCB92.get(var_core_value_sig27C4) : undefined;
  return var_core_value_sig3E1A ? var_core_value_sigE863(var_core_value_sig3E1A, {}) : null;
}
function ur({
  paragraphMenuPlacement: var_core_value_sig7FB0
}) {
  let var_core_value_sig5215 = var_core_value_sig68DA(var_core_value_sig8255);
  return var_core_value_sigE863(sr, {
    onShapeClick: var_core_value_sig947E => {
      var_core_value_sig5215.executeCommand(G.id, {
        paragraphMenuPlacement: var_core_value_sig7FB0,
        value: var_core_value_sig947E.type,
        enhanceParams: {
          endArrow: var_core_value_sig947E.endArrow,
          startArrow: var_core_value_sig947E.startArrow,
          horizontal: var_core_value_sig947E.horizontal,
          vertical: var_core_value_sig947E.vertical
        }
      });
    }
  });
}
function dr(var_core_value_sig5204) {
  return var_core_value_sig4545 => ({
    id: G.id,
    type: var_core_value_sigF1D1.SELECTOR,
    selections: [{
      label: {
        name: ar,
        hoverable: false,
        selectable: false,
        props: var_core_value_sig5204 ? {
          id: G.id,
          paragraphMenuPlacement: var_core_value_sig5204
        } : {
          id: G.id
        }
      }
    }],
    icon: "ShapeIcon",
    title: "docs-shape-ui.insertShape",
    tooltip: "docs-shape-ui.insertShape",
    hidden$: var_core_value_sig6CBB(var_core_value_sig4545, var_core_value_sig9730.UNIVER_DOC)
  });
}
const fr = dr(),
  pr = dr("below"),
  mr = dr("target");
function hr(var_core_value_sig5E11) {
  return {
    id: $n.id,
    type: var_core_value_sigF1D1.BUTTON,
    icon: "ObjectLayersIcon",
    title: "docs-shape-ui.objectListPanel.open",
    tooltip: "docs-shape-ui.objectListPanel.open",
    hidden$: var_core_value_sig6CBB(var_core_value_sig5E11, var_core_value_sig9730.UNIVER_DOC)
  };
}
function gr(var_core_value_sig4D58, var_core_value_sig2DBD, var_core_value_sig424E, var_core_value_sigF481, var_core_value_sigD7F2, var_core_value_sig7CF3) {
  let var_core_value_sig9DC6 = {
    unitId: var_core_value_sig2DBD,
    shapeId: var_core_value_sigF481,
    shapeData: var_core_value_sig7CF3,
    oldShapeJSON: var_core_value_sigD7F2
  };
  return var_core_value_sig4D58.executeCommand(var_core_value_sigD6D9.id, var_core_value_sig9DC6);
}
function _r(var_core_value_sig6643, var_core_value_sig4124, var_core_value_sigBF1C, var_core_value_sigEEEF, var_core_value_sig9A01, var_core_value_sig674F) {
  let var_core_value_sigC8F6 = {
    unitId: var_core_value_sig4124,
    shapeId: var_core_value_sigEEEF,
    shapeData: var_core_value_sig674F,
    oldShapeJSON: var_core_value_sig9A01
  };
  return var_core_value_sig6643.executeCommand(var_core_value_sigD6D9.id, var_core_value_sigC8F6);
}
const vr = "docs-shape-ui.shape-format.quick-style-gallery",
  yr = "docs-shape-ui.shape-format.style-ribbon-control",
  br = "docs-shape-ui.shape-format.text-ribbon-control",
  xr = "docs-shape-ui.shape-format.formula-ribbon-control",
  Sr = "docs-shape-ui.shape-format.wrapping-style-label",
  Cr = [{
    value: var_core_value_sig41F2.INLINE,
    label: "docs-shape-ui.textWrap.inline",
    icon: "DocsShapeWrapInlineIcon"
  }, {
    value: var_core_value_sig41F2.WRAP_SQUARE,
    label: "docs-shape-ui.textWrap.square",
    icon: "DocsShapeWrapSquareIcon"
  }, {
    value: var_core_value_sig41F2.WRAP_TOP_AND_BOTTOM,
    label: "docs-shape-ui.textWrap.topAndBottom",
    icon: "DocsShapeWrapTopBottomIcon"
  }, {
    value: var_core_value_sig41F2.BEHIND_TEXT,
    label: "docs-shape-ui.textWrap.behindText",
    icon: "DocsShapeWrapBehindTextIcon"
  }, {
    value: var_core_value_sig41F2.IN_FRONT_OF_TEXT,
    label: "docs-shape-ui.textWrap.inFrontText",
    icon: "DocsShapeWrapInFrontOfTextIcon"
  }];
function wr() {
  let var_core_value_sig8A26 = var_core_value_sig68DA(var_core_value_sig8255),
    var_core_value_sigD073 = var_core_value_sig68DA(var_core_value_sig25A4),
    var_core_value_sigF631 = var_core_value_sig68DA(var_core_value_sig0260),
    var_core_value_sig2278 = () => {
      var var_core_value_sigF39A;
      let var_core_value_sigF79C = var_core_value_sigD073.getFocusDrawings();
      if (var_core_value_sigF79C.length !== 1 || ((var_core_value_sigF39A = var_core_value_sigF79C[0]) == null ? undefined : var_core_value_sigF39A.drawingType) !== var_core_value_sigD9BB.DRAWING_SHAPE) return null;
      let {
          unitId: var_core_value_sig2E54,
          subUnitId: var_core_value_sig7658,
          drawingId: var_core_value_sigDCF5
        } = var_core_value_sigF79C[0],
        var_core_value_sigC786 = var_core_value_sigF631.getShapeTypeById(var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sigDCF5),
        var_core_value_sigC0D9 = var_core_value_sigF631.getShapeDataById(var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sigDCF5);
      return var_core_value_sigC786 === undefined || !var_core_value_sigC0D9 ? null : {
        unitId: var_core_value_sig2E54,
        subUnitId: var_core_value_sig7658,
        drawingId: var_core_value_sigDCF5,
        shapeType: var_core_value_sigC786,
        shapeData: var_core_value_sigC0D9
      };
    },
    var_core_value_sig7053 = var_core_value_sig64D8(() => new var_core_value_sig93D6(var_core_value_sig7B2A => {
      let var_core_value_sig06CD = () => var_core_value_sig7B2A.next(var_core_value_sig2278()),
        var_core_value_sigA5F1 = var_core_value_sigD073.focus$["subscribe"](var_core_value_sig06CD),
        var_core_value_sig97A2 = var_core_value_sig8A26.onCommandExecuted(var_core_value_sigFBA4 => {
          var_core_value_sigFBA4.id === var_core_value_sig2637.id && var_core_value_sig06CD();
        });
      return var_core_value_sig06CD(), () => {
        var_core_value_sigA5F1.unsubscribe(), var_core_value_sig97A2.dispose();
      };
    }), var_core_value_sig2278(), false, [var_core_value_sig8A26, var_core_value_sigF631, var_core_value_sigD073]);
  return {
    selection: var_core_value_sig7053,
    updateShapeData: var_core_value_sigF051 => {
      var_core_value_sig7053 && gr(var_core_value_sig8A26, var_core_value_sig7053.unitId, var_core_value_sig7053.subUnitId, var_core_value_sig7053.drawingId, {
        oldShapeData: var_core_value_sig7053.shapeData
      }, var_core_value_sigF051);
    }
  };
}
function Tr() {
  let {
    selection: var_core_value_sig52F1,
    updateShapeData: var_core_value_sig1E74
  } = wr();
  return var_core_value_sig52F1 ? var_core_value_sigE863(var_core_value_sig0442, {
    shapeData: var_core_value_sig52F1.shapeData,
    shapeType: var_core_value_sig52F1.shapeType,
    onUpdateShapeData: var_core_value_sig1E74
  }) : null;
}
function Er() {
  let var_core_value_sig1E84 = var_core_value_sig68DA(var_core_value_sig8255),
    var_core_value_sig133B = var_core_value_sig68DA(var_core_value_sig5933),
    {
      selection: var_core_value_sig69B8
    } = wr();
  return var_core_value_sig69B8 ? var_core_value_sigE863(var_core_value_sigC69F, {
    type: var_core_value_sig90A3(var_core_value_sig69B8.shapeData),
    ariaLabel: var_core_value_sig133B.t("docs-shape-ui.quickStyles"),
    activePresetId: var_core_value_sig28BE(var_core_value_sig69B8.shapeData),
    onSelect: var_core_value_sig5825 => var_core_value_sig1E84.executeCommand(nr.id, {
      presetId: var_core_value_sig5825
    })
  }) : null;
}
function Dr() {
  let {
    selection: var_core_value_sig983D,
    updateShapeData: var_core_value_sig9A03
  } = wr();
  return var_core_value_sig983D ? var_core_value_sigE863(var_core_value_sig64D5, {
    fontFamilyPopupDataComponent: "docs-shape-format-font-family-menu",
    shapeData: var_core_value_sig983D.shapeData,
    onUpdateShapeData: var_core_value_sig9A03
  }) : null;
}
function Or() {
  var var_core_value_sig3363;
  let {
      selection: var_core_value_sigF64A,
      updateShapeData: var_core_value_sig25EC
    } = wr(),
    var_core_value_sigA790 = var_core_value_sig1660({
      hostType: var_core_value_sig9730.UNIVER_DOC,
      unitId: (var_core_value_sigF64A == null ? undefined : var_core_value_sigF64A.unitId) ?? "",
      subUnitId: (var_core_value_sigF64A == null ? undefined : var_core_value_sigF64A.subUnitId) ?? "",
      shapeId: (var_core_value_sigF64A == null ? undefined : var_core_value_sigF64A.drawingId) ?? "",
      shapeData: var_core_value_sigF64A == null ? undefined : var_core_value_sigF64A.shapeData,
      registerBinding: false,
      showLabels: true,
      dropdownSide: "bottom",
      onUpdateBinding: var_core_value_sig4EB7 => var_core_value_sig25EC({
        formulaBinding: var_core_value_sig4EB7
      })
    }),
    var_core_value_sig9A5E = ((var_core_value_sig3363 = var_core_value_sigA790.extensionGroups) == null ? undefined : var_core_value_sig3363.flatMap(var_core_value_sig73AF => var_core_value_sig73AF.actions).filter(var_core_value_sig548A => var_core_value_sig548A.visible !== false)) ?? [];
  return var_core_value_sigF64A != null && var_core_value_sigF64A.shapeData["formulaBinding"] ? var_core_value_sigE863(var_core_value_sigF204, {
    actions: var_core_value_sig9A5E,
    panel: var_core_value_sigA790.panel
  }) : null;
}
function kr({
  value: var_core_value_sig01B9
}) {
  let var_core_value_sigD6A9 = var_core_value_sig68DA(var_core_value_sig5933),
    var_core_value_sig0FCF = Cr.find(var_core_value_sigE026 => var_core_value_sigE026.value === var_core_value_sig01B9) ?? Cr[0];
  return var_core_value_sig0FCF ? var_core_value_sigE863("span", {
    children: var_core_value_sigD6A9.t(var_core_value_sig0FCF.label)
  }) : null;
}
const Ar = "docs-shape-ui.ribbon.shape-format.style-control",
  jr = "docs-shape-ui.ribbon.shape-format.text-control",
  Mr = "docs-shape-ui.ribbon.shape-format.formula-control",
  Nr = "docs-shape-ui.ribbon.shape-format.arrange-forward",
  Pr = "docs-shape-ui.ribbon.shape-format.arrange-backward",
  Fr = "docs-shape-ui.ribbon.shape-format.arrange-front",
  Ir = "docs-shape-ui.ribbon.shape-format.arrange-back",
  Lr = "docs-shape-ui.ribbon.shape-format.wrapping-style";
function Rr(var_core_value_sigCF96) {
  let var_core_value_sigC4E9 = var_core_value_sigCF96.get(var_core_value_sig8255),
    var_core_value_sigF612 = var_core_value_sigCF96.get(var_core_value_sig25A4),
    var_core_value_sigAA6C = var_core_value_sigCF96.get(var_core_value_sig0260);
  return new var_core_value_sig93D6(var_core_value_sig339E => {
    let var_core_value_sig7550 = () => {
        let var_core_value_sig07E9 = J(var_core_value_sigCF96),
          var_core_value_sig4F59 = var_core_value_sig07E9 ? var_core_value_sigAA6C.getShapeDataById(var_core_value_sig07E9.unitId, var_core_value_sig07E9.subUnitId, var_core_value_sig07E9.drawingId) : null;
        var_core_value_sig339E.next(var_core_value_sig4F59 ? var_core_value_sig28BE(var_core_value_sig4F59) ?? "" : "");
      },
      var_core_value_sig2983 = var_core_value_sigF612.focus$["subscribe"](var_core_value_sig7550),
      var_core_value_sigE1B0 = var_core_value_sigC4E9.onCommandExecuted(var_core_value_sigF564 => {
        var_core_value_sigF564.id === var_core_value_sig2637.id && var_core_value_sig7550();
      });
    return var_core_value_sig7550(), () => {
      var_core_value_sig2983.unsubscribe(), var_core_value_sigE1B0.dispose();
    };
  });
}
function J(var_core_value_sig8BFA) {
  var var_core_value_sig236B;
  let var_core_value_sig1951 = var_core_value_sig8BFA.get(var_core_value_sig25A4).getFocusDrawings();
  return var_core_value_sig1951.length === 1 && ((var_core_value_sig236B = var_core_value_sig1951[0]) == null ? undefined : var_core_value_sig236B.drawingType) === var_core_value_sigD9BB.DRAWING_SHAPE ? var_core_value_sig1951[0] : null;
}
function zr(var_core_value_sigFEA0) {
  return (var_core_value_sigFEA0 == null ? undefined : var_core_value_sigFEA0.layoutType) === var_core_value_sig4E30.WRAP_NONE ? var_core_value_sigFEA0.behindDoc === var_core_value_sig854B.TRUE ? var_core_value_sig41F2.BEHIND_TEXT : var_core_value_sig41F2.IN_FRONT_OF_TEXT : (var_core_value_sigFEA0 == null ? undefined : var_core_value_sigFEA0.layoutType) === var_core_value_sig4E30.WRAP_SQUARE ? var_core_value_sig41F2.WRAP_SQUARE : (var_core_value_sigFEA0 == null ? undefined : var_core_value_sigFEA0.layoutType) === var_core_value_sig4E30.WRAP_TOP_AND_BOTTOM ? var_core_value_sig41F2.WRAP_TOP_AND_BOTTOM : var_core_value_sig41F2.INLINE;
}
function Br(var_core_value_sig931A) {
  let var_core_value_sigEE7D = var_core_value_sig931A.get(var_core_value_sig8255),
    var_core_value_sig3585 = var_core_value_sig931A.get(var_core_value_sig25A4),
    var_core_value_sig31A8 = var_core_value_sig931A.get(var_core_value_sigDAB9);
  return new var_core_value_sig93D6(var_core_value_sigD4FF => {
    let var_core_value_sig1E5B = () => {
        var var_core_value_sig8CFA;
        let var_core_value_sig2E11 = J(var_core_value_sig931A),
          var_core_value_sig5B69 = var_core_value_sig2E11 ? var_core_value_sig31A8.getUnit(var_core_value_sig2E11.unitId, var_core_value_sig9730.UNIVER_DOC) : undefined;
        var_core_value_sigD4FF.next(zr(var_core_value_sig2E11 ? var_core_value_sig5B69 == null || (var_core_value_sig8CFA = var_core_value_sig5B69.getSnapshot().drawings) == null ? undefined : var_core_value_sig8CFA[var_core_value_sig2E11.drawingId] : undefined));
      },
      var_core_value_sigB680 = var_core_value_sig3585.focus$["subscribe"](var_core_value_sig1E5B),
      var_core_value_sig1F64 = var_core_value_sigEE7D.onCommandExecuted(var_core_value_sigB098 => {
        var_core_value_sigB098.id === var_core_value_sigE64C.id && var_core_value_sig1E5B();
      });
    return var_core_value_sig1E5B(), () => {
      var_core_value_sigB680.unsubscribe(), var_core_value_sig1F64.dispose();
    };
  }).pipe(var_core_value_sigDD05());
}
function Vr(var_core_value_sigA4DA, var_core_value_sig6FC0 = false) {
  let var_core_value_sig6217 = var_core_value_sigA4DA.get(var_core_value_sig8255),
    var_core_value_sigB805 = var_core_value_sigA4DA.get(var_core_value_sig25A4),
    var_core_value_sig4FAE = var_core_value_sigA4DA.get(var_core_value_sig0260);
  return new var_core_value_sig93D6(var_core_value_sigDD1C => {
    let var_core_value_sig2C39 = () => {
        let var_core_value_sigCE71 = J(var_core_value_sigA4DA);
        if (!var_core_value_sigCE71) {
          var_core_value_sigDD1C.next(true);
          return;
        }
        let var_core_value_sig21D8 = var_core_value_sig4FAE.getShapeDataById(var_core_value_sigCE71.unitId, var_core_value_sigCE71.subUnitId, var_core_value_sigCE71.drawingId);
        var_core_value_sigDD1C.next(!var_core_value_sig21D8 || var_core_value_sig6FC0 && var_core_value_sig21D8.formulaBinding == null);
      },
      var_core_value_sigB7D1 = var_core_value_sigB805.focus$["subscribe"](var_core_value_sig2C39),
      var_core_value_sig64F0 = var_core_value_sig6217.onCommandExecuted(var_core_value_sig2B65 => {
        var_core_value_sig2B65.id === var_core_value_sig2637.id && var_core_value_sig2C39();
      });
    return var_core_value_sig2C39(), () => {
      var_core_value_sigB7D1.unsubscribe(), var_core_value_sig64F0.dispose();
    };
  });
}
function Hr(var_core_value_sig1FCC) {
  let var_core_value_sigB7F9 = var_core_value_sig1FCC.get(var_core_value_sig25A4),
    var_core_value_sigB1A2 = var_core_value_sig1FCC.get(var_core_value_sig0260);
  return var_core_value_sigB7F9.focus$["pipe"](var_core_value_sig57DF(var_core_value_sigB7F9.getFocusDrawings()), var_core_value_sig3932(() => {
    let var_core_value_sig85B1 = J(var_core_value_sig1FCC),
      var_core_value_sig3141 = var_core_value_sig85B1 ? var_core_value_sigB1A2.getShapeTypeById(var_core_value_sig85B1.unitId, var_core_value_sig85B1.subUnitId, var_core_value_sig85B1.drawingId) : undefined;
    return var_core_value_sig3141 === undefined || var_core_value_sig0483(var_core_value_sig3141);
  }));
}
function Ur(var_core_value_sig526D) {
  return {
    id: nr.id,
    type: var_core_value_sigF1D1.SELECTOR,
    icon: "PaintIcon",
    title: "shape-editor-ui.toolbar.quickStyles",
    tooltip: "shape-editor-ui.toolbar.quickStyles",
    selections: [{
      label: {
        name: vr,
        hoverable: false,
        selectable: false
      }
    }],
    value$: Rr(var_core_value_sig526D),
    hidden$: Vr(var_core_value_sig526D)
  };
}
function Wr(var_core_value_sigBDB5) {
  return {
    id: rr.id,
    type: var_core_value_sigF1D1.SELECTOR,
    icon: "ShapeIcon",
    title: "shape-editor-ui.toolbar.changeShape",
    tooltip: "shape-editor-ui.toolbar.changeShape",
    slot: true,
    selections: [{
      label: {
        name: var_core_value_sigD494,
        hoverable: false,
        selectable: false
      }
    }],
    hidden$: Hr(var_core_value_sigBDB5)
  };
}
function Gr(var_core_value_sig59CE, var_core_value_sig3AD7, var_core_value_sig04E4 = false) {
  return var_core_value_sig2162 => ({
    id: var_core_value_sig59CE,
    type: var_core_value_sigF1D1.BUTTON,
    label: {
      name: var_core_value_sig3AD7,
      hoverable: false,
      selectable: false
    },
    hidden$: Vr(var_core_value_sig2162, var_core_value_sig04E4)
  });
}
const Kr = Gr(Ar, yr),
  qr = Gr(jr, br),
  Jr = Gr(Mr, xr, true);
function Yr(var_core_value_sigD8F0) {
  return {
    id: Lr,
    type: var_core_value_sigF1D1.SELECTOR,
    icon: Cr[0].icon,
    label: Sr,
    selectionsCommandId: var_core_value_sig32DD.id,
    selections: Cr.map(({
      icon: var_core_value_sig2EAD,
      label: var_core_value_sig6774,
      value: var_core_value_sig340D
    }) => ({
      value: var_core_value_sig340D,
      label: var_core_value_sig6774,
      icon: var_core_value_sig2EAD,
      params: () => {
        let var_core_value_sigD7EA = J(var_core_value_sigD8F0);
        return var_core_value_sigD7EA ? {
          unitId: var_core_value_sigD7EA.unitId,
          subUnitId: var_core_value_sigD7EA.subUnitId,
          drawings: [{
            unitId: var_core_value_sigD7EA.unitId,
            subUnitId: var_core_value_sigD7EA.subUnitId,
            drawingId: var_core_value_sigD7EA.drawingId
          }],
          wrappingStyle: var_core_value_sig340D
        } : undefined;
      }
    })),
    value$: Br(var_core_value_sigD8F0),
    hidden$: Vr(var_core_value_sigD8F0)
  };
}
function Xr(var_core_value_sig1475, var_core_value_sig08B7, var_core_value_sig2008, var_core_value_sig496B) {
  return var_core_value_sig82D4 => ({
    id: var_core_value_sig1475,
    commandId: var_core_value_sig10D3.id,
    type: var_core_value_sigF1D1.BUTTON,
    icon: var_core_value_sig2008,
    title: var_core_value_sig496B,
    tooltip: var_core_value_sig496B,
    hidden$: Vr(var_core_value_sig82D4),
    params: () => {
      let var_core_value_sigB33B = J(var_core_value_sig82D4);
      return var_core_value_sigB33B ? {
        unitId: var_core_value_sigB33B.unitId,
        subUnitId: var_core_value_sigB33B.subUnitId,
        drawingIds: [var_core_value_sigB33B.drawingId],
        arrangeType: var_core_value_sig08B7
      } : undefined;
    }
  });
}
const Zr = Xr(Nr, var_core_value_sig0224.forward, "MoveUpIcon", "shape-editor-ui.arrange.forward"),
  Qr = Xr(Pr, var_core_value_sig0224.backward, "MoveDownIcon", "shape-editor-ui.arrange.backward"),
  $r = Xr(Fr, var_core_value_sig0224.front, "TopmostIcon", "shape-editor-ui.arrange.front"),
  ei = Xr(Ir, var_core_value_sig0224.back, "BottomIcon", "shape-editor-ui.arrange.back");
function ti(var_core_value_sig7161) {
  return {
    id: er.id,
    type: var_core_value_sigF1D1.BUTTON,
    icon: "ShapeFormatSettingIcon",
    title: "docs-shape-ui.formatShape",
    tooltip: "docs-shape-ui.formatShape",
    hidden$: Vr(var_core_value_sig7161),
    params: () => {
      let var_core_value_sigBDE4 = J(var_core_value_sig7161);
      return var_core_value_sigBDE4 ? {
        unitId: var_core_value_sigBDE4.unitId,
        subUnitId: var_core_value_sigBDE4.subUnitId,
        drawingId: var_core_value_sigBDE4.drawingId
      } : undefined;
    }
  };
}
const ni = {
    [var_core_value_sig370E.RIBBON]: {
      [Yn]: {
        order: 100,
        title: "docs-shape-ui.formatShape",
        contextual: true,
        "docs-shape-ui.ribbon.shape-format.quick-styles": {
          order: 0,
          [nr.id]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              showLabel: true
            },
            menuItemFactory: Ur
          },
          [rr.id]: {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1,
              showLabel: true
            },
            menuItemFactory: Wr
          }
        },
        "docs-shape-ui.ribbon.shape-format.style": {
          order: 1,
          [Ar]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 104
            },
            menuItemFactory: Kr
          }
        },
        "docs-shape-ui.ribbon.shape-format.text": {
          order: 2,
          [jr]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 344
            },
            menuItemFactory: qr
          }
        },
        "docs-shape-ui.ribbon.shape-format.arrange": {
          order: 3,
          [Lr]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              columnSpan: 2,
              showLabel: true
            },
            menuItemFactory: Yr
          },
          [Nr]: {
            order: 1,
            gridLayout: {
              row: 1,
              column: 3
            },
            menuItemFactory: Zr
          },
          [Pr]: {
            order: 2,
            gridLayout: {
              row: 2,
              column: 3
            },
            menuItemFactory: Qr
          },
          [Fr]: {
            order: 3,
            gridLayout: {
              row: 1,
              column: 4
            },
            menuItemFactory: $r
          },
          [Ir]: {
            order: 4,
            gridLayout: {
              row: 2,
              column: 4
            },
            menuItemFactory: ei
          }
        },
        "docs-shape-ui.ribbon.shape-format.formula": {
          order: 4,
          [Mr]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              rowSpan: 2,
              width: 120
            },
            menuItemFactory: Jr
          }
        },
        "docs-shape-ui.ribbon.shape-format.advanced": {
          order: 5,
          [er.id]: {
            order: 0,
            gridLayout: {
              row: 1,
              column: 1,
              showLabel: true
            },
            menuItemFactory: ti
          },
          [var_core_value_sig9678.id]: {
            order: 1,
            gridLayout: {
              row: 2,
              column: 1,
              showLabel: true
            },
            menuItemFactory: var_core_value_sig7E85
          }
        }
      }
    }
  },
  ri = {
    [var_core_value_sigDE14.MEDIA]: {
      [G.id]: {
        order: 4,
        menuItemFactory: var_core_value_sig2AB8 => ({
          ...fr(var_core_value_sig2AB8),
          title: undefined
        })
      }
    },
    [var_core_value_sigDE14.OTHERS]: {
      [$n.id]: {
        order: 0,
        gridLayout: {
          row: 1,
          column: 1,
          rowSpan: 2,
          showLabel: true
        },
        menuItemFactory: hr
      }
    },
    [var_core_value_sigEE12.PARAGRAPH]: {
      [var_core_value_sigC1CF.LAYOUT]: {
        [var_core_value_sig6806]: {
          [G.id]: {
            replace: true,
            order: 8,
            menuItemFactory: pr
          }
        }
      },
      [var_core_value_sig44DF]: {
        [var_core_value_sigC1CF.LAYOUT]: {
          [G.id]: {
            replace: true,
            order: 8,
            menuItemFactory: pr
          }
        }
      },
      [var_core_value_sig4406]: {
        [var_core_value_sigC1CF.LAYOUT]: {
          [G.id]: {
            replace: true,
            order: 8,
            menuItemFactory: mr
          }
        }
      },
      [var_core_value_sig7B9E]: {
        insert: {
          [G.id]: {
            replace: true,
            order: 2,
            menuItemFactory: fr
          }
        }
      },
      [var_core_value_sig7E48]: {
        insert: {
          [G.id + ".below"]: {
            replace: true,
            order: 2,
            menuItemFactory: pr
          }
        }
      }
    }
  };
var ii = "@univerjs-pro/docs-shape-ui",
  ai = "1.0.0-insiders.20260907-70fc579";
const oi = {
    type: var_core_value_sig1FF6.OPERATION,
    id: "doc.operation.close-doc-shape-format-panel",
    handler() {
      return true;
    }
  },
  si = {};
function ci(var_core_value_sig3FCF) {
  return var_core_value_sig3FCF.trim() || undefined;
}
function li(var_core_value_sig675A, var_core_value_sig837F, var_core_value_sig9D6E) {
  var var_core_value_sigB205, var_core_value_sigBF78;
  return ((var_core_value_sigB205 = var_core_value_sig675A.name) == null ? undefined : var_core_value_sigB205.trim()) || ((var_core_value_sigBF78 = var_core_value_sig675A.title) == null ? undefined : var_core_value_sigBF78.trim()) || var_core_value_sig4BFF(var_core_value_sig9D6E, var_core_value_sig8078(var_core_value_sig675A.drawingType)) + "\x20" + (var_core_value_sig837F + 1);
}
function ui() {
  let var_core_value_sig8AF3 = var_core_value_sig68DA(var_core_value_sig5933),
    var_core_value_sigA0CC = var_core_value_sig68DA(var_core_value_sig8255),
    var_core_value_sigB3A1 = var_core_value_sig68DA(var_core_value_sigDAB9),
    var_core_value_sig1FB9 = var_core_value_sig68DA(var_core_value_sigA724),
    var_core_value_sig53A9 = var_core_value_sig68DA(var_core_value_sig25A4),
    var_core_value_sigDACD = var_core_value_sig68DA(var_core_value_sig27B7),
    [, var_core_value_sig691E] = var_core_value_sigA1AC(var_core_value_sig7DF1 => var_core_value_sig7DF1 + 1, 0),
    var_core_value_sigD6D6 = var_core_value_sigB3A1.getCurrentUnitOfType(var_core_value_sig9730.UNIVER_DOC),
    var_core_value_sig0347 = (var_core_value_sigD6D6 == null ? undefined : var_core_value_sigD6D6.getUnitId()) ?? "",
    var_core_value_sig52A3 = var_core_value_sig0347,
    var_core_value_sigAD91 = var_core_value_sig64D8(() => var_core_value_sig53A9.focus$, var_core_value_sig53A9.getFocusDrawings(), false, [var_core_value_sig53A9]);
  var_core_value_sigFD9D(() => {
    let var_core_value_sigDC86 = var_core_value_sigA0CC.onCommandExecuted(() => var_core_value_sig691E());
    return () => var_core_value_sigDC86.dispose();
  }, [var_core_value_sigA0CC]);
  let var_core_value_sigF64E = var_core_value_sigA2A4(() => var_core_value_sigEC1A(var_core_value_sig8AF3), [var_core_value_sig8AF3]),
    var_core_value_sig9B3D1 = var_core_value_sig0347 ? var_core_value_sig1FB9.getDrawingData(var_core_value_sig0347, var_core_value_sig52A3) : {},
    var_core_value_sigB217 = (var_core_value_sig0347 ? var_core_value_sig1FB9.getDrawingOrder(var_core_value_sig0347, var_core_value_sig52A3) : []).map(var_core_value_sig0B0C => var_core_value_sig9B3D1[var_core_value_sig0B0C]).filter(var_core_value_sigA39E => !!var_core_value_sigA39E).reverse(),
    var_core_value_sig1FE6 = var_core_value_sigB217.reduce((var_core_value_sigBBEE, var_core_value_sig011D) => (var_core_value_sigBBEE[var_core_value_sigBDED(var_core_value_sig011D.drawingType)] += 1, var_core_value_sigBBEE), {
      canvas: 0,
      floating: 0
    }),
    var_core_value_sig2471 = {
      canvas: 0,
      floating: 0
    },
    var_core_value_sigD1FC = var_core_value_sigB217.map((var_core_value_sig6167, var_core_value_sig65A1) => {
      let var_core_value_sig7F19 = var_core_value_sigBDED(var_core_value_sig6167.drawingType),
        var_core_value_sig7827 = var_core_value_sig7F19 === var_core_value_sig1451,
        var_core_value_sig652C = var_core_value_sig2471[var_core_value_sig7F19]++;
      return {
        id: var_core_value_sig6167.drawingId,
        name: li(var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig8AF3),
        description: var_core_value_sig6167.description,
        visible: var_core_value_sig6167.hidden !== true,
        selectable: var_core_value_sig6167.selectable !== false,
        sectionId: var_core_value_sig7F19,
        sectionTitle: var_core_value_sig7827 ? var_core_value_sigF64E.sectionFloating : var_core_value_sigF64E.sectionCanvas,
        capabilities: var_core_value_sig7827 ? {
          arrange: false,
          reorder: false
        } : undefined,
        canMoveForward: !var_core_value_sig7827 && var_core_value_sig652C > 0,
        canMoveBackward: !var_core_value_sig7827 && var_core_value_sig652C < var_core_value_sig1FE6.canvas - 1,
        canReorder: !var_core_value_sig7827
      };
    }),
    var_core_value_sigE2F9 = var_core_value_sigA2A4(() => (var_core_value_sigAD91 ?? []).filter(var_core_value_sig24B9 => var_core_value_sig24B9.unitId === var_core_value_sig0347 && var_core_value_sig24B9.subUnitId === var_core_value_sig52A3).map(var_core_value_sigE627 => var_core_value_sigE627.drawingId), [var_core_value_sigAD91, var_core_value_sig52A3, var_core_value_sig0347]),
    var_core_value_sigD689 = var_core_value_sigE2F9[var_core_value_sigE2F9.length - 1] ?? null,
    var_core_value_sig7AE3 = var_core_value_sig7E32 => var_core_value_sig1FB9.getDrawingByParam({
      unitId: var_core_value_sig0347,
      subUnitId: var_core_value_sig52A3,
      drawingId: var_core_value_sig7E32
    }) ?? null,
    var_core_value_sig1EB3 = async var_core_value_sig4C07 => {
      !var_core_value_sig0347 || !var_core_value_sig4C07.length || (await var_core_value_sigA0CC.executeCommand(var_core_value_sig9975.id, {
        unitId: var_core_value_sig0347,
        patches: var_core_value_sig4C07
      }));
    },
    var_core_value_sigE120 = (var_core_value_sig79AB, var_core_value_sig8E74) => {
      if (!var_core_value_sig0347) return;
      let var_core_value_sig104C = var_core_value_sig8E74 ? var_core_value_sigE2F9.includes(var_core_value_sig79AB) ? var_core_value_sigE2F9.filter(var_core_value_sigEF3E => var_core_value_sigEF3E !== var_core_value_sig79AB) : [...var_core_value_sigE2F9, var_core_value_sig79AB] : [var_core_value_sig79AB];
      var_core_value_sigA0CC.syncExecuteCommand(var_core_value_sigB591.id, var_core_value_sig104C.map(var_core_value_sig273D => ({
        unitId: var_core_value_sig0347,
        subUnitId: var_core_value_sig52A3,
        drawingId: var_core_value_sig273D
      })));
      let var_core_value_sig841D = var_core_value_sig104C[var_core_value_sig104C.length - 1];
      var_core_value_sig841D ? var_core_value_sig75FC(var_core_value_sigDACD, {
        unitId: var_core_value_sig0347,
        subUnitId: var_core_value_sig52A3,
        drawingId: var_core_value_sig841D
      }) : var_core_value_sig825F(var_core_value_sigDACD, var_core_value_sig0347);
    },
    var_core_value_sigD6E7 = async (var_core_value_sig90CB, var_core_value_sigBDF5) => {
      await var_core_value_sig1EB3(var_core_value_sig90CB.map(var_core_value_sig9A0D => var_core_value_sig7AE3(var_core_value_sig9A0D)).filter(var_core_value_sigA319 => !!var_core_value_sigA319).filter(var_core_value_sig2D58 => var_core_value_sig2D58.hidden !== true !== var_core_value_sigBDF5).map(var_core_value_sig223F => ({
        drawingId: var_core_value_sig223F.drawingId,
        hidden: !var_core_value_sigBDF5
      })));
    },
    var_core_value_sig3669 = async var_core_value_sigACC6 => {
      let var_core_value_sig1614 = var_core_value_sig7AE3(var_core_value_sigACC6);
      var_core_value_sig1614 && (await var_core_value_sig1EB3([{
        drawingId: var_core_value_sigACC6,
        selectable: var_core_value_sig1614.selectable === false && undefined
      }]));
    },
    var_core_value_sig5CBC = async (var_core_value_sig85C3, var_core_value_sigB996) => {
      let var_core_value_sig4BBA = var_core_value_sig7AE3(var_core_value_sig85C3),
        var_core_value_sig6201 = ci(var_core_value_sigB996);
      !var_core_value_sig4BBA || (var_core_value_sig4BBA.name ?? undefined) === var_core_value_sig6201 && (var_core_value_sig4BBA.title || undefined) === var_core_value_sig6201 || (await var_core_value_sig1EB3([{
        drawingId: var_core_value_sig85C3,
        name: var_core_value_sig6201,
        title: var_core_value_sig6201
      }]));
    },
    var_core_value_sig20BE = async (var_core_value_sig5151, var_core_value_sigB542) => {
      let var_core_value_sigBB6C = var_core_value_sig7AE3(var_core_value_sig5151),
        var_core_value_sigE2BF = ci(var_core_value_sigB542);
      !var_core_value_sigBB6C || (var_core_value_sigBB6C.description ?? undefined) === var_core_value_sigE2BF || (await var_core_value_sig1EB3([{
        drawingId: var_core_value_sig5151,
        description: var_core_value_sigE2BF
      }]));
    },
    var_core_value_sig6BD0 = async (var_core_value_sigB8C7, var_core_value_sigA56E) => {
      var_core_value_sig0347 && (await var_core_value_sigA0CC.executeCommand(var_core_value_sig10D3.id, {
        unitId: var_core_value_sig0347,
        subUnitId: var_core_value_sig52A3,
        drawingIds: [var_core_value_sigB8C7],
        arrangeType: var_core_value_sigA56E
      }));
    };
  return var_core_value_sig0347 ? var_core_value_sigE863(var_core_value_sigAD57, {
    items: var_core_value_sigD1FC,
    selectedIds: var_core_value_sigE2F9,
    focusedId: var_core_value_sigD689,
    labels: var_core_value_sigF64E,
    onSelect: var_core_value_sigE120,
    onSetVisible: var_core_value_sigD6E7,
    onCommitName: var_core_value_sig5CBC,
    onCommitDescription: var_core_value_sig20BE,
    onMoveForward: async var_core_value_sig1998 => var_core_value_sig6BD0(var_core_value_sig1998, var_core_value_sig0224.forward),
    onMoveBackward: async var_core_value_sigFF19 => var_core_value_sig6BD0(var_core_value_sigFF19, var_core_value_sig0224.backward),
    onToggleSelectable: var_core_value_sig3669
  }) : var_core_value_sigE863("div", {
    className: "univer-flex\x20univer-size-full\x20univer-items-center\x20univer-justify-center\x20univer-text-sm\x20univer-text-gray-500",
    children: var_core_value_sigF64E.title
  });
}
let di = class {
  constructor(var_core_value_sig43B8) {
    this._renderManagerService = var_core_value_sig43B8;
  }
  updateShapeFillImage(var_core_value_sigD98F, var_core_value_sig66C0) {
    let var_core_value_sig9D15 = this._renderManagerService["getRenderUnitById"](var_core_value_sigD98F.unitId),
      var_core_value_sigB785 = var_core_value_sig9D15 == null ? undefined : var_core_value_sig9D15.scene;
    if (!var_core_value_sigB785) return;
    let var_core_value_sig130F = var_core_value_sig6F52(var_core_value_sigD98F),
      var_core_value_sigC0E3 = var_core_value_sigB785.getObjectIncludeInGroup(var_core_value_sig130F);
    var_core_value_sigC0E3 == null || var_core_value_sigC0E3.setFillImage(var_core_value_sig66C0);
  }
};
di = q([K(0, var_core_value_sig27B7)], di);
function fi() {
  let var_core_value_sig8C15 = var_core_value_sig68DA(var_core_value_sig25A4),
    var_core_value_sig6DF7 = var_core_value_sig64D8(() => var_core_value_sig8C15.focus$, var_core_value_sig8C15.getFocusDrawings(), false, [var_core_value_sig8C15]);
  return var_core_value_sig6DF7.length === 0 ? null : var_core_value_sigE863("div", {
    children: var_core_value_sig04B4("div", {
      className: "univer-box-border univer-px-4 univer-text-sm",
      children: [var_core_value_sigE863(var_core_value_sig09C4, {
        drawings: var_core_value_sig6DF7,
        hasCropper: false
      }), var_core_value_sigE863(var_core_value_sigCA69, {
        drawings: var_core_value_sig6DF7
      }), var_core_value_sigE863(var_core_value_sig8DA6, {
        drawings: var_core_value_sig6DF7
      })]
    })
  });
}
function pi(var_core_value_sigB411) {
  let {
      unitId: var_core_value_sigA81B,
      subUnitId: var_core_value_sigFE8D,
      shapeId: var_core_value_sig8595
    } = var_core_value_sigB411,
    var_core_value_sigF8DE = var_core_value_sig68DA(var_core_value_sig8255),
    var_core_value_sigFE76 = var_core_value_sig68DA(di);
  return var_core_value_sigE863(var_core_value_sig16D9, {
    ...var_core_value_sigB411,
    positionEditor: var_core_value_sigE863(fi, {}),
    onUpdateShapeData: (var_core_value_sig52F7, var_core_value_sig866F) => {
      gr(var_core_value_sigF8DE, var_core_value_sigA81B, var_core_value_sigFE8D, var_core_value_sig8595, var_core_value_sig52F7, var_core_value_sig866F);
    },
    onUpdateLineShapeData: (var_core_value_sigDE3D, var_core_value_sigF175) => {
      _r(var_core_value_sigF8DE, var_core_value_sigA81B, var_core_value_sigFE8D, var_core_value_sig8595, var_core_value_sigDE3D, var_core_value_sigF175);
    },
    onUpdateShapeFillImage: var_core_value_sig6A18 => {
      var_core_value_sigFE76.updateShapeFillImage({
        unitId: var_core_value_sigA81B,
        subUnitId: var_core_value_sigFE8D,
        drawingId: var_core_value_sig8595
      }, var_core_value_sig6A18);
    }
  });
}
const mi = "doc.shape.floating-toolbar";
function hi(var_core_value_sig84C8, var_core_value_sig80C0) {
  var var_core_value_sig22B4;
  let var_core_value_sigBB37 = var_core_value_sig84C8 == null || (var_core_value_sig22B4 = var_core_value_sig84C8.getSnapshot().drawings) == null ? undefined : var_core_value_sig22B4[var_core_value_sig80C0];
  return var_core_value_sigBB37 ? var_core_value_sigBB37.layoutType === var_core_value_sig4E30.WRAP_NONE ? var_core_value_sigBB37.behindDoc === var_core_value_sig854B.TRUE ? var_core_value_sig41F2.BEHIND_TEXT : var_core_value_sig41F2.IN_FRONT_OF_TEXT : var_core_value_sigBB37.layoutType === var_core_value_sig4E30.WRAP_SQUARE ? var_core_value_sig41F2.WRAP_SQUARE : var_core_value_sigBB37.layoutType === var_core_value_sig4E30.WRAP_TOP_AND_BOTTOM ? var_core_value_sig41F2.WRAP_TOP_AND_BOTTOM : var_core_value_sig41F2.INLINE : var_core_value_sig41F2.INLINE;
}
function gi(var_core_value_sig0C51) {
  let var_core_value_sigADA4 = var_core_value_sig68DA(var_core_value_sig5F6C),
    var_core_value_sig0E48 = var_core_value_sig64D8(() => var_core_value_sigADA4.visible$, var_core_value_sigADA4.getVisible(), false, [var_core_value_sigADA4]),
    var_core_value_sig495B = var_core_value_sig0C51.popup["extraProps"];
  return var_core_value_sig0E48 ? var_core_value_sigE863(_i, {
    ...var_core_value_sig495B,
    canvasElement: var_core_value_sig0C51.popup["canvasElement"]
  }) : null;
}
function _i(var_core_value_sig310C) {
  let var_core_value_sig759E = var_core_value_sig68DA(var_core_value_sig8255),
    var_core_value_sig6C80 = var_core_value_sig68DA(var_core_value_sig5933),
    var_core_value_sig6B99 = var_core_value_sig68DA(var_core_value_sig0260),
    var_core_value_sig6ADC = var_core_value_sig68DA(var_core_value_sigDAB9),
    {
      unitId: var_core_value_sig41AD,
      subUnitId: var_core_value_sigDBC2,
      drawingId: var_core_value_sig7739,
      shapeType: var_core_value_sig4040
    } = var_core_value_sig310C,
    [var_core_value_sig1AAA, var_core_value_sig58DB] = var_core_value_sig6180(var_core_value_sig310C.shapeData),
    var_core_value_sig4840 = var_core_value_sig6ADC.getUnit(var_core_value_sig41AD, var_core_value_sig9730.UNIVER_DOC) ?? undefined,
    [var_core_value_sigB76D, var_core_value_sig1015] = var_core_value_sig6180(() => hi(var_core_value_sig4840, var_core_value_sig7739)),
    var_core_value_sig6223 = var_core_value_sigA2A4(() => var_core_value_sig2829(var_core_value_sig1AAA), [var_core_value_sig1AAA]),
    var_core_value_sigC6B6 = var_core_value_sigA2A4(() => var_core_value_sigDCED(var_core_value_sig1AAA), [var_core_value_sig1AAA]);
  var_core_value_sigFD9D(() => {
    let var_core_value_sig4E3D = var_core_value_sig759E.onCommandExecuted(var_core_value_sigD749 => {
      if (var_core_value_sigD749.id !== var_core_value_sig2637.id) return;
      let var_core_value_sigCFFA = var_core_value_sig6B99.getShapeDataById(var_core_value_sig41AD, var_core_value_sigDBC2, var_core_value_sig7739);
      var_core_value_sigCFFA && var_core_value_sig58DB(var_core_value_sigCFFA);
    });
    return () => var_core_value_sig4E3D.dispose();
  }, [var_core_value_sig759E, var_core_value_sig6B99, var_core_value_sig7739, var_core_value_sigDBC2, var_core_value_sig41AD]);
  let var_core_value_sig498A = var_core_value_sig49B0 => {
      var_core_value_sig58DB(var_core_value_sig58C1 => ({
        ...var_core_value_sig58C1,
        ...var_core_value_sig49B0
      }));
    },
    var_core_value_sigEF45 = var_core_value_sig2547 => {
      let var_core_value_sigBCA9 = var_core_value_sig567C(var_core_value_sig1AAA, var_core_value_sig2547);
      gr(var_core_value_sig759E, var_core_value_sig41AD, var_core_value_sigDBC2, var_core_value_sig7739, {
        oldShapeData: {
          shapeText: var_core_value_sig1AAA.shapeText
        }
      }, var_core_value_sigBCA9), var_core_value_sig498A(var_core_value_sigBCA9);
    },
    var_core_value_sig36FE = var_core_value_sig4CDF => {
      var_core_value_sig1015(var_core_value_sig4CDF), var_core_value_sig759E.executeCommand(var_core_value_sig32DD.id, {
        unitId: var_core_value_sig41AD,
        subUnitId: var_core_value_sigDBC2,
        drawings: [{
          unitId: var_core_value_sig41AD,
          subUnitId: var_core_value_sigDBC2,
          drawingId: var_core_value_sig7739
        }],
        wrappingStyle: var_core_value_sig4CDF
      });
    },
    var_core_value_sig3AF5 = var_core_value_sig1660({
      hostType: var_core_value_sig9730.UNIVER_DOC,
      unitId: var_core_value_sig41AD,
      subUnitId: var_core_value_sigDBC2,
      shapeId: var_core_value_sig7739,
      shapeData: var_core_value_sig1AAA,
      onUpdateBinding: var_core_value_sig3F79 => {
        let var_core_value_sig880E = {
          formulaBinding: var_core_value_sig3F79
        };
        gr(var_core_value_sig759E, var_core_value_sig41AD, var_core_value_sigDBC2, var_core_value_sig7739, {
          oldShapeData: {
            formulaBinding: var_core_value_sig1AAA.formulaBinding
          }
        }, var_core_value_sig880E), var_core_value_sig498A(var_core_value_sig880E);
      }
    }),
    var_core_value_sig14E6 = [{
      label: var_core_value_sig6C80.t("docs-shape-ui.textWrap.inline"),
      value: var_core_value_sig41F2.INLINE,
      icon: var_core_value_sigE863(var_core_value_sig90CF, {})
    }, {
      label: var_core_value_sig6C80.t("docs-shape-ui.textWrap.square"),
      value: var_core_value_sig41F2.WRAP_SQUARE,
      icon: var_core_value_sigE863(var_core_value_sig90CF, {})
    }, {
      label: var_core_value_sig6C80.t("docs-shape-ui.textWrap.topAndBottom"),
      value: var_core_value_sig41F2.WRAP_TOP_AND_BOTTOM,
      icon: var_core_value_sigE863(var_core_value_sig90CF, {})
    }, {
      label: var_core_value_sig6C80.t("docs-shape-ui.textWrap.behindText"),
      value: var_core_value_sig41F2.BEHIND_TEXT,
      icon: var_core_value_sigE863(var_core_value_sig90CF, {})
    }, {
      label: var_core_value_sig6C80.t("docs-shape-ui.textWrap.inFrontText"),
      value: var_core_value_sig41F2.IN_FRONT_OF_TEXT,
      icon: var_core_value_sigE863(var_core_value_sig90CF, {})
    }];
  return var_core_value_sig04B4(var_core_value_sigEDBA, {
    children: [var_core_value_sigE863(var_core_value_sigF378, {
      canvasElement: var_core_value_sig310C.canvasElement,
      shapeData: var_core_value_sig1AAA,
      shapeType: var_core_value_sig4040,
      textStyle: {
        ff: var_core_value_sig2841.shapeText["fontFamily"],
        fs: var_core_value_sig2841.shapeText["fontSize"],
        cl: {
          rgb: var_core_value_sig2841.shapeText["color"]
        },
        ...var_core_value_sig6223
      },
      textModel: var_core_value_sigC6B6 ? {
        ha: var_core_value_sigC6B6.ha ?? var_core_value_sigB63D.LEFT,
        va: var_core_value_sigC6B6.va ?? var_core_value_sig8E4A.TOP
      } : null,
      wrappingStyle: var_core_value_sigB76D,
      wrappingStyleOptions: var_core_value_sig14E6,
      enableShapeFillReset: true,
      enableShapeStrokeReset: true,
      enableTextBackgroundReset: true,
      defaultFillColor: var_core_value_sig2841.fill,
      defaultGradientEndColor: var_core_value_sig2841.gradientEndColor,
      defaultStrokeColor: var_core_value_sig2841.stroke,
      extensionGroups: var_core_value_sig3AF5.extensionGroups,
      floatingObjectToolbarPosition: var_core_value_sigD70C.DOC,
      onUpdateShapeData: (var_core_value_sigC9ED, var_core_value_sigB57B) => {
        gr(var_core_value_sig759E, var_core_value_sig41AD, var_core_value_sigDBC2, var_core_value_sig7739, var_core_value_sigC9ED, var_core_value_sigB57B), var_core_value_sigB57B && var_core_value_sig498A(var_core_value_sigB57B);
      },
      onUpdateText: var_core_value_sigEF45,
      onUpdateWrappingStyle: var_core_value_sig780B => var_core_value_sig36FE(var_core_value_sig780B),
      onOpenPanel: () => {
        var_core_value_sig759E.executeCommand(er.id, {
          unitId: var_core_value_sig41AD,
          subUnitId: var_core_value_sigDBC2,
          drawingId: var_core_value_sig7739
        });
      },
      onDelete: () => {
        var_core_value_sig759E.executeCommand(var_core_value_sig385E.id, {
          unitId: var_core_value_sig41AD,
          drawings: [{
            unitId: var_core_value_sig41AD,
            subUnitId: var_core_value_sigDBC2,
            drawingId: var_core_value_sig7739
          }]
        });
      }
    }), var_core_value_sig3AF5.panel]
  });
}
function vi({
  variant: var_core_value_sig8690,
  extend: var_core_value_sigDF29,
  ...var_core_value_sigC0F8
}) {
  let var_core_value_sig3C75 = var_core_value_sigE863("rect", {
    x: "7",
    y: "5.5",
    width: "6",
    height: "9",
    rx: "1",
    fill: "currentColor",
    fillOpacity: "0.14",
    stroke: "currentColor",
    strokeWidth: "1.2"
  });
  return var_core_value_sig04B4("svg", {
    "aria-hidden": "true",
    fill: "none",
    height: "1em",
    viewBox: "0 0 20 20",
    width: "1em",
    ...var_core_value_sigC0F8,
    children: [var_core_value_sig8690 === "inline" && var_core_value_sig04B4(var_core_value_sigEDBA, {
      children: [var_core_value_sigE863("path", {
        d: "M2 3.5h16M2 16.5h16M2 10h5M13 10h5",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      }), var_core_value_sigE863("rect", {
        x: "8",
        y: "7",
        width: "4",
        height: "6",
        rx: "0.8",
        fill: "currentColor",
        fillOpacity: "0.14",
        stroke: "currentColor",
        strokeWidth: "1.2"
      })]
    }), var_core_value_sig8690 === "square" && var_core_value_sig04B4(var_core_value_sigEDBA, {
      children: [var_core_value_sigE863("path", {
        d: "M2 3h16M2 7.5h3M15 7.5h3M2 10h3M15 10h3M2 12.5h3M15 12.5h3M2 17h16",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      }), var_core_value_sig3C75]
    }), var_core_value_sig8690 === "top-bottom" && var_core_value_sig04B4(var_core_value_sigEDBA, {
      children: [var_core_value_sigE863("path", {
        d: "M2 3h16M2 17h16",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      }), var_core_value_sig3C75]
    }), var_core_value_sig8690 === "behind" && var_core_value_sig04B4(var_core_value_sigEDBA, {
      children: [var_core_value_sig3C75, var_core_value_sigE863("path", {
        d: "M2 3h16M2 7.5h16M2 10h16M2 12.5h16M2 17h16",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      })]
    }), var_core_value_sig8690 === "front" && var_core_value_sig04B4(var_core_value_sigEDBA, {
      children: [var_core_value_sigE863("path", {
        d: "M2 3h16M2 7.5h16M2 10h16M2 12.5h16M2 17h16",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "1.2"
      }), var_core_value_sigE863("rect", {
        x: "7",
        y: "5.5",
        width: "6",
        height: "9",
        rx: "1",
        fill: "currentColor"
      })]
    })]
  });
}
const yi = var_core_value_sig992D => var_core_value_sig7D1B => var_core_value_sigE863(vi, {
    ...var_core_value_sig7D1B,
    variant: var_core_value_sig992D
  }),
  bi = {
    DocsShapeWrapInlineIcon: yi("inline"),
    DocsShapeWrapSquareIcon: yi("square"),
    DocsShapeWrapTopBottomIcon: yi("top-bottom"),
    DocsShapeWrapBehindTextIcon: yi("behind"),
    DocsShapeWrapInFrontOfTextIcon: yi("front")
  };
function xi(var_core_value_sigE4E4) {
  "@babel/helpers - typeof";

  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig7BE0) {
    return typeof var_core_value_sig7BE0;
  } : function (var_core_value_sig7D40) {
    return var_core_value_sig7D40 && typeof Symbol == "function" && var_core_value_sig7D40.constructor === Symbol && var_core_value_sig7D40 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig7D40;
  }, xi(var_core_value_sigE4E4);
}
function Si(var_core_value_sigA4B0, var_core_value_sig5F50) {
  if (xi(var_core_value_sigA4B0) != "object" || !var_core_value_sigA4B0) return var_core_value_sigA4B0;
  var var_core_value_sig4494 = var_core_value_sigA4B0[Symbol.toPrimitive];
  if (var_core_value_sig4494 !== undefined) {
    var var_core_value_sigFFAF = var_core_value_sig4494.call(var_core_value_sigA4B0, var_core_value_sig5F50 || "default");
    if (xi(var_core_value_sigFFAF) != "object") return var_core_value_sigFFAF;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig5F50 === "string" ? String : Number)(var_core_value_sigA4B0);
}
function Ci(var_core_value_sig478B) {
  var var_core_value_sig1E21 = Si(var_core_value_sig478B, "string");
  return xi(var_core_value_sig1E21) == "symbol" ? var_core_value_sig1E21 : var_core_value_sig1E21 + "";
}
function Y(var_core_value_sig9DBF, var_core_value_sig36CC, var_core_value_sigA568) {
  return (var_core_value_sig36CC = Ci(var_core_value_sig36CC)) in var_core_value_sig9DBF ? Object.defineProperty(var_core_value_sig9DBF, var_core_value_sig36CC, {
    value: var_core_value_sigA568,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig9DBF[var_core_value_sig36CC] = var_core_value_sigA568, var_core_value_sig9DBF;
}
let X = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sig6C7E, var_core_value_sig68BE) {
    super(), this._permissionService = var_core_value_sig6C7E, this._instanceService = var_core_value_sig68BE, Y(this, "_editingParams$", new var_core_value_sig1C07(null)), Y(this, "editingParams$", this._editingParams$["asObservable"]()), Y(this, "_onSavingEditorData$", new var_core_value_sig1C07(false)), Y(this, "onSavingEditorData$", this._onSavingEditorData$["asObservable"]()), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      let var_core_value_sig5090 = this.getEditing();
      var_core_value_sig5090 != null && var_core_value_sig5090.visible && !this._canEdit(var_core_value_sig5090) && this.setEditing(null);
    }));
  }
  dispose() {
    this._editingParams$["next"](null), this._editingParams$["complete"](), this._onSavingEditorData$["next"](false), this._onSavingEditorData$["complete"](), super.dispose();
  }
  setEditing(var_core_value_sig04C6) {
    var_core_value_sig04C6 != null && var_core_value_sig04C6.visible && !this._canEdit(var_core_value_sig04C6) || (this._editingParams$["next"](var_core_value_sig04C6), var_core_value_sig04C6 ?? this._onSavingEditorData$["next"](false));
  }
  setOnSavingEditorData(var_core_value_sigCA05) {
    this._onSavingEditorData$["next"](var_core_value_sigCA05);
  }
  getEditing() {
    return this._editingParams$["getValue"]();
  }
  _canEdit(var_core_value_sig2F2B) {
    let var_core_value_sig70AF = this._instanceService["getUnit"](var_core_value_sig2F2B.unitId, var_core_value_sig9730.UNIVER_DOC);
    if (!var_core_value_sig70AF) return true;
    let var_core_value_sigD04E = var_core_value_sig992A(var_core_value_sig70AF, var_core_value_sig2F2B.shapeId);
    return var_core_value_sig9B88(this._permissionService, var_core_value_sig2F2B.unitId, [...var_core_value_sig6281(var_core_value_sig70AF, var_core_value_sigD04E, "drawing", var_core_value_sig2F2B.shapeId), var_core_value_sig9B01(var_core_value_sigD04E, "drawing", var_core_value_sig2F2B.shapeId)]);
  }
  completeEditing(var_core_value_sigB99B) {
    this.getEditing() && (this.setOnSavingEditorData(true), requestAnimationFrame(() => {
      this.setEditing(null);
    }));
  }
  cancelEditing() {
    this.getEditing() && this.setEditing(null);
  }
};
X = q([K(0, var_core_value_sig4AFB), K(1, var_core_value_sigDAB9)], X);
const wi = var_core_value_sigCD6E(() => {
  let var_core_value_sigD22D = var_core_value_sig68DA(X),
    var_core_value_sig85D5 = var_core_value_sig68DA(var_core_value_sig0260),
    var_core_value_sig5D2E = var_core_value_sig68DA(var_core_value_sig25A4),
    var_core_value_sig7221 = var_core_value_sig68DA(var_core_value_sig8255);
  return var_core_value_sigE863(var_core_value_sig697A, {
    adapter: var_core_value_sigA2A4(() => ({
      getShapeModel: (var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A) => var_core_value_sig85D5.getShapeModel(var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A),
      getShapeData: (var_core_value_sig6418, var_core_value_sig1896, var_core_value_sig0285) => var_core_value_sig85D5.getShapeDataById(var_core_value_sig6418, var_core_value_sig1896, var_core_value_sig0285),
      getDrawingTransform: (var_core_value_sig777D, var_core_value_sig3F4C, var_core_value_sigD65A) => {
        let var_core_value_sig5A13 = var_core_value_sig5D2E.getDrawingByParam({
          unitId: var_core_value_sig777D,
          subUnitId: var_core_value_sig3F4C,
          drawingId: var_core_value_sigD65A
        });
        return var_core_value_sig5A13 == null ? undefined : var_core_value_sig5A13.transform;
      },
      updateShapeText: ({
        unitId: var_core_value_sigF593,
        shapeId: var_core_value_sig3607,
        shapeText: var_core_value_sigB512,
        oldShapeText: var_core_value_sigF2E6
      }) => {
        var_core_value_sig7221.executeCommand(var_core_value_sigD6D9.id, {
          unitId: var_core_value_sigF593,
          shapeId: var_core_value_sig3607,
          shapeData: {
            shapeText: var_core_value_sigB512
          },
          oldShapeJSON: {
            oldShapeData: {
              shapeText: var_core_value_sigF2E6
            }
          }
        });
      },
      updateHostSize: ({
        unitId: var_core_value_sig34C8,
        subUnitId: var_core_value_sigB744,
        shapeId: var_core_value_sigEAE2,
        width: var_core_value_sigE68A,
        height: var_core_value_sig3E68
      }) => {
        var_core_value_sig7221.executeCommand(var_core_value_sig7A88.id, {
          unitId: var_core_value_sig34C8,
          subUnitId: var_core_value_sigB744,
          drawings: [{
            drawingId: var_core_value_sigEAE2,
            key: "size",
            value: {
              width: var_core_value_sigE68A,
              height: var_core_value_sig3E68
            }
          }]
        });
      },
      allowHostSizeShrink: ({
        unitId: var_core_value_sigF4C5,
        subUnitId: var_core_value_sig5410,
        shapeId: var_core_value_sig492F
      }) => var_core_value_sig4F3C(var_core_value_sig85D5.getShapeDataById(var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F))
    }), [var_core_value_sig7221, var_core_value_sig85D5, var_core_value_sig5D2E]),
    editingService: var_core_value_sigD22D,
    editorUnitId: Zn,
    positionOptions: var_core_value_sigA2A4(() => ({
      viewportKeys: {
        main: var_core_value_sigDC41.VIEW_MAIN
      }
    }), [])
  });
});
let Ti = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sig5A75, var_core_value_sig7BAF) {
    super(), this._componentManager = var_core_value_sig5A75, this._iconManager = var_core_value_sig7BAF, this._registerIcons(), this._registerComponents();
  }
  _registerIcons() {
    this._iconManager["has"]("ObjectLayersIcon") || this.disposeWithMe(this._iconManager["register"]({
      ObjectLayersIcon: var_core_value_sig7EAB
    })), this._iconManager["has"]("BottomIcon") || this.disposeWithMe(this._iconManager["register"]({
      BottomIcon: var_core_value_sig9AFF
    })), this._iconManager["has"]("MoveDownIcon") || this.disposeWithMe(this._iconManager["register"]({
      MoveDownIcon: var_core_value_sig3545
    })), this._iconManager["has"]("MoveUpIcon") || this.disposeWithMe(this._iconManager["register"]({
      MoveUpIcon: var_core_value_sig5EE4
    })), this._iconManager["has"]("ShapeFormatSettingIcon") || this.disposeWithMe(this._iconManager["register"]({
      ShapeFormatSettingIcon: var_core_value_sig56B9
    })), this._iconManager["has"]("TopmostIcon") || this.disposeWithMe(this._iconManager["register"]({
      TopmostIcon: var_core_value_sigA386
    })), this.disposeWithMe(this._iconManager["register"](bi));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](Jn, pi)), this.disposeWithMe(this._componentManager["register"](Xn, ui)), this.disposeWithMe(this._componentManager["register"](mi, gi)), this.disposeWithMe(this._componentManager["register"](yr, Tr)), this.disposeWithMe(this._componentManager["register"](vr, Er)), this.disposeWithMe(this._componentManager["register"](br, Dr)), this.disposeWithMe(this._componentManager["register"](xr, Or)), this.disposeWithMe(this._componentManager["register"](Sr, kr)), this.disposeWithMe(this._componentManager["register"](Qn, var_core_value_sig045E)), this.disposeWithMe(this._componentManager["register"](ar, ur)), this.disposeWithMe(this._componentManager["register"](or, cr)), this._componentManager["get"](var_core_value_sigC3D3) || this.disposeWithMe(this._componentManager["register"](var_core_value_sigC3D3, lr)), this.disposeWithMe(this._componentManager["register"]("DocsShapeTextEditorContainer", wi));
  }
};
Ti = q([K(0, var_core_value_sig9CF7(var_core_value_sig9B3D)), K(1, var_core_value_sig9CF7(var_core_value_sig5A51))], Ti);
var Ei = class extends var_core_value_sig00DE {
  constructor(var_core_value_sig8F69, var_core_value_sig6884) {
    super(var_core_value_sig8F69, var_core_value_sig6884), Y(this, "_shapeId", null), Y(this, "_adjName", null), Y(this, "_unitId", null), Y(this, "_subUnitId", null), var_core_value_sig6884 && this.setShapeProps(var_core_value_sig6884);
  }
  getDrawingSearch() {
    return {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: this._shapeId
    };
  }
  setShapeProps(var_core_value_sig066E) {
    var_core_value_sig066E.shapeId !== undefined && (this._shapeId = var_core_value_sig066E.shapeId), var_core_value_sig066E.adjName !== undefined && (this._adjName = var_core_value_sig066E.adjName), var_core_value_sig066E.unitId !== undefined && (this._unitId = var_core_value_sig066E.unitId), var_core_value_sig066E.subUnitId !== undefined && (this._subUnitId = var_core_value_sig066E.subUnitId), this.transformByState({
      width: var_core_value_sig066E.width,
      height: var_core_value_sig066E.height
    });
  }
  _draw(var_core_value_sig9B0D) {
    var_core_value_sig3EC0.drawWith(var_core_value_sig9B0D, {
      radius: var_core_value_sig2841.adjHandleSize,
      fill: var_core_value_sig2841.adjHandleFill,
      stroke: var_core_value_sig2841.adjHandleStroke,
      strokeWidth: 1,
      evented: true
    });
  }
};
function Di(var_core_value_sig0A5A, var_core_value_sigE6D6, var_core_value_sig8507) {
  let var_core_value_sig8A7F = var_core_value_sigD5F1(var_core_value_sig0A5A, {
      ...var_core_value_sigE6D6,
      dataModel: {
        ...(var_core_value_sigE6D6.dataModel ?? {}),
        ...(var_core_value_sig8507 ? {
          doc: var_core_value_sig8507
        } : null)
      }
    }),
    var_core_value_sig9E81 = var_core_value_sigBC19(var_core_value_sig8A7F);
  return {
    clip: var_core_value_sig8D44(var_core_value_sig8A7F, var_core_value_sig9E81),
    wrapStrategy: var_core_value_sig9E81
  };
}
var Z = class extends var_core_value_sig00DE {
  constructor(var_core_value_sig3D2C, var_core_value_sigC56D) {
    super(var_core_value_sig3D2C, var_core_value_sigC56D), Y(this, "_props", undefined), Y(this, "_formulaAnimation", new var_core_value_sig5C27(() => this.makeDirty(true), () => this._applyFormulaAutoFitSize())), Y(this, "_transformCalculateSrcRect", true), Y(this, "_drawingType", var_core_value_sigD9BB.DRAWING_SHAPE), Y(this, "isDrawingObject", true), this._props = {
      ...var_core_value_sigC56D
    }, this._formulaAnimation["setPresentation"](var_core_value_sigC56D.formulaPresentation, var_core_value_sigC56D.animateFormulaPresentation !== false), this._init(), this._applyFormulaAutoFitSize();
  }
  _init() {
    this.onTransformChange$["subscribeEvent"](var_core_value_sig8EA0 => {
      this._updateSrcRectByTransform(var_core_value_sig8EA0);
    });
  }
  setPrstGeom(var_core_value_sig3A17) {
    this._props["prstGeom"] = var_core_value_sig3A17;
  }
  setEditing(var_core_value_sig938F) {
    this._props["isEditing"] = var_core_value_sig938F, this.makeDirty(true);
  }
  setFormulaPresentation(var_core_value_sigD948, var_core_value_sigBE5E = true) {
    this._formulaAnimation["setPresentation"](var_core_value_sigD948, var_core_value_sigBE5E), this._props["formulaPresentation"] = var_core_value_sigD948, this._applyFormulaAutoFitSize(), this.makeDirty(true);
  }
  _applyFormulaAutoFitSize() {
    let var_core_value_sig0281 = this._props["shapeModel"],
      var_core_value_sigED71 = var_core_value_sig0281.getShapeTextData(),
      var_core_value_sig281C = var_core_value_sig6EE2(var_core_value_sigED71 == null ? undefined : var_core_value_sigED71.dataModel),
      var_core_value_sig3C92 = var_core_value_sig281C == null ? undefined : var_core_value_sig281C.doc,
      var_core_value_sigB16B = this._formulaAnimation["getAutoFitPresentations"]();
    if (!var_core_value_sig3C92 || var_core_value_sigB16B.length === 0) return;
    var_core_value_sig0281.updateContext({
      width: this.width,
      height: this.height
    });
    let var_core_value_sig585D = var_core_value_sigB64D({
      documentData: var_core_value_sigB16B.map(var_core_value_sigA6F6 => var_core_value_sigD7C5(var_core_value_sig3C92, var_core_value_sigA6F6)),
      height: this.height,
      shapeData: var_core_value_sig0281.getShapeData(),
      textRect: var_core_value_sig0281.getShapeTextRect({
        left: 0,
        top: 0,
        width: this.width,
        height: this.height
      }),
      width: this.width
    });
    if (var_core_value_sig585D) {
      var var_core_value_sigE722;
      this.resize(var_core_value_sig585D.width, var_core_value_sig585D.height), (var_core_value_sigE722 = this.getScene()) == null || (var_core_value_sigE722 = var_core_value_sigE722.getTransformer()) == null || var_core_value_sigE722.debounceRefreshControls();
    }
  }
  get unitId() {
    return this._props["unitId"];
  }
  get subUnitId() {
    return this._props["subUnitId"];
  }
  _updateSrcRectByTransform(var_core_value_sig062A) {
    if (this._props["srcRect"] == null || !this._transformCalculateSrcRect) return;
    let {
        width: var_core_value_sig050A,
        height: var_core_value_sig8B32
      } = this,
      {
        width: var_core_value_sig870F = 0,
        height: var_core_value_sigB683 = 0
      } = var_core_value_sig062A.preValue,
      {
        left: var_core_value_sig26EC = 0,
        top: var_core_value_sigEEDB = 0,
        right: var_core_value_sig36E7 = 0,
        bottom: var_core_value_sig6A78 = 0
      } = this._props["srcRect"],
      var_core_value_sigF7EF = var_core_value_sig26EC,
      var_core_value_sig27F9 = var_core_value_sigEEDB,
      var_core_value_sig393E = var_core_value_sig36E7,
      var_core_value_sigB609 = var_core_value_sig6A78,
      var_core_value_sig390D = false;
    if (var_core_value_sig870F !== 0 && var_core_value_sig870F !== var_core_value_sig050A) {
      let var_core_value_sigCDDA = var_core_value_sig26EC / var_core_value_sig870F,
        var_core_value_sigE243 = var_core_value_sig36E7 / var_core_value_sig870F;
      var_core_value_sigF7EF = var_core_value_sig050A * var_core_value_sigCDDA, var_core_value_sig393E = var_core_value_sig050A * var_core_value_sigE243, var_core_value_sig390D = true;
    }
    if (var_core_value_sigB683 !== 0 && var_core_value_sigB683 !== var_core_value_sig8B32) {
      let var_core_value_sig74A8 = var_core_value_sigEEDB / var_core_value_sigB683,
        var_core_value_sig21B2 = var_core_value_sig6A78 / var_core_value_sigB683;
      var_core_value_sig27F9 = var_core_value_sig8B32 * var_core_value_sig74A8, var_core_value_sigB609 = var_core_value_sig8B32 * var_core_value_sig21B2, var_core_value_sig390D = true;
    }
    var_core_value_sig390D && this.setSrcRect({
      left: var_core_value_sigF7EF,
      top: var_core_value_sig27F9,
      right: var_core_value_sig393E,
      bottom: var_core_value_sigB609
    });
  }
  setSrcRect(var_core_value_sigC928) {
    this._props["srcRect"] = var_core_value_sigC928, this.makeDirty(true);
  }
  setFillImage(var_core_value_sig39B7) {
    this._props["image"] = var_core_value_sig39B7, this.makeDirty(true);
  }
  set transform(var_core_value_sig18E0) {
    this._transform = var_core_value_sig18E0;
  }
  get transform() {
    this._transform || this._setTransForm();
    let var_core_value_sigE161 = this._transform["clone"]();
    return this.transformForAngle(var_core_value_sigE161);
  }
  get shapeModel() {
    return this._props["shapeModel"];
  }
  get shapeId() {
    return this._props["shapeId"];
  }
  get classType() {
    return var_core_value_sig2DAD.SHAPE;
  }
  _draw(var_core_value_sigBDEE, var_core_value_sig1F40, var_core_value_sig3FC7, var_core_value_sig1E1B) {
    let var_core_value_sig3B10 = this._props["shapeModel"];
    if (!var_core_value_sig3B10 || !var_core_value_sig1F40) return;
    let var_core_value_sig89E6 = var_core_value_sig3FC7 ?? this.width,
      var_core_value_sig4743 = var_core_value_sig1E1B ?? this.height,
      var_core_value_sigEB6A = {
        shapeType: var_core_value_sig3B10.getShapeType(),
        width: var_core_value_sig89E6,
        height: var_core_value_sig4743
      },
      var_core_value_sig3D46 = {
        renderMode: var_core_value_sigEBB4.Path,
        oKey: this.oKey,
        image: this._props["image"],
        angle: this.angle
      };
    var_core_value_sig3B10.updateContext(var_core_value_sigEB6A), var_core_value_sigBDEE.save();
    let var_core_value_sigCC93 = {
        top: 0,
        left: 0,
        width: var_core_value_sig89E6,
        height: var_core_value_sig4743
      },
      var_core_value_sig5964 = var_core_value_sig3B10.getDrawingEffectBounds(var_core_value_sigCC93);
    var_core_value_sig5964 ? this._renderWithCache(var_core_value_sigBDEE, var_core_value_sig5964, var_core_value_sigDE08 => {
      var_core_value_sig3B10.render(var_core_value_sigDE08, var_core_value_sigCC93, var_core_value_sig3D46);
    }) : (this._releaseRenderCache(), var_core_value_sig3B10.render(var_core_value_sigBDEE, var_core_value_sigCC93, var_core_value_sig3D46)), var_core_value_sigBDEE.restore();
    let var_core_value_sig808B = var_core_value_sig3B10.getShapeTextData(),
      var_core_value_sig2A26 = var_core_value_sig3B10.getShapeTextRect(var_core_value_sigCC93),
      var_core_value_sig1179 = var_core_value_sig3B10.isLineShape();
    if (var_core_value_sig808B && var_core_value_sig2A26 && !var_core_value_sig1179) {
      var_core_value_sigBDEE.save(), this.getState().flipX && var_core_value_sigBDEE.scale(-1, 1);
      let var_core_value_sigACCB = var_core_value_sig89E6 / 2,
        var_core_value_sig7F33 = var_core_value_sig4743 / 2;
      var_core_value_sigBDEE.translate(-var_core_value_sigACCB, -var_core_value_sig7F33), var_core_value_sigBDEE.beginPath(), this._drawShapeText(var_core_value_sigBDEE, var_core_value_sig808B, var_core_value_sig2A26), var_core_value_sigBDEE.restore();
    }
  }
  getDrawingPoints(var_core_value_sigEA92) {}
  _drawShapeText(var_core_value_sig8FD9, var_core_value_sig1AE5, var_core_value_sig7100) {
    var var_core_value_sigA19A;
    this._props["isEditing"] || (!((var_core_value_sigA19A = var_core_value_sig1AE5.dataModel) != null && var_core_value_sigA19A.doc) && "isRichText" in var_core_value_sig1AE5 && var_core_value_sig1AE5.isRichText === false ? this._drawSimpleText(var_core_value_sig8FD9, var_core_value_sig1AE5, var_core_value_sig7100) : this._drawRichText(var_core_value_sig8FD9, var_core_value_sig1AE5, var_core_value_sig7100));
  }
  _drawSimpleText(var_core_value_sigD3F5, var_core_value_sig3082, var_core_value_sigF5D1) {
    this._drawRichText(var_core_value_sigD3F5, {
      ...var_core_value_sig3082,
      text: var_core_value_sig3082.text ?? "",
      dataModel: {
        doc: var_core_value_sig4CCC(var_core_value_sig3082, "docs-shape-text-" + this.oKey)
      }
    }, var_core_value_sigF5D1);
  }
  _drawRichText(var_core_value_sig8775, var_core_value_sig481B, var_core_value_sig13D7) {
    var_core_value_sig546D(var_core_value_sig8775, this._formulaAnimation, (var_core_value_sig0C53, var_core_value_sigEA04) => {
      this._drawRichTextLayer(var_core_value_sig0C53, var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sigEA04);
    });
  }
  _drawRichTextLayer(var_core_value_sig90C0, var_core_value_sigF1B2, var_core_value_sigC2BB, var_core_value_sigD9DB) {
    let var_core_value_sigA363 = this._props["localeService"];
    if (!var_core_value_sigF1B2.dataModel || !var_core_value_sigA363) {
      var_core_value_sigA363 || console.warn("[DrawingShape]\x20LocaleService\x20is\x20required\x20for\x20rich\x20text\x20rendering");
      return;
    }
    let var_core_value_sigFBA5 = var_core_value_sig6EE2(var_core_value_sigF1B2.dataModel);
    if (!var_core_value_sigFBA5) return;
    let var_core_value_sigAC47 = var_core_value_sigFBA5.doc;
    if (!var_core_value_sigAC47) return;
    let var_core_value_sigA06F = var_core_value_sigD7C5(var_core_value_sigAC47, var_core_value_sigD9DB),
      var_core_value_sig770E = var_core_value_sigFBA5.va ?? var_core_value_sig8E4A.TOP,
      var_core_value_sig4654 = var_core_value_sigFBA5.ha ?? var_core_value_sigB63D.LEFT,
      var_core_value_sigB26B = Di(this._props["shapeModel"].getShapeData(), var_core_value_sigF1B2, var_core_value_sigA06F),
      var_core_value_sig019B = var_core_value_sigF1B2.isHorizontal,
      var_core_value_sigC6BC = new var_core_value_sigBF53(var_core_value_sig6E47(var_core_value_sigA06F, {
        isHorizontal: var_core_value_sig019B !== false,
        textRect: var_core_value_sigC2BB,
        verticalAlign: var_core_value_sig770E,
        horizontalAlign: var_core_value_sig4654,
        wrapStrategy: var_core_value_sigB26B.wrapStrategy
      })),
      var_core_value_sig8EC2 = new var_core_value_sig898E(var_core_value_sigC6BC),
      var_core_value_sigA8C3 = var_core_value_sigF42A.create(var_core_value_sig8EC2, var_core_value_sigA363);
    var_core_value_sigA8C3.calculate();
    let var_core_value_sig5276 = var_core_value_sigA8C3.getActualSize().actualHeight,
      var_core_value_sig031B = var_core_value_sigE4D0({
        contentHeight: var_core_value_sig5276,
        verticalAlign: var_core_value_sig770E,
        viewportHeight: var_core_value_sigC2BB.height
      });
    var_core_value_sigC6BC.updateDocumentStyle({
      pageSize: {
        width: var_core_value_sig019B === false ? var_core_value_sigC2BB.height : var_core_value_sigC2BB.width,
        height: var_core_value_sig031B.contentHeight
      }
    }), var_core_value_sigC6BC.updateDocumentDataMargin({
      t: var_core_value_sig031B.marginTop
    }), var_core_value_sigA8C3.calculate();
    let var_core_value_sig9DC0 = new var_core_value_sigC481("shape-text-" + this.oKey, var_core_value_sigA8C3, {
      pageMarginLeft: 0,
      pageMarginTop: 0,
      onTextFillImageLoaded: () => this.makeDirty(true)
    });
    var_core_value_sig9DC0.resize(var_core_value_sigC2BB.width, var_core_value_sig031B.contentHeight), var_core_value_sig90C0.save(), var_core_value_sig90C0.translateWithPrecision(var_core_value_sigC2BB.left, var_core_value_sigC2BB.top), var_core_value_sigB26B.clip && (var_core_value_sig90C0.beginPath(), var_core_value_sig90C0.rect(0, var_core_value_sig031B.clipTop, var_core_value_sigC2BB.width, var_core_value_sig031B.clipHeight), var_core_value_sig90C0.clip()), var_core_value_sig031B.contentVerticalOffset && var_core_value_sig90C0.translateWithPrecision(0, var_core_value_sig031B.contentVerticalOffset), var_core_value_sig9DC0.draw(var_core_value_sig90C0), var_core_value_sig90C0.restore(), var_core_value_sig9DC0.dispose(), var_core_value_sigA8C3.dispose(), var_core_value_sig8EC2.dispose(), var_core_value_sigC6BC.dispose();
  }
  render(var_core_value_sig95F0, var_core_value_sig9CCB, var_core_value_sigE718 = false) {
    if (!this.visible) return this.makeDirty(false), this;
    let {
        width: var_core_value_sigAEC8,
        height: var_core_value_sigB977,
        left: var_core_value_sig2949,
        top: var_core_value_sig308A
      } = this,
      var_core_value_sig528D = this.getRealBound();
    if (var_core_value_sigAEC8 = var_core_value_sig528D.width, var_core_value_sigB977 = var_core_value_sig528D.height, var_core_value_sig2949 = var_core_value_sig528D.left, var_core_value_sig308A = var_core_value_sig528D.top, this.isRender(var_core_value_sig9CCB)) {
      let {
        top: var_core_value_sig7A62,
        left: var_core_value_sig8109,
        bottom: var_core_value_sig7565,
        right: var_core_value_sigD4FB
      } = var_core_value_sig9CCB.viewBound;
      if (var_core_value_sigAEC8 + this.strokeWidth + var_core_value_sig2949 < var_core_value_sig8109 || var_core_value_sigD4FB < var_core_value_sig2949 || var_core_value_sigB977 + this.strokeWidth + var_core_value_sig308A < var_core_value_sig7A62 || var_core_value_sig7565 < var_core_value_sig308A) return this;
    }
    let var_core_value_sigA309 = var_core_value_sig2949 + var_core_value_sigAEC8 / 2,
      var_core_value_sig9E20 = var_core_value_sig308A + var_core_value_sigB977 / 2,
      var_core_value_sig26BB = this.transform["getMatrix"]();
    if (this._props["isEditing"]) {
      let var_core_value_sig3E71 = this.getState(),
        var_core_value_sig01B3 = new var_core_value_sigEF7C();
      var_core_value_sig01B3.composeMatrix({
        ...var_core_value_sig3E71
      }), var_core_value_sig26BB = var_core_value_sig01B3.getMatrix();
    }
    return var_core_value_sig95F0.save(), this._props["shapeModel"].isRenderLinePointsMode === true || var_core_value_sig95F0.transform(var_core_value_sig26BB[0], var_core_value_sig26BB[1], var_core_value_sig26BB[2], var_core_value_sig26BB[3], var_core_value_sigA309, var_core_value_sig9E20), this._draw(var_core_value_sig95F0, var_core_value_sig9CCB, var_core_value_sigAEC8, var_core_value_sigB977), var_core_value_sig95F0.restore(), this.makeDirty(false), this;
  }
  getInverseCoord(var_core_value_sig19B4) {
    let {
        left: var_core_value_sig218A,
        top: var_core_value_sig14CB,
        width: var_core_value_sigFDEE,
        height: var_core_value_sigA676
      } = this.getRealBound(),
      var_core_value_sigC27E = this.transform["getMatrix"](),
      var_core_value_sigA70D = var_core_value_sig218A + var_core_value_sigFDEE / 2,
      var_core_value_sigCE10 = var_core_value_sig14CB + var_core_value_sigA676 / 2,
      var_core_value_sigA3861 = new var_core_value_sigEF7C([var_core_value_sigC27E[0], var_core_value_sigC27E[1], var_core_value_sigC27E[2], var_core_value_sigC27E[3], var_core_value_sigA70D, var_core_value_sigCE10]),
      var_core_value_sigCD82 = this.getParent();
    return (this.isInGroup && (var_core_value_sigCD82 == null ? undefined : var_core_value_sigCD82.classType) === var_core_value_sig2DAD.GROUP ? var_core_value_sigCD82.ancestorTransform["multiply"](var_core_value_sigA3861) : var_core_value_sigA3861).invert().applyPoint(var_core_value_sig19B4);
  }
  isHit(var_core_value_sig44DD) {
    let {
        left: var_core_value_sig96FA,
        top: var_core_value_sigAB68,
        width: var_core_value_sig040A,
        height: var_core_value_sig2AE0
      } = this.getRealBound(),
      var_core_value_sigC349 = var_core_value_sig96FA + var_core_value_sig040A / 2,
      var_core_value_sig9D96 = var_core_value_sigAB68 + var_core_value_sig2AE0 / 2,
      var_core_value_sig2776 = this.transform["getMatrix"](),
      var_core_value_sig6FB2 = new var_core_value_sigEF7C([var_core_value_sig2776[0], var_core_value_sig2776[1], var_core_value_sig2776[2], var_core_value_sig2776[3], var_core_value_sigC349, var_core_value_sig9D96]),
      var_core_value_sigEB43 = this.getParent(),
      var_core_value_sig4186 = (this.isInGroup && (var_core_value_sigEB43 == null ? undefined : var_core_value_sigEB43.classType) === var_core_value_sig2DAD.GROUP ? var_core_value_sigEB43.ancestorTransform["multiply"](var_core_value_sig6FB2) : var_core_value_sig6FB2).invert().applyPoint(var_core_value_sig44DD),
      var_core_value_sigF963 = var_core_value_sig040A / 2,
      var_core_value_sigB608 = var_core_value_sig2AE0 / 2,
      var_core_value_sigF866 = this._props["shapeModel"];
    return var_core_value_sigF866 && var_core_value_sigF866.isLineShape() ? var_core_value_sigF866.isHitLine(var_core_value_sig4186.x, var_core_value_sig4186.y, var_core_value_sig040A, var_core_value_sig2AE0) : var_core_value_sig4186.x >= -var_core_value_sigF963 - this.strokeWidth / 2 && var_core_value_sig4186.x <= var_core_value_sigF963 + this.strokeWidth / 2 && var_core_value_sig4186.y >= -var_core_value_sigB608 - this.strokeWidth / 2 && var_core_value_sig4186.y <= var_core_value_sigB608 + this.strokeWidth / 2;
  }
  dispose() {
    this._formulaAnimation["dispose"](), this._props["shapeModel"] = null, super.dispose();
  }
};
let Oi = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sig5EFB, var_core_value_sig3A85, var_core_value_sig2682, var_core_value_sig4BB5) {
    super(), this._context = var_core_value_sig5EFB, this._drawingManagerService = var_core_value_sig3A85, this._docsShapeService = var_core_value_sig2682, this._commandService = var_core_value_sig4BB5, Y(this, "_activeShapeId", null), Y(this, "_unitId", null), Y(this, "_subUnitId", null), Y(this, "_activeShapeAdjustPointList", undefined), Y(this, "_adjustPointObjects", []), Y(this, "_baseShapeLeft", 0), Y(this, "_baseShapeTop", 0), Y(this, "_baseShapeWidth", 0), Y(this, "_baseShapeHeight", 0), Y(this, "_isStartAdjusting", false), Y(this, "_isShouldShowDrawingShapeAdjust", false), Y(this, "_activeAdjustInfo", undefined), Y(this, "_activeShapeModel", undefined), Y(this, "_adjHandlerPointerMove", undefined), Y(this, "_adjHandlerPointerUp", undefined), this._registerDrawingFocusChangeHandler(), this._registerDrawingTransformHandler();
  }
  clearAdjustControls() {
    this._clearShapeAdjustControls();
  }
  refreshAdjustControls() {
    this._updateShapeAdjustControls(true);
  }
  _getShapeAdjustPointListById(var_core_value_sig6709, var_core_value_sig52CA, var_core_value_sigC030) {
    var var_core_value_sig88F6;
    return (var_core_value_sig88F6 = this._docsShapeService["getShapeModel"](var_core_value_sig6709, var_core_value_sig52CA, var_core_value_sigC030)) == null ? undefined : var_core_value_sig88F6.getDrawingPoints();
  }
  _getShapeAdjustInfosById(var_core_value_sig37DB, var_core_value_sig5542, var_core_value_sigE0A9, var_core_value_sigA73E) {
    var var_core_value_sig7620;
    return (var_core_value_sig7620 = this._docsShapeService["getShapeModel"](var_core_value_sig37DB, var_core_value_sig5542, var_core_value_sigE0A9)) == null ? undefined : var_core_value_sig7620.getAdjustInfoByName(var_core_value_sigA73E);
  }
  _getActiveDrawingParam() {
    return this._unitId === null || this._subUnitId === null || this._activeShapeId === null ? null : this._drawingManagerService["getDrawingByParam"]({
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: this._activeShapeId
    }) ?? null;
  }
  _getActiveDrawingShape(var_core_value_sigB9FC) {
    if (this._unitId === null || this._subUnitId === null || this._activeShapeId === null) return null;
    let var_core_value_sig5055 = var_core_value_sig6F52({
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._activeShapeId
      }),
      var_core_value_sig3801 = var_core_value_sigB9FC.getObjectIncludeInGroup(var_core_value_sig5055);
    return var_core_value_sig3801 instanceof Z ? var_core_value_sig3801 : null;
  }
  _createShapeAdjustControls(var_core_value_sig45F0 = false) {
    if (this._unitId === null || this._subUnitId === null || this._activeShapeId === null) return;
    let var_core_value_sigBC91 = this._getActiveDrawingParam();
    if ((var_core_value_sigBC91 == null ? undefined : var_core_value_sigBC91.drawingType) !== var_core_value_sigD9BB.DRAWING_SHAPE || !var_core_value_sigBC91.transform) return;
    let var_core_value_sigCB88 = this._docsShapeService["getShapeModel"](this._unitId, this._subUnitId, this._activeShapeId);
    if (!var_core_value_sigCB88 || var_core_value_sigCB88.isLineShape()) return;
    let {
      left: var_core_value_sigEDC6 = 0,
      top: var_core_value_sig611A = 0,
      width: var_core_value_sig6BD9 = 0,
      height: var_core_value_sig7E56 = 0,
      flipX: var_core_value_sig8D65,
      flipY: var_core_value_sig8122,
      angle: var_core_value_sig4161 = 0
    } = var_core_value_sigBC91.transform;
    (var_core_value_sig45F0 || !this._activeShapeAdjustPointList) && (var_core_value_sigCB88.updateContext({
      width: var_core_value_sig6BD9,
      height: var_core_value_sig7E56
    }), this._activeShapeAdjustPointList = var_core_value_sigCB88.getDrawingPoints());
    let var_core_value_sig7580 = this._activeShapeAdjustPointList;
    if (!(var_core_value_sig7580 != null && var_core_value_sig7580.length)) return;
    let {
      scene: var_core_value_sig1F18
    } = this._context;
    for (let var_core_value_sig7442 of var_core_value_sig7580) {
      let var_core_value_sig4383 = this._toVisualAdjustPoint(var_core_value_sig7442, var_core_value_sig6BD9, var_core_value_sig7E56, !!var_core_value_sig8D65, !!var_core_value_sig8122, var_core_value_sig4161);
      this._addShapeAdjustControl(var_core_value_sig1F18, var_core_value_sig4383, var_core_value_sig4383.adjName, var_core_value_sigEDC6, var_core_value_sig611A, this._unitId, this._subUnitId);
    }
  }
  _toVisualAdjustPoint(var_core_value_sigD5A0, var_core_value_sig81B2, var_core_value_sigA0A5, var_core_value_sig10AA, var_core_value_sigE6D0, var_core_value_sig8E91) {
    let var_core_value_sig00BE = var_core_value_sigD5A0.x,
      var_core_value_sig7BB5 = var_core_value_sigD5A0.y;
    if (var_core_value_sig10AA && (var_core_value_sig00BE = var_core_value_sig81B2 - var_core_value_sig00BE), var_core_value_sigE6D0 && (var_core_value_sig7BB5 = var_core_value_sigA0A5 - var_core_value_sig7BB5), var_core_value_sig8E91 !== 0) {
      let var_core_value_sigDF87 = var_core_value_sig81B2 / 2,
        var_core_value_sig9EE0 = var_core_value_sigA0A5 / 2,
        var_core_value_sigF0511 = var_core_value_sig8E91 * Math.PI / 180,
        var_core_value_sig0B45 = Math.cos(var_core_value_sigF0511),
        var_core_value_sig36F8 = Math.sin(var_core_value_sigF0511),
        var_core_value_sig03E1 = var_core_value_sig00BE - var_core_value_sigDF87,
        var_core_value_sigBB57 = var_core_value_sig7BB5 - var_core_value_sig9EE0;
      var_core_value_sig00BE = var_core_value_sigDF87 + (var_core_value_sig03E1 * var_core_value_sig0B45 - var_core_value_sigBB57 * var_core_value_sig36F8), var_core_value_sig7BB5 = var_core_value_sig9EE0 + (var_core_value_sig03E1 * var_core_value_sig36F8 + var_core_value_sigBB57 * var_core_value_sig0B45);
    }
    return {
      x: var_core_value_sig00BE,
      y: var_core_value_sig7BB5,
      adjName: var_core_value_sigD5A0.adjName
    };
  }
  _updateShapeAdjustControls(var_core_value_sig6AAD = false) {
    var_core_value_sig6AAD && this._clearShapeAdjustControls(), this._createShapeAdjustControls(var_core_value_sig6AAD);
  }
  _addShapeAdjustControl(var_core_value_sig1157, var_core_value_sigA694, var_core_value_sig18E01, var_core_value_sig0428, var_core_value_sigBE07, var_core_value_sig555F, var_core_value_sig3D6F) {
    if (!this._activeShapeId) return;
    let var_core_value_sig336C = "doc-shape-adjust-point-" + this._activeShapeId + "-" + var_core_value_sig18E01,
      var_core_value_sig6E68 = var_core_value_sig1157.getObjectIncludeInGroup(var_core_value_sig336C);
    if (var_core_value_sig6E68) {
      var_core_value_sig6E68.transformByState({
        left: var_core_value_sigA694.x + var_core_value_sig0428 - var_core_value_sig2841.adjHandleSize,
        top: var_core_value_sigA694.y + var_core_value_sigBE07 - var_core_value_sig2841.adjHandleSize
      }), var_core_value_sig6E68.makeDirty(true);
      return;
    }
    let var_core_value_sig8DFE = new Ei(var_core_value_sig336C, {
      left: var_core_value_sigA694.x + var_core_value_sig0428 - var_core_value_sig2841.adjHandleSize,
      top: var_core_value_sigA694.y + var_core_value_sigBE07 - var_core_value_sig2841.adjHandleSize,
      adjName: var_core_value_sig18E01,
      shapeId: this._activeShapeId,
      unitId: var_core_value_sig555F,
      subUnitId: var_core_value_sig3D6F,
      width: var_core_value_sig2841.adjHandleSize + 8,
      height: var_core_value_sig2841.adjHandleSize + 8,
      zIndex: var_core_value_sigEA69 + 1,
      evented: true
    });
    this._adjustPointObjects["push"](var_core_value_sig8DFE), this._attachAdjustEvent(var_core_value_sig8DFE, var_core_value_sig1157, var_core_value_sig18E01), var_core_value_sig1157.addObject(var_core_value_sig8DFE, var_core_value_sigEA69 + 1);
  }
  _clearShapeAdjustControls() {
    this._adjustPointObjects["forEach"](var_core_value_sig7C4A => var_core_value_sig7C4A.dispose()), this._adjustPointObjects = [];
  }
  _updateAdjustControlPositions() {
    this._createShapeAdjustControls();
  }
  _toScenePoint(var_core_value_sig48EA, var_core_value_sig5E16, var_core_value_sig09F3) {
    let var_core_value_sig4592 = var_core_value_sig6005.FromArray([var_core_value_sig5E16, var_core_value_sig09F3]),
      var_core_value_sigC5C4 = var_core_value_sig48EA.getActiveViewportByCoord(var_core_value_sig4592) ?? var_core_value_sig48EA.getViewports()[0];
    return (var_core_value_sigC5C4 == null ? undefined : var_core_value_sigC5C4.transformVector2SceneCoord(var_core_value_sig4592)) ?? var_core_value_sig4592;
  }
  _attachAdjustEvent(var_core_value_sig1617, var_core_value_sig4169, var_core_value_sig6D19) {
    this.disposeWithMe(var_core_value_sig7A5E(var_core_value_sig1617.onPointerDown$["subscribeEvent"]((var_core_value_sigE799, var_core_value_sigB601) => {
      var var_core_value_sig8B71;
      let var_core_value_sigAEFB = var_core_value_sig1617.getDrawingSearch();
      this._activeAdjustInfo = this._getShapeAdjustInfosById(var_core_value_sigAEFB.unitId, var_core_value_sigAEFB.subUnitId, var_core_value_sigAEFB.drawingId, var_core_value_sig6D19), this._activeShapeModel = this._docsShapeService["getShapeModel"](var_core_value_sigAEFB.unitId, var_core_value_sigAEFB.subUnitId, var_core_value_sigAEFB.drawingId);
      let var_core_value_sig826B = this._getActiveDrawingParam(),
        var_core_value_sigCF89 = var_core_value_sig826B == null ? undefined : var_core_value_sig826B.transform;
      if (!var_core_value_sig826B || !var_core_value_sigCF89 || !this._activeShapeModel) return;
      this._baseShapeLeft = var_core_value_sigCF89.left || 0, this._baseShapeTop = var_core_value_sigCF89.top || 0, this._baseShapeWidth = var_core_value_sigCF89.width || 0, this._baseShapeHeight = var_core_value_sigCF89.height || 0;
      let var_core_value_sig00CB = !!var_core_value_sigCF89.flipX,
        var_core_value_sig77EE = !!var_core_value_sigCF89.flipY,
        var_core_value_sig9F76 = var_core_value_sigCF89.angle || 0,
        var_core_value_sigB008 = {
          ...(((var_core_value_sig8B71 = this._activeAdjustInfo) == null ? undefined : var_core_value_sig8B71.currentAdjustValues) ?? {})
        };
      this._isStartAdjusting = true, var_core_value_sig4169.disableObjectsEvent(), this._adjHandlerPointerMove = var_core_value_sig4169.onPointerMove$["subscribeEvent"]((var_core_value_sig186C, var_core_value_sigD955) => {
        var var_core_value_sig48BD;
        if (!this._isStartAdjusting || !this._activeShapeModel || !this._activeAdjustInfo) return;
        var_core_value_sig4169.disableObjectsEvent(), var_core_value_sig4169.setCursor(var_core_value_sig6CFC.CROSSHAIR);
        let var_core_value_sig429F = this._toScenePoint(var_core_value_sig4169, var_core_value_sig186C.offsetX, var_core_value_sig186C.offsetY),
          var_core_value_sigF62A = var_core_value_sig429F.x - this._baseShapeLeft,
          var_core_value_sig8178 = var_core_value_sig429F.y - this._baseShapeTop;
        if (var_core_value_sig9F76 !== 0) {
          let var_core_value_sigBC46 = this._baseShapeWidth / 2,
            var_core_value_sig3D7D = this._baseShapeHeight / 2,
            var_core_value_sig27E5 = var_core_value_sig9F76 * Math.PI / 180,
            var_core_value_sig8061 = Math.cos(var_core_value_sig27E5),
            var_core_value_sig4D4C = Math.sin(var_core_value_sig27E5),
            var_core_value_sigC9E0 = var_core_value_sigF62A - var_core_value_sigBC46,
            var_core_value_sig76BA = var_core_value_sig8178 - var_core_value_sig3D7D;
          var_core_value_sigF62A = var_core_value_sigBC46 + (var_core_value_sigC9E0 * var_core_value_sig8061 + var_core_value_sig76BA * var_core_value_sig4D4C), var_core_value_sig8178 = var_core_value_sig3D7D + (-var_core_value_sigC9E0 * var_core_value_sig4D4C + var_core_value_sig76BA * var_core_value_sig8061);
        }
        var_core_value_sig00CB && (var_core_value_sigF62A = this._baseShapeWidth - var_core_value_sigF62A), var_core_value_sig77EE && (var_core_value_sig8178 = this._baseShapeHeight - var_core_value_sig8178);
        let var_core_value_sigE9ED = {
            left: 0,
            top: 0,
            width: this._baseShapeWidth,
            height: this._baseShapeHeight
          },
          var_core_value_sigB577 = this._activeShapeModel["calcAdjValues"](var_core_value_sigE9ED, {
            x: var_core_value_sigF62A,
            y: var_core_value_sig8178
          }, this._activeAdjustInfo, var_core_value_sig00CB, var_core_value_sig77EE);
        if (Object.keys(var_core_value_sigB577).length !== 0) {
          for (let [var_core_value_sig2AD8, var_core_value_sig2AD0] of Object.entries(var_core_value_sigB577)) this._activeShapeModel["setAdjustValueByName"](var_core_value_sig2AD8, var_core_value_sig2AD0);
          this._activeShapeModel["updateContext"]({
            width: this._baseShapeWidth,
            height: this._baseShapeHeight
          }), (var_core_value_sig48BD = this._getActiveDrawingShape(var_core_value_sig4169)) == null || var_core_value_sig48BD.makeDirty(true), this._activeShapeAdjustPointList = this._getShapeAdjustPointListById(var_core_value_sigAEFB.unitId, var_core_value_sigAEFB.subUnitId, var_core_value_sigAEFB.drawingId), this._updateAdjustControlPositions(), var_core_value_sigD955.stopPropagation();
        }
      }), this._adjHandlerPointerUp = var_core_value_sig4169.onPointerUp$["subscribeEvent"]((var_core_value_sig9572, var_core_value_sigD873) => {
        var var_core_value_sigA12B, var_core_value_sigF230;
        (var_core_value_sigA12B = this._adjHandlerPointerMove) == null || var_core_value_sigA12B.unsubscribe(), (var_core_value_sigF230 = this._adjHandlerPointerUp) == null || var_core_value_sigF230.unsubscribe(), var_core_value_sig4169.resetCursor();
        let var_core_value_sig09B8 = this._activeAdjustInfo;
        if (var_core_value_sig09B8 && this._activeShapeModel) {
          let var_core_value_sigFBFA = {};
          for (let var_core_value_sig3EEE of Object.keys(var_core_value_sig09B8.currentAdjustValues)) {
            let var_core_value_sig7524 = this._activeShapeModel["getAdjustValueByName"](var_core_value_sig3EEE);
            var_core_value_sig7524 !== undefined && (var_core_value_sigFBFA[var_core_value_sig3EEE] = var_core_value_sig7524);
          }
          Object.keys(var_core_value_sigFBFA).length > 0 && gr(this._commandService, var_core_value_sigAEFB.unitId, var_core_value_sigAEFB.subUnitId, var_core_value_sigAEFB.drawingId, {
            oldShapeData: {
              adjustValues: var_core_value_sigB008
            }
          }, {
            adjustValues: var_core_value_sigFBFA
          });
        }
        this._activeAdjustInfo = undefined, this._activeShapeModel = undefined, this._isStartAdjusting = false, var_core_value_sig4169.enableObjectsEvent(), var_core_value_sigD873.stopPropagation();
      }), var_core_value_sigB601.stopPropagation();
    })));
  }
  _registerDrawingTransformHandler() {
    let {
        scene: var_core_value_sig279C
      } = this._context,
      var_core_value_sigAC51 = var_core_value_sig279C.getTransformerByCreate();
    this.disposeWithMe(var_core_value_sigAC51.changeStart$["subscribe"](var_core_value_sig8721 => {
      this._createShapeAdjustControls(), var_core_value_sig8721.objects !== null && var_core_value_sig8721.objects["size"] === 1 && var_core_value_sig8721.objects["values"]().next().value instanceof Z && (this._isShouldShowDrawingShapeAdjust = true);
    })), this.disposeWithMe(var_core_value_sigAC51.changing$["subscribe"](() => {
      this._isShouldShowDrawingShapeAdjust && this._clearShapeAdjustControls();
    })), this.disposeWithMe(var_core_value_sig279C.onPointerUp$["subscribeEvent"](() => {
      this._isShouldShowDrawingShapeAdjust && (this._isShouldShowDrawingShapeAdjust = false, this._createShapeAdjustControls());
    })), this.disposeWithMe(var_core_value_sigAC51.changeEnd$["subscribe"](() => {
      this._unitId && this._subUnitId && this._activeShapeId && (this._activeShapeAdjustPointList = this._getShapeAdjustPointListById(this._unitId, this._subUnitId, this._activeShapeId), this._updateAdjustControlPositions());
    }));
  }
  _registerDrawingFocusChangeHandler() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig08BA => {
      if (var_core_value_sig08BA.id !== var_core_value_sig2637.id) return;
      let {
        unitId: var_core_value_sigDBB5,
        shapeId: var_core_value_sigCFAC
      } = var_core_value_sig08BA.params;
      var_core_value_sigDBB5 === this._unitId && var_core_value_sigCFAC === this._activeShapeId && this.refreshAdjustControls();
    })), this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_core_value_sig237B => {
      if (var_core_value_sig237B.length === 1) {
        let var_core_value_sig6F91 = var_core_value_sig237B[0],
          var_core_value_sigF9C7 = this._drawingManagerService["getDrawingByParam"](var_core_value_sig6F91);
        if ((var_core_value_sigF9C7 == null ? undefined : var_core_value_sigF9C7.drawingType) === var_core_value_sigD9BB.DRAWING_SHAPE) {
          this._activeShapeId = var_core_value_sig6F91.drawingId, this._unitId = var_core_value_sig6F91.unitId, this._subUnitId = var_core_value_sig6F91.subUnitId, this._activeShapeAdjustPointList = this._getShapeAdjustPointListById(var_core_value_sig6F91.unitId, var_core_value_sig6F91.subUnitId, var_core_value_sig6F91.drawingId), this._clearShapeAdjustControls(), this._createShapeAdjustControls();
          return;
        }
      }
      this._activeShapeId = null, this._activeShapeAdjustPointList = undefined, this._unitId = null, this._subUnitId = null, this._clearShapeAdjustControls();
    })), this.disposeWithMe(var_core_value_sig48B2(this._drawingManagerService["update$"], this._drawingManagerService["refreshTransform$"]).subscribe(var_core_value_sigFEAB => {
      var var_core_value_sigE347;
      let var_core_value_sig3C5B = var_core_value_sigFEAB.find(var_core_value_sig8895 => var_core_value_sig8895.drawingId === this._activeShapeId && var_core_value_sig8895.unitId === this._unitId && var_core_value_sig8895.subUnitId === this._subUnitId);
      var_core_value_sig3C5B && ((var_core_value_sigE347 = this._drawingManagerService["getDrawingByParam"](var_core_value_sig3C5B)) == null ? undefined : var_core_value_sigE347.drawingType) === var_core_value_sigD9BB.DRAWING_SHAPE && this._updateShapeAdjustControls(true);
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_core_value_sig200B => {
      for (let var_core_value_sigC80B of var_core_value_sig200B) this._activeShapeId === var_core_value_sigC80B.drawingId && (this._activeShapeId = null, this._activeShapeAdjustPointList = undefined, this._unitId = null, this._subUnitId = null, this._clearShapeAdjustControls());
    }));
  }
};
Oi = q([K(1, var_core_value_sig25A4), K(2, var_core_value_sig9CF7(var_core_value_sig0260)), K(3, var_core_value_sig8255)], Oi);
function ki(var_core_value_sig8295) {
  return var_core_value_sig8295.behindText === true || var_core_value_sig8295.behindText === var_core_value_sig854B.TRUE || var_core_value_sig8295.layoutType === var_core_value_sig4E30.WRAP_NONE && var_core_value_sig8295.behindDoc === var_core_value_sig854B.TRUE ? var_core_value_sigEE7B - 1 : var_core_value_sigEA69;
}
let Q = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sig8986, var_core_value_sigCAF7, var_core_value_sigED1C, var_core_value_sig726E, var_core_value_sig2CD3, var_core_value_sig038E, var_core_value_sigAA1E) {
    super(), this._drawingManagerService = var_core_value_sig8986, this._docsShapeService = var_core_value_sigCAF7, this._localeService = var_core_value_sigED1C, this._imageIoService = var_core_value_sig726E, this._urlImageService = var_core_value_sig2CD3, this._shapeTextEditingService = var_core_value_sig038E, this._shapeFormulaService = var_core_value_sigAA1E, Y(this, "_formulaShapes", new Map()), this.disposeWithMe(this._shapeFormulaService["presentationChanged$"].subscribe(var_core_value_sig3863 => {
      var var_core_value_sigC97C;
      (var_core_value_sigC97C = this._formulaShapes["get"](this._formulaKey(var_core_value_sig3863.unitId, var_core_value_sig3863.subUnitId, var_core_value_sig3863.shapeId))) == null || var_core_value_sigC97C.forEach(var_core_value_sig284F => var_core_value_sig284F.setFormulaPresentation(var_core_value_sig3863.presentation, var_core_value_sig3863.animationEnabled));
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_core_value_sigC4B1 => {
      var_core_value_sigC4B1.forEach(var_core_value_sigE154 => {
        this._shapeFormulaService["unregister"]({
          unitId: var_core_value_sigE154.unitId,
          subUnitId: var_core_value_sigE154.subUnitId,
          shapeId: var_core_value_sigE154.drawingId
        }), this._formulaShapes["delete"](this._formulaKey(var_core_value_sigE154.unitId, var_core_value_sigE154.subUnitId, var_core_value_sigE154.drawingId));
      });
    }));
  }
  renderDrawingShape(var_core_value_sigC9F5, var_core_value_sig7EEA) {
    let {
      transform: var_core_value_sig59CE1,
      drawingType: var_core_value_sig33C8,
      srcRect: var_core_value_sig957F,
      prstGeom: var_core_value_sig803B,
      groupId: var_core_value_sig5830,
      unitId: var_core_value_sig4A7C,
      subUnitId: var_core_value_sigF975,
      drawingId: var_core_value_sigCDAF,
      isMultiTransform: var_core_value_sigA298,
      transforms: var_core_value_sig0B40,
      hidden: var_core_value_sig330B,
      selectable: var_core_value_sig3625
    } = var_core_value_sigC9F5;
    if (var_core_value_sig33C8 !== var_core_value_sigD9BB.DRAWING_SHAPE || !this._drawingManagerService["getDrawingVisible"]() || var_core_value_sig59CE1 == null) return;
    let var_core_value_sig0B4E = this._drawingManagerService["getDrawingEditable"](),
      var_core_value_sig0E9F = var_core_value_sigA298 && var_core_value_sig0B40 ? var_core_value_sig0B40 : [var_core_value_sig59CE1],
      var_core_value_sigE5BA = [];
    for (let var_core_value_sig1BD9 of var_core_value_sig0E9F) {
      let {
          left: var_core_value_sig4632,
          top: var_core_value_sig12F2,
          width: var_core_value_sig2259,
          height: var_core_value_sig9E2F,
          angle: var_core_value_sigD082,
          flipX: var_core_value_sigDBB7,
          flipY: var_core_value_sigD0A8,
          skewX: var_core_value_sigF4B9,
          skewY: var_core_value_sig5CEE
        } = var_core_value_sig1BD9,
        var_core_value_sigE92A = var_core_value_sig0E9F.indexOf(var_core_value_sig1BD9),
        var_core_value_sig362B = var_core_value_sig6F52({
          unitId: var_core_value_sig4A7C,
          subUnitId: var_core_value_sigF975,
          drawingId: var_core_value_sigCDAF
        }, var_core_value_sigA298 ? var_core_value_sigE92A : undefined),
        var_core_value_sig5CA5 = var_core_value_sig7EEA.getObjectIncludeInGroup(var_core_value_sig362B);
      if (var_core_value_sig5CA5 != null) {
        let var_core_value_sigF602 = {
          unitId: var_core_value_sig4A7C,
          subUnitId: var_core_value_sigF975,
          shapeId: var_core_value_sigCDAF
        };
        var_core_value_sig5CA5 instanceof Z && this.refreshFormulaPresentation(var_core_value_sig5CA5, var_core_value_sigF602), var_core_value_sig5CA5.transformByState({
          left: var_core_value_sig4632,
          top: var_core_value_sig12F2,
          width: var_core_value_sig2259,
          height: var_core_value_sig9E2F,
          angle: var_core_value_sigD082,
          flipX: var_core_value_sigDBB7,
          flipY: var_core_value_sigD0A8,
          skewX: var_core_value_sigF4B9,
          skewY: var_core_value_sig5CEE
        });
        continue;
      }
      let var_core_value_sigE90F = this._drawingManagerService["getDrawingOrder"](var_core_value_sig4A7C, var_core_value_sigF975),
        var_core_value_sigEFD4 = var_core_value_sigE90F.indexOf(var_core_value_sigCDAF);
      if (var_core_value_sig7EEA.getObjectIncludeInGroup(var_core_value_sig362B) || !this._drawingManagerService["getDrawingVisible"]()) continue;
      let var_core_value_sig861B = this._docsShapeService["getShapeModel"](var_core_value_sig4A7C, var_core_value_sigF975, var_core_value_sigCDAF);
      if (!var_core_value_sig861B) continue;
      let var_core_value_sig5237 = var_core_value_sig0483(var_core_value_sig861B.getShapeType()) ? {
          ...var_core_value_sigBF6D,
          rotateEnabled: false,
          resizeEnabled: false,
          borderEnabled: false
        } : var_core_value_sigBF6D,
        var_core_value_sigBB00 = var_core_value_sig861B.getShapeData().formulaBinding,
        var_core_value_sig7E54 = {
          unitId: var_core_value_sig4A7C,
          subUnitId: var_core_value_sigF975,
          shapeId: var_core_value_sigCDAF
        };
      var_core_value_sigBB00 && this._shapeFormulaService["register"](var_core_value_sig7E54, var_core_value_sigBB00);
      let var_core_value_sig9A8D = new Z(var_core_value_sig362B, {
        ...var_core_value_sig1BD9,
        zIndex: var_core_value_sigEFD4 === -1 ? var_core_value_sigE90F.length - 1 : var_core_value_sigEFD4,
        shapeModel: var_core_value_sig861B,
        localeService: this._localeService,
        shapeId: var_core_value_sigCDAF,
        unitId: var_core_value_sig4A7C,
        subUnitId: var_core_value_sigF975,
        visible: var_core_value_sig330B !== true,
        evented: var_core_value_sig3625 !== false,
        formulaPresentation: var_core_value_sigBB00 ? this._shapeFormulaService["getPresentation"](var_core_value_sig7E54) : undefined,
        animateFormulaPresentation: (var_core_value_sigBB00 == null ? undefined : var_core_value_sigBB00.animationEnabled) !== false,
        transformerConfig: var_core_value_sig5237
      });
      if (var_core_value_sigBB00) {
        let var_core_value_sig1BBD = this._formulaKey(var_core_value_sig4A7C, var_core_value_sigF975, var_core_value_sigCDAF),
          var_core_value_sigF704 = this._formulaShapes["get"](var_core_value_sig1BBD) ?? new Set();
        var_core_value_sigF704.add(var_core_value_sig9A8D), this._formulaShapes["set"](var_core_value_sig1BBD, var_core_value_sigF704);
      }
      this.disposeWithMe(var_core_value_sig7A5E(var_core_value_sig9A8D.onDblclick$["subscribeEvent"]((var_core_value_sig2BCF, var_core_value_sig0D69) => {
        var_core_value_sig861B.isLineShape() || var_core_value_sigBB00 || (this._shapeTextEditingService["setEditing"]({
          visible: true,
          unitId: var_core_value_sig4A7C,
          subUnitId: var_core_value_sigF975,
          shapeId: var_core_value_sigCDAF,
          shapeKey: var_core_value_sig9A8D.oKey
        }), var_core_value_sig0D69.stopPropagation());
      }))), var_core_value_sig7EEA.addObject(var_core_value_sig9A8D, ki(var_core_value_sigC9F5)), var_core_value_sig0B4E && var_core_value_sig7EEA.attachTransformerTo(var_core_value_sig9A8D), var_core_value_sig5830 && var_core_value_sig40E7({
        drawingId: var_core_value_sig5830,
        unitId: var_core_value_sig4A7C,
        subUnitId: var_core_value_sigF975
      }, var_core_value_sig9A8D, var_core_value_sig7EEA, this._drawingManagerService), var_core_value_sig803B != null && var_core_value_sig9A8D.setPrstGeom(var_core_value_sig803B), var_core_value_sig957F != null && var_core_value_sig9A8D.setSrcRect(var_core_value_sig957F), this._loadShapePictureFill(var_core_value_sig9A8D, var_core_value_sig861B.getShapeData()), var_core_value_sigE5BA.push(var_core_value_sig9A8D);
    }
    return var_core_value_sigE5BA;
  }
  _formulaKey(var_core_value_sig4A83, var_core_value_sig58AA, var_core_value_sig84C4) {
    return var_core_value_sig4A83 + "\x00" + var_core_value_sig58AA + "\x00" + var_core_value_sig84C4;
  }
  refreshFormulaPresentation(var_core_value_sigB6F7, var_core_value_sigB495) {
    let var_core_value_sig70D0 = this._docsShapeService["getShapeModel"](var_core_value_sigB495.unitId, var_core_value_sigB495.subUnitId, var_core_value_sigB495.shapeId),
      var_core_value_sig2A8A = var_core_value_sig70D0 == null ? undefined : var_core_value_sig70D0.getShapeData().formulaBinding,
      var_core_value_sig3782 = this._formulaKey(var_core_value_sigB495.unitId, var_core_value_sigB495.subUnitId, var_core_value_sigB495.shapeId);
    if (var_core_value_sig2A8A) {
      this._shapeFormulaService["register"](var_core_value_sigB495, var_core_value_sig2A8A);
      let var_core_value_sigE43E = this._formulaShapes["get"](var_core_value_sig3782) ?? new Set();
      var_core_value_sigE43E.add(var_core_value_sigB6F7), this._formulaShapes["set"](var_core_value_sig3782, var_core_value_sigE43E);
    } else {
      var var_core_value_sigD22E;
      this._shapeFormulaService["unregister"](var_core_value_sigB495), (var_core_value_sigD22E = this._formulaShapes["get"](var_core_value_sig3782)) == null || var_core_value_sigD22E.delete(var_core_value_sigB6F7);
    }
    var_core_value_sigB6F7.setFormulaPresentation(var_core_value_sig2A8A ? this._shapeFormulaService["getPresentation"](var_core_value_sigB495) : undefined, (var_core_value_sig2A8A == null ? undefined : var_core_value_sig2A8A.animationEnabled) !== false);
  }
  refreshShapeFillImage(var_core_value_sig3455) {
    let var_core_value_sig5CEF = var_core_value_sig3455.shapeModel["getShapeData"](),
      var_core_value_sig43D5 = var_core_value_sig5CEF.fill;
    if (!var_core_value_sig43D5 || var_core_value_sig43D5.fillType !== var_core_value_sig9FE1.PictureFill || !var_core_value_sig43D5.fillImageSource) {
      var_core_value_sig3455.setFillImage(undefined);
      return;
    }
    this._loadShapePictureFill(var_core_value_sig3455, var_core_value_sig5CEF);
  }
  _loadShapePictureFill(var_core_value_sig1395, var_core_value_sig9FA0) {
    let var_core_value_sig055E = var_core_value_sig9FA0.fill;
    if (!var_core_value_sig055E || var_core_value_sig055E.fillType !== var_core_value_sig9FE1.PictureFill || !var_core_value_sig055E.fillImageSource) return;
    let var_core_value_sig7C77 = var_core_value_sig055E.fillImageSource,
      var_core_value_sig9578 = var_core_value_sig055E.fillImageSourceType ?? var_core_value_sigAF1D.URL,
      var_core_value_sigA2D3 = this._imageIoService["getImageSourceCache"](var_core_value_sig7C77, var_core_value_sig9578);
    if (var_core_value_sigA2D3) {
      var_core_value_sig1395.setFillImage(var_core_value_sigA2D3);
      return;
    }
    this._loadAndSetImage(var_core_value_sig1395, var_core_value_sig7C77, var_core_value_sig9578);
  }
  async _loadAndSetImage(var_core_value_sigC218, var_core_value_sigADEC, var_core_value_sig3D8E) {
    let var_core_value_sig37E5;
    try {
      if (var_core_value_sig3D8E === var_core_value_sigAF1D.UUID) var_core_value_sig37E5 = await this._imageIoService["getImage"](var_core_value_sigADEC);else {
        if (var_core_value_sig3D8E === var_core_value_sigAF1D.URL) try {
          var_core_value_sig37E5 = await this._urlImageService["getImage"](var_core_value_sigADEC);
        } catch {
          var_core_value_sig37E5 = var_core_value_sigADEC;
        } else var_core_value_sig37E5 = var_core_value_sigADEC;
      }
    } catch (var_core_value_sigA937) {
      console.error("[ShapeRender]\x20Failed\x20to\x20resolve\x20picture\x20fill\x20source", var_core_value_sigA937);
      return;
    }
    let var_core_value_sigF079 = new window["Image"]();
    var_core_value_sigF079.onload = () => {
      this._imageIoService["addImageSourceCache"](var_core_value_sigADEC, var_core_value_sig3D8E, var_core_value_sigF079), var_core_value_sigC218.setFillImage(var_core_value_sigF079);
    }, var_core_value_sigF079.onerror = () => {
      console.error("[ShapeRender] Failed to load picture fill image", var_core_value_sigADEC);
    }, var_core_value_sigF079.src = var_core_value_sig37E5;
  }
};
Q = q([K(0, var_core_value_sig25A4), K(1, var_core_value_sig9CF7(var_core_value_sig0260)), K(2, var_core_value_sig9CF7(var_core_value_sig5933)), K(3, var_core_value_sig29DE), K(4, var_core_value_sigC7EA), K(5, var_core_value_sig9CF7(X)), K(6, var_core_value_sig9CF7(var_core_value_sig4A48))], Q);
let Ai = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sigFCA0, var_core_value_sigC84D, var_core_value_sigF2BC) {
    super(), this._docPrintInterceptorService = var_core_value_sigFCA0, this._drawingManagerService = var_core_value_sigC84D, this._shapeRenderController = var_core_value_sigF2BC, this._initPrinting();
  }
  _initPrinting() {
    this.disposeWithMe(this._docPrintInterceptorService["interceptor"].intercept(this._docPrintInterceptorService["interceptor"].getInterceptPoints().PRINTING_COMPONENT_COLLECT, {
      handler: (var_core_value_sigCAD5, var_core_value_sigE503, var_core_value_sig48DD) => {
        var var_core_value_sig5E6A;
        let {
            unitId: var_core_value_sigB7FC,
            scene: var_core_value_sig9CD9,
            skeleton: var_core_value_sigFD0C
          } = var_core_value_sigE503,
          {
            pageIndex: var_core_value_sig849B
          } = var_core_value_sigE503,
          var_core_value_sig5F1A = (var_core_value_sig5E6A = this._drawingManagerService["getDrawingDataForUnit"](var_core_value_sigB7FC)) == null ? undefined : var_core_value_sig5E6A[var_core_value_sigB7FC],
          var_core_value_sigB455 = ji(this._docPrintInterceptorService, var_core_value_sigFD0C, var_core_value_sig849B);
        return var_core_value_sig5F1A == null || var_core_value_sig5F1A.order["forEach"](var_core_value_sigC259 => {
          if (var_core_value_sigB455 && !var_core_value_sigB455.has(var_core_value_sigC259)) return;
          let var_core_value_sig9C9F = var_core_value_sig5F1A.data[var_core_value_sigC259];
          var_core_value_sig9C9F.drawingType === var_core_value_sigD9BB.DRAWING_SHAPE && !var_core_value_sig9C9F.hidden && this._shapeRenderController["renderDrawingShape"](var_core_value_sig9C9F, var_core_value_sig9CD9);
        }), var_core_value_sig48DD(var_core_value_sigCAD5);
      }
    }));
  }
};
Ai = q([K(0, var_core_value_sig9CF7(var_core_value_sig5FD0)), K(1, var_core_value_sig25A4), K(2, var_core_value_sig9CF7(Q))], Ai);
function ji(var_core_value_sigA975, var_core_value_sig1263, var_core_value_sig457C) {
  var var_core_value_sigA4E6, var_core_value_sig934F;
  let var_core_value_sig74A7 = var_core_value_sigA975;
  if (var_core_value_sig74A7.getPageDrawingIds) return var_core_value_sig74A7.getPageDrawingIds(var_core_value_sig1263, var_core_value_sig457C);
  let var_core_value_sig3685 = var_core_value_sig1263.getSkeletonData();
  if (!var_core_value_sig3685 || var_core_value_sig3685.pages["length"] <= 1 || var_core_value_sig457C == null) return null;
  let var_core_value_sigC621 = new Set(),
    var_core_value_sig86D7 = var_core_value_sig3685.pages[var_core_value_sig457C];
  if (!var_core_value_sig86D7) return var_core_value_sigC621;
  Mi(var_core_value_sig86D7, var_core_value_sigC621);
  let var_core_value_sig431B = (var_core_value_sigA4E6 = var_core_value_sig3685.skeHeaders["get"](var_core_value_sig86D7.headerId)) == null ? undefined : var_core_value_sigA4E6.get(var_core_value_sig86D7.pageWidth),
    var_core_value_sig5C7C = (var_core_value_sig934F = var_core_value_sig3685.skeFooters["get"](var_core_value_sig86D7.footerId)) == null ? undefined : var_core_value_sig934F.get(var_core_value_sig86D7.pageWidth);
  return var_core_value_sig431B && Mi(var_core_value_sig431B, var_core_value_sigC621), var_core_value_sig5C7C && Mi(var_core_value_sig5C7C, var_core_value_sigC621), var_core_value_sigC621;
}
function Mi(var_core_value_sig87E2, var_core_value_sig2E04) {
  for (let var_core_value_sigD37B of var_core_value_sig87E2.skeDrawings["keys"]()) var_core_value_sig2E04.add(var_core_value_sigD37B);
  for (let var_core_value_sigFA28 of var_core_value_sig87E2.skeTables["values"]()) for (let var_core_value_sig5241 of var_core_value_sigFA28.rows) for (let var_core_value_sigFDEA of var_core_value_sig5241.cells) Mi(var_core_value_sigFDEA, var_core_value_sig2E04);
}
const Ni = "docs-shape-contextual-ribbon";
let Pi = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sig93BE, var_core_value_sigABEC, var_core_value_sig2712, var_core_value_sig0B9E, var_core_value_sigC545, var_core_value_sig12A7) {
    super(), this._menuManagerService = var_core_value_sig93BE, this._ribbonService = var_core_value_sigABEC, this._drawingManagerService = var_core_value_sig2712, this._univerInstanceService = var_core_value_sig0B9E, this._renderManagerService = var_core_value_sigC545, this._shapeFloatingToolbarService = var_core_value_sig12A7, Y(this, "_visible", false), this._menuManagerService["mergeMenu"](ni), this.disposeWithMe(var_core_value_sig7A5E(this._drawingManagerService["focus$"].subscribe(() => this._update()))), this._update();
  }
  dispose() {
    this._shapeFloatingToolbarService["setFallbackVisible"](false, Ni), this._hide(), super.dispose();
  }
  _update() {
    var var_core_value_sig6F4E;
    let var_core_value_sigA021 = this._drawingManagerService["getFocusDrawings"](),
      var_core_value_sig49D9 = var_core_value_sigA021.length === 1 ? var_core_value_sigA021[0] : undefined;
    if ((var_core_value_sig49D9 == null ? undefined : var_core_value_sig49D9.drawingType) !== var_core_value_sigD9BB.DRAWING_SHAPE || this._univerInstanceService["getUnitType"](var_core_value_sig49D9.unitId) !== var_core_value_sig9730.UNIVER_DOC) {
      this._shapeFloatingToolbarService["setFallbackVisible"](false, Ni), this._hide();
      return;
    }
    let var_core_value_sig320C = var_core_value_sig2407((var_core_value_sig6F4E = this._renderManagerService["getRenderUnitById"](var_core_value_sig49D9.unitId)) == null ? undefined : var_core_value_sig6F4E.engine["getCanvasElement"]()) === "isolated";
    if (this._shapeFloatingToolbarService["setFallbackVisible"](var_core_value_sig320C, Ni), var_core_value_sig320C) {
      this._hide();
      return;
    }
    this._visible || (this._visible = true, this._ribbonService["showContextualTab"](Yn, {
      activate: true
    }));
  }
  _hide() {
    this._visible && (this._visible = false, this._ribbonService["hideContextualTab"](Yn), this._ribbonService["setCollapsedIds"]([]));
  }
};
Pi = q([K(0, var_core_value_sigF047), K(1, var_core_value_sigC2F9), K(2, var_core_value_sig25A4), K(3, var_core_value_sigDAB9), K(4, var_core_value_sig27B7), K(5, var_core_value_sig9CF7(var_core_value_sig5F6C))], Pi);
function Fi(var_core_value_sig2EDD, var_core_value_sig27D2) {
  let var_core_value_sig355D = var_core_value_sig2EDD;
  for (; var_core_value_sig355D;) {
    if (var_core_value_sig27D2(var_core_value_sig355D)) return var_core_value_sig355D;
    var_core_value_sig355D = typeof var_core_value_sig355D.getParent == "function" ? var_core_value_sig355D.getParent() : null;
  }
  return null;
}
function Ii(var_core_value_sig8B21) {
  return Fi(var_core_value_sig8B21, var_core_value_sigE7F0 => var_core_value_sigE7F0 instanceof Z);
}
function Li(var_core_value_sigEB36) {
  return (var_core_value_sigEB36 == null ? undefined : var_core_value_sigEB36.formulaBinding) == null;
}
let Ri = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sigE837, var_core_value_sig34F4, var_core_value_sigA45D, var_core_value_sig1BC7, var_core_value_sig4956, var_core_value_sigCC9E) {
    super(), this._context = var_core_value_sigE837, this._shapeTextEditingService = var_core_value_sig34F4, this._drawingManagerService = var_core_value_sigA45D, this._contextService = var_core_value_sig1BC7, this._docLayoutInteractionService = var_core_value_sig4956, this._docsShapeService = var_core_value_sigCC9E, Y(this, "_lastEditingShapeKey", null), Y(this, "_layoutInteraction", null), this._initEvents(), this._initSelection(), this._initEditingParams();
  }
  dispose() {
    this._endLayoutInteraction(), super.dispose();
  }
  _initEvents() {
    let {
      scene: var_core_value_sig444C
    } = this._context;
    this.disposeWithMe(var_core_value_sig444C.onDblclick$["subscribeEvent"]((var_core_value_sigC6E5, var_core_value_sigCEFB) => {
      let {
          offsetX: var_core_value_sig1537,
          offsetY: var_core_value_sigE4C6
        } = var_core_value_sigC6E5,
        var_core_value_sig4313 = var_core_value_sig6005.FromArray([var_core_value_sig1537, var_core_value_sigE4C6]),
        var_core_value_sigFC87 = Ii(var_core_value_sig444C.pick(var_core_value_sig4313)) ?? this._getFocusedShapeAtPoint(var_core_value_sig4313);
      if (var_core_value_sigFC87) {
        var_core_value_sigCEFB.stopPropagation();
        let var_core_value_sig86D0 = this._docsShapeService["getShapeModel"](var_core_value_sigFC87.unitId, var_core_value_sigFC87.subUnitId, var_core_value_sigFC87.shapeId);
        if (!var_core_value_sig86D0 || var_core_value_sig0483(var_core_value_sig86D0.getShapeType()) || !Li(var_core_value_sig86D0.getShapeData())) return;
        this._shapeTextEditingService["setEditing"]({
          visible: true,
          unitId: var_core_value_sigFC87.unitId,
          subUnitId: var_core_value_sigFC87.subUnitId,
          shapeId: var_core_value_sigFC87.shapeId,
          shapeKey: var_core_value_sigFC87.oKey
        });
      }
    }));
  }
  _getFocusedShapeAtPoint(var_core_value_sigE42E) {
    let {
      scene: var_core_value_sigF039
    } = this._context;
    return this._drawingManagerService["getFocusDrawings"]().map(var_core_value_sig156F => var_core_value_sigF039.getObjectIncludeInGroup(var_core_value_sig6F52(var_core_value_sig156F))).find(var_core_value_sigDD51 => var_core_value_sigDD51 instanceof Z && var_core_value_sigDD51.isHit(var_core_value_sigE42E)) ?? null;
  }
  _initSelection() {
    this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_core_value_sigF057 => {
      if (var_core_value_sigF057.length === 1) {
        let var_core_value_sig4CD2 = var_core_value_sigF057[0],
          var_core_value_sig48CA = this._drawingManagerService["getDrawingByParam"](var_core_value_sig4CD2);
        if ((var_core_value_sig48CA == null ? undefined : var_core_value_sig48CA.drawingType) === var_core_value_sigD9BB.DRAWING_SHAPE) {
          let var_core_value_sig480E = this._shapeTextEditingService["getEditing"]();
          if ((var_core_value_sig480E == null ? undefined : var_core_value_sig480E.shapeId) === var_core_value_sig4CD2.drawingId && var_core_value_sig480E.visible) return;
          var_core_value_sig0483(this._docsShapeService["getShapeType"](var_core_value_sig4CD2.unitId, var_core_value_sig4CD2.subUnitId, var_core_value_sig4CD2.drawingId)) && this._shapeTextEditingService["setEditing"](null);
        } else this._shapeTextEditingService["getEditing"]() && (this._shapeTextEditingService["setOnSavingEditorData"](true), requestAnimationFrame(() => {
          this._shapeTextEditingService["setEditing"](null);
        }));
      } else this._shapeTextEditingService["getEditing"]() && (this._shapeTextEditingService["setOnSavingEditorData"](true), requestAnimationFrame(() => {
        this._shapeTextEditingService["setEditing"](null);
      }));
    })), this.disposeWithMe(this._drawingManagerService["remove$"].subscribe(var_core_value_sig72F6 => {
      let var_core_value_sig9FBA = this._shapeTextEditingService["getEditing"]();
      var_core_value_sig9FBA && var_core_value_sig72F6.some(var_core_value_sig50AF => var_core_value_sig50AF.drawingId === var_core_value_sig9FBA.shapeId) && this._shapeTextEditingService["setEditing"](null);
    }));
  }
  _initEditingParams() {
    this.disposeWithMe(this._shapeTextEditingService["editingParams$"].subscribe(var_core_value_sigFE01 => {
      (var_core_value_sigFE01 == null ? undefined : var_core_value_sigFE01.visible) === true && var_core_value_sigFE01.unitId === this._context["unitId"] ? this._layoutInteraction ??= this._docLayoutInteractionService["beginInteraction"]() : this._endLayoutInteraction();
      let {
        scene: var_core_value_sigA2CE
      } = this._context;
      if (this._lastEditingShapeKey) {
        let var_core_value_sigA942 = var_core_value_sigA2CE.getObjectIncludeInGroup(this._lastEditingShapeKey);
        var_core_value_sigA942 && var_core_value_sigA942.setEditing(false);
      }
      if (var_core_value_sigFE01) {
        let var_core_value_sigA621 = !!var_core_value_sigFE01.visible,
          var_core_value_sigBBFF = var_core_value_sigA2CE.getObjectIncludeInGroup(var_core_value_sigFE01.shapeKey);
        var_core_value_sigBBFF && (var_core_value_sigBBFF.setEditing(var_core_value_sigA621), this._lastEditingShapeKey = var_core_value_sigFE01.shapeKey), this._contextService["setContextValue"](var_core_value_sigC125, var_core_value_sigA621);
      } else this._lastEditingShapeKey = null, this._contextService["setContextValue"](var_core_value_sigC125, false);
    }));
  }
  _endLayoutInteraction() {
    var var_core_value_sigA321;
    (var_core_value_sigA321 = this._layoutInteraction) == null || var_core_value_sigA321.dispose(), this._layoutInteraction = null;
  }
};
Ri = q([K(1, var_core_value_sig9CF7(X)), K(2, var_core_value_sig25A4), K(3, var_core_value_sig933F), K(4, var_core_value_sig9CF7(var_core_value_sig4153)), K(5, var_core_value_sig9CF7(var_core_value_sig0260))], Ri);
let zi = class extends var_core_value_sigDB65 {
  constructor(var_core_value_sigBF4C, var_core_value_sig3457, var_core_value_sig4A08, var_core_value_sig1BC4, var_core_value_sig9EAB, var_core_value_sigA5C3, var_core_value_sig3A1E, var_core_value_sigDC92, var_core_value_sig3515, var_core_value_sigC2A0) {
    super(var_core_value_sigBF4C, var_core_value_sig3457, var_core_value_sig4A08, var_core_value_sig1BC4, var_core_value_sig9EAB, var_core_value_sigA5C3, var_core_value_sig3A1E, var_core_value_sigDC92, var_core_value_sig3515, var_core_value_sigC2A0, {
      componentKey: Qn,
      editorUnitId: Zn
    });
  }
};
zi = q([K(1, var_core_value_sig9CF7(var_core_value_sigC860)), K(2, var_core_value_sig9CF7(var_core_value_sig5C3B)), K(3, var_core_value_sig9CF7(var_core_value_sigA784)), K(4, var_core_value_sig8255), K(5, var_core_value_sig9CF7(var_core_value_sig4002)), K(6, var_core_value_sig9CF7(var_core_value_sig4524)), K(7, var_core_value_sig9CF7(var_core_value_sig9A5B)), K(8, var_core_value_sig9CF7(var_core_value_sigA7E3)), K(9, var_core_value_sig9CF7(X))], zi);
let Bi = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sig7C65, var_core_value_sig7F05, var_core_value_sig41F3, var_core_value_sigF455) {
    super(), this._commandService = var_core_value_sig7C65, this._renderManagerService = var_core_value_sig7F05, this._drawingManagerService = var_core_value_sig41F3, this._docDrawingShapeRenderController = var_core_value_sigF455, this._initialize();
  }
  _initialize() {
    this.disposeWithMe(this._drawingManagerService["add$"].subscribe(var_core_value_sig1975 => this._insertShapes(var_core_value_sig1975))), this.disposeWithMe(this._drawingManagerService["update$"].subscribe(var_core_value_sig6EA1 => {
      var_core_value_sig6EA1.forEach(var_core_value_sig8889 => this._updateShape(var_core_value_sig8889));
    })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig029F => {
      if (var_core_value_sig029F.id !== var_core_value_sig2637.id) return;
      let {
        unitId: var_core_value_sig3767,
        shapeId: var_core_value_sig670B
      } = var_core_value_sig029F.params;
      this._refreshShapeData({
        unitId: var_core_value_sig3767,
        subUnitId: var_core_value_sig3767,
        drawingId: var_core_value_sig670B
      });
    }));
  }
  _insertShapes(var_core_value_sig6E78) {
    var_core_value_sig6E78.forEach(var_core_value_sig6912 => {
      let var_core_value_sigE235 = this._getSceneByUnitId(var_core_value_sig6912.unitId);
      if (!var_core_value_sigE235) return;
      let var_core_value_sig7664 = this._drawingManagerService["getDrawingByParam"](var_core_value_sig6912);
      (var_core_value_sig7664 == null ? undefined : var_core_value_sig7664.drawingType) === var_core_value_sigD9BB.DRAWING_SHAPE && this._docDrawingShapeRenderController["renderDrawingShape"](var_core_value_sig7664, var_core_value_sigE235.scene);
    });
  }
  _updateShape(var_core_value_sigB3EE) {
    let var_core_value_sigC50A = this._drawingManagerService["getDrawingByParam"](var_core_value_sigB3EE);
    if ((var_core_value_sigC50A == null ? undefined : var_core_value_sigC50A.drawingType) !== var_core_value_sigD9BB.DRAWING_SHAPE) return;
    let var_core_value_sig11D0 = this._getSceneByUnitId(var_core_value_sigB3EE.unitId);
    if (!var_core_value_sig11D0 || var_core_value_sigC50A.transform == null) return;
    let var_core_value_sigB8ED = var_core_value_sig6F52(var_core_value_sigB3EE),
      var_core_value_sig8EAE = var_core_value_sig11D0.scene["getObjectIncludeInGroup"](var_core_value_sigB8ED);
    var_core_value_sig8EAE && (var_core_value_sig8EAE.setSrcRect(var_core_value_sigC50A.srcRect), var_core_value_sig8EAE.setPrstGeom(var_core_value_sigC50A.prstGeom), var_core_value_sig8EAE.makeDirty(true));
  }
  _refreshShapeData(var_core_value_sig1CDD) {
    let var_core_value_sig0DB1 = this._getSceneByUnitId(var_core_value_sig1CDD.unitId);
    if (!var_core_value_sig0DB1) return;
    let var_core_value_sig68A2 = var_core_value_sig6F52(var_core_value_sig1CDD),
      var_core_value_sigCC17 = var_core_value_sig0DB1.scene["getObjectIncludeInGroup"](var_core_value_sig68A2);
    var_core_value_sigCC17 && (this._docDrawingShapeRenderController["refreshShapeFillImage"](var_core_value_sigCC17), this._docDrawingShapeRenderController["refreshFormulaPresentation"](var_core_value_sigCC17, {
      unitId: var_core_value_sig1CDD.unitId,
      subUnitId: var_core_value_sig1CDD.subUnitId,
      shapeId: var_core_value_sig1CDD.drawingId
    }), var_core_value_sigCC17.makeDirty(true));
  }
  _getSceneByUnitId(var_core_value_sig32AE) {
    if (var_core_value_sig32AE == null) return null;
    let var_core_value_sigC753 = this._renderManagerService["getRenderUnitById"](var_core_value_sig32AE),
      var_core_value_sigFFD1 = var_core_value_sigC753 == null ? undefined : var_core_value_sigC753.scene;
    return var_core_value_sigFFD1 == null ? null : {
      scene: var_core_value_sigFFD1
    };
  }
};
Bi = q([K(0, var_core_value_sig8255), K(1, var_core_value_sig27B7), K(2, var_core_value_sig25A4), K(3, var_core_value_sig9CF7(Q))], Bi);
let Vi = class extends var_core_value_sig3A41 {
  constructor(var_core_value_sig81AE, var_core_value_sigF79F, var_core_value_sig0E54, var_core_value_sig3B17, var_core_value_sig6C4A, var_core_value_sig73D9, var_core_value_sigEAF8, var_core_value_sig0455, var_core_value_sig737C, var_core_value_sig5AF5, var_core_value_sig9DE4, var_core_value_sig77FA) {
    super(), this._univerInstanceService = var_core_value_sig81AE, this._sidebarService = var_core_value_sigF79F, this._menuManagerService = var_core_value_sig0E54, this._docsShapeService = var_core_value_sig3B17, this._localeService = var_core_value_sig6C4A, this._commandService = var_core_value_sig73D9, this._drawingManagerService = var_core_value_sigEAF8, this._docCanvasPopManagerService = var_core_value_sig0455, this._renderManagerService = var_core_value_sig737C, this._contextService = var_core_value_sig5AF5, this._shapeTextEditingService = var_core_value_sig9DE4, this._permissionService = var_core_value_sig77FA, Y(this, "_sidebarDisposable", null), Y(this, "_activeShapeInfo", null), Y(this, "_isOpenedShapeEditPanel", false), Y(this, "_shapeEditPanelVersion", 0), Y(this, "_disposePopupsByUnit", new Map()), Y(this, "_popupTargetKeys", new Map()), this._initMenu(), this.disposeWithMe(this._univerInstanceService["getCurrentTypeOfUnit$"](var_core_value_sig9730.UNIVER_DOC).subscribe(var_core_value_sig2281 => {
      if (!var_core_value_sig2281) {
        var var_core_value_sig5E86;
        (var_core_value_sig5E86 = this._sidebarDisposable) == null || var_core_value_sig5E86.dispose();
      }
    })), this._registerOperations(), this.disposeWithMe(var_core_value_sig639A(this._renderManagerService, var_core_value_sig9730.UNIVER_DOC, var_core_value_sig6998 => this._popupMenuListener(var_core_value_sig6998))), this.disposeWithMe(this._shapeTextEditingService["editingParams$"].subscribe(var_core_value_sigF639 => {
      var_core_value_sigF639 && this._clearPopups(undefined, true);
    })), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      this._drawingManagerService["getFocusDrawings"]().some(var_core_value_sig32F8 => var_core_value_sig32F8.drawingType === var_core_value_sigD9BB.DRAWING_SHAPE && this._univerInstanceService["getUnitType"](var_core_value_sig32F8.unitId) === var_core_value_sig9730.UNIVER_DOC && !this._canEditShape(var_core_value_sig32F8.unitId, var_core_value_sig32F8.drawingId)) && (this._clearPopups(undefined, true), this._closeShapeEditPanel());
    }));
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](ri);
  }
  getShapePopupMenus(var_core_value_sigA4A7, var_core_value_sigA4DF, var_core_value_sigCC9D, var_core_value_sig90F5) {
    return [{
      label: "docs-shape-ui.openPanel",
      index: 0,
      commandId: er.id,
      commandParams: {
        unitId: var_core_value_sigA4A7,
        subUnitId: var_core_value_sigA4DF,
        drawingId: var_core_value_sigCC9D
      },
      disable: var_core_value_sig90F5 === var_core_value_sigD9BB.DRAWING_DOM
    }, {
      label: "docs-shape-ui.deleteShape",
      index: 1,
      commandId: var_core_value_sig385E.id,
      commandParams: {
        unitId: var_core_value_sigA4A7,
        drawings: [{
          unitId: var_core_value_sigA4A7,
          subUnitId: var_core_value_sigA4DF,
          drawingId: var_core_value_sigCC9D
        }]
      },
      disable: false
    }, {
      label: "docs-shape-ui.hidePanel",
      index: 2,
      commandId: oi.id,
      commandParams: {
        unitId: var_core_value_sigA4A7,
        subUnitId: var_core_value_sigA4DF,
        drawingId: var_core_value_sigCC9D
      },
      disable: false
    }];
  }
  _getShapeInfo(var_core_value_sigD2BA, var_core_value_sigCD3A, var_core_value_sig519D) {
    let var_core_value_sigC7E7 = this._docsShapeService["getShapeTypeById"](var_core_value_sigD2BA, var_core_value_sigCD3A, var_core_value_sig519D),
      var_core_value_sig6E1C = this._docsShapeService["getShapeDataById"](var_core_value_sigD2BA, var_core_value_sigCD3A, var_core_value_sig519D);
    return var_core_value_sigC7E7 !== undefined && var_core_value_sig6E1C !== undefined ? {
      shapeData: var_core_value_sig6E1C,
      shapeId: var_core_value_sig519D,
      shapeType: var_core_value_sigC7E7,
      unitId: var_core_value_sigD2BA,
      subUnitId: var_core_value_sigCD3A,
      version: this._shapeEditPanelVersion,
      disableShapeOption: false
    } : null;
  }
  _clearPopups(var_core_value_sigFABC, var_core_value_sig413D = false) {
    if (var_core_value_sigFABC == null) {
      [...this._disposePopupsByUnit["keys"]()].forEach(var_core_value_sig5B67 => this._clearPopups(var_core_value_sig5B67, var_core_value_sig413D));
      return;
    }
    let var_core_value_sig5BCE = this._disposePopupsByUnit["get"](var_core_value_sigFABC);
    if (var_core_value_sig5BCE) {
      for (let var_core_value_sig1758 = var_core_value_sig5BCE.length - 1; var_core_value_sig1758 >= 0; --var_core_value_sig1758) {
        let var_core_value_sig26DB = var_core_value_sig5BCE[var_core_value_sig1758];
        (var_core_value_sig413D || var_core_value_sig26DB.canDispose()) && (var_core_value_sig26DB.dispose(), var_core_value_sig5BCE.splice(var_core_value_sig1758, 1));
      }
      var_core_value_sig5BCE.length === 0 && (this._disposePopupsByUnit["delete"](var_core_value_sigFABC), this._popupTargetKeys["delete"](var_core_value_sigFABC));
    }
  }
  _getDisposePopups(var_core_value_sig8EF0) {
    let var_core_value_sig78AC = this._disposePopupsByUnit["get"](var_core_value_sig8EF0);
    if (var_core_value_sig78AC) return var_core_value_sig78AC;
    let var_core_value_sig4CEF = [];
    return this._disposePopupsByUnit["set"](var_core_value_sig8EF0, var_core_value_sig4CEF), var_core_value_sig4CEF;
  }
  _popupMenuListener(var_core_value_sigD57D) {
    var var_core_value_sig2CC7;
    let var_core_value_sig4784 = new var_core_value_sig269A(),
      var_core_value_sigC39E = (var_core_value_sig2CC7 = this._renderManagerService["getAllRenderersOfType"](var_core_value_sig9730.UNIVER_DOC).find(var_core_value_sigEAE5 => var_core_value_sigEAE5.scene["getTransformerByCreate"]() === var_core_value_sigD57D)) == null ? undefined : var_core_value_sig2CC7.unitId;
    return var_core_value_sigC39E ? (var_core_value_sig4784.add(var_core_value_sigD57D.createControl$["subscribe"](() => this._handleCreateControl(var_core_value_sigD57D, var_core_value_sigC39E))), var_core_value_sig4784.add(var_core_value_sigD57D.clearControl$["subscribe"](() => {
      this._clearPopups(var_core_value_sigC39E), queueMicrotask(() => {
        var_core_value_sigD57D.getSelectedObjectMap().size > 0 || (this._contextService["setContextValue"](var_core_value_sigF549, false), this._drawingManagerService["focusDrawing"](null));
      });
    })), var_core_value_sig4784.add(var_core_value_sigD57D.changing$["subscribe"](() => {
      this._clearPopups(var_core_value_sigC39E, true);
    })), var_core_value_sig4784) : var_core_value_sig4784;
  }
  _handleCreateControl(var_core_value_sig16C7, var_core_value_sig7481) {
    let var_core_value_sig08A3 = var_core_value_sig16C7.getSelectedObjectMap();
    if (this._isOpenedShapeEditPanel) {
      this._clearPopups(var_core_value_sig7481, true);
      return;
    }
    if (var_core_value_sig08A3.size > 1) {
      this._clearPopups(var_core_value_sig7481);
      return;
    }
    let var_core_value_sig77D8 = var_core_value_sig08A3.values().next().value;
    if (!var_core_value_sig77D8) {
      this._clearPopups(var_core_value_sig7481);
      return;
    }
    let var_core_value_sig78A3 = this._drawingManagerService["getDrawingOKey"](var_core_value_sig77D8.oKey);
    if (!var_core_value_sig78A3 || var_core_value_sig78A3.drawingType !== var_core_value_sigD9BB.DRAWING_SHAPE) {
      this._clearPopups(var_core_value_sig7481);
      return;
    }
    let {
      unitId: var_core_value_sig649B,
      subUnitId: var_core_value_sig6256,
      drawingId: var_core_value_sigE7A6,
      drawingType: var_core_value_sigB505
    } = var_core_value_sig78A3;
    if (!this._canEditShape(var_core_value_sig649B, var_core_value_sigE7A6)) {
      this._clearPopups(var_core_value_sig7481, true);
      return;
    }
    let var_core_value_sig7428 = this._getShapeInfo(var_core_value_sig649B, var_core_value_sig6256, var_core_value_sigE7A6);
    if (!var_core_value_sig7428) {
      this._clearPopups(var_core_value_sig7481);
      return;
    }
    let var_core_value_sig1DCE = this._disposePopupsByUnit["get"](var_core_value_sig7481),
      var_core_value_sig0567 = var_core_value_sig649B + ":" + var_core_value_sig6256 + ":" + var_core_value_sigE7A6;
    if (this._popupTargetKeys["get"](var_core_value_sig7481) === var_core_value_sig0567 && var_core_value_sig1DCE && var_core_value_sig1DCE.length > 0) return;
    this._clearPopups(var_core_value_sig7481);
    let var_core_value_sigA7F3 = this._renderManagerService["getRenderUnitById"](var_core_value_sig649B),
      var_core_value_sigEACD = ((var_core_value_sigA7F3 == null ? undefined : var_core_value_sigA7F3.isMainScene) === false ? var_core_value_sigA7F3.with(var_core_value_sig5C3B) : this._docCanvasPopManagerService).attachPopupToObject(var_core_value_sig77D8, {
        componentKey: mi,
        direction: "vertical-center",
        offset: [0, var_core_value_sigD051],
        extraProps: {
          unitId: var_core_value_sig649B,
          subUnitId: var_core_value_sig6256,
          drawingId: var_core_value_sigE7A6,
          drawingType: var_core_value_sigB505,
          shapeType: var_core_value_sig7428.shapeType,
          shapeData: var_core_value_sig7428.shapeData
        }
      }, var_core_value_sig649B);
    this.disposeWithMe(var_core_value_sigEACD), this._getDisposePopups(var_core_value_sig7481).push(var_core_value_sigEACD), this._popupTargetKeys["set"](var_core_value_sig7481, var_core_value_sig0567), this._drawingManagerService["getFocusDrawings"]().some(var_core_value_sigE94C => var_core_value_sigE94C.unitId === var_core_value_sig649B && var_core_value_sigE94C.subUnitId === var_core_value_sig6256 && var_core_value_sigE94C.drawingId === var_core_value_sigE7A6) || this._drawingManagerService["focusDrawing"]([{
      unitId: var_core_value_sig649B,
      subUnitId: var_core_value_sig6256,
      drawingId: var_core_value_sigE7A6
    }]);
  }
  _canEditShape(var_core_value_sig901E, var_core_value_sigF7BB) {
    let var_core_value_sigFA38 = this._univerInstanceService["getUnit"](var_core_value_sig901E, var_core_value_sig9730.UNIVER_DOC);
    if (!var_core_value_sigFA38) return false;
    let var_core_value_sig102B = var_core_value_sig992A(var_core_value_sigFA38, var_core_value_sigF7BB);
    return var_core_value_sig9B88(this._permissionService, var_core_value_sig901E, [...var_core_value_sig6281(var_core_value_sigFA38, var_core_value_sig102B, "drawing", var_core_value_sigF7BB), var_core_value_sig9B01(var_core_value_sig102B, "drawing", var_core_value_sigF7BB)]);
  }
  _registerOperations() {
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig6D47 => {
      if (var_core_value_sig6D47.id === er.id) {
        let {
          unitId: var_core_value_sig4805,
          subUnitId: var_core_value_sigE67E,
          drawingId: var_core_value_sig2902
        } = var_core_value_sig6D47.params;
        this._shapeEditPanelVersion += 1, this._activeShapeInfo = this._getShapeInfo(var_core_value_sig4805, var_core_value_sigE67E, var_core_value_sig2902), this._clearPopups(undefined, true), this._openShapeEditPanel();
      }
      if (var_core_value_sig6D47.id === oi.id && (this._activeShapeInfo = null, this._closeShapeEditPanel()), var_core_value_sig6D47.id === var_core_value_sig2637.id) {
        let {
          unitId: var_core_value_sig9989,
          shapeId: var_core_value_sig698E
        } = var_core_value_sig6D47.params;
        if (this._activeShapeInfo && this._activeShapeInfo["shapeId"] === var_core_value_sig698E) {
          let var_core_value_sigF0F9 = this._getShapeInfo(var_core_value_sig9989, this._activeShapeInfo["subUnitId"], var_core_value_sig698E);
          var_core_value_sigF0F9 && (this._shapeEditPanelVersion += 1, var_core_value_sigF0F9.version = this._shapeEditPanelVersion, this._activeShapeInfo = var_core_value_sigF0F9, this._isOpenedShapeEditPanel && this._openShapeEditPanel());
        }
      }
    })), this.disposeWithMe(this._drawingManagerService["focus$"].subscribe(var_core_value_sigCB82 => {
      if (this._isOpenedShapeEditPanel === false) return;
      if (var_core_value_sigCB82.length === 0) {
        this._activeShapeInfo = null, this._closeShapeEditPanel();
        return;
      }
      if (var_core_value_sigCB82.length === 1 && var_core_value_sigCB82[0].drawingType === var_core_value_sigD9BB.DRAWING_SHAPE && (this._shapeEditPanelVersion += 1, this._activeShapeInfo = this._getShapeInfo(var_core_value_sigCB82[0].unitId, var_core_value_sigCB82[0].subUnitId, var_core_value_sigCB82[0].drawingId), this._activeShapeInfo)) {
        this._openShapeEditPanel();
        return;
      }
      let var_core_value_sigCF4E = var_core_value_sigCB82.filter(var_core_value_sig2809 => var_core_value_sig2809.drawingType === var_core_value_sigD9BB.DRAWING_SHAPE);
      if (var_core_value_sigCB82.length > 1 && var_core_value_sigCF4E.length === var_core_value_sigCB82.length) {
        if (this._shapeEditPanelVersion += 1, this._activeShapeInfo = this._getShapeInfo(var_core_value_sigCB82[0].unitId, var_core_value_sigCB82[0].subUnitId, var_core_value_sigCB82[0].drawingId), this._activeShapeInfo) {
          this._openShapeEditPanel();
          return;
        }
      } else {
        if (this._shapeEditPanelVersion += 1, this._activeShapeInfo = this._getShapeInfo(var_core_value_sigCB82[0].unitId, var_core_value_sigCB82[0].subUnitId, var_core_value_sigCB82[0].drawingId), this._activeShapeInfo) {
          this._activeShapeInfo["disableShapeOption"] = true, this._openShapeEditPanel();
          return;
        }
      }
      this._closeShapeEditPanel();
    }));
  }
  _openShapeEditPanel() {
    this._activeShapeInfo && (this._sidebarDisposable = this._sidebarService["open"]({
      id: Jn,
      header: {
        title: this._localeService["t"]("docs-shape-ui.formatShape")
      },
      width: 388,
      children: {
        label: Jn,
        ...this._activeShapeInfo
      },
      onClose: () => {
        this._drawingManagerService["focusDrawing"](null), this._contextService["setContextValue"](var_core_value_sigF549, false), this._sidebarDisposable = null;
      }
    }), this._isOpenedShapeEditPanel = true);
  }
  _closeShapeEditPanel() {
    this._isOpenedShapeEditPanel = false, this._sidebarService["close"](Jn), this._sidebarDisposable = null, this._contextService["setContextValue"](var_core_value_sigF549, false), this._drawingManagerService["focusDrawing"](null);
  }
};
Vi = q([K(0, var_core_value_sigDAB9), K(1, var_core_value_sig9CF7(var_core_value_sig1F51)), K(2, var_core_value_sigF047), K(3, var_core_value_sig9CF7(var_core_value_sig0260)), K(4, var_core_value_sig9CF7(var_core_value_sig5933)), K(5, var_core_value_sig8255), K(6, var_core_value_sig25A4), K(7, var_core_value_sig9CF7(var_core_value_sig5C3B)), K(8, var_core_value_sig27B7), K(9, var_core_value_sig933F), K(10, var_core_value_sig9CF7(X)), K(11, var_core_value_sig4AFB)], Vi);
let $ = class extends var_core_value_sig884B {
  constructor(var_core_value_sigA7DB = si, var_core_value_sig5EEE, var_core_value_sig65B4, var_core_value_sigF98E, var_core_value_sigA470) {
    super(), this._config = var_core_value_sigA7DB, this._injector = var_core_value_sig5EEE, this._commandService = var_core_value_sig65B4, this._configService = var_core_value_sigF98E, this._renderManagerService = var_core_value_sigA470;
    let {
      menu: var_core_value_sig19A1,
      ...var_core_value_sig81F7
    } = var_core_value_sigDB33({}, si, this._config);
    var_core_value_sig19A1 && this._configService["setConfig"]("menu", var_core_value_sig19A1, {
      merge: true
    }), this._configService["setConfig"]("docs-shape-ui.config", var_core_value_sig81F7), this._initCommands();
  }
  onStarting() {
    this._injector["add"]([Ti]), this._injector["get"](Ti), var_core_value_sig6C8C(this._injector, [[Vi], [Bi], [Q], [Ai], [Oi], [ir], [di], [X], [Pi]]), this._initUIPart();
  }
  onReady() {
    this._renderManagerService["registerRenderModule"](var_core_value_sig9730.UNIVER_DOC, [Oi]), this._renderManagerService["registerRenderModule"](var_core_value_sig9730.UNIVER_DOC, [Ri]), var_core_value_sig838E(this._injector, [[Vi], [Bi], [Q], [Ai], [ir], [di], [X], [Pi]]);
  }
  onRendered() {
    this._renderManagerService["registerRenderModule"](var_core_value_sig9730.UNIVER_DOC, [zi]);
  }
  _initCommands() {
    [G, oi, er, $n, nr, rr].forEach(var_core_value_sig6CAD => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig6CAD)));
  }
  _initUIPart() {
    let var_core_value_sigBE51 = this._injector,
      var_core_value_sigAAD1 = var_core_value_sigBE51.get(var_core_value_sig29F5);
    this.disposeWithMe(var_core_value_sigAAD1.registerComponent(var_core_value_sigFB47.CONTENT, () => var_core_value_sig02CB(wi, var_core_value_sigBE51)));
  }
};
Y($, "type", var_core_value_sig9730.UNIVER_DOC), Y($, "pluginName", "DOCS_SHAPE_UI_PLUGIN"), Y($, "packageName", ii), Y($, "version", ai), $ = q([var_core_value_sig4B27(var_core_value_sigC985, var_core_value_sigF39B, var_core_value_sigB272, var_core_value_sig58A8, var_core_value_sig07E7, var_core_value_sigD4AA, var_core_value_sigD170, var_core_value_sigB77C, var_core_value_sig89EC, var_core_value_sig5E74), K(1, var_core_value_sig9CF7(var_core_value_sigCCE5)), K(2, var_core_value_sig8255), K(3, var_core_value_sigBFC7), K(4, var_core_value_sig27B7)], $);
export { ri as DocsShapeUIMenuSchema, $ as UniverDocsShapeUIPlugin };
