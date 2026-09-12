Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("@univerjs/design"),
  n = require("@univerjs/ui"),
  r = require("@univerjs-pro/boards"),
  i = require("@univerjs-pro/boards-ui"),
  a = require("@univerjs-pro/engine-shape"),
  o = require("@univerjs-pro/print"),
  s = require("@univerjs-pro/shape-editor"),
  c = require("@univerjs/engine-render"),
  l = require("rxjs"),
  u = require("@univerjs-pro/license"),
  d = require("@univerjs/icons"),
  f = require("react/jsx-runtime");
function p(_0x551f0c) {
  "@babel/helpers - typeof";
  return (
    (p =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5a3b66) {
            return typeof _0x5a3b66;
          }
        : function (_0x47f40e) {
            return _0x47f40e &&
              typeof Symbol == "function" &&
              _0x47f40e.constructor === Symbol &&
              _0x47f40e !== Symbol.prototype
              ? "symbol"
              : typeof _0x47f40e;
          }),
    p(_0x551f0c)
  );
}
function m(_0x5345fb, _0x4aa83d) {
  if (p(_0x5345fb) != "object" || !_0x5345fb) return _0x5345fb;
  var _0x355054 = _0x5345fb[Symbol.toPrimitive];
  if (_0x355054 !== undefined) {
    var _0x2fd0ab = _0x355054.call(_0x5345fb, _0x4aa83d || "default");
    if (p(_0x2fd0ab) != "object") return _0x2fd0ab;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x4aa83d === "string" ? String : Number)(_0x5345fb);
}
function h(_0x145193) {
  var _0x4ba77f = m(_0x145193, "string");
  return p(_0x4ba77f) == "symbol" ? _0x4ba77f : _0x4ba77f + "";
}
function g(_0x405be1, _0x645de9, _0xfb0c30) {
  return (
    (_0x645de9 = h(_0x645de9)) in _0x405be1
      ? Object.defineProperty(_0x405be1, _0x645de9, {
          value: _0xfb0c30,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x405be1[_0x645de9] = _0xfb0c30),
    _0x405be1
  );
}
var _ = class extends e.Disposable {
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
  constructor(_0x30b28c, _0x4492f2 = document) {
    (super(),
      (this._options = _0x30b28c),
      g(this, "container", undefined),
      g(this, "_engine", undefined),
      g(this, "_scene", undefined),
      g(this, "_objects", []));
    let _0x944a40 = Math.max(1, _0x30b28c.bounds["width"] * _0x30b28c.scale),
      _0x45c570 = Math.max(1, _0x30b28c.bounds["height"] * _0x30b28c.scale),
      _0x350e36 = "board-print-" + (0, e.generateRandomId)(4);
    ((this.container = _0x4492f2.createElement("div")),
      this.container["setAttribute"]("data-univer-board-print-page", "true"),
      (this.container["style"].position = "relative"),
      (this.container["style"].width = _0x944a40 + "px"),
      (this.container["style"].height = _0x45c570 + "px"),
      (this.container["style"].overflow = "hidden"),
      (this._engine = new c["Engine"](
        "",
        {
          elementWidth: _0x944a40,
          elementHeight: _0x45c570,
          dpr: _0x30b28c.pixelRatio,
          renderMode: _0x30b28c.renderMode,
        },
        _0x30b28c.canvasColorService,
      )),
      (this._scene = new c["Scene"](_0x350e36, this._engine)),
      this._scene["disableObjectsEvent"](),
      this._scene["transformByState"]({
        width: _0x30b28c.bounds["width"],
        height: _0x30b28c.bounds["height"],
        scaleX: _0x30b28c.scale,
        scaleY: _0x30b28c.scale,
      }));
    let _0x281c69 = new c["Viewport"](c.MAIN_VIEW_PORT_KEY, this._scene, {
      left: 0,
      top: 0,
      width: _0x30b28c.bounds["width"],
      height: _0x30b28c.bounds["height"],
      active: true,
    });
    (_0x281c69.openClip(),
      _0x281c69.updateScrollVal({
        viewportScrollX: _0x30b28c.bounds["left"],
        viewportScrollY: _0x30b28c.bounds["top"],
      }),
      this._engine["mount"](this.container, false),
      this._engine["getCanvas"]()
        .getContext()
        .setId(_0x350e36 + "_" + (0, e.generateRandomId)(4)),
      this.disposeWithMe(
        this._scene["beforeRender$"].subscribe((_0x58103c) => {
          _0x58103c &&
            this._drawBackground(_0x58103c.getContext(), _0x944a40, _0x45c570);
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
    (this._objects["forEach"]((_0x3861b9) => _0x3861b9.makeDirty(true)),
      this._scene["makeDirty"](true),
      this._scene["render"]());
  }
  _createObjects() {
    let {
        elementData: _0x405a71,
        elementOrder: _0x3979fe,
        imageIoService: _0x1fca3b,
        localeService: _0x4742e1,
        renderAdapters: _0x1180b6,
        resolveFormulaPresentation: _0x546e87,
        themeData: _0x3ec97f,
        unitId: _0x4854ab,
      } = this._options,
      _0x23f37e = new Map(
        _0x3979fe.map((_0x51fb08, _0x38a5cd) => [_0x51fb08, _0x38a5cd]),
      );
    _0x3979fe.forEach((_0x295484) => {
      let _0x6da68e = _0x405a71[_0x295484];
      if (!v(_0x405a71, _0x6da68e)) return;
      let _0xaed2f1 = (0, i.createBoardElementRenderObject)({
        unitId: _0x4854ab,
        elementDataItem: _0x6da68e,
        elementData: _0x405a71,
        zIndex: y(_0x405a71, _0x6da68e, _0x3979fe.length, _0x23f37e),
        imageIoService: _0x1fca3b,
        localeService: _0x4742e1,
        adapters: _0x1180b6,
        formulaPresentation: _0x546e87(_0x6da68e),
        animateFormulaPresentation: false,
        themeData: _0x3ec97f,
      });
      if (!_0xaed2f1) return;
      let _0x417863 =
        _0x6da68e.element["type"] === r.BoardElementType["Container"]
          ? i.BOARD_RENDER_LAYER_INDEX["container"]
          : i.BOARD_RENDER_LAYER_INDEX["element"];
      (this._scene["addObject"](_0xaed2f1, _0x417863),
        this._objects["push"](_0xaed2f1));
    });
  }
  _drawBackground(_0x27831c, _0x39d9db, _0x335407) {
    let { backgroundColor: _0x1113e0, backgroundImage: _0x5a9c00 } =
      this._options;
    if (!(!_0x1113e0 && !_0x5a9c00)) {
      if (
        (_0x27831c.save(),
        _0x1113e0 &&
          ((_0x27831c.fillStyle = _0x1113e0),
          _0x27831c.fillRect(0, 0, _0x39d9db, _0x335407)),
        _0x5a9c00)
      ) {
        let _0x360dd7 = b(
          _0x39d9db,
          _0x335407,
          _0x5a9c00.image["naturalWidth"],
          _0x5a9c00.image["naturalHeight"],
          _0x5a9c00.fit,
        );
        _0x27831c.drawImage(
          _0x5a9c00.image,
          _0x360dd7.left,
          _0x360dd7.top,
          _0x360dd7.width,
          _0x360dd7.height,
        );
      }
      _0x27831c.restore();
    }
  }
};
function v(_0x964a92, _0x58f986) {
  return _0x58f986
    ? _0x58f986.element["visible"] !== false &&
        (0, r.resolveBoardElementParentChain)(
          _0x964a92,
          _0x58f986.elementId,
        ).every((_0x248264) => {
          var _0x13f8da;
          return (
            ((_0x13f8da = _0x964a92[_0x248264]) == null
              ? undefined
              : _0x13f8da.element["visible"]) !== false
          );
        })
    : false;
}
function y(_0x5776e4, _0x5e2917, _0x329f49, _0x57a58e) {
  let _0x35ff7e = _0x57a58e.get(_0x5e2917.elementId) ?? 0;
  return _0x5e2917.element["type"] === r.BoardElementType["Container"]
    ? (0, r.resolveBoardElementParentChain)(_0x5776e4, _0x5e2917.elementId)
        .length *
        _0x329f49 +
        _0x35ff7e
    : _0x35ff7e;
}
function b(_0x4e39a9, _0x202362, _0x31c08a, _0x20c282, _0x16bee7) {
  if (_0x16bee7 === "stretch" || _0x31c08a <= 0 || _0x20c282 <= 0)
    return { left: 0, top: 0, width: _0x4e39a9, height: _0x202362 };
  let _0x304cee =
      _0x16bee7 === "contain"
        ? Math.min(_0x4e39a9 / _0x31c08a, _0x202362 / _0x20c282)
        : Math.max(_0x4e39a9 / _0x31c08a, _0x202362 / _0x20c282),
    _0x4def81 = _0x31c08a * _0x304cee,
    _0x48e344 = _0x20c282 * _0x304cee;
  return {
    left: (_0x4e39a9 - _0x4def81) / 2,
    top: (_0x202362 - _0x48e344) / 2,
    width: _0x4def81,
    height: _0x48e344,
  };
}
var x = class {
  constructor() {
    g(this, "_transformers", new Set());
  }
  register(_0x3a5ff1) {
    return (
      this._transformers["add"](_0x3a5ff1),
      (0, e.toDisposable)(() => this._transformers["delete"](_0x3a5ff1))
    );
  }
  transform(_0x305ba6, _0x2e5c4f) {
    return Array.from(this._transformers).reduce(
      (_0x47de66, _0x5b432f) => _0x5b432f(_0x47de66, _0x2e5c4f),
      _0x305ba6,
    );
  }
};
function S(_0x4db736, _0x594905) {
  return function (_0x5dd123, _0x37e65c) {
    _0x594905(_0x5dd123, _0x37e65c, _0x4db736);
  };
}
function C(_0x233e13, _0xa1e593, _0x50304e, _0xc6c7b) {
  var _0x3ae40d = arguments.length,
    _0x4fbda0 =
      _0x3ae40d < 3
        ? _0xa1e593
        : _0xc6c7b === null
          ? (_0xc6c7b = Object.getOwnPropertyDescriptor(_0xa1e593, _0x50304e))
          : _0xc6c7b,
    _0x3806e8;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4fbda0 = Reflect.decorate(_0x233e13, _0xa1e593, _0x50304e, _0xc6c7b);
  else {
    for (var _0x17eab4 = _0x233e13.length - 1; _0x17eab4 >= 0; _0x17eab4--)
      (_0x3806e8 = _0x233e13[_0x17eab4]) &&
        (_0x4fbda0 =
          (_0x3ae40d < 3
            ? _0x3806e8(_0x4fbda0)
            : _0x3ae40d > 3
              ? _0x3806e8(_0xa1e593, _0x50304e, _0x4fbda0)
              : _0x3806e8(_0xa1e593, _0x50304e)) || _0x4fbda0);
  }
  return (
    _0x3ae40d > 3 &&
      _0x4fbda0 &&
      Object.defineProperty(_0xa1e593, _0x50304e, _0x4fbda0),
    _0x4fbda0
  );
}
const w = 16384,
  T = 5000;
let E = class extends e.Disposable {
  constructor(
    _0x517c8f,
    _0x3135a6,
    _0x7b29a1,
    _0x491ace,
    _0x2a8742,
    _0x4a81ae,
    _0x45a2a7,
    _0x4ae201,
    _0x263d63,
    _0x495ebb,
    _0x525e91,
    _0x4dedd1,
    _0x275e3a,
  ) {
    (super(),
      (this._commandService = _0x517c8f),
      (this._univerInstanceService = _0x3135a6),
      (this._printPreparationService = _0x7b29a1),
      (this._boardElementService = _0x491ace),
      (this._shapeHostAdapterRegistry = _0x2a8742),
      (this._shapeFormulaService = _0x4a81ae),
      (this._configService = _0x45a2a7),
      (this._imageIoService = _0x4ae201),
      (this._localeService = _0x263d63),
      (this._themeService = _0x495ebb),
      (this._canvasColorService = _0x525e91),
      (this._compositionService = _0x4dedd1),
      (this._localFileService = _0x275e3a),
      g(this, "_preparing$", new l["BehaviorSubject"](null)),
      g(this, "preparing$", this._preparing$["asObservable"]()));
  }
  async print(_0x514a2c, _0x3e63e7) {
    if (this._preparing$["getValue"]()) return false;
    this._preparing$["next"]("print");
    let _0x466f71 = A();
    if (!_0x466f71) return (this._preparing$["next"](null), false);
    let _0xdeb0b;
    try {
      let _0x27ccc9 = await this._createCanvasView(
        _0x514a2c,
        _0x3e63e7,
        "print",
        _0x466f71.document,
      );
      if (!_0x27ccc9) return false;
      _0xdeb0b = _0x27ccc9;
      let _0x14771d = _0x466f71.document["createElement"]("style");
      return (
        (_0x14771d.textContent = j(_0xdeb0b.width, _0xdeb0b.height)),
        _0x466f71.document["head"].appendChild(_0x14771d),
        _0x466f71.document["body"].appendChild(_0xdeb0b.container),
        await M(_0x466f71, () => _0x27ccc9.render())
      );
    } finally {
      (_0xdeb0b == null || _0xdeb0b.dispose(),
        _0x466f71.frame["remove"](),
        this._preparing$["next"](null));
    }
  }
  async exportImage(_0x2c20af, _0x5cb12f, _0x12d053) {
    if (this._preparing$["getValue"]()) return false;
    this._preparing$["next"]("image");
    let _0x1cc324;
    try {
      let _0x51650b = await this._createCanvasView(
        _0x2c20af,
        _0x5cb12f,
        _0x12d053,
        document,
      );
      if (!_0x51650b) return false;
      ((_0x1cc324 = _0x51650b), _0x1cc324.render());
      let _0x1ed3a5 = _0x12d053 === "png" ? "image/png" : "image/jpeg",
        _0x5bcdaa = await P(
          _0x1cc324.canvas,
          _0x1ed3a5,
          _0x12d053 === "jpeg" ? 0.92 : undefined,
        );
      return _0x5bcdaa
        ? (this._localFileService["downloadFile"](
            _0x5bcdaa,
            F(this._getBoardModel(_0x2c20af), _0x12d053),
          ),
          true)
        : false;
    } finally {
      (_0x1cc324 == null || _0x1cc324.dispose(),
        this._preparing$["next"](null));
    }
  }
  dispose() {
    (this._preparing$["complete"](), super.dispose());
  }
  async _createCanvasView(_0x3f822f, _0x221647, _0x88e89, _0x8e124a) {
    let _0x1d4959 = this._getBoardModel(_0x3f822f);
    if (!_0x1d4959 || _0x1d4959.getActivePageId() !== _0x221647) return false;
    let _0x485c98 = await this._resolveBounds(_0x3f822f, _0x221647);
    if (!_0x485c98) return false;
    let _0x64fb12 = O(
      _0x485c98,
      _0x88e89 === "print"
        ? 1
        : Math.max(1, Math.min(globalThis.devicePixelRatio || 1, 2)),
    );
    if (!_0x64fb12) return false;
    (await this._printPreparationService["prepare"]({
      unitId: _0x3f822f,
      unitType: e.UniverInstanceType["UNIVER_BOARD"],
      dpr: _0x64fb12.pixelRatio,
    }),
      await this._waitForFormulaShapes(_0x3f822f));
    let _0x5537a6 = this._compositionService["transform"](
        {
          data: this._boardElementService["getElementData"](
            _0x3f822f,
            _0x221647,
          ),
          order: this._boardElementService["getElementOrder"](
            _0x3f822f,
            _0x221647,
          ),
        },
        { boardModel: _0x1d4959, subUnitId: _0x221647 },
      ),
      _0x482207 = _0x5537a6.data,
      _0x128dc1 = _0x5537a6.order;
    return (
      await this._preloadElementImages(_0x482207),
      new _(
        {
          ...awaitthis._resolveBackground(_0x1d4959, _0x221647, _0x88e89),
          bounds: _0x485c98,
          canvasColorService: this._canvasColorService,
          elementData: _0x482207,
          elementOrder: _0x128dc1,
          imageIoService: this._imageIoService,
          localeService: this._localeService,
          pixelRatio: _0x64fb12.pixelRatio,
          renderAdapters: (0, i.resolveBoardRenderAdapters)(
            this._configService["getConfig"](i.BOARDS_UI_PLUGIN_CONFIG_KEY) ??
              undefined,
          ),
          renderMode:
            _0x88e89 === "print"
              ? c.CanvasRenderMode["Printing"]
              : c.CanvasRenderMode["Rendering"],
          resolveFormulaPresentation: (_0x46aba7) =>
            this._resolveFormulaPresentation(_0x3f822f, _0x221647, _0x46aba7),
          scale: _0x64fb12.scale,
          themeData: _0x1d4959.getThemeData(),
          unitId: _0x3f822f,
        },
        _0x8e124a,
      )
    );
  }
  async _resolveBounds(_0x187ef0, _0x32a3a9) {
    let _0x50705f = await this._commandService["executeCommand"](
      r.ResolveBoardCaptureBoundsCommand["id"],
      { unitId: _0x187ef0, subUnitId: _0x32a3a9, padding: 32 },
    );
    return _0x50705f && _0x50705f.ok ? _0x50705f.bounds : false;
  }
  _getBoardModel(_0x387754) {
    return (
      this._univerInstanceService["getUnit"](
        _0x387754,
        e.UniverInstanceType["UNIVER_BOARD"],
      ) ?? undefined
    );
  }
  async _waitForFormulaShapes(_0x1a8dc4) {
    var _0x3b35d3;
    let _0x3f320e = this._shapeHostAdapterRegistry["get"](
        e.UniverInstanceType["UNIVER_BOARD"],
      ),
      _0x5c1bd7 = (
        (_0x3f320e == null || (_0x3b35d3 = _0x3f320e.listShapesInUnit) == null
          ? undefined
          : _0x3b35d3.call(_0x3f320e, _0x1a8dc4)) ?? []
      ).filter((_0x16acec) => {
        var _0x35cdc5;
        return (_0x35cdc5 = _0x16acec.shapeData["formulaBinding"]) == null
          ? undefined
          : _0x35cdc5.formula["trim"]();
      });
    if (_0x5c1bd7.length === 0) return;
    let _0x223b22 = Date.now() + T;
    for (; Date.now() < _0x223b22;) {
      if (
        _0x5c1bd7.every((_0x4869eb) => {
          let _0x3ba564 = this._shapeFormulaService["getResult"](_0x4869eb);
          return (
            _0x3ba564 &&
            _0x3ba564.status !== s.FormulaShapeResultStatus["PENDING"]
          );
        })
      )
        return;
      await I();
    }
    throw Error(
      "Board output timed out while resolving formula shapes for " + _0x1a8dc4,
    );
  }
  _resolveFormulaPresentation(_0x2c3c1c, _0x587da9, _0x16fa34) {
    return k(_0x16fa34)
      ? this._shapeFormulaService["getPresentation"]({
          unitId: _0x2c3c1c,
          subUnitId: _0x587da9,
          shapeId: _0x16fa34.elementId,
        })
      : undefined;
  }
  async _preloadElementImages(_0x5e796c) {
    let _0x3ba931 = Object.values(_0x5e796c).flatMap((_0x3191d1) => {
      let _0xfda09 = _0x3191d1.element;
      if (_0xfda09.visible === false) return [];
      if (_0xfda09.type === r.BoardElementType["Image"])
        return [
          this._loadImageSource(
            _0xfda09.source,
            _0xfda09.imageSourceType ?? e.ImageSourceType["URL"],
          ),
        ];
      let _0x351e2a =
        _0xfda09.type === r.BoardElementType["Shape"]
          ? _0xfda09.shapeData["fill"]
          : _0xfda09.type === r.BoardElementType["Container"]
            ? _0xfda09.containerData["shapeData"].fill
            : undefined;
      return _0x351e2a != null && _0x351e2a.fillImageSource
        ? [
            this._loadImageSource(
              _0x351e2a.fillImageSource,
              _0x351e2a.fillImageSourceType ?? e.ImageSourceType["URL"],
            ),
          ]
        : [];
    });
    (await Promise.all(_0x3ba931), await document.fonts["ready"]);
  }
  async _resolveBackground(_0x16d3c3, _0x23119a, _0x5d5dda) {
    var _0x431f22;
    let _0x3c29fc = D(_0x16d3c3, _0x5d5dda);
    if (_0x3c29fc === "transparent") return {};
    let _0x1fa0e0 = this._themeService["getColorFromTheme"](
      this._themeService["darkMode"] ? "gray.1000" : "gray.0",
    );
    if (_0x3c29fc === "white")
      return _0x5d5dda === "print" ? {} : { backgroundColor: _0x1fa0e0 };
    let _0x18b692 =
      (_0x431f22 = _0x16d3c3.getPage(_0x23119a)) == null
        ? undefined
        : _0x431f22.background;
    if (
      (_0x18b692 == null ? undefined : _0x18b692.type) ===
      r.BoardBackgroundType["Solid"]
    )
      return { backgroundColor: _0x18b692.color };
    if (
      (_0x18b692 == null ? undefined : _0x18b692.type) ===
      r.BoardBackgroundType["Image"]
    ) {
      let _0x15eafe = await this._loadImageSource(
        _0x18b692.source,
        _0x18b692.imageSourceType ?? e.ImageSourceType["URL"],
      );
      return {
        backgroundColor: _0x1fa0e0,
        backgroundImage: _0x15eafe
          ? { fit: _0x18b692.fit ?? "cover", image: _0x15eafe }
          : undefined,
      };
    }
    return {
      backgroundColor: this._themeService["getColorFromTheme"]("gray.50"),
    };
  }
  async _loadImageSource(_0x288ae8, _0x5ae177) {
    let _0x5555da = this._imageIoService["getImageSourceCache"](
      _0x288ae8,
      _0x5ae177,
    );
    if (_0x5555da) return await N(_0x5555da);
    let _0x1d0e36 =
      _0x5ae177 === e.ImageSourceType["UUID"]
        ? await this._imageIoService["getImage"](_0x288ae8)
        : _0x288ae8;
    if (!_0x1d0e36) return null;
    let _0x196496 = document.createElement("img");
    ((_0x196496.crossOrigin = "anonymous"), (_0x196496.src = _0x1d0e36));
    let _0x4b412e = await N(_0x196496);
    return (
      _0x4b412e &&
        this._imageIoService["addImageSourceCache"](
          _0x288ae8,
          _0x5ae177,
          _0x4b412e,
        ),
      _0x4b412e
    );
  }
};
E = C(
  [
    S(0, e.ICommandService),
    S(1, e.IUniverInstanceService),
    S(2, o.IPrintPreparationService),
    S(3, (0, e.Inject)(r.IBoardElementService)),
    S(4, (0, e.Inject)(a.IShapeHostAdapterRegistry)),
    S(5, (0, e.Inject)(s.ShapeFormulaService)),
    S(6, e.IConfigService),
    S(7, e.IImageIoService),
    S(8, (0, e.Inject)(e.LocaleService)),
    S(9, (0, e.Inject)(e.ThemeService)),
    S(10, c.ICanvasColorService),
    S(11, (0, e.Inject)(x)),
    S(12, n.ILocalFileService),
  ],
  E,
);
function D(_0x3c0f0d, _0x1e850c) {
  let _0x15cf16 = _0x3c0f0d.getActivePage().background;
  return _0x15cf16 && _0x15cf16.type !== r.BoardBackgroundType["None"]
    ? "scene"
    : _0x1e850c === "png"
      ? "transparent"
      : "white";
}
function O(_0x104093, _0x1f7f64) {
  if (_0x104093.width <= 0 || _0x104093.height <= 0 || _0x1f7f64 <= 0)
    return null;
  let _0x3dfac0 = Math.min(
    1,
    w / (_0x104093.width * _0x1f7f64),
    w / (_0x104093.height * _0x1f7f64),
    Math.sqrt(
      24000000 / (_0x104093.width * _0x104093.height * _0x1f7f64 * _0x1f7f64),
    ),
  );
  return Number.isFinite(_0x3dfac0) && _0x3dfac0 > 0
    ? { pixelRatio: _0x1f7f64, scale: _0x3dfac0 }
    : null;
}
function k(_0x5d8c80) {
  if (_0x5d8c80.element["type"] === r.BoardElementType["Shape"])
    return _0x5d8c80.element["shapeData"].formulaBinding;
  if (_0x5d8c80.element["type"] === r.BoardElementType["Container"])
    return _0x5d8c80.element["containerData"].shapeData["formulaBinding"];
}
function A() {
  let _0x52f122 = document.createElement("iframe");
  (_0x52f122.setAttribute("aria-hidden", "true"),
    _0x52f122.setAttribute("data-univer-boards-print-frame", "true"),
    (_0x52f122.style["position"] = "fixed"),
    (_0x52f122.style["left"] = "-10000px"),
    (_0x52f122.style["top"] = "0"),
    (_0x52f122.style["width"] = "1px"),
    (_0x52f122.style["height"] = "1px"),
    (_0x52f122.style["border"] = "0"),
    (_0x52f122.style["pointerEvents"] = "none"),
    document.body["appendChild"](_0x52f122));
  let _0x29ec08 = _0x52f122.contentWindow,
    _0x576bc4 =
      _0x52f122.contentDocument ??
      (_0x29ec08 == null ? undefined : _0x29ec08.document);
  return !_0x29ec08 || !_0x576bc4
    ? (_0x52f122.remove(), null)
    : (_0x576bc4.open(),
      _0x576bc4.write("<!doctype html><html><head></head><body></body></html>"),
      _0x576bc4.close(),
      { frame: _0x52f122, document: _0x576bc4, window: _0x29ec08 });
}
function j(_0x5305db, _0x33c58e) {
  return (
    "\n html, body {\n margin: 0;\n padding: 0;\n width: " +
    _0x5305db +
    "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20" +
    _0x33c58e +
    "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@page\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20size:\x20" +
    _0x5305db +
    "px " +
    _0x33c58e +
    "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20[data-univer-board-print-page]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20" +
    _0x5305db +
    "px;\n height: " +
    _0x33c58e +
    "px;\n overflow: hidden;\n break-after: auto;\n page-break-after: auto;\n }\n "
  );
}
function M(_0x13022f, _0x42d1bb) {
  return new Promise((_0x1e73d6) => {
    let _0x21f255 = _0x13022f.window["onbeforeprint"],
      _0x2ad7e6 = _0x13022f.window["onafterprint"],
      _0x43d90b = false,
      _0x3b8a7b = (_0x11a8b5) => {
        _0x43d90b ||
          ((_0x43d90b = true),
          (_0x13022f.window["onbeforeprint"] = _0x21f255),
          (_0x13022f.window["onafterprint"] = _0x2ad7e6),
          _0x1e73d6(_0x11a8b5));
      };
    ((_0x13022f.window["onbeforeprint"] = (_0x7debee) => {
      (_0x21f255 == null || _0x21f255.call(_0x13022f.window, _0x7debee),
        _0x42d1bb());
    }),
      (_0x13022f.window["onafterprint"] = (_0x5e38ca) => {
        (_0x2ad7e6 == null || _0x2ad7e6.call(_0x13022f.window, _0x5e38ca),
          _0x3b8a7b(true));
      }),
      globalThis.setTimeout(() => {
        try {
          (_0x13022f.window["focus"](), _0x13022f.window["print"]());
        } catch {
          _0x3b8a7b(false);
        }
      }, 100));
  });
}
function N(_0x3148ee) {
  return _0x3148ee.complete
    ? Promise.resolve(
        _0x3148ee.naturalWidth > 0 && _0x3148ee.naturalHeight > 0
          ? _0x3148ee
          : null,
      )
    : new Promise((_0x51d7de) => {
        let _0x1d08e3;
        function _0x2f3e3f(_0x2b0ef5) {
          (_0x1d08e3 !== undefined && globalThis.clearTimeout(_0x1d08e3),
            _0x3148ee.removeEventListener("load", _0x598aa9),
            _0x3148ee.removeEventListener("error", _0x1397c3),
            _0x51d7de(_0x2b0ef5));
        }
        function _0x598aa9() {
          _0x2f3e3f(_0x3148ee);
        }
        function _0x1397c3() {
          _0x2f3e3f(null);
        }
        ((_0x1d08e3 = globalThis.setTimeout(() => _0x2f3e3f(null), T)),
          _0x3148ee.addEventListener("load", _0x598aa9),
          _0x3148ee.addEventListener("error", _0x1397c3));
      });
}
function P(_0x46038f, _0x5bc0a3, _0x48e9ef) {
  return new Promise((_0x19ee03) =>
    _0x46038f.toBlob(_0x19ee03, _0x5bc0a3, _0x48e9ef),
  );
}
function F(_0x3e4e1a, _0x928fe3) {
  var _0x53a31b;
  return (
    (
      (_0x3e4e1a == null || (_0x53a31b = _0x3e4e1a.getSnapshot().name) == null
        ? undefined
        : _0x53a31b.trim()) || "board"
    ).replace(/[\\/:*?"<>|]/g, "-") +
    "." +
    _0x928fe3
  );
}
function I() {
  return (0, e.delayAnimationFrame)();
}
const L = {
    id: "boards-print.operation.print",
    type: e.CommandType["OPERATION"],
    handler: async (_0x4ae61e) => {
      let _0x2da2c7 = _0x4ae61e
        .get(e.IUniverInstanceService)
        .getCurrentUnitOfType(e.UniverInstanceType["UNIVER_BOARD"]);
      if (!_0x2da2c7) return false;
      try {
        let _0x124ca7 = await _0x4ae61e
          .get(E)
          .print(_0x2da2c7.getUnitId(), _0x2da2c7.getActivePageId());
        return (
          _0x124ca7 ||
            _0x4ae61e
              .get(n.IMessageService)
              .show({
                type: t.MessageType["Error"],
                content: _0x4ae61e
                  .get(e.LocaleService)
                  .t("boards-print.errors.printFailed"),
              }),
          _0x124ca7
        );
      } catch {
        return (
          _0x4ae61e
            .get(n.IMessageService)
            .show({
              type: t.MessageType["Error"],
              content: _0x4ae61e
                .get(e.LocaleService)
                .t("boards-print.errors.printFailed"),
            }),
          false
        );
      }
    },
  },
  R = {
    id: "boards-print.operation.export-image",
    type: e.CommandType["OPERATION"],
    handler: async (_0x4360f6, _0x15c927) => {
      if (
        (_0x15c927 == null ? undefined : _0x15c927.format) !== "png" &&
        (_0x15c927 == null ? undefined : _0x15c927.format) !== "jpeg"
      )
        return false;
      let _0x7f9d59 = _0x4360f6
        .get(e.IUniverInstanceService)
        .getCurrentUnitOfType(e.UniverInstanceType["UNIVER_BOARD"]);
      if (!_0x7f9d59) return false;
      try {
        let _0x53bfcf = await _0x4360f6
          .get(E)
          .exportImage(
            _0x7f9d59.getUnitId(),
            _0x7f9d59.getActivePageId(),
            _0x15c927.format,
          );
        return (
          _0x53bfcf ||
            _0x4360f6
              .get(n.IMessageService)
              .show({
                type: t.MessageType["Error"],
                content: _0x4360f6
                  .get(e.LocaleService)
                  .t("boards-print.errors.exportFailed"),
              }),
          _0x53bfcf
        );
      } catch {
        return (
          _0x4360f6
            .get(n.IMessageService)
            .show({
              type: t.MessageType["Error"],
              content: _0x4360f6
                .get(e.LocaleService)
                .t("boards-print.errors.exportFailed"),
            }),
          false
        );
      }
    },
  },
  z = "boards-print.config",
  B = {};
var V = "@univerjs-pro/boards-print",
  H = "1.0.0-insiders.20260907-70fc579";
function U() {
  let _0x39d36b = (0, n.useDependency)(e.LocaleService),
    _0x1b6cb1 = (0, n.useObservable)(
      (0, n.useDependency)(E).preparing$,
      null,
      true,
    );
  if (!_0x1b6cb1) return null;
  let _0x98c467 = _0x39d36b.t(
    _0x1b6cb1 === "print"
      ? "boards-print.loading.print"
      : "boards-print.loading.image",
  );
  return (0, f.jsx)("div", {
    "data-u-comp": "boards-printing-mask",
    "aria-busy": "true",
    "aria-label": _0x98c467,
    className:
      "univer-fixed\x20univer-inset-0\x20univer-z-[1000]\x20univer-flex\x20univer-cursor-wait\x20univer-items-center\x20univer-justify-center\x20univer-bg-gray-100\x20dark:!univer-bg-gray-900",
    children: (0, f.jsxs)("div", {
      role: "status",
      "aria-live": "polite",
      className:
        "univer-flex univer-items-center univer-gap-3 univer-rounded-lg univer-bg-gray-0 univer-px-5 univer-py-4 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-bg-gray-700 dark:!univer-text-gray-0",
      children: [
        (0, f.jsx)(d.LoadingMultiIcon, {
          className:
            "univer-size-6\x20univer-animate-spin\x20univer-text-gray-500",
        }),
        (0, f.jsx)("span", { children: _0x98c467 }),
      ],
    }),
  });
}
let W = class extends e.Disposable {
  constructor(_0x2251df, _0x36f5cd, _0xf3d841, _0x2a2786, _0x2c235a) {
    (super(),
      (this._commandService = _0x2251df),
      (this._localeService = _0x36f5cd),
      (this._settingsMenuContributionService = _0xf3d841),
      (this._uiPartsService = _0x2a2786),
      (this._injector = _0x2c235a),
      this.disposeWithMe(this._commandService["registerCommand"](L)),
      this.disposeWithMe(this._commandService["registerCommand"](R)),
      this.disposeWithMe(
        this._settingsMenuContributionService["register"]({
          id: "boards-print.settings.print",
          icon: d.PrintIcon,
          label: () => this._localeService["t"]("boards-print.menu.print"),
          order: 100,
          group: "output",
          onClick: async (_0x3c48c0) => {
            await _0x3c48c0.executeCommand(L.id);
          },
        }),
      ),
      this.disposeWithMe(
        this._settingsMenuContributionService["register"]({
          id: "boards-print.settings.export-png",
          icon: d.DownloadImageIcon,
          label: () => this._localeService["t"]("boards-print.menu.exportPng"),
          order: 200,
          group: "output",
          submenu: i.BoardSettingsMenuContributionSubmenu["SaveAs"],
          onClick: async (_0x26f17f) => {
            await _0x26f17f.executeCommand(R.id, { format: "png" });
          },
        }),
      ),
      this.disposeWithMe(
        this._settingsMenuContributionService["register"]({
          id: "boards-print.settings.export-jpeg",
          icon: d.DownloadImageIcon,
          label: () => this._localeService["t"]("boards-print.menu.exportJpeg"),
          order: 300,
          group: "output",
          submenu: i.BoardSettingsMenuContributionSubmenu["SaveAs"],
          onClick: async (_0x3dd22e) => {
            await _0x3dd22e.executeCommand(R.id, { format: "jpeg" });
          },
        }),
      ),
      this.disposeWithMe(
        this._uiPartsService["registerComponent"](
          n.BuiltInUIPart["GLOBAL"],
          () => (0, n.connectInjector)(U, this._injector),
        ),
      ));
  }
};
W = C(
  [
    S(0, e.ICommandService),
    S(1, (0, e.Inject)(e.LocaleService)),
    S(2, (0, e.Inject)(i.IBoardSettingsMenuContributionService)),
    S(3, n.IUIPartsService),
    S(4, (0, e.Inject)(e.Injector)),
  ],
  W,
);
const G = "UNIVER_BOARDS_PRINT_PLUGIN";
let K = class extends e.Plugin {
  constructor(_0x4dc4ef = B, _0x467d4f, _0x306606) {
    (super(),
      (this._config = _0x4dc4ef),
      (this._injector = _0x467d4f),
      (this._configService = _0x306606));
    let { menu: _0x1f3ba0, ..._0x307923 } = (0, e.merge)({}, B, this._config);
    (_0x1f3ba0 &&
      this._configService["setConfig"]("menu", _0x1f3ba0, { merge: true }),
      this._configService["setConfig"](z, _0x307923));
  }
  onStarting() {
    (this._injector["has"](o.IPrintPreparationService) ||
      this._injector["add"]([
        o.IPrintPreparationService,
        { useClass: o.PrintPreparationService },
      ]),
      this._injector["has"](x) || this._injector["add"]([x]),
      (0, e.registerDependencies)(this._injector, [[E], [W]]));
  }
  onReady() {
    this._injector["get"](W);
  }
};
(g(K, "pluginName", G),
  g(K, "packageName", V),
  g(K, "version", H),
  g(K, "type", e.UniverInstanceType["UNIVER_BOARD"]),
  (K = C(
    [
      (0, e.DependentOn)(
        u.UniverLicensePlugin,
        r.UniverBoardsPlugin,
        i.UniverBoardsUIPlugin,
      ),
      S(1, (0, e.Inject)(e.Injector)),
      S(2, e.IConfigService),
    ],
    K,
  )),
  (exports.BOARDS_PRINT_PLUGIN_CONFIG_KEY = z),
  (exports.BOARDS_PRINT_PLUGIN_NAME = G),
  (exports.BoardPrintCompositionService = x),
  (exports.ExportBoardImageOperation = R),
  (exports.PrintBoardOperation = L),
  Object.defineProperty(exports, "UniverBoardsPrintPlugin", {
    enumerable: true,
    get: function () {
      return K;
    },
  }));
