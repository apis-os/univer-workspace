import {
  FormulaShapeAnimationController as _0x53f47e,
  SHAPE_CHANGE_PICKER_COMPONENT as _0xe95a32,
  SHAPE_EDITOR_TRANSFORMER_CONFIG as _0x5d1bac,
  SHEET_DOC_SHAPE_FLOATING_TOOLBAR_TOP_OFFSET as _0x12d3ee,
  ShapeEditPanel as _0x258fbe,
  ShapeFloatingToolbar as _0x490be1,
  ShapeFloatingToolbarService as _0x268b3a,
  ShapeFloatingToolbarToggleFactory as _0x675df5,
  ShapeFormulaRibbonControl as _0x422b1e,
  ShapeGroupEnum as _0x571e9a,
  ShapePickerDropdown as _0x394d76,
  ShapePickerPanel as _0x28d7bb,
  ShapeQuickStyleGallery as _0x5935e1,
  ShapeStyleRibbonControl as _0x43848c,
  ShapeTextEditorContainer as _0x11306f,
  ShapeTextFloatMenuRenderControllerBase as _0x544c71,
  ShapeTextFloatToolbar as _0x5cfd88,
  ShapeTextHyperLinkPopupService as _0x1c423f,
  ShapeTextRibbonControl as _0xdb41b2,
  ToggleShapeFloatingToolbarOperation as _0x14e309,
  UniverShapeEditorUIPlugin as _0xab23f3,
  activateDrawingObject as _0x3574de,
  bindRenderTransformerLifecycle as _0x304b32,
  buildShapeTextDataUpdate as _0xc4aed0,
  clearActiveDrawingObjects as _0x57883e,
  drawFormulaShapeAnimationLayers as _0x5834d6,
  getDrawingTypeNameKey as _0x128234,
  getTextModel as _0x5e959c,
  getTextStyle as _0x23ebf1,
  normalizeShapeTextModel as _0x2c5605,
  plainShapeTextToDocumentData as _0x5ee38f,
  prepareShapeTextDocumentData as _0x126ec2,
  resolveFormulaShapeAutoFitSize as _0x550573,
  resolveShapeContextualRibbonHostMode as _0x44a7c4,
  resolveShapeTextDocumentRenderLayout as _0x1e5aea,
  resolveShapeTextEditorBehaviorShapeData as _0x22262c,
  resolveShapeTextEditorWrapStrategy as _0x5ad666,
  shouldAllowShapeTextEditorHostSizeShrink as _0x3a6f2b,
  shouldClipShapeTextDocument as _0x4184f3,
  useFormulaShapeToolbar as _0x17e7a2,
} from "@univerjs-pro/shape-editor-ui";
import {
  DOCS_COMPONENT_MAIN_LAYER_INDEX as _0xa254a9,
  DOC_CONTENT_INSERT_MENU_ID as _0xeec543,
  DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID as _0x2f12ce,
  DOC_PARAGRAPH_T_INSERT_MENU_ID as _0x255bf8,
  DocCanvasPopManagerService as _0x3e0dcb,
  DocEventManagerService as _0x36dc5d,
  DocLayoutInteractionService as _0x394eb4,
  DocParagraphMenuService as _0x139651,
  DocPrintInterceptorService as _0x21d32d,
  DocRenderController as _0x150fa2,
  DocSelectionRenderService as _0xc8bba8,
  EMPTY_PARAGRAPH_MENU_ID as _0x1ee159,
  INSERT_BELLOW_MENU_ID as _0x2505f0,
  UniverDocsUIPlugin as _0x113e69,
  VIEWPORT_KEY as _0xa4cde3,
} from "@univerjs/docs-ui";
import {
  BuiltInUIPart as _0x5a60dc,
  ComponentManager as _0x367216,
  ContextMenuGroup as _0x2328b8,
  ContextMenuPosition as _0x19802f,
  FloatingObjectToolbarPosition as _0x73db9d,
  IMenuManagerService as _0x2301df,
  IRibbonService as _0x1fc97f,
  ISidebarService as _0x580f2f,
  IUIPartsService as _0x42d187,
  IconManager as _0x277214,
  MenuItemType as _0x1b4901,
  MenuManagerPosition as _0x292277,
  RibbonInsertGroup as _0x4ec694,
  connectInjector as _0xbdecea,
  getMenuHiddenObservable as _0x1bc34b,
  useDependency as _0x1ccf61,
  useObservable as _0x2d7643,
} from "@univerjs/ui";
import {
  DEFAULT_DOC_SHAPE_HEIGHT as _0x21d6f0,
  DEFAULT_DOC_SHAPE_WIDTH as _0x22c395,
  DocShapeAnchorPosition as _0x1ff3c0,
  DocsShapeService as _0x36ebcc,
  InsertDocShapeCommand as _0x9f097f,
  UniverDocsShapePlugin as _0x438d66,
  UpdateDocDrawingMetadataCommand as _0x27f5fb,
  UpdateDocShapeDataCommand as _0x35b5aa,
  UpdateDocShapeDataMutation as _0x158823,
} from "@univerjs-pro/docs-shape";
import {
  ImageSourceTypeEnum as _0x341dc0,
  ShapeArrowSizeEnum as _0x35af17,
  ShapeArrowTypeEnum as _0x3e5b04,
  ShapeDefaultConfig as _0x1a5129,
  ShapeFillEnum as _0x27dc69,
  ShapeLineTypeEnum as _0x4bed7d,
  ShapeModel as _0x34ca0d,
  ShapeRenderModeEnum as _0x2069bd,
  ShapeTypeEnum as _0x125a16,
  isConnectorShape as _0x5f2ca0,
} from "@univerjs-pro/engine-shape";
import {
  ShapeFormulaService as _0x92e548,
  UniverShapeEditorPlugin as _0x333f66,
  applyQuickStyleToShapeData as _0x537278,
  cloneShapeDataForType as _0x25cfde,
  createShapeFormulaDocument as _0x566c2f,
  createShapeTextBoxShapeData as _0x206b78,
  getShapeQuickStylePreset as _0x461f76,
  getShapeQuickStyleType as _0x1b8408,
  resolveActiveShapeQuickStylePresetId as _0x3c2f0b,
} from "@univerjs-pro/shape-editor";
import {
  ArrangeTypeEnum as _0x1aa8f8,
  BooleanNumber as _0x17d8b7,
  CommandType as _0x4398e7,
  DependentOn as _0x10acf1,
  Disposable as _0x24c6b6,
  DisposableCollection as _0x358fb8,
  DocumentDataModel as _0x2434d0,
  DrawingTypeEnum as _0xafe67d,
  FOCUSING_COMMON_DRAWINGS as _0x134988,
  FOCUSING_SHAPE_TEXT_EDITOR as _0x46e4fb,
  HorizontalAlign as _0x54202c,
  ICommandService as _0x2bec61,
  IConfigService as _0x366920,
  IContextService as _0x2ad9f8,
  IImageIoService as _0x576111,
  IPermissionService as _0x50fd0a,
  IURLImageService as _0x381f39,
  IUniverInstanceService as _0x419138,
  Inject as _0x4834d7,
  Injector as _0x10b898,
  LocaleService as _0x5d6b8b,
  Plugin as _0x42c7c9,
  PositionedObjectLayoutType as _0x413dda,
  UniverInstanceType as _0x4f1f7e,
  VerticalAlign as _0x33489a,
  createInternalEditorID as _0x5b82b6,
  generateRandomId as _0x2d504a,
  getParagraphContentStartOffset as _0x28e919,
  merge as _0x3c20a1,
  registerDependencies as _0x53556d,
  toDisposable as _0xb590da,
  touchDependencies as _0x729848,
} from "@univerjs/core";
import {
  DocInterceptorService as _0x4151d6,
  DocSelectionManagerService as _0x2b7644,
  RichTextEditingMutation as _0x401540,
  UniverDocsPlugin as _0x124bd7,
  canEditDocumentTargets as _0x339559,
  getDocumentDrawingSegmentId as _0x214243,
  getDocumentEntityParentPermissionObjectIds as _0x279808,
  getDocumentEntityPermissionObjectId as _0x18329a,
} from "@univerjs/docs";
import {
  IDocDrawingService as _0x17e224,
  RemoveDocDrawingCommand as _0x31a09e,
  SetDocDrawingArrangeCommand as _0x45b638,
  TextWrappingStyle as _0x28b351,
  UpdateDocDrawingWrappingStyleCommand as _0x18a5f2,
  UpdateDrawingDocTransformCommand as _0x10a61b,
} from "@univerjs/docs-drawing";
import {
  CURSOR_TYPE as _0x5b9b11,
  Circle as _0x5c11de,
  DRAWING_OBJECT_LAYER_INDEX as _0x522e20,
  DocumentSkeleton as _0x20f3cb,
  DocumentViewModel as _0x5cb606,
  Documents as _0x3a6a51,
  IRenderManagerService as _0xc8fd3e,
  RENDER_CLASS_TYPE as _0x344513,
  Shape as _0x3c9197,
  Transform as _0xf9ea1c,
  UniverRenderEnginePlugin as _0x3a89cd,
  Vector2 as _0x2836ef,
} from "@univerjs/engine-render";
import {
  IDrawingManagerService as _0x2cc1e5,
  SetDrawingSelectedOperation as _0x5dbe9e,
  UniverDrawingPlugin as _0xda17d2,
  getDrawingShapeKeyByDrawingSearch as _0x1f99b7,
} from "@univerjs/drawing";
import {
  DrawingCommonPanel as _0x4ee488,
  DrawingImageClipService as _0xc679f,
  IMAGE_CLIP_SHAPE_PICKER_COMPONENT as _0x3b02d8,
  OBJECT_LIST_FLOATING_SECTION_ID as _0x4f1ad6,
  ObjectListPanelBase as _0x31f5f7,
  UniverDrawingUIPlugin as _0x4580f2,
  getObjectListPanelLabels as _0x4e4559,
  getObjectListPanelSectionIdForDrawingType as _0x3a977f,
  getObjectListPanelTypeName as _0x12e771,
  insertGroupObject as _0x105c74,
} from "@univerjs/drawing-ui";
import {
  Fragment as _0x44e06a,
  jsx as _0x527a55,
  jsxs as _0x3649c9,
} from "react/jsx-runtime";
import {
  BehaviorSubject as _0x12550c,
  Observable as _0x189714,
  distinctUntilChanged as _0x3284f9,
  map as _0x1fca94,
  merge as _0x869f47,
  startWith as _0x272dbb,
} from "rxjs";
import { UniverLicensePlugin as _0x559dcd } from "@univerjs-pro/license";
import {
  DocDrawingPosition as _0x5930fc,
  DocDrawingTextWrap as _0x148668,
  UniverDocsDrawingUIPlugin as _0x45a5ce,
} from "@univerjs/docs-drawing-ui";
import {
  BottomIcon as _0x168c9a,
  MoveDownIcon as _0x2a40d9,
  MoveUpIcon as _0x6a0a79,
  ObjectLayersIcon as _0x8f4841,
  ShapeFormatSettingIcon as _0x137ca9,
  TextWrapShapeIcon as _0x86d610,
  TopmostIcon as _0x280c02,
} from "@univerjs/icons";
import {
  memo as _0x2f2fc0,
  useEffect as _0x1ba692,
  useMemo as _0x46ff5b,
  useReducer as _0x3d0a97,
  useState as _0x31ba2d,
} from "react";
function Gn(_0x463062, _0x4560cc) {
  if (_0x4560cc) {
    if (_0x5f2ca0(_0x463062) && (_0x4560cc.startArrow || _0x4560cc.endArrow))
      return {
        ln: {
          startArrow: _0x4560cc.startArrow
            ? { type: _0x3e5b04.Arrow, size: _0x35af17.Medium }
            : undefined,
          endArrow: _0x4560cc.endArrow
            ? { type: _0x3e5b04.Arrow, size: _0x35af17.Large }
            : undefined,
        },
      };
    if (
      _0x463062 === _0x125a16.Rect &&
      (_0x4560cc.horizontal || _0x4560cc.vertical)
    )
      return _0x206b78({
        fill: { fillType: _0x27dc69.SolidFill, color: "#3B82F6" },
        isHorizontal: !!_0x4560cc.horizontal,
        stroke: {
          lineStrokeType: _0x4bed7d.SolidLine,
          width: 1,
          color: "#2563EB",
        },
      });
  }
}
function Kn(_0x356cf1, _0x319608) {
  var _0x27c040;
  let _0x1231a9 = _0x319608.segmentId ?? "",
    _0x2aca5d =
      (_0x27c040 = _0x356cf1.getSelfOrHeaderFooterModel(_0x1231a9)) == null
        ? undefined
        : _0x27c040.getBody();
  if (!_0x2aca5d) return null;
  let _0x2a1c32 = _0x2aca5d.paragraphs ?? [],
    _0x45a16b =
      _0x2a1c32.find((_0x3a3017) => {
        let _0x3a1a08 = _0x28e919(_0x2aca5d, _0x3a3017);
        return (
          _0x319608.startOffset >= _0x3a1a08 &&
          _0x319608.startOffset <= _0x3a3017.startIndex
        );
      }) ?? _0x2a1c32[_0x2a1c32.length - 1];
  return _0x45a16b
    ? {
        paragraphId: _0x45a16b.paragraphId,
        segmentId: _0x1231a9,
        position: _0x1ff3c0.OFFSET,
        offset: _0x319608.startOffset - _0x28e919(_0x2aca5d, _0x45a16b),
      }
    : null;
}
function qn(_0x1bf878, _0x1ab945, _0x211e2d) {
  var _0xb7c908, _0x9b2832;
  if (!_0x211e2d) return null;
  let _0xdc18b =
    (_0xb7c908 = _0x1bf878.get(_0xc8fd3e).getRenderUnitById(_0x1ab945)) == null
      ? undefined
      : _0xb7c908.with(_0x139651).activeTarget;
  if (!_0xdc18b) return null;
  let _0x420ed6 =
    _0x211e2d === "below"
      ? {
          startOffset: _0xdc18b.moveRange["endOffset"],
          endOffset: _0xdc18b.moveRange["endOffset"],
        }
      : _0xdc18b.menuRange;
  return {
    startOffset: _0x420ed6.startOffset,
    endOffset: _0x420ed6.endOffset,
    collapsed: _0x420ed6.startOffset === _0x420ed6.endOffset,
    segmentId:
      ((_0x9b2832 = _0xdc18b.paragraph) == null
        ? undefined
        : _0x9b2832.segmentId) ?? "",
  };
}
const G = {
    type: _0x4398e7.COMMAND,
    id: "doc.command.menu-insert-shape",
    handler: async (_0x23f981, _0x5b5c73) => {
      let _0x4c59f8 = _0x23f981
        .get(_0x419138)
        .getCurrentUnitOfType(_0x4f1f7e.UNIVER_DOC);
      if (!_0x4c59f8) return false;
      let _0x41f488 = _0x23f981.get(_0x2bec61),
        _0xecdd8e = _0x4c59f8.getUnitId(),
        _0x3a4c85 = _0x5b5c73.shapeId ?? _0x2d504a(),
        _0x43e246 = _0x5b5c73.width ?? _0x22c395,
        _0x2b3e0c = _0x5b5c73.height ?? _0x21d6f0,
        _0x1877c4 =
          _0x5b5c73.shapeData ?? Gn(_0x5b5c73.value, _0x5b5c73.enhanceParams),
        _0x34a705 =
          qn(_0x23f981, _0xecdd8e, _0x5b5c73.paragraphMenuPlacement) ??
          _0x23f981.get(_0x2b7644).getActiveTextRange();
      if (!_0x34a705) return false;
      let _0x2db0f2 = Kn(_0x4c59f8, _0x34a705);
      return _0x2db0f2
        ? !!_0x41f488.syncExecuteCommand(_0x9f097f.id, {
            unitId: _0xecdd8e,
            shapeId: _0x3a4c85,
            shapeType: _0x5b5c73.value,
            shapeData: _0x1877c4,
            transform: { width: _0x43e246, height: _0x2b3e0c },
            placement: { wrappingStyle: _0x28b351.INLINE, anchor: _0x2db0f2 },
          })
        : false;
    },
  },
  Jn = "doc.shape.edit.panel",
  Yn = "docs-shape-ui.ribbon.shape-format",
  Xn = "doc.shape.object-list.panel",
  Zn = _0x5b82b6("SHAPE_TEXT"),
  Qn = "doc.shape.text.float-menu",
  $n = {
    id: "doc.operation.open-shape-object-list-panel",
    type: _0x4398e7.COMMAND,
    handler: (_0x4f409e, _0xb0d639) => {
      let _0x117cb1 = _0x4f409e.get(_0x580f2f),
        _0x684de3 = _0x4f409e.get(_0x5d6b8b),
        _0x47ff70 = _0x4f409e.get(_0x2cc1e5);
      return (_0xb0d639 == null ? undefined : _0xb0d639.value) === "close"
        ? (_0x117cb1.close(Xn), true)
        : (_0x117cb1.open({
            id: Xn,
            header: {
              title: _0x684de3.t("docs-shape-ui.objectListPanel.title"),
            },
            children: { label: Xn },
            onClose: () => {
              _0x47ff70.focusDrawing(null);
            },
            width: 360,
          }),
          true);
    },
  },
  er = {
    type: _0x4398e7.OPERATION,
    id: "doc.operation.open-doc-shape-format-panel",
    handler() {
      return true;
    },
  };
function tr(_0x5b1806) {
  let _0x1149f8 = _0x5b1806.get(_0x2cc1e5).getFocusDrawings(),
    _0x2f5bc3 = _0x1149f8.length === 1 ? _0x1149f8[0] : null;
  if (!_0x2f5bc3 || _0x2f5bc3.drawingType !== _0xafe67d.DRAWING_SHAPE)
    return null;
  let _0x78e5c3 = _0x5b1806.get(_0x36ebcc),
    _0x35b2c1 = _0x78e5c3.getShapeTypeById(
      _0x2f5bc3.unitId,
      _0x2f5bc3.subUnitId,
      _0x2f5bc3.drawingId,
    ),
    _0x379ba4 = _0x78e5c3.getShapeDataById(
      _0x2f5bc3.unitId,
      _0x2f5bc3.subUnitId,
      _0x2f5bc3.drawingId,
    );
  return _0x35b2c1 === undefined || !_0x379ba4
    ? null
    : { drawing: _0x2f5bc3, shapeData: _0x379ba4, shapeType: _0x35b2c1 };
}
const nr = {
    id: "doc.operation.apply-shape-quick-style",
    type: _0x4398e7.OPERATION,
    handler: (_0x275087, _0x39db8b) => {
      let _0x518592 = tr(_0x275087),
        _0x34ca18 = _0x461f76(
          (_0x39db8b == null ? undefined : _0x39db8b.presetId) ??
            (_0x39db8b == null ? undefined : _0x39db8b.value) ??
            "",
        );
      if (
        !_0x518592 ||
        !_0x34ca18 ||
        _0x34ca18.type !== _0x1b8408(_0x518592.shapeData)
      )
        return false;
      let _0x2f457a = _0x537278(_0x518592.shapeData, _0x34ca18);
      if (!_0x2f457a) return false;
      let { drawing: _0xb79e9f } = _0x518592;
      return _0x275087
        .get(_0x2bec61)
        .executeCommand(_0x35b5aa.id, {
          unitId: _0xb79e9f.unitId,
          shapeId: _0xb79e9f.drawingId,
          shapeData: _0x2f457a,
          oldShapeJSON: { oldShapeData: _0x518592.shapeData },
        });
    },
  },
  rr = {
    id: "doc.operation.update-shape-type",
    type: _0x4398e7.OPERATION,
    handler: (_0x1cfd79, _0x4336bd) => {
      let _0x1d1097 = tr(_0x1cfd79),
        _0x511f7f =
          (_0x4336bd == null ? undefined : _0x4336bd.shapeType) ??
          (_0x4336bd == null ? undefined : _0x4336bd.value);
      if (
        !_0x1d1097 ||
        !_0x511f7f ||
        _0x5f2ca0(_0x1d1097.shapeType) ||
        _0x5f2ca0(_0x511f7f)
      )
        return false;
      let _0x2342d2 = _0x25cfde(_0x1d1097.shapeData, _0x511f7f);
      if (!_0x2342d2) return false;
      let { drawing: _0x18c070 } = _0x1d1097;
      return _0x1cfd79
        .get(_0x2bec61)
        .executeCommand(_0x35b5aa.id, {
          unitId: _0x18c070.unitId,
          shapeId: _0x18c070.drawingId,
          shapeType: _0x511f7f,
          shapeData: _0x2342d2,
          replaceShapeData: true,
          oldShapeJSON: {
            oldShapeType: _0x1d1097.shapeType,
            oldShapeData: _0x1d1097.shapeData,
          },
        });
    },
  };
