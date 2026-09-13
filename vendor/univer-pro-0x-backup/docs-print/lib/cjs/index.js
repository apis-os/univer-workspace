Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/ui"),
  t = require("@univerjs/core"),
  n = require("@univerjs/engine-render"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs-pro/print"),
  a = require("@univerjs/docs"),
  o = require("@univerjs/docs-ui"),
  s = require("rxjs"),
  c = require("@univerjs/icons"),
  l = require("react/jsx-runtime");
function u(_0x5df6a9, _0x27f3be, _0x104f99) {
  if (!(_0x5df6a9 > 0) || !(_0x27f3be > 0)) return [];
  let _0x41a7cb = _0x104f99
      .filter(
        ({ top: _0x363ab1, bottom: _0x142a78 }) =>
          Number.isFinite(_0x363ab1) &&
          Number.isFinite(_0x142a78) &&
          _0x142a78 > _0x363ab1,
      )
      .sort((_0xbc1d5c, _0x26664e) => _0xbc1d5c.top - _0x26664e.top),
    _0x5b6a7e = [],
    _0xa307b4 = 0,
    _0x50220b = 0;
  for (; _0x50220b < _0x5df6a9;) {
    var _0x45c704;
    let _0x2a5668 = Math.min(_0x5df6a9, _0x50220b + _0x27f3be);
    for (
      ;
      ((_0x45c704 = _0x41a7cb[_0xa307b4]) == null
        ? undefined
        : _0x45c704.top) <= _0x50220b;
    )
      _0xa307b4++;
    let _0x1866b0 = _0x2a5668;
    for (let _0x5546cd = _0xa307b4; _0x5546cd < _0x41a7cb.length; _0x5546cd++) {
      let _0xba48d5 = _0x41a7cb[_0x5546cd];
      if (_0xba48d5.top >= _0x2a5668) break;
      if (_0xba48d5.bottom > _0x2a5668) {
        _0x1866b0 = _0xba48d5.top;
        break;
      }
    }
    (_0x5b6a7e.push({ top: _0x50220b, bottom: _0x1866b0 }),
      (_0x50220b = _0x1866b0));
  }
  return _0x5b6a7e;
}
function d(_0x281942) {
  "@babel/helpers - typeof";
  return (
    (d =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x537a7d) {
            return typeof _0x537a7d;
          }
        : function (_0x416e65) {
            return _0x416e65 &&
              typeof Symbol == "function" &&
              _0x416e65.constructor === Symbol &&
              _0x416e65 !== Symbol.prototype
              ? "symbol"
              : typeof _0x416e65;
          }),
    d(_0x281942)
  );
}
function f(_0x55541b, _0x591dad) {
  if (d(_0x55541b) != "object" || !_0x55541b) return _0x55541b;
  var _0x410f9c = _0x55541b[Symbol.toPrimitive];
  if (_0x410f9c !== undefined) {
    var _0x2259a7 = _0x410f9c.call(_0x55541b, _0x591dad || "default");
    if (d(_0x2259a7) != "object") return _0x2259a7;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x591dad === "string" ? String : Number)(_0x55541b);
}
function p(_0x1f0d44) {
  var _0x557655 = f(_0x1f0d44, "string");
  return d(_0x557655) == "symbol" ? _0x557655 : _0x557655 + "";
}
function m(_0x51a6fd, _0x56f5fb, _0x1a011d) {
  return (
    (_0x56f5fb = p(_0x56f5fb)) in _0x51a6fd
      ? Object.defineProperty(_0x51a6fd, _0x56f5fb, {
          value: _0x1a011d,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x51a6fd[_0x56f5fb] = _0x1a011d),
    _0x51a6fd
  );
}
var h = class extends t.Disposable {
  get container() {
    return this._container;
  }
  get root() {
    return this._root;
  }
  get _currentRender() {
    let _0x1ab1b8 = this._injector["get"](
      n.IRenderManagerService,
    ).getRenderUnitById(this._unitId);
    if (!_0x1ab1b8) throw Error("Render\x20is\x20not\x20found");
    return _0x1ab1b8;
  }
  get _skeleton() {
    return this._currentRender["with"](
      a.DocSkeletonManagerService,
    ).getSkeleton();
  }
  get _skeletonData() {
    let _0x1649a4 = this._skeleton["getSkeletonData"]();
    if (!_0x1649a4) throw Error("Skeleton data is not found");
    return _0x1649a4;
  }
  constructor(
    _0x9e2c05,
    _0x14e65d,
    _0x2858cd,
    _0x54bb51,
    _0x2157c5,
    _0x269f8a = 1,
    _0x9acc3f,
  ) {
    (super(),
      (this._injector = _0x9e2c05),
      (this._unitId = _0x14e65d),
      (this._offsetConfig = _0x2858cd),
      (this._paperSize = _0x54bb51),
      (this._layout = _0x2157c5),
      (this._pixelRatio = _0x269f8a),
      (this._pageIndex = _0x9acc3f),
      m(this, "_container", document.createElement("div")),
      m(this, "_root", document.createElement("div")),
      m(this, "_engine", undefined),
      m(this, "_scene", undefined),
      m(this, "_key", undefined),
      m(this, "_documents", undefined),
      m(this, "_viewMain", undefined),
      m(this, "_effects", new t["DisposableCollection"]()),
      (this._key = (0, t.generateRandomId)(4)),
      this._initRenderer(),
      this.disposeWithMe({
        dispose: () => {
          (this._engine["dispose"](),
            this._scene["dispose"](),
            this._effects["dispose"]());
        },
      }));
  }
  _initRenderer() {
    ((this._engine = new n["Engine"]("", {
      elementWidth: this._paperSize["width"],
      elementHeight: this._paperSize["height"],
      dpr: this._pixelRatio,
      renderMode: n.CanvasRenderMode["Printing"],
    })),
      (this._scene = new n["Scene"](this._key, this._engine)),
      this._scene["scale"](1, 1),
      this._engine["mount"](this._container, false),
      this._engine["getCanvas"]()
        .getContext()
        .setId(this._key + "_" + (0, t.generateRandomId)(4)),
      this._addComponent(),
      this._addViewport());
  }
  _addComponent() {
    let {
        pageMarginLeft: _0x5625b3,
        pageMarginTop: _0x36e34a,
        docsLeft: _0x9fbd62,
        docsTop: _0x3b1eec,
      } = this._offsetConfig,
      _0x36b547 = { pageMarginLeft: _0x5625b3, pageMarginTop: _0x36e34a },
      _0x5843bc = new n["Documents"](
        "__DocPrintRender__",
        this._skeleton,
        _0x36b547,
      );
    (_0x5843bc.translate(_0x9fbd62, _0x3b1eec),
      this._scene["addObject"](_0x5843bc),
      (this._documents = _0x5843bc));
    let _0x2b9750 = this._injector["get"](o.DocPrintInterceptorService),
      _0xdbc067 = {
        unitId: this._unitId,
        pageIndex: this._pageIndex,
        scene: this._scene,
        engine: this._engine,
        root: this._root,
        documents: this._documents,
        skeleton: this._skeleton,
      };
    _0x2b9750.interceptor["fetchThroughInterceptors"](
      _0x2b9750.interceptor["getInterceptPoints"]().PRINTING_COMPONENT_COLLECT,
    )(undefined, _0xdbc067);
  }
  _addViewport() {
    this._viewMain = new n.Viewport(o.VIEWPORT_KEY["VIEW_MAIN"], this._scene, {
      explicitViewportWidthSet: true,
      explicitViewportHeightSet: true,
    });
  }
  prepare() {
    let _0x1e0ffc = this._layout;
    (this._viewMain["updateScrollVal"]({
      viewportScrollX: _0x1e0ffc.left,
      viewportScrollY: _0x1e0ffc.top,
    }),
      (this._root["style"].position = "absolute"),
      (this._root["style"].top = "0px"),
      (this._root["style"].left = "0px"),
      (this._root["style"].width = "100%"),
      (this._root["style"].height =
        Math.min(this._paperSize["height"], _0x1e0ffc.bottom - _0x1e0ffc.top) +
        "px"),
      (this._root["style"].overflow = "hidden"),
      (this._effects = new t["DisposableCollection"]()));
    let _0x386fc6 = this._injector["get"](o.DocPrintInterceptorService),
      _0x5e2dd2 = {
        unitId: this._unitId,
        pageIndex: this._pageIndex,
        scene: this._scene,
        engine: this._engine,
        root: this._root,
        skeleton: this._skeleton,
        offset: { x: _0x1e0ffc.left, y: _0x1e0ffc.top },
        bound: {
          top: _0x1e0ffc.top,
          left: _0x1e0ffc.left,
          right: _0x1e0ffc.right,
          bottom: _0x1e0ffc.bottom,
        },
      };
    _0x386fc6.interceptor["fetchThroughInterceptors"](
      _0x386fc6.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT,
    )(this._effects, _0x5e2dd2);
  }
  render() {
    let _0x55b1fa = this._engine["getCanvas"]().getContext();
    (this._documents["makeForceDirty"](),
      this._scene["makeDirty"](),
      _0x55b1fa.save(),
      this._scene["render"](),
      _0x55b1fa.restore());
    let _0x5d80ea = this._layout["bottom"] - this._layout["top"];
    _0x5d80ea < this._paperSize["height"] &&
      _0x55b1fa.clearRect(
        0,
        _0x5d80ea,
        this._paperSize["width"],
        this._paperSize["height"] - _0x5d80ea,
      );
  }
  async waitForReady(_0xcae86c = 10000) {
    await g();
    let _0x29758c = Date.now() + _0xcae86c;
    for (
      ;
      this._root["querySelector"]("[data-univer-print-resource-pending]") &&
      Date.now() < _0x29758c;
    )
      await _(16);
    let _0x11707d = Math.max(0, _0x29758c - Date.now());
    await Promise.all(
      Array.from(this._root["querySelectorAll"]("img"), (_0x584a26) =>
        v(_0x584a26, _0x11707d),
      ),
    );
  }
};
function g() {
  return _().then(() => _());
}
function _(_0xe74026 = 0) {
  return new Promise((_0x3de4f8) => setTimeout(_0x3de4f8, _0xe74026));
}
function v(_0x49dfd4, _0x2dabbe) {
  return _0x49dfd4.complete
    ? Promise.resolve()
    : new Promise((_0xe26c60) => {
        let _0x3056b1,
          _0x5e1686 = () => {
            (clearTimeout(_0x3056b1), _0xe26c60());
          };
        ((_0x3056b1 = setTimeout(_0x5e1686, _0x2dabbe)),
          _0x49dfd4.addEventListener("load", _0x5e1686, { once: true }),
          _0x49dfd4.addEventListener("error", _0x5e1686, { once: true }));
      });
}
function y(_0x56770c, _0x28fd04) {
  return function (_0xb6b4ef, _0x331231) {
    _0x28fd04(_0xb6b4ef, _0x331231, _0x56770c);
  };
}
function b(_0x6a62ed, _0x967259, _0x9dd81f, _0x167a8d) {
  var _0x47a007 = arguments.length,
    _0x3ba82d =
      _0x47a007 < 3
        ? _0x967259
        : _0x167a8d === null
          ? (_0x167a8d = Object.getOwnPropertyDescriptor(_0x967259, _0x9dd81f))
          : _0x167a8d,
    _0x4a5b15;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3ba82d = Reflect.decorate(_0x6a62ed, _0x967259, _0x9dd81f, _0x167a8d);
  else {
    for (var _0x5a280a = _0x6a62ed.length - 1; _0x5a280a >= 0; _0x5a280a--)
      (_0x4a5b15 = _0x6a62ed[_0x5a280a]) &&
        (_0x3ba82d =
          (_0x47a007 < 3
            ? _0x4a5b15(_0x3ba82d)
            : _0x47a007 > 3
              ? _0x4a5b15(_0x967259, _0x9dd81f, _0x3ba82d)
              : _0x4a5b15(_0x967259, _0x9dd81f)) || _0x3ba82d);
  }
  return (
    _0x47a007 > 3 &&
      _0x3ba82d &&
      Object.defineProperty(_0x967259, _0x9dd81f, _0x3ba82d),
    _0x3ba82d
  );
}
const x = Number.parseInt(1788764280),
  S = (_0x5946ec, _0x3adc27, _0x559899) => {
    let _0x45dede = { page: _0x5946ec, isPro: false, timeValid: false };
    if (!_0x3adc27 || !_0x559899) return _0x45dede;
    let _0x2b0ba8 = (0, r.getLicenseInfo)(_0x3adc27, _0x559899);
    if (_0x2b0ba8.valid) {
      let _0x5e2d88 = _0x2b0ba8.message,
        _0x555398 = (0, r.isFeatureAuthorizedWithinTime)(_0x5e2d88, "df", x);
      ((_0x45dede.isPro = _0x555398),
        (_0x45dede.timeValid = _0x555398),
        (_0x45dede.page = (0, r.getDocFeatureLimit)(
          _0x5e2d88,
          _0x555398,
          "mpn",
          _0x5946ec,
          _0x5946ec,
          0,
        )));
    }
    return _0x45dede;
  };
let C = class extends t.Disposable {
  constructor(
    _0xf70fc9,
    _0x4e7b95,
    _0x20c4bf,
    _0x1e3582,
    _0x388634,
    _0x5ceaf3,
  ) {
    (super(),
      (this._univerInstanceService = _0xf70fc9),
      (this._renderManagerService = _0x4e7b95),
      (this._injector = _0x20c4bf),
      (this._configService = _0x1e3582),
      (this._printPreparationService = _0x388634),
      (this._docPrintInterceptorService = _0x5ceaf3),
      m(this, "_preparing$", new s.BehaviorSubject(false)),
      m(this, "_activePrint", undefined),
      m(this, "preparing$", this._preparing$["asObservable"]()));
  }
  print(_0xd0e251) {
    if (this._activePrint) return this._activePrint;
    let _0x2480a3 = this._print(_0xd0e251).finally(() => {
      this._activePrint === _0x2480a3 && (this._activePrint = undefined);
    });
    return ((this._activePrint = _0x2480a3), _0x2480a3);
  }
  async _print(_0x4614f5) {
    var _0x22fffb;
    let _0x421b0e = T(this._configService),
      _0x52ec1d = this._univerInstanceService["getUnit"](
        _0x4614f5,
        t.UniverInstanceType["UNIVER_DOC"],
      );
    if (!_0x52ec1d) throw Error("DocumentDataModel is not found");
    let _0x2c993 = this._renderManagerService["getRenderUnitById"](_0x4614f5);
    if (!_0x2c993) throw Error("Render is not found");
    let _0x5197dd =
        (_0x22fffb = _0x2c993
          .with(a.DocSkeletonManagerService)
          .getSkeleton()
          .getSkeletonData()) == null
          ? undefined
          : _0x22fffb.pages,
      _0x1a3a14 = _0x5197dd == null ? undefined : _0x5197dd[0];
    if (!_0x5197dd || !_0x1a3a14) throw Error("Pages\x20are\x20not\x20found");
    let _0x203596 = F(_0x52ec1d.getDocumentStyle().pageSize, _0x1a3a14),
      _0x10cd7f = _0x2c993.mainComponent;
    if (!(_0x10cd7f instanceof n.Documents))
      throw TypeError("Document render component is not found");
    let _0xc5a2f7 = _0x10cd7f.getOffsetConfig();
    this._preparing$["next"](true);
    try {
      var _0x2f8691, _0x1be864;
      await N();
      let _0x24e924 = _0x52ec1d.getDocumentStyle().documentFlavor,
        _0x49c606 = D(_0x4614f5, _0x24e924);
      (await this._printPreparationService["prepare"](_0x49c606),
        await ((_0x2f8691 = (_0x1be864 = this._docPrintInterceptorService)
          .preparePrint) == null
          ? undefined
          : _0x2f8691.call(_0x1be864, {
              unitId: _0x4614f5,
              dpr: _0x49c606.dpr,
            })));
      let _0x2f3a3e = _0xc5a2f7.docsTop ?? 0,
        _0x2232c1 = O(
          _0x24e924,
          L(I(_0x5197dd), _0x2f3a3e, _0x49c606),
          _0x5197dd.length,
          _0x203596,
          _0xc5a2f7,
          _0x4614f5,
          _0x1a3a14,
          _0x49c606.pageBreakRanges,
        ).slice(0, _0x421b0e),
        _0x25fb6e = document.createElement("div");
      _0x25fb6e.className = i.PRINT_CONTAINER_CLASS;
      let _0x3d6bd4 = await k(
          _0x2232c1,
          this._injector,
          _0x4614f5,
          _0xc5a2f7,
          _0x203596,
          _0x25fb6e,
          _0x49c606.dpr,
        ),
        _0x2643aa = (0, i.createPrintStyle)(
          _0x203596.width,
          _0x203596.height,
          i.PrintDirection["Portrait"],
        );
      return (
        document.body["appendChild"](_0x2643aa),
        document.body["appendChild"](_0x25fb6e),
        await Promise.all(
          _0x3d6bd4.map((_0x568c0e) => _0x568c0e.waitForReady()),
        ),
        await w(_0x3d6bd4, _0x25fb6e, _0x2643aa, () =>
          this._preparing$["next"](false),
        )
      );
    } finally {
      this._preparing$["next"](false);
    }
  }
  dispose() {
    (this._preparing$["complete"](), super.dispose());
  }
};
C = b(
  [
    y(0, t.IUniverInstanceService),
    y(1, n.IRenderManagerService),
    y(2, (0, t.Inject)(t.Injector)),
    y(3, t.IConfigService),
    y(4, i.IPrintPreparationService),
    y(5, (0, t.Inject)(o.DocPrintInterceptorService)),
  ],
  C,
);
function w(_0x3eaa95, _0x588e98, _0x5ab811, _0x471bfc) {
  return new Promise((_0x2d395f, _0x54471c) => {
    let _0x40d14b = false,
      _0x116a2b = false,
      _0x8efbaf = () => {
        _0x116a2b ||
          ((_0x116a2b = true),
          _0x3eaa95.forEach((_0x1844c9) => _0x1844c9.render()));
      };
    function _0x598c5b() {
      return _0x40d14b
        ? false
        : ((_0x40d14b = true),
          window.removeEventListener("beforeprint", _0x8efbaf),
          window.removeEventListener("afterprint", _0x9825bb),
          _0x3eaa95.forEach((_0x39f732) => _0x39f732.dispose()),
          _0x588e98.remove(),
          _0x5ab811.remove(),
          true);
    }
    function _0x9825bb() {
      _0x598c5b() && _0x2d395f(true);
    }
    (window.addEventListener("beforeprint", _0x8efbaf),
      window.addEventListener("afterprint", _0x9825bb),
      _0x471bfc());
    try {
      window.print();
    } catch (_0x4b5641) {
      (_0x598c5b(), _0x54471c(_0x4b5641));
    }
  });
}
function T(_0x271f05) {
  let { ls: _0x375eea, pbk: _0x41c75f } =
    _0x271f05.getConfig(r.LS_CONFIG_KEY) ?? {};
  return (0, r.isLocalCheck)() ? 1 / 0 : S(1, _0x375eea, _0x41c75f).page;
}
function E(_0x17feb2) {
  return _0x17feb2 === t.DocumentFlavor["MODERN"] ? 2 : 1;
}
function D(_0x1ebdd3, _0x464390) {
  return {
    unitId: _0x1ebdd3,
    unitType: t.UniverInstanceType["UNIVER_DOC"],
    dpr: E(_0x464390),
  };
}
function O(
  _0xcc44d9,
  _0x445363,
  _0xf70542,
  _0x294faf,
  _0x57dc7b,
  _0x370594,
  _0x1f7551,
  _0xa23d23 = [],
) {
  let _0x242c83 = _0x57dc7b.docsTop ?? 0;
  return _0xcc44d9 === t.DocumentFlavor["MODERN"]
    ? A(
        Math.max(0, _0x445363 - _0x242c83),
        _0x294faf,
        _0x57dc7b,
        _0x370594,
        _0x1f7551,
        _0xa23d23,
      )
    : M(
        Math.max(_0xf70542, P(_0x445363, _0x294faf.height, _0x242c83)),
        _0x294faf,
        _0x57dc7b,
      );
}
async function k(
  _0x4c7c06,
  _0x260fe6,
  _0x25a88e,
  _0x48c530,
  _0x347006,
  _0x5561e9,
  _0x4a93bc,
) {
  let _0x76193c = [];
  try {
    for (let _0x37551e = 0; _0x37551e < _0x4c7c06.length; _0x37551e++) {
      let _0x5784b6 = new h(
        _0x260fe6,
        _0x25a88e,
        _0x48c530,
        _0x347006,
        _0x4c7c06[_0x37551e],
        _0x4a93bc,
        _0x37551e,
      );
      ((_0x5784b6.container["className"] = i.PRINT_CANVAS_CLASS),
        _0x5561e9.appendChild(_0x5784b6.container),
        _0x5784b6.container["appendChild"](_0x5784b6.root),
        _0x5784b6.prepare(),
        _0x76193c.push(_0x5784b6),
        (_0x37551e + 1) % 10 == 0 && (await N()));
    }
    return _0x76193c;
  } catch (_0x2e34ce) {
    throw (_0x76193c.forEach((_0x19aac2) => _0x19aac2.dispose()), _0x2e34ce);
  }
}
function A(
  _0x3c250,
  _0xfb0a4f,
  _0x25d42c,
  _0x491b04,
  _0x456c2f,
  _0x160254 = [],
) {
  let _0x523137 = _0x25d42c.docsTop ?? 0,
    _0x1464fa = _0x25d42c.docsLeft ?? 0,
    _0x541916 = new Set(
      _0x160254.flatMap(({ sourceId: _0x2732a8 }) =>
        _0x2732a8 ? [_0x2732a8] : [],
      ),
    ),
    _0x5bef90 = _0x160254.map(({ top: _0x1de613, bottom: _0x343866 }) => ({
      top: _0x1de613 - _0x523137,
      bottom: _0x343866 - _0x523137,
    })),
    _0x1fb733 = Array.from(
      _0x456c2f.skeDrawings["entries"](),
      ([_0x276643, _0x428801]) => ({
        drawingId: _0x276643,
        top: _0x456c2f.marginTop + _0x428801.aTop,
        bottom: _0x456c2f.marginTop + _0x428801.aTop + _0x428801.height,
        drawingType: _0x428801.drawingOrigin["drawingType"],
      }),
    ),
    _0xe83fa8 = _0x1fb733.filter(
      ({ top: _0xe580d6, bottom: _0x1561ab, drawingType: _0x551313 }) =>
        Number.isFinite(_0xe580d6) &&
        Number.isFinite(_0x1561ab) &&
        _0x1561ab > _0xe580d6 &&
        (_0x551313 === t.DrawingTypeEnum["DRAWING_IMAGE"] ||
          _0x551313 === t.DrawingTypeEnum["DRAWING_CHART"]),
    ),
    _0x5c498e = _0x1fb733.filter(
      ({
        drawingId: _0x28215d,
        top: _0x52fa8e,
        bottom: _0x3e8f25,
        drawingType: _0x4f5e0e,
      }) =>
        !_0x541916.has(_0x28215d) &&
        Number.isFinite(_0x52fa8e) &&
        Number.isFinite(_0x3e8f25) &&
        _0x3e8f25 > _0x52fa8e &&
        _0x3e8f25 - _0x52fa8e <= _0xfb0a4f.height &&
        (_0x4f5e0e === t.DrawingTypeEnum["DRAWING_IMAGE"] ||
          _0x4f5e0e === t.DrawingTypeEnum["DRAWING_CHART"] ||
          _0x4f5e0e === t.DrawingTypeEnum["DRAWING_DOM"]),
    );
  _0x5bef90.push(
    ..._0x5c498e.map(({ top: _0x453720, bottom: _0xcbf997 }) => ({
      top: _0x453720,
      bottom: _0xcbf997,
    })),
  );
  let _0xf595a5 = _0xe83fa8.reduce(
    (_0x1e5c6a, _0x349b47) => Math.max(_0x1e5c6a, _0x349b47.bottom),
    _0x3c250,
  );
  return (
    (0, n.documentSkeletonLineIterator)(
      [_0x456c2f],
      {
        docsLeft: _0x1464fa,
        pageMarginTop: _0x25d42c.pageMarginTop,
        unitId: _0x491b04,
      },
      ({ line: _0x439d59, sectionTop: _0x425406 }) => {
        let _0xdd4f3a = _0x425406 + _0x439d59.top,
          _0x341f69 = _0xdd4f3a + _0x439d59.lineHeight;
        Number.isFinite(_0xdd4f3a) &&
          Number.isFinite(_0x341f69) &&
          _0x341f69 > _0xdd4f3a &&
          _0x341f69 - _0xdd4f3a <= _0xfb0a4f.height &&
          (_0x5bef90.push({ top: _0xdd4f3a, bottom: _0x341f69 }),
          j(_0x439d59) && (_0xf595a5 = Math.max(_0xf595a5, _0x341f69)));
      },
    ),
    u(_0xf595a5, _0xfb0a4f.height, _0x5bef90).map((_0x1df4bd) => ({
      top: _0x523137 + _0x1df4bd.top,
      bottom: _0x523137 + _0x1df4bd.bottom,
      left: _0x1464fa,
      right: _0x1464fa + _0xfb0a4f.width,
    }))
  );
}
function j(_0x2ccf0e) {
  return _0x2ccf0e.bullet || _0x2ccf0e.tableId
    ? true
    : _0x2ccf0e.divides["some"]((_0x5ed741) =>
        _0x5ed741.glyphGroup["some"](
          ({ streamType: _0x28b0ed }) =>
            _0x28b0ed !== t.DataStreamTreeTokenType["PARAGRAPH"] &&
            _0x28b0ed !== t.DataStreamTreeTokenType["SECTION_BREAK"] &&
            _0x28b0ed !== t.DataStreamTreeTokenType["CUSTOM_BLOCK"] &&
            _0x28b0ed !== t.DataStreamTreeTokenType["DOCS_END"],
        ),
      );
}
function M(_0x11f8c2, _0x461bd8, _0x1f255e) {
  let _0x263208 = _0x1f255e.docsTop ?? 0,
    _0x39b18 = _0x1f255e.docsLeft ?? 0;
  return Array.from({ length: _0x11f8c2 }, (_0x296862, _0x2d2802) => ({
    top: _0x263208 + (_0x263208 + _0x461bd8.height) * _0x2d2802,
    bottom: _0x263208 + (_0x263208 + _0x461bd8.height) * (_0x2d2802 + 1),
    left: _0x39b18,
    right: _0x39b18 + _0x461bd8.width,
  }));
}
function N() {
  return new Promise((_0x3a8126) => globalThis.setTimeout(_0x3a8126, 0));
}
function P(_0x444021, _0x18f15c, _0x1cb8dc) {
  return _0x444021
    ? Math.ceil(Math.max(0, _0x444021 - _0x1cb8dc) / (_0x18f15c + _0x1cb8dc))
    : 0;
}
function F(_0x7f82e0, _0x2977aa) {
  let _0x52dde2 = R(
      _0x7f82e0 == null ? undefined : _0x7f82e0.width,
      _0x2977aa.pageWidth,
    ),
    _0x2931aa = R(
      _0x7f82e0 == null ? undefined : _0x7f82e0.height,
      _0x2977aa.pageHeight,
    );
  if (!_0x52dde2 || !_0x2931aa)
    throw Error("Document\x20page\x20size\x20is\x20not\x20found");
  return { width: _0x52dde2, height: _0x2931aa };
}
function I(_0x55c115) {
  return _0x55c115.reduce((_0x46bd3a, _0x27876c) => {
    let _0x31cdb5 = Number.isFinite(_0x27876c.pageHeight)
      ? _0x27876c.pageHeight
      : _0x27876c.height;
    return _0x46bd3a + Math.max(0, _0x31cdb5);
  }, 0);
}
function L(_0x55b3d8, _0xbe8d03, _0xb4ce6f) {
  let _0x2bec30 =
    typeof _0xb4ce6f.contentHeightAdjustment == "number" &&
    Number.isFinite(_0xb4ce6f.contentHeightAdjustment)
      ? _0xb4ce6f.contentHeightAdjustment
      : 0;
  return Math.max(
    R(_0xb4ce6f.contentHeight) ?? 0,
    _0xbe8d03 + Math.max(0, _0x55b3d8 + _0x2bec30),
  );
}
function R(..._0x2a8bb0) {
  return _0x2a8bb0.find(
    (_0x56cf45) =>
      typeof _0x56cf45 == "number" &&
      Number.isFinite(_0x56cf45) &&
      _0x56cf45 > 0,
  );
}
const z = {
  id: "docs.operation.print",
  type: t.CommandType["OPERATION"],
  handler: async (_0x31632d) => {
    let _0x81920 = _0x31632d.get(t.IUniverInstanceService),
      _0x4760cd = _0x31632d.get(C),
      _0x8a6d52 = _0x31632d.get(n.IRenderManagerService),
      _0x4453fe = _0x81920.getCurrentUnitOfType(
        t.UniverInstanceType["UNIVER_DOC"],
      );
    if (!_0x4453fe) return false;
    if (!_0x8a6d52.getRenderUnitById(_0x4453fe.getUnitId()))
      throw Error("Render is not found");
    return (await _0x4760cd.print(_0x4453fe.getUnitId()), true);
  },
};
function B(_0x184881) {
  return {
    id: z.id,
    type: e.MenuItemType["BUTTON"],
    title: "docs-print.menu",
    icon: "PrintIcon",
    tooltip: "docs-print.menu",
    hidden$: (0, e.getMenuHiddenObservable)(
      _0x184881,
      t.UniverInstanceType["UNIVER_DOC"],
    ),
  };
}
const V = {
  [e.RibbonStartGroup["OTHERS"]]: {
    [z.id]: {
      order: 0.1,
      gridLayout: { row: 1, column: 1, rowSpan: 2, showLabel: true },
      menuItemFactory: B,
    },
  },
};
var H = "@univerjs-pro/docs-print",
  U = "1.0.0-insiders.20260907-70fc579";
const W = {};
let G = class extends t.Disposable {
  constructor(_0x9f1672) {
    (super(), (this._iconManager = _0x9f1672), this._registerIcons());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({ PrintIcon: c.PrintIcon }),
    );
  }
};
G = b([y(0, (0, t.Inject)(e.IconManager))], G);
function K() {
  let _0x47b3a5 = (0, e.useDependency)(t.LocaleService);
  return (0, e.useObservable)((0, e.useDependency)(C).preparing$, false, true)
    ? (0, l.jsx)("div", {
        "data-u-comp": "docs-printing-mask",
        "aria-busy": "true",
        "aria-label": _0x47b3a5.t("docs-print.menu"),
        className:
          "univer-fixed univer-inset-0 univer-z-[1000] univer-flex univer-cursor-wait univer-items-center univer-justify-center univer-bg-gray-100 dark:!univer-bg-gray-900",
        children: (0, l.jsx)("div", {
          role: "status",
          "aria-live": "polite",
          className:
            "univer-flex\x20univer-items-center\x20univer-justify-center\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-p-5\x20univer-shadow-lg\x20dark:!univer-bg-gray-700",
          children: (0, l.jsx)(c.LoadingMultiIcon, {
            className: "univer-size-6 univer-animate-spin univer-text-gray-500",
          }),
        }),
      })
    : null;
}
let q = class extends t.Disposable {
  constructor(_0x4592ce, _0x31091a, _0x4dbe7a, _0x19a79e) {
    (super(),
      (this._commandService = _0x4592ce),
      (this._menuManagerService = _0x31091a),
      (this._uiPartsService = _0x4dbe7a),
      (this._injector = _0x19a79e),
      this._initMenus(),
      this._initCommands(),
      this.disposeWithMe(
        this._uiPartsService["registerComponent"](
          e.BuiltInUIPart["GLOBAL"],
          () => (0, e.connectInjector)(K, this._injector),
        ),
      ));
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](V);
  }
  _initCommands() {
    this.disposeWithMe(this._commandService["registerCommand"](z));
  }
};
q = b(
  [
    y(0, t.ICommandService),
    y(1, e.IMenuManagerService),
    y(2, e.IUIPartsService),
    y(3, (0, t.Inject)(t.Injector)),
  ],
  q,
);
let J = class extends t.Plugin {
  constructor(_0x124062 = W, _0x58a5c3, _0x4ca10) {
    (super(),
      (this._config = _0x124062),
      (this._injector = _0x58a5c3),
      (this._configService = _0x4ca10));
    let { menu: _0x21ec2f, ..._0x5373d2 } = (0, t.merge)({}, W, this._config);
    (_0x21ec2f &&
      this._configService["setConfig"]("menu", _0x21ec2f, { merge: true }),
      this._configService["setConfig"]("UNIVER_DOCS_PRINT", _0x5373d2));
  }
  onStarting() {
    (this._injector["has"](i.IPrintPreparationService) ||
      this._injector["add"]([
        i.IPrintPreparationService,
        { useClass: i.PrintPreparationService },
      ]),
      this._injector["add"]([G]),
      this._injector["get"](G),
      (0, t.registerDependencies)(this._injector, [[C], [q]]));
  }
  onReady() {
    this._injector["get"](q);
  }
};
(m(J, "pluginName", "UNIVER_DOCS_PRINT"),
  m(J, "packageName", H),
  m(J, "version", U),
  m(J, "type", t.UniverInstanceType["UNIVER_DOC"]),
  (J = b(
    [
      (0, t.DependentOn)(
        r.UniverLicensePlugin,
        a.UniverDocsPlugin,
        n.UniverRenderEnginePlugin,
      ),
      y(1, (0, t.Inject)(t.Injector)),
      y(2, t.IConfigService),
    ],
    J,
  )),
  (exports.DocsPrintMenuSchema = V),
  Object.defineProperty(exports, "UniverDocsPrintPlugin", {
    enumerable: true,
    get: function () {
      return J;
    },
  }));
