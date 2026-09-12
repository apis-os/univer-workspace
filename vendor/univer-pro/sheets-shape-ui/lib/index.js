import {
  FormulaShapeAnimationController as _0x56f6af,
  MobileShapeEditorService as _0x1f44d6,
  SHAPE_CHANGE_PICKER_COMPONENT as _0x5d4c3e,
  SHAPE_EDITOR_TRANSFORMER_CONFIG as _0x30e62f,
  SHEET_DOC_SHAPE_FLOATING_TOOLBAR_TOP_OFFSET as _0x5882e4,
  ShapeEditPanel as _0x156806,
  ShapeFloatingToolbar as _0x4a99c4,
  ShapeFloatingToolbarService as _0x4728b3,
  ShapeFloatingToolbarToggleFactory as _0x165c79,
  ShapeFormulaRibbonControl as _0x3776a9,
  ShapeGroupEnum as _0x45f823,
  ShapePickerDropdown as _0x183e4b,
  ShapePickerPanel as _0x24ed4e,
  ShapeQuickStyleGallery as _0x1a2175,
  ShapeStyleRibbonControl as _0x2805b5,
  ShapeTextEditorContainer as _0x28504a,
  ShapeTextFloatMenuRenderControllerBase as _0x4a30dc,
  ShapeTextFloatToolbar as _0x3073fb,
  ShapeTextHyperLinkPopupService as _0x36ba06,
  ShapeTextRibbonControl as _0x38d766,
  ToggleShapeFloatingToolbarOperation as _0x3aa914,
  UniverShapeEditorUIPlugin as _0x4fc6fd,
  activateDrawingObject as _0x24bfce,
  bindRenderTransformerLifecycle as _0x42ba9f,
  buildShapeTextDataUpdate as _0x45da91,
  clearActiveDrawingObjects as _0x1dd2f5,
  drawFormulaShapeAnimationLayers as _0xd2634,
  getDrawingTypeNameKey as _0x314e82,
  getTextModel as _0x2c8e9a,
  getTextStyle as _0x47fc6a,
  normalizeShapeTextModel as _0xfa9635,
  plainShapeTextToDocumentData as _0x47da4c,
  prepareShapeTextDocumentData as _0x3af848,
  resolveFormulaShapeAutoFitSize as _0x4a0bc3,
  resolveShapeContextualRibbonHostMode as _0xa4aa5c,
  resolveShapeTextDocumentRenderLayout as _0x1c223a,
  resolveShapeTextEditorBehaviorShapeData as _0x161f03,
  resolveShapeTextEditorWrapStrategy as _0x17af1f,
  shouldAllowShapeTextEditorHostSizeShrink as _0x8b3c56,
  shouldClipShapeTextDocument as _0x55a599,
  useFormulaShapeToolbar as _0x543b34,
} from "@univerjs-pro/shape-editor-ui";
import {
  ComponentManager as _0x553d6e,
  ContextMenuGroup as _0x2a6fa6,
  ContextMenuPosition as _0x121b82,
  FloatingObjectToolbarPosition as _0x13120a,
  IMenuManagerService as _0x193823,
  IRibbonService as _0x5ae769,
  ISidebarService as _0x408575,
  IconManager as _0x1ceb4b,
  MOBILE_UI_MODE as _0xf6400e,
  MenuItemType as _0x3ab343,
  MenuManagerPosition as _0xfb900f,
  RibbonInsertGroup as _0x49f2b0,
  UndoRedoGroupService as _0x2b9297,
  getMenuHiddenObservable as _0x4da172,
  useDependency as _0x2c16c5,
  useObservable as _0x1b95c6,
} from "@univerjs/ui";
import {
  ConnectorCoordinateTransform as _0x289e78,
  ImageSourceTypeEnum as _0x2f3fc4,
  ShapeArrowSizeEnum as _0x458be9,
  ShapeArrowTypeEnum as _0xb193cf,
  ShapeDefaultConfig as _0x1a8d3f,
  ShapeFillEnum as _0x213ca6,
  ShapeLineTypeEnum as _0x4c02b6,
  ShapeModel as _0x58de54,
  ShapeRenderModeEnum as _0x57a3c1,
  ShapeTypeEnum as _0xcf4f0c,
  computeConnectorRouteLayout as _0x546e7e,
  getBasicShapeRotateBound as _0x3a3e4f,
  isConnectorShape as _0x3ae025,
  isCurvedConnectorShape as _0x1bd39e,
  routeConnectorLineShape as _0x4940af,
} from "@univerjs-pro/engine-shape";
import {
  ShapeFormulaService as _0x1fc9c5,
  UniverShapeEditorPlugin as _0x3be943,
  applyQuickStyleToShapeData as _0xb0264c,
  cloneShapeDataForType as _0x43845f,
  createShapeFormulaDocument as _0x51dfb,
  createShapeTextBoxShapeData as _0xb5a6f7,
  getShapeQuickStylePreset as _0x6f89f1,
  getShapeQuickStyleType as _0x9a491d,
  resolveActiveShapeQuickStylePresetId as _0x42c543,
} from "@univerjs-pro/shape-editor";
import {
  InsertShapeCommand as _0x149e5a,
  InsertSheetsShapeMutation as _0x16d69c,
  RemoveSheetsShapeMutation as _0xc6307,
  SetShapeDrawingDataCommand as _0x30bb40,
  SheetsShapeService as _0x1e4684,
  ToggleSheetsShapeFlipCommand as _0x35583a,
  UniverSheetsShapePlugin as _0x13e56d,
  UpdateConnectorRelationCommand as _0x5011ac,
  UpdateLineShapeResizeCommand as _0x183f82,
  UpdateSheetsShapeDataMutation as _0x12ceb1,
} from "@univerjs-pro/sheets-shape";
import {
  ArrangeTypeEnum as _0x6ccaec,
  CommandType as _0x185165,
  DependentOn as _0x291c90,
  Disposable as _0x56da22,
  DisposableCollection as _0x3fd497,
  DocumentDataModel as _0xa53dd6,
  DrawingTypeEnum as _0x1ca1a8,
  FOCUSING_COMMON_DRAWINGS as _0x3aba69,
  FOCUSING_SHAPE_TEXT_EDITOR as _0x43000f,
  HorizontalAlign as _0x424379,
  ICommandService as _0x454da3,
  IConfigService as _0x3b14a3,
  IContextService as _0x573752,
  IImageIoService as _0x59d119,
  IPermissionService as _0x4843c2,
  IURLImageService as _0x3fc746,
  IUndoRedoService as _0x55301b,
  IUniverInstanceService as _0x36fe2b,
  Inject as _0x344f6e,
  Injector as _0x3efb0c,
  LocaleService as _0x15ffe9,
  Plugin as _0x33fcda,
  UniverInstanceType as _0x44a53b,
  VerticalAlign as _0x374a10,
  createInternalEditorID as _0x156a91,
  generateRandomId as _0x11b425,
  merge as _0x1ace4b,
  toDisposable as _0xa4b14e,
  touchDependencies as _0xd8b857,
} from "@univerjs/core";
import {
  CopySheetCommand as _0x58b8d4,
  RemoveSheetCommand as _0x53c617,
  SheetInterceptorService as _0x208852,
  SheetPermissionCheckController as _0x377d09,
  SheetSkeletonService as _0x5209d1,
  SheetsSelectionsService as _0xee7292,
  UniverSheetsPlugin as _0x412cf5,
  WorkbookEditablePermission as _0xe46f62,
  WorksheetEditPermission as _0x53e1b4,
  attachRangeWithCoord as _0x22c1a3,
  discreteRangeToRange as _0xefd0e7,
  getSheetCommandTarget as _0x55b6c8,
} from "@univerjs/sheets";
import {
  IDrawingManagerService as _0xa5b289,
  SetDrawingSelectedOperation as _0x635955,
  UniverDrawingPlugin as _0x5d5c15,
  getDrawingShapeKeyByDrawingSearch as _0x568a43,
  getOrCreateDrawingCopyPlan as _0x5a34b0,
} from "@univerjs/drawing";
import {
  CURSOR_TYPE as _0x1160cb,
  Circle as _0x16d47d,
  DRAWING_OBJECT_LAYER_INDEX as _0x51ebe3,
  DocumentSkeleton as _0xc1e612,
  DocumentViewModel as _0x1315e8,
  Documents as _0x3d1d09,
  IRenderManagerService as _0x191ca0,
  Image as _0x5a3f22,
  RENDER_CLASS_TYPE as _0x159d3c,
  SHEET_VIEWPORT_KEY as _0x1fc362,
  Shape as _0x3a886a,
  Transform as _0x5ca2e3,
  UniverRenderEnginePlugin as _0x389f56,
  Vector2 as _0x5865be,
} from "@univerjs/engine-render";
import {
  COPY_TYPE as _0x5b0d70,
  ISheetClipboardService as _0x41eecb,
  PREDEFINED_HOOK_NAME as _0x4a7d5c,
  SheetCanvasPopManagerService as _0x3a115d,
  SheetPrintInterceptorService as _0x1ea8ee,
  SheetScrollManagerService as _0x54a8d4,
  SheetSkeletonManagerService as _0x2bd78f,
  UniverSheetsUIPlugin as _0x2821c5,
  deriveStateFromActiveSheet$ as _0x3ce853,
  getCurrentRangeDisable$ as _0x3f3f55,
  getViewportByCell as _0xeb9ad5,
} from "@univerjs/sheets-ui";
import {
  BehaviorSubject as _0x415742,
  EMPTY as _0xf8c1f7,
  Observable as _0x4e364a,
  map as _0xa2db5f,
  of as _0x54ba04,
  startWith as _0x42e934,
  switchMap as _0x373e57,
} from "rxjs";
import {
  DrawingCommonPanel as _0xc52ee1,
  DrawingImageClipService as _0x548a6a,
  DrawingRenderService as _0x1763ed,
  IMAGE_CLIP_SHAPE_PICKER_COMPONENT as _0x49f11b,
  OBJECT_LIST_FLOATING_SECTION_ID as _0x24f877,
  ObjectListPanelBase as _0x1441ba,
  UniverDrawingUIPlugin as _0x5ac284,
  getCurrentUnitInfo as _0x1b56de,
  getObjectListPanelLabels as _0x8c9bc4,
  getObjectListPanelSectionIdForDrawingType as _0x2c7643,
  getObjectListPanelTypeName as _0x47fc7d,
  insertGroupObject as _0x6b1a05,
} from "@univerjs/drawing-ui";
import {
  Fragment as _0x94c37b,
  jsx as _0x346498,
  jsxs as _0x1721b0,
} from "react/jsx-runtime";
import {
  DrawingApplyType as _0x1caec9,
  ISheetDrawingService as _0x3b4870,
  RemoveSheetDrawingCommand as _0x313c2d,
  SetDrawingApplyMutation as _0x58efe4,
  SetDrawingArrangeCommand as _0x7edf74,
  SetSheetDrawingCommand as _0x1e4c38,
  UniverSheetsDrawingPlugin as _0x3cbfbf,
  transformToAxisAlignPosition as _0xf93d6,
  transformToDrawingPosition as _0x318d77,
} from "@univerjs/sheets-drawing";
import { UniverLicensePlugin as _0x2b9e89 } from "@univerjs-pro/license";
import {
  DocInterceptorService as _0x4128bf,
  DocSelectionManagerService as _0x416ee1,
  UniverDocsPlugin as _0x4485af,
} from "@univerjs/docs";
import {
  DocCanvasPopManagerService as _0x117fa3,
  DocEventManagerService as _0x3fffda,
  DocRenderController as _0x9bda1d,
  DocSelectionRenderService as _0x455fd5,
  UniverDocsUIPlugin as _0x181bb2,
} from "@univerjs/docs-ui";
import {
  SheetDrawingAnchor as _0xcb80bf,
  SheetsDrawingGroupCopyPasteController as _0x36733f,
  UniverSheetsDrawingUIPlugin as _0x143f28,
} from "@univerjs/sheets-drawing-ui";
import {
  BottomIcon as _0x4270d1,
  FlipHorizontalIcon as _0x48a381,
  FlipVerticalIcon as _0x97ab84,
  MoveDownIcon as _0x3fd86a,
  MoveUpIcon as _0x47a315,
  ObjectLayersIcon as _0x1f9f4b,
  ShapeFormatSettingIcon as _0x4eaf96,
  TopmostIcon as _0x550a81,
} from "@univerjs/icons";
import {
  memo as _0x5f40bf,
  useContext as _0x2994b4,
  useEffect as _0x297091,
  useMemo as _0x5933b2,
  useReducer as _0xf8778d,
  useState as _0x40a276,
} from "react";
import { ConfigContext as _0x49ad34 } from "@univerjs/design";
function dr(_0x3e5deb, _0xb842f7) {
  let _0x4ebfb2 = {};
  for (let _0x28d058 of Object.keys(_0xb842f7)) {
    let _0x3722ea = _0xb842f7[_0x28d058],
      _0x3e5c91 = _0x3e5deb[_0x28d058];
    if (_0x3722ea !== undefined) {
      if (_0x3e5c91 === undefined) {
        _0x4ebfb2[_0x28d058] = undefined;
        continue;
      }
      typeof _0x3722ea == "object" &&
      _0x3722ea &&
      !Array.isArray(_0x3722ea) &&
      typeof _0x3e5c91 == "object" &&
      _0x3e5c91 &&
      !Array.isArray(_0x3e5c91)
        ? (_0x4ebfb2[_0x28d058] = dr(_0x3e5c91, _0x3722ea))
        : (_0x4ebfb2[_0x28d058] = _0x3e5c91);
    }
  }
  return _0x4ebfb2;
}
const fr = {
  type: _0x185165.COMMAND,
  id: "sheet.command.update-shape-data",
  handler: (_0x4d2943, _0x3f8b56) => {
    let _0x1690c9 = _0x4d2943.get(_0x1e4684),
      {
        unitId: _0x237ce3,
        subUnitId: _0xb6d26e,
        shapeType: _0x3307bf,
        shapeId: _0xda29e2,
        shapeData: _0x4e7138,
        replaceShapeData: _0x56fbdb,
        oldShapeJSON: _0x44f8fb,
      } = _0x3f8b56;
    if (!_0x1690c9.getShapeModel(_0x237ce3, _0xb6d26e, _0xda29e2)) return false;
    let _0x1aa9bf = _0x4d2943.get(_0x454da3),
      _0x1f0af3 = _0x4d2943.get(_0x55301b),
      { oldShapeType: _0x547664, oldShapeData: _0x20194c = {} } = _0x44f8fb,
      _0x5e1339 = _0x56fbdb ? _0x20194c : dr(_0x20194c, _0x4e7138 || {}),
      _0x472444 = {
        id: _0x12ceb1.id,
        params: {
          unitId: _0x237ce3,
          subUnitId: _0xb6d26e,
          shapeId: _0xda29e2,
          shapeType: _0x3307bf,
          shapeData: _0x4e7138,
          replace: _0x56fbdb,
        },
      },
      _0x1acbb7 = {
        id: _0x12ceb1.id,
        params: {
          unitId: _0x237ce3,
          subUnitId: _0xb6d26e,
          shapeId: _0xda29e2,
          shapeType: _0x547664,
          shapeData: _0x5e1339,
          replace: _0x56fbdb,
        },
      };
    return _0x1aa9bf.syncExecuteCommand(_0x472444.id, _0x472444.params)
      ? (_0x1f0af3.pushUndoRedo({
          unitID: _0x237ce3,
          undoMutations: [_0x1acbb7],
          redoMutations: [_0x472444],
        }),
        true)
      : false;
  },
};
function pr(_0x5c4e40, _0x156d13, _0x22117e, _0x47be6e, _0x188177, _0x22e9d8) {
  let _0x3db552 = {
    unitId: _0x156d13,
    subUnitId: _0x22117e,
    shapeId: _0x47be6e,
    shapeData: _0x22e9d8,
    oldShapeJSON: _0x188177,
  };
  return _0x5c4e40.executeCommand(fr.id, _0x3db552);
}
function mr(_0x40e84a, _0x1022ee, _0x373d95, _0x2706e7, _0x3435d5, _0x34cdab) {
  let _0x2d0a1a = {
    unitId: _0x1022ee,
    subUnitId: _0x373d95,
    shapeId: _0x2706e7,
    shapeData: _0x34cdab,
    oldShapeJSON: _0x3435d5,
  };
  return _0x40e84a.executeCommand(fr.id, _0x2d0a1a);
}
function hr(_0xf2c0a7) {
  "@babel/helpers - typeof";
  return (
    (hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3a850a) {
            return typeof _0x3a850a;
          }
        : function (_0x2cfaba) {
            return _0x2cfaba &&
              typeof Symbol == "function" &&
              _0x2cfaba.constructor === Symbol &&
              _0x2cfaba !== Symbol.prototype
              ? "symbol"
              : typeof _0x2cfaba;
          }),
    hr(_0xf2c0a7)
  );
}
function gr(_0x2339a9, _0x396d73) {
  if (hr(_0x2339a9) != "object" || !_0x2339a9) return _0x2339a9;
  var _0x7f7596 = _0x2339a9[Symbol.toPrimitive];
  if (_0x7f7596 !== undefined) {
    var _0x3130e9 = _0x7f7596.call(_0x2339a9, _0x396d73 || "default");
    if (hr(_0x3130e9) != "object") return _0x3130e9;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x396d73 === "string" ? String : Number)(_0x2339a9);
}
function _r(_0x328388) {
  var _0x3aa0a9 = gr(_0x328388, "string");
  return hr(_0x3aa0a9) == "symbol" ? _0x3aa0a9 : _0x3aa0a9 + "";
}
function J(_0x42027f, _0x28182b, _0x556349) {
  return (
    (_0x28182b = _r(_0x28182b)) in _0x42027f
      ? Object.defineProperty(_0x42027f, _0x28182b, {
          value: _0x556349,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x42027f[_0x28182b] = _0x556349),
    _0x42027f
  );
}
function vr(_0x5af9c1, _0x2a94f3, _0x22f0d7) {
  let _0x47484f = _0x161f03(_0x5af9c1, {
      ..._0x2a94f3,
      dataModel: {
        ...(_0x2a94f3.dataModel ?? {}),
        ...(_0x22f0d7 ? { doc: _0x22f0d7 } : null),
      },
    }),
    _0x51a8aa = _0x17af1f(_0x47484f);
  return { clip: _0x55a599(_0x47484f, _0x51a8aa), wrapStrategy: _0x51a8aa };
}
var yr = class extends _0x3a886a {
    constructor(_0x46bf7a, _0x234228) {
      (super(_0x46bf7a, _0x234228),
        J(this, "_props", undefined),
        J(
          this,
          "_formulaAnimation",
          new _0x56f6af(
            () => this.makeDirty(true),
            () => this._applyFormulaAutoFitSize(),
          ),
        ),
        J(this, "_transformCalculateSrcRect", true),
        J(this, "_drawingType", _0x1ca1a8.DRAWING_SHAPE),
        J(this, "isDrawingObject", true),
        (this._props = { ..._0x234228 }),
        this._formulaAnimation["setPresentation"](
          _0x234228.formulaPresentation,
          _0x234228.animateFormulaPresentation !== false,
        ),
        this._init(),
        this._applyFormulaAutoFitSize());
    }
    _init() {
      this.onTransformChange$["subscribeEvent"]((_0x461d03) => {
        this._updateSrcRectByTransform(_0x461d03);
      });
    }
    setPrstGeom(_0x242ef1) {
      this._props["prstGeom"] = _0x242ef1;
    }
    setEditing(_0x20808e) {
      ((this._props["isEditing"] = _0x20808e), this.makeDirty(true));
    }
    setFormulaPresentation(_0x302274, _0xeb86fe = true) {
      (this._formulaAnimation["setPresentation"](_0x302274, _0xeb86fe),
        (this._props["formulaPresentation"] = _0x302274),
        this._applyFormulaAutoFitSize(),
        this.makeDirty(true));
    }
    _applyFormulaAutoFitSize() {
      let _0x385747 = this._props["shapeModel"],
        _0x104dd1 = _0x385747.getShapeTextData(),
        _0x40b535 = _0xfa9635(
          _0x104dd1 == null ? undefined : _0x104dd1.dataModel,
        ),
        _0x82cf0e = _0x40b535 == null ? undefined : _0x40b535.doc,
        _0x43b5f8 = this._formulaAnimation["getAutoFitPresentations"]();
      if (!_0x82cf0e || _0x43b5f8.length === 0) return;
      _0x385747.updateContext({ width: this.width, height: this.height });
      let _0x3a5eb6 = _0x4a0bc3({
        documentData: _0x43b5f8.map((_0x576f2a) =>
          _0x51dfb(_0x82cf0e, _0x576f2a),
        ),
        height: this.height,
        shapeData: _0x385747.getShapeData(),
        textRect: _0x385747.getShapeTextRect({
          left: 0,
          top: 0,
          width: this.width,
          height: this.height,
        }),
        width: this.width,
      });
      if (_0x3a5eb6) {
        var _0x1f875e;
        (this.resize(_0x3a5eb6.width, _0x3a5eb6.height),
          (_0x1f875e = this.getScene()) == null ||
            (_0x1f875e = _0x1f875e.getTransformer()) == null ||
            _0x1f875e.debounceRefreshControls());
      }
    }
    get unitId() {
      return this._props["unitId"];
    }
    get subUnitId() {
      return this._props["subUnitId"];
    }
    _updateSrcRectByTransform(_0x5c83ab) {
      if (this._props["srcRect"] == null || !this._transformCalculateSrcRect)
        return;
      let { width: _0x4ec337, height: _0x4bc58b } = this,
        { width: _0xcda601 = 0, height: _0x196a79 = 0 } = _0x5c83ab.preValue,
        {
          left: _0x18a5eb = 0,
          top: _0x4e573e = 0,
          right: _0x29351f = 0,
          bottom: _0x55a60c = 0,
        } = this._props["srcRect"],
        _0x112868 = _0x18a5eb,
        _0x56b359 = _0x4e573e,
        _0xa419ec = _0x29351f,
        _0x2deac5 = _0x55a60c,
        _0x39a4ee = false;
      if (_0xcda601 !== 0 && _0xcda601 !== _0x4ec337) {
        let _0x400571 = _0x18a5eb / _0xcda601,
          _0x32e601 = _0x29351f / _0xcda601;
        ((_0x112868 = _0x4ec337 * _0x400571),
          (_0xa419ec = _0x4ec337 * _0x32e601),
          (_0x39a4ee = true));
      }
      if (_0x196a79 !== 0 && _0x196a79 !== _0x4bc58b) {
        let _0x74380d = _0x4e573e / _0x196a79,
          _0x575038 = _0x55a60c / _0x196a79;
        ((_0x56b359 = _0x4bc58b * _0x74380d),
          (_0x2deac5 = _0x4bc58b * _0x575038),
          (_0x39a4ee = true));
      }
      _0x39a4ee &&
        this.setSrcRect({
          left: _0x112868,
          top: _0x56b359,
          right: _0xa419ec,
          bottom: _0x2deac5,
        });
    }
    setSrcRect(_0x31336d) {
      ((this._props["srcRect"] = _0x31336d), this.makeDirty(true));
    }
    setFillImage(_0x31201b) {
      ((this._props["image"] = _0x31201b), this.makeDirty(true));
    }
    set transform(_0x3922fb) {
      this._transform = _0x3922fb;
    }
    get transform() {
      this._transform || this._setTransForm();
      let _0x49d77b = this._transform["clone"]();
      return this.transformForAngle(_0x49d77b);
    }
    get shapeModel() {
      return this._props["shapeModel"];
    }
    get shapeId() {
      return this._props["shapeId"];
    }
    get classType() {
      return _0x159d3c.SHAPE;
    }
    _draw(_0x4d1f66, _0x3b3fc6, _0xb6bcf4, _0x2c8a6b) {
      let _0x3604e3 = this._props["shapeModel"];
      if (!_0x3604e3 || !_0x3b3fc6) return;
      let _0x1ef670 = _0xb6bcf4 ?? this.width,
        _0x2658a0 = _0x2c8a6b ?? this.height,
        _0x19f700 = {
          shapeType: _0x3604e3.getShapeType(),
          width: _0x1ef670,
          height: _0x2658a0,
        },
        _0x30c53c = {
          renderMode: _0x57a3c1.Path,
          oKey: this.oKey,
          image: this._props["image"],
          angle: this.angle,
        };
      (_0x3604e3.updateContext(_0x19f700), _0x4d1f66.save());
      let _0x22c07b = { top: 0, left: 0, width: _0x1ef670, height: _0x2658a0 },
        _0x44d46f = _0x3604e3.getDrawingEffectBounds(_0x22c07b);
      (_0x44d46f
        ? this._renderWithCache(_0x4d1f66, _0x44d46f, (_0x229ad3) => {
            _0x3604e3.render(_0x229ad3, _0x22c07b, _0x30c53c);
          })
        : (this._releaseRenderCache(),
          _0x3604e3.render(_0x4d1f66, _0x22c07b, _0x30c53c)),
        _0x4d1f66.restore());
      let _0xe4e0af = _0x3604e3.getShapeTextData(),
        _0x491d5a = _0x3604e3.getShapeTextRect(_0x22c07b),
        _0x388ead = _0x3604e3.isLineShape();
      if (_0xe4e0af && _0x491d5a && !_0x388ead) {
        (_0x4d1f66.save(), this.getState().flipX && _0x4d1f66.scale(-1, 1));
        let _0x392001 = _0x1ef670 / 2,
          _0x370461 = _0x2658a0 / 2;
        (_0x4d1f66.translate(-_0x392001, -_0x370461),
          _0x4d1f66.beginPath(),
          this._drawShapeText(_0x4d1f66, _0xe4e0af, _0x491d5a),
          _0x4d1f66.restore());
      }
    }
    getDrawingPoints(_0x1062b6) {}
    _drawShapeText(_0x3ef437, _0x122c01, _0x4edbe9) {
      var _0x138870;
      this._props["isEditing"] ||
        (!((_0x138870 = _0x122c01.dataModel) != null && _0x138870.doc) &&
        "isRichText" in _0x122c01 &&
        _0x122c01.isRichText === false
          ? this._drawSimpleText(_0x3ef437, _0x122c01, _0x4edbe9)
          : this._drawRichText(_0x3ef437, _0x122c01, _0x4edbe9));
    }
    _drawSimpleText(_0x3fb7b1, _0x36a96c, _0x486dac) {
      this._drawRichText(
        _0x3fb7b1,
        {
          ..._0x36a96c,
          text: _0x36a96c.text ?? "",
          dataModel: {
            doc: _0x47da4c(_0x36a96c, "sheets-shape-text-" + this.oKey),
          },
        },
        _0x486dac,
      );
    }
    _drawRichText(_0x1ccd3d, _0x27a6ab, _0x307742) {
      _0xd2634(_0x1ccd3d, this._formulaAnimation, (_0x49092f, _0xb1cedf) => {
        this._drawRichTextLayer(_0x49092f, _0x27a6ab, _0x307742, _0xb1cedf);
      });
    }
    _drawRichTextLayer(_0x5e8023, _0x54f5ed, _0x57b2f7, _0x4d1802) {
      let _0x36ca1d = this._props["localeService"];
      if (!_0x54f5ed.dataModel || !_0x36ca1d) return;
      let _0x3b00b9 = _0xfa9635(_0x54f5ed.dataModel);
      if (!_0x3b00b9) return;
      let _0x23a5e9 = _0x3b00b9.doc;
      if (!_0x23a5e9) return;
      let _0x116309 = _0x51dfb(_0x23a5e9, _0x4d1802),
        _0x4560ec = _0x3b00b9.va ?? _0x374a10.TOP,
        _0x54ce26 = _0x3b00b9.ha ?? _0x424379.LEFT,
        _0x3da15c = vr(
          this._props["shapeModel"].getShapeData(),
          _0x54f5ed,
          _0x116309,
        ),
        _0x52be9b = _0x54f5ed.isHorizontal,
        _0x1538d6 = new _0xa53dd6(
          _0x3af848(_0x116309, {
            isHorizontal: _0x52be9b !== false,
            textRect: _0x57b2f7,
            verticalAlign: _0x4560ec,
            horizontalAlign: _0x54ce26,
            wrapStrategy: _0x3da15c.wrapStrategy,
          }),
        ),
        _0x133b62 = new _0x1315e8(_0x1538d6),
        _0x1ebf74 = _0xc1e612.create(_0x133b62, _0x36ca1d);
      _0x1ebf74.calculate();
      let _0x456662 = _0x1ebf74.getActualSize().actualHeight,
        _0x407421 = _0x1c223a({
          contentHeight: _0x456662,
          verticalAlign: _0x4560ec,
          viewportHeight: _0x57b2f7.height,
        });
      (_0x1538d6.updateDocumentStyle({
        pageSize: {
          width: _0x52be9b === false ? _0x57b2f7.height : _0x57b2f7.width,
          height: _0x407421.contentHeight,
        },
      }),
        _0x1538d6.updateDocumentDataMargin({ t: _0x407421.marginTop }),
        _0x1ebf74.calculate());
      let _0x5aeda4 = new _0x3d1d09("shape-text-" + this.oKey, _0x1ebf74, {
        pageMarginLeft: 0,
        pageMarginTop: 0,
        onTextFillImageLoaded: () => this.makeDirty(true),
      });
      (_0x5aeda4.resize(_0x57b2f7.width, _0x407421.contentHeight),
        _0x5e8023.save(),
        _0x5e8023.translateWithPrecision(_0x57b2f7.left, _0x57b2f7.top),
        _0x3da15c.clip &&
          (_0x5e8023.beginPath(),
          _0x5e8023.rect(
            0,
            _0x407421.clipTop,
            _0x57b2f7.width,
            _0x407421.clipHeight,
          ),
          _0x5e8023.clip()),
        _0x407421.contentVerticalOffset &&
          _0x5e8023.translateWithPrecision(0, _0x407421.contentVerticalOffset),
        _0x5aeda4.draw(_0x5e8023),
        _0x5e8023.restore(),
        _0x5aeda4.dispose(),
        _0x1ebf74.dispose(),
        _0x133b62.dispose(),
        _0x1538d6.dispose());
    }
    render(_0x5538ed, _0xd5f13, _0x4d3952 = false) {
      if (!this.visible) return (this.makeDirty(false), this);
      let {
          width: _0x1e5438,
          height: _0x27f76c,
          left: _0x2deef0,
          top: _0x24cea9,
        } = this,
        _0x18cb25 = this.getRealBound();
      if (
        ((_0x1e5438 = _0x18cb25.width),
        (_0x27f76c = _0x18cb25.height),
        (_0x2deef0 = _0x18cb25.left),
        (_0x24cea9 = _0x18cb25.top),
        this.isRender(_0xd5f13))
      ) {
        let {
          top: _0x49a54a,
          left: _0x3a280d,
          bottom: _0x1d6483,
          right: _0x2336be,
        } = _0xd5f13.viewBound;
        if (
          _0x1e5438 + this.strokeWidth + _0x2deef0 < _0x3a280d ||
          _0x2336be < _0x2deef0 ||
          _0x27f76c + this.strokeWidth + _0x24cea9 < _0x49a54a ||
          _0x1d6483 < _0x24cea9
        )
          return this;
      }
      let _0x19200e = _0x2deef0 + _0x1e5438 / 2,
        _0x3c5e7b = _0x24cea9 + _0x27f76c / 2,
        _0x2dddc1 = this.transform["getMatrix"]();
      if (this._props["isEditing"]) {
        let _0x5f36c5 = this.getState(),
          _0x3d3e79 = new _0x5ca2e3();
        (_0x3d3e79.composeMatrix({ ..._0x5f36c5 }),
          (_0x2dddc1 = _0x3d3e79.getMatrix()));
      }
      return (
        _0x5538ed.save(),
        this._props["shapeModel"].isRenderLinePointsMode === true ||
          _0x5538ed.transform(
            _0x2dddc1[0],
            _0x2dddc1[1],
            _0x2dddc1[2],
            _0x2dddc1[3],
            _0x19200e,
            _0x3c5e7b,
          ),
        this._draw(_0x5538ed, _0xd5f13, _0x1e5438, _0x27f76c),
        _0x5538ed.restore(),
        this.makeDirty(false),
        this
      );
    }
    getInverseCoord(_0x389eab) {
      let {
          left: _0x2e2a70,
          top: _0xf9fb30,
          width: _0x49dfa7,
          height: _0x5258f7,
        } = this.getRealBound(),
        _0x3b5b11 = this.transform["getMatrix"](),
        _0x1f299c = _0x2e2a70 + _0x49dfa7 / 2,
        _0xd57436 = _0xf9fb30 + _0x5258f7 / 2,
        _0x48eae7 = new _0x5ca2e3([
          _0x3b5b11[0],
          _0x3b5b11[1],
          _0x3b5b11[2],
          _0x3b5b11[3],
          _0x1f299c,
          _0xd57436,
        ]),
        _0x24c790 = this.getParent();
      return (
        this.isInGroup &&
        (_0x24c790 == null ? undefined : _0x24c790.classType) ===
          _0x159d3c.GROUP
          ? _0x24c790.ancestorTransform["multiply"](_0x48eae7)
          : _0x48eae7
      )
        .invert()
        .applyPoint(_0x389eab);
    }
    isHit(_0x5b7843) {
      let {
          left: _0x2aa511,
          top: _0x5b6260,
          width: _0x37c815,
          height: _0x17eaa2,
        } = this.getRealBound(),
        _0x4ae370 = _0x2aa511 + _0x37c815 / 2,
        _0x495f94 = _0x5b6260 + _0x17eaa2 / 2,
        _0x37c052 = this.transform["getMatrix"](),
        _0x838dbc = new _0x5ca2e3([
          _0x37c052[0],
          _0x37c052[1],
          _0x37c052[2],
          _0x37c052[3],
          _0x4ae370,
          _0x495f94,
        ]),
        _0x4fa336 = this.getParent(),
        _0xa540b3 = (
          this.isInGroup &&
          (_0x4fa336 == null ? undefined : _0x4fa336.classType) ===
            _0x159d3c.GROUP
            ? _0x4fa336.ancestorTransform["multiply"](_0x838dbc)
            : _0x838dbc
        )
          .invert()
          .applyPoint(_0x5b7843),
        _0x37bacd = _0x37c815 / 2,
        _0x4044f2 = _0x17eaa2 / 2,
        _0x2c6ddd = this._props["shapeModel"];
      return _0x2c6ddd && _0x2c6ddd.isLineShape()
        ? _0x2c6ddd.isHitLine(_0xa540b3.x, _0xa540b3.y, _0x37c815, _0x17eaa2)
        : _0xa540b3.x >= -_0x37bacd - this.strokeWidth / 2 &&
            _0xa540b3.x <= _0x37bacd + this.strokeWidth / 2 &&
            _0xa540b3.y >= -_0x4044f2 - this.strokeWidth / 2 &&
            _0xa540b3.y <= _0x4044f2 + this.strokeWidth / 2;
    }
    dispose() {
      (this._formulaAnimation["dispose"](),
        (this._props["shapeModel"] = null),
        super.dispose());
    }
  },
  br = class extends _0x3a886a {
    constructor(_0x435aad, _0x2906a8) {
      (super(_0x435aad, _0x2906a8),
        J(this, "_shapeId", null),
        J(this, "_adjName", null),
        J(this, "_unitId", null),
        J(this, "_subUnitId", null),
        _0x2906a8 && this.setShapeProps(_0x2906a8));
    }
    getDrawingSearch() {
      return {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._shapeId,
      };
    }
    setShapeProps(_0x23a684) {
      (_0x23a684.shapeId !== undefined && (this._shapeId = _0x23a684.shapeId),
        _0x23a684.adjName !== undefined && (this._adjName = _0x23a684.adjName),
        _0x23a684.unitId !== undefined && (this._unitId = _0x23a684.unitId),
        _0x23a684.subUnitId !== undefined &&
          (this._subUnitId = _0x23a684.subUnitId),
        this.transformByState({
          width: _0x23a684.width,
          height: _0x23a684.height,
        }));
    }
    _draw(_0x12ed20) {
      _0x16d47d.drawWith(_0x12ed20, {
        radius: _0x1a8d3f.adjHandleSize,
        fill: _0x1a8d3f.adjHandleFill,
        stroke: _0x1a8d3f.adjHandleStroke,
        strokeWidth: 1,
        evented: true,
      });
    }
  };
function Y(_0x25b934, _0x455c1d) {
  return function (_0x3677c5, _0x5bad61) {
    _0x455c1d(_0x3677c5, _0x5bad61, _0x25b934);
  };
}
function X(_0xecc468, _0x66e45d, _0x3c9e7a, _0xdd0a6a) {
  var _0x4071f7 = arguments.length,
    _0x58efc4 =
      _0x4071f7 < 3
        ? _0x66e45d
        : _0xdd0a6a === null
          ? (_0xdd0a6a = Object.getOwnPropertyDescriptor(_0x66e45d, _0x3c9e7a))
          : _0xdd0a6a,
    _0x82022b;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x58efc4 = Reflect.decorate(_0xecc468, _0x66e45d, _0x3c9e7a, _0xdd0a6a);
  else {
    for (var _0x192f74 = _0xecc468.length - 1; _0x192f74 >= 0; _0x192f74--)
      (_0x82022b = _0xecc468[_0x192f74]) &&
        (_0x58efc4 =
          (_0x4071f7 < 3
            ? _0x82022b(_0x58efc4)
            : _0x4071f7 > 3
              ? _0x82022b(_0x66e45d, _0x3c9e7a, _0x58efc4)
              : _0x82022b(_0x66e45d, _0x3c9e7a)) || _0x58efc4);
  }
  return (
    _0x4071f7 > 3 &&
      _0x58efc4 &&
      Object.defineProperty(_0x66e45d, _0x3c9e7a, _0x58efc4),
    _0x58efc4
  );
}
let Z = class extends _0x56da22 {
  constructor(
    _0x1e9171,
    _0x3f67d2,
    _0x55aa71,
    _0x21e43d,
    _0x3249e4,
    _0x1ab93d,
  ) {
    (super(),
      (this._drawingManagerService = _0x1e9171),
      (this._sheetsShapeService = _0x3f67d2),
      (this._localeService = _0x55aa71),
      (this._imageIoService = _0x21e43d),
      (this._urlImageService = _0x3249e4),
      (this._shapeFormulaService = _0x1ab93d),
      J(this, "_formulaShapes", new Map()),
      this.disposeWithMe(
        this._shapeFormulaService["presentationChanged$"].subscribe(
          (_0x34646f) => {
            var _0x139a85;
            (_0x139a85 = this._formulaShapes["get"](
              this._formulaKey(
                _0x34646f.unitId,
                _0x34646f.subUnitId,
                _0x34646f.shapeId,
              ),
            )) == null ||
              _0x139a85.forEach((_0x266c24) =>
                _0x266c24.setFormulaPresentation(
                  _0x34646f.presentation,
                  _0x34646f.animationEnabled,
                ),
              );
          },
        ),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x15801e) => {
          _0x15801e.forEach((_0x562adf) => {
            (this._shapeFormulaService["unregister"]({
              unitId: _0x562adf.unitId,
              subUnitId: _0x562adf.subUnitId,
              shapeId: _0x562adf.drawingId,
            }),
              this._formulaShapes["delete"](
                this._formulaKey(
                  _0x562adf.unitId,
                  _0x562adf.subUnitId,
                  _0x562adf.drawingId,
                ),
              ));
          });
        }),
      ));
  }
  renderDrawingShape(_0x4ccb17, _0x4d6031, _0x1ea58a) {
    let {
      transform: _0x10713d,
      drawingType: _0x2a86f8,
      srcRect: _0x5aed35,
      prstGeom: _0x1b62b8,
      groupId: _0x4a237e,
      unitId: _0x1b3ce8,
      subUnitId: _0x4362f6,
      drawingId: _0x763501,
      isMultiTransform: _0x425d87,
      transforms: _0x16a3bb,
      hidden: _0xbc5976,
      selectable: _0x9ee24e,
    } = _0x4ccb17;
    if (
      _0x2a86f8 !== _0x1ca1a8.DRAWING_SHAPE ||
      !this._drawingManagerService["getDrawingVisible"]() ||
      _0x10713d == null
    )
      return;
    let _0x413309 = this._drawingManagerService["getDrawingEditable"](),
      _0x43ade5 = _0x425d87 && _0x16a3bb ? _0x16a3bb : [_0x10713d],
      _0x38ee8b = [];
    for (let _0x4a902c of _0x43ade5) {
      let {
          left: _0x309aa9,
          top: _0x21c6e4,
          width: _0x5356e8,
          height: _0x1e8154,
          angle: _0x8b56e5,
          flipX: _0x59135a,
          flipY: _0x38bd2e,
          skewX: _0x3cf5bc,
          skewY: _0x962110,
        } = _0x4a902c,
        _0xf16832 = _0x43ade5.indexOf(_0x4a902c),
        _0x30e579 = _0x568a43(
          { unitId: _0x1b3ce8, subUnitId: _0x4362f6, drawingId: _0x763501 },
          _0x425d87 ? _0xf16832 : undefined,
        ),
        _0x466701 = _0x4d6031.getObjectIncludeInGroup(_0x30e579);
      if (_0x466701 != null) {
        let _0x3a5d7d = {
          unitId: _0x1b3ce8,
          subUnitId: _0x4362f6,
          shapeId: _0x763501,
        };
        (_0x466701 instanceof yr &&
          this.refreshFormulaPresentation(_0x466701, _0x3a5d7d),
          _0x466701.transformByState({
            left: _0x309aa9,
            top: _0x21c6e4,
            width: _0x5356e8,
            height: _0x1e8154,
            angle: _0x8b56e5,
            flipX: _0x59135a,
            flipY: _0x38bd2e,
            skewX: _0x3cf5bc,
            skewY: _0x962110,
          }));
        continue;
      }
      let _0xd8f492 = this._drawingManagerService["getDrawingOrder"](
          _0x1b3ce8,
          _0x4362f6,
        ),
        _0x2b49e0 = _0xd8f492.indexOf(_0x763501);
      if (
        _0x4d6031.getObjectIncludeInGroup(_0x30e579) ||
        !this._drawingManagerService["getDrawingVisible"]()
      )
        continue;
      let _0x5986c5 = this._sheetsShapeService["getShapeModel"](
        _0x1b3ce8,
        _0x4362f6,
        _0x763501,
      );
      if (!_0x5986c5) continue;
      let _0x5a64e8 = _0x3ae025(_0x5986c5.getShapeType())
          ? {
              ..._0x30e62f,
              rotateEnabled: false,
              resizeEnabled: false,
              borderEnabled: false,
            }
          : _0x30e62f,
        _0x390fa9 = _0x5986c5.getShapeData().formulaBinding,
        _0x32916c = {
          unitId: _0x1b3ce8,
          subUnitId: _0x4362f6,
          shapeId: _0x763501,
        };
      _0x390fa9 && this._shapeFormulaService["register"](_0x32916c, _0x390fa9);
      let _0x5d428c = new yr(_0x30e579, {
        ..._0x4a902c,
        zIndex: _0x2b49e0 === -1 ? _0xd8f492.length - 1 : _0x2b49e0,
        shapeModel: _0x5986c5,
        localeService: this._localeService,
        shapeId: _0x763501,
        unitId: _0x1b3ce8,
        subUnitId: _0x4362f6,
        visible: _0xbc5976 !== true,
        evented: _0x9ee24e !== false,
        formulaPresentation: _0x390fa9
          ? this._shapeFormulaService["getPresentation"](_0x32916c)
          : undefined,
        animateFormulaPresentation:
          (_0x390fa9 == null ? undefined : _0x390fa9.animationEnabled) !==
          false,
        transformerConfig: _0x5a64e8,
      });
      if (_0x390fa9) {
        let _0x154c58 = this._formulaKey(_0x1b3ce8, _0x4362f6, _0x763501),
          _0x383ff0 = this._formulaShapes["get"](_0x154c58) ?? new Set();
        (_0x383ff0.add(_0x5d428c),
          this._formulaShapes["set"](_0x154c58, _0x383ff0));
      }
      (_0x4d6031.addObject(_0x5d428c, _0x51ebe3),
        _0x413309 && _0x4d6031.attachTransformerTo(_0x5d428c),
        _0x4a237e &&
          _0x6b1a05(
            { drawingId: _0x4a237e, unitId: _0x1b3ce8, subUnitId: _0x4362f6 },
            _0x5d428c,
            _0x4d6031,
            this._drawingManagerService,
          ),
        _0x1b62b8 != null && _0x5d428c.setPrstGeom(_0x1b62b8),
        _0x5aed35 != null && _0x5d428c.setSrcRect(_0x5aed35));
      let _0x1797e2 = this._loadShapePictureFill(
        _0x5d428c,
        _0x5986c5.getShapeData(),
      );
      if (_0x1797e2) {
        var _0x13fd64;
        _0x1ea58a == null ||
          (_0x13fd64 = _0x1ea58a.resourceCollector) == null ||
          _0x13fd64.add(_0x1797e2);
      }
      _0x38ee8b.push(_0x5d428c);
    }
    return _0x38ee8b;
  }
  _formulaKey(_0x163f46, _0x11ea00, _0x15a811) {
    return _0x163f46 + "\x00" + _0x11ea00 + "\x00" + _0x15a811;
  }
  refreshFormulaPresentation(_0x3b295b, _0x47ad08) {
    let _0x117ff0 = this._sheetsShapeService["getShapeModel"](
        _0x47ad08.unitId,
        _0x47ad08.subUnitId,
        _0x47ad08.shapeId,
      ),
      _0xfcefed =
        _0x117ff0 == null ? undefined : _0x117ff0.getShapeData().formulaBinding,
      _0x19a077 = this._formulaKey(
        _0x47ad08.unitId,
        _0x47ad08.subUnitId,
        _0x47ad08.shapeId,
      );
    if (_0xfcefed) {
      this._shapeFormulaService["register"](_0x47ad08, _0xfcefed);
      let _0x45a857 = this._formulaShapes["get"](_0x19a077) ?? new Set();
      (_0x45a857.add(_0x3b295b),
        this._formulaShapes["set"](_0x19a077, _0x45a857));
    } else {
      var _0x3a1747;
      (this._shapeFormulaService["unregister"](_0x47ad08),
        (_0x3a1747 = this._formulaShapes["get"](_0x19a077)) == null ||
          _0x3a1747.delete(_0x3b295b));
    }
    _0x3b295b.setFormulaPresentation(
      _0xfcefed
        ? this._shapeFormulaService["getPresentation"](_0x47ad08)
        : undefined,
      (_0xfcefed == null ? undefined : _0xfcefed.animationEnabled) !== false,
    );
  }
  refreshShapeFillImage(_0x55f4e) {
    let _0x16d2ab = _0x55f4e.shapeModel["getShapeData"](),
      _0x1fbeb5 = _0x16d2ab.fill;
    if (
      !_0x1fbeb5 ||
      _0x1fbeb5.fillType !== _0x213ca6.PictureFill ||
      !_0x1fbeb5.fillImageSource
    ) {
      _0x55f4e.setFillImage(undefined);
      return;
    }
    this._loadShapePictureFill(_0x55f4e, _0x16d2ab);
  }
  _loadShapePictureFill(_0x5c3d37, _0x34fd38) {
    let _0x14b3ce = _0x34fd38.fill;
    if (
      !_0x14b3ce ||
      _0x14b3ce.fillType !== _0x213ca6.PictureFill ||
      !_0x14b3ce.fillImageSource
    )
      return;
    let _0x1700e6 = _0x14b3ce.fillImageSource,
      _0x2e1e8e = _0x14b3ce.fillImageSourceType ?? _0x2f3fc4.URL,
      _0x273644 = this._imageIoService["getImageSourceCache"](
        _0x1700e6,
        _0x2e1e8e,
      );
    if (_0x273644) {
      _0x5c3d37.setFillImage(_0x273644);
      return;
    }
    return this._loadAndSetImage(_0x5c3d37, _0x1700e6, _0x2e1e8e);
  }
  async _loadAndSetImage(_0x33e6c4, _0x49a7b0, _0x178d3b) {
    let _0x3eb368;
    try {
      if (_0x178d3b === _0x2f3fc4.UUID)
        _0x3eb368 = await this._imageIoService["getImage"](_0x49a7b0);
      else {
        if (_0x178d3b === _0x2f3fc4.URL)
          try {
            _0x3eb368 = await this._urlImageService["getImage"](_0x49a7b0);
          } catch {
            _0x3eb368 = _0x49a7b0;
          }
        else _0x3eb368 = _0x49a7b0;
      }
    } catch (_0x5050d9) {
      console.error(
        "[ShapeRender] Failed to resolve picture fill source",
        _0x5050d9,
      );
      return;
    }
    await new Promise((_0x279ded) => {
      let _0x420bc4 = new window["Image"]();
      ((_0x420bc4.onload = () => {
        (this._imageIoService["addImageSourceCache"](
          _0x49a7b0,
          _0x178d3b,
          _0x420bc4,
        ),
          _0x33e6c4.setFillImage(_0x420bc4),
          _0x279ded());
      }),
        (_0x420bc4.onerror = () => {
          (console.error(
            "[ShapeRender] Failed to load picture fill image",
            _0x49a7b0,
          ),
            _0x279ded());
        }),
        (_0x420bc4.src = _0x3eb368));
    });
  }
};
Z = X(
  [
    Y(0, _0xa5b289),
    Y(1, _0x344f6e(_0x1e4684)),
    Y(2, _0x344f6e(_0x15ffe9)),
    Y(3, _0x59d119),
    Y(4, _0x3fc746),
    Y(5, _0x344f6e(_0x1fc9c5)),
  ],
  Z,
);
let xr = class extends _0x56da22 {
  constructor(
    _0x4f5212,
    _0x516858,
    _0x4e94e2,
    _0x31a70f,
    _0x4fa786,
    _0x5a4923,
  ) {
    (super(),
      (this._drawingManagerService = _0x4f5212),
      (this._sheetsShapeService = _0x516858),
      (this._renderManagerService = _0x4e94e2),
      (this._sheetDrawingShapeRenderController = _0x31a70f),
      (this._univerInstanceService = _0x4fa786),
      (this._commandService = _0x5a4923),
      J(this, "_activeShapeId", null),
      J(this, "_unitId", null),
      J(this, "_subUnitId", null),
      J(this, "_activeShapeAdjustPointList", undefined),
      J(this, "_shapes", []),
      J(this, "_baseShapeLeft", 0),
      J(this, "_baseShapeTop", 0),
      J(this, "_baseShapeWidth", 0),
      J(this, "_baseShapeHeight", 0),
      J(this, "_isStartAdjusting", false),
      J(this, "_activeAdjustInfo", undefined),
      J(this, "_activeShapeModel", undefined),
      J(this, "_adjHandlerPointerMove", undefined),
      J(this, "_adjHandlerPointerUp", undefined),
      J(this, "_isShouldShowDrawingShapeAdjust", false),
      this._registerDrawingFocusChangeHandler(),
      this._registerDrawingMoveHandler());
  }
  _getShapeAdjustPointListById(_0x3753e4, _0x4b2b57, _0x3624a5) {
    let _0x5648b1 = this._sheetsShapeService["getShapeModel"](
      _0x3753e4,
      _0x4b2b57,
      _0x3624a5,
    );
    if (_0x5648b1) return _0x5648b1.getDrawingPoints();
  }
  clearAdjustControls() {
    this._clearShapeAdjustControls();
  }
  refreshAdjustControls() {
    this._updateShapeAdjustControls(true);
  }
  setShouldShowAdjust(_0x435388) {
    this._isShouldShowDrawingShapeAdjust = _0x435388;
  }
  _getShapeAdjustInfosById(_0x543a81, _0x202793, _0x352c30, _0x4ba898) {
    let _0x19760c = this._sheetsShapeService["getShapeModel"](
      _0x543a81,
      _0x202793,
      _0x352c30,
    );
    if (_0x19760c) return _0x19760c.getAdjustInfoByName(_0x4ba898);
  }
  _createShapeAdjustControls(_0x139df5 = false) {
    if (
      this._unitId === null ||
      this._subUnitId === null ||
      this._activeShapeId === null
    )
      return;
    let _0x2d3ca5 = this._renderManagerService["getRenderUnitById"](
      this._unitId,
    );
    if (!_0x2d3ca5 || !_0x2d3ca5.with(_0x2bd78f).getCurrentSkeleton()) return;
    let { scene: _0x116237 } = _0x2d3ca5,
      _0x5bceea = {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._activeShapeId,
      },
      _0x2e4552 = this._drawingManagerService["getDrawingByParam"](_0x5bceea),
      { transform: _0x39226b } = _0x2e4552;
    if (!_0x39226b || _0x2e4552.drawingType !== _0x1ca1a8.DRAWING_SHAPE) return;
    let {
      left: _0x15eb70,
      top: _0x3d454b,
      width: _0x52a782,
      height: _0x4e44e6,
      flipX: _0x47fe3b,
      flipY: _0x3ccc68,
      angle: _0x234849 = 0,
    } = _0x39226b;
    if (_0x15eb70 === undefined || _0x3d454b === undefined) return;
    if (_0x139df5) {
      let _0xc26a8e = this._sheetsShapeService["getShapeModel"](
        this._unitId,
        this._subUnitId,
        this._activeShapeId,
      );
      (_0xc26a8e == null ||
        _0xc26a8e.updateContext({
          width: _0x52a782 ?? 0,
          height: _0x4e44e6 ?? 0,
        }),
        (this._activeShapeAdjustPointList =
          _0xc26a8e == null ? undefined : _0xc26a8e.getDrawingPoints()));
    }
    let _0x7ad930 = this._activeShapeAdjustPointList;
    for (let _0x2bc9f3 = 0; _0x2bc9f3 < _0x7ad930.length; _0x2bc9f3++) {
      let _0x55a9b6 = _0x7ad930[_0x2bc9f3],
        _0x403645 = _0x55a9b6.x,
        _0x3e2c00 = _0x55a9b6.y;
      if (
        (_0x47fe3b && (_0x403645 = (_0x52a782 || 0) - _0x403645),
        _0x3ccc68 && (_0x3e2c00 = (_0x4e44e6 || 0) - _0x3e2c00),
        _0x234849 !== 0)
      ) {
        let _0x49fbb6 = (_0x52a782 || 0) / 2,
          _0x1e46b7 = (_0x4e44e6 || 0) / 2,
          _0x1ee3fb = (_0x234849 * Math.PI) / 180,
          _0x57036b = Math.cos(_0x1ee3fb),
          _0x4cb2ef = Math.sin(_0x1ee3fb),
          _0x4a6097 = _0x403645 - _0x49fbb6,
          _0x3d5eae = _0x3e2c00 - _0x1e46b7;
        ((_0x403645 =
          _0x49fbb6 + (_0x4a6097 * _0x57036b - _0x3d5eae * _0x4cb2ef)),
          (_0x3e2c00 =
            _0x1e46b7 + (_0x4a6097 * _0x4cb2ef + _0x3d5eae * _0x57036b)));
      }
      let _0x5ac38e = {
        x: _0x403645,
        y: _0x3e2c00,
        adjName: _0x55a9b6.adjName,
      };
      this._addShapeAdjustControl(
        _0x116237,
        _0x5ac38e,
        _0x5ac38e.adjName,
        _0x15eb70,
        _0x3d454b,
        this._unitId,
        this._subUnitId,
      );
    }
  }
  _updateShapeAdjustControls(_0x3fb97f = false) {
    _0x3fb97f &&
      (this._clearShapeAdjustControls(),
      this._createShapeAdjustControls(_0x3fb97f));
  }
  _addShapeAdjustControl(
    _0x40bfd9,
    _0x4b6959,
    _0x2cf5d9,
    _0x275aea,
    _0x8c562a,
    _0x35df1f,
    _0x402e4b,
  ) {
    if (!this._activeShapeId) return;
    let _0x456e46 = _0x40bfd9.getObjectIncludeInGroup(
      "shape-adjust-point-" + this._activeShapeId + "-" + _0x2cf5d9,
    );
    if (_0x456e46) {
      _0x456e46.transformByState({
        left: _0x4b6959.x + _0x275aea - _0x1a8d3f.adjHandleSize,
        top: _0x4b6959.y + _0x8c562a - _0x1a8d3f.adjHandleSize,
      });
      return;
    }
    let _0x5c7964 = {
        left: _0x4b6959.x + _0x275aea - _0x1a8d3f.adjHandleSize,
        top: _0x4b6959.y + _0x8c562a - _0x1a8d3f.adjHandleSize,
        adjName: _0x2cf5d9,
        shapeId: this._activeShapeId,
        unitId: _0x35df1f,
        subUnitId: _0x402e4b,
        width: _0x1a8d3f.adjHandleSize + 8,
        height: _0x1a8d3f.adjHandleSize + 8,
        zIndex: _0x51ebe3 + 1,
        evented: true,
      },
      _0xeeacd0 = new br(
        "shape-adjust-point-" + this._activeShapeId + "-" + _0x2cf5d9,
        _0x5c7964,
      );
    (this._shapes["push"](_0xeeacd0),
      this._attachAdjustEvent(_0xeeacd0, _0x40bfd9, _0x2cf5d9),
      _0x40bfd9.addObject(_0xeeacd0, _0x51ebe3 + 1));
  }
  _clearShapeAdjustControls() {
    this._shapes["length"] !== 0 &&
      (this._shapes["forEach"]((_0x4690a7) => {
        _0x4690a7.dispose();
      }),
      (this._shapes = []));
  }
  _updateAdjustControlPositions() {
    this._createShapeAdjustControls();
  }
  _getScrollInfo(_0x5b51ba, _0x4fc9c2) {
    var _0x25f73b;
    let _0x26940a = { x: 0, y: 0 };
    if (!_0x5b51ba || !_0x4fc9c2) return _0x26940a;
    let _0x45497b = this._renderManagerService["getRenderUnitById"](_0x5b51ba);
    if (!_0x45497b || !_0x45497b.with(_0x2bd78f).getSkeleton(_0x4fc9c2))
      return _0x26940a;
    let _0x2b4037 = _0x45497b.with(_0x54a8d4),
      _0x1e9910 =
        _0x2b4037 == null ? undefined : _0x2b4037.getCurrentScrollState();
    if (!_0x1e9910) return _0x26940a;
    let _0x2cff2a =
      (_0x25f73b = this._univerInstanceService["getUnit"](_0x5b51ba)) == null
        ? undefined
        : _0x25f73b.getSheetBySheetId(_0x4fc9c2);
    if (!_0x2cff2a) return _0x26940a;
    let _0x4e667a = _0xeb9ad5(
      _0x1e9910.sheetViewStartRow,
      _0x1e9910.sheetViewStartColumn,
      _0x45497b.scene,
      _0x2cff2a,
    );
    return _0x4e667a
      ? { x: _0x4e667a.viewportScrollX, y: _0x4e667a.viewportScrollY }
      : _0x26940a;
  }
  _getZoomRatio(_0x569a0a, _0x2c9c14) {
    var _0x37ca68;
    let _0x32085d =
      (_0x37ca68 = this._univerInstanceService["getUnit"](_0x569a0a)) == null
        ? undefined
        : _0x37ca68.getSheetBySheetId(_0x2c9c14);
    return (_0x32085d == null ? undefined : _0x32085d.getZoomRatio()) ?? 1;
  }
  _attachAdjustEvent(_0x42c66a, _0x44f41e, _0x4f4b3b) {
    this.disposeWithMe(
      _0xa4b14e(
        _0x42c66a.onPointerDown$["subscribeEvent"]((_0x442702, _0x5bbfb6) => {
          var _0x47cf0e, _0x405c78, _0x25c3c7, _0x2f7f5c;
          let _0x2e5e24 = _0x42c66a.getDrawingSearch();
          ((this._activeAdjustInfo = this._getShapeAdjustInfosById(
            _0x2e5e24.unitId,
            _0x2e5e24.subUnitId,
            _0x2e5e24.drawingId,
            _0x4f4b3b,
          )),
            (this._activeShapeModel = this._sheetsShapeService["getShapeModel"](
              _0x2e5e24.unitId,
              _0x2e5e24.subUnitId,
              _0x2e5e24.drawingId,
            )));
          let _0x4b9dab = this._drawingManagerService["getDrawingByParam"]({
              unitId: this._unitId,
              subUnitId: this._subUnitId,
              drawingId: this._activeShapeId,
            }),
            { transform: _0x1596c3 } = _0x4b9dab;
          if (_0x1596c3) {
            let {
              left: _0x543227,
              top: _0x44c84b,
              width: _0x43df0,
              height: _0x5a3314,
            } = _0x1596c3;
            ((this._baseShapeLeft = _0x543227 || 0),
              (this._baseShapeTop = _0x44c84b || 0),
              (this._baseShapeWidth = _0x43df0 || 0),
              (this._baseShapeHeight = _0x5a3314 || 0));
          }
          let _0x2d15f5 = !!(
              (_0x47cf0e = _0x4b9dab.transform) != null && _0x47cf0e.flipX
            ),
            _0x4b183c = !!(
              (_0x405c78 = _0x4b9dab.transform) != null && _0x405c78.flipY
            ),
            _0x469606 =
              ((_0x25c3c7 = _0x4b9dab.transform) == null
                ? undefined
                : _0x25c3c7.angle) || 0;
          ((this._isStartAdjusting = true), _0x44f41e.disableObjectsEvent());
          let _0x3a8cc1 = {
            ...(((_0x2f7f5c = this._activeAdjustInfo) == null
              ? undefined
              : _0x2f7f5c.currentAdjustValues) ?? {}),
          };
          ((this._adjHandlerPointerMove = _0x44f41e.onPointerMove$[
            "subscribeEvent"
          ]((_0x46642a, _0x16afa3) => {
            if (!this._isStartAdjusting) return;
            let { offsetX: _0x2ad671, offsetY: _0x298e82 } = _0x46642a,
              _0x1f9303 = this._activeAdjustInfo;
            if (this._activeShapeModel && _0x1f9303) {
              (_0x44f41e.disableObjectsEvent(),
                _0x44f41e.setCursor(_0x1160cb.CROSSHAIR));
              let _0x2c67f9 = {
                  left: 0,
                  top: 0,
                  width: this._baseShapeWidth,
                  height: this._baseShapeHeight,
                },
                _0xee8612 = this._getScrollInfo(this._unitId, this._subUnitId),
                _0x4a7ccd = this._getZoomRatio(this._unitId, this._subUnitId),
                _0x1f4c18 =
                  _0x2ad671 / _0x4a7ccd + _0xee8612.x - this._baseShapeLeft,
                _0x5be3af =
                  _0x298e82 / _0x4a7ccd + _0xee8612.y - this._baseShapeTop;
              if (_0x469606 !== 0) {
                let _0x511d65 = this._baseShapeWidth / 2,
                  _0x1b4dc8 = this._baseShapeHeight / 2,
                  _0x334548 = (_0x469606 * Math.PI) / 180,
                  _0x37f375 = Math.cos(_0x334548),
                  _0x4c5881 = Math.sin(_0x334548),
                  _0x248ee7 = _0x1f4c18 - _0x511d65,
                  _0x57f010 = _0x5be3af - _0x1b4dc8;
                ((_0x1f4c18 =
                  _0x511d65 + (_0x248ee7 * _0x37f375 + _0x57f010 * _0x4c5881)),
                  (_0x5be3af =
                    _0x1b4dc8 +
                    (-_0x248ee7 * _0x4c5881 + _0x57f010 * _0x37f375)));
              }
              (_0x2d15f5 && (_0x1f4c18 = this._baseShapeWidth - _0x1f4c18),
                _0x4b183c && (_0x5be3af = this._baseShapeHeight - _0x5be3af));
              let _0x43bfcb = { x: _0x1f4c18, y: _0x5be3af },
                _0xaf7edf = this._activeShapeModel["calcAdjValues"](
                  _0x2c67f9,
                  _0x43bfcb,
                  _0x1f9303,
                  _0x2d15f5,
                  _0x4b183c,
                );
              if (Object.keys(_0xaf7edf).length === 0) return;
              for (let [_0x2f9bee, _0x230b5a] of Object.entries(_0xaf7edf))
                this._activeShapeModel["setAdjustValueByName"](
                  _0x2f9bee,
                  _0x230b5a,
                );
              this._activeShapeModel["updateContext"]({
                width: this._baseShapeWidth,
                height: this._baseShapeHeight,
              });
              let _0x27bffc = this._drawingManagerService["getDrawingByParam"]({
                unitId: _0x2e5e24.unitId,
                subUnitId: _0x2e5e24.subUnitId,
                drawingId: _0x2e5e24.drawingId,
              });
              _0x27bffc &&
                (this._sheetDrawingShapeRenderController["renderDrawingShape"](
                  _0x27bffc,
                  _0x44f41e,
                ),
                (this._activeShapeAdjustPointList =
                  this._getShapeAdjustPointListById(
                    _0x2e5e24.unitId,
                    _0x2e5e24.subUnitId,
                    _0x2e5e24.drawingId,
                  )),
                this._updateAdjustControlPositions());
            }
            _0x16afa3.stopPropagation();
          })),
            (this._adjHandlerPointerUp = _0x44f41e.onPointerUp$[
              "subscribeEvent"
            ]((_0x47a5a1, _0x5d2d89) => {
              (this._adjHandlerPointerMove["unsubscribe"](),
                this._adjHandlerPointerUp["unsubscribe"](),
                _0x44f41e.resetCursor());
              let _0xf635b = this._activeAdjustInfo;
              if (_0xf635b) {
                let _0x2a44cf = _0x2e5e24.unitId,
                  _0x3d73b0 = _0x2e5e24.subUnitId,
                  _0x2d2d75 = _0x2e5e24.drawingId,
                  _0x506de8 = {};
                for (let _0x29e55c of Object.keys(
                  _0xf635b.currentAdjustValues,
                )) {
                  var _0x1e1d99;
                  let _0x5817e1 =
                    (_0x1e1d99 = this._activeShapeModel) == null
                      ? undefined
                      : _0x1e1d99.getAdjustValueByName(_0x29e55c);
                  _0x5817e1 !== undefined && (_0x506de8[_0x29e55c] = _0x5817e1);
                }
                Object.keys(_0x506de8).length > 0 &&
                  pr(
                    this._commandService,
                    _0x2a44cf,
                    _0x3d73b0,
                    _0x2d2d75,
                    { oldShapeData: { adjustValues: _0x3a8cc1 } },
                    { adjustValues: _0x506de8 },
                  );
              }
              ((this._activeAdjustInfo = undefined),
                (this._activeShapeModel = undefined),
                (this._isStartAdjusting = false),
                _0x5d2d89.stopPropagation(),
                _0x44f41e.enableObjectsEvent());
            })),
            _0x5bbfb6.stopPropagation());
        }),
      ),
    );
  }
  _registerDrawingMoveHandler() {
    let _0x343b9e = this._univerInstanceService["getCurrentTypeOfUnit$"](
      _0x44a53b.UNIVER_SHEET,
    );
    this.disposeWithMe(
      _0x343b9e
        .pipe(
          _0x373e57((_0x428e04) =>
            _0x428e04
              ? _0x428e04.activeSheet$["pipe"](
                  _0x373e57((_0x5e172a) => {
                    if (!_0x5e172a) return _0xf8c1f7;
                    let _0x4f20eb = _0x428e04.getUnitId(),
                      _0x7a65fb =
                        this._renderManagerService["getRenderUnitById"](
                          _0x4f20eb,
                        ),
                      _0x7d8703 =
                        _0x7a65fb == null ? undefined : _0x7a65fb.scene;
                    return _0x7d8703 ? _0x54ba04(_0x7d8703) : _0xf8c1f7;
                  }),
                )
              : _0xf8c1f7,
          ),
        )
        .subscribe((_0xe87614) => {
          let _0x1407ef = _0xe87614.getTransformerByCreate();
          (this.disposeWithMe(
            _0xe87614.onPointerMove$["subscribeEvent"](() => {
              this._isShouldShowDrawingShapeAdjust;
            }),
          ),
            this.disposeWithMe(
              _0x1407ef.changeStart$["subscribe"]((_0x49d777) => {
                let { objects: _0x8b540c } = _0x49d777;
                (this._createShapeAdjustControls(),
                  _0x8b540c !== null &&
                    _0x8b540c.size === 1 &&
                    _0x8b540c.values().next().value instanceof yr &&
                    this.setShouldShowAdjust(true));
              }),
            ),
            this.disposeWithMe(
              _0x1407ef.changing$["subscribe"](() => {
                this._isShouldShowDrawingShapeAdjust &&
                  this._clearShapeAdjustControls();
              }),
            ),
            this.disposeWithMe(
              _0xe87614.onPointerUp$["subscribeEvent"](() => {
                this._isShouldShowDrawingShapeAdjust &&
                  (this.setShouldShowAdjust(false),
                  this._createShapeAdjustControls());
              }),
            ),
            this.disposeWithMe(
              _0x1407ef.changeEnd$["subscribe"](() => {
                this._unitId &&
                  this._subUnitId &&
                  this._activeShapeId &&
                  this._drawingManagerService["getDrawingByParam"]({
                    unitId: this._unitId,
                    subUnitId: this._subUnitId,
                    drawingId: this._activeShapeId,
                  }) &&
                  ((this._activeShapeAdjustPointList =
                    this._getShapeAdjustPointListById(
                      this._unitId,
                      this._subUnitId,
                      this._activeShapeId,
                    )),
                  this._updateAdjustControlPositions());
              }),
            ));
        }),
    );
  }
  _registerDrawingFocusChangeHandler() {
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x5d7b99) => {
        if (_0x5d7b99.id !== _0x12ceb1.id) return;
        let {
          unitId: _0x48a308,
          subUnitId: _0x394dfd,
          shapeId: _0x14be6d,
        } = _0x5d7b99.params;
        _0x48a308 === this._unitId &&
          _0x394dfd === this._subUnitId &&
          _0x14be6d === this._activeShapeId &&
          this.refreshAdjustControls();
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x27e4f0) => {
          if (_0x27e4f0.length === 1) {
            let _0x332cdd = _0x27e4f0[0];
            if (
              _0x332cdd.drawingType === _0x1ca1a8.DRAWING_SHAPE &&
              this._univerInstanceService["getUnitType"](_0x332cdd.unitId) ===
                _0x44a53b.UNIVER_SHEET
            ) {
              this._activeShapeId = _0x332cdd.drawingId;
              let { unitId: _0x20bdd4, subUnitId: _0x4131c7 } = _0x332cdd;
              ((this._activeShapeAdjustPointList =
                this._getShapeAdjustPointListById(
                  _0x20bdd4,
                  _0x4131c7,
                  this._activeShapeId,
                )),
                (this._unitId = _0x20bdd4),
                (this._subUnitId = _0x4131c7),
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
        this._drawingManagerService["update$"].subscribe((_0x3b80cf) => {
          if (_0x3b80cf.length === 1) {
            var _0x2d3e0f;
            let _0x43bef3 = _0x3b80cf[0];
            ((_0x2d3e0f =
              this._drawingManagerService["getDrawingByParam"](_0x43bef3)) ==
            null
              ? undefined
              : _0x2d3e0f.drawingType) === _0x1ca1a8.DRAWING_SHAPE &&
              this._updateShapeAdjustControls(true);
          }
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x266401) => {
          for (let _0x55e20d of _0x266401)
            this._activeShapeId === _0x55e20d.drawingId &&
              ((this._activeShapeId = null),
              (this._activeShapeAdjustPointList = undefined),
              (this._unitId = null),
              (this._subUnitId = null),
              this._clearShapeAdjustControls());
        }),
      ));
  }
};
xr = X(
  [
    Y(0, _0xa5b289),
    Y(1, _0x344f6e(_0x1e4684)),
    Y(2, _0x344f6e(_0x191ca0)),
    Y(3, _0x344f6e(Z)),
    Y(4, _0x36fe2b),
    Y(5, _0x454da3),
  ],
  xr,
);
const Sr = {
    id: "drawing.operation.set-drawing-active",
    type: _0x185165.OPERATION,
    handler: (_0x267f78, _0x1bb8a3) => {
      let _0x201a70 = _0x267f78.get(_0xa5b289),
        _0x5cd534 = _0x267f78.get(_0x191ca0),
        _0xa2c539 = _0x267f78.get(xr);
      if (_0x1bb8a3 == null) return true;
      if (_0x1bb8a3.length > 0) {
        var _0x1f1de1;
        let _0x284a44 =
          (_0x1f1de1 = _0x5cd534.getRenderUnitById(_0x1bb8a3[0].unitId)) == null
            ? undefined
            : _0x1f1de1.scene;
        if (_0x284a44) {
          let {
              unitId: _0x4f574d,
              subUnitId: _0x33ebcc,
              drawingId: _0x2c7db7,
            } = _0x1bb8a3[0],
            _0x58ad50 = _0x568a43(
              { unitId: _0x4f574d, subUnitId: _0x33ebcc, drawingId: _0x2c7db7 },
              undefined,
            ),
            _0x30a77d = _0x284a44.getObjectIncludeInGroup(_0x58ad50);
          if (_0x30a77d) {
            var _0x54c81a;
            (_0x54c81a = _0x5cd534.getRenderUnitById(_0x1bb8a3[0].unitId)) ==
              null ||
              (_0x54c81a = _0x54c81a.scene["getTransformer"]()) == null ||
              _0x54c81a.activeAnObject(_0x30a77d);
          }
        }
        (_0x201a70.focusDrawing(_0x1bb8a3),
          _0xa2c539.setShouldShowAdjust(false));
      }
      return true;
    },
  },
  Cr = {
    type: _0x185165.COMMAND,
    id: "sheet.command.menu-insert-shape",
    handler: async (_0x56a131, _0x5016b2) => {
      let _0x3b4f4d = _0x55b6c8(_0x56a131.get(_0x36fe2b));
      if (!_0x3b4f4d) return false;
      let _0x19e1b1 = _0x56a131.get(_0xee7292).getCurrentLastSelection();
      if (!_0x19e1b1) return false;
      let _0x2091c9 = _0x56a131.get(_0x454da3),
        { unitId: _0x446913, subUnitId: _0x2cdb86 } = _0x3b4f4d,
        { value: _0xeeffcc, enhanceParams: _0x389514 } = _0x5016b2,
        { range: _0x1efeac } = _0x19e1b1,
        _0x1d5571 = {
          unitId: _0x446913,
          subUnitId: _0x2cdb86,
          shapeType: _0xeeffcc,
          range: _0x1efeac,
          shapeId: _0x11b425(),
        };
      if (_0x389514) {
        let _0x440664 = _0x3ae025(_0xeeffcc),
          _0x32e858 = _0xeeffcc === _0xcf4f0c.Rect;
        (_0x440664 &&
          (_0x389514.startArrow || _0x389514.endArrow) &&
          (_0x1d5571.shapeData = {
            ln: {
              startArrow: _0x389514.startArrow
                ? { type: _0xb193cf.Arrow, size: _0x458be9.Medium }
                : undefined,
              endArrow: _0x389514.endArrow
                ? { type: _0xb193cf.Arrow, size: _0x458be9.Large }
                : undefined,
            },
          }),
          _0x32e858 &&
            (_0x389514.horizontal || _0x389514.vertical) &&
            (_0x1d5571.shapeData = _0xb5a6f7({
              fill: { fillType: _0x213ca6.SolidFill, color: "#FFFFFF" },
              isHorizontal: !!_0x389514.horizontal,
              stroke: {
                lineStrokeType: _0x4c02b6.SolidLine,
                width: 1,
                color: "#bcbcbc",
              },
            })));
      }
      let _0x2ac6e6 = _0x2091c9.syncExecuteCommand(_0x149e5a.id, _0x1d5571);
      return (
        setTimeout(() => {
          _0x2091c9.executeCommand(Sr.id, [
            {
              unitId: _0x446913,
              subUnitId: _0x2cdb86,
              drawingId: _0x1d5571.shapeId,
            },
          ]);
        }, 200),
        _0x2ac6e6
      );
    },
  },
  wr = "sheet.shape.edit.panel",
  Tr = "sheet.shape.object-list.panel",
  Er = "sheet.shape.floating-toolbar",
  Dr = "sheets-shape-ui.ribbon.shape-format",
  Or = _0x156a91("SHAPE_TEXT"),
  kr = "sheet.shape.text.float-menu",
  Ar = {
    id: "sheet.operation.open-shape-object-list-panel",
    type: _0x185165.COMMAND,
    handler: (_0x353c38, _0x250561) => {
      let _0x23e995 = _0x353c38.get(_0x408575),
        _0x151685 = _0x353c38.get(_0x15ffe9),
        _0x707e39 = _0x353c38.get(_0x36fe2b),
        _0x51c1f6 = _0x353c38.get(_0x454da3);
      return _0x55b6c8(_0x707e39)
        ? (_0x250561 == null ? undefined : _0x250561.value) === "close"
          ? (_0x23e995.close(Tr), true)
          : (_0x23e995.open({
              id: Tr,
              header: {
                title: _0x151685.t("sheets-shape-ui.objectListPanel.title"),
              },
              children: { label: Tr },
              onClose: () => {
                _0x51c1f6.syncExecuteCommand(_0x635955.id, []);
              },
              width: 360,
            }),
            true)
        : false;
    },
  },
  jr = {
    type: _0x185165.OPERATION,
    id: "sheet.operation.open-sheet-shape-format-panel",
    handler() {
      return true;
    },
  };
function Mr(_0x16ec07) {
  let _0x397958 = _0x16ec07.get(_0xa5b289).getFocusDrawings(),
    _0x4199a3 = _0x397958.length === 1 ? _0x397958[0] : null;
  if (!_0x4199a3 || _0x4199a3.drawingType !== _0x1ca1a8.DRAWING_SHAPE)
    return null;
  let _0x2bcc98 = _0x16ec07.get(_0x1e4684),
    _0x5e90b4 = _0x2bcc98.getShapeTypeById(
      _0x4199a3.unitId,
      _0x4199a3.subUnitId,
      _0x4199a3.drawingId,
    ),
    _0x82ca39 = _0x2bcc98.getShapeDataById(
      _0x4199a3.unitId,
      _0x4199a3.subUnitId,
      _0x4199a3.drawingId,
    );
  return _0x5e90b4 === undefined || !_0x82ca39
    ? null
    : { drawing: _0x4199a3, shapeData: _0x82ca39, shapeType: _0x5e90b4 };
}
const Nr = {
    id: "sheet.operation.apply-shape-quick-style",
    type: _0x185165.OPERATION,
    handler: (_0x16502f, _0x4f2af4) => {
      let _0x389482 = Mr(_0x16502f),
        _0x1e4d03 = _0x6f89f1(
          (_0x4f2af4 == null ? undefined : _0x4f2af4.presetId) ??
            (_0x4f2af4 == null ? undefined : _0x4f2af4.value) ??
            "",
        );
      if (
        !_0x389482 ||
        !_0x1e4d03 ||
        _0x1e4d03.type !== _0x9a491d(_0x389482.shapeData)
      )
        return false;
      let _0x28833d = _0xb0264c(_0x389482.shapeData, _0x1e4d03);
      if (!_0x28833d) return false;
      let { drawing: _0x12dab6 } = _0x389482;
      return _0x16502f
        .get(_0x454da3)
        .executeCommand(fr.id, {
          unitId: _0x12dab6.unitId,
          subUnitId: _0x12dab6.subUnitId,
          shapeId: _0x12dab6.drawingId,
          shapeData: _0x28833d,
          oldShapeJSON: { oldShapeData: _0x389482.shapeData },
        });
    },
  },
  Pr = {
    id: "sheet.operation.update-shape-type",
    type: _0x185165.OPERATION,
    handler: (_0x3f1a81, _0x5358bd) => {
      let _0x315813 = Mr(_0x3f1a81),
        _0x2db10a =
          (_0x5358bd == null ? undefined : _0x5358bd.shapeType) ??
          (_0x5358bd == null ? undefined : _0x5358bd.value);
      if (
        !_0x315813 ||
        !_0x2db10a ||
        _0x3ae025(_0x315813.shapeType) ||
        _0x3ae025(_0x2db10a)
      )
        return false;
      let _0x4d351a = _0x43845f(_0x315813.shapeData, _0x2db10a);
      if (!_0x4d351a) return false;
      let { drawing: _0x6faa91 } = _0x315813;
      return _0x3f1a81
        .get(_0x454da3)
        .executeCommand(fr.id, {
          unitId: _0x6faa91.unitId,
          subUnitId: _0x6faa91.subUnitId,
          shapeId: _0x6faa91.drawingId,
          shapeType: _0x2db10a,
          shapeData: _0x4d351a,
          replaceShapeData: true,
          oldShapeJSON: {
            oldShapeType: _0x315813.shapeType,
            oldShapeData: _0x315813.shapeData,
          },
        });
    },
  };
let Fr = class extends _0x56da22 {
  constructor(_0x5bbe6e, _0x541f00) {
    (super(),
      (this._clipService = _0x5bbe6e),
      (this._drawingManagerService = _0x541f00),
      this._registerImageShapeClipDelegate(),
      this._clipService["setCanUseShapeClip"](true),
      this.disposeWithMe({
        dispose: () => this._clipService["setCanUseShapeClip"](false),
      }));
  }
  _registerImageShapeClipDelegate() {
    let _0x32edf9 = this._clipService,
      _0x1cb739 = new Map(),
      _0x1a552b = _0x32edf9.registerClipDelegate(
        (_0x280d44, _0x2fa1fd, _0x28d154, _0x86e2d6, _0x1523c8) => {
          let _0x3a50a3 = _0x2fa1fd;
          if (_0x3a50a3 === _0xcf4f0c.None || _0x2fa1fd === "custom")
            return false;
          try {
            let _0x370641 = _0x1cb739.get(_0x2fa1fd);
            return (
              _0x370641 ||
                ((_0x370641 = new _0x58de54(_0x3a50a3, "clip-" + _0x2fa1fd)),
                _0x1cb739.set(_0x2fa1fd, _0x370641)),
              _0x370641.clearAdjustValue(),
              _0x1523c8 &&
                Object.keys(_0x1523c8).length > 0 &&
                _0x370641.setShapeData({ adjustValues: _0x1523c8 }, true),
              _0x370641.updateContext({ width: _0x28d154, height: _0x86e2d6 }),
              _0x370641.buildClipPath(_0x280d44, {
                left: 0,
                top: 0,
                width: _0x28d154,
                height: _0x86e2d6,
              })
            );
          } catch {
            return false;
          }
        },
      );
    (this.disposeWithMe(_0x1a552b),
      this.disposeWithMe({ dispose: () => _0x1cb739.clear() }));
  }
  clipByShape(_0x490c89, _0x3bc398, _0x2ee094, _0x574e63, _0x5103b2) {
    let _0x5379e5 = this._drawingManagerService["getDrawingData"](
      _0x490c89,
      _0x3bc398,
    );
    if (!_0x5379e5[_0x2ee094]) return;
    let _0x151a24 = {
      ..._0x5379e5[_0x2ee094],
      prstGeom: _0x574e63,
      adjustValues: _0x5103b2,
    };
    this._drawingManagerService["featurePluginUpdateNotification"]([_0x151a24]);
  }
};
Fr = X([Y(0, _0x344f6e(_0x548a6a)), Y(1, _0x344f6e(_0xa5b289))], Fr);
const Ir = "sheet.shape.picker.component",
  Lr = "sheet.image-clip.shape-picker.component";
function Rr({ onShapeClick: _0x3a790d, excludeGroups: _0x407280 }) {
  return _0x346498(_0x24ed4e, {
    excludeGroups: _0x407280,
    onShapeClick: _0x3a790d,
    scrollContainer: "parent",
  });
}
function zr() {
  let _0x3d8ca4 = _0x2c16c5(_0xa5b289),
    _0xb88b46 = _0x2c16c5(Fr);
  return _0x346498(_0x183e4b, {
    buttonLabel: "sheets-shape-ui.imagePanel.crop.shape",
    excludeGroups: [_0x45f823.Line],
    onShapeClick: (_0x5ba9d6) => {
      let _0xa23335 = _0x3d8ca4
        .getFocusDrawings()
        .find((_0xa5e39e) => _0xa5e39e.drawingType === _0x1ca1a8.DRAWING_IMAGE);
      if (!_0xa23335) return;
      let {
        unitId: _0x5a7163,
        subUnitId: _0x367653,
        drawingId: _0x4e50c7,
      } = _0xa23335;
      _0xb88b46.clipByShape(_0x5a7163, _0x367653, _0x4e50c7, _0x5ba9d6.type);
    },
  });
}
function Br() {
  let _0x1cccd1 = _0x2c16c5(_0x553d6e),
    _0x3ad416 = _0x2c16c5(_0xa5b289),
    _0x522fea = _0x2c16c5(_0x36fe2b),
    _0x31fc83 = _0x3ad416.getFocusDrawings()[0],
    _0x44cbdb = _0x31fc83 ? _0x522fea.getUnitType(_0x31fc83.unitId) : undefined,
    _0x9d9b4d =
      _0x44cbdb === _0x44a53b.UNIVER_DOC
        ? "doc.image-clip.shape-picker.component"
        : _0x44cbdb === _0x44a53b.UNIVER_SHEET
          ? Lr
          : undefined,
    _0x1002e1 = _0x9d9b4d ? _0x1cccd1.get(_0x9d9b4d) : undefined;
  return _0x1002e1 ? _0x346498(_0x1002e1, {}) : null;
}
function Vr() {
  let _0x2368f9 = _0x2c16c5(_0x454da3);
  return _0x346498(Rr, {
    onShapeClick: (_0x27b466) => {
      _0x2368f9.executeCommand(Cr.id, {
        value: _0x27b466.type,
        enhanceParams: {
          endArrow: _0x27b466.endArrow,
          startArrow: _0x27b466.startArrow,
          horizontal: _0x27b466.horizontal,
          vertical: _0x27b466.vertical,
        },
      });
    },
  });
}
function Hr(_0x1331de) {
  let _0x2e2a65 = _0x1331de.get(_0x36fe2b);
  return {
    id: Cr.id,
    type: _0x3ab343.SELECTOR,
    selections: [
      {
        label: {
          name: Ir,
          hoverable: false,
          selectable: false,
          props: { id: Cr.id },
        },
      },
    ],
    icon: "ShapeIcon",
    tooltip: "sheets-shape-ui.insertShape",
    activated$: _0x3ce853(
      _0x2e2a65,
      false,
      () =>
        new _0x4e364a((_0x5ac724) => {
          _0x5ac724.next(false);
        }),
    ),
    hidden$: _0x4da172(_0x1331de, _0x44a53b.UNIVER_SHEET),
    disabled$: _0x3f3f55(_0x1331de),
  };
}
function Ur(_0x1a5958) {
  let _0x3dcf6a = _0x1a5958.get(_0x36fe2b);
  return {
    id: Ar.id,
    type: _0x3ab343.BUTTON,
    icon: "ObjectLayersIcon",
    title: "sheets-shape-ui.objectListPanel.open",
    tooltip: "sheets-shape-ui.objectListPanel.open",
    activated$: _0x3ce853(
      _0x3dcf6a,
      false,
      () =>
        new _0x4e364a((_0x8ab204) => {
          _0x8ab204.next(false);
        }),
    ),
    hidden$: _0x4da172(_0x1a5958, _0x44a53b.UNIVER_SHEET),
    disabled$: _0x3f3f55(_0x1a5958),
  };
}
const Wr = "sheet.menu.shape.flip-horizontal",
  Gr = "sheet.menu.shape.flip-vertical";
function Kr(_0x1f6a2) {
  let _0x6b1786 = _0x1f6a2.get(_0xa5b289).getFocusDrawings();
  return _0x6b1786.length === 1 &&
    _0x6b1786[0].drawingType === _0x1ca1a8.DRAWING_SHAPE
    ? _0x6b1786[0]
    : null;
}
function qr(_0x1cb6b1) {
  let _0x502c47 = _0x1cb6b1.get(_0xa5b289);
  return _0x502c47.focus$["pipe"](
    _0x42e934(_0x502c47.getFocusDrawings()),
    _0xa2db5f(
      (_0x3f971e) =>
        _0x3f971e.length !== 1 ||
        _0x3f971e[0].drawingType !== _0x1ca1a8.DRAWING_SHAPE,
    ),
  );
}
function Jr(_0x3c8d8a) {
  return {
    id: Wr,
    commandId: _0x35583a.id,
    type: _0x3ab343.BUTTON,
    title: "sheets-shape-ui.flipHorizontal",
    tooltip: "sheets-shape-ui.flipHorizontal",
    icon: "FlipHorizontalIcon",
    hidden$: qr(_0x3c8d8a),
    params: () => {
      let _0x3bead9 = Kr(_0x3c8d8a);
      return _0x3bead9
        ? {
            unitId: _0x3bead9.unitId,
            subUnitId: _0x3bead9.subUnitId,
            shapeId: _0x3bead9.drawingId,
            flipH: true,
          }
        : undefined;
    },
  };
}
function Yr(_0x321c29) {
  return {
    id: Gr,
    commandId: _0x35583a.id,
    type: _0x3ab343.BUTTON,
    title: "sheets-shape-ui.flipVertical",
    tooltip: "sheets-shape-ui.flipVertical",
    icon: "FlipVerticalIcon",
    hidden$: qr(_0x321c29),
    params: () => {
      let _0x58163a = Kr(_0x321c29);
      return _0x58163a
        ? {
            unitId: _0x58163a.unitId,
            subUnitId: _0x58163a.subUnitId,
            shapeId: _0x58163a.drawingId,
            flipV: true,
          }
        : undefined;
    },
  };
}
const Xr = "sheets-shape-ui.shape-format.quick-style-gallery",
  Zr = "sheets-shape-ui.shape-format.style-ribbon-control",
  Qr = "sheets-shape-ui.shape-format.text-ribbon-control",
  $r = "sheets-shape-ui.shape-format.formula-ribbon-control";
function ei() {
  let _0x5879ff = _0x2c16c5(_0x454da3),
    _0x264608 = _0x2c16c5(_0xa5b289),
    _0x4c5f54 = _0x2c16c5(_0x1e4684),
    _0x1e3af7 = () => {
      var _0xd0facd;
      let _0x19d4b1 = _0x264608.getFocusDrawings();
      if (
        _0x19d4b1.length !== 1 ||
        ((_0xd0facd = _0x19d4b1[0]) == null
          ? undefined
          : _0xd0facd.drawingType) !== _0x1ca1a8.DRAWING_SHAPE
      )
        return null;
      let {
          unitId: _0xa0cab7,
          subUnitId: _0x4a10f9,
          drawingId: _0x1975b3,
        } = _0x19d4b1[0],
        _0x3b6b59 = _0x4c5f54.getShapeTypeById(_0xa0cab7, _0x4a10f9, _0x1975b3),
        _0x213925 = _0x4c5f54.getShapeDataById(_0xa0cab7, _0x4a10f9, _0x1975b3);
      return _0x3b6b59 === undefined || !_0x213925
        ? null
        : {
            unitId: _0xa0cab7,
            subUnitId: _0x4a10f9,
            drawingId: _0x1975b3,
            shapeType: _0x3b6b59,
            shapeData: _0x213925,
          };
    },
    _0x12ebaa = _0x1b95c6(
      () =>
        new _0x4e364a((_0x3d1159) => {
          let _0x3e5ac0 = () => _0x3d1159.next(_0x1e3af7()),
            _0x1ea76e = _0x264608.focus$["subscribe"](_0x3e5ac0),
            _0x3d2f5b = _0x5879ff.onCommandExecuted((_0x58d153) => {
              _0x58d153.id === _0x12ceb1.id && _0x3e5ac0();
            });
          return (
            _0x3e5ac0(),
            () => {
              (_0x1ea76e.unsubscribe(), _0x3d2f5b.dispose());
            }
          );
        }),
      _0x1e3af7(),
      false,
      [_0x5879ff, _0x264608, _0x4c5f54],
    );
  return {
    selection: _0x12ebaa,
    updateShapeData: (_0x2d04f8) => {
      _0x12ebaa &&
        pr(
          _0x5879ff,
          _0x12ebaa.unitId,
          _0x12ebaa.subUnitId,
          _0x12ebaa.drawingId,
          { oldShapeData: _0x12ebaa.shapeData },
          _0x2d04f8,
        );
    },
  };
}
function ti() {
  let { selection: _0x284d66, updateShapeData: _0x8abbc8 } = ei();
  return _0x284d66
    ? _0x346498(_0x2805b5, {
        shapeData: _0x284d66.shapeData,
        shapeType: _0x284d66.shapeType,
        onUpdateShapeData: _0x8abbc8,
      })
    : null;
}
function ni() {
  let _0x52c07e = _0x2c16c5(_0x454da3),
    _0x568edf = _0x2c16c5(_0x15ffe9),
    { selection: _0x2dfb43 } = ei();
  return _0x2dfb43
    ? _0x346498(_0x1a2175, {
        type: _0x9a491d(_0x2dfb43.shapeData),
        ariaLabel: _0x568edf.t("sheets-shape-ui.quickStyles"),
        activePresetId: _0x42c543(_0x2dfb43.shapeData),
        onSelect: (_0x37bc4c) =>
          _0x52c07e.executeCommand(Nr.id, { presetId: _0x37bc4c }),
      })
    : null;
}
function ri() {
  let { selection: _0x1bc54d, updateShapeData: _0x2141e6 } = ei();
  return _0x1bc54d
    ? _0x346498(_0x38d766, {
        fontFamilyPopupDataComponent: "sheets-shape-format-font-family-menu",
        shapeData: _0x1bc54d.shapeData,
        onUpdateShapeData: _0x2141e6,
      })
    : null;
}
function ii() {
  var _0x579d8b;
  let { selection: _0x12c423, updateShapeData: _0x17ddf4 } = ei(),
    _0x1ca72c = _0x543b34({
      hostType: _0x44a53b.UNIVER_SHEET,
      unitId: (_0x12c423 == null ? undefined : _0x12c423.unitId) ?? "",
      subUnitId: (_0x12c423 == null ? undefined : _0x12c423.subUnitId) ?? "",
      shapeId: (_0x12c423 == null ? undefined : _0x12c423.drawingId) ?? "",
      shapeData: _0x12c423 == null ? undefined : _0x12c423.shapeData,
      registerBinding: false,
      showLabels: true,
      dropdownSide: "bottom",
      onUpdateBinding: (_0xda7b77) => _0x17ddf4({ formulaBinding: _0xda7b77 }),
    }),
    _0x2ce640 =
      ((_0x579d8b = _0x1ca72c.extensionGroups) == null
        ? undefined
        : _0x579d8b
            .flatMap((_0x1e4889) => _0x1e4889.actions)
            .filter((_0x46e444) => _0x46e444.visible !== false)) ?? [];
  return _0x12c423 != null && _0x12c423.shapeData["formulaBinding"]
    ? _0x346498(_0x3776a9, { actions: _0x2ce640, panel: _0x1ca72c.panel })
    : null;
}
const ai = "sheets-shape-ui.ribbon.shape-format.style-control",
  oi = "sheets-shape-ui.ribbon.shape-format.text-control",
  si = "sheets-shape-ui.ribbon.shape-format.formula-control",
  ci = "sheets-shape-ui.ribbon.shape-format.arrange-forward",
  li = "sheets-shape-ui.ribbon.shape-format.arrange-backward",
  ui = "sheets-shape-ui.ribbon.shape-format.arrange-front",
  di = "sheets-shape-ui.ribbon.shape-format.arrange-back";
function fi(_0x3a6e48) {
  let _0x152c7b = _0x3a6e48.get(_0x454da3),
    _0x3256bc = _0x3a6e48.get(_0xa5b289),
    _0x4f3667 = _0x3a6e48.get(_0x1e4684);
  return new _0x4e364a((_0x40813d) => {
    let _0x1cc3fd = () => {
        let _0x20ee9a = pi(_0x3a6e48),
          _0x5734d1 = _0x20ee9a
            ? _0x4f3667.getShapeDataById(
                _0x20ee9a.unitId,
                _0x20ee9a.subUnitId,
                _0x20ee9a.drawingId,
              )
            : null;
        _0x40813d.next(_0x5734d1 ? (_0x42c543(_0x5734d1) ?? "") : "");
      },
      _0x40e97e = _0x3256bc.focus$["subscribe"](_0x1cc3fd),
      _0x4ca5d7 = _0x152c7b.onCommandExecuted((_0x4dc9c5) => {
        _0x4dc9c5.id === _0x12ceb1.id && _0x1cc3fd();
      });
    return (
      _0x1cc3fd(),
      () => {
        (_0x40e97e.unsubscribe(), _0x4ca5d7.dispose());
      }
    );
  });
}
function pi(_0x4f6afa) {
  var _0x40e40d;
  let _0x8b6cb9 = _0x4f6afa.get(_0xa5b289).getFocusDrawings();
  return _0x8b6cb9.length === 1 &&
    ((_0x40e40d = _0x8b6cb9[0]) == null ? undefined : _0x40e40d.drawingType) ===
      _0x1ca1a8.DRAWING_SHAPE
    ? _0x8b6cb9[0]
    : null;
}
function mi(_0x526dda, _0xccee22 = false) {
  let _0x1b3df9 = _0x526dda.get(_0x454da3),
    _0xc084e8 = _0x526dda.get(_0xa5b289),
    _0x11ab60 = _0x526dda.get(_0x1e4684);
  return new _0x4e364a((_0x55f399) => {
    let _0x1fab18 = () => {
        let _0x52c18f = pi(_0x526dda);
        if (!_0x52c18f) {
          _0x55f399.next(true);
          return;
        }
        let _0x588b76 = _0x11ab60.getShapeDataById(
          _0x52c18f.unitId,
          _0x52c18f.subUnitId,
          _0x52c18f.drawingId,
        );
        _0x55f399.next(
          !_0x588b76 || (_0xccee22 && _0x588b76.formulaBinding == null),
        );
      },
      _0x59ea98 = _0xc084e8.focus$["subscribe"](_0x1fab18),
      _0x5db9f8 = _0x1b3df9.onCommandExecuted((_0x103331) => {
        _0x103331.id === _0x12ceb1.id && _0x1fab18();
      });
    return (
      _0x1fab18(),
      () => {
        (_0x59ea98.unsubscribe(), _0x5db9f8.dispose());
      }
    );
  });
}
function hi(_0x1e220d) {
  let _0x6d8b8e = _0x1e220d.get(_0xa5b289),
    _0x3fab85 = _0x1e220d.get(_0x1e4684);
  return _0x6d8b8e.focus$["pipe"](
    _0x42e934(_0x6d8b8e.getFocusDrawings()),
    _0xa2db5f(() => {
      let _0x36eaf9 = pi(_0x1e220d),
        _0x1562af = _0x36eaf9
          ? _0x3fab85.getShapeTypeById(
              _0x36eaf9.unitId,
              _0x36eaf9.subUnitId,
              _0x36eaf9.drawingId,
            )
          : undefined;
      return _0x1562af === undefined || _0x3ae025(_0x1562af);
    }),
  );
}
function gi(_0x6b764c) {
  return {
    id: Nr.id,
    type: _0x3ab343.SELECTOR,
    icon: "PaintIcon",
    title: "shape-editor-ui.toolbar.quickStyles",
    tooltip: "shape-editor-ui.toolbar.quickStyles",
    selections: [{ label: { name: Xr, hoverable: false, selectable: false } }],
    value$: fi(_0x6b764c),
    hidden$: mi(_0x6b764c),
  };
}
function _i(_0x351507) {
  return {
    id: Pr.id,
    type: _0x3ab343.SELECTOR,
    icon: "ShapeIcon",
    title: "shape-editor-ui.toolbar.changeShape",
    tooltip: "shape-editor-ui.toolbar.changeShape",
    slot: true,
    selections: [
      { label: { name: _0x5d4c3e, hoverable: false, selectable: false } },
    ],
    hidden$: hi(_0x351507),
  };
}
function vi(_0x352de7, _0x2a1053, _0xafb59 = false) {
  return (_0x525808) => ({
    id: _0x352de7,
    type: _0x3ab343.BUTTON,
    label: { name: _0x2a1053, hoverable: false, selectable: false },
    hidden$: mi(_0x525808, _0xafb59),
  });
}
const yi = vi(ai, Zr),
  bi = vi(oi, Qr),
  xi = vi(si, $r, true);
function Si(_0x4b0b66, _0x140192, _0x2b65c5, _0x338671) {
  return (_0x4a3003) => ({
    id: _0x4b0b66,
    commandId: _0x7edf74.id,
    type: _0x3ab343.BUTTON,
    icon: _0x2b65c5,
    title: _0x338671,
    tooltip: _0x338671,
    hidden$: mi(_0x4a3003),
    params: () => {
      let _0x200651 = pi(_0x4a3003);
      return _0x200651
        ? {
            unitId: _0x200651.unitId,
            subUnitId: _0x200651.subUnitId,
            drawingIds: [_0x200651.drawingId],
            arrangeType: _0x140192,
          }
        : undefined;
    },
  });
}
const Ci = Si(
    ci,
    _0x6ccaec.forward,
    "MoveUpIcon",
    "shape-editor-ui.arrange.forward",
  ),
  wi = Si(
    li,
    _0x6ccaec.backward,
    "MoveDownIcon",
    "shape-editor-ui.arrange.backward",
  ),
  Ti = Si(ui, _0x6ccaec.front, "TopmostIcon", "shape-editor-ui.arrange.front"),
  Ei = Si(di, _0x6ccaec.back, "BottomIcon", "shape-editor-ui.arrange.back");
function Di(_0x1db18c) {
  return {
    id: jr.id,
    type: _0x3ab343.BUTTON,
    icon: "ShapeFormatSettingIcon",
    title: "sheets-shape-ui.formatShape",
    tooltip: "sheets-shape-ui.formatShape",
    hidden$: mi(_0x1db18c),
    params: () => {
      let _0x478199 = pi(_0x1db18c);
      return _0x478199
        ? {
            unitId: _0x478199.unitId,
            subUnitId: _0x478199.subUnitId,
            drawingId: _0x478199.drawingId,
          }
        : undefined;
    },
  };
}
const Oi = {
    [_0xfb900f.RIBBON]: {
      [Dr]: {
        order: 100,
        title: "sheets-shape-ui.formatShape",
        contextual: true,
        "sheets-shape-ui.ribbon.shape-format.quick-styles": {
          order: 0,
          [Nr.id]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: gi,
          },
          [Pr.id]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: _i,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.style": {
          order: 1,
          [ai]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 104 },
            menuItemFactory: yi,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.text": {
          order: 2,
          [oi]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 344 },
            menuItemFactory: bi,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.arrange": {
          order: 3,
          [Wr]: {
            order: 0,
            gridLayout: { row: 1, column: 1 },
            menuItemFactory: Jr,
          },
          [Gr]: {
            order: 1,
            gridLayout: { row: 2, column: 1 },
            menuItemFactory: Yr,
          },
          [ci]: {
            order: 2,
            gridLayout: { row: 1, column: 2 },
            menuItemFactory: Ci,
          },
          [li]: {
            order: 3,
            gridLayout: { row: 2, column: 2 },
            menuItemFactory: wi,
          },
          [ui]: {
            order: 4,
            gridLayout: { row: 1, column: 3 },
            menuItemFactory: Ti,
          },
          [di]: {
            order: 5,
            gridLayout: { row: 2, column: 3 },
            menuItemFactory: Ei,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.formula": {
          order: 4,
          [si]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 120 },
            menuItemFactory: xi,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.advanced": {
          order: 5,
          [jr.id]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: Di,
          },
          [_0x3aa914.id]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: _0x165c79,
          },
        },
      },
    },
  },
  ki = {
    [_0x49f2b0.MEDIA]: { [Cr.id]: { order: 4, menuItemFactory: Hr } },
    [_0x49f2b0.OTHERS]: {
      [Ar.id]: {
        order: 0,
        gridLayout: { row: 1, column: 1, rowSpan: 2, showLabel: true },
        menuItemFactory: Ur,
      },
    },
    [_0x121b82.DRAWING]: {
      [_0x2a6fa6.OTHERS]: {
        [Wr]: { order: 4, menuItemFactory: Jr },
        [Gr]: { order: 5, menuItemFactory: Yr },
      },
    },
  };