function K(_0x543de4, _0x4137ae) {
  return function (_0x21d58b, _0xcaea9c) {
    _0x4137ae(_0x21d58b, _0xcaea9c, _0x543de4);
  };
}
function q(_0x440ee4, _0x3984d6, _0x29c6ed, _0x239923) {
  var _0x363d6f = arguments.length,
    _0xbe8390 =
      _0x363d6f < 3
        ? _0x3984d6
        : _0x239923 === null
          ? (_0x239923 = Object.getOwnPropertyDescriptor(_0x3984d6, _0x29c6ed))
          : _0x239923,
    _0x37b539;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xbe8390 = Reflect.decorate(_0x440ee4, _0x3984d6, _0x29c6ed, _0x239923);
  else {
    for (var _0x129882 = _0x440ee4.length - 1; _0x129882 >= 0; _0x129882--)
      (_0x37b539 = _0x440ee4[_0x129882]) &&
        (_0xbe8390 =
          (_0x363d6f < 3
            ? _0x37b539(_0xbe8390)
            : _0x363d6f > 3
              ? _0x37b539(_0x3984d6, _0x29c6ed, _0xbe8390)
              : _0x37b539(_0x3984d6, _0x29c6ed)) || _0xbe8390);
  }
  return (
    _0x363d6f > 3 &&
      _0xbe8390 &&
      Object.defineProperty(_0x3984d6, _0x29c6ed, _0xbe8390),
    _0xbe8390
  );
}
let ir = class extends _0x24c6b6 {
  constructor(_0x2e6aee, _0xca0f6) {
    (super(),
      (this._clipService = _0x2e6aee),
      (this._drawingManagerService = _0xca0f6),
      this._registerImageShapeClipDelegate(),
      this._clipService["setCanUseShapeClip"](true),
      this.disposeWithMe({
        dispose: () => this._clipService["setCanUseShapeClip"](false),
      }));
  }
  _registerImageShapeClipDelegate() {
    let _0x53203d = new Map(),
      _0x42b5f6 = this._clipService["registerClipDelegate"](
        (_0x20eefd, _0x1a6575, _0xbc23e8, _0x272f07, _0x37594f) => {
          let _0x337b28 = _0x1a6575;
          if (_0x337b28 === _0x125a16.None || _0x1a6575 === "custom")
            return false;
          try {
            let _0x3d11ab = _0x53203d.get(_0x1a6575);
            return (
              _0x3d11ab ||
                ((_0x3d11ab = new _0x34ca0d(_0x337b28, "clip-" + _0x1a6575)),
                _0x53203d.set(_0x1a6575, _0x3d11ab)),
              _0x3d11ab.clearAdjustValue(),
              _0x37594f &&
                Object.keys(_0x37594f).length > 0 &&
                _0x3d11ab.setShapeData({ adjustValues: _0x37594f }, true),
              _0x3d11ab.updateContext({ width: _0xbc23e8, height: _0x272f07 }),
              _0x3d11ab.buildClipPath(_0x20eefd, {
                left: 0,
                top: 0,
                width: _0xbc23e8,
                height: _0x272f07,
              })
            );
          } catch {
            return false;
          }
        },
      );
    (this.disposeWithMe(_0x42b5f6),
      this.disposeWithMe({ dispose: () => _0x53203d.clear() }));
  }
  clipByShape(_0x1a3159, _0x11aaa4, _0xf098b, _0x447098, _0x5981d4) {
    let _0x1955b2 = this._drawingManagerService["getDrawingData"](
      _0x1a3159,
      _0x11aaa4,
    )[_0xf098b];
    !_0x1955b2 ||
      _0x1955b2.drawingType !== _0xafe67d.DRAWING_IMAGE ||
      this._drawingManagerService["featurePluginUpdateNotification"]([
        { ..._0x1955b2, prstGeom: _0x447098, adjustValues: _0x5981d4 },
      ]);
  }
};
ir = q([K(0, _0x4834d7(_0xc679f)), K(1, _0x4834d7(_0x2cc1e5))], ir);
const ar = "doc.shape.picker.component",
  or = "doc.image-clip.shape-picker.component";
function sr({ onShapeClick: _0x4725b5, excludeGroups: _0x5ba531 }) {
  return _0x527a55(_0x28d7bb, {
    excludeGroups: _0x5ba531,
    onShapeClick: _0x4725b5,
    scrollContainer: "parent",
  });
}
function cr() {
  let _0x17ddb3 = _0x1ccf61(_0x2cc1e5),
    _0x2cac22 = _0x1ccf61(ir);
  return _0x527a55(_0x394d76, {
    buttonLabel: "docs-shape-ui.crop.shape",
    excludeGroups: [_0x571e9a.Line],
    onShapeClick: (_0x3618b9) => {
      let _0xe75ac8 = _0x17ddb3
        .getFocusDrawings()
        .find((_0x394094) => _0x394094.drawingType === _0xafe67d.DRAWING_IMAGE);
      if (!_0xe75ac8) return;
      let {
        unitId: _0x5e68fc,
        subUnitId: _0xf72a84,
        drawingId: _0x5433a2,
      } = _0xe75ac8;
      _0x2cac22.clipByShape(_0x5e68fc, _0xf72a84, _0x5433a2, _0x3618b9.type);
    },
  });
}
function lr() {
  let _0x317ee2 = _0x1ccf61(_0x367216),
    _0x57979a = _0x1ccf61(_0x2cc1e5),
    _0x41d202 = _0x1ccf61(_0x419138),
    _0x3452e4 = _0x57979a.getFocusDrawings()[0],
    _0x576ca1 = _0x3452e4 ? _0x41d202.getUnitType(_0x3452e4.unitId) : undefined,
    _0x5bc4d0 =
      _0x576ca1 === _0x4f1f7e.UNIVER_DOC
        ? or
        : _0x576ca1 === _0x4f1f7e.UNIVER_SHEET
          ? "sheet.image-clip.shape-picker.component"
          : undefined,
    _0x48727c = _0x5bc4d0 ? _0x317ee2.get(_0x5bc4d0) : undefined;
  return _0x48727c ? _0x527a55(_0x48727c, {}) : null;
}
function ur({ paragraphMenuPlacement: _0x5c7e68 }) {
  let _0x249e78 = _0x1ccf61(_0x2bec61);
  return _0x527a55(sr, {
    onShapeClick: (_0x34b8d2) => {
      _0x249e78.executeCommand(G.id, {
        paragraphMenuPlacement: _0x5c7e68,
        value: _0x34b8d2.type,
        enhanceParams: {
          endArrow: _0x34b8d2.endArrow,
          startArrow: _0x34b8d2.startArrow,
          horizontal: _0x34b8d2.horizontal,
          vertical: _0x34b8d2.vertical,
        },
      });
    },
  });
}
function dr(_0x3aa24f) {
  return (_0x1f50a7) => ({
    id: G.id,
    type: _0x1b4901.SELECTOR,
    selections: [
      {
        label: {
          name: ar,
          hoverable: false,
          selectable: false,
          props: _0x3aa24f
            ? { id: G.id, paragraphMenuPlacement: _0x3aa24f }
            : { id: G.id },
        },
      },
    ],
    icon: "ShapeIcon",
    title: "docs-shape-ui.insertShape",
    tooltip: "docs-shape-ui.insertShape",
    hidden$: _0x1bc34b(_0x1f50a7, _0x4f1f7e.UNIVER_DOC),
  });
}
const fr = dr(),
  pr = dr("below"),
  mr = dr("target");
function hr(_0x377d5e) {
  return {
    id: $n.id,
    type: _0x1b4901.BUTTON,
    icon: "ObjectLayersIcon",
    title: "docs-shape-ui.objectListPanel.open",
    tooltip: "docs-shape-ui.objectListPanel.open",
    hidden$: _0x1bc34b(_0x377d5e, _0x4f1f7e.UNIVER_DOC),
  };
}
function gr(_0x66b939, _0x2cddfe, _0x124853, _0x476ac1, _0x1f4dec, _0x405382) {
  let _0x112bde = {
    unitId: _0x2cddfe,
    shapeId: _0x476ac1,
    shapeData: _0x405382,
    oldShapeJSON: _0x1f4dec,
  };
  return _0x66b939.executeCommand(_0x35b5aa.id, _0x112bde);
}
function _r(_0x5b759a, _0x596230, _0x2adda3, _0x58d574, _0x12179f, _0x2b61d2) {
  let _0x2d08af = {
    unitId: _0x596230,
    shapeId: _0x58d574,
    shapeData: _0x2b61d2,
    oldShapeJSON: _0x12179f,
  };
  return _0x5b759a.executeCommand(_0x35b5aa.id, _0x2d08af);
}
const vr = "docs-shape-ui.shape-format.quick-style-gallery",
  yr = "docs-shape-ui.shape-format.style-ribbon-control",
  br = "docs-shape-ui.shape-format.text-ribbon-control",
  xr = "docs-shape-ui.shape-format.formula-ribbon-control",
  Sr = "docs-shape-ui.shape-format.wrapping-style-label",
  Cr = [
    {
      value: _0x28b351.INLINE,
      label: "docs-shape-ui.textWrap.inline",
      icon: "DocsShapeWrapInlineIcon",
    },
    {
      value: _0x28b351.WRAP_SQUARE,
      label: "docs-shape-ui.textWrap.square",
      icon: "DocsShapeWrapSquareIcon",
    },
    {
      value: _0x28b351.WRAP_TOP_AND_BOTTOM,
      label: "docs-shape-ui.textWrap.topAndBottom",
      icon: "DocsShapeWrapTopBottomIcon",
    },
    {
      value: _0x28b351.BEHIND_TEXT,
      label: "docs-shape-ui.textWrap.behindText",
      icon: "DocsShapeWrapBehindTextIcon",
    },
    {
      value: _0x28b351.IN_FRONT_OF_TEXT,
      label: "docs-shape-ui.textWrap.inFrontText",
      icon: "DocsShapeWrapInFrontOfTextIcon",
    },
  ];
function wr() {
  let _0x53f758 = _0x1ccf61(_0x2bec61),
    _0x151762 = _0x1ccf61(_0x2cc1e5),
    _0x448b44 = _0x1ccf61(_0x36ebcc),
    _0x5c64ab = () => {
      var _0x30c4fd;
      let _0x581773 = _0x151762.getFocusDrawings();
      if (
        _0x581773.length !== 1 ||
        ((_0x30c4fd = _0x581773[0]) == null
          ? undefined
          : _0x30c4fd.drawingType) !== _0xafe67d.DRAWING_SHAPE
      )
        return null;
      let {
          unitId: _0x2c9d99,
          subUnitId: _0x48abc8,
          drawingId: _0x19301f,
        } = _0x581773[0],
        _0x1ff22e = _0x448b44.getShapeTypeById(_0x2c9d99, _0x48abc8, _0x19301f),
        _0x587a8f = _0x448b44.getShapeDataById(_0x2c9d99, _0x48abc8, _0x19301f);
      return _0x1ff22e === undefined || !_0x587a8f
        ? null
        : {
            unitId: _0x2c9d99,
            subUnitId: _0x48abc8,
            drawingId: _0x19301f,
            shapeType: _0x1ff22e,
            shapeData: _0x587a8f,
          };
    },
    _0x1fc811 = _0x2d7643(
      () =>
        new _0x189714((_0x445efd) => {
          let _0x63da34 = () => _0x445efd.next(_0x5c64ab()),
            _0x5c3e0d = _0x151762.focus$["subscribe"](_0x63da34),
            _0x2b35dc = _0x53f758.onCommandExecuted((_0x18c82b) => {
              _0x18c82b.id === _0x158823.id && _0x63da34();
            });
          return (
            _0x63da34(),
            () => {
              (_0x5c3e0d.unsubscribe(), _0x2b35dc.dispose());
            }
          );
        }),
      _0x5c64ab(),
      false,
      [_0x53f758, _0x448b44, _0x151762],
    );
  return {
    selection: _0x1fc811,
    updateShapeData: (_0x11905c) => {
      _0x1fc811 &&
        gr(
          _0x53f758,
          _0x1fc811.unitId,
          _0x1fc811.subUnitId,
          _0x1fc811.drawingId,
          { oldShapeData: _0x1fc811.shapeData },
          _0x11905c,
        );
    },
  };
}
function Tr() {
  let { selection: _0x493dc3, updateShapeData: _0x491069 } = wr();
  return _0x493dc3
    ? _0x527a55(_0x43848c, {
        shapeData: _0x493dc3.shapeData,
        shapeType: _0x493dc3.shapeType,
        onUpdateShapeData: _0x491069,
      })
    : null;
}
function Er() {
  let _0x56b408 = _0x1ccf61(_0x2bec61),
    _0x541384 = _0x1ccf61(_0x5d6b8b),
    { selection: _0xb93fbb } = wr();
  return _0xb93fbb
    ? _0x527a55(_0x5935e1, {
        type: _0x1b8408(_0xb93fbb.shapeData),
        ariaLabel: _0x541384.t("docs-shape-ui.quickStyles"),
        activePresetId: _0x3c2f0b(_0xb93fbb.shapeData),
        onSelect: (_0x31340c) =>
          _0x56b408.executeCommand(nr.id, { presetId: _0x31340c }),
      })
    : null;
}
function Dr() {
  let { selection: _0x25560a, updateShapeData: _0x295e20 } = wr();
  return _0x25560a
    ? _0x527a55(_0xdb41b2, {
        fontFamilyPopupDataComponent: "docs-shape-format-font-family-menu",
        shapeData: _0x25560a.shapeData,
        onUpdateShapeData: _0x295e20,
      })
    : null;
}
function Or() {
  var _0x53cdb2;
  let { selection: _0x3305d5, updateShapeData: _0x35de83 } = wr(),
    _0x49c1e0 = _0x17e7a2({
      hostType: _0x4f1f7e.UNIVER_DOC,
      unitId: (_0x3305d5 == null ? undefined : _0x3305d5.unitId) ?? "",
      subUnitId: (_0x3305d5 == null ? undefined : _0x3305d5.subUnitId) ?? "",
      shapeId: (_0x3305d5 == null ? undefined : _0x3305d5.drawingId) ?? "",
      shapeData: _0x3305d5 == null ? undefined : _0x3305d5.shapeData,
      registerBinding: false,
      showLabels: true,
      dropdownSide: "bottom",
      onUpdateBinding: (_0x4202ad) => _0x35de83({ formulaBinding: _0x4202ad }),
    }),
    _0xe6f76b =
      ((_0x53cdb2 = _0x49c1e0.extensionGroups) == null
        ? undefined
        : _0x53cdb2
            .flatMap((_0x3e2d48) => _0x3e2d48.actions)
            .filter((_0x3de828) => _0x3de828.visible !== false)) ?? [];
  return _0x3305d5 != null && _0x3305d5.shapeData["formulaBinding"]
    ? _0x527a55(_0x422b1e, { actions: _0xe6f76b, panel: _0x49c1e0.panel })
    : null;
}
function kr({ value: _0x5dff01 }) {
  let _0x163210 = _0x1ccf61(_0x5d6b8b),
    _0x1b7933 = Cr.find((_0x3cbb90) => _0x3cbb90.value === _0x5dff01) ?? Cr[0];
  return _0x1b7933
    ? _0x527a55("span", { children: _0x163210.t(_0x1b7933.label) })
    : null;
}
const Ar = "docs-shape-ui.ribbon.shape-format.style-control",
  jr = "docs-shape-ui.ribbon.shape-format.text-control",
  Mr = "docs-shape-ui.ribbon.shape-format.formula-control",
  Nr = "docs-shape-ui.ribbon.shape-format.arrange-forward",
  Pr = "docs-shape-ui.ribbon.shape-format.arrange-backward",
  Fr = "docs-shape-ui.ribbon.shape-format.arrange-front",
  Ir = "docs-shape-ui.ribbon.shape-format.arrange-back",
  Lr = "docs-shape-ui.ribbon.shape-format.wrapping-style";
function Rr(_0x492a52) {
  let _0x441965 = _0x492a52.get(_0x2bec61),
    _0x27ea0f = _0x492a52.get(_0x2cc1e5),
    _0x5784f7 = _0x492a52.get(_0x36ebcc);
  return new _0x189714((_0x5b68b0) => {
    let _0x4d6274 = () => {
        let _0x4ccbcf = J(_0x492a52),
          _0x5030ac = _0x4ccbcf
            ? _0x5784f7.getShapeDataById(
                _0x4ccbcf.unitId,
                _0x4ccbcf.subUnitId,
                _0x4ccbcf.drawingId,
              )
            : null;
        _0x5b68b0.next(_0x5030ac ? (_0x3c2f0b(_0x5030ac) ?? "") : "");
      },
      _0x3b6086 = _0x27ea0f.focus$["subscribe"](_0x4d6274),
      _0x301c1d = _0x441965.onCommandExecuted((_0x5f2156) => {
        _0x5f2156.id === _0x158823.id && _0x4d6274();
      });
    return (
      _0x4d6274(),
      () => {
        (_0x3b6086.unsubscribe(), _0x301c1d.dispose());
      }
    );
  });
}
function J(_0x122740) {
  var _0xa2af4d;
  let _0x450e51 = _0x122740.get(_0x2cc1e5).getFocusDrawings();
  return _0x450e51.length === 1 &&
    ((_0xa2af4d = _0x450e51[0]) == null ? undefined : _0xa2af4d.drawingType) ===
      _0xafe67d.DRAWING_SHAPE
    ? _0x450e51[0]
    : null;
}
function zr(_0x763f2c) {
  return (_0x763f2c == null ? undefined : _0x763f2c.layoutType) ===
    _0x413dda.WRAP_NONE
    ? _0x763f2c.behindDoc === _0x17d8b7.TRUE
      ? _0x28b351.BEHIND_TEXT
      : _0x28b351.IN_FRONT_OF_TEXT
    : (_0x763f2c == null ? undefined : _0x763f2c.layoutType) ===
        _0x413dda.WRAP_SQUARE
      ? _0x28b351.WRAP_SQUARE
      : (_0x763f2c == null ? undefined : _0x763f2c.layoutType) ===
          _0x413dda.WRAP_TOP_AND_BOTTOM
        ? _0x28b351.WRAP_TOP_AND_BOTTOM
        : _0x28b351.INLINE;
}
function Br(_0x44d40d) {
  let _0x4d1a56 = _0x44d40d.get(_0x2bec61),
    _0x18c527 = _0x44d40d.get(_0x2cc1e5),
    _0x1633c0 = _0x44d40d.get(_0x419138);
  return new _0x189714((_0x146310) => {
    let _0x594f53 = () => {
        var _0x10941b;
        let _0x227c96 = J(_0x44d40d),
          _0x5cced7 = _0x227c96
            ? _0x1633c0.getUnit(_0x227c96.unitId, _0x4f1f7e.UNIVER_DOC)
            : undefined;
        _0x146310.next(
          zr(
            _0x227c96
              ? _0x5cced7 == null ||
                (_0x10941b = _0x5cced7.getSnapshot().drawings) == null
                ? undefined
                : _0x10941b[_0x227c96.drawingId]
              : undefined,
          ),
        );
      },
      _0x3b0ddd = _0x18c527.focus$["subscribe"](_0x594f53),
      _0x2d2a17 = _0x4d1a56.onCommandExecuted((_0x2fe1af) => {
        _0x2fe1af.id === _0x401540.id && _0x594f53();
      });
    return (
      _0x594f53(),
      () => {
        (_0x3b0ddd.unsubscribe(), _0x2d2a17.dispose());
      }
    );
  }).pipe(_0x3284f9());
}
function Vr(_0x25c0ee, _0x4fb485 = false) {
  let _0x29cd77 = _0x25c0ee.get(_0x2bec61),
    _0x1c9d10 = _0x25c0ee.get(_0x2cc1e5),
    _0x5a1d3b = _0x25c0ee.get(_0x36ebcc);
  return new _0x189714((_0x42d792) => {
    let _0x16c0af = () => {
        let _0x2566aa = J(_0x25c0ee);
        if (!_0x2566aa) {
          _0x42d792.next(true);
          return;
        }
        let _0x334a39 = _0x5a1d3b.getShapeDataById(
          _0x2566aa.unitId,
          _0x2566aa.subUnitId,
          _0x2566aa.drawingId,
        );
        _0x42d792.next(
          !_0x334a39 || (_0x4fb485 && _0x334a39.formulaBinding == null),
        );
      },
      _0x3db997 = _0x1c9d10.focus$["subscribe"](_0x16c0af),
      _0x99e926 = _0x29cd77.onCommandExecuted((_0x154afe) => {
        _0x154afe.id === _0x158823.id && _0x16c0af();
      });
    return (
      _0x16c0af(),
      () => {
        (_0x3db997.unsubscribe(), _0x99e926.dispose());
      }
    );
  });
}
function Hr(_0x3373a3) {
  let _0xb114cc = _0x3373a3.get(_0x2cc1e5),
    _0x565b0a = _0x3373a3.get(_0x36ebcc);
  return _0xb114cc.focus$["pipe"](
    _0x272dbb(_0xb114cc.getFocusDrawings()),
    _0x1fca94(() => {
      let _0x3cc52a = J(_0x3373a3),
        _0x63a059 = _0x3cc52a
          ? _0x565b0a.getShapeTypeById(
              _0x3cc52a.unitId,
              _0x3cc52a.subUnitId,
              _0x3cc52a.drawingId,
            )
          : undefined;
      return _0x63a059 === undefined || _0x5f2ca0(_0x63a059);
    }),
  );
}
function Ur(_0x524ff3) {
  return {
    id: nr.id,
    type: _0x1b4901.SELECTOR,
    icon: "PaintIcon",
    title: "shape-editor-ui.toolbar.quickStyles",
    tooltip: "shape-editor-ui.toolbar.quickStyles",
    selections: [{ label: { name: vr, hoverable: false, selectable: false } }],
    value$: Rr(_0x524ff3),
    hidden$: Vr(_0x524ff3),
  };
}
function Wr(_0x578f69) {
  return {
    id: rr.id,
    type: _0x1b4901.SELECTOR,
    icon: "ShapeIcon",
    title: "shape-editor-ui.toolbar.changeShape",
    tooltip: "shape-editor-ui.toolbar.changeShape",
    slot: true,
    selections: [
      { label: { name: _0xe95a32, hoverable: false, selectable: false } },
    ],
    hidden$: Hr(_0x578f69),
  };
}
function Gr(_0x2f3d08, _0x344424, _0x502a7a = false) {
  return (_0xb2b262) => ({
    id: _0x2f3d08,
    type: _0x1b4901.BUTTON,
    label: { name: _0x344424, hoverable: false, selectable: false },
    hidden$: Vr(_0xb2b262, _0x502a7a),
  });
}
const Kr = Gr(Ar, yr),
  qr = Gr(jr, br),
  Jr = Gr(Mr, xr, true);
