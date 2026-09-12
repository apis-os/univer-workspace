import {
  CommandType as _0x1455e4,
  DependentOn as _0x253ddb,
  Disposable as _0x5a13f8,
  ICommandService as _0x369064,
  IConfigService as _0xa2a5f8,
  IImageIoService as _0x3fe029,
  IUniverInstanceService as _0x37a3d4,
  ImageSourceType as _0x134fb3,
  Inject as _0x25e579,
  Injector as _0x324e5d,
  LocaleService as _0x57d145,
  Plugin as _0x526df7,
  ThemeService as _0x54a29e,
  UniverInstanceType as _0x257b31,
  delayAnimationFrame as _0x43c155,
  generateRandomId as _0x3ac73c,
  merge as _0x4ca843,
  registerDependencies as _0x3ab438,
  toDisposable as _0x474ab9,
} from "@univerjs/core";
import { MessageType as _0x1257ac } from "@univerjs/design";
import {
  BuiltInUIPart as _0x54de84,
  ILocalFileService as _0x31f285,
  IMessageService as _0x792883,
  IUIPartsService as _0x440a7c,
  connectInjector as _0x3f646a,
  useDependency as _0x2d68eb,
  useObservable as _0xea068,
} from "@univerjs/ui";
import {
  BoardBackgroundType as _0x4d6122,
  BoardElementType as _0x189817,
  IBoardElementService as _0x6f2188,
  ResolveBoardCaptureBoundsCommand as _0x29ead0,
  UniverBoardsPlugin as _0x132a31,
  resolveBoardElementParentChain as _0x30c517,
} from "@univerjs-pro/boards";
import {
  BOARDS_UI_PLUGIN_CONFIG_KEY as _0x3395bc,
  BOARD_RENDER_LAYER_INDEX as _0x1e1fd7,
  BoardSettingsMenuContributionSubmenu as _0x11eb62,
  IBoardSettingsMenuContributionService as _0x555ae3,
  UniverBoardsUIPlugin as _0x1aaf8d,
  createBoardElementRenderObject as _0x35e721,
  resolveBoardRenderAdapters as _0xb5a9f2,
} from "@univerjs-pro/boards-ui";
import { IShapeHostAdapterRegistry as _0x30f8be } from "@univerjs-pro/engine-shape";
import {
  IPrintPreparationService as _0x539620,
  PrintPreparationService as _0x560d10,
} from "@univerjs-pro/print";
import {
  FormulaShapeResultStatus as _0xf558e,
  ShapeFormulaService as _0x40a63a,
} from "@univerjs-pro/shape-editor";
import {
  CanvasRenderMode as _0x4a0357,
  Engine as _0xe5650d,
  ICanvasColorService as _0x292480,
  MAIN_VIEW_PORT_KEY as _0x11f123,
  Scene as _0x2fc6ec,
  Viewport as _0x9ffbd6,
} from "@univerjs/engine-render";
import { BehaviorSubject as _0x2e42b9 } from "rxjs";
import { UniverLicensePlugin as _0x8ed441 } from "@univerjs-pro/license";
import {
  DownloadImageIcon as _0x34e96a,
  LoadingMultiIcon as _0x2950d7,
  PrintIcon as _0x3dbcf3,
} from "@univerjs/icons";
import { jsx as _0xd0abfc, jsxs as _0x24c550 } from "react/jsx-runtime";
function L(_0x1f3240) {
  "@babel/helpers - typeof";
  return (
    (L =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x173362) {
            return typeof _0x173362;
          }
        : function (_0x249a10) {
            return _0x249a10 &&
              typeof Symbol == "function" &&
              _0x249a10.constructor === Symbol &&
              _0x249a10 !== Symbol.prototype
              ? "symbol"
              : typeof _0x249a10;
          }),
    L(_0x1f3240)
  );
}
function xe(_0x217879, _0xd06c70) {
  if (L(_0x217879) != "object" || !_0x217879) return _0x217879;
  var _0x3eb71d = _0x217879[Symbol.toPrimitive];
  if (_0x3eb71d !== undefined) {
    var _0x201c9a = _0x3eb71d.call(_0x217879, _0xd06c70 || "default");
    if (L(_0x201c9a) != "object") return _0x201c9a;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0xd06c70 === "string" ? String : Number)(_0x217879);
}
function Se(_0x50a2e5) {
  var _0xfd5569 = xe(_0x50a2e5, "string");
  return L(_0xfd5569) == "symbol" ? _0xfd5569 : _0xfd5569 + "";
}
function R(_0x1c2f42, _0x4aa1ab, _0x2d6b55) {
  return (
    (_0x4aa1ab = Se(_0x4aa1ab)) in _0x1c2f42
      ? Object.defineProperty(_0x1c2f42, _0x4aa1ab, {
          value: _0x2d6b55,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x1c2f42[_0x4aa1ab] = _0x2d6b55),
    _0x1c2f42
  );
}
var Ce = class extends _0x5a13f8 {
  get canvas() {
    return this._engine["getCanvasElement"]();
  }
  get bounds() {
    return this._options["bounds"];
  }
  get height() {
    return this._options["bounds"].height * this._options["scale"];
  }
  get pixelRatio() {
    return this._options["pixelRatio"];
  }
  get scale() {
    return this._options["scale"];
  }
  get width() {
    return this._options["bounds"].width * this._options["scale"];
  }
  constructor(_0x5cdfb6, _0x1413e1 = document) {
    (super(),
      (this._options = _0x5cdfb6),
      R(this, "container", undefined),
      R(this, "_engine", undefined),
      R(this, "_scene", undefined),
      R(this, "_objects", []));
    let _0x3a1bb1 = Math.max(1, _0x5cdfb6.bounds["width"] * _0x5cdfb6.scale),
      _0x337885 = Math.max(1, _0x5cdfb6.bounds["height"] * _0x5cdfb6.scale),
      _0x21f924 = "board-print-" + _0x3ac73c(4);
    ((this.container = _0x1413e1.createElement("div")),
      this.container["setAttribute"]("data-univer-board-print-page", "true"),
      (this.container["style"].position = "relative"),
      (this.container["style"].width = _0x3a1bb1 + "px"),
      (this.container["style"].height = _0x337885 + "px"),
      (this.container["style"].overflow = "hidden"),
      (this._engine = new _0xe5650d(
        "",
        {
          elementWidth: _0x3a1bb1,
          elementHeight: _0x337885,
          dpr: _0x5cdfb6.pixelRatio,
          renderMode: _0x5cdfb6.renderMode,
        },
        _0x5cdfb6.canvasColorService,
      )),
      (this._scene = new _0x2fc6ec(_0x21f924, this._engine)),
      this._scene["disableObjectsEvent"](),
      this._scene["transformByState"]({
        width: _0x5cdfb6.bounds["width"],
        height: _0x5cdfb6.bounds["height"],
        scaleX: _0x5cdfb6.scale,
        scaleY: _0x5cdfb6.scale,
      }));
    let _0x58630a = new _0x9ffbd6(_0x11f123, this._scene, {
      left: 0,
      top: 0,
      width: _0x5cdfb6.bounds["width"],
      height: _0x5cdfb6.bounds["height"],
      active: true,
    });
    (_0x58630a.openClip(),
      _0x58630a.updateScrollVal({
        viewportScrollX: _0x5cdfb6.bounds["left"],
        viewportScrollY: _0x5cdfb6.bounds["top"],
      }),
      this._engine["mount"](this.container, false),
      this._engine["getCanvas"]()
        .getContext()
        .setId(_0x21f924 + "_" + _0x3ac73c(4)),
      this.disposeWithMe(
        this._scene["beforeRender$"].subscribe((_0x3a2a46) => {
          _0x3a2a46 &&
            this._drawBackground(_0x3a2a46.getContext(), _0x3a1bb1, _0x337885);
        }),
      ),
      this._createObjects(),
      this.disposeWithMe({
        dispose: () => {
          ((this._objects["length"] = 0),
            this._engine["dispose"](),
            this.container["remove"]());
        },
      }));
  }
  render() {
    (this._objects["forEach"]((_0x2baec5) => _0x2baec5.makeDirty(true)),
      this._scene["makeDirty"](true),
      this._scene["render"]());
  }
  _createObjects() {
    let {
        elementData: _0x3574f7,
        elementOrder: _0x454802,
        imageIoService: _0x4abfed,
        localeService: _0x34902d,
        renderAdapters: _0x209474,
        resolveFormulaPresentation: _0x809cdd,
        themeData: _0x211e48,
        unitId: _0x21a580,
      } = this._options,
      _0x271ae2 = new Map(
        _0x454802.map((_0x4f008c, _0x2570b8) => [_0x4f008c, _0x2570b8]),
      );
    _0x454802.forEach((_0x11bc3d) => {
      let _0x4ae87f = _0x3574f7[_0x11bc3d];
      if (!we(_0x3574f7, _0x4ae87f)) return;
      let _0x18e071 = _0x35e721({
        unitId: _0x21a580,
        elementDataItem: _0x4ae87f,
        elementData: _0x3574f7,
        zIndex: Te(_0x3574f7, _0x4ae87f, _0x454802.length, _0x271ae2),
        imageIoService: _0x4abfed,
        localeService: _0x34902d,
        adapters: _0x209474,
        formulaPresentation: _0x809cdd(_0x4ae87f),
        animateFormulaPresentation: false,
        themeData: _0x211e48,
      });
      if (!_0x18e071) return;
      let _0x4c8eff =
        _0x4ae87f.element["type"] === _0x189817.Container
          ? _0x1e1fd7.container
          : _0x1e1fd7.element;
      (this._scene["addObject"](_0x18e071, _0x4c8eff),
        this._objects["push"](_0x18e071));
    });
  }
  _drawBackground(_0x2fb8c2, _0x9521d1, _0x38a1bd) {
    let { backgroundColor: _0x1089b5, backgroundImage: _0x5ac97d } =
      this._options;
    if (!(!_0x1089b5 && !_0x5ac97d)) {
      if (
        (_0x2fb8c2.save(),
        _0x1089b5 &&
          ((_0x2fb8c2.fillStyle = _0x1089b5),
          _0x2fb8c2.fillRect(0, 0, _0x9521d1, _0x38a1bd)),
        _0x5ac97d)
      ) {
        let _0x4832f3 = Ee(
          _0x9521d1,
          _0x38a1bd,
          _0x5ac97d.image["naturalWidth"],
          _0x5ac97d.image["naturalHeight"],
          _0x5ac97d.fit,
        );
        _0x2fb8c2.drawImage(
          _0x5ac97d.image,
          _0x4832f3.left,
          _0x4832f3.top,
          _0x4832f3.width,
          _0x4832f3.height,
        );
      }
      _0x2fb8c2.restore();
    }
  }
};
function we(_0x3ee633, _0x41b61d) {
  return _0x41b61d
    ? _0x41b61d.element["visible"] !== false &&
        _0x30c517(_0x3ee633, _0x41b61d.elementId).every((_0xcd406c) => {
          var _0x333616;
          return (
            ((_0x333616 = _0x3ee633[_0xcd406c]) == null
              ? undefined
              : _0x333616.element["visible"]) !== false
          );
        })
    : false;
}
function Te(_0x1cef3f, _0x3652df, _0x2c9c91, _0xcc7e3b) {
  let _0x45fac0 = _0xcc7e3b.get(_0x3652df.elementId) ?? 0;
  return _0x3652df.element["type"] === _0x189817.Container
    ? _0x30c517(_0x1cef3f, _0x3652df.elementId).length * _0x2c9c91 + _0x45fac0
    : _0x45fac0;
}
function Ee(_0x6a36c, _0xbf5d20, _0x56cefb, _0x2505e5, _0x150917) {
  if (_0x150917 === "stretch" || _0x56cefb <= 0 || _0x2505e5 <= 0)
    return { left: 0, top: 0, width: _0x6a36c, height: _0xbf5d20 };
  let _0x78e0e0 =
      _0x150917 === "contain"
        ? Math.min(_0x6a36c / _0x56cefb, _0xbf5d20 / _0x2505e5)
        : Math.max(_0x6a36c / _0x56cefb, _0xbf5d20 / _0x2505e5),
    _0x1ad464 = _0x56cefb * _0x78e0e0,
    _0x54ae49 = _0x2505e5 * _0x78e0e0;
  return {
    left: (_0x6a36c - _0x1ad464) / 2,
    top: (_0xbf5d20 - _0x54ae49) / 2,
    width: _0x1ad464,
    height: _0x54ae49,
  };
}
var z = class {
  constructor() {
    R(this, "_transformers", new Set());
  }
  register(_0x9cedc6) {
    return (
      this._transformers["add"](_0x9cedc6),
      _0x474ab9(() => this._transformers["delete"](_0x9cedc6))
    );
  }
  transform(_0x32d36b, _0xb188b1) {
    return Array.from(this._transformers).reduce(
      (_0x2d4978, _0xb7a53d) => _0xb7a53d(_0x2d4978, _0xb188b1),
      _0x32d36b,
    );
  }
};
function B(_0x121b61, _0x3b753f) {
  return function (_0x3a767b, _0x3fa73a) {
    _0x3b753f(_0x3a767b, _0x3fa73a, _0x121b61);
  };
}
function V(_0x3d5b07, _0x2aa6d2, _0x24025c, _0x581235) {
  var _0x3d3a7f = arguments.length,
    _0x29ae5f =
      _0x3d3a7f < 3
        ? _0x2aa6d2
        : _0x581235 === null
          ? (_0x581235 = Object.getOwnPropertyDescriptor(_0x2aa6d2, _0x24025c))
          : _0x581235,
    _0x3fb80e;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x29ae5f = Reflect.decorate(_0x3d5b07, _0x2aa6d2, _0x24025c, _0x581235);
  else {
    for (var _0x307c0b = _0x3d5b07.length - 1; _0x307c0b >= 0; _0x307c0b--)
      (_0x3fb80e = _0x3d5b07[_0x307c0b]) &&
        (_0x29ae5f =
          (_0x3d3a7f < 3
            ? _0x3fb80e(_0x29ae5f)
            : _0x3d3a7f > 3
              ? _0x3fb80e(_0x2aa6d2, _0x24025c, _0x29ae5f)
              : _0x3fb80e(_0x2aa6d2, _0x24025c)) || _0x29ae5f);
  }
  return (
    _0x3d3a7f > 3 &&
      _0x29ae5f &&
      Object.defineProperty(_0x2aa6d2, _0x24025c, _0x29ae5f),
    _0x29ae5f
  );
}
const H = 16384,
  U = 5000;
let W = class extends _0x5a13f8 {
  constructor(
    _0x4a1150,
    _0x541882,
    _0x2f90ca,
    _0xa004a8,
    _0x21903b,
    _0x2af4f5,
    _0x3ad165,
    _0x525c0d,
    _0x2d0162,
    _0x633541,
    _0x8b2040,
    _0x5546fa,
    _0x49cd51,
  ) {
    (super(),
      (this._commandService = _0x4a1150),
      (this._univerInstanceService = _0x541882),
      (this._printPreparationService = _0x2f90ca),
      (this._boardElementService = _0xa004a8),
      (this._shapeHostAdapterRegistry = _0x21903b),
      (this._shapeFormulaService = _0x2af4f5),
      (this._configService = _0x3ad165),
      (this._imageIoService = _0x525c0d),
      (this._localeService = _0x2d0162),
      (this._themeService = _0x633541),
      (this._canvasColorService = _0x8b2040),
      (this._compositionService = _0x5546fa),
      (this._localFileService = _0x49cd51),
      R(this, "_preparing$", new _0x2e42b9(null)),
      R(this, "preparing$", this._preparing$["asObservable"]()));
  }
  async print(_0x3bb469, _0x1134b5) {
    if (this._preparing$["getValue"]()) return false;
    this._preparing$["next"]("print");
    let _0x235544 = Ae();
    if (!_0x235544) return (this._preparing$["next"](null), false);
    let _0x4340b7;
    try {
      let _0x337365 = await this._createCanvasView(
        _0x3bb469,
        _0x1134b5,
        "print",
        _0x235544.document,
      );
      if (!_0x337365) return false;
      _0x4340b7 = _0x337365;
      let _0xa0d9be = _0x235544.document["createElement"]("style");
      return (
        (_0xa0d9be.textContent = je(_0x4340b7.width, _0x4340b7.height)),
        _0x235544.document["head"].appendChild(_0xa0d9be),
        _0x235544.document["body"].appendChild(_0x4340b7.container),
        await Me(_0x235544, () => _0x337365.render())
      );
    } finally {
      (_0x4340b7 == null || _0x4340b7.dispose(),
        _0x235544.frame["remove"](),
        this._preparing$["next"](null));
    }
  }
  async exportImage(_0x514821, _0x5c6def, _0x313a32) {
    if (this._preparing$["getValue"]()) return false;
    this._preparing$["next"]("image");
    let _0x1b92e7;
    try {
      let _0x3aa3ce = await this._createCanvasView(
        _0x514821,
        _0x5c6def,
        _0x313a32,
        document,
      );
      if (!_0x3aa3ce) return false;
      ((_0x1b92e7 = _0x3aa3ce), _0x1b92e7.render());
      let _0x517a77 = _0x313a32 === "png" ? "image/png" : "image/jpeg",
        _0x50b46e = await Ne(
          _0x1b92e7.canvas,
          _0x517a77,
          _0x313a32 === "jpeg" ? 0.92 : undefined,
        );
      return _0x50b46e
        ? (this._localFileService["downloadFile"](
            _0x50b46e,
            Pe(this._getBoardModel(_0x514821), _0x313a32),
          ),
          true)
        : false;
    } finally {
      (_0x1b92e7 == null || _0x1b92e7.dispose(),
        this._preparing$["next"](null));
    }
  }
  dispose() {
    (this._preparing$["complete"](), super.dispose());
  }
  async _createCanvasView(_0x3dd039, _0x31a002, _0x397721, _0x4c25f5) {
    let _0x1a9905 = this._getBoardModel(_0x3dd039);
    if (!_0x1a9905 || _0x1a9905.getActivePageId() !== _0x31a002) return false;
    let _0x4dc33c = await this._resolveBounds(_0x3dd039, _0x31a002);
    if (!_0x4dc33c) return false;
    let _0x1a442d = Oe(
      _0x4dc33c,
      _0x397721 === "print"
        ? 1
        : Math.max(1, Math.min(globalThis.devicePixelRatio || 1, 2)),
    );
    if (!_0x1a442d) return false;
    (await this._printPreparationService["prepare"]({
      unitId: _0x3dd039,
      unitType: _0x257b31.UNIVER_BOARD,
      dpr: _0x1a442d.pixelRatio,
    }),
      await this._waitForFormulaShapes(_0x3dd039));
    let _0x24b586 = this._compositionService["transform"](
        {
          data: this._boardElementService["getElementData"](
            _0x3dd039,
            _0x31a002,
          ),
          order: this._boardElementService["getElementOrder"](
            _0x3dd039,
            _0x31a002,
          ),
        },
        { boardModel: _0x1a9905, subUnitId: _0x31a002 },
      ),
      _0x970df1 = _0x24b586.data,
      _0x54ae4b = _0x24b586.order;
    return (
      await this._preloadElementImages(_0x970df1),
      new Ce(
        {
          ...awaitthis._resolveBackground(_0x1a9905, _0x31a002, _0x397721),
          bounds: _0x4dc33c,
          canvasColorService: this._canvasColorService,
          elementData: _0x970df1,
          elementOrder: _0x54ae4b,
          imageIoService: this._imageIoService,
          localeService: this._localeService,
          pixelRatio: _0x1a442d.pixelRatio,
          renderAdapters: _0xb5a9f2(
            this._configService["getConfig"](_0x3395bc) ?? undefined,
          ),
          renderMode:
            _0x397721 === "print" ? _0x4a0357.Printing : _0x4a0357.Rendering,
          resolveFormulaPresentation: (_0x3aefc5) =>
            this._resolveFormulaPresentation(_0x3dd039, _0x31a002, _0x3aefc5),
          scale: _0x1a442d.scale,
          themeData: _0x1a9905.getThemeData(),
          unitId: _0x3dd039,
        },
        _0x4c25f5,
      )
    );
  }
  async _resolveBounds(_0x2808fe, _0x2c4f27) {
    let _0x584abd = await this._commandService["executeCommand"](_0x29ead0.id, {
      unitId: _0x2808fe,
      subUnitId: _0x2c4f27,
      padding: 32,
    });
    return _0x584abd && _0x584abd.ok ? _0x584abd.bounds : false;
  }
  _getBoardModel(_0x9e4fc6) {
    return (
      this._univerInstanceService["getUnit"](
        _0x9e4fc6,
        _0x257b31.UNIVER_BOARD,
      ) ?? undefined
    );
  }
  async _waitForFormulaShapes(_0x5e029) {
    var _0x2a7c9f;
    let _0x5136c3 = this._shapeHostAdapterRegistry["get"](
        _0x257b31.UNIVER_BOARD,
      ),
      _0x1d8a30 = (
        (_0x5136c3 == null || (_0x2a7c9f = _0x5136c3.listShapesInUnit) == null
          ? undefined
          : _0x2a7c9f.call(_0x5136c3, _0x5e029)) ?? []
      ).filter((_0x2bfd81) => {
        var _0xcb05d1;
        return (_0xcb05d1 = _0x2bfd81.shapeData["formulaBinding"]) == null
          ? undefined
          : _0xcb05d1.formula["trim"]();
      });
    if (_0x1d8a30.length === 0) return;
    let _0x67aa9c = Date.now() + U;
    for (; Date.now() < _0x67aa9c;) {
      if (
        _0x1d8a30.every((_0x37b9a7) => {
          let _0x4413e1 = this._shapeFormulaService["getResult"](_0x37b9a7);
          return _0x4413e1 && _0x4413e1.status !== _0xf558e.PENDING;
        })
      )
        return;
      await K();
    }
    throw Error(
      "Board output timed out while resolving formula shapes for " + _0x5e029,
    );
  }
  _resolveFormulaPresentation(_0x25e8b8, _0x3ff4bb, _0x3322a) {
    return ke(_0x3322a)
      ? this._shapeFormulaService["getPresentation"]({
          unitId: _0x25e8b8,
          subUnitId: _0x3ff4bb,
          shapeId: _0x3322a.elementId,
        })
      : undefined;
  }
  async _preloadElementImages(_0xeda352) {
    let _0x3c32f5 = Object.values(_0xeda352).flatMap((_0x371141) => {
      let _0x39808d = _0x371141.element;
      if (_0x39808d.visible === false) return [];
      if (_0x39808d.type === _0x189817.Image)
        return [
          this._loadImageSource(
            _0x39808d.source,
            _0x39808d.imageSourceType ?? _0x134fb3.URL,
          ),
        ];
      let _0x4bf121 =
        _0x39808d.type === _0x189817.Shape
          ? _0x39808d.shapeData["fill"]
          : _0x39808d.type === _0x189817.Container
            ? _0x39808d.containerData["shapeData"].fill
            : undefined;
      return _0x4bf121 != null && _0x4bf121.fillImageSource
        ? [
            this._loadImageSource(
              _0x4bf121.fillImageSource,
              _0x4bf121.fillImageSourceType ?? _0x134fb3.URL,
            ),
          ]
        : [];
    });
    (await Promise.all(_0x3c32f5), await document.fonts["ready"]);
  }
  async _resolveBackground(_0x5a7d39, _0x259c74, _0x35a55b) {
    var _0x24e89a;
    let _0x1865ad = De(_0x5a7d39, _0x35a55b);
    if (_0x1865ad === "transparent") return {};
    let _0x44e932 = this._themeService["getColorFromTheme"](
      this._themeService["darkMode"] ? "gray.1000" : "gray.0",
    );
    if (_0x1865ad === "white")
      return _0x35a55b === "print" ? {} : { backgroundColor: _0x44e932 };
    let _0x2b619c =
      (_0x24e89a = _0x5a7d39.getPage(_0x259c74)) == null
        ? undefined
        : _0x24e89a.background;
    if ((_0x2b619c == null ? undefined : _0x2b619c.type) === _0x4d6122.Solid)
      return { backgroundColor: _0x2b619c.color };
    if ((_0x2b619c == null ? undefined : _0x2b619c.type) === _0x4d6122.Image) {
      let _0x58b2e3 = await this._loadImageSource(
        _0x2b619c.source,
        _0x2b619c.imageSourceType ?? _0x134fb3.URL,
      );
      return {
        backgroundColor: _0x44e932,
        backgroundImage: _0x58b2e3
          ? { fit: _0x2b619c.fit ?? "cover", image: _0x58b2e3 }
          : undefined,
      };
    }
    return {
      backgroundColor: this._themeService["getColorFromTheme"]("gray.50"),
    };
  }
  async _loadImageSource(_0xa1673e, _0x42a9c0) {
    let _0x1902a8 = this._imageIoService["getImageSourceCache"](
      _0xa1673e,
      _0x42a9c0,
    );
    if (_0x1902a8) return await G(_0x1902a8);
    let _0x429224 =
      _0x42a9c0 === _0x134fb3.UUID
        ? await this._imageIoService["getImage"](_0xa1673e)
        : _0xa1673e;
    if (!_0x429224) return null;
    let _0x190020 = document.createElement("img");
    ((_0x190020.crossOrigin = "anonymous"), (_0x190020.src = _0x429224));
    let _0x2a8d5d = await G(_0x190020);
    return (
      _0x2a8d5d &&
        this._imageIoService["addImageSourceCache"](
          _0xa1673e,
          _0x42a9c0,
          _0x2a8d5d,
        ),
      _0x2a8d5d
    );
  }
};
W = V(
  [
    B(0, _0x369064),
    B(1, _0x37a3d4),
    B(2, _0x539620),
    B(3, _0x25e579(_0x6f2188)),
    B(4, _0x25e579(_0x30f8be)),
    B(5, _0x25e579(_0x40a63a)),
    B(6, _0xa2a5f8),
    B(7, _0x3fe029),
    B(8, _0x25e579(_0x57d145)),
    B(9, _0x25e579(_0x54a29e)),
    B(10, _0x292480),
    B(11, _0x25e579(z)),
    B(12, _0x31f285),
  ],
  W,
);
function De(_0xb254bf, _0x19857c) {
  let _0x3accca = _0xb254bf.getActivePage().background;
  return _0x3accca && _0x3accca.type !== _0x4d6122.None
    ? "scene"
    : _0x19857c === "png"
      ? "transparent"
      : "white";
}
function Oe(_0x22d483, _0x17a762) {
  if (_0x22d483.width <= 0 || _0x22d483.height <= 0 || _0x17a762 <= 0)
    return null;
  let _0x3fdbc4 = Math.min(
    1,
    H / (_0x22d483.width * _0x17a762),
    H / (_0x22d483.height * _0x17a762),
    Math.sqrt(
      24000000 / (_0x22d483.width * _0x22d483.height * _0x17a762 * _0x17a762),
    ),
  );
  return Number.isFinite(_0x3fdbc4) && _0x3fdbc4 > 0
    ? { pixelRatio: _0x17a762, scale: _0x3fdbc4 }
    : null;
}
function ke(_0x472f98) {
  if (_0x472f98.element["type"] === _0x189817.Shape)
    return _0x472f98.element["shapeData"].formulaBinding;
  if (_0x472f98.element["type"] === _0x189817.Container)
    return _0x472f98.element["containerData"].shapeData["formulaBinding"];
}
function Ae() {
  let _0x873a13 = document.createElement("iframe");
  (_0x873a13.setAttribute("aria-hidden", "true"),
    _0x873a13.setAttribute("data-univer-boards-print-frame", "true"),
    (_0x873a13.style["position"] = "fixed"),
    (_0x873a13.style["left"] = "-10000px"),
    (_0x873a13.style["top"] = "0"),
    (_0x873a13.style["width"] = "1px"),
    (_0x873a13.style["height"] = "1px"),
    (_0x873a13.style["border"] = "0"),
    (_0x873a13.style["pointerEvents"] = "none"),
    document.body["appendChild"](_0x873a13));
  let _0x38d2f7 = _0x873a13.contentWindow,
    _0x419ec4 =
      _0x873a13.contentDocument ??
      (_0x38d2f7 == null ? undefined : _0x38d2f7.document);
  return !_0x38d2f7 || !_0x419ec4
    ? (_0x873a13.remove(), null)
    : (_0x419ec4.open(),
      _0x419ec4.write("<!doctype html><html><head></head><body></body></html>"),
      _0x419ec4.close(),
      { frame: _0x873a13, document: _0x419ec4, window: _0x38d2f7 });
}
function je(_0x5c1f4c, _0x41e872) {
  return (
    "\n html, body {\n margin: 0;\n padding: 0;\n width: " +
    _0x5c1f4c +
    "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20" +
    _0x41e872 +
    "px;\n overflow: hidden;\n }\n @page {\n size: " +
    _0x5c1f4c +
    "px " +
    _0x41e872 +
    "px;\n margin: 0;\n }\n [data-univer-board-print-page] {\n position: relative;\n width: " +
    _0x5c1f4c +
    "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20" +
    _0x41e872 +
    "px;\n overflow: hidden;\n break-after: auto;\n page-break-after: auto;\n }\n "
  );
}
function Me(_0x5ca0bd, _0x3e88fe) {
  return new Promise((_0x725d25) => {
    let _0x3153b6 = _0x5ca0bd.window["onbeforeprint"],
      _0x76505d = _0x5ca0bd.window["onafterprint"],
      _0xf73c20 = false,
      _0x225ef8 = (_0x5b96e6) => {
        _0xf73c20 ||
          ((_0xf73c20 = true),
          (_0x5ca0bd.window["onbeforeprint"] = _0x3153b6),
          (_0x5ca0bd.window["onafterprint"] = _0x76505d),
          _0x725d25(_0x5b96e6));
      };
    ((_0x5ca0bd.window["onbeforeprint"] = (_0x22db04) => {
      (_0x3153b6 == null || _0x3153b6.call(_0x5ca0bd.window, _0x22db04),
        _0x3e88fe());
    }),
      (_0x5ca0bd.window["onafterprint"] = (_0xa03e1b) => {
        (_0x76505d == null || _0x76505d.call(_0x5ca0bd.window, _0xa03e1b),
          _0x225ef8(true));
      }),
      globalThis.setTimeout(() => {
        try {
          (_0x5ca0bd.window["focus"](), _0x5ca0bd.window["print"]());
        } catch {
          _0x225ef8(false);
        }
      }, 100));
  });
}
function G(_0x476c9d) {
  return _0x476c9d.complete
    ? Promise.resolve(
        _0x476c9d.naturalWidth > 0 && _0x476c9d.naturalHeight > 0
          ? _0x476c9d
          : null,
      )
    : new Promise((_0x1c74c3) => {
        let _0x34ea07;
        function _0x4c887c(_0x409948) {
          (_0x34ea07 !== undefined && globalThis.clearTimeout(_0x34ea07),
            _0x476c9d.removeEventListener("load", _0x130c67),
            _0x476c9d.removeEventListener("error", _0x480029),
            _0x1c74c3(_0x409948));
        }
        function _0x130c67() {
          _0x4c887c(_0x476c9d);
        }
        function _0x480029() {
          _0x4c887c(null);
        }
        ((_0x34ea07 = globalThis.setTimeout(() => _0x4c887c(null), U)),
          _0x476c9d.addEventListener("load", _0x130c67),
          _0x476c9d.addEventListener("error", _0x480029));
      });
}
function Ne(_0x42e058, _0x213d39, _0x1de9f5) {
  return new Promise((_0x595b84) =>
    _0x42e058.toBlob(_0x595b84, _0x213d39, _0x1de9f5),
  );
}
function Pe(_0x4f1e3f, _0x2708df) {
  var _0x50ba89;
  return (
    (
      (_0x4f1e3f == null || (_0x50ba89 = _0x4f1e3f.getSnapshot().name) == null
        ? undefined
        : _0x50ba89.trim()) || "board"
    ).replace(/[\\/:*?"<>|]/g, "-") +
    "." +
    _0x2708df
  );
}
function K() {
  return _0x43c155();
}
const q = {
    id: "boards-print.operation.print",
    type: _0x1455e4.OPERATION,
    handler: async (_0x409b99) => {
      let _0x3a2076 = _0x409b99
        .get(_0x37a3d4)
        .getCurrentUnitOfType(_0x257b31.UNIVER_BOARD);
      if (!_0x3a2076) return false;
      try {
        let _0x53cdd6 = await _0x409b99
          .get(W)
          .print(_0x3a2076.getUnitId(), _0x3a2076.getActivePageId());
        return (
          _0x53cdd6 ||
            _0x409b99
              .get(_0x792883)
              .show({
                type: _0x1257ac.Error,
                content: _0x409b99
                  .get(_0x57d145)
                  .t("boards-print.errors.printFailed"),
              }),
          _0x53cdd6
        );
      } catch {
        return (
          _0x409b99
            .get(_0x792883)
            .show({
              type: _0x1257ac.Error,
              content: _0x409b99
                .get(_0x57d145)
                .t("boards-print.errors.printFailed"),
            }),
          false
        );
      }
    },
  },
  J = {
    id: "boards-print.operation.export-image",
    type: _0x1455e4.OPERATION,
    handler: async (_0x2a4978, _0x9f4e7b) => {
      if (
        (_0x9f4e7b == null ? undefined : _0x9f4e7b.format) !== "png" &&
        (_0x9f4e7b == null ? undefined : _0x9f4e7b.format) !== "jpeg"
      )
        return false;
      let _0x1b8482 = _0x2a4978
        .get(_0x37a3d4)
        .getCurrentUnitOfType(_0x257b31.UNIVER_BOARD);
      if (!_0x1b8482) return false;
      try {
        let _0x47db4a = await _0x2a4978
          .get(W)
          .exportImage(
            _0x1b8482.getUnitId(),
            _0x1b8482.getActivePageId(),
            _0x9f4e7b.format,
          );
        return (
          _0x47db4a ||
            _0x2a4978
              .get(_0x792883)
              .show({
                type: _0x1257ac.Error,
                content: _0x2a4978
                  .get(_0x57d145)
                  .t("boards-print.errors.exportFailed"),
              }),
          _0x47db4a
        );
      } catch {
        return (
          _0x2a4978
            .get(_0x792883)
            .show({
              type: _0x1257ac.Error,
              content: _0x2a4978
                .get(_0x57d145)
                .t("boards-print.errors.exportFailed"),
            }),
          false
        );
      }
    },
  },
  Y = "boards-print.config",
  X = {};
var Fe = "@univerjs-pro/boards-print",
  Ie = "1.0.0-insiders.20260907-70fc579";
function Le() {
  let _0x28ae5c = _0x2d68eb(_0x57d145),
    _0xe0a99c = _0xea068(_0x2d68eb(W).preparing$, null, true);
  if (!_0xe0a99c) return null;
  let _0x90ef0d = _0x28ae5c.t(
    _0xe0a99c === "print"
      ? "boards-print.loading.print"
      : "boards-print.loading.image",
  );
  return _0xd0abfc("div", {
    "data-u-comp": "boards-printing-mask",
    "aria-busy": "true",
    "aria-label": _0x90ef0d,
    className:
      "univer-fixed univer-inset-0 univer-z-[1000] univer-flex univer-cursor-wait univer-items-center univer-justify-center univer-bg-gray-100 dark:!univer-bg-gray-900",
    children: _0x24c550("div", {
      role: "status",
      "aria-live": "polite",
      className:
        "univer-flex univer-items-center univer-gap-3 univer-rounded-lg univer-bg-gray-0 univer-px-5 univer-py-4 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-bg-gray-700 dark:!univer-text-gray-0",
      children: [
        _0xd0abfc(_0x2950d7, {
          className: "univer-size-6 univer-animate-spin univer-text-gray-500",
        }),
        _0xd0abfc("span", { children: _0x90ef0d }),
      ],
    }),
  });
}
let Z = class extends _0x5a13f8 {
  constructor(_0xaca115, _0x4d4aaf, _0x2868b6, _0xe56675, _0x4acdd0) {
    (super(),
      (this._commandService = _0xaca115),
      (this._localeService = _0x4d4aaf),
      (this._settingsMenuContributionService = _0x2868b6),
      (this._uiPartsService = _0xe56675),
      (this._injector = _0x4acdd0),
      this.disposeWithMe(this._commandService["registerCommand"](q)),
      this.disposeWithMe(this._commandService["registerCommand"](J)),
      this.disposeWithMe(
        this._settingsMenuContributionService["register"]({
          id: "boards-print.settings.print",
          icon: _0x3dbcf3,
          label: () => this._localeService["t"]("boards-print.menu.print"),
          order: 100,
          group: "output",
          onClick: async (_0x53fb63) => {
            await _0x53fb63.executeCommand(q.id);
          },
        }),
      ),
      this.disposeWithMe(
        this._settingsMenuContributionService["register"]({
          id: "boards-print.settings.export-png",
          icon: _0x34e96a,
          label: () => this._localeService["t"]("boards-print.menu.exportPng"),
          order: 200,
          group: "output",
          submenu: _0x11eb62.SaveAs,
          onClick: async (_0x21c3ee) => {
            await _0x21c3ee.executeCommand(J.id, { format: "png" });
          },
        }),
      ),
      this.disposeWithMe(
        this._settingsMenuContributionService["register"]({
          id: "boards-print.settings.export-jpeg",
          icon: _0x34e96a,
          label: () => this._localeService["t"]("boards-print.menu.exportJpeg"),
          order: 300,
          group: "output",
          submenu: _0x11eb62.SaveAs,
          onClick: async (_0x2f220b) => {
            await _0x2f220b.executeCommand(J.id, { format: "jpeg" });
          },
        }),
      ),
      this.disposeWithMe(
        this._uiPartsService["registerComponent"](_0x54de84.GLOBAL, () =>
          _0x3f646a(Le, this._injector),
        ),
      ));
  }
};
Z = V(
  [
    B(0, _0x369064),
    B(1, _0x25e579(_0x57d145)),
    B(2, _0x25e579(_0x555ae3)),
    B(3, _0x440a7c),
    B(4, _0x25e579(_0x324e5d)),
  ],
  Z,
);
const Q = "UNIVER_BOARDS_PRINT_PLUGIN";
let $ = class extends _0x526df7 {
  constructor(_0xf3e24c = X, _0x326135, _0x428080) {
    (super(),
      (this._config = _0xf3e24c),
      (this._injector = _0x326135),
      (this._configService = _0x428080));
    let { menu: _0x5cfea0, ..._0x1d4915 } = _0x4ca843({}, X, this._config);
    (_0x5cfea0 &&
      this._configService["setConfig"]("menu", _0x5cfea0, { merge: true }),
      this._configService["setConfig"](Y, _0x1d4915));
  }
  onStarting() {
    (this._injector["has"](_0x539620) ||
      this._injector["add"]([_0x539620, { useClass: _0x560d10 }]),
      this._injector["has"](z) || this._injector["add"]([z]),
      _0x3ab438(this._injector, [[W], [Z]]));
  }
  onReady() {
    this._injector["get"](Z);
  }
};
(R($, "pluginName", Q),
  R($, "packageName", Fe),
  R($, "version", Ie),
  R($, "type", _0x257b31.UNIVER_BOARD),
  ($ = V(
    [
      _0x253ddb(_0x8ed441, _0x132a31, _0x1aaf8d),
      B(1, _0x25e579(_0x324e5d)),
      B(2, _0xa2a5f8),
    ],
    $,
  )));
export {
  Y as BOARDS_PRINT_PLUGIN_CONFIG_KEY,
  Q as BOARDS_PRINT_PLUGIN_NAME,
  z as BoardPrintCompositionService,
  J as ExportBoardImageOperation,
  q as PrintBoardOperation,
  $ as UniverBoardsPrintPlugin,
};
