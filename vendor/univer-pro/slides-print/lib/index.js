import {
  CommandType as _0x34aee7,
  DependentOn as _0x2043f5,
  Disposable as _0x2bb531,
  ICommandService as _0x36130f,
  IConfigService as _0x1568c1,
  IUniverInstanceService as _0x1bfb8f,
  Inject as _0x340bee,
  Injector as _0x14c425,
  LocaleService as _0x52b30c,
  PAGE_SIZE as _0x5454e7,
  PAPER_TYPES as _0x2d9557,
  PaperType as _0x374d8d,
  Plugin as _0x9a93b3,
  UniverInstanceType as _0x579b5d,
  createIdentifier as _0x5e1ea3,
  generateRandomId as _0x32b828,
  merge as _0x53325d,
  registerDependencies as _0x3c1dfd,
  toDisposable as _0x52608a,
} from "@univerjs/core";
import { BehaviorSubject as _0x532dfa } from "rxjs";
import {
  IPrintPreparationService as _0x2f2630,
  PRINT_CONTAINER_CLASS as _0x5d24ac,
  PaperMarginMap as _0x2671e4,
  PrintDirection as _0x582e36,
  PrintPaperMargin as _0x480b69,
  PrintPreparationService as _0x557bd2,
} from "@univerjs-pro/print";
import {
  ObjectProvider as _0x33fa80,
  SlidePageBackgroundObject as _0x4b1a0f,
  SlidePageClipGroup as _0x56fd34,
  UniverSlidesUIPlugin as _0x36a386,
  assembleGroupHierarchy as _0x3c60de,
  isThumbnailRenderableDrawing as _0x3b9b77,
  resolveGroupFillInheritance as _0x397807,
  resolveSlideLogicalPageSize as _0x2484f1,
} from "@univerjs-pro/slides-ui";
import {
  ISlideDrawingService as _0x8498e7,
  SlideSceneTypeEnum as _0x193ccc,
  UniverSlidesPlugin as _0x5cb253,
  resolvedSlideLayersToDrawingMap as _0x416439,
} from "@univerjs-pro/slides";
import {
  CanvasRenderMode as _0x5ae184,
  DRAWING_OBJECT_LAYER_INDEX as _0x23b6fd,
  Engine as _0x14d393,
  IRenderManagerService as _0x376f63,
  MAIN_VIEW_PORT_KEY as _0x157a79,
  Scene as _0x43c5dc,
  UniverRenderEnginePlugin as _0x2dcc70,
  Viewport as _0x4044b2,
} from "@univerjs/engine-render";
import {
  BuiltInUIPart as _0x23a2e6,
  IMenuManagerService as _0x34825c,
  IUIPartsService as _0x5de953,
  IconManager as _0x41285d,
  MenuItemType as _0x5072b8,
  RibbonStartGroup as _0x159e71,
  connectInjector as _0x4a71e6,
  getMenuHiddenObservable as _0x39aab8,
  useDependency as _0x5b923b,
  useObservable as _0x18c5fc,
} from "@univerjs/ui";
import { UniverLicensePlugin as _0x489d7b } from "@univerjs-pro/license";
import {
  LoadingMultiIcon as _0x1d9293,
  PrintIcon as _0x157ce5,
} from "@univerjs/icons";
import {
  Button as _0x3d7a89,
  Checkbox as _0x1b3989,
  FormLayout as _0x442a16,
  Input as _0x324baf,
  Radio as _0x2b500b,
  RadioGroup as _0xaebe54,
  Select as _0x51c002,
  borderBottomClassName as _0x2fef34,
  clsx as _0x40c325,
  scrollbarClassName as _0x57c618,
} from "@univerjs/design";
import {
  useEffect as _0x509ede,
  useMemo as _0x510da4,
  useRef as _0x104b13,
  useState as _0x5141af,
} from "react";
import {
  Fragment as _0x45d339,
  jsx as _0x57fbe1,
  jsxs as _0x28e3b4,
} from "react/jsx-runtime";
let I = (function (_0x20f163) {
    return (
      (_0x20f163.FullPage = "FullPage"),
      (_0x20f163.Handout = "Handout"),
      (_0x20f163.NotesPage = "NotesPage"),
      _0x20f163
    );
  })({}),
  Be = (function (_0x19cde1) {
    return (
      (_0x19cde1.Horizontal = "Horizontal"),
      (_0x19cde1.Vertical = "Vertical"),
      _0x19cde1
    );
  })({});