function Yr(_0x61ed20) {
  return {
    id: Lr,
    type: _0x1b4901.SELECTOR,
    icon: Cr[0].icon,
    label: Sr,
    selectionsCommandId: _0x18a5f2.id,
    selections: Cr.map(
      ({ icon: _0x55b6a9, label: _0x5d0fbf, value: _0x3d28fe }) => ({
        value: _0x3d28fe,
        label: _0x5d0fbf,
        icon: _0x55b6a9,
        params: () => {
          let _0x408f09 = J(_0x61ed20);
          return _0x408f09
            ? {
                unitId: _0x408f09.unitId,
                subUnitId: _0x408f09.subUnitId,
                drawings: [
                  {
                    unitId: _0x408f09.unitId,
                    subUnitId: _0x408f09.subUnitId,
                    drawingId: _0x408f09.drawingId,
                  },
                ],
                wrappingStyle: _0x3d28fe,
              }
            : undefined;
        },
      }),
    ),
    value$: Br(_0x61ed20),
    hidden$: Vr(_0x61ed20),
  };
}
function Xr(_0x18a292, _0x3eebff, _0x360c65, _0x94edd1) {
  return (_0x18d62d) => ({
    id: _0x18a292,
    commandId: _0x45b638.id,
    type: _0x1b4901.BUTTON,
    icon: _0x360c65,
    title: _0x94edd1,
    tooltip: _0x94edd1,
    hidden$: Vr(_0x18d62d),
    params: () => {
      let _0x83c811 = J(_0x18d62d);
      return _0x83c811
        ? {
            unitId: _0x83c811.unitId,
            subUnitId: _0x83c811.subUnitId,
            drawingIds: [_0x83c811.drawingId],
            arrangeType: _0x3eebff,
          }
        : undefined;
    },
  });
}
const Zr = Xr(
    Nr,
    _0x1aa8f8.forward,
    "MoveUpIcon",
    "shape-editor-ui.arrange.forward",
  ),
  Qr = Xr(
    Pr,
    _0x1aa8f8.backward,
    "MoveDownIcon",
    "shape-editor-ui.arrange.backward",
  ),
  $r = Xr(Fr, _0x1aa8f8.front, "TopmostIcon", "shape-editor-ui.arrange.front"),
  ei = Xr(Ir, _0x1aa8f8.back, "BottomIcon", "shape-editor-ui.arrange.back");
function ti(_0xd67026) {
  return {
    id: er.id,
    type: _0x1b4901.BUTTON,
    icon: "ShapeFormatSettingIcon",
    title: "docs-shape-ui.formatShape",
    tooltip: "docs-shape-ui.formatShape",
    hidden$: Vr(_0xd67026),
    params: () => {
      let _0xd75ec1 = J(_0xd67026);
      return _0xd75ec1
        ? {
            unitId: _0xd75ec1.unitId,
            subUnitId: _0xd75ec1.subUnitId,
            drawingId: _0xd75ec1.drawingId,
          }
        : undefined;
    },
  };
}
const ni = {
    [_0x292277.RIBBON]: {
      [Yn]: {
        order: 100,
        title: "docs-shape-ui.formatShape",
        contextual: true,
        "docs-shape-ui.ribbon.shape-format.quick-styles": {
          order: 0,
          [nr.id]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: Ur,
          },
          [rr.id]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: Wr,
          },
        },
        "docs-shape-ui.ribbon.shape-format.style": {
          order: 1,
          [Ar]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 104 },
            menuItemFactory: Kr,
          },
        },
        "docs-shape-ui.ribbon.shape-format.text": {
          order: 2,
          [jr]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 344 },
            menuItemFactory: qr,
          },
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
              showLabel: true,
            },
            menuItemFactory: Yr,
          },
          [Nr]: {
            order: 1,
            gridLayout: { row: 1, column: 3 },
            menuItemFactory: Zr,
          },
          [Pr]: {
            order: 2,
            gridLayout: { row: 2, column: 3 },
            menuItemFactory: Qr,
          },
          [Fr]: {
            order: 3,
            gridLayout: { row: 1, column: 4 },
            menuItemFactory: $r,
          },
          [Ir]: {
            order: 4,
            gridLayout: { row: 2, column: 4 },
            menuItemFactory: ei,
          },
        },
        "docs-shape-ui.ribbon.shape-format.formula": {
          order: 4,
          [Mr]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 120 },
            menuItemFactory: Jr,
          },
        },
        "docs-shape-ui.ribbon.shape-format.advanced": {
          order: 5,
          [er.id]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: ti,
          },
          [_0x14e309.id]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: _0x675df5,
          },
        },
      },
    },
  },
  ri = {
    [_0x4ec694.MEDIA]: {
      [G.id]: {
        order: 4,
        menuItemFactory: (_0x1a211f) => ({
          ...fr(_0x1a211f),
          title: undefined,
        }),
      },
    },
    [_0x4ec694.OTHERS]: {
      [$n.id]: {
        order: 0,
        gridLayout: { row: 1, column: 1, rowSpan: 2, showLabel: true },
        menuItemFactory: hr,
      },
    },
    [_0x19802f.PARAGRAPH]: {
      [_0x2328b8.LAYOUT]: {
        [_0x2505f0]: {
          [G.id]: { replace: true, order: 8, menuItemFactory: pr },
        },
      },
      [_0xeec543]: {
        [_0x2328b8.LAYOUT]: {
          [G.id]: { replace: true, order: 8, menuItemFactory: pr },
        },
      },
      [_0x1ee159]: {
        [_0x2328b8.LAYOUT]: {
          [G.id]: { replace: true, order: 8, menuItemFactory: mr },
        },
      },
      [_0x255bf8]: {
        insert: { [G.id]: { replace: true, order: 2, menuItemFactory: fr } },
      },
      [_0x2f12ce]: {
        insert: {
          [G.id + ".below"]: { replace: true, order: 2, menuItemFactory: pr },
        },
      },
    },
  };
var ii = "@univerjs-pro/docs-shape-ui",
  ai = "1.0.0-insiders.20260907-70fc579";
const oi = {
    type: _0x4398e7.OPERATION,
    id: "doc.operation.close-doc-shape-format-panel",
    handler() {
      return true;
    },
  },
  si = {};
