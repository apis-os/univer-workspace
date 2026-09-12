import {
  BoardElementType as _0x326b27,
  BoardToolType as _0x590f62,
  IBoardElementService as _0x569c18,
  IBoardMindMapAdapterService as _0x386a30,
  UniverBoardsPlugin as _0x47b6d3,
  documentTextStyleToBoardShapeTextStyle as _0x904cac,
  offsetBoardConnectorGeometry as _0x41b5e7,
  resolveBoardElementWorldBounds as _0x2a21c9,
} from "@univerjs-pro/boards";
import {
  AddMindMapChildOperation as _0x1349bc,
  AddMindMapSiblingOperation as _0x8524f9,
  ChangeMindMapBranchLineTypeOperation as _0x5d3671,
  ChangeMindMapLayoutOperation as _0x104955,
  CopyMindMapNodeOperation as _0x26aa67,
  DeleteMindMapNodeOperation as _0x2bd9d8,
  DetachMindMapNodeOperation as _0x3d7f52,
  ExportMindMapOpmlOperation as _0x517d0f,
  IMindMapClipboardService as _0x5313d4,
  ImportMindMapOpmlOperation as _0x431469,
  InsertBoardMindMapOperation as _0x37f2fb,
  LayoutMindMapOperation as _0x2f141c,
  MIND_MAP_DEFAULT_LAYOUT as _0x4c6e5c,
  MIND_MAP_DEFAULT_NODE_SIZE as _0x3c410f,
  MIND_MAP_DEFAULT_NODE_TEXT as _0x49f0ab,
  MIND_MAP_LAYOUT_SPACING_LIMITS as _0x1263e8,
  PasteMindMapAsNewMindMapOperation as _0x2b9c59,
  PasteMindMapNodeOperation as _0x2fbbef,
  PromoteMindMapNodeOperation as _0x81610c,
  ReparentMindMapNodeOperation as _0x407f7a,
  ToggleMindMapNodeCollapseOperation as _0x252a9a,
  TranslateMindMapOperation as _0x4b24dc,
  UniverBoardsMindPlugin as _0x1dab7d,
  UpdateMindMapIncomingConnectorOperation as _0x496df1,
  UpdateMindMapNodeOperation as _0x287f19,
  compareMindMapOrderKey as _0x9a236e,
  getMindMapConnectorMeta as _0x2e6f82,
  getMindMapContainerMeta as _0x3cec18,
  getMindMapDefaultChildOrderKey as _0x4a08be,
  getMindMapNodeMeta as _0x154a55,
  isMindMapPlainStructureKind as _0x36c2b3,
  resolveMindMapBranchLineTypeForStructure as _0x1f7b61,
  resolveMindMapLayoutPreview as _0x4ba2fc,
  resolveMindMapNodeHostSize as _0x2b77bd,
} from "@univerjs-pro/boards-mind";
import {
  BOARDS_UI_PLUGIN_CONFIG_KEY as _0x148157,
  BOARD_RENDER_LAYER_INDEX as _0x4549ea,
  BOARD_RENDER_OBJECT_Z_INDEX as _0x2b35a0,
  BOARD_SHORTCUT_BINDINGS as _0x32a756,
  BoardCanvasPopManagerService as _0x1674e2,
  BoardInteractionSurfaceService as _0x5433f0,
  BoardShapeIntrinsicSizeService as _0x32def5,
  BoardTextEditingService as _0x2888b1,
  IBoardElementStateService as _0x4b6ba3,
  IBoardUIStateService as _0x225839,
  UniverBoardsUIPlugin as _0x3f0884,
  areBoardShapeTextValuesEquivalent as _0x2e45f6,
  getBoardElementRenderObjectKey as _0x5967eb,
  parseBoardElementRenderObjectKey as _0x1ee49b,
  resolveBoardFloatingToolbarSelection as _0x246753,
  syncBoardElementRenderObject as _0x1a6b55,
} from "@univerjs-pro/boards-ui";
import { UniverLicensePlugin as _0x4d6471 } from "@univerjs-pro/license";
import {
  CommandType as _0x6acd,
  DEFAULT_STYLES as _0x379b5b,
  DependentOn as _0xae14f6,
  Disposable as _0x43d28b,
  DisposableCollection as _0x89f2a7,
  HorizontalAlign as _0x485ee7,
  ICommandService as _0x3ef066,
  IConfigService as _0xe8b60e,
  IContextService as _0xddc1c8,
  IUniverInstanceService as _0x2f0059,
  Inject as _0x50be27,
  Injector as _0x56f7a3,
  LocaleService as _0xc75da,
  Plugin as _0x5a5185,
  RxDisposable as _0x25c64b,
  UniverInstanceType as _0x2b7b4b,
  VerticalAlign as _0x2d4efd,
  generateRandomId as _0x33cedd,
  merge as _0x366e3d,
  toDisposable as _0x5ab28a,
} from "@univerjs/core";
import {
  BaseObject as _0x57beaa,
  IRenderManagerService as _0xa94842,
  UniverRenderEnginePlugin as _0x56f765,
} from "@univerjs/engine-render";
import { Subject as _0x1bebec, takeUntil as _0x2777f5 } from "rxjs";
import {
  ComponentManager as _0x49ca63,
  IDialogService as _0x77cafb,
  IShortcutService as _0x22486e,
  KeyCode as _0x208b9e,
  MetaKeys as _0x5aa78e,
  UndoRedoGroupService as _0x3efd59,
  useDependency as _0x5a5b51,
} from "@univerjs/ui";
import {
  SHAPE_FLOATING_TOOLBAR_DEFAULT_STROKE_COLOR as _0x39abb4,
  SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_BACKGROUND_COLOR as _0x385c87,
  SHAPE_FLOATING_TOOLBAR_DEFAULT_TEXT_COLOR as _0x3e50f2,
  SHAPE_TEXT_EDITOR_QUOTE_COMMAND_ID as _0x46789d,
  ShapeFillButton as _0x2cad45,
  ShapeFloatingToolbarContent as _0x5c8aa3,
  ShapeFloatingToolbarDropdownTrigger as _0x3e8260,
  ShapeFloatingToolbarFontSizeSelect as _0x84d88a,
  ShapeFloatingToolbarIcon as _0x306989,
  ShapeFloatingToolbarMenuItem as _0x173ee1,
  ShapeFloatingToolbarMenuPanel as _0x5eec4d,
  ShapeStrokePanelButton as _0x28c164,
  ShapeStrokePanelContent as _0x592710,
  TextFillButton as _0x1b6943,
  TypographyPanelButton as _0x10646e,
  buildShapeTextDataUpdate as _0x13fa65,
} from "@univerjs-pro/shape-editor-ui";
import {
  ShapeLineDashEnum as _0x90b6e0,
  ShapeLineTypeEnum as _0x35d0c7,
} from "@univerjs-pro/engine-shape";
import {
  Button as _0xde39,
  Dropdown as _0x22fc1b,
  Input as _0x476362,
  InputNumber as _0x32f3cd,
  Segmented as _0x140329,
  Separator as _0x32bc4b,
  Textarea as _0x44c26c,
  borderClassName as _0x13d44f,
  clsx as _0x4c5e40,
} from "@univerjs/design";
import {
  AlignBottomIcon as _0x247e56,
  AlignTextBothIcon as _0x198114,
  AlignTopIcon as _0xe1e8c9,
  HorizontallyIcon as _0x27f2a9,
  LeftJustifyingIcon as _0x23f8d8,
  MoreHorizontalIcon as _0x12d84f,
  RightJustifyingIcon as _0x340096,
  SearchIcon as _0x7f7ca3,
  ShapeLineIcon as _0x30781e,
  VerticalCenterIcon as _0x8c4ea1,
} from "@univerjs/icons";
import { useState as _0x12b1e6 } from "react";
import {
  Fragment as _0x539227,
  jsx as _0x22a183,
  jsxs as _0x155d01,
} from "react/jsx-runtime";
var Nt = "@univerjs-pro/boards-mind-ui",
  Pt = "1.0.0-insiders.20260907-70fc579";
const Ft = {};
function It(_0x5e1fa0) {
  "@babel/helpers - typeof";
  return (
    (It =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4e0299) {
            return typeof _0x4e0299;
          }
        : function (_0x51a2db) {
            return _0x51a2db &&
              typeof Symbol == "function" &&
              _0x51a2db.constructor === Symbol &&
              _0x51a2db !== Symbol.prototype
              ? "symbol"
              : typeof _0x51a2db;
          }),
    It(_0x5e1fa0)
  );
}
function Lt(_0x25f75d, _0x4e0401) {
  if (It(_0x25f75d) != "object" || !_0x25f75d) return _0x25f75d;
  var _0x369b38 = _0x25f75d[Symbol.toPrimitive];
  if (_0x369b38 !== undefined) {
    var _0x43122b = _0x369b38.call(_0x25f75d, _0x4e0401 || "default");
    if (It(_0x43122b) != "object") return _0x43122b;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x4e0401 === "string" ? String : Number)(_0x25f75d);
}
function Rt(_0x6a5478) {
  var _0x2c8507 = Lt(_0x6a5478, "string");
  return It(_0x2c8507) == "symbol" ? _0x2c8507 : _0x2c8507 + "";
}
function G(_0x451130, _0x2ca06f, _0xad3c84) {
  return (
    (_0x2ca06f = Rt(_0x2ca06f)) in _0x451130
      ? Object.defineProperty(_0x451130, _0x2ca06f, {
          value: _0xad3c84,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x451130[_0x2ca06f] = _0xad3c84),
    _0x451130
  );
}
function K(_0xaba394, _0x396231) {
  return function (_0x4e1a90, _0x244d1d) {
    _0x396231(_0x4e1a90, _0x244d1d, _0xaba394);
  };
}
function q(_0x557bf7, _0x30705d, _0x41f37e, _0x290135) {
  var _0x586611 = arguments.length,
    _0x481605 =
      _0x586611 < 3
        ? _0x30705d
        : _0x290135 === null
          ? (_0x290135 = Object.getOwnPropertyDescriptor(_0x30705d, _0x41f37e))
          : _0x290135,
    _0x4bc277;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x481605 = Reflect.decorate(_0x557bf7, _0x30705d, _0x41f37e, _0x290135);
  else {
    for (var _0x2d1bff = _0x557bf7.length - 1; _0x2d1bff >= 0; _0x2d1bff--)
      (_0x4bc277 = _0x557bf7[_0x2d1bff]) &&
        (_0x481605 =
          (_0x586611 < 3
            ? _0x4bc277(_0x481605)
            : _0x586611 > 3
              ? _0x4bc277(_0x30705d, _0x41f37e, _0x481605)
              : _0x4bc277(_0x30705d, _0x41f37e)) || _0x481605);
  }
  return (
    _0x586611 > 3 &&
      _0x481605 &&
      Object.defineProperty(_0x30705d, _0x41f37e, _0x481605),
    _0x481605
  );
}
let zt = class extends _0x25c64b {
  constructor(_0x148f0e, _0x34aab1, _0x46b3c1) {
    (super(),
      (this._renderContext = _0x148f0e),
      (this._boardElementService = _0x34aab1),
      (this._commandService = _0x46b3c1),
      G(this, "_nodeSizeByKey", new Map()),
      G(this, "_queuedLayouts", new Map()),
      G(this, "_layoutFlushScheduled", false),
      this._init());
  }
  _init() {
    (this._seedExistingNodeSizes(),
      this.disposeWithMe(
        _0x5ab28a(
          this._boardElementService["elementAdd$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe((_0x5740fa) => {
              _0x5740fa.forEach((_0x4b1aee) => {
                let _0x54a356 = this._boardElementService["getElementById"](
                  _0x4b1aee.unitId,
                  _0x4b1aee.subUnitId,
                  _0x4b1aee.elementId,
                );
                this._rememberNodeSize(_0x4b1aee, _0x54a356);
              });
            }),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          this._boardElementService["elementUpdate$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe((_0x27cada) => {
              _0x27cada.forEach((_0xbbbcee) =>
                this._handleElementUpdate(_0xbbbcee),
              );
            }),
        ),
      ));
  }
  _seedExistingNodeSizes() {
    let _0x5a68fa = this._renderContext["unitId"],
      _0xb34c15 = this._boardElementService["getElementDataForUnit"](_0x5a68fa);
    Object.entries(_0xb34c15).forEach(([_0x5de209, _0x5c8824]) => {
      Object.values(_0x5c8824.data).forEach((_0xcee25f) => {
        this._rememberNodeSize(
          {
            unitId: _0x5a68fa,
            subUnitId: _0x5de209,
            elementId: _0xcee25f.elementId,
          },
          _0xcee25f,
        );
      });
    });
  }
  _handleElementUpdate(_0x363979) {
    if (_0x363979.unitId !== this._renderContext["unitId"]) return;
    let _0x382b72 = this._boardElementService["getElementById"](
        _0x363979.unitId,
        _0x363979.subUnitId,
        _0x363979.elementId,
      ),
      _0x4b896e = _0x154a55(_0x382b72 == null ? undefined : _0x382b72.element),
      _0xa085b = this._resolveNodeSize(_0x382b72);
    if (!_0x4b896e || !_0xa085b) {
      this._nodeSizeByKey["delete"](this._getElementKey(_0x363979));
      return;
    }
    let _0x565714 = this._getElementKey(_0x363979),
      _0x4a48d0 = this._nodeSizeByKey["get"](_0x565714);
    (this._nodeSizeByKey["set"](_0x565714, _0xa085b),
      !(
        _0x4a48d0 &&
        _0x4a48d0.width === _0xa085b.width &&
        _0x4a48d0.height === _0xa085b.height
      ) &&
        this._queueLayout({
          unitId: _0x363979.unitId,
          subUnitId: _0x363979.subUnitId,
          scopeId: _0x4b896e.structureScopeId,
        }));
  }
  _rememberNodeSize(_0x590a98, _0x1e53d3) {
    if (_0x590a98.unitId !== this._renderContext["unitId"]) return;
    let _0x35d97d = _0x154a55(
        _0x1e53d3 == null ? undefined : _0x1e53d3.element,
      ),
      _0x4afade = this._resolveNodeSize(_0x1e53d3);
    !_0x35d97d ||
      !_0x4afade ||
      this._nodeSizeByKey["set"](this._getElementKey(_0x590a98), _0x4afade);
  }
  _resolveNodeSize(_0x2a4517) {
    let _0x191e60 =
        (_0x2a4517 == null ? undefined : _0x2a4517.transform) ??
        (_0x2a4517 == null ? undefined : _0x2a4517.element["transform"]),
      _0x47cc17 = _0x191e60 == null ? undefined : _0x191e60.width,
      _0xa34424 = _0x191e60 == null ? undefined : _0x191e60.height;
    return !Number.isFinite(_0x47cc17) || !Number.isFinite(_0xa34424)
      ? null
      : { width: _0x47cc17, height: _0xa34424 };
  }
  _queueLayout(_0x17fa18) {
    (this._queuedLayouts["set"](
      _0x17fa18.unitId + ":" + _0x17fa18.subUnitId + ":" + _0x17fa18.scopeId,
      _0x17fa18,
    ),
      !this._layoutFlushScheduled &&
        ((this._layoutFlushScheduled = true),
        Promise.resolve().then(() => {
          this._layoutFlushScheduled = false;
          let _0x240694 = Array.from(this._queuedLayouts["values"]());
          (this._queuedLayouts["clear"](),
            _0x240694.forEach((_0x4bb2cf) => {
              this._executeRootAnchoredLayout(_0x4bb2cf);
            }));
        })));
  }
  _executeRootAnchoredLayout(_0x24413a) {
    var _0x1e9c06;
    let _0xf7bcdb = this._boardElementService["getElementById"](
        _0x24413a.unitId,
        _0x24413a.subUnitId,
        _0x24413a.scopeId,
      ),
      _0x437aba =
        (_0x1e9c06 = _0x3cec18(
          _0xf7bcdb == null ? undefined : _0xf7bcdb.element,
        )) == null
          ? undefined
          : _0x1e9c06.rootNodeId;
    this._commandService["executeCommand"](_0x2f141c.id, {
      ..._0x24413a,
      skipUndo: true,
      ...(_0x437aba ? { anchorNodeId: _0x437aba } : null),
    });
  }
  _getElementKey(_0x443132) {
    return (
      _0x443132.unitId + ":" + _0x443132.subUnitId + ":" + _0x443132.elementId
    );
  }
};
zt = q([K(1, _0x50be27(_0x569c18)), K(2, _0x3ef066)], zt);
const J = {
  primaryColor: _0x39abb4,
  surfaceColor: _0x385c87,
  textColor: _0x3e50f2,
  fontFamily: _0x379b5b.ff,
};
function Bt(_0x15de41, _0x3fd61d) {
  let _0x556733 = Math.min(
      1,
      Math.max(0, Number.isFinite(_0x3fd61d) ? _0x3fd61d : 1),
    ),
    _0x346282 = _0x15de41.trim(),
    _0x37fca7 = /^#([0-9a-fA-F]{6})$/["exec"](_0x346282);
  if (!_0x37fca7) return _0x15de41;
  let _0x18e210 = _0x37fca7[1];
  return (
    "rgba(" +
    Number.parseInt(_0x18e210.slice(0, 2), 16) +
    ",\x20" +
    Number.parseInt(_0x18e210.slice(2, 4), 16) +
    ",\x20" +
    Number.parseInt(_0x18e210.slice(4, 6), 16) +
    ",\x20" +
    _0x556733 +
    ")"
  );
}
const Y = {
  primaryColor: J.primaryColor,
  ghostFillColor: Bt(J.surfaceColor, 0.72),
  ghostTextColor: Bt(J.textColor, 0.62),
  rootTextColor: Bt(J.surfaceColor, 0.86),
  sourceHighlightFillColor: Bt(J.primaryColor, 0.12),
  sourceHighlightStrokeColor: Bt(J.primaryColor, 0.9),
  objectAlpha: 0.72,
  dragObjectAlpha: 0.78,
  connectorAlpha: 0.64,
  lineWidthScreen: 2,
  fallbackNodeWidth: _0x3c410f.nodeWidth,
  fallbackNodeHeight: _0x3c410f.nodeHeight,
  branchGap: _0x4c6e5c.branchGap,
  sourceHaloScreen: 4,
  ghostRadius: 8,
  rootRadius: 10,
  fontFamily: J.fontFamily,
  ghostFontWeight: 500,
  rootFontWeight: 600,
  rootFontSize: 18,
  textPaddingScreen: 12,
  dirtyPaddingScreen: 24,
  sourceDashScreen: [6, 4],
};
function X(_0x1986c0, _0x276598, _0x12ff4a, _0x67015c, _0x58875e, _0x75fa52) {
  let _0x1b7436 = Math.min(_0x75fa52, _0x67015c / 2, _0x58875e / 2);
  (_0x1986c0.beginPath(),
    _0x1986c0.moveTo(_0x276598 + _0x1b7436, _0x12ff4a),
    _0x1986c0.lineTo(_0x276598 + _0x67015c - _0x1b7436, _0x12ff4a),
    _0x1986c0.quadraticCurveTo(
      _0x276598 + _0x67015c,
      _0x12ff4a,
      _0x276598 + _0x67015c,
      _0x12ff4a + _0x1b7436,
    ),
    _0x1986c0.lineTo(_0x276598 + _0x67015c, _0x12ff4a + _0x58875e - _0x1b7436),
    _0x1986c0.quadraticCurveTo(
      _0x276598 + _0x67015c,
      _0x12ff4a + _0x58875e,
      _0x276598 + _0x67015c - _0x1b7436,
      _0x12ff4a + _0x58875e,
    ),
    _0x1986c0.lineTo(_0x276598 + _0x1b7436, _0x12ff4a + _0x58875e),
    _0x1986c0.quadraticCurveTo(
      _0x276598,
      _0x12ff4a + _0x58875e,
      _0x276598,
      _0x12ff4a + _0x58875e - _0x1b7436,
    ),
    _0x1986c0.lineTo(_0x276598, _0x12ff4a + _0x1b7436),
    _0x1986c0.quadraticCurveTo(
      _0x276598,
      _0x12ff4a,
      _0x276598 + _0x1b7436,
      _0x12ff4a,
    ),
    _0x1986c0.closePath());
}
function Vt(_0x561838, _0x3d4422, _0x2e601e) {
  return _0x561838 + "\x20" + _0x3d4422 / _0x2e601e + "px " + Y.fontFamily;
}
const Ht = "board-mind-map-drag-preview-object",
  Ut = _0x4549ea.preview;