function L(_0x463a6d, _0x510604) {
  return _0x463a6d === undefined ? _0x510604 : _0x463a6d;
}
function Ve(_0x1830cd) {
  let _0x4e3a81 =
      (_0x1830cd == null ? undefined : _0x1830cd.layout) ?? "FullPage",
    _0x2d4e84 = _0x4e3a81 === "FullPage";
  return {
    layout: _0x4e3a81,
    slidesPerPage: L(
      _0x1830cd == null ? undefined : _0x1830cd.slidesPerPage,
      2,
    ),
    handoutOrder: L(
      _0x1830cd == null ? undefined : _0x1830cd.handoutOrder,
      "Horizontal",
    ),
    paperSize: _0x1830cd == null ? undefined : _0x1830cd.paperSize,
    direction: L(
      _0x1830cd == null ? undefined : _0x1830cd.direction,
      _0x2d4e84 ? _0x582e36.Landscape : _0x582e36.Portrait,
    ),
    margin: L(
      _0x1830cd == null ? undefined : _0x1830cd.margin,
      _0x1830cd != null && _0x1830cd.paperSize
        ? _0x480b69.Normal
        : _0x480b69.None,
    ),
    marginCustom: L(_0x1830cd == null ? undefined : _0x1830cd.marginCustom, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }),
    frameSlides: L(
      _0x1830cd == null ? undefined : _0x1830cd.frameSlides,
      !_0x2d4e84,
    ),
    showSlideNumber: L(
      _0x1830cd == null ? undefined : _0x1830cd.showSlideNumber,
      !_0x2d4e84,
    ),
  };
}
function He(
  _0x163362,
  _0xa90709,
  _0x3967e7,
  _0x33e526 = (_0x17e6e1) => _0x17e6e1.length * 14 * 0.55,
) {
  let _0x43236f = _0x2484f1(_0xa90709),
    _0x52d04c = Ve(_0x3967e7);
  !(_0x3967e7 != null && _0x3967e7.direction) &&
    _0x52d04c.layout === "FullPage" &&
    (_0x52d04c.direction =
      _0x43236f.width >= _0x43236f.height
        ? _0x582e36.Landscape
        : _0x582e36.Portrait);
  let _0x3e99ad = We(_0x43236f, _0x52d04c),
    _0x11ecbf =
      _0x52d04c.margin === _0x480b69.Custom
        ? _0x52d04c.marginCustom
        : _0x2671e4[_0x52d04c.margin],
    _0x1f34de = Ge(_0x3e99ad, _0x11ecbf),
    _0x49662b;
  switch (_0x52d04c.layout) {
    case "Handout":
      _0x49662b = Ke(
        _0x163362,
        _0x1f34de,
        _0x52d04c.slidesPerPage,
        _0x52d04c.handoutOrder,
      );
      break;
    case "NotesPage":
      _0x49662b = Ye(_0x163362, _0x1f34de, _0x33e526);
      break;
    default:
      _0x49662b = _0x163362.map((_0x311478) => ({
        key: "full-page-" + _0x311478.pageId,
        slots: [{ source: _0x311478, rect: _0x1f34de }],
      }));
      break;
  }
  return {
    pageSize: _0x3e99ad,
    margin: _0x11ecbf,
    options: _0x52d04c,
    pages: _0x49662b,
  };
}
function Ue(_0x1b8e2a, _0x18134e) {
  let _0x475f5d = _0x2484f1(_0x18134e);
  return _0x1b8e2a.map(({ page: _0xa58b5d, index: _0x1e599b }) => {
    let _0x4716ef = _0xa58b5d.getData(),
      _0x467f8f = _0x2484f1(_0x4716ef.pageSize ?? _0x475f5d);
    return {
      index: _0x1e599b,
      page: _0xa58b5d,
      pageId: _0xa58b5d.getId(),
      width: _0x467f8f.width,
      height: _0x467f8f.height,
      speakerNotes: _0x4716ef.speakerNotes ?? "",
    };
  });
}
function We(_0x49138c, _0x49a6f3) {
  let _0x3fe537 = _0x49a6f3.paperSize
      ? _0x5454e7[_0x49a6f3.paperSize]
      : _0x49138c,
    _0x4bdf8a = Math.min(_0x3fe537.width, _0x3fe537.height),
    _0x56c83e = Math.max(_0x3fe537.width, _0x3fe537.height);
  return _0x49a6f3.direction === _0x582e36.Portrait
    ? { width: _0x4bdf8a, height: _0x56c83e }
    : { width: _0x56c83e, height: _0x4bdf8a };
}
function Ge(_0x27eedb, _0x502809) {
  return {
    x: _0x502809.left,
    y: _0x502809.top,
    width: Math.max(1, _0x27eedb.width - _0x502809.left - _0x502809.right),
    height: Math.max(1, _0x27eedb.height - _0x502809.top - _0x502809.bottom),
  };
}
function Ke(_0x5c343a, _0x24e75a, _0x28e4bc, _0x2393a5) {
  let _0x549392 = [];
  for (
    let _0x27c710 = 0;
    _0x27c710 < _0x5c343a.length;
    _0x27c710 += _0x28e4bc
  ) {
    let _0x329be5 = _0x5c343a.slice(_0x27c710, _0x27c710 + _0x28e4bc),
      _0x12df51 = Je(qe(_0x24e75a, _0x28e4bc), _0x28e4bc, _0x2393a5);
    _0x549392.push({
      key: "handout-" + _0x27c710 / _0x28e4bc,
      slots: _0x329be5.map((_0x1d0d87, _0x53c448) => {
        let _0x1ae0af = _0x12df51[_0x53c448];
        if (_0x28e4bc !== 3) return { source: _0x1d0d87, rect: _0x1ae0af };
        let _0x68c7d8 = (_0x1ae0af.width - 24) * 0.56;
        return {
          source: _0x1d0d87,
          rect: { ..._0x1ae0af, width: _0x68c7d8 },
          noteLinesRect: {
            x: _0x1ae0af.x + _0x68c7d8 + 24,
            y: _0x1ae0af.y,
            width: Math.max(1, _0x1ae0af.width - _0x68c7d8 - 24),
            height: _0x1ae0af.height,
          },
        };
      }),
    });
  }
  return _0x549392;
}
function qe(_0x3236ee, _0x44f7f0) {
  let [_0x37e638, _0x192321] =
      _0x44f7f0 === 1
        ? [1, 1]
        : _0x44f7f0 === 2 || _0x44f7f0 === 3
          ? [1, _0x44f7f0]
          : _0x44f7f0 === 4
            ? [2, 2]
            : _0x44f7f0 === 6
              ? [2, 3]
              : [3, 3],
    _0x52b277 = (_0x3236ee.width - 24 * (_0x37e638 - 1)) / _0x37e638,
    _0x3cf6f9 = (_0x3236ee.height - 24 * (_0x192321 - 1)) / _0x192321,
    _0x13cf39 = [];
  for (let _0x130c77 = 0; _0x130c77 < _0x192321; _0x130c77++)
    for (let _0x387497 = 0; _0x387497 < _0x37e638; _0x387497++)
      _0x13cf39.push({
        x: _0x3236ee.x + _0x387497 * (_0x52b277 + 24),
        y: _0x3236ee.y + _0x130c77 * (_0x3cf6f9 + 24),
        width: _0x52b277,
        height: _0x3cf6f9,
      });
  return _0x13cf39;
}
function Je(_0x503555, _0x3c563e, _0x438514) {
  if (_0x438514 === "Horizontal" || _0x3c563e < 4) return _0x503555;
  let _0x268920 = _0x3c563e === 9 ? 3 : 2,
    _0xf3884e = _0x3c563e / _0x268920;
  return _0x503555.map(
    (_0x44cb2a, _0x51bdfe) =>
      _0x503555[
        (_0x51bdfe % _0xf3884e) * _0x268920 + Math.floor(_0x51bdfe / _0xf3884e)
      ],
  );
}
function Ye(_0xdb26b, _0x2e391a, _0x52c1de) {
  let _0x24cd8b = [];
  for (let _0x1da60a of _0xdb26b) {
    let _0x4f5453 = _0x2e391a.height * 0.42,
      _0x414851 = {
        x: _0x2e391a.x,
        y: _0x2e391a.y + _0x4f5453 + 24,
        width: _0x2e391a.width,
        height: Math.max(1, _0x2e391a.height - _0x4f5453 - 24),
      },
      _0x32212c = Xe(_0x1da60a.speakerNotes, _0x414851.width, _0x52c1de),
      _0x1302df = Math.max(1, Math.floor(_0x414851.height / 21)),
      _0x50f900 = Math.max(1, Math.floor(_0x2e391a.height / 21)),
      _0x45f4f2 = _0x32212c.splice(0, _0x1302df);
    _0x24cd8b.push({
      key: "notes-" + _0x1da60a.pageId + "-0",
      slots: [
        {
          source: _0x1da60a,
          rect: {
            x: _0x2e391a.x,
            y: _0x2e391a.y,
            width: _0x2e391a.width,
            height: _0x4f5453,
          },
        },
      ],
      notes: {
        lines: _0x45f4f2,
        rect: _0x414851,
        continuation: false,
        source: _0x1da60a,
      },
    });
    let _0x912f74 = 1;
    for (; _0x32212c.length;)
      (_0x24cd8b.push({
        key: "notes-" + _0x1da60a.pageId + "-" + _0x912f74,
        slots: [],
        notes: {
          lines: _0x32212c.splice(0, _0x50f900),
          rect: _0x2e391a,
          continuation: true,
          source: _0x1da60a,
        },
      }),
        _0x912f74++);
  }
  return _0x24cd8b;
}
function Xe(_0x2f3af2, _0x4ebd47, _0x308875) {
  if (!_0x2f3af2) return [];
  let _0x2af35d = _0x2f3af2.replace(/\r\n/g, "\x0a").split("\x0a"),
    _0x5c3a41 = [];
  return (
    _0x2af35d.forEach((_0x49909d) => {
      let _0x5c9491 = Array.from(_0x49909d);
      if (_0x5c9491.length === 0) _0x5c3a41.push("");
      else {
        let _0x4dec29 = 0;
        for (; _0x4dec29 < _0x5c9491.length;) {
          let _0x2dbd70 = _0x4dec29 + 1,
            _0x528ded = _0x5c9491.length,
            _0x1c2c41 = _0x4dec29;
          for (; _0x2dbd70 <= _0x528ded;) {
            let _0x211c13 = Math.floor((_0x2dbd70 + _0x528ded) / 2);
            _0x308875(_0x5c9491.slice(_0x4dec29, _0x211c13).join("")) <=
            _0x4ebd47
              ? ((_0x1c2c41 = _0x211c13), (_0x2dbd70 = _0x211c13 + 1))
              : (_0x528ded = _0x211c13 - 1);
          }
          let _0x207c7d = Math.max(_0x4dec29 + 1, _0x1c2c41);
          (_0x5c3a41.push(_0x5c9491.slice(_0x4dec29, _0x207c7d).join("")),
            (_0x4dec29 = _0x207c7d));
        }
      }
    }),
    _0x5c3a41
  );
}
function Ze() {
  return {
    layout: "FullPage",
    slidesPerPage: 2,
    handoutOrder: "Horizontal",
    paperSize: _0x374d8d.A4,
    direction: _0x582e36.Landscape,
    margin: _0x480b69.Normal,
    frameSlides: false,
    showSlideNumber: false,
  };
}
function R(_0x329c4d) {
  "@babel/helpers - typeof";
  return (
    (R =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x988629) {
            return typeof _0x988629;
          }
        : function (_0x4a1014) {
            return _0x4a1014 &&
              typeof Symbol == "function" &&
              _0x4a1014.constructor === Symbol &&
              _0x4a1014 !== Symbol.prototype
              ? "symbol"
              : typeof _0x4a1014;
          }),
    R(_0x329c4d)
  );
}
function Qe(_0x4e9022, _0x3e13b7) {
  if (R(_0x4e9022) != "object" || !_0x4e9022) return _0x4e9022;
  var _0x59991e = _0x4e9022[Symbol.toPrimitive];
  if (_0x59991e !== undefined) {
    var _0x461bac = _0x59991e.call(_0x4e9022, _0x3e13b7 || "default");
    if (R(_0x461bac) != "object") return _0x461bac;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3e13b7 === "string" ? String : Number)(_0x4e9022);
}
function $e(_0x1ff0ba) {
  var _0x36b1ca = Qe(_0x1ff0ba, "string");
  return R(_0x36b1ca) == "symbol" ? _0x36b1ca : _0x36b1ca + "";
}
function z(_0x28c105, _0x42abd4, _0x56abca) {
  return (
    (_0x42abd4 = $e(_0x42abd4)) in _0x28c105
      ? Object.defineProperty(_0x28c105, _0x42abd4, {
          value: _0x56abca,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x28c105[_0x42abd4] = _0x56abca),
    _0x28c105
  );
}
const B = _0x5e1ea3("univer-pro.slide-print-dialog.service");
var et = class extends _0x2bb531 {
  constructor(..._0x23cdf8) {
    (super(..._0x23cdf8),
      z(this, "_visible$", new _0x532dfa(false)),
      z(this, "_options$", new _0x532dfa(Ze())),
      z(this, "visible$", this._visible$["asObservable"]()),
      z(this, "options$", this._options$["asObservable"]()));
  }
  get visible() {
    return this._visible$["getValue"]();
  }
  get options() {
    return this._options$["getValue"]();
  }
  open(_0x99af8f) {
    (this._options$["next"]({ ...Ze(), ..._0x99af8f }),
      this._visible$["next"](true));
  }
  close() {
    this._visible$["next"](false);
  }
  updateOptions(_0x4bee51) {
    this._options$["next"]({ ...this.options, ..._0x4bee51 });
  }
  dispose() {
    (this._visible$["complete"](),
      this._options$["complete"](),
      super.dispose());
  }
};
const V = {
    id: "slide.operation.print-open",
    type: _0x34aee7.OPERATION,
    handler(_0x39a91e, _0x2d4f52) {
      return (_0x39a91e.get(B).open(_0x2d4f52), true);
    },
  },
  H = {
    id: "slide.operation.print-close",
    type: _0x34aee7.OPERATION,
    handler(_0x34ab98) {
      return (_0x34ab98.get(B).close(), true);
    },
  };
var U = class {
  constructor() {
    z(this, "_transformers", new Set());
  }
  register(_0x2cdaa7) {
    return (
      this._transformers["add"](_0x2cdaa7),
      _0x52608a(() => this._transformers["delete"](_0x2cdaa7))
    );
  }
  transform(_0x3f1e42, _0x1270ab) {
    return Array.from(this._transformers).reduce(
      (_0x83a7db, _0x14ba1d) => _0x14ba1d(_0x83a7db, _0x1270ab),
      _0x3f1e42,
    );
  }
};
function tt(_0x3d834c, _0x27ffae) {
  let _0x4e3e65 = {};
  return {
    data: _0x4e3e65,
    order: _0x27ffae.filter((_0x1505ce) => {
      let _0x2d4cfd = _0x3d834c[_0x1505ce];
      return _0x3b9b77(_0x2d4cfd)
        ? ((_0x4e3e65[_0x1505ce] = _0x2d4cfd), true)
        : false;
    }),
  };
}
function nt(_0x11a8c9, _0x3b753b, _0x5200ff) {
  let _0x66a430 = _0x3b753b.getUnitId(),
    _0x1816ec = _0x5200ff.getId(),
    _0x5e680f = _0x11a8c9.getDrawingData(_0x66a430, _0x1816ec),
    _0x104937 = _0x11a8c9.getDrawingOrder(_0x66a430, _0x1816ec);
  if (_0x104937.some((_0x5a018a) => !!_0x5e680f[_0x5a018a]))
    return tt(_0x5e680f, _0x104937);
  let _0x2976a9 = _0x416439(
    _0x66a430,
    _0x1816ec,
    _0x5200ff.resolveElements(),
    _0x3b753b.getThemeDataForPage(_0x1816ec),
  );
  return tt(_0x2976a9.data, _0x2976a9.order);
}
var rt = class extends _0x2bb531 {
  get container() {
    return this._container;
  }
  get root() {
    return this._root;
  }
  get _pageSize() {
    return _0x2484f1(
      this._slidePage["getData"]().pageSize ??
        this._slideModel["getSnapshot"]().defaultPageSize,
    );
  }
  constructor(_0xab629e, _0x2f3aca, _0x5e377e, _0x3225a2, _0x13ddd1 = false) {
    (super(),
      (this._injector = _0xab629e),
      (this._slideDrawingService = _0x2f3aca),
      (this._slideModel = _0x5e377e),
      (this._slidePage = _0x3225a2),
      (this._autoRender = _0x13ddd1),
      z(this, "_container", document.createElement("div")),
      z(this, "_root", document.createElement("div")),
      z(this, "_engine", undefined),
      z(this, "_scene", undefined),
      z(this, "_objectProvider", undefined),
      z(this, "_renderObjectMap", new Map()),
      z(this, "_drawingTransformService", undefined),
      (this._drawingTransformService = this._injector["get"](U)),
      (this._objectProvider = this._injector["createInstance"](_0x33fa80)),
      this._initRenderer(),
      this.disposeWithMe({
        dispose: () => {
          (this._renderObjectMap["clear"](),
            this._scene["dispose"](),
            this._engine["dispose"]());
        },
      }));
  }
  _initRenderer() {
    let _0x2c9d54 = "slide-print-" + _0x32b828(4),
      { width: _0x57294d, height: _0x42258e } = this._pageSize;
    ((this._engine = new _0x14d393("", {
      elementWidth: _0x57294d,
      elementHeight: _0x42258e,
      dpr: 1,
      renderMode: _0x5ae184.Printing,
    })),
      (this._scene = new _0x43c5dc(_0x2c9d54, this._engine)),
      this._scene["disableObjectsEvent"](),
      this._scene["transformByState"]({
        width: _0x57294d,
        height: _0x42258e,
        scaleX: 1,
        scaleY: 1,
      }),
      new _0x4044b2(_0x157a79, this._scene, {
        left: 0,
        top: 0,
        width: _0x57294d,
        height: _0x42258e,
        active: true,
      }).openClip(),
      this._engine["mount"](this._container, false),
      this._engine["getCanvas"]()
        .getContext()
        .setId(_0x2c9d54 + "_" + _0x32b828(4)),
      this._renderSlidePage());
  }
  _renderSlidePage() {
    let _0x19bf0c = this._slideModel["getUnitId"](),
      _0x38fb97 = this._slidePage["getId"](),
      { width: _0x42a215, height: _0x308d35 } = this._pageSize,
      _0x200485 = this._scene,
      _0x5aaaff = this._injector["createInstance"](
        _0x4b1a0f,
        "slide-print-page-background-" + _0x19bf0c + "-" + _0x38fb97,
        {
          left: 0,
          top: 0,
          width: _0x42a215,
          height: _0x308d35,
          background: this._slidePage["resolveBackground"](),
          evented: false,
          zIndex: 1,
        },
      );
    (_0x200485.addObject(_0x5aaaff, 0),
      this._renderObjectMap["set"](_0x5aaaff.oKey, _0x5aaaff));
    let { data: _0x359e9c, order: _0xe97ff8 } = this._drawingTransformService[
        "transform"
      ](nt(this._slideDrawingService, this._slideModel, this._slidePage), {
        slideModel: this._slideModel,
        slidePage: this._slidePage,
      }),
      _0x518865 = _0x397807(_0x359e9c),
      _0x5919c7 = new _0x56fd34(
        "slide-print-page-clip-" + _0x19bf0c + "-" + _0x38fb97,
        { left: 0, top: 0, width: _0x42a215, height: _0x308d35 },
      );
    (_0x200485.addObject(_0x5919c7, 0),
      this._renderObjectMap["set"](_0x5919c7.oKey, _0x5919c7),
      this._objectProvider["convertToRenderObjects"](_0x518865, _0xe97ff8, {
        unitId: _0x19bf0c,
        subUnitId: _0x38fb97,
        pageOffsetLeft: 0,
        pageOffsetTop: 0,
        sceneType: _0x193ccc.PRESENTATION,
        showPlaceholder: false,
        requestRender: () => this._requestRender(),
      }).forEach((_0x3da2fe) => {
        (_0x200485.addObject(_0x3da2fe, _0x23b6fd),
          this._renderObjectMap["set"](_0x3da2fe.oKey, _0x3da2fe));
      }),
      _0x3c60de(_0x518865, _0xe97ff8, _0x200485, {
        unitId: _0x19bf0c,
        subUnitId: _0x38fb97,
        pageOffsetLeft: 0,
        pageOffsetTop: 0,
        sceneType: _0x193ccc.PRESENTATION,
        showPlaceholder: false,
        objectProvider: this._objectProvider,
        renderObjectMap: this._renderObjectMap,
        requestRender: () => this._requestRender(),
      }),
      _0x200485.makeDirty(true));
  }
  prepare() {
    ((this._root["style"].position = "absolute"),
      (this._root["style"].top = "0px"),
      (this._root["style"].left = "0px"),
      (this._root["style"].width = "100%"),
      (this._root["style"].height = "100%"));
  }
  render() {
    let _0x1dc359 = this._engine["getCanvas"]().getContext();
    (this._scene["makeDirty"](true),
      _0x1dc359.save(),
      this._scene["render"](),
      _0x1dc359.restore());
  }
  _requestRender() {
    (this._scene["makeDirty"](true), this._autoRender && this.render());
  }
};
const W = "univer-slide-print-page";
var it = class extends _0x2bb531 {
  constructor(
    _0x100f15,
    _0x3ee63d,
    _0x442b89,
    _0x3b1f3b,
    _0x1d5324,
    _0x5cac1d,
    _0x1b60c5,
  ) {
    (super(),
      (this._document = _0x100f15),
      (this._injector = _0x3ee63d),
      (this._slideDrawingService = _0x442b89),
      (this._slideModel = _0x3b1f3b),
      (this._plan = _0x1d5324),
      (this._pageSize = _0x5cac1d),
      (this._options = _0x1b60c5),
      z(this, "container", undefined),
      z(this, "_slideViews", []),
      (this.container = this._document["createElement"]("div")),
      (this.container["className"] = W),
      (this.container["style"].position = "relative"),
      (this.container["style"].width = this._pageSize["width"] + "px"),
      (this.container["style"].height = this._pageSize["height"] + "px"),
      (this.container["style"].background = "#fff"),
      (this.container["style"].color = "#000"),
      (this.container["style"].overflow = "hidden"),
      this._mountSlides(),
      this._mountNotes());
  }
  render() {
    this._slideViews["forEach"]((_0x42d71c) => _0x42d71c.render());
  }
  dispose() {
    (this._slideViews["forEach"]((_0x4a4ccc) => _0x4a4ccc.dispose()),
      (this._slideViews["length"] = 0),
      this.container["remove"](),
      super.dispose());
  }
  _mountSlides() {
    this._plan["slots"].forEach((_0x5dabae) => {
      let _0x2d368f = this._document["createElement"]("div");
      ((_0x2d368f.className = "univer-slide-print-slot"),
        G(_0x2d368f, _0x5dabae.rect),
        (_0x2d368f.style["overflow"] = "hidden"),
        this.container["appendChild"](_0x2d368f));
      let _0x5ed36e = this._options["showSlideNumber"] ? 20 : 0,
        _0x343c76 = {
          ..._0x5dabae.rect,
          x: 0,
          y: 0,
          height: Math.max(1, _0x5dabae.rect["height"] - _0x5ed36e),
        },
        _0x150979 =
          _0x5dabae.source["width"] ||
          this._slideModel["getSnapshot"]().defaultPageSize["width"],
        _0x4048c4 =
          _0x5dabae.source["height"] ||
          this._slideModel["getSnapshot"]().defaultPageSize["height"],
        _0x27e96f = at(_0x150979, _0x4048c4, _0x343c76),
        _0x3769b3 = new rt(
          this._injector,
          this._slideDrawingService,
          this._slideModel,
          _0x5dabae.source["page"],
          this._options["preview"] ?? false,
        );
      if (
        (_0x3769b3.prepare(),
        (_0x3769b3.container["className"] = "univer-slide-print-surface"),
        (_0x3769b3.container["style"].position = "absolute"),
        (_0x3769b3.container["style"].left = _0x27e96f.x + "px"),
        (_0x3769b3.container["style"].top = _0x27e96f.y + "px"),
        (_0x3769b3.container["style"].width = _0x150979 + "px"),
        (_0x3769b3.container["style"].height = _0x4048c4 + "px"),
        (_0x3769b3.container["style"].transform =
          "scale(" + _0x27e96f.width / _0x150979 + ")"),
        (_0x3769b3.container["style"].transformOrigin = "top\x20left"),
        _0x3769b3.container["appendChild"](_0x3769b3.root),
        _0x2d368f.appendChild(_0x3769b3.container),
        this._slideViews["push"](_0x3769b3),
        this._options["frameSlides"])
      ) {
        let _0x400226 = this._document["createElement"]("div");
        (G(_0x400226, _0x27e96f),
          (_0x400226.style["border"] = "1px solid currentColor"),
          (_0x400226.style["boxSizing"] = "border-box"),
          (_0x400226.style["opacity"] = "0.5"),
          (_0x400226.style["pointerEvents"] = "none"),
          _0x2d368f.appendChild(_0x400226));
      }
      if (this._options["showSlideNumber"]) {
        let _0x3b42ad = this._document["createElement"]("div");
        ((_0x3b42ad.textContent = String(_0x5dabae.source["index"] + 1)),
          (_0x3b42ad.style["position"] = "absolute"),
          (_0x3b42ad.style["left"] = "0"),
          (_0x3b42ad.style["right"] = "0"),
          (_0x3b42ad.style["bottom"] = "0"),
          (_0x3b42ad.style["height"] = "20px"),
          (_0x3b42ad.style["font"] = "12px/20px Arial, sans-serif"),
          (_0x3b42ad.style["textAlign"] = "center"),
          _0x2d368f.appendChild(_0x3b42ad));
      }
      _0x5dabae.noteLinesRect &&
        this._mountHandoutLines(_0x5dabae.noteLinesRect);
    });
  }
  _mountHandoutLines(_0x508a0d) {
    let _0x1019f4 = this._document["createElement"]("div");
    (G(_0x1019f4, _0x508a0d),
      (_0x1019f4.style["display"] = "flex"),
      (_0x1019f4.style["flexDirection"] = "column"),
      (_0x1019f4.style["justifyContent"] = "space-evenly"));
    for (let _0xa65859 = 0; _0xa65859 < 6; _0xa65859++) {
      let _0x189b33 = this._document["createElement"]("div");
      ((_0x189b33.style["borderBottom"] = "1px solid currentColor"),
        (_0x189b33.style["opacity"] = "0.4"),
        _0x1019f4.appendChild(_0x189b33));
    }
    this.container["appendChild"](_0x1019f4);
  }
  _mountNotes() {
    let _0x3d66a = this._plan["notes"];
    if (!_0x3d66a) return;
    let _0x5bf466 = this._document["createElement"]("div");
    (G(_0x5bf466, _0x3d66a.rect),
      (_0x5bf466.style["boxSizing"] = "border-box"),
      (_0x5bf466.style["font"] = "14px/21px Arial, sans-serif"),
      (_0x5bf466.style["overflow"] = "hidden"),
      (_0x5bf466.style["whiteSpace"] = "pre"),
      (_0x5bf466.dir = "auto"),
      _0x3d66a.lines["forEach"]((_0x4de453) => {
        let _0x2c0ffd = this._document["createElement"]("div");
        ((_0x2c0ffd.style["height"] = "21px"),
          (_0x2c0ffd.textContent = _0x4de453 || "\u00a0"),
          _0x5bf466.appendChild(_0x2c0ffd));
      }),
      this.container["appendChild"](_0x5bf466));
  }
};
function at(_0x90d1eb, _0x73ee2f, _0x8da9fa) {
  let _0x5b58fc = Math.min(
      _0x8da9fa.width / _0x90d1eb,
      _0x8da9fa.height / _0x73ee2f,
    ),
    _0x2da373 = _0x90d1eb * _0x5b58fc,
    _0x2e0834 = _0x73ee2f * _0x5b58fc;
  return {
    x: _0x8da9fa.x + (_0x8da9fa.width - _0x2da373) / 2,
    y: _0x8da9fa.y + (_0x8da9fa.height - _0x2e0834) / 2,
    width: _0x2da373,
    height: _0x2e0834,
  };
}
function G(_0x504d71, _0xa4bd78) {
  ((_0x504d71.style["position"] = "absolute"),
    (_0x504d71.style["left"] = _0xa4bd78.x + "px"),
    (_0x504d71.style["top"] = _0xa4bd78.y + "px"),
    (_0x504d71.style["width"] = _0xa4bd78.width + "px"),
    (_0x504d71.style["height"] = _0xa4bd78.height + "px"));
}
function ot(_0x234474, _0x3dda5e, _0x4bf56c) {
  let _0x3284bc = _0x234474.createElement("style"),
    _0x32cfb4 = _0x4bf56c.paperSize
      ? "size: " +
        _0x4bf56c.paperSize +
        "\x20" +
        _0x4bf56c.direction["toLowerCase"]() +
        ";"
      : "";
  return (
    (_0x3284bc.className = "offline-printing-css"),
    (_0x3284bc.textContent =
      "\n html, body {\n margin: 0;\n padding: 0;\n }\n ." +
      _0x5d24ac +
      " {\n position: relative;\n }\n ." +
      W +
      " {\n position: relative;\n width: " +
      _0x3dda5e.width +
      "px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20" +
      _0x3dda5e.height +
      "px;\n overflow: hidden;\n }\n @media print {\n @page {\n size: " +
      _0x3dda5e.width +
      "px " +
      _0x3dda5e.height +
      "px;\n " +
      _0x32cfb4 +
      "\n margin: 0;\n }\n ." +
      W +
      " {\n break-after: page;\n page-break-after: always;\n }\n ." +
      W +
      ":last-child {\n break-after: auto;\n page-break-after: auto;\n }\n }\n "),
    _0x3284bc
  );
}
function st(_0x3b3dcb) {
  return (
    Number.isFinite(_0x3b3dcb.from) &&
    Number.isFinite(_0x3b3dcb.to) &&
    _0x3b3dcb.from <= _0x3b3dcb.to
  );
}
function ct(_0x3678cb, _0x1e86a2) {
  return Math.max(0, Math.min(_0x1e86a2 - 1, _0x3678cb - 1));
}
function lt(_0x5dac5e, _0x141736) {
  if (_0x5dac5e <= 0) return [];
  if (!_0x141736)
    return Array.from(
      { length: _0x5dac5e },
      (_0x4ab7f6, _0x262495) => _0x262495,
    );
  let _0x5a2eb5 = new Set();
  return (
    _0x141736.forEach((_0x274e08) => {
      if (!st(_0x274e08) || _0x274e08.to < 1 || _0x274e08.from > _0x5dac5e)
        return;
      let _0xde2ef4 = ct(_0x274e08.from, _0x5dac5e),
        _0x23342c = ct(_0x274e08.to, _0x5dac5e);
      for (let _0x430a1a = _0xde2ef4; _0x430a1a <= _0x23342c; _0x430a1a += 1)
        _0x5a2eb5.add(_0x430a1a);
    }),
    Array.from(_0x5a2eb5).sort((_0x4989dc, _0x9780ea) => _0x4989dc - _0x9780ea)
  );
}
function K(_0x46da7e, _0x1d04c3) {
  return function (_0x373fe0, _0x37ed51) {
    _0x1d04c3(_0x373fe0, _0x37ed51, _0x46da7e);
  };
}
function q(_0x4c98ae, _0x413182, _0x209dcb, _0x40a2b2) {
  var _0xe51fbe = arguments.length,
    _0x5b5f00 =
      _0xe51fbe < 3
        ? _0x413182
        : _0x40a2b2 === null
          ? (_0x40a2b2 = Object.getOwnPropertyDescriptor(_0x413182, _0x209dcb))
          : _0x40a2b2,
    _0x481742;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5b5f00 = Reflect.decorate(_0x4c98ae, _0x413182, _0x209dcb, _0x40a2b2);
  else {
    for (var _0x27a056 = _0x4c98ae.length - 1; _0x27a056 >= 0; _0x27a056--)
      (_0x481742 = _0x4c98ae[_0x27a056]) &&
        (_0x5b5f00 =
          (_0xe51fbe < 3
            ? _0x481742(_0x5b5f00)
            : _0xe51fbe > 3
              ? _0x481742(_0x413182, _0x209dcb, _0x5b5f00)
              : _0x481742(_0x413182, _0x209dcb)) || _0x5b5f00);
  }
  return (
    _0xe51fbe > 3 &&
      _0x5b5f00 &&
      Object.defineProperty(_0x413182, _0x209dcb, _0x5b5f00),
    _0x5b5f00
  );
}
let J = class extends _0x2bb531 {
  constructor(_0x118ffc, _0x429f3b, _0x404b58, _0xa3f583, _0x358904) {
    (super(),
      (this._univerInstanceService = _0x118ffc),
      (this._injector = _0x429f3b),
      (this._slideDrawingService = _0x404b58),
      (this._renderManagerService = _0xa3f583),
      (this._printPreparationService = _0x358904),
      z(this, "_printing", false));
  }
  async print(_0x253878, _0x2349a1) {
    if (this._printing) return Promise.resolve(false);
    let _0x3f5fea = this._univerInstanceService["getUnit"](
      _0x253878,
      _0x579b5d.UNIVER_SLIDE,
    );
    if (!_0x3f5fea) return Promise.resolve(false);
    let _0x11b053 = _0x3f5fea.getSnapshot(),
      _0x17268f = lt(
        _0x11b053.slideOrder["length"],
        _0x2349a1 == null ? undefined : _0x2349a1.range,
      )
        .map((_0x470211) => ({
          index: _0x470211,
          page: _0x3f5fea.pageManager["getSlide"](
            _0x11b053.slideOrder[_0x470211],
          ),
        }))
        .filter((_0x193274) => !!_0x193274.page);
    if (_0x17268f.length === 0) return false;
    this._printing = true;
    try {
      await this._printPreparationService["prepare"]({
        unitId: _0x253878,
        unitType: _0x579b5d.UNIVER_SLIDE,
        dpr: 1,
      });
    } catch (_0x52ea90) {
      throw ((this._printing = false), _0x52ea90);
    }
    let _0x2591c4 = this._createPrintFrame();
    if (!_0x2591c4) return ((this._printing = false), false);
    try {
      let _0x46cf9d = this._preparePrintResources(
        _0x2591c4,
        _0x3f5fea,
        _0x17268f,
        _0x2349a1,
      );
      return this._printPreparedPages(
        _0x253878,
        _0x11b053.slideOrder,
        _0x2591c4,
        _0x46cf9d,
      );
    } catch (_0x5865d0) {
      return (
        _0x2591c4.frame["remove"](),
        (this._printing = false),
        Promise.reject(_0x5865d0)
      );
    }
  }
  _preparePrintResources(_0x247966, _0xe38d78, _0x4fc2b2, _0xca54b8) {
    let _0x5dd91a = _0xe38d78.getSnapshot(),
      _0x45fb2a =
        _0x247966.document["createElement"]("canvas").getContext("2d");
    _0x45fb2a && (_0x45fb2a.font = "14px Arial, sans-serif");
    let _0x45e29a = He(
        Ue(_0x4fc2b2, _0x5dd91a.defaultPageSize),
        _0x5dd91a.defaultPageSize,
        _0xca54b8,
        (_0xfdcdba) =>
          (_0x45fb2a == null
            ? undefined
            : _0x45fb2a.measureText(_0xfdcdba).width) ??
          _0xfdcdba.length * 14 * 0.55,
      ),
      _0x5f2900 = ot(_0x247966.document, _0x45e29a.pageSize, _0x45e29a.options),
      _0x52bf86 = _0x247966.document["createElement"]("div");
    _0x52bf86.className = _0x5d24ac;
    let _0x3a98d5 = _0x45e29a.pages["map"](
      (_0xb461eb) =>
        new it(
          _0x247966.document,
          this._injector,
          this._slideDrawingService,
          _0xe38d78,
          _0xb461eb,
          _0x45e29a.pageSize,
          _0x45e29a.options,
        ),
    );
    return (
      _0x3a98d5.forEach((_0x88877d) =>
        _0x52bf86.appendChild(_0x88877d.container),
      ),
      _0x247966.document["head"].appendChild(_0x5f2900),
      _0x247966.document["body"].appendChild(_0x52bf86),
      { container: _0x52bf86, pageInstances: _0x3a98d5, style: _0x5f2900 }
    );
  }
  _printPreparedPages(_0x43b5f3, _0x27d143, _0x3252f9, _0x467f10) {
    let {
        container: _0x159980,
        pageInstances: _0x5e7ed1,
        style: _0x42fb88,
      } = _0x467f10,
      _0x570cb3 = _0x3252f9.window,
      _0x3a2bae = _0x570cb3.onbeforeprint,
      _0x35b158 = _0x570cb3.onafterprint;
    return new Promise((_0x27a897) => {
      let _0x25471d = (_0x21e2b2) => {
        (_0x5e7ed1.forEach((_0x4b3f64) => _0x4b3f64.dispose()),
          _0x159980.remove(),
          _0x42fb88.remove(),
          (_0x570cb3.onbeforeprint = _0x3a2bae),
          (_0x570cb3.onafterprint = _0x35b158),
          _0x3252f9.frame["remove"](),
          this._restoreThumbnailRenders(_0x43b5f3, _0x27d143),
          (this._printing = false),
          _0x27a897(_0x21e2b2));
      };
      setTimeout(() => {
        if (
          ((_0x570cb3.onbeforeprint = (_0x24562b) => {
            (_0x3a2bae == null || _0x3a2bae.call(_0x570cb3, _0x24562b),
              _0x5e7ed1.forEach((_0x493330) => _0x493330.render()));
          }),
          (_0x570cb3.onafterprint = (_0x473759) => {
            (_0x35b158 == null || _0x35b158.call(_0x570cb3, _0x473759),
              _0x25471d(true));
          }),
          typeof _0x570cb3.print != "function")
        ) {
          _0x25471d(false);
          return;
        }
        try {
          _0x570cb3.print();
        } catch {
          _0x25471d(false);
        }
      }, 100);
    });
  }
  _createPrintFrame() {
    let _0x5dcb56 = document.createElement("iframe");
    (_0x5dcb56.setAttribute("aria-hidden", "true"),
      _0x5dcb56.setAttribute("data-univer-slides-print-frame", "true"),
      (_0x5dcb56.style["position"] = "fixed"),
      (_0x5dcb56.style["left"] = "-10000px"),
      (_0x5dcb56.style["top"] = "0"),
      (_0x5dcb56.style["width"] = "1px"),
      (_0x5dcb56.style["height"] = "1px"),
      (_0x5dcb56.style["border"] = "0"),
      (_0x5dcb56.style["pointerEvents"] = "none"),
      document.body["appendChild"](_0x5dcb56));
    let _0x47db32 = _0x5dcb56.contentWindow,
      _0x5e356d =
        _0x5dcb56.contentDocument ??
        (_0x47db32 == null ? undefined : _0x47db32.document);
    return !_0x47db32 || !_0x5e356d
      ? (_0x5dcb56.remove(), null)
      : (_0x5e356d.open(),
        _0x5e356d.write(
          "<!doctype html><html><head></head><body></body></html>",
        ),
        _0x5e356d.close(),
        { frame: _0x5dcb56, document: _0x5e356d, window: _0x47db32 });
  }
  _restoreThumbnailRenders(_0x4f7237, _0x41b415) {
    _0x41b415.forEach((_0xe43954) => {
      let _0x3faf4f = this._renderManagerService["getRenderUnitById"](
        _0x4f7237 + "-thumb-" + _0xe43954,
      );
      _0x3faf4f &&
        (_0x3faf4f.engine["resize"](),
        _0x3faf4f.scene["makeDirty"](true),
        _0x3faf4f.scene["render"]());
    });
  }
};
J = q(
  [
    K(0, _0x1bfb8f),
    K(1, _0x340bee(_0x14c425)),
    K(2, _0x8498e7),
    K(3, _0x376f63),
    K(4, _0x2f2630),
  ],
  J,
);
const Y = {
  id: "slide.operation.print",
  type: _0x34aee7.OPERATION,
  handler: async (_0x1f7cf9, _0x4b71e4) => {
    let _0x32c0db = _0x1f7cf9.get(_0x1bfb8f),
      _0x58463b = _0x1f7cf9.get(J),
      _0x331ca0 = _0x32c0db.getCurrentUnitOfType(_0x579b5d.UNIVER_SLIDE);
    return _0x331ca0
      ? _0x58463b.print(_0x331ca0.getUnitId(), _0x4b71e4)
      : false;
  },
};
function ut(_0x20a58e) {
  return {
    id: V.id,
    type: _0x5072b8.BUTTON,
    title: "slides-print.menu",
    icon: "PrintIcon",
    tooltip: "slides-print.menu",
    hidden$: _0x39aab8(_0x20a58e, _0x579b5d.UNIVER_SLIDE),
  };
}
const dt = {
  [_0x159e71.OTHERS]: {
    [V.id]: {
      order: 0.2,
      gridLayout: { row: 1, column: 2, rowSpan: 2, showLabel: true },
      menuItemFactory: ut,
    },
  },
};
var ft = "@univerjs-pro/slides-print",
  pt = "1.0.0-insiders.20260907-70fc579";
const mt = {};
let X = class extends _0x2bb531 {
  constructor(_0x1efb5c) {
    (super(), (this._iconManager = _0x1efb5c), this._registerIcons());
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({ PrintIcon: _0x157ce5 }));
  }
};
X = q([K(0, _0x340bee(_0x41285d))], X);
function ht(_0x3e965c, _0xddc95f) {
  let _0x21856b = _0x3e965c.trim();
  if (!_0x21856b) return { valid: true };
  let _0x315062 = [];
  for (let _0x3f94a5 of _0x21856b.split(",")) {
    let _0x1f29ef = /^\s*(\d+)(?:\s*-\s*(\d+))?\s*$/["exec"](_0x3f94a5);
    if (!_0x1f29ef) return { valid: false };
    let _0x3a2eef = Number(_0x1f29ef[1]),
      _0xd19e21 = Number(_0x1f29ef[2] ?? _0x1f29ef[1]);
    if (_0x3a2eef < 1 || _0xd19e21 < _0x3a2eef || _0xd19e21 > _0xddc95f)
      return { valid: false };
    _0x315062.push({ from: _0x3a2eef, to: _0xd19e21 });
  }
  return { valid: true, range: _0x315062 };
}
function gt(_0x203e29) {
  return (
    (_0x203e29 == null
      ? undefined
      : _0x203e29
          .map(({ from: _0x432592, to: _0xb0fadf }) =>
            _0x432592 === _0xb0fadf
              ? String(_0x432592)
              : _0x432592 + "-" + _0xb0fadf,
          )
          .join(",")) ?? ""
  );
}
const Z = [1, 2, 3, 4, 6, 9];
function _t({ model: _0x19fc36, page: _0x2bb59a, plan: _0x537795 }) {
  let _0x1d03d3 = _0x104b13(null),
    _0x1cd976 = _0x5b923b(_0x14c425),
    _0x1796ff = _0x5b923b(_0x8498e7),
    _0x22b975 = Math.min(1, 560 / _0x537795.pageSize["width"]);
  return (
    _0x509ede(() => {
      let _0x38bf76 = _0x1d03d3.current;
      if (!_0x38bf76) return;
      let _0x1efda0 = new it(
        document,
        _0x1cd976,
        _0x1796ff,
        _0x19fc36,
        _0x2bb59a,
        _0x537795.pageSize,
        { ..._0x537795.options, preview: true },
      );
      return (
        (_0x1efda0.container["style"].transform = "scale(" + _0x22b975 + ")"),
        (_0x1efda0.container["style"].transformOrigin = "top left"),
        _0x1efda0.container["classList"].add("univer-shadow-sm"),
        _0x38bf76.appendChild(_0x1efda0.container),
        _0x1efda0.render(),
        () => _0x1efda0.dispose()
      );
    }, [_0x1cd976, _0x19fc36, _0x2bb59a, _0x537795, _0x22b975, _0x1796ff]),
    _0x57fbe1("div", {
      ref: _0x1d03d3,
      className: "univer-relative univer-mx-auto univer-mb-7",
      style: {
        width: _0x537795.pageSize["width"] * _0x22b975,
        height: _0x537795.pageSize["height"] * _0x22b975,
      },
    })
  );
}
function vt({ totalSlides: _0x5ee77a }) {
  let _0x264531 = _0x5b923b(B),
    _0x12ad02 = _0x18c5fc(_0x264531.options$, _0x264531.options),
    _0x498be9 = _0x5b923b(_0x52b30c),
    [_0x291c48, _0xb2dc21] = _0x5141af(() => gt(_0x12ad02.range)),
    [_0x5183db, _0x56c841] = _0x5141af(true),
    _0x2073d6 = _0x12ad02.layout ?? "FullPage",
    _0x571a02 = _0x12ad02.slidesPerPage ?? 2;
  return _0x57fbe1("div", {
    className: _0x40c325("univer-h-full univer-overflow-y-auto", _0x57c618),
    children: _0x28e3b4("div", {
      className: "univer-p-4",
      children: [
        _0x28e3b4(_0x442a16, {
          label: _0x498be9.t("slides-print.settings.range"),
          children: [
            _0x57fbe1(_0x324baf, {
              value: _0x291c48,
              placeholder: _0x498be9.t(
                "slides-print.settings.rangePlaceholder",
              ),
              onChange: (_0x37980a) => {
                _0xb2dc21(_0x37980a);
                let _0xcd4e00 = ht(_0x37980a, _0x5ee77a);
                (_0x56c841(_0xcd4e00.valid),
                  _0xcd4e00.valid &&
                    _0x264531.updateOptions({ range: _0xcd4e00.range }));
              },
            }),
            !_0x5183db &&
              _0x57fbe1("div", {
                className: "univer-mt-1 univer-text-xs univer-text-red-500",
                children: _0x498be9.t("slides-print.settings.rangeInvalid"),
              }),
          ],
        }),
        _0x57fbe1(_0x442a16, {
          label: _0x498be9.t("slides-print.settings.layout"),
          children: _0x57fbe1(_0x51c002, {
            className: "univer-w-full",
            value: _0x2073d6,
            options: [
              {
                label: _0x498be9.t("slides-print.settings.fullPage"),
                value: "FullPage",
              },
              {
                label: _0x498be9.t("slides-print.settings.notesPage"),
                value: "NotesPage",
              },
              {
                label: _0x498be9.t("slides-print.settings.handout"),
                value: "Handout",
              },
            ],
            onChange: (_0x3892a8) => {
              let _0x4c5161 = Object.values(I).find(
                (_0x2c8e9e) => _0x2c8e9e === _0x3892a8,
              );
              _0x4c5161 &&
                _0x264531.updateOptions({
                  layout: _0x4c5161,
                  direction:
                    _0x4c5161 === "FullPage"
                      ? _0x582e36.Landscape
                      : _0x582e36.Portrait,
                  frameSlides: _0x4c5161 !== "FullPage",
                  showSlideNumber: _0x4c5161 !== "FullPage",
                });
            },
          }),
        }),
        _0x2073d6 === "Handout" &&
          _0x28e3b4(_0x45d339, {
            children: [
              _0x57fbe1(_0x442a16, {
                label: _0x498be9.t("slides-print.settings.slidesPerPage"),
                children: _0x57fbe1(_0x51c002, {
                  className: "univer-w-full",
                  value: String(_0x571a02),
                  options: Z.map((_0x339938) => ({
                    label: String(_0x339938),
                    value: String(_0x339938),
                  })),
                  onChange: (_0x374bad) => {
                    let _0x4096a9 = Z.find(
                      (_0x2eae27) => String(_0x2eae27) === _0x374bad,
                    );
                    _0x4096a9 &&
                      _0x264531.updateOptions({ slidesPerPage: _0x4096a9 });
                  },
                }),
              }),
              _0x571a02 >= 4 &&
                _0x57fbe1(_0x442a16, {
                  label: _0x498be9.t("slides-print.settings.order"),
                  children: _0x28e3b4(_0xaebe54, {
                    value: _0x12ad02.handoutOrder ?? "Horizontal",
                    onChange: (_0x23d64d) => {
                      (_0x23d64d === "Horizontal" ||
                        _0x23d64d === "Vertical") &&
                        _0x264531.updateOptions({ handoutOrder: _0x23d64d });
                    },
                    children: [
                      _0x57fbe1(_0x2b500b, {
                        value: "Horizontal",
                        children: _0x498be9.t(
                          "slides-print.settings.horizontal",
                        ),
                      }),
                      _0x57fbe1(_0x2b500b, {
                        value: "Vertical",
                        children: _0x498be9.t("slides-print.settings.vertical"),
                      }),
                    ],
                  }),
                }),
            ],
          }),
        _0x57fbe1(_0x442a16, {
          label: _0x498be9.t("slides-print.settings.paperSize"),
          children: _0x57fbe1(_0x51c002, {
            className: "univer-w-full",
            value: _0x12ad02.paperSize ?? _0x374d8d.A4,
            options: _0x2d9557.map((_0x340383) => ({
              label: _0x340383,
              value: _0x340383,
            })),
            onChange: (_0x3466b6) => {
              let _0x3d01d8 = _0x2d9557.find(
                (_0x4cdbc5) => _0x4cdbc5 === _0x3466b6,
              );
              _0x3d01d8 && _0x264531.updateOptions({ paperSize: _0x3d01d8 });
            },
          }),
        }),
        _0x57fbe1(_0x442a16, {
          label: _0x498be9.t("slides-print.settings.orientation"),
          children: _0x28e3b4(_0xaebe54, {
            value: _0x12ad02.direction ?? _0x582e36.Landscape,
            onChange: (_0x1396cc) => {
              (_0x1396cc === _0x582e36.Portrait ||
                _0x1396cc === _0x582e36.Landscape) &&
                _0x264531.updateOptions({ direction: _0x1396cc });
            },
            children: [
              _0x57fbe1(_0x2b500b, {
                value: _0x582e36.Portrait,
                children: _0x498be9.t("slides-print.settings.portrait"),
              }),
              _0x57fbe1(_0x2b500b, {
                value: _0x582e36.Landscape,
                children: _0x498be9.t("slides-print.settings.landscape"),
              }),
            ],
          }),
        }),
        _0x57fbe1(_0x442a16, {
          label: _0x498be9.t("slides-print.settings.margin"),
          children: _0x57fbe1(_0x51c002, {
            className: "univer-w-full",
            value: _0x12ad02.margin ?? _0x480b69.Normal,
            options: [
              {
                label: _0x498be9.t("slides-print.settings.normal"),
                value: _0x480b69.Normal,
              },
              {
                label: _0x498be9.t("slides-print.settings.narrow"),
                value: _0x480b69.Narrow,
              },
              {
                label: _0x498be9.t("slides-print.settings.wide"),
                value: _0x480b69.Wide,
              },
              {
                label: _0x498be9.t("slides-print.settings.none"),
                value: _0x480b69.None,
              },
            ],
            onChange: (_0x12a8b8) => {
              (_0x12a8b8 === _0x480b69.Normal ||
                _0x12a8b8 === _0x480b69.Narrow ||
                _0x12a8b8 === _0x480b69.Wide ||
                _0x12a8b8 === _0x480b69.None) &&
                _0x264531.updateOptions({ margin: _0x12a8b8 });
            },
          }),
        }),
        _0x57fbe1(_0x442a16, {
          label: _0x498be9.t("slides-print.settings.formatting"),
          children: _0x28e3b4("div", {
            className: "univer-flex univer-flex-col univer-gap-3",
            children: [
              _0x57fbe1(_0x1b3989, {
                checked: _0x12ad02.frameSlides ?? false,
                onChange: (_0x523038) => {
                  typeof _0x523038 == "boolean" &&
                    _0x264531.updateOptions({ frameSlides: _0x523038 });
                },
                children: _0x498be9.t("slides-print.settings.frameSlides"),
              }),
              _0x57fbe1(_0x1b3989, {
                checked: _0x12ad02.showSlideNumber ?? false,
                onChange: (_0x173542) => {
                  typeof _0x173542 == "boolean" &&
                    _0x264531.updateOptions({ showSlideNumber: _0x173542 });
                },
                children: _0x498be9.t("slides-print.settings.slideNumber"),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function yt() {
  let _0x10129c = _0x5b923b(_0x36130f),
    _0x53ca55 = _0x5b923b(B),
    _0xb71334 = _0x18c5fc(_0x53ca55.options$, _0x53ca55.options),
    _0x229442 = _0x5b923b(_0x1bfb8f),
    _0x8e3ba3 = _0x5b923b(_0x52b30c),
    _0x28d58f = _0x5b923b(_0x2f2630),
    [_0x44b7f6, _0x553ab9] = _0x5141af(false),
    [_0x22115c, _0x3a90af] = _0x5141af(),
    [_0x5d4bdf] = _0x5141af(() => {
      var _0x2e96f8;
      return (_0x2e96f8 = _0x229442.getCurrentUnitOfType(
        _0x579b5d.UNIVER_SLIDE,
      )) == null
        ? undefined
        : _0x2e96f8.getUnitId();
    }),
    _0x2d15be = _0x5d4bdf
      ? _0x229442.getUnit(_0x5d4bdf, _0x579b5d.UNIVER_SLIDE)
      : undefined,
    _0x4458a0 = _0x2d15be == null ? undefined : _0x2d15be.getSnapshot(),
    _0x28808d = _0x510da4(() => {
      if (!_0x2d15be || !_0x4458a0 || _0x22115c !== _0x5d4bdf) return;
      let _0x2588a6 = _0x2484f1(_0x4458a0.defaultPageSize),
        _0x49fe14 = Ue(
          lt(_0x4458a0.slideOrder["length"], _0xb71334.range)
            .map((_0x418d23) => ({
              index: _0x418d23,
              page: _0x2d15be.pageManager["getSlide"](
                _0x4458a0.slideOrder[_0x418d23],
              ),
            }))
            .filter((_0x546740) => !!_0x546740.page),
          _0x2588a6,
        ),
        _0x2ef209 = document.createElement("canvas").getContext("2d");
      return (
        _0x2ef209 && (_0x2ef209.font = "14px Arial, sans-serif"),
        He(
          _0x49fe14,
          _0x2588a6,
          _0xb71334,
          (_0x57b2a7) =>
            (_0x2ef209 == null
              ? undefined
              : _0x2ef209.measureText(_0x57b2a7).width) ??
            _0x57b2a7.length * 14 * 0.55,
        )
      );
    }, [_0x2d15be, _0xb71334, _0x22115c, _0x4458a0, _0x5d4bdf]);
  return (
    _0x509ede(() => {
      if (!_0x2d15be || !_0x5d4bdf) return;
      let _0x24f170 = true;
      return (
        _0x28d58f
          .prepare({
            unitId: _0x5d4bdf,
            unitType: _0x579b5d.UNIVER_SLIDE,
            dpr: 1,
          })
          .then(
            () => {
              _0x24f170 && _0x3a90af(_0x5d4bdf);
            },
            () => {
              _0x24f170 && _0x3a90af(undefined);
            },
          ),
        () => {
          _0x24f170 = false;
        }
      );
    }, [_0x2d15be, _0x28d58f, _0x5d4bdf]),
    !_0x2d15be || !_0x4458a0
      ? null
      : _0x28e3b4("div", {
          className:
            "univer-absolute univer-inset-0 univer-z-[100] univer-flex univer-size-full univer-flex-col univer-overflow-hidden univer-bg-gray-100 dark:!univer-bg-gray-900",
          children: [
            _0x28e3b4("div", {
              className: _0x40c325(
                "univer-flex univer-h-16 univer-items-center univer-justify-between univer-bg-gray-0 univer-px-4 dark:!univer-bg-gray-900",
                _0x2fef34,
              ),
              children: [
                _0x57fbe1("div", {
                  className:
                    "univer-ml-2 univer-text-base univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
                  children: _0x8e3ba3.t(
                    "slides-print.header.pages",
                    String(
                      (_0x28808d == null
                        ? undefined
                        : _0x28808d.pages["length"]) ?? 0,
                    ),
                  ),
                }),
                _0x28e3b4("div", {
                  className: "univer-flex univer-gap-2",
                  children: [
                    _0x57fbe1(_0x3d7a89, {
                      disabled: _0x44b7f6,
                      onClick: () => _0x10129c.executeCommand(H.id),
                      children: _0x8e3ba3.t("slides-print.header.cancel"),
                    }),
                    _0x57fbe1(_0x3d7a89, {
                      variant: "primary",
                      disabled:
                        _0x44b7f6 ||
                        !(_0x28808d != null && _0x28808d.pages["length"]),
                      onClick: async () => {
                        _0x553ab9(true);
                        try {
                          (await _0x10129c.executeCommand(Y.id, _0xb71334)) &&
                            (await _0x10129c.executeCommand(H.id));
                        } finally {
                          _0x553ab9(false);
                        }
                      },
                      children: _0x44b7f6
                        ? _0x8e3ba3.t("slides-print.header.printing")
                        : _0x8e3ba3.t("slides-print.header.next"),
                    }),
                  ],
                }),
              ],
            }),
            _0x28e3b4("div", {
              className: "univer-flex univer-flex-1 univer-overflow-hidden",
              children: [
                _0x57fbe1("div", {
                  className: _0x40c325(
                    "univer-flex-1 univer-overflow-auto univer-p-7",
                    _0x57c618,
                  ),
                  "aria-busy": !_0x28808d,
                  children: _0x28808d
                    ? _0x28808d.pages["map"]((_0x4f04be) =>
                        _0x57fbe1(
                          _t,
                          {
                            model: _0x2d15be,
                            page: _0x4f04be,
                            plan: _0x28808d,
                          },
                          _0x4f04be.key,
                        ),
                      )
                    : _0x57fbe1("div", {
                        className:
                          "univer-flex univer-size-full univer-items-center univer-justify-center",
                        role: "status",
                        "aria-label": _0x8e3ba3.t(
                          "slides-print.header.printing",
                        ),
                        children: _0x57fbe1(_0x1d9293, {
                          className:
                            "univer-size-8\x20univer-animate-spin\x20univer-text-gray-500",
                          "aria-hidden": "true",
                        }),
                      }),
                }),
                _0x57fbe1("div", {
                  className:
                    "univer-box-border univer-h-full univer-w-[312px] univer-flex-none univer-bg-gray-0 dark:!univer-bg-gray-900",
                  children: _0x57fbe1(vt, {
                    totalSlides: _0x4458a0.slideOrder["length"],
                  }),
                }),
              ],
            }),
          ],
        })
  );
}
function bt() {
  let _0x5e4fe1 = _0x5b923b(B);
  return _0x18c5fc(_0x5e4fe1.visible$, _0x5e4fe1.visible)
    ? _0x57fbe1(yt, {})
    : null;
}
let Q = class extends _0x2bb531 {
  constructor(_0x1f83a3, _0x4aa566, _0x36f205, _0x47a1e8) {
    (super(),
      (this._commandService = _0x1f83a3),
      (this._menuManagerService = _0x4aa566),
      (this._uiPartsService = _0x36f205),
      (this._injector = _0x47a1e8),
      this._initCommands(),
      this._initUIParts(),
      this._initMenus());
  }
  _initCommands() {
    [Y, V, H].forEach((_0x143399) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x143399)),
    );
  }
  _initUIParts() {
    this.disposeWithMe(
      this._uiPartsService["registerComponent"](_0x23a2e6.GLOBAL, () =>
        _0x4a71e6(bt, this._injector),
      ),
    );
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](dt);
  }
};
Q = q(
  [
    K(0, _0x36130f),
    K(1, _0x34825c),
    K(2, _0x5de953),
    K(3, _0x340bee(_0x14c425)),
  ],
  Q,
);
let $ = class extends _0x9a93b3 {
  constructor(_0xfd0dec = mt, _0x54ab32, _0x555cfc) {
    (super(),
      (this._config = _0xfd0dec),
      (this._injector = _0x54ab32),
      (this._configService = _0x555cfc));
    let { menu: _0xd42d31, ..._0x1871db } = _0x53325d({}, mt, this._config);
    (_0xd42d31 &&
      this._configService["setConfig"]("menu", _0xd42d31, { merge: true }),
      this._configService["setConfig"]("slides-print.config", _0x1871db));
  }
  onStarting() {
    (this._injector["has"](_0x2f2630) ||
      this._injector["add"]([_0x2f2630, { useClass: _0x557bd2 }]),
      this._injector["add"]([X]),
      this._injector["get"](X),
      this._injector["has"](U) || this._injector["add"]([U]),
      _0x3c1dfd(this._injector, [[J], [B, { useClass: et }], [Q]]));
  }
  onReady() {
    this._injector["get"](Q);
  }
};
(z($, "pluginName", "SLIDES_PRINT_PLUGIN"),
  z($, "packageName", ft),
  z($, "version", pt),
  z($, "type", _0x579b5d.UNIVER_SLIDE),
  ($ = q(
    [
      _0x2043f5(_0x489d7b, _0x2dcc70, _0x5cb253, _0x36a386),
      K(1, _0x340bee(_0x14c425)),
      K(2, _0x1568c1),
    ],
    $,
  )));
export {
  V as OpenSlidePrintDialogOperation,
  U as SlidePrintDrawingTransformService,
  Be as SlidePrintHandoutOrder,
  I as SlidePrintLayoutType,
  Y as SlidePrintOperation,
  dt as SlidesPrintMenuSchema,
  $ as UniverSlidesPrintPlugin,
};