var Ai = "@univerjs-pro/sheets-shape-ui",
  ji = "1.0.0-insiders.20260907-70fc579";
const Mi = {
    type: _0x185165.OPERATION,
    id: "sheet.operation.close-sheet-shape-format-panel",
    handler() {
      return true;
    },
  },
  Ni = {};
function Pi(_0x4e8fe7) {
  return _0x4e8fe7.trim() || undefined;
}
function Fi(_0x4ebeea, _0x5748c1, _0x17834b) {
  var _0x1f98da;
  return (
    ((_0x1f98da = _0x4ebeea.name) == null ? undefined : _0x1f98da.trim()) ||
    _0x47fc7d(_0x17834b, _0x314e82(_0x4ebeea.drawingType)) +
      "\x20" +
      (_0x5748c1 + 1)
  );
}
function Ii() {
  var _0x138ed0;
  let _0x2b512d = _0x2c16c5(_0x15ffe9),
    _0x46200e = _0x2c16c5(_0x454da3),
    _0x3f3d64 = _0x2c16c5(_0x36fe2b),
    _0x5cf3ab = _0x2c16c5(_0x3b4870),
    _0x1ade22 = _0x2c16c5(_0xa5b289),
    _0x1a382a = _0x2c16c5(_0x191ca0),
    [, _0x49e4ac] = _0xf8778d((_0x511169) => _0x511169 + 1, 0),
    _0x551bfa = _0x3f3d64.getCurrentUnitOfType(_0x44a53b.UNIVER_SHEET),
    _0x44949b = (_0x551bfa == null ? undefined : _0x551bfa.getUnitId()) ?? "",
    _0xb1fbf3 =
      (_0x551bfa == null || (_0x138ed0 = _0x551bfa.getActiveSheet()) == null
        ? undefined
        : _0x138ed0.getSheetId()) ?? "",
    _0xc74578 = _0x1b95c6(
      () => _0x1ade22.focus$,
      _0x1ade22.getFocusDrawings(),
      false,
      [_0x1ade22],
    );
  _0x297091(() => {
    let _0x1b8218 = _0x46200e.onCommandExecuted(() => _0x49e4ac());
    return () => _0x1b8218.dispose();
  }, [_0x46200e]);
  let _0x498a50 = _0x5933b2(() => _0x8c9bc4(_0x2b512d), [_0x2b512d]),
    _0x377064 =
      _0x44949b && _0xb1fbf3
        ? _0x5cf3ab.getDrawingData(_0x44949b, _0xb1fbf3)
        : {},
    _0x3f3b16 = (
      _0x44949b && _0xb1fbf3
        ? _0x5cf3ab.getDrawingOrder(_0x44949b, _0xb1fbf3)
        : []
    )
      .map((_0x2c14c4) => _0x377064[_0x2c14c4])
      .filter((_0x438190) => !!_0x438190)
      .reverse(),
    _0x5c4606 = _0x3f3b16.reduce(
      (_0x555f83, _0x245c84) => (
        (_0x555f83[_0x2c7643(_0x245c84.drawingType)] += 1),
        _0x555f83
      ),
      { canvas: 0, floating: 0 },
    ),
    _0x38c4f8 = { canvas: 0, floating: 0 },
    _0x22e3e9 = _0x3f3b16.map((_0x557109, _0x4ae0eb) => {
      let _0x24b969 = _0x2c7643(_0x557109.drawingType),
        _0x36f635 = _0x24b969 === _0x24f877,
        _0x29d4a2 = _0x38c4f8[_0x24b969]++;
      return {
        id: _0x557109.drawingId,
        name: Fi(_0x557109, _0x4ae0eb, _0x2b512d),
        description: _0x557109.description,
        visible: _0x557109.hidden !== true,
        selectable: _0x557109.selectable !== false,
        sectionId: _0x24b969,
        sectionTitle: _0x36f635
          ? _0x498a50.sectionFloating
          : _0x498a50.sectionCanvas,
        capabilities: _0x36f635
          ? { arrange: false, reorder: false }
          : undefined,
        canMoveForward: !_0x36f635 && _0x29d4a2 > 0,
        canMoveBackward: !_0x36f635 && _0x29d4a2 < _0x5c4606.canvas - 1,
        canReorder: !_0x36f635,
      };
    }),
    _0x2065cb = _0x5933b2(
      () =>
        (_0xc74578 ?? [])
          .filter(
            (_0x4c0940) =>
              _0x4c0940.unitId === _0x44949b &&
              _0x4c0940.subUnitId === _0xb1fbf3,
          )
          .map((_0x593cbc) => _0x593cbc.drawingId),
      [_0xc74578, _0xb1fbf3, _0x44949b],
    ),
    _0x23b813 = _0x2065cb[_0x2065cb.length - 1] ?? null,
    _0x5ee24d = (_0xd08881) =>
      _0x5cf3ab.getDrawingByParam({
        unitId: _0x44949b,
        subUnitId: _0xb1fbf3,
        drawingId: _0xd08881,
      }) ?? null,
    _0x51f105 = async (_0x1d74cc) => {
      !_0x44949b ||
        !_0x1d74cc.length ||
        (await _0x46200e.executeCommand(_0x1e4c38.id, {
          unitId: _0x44949b,
          drawings: _0x1d74cc,
        }));
    },
    _0x1d467d = async (_0x30e4f1, _0x5333df) => {
      _0x5ee24d(_0x30e4f1) &&
        (await _0x51f105([
          {
            unitId: _0x44949b,
            subUnitId: _0xb1fbf3,
            drawingId: _0x30e4f1,
            ..._0x5333df,
          },
        ]));
    },
    _0x1d8102 = (_0x3fa86, _0x2b51f3) => {
      if (!_0x44949b || !_0xb1fbf3) return;
      let _0x55b4bf = _0x2b51f3
        ? _0x2065cb.includes(_0x3fa86)
          ? _0x2065cb.filter((_0x5cf4da) => _0x5cf4da !== _0x3fa86)
          : [..._0x2065cb, _0x3fa86]
        : [_0x3fa86];
      _0x46200e.syncExecuteCommand(
        _0x635955.id,
        _0x55b4bf.map((_0x277297) => ({
          unitId: _0x44949b,
          subUnitId: _0xb1fbf3,
          drawingId: _0x277297,
        })),
      );
      let _0x2d7ee3 = _0x55b4bf[_0x55b4bf.length - 1];
      _0x2d7ee3
        ? _0x24bfce(_0x1a382a, {
            unitId: _0x44949b,
            subUnitId: _0xb1fbf3,
            drawingId: _0x2d7ee3,
          })
        : _0x1dd2f5(_0x1a382a, _0x44949b);
    },
    _0x204106 = async (_0x742b5f, _0x2d7385) => {
      await _0x51f105(
        _0x742b5f
          .map((_0x16475b) => _0x5ee24d(_0x16475b))
          .filter((_0x1486be) => !!_0x1486be)
          .filter((_0x570ede) => (_0x570ede.hidden !== true) !== _0x2d7385)
          .map((_0x441a33) => ({
            unitId: _0x44949b,
            subUnitId: _0xb1fbf3,
            drawingId: _0x441a33.drawingId,
            hidden: !_0x2d7385,
          })),
      );
    },
    _0x165889 = async (_0xeecc55) => {
      let _0x4bd3cd = _0x5ee24d(_0xeecc55);
      _0x4bd3cd &&
        (await _0x1d467d(_0xeecc55, {
          selectable: _0x4bd3cd.selectable === false && undefined,
        }));
    },
    _0x51b620 = async (_0x57c3ef, _0x4c0519) => {
      var _0x523037;
      let _0x3eeaaf = Pi(_0x4c0519);
      (((_0x523037 = _0x5ee24d(_0x57c3ef)) == null
        ? undefined
        : _0x523037.name) ?? undefined) !== _0x3eeaaf &&
        (await _0x1d467d(_0x57c3ef, { name: _0x3eeaaf }));
    },
    _0x43c508 = async (_0x468465, _0x2e0d04) => {
      var _0x360db5;
      let _0x593729 = Pi(_0x2e0d04);
      (((_0x360db5 = _0x5ee24d(_0x468465)) == null
        ? undefined
        : _0x360db5.description) ?? undefined) !== _0x593729 &&
        (await _0x1d467d(_0x468465, { description: _0x593729 }));
    },
    _0x15d676 = async (_0x408919, _0x3c858d) => {
      !_0x44949b ||
        !_0xb1fbf3 ||
        (await _0x46200e.executeCommand(_0x7edf74.id, {
          unitId: _0x44949b,
          subUnitId: _0xb1fbf3,
          drawingIds: [_0x408919],
          arrangeType: _0x3c858d,
        }));
    };
  return !_0x44949b || !_0xb1fbf3
    ? _0x346498("div", {
        className:
          "univer-flex univer-size-full univer-items-center univer-justify-center univer-text-sm univer-text-gray-500",
        children: _0x498a50.title,
      })
    : _0x346498(_0x1441ba, {
        items: _0x22e3e9,
        selectedIds: _0x2065cb,
        focusedId: _0x23b813,
        labels: _0x498a50,
        onSelect: _0x1d8102,
        onSetVisible: _0x204106,
        onCommitName: _0x51b620,
        onCommitDescription: _0x43c508,
        onMoveForward: async (_0x1903be) =>
          _0x15d676(_0x1903be, _0x6ccaec.forward),
        onMoveBackward: async (_0x419a15) =>
          _0x15d676(_0x419a15, _0x6ccaec.backward),
        onToggleSelectable: _0x165889,
      });
}
let Li = class {
  constructor(_0x4220ab) {
    this._renderManagerService = _0x4220ab;
  }
  updateShapeFillImage(_0x27b85a, _0x4d824e) {
    let _0x90dab8 = this._renderManagerService["getRenderUnitById"](
        _0x27b85a.unitId,
      ),
      _0x46a1e7 = _0x90dab8 == null ? undefined : _0x90dab8.scene;
    if (!_0x46a1e7) return;
    let _0x1977c3 = _0x568a43(_0x27b85a),
      _0xb87b2d = _0x46a1e7.getObjectIncludeInGroup(_0x1977c3);
    _0xb87b2d == null || _0xb87b2d.setFillImage(_0x4d824e);
  }
};
Li = X([Y(0, _0x191ca0)], Li);
function Ri() {
  let _0x5d46ac = _0x2c16c5(_0xa5b289),
    _0xf5c1b9 = _0x1b95c6(
      () => _0x5d46ac.focus$,
      _0x5d46ac.getFocusDrawings(),
      false,
      [_0x5d46ac],
    );
  return _0xf5c1b9.length === 0
    ? null
    : _0x346498("div", {
        children: _0x1721b0("div", {
          className: "univer-box-border\x20univer-px-4\x20univer-text-sm",
          children: [
            _0x346498(_0xc52ee1, { drawings: _0xf5c1b9, hasCropper: false }),
            _0x346498(_0xcb80bf, { drawings: _0xf5c1b9 }),
          ],
        }),
      });
}
function zi(_0x2656ad) {
  let {
      unitId: _0x322885,
      subUnitId: _0x4f4ff8,
      shapeId: _0x27abe1,
    } = _0x2656ad,
    _0x2457ce = _0x2c16c5(_0x454da3),
    _0xe33283 = _0x2c16c5(Li);
  return _0x346498(_0x156806, {
    ..._0x2656ad,
    positionEditor: _0x346498(Ri, {}),
    onUpdateShapeData: (_0x536ea3, _0x275412) => {
      pr(_0x2457ce, _0x322885, _0x4f4ff8, _0x27abe1, _0x536ea3, _0x275412);
    },
    onUpdateLineShapeData: (_0x34f5f2, _0x4c39c9) => {
      mr(_0x2457ce, _0x322885, _0x4f4ff8, _0x27abe1, _0x34f5f2, _0x4c39c9);
    },
    onUpdateShapeFillImage: (_0x4bc0d7) => {
      _0xe33283.updateShapeFillImage(
        { unitId: _0x322885, subUnitId: _0x4f4ff8, drawingId: _0x27abe1 },
        _0x4bc0d7,
      );
    },
  });
}
function Bi(_0x43c2fb) {
  let _0x366e69 = _0x2c16c5(_0x4728b3),
    { mobile: _0xca5379 } = _0x2994b4(_0x49ad34),
    _0x50cc40 = _0x1b95c6(
      () => _0x366e69.visible$,
      _0x366e69.getVisible(),
      false,
      [_0x366e69],
    ),
    _0x318411 = _0x43c2fb.popup["extraProps"];
  return !_0x318411 || !_0x50cc40 || _0xca5379
    ? null
    : _0x346498(Vi, {
        ..._0x318411,
        canvasElement: _0x43c2fb.popup["canvasElement"],
      });
}
function Vi(_0x49c8ac) {
  let _0x2a37c3 = _0x2c16c5(_0x454da3),
    _0x190a10 = _0x2c16c5(_0x1e4684),
    {
      unitId: _0x329b58,
      subUnitId: _0x33970a,
      drawingId: _0x45616e,
      drawingType: _0x46e3ae,
      shapeType: _0x5973f0,
    } = _0x49c8ac,
    [_0x29a1b9, _0x4d6c70] = _0x40a276(_0x49c8ac.shapeData),
    _0x2301b1 = _0x5933b2(() => _0x47fc6a(_0x29a1b9), [_0x29a1b9]),
    _0x544963 = _0x5933b2(() => _0x2c8e9a(_0x29a1b9), [_0x29a1b9]);
  _0x297091(() => {
    let _0x3c52de = _0x2a37c3.onCommandExecuted((_0x1f14cc) => {
      if (_0x1f14cc.id !== _0x12ceb1.id) return;
      let _0x925da9 = _0x190a10.getShapeDataById(
        _0x329b58,
        _0x33970a,
        _0x45616e,
      );
      _0x925da9 && _0x4d6c70(_0x925da9);
    });
    return () => _0x3c52de.dispose();
  }, [_0x2a37c3, _0x45616e, _0x190a10, _0x33970a, _0x329b58]);
  let _0x3dfc0c = (_0x28bd03) => {
      _0x4d6c70((_0x25782d) => ({ ..._0x25782d, ..._0x28bd03 }));
    },
    _0x2684af = (_0x437a52) => {
      let _0x36f051 = _0x45da91(_0x29a1b9, _0x437a52);
      (pr(
        _0x2a37c3,
        _0x329b58,
        _0x33970a,
        _0x45616e,
        { oldShapeData: { shapeText: _0x29a1b9.shapeText } },
        _0x36f051,
      ),
        _0x3dfc0c(_0x36f051));
    },
    _0x5eedb7 = _0x543b34({
      hostType: _0x44a53b.UNIVER_SHEET,
      unitId: _0x329b58,
      subUnitId: _0x33970a,
      shapeId: _0x45616e,
      shapeData: _0x29a1b9,
      onUpdateBinding: (_0x5dad3d) => {
        let _0x324cc9 = { formulaBinding: _0x5dad3d };
        (pr(
          _0x2a37c3,
          _0x329b58,
          _0x33970a,
          _0x45616e,
          { oldShapeData: { formulaBinding: _0x29a1b9.formulaBinding } },
          _0x324cc9,
        ),
          _0x3dfc0c(_0x324cc9));
      },
    });
  return _0x1721b0(_0x94c37b, {
    children: [
      _0x346498(_0x4a99c4, {
        canvasElement: _0x49c8ac.canvasElement,
        shapeData: _0x29a1b9,
        shapeType: _0x5973f0,
        textStyle: {
          ff: _0x1a8d3f.shapeText["fontFamily"],
          fs: _0x1a8d3f.shapeText["fontSize"],
          cl: { rgb: _0x1a8d3f.shapeText["color"] },
          ..._0x2301b1,
        },
        textModel: _0x544963
          ? {
              ha: _0x544963.ha ?? _0x424379.LEFT,
              va: _0x544963.va ?? _0x374a10.TOP,
            }
          : null,
        enableShapeFillReset: true,
        enableShapeStrokeReset: true,
        enableTextBackgroundReset: true,
        defaultFillColor: _0x1a8d3f.fill,
        defaultGradientEndColor: _0x1a8d3f.gradientEndColor,
        defaultStrokeColor: _0x1a8d3f.stroke,
        extensionGroups: _0x5eedb7.extensionGroups,
        floatingObjectToolbarPosition: _0x13120a.SHEET,
        onUpdateShapeData: (_0x49449f, _0x16d1fa) => {
          (pr(_0x2a37c3, _0x329b58, _0x33970a, _0x45616e, _0x49449f, _0x16d1fa),
            _0x16d1fa && _0x3dfc0c(_0x16d1fa));
        },
        onUpdateText: _0x2684af,
        onOpenPanel: () => {
          _0x2a37c3.executeCommand(jr.id, {
            unitId: _0x329b58,
            subUnitId: _0x33970a,
            drawingId: _0x45616e,
          });
        },
        onDelete: () => {
          _0x2a37c3.executeCommand(_0x313c2d.id, {
            unitId: _0x329b58,
            drawings: [
              {
                unitId: _0x329b58,
                subUnitId: _0x33970a,
                drawingId: _0x45616e,
                drawingType: _0x46e3ae,
              },
            ],
          });
        },
      }),
      _0x5eedb7.panel,
    ],
  });
}
let Q = class extends _0x56da22 {
  constructor(_0x59ea54) {
    (super(),
      (this._permissionService = _0x59ea54),
      J(this, "_editingParams$", new _0x415742(null)),
      J(this, "editingParams$", this._editingParams$["asObservable"]()),
      J(this, "_onSavingEditorData$", new _0x415742(false)),
      J(
        this,
        "onSavingEditorData$",
        this._onSavingEditorData$["asObservable"](),
      ),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          let _0x2661f1 = this.getEditing();
          _0x2661f1 != null &&
            _0x2661f1.visible &&
            !this._canEdit(_0x2661f1) &&
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
  setEditing(_0xed5273) {
    (_0xed5273 != null && _0xed5273.visible && !this._canEdit(_0xed5273)) ||
      (this._editingParams$["next"](_0xed5273),
      _0xed5273 ?? this._onSavingEditorData$["next"](false));
  }
  setOnSavingEditorData(_0x32cc92) {
    this._onSavingEditorData$["next"](_0x32cc92);
  }
  getEditing() {
    return this._editingParams$["getValue"]();
  }
  _canEdit(_0x2bad74) {
    let _0x119ebc = this._permissionService["getPermissionPoint"](
        new _0xe46f62(_0x2bad74.unitId).id,
      ),
      _0x5296a8 = this._permissionService["getPermissionPoint"](
        new _0x53e1b4(_0x2bad74.unitId, _0x2bad74.subUnitId).id,
      );
    return (
      ((_0x119ebc == null ? undefined : _0x119ebc.value) ?? true) &&
      ((_0x5296a8 == null ? undefined : _0x5296a8.value) ?? true)
    );
  }
  completeEditing(_0x11a74f) {
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
Q = X([Y(0, _0x4843c2)], Q);
function Hi(_0x285274) {
  return (
    !!_0x285274 &&
    "axisAlignSheetTransform" in _0x285274 &&
    "sheetTransform" in _0x285274
  );
}
const Ui = _0x5f40bf(() => {
  let _0x2282cd = _0x2c16c5(Q),
    _0x1e2944 = _0x2c16c5(_0x1e4684),
    _0x5160b5 = _0x2c16c5(_0xa5b289),
    _0x21bc15 = _0x2c16c5(_0x454da3),
    _0x2aa7aa = _0x2c16c5(_0x2b9297),
    _0x586b01 = _0x2c16c5(_0x191ca0);
  return _0x346498(_0x28504a, {
    adapter: _0x5933b2(
      () => ({
        getShapeModel: (_0x18b8ad, _0x1edbcd, _0x33e03c) =>
          _0x1e2944.getShapeModel(_0x18b8ad, _0x1edbcd, _0x33e03c),
        getShapeData: (_0x2ae1b6, _0x478cdd, _0x1f9b88) =>
          _0x1e2944.getShapeDataById(_0x2ae1b6, _0x478cdd, _0x1f9b88),
        getDrawingTransform: (_0x4df205, _0xb5dfb3, _0x24da50) => {
          let _0x35159a = _0x5160b5.getDrawingByParam({
            unitId: _0x4df205,
            subUnitId: _0xb5dfb3,
            drawingId: _0x24da50,
          });
          return _0x35159a == null ? undefined : _0x35159a.transform;
        },
        updateShapeText: ({
          unitId: _0x17a6a0,
          subUnitId: _0x4b6caa,
          shapeId: _0x592a5b,
          shapeText: _0x39887b,
          oldShapeText: _0x30da1c,
          hostSize: _0x143b1c,
        }) => {
          _0x2aa7aa.run(_0x17a6a0, () => {
            var _0x341b77;
            let _0x103c85 = _0x21bc15.syncExecuteCommand(fr.id, {
              unitId: _0x17a6a0,
              subUnitId: _0x4b6caa,
              shapeId: _0x592a5b,
              shapeData: { shapeText: _0x39887b },
              oldShapeJSON: { oldShapeData: { shapeText: _0x30da1c } },
            });
            if (!_0x103c85 || !_0x143b1c) return _0x103c85;
            let _0x18a5a4 = _0x5160b5.getDrawingByParam({
                unitId: _0x17a6a0,
                subUnitId: _0x4b6caa,
                drawingId: _0x592a5b,
              }),
              _0x391095 = _0x18a5a4 == null ? undefined : _0x18a5a4.transform;
            if (!Hi(_0x18a5a4) || !_0x391095) return false;
            let _0x27a63a = {
                ..._0x391095,
                width: _0x143b1c.width,
                height: _0x143b1c.height,
              },
              _0xaf11e4 =
                (_0x341b77 = _0x586b01.getRenderUnitById(_0x17a6a0)) == null ||
                (_0x341b77 = _0x341b77
                  .with(_0x2bd78f)
                  .getSkeletonParam(_0x4b6caa)) == null
                  ? undefined
                  : _0x341b77.skeleton;
            return _0x21bc15.syncExecuteCommand(_0x1e4c38.id, {
              unitId: _0x17a6a0,
              drawings: [
                {
                  ..._0x18a5a4,
                  transform: _0x27a63a,
                  sheetTransform: _0xaf11e4
                    ? (_0x318d77(_0x27a63a, _0xaf11e4) ??
                      _0x18a5a4.sheetTransform)
                    : _0x18a5a4.sheetTransform,
                  axisAlignSheetTransform: _0xaf11e4
                    ? (_0xf93d6(_0x27a63a, _0xaf11e4) ??
                      _0x18a5a4.axisAlignSheetTransform)
                    : _0x18a5a4.axisAlignSheetTransform,
                },
              ],
            });
          });
        },
        updateHostSize: ({
          unitId: _0x2917c7,
          subUnitId: _0x1f9023,
          shapeId: _0xda0db2,
          width: _0x1eb161,
          height: _0xb0ae68,
        }) => {
          var _0x51ca0f;
          let _0x38ba8d = _0x5160b5.getDrawingByParam({
              unitId: _0x2917c7,
              subUnitId: _0x1f9023,
              drawingId: _0xda0db2,
            }),
            _0x1261a1 = _0x38ba8d == null ? undefined : _0x38ba8d.transform;
          if (!Hi(_0x38ba8d) || !_0x1261a1) return;
          let _0x1f06bd = { ..._0x1261a1, width: _0x1eb161, height: _0xb0ae68 },
            _0x4dd7cc =
              (_0x51ca0f = _0x586b01.getRenderUnitById(_0x2917c7)) == null ||
              (_0x51ca0f = _0x51ca0f
                .with(_0x2bd78f)
                .getSkeletonParam(_0x1f9023)) == null
                ? undefined
                : _0x51ca0f.skeleton,
            _0x24a89c = _0x4dd7cc
              ? (_0x318d77(_0x1f06bd, _0x4dd7cc) ?? _0x38ba8d.sheetTransform)
              : _0x38ba8d.sheetTransform,
            _0x424772 = _0x4dd7cc
              ? (_0xf93d6(_0x1f06bd, _0x4dd7cc) ??
                _0x38ba8d.axisAlignSheetTransform)
              : _0x38ba8d.axisAlignSheetTransform;
          _0x21bc15.executeCommand(_0x1e4c38.id, {
            unitId: _0x2917c7,
            drawings: [
              {
                ..._0x38ba8d,
                transform: _0x1f06bd,
                sheetTransform: _0x24a89c,
                axisAlignSheetTransform: _0x424772,
              },
            ],
          });
        },
        allowHostSizeShrink: ({
          unitId: _0x97f2dd,
          subUnitId: _0x149e06,
          shapeId: _0x5bc7f1,
        }) =>
          _0x8b3c56(
            _0x1e2944.getShapeDataById(_0x97f2dd, _0x149e06, _0x5bc7f1),
          ),
        deferHostSizeUpdateDuringEditing: () => true,
      }),
      [_0x21bc15, _0x5160b5, _0x586b01, _0x1e2944, _0x2aa7aa],
    ),
    editingService: _0x2282cd,
    editorUnitId: Or,
    positionOptions: _0x5933b2(
      () => ({
        viewportKeys: {
          main: _0x1fc362.VIEW_MAIN,
          leftTop: _0x1fc362.VIEW_MAIN_LEFT_TOP,
          top: _0x1fc362.VIEW_MAIN_TOP,
          left: _0x1fc362.VIEW_MAIN_LEFT,
        },
        getSkeleton: (_0x3c211a, _0x345e86) => {
          var _0x5a7dbe;
          return (
            ((_0x5a7dbe = _0x3c211a
              .with(_0x2bd78f)
              .getSkeletonParam(_0x345e86.subUnitId)) == null
              ? undefined
              : _0x5a7dbe.skeleton) ?? null
          );
        },
      }),
      [],
    ),
  });
});
let Wi = class extends _0x56da22 {
  constructor(_0x95b4f1, _0x58d5a5) {
    (super(),
      (this._componentManager = _0x95b4f1),
      (this._iconManager = _0x58d5a5),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    (this._iconManager["has"]("ObjectLayersIcon") ||
      this.disposeWithMe(
        this._iconManager["register"]({ ObjectLayersIcon: _0x1f9f4b }),
      ),
      this._iconManager["has"]("FlipHorizontalIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ FlipHorizontalIcon: _0x48a381 }),
        ),
      this._iconManager["has"]("FlipVerticalIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ FlipVerticalIcon: _0x97ab84 }),
        ),
      this._iconManager["has"]("BottomIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ BottomIcon: _0x4270d1 }),
        ),
      this._iconManager["has"]("MoveDownIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ MoveDownIcon: _0x3fd86a }),
        ),
      this._iconManager["has"]("MoveUpIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ MoveUpIcon: _0x47a315 }),
        ),
      this._iconManager["has"]("ShapeFormatSettingIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ ShapeFormatSettingIcon: _0x4eaf96 }),
        ),
      this._iconManager["has"]("TopmostIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ TopmostIcon: _0x550a81 }),
        ));
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](wr, zi)),
      this.disposeWithMe(this._componentManager["register"](Tr, Ii)),
      this.disposeWithMe(this._componentManager["register"](Ir, Vr)),
      this.disposeWithMe(this._componentManager["register"](Lr, zr)),
      this._componentManager["get"](_0x49f11b) ||
        this.disposeWithMe(this._componentManager["register"](_0x49f11b, Br)),
      this.disposeWithMe(this._componentManager["register"](Er, Bi)),
      this.disposeWithMe(this._componentManager["register"](Zr, ti)),
      this.disposeWithMe(this._componentManager["register"](Xr, ni)),
      this.disposeWithMe(this._componentManager["register"](Qr, ri)),
      this.disposeWithMe(this._componentManager["register"]($r, ii)),
      this.disposeWithMe(this._componentManager["register"](kr, _0x3073fb)),
      this.disposeWithMe(
        this._componentManager["register"]("SheetShapeTextEditorContainer", Ui),
      ));
  }
};
Wi = X([Y(0, _0x344f6e(_0x553d6e)), Y(1, _0x344f6e(_0x1ceb4b))], Wi);
let Gi = class extends _0x56da22 {
  constructor(_0x2ee9a2, _0x5ce8dc, _0x5f0c69, _0x4674da, _0x20963c) {
    (super(),
      (this._context = _0x2ee9a2),
      (this._drawingManagerService = _0x5ce8dc),
      (this._renderManagerService = _0x5f0c69),
      (this._univerInstanceService = _0x4674da),
      (this._imageShapeClipController = _0x20963c),
      J(this, "_activeImageId", null),
      J(this, "_unitId", null),
      J(this, "_subUnitId", null),
      J(this, "_activeAdjustPointList", undefined),
      J(this, "_shapes", []),
      J(this, "_baseLeft", 0),
      J(this, "_baseTop", 0),
      J(this, "_baseWidth", 0),
      J(this, "_baseHeight", 0),
      J(this, "_isStartAdjusting", false),
      J(this, "_activeAdjustInfo", undefined),
      J(this, "_activeShapeModel", undefined),
      J(this, "_adjHandlerPointerMove", undefined),
      J(this, "_adjHandlerPointerUp", undefined),
      J(this, "_isImagePointerDown", false),
      this._registerFocusChangeHandler(),
      this._registerMoveHandler());
  }
  clearAdjustControls() {
    this._clearControls();
  }
  refreshAdjustControls() {
    (this._clearControls(), this._createControls(true));
  }
  _getOrCreateShapeModel(_0x5d7478, _0x4cff67, _0x5cfcbe, _0x1c0d66) {
    let _0x50b61c = _0x5d7478;
    if (_0x50b61c !== _0xcf4f0c.None && _0x5d7478 !== "custom")
      try {
        let _0x32e229 = new _0x58de54(_0x50b61c, "clip-adj-" + _0x5d7478);
        return (
          _0x1c0d66 &&
            _0x32e229.setShapeData({ adjustValues: _0x1c0d66 }, true),
          _0x32e229.updateContext({ width: _0x4cff67, height: _0x5cfcbe }),
          _0x32e229
        );
      } catch {
        return;
      }
  }
  _getImageDrawingInfo(_0x23a94d, _0x235f32, _0x1bcc0c) {
    let _0x33d91a = {
        unitId: _0x23a94d,
        subUnitId: _0x235f32,
        drawingId: _0x1bcc0c,
      },
      _0x353a4b = this._drawingManagerService["getDrawingByParam"](_0x33d91a);
    if (!(!_0x353a4b || _0x353a4b.drawingType !== _0x1ca1a8.DRAWING_IMAGE))
      return _0x353a4b;
  }
  _getImagePrstGeom(_0x47bd27, _0x3588f8, _0x1c5314) {
    let _0x31b7b2 = this._renderManagerService["getRenderUnitById"](_0x47bd27);
    if (!_0x31b7b2) return;
    let { scene: _0x49c793 } = _0x31b7b2,
      _0x10a654 = _0x568a43({
        unitId: _0x47bd27,
        subUnitId: _0x3588f8,
        drawingId: _0x1c5314,
      }),
      _0x34dfc6 = _0x49c793.getObject(_0x10a654);
    if (_0x34dfc6 instanceof _0x5a3f22) {
      let _0x278515 = _0x34dfc6.prstGeom;
      if (_0x278515)
        return {
          prstGeom: _0x278515,
          adjustValues: _0x34dfc6.prstGeomAdjValues,
        };
    }
  }
  _createControls(_0x2aba03 = false) {
    if (!this._unitId || !this._subUnitId || !this._activeImageId) return;
    let _0x196c30 = this._renderManagerService["getRenderUnitById"](
      this._unitId,
    );
    if (!_0x196c30 || !_0x196c30.with(_0x2bd78f).getCurrentSkeleton()) return;
    let { scene: _0x218e75 } = _0x196c30,
      _0xd3f4cd = this._getImageDrawingInfo(
        this._unitId,
        this._subUnitId,
        this._activeImageId,
      );
    if (!_0xd3f4cd) return;
    let { transform: _0x202514 } = _0xd3f4cd;
    if (!_0x202514) return;
    let {
      left: _0x5c2018,
      top: _0x5d80b9,
      width: _0x579093,
      height: _0x302668,
      flipX: _0x4f7169,
      flipY: _0x39342f,
      angle: _0x341713 = 0,
    } = _0x202514;
    if (_0x5c2018 === undefined || _0x5d80b9 === undefined) return;
    let _0x28d247 = this._getImagePrstGeom(
      this._unitId,
      this._subUnitId,
      this._activeImageId,
    );
    if (!_0x28d247) return;
    if (_0x2aba03) {
      let _0x489788 = this._getOrCreateShapeModel(
        _0x28d247.prstGeom,
        _0x579093 || 0,
        _0x302668 || 0,
        _0x28d247.adjustValues,
      );
      if (!_0x489788) return;
      this._activeAdjustPointList = _0x489788.getDrawingPoints();
    }
    let _0x52b76c = this._activeAdjustPointList;
    if (!(!_0x52b76c || _0x52b76c.length === 0))
      for (let _0x1b104c = 0; _0x1b104c < _0x52b76c.length; _0x1b104c++) {
        let _0x2def05 = _0x52b76c[_0x1b104c],
          _0x394f01 = _0x2def05.x,
          _0x104e78 = _0x2def05.y;
        if (
          (_0x4f7169 && (_0x394f01 = (_0x579093 || 0) - _0x394f01),
          _0x39342f && (_0x104e78 = (_0x302668 || 0) - _0x104e78),
          _0x341713 !== 0)
        ) {
          let _0x8cc7a4 = (_0x579093 || 0) / 2,
            _0x5afae9 = (_0x302668 || 0) / 2,
            _0x406cc7 = (_0x341713 * Math.PI) / 180,
            _0x24757f = Math.cos(_0x406cc7),
            _0x224f2e = Math.sin(_0x406cc7),
            _0xf99cf2 = _0x394f01 - _0x8cc7a4,
            _0xec7105 = _0x104e78 - _0x5afae9;
          ((_0x394f01 =
            _0x8cc7a4 + (_0xf99cf2 * _0x24757f - _0xec7105 * _0x224f2e)),
            (_0x104e78 =
              _0x5afae9 + (_0xf99cf2 * _0x224f2e + _0xec7105 * _0x24757f)));
        }
        let _0x29e992 = {
          x: _0x394f01,
          y: _0x104e78,
          adjName: _0x2def05.adjName,
        };
        this._addControl(
          _0x218e75,
          _0x29e992,
          _0x29e992.adjName,
          _0x5c2018,
          _0x5d80b9,
          this._unitId,
          this._subUnitId,
        );
      }
  }
  _addControl(
    _0x471f1a,
    _0x4bced6,
    _0x4fde60,
    _0x4ce180,
    _0xecd44d,
    _0x371ebc,
    _0x37d63f,
  ) {
    if (!this._activeImageId) return;
    let _0x4ef7d1 =
        "image-clip-adjust-point-" + this._activeImageId + "-" + _0x4fde60,
      _0x424df7 = _0x471f1a.getObjectIncludeInGroup(_0x4ef7d1);
    if (_0x424df7) {
      _0x424df7.transformByState({
        left: _0x4bced6.x + _0x4ce180 - _0x1a8d3f.adjHandleSize,
        top: _0x4bced6.y + _0xecd44d - _0x1a8d3f.adjHandleSize,
      });
      return;
    }
    let _0x4602e4 = new br(_0x4ef7d1, {
      left: _0x4bced6.x + _0x4ce180 - _0x1a8d3f.adjHandleSize,
      top: _0x4bced6.y + _0xecd44d - _0x1a8d3f.adjHandleSize,
      adjName: _0x4fde60,
      shapeId: this._activeImageId,
      unitId: _0x371ebc,
      subUnitId: _0x37d63f,
      width: _0x1a8d3f.adjHandleSize + 8,
      height: _0x1a8d3f.adjHandleSize + 8,
      zIndex: _0x51ebe3 + 1,
      evented: true,
    });
    (this._shapes["push"](_0x4602e4),
      this._attachAdjustEvent(_0x4602e4, _0x471f1a, _0x4fde60),
      _0x471f1a.addObject(_0x4602e4, _0x51ebe3 + 1));
  }
  _clearControls() {
    this._shapes["length"] !== 0 &&
      (this._shapes["forEach"]((_0x27da28) => _0x27da28.dispose()),
      (this._shapes = []));
  }
  _getScrollInfo(_0x43077d, _0x13039d) {
    var _0x10a9c5;
    let _0x12f700 = { x: 0, y: 0 },
      _0x1890b = this._renderManagerService["getRenderUnitById"](_0x43077d);
    if (!_0x1890b || !_0x1890b.with(_0x2bd78f).getSkeleton(_0x13039d))
      return _0x12f700;
    let _0x5e4f4b = _0x1890b.with(_0x54a8d4),
      _0x4e1874 =
        _0x5e4f4b == null ? undefined : _0x5e4f4b.getCurrentScrollState();
    if (!_0x4e1874) return _0x12f700;
    let _0x331b37 =
      (_0x10a9c5 = this._univerInstanceService["getUnit"](_0x43077d)) == null
        ? undefined
        : _0x10a9c5.getSheetBySheetId(_0x13039d);
    if (!_0x331b37) return _0x12f700;
    let _0x5a54ac = _0xeb9ad5(
      _0x4e1874.sheetViewStartRow,
      _0x4e1874.sheetViewStartColumn,
      _0x1890b.scene,
      _0x331b37,
    );
    return _0x5a54ac
      ? { x: _0x5a54ac.viewportScrollX, y: _0x5a54ac.viewportScrollY }
      : _0x12f700;
  }
  _getZoomRatio(_0x15aa11, _0x36ca60) {
    var _0x136637;
    let _0x10abaa =
      (_0x136637 = this._univerInstanceService["getUnit"](_0x15aa11)) == null
        ? undefined
        : _0x136637.getSheetBySheetId(_0x36ca60);
    return (_0x10abaa == null ? undefined : _0x10abaa.getZoomRatio()) ?? 1;
  }
  _attachAdjustEvent(_0x92ac32, _0x21661f, _0xeb8f38) {
    this.disposeWithMe(
      _0xa4b14e(
        _0x92ac32.onPointerDown$["subscribeEvent"]((_0x45e877, _0x39e474) => {
          var _0x1e31fa, _0x4d1e15, _0x175836;
          let {
              unitId: _0xf54b46,
              subUnitId: _0x18ed98,
              drawingId: _0xdda0a9,
            } = _0x92ac32.getDrawingSearch(),
            _0x41a453 = this._getImageDrawingInfo(
              _0xf54b46,
              _0x18ed98,
              _0xdda0a9,
            );
          if (!(_0x41a453 != null && _0x41a453.transform)) return;
          let {
            left: _0x1c0585,
            top: _0x15ce7f,
            width: _0x2c7b30,
            height: _0x50e80e,
          } = _0x41a453.transform;
          ((this._baseLeft = _0x1c0585 || 0),
            (this._baseTop = _0x15ce7f || 0),
            (this._baseWidth = _0x2c7b30 || 0),
            (this._baseHeight = _0x50e80e || 0));
          let _0x41ebbc = !!(
              (_0x1e31fa = _0x41a453.transform) != null && _0x1e31fa.flipX
            ),
            _0x166562 = !!(
              (_0x4d1e15 = _0x41a453.transform) != null && _0x4d1e15.flipY
            ),
            _0x243de9 =
              ((_0x175836 = _0x41a453.transform) == null
                ? undefined
                : _0x175836.angle) || 0,
            _0x4c5a67 = this._getImagePrstGeom(_0xf54b46, _0x18ed98, _0xdda0a9);
          if (!_0x4c5a67) return;
          let _0x3b39ce = this._getOrCreateShapeModel(
            _0x4c5a67.prstGeom,
            this._baseWidth,
            this._baseHeight,
            _0x4c5a67.adjustValues,
          );
          if (
            !_0x3b39ce ||
            ((this._activeShapeModel = _0x3b39ce),
            (this._activeAdjustInfo = _0x3b39ce.getAdjustInfoByName(_0xeb8f38)),
            !this._activeAdjustInfo)
          )
            return;
          ((this._isStartAdjusting = true), _0x21661f.disableObjectsEvent());
          let _0x5cca60 = _0x4c5a67.prstGeom;
          ((this._adjHandlerPointerMove = _0x21661f.onPointerMove$[
            "subscribeEvent"
          ]((_0x23f9d2, _0x26108b) => {
            if (!this._isStartAdjusting) return;
            let { offsetX: _0x1e3a08, offsetY: _0x2f7bbd } = _0x23f9d2,
              _0xce2f0d = this._activeAdjustInfo;
            if (!this._activeShapeModel || !_0xce2f0d) return;
            (_0x21661f.disableObjectsEvent(),
              _0x21661f.setCursor(_0x1160cb.CROSSHAIR));
            let _0x25e723 = {
                left: 0,
                top: 0,
                width: this._baseWidth,
                height: this._baseHeight,
              },
              _0x43ae0b = this._getScrollInfo(_0xf54b46, _0x18ed98),
              _0x584f4a = this._getZoomRatio(_0xf54b46, _0x18ed98),
              _0x5e49cb = _0x1e3a08 / _0x584f4a + _0x43ae0b.x - this._baseLeft,
              _0x50adbc = _0x2f7bbd / _0x584f4a + _0x43ae0b.y - this._baseTop;
            if (_0x243de9 !== 0) {
              let _0x583f32 = this._baseWidth / 2,
                _0x2bdc62 = this._baseHeight / 2,
                _0x37885e = (_0x243de9 * Math.PI) / 180,
                _0x2842a1 = Math.cos(_0x37885e),
                _0x2ec33b = Math.sin(_0x37885e),
                _0x1fb7bc = _0x5e49cb - _0x583f32,
                _0x1ad842 = _0x50adbc - _0x2bdc62;
              ((_0x5e49cb =
                _0x583f32 + (_0x1fb7bc * _0x2842a1 + _0x1ad842 * _0x2ec33b)),
                (_0x50adbc =
                  _0x2bdc62 +
                  (-_0x1fb7bc * _0x2ec33b + _0x1ad842 * _0x2842a1)));
            }
            (_0x41ebbc && (_0x5e49cb = this._baseWidth - _0x5e49cb),
              _0x166562 && (_0x50adbc = this._baseHeight - _0x50adbc));
            let _0x21c84a = this._activeShapeModel["calcAdjValues"](
              _0x25e723,
              { x: _0x5e49cb, y: _0x50adbc },
              _0xce2f0d,
              _0x41ebbc,
              _0x166562,
            );
            if (Object.keys(_0x21c84a).length !== 0) {
              for (let [_0x4128a7, _0x17da0c] of Object.entries(_0x21c84a))
                this._activeShapeModel["setAdjustValueByName"](
                  _0x4128a7,
                  _0x17da0c,
                );
              (this._activeShapeModel["updateContext"]({
                width: this._baseWidth,
                height: this._baseHeight,
              }),
                this._updateImageAdjValues(
                  _0xf54b46,
                  _0x18ed98,
                  _0xdda0a9,
                  _0x21c84a,
                ),
                (this._activeAdjustPointList =
                  this._activeShapeModel["getDrawingPoints"]()),
                this._createControls(),
                _0x26108b.stopPropagation());
            }
          })),
            (this._adjHandlerPointerUp = _0x21661f.onPointerUp$[
              "subscribeEvent"
            ]((_0xd882f8, _0x3ef12b) => {
              if (
                (this._adjHandlerPointerMove["unsubscribe"](),
                this._adjHandlerPointerUp["unsubscribe"](),
                _0x21661f.resetCursor(),
                this._activeShapeModel)
              ) {
                let _0x5c83fd = this._activeShapeModel["getAdjustNames"](),
                  _0xd6a3e5 = {};
                for (let _0x1ad782 of _0x5c83fd) {
                  let _0x466a26 =
                    this._activeShapeModel["getAdjustValueByName"](_0x1ad782);
                  _0x466a26 !== undefined && (_0xd6a3e5[_0x1ad782] = _0x466a26);
                }
                this._imageShapeClipController["clipByShape"](
                  _0xf54b46,
                  _0x18ed98,
                  _0xdda0a9,
                  _0x5cca60,
                  _0xd6a3e5,
                );
              }
              ((this._activeAdjustInfo = undefined),
                (this._activeShapeModel = undefined),
                (this._isStartAdjusting = false),
                _0x3ef12b.stopPropagation(),
                _0x21661f.enableObjectsEvent());
            })),
            _0x39e474.stopPropagation());
        }),
      ),
    );
  }
  _updateImageAdjValues(_0x5553df, _0x3a2b9e, _0x38f575, _0x195e95) {
    let _0x307609 = this._renderManagerService["getRenderUnitById"](_0x5553df);
    if (!_0x307609) return;
    let { scene: _0x1d868e } = _0x307609,
      _0xf1bbeb = _0x568a43({
        unitId: _0x5553df,
        subUnitId: _0x3a2b9e,
        drawingId: _0x38f575,
      }),
      _0x5e3b1e = _0x1d868e.getObject(_0xf1bbeb);
    if (_0x5e3b1e instanceof _0x5a3f22) {
      let _0x3562d9 = _0x5e3b1e.prstGeomAdjValues ?? {};
      (_0x5e3b1e.setPrstGeomAdjValues({ ..._0x3562d9, ..._0x195e95 }),
        _0x5e3b1e.makeDirty(true));
    }
  }
  _registerMoveHandler() {
    let _0x489732 = this._univerInstanceService["getCurrentTypeOfUnit$"](
      _0x44a53b.UNIVER_SHEET,
    );
    this.disposeWithMe(
      _0x489732
        .pipe(
          _0x373e57((_0x398944) =>
            _0x398944
              ? _0x398944.activeSheet$["pipe"](
                  _0x373e57((_0x1c2486) => {
                    if (!_0x1c2486) return _0xf8c1f7;
                    let _0x2f5fcd = _0x398944.getUnitId(),
                      _0x4b75e9 =
                        this._renderManagerService["getRenderUnitById"](
                          _0x2f5fcd,
                        ),
                      _0x33ea33 =
                        _0x4b75e9 == null ? undefined : _0x4b75e9.scene;
                    return _0x33ea33 ? _0x54ba04(_0x33ea33) : _0xf8c1f7;
                  }),
                )
              : _0xf8c1f7,
          ),
        )
        .subscribe((_0x1eaf7a) => {
          let _0x4c57b3 = _0x1eaf7a.getTransformerByCreate();
          (this.disposeWithMe(
            _0x1eaf7a.onPointerMove$["subscribeEvent"](() => {
              this._isImagePointerDown && this._clearControls();
            }),
          ),
            this.disposeWithMe(
              _0x4c57b3.changeStart$["subscribe"]((_0x3e8e06) => {
                let { objects: _0x68f01c } = _0x3e8e06;
                if (
                  (this._createControls(),
                  _0x68f01c !== null && _0x68f01c.size === 1)
                ) {
                  let _0x13408c = _0x68f01c.values().next().value;
                  _0x13408c instanceof _0x5a3f22 &&
                    _0x13408c.prstGeom &&
                    (this._isImagePointerDown = true);
                }
              }),
            ),
            this.disposeWithMe(
              _0x4c57b3.changing$["subscribe"](() => {
                this._isImagePointerDown && this._clearControls();
              }),
            ),
            this.disposeWithMe(
              _0x1eaf7a.onPointerUp$["subscribeEvent"](() => {
                this._isImagePointerDown &&
                  ((this._isImagePointerDown = false), this._createControls());
              }),
            ),
            this.disposeWithMe(
              _0x4c57b3.changeEnd$["subscribe"](() => {
                if (this._unitId && this._subUnitId && this._activeImageId) {
                  let _0x4d8f43 = this._getImagePrstGeom(
                    this._unitId,
                    this._subUnitId,
                    this._activeImageId,
                  );
                  if (_0x4d8f43) {
                    var _0x58f1f7, _0x52a1e8;
                    let _0x5a730c = this._getImageDrawingInfo(
                        this._unitId,
                        this._subUnitId,
                        this._activeImageId,
                      ),
                      _0x20978d =
                        (_0x5a730c == null ||
                        (_0x58f1f7 = _0x5a730c.transform) == null
                          ? undefined
                          : _0x58f1f7.width) || 0,
                      _0x2a33c4 =
                        (_0x5a730c == null ||
                        (_0x52a1e8 = _0x5a730c.transform) == null
                          ? undefined
                          : _0x52a1e8.height) || 0,
                      _0x16b2ab = this._getOrCreateShapeModel(
                        _0x4d8f43.prstGeom,
                        _0x20978d,
                        _0x2a33c4,
                        _0x4d8f43.adjustValues,
                      );
                    _0x16b2ab &&
                      ((this._activeAdjustPointList =
                        _0x16b2ab.getDrawingPoints()),
                      this._clearControls(),
                      this._createControls(true));
                  }
                }
              }),
            ));
        }),
    );
  }
  _registerFocusChangeHandler() {
    (this.disposeWithMe(
      this._drawingManagerService["focus$"].subscribe((_0x1fc638) => {
        if (_0x1fc638.length === 1) {
          let _0xe35c30 = _0x1fc638[0];
          if (_0xe35c30.drawingType === _0x1ca1a8.DRAWING_IMAGE) {
            let {
                unitId: _0x16f2a5,
                subUnitId: _0xfaaaed,
                drawingId: _0x52baf6,
              } = _0xe35c30,
              _0x1831b0 = this._getImagePrstGeom(
                _0x16f2a5,
                _0xfaaaed,
                _0x52baf6,
              );
            if (_0x1831b0) {
              var _0x495734, _0x2d1f17;
              ((this._activeImageId = _0x52baf6),
                (this._unitId = _0x16f2a5),
                (this._subUnitId = _0xfaaaed));
              let _0x11ffa4 = this._getImageDrawingInfo(
                  _0x16f2a5,
                  _0xfaaaed,
                  _0x52baf6,
                ),
                _0x28d9f1 =
                  (_0x11ffa4 == null ||
                  (_0x495734 = _0x11ffa4.transform) == null
                    ? undefined
                    : _0x495734.width) || 0,
                _0x144f2a =
                  (_0x11ffa4 == null ||
                  (_0x2d1f17 = _0x11ffa4.transform) == null
                    ? undefined
                    : _0x2d1f17.height) || 0,
                _0x101322 = this._getOrCreateShapeModel(
                  _0x1831b0.prstGeom,
                  _0x28d9f1,
                  _0x144f2a,
                  _0x1831b0.adjustValues,
                );
              (_0x101322 &&
                (this._activeAdjustPointList = _0x101322.getDrawingPoints()),
                this._clearControls(),
                this._createControls(true));
            } else this._resetState();
          } else this._resetState();
        } else this._resetState();
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["update$"].subscribe((_0x455074) => {
          if (_0x455074.length === 1) {
            let _0x70b377 = _0x455074[0],
              _0x480db3 =
                this._drawingManagerService["getDrawingByParam"](_0x70b377);
            (_0x480db3 == null ? undefined : _0x480db3.drawingType) ===
              _0x1ca1a8.DRAWING_IMAGE &&
              this._activeImageId === _0x70b377.drawingId &&
              (this._clearControls(), this._createControls(true));
          }
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x1d72d5) => {
          for (let _0x5460ad of _0x1d72d5)
            this._activeImageId === _0x5460ad.drawingId && this._resetState();
        }),
      ));
  }
  _resetState() {
    ((this._activeImageId = null),
      (this._unitId = null),
      (this._subUnitId = null),
      (this._activeAdjustPointList = undefined),
      this._clearControls());
  }
};
Gi = X(
  [
    Y(1, _0xa5b289),
    Y(2, _0x344f6e(_0x191ca0)),
    Y(3, _0x36fe2b),
    Y(4, _0x344f6e(Fr)),
  ],
  Gi,
);
const Ki = "sheets-shape-contextual-ribbon";
let qi = class extends _0x56da22 {
  constructor(
    _0x2809d6,
    _0x306a74,
    _0x59ae66,
    _0x549c38,
    _0x232074,
    _0x2ed0a0,
  ) {
    (super(),
      (this._menuManagerService = _0x2809d6),
      (this._ribbonService = _0x306a74),
      (this._drawingManagerService = _0x59ae66),
      (this._univerInstanceService = _0x549c38),
      (this._renderManagerService = _0x232074),
      (this._shapeFloatingToolbarService = _0x2ed0a0),
      J(this, "_visible", false),
      this._menuManagerService["mergeMenu"](Oi),
      this.disposeWithMe(
        _0xa4b14e(
          this._drawingManagerService["focus$"].subscribe(() => this._update()),
        ),
      ),
      this._update());
  }
  dispose() {
    (this._shapeFloatingToolbarService["setFallbackVisible"](false, Ki),
      this._hide(),
      super.dispose());
  }
  _update() {
    var _0x5ed1a1;
    let _0x31f030 = this._drawingManagerService["getFocusDrawings"](),
      _0x30271b = _0x31f030.length === 1 ? _0x31f030[0] : undefined;
    if (
      (_0x30271b == null ? undefined : _0x30271b.drawingType) !==
        _0x1ca1a8.DRAWING_SHAPE ||
      this._univerInstanceService["getUnitType"](_0x30271b.unitId) !==
        _0x44a53b.UNIVER_SHEET
    ) {
      (this._shapeFloatingToolbarService["setFallbackVisible"](false, Ki),
        this._hide());
      return;
    }
    let _0x9fa9c2 =
      _0xa4aa5c(
        (_0x5ed1a1 = this._renderManagerService["getRenderUnitById"](
          _0x30271b.unitId,
        )) == null
          ? undefined
          : _0x5ed1a1.engine["getCanvasElement"](),
      ) === "isolated";
    if (
      (this._shapeFloatingToolbarService["setFallbackVisible"](_0x9fa9c2, Ki),
      _0x9fa9c2)
    ) {
      this._hide();
      return;
    }
    this._visible ||
      ((this._visible = true),
      this._ribbonService["showContextualTab"](Dr, { activate: true }));
  }
  _hide() {
    this._visible &&
      ((this._visible = false),
      this._ribbonService["hideContextualTab"](Dr),
      this._ribbonService["setCollapsedIds"]([]));
  }
};
qi = X(
  [
    Y(0, _0x193823),
    Y(1, _0x5ae769),
    Y(2, _0xa5b289),
    Y(3, _0x36fe2b),
    Y(4, _0x191ca0),
    Y(5, _0x344f6e(_0x4728b3)),
  ],
  qi,
);
function Ji(_0x300fa0, _0x14e316, _0xb0bfba, _0x38f04f) {
  let _0xd2c820 = _0x5a34b0(_0x300fa0, _0x14e316, _0xb0bfba),
    _0x2976c9 = [];
  for (let _0x494dc5 of _0x14e316) {
    let _0x577457 = _0xd2c820.idMap["get"](_0x494dc5.drawingId),
      _0x120b74 = _0x38f04f(_0x494dc5);
    !_0x577457 ||
      !_0x120b74 ||
      _0x2976c9.push({ targetShapeId: _0x577457, source: _0x120b74 });
  }
  return _0x2976c9;
}
let Yi = class extends _0x56da22 {
  constructor(_0x5e54fb, _0x3ef2c7, _0x53618b, _0x4f3993) {
    (super(),
      (this._univerInstanceService = _0x5e54fb),
      (this._sheetInterceptorService = _0x3ef2c7),
      (this._sheetDrawingService = _0x53618b),
      (this._sheetsShapeService = _0x4f3993),
      this._initSheetChange());
  }
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x5cbdfe) => {
          if (_0x5cbdfe.id === _0x53c617.id) {
            let _0x39a747 = _0x55b6c8(
              this._univerInstanceService,
              _0x5cbdfe.params,
            );
            if (!_0x39a747) return { redos: [], undos: [] };
            let { unitId: _0x12d82b, subUnitId: _0x1c4182 } = _0x39a747,
              _0x1f78ae = this._sheetDrawingService["getDrawingData"](
                _0x12d82b,
                _0x1c4182,
              ),
              _0x2c25a1 = Object.values(_0x1f78ae).filter(
                (_0x5282f5) =>
                  _0x5282f5.drawingType === _0x1ca1a8.DRAWING_SHAPE,
              );
            if (_0x2c25a1.length === 0) return { redos: [], undos: [] };
            let _0x53c4ed = [],
              _0x56f7b9 = [];
            for (let _0x221f44 = 0; _0x221f44 < _0x2c25a1.length; _0x221f44++) {
              let _0x531ec9 = _0x2c25a1[_0x221f44],
                _0x22ba78 = this._sheetsShapeService["getShapeModel"](
                  _0x531ec9.unitId,
                  _0x531ec9.subUnitId,
                  _0x531ec9.drawingId,
                );
              _0x22ba78 &&
                (_0x53c4ed.push({
                  id: _0xc6307.id,
                  params: {
                    unitId: _0x12d82b,
                    subUnitId: _0x1c4182,
                    shapeId: _0x531ec9.drawingId,
                  },
                }),
                _0x56f7b9.push({
                  id: _0x16d69c.id,
                  params: {
                    unitId: _0x12d82b,
                    subUnitId: _0x1c4182,
                    shapeId: _0x531ec9.drawingId,
                    shapeType: _0x22ba78.getShapeType(),
                    shapeData: JSON.parse(
                      JSON.stringify(_0x22ba78.getShapeData()),
                    ),
                  },
                }));
            }
            return { redos: _0x53c4ed, undos: _0x56f7b9 };
          } else {
            if (_0x5cbdfe.id === _0x58b8d4.id) {
              let {
                unitId: _0x151ac7,
                subUnitId: _0xc132a3,
                targetSubUnitId: _0x2c99cc,
                copyContext: _0x58746c,
              } = _0x5cbdfe.params;
              if (!_0x151ac7 || !_0xc132a3 || !_0x2c99cc)
                return { redos: [], undos: [] };
              let _0x4c3b54 = this._sheetDrawingService["getDrawingData"](
                  _0x151ac7,
                  _0xc132a3,
                ),
                _0xf717b4 = Object.values(_0x4c3b54).filter(
                  (_0x58d034) =>
                    _0x58d034.drawingType === _0x1ca1a8.DRAWING_SHAPE,
                );
              if (_0xf717b4.length === 0) return { redos: [], undos: [] };
              let _0x8ab953 = Ji(
                  _0x58746c,
                  _0xf717b4,
                  {
                    unitId: _0x151ac7,
                    sourceSubUnitId: _0xc132a3,
                    targetSubUnitId: _0x2c99cc,
                  },
                  (_0x6632a9) => {
                    let _0x4e5d04 = this._sheetsShapeService["getShapeModel"](
                      _0x6632a9.unitId,
                      _0x6632a9.subUnitId,
                      _0x6632a9.drawingId,
                    );
                    if (_0x4e5d04)
                      return {
                        shapeType: _0x4e5d04.getShapeType(),
                        shapeData: JSON.parse(
                          JSON.stringify(_0x4e5d04.getShapeData()),
                        ),
                      };
                  },
                ),
                _0x2ad377 = [],
                _0x5cf9b1 = [];
              for (let {
                targetShapeId: _0x3f7388,
                source: _0x22217c,
              } of _0x8ab953)
                (_0x2ad377.push({
                  id: _0x16d69c.id,
                  params: {
                    unitId: _0x151ac7,
                    subUnitId: _0x2c99cc,
                    shapeId: _0x3f7388,
                    shapeType: _0x22217c.shapeType,
                    shapeData: _0x22217c.shapeData,
                  },
                }),
                  _0x5cf9b1.push({
                    id: _0xc6307.id,
                    params: {
                      unitId: _0x151ac7,
                      subUnitId: _0x2c99cc,
                      shapeId: _0x3f7388,
                    },
                  }));
              return { redos: _0x2ad377, undos: _0x5cf9b1 };
            }
          }
          return { redos: [], undos: [] };
        },
      }),
    );
  }
};
Yi = X(
  [
    Y(0, _0x344f6e(_0x36fe2b)),
    Y(1, _0x344f6e(_0x208852)),
    Y(2, _0x344f6e(_0x3b4870)),
    Y(3, _0x344f6e(_0x1e4684)),
  ],
  Yi,
);
function Xi(_0x22ecbc) {
  return _0x22ecbc.line
    ? null
    : _0x22ecbc.mobile
      ? _0x22ecbc.formula
        ? "mobile-formula"
        : "mobile-text"
      : _0x22ecbc.formula
        ? null
        : "desktop-text";
}
let Zi = class extends _0x56da22 {
  constructor(
    _0x2b69ad,
    _0xf52d27,
    _0x1f8ca9,
    _0x483d7c,
    _0x5c399e,
    _0x32fcda,
  ) {
    (super(),
      (this._context = _0x2b69ad),
      (this._shapeTextEditingService = _0xf52d27),
      (this._mobileShapeEditorService = _0x1f8ca9),
      (this._drawingManagerService = _0x483d7c),
      (this._contextService = _0x5c399e),
      (this._sheetsShapeService = _0x32fcda),
      J(this, "_lastEditingShapeKey", null),
      this._initEvents(),
      this._initSelection(),
      this._initEditingParams());
  }
  _initEvents() {
    let { scene: _0x1c2468 } = this._context;
    this.disposeWithMe(
      _0x1c2468.onDblclick$["subscribeEvent"]((_0x509167) => {
        let { offsetX: _0x2b4806, offsetY: _0x259d9f } = _0x509167,
          _0x3038f4 = _0x1c2468.pick(
            _0x5865be.FromArray([_0x2b4806, _0x259d9f]),
          );
        if (_0x3038f4 instanceof yr) {
          let _0xfff6bd = this._sheetsShapeService["getShapeModel"](
              _0x3038f4.unitId,
              _0x3038f4.subUnitId,
              _0x3038f4.shapeId,
            ),
            _0x2d5ea2 = _0x3ae025(
              this._sheetsShapeService["getShapeType"](
                _0x3038f4.unitId,
                _0x3038f4.subUnitId,
                _0x3038f4.shapeId,
              ),
            ),
            _0x10ec35 = Xi({
              formula: !!(
                _0xfff6bd != null && _0xfff6bd.getShapeData().formulaBinding
              ),
              line: _0x2d5ea2,
              mobile: this._contextService["getContextValue"](_0xf6400e),
            });
          if (!_0x10ec35) return;
          if (_0x10ec35 === "mobile-formula" || _0x10ec35 === "mobile-text") {
            this._mobileShapeEditorService["open"](
              _0x10ec35 === "mobile-formula" ? "formula" : "text",
              {
                hostType: _0x44a53b.UNIVER_SHEET,
                unitId: _0x3038f4.unitId,
                subUnitId: _0x3038f4.subUnitId,
                shapeId: _0x3038f4.shapeId,
              },
            );
            return;
          }
          this._shapeTextEditingService["setEditing"]({
            visible: true,
            unitId: _0x3038f4.unitId,
            subUnitId: _0x3038f4.subUnitId,
            shapeId: _0x3038f4.shapeId,
            shapeKey: _0x3038f4.oKey,
          });
        }
      }),
    );
  }
  _initSelection() {
    (this.disposeWithMe(
      this._drawingManagerService["focus$"].subscribe((_0x381c0e) => {
        if (_0x381c0e.length === 1) {
          let _0x3b156d = _0x381c0e[0],
            _0x3ad274 =
              this._drawingManagerService["getDrawingByParam"](_0x3b156d);
          if (
            (_0x3ad274 == null ? undefined : _0x3ad274.drawingType) ===
            _0x1ca1a8.DRAWING_SHAPE
          ) {
            var _0x2c3348;
            let _0x54f4c1 = this._shapeTextEditingService["getEditing"]();
            if (
              (_0x54f4c1 == null ? undefined : _0x54f4c1.shapeId) ===
                _0x3b156d.drawingId &&
              _0x54f4c1.visible
            )
              return;
            let _0x542c74 = _0x3ae025(
                this._sheetsShapeService["getShapeType"](
                  _0x3b156d.unitId,
                  _0x3b156d.subUnitId,
                  _0x3b156d.drawingId,
                ),
              ),
              _0x4dc287 = !!(
                (_0x2c3348 = this._sheetsShapeService["getShapeModel"](
                  _0x3b156d.unitId,
                  _0x3b156d.subUnitId,
                  _0x3b156d.drawingId,
                )) != null && _0x2c3348.getShapeData().formulaBinding
              );
            (_0x542c74 || _0x4dc287) &&
              this._shapeTextEditingService["setEditing"](null);
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
        this._drawingManagerService["remove$"].subscribe((_0x578d6c) => {
          let _0x2649e3 = this._shapeTextEditingService["getEditing"]();
          _0x2649e3 &&
            _0x578d6c.some(
              (_0xdc217d) => _0xdc217d.drawingId === _0x2649e3.shapeId,
            ) &&
            this._shapeTextEditingService["setEditing"](null);
        }),
      ));
  }
  _initEditingParams() {
    this.disposeWithMe(
      this._shapeTextEditingService["editingParams$"].subscribe((_0x35e7fe) => {
        let { scene: _0x17d397 } = this._context;
        if (this._lastEditingShapeKey) {
          let _0x4284c8 = _0x17d397.getObjectIncludeInGroup(
            this._lastEditingShapeKey,
          );
          _0x4284c8 && _0x4284c8.setEditing(false);
        }
        if (_0x35e7fe) {
          let _0x4b1071 = !!_0x35e7fe.visible,
            _0x2c6ae3 = _0x17d397.getObjectIncludeInGroup(_0x35e7fe.shapeKey);
          (_0x2c6ae3 &&
            (_0x2c6ae3.setEditing(_0x4b1071),
            (this._lastEditingShapeKey = _0x35e7fe.shapeKey)),
            this._contextService["setContextValue"](_0x43000f, _0x4b1071));
        } else
          ((this._lastEditingShapeKey = null),
            this._contextService["setContextValue"](_0x43000f, false));
      }),
    );
  }
};
Zi = X(
  [
    Y(1, _0x344f6e(Q)),
    Y(2, _0x344f6e(_0x1f44d6)),
    Y(3, _0xa5b289),
    Y(4, _0x573752),
    Y(5, _0x344f6e(_0x1e4684)),
  ],
  Zi,
);
let Qi = class extends _0x4a30dc {
  constructor(
    _0x23fbc8,
    _0x5a12a6,
    _0x6da62,
    _0x55322a,
    _0x50e705,
    _0x4633fc,
    _0xa8057c,
    _0xdf9919,
    _0x4ad1c0,
    _0x2910e1,
  ) {
    super(
      _0x23fbc8,
      _0x5a12a6,
      _0x6da62,
      _0x55322a,
      _0x50e705,
      _0x4633fc,
      _0xa8057c,
      _0xdf9919,
      _0x4ad1c0,
      _0x2910e1,
      { componentKey: kr, editorUnitId: Or },
    );
  }
};
Qi = X(
  [
    Y(1, _0x344f6e(_0x416ee1)),
    Y(2, _0x344f6e(_0x117fa3)),
    Y(3, _0x344f6e(_0x455fd5)),
    Y(4, _0x454da3),
    Y(5, _0x344f6e(_0x3fffda)),
    Y(6, _0x344f6e(_0x36ba06)),
    Y(7, _0x344f6e(_0x4128bf)),
    Y(8, _0x344f6e(_0x9bda1d)),
    Y(9, _0x344f6e(Q)),
  ],
  Qi,
);
let $i = class extends _0x56da22 {
  constructor(
    _0x42e2b7,
    _0x30981b,
    _0x41af01,
    _0x26c260,
    _0x412d2e,
    _0x2e1b1c,
  ) {
    (super(),
      (this._commandService = _0x42e2b7),
      (this._renderManagerService = _0x30981b),
      (this._drawingManagerService = _0x41af01),
      (this._currentUniverService = _0x26c260),
      (this._drawingRenderService = _0x412d2e),
      (this._sheetDrawingShapeRenderController = _0x2e1b1c),
      J(this, "_insertingShapeKeys", new Set()),
      this._initialize());
  }
  _initialize() {
    (this._drawingAddListener(),
      this._commandExecutedListener(),
      this._shapeUpdateListener());
  }
  _drawingAddListener() {
    this.disposeWithMe(
      this._drawingManagerService["add$"].subscribe((_0x14ac67) => {
        this._insertShapes(_0x14ac67);
      }),
    );
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x2c2335, _0x3e7a63) => {
        if (_0x2c2335.id === _0x12ceb1.id) {
          let {
              unitId: _0x325eed,
              subUnitId: _0x329f61,
              shapeId: _0x261e53,
            } = _0x2c2335.params,
            _0x2bf363 = this._getSceneAndTransformerByDrawingSearch(_0x325eed),
            _0x4b6437 = _0x568a43({
              unitId: _0x325eed,
              subUnitId: _0x329f61,
              drawingId: _0x261e53,
            }),
            _0x170ee7 =
              _0x2bf363 == null
                ? undefined
                : _0x2bf363.scene["getObjectIncludeInGroup"](_0x4b6437);
          _0x170ee7 &&
            (this._sheetDrawingShapeRenderController["refreshShapeFillImage"](
              _0x170ee7,
            ),
            this._sheetDrawingShapeRenderController[
              "refreshFormulaPresentation"
            ](_0x170ee7, {
              unitId: _0x325eed,
              subUnitId: _0x329f61,
              shapeId: _0x261e53,
            }),
            _0x170ee7.makeDirty(true));
          return;
        }
        if (_0x2c2335.id === _0x16d69c.id) {
          var _0xf23c46;
          let {
              unitId: _0x1a77c4,
              subUnitId: _0x15169e,
              shapeId: _0x1f62a0,
            } = _0x2c2335.params,
            _0x33105b = this._getSceneAndTransformerByDrawingSearch(_0x1a77c4);
          if (_0x33105b == null) return;
          let { scene: _0x7f456c } = _0x33105b,
            _0x2d9a36 = _0x568a43({
              unitId: _0x1a77c4,
              subUnitId: _0x15169e,
              drawingId: _0x1f62a0,
            }),
            _0x2d4215 = _0x7f456c.getObjectIncludeInGroup(_0x2d9a36);
          if (!(
            (_0xf23c46 =
              this._renderManagerService["getRenderUnitById"](_0x1a77c4)) !=
              null && _0xf23c46.with(_0x2bd78f).getSkeleton(_0x15169e)
          ))
            return false;
          if (_0x2d4215) return;
          if (_0x3e7a63 != null && _0x3e7a63.fromChangeset) {
            queueMicrotask(() => {
              this._disposed ||
                this._insertShapes([
                  {
                    unitId: _0x1a77c4,
                    subUnitId: _0x15169e,
                    drawingId: _0x1f62a0,
                  },
                ]);
            });
            return;
          }
          this._insertShapes([
            { unitId: _0x1a77c4, subUnitId: _0x15169e, drawingId: _0x1f62a0 },
          ]);
        }
      }),
    );
  }
  _shapeUpdateListener() {
    this.disposeWithMe(
      this._drawingManagerService["update$"].subscribe((_0x48cf06) => {
        _0x48cf06.forEach((_0x21787f) => {
          let {
              unitId: _0x537200,
              subUnitId: _0x4b3e4b,
              drawingId: _0x3dffb5,
            } = _0x21787f,
            _0x198714 =
              this._drawingManagerService["getDrawingByParam"](_0x21787f);
          if (_0x198714 == null) return;
          let {
            transform: _0xb1aab8,
            drawingType: _0x2260a1,
            srcRect: _0x4e0ed8,
            prstGeom: _0x2abfb5,
          } = _0x198714;
          if (_0x2260a1 !== _0x1ca1a8.DRAWING_SHAPE) return;
          let _0x41569d =
            this._getSceneAndTransformerByDrawingSearch(_0x537200);
          if (_0x41569d == null) return;
          let { scene: _0x319e27, transformer: _0x36ca8a } = _0x41569d;
          if (_0xb1aab8 == null) return true;
          let _0x257eeb = _0x568a43({
              unitId: _0x537200,
              subUnitId: _0x4b3e4b,
              drawingId: _0x3dffb5,
            }),
            _0x4a0388 = _0x319e27.getObjectIncludeInGroup(_0x257eeb);
          if (_0x4a0388 == null) return true;
          (_0x4a0388.setSrcRect(_0x4e0ed8), _0x4a0388.setPrstGeom(_0x2abfb5));
        });
      }),
    );
  }
  _insertShapes(_0x505e12) {
    for (let _0x5d9d92 of _0x505e12) {
      var _0x48b34a;
      let {
          unitId: _0x33c79c,
          subUnitId: _0xaa627f,
          drawingId: _0x55a39f,
        } = _0x5d9d92,
        _0x2f6550 = this._getSceneAndTransformerByDrawingSearch(_0x33c79c),
        _0x5ccdc9 =
          (_0x48b34a = _0x1b56de(this._currentUniverService, _0x33c79c)) == null
            ? undefined
            : _0x48b34a.subUnitId;
      if (_0x2f6550 == null || _0x5ccdc9 !== _0xaa627f) return;
      let _0x3de9c4 = _0x568a43({
        unitId: _0x33c79c,
        subUnitId: _0xaa627f,
        drawingId: _0x55a39f,
      });
      if (
        this._insertingShapeKeys["has"](_0x3de9c4) ||
        _0x2f6550.scene["getObjectIncludeInGroup"](_0x3de9c4) != null
      )
        return;
      let _0x47159a =
        this._drawingManagerService["getDrawingByParam"](_0x5d9d92);
      if (
        _0x47159a == null ||
        _0x47159a.drawingType !== _0x1ca1a8.DRAWING_SHAPE
      )
        return;
      if (_0x3ae025((_0x47159a.data || {}).shapeType)) {
        let _0x1ad801 = _0x47159a.transform;
        _0x1ad801 &&
          (_0x47159a.transform = {
            ..._0x1ad801,
            rotateEnabled: false,
            resizeEnabled: false,
            borderEnabled: false,
          });
      }
      this._insertingShapeKeys["add"](_0x3de9c4);
      try {
        this._sheetDrawingShapeRenderController["renderDrawingShape"](
          _0x47159a,
          _0x2f6550.scene,
        );
      } finally {
        this._insertingShapeKeys["delete"](_0x3de9c4);
      }
      queueMicrotask(() => {
        if (this._disposed) return;
        let _0x35abd4 = _0x568a43(_0x5d9d92);
        if (!_0x2f6550.scene["getObjectIncludeInGroup"](_0x35abd4)) return;
        let _0x34ee23 =
          this._drawingManagerService["getDrawingByParam"](_0x5d9d92);
        _0x34ee23 &&
          this._drawingManagerService["refreshTransform"]([_0x34ee23]);
      });
    }
  }
  _getSceneAndTransformerByDrawingSearch(_0x4ee5d7) {
    if (_0x4ee5d7 == null) return;
    let _0x5afafa = this._renderManagerService["getRenderUnitById"](_0x4ee5d7),
      _0x3af845 = _0x5afafa == null ? undefined : _0x5afafa.scene;
    return _0x3af845 == null
      ? null
      : { scene: _0x3af845, transformer: _0x3af845.getTransformerByCreate() };
  }
};
$i = X(
  [
    Y(0, _0x454da3),
    Y(1, _0x191ca0),
    Y(2, _0xa5b289),
    Y(3, _0x36fe2b),
    Y(4, _0x344f6e(_0x1763ed)),
    Y(5, _0x344f6e(Z)),
  ],
  $i,
);
const ea = {
  normal: {
    fill: _0x1a8d3f.cxnPointFill,
    stroke: _0x1a8d3f.cxnPointStroke,
    strokeWidth: _0x1a8d3f.cxnPointStrokeWidth,
  },
  highlighted: { fill: "#4285f4", stroke: "#1a73e8", strokeWidth: 2 },
};
var ta = class extends _0x3a886a {
  constructor(_0x324fed, _0x34ecc5) {
    (super(_0x324fed, _0x34ecc5),
      J(this, "_targetShapeId", ""),
      J(this, "_cxnIndex", -1),
      J(this, "_unitId", ""),
      J(this, "_subUnitId", ""),
      J(this, "_isHighlighted", false),
      _0x34ecc5 && this.setShapeProps(_0x34ecc5));
  }
  getConnectionInfo() {
    return {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      shapeId: this._targetShapeId,
      cxnIndex: this._cxnIndex,
    };
  }
  setHighlighted(_0x295caa) {
    this._isHighlighted !== _0x295caa &&
      ((this._isHighlighted = _0x295caa), this.makeDirty(true));
  }
  isHighlighted() {
    return this._isHighlighted;
  }
  setShapeProps(_0x3e9d18) {
    (_0x3e9d18.targetShapeId !== undefined &&
      (this._targetShapeId = _0x3e9d18.targetShapeId),
      _0x3e9d18.cxnIndex !== undefined && (this._cxnIndex = _0x3e9d18.cxnIndex),
      _0x3e9d18.unitId !== undefined && (this._unitId = _0x3e9d18.unitId),
      _0x3e9d18.subUnitId !== undefined &&
        (this._subUnitId = _0x3e9d18.subUnitId),
      _0x3e9d18.isHighlighted !== undefined &&
        (this._isHighlighted = _0x3e9d18.isHighlighted),
      this.transformByState({
        width: _0x3e9d18.width ?? _0x1a8d3f.cxnPointRadius * 2,
        height: _0x3e9d18.height ?? _0x1a8d3f.cxnPointRadius * 2,
      }));
  }
  _draw(_0x3c82fc) {
    let _0x3bbe83 = this._isHighlighted ? ea.highlighted : ea.normal;
    _0x16d47d.drawWith(_0x3c82fc, {
      radius: _0x1a8d3f.cxnPointRadius,
      fill: _0x3bbe83.fill,
      stroke: _0x3bbe83.stroke,
      strokeWidth: _0x3bbe83.strokeWidth,
      evented: true,
    });
  }
};
let na = class extends _0x56da22 {
  constructor(_0x4540c2, _0x2df7dd, _0x58271b, _0x58f70a) {
    (super(),
      (this._context = _0x4540c2),
      (this._renderManagerService = _0x2df7dd),
      (this._drawingManagerService = _0x58271b),
      (this._sheetsShapeService = _0x58f70a),
      J(this, "_connectionSiteObjects", []),
      J(this, "_activeTargetShapeId", null),
      J(this, "_highlightedSiteIndex", -1),
      J(this, "_currentScene", null),
      J(this, "_unitId", ""),
      J(this, "_subUnitId", ""),
      J(this, "_draggingConnectorId", null));
  }
  startConnectionDetection(_0x38aea6, _0x393053, _0x23e2ba, _0x2e228d) {
    ((this._currentScene = _0x38aea6),
      (this._unitId = _0x393053),
      (this._subUnitId = _0x23e2ba),
      (this._draggingConnectorId = _0x2e228d));
  }
  updateConnectionDetection(_0x4289ae) {
    if (!this._currentScene) return null;
    let _0x2dee23 = this._findShapeAtPoint(_0x4289ae);
    return _0x2dee23
      ? (this._activeTargetShapeId !== _0x2dee23.shapeId &&
          (this._clearConnectionSites(),
          this._showConnectionSites(_0x2dee23.shapeId, _0x2dee23.shapeModel),
          (this._activeTargetShapeId = _0x2dee23.shapeId)),
        this._findNearestConnectionSite(_0x4289ae))
      : (this._activeTargetShapeId !== null &&
          (this._clearConnectionSites(), (this._activeTargetShapeId = null)),
        null);
  }
  endConnectionDetection() {
    (this._clearConnectionSites(),
      (this._currentScene = null),
      (this._activeTargetShapeId = null),
      (this._highlightedSiteIndex = -1),
      (this._draggingConnectorId = null));
  }
  getConnectionRelation() {
    return this._activeTargetShapeId === null || this._highlightedSiteIndex < 0
      ? null
      : {
          shapeId: this._activeTargetShapeId,
          cxnIndex: this._highlightedSiteIndex,
        };
  }
  _findShapeAtPoint(_0x1497f8) {
    let _0x39b9ad = this._drawingManagerService["getDrawingData"](
      this._unitId,
      this._subUnitId,
    );
    for (let _0x23e78e of Object.keys(_0x39b9ad)) {
      if (
        _0x23e78e === this._draggingConnectorId ||
        _0x39b9ad[_0x23e78e].drawingType !== _0x1ca1a8.DRAWING_SHAPE
      )
        continue;
      let _0x41d0df = this._sheetsShapeService["getShapeModel"](
        this._unitId,
        this._subUnitId,
        _0x23e78e,
      );
      if (
        !_0x41d0df ||
        _0x3ae025(_0x41d0df.getShapeType()) ||
        _0x41d0df.getConnectionSiteList().length === 0 ||
        !this._currentScene
      )
        continue;
      let _0x353990 = _0x568a43({
          unitId: this._unitId,
          subUnitId: this._subUnitId,
          drawingId: _0x23e78e,
        }),
        _0x123bd4 = this._currentScene["getObjectIncludeInGroup"](_0x353990);
      if (!_0x123bd4) continue;
      let {
          left: _0x178259,
          top: _0x428428,
          width: _0x5dfc06,
          height: _0x3496b1,
        } = _0x123bd4.getRealBound(),
        _0x1eda00 = _0x178259 + _0x5dfc06 / 2,
        _0x369db7 = _0x428428 + _0x3496b1 / 2,
        _0x54c1dc = _0x123bd4.transform["getMatrix"](),
        _0x210832 = new _0x5ca2e3([
          _0x54c1dc[0],
          _0x54c1dc[1],
          _0x54c1dc[2],
          _0x54c1dc[3],
          _0x1eda00,
          _0x369db7,
        ]),
        _0x4ffa5c = _0x123bd4.getParent(),
        _0x1be393 = (
          _0x123bd4.isInGroup &&
          (_0x4ffa5c == null ? undefined : _0x4ffa5c.classType) ===
            _0x159d3c.GROUP
            ? _0x4ffa5c.ancestorTransform["multiply"](_0x210832)
            : _0x210832
        )
          .invert()
          .applyPoint(_0x1497f8),
        _0xadf19b = _0x5dfc06 / 2,
        _0xf7e78e = _0x3496b1 / 2;
      if (
        _0x1be393.x >= -_0xadf19b - 5 &&
        _0x1be393.x <= _0xadf19b + 5 &&
        _0x1be393.y >= -_0xf7e78e - 5 &&
        _0x1be393.y <= _0xf7e78e + 5
      )
        return { shapeId: _0x23e78e, shapeModel: _0x41d0df };
    }
    return null;
  }
  _showConnectionSites(_0x2fd5ee, _0x23486e) {
    if (!this._currentScene) return;
    let _0x3e88ab = _0x568a43({
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: _0x2fd5ee,
      }),
      _0x141614 = this._currentScene["getObjectIncludeInGroup"](_0x3e88ab);
    if (!_0x141614) return;
    let {
        left: _0x2dda6e,
        top: _0x552258,
        width: _0x4ed456,
        height: _0x54191f,
      } = _0x141614.getRealBound(),
      _0xb9461 = _0x2dda6e + _0x4ed456 / 2,
      _0x5e7d1 = _0x552258 + _0x54191f / 2,
      _0x502bf2 = _0x141614.transform["getMatrix"](),
      _0x4338db = new _0x5ca2e3([
        _0x502bf2[0],
        _0x502bf2[1],
        _0x502bf2[2],
        _0x502bf2[3],
        _0xb9461,
        _0x5e7d1,
      ]),
      _0xd015d = _0x141614.getParent(),
      _0x1986bc =
        _0x141614.isInGroup &&
        (_0xd015d == null ? undefined : _0xd015d.classType) === _0x159d3c.GROUP
          ? _0xd015d.ancestorTransform["multiply"](_0x4338db)
          : _0x4338db;
    _0x23486e.updateContext({ width: _0x4ed456, height: _0x54191f });
    let _0x27bd24 = _0x23486e.getConnectionSiteList();
    for (let _0x57b44d of _0x27bd24) {
      let _0x5bb5c0 = _0x57b44d.x - _0x4ed456 / 2,
        _0x155fdb = _0x57b44d.y - _0x54191f / 2,
        _0x506991 = _0x1986bc.applyPoint({ x: _0x5bb5c0, y: _0x155fdb }),
        _0x33ced3 = _0x506991.x,
        _0x24236f = _0x506991.y,
        _0x1e756e = new ta(
          "connection-site-" + _0x2fd5ee + "-" + _0x57b44d.index,
          {
            left: _0x33ced3 - _0x1a8d3f.cxnPointRadius,
            top: _0x24236f - _0x1a8d3f.cxnPointRadius,
            targetShapeId: _0x2fd5ee,
            cxnIndex: _0x57b44d.index,
            unitId: this._unitId,
            subUnitId: this._subUnitId,
            width: _0x1a8d3f.cxnPointRadius * 2,
            height: _0x1a8d3f.cxnPointRadius * 2,
            zIndex: _0x51ebe3 + 2,
            evented: false,
          },
        );
      (this._connectionSiteObjects["push"](_0x1e756e),
        this._currentScene["addObject"](_0x1e756e, _0x51ebe3 + 2));
    }
  }
  _findNearestConnectionSite(_0x49614b) {
    let _0x32c920 = null,
      _0x1a60fc = 1 / 0,
      _0x3a27f9 = null;
    for (let _0x36a113 of this._connectionSiteObjects) {
      let _0x5652be = _0x36a113.left + _0x1a8d3f.cxnPointRadius,
        _0x5f327f = _0x36a113.top + _0x1a8d3f.cxnPointRadius,
        _0x46aff0 = _0x49614b.x - _0x5652be,
        _0x2aeb27 = _0x49614b.y - _0x5f327f,
        _0x2515b6 = Math.sqrt(_0x46aff0 * _0x46aff0 + _0x2aeb27 * _0x2aeb27);
      _0x2515b6 < _0x1a60fc &&
        ((_0x1a60fc = _0x2515b6),
        (_0x32c920 = _0x36a113),
        (_0x3a27f9 = { x: _0x5652be, y: _0x5f327f }));
    }
    let _0xb63dff =
      _0x1a60fc <= 10 && _0x32c920
        ? _0x32c920.getConnectionInfo().cxnIndex
        : -1;
    if (_0xb63dff !== this._highlightedSiteIndex) {
      for (let _0x52765f of this._connectionSiteObjects) {
        let _0x5480d6 = _0x52765f.getConnectionInfo();
        _0x52765f.setHighlighted(_0x5480d6.cxnIndex === _0xb63dff);
      }
      this._highlightedSiteIndex = _0xb63dff;
    }
    if (_0x1a60fc <= 10 && _0x32c920 && _0x3a27f9) {
      let _0x148600 = _0x32c920.getConnectionInfo(),
        _0x330306 = this._getConnectionSiteAngle(
          _0x148600.shapeId,
          _0x148600.cxnIndex,
        );
      return {
        shapeId: _0x148600.shapeId,
        cxnIndex: _0x148600.cxnIndex,
        unitId: _0x148600.unitId,
        subUnitId: _0x148600.subUnitId,
        worldPoint: _0x3a27f9,
        angle: _0x330306,
      };
    }
    return null;
  }
  _getConnectionSiteAngle(_0x270ac, _0x3b9b19) {
    let _0x1bab5c = this._sheetsShapeService["getShapeModel"](
      this._unitId,
      this._subUnitId,
      _0x270ac,
    );
    if (!_0x1bab5c) return 0;
    let _0x5ed8a9 = this._drawingManagerService["getDrawingByParam"]({
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: _0x270ac,
    });
    if (!(_0x5ed8a9 != null && _0x5ed8a9.transform)) return 0;
    let {
      width: _0x1b53d4 = 0,
      height: _0x355a63 = 0,
      flipX: _0x435128 = false,
      flipY: _0x185848 = false,
    } = _0x5ed8a9.transform;
    _0x1bab5c.updateContext({ width: _0x1b53d4, height: _0x355a63 });
    let _0x9ca28e = _0x1bab5c
      .getConnectionSiteList()
      .find((_0x4812f4) => _0x4812f4.index === _0x3b9b19);
    if (!_0x9ca28e) return 0;
    let _0x48f12b = _0x9ca28e.ang / 60000;
    return (
      _0x435128 && (_0x48f12b = 180 - _0x48f12b),
      _0x185848 && (_0x48f12b = -_0x48f12b),
      (_0x48f12b = ((_0x48f12b % 360) + 360) % 360),
      _0x48f12b
    );
  }
  _clearConnectionSites() {
    for (let _0x220015 of this._connectionSiteObjects) _0x220015.dispose();
    ((this._connectionSiteObjects = []), (this._highlightedSiteIndex = -1));
  }
  dispose() {
    (this._clearConnectionSites(), super.dispose());
  }
};
na = X(
  [
    Y(1, _0x344f6e(_0x191ca0)),
    Y(2, _0x344f6e(_0xa5b289)),
    Y(3, _0x344f6e(_0x1e4684)),
  ],
  na,
);
let ra = class extends _0x56da22 {
  constructor(_0x1f1da9, _0x34d38a, _0x6eeb9b, _0x3af84b, _0x43e911) {
    (super(),
      (this._sheetSkeletonService = _0x1f1da9),
      (this._sheetClipboardService = _0x34d38a),
      (this._sheetDrawingService = _0x6eeb9b),
      (this._shapeService = _0x3af84b),
      (this._groupCopyPasteController = _0x43e911),
      J(this, "_copyInfo", undefined),
      this._initCopyPaste(),
      this._registerGroupFeaturePasteHook());
  }
  get _focusedDrawings() {
    return this._sheetDrawingService["getFocusDrawings"]();
  }
  _registerGroupFeaturePasteHook() {
    this._groupCopyPasteController["registerFeaturePasteHook"](
      ({
        fromUnitId: _0x53869b,
        fromSubUnitId: _0xbda45d,
        toUnitId: _0x25d964,
        toSubUnitId: _0x2e21b7,
        idMap: _0x4049d4,
      }) => {
        let _0x417708 = [],
          _0x53beca = [];
        for (let [_0x389124, _0x2072c8] of _0x4049d4.entries()) {
          let _0x48e33b = this._shapeService["getShapeModel"](
            _0x53869b,
            _0xbda45d,
            _0x389124,
          );
          if (!_0x48e33b) continue;
          let _0x6d4519 = _0x48e33b.getShapeType(),
            _0x8061af = JSON.parse(JSON.stringify(_0x48e33b.getShapeData()));
          if (_0x8061af.relation) {
            var _0x1d677f, _0x3bdf0c;
            let _0x20e43b =
                (_0x1d677f = _0x8061af.relation["from"]) == null
                  ? undefined
                  : _0x1d677f.shapeId,
              _0x44b2f9 =
                (_0x3bdf0c = _0x8061af.relation["to"]) == null
                  ? undefined
                  : _0x3bdf0c.shapeId,
              _0x2651ff = !_0x20e43b || _0x4049d4.has(_0x20e43b),
              _0x2774e4 = !_0x44b2f9 || _0x4049d4.has(_0x44b2f9);
            (_0x2651ff && _0x20e43b && _0x8061af.relation["from"]
              ? (_0x8061af.relation["from"] = {
                  ..._0x8061af.relation["from"],
                  shapeId: _0x4049d4.get(_0x20e43b),
                })
              : (_0x8061af.relation["from"] = undefined),
              _0x2774e4 && _0x44b2f9 && _0x8061af.relation["to"]
                ? (_0x8061af.relation["to"] = {
                    ..._0x8061af.relation["to"],
                    shapeId: _0x4049d4.get(_0x44b2f9),
                  })
                : (_0x8061af.relation["to"] = undefined));
          }
          (_0x417708.push({
            id: _0x16d69c.id,
            params: {
              unitId: _0x25d964,
              subUnitId: _0x2e21b7,
              shapeId: _0x2072c8,
              shapeType: _0x6d4519,
              shapeData: _0x8061af,
            },
          }),
            _0x53beca.push({
              id: _0xc6307.id,
              params: {
                unitId: _0x25d964,
                subUnitId: _0x2e21b7,
                shapeId: _0x2072c8,
              },
            }));
        }
        return { redos: _0x417708, undos: _0x53beca };
      },
    );
  }
  _initCopyPaste() {
    this.disposeWithMe(
      this._sheetClipboardService["addClipboardHook"]({
        id: "sheets-shape-ui",
        onBeforeCopyFocusedObject: (_0x2fb121, _0x2aaa83, _0x454bab) => {
          this._copyInfo = null;
          let _0x5f20dc = this._focusedDrawings["filter"](
            (_0x66478b) => _0x66478b.drawingType === _0x1ca1a8.DRAWING_SHAPE,
          );
          return _0x5f20dc.length === 0
            ? false
            : ((this._copyInfo = {
                unitId: _0x2fb121,
                subUnitId: _0x2aaa83,
                copyType: _0x454bab,
                drawings: _0x5f20dc,
              }),
              true);
        },
        onBeforeCopy: (_0x12e08f, _0x3d7702, _0x59b063, _0x57c45e) => {
          ((this._copyInfo = null),
            this._createCopyInfoByRange(
              _0x12e08f,
              _0x3d7702,
              _0x59b063,
              _0x57c45e,
            ));
        },
        onPasteCells: (_0x18aa71, _0x54570d, _0x4e48ab, _0x27ad14) => {
          if (!_0x27ad14.copyId || !_0x18aa71 || !this._copyInfo)
            return { redos: [], undos: [] };
          let { pasteType: _0x30e0b3 } = _0x27ad14;
          return _0x30e0b3 === _0x4a7d5c.DEFAULT_PASTE
            ? this._generatePasteMutations(
                _0x54570d,
                this._copyInfo["copyType"] === _0x5b0d70.CUT,
              )
            : { redos: [], undos: [] };
        },
      }),
    );
  }
  _createCopyInfoByRange(_0x1d69d9, _0x3303b4, _0x47f6d2, _0x25da1f) {
    let _0x19e648 = this._sheetSkeletonService["getSkeleton"](
      _0x1d69d9,
      _0x3303b4,
    );
    if (!_0x19e648) return;
    let _0x208394 = _0x22c1a3(_0x19e648, _0x47f6d2);
    if (!_0x208394) return;
    let {
        startX: _0x19dffa,
        endX: _0xb12035,
        startY: _0x2f4c66,
        endY: _0x3f05c3,
      } = _0x208394,
      _0x442c48 = this._sheetDrawingService["getDrawingData"](
        _0x1d69d9,
        _0x3303b4,
      ),
      _0xedd032 = [];
    for (let [_0x966d6f, _0x1f69d2] of Object.entries(_0x442c48)) {
      if (_0x1f69d2.drawingType !== _0x1ca1a8.DRAWING_SHAPE) continue;
      let { transform: _0x58708f } = _0x1f69d2;
      if (!_0x58708f) continue;
      let {
        left: _0x63e49 = 0,
        top: _0x2a8897 = 0,
        width: _0x3f2ebd = 0,
        height: _0x495f4b = 0,
      } = _0x58708f;
      _0x19dffa <= _0x63e49 &&
        _0xb12035 >= _0x63e49 + _0x3f2ebd &&
        _0x2f4c66 <= _0x2a8897 &&
        _0x3f05c3 >= _0x2a8897 + _0x495f4b &&
        _0xedd032.push(_0x1f69d2);
    }
    _0xedd032.length > 0 &&
      (this._copyInfo = {
        unitId: _0x1d69d9,
        subUnitId: _0x3303b4,
        copyType: _0x25da1f,
        copyRange: _0x47f6d2,
        drawings: _0xedd032,
      });
  }
  _generatePasteMutations(_0x486dce, _0x533d96) {
    let {
        unitId: _0x510cb8,
        subUnitId: _0x595617,
        range: _0x18cb9f,
      } = _0x486dce,
      _0x12966b = this._sheetSkeletonService["getSkeleton"](
        _0x510cb8,
        _0x595617,
      );
    if (!_0x12966b) return { redos: [], undos: [] };
    let _0x42180a = _0xefd0e7(_0x18cb9f),
      {
        unitId: _0x2aadab,
        subUnitId: _0x31ab87,
        copyRange: _0x5d7a2f,
        drawings: _0x43ff25,
      } = this._copyInfo,
      _0x36d7c4 = this._sheetSkeletonService["getSkeleton"](
        _0x2aadab,
        _0x31ab87,
      );
    if (!_0x36d7c4) return { redos: [], undos: [] };
    let _0x3ab62c;
    if (!_0x5d7a2f) {
      let _0x236ef0 = 1 / 0,
        _0x1c1516 = 1 / 0;
      for (let _0x13c8a7 of _0x43ff25) {
        let { left: _0x5ec7c5 = 0, top: _0x46ea66 = 0 } =
          _0x13c8a7.transform ?? {};
        (_0x5ec7c5 < _0x236ef0 && (_0x236ef0 = _0x5ec7c5),
          _0x46ea66 < _0x1c1516 && (_0x1c1516 = _0x46ea66));
      }
      _0x236ef0 !== 1 / 0 &&
        _0x1c1516 !== 1 / 0 &&
        (_0x3ab62c = { left: _0x236ef0, top: _0x1c1516 });
    }
    let _0x3882cf = new Map();
    if (!_0x533d96) {
      for (let _0x394d4e of _0x43ff25)
        _0x3882cf.set(_0x394d4e.drawingId, _0x11b425());
    }
    let _0xb603d3 = [],
      _0x415548 = [];
    for (let _0x23f000 of _0x43ff25) {
      let {
        drawingId: _0x32c355,
        transform: _0x329118,
        sheetTransform: _0x532f7e,
      } = _0x23f000;
      if (!_0x329118 || !_0x532f7e) continue;
      let _0x45ec45 = this._updateTransform(
        { transform: _0x329118, sheetTransform: _0x532f7e },
        { skeleton: _0x36d7c4, range: _0x5d7a2f },
        { skeleton: _0x12966b, range: _0x42180a },
        _0x3ab62c,
      );
      if (_0x533d96) {
        let { redos: _0x906e91, undos: _0x2911e7 } =
          this._generateCutPasteMutations({
            fromUnitId: _0x2aadab,
            fromSubUnitId: _0x31ab87,
            toUnitId: _0x510cb8,
            toSubUnitId: _0x595617,
            drawing: _0x23f000,
            newTransforms: _0x45ec45,
          });
        (_0xb603d3.push(..._0x906e91), _0x415548.push(..._0x2911e7));
        continue;
      }
      let { redos: _0x4cc04a, undos: _0x8ced91 } =
        this._generateCopyPasteMutations({
          toUnitId: _0x510cb8,
          toSubUnitId: _0x595617,
          drawing: _0x23f000,
          newTransforms: _0x45ec45,
          newDrawingId: _0x3882cf.get(_0x32c355),
          idMap: _0x3882cf,
        });
      (_0xb603d3.push(..._0x4cc04a), _0x415548.push(..._0x8ced91));
    }
    return { redos: _0xb603d3, undos: _0x415548 };
  }
  _generateCutPasteMutations(_0x898fe) {
    let {
        fromUnitId: _0x4feb16,
        fromSubUnitId: _0x4e9a1b,
        toUnitId: _0x4f787b,
        toSubUnitId: _0x2bc9da,
        drawing: _0x5dbdfe,
        newTransforms: _0x28dd2d,
      } = _0x898fe,
      _0x5c32d7 = {
        ..._0x5dbdfe,
        unitId: _0x4f787b,
        subUnitId: _0x2bc9da,
        transform: _0x28dd2d.transform,
        sheetTransform: _0x28dd2d.sheetTransform,
      };
    if (_0x4f787b === _0x4feb16 && _0x2bc9da === _0x4e9a1b) {
      let {
        redo: _0x458dfe,
        undo: _0x23fbf8,
        objects: _0x417e53,
      } = this._sheetDrawingService["getBatchUpdateOp"]([_0x5c32d7]);
      return {
        redos: [
          {
            id: _0x58efe4.id,
            params: {
              unitId: _0x4f787b,
              subUnitId: _0x2bc9da,
              type: _0x1caec9.UPDATE,
              op: _0x458dfe,
              objects: _0x417e53,
            },
          },
        ],
        undos: [
          {
            id: _0x58efe4.id,
            params: {
              unitId: _0x4f787b,
              subUnitId: _0x2bc9da,
              type: _0x1caec9.UPDATE,
              op: _0x23fbf8,
              objects: _0x417e53,
            },
          },
        ],
      };
    } else {
      let _0x9f00f4 = this._sheetDrawingService["getBatchRemoveOp"]([
          _0x5dbdfe,
        ]),
        _0x5c91bc = this._sheetDrawingService["getBatchAddOp"]([_0x5c32d7]),
        _0x4a84d2 = this._shapeService["getShapeModel"](
          _0x5dbdfe.unitId,
          _0x5dbdfe.subUnitId,
          _0x5dbdfe.drawingId,
        );
      if (!_0x4a84d2) return { redos: [], undos: [] };
      let _0x271494 = _0x4a84d2.getShapeType(),
        _0x316923 = JSON.parse(JSON.stringify(_0x4a84d2.getShapeData()));
      return {
        redos: [
          {
            id: _0x58efe4.id,
            params: {
              unitId: _0x4feb16,
              subUnitId: _0x4e9a1b,
              type: _0x1caec9.REMOVE,
              op: _0x9f00f4.redo,
              objects: _0x9f00f4.objects,
            },
          },
          {
            id: _0xc6307.id,
            params: {
              unitId: _0x4feb16,
              subUnitId: _0x4e9a1b,
              shapeId: _0x5dbdfe.drawingId,
            },
          },
          {
            id: _0x58efe4.id,
            params: {
              unitId: _0x4f787b,
              subUnitId: _0x2bc9da,
              type: _0x1caec9.INSERT,
              op: _0x5c91bc.redo,
              objects: _0x5c91bc.objects,
            },
          },
          {
            id: _0x16d69c.id,
            params: {
              unitId: _0x4f787b,
              subUnitId: _0x2bc9da,
              shapeId: _0x5dbdfe.drawingId,
              shapeType: _0x271494,
              shapeData: _0x316923,
            },
          },
        ],
        undos: [
          {
            id: _0x58efe4.id,
            params: {
              unitId: _0x4feb16,
              subUnitId: _0x4e9a1b,
              type: _0x1caec9.INSERT,
              op: _0x9f00f4.undo,
              objects: _0x9f00f4.objects,
            },
          },
          {
            id: _0x16d69c.id,
            params: {
              unitId: _0x4feb16,
              subUnitId: _0x4e9a1b,
              shapeId: _0x5dbdfe.drawingId,
              shapeType: _0x271494,
              shapeData: _0x316923,
            },
          },
          {
            id: _0x58efe4.id,
            params: {
              unitId: _0x4f787b,
              subUnitId: _0x2bc9da,
              type: _0x1caec9.REMOVE,
              op: _0x5c91bc.undo,
              objects: _0x5c91bc.objects,
            },
          },
          {
            id: _0xc6307.id,
            params: {
              unitId: _0x4f787b,
              subUnitId: _0x2bc9da,
              shapeId: _0x5dbdfe.drawingId,
            },
          },
        ],
      };
    }
  }
  _generateCopyPasteMutations(_0x2fe468) {
    let {
        toUnitId: _0x160c88,
        toSubUnitId: _0x24c34a,
        drawing: _0x581b70,
        newTransforms: _0x2fa0a7,
        newDrawingId: _0x254ab6,
        idMap: _0x174a24,
      } = _0x2fe468,
      _0x5c4b9b = {
        ..._0x581b70,
        unitId: _0x160c88,
        subUnitId: _0x24c34a,
        drawingId: _0x254ab6,
        transform: _0x2fa0a7.transform,
        sheetTransform: _0x2fa0a7.sheetTransform,
      },
      {
        redo: _0x1c20c9,
        undo: _0x453a78,
        objects: _0x3692ca,
      } = this._sheetDrawingService["getBatchAddOp"]([_0x5c4b9b]),
      _0x2d68ed = this._shapeService["getShapeModel"](
        _0x581b70.unitId,
        _0x581b70.subUnitId,
        _0x581b70.drawingId,
      );
    if (!_0x2d68ed) return { redos: [], undos: [] };
    let _0x3b3219 = _0x2d68ed.getShapeType(),
      _0x20d157 = JSON.parse(JSON.stringify(_0x2d68ed.getShapeData()));
    if (_0x20d157.relation) {
      var _0x5050d8, _0xa7142d;
      let _0x12f137 =
          (_0x5050d8 = _0x20d157.relation["from"]) == null
            ? undefined
            : _0x5050d8.shapeId,
        _0x1e20a7 =
          (_0xa7142d = _0x20d157.relation["to"]) == null
            ? undefined
            : _0xa7142d.shapeId,
        _0x4cff56 = !_0x12f137 || _0x174a24.has(_0x12f137),
        _0x827db7 = !_0x1e20a7 || _0x174a24.has(_0x1e20a7);
      (_0x4cff56 && _0x12f137 && _0x20d157.relation["from"]
        ? (_0x20d157.relation["from"] = {
            ..._0x20d157.relation["from"],
            shapeId: _0x174a24.get(_0x12f137),
          })
        : (_0x20d157.relation["from"] = undefined),
        _0x827db7 && _0x1e20a7 && _0x20d157.relation["to"]
          ? (_0x20d157.relation["to"] = {
              ..._0x20d157.relation["to"],
              shapeId: _0x174a24.get(_0x1e20a7),
            })
          : (_0x20d157.relation["to"] = undefined));
    }
    return {
      redos: [
        {
          id: _0x58efe4.id,
          params: {
            unitId: _0x160c88,
            subUnitId: _0x24c34a,
            type: _0x1caec9.INSERT,
            op: _0x1c20c9,
            objects: _0x3692ca,
          },
        },
        {
          id: _0x16d69c.id,
          params: {
            unitId: _0x160c88,
            subUnitId: _0x24c34a,
            shapeId: _0x254ab6,
            shapeType: _0x3b3219,
            shapeData: _0x20d157,
          },
        },
      ],
      undos: [
        {
          id: _0x58efe4.id,
          params: {
            unitId: _0x160c88,
            subUnitId: _0x24c34a,
            type: _0x1caec9.REMOVE,
            op: _0x453a78,
            objects: _0x3692ca,
          },
        },
        {
          id: _0xc6307.id,
          params: {
            unitId: _0x160c88,
            subUnitId: _0x24c34a,
            shapeId: _0x254ab6,
          },
        },
      ],
    };
  }
  _updateTransform(_0x516166, _0x51f45c, _0x426d03, _0x523268) {
    let { range: _0x3a5b22, skeleton: _0x2765a3 } = _0x51f45c,
      { range: _0x1ca8b3, skeleton: _0x541513 } = _0x426d03,
      { transform: _0x1bd8ab, sheetTransform: _0x25d0ae } = _0x516166,
      _0x2aeb3d = { ..._0x1bd8ab };
    if (_0x3a5b22) {
      let _0x494ba4 = _0x22c1a3(_0x2765a3, _0x3a5b22),
        _0x425867 = _0x22c1a3(_0x541513, _0x1ca8b3);
      if (_0x494ba4 && _0x425867) {
        let _0x8075b8 = _0x425867.startX - _0x494ba4.startX,
          _0x3cb4a9 = _0x425867.startY - _0x494ba4.startY;
        ((_0x2aeb3d.left = (_0x2aeb3d.left ?? 0) + _0x8075b8),
          (_0x2aeb3d.top = (_0x2aeb3d.top ?? 0) + _0x3cb4a9));
      }
    } else {
      let _0x3ea116 = _0x22c1a3(_0x541513, _0x1ca8b3);
      if (_0x523268 && _0x3ea116) {
        let _0x35af81 = (_0x2aeb3d.left ?? 0) - _0x523268.left,
          _0xa13835 = (_0x2aeb3d.top ?? 0) - _0x523268.top;
        ((_0x2aeb3d.left = _0x3ea116.startX + _0x35af81),
          (_0x2aeb3d.top = _0x3ea116.startY + _0xa13835));
      } else
        ((_0x2aeb3d.left = _0x3ea116 == null ? undefined : _0x3ea116.startX),
          (_0x2aeb3d.top = _0x3ea116 == null ? undefined : _0x3ea116.startY));
    }
    return {
      transform: _0x2aeb3d,
      sheetTransform: _0x318d77(_0x2aeb3d, _0x541513) ?? _0x25d0ae,
    };
  }
};
ra = X(
  [
    Y(0, _0x344f6e(_0x5209d1)),
    Y(1, _0x344f6e(_0x41eecb)),
    Y(2, _0x344f6e(_0x3b4870)),
    Y(3, _0x344f6e(_0x1e4684)),
    Y(4, _0x344f6e(_0x36733f)),
  ],
  ra,
);
var ia = class extends _0x3a886a {
  constructor(_0xb7eb60, _0x2f895f) {
    (super(_0xb7eb60, _0x2f895f),
      J(this, "_shapeId", null),
      J(this, "_index", null),
      J(this, "_unitId", null),
      J(this, "_subUnitId", null),
      J(this, "_isStartConnectorPoint", false),
      _0x2f895f && this.setShapeProps(_0x2f895f));
  }
  getDrawingSearch() {
    return {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: this._shapeId,
    };
  }
  setShapeProps(_0x4f237e) {
    (_0x4f237e.shapeId !== undefined && (this._shapeId = _0x4f237e.shapeId),
      _0x4f237e.unitId !== undefined && (this._unitId = _0x4f237e.unitId),
      _0x4f237e.subUnitId !== undefined &&
        (this._subUnitId = _0x4f237e.subUnitId),
      _0x4f237e.isStartConnectorPoint !== undefined &&
        (this._isStartConnectorPoint = _0x4f237e.isStartConnectorPoint),
      this.transformByState({
        width: _0x4f237e.width,
        height: _0x4f237e.height,
      }));
  }
  _draw(_0x40596c) {
    _0x16d47d.drawWith(_0x40596c, {
      radius: _0x1a8d3f.cxnPointRadius,
      fill: _0x1a8d3f.cxnPointFill,
      stroke: _0x1a8d3f.cxnPointStroke,
      strokeWidth: _0x1a8d3f.cxnPointStrokeWidth,
      evented: true,
    });
  }
};
let aa = class extends _0x56da22 {
  constructor(
    _0x2753bf,
    _0x7cac81,
    _0x145a9d,
    _0x2a11f5,
    _0x1026ee,
    _0x5a3f87,
    _0x521267,
    _0x191295,
  ) {
    (super(),
      (this._context = _0x2753bf),
      (this._commandService = _0x7cac81),
      (this._renderManagerService = _0x145a9d),
      (this._drawingManagerService = _0x2a11f5),
      (this._univerInstanceService = _0x1026ee),
      (this._sheetsShapeService = _0x5a3f87),
      (this._sheetShapeAdjustController = _0x521267),
      (this._sheetBasicShapeConnectionPointController = _0x191295),
      J(this, "_activeShapeId", undefined),
      J(this, "_unitId", undefined),
      J(this, "_subUnitId", undefined),
      J(this, "_connectorObjects", []),
      J(this, "_baseDrawingRect", {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        flipX: false,
        flipY: false,
      }),
      J(this, "_activeShapeModel", undefined),
      J(this, "_isConnecting", false),
      J(this, "_isDrawingShapePointDown", false),
      J(this, "_hasReset", false),
      J(this, "_cxtHandlerPointerMove", undefined),
      J(this, "_cxtHandlerPointerUp", undefined),
      J(this, "_currentConnectionTarget", null),
      this._initialize());
  }
  _initialize() {
    (this._registerDrawingFocusChangeHandler(),
      this._registerDrawingMoveHandler());
  }
  _getDrawingRect() {
    if (!this._unitId || !this._subUnitId || !this._activeShapeId) return;
    let _0xdaa0d3 = {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._activeShapeId,
      },
      { transform: _0x2e259e } =
        this._drawingManagerService["getDrawingByParam"](_0xdaa0d3);
    if (_0x2e259e)
      return {
        left: _0x2e259e.left || 0,
        top: _0x2e259e.top || 0,
        width: _0x2e259e.width || 0,
        height: _0x2e259e.height || 0,
        flipX: _0x2e259e.flipX || false,
        flipY: _0x2e259e.flipY || false,
        angle: _0x2e259e.angle,
      };
  }
  _addShapeConnectorHandlerObjects() {
    if (
      this._unitId === undefined ||
      this._subUnitId === undefined ||
      this._activeShapeId === undefined
    )
      return;
    let _0xd9e5b8 = this._renderManagerService["getRenderUnitById"](
      this._unitId,
    );
    if (!_0xd9e5b8 || !_0xd9e5b8.with(_0x2bd78f).getCurrentSkeleton()) return;
    let { scene: _0x435685 } = _0xd9e5b8,
      _0x5d0638 = this._getDrawingRect();
    if (!_0x5d0638) return;
    let _0x6209eb = this._sheetsShapeService["getShapeModel"](
      this._unitId,
      this._subUnitId,
      this._activeShapeId,
    );
    if (!_0x6209eb || !_0x3ae025(_0x6209eb.getShapeType())) return;
    let _0xb677b4 = _0x6209eb.getConnectorLinePoints();
    if (_0xb677b4.length < 2) return;
    let _0x2a0625 = new _0x289e78(_0x5d0638),
      _0x13e353 = _0xb677b4[0],
      _0x2a619f = _0xb677b4[_0xb677b4.length - 1],
      _0x4b861d = _0x2a0625.localToWorld(_0x13e353),
      _0x178c80 = _0x2a0625.localToWorld(_0x2a619f);
    (this._addShapeConnectorHandlerObject(_0x435685, { ..._0x4b861d }, true),
      this._addShapeConnectorHandlerObject(_0x435685, { ..._0x178c80 }, false));
  }
  _addShapeConnectorHandlerObject(_0x2dd6ad, _0x2d2a21, _0x4ccb84) {
    if (
      this._activeShapeId === undefined ||
      this._unitId === undefined ||
      this._subUnitId === undefined
    )
      return;
    let _0x274bb3 =
        "connector-handler-" +
        this._unitId +
        "-" +
        this._subUnitId +
        "-" +
        this._activeShapeId +
        "-" +
        (_0x4ccb84 ? "start" : "end"),
      _0x2f1a06 = _0x2dd6ad.getObjectIncludeInGroup(_0x274bb3);
    if (_0x2f1a06) {
      _0x2f1a06.transformByState({
        left: _0x2d2a21.x - _0x1a8d3f.cxnPointRadius,
        top: _0x2d2a21.y - _0x1a8d3f.cxnPointRadius,
      });
      return;
    }
    let _0x2803b0 = new ia(_0x274bb3, {
      left: _0x2d2a21.x - _0x1a8d3f.cxnPointRadius,
      top: _0x2d2a21.y - _0x1a8d3f.cxnPointRadius,
      shapeId: this._activeShapeId,
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      isStartConnectorPoint: _0x4ccb84,
      width: _0x1a8d3f.cxnPointRadius * 2,
      height: _0x1a8d3f.cxnPointRadius * 2,
      zIndex: _0x51ebe3 + 1,
      evented: true,
    });
    (this._connectorObjects["push"](_0x2803b0),
      this._attachConnectorObjectEvent(_0x2803b0, _0x2dd6ad, _0x4ccb84),
      _0x2dd6ad.addObject(_0x2803b0, _0x51ebe3 + 1));
  }
  _getScrollInfo(_0x12488b, _0x182c44) {
    var _0x17101d;
    let _0x203b22 = { x: 0, y: 0 };
    if (!_0x12488b || !_0x182c44) return _0x203b22;
    let _0x5d7d54 = this._renderManagerService["getRenderUnitById"](_0x12488b);
    if (!_0x5d7d54 || !_0x5d7d54.with(_0x2bd78f).getSkeleton(_0x182c44))
      return _0x203b22;
    let _0x49dff1 = _0x5d7d54.with(_0x54a8d4),
      _0x13d9f1 =
        _0x49dff1 == null ? undefined : _0x49dff1.getCurrentScrollState();
    if (!_0x13d9f1) return _0x203b22;
    let _0x2df961 =
      (_0x17101d = this._univerInstanceService["getUnit"](_0x12488b)) == null
        ? undefined
        : _0x17101d.getSheetBySheetId(_0x182c44);
    if (!_0x2df961) return _0x203b22;
    let _0x44efbc = _0xeb9ad5(
      _0x13d9f1.sheetViewStartRow,
      _0x13d9f1.sheetViewStartColumn,
      _0x5d7d54.scene,
      _0x2df961,
    );
    return _0x44efbc
      ? { x: _0x44efbc.viewportScrollX, y: _0x44efbc.viewportScrollY }
      : _0x203b22;
  }
  _getZoomRatio(_0x420262, _0x3fc479) {
    var _0x43ca99;
    let _0x3cf907 =
      (_0x43ca99 = this._univerInstanceService["getUnit"](_0x420262)) == null
        ? undefined
        : _0x43ca99.getSheetBySheetId(_0x3fc479);
    return (_0x3cf907 == null ? undefined : _0x3cf907.getZoomRatio()) ?? 1;
  }
  _handleConnectorPointerUp(
    _0x3ae3d4,
    _0x138436,
    _0x2059c2,
    _0x40418a,
    _0x255f40,
  ) {
    (this._cxtHandlerPointerMove["unsubscribe"](),
      this._cxtHandlerPointerUp["unsubscribe"](),
      this._sheetShapeAdjustController["refreshAdjustControls"]());
    let _0x6925c = this._currentConnectionTarget;
    this._sheetBasicShapeConnectionPointController["endConnectionDetection"]();
    let _0x58c305 = this._getScrollInfo(this._unitId, this._subUnitId),
      _0x2b6afd = this._getZoomRatio(this._unitId, this._subUnitId),
      _0xdd615e = {
        x: _0x2059c2.offsetX / _0x2b6afd + _0x58c305.x,
        y: _0x2059c2.offsetY / _0x2b6afd + _0x58c305.y,
      },
      _0x4d52bd = _0x6925c ? _0x6925c.worldPoint : _0xdd615e,
      _0x4ed9d5 = _0x40418a
        ? this._activeShapeModel["getEndConnectInfo"]()
        : this._activeShapeModel["getStartConnectInfo"](),
      _0xb0949e = this._activeShapeModel["getShapeType"]();
    (_0x4ed9d5
      ? this._handleConnectedEndpointPointerUp(
          _0x4ed9d5,
          _0x4d52bd,
          _0x40418a,
          _0x6925c,
          _0x255f40,
        )
      : this._handleFreeEndpointPointerUp(
          _0x138436,
          _0x4d52bd,
          _0x40418a,
          _0x6925c,
          _0x255f40,
          _0xb0949e,
        ),
      (this._isConnecting = false),
      (this._hasReset = false),
      (this._currentConnectionTarget = null),
      _0x3ae3d4.enableObjectsEvent());
  }
  _handleFreeEndpointPointerUp(
    _0x14d7e8,
    _0x547930,
    _0xa0f831,
    _0x5aaeba,
    _0x5456f2,
    _0x56fb86,
  ) {
    let _0xe09b9d =
        _0x56fb86 === _0xcf4f0c.Line ||
        _0x56fb86 === _0xcf4f0c.StraightConnector1,
      _0x577967 = _0xa0f831 ? _0x547930 : _0x14d7e8,
      _0x18e446 = _0xa0f831 ? _0x14d7e8 : _0x547930,
      _0x3b2157 = this._activeShapeModel["getConnectorLinePoints"](),
      _0x55da51 = _0x1bd39e(this._activeShapeModel["getShapeType"]()),
      _0x17a4ee = _0x289e78.getBentTypeFromPoints(_0x3b2157, _0x55da51),
      _0x5d162f = _0xe09b9d
        ? _0x289e78.computeStraightConnectorLayout(_0x577967, _0x18e446)
        : _0x289e78.computeConnectorResizeLayout(
            _0x14d7e8,
            _0x547930,
            _0xa0f831,
            _0x17a4ee,
          );
    _0x5aaeba
      ? this._executeConnectionCommand(
          _0x5d162f,
          _0x5aaeba,
          _0xa0f831,
          _0x5456f2,
        )
      : this._executeResizeCommand(_0x5d162f, _0x5456f2);
  }
  _handleConnectedEndpointPointerUp(
    _0x8274dc,
    _0x6355eb,
    _0x414a52,
    _0xfa81a3,
    _0x220a47,
  ) {
    let _0x22a25e = this._getConnectPointInfo(_0x8274dc);
    if (!_0x22a25e) return;
    let _0x347d01 = _0xfa81a3
        ? _0xfa81a3.angle
        : this._calculateFreeEndpointAngle(_0x22a25e.point, _0x6355eb),
      _0x4141ca;
    if (_0xfa81a3) {
      let _0x21ffd0 = this._drawingManagerService["getDrawingByParam"]({
        unitId: _0xfa81a3.unitId,
        subUnitId: _0xfa81a3.subUnitId,
        drawingId: _0xfa81a3.shapeId,
      });
      if (_0x21ffd0 != null && _0x21ffd0.transform) {
        let {
          left: _0xfcf1e8 = 0,
          top: _0x56622b = 0,
          width: _0x11ad83 = 0,
          height: _0x39900b = 0,
          angle: _0x2efba6,
        } = _0x21ffd0.transform;
        _0x4141ca = _0x3a3e4f(
          {
            left: _0xfcf1e8,
            top: _0x56622b,
            width: _0x11ad83,
            height: _0x39900b,
          },
          _0x2efba6 || 0,
        );
      } else
        _0x4141ca = {
          left: _0x6355eb.x,
          top: _0x6355eb.y,
          width: 0,
          height: 0,
        };
    } else
      _0x4141ca = { left: _0x6355eb.x, top: _0x6355eb.y, width: 0, height: 0 };
    let _0x13e772 = { point: _0x6355eb, angle: _0x347d01, bounds: _0x4141ca },
      _0x291b24 = _0x414a52 ? _0x13e772 : _0x22a25e,
      _0x1004fe = _0x414a52 ? _0x22a25e : _0x13e772,
      _0xda8021 = this._activeShapeModel["getShapeType"](),
      _0x382a1f = _0x4940af(_0x291b24, _0x1004fe, _0xda8021);
    this._activeShapeModel["removeLinePoints"]();
    let _0x32f871 = _0x546e7e(_0x382a1f, _0xda8021);
    _0xfa81a3
      ? this._executeConnectedRouteConnectionCommand(
          _0x32f871,
          _0xfa81a3,
          _0x8274dc,
          _0x414a52,
          _0x220a47,
        )
      : this._executeConnectedRouteResizeCommand(
          _0x32f871,
          _0x8274dc,
          _0x414a52,
          _0x220a47,
        );
  }
  _executeConnectionCommand(_0x300956, _0x440731, _0x81ec96, _0x525da7) {
    let _0x3cf79b = this._activeShapeModel["getShapeData"]().relation,
      _0x3af198 = { ..._0x3cf79b },
      _0x393bc9 = { shapeId: _0x440731.shapeId, cxnIndex: _0x440731.cxnIndex };
    _0x81ec96 ? (_0x3af198.from = _0x393bc9) : (_0x3af198.to = _0x393bc9);
    let _0x5c74d5 = this._activeShapeModel["getShapeType"](),
      _0x2194a3 = _0x546e7e(_0x300956.worldPoints, _0x5c74d5),
      _0x4d02d8 = {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        connectorShapeId: this._activeShapeId,
        width: _0x300956.worldRect["width"],
        height: _0x300956.worldRect["height"],
        left: _0x300956.worldRect["left"],
        top: _0x300956.worldRect["top"],
        flipX: _0x300956.worldRect["flipX"] || false,
        flipY: _0x300956.worldRect["flipY"] || false,
        newAdjustValues: _0x2194a3.adjustValues,
        oldAdjustValues: _0x525da7,
        oldRelation: _0x3cf79b,
        newRelation: _0x3af198,
        newLineType: _0x2194a3.lineType,
        oldLineType: _0x5c74d5,
      };
    this._commandService["executeCommand"](_0x5011ac.id, _0x4d02d8);
  }
  _executeResizeCommand(_0x5b1b6e, _0x1c76fd) {
    let _0x5ecce2 = this._activeShapeModel["getShapeType"](),
      _0x3aa5fb = _0x546e7e(_0x5b1b6e.worldPoints, _0x5ecce2),
      _0x107309 = {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        shapeId: this._activeShapeId,
        width: _0x5b1b6e.worldRect["width"],
        height: _0x5b1b6e.worldRect["height"],
        left: _0x5b1b6e.worldRect["left"],
        top: _0x5b1b6e.worldRect["top"],
        flipX: _0x5b1b6e.worldRect["flipX"] || false,
        flipY: _0x5b1b6e.worldRect["flipY"] || false,
        angle: _0x5b1b6e.worldRect["angle"] || 0,
        newAdjustValues: _0x3aa5fb.adjustValues,
        oldAdjustValues: _0x1c76fd,
        newLineType: _0x3aa5fb.lineType,
        oldLineType: _0x5ecce2,
      };
    this._commandService["executeCommand"](_0x183f82.id, _0x107309);
  }
  _executeConnectedRouteConnectionCommand(
    _0x4c5752,
    _0x57c1b2,
    _0x4a13d2,
    _0x353d55,
    _0x1cbc48,
  ) {
    let _0x4c5226 = this._activeShapeModel["getShapeData"]().relation,
      _0x243cda = { ..._0x4c5226 },
      _0x1b450e = { shapeId: _0x57c1b2.shapeId, cxnIndex: _0x57c1b2.cxnIndex };
    _0x353d55
      ? ((_0x243cda.from = _0x1b450e), (_0x243cda.to = _0x4a13d2))
      : ((_0x243cda.from = _0x4a13d2), (_0x243cda.to = _0x1b450e));
    let _0x5aa8af = {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      connectorShapeId: this._activeShapeId,
      width: _0x4c5752.worldRect["width"],
      height: _0x4c5752.worldRect["height"],
      left: _0x4c5752.worldRect["left"],
      top: _0x4c5752.worldRect["top"],
      flipX: _0x4c5752.worldRect["flipX"] || false,
      flipY: _0x4c5752.worldRect["flipY"] || false,
      oldAdjustValues: _0x1cbc48,
      newAdjustValues: _0x4c5752.adjustValues,
      newLineType: _0x4c5752.lineType,
      rotation: _0x4c5752.rotation,
      oldRelation: _0x4c5226,
      newRelation: _0x243cda,
    };
    this._commandService["executeCommand"](_0x5011ac.id, _0x5aa8af);
  }
  _executeConnectedRouteResizeCommand(
    _0x139edc,
    _0x3c2a11,
    _0x3e1b3a,
    _0x3490c4,
  ) {
    let _0x4d79b0 = this._activeShapeModel["getShapeData"]().relation,
      _0x58f3b6 = {};
    _0x3e1b3a
      ? ((_0x58f3b6.to = _0x3c2a11), (_0x58f3b6.from = undefined))
      : ((_0x58f3b6.from = _0x3c2a11), (_0x58f3b6.to = undefined));
    let _0x1a7cf8 = {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      connectorShapeId: this._activeShapeId,
      width: _0x139edc.worldRect["width"],
      height: _0x139edc.worldRect["height"],
      left: _0x139edc.worldRect["left"],
      top: _0x139edc.worldRect["top"],
      flipX: _0x139edc.worldRect["flipX"] || false,
      flipY: _0x139edc.worldRect["flipY"] || false,
      oldAdjustValues: _0x3490c4,
      newAdjustValues: _0x139edc.adjustValues,
      newLineType: _0x139edc.lineType,
      rotation: _0x139edc.rotation,
      oldRelation: _0x4d79b0,
      newRelation: _0x58f3b6,
    };
    this._commandService["executeCommand"](_0x5011ac.id, _0x1a7cf8);
  }
  _attachConnectorObjectEvent(_0x4b22f3, _0x340157, _0x193882) {
    this.disposeWithMe(
      _0xa4b14e(
        _0x4b22f3.onPointerDown$["subscribeEvent"]((_0x17b0d2, _0x34b08f) => {
          let _0x2d0c5f = _0x4b22f3.getDrawingSearch();
          if (
            ((this._activeShapeModel = this._sheetsShapeService[
              "getShapeModel"
            ](_0x2d0c5f.unitId, _0x2d0c5f.subUnitId, _0x2d0c5f.drawingId)),
            !this._activeShapeModel)
          )
            return;
          let _0x592c67 = {};
          this._activeShapeModel["getAdjustNames"]().forEach((_0x276d66) => {
            let _0x36cba0 =
              this._activeShapeModel["getAdjustValueByName"](_0x276d66);
            _0x36cba0 !== undefined && (_0x592c67[_0x276d66] = _0x36cba0);
          });
          let _0xe63ecc = this._getDrawingRect();
          if (!_0xe63ecc) return;
          this._baseDrawingRect = { ..._0xe63ecc };
          let _0x3b265f = new _0x289e78(this._baseDrawingRect),
            _0x3a8f14 = _0x568a43({
              unitId: this._unitId,
              subUnitId: this._subUnitId,
              drawingId: this._activeShapeId,
            }),
            _0x583d1c = _0x340157.getObjectIncludeInGroup(_0x3a8f14);
          ((this._isConnecting = true),
            _0x340157.disableObjectsEvent(),
            this._sheetBasicShapeConnectionPointController[
              "startConnectionDetection"
            ](_0x340157, this._unitId, this._subUnitId, this._activeShapeId),
            (this._currentConnectionTarget = null));
          let _0xa40e3f = this._activeShapeModel["getConnectorLinePoints"](),
            _0x4f2f9c = _0xa40e3f[0],
            _0x690c5c = _0xa40e3f[_0xa40e3f.length - 1],
            _0x53896e = _0x193882
              ? _0x3b265f.localToWorld(_0x690c5c)
              : _0x3b265f.localToWorld(_0x4f2f9c);
          ((this._cxtHandlerPointerMove = _0x340157.onPointerMove$[
            "subscribeEvent"
          ]((_0x11b5d5, _0x44e342) => {
            if (!this._isConnecting || !this._activeShapeModel) return;
            this._hasReset ||=
              (this._sheetShapeAdjustController["clearAdjustControls"](),
              this._activeShapeModel["clearAdjustValue"](),
              true);
            let _0x4c5d97 = this._getScrollInfo(this._unitId, this._subUnitId),
              _0x29ab36 = this._getZoomRatio(this._unitId, this._subUnitId),
              _0x1a3dc0 = {
                x: _0x11b5d5.offsetX / _0x29ab36 + _0x4c5d97.x,
                y: _0x11b5d5.offsetY / _0x29ab36 + _0x4c5d97.y,
              },
              _0x5dd0d6 =
                this._sheetBasicShapeConnectionPointController[
                  "updateConnectionDetection"
                ](_0x1a3dc0);
            if (_0x5dd0d6) {
              let {
                shapeId: _0x2a132d,
                unitId: _0x43ae1d,
                subUnitId: _0x3f5bad,
              } = _0x5dd0d6;
              if (_0x2a132d && _0x43ae1d && _0x3f5bad) {
                let _0x1ffbe1 = _0x568a43({
                  unitId: _0x43ae1d,
                  subUnitId: _0x3f5bad,
                  drawingId: _0x2a132d,
                });
                _0x5dd0d6.angle =
                  (_0x340157.getObjectIncludeInGroup(_0x1ffbe1).angle || 0) +
                  _0x5dd0d6.angle;
              }
            }
            this._currentConnectionTarget = _0x5dd0d6;
            let _0x1b928a = _0x193882
              ? this._activeShapeModel["getEndConnectInfo"]()
              : this._activeShapeModel["getStartConnectInfo"]();
            if (_0x1b928a) {
              this._handleConnectedEndpointMove(
                _0x1b928a,
                _0x1a3dc0,
                _0x193882,
                _0x583d1c,
                _0x4b22f3,
              );
              return;
            }
            this._handleFreeEndpointMove(
              _0x1a3dc0,
              _0x53896e,
              _0x193882,
              _0x583d1c,
              _0x4b22f3,
            );
          })),
            (this._cxtHandlerPointerUp = _0x340157.onPointerUp$[
              "subscribeEvent"
            ]((_0x28863b, _0x24e60a) => {
              this._handleConnectorPointerUp(
                _0x340157,
                _0x53896e,
                _0x28863b,
                _0x193882,
                _0x592c67,
              );
            })),
            _0x34b08f.stopPropagation());
        }),
      ),
    );
  }
  _handleBasicShapeUpdateConnectorLineShape(_0x333c39, _0x28ca11, _0x132147) {
    let _0x333732 = this._sheetsShapeService["getBasicShapeRelation"](
      _0x333c39,
      _0x28ca11,
      _0x132147,
    );
    if (!_0x333732 || _0x333732.length === 0) return;
    let _0x26e2b9 = this._renderManagerService["getRenderUnitById"](_0x333c39);
    if (!_0x26e2b9) return;
    let { scene: _0x3ca589 } = _0x26e2b9;
    for (let _0x37fb01 of _0x333732) {
      let _0x5da549 = _0x37fb01.lineShapeId,
        _0x596028 = this._sheetsShapeService["getShapeModel"](
          _0x333c39,
          _0x28ca11,
          _0x5da549,
        );
      if (!_0x596028) continue;
      let _0x1fff48 = _0x596028.getStartConnectInfo(),
        _0x246c32 = _0x596028.getEndConnectInfo(),
        _0x3638c6 =
          (_0x1fff48 == null ? undefined : _0x1fff48.shapeId) === _0x132147,
        _0x3c8ca5 = _0x568a43({
          unitId: _0x333c39,
          subUnitId: _0x28ca11,
          drawingId: _0x5da549,
        }),
        _0x35012f = _0x3ca589.getObjectIncludeInGroup(_0x3c8ca5);
      if (!_0x35012f) continue;
      let _0x235b02 = this._drawingManagerService["getDrawingByParam"]({
        unitId: _0x333c39,
        subUnitId: _0x28ca11,
        drawingId: _0x5da549,
      });
      _0x235b02 != null &&
        _0x235b02.transform &&
        (_0x1fff48 && _0x246c32
          ? this._rerouteConnectorLine(
              _0x333c39,
              _0x28ca11,
              _0x5da549,
              _0x596028,
              _0x1fff48,
              _0x246c32,
              _0x35012f,
            )
          : this._moveConnectorWithShape(
              _0x333c39,
              _0x28ca11,
              _0x5da549,
              _0x596028,
              _0x3638c6 ? _0x1fff48 : _0x246c32,
              _0x3638c6,
              _0x235b02,
              _0x35012f,
            ));
    }
  }
  _rerouteConnectorLine(
    _0x409075,
    _0x3769f7,
    _0x2245f1,
    _0x5d3f4c,
    _0x2e04ad,
    _0x553cac,
    _0x210347,
  ) {
    let _0x20ee63 = this._unitId,
      _0x1f0b0e = this._subUnitId;
    ((this._unitId = _0x409075), (this._subUnitId = _0x3769f7));
    let _0x5b314b = this._getConnectPointInfo(_0x2e04ad),
      _0x1612bb = this._getConnectPointInfo(_0x553cac);
    if (
      ((this._unitId = _0x20ee63),
      (this._subUnitId = _0x1f0b0e),
      !_0x5b314b || !_0x1612bb)
    )
      return;
    let _0x220c75 = _0x5d3f4c.getShapeType(),
      _0x3c77a2 = _0x4940af(_0x5b314b, _0x1612bb, _0x220c75);
    _0x3c77a2 && _0x5d3f4c.updateLinePoints(_0x3c77a2);
    let _0x64650b = _0x546e7e(_0x3c77a2, _0x220c75);
    (_0x64650b.lineType !== _0x220c75 &&
      _0x5d3f4c.changeShapeType(_0x64650b.lineType),
      _0x5d3f4c.clearAdjustValue());
    for (let [_0x2b0cf1, _0x30d878] of Object.entries(_0x64650b.adjustValues))
      _0x5d3f4c.setAdjustValueByName(_0x2b0cf1, _0x30d878);
    (_0x5d3f4c.updateContext({
      width: _0x64650b.worldRect["width"],
      height: _0x64650b.worldRect["height"],
    }),
      _0x210347.transformByState({
        flipX: _0x64650b.worldRect["flipX"],
        flipY: _0x64650b.worldRect["flipY"],
        left: _0x64650b.worldRect["left"],
        top: _0x64650b.worldRect["top"],
        width: _0x64650b.worldRect["width"],
        height: _0x64650b.worldRect["height"],
        angle: _0x64650b.rotation,
      }),
      _0x5d3f4c.removeLinePoints());
  }
  _moveConnectorWithShape(
    _0x4aaeb0,
    _0x141517,
    _0x12e6a6,
    _0x1700b8,
    _0x5310fd,
    _0x4883e7,
    _0x52f205,
    _0x169305,
  ) {
    let _0x419a3d = this._unitId,
      _0x4e5277 = this._subUnitId;
    ((this._unitId = _0x4aaeb0), (this._subUnitId = _0x141517));
    let _0x3cac97 = this._getConnectPointInfo(_0x5310fd);
    if (((this._unitId = _0x419a3d), (this._subUnitId = _0x4e5277), !_0x3cac97))
      return;
    let {
        left: _0x470056 = 0,
        top: _0x27a6c7 = 0,
        width: _0x3b9102 = 0,
        height: _0x13505b = 0,
        flipX: _0x1b293f = false,
        flipY: _0x1a8ead = false,
      } = _0x52f205.transform,
      _0x1622b6 = _0x1700b8.getConnectorLinePoints();
    if (_0x1622b6.length < 2) return;
    let _0x4d486f = new _0x289e78({
        left: _0x470056,
        top: _0x27a6c7,
        width: _0x3b9102,
        height: _0x13505b,
        flipX: _0x1b293f,
        flipY: _0x1a8ead,
      }),
      _0x4c19b4 = _0x4883e7 ? _0x1622b6[_0x1622b6.length - 1] : _0x1622b6[0],
      _0x22ccd0 = _0x4d486f.localToWorld(_0x4c19b4),
      _0x16c5b5 = _0x289e78.computeConnectorResizeLayout(
        _0x22ccd0,
        _0x3cac97.point,
        !_0x4883e7,
      );
    (_0x169305.transformByState({
      flipX: _0x16c5b5.worldRect["flipX"],
      flipY: _0x16c5b5.worldRect["flipY"],
      left: _0x16c5b5.worldRect["left"],
      top: _0x16c5b5.worldRect["top"],
      width: _0x16c5b5.worldRect["width"],
      height: _0x16c5b5.worldRect["height"],
      angle: _0x16c5b5.worldRect["angle"],
    }),
      _0x169305.makeDirty(true));
  }
  _clearShapeConnectorHandlerObjects() {
    this._connectorObjects["length"] !== 0 &&
      (this._connectorObjects["forEach"]((_0x16c3e8) => {
        _0x16c3e8.dispose();
      }),
      (this._connectorObjects = []));
  }
  _registerDrawingMoveHandler() {
    let _0x154cfc = this._univerInstanceService["getCurrentTypeOfUnit$"](
      _0x44a53b.UNIVER_SHEET,
    );
    this.disposeWithMe(
      _0x154cfc
        .pipe(
          _0x373e57((_0xa9ef11) =>
            _0xa9ef11
              ? _0xa9ef11.activeSheet$["pipe"](
                  _0x373e57((_0x5c96b5) => {
                    if (!_0x5c96b5) return _0xf8c1f7;
                    let _0x2276bf = _0xa9ef11.getUnitId(),
                      _0x5c137f =
                        this._renderManagerService["getRenderUnitById"](
                          _0x2276bf,
                        ),
                      _0x1c78df =
                        _0x5c137f == null ? undefined : _0x5c137f.scene;
                    return _0x1c78df ? _0x54ba04(_0x1c78df) : _0xf8c1f7;
                  }),
                )
              : _0xf8c1f7,
          ),
        )
        .subscribe((_0x597f7a) => {
          let _0x41b0c9 = _0x597f7a.getTransformerByCreate();
          (this.disposeWithMe(
            _0x597f7a.onPointerMove$["subscribeEvent"]((_0x16abdb) => {
              this._isDrawingShapePointDown &&
                this._activeShapeId &&
                this._clearShapeConnectorHandlerObjects();
            }),
          ),
            this.disposeWithMe(
              _0x41b0c9.changeStart$["subscribe"]((_0x55e57e) => {
                let { objects: _0x13aa2b } = _0x55e57e;
                (this._clearShapeConnectorHandlerObjects(),
                  _0x13aa2b !== null &&
                    _0x13aa2b.size === 1 &&
                    _0x13aa2b.values().next().value instanceof yr &&
                    (this._isDrawingShapePointDown = true));
              }),
            ),
            this.disposeWithMe(
              _0x41b0c9.changing$["subscribe"]((_0x464768) => {
                this._isDrawingShapePointDown &&
                  this._clearShapeConnectorHandlerObjects();
              }),
            ),
            this.disposeWithMe(
              _0x597f7a.onPointerUp$["subscribeEvent"](() => {
                this._isDrawingShapePointDown &&
                  ((this._isDrawingShapePointDown = false),
                  this._addShapeConnectorHandlerObjects());
              }),
            ),
            this.disposeWithMe(
              _0x41b0c9.changeEnd$["subscribe"](() => {
                this._unitId &&
                  this._subUnitId &&
                  this._activeShapeId &&
                  this._drawingManagerService["getDrawingByParam"]({
                    unitId: this._unitId,
                    subUnitId: this._subUnitId,
                    drawingId: this._activeShapeId,
                  }) &&
                  (this._clearShapeConnectorHandlerObjects(),
                  this._addShapeConnectorHandlerObjects());
              }),
            ));
        }),
    );
  }
  _registerDrawingFocusChangeHandler() {
    (this.disposeWithMe(
      this._drawingManagerService["focus$"].subscribe((_0x38caf1) => {
        if (_0x38caf1.length === 1) {
          let _0x2b1d78 = _0x38caf1[0];
          if (_0x2b1d78.drawingType === _0x1ca1a8.DRAWING_SHAPE) {
            let _0x3b2bae = this._sheetsShapeService["getShapeModel"](
              _0x2b1d78.unitId,
              _0x2b1d78.subUnitId,
              _0x2b1d78.drawingId,
            );
            if (_0x3b2bae && _0x3ae025(_0x3b2bae.getShapeType())) {
              ((this._activeShapeId = _0x2b1d78.drawingId),
                (this._unitId = _0x2b1d78.unitId),
                (this._subUnitId = _0x2b1d78.subUnitId),
                this._clearShapeConnectorHandlerObjects(),
                this._addShapeConnectorHandlerObjects());
              return;
            }
          }
        }
        ((this._activeShapeId = undefined),
          (this._unitId = undefined),
          (this._subUnitId = undefined),
          this._clearShapeConnectorHandlerObjects());
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["update$"].subscribe((_0x37999b) => {
          if (_0x37999b.length === 1) {
            var _0x1b72fd;
            let _0x4cda56 = _0x37999b[0],
              _0x252322 =
                (_0x1b72fd =
                  this._drawingManagerService["getDrawingByParam"](
                    _0x4cda56,
                  )) == null
                  ? undefined
                  : _0x1b72fd.drawingType;
            _0x252322 === _0x1ca1a8.DRAWING_SHAPE &&
            _0x4cda56.drawingId === this._activeShapeId
              ? (this._clearShapeConnectorHandlerObjects(),
                this._addShapeConnectorHandlerObjects())
              : !this._activeShapeId &&
                _0x252322 === _0x1ca1a8.DRAWING_SHAPE &&
                this._handleBasicShapeUpdateConnectorLineShape(
                  _0x4cda56.unitId,
                  _0x4cda56.subUnitId,
                  _0x4cda56.drawingId,
                );
          }
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x791cb6) => {
          for (let _0x1be75c of _0x791cb6) {
            let { drawingId: _0x57f493 } = _0x1be75c;
            if (this._activeShapeId === _0x57f493) {
              this._reset();
              return;
            }
          }
        }),
      ));
  }
  _handleConnectedEndpointMove(
    _0x478a24,
    _0x5371ea,
    _0x586cc3,
    _0x3fbaab,
    _0x43bdb2,
  ) {
    var _0x49f8f0;
    if (!this._activeShapeModel) return;
    let _0xa47894 = this._getConnectPointInfo(_0x478a24);
    if (!_0xa47894) return;
    let _0x275753 = this._currentConnectionTarget
        ? this._currentConnectionTarget["worldPoint"]
        : _0x5371ea,
      _0x54c9d0 = this._currentConnectionTarget
        ? this._currentConnectionTarget["angle"]
        : this._calculateFreeEndpointAngle(_0xa47894.point, _0x275753),
      _0x1971d7;
    if (this._currentConnectionTarget) {
      let _0x3f6609 = this._drawingManagerService["getDrawingByParam"]({
        unitId: this._currentConnectionTarget["unitId"],
        subUnitId: this._currentConnectionTarget["subUnitId"],
        drawingId: this._currentConnectionTarget["shapeId"],
      });
      if (_0x3f6609 != null && _0x3f6609.transform) {
        let {
          left: _0x27f5ef = 0,
          top: _0x3865fb = 0,
          width: _0x58b3d7 = 0,
          height: _0x5e8e8f = 0,
          angle: _0x127af3,
        } = _0x3f6609.transform;
        _0x1971d7 = _0x3a3e4f(
          {
            left: _0x27f5ef,
            top: _0x3865fb,
            width: _0x58b3d7,
            height: _0x5e8e8f,
          },
          _0x127af3 || 0,
        );
      } else
        _0x1971d7 = {
          left: _0x275753.x,
          top: _0x275753.y,
          width: 0,
          height: 0,
        };
    } else
      _0x1971d7 = { left: _0x275753.x, top: _0x275753.y, width: 0, height: 0 };
    let _0x3ec129 = { point: _0x275753, angle: _0x54c9d0, bounds: _0x1971d7 },
      _0x831456 = _0x586cc3 ? _0x3ec129 : _0xa47894,
      _0xbb4fde = _0x586cc3 ? _0xa47894 : _0x3ec129,
      _0x3f4dc0 = this._activeShapeModel["getShapeType"](),
      _0x11d8f6 = _0x4940af(_0x831456, _0xbb4fde, _0x3f4dc0);
    _0x11d8f6 && this._activeShapeModel["updateLinePoints"](_0x11d8f6);
    let _0x320a2f = _0x546e7e(_0x11d8f6, _0x3f4dc0);
    _0x320a2f.lineType !== _0x3f4dc0 &&
      this._activeShapeModel["changeShapeType"](_0x320a2f.lineType);
    for (let [_0x4aed1c, _0x21bf36] of Object.entries(_0x320a2f.adjustValues))
      this._activeShapeModel["setAdjustValueByName"](_0x4aed1c, _0x21bf36);
    (this._activeShapeModel["updateContext"]({
      width: _0x320a2f.worldRect["width"],
      height: _0x320a2f.worldRect["height"],
    }),
      _0x3fbaab.transformByState({
        flipX: _0x320a2f.worldRect["flipX"],
        flipY: _0x320a2f.worldRect["flipY"],
        left: _0x320a2f.worldRect["left"],
        top: _0x320a2f.worldRect["top"],
        width: _0x320a2f.worldRect["width"],
        height: _0x320a2f.worldRect["height"],
        angle: _0x320a2f.rotation,
      }),
      _0x3fbaab.makeDirty(true));
    let _0x2df928 =
      ((_0x49f8f0 = this._currentConnectionTarget) == null
        ? undefined
        : _0x49f8f0.worldPoint) ?? _0x5371ea;
    _0x43bdb2.transformByState({
      left: _0x2df928.x - _0x1a8d3f.cxnPointRadius,
      top: _0x2df928.y - _0x1a8d3f.cxnPointRadius,
    });
  }
  _handleFreeEndpointMove(
    _0x13ce98,
    _0x1cedf8,
    _0x138a56,
    _0x468d80,
    _0x17d57d,
  ) {
    var _0x16d309, _0x1698b5;
    let _0x13a5d1 =
        ((_0x16d309 = this._currentConnectionTarget) == null
          ? undefined
          : _0x16d309.worldPoint) ?? _0x13ce98,
      _0x351c25 = _0x289e78.computeConnectorResizeLayout(
        _0x1cedf8,
        _0x13a5d1,
        _0x138a56,
      );
    _0x468d80.transformByState({
      flipX: _0x351c25.worldRect["flipX"],
      flipY: _0x351c25.worldRect["flipY"],
      left: _0x351c25.worldRect["left"],
      top: _0x351c25.worldRect["top"],
      width: _0x351c25.worldRect["width"],
      height: _0x351c25.worldRect["height"],
      angle: _0x351c25.worldRect["angle"],
    });
    let _0x150c05 =
      ((_0x1698b5 = this._currentConnectionTarget) == null
        ? undefined
        : _0x1698b5.worldPoint) ?? _0x13ce98;
    _0x17d57d.transformByState({
      left: _0x150c05.x - _0x1a8d3f.cxnPointRadius,
      top: _0x150c05.y - _0x1a8d3f.cxnPointRadius,
    });
  }
  _getConnectPointInfo(_0x194736) {
    if (!this._unitId || !this._subUnitId) return null;
    let { shapeId: _0xe579f3, cxnIndex: _0x4e07ff } = _0x194736,
      _0x45819b = this._sheetsShapeService["getShapeModel"](
        this._unitId,
        this._subUnitId,
        _0xe579f3,
      );
    if (!_0x45819b) return null;
    let _0x3f78db = this._drawingManagerService["getDrawingByParam"]({
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: _0xe579f3,
    });
    if (!(_0x3f78db != null && _0x3f78db.transform)) return null;
    let {
      left: _0x4c0e49 = 0,
      top: _0x3e703d = 0,
      width: _0x300713 = 0,
      height: _0x3c6a01 = 0,
      flipX: _0x376687 = false,
      flipY: _0x39ba41 = false,
      angle: _0x5c191c,
    } = _0x3f78db.transform;
    _0x45819b.updateContext({ width: _0x300713, height: _0x3c6a01 });
    let _0x3ebf5b = _0x45819b
      .getConnectionSiteList()
      .find((_0x218d9) => _0x218d9.index === _0x4e07ff);
    if (!_0x3ebf5b) return null;
    let _0x2303e2 = _0x376687 ? _0x300713 - _0x3ebf5b.x : _0x3ebf5b.x,
      _0x232e78 = _0x39ba41 ? _0x3c6a01 - _0x3ebf5b.y : _0x3ebf5b.y;
    if (_0x5c191c !== 0 && _0x5c191c != null) {
      let _0x4e6b07 = (_0x5c191c * Math.PI) / 180,
        _0x22b558 = Math.cos(_0x4e6b07),
        _0x28b468 = Math.sin(_0x4e6b07),
        _0x3985d1 = _0x300713 / 2,
        _0xc3cce9 = _0x3c6a01 / 2,
        _0x5e71dc = _0x2303e2 - _0x3985d1,
        _0x360515 = _0x232e78 - _0xc3cce9;
      ((_0x2303e2 = _0x3985d1 + _0x5e71dc * _0x22b558 - _0x360515 * _0x28b468),
        (_0x232e78 =
          _0xc3cce9 + _0x5e71dc * _0x28b468 + _0x360515 * _0x22b558));
    }
    ((_0x2303e2 += _0x4c0e49), (_0x232e78 += _0x3e703d));
    let _0x1c7b82 = _0x3ebf5b.ang / 60000;
    (_0x376687 && (_0x1c7b82 = 180 - _0x1c7b82),
      _0x39ba41 && (_0x1c7b82 = -_0x1c7b82),
      (_0x1c7b82 += _0x5c191c || 0),
      (_0x1c7b82 = ((_0x1c7b82 % 360) + 360) % 360));
    let _0x3f9fb1 = _0x3a3e4f(
      { left: _0x4c0e49, top: _0x3e703d, width: _0x300713, height: _0x3c6a01 },
      _0x5c191c || 0,
    );
    return {
      point: { x: _0x2303e2, y: _0x232e78 },
      angle: _0x1c7b82,
      bounds: _0x3f9fb1,
    };
  }
  _calculateFreeEndpointAngle(_0x39e9a7, _0x35716a) {
    let _0x3fc978 = _0x35716a.x - _0x39e9a7.x,
      _0x317449 = _0x35716a.y - _0x39e9a7.y;
    return Math.abs(_0x3fc978) >= Math.abs(_0x317449)
      ? _0x3fc978 >= 0
        ? 180
        : 0
      : _0x317449 >= 0
        ? 270
        : 90;
  }
  _reset() {
    ((this._activeShapeId = undefined),
      (this._unitId = undefined),
      (this._subUnitId = undefined),
      this._clearShapeConnectorHandlerObjects());
  }
  dispose() {
    (this._clearShapeConnectorHandlerObjects(), super.dispose());
  }
};
aa = X(
  [
    Y(1, _0x454da3),
    Y(2, _0x191ca0),
    Y(3, _0xa5b289),
    Y(4, _0x36fe2b),
    Y(5, _0x344f6e(_0x1e4684)),
    Y(6, _0x344f6e(xr)),
    Y(7, _0x344f6e(na)),
  ],
  aa,
);
let oa = class extends _0x56da22 {
  constructor(_0x90e0c8, _0x221771, _0x4399fe) {
    (super(),
      (this._sheetPrintInterceptorService = _0x90e0c8),
      (this._drawingManagerService = _0x221771),
      (this._shapeRenderController = _0x4399fe),
      this._initPrinting());
  }
  _initPrinting() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_COMPONENT_COLLECT,
        {
          handler: (_0x5f2b51, _0x4e74d1, _0x224a59) => {
            var _0x1b6b86;
            let {
                unitId: _0x7fda9f,
                subUnitId: _0x4bf296,
                scene: _0x7e390e,
                resourceCollector: _0x1e2f76,
              } = _0x4e74d1,
              _0xb563a3 =
                (_0x1b6b86 =
                  this._drawingManagerService["getDrawingDataForUnit"](
                    _0x7fda9f,
                  )) == null
                  ? undefined
                  : _0x1b6b86[_0x4bf296];
            return (
              _0xb563a3 == null ||
                _0xb563a3.order["forEach"]((_0xc61b0e) => {
                  let _0x15552d = _0xb563a3.data[_0xc61b0e];
                  _0x15552d.drawingType === _0x1ca1a8.DRAWING_SHAPE &&
                    !_0x15552d.hidden &&
                    this._shapeRenderController["renderDrawingShape"](
                      _0x15552d,
                      _0x7e390e,
                      { resourceCollector: _0x1e2f76 },
                    );
                }),
              _0x224a59(_0x5f2b51)
            );
          },
        },
      ),
    );
  }
};
oa = X([Y(0, _0x344f6e(_0x1ea8ee)), Y(1, _0xa5b289), Y(2, _0x344f6e(Z))], oa);
let sa = class extends _0x56da22 {
  constructor(_0x26e742, _0x2b0f60, _0x5eda6b) {
    (super(),
      (this._commandService = _0x26e742),
      (this._localeService = _0x2b0f60),
      (this._sheetPermissionCheckController = _0x5eda6b),
      this._initPermission());
  }
  _initPermission() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x337252) => {
        let _0x1dd044, _0x1a5f7d;
        if (
          _0x337252.id === _0x149e5a.id ||
          _0x337252.id === _0x30bb40.id ||
          _0x337252.id === _0x5011ac.id
        ) {
          let _0x16adfe = _0x337252.params;
          ((_0x1dd044 = _0x16adfe.unitId), (_0x1a5f7d = _0x16adfe.subUnitId));
        }
        !_0x1dd044 ||
          !_0x1a5f7d ||
          this._sheetPermissionCheckController["permissionCheckWithoutRange"](
            { workbookTypes: [_0xe46f62], worksheetTypes: [_0x53e1b4] },
            _0x1dd044,
            _0x1a5f7d,
          ) ||
          this._sheetPermissionCheckController["blockExecuteWithoutPermission"](
            this._localeService["t"]("sheets-shape-ui.permission.editErr"),
          );
      }),
    );
  }
};
sa = X(
  [
    Y(0, _0x344f6e(_0x454da3)),
    Y(1, _0x344f6e(_0x15ffe9)),
    Y(2, _0x344f6e(_0x377d09)),
  ],
  sa,
);
let ca = class extends _0x56da22 {
  constructor(
    _0x3bdaab,
    _0x26c12e,
    _0x22f8d5,
    _0x19ba20,
    _0x1fa911,
    _0x4819f9,
    _0x5770bd,
    _0x30d920,
    _0x31dc32,
    _0xf9656b,
    _0x3403b7,
  ) {
    (super(),
      (this._univerInstanceService = _0x3bdaab),
      (this._sidebarService = _0x26c12e),
      (this._menuManagerService = _0x22f8d5),
      (this._sheetsShapeService = _0x19ba20),
      (this._localeService = _0x1fa911),
      (this._commandService = _0x4819f9),
      (this._drawingManagerService = _0x5770bd),
      (this._sheetCanvasPopManagerService = _0x30d920),
      (this._contextService = _0x31dc32),
      (this._renderManagerService = _0xf9656b),
      (this._shapeTextEditingService = _0x3403b7),
      J(this, "_sidebarDisposable", null),
      J(this, "_activeShapeInfo", null),
      J(this, "_isOpenedShapeEditPanel", false),
      J(this, "_shapeEditPanelVersion", 0),
      J(this, "_shapePopupMenuDisposable", null),
      J(this, "_disposePopups", []),
      this._initMenu(),
      this.disposeWithMe(
        this._univerInstanceService["getCurrentTypeOfUnit$"](
          _0x44a53b.UNIVER_SHEET,
        ).subscribe((_0x394423) => {
          if (!_0x394423) {
            var _0x56a944;
            (_0x56a944 = this._sidebarDisposable) == null ||
              _0x56a944.dispose();
          }
        }),
      ),
      this._registerOperations(),
      this.initShapePopupMenu(),
      this.disposeWithMe(
        this._shapeTextEditingService["editingParams$"].subscribe(
          (_0x188824) => {
            _0x188824 && this._clearPopups();
          },
        ),
      ));
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](ki);
  }
  initShapePopupMenu() {
    this._shapePopupMenuDisposable ||= this.disposeWithMe(
      _0x42ba9f(
        this._renderManagerService,
        _0x44a53b.UNIVER_SHEET,
        (_0x44babb) => this._popupMenuListener(_0x44babb),
      ),
    );
  }
  _getShapeInfo(_0x3e2549, _0x49ce07, _0x364fcc) {
    let _0x170b32 = this._sheetsShapeService["getShapeTypeById"](
        _0x3e2549,
        _0x49ce07,
        _0x364fcc,
      ),
      _0x368a7a = this._sheetsShapeService["getShapeDataById"](
        _0x3e2549,
        _0x49ce07,
        _0x364fcc,
      );
    return _0x170b32 !== undefined && _0x368a7a !== undefined
      ? {
          shapeData: _0x368a7a,
          shapeId: _0x364fcc,
          shapeType: _0x170b32,
          unitId: _0x3e2549,
          subUnitId: _0x49ce07,
          version: this._shapeEditPanelVersion,
          disableShapeOption: false,
        }
      : null;
  }
  _clearPopups() {
    (this._disposePopups["forEach"]((_0x3d31fd) => _0x3d31fd.dispose()),
      (this._disposePopups["length"] = 0));
  }
  _popupMenuListener(_0x2ce667) {
    let _0x1133ed = new _0x3fd497();
    return (
      _0x1133ed.add(
        _0x2ce667.createControl$["subscribe"](() => {
          let _0x103a45 = _0x2ce667.getSelectedObjectMap();
          if (
            (this._clearPopups(),
            this._isOpenedShapeEditPanel || _0x103a45.size > 1)
          )
            return;
          let _0x591b15 = _0x103a45.values().next().value;
          if (!_0x591b15) return;
          let _0x42fa54 = this._drawingManagerService["getDrawingOKey"](
            _0x591b15.oKey,
          );
          if (!_0x42fa54 || _0x42fa54.drawingType !== _0x1ca1a8.DRAWING_SHAPE)
            return;
          let {
              unitId: _0x4190ea,
              subUnitId: _0x6345e1,
              drawingId: _0x38e2df,
              drawingType: _0x1f5b7c,
            } = _0x42fa54,
            _0x737ba0 = this._getShapeInfo(_0x4190ea, _0x6345e1, _0x38e2df);
          if (!_0x737ba0) return;
          this._contextService["setContextValue"](_0x3aba69, true);
          let _0x5ed326 =
              this._renderManagerService["getRenderUnitById"](_0x4190ea),
            _0x307178 = (
              (_0x5ed326 == null ? undefined : _0x5ed326.isMainScene) === false
                ? _0x5ed326.with(_0x3a115d)
                : this._sheetCanvasPopManagerService
            ).attachPopupToObject(_0x591b15, {
              componentKey: Er,
              direction: "vertical-center",
              offset: [0, _0x5882e4],
              extraProps: {
                unitId: _0x4190ea,
                subUnitId: _0x6345e1,
                drawingId: _0x38e2df,
                drawingType: _0x1f5b7c,
                shapeType: _0x737ba0.shapeType,
                shapeData: _0x737ba0.shapeData,
              },
            });
          (this._disposePopups["push"](this.disposeWithMe(_0x307178)),
            this._drawingManagerService["getFocusDrawings"]().find(
              (_0x5588b4) =>
                _0x5588b4.unitId === _0x4190ea &&
                _0x5588b4.subUnitId === _0x6345e1 &&
                _0x5588b4.drawingId === _0x38e2df,
            ) ||
              this._drawingManagerService["focusDrawing"]([
                {
                  unitId: _0x4190ea,
                  subUnitId: _0x6345e1,
                  drawingId: _0x38e2df,
                },
              ]));
        }),
      ),
      _0x1133ed.add(
        _0x2ce667.clearControl$["subscribe"](() => {
          (this._clearPopups(),
            this._contextService["setContextValue"](_0x3aba69, false),
            this._drawingManagerService["focusDrawing"](null));
        }),
      ),
      _0x1133ed.add(
        _0x2ce667.changing$["subscribe"](() => {
          this._clearPopups();
        }),
      ),
      _0x1133ed.add(
        _0x2ce667.changeStart$["subscribe"](() => {
          this._clearPopups();
        }),
      ),
      _0xa4b14e(() => {
        (_0x1133ed.dispose(), this._clearPopups());
      })
    );
  }
  _registerOperations() {
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x3adfaf) => {
        if (_0x3adfaf.id === jr.id) {
          let {
            unitId: _0x5482f7,
            subUnitId: _0x5a8a7,
            drawingId: _0x2c41d7,
          } = _0x3adfaf.params;
          ((this._shapeEditPanelVersion += 1),
            (this._activeShapeInfo = this._getShapeInfo(
              _0x5482f7,
              _0x5a8a7,
              _0x2c41d7,
            )),
            this._clearPopups(),
            this._openShapeEditPanel());
        }
        if (
          (_0x3adfaf.id === Mi.id &&
            ((this._activeShapeInfo = null), this._closeShapeEditPanel()),
          _0x3adfaf.id === _0x12ceb1.id)
        ) {
          let {
            unitId: _0x535637,
            subUnitId: _0x21b03e,
            shapeId: _0x285a67,
          } = _0x3adfaf.params;
          if (
            this._activeShapeInfo &&
            this._activeShapeInfo["shapeId"] === _0x285a67
          ) {
            let _0xc6840e = this._getShapeInfo(_0x535637, _0x21b03e, _0x285a67);
            _0xc6840e &&
              ((this._shapeEditPanelVersion += 1),
              (_0xc6840e.version = this._shapeEditPanelVersion),
              (this._activeShapeInfo = _0xc6840e),
              this._isOpenedShapeEditPanel && this._openShapeEditPanel());
          }
        }
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x56bcb0) => {
          if (this._isOpenedShapeEditPanel === false) return;
          if (_0x56bcb0.length === 0) {
            ((this._activeShapeInfo = null), this._closeShapeEditPanel());
            return;
          }
          if (
            _0x56bcb0.length === 1 &&
            _0x56bcb0[0].drawingType === _0x1ca1a8.DRAWING_SHAPE &&
            ((this._shapeEditPanelVersion += 1),
            (this._activeShapeInfo = this._getShapeInfo(
              _0x56bcb0[0].unitId,
              _0x56bcb0[0].subUnitId,
              _0x56bcb0[0].drawingId,
            )),
            this._activeShapeInfo)
          ) {
            this._openShapeEditPanel();
            return;
          }
          let _0x30cca7 = _0x56bcb0.filter(
            (_0x3b52f) => _0x3b52f.drawingType === _0x1ca1a8.DRAWING_SHAPE,
          );
          if (_0x56bcb0.length > 1 && _0x30cca7.length === _0x56bcb0.length) {
            if (
              ((this._shapeEditPanelVersion += 1),
              (this._activeShapeInfo = this._getShapeInfo(
                _0x56bcb0[0].unitId,
                _0x56bcb0[0].subUnitId,
                _0x56bcb0[0].drawingId,
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
                _0x56bcb0[0].unitId,
                _0x56bcb0[0].subUnitId,
                _0x56bcb0[0].drawingId,
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
        id: wr,
        header: {
          title: this._localeService["t"]("sheets-shape-ui.formatShape"),
        },
        width: 388,
        children: { label: wr, ...this._activeShapeInfo },
        onClose: () => {
          (this._drawingManagerService["focusDrawing"](null),
            this._contextService["setContextValue"](_0x3aba69, false),
            (this._sidebarDisposable = null));
        },
      })),
      (this._isOpenedShapeEditPanel = true));
  }
  _closeShapeEditPanel() {
    ((this._isOpenedShapeEditPanel = false),
      this._sidebarService["close"](wr),
      (this._sidebarDisposable = null),
      this._contextService["setContextValue"](_0x3aba69, false),
      this._drawingManagerService["focusDrawing"](null));
  }
};
ca = X(
  [
    Y(0, _0x36fe2b),
    Y(1, _0x344f6e(_0x408575)),
    Y(2, _0x193823),
    Y(3, _0x344f6e(_0x1e4684)),
    Y(4, _0x344f6e(_0x15ffe9)),
    Y(5, _0x454da3),
    Y(6, _0xa5b289),
    Y(7, _0x344f6e(_0x3a115d)),
    Y(8, _0x573752),
    Y(9, _0x191ca0),
    Y(10, _0x344f6e(Q)),
  ],
  ca,
);
let $ = class extends _0x33fcda {
  constructor(_0x4639f6 = Ni, _0x5e2cee, _0x5b5fa9, _0x360b0f, _0x2045a7) {
    (super(),
      (this._config = _0x4639f6),
      (this._injector = _0x5e2cee),
      (this._commandService = _0x5b5fa9),
      (this._configService = _0x360b0f),
      (this._renderManagerService = _0x2045a7));
    let { ..._0x237326 } = _0x1ace4b({}, Ni, this._config);
    (this._configService["setConfig"]("sheets-shape-ui.config", _0x237326),
      this._initCommands());
  }
  onRendered() {
    (this._renderManagerService["registerRenderModule"](_0x44a53b.UNIVER_DOC, [
      Qi,
    ]),
      _0xd8b857(this._injector, [[ca], [$i], [Z], [oa]]));
  }
  onSteady() {
    this._injector["get"](ca).initShapePopupMenu();
  }
  onReady() {
    ([[na], [xr], [ra]].forEach((_0x4d9582) =>
      this._injector["add"](_0x4d9582),
    ),
      _0xd8b857(this._injector, [[ra], [xr]]),
      this._renderManagerService["registerRenderModule"](
        _0x44a53b.UNIVER_SHEET,
        [na],
      ),
      this._renderManagerService["registerRenderModule"](
        _0x44a53b.UNIVER_SHEET,
        [Gi],
      ),
      this._renderManagerService["registerRenderModule"](
        _0x44a53b.UNIVER_SHEET,
        [aa],
      ),
      this._renderManagerService["registerRenderModule"](
        _0x44a53b.UNIVER_SHEET,
        [Zi],
      ));
  }
  onStarting() {
    (this._injector["add"]([Wi]), this._injector["get"](Wi));
    let _0x8db35d = this._injector;
    ([[ca], [$i], [Z], [oa], [Li], [Q], [Yi], [Fr], [sa], [qi]].forEach(
      (_0x5c64ff) => _0x8db35d.add(_0x5c64ff),
    ),
      _0xd8b857(this._injector, [
        [ca],
        [$i],
        [Z],
        [Li],
        [Q],
        [Yi],
        [Fr],
        [sa],
        [qi],
      ]));
  }
  _initCommands() {
    [Cr, fr, Mi, jr, Ar, Sr, Nr, Pr].forEach((_0x41f18b) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x41f18b)),
    );
  }
};
(J($, "type", _0x44a53b.UNIVER_SHEET),
  J($, "pluginName", "SHEET_SHAPE_UI_PLUGIN"),
  J($, "packageName", Ai),
  J($, "version", ji),
  ($ = X(
    [
      _0x291c90(
        _0x2b9e89,
        _0x4485af,
        _0x5d5c15,
        _0x5ac284,
        _0x389f56,
        _0x412cf5,
        _0x181bb2,
        _0x3cbfbf,
        _0x3be943,
        _0x143f28,
        _0x13e56d,
        _0x2821c5,
        _0x4fc6fd,
      ),
      Y(1, _0x344f6e(_0x3efb0c)),
      Y(2, _0x454da3),
      Y(3, _0x3b14a3),
      Y(4, _0x191ca0),
    ],
    $,
  )));
export {
  Oi as SheetsShapeUIContextualRibbonSchema,
  ki as SheetsShapeUIMenuSchema,
  $ as UniverSheetsShapeUIPlugin,
};