function ci(_0x5a185f) {
  return _0x5a185f.trim() || undefined;
}
function li(_0x2b20ef, _0x34d912, _0x606306) {
  var _0x1ec544, _0x1bf444;
  return (
    ((_0x1ec544 = _0x2b20ef.name) == null ? undefined : _0x1ec544.trim()) ||
    ((_0x1bf444 = _0x2b20ef.title) == null ? undefined : _0x1bf444.trim()) ||
    _0x12e771(_0x606306, _0x128234(_0x2b20ef.drawingType)) +
      "\x20" +
      (_0x34d912 + 1)
  );
}
function ui() {
  let _0x5081cf = _0x1ccf61(_0x5d6b8b),
    _0x275b4b = _0x1ccf61(_0x2bec61),
    _0x5e4e32 = _0x1ccf61(_0x419138),
    _0x43bd97 = _0x1ccf61(_0x17e224),
    _0x1134ea = _0x1ccf61(_0x2cc1e5),
    _0x3db9cb = _0x1ccf61(_0xc8fd3e),
    [, _0x5e22d8] = _0x3d0a97((_0x25abb7) => _0x25abb7 + 1, 0),
    _0x58c9c3 = _0x5e4e32.getCurrentUnitOfType(_0x4f1f7e.UNIVER_DOC),
    _0x54322e = (_0x58c9c3 == null ? undefined : _0x58c9c3.getUnitId()) ?? "",
    _0x2af418 = _0x54322e,
    _0x66aa9d = _0x2d7643(
      () => _0x1134ea.focus$,
      _0x1134ea.getFocusDrawings(),
      false,
      [_0x1134ea],
    );
  _0x1ba692(() => {
    let _0x512dbf = _0x275b4b.onCommandExecuted(() => _0x5e22d8());
    return () => _0x512dbf.dispose();
  }, [_0x275b4b]);
  let _0x5ba9e5 = _0x46ff5b(() => _0x4e4559(_0x5081cf), [_0x5081cf]),
    _0x1fa3f3 = _0x54322e ? _0x43bd97.getDrawingData(_0x54322e, _0x2af418) : {},
    _0x4d4af9 = (
      _0x54322e ? _0x43bd97.getDrawingOrder(_0x54322e, _0x2af418) : []
    )
      .map((_0x224cc1) => _0x1fa3f3[_0x224cc1])
      .filter((_0x33a80a) => !!_0x33a80a)
      .reverse(),
    _0x2436b0 = _0x4d4af9.reduce(
      (_0x16d83d, _0x4e29ff) => (
        (_0x16d83d[_0x3a977f(_0x4e29ff.drawingType)] += 1),
        _0x16d83d
      ),
      { canvas: 0, floating: 0 },
    ),
    _0x409521 = { canvas: 0, floating: 0 },
    _0x1b19e1 = _0x4d4af9.map((_0x5e0c48, _0x1fa631) => {
      let _0x3fe8ce = _0x3a977f(_0x5e0c48.drawingType),
        _0x5a353e = _0x3fe8ce === _0x4f1ad6,
        _0x280c00 = _0x409521[_0x3fe8ce]++;
      return {
        id: _0x5e0c48.drawingId,
        name: li(_0x5e0c48, _0x1fa631, _0x5081cf),
        description: _0x5e0c48.description,
        visible: _0x5e0c48.hidden !== true,
        selectable: _0x5e0c48.selectable !== false,
        sectionId: _0x3fe8ce,
        sectionTitle: _0x5a353e
          ? _0x5ba9e5.sectionFloating
          : _0x5ba9e5.sectionCanvas,
        capabilities: _0x5a353e
          ? { arrange: false, reorder: false }
          : undefined,
        canMoveForward: !_0x5a353e && _0x280c00 > 0,
        canMoveBackward: !_0x5a353e && _0x280c00 < _0x2436b0.canvas - 1,
        canReorder: !_0x5a353e,
      };
    }),
    _0x3191fb = _0x46ff5b(
      () =>
        (_0x66aa9d ?? [])
          .filter(
            (_0x5ac66b) =>
              _0x5ac66b.unitId === _0x54322e &&
              _0x5ac66b.subUnitId === _0x2af418,
          )
          .map((_0x520ab8) => _0x520ab8.drawingId),
      [_0x66aa9d, _0x2af418, _0x54322e],
    ),
    _0x5dba49 = _0x3191fb[_0x3191fb.length - 1] ?? null,
    _0xcfb26f = (_0x4c26c1) =>
      _0x43bd97.getDrawingByParam({
        unitId: _0x54322e,
        subUnitId: _0x2af418,
        drawingId: _0x4c26c1,
      }) ?? null,
    _0x22de44 = async (_0x2fd416) => {
      !_0x54322e ||
        !_0x2fd416.length ||
        (await _0x275b4b.executeCommand(_0x27f5fb.id, {
          unitId: _0x54322e,
          patches: _0x2fd416,
        }));
    },
    _0x38c73c = (_0x274769, _0x4d22c8) => {
      if (!_0x54322e) return;
      let _0x340182 = _0x4d22c8
        ? _0x3191fb.includes(_0x274769)
          ? _0x3191fb.filter((_0x5dde33) => _0x5dde33 !== _0x274769)
          : [..._0x3191fb, _0x274769]
        : [_0x274769];
      _0x275b4b.syncExecuteCommand(
        _0x5dbe9e.id,
        _0x340182.map((_0x3b5d5a) => ({
          unitId: _0x54322e,
          subUnitId: _0x2af418,
          drawingId: _0x3b5d5a,
        })),
      );
      let _0x8e3825 = _0x340182[_0x340182.length - 1];
      _0x8e3825
        ? _0x3574de(_0x3db9cb, {
            unitId: _0x54322e,
            subUnitId: _0x2af418,
            drawingId: _0x8e3825,
          })
        : _0x57883e(_0x3db9cb, _0x54322e);
    },
    _0x4aa6ad = async (_0x31dc31, _0x35f220) => {
      await _0x22de44(
        _0x31dc31
          .map((_0x4100df) => _0xcfb26f(_0x4100df))
          .filter((_0x311bd1) => !!_0x311bd1)
          .filter((_0x2d896f) => (_0x2d896f.hidden !== true) !== _0x35f220)
          .map((_0x4a3fcc) => ({
            drawingId: _0x4a3fcc.drawingId,
            hidden: !_0x35f220,
          })),
      );
    },
    _0x128d70 = async (_0x367c6d) => {
      let _0x14b60b = _0xcfb26f(_0x367c6d);
      _0x14b60b &&
        (await _0x22de44([
          {
            drawingId: _0x367c6d,
            selectable: _0x14b60b.selectable === false && undefined,
          },
        ]));
    },
    _0x19f0fc = async (_0x5ca508, _0x5a3386) => {
      let _0x1595cd = _0xcfb26f(_0x5ca508),
        _0x48a4b9 = ci(_0x5a3386);
      !_0x1595cd ||
        ((_0x1595cd.name ?? undefined) === _0x48a4b9 &&
          (_0x1595cd.title || undefined) === _0x48a4b9) ||
        (await _0x22de44([
          { drawingId: _0x5ca508, name: _0x48a4b9, title: _0x48a4b9 },
        ]));
    },
    _0x2d0e8c = async (_0x2e92e9, _0x235003) => {
      let _0x1393d8 = _0xcfb26f(_0x2e92e9),
        _0x2acaf8 = ci(_0x235003);
      !_0x1393d8 ||
        (_0x1393d8.description ?? undefined) === _0x2acaf8 ||
        (await _0x22de44([{ drawingId: _0x2e92e9, description: _0x2acaf8 }]));
    },
    _0x4b496e = async (_0x52b573, _0x1b0e09) => {
      _0x54322e &&
        (await _0x275b4b.executeCommand(_0x45b638.id, {
          unitId: _0x54322e,
          subUnitId: _0x2af418,
          drawingIds: [_0x52b573],
          arrangeType: _0x1b0e09,
        }));
    };
  return _0x54322e
    ? _0x527a55(_0x31f5f7, {
        items: _0x1b19e1,
        selectedIds: _0x3191fb,
        focusedId: _0x5dba49,
        labels: _0x5ba9e5,
        onSelect: _0x38c73c,
        onSetVisible: _0x4aa6ad,
        onCommitName: _0x19f0fc,
        onCommitDescription: _0x2d0e8c,
        onMoveForward: async (_0x1b2f3c) =>
          _0x4b496e(_0x1b2f3c, _0x1aa8f8.forward),
        onMoveBackward: async (_0x5a459a) =>
          _0x4b496e(_0x5a459a, _0x1aa8f8.backward),
        onToggleSelectable: _0x128d70,
      })
    : _0x527a55("div", {
        className:
          "univer-flex\x20univer-size-full\x20univer-items-center\x20univer-justify-center\x20univer-text-sm\x20univer-text-gray-500",
        children: _0x5ba9e5.title,
      });
}
let di = class {
  constructor(_0x1c6d12) {
    this._renderManagerService = _0x1c6d12;
  }
  updateShapeFillImage(_0x1b6f2d, _0x47ad4c) {
    let _0x538505 = this._renderManagerService["getRenderUnitById"](
        _0x1b6f2d.unitId,
      ),
      _0x3a80b8 = _0x538505 == null ? undefined : _0x538505.scene;
    if (!_0x3a80b8) return;
    let _0x49bb50 = _0x1f99b7(_0x1b6f2d),
      _0x3011ee = _0x3a80b8.getObjectIncludeInGroup(_0x49bb50);
    _0x3011ee == null || _0x3011ee.setFillImage(_0x47ad4c);
  }
};
di = q([K(0, _0xc8fd3e)], di);
function fi() {
  let _0x34bf3a = _0x1ccf61(_0x2cc1e5),
    _0x432349 = _0x2d7643(
      () => _0x34bf3a.focus$,
      _0x34bf3a.getFocusDrawings(),
      false,
      [_0x34bf3a],
    );
  return _0x432349.length === 0
    ? null
    : _0x527a55("div", {
        children: _0x3649c9("div", {
          className: "univer-box-border univer-px-4 univer-text-sm",
          children: [
            _0x527a55(_0x4ee488, { drawings: _0x432349, hasCropper: false }),
            _0x527a55(_0x148668, { drawings: _0x432349 }),
            _0x527a55(_0x5930fc, { drawings: _0x432349 }),
          ],
        }),
      });
}
function pi(_0x3bd280) {
  let {
      unitId: _0x1b40c6,
      subUnitId: _0x3db02c,
      shapeId: _0x2059ef,
    } = _0x3bd280,
    _0xd6e69a = _0x1ccf61(_0x2bec61),
    _0x43900f = _0x1ccf61(di);
  return _0x527a55(_0x258fbe, {
    ..._0x3bd280,
    positionEditor: _0x527a55(fi, {}),
    onUpdateShapeData: (_0x45ed57, _0xf7b0ba) => {
      gr(_0xd6e69a, _0x1b40c6, _0x3db02c, _0x2059ef, _0x45ed57, _0xf7b0ba);
    },
    onUpdateLineShapeData: (_0x1cdabf, _0x37b86e) => {
      _r(_0xd6e69a, _0x1b40c6, _0x3db02c, _0x2059ef, _0x1cdabf, _0x37b86e);
    },
    onUpdateShapeFillImage: (_0x497d3d) => {
      _0x43900f.updateShapeFillImage(
        { unitId: _0x1b40c6, subUnitId: _0x3db02c, drawingId: _0x2059ef },
        _0x497d3d,
      );
    },
  });
}
const mi = "doc.shape.floating-toolbar";
function hi(_0x7ffd8f, _0x4637f3) {
  var _0x559790;
  let _0xad2df3 =
    _0x7ffd8f == null || (_0x559790 = _0x7ffd8f.getSnapshot().drawings) == null
      ? undefined
      : _0x559790[_0x4637f3];
  return _0xad2df3
    ? _0xad2df3.layoutType === _0x413dda.WRAP_NONE
      ? _0xad2df3.behindDoc === _0x17d8b7.TRUE
        ? _0x28b351.BEHIND_TEXT
        : _0x28b351.IN_FRONT_OF_TEXT
      : _0xad2df3.layoutType === _0x413dda.WRAP_SQUARE
        ? _0x28b351.WRAP_SQUARE
        : _0xad2df3.layoutType === _0x413dda.WRAP_TOP_AND_BOTTOM
          ? _0x28b351.WRAP_TOP_AND_BOTTOM
          : _0x28b351.INLINE
    : _0x28b351.INLINE;
}
function gi(_0x56e683) {
  let _0x197b24 = _0x1ccf61(_0x268b3a),
    _0x4de568 = _0x2d7643(
      () => _0x197b24.visible$,
      _0x197b24.getVisible(),
      false,
      [_0x197b24],
    ),
    _0x5da3a8 = _0x56e683.popup["extraProps"];
  return _0x4de568
    ? _0x527a55(_i, {
        ..._0x5da3a8,
        canvasElement: _0x56e683.popup["canvasElement"],
      })
    : null;
}
function _i(_0x526f34) {
  let _0x4d4fb4 = _0x1ccf61(_0x2bec61),
    _0x49904b = _0x1ccf61(_0x5d6b8b),
    _0x4290e9 = _0x1ccf61(_0x36ebcc),
    _0x33a3ea = _0x1ccf61(_0x419138),
    {
      unitId: _0x4b0168,
      subUnitId: _0x18a1b6,
      drawingId: _0x3ad75e,
      shapeType: _0x1a169f,
    } = _0x526f34,
    [_0x4760f9, _0x660d38] = _0x31ba2d(_0x526f34.shapeData),
    _0x24d212 = _0x33a3ea.getUnit(_0x4b0168, _0x4f1f7e.UNIVER_DOC) ?? undefined,
    [_0x3ef460, _0x262d3e] = _0x31ba2d(() => hi(_0x24d212, _0x3ad75e)),
    _0x1f8bdb = _0x46ff5b(() => _0x23ebf1(_0x4760f9), [_0x4760f9]),
    _0x24d74f = _0x46ff5b(() => _0x5e959c(_0x4760f9), [_0x4760f9]);
  _0x1ba692(() => {
    let _0x5499da = _0x4d4fb4.onCommandExecuted((_0x1547c0) => {
      if (_0x1547c0.id !== _0x158823.id) return;
      let _0x3e0d58 = _0x4290e9.getShapeDataById(
        _0x4b0168,
        _0x18a1b6,
        _0x3ad75e,
      );
      _0x3e0d58 && _0x660d38(_0x3e0d58);
    });
    return () => _0x5499da.dispose();
  }, [_0x4d4fb4, _0x4290e9, _0x3ad75e, _0x18a1b6, _0x4b0168]);
  let _0x43ce05 = (_0x464201) => {
      _0x660d38((_0x4832ae) => ({ ..._0x4832ae, ..._0x464201 }));
    },
    _0x1dd4ea = (_0x3231ad) => {
      let _0x5070cc = _0xc4aed0(_0x4760f9, _0x3231ad);
      (gr(
        _0x4d4fb4,
        _0x4b0168,
        _0x18a1b6,
        _0x3ad75e,
        { oldShapeData: { shapeText: _0x4760f9.shapeText } },
        _0x5070cc,
      ),
        _0x43ce05(_0x5070cc));
    },
    _0x23af45 = (_0x6f2ca9) => {
      (_0x262d3e(_0x6f2ca9),
        _0x4d4fb4.executeCommand(_0x18a5f2.id, {
          unitId: _0x4b0168,
          subUnitId: _0x18a1b6,
          drawings: [
            { unitId: _0x4b0168, subUnitId: _0x18a1b6, drawingId: _0x3ad75e },
          ],
          wrappingStyle: _0x6f2ca9,
        }));
    },
    _0xfe781a = _0x17e7a2({
      hostType: _0x4f1f7e.UNIVER_DOC,
      unitId: _0x4b0168,
      subUnitId: _0x18a1b6,
      shapeId: _0x3ad75e,
      shapeData: _0x4760f9,
      onUpdateBinding: (_0x63d559) => {
        let _0x8dc963 = { formulaBinding: _0x63d559 };
        (gr(
          _0x4d4fb4,
          _0x4b0168,
          _0x18a1b6,
          _0x3ad75e,
          { oldShapeData: { formulaBinding: _0x4760f9.formulaBinding } },
          _0x8dc963,
        ),
          _0x43ce05(_0x8dc963));
      },
    }),
    _0x337a48 = [
      {
        label: _0x49904b.t("docs-shape-ui.textWrap.inline"),
        value: _0x28b351.INLINE,
        icon: _0x527a55(_0x86d610, {}),
      },
      {
        label: _0x49904b.t("docs-shape-ui.textWrap.square"),
        value: _0x28b351.WRAP_SQUARE,
        icon: _0x527a55(_0x86d610, {}),
      },
      {
        label: _0x49904b.t("docs-shape-ui.textWrap.topAndBottom"),
        value: _0x28b351.WRAP_TOP_AND_BOTTOM,
        icon: _0x527a55(_0x86d610, {}),
      },
      {
        label: _0x49904b.t("docs-shape-ui.textWrap.behindText"),
        value: _0x28b351.BEHIND_TEXT,
        icon: _0x527a55(_0x86d610, {}),
      },
      {
        label: _0x49904b.t("docs-shape-ui.textWrap.inFrontText"),
        value: _0x28b351.IN_FRONT_OF_TEXT,
        icon: _0x527a55(_0x86d610, {}),
      },
    ];
  return _0x3649c9(_0x44e06a, {
    children: [
      _0x527a55(_0x490be1, {
        canvasElement: _0x526f34.canvasElement,
        shapeData: _0x4760f9,
        shapeType: _0x1a169f,
        textStyle: {
          ff: _0x1a5129.shapeText["fontFamily"],
          fs: _0x1a5129.shapeText["fontSize"],
          cl: { rgb: _0x1a5129.shapeText["color"] },
          ..._0x1f8bdb,
        },
        textModel: _0x24d74f
          ? {
              ha: _0x24d74f.ha ?? _0x54202c.LEFT,
              va: _0x24d74f.va ?? _0x33489a.TOP,
            }
          : null,
        wrappingStyle: _0x3ef460,
        wrappingStyleOptions: _0x337a48,
        enableShapeFillReset: true,
        enableShapeStrokeReset: true,
        enableTextBackgroundReset: true,
        defaultFillColor: _0x1a5129.fill,
        defaultGradientEndColor: _0x1a5129.gradientEndColor,
        defaultStrokeColor: _0x1a5129.stroke,
        extensionGroups: _0xfe781a.extensionGroups,
        floatingObjectToolbarPosition: _0x73db9d.DOC,
        onUpdateShapeData: (_0x35466f, _0x16934b) => {
          (gr(_0x4d4fb4, _0x4b0168, _0x18a1b6, _0x3ad75e, _0x35466f, _0x16934b),
            _0x16934b && _0x43ce05(_0x16934b));
        },
        onUpdateText: _0x1dd4ea,
        onUpdateWrappingStyle: (_0x4d84e5) => _0x23af45(_0x4d84e5),
        onOpenPanel: () => {
          _0x4d4fb4.executeCommand(er.id, {
            unitId: _0x4b0168,
            subUnitId: _0x18a1b6,
            drawingId: _0x3ad75e,
          });
        },
        onDelete: () => {
          _0x4d4fb4.executeCommand(_0x31a09e.id, {
            unitId: _0x4b0168,
            drawings: [
              { unitId: _0x4b0168, subUnitId: _0x18a1b6, drawingId: _0x3ad75e },
            ],
          });
        },
      }),
      _0xfe781a.panel,
    ],
  });
}
function vi({ variant: _0xc52911, extend: _0x31a9d4, ..._0xb45a27 }) {
  let _0x50e2a7 = _0x527a55("rect", {
    x: "7",
    y: "5.5",
    width: "6",
    height: "9",
    rx: "1",
    fill: "currentColor",
    fillOpacity: "0.14",
    stroke: "currentColor",
    strokeWidth: "1.2",
  });
  return _0x3649c9("svg", {
    "aria-hidden": "true",
    fill: "none",
    height: "1em",
    viewBox: "0 0 20 20",
    width: "1em",
    ..._0xb45a27,
    children: [
      _0xc52911 === "inline" &&
        _0x3649c9(_0x44e06a, {
          children: [
            _0x527a55("path", {
              d: "M2 3.5h16M2 16.5h16M2 10h5M13 10h5",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
            _0x527a55("rect", {
              x: "8",
              y: "7",
              width: "4",
              height: "6",
              rx: "0.8",
              fill: "currentColor",
              fillOpacity: "0.14",
              stroke: "currentColor",
              strokeWidth: "1.2",
            }),
          ],
        }),
      _0xc52911 === "square" &&
        _0x3649c9(_0x44e06a, {
          children: [
            _0x527a55("path", {
              d: "M2 3h16M2 7.5h3M15 7.5h3M2 10h3M15 10h3M2 12.5h3M15 12.5h3M2 17h16",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
            _0x50e2a7,
          ],
        }),
      _0xc52911 === "top-bottom" &&
        _0x3649c9(_0x44e06a, {
          children: [
            _0x527a55("path", {
              d: "M2 3h16M2 17h16",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
            _0x50e2a7,
          ],
        }),
      _0xc52911 === "behind" &&
        _0x3649c9(_0x44e06a, {
          children: [
            _0x50e2a7,
            _0x527a55("path", {
              d: "M2 3h16M2 7.5h16M2 10h16M2 12.5h16M2 17h16",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
          ],
        }),
      _0xc52911 === "front" &&
        _0x3649c9(_0x44e06a, {
          children: [
            _0x527a55("path", {
              d: "M2 3h16M2 7.5h16M2 10h16M2 12.5h16M2 17h16",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "1.2",
            }),
            _0x527a55("rect", {
              x: "7",
              y: "5.5",
              width: "6",
              height: "9",
              rx: "1",
              fill: "currentColor",
            }),
          ],
        }),
    ],
  });
}
const yi = (_0x111056) => (_0xb1724c) =>
    _0x527a55(vi, { ..._0xb1724c, variant: _0x111056 }),
  bi = {
    DocsShapeWrapInlineIcon: yi("inline"),
    DocsShapeWrapSquareIcon: yi("square"),
    DocsShapeWrapTopBottomIcon: yi("top-bottom"),
    DocsShapeWrapBehindTextIcon: yi("behind"),
    DocsShapeWrapInFrontOfTextIcon: yi("front"),
  };
function xi(_0x4334fc) {
  "@babel/helpers - typeof";
  return (
    (xi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x55936d) {
            return typeof _0x55936d;
          }
        : function (_0xd0161c) {
            return _0xd0161c &&
              typeof Symbol == "function" &&
              _0xd0161c.constructor === Symbol &&
              _0xd0161c !== Symbol.prototype
              ? "symbol"
              : typeof _0xd0161c;
          }),
    xi(_0x4334fc)
  );
}
function Si(_0x45ad9f, _0x56c3fb) {
  if (xi(_0x45ad9f) != "object" || !_0x45ad9f) return _0x45ad9f;
  var _0x24b634 = _0x45ad9f[Symbol.toPrimitive];
  if (_0x24b634 !== undefined) {
    var _0x2f4376 = _0x24b634.call(_0x45ad9f, _0x56c3fb || "default");
    if (xi(_0x2f4376) != "object") return _0x2f4376;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x56c3fb === "string" ? String : Number)(_0x45ad9f);
}
function Ci(_0x3c7ad4) {
  var _0x13e6cf = Si(_0x3c7ad4, "string");
  return xi(_0x13e6cf) == "symbol" ? _0x13e6cf : _0x13e6cf + "";
}
function Y(_0xc297df, _0x22e73b, _0x4971d3) {
  return (
    (_0x22e73b = Ci(_0x22e73b)) in _0xc297df
      ? Object.defineProperty(_0xc297df, _0x22e73b, {
          value: _0x4971d3,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xc297df[_0x22e73b] = _0x4971d3),
    _0xc297df
  );
}
let X = class extends _0x24c6b6 {
  constructor(_0xd1a4ea, _0x569189) {
    (super(),
      (this._permissionService = _0xd1a4ea),
      (this._instanceService = _0x569189),
      Y(this, "_editingParams$", new _0x12550c(null)),
      Y(this, "editingParams$", this._editingParams$["asObservable"]()),
      Y(this, "_onSavingEditorData$", new _0x12550c(false)),
      Y(
        this,
        "onSavingEditorData$",
        this._onSavingEditorData$["asObservable"](),
      ),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          let _0x40d009 = this.getEditing();
          _0x40d009 != null &&
            _0x40d009.visible &&
            !this._canEdit(_0x40d009) &&
            this.setEditing(null);
        }),
      ));
  }
  dispose() {
    (this._editingParams$["next"](null),
      this._editingParams$["complete"](),
      this._onSavingEditorData$["next"](false),
      this._onSavingEditorData$["complete"](),
      super.dispose());
  }
  setEditing(_0x414308) {
    (_0x414308 != null && _0x414308.visible && !this._canEdit(_0x414308)) ||
      (this._editingParams$["next"](_0x414308),
      _0x414308 ?? this._onSavingEditorData$["next"](false));
  }
  setOnSavingEditorData(_0x4ddac4) {
    this._onSavingEditorData$["next"](_0x4ddac4);
  }
  getEditing() {
    return this._editingParams$["getValue"]();
  }
  _canEdit(_0x2d528a) {
    let _0xee81ad = this._instanceService["getUnit"](
      _0x2d528a.unitId,
      _0x4f1f7e.UNIVER_DOC,
    );
    if (!_0xee81ad) return true;
    let _0x3af842 = _0x214243(_0xee81ad, _0x2d528a.shapeId);
    return _0x339559(this._permissionService, _0x2d528a.unitId, [
      ..._0x279808(_0xee81ad, _0x3af842, "drawing", _0x2d528a.shapeId),
      _0x18329a(_0x3af842, "drawing", _0x2d528a.shapeId),
    ]);
  }
  completeEditing(_0x15409e) {
    this.getEditing() &&
      (this.setOnSavingEditorData(true),
      requestAnimationFrame(() => {
        this.setEditing(null);
      }));
  }
  cancelEditing() {
    this.getEditing() && this.setEditing(null);
  }
};
X = q([K(0, _0x50fd0a), K(1, _0x419138)], X);
const wi = _0x2f2fc0(() => {
  let _0x2b874d = _0x1ccf61(X),
    _0x53f6ff = _0x1ccf61(_0x36ebcc),
    _0x18e0d7 = _0x1ccf61(_0x2cc1e5),
    _0x3d35c7 = _0x1ccf61(_0x2bec61);
  return _0x527a55(_0x11306f, {
    adapter: _0x46ff5b(
      () => ({
        getShapeModel: (_0x12ebf6, _0x4fd60f, _0x245a4d) =>
          _0x53f6ff.getShapeModel(_0x12ebf6, _0x4fd60f, _0x245a4d),
        getShapeData: (_0x26af5a, _0xa08ff4, _0xb4a456) =>
          _0x53f6ff.getShapeDataById(_0x26af5a, _0xa08ff4, _0xb4a456),
        getDrawingTransform: (_0x10815d, _0x1467b7, _0x15e6a6) => {
          let _0xe0b5b4 = _0x18e0d7.getDrawingByParam({
            unitId: _0x10815d,
            subUnitId: _0x1467b7,
            drawingId: _0x15e6a6,
          });
          return _0xe0b5b4 == null ? undefined : _0xe0b5b4.transform;
        },
        updateShapeText: ({
          unitId: _0x334cbc,
          shapeId: _0x1f9b3a,
          shapeText: _0xc7f61d,
          oldShapeText: _0x1e95c2,
        }) => {
          _0x3d35c7.executeCommand(_0x35b5aa.id, {
            unitId: _0x334cbc,
            shapeId: _0x1f9b3a,
            shapeData: { shapeText: _0xc7f61d },
            oldShapeJSON: { oldShapeData: { shapeText: _0x1e95c2 } },
          });
        },
        updateHostSize: ({
          unitId: _0xd6d07a,
          subUnitId: _0x591cd8,
          shapeId: _0x16483e,
          width: _0x4b5341,
          height: _0xb9ab27,
        }) => {
          _0x3d35c7.executeCommand(_0x10a61b.id, {
            unitId: _0xd6d07a,
            subUnitId: _0x591cd8,
            drawings: [
              {
                drawingId: _0x16483e,
                key: "size",
                value: { width: _0x4b5341, height: _0xb9ab27 },
              },
            ],
          });
        },
        allowHostSizeShrink: ({
          unitId: _0x2291cd,
          subUnitId: _0x17c398,
          shapeId: _0x3a81da,
        }) =>
          _0x3a6f2b(
            _0x53f6ff.getShapeDataById(_0x2291cd, _0x17c398, _0x3a81da),
          ),
      }),
      [_0x3d35c7, _0x53f6ff, _0x18e0d7],
    ),
    editingService: _0x2b874d,
    editorUnitId: Zn,
    positionOptions: _0x46ff5b(
      () => ({ viewportKeys: { main: _0xa4cde3.VIEW_MAIN } }),
      [],
    ),
  });
});
let Ti = class extends _0x24c6b6 {
  constructor(_0xe18d52, _0x181a11) {
    (super(),
      (this._componentManager = _0xe18d52),
      (this._iconManager = _0x181a11),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    (this._iconManager["has"]("ObjectLayersIcon") ||
      this.disposeWithMe(
        this._iconManager["register"]({ ObjectLayersIcon: _0x8f4841 }),
      ),
      this._iconManager["has"]("BottomIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ BottomIcon: _0x168c9a }),
        ),
      this._iconManager["has"]("MoveDownIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ MoveDownIcon: _0x2a40d9 }),
        ),
      this._iconManager["has"]("MoveUpIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ MoveUpIcon: _0x6a0a79 }),
        ),
      this._iconManager["has"]("ShapeFormatSettingIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ ShapeFormatSettingIcon: _0x137ca9 }),
        ),
      this._iconManager["has"]("TopmostIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ TopmostIcon: _0x280c02 }),
        ),
      this.disposeWithMe(this._iconManager["register"](bi)));
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](Jn, pi)),
      this.disposeWithMe(this._componentManager["register"](Xn, ui)),
      this.disposeWithMe(this._componentManager["register"](mi, gi)),
      this.disposeWithMe(this._componentManager["register"](yr, Tr)),
      this.disposeWithMe(this._componentManager["register"](vr, Er)),
      this.disposeWithMe(this._componentManager["register"](br, Dr)),
      this.disposeWithMe(this._componentManager["register"](xr, Or)),
      this.disposeWithMe(this._componentManager["register"](Sr, kr)),
      this.disposeWithMe(this._componentManager["register"](Qn, _0x5cfd88)),
      this.disposeWithMe(this._componentManager["register"](ar, ur)),
      this.disposeWithMe(this._componentManager["register"](or, cr)),
      this._componentManager["get"](_0x3b02d8) ||
        this.disposeWithMe(this._componentManager["register"](_0x3b02d8, lr)),
      this.disposeWithMe(
        this._componentManager["register"]("DocsShapeTextEditorContainer", wi),
      ));
  }
};
Ti = q([K(0, _0x4834d7(_0x367216)), K(1, _0x4834d7(_0x277214))], Ti);
var Ei = class extends _0x3c9197 {
  constructor(_0x12ac08, _0x3ec3ae) {
    (super(_0x12ac08, _0x3ec3ae),
      Y(this, "_shapeId", null),
      Y(this, "_adjName", null),
      Y(this, "_unitId", null),
      Y(this, "_subUnitId", null),
      _0x3ec3ae && this.setShapeProps(_0x3ec3ae));
  }
  getDrawingSearch() {
    return {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: this._shapeId,
    };
  }
  setShapeProps(_0x3aa533) {
    (_0x3aa533.shapeId !== undefined && (this._shapeId = _0x3aa533.shapeId),
      _0x3aa533.adjName !== undefined && (this._adjName = _0x3aa533.adjName),
      _0x3aa533.unitId !== undefined && (this._unitId = _0x3aa533.unitId),
      _0x3aa533.subUnitId !== undefined &&
        (this._subUnitId = _0x3aa533.subUnitId),
      this.transformByState({
        width: _0x3aa533.width,
        height: _0x3aa533.height,
      }));
  }
  _draw(_0x1fa023) {
    _0x5c11de.drawWith(_0x1fa023, {
      radius: _0x1a5129.adjHandleSize,
      fill: _0x1a5129.adjHandleFill,
      stroke: _0x1a5129.adjHandleStroke,
      strokeWidth: 1,
      evented: true,
    });
  }
};
function Di(_0x1ced91, _0x3bcdb2, _0x37ba7d) {
  let _0x54087b = _0x22262c(_0x1ced91, {
      ..._0x3bcdb2,
      dataModel: {
        ...(_0x3bcdb2.dataModel ?? {}),
        ...(_0x37ba7d ? { doc: _0x37ba7d } : null),
      },
    }),
    _0x1dd3f6 = _0x5ad666(_0x54087b);
  return { clip: _0x4184f3(_0x54087b, _0x1dd3f6), wrapStrategy: _0x1dd3f6 };
}
var Z = class extends _0x3c9197 {
  constructor(_0xb6ff70, _0x229abf) {
    (super(_0xb6ff70, _0x229abf),
      Y(this, "_props", undefined),
      Y(
        this,
        "_formulaAnimation",
        new _0x53f47e(
          () => this.makeDirty(true),
          () => this._applyFormulaAutoFitSize(),
        ),
      ),
      Y(this, "_transformCalculateSrcRect", true),
      Y(this, "_drawingType", _0xafe67d.DRAWING_SHAPE),
      Y(this, "isDrawingObject", true),
      (this._props = { ..._0x229abf }),
      this._formulaAnimation["setPresentation"](
        _0x229abf.formulaPresentation,
        _0x229abf.animateFormulaPresentation !== false,
      ),
      this._init(),
      this._applyFormulaAutoFitSize());
  }
  _init() {
    this.onTransformChange$["subscribeEvent"]((_0x4bf559) => {
      this._updateSrcRectByTransform(_0x4bf559);
    });
  }
  setPrstGeom(_0x247ab7) {
    this._props["prstGeom"] = _0x247ab7;
  }
  setEditing(_0xe2c7d1) {
    ((this._props["isEditing"] = _0xe2c7d1), this.makeDirty(true));
  }
  setFormulaPresentation(_0x243002, _0x4c4538 = true) {
    (this._formulaAnimation["setPresentation"](_0x243002, _0x4c4538),
      (this._props["formulaPresentation"] = _0x243002),
      this._applyFormulaAutoFitSize(),
      this.makeDirty(true));
  }
  _applyFormulaAutoFitSize() {
    let _0x291025 = this._props["shapeModel"],
      _0x5b4afd = _0x291025.getShapeTextData(),
      _0x228d27 = _0x2c5605(
        _0x5b4afd == null ? undefined : _0x5b4afd.dataModel,
      ),
      _0x90f812 = _0x228d27 == null ? undefined : _0x228d27.doc,
      _0x3c64d0 = this._formulaAnimation["getAutoFitPresentations"]();
    if (!_0x90f812 || _0x3c64d0.length === 0) return;
    _0x291025.updateContext({ width: this.width, height: this.height });
    let _0x3f5d7b = _0x550573({
      documentData: _0x3c64d0.map((_0xb38bdf) =>
        _0x566c2f(_0x90f812, _0xb38bdf),
      ),
      height: this.height,
      shapeData: _0x291025.getShapeData(),
      textRect: _0x291025.getShapeTextRect({
        left: 0,
        top: 0,
        width: this.width,
        height: this.height,
      }),
      width: this.width,
    });
    if (_0x3f5d7b) {
      var _0x112d4a;
      (this.resize(_0x3f5d7b.width, _0x3f5d7b.height),
        (_0x112d4a = this.getScene()) == null ||
          (_0x112d4a = _0x112d4a.getTransformer()) == null ||
          _0x112d4a.debounceRefreshControls());
    }
  }
  get unitId() {
    return this._props["unitId"];
  }
  get subUnitId() {
    return this._props["subUnitId"];
  }
  _updateSrcRectByTransform(_0x5ecf4c) {
    if (this._props["srcRect"] == null || !this._transformCalculateSrcRect)
      return;
    let { width: _0x184106, height: _0x47309b } = this,
      { width: _0xd8dfa = 0, height: _0x9bca72 = 0 } = _0x5ecf4c.preValue,
      {
        left: _0x1c0796 = 0,
        top: _0x3509e8 = 0,
        right: _0x5831cf = 0,
        bottom: _0x44c795 = 0,
      } = this._props["srcRect"],
      _0x509db9 = _0x1c0796,
      _0x5ebdfe = _0x3509e8,
      _0x2ac040 = _0x5831cf,
      _0x5b4a37 = _0x44c795,
      _0x3a53c4 = false;
    if (_0xd8dfa !== 0 && _0xd8dfa !== _0x184106) {
      let _0x2c8e0c = _0x1c0796 / _0xd8dfa,
        _0x4037aa = _0x5831cf / _0xd8dfa;
      ((_0x509db9 = _0x184106 * _0x2c8e0c),
        (_0x2ac040 = _0x184106 * _0x4037aa),
        (_0x3a53c4 = true));
    }
    if (_0x9bca72 !== 0 && _0x9bca72 !== _0x47309b) {
      let _0x4f02b6 = _0x3509e8 / _0x9bca72,
        _0x50379e = _0x44c795 / _0x9bca72;
      ((_0x5ebdfe = _0x47309b * _0x4f02b6),
        (_0x5b4a37 = _0x47309b * _0x50379e),
        (_0x3a53c4 = true));
    }
    _0x3a53c4 &&
      this.setSrcRect({
        left: _0x509db9,
        top: _0x5ebdfe,
        right: _0x2ac040,
        bottom: _0x5b4a37,
      });
  }
  setSrcRect(_0x5ebb77) {
    ((this._props["srcRect"] = _0x5ebb77), this.makeDirty(true));
  }
  setFillImage(_0xbae2ef) {
    ((this._props["image"] = _0xbae2ef), this.makeDirty(true));
  }
  set transform(_0x38cfdf) {
    this._transform = _0x38cfdf;
  }
  get transform() {
    this._transform || this._setTransForm();
    let _0x465168 = this._transform["clone"]();
    return this.transformForAngle(_0x465168);
  }
  get shapeModel() {
    return this._props["shapeModel"];
  }
  get shapeId() {
    return this._props["shapeId"];
  }
  get classType() {
    return _0x344513.SHAPE;
  }
  _draw(_0x4959a8, _0x3f7081, _0x2bafe2, _0x2851ca) {
    let _0x344374 = this._props["shapeModel"];
    if (!_0x344374 || !_0x3f7081) return;
    let _0x3fc7ed = _0x2bafe2 ?? this.width,
      _0x241f52 = _0x2851ca ?? this.height,
      _0x94352 = {
        shapeType: _0x344374.getShapeType(),
        width: _0x3fc7ed,
        height: _0x241f52,
      },
      _0x4e4ebc = {
        renderMode: _0x2069bd.Path,
        oKey: this.oKey,
        image: this._props["image"],
        angle: this.angle,
      };
    (_0x344374.updateContext(_0x94352), _0x4959a8.save());
    let _0x51760c = { top: 0, left: 0, width: _0x3fc7ed, height: _0x241f52 },
      _0x58b6b1 = _0x344374.getDrawingEffectBounds(_0x51760c);
    (_0x58b6b1
      ? this._renderWithCache(_0x4959a8, _0x58b6b1, (_0x4cba98) => {
          _0x344374.render(_0x4cba98, _0x51760c, _0x4e4ebc);
        })
      : (this._releaseRenderCache(),
        _0x344374.render(_0x4959a8, _0x51760c, _0x4e4ebc)),
      _0x4959a8.restore());
    let _0x4cfabe = _0x344374.getShapeTextData(),
      _0x53539a = _0x344374.getShapeTextRect(_0x51760c),
      _0x2dd4b9 = _0x344374.isLineShape();
    if (_0x4cfabe && _0x53539a && !_0x2dd4b9) {
      (_0x4959a8.save(), this.getState().flipX && _0x4959a8.scale(-1, 1));
      let _0x575008 = _0x3fc7ed / 2,
        _0x1526de = _0x241f52 / 2;
      (_0x4959a8.translate(-_0x575008, -_0x1526de),
        _0x4959a8.beginPath(),
        this._drawShapeText(_0x4959a8, _0x4cfabe, _0x53539a),
        _0x4959a8.restore());
    }
  }
  getDrawingPoints(_0x17e49e) {}
  _drawShapeText(_0x236abf, _0x55ad4a, _0x384e9c) {
    var _0x40c798;
    this._props["isEditing"] ||
      (!((_0x40c798 = _0x55ad4a.dataModel) != null && _0x40c798.doc) &&
      "isRichText" in _0x55ad4a &&
      _0x55ad4a.isRichText === false
        ? this._drawSimpleText(_0x236abf, _0x55ad4a, _0x384e9c)
        : this._drawRichText(_0x236abf, _0x55ad4a, _0x384e9c));
  }
  _drawSimpleText(_0x21538d, _0x362c25, _0x3d71de) {
    this._drawRichText(
      _0x21538d,
      {
        ..._0x362c25,
        text: _0x362c25.text ?? "",
        dataModel: {
          doc: _0x5ee38f(_0x362c25, "docs-shape-text-" + this.oKey),
        },
      },
      _0x3d71de,
    );
  }
  _drawRichText(_0x4d36dd, _0x4dcfa7, _0x2e8233) {
    _0x5834d6(_0x4d36dd, this._formulaAnimation, (_0xde65, _0x1e5bd3) => {
      this._drawRichTextLayer(_0xde65, _0x4dcfa7, _0x2e8233, _0x1e5bd3);
    });
  }
  _drawRichTextLayer(_0x411639, _0x500dd4, _0xdc0a70, _0x4f4cf6) {
    let _0x42a61d = this._props["localeService"];
    if (!_0x500dd4.dataModel || !_0x42a61d) {
      _0x42a61d ||
        console.warn(
          "[DrawingShape]\x20LocaleService\x20is\x20required\x20for\x20rich\x20text\x20rendering",
        );
      return;
    }
    let _0x14ae52 = _0x2c5605(_0x500dd4.dataModel);
    if (!_0x14ae52) return;
    let _0x5f4c35 = _0x14ae52.doc;
    if (!_0x5f4c35) return;
    let _0x3f38c4 = _0x566c2f(_0x5f4c35, _0x4f4cf6),
      _0x3e59b8 = _0x14ae52.va ?? _0x33489a.TOP,
      _0x3c53a5 = _0x14ae52.ha ?? _0x54202c.LEFT,
      _0x22cb41 = Di(
        this._props["shapeModel"].getShapeData(),
        _0x500dd4,
        _0x3f38c4,
      ),
      _0x57560d = _0x500dd4.isHorizontal,
      _0x250745 = new _0x2434d0(
        _0x126ec2(_0x3f38c4, {
          isHorizontal: _0x57560d !== false,
          textRect: _0xdc0a70,
          verticalAlign: _0x3e59b8,
          horizontalAlign: _0x3c53a5,
          wrapStrategy: _0x22cb41.wrapStrategy,
        }),
      ),
      _0x3730d7 = new _0x5cb606(_0x250745),
      _0x10272f = _0x20f3cb.create(_0x3730d7, _0x42a61d);
    _0x10272f.calculate();
    let _0x143849 = _0x10272f.getActualSize().actualHeight,
      _0x53ac92 = _0x1e5aea({
        contentHeight: _0x143849,
        verticalAlign: _0x3e59b8,
        viewportHeight: _0xdc0a70.height,
      });
    (_0x250745.updateDocumentStyle({
      pageSize: {
        width: _0x57560d === false ? _0xdc0a70.height : _0xdc0a70.width,
        height: _0x53ac92.contentHeight,
      },
    }),
      _0x250745.updateDocumentDataMargin({ t: _0x53ac92.marginTop }),
      _0x10272f.calculate());
    let _0x35fd9d = new _0x3a6a51("shape-text-" + this.oKey, _0x10272f, {
      pageMarginLeft: 0,
      pageMarginTop: 0,
      onTextFillImageLoaded: () => this.makeDirty(true),
    });
    (_0x35fd9d.resize(_0xdc0a70.width, _0x53ac92.contentHeight),
      _0x411639.save(),
      _0x411639.translateWithPrecision(_0xdc0a70.left, _0xdc0a70.top),
      _0x22cb41.clip &&
        (_0x411639.beginPath(),
        _0x411639.rect(
          0,
          _0x53ac92.clipTop,
          _0xdc0a70.width,
          _0x53ac92.clipHeight,
        ),
        _0x411639.clip()),
      _0x53ac92.contentVerticalOffset &&
        _0x411639.translateWithPrecision(0, _0x53ac92.contentVerticalOffset),
      _0x35fd9d.draw(_0x411639),
      _0x411639.restore(),
      _0x35fd9d.dispose(),
      _0x10272f.dispose(),
      _0x3730d7.dispose(),
      _0x250745.dispose());
  }
  render(_0x4c756e, _0x34c296, _0x588f85 = false) {
    if (!this.visible) return (this.makeDirty(false), this);
    let {
        width: _0x21eeef,
        height: _0x587bd7,
        left: _0x4637fd,
        top: _0x5c58eb,
      } = this,
      _0x521993 = this.getRealBound();
    if (
      ((_0x21eeef = _0x521993.width),
      (_0x587bd7 = _0x521993.height),
      (_0x4637fd = _0x521993.left),
      (_0x5c58eb = _0x521993.top),
      this.isRender(_0x34c296))
    ) {
      let {
        top: _0xf05787,
        left: _0xcafc4c,
        bottom: _0x11b080,
        right: _0x55c58d,
      } = _0x34c296.viewBound;
      if (
        _0x21eeef + this.strokeWidth + _0x4637fd < _0xcafc4c ||
        _0x55c58d < _0x4637fd ||
        _0x587bd7 + this.strokeWidth + _0x5c58eb < _0xf05787 ||
        _0x11b080 < _0x5c58eb
      )
        return this;
    }
    let _0x311dcb = _0x4637fd + _0x21eeef / 2,
      _0x5f1f89 = _0x5c58eb + _0x587bd7 / 2,
      _0x315917 = this.transform["getMatrix"]();
    if (this._props["isEditing"]) {
      let _0x1b6db4 = this.getState(),
        _0x54b492 = new _0xf9ea1c();
      (_0x54b492.composeMatrix({ ..._0x1b6db4 }),
        (_0x315917 = _0x54b492.getMatrix()));
    }
    return (
      _0x4c756e.save(),
      this._props["shapeModel"].isRenderLinePointsMode === true ||
        _0x4c756e.transform(
          _0x315917[0],
          _0x315917[1],
          _0x315917[2],
          _0x315917[3],
          _0x311dcb,
          _0x5f1f89,
        ),
      this._draw(_0x4c756e, _0x34c296, _0x21eeef, _0x587bd7),
      _0x4c756e.restore(),
      this.makeDirty(false),
      this
    );
  }
  getInverseCoord(_0x5df188) {
    let {
        left: _0x5918e0,
        top: _0x55535f,
        width: _0x301f1b,
        height: _0x2b4b0d,
      } = this.getRealBound(),
      _0x5b6a1f = this.transform["getMatrix"](),
      _0x575e4e = _0x5918e0 + _0x301f1b / 2,
      _0x1f8a40 = _0x55535f + _0x2b4b0d / 2,
      _0x55804f = new _0xf9ea1c([
        _0x5b6a1f[0],
        _0x5b6a1f[1],
        _0x5b6a1f[2],
        _0x5b6a1f[3],
        _0x575e4e,
        _0x1f8a40,
      ]),
      _0x2ea02f = this.getParent();
    return (
      this.isInGroup &&
      (_0x2ea02f == null ? undefined : _0x2ea02f.classType) === _0x344513.GROUP
        ? _0x2ea02f.ancestorTransform["multiply"](_0x55804f)
        : _0x55804f
    )
      .invert()
      .applyPoint(_0x5df188);
  }
  isHit(_0x3ab5bf) {
    let {
        left: _0x415c5b,
        top: _0xb58daa,
        width: _0xac9480,
        height: _0x38202f,
      } = this.getRealBound(),
      _0x14cfb7 = _0x415c5b + _0xac9480 / 2,
      _0x4de519 = _0xb58daa + _0x38202f / 2,
      _0x5890f1 = this.transform["getMatrix"](),
      _0x298c99 = new _0xf9ea1c([
        _0x5890f1[0],
        _0x5890f1[1],
        _0x5890f1[2],
        _0x5890f1[3],
        _0x14cfb7,
        _0x4de519,
      ]),
      _0x3a261d = this.getParent(),
      _0x261c8f = (
        this.isInGroup &&
        (_0x3a261d == null ? undefined : _0x3a261d.classType) ===
          _0x344513.GROUP
          ? _0x3a261d.ancestorTransform["multiply"](_0x298c99)
          : _0x298c99
      )
        .invert()
        .applyPoint(_0x3ab5bf),
      _0x17d8a0 = _0xac9480 / 2,
      _0x4e2957 = _0x38202f / 2,
      _0x24be48 = this._props["shapeModel"];
    return _0x24be48 && _0x24be48.isLineShape()
      ? _0x24be48.isHitLine(_0x261c8f.x, _0x261c8f.y, _0xac9480, _0x38202f)
      : _0x261c8f.x >= -_0x17d8a0 - this.strokeWidth / 2 &&
          _0x261c8f.x <= _0x17d8a0 + this.strokeWidth / 2 &&
          _0x261c8f.y >= -_0x4e2957 - this.strokeWidth / 2 &&
          _0x261c8f.y <= _0x4e2957 + this.strokeWidth / 2;
  }
  dispose() {
    (this._formulaAnimation["dispose"](),
      (this._props["shapeModel"] = null),
      super.dispose());
  }
};
let Oi = class extends _0x24c6b6 {
  constructor(_0x37c792, _0x36c05d, _0x46aa50, _0x592a19) {
    (super(),
      (this._context = _0x37c792),
      (this._drawingManagerService = _0x36c05d),
      (this._docsShapeService = _0x46aa50),
      (this._commandService = _0x592a19),
      Y(this, "_activeShapeId", null),
      Y(this, "_unitId", null),
      Y(this, "_subUnitId", null),
      Y(this, "_activeShapeAdjustPointList", undefined),
      Y(this, "_adjustPointObjects", []),
      Y(this, "_baseShapeLeft", 0),
      Y(this, "_baseShapeTop", 0),
      Y(this, "_baseShapeWidth", 0),
      Y(this, "_baseShapeHeight", 0),
      Y(this, "_isStartAdjusting", false),
      Y(this, "_isShouldShowDrawingShapeAdjust", false),
      Y(this, "_activeAdjustInfo", undefined),
      Y(this, "_activeShapeModel", undefined),
      Y(this, "_adjHandlerPointerMove", undefined),
      Y(this, "_adjHandlerPointerUp", undefined),
      this._registerDrawingFocusChangeHandler(),
      this._registerDrawingTransformHandler());
  }
  clearAdjustControls() {
    this._clearShapeAdjustControls();
  }
  refreshAdjustControls() {
    this._updateShapeAdjustControls(true);
  }
  _getShapeAdjustPointListById(_0x414455, _0x2d49e4, _0xecdbba) {
    var _0x54d9f7;
    return (_0x54d9f7 = this._docsShapeService["getShapeModel"](
      _0x414455,
      _0x2d49e4,
      _0xecdbba,
    )) == null
      ? undefined
      : _0x54d9f7.getDrawingPoints();
  }
  _getShapeAdjustInfosById(_0x22f3ae, _0xca7c74, _0x5d9630, _0xaae6a4) {
    var _0x5e36d3;
    return (_0x5e36d3 = this._docsShapeService["getShapeModel"](
      _0x22f3ae,
      _0xca7c74,
      _0x5d9630,
    )) == null
      ? undefined
      : _0x5e36d3.getAdjustInfoByName(_0xaae6a4);
  }
  _getActiveDrawingParam() {
    return this._unitId === null ||
      this._subUnitId === null ||
      this._activeShapeId === null
      ? null
      : (this._drawingManagerService["getDrawingByParam"]({
          unitId: this._unitId,
          subUnitId: this._subUnitId,
          drawingId: this._activeShapeId,
        }) ?? null);
  }
  _getActiveDrawingShape(_0x3dfa6a) {
    if (
      this._unitId === null ||
      this._subUnitId === null ||
      this._activeShapeId === null
    )
      return null;
    let _0x5b308c = _0x1f99b7({
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._activeShapeId,
      }),
      _0x309842 = _0x3dfa6a.getObjectIncludeInGroup(_0x5b308c);
    return _0x309842 instanceof Z ? _0x309842 : null;
  }
  _createShapeAdjustControls(_0x244f75 = false) {
    if (
      this._unitId === null ||
      this._subUnitId === null ||
      this._activeShapeId === null
    )
      return;
    let _0x4b46e3 = this._getActiveDrawingParam();
    if (
      (_0x4b46e3 == null ? undefined : _0x4b46e3.drawingType) !==
        _0xafe67d.DRAWING_SHAPE ||
      !_0x4b46e3.transform
    )
      return;
    let _0xc0287c = this._docsShapeService["getShapeModel"](
      this._unitId,
      this._subUnitId,
      this._activeShapeId,
    );
    if (!_0xc0287c || _0xc0287c.isLineShape()) return;
    let {
      left: _0x45454b = 0,
      top: _0x25f716 = 0,
      width: _0x3df085 = 0,
      height: _0x1dea92 = 0,
      flipX: _0x3d7448,
      flipY: _0x12c5d3,
      angle: _0x2f9dba = 0,
    } = _0x4b46e3.transform;
    (_0x244f75 || !this._activeShapeAdjustPointList) &&
      (_0xc0287c.updateContext({ width: _0x3df085, height: _0x1dea92 }),
      (this._activeShapeAdjustPointList = _0xc0287c.getDrawingPoints()));
    let _0x95205 = this._activeShapeAdjustPointList;
    if (!(_0x95205 != null && _0x95205.length)) return;
    let { scene: _0x225e61 } = this._context;
    for (let _0x533405 of _0x95205) {
      let _0x5a5efc = this._toVisualAdjustPoint(
        _0x533405,
        _0x3df085,
        _0x1dea92,
        !!_0x3d7448,
        !!_0x12c5d3,
        _0x2f9dba,
      );
      this._addShapeAdjustControl(
        _0x225e61,
        _0x5a5efc,
        _0x5a5efc.adjName,
        _0x45454b,
        _0x25f716,
        this._unitId,
        this._subUnitId,
      );
    }
  }
  _toVisualAdjustPoint(
    _0xe6ac99,
    _0x4df96d,
    _0x2514ae,
    _0x58799c,
    _0x481525,
    _0x3b4542,
  ) {
    let _0x5a69fd = _0xe6ac99.x,
      _0x50a162 = _0xe6ac99.y;
    if (
      (_0x58799c && (_0x5a69fd = _0x4df96d - _0x5a69fd),
      _0x481525 && (_0x50a162 = _0x2514ae - _0x50a162),
      _0x3b4542 !== 0)
    ) {
      let _0xaf7f67 = _0x4df96d / 2,
        _0x12aab9 = _0x2514ae / 2,
        _0x1559bb = (_0x3b4542 * Math.PI) / 180,
        _0x5095a8 = Math.cos(_0x1559bb),
        _0x2930ca = Math.sin(_0x1559bb),
        _0x469fd7 = _0x5a69fd - _0xaf7f67,
        _0x219467 = _0x50a162 - _0x12aab9;
      ((_0x5a69fd =
        _0xaf7f67 + (_0x469fd7 * _0x5095a8 - _0x219467 * _0x2930ca)),
        (_0x50a162 =
          _0x12aab9 + (_0x469fd7 * _0x2930ca + _0x219467 * _0x5095a8)));
    }
    return { x: _0x5a69fd, y: _0x50a162, adjName: _0xe6ac99.adjName };
  }
  _updateShapeAdjustControls(_0x1c3357 = false) {
    (_0x1c3357 && this._clearShapeAdjustControls(),
      this._createShapeAdjustControls(_0x1c3357));
  }
  _addShapeAdjustControl(
    _0x45e05e,
    _0x247644,
    _0xb2259b,
    _0x4ed249,
    _0x471b3b,
    _0x24df10,
    _0x2a6945,
  ) {
    if (!this._activeShapeId) return;
    let _0x5be138 =
        "doc-shape-adjust-point-" + this._activeShapeId + "-" + _0xb2259b,
      _0x20e72f = _0x45e05e.getObjectIncludeInGroup(_0x5be138);
    if (_0x20e72f) {
      (_0x20e72f.transformByState({
        left: _0x247644.x + _0x4ed249 - _0x1a5129.adjHandleSize,
        top: _0x247644.y + _0x471b3b - _0x1a5129.adjHandleSize,
      }),
        _0x20e72f.makeDirty(true));
      return;
    }
    let _0x17deed = new Ei(_0x5be138, {
      left: _0x247644.x + _0x4ed249 - _0x1a5129.adjHandleSize,
      top: _0x247644.y + _0x471b3b - _0x1a5129.adjHandleSize,
      adjName: _0xb2259b,
      shapeId: this._activeShapeId,
      unitId: _0x24df10,
      subUnitId: _0x2a6945,
      width: _0x1a5129.adjHandleSize + 8,
      height: _0x1a5129.adjHandleSize + 8,
      zIndex: _0x522e20 + 1,
      evented: true,
    });
    (this._adjustPointObjects["push"](_0x17deed),
      this._attachAdjustEvent(_0x17deed, _0x45e05e, _0xb2259b),
      _0x45e05e.addObject(_0x17deed, _0x522e20 + 1));
  }
  _clearShapeAdjustControls() {
    (this._adjustPointObjects["forEach"]((_0x585a7e) => _0x585a7e.dispose()),
      (this._adjustPointObjects = []));
  }
  _updateAdjustControlPositions() {
    this._createShapeAdjustControls();
  }
  _toScenePoint(_0x4574fd, _0x42e36f, _0x3ab289) {
    let _0x3764c0 = _0x2836ef.FromArray([_0x42e36f, _0x3ab289]),
      _0x51accf =
        _0x4574fd.getActiveViewportByCoord(_0x3764c0) ??
        _0x4574fd.getViewports()[0];
    return (
      (_0x51accf == null
        ? undefined
        : _0x51accf.transformVector2SceneCoord(_0x3764c0)) ?? _0x3764c0
    );
  }
  _attachAdjustEvent(_0x5704b5, _0x404715, _0x12af76) {
    this.disposeWithMe(
      _0xb590da(
        _0x5704b5.onPointerDown$["subscribeEvent"]((_0x5c51bb, _0x2ffa8e) => {
          var _0x306f60;
          let _0x5afe75 = _0x5704b5.getDrawingSearch();
          ((this._activeAdjustInfo = this._getShapeAdjustInfosById(
            _0x5afe75.unitId,
            _0x5afe75.subUnitId,
            _0x5afe75.drawingId,
            _0x12af76,
          )),
            (this._activeShapeModel = this._docsShapeService["getShapeModel"](
              _0x5afe75.unitId,
              _0x5afe75.subUnitId,
              _0x5afe75.drawingId,
            )));
          let _0xe3158 = this._getActiveDrawingParam(),
            _0x4de5f2 = _0xe3158 == null ? undefined : _0xe3158.transform;
          if (!_0xe3158 || !_0x4de5f2 || !this._activeShapeModel) return;
          ((this._baseShapeLeft = _0x4de5f2.left || 0),
            (this._baseShapeTop = _0x4de5f2.top || 0),
            (this._baseShapeWidth = _0x4de5f2.width || 0),
            (this._baseShapeHeight = _0x4de5f2.height || 0));
          let _0x4b7b0b = !!_0x4de5f2.flipX,
            _0x50d9b2 = !!_0x4de5f2.flipY,
            _0xf9f743 = _0x4de5f2.angle || 0,
            _0x26a05f = {
              ...(((_0x306f60 = this._activeAdjustInfo) == null
                ? undefined
                : _0x306f60.currentAdjustValues) ?? {}),
            };
          ((this._isStartAdjusting = true),
            _0x404715.disableObjectsEvent(),
            (this._adjHandlerPointerMove = _0x404715.onPointerMove$[
              "subscribeEvent"
            ]((_0x201e3f, _0x37c99a) => {
              var _0x7c7cac;
              if (
                !this._isStartAdjusting ||
                !this._activeShapeModel ||
                !this._activeAdjustInfo
              )
                return;
              (_0x404715.disableObjectsEvent(),
                _0x404715.setCursor(_0x5b9b11.CROSSHAIR));
              let _0x2d3626 = this._toScenePoint(
                  _0x404715,
                  _0x201e3f.offsetX,
                  _0x201e3f.offsetY,
                ),
                _0x341d17 = _0x2d3626.x - this._baseShapeLeft,
                _0x34decf = _0x2d3626.y - this._baseShapeTop;
              if (_0xf9f743 !== 0) {
                let _0x5cd811 = this._baseShapeWidth / 2,
                  _0x19715 = this._baseShapeHeight / 2,
                  _0x2eabc2 = (_0xf9f743 * Math.PI) / 180,
                  _0x3ebc66 = Math.cos(_0x2eabc2),
                  _0x3a93e2 = Math.sin(_0x2eabc2),
                  _0x193a95 = _0x341d17 - _0x5cd811,
                  _0x2bcb8d = _0x34decf - _0x19715;
                ((_0x341d17 =
                  _0x5cd811 + (_0x193a95 * _0x3ebc66 + _0x2bcb8d * _0x3a93e2)),
                  (_0x34decf =
                    _0x19715 +
                    (-_0x193a95 * _0x3a93e2 + _0x2bcb8d * _0x3ebc66)));
              }
              (_0x4b7b0b && (_0x341d17 = this._baseShapeWidth - _0x341d17),
                _0x50d9b2 && (_0x34decf = this._baseShapeHeight - _0x34decf));
              let _0x28dd1c = {
                  left: 0,
                  top: 0,
                  width: this._baseShapeWidth,
                  height: this._baseShapeHeight,
                },
                _0x552eef = this._activeShapeModel["calcAdjValues"](
                  _0x28dd1c,
                  { x: _0x341d17, y: _0x34decf },
                  this._activeAdjustInfo,
                  _0x4b7b0b,
                  _0x50d9b2,
                );
              if (Object.keys(_0x552eef).length !== 0) {
                for (let [_0x502a3a, _0x53fb1d] of Object.entries(_0x552eef))
                  this._activeShapeModel["setAdjustValueByName"](
                    _0x502a3a,
                    _0x53fb1d,
                  );
                (this._activeShapeModel["updateContext"]({
                  width: this._baseShapeWidth,
                  height: this._baseShapeHeight,
                }),
                  (_0x7c7cac = this._getActiveDrawingShape(_0x404715)) ==
                    null || _0x7c7cac.makeDirty(true),
                  (this._activeShapeAdjustPointList =
                    this._getShapeAdjustPointListById(
                      _0x5afe75.unitId,
                      _0x5afe75.subUnitId,
                      _0x5afe75.drawingId,
                    )),
                  this._updateAdjustControlPositions(),
                  _0x37c99a.stopPropagation());
              }
            })),
            (this._adjHandlerPointerUp = _0x404715.onPointerUp$[
              "subscribeEvent"
            ]((_0x582687, _0x4d61a6) => {
              var _0x50759d, _0x3e6d57;
              ((_0x50759d = this._adjHandlerPointerMove) == null ||
                _0x50759d.unsubscribe(),
                (_0x3e6d57 = this._adjHandlerPointerUp) == null ||
                  _0x3e6d57.unsubscribe(),
                _0x404715.resetCursor());
              let _0x28f79f = this._activeAdjustInfo;
              if (_0x28f79f && this._activeShapeModel) {
                let _0x2e4331 = {};
                for (let _0x200a01 of Object.keys(
                  _0x28f79f.currentAdjustValues,
                )) {
                  let _0x9da1c5 =
                    this._activeShapeModel["getAdjustValueByName"](_0x200a01);
                  _0x9da1c5 !== undefined && (_0x2e4331[_0x200a01] = _0x9da1c5);
                }
                Object.keys(_0x2e4331).length > 0 &&
                  gr(
                    this._commandService,
                    _0x5afe75.unitId,
                    _0x5afe75.subUnitId,
                    _0x5afe75.drawingId,
                    { oldShapeData: { adjustValues: _0x26a05f } },
                    { adjustValues: _0x2e4331 },
                  );
              }
              ((this._activeAdjustInfo = undefined),
                (this._activeShapeModel = undefined),
                (this._isStartAdjusting = false),
                _0x404715.enableObjectsEvent(),
                _0x4d61a6.stopPropagation());
            })),
            _0x2ffa8e.stopPropagation());
        }),
      ),
    );
  }
  _registerDrawingTransformHandler() {
    let { scene: _0x2b3608 } = this._context,
      _0x2de2d6 = _0x2b3608.getTransformerByCreate();
    (this.disposeWithMe(
      _0x2de2d6.changeStart$["subscribe"]((_0x380ac8) => {
        (this._createShapeAdjustControls(),
          _0x380ac8.objects !== null &&
            _0x380ac8.objects["size"] === 1 &&
            _0x380ac8.objects["values"]().next().value instanceof Z &&
            (this._isShouldShowDrawingShapeAdjust = true));
      }),
    ),
      this.disposeWithMe(
        _0x2de2d6.changing$["subscribe"](() => {
          this._isShouldShowDrawingShapeAdjust &&
            this._clearShapeAdjustControls();
        }),
      ),
      this.disposeWithMe(
        _0x2b3608.onPointerUp$["subscribeEvent"](() => {
          this._isShouldShowDrawingShapeAdjust &&
            ((this._isShouldShowDrawingShapeAdjust = false),
            this._createShapeAdjustControls());
        }),
      ),
      this.disposeWithMe(
        _0x2de2d6.changeEnd$["subscribe"](() => {
          this._unitId &&
            this._subUnitId &&
            this._activeShapeId &&
            ((this._activeShapeAdjustPointList =
              this._getShapeAdjustPointListById(
                this._unitId,
                this._subUnitId,
                this._activeShapeId,
              )),
            this._updateAdjustControlPositions());
        }),
      ));
  }
  _registerDrawingFocusChangeHandler() {
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x42890c) => {
        if (_0x42890c.id !== _0x158823.id) return;
        let { unitId: _0x4363a4, shapeId: _0xab56b6 } = _0x42890c.params;
        _0x4363a4 === this._unitId &&
          _0xab56b6 === this._activeShapeId &&
          this.refreshAdjustControls();
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x3d6b42) => {
          if (_0x3d6b42.length === 1) {
            let _0x164475 = _0x3d6b42[0],
              _0x5c76de =
                this._drawingManagerService["getDrawingByParam"](_0x164475);
            if (
              (_0x5c76de == null ? undefined : _0x5c76de.drawingType) ===
              _0xafe67d.DRAWING_SHAPE
            ) {
              ((this._activeShapeId = _0x164475.drawingId),
                (this._unitId = _0x164475.unitId),
                (this._subUnitId = _0x164475.subUnitId),
                (this._activeShapeAdjustPointList =
                  this._getShapeAdjustPointListById(
                    _0x164475.unitId,
                    _0x164475.subUnitId,
                    _0x164475.drawingId,
                  )),
                this._clearShapeAdjustControls(),
                this._createShapeAdjustControls());
              return;
            }
          }
          ((this._activeShapeId = null),
            (this._activeShapeAdjustPointList = undefined),
            (this._unitId = null),
            (this._subUnitId = null),
            this._clearShapeAdjustControls());
        }),
      ),
      this.disposeWithMe(
        _0x869f47(
          this._drawingManagerService["update$"],
          this._drawingManagerService["refreshTransform$"],
        ).subscribe((_0x11ba63) => {
          var _0x57f955;
          let _0x4b2b89 = _0x11ba63.find(
            (_0x507a43) =>
              _0x507a43.drawingId === this._activeShapeId &&
              _0x507a43.unitId === this._unitId &&
              _0x507a43.subUnitId === this._subUnitId,
          );
          _0x4b2b89 &&
            ((_0x57f955 =
              this._drawingManagerService["getDrawingByParam"](_0x4b2b89)) ==
            null
              ? undefined
              : _0x57f955.drawingType) === _0xafe67d.DRAWING_SHAPE &&
            this._updateShapeAdjustControls(true);
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x469714) => {
          for (let _0x58282f of _0x469714)
            this._activeShapeId === _0x58282f.drawingId &&
              ((this._activeShapeId = null),
              (this._activeShapeAdjustPointList = undefined),
              (this._unitId = null),
              (this._subUnitId = null),
              this._clearShapeAdjustControls());
        }),
      ));
  }
};
Oi = q([K(1, _0x2cc1e5), K(2, _0x4834d7(_0x36ebcc)), K(3, _0x2bec61)], Oi);
function ki(_0x2c11fb) {
  return _0x2c11fb.behindText === true ||
    _0x2c11fb.behindText === _0x17d8b7.TRUE ||
    (_0x2c11fb.layoutType === _0x413dda.WRAP_NONE &&
      _0x2c11fb.behindDoc === _0x17d8b7.TRUE)
    ? _0xa254a9 - 1
    : _0x522e20;
}
let Q = class extends _0x24c6b6 {
  constructor(
    _0x36589b,
    _0x55c977,
    _0x351c3a,
    _0x2c2102,
    _0x4766b8,
    _0x186b20,
    _0x4b51a8,
  ) {
    (super(),
      (this._drawingManagerService = _0x36589b),
      (this._docsShapeService = _0x55c977),
      (this._localeService = _0x351c3a),
      (this._imageIoService = _0x2c2102),
      (this._urlImageService = _0x4766b8),
      (this._shapeTextEditingService = _0x186b20),
      (this._shapeFormulaService = _0x4b51a8),
      Y(this, "_formulaShapes", new Map()),
      this.disposeWithMe(
        this._shapeFormulaService["presentationChanged$"].subscribe(
          (_0x4fa626) => {
            var _0x24eb56;
            (_0x24eb56 = this._formulaShapes["get"](
              this._formulaKey(
                _0x4fa626.unitId,
                _0x4fa626.subUnitId,
                _0x4fa626.shapeId,
              ),
            )) == null ||
              _0x24eb56.forEach((_0x12d702) =>
                _0x12d702.setFormulaPresentation(
                  _0x4fa626.presentation,
                  _0x4fa626.animationEnabled,
                ),
              );
          },
        ),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x35851b) => {
          _0x35851b.forEach((_0x2b63a8) => {
            (this._shapeFormulaService["unregister"]({
              unitId: _0x2b63a8.unitId,
              subUnitId: _0x2b63a8.subUnitId,
              shapeId: _0x2b63a8.drawingId,
            }),
              this._formulaShapes["delete"](
                this._formulaKey(
                  _0x2b63a8.unitId,
                  _0x2b63a8.subUnitId,
                  _0x2b63a8.drawingId,
                ),
              ));
          });
        }),
      ));
  }
  renderDrawingShape(_0x227685, _0x31cfb9) {
    let {
      transform: _0x47b38a,
      drawingType: _0x979858,
      srcRect: _0x1b6694,
      prstGeom: _0x5d5260,
      groupId: _0x39b87a,
      unitId: _0x4aba7d,
      subUnitId: _0x17e15a,
      drawingId: _0xce54fc,
      isMultiTransform: _0x155ec0,
      transforms: _0x16c3ac,
      hidden: _0x2a9532,
      selectable: _0x5c4dcf,
    } = _0x227685;
    if (
      _0x979858 !== _0xafe67d.DRAWING_SHAPE ||
      !this._drawingManagerService["getDrawingVisible"]() ||
      _0x47b38a == null
    )
      return;
    let _0x20ad9a = this._drawingManagerService["getDrawingEditable"](),
      _0x585972 = _0x155ec0 && _0x16c3ac ? _0x16c3ac : [_0x47b38a],
      _0x19099a = [];
    for (let _0x3213b2 of _0x585972) {
      let {
          left: _0x46bc32,
          top: _0x216dce,
          width: _0x28f4a0,
          height: _0x17b865,
          angle: _0x25706b,
          flipX: _0x35388c,
          flipY: _0x26fdcb,
          skewX: _0x457a96,
          skewY: _0x44d57c,
        } = _0x3213b2,
        _0x2b7d9b = _0x585972.indexOf(_0x3213b2),
        _0x18ae29 = _0x1f99b7(
          { unitId: _0x4aba7d, subUnitId: _0x17e15a, drawingId: _0xce54fc },
          _0x155ec0 ? _0x2b7d9b : undefined,
        ),
        _0x321545 = _0x31cfb9.getObjectIncludeInGroup(_0x18ae29);
      if (_0x321545 != null) {
        let _0x5c9551 = {
          unitId: _0x4aba7d,
          subUnitId: _0x17e15a,
          shapeId: _0xce54fc,
        };
        (_0x321545 instanceof Z &&
          this.refreshFormulaPresentation(_0x321545, _0x5c9551),
          _0x321545.transformByState({
            left: _0x46bc32,
            top: _0x216dce,
            width: _0x28f4a0,
            height: _0x17b865,
            angle: _0x25706b,
            flipX: _0x35388c,
            flipY: _0x26fdcb,
            skewX: _0x457a96,
            skewY: _0x44d57c,
          }));
        continue;
      }
      let _0x309f04 = this._drawingManagerService["getDrawingOrder"](
          _0x4aba7d,
          _0x17e15a,
        ),
        _0x4a34b9 = _0x309f04.indexOf(_0xce54fc);
      if (
        _0x31cfb9.getObjectIncludeInGroup(_0x18ae29) ||
        !this._drawingManagerService["getDrawingVisible"]()
      )
        continue;
      let _0x1ffc6f = this._docsShapeService["getShapeModel"](
        _0x4aba7d,
        _0x17e15a,
        _0xce54fc,
      );
      if (!_0x1ffc6f) continue;
      let _0x27489d = _0x5f2ca0(_0x1ffc6f.getShapeType())
          ? {
              ..._0x5d1bac,
              rotateEnabled: false,
              resizeEnabled: false,
              borderEnabled: false,
            }
          : _0x5d1bac,
        _0x26ef15 = _0x1ffc6f.getShapeData().formulaBinding,
        _0x28a7c7 = {
          unitId: _0x4aba7d,
          subUnitId: _0x17e15a,
          shapeId: _0xce54fc,
        };
      _0x26ef15 && this._shapeFormulaService["register"](_0x28a7c7, _0x26ef15);
      let _0x123953 = new Z(_0x18ae29, {
        ..._0x3213b2,
        zIndex: _0x4a34b9 === -1 ? _0x309f04.length - 1 : _0x4a34b9,
        shapeModel: _0x1ffc6f,
        localeService: this._localeService,
        shapeId: _0xce54fc,
        unitId: _0x4aba7d,
        subUnitId: _0x17e15a,
        visible: _0x2a9532 !== true,
        evented: _0x5c4dcf !== false,
        formulaPresentation: _0x26ef15
          ? this._shapeFormulaService["getPresentation"](_0x28a7c7)
          : undefined,
        animateFormulaPresentation:
          (_0x26ef15 == null ? undefined : _0x26ef15.animationEnabled) !==
          false,
        transformerConfig: _0x27489d,
      });
      if (_0x26ef15) {
        let _0x5a711c = this._formulaKey(_0x4aba7d, _0x17e15a, _0xce54fc),
          _0x3c5fc7 = this._formulaShapes["get"](_0x5a711c) ?? new Set();
        (_0x3c5fc7.add(_0x123953),
          this._formulaShapes["set"](_0x5a711c, _0x3c5fc7));
      }
      (this.disposeWithMe(
        _0xb590da(
          _0x123953.onDblclick$["subscribeEvent"]((_0x20541d, _0xe2f84d) => {
            _0x1ffc6f.isLineShape() ||
              _0x26ef15 ||
              (this._shapeTextEditingService["setEditing"]({
                visible: true,
                unitId: _0x4aba7d,
                subUnitId: _0x17e15a,
                shapeId: _0xce54fc,
                shapeKey: _0x123953.oKey,
              }),
              _0xe2f84d.stopPropagation());
          }),
        ),
      ),
        _0x31cfb9.addObject(_0x123953, ki(_0x227685)),
        _0x20ad9a && _0x31cfb9.attachTransformerTo(_0x123953),
        _0x39b87a &&
          _0x105c74(
            { drawingId: _0x39b87a, unitId: _0x4aba7d, subUnitId: _0x17e15a },
            _0x123953,
            _0x31cfb9,
            this._drawingManagerService,
          ),
        _0x5d5260 != null && _0x123953.setPrstGeom(_0x5d5260),
        _0x1b6694 != null && _0x123953.setSrcRect(_0x1b6694),
        this._loadShapePictureFill(_0x123953, _0x1ffc6f.getShapeData()),
        _0x19099a.push(_0x123953));
    }
    return _0x19099a;
  }
  _formulaKey(_0x19b6a1, _0xaa781, _0x3383d8) {
    return _0x19b6a1 + "\x00" + _0xaa781 + "\x00" + _0x3383d8;
  }
  refreshFormulaPresentation(_0x3914de, _0x41406d) {
    let _0x13c1f0 = this._docsShapeService["getShapeModel"](
        _0x41406d.unitId,
        _0x41406d.subUnitId,
        _0x41406d.shapeId,
      ),
      _0x3eda89 =
        _0x13c1f0 == null ? undefined : _0x13c1f0.getShapeData().formulaBinding,
      _0x3f0ab5 = this._formulaKey(
        _0x41406d.unitId,
        _0x41406d.subUnitId,
        _0x41406d.shapeId,
      );
    if (_0x3eda89) {
      this._shapeFormulaService["register"](_0x41406d, _0x3eda89);
      let _0x260930 = this._formulaShapes["get"](_0x3f0ab5) ?? new Set();
      (_0x260930.add(_0x3914de),
        this._formulaShapes["set"](_0x3f0ab5, _0x260930));
    } else {
      var _0x4246cd;
      (this._shapeFormulaService["unregister"](_0x41406d),
        (_0x4246cd = this._formulaShapes["get"](_0x3f0ab5)) == null ||
          _0x4246cd.delete(_0x3914de));
    }
    _0x3914de.setFormulaPresentation(
      _0x3eda89
        ? this._shapeFormulaService["getPresentation"](_0x41406d)
        : undefined,
      (_0x3eda89 == null ? undefined : _0x3eda89.animationEnabled) !== false,
    );
  }
  refreshShapeFillImage(_0x310b9c) {
    let _0x125e39 = _0x310b9c.shapeModel["getShapeData"](),
      _0x5d3d8d = _0x125e39.fill;
    if (
      !_0x5d3d8d ||
      _0x5d3d8d.fillType !== _0x27dc69.PictureFill ||
      !_0x5d3d8d.fillImageSource
    ) {
      _0x310b9c.setFillImage(undefined);
      return;
    }
    this._loadShapePictureFill(_0x310b9c, _0x125e39);
  }
  _loadShapePictureFill(_0x487565, _0x42a475) {
    let _0x1df4a8 = _0x42a475.fill;
    if (
      !_0x1df4a8 ||
      _0x1df4a8.fillType !== _0x27dc69.PictureFill ||
      !_0x1df4a8.fillImageSource
    )
      return;
    let _0x56ec34 = _0x1df4a8.fillImageSource,
      _0x42fb84 = _0x1df4a8.fillImageSourceType ?? _0x341dc0.URL,
      _0x18463f = this._imageIoService["getImageSourceCache"](
        _0x56ec34,
        _0x42fb84,
      );
    if (_0x18463f) {
      _0x487565.setFillImage(_0x18463f);
      return;
    }
    this._loadAndSetImage(_0x487565, _0x56ec34, _0x42fb84);
  }
  async _loadAndSetImage(_0x32718b, _0x1cf54e, _0x35734a) {
    let _0x1e625f;
    try {
      if (_0x35734a === _0x341dc0.UUID)
        _0x1e625f = await this._imageIoService["getImage"](_0x1cf54e);
      else {
        if (_0x35734a === _0x341dc0.URL)
          try {
            _0x1e625f = await this._urlImageService["getImage"](_0x1cf54e);
          } catch {
            _0x1e625f = _0x1cf54e;
          }
        else _0x1e625f = _0x1cf54e;
      }
    } catch (_0xdc34c9) {
      console.error(
        "[ShapeRender]\x20Failed\x20to\x20resolve\x20picture\x20fill\x20source",
        _0xdc34c9,
      );
      return;
    }
    let _0x1ed867 = new window["Image"]();
    ((_0x1ed867.onload = () => {
      (this._imageIoService["addImageSourceCache"](
        _0x1cf54e,
        _0x35734a,
        _0x1ed867,
      ),
        _0x32718b.setFillImage(_0x1ed867));
    }),
      (_0x1ed867.onerror = () => {
        console.error(
          "[ShapeRender] Failed to load picture fill image",
          _0x1cf54e,
        );
      }),
      (_0x1ed867.src = _0x1e625f));
  }
};
Q = q(
  [
    K(0, _0x2cc1e5),
    K(1, _0x4834d7(_0x36ebcc)),
    K(2, _0x4834d7(_0x5d6b8b)),
    K(3, _0x576111),
    K(4, _0x381f39),
    K(5, _0x4834d7(X)),
    K(6, _0x4834d7(_0x92e548)),
  ],
  Q,
);
let Ai = class extends _0x24c6b6 {
  constructor(_0x5dcb2d, _0x4cb8c0, _0x318704) {
    (super(),
      (this._docPrintInterceptorService = _0x5dcb2d),
      (this._drawingManagerService = _0x4cb8c0),
      (this._shapeRenderController = _0x318704),
      this._initPrinting());
  }
  _initPrinting() {
    this.disposeWithMe(
      this._docPrintInterceptorService["interceptor"].intercept(
        this._docPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_COMPONENT_COLLECT,
        {
          handler: (_0x3748b6, _0x5cb62d, _0x328db0) => {
            var _0x308a0f;
            let {
                unitId: _0x84fd38,
                scene: _0x3e2ef8,
                skeleton: _0x299e8c,
              } = _0x5cb62d,
              { pageIndex: _0x8291be } = _0x5cb62d,
              _0xb18e32 =
                (_0x308a0f =
                  this._drawingManagerService["getDrawingDataForUnit"](
                    _0x84fd38,
                  )) == null
                  ? undefined
                  : _0x308a0f[_0x84fd38],
              _0x254563 = ji(
                this._docPrintInterceptorService,
                _0x299e8c,
                _0x8291be,
              );
            return (
              _0xb18e32 == null ||
                _0xb18e32.order["forEach"]((_0x11517b) => {
                  if (_0x254563 && !_0x254563.has(_0x11517b)) return;
                  let _0x4899bd = _0xb18e32.data[_0x11517b];
                  _0x4899bd.drawingType === _0xafe67d.DRAWING_SHAPE &&
                    !_0x4899bd.hidden &&
                    this._shapeRenderController["renderDrawingShape"](
                      _0x4899bd,
                      _0x3e2ef8,
                    );
                }),
              _0x328db0(_0x3748b6)
            );
          },
        },
      ),
    );
  }
};
Ai = q([K(0, _0x4834d7(_0x21d32d)), K(1, _0x2cc1e5), K(2, _0x4834d7(Q))], Ai);
function ji(_0x175931, _0x46e530, _0x4f136a) {
  var _0x43d660, _0xa83a6;
  let _0x125202 = _0x175931;
  if (_0x125202.getPageDrawingIds)
    return _0x125202.getPageDrawingIds(_0x46e530, _0x4f136a);
  let _0xbf32b0 = _0x46e530.getSkeletonData();
  if (!_0xbf32b0 || _0xbf32b0.pages["length"] <= 1 || _0x4f136a == null)
    return null;
  let _0x35f4e7 = new Set(),
    _0x5785ef = _0xbf32b0.pages[_0x4f136a];
  if (!_0x5785ef) return _0x35f4e7;
  Mi(_0x5785ef, _0x35f4e7);
  let _0x40281a =
      (_0x43d660 = _0xbf32b0.skeHeaders["get"](_0x5785ef.headerId)) == null
        ? undefined
        : _0x43d660.get(_0x5785ef.pageWidth),
    _0x3f302b =
      (_0xa83a6 = _0xbf32b0.skeFooters["get"](_0x5785ef.footerId)) == null
        ? undefined
        : _0xa83a6.get(_0x5785ef.pageWidth);
  return (
    _0x40281a && Mi(_0x40281a, _0x35f4e7),
    _0x3f302b && Mi(_0x3f302b, _0x35f4e7),
    _0x35f4e7
  );
}
function Mi(_0x284d92, _0x27cb62) {
  for (let _0x3e4eca of _0x284d92.skeDrawings["keys"]())
    _0x27cb62.add(_0x3e4eca);
  for (let _0x5026fd of _0x284d92.skeTables["values"]())
    for (let _0x2beca7 of _0x5026fd.rows)
      for (let _0x3336a4 of _0x2beca7.cells) Mi(_0x3336a4, _0x27cb62);
}
const Ni = "docs-shape-contextual-ribbon";
let Pi = class extends _0x24c6b6 {
  constructor(
    _0x58dd92,
    _0x5e2838,
    _0x2c9d02,
    _0x204068,
    _0x53e31a,
    _0x1472fb,
  ) {
    (super(),
      (this._menuManagerService = _0x58dd92),
      (this._ribbonService = _0x5e2838),
      (this._drawingManagerService = _0x2c9d02),
      (this._univerInstanceService = _0x204068),
      (this._renderManagerService = _0x53e31a),
      (this._shapeFloatingToolbarService = _0x1472fb),
      Y(this, "_visible", false),
      this._menuManagerService["mergeMenu"](ni),
      this.disposeWithMe(
        _0xb590da(
          this._drawingManagerService["focus$"].subscribe(() => this._update()),
        ),
      ),
      this._update());
  }
  dispose() {
    (this._shapeFloatingToolbarService["setFallbackVisible"](false, Ni),
      this._hide(),
      super.dispose());
  }
  _update() {
    var _0x4a3800;
    let _0x35a27f = this._drawingManagerService["getFocusDrawings"](),
      _0x1a0a9b = _0x35a27f.length === 1 ? _0x35a27f[0] : undefined;
    if (
      (_0x1a0a9b == null ? undefined : _0x1a0a9b.drawingType) !==
        _0xafe67d.DRAWING_SHAPE ||
      this._univerInstanceService["getUnitType"](_0x1a0a9b.unitId) !==
        _0x4f1f7e.UNIVER_DOC
    ) {
      (this._shapeFloatingToolbarService["setFallbackVisible"](false, Ni),
        this._hide());
      return;
    }
    let _0x5c0f23 =
      _0x44a7c4(
        (_0x4a3800 = this._renderManagerService["getRenderUnitById"](
          _0x1a0a9b.unitId,
        )) == null
          ? undefined
          : _0x4a3800.engine["getCanvasElement"](),
      ) === "isolated";
    if (
      (this._shapeFloatingToolbarService["setFallbackVisible"](_0x5c0f23, Ni),
      _0x5c0f23)
    ) {
      this._hide();
      return;
    }
    this._visible ||
      ((this._visible = true),
      this._ribbonService["showContextualTab"](Yn, { activate: true }));
  }
  _hide() {
    this._visible &&
      ((this._visible = false),
      this._ribbonService["hideContextualTab"](Yn),
      this._ribbonService["setCollapsedIds"]([]));
  }
};
Pi = q(
  [
    K(0, _0x2301df),
    K(1, _0x1fc97f),
    K(2, _0x2cc1e5),
    K(3, _0x419138),
    K(4, _0xc8fd3e),
    K(5, _0x4834d7(_0x268b3a)),
  ],
  Pi,
);
function Fi(_0x4712a, _0x29e020) {
  let _0x47eb76 = _0x4712a;
  for (; _0x47eb76;) {
    if (_0x29e020(_0x47eb76)) return _0x47eb76;
    _0x47eb76 =
      typeof _0x47eb76.getParent == "function" ? _0x47eb76.getParent() : null;
  }
  return null;
}
function Ii(_0x43a0e5) {
  return Fi(_0x43a0e5, (_0x3396f8) => _0x3396f8 instanceof Z);
}
function Li(_0x66cfdf) {
  return (_0x66cfdf == null ? undefined : _0x66cfdf.formulaBinding) == null;
}
let Ri = class extends _0x24c6b6 {
  constructor(
    _0x18e7d2,
    _0x3f5cc9,
    _0xcc2561,
    _0x3ca935,
    _0x48a819,
    _0x47a210,
  ) {
    (super(),
      (this._context = _0x18e7d2),
      (this._shapeTextEditingService = _0x3f5cc9),
      (this._drawingManagerService = _0xcc2561),
      (this._contextService = _0x3ca935),
      (this._docLayoutInteractionService = _0x48a819),
      (this._docsShapeService = _0x47a210),
      Y(this, "_lastEditingShapeKey", null),
      Y(this, "_layoutInteraction", null),
      this._initEvents(),
      this._initSelection(),
      this._initEditingParams());
  }
  dispose() {
    (this._endLayoutInteraction(), super.dispose());
  }
  _initEvents() {
    let { scene: _0x1fce65 } = this._context;
    this.disposeWithMe(
      _0x1fce65.onDblclick$["subscribeEvent"]((_0xffda0b, _0x4c7208) => {
        let { offsetX: _0x41758e, offsetY: _0x2d63d1 } = _0xffda0b,
          _0x25d56d = _0x2836ef.FromArray([_0x41758e, _0x2d63d1]),
          _0x30679c =
            Ii(_0x1fce65.pick(_0x25d56d)) ??
            this._getFocusedShapeAtPoint(_0x25d56d);
        if (_0x30679c) {
          _0x4c7208.stopPropagation();
          let _0x20f2f7 = this._docsShapeService["getShapeModel"](
            _0x30679c.unitId,
            _0x30679c.subUnitId,
            _0x30679c.shapeId,
          );
          if (
            !_0x20f2f7 ||
            _0x5f2ca0(_0x20f2f7.getShapeType()) ||
            !Li(_0x20f2f7.getShapeData())
          )
            return;
          this._shapeTextEditingService["setEditing"]({
            visible: true,
            unitId: _0x30679c.unitId,
            subUnitId: _0x30679c.subUnitId,
            shapeId: _0x30679c.shapeId,
            shapeKey: _0x30679c.oKey,
          });
        }
      }),
    );
  }
  _getFocusedShapeAtPoint(_0x17fdb2) {
    let { scene: _0x2fc155 } = this._context;
    return (
      this._drawingManagerService["getFocusDrawings"]()
        .map((_0x199364) =>
          _0x2fc155.getObjectIncludeInGroup(_0x1f99b7(_0x199364)),
        )
        .find(
          (_0x1811a8) => _0x1811a8 instanceof Z && _0x1811a8.isHit(_0x17fdb2),
        ) ?? null
    );
  }
  _initSelection() {
    (this.disposeWithMe(
      this._drawingManagerService["focus$"].subscribe((_0x64c6b7) => {
        if (_0x64c6b7.length === 1) {
          let _0x2a614d = _0x64c6b7[0],
            _0x444571 =
              this._drawingManagerService["getDrawingByParam"](_0x2a614d);
          if (
            (_0x444571 == null ? undefined : _0x444571.drawingType) ===
            _0xafe67d.DRAWING_SHAPE
          ) {
            let _0x149b71 = this._shapeTextEditingService["getEditing"]();
            if (
              (_0x149b71 == null ? undefined : _0x149b71.shapeId) ===
                _0x2a614d.drawingId &&
              _0x149b71.visible
            )
              return;
            _0x5f2ca0(
              this._docsShapeService["getShapeType"](
                _0x2a614d.unitId,
                _0x2a614d.subUnitId,
                _0x2a614d.drawingId,
              ),
            ) && this._shapeTextEditingService["setEditing"](null);
          } else
            this._shapeTextEditingService["getEditing"]() &&
              (this._shapeTextEditingService["setOnSavingEditorData"](true),
              requestAnimationFrame(() => {
                this._shapeTextEditingService["setEditing"](null);
              }));
        } else
          this._shapeTextEditingService["getEditing"]() &&
            (this._shapeTextEditingService["setOnSavingEditorData"](true),
            requestAnimationFrame(() => {
              this._shapeTextEditingService["setEditing"](null);
            }));
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x27e725) => {
          let _0x5e4467 = this._shapeTextEditingService["getEditing"]();
          _0x5e4467 &&
            _0x27e725.some(
              (_0x3aa876) => _0x3aa876.drawingId === _0x5e4467.shapeId,
            ) &&
            this._shapeTextEditingService["setEditing"](null);
        }),
      ));
  }
  _initEditingParams() {
    this.disposeWithMe(
      this._shapeTextEditingService["editingParams$"].subscribe((_0x36934a) => {
        (_0x36934a == null ? undefined : _0x36934a.visible) === true &&
        _0x36934a.unitId === this._context["unitId"]
          ? (this._layoutInteraction ??=
              this._docLayoutInteractionService["beginInteraction"]())
          : this._endLayoutInteraction();
        let { scene: _0x6e6de6 } = this._context;
        if (this._lastEditingShapeKey) {
          let _0x983876 = _0x6e6de6.getObjectIncludeInGroup(
            this._lastEditingShapeKey,
          );
          _0x983876 && _0x983876.setEditing(false);
        }
        if (_0x36934a) {
          let _0x429211 = !!_0x36934a.visible,
            _0x57aa6e = _0x6e6de6.getObjectIncludeInGroup(_0x36934a.shapeKey);
          (_0x57aa6e &&
            (_0x57aa6e.setEditing(_0x429211),
            (this._lastEditingShapeKey = _0x36934a.shapeKey)),
            this._contextService["setContextValue"](_0x46e4fb, _0x429211));
        } else
          ((this._lastEditingShapeKey = null),
            this._contextService["setContextValue"](_0x46e4fb, false));
      }),
    );
  }
  _endLayoutInteraction() {
    var _0x1baed7;
    ((_0x1baed7 = this._layoutInteraction) == null || _0x1baed7.dispose(),
      (this._layoutInteraction = null));
  }
};
Ri = q(
  [
    K(1, _0x4834d7(X)),
    K(2, _0x2cc1e5),
    K(3, _0x2ad9f8),
    K(4, _0x4834d7(_0x394eb4)),
    K(5, _0x4834d7(_0x36ebcc)),
  ],
  Ri,
);
let zi = class extends _0x544c71 {
  constructor(
    _0x3ce60f,
    _0x1a1954,
    _0x36e9d5,
    _0x35ce68,
    _0x1c5372,
    _0xcf697d,
    _0x362ff7,
    _0x5c6031,
    _0x38c0d4,
    _0x1471db,
  ) {
    super(
      _0x3ce60f,
      _0x1a1954,
      _0x36e9d5,
      _0x35ce68,
      _0x1c5372,
      _0xcf697d,
      _0x362ff7,
      _0x5c6031,
      _0x38c0d4,
      _0x1471db,
      { componentKey: Qn, editorUnitId: Zn },
    );
  }
};
zi = q(
  [
    K(1, _0x4834d7(_0x2b7644)),
    K(2, _0x4834d7(_0x3e0dcb)),
    K(3, _0x4834d7(_0xc8bba8)),
    K(4, _0x2bec61),
    K(5, _0x4834d7(_0x36dc5d)),
    K(6, _0x4834d7(_0x1c423f)),
    K(7, _0x4834d7(_0x4151d6)),
    K(8, _0x4834d7(_0x150fa2)),
    K(9, _0x4834d7(X)),
  ],
  zi,
);
let Bi = class extends _0x24c6b6 {
  constructor(_0x48da20, _0x5f4379, _0x13546, _0x409bcf) {
    (super(),
      (this._commandService = _0x48da20),
      (this._renderManagerService = _0x5f4379),
      (this._drawingManagerService = _0x13546),
      (this._docDrawingShapeRenderController = _0x409bcf),
      this._initialize());
  }
  _initialize() {
    (this.disposeWithMe(
      this._drawingManagerService["add$"].subscribe((_0xbc4517) =>
        this._insertShapes(_0xbc4517),
      ),
    ),
      this.disposeWithMe(
        this._drawingManagerService["update$"].subscribe((_0x5a1fd1) => {
          _0x5a1fd1.forEach((_0x13845e) => this._updateShape(_0x13845e));
        }),
      ),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x31e794) => {
          if (_0x31e794.id !== _0x158823.id) return;
          let { unitId: _0x1a4bdd, shapeId: _0x1ff54d } = _0x31e794.params;
          this._refreshShapeData({
            unitId: _0x1a4bdd,
            subUnitId: _0x1a4bdd,
            drawingId: _0x1ff54d,
          });
        }),
      ));
  }
  _insertShapes(_0x2b7acb) {
    _0x2b7acb.forEach((_0x36cbf3) => {
      let _0x16c3e3 = this._getSceneByUnitId(_0x36cbf3.unitId);
      if (!_0x16c3e3) return;
      let _0x312407 =
        this._drawingManagerService["getDrawingByParam"](_0x36cbf3);
      (_0x312407 == null ? undefined : _0x312407.drawingType) ===
        _0xafe67d.DRAWING_SHAPE &&
        this._docDrawingShapeRenderController["renderDrawingShape"](
          _0x312407,
          _0x16c3e3.scene,
        );
    });
  }
  _updateShape(_0x331391) {
    let _0x3db249 = this._drawingManagerService["getDrawingByParam"](_0x331391);
    if (
      (_0x3db249 == null ? undefined : _0x3db249.drawingType) !==
      _0xafe67d.DRAWING_SHAPE
    )
      return;
    let _0x564451 = this._getSceneByUnitId(_0x331391.unitId);
    if (!_0x564451 || _0x3db249.transform == null) return;
    let _0x3d3dc8 = _0x1f99b7(_0x331391),
      _0x163965 = _0x564451.scene["getObjectIncludeInGroup"](_0x3d3dc8);
    _0x163965 &&
      (_0x163965.setSrcRect(_0x3db249.srcRect),
      _0x163965.setPrstGeom(_0x3db249.prstGeom),
      _0x163965.makeDirty(true));
  }
  _refreshShapeData(_0x2276ff) {
    let _0x3f5062 = this._getSceneByUnitId(_0x2276ff.unitId);
    if (!_0x3f5062) return;
    let _0x398b04 = _0x1f99b7(_0x2276ff),
      _0xaba446 = _0x3f5062.scene["getObjectIncludeInGroup"](_0x398b04);
    _0xaba446 &&
      (this._docDrawingShapeRenderController["refreshShapeFillImage"](
        _0xaba446,
      ),
      this._docDrawingShapeRenderController["refreshFormulaPresentation"](
        _0xaba446,
        {
          unitId: _0x2276ff.unitId,
          subUnitId: _0x2276ff.subUnitId,
          shapeId: _0x2276ff.drawingId,
        },
      ),
      _0xaba446.makeDirty(true));
  }
  _getSceneByUnitId(_0x1f81a5) {
    if (_0x1f81a5 == null) return null;
    let _0x73d493 = this._renderManagerService["getRenderUnitById"](_0x1f81a5),
      _0x3d5004 = _0x73d493 == null ? undefined : _0x73d493.scene;
    return _0x3d5004 == null ? null : { scene: _0x3d5004 };
  }
};
Bi = q(
  [K(0, _0x2bec61), K(1, _0xc8fd3e), K(2, _0x2cc1e5), K(3, _0x4834d7(Q))],
  Bi,
);
let Vi = class extends _0x24c6b6 {
  constructor(
    _0x4d32eb,
    _0x53cac2,
    _0x423805,
    _0x3df143,
    _0x18ea32,
    _0x3c3c39,
    _0x2797aa,
    _0x2aeb76,
    _0x3887dc,
    _0x5f0446,
    _0x34df6e,
    _0x2adc46,
  ) {
    (super(),
      (this._univerInstanceService = _0x4d32eb),
      (this._sidebarService = _0x53cac2),
      (this._menuManagerService = _0x423805),
      (this._docsShapeService = _0x3df143),
      (this._localeService = _0x18ea32),
      (this._commandService = _0x3c3c39),
      (this._drawingManagerService = _0x2797aa),
      (this._docCanvasPopManagerService = _0x2aeb76),
      (this._renderManagerService = _0x3887dc),
      (this._contextService = _0x5f0446),
      (this._shapeTextEditingService = _0x34df6e),
      (this._permissionService = _0x2adc46),
      Y(this, "_sidebarDisposable", null),
      Y(this, "_activeShapeInfo", null),
      Y(this, "_isOpenedShapeEditPanel", false),
      Y(this, "_shapeEditPanelVersion", 0),
      Y(this, "_disposePopupsByUnit", new Map()),
      Y(this, "_popupTargetKeys", new Map()),
      this._initMenu(),
      this.disposeWithMe(
        this._univerInstanceService["getCurrentTypeOfUnit$"](
          _0x4f1f7e.UNIVER_DOC,
        ).subscribe((_0x43cd17) => {
          if (!_0x43cd17) {
            var _0x2f53f6;
            (_0x2f53f6 = this._sidebarDisposable) == null ||
              _0x2f53f6.dispose();
          }
        }),
      ),
      this._registerOperations(),
      this.disposeWithMe(
        _0x304b32(
          this._renderManagerService,
          _0x4f1f7e.UNIVER_DOC,
          (_0x2beae0) => this._popupMenuListener(_0x2beae0),
        ),
      ),
      this.disposeWithMe(
        this._shapeTextEditingService["editingParams$"].subscribe(
          (_0x3aa162) => {
            _0x3aa162 && this._clearPopups(undefined, true);
          },
        ),
      ),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          this._drawingManagerService["getFocusDrawings"]().some(
            (_0x44f245) =>
              _0x44f245.drawingType === _0xafe67d.DRAWING_SHAPE &&
              this._univerInstanceService["getUnitType"](_0x44f245.unitId) ===
                _0x4f1f7e.UNIVER_DOC &&
              !this._canEditShape(_0x44f245.unitId, _0x44f245.drawingId),
          ) &&
            (this._clearPopups(undefined, true), this._closeShapeEditPanel());
        }),
      ));
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](ri);
  }
  getShapePopupMenus(_0x2c0b47, _0x3e0ffe, _0xc8c679, _0x1f3e48) {
    return [
      {
        label: "docs-shape-ui.openPanel",
        index: 0,
        commandId: er.id,
        commandParams: {
          unitId: _0x2c0b47,
          subUnitId: _0x3e0ffe,
          drawingId: _0xc8c679,
        },
        disable: _0x1f3e48 === _0xafe67d.DRAWING_DOM,
      },
      {
        label: "docs-shape-ui.deleteShape",
        index: 1,
        commandId: _0x31a09e.id,
        commandParams: {
          unitId: _0x2c0b47,
          drawings: [
            { unitId: _0x2c0b47, subUnitId: _0x3e0ffe, drawingId: _0xc8c679 },
          ],
        },
        disable: false,
      },
      {
        label: "docs-shape-ui.hidePanel",
        index: 2,
        commandId: oi.id,
        commandParams: {
          unitId: _0x2c0b47,
          subUnitId: _0x3e0ffe,
          drawingId: _0xc8c679,
        },
        disable: false,
      },
    ];
  }
  _getShapeInfo(_0x4af686, _0x1b6062, _0x4d39ba) {
    let _0x582edb = this._docsShapeService["getShapeTypeById"](
        _0x4af686,
        _0x1b6062,
        _0x4d39ba,
      ),
      _0x2953c7 = this._docsShapeService["getShapeDataById"](
        _0x4af686,
        _0x1b6062,
        _0x4d39ba,
      );
    return _0x582edb !== undefined && _0x2953c7 !== undefined
      ? {
          shapeData: _0x2953c7,
          shapeId: _0x4d39ba,
          shapeType: _0x582edb,
          unitId: _0x4af686,
          subUnitId: _0x1b6062,
          version: this._shapeEditPanelVersion,
          disableShapeOption: false,
        }
      : null;
  }
  _clearPopups(_0x570a88, _0x4b8b01 = false) {
    if (_0x570a88 == null) {
      [...this._disposePopupsByUnit["keys"]()].forEach((_0x2fea93) =>
        this._clearPopups(_0x2fea93, _0x4b8b01),
      );
      return;
    }
    let _0x143df7 = this._disposePopupsByUnit["get"](_0x570a88);
    if (_0x143df7) {
      for (let _0x5ed152 = _0x143df7.length - 1; _0x5ed152 >= 0; --_0x5ed152) {
        let _0x1a8707 = _0x143df7[_0x5ed152];
        (_0x4b8b01 || _0x1a8707.canDispose()) &&
          (_0x1a8707.dispose(), _0x143df7.splice(_0x5ed152, 1));
      }
      _0x143df7.length === 0 &&
        (this._disposePopupsByUnit["delete"](_0x570a88),
        this._popupTargetKeys["delete"](_0x570a88));
    }
  }
  _getDisposePopups(_0x2d304b) {
    let _0x45f035 = this._disposePopupsByUnit["get"](_0x2d304b);
    if (_0x45f035) return _0x45f035;
    let _0x219900 = [];
    return (this._disposePopupsByUnit["set"](_0x2d304b, _0x219900), _0x219900);
  }
  _popupMenuListener(_0x5aea1f) {
    var _0x19f467;
    let _0xc72dd1 = new _0x358fb8(),
      _0x5e2a19 =
        (_0x19f467 = this._renderManagerService["getAllRenderersOfType"](
          _0x4f1f7e.UNIVER_DOC,
        ).find(
          (_0x288370) =>
            _0x288370.scene["getTransformerByCreate"]() === _0x5aea1f,
        )) == null
          ? undefined
          : _0x19f467.unitId;
    return _0x5e2a19
      ? (_0xc72dd1.add(
          _0x5aea1f.createControl$["subscribe"](() =>
            this._handleCreateControl(_0x5aea1f, _0x5e2a19),
          ),
        ),
        _0xc72dd1.add(
          _0x5aea1f.clearControl$["subscribe"](() => {
            (this._clearPopups(_0x5e2a19),
              queueMicrotask(() => {
                _0x5aea1f.getSelectedObjectMap().size > 0 ||
                  (this._contextService["setContextValue"](_0x134988, false),
                  this._drawingManagerService["focusDrawing"](null));
              }));
          }),
        ),
        _0xc72dd1.add(
          _0x5aea1f.changing$["subscribe"](() => {
            this._clearPopups(_0x5e2a19, true);
          }),
        ),
        _0xc72dd1)
      : _0xc72dd1;
  }
  _handleCreateControl(_0x47718a, _0x231286) {
    let _0x37c8e1 = _0x47718a.getSelectedObjectMap();
    if (this._isOpenedShapeEditPanel) {
      this._clearPopups(_0x231286, true);
      return;
    }
    if (_0x37c8e1.size > 1) {
      this._clearPopups(_0x231286);
      return;
    }
    let _0x358b64 = _0x37c8e1.values().next().value;
    if (!_0x358b64) {
      this._clearPopups(_0x231286);
      return;
    }
    let _0x253b38 = this._drawingManagerService["getDrawingOKey"](
      _0x358b64.oKey,
    );
    if (!_0x253b38 || _0x253b38.drawingType !== _0xafe67d.DRAWING_SHAPE) {
      this._clearPopups(_0x231286);
      return;
    }
    let {
      unitId: _0x42e080,
      subUnitId: _0x56e867,
      drawingId: _0x22edd8,
      drawingType: _0x4e1d23,
    } = _0x253b38;
    if (!this._canEditShape(_0x42e080, _0x22edd8)) {
      this._clearPopups(_0x231286, true);
      return;
    }
    let _0x5b007e = this._getShapeInfo(_0x42e080, _0x56e867, _0x22edd8);
    if (!_0x5b007e) {
      this._clearPopups(_0x231286);
      return;
    }
    let _0x5827f4 = this._disposePopupsByUnit["get"](_0x231286),
      _0x26ebf1 = _0x42e080 + ":" + _0x56e867 + ":" + _0x22edd8;
    if (
      this._popupTargetKeys["get"](_0x231286) === _0x26ebf1 &&
      _0x5827f4 &&
      _0x5827f4.length > 0
    )
      return;
    this._clearPopups(_0x231286);
    let _0x2187fe = this._renderManagerService["getRenderUnitById"](_0x42e080),
      _0x15ae62 = (
        (_0x2187fe == null ? undefined : _0x2187fe.isMainScene) === false
          ? _0x2187fe.with(_0x3e0dcb)
          : this._docCanvasPopManagerService
      ).attachPopupToObject(
        _0x358b64,
        {
          componentKey: mi,
          direction: "vertical-center",
          offset: [0, _0x12d3ee],
          extraProps: {
            unitId: _0x42e080,
            subUnitId: _0x56e867,
            drawingId: _0x22edd8,
            drawingType: _0x4e1d23,
            shapeType: _0x5b007e.shapeType,
            shapeData: _0x5b007e.shapeData,
          },
        },
        _0x42e080,
      );
    (this.disposeWithMe(_0x15ae62),
      this._getDisposePopups(_0x231286).push(_0x15ae62),
      this._popupTargetKeys["set"](_0x231286, _0x26ebf1),
      this._drawingManagerService["getFocusDrawings"]().some(
        (_0x2968ae) =>
          _0x2968ae.unitId === _0x42e080 &&
          _0x2968ae.subUnitId === _0x56e867 &&
          _0x2968ae.drawingId === _0x22edd8,
      ) ||
        this._drawingManagerService["focusDrawing"]([
          { unitId: _0x42e080, subUnitId: _0x56e867, drawingId: _0x22edd8 },
        ]));
  }
  _canEditShape(_0x4974b7, _0x436214) {
    let _0x55c35f = this._univerInstanceService["getUnit"](
      _0x4974b7,
      _0x4f1f7e.UNIVER_DOC,
    );
    if (!_0x55c35f) return false;
    let _0x56845b = _0x214243(_0x55c35f, _0x436214);
    return _0x339559(this._permissionService, _0x4974b7, [
      ..._0x279808(_0x55c35f, _0x56845b, "drawing", _0x436214),
      _0x18329a(_0x56845b, "drawing", _0x436214),
    ]);
  }
  _registerOperations() {
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x259e30) => {
        if (_0x259e30.id === er.id) {
          let {
            unitId: _0x6365bd,
            subUnitId: _0x2c2c2b,
            drawingId: _0x48235a,
          } = _0x259e30.params;
          ((this._shapeEditPanelVersion += 1),
            (this._activeShapeInfo = this._getShapeInfo(
              _0x6365bd,
              _0x2c2c2b,
              _0x48235a,
            )),
            this._clearPopups(undefined, true),
            this._openShapeEditPanel());
        }
        if (
          (_0x259e30.id === oi.id &&
            ((this._activeShapeInfo = null), this._closeShapeEditPanel()),
          _0x259e30.id === _0x158823.id)
        ) {
          let { unitId: _0xd58b69, shapeId: _0x3bed71 } = _0x259e30.params;
          if (
            this._activeShapeInfo &&
            this._activeShapeInfo["shapeId"] === _0x3bed71
          ) {
            let _0x5d481e = this._getShapeInfo(
              _0xd58b69,
              this._activeShapeInfo["subUnitId"],
              _0x3bed71,
            );
            _0x5d481e &&
              ((this._shapeEditPanelVersion += 1),
              (_0x5d481e.version = this._shapeEditPanelVersion),
              (this._activeShapeInfo = _0x5d481e),
              this._isOpenedShapeEditPanel && this._openShapeEditPanel());
          }
        }
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x486834) => {
          if (this._isOpenedShapeEditPanel === false) return;
          if (_0x486834.length === 0) {
            ((this._activeShapeInfo = null), this._closeShapeEditPanel());
            return;
          }
          if (
            _0x486834.length === 1 &&
            _0x486834[0].drawingType === _0xafe67d.DRAWING_SHAPE &&
            ((this._shapeEditPanelVersion += 1),
            (this._activeShapeInfo = this._getShapeInfo(
              _0x486834[0].unitId,
              _0x486834[0].subUnitId,
              _0x486834[0].drawingId,
            )),
            this._activeShapeInfo)
          ) {
            this._openShapeEditPanel();
            return;
          }
          let _0x598445 = _0x486834.filter(
            (_0x221a1f) => _0x221a1f.drawingType === _0xafe67d.DRAWING_SHAPE,
          );
          if (_0x486834.length > 1 && _0x598445.length === _0x486834.length) {
            if (
              ((this._shapeEditPanelVersion += 1),
              (this._activeShapeInfo = this._getShapeInfo(
                _0x486834[0].unitId,
                _0x486834[0].subUnitId,
                _0x486834[0].drawingId,
              )),
              this._activeShapeInfo)
            ) {
              this._openShapeEditPanel();
              return;
            }
          } else {
            if (
              ((this._shapeEditPanelVersion += 1),
              (this._activeShapeInfo = this._getShapeInfo(
                _0x486834[0].unitId,
                _0x486834[0].subUnitId,
                _0x486834[0].drawingId,
              )),
              this._activeShapeInfo)
            ) {
              ((this._activeShapeInfo["disableShapeOption"] = true),
                this._openShapeEditPanel());
              return;
            }
          }
          this._closeShapeEditPanel();
        }),
      ));
  }
  _openShapeEditPanel() {
    this._activeShapeInfo &&
      ((this._sidebarDisposable = this._sidebarService["open"]({
        id: Jn,
        header: {
          title: this._localeService["t"]("docs-shape-ui.formatShape"),
        },
        width: 388,
        children: { label: Jn, ...this._activeShapeInfo },
        onClose: () => {
          (this._drawingManagerService["focusDrawing"](null),
            this._contextService["setContextValue"](_0x134988, false),
            (this._sidebarDisposable = null));
        },
      })),
      (this._isOpenedShapeEditPanel = true));
  }
  _closeShapeEditPanel() {
    ((this._isOpenedShapeEditPanel = false),
      this._sidebarService["close"](Jn),
      (this._sidebarDisposable = null),
      this._contextService["setContextValue"](_0x134988, false),
      this._drawingManagerService["focusDrawing"](null));
  }
};
Vi = q(
  [
    K(0, _0x419138),
    K(1, _0x4834d7(_0x580f2f)),
    K(2, _0x2301df),
    K(3, _0x4834d7(_0x36ebcc)),
    K(4, _0x4834d7(_0x5d6b8b)),
    K(5, _0x2bec61),
    K(6, _0x2cc1e5),
    K(7, _0x4834d7(_0x3e0dcb)),
    K(8, _0xc8fd3e),
    K(9, _0x2ad9f8),
    K(10, _0x4834d7(X)),
    K(11, _0x50fd0a),
  ],
  Vi,
);
let $ = class extends _0x42c7c9 {
  constructor(_0x371503 = si, _0x3acf61, _0x21a2d6, _0x4b1e4c, _0xa0df18) {
    (super(),
      (this._config = _0x371503),
      (this._injector = _0x3acf61),
      (this._commandService = _0x21a2d6),
      (this._configService = _0x4b1e4c),
      (this._renderManagerService = _0xa0df18));
    let { menu: _0x396aa1, ..._0x633ac } = _0x3c20a1({}, si, this._config);
    (_0x396aa1 &&
      this._configService["setConfig"]("menu", _0x396aa1, { merge: true }),
      this._configService["setConfig"]("docs-shape-ui.config", _0x633ac),
      this._initCommands());
  }
  onStarting() {
    (this._injector["add"]([Ti]),
      this._injector["get"](Ti),
      _0x53556d(this._injector, [
        [Vi],
        [Bi],
        [Q],
        [Ai],
        [Oi],
        [ir],
        [di],
        [X],
        [Pi],
      ]),
      this._initUIPart());
  }
  onReady() {
    (this._renderManagerService["registerRenderModule"](_0x4f1f7e.UNIVER_DOC, [
      Oi,
    ]),
      this._renderManagerService["registerRenderModule"](_0x4f1f7e.UNIVER_DOC, [
        Ri,
      ]),
      _0x729848(this._injector, [
        [Vi],
        [Bi],
        [Q],
        [Ai],
        [ir],
        [di],
        [X],
        [Pi],
      ]));
  }
  onRendered() {
    this._renderManagerService["registerRenderModule"](_0x4f1f7e.UNIVER_DOC, [
      zi,
    ]);
  }
  _initCommands() {
    [G, oi, er, $n, nr, rr].forEach((_0x1af540) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x1af540)),
    );
  }
  _initUIPart() {
    let _0x2e9bda = this._injector,
      _0x22f40a = _0x2e9bda.get(_0x42d187);
    this.disposeWithMe(
      _0x22f40a.registerComponent(_0x5a60dc.CONTENT, () =>
        _0xbdecea(wi, _0x2e9bda),
      ),
    );
  }
};
(Y($, "type", _0x4f1f7e.UNIVER_DOC),
  Y($, "pluginName", "DOCS_SHAPE_UI_PLUGIN"),
  Y($, "packageName", ii),
  Y($, "version", ai),
  ($ = q(
    [
      _0x10acf1(
        _0x559dcd,
        _0x124bd7,
        _0xda17d2,
        _0x4580f2,
        _0x3a89cd,
        _0x113e69,
        _0x333f66,
        _0x45a5ce,
        _0x438d66,
        _0xab23f3,
      ),
      K(1, _0x4834d7(_0x10b898)),
      K(2, _0x2bec61),
      K(3, _0x366920),
      K(4, _0xc8fd3e),
    ],
    $,
  )));
export { ri as DocsShapeUIMenuSchema, $ as UniverDocsShapeUIPlugin };