function Z(_0x3df04d, _0x46c894) {
  return Number.isFinite(_0x3df04d) ? _0x3df04d : _0x46c894;
}
function Wt() {
  return Y.fallbackNodeWidth;
}
function Gt() {
  return Y.fallbackNodeHeight;
}
function Kt(_0x35f1ee) {
  return _0x35f1ee === 1 ? "left" : _0x35f1ee === 3 ? "right" : "center";
}
function qt(_0x1f95bb, _0xa9af98, _0xdfb2fa, _0x52f1b7) {
  return _0xdfb2fa === 1
    ? _0x1f95bb + _0x52f1b7
    : _0xdfb2fa === 3
      ? _0x1f95bb + _0xa9af98 - _0x52f1b7
      : _0x1f95bb + _0xa9af98 / 2;
}
var Jt = class extends _0x57beaa {
  constructor(_0x329a7e = Ht, _0x5a33d8) {
    (super(_0x329a7e),
      G(this, "_state", {
        ghostBounds: null,
        parentBounds: null,
        side: "right",
        zoomRatio: 1,
      }),
      (this.evented = false),
      (this.zIndex = _0x2b35a0.transientPreviewForeground),
      this.updateState(_0x5a33d8));
  }
  updateState(_0x52a932) {
    if (
      ((this._state = { ...this._state, ..._0x52a932 }),
      this._state["ghostBounds"])
    ) {
      let _0x114f32 = this._resolveDirtyBounds();
      (this.transformByState(_0x114f32), this.show());
    } else this.hide();
    let _0x3a55a9 = this;
    typeof _0x3a55a9.makeDirtyNoDebounce == "function"
      ? _0x3a55a9.makeDirtyNoDebounce(true)
      : this.makeDirty(true);
  }
  isHit(_0x373144) {
    return false;
  }
  render(_0x4be01b, _0x2f82c4) {
    let _0x5489f6 = this._state["ghostBounds"];
    if (!_0x5489f6 || !this.visible) return (this.makeDirty(false), this);
    let _0x4838d0 =
        Number.isFinite(this._state["zoomRatio"]) &&
        (this._state["zoomRatio"] ?? 0) > 0
          ? this._state["zoomRatio"]
          : 1,
      _0x3f1ff8 = Z(_0x5489f6.left, 0),
      _0x2f3055 = Z(_0x5489f6.top, 0),
      _0x3762e3 = Math.max(1, Z(_0x5489f6.width, Wt())),
      _0x35f516 = Math.max(1, Z(_0x5489f6.height, Gt()));
    if (
      (_0x4be01b.save(),
      (_0x4be01b.globalAlpha = Y.dragObjectAlpha),
      (_0x4be01b.lineWidth = Y.lineWidthScreen / _0x4838d0),
      (_0x4be01b.strokeStyle = Y.primaryColor),
      (_0x4be01b.fillStyle = Y.ghostFillColor),
      this._drawConnectorPreview(
        _0x4be01b,
        {
          left: _0x3f1ff8,
          top: _0x2f3055,
          width: _0x3762e3,
          height: _0x35f516,
        },
        _0x4838d0,
      ),
      this._drawSourceHighlight(_0x4be01b, _0x4838d0),
      this._state["renderGhostNode"] === false)
    )
      return (_0x4be01b.restore(), this.makeDirty(false), this);
    (X(_0x4be01b, _0x3f1ff8, _0x2f3055, _0x3762e3, _0x35f516, Y.ghostRadius),
      _0x4be01b.fill(),
      _0x4be01b.stroke());
    let _0x20cebe = this._state["textStyle"],
      _0x3698ca =
        Number.isFinite(_0x20cebe == null ? undefined : _0x20cebe.fontSize) &&
        ((_0x20cebe == null ? undefined : _0x20cebe.fontSize) ?? 0) > 0
          ? _0x20cebe.fontSize
          : 16,
      _0x572a29 = Y.textPaddingScreen / _0x4838d0;
    return (
      (_0x4be01b.fillStyle =
        (_0x20cebe == null ? undefined : _0x20cebe.color) ?? Y.ghostTextColor),
      (_0x4be01b.font = Vt(Y.ghostFontWeight, _0x3698ca, _0x4838d0)),
      (_0x4be01b.textAlign = Kt(
        _0x20cebe == null ? undefined : _0x20cebe.horizontalAlign,
      )),
      (_0x4be01b.textBaseline = "middle"),
      _0x4be01b.fillText(
        (_0x20cebe == null ? undefined : _0x20cebe.text) || _0x49f0ab,
        qt(
          _0x3f1ff8,
          _0x3762e3,
          _0x20cebe == null ? undefined : _0x20cebe.horizontalAlign,
          _0x572a29,
        ),
        _0x2f3055 + _0x35f516 / 2,
        Math.max(1, _0x3762e3 - _0x572a29 * 2),
      ),
      _0x4be01b.restore(),
      this.makeDirty(false),
      this
    );
  }
  _resolveDirtyBounds() {
    let _0xa19aff = this._state["ghostBounds"],
      _0x26c5a8 =
        Number.isFinite(this._state["zoomRatio"]) &&
        (this._state["zoomRatio"] ?? 0) > 0
          ? this._state["zoomRatio"]
          : 1,
      _0x92fb88 = Y.dirtyPaddingScreen / _0x26c5a8;
    if (!_0xa19aff) return { left: 0, top: 0, width: 1, height: 1 };
    let _0x14c2c7 = Z(_0xa19aff.left, 0),
      _0xab972e = Z(_0xa19aff.top, 0),
      _0x35dae5 = Math.max(1, Z(_0xa19aff.width, Wt())),
      _0x3e97cd = Math.max(1, Z(_0xa19aff.height, Gt())),
      _0x5f3d83 = this._state["sourceBounds"],
      _0x2614e5 = this._state["parentBounds"],
      _0x356591 = Z(_0x5f3d83 == null ? undefined : _0x5f3d83.left, _0x14c2c7),
      _0x465dd7 = Z(_0x5f3d83 == null ? undefined : _0x5f3d83.top, _0xab972e),
      _0x1cfd56 = Math.max(
        1,
        Z(_0x5f3d83 == null ? undefined : _0x5f3d83.width, _0x35dae5),
      ),
      _0x48ead1 = Math.max(
        1,
        Z(_0x5f3d83 == null ? undefined : _0x5f3d83.height, _0x3e97cd),
      );
    if (!_0x2614e5) {
      let _0x5e2227 = Math.min(_0x14c2c7, _0x356591) - _0x92fb88,
        _0xbdc902 = Math.min(_0xab972e, _0x465dd7) - _0x92fb88,
        _0x120c38 =
          Math.max(_0x14c2c7 + _0x35dae5, _0x356591 + _0x1cfd56) + _0x92fb88,
        _0x1438cf =
          Math.max(_0xab972e + _0x3e97cd, _0x465dd7 + _0x48ead1) + _0x92fb88;
      return {
        left: _0x5e2227,
        top: _0xbdc902,
        width: _0x120c38 - _0x5e2227,
        height: _0x1438cf - _0xbdc902,
      };
    }
    let _0x8ef657 = Z(_0x2614e5.left, _0x14c2c7),
      _0x3d6950 = Z(_0x2614e5.top, _0xab972e),
      _0x379e35 = Math.max(1, Z(_0x2614e5.width, Wt())),
      _0x3c91b8 = Math.max(1, Z(_0x2614e5.height, Gt())),
      _0x13db6d = Math.min(_0x14c2c7, _0x8ef657, _0x356591) - _0x92fb88,
      _0x3f1f47 = Math.min(_0xab972e, _0x3d6950, _0x465dd7) - _0x92fb88,
      _0x187cb2 =
        Math.max(
          _0x14c2c7 + _0x35dae5,
          _0x8ef657 + _0x379e35,
          _0x356591 + _0x1cfd56,
        ) + _0x92fb88,
      _0x2d5257 =
        Math.max(
          _0xab972e + _0x3e97cd,
          _0x3d6950 + _0x3c91b8,
          _0x465dd7 + _0x48ead1,
        ) + _0x92fb88;
    return {
      left: _0x13db6d,
      top: _0x3f1f47,
      width: _0x187cb2 - _0x13db6d,
      height: _0x2d5257 - _0x3f1f47,
    };
  }
  _drawSourceHighlight(_0x17438e, _0x479cc8) {
    var _0x4e43e0;
    let _0x39f661 = this._state["sourceBounds"];
    if (!_0x39f661) return;
    let _0x29695f = Y.sourceHaloScreen / _0x479cc8,
      _0x82a0f2 = Z(_0x39f661.left, 0) - _0x29695f,
      _0x25eed8 = Z(_0x39f661.top, 0) - _0x29695f,
      _0xbeeed5 = Math.max(1, Z(_0x39f661.width, Wt())) + _0x29695f * 2,
      _0x138f43 = Math.max(1, Z(_0x39f661.height, Gt())) + _0x29695f * 2;
    (_0x17438e.save(),
      (_0x17438e.globalAlpha = 1),
      (_0x17438e.lineWidth = Y.lineWidthScreen / _0x479cc8),
      (_0x17438e.strokeStyle = Y.sourceHighlightStrokeColor),
      (_0x17438e.fillStyle = Y.sourceHighlightFillColor),
      (_0x4e43e0 = _0x17438e.setLineDash) == null ||
        _0x4e43e0.call(
          _0x17438e,
          Y.sourceDashScreen["map"]((_0x4bf704) => _0x4bf704 / _0x479cc8),
        ),
      X(_0x17438e, _0x82a0f2, _0x25eed8, _0xbeeed5, _0x138f43, Y.rootRadius),
      _0x17438e.fill(),
      _0x17438e.stroke(),
      _0x17438e.restore());
  }
  _drawConnectorPreview(_0x58e2ec, _0x576691, _0xbb3762) {
    let _0x172c07 = this._state["parentBounds"];
    if (!_0x172c07) return;
    let _0x3871fb = Z(_0x172c07.left, 0),
      _0x5ec0c5 = Z(_0x172c07.top, 0),
      _0x1648b2 = Math.max(1, Z(_0x172c07.width, Wt())),
      _0x51b440 = Math.max(1, Z(_0x172c07.height, Gt())),
      _0x164c3d = Y.branchGap,
      _0x142b14 = this._state["side"] ?? "right";
    if (
      (_0x58e2ec.save(),
      (_0x58e2ec.globalAlpha = Y.connectorAlpha),
      (_0x58e2ec.strokeStyle = Y.primaryColor),
      (_0x58e2ec.lineWidth = Y.lineWidthScreen / _0xbb3762),
      (_0x58e2ec.lineCap = "round"),
      (_0x58e2ec.lineJoin = "round"),
      _0x58e2ec.beginPath(),
      _0x142b14 === "top" || _0x142b14 === "bottom")
    ) {
      let _0x5b3dcb = _0x3871fb + _0x1648b2 / 2,
        _0x50522a = _0x576691.left + _0x576691.width / 2,
        _0x3ed176 = _0x142b14 === "bottom" ? _0x5ec0c5 + _0x51b440 : _0x5ec0c5,
        _0x4ac575 =
          _0x142b14 === "bottom"
            ? _0x576691.top
            : _0x576691.top + _0x576691.height,
        _0x1e75f9 =
          _0x142b14 === "bottom"
            ? Math.min(_0x3ed176 + _0x164c3d, (_0x3ed176 + _0x4ac575) / 2)
            : Math.max(_0x3ed176 - _0x164c3d, (_0x3ed176 + _0x4ac575) / 2);
      (_0x58e2ec.moveTo(_0x5b3dcb, _0x3ed176),
        _0x58e2ec.lineTo(_0x5b3dcb, _0x1e75f9),
        _0x58e2ec.lineTo(_0x50522a, _0x1e75f9),
        _0x58e2ec.lineTo(_0x50522a, _0x4ac575));
    } else {
      let _0x44b3b2 = _0x5ec0c5 + _0x51b440 / 2,
        _0x2c58a4 = _0x576691.top + _0x576691.height / 2,
        _0x2ecd52 = _0x142b14 === "right" ? _0x3871fb + _0x1648b2 : _0x3871fb,
        _0xc47b70 =
          _0x142b14 === "right"
            ? _0x576691.left
            : _0x576691.left + _0x576691.width,
        _0x32f902 =
          _0x142b14 === "right"
            ? Math.min(_0x2ecd52 + _0x164c3d, (_0x2ecd52 + _0xc47b70) / 2)
            : Math.max(_0x2ecd52 - _0x164c3d, (_0x2ecd52 + _0xc47b70) / 2);
      (_0x58e2ec.moveTo(_0x2ecd52, _0x44b3b2),
        _0x58e2ec.lineTo(_0x32f902, _0x44b3b2),
        _0x58e2ec.lineTo(_0x32f902, _0x2c58a4),
        _0x58e2ec.lineTo(_0xc47b70, _0x2c58a4));
    }
    (_0x58e2ec.stroke(), _0x58e2ec.restore());
  }
};
function Yt(_0x15b0c6, _0xa60de) {
  return (
    (_0xa60de == null ? undefined : _0xa60de[_0x15b0c6.elementId]) ??
    _0x15b0c6.element["transform"]
  );
}
function Xt(_0x322e8d, _0x15fe01) {
  let _0x5aa2a7 = Yt(_0x322e8d, _0x15fe01);
  return {
    x: (_0x5aa2a7.left ?? 0) + (_0x5aa2a7.width ?? 0) / 2,
    y: (_0x5aa2a7.top ?? 0) + (_0x5aa2a7.height ?? 0) / 2,
  };
}
function Zt(_0x25a6bb, _0x3e3f78) {
  return Math.hypot(_0x25a6bb.x - _0x3e3f78.x, _0x25a6bb.y - _0x3e3f78.y);
}
function Qt(_0xdf53b, _0x2c52ea) {
  let _0x1208ae = _0xdf53b.left ?? 0,
    _0x5295d7 = _0xdf53b.top ?? 0,
    _0x2114e4 = _0x1208ae + (_0xdf53b.width ?? 0),
    _0x5d7c86 = _0x5295d7 + (_0xdf53b.height ?? 0),
    _0x54a5e1 = _0x2c52ea.left ?? 0,
    _0x95d581 = _0x2c52ea.top ?? 0,
    _0x4c6136 = _0x54a5e1 + (_0x2c52ea.width ?? 0),
    _0x11890d = _0x95d581 + (_0x2c52ea.height ?? 0),
    _0x2f3575 = Math.max(_0x54a5e1 - _0x2114e4, _0x1208ae - _0x4c6136, 0),
    _0x584f40 = Math.max(_0x95d581 - _0x5d7c86, _0x5295d7 - _0x11890d, 0);
  return Math.hypot(_0x2f3575, _0x584f40);
}
function $t(_0x4df4dd, _0x2d3593, _0x2bcba5) {
  var _0x363f31;
  let _0x2e8aad = _0x154a55(
    (_0x363f31 = _0x4df4dd[_0x2d3593]) == null ? undefined : _0x363f31.element,
  );
  for (; _0x2e8aad != null && _0x2e8aad.parentNodeId;) {
    var _0x4b4adc;
    if (_0x2e8aad.parentNodeId === _0x2bcba5) return true;
    _0x2e8aad = _0x154a55(
      (_0x4b4adc = _0x4df4dd[_0x2e8aad.parentNodeId]) == null
        ? undefined
        : _0x4b4adc.element,
    );
  }
  return false;
}
function en(_0x497759, _0x18d060, _0x532142) {
  let _0x333417 = Yt(_0x497759, _0x532142),
    _0xf02b74 = _0x333417.top ?? 0,
    _0x349b08 = _0x333417.height ?? 0;
  return _0x349b08 <= 0
    ? null
    : _0x18d060.y <= _0xf02b74 + _0x349b08 / 3
      ? "before"
      : _0x18d060.y >= _0xf02b74 + (_0x349b08 * 2) / 3
        ? "after"
        : null;
}
function tn(_0x524ad1, _0x29bf44) {
  let _0x497dd0 = _0x29bf44 == null ? undefined : _0x29bf44[_0x524ad1];
  return Number.isFinite(_0x497dd0 == null ? undefined : _0x497dd0.left) &&
    Number.isFinite(_0x497dd0 == null ? undefined : _0x497dd0.top)
    ? { kind: "detach", left: _0x497dd0.left, top: _0x497dd0.top }
    : { kind: "detach" };
}
function nn(_0xd6ca4b, _0x55676a, _0x1c3958) {
  let _0x1c198b = _0xd6ca4b[_0x55676a],
    _0x574ef5 = _0x154a55(_0x1c198b == null ? undefined : _0x1c198b.element);
  if (
    !_0x1c198b ||
    !_0x574ef5 ||
    (!_0x574ef5.parentNodeId &&
      !(_0x1c3958 != null && _0x1c3958.allowRootReparent))
  )
    return { kind: "none" };
  let _0x333eee = _0x1c3958 == null ? undefined : _0x1c3958.boundsByElementId,
    _0x52e4f2 = Yt(_0x1c198b, _0x333eee),
    _0x42a915 = Xt(_0x1c198b, _0x333eee),
    _0x2f54e2 = Object.values(_0xd6ca4b)
      .map((_0x22bbc2) => {
        let _0x3c0a39 = _0x154a55(_0x22bbc2.element);
        return !_0x3c0a39 ||
          _0x22bbc2.elementId === _0x55676a ||
          _0x22bbc2.elementId === _0x574ef5.parentNodeId ||
          (_0x1c3958 != null &&
            _0x1c3958.allowRootReparent &&
            !_0x574ef5.parentNodeId &&
            _0x3c0a39.structureScopeId === _0x574ef5.structureScopeId) ||
          $t(_0xd6ca4b, _0x22bbc2.elementId, _0x55676a)
          ? null
          : {
              item: _0x22bbc2,
              snapDistance: Qt(_0x52e4f2, Yt(_0x22bbc2, _0x333eee)),
              center: Xt(_0x22bbc2, _0x333eee),
            };
      })
      .filter((_0x4c4dc9) => !!_0x4c4dc9)
      .sort(
        (_0x24df94, _0xa1eb1c) =>
          _0x24df94.snapDistance - _0xa1eb1c.snapDistance ||
          Zt(_0x42a915, _0x24df94.center) - Zt(_0x42a915, _0xa1eb1c.center),
      )[0];
  if (_0x2f54e2 && _0x2f54e2.snapDistance <= 100) {
    let _0x5e110f = _0x154a55(_0x2f54e2.item["element"]),
      _0x543c74 =
        _0x5e110f != null && _0x5e110f.parentNodeId
          ? en(_0x2f54e2.item, _0x42a915, _0x333eee)
          : null;
    return _0x5e110f != null && _0x5e110f.parentNodeId && _0x543c74
      ? {
          kind: "reparent",
          newParentNodeId: _0x5e110f.parentNodeId,
          side: _0x5e110f.side ?? "right",
          referenceNodeId: _0x2f54e2.item["elementId"],
          placement: _0x543c74,
        }
      : {
          kind: "reparent",
          newParentNodeId: _0x2f54e2.item["elementId"],
          side: _0x42a915.x < _0x2f54e2.center["x"] ? "left" : "right",
        };
  }
  if (_0x1c3958 != null && _0x1c3958.detachWhenNoSnap)
    return tn(_0x55676a, _0x333eee);
  if (!_0x574ef5.parentNodeId) return { kind: "none" };
  let _0x50f1df = _0xd6ca4b[_0x574ef5.parentNodeId];
  return _0x50f1df && Zt(_0x42a915, Xt(_0x50f1df, _0x333eee)) > 560
    ? tn(_0x55676a, _0x333eee)
    : { kind: "none" };
}
function rn(_0x30154f, _0x5ca86f) {
  var _0x52fad4, _0x37e242;
  return (
    _0x30154f.elementId === _0x5ca86f ||
    ((_0x52fad4 = _0x154a55(_0x30154f.element)) == null
      ? undefined
      : _0x52fad4.structureScopeId) === _0x5ca86f ||
    ((_0x37e242 = _0x2e6f82(_0x30154f.element)) == null
      ? undefined
      : _0x37e242.structureScopeId) === _0x5ca86f
  );
}
function an(_0x119258, _0x79d85e, _0xaed21e, _0x9acfe5) {
  let _0x264c1b = _0x119258[_0x79d85e];
  if (!_0x264c1b) return _0x119258;
  let _0x44571a = _0x264c1b.transform ?? _0x264c1b.element["transform"] ?? {};
  return {
    ..._0x119258,
    [_0x79d85e]: {
      ..._0x264c1b,
      transform: {
        ..._0x44571a,
        left: (_0x44571a.left ?? 0) + _0xaed21e,
        top: (_0x44571a.top ?? 0) + _0x9acfe5,
      },
      element: {
        ..._0x264c1b.element,
        transform: {
          ..._0x264c1b.element["transform"],
          left: (_0x264c1b.element["transform"].left ?? 0) + _0xaed21e,
          top: (_0x264c1b.element["transform"].top ?? 0) + _0x9acfe5,
        },
      },
    },
  };
}
function on(_0x151fbb) {
  if (
    !Number.isFinite(_0x151fbb.liveRootBounds["left"]) ||
    !Number.isFinite(_0x151fbb.liveRootBounds["top"]) ||
    !Number.isFinite(_0x151fbb.rootStartBounds["left"]) ||
    !Number.isFinite(_0x151fbb.rootStartBounds["top"])
  )
    return null;
  let _0x2e9ab7 =
      _0x151fbb.liveRootBounds["left"] - _0x151fbb.rootStartBounds["left"],
    _0x25309d =
      _0x151fbb.liveRootBounds["top"] - _0x151fbb.rootStartBounds["top"],
    _0x4c9131 = an(
      _0x151fbb.elementData,
      _0x151fbb.scopeId,
      _0x2e9ab7,
      _0x25309d,
    ),
    _0x1486e3 = [];
  return (
    Object.values(_0x4c9131).forEach((_0x57c378) => {
      if (
        _0x57c378.elementId === _0x151fbb.rootNodeId ||
        _0x57c378.elementId === _0x151fbb.scopeId ||
        !rn(_0x57c378, _0x151fbb.scopeId)
      )
        return;
      if ("connectorData" in _0x57c378.element) {
        var _0x41a4a9;
        let _0x482811 =
          (_0x41a4a9 = _0x151fbb.elementData[_0x57c378.elementId]) == null
            ? undefined
            : _0x41a4a9.element;
        _0x482811 &&
          "connectorData" in _0x482811 &&
          _0x1486e3.push({
            kind: "connector",
            elementId: _0x57c378.elementId,
            element: _0x41b5e7(_0x482811, { x: _0x2e9ab7, y: _0x25309d }),
          });
        return;
      }
      let _0x89452e = _0x2a21c9(_0x4c9131, _0x57c378.elementId);
      _0x89452e &&
        _0x1486e3.push({
          kind: "bounds",
          elementId: _0x57c378.elementId,
          bounds: _0x89452e,
        });
    }),
    {
      deltaX: _0x2e9ab7,
      deltaY: _0x25309d,
      elementData: _0x4c9131,
      items: _0x1486e3,
    }
  );
}
let sn = class extends _0x25c64b {
  constructor(
    _0x4a49ed,
    _0x3afb3a,
    _0x2c52f4,
    _0x3bf9be,
    _0xe7ab8a,
    _0x11466b,
    _0xb803cb,
  ) {
    (super(),
      (this._renderContext = _0x4a49ed),
      (this._boardElementService = _0x3afb3a),
      (this._elementStateService = _0x2c52f4),
      (this._commandService = _0x3bf9be),
      (this._uiStateService = _0xe7ab8a),
      (this._instanceService = _0x11466b),
      (this._undoRedoGroupService = _0xb803cb),
      G(this, "_dragStart", null),
      G(this, "_pointerDragStart", null),
      G(this, "_dragPreviewObject", null),
      G(this, "_childDragActivated", false),
      G(this, "_lastChildDragAction", null),
      G(this, "_objectPointerDisposables", null),
      G(this, "_attachObjectPointerScheduled", false),
      G(this, "_activePointerDragDisposables", null),
      G(this, "_childDragSelectionHidden", false),
      this._init());
  }
  _init() {
    var _0xa8fbd5, _0x218d2e, _0x4994f4, _0x17b572, _0x31e3bc;
    let _0x5b5b14 = this._renderContext["scene"].getTransformerByCreate();
    (this.disposeWithMe(
      _0x5ab28a(
        _0x5b5b14.changeStart$["pipe"](_0x2777f5(this.dispose$)).subscribe(
          () => {
            this._captureDragStart();
          },
        ),
      ),
    ),
      this.disposeWithMe(
        _0x5ab28a(
          ((_0xa8fbd5 = _0x5b5b14.changing$) == null
            ? undefined
            : _0xa8fbd5
                .pipe(_0x2777f5(this.dispose$))
                .subscribe((_0x281d44) => {
                  this._syncDragPreview(
                    _0x281d44 == null ? undefined : _0x281d44.objects,
                  );
                })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          _0x5b5b14.changeEnd$["pipe"](_0x2777f5(this.dispose$)).subscribe(
            (_0x52ab66) => {
              setTimeout(
                () =>
                  this._applyDragTopologyAction(
                    _0x52ab66 == null ? undefined : _0x52ab66.objects,
                  ),
                0,
              );
            },
          ),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          ((_0x218d2e = this._renderContext["scene"].onPointerDown$) == null
            ? undefined
            : _0x218d2e.subscribeEvent({
                priority: 3,
                next: ([_0x201d0f]) =>
                  this._capturePointerChildDragStart(_0x201d0f),
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          ((_0x4994f4 = this._renderContext["scene"].onPointerMove$) == null
            ? undefined
            : _0x4994f4.subscribeEvent({
                priority: 3,
                next: ([_0x2b4178, _0x34208a]) =>
                  this._syncPointerChildDragPreview(_0x2b4178, _0x34208a),
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          ((_0x17b572 = this._renderContext["scene"].onPointerUp$) == null
            ? undefined
            : _0x17b572.subscribeEvent({
                priority: 3,
                next: ([_0x5be55c, _0x1f9fc3]) =>
                  this._applyPointerChildDrag(_0x5be55c, _0x1f9fc3),
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          ((_0x31e3bc = this._renderContext["scene"].onPointerCancel$) == null
            ? undefined
            : _0x31e3bc.subscribeEvent({
                priority: 3,
                next: ([, _0x140283]) =>
                  this._cancelPointerChildDrag(_0x140283),
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(() => {
          var _0x54a8d9;
          return (_0x54a8d9 = this._objectPointerDisposables) == null
            ? undefined
            : _0x54a8d9.dispose();
        }),
      ),
      this.disposeWithMe(
        _0x5ab28a(() => this._disposeActivePointerDragListeners()),
      ),
      this._subscribeElementDataChanges(),
      this._scheduleAttachObjectPointerListeners(),
      this.disposeWithMe(_0x5ab28a(() => this._removeDragPreviewObject())));
  }
  _subscribeElementDataChanges() {
    ([
      this._boardElementService["elementAdd$"],
      this._boardElementService["elementUpdate$"],
      this._boardElementService["elementRemove$"],
    ].forEach((_0x94f421) => {
      this.disposeWithMe(
        _0x5ab28a(
          _0x94f421.pipe(_0x2777f5(this.dispose$)).subscribe(() => {
            this._scheduleAttachObjectPointerListeners();
          }),
        ),
      );
    }),
      this._elementStateService["state$"] &&
        this.disposeWithMe(
          _0x5ab28a(
            this._elementStateService["state$"]
              .pipe(_0x2777f5(this.dispose$))
              .subscribe(() => {
                this._scheduleAttachObjectPointerListeners();
              }),
          ),
        ));
  }
  _scheduleAttachObjectPointerListeners() {
    this._attachObjectPointerScheduled ||
      ((this._attachObjectPointerScheduled = true),
      Promise.resolve().then(() => this._attachObjectPointerListeners()));
  }
  _attachObjectPointerListeners() {
    var _0x4c7430;
    this._attachObjectPointerScheduled = false;
    let _0x3b5570 = this._resolveCurrentBoardContext(),
      _0x4c8077 = this._renderContext["scene"];
    if (!_0x3b5570 || typeof _0x4c8077.getObject != "function") return;
    let _0x23a146 = this._boardElementService["getElementData"](
        _0x3b5570.unitId,
        _0x3b5570.subUnitId,
      ),
      _0x3a65d1 = new _0x89f2a7();
    ((_0x4c7430 = this._objectPointerDisposables) == null ||
      _0x4c7430.dispose(),
      (this._objectPointerDisposables = _0x3a65d1),
      Object.values(_0x23a146).forEach((_0x2193a6) => {
        var _0x169bae, _0x9366c3;
        let _0x2a4b09 = _0x154a55(_0x2193a6.element);
        if (!(_0x2a4b09 != null && _0x2a4b09.parentNodeId)) return;
        let _0x4c4110 = _0x5967eb(_0x3b5570.unitId, _0x2193a6.elementId),
          _0x201e7f =
            ((_0x169bae = _0x4c8077.getObjectIncludeInGroup) == null
              ? undefined
              : _0x169bae.call(_0x4c8077, _0x4c4110)) ??
            ((_0x9366c3 = _0x4c8077.getObject) == null
              ? undefined
              : _0x9366c3.call(_0x4c8077, _0x4c4110));
        _0x201e7f != null &&
          _0x201e7f.onPointerDown$ &&
          _0x3a65d1.add(
            _0x201e7f.onPointerDown$["subscribeEvent"]({
              priority: -10,
              next: ([_0x42ef94, _0x722d55]) =>
                this._capturePointerChildDragStart(
                  _0x42ef94,
                  {
                    unitId: _0x3b5570.unitId,
                    subUnitId: _0x3b5570.subUnitId,
                    nodeId: _0x2193a6.elementId,
                  },
                  _0x722d55,
                ),
            }),
          );
      }));
  }
  _resolveCurrentBoardContext() {
    let _0x4c90e7 = this._elementStateService["getSnapshot"]().context;
    if (_0x4c90e7) return _0x4c90e7;
    let _0x3b57aa = this._renderContext["unitId"],
      _0x489442 = _0x3b57aa
        ? this._instanceService["getUnit"](_0x3b57aa, _0x2b7b4b.UNIVER_BOARD)
        : null,
      _0x5464b5 = _0x489442 == null ? undefined : _0x489442.getActivePageId();
    return !_0x489442 || !_0x5464b5
      ? null
      : { unitId: _0x489442.getUnitId(), subUnitId: _0x5464b5 };
  }
  _captureDragStart() {
    let _0x378ceb = this._elementStateService["getSnapshot"]();
    ((this._childDragActivated = false),
      (this._childDragSelectionHidden = false),
      (this._lastChildDragAction = null));
    let _0x251067 = _0x378ceb.context,
      _0x55cafa = _0x378ceb.focusedId ?? _0x378ceb.selectedIds[0];
    if (!_0x251067 || !_0x55cafa) {
      ((this._dragStart = null), this._removeDragPreviewObject());
      return;
    }
    let _0x10f219 = this._boardElementService["getElementData"](
      _0x251067.unitId,
      _0x251067.subUnitId,
    );
    if (_0x378ceb.selectedIds["length"] > 1) {
      let _0x80e03a = this._resolveCompleteSelectedScope(
        _0x10f219,
        _0x378ceb.selectedIds,
      );
      if (!_0x80e03a) {
        ((this._dragStart = null), this._removeDragPreviewObject());
        return;
      }
      let _0x459f1a = _0x10f219[_0x80e03a.rootNodeId],
        _0x959f78 = _0x2a21c9(_0x10f219, _0x80e03a.rootNodeId),
        _0x173bf6 = _0x459f1a.element["transform"];
      this._dragStart = {
        kind: "scope",
        unitId: _0x251067.unitId,
        subUnitId: _0x251067.subUnitId,
        nodeId: _0x80e03a.rootNodeId,
        scopeId: _0x80e03a.scopeId,
        left:
          (_0x959f78 == null ? undefined : _0x959f78.left) ??
          _0x173bf6.left ??
          0,
        top:
          (_0x959f78 == null ? undefined : _0x959f78.top) ?? _0x173bf6.top ?? 0,
        width:
          (_0x959f78 == null ? undefined : _0x959f78.width) ??
          _0x173bf6.width ??
          0,
        height:
          (_0x959f78 == null ? undefined : _0x959f78.height) ??
          _0x173bf6.height ??
          0,
        elementData: _0x10f219,
      };
      return;
    }
    let _0x26106b = _0x10f219[_0x55cafa],
      _0x373fee = _0x154a55(_0x26106b == null ? undefined : _0x26106b.element);
    if (!_0x26106b || !_0x373fee) {
      ((this._dragStart = null), this._removeDragPreviewObject());
      return;
    }
    let _0x23cb4d = _0x2a21c9(_0x10f219, _0x55cafa),
      _0x358049 = _0x26106b.element["transform"];
    this._dragStart = {
      kind: _0x373fee.parentNodeId === null ? "root" : "child",
      unitId: _0x251067.unitId,
      subUnitId: _0x251067.subUnitId,
      nodeId: _0x55cafa,
      scopeId: _0x373fee.structureScopeId,
      left:
        (_0x23cb4d == null ? undefined : _0x23cb4d.left) ?? _0x358049.left ?? 0,
      top:
        (_0x23cb4d == null ? undefined : _0x23cb4d.top) ?? _0x358049.top ?? 0,
      width:
        (_0x23cb4d == null ? undefined : _0x23cb4d.width) ??
        _0x358049.width ??
        0,
      height:
        (_0x23cb4d == null ? undefined : _0x23cb4d.height) ??
        _0x358049.height ??
        0,
      elementData: _0x10f219,
    };
  }
  _resolveCompleteSelectedScope(_0x285f51, _0x14432e) {
    let _0x1469a8 = new Set(_0x14432e),
      _0x4caba2 = _0x14432e.map((_0x16858a) => {
        var _0x16f33e, _0x13bd74, _0x5de09d, _0x55d638;
        let _0x4ec313 =
          (_0x16f33e = _0x285f51[_0x16858a]) == null
            ? undefined
            : _0x16f33e.element;
        return (
          ((_0x13bd74 = _0x154a55(_0x4ec313)) == null
            ? undefined
            : _0x13bd74.structureScopeId) ??
          ((_0x5de09d = _0x2e6f82(_0x4ec313)) == null
            ? undefined
            : _0x5de09d.structureScopeId) ??
          ((_0x55d638 = _0x3cec18(_0x4ec313)) == null
            ? undefined
            : _0x55d638.structureScopeId) ??
          null
        );
      });
    if (
      _0x4caba2.some((_0x20cfd5) => _0x20cfd5 === null) ||
      new Set(_0x4caba2).size !== 1
    )
      return null;
    let _0x31be19 = _0x4caba2[0];
    if (!_0x31be19) return null;
    let _0x26ea17 = Object.values(_0x285f51).filter((_0x35a3ed) => {
      var _0x387745;
      return (
        _0x35a3ed.element["visible"] !== false &&
        ((_0x387745 = _0x154a55(_0x35a3ed.element)) == null
          ? undefined
          : _0x387745.structureScopeId) === _0x31be19
      );
    });
    if (
      _0x26ea17.length === 0 ||
      _0x26ea17.some((_0x4d16ab) => !_0x1469a8.has(_0x4d16ab.elementId))
    )
      return null;
    let _0x45a842 = _0x26ea17.filter((_0x4de7e9) => {
      var _0x4bcfdd;
      return (
        ((_0x4bcfdd = _0x154a55(_0x4de7e9.element)) == null
          ? undefined
          : _0x4bcfdd.parentNodeId) === null
      );
    });
    return _0x45a842.length === 1
      ? { rootNodeId: _0x45a842[0].elementId, scopeId: _0x31be19 }
      : null;
  }
  _capturePointerChildDragStart(_0x3c6414, _0x3ce594, _0x154264) {
    var _0x4387a0, _0x3f1513, _0x36e050, _0x385a67, _0x28aec1;
    if (
      this._uiStateService["getState"]().interactionMode === "viewing" ||
      (_0x3c6414.button ?? 0) !== 0
    )
      return;
    let _0x9c3fb2 = this._elementStateService["getSnapshot"]();
    if (_0x9c3fb2.activeEditingId) {
      this._pointerDragStart = null;
      return;
    }
    let _0x3d751e = _0x3ce594
        ? { unitId: _0x3ce594.unitId, subUnitId: _0x3ce594.subUnitId }
        : (_0x9c3fb2.context ?? this._resolveCurrentBoardContext()),
      _0x4bb7e5 =
        (_0x3ce594 == null ? undefined : _0x3ce594.nodeId) ??
        (_0x9c3fb2.selectedIds["length"] === 1
          ? (_0x9c3fb2.focusedId ?? _0x9c3fb2.selectedIds[0])
          : undefined);
    if (!_0x3d751e) {
      this._pointerDragStart = null;
      return;
    }
    let _0x37bcae = this._boardElementService["getElementData"](
        _0x3d751e.unitId,
        _0x3d751e.subUnitId,
      ),
      _0x4fb593 = this._getBoardPointFromEvent(_0x3c6414);
    if (!_0x3ce594) {
      let _0x15292d = _0x4bb7e5 ? _0x37bcae[_0x4bb7e5] : null,
        _0x3c5544 = _0x154a55(
          _0x15292d == null ? undefined : _0x15292d.element,
        ),
        _0x41aed6 = _0x4bb7e5
          ? (_0x2a21c9(_0x37bcae, _0x4bb7e5) ??
            (_0x15292d == null ? undefined : _0x15292d.element["transform"]))
          : null;
      (!(_0x3c5544 != null && _0x3c5544.parentNodeId) ||
        !_0x41aed6 ||
        !this._isPointInBounds(_0x4fb593, {
          left: _0x41aed6.left ?? 0,
          top: _0x41aed6.top ?? 0,
          width: _0x41aed6.width ?? 0,
          height: _0x41aed6.height ?? 0,
        })) &&
        (_0x4bb7e5 = this._findChildNodeAtPoint(_0x37bcae, _0x4fb593));
    }
    if (!_0x4bb7e5) {
      this._pointerDragStart = null;
      return;
    }
    let _0x29fa5c = _0x37bcae[_0x4bb7e5],
      _0x2b67bc = _0x154a55(_0x29fa5c == null ? undefined : _0x29fa5c.element);
    if (!_0x29fa5c || !(_0x2b67bc != null && _0x2b67bc.parentNodeId)) {
      this._pointerDragStart = null;
      return;
    }
    (this._instanceService["focusUnit"](_0x3d751e.unitId),
      (_0x4387a0 = this._renderContext["engine"]) == null ||
        (_0x3f1513 = _0x4387a0.getCanvasElement) == null ||
        (_0x3f1513 = _0x3f1513.call(_0x4387a0)) == null ||
        (_0x36e050 = _0x3f1513.focus) == null ||
        _0x36e050.call(_0x3f1513, { preventScroll: true }),
      (_0x385a67 = (_0x28aec1 = this._elementStateService).selectElements) ==
        null || _0x385a67.call(_0x28aec1, _0x3d751e, [_0x4bb7e5], _0x4bb7e5),
      _0x154264 == null || _0x154264.stopPropagation());
    let _0x1cd323 = _0x2a21c9(_0x37bcae, _0x4bb7e5),
      _0x23578a = _0x29fa5c.element["transform"],
      _0xe7c5cd = {
        left:
          (_0x1cd323 == null ? undefined : _0x1cd323.left) ??
          _0x23578a.left ??
          0,
        top:
          (_0x1cd323 == null ? undefined : _0x1cd323.top) ?? _0x23578a.top ?? 0,
        width:
          (_0x1cd323 == null ? undefined : _0x1cd323.width) ??
          _0x23578a.width ??
          0,
        height:
          (_0x1cd323 == null ? undefined : _0x1cd323.height) ??
          _0x23578a.height ??
          0,
      };
    if (!_0x3ce594 && !this._isPointInBounds(_0x4fb593, _0xe7c5cd)) {
      this._pointerDragStart = null;
      return;
    }
    let _0x47ecd0 = this._getPointerScreenPoint(_0x3c6414);
    ((this._childDragActivated = false),
      (this._childDragSelectionHidden = false),
      (this._lastChildDragAction = null),
      (this._pointerDragStart = {
        kind: "child",
        unitId: _0x3d751e.unitId,
        subUnitId: _0x3d751e.subUnitId,
        nodeId: _0x4bb7e5,
        scopeId: _0x2b67bc.structureScopeId,
        ..._0xe7c5cd,
        pointerStartX: _0x47ecd0.x,
        pointerStartY: _0x47ecd0.y,
        elementData: _0x37bcae,
      }),
      this._attachActivePointerDragListeners(),
      this._consumePointerEvent(_0x3c6414, _0x154264));
  }
  _syncPointerChildDragPreview(_0x2d3c58, _0x134f48) {
    var _0x39e2b9, _0x4aff38;
    let _0x5ee9cd = this._pointerDragStart;
    if (
      !_0x5ee9cd ||
      (_0x2d3c58.buttons !== undefined && _0x2d3c58.buttons !== 1)
    )
      return;
    let _0x367a2c = this._getPointerLiveBounds(_0x2d3c58, _0x5ee9cd);
    if (!this._isChildDragPastActivationThreshold(_0x5ee9cd, _0x367a2c)) return;
    (this._childDragActivated || this._hideSelectionForChildDrag(),
      (this._childDragActivated = true));
    let _0x55241d = this._createTopologyBoundsByElementId(
        _0x5ee9cd.elementData,
        _0x5ee9cd.nodeId,
        _0x367a2c,
      ),
      _0x6b3176 = nn(_0x5ee9cd.elementData, _0x5ee9cd.nodeId, {
        boundsByElementId: _0x55241d,
        detachWhenNoSnap: true,
      });
    ((this._lastChildDragAction = _0x6b3176),
      this._syncChildDragPreviewObject(_0x367a2c, _0x6b3176, _0x55241d),
      this._consumePointerEvent(_0x2d3c58, _0x134f48),
      this._renderContext["scene"].makeDirty(true),
      (_0x39e2b9 = (_0x4aff38 = this._renderContext["scene"]).requestRender) ==
        null || _0x39e2b9.call(_0x4aff38));
  }
  _applyPointerChildDrag(_0x4c5557, _0x72538f) {
    let _0x237771 = this._pointerDragStart;
    if (!_0x237771) return;
    if (
      ((this._pointerDragStart = null),
      this._disposeActivePointerDragListeners(),
      this._removeDragPreviewObject(),
      !this._childDragActivated)
    ) {
      this._lastChildDragAction = null;
      return;
    }
    let _0x1098b8 = this._boardElementService["getElementData"](
        _0x237771.unitId,
        _0x237771.subUnitId,
      ),
      _0x2205ca = this._getPointerLiveBounds(_0x4c5557, _0x237771),
      _0x44585e = this._createTopologyBoundsByElementId(
        _0x1098b8,
        _0x237771.nodeId,
        _0x2205ca,
      ),
      _0x46e595 = nn(_0x1098b8, _0x237771.nodeId, {
        boundsByElementId: _0x44585e,
        detachWhenNoSnap: true,
      });
    ((this._lastChildDragAction = null),
      this._executeChildDragAction(
        _0x237771.unitId,
        _0x237771.subUnitId,
        _0x237771.nodeId,
        _0x1098b8,
        _0x46e595,
      ),
      (this._childDragSelectionHidden = false),
      this._consumePointerEvent(_0x4c5557, _0x72538f));
  }
  _cancelPointerChildDrag(_0xc3be75) {
    let _0x22e501 = this._pointerDragStart;
    if (_0x22e501) {
      if (
        ((this._pointerDragStart = null),
        this._disposeActivePointerDragListeners(),
        (this._childDragActivated = false),
        (this._lastChildDragAction = null),
        this._removeDragPreviewObject(),
        this._childDragSelectionHidden)
      ) {
        var _0x188e13, _0x598a49;
        ((_0x188e13 = (_0x598a49 = this._elementStateService).selectElements) ==
          null ||
          _0x188e13.call(
            _0x598a49,
            { unitId: _0x22e501.unitId, subUnitId: _0x22e501.subUnitId },
            [_0x22e501.nodeId],
            _0x22e501.nodeId,
          ),
          (this._childDragSelectionHidden = false));
      }
      _0xc3be75 == null || _0xc3be75.stopPropagation();
    }
  }
  _attachActivePointerDragListeners() {
    this._disposeActivePointerDragListeners();
    let _0x2a10fd = typeof window > "u" ? null : window;
    if (!(_0x2a10fd != null && _0x2a10fd.addEventListener)) return;
    let _0x2df0c2 = new _0x89f2a7(),
      _0x15015f = (_0x60a7e3) => this._syncPointerChildDragPreview(_0x60a7e3),
      _0xe787a4 = (_0x29af0f) => this._applyPointerChildDrag(_0x29af0f),
      _0x5b69be = () => this._cancelPointerChildDrag();
    (_0x2a10fd.addEventListener("pointermove", _0x15015f, { capture: true }),
      _0x2a10fd.addEventListener("pointerup", _0xe787a4, { capture: true }),
      _0x2a10fd.addEventListener("pointercancel", _0x5b69be, { capture: true }),
      _0x2df0c2.add(
        _0x5ab28a(() => {
          (_0x2a10fd.removeEventListener("pointermove", _0x15015f, {
            capture: true,
          }),
            _0x2a10fd.removeEventListener("pointerup", _0xe787a4, {
              capture: true,
            }),
            _0x2a10fd.removeEventListener("pointercancel", _0x5b69be, {
              capture: true,
            }));
        }),
      ),
      (this._activePointerDragDisposables = _0x2df0c2));
  }
  _findChildNodeAtPoint(_0x414501, _0x20db35) {
    let _0x25491b = Object.values(_0x414501);
    for (let _0x24c05d = _0x25491b.length - 1; _0x24c05d >= 0; --_0x24c05d) {
      let _0xc4b6c1 = _0x25491b[_0x24c05d],
        _0x3cd322 = _0x154a55(_0xc4b6c1.element);
      if (!(_0x3cd322 != null && _0x3cd322.parentNodeId)) continue;
      let _0x1b36b7 =
        _0x2a21c9(_0x414501, _0xc4b6c1.elementId) ??
        _0xc4b6c1.element["transform"];
      if (
        this._isPointInBounds(_0x20db35, {
          left: _0x1b36b7.left ?? 0,
          top: _0x1b36b7.top ?? 0,
          width: _0x1b36b7.width ?? 0,
          height: _0x1b36b7.height ?? 0,
        })
      )
        return _0xc4b6c1.elementId;
    }
  }
  _disposeActivePointerDragListeners() {
    var _0x2432b1;
    ((_0x2432b1 = this._activePointerDragDisposables) == null ||
      _0x2432b1.dispose(),
      (this._activePointerDragDisposables = null));
  }
  _syncDragPreview(_0x16c3cc) {
    let _0xfed29b = this._dragStart;
    if (_0xfed29b) {
      if (
        ((_0xfed29b.kind === "root" || _0xfed29b.kind === "scope") &&
          this._syncRootScopePreview(_0x16c3cc),
        _0xfed29b.kind === "root")
      ) {
        this._syncRootReparentPreview(_0x16c3cc);
        return;
      }
      this._syncChildDragPreview(_0x16c3cc);
    }
  }
  _syncRootScopePreview(_0x462f48) {
    let _0x26cbe0 = this._dragStart;
    if (!_0x26cbe0 || (_0x26cbe0.kind !== "root" && _0x26cbe0.kind !== "scope"))
      return;
    let _0x249bdf =
      _0x462f48 == null
        ? undefined
        : _0x462f48.get(_0x5967eb(_0x26cbe0.unitId, _0x26cbe0.nodeId));
    if (
      !_0x249bdf ||
      !Number.isFinite(_0x249bdf.left) ||
      !Number.isFinite(_0x249bdf.top)
    )
      return;
    let _0xb13a = on({
      elementData: _0x26cbe0.elementData,
      rootNodeId: _0x26cbe0.nodeId,
      scopeId: _0x26cbe0.scopeId,
      rootStartBounds: { left: _0x26cbe0.left, top: _0x26cbe0.top },
      liveRootBounds: { left: _0x249bdf.left, top: _0x249bdf.top },
    });
    if (!_0xb13a) return;
    let _0x5eb38b = this._renderContext["scene"],
      _0x5ac958 = _0x5eb38b,
      _0x37c531 = false;
    (_0xb13a.items["forEach"]((_0x5ed907) => {
      var _0x437927;
      let _0x3543c7 = _0x5967eb(_0x26cbe0.unitId, _0x5ed907.elementId),
        _0x48ca14 =
          ((_0x437927 = _0x5ac958.getObjectIncludeInGroup) == null
            ? undefined
            : _0x437927.call(_0x5ac958, _0x3543c7)) ??
          _0x5eb38b.getObject(_0x3543c7);
      if (_0x48ca14) {
        if (
          _0x5ed907.kind === "connector" &&
          typeof _0x48ca14.updateElement == "function"
        ) {
          (_0x48ca14.updateElement(_0x5ed907.element, _0xb13a.elementData),
            (_0x37c531 = true));
          return;
        }
        _0x5ed907.kind === "bounds" &&
          (_0x48ca14.transformByState(_0x5ed907.bounds),
          typeof _0x48ca14.makeDirtyNoDebounce == "function"
            ? _0x48ca14.makeDirtyNoDebounce(true)
            : _0x48ca14.makeDirty(true),
          (_0x37c531 = true));
      }
    }),
      _0x37c531 && _0x5eb38b.makeDirty(true));
  }
  _syncRootReparentPreview(_0x4e1df8) {
    var _0xcd1134, _0x314fdb;
    let _0x5f0628 = this._dragStart;
    if (!_0x5f0628 || _0x5f0628.kind !== "root") return;
    let _0xe26fbd =
      _0x4e1df8 == null
        ? undefined
        : _0x4e1df8.get(_0x5967eb(_0x5f0628.unitId, _0x5f0628.nodeId));
    if (
      !_0xe26fbd ||
      !Number.isFinite(_0xe26fbd.left) ||
      !Number.isFinite(_0xe26fbd.top)
    ) {
      this._removeDragPreviewObject();
      return;
    }
    let _0x3b4944 = this._getLiveObjectBounds(_0xe26fbd, _0x5f0628),
      _0x5ad124 = this._createTopologyBoundsByElementId(
        _0x5f0628.elementData,
        _0x5f0628.nodeId,
        _0x3b4944,
      ),
      _0x52d86d = nn(_0x5f0628.elementData, _0x5f0628.nodeId, {
        boundsByElementId: _0x5ad124,
        allowRootReparent: true,
      });
    if (_0x52d86d.kind !== "reparent") {
      this._removeDragPreviewObject();
      return;
    }
    let _0x5d72a3 = this._ensureDragPreviewObject();
    _0x5d72a3 &&
      (_0x5d72a3.updateState({
        ghostBounds: _0x3b4944,
        sourceBounds: null,
        parentBounds: _0x5ad124[_0x52d86d.newParentNodeId],
        side: _0x52d86d.side,
        textStyle: undefined,
        renderGhostNode: false,
      }),
      this._renderContext["scene"].makeDirty(true),
      (_0xcd1134 = (_0x314fdb = this._renderContext["scene"]).requestRender) ==
        null || _0xcd1134.call(_0x314fdb));
  }
  _syncChildDragPreview(_0x3b6bb6) {
    var _0x5501f1, _0x2cabf1;
    let _0x8656a9 = this._dragStart;
    if (!_0x8656a9 || _0x8656a9.kind !== "child") return;
    let _0x311cff =
      _0x3b6bb6 == null
        ? undefined
        : _0x3b6bb6.get(_0x5967eb(_0x8656a9.unitId, _0x8656a9.nodeId));
    if (!_0x311cff) {
      this._removeDragPreviewObject();
      return;
    }
    let _0xf8f223 = this._getLiveObjectBounds(_0x311cff, _0x8656a9);
    if (!this._isChildDragPastActivationThreshold(_0x8656a9, _0xf8f223)) {
      ((this._lastChildDragAction = null),
        this._removeDragPreviewObject(),
        this._restoreObjectToDragStart(_0x311cff, _0x8656a9),
        this._renderContext["scene"].makeDirty(true));
      return;
    }
    (this._childDragActivated || this._hideSelectionForChildDrag(),
      (this._childDragActivated = true));
    let _0x9f1ba5 = this._createTopologyBoundsByElementId(
        _0x8656a9.elementData,
        _0x8656a9.nodeId,
        _0xf8f223,
      ),
      _0x196a25 = nn(_0x8656a9.elementData, _0x8656a9.nodeId, {
        boundsByElementId: _0x9f1ba5,
        detachWhenNoSnap: true,
      });
    ((this._lastChildDragAction = _0x196a25),
      this._syncChildDragPreviewObject(_0xf8f223, _0x196a25, _0x9f1ba5),
      this._restoreObjectToDragStart(_0x311cff, _0x8656a9),
      this._renderContext["scene"].makeDirty(true),
      (_0x5501f1 = (_0x2cabf1 = this._renderContext["scene"]).requestRender) ==
        null || _0x5501f1.call(_0x2cabf1));
  }
  _applyDragTopologyAction(_0xf2b7c1) {
    var _0x40568b;
    let _0x30dc36 = this._elementStateService["getSnapshot"](),
      _0x5e17b4 = _0x30dc36.context,
      _0x2f21e6 = _0x30dc36.focusedId ?? _0x30dc36.selectedIds[0];
    if (
      _0x5e17b4 &&
      ((_0x40568b = this._dragStart) == null ? undefined : _0x40568b.kind) ===
        "scope"
    ) {
      (this._removeDragPreviewObject(),
        this._applyScopeTranslation(
          _0x5e17b4.unitId,
          _0x5e17b4.subUnitId,
          _0xf2b7c1,
        ));
      return;
    }
    if (!_0x5e17b4 || !_0x2f21e6 || _0x30dc36.selectedIds["length"] !== 1) {
      (this._removeDragPreviewObject(), (this._dragStart = null));
      return;
    }
    this._removeDragPreviewObject();
    let _0x3a2ec4 = this._boardElementService["getElementData"](
      _0x5e17b4.unitId,
      _0x5e17b4.subUnitId,
    );
    if (
      this._applyRootTranslation(
        _0x5e17b4.unitId,
        _0x5e17b4.subUnitId,
        _0x2f21e6,
        _0x3a2ec4,
        _0xf2b7c1,
      )
    )
      return;
    let _0xf1b239 = this._resolveChildDragTopologyAction(
      _0x5e17b4.unitId,
      _0x5e17b4.subUnitId,
      _0x2f21e6,
      _0x3a2ec4,
      _0xf2b7c1,
    );
    this._executeChildDragAction(
      _0x5e17b4.unitId,
      _0x5e17b4.subUnitId,
      _0x2f21e6,
      _0x3a2ec4,
      _0xf1b239,
    );
  }
  _applyScopeTranslation(_0x37f865, _0x4ec81e, _0x4668a9) {
    let _0x4432f4 = this._dragStart;
    if (
      ((this._dragStart = null),
      !_0x4432f4 ||
        _0x4432f4.kind !== "scope" ||
        _0x4432f4.unitId !== _0x37f865 ||
        _0x4432f4.subUnitId !== _0x4ec81e)
    )
      return;
    let _0x2b8ff0 =
        _0x4668a9 == null
          ? undefined
          : _0x4668a9.get(_0x5967eb(_0x37f865, _0x4432f4.nodeId)),
      _0x3bb342 =
        _0x2b8ff0 && Number.isFinite(_0x2b8ff0.left)
          ? (_0x2b8ff0.left ?? _0x4432f4.left)
          : _0x4432f4.left,
      _0x717537 =
        _0x2b8ff0 && Number.isFinite(_0x2b8ff0.top)
          ? (_0x2b8ff0.top ?? _0x4432f4.top)
          : _0x4432f4.top,
      _0x433f4a = _0x3bb342 - _0x4432f4.left,
      _0x28f889 = _0x717537 - _0x4432f4.top;
    (_0x433f4a !== 0 || _0x28f889 !== 0) &&
      this._commandService["executeCommand"](_0x4b24dc.id, {
        unitId: _0x37f865,
        subUnitId: _0x4ec81e,
        scopeId: _0x4432f4.scopeId,
        deltaX: _0x433f4a,
        deltaY: _0x28f889,
      });
  }
  _executeChildDragAction(
    _0x50fd2a,
    _0x549ec6,
    _0x4805ee,
    _0x2d6fdb,
    _0x562382,
  ) {
    if (_0x562382.kind === "reparent") {
      var _0x301efc, _0x51f756;
      let _0x195982 = _0x154a55(
          (_0x301efc = _0x2d6fdb[_0x4805ee]) == null
            ? undefined
            : _0x301efc.element,
        ),
        _0x29b107 = _0x154a55(
          (_0x51f756 = _0x2d6fdb[_0x562382.newParentNodeId]) == null
            ? undefined
            : _0x51f756.element,
        );
      this._executeAndLayout(
        _0x407f7a.id,
        {
          unitId: _0x50fd2a,
          subUnitId: _0x549ec6,
          nodeId: _0x4805ee,
          newParentNodeId: _0x562382.newParentNodeId,
          side: _0x562382.side,
          ...(_0x562382.referenceNodeId
            ? { referenceNodeId: _0x562382.referenceNodeId }
            : null),
          ...(_0x562382.placement ? { placement: _0x562382.placement } : null),
        },
        [
          _0x195982 == null ? undefined : _0x195982.structureScopeId,
          _0x29b107 == null ? undefined : _0x29b107.structureScopeId,
        ],
        _0x4805ee,
      );
      return;
    }
    if (_0x562382.kind === "detach") {
      var _0x1b4b7e;
      let _0x23ba1d = _0x154a55(
        (_0x1b4b7e = _0x2d6fdb[_0x4805ee]) == null
          ? undefined
          : _0x1b4b7e.element,
      );
      this._executeAndLayout(
        _0x3d7f52.id,
        {
          unitId: _0x50fd2a,
          subUnitId: _0x549ec6,
          nodeId: _0x4805ee,
          ...(Number.isFinite(_0x562382.left)
            ? { left: _0x562382.left }
            : null),
          ...(Number.isFinite(_0x562382.top) ? { top: _0x562382.top } : null),
        },
        [_0x23ba1d == null ? undefined : _0x23ba1d.structureScopeId],
        _0x4805ee,
      );
    }
  }
  _applyRootTranslation(_0x2d37fe, _0x3cf734, _0x25edaf, _0xc8d265, _0x41a2a9) {
    let _0x212da1 = this._dragStart;
    if (
      ((_0x212da1 == null ? undefined : _0x212da1.kind) === "root" &&
        (this._dragStart = null),
      !_0x212da1 ||
        _0x212da1.unitId !== _0x2d37fe ||
        _0x212da1.subUnitId !== _0x3cf734 ||
        _0x212da1.nodeId !== _0x25edaf)
    )
      return false;
    let _0x2ee73b = _0xc8d265[_0x25edaf],
      _0xa87a26 = _0x154a55(_0x2ee73b == null ? undefined : _0x2ee73b.element);
    if (!_0x2ee73b || !_0xa87a26 || _0xa87a26.parentNodeId !== null)
      return false;
    let _0x5dea0d =
        _0x41a2a9 == null
          ? undefined
          : _0x41a2a9.get(_0x5967eb(_0x2d37fe, _0x25edaf)),
      _0x2fcedf = _0x2a21c9(_0xc8d265, _0x25edaf),
      _0x584653 = Number.isFinite(
        _0x5dea0d == null ? undefined : _0x5dea0d.left,
      )
        ? _0x5dea0d.left
        : ((_0x2fcedf == null ? undefined : _0x2fcedf.left) ??
          _0x2ee73b.element["transform"].left ??
          0),
      _0x51993f = Number.isFinite(_0x5dea0d == null ? undefined : _0x5dea0d.top)
        ? _0x5dea0d.top
        : ((_0x2fcedf == null ? undefined : _0x2fcedf.top) ??
          _0x2ee73b.element["transform"].top ??
          0),
      _0x13e7f6 = _0x584653 - _0x212da1.left,
      _0x15148c = _0x51993f - _0x212da1.top;
    if (_0x13e7f6 === 0 && _0x15148c === 0) return true;
    let _0x4ad197 = {
        left: _0x584653,
        top: _0x51993f,
        width: Number.isFinite(_0x5dea0d == null ? undefined : _0x5dea0d.width)
          ? _0x5dea0d.width
          : _0x212da1.width,
        height: Number.isFinite(
          _0x5dea0d == null ? undefined : _0x5dea0d.height,
        )
          ? _0x5dea0d.height
          : _0x212da1.height,
      },
      _0x283210 = nn(_0xc8d265, _0x25edaf, {
        boundsByElementId: this._createTopologyBoundsByElementId(
          _0xc8d265,
          _0x25edaf,
          _0x4ad197,
        ),
        allowRootReparent: true,
      });
    if (_0x283210.kind === "reparent")
      return (
        this._executeChildDragAction(
          _0x2d37fe,
          _0x3cf734,
          _0x25edaf,
          _0xc8d265,
          _0x283210,
        ),
        true
      );
    let _0x12d1e8 =
      !!_0x2fcedf &&
      Math.abs(_0x2fcedf.left - _0x584653) < 0.001 &&
      Math.abs(_0x2fcedf.top - _0x51993f) < 0.001;
    return (
      this._commandService["executeCommand"](_0x4b24dc.id, {
        unitId: _0x2d37fe,
        subUnitId: _0x3cf734,
        scopeId: _0x212da1.scopeId,
        deltaX: _0x13e7f6,
        deltaY: _0x15148c,
        ...(_0x12d1e8
          ? {
              excludeElementIds: [_0x25edaf],
              preserveExcludedWorldTransforms: true,
            }
          : null),
      }),
      true
    );
  }
  _resolveChildDragTopologyAction(
    _0x3975e2,
    _0x9642fe,
    _0x542a5e,
    _0x116d3a,
    _0x4537e5,
  ) {
    let _0x10e0c2 = this._dragStart;
    if (
      !_0x10e0c2 ||
      _0x10e0c2.kind !== "child" ||
      _0x10e0c2.unitId !== _0x3975e2 ||
      _0x10e0c2.subUnitId !== _0x9642fe ||
      _0x10e0c2.nodeId !== _0x542a5e
    )
      return { kind: "none" };
    this._dragStart = null;
    let _0x401b9a =
      _0x4537e5 == null
        ? undefined
        : _0x4537e5.get(_0x5967eb(_0x3975e2, _0x542a5e));
    if (!this._childDragActivated)
      return (
        _0x401b9a && this._restoreObjectToDragStart(_0x401b9a, _0x10e0c2),
        (this._lastChildDragAction = null),
        { kind: "none" }
      );
    if (!_0x401b9a) {
      let _0x19606b = this._lastChildDragAction ?? { kind: "none" };
      return ((this._lastChildDragAction = null), _0x19606b);
    }
    let _0x38db22 = this._getLiveObjectBounds(_0x401b9a, _0x10e0c2);
    if (
      (this._restoreObjectToDragStart(_0x401b9a, _0x10e0c2),
      !this._isChildDragPastActivationThreshold(_0x10e0c2, _0x38db22))
    )
      return ((this._lastChildDragAction = null), { kind: "none" });
    let _0x3abd6b = nn(_0x116d3a, _0x542a5e, {
      boundsByElementId: this._createTopologyBoundsByElementId(
        _0x116d3a,
        _0x542a5e,
        _0x38db22,
      ),
      detachWhenNoSnap: true,
    });
    return ((this._lastChildDragAction = null), _0x3abd6b);
  }
  _isChildDragPastActivationThreshold(_0x488029, _0x5e77eb) {
    let _0x40fcb9 = (_0x5e77eb.left ?? _0x488029.left) - _0x488029.left,
      _0x4e99e3 = (_0x5e77eb.top ?? _0x488029.top) - _0x488029.top;
    return Math.hypot(_0x40fcb9, _0x4e99e3) >= 18;
  }
  _getPointerLiveBounds(_0x308f7a, _0x1b48d7) {
    let _0x382988 = this._getPointerScreenPoint(_0x308f7a),
      _0x596020 = this._getZoomRatio();
    return {
      left:
        _0x1b48d7.left + (_0x382988.x - _0x1b48d7.pointerStartX) / _0x596020,
      top: _0x1b48d7.top + (_0x382988.y - _0x1b48d7.pointerStartY) / _0x596020,
      width: _0x1b48d7.width,
      height: _0x1b48d7.height,
    };
  }
  _getBoardPointFromEvent(_0x56ce0a) {
    let _0x51dd3a = this._uiStateService["getState"](),
      _0x522cb5 = (_0x51dd3a == null
        ? undefined
        : _0x51dd3a.viewportPanOffset) ?? { x: 0, y: 0 },
      _0x2172ef = this._getZoomRatio();
    return {
      x: Math.round(((_0x56ce0a.offsetX ?? 0) - _0x522cb5.x) / _0x2172ef),
      y: Math.round(((_0x56ce0a.offsetY ?? 0) - _0x522cb5.y) / _0x2172ef),
    };
  }
  _getPointerScreenPoint(_0x374b56) {
    return {
      x: Number.isFinite(_0x374b56.clientX)
        ? _0x374b56.clientX
        : (_0x374b56.offsetX ?? 0),
      y: Number.isFinite(_0x374b56.clientY)
        ? _0x374b56.clientY
        : (_0x374b56.offsetY ?? 0),
    };
  }
  _getZoomRatio() {
    let _0x270074 = this._uiStateService["getState"]().zoomRatio;
    return Number.isFinite(_0x270074) && (_0x270074 ?? 0) > 0 ? _0x270074 : 1;
  }
  _isPointInBounds(_0x91f56, _0x4c14f2) {
    return (
      _0x91f56.x >= _0x4c14f2.left &&
      _0x91f56.x <= _0x4c14f2.left + _0x4c14f2.width &&
      _0x91f56.y >= _0x4c14f2.top &&
      _0x91f56.y <= _0x4c14f2.top + _0x4c14f2.height
    );
  }
  _consumePointerEvent(_0x4e6ac0, _0x341846) {
    var _0x16fbbf, _0x48814a;
    (_0x341846 == null || _0x341846.stopPropagation(),
      _0x341846 && (_0x341846.skipNextObservers = true),
      (_0x16fbbf = _0x4e6ac0.preventDefault) == null ||
        _0x16fbbf.call(_0x4e6ac0),
      (_0x48814a = _0x4e6ac0.stopPropagation) == null ||
        _0x48814a.call(_0x4e6ac0));
  }
  _hideSelectionForChildDrag() {
    var _0x2f747d, _0x46499b;
    this._childDragSelectionHidden ||=
      ((_0x2f747d = (_0x46499b = this._elementStateService).clearSelection) ==
        null || _0x2f747d.call(_0x46499b),
      true);
  }
  _getLiveObjectBounds(_0x27cd10, _0x55a64e) {
    return {
      left: Number.isFinite(_0x27cd10.left) ? _0x27cd10.left : _0x55a64e.left,
      top: Number.isFinite(_0x27cd10.top) ? _0x27cd10.top : _0x55a64e.top,
      width: Number.isFinite(_0x27cd10.width)
        ? _0x27cd10.width
        : _0x55a64e.width,
      height: Number.isFinite(_0x27cd10.height)
        ? _0x27cd10.height
        : _0x55a64e.height,
    };
  }
  _restoreObjectToDragStart(_0x1342c6, _0x5417a5) {
    (typeof _0x1342c6.transformByState == "function" &&
      _0x1342c6.transformByState({
        left: _0x5417a5.left,
        top: _0x5417a5.top,
        width: _0x5417a5.width,
        height: _0x5417a5.height,
      }),
      typeof _0x1342c6.makeDirtyNoDebounce == "function"
        ? _0x1342c6.makeDirtyNoDebounce(true)
        : typeof _0x1342c6.makeDirty == "function" &&
          _0x1342c6.makeDirty(true));
  }
  _createTopologyBoundsByElementId(_0x2dc618, _0x32231a, _0x531ad5) {
    return Object.fromEntries(
      Object.keys(_0x2dc618).map((_0x2d6d7a) =>
        _0x2d6d7a === _0x32231a
          ? [_0x2d6d7a, _0x531ad5]
          : [
              _0x2d6d7a,
              _0x2a21c9(_0x2dc618, _0x2d6d7a) ??
                _0x2dc618[_0x2d6d7a].element["transform"],
            ],
      ),
    );
  }
  _ensureDragPreviewObject() {
    if (this._dragPreviewObject) return this._dragPreviewObject;
    let _0x1c6d32 = this._renderContext["scene"];
    return typeof _0x1c6d32.addObject == "function"
      ? ((this._dragPreviewObject = new Jt(Ht)),
        _0x1c6d32.addObject(this._dragPreviewObject, Ut),
        this._dragPreviewObject)
      : null;
  }
  _syncChildDragPreviewObject(_0x26a548, _0x5d9325, _0x511ad1) {
    let _0x4173b6 = this._ensureDragPreviewObject();
    _0x4173b6 &&
      _0x4173b6.updateState({
        ghostBounds: _0x26a548,
        sourceBounds: this._resolvePreviewSourceBounds(),
        parentBounds:
          _0x5d9325.kind === "reparent"
            ? _0x511ad1[_0x5d9325.newParentNodeId]
            : null,
        side: _0x5d9325.kind === "reparent" ? _0x5d9325.side : "right",
        textStyle: this._resolvePreviewTextStyle(),
        renderGhostNode: true,
      });
  }
  _resolvePreviewSourceBounds() {
    let _0x17f3a6 = this._pointerDragStart ?? this._dragStart;
    return _0x17f3a6
      ? {
          left: _0x17f3a6.left,
          top: _0x17f3a6.top,
          width: _0x17f3a6.width,
          height: _0x17f3a6.height,
        }
      : null;
  }
  _resolvePreviewTextStyle() {
    var _0x19dfa8, _0x2fed34;
    let _0x3219c1 = this._pointerDragStart ?? this._dragStart,
      _0x42f7c0 =
        _0x3219c1 == null ||
        (_0x19dfa8 = _0x3219c1.elementData[_0x3219c1.nodeId]) == null
          ? undefined
          : _0x19dfa8.element,
      _0x3fecdb =
        _0x42f7c0 == null || (_0x2fed34 = _0x42f7c0.shapeData) == null
          ? undefined
          : _0x2fed34.shapeText;
    if (_0x3fecdb)
      return {
        text: typeof _0x3fecdb.text == "string" ? _0x3fecdb.text : undefined,
        fontSize: Number.isFinite(_0x3fecdb.fontSize)
          ? _0x3fecdb.fontSize
          : undefined,
        color: typeof _0x3fecdb.color == "string" ? _0x3fecdb.color : undefined,
        horizontalAlign: Number.isFinite(_0x3fecdb.horizontalAlign)
          ? _0x3fecdb.horizontalAlign
          : undefined,
      };
  }
  _removeDragPreviewObject() {
    var _0x3b3559, _0x3f5ca7, _0x8f3656;
    if (!this._dragPreviewObject) return;
    let _0xaab299 = this._renderContext["scene"];
    ((_0x3b3559 = _0xaab299.removeObjects) == null ||
      _0x3b3559.call(_0xaab299, [this._dragPreviewObject]),
      (this._dragPreviewObject = null),
      (_0x3f5ca7 = (_0x8f3656 = this._renderContext["scene"]).makeDirty) ==
        null || _0x3f5ca7.call(_0x8f3656, true));
  }
  _executeAndLayout(_0x3467f9, _0x47900d, _0x371c9b, _0x2a983f) {
    let _0x135010 = [...new Set(_0x371c9b.filter((_0x8d1283) => !!_0x8d1283))],
      _0x367f3a =
        typeof _0x47900d.unitId == "string"
          ? _0x47900d.unitId
          : this._renderContext["unitId"],
      _0x16793c = this._undoRedoGroupService["createRunner"](_0x367f3a),
      _0x47f1b0 = _0x16793c(() =>
        this._commandService["executeCommand"](_0x3467f9, _0x47900d),
      );
    Promise.resolve(_0x47f1b0).then((_0x37735c) => {
      var _0x2e7bfb, _0x5352b9, _0x101703, _0x454e69;
      if (_0x37735c) {
        if (
          (_0x135010.forEach((_0x213dae) => {
            _0x16793c(() =>
              this._commandService["executeCommand"](_0x2f141c.id, {
                unitId: _0x47900d.unitId,
                subUnitId: _0x47900d.subUnitId,
                scopeId: _0x213dae,
              }),
            );
          }),
          _0x2a983f &&
            typeof _0x47900d.unitId == "string" &&
            typeof _0x47900d.subUnitId == "string")
        ) {
          var _0x3d6298, _0x1a7e20;
          (_0x3d6298 = (_0x1a7e20 = this._elementStateService)
            .selectElements) == null ||
            _0x3d6298.call(
              _0x1a7e20,
              { unitId: _0x47900d.unitId, subUnitId: _0x47900d.subUnitId },
              [_0x2a983f],
              _0x2a983f,
            );
        }
        ((_0x2e7bfb = (_0x5352b9 = this._renderContext["scene"]).makeDirty) ==
          null || _0x2e7bfb.call(_0x5352b9, true),
          (_0x101703 = (_0x454e69 = this._renderContext["scene"])
            .requestRender) == null || _0x101703.call(_0x454e69));
      }
    });
  }
};
sn = q(
  [
    K(1, _0x50be27(_0x569c18)),
    K(2, _0x50be27(_0x4b6ba3)),
    K(3, _0x3ef066),
    K(4, _0x225839),
    K(5, _0x2f0059),
    K(6, _0x50be27(_0x3efd59)),
  ],
  sn,
);
let cn = class extends _0x43d28b {
  constructor(
    _0x54a2e4,
    _0x294ed0,
    _0x5353bc,
    _0x19808e,
    _0x29bc28,
    _0x4aa93e,
    _0x5e5e16,
    _0x2f2f40,
    _0xf86ca5,
  ) {
    (super(),
      (this.renderContext = _0x54a2e4),
      (this.commandService = _0x294ed0),
      (this.elementService = _0x5353bc),
      (this.elementStateService = _0x19808e),
      (this.uiStateService = _0x29bc28),
      (this.clipboardService = _0x4aa93e),
      (this.dialogService = _0x5e5e16),
      (this.localeService = _0x2f2f40),
      (this.textEditingService = _0xf86ca5));
  }
};
cn = q(
  [
    K(1, _0x3ef066),
    K(2, _0x569c18),
    K(3, _0x4b6ba3),
    K(4, _0x225839),
    K(5, _0x5313d4),
    K(6, _0x77cafb),
    K(7, _0x50be27(_0xc75da)),
    K(8, _0x50be27(_0x2888b1)),
  ],
  cn,
);
const ln = "board.mind-map.description-dialog",
  un = "board-mind-map-description-dialog";
function dn(_0x5c3d2f) {
  let {
      unitId: _0x55401f,
      subUnitId: _0xd207d6,
      nodeId: _0x40371d,
      initialDescription: _0x3826cb = "",
    } = _0x5c3d2f,
    _0x4d936c = _0x5a5b51(_0x3ef066),
    _0x8661ff = _0x5a5b51(_0x77cafb),
    _0x3ad0d1 = _0x5a5b51(_0xc75da),
    [_0x3c6573, _0x492e8b] = _0x12b1e6(_0x3826cb),
    _0x530b98 = () => _0x8661ff.close(un);
  return _0x155d01("div", {
    className:
      "univer-flex\x20univer-w-full\x20univer-flex-col\x20univer-gap-4",
    "data-board-mind-map-description-dialog": "true",
    children: [
      _0x155d01("label", {
        className: "univer-flex univer-flex-col univer-gap-2",
        children: [
          _0x22a183("span", {
            className:
              "univer-text-sm univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
            children: _0x3ad0d1.t("boards-mind-ui.description"),
          }),
          _0x22a183(_0x44c26c, {
            autoFocus: true,
            className: "univer-h-32 univer-resize-none univer-text-sm",
            placeholder: _0x3ad0d1.t("boards-mind-ui.descriptionPlaceholder"),
            value: _0x3c6573,
            onValueChange: _0x492e8b,
          }),
        ],
      }),
      _0x155d01("div", {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [
          _0x22a183(_0xde39, {
            size: "small",
            variant: "default",
            onClick: _0x530b98,
            children: _0x3ad0d1.t("boards-mind-ui.cancel"),
          }),
          _0x22a183(_0xde39, {
            size: "small",
            variant: "primary",
            onClick: () => {
              (_0x4d936c.executeCommand(_0x287f19.id, {
                unitId: _0x55401f,
                subUnitId: _0xd207d6,
                nodeId: _0x40371d,
                foreignAttributes: {
                  _note: _0x3c6573.trim() ? _0x3c6573 : null,
                },
              }),
                _0x530b98());
            },
            children: _0x3ad0d1.t("boards-mind-ui.saveDescription"),
          }),
        ],
      }),
    ],
  });
}
const fn = "board.operation.mind-map.keyboard-shortcut",
  pn = "FOCUSING_MIND_MAP_NODE",
  mn = "FOCUSING_MIND_MAP_BLANK_BOARD",
  hn = {
    copy: _0x32a756.copy,
    paste: _0x32a756.paste,
    "paste-as-new": _0x32a756.paste,
    "add-child": _0x32a756.addChildNode,
    "add-sibling-or-child": _0x32a756.addSiblingNode,
    promote: _0x32a756.addParentNode,
    "toggle-collapse": _0x32a756.foldChildNodes,
    "collapse-all": _0x32a756.collapseAllNodes,
    "edit-text": _0x32a756.editCurrentNode,
    "open-description": _0x32a756.addDescription,
    delete: _0x208b9e.DELETE,
    "arrow-left": _0x208b9e.ARROW_LEFT,
    "arrow-right": _0x208b9e.ARROW_RIGHT,
    "arrow-up": _0x208b9e.ARROW_UP,
    "arrow-down": _0x208b9e.ARROW_DOWN,
  },
  gn = { delete: [_0x208b9e.BACKSPACE] };
function _n(_0x7e59cf) {
  return [hn[_0x7e59cf], ...(gn[_0x7e59cf] ?? [])];
}
let vn = class extends _0x25c64b {
  constructor(_0x947da9, _0x377b64, _0x2baadd, _0xe186b7) {
    (super(),
      (this._mindMapClipboardService = _0x947da9),
      (this._commandService = _0x377b64),
      (this._shortcutService = _0x2baadd),
      (this._undoRedoGroupService = _0xe186b7),
      this._init());
  }
  _init() {
    (this.disposeWithMe(
      this._commandService["registerCommand"](
        this._createKeyboardShortcutOperation(),
      ),
    ),
      this._createShortcutItems().forEach((_0x21f902) => {
        this.disposeWithMe(
          this._shortcutService["registerShortcut"](_0x21f902),
        );
      }));
  }
  _createKeyboardShortcutOperation() {
    return {
      id: fn,
      type: _0x6acd.OPERATION,
      handler: (_0x4a2043, _0x1ea42a, _0x1b046b) => {
        let _0x17ea9f = yn(_0x4a2043, _0x1b046b);
        return _0x17ea9f
          ? this.handleShortcut(
              _0x17ea9f,
              _0x1ea42a == null ? undefined : _0x1ea42a.action,
            )
          : false;
      },
    };
  }
  _createShortcutItems() {
    let _0x2016d8 = (_0x4c7ea5, _0xd50679) => ({
        id: fn,
        binding: _0x4c7ea5,
        priority: 160,
        preconditions: (_0x9261c9) => !!_0x9261c9.getContextValue(pn),
        staticParameters: { action: _0xd50679 },
      }),
      _0x2bac81 = (_0x1b6704) =>
        _n(_0x1b6704).map((_0x411940) => _0x2016d8(_0x411940, _0x1b6704));
    return [
      ..._0x2bac81("copy"),
      {
        id: fn,
        binding: hn.paste,
        priority: 160,
        preconditions: (_0x396a9) =>
          !!this._mindMapClipboardService["getPayload"]() &&
          !!_0x396a9.getContextValue("FOCUSING_MIND_MAP_NODE"),
        staticParameters: { action: "paste" },
      },
      {
        id: fn,
        binding: hn["paste-as-new"],
        priority: 150,
        preconditions: (_0x54b884) =>
          !!this._mindMapClipboardService["getPayload"]() &&
          !!_0x54b884.getContextValue("FOCUSING_MIND_MAP_BLANK_BOARD"),
        staticParameters: { action: "paste-as-new" },
      },
      ..._0x2bac81("add-child"),
      ..._0x2bac81("add-sibling-or-child"),
      ..._0x2bac81("promote"),
      ..._0x2bac81("toggle-collapse"),
      ..._0x2bac81("collapse-all"),
      ..._0x2bac81("edit-text"),
      ..._0x2bac81("open-description"),
      ..._0x2bac81("delete"),
      ..._0x2bac81("arrow-left"),
      ..._0x2bac81("arrow-right"),
      ..._0x2bac81("arrow-up"),
      ..._0x2bac81("arrow-down"),
    ];
  }
  handleShortcut(_0x484db6, _0x28b91f) {
    return _0x484db6.uiStateService["getState"]().interactionMode ===
      "viewing" && _0x28b91f !== "copy"
      ? false
      : _0x28b91f === "copy"
        ? this._copySelectedNode(_0x484db6)
        : _0x28b91f === "paste"
          ? this._pasteUnderSelectedNode(_0x484db6)
          : _0x28b91f === "paste-as-new"
            ? this._pasteAsNewMindMap(_0x484db6)
            : _0x28b91f === "add-child"
              ? this._addChild(_0x484db6)
              : _0x28b91f === "add-sibling-or-child"
                ? this._addSiblingOrChild(_0x484db6)
                : _0x28b91f === "promote"
                  ? this._executeNodeOperation(_0x484db6, _0x81610c.id)
                  : _0x28b91f === "toggle-collapse"
                    ? this._executeNodeOperation(_0x484db6, _0x252a9a.id)
                    : _0x28b91f === "collapse-all"
                      ? this._collapseAll(_0x484db6)
                      : _0x28b91f === "edit-text"
                        ? this._openSelectedTextEditing(_0x484db6)
                        : _0x28b91f === "open-description"
                          ? this._openDescriptionDialog(_0x484db6)
                          : _0x28b91f === "delete"
                            ? this._deleteSelectedNode(_0x484db6)
                            : _0x28b91f && bn(_0x28b91f)
                              ? this._navigateByTopology(_0x484db6, _0x28b91f)
                              : false;
  }
  _copySelectedNode(_0x2ff523) {
    let _0x1bf35c = this._getSelectedMindMapContext(_0x2ff523);
    return _0x1bf35c
      ? (_0x2ff523.commandService["executeCommand"](_0x26aa67.id, {
          unitId: _0x1bf35c.unitId,
          subUnitId: _0x1bf35c.subUnitId,
          nodeId: _0x1bf35c.nodeId,
        }),
        true)
      : false;
  }
  _pasteUnderSelectedNode(_0x13f5ee) {
    let _0x43f973 = this._getSelectedMindMapContext(_0x13f5ee);
    return !_0x43f973 || !_0x13f5ee.clipboardService["getPayload"]()
      ? false
      : (this._executeAndLayout(
          _0x13f5ee,
          _0x2fbbef.id,
          {
            unitId: _0x43f973.unitId,
            subUnitId: _0x43f973.subUnitId,
            targetNodeId: _0x43f973.nodeId,
          },
          _0x43f973.scopeId,
        ),
        true);
  }
  _pasteAsNewMindMap(_0x3baedf) {
    let _0x108a85 = this._getBlankBoardContext(_0x3baedf);
    if (!_0x108a85 || !_0x3baedf.clipboardService["getPayload"]()) return false;
    let _0x2d1d5d = _0x3baedf.uiStateService["getState"](),
      _0x5cbe2f =
        Number.isFinite(_0x2d1d5d.zoomRatio) && _0x2d1d5d.zoomRatio > 0
          ? _0x2d1d5d.zoomRatio
          : 1,
      _0x1e9eea = Math.round(
        (64 - _0x2d1d5d.viewportPanOffset["x"]) / _0x5cbe2f,
      ),
      _0x55d382 = Math.round(
        (64 - _0x2d1d5d.viewportPanOffset["y"]) / _0x5cbe2f,
      );
    return (
      _0x3baedf.commandService["executeCommand"](_0x2b9c59.id, {
        unitId: _0x108a85.unitId,
        subUnitId: _0x108a85.subUnitId,
        left: _0x1e9eea,
        top: _0x55d382,
      }),
      true
    );
  }
  _addChild(_0x51f38f) {
    let _0x476c6d = this._getSelectedMindMapContext(_0x51f38f);
    if (!_0x476c6d) return false;
    let _0x5c9fe7 = _0x33cedd(6);
    return (
      this._executeCreateAndEdit(
        _0x51f38f,
        _0x1349bc.id,
        {
          unitId: _0x476c6d.unitId,
          subUnitId: _0x476c6d.subUnitId,
          parentNodeId: _0x476c6d.nodeId,
          nodeId: _0x5c9fe7,
          connectorId: _0x33cedd(6),
          text: _0x51f38f.localeService["t"]("boards-mind-ui.panel.addText"),
        },
        _0x476c6d.scopeId,
        _0x5c9fe7,
      ),
      true
    );
  }
  _addSiblingOrChild(_0x1dc776) {
    let _0x1277b2 = this._getSelectedMindMapContext(_0x1dc776);
    if (!_0x1277b2) return false;
    let _0x4db1dc = _0x33cedd(6);
    return (
      this._executeCreateAndEdit(
        _0x1dc776,
        _0x1277b2.isRoot ? _0x1349bc.id : _0x8524f9.id,
        {
          unitId: _0x1277b2.unitId,
          subUnitId: _0x1277b2.subUnitId,
          ...(_0x1277b2.isRoot
            ? { parentNodeId: _0x1277b2.nodeId, nodeId: _0x4db1dc }
            : { nodeId: _0x1277b2.nodeId, siblingNodeId: _0x4db1dc }),
          connectorId: _0x33cedd(6),
          text: _0x1dc776.localeService["t"]("boards-mind-ui.panel.addText"),
        },
        _0x1277b2.scopeId,
        _0x4db1dc,
      ),
      true
    );
  }
  _executeNodeOperation(_0x6a5fd4, _0x120e34) {
    let _0x37b443 = this._getSelectedMindMapContext(_0x6a5fd4);
    return _0x37b443
      ? (this._executeAndLayout(
          _0x6a5fd4,
          _0x120e34,
          {
            unitId: _0x37b443.unitId,
            subUnitId: _0x37b443.subUnitId,
            nodeId: _0x37b443.nodeId,
          },
          _0x37b443.scopeId,
        ),
        true)
      : false;
  }
  _deleteSelectedNode(_0x597422) {
    let _0x50acdf = this._getSelectedMindMapContext(_0x597422);
    if (!_0x50acdf) return false;
    let _0x888878 = _0x597422.commandService["syncExecuteCommand"](
      _0x2bd9d8.id,
      {
        unitId: _0x50acdf.unitId,
        subUnitId: _0x50acdf.subUnitId,
        nodeId: _0x50acdf.nodeId,
      },
    );
    return (
      _0x888878 && _0x597422.elementStateService["clearSelection"](),
      _0x888878
    );
  }
  _collapseAll(_0x2d352d) {
    let _0x4460b1 = this._getSelectedMindMapContext(_0x2d352d);
    if (!_0x4460b1) return false;
    let _0x1371ff = _0x2d352d.elementService["getElementData"](
        _0x4460b1.unitId,
        _0x4460b1.subUnitId,
      ),
      _0xa19c22 = Object.values(_0x1371ff)
        .map((_0x364167) => {
          let _0x20a464 = _0x154a55(_0x364167.element);
          return (_0x20a464 == null
            ? undefined
            : _0x20a464.structureScopeId) === _0x4460b1.scopeId &&
            this._getMindMapChildren(
              _0x1371ff,
              _0x4460b1.scopeId,
              _0x364167.elementId,
            ).length > 0
            ? { nodeId: _0x364167.elementId, collapsed: _0x20a464.collapsed }
            : null;
        })
        .filter((_0x2cfabc) => !!_0x2cfabc);
    if (_0xa19c22.length === 0) return false;
    let _0x3ed5ad = _0xa19c22.some((_0x18d507) => !_0x18d507.collapsed),
      _0x41de3c = _0x2d352d.commandService,
      _0x903b20 = this._undoRedoGroupService["createRunner"](_0x4460b1.unitId),
      _0x43a887 = _0xa19c22.map((_0xef7f8) =>
        _0x903b20(() =>
          _0x41de3c.executeCommand(_0x252a9a.id, {
            unitId: _0x4460b1.unitId,
            subUnitId: _0x4460b1.subUnitId,
            nodeId: _0xef7f8.nodeId,
            collapsed: _0x3ed5ad,
          }),
        ),
      );
    return (
      Promise.all(
        _0x43a887.map((_0x236b17) => Promise.resolve(_0x236b17)),
      ).then((_0x507e11) => {
        _0x507e11.some(Boolean) &&
          _0x903b20(() =>
            _0x41de3c.executeCommand(_0x2f141c.id, {
              unitId: _0x4460b1.unitId,
              subUnitId: _0x4460b1.subUnitId,
              scopeId: _0x4460b1.scopeId,
            }),
          );
      }),
      true
    );
  }
  _openSelectedTextEditing(_0x2a7e92) {
    let _0x4b6743 = this._getSelectedMindMapContext(_0x2a7e92);
    if (!_0x4b6743) return false;
    _0x2a7e92.elementStateService["selectElements"](
      { unitId: _0x4b6743.unitId, subUnitId: _0x4b6743.subUnitId },
      [_0x4b6743.nodeId],
      _0x4b6743.nodeId,
    );
    let _0x3df577 = _0x2a7e92.textEditingService;
    return (
      _0x3df577.ignoreExternalFocusChanges(),
      _0x3df577.setEditing({
        unitId: _0x4b6743.unitId,
        subUnitId: _0x4b6743.subUnitId,
        shapeId: _0x4b6743.nodeId,
        shapeKey: _0x5967eb(_0x4b6743.unitId, _0x4b6743.nodeId),
        visible: true,
      }),
      true
    );
  }
  _openDescriptionDialog(_0x32bb89) {
    let _0x5a7813 = this._getSelectedMindMapContext(_0x32bb89);
    return _0x5a7813
      ? (_0x32bb89.dialogService["open"]({
          id: un,
          title: { title: "boards-mind-ui.description" },
          width: 420,
          draggable: true,
          mask: false,
          maskClosable: true,
          children: {
            label: ln,
            unitId: _0x5a7813.unitId,
            subUnitId: _0x5a7813.subUnitId,
            nodeId: _0x5a7813.nodeId,
            initialDescription: _0x5a7813.description,
          },
        }),
        true)
      : false;
  }
  _navigateByTopology(_0x2873bb, _0x27447d) {
    let _0x594186 = this._getSelectedMindMapContext(_0x2873bb);
    if (!_0x594186) return false;
    let _0x307a82 = _0x2873bb.elementService["getElementData"](
        _0x594186.unitId,
        _0x594186.subUnitId,
      ),
      _0x5887f3 = _0x307a82[_0x594186.nodeId],
      _0x421f1d = _0x154a55(_0x5887f3 == null ? undefined : _0x5887f3.element);
    if (!_0x5887f3 || !_0x421f1d) return false;
    let _0x45a08a = {
      "arrow-left": "ArrowLeft",
      "arrow-right": "ArrowRight",
      "arrow-up": "ArrowUp",
      "arrow-down": "ArrowDown",
    }[_0x27447d];
    if (!_0x45a08a) return false;
    let _0x30c15a = this._resolveArrowNavigationTarget(
      _0x307a82,
      _0x594186.nodeId,
      _0x421f1d,
      _0x45a08a,
    );
    return _0x30c15a
      ? (_0x2873bb.elementStateService["selectElements"](
          { unitId: _0x594186.unitId, subUnitId: _0x594186.subUnitId },
          [_0x30c15a],
          _0x30c15a,
        ),
        true)
      : false;
  }
  _resolveArrowNavigationTarget(_0x1a4cf3, _0x10a30c, _0x292382, _0xa706f3) {
    let _0xfb26c2 = this._getMindMapChildren(
      _0x1a4cf3,
      _0x292382.structureScopeId,
      _0x10a30c,
    );
    if (_0x292382.parentNodeId === null) {
      if (_0xa706f3 === "ArrowLeft") {
        var _0x182a18;
        return (
          ((_0x182a18 = _0xfb26c2.find((_0x25762f) => {
            var _0x490848;
            return (
              ((_0x490848 = _0x154a55(_0x25762f.element)) == null
                ? undefined
                : _0x490848.side) === "left"
            );
          })) == null
            ? undefined
            : _0x182a18.elementId) ?? null
        );
      }
      if (_0xa706f3 === "ArrowRight") {
        var _0x2ab77d;
        return (
          ((_0x2ab77d = _0xfb26c2.find((_0x242da4) => {
            var _0x146b85;
            return (
              (((_0x146b85 = _0x154a55(_0x242da4.element)) == null
                ? undefined
                : _0x146b85.side) ?? "right") === "right"
            );
          })) == null
            ? undefined
            : _0x2ab77d.elementId) ?? null
        );
      }
      return null;
    }
    let _0x3095fd = _0x292382.side ?? "right",
      _0x14ef6e = _0x3095fd === "right" ? "ArrowLeft" : "ArrowRight",
      _0x546d79 = _0x3095fd === "right" ? "ArrowRight" : "ArrowLeft";
    if (_0xa706f3 === _0x14ef6e) return _0x292382.parentNodeId;
    if (_0xa706f3 === _0x546d79) {
      var _0x21d26f;
      return (
        ((_0x21d26f = _0xfb26c2[0]) == null
          ? undefined
          : _0x21d26f.elementId) ?? null
      );
    }
    if (_0xa706f3 === "ArrowUp" || _0xa706f3 === "ArrowDown") {
      let _0x433279 = this._getMindMapChildren(
          _0x1a4cf3,
          _0x292382.structureScopeId,
          _0x292382.parentNodeId,
        ),
        _0x2e0161 = _0x433279.findIndex(
          (_0x31fcb3) => _0x31fcb3.elementId === _0x10a30c,
        ),
        _0x8e6e0 =
          _0xa706f3 === "ArrowUp"
            ? _0x433279[_0x2e0161 - 1]
            : _0x433279[_0x2e0161 + 1];
      return (_0x8e6e0 == null ? undefined : _0x8e6e0.elementId) ?? null;
    }
    return null;
  }
  _getMindMapChildren(_0x21fb63, _0x178dc0, _0x52a69d) {
    return Object.values(_0x21fb63)
      .filter((_0x19544d) => {
        let _0x9e5b7a = _0x154a55(_0x19544d.element);
        return (
          (_0x9e5b7a == null ? undefined : _0x9e5b7a.structureScopeId) ===
            _0x178dc0 &&
          _0x9e5b7a.parentNodeId === _0x52a69d &&
          _0x19544d.element["visible"] !== false
        );
      })
      .sort((_0x380c35, _0x2c1124) => {
        let _0x5b8d1b = _0x154a55(_0x380c35.element),
          _0x4abe9a = _0x154a55(_0x2c1124.element);
        return (
          _0x9a236e(
            _0x5b8d1b == null ? undefined : _0x5b8d1b.orderKey,
            _0x4abe9a == null ? undefined : _0x4abe9a.orderKey,
          ) || _0x380c35.elementId["localeCompare"](_0x2c1124.elementId)
        );
      });
  }
  _getSelectedMindMapContext(_0x1729ea) {
    var _0x3e3290;
    let _0x5bf5bd = _0x1729ea.elementStateService["getSnapshot"](),
      _0x45151a = _0x5bf5bd.focusedId ?? _0x5bf5bd.selectedIds[0];
    if (
      !_0x45151a ||
      _0x5bf5bd.selectedIds["length"] !== 1 ||
      _0x5bf5bd.activeEditingId ||
      _0x5bf5bd.isTransforming
    )
      return null;
    let _0x454a19 = _0x5bf5bd.context ?? {
        unitId: _0x1729ea.renderContext["unitId"],
        subUnitId: _0x1729ea.renderContext["unit"].getActivePageId(),
      },
      _0x334a0c = _0x1729ea.elementService["getElementData"](
        _0x454a19.unitId,
        _0x454a19.subUnitId,
      )[_0x45151a],
      _0x23b225 = _0x154a55(_0x334a0c == null ? undefined : _0x334a0c.element);
    return !_0x334a0c || !_0x23b225
      ? null
      : {
          unitId: _0x454a19.unitId,
          subUnitId: _0x454a19.subUnitId,
          nodeId: _0x45151a,
          scopeId: _0x23b225.structureScopeId,
          isRoot: _0x23b225.parentNodeId === null,
          description:
            ((_0x3e3290 = _0x23b225.foreignAttributes) == null
              ? undefined
              : _0x3e3290._note) ?? "",
        };
  }
  _getBlankBoardContext(_0x1aa8e4) {
    var _0x11274c, _0x2ec7b0;
    let _0x5a9d4f = _0x1aa8e4.elementStateService["getSnapshot"]();
    return _0x5a9d4f.activeEditingId ||
      _0x5a9d4f.isTransforming ||
      _0x5a9d4f.selectedIds["length"] > 0 ||
      _0x5a9d4f.focusedId
      ? null
      : {
          unitId:
            ((_0x11274c = _0x5a9d4f.context) == null
              ? undefined
              : _0x11274c.unitId) ?? _0x1aa8e4.renderContext["unitId"],
          subUnitId:
            ((_0x2ec7b0 = _0x5a9d4f.context) == null
              ? undefined
              : _0x2ec7b0.subUnitId) ??
            _0x1aa8e4.renderContext["unit"].getActivePageId(),
        };
  }
  _executeAndLayout(_0x1ae168, _0x211d73, _0x54eff6, _0xf7bdb4) {
    let _0xb65e8f = _0x1ae168.commandService,
      _0x50814c = this._undoRedoGroupService["createRunner"](_0x54eff6.unitId),
      _0xb5ec53 = _0x50814c(() =>
        _0xb65e8f.executeCommand(_0x211d73, _0x54eff6),
      );
    Promise.resolve(_0xb5ec53).then((_0x10434a) => {
      _0x10434a &&
        _0x50814c(() =>
          _0xb65e8f.executeCommand(_0x2f141c.id, {
            unitId: _0x54eff6.unitId,
            subUnitId: _0x54eff6.subUnitId,
            scopeId: _0xf7bdb4,
          }),
        );
    });
  }
  _executeCreateAndEdit(_0x28d9c7, _0x2b1668, _0x2ff158, _0x7fc96a, _0x3a0e57) {
    let _0x2d9e0f = {
        unitId: _0x2ff158.unitId,
        subUnitId: _0x2ff158.subUnitId,
      },
      _0x1355cb = _0x28d9c7.commandService,
      _0x30bd4a = this._undoRedoGroupService["createRunner"](_0x2ff158.unitId),
      _0x4c833e = _0x30bd4a(() =>
        _0x1355cb.executeCommand(_0x2b1668, _0x2ff158),
      );
    Promise.resolve(_0x4c833e).then((_0x5d9eb3) => {
      if (!_0x5d9eb3) return;
      (_0x30bd4a(() =>
        _0x1355cb.executeCommand(_0x2f141c.id, {
          ..._0x2d9e0f,
          scopeId: _0x7fc96a,
        }),
      ),
        _0x28d9c7.elementStateService["selectElements"](
          _0x2d9e0f,
          [_0x3a0e57],
          _0x3a0e57,
        ));
      let _0x3910b5 = _0x28d9c7.textEditingService;
      (_0x3910b5.ignoreExternalFocusChanges(),
        _0x3910b5.setEditing({
          ..._0x2d9e0f,
          shapeId: _0x3a0e57,
          shapeKey: _0x5967eb(_0x2d9e0f.unitId, _0x3a0e57),
          visible: true,
        }));
    });
  }
};
vn = q(
  [
    K(0, _0x5313d4),
    K(1, _0x3ef066),
    K(2, _0x22486e),
    K(3, _0x50be27(_0x3efd59)),
  ],
  vn,
);
function yn(_0x27533a, _0x4e3b17) {
  var _0x48b10e, _0xdbee7b;
  let _0x181a40 =
    typeof (_0x4e3b17 == null ? undefined : _0x4e3b17.unitId) == "string"
      ? _0x4e3b17.unitId
      : (_0x48b10e = _0x27533a
            .get(_0x2f0059)
            .getCurrentUnitOfType(_0x2b7b4b.UNIVER_BOARD)) == null
        ? undefined
        : _0x48b10e.getUnitId();
  return _0x181a40
    ? (((_0xdbee7b = _0x27533a.get(_0xa94842).getRenderUnitById(_0x181a40)) ==
      null
        ? undefined
        : _0xdbee7b.with(cn)) ?? null)
    : null;
}
function bn(_0x5aa99d) {
  return (
    _0x5aa99d === "arrow-left" ||
    _0x5aa99d === "arrow-right" ||
    _0x5aa99d === "arrow-up" ||
    _0x5aa99d === "arrow-down"
  );
}
const xn = { min: 1, max: 5, defaultValue: 3 },
  Sn = { min: 0, max: 100, defaultValue: 100 },
  Cn = [
    {
      kind: "dropdown",
      titleKey: "boards-mind-ui.toolbar.primary.line",
      panel: "line",
    },
    { kind: "fontColor", titleKey: "boards-mind-ui.toolbar.primary.fontColor" },
    {
      kind: "typography",
      titleKey: "boards-mind-ui.toolbar.primary.typography",
    },
    {
      kind: "dropdown",
      titleKey: "boards-mind-ui.toolbar.primary.more",
      panel: "more",
      dividerBefore: true,
    },
  ],
  wn = {
    addSibling: "add-sibling-or-child",
    addChild: "add-child",
    copy: "copy",
    paste: "paste",
    delete: "delete",
  },
  Tn = [
    {
      key: "mind-map",
      title: "Mind\x20map",
      items: [
        {
          value: "mindmap-horizontal",
          icon: "mindmap-horizontal",
          labelKey: "boards-mind-ui.panel.structureKind.mindmapHorizontal",
        },
        {
          value: "mindmap-vertical",
          icon: "mindmap-vertical",
          labelKey: "boards-mind-ui.panel.structureKind.mindmapVertical",
        },
      ],
    },
    {
      key: "tree-diagram",
      title: "Tree diagram",
      items: [
        {
          value: "tree-right",
          icon: "tree-right",
          labelKey: "boards-mind-ui.panel.structureKind.treeRight",
        },
        {
          value: "tree-left",
          icon: "tree-left",
          labelKey: "boards-mind-ui.panel.structureKind.treeLeft",
        },
        {
          value: "tree-alternate",
          icon: "tree-alternate",
          labelKey: "boards-mind-ui.panel.structureKind.treeAlternate",
        },
      ],
    },
    {
      key: "timeline",
      title: "Timeline",
      items: [
        {
          value: "timeline-horizontal",
          icon: "timeline-horizontal",
          labelKey: "boards-mind-ui.panel.structureKind.timelineHorizontal",
        },
        {
          value: "timeline-vertical",
          icon: "timeline-vertical",
          labelKey: "boards-mind-ui.panel.structureKind.timelineVertical",
        },
      ],
    },
  ],
  En = {
    key: "branch",
    title: "Branch",
    items: [
      {
        value: "curve",
        icon: "branch-curve",
        labelKey: "boards-mind-ui.panel.branchLineType.curve",
      },
      {
        value: "rounded-orthogonal",
        icon: "branch-rounded-orthogonal",
        labelKey: "boards-mind-ui.panel.branchLineType.roundedOrthogonal",
      },
      {
        value: "orthogonal",
        icon: "branch-orthogonal",
        labelKey: "boards-mind-ui.panel.branchLineType.orthogonal",
      },
    ],
  },
  Dn = "board.mind-map.floating-toolbar";
function On(_0x18dc95, _0x5d9057) {
  _0x18dc95.executeCommand(fn, { action: _0x5d9057 });
}
const kn = { line: _0x30781e, more: _0x12d84f };
function An(_0x457a83) {
  (_0x457a83.stopPropagation(), _0x457a83.preventDefault());
}
function jn(_0x1f99bb, _0x45eb47 = "univer-size-5", _0x2b9476) {
  return _0x22a183(_0x306989, {
    children: _0x22a183(_0x1f99bb, { className: _0x45eb47, extend: _0x2b9476 }),
  });
}
function Mn(_0x16f485) {
  var _0x1838ec, _0x2d43e3;
  let _0xb4390b = (_0x16f485 == null ? undefined : _0x16f485.shapeText) ?? {},
    _0x2737d5 =
      _0xb4390b.dataModel && typeof _0xb4390b.dataModel == "object"
        ? _0xb4390b.dataModel
        : {},
    _0x5e4b4e =
      (_0x1838ec = _0x2737d5.doc) == null ||
      (_0x1838ec = _0x1838ec.documentStyle) == null
        ? undefined
        : _0x1838ec.textStyle;
  return {
    color:
      typeof _0xb4390b.color == "string"
        ? _0xb4390b.color
        : ((_0x5e4b4e == null || (_0x2d43e3 = _0x5e4b4e.cl) == null
            ? undefined
            : _0x2d43e3.rgb) ?? _0x3e50f2),
    fontFamily:
      typeof _0xb4390b.fontFamily == "string"
        ? _0xb4390b.fontFamily
        : ((_0x5e4b4e == null ? undefined : _0x5e4b4e.ff) ?? _0x379b5b.ff),
    fontSize:
      typeof _0xb4390b.fontSize == "number"
        ? _0xb4390b.fontSize
        : typeof (_0x5e4b4e == null ? undefined : _0x5e4b4e.fs) == "number"
          ? _0x5e4b4e.fs
          : _0x379b5b.fs,
    horizontalAlign:
      _0xb4390b.horizontalAlign ?? _0x2737d5.ha ?? _0x485ee7.LEFT,
    textFill:
      _0xb4390b.textFill && typeof _0xb4390b.textFill == "object"
        ? _0xb4390b.textFill
        : _0x5e4b4e == null
          ? undefined
          : _0x5e4b4e.textFill,
    verticalAlign: _0xb4390b.verticalAlign ?? _0x2737d5.va ?? _0x2d4efd.MIDDLE,
  };
}
function Nn(_0x2ede87, _0x44b75d) {
  if (!_0x44b75d) return;
  let _0x59ac9f = _n(_0x44b75d);
  if (!_0x59ac9f.length) return;
  let _0x4ca79b = _0x59ac9f
    .map(
      (_0x35143c) =>
        _0x2ede87.getShortcutDisplay({
          id: "board.operation.mind-map.keyboard-shortcut",
          binding: _0x35143c,
          staticParameters: { action: _0x44b75d },
        }) ?? undefined,
    )
    .filter((_0x5e87eb) => !!_0x5e87eb);
  return _0x4ca79b.length ? [...new Set(_0x4ca79b)].join("/") : undefined;
}
async function Pn(_0x426250, _0xb379d1, _0x397eff) {
  return (await Promise.resolve(
    _0xb379d1(() => _0x426250.executeCommand(_0x104955.id, _0x397eff)),
  ))
    ? (await Promise.resolve(
        _0xb379d1(() =>
          _0x426250.executeCommand(_0x2f141c.id, {
            unitId: _0x397eff.unitId,
            subUnitId: _0x397eff.subUnitId,
            scopeId: _0x397eff.scopeId,
          }),
        ),
      ),
      true)
    : false;
}
async function Fn(_0x15a22a, _0x1543c3, _0x41a4d7) {
  return (await Promise.resolve(
    _0x1543c3(() => _0x15a22a.executeCommand(_0x5d3671.id, _0x41a4d7)),
  ))
    ? (await Promise.resolve(
        _0x1543c3(() =>
          _0x15a22a.executeCommand(_0x2f141c.id, {
            unitId: _0x41a4d7.unitId,
            subUnitId: _0x41a4d7.subUnitId,
            scopeId: _0x41a4d7.scopeId,
          }),
        ),
      ),
      true)
    : false;
}
function In({ className: _0x103acb = "univer-size-5" }) {
  return _0x22a183(_0x306989, {
    children: _0x155d01("svg", {
      className: _0x103acb,
      viewBox: "0\x200\x2024\x2024",
      fill: "none",
      "aria-hidden": "true",
      children: [
        _0x22a183("path", {
          d: "M4.5 7.5h4.2c1.9 0 3.3 1.5 3.3 3.3v2.4c0 1.8 1.4 3.3 3.3 3.3h4.2",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
        }),
        _0x22a183("path", {
          d: "M19.5\x207.5h-4.2c-1.9\x200-3.3\x201.5-3.3\x203.3",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
        }),
        _0x22a183("path", {
          d: "M4.5 16.5h4.2c1.9 0 3.3-1.5 3.3-3.3",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
        }),
      ],
    }),
  });
}
function Ln({ icon: _0x445d11 }) {
  let _0x47f9ff = "#d8dce3",
    _0x2ab4a7 = {
      stroke: "currentColor",
      strokeWidth: 2.6,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    _0x560f27 = { stroke: _0x47f9ff, strokeWidth: 3.2, strokeLinecap: "round" };
  return _0x155d01("svg", {
    className: "univer-h-9 univer-w-12",
    viewBox: "0 0 80 56",
    fill: "none",
    "aria-hidden": "true",
    children: [
      _0x445d11 === "mindmap-horizontal" &&
        _0x155d01(_0x539227, {
          children: [
            _0x22a183("path", {
              d: "M31 13c9 8 9 22 18 30M49 13c-9 8-9 22-18 30M31 13c-7 4-9 9-9 15s2 11 9 15M49 13c7 4 9 9 9 15s-2 11-9 15",
              ..._0x2ab4a7,
            }),
            _0x22a183("path", {
              d: "M12 15h9M12 28h9M12 41h9M59 15h9M59 28h9M59 41h9",
              ..._0x560f27,
            }),
          ],
        }),
      _0x445d11 === "mindmap-vertical" &&
        _0x155d01(_0x539227, {
          children: [
            _0x22a183("path", {
              d: "M21 28h38M40 11v34M28 16c7 4 10 8 12 12 2-4 5-8 12-12M28 40c7-4 10-8 12-12 2 4 5 8 12 12",
              ..._0x2ab4a7,
            }),
            _0x22a183("path", {
              d: "M22 8h36M22 48h36M14 18v20M66 18v20",
              stroke: _0x47f9ff,
              strokeWidth: 2.6,
              strokeLinecap: "round",
              strokeDasharray: "6 7",
            }),
          ],
        }),
      _0x445d11 === "tree-right" &&
        _0x155d01(_0x539227, {
          children: [
            _0x22a183("path", {
              d: "M24 12v32M24 19c0 4 3 6 7 6h7M24 29c0 4 3 6 7 6h7M24 39c0 4 3 6 7 6h7",
              ..._0x2ab4a7,
            }),
            _0x22a183("path", {
              d: "M47\x2025h13M47\x2035h13M47\x2045h13",
              ..._0x560f27,
            }),
            _0x22a183("circle", {
              cx: "24",
              cy: "12",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x445d11 === "tree-left" &&
        _0x155d01(_0x539227, {
          children: [
            _0x22a183("path", {
              d: "M56 12v32M56 19c0 4-3 6-7 6h-7M56 29c0 4-3 6-7 6h-7M56 39c0 4-3 6-7 6h-7",
              ..._0x2ab4a7,
            }),
            _0x22a183("path", {
              d: "M20 25h13M20 35h13M20 45h13",
              ..._0x560f27,
            }),
            _0x22a183("circle", {
              cx: "56",
              cy: "12",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x445d11 === "tree-alternate" &&
        _0x155d01(_0x539227, {
          children: [
            _0x22a183("path", {
              d: "M42\x2012v32M42\x2020c0\x204-3\x206-7\x206h-7M42\x2030c0\x204\x203\x206\x207\x206h7M42\x2039c0\x204-3\x206-7\x206h-7",
              ..._0x2ab4a7,
            }),
            _0x22a183("path", {
              d: "M12\x2026h11M58\x2036h11M12\x2045h11",
              ..._0x560f27,
            }),
            _0x22a183("circle", {
              cx: "42",
              cy: "12",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x445d11 === "timeline-horizontal" &&
        _0x155d01(_0x539227, {
          children: [
            _0x22a183("path", {
              d: "M15 31h50M35 31V18c0-4 3-7 8-7h9M35 31v13c0 4 3 7 8 7h9",
              ..._0x2ab4a7,
            }),
            _0x22a183("path", { d: "M56 11h11M56 51h11", ..._0x560f27 }),
            _0x22a183("circle", {
              cx: "17",
              cy: "31",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x445d11 === "timeline-vertical" &&
        _0x155d01(_0x539227, {
          children: [
            _0x22a183("path", {
              d: "M40 9v40M40 20c8 0 11 4 11 11v8M40 35c-8 0-11 4-11 11v4",
              ..._0x2ab4a7,
            }),
            _0x22a183("path", { d: "M56 39h11M13 50h11", ..._0x560f27 }),
            _0x22a183("circle", {
              cx: "40",
              cy: "9",
              r: "3",
              fill: "currentColor",
            }),
          ],
        }),
      _0x445d11 === "branch-curve" &&
        _0x22a183(_0x539227, {
          children: _0x22a183("path", {
            d: "M16\x2028c16\x200\x2025-13\x2043-13M16\x2028c16\x200\x2025\x2013\x2043\x2013",
            ..._0x2ab4a7,
          }),
        }),
      _0x445d11 === "branch-rounded-orthogonal" &&
        _0x22a183(_0x539227, {
          children: _0x22a183("path", {
            d: "M16\x2029h18c7\x200\x2010-5\x2010-12v-3M34\x2029h10c7\x200\x2010\x205\x2010\x2012v3",
            ..._0x2ab4a7,
          }),
        }),
      _0x445d11 === "branch-orthogonal" &&
        _0x22a183(_0x539227, {
          children: _0x22a183("path", {
            d: "M17 33h21M38 17v30M38 17h24",
            ..._0x2ab4a7,
          }),
        }),
    ],
  });
}
function Rn(_0x497a33, _0x4c5ba6) {
  let _0x2f5647 = _0x497a33.textStyle,
    _0x3f09cb = _0x904cac(_0x2f5647),
    _0x407069 = {
      ...(_0x3f09cb.color === undefined ? null : { color: _0x3f09cb.color }),
      ...(_0x3f09cb.fontFamily === undefined
        ? null
        : { fontFamily: _0x3f09cb.fontFamily }),
      ...(_0x3f09cb.fontSize === undefined
        ? null
        : { fontSize: _0x3f09cb.fontSize }),
      ...(_0x3f09cb.bold === undefined ? null : { bold: _0x3f09cb.bold }),
      ...(_0x3f09cb.italic === undefined ? null : { italic: _0x3f09cb.italic }),
      ...(_0x3f09cb.underline === undefined
        ? null
        : { underline: _0x3f09cb.underline }),
      ...(_0x3f09cb.strikethrough === undefined
        ? null
        : { strikethrough: _0x3f09cb.strikethrough }),
      ...(_0x3f09cb.textFill === undefined
        ? null
        : { textFill: _0x3f09cb.textFill }),
    };
  (_0x497a33.horizontalAlign !== undefined &&
    (_0x407069.horizontalAlign = _0x497a33.horizontalAlign),
    _0x497a33.verticalAlign !== undefined &&
      (_0x407069.verticalAlign = _0x497a33.verticalAlign),
    Object.keys(_0x407069).length > 0 && _0x4c5ba6({ textStyle: _0x407069 }));
}
function zn(_0x49012c, _0x3c415b, _0x30ce23) {
  let _0x28f1b1 = _0x49012c ?? {},
    _0xcfafe3 = _0x13fa65(_0x28f1b1, _0x3c415b),
    _0x1f8477 = _0xcfafe3.shapeText ?? _0x28f1b1.shapeText ?? {};
  return {
    ..._0x28f1b1,
    ..._0xcfafe3,
    shapeText: {
      ..._0x1f8477,
      ...(_0x30ce23.color === undefined ? null : { color: _0x30ce23.color }),
      ...(_0x30ce23.fontSize === undefined
        ? null
        : { fontSize: _0x30ce23.fontSize }),
      ...(_0x30ce23.bold === undefined ? null : { bold: _0x30ce23.bold }),
      ...(_0x30ce23.italic === undefined ? null : { italic: _0x30ce23.italic }),
      ...(_0x30ce23.underline === undefined
        ? null
        : { underline: _0x30ce23.underline }),
      ...(_0x30ce23.strikethrough === undefined
        ? null
        : { strikethrough: _0x30ce23.strikethrough }),
      ...(_0x30ce23.horizontalAlign === undefined
        ? null
        : { horizontalAlign: _0x30ce23.horizontalAlign }),
      ...(_0x30ce23.verticalAlign === undefined
        ? null
        : { verticalAlign: _0x30ce23.verticalAlign }),
      ...(_0x30ce23.textFill === undefined
        ? null
        : { textFill: _0x30ce23.textFill }),
    },
  };
}
function Bn(_0x5dd2c9, _0x3bea59) {
  let _0x53ea26 = _0x5dd2c9 == null ? undefined : _0x5dd2c9.stroke;
  _0x53ea26 &&
    _0x3bea59({
      lineType:
        _0x53ea26.dashType === _0x90b6e0.RoundDot ||
        _0x53ea26.dashType === _0x90b6e0.SquareDot
          ? "dot"
          : _0x53ea26.dashType === _0x90b6e0.Dash
            ? "dash"
            : "solid",
      ...(typeof _0x53ea26.width == "number"
        ? { strokeWidth: _0x53ea26.width }
        : null),
      ...(typeof _0x53ea26.color == "string"
        ? { stroke: _0x53ea26.color }
        : null),
      ...(typeof _0x53ea26.opacity == "number"
        ? { opacity: _0x53ea26.opacity }
        : null),
    });
}
function Vn(_0x4fc575) {
  return _0x4fc575 != null && _0x4fc575.length
    ? _0x4fc575[0] <= 2
      ? _0x90b6e0.RoundDot
      : _0x90b6e0.Dash
    : _0x90b6e0.Solid;
}
function Hn(_0x37d76c) {
  return {
    stroke: {
      lineStrokeType: _0x35d0c7.SolidLine,
      dashType: Vn(_0x37d76c == null ? undefined : _0x37d76c.dash),
      color: (_0x37d76c == null ? undefined : _0x37d76c.stroke) ?? _0x39abb4,
      width:
        (_0x37d76c == null ? undefined : _0x37d76c.strokeWidth) ??
        xn.defaultValue,
      opacity:
        (_0x37d76c == null ? undefined : _0x37d76c.opacity) ??
        Sn.defaultValue / 100,
    },
  };
}
function Un(_0x4d8e65) {
  var _0x545861, _0x4441fb, _0x1cbae9;
  let _0x385d0d = _0x5a5b51(_0x3ef066),
    _0x473b1c = _0x5a5b51(_0x22486e),
    _0x3ffb8b = _0x5a5b51(_0xc75da),
    _0x356117 = _0x5a5b51(_0x3efd59),
    [_0x463081, _0x1cdcee] = _0x12b1e6(null),
    [_0x56f4cd, _0x367179] = _0x12b1e6(
      (_0x545861 = _0x4d8e65.popup["extraProps"]) == null
        ? undefined
        : _0x545861.shapeData,
    ),
    _0x309b0d = _0x4d8e65.popup["extraProps"];
  if (!_0x309b0d) return null;
  let _0x272e30 = { unitId: _0x309b0d.unitId, subUnitId: _0x309b0d.subUnitId },
    _0x595fad = (_0x440b3a) => {
      _0x385d0d.executeCommand(_0x287f19.id, {
        ..._0x272e30,
        nodeId: _0x309b0d.elementId,
        ..._0x440b3a,
      });
    },
    _0x2d5163 = (_0x31bf36, _0x5b067e) => {
      let _0x51893f = _0x5b067e ?? {};
      (_0x367179((_0x2e8b1b) => ({ ...(_0x2e8b1b ?? {}), ..._0x51893f })),
        _0x595fad({
          ...(_0x51893f.fill === undefined ? null : { fill: _0x51893f.fill }),
          ...(_0x51893f.stroke === undefined
            ? null
            : { stroke: _0x51893f.stroke }),
        }));
    },
    _0x528601 = (_0x25b0e3) => {
      _0x385d0d.executeCommand(_0x496df1.id, {
        ..._0x272e30,
        nodeId: _0x309b0d.elementId,
        style: _0x25b0e3,
      });
    },
    _0x2d702f = Hn(_0x309b0d.incomingConnectorStyle),
    _0xe56c24 = (_0x536de6) => Nn(_0x473b1c, _0x536de6),
    _0x126f0d = (_0x38dc33) => {
      On(_0x385d0d, _0x38dc33);
    },
    _0x4262e4 = (_0x56f4cd == null ? undefined : _0x56f4cd.shapeText) ?? {},
    _0x517486 = Mn(_0x56f4cd),
    _0x10a626 = (_0x1c6788) => {
      Rn(_0x1c6788, (_0x342546) => {
        (_0x367179((_0x215fc0) =>
          zn(_0x215fc0, _0x1c6788, _0x342546.textStyle),
        ),
          _0x595fad(_0x342546));
      });
    },
    _0x58ad13 = [
      {
        label: _0x3ffb8b.t("boards-mind-ui.alignLeft"),
        value: _0x485ee7.LEFT,
        icon: _0x22a183(_0x23f8d8, {}),
      },
      {
        label: _0x3ffb8b.t("boards-mind-ui.alignCenter"),
        value: _0x485ee7.CENTER,
        icon: _0x22a183(_0x27f2a9, {}),
      },
      {
        label: _0x3ffb8b.t("boards-mind-ui.alignRight"),
        value: _0x485ee7.RIGHT,
        icon: _0x22a183(_0x340096, {}),
      },
      {
        label: _0x3ffb8b.t("boards-mind-ui.alignJustify"),
        value: _0x485ee7.JUSTIFIED,
        icon: _0x22a183(_0x198114, {}),
      },
    ],
    _0x6decf9 = [
      {
        label: _0x3ffb8b.t("boards-mind-ui.alignTop"),
        value: _0x2d4efd.TOP,
        icon: _0x22a183(_0xe1e8c9, {}),
      },
      {
        label: _0x3ffb8b.t("boards-mind-ui.alignMiddle"),
        value: _0x2d4efd.MIDDLE,
        icon: _0x22a183(_0x8c4ea1, {}),
      },
      {
        label: _0x3ffb8b.t("boards-mind-ui.alignBottom"),
        value: _0x2d4efd.BOTTOM,
        icon: _0x22a183(_0x247e56, {}),
      },
    ],
    _0x5dcb96 = () => {
      _0x126f0d("add-sibling-or-child");
    },
    _0x99d4d1 = () => {
      _0x126f0d("add-child");
    },
    _0x52a4cf = () => {
      _0x126f0d("copy");
    },
    _0x116b27 = () => {
      _0x126f0d("paste");
    },
    _0x267d41 = () => {
      _0x126f0d("delete");
    },
    _0x44d582 =
      ((_0x4441fb = _0x309b0d.layout) == null
        ? undefined
        : _0x4441fb.structureKind) ?? _0x4c6e5c.structureKind,
    _0x3e9a14 = _0x1f7b61(
      _0x44d582,
      ((_0x1cbae9 = _0x309b0d.layout) == null
        ? undefined
        : _0x1cbae9.branchLineType) ?? _0x4c6e5c.branchLineType,
    ),
    _0x21b843 = (_0x556314) => {
      let _0x1cfbfe = _0x1f7b61(_0x556314, _0x3e9a14);
      (Pn(_0x385d0d, _0x356117.createRunner(_0x309b0d.unitId), {
        ..._0x272e30,
        scopeId: _0x309b0d.scopeId,
        structureKind: _0x556314,
        ...(_0x1cfbfe === _0x3e9a14 ? null : { branchLineType: _0x1cfbfe }),
      }),
        _0x1cdcee(null));
    },
    _0x5e38e0 = (_0x52cb42) => {
      (Fn(_0x385d0d, _0x356117.createRunner(_0x309b0d.unitId), {
        ..._0x272e30,
        scopeId: _0x309b0d.scopeId,
        branchLineType: _0x52cb42,
      }),
        _0x1cdcee(null));
    },
    _0x4eb9cf = (_0x12c154, _0x44688a, _0x377f60, _0x115b1b = false) =>
      _0x22a183(
        "button",
        {
          type: "button",
          "aria-label": _0x3ffb8b.t(_0x12c154.labelKey),
          disabled: _0x115b1b,
          className: _0x4c5e40(
            "univer-flex univer-h-12 univer-min-w-0 univer-items-center univer-justify-center univer-rounded-lg univer-border-0 univer-bg-transparent univer-p-0 univer-text-gray-900 univer-outline-none univer-transition-colors hover:univer-bg-gray-0",
            _0x44688a &&
              "univer-bg-[#e8eefc] univer-text-[#2f6fed] hover:univer-bg-[#e8eefc]",
            _0x115b1b &&
              "univer-cursor-not-allowed\x20univer-text-gray-300\x20hover:univer-bg-transparent",
          ),
          onMouseDown: An,
          onPointerDown: An,
          onClick: (_0xb134e8) => {
            (_0xb134e8.stopPropagation(), !_0x115b1b && _0x377f60());
          },
          children: _0x22a183(Ln, { icon: _0x12c154.icon }),
        },
        _0x12c154.value,
      ),
    _0xcd23f5 = () =>
      _0x155d01("div", {
        className:
          "univer-w-[202px] univer-rounded-xl univer-border univer-border-gray-200 univer-bg-gray-0 univer-px-4 univer-py-4 univer-shadow-lg",
        onMouseDown: (_0x4f7d6c) => _0x4f7d6c.stopPropagation(),
        onPointerDown: (_0x293494) => _0x293494.stopPropagation(),
        children: [
          Tn.map((_0x45fc3e) =>
            _0x155d01(
              "div",
              {
                className: "univer-mb-4",
                children: [
                  _0x22a183("div", {
                    className:
                      "univer-mb-2\x20univer-text-lg\x20univer-text-gray-900",
                    children: _0x45fc3e.title,
                  }),
                  _0x22a183("div", {
                    className:
                      "univer-grid univer-h-14 univer-overflow-hidden univer-rounded-xl univer-bg-gray-100 univer-p-1",
                    style: {
                      gridTemplateColumns:
                        "repeat(" +
                        _0x45fc3e.items["length"] +
                        ", minmax(0, 1fr))",
                    },
                    children: _0x45fc3e.items["map"]((_0x33f3fd) =>
                      _0x4eb9cf(_0x33f3fd, _0x33f3fd.value === _0x44d582, () =>
                        _0x21b843(_0x33f3fd.value),
                      ),
                    ),
                  }),
                ],
              },
              _0x45fc3e.key,
            ),
          ),
          _0x22a183(_0x32bc4b, {}),
          _0x155d01("div", {
            className: "univer-mb-0",
            children: [
              _0x22a183("div", {
                className: "univer-mb-2 univer-text-lg univer-text-gray-900",
                children: En.title,
              }),
              _0x22a183("div", {
                className:
                  "univer-grid\x20univer-h-14\x20univer-overflow-hidden\x20univer-rounded-xl\x20univer-bg-gray-100\x20univer-p-1",
                style: {
                  gridTemplateColumns:
                    "repeat(" + En.items["length"] + ", minmax(0, 1fr))",
                },
                children: En.items["map"]((_0x17f5dd) =>
                  _0x4eb9cf(
                    _0x17f5dd,
                    _0x17f5dd.value === _0x3e9a14,
                    () => _0x5e38e0(_0x17f5dd.value),
                    _0x17f5dd.value === "curve" && !_0x36c2b3(_0x44d582),
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    _0x231176 = (_0x430f64) => {
      switch (_0x430f64) {
        case "line":
          return _0x22a183(_0x592710, {
            title: _0x3ffb8b.t("boards-mind-ui.toolbar.panel.line"),
            shapeData: _0x2d702f,
            modeOptions: ["solid", "dash", "dot"],
            showDashDropdown: false,
            widthRange: { min: xn.min, max: xn.max, step: 1 },
            onUpdateShapeData: (_0x49181b, _0x1d5f26) => {
              Bn(_0x1d5f26, _0x528601);
            },
          });
        case "more":
          return _0x22a183(_0x5eec4d, {
            title: _0x3ffb8b.t("boards-mind-ui.toolbar.panel.more"),
            minWidthClassName: "univer-min-w-[240px]",
            children: _0x155d01("div", {
              className: "univer-flex univer-flex-col univer-gap-1",
              children: [
                _0x22a183(_0x173ee1, {
                  label: _0x3ffb8b.t(
                    "boards-mind-ui.toolbar.action.addSibling",
                  ),
                  shortcut: _0xe56c24(wn.addSibling),
                  onClick: _0x5dcb96,
                }),
                _0x22a183(_0x173ee1, {
                  label: _0x3ffb8b.t("boards-mind-ui.toolbar.action.addChild"),
                  shortcut: _0xe56c24(wn.addChild),
                  onClick: _0x99d4d1,
                }),
                _0x22a183(_0x32bc4b, {}),
                _0x22a183(_0x173ee1, {
                  label: _0x3ffb8b.t("boards-mind-ui.toolbar.action.copy"),
                  shortcut: _0xe56c24(wn.copy),
                  onClick: _0x52a4cf,
                }),
                _0x22a183(_0x173ee1, {
                  label: _0x3ffb8b.t("boards-mind-ui.toolbar.action.paste"),
                  shortcut: _0xe56c24(wn.paste),
                  onClick: _0x116b27,
                }),
                _0x22a183(_0x173ee1, {
                  label: _0x3ffb8b.t("boards-mind-ui.toolbar.action.delete"),
                  shortcut: _0xe56c24(wn.delete),
                  onClick: _0x267d41,
                }),
              ],
            }),
          });
        default:
          return null;
      }
    },
    _0x4782a1 = Cn.flatMap((_0x36a804) => {
      let _0x2bb56c = [];
      if (
        (_0x36a804.dividerBefore &&
          _0x2bb56c.push(
            _0x22a183(
              _0x32bc4b,
              { orientation: "vertical" },
              "divider-" + _0x36a804.kind,
            ),
          ),
        _0x36a804.kind === "typography")
      )
        return (
          _0x2bb56c.push(
            _0x22a183(
              _0x10646e,
              {
                title: _0x3ffb8b.t("boards-mind-ui.toolbar.panel.typography"),
                fontFamily: _0x517486.fontFamily,
                textStyle: {
                  isBold: _0x4262e4.bold === true,
                  isItalic: _0x4262e4.italic === true,
                  isUnderline: _0x4262e4.underline === true,
                  isStrike: _0x4262e4.strikethrough === true,
                },
                horizontalAlign: _0x517486.horizontalAlign,
                verticalAlign: _0x517486.verticalAlign,
                horizontalAlignOptions: _0x58ad13,
                verticalAlignOptions: _0x6decf9,
                onUpdateText: _0x10a626,
              },
              _0x36a804.kind,
            ),
          ),
          _0x2bb56c
        );
      if (_0x36a804.kind === "fontColor") {
        let _0x458131 = {
          fs: _0x517486.fontSize,
          cl: { rgb: _0x517486.color },
          ...(_0x517486.textFill === undefined
            ? null
            : { textFill: _0x517486.textFill }),
        };
        return (
          _0x2bb56c.push(
            _0x22a183(
              _0x1b6943,
              {
                title: _0x3ffb8b.t("boards-mind-ui.toolbar.action.fontColor"),
                textStyle: _0x458131,
                fallbackColor: _0x517486.color,
                onChange: (_0x4fe808) => _0x10a626({ textStyle: _0x4fe808 }),
              },
              _0x36a804.kind,
            ),
          ),
          _0x2bb56c.push(
            _0x22a183(
              _0x84d88a,
              {
                value: String(_0x517486.fontSize),
                onChange: (_0x26b2d5) => {
                  _0x10a626({ textStyle: { fs: _0x26b2d5 } });
                },
              },
              "mind-map-font-size",
            ),
          ),
          _0x2bb56c
        );
      }
      return (
        _0x2bb56c.push(
          _0x22a183(
            _0x22fc1b,
            {
              open: _0x463081 === _0x36a804.panel,
              overlay: _0x231176(_0x36a804.panel),
              onOpenChange: (_0x5e07d7) =>
                _0x1cdcee(_0x5e07d7 ? _0x36a804.panel : null),
              children: _0x22a183("span", {
                children: _0x22a183(_0x3e8260, {
                  title: _0x3ffb8b.t(_0x36a804.titleKey),
                  active: _0x463081 === _0x36a804.panel,
                  icon: jn(kn[_0x36a804.panel]),
                  sizeClassName:
                    "univer-h-7 univer-min-w-9 univer-w-auto univer-gap-1 univer-px-1.5",
                  onMouseDown: An,
                  onPointerDown: An,
                }),
              }),
            },
            _0x36a804.panel,
          ),
        ),
        _0x2bb56c
      );
    });
  return _0x155d01(_0x5c8aa3, {
    maxWidthClassName: "univer-max-w-[min(760px,calc(100vw-32px))]",
    onMouseDown: (_0x34a3fe) => _0x34a3fe.stopPropagation(),
    children: [
      [
        ...(_0x309b0d.isRootNode
          ? [
              _0x22a183(
                _0x22fc1b,
                {
                  open: _0x463081 === "layout",
                  overlay: _0xcd23f5(),
                  onOpenChange: (_0x3a7ab8) =>
                    _0x1cdcee(_0x3a7ab8 ? "layout" : null),
                  children: _0x22a183("span", {
                    children: _0x22a183(_0x3e8260, {
                      title: _0x3ffb8b.t(
                        "boards-mind-ui.toolbar.action.layout",
                      ),
                      active: _0x463081 === "layout",
                      icon: _0x22a183(In, {}),
                      sizeClassName:
                        "univer-h-7 univer-min-w-9 univer-w-auto univer-gap-1 univer-px-1.5",
                      onMouseDown: An,
                      onPointerDown: An,
                    }),
                  }),
                },
                "mind-map-layout-dropdown",
              ),
              _0x22a183(
                _0x32bc4b,
                { orientation: "vertical" },
                "layout-panel-divider",
              ),
            ]
          : []),
        _0x22a183(
          _0x2cad45,
          {
            title: _0x3ffb8b.t("boards-mind-ui.toolbar.action.fill"),
            shapeData: _0x56f4cd ?? {},
            onUpdateShapeData: _0x2d5163,
          },
          "mind-map-fill",
        ),
        _0x22a183(
          _0x28c164,
          {
            title: _0x3ffb8b.t("boards-mind-ui.toolbar.action.stroke"),
            shapeData: _0x56f4cd ?? {},
            onUpdateShapeData: _0x2d5163,
          },
          "mind-map-stroke",
        ),
        _0x22a183(_0x32bc4b, { orientation: "vertical" }, "style-divider"),
      ],
      _0x4782a1,
    ],
  });
}
function Wn(_0x3b55af) {
  let {
    left: _0x445f66,
    top: _0x2574d3,
    width: _0x293706,
    height: _0x2c6ca8,
  } = _0x3b55af;
  return {
    left: _0x445f66,
    right: _0x445f66 + _0x293706,
    top: _0x2574d3 - 56,
    bottom: _0x2574d3 + _0x2c6ca8,
  };
}
let Gn = class extends _0x25c64b {
  constructor(
    _0x316caf,
    _0x3f690c,
    _0x57fdeb,
    _0x40b327,
    _0x79219a,
    _0x2eab38,
  ) {
    (super(),
      (this._renderContext = _0x316caf),
      (this._boardCanvasPopManagerService = _0x3f690c),
      (this._boardElementService = _0x57fdeb),
      (this._elementStateService = _0x40b327),
      (this._boardTextEditingService = _0x79219a),
      (this._interactionSurfaceService = _0x2eab38),
      G(this, "_popupDisposable", null),
      G(this, "_popupSelectionKey", null),
      this._init());
  }
  dispose() {
    (this._clearPopup(), super.dispose());
  }
  _init() {
    let _0x29466c = this._renderContext["scene"].getTransformerByCreate();
    (this.disposeWithMe(
      _0x5ab28a(
        _0x29466c.createControl$["pipe"](_0x2777f5(this.dispose$)).subscribe(
          () => this._showPopupForSelection(),
        ),
      ),
    ),
      this.disposeWithMe(
        _0x5ab28a(
          _0x29466c.clearControl$["pipe"](_0x2777f5(this.dispose$)).subscribe(
            () => this._clearPopupIfSelectionChanged(),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          _0x29466c.changeStart$["pipe"](_0x2777f5(this.dispose$)).subscribe(
            () => this._clearPopup(),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          _0x29466c.changeEnd$["pipe"](_0x2777f5(this.dispose$)).subscribe(() =>
            setTimeout(() => this._showPopupForSelection(), 0),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          this._elementStateService["state$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe(() =>
              setTimeout(() => this._showPopupForSelection(), 0),
            ),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          this._interactionSurfaceService["interactionSurfaceActive$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe((_0x25a902) => {
              if (_0x25a902) {
                this._clearPopup();
                return;
              }
              setTimeout(() => this._showPopupForSelection(), 0);
            }),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          this._boardTextEditingService["editingParams$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe((_0x7ed4cc) => {
              if (
                (_0x7ed4cc == null ? undefined : _0x7ed4cc.unitId) ===
                this._renderContext["unitId"]
              ) {
                if (_0x7ed4cc.visible) {
                  this._clearPopup();
                  return;
                }
                setTimeout(() => this._showPopupForSelection(), 0);
              }
            }),
        ),
      ));
  }
  _clearPopup() {
    var _0x16a506;
    ((_0x16a506 = this._popupDisposable) == null || _0x16a506.dispose(),
      (this._popupDisposable = null),
      (this._popupSelectionKey = null));
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let _0x31c75f = this._elementStateService["getSnapshot"]();
    return (
      !!_0x31c75f.context &&
      _0x31c75f.selectedIds["length"] > 0 &&
      this._popupSelectionKey ===
        this._buildPopupSelectionKey(
          _0x31c75f.context["unitId"],
          _0x31c75f.context["subUnitId"],
          _0x31c75f.selectedIds,
        )
    );
  }
  _buildPopupSelectionKey(_0x55f415, _0x39d45a, _0x410dcc) {
    return _0x55f415 + ":" + _0x39d45a + ":" + _0x410dcc.join(",");
  }
  _resolveIncomingConnectorStyle(_0x419171, _0x52919f, _0x5c6667, _0xf15616) {
    let _0x4dab90 = this._boardElementService["getElementData"](
        _0x419171,
        _0x52919f,
      ),
      _0x5b3f47 = Object.values(_0x4dab90).find((_0x4f821e) => {
        let _0x475dd2 = _0x2e6f82(_0x4f821e.element);
        return (
          (_0x475dd2 == null ? undefined : _0x475dd2.structureScopeId) ===
            _0x5c6667 && _0x475dd2.childNodeId === _0xf15616
        );
      });
    if (!(!_0x5b3f47 || !("connectorData" in _0x5b3f47.element)))
      return _0x5b3f47.element["connectorData"].style;
  }
  _showPopupForSelection() {
    var _0x48f6ae, _0xa2f96d, _0x354fe8;
    if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
      this._clearPopup();
      return;
    }
    let _0x57d4f2 = this._boardTextEditingService["getEditing"]();
    if (
      (_0x57d4f2 == null ? undefined : _0x57d4f2.visible) === true &&
      _0x57d4f2.unitId === this._renderContext["unitId"]
    ) {
      this._clearPopup();
      return;
    }
    let _0x858a89 = this._elementStateService["getSnapshot"]();
    if (_0x858a89.isTransforming) {
      this._clearPopup();
      return;
    }
    if (
      _0x246753({
        context: _0x858a89.context,
        selectedIds: _0x858a89.selectedIds,
        getElementById: (_0x587b10, _0x165cff, _0xa58386) =>
          this._boardElementService["getElementById"](
            _0x587b10,
            _0x165cff,
            _0xa58386,
          ),
      }).owner !== "mind-map"
    ) {
      this._clearPopup();
      return;
    }
    let _0x4262fe = this._renderContext["scene"]
        .getTransformerByCreate()
        .getSelectedObjectMap(),
      _0x4db6d8 = Array.from(_0x4262fe.values())
        .map((_0x218091) => this._resolveSelectedEntry(_0x218091))
        .filter((_0x816f2f) => !!_0x816f2f)
        .filter((_0x36b13e) => !!_0x154a55(_0x36b13e.elementData["element"])),
      _0x12c957 =
        _0x4db6d8.find(
          (_0x273059) =>
            _0x273059.elementData["elementId"] === _0x858a89.focusedId,
        ) ??
        _0x4db6d8[0] ??
        this._resolveSelectedMindMapEntryFromState();
    if (!_0x12c957) {
      this._clearPopup();
      return;
    }
    let _0x20f4b = _0x154a55(_0x12c957.elementData["element"]);
    if (!_0x20f4b) {
      this._clearPopup();
      return;
    }
    let _0x4a8dd6 =
        (_0x48f6ae = this._boardElementService["getElementData"](
          _0x12c957.elementData["unitId"],
          _0x12c957.elementData["subUnitId"],
        )[_0x20f4b.structureScopeId]) == null
          ? undefined
          : _0x48f6ae.element,
      _0x3a47f9 = _0x3cec18(_0x4a8dd6),
      _0x5231dc =
        _0x4a8dd6 == null ||
        (_0xa2f96d = _0x4a8dd6.custom) == null ||
        (_0xa2f96d = _0xa2f96d.mindmap) == null ||
        (_0xa2f96d = _0xa2f96d.layout) == null
          ? undefined
          : _0xa2f96d.structureKind,
      _0x9744a4 =
        ((_0x3a47f9 == null ? undefined : _0x3a47f9.layout["structureKind"]) ??
          _0x5231dc) === "mindmap-vertical" &&
        (_0x20f4b.parentNodeId === null || _0x20f4b.side === "top"),
      _0x3632ff =
        _0x20f4b.parentNodeId !== null &&
        _0x20f4b.side !== "top" &&
        _0x20f4b.side !== "bottom",
      _0x1e8749 = _0x9744a4 || _0x3632ff,
      _0x4fb32b =
        ((_0x354fe8 = _0x858a89.context) == null
          ? undefined
          : _0x354fe8.unitId) === _0x12c957.elementData["unitId"] &&
        _0x858a89.context["subUnitId"] === _0x12c957.elementData["subUnitId"] &&
        _0x858a89.selectedIds["length"]
          ? _0x858a89.selectedIds
          : [_0x12c957.elementData["elementId"]],
      _0x28030d = this._buildPopupSelectionKey(
        _0x12c957.elementData["unitId"],
        _0x12c957.elementData["subUnitId"],
        _0x4fb32b,
      );
    (this._popupDisposable && this._popupSelectionKey === _0x28030d) ||
      (this._clearPopup(),
      (this._popupDisposable = this.disposeWithMe(
        this._boardCanvasPopManagerService["attachPopupToObject"](
          _0x12c957.elementData["unitId"],
          _0x12c957.elementData["subUnitId"],
          _0x12c957.object,
          {
            componentKey: Dn,
            direction: "top-center",
            offset: [0, 8],
            ...(_0x1e8749 ? { anchorBoundResolver: Wn } : null),
            extraProps: {
              unitId: _0x12c957.elementData["unitId"],
              subUnitId: _0x12c957.elementData["subUnitId"],
              elementId: _0x12c957.elementData["elementId"],
              scopeId: _0x20f4b.structureScopeId,
              isRootNode: _0x20f4b.parentNodeId === null,
              left: _0x12c957.elementData["element"].transform["left"] ?? 0,
              top: _0x12c957.elementData["element"].transform["top"] ?? 0,
              shapeData:
                _0x12c957.elementData["element"].type === _0x326b27.Shape
                  ? _0x12c957.elementData["element"].shapeData
                  : undefined,
              layout: _0x3a47f9 == null ? undefined : _0x3a47f9.layout,
              incomingConnectorStyle: this._resolveIncomingConnectorStyle(
                _0x12c957.elementData["unitId"],
                _0x12c957.elementData["subUnitId"],
                _0x20f4b.structureScopeId,
                _0x12c957.elementData["elementId"],
              ),
            },
          },
        ),
      )),
      (this._popupSelectionKey = _0x28030d));
  }
  _resolveSelectedMindMapEntryFromState() {
    var _0x3f8283;
    let _0x544ca5 = this._elementStateService["getSnapshot"](),
      _0x3367c3 = _0x544ca5.context,
      _0x3ef6e2 = _0x544ca5.focusedId ?? _0x544ca5.selectedIds[0];
    if (!_0x3367c3 || !_0x3ef6e2) return null;
    let _0x6efc08 = this._boardElementService["getElementById"](
      _0x3367c3.unitId,
      _0x3367c3.subUnitId,
      _0x3ef6e2,
    );
    if (!_0x6efc08 || !_0x154a55(_0x6efc08.element)) return null;
    let _0x400372 = _0x5967eb(_0x3367c3.unitId, _0x3ef6e2),
      _0x2a124d = this._renderContext["scene"],
      _0xc9d125 =
        ((_0x3f8283 = _0x2a124d.getObjectIncludeInGroup) == null
          ? undefined
          : _0x3f8283.call(_0x2a124d, _0x400372)) ??
        this._renderContext["scene"].getObject(_0x400372);
    return _0xc9d125 ? { object: _0xc9d125, elementData: _0x6efc08 } : null;
  }
  _resolveSelectedEntry(_0x371f88) {
    var _0xd928bc;
    if (!_0x371f88) return null;
    let _0x5d8c3e = _0x1ee49b(_0x371f88.oKey);
    if (!_0x5d8c3e) return null;
    let _0x2a3918 = this._elementStateService["getSnapshot"](),
      _0x1b9cef =
        ((_0xd928bc = _0x2a3918.context) == null
          ? undefined
          : _0xd928bc.unitId) === _0x5d8c3e.unitId
          ? _0x2a3918.context["subUnitId"]
          : undefined;
    if (!_0x1b9cef) return null;
    let _0x486d74 = this._boardElementService["getElementById"](
      _0x5d8c3e.unitId,
      _0x1b9cef,
      _0x5d8c3e.elementId,
    );
    return _0x486d74 ? { object: _0x371f88, elementData: _0x486d74 } : null;
  }
};
Gn = q(
  [
    K(1, _0x50be27(_0x1674e2)),
    K(2, _0x50be27(_0x569c18)),
    K(3, _0x50be27(_0x4b6ba3)),
    K(4, _0x50be27(_0x2888b1)),
    K(5, _0x50be27(_0x5433f0)),
  ],
  Gn,
);
const Kn = "board-mind-map-pending-insert-object",
  qn = _0x4549ea.preview;
function Jn(_0x1af06e, _0x5190e3) {
  return (_0x1af06e ?? []).reduce(
    (_0x115fb4, _0x599714) => (
      _0x115fb4[_0x599714.side ?? _0x5190e3].push(_0x599714),
      _0x115fb4
    ),
    { left: [], right: [], top: [], bottom: [] },
  );
}
function Yn(_0x3eece2) {
  return (
    _0x3eece2 === "tree-left" ||
    _0x3eece2 === "tree-right" ||
    _0x3eece2 === "tree-alternate"
  );
}
function Xn(_0x1937f5) {
  return (
    _0x1937f5 === "timeline-horizontal" || _0x1937f5 === "timeline-vertical"
  );
}
function Zn(_0x349bb8, _0x5f2a1f, _0x2ae031) {
  return _0x2ae031 === "tree-left"
    ? "left"
    : _0x2ae031 === "tree-right"
      ? "right"
      : _0x349bb8.side === "left" || _0x349bb8.side === "right"
        ? _0x349bb8.side
        : _0x5f2a1f % 2 == 0
          ? "left"
          : "right";
}
function Qn(_0x1ceb02, _0x23c527) {
  return (
    (_0x23c527 == null ? undefined : _0x23c527.root["children"]) ??
    _0x1ceb02 ??
    []
  );
}
var $n = class extends _0x57beaa {
  constructor(_0xae6086 = Kn, _0x3b498a) {
    (super(_0xae6086),
      G(this, "_state", { point: null, children: [] }),
      (this.evented = false),
      (this.zIndex = _0x2b35a0.transientPreview),
      this.updateState(_0x3b498a));
  }
  updateState(_0x4bdd9b) {
    ((this._state = { ...this._state, ..._0x4bdd9b }),
      this._state["point"] ? this.show() : this.hide(),
      this.makeDirty(true));
  }
  isHit(_0x34520e) {
    return false;
  }
  render(_0x53be95, _0x208229) {
    let _0xfeebc1 = this._state["point"];
    if (!_0xfeebc1 || !this.visible) return (this.makeDirty(false), this);
    let _0x5d1bfb =
        Number.isFinite(this._state["zoomRatio"]) &&
        (this._state["zoomRatio"] ?? 0) > 0
          ? this._state["zoomRatio"]
          : 1,
      _0x562a93 = _0x3c410f.rootWidth,
      _0x1a287b = _0x3c410f.rootHeight,
      _0x238374 = _0x3c410f.nodeWidth,
      _0x7d7dae = _0x3c410f.nodeHeight,
      _0x33e432 = _0x4c6e5c.horizontalGap,
      _0x427504 = _0x4c6e5c.siblingGap,
      _0x44bef9 = this._state["structureKind"] === "mindmap-vertical",
      _0x39bff1 = Jn(this._state["children"], _0x44bef9 ? "bottom" : "right"),
      _0x383a59 = _0xfeebc1.x - _0x562a93 / 2,
      _0x587a69 = _0xfeebc1.y - _0x1a287b / 2;
    if (
      (_0x53be95.save(),
      (_0x53be95.globalAlpha = Y.objectAlpha),
      (_0x53be95.lineWidth = Y.lineWidthScreen / _0x5d1bfb),
      (_0x53be95.strokeStyle = Y.primaryColor),
      Xn(this._state["structureKind"]))
    ) {
      let _0x5c8f1f = Qn(this._state["children"], this._state["blueprint"]),
        _0x5c1249 = this._state["structureKind"] === "timeline-horizontal";
      if (_0x5c8f1f.length > 0) {
        if ((_0x53be95.beginPath(), _0x5c1249)) {
          let _0x4a0f03 = _0x238374,
            _0x11e44a = _0x7d7dae,
            _0x545fdb = _0x4c6e5c.timelineAxisGap,
            _0x5465a9 = _0xfeebc1.y,
            _0x3dbe7a = _0x383a59 + _0x562a93,
            _0x559d91 = _0xfeebc1.y - _0x11e44a / 2,
            _0x5767af = _0x383a59 + _0x562a93 + _0x545fdb;
          (_0x53be95.moveTo(_0x3dbe7a, _0x5465a9),
            _0x53be95.lineTo(_0x5767af, _0x5465a9),
            _0x5c8f1f.forEach((_0x2ad0c2, _0x48ba38) => {
              let _0x7099b7 = _0x5767af + _0x48ba38 * (_0x4a0f03 + _0x545fdb);
              if (_0x48ba38 > 0) {
                let _0x27d8f9 =
                  _0x5767af +
                  (_0x48ba38 - 1) * (_0x4a0f03 + _0x545fdb) +
                  _0x4a0f03;
                (_0x53be95.moveTo(_0x27d8f9, _0x5465a9),
                  _0x53be95.lineTo(_0x7099b7, _0x5465a9));
              }
              (_0x53be95.moveTo(_0x7099b7, _0x5465a9),
                _0x53be95.lineTo(_0x7099b7 + _0x4a0f03, _0x5465a9));
            }),
            _0x53be95.stroke(),
            _0x5c8f1f.forEach((_0x5e0d55, _0x3e3938) => {
              (X(
                _0x53be95,
                _0x5767af + _0x3e3938 * (_0x4a0f03 + _0x545fdb),
                _0x559d91,
                _0x4a0f03,
                _0x11e44a,
                Y.ghostRadius,
              ),
                (_0x53be95.fillStyle = Y.ghostFillColor),
                _0x53be95.fill(),
                _0x53be95.stroke());
            }),
            _0x5c8f1f.forEach((_0x2eeacd, _0x41e460) => {
              if (
                !("children" in _0x2eeacd) ||
                _0x2eeacd.children["length"] === 0
              )
                return;
              let _0x4f7c8e = _0x5767af + _0x41e460 * (_0x4a0f03 + _0x545fdb),
                _0xc0655b = _0x4f7c8e + _0x4a0f03 / 2,
                _0x3d7b31 = _0x2eeacd.side === "bottom" ? "bottom" : "top",
                _0x58ed7d = _0x2eeacd.children["slice"](0, 2),
                _0x2cd2eb =
                  _0x58ed7d.length * _0x11e44a +
                  Math.max(0, _0x58ed7d.length - 1) * _0x427504,
                _0x22fc57 = _0x4f7c8e + _0x4a0f03 + _0x4c6e5c.branchGap,
                _0x2f00ce =
                  _0x3d7b31 === "top"
                    ? _0x559d91 - _0x33e432 - _0x2cd2eb
                    : _0x559d91 + _0x11e44a + _0x33e432,
                _0x2bc3d8 = _0x2f00ce + _0x2cd2eb / 2;
              (_0x53be95.beginPath(),
                _0x53be95.moveTo(
                  _0xc0655b,
                  _0x3d7b31 === "top" ? _0x559d91 : _0x559d91 + _0x11e44a,
                ),
                _0x53be95.lineTo(_0xc0655b, _0x2bc3d8),
                _0x53be95.lineTo(_0x22fc57, _0x2bc3d8),
                _0x58ed7d.forEach((_0x44e683, _0x4f4c48) => {
                  let _0x13a0dc =
                    _0x2f00ce +
                    _0x4f4c48 * (_0x11e44a + _0x427504) +
                    _0x11e44a / 2;
                  (_0x53be95.moveTo(_0x22fc57, _0x13a0dc),
                    _0x53be95.lineTo(_0x22fc57 + _0x4a0f03, _0x13a0dc));
                }),
                _0x53be95.stroke(),
                _0x58ed7d.forEach((_0x33dd78, _0x497615) => {
                  let _0x5d32a9 =
                    _0x2f00ce + _0x497615 * (_0x11e44a + _0x427504);
                  (X(
                    _0x53be95,
                    _0x22fc57,
                    _0x5d32a9,
                    _0x4a0f03,
                    _0x11e44a,
                    Y.ghostRadius,
                  ),
                    (_0x53be95.fillStyle = Y.ghostFillColor),
                    _0x53be95.fill(),
                    _0x53be95.stroke());
                }));
            }));
        } else {
          let _0xc0763b = _0xfeebc1.x,
            _0xee7a0f = _0x587a69 + _0x1a287b,
            _0x43559a = _0x4c6e5c.timelineAxisGap,
            _0xb24b55 = _0x587a69 + _0x1a287b + _0x43559a,
            _0x5cde9f =
              _0xb24b55 +
              (_0x5c8f1f.length - 1) * (_0x7d7dae + _0x43559a) +
              _0x7d7dae / 2;
          (_0x53be95.moveTo(_0xc0763b, _0xee7a0f),
            _0x53be95.lineTo(_0xc0763b, _0x5cde9f),
            _0x5c8f1f.forEach((_0x176283, _0x32f281) => {
              let _0x125066 =
                  _0xb24b55 +
                  _0x32f281 * (_0x7d7dae + _0x43559a) +
                  _0x7d7dae / 2,
                _0x47ac8e = _0x176283.side === "right" ? "right" : "left",
                _0x316ddc =
                  _0x47ac8e === "right"
                    ? _0xc0763b + _0x4c6e5c.branchGap
                    : _0xc0763b - _0x4c6e5c.branchGap - _0x238374,
                _0x4145ae =
                  _0x47ac8e === "right" ? _0x316ddc : _0x316ddc + _0x238374;
              (_0x53be95.moveTo(_0xc0763b, _0x125066),
                _0x53be95.lineTo(_0x4145ae, _0x125066));
            }),
            _0x53be95.stroke(),
            _0x5c8f1f.forEach((_0x51bf5c, _0x1bfa67) => {
              let _0x37bf72 = _0xb24b55 + _0x1bfa67 * (_0x7d7dae + _0x43559a);
              (X(
                _0x53be95,
                (_0x51bf5c.side === "right" ? "right" : "left") == "right"
                  ? _0xc0763b + _0x4c6e5c.branchGap
                  : _0xc0763b - _0x4c6e5c.branchGap - _0x238374,
                _0x37bf72,
                _0x238374,
                _0x7d7dae,
                Y.ghostRadius,
              ),
                (_0x53be95.fillStyle = Y.ghostFillColor),
                _0x53be95.fill(),
                _0x53be95.stroke());
            }),
            _0x5c8f1f.forEach((_0x16ec69, _0x527e83) => {
              if (
                !("children" in _0x16ec69) ||
                _0x16ec69.children["length"] === 0
              )
                return;
              let _0x992fcb =
                  _0xb24b55 +
                  _0x527e83 * (_0x7d7dae + _0x43559a) +
                  _0x7d7dae / 2,
                _0x276d11 = _0x16ec69.side === "right" ? "right" : "left",
                _0xb00614 = _0x16ec69.children["slice"](0, 2),
                _0x1155e3 =
                  _0xb00614.length * _0x7d7dae +
                  Math.max(0, _0xb00614.length - 1) * _0x427504,
                _0x3f6c47 =
                  _0x276d11 === "right"
                    ? _0xc0763b + _0x4c6e5c.branchGap
                    : _0xc0763b - _0x4c6e5c.branchGap - _0x238374,
                _0x19afca =
                  _0x276d11 === "right"
                    ? _0x3f6c47 + _0x238374 + _0x33e432
                    : _0x3f6c47 - _0x33e432 - _0x238374,
                _0x3f7c6d = _0x992fcb - _0x1155e3 / 2,
                _0x4f5a83 =
                  _0x276d11 === "right" ? _0x3f6c47 + _0x238374 : _0x3f6c47,
                _0x429825 =
                  _0x276d11 === "right" ? _0x19afca : _0x19afca + _0x238374;
              (_0x53be95.beginPath(),
                _0x53be95.moveTo(_0x4f5a83, _0x992fcb),
                _0x53be95.lineTo(_0x429825, _0x992fcb),
                _0xb00614.forEach((_0x199473, _0x2ac55d) => {
                  let _0x3f6338 =
                    _0x3f7c6d +
                    _0x2ac55d * (_0x7d7dae + _0x427504) +
                    _0x7d7dae / 2;
                  (_0x53be95.moveTo(_0x429825, _0x3f6338),
                    _0x53be95.lineTo(
                      _0x276d11 === "right" ? _0x19afca + _0x238374 : _0x19afca,
                      _0x3f6338,
                    ));
                }),
                _0x53be95.stroke(),
                _0xb00614.forEach((_0x4d3934, _0x4e553d) => {
                  let _0x1d31a6 =
                    _0x3f7c6d + _0x4e553d * (_0x7d7dae + _0x427504);
                  (X(
                    _0x53be95,
                    _0x19afca,
                    _0x1d31a6,
                    _0x238374,
                    _0x7d7dae,
                    Y.ghostRadius,
                  ),
                    (_0x53be95.fillStyle = Y.ghostFillColor),
                    _0x53be95.fill(),
                    _0x53be95.stroke());
                }));
            }));
        }
      }
    } else {
      if (Yn(this._state["structureKind"])) {
        let _0x80bb0d = this._state["children"] ?? [],
          _0x5837c0 = _0x587a69 + _0x1a287b,
          _0x1e4e28 = _0x5837c0 + _0x33e432,
          _0x90f871 = _0xfeebc1.x;
        if (_0x80bb0d.length > 0) {
          let _0x3f330c =
            _0x1e4e28 +
            (_0x80bb0d.length - 1) * (_0x7d7dae + _0x427504) +
            _0x7d7dae / 2;
          (_0x53be95.beginPath(),
            _0x53be95.moveTo(_0x90f871, _0x5837c0),
            _0x53be95.lineTo(_0x90f871, _0x3f330c),
            _0x80bb0d.forEach((_0x32b056, _0xa8816a) => {
              let _0x26c03a = Zn(
                  _0x32b056,
                  _0xa8816a,
                  this._state["structureKind"],
                ),
                _0x7b44bc = _0x1e4e28 + _0xa8816a * (_0x7d7dae + _0x427504),
                _0x2bc6d2 =
                  _0x26c03a === "right"
                    ? _0x90f871 + _0x33e432
                    : _0x90f871 - _0x33e432 - _0x238374,
                _0x47a608 = _0x7b44bc + _0x7d7dae / 2;
              (_0x53be95.moveTo(_0x90f871, _0x47a608),
                _0x53be95.lineTo(
                  _0x26c03a === "right" ? _0x2bc6d2 : _0x2bc6d2 + _0x238374,
                  _0x47a608,
                ));
            }),
            _0x53be95.stroke(),
            _0x80bb0d.forEach((_0x223f02, _0x299135) => {
              let _0x4eaa3f = Zn(
                  _0x223f02,
                  _0x299135,
                  this._state["structureKind"],
                ),
                _0x116961 = _0x1e4e28 + _0x299135 * (_0x7d7dae + _0x427504);
              (X(
                _0x53be95,
                _0x4eaa3f === "right"
                  ? _0x90f871 + _0x33e432
                  : _0x90f871 - _0x33e432 - _0x238374,
                _0x116961,
                _0x238374,
                _0x7d7dae,
                Y.ghostRadius,
              ),
                (_0x53be95.fillStyle = Y.ghostFillColor),
                _0x53be95.fill(),
                _0x53be95.stroke());
            }));
        }
      } else
        _0x44bef9 &&
          ["top", "bottom"].forEach((_0x1b15f3) => {
            let _0x2b3f47 = _0x39bff1[_0x1b15f3];
            if (_0x2b3f47.length === 0) return;
            let _0x4b226c =
                _0x2b3f47.length * _0x238374 +
                Math.max(0, _0x2b3f47.length - 1) * _0x427504,
              _0x4b0592 = _0xfeebc1.x - _0x4b226c / 2,
              _0xe1c91f =
                _0x1b15f3 === "bottom" ? _0x587a69 + _0x1a287b : _0x587a69,
              _0x890ade =
                _0x1b15f3 === "bottom"
                  ? _0xe1c91f + _0x4c6e5c.branchGap
                  : _0xe1c91f - _0x4c6e5c.branchGap,
              _0x42f78f =
                _0x1b15f3 === "bottom"
                  ? _0x587a69 + _0x1a287b + _0x33e432
                  : _0x587a69 - _0x33e432 - _0x7d7dae;
            (_0x53be95.beginPath(),
              _0x53be95.moveTo(_0xfeebc1.x, _0xe1c91f),
              _0x53be95.lineTo(_0xfeebc1.x, _0x890ade),
              _0x2b3f47.length > 1 &&
                (_0x53be95.moveTo(_0x4b0592 + _0x238374 / 2, _0x890ade),
                _0x53be95.lineTo(
                  _0x4b0592 + _0x4b226c - _0x238374 / 2,
                  _0x890ade,
                )),
              _0x2b3f47.forEach((_0x23715c, _0x2a2970) => {
                let _0x416d93 =
                  _0x4b0592 +
                  _0x2a2970 * (_0x238374 + _0x427504) +
                  _0x238374 / 2;
                (_0x53be95.moveTo(_0x416d93, _0x890ade),
                  _0x53be95.lineTo(
                    _0x416d93,
                    _0x1b15f3 === "bottom" ? _0x42f78f : _0x42f78f + _0x7d7dae,
                  ));
              }),
              _0x53be95.stroke(),
              _0x2b3f47.forEach((_0xc0ebe, _0x385c53) => {
                (X(
                  _0x53be95,
                  _0x4b0592 + _0x385c53 * (_0x238374 + _0x427504),
                  _0x42f78f,
                  _0x238374,
                  _0x7d7dae,
                  Y.ghostRadius,
                ),
                  (_0x53be95.fillStyle = Y.ghostFillColor),
                  _0x53be95.fill(),
                  _0x53be95.stroke());
              }));
          });
    }
    ((_0x44bef9 ||
    Yn(this._state["structureKind"]) ||
    Xn(this._state["structureKind"])
      ? []
      : ["left", "right"]
    ).forEach((_0x5db74a) => {
      let _0x3eeadd = _0x39bff1[_0x5db74a];
      if (_0x3eeadd.length === 0) return;
      let _0x28b5e4 =
          _0x3eeadd.length * _0x7d7dae +
          Math.max(0, _0x3eeadd.length - 1) * _0x427504,
        _0x33c627 = _0xfeebc1.y - _0x28b5e4 / 2,
        _0x22ed33 = _0x5db74a === "right" ? _0x383a59 + _0x562a93 : _0x383a59,
        _0x24a523 =
          _0x5db74a === "right"
            ? _0x22ed33 + _0x4c6e5c.branchGap
            : _0x22ed33 - _0x4c6e5c.branchGap,
        _0x251c04 =
          _0x5db74a === "right"
            ? _0x383a59 + _0x562a93 + _0x33e432
            : _0x383a59 - _0x33e432 - _0x238374;
      (_0x53be95.beginPath(),
        _0x53be95.moveTo(_0x22ed33, _0xfeebc1.y),
        _0x53be95.lineTo(_0x24a523, _0xfeebc1.y),
        _0x3eeadd.length > 1 &&
          (_0x53be95.moveTo(_0x24a523, _0x33c627 + _0x7d7dae / 2),
          _0x53be95.lineTo(_0x24a523, _0x33c627 + _0x28b5e4 - _0x7d7dae / 2)),
        _0x3eeadd.forEach((_0x2cacd7, _0x1b513d) => {
          let _0x34bfe2 =
            _0x33c627 + _0x1b513d * (_0x7d7dae + _0x427504) + _0x7d7dae / 2;
          (_0x53be95.moveTo(_0x24a523, _0x34bfe2),
            _0x53be95.lineTo(
              _0x5db74a === "right" ? _0x251c04 : _0x251c04 + _0x238374,
              _0x34bfe2,
            ));
        }),
        _0x53be95.stroke(),
        _0x3eeadd.forEach((_0x1a620e, _0x11c8cf) => {
          let _0x3794d9 = _0x33c627 + _0x11c8cf * (_0x7d7dae + _0x427504);
          (X(
            _0x53be95,
            _0x251c04,
            _0x3794d9,
            _0x238374,
            _0x7d7dae,
            Y.ghostRadius,
          ),
            (_0x53be95.fillStyle = Y.ghostFillColor),
            _0x53be95.fill(),
            _0x53be95.stroke());
        }));
    }),
      X(_0x53be95, _0x383a59, _0x587a69, _0x562a93, _0x1a287b, Y.rootRadius),
      (_0x53be95.fillStyle = Y.primaryColor),
      _0x53be95.fill(),
      _0x53be95.stroke(),
      (_0x53be95.fillStyle = Y.rootTextColor),
      (_0x53be95.font = Vt(Y.rootFontWeight, Y.rootFontSize, _0x5d1bfb)),
      (_0x53be95.textAlign = "center"),
      (_0x53be95.textBaseline = "middle"));
    let _0xeba1dd = Y.textPaddingScreen / _0x5d1bfb;
    return (
      _0x53be95.fillText(
        _0x49f0ab,
        _0xfeebc1.x,
        _0xfeebc1.y,
        Math.max(1, _0x562a93 - _0xeba1dd * 2),
      ),
      _0x53be95.restore(),
      this.makeDirty(false),
      this
    );
  }
};
const er = {
  children: [
    { text: _0x49f0ab, orderKey: _0x4a08be(0), side: "right" },
    { text: _0x49f0ab, orderKey: _0x4a08be(1), side: "right" },
    { text: _0x49f0ab, orderKey: _0x4a08be(2), side: "right" },
  ],
};
var tr = class extends _0x43d28b {
  constructor(..._0x26e3bb) {
    (super(..._0x26e3bb), G(this, "_template", er));
  }
  setTemplate(_0x3b6dab) {
    var _0x11746d;
    let _0x171efc =
      (_0x3b6dab == null ? undefined : _0x3b6dab.children) ??
      (_0x3b6dab == null || (_0x11746d = _0x3b6dab.blueprint) == null
        ? undefined
        : _0x11746d.root["children"]);
    this._template = {
      rootText: _0x3b6dab == null ? undefined : _0x3b6dab.rootText,
      structureKind: _0x3b6dab == null ? undefined : _0x3b6dab.structureKind,
      branchLineType: _0x3b6dab == null ? undefined : _0x3b6dab.branchLineType,
      children: this._normalizeChildren(
        _0x171efc,
        _0x3b6dab == null ? undefined : _0x3b6dab.structureKind,
      ),
      blueprint:
        _0x3b6dab != null && _0x3b6dab.blueprint
          ? this._cloneBlueprint(_0x3b6dab.blueprint)
          : undefined,
    };
  }
  getTemplate() {
    var _0x44bb66;
    return {
      rootText: this._template["rootText"],
      structureKind: this._template["structureKind"],
      branchLineType: this._template["branchLineType"],
      children:
        (_0x44bb66 = this._template["children"]) == null
          ? undefined
          : _0x44bb66.map((_0x439e7f) => ({ ..._0x439e7f })),
      blueprint: this._template["blueprint"]
        ? this._cloneBlueprint(this._template["blueprint"])
        : undefined,
    };
  }
  _cloneBlueprint(_0x15d6d1) {
    return {
      title: _0x15d6d1.title,
      root: this._cloneBlueprintNode(_0x15d6d1.root),
    };
  }
  _cloneBlueprintNode(_0x35f88d) {
    return {
      ..._0x35f88d,
      foreignAttributes: _0x35f88d.foreignAttributes
        ? { ..._0x35f88d.foreignAttributes }
        : undefined,
      children: _0x35f88d.children["map"]((_0x37bc7d) =>
        this._cloneBlueprintNode(_0x37bc7d),
      ),
    };
  }
  _normalizeChildren(_0x545483, _0x56c0fa) {
    let _0x2982f1 = !_0x545483,
      _0x19f73f = _0x545483 ?? er.children;
    return _0x19f73f == null
      ? undefined
      : _0x19f73f.map((_0x41f30a, _0x19e2fb) => ({
          ..._0x41f30a,
          text: _0x41f30a.text ?? _0x49f0ab,
          side: this._resolveChildSide(
            _0x41f30a.side,
            _0x19e2fb,
            _0x56c0fa,
            _0x2982f1,
          ),
        }));
  }
  _resolveChildSide(_0x44fa89, _0x106a9b, _0x1ac9f4, _0x416247) {
    return _0x1ac9f4 === "mindmap-vertical"
      ? _0x416247
        ? "bottom"
        : (_0x44fa89 ?? "bottom")
      : _0x1ac9f4 === "tree-left"
        ? _0x416247
          ? "left"
          : (_0x44fa89 ?? "left")
        : _0x1ac9f4 === "tree-right"
          ? _0x416247
            ? "right"
            : (_0x44fa89 ?? "right")
          : _0x1ac9f4 === "tree-alternate"
            ? _0x416247
              ? _0x106a9b % 2 == 0
                ? "left"
                : "right"
              : (_0x44fa89 ?? (_0x106a9b % 2 == 0 ? "left" : "right"))
            : _0x1ac9f4 === "timeline-horizontal"
              ? _0x416247
                ? _0x106a9b % 2 == 0
                  ? "top"
                  : "bottom"
                : (_0x44fa89 ?? (_0x106a9b % 2 == 0 ? "top" : "bottom"))
              : _0x1ac9f4 === "timeline-vertical"
                ? _0x416247
                  ? _0x106a9b % 2 == 0
                    ? "left"
                    : "right"
                  : (_0x44fa89 ?? (_0x106a9b % 2 == 0 ? "left" : "right"))
                : _0x44fa89;
  }
};
function nr(_0x477ef3, _0x840109) {
  let _0x209a34 =
    Number.isFinite(_0x840109.zoomRatio) && _0x840109.zoomRatio > 0
      ? _0x840109.zoomRatio
      : 1;
  return {
    x: Math.round((_0x477ef3.offsetX - _0x840109.panOffset["x"]) / _0x209a34),
    y: Math.round((_0x477ef3.offsetY - _0x840109.panOffset["y"]) / _0x209a34),
  };
}
function rr(_0x7ba7d1) {
  var _0x20aaf9;
  if (_0x7ba7d1 != null && _0x7ba7d1.dispose) {
    _0x7ba7d1.dispose();
    return;
  }
  _0x7ba7d1 == null ||
    (_0x20aaf9 = _0x7ba7d1.unsubscribe) == null ||
    _0x20aaf9.call(_0x7ba7d1);
}
function ir(_0x57f8b4) {
  var _0x591731;
  return (
    _0x57f8b4.activeTool === _0x590f62.MindMap &&
    ((_0x591731 = _0x57f8b4.pendingInsert) == null
      ? undefined
      : _0x591731.type) === _0x590f62.MindMap
  );
}
let ar = class extends _0x25c64b {
  constructor(
    _0x729895,
    _0x6e145f,
    _0x1d8c81,
    _0x13c329,
    _0x4960ed,
    _0x465b18,
    _0x474921,
  ) {
    (super(),
      (this._renderContext = _0x729895),
      (this._instanceSrv = _0x6e145f),
      (this._stateService = _0x1d8c81),
      (this._commandService = _0x13c329),
      (this._insertStateService = _0x4960ed),
      (this._elementStateService = _0x465b18),
      (this._boardTextEditingService = _0x474921),
      G(this, "_previewObject", null),
      G(this, "_lastPoint", null),
      this._init());
  }
  _init() {
    var _0x45ab06;
    let { scene: _0x4c9c55, unitId: _0x4aef1a } = this._renderContext,
      _0x8701de = this._instanceSrv["getUnit"](
        _0x4aef1a,
        _0x2b7b4b.UNIVER_BOARD,
      );
    if (!_0x8701de) return;
    let _0x3b9af0 =
        (_0x45ab06 = _0x4c9c55.onPointerMove$) == null
          ? undefined
          : _0x45ab06.subscribeEvent({
              priority: 4,
              next: ([_0x11bdda, _0x3aa2e8]) =>
                this._handlePointerMove(_0x11bdda, _0x3aa2e8),
            }),
      _0x37c266 = _0x4c9c55.onPointerDown$["subscribeEvent"]({
        priority: 4,
        next: ([_0x3b5b57, _0x38af18]) =>
          this._handlePointerDown(_0x8701de, _0x3b5b57, _0x38af18),
      });
    (this.disposeWithMe(_0x5ab28a(() => rr(_0x3b9af0))),
      this.disposeWithMe(_0x5ab28a(() => rr(_0x37c266))));
    let _0x2301fe = this._stateService["state$"].subscribe(() =>
      this._syncPreviewObject(),
    );
    (this.disposeWithMe(_0x5ab28a(() => rr(_0x2301fe))),
      this.disposeWithMe(
        _0x5ab28a(() => {
          this._removePreviewObject();
        }),
      ),
      this._syncPreviewObject());
  }
  _syncPreviewObject() {
    var _0x3dd481, _0x110160;
    let _0x1cb46c = this._stateService["getState"]();
    if (!ir(_0x1cb46c)) {
      this._removePreviewObject();
      return;
    }
    let _0x5cd8af = this._ensurePreviewObject(),
      _0x17417c = this._insertStateService["getTemplate"]();
    (_0x5cd8af.updateState({
      point: this._lastPoint,
      structureKind: _0x17417c.structureKind,
      children: _0x17417c.children,
      blueprint: _0x17417c.blueprint,
      zoomRatio: _0x1cb46c.zoomRatio,
    }),
      (_0x3dd481 = (_0x110160 = this._renderContext["scene"]).makeDirty) ==
        null || _0x3dd481.call(_0x110160, true));
  }
  _ensurePreviewObject() {
    var _0x40ffe0, _0x5f3c92;
    if (this._previewObject) return this._previewObject;
    let _0x416a94 = this._insertStateService["getTemplate"](),
      _0x13cd1c = new $n(Kn, {
        point: this._lastPoint,
        structureKind: _0x416a94.structureKind,
        children: _0x416a94.children,
        blueprint: _0x416a94.blueprint,
        zoomRatio: this._stateService["getState"]().zoomRatio,
      });
    return (
      (this._previewObject = _0x13cd1c),
      (_0x40ffe0 = (_0x5f3c92 = this._renderContext["scene"]).addObject) ==
        null || _0x40ffe0.call(_0x5f3c92, _0x13cd1c, qn),
      _0x13cd1c
    );
  }
  _removePreviewObject() {
    var _0x5d0e86, _0x5ba99f, _0x5c7407, _0x3e0f2b;
    if (!this._previewObject) {
      this._lastPoint = null;
      return;
    }
    ((_0x5d0e86 = (_0x5ba99f = this._renderContext["scene"]).removeObjects) ==
      null || _0x5d0e86.call(_0x5ba99f, [this._previewObject]),
      (this._previewObject = null),
      (this._lastPoint = null),
      (_0x5c7407 = (_0x3e0f2b = this._renderContext["scene"]).makeDirty) ==
        null || _0x5c7407.call(_0x3e0f2b, true));
  }
  _getPointFromEvent(_0x31478e) {
    let _0x448e02 = this._stateService["getState"]();
    return nr(_0x31478e, {
      panOffset: _0x448e02.viewportPanOffset,
      zoomRatio: _0x448e02.zoomRatio,
    });
  }
  _resolveRootTopLeft(_0x38752e) {
    return {
      left: Math.round(_0x38752e.x - _0x3c410f.rootWidth / 2),
      top: Math.round(_0x38752e.y - _0x3c410f.rootHeight / 2),
    };
  }
  _handlePointerMove(_0xf9db85, _0x6218d3) {
    ir(this._stateService["getState"]()) &&
      ((this._lastPoint = this._getPointFromEvent(_0xf9db85)),
      this._syncPreviewObject(),
      _0x6218d3.stopPropagation());
  }
  _handlePointerDown(_0x16a374, _0x161618, _0x51d066) {
    var _0x44a02a;
    let _0x159be9 = this._stateService["getState"](),
      _0x740b53 = _0x161618.button ?? 0;
    if (!ir(_0x159be9) || _0x740b53 !== 0) return;
    let _0x25a9fb = this._getPointFromEvent(_0x161618),
      _0x2468df = this._resolveRootTopLeft(_0x25a9fb),
      _0x5da211 = this._insertStateService["getTemplate"](),
      _0x3f9991 = _0x33cedd(6),
      _0x48d6ad = _0x16a374.getActivePageId(),
      _0x4a4302 = this._commandService["executeCommand"](_0x37f2fb.id, {
        unitId: this._renderContext["unitId"],
        subUnitId: _0x48d6ad,
        left: _0x2468df.left,
        top: _0x2468df.top,
        rootNodeId: _0x3f9991,
        rootText: _0x5da211.rootText,
        structureKind: _0x5da211.structureKind,
        branchLineType: _0x5da211.branchLineType,
        children: _0x5da211.children,
        blueprint: _0x5da211.blueprint,
      });
    (Promise.resolve(_0x4a4302).then((_0x2e5354) => {
      if (!_0x2e5354) return;
      let _0x382ef5 = {
        unitId: this._renderContext["unitId"],
        subUnitId: _0x48d6ad,
      };
      (this._elementStateService["selectElements"](
        _0x382ef5,
        [_0x3f9991],
        _0x3f9991,
      ),
        this._boardTextEditingService["ignoreExternalFocusChanges"](),
        this._boardTextEditingService["setEditing"]({
          ..._0x382ef5,
          shapeId: _0x3f9991,
          shapeKey: _0x5967eb(_0x382ef5.unitId, _0x3f9991),
          visible: true,
        }));
    }),
      this._stateService["setActiveTool"](_0x590f62.Select),
      _0x51d066.stopPropagation(),
      (_0x44a02a = _0x161618.preventDefault) == null ||
        _0x44a02a.call(_0x161618));
  }
};
ar = q(
  [
    K(1, _0x2f0059),
    K(2, _0x225839),
    K(3, _0x3ef066),
    K(4, _0x50be27(tr)),
    K(5, _0x4b6ba3),
    K(6, _0x50be27(_0x2888b1)),
  ],
  ar,
);
var or = class extends _0x43d28b {
  constructor(..._0x358ca5) {
    (super(..._0x358ca5),
      G(this, "_refresh$", new _0x1bebec()),
      G(this, "refresh$", this._refresh$["asObservable"]()));
  }
  notify(_0x84a0a4) {
    this._refresh$["next"](_0x84a0a4);
  }
  dispose() {
    (this._refresh$["complete"](), super.dispose());
  }
};
function sr(_0x537b5c) {
  return (
    typeof _0x537b5c == "number" && Number.isFinite(_0x537b5c) && _0x537b5c > 0
  );
}
function cr(_0x160d68, _0xaa73a1, _0x561fac) {
  let _0x13eac4 = _0x160d68[_0xaa73a1],
    _0x559d0e = _0x154a55(_0x13eac4 == null ? undefined : _0x13eac4.element);
  if (!_0x13eac4 || !_0x559d0e) return null;
  let _0x554ad4 = _0x2b77bd(_0x13eac4, _0x561fac);
  if (!_0x554ad4) return null;
  let _0x120686 = _0x13eac4.transform ?? _0x13eac4.element["transform"];
  return _0x4ba2fc(
    {
      ..._0x160d68,
      [_0xaa73a1]: {
        ..._0x13eac4,
        transform: {
          ..._0x120686,
          width: _0x554ad4.width,
          height: _0x554ad4.height,
        },
        element: {
          ..._0x13eac4.element,
          transform: {
            ..._0x13eac4.element["transform"],
            width: _0x554ad4.width,
            height: _0x554ad4.height,
          },
        },
      },
    },
    _0x559d0e.structureScopeId,
  );
}
let lr = class extends _0x25c64b {
  constructor(
    _0x55be73,
    _0x3c48cf,
    _0x18201f,
    _0x5ce57f,
    _0x224f6d,
    _0x12a328,
  ) {
    (super(),
      (this._renderContext = _0x55be73),
      (this._intrinsicSizeService = _0x3c48cf),
      (this._boardElementService = _0x18201f),
      (this._textEditingService = _0x5ce57f),
      (this._previewRefreshService = _0x224f6d),
      (this._commandService = _0x12a328),
      G(this, "_activePreview", null),
      G(this, "_provider", {
        match: (_0x2e3947) =>
          _0x2e3947.unitId === this._renderContext["unitId"] &&
          !!_0x154a55(_0x2e3947.element),
        resolveHostSize: (_0x2a75a0) => this._resolveHostSize(_0x2a75a0),
        previewHostSize: (_0x55846c) => this._previewHostSize(_0x55846c),
        updateHostSize: (_0x3c7bcf) => this._updateHostSize(_0x3c7bcf),
        updateShapeText: (_0x454dd2) => this._updateShapeText(_0x454dd2),
      }),
      this.disposeWithMe(
        this._intrinsicSizeService["registerProvider"](this._provider),
      ),
      this._initEditingRestore(),
      this.disposeWithMe(_0x5ab28a(() => this._restoreActivePreview())));
  }
  _updateHostSize(_0x2d0d91) {
    return this._previewHostSize(_0x2d0d91);
  }
  _updateShapeText(_0x201e9f) {
    let _0x59d47b = _0x201e9f.params["hostSize"]
        ? this._resolveHostSize({
            elementData: _0x201e9f.elementData,
            params: _0x201e9f.params["hostSize"],
          })
        : null,
      _0x5d2ddc =
        _0x201e9f.elementData["transform"] ??
        _0x201e9f.elementData["element"].transform;
    return !(
      _0x59d47b &&
      (_0x59d47b.width !== _0x5d2ddc.width ||
        _0x59d47b.height !== _0x5d2ddc.height)
    ) &&
      _0x2e45f6(_0x201e9f.params["shapeText"], _0x201e9f.params["oldShapeText"])
      ? true
      : this._commandService["syncExecuteCommand"](_0x287f19.id, {
          unitId: _0x201e9f.params["unitId"],
          subUnitId: _0x201e9f.params["subUnitId"],
          nodeId: _0x201e9f.params["shapeId"],
          shapeText: _0x201e9f.params["shapeText"],
          ...(_0x59d47b
            ? { hostSize: { width: _0x59d47b.width, height: _0x59d47b.height } }
            : null),
        });
  }
  _previewHostSize(_0x426f04) {
    let _0x562b03 = this._resolveHostSize(_0x426f04);
    if (!_0x562b03) return false;
    let _0x14b9e7 =
      _0x426f04.elementData["transform"] ??
      _0x426f04.elementData["element"].transform;
    return (
      (!this._activePreview &&
        _0x14b9e7.width === _0x562b03.width &&
        _0x14b9e7.height === _0x562b03.height) ||
        this._syncLayoutPreview(_0x426f04, _0x562b03),
      true
    );
  }
  _resolveHostSize(_0x20b7c0) {
    return !sr(_0x20b7c0.params["width"]) || !sr(_0x20b7c0.params["height"])
      ? null
      : _0x2b77bd(_0x20b7c0.elementData, {
          width: _0x20b7c0.params["width"],
          height: _0x20b7c0.params["height"],
        });
  }
  _initEditingRestore() {
    this.disposeWithMe(
      _0x5ab28a(
        this._textEditingService["editingParams$"]
          .pipe(_0x2777f5(this.dispose$))
          .subscribe((_0x168f7b) => {
            _0x168f7b || this._restoreActivePreview();
          }),
      ),
    );
  }
  _syncLayoutPreview(_0x4eb493, _0x3c9900) {
    var _0x1f39c4;
    let _0x443bef = this._boardElementService["getElementData"](
        _0x4eb493.params["unitId"],
        _0x4eb493.params["subUnitId"],
      ),
      _0x40826b = cr(_0x443bef, _0x4eb493.params["shapeId"], _0x3c9900),
      _0x5dd1bc = _0x154a55(
        (_0x1f39c4 = _0x443bef[_0x4eb493.params["shapeId"]]) == null
          ? undefined
          : _0x1f39c4.element,
      );
    !_0x40826b ||
      !_0x5dd1bc ||
      ((this._activePreview = {
        unitId: _0x4eb493.params["unitId"],
        subUnitId: _0x4eb493.params["subUnitId"],
        scopeId: _0x5dd1bc.structureScopeId,
      }),
      this._syncElementDataToScene(_0x40826b, _0x5dd1bc.structureScopeId) &&
        this._previewRefreshService["notify"]({
          unitId: _0x4eb493.params["unitId"],
          subUnitId: _0x4eb493.params["subUnitId"],
          nodeId: _0x4eb493.params["shapeId"],
          scopeId: _0x5dd1bc.structureScopeId,
        }));
  }
  _restoreActivePreview() {
    let _0x380096 = this._activePreview;
    if (!_0x380096) return;
    this._activePreview = null;
    let _0x203715 = this._boardElementService["getElementData"](
      _0x380096.unitId,
      _0x380096.subUnitId,
    );
    this._syncElementDataToScene(_0x203715, _0x380096.scopeId) &&
      this._previewRefreshService["notify"]({
        unitId: _0x380096.unitId,
        subUnitId: _0x380096.subUnitId,
        nodeId: _0x380096.scopeId,
        scopeId: _0x380096.scopeId,
      });
  }
  _syncElementDataToScene(_0x50cc3f, _0xf185aa) {
    let _0x47e9a6 = false;
    if (
      (Object.values(_0x50cc3f).forEach((_0x566588) => {
        var _0x164322;
        let _0x5ac8e6 = _0x154a55(_0x566588.element),
          _0x117548 =
            (_0x164322 = _0x566588.element["custom"]) == null
              ? undefined
              : _0x164322.structured;
        if (
          _0x566588.elementId !== _0xf185aa &&
          (_0x5ac8e6 == null ? undefined : _0x5ac8e6.structureScopeId) !==
            _0xf185aa &&
          (_0x117548 == null ? undefined : _0x117548.structureScopeId) !==
            _0xf185aa
        )
          return;
        let _0x197cd8 = this._getSceneObject(_0x566588.elementId);
        _0x197cd8 &&
          (_0x47e9a6 =
            _0x1a6b55(_0x197cd8, _0x566588, {
              elementData: _0x50cc3f,
              unitId: this._renderContext["unitId"],
            }) || _0x47e9a6);
      }),
      _0x47e9a6)
    ) {
      var _0x59a239, _0x3a749e;
      (this._renderContext["scene"].makeDirty(true),
        (_0x59a239 = (_0x3a749e = this._renderContext["scene"])
          .requestRender) == null || _0x59a239.call(_0x3a749e));
    }
    return _0x47e9a6;
  }
  _getSceneObject(_0x13ccd0) {
    var _0x3b3ab9;
    let _0x33cde2 = _0x5967eb(this._renderContext["unitId"], _0x13ccd0),
      _0x9feabf = this._renderContext["scene"];
    return (
      ((_0x3b3ab9 = _0x9feabf.getObjectIncludeInGroup) == null
        ? undefined
        : _0x3b3ab9.call(_0x9feabf, _0x33cde2)) ??
      this._renderContext["scene"].getObject(_0x33cde2) ??
      null
    );
  }
};
lr = q(
  [
    K(1, _0x50be27(_0x32def5)),
    K(2, _0x50be27(_0x569c18)),
    K(3, _0x50be27(_0x2888b1)),
    K(4, _0x50be27(or)),
    K(5, _0x3ef066),
  ],
  lr,
);
const Q = {
  radius: 18,
  addChildRadius: 14,
  siblingHoverRadius: 10,
  siblingDotRadius: 5,
  siblingDotGap: 3,
  gap: 10,
  collapsePlusMinDistance: 44,
  primaryColor: J.primaryColor,
  surfaceColor: J.surfaceColor,
  borderWidth: 2,
  glyphSize: 8,
  addChildGlyphSize: 6,
  siblingGlyphSize: 5.5,
  glyphWidth: 2.4,
  glyphHoverWidth: 3,
  badgeFontWeight: 600,
  badgeFontSize: 18,
  fontFamily: J.fontFamily,
};
function ur(_0x31c5cd) {
  let _0x6e384 = Q.radius,
    _0x24b134 = Q.addChildRadius,
    _0x252e03 = Q.siblingHoverRadius,
    _0x3a43e5 = Q.gap,
    _0xd33fea = Q.siblingDotRadius,
    _0x494c65 = _0xd33fea + Q.siblingDotGap,
    _0x3d3af8 = Q.collapsePlusMinDistance,
    _0x15d1f7 = _0x31c5cd.bounds["top"] + _0x31c5cd.bounds["height"] / 2,
    _0x4768a2 = _0x31c5cd.bounds["left"] + _0x31c5cd.bounds["width"] / 2,
    _0x30d104 = _0x31c5cd.bounds["left"] - _0x6e384 - _0x3a43e5,
    _0x53cdb4 =
      _0x31c5cd.bounds["left"] +
      _0x31c5cd.bounds["width"] +
      _0x6e384 +
      _0x3a43e5,
    _0x505cce = _0x31c5cd.bounds["top"] - _0x6e384 - _0x3a43e5,
    _0x384bb5 =
      _0x31c5cd.bounds["top"] +
      _0x31c5cd.bounds["height"] +
      _0x6e384 +
      _0x3a43e5,
    _0x4eaf91 = _0x31c5cd.bounds["left"] - _0x24b134 - _0x3a43e5,
    _0x1e3ea4 =
      _0x31c5cd.bounds["left"] +
      _0x31c5cd.bounds["width"] +
      _0x24b134 +
      _0x3a43e5,
    _0x4329bc = _0x31c5cd.bounds["top"] - _0x24b134 - _0x3a43e5,
    _0x2a6c11 =
      _0x31c5cd.bounds["top"] +
      _0x31c5cd.bounds["height"] +
      _0x24b134 +
      _0x3a43e5,
    _0x2ef192 = [],
    _0x43f712 = _0x31c5cd.side === "top" || _0x31c5cd.side === "bottom",
    _0x990f3b = _0x43f712
      ? _0x4768a2
      : _0x31c5cd.side === "left"
        ? _0x30d104
        : _0x53cdb4,
    _0x3d6323 = _0x43f712
      ? _0x31c5cd.side === "top"
        ? _0x505cce
        : _0x384bb5
      : _0x15d1f7;
  if (_0x31c5cd.hasChildren && _0x31c5cd.collapsedDescendantCount > 0)
    return (
      _0x2ef192.push({
        kind: "toggle-collapse",
        x: _0x990f3b,
        y: _0x3d6323,
        radius: _0x6e384,
        badgeCount: _0x31c5cd.collapsedDescendantCount,
      }),
      _0x2ef192
    );
  if (
    (_0x31c5cd.isRoot
      ? (
          _0x31c5cd.rootChildSides ??
          (_0x43f712 ? ["top", "bottom"] : ["left", "right"])
        ).forEach((_0x4010ea) => {
          _0x4010ea === "top"
            ? _0x2ef192.push({
                kind: "add-child-top",
                x: _0x4768a2,
                y: _0x4329bc,
                radius: _0x24b134,
              })
            : _0x4010ea === "bottom"
              ? _0x2ef192.push({
                  kind: "add-child-bottom",
                  x: _0x4768a2,
                  y: _0x2a6c11,
                  radius: _0x24b134,
                })
              : _0x4010ea === "left"
                ? _0x2ef192.push({
                    kind: "add-child-left",
                    x: _0x4eaf91,
                    y: _0x15d1f7,
                    radius: _0x24b134,
                  })
                : _0x2ef192.push({
                    kind: "add-child-right",
                    x: _0x1e3ea4,
                    y: _0x15d1f7,
                    radius: _0x24b134,
                  });
        })
      : (_0x2ef192.push({
          kind:
            _0x31c5cd.side === "left"
              ? "add-child-left"
              : _0x31c5cd.side === "top"
                ? "add-child-top"
                : _0x31c5cd.side === "bottom"
                  ? "add-child-bottom"
                  : "add-child-right",
          x: _0x43f712
            ? _0x4768a2
            : _0x31c5cd.side === "left"
              ? _0x4eaf91
              : _0x1e3ea4,
          y: _0x43f712
            ? _0x31c5cd.side === "top"
              ? _0x4329bc
              : _0x2a6c11
            : _0x15d1f7,
          radius: _0x24b134,
        }),
        _0x43f712
          ? (_0x2ef192.push({
              kind: "add-sibling-before",
              placement: "before",
              x: _0x31c5cd.bounds["left"] - _0x494c65,
              y: _0x15d1f7,
              radius: _0x252e03,
              visualRadius: _0xd33fea,
            }),
            _0x2ef192.push({
              kind: "add-sibling-after",
              placement: "after",
              x:
                _0x31c5cd.bounds["left"] +
                _0x31c5cd.bounds["width"] +
                _0x494c65,
              y: _0x15d1f7,
              radius: _0x252e03,
              visualRadius: _0xd33fea,
            }))
          : (_0x2ef192.push({
              kind: "add-sibling-before",
              placement: "before",
              x: _0x4768a2,
              y: _0x31c5cd.bounds["top"] - _0x494c65,
              radius: _0x252e03,
              visualRadius: _0xd33fea,
            }),
            _0x2ef192.push({
              kind: "add-sibling-after",
              placement: "after",
              x: _0x4768a2,
              y:
                _0x31c5cd.bounds["top"] +
                _0x31c5cd.bounds["height"] +
                _0x494c65,
              radius: _0x252e03,
              visualRadius: _0xd33fea,
            }))),
    _0x31c5cd.hasChildren)
  ) {
    let _0x34f4bd = {
      kind: "toggle-collapse",
      x: _0x990f3b,
      y: _0x3d6323,
      radius: _0x6e384,
    };
    _0x2ef192.push(_0x34f4bd);
    let _0x50df1e = _0x2ef192.find(
      (_0x19206e) =>
        _0x19206e.kind ===
        (_0x31c5cd.side === "left"
          ? "add-child-left"
          : _0x31c5cd.side === "top"
            ? "add-child-top"
            : _0x31c5cd.side === "bottom"
              ? "add-child-bottom"
              : "add-child-right"),
    );
    _0x50df1e &&
      Math.hypot(_0x50df1e.x - _0x34f4bd.x, _0x50df1e.y - _0x34f4bd.y) <
        _0x3d3af8 &&
      (_0x31c5cd.side === "top" || _0x31c5cd.side === "bottom"
        ? (_0x50df1e.y =
            _0x34f4bd.y + (_0x31c5cd.side === "top" ? -_0x3d3af8 : _0x3d3af8))
        : (_0x50df1e.x =
            _0x34f4bd.x +
            (_0x31c5cd.side === "left" ? -_0x3d3af8 : _0x3d3af8)));
  }
  return _0x2ef192;
}
const dr = "board-mind-map-node-controls-object",
  fr = _0x4549ea.connectorAffordance;
function pr(_0x260f99, _0x1bff3e) {
  return (
    !!_0x260f99 &&
    _0x260f99.kind === _0x1bff3e.kind &&
    _0x260f99.x === _0x1bff3e.x &&
    _0x260f99.y === _0x1bff3e.y
  );
}
var mr = class extends _0x57beaa {
  constructor(_0x20a4fb = dr, _0x2f27c9) {
    (super(_0x20a4fb),
      G(this, "_state", { controls: [] }),
      (this.evented = true),
      (this.zIndex = _0x2b35a0.transientControl),
      this.updateState(_0x2f27c9));
  }
  updateState(_0x24a1e9) {
    ((this._state = { ...this._state, ..._0x24a1e9 }),
      this._state["controls"].length > 0 ? this.show() : this.hide(),
      this.makeDirty(true));
  }
  setHoveredControl(_0x532c1f) {
    (!_0x532c1f && !this._state["hoveredControl"]) ||
      (_0x532c1f && pr(this._state["hoveredControl"], _0x532c1f)) ||
      ((this._state = { ...this._state, hoveredControl: _0x532c1f }),
      this.makeDirty(true));
  }
  getHitControl(_0x22066a) {
    for (
      let _0x2df259 = this._state["controls"].length - 1;
      _0x2df259 >= 0;
      --_0x2df259
    ) {
      let _0x144e0e = this._state["controls"][_0x2df259];
      if (
        Math.hypot(_0x22066a.x - _0x144e0e.x, _0x22066a.y - _0x144e0e.y) <=
        _0x144e0e.radius
      )
        return _0x144e0e;
    }
    return null;
  }
  isHit(_0x11c400) {
    return !!this.getHitControl({ x: _0x11c400.x, y: _0x11c400.y });
  }
  render(_0x5bdefb, _0x5469c8) {
    return !this.visible || this._state["controls"].length === 0
      ? (this.makeDirty(false), this)
      : (_0x5bdefb.save(),
        this._state["controls"].forEach((_0x1910b1) => {
          let _0x5f5a84 = pr(this._state["hoveredControl"], _0x1910b1),
            _0x315a7c = _0x1910b1.badgeCount !== undefined,
            _0x31e403 =
              _0x1910b1.kind === "add-child-left" ||
              _0x1910b1.kind === "add-child-right" ||
              _0x1910b1.kind === "add-child-top" ||
              _0x1910b1.kind === "add-child-bottom",
            _0x48e3eb =
              _0x1910b1.kind === "add-sibling-before" ||
              _0x1910b1.kind === "add-sibling-after",
            _0x505db8 =
              _0x48e3eb && !_0x5f5a84
                ? (_0x1910b1.visualRadius ?? _0x1910b1.radius)
                : _0x1910b1.radius;
          if (
            (_0x5bdefb.beginPath(),
            (_0x5bdefb.fillStyle =
              _0x1910b1.kind === "toggle-collapse"
                ? Q.surfaceColor
                : Q.primaryColor),
            (_0x5bdefb.strokeStyle = Q.primaryColor),
            (_0x5bdefb.lineWidth = Q.borderWidth),
            _0x5bdefb.arc(_0x1910b1.x, _0x1910b1.y, _0x505db8, 0, Math.PI * 2),
            _0x5bdefb.fill(),
            (!_0x48e3eb || _0x5f5a84) && _0x5bdefb.stroke(),
            !_0x315a7c && (!_0x48e3eb || _0x5f5a84))
          ) {
            if (
              (_0x5bdefb.beginPath(),
              (_0x5bdefb.strokeStyle =
                _0x1910b1.kind === "toggle-collapse"
                  ? Q.primaryColor
                  : Q.surfaceColor),
              (_0x5bdefb.lineWidth = _0x48e3eb
                ? Q.glyphWidth
                : _0x5f5a84
                  ? Q.glyphHoverWidth
                  : Q.glyphWidth),
              (_0x5bdefb.lineCap = "round"),
              _0x1910b1.kind === "toggle-collapse")
            ) {
              let _0x9117b4 = Q.glyphSize;
              (_0x5bdefb.moveTo(
                _0x1910b1.x + _0x9117b4 / 2,
                _0x1910b1.y - _0x9117b4,
              ),
                _0x5bdefb.lineTo(_0x1910b1.x - _0x9117b4 / 2, _0x1910b1.y),
                _0x5bdefb.lineTo(
                  _0x1910b1.x + _0x9117b4 / 2,
                  _0x1910b1.y + _0x9117b4,
                ));
            } else {
              let _0x230a69 = _0x48e3eb
                ? Q.siblingGlyphSize
                : _0x31e403
                  ? Q.addChildGlyphSize
                  : Q.glyphSize;
              (_0x5bdefb.moveTo(_0x1910b1.x - _0x230a69, _0x1910b1.y),
                _0x5bdefb.lineTo(_0x1910b1.x + _0x230a69, _0x1910b1.y),
                _0x5bdefb.moveTo(_0x1910b1.x, _0x1910b1.y - _0x230a69),
                _0x5bdefb.lineTo(_0x1910b1.x, _0x1910b1.y + _0x230a69));
            }
            _0x5bdefb.stroke();
          }
          _0x315a7c &&
            ((_0x5bdefb.fillStyle = Q.primaryColor),
            (_0x5bdefb.font =
              Q.badgeFontWeight +
              "\x20" +
              Q.badgeFontSize +
              "px " +
              Q.fontFamily),
            (_0x5bdefb.textAlign = "center"),
            (_0x5bdefb.textBaseline = "middle"),
            _0x5bdefb.fillText(
              String(_0x1910b1.badgeCount),
              _0x1910b1.x,
              _0x1910b1.y,
            ));
        }),
        _0x5bdefb.restore(),
        this.makeDirty(false),
        this);
  }
};
function hr(_0x5af613) {
  return (
    _0x5af613 === "tree-left" ||
    _0x5af613 === "tree-right" ||
    _0x5af613 === "tree-alternate"
  );
}
function gr(_0x442196) {
  return (
    _0x442196 === "timeline-horizontal" || _0x442196 === "timeline-vertical"
  );
}
function _r(_0x2a4594, _0x35549d) {
  let _0x444faa =
    Number.isFinite(_0x35549d.zoomRatio) && _0x35549d.zoomRatio > 0
      ? _0x35549d.zoomRatio
      : 1;
  return {
    x: Math.round((_0x2a4594.offsetX - _0x35549d.panOffset["x"]) / _0x444faa),
    y: Math.round((_0x2a4594.offsetY - _0x35549d.panOffset["y"]) / _0x444faa),
  };
}
let vr = class extends _0x25c64b {
  constructor(
    _0x4a423e,
    _0x149436,
    _0x368f28,
    _0x1cb1e3,
    _0x43f5cf,
    _0x2b65f6,
    _0x2ad210,
    _0x1aed0a,
    _0x29400a,
  ) {
    (super(),
      (this._renderContext = _0x4a423e),
      (this._boardElementService = _0x149436),
      (this._elementStateService = _0x368f28),
      (this._stateService = _0x1cb1e3),
      (this._commandService = _0x43f5cf),
      (this._boardTextEditingService = _0x2b65f6),
      (this._localeService = _0x2ad210),
      (this._previewRefreshService = _0x1aed0a),
      (this._undoRedoGroupService = _0x29400a),
      G(this, "_object", null),
      G(this, "_objectEventDisposables", null),
      G(this, "_activeNodeId", null),
      G(this, "_activeScopeId", null),
      this._init());
  }
  _init() {
    var _0x1a29fa, _0x3e620a, _0x4141eb;
    let { scene: _0x4818f7 } = this._renderContext,
      _0x488a83 =
        (_0x1a29fa = _0x4818f7.getTransformerByCreate) == null
          ? undefined
          : _0x1a29fa.call(_0x4818f7);
    (_0x488a83 &&
      (this.disposeWithMe(
        _0x5ab28a(
          _0x488a83.changing$["pipe"](_0x2777f5(this.dispose$)).subscribe(
            ({ objects: _0x390fc3 }) => {
              this._syncControls(_0x390fc3, { hideRootControls: true });
            },
          ),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          _0x488a83.changeEnd$["pipe"](_0x2777f5(this.dispose$)).subscribe(
            (_0x35293a) => {
              let _0x1be509 = _0x35293a == null ? undefined : _0x35293a.objects;
              (this._syncControls(_0x1be509),
                setTimeout(() => this._syncControls(_0x1be509), 0));
            },
          ),
        ),
      )),
      this.disposeWithMe(
        _0x5ab28a(
          this._elementStateService["state$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe(() => this._syncControls()),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          this._stateService["state$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe(() => this._syncControls()),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          this._boardElementService["elementUpdate$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe((_0x2bc750) => {
              let _0x29a425 =
                this._elementStateService["getSnapshot"]().context;
              _0x29a425 &&
                _0x2bc750.some(
                  (_0x4a664b) =>
                    _0x4a664b.unitId === _0x29a425.unitId &&
                    _0x4a664b.subUnitId === _0x29a425.subUnitId &&
                    (_0x4a664b.elementId === this._activeNodeId ||
                      _0x4a664b.elementId === this._activeScopeId),
                ) &&
                this._syncControls();
            }),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          this._previewRefreshService["refresh$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe((_0x33a12b) => {
              let _0x1b83d0 =
                this._elementStateService["getSnapshot"]().context;
              !_0x1b83d0 ||
                _0x1b83d0.unitId !== _0x33a12b.unitId ||
                _0x1b83d0.subUnitId !== _0x33a12b.subUnitId ||
                (this._activeScopeId &&
                  this._activeScopeId !== _0x33a12b.scopeId) ||
                this._syncControls();
            }),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          _0x4818f7.onPointerMove$["subscribeEvent"]((_0x1374d7) =>
            this._handlePointerMove(_0x1374d7),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          _0x4818f7.onPointerDown$["subscribeEvent"]({
            priority: 4,
            next: ([_0x4016b1, _0x52901f]) => {
              this._handlePointerDown(_0x4016b1) &&
                this._consumeControlEvent(_0x4016b1, _0x52901f);
            },
          }),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          ((_0x3e620a = _0x4818f7.onPointerUp$) == null
            ? undefined
            : _0x3e620a.subscribeEvent({
                priority: 4,
                next: ([_0x41f7cb, _0x3cf291]) => {
                  this._isControlEvent(_0x41f7cb) &&
                    this._consumeControlEvent(_0x41f7cb, _0x3cf291);
                },
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          ((_0x4141eb = _0x4818f7.onDblclick$) == null
            ? undefined
            : _0x4141eb.subscribeEvent({
                priority: 4,
                next: ([_0x3b82d6, _0x1da25b]) => {
                  this._isControlEvent(_0x3b82d6) &&
                    this._consumeControlEvent(_0x3b82d6, _0x1da25b);
                },
              })) ?? { dispose: () => {} },
        ),
      ),
      this.disposeWithMe(_0x5ab28a(() => this._removeObject())),
      this._syncControls());
  }
  _ensureObject() {
    return this._object
      ? this._object
      : ((this._object = new mr(dr)),
        this._attachObjectEvents(this._object),
        this._renderContext["scene"].addObject(this._object, fr),
        this._object);
  }
  _attachObjectEvents(_0x577dd1) {
    var _0x37478e;
    (_0x37478e = this._objectEventDisposables) == null || _0x37478e.dispose();
    let _0x215da0 = new _0x89f2a7();
    (_0x215da0.add(
      _0x577dd1.onPointerDown$["subscribeEvent"]({
        priority: 4,
        next: ([_0x112ff4, _0x1a41db]) => {
          this._handlePointerDown(_0x112ff4) &&
            this._consumeControlEvent(_0x112ff4, _0x1a41db);
        },
      }),
    ),
      _0x215da0.add(
        _0x577dd1.onPointerUp$["subscribeEvent"]({
          priority: 4,
          next: ([_0x4cf908, _0x2880ba]) => {
            this._isControlEvent(_0x4cf908) &&
              this._consumeControlEvent(_0x4cf908, _0x2880ba);
          },
        }),
      ),
      _0x215da0.add(
        _0x577dd1.onDblclick$["subscribeEvent"]({
          priority: 4,
          next: ([_0x371c8a, _0x513582]) => {
            this._isControlEvent(_0x371c8a) &&
              this._consumeControlEvent(_0x371c8a, _0x513582);
          },
        }),
      ),
      (this._objectEventDisposables = _0x215da0));
  }
  _removeObject() {
    var _0x3297f3;
    this._object &&
      (this._renderContext["scene"].removeObjects([this._object]),
      (_0x3297f3 = this._objectEventDisposables) == null || _0x3297f3.dispose(),
      (this._objectEventDisposables = null),
      (this._object = null),
      (this._activeNodeId = null),
      (this._activeScopeId = null),
      this._renderContext["scene"].makeDirty(true));
  }
  _syncControls(_0x55b76, _0x11c2f5) {
    var _0x29735f, _0x47d316;
    if (this._stateService["getState"]().interactionMode === "viewing") {
      this._removeObject();
      return;
    }
    let _0x5833f0 = this._elementStateService["getSnapshot"](),
      _0x38d7e0 = _0x5833f0.context,
      _0xa687ae = _0x5833f0.focusedId ?? _0x5833f0.selectedIds[0];
    if (!_0x38d7e0 || !_0xa687ae || _0x5833f0.selectedIds["length"] !== 1) {
      this._removeObject();
      return;
    }
    let _0x4ff368 = this._boardElementService["getElementData"](
        _0x38d7e0.unitId,
        _0x38d7e0.subUnitId,
      ),
      _0x1a7a8e = _0x4ff368[_0xa687ae],
      _0x5b9b47 = _0x154a55(_0x1a7a8e == null ? undefined : _0x1a7a8e.element);
    if (!_0x1a7a8e || !_0x5b9b47) {
      this._removeObject();
      return;
    }
    let _0x34676a = _0x5967eb(_0x38d7e0.unitId, _0xa687ae);
    if (
      _0x11c2f5 != null &&
      _0x11c2f5.hideRootControls &&
      _0x5b9b47.parentNodeId == null &&
      _0x55b76 != null &&
      _0x55b76.has(_0x34676a)
    ) {
      this._removeObject();
      return;
    }
    let _0x4dba4d = this._resolveControlBounds(
      _0x4ff368,
      _0x38d7e0.unitId,
      _0xa687ae,
      _0x55b76,
    );
    if (!_0x4dba4d) {
      this._removeObject();
      return;
    }
    let _0x212b25 = Object.values(_0x4ff368).filter((_0x429f13) => {
        var _0x3c8d92;
        return (
          ((_0x3c8d92 = _0x154a55(_0x429f13.element)) == null
            ? undefined
            : _0x3c8d92.parentNodeId) === _0xa687ae
        );
      }),
      _0x32161a = _0x5b9b47.collapsed
        ? this._countDescendants(_0x4ff368, _0xa687ae)
        : 0;
    ((this._activeNodeId = _0xa687ae),
      (this._activeScopeId = _0x5b9b47.structureScopeId));
    let _0x253a5d =
        (_0x29735f = _0x4ff368[_0x5b9b47.structureScopeId]) == null
          ? undefined
          : _0x29735f.element,
      _0x3e10d1 = _0x3cec18(_0x253a5d),
      _0x555789 =
        _0x253a5d == null ||
        (_0x47d316 = _0x253a5d.custom) == null ||
        (_0x47d316 = _0x47d316.mindmap) == null ||
        (_0x47d316 = _0x47d316.layout) == null
          ? undefined
          : _0x47d316.structureKind,
      _0x141076 =
        (_0x3e10d1 == null ? undefined : _0x3e10d1.layout["structureKind"]) ??
        _0x555789,
      _0x2f97c6 = _0x5b9b47.parentNodeId == null,
      _0x37c8b5 = this._resolveControlSide(
        _0x5b9b47.side,
        _0x2f97c6,
        _0x141076,
      );
    (this._ensureObject().updateState({
      controls: ur({
        bounds: _0x4dba4d,
        isRoot: _0x2f97c6,
        side: _0x37c8b5,
        rootChildSides: this._resolveRootChildControlSides(
          _0x2f97c6,
          _0x141076,
        ),
        hasChildren: _0x212b25.length > 0,
        collapsedDescendantCount: _0x32161a,
      }),
    }),
      this._renderContext["scene"].makeDirty(true));
  }
  _resolveControlSide(_0x43480e, _0x3caefa, _0x232a64) {
    return _0x232a64 === "timeline-vertical"
      ? !_0x3caefa && (_0x43480e === "left" || _0x43480e === "right")
        ? _0x43480e
        : "bottom"
      : _0x232a64 === "mindmap-vertical"
        ? !_0x3caefa && (_0x43480e === "top" || _0x43480e === "bottom")
          ? _0x43480e
          : "bottom"
        : _0x43480e === "left"
          ? "left"
          : "right";
  }
  _resolveRootChildControlSides(_0x9626f1, _0xc6ba94) {
    if (_0x9626f1) {
      if (hr(_0xc6ba94)) return ["bottom"];
      if (_0xc6ba94 === "timeline-horizontal") return ["right"];
      if (_0xc6ba94 === "timeline-vertical") return ["bottom"];
    }
  }
  _resolveCreateChildSide(_0x4525dc) {
    var _0x3a4903, _0x58f7bd;
    let _0x1ffb8d = this._elementStateService["getSnapshot"]().context;
    if (!_0x1ffb8d || !this._activeNodeId) return;
    let _0xf5c9bb = this._boardElementService["getElementData"](
        _0x1ffb8d.unitId,
        _0x1ffb8d.subUnitId,
      ),
      _0x581875 = _0x154a55(
        (_0x3a4903 = _0xf5c9bb[this._activeNodeId]) == null
          ? undefined
          : _0x3a4903.element,
      ),
      _0x5f4158 = _0x581875
        ? _0x3cec18(
            (_0x58f7bd = _0xf5c9bb[_0x581875.structureScopeId]) == null
              ? undefined
              : _0x58f7bd.element,
          )
        : null;
    if (!(
      (_0x581875 == null ? undefined : _0x581875.parentNodeId) == null &&
      (hr(_0x5f4158 == null ? undefined : _0x5f4158.layout["structureKind"]) ||
        gr(_0x5f4158 == null ? undefined : _0x5f4158.layout["structureKind"]))
    ))
      return _0x4525dc === "add-child-left"
        ? "left"
        : _0x4525dc === "add-child-top"
          ? "top"
          : _0x4525dc === "add-child-bottom"
            ? "bottom"
            : "right";
  }
  _resolveControlBounds(_0x240eef, _0x4fd338, _0x2e37c7, _0x54c821) {
    var _0x26d26, _0x41ed62;
    let _0xb34439 = _0x5967eb(_0x4fd338, _0x2e37c7),
      _0x31a68c = _0x54c821 == null ? undefined : _0x54c821.get(_0xb34439),
      _0x22fadd = this._toFiniteBounds(_0x31a68c);
    if (_0x22fadd) return _0x22fadd;
    let _0x256494 = this._renderContext["scene"],
      _0x40543b =
        ((_0x26d26 = _0x256494.getObjectIncludeInGroup) == null
          ? undefined
          : _0x26d26.call(_0x256494, _0xb34439)) ??
        ((_0x41ed62 = _0x256494.getObject) == null
          ? undefined
          : _0x41ed62.call(_0x256494, _0xb34439));
    return this._toFiniteBounds(_0x40543b) || _0x2a21c9(_0x240eef, _0x2e37c7);
  }
  _toFiniteBounds(_0x1ffb5d) {
    return _0x1ffb5d &&
      Number.isFinite(_0x1ffb5d.left) &&
      Number.isFinite(_0x1ffb5d.top) &&
      Number.isFinite(_0x1ffb5d.width) &&
      Number.isFinite(_0x1ffb5d.height)
      ? {
          left: _0x1ffb5d.left,
          top: _0x1ffb5d.top,
          width: _0x1ffb5d.width,
          height: _0x1ffb5d.height,
        }
      : null;
  }
  _countDescendants(_0x3d853b, _0x4cc698) {
    return Object.values(_0x3d853b)
      .filter((_0x3afdb7) => {
        var _0x2db667;
        return (
          ((_0x2db667 = _0x154a55(_0x3afdb7.element)) == null
            ? undefined
            : _0x2db667.parentNodeId) === _0x4cc698
        );
      })
      .reduce(
        (_0x3c16b5, _0x57be6a) =>
          _0x3c16b5 +
          1 +
          this._countDescendants(_0x3d853b, _0x57be6a.elementId),
        0,
      );
  }
  _handlePointerMove(_0x1ebc6c) {
    if (!this._object) return;
    let _0x13e673 = this._stateService["getState"](),
      _0x55a1ca = _r(_0x1ebc6c, {
        panOffset: _0x13e673.viewportPanOffset,
        zoomRatio: _0x13e673.zoomRatio,
      });
    this._object["setHoveredControl"](this._object["getHitControl"](_0x55a1ca));
  }
  _handlePointerDown(_0x5e34b4) {
    if (!this._object || !this._activeNodeId || (_0x5e34b4.button ?? 0) !== 0)
      return false;
    let _0x3f78e0 = this._elementStateService["getSnapshot"]().context;
    if (!_0x3f78e0) return false;
    let _0x57e1be = this._stateService["getState"](),
      _0x2c0ba5 = _r(_0x5e34b4, {
        panOffset: _0x57e1be.viewportPanOffset,
        zoomRatio: _0x57e1be.zoomRatio,
      }),
      _0x5143b6 = this._object["getHitControl"](_0x2c0ba5);
    if (!_0x5143b6) return false;
    if (_0x5143b6.kind === "toggle-collapse")
      return (
        this._executeAndLayout(_0x252a9a.id, {
          unitId: _0x3f78e0.unitId,
          subUnitId: _0x3f78e0.subUnitId,
          nodeId: this._activeNodeId,
        }),
        true
      );
    if (
      _0x5143b6.kind === "add-child-left" ||
      _0x5143b6.kind === "add-child-right" ||
      _0x5143b6.kind === "add-child-top" ||
      _0x5143b6.kind === "add-child-bottom"
    ) {
      let _0x902d34 = _0x33cedd(6);
      return (
        this._executeCreateAndEdit(
          _0x1349bc.id,
          {
            unitId: _0x3f78e0.unitId,
            subUnitId: _0x3f78e0.subUnitId,
            parentNodeId: this._activeNodeId,
            side: this._resolveCreateChildSide(_0x5143b6.kind),
            nodeId: _0x902d34,
            connectorId: _0x33cedd(6),
            text: this._localeService["t"]("boards-mind-ui.panel.addText"),
          },
          _0x902d34,
        ),
        true
      );
    }
    if (
      _0x5143b6.kind === "add-sibling-before" ||
      _0x5143b6.kind === "add-sibling-after"
    ) {
      let _0x33f2e1 = _0x33cedd(6);
      return (
        this._executeCreateAndEdit(
          _0x8524f9.id,
          {
            unitId: _0x3f78e0.unitId,
            subUnitId: _0x3f78e0.subUnitId,
            nodeId: this._activeNodeId,
            placement:
              _0x5143b6.placement ??
              (_0x5143b6.kind === "add-sibling-before" ? "before" : "after"),
            siblingNodeId: _0x33f2e1,
            connectorId: _0x33cedd(6),
            text: this._localeService["t"]("boards-mind-ui.panel.addText"),
          },
          _0x33f2e1,
        ),
        true
      );
    }
    return true;
  }
  _isControlEvent(_0x2b7a5e) {
    if (!this._object || (_0x2b7a5e.button ?? 0) !== 0) return false;
    let _0x17950d = this._stateService["getState"](),
      _0x5854d2 = _r(_0x2b7a5e, {
        panOffset: _0x17950d.viewportPanOffset,
        zoomRatio: _0x17950d.zoomRatio,
      });
    return !!this._object["getHitControl"](_0x5854d2);
  }
  _consumeControlEvent(_0x564183, _0x475a70) {
    var _0x5b1222, _0x389d5a;
    (_0x475a70.stopPropagation(),
      (_0x5b1222 = _0x564183.preventDefault) == null ||
        _0x5b1222.call(_0x564183),
      (_0x389d5a = _0x564183.stopPropagation) == null ||
        _0x389d5a.call(_0x564183));
  }
  _executeAndLayout(_0xfb8cd5, _0x2e8964) {
    let _0x4af8b5 = this._activeScopeId;
    this._undoRedoGroupService["run"](_0x2e8964.unitId, () => {
      !this._commandService["syncExecuteCommand"](_0xfb8cd5, _0x2e8964) ||
        !_0x4af8b5 ||
        (this._commandService["syncExecuteCommand"](_0x2f141c.id, {
          unitId: _0x2e8964.unitId,
          subUnitId: _0x2e8964.subUnitId,
          scopeId: _0x4af8b5,
        }),
        this._syncControls());
    });
  }
  _executeCreateAndEdit(_0x2fc339, _0x111701, _0x2a8d20) {
    let _0x5d72ec = {
        unitId: _0x111701.unitId,
        subUnitId: _0x111701.subUnitId,
      },
      _0xed1451 = this._commandService["executeCommand"](_0x2fc339, _0x111701);
    Promise.resolve(_0xed1451).then((_0x21346d) => {
      _0x21346d &&
        (this._syncControls(),
        this._elementStateService["selectElements"](
          _0x5d72ec,
          [_0x2a8d20],
          _0x2a8d20,
        ),
        this._boardTextEditingService["ignoreExternalFocusChanges"](),
        this._boardTextEditingService["setEditing"]({
          ..._0x5d72ec,
          shapeId: _0x2a8d20,
          shapeKey: _0x5967eb(_0x5d72ec.unitId, _0x2a8d20),
          visible: true,
        }));
    });
  }
};
vr = q(
  [
    K(1, _0x50be27(_0x569c18)),
    K(2, _0x50be27(_0x4b6ba3)),
    K(3, _0x50be27(_0x225839)),
    K(4, _0x3ef066),
    K(5, _0x50be27(_0x2888b1)),
    K(6, _0x50be27(_0xc75da)),
    K(7, _0x50be27(or)),
    K(8, _0x50be27(_0x3efd59)),
  ],
  vr,
);
const yr = "FOCUSING_MIND_MAP_TEXT_EDITOR";
let br = class extends _0x25c64b {
  constructor(_0x5c363d, _0xa8e543) {
    (super(),
      (this._commandService = _0x5c363d),
      (this._shortcutService = _0xa8e543),
      this._init());
  }
  _init() {
    this.disposeWithMe(
      this._shortcutService["registerShortcut"](this._createQuoteShortcut()),
    );
  }
  _createQuoteShortcut() {
    return {
      id: _0x46789d,
      binding: _0x208b9e.ENTER | _0x5aa78e.SHIFT,
      priority: 1000,
      preconditions: (_0x595535) =>
        _0x595535.getContextValue("FOCUSING_MIND_MAP_TEXT_EDITOR") &&
        this._commandService["hasCommand"](_0x46789d),
    };
  }
};
br = q([K(0, _0x3ef066), K(1, _0x22486e)], br);
const xr = [pn, mn, yr];
let Sr = class extends _0x25c64b {
  constructor(_0x28f4a5, _0x3c3362, _0x26383c, _0x2ba3c9, _0x1382fe) {
    (super(),
      (this._renderContext = _0x28f4a5),
      (this._boardElementService = _0x3c3362),
      (this._elementStateService = _0x26383c),
      (this._textEditingService = _0x2ba3c9),
      (this._contextService = _0x1382fe),
      G(this, "_isActive", false),
      this.disposeWithMe(
        _0x5ab28a(
          this._renderContext["activated$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe((_0x4b78ec) => {
              ((this._isActive = _0x4b78ec), this._syncContext());
            }),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          this._elementStateService["state$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe(() => {
              this._syncContext();
            }),
        ),
      ),
      this.disposeWithMe(
        _0x5ab28a(
          this._textEditingService["editingParams$"]
            .pipe(_0x2777f5(this.dispose$))
            .subscribe(() => {
              this._syncContext();
            }),
        ),
      ),
      this._syncContext());
  }
  _syncContext() {
    var _0x461c1b, _0x3ad47e;
    let _0x43e13d = this._elementStateService["getSnapshot"](),
      _0x40152c = this._textEditingService["getEditing"](),
      _0x3ecbc9 =
        _0x40152c != null && _0x40152c.visible
          ? _0x40152c.shapeId
          : _0x43e13d.activeEditingId,
      _0x8058ce = _0x43e13d.focusedId ?? _0x43e13d.selectedIds[0],
      _0x2334b0 = _0x43e13d.context ?? {
        unitId: this._renderContext["unitId"],
        subUnitId: this._renderContext["unit"].getActivePageId(),
      },
      _0x292f98 =
        this._isActive &&
        !!_0x8058ce &&
        _0x43e13d.selectedIds["length"] === 1 &&
        !_0x3ecbc9 &&
        !_0x43e13d.isTransforming,
      _0x22a055 = this._isActive
        ? this._boardElementService["getElementData"](
            _0x2334b0.unitId,
            _0x2334b0.subUnitId,
          )
        : {};
    (this._contextService["setContextValue"](
      pn,
      _0x292f98 &&
        !!_0x154a55(
          (_0x461c1b = _0x22a055[_0x8058ce]) == null
            ? undefined
            : _0x461c1b.element,
        ),
    ),
      this._contextService["setContextValue"](
        mn,
        this._isActive &&
          _0x43e13d.selectedIds["length"] === 0 &&
          !_0x43e13d.focusedId &&
          !_0x3ecbc9 &&
          !_0x43e13d.isTransforming,
      ),
      this._contextService["setContextValue"](
        yr,
        !!_0x3ecbc9 &&
          !!_0x154a55(
            (_0x3ad47e = _0x22a055[_0x3ecbc9]) == null
              ? undefined
              : _0x3ad47e.element,
          ),
      ));
  }
  dispose() {
    (this._resetContext(), super.dispose());
  }
  _resetContext() {
    xr.forEach((_0x21f935) =>
      this._contextService["setContextValue"](_0x21f935, false),
    );
  }
};
Sr = q(
  [
    K(1, _0x50be27(_0x569c18)),
    K(2, _0x50be27(_0x4b6ba3)),
    K(3, _0x50be27(_0x2888b1)),
    K(4, _0xddc1c8),
  ],
  Sr,
);
const Cr = ["structure", "layout", "importExport"];
(_0x4c6e5c.horizontalGap, _0x4c6e5c.siblingGap, _0x4c6e5c.branchGap);
const wr = [
    {
      labelKey: "boards-mind-ui.panel.spacing.parentGap",
      key: "horizontalGap",
      ..._0x1263e8.horizontalGap,
    },
    {
      labelKey: "boards-mind-ui.panel.spacing.siblingGap",
      key: "siblingGap",
      ..._0x1263e8.siblingGap,
    },
    {
      labelKey: "boards-mind-ui.panel.spacing.branchGap",
      key: "branchGap",
      ..._0x1263e8.branchGap,
    },
  ],
  Tr = [
    { labelKey: "boards-mind-ui.panel.layout.right", value: "right" },
    { labelKey: "boards-mind-ui.panel.layout.left", value: "left" },
    { labelKey: "boards-mind-ui.panel.layout.both", value: "both" },
  ],
  Er = [
    {
      labelKey: "boards-mind-ui.panel.structureKind.mindmapHorizontal",
      value: "mindmap-horizontal",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.mindmapVertical",
      value: "mindmap-vertical",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.treeRight",
      value: "tree-right",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.treeLeft",
      value: "tree-left",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.treeAlternate",
      value: "tree-alternate",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.timelineHorizontal",
      value: "timeline-horizontal",
    },
    {
      labelKey: "boards-mind-ui.panel.structureKind.timelineVertical",
      value: "timeline-vertical",
    },
  ],
  Dr = [
    { labelKey: "boards-mind-ui.panel.branchLineType.curve", value: "curve" },
    {
      labelKey: "boards-mind-ui.panel.branchLineType.roundedOrthogonal",
      value: "rounded-orthogonal",
    },
    {
      labelKey: "boards-mind-ui.panel.branchLineType.orthogonal",
      value: "orthogonal",
    },
  ];
function Or(_0x2e2623) {
  let _0x37429b =
    (_0x2e2623 == null ? undefined : _0x2e2623.structureKind) ??
    _0x4c6e5c.structureKind;
  return {
    spacing: {
      horizontalGap:
        (_0x2e2623 == null ? undefined : _0x2e2623.horizontalGap) ??
        _0x4c6e5c.horizontalGap,
      siblingGap:
        (_0x2e2623 == null ? undefined : _0x2e2623.siblingGap) ??
        _0x4c6e5c.siblingGap,
      branchGap:
        (_0x2e2623 == null ? undefined : _0x2e2623.branchGap) ??
        _0x4c6e5c.branchGap,
    },
    direction:
      (_0x2e2623 == null ? undefined : _0x2e2623.direction) ??
      _0x4c6e5c.direction,
    structureKind: _0x37429b,
    branchLineType: _0x1f7b61(
      _0x37429b,
      _0x2e2623 == null ? undefined : _0x2e2623.branchLineType,
    ),
  };
}
async function kr(_0x2ef8b1, _0x2388f4) {
  return (await Promise.resolve(
    _0x2ef8b1.executeCommand(_0x104955.id, _0x2388f4),
  ))
    ? (await Promise.resolve(
        _0x2ef8b1.executeCommand(_0x2f141c.id, {
          unitId: _0x2388f4.unitId,
          subUnitId: _0x2388f4.subUnitId,
          scopeId: _0x2388f4.scopeId,
        }),
      ),
      true)
    : false;
}
async function Ar(_0x4dfc14, _0x1eed09) {
  return (await Promise.resolve(
    _0x4dfc14.executeCommand(_0x5d3671.id, _0x1eed09),
  ))
    ? (await Promise.resolve(
        _0x4dfc14.executeCommand(_0x2f141c.id, {
          unitId: _0x1eed09.unitId,
          subUnitId: _0x1eed09.subUnitId,
          scopeId: _0x1eed09.scopeId,
        }),
      ),
      true)
    : false;
}
async function jr(_0x5c78a6, _0x19e7b3) {
  return (await Promise.resolve(
    _0x5c78a6.executeCommand(_0x104955.id, {
      unitId: _0x19e7b3.unitId,
      subUnitId: _0x19e7b3.subUnitId,
      scopeId: _0x19e7b3.scopeId,
      ...(_0x19e7b3.horizontalGap === undefined
        ? {}
        : { horizontalGap: _0x19e7b3.horizontalGap }),
      ...(_0x19e7b3.siblingGap === undefined
        ? {}
        : { siblingGap: _0x19e7b3.siblingGap }),
      ...(_0x19e7b3.branchGap === undefined
        ? {}
        : { branchGap: _0x19e7b3.branchGap }),
    }),
  ))
    ? (await Promise.resolve(
        _0x5c78a6.executeCommand(_0x2f141c.id, {
          unitId: _0x19e7b3.unitId,
          subUnitId: _0x19e7b3.subUnitId,
          scopeId: _0x19e7b3.scopeId,
        }),
      ),
      true)
    : false;
}
async function Mr(_0xde8f97, _0x52e10d) {
  return _0x52e10d.nodeId === _0x52e10d.targetNodeId ||
    !(await Promise.resolve(
      _0xde8f97.executeCommand(_0x407f7a.id, {
        unitId: _0x52e10d.unitId,
        subUnitId: _0x52e10d.subUnitId,
        nodeId: _0x52e10d.nodeId,
        targetNodeId: _0x52e10d.targetNodeId,
        referenceNodeId: _0x52e10d.targetNodeId,
        placement: _0x52e10d.placement,
      }),
    ))
    ? false
    : (await Promise.resolve(
        _0xde8f97.executeCommand(_0x2f141c.id, {
          unitId: _0x52e10d.unitId,
          subUnitId: _0x52e10d.subUnitId,
          scopeId: _0x52e10d.scopeId,
        }),
      ),
      true);
}
async function Nr(_0x4b4621, _0x9389cc) {
  let _0xf23c37 = _0x9389cc.text["trim"]();
  return !_0xf23c37 ||
    !(await Promise.resolve(
      _0x4b4621.executeCommand(_0x287f19.id, {
        unitId: _0x9389cc.unitId,
        subUnitId: _0x9389cc.subUnitId,
        nodeId: _0x9389cc.nodeId,
        text: _0xf23c37,
      }),
    ))
    ? false
    : (await Promise.resolve(
        _0x4b4621.executeCommand(_0x2f141c.id, {
          unitId: _0x9389cc.unitId,
          subUnitId: _0x9389cc.subUnitId,
          scopeId: _0x9389cc.scopeId,
        }),
      ),
      true);
}
async function Pr(_0x37cd58) {
  var _0x54f306;
  let _0x250df3 =
    (_0x54f306 = globalThis.navigator) == null
      ? undefined
      : _0x54f306.clipboard;
  return _0x250df3 != null && _0x250df3.writeText
    ? (await _0x250df3.writeText(_0x37cd58), true)
    : false;
}
async function Fr(_0x5ec2b1, _0x279dd1, _0x48735c = Pr) {
  let _0x37bb44 = await Promise.resolve(
    _0x5ec2b1.executeCommand(_0x517d0f.id, _0x279dd1),
  );
  if (typeof _0x37bb44 != "string" || !_0x37bb44) return false;
  try {
    return (await _0x48735c(_0x37bb44)) !== false;
  } catch {
    return false;
  }
}
async function Ir(_0x2e77a0, _0x3f749d) {
  if (!_0x3f749d.opml["trim"]()) return false;
  let _0x3ff544 = await Promise.resolve(
    _0x2e77a0.executeCommand(_0x431469.id, _0x3f749d),
  );
  return (
    typeof _0x3ff544 == "object" && !!_0x3ff544 && _0x3ff544.success === true
  );
}
function Lr(_0x3edd01, _0x5bae15) {
  let _0x2811ec = _0x5bae15.trim().toLowerCase();
  return _0x2811ec
    ? _0x3edd01.filter((_0x62560) =>
        _0x62560.text["toLowerCase"]().includes(_0x2811ec),
      )
    : _0x3edd01;
}
function Rr(_0x5116d5) {
  return {
    paddingInlineStart:
      8 + (Number.isFinite(_0x5116d5) && _0x5116d5 > 0 ? _0x5116d5 : 0) * 16,
  };
}
function zr(_0x1a4833) {
  return _0x155d01("section", {
    className: _0x4c5e40(
      "univer-border-b\x20univer-border-gray-200\x20univer-p-4",
      _0x13d44f,
    ),
    "data-board-mind-map-panel-section": "true",
    children: [
      _0x22a183("h3", {
        className:
          "univer-mb-3 univer-text-sm univer-font-semibold univer-text-gray-900 dark:!univer-text-gray-100",
        children: _0x1a4833.title,
      }),
      _0x1a4833.children,
    ],
  });
}
function Br(_0x2f1f59) {
  let _0x186a64 = _0x5a5b51(_0x3ef066),
    _0x411a42 = _0x5a5b51(_0x4b6ba3),
    _0x1c6b16 = _0x5a5b51(_0xc75da),
    _0x419ff7 = _0x2f1f59.outlineItems ?? [],
    [_0x9f9209, _0x2de071] = _0x12b1e6(""),
    [_0x598a78, _0x505b81] = _0x12b1e6(null),
    [_0x36602f, _0xe65950] = _0x12b1e6(""),
    _0x3dd4c5 = Or(_0x2f1f59.layout),
    [_0x5a990a, _0x1413e6] = _0x12b1e6(_0x3dd4c5.spacing),
    [_0x3b374b, _0x2c10b5] = _0x12b1e6(_0x3dd4c5.direction),
    [_0xfde045, _0xe8eaac] = _0x12b1e6(_0x3dd4c5.structureKind),
    [_0x48d666, _0x480623] = _0x12b1e6(_0x3dd4c5.branchLineType),
    [_0x1e8593, _0xbee92d] = _0x12b1e6({
      layout: _0x2f1f59.layout,
      scopeId: _0x2f1f59.scopeId,
    }),
    [_0x1e23bd, _0xda3b2d] = _0x12b1e6(null),
    [_0x27a172, _0x3fa560] = _0x12b1e6("structure"),
    _0x1b6157 = Lr(_0x419ff7, _0x9f9209),
    _0x362931 = {
      unitId: _0x2f1f59.unitId,
      subUnitId: _0x2f1f59.subUnitId,
      scopeId: _0x2f1f59.scopeId,
    },
    _0x2f4410 = Cr.map((_0x384f54) => ({
      label: _0x1c6b16.t("boards-mind-ui.panel.tab." + _0x384f54),
      value: _0x384f54,
    })),
    _0xcaac07 = Dr.filter(
      (_0x189aa6) => _0x189aa6.value !== "curve" || _0x36c2b3(_0xfde045),
    ),
    _0x27979f = (_0x191edd) => {
      (_0x2c10b5(_0x191edd),
        kr(_0x186a64, { ..._0x362931, direction: _0x191edd }));
    };
  if (
    _0x1e8593.layout !== _0x2f1f59.layout ||
    _0x1e8593.scopeId !== _0x2f1f59.scopeId
  ) {
    let _0x40cf6a = Or(_0x2f1f59.layout);
    (_0xbee92d({ layout: _0x2f1f59.layout, scopeId: _0x2f1f59.scopeId }),
      _0x1413e6(_0x40cf6a.spacing),
      _0x2c10b5(_0x40cf6a.direction),
      _0xe8eaac(_0x40cf6a.structureKind),
      _0x480623(_0x40cf6a.branchLineType));
  }
  let _0x4f928f = (_0x4dfbb9) => {
      let _0x32b2a3 = _0x1f7b61(_0x4dfbb9, _0x48d666);
      (_0xe8eaac(_0x4dfbb9),
        _0x480623(_0x32b2a3),
        kr(_0x186a64, {
          ..._0x362931,
          structureKind: _0x4dfbb9,
          ...(_0x32b2a3 === _0x48d666 ? null : { branchLineType: _0x32b2a3 }),
        }));
    },
    _0x3256d3 = (_0x7477d5) => {
      let _0xf5d814 = _0x1f7b61(_0xfde045, _0x7477d5);
      (_0x480623(_0xf5d814),
        Ar(_0x186a64, { ..._0x362931, branchLineType: _0xf5d814 }));
    },
    _0x2eb3ca = (_0x16f433, _0x68d661) => {
      let _0x136e5a = { ..._0x5a990a, [_0x16f433]: _0x68d661 };
      (_0x1413e6(_0x136e5a), jr(_0x186a64, { ..._0x362931, ..._0x136e5a }));
    },
    _0x104fa6 = () => {
      Ir(_0x186a64, {
        unitId: _0x2f1f59.unitId,
        subUnitId: _0x2f1f59.subUnitId,
        left: 120,
        top: 120,
        opml: _0x36602f,
      }).then((_0x5129b8) => {
        _0x5129b8 && _0xe65950("");
      });
    },
    _0xe8faf4 = () => {
      Fr(_0x186a64, _0x362931);
    },
    _0x274203 = (_0x229128, _0xf9bab5) => {
      _0x505b81({ nodeId: _0x229128, text: _0xf9bab5 });
    },
    _0x2f5066 = () => {
      _0x598a78 &&
        Nr(_0x186a64, {
          ..._0x362931,
          nodeId: _0x598a78.nodeId,
          text: _0x598a78.text,
        }).then((_0x2dca70) => {
          _0x2dca70 && _0x505b81(null);
        });
    },
    _0x1f2354 = (_0x41b22f, _0x536159) => {
      if ((_0x41b22f.preventDefault(), !_0x1e23bd || _0x1e23bd === _0x536159))
        return;
      let _0x1a5fd0 = _0x41b22f.currentTarget["getBoundingClientRect"](),
        _0xe81f59 =
          _0x41b22f.clientY < _0x1a5fd0.top + _0x1a5fd0.height / 2
            ? "before"
            : "after";
      (_0xda3b2d(null),
        Mr(_0x186a64, {
          ..._0x362931,
          nodeId: _0x1e23bd,
          targetNodeId: _0x536159,
          placement: _0xe81f59,
        }));
    };
  return _0x155d01("div", {
    className:
      "univer-size-full\x20univer-bg-gray-0\x20univer-text-sm\x20univer-text-gray-700\x20dark:!univer-bg-gray-900\x20dark:!univer-text-gray-200",
    "data-board-mind-map-panel": "true",
    children: [
      _0x22a183("div", {
        className: _0x4c5e40(
          "univer-border-b univer-border-gray-200 univer-p-3",
          _0x13d44f,
        ),
        "data-board-mind-map-panel-tabs": "true",
        children: _0x22a183(_0x140329, {
          className: "univer-w-full univer-text-xs",
          items: _0x2f4410,
          value: _0x27a172,
          onChange: (_0x570346) => _0x3fa560(_0x570346),
        }),
      }),
      _0x27a172 === "structure" &&
        _0x22a183(zr, {
          title: _0x1c6b16.t("boards-mind-ui.panel.tab.structure"),
          children: _0x155d01("div", {
            children: [
              _0x22a183(_0x476362, {
                slot: _0x22a183(_0x7f7ca3, {}),
                value: _0x9f9209,
                placeholder: _0x1c6b16.t("boards-mind-ui.panel.searchNodes"),
                className: "univer-mb-3 univer-w-full",
                onChange: _0x2de071,
              }),
              _0x1b6157.length
                ? _0x22a183("ol", {
                    className: "univer-space-y-1",
                    children: _0x1b6157.map((_0x4f861a) =>
                      _0x22a183(
                        "li",
                        {
                          draggable: true,
                          className:
                            "univer-flex univer-items-center univer-gap-1 univer-truncate univer-rounded univer-py-1 univer-text-left univer-text-gray-800",
                          style: Rr(_0x4f861a.depth),
                          onDragStart: (_0x1800e5) => {
                            var _0xdf772a;
                            (_0xda3b2d(_0x4f861a.nodeId),
                              (_0xdf772a = _0x1800e5.dataTransfer) == null ||
                                _0xdf772a.setData(
                                  "text/plain",
                                  _0x4f861a.nodeId,
                                ),
                              _0x1800e5.dataTransfer &&
                                (_0x1800e5.dataTransfer["effectAllowed"] =
                                  "move"));
                          },
                          onDragOver: (_0x22e23e) => {
                            (_0x22e23e.preventDefault(),
                              _0x22e23e.dataTransfer &&
                                (_0x22e23e.dataTransfer["dropEffect"] =
                                  "move"));
                          },
                          onDrop: (_0x56d93c) =>
                            _0x1f2354(_0x56d93c, _0x4f861a.nodeId),
                          onDragEnd: () => _0xda3b2d(null),
                          children:
                            (_0x598a78 == null
                              ? undefined
                              : _0x598a78.nodeId) === _0x4f861a.nodeId
                              ? _0x155d01("div", {
                                  className:
                                    "univer-flex univer-min-w-0 univer-flex-1 univer-items-center univer-gap-1",
                                  children: [
                                    _0x22a183(_0x476362, {
                                      autoFocus: true,
                                      size: "small",
                                      value: _0x598a78.text,
                                      onChange: (_0x593574) =>
                                        _0x505b81({
                                          nodeId: _0x4f861a.nodeId,
                                          text: _0x593574,
                                        }),
                                      onKeyDown: (_0x2dc883) => {
                                        (_0x2dc883.key === "Enter" &&
                                          _0x2f5066(),
                                          _0x2dc883.key === "Escape" &&
                                            _0x505b81(null));
                                      },
                                    }),
                                    _0x22a183(_0xde39, {
                                      size: "small",
                                      variant: "primary",
                                      disabled: !_0x598a78.text["trim"](),
                                      onClick: _0x2f5066,
                                      children: _0x1c6b16.t(
                                        "boards-mind-ui.panel.rename",
                                      ),
                                    }),
                                    _0x22a183(_0xde39, {
                                      size: "small",
                                      variant: "default",
                                      onClick: () => _0x505b81(null),
                                      children: _0x1c6b16.t(
                                        "boards-mind-ui.panel.cancel",
                                      ),
                                    }),
                                  ],
                                })
                              : _0x155d01(_0x539227, {
                                  children: [
                                    _0x22a183(_0xde39, {
                                      size: "small",
                                      variant: "ghost",
                                      className:
                                        "univer-min-w-0 univer-flex-1 univer-justify-start univer-truncate univer-text-left",
                                      onClick: () =>
                                        _0x411a42.selectElements(
                                          {
                                            unitId: _0x2f1f59.unitId,
                                            subUnitId: _0x2f1f59.subUnitId,
                                          },
                                          [_0x4f861a.nodeId],
                                          _0x4f861a.nodeId,
                                        ),
                                      children: _0x4f861a.text,
                                    }),
                                    _0x22a183(_0xde39, {
                                      className:
                                        "univer-text-xs univer-text-gray-500",
                                      size: "small",
                                      variant: "default",
                                      onClick: () =>
                                        _0x274203(
                                          _0x4f861a.nodeId,
                                          _0x4f861a.text,
                                        ),
                                      children: _0x1c6b16.t(
                                        "boards-mind-ui.panel.rename",
                                      ),
                                    }),
                                  ],
                                }),
                        },
                        _0x4f861a.nodeId,
                      ),
                    ),
                  })
                : _0x22a183("div", {
                    className:
                      "univer-text-xs univer-text-gray-400 dark:!univer-text-gray-500",
                    "data-board-mind-map-panel-empty-state": "true",
                    children: _0x1c6b16.t("boards-mind-ui.panel.emptyNodes"),
                  }),
            ],
          }),
        }),
      _0x27a172 === "layout" &&
        _0x22a183(zr, {
          title: _0x1c6b16.t("boards-mind-ui.panel.tab.layout"),
          children: _0x155d01("div", {
            className: "univer-space-y-3",
            children: [
              _0x22a183("div", {
                className: "univer-flex\x20univer-gap-2",
                children: _0x22a183(_0x140329, {
                  className: "univer-w-full\x20univer-text-xs",
                  items: Er.map((_0x4d03f4) => ({
                    label: _0x1c6b16.t(_0x4d03f4.labelKey),
                    value: _0x4d03f4.value,
                  })),
                  value: _0xfde045,
                  onChange: (_0x46ba64) => _0x4f928f(_0x46ba64),
                }),
              }),
              _0x22a183("div", {
                className: "univer-flex univer-gap-2",
                children: _0x22a183(_0x140329, {
                  className: "univer-w-full univer-text-xs",
                  items: Tr.map((_0x629553) => ({
                    label: _0x1c6b16.t(_0x629553.labelKey),
                    value: _0x629553.value,
                  })),
                  value: _0x3b374b,
                  onChange: (_0x1fe617) => _0x27979f(_0x1fe617),
                }),
              }),
              _0x22a183("div", {
                className: "univer-flex\x20univer-gap-2",
                children: _0x22a183(_0x140329, {
                  className: "univer-w-full univer-text-xs",
                  items: _0xcaac07.map((_0x5f2019) => ({
                    label: _0x1c6b16.t(_0x5f2019.labelKey),
                    value: _0x5f2019.value,
                  })),
                  value: _0x48d666,
                  onChange: (_0x282a60) => _0x3256d3(_0x282a60),
                }),
              }),
              _0x22a183("div", {
                className: "univer-space-y-2",
                children: wr.map(
                  ({
                    labelKey: _0x334d4b,
                    key: _0x4ee1e0,
                    min: _0x543326,
                    max: _0x3813f2,
                  }) =>
                    _0x155d01(
                      "label",
                      {
                        className:
                          "univer-flex univer-items-center univer-gap-2 univer-text-xs univer-text-gray-600",
                        children: [
                          _0x22a183("span", {
                            className: "univer-w-20 univer-shrink-0",
                            children: _0x1c6b16.t(
                              "boards-mind-ui.panel." + _0x334d4b,
                            ),
                          }),
                          _0x22a183(_0x32f3cd, {
                            min: _0x543326,
                            max: _0x3813f2,
                            step: 4,
                            value: _0x5a990a[_0x4ee1e0],
                            precision: 0,
                            className: "univer-w-24",
                            onChange: (_0x21b7e5) =>
                              _0x2eb3ca(
                                _0x4ee1e0,
                                Number(_0x21b7e5 ?? _0x543326),
                              ),
                          }),
                        ],
                      },
                      _0x4ee1e0,
                    ),
                ),
              }),
            ],
          }),
        }),
      _0x27a172 === "importExport" &&
        _0x22a183(zr, {
          title: _0x1c6b16.t("boards-mind-ui.panel.tab.importExport"),
          children: _0x155d01("div", {
            className: "univer-flex univer-flex-col univer-gap-2",
            children: [
              _0x22a183(_0x44c26c, {
                className: "univer-h-28 univer-resize-none univer-text-xs",
                placeholder: _0x1c6b16.t("boards-mind-ui.panel.pasteOPML"),
                value: _0x36602f,
                onValueChange: _0xe65950,
              }),
              _0x155d01("div", {
                className: "univer-flex\x20univer-gap-2",
                children: [
                  _0x22a183(_0xde39, {
                    size: "small",
                    variant: "primary",
                    disabled: !_0x36602f.trim(),
                    onClick: _0x104fa6,
                    children: _0x1c6b16.t("boards-mind-ui.panel.importOPML"),
                  }),
                  _0x22a183(_0xde39, {
                    size: "small",
                    variant: "default",
                    onClick: _0xe8faf4,
                    children: _0x1c6b16.t("boards-mind-ui.panel.exportOPML"),
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
let Vr = class extends _0x43d28b {
  constructor(_0x1498ea) {
    (super(), (this._componentManager = _0x1498ea), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](ln, dn)),
      this.disposeWithMe(this._componentManager["register"](Dn, Un)),
      this.disposeWithMe(
        this._componentManager["register"]("board.mind-map.panel", Br),
      ));
  }
};
Vr = q([K(0, _0x50be27(_0x49ca63))], Vr);
let Hr = class {
  constructor(_0x57a7c1, _0x5b0ba2, _0x2a547b) {
    ((this._stateService = _0x57a7c1),
      (this._insertStateService = _0x5b0ba2),
      (this._renderManagerService = _0x2a547b));
  }
  beginMindMapMode(_0x43dd07) {
    var _0xde67f, _0x2689b5;
    let _0x4b8090 =
        (_0xde67f = this._renderManagerService["getRenderUnitById"](
          _0x43dd07.unitId,
        )) == null || (_0x2689b5 = _0xde67f.getInjector) == null
          ? undefined
          : _0x2689b5.call(_0xde67f),
      _0x14b9aa =
        (_0x4b8090 == null ? undefined : _0x4b8090.get(_0x225839)) ??
        this._stateService;
    return (
      (
        (_0x4b8090 == null ? undefined : _0x4b8090.get(tr)) ??
        this._insertStateService
      ).setTemplate({
        rootText: _0x43dd07.rootText,
        structureKind: _0x43dd07.structureKind,
        branchLineType: _0x43dd07.branchLineType,
        children: _0x43dd07.children,
        blueprint: _0x43dd07.blueprint,
      }),
      _0x14b9aa.setShapeSidebarOpen(false),
      _0x14b9aa.clearPendingInsert(),
      _0x14b9aa.setActiveTool(_0x590f62.MindMap),
      _0x14b9aa.setPendingInsert({ type: _0x590f62.MindMap }),
      true
    );
  }
};
Hr = q([K(0, _0x225839), K(1, _0x50be27(tr)), K(2, _0xa94842)], Hr);
const Ur = [cn],
  Wr = [Sr];
let $ = class extends _0x5a5185 {
  constructor(_0x43894a = Ft, _0x20a6c1, _0x2a8bf7, _0x213278) {
    (super(),
      (this._config = _0x43894a),
      (this._injector = _0x20a6c1),
      (this._configService = _0x2a8bf7),
      (this._renderManagerService = _0x213278));
    let { ..._0x3f5608 } = _0x366e3d({}, Ft, this._config);
    this._configService["setConfig"]("boards-mind-ui.config", _0x3f5608);
  }
  onStarting() {
    (_0x3f0884.registerRuntimeScopedDependencies(this._injector, [[tr], [or]]),
      this._injector["add"]([tr]),
      this._injector["add"]([or]),
      this._injector["add"]([Hr]),
      this._injector["add"]([vn]),
      this._injector["add"]([br]),
      this._injector["add"]([Vr]));
    let _0xced388 = this._injector["get"](Hr),
      _0x14264f = this._injector["get"](_0x386a30);
    (this.disposeWithMe(_0x14264f.registerAdapter(_0xced388)),
      this.disposeWithMe(this._injector["get"](vn)),
      this.disposeWithMe(this._injector["get"](br)),
      this.disposeWithMe(this._injector["get"](Vr)),
      this._enableMindMapToolbarTool());
  }
  onReady() {
    (this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        _0x2b7b4b.UNIVER_BOARD,
        Ur,
      ),
    ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x2b7b4b.UNIVER_BOARD,
          Wr,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x2b7b4b.UNIVER_BOARD,
          ar,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x2b7b4b.UNIVER_BOARD,
          vr,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x2b7b4b.UNIVER_BOARD,
          Gn,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x2b7b4b.UNIVER_BOARD,
          sn,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x2b7b4b.UNIVER_BOARD,
          zt,
        ),
      ),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          _0x2b7b4b.UNIVER_BOARD,
          lr,
        ),
      ));
  }
  _enableMindMapToolbarTool() {
    var _0xac497e, _0x2c9cdb;
    let _0x2448c4 = this._getBoardsUIConfig();
    this._configService["setConfig"](_0x148157, {
      ..._0x2448c4,
      toolbar: {
        ..._0x2448c4.toolbar,
        tools: {
          ...((_0xac497e = _0x2448c4.toolbar) == null
            ? undefined
            : _0xac497e.tools),
          [_0x590f62.MindMap]: Gr(
            (_0x2c9cdb = _0x2448c4.toolbar) == null ||
              (_0x2c9cdb = _0x2c9cdb.tools) == null
              ? undefined
              : _0x2c9cdb[_0x590f62.MindMap],
          ),
        },
      },
    });
  }
  _getBoardsUIConfig() {
    return this._configService["getConfig"](_0x148157) ?? {};
  }
};
(G($, "pluginName", "UNIVER_BOARDS_MIND_UI_PLUGIN"),
  G($, "packageName", Nt),
  G($, "version", Pt),
  G($, "type", _0x2b7b4b.UNIVER_BOARD),
  ($ = q(
    [
      _0xae14f6(_0x4d6471, _0x56f765, _0x47b6d3, _0x1dab7d, _0x3f0884),
      K(1, _0x50be27(_0x56f7a3)),
      K(2, _0xe8b60e),
      K(3, _0xa94842),
    ],
    $,
  )));
function Gr(_0x4ea6f3) {
  return _0x4ea6f3 === false
    ? false
    : typeof _0x4ea6f3 != "object" || {
        ..._0x4ea6f3,
        enabled: _0x4ea6f3.enabled ?? true,
      };
}
export { $ as UniverBoardsMindUIPlugin };
