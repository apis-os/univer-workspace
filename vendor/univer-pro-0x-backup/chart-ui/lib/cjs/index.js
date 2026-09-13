Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-chart"),
  t = require("@univerjs/design"),
  n = require("@univerjs/icons"),
  r = require("react"),
  i = require("react/jsx-runtime"),
  a = require("@univerjs/core"),
  o = require("@univerjs/ui"),
  s = require("@univerjs-pro/embed-unit-ui"),
  c = require("@univerjs-pro/embed"),
  l = require("@univerjs/engine-formula"),
  u = require("rxjs"),
  d = require("@univerjs-pro/license"),
  f = (function (_0x1e67bc) {
    return (
      (_0x1e67bc.Inset = "inset"),
      (_0x1e67bc.Overlay = "overlay"),
      _0x1e67bc
    );
  })({});
var p = class {
  static resolve(_0x857291) {
    let _0x46ba15 = m(
        _0x857291.logicalOuterRect["left"],
        _0x857291.logicalOuterRect["top"],
        _0x857291.logicalOuterRect["width"],
        _0x857291.logicalOuterRect["height"],
      ),
      _0x47cd97 = _0x46ba15;
    if (
      _0x857291.contentMode === "inset" &&
      (0, e.shouldComposeChartHostFrame)(_0x857291.hostStyle)
    ) {
      let _0x25ac46 = (0, e.getChartHostFrameContentRect)(
        _0x46ba15,
        _0x857291.hostStyle,
      );
      _0x47cd97 = m(
        _0x46ba15.left + _0x25ac46.left,
        _0x46ba15.top + _0x25ac46.top,
        _0x25ac46.width,
        _0x25ac46.height,
      );
    }
    return Object.freeze({
      logicalOuterRect: _0x46ba15,
      logicalContentRect: _0x47cd97,
      renderedOuterRect: h(
        _0x46ba15,
        _0x857291.scale["scaleX"],
        _0x857291.scale["scaleY"],
      ),
      renderedContentRect: h(
        _0x47cd97,
        _0x857291.scale["scaleX"],
        _0x857291.scale["scaleY"],
      ),
      contentMode: _0x857291.contentMode,
    });
  }
};
function m(_0x492f9c, _0x4ce420, _0xd3ee1f, _0x142b5b) {
  if (
    (g(_0x492f9c, "left"),
    g(_0x4ce420, "top"),
    g(_0xd3ee1f, "width"),
    g(_0x142b5b, "height"),
    _0xd3ee1f < 0 || _0x142b5b < 0)
  )
    throw RangeError("Chart frame dimensions cannot be negative.");
  return Object.freeze({
    left: _0x492f9c,
    top: _0x4ce420,
    width: _0xd3ee1f,
    height: _0x142b5b,
  });
}
function h(_0x424e3c, _0x548aea, _0x233193) {
  if (
    (g(_0x548aea, "scaleX"),
    g(_0x233193, "scaleY"),
    _0x548aea < 0 || _0x233193 < 0)
  )
    throw RangeError("Chart frame scales cannot be negative.");
  return m(
    _0x424e3c.left * _0x548aea,
    _0x424e3c.top * _0x233193,
    _0x424e3c.width * _0x548aea,
    _0x424e3c.height * _0x233193,
  );
}
function g(_0x510e2c, _0x359a30) {
  if (!Number.isFinite(_0x510e2c))
    throw TypeError(_0x359a30 + " must be finite.");
}
function _(_0x2489fb) {
  "@babel/helpers - typeof";
  return (
    (_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5cd4a4) {
            return typeof _0x5cd4a4;
          }
        : function (_0x42259a) {
            return _0x42259a &&
              typeof Symbol == "function" &&
              _0x42259a.constructor === Symbol &&
              _0x42259a !== Symbol.prototype
              ? "symbol"
              : typeof _0x42259a;
          }),
    _(_0x2489fb)
  );
}
function v(_0x1bcae7, _0x5a04cf) {
  if (_(_0x1bcae7) != "object" || !_0x1bcae7) return _0x1bcae7;
  var _0x2b6411 = _0x1bcae7[Symbol.toPrimitive];
  if (_0x2b6411 !== undefined) {
    var _0x5df352 = _0x2b6411.call(_0x1bcae7, _0x5a04cf || "default");
    if (_(_0x5df352) != "object") return _0x5df352;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5a04cf === "string" ? String : Number)(_0x1bcae7);
}
function y(_0x2d0355) {
  var _0x25807c = v(_0x2d0355, "string");
  return _(_0x25807c) == "symbol" ? _0x25807c : _0x25807c + "";
}
function b(_0x2183cf, _0x3163ea, _0x601d54) {
  return (
    (_0x3163ea = y(_0x3163ea)) in _0x2183cf
      ? Object[_0x452a16(1537)](_0x2183cf, _0x3163ea, {
          value: _0x601d54,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2183cf[_0x3163ea] = _0x601d54),
    _0x2183cf
  );
}
function x(_0x5ea281, _0x7d9265) {
  let _0x4c3322 = (0, e[_0x124bfb(876)])(_0x7d9265);
  return JSON[_0x124bfb(991)]({
    outer: _0x5ea281.logicalOuterRect,
    content: _0x5ea281[_0x124bfb(1291)],
    rendered: _0x5ea281[_0x124bfb(1005)],
    mode: _0x5ea281[_0x124bfb(511)],
    fill: _0x7d9265.fill ?? "",
    border: _0x4c3322,
    radius: _0x7d9265[_0x124bfb(494)] ?? 0,
  });
}
var S = class {
  constructor(_0x39e5ca) {
    ((this[_0xa8b37c(1299)] = _0x39e5ca),
      b(this, _0xa8b37c(564), undefined),
      b(this, _0xa8b37c(1297), undefined),
      b(this, _0xa8b37c(1733), null),
      b(this, "_stateKey", ""),
      (this[_0xa8b37c(1297)] = document[_0xa8b37c(1438)](_0xa8b37c(1998))),
      (this[_0xa8b37c(1297)][_0xa8b37c(994)] = _0xa8b37c(857)),
      (this[_0xa8b37c(564)] = document.createElement(_0xa8b37c(1998))),
      (this[_0xa8b37c(564)].className = "chart-host"),
      this[_0xa8b37c(1297)][_0xa8b37c(1595)](this.mountNode),
      this._root[_0xa8b37c(1595)](this[_0xa8b37c(1297)]));
  }
  update(_0x15cd48, _0x3093f7) {
    let _0x5058ad = x(_0x15cd48, _0x3093f7);
    if (_0x5058ad === this[_0x50c4f6(1454)]) return;
    this[_0x50c4f6(1454)] = _0x5058ad;
    let _0x130497 = _0x15cd48[_0x50c4f6(567)],
      _0x51d1e8 = _0x15cd48.logicalContentRect,
      _0x45fac3 =
        _0x130497[_0x50c4f6(989)] === 0
          ? 1
          : _0x15cd48[_0x50c4f6(1005)][_0x50c4f6(989)] /
            _0x130497[_0x50c4f6(989)],
      _0x32e393 =
        _0x130497[_0x50c4f6(787)] === 0
          ? 1
          : _0x15cd48.renderedOuterRect[_0x50c4f6(787)] / _0x130497.height,
      _0x51791 = (0, e[_0x50c4f6(876)])(_0x3093f7),
      _0x434086 =
        _0x15cd48[_0x50c4f6(511)] === _0x50c4f6(1228)
          ? ((_0x51791 == null ? undefined : _0x51791[_0x50c4f6(989)]) ?? 0)
          : 0,
      _0x731957 = Math[_0x50c4f6(628)](
        0,
        Number[_0x50c4f6(1541)](_0x3093f7[_0x50c4f6(494)])
          ? (_0x3093f7[_0x50c4f6(494)] ?? 0)
          : 0,
      );
    if (
      (Object[_0x50c4f6(732)](this._frameNode[_0x50c4f6(1169)], {
        position: _0x50c4f6(1038),
        left: _0x130497.left + "px",
        top: _0x130497[_0x50c4f6(491)] + "px",
        width: _0x130497[_0x50c4f6(989)] + "px",
        height: _0x130497[_0x50c4f6(787)] + "px",
        transform: _0x50c4f6(1870) + _0x45fac3 + ",\x20" + _0x32e393 + ")",
        transformOrigin: _0x50c4f6(865),
        boxSizing: _0x50c4f6(1276),
        overflow: "hidden",
        borderRadius: _0x731957 + "px",
        backgroundColor: _0x3093f7[_0x50c4f6(1644)] ?? "",
        border:
          _0x15cd48[_0x50c4f6(511)] === _0x50c4f6(1228) && _0x51791
            ? _0x51791.width + "px\x20solid\x20" + _0x51791[_0x50c4f6(1393)]
            : "0",
      }),
      Object.assign(this.mountNode[_0x50c4f6(1169)], {
        position: _0x50c4f6(1038),
        left:
          _0x51d1e8[_0x50c4f6(516)] -
          _0x130497[_0x50c4f6(516)] -
          _0x434086 +
          "px",
        top:
          _0x51d1e8[_0x50c4f6(491)] -
          _0x130497[_0x50c4f6(491)] -
          _0x434086 +
          "px",
        width: _0x51d1e8[_0x50c4f6(989)] + "px",
        height: _0x51d1e8[_0x50c4f6(787)] + "px",
        border: "0",
        boxSizing: _0x50c4f6(1389),
        overflow: _0x50c4f6(2020),
      }),
      _0x15cd48[_0x50c4f6(511)] === _0x50c4f6(481))
    )
      ((this[_0x50c4f6(1733)] ??= this._createBorderNode()),
        (this[_0x50c4f6(1733)][_0x50c4f6(1169)][_0x50c4f6(1464)] = _0x51791
          ? _0x51791[_0x50c4f6(989)] + _0x50c4f6(531) + _0x51791.color
          : "0"));
    else {
      var _0x341ada;
      ((_0x341ada = this[_0x50c4f6(1733)]) == null ||
        _0x341ada[_0x50c4f6(1225)](),
        (this._borderNode = null));
    }
  }
  dispose() {
    (this[_0x419c6d(1297)][_0x419c6d(1225)](), (this._borderNode = null));
  }
  _createBorderNode() {
    let _0x3ad55f = document[_0x3eab21(1438)](_0x3eab21(1998));
    return (
      (_0x3ad55f[_0x3eab21(994)] = "chart-host-border"),
      Object[_0x3eab21(732)](_0x3ad55f[_0x3eab21(1169)], {
        position: "absolute",
        left: "0",
        top: "0",
        width: _0x3eab21(811),
        height: _0x3eab21(811),
        boxSizing: "border-box",
        pointerEvents: _0x3eab21(1325),
        borderRadius: _0x3eab21(758),
      }),
      this._frameNode[_0x3eab21(1595)](_0x3ad55f),
      _0x3ad55f
    );
  }
};
let C = (function (_0xf62682) {
  return (
    (_0xf62682[_0x5de4cd(1635)] = _0x5de4cd(1713)),
    (_0xf62682[_0x5de4cd(1748)] = _0x5de4cd(1886)),
    (_0xf62682[_0x5de4cd(1095)] = _0x5de4cd(914)),
    (_0xf62682.BubbleSeriesIndex = "bubbleSeriesIndex"),
    (_0xf62682[_0x5de4cd(1229)] = _0x5de4cd(650)),
    _0xf62682
  );
})({});
const w = ["A", "B", "C"],
  ee = [
    ["US", "Software"],
    ["US", "Hardware"],
    ["UA", "Software"],
    ["UA", "Hardware"],
  ];
function te(_0x16b774) {
  return _0x16b774 === e[_0x47c64e(653)][_0x47c64e(861)] ? 1 : 2;
}
function T(_0x24d385, _0x13b8f4) {
  let _0x2f59d0 = (0, e[_0x4120d8(1793)])(_0x24d385);
  if (_0x2f59d0)
    switch (_0x24d385) {
      case e[_0x4120d8(653)][_0x4120d8(615)]:
        return [
          [
            _0x13b8f4.category,
            _0x13b8f4[_0x4120d8(2008)],
            _0x13b8f4[_0x4120d8(1461)],
            _0x13b8f4[_0x4120d8(1306)],
            _0x13b8f4[_0x4120d8(1609)],
          ],
          ..._0x2f59d0,
        ];
      case e[_0x4120d8(653)].Histogram:
        return [[_0x13b8f4[_0x4120d8(838)]], ..._0x2f59d0];
      case e.ChartTypeBits[_0x4120d8(1478)]:
        return [
          [...w],
          ...ee[_0x4120d8(1285)](([_0x16e0ca, _0xe41ae5], _0x3432aa) => {
            var _0x306607;
            return [
              _0x16e0ca,
              _0xe41ae5,
              ((_0x306607 = _0x2f59d0[_0x3432aa]) == null
                ? undefined
                : _0x306607[2]) ?? null,
            ];
          }),
        ];
      case e[_0x4120d8(653)][_0x4120d8(1220)]:
        return [
          [
            _0x13b8f4[_0x4120d8(1695)] + "\x201",
            _0x13b8f4[_0x4120d8(1695)] + "\x202",
            _0x13b8f4[_0x4120d8(1324)],
          ],
          ..._0x2f59d0,
        ];
      case e[_0x4120d8(653)][_0x4120d8(746)]:
        return [[_0x13b8f4.label, _0x13b8f4[_0x4120d8(1324)]], ..._0x2f59d0];
      case e[_0x4120d8(653)].Chord:
        return [
          [
            _0x13b8f4.chordSource,
            _0x13b8f4[_0x4120d8(669)],
            _0x13b8f4[_0x4120d8(1324)],
          ],
          ..._0x2f59d0,
        ];
      default:
        return;
    }
}
function E(_0x2d7b03, _0x420562) {
  return _0x2d7b03
    ? _0x420562
      ? _0x29ca39(1133)
      : "univer-text-primary-600"
    : _0x29ca39(1456);
}
function ne(_0x1267f7) {
  let _0x220376 = _0x1267f7[_0x4fa6b9(1897)] === _0x4fa6b9(697);
  function _0x2e0696(_0x1e7ab9, _0x19d4ab) {
    const _0x3b5d7e = _0x4fa6b9;
    var _0x921f92;
    let _0x26672b = _0x19d4ab;
    if (_0x1e7ab9[_0x3b5d7e(1198)] === _0x3b5d7e(1334))
      _0x26672b =
        _0x19d4ab === 0 ? _0x1267f7[_0x3b5d7e(1914)].length - 1 : _0x19d4ab - 1;
    else {
      if (_0x1e7ab9[_0x3b5d7e(1198)] === _0x3b5d7e(1581))
        _0x26672b =
          _0x19d4ab === _0x1267f7.items[_0x3b5d7e(1579)] - 1
            ? 0
            : _0x19d4ab + 1;
      else {
        if (_0x1e7ab9[_0x3b5d7e(1198)] === _0x3b5d7e(1028)) _0x26672b = 0;
        else {
          if (_0x1e7ab9[_0x3b5d7e(1198)] === _0x3b5d7e(1270))
            _0x26672b = _0x1267f7[_0x3b5d7e(1914)][_0x3b5d7e(1579)] - 1;
          else return;
        }
      }
    }
    _0x1e7ab9[_0x3b5d7e(1586)]();
    let _0x2ba934 = _0x1267f7[_0x3b5d7e(1914)][_0x26672b];
    _0x2ba934 &&
      (_0x1267f7[_0x3b5d7e(507)](_0x2ba934[_0x3b5d7e(1324)]),
      (_0x921f92 = _0x1e7ab9[_0x3b5d7e(728)][_0x3b5d7e(1941)](
        _0x3b5d7e(1884),
      )) == null ||
        _0x921f92[_0x3b5d7e(778)]("[role=\x22tab\x22]")
          .item(_0x26672b)
          .focus());
  }
  return (0, i[_0x4fa6b9(922)])(_0x4fa6b9(1998), {
    "aria-label": _0x1267f7[_0x4fa6b9(1698)],
    className: (0, t.clsx)(
      _0x220376 ? _0x4fa6b9(1431) : _0x4fa6b9(1967),
      _0x1267f7[_0x4fa6b9(994)],
    ),
    role: _0x4fa6b9(490),
    children: _0x1267f7[_0x4fa6b9(1914)][_0x4fa6b9(1285)](
      (_0xbae5fe, _0x37e314) => {
        const _0x51ce01 = _0x4fa6b9;
        let _0x58e620 = _0xbae5fe[_0x51ce01(1324)] === _0x1267f7.value;
        return (0, i[_0x51ce01(1557)])(
          _0x51ce01(1204),
          {
            id: _0xbae5fe[_0x51ce01(641)] + "-tab",
            "aria-controls": _0xbae5fe[_0x51ce01(641)],
            "aria-selected": _0x58e620,
            className: (0, t[_0x51ce01(1916)])(
              _0x51ce01(1559),
              _0x220376
                ? _0x51ce01(537)
                : "univer-mr-5\x20univer-bg-transparent\x20univer-py-4",
              E(_0x58e620, _0x220376),
            ),
            role: "tab",
            tabIndex: _0x58e620 ? 0 : -1,
            type: "button",
            onClick: () =>
              _0x1267f7[_0x51ce01(507)](_0xbae5fe[_0x51ce01(1324)]),
            onKeyDown: (_0xf65bcf) => _0x2e0696(_0xf65bcf, _0x37e314),
            children: [
              _0xbae5fe[_0x51ce01(1614)],
              !_0x220376 &&
                (0, i[_0x51ce01(922)])("span", {
                  "aria-hidden": _0x51ce01(1582),
                  className: (0, t[_0x51ce01(1916)])(
                    "univer-mx-auto\x20univer-mt-2\x20univer-block\x20univer-h-1\x20univer-w-1/2\x20univer-rounded-md",
                    _0x58e620 ? "univer-bg-primary-600" : _0x51ce01(538),
                  ),
                }),
            ],
          },
          _0xbae5fe[_0x51ce01(1324)],
        );
      },
    ),
  });
}
function re(_0x5ec892) {
  let _0x2f377b = _0x5ec892.id + _0x3eeb37(1144);
  return (0, i[_0x3eeb37(1557)])(_0x3eeb37(1837), {
    id: _0x5ec892.id,
    "aria-labelledby": _0x5ec892.id + "-tab\x20" + _0x2f377b,
    className: (0, t[_0x3eeb37(1916)])(
      "univer-min-h-0\x20univer-flex-1\x20univer-overflow-y-auto\x20univer-overscroll-contain",
      _0x5ec892[_0x3eeb37(994)],
    ),
    role: _0x3eeb37(1697),
    children: [
      (0, i[_0x3eeb37(922)])("h2", {
        id: _0x2f377b,
        className: _0x3eeb37(911),
        children: _0x5ec892.label,
      }),
      _0x5ec892[_0x3eeb37(1492)],
    ],
  });
}
function ie(_0x4b37ed) {
  return (0, i[_0x48d70d(922)])("div", {
    className: _0x48d70d(1424),
    children: _0x4b37ed[_0x48d70d(1703)],
  });
}
const ae = (0, r.createContext)(null),
  oe = (0, r.createContext)(null);
function se() {
  let _0x3addef = (0, r[_0x742e0a(1443)])(ae);
  if (!_0x3addef) throw Error(_0x742e0a(1657));
  return _0x3addef;
}
function ce() {
  let _0x2f943e = (0, r[_0x26507a(1443)])(oe);
  if (!_0x2f943e)
    throw Error(
      "ChartSectionAccordion\x20child\x20must\x20be\x20used\x20inside\x20ChartSectionAccordionItem",
    );
  return _0x2f943e;
}
function le(_0x5d8030) {
  return (0, i[_0x309223(922)])(ae[_0x309223(1838)], {
    value: { onChange: _0x5d8030.onChange, value: _0x5d8030[_0x309223(1324)] },
    children: (0, i[_0x309223(922)])(_0x309223(1998), {
      className: _0x5d8030[_0x309223(994)],
      "data-chart-section-accordion": true,
      children: _0x5d8030[_0x309223(1492)],
    }),
  });
}
function ue(_0x455370) {
  let _0x5db670 = se(),
    _0x4db94a = (0, r[_0x408ce6(1243)])(),
    _0xb99b85 = _0x4db94a + _0x408ce6(1442),
    _0x202eb8 = _0x4db94a + "-content";
  return (0, i[_0x408ce6(922)])(oe[_0x408ce6(1838)], {
    value: {
      contentId: _0x202eb8,
      id: _0x455370.id,
      open: _0x5db670[_0x408ce6(1324)] === _0x455370.id,
      triggerId: _0xb99b85,
    },
    children: (0, i[_0x408ce6(922)])(_0x408ce6(1998), {
      className: _0x455370[_0x408ce6(994)],
      "data-chart-section-item": _0x455370.id,
      children: _0x455370[_0x408ce6(1492)],
    }),
  });
}
function de(_0x5378fc) {
  let _0x31f39d = se(),
    _0x4a55b2 = ce();
  function _0x23be87(_0x89c303) {
    var _0x535c6b;
    let _0x40cf3d =
      (_0x535c6b = _0x89c303[_0x43f402(728)].closest(_0x43f402(916))) == null
        ? undefined
        : _0x535c6b[_0x43f402(778)](_0x43f402(1473));
    if (!(_0x40cf3d != null && _0x40cf3d[_0x43f402(1579)])) return;
    let _0x4d1196 = Array[_0x43f402(2034)](_0x40cf3d).indexOf(
        _0x89c303[_0x43f402(728)],
      ),
      _0x550f42 = _0x4d1196;
    if (_0x89c303[_0x43f402(1198)] === _0x43f402(1630))
      _0x550f42 =
        _0x4d1196 === 0 ? _0x40cf3d[_0x43f402(1579)] - 1 : _0x4d1196 - 1;
    else {
      if (_0x89c303[_0x43f402(1198)] === _0x43f402(579))
        _0x550f42 =
          _0x4d1196 === _0x40cf3d[_0x43f402(1579)] - 1 ? 0 : _0x4d1196 + 1;
      else {
        if (_0x89c303[_0x43f402(1198)] === _0x43f402(1028)) _0x550f42 = 0;
        else {
          if (_0x89c303.key === _0x43f402(1270))
            _0x550f42 = _0x40cf3d.length - 1;
          else return;
        }
      }
    }
    (_0x89c303[_0x43f402(1586)](),
      _0x40cf3d[_0x43f402(1720)](_0x550f42).focus());
  }
  return (0, i[_0x2a6bf1(1557)])("button", {
    id: _0x4a55b2[_0x2a6bf1(1027)],
    "aria-controls": _0x4a55b2[_0x2a6bf1(512)],
    "aria-expanded": _0x4a55b2[_0x2a6bf1(601)],
    className: (0, t[_0x2a6bf1(1916)])(
      _0x2a6bf1(1260),
      _0x4a55b2[_0x2a6bf1(601)] ? _0x2a6bf1(846) : _0x2a6bf1(538),
      _0x5378fc.className,
    ),
    "data-chart-section-trigger": true,
    type: _0x2a6bf1(1204),
    onClick: () =>
      _0x31f39d.onChange(_0x4a55b2[_0x2a6bf1(601)] ? null : _0x4a55b2.id),
    onKeyDown: _0x23be87,
    children: [
      (0, i[_0x2a6bf1(922)])(n.DownIcon, {
        "aria-hidden": _0x2a6bf1(1582),
        className: (0, t[_0x2a6bf1(1916)])(
          _0x2a6bf1(961),
          _0x4a55b2.open
            ? "univer-rotate-0"
            : "-univer-rotate-90\x20rtl:univer-rotate-90",
        ),
      }),
      _0x5378fc.children,
    ],
  });
}
function fe(_0x314327) {
  let _0x2054bb = ce();
  return (0, i[_0x49ba7d(922)])(_0x49ba7d(1998), {
    id: _0x2054bb[_0x49ba7d(512)],
    "aria-labelledby": _0x2054bb[_0x49ba7d(1027)],
    className: (0, t.clsx)(_0x49ba7d(1413), _0x314327[_0x49ba7d(994)]),
    "data-chart-section-content": true,
    hidden: !_0x2054bb[_0x49ba7d(601)],
    role: _0x49ba7d(493),
    children: _0x314327[_0x49ba7d(1492)],
  });
}
function pe() {
  let _0x5b703b = (0, o.useDependency)(a[_0x5cb563(1954)]);
  return {
    onFocus: (0, r[_0x5cb563(1365)])(
      () => _0x5b703b[_0x5cb563(1841)](a[_0x5cb563(551)], true),
      [_0x5b703b],
    ),
    onBlur: (0, r[_0x5cb563(1365)])(
      () => _0x5b703b[_0x5cb563(1841)](a[_0x5cb563(551)], false),
      [_0x5b703b],
    ),
  };
}
function me(_0x8ea535) {
  return _0x8ea535 == null ? "" : String(_0x8ea535);
}
function he(_0x118296) {
  let _0x4dc6b5 = _0x118296[_0x1ab6f3(1342)]();
  return _0x4dc6b5 === ""
    ? null
    : /^(?:true|false)$/i[_0x1ab6f3(1208)](_0x4dc6b5)
      ? _0x4dc6b5[_0x1ab6f3(898)]() === _0x1ab6f3(1582)
      : /^-?(?:\d+|\d*\.\d+)$/[_0x1ab6f3(1208)](_0x4dc6b5)
        ? Number(_0x4dc6b5)
        : _0x118296;
}
function ge(_0x1ba6ee, _0x52f812 = 1, _0x45d9d1 = 1) {
  let _0x4b1f23 = Math[_0x4c1839(628)](
      _0x45d9d1,
      0,
      ..._0x1ba6ee[_0x4c1839(1285)]((_0x1a3d4a) => _0x1a3d4a.length),
    ),
    _0x3c47e8 = Math.max(_0x52f812, _0x1ba6ee[_0x4c1839(1579)]);
  return Array[_0x4c1839(2034)](
    { length: _0x3c47e8 },
    (_0x12e67a, _0x405f86) => {
      let _0x38b908 = _0x1ba6ee[_0x405f86] ?? [];
      return Array.from(
        { length: _0x4b1f23 },
        (_0x310576, _0xcab89a) => _0x38b908[_0xcab89a] ?? null,
      );
    },
  );
}
function _e(_0x9563b) {
  var _0x85d33e;
  let _0x4c1fd6 = ge(_0x9563b),
    _0x121185 =
      ((_0x85d33e = _0x4c1fd6[0]) == null
        ? undefined
        : _0x85d33e[_0x18effa(1579)]) ?? 1;
  return [
    ..._0x4c1fd6,
    Array[_0x18effa(2034)]({ length: _0x121185 }, () => null),
  ];
}
function ve(_0x417572) {
  return ge(_0x417572)[_0x1e8eae(1285)]((_0x213f3c) => [..._0x213f3c, null]);
}
function ye(_0x58de2c) {
  return _0x58de2c[_0x546208(1399)]((_0x511081) =>
    _0x511081[_0x546208(1399)](
      (_0x3dab51) =>
        _0x3dab51 != null && String(_0x3dab51)[_0x546208(1342)]() !== "",
    ),
  );
}
function be(_0xec55e4) {
  var _0x40cf98;
  let _0x1c584d = ge(_0xec55e4);
  if (!ye(_0x1c584d)) return [];
  let _0x1e0fc5 = _0x1c584d[_0x245e20(1579)] - 1;
  for (
    ;
    _0x1e0fc5 >= 0 &&
    _0x1c584d[_0x1e0fc5][_0x245e20(799)](
      (_0x34fe65) => _0x34fe65 == null || String(_0x34fe65).trim() === "",
    );
  )
    _0x1e0fc5--;
  let _0x2acc78 =
    (((_0x40cf98 = _0x1c584d[0]) == null
      ? undefined
      : _0x40cf98[_0x245e20(1579)]) ?? 0) - 1;
  for (
    ;
    _0x2acc78 >= 0 &&
    _0x1c584d[_0x245e20(799)](
      (_0x4a78f7) =>
        _0x4a78f7[_0x2acc78] == null ||
        String(_0x4a78f7[_0x2acc78]).trim() === "",
    );
  )
    _0x2acc78--;
  return _0x1c584d[_0x245e20(1980)](0, _0x1e0fc5 + 1).map((_0x1dbd4e) =>
    _0x1dbd4e[_0x245e20(1980)](0, _0x2acc78 + 1),
  );
}
function xe(_0x123b77) {
  var _0x50b701;
  return (
    _0x123b77.length > 1 ||
    (((_0x50b701 = _0x123b77[0]) == null
      ? undefined
      : _0x50b701[_0xd5ecfb(1579)]) ?? 0) > 1
  );
}
function Se(_0x553ffe) {
  if (!_0x553ffe || typeof DOMParser > "u") return "";
  let _0x4877fc = new DOMParser()[_0x2889c8(1525)](_0x553ffe, "text/html");
  return Array[_0x2889c8(2034)](_0x4877fc.querySelectorAll("tr"))
    .map((_0x2258d9) =>
      Array.from(_0x2258d9[_0x2889c8(778)](_0x2889c8(1350)))[_0x2889c8(1285)](
        (_0x48bc28) => {
          const _0xd94da7 = _0x2889c8;
          var _0x28da45;
          return (
            ((_0x28da45 = _0x48bc28[_0xd94da7(1079)]) == null
              ? undefined
              : _0x28da45[_0xd94da7(1342)]()) ?? ""
          );
        },
      ),
    )
    [_0x2889c8(1573)]((_0x49a251) => _0x49a251[_0x2889c8(1579)] > 0)
    [_0x2889c8(1285)]((_0x5f1a84) => _0x5f1a84[_0x2889c8(766)]("\x09"))
    [_0x2889c8(766)]("\x0a");
}
function Ce(_0x1e36d1, _0x3735e9, _0x1e4a5e = 1, _0x30f341 = 1) {
  let _0x114b4d = be(_0x3735e9(_0x1e36d1));
  return xe(_0x114b4d) ? ge(_0x114b4d, _0x1e4a5e, _0x30f341) : null;
}
function we(_0x33b559) {
  let {
      minColumns: _0x5e67e3 = 2,
      minRows: _0x4eef29 = 2,
      onChange: _0x452624,
      parsePastedText: _0x5897a8,
      values: _0x139db9,
    } = _0x33b559,
    _0x4ce8cf = (0, o[_0x529659(858)])(a[_0x529659(1419)]),
    _0x17ad58 = pe(),
    _0x23cc97 = _0x4ce8cf.t(_0x529659(682)),
    _0x2c9a58 = (0, r[_0x529659(1687)])(
      () => ge(_0x139db9, _0x4eef29, _0x5e67e3),
      [_0x5e67e3, _0x4eef29, _0x139db9],
    ),
    _0x1557d7 = (_0x5b912f, _0x9f746b, _0x177375) => {
      let _0x7a49bb = _0x2c9a58.map((_0x20c7d5) => [..._0x20c7d5]);
      ((_0x7a49bb[_0x5b912f][_0x9f746b] = he(_0x177375)), _0x452624(_0x7a49bb));
    };
  return (0, i[_0x529659(1557)])(_0x529659(1998), {
    className: _0x529659(1556),
    onPaste: (_0x1de6b3) => {
      const _0x213265 = _0x529659;
      let _0x27aa71 = Ce(
        _0x1de6b3[_0x213265(1817)][_0x213265(836)](_0x213265(610)) ||
          Se(_0x1de6b3[_0x213265(1817)].getData("text/html")),
        _0x5897a8,
        _0x4eef29,
        _0x5e67e3,
      );
      _0x27aa71 && (_0x1de6b3.preventDefault(), _0x452624(_0x27aa71));
    },
    children: [
      _0x23cc97 &&
        (0, i.jsx)(_0x529659(1998), {
          className: _0x529659(619),
          children: _0x23cc97,
        }),
      (0, i[_0x529659(922)])("div", {
        className: _0x529659(1589),
        children: (0, i[_0x529659(922)])(_0x529659(698), {
          className:
            "univer-w-full\x20univer-border-collapse\x20univer-text-sm",
          children: (0, i[_0x529659(922)])(_0x529659(1384), {
            children: _0x2c9a58.map((_0x4aa2f4, _0x2a343b) =>
              (0, i[_0x529659(922)])(
                "tr",
                {
                  children: _0x4aa2f4[_0x529659(1285)]((_0x538160, _0x2e4a0c) =>
                    (0, i[_0x529659(922)])(
                      "td",
                      {
                        className: _0x529659(1068),
                        children: (0, i[_0x529659(922)])(_0x529659(1267), {
                          value: me(_0x538160),
                          ..._0x17ad58,
                          onChange: (_0x1777bb) =>
                            _0x1557d7(
                              _0x2a343b,
                              _0x2e4a0c,
                              _0x1777bb[_0x529659(2036)].value,
                            ),
                          className:
                            "univer-box-border\x20univer-h-9\x20univer-w-full\x20univer-border-none\x20univer-bg-transparent\x20univer-px-2\x20univer-text-sm\x20univer-text-gray-900\x20univer-outline-none\x20focus:univer-bg-primary-50\x20dark:!univer-text-gray-0\x20dark:focus:!univer-bg-gray-800",
                        }),
                      },
                      _0x2a343b + "-" + _0x2e4a0c,
                    ),
                  ),
                },
                _0x2a343b,
              ),
            ),
          }),
        }),
      }),
      (0, i.jsxs)(_0x529659(1998), {
        className: _0x529659(1230),
        children: [
          (0, i[_0x529659(922)])(t[_0x529659(1420)], {
            type: "button",
            size: _0x529659(1499),
            variant: "default",
            onClick: () => _0x452624(_e(_0x2c9a58)),
            children: _0x4ce8cf.t("chart-ui.inlineTable.addRow"),
          }),
          (0, i[_0x529659(922)])(t.Button, {
            type: "button",
            size: _0x529659(1499),
            variant: _0x529659(1113),
            onClick: () => _0x452624(ve(_0x2c9a58)),
            children: _0x4ce8cf.t(_0x529659(1536)),
          }),
        ],
      }),
    ],
  });
}
function Te(_0x582c39, _0x162abc) {
  return function (_0x3a7865, _0x4c3938) {
    _0x162abc(_0x3a7865, _0x4c3938, _0x582c39);
  };
}
function Ee(_0x87f719, _0x3cc4c1, _0x3c3dc8, _0x8718e4) {
  var _0x5b8278 = arguments[_0x4921f5(1579)],
    _0x2b1ae4 =
      _0x5b8278 < 3
        ? _0x3cc4c1
        : _0x8718e4 === null
          ? (_0x8718e4 = Object[_0x4921f5(591)](_0x3cc4c1, _0x3c3dc8))
          : _0x8718e4,
    _0x3981c1;
  if (typeof Reflect == "object" && typeof Reflect.decorate == _0x4921f5(1182))
    _0x2b1ae4 = Reflect.decorate(_0x87f719, _0x3cc4c1, _0x3c3dc8, _0x8718e4);
  else {
    for (
      var _0x3e62b7 = _0x87f719[_0x4921f5(1579)] - 1;
      _0x3e62b7 >= 0;
      _0x3e62b7--
    )
      (_0x3981c1 = _0x87f719[_0x3e62b7]) &&
        (_0x2b1ae4 =
          (_0x5b8278 < 3
            ? _0x3981c1(_0x2b1ae4)
            : _0x5b8278 > 3
              ? _0x3981c1(_0x3cc4c1, _0x3c3dc8, _0x2b1ae4)
              : _0x3981c1(_0x3cc4c1, _0x3c3dc8)) || _0x2b1ae4);
  }
  return (
    _0x5b8278 > 3 &&
      _0x2b1ae4 &&
      Object[_0x4921f5(1537)](_0x3cc4c1, _0x3c3dc8, _0x2b1ae4),
    _0x2b1ae4
  );
}
let De = class {
  constructor(_0x260a54) {
    this[_0x455a33(1140)] = _0x260a54;
  }
  bind(_0x2cfc98, _0x58ba74) {
    return new Oe(_0x2cfc98, _0x58ba74, this[_0x43f9ca(1140)]);
  }
};
De = Ee([Te(0, (0, a.Inject)(c.IReferencedUnitCatalogService))], De);
var Oe = class extends a.Disposable {
  constructor(_0x6b715b, _0x440ea3, _0x305fb0) {
    (super(),
      (this[_0x3528f0(1282)] = _0x440ea3),
      (this[_0x3528f0(1140)] = _0x305fb0),
      b(this, _0x3528f0(1677), 0),
      b(this, _0x3528f0(535), 0),
      this[_0x3528f0(774)](
        _0x6b715b[_0x3528f0(1820)][_0x3528f0(689)]((_0x1f873e) => {
          const _0x101647 = _0x3528f0;
          let _0x1fc649 = ++this[_0x101647(535)];
          this[_0x101647(1666)](_0x1f873e, _0x1fc649).catch(() => undefined);
        }),
      ),
      this[_0x3528f0(774)](
        _0x6b715b[_0x3528f0(1819)][_0x3528f0(689)]((_0x474d4d) => {
          const _0x423438 = _0x3528f0;
          let _0x55dafc = _0x474d4d[_0x423438(1660)];
          if (!_0x55dafc || !this[_0x423438(1282)][_0x423438(1227)]) {
            _0x6b715b[_0x423438(1202)](null);
            return;
          }
          this[_0x423438(816)](_0x6b715b, _0x55dafc)[_0x423438(1716)](
            () => undefined,
          );
        }),
      ));
  }
  async _consumeSelection(_0x12285b, _0x57e382) {
    let _0x1c0bfc =
      _0x12285b[_0x37f51d(1201)] === s[_0x37f51d(1751)][_0x37f51d(670)]
        ? (
            await this[_0x37f51d(1140)][_0x37f51d(1460)](
              _0x12285b[_0x37f51d(1234)],
            )
          )[_0x37f51d(1704)][_0x12285b[_0x37f51d(1250)]]
        : undefined;
    if (this._disposed || _0x57e382 !== this[_0x37f51d(535)]) return;
    let _0x5015af = ke(
      _0x12285b,
      this[_0x37f51d(1282)][_0x37f51d(1227)],
      _0x1c0bfc
        ? { tableId: _0x1c0bfc.id, tableName: _0x1c0bfc[_0x37f51d(1391)] }
        : undefined,
    );
    _0x5015af && this[_0x37f51d(1282)][_0x37f51d(901)](_0x5015af);
  }
  async _restoreDecoration(_0x2ae439, _0x12f243) {
    let _0xce62d1 = ++this[_0x4114ce(1677)],
      _0x2bf7d1 = this[_0x4114ce(1282)][_0x4114ce(1227)],
      _0x12708d =
        _0x2bf7d1 == null
          ? undefined
          : _0x2bf7d1[_0x4114ce(1795)][_0x4114ce(520)];
    if (!_0x2bf7d1 || !je(_0x2bf7d1.ref, _0x12f243[_0x4114ce(1795)])) {
      _0x2ae439[_0x4114ce(1202)](null);
      return;
    }
    if (
      (_0x12708d == null ? undefined : _0x12708d.kind) === _0x4114ce(1921) &&
      typeof _0x12708d[_0x4114ce(1795)] == "string"
    ) {
      this._restoreSheetDecoration(_0x2ae439, _0x12f243, {
        ref: _0x12708d[_0x4114ce(1795)],
        sheetId:
          typeof _0x12708d[_0x4114ce(1862)] == _0x4114ce(2002)
            ? _0x12708d[_0x4114ce(1862)]
            : undefined,
        sheetName:
          typeof _0x12708d.sheetName == "string"
            ? _0x12708d.sheetName
            : undefined,
      });
      return;
    }
    if (
      (_0x12708d == null ? undefined : _0x12708d.kind) !== _0x4114ce(698) ||
      typeof _0x12708d[_0x4114ce(1724)] != _0x4114ce(2002)
    ) {
      _0x2ae439[_0x4114ce(1202)](null);
      return;
    }
    await this[_0x4114ce(1408)](
      _0x2ae439,
      _0x12f243,
      {
        tableId:
          typeof _0x12708d[_0x4114ce(1250)] == "string"
            ? _0x12708d[_0x4114ce(1250)]
            : undefined,
        tableName: _0x12708d.tableName,
      },
      _0xce62d1,
    );
  }
  _restoreSheetDecoration(_0x1a9a43, _0x4c7075, _0x49ab48) {
    let _0x28d476 = (0, l[_0x3abbf2(1335)])(_0x49ab48[_0x3abbf2(1795)]);
    _0x1a9a43.setDecoration({
      kind: s[_0x3abbf2(1751)].SheetRange,
      unit: _0x4c7075,
      selections: [{ primary: null, range: _0x28d476[_0x3abbf2(1921)] }],
      sheetId: _0x49ab48[_0x3abbf2(1862)] ?? "",
      sheetName: _0x49ab48[_0x3abbf2(1171)] ?? _0x28d476[_0x3abbf2(1171)],
    });
  }
  async _restoreBaseDecoration(_0x9b674e, _0x28f14e, _0x208108, _0x550094) {
    var _0x565999;
    let _0x5962b7 = await this[_0x2fb825(1140)][_0x2fb825(1460)](_0x28f14e);
    if (this[_0x2fb825(659)] || _0x550094 !== this[_0x2fb825(1677)]) return;
    let _0x43d233 = _0x208108.tableId
        ? _0x5962b7[_0x2fb825(1704)][_0x208108[_0x2fb825(1250)]]
        : Object[_0x2fb825(1596)](_0x5962b7.tables)[_0x2fb825(1507)](
            (_0x450316) =>
              _0x450316[_0x2fb825(1391)] === _0x208108[_0x2fb825(1724)],
          ),
      _0x258b9f =
        (_0x43d233 == null ? undefined : _0x43d233[_0x2fb825(1189)][0]) ??
        Object[_0x2fb825(1994)](
          (_0x43d233 == null ? undefined : _0x43d233[_0x2fb825(1893)]) ?? {},
        )[0],
      _0x589542 =
        _0x43d233 == null || (_0x565999 = _0x43d233[_0x2fb825(742)]) == null
          ? undefined
          : _0x565999[0],
      _0x5e8a9c = _0x43d233 == null ? undefined : _0x43d233.fieldOrder[0];
    if (!_0x43d233 || !_0x258b9f || !_0x589542 || !_0x5e8a9c) {
      _0x9b674e[_0x2fb825(1202)](null);
      return;
    }
    _0x9b674e[_0x2fb825(1202)]({
      kind: s[_0x2fb825(1751)][_0x2fb825(670)],
      unit: _0x28f14e,
      selection: {
        fieldId: _0x5e8a9c,
        recordId: _0x589542,
        tableId: _0x43d233.id,
        type: "grid-cell",
        viewId: _0x258b9f,
      },
    });
  }
};
function ke(_0x41b883, _0x28c449, _0x3569a2) {
  let _0x22e6eb =
    _0x41b883[_0x239b7c(1201)] === s[_0x239b7c(1751)][_0x239b7c(747)]
      ? Ae(_0x41b883)
      : _0x3569a2
        ? {
            kind: _0x239b7c(698),
            tableId: _0x3569a2.tableId,
            tableName: _0x3569a2[_0x239b7c(1724)],
          }
        : null;
  if (!_0x22e6eb) return null;
  let _0x40c267 =
    _0x28c449 &&
    je(_0x28c449[_0x239b7c(1795)], _0x41b883[_0x239b7c(1234)][_0x239b7c(1795)])
      ? _0x28c449 == null
        ? undefined
        : _0x28c449[_0x239b7c(1795)][_0x239b7c(1009)]
      : _0x41b883.unit[_0x239b7c(1795)][_0x239b7c(1009)];
  return e[_0x239b7c(738)][_0x239b7c(1452)]({
    file: _0x41b883[_0x239b7c(1234)][_0x239b7c(1795)][_0x239b7c(1701)],
    part: _0x22e6eb,
    unit: { ..._0x41b883[_0x239b7c(1234)].ref[_0x239b7c(1234)] },
    ...(_0x40c267 ? { extensions: _0x40c267 } : {}),
  });
}
function Ae(_0x2bc5ec) {
  let _0xe590c5 = _0x2bc5ec.ranges[0];
  return _0xe590c5
    ? {
        kind: _0x5820c8(1921),
        range: (0, l[_0x5820c8(1607)])(_0xe590c5),
        ref: (0, l[_0x5820c8(1392)])(_0x2bc5ec[_0x5820c8(1171)], _0xe590c5),
        sheetId: _0x2bc5ec[_0x5820c8(1862)],
        sheetName: _0x2bc5ec[_0x5820c8(1171)],
      }
    : null;
}
function je(_0xec8720, _0x5c495d) {
  return (
    (0, c[_0x1d46ea(1620)])(_0xec8720) === (0, c[_0x1d46ea(1620)])(_0x5c495d)
  );
}
const Me = { status: e.ChartDataSourceRuntimeStatus["UNAVAILABLE"] };
function Ne(_0x5f3acd) {
  let {
      mode: _0x31d4cb,
      onModeChange: _0xd60023,
      onPreviewChange: _0x293831,
    } = _0x5f3acd,
    _0x32c500 = (0, o[_0x5580aa(858)])(a[_0x5580aa(1419)]),
    _0xce42ef = (0, o[_0x5580aa(858)])(e[_0x5580aa(1597)]),
    [_0x5363ba, _0x16a2e0] = (0, r[_0x5580aa(1825)])(
      Fe(_0x5f3acd[_0x5580aa(1227)]),
    ),
    _0x57c7c8 = (0, r[_0x5580aa(684)])(_0x293831),
    _0x19c9a1 = (0, r[_0x5580aa(1243)])(),
    _0xede410 = _0x19c9a1 + "-inline-panel",
    _0x42be98 = _0x19c9a1 + "-referenced-panel";
  return (
    (_0x57c7c8[_0x5580aa(1185)] = _0x293831),
    (0, r[_0x5580aa(1989)])(() => {
      const _0x4571b7 = _0x5580aa;
      if (_0x31d4cb !== _0x4571b7(1599) || !_0x5363ba) {
        _0x57c7c8[_0x4571b7(1185)](null, Me);
        return;
      }
      let _0xdc2f16 = _0xce42ef[_0x4571b7(1676)](_0x5363ba),
        _0x194123 = _0xdc2f16[_0x4571b7(1819)][_0x4571b7(689)]((_0x10e4b3) => {
          const _0x4d716e = _0x4571b7;
          _0x57c7c8[_0x4d716e(1185)](_0x5363ba, _0x10e4b3);
        });
      return () => {
        const _0x168675 = _0x4571b7;
        (_0x194123[_0x168675(1715)](), _0xdc2f16[_0x168675(1706)]());
      };
    }, [_0x31d4cb, _0xce42ef, _0x5363ba]),
    (0, i[_0x5580aa(1557)])("div", {
      className:
        "univer-flex\x20univer-min-h-0\x20univer-w-full\x20univer-flex-col\x20univer-gap-3",
      children: [
        (0, i[_0x5580aa(922)])(ne, {
          ariaLabel: _0x32c500.t(_0x5580aa(2006)),
          className: _0x5580aa(1637),
          items: [
            {
              label: _0x32c500.t(_0x5580aa(1890)),
              panelId: _0xede410,
              value: _0x5580aa(1294),
            },
            {
              label: _0x32c500.t(_0x5580aa(1396)),
              panelId: _0x42be98,
              value: _0x5580aa(1599),
            },
          ],
          value: _0x31d4cb,
          variant: "segmented",
          onChange: _0xd60023,
        }),
        (0, i[_0x5580aa(922)])(_0x5580aa(1998), {
          "aria-labelledby":
            (_0x31d4cb === _0x5580aa(1294) ? _0xede410 : _0x42be98) +
            _0x5580aa(1083),
          className:
            "univer-flex\x20univer-min-h-0\x20univer-flex-1\x20univer-flex-col",
          id: _0x31d4cb === _0x5580aa(1294) ? _0xede410 : _0x42be98,
          role: _0x5580aa(1697),
          children:
            _0x31d4cb === "inline"
              ? _0x5f3acd[_0x5580aa(1149)]
              : (0, i[_0x5580aa(922)])(Pe, {
                  initialSource: _0x5363ba,
                  onDataSourceChange: _0x16a2e0,
                }),
        }),
      ],
    })
  );
}
function Pe(_0x1d787a) {
  let _0x42577c = (0, o.useDependency)(s[_0x4c918f(1063)]),
    _0x56cc76 = (0, o[_0x4c918f(858)])(De),
    [_0x41965f] = (0, r[_0x4c918f(1825)])(() =>
      _0x42577c[_0x4c918f(1022)]({
        ...(_0x1d787a[_0x4c918f(1227)]
          ? { initialRef: _0x1d787a[_0x4c918f(1227)].ref }
          : {}),
      }),
    );
  return (
    (0, r.useEffect)(() => {
      const _0x2a8092 = _0x4c918f;
      let _0x228841 = _0x56cc76[_0x2a8092(918)](_0x41965f, {
        ...(_0x1d787a[_0x2a8092(1227)]
          ? { initialSource: _0x1d787a[_0x2a8092(1227)] }
          : {}),
        onDataSourceChange: _0x1d787a.onDataSourceChange,
      });
      return () => _0x228841.dispose();
    }, [
      _0x56cc76,
      _0x1d787a[_0x4c918f(1227)],
      _0x1d787a[_0x4c918f(901)],
      _0x41965f,
    ]),
    (0, i.jsx)(s[_0x4c918f(1966)][_0x4c918f(1838)], {
      session: _0x41965f,
      children: (0, i.jsxs)(s.ReferencedUnitViewer["Frame"], {
        className: _0x4c918f(657),
        style: { height: _0x4c918f(1592) },
        children: [
          (0, i[_0x4c918f(922)])(s[_0x4c918f(1966)][_0x4c918f(548)], {}),
          (0, i[_0x4c918f(922)])(s[_0x4c918f(1966)][_0x4c918f(1699)], {}),
        ],
      }),
    })
  );
}
function Fe(_0x2b918a) {
  return _0x2b918a
    ? e[_0x1d9d3b(738)].toReference(e[_0x1d9d3b(738)].fromReference(_0x2b918a))
    : null;
}
const Ie = { PieOfPie: "pieOfPie", BarOfPie: "barOfPie" },
  Le = {
    AreaChartIcon: (0, i.jsx)(n.AreaChartIcon, {}),
    BarChartIcon: (0, i.jsx)(n.BarChartIcon, {}),
    BoxplotIcon: (0, i.jsx)(n.BoxplotIcon, {}),
    BubbleIcon: (0, i.jsx)(n.BubbleIcon, {}),
    CandlestickChartIcon: (0, i.jsx)(n.CandlestickChartIcon, {}),
    ChordChartIcon: (0, i.jsx)(n.ChordChartIcon, {}),
    CloudOutlineIcon: (0, i.jsx)(n.CloudOutlineIcon, {}),
    ColumnChartIcon: (0, i.jsx)(n.ColumnChartIcon, {}),
    ComboChartIcon: (0, i.jsx)(n.ComboChartIcon, {}),
    FunnelIcon: (0, i.jsx)(n.FunnelIcon, {}),
    GaugeChartIcon: (0, i.jsx)(n.GaugeChartIcon, {}),
    HeatmapIcon: (0, i.jsx)(n.HeatmapIcon, {}),
    HistogramChartIcon: (0, i.jsx)(n.HistogramChartIcon, {}),
    LineChartIcon: (0, i.jsx)(n.LineChartIcon, {}),
    PieChartIcon: (0, i.jsx)(n.PieChartIcon, {}),
    RadarChartIcon: (0, i.jsx)(n.RadarChartIcon, {}),
    RelationshipIcon: (0, i.jsx)(n.RelationshipIcon, {}),
    SankeyIcon: (0, i.jsx)(n.SankeyIcon, {}),
    ScatterChartIcon: (0, i.jsx)(n.ScatterChartIcon, {}),
    SunburstChartIcon: (0, i.jsx)(n.SunburstChartIcon, {}),
    TreemapChartIcon: (0, i.jsx)(n.TreemapChartIcon, {}),
    WaterfallChartIcon: (0, i.jsx)(n.WaterfallChartIcon, {}),
  },
  Re = [
    {
      labelId: "line",
      value: e.ChartTypeBits["Line"],
      iconName: "LineChartIcon",
    },
    {
      labelId: "column",
      value: e.ChartTypeBits["Column"],
      iconName: "ColumnChartIcon",
    },
    {
      labelId: "columnStacked",
      value: e.ChartTypeBits["ColumnStacked"],
      iconName: "ColumnChartIcon",
    },
    {
      labelId: "columnPercentStacked",
      value: e.ChartTypeBits["ColumnPercentStacked"],
      iconName: "ColumnChartIcon",
    },
    { labelId: "bar", value: e.ChartTypeBits["Bar"], iconName: "BarChartIcon" },
    {
      labelId: "barStacked",
      value: e.ChartTypeBits["BarStacked"],
      iconName: "BarChartIcon",
    },
    {
      labelId: "barPercentStacked",
      value: e.ChartTypeBits["BarPercentStacked"],
      iconName: "BarChartIcon",
    },
    { labelId: "pie", value: e.ChartTypeBits["Pie"], iconName: "PieChartIcon" },
    {
      labelId: "donut",
      value: e.ChartTypeBits["Doughnut"],
      iconName: "PieChartIcon",
    },
    {
      id: Ie.PieOfPie,
      labelId: "pieOfPie",
      value: e.ChartTypeBits["Pie"],
      pieSecondaryPlotType: e.PieSecondaryPlotType["Pie"],
      iconName: "PieChartIcon",
    },
    {
      id: Ie.BarOfPie,
      labelId: "barOfPie",
      value: e.ChartTypeBits["Pie"],
      pieSecondaryPlotType: e.PieSecondaryPlotType["Bar"],
      iconName: "PieChartIcon",
    },
    {
      labelId: "area",
      value: e.ChartTypeBits["Area"],
      iconName: "AreaChartIcon",
    },
    {
      labelId: "areaStacked",
      value: e.ChartTypeBits["AreaStacked"],
      iconName: "AreaChartIcon",
    },
    {
      labelId: "areaPercentStacked",
      value: e.ChartTypeBits["AreaPercentStacked"],
      iconName: "AreaChartIcon",
    },
    {
      labelId: "radar",
      value: e.ChartTypeBits["Radar"],
      iconName: "RadarChartIcon",
    },
    {
      labelId: "scatter",
      value: e.ChartTypeBits["Scatter"],
      iconName: "ScatterChartIcon",
    },
    {
      labelId: "combination",
      value: e.ChartTypeBits["Combination"],
      iconName: "ComboChartIcon",
    },
    {
      labelId: "wordCloud",
      value: e.ChartTypeBits["WordCloud"],
      iconName: "CloudOutlineIcon",
    },
    {
      labelId: "funnel",
      value: e.ChartTypeBits["Funnel"],
      iconName: "FunnelIcon",
    },
    {
      labelId: "bubble",
      value: e.ChartTypeBits["Bubble"],
      iconName: "BubbleIcon",
    },
    {
      labelId: "relation",
      value: e.ChartTypeBits["Relation"],
      iconName: "RelationshipIcon",
    },
    {
      labelId: "waterfall",
      value: e.ChartTypeBits["Waterfall"],
      iconName: "WaterfallChartIcon",
    },
    {
      labelId: "pareto",
      value: e.ChartTypeBits["Pareto"],
      iconName: "ComboChartIcon",
    },
    {
      labelId: "sankey",
      value: e.ChartTypeBits["Sankey"],
      iconName: "SankeyIcon",
    },
    {
      labelId: "heatmap",
      value: e.ChartTypeBits["Heatmap"],
      iconName: "HeatmapIcon",
    },
    {
      labelId: "boxplot",
      value: e.ChartTypeBits["Boxplot"],
      iconName: "BoxplotIcon",
    },
    {
      labelId: "candlestick",
      value: e.ChartTypeBits["Candlestick"],
      iconName: "CandlestickChartIcon",
    },
    {
      labelId: "histogram",
      value: e.ChartTypeBits["Histogram"],
      iconName: "HistogramChartIcon",
    },
    {
      labelId: "treemap",
      value: e.ChartTypeBits["Treemap"],
      iconName: "TreemapChartIcon",
    },
    {
      labelId: "sunburst",
      value: e.ChartTypeBits["Sunburst"],
      iconName: "SunburstChartIcon",
    },
    {
      labelId: "gauge",
      value: e.ChartTypeBits["Gauge"],
      iconName: "GaugeChartIcon",
    },
    {
      labelId: "chord",
      value: e.ChartTypeBits["Chord"],
      iconName: "ChordChartIcon",
    },
  ],
  ze = Object.fromEntries(
    Re.map(({ iconName: _0x43e740, value: _0x3b98af }) => [
      _0x3b98af,
      Le[_0x43e740],
    ]),
  );
function Be(_0x4b592f, _0x21de22) {
  return (0, i[_0x299ea9(1557)])(_0x299ea9(1998), {
    className: _0x299ea9(510),
    children: [
      (0, i.jsx)(_0x299ea9(1998), {
        className: "univer-flex\x20univer-items-center\x20univer-text-base",
        children: _0x21de22,
      }),
      (0, i[_0x299ea9(922)])("div", {
        className: _0x299ea9(1197),
        children: _0x4b592f,
      }),
    ],
  });
}
function Ve(_0x4ec60d, _0x46d7ab = (_0x1cae01) => _0x1cae01) {
  return _0x4ec60d[_0x591794(1285)]((_0x452d9b) => ({
    value: _0x452d9b.id ?? String(_0x452d9b[_0x591794(1324)]),
    chartType: _0x452d9b[_0x591794(1324)],
    pieSecondaryPlotType: _0x452d9b[_0x591794(1978)],
    label: Be(
      _0x46d7ab(_0x452d9b.label),
      _0x452d9b[_0x591794(534)] ?? ze[_0x452d9b[_0x591794(1324)]],
    ),
  }));
}
function He(_0x2c6928) {
  return (0, i[_0x3410bb(922)])(_0x3410bb(1998), {
    className: _0x3410bb(1510),
    children: _0x2c6928[_0x3410bb(1285)]((_0x39d197, _0x5d68e4) =>
      (0, i[_0x3410bb(922)])(
        "div",
        {
          className:
            "univer-flex\x20univer-h-4\x20univer-flex-1\x20univer-items-center",
          style: { backgroundColor: _0x39d197 },
        },
        _0x39d197 + "-" + _0x5d68e4,
      ),
    ),
  });
}
function Ue(_0x4792da, _0x58ddcb) {
  return _0x4792da[_0x3888c4(1285)]((_0x5a4c7d) => ({
    value: _0x5a4c7d,
    label: He(_0x58ddcb(_0x5a4c7d)),
  }));
}
const We = [1, 0.9, 0.7, 0.5, 0.3, 0.2, 0.1, 0],
  Ge = [0, 1, 2, 4, 8],
  Ke = [0, 2, 5, 7, 10, 14],
  qe = [6, 12, 18, 24],
  Je = [1, 2, 4, 8];
function Ye(_0x3e42c3 = We) {
  return _0x3e42c3[_0x54f336(1285)]((_0x1d1b95) => ({
    label: _0x1d1b95 * 100 + "%",
    value: String(_0x1d1b95),
  }));
}
function Xe(_0x188484) {
  return _0x188484.map((_0x541f20) => ({
    label: _0x541f20 + "px",
    value: String(_0x541f20),
  }));
}
function Ze(_0x566fa9) {
  var _0x2b52a4;
  let {
      ariaLabel: _0x1ed17c,
      color: _0x34f0b5,
      compact: _0x14df94 = false,
      onChange: _0x8a23f9,
    } = _0x566fa9,
    [_0x5539c2, _0x55f520] = (0, r[_0x5bc936(1825)])(false),
    _0x2e2553 = (0, o[_0x5bc936(858)])(a[_0x5bc936(1419)]),
    _0x58ce54 =
      typeof _0x34f0b5 == _0x5bc936(2002)
        ? _0x34f0b5
        : _0x34f0b5 == null ||
            (_0x2b52a4 = _0x34f0b5[_0x5bc936(1244)][0]) == null
          ? undefined
          : _0x2b52a4[_0x5bc936(1393)],
    _0x24eebc = _0x58ce54 === _0x5bc936(1957) || _0x58ce54 == null,
    _0x281e75 = (0, r[_0x5bc936(1365)])(
      (_0x48aa4e) => {
        (_0x8a23f9 == null || _0x8a23f9(_0x48aa4e), _0x55f520(false));
      },
      [_0x8a23f9],
    ),
    _0x4e02d5 = _0x14df94
      ? (0, i[_0x5bc936(922)])(t[_0x5bc936(1420)], {
          asChild: true,
          className: _0x5bc936(1048),
          children: (0, i[_0x5bc936(922)])("button", {
            "aria-label": _0x1ed17c,
            type: "button",
            children: (0, i[_0x5bc936(922)])(_0x5bc936(1904), {
              className: (0, t[_0x5bc936(1916)])(
                _0x5bc936(1116),
                t[_0x5bc936(1190)],
              ),
              style: {
                backgroundColor: _0x24eebc ? _0x5bc936(1081) : _0x58ce54,
                height: 20,
                width: 20,
              },
            }),
          }),
        })
      : (0, i[_0x5bc936(1557)])(_0x5bc936(1204), {
          "aria-label": _0x1ed17c,
          className: (0, t[_0x5bc936(1916)])(
            t[_0x5bc936(1348)],
            "univer-w-full\x20!univer-min-w-0\x20univer-text-gray-500\x20hover:univer-border-primary-600\x20dark:!univer-text-gray-0",
            {
              "univer-border-primary-600\x20univer-outline-none\x20univer-ring-2\x20univer-ring-primary-50\x20dark:!univer-ring-primary-900":
                _0x5539c2,
              "univer-cursor-pointer": !_0x5539c2,
            },
          ),
          type: _0x5bc936(1204),
          children: [
            _0x24eebc
              ? (0, i[_0x5bc936(922)])("div", {
                  className:
                    "univer-flex-1\x20univer-truncate\x20univer-text-sm\x20univer-text-gray-500\x20dark:!univer-text-gray-0",
                  children: _0x2e2553.t(_0x5bc936(1990)),
                })
              : (0, i[_0x5bc936(922)])(_0x5bc936(1998), {
                  className: (0, t.clsx)(_0x5bc936(1474), t.borderClassName),
                  style: { backgroundColor: _0x58ce54 },
                }),
            (0, i[_0x5bc936(922)])(n[_0x5bc936(781)], {
              className: _0x5bc936(1123),
            }),
          ],
        });
  return (0, i.jsx)(t[_0x5bc936(761)], {
    overlay: (0, i.jsxs)(_0x5bc936(1998), {
      className: _0x5bc936(527),
      children: [
        (0, i[_0x5bc936(922)])(t[_0x5bc936(1420)], {
          className: "univer-w-full",
          onClick: () => _0x281e75(null),
          children: _0x2e2553.t(_0x5bc936(1569)),
        }),
        (0, i[_0x5bc936(922)])(t[_0x5bc936(882)], {
          value: _0x24eebc ? _0x5bc936(1081) : _0x58ce54,
          onChange: _0x281e75,
        }),
      ],
    }),
    open: _0x5539c2,
    onOpenChange: _0x55f520,
    children: _0x4e02d5,
  });
}
function Qe(_0x37e9f2) {
  let {
      value: _0x101d95,
      menus: _0xbb88d5,
      onSelect: _0x579b15,
      children: _0x1e4149,
    } = _0x37e9f2,
    [_0x504b51, _0x564501] = (0, r[_0xb80bf7(1825)])(false);
  return (0, i[_0xb80bf7(922)])(t[_0xb80bf7(744)], {
    items: [
      {
        type: "radio",
        value: _0x101d95,
        options: _0xbb88d5,
        onSelect: (_0x1d09db) =>
          _0x579b15 == null ? undefined : _0x579b15(_0x1d09db),
      },
    ],
    open: _0x504b51,
    onOpenChange: _0x564501,
    children:
      typeof _0x1e4149 == _0xb80bf7(1182) ? _0x1e4149(_0x504b51) : _0x1e4149,
  });
}
const $e = [10, 12, 14, 16, 18, 20, 24, 30, 36];
function et(_0x208b45) {
  let {
      emptyLabel: _0x5e273f,
      isDefault: _0x4835ff = false,
      options: _0x40314e = $e,
      value: _0x26e6b2 = e[_0x379e96(1790)].textStyle[_0x379e96(1359)],
      onChange: _0x2b5f8e,
      onReset: _0xf79a75,
    } = _0x208b45,
    _0x1f1aba = _0x40314e[_0x379e96(1285)]((_0x2f60e3) => ({
      label: String(_0x2f60e3),
      value: String(_0x2f60e3),
    })),
    _0x561e7a =
      _0x5e273f === undefined
        ? _0x1f1aba
        : [{ label: _0x5e273f, value: "" }, ..._0x1f1aba];
  return (0, i[_0x379e96(922)])(Qe, {
    value: _0x4835ff ? "" : _0x26e6b2[_0x379e96(694)](),
    menus: _0x561e7a,
    onSelect: (_0x36b5bd) => {
      if (_0x36b5bd === "") {
        _0xf79a75 == null || _0xf79a75();
        return;
      }
      _0x2b5f8e == null || _0x2b5f8e(Number(_0x36b5bd));
    },
    children: (_0x38f611) =>
      (0, i[_0x379e96(1557)])(t[_0x379e96(1420)], {
        size: _0x379e96(1499),
        variant: _0x379e96(502),
        type: "button",
        children: [
          (0, i[_0x379e96(922)])(_0x379e96(1904), {
            children: _0x4835ff ? _0x5e273f : _0x26e6b2,
          }),
          (0, i.jsx)(n[_0x379e96(781)], {
            className: (0, t[_0x379e96(1916)])(_0x379e96(1256), {
              "univer-rotate-180": _0x38f611,
            }),
          }),
        ],
      }),
  });
}
function tt(_0x3f8785) {
  let {
      color: _0x58a700,
      resetLabel: _0x5bb54,
      onChange: _0x33b434,
      onReset: _0x56d7cd,
    } = _0x3f8785,
    [_0x3d9140, _0x595d56] = (0, r[_0x225936(1825)])(false);
  return (0, i[_0x225936(922)])(t[_0x225936(761)], {
    overlay: (0, i.jsxs)("div", {
      className: _0x225936(533),
      children: [
        _0x5bb54 !== undefined &&
          (0, i[_0x225936(922)])(t.Button, {
            onClick: () => {
              (_0x56d7cd == null || _0x56d7cd(), _0x595d56(false));
            },
            children: _0x5bb54,
          }),
        (0, i[_0x225936(922)])(t[_0x225936(882)], {
          value: _0x58a700,
          onChange: (_0x339b4c) =>
            _0x33b434 == null ? undefined : _0x33b434(_0x339b4c),
        }),
      ],
    }),
    open: _0x3d9140,
    onOpenChange: _0x595d56,
    children: (0, i[_0x225936(1557)])(t.Button, {
      size: "small",
      variant: _0x225936(502),
      type: "button",
      children: [
        (0, i[_0x225936(922)])(n.FontColorDoubleIcon, {
          className: _0x225936(1799),
          extend: {
            colorChannel1:
              _0x58a700 ?? e[_0x225936(1790)][_0x225936(508)][_0x225936(1393)],
          },
        }),
        (0, i[_0x225936(922)])(n[_0x225936(781)], {
          className: (0, t[_0x225936(1916)])(
            "univer-ml-1\x20univer-transition-transform\x20univer-duration-300",
            { "univer-rotate-180": _0x3d9140 },
          ),
        }),
      ],
    }),
  });
}
function nt(_0x59f86f) {
  let { active: _0x3a2580, type: _0x3aab79, onClick: _0xbd2ccb } = _0x59f86f,
    _0x5952bc =
      _0x3aab79 === _0x5291e1(1642) ? n[_0x5291e1(1194)] : n.ItalicIcon;
  return (0, i[_0x5291e1(922)])(t.Button, {
    size: _0x5291e1(1499),
    variant: "ghost",
    "aria-pressed": !!_0x3a2580,
    className: (0, t.clsx)({
      "univer-bg-gray-50\x20univer-text-primary-600": _0x3a2580,
    }),
    onClick: _0xbd2ccb,
    type: _0x5291e1(1204),
    children: (0, i[_0x5291e1(922)])(_0x5952bc, {}),
  });
}
function rt(_0x1f1714) {
  let _0xcadcd2 = (0, o[_0x50497a(858)])(a[_0x50497a(1419)]),
    { options: _0x3e271c, value: _0xb2b18b, onChange: _0x22c6de } = _0x1f1714,
    _0x1cea38 = [
      {
        label: _0xcadcd2.t("chart-ui.common.textAlign.left"),
        value: e[_0x50497a(1781)][_0x50497a(1672)],
      },
      {
        label: _0xcadcd2.t(_0x50497a(660)),
        value: e.TextAlign[_0x50497a(820)],
      },
      {
        label: _0xcadcd2.t(_0x50497a(1161)),
        value: e[_0x50497a(1781)][_0x50497a(477)],
      },
    ];
  return (0, i[_0x50497a(922)])(Qe, {
    value: (_0xb2b18b == null ? undefined : _0xb2b18b[_0x50497a(694)]()) ?? "",
    menus: (_0x3e271c ?? _0x1cea38).map((_0x1c4c30) => ({ ..._0x1c4c30 })),
    onSelect: (_0x25a1ab) =>
      _0x22c6de == null ? undefined : _0x22c6de(_0x25a1ab),
    children: (0, i.jsx)(t[_0x50497a(1420)], {
      size: _0x50497a(1499),
      variant: _0x50497a(502),
      type: "button",
      children: (0, i[_0x50497a(922)])(n[_0x50497a(1845)], {}),
    }),
  });
}
function it(_0x1f4f4f) {
  let {
    align: _0x2f5c6a,
    alignControl: _0x47b564 = false,
    alignOptions: _0x190a3a,
    bold: _0x1645e0,
    className: _0xad836b,
    color: _0x3412b2,
    colorResetLabel: _0x5aa252,
    fontSize: _0x459ad9 = e.defaultChartConfig[_0x5a00b5(508)][_0x5a00b5(1359)],
    fontSizeEmptyLabel: _0xb98550,
    fontSizeIsDefault: _0x34568f,
    fontSizeOptions: _0x512a05,
    italic: _0x95daa,
    onChange: _0x4b1166,
    onColorReset: _0x5c03cc,
    onFontSizeReset: _0x16999f,
  } = _0x1f4f4f;
  return (0, i[_0x5a00b5(1557)])(_0x5a00b5(1998), {
    className: (0, t.clsx)(
      "univer-box-border\x20univer-flex\x20univer-w-fit\x20univer-items-center\x20univer-gap-1.5\x20univer-rounded-md\x20univer-px-1\x20univer-py-0.5",
      t[_0x5a00b5(1190)],
      _0xad836b,
    ),
    children: [
      (0, i[_0x5a00b5(922)])(et, {
        emptyLabel: _0xb98550,
        isDefault: _0x34568f,
        options: _0x512a05,
        value: _0x459ad9,
        onChange: (_0x58b27d) =>
          _0x4b1166 == null ? undefined : _0x4b1166(_0x5a00b5(1003), _0x58b27d),
        onReset: _0x16999f,
      }),
      (0, i[_0x5a00b5(922)])(tt, {
        color: _0x3412b2,
        resetLabel: _0x5aa252,
        onChange: (_0x8dff17) =>
          _0x4b1166 == null ? undefined : _0x4b1166("color", _0x8dff17),
        onReset: _0x5c03cc,
      }),
      _0x47b564 &&
        (0, i[_0x5a00b5(922)])(rt, {
          options: _0x190a3a,
          value: _0x2f5c6a,
          onChange: (_0x341967) =>
            _0x4b1166 == null ? undefined : _0x4b1166("align", _0x341967),
        }),
      (0, i[_0x5a00b5(922)])(nt, {
        active: _0x1645e0,
        type: _0x5a00b5(1642),
        onClick: () =>
          _0x4b1166 == null
            ? undefined
            : _0x4b1166(_0x5a00b5(1642), !_0x1645e0),
      }),
      (0, i[_0x5a00b5(922)])(nt, {
        active: _0x95daa,
        type: _0x5a00b5(1796),
        onClick: () =>
          _0x4b1166 == null ? undefined : _0x4b1166("italic", !_0x95daa),
      }),
    ],
  });
}
const at = "chart-ui.config",
  ot = {};
function st(_0x3d2b9c) {
  return _0x3d2b9c != null && typeof _0x3d2b9c != _0x4fdcd0(1053);
}
function D(_0x350804) {
  let _0x3be3c7 = (0, r.useId)(),
    _0x314319 = _0x3be3c7 + _0x2331ec(1915),
    _0x471033 = st(_0x350804[_0x2331ec(1899)]),
    _0x1b3bd0 = st(_0x350804[_0x2331ec(764)]),
    _0x232c2d = _0x471033 ? _0x3be3c7 + _0x2331ec(1528) : undefined,
    _0x47ea71 = _0x1b3bd0 ? _0x3be3c7 + "-error" : undefined,
    _0x66a309 =
      [_0x232c2d, _0x47ea71]
        [_0x2331ec(1573)](Boolean)
        [_0x2331ec(766)]("\x20") || undefined,
    _0x5d566b = {
      id: _0x3be3c7 + _0x2331ec(644),
      "aria-labelledby": _0x314319,
      "aria-describedby": _0x66a309,
      "aria-invalid": _0x1b3bd0 || undefined,
    },
    _0x49c3b6 =
      typeof _0x350804.children == _0x2331ec(1182)
        ? _0x350804[_0x2331ec(1492)](_0x5d566b)
        : _0x350804[_0x2331ec(1492)];
  return (0, i.jsxs)("div", {
    "aria-describedby": _0x66a309,
    "aria-disabled": _0x350804[_0x2331ec(1937)] || undefined,
    "aria-invalid": _0x1b3bd0 || undefined,
    "aria-labelledby": _0x314319,
    className: _0x2331ec(2035),
    role: "group",
    children: [
      (0, i[_0x2331ec(922)])(_0x2331ec(1904), {
        id: _0x314319,
        className: _0x2331ec(547),
        children: _0x350804[_0x2331ec(1614)],
      }),
      _0x49c3b6,
      _0x471033 &&
        (0, i[_0x2331ec(922)])(_0x2331ec(1904), {
          id: _0x232c2d,
          className: _0x2331ec(683),
          children: _0x350804[_0x2331ec(1899)],
        }),
      _0x1b3bd0 &&
        (0, i[_0x2331ec(922)])("span", {
          id: _0x47ea71,
          className: "univer-mt-1\x20univer-text-xs\x20univer-text-red-500",
          children: _0x350804[_0x2331ec(764)],
        }),
    ],
  });
}
function O(_0x32455a) {
  return (0, i[_0x35b2a1(922)])(_0x35b2a1(1998), {
    className: _0x35b2a1(561),
    children: _0x32455a[_0x35b2a1(1492)],
  });
}
function ct(_0x23155e, _0x200ad3) {
  if (_0x23155e) {
    _0x23155e.id = _0x200ad3.id;
    for (let _0x352a26 of [_0x142650(497), _0x142650(937), "aria-invalid"]) {
      let _0x4cb743 = _0x200ad3[_0x352a26];
      _0x4cb743 === undefined
        ? _0x23155e.removeAttribute(_0x352a26)
        : _0x23155e[_0x142650(930)](_0x352a26, String(_0x4cb743));
    }
  }
}
function k(_0x4d2981) {
  let _0x1ddfa9 = pe();
  return (0, i[_0x525a5a(922)])(D, {
    disabled: _0x4d2981.disabled,
    error: _0x4d2981[_0x525a5a(764)],
    help: _0x4d2981[_0x525a5a(1899)],
    label: _0x4d2981.label,
    children: (_0x5f50b4) =>
      (0, i.jsxs)(_0x525a5a(1998), {
        className: _0x525a5a(933),
        children: [
          (0, i[_0x525a5a(922)])(t[_0x525a5a(586)], {
            ref: (_0x374cfa) => ct(_0x374cfa, _0x5f50b4),
            allowClear: _0x4d2981[_0x525a5a(2026)],
            allowEmpty: _0x4d2981[_0x525a5a(1531)],
            className: _0x525a5a(1516),
            disabled: _0x4d2981[_0x525a5a(1937)],
            max: _0x4d2981[_0x525a5a(628)],
            min: _0x4d2981[_0x525a5a(1337)],
            placeholder: _0x4d2981[_0x525a5a(1769)],
            precision: _0x4d2981.precision,
            step: _0x4d2981[_0x525a5a(1939)],
            value: _0x4d2981[_0x525a5a(1324)],
            ..._0x5f50b4,
            ..._0x1ddfa9,
            onChange: (_0x5f18d5) => _0x4d2981[_0x525a5a(507)](_0x5f18d5),
          }),
          _0x4d2981[_0x525a5a(1324)] === null &&
            _0x4d2981.emptyLabel !== undefined &&
            (0, i[_0x525a5a(922)])(_0x525a5a(1904), {
              "aria-hidden": _0x525a5a(1582),
              className: _0x525a5a(988),
              children: _0x4d2981[_0x525a5a(1769)],
            }),
        ],
      }),
  });
}
function lt(_0x59bf3a) {
  var _0x5d736e;
  let [_0x8f6168, _0x46375f] = (0, r[_0x391955(1825)])(false),
    _0x375c38 =
      ((_0x5d736e = _0x59bf3a[_0x391955(1822)].find(
        (_0x1c0d57) =>
          _0x1c0d57[_0x391955(1324)] === _0x59bf3a[_0x391955(1324)],
      )) == null
        ? undefined
        : _0x5d736e[_0x391955(1614)]) ?? _0x59bf3a[_0x391955(1324)],
    _0x353df3 =
      _0x59bf3a[_0x391955(2026)] &&
      _0x59bf3a[_0x391955(1774)] !== undefined &&
      _0x59bf3a[_0x391955(842)] !== undefined &&
      _0x59bf3a[_0x391955(1324)] !== "" &&
      !_0x59bf3a.disabled,
    _0x434690 = [
      {
        type: "radio",
        hideIndicator: true,
        options: _0x59bf3a[_0x391955(1822)][_0x391955(1285)]((_0x41fc2e) => ({
          disabled: _0x41fc2e.disabled,
          label: _0x41fc2e[_0x391955(1614)],
          value: _0x41fc2e[_0x391955(1324)],
        })),
        value: _0x59bf3a[_0x391955(1324)],
        onSelect: (_0x23d589) => _0x59bf3a.onChange(_0x23d589),
      },
    ];
  return (0, i[_0x391955(1557)])(_0x391955(1998), {
    className: _0x391955(1453),
    children: [
      (0, i.jsx)(t[_0x391955(744)], {
        align: "start",
        className:
          "univer-max-h-80\x20univer-w-[--radix-popper-anchor-width]\x20univer-min-w-36\x20univer-overflow-auto",
        disabled: _0x59bf3a[_0x391955(1937)],
        items: _0x434690,
        open: _0x8f6168,
        onOpenChange: _0x46375f,
        children: (0, i[_0x391955(1557)])(_0x391955(1204), {
          "aria-expanded": _0x8f6168,
          "aria-haspopup": _0x391955(1849),
          className: (0, t[_0x391955(1916)])(
            t[_0x391955(1348)],
            _0x391955(950),
            {
              "univer-border-primary-600\x20univer-outline-none\x20univer-ring-2\x20univer-ring-primary-50\x20dark:!univer-ring-primary-900":
                _0x8f6168,
              "univer-cursor-not-allowed": _0x59bf3a[_0x391955(1937)],
              "univer-cursor-pointer\x20hover:univer-border-primary-600":
                !_0x59bf3a[_0x391955(1937)] && !_0x8f6168,
            },
          ),
          "data-u-comp": _0x391955(945),
          disabled: _0x59bf3a[_0x391955(1937)],
          type: "button",
          ..._0x59bf3a[_0x391955(913)],
          children: [
            (0, i[_0x391955(922)])(_0x391955(1904), {
              className: _0x391955(1626),
              children: _0x375c38,
            }),
            (0, i[_0x391955(922)])(n.MoreDownIcon, {
              "aria-hidden": "true",
              className: (0, t[_0x391955(1916)])(
                _0x391955(795),
                _0x353df3 && _0x391955(1395),
              ),
            }),
          ],
        }),
      }),
      _0x353df3 &&
        (0, i[_0x391955(922)])(_0x391955(1204), {
          "aria-label": _0x59bf3a[_0x391955(1774)],
          className: _0x391955(1060),
          style: { insetInlineEnd: _0x391955(1436) },
          type: "button",
          onClick: _0x59bf3a[_0x391955(842)],
          children: (0, i[_0x391955(922)])(n[_0x391955(1378)], {
            "aria-hidden": "true",
            className: _0x391955(1263),
          }),
        }),
    ],
  });
}
function A(_0x4cc0a9) {
  return (0, i.jsx)(D, {
    disabled: _0x4cc0a9[_0x130b68(1937)],
    error: _0x4cc0a9[_0x130b68(764)],
    help: _0x4cc0a9[_0x130b68(1899)],
    label: _0x4cc0a9[_0x130b68(1614)],
    children: (_0x3053cf) =>
      (0, i[_0x130b68(922)])(lt, {
        allowClear: _0x4cc0a9.allowClear,
        clearLabel: _0x4cc0a9[_0x130b68(1774)],
        controlProps: _0x3053cf,
        disabled: _0x4cc0a9.disabled,
        options: _0x4cc0a9[_0x130b68(1822)],
        value: _0x4cc0a9.value,
        onChange: _0x4cc0a9.onChange,
        onClear: _0x4cc0a9[_0x130b68(842)],
      }),
  });
}
function j(_0x3f3e5e) {
  let _0xd5ec09 = pe(),
    [_0x19d918, _0x364d75] = (0, r.useState)(_0x3f3e5e[_0x4ace52(1324)]),
    _0x2607dd =
      _0x3f3e5e[_0x4ace52(1486)] === _0x4ace52(1309)
        ? _0x19d918
        : _0x3f3e5e.value;
  return (
    (0, r[_0x4ace52(1989)])(() => {
      const _0x591d2b = _0x4ace52;
      _0x364d75(_0x3f3e5e[_0x591d2b(1324)]);
    }, [_0x3f3e5e[_0x4ace52(1324)]]),
    (0, i[_0x4ace52(922)])(D, {
      disabled: _0x3f3e5e[_0x4ace52(1937)],
      error: _0x3f3e5e[_0x4ace52(764)],
      help: _0x3f3e5e[_0x4ace52(1899)],
      label: _0x3f3e5e.label,
      children: (_0x48ab1e) =>
        (0, i.jsx)(t[_0x4ace52(625)], {
          allowClear: _0x3f3e5e.allowClear,
          disabled: _0x3f3e5e[_0x4ace52(1937)],
          placeholder: _0x3f3e5e[_0x4ace52(1571)],
          value: _0x2607dd,
          ..._0x48ab1e,
          onBlur: () => {
            const _0x551a0e = _0x4ace52;
            (_0xd5ec09[_0x551a0e(717)](),
              _0x3f3e5e[_0x551a0e(1486)] === _0x551a0e(1309) &&
                _0x19d918 !== _0x3f3e5e.value &&
                _0x3f3e5e[_0x551a0e(507)](_0x19d918));
          },
          onChange: (_0x36db34) => {
            const _0x2ff749 = _0x4ace52;
            _0x3f3e5e[_0x2ff749(1486)] === _0x2ff749(1309)
              ? _0x364d75(_0x36db34)
              : _0x3f3e5e[_0x2ff749(507)](_0x36db34);
          },
          onFocus: _0xd5ec09[_0x4ace52(542)],
        }),
    })
  );
}
const ut = -1234.56,
  dt = e.defaultChartConfig["formatStyle"].red["color"],
  ft = [
    "yyyy-MM-dd",
    "yyyy/MM/dd",
    'yyyy"年"MM"月"dd"日"',
    "MM-dd",
    "M\x22月\x22d\x22日\x22",
    "h:mm:ss",
    "h:mm",
    "A/P hh:mm",
    "A/P h:mm",
    "A/P\x20h:mm:ss",
    "MM-dd\x20A/P\x20hh:mm",
  ],
  pt = [
    { value: "#,##0_);(#,##0)" },
    { value: "#,##0_);[Red](#,##0)", color: dt },
    { value: "#,##0.00_);#,##0.00" },
    { value: "#,##0.00_);[Red]#,##0.00", color: dt },
    { value: "#,##0.00_);-#,##0.00" },
    { value: "#,##0.00_);[Red]-#,##0.00", color: dt },
  ],
  mt = [
    {
      value: (_0x5c2d13) =>
        "\x22" + _0x5c2d13 + "\x22#,##0.00_);\x22" + _0x5c2d13 + '"#,##0.00',
    },
    {
      value: (_0x210708) =>
        "\x22" + _0x210708 + '"#,##0.00_);[Red]"' + _0x210708 + "\x22#,##0.00",
      color: dt,
    },
    {
      value: (_0x414c51) =>
        "\x22" + _0x414c51 + '"#,##0.00_);("' + _0x414c51 + "\x22#,##0.00)",
    },
    {
      value: (_0x18b484) =>
        "\x22" + _0x18b484 + '"#,##0.00_);[Red]("' + _0x18b484 + '"#,##0.00)',
      color: dt,
    },
    {
      value: (_0x3d60d4) =>
        "\x22" + _0x3d60d4 + '"#,##0.00_);-"' + _0x3d60d4 + '"#,##0.00',
    },
    {
      value: (_0x56f5c6) =>
        "\x22" + _0x56f5c6 + '"#,##0.00_);[Red]-"' + _0x56f5c6 + '"#,##0.00',
      color: dt,
    },
  ];
function ht(_0x36ced9, _0x4a5c6b) {
  try {
    return a.numfmt[_0x30f0fb(1875)](_0x36ced9, _0x4a5c6b);
  } catch {
    return _0x36ced9;
  }
}
const gt = ft.map((_0x2a80d4) => ({
    label: ht(_0x2a80d4, 11175.562847222222),
    value: _0x2a80d4,
  })),
  _t = pt.map((_0x12cb65) => ({
    color: "color" in _0x12cb65 ? _0x12cb65.color : undefined,
    label: ht(_0x12cb65.value, ut),
    value: _0x12cb65.value,
  }));
function vt(_0x6b5e76) {
  return mt[_0x491e30(1285)]((_0x3b6d57) => {
    const _0x32407e = _0x491e30;
    let _0x158e6a = _0x3b6d57[_0x32407e(1324)](_0x6b5e76);
    return {
      color: _0x32407e(1393) in _0x3b6d57 ? _0x3b6d57.color : undefined,
      label: ht(_0x158e6a, ut),
      value: _0x158e6a,
    };
  });
}
function yt(_0xd9ad2c) {
  return (
    a.currencySymbols[_0x540238(1507)]((_0x4e7a07) =>
      _0xd9ad2c[_0x540238(1868)](_0x4e7a07),
    ) ?? a[_0x540238(1728)][0]
  );
}
function bt(_0x2b8edc, _0x3b4007 = 0) {
  if (!_0x2b8edc) return _0x3b4007;
  try {
    return (
      a[_0x3dbc29(1682)].getFormatInfo(_0x2b8edc)[_0x3dbc29(791)] ?? _0x3b4007
    );
  } catch {
    return _0x3b4007;
  }
}
function xt(_0x57de7e, _0x9acd44) {
  let _0x1a14f1 = Math[_0x8d69c6(1337)](
      Math[_0x8d69c6(628)](0, Number(_0x9acd44)),
      20,
    ),
    _0x2b8e91 = Array(_0x1a14f1)[_0x8d69c6(1644)]("0")[_0x8d69c6(766)]("");
  return _0x57de7e[_0x8d69c6(757)](";")
    [_0x8d69c6(1285)]((_0x3e41e7) =>
      /\.0?/[_0x8d69c6(1208)](_0x3e41e7)
        ? _0x3e41e7[_0x8d69c6(1530)](
            /\.0*/g,
            "" + (_0x1a14f1 > 0 ? "." : "") + _0x2b8e91,
          )
        : /0[^0]?/[_0x8d69c6(1208)](_0x3e41e7)
          ? _0x3e41e7.replace(
              /0[^0]+|0$/,
              "0" + (_0x1a14f1 > 0 ? "." : "") + _0x2b8e91,
            )
          : _0x3e41e7,
    )
    .join(";");
}
function St(_0x293b3d, _0x561d5f) {
  return xt(
    _0x99536f(1165) +
      _0x293b3d +
      _0x99536f(637) +
      (_0x561d5f > 0 ? ".0" : "") +
      "_)",
    _0x561d5f,
  );
}
function Ct(_0x5822c1) {
  if (!_0x5822c1) return _0x3c376a(1109);
  if (
    a[_0x3c376a(1728)][_0x3c376a(1507)]((_0x51c332) =>
      _0x5822c1[_0x3c376a(1868)](_0x51c332),
    )
  )
    return _0x5822c1[_0x3c376a(1509)]("_(") ? "accounting" : _0x3c376a(776);
  let _0x4f182a;
  try {
    _0x4f182a = a[_0x3c376a(1682)][_0x3c376a(1233)](_0x5822c1)[_0x3c376a(483)];
  } catch {
    return _0x3c376a(1109);
  }
  return gt[_0x3c376a(1399)](
    (_0x246a01) => _0x246a01[_0x3c376a(1324)] === _0x5822c1,
  ) || ["date", _0x3c376a(936), _0x3c376a(1929)].includes(_0x4f182a)
    ? _0x3c376a(1518)
    : _t[_0x3c376a(1399)]((_0x4b40fd) =>
          (0, a.isPatternEqualWithoutDecimal)(
            _0x4b40fd[_0x3c376a(1324)],
            _0x5822c1,
          ),
        )
      ? "thousands"
      : "general";
}
const wt = "advanced",
  Tt = {
    currency: "chart-ui.common.currency",
    number: "chart-ui.numberFormat.number",
    percentage: "chart-ui.common.percentage",
    scientific: "chart-ui.numberFormat.scientific",
    source: "chart-ui.numberFormat.source",
  };
function Et(_0x2e8484) {
  let _0x4b72ea = Object[_0xf44f52(1421)](e[_0xf44f52(1750)]).find(
    ([, _0x13f588]) => _0x13f588 === (_0x2e8484 ?? null),
  );
  return (_0x4b72ea == null ? undefined : _0x4b72ea[0]) ?? wt;
}
function Dt(_0x56e2dc) {
  if (!_0x56e2dc) return String(e[_0xc5385a(768)]);
  try {
    return a[_0xc5385a(1682)][_0xc5385a(1875)](_0x56e2dc, e[_0xc5385a(768)]);
  } catch {
    return String(e[_0xc5385a(768)]);
  }
}
function Ot(_0x43041a) {
  return (0, i[_0x1cf811(922)])(D, {
    label: _0x43041a[_0x1cf811(1614)],
    children: (0, i[_0x1cf811(922)])(t[_0x1cf811(647)], {
      className: _0x1cf811(1809),
      options: [..._0x43041a[_0x1cf811(1822)]],
      value: _0x43041a[_0x1cf811(1324)],
      onChange: (_0x4ed420) => _0x43041a[_0x1cf811(507)](_0x4ed420),
    }),
  });
}
function kt(_0x25a4d5) {
  var _0x7fcb34, _0x2b9eb9;
  let _0x4036e1 = (0, o.useDependency)(a[_0x385953(1419)]),
    _0x333826 = _0x25a4d5[_0x385953(1324)] ?? "",
    [_0x1ed5e3, _0x3f030e] = (0, r.useState)(_0x333826),
    [_0x1a8a80, _0x31a61f] = (0, r[_0x385953(1825)])(() => Ct(_0x333826)),
    [_0x1969b7, _0x5ce735] = (0, r[_0x385953(1825)])(() => bt(_0x333826, 2)),
    [_0x11ce68, _0x3c318a] = (0, r.useState)(() => yt(_0x333826)),
    _0x5e8570 = vt(_0x11ce68),
    _0x2115fe =
      ((_0x7fcb34 = _0x5e8570.find((_0x2fe904) =>
        (0, a[_0x385953(573)])(_0x2fe904[_0x385953(1324)], _0x1ed5e3),
      )) == null
        ? undefined
        : _0x7fcb34[_0x385953(1324)]) ?? _0x5e8570[0][_0x385953(1324)],
    _0x5e2339 =
      ((_0x2b9eb9 = _t[_0x385953(1507)]((_0x539bf5) =>
        (0, a.isPatternEqualWithoutDecimal)(_0x539bf5.value, _0x1ed5e3),
      )) == null
        ? undefined
        : _0x2b9eb9.value) ?? _t[0][_0x385953(1324)],
    _0x50cdfe = (_0x1cb9bc) => {
      const _0x5589db = _0x385953;
      switch ((_0x31a61f(_0x1cb9bc), _0x1cb9bc)) {
        case "general":
          _0x3f030e("");
          break;
        case _0x5589db(544):
          _0x3f030e(St(_0x11ce68, _0x1969b7));
          break;
        case _0x5589db(776):
          _0x3f030e(xt(_0x5e8570[0][_0x5589db(1324)], _0x1969b7));
          break;
        case _0x5589db(1518):
          _0x3f030e(gt[0][_0x5589db(1324)]);
          break;
        case _0x5589db(651):
          _0x3f030e(xt(_t[0][_0x5589db(1324)], _0x1969b7));
          break;
      }
    },
    _0x1a0ee6 = (_0x13cb49) => {
      const _0x3530dc = _0x385953;
      let _0x3c7988 = _0x13cb49 ?? 0;
      (_0x5ce735(_0x3c7988),
        _0x3f030e(
          _0x1a8a80 === _0x3530dc(544)
            ? St(_0x11ce68, _0x3c7988)
            : xt(_0x1ed5e3, _0x3c7988),
        ));
    },
    _0x13d646 = (_0x542c9f) => {
      const _0x2aedc4 = _0x385953;
      if ((_0x3c318a(_0x542c9f), _0x1a8a80 === _0x2aedc4(544))) {
        _0x3f030e(St(_0x542c9f, _0x1969b7));
        return;
      }
      _0x3f030e(xt(vt(_0x542c9f)[0][_0x2aedc4(1324)], _0x1969b7));
    },
    _0x155696 =
      _0x1a8a80 === _0x385953(651)
        ? _0x385953(1898)
        : _0x385953(1111) + _0x1a8a80 + _0x385953(1520);
  return (0, i[_0x385953(922)])(t.Dialog, {
    open: true,
    maskClosable: false,
    title: _0x4036e1.t(_0x385953(1997)),
    width: 600,
    footer: (0, i[_0x385953(1557)])(_0x385953(1998), {
      className: _0x385953(1035),
      children: [
        (0, i.jsx)(t[_0x385953(1420)], {
          onClick: _0x25a4d5[_0x385953(1340)],
          children: _0x4036e1.t("chart-ui.common.cancel"),
        }),
        (0, i[_0x385953(922)])(t[_0x385953(1420)], {
          variant: _0x385953(1148),
          onClick: () => _0x25a4d5[_0x385953(1024)](_0x1ed5e3 || undefined),
          children: _0x4036e1.t(_0x385953(841)),
        }),
      ],
    }),
    onClose: _0x25a4d5[_0x385953(1340)],
    children: (0, i[_0x385953(1557)])("div", {
      className: _0x385953(1556),
      children: [
        (0, i[_0x385953(922)])(A, {
          label: _0x4036e1.t("chart-ui.numberFormat.formatTypes"),
          options: [
            { value: _0x385953(1109), label: _0x4036e1.t(_0x385953(1098)) },
            {
              value: _0x385953(544),
              label: _0x4036e1.t("chart-ui.numberFormat.accountingType"),
            },
            { value: _0x385953(776), label: _0x4036e1.t(_0x385953(1847)) },
            { value: _0x385953(1518), label: _0x4036e1.t(_0x385953(1641)) },
            { value: _0x385953(651), label: _0x4036e1.t(_0x385953(1293)) },
          ],
          value: _0x1a8a80,
          onChange: _0x50cdfe,
        }),
        (_0x1a8a80 === _0x385953(544) || _0x1a8a80 === "currency") &&
          (0, i.jsxs)(O, {
            children: [
              (0, i[_0x385953(922)])(k, {
                label: _0x4036e1.t(_0x385953(1078)),
                max: 20,
                min: 0,
                value: _0x1969b7,
                onChange: _0x1a0ee6,
              }),
              (0, i.jsx)(A, {
                label: _0x4036e1.t(_0x385953(1471)),
                options: a.currencySymbols[_0x385953(1285)]((_0x4e355f) => ({
                  label: _0x4e355f,
                  value: _0x4e355f,
                })),
                value: _0x11ce68,
                onChange: _0x13d646,
              }),
            ],
          }),
        _0x1a8a80 === _0x385953(651) &&
          (0, i.jsx)(k, {
            label: _0x4036e1.t("chart-ui.numberFormat.decimalPlaces"),
            max: 20,
            min: 0,
            value: _0x1969b7,
            onChange: _0x1a0ee6,
          }),
        _0x1a8a80 === _0x385953(776) &&
          (0, i.jsx)(Ot, {
            label: _0x4036e1.t(_0x385953(1130)),
            options: _0x5e8570,
            value: _0x2115fe,
            onChange: (_0x1b884d) => _0x3f030e(xt(_0x1b884d, _0x1969b7)),
          }),
        _0x1a8a80 === _0x385953(1518) &&
          (0, i[_0x385953(922)])(Ot, {
            label: _0x4036e1.t(_0x385953(735)),
            options: gt,
            value: _0x1ed5e3,
            onChange: _0x3f030e,
          }),
        _0x1a8a80 === _0x385953(651) &&
          (0, i[_0x385953(922)])(Ot, {
            label: _0x4036e1.t("chart-ui.numberFormat.negativeNumberTypes"),
            options: _t,
            value: _0x5e2339,
            onChange: (_0x4cd67c) => _0x3f030e(xt(_0x4cd67c, _0x1969b7)),
          }),
        (0, i[_0x385953(922)])(_0x385953(1998), {
          className: _0x385953(1812),
          children: _0x4036e1.t(_0x155696),
        }),
      ],
    }),
  });
}
function At(_0xe46601) {
  return (0, i[_0x52298f(922)])(j, {
    commitMode: _0x52298f(939),
    label: _0xe46601[_0x52298f(1614)],
    value: _0xe46601[_0x52298f(1324)] ?? "",
    onChange: _0xe46601[_0x52298f(507)],
  });
}
function jt(_0x596385) {
  let _0x36de54 = (0, o[_0x48ad05(858)])(a[_0x48ad05(1419)]),
    [_0x1c8b0d, _0x1d854e] = (0, r[_0x48ad05(1825)])(false),
    _0x490abc = Et(_0x596385.value),
    _0x2f69c7 = Object[_0x48ad05(1994)](e[_0x48ad05(1750)])[_0x48ad05(1285)](
      (_0x1f71ed) => ({ label: _0x36de54.t(Tt[_0x1f71ed]), value: _0x1f71ed }),
    );
  return (0, i[_0x48ad05(1557)])(_0x48ad05(1998), {
    className: _0x48ad05(1458),
    children: [
      (0, i[_0x48ad05(922)])(A, {
        label: _0x596385[_0x48ad05(1614)],
        options: [
          ..._0x2f69c7,
          { label: _0x36de54.t("chart-ui.numberFormat.setFormat"), value: wt },
        ],
        value: _0x490abc,
        onChange: (_0x347a49) => {
          const _0x5f53ec = _0x48ad05;
          if (_0x347a49 === wt) {
            _0x1d854e(true);
            return;
          }
          _0x596385.onChange(e[_0x5f53ec(1750)][_0x347a49]);
        },
      }),
      (0, i[_0x48ad05(1557)])(_0x48ad05(1904), {
        className:
          "univer-text-xs\x20univer-text-gray-500\x20dark:!univer-text-gray-400",
        children: [
          _0x36de54.t(_0x48ad05(1722)),
          ":\x20",
          Dt(_0x596385[_0x48ad05(1324)]),
        ],
      }),
      _0x1c8b0d &&
        (0, i[_0x48ad05(922)])(kt, {
          value: _0x596385[_0x48ad05(1324)],
          onApply: (_0xe4c35c) => {
            const _0x37e01d = _0x48ad05;
            (_0x596385[_0x37e01d(507)](_0xe4c35c), _0x1d854e(false));
          },
          onCancel: () => _0x1d854e(false),
        }),
    ],
  });
}
const Mt = (0, r.createContext)(null),
  Nt = (0, r.createContext)(null);
function Pt(_0x1c031a) {
  return (0, i[_0x143968(922)])(Nt[_0x143968(1838)], {
    value: _0x1c031a[_0x143968(1621)] ?? null,
    children: (0, i[_0x143968(922)])(Mt[_0x143968(1838)], {
      value: _0x1c031a[_0x143968(926)],
      children: _0x1c031a[_0x143968(1492)],
    }),
  });
}
function Ft() {
  let _0x4621ca = (0, r[_0x51f8cf(1443)])(Mt);
  if (!_0x4621ca) throw Error(_0x51f8cf(1034));
  return _0x4621ca;
}
function It() {
  return (0, r[_0x20a76e(1443)])(Nt);
}
function M(_0x188912) {
  let [_0x303c95, _0x2a1abe] = (0, r.useState)(false);
  function _0x10fd99(_0x3c7fc1) {
    _0x188912[_0x52143e(1937)] ||
      (_0x188912.onChange(_0x3c7fc1), _0x2a1abe(false));
  }
  return (0, i[_0x291d26(922)])(D, {
    disabled: _0x188912[_0x291d26(1937)],
    error: _0x188912[_0x291d26(764)],
    help: _0x188912[_0x291d26(1899)],
    label: _0x188912[_0x291d26(1614)],
    children: (_0x5ca3ea) =>
      (0, i.jsx)(t[_0x291d26(761)], {
        disabled: _0x188912[_0x291d26(1937)],
        open: !_0x188912.disabled && _0x303c95,
        overlay: (0, i[_0x291d26(1557)])(_0x291d26(1998), {
          className: _0x291d26(788),
          children: [
            _0x188912[_0x291d26(1000)] === undefined
              ? null
              : (0, i[_0x291d26(922)])(t[_0x291d26(1420)], {
                  disabled: _0x188912[_0x291d26(1937)],
                  onClick: () => _0x10fd99(null),
                  children: _0x188912.resetLabel,
                }),
            _0x188912[_0x291d26(1627)] === undefined
              ? null
              : (0, i[_0x291d26(922)])(t[_0x291d26(1420)], {
                  disabled: _0x188912[_0x291d26(1937)],
                  onClick: () => _0x10fd99("transparent"),
                  children: _0x188912[_0x291d26(1627)],
                }),
            (0, i.jsx)(t.ColorPicker, {
              value:
                _0x188912.value && _0x188912[_0x291d26(1324)] !== "transparent"
                  ? _0x188912.value
                  : _0x188912[_0x291d26(984)],
              onChange: (_0x194706) => _0x10fd99(_0x194706),
            }),
          ],
        }),
        onOpenChange: _0x2a1abe,
        children: (0, i.jsxs)(t[_0x291d26(1420)], {
          size: _0x291d26(1121),
          "aria-expanded": !_0x188912[_0x291d26(1937)] && _0x303c95,
          "aria-haspopup": "dialog",
          className: (0, t[_0x291d26(1916)])(_0x291d26(2037), {
            "univer-bg-gray-100": _0x303c95,
          }),
          disabled: _0x188912[_0x291d26(1937)],
          type: _0x291d26(1204),
          ..._0x5ca3ea,
          children: [
            _0x188912.value === _0x291d26(1957) && _0x188912[_0x291d26(1627)]
              ? (0, i.jsx)("span", {
                  className: "univer-truncate",
                  children: _0x188912[_0x291d26(1627)],
                })
              : _0x188912.value
                ? (0, i[_0x291d26(922)])(_0x291d26(1904), {
                    className: "univer-size-5\x20univer-rounded-sm",
                    style: { backgroundColor: _0x188912.value },
                  })
                : (0, i[_0x291d26(922)])(_0x291d26(1904), {
                    className: _0x291d26(929),
                    children: _0x188912.emptyLabel,
                  }),
            (0, i.jsx)(n[_0x291d26(781)], {
              "aria-hidden": _0x291d26(1582),
              className: "univer-shrink-0",
            }),
          ],
        }),
      }),
  });
}
let Lt = (function (_0x187ba3) {
  return (
    (_0x187ba3[_0x2b9f78(562)] = "allSeriesStyle"),
    (_0x187ba3[_0x2b9f78(1118)] = _0x2b9f78(1575)),
    (_0x187ba3[_0x2b9f78(1680)] = _0x2b9f78(623)),
    (_0x187ba3[_0x2b9f78(999)] = _0x2b9f78(891)),
    (_0x187ba3[_0x2b9f78(1163)] = _0x2b9f78(1257)),
    (_0x187ba3[_0x2b9f78(1046)] = _0x2b9f78(1851)),
    (_0x187ba3.Axes = _0x2b9f78(714)),
    (_0x187ba3.AxisPointer = _0x2b9f78(1661)),
    (_0x187ba3[_0x2b9f78(615)] = _0x2b9f78(1345)),
    (_0x187ba3[_0x2b9f78(2028)] = "chartType"),
    (_0x187ba3[_0x2b9f78(2030)] = _0x2b9f78(1931)),
    (_0x187ba3.ChordMapping = _0x2b9f78(1050)),
    (_0x187ba3[_0x2b9f78(1013)] = "chordStyle"),
    (_0x187ba3[_0x2b9f78(1944)] = _0x2b9f78(1394)),
    (_0x187ba3[_0x2b9f78(1840)] = _0x2b9f78(860)),
    (_0x187ba3[_0x2b9f78(1673)] = _0x2b9f78(1786)),
    (_0x187ba3[_0x2b9f78(642)] = _0x2b9f78(1598)),
    (_0x187ba3[_0x2b9f78(753)] = _0x2b9f78(756)),
    (_0x187ba3.Heatmap = _0x2b9f78(1729)),
    (_0x187ba3[_0x2b9f78(861)] = _0x2b9f78(1346)),
    (_0x187ba3[_0x2b9f78(524)] = "invalidValueStrategy"),
    (_0x187ba3[_0x2b9f78(1435)] = "legend"),
    (_0x187ba3[_0x2b9f78(1039)] = _0x2b9f78(1653)),
    (_0x187ba3[_0x2b9f78(1011)] = _0x2b9f78(954)),
    (_0x187ba3[_0x2b9f78(593)] = _0x2b9f78(1434)),
    (_0x187ba3[_0x2b9f78(824)] = _0x2b9f78(1930)),
    (_0x187ba3[_0x2b9f78(600)] = _0x2b9f78(1252)),
    (_0x187ba3[_0x2b9f78(990)] = "plotArea"),
    (_0x187ba3[_0x2b9f78(479)] = "radar"),
    (_0x187ba3.Relation = _0x2b9f78(1656)),
    (_0x187ba3[_0x2b9f78(1470)] = _0x2b9f78(837)),
    (_0x187ba3.Subtitle = _0x2b9f78(1247)),
    (_0x187ba3[_0x2b9f78(1219)] = _0x2b9f78(727)),
    (_0x187ba3.SunburstHierarchyIndexes = "sunburstHierarchyIndexes"),
    (_0x187ba3.SunburstStyle = _0x2b9f78(1889)),
    (_0x187ba3[_0x2b9f78(1449)] = _0x2b9f78(934)),
    (_0x187ba3.Theme = _0x2b9f78(1162)),
    (_0x187ba3[_0x2b9f78(1907)] = "title"),
    (_0x187ba3.Treemap = _0x2b9f78(1136)),
    (_0x187ba3[_0x2b9f78(1354)] = _0x2b9f78(1984)),
    (_0x187ba3[_0x2b9f78(1766)] = _0x2b9f78(1624)),
    (_0x187ba3[_0x2b9f78(513)] = _0x2b9f78(1092)),
    _0x187ba3
  );
})({});
const Rt = { rightY: "rightYAxis", x: "xAxis", y: "yAxis" };
function zt(_0x17d2cb, _0x311fcb, _0x2c5109) {
  return _0x17d2cb[_0x1ee80d(1507)](
    (_0x1e288d) =>
      (0, e[_0x1ee80d(595)])(
        _0x1e288d[_0x1ee80d(1712)],
        _0x311fcb,
        _0x17d2cb,
      ) === Rt[_0x2c5109],
  );
}
const Bt = (_0x385822) =>
    'Chart view state "' + _0x385822 + "\x22\x20is\x20already\x20registered.",
  Vt = (_0x298861) => 'Chart view state "' + _0x298861 + '" is not registered.';
var Ht = class {
  constructor() {
    b(this, _0x19b281(927), new Map());
  }
  registerViewState(_0x4b0db4, _0x1ab120) {
    if (this[_0x1280a0(927)][_0x1280a0(863)](_0x4b0db4))
      throw Error(Bt(_0x4b0db4));
    return (
      this[_0x1280a0(927)][_0x1280a0(1023)](_0x4b0db4, _0x1ab120),
      (0, a[_0x1280a0(1504)])(() => {
        const _0x58760a = _0x1280a0;
        this[_0x58760a(927)].get(_0x4b0db4) === _0x1ab120 &&
          this[_0x58760a(927)][_0x58760a(872)](_0x4b0db4);
      })
    );
  }
  resolve(_0x59f3c5) {
    let _0x58fb58 = this._definitions[_0x287ce4(977)](_0x59f3c5);
    if (!_0x58fb58) throw Error(Vt(_0x59f3c5));
    return _0x58fb58;
  }
};
const Ut = (0, a.createIdentifier)("chart.ui.service");
let Wt = class extends a.Disposable {
  constructor(_0x16d276) {
    (super(),
      b(this, _0xdd0598(583), undefined),
      (this[_0xdd0598(583)] = _0x16d276));
  }
  registerViewState(_0x34e5bc, _0x851a99) {
    return this[_0x2fbb39(583)][_0x2fbb39(1951)](_0x34e5bc, _0x851a99);
  }
  getViewState(_0x315d03) {
    return this[_0x25ffb8(583)][_0x25ffb8(1710)](_0x315d03);
  }
};
Wt = Ee([Te(0, (0, a.Inject)(Ht))], Wt);
function N(_0x1dedf2, _0x516ee3) {
  let _0x56ae09 = It() ?? (0, o.useDependency)(Ut),
    _0x292395 = Ft(),
    _0x2f7d51 = (0, r[_0x548347(1687)])(
      () => _0x56ae09.getViewState(_0x1dedf2),
      [_0x1dedf2, _0x56ae09],
    );
  return [
    (0, o[_0x548347(1451)])(
      (0, r[_0x548347(1687)])(
        () => _0x2f7d51.get(_0x292395),
        [_0x292395, _0x2f7d51],
      ),
      _0x516ee3,
    ),
    (0, r[_0x548347(1365)])(
      (_0x379b84) => {
        const _0x4a8de5 = _0x548347;
        var _0x357c79;
        (_0x357c79 = _0x2f7d51.set) == null ||
          _0x357c79[_0x4a8de5(678)](_0x2f7d51, _0x292395, _0x379b84);
      },
      [_0x292395, _0x2f7d51],
    ),
  ];
}
function Gt() {
  let _0x464ac8 = (0, o.useDependency)(a[_0xe3063d(1419)]),
    _0x1d81a1 = Ft()[_0xe3063d(1066)](),
    _0x17635d = (0, o.useObservable)(
      _0x464ac8[_0xe3063d(1091)],
      _0x464ac8.getDirection(),
    );
  return {
    ...(0, o[_0xe3063d(1451)])(
      (0, r[_0xe3063d(1687)])(
        () =>
          (0, u[_0xe3063d(952)])([
            _0x1d81a1[_0xe3063d(1968)],
            _0x1d81a1.context$,
            _0x1d81a1[_0xe3063d(1982)],
            _0x1d81a1[_0xe3063d(688)],
          ])[_0xe3063d(505)](
            (0, u.map)(() => _0x1d81a1[_0xe3063d(1463)](_0x17635d)),
          ),
        [_0x17635d, _0x1d81a1],
      ),
      _0x1d81a1.getRuntimeContext(_0x17635d),
    ),
    direction: _0x17635d,
  };
}
function Kt() {
  return N(_0x48e234(553), e[_0x48e234(653)][_0x48e234(1859)])[0];
}
function qt() {
  let _0x4bd0cc = Gt();
  return (
    zt(_0x4bd0cc[_0x2cf197(714)], _0x4bd0cc[_0x2cf197(1922)], "rightY") !==
    undefined
  );
}
function Jt(_0x578eb8 = e.ChartTypeBits["Column"]) {
  return N("chartType", _0x578eb8);
}
function Yt(_0x2e24be, _0x283ecb, _0x2db708) {
  let _0x3c013a = _0x283ecb == null ? undefined : _0x283ecb[_0x562e8f(2021)],
    _0x30657a =
      (_0x3c013a == null ? undefined : _0x3c013a[_0x562e8f(525)]) === true
        ? _0x2db708[_0x562e8f(1507)]((_0x1c640a) => {
            const _0x5c177b = _0x562e8f;
            var _0x1fdb0d;
            return (
              _0x1c640a[_0x5c177b(1978)] ===
              ((_0x1fdb0d = _0x3c013a[_0x5c177b(1437)]) == null
                ? undefined
                : _0x1fdb0d[_0x5c177b(483)])
            );
          })
        : undefined;
  return e[_0x562e8f(1226)][_0x562e8f(1429)](
    _0x2e24be,
    e[_0x562e8f(653)][_0x562e8f(600)],
  ) && _0x30657a
    ? _0x30657a[_0x562e8f(1324)]
    : String(_0x2e24be);
}
function Xt(_0x12375d) {
  let [_0x11f4ed, _0xad7811] = Jt(),
    [_0x96ef90, _0x132fc6] = N(_0xb2afd3(1252)),
    _0x425178 = _0x96ef90 == null ? undefined : _0x96ef90[_0xb2afd3(2021)],
    _0x4482fa = (0, r.useMemo)(
      () => Yt(_0x11f4ed, _0x96ef90, _0x12375d),
      [_0x11f4ed, _0x12375d, _0x96ef90],
    );
  return {
    setValue: (0, r[_0xb2afd3(1365)])(
      (_0xccf1d) => {
        const _0x4ec3ec = _0xb2afd3;
        let _0x119291 = _0x12375d[_0x4ec3ec(1507)](
            (_0x401f08) => _0x401f08[_0x4ec3ec(1324)] === _0xccf1d,
          ),
          _0x42995d =
            (_0x119291 == null ? undefined : _0x119291[_0x4ec3ec(553)]) ??
            Number(_0xccf1d);
        if (
          (_0xad7811(_0x42995d),
          e[_0x4ec3ec(1226)][_0x4ec3ec(1429)](
            _0x42995d,
            e[_0x4ec3ec(653)][_0x4ec3ec(600)],
          ))
        ) {
          let _0x24fc74 =
            _0x119291 == null ? undefined : _0x119291[_0x4ec3ec(1978)];
          _0x24fc74
            ? _0x132fc6({
                ..._0x96ef90,
                composite: {
                  ..._0x425178,
                  enabled: true,
                  secondaryPlot: {
                    ...(_0x425178 == null
                      ? undefined
                      : _0x425178.secondaryPlot),
                    type: _0x24fc74,
                  },
                },
              })
            : _0x425178 &&
              _0x132fc6({
                ..._0x96ef90,
                composite: { ..._0x425178, enabled: false },
              });
        }
        return _0x42995d;
      },
      [_0x425178, _0x12375d, _0x96ef90, _0xad7811, _0x132fc6],
    ),
    value: _0x4482fa,
  };
}
let Zt = (function (_0x99ec53) {
    return (
      (_0x99ec53.SeriesStyle = _0x27081f(1645)),
      (_0x99ec53[_0x27081f(1538)] = _0x27081f(905)),
      (_0x99ec53[_0x27081f(817)] = _0x27081f(592)),
      (_0x99ec53.PieAggregateStyle = "pieAggregateStyle"),
      (_0x99ec53[_0x27081f(1203)] = _0x27081f(1648)),
      (_0x99ec53[_0x27081f(1302)] = _0x27081f(920)),
      (_0x99ec53.WaterfallStyle = _0x27081f(710)),
      _0x99ec53
    );
  })({}),
  Qt = (function (_0x1be58c) {
    return (
      (_0x1be58c.PieStyle = _0x131096(905)),
      (_0x1be58c[_0x131096(1232)] = _0x131096(639)),
      (_0x1be58c.ParetoLineSeries = "paretoLineSeries"),
      (_0x1be58c[_0x131096(1362)] = _0x131096(741)),
      (_0x1be58c[_0x131096(1757)] = _0x131096(1656)),
      (_0x1be58c.WordCloud = _0x131096(1092)),
      (_0x1be58c.Data = "data"),
      _0x1be58c
    );
  })({}),
  $t = (function (_0x3ff244) {
    return (
      (_0x3ff244[_0x128582(2004)] = _0x128582(1169)),
      (_0x3ff244[_0x128582(1568)] = _0x128582(996)),
      _0x3ff244
    );
  })({}),
  en = (function (_0x536363) {
    return (
      (_0x536363[_0x1723eb(1015)] = "chartStyle"),
      (_0x536363[_0x1723eb(1406)] = _0x1723eb(1765)),
      (_0x536363.Legend = _0x1723eb(1565)),
      (_0x536363.HorizontalAxis = "horizontalAxis"),
      (_0x536363.VerticalAxis = _0x1723eb(1097)),
      (_0x536363[_0x1723eb(526)] = "rightVerticalAxis"),
      (_0x536363.Series = "series"),
      (_0x536363[_0x1723eb(1538)] = _0x1723eb(905)),
      (_0x536363[_0x1723eb(1232)] = _0x1723eb(639)),
      (_0x536363[_0x1723eb(1696)] = "paretoLineSeries"),
      (_0x536363.WaterfallSeries = "waterfallSeries"),
      (_0x536363.Relation = "relation"),
      (_0x536363[_0x1723eb(513)] = _0x1723eb(1092)),
      (_0x536363[_0x1723eb(479)] = _0x1723eb(1317)),
      (_0x536363[_0x1723eb(1944)] = _0x1723eb(1394)),
      (_0x536363[_0x1723eb(1654)] = _0x1723eb(1729)),
      (_0x536363[_0x1723eb(1469)] = "lineAndArea"),
      (_0x536363[_0x1723eb(951)] = _0x1723eb(1987)),
      (_0x536363[_0x1723eb(1506)] = _0x1723eb(1080)),
      (_0x536363[_0x1723eb(839)] = "trendline"),
      (_0x536363.Candlestick = _0x1723eb(1345)),
      (_0x536363.Histogram = "histogram"),
      (_0x536363[_0x1723eb(1478)] = _0x1723eb(1136)),
      (_0x536363[_0x1723eb(1220)] = _0x1723eb(1600)),
      (_0x536363[_0x1723eb(746)] = _0x1723eb(1385)),
      (_0x536363[_0x1723eb(826)] = _0x1723eb(712)),
      _0x536363
    );
  })({});
const P = {
    Title: "title",
    Subtitle: "subtitle",
    XAxisTitle: "xAxisTitle",
    YAxisTitle: "yAxisTitle",
    RightYAxisTitle: "rightYAxisTitle",
  },
  F = { XAxis: "xAxis", YAxis: "yAxis", RightYAxis: "rightYAxis" };
function tn(_0x27c2a7) {
  switch (_0x27c2a7[_0x40126d(1201)]) {
    case "title":
      return { scope: "title", titleKey: P.Title };
    case _0x40126d(1247):
      return { scope: "title", titleKey: P.Subtitle };
    case _0x40126d(975):
      return {
        scope: _0x40126d(1172),
        axisId: F[_0x40126d(645)],
        titleKey: P[_0x40126d(1056)],
      };
    case _0x40126d(1125):
      return {
        scope: _0x40126d(1172),
        axisId: F[_0x40126d(2012)],
        titleKey: P[_0x40126d(763)],
      };
    case _0x40126d(1134):
      return {
        scope: "axisTitle",
        axisId: F[_0x40126d(1366)],
        titleKey: P[_0x40126d(1275)],
      };
    case "xAxisLabel":
    case _0x40126d(1390):
      return { scope: _0x40126d(708), axisId: F[_0x40126d(645)] };
    case _0x40126d(1900):
    case _0x40126d(671):
      return { scope: "axis", axisId: F[_0x40126d(2012)] };
    case _0x40126d(1012):
    case _0x40126d(1775):
      return { scope: _0x40126d(708), axisId: F.RightYAxis };
    case _0x40126d(1565):
      return {
        scope: "legend",
        legendIndex: _0x27c2a7[_0x40126d(1613)],
        legendName: _0x27c2a7[_0x40126d(675)],
      };
    case "mark": {
      let _0x337efa = { scope: _0x40126d(1187) };
      return (
        _0x27c2a7[_0x40126d(805)] !== undefined &&
          (_0x337efa.seriesId = _0x27c2a7.seriesId),
        _0x27c2a7[_0x40126d(1912)] !== undefined &&
          (_0x337efa[_0x40126d(1912)] = _0x27c2a7[_0x40126d(1912)]),
        _0x27c2a7[_0x40126d(879)] !== undefined &&
          (_0x337efa.dataIndex = _0x27c2a7.dataIndex),
        _0x337efa
      );
    }
    case _0x40126d(837):
      return typeof _0x27c2a7[_0x40126d(805)] == _0x40126d(2002) &&
        typeof _0x27c2a7[_0x40126d(1912)] == "number"
        ? {
            scope: "series",
            seriesId: _0x27c2a7[_0x40126d(805)],
            seriesIndex: _0x27c2a7.seriesIndex,
          }
        : undefined;
  }
}
function nn(_0x2636b1) {
  return _0x2636b1 === F[_0x423b44(645)]
    ? { tab: "style", section: _0x423b44(1952), axisId: _0x2636b1 }
    : _0x2636b1 === F[_0x423b44(1366)]
      ? { tab: _0x423b44(1169), section: _0x423b44(638), axisId: _0x2636b1 }
      : { tab: _0x423b44(1169), section: "verticalAxis", axisId: _0x2636b1 };
}
function rn(_0x501a84) {
  switch (_0x501a84) {
    case _0x7463a9(905):
      return _0x7463a9(905);
    case _0x7463a9(639):
      return _0x7463a9(639);
    case _0x7463a9(687):
      return _0x7463a9(687);
    case _0x7463a9(741):
      return _0x7463a9(741);
    case "relation":
      return "relation";
    case _0x7463a9(1092):
      return _0x7463a9(1092);
    default:
      return;
  }
}
function an(_0x1194d4) {
  switch (_0x1194d4.scope) {
    case "chartArea":
      return { tab: _0x127980(1169), section: _0x127980(998) };
    case _0x127980(1703):
      return {
        tab: _0x127980(1169),
        section: _0x127980(1765),
        titleKey: _0x1194d4[_0x127980(1880)],
      };
    case _0x127980(1172):
      return {
        tab: _0x127980(1169),
        section: _0x127980(1765),
        axisId: _0x1194d4[_0x127980(1422)],
        titleKey: _0x1194d4[_0x127980(1880)],
      };
    case _0x127980(708):
    case _0x127980(962):
    case _0x127980(528):
      return nn(_0x1194d4[_0x127980(1422)]);
    case _0x127980(1565):
      return { tab: _0x127980(1169), section: _0x127980(1565) };
    case _0x127980(1187): {
      let _0x1a12ac = _0x1194d4[_0x127980(1940)];
      if (
        (_0x1a12ac == null ? undefined : _0x1a12ac[_0x127980(1201)]) ===
        _0x127980(1645)
      )
        return {
          tab: _0x127980(1169),
          section: "series",
          seriesId: _0x1a12ac.seriesId,
        };
      if (
        (_0x1a12ac == null ? undefined : _0x1a12ac[_0x127980(1201)]) ===
        _0x127980(905)
      )
        return { tab: "style", section: "pieStyle" };
      if (
        (_0x1a12ac == null ? undefined : _0x1a12ac[_0x127980(1201)]) ===
        _0x127980(920)
      )
        return {
          tab: _0x127980(1169),
          section:
            _0x1a12ac.part === e[_0x127980(1501)][_0x127980(1046)]
              ? _0x127980(639)
              : "paretoLineSeries",
        };
      if (
        (_0x1a12ac == null ? undefined : _0x1a12ac[_0x127980(1201)]) ===
        _0x127980(710)
      )
        return {
          tab: "style",
          section: _0x127980(741),
          seriesId: _0x1a12ac.seriesId,
        };
      let _0x2af8cb = rn(_0x1194d4[_0x127980(1605)]);
      return _0x2af8cb
        ? {
            tab: _0x127980(1169),
            section: _0x2af8cb,
            ...(_0x2af8cb === "waterfallSeries"
              ? { seriesId: _0x1194d4[_0x127980(805)] }
              : {}),
          }
        : _0x1194d4[_0x127980(1605)] === _0x127980(996)
          ? { tab: _0x127980(996) }
          : _0x1194d4[_0x127980(805)]
            ? {
                tab: _0x127980(1169),
                section: _0x127980(837),
                seriesId: _0x1194d4[_0x127980(805)],
              }
            : undefined;
    }
    case "series":
      return {
        tab: _0x127980(1169),
        section: _0x127980(837),
        seriesId: _0x1194d4[_0x127980(805)],
      };
    case _0x127980(851):
    case "dataLabel":
      return _0x1194d4[_0x127980(805)]
        ? {
            tab: "style",
            section: _0x127980(837),
            seriesId: _0x1194d4[_0x127980(805)],
          }
        : undefined;
  }
}
let on = (function (_0x537cfe) {
  return (
    (_0x537cfe[(_0x537cfe[_0x4cd59a(603)] = 1)] = _0x4cd59a(603)),
    (_0x537cfe[(_0x537cfe[_0x4cd59a(1468)] = 2)] = _0x4cd59a(1468)),
    (_0x537cfe[(_0x537cfe[_0x4cd59a(1506)] = 4)] = "IndicatorLine"),
    (_0x537cfe[(_0x537cfe[_0x4cd59a(1435)] = 8)] = _0x4cd59a(1435)),
    _0x537cfe
  );
})({});
const sn = [
    [e.ChartTypeBits["Pie"], 7],
    [e.ChartTypeBits["Radar"], 1],
    [e.ChartTypeBits["WordCloud"], 15],
    [e.ChartTypeBits["Funnel"], 5],
    [e.ChartTypeBits["Relation"], 7],
    [e.ChartTypeBits["Waterfall"], 2],
    [e.ChartTypeBits["Sankey"], 15],
    [e.ChartTypeBits["Heatmap"], 3],
    [e.ChartTypeBits["Candlestick"], 6],
    [e.ChartTypeBits["Histogram"], 4],
    [e.ChartTypeBits["Treemap"], 15],
    [e.ChartTypeBits["Sunburst"], 15],
    [e.ChartTypeBits["Gauge"], 15],
    [e.ChartTypeBits["Chord"], 15],
  ],
  cn = [
    e.ChartTypeBits["Line"],
    e.ChartTypeBits["Area"],
    e.ChartTypeBits["Scatter"],
    e.ChartTypeBits["Combination"],
  ],
  ln = [
    e.ChartTypeBits["Column"],
    e.ChartTypeBits["Bar"],
    e.ChartTypeBits["Line"],
    e.ChartTypeBits["Area"],
    e.ChartTypeBits["Scatter"],
    e.ChartTypeBits["Bubble"],
    e.ChartTypeBits["Combination"],
    e.ChartTypeBits["Pie"],
    e.ChartTypeBits["Radar"],
  ],
  un = new Set([
    e.ChartTypeBits["Line"],
    e.ChartTypeBits["Column"],
    e.ChartTypeBits["ColumnStacked"],
    e.ChartTypeBits["ColumnPercentStacked"],
    e.ChartTypeBits["Bar"],
    e.ChartTypeBits["BarStacked"],
    e.ChartTypeBits["BarPercentStacked"],
    e.ChartTypeBits["Area"],
    e.ChartTypeBits["AreaStacked"],
    e.ChartTypeBits["AreaPercentStacked"],
    e.ChartTypeBits["Pie"],
    e.ChartTypeBits["Doughnut"],
    e.ChartTypeBits["Combination"],
    e.ChartTypeBits["Funnel"],
    e.ChartTypeBits["Waterfall"],
    e.ChartTypeBits["Boxplot"],
    e.ChartTypeBits["Scatter"],
  ]);
function dn(_0x5123ce) {
  return un[_0x5dd8af(863)](_0x5123ce);
}
function fn(_0x38627e, _0x5f545d) {
  return (
    _0x38627e !== e[_0x3092ae(653)].None &&
    sn.every(
      ([_0xc89c6c, _0x24f8af]) =>
        !e[_0x3092ae(1226)][_0x3092ae(1429)](_0x38627e, _0xc89c6c) ||
        e.chartBitsUtils[_0x3092ae(1225)](_0x24f8af, _0x5f545d) === _0x24f8af,
    )
  );
}
function pn(_0x4bc20a) {
  return (
    _0x4bc20a !== e[_0x4b1715(653)].None &&
    cn[_0x4b1715(1399)]((_0x3d4f0f) =>
      e[_0x4b1715(1226)][_0x4b1715(1429)](_0x4bc20a, _0x3d4f0f),
    )
  );
}
function mn(_0x41f439) {
  return (
    _0x41f439 !== e.ChartTypeBits[_0x2d5f82(1859)] &&
    ln[_0x2d5f82(1399)]((_0x121f3b) =>
      e[_0x2d5f82(1226)].baseOn(_0x41f439, _0x121f3b),
    )
  );
}
function hn(_0x4ecab8) {
  return _0x4ecab8 != null && typeof _0x4ecab8 != _0x51188d(1053);
}
function I(_0x273ec6) {
  let _0x1b76ce = (0, r.useId)(),
    _0xdab4a7 = hn(_0x273ec6[_0x58df23(1899)]),
    _0x2146f8 = hn(_0x273ec6[_0x58df23(764)]),
    _0x3f5cec = _0xdab4a7 ? _0x1b76ce + _0x58df23(1528) : undefined,
    _0x52a42e = _0x2146f8 ? _0x1b76ce + _0x58df23(1803) : undefined;
  return (0, i.jsxs)("fieldset", {
    "aria-describedby":
      [_0x3f5cec, _0x52a42e]
        [_0x58df23(1573)](Boolean)
        [_0x58df23(766)]("\x20") || undefined,
    "aria-invalid": _0x2146f8 || undefined,
    className: "univer-m-0\x20univer-min-w-0\x20univer-border-0\x20univer-p-0",
    disabled: _0x273ec6.disabled,
    children: [
      (0, i[_0x58df23(922)])("legend", {
        className: _0x58df23(1357),
        children: _0x273ec6.label,
      }),
      _0x273ec6[_0x58df23(1492)],
      _0xdab4a7 &&
        (0, i[_0x58df23(922)])(_0x58df23(1904), {
          id: _0x3f5cec,
          className: _0x58df23(1523),
          children: _0x273ec6[_0x58df23(1899)],
        }),
      _0x2146f8 &&
        (0, i[_0x58df23(922)])(_0x58df23(1904), {
          id: _0x52a42e,
          className: _0x58df23(1224),
          children: _0x273ec6[_0x58df23(764)],
        }),
    ],
  });
}
function gn(_0x26353c) {
  let _0x52bb4f =
    _0x26353c.alignLabel !== undefined &&
    _0x26353c[_0x361bb4(1996)] !== undefined &&
    _0x26353c.value[_0x361bb4(1358)] !== undefined;
  return (0, i[_0x361bb4(922)])(I, {
    disabled: _0x26353c.disabled,
    error: _0x26353c[_0x361bb4(764)],
    help: _0x26353c[_0x361bb4(1899)],
    label: _0x26353c.label,
    children: (0, i[_0x361bb4(922)])(it, {
      align: _0x26353c[_0x361bb4(1324)][_0x361bb4(1358)],
      alignControl: _0x52bb4f,
      alignOptions: _0x26353c[_0x361bb4(1996)],
      bold: _0x26353c.value["bold"],
      color:
        _0x26353c[_0x361bb4(1324)][_0x361bb4(1393)] ??
        _0x26353c[_0x361bb4(557)],
      colorResetLabel: _0x26353c[_0x361bb4(1690)],
      fontSize: _0x26353c.value[_0x361bb4(1003)] ?? undefined,
      fontSizeEmptyLabel: _0x26353c[_0x361bb4(1088)],
      fontSizeIsDefault: _0x26353c[_0x361bb4(1324)][_0x361bb4(1003)] === null,
      fontSizeOptions: _0x26353c[_0x361bb4(1008)],
      italic: _0x26353c.value[_0x361bb4(1796)],
      onChange: (_0x401f4c, _0x1c536c) => {
        const _0xe21641 = _0x361bb4;
        (_0x401f4c === _0xe21641(1358) &&
          _0x26353c.onChange(_0xe21641(1358), _0x1c536c),
          _0x401f4c === _0xe21641(1642) &&
            _0x26353c.onChange("bold", _0x1c536c),
          _0x401f4c === "color" &&
            _0x26353c[_0xe21641(507)](_0xe21641(1393), _0x1c536c),
          _0x401f4c === "fontSize" &&
            _0x26353c.onChange(_0xe21641(1003), _0x1c536c),
          _0x401f4c === "italic" &&
            _0x26353c[_0xe21641(507)](_0xe21641(1796), _0x1c536c));
      },
      onColorReset: () => _0x26353c.onChange(_0x361bb4(1393), null),
      onFontSizeReset: () => _0x26353c.onChange("fontSize", null),
    }),
  });
}
function L(_0xb111be) {
  let _0x184cf5 =
    Gt().adaptiveSize ?? (0, e.getChartRuntimeAdaptiveSize)(undefined);
  return (0, r[_0x2292c5(1687)])(
    () => _0x184cf5[_0x2292c5(1684)](_0xb111be),
    [_0x184cf5, _0xb111be],
  );
}
const R = {
  bold: e.defaultChartConfig["textStyle"].bold,
  color: e.defaultChartConfig["textStyle"].color,
  fontSize: null,
  italic: e.defaultChartConfig["textStyle"].italic,
};
function z(_0x5f32ce, _0x516a38) {
  return {
    bold:
      (_0x5f32ce == null ? undefined : _0x5f32ce.bold) ??
      _0x516a38[_0x14894b(1642)],
    color:
      (_0x5f32ce == null ? undefined : _0x5f32ce[_0x14894b(1393)]) ??
      _0x516a38[_0x14894b(1393)],
    fontSize:
      (_0x5f32ce == null ? undefined : _0x5f32ce[_0x14894b(1003)]) ?? null,
    italic:
      (_0x5f32ce == null ? undefined : _0x5f32ce.italic) ??
      _0x516a38[_0x14894b(1796)],
    ...(_0x516a38[_0x14894b(1358)] === undefined
      ? {}
      : {
          align:
            (_0x5f32ce == null ? undefined : _0x5f32ce[_0x14894b(1358)]) ??
            _0x516a38[_0x14894b(1358)],
        }),
  };
}
function B(_0x25a239) {
  let { align: _0x397639, ..._0x563e5d } = _0x25a239;
  return _0x563e5d;
}
function V(_0x3fcd33) {
  let _0x11dc9f = (0, o[_0x1858b4(858)])(a[_0x1858b4(1419)]),
    _0x21b533 = L($e);
  return (0, i[_0x1858b4(922)])(gn, {
    alignLabel: _0x3fcd33[_0x1858b4(1368)],
    alignOptions: _0x3fcd33[_0x1858b4(1996)],
    boldLabel: _0x11dc9f.t("chart-ui.common.bold"),
    colorEmptyLabel: _0x11dc9f.t("chart-ui.editor.defaultColor"),
    colorLabel: _0x11dc9f.t(_0x1858b4(677)),
    colorPickerFallbackValue: _0x3fcd33[_0x1858b4(557)],
    colorResetLabel: _0x11dc9f.t(_0x1858b4(819)),
    fontSizeEmptyLabel: _0x11dc9f.t("chart-ui.common.default"),
    fontSizeLabel: _0x11dc9f.t(_0x1858b4(2018)),
    fontSizeOptions: _0x21b533,
    italicLabel: _0x11dc9f.t(_0x1858b4(1314)),
    label: _0x3fcd33[_0x1858b4(1614)],
    value: _0x3fcd33.value,
    onChange: (_0x3d4206, _0x4eff52) =>
      _0x3fcd33[_0x1858b4(507)]({ [_0x3d4206]: _0x4eff52 }),
  });
}
function H(_0x5373b5) {
  let _0x3b74d9 = _0x5373b5[_0x150262(1467)]
    ? (0, i[_0x150262(922)])(_0x150262(1904), {
        className: _0x150262(911),
        children: _0x5373b5.label,
      })
    : _0x5373b5.label;
  return (0, i[_0x150262(922)])(I, {
    disabled: _0x5373b5[_0x150262(1937)],
    error: _0x5373b5[_0x150262(764)],
    help: _0x5373b5.help,
    label: _0x3b74d9,
    children: (0, i[_0x150262(922)])(t[_0x150262(1138)], {
      checked: _0x5373b5[_0x150262(725)],
      disabled: _0x5373b5[_0x150262(1937)],
      onChange: (_0x4b06b0) => _0x5373b5.onChange(!!_0x4b06b0),
      children: (0, i.jsx)(_0x150262(1904), {
        className: _0x5373b5.inlineLabel ? undefined : "univer-sr-only",
        children: _0x5373b5.label,
      }),
    }),
  });
}
const _n = [
    {
      value: e.ChartBorderDashType["Solid"],
      labelKey: "chart-ui.series.solid",
    },
    {
      value: e.ChartBorderDashType["Dashed"],
      labelKey: "chart-ui.common.dashed",
    },
    {
      value: e.ChartBorderDashType["Dotted"],
      labelKey: "chart-ui.common.dotted",
    },
  ],
  vn = [
    { value: e.LinePointShape["Circle"], labelKey: "chart-ui.common.circle" },
    { value: e.LinePointShape["Square"], labelKey: "chart-ui.series.square" },
    {
      value: e.LinePointShape["Triangle"],
      labelKey: "chart-ui.common.triangle",
    },
    { value: e.LinePointShape["Diamond"], labelKey: "chart-ui.common.diamond" },
    { value: e.LinePointShape["Rect"], labelKey: "chart-ui.series.rect" },
    {
      value: e.LinePointShape["RoundRect"],
      labelKey: "chart-ui.series.roundRect",
    },
    { value: e.LinePointShape["Pin"], labelKey: "chart-ui.series.pin" },
    { value: e.LinePointShape["Arrow"], labelKey: "chart-ui.common.arrow" },
    { value: e.LinePointShape["None"], labelKey: "chart-ui.common.none" },
    {
      value: e.LinePointShape["EmptyCircle"],
      labelKey: "chart-ui.series.emptyCircle",
    },
    {
      value: e.LinePointShape["EmptySquare"],
      labelKey: "chart-ui.series.emptySquare",
    },
    {
      value: e.LinePointShape["EmptyTriangle"],
      labelKey: "chart-ui.series.emptyTriangle",
    },
    {
      value: e.LinePointShape["EmptyDiamond"],
      labelKey: "chart-ui.series.emptyDiamond",
    },
    {
      value: e.LinePointShape["EmptyRect"],
      labelKey: "chart-ui.series.emptyRect",
    },
    {
      value: e.LinePointShape["EmptyRoundRect"],
      labelKey: "chart-ui.series.emptyRoundRect",
    },
    {
      value: e.LinePointShape["EmptyPin"],
      labelKey: "chart-ui.series.emptyPin",
    },
    {
      value: e.LinePointShape["EmptyArrow"],
      labelKey: "chart-ui.series.emptyArrow",
    },
  ],
  yn = [-90, -60, -45, -30, 0, 30, 45, 60, 90],
  bn = [1, 2, 3],
  xn = [2, 3, 4, 5, 6],
  Sn = "__default__",
  U = { max: 1, min: 0, step: 0.1 },
  Cn = [0, 0.25, e.defaultChartConfig["pie"].doughnutHole, 0.75];
function W(_0x19d929) {
  return String(_0x19d929 ?? _0x2dccd4(1741));
}
function G(_0x5b2a78) {
  return _0x5b2a78 === _0x153de1(1741) ? null : Number(_0x5b2a78);
}
function K(_0x1964bd, _0x59f151) {
  return [{ label: _0x1964bd, value: Sn }, ..._0x59f151];
}
function wn(_0x14139c) {
  return K(
    _0x14139c,
    yn[_0x410397(1285)]((_0x14f099) => ({
      label: _0x14f099 + "°",
      value: String(_0x14f099),
    })),
  );
}
function Tn() {
  return xn.map((_0x2f3988) => ({
    label: String(_0x2f3988),
    value: String(_0x2f3988),
  }));
}
function En(_0x244694 = bn) {
  return _0x244694[_0x3d2bc0(1285)]((_0x2d4ee0) => ({
    label: _0x2d4ee0 + "px",
    value: String(_0x2d4ee0),
  }));
}
const Dn = {
  color: e.defaultChartConfig["textStyle"].color,
  dateAxisRotation: e.defaultChartConfig["axis"].dateAxisRotate,
  gridlineWidth: 1,
  labelFontSize: e.defaultChartConfig["textStyle"].fontSize,
  labelRotation: 0,
  labelVisible: e.defaultChartConfig["axis"].labelVisible,
  primaryGridLineVisible: false,
  reverse: e.defaultChartConfig["axis"].reverse,
  secondaryGridLineVisible: true,
  tickLength: Sn,
  tickPosition: e.ChartAxisTickPosition["Outside"],
  tickVisible: false,
  tickWidth: Sn,
};
function q(_0x1aef6b) {
  let [_0x15f8c9, _0x303fed] = N("axes"),
    _0xc63d9f = (_0x15f8c9 == null ? undefined : _0x15f8c9[_0x1aef6b]) ?? {},
    _0x8d42c1 = Gt();
  return {
    patch: (_0x312fee) =>
      _0x303fed({ ..._0x15f8c9, [_0x1aef6b]: { ..._0xc63d9f, ..._0x312fee } }),
    runtimeAxis: zt(
      _0x8d42c1[_0x2916df(714)],
      _0x8d42c1[_0x2916df(1922)],
      _0x1aef6b,
    ),
    style: _0xc63d9f,
  };
}
function On(_0x48aa25) {
  let _0x545687 = (0, o[_0xdff2cd(858)])(a.LocaleService),
    {
      patch: _0x36d77a,
      runtimeAxis: _0x404bc8,
      style: _0x4c49e8,
    } = q(_0x48aa25[_0xdff2cd(708)]);
  if (!_0x404bc8) return null;
  let _0x42ca2b = _0x4c49e8[_0xdff2cd(1180)] ?? {};
  return (0, i[_0xdff2cd(922)])(H, {
    inlineLabel: true,
    checked:
      _0x42ca2b[_0xdff2cd(1755)] ??
      _0x404bc8[_0xdff2cd(1906)] === e[_0xdff2cd(1483)][_0xdff2cd(1543)],
    label: _0x545687.t(_0xdff2cd(1459)),
    onChange: (_0x4b3191) =>
      _0x36d77a({ line: { ..._0x42ca2b, visible: _0x4b3191 } }),
  });
}
function kn(_0x4b9e2d) {
  let _0x577bb0 = (0, o.useDependency)(a.LocaleService),
    {
      patch: _0x4c1e7e,
      runtimeAxis: _0x10b695,
      style: _0xc54527,
    } = q(_0x4b9e2d[_0x350a78(708)]);
  if (!_0x10b695) return null;
  let _0x2304c5 = _0xc54527[_0x350a78(1614)] ?? {};
  return (0, i[_0x350a78(922)])(H, {
    inlineLabel: true,
    checked:
      _0x2304c5[_0x350a78(1755)] ?? _0x4b9e2d.defaultValues[_0x350a78(979)],
    label: _0x577bb0.t(_0x350a78(498)),
    onChange: (_0x5e751c) =>
      _0x4c1e7e({ label: { ..._0x2304c5, visible: _0x5e751c } }),
  });
}
function An(_0x1566d8) {
  let _0x379a61 = (0, o.useDependency)(a[_0xe3681c(1419)]),
    {
      patch: _0x265d62,
      runtimeAxis: _0x5c2af8,
      style: _0x5e8030,
    } = q(_0x1566d8[_0xe3681c(708)]);
  return !_0x5c2af8 || _0x1566d8[_0xe3681c(708)] === _0xe3681c(1872)
    ? null
    : (0, i[_0xe3681c(922)])(H, {
        inlineLabel: true,
        checked: _0x5e8030.reverse ?? _0x1566d8[_0xe3681c(801)][_0xe3681c(622)],
        label: _0x379a61.t("chart-ui.axis.reverse"),
        onChange: (_0x255089) => _0x265d62({ reverse: _0x255089 }),
      });
}
function jn(_0x20037b) {
  let _0x236467 = (0, o[_0x6203df(858)])(a[_0x6203df(1419)]),
    {
      patch: _0xc94320,
      runtimeAxis: _0x39f7f7,
      style: _0x5dddd0,
    } = q(_0x20037b[_0x6203df(708)]);
  return _0x39f7f7
    ? (0, i[_0x6203df(1557)])(O, {
        children: [
          (0, i[_0x6203df(922)])(k, {
            label: _0x236467.t(_0x6203df(652)),
            value: _0x5dddd0[_0x6203df(1337)] ?? null,
            onChange: (_0x349b2e) =>
              _0xc94320(
                _0x349b2e !== null &&
                  _0x5dddd0.max != null &&
                  _0x349b2e >= _0x5dddd0[_0x6203df(628)]
                  ? { min: _0x349b2e, max: null }
                  : { min: _0x349b2e },
              ),
          }),
          (0, i[_0x6203df(922)])(k, {
            label: _0x236467.t("chart-ui.common.maximum"),
            value: _0x5dddd0[_0x6203df(628)] ?? null,
            onChange: (_0x1406ef) =>
              _0xc94320(
                _0x1406ef !== null &&
                  _0x5dddd0[_0x6203df(1337)] != null &&
                  _0x1406ef <= _0x5dddd0[_0x6203df(1337)]
                  ? { min: null, max: _0x1406ef }
                  : { max: _0x1406ef },
              ),
          }),
        ],
      })
    : null;
}
function Mn(_0x6a0678) {
  let _0x1b61cf = (0, o[_0x2b64c1(858)])(a[_0x2b64c1(1419)]),
    {
      patch: _0xfec98,
      runtimeAxis: _0x2c51ef,
      style: _0x16ebee,
    } = q(_0x6a0678.axis);
  return _0x2c51ef
    ? (0, i[_0x2b64c1(922)])(j, {
        commitMode: _0x2b64c1(939),
        label: _0x1b61cf.t("chart-ui.common.numberFormat"),
        value: _0x16ebee.format ?? "",
        onChange: (_0x30abda) => _0xfec98({ format: _0x30abda }),
      })
    : null;
}
function Nn(_0x19a7c7) {
  let _0x3d8295 = (0, o[_0x27885e(858)])(a[_0x27885e(1419)]),
    {
      patch: _0xfc63ac,
      runtimeAxis: _0x3f83ac,
      style: _0x256cf4,
    } = q(_0x19a7c7[_0x27885e(708)]);
  if (!_0x3f83ac) return null;
  let _0x4b7c1a = _0x256cf4[_0x27885e(1614)] ?? {};
  return (0, i[_0x27885e(1557)])(O, {
    children: [
      (0, i[_0x27885e(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        label: _0x3d8295.t(_0x27885e(1686)),
        value: _0x4b7c1a[_0x27885e(902)] ?? null,
        onChange: (_0x20f17f) =>
          _0xfc63ac({ label: { ..._0x4b7c1a, rotate: _0x20f17f } }),
      }),
      (0, i[_0x27885e(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        emptyLabel: _0x3d8295.t(_0x27885e(1990)),
        label: _0x3d8295.t("chart-ui.editor.fontSize"),
        min: 8,
        value: _0x4b7c1a[_0x27885e(1003)] ?? null,
        onChange: (_0x748fd3) =>
          _0xfc63ac({ label: { ..._0x4b7c1a, fontSize: _0x748fd3 } }),
      }),
    ],
  });
}
function Pn(_0x5b7212) {
  let _0x51ec65 = (0, o[_0x5866ed(858)])(a[_0x5866ed(1419)]),
    {
      patch: _0x146574,
      runtimeAxis: _0x175bfe,
      style: _0x3c066a,
    } = q(_0x5b7212.axis);
  if (!_0x175bfe) return null;
  let _0x2f99e6 = _0x3c066a.tick ?? {};
  return (0, i[_0x5866ed(922)])(H, {
    inlineLabel: true,
    checked:
      _0x2f99e6[_0x5866ed(1755)] ?? _0x5b7212[_0x5866ed(801)].tickVisible,
    label: _0x51ec65.t(_0x5866ed(1281)),
    onChange: (_0x36c90b) =>
      _0x146574({ tick: { ..._0x2f99e6, visible: _0x36c90b } }),
  });
}
function Fn(_0x4463d8) {
  let _0x3c25cf = (0, o[_0x160202(858)])(a[_0x160202(1419)]),
    {
      patch: _0x5d7144,
      runtimeAxis: _0x224514,
      style: _0x1fd39c,
    } = q(_0x4463d8[_0x160202(708)]);
  if (!_0x224514) return null;
  let _0xcef358 = _0x1fd39c[_0x160202(962)] ?? {};
  return (0, i[_0x160202(922)])(H, {
    inlineLabel: true,
    checked:
      _0xcef358[_0x160202(1755)] ??
      (_0x224514[_0x160202(1906)] === e.IRuntimeAxisPriority[_0x160202(993)]
        ? _0x4463d8[_0x160202(801)][_0x160202(1794)]
        : _0x4463d8[_0x160202(801)][_0x160202(854)]),
    label: _0x4463d8.label ?? _0x3c25cf.t("chart-ui.axis.gridlineVisible"),
    onChange: (_0x5b14f0) =>
      _0x5d7144({ gridLine: { ..._0xcef358, visible: _0x5b14f0 } }),
  });
}
function In(_0x2dcd20) {
  let _0x2b2aab = (0, o[_0x221a7d(858)])(a.LocaleService),
    {
      patch: _0x352623,
      runtimeAxis: _0x15c3f3,
      style: _0x5b0358,
    } = q(_0x2dcd20[_0x221a7d(708)]);
  if (!_0x15c3f3) return null;
  let _0x1cb108 = _0x5b0358[_0x221a7d(962)] ?? {},
    _0x1e88bd = _0x2dcd20[_0x221a7d(1614)] ?? _0x2b2aab.t(_0x221a7d(1405));
  return (0, i[_0x221a7d(922)])(k, {
    allowClear: true,
    allowEmpty: true,
    emptyLabel: _0x2b2aab.t(_0x221a7d(1990)),
    label: _0x1e88bd,
    min: 0,
    value: _0x1cb108[_0x221a7d(989)] ?? null,
    onChange: (_0x5b1d87) =>
      _0x352623({ gridLine: { ..._0x1cb108, width: _0x5b1d87 } }),
  });
}
function Ln(_0x33e01c) {
  let _0x318b9f = (0, o[_0x5ab3cb(858)])(a.LocaleService),
    [_0x5950ad] = N("chartType", e[_0x5ab3cb(653)][_0x5ab3cb(1859)]),
    [_0x5e12e0, _0x3d50d1] = N(_0x5ab3cb(1653)),
    [_0x173fe3, _0x3cf6c6] = N(_0x5ab3cb(714)),
    _0x50577b =
      (_0x173fe3 == null ? undefined : _0x173fe3[_0x33e01c[_0x5ab3cb(708)]]) ??
      {},
    _0x1d177b = _0x50577b.line ?? {},
    _0x206eae = _0x50577b[_0x5ab3cb(1614)] ?? {},
    _0x5baaba = z(_0x206eae, R),
    _0x3e931a = Gt(),
    _0x1dc500 = zt(
      _0x3e931a[_0x5ab3cb(714)],
      _0x3e931a.direction,
      _0x33e01c[_0x5ab3cb(708)],
    ),
    _0x10890d =
      _0x1d177b[_0x5ab3cb(1755)] ??
      (_0x1dc500 == null ? undefined : _0x1dc500.priority) ===
        e.IRuntimeAxisPriority[_0x5ab3cb(1543)],
    _0x260ab9 = _0x206eae.visible ?? _0x33e01c.defaultValues["labelVisible"],
    _0x492b66 =
      (_0x1dc500 == null ? undefined : _0x1dc500[_0x5ab3cb(483)]) ===
      e[_0x5ab3cb(514)].Numeric,
    _0x10e36d =
      _0x33e01c.axis === "x" &&
      _0x5950ad !== e.ChartTypeBits[_0x5ab3cb(1546)] &&
      _0x5950ad !== e.ChartTypeBits[_0x5ab3cb(1766)],
    _0x167dbd = W(_0x206eae[_0x5ab3cb(902)]),
    _0x11dc58 = _0x33e01c[_0x5ab3cb(1902)] ?? At;
  if (!_0x1dc500) return null;
  let _0x1ef380 = (_0x35b2af) =>
    _0x3cf6c6({
      ..._0x173fe3,
      [_0x33e01c[_0x5ab3cb(708)]]: { ..._0x50577b, ..._0x35b2af },
    });
  return (0, i[_0x5ab3cb(1557)])("div", {
    className: _0x5ab3cb(1556),
    children: [
      (0, i[_0x5ab3cb(922)])(H, {
        inlineLabel: true,
        checked: _0x10890d,
        label: _0x318b9f.t(_0x5ab3cb(1459)),
        onChange: (_0x3c225d) =>
          _0x1ef380({ line: { ..._0x1d177b, visible: _0x3c225d } }),
      }),
      _0x10890d &&
        (0, i[_0x5ab3cb(1557)])(O, {
          children: [
            (0, i[_0x5ab3cb(922)])(M, {
              emptyLabel: _0x318b9f.t(_0x5ab3cb(819)),
              label: _0x318b9f.t(_0x5ab3cb(1320)),
              pickerFallbackValue: _0x33e01c[_0x5ab3cb(801)][_0x5ab3cb(1393)],
              resetLabel: _0x318b9f.t(_0x5ab3cb(819)),
              value: _0x1d177b[_0x5ab3cb(1393)] ?? null,
              onChange: (_0x424b64) =>
                _0x1ef380({ line: { ..._0x1d177b, color: _0x424b64 } }),
            }),
            (0, i[_0x5ab3cb(922)])(k, {
              label: _0x318b9f.t(_0x5ab3cb(1927)),
              min: 0,
              value: _0x1d177b[_0x5ab3cb(989)] ?? null,
              onChange: (_0x38850a) =>
                _0x1ef380({ line: { ..._0x1d177b, width: _0x38850a } }),
            }),
          ],
        }),
      (0, i[_0x5ab3cb(922)])(H, {
        inlineLabel: true,
        checked: _0x260ab9,
        label: _0x318b9f.t("chart-ui.common.axisLabels"),
        onChange: (_0x27c411) =>
          _0x1ef380({ label: { ..._0x206eae, visible: _0x27c411 } }),
      }),
      (0, i.jsx)(A, {
        label: _0x318b9f.t("chart-ui.axis.labelRotation"),
        options: wn(_0x318b9f.t(_0x5ab3cb(1990))),
        value: _0x167dbd,
        onChange: (_0x48ac61) =>
          _0x1ef380({ label: { ..._0x206eae, rotate: G(_0x48ac61) } }),
      }),
      (0, i[_0x5ab3cb(922)])(V, {
        colorPickerFallbackValue: _0x33e01c.defaultValues[_0x5ab3cb(1393)],
        label: _0x318b9f.t(_0x5ab3cb(852)),
        value: _0x5baaba,
        onChange: (_0x57eb0c) =>
          _0x1ef380({ label: { ..._0x206eae, ...B(_0x57eb0c) } }),
      }),
      _0x10e36d &&
        (0, i[_0x5ab3cb(922)])(H, {
          inlineLabel: true,
          checked: !!(_0x5e12e0 != null && _0x5e12e0[_0x5ab3cb(504)]),
          label: _0x318b9f.t("chart-ui.axis.useDateAxis"),
          onChange: (_0x3ba803) =>
            _0x3d50d1({ ..._0x5e12e0, useDateAxis: _0x3ba803 }),
        }),
      _0x33e01c[_0x5ab3cb(708)] !== _0x5ab3cb(1872) &&
        !_0x492b66 &&
        (0, i[_0x5ab3cb(922)])(H, {
          inlineLabel: true,
          checked: _0x50577b.reverse ?? _0x33e01c[_0x5ab3cb(801)].reverse,
          label: _0x318b9f.t(_0x5ab3cb(1726)),
          onChange: (_0x11b186) => _0x1ef380({ reverse: _0x11b186 }),
        }),
      _0x492b66 &&
        (0, i[_0x5ab3cb(1557)])(O, {
          children: [
            (0, i[_0x5ab3cb(922)])(k, {
              label: _0x318b9f.t(_0x5ab3cb(652)),
              value: _0x50577b[_0x5ab3cb(1337)] ?? null,
              onChange: (_0x5af438) =>
                _0x1ef380(
                  _0x5af438 !== null &&
                    _0x50577b[_0x5ab3cb(628)] != null &&
                    _0x5af438 >= _0x50577b[_0x5ab3cb(628)]
                    ? { min: _0x5af438, max: null }
                    : { min: _0x5af438 },
                ),
            }),
            (0, i[_0x5ab3cb(922)])(k, {
              label: _0x318b9f.t(_0x5ab3cb(536)),
              value: _0x50577b[_0x5ab3cb(628)] ?? null,
              onChange: (_0x65b9e) =>
                _0x1ef380(
                  _0x65b9e !== null &&
                    _0x50577b[_0x5ab3cb(1337)] != null &&
                    _0x65b9e <= _0x50577b[_0x5ab3cb(1337)]
                    ? { min: null, max: _0x65b9e }
                    : { max: _0x65b9e },
                ),
            }),
          ],
        }),
      (0, i.jsx)(_0x11dc58, {
        label: _0x318b9f.t(_0x5ab3cb(587)),
        value: _0x50577b[_0x5ab3cb(1875)],
        onChange: (_0x98f604) => _0x1ef380({ format: _0x98f604 }),
      }),
    ],
  });
}
function Rn(_0x2fe1bb) {
  let _0x54fe8c = (0, o[_0x28ab99(858)])(a.LocaleService),
    [_0x48b5ca, _0x3a9cae] = N("axes"),
    _0x41540b =
      (_0x48b5ca == null ? undefined : _0x48b5ca[_0x2fe1bb[_0x28ab99(708)]]) ??
      {},
    _0x5903d0 = _0x41540b[_0x28ab99(962)] ?? {},
    _0x3a9b80 = _0x41540b[_0x28ab99(528)] ?? {},
    _0x58135b = Gt(),
    _0x308bc4 = zt(
      _0x58135b[_0x28ab99(714)],
      _0x58135b[_0x28ab99(1922)],
      _0x2fe1bb.axis,
    ),
    _0x546c46 =
      _0x5903d0[_0x28ab99(1755)] ??
      ((_0x308bc4 == null ? undefined : _0x308bc4[_0x28ab99(1906)]) ===
      e[_0x28ab99(1483)][_0x28ab99(993)]
        ? _0x2fe1bb[_0x28ab99(801)][_0x28ab99(1794)]
        : _0x2fe1bb[_0x28ab99(801)][_0x28ab99(854)]),
    _0x4320cc =
      _0x3a9b80[_0x28ab99(1755)] ?? _0x2fe1bb[_0x28ab99(801)].tickVisible,
    _0x4c87de = L(bn),
    _0x5e8c32 = L(qe),
    _0x3c344c = L(Je),
    _0x29083e = (_0x755da2) =>
      _0x3a9cae({
        ..._0x48b5ca,
        [_0x2fe1bb[_0x28ab99(708)]]: { ..._0x41540b, ..._0x755da2 },
      });
  return (0, i[_0x28ab99(1557)])("div", {
    className: _0x28ab99(1556),
    children: [
      (0, i[_0x28ab99(922)])(H, {
        inlineLabel: true,
        checked: _0x546c46,
        label: _0x54fe8c.t(_0x28ab99(1545)),
        onChange: (_0x6ae97c) =>
          _0x29083e({ gridLine: { ..._0x5903d0, visible: _0x6ae97c } }),
      }),
      _0x546c46 &&
        (0, i.jsxs)(O, {
          children: [
            (0, i.jsx)(M, {
              emptyLabel: _0x54fe8c.t(_0x28ab99(819)),
              label: _0x54fe8c.t(_0x28ab99(1457)),
              pickerFallbackValue: _0x2fe1bb[_0x28ab99(801)][_0x28ab99(1393)],
              resetLabel: _0x54fe8c.t(_0x28ab99(819)),
              value: _0x5903d0[_0x28ab99(1393)] ?? null,
              onChange: (_0x3cd0c2) =>
                _0x29083e({ gridLine: { ..._0x5903d0, color: _0x3cd0c2 } }),
            }),
            (0, i[_0x28ab99(922)])(A, {
              label: _0x54fe8c.t(_0x28ab99(1405)),
              options: K(_0x54fe8c.t("chart-ui.common.default"), En(_0x4c87de)),
              value: W(_0x5903d0[_0x28ab99(989)]),
              onChange: (_0x393bf8) =>
                _0x29083e({ gridLine: { ..._0x5903d0, width: G(_0x393bf8) } }),
            }),
          ],
        }),
      (0, i[_0x28ab99(922)])(H, {
        inlineLabel: true,
        checked: _0x4320cc,
        label: _0x54fe8c.t(_0x28ab99(1281)),
        onChange: (_0x40f898) =>
          _0x29083e({ tick: { ..._0x3a9b80, visible: _0x40f898 } }),
      }),
      (0, i[_0x28ab99(1557)])(O, {
        children: [
          (0, i.jsx)(A, {
            label: _0x54fe8c.t(_0x28ab99(1158)),
            options: [
              {
                value: e[_0x28ab99(1037)].Inside,
                label: _0x54fe8c.t(_0x28ab99(2031)),
              },
              {
                value: e[_0x28ab99(1037)][_0x28ab99(1150)],
                label: _0x54fe8c.t(_0x28ab99(1643)),
              },
            ],
            value:
              _0x3a9b80[_0x28ab99(1712)] ??
              _0x2fe1bb[_0x28ab99(801)][_0x28ab99(554)],
            onChange: (_0xe86525) =>
              _0x29083e({ tick: { ..._0x3a9b80, position: _0xe86525 } }),
          }),
          (0, i[_0x28ab99(922)])(A, {
            label: _0x54fe8c.t(_0x28ab99(556)),
            options: K(_0x54fe8c.t(_0x28ab99(1990)), Xe(_0x5e8c32)),
            value: W(_0x3a9b80[_0x28ab99(1579)]),
            onChange: (_0x1b32c2) =>
              _0x29083e({ tick: { ..._0x3a9b80, length: G(_0x1b32c2) } }),
          }),
        ],
      }),
      (0, i[_0x28ab99(1557)])(O, {
        children: [
          (0, i[_0x28ab99(922)])(A, {
            label: _0x54fe8c.t(_0x28ab99(686)),
            options: K(_0x54fe8c.t(_0x28ab99(1990)), Xe(_0x3c344c)),
            value: W(_0x3a9b80[_0x28ab99(989)]),
            onChange: (_0x1d9925) =>
              _0x29083e({ tick: { ..._0x3a9b80, width: G(_0x1d9925) } }),
          }),
          (0, i[_0x28ab99(922)])(M, {
            emptyLabel: _0x54fe8c.t("chart-ui.editor.defaultColor"),
            label: _0x54fe8c.t(_0x28ab99(1804)),
            pickerFallbackValue: _0x2fe1bb.defaultValues[_0x28ab99(1393)],
            resetLabel: _0x54fe8c.t("chart-ui.editor.defaultColor"),
            value: _0x3a9b80[_0x28ab99(1393)] ?? null,
            onChange: (_0x2e0b04) =>
              _0x29083e({ tick: { ..._0x3a9b80, color: _0x2e0b04 } }),
          }),
        ],
      }),
    ],
  });
}
function zn(_0x1d4a80) {
  let _0x5f1a60 = (0, o[_0x40f57d(858)])(a[_0x40f57d(1419)]),
    _0x24a804 = Gt(),
    [_0x378b68, _0x1e949a] = (0, r[_0x40f57d(1825)])("x"),
    _0x368783 = [
      { value: "x", label: _0x5f1a60.t("chart-ui.common.horizontalAxis") },
      { value: "y", label: _0x5f1a60.t("chart-ui.common.verticalAxis") },
      ...(zt(
        _0x24a804[_0x40f57d(714)],
        _0x24a804[_0x40f57d(1922)],
        _0x40f57d(1872),
      ) === undefined
        ? []
        : [{ value: _0x40f57d(1872), label: _0x5f1a60.t(_0x40f57d(1246)) }]),
    ],
    _0xeab074 = _0x368783[_0x40f57d(1399)](
      (_0x405a8e) => _0x405a8e[_0x40f57d(1324)] === _0x378b68,
    )
      ? _0x378b68
      : "x";
  return (0, i[_0x40f57d(1557)])(_0x40f57d(1998), {
    className: _0x40f57d(1556),
    children: [
      (0, i.jsx)(A, {
        label: _0x5f1a60.t(_0x40f57d(1032)),
        options: _0x368783,
        value: _0xeab074,
        onChange: _0x1e949a,
      }),
      (0, i[_0x40f57d(922)])(Rn, {
        axis: _0xeab074,
        defaultValues: _0x1d4a80[_0x40f57d(801)],
      }),
    ],
  });
}
const Bn = {
  indicatorLabelBackground: e.defaultChartConfig["tooltipAxisLabelBackground"],
  indicatorLabelTextColor: e.defaultChartConfig["tooltipAxisLabelColor"],
  indicatorLineColor: e.defaultChartConfig["textStyle"].color,
  indicatorLineType: e.defaultChartConfig["indicatorLineType"],
};
function Vn(_0x266902) {
  let _0x3ab669 = (0, o[_0x3d4586(858)])(a[_0x3d4586(1419)]),
    [_0xac564, _0x1c9589] = N(_0x3d4586(1661));
  return (0, i[_0x3d4586(922)])(M, {
    emptyLabel: _0x3ab669.t(_0x3d4586(819)),
    label: _0x3ab669.t(_0x3d4586(941)),
    pickerFallbackValue: _0x266902[_0x3d4586(801)].indicatorLineColor,
    resetLabel: _0x3ab669.t("chart-ui.editor.defaultColor"),
    value: (_0xac564 == null ? undefined : _0xac564[_0x3d4586(1071)]) ?? null,
    onChange: (_0x1c004c) =>
      _0x1c9589({ ..._0xac564, indicatorLineColor: _0x1c004c }),
  });
}
function Hn(_0x45278f) {
  let _0x5654b3 = (0, o[_0x1729a9(858)])(a.LocaleService),
    [_0xfd6bce, _0x2d26ca] = N(_0x1729a9(1661));
  return (0, i[_0x1729a9(922)])(A, {
    label: _0x5654b3.t(_0x1729a9(1811)),
    options: _n.map(({ labelKey: _0x39d215, value: _0x31d4c6 }) => ({
      label: _0x5654b3.t(_0x39d215),
      value: _0x31d4c6,
    })),
    value:
      (_0xfd6bce == null ? undefined : _0xfd6bce[_0x1729a9(1339)]) ??
      _0x45278f[_0x1729a9(801)][_0x1729a9(1339)],
    onChange: (_0x4c2c79) =>
      _0x2d26ca({ ..._0xfd6bce, indicatorLineType: _0x4c2c79 }),
  });
}
function Un(_0x4719c4) {
  let _0x43c7dd = (0, o[_0x122b68(858)])(a[_0x122b68(1419)]),
    [_0x7039eb, _0x2dbfec] = N(_0x122b68(1661));
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(M, {
        emptyLabel: _0x43c7dd.t(_0x122b68(819)),
        label: _0x43c7dd.t(_0x122b68(1764)),
        pickerFallbackValue: _0x4719c4[_0x122b68(801)].indicatorLabelBackground,
        resetLabel: _0x43c7dd.t("chart-ui.editor.defaultColor"),
        value:
          (_0x7039eb == null ? undefined : _0x7039eb[_0x122b68(1423)]) ?? null,
        onChange: (_0x3ff8af) =>
          _0x2dbfec({ ..._0x7039eb, indicatorLabelColor: _0x3ff8af }),
      }),
      (0, i[_0x122b68(922)])(M, {
        emptyLabel: _0x43c7dd.t(_0x122b68(819)),
        label: _0x43c7dd.t(_0x122b68(1792)),
        pickerFallbackValue: _0x4719c4[_0x122b68(801)].indicatorLabelTextColor,
        resetLabel: _0x43c7dd.t(_0x122b68(819)),
        value:
          (_0x7039eb == null ? undefined : _0x7039eb[_0x122b68(1920)]) ?? null,
        onChange: (_0x368a8f) =>
          _0x2dbfec({ ..._0x7039eb, indicatorLabelTextColor: _0x368a8f }),
      }),
    ],
  });
}
function Wn(_0x38a7db) {
  return (0, i.jsxs)(_0x2c99a8(1998), {
    className: _0x2c99a8(1556),
    children: [
      (0, i[_0x2c99a8(922)])(Vn, { defaultValues: _0x38a7db[_0x2c99a8(801)] }),
      (0, i[_0x2c99a8(922)])(Hn, { defaultValues: _0x38a7db.defaultValues }),
      (0, i[_0x2c99a8(922)])(Un, { defaultValues: _0x38a7db.defaultValues }),
    ],
  });
}
const Gn = {
  font: {
    ...R,
    color: e.defaultChartConfig["textStyle"].color,
    fontSize: e.defaultChartConfig["textStyle"].fontSize,
  },
  position: e.defaultChartConfig["legend"].position,
  selectMode: e.defaultChartConfig["legend"].selectMode,
  visualMapType: e.defaultChartConfig["heatmap"].visualMapType,
  wrap: false,
};
function Kn(_0x1bbe07) {
  return _0x1bbe07 === true
    ? { visible: true }
    : _0x1bbe07 === false
      ? { visible: false }
      : (_0x1bbe07 ?? {});
}
function qn(_0x45f93f) {
  var _0x3bc8f5, _0x3dcca7;
  let [_0x45200f] = N(_0x490543(553), e.ChartTypeBits[_0x490543(1859)]),
    [_0xfeb887, _0x4e39d2] = N(_0x490543(1565)),
    [_0x371330, _0x4c2f18] = N(_0x490543(1729)),
    [_0x2cbbd5] = N("pie"),
    _0x40f917 = Kn(_0xfeb887),
    _0x4fd23a =
      e[_0x490543(1790)].legend[_0x490543(1370)][_0x490543(1868)](_0x45200f),
    _0x467eca =
      _0x40f917[_0x490543(1755)] === false
        ? e[_0x490543(1331)][_0x490543(1566)]
        : (_0x40f917.position ??
          (_0x4fd23a
            ? e.LegendPositionEnum[_0x490543(1566)]
            : _0x45f93f[_0x490543(1712)])),
    _0x48e854 = _0x40f917[_0x490543(729)] ?? _0x45f93f.wrap,
    _0x2065d5 = _0x40f917.selectMode ?? _0x45f93f[_0x490543(1353)],
    _0x3b3f38 =
      (_0x371330 == null ? undefined : _0x371330[_0x490543(1482)]) ??
      _0x45f93f.visualMapType,
    _0x5021cc = z(_0x40f917, _0x45f93f[_0x490543(1235)]),
    _0x295894 =
      _0x467eca === e.LegendPositionEnum["Top"] ||
      _0x467eca === e[_0x490543(1331)][_0x490543(1831)],
    _0x2eb3bb = e.chartBitsUtils[_0x490543(1429)](
      _0x45200f,
      e[_0x490543(653)][_0x490543(1654)],
    ),
    _0x1fe479 =
      _0x2cbbd5 == null ||
      (_0x3bc8f5 = _0x2cbbd5.composite) == null ||
      (_0x3bc8f5 = _0x3bc8f5.secondaryPlot) == null
        ? undefined
        : _0x3bc8f5[_0x490543(483)];
  return {
    canWrap: _0x295894,
    chartType: _0x45200f,
    defaultValues: _0x45f93f,
    font: _0x5021cc,
    heatmap: _0x371330,
    isCompositePie:
      e[_0x490543(1226)].baseOn(_0x45200f, e[_0x490543(653)][_0x490543(600)]) &&
      (_0x2cbbd5 == null || (_0x3dcca7 = _0x2cbbd5[_0x490543(2021)]) == null
        ? undefined
        : _0x3dcca7[_0x490543(525)]) === true &&
      (_0x1fe479 === e[_0x490543(503)][_0x490543(600)] ||
        _0x1fe479 === e.PieSecondaryPlotType[_0x490543(1046)]),
    isHeatmap: _0x2eb3bb,
    legend: _0x40f917,
    position: _0x467eca,
    selectMode: _0x2065d5,
    setHeatmap: _0x4c2f18,
    setLegend: _0x4e39d2,
    visualMapType: _0x3b3f38,
    wrap: _0x48e854,
  };
}
const Jn = (0, r.createContext)(null);
function Yn() {
  let _0x5773e3 = (0, r[_0x3940dd(1443)])(Jn);
  if (!_0x5773e3) throw Error(_0x3940dd(1175));
  return _0x5773e3;
}
function Xn(_0x48e3f4) {
  let _0x4f00ba = qn(_0x48e3f4[_0x19cf88(801)]);
  return (0, i[_0x19cf88(922)])(Jn.Provider, {
    value: _0x4f00ba,
    children: (0, i[_0x19cf88(922)])(_0x19cf88(1998), {
      className: _0x19cf88(1556),
      children: _0x48e3f4[_0x19cf88(1492)],
    }),
  });
}
function Zn() {
  let _0x31f2ef = (0, o.useDependency)(a.LocaleService),
    { legend: _0x45e0e9, position: _0x2a36a4, setLegend: _0x5449ac } = Yn();
  return (0, i.jsx)(A, {
    label: _0x31f2ef.t("chart-ui.common.position.label"),
    options: [
      {
        value: e.LegendPositionEnum[_0x45e081(1210)],
        label: _0x31f2ef.t(_0x45e081(1935)),
      },
      {
        value: e[_0x45e081(1331)][_0x45e081(1831)],
        label: _0x31f2ef.t(_0x45e081(1758)),
      },
      {
        value: e.LegendPositionEnum[_0x45e081(1672)],
        label: _0x31f2ef.t(_0x45e081(1892)),
      },
      {
        value: e[_0x45e081(1331)][_0x45e081(477)],
        label: _0x31f2ef.t(_0x45e081(1560)),
      },
      {
        value: e.LegendPositionEnum["Hide"],
        label: _0x31f2ef.t(_0x45e081(1351)),
      },
    ],
    value: _0x2a36a4,
    onChange: (_0x55e1be) =>
      _0x5449ac({
        ..._0x45e0e9,
        visible: _0x55e1be !== e[_0x45e081(1331)][_0x45e081(1566)],
        ...(_0x55e1be === e.LegendPositionEnum[_0x45e081(1566)]
          ? {}
          : { position: _0x55e1be }),
      }),
  });
}
function Qn() {
  let _0x74da27 = (0, o.useDependency)(a[_0x1ec756(1419)]),
    {
      canWrap: _0xae99d1,
      isHeatmap: _0x13b936,
      legend: _0x460319,
      setLegend: _0x1b4fcf,
      wrap: _0x491426,
    } = Yn();
  return !_0xae99d1 || _0x13b936
    ? null
    : (0, i[_0x1ec756(1557)])(_0x1ec756(1998), {
        className: _0x1ec756(779),
        children: [
          (0, i[_0x1ec756(922)])(_0x1ec756(1904), {
            className: _0x1ec756(973),
            children: _0x74da27.t(_0x1ec756(721)),
          }),
          (0, i[_0x1ec756(922)])(t[_0x1ec756(1271)], {
            defaultChecked: _0x491426,
            onChange: (_0x3b0196) =>
              _0x1b4fcf({ ..._0x460319, wrap: _0x3b0196 }),
          }),
        ],
      });
}
function $n() {
  let _0x5ca3e7 = (0, o.useDependency)(a[_0xbd4fb6(1419)]),
    {
      heatmap: _0x4fb0d9,
      isHeatmap: _0x4e116c,
      setHeatmap: _0x2aa2c8,
      visualMapType: _0x2ce967,
    } = Yn();
  return _0x4e116c
    ? (0, i[_0xbd4fb6(922)])(A, {
        label: _0x5ca3e7.t(_0xbd4fb6(1876)),
        options: [
          {
            value: e[_0xbd4fb6(1632)][_0xbd4fb6(1869)],
            label: _0x5ca3e7.t("chart-ui.common.visualMapType.continuous"),
          },
          {
            value: e[_0xbd4fb6(1632)][_0xbd4fb6(1808)],
            label: _0x5ca3e7.t(_0xbd4fb6(523)),
          },
        ],
        value: _0x2ce967,
        onChange: (_0x3df7e5) =>
          _0x2aa2c8({ ..._0x4fb0d9, visualMapType: _0x3df7e5 }),
      })
    : null;
}
function er() {
  let _0x5bd151 = (0, o.useDependency)(a.LocaleService),
    {
      isCompositePie: _0x4cb83e,
      isHeatmap: _0x4550ca,
      legend: _0x454689,
      selectMode: _0x42b4c8,
      setLegend: _0xb0805d,
    } = Yn();
  return _0x4550ca || _0x4cb83e
    ? null
    : (0, i.jsx)(A, {
        label: _0x5bd151.t(_0x12e1d7(889)),
        options: [
          {
            value: e[_0x12e1d7(594)].Single,
            label: _0x5bd151.t(_0x12e1d7(813)),
          },
          {
            value: e[_0x12e1d7(594)][_0x12e1d7(1183)],
            label: _0x5bd151.t(_0x12e1d7(1186)),
          },
          {
            value: e[_0x12e1d7(594)].Close,
            label: _0x5bd151.t("chart-ui.common.legendSelectMode.disabled"),
          },
        ],
        value: _0x42b4c8,
        onChange: (_0x1b4795) =>
          _0xb0805d({ ..._0x454689, selectMode: _0x1b4795 }),
      });
}
function tr() {
  let _0x4bec32 = (0, o.useDependency)(a[_0x40e5eb(1419)]),
    {
      defaultValues: _0x353a45,
      font: _0x4cab4d,
      isHeatmap: _0x13f541,
      legend: _0x1c2370,
      setLegend: _0x27d2b0,
    } = Yn();
  return _0x13f541
    ? null
    : (0, i[_0x40e5eb(922)])(V, {
        colorPickerFallbackValue: _0x353a45[_0x40e5eb(1235)][_0x40e5eb(1393)],
        label: _0x4bec32.t(_0x40e5eb(852)),
        value: _0x4cab4d,
        onChange: (_0x4ca22e) => _0x27d2b0({ ..._0x1c2370, ...B(_0x4ca22e) }),
      });
}
function nr() {
  let _0x238e10 = (0, o[_0x46fadd(858)])(a[_0x46fadd(1419)]),
    { isHeatmap: _0x123ffb, legend: _0x2e17f7, setLegend: _0xe27357 } = Yn();
  return _0x123ffb
    ? null
    : (0, i[_0x46fadd(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        emptyLabel: _0x238e10.t("chart-ui.common.default"),
        label: _0x238e10.t(_0x46fadd(2018)),
        min: 8,
        value: _0x2e17f7[_0x46fadd(1003)] ?? null,
        onChange: (_0x24badf) =>
          _0xe27357({ ..._0x2e17f7, fontSize: _0x24badf }),
      });
}
function rr(_0x330eb2) {
  return (0, i[_0x12e00d(922)])(Xn, {
    defaultValues: _0x330eb2[_0x12e00d(801)],
    children: (0, i[_0x12e00d(922)])(ir, {}),
  });
}
function ir() {
  let { isHeatmap: _0x200d44 } = Yn();
  return (0, i[_0x48dd93(1557)])(i[_0x48dd93(1762)], {
    children: [
      (0, i[_0x48dd93(922)])(Zn, {}),
      (0, i[_0x48dd93(922)])(Qn, {}),
      _0x200d44
        ? (0, i[_0x48dd93(922)])($n, {})
        : (0, i.jsxs)(i[_0x48dd93(1762)], {
            children: [
              (0, i[_0x48dd93(922)])(er, {}),
              (0, i[_0x48dd93(922)])(tr, {}),
            ],
          }),
    ],
  });
}
const ar = {
  invalidValueStrategy: e.defaultChartConfig["invalidValueType"],
  lineStyle: e.defaultChartConfig["area"].lineStyle,
};
function or(_0x59d188) {
  let _0x4fc230 = (0, o[_0x4882f8(858)])(a.LocaleService),
    [_0x46b164] = N(_0x4882f8(553), e[_0x4882f8(653)][_0x4882f8(1859)]),
    [_0x5bf8e6, _0x2d8699] = N(_0x4882f8(891)),
    [_0x49ef5e, _0x1dd8b7] = N(_0x4882f8(1445));
  if (!(
    e[_0x4882f8(1226)][_0x4882f8(1429)](
      _0x46b164,
      e[_0x4882f8(653)][_0x4882f8(1152)],
    ) || e[_0x4882f8(1226)].baseOn(_0x46b164, e[_0x4882f8(653)][_0x4882f8(999)])
  ))
    return null;
  let _0x43c35c = [
      {
        value: e[_0x4882f8(1401)][_0x4882f8(1152)],
        label: _0x4fc230.t(_0x4882f8(1052)),
      },
      {
        value: e.AreaLineStyle[_0x4882f8(634)],
        label: _0x4fc230.t(_0x4882f8(1810)),
      },
      {
        value: e[_0x4882f8(1401)][_0x4882f8(1321)],
        label: _0x4fc230.t("chart-ui.lineAndArea.step"),
      },
    ],
    _0x29de21 =
      (_0x5bf8e6 == null ? undefined : _0x5bf8e6[_0x4882f8(1874)]) ??
      _0x59d188[_0x4882f8(801)][_0x4882f8(1874)];
  return (0, i[_0x4882f8(1557)])(_0x4882f8(1998), {
    className: _0x4882f8(1556),
    children: [
      _0x59d188[_0x4882f8(1426)] === _0x4882f8(697)
        ? (0, i[_0x4882f8(922)])(D, {
            label: _0x4fc230.t("chart-ui.lineAndArea.lineStyle"),
            children: (0, i.jsx)(t[_0x4882f8(1956)], {
              items: _0x43c35c,
              value: _0x29de21,
              onChange: (_0x4c6329) =>
                _0x2d8699({ ..._0x5bf8e6, lineStyle: _0x4c6329 }),
            }),
          })
        : (0, i[_0x4882f8(922)])(A, {
            label: _0x4fc230.t(_0x4882f8(1428)),
            options: _0x43c35c,
            value: _0x29de21,
            onChange: (_0x1346d9) =>
              _0x2d8699({ ..._0x5bf8e6, lineStyle: _0x1346d9 }),
          }),
      (0, i[_0x4882f8(922)])(A, {
        label: _0x4fc230.t(_0x4882f8(1512)),
        options: [
          {
            value: e[_0x4882f8(1938)][_0x4882f8(1076)],
            label: _0x4fc230.t(_0x4882f8(873)),
          },
          {
            value: e[_0x4882f8(1938)][_0x4882f8(1679)],
            label: _0x4fc230.t("chart-ui.lineAndArea.connect"),
          },
          {
            value: e[_0x4882f8(1938)].Zero,
            label: _0x4fc230.t(_0x4882f8(1404)),
          },
        ],
        value: _0x49ef5e ?? _0x59d188[_0x4882f8(801)][_0x4882f8(1445)],
        onChange: _0x1dd8b7,
      }),
    ],
  });
}
function sr(_0x14159c) {
  let [_0x57c84e, _0x18bc99] = (0, r[_0x3eb6b8(1825)])(false),
    _0x1a1f81 = _0x14159c[_0x3eb6b8(1822)].filter((_0x4b4a3f) =>
      _0x14159c.value[_0x3eb6b8(1868)](_0x4b4a3f[_0x3eb6b8(1324)]),
    ),
    _0x2946a7 = _0x14159c[_0x3eb6b8(1822)].map((_0x66da03) => ({
      type: "checkbox",
      checked: _0x14159c.value[_0x3eb6b8(1868)](_0x66da03.value),
      disabled: _0x66da03[_0x3eb6b8(1937)],
      label: _0x66da03[_0x3eb6b8(1614)],
      value: _0x66da03[_0x3eb6b8(1324)],
      onSelect: (_0x16960a) => {
        const _0x3ac570 = _0x3eb6b8;
        _0x14159c[_0x3ac570(507)](
          _0x14159c[_0x3ac570(1324)][_0x3ac570(1868)](_0x16960a)
            ? _0x14159c[_0x3ac570(1324)][_0x3ac570(1573)](
                (_0x3f3f36) => _0x3f3f36 !== _0x16960a,
              )
            : [..._0x14159c[_0x3ac570(1324)], _0x16960a],
        );
      },
    }));
  return (0, i[_0x3eb6b8(922)])(t[_0x3eb6b8(744)], {
    align: _0x3eb6b8(797),
    className: _0x3eb6b8(1055),
    disabled: _0x14159c[_0x3eb6b8(1937)],
    items: _0x2946a7,
    open: _0x57c84e,
    onOpenChange: _0x18bc99,
    children: (0, i[_0x3eb6b8(1557)])(_0x3eb6b8(1204), {
      "aria-expanded": _0x57c84e,
      "aria-haspopup": "menu",
      className: (0, t[_0x3eb6b8(1916)])(t.selectClassName, _0x3eb6b8(950), {
        "univer-border-primary-600\x20univer-outline-none\x20univer-ring-2\x20univer-ring-primary-50\x20dark:!univer-ring-primary-900":
          _0x57c84e,
        "univer-cursor-not-allowed": _0x14159c.disabled,
        "univer-cursor-pointer\x20hover:univer-border-primary-600":
          !_0x14159c[_0x3eb6b8(1937)] && !_0x57c84e,
      }),
      "data-u-comp": _0x3eb6b8(1124),
      disabled: _0x14159c[_0x3eb6b8(1937)],
      type: "button",
      ..._0x14159c[_0x3eb6b8(913)],
      children: [
        (0, i[_0x3eb6b8(922)])(_0x3eb6b8(1904), {
          className: _0x3eb6b8(1017),
          children: _0x1a1f81[_0x3eb6b8(1285)]((_0xaaae9f) =>
            (0, i[_0x3eb6b8(922)])(
              t[_0x3eb6b8(983)],
              {
                className: "univer-max-w-32",
                children: _0xaaae9f[_0x3eb6b8(1614)],
              },
              _0xaaae9f[_0x3eb6b8(1324)],
            ),
          ),
        }),
        (0, i[_0x3eb6b8(922)])(n[_0x3eb6b8(781)], {
          "aria-hidden": _0x3eb6b8(1582),
          className: _0x3eb6b8(1637),
        }),
      ],
    }),
  });
}
function cr(_0xe1644e) {
  return (0, i[_0x1c773b(922)])(D, {
    disabled: _0xe1644e.disabled,
    error: _0xe1644e[_0x1c773b(764)],
    help: _0xe1644e[_0x1c773b(1899)],
    label: _0xe1644e.label,
    children: (_0x410fe9) =>
      (0, i[_0x1c773b(922)])(sr, {
        controlProps: _0x410fe9,
        disabled: _0xe1644e[_0x1c773b(1937)],
        options: _0xe1644e[_0x1c773b(1822)],
        value: _0xe1644e[_0x1c773b(1324)],
        onChange: _0xe1644e[_0x1c773b(507)],
      }),
  });
}
const lr = [
    e.LabelContentType["CategoryName"],
    e.LabelContentType["SeriesName"],
    e.LabelContentType["Value"],
    e.LabelContentType["Percentage"],
  ],
  ur = {
    borderDashType: e.ChartBorderDashType["Solid"],
    borderOpacity: e.defaultChartConfig["borderStyle"].opacity,
    borderWidth: e.defaultChartConfig["borderStyle"].width,
    includeZeroValues: false,
    labelContentType: e.LabelContentType["Value"],
    labelPosition: e.SeriesLabelPosition["Auto"],
    labelVisible: false,
    lineDashType: e.ChartBorderDashType["Solid"],
    lineOpacity: e.defaultChartConfig["borderStyle"].opacity,
    lineWidth:
      e.defaultChartConfig["borderStyle"].specialChartWidthMap["lineOrArea"],
    pointShape: e.defaultChartConfig["point"].shape,
    pointSize: e.defaultChartConfig["pareto"].symbolSize,
    textColor: e.defaultChartConfig["textStyle"].color,
  };
function dr(_0x3cfe38) {
  return typeof _0x3cfe38 == _0x4bc1fc(2002) ? _0x3cfe38 : null;
}
function fr(_0x515bce) {
  let { target: _0x35aee6 } = _0x515bce,
    _0x41f2ca = (0, o.useDependency)(a[_0x552e5b(1419)]),
    [_0x1900e7] = N(_0x552e5b(553), e[_0x552e5b(653)].None),
    [_0x96c993, _0x28e4fe] = N("pareto"),
    [_0x414938] = N("paretoDataPointOptions"),
    [_0x1be721, _0x14266f] = (0, r.useState)(""),
    _0x21d6b5 = _0x96c993 ?? {},
    _0x47995e = { ..._0x21d6b5[_0x35aee6] },
    _0x52ca92 = _0x47995e[_0x552e5b(1614)] ?? {},
    _0x5dbdc2 = _0x47995e[_0x552e5b(1464)] ?? {},
    _0x242b9d = _0x47995e[_0x552e5b(1178)] ?? {},
    _0x6b60c8 = z(_0x52ca92, R),
    _0x5c0f0c = _0x35aee6 === _0x552e5b(1801),
    _0x16ec6a = _0x515bce[_0x552e5b(1902)] ?? At,
    _0x2df12c = (_0x17e801) =>
      _0x28e4fe(
        _0x35aee6 === _0x552e5b(785)
          ? {
              ..._0x21d6b5,
              barStyle: {
                color: _0x17e801.color,
                opacity: _0x17e801[_0x552e5b(577)],
                border: _0x17e801[_0x552e5b(1464)],
                dataPoints: _0x17e801[_0x552e5b(1307)],
                label: _0x17e801[_0x552e5b(1614)],
              },
            }
          : {
              ..._0x21d6b5,
              cumulativeLineStyle: {
                color: _0x17e801[_0x552e5b(1393)],
                opacity: _0x17e801[_0x552e5b(577)],
                width: _0x17e801[_0x552e5b(989)],
                dashType: _0x17e801[_0x552e5b(704)],
                dataPoints: _0x17e801.dataPoints,
                point: _0x17e801.point,
                label: _0x17e801[_0x552e5b(1614)] && {
                  ..._0x17e801[_0x552e5b(1614)],
                  position:
                    _0x17e801.label[_0x552e5b(1712)] ===
                    e.SeriesLabelPosition[_0x552e5b(1150)]
                      ? undefined
                      : _0x17e801[_0x552e5b(1614)].position,
                },
              },
            },
      );
  return _0x1900e7 === e[_0x552e5b(653)][_0x552e5b(593)]
    ? (0, i[_0x552e5b(1557)])(_0x552e5b(1998), {
        className: _0x552e5b(1556),
        children: [
          (0, i[_0x552e5b(1557)])(O, {
            children: [
              (0, i[_0x552e5b(922)])(M, {
                emptyLabel: _0x41f2ca.t("chart-ui.editor.defaultColor"),
                label: _0x41f2ca.t("chart-ui.common.color"),
                pickerFallbackValue: _0x515bce[_0x552e5b(801)][_0x552e5b(1082)],
                resetLabel: _0x41f2ca.t(_0x552e5b(819)),
                value: dr(_0x47995e[_0x552e5b(1393)]),
                onChange: (_0x36b398) =>
                  _0x2df12c({ ..._0x47995e, color: _0x36b398 }),
              }),
              (0, i[_0x552e5b(922)])(k, {
                label: _0x41f2ca.t(_0x552e5b(693)),
                max: U[_0x552e5b(628)],
                min: U[_0x552e5b(1337)],
                step: U.step,
                value:
                  _0x47995e[_0x552e5b(577)] ??
                  _0x515bce[_0x552e5b(801)][_0x552e5b(1936)],
                onChange: (_0x231b59) =>
                  _0x2df12c({ ..._0x47995e, opacity: _0x231b59 ?? undefined }),
              }),
            ],
          }),
          _0x5c0f0c
            ? (0, i.jsxs)(i[_0x552e5b(1762)], {
                children: [
                  (0, i[_0x552e5b(1557)])(O, {
                    children: [
                      (0, i[_0x552e5b(922)])(k, {
                        allowClear: true,
                        allowEmpty: true,
                        emptyLabel: _0x41f2ca.t("chart-ui.common.default"),
                        label: _0x41f2ca.t(_0x552e5b(827)),
                        min: 0,
                        value: _0x47995e[_0x552e5b(989)] ?? null,
                        onChange: (_0x2d7815) =>
                          _0x2df12c({ ..._0x47995e, width: _0x2d7815 }),
                      }),
                      (0, i[_0x552e5b(922)])(A, {
                        label: _0x41f2ca.t(_0x552e5b(722)),
                        options: _n[_0x552e5b(1285)](
                          ({ labelKey: _0x4773fa, value: _0x5a90ad }) => ({
                            label: _0x41f2ca.t(_0x4773fa),
                            value: _0x5a90ad,
                          }),
                        ),
                        value:
                          _0x47995e[_0x552e5b(704)] ??
                          _0x515bce[_0x552e5b(801)][_0x552e5b(1658)],
                        onChange: (_0x1c1211) =>
                          _0x2df12c({ ..._0x47995e, dashType: _0x1c1211 }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(O, {
                    children: [
                      (0, i.jsx)(A, {
                        label: _0x41f2ca.t("chart-ui.series.pointShape"),
                        options: vn.map(
                          ({ labelKey: _0x4a0178, value: _0x554cc4 }) => ({
                            label: _0x41f2ca.t(_0x4a0178),
                            value: _0x554cc4,
                          }),
                        ),
                        value:
                          _0x242b9d[_0x552e5b(543)] ??
                          _0x515bce[_0x552e5b(801)][_0x552e5b(1517)],
                        onChange: (_0x2b7887) =>
                          _0x2df12c({
                            ..._0x47995e,
                            point: { ..._0x242b9d, shape: _0x2b7887 },
                          }),
                      }),
                      (0, i[_0x552e5b(922)])(k, {
                        allowClear: true,
                        allowEmpty: true,
                        emptyLabel: _0x41f2ca.t(_0x552e5b(1990)),
                        label: _0x41f2ca.t(_0x552e5b(1065)),
                        min: 0,
                        value: _0x242b9d[_0x552e5b(850)] ?? null,
                        onChange: (_0x7e4b63) =>
                          _0x2df12c({
                            ..._0x47995e,
                            point: { ..._0x242b9d, size: _0x7e4b63 },
                          }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(M, {
                    emptyLabel: _0x41f2ca.t("chart-ui.editor.defaultColor"),
                    label: _0x41f2ca.t("chart-ui.series.pointColor"),
                    pickerFallbackValue:
                      _0x515bce[_0x552e5b(801)][_0x552e5b(1082)],
                    resetLabel: _0x41f2ca.t("chart-ui.editor.defaultColor"),
                    value: dr(_0x242b9d[_0x552e5b(1393)]),
                    onChange: (_0x2c8999) =>
                      _0x2df12c({
                        ..._0x47995e,
                        point: { ..._0x242b9d, color: _0x2c8999 },
                      }),
                  }),
                ],
              })
            : (0, i[_0x552e5b(1557)])(i.Fragment, {
                children: [
                  (0, i[_0x552e5b(922)])(M, {
                    emptyLabel: _0x41f2ca.t(_0x552e5b(819)),
                    label: _0x41f2ca.t("chart-ui.common.borderColor"),
                    pickerFallbackValue:
                      _0x515bce[_0x552e5b(801)][_0x552e5b(1082)],
                    resetLabel: _0x41f2ca.t("chart-ui.editor.defaultColor"),
                    value: _0x5dbdc2.color ?? null,
                    onChange: (_0x13d235) =>
                      _0x2df12c({
                        ..._0x47995e,
                        border: { ..._0x5dbdc2, color: _0x13d235 ?? undefined },
                      }),
                  }),
                  (0, i.jsx)(k, {
                    label: _0x41f2ca.t("chart-ui.series.borderOpacity"),
                    max: U[_0x552e5b(628)],
                    min: U[_0x552e5b(1337)],
                    step: U.step,
                    value:
                      _0x5dbdc2[_0x552e5b(577)] ??
                      _0x515bce[_0x552e5b(801)][_0x552e5b(1021)],
                    onChange: (_0x436b50) =>
                      _0x2df12c({
                        ..._0x47995e,
                        border: {
                          ..._0x5dbdc2,
                          opacity: _0x436b50 ?? undefined,
                        },
                      }),
                  }),
                  (0, i[_0x552e5b(922)])(k, {
                    allowClear: true,
                    allowEmpty: true,
                    emptyLabel: _0x41f2ca.t("chart-ui.common.default"),
                    label: _0x41f2ca.t(_0x552e5b(1128)),
                    min: 0,
                    value: _0x5dbdc2[_0x552e5b(989)] ?? null,
                    onChange: (_0x4c0e7e) =>
                      _0x2df12c({
                        ..._0x47995e,
                        border: { ..._0x5dbdc2, width: _0x4c0e7e },
                      }),
                  }),
                  (0, i[_0x552e5b(922)])(A, {
                    label: _0x41f2ca.t("chart-ui.common.borderType"),
                    options: _n.map(
                      ({ labelKey: _0x82a0c8, value: _0x1bc615 }) => ({
                        label: _0x41f2ca.t(_0x82a0c8),
                        value: _0x1bc615,
                      }),
                    ),
                    value:
                      _0x5dbdc2.dashType ??
                      _0x515bce[_0x552e5b(801)][_0x552e5b(917)],
                    onChange: (_0x50e128) =>
                      _0x2df12c({
                        ..._0x47995e,
                        border: { ..._0x5dbdc2, dashType: _0x50e128 },
                      }),
                  }),
                ],
              }),
          (0, i.jsx)(H, {
            inlineLabel: true,
            checked:
              _0x52ca92[_0x552e5b(1755)] ??
              _0x515bce[_0x552e5b(801)].labelVisible,
            label: _0x41f2ca.t(_0x552e5b(1719)),
            onChange: (_0x1f085d) =>
              _0x2df12c({
                ..._0x47995e,
                label: { ..._0x52ca92, visible: _0x1f085d },
              }),
          }),
          _0x52ca92[_0x552e5b(1755)] &&
            (0, i[_0x552e5b(1557)])(i[_0x552e5b(1762)], {
              children: [
                (0, i[_0x552e5b(922)])(cr, {
                  label: _0x41f2ca.t("chart-ui.common.labelContent"),
                  options: [
                    {
                      value: String(e[_0x552e5b(1567)][_0x552e5b(602)]),
                      label: _0x41f2ca.t(_0x552e5b(925)),
                    },
                    {
                      value: String(e[_0x552e5b(1567)].SeriesName),
                      label: _0x41f2ca.t("chart-ui.common.seriesName"),
                    },
                    {
                      value: String(e[_0x552e5b(1567)][_0x552e5b(624)]),
                      label: _0x41f2ca.t(_0x552e5b(545)),
                    },
                    {
                      value: String(e[_0x552e5b(1567)][_0x552e5b(754)]),
                      label: _0x41f2ca.t(_0x552e5b(726)),
                    },
                  ],
                  value: lr[_0x552e5b(1573)]((_0x21d27b) =>
                    e[_0x552e5b(1226)][_0x552e5b(863)](
                      _0x52ca92[_0x552e5b(1108)] ??
                        _0x515bce[_0x552e5b(801)][_0x552e5b(1655)],
                      _0x21d27b,
                    ),
                  )[_0x552e5b(1285)](String),
                  onChange: (_0xec7b62) => {
                    const _0x31c7e7 = _0x552e5b;
                    if (_0xec7b62[_0x31c7e7(1579)] === 0) return;
                    let _0x21bb74 = lr[_0x31c7e7(1573)]((_0x28f56a) =>
                      _0xec7b62[_0x31c7e7(1868)](String(_0x28f56a)),
                    )[_0x31c7e7(900)](
                      (_0x37586b, _0x3a81ae) => _0x37586b | _0x3a81ae,
                      e.LabelContentType[_0x31c7e7(1549)],
                    );
                    _0x2df12c({
                      ..._0x47995e,
                      label: { ..._0x52ca92, contentType: _0x21bb74 },
                    });
                  },
                }),
                (0, i.jsx)(A, {
                  label: _0x41f2ca.t(_0x552e5b(1668)),
                  options: [
                    {
                      value: e.SeriesLabelPosition[_0x552e5b(733)],
                      label: _0x41f2ca.t(_0x552e5b(893)),
                    },
                    {
                      value: e[_0x552e5b(1727)][_0x552e5b(1934)],
                      label: _0x41f2ca.t("chart-ui.common.position.inside"),
                    },
                    {
                      value: e[_0x552e5b(1727)][_0x552e5b(1672)],
                      label: _0x41f2ca.t(_0x552e5b(1892)),
                    },
                    {
                      value: e[_0x552e5b(1727)][_0x552e5b(477)],
                      label: _0x41f2ca.t(_0x552e5b(1560)),
                    },
                    {
                      value: e[_0x552e5b(1727)].Top,
                      label: _0x41f2ca.t(_0x552e5b(1935)),
                    },
                    {
                      value: e.SeriesLabelPosition["Bottom"],
                      label: _0x41f2ca.t(_0x552e5b(1758)),
                    },
                  ],
                  value:
                    _0x52ca92[_0x552e5b(1712)] ??
                    _0x515bce[_0x552e5b(801)][_0x552e5b(1336)],
                  onChange: (_0x4a9f70) =>
                    _0x2df12c({
                      ..._0x47995e,
                      label: { ..._0x52ca92, position: _0x4a9f70 },
                    }),
                }),
                (0, i.jsx)(_0x16ec6a, {
                  label: _0x41f2ca.t("chart-ui.common.numberFormat"),
                  value: _0x52ca92[_0x552e5b(1875)],
                  onChange: (_0x523511) =>
                    _0x2df12c({
                      ..._0x47995e,
                      label: { ..._0x52ca92, format: _0x523511 },
                    }),
                }),
                (0, i.jsx)(V, {
                  colorPickerFallbackValue:
                    _0x515bce[_0x552e5b(801)][_0x552e5b(1082)],
                  label: _0x41f2ca.t(_0x552e5b(852)),
                  value: _0x6b60c8,
                  onChange: (_0x4ef010) =>
                    _0x2df12c({
                      ..._0x47995e,
                      label: { ..._0x52ca92, ...B(_0x4ef010) },
                    }),
                }),
              ],
            }),
          !_0x5c0f0c &&
            (0, i.jsx)(H, {
              inlineLabel: true,
              checked:
                _0x21d6b5[_0x552e5b(643)] ??
                _0x515bce[_0x552e5b(801)].includeZeroValues,
              label: _0x41f2ca.t(_0x552e5b(1047)),
              onChange: (_0x14e479) =>
                _0x28e4fe({ ..._0x21d6b5, includeZeroValues: _0x14e479 }),
            }),
          _0x515bce[_0x552e5b(1416)] &&
            ((_0x414938 == null ? undefined : _0x414938.length) ?? 0) > 0 &&
            (0, i[_0x552e5b(1557)])(i[_0x552e5b(1762)], {
              children: [
                (0, i[_0x552e5b(922)])(A, {
                  label: _0x41f2ca.t(_0x552e5b(806)),
                  options: [
                    { value: "", label: _0x41f2ca.t("chart-ui.common.none") },
                    ...(_0x414938 ?? []),
                  ],
                  value: _0x1be721,
                  onChange: _0x14266f,
                }),
                _0x1be721 !== "" &&
                  (() => {
                    const _0x4e47d8 = _0x552e5b;
                    var _0x41fb1a;
                    let _0x4d5f3a = Number(_0x1be721),
                      _0xce6851 =
                        ((_0x41fb1a = _0x47995e[_0x4e47d8(1307)]) == null
                          ? undefined
                          : _0x41fb1a[_0x4d5f3a]) ?? {},
                      _0x2e9924 = (_0x22f177) =>
                        _0x2df12c({
                          ..._0x47995e,
                          dataPoints: {
                            ..._0x47995e[_0x4e47d8(1307)],
                            [_0x4d5f3a]: { ..._0xce6851, ..._0x22f177 },
                          },
                        });
                    return (0, i[_0x4e47d8(1557)])(i[_0x4e47d8(1762)], {
                      children: [
                        (0, i[_0x4e47d8(1557)])(O, {
                          children: [
                            (0, i[_0x4e47d8(922)])(M, {
                              emptyLabel: _0x41f2ca.t(_0x4e47d8(819)),
                              label: _0x41f2ca.t(_0x4e47d8(677)),
                              pickerFallbackValue:
                                _0x515bce[_0x4e47d8(801)][_0x4e47d8(1082)],
                              resetLabel: _0x41f2ca.t(
                                "chart-ui.editor.defaultColor",
                              ),
                              value: dr(_0xce6851.color),
                              onChange: (_0x2a13ef) =>
                                _0x2e9924({ color: _0x2a13ef }),
                            }),
                            (0, i.jsx)(t.Button, {
                              "aria-label": _0x41f2ca.t(_0x4e47d8(1450)),
                              size: _0x4e47d8(534),
                              variant: _0x4e47d8(1245),
                              onClick: () => {
                                const _0x56921d = _0x4e47d8;
                                (_0x2df12c({
                                  ..._0x47995e,
                                  dataPoints: {
                                    ..._0x47995e[_0x56921d(1307)],
                                    [_0x4d5f3a]: undefined,
                                  },
                                }),
                                  _0x14266f(""));
                              },
                              children: (0, i[_0x4e47d8(922)])(
                                n[_0x4e47d8(1494)],
                                {},
                              ),
                            }),
                          ],
                        }),
                        _0x5c0f0c &&
                          (0, i[_0x4e47d8(1557)])(O, {
                            children: [
                              (0, i[_0x4e47d8(922)])(A, {
                                label: _0x41f2ca.t(_0x4e47d8(1913)),
                                options: vn[_0x4e47d8(1285)](
                                  ({
                                    labelKey: _0x4d0979,
                                    value: _0x2ba3d1,
                                  }) => ({
                                    label: _0x41f2ca.t(_0x4d0979),
                                    value: _0x2ba3d1,
                                  }),
                                ),
                                value:
                                  _0xce6851.shape ??
                                  _0x515bce[_0x4e47d8(801)].pointShape,
                                onChange: (_0x57781b) =>
                                  _0x2e9924({ shape: _0x57781b }),
                              }),
                              (0, i.jsx)(k, {
                                allowClear: true,
                                allowEmpty: true,
                                emptyLabel: _0x41f2ca.t(_0x4e47d8(1990)),
                                label: _0x41f2ca.t("chart-ui.series.pointSize"),
                                min: 0,
                                value: _0xce6851[_0x4e47d8(850)] ?? null,
                                onChange: (_0x22c665) =>
                                  _0x2e9924({ size: _0x22c665 }),
                              }),
                            ],
                          }),
                      ],
                    });
                  })(),
              ],
            }),
        ],
      })
    : null;
}
const pr = [],
  mr = new Set([
    e.ChartTypeBits["AreaPercentStacked"],
    e.ChartTypeBits["BarPercentStacked"],
    e.ChartTypeBits["ColumnPercentStacked"],
  ]),
  hr = {
    borderDashType: e.ChartBorderDashType["Solid"],
    borderOpacity: e.defaultChartConfig["borderStyle"].opacity,
    borderWidth: e.defaultChartConfig["borderStyle"].width,
    color: e.defaultChartConfig["textStyle"].color,
    labelContentType: e.LabelContentType["Value"],
    labelFontSize: e.defaultChartConfig["textStyle"].fontSize,
    labelPosition: e.SeriesLabelPosition["Auto"],
    labelVisible: false,
    lineOrAreaBorderWidth:
      e.defaultChartConfig["borderStyle"].specialChartWidthMap["lineOrArea"],
    pointShape: e.defaultChartConfig["point"].shape,
    pointSize: e.defaultChartConfig["point"].size,
    radarBorderWidth:
      e.defaultChartConfig["borderStyle"].specialChartWidthMap["radar"],
    radarFillOpacity: e.defaultChartConfig["borderStyle"].opacity,
    rightAxis: { ltr: false, rtl: false },
    scatterPointSize: e.defaultChartConfig["point"].scatterSymbolSize,
    seriesFillOpacity: e.defaultChartConfig["borderStyle"].opacity,
  };
function gr(_0x385aa2) {
  return typeof _0x385aa2 == _0xbd813f(2002) ? _0x385aa2 : null;
}
function _r(_0x3d9b25, _0x2979af) {
  return {
    ..._0x3d9b25,
    ..._0x2979af,
    ...((_0x3d9b25 != null && _0x3d9b25[_0x2ca00e(1464)]) ||
    (_0x2979af != null && _0x2979af[_0x2ca00e(1464)])
      ? {
          border: {
            ...(_0x3d9b25 == null ? undefined : _0x3d9b25[_0x2ca00e(1464)]),
            ...(_0x2979af == null ? undefined : _0x2979af.border),
          },
        }
      : {}),
    ...((_0x3d9b25 != null && _0x3d9b25[_0x2ca00e(1614)]) ||
    (_0x2979af != null && _0x2979af.label)
      ? {
          label: {
            ...(_0x3d9b25 == null ? undefined : _0x3d9b25.label),
            ...(_0x2979af == null ? undefined : _0x2979af[_0x2ca00e(1614)]),
          },
        }
      : {}),
    ...((_0x3d9b25 != null && _0x3d9b25[_0x2ca00e(1178)]) ||
    (_0x2979af != null && _0x2979af[_0x2ca00e(1178)])
      ? {
          point: {
            ...(_0x3d9b25 == null ? undefined : _0x3d9b25[_0x2ca00e(1178)]),
            ...(_0x2979af == null ? undefined : _0x2979af.point),
          },
        }
      : {}),
    ...((_0x3d9b25 != null && _0x3d9b25[_0x2ca00e(1307)]) ||
    (_0x2979af != null && _0x2979af[_0x2ca00e(1307)])
      ? {
          dataPoints: {
            ...(_0x3d9b25 == null ? undefined : _0x3d9b25[_0x2ca00e(1307)]),
            ...(_0x2979af == null ? undefined : _0x2979af[_0x2ca00e(1307)]),
          },
        }
      : {}),
    ...((_0x3d9b25 != null && _0x3d9b25.waterfallStyles) ||
    (_0x2979af != null && _0x2979af[_0x2ca00e(794)])
      ? {
          waterfallStyles: {
            ...(_0x3d9b25 == null ? undefined : _0x3d9b25[_0x2ca00e(794)]),
            ...(_0x2979af == null ? undefined : _0x2979af[_0x2ca00e(794)]),
          },
        }
      : {}),
  };
}
function vr(_0x578b58, _0x591ddb) {
  return _0x578b58 === e.ChartTypeBits[_0x469089(1961)]
    ? _0x591ddb[_0x469089(483)] === e.ChartSeriesTypeString["Line"]
      ? e[_0x469089(653)][_0x469089(1152)]
      : _0x591ddb[_0x469089(483)] === e[_0x469089(1475)][_0x469089(541)]
        ? e[_0x469089(653)].AreaStacked
        : _0x591ddb.type === e[_0x469089(1475)][_0x469089(999)]
          ? e[_0x469089(653)][_0x469089(999)]
          : _0x591ddb[_0x469089(483)] ===
              e.ChartSeriesTypeString[_0x469089(636)]
            ? e[_0x469089(653)].ColumnStacked
            : e[_0x469089(653)].Column
    : e.chartBitsUtils[_0x469089(1429)](
          _0x578b58,
          e[_0x469089(653)][_0x469089(999)],
        )
      ? e[_0x469089(653)][_0x469089(999)]
      : e[_0x469089(1226)].baseOn(_0x578b58, e[_0x469089(653)].Line)
        ? e[_0x469089(653)][_0x469089(1152)]
        : _0x578b58;
}
function yr(_0x64b167) {
  switch (
    _0x64b167 === 0
      ? e[_0x4f6626(1790)][_0x4f6626(1300)][_0x4f6626(1857)]
      : e[_0x4f6626(1790)].combination[_0x4f6626(855)]
  ) {
    case e[_0x4f6626(653)][_0x4f6626(1152)]:
      return e[_0x4f6626(1475)][_0x4f6626(1152)];
    case e[_0x4f6626(653)].Area:
      return e[_0x4f6626(1475)][_0x4f6626(999)];
    default:
      return e[_0x4f6626(1475)][_0x4f6626(1218)];
  }
}
function br(_0xedb501) {
  switch (_0xedb501) {
    case e.ChartSeriesTypeString[_0x20d963(1152)]:
      return e[_0x20d963(653)][_0x20d963(1152)];
    case e[_0x20d963(1475)][_0x20d963(541)]:
      return e[_0x20d963(653)][_0x20d963(541)];
    case e[_0x20d963(1475)][_0x20d963(999)]:
      return e.ChartTypeBits[_0x20d963(999)];
    case e[_0x20d963(1475)].ColumnStacked:
      return e[_0x20d963(653)][_0x20d963(636)];
    case e[_0x20d963(1475)][_0x20d963(1218)]:
      return e[_0x20d963(653)][_0x20d963(1218)];
    default:
      return e[_0x20d963(653)][_0x20d963(1859)];
  }
}
function xr(_0x14f2ac, _0x3de661) {
  if (_0x3de661 !== null) {
    var _0x1cc09c;
    let _0x5aab97 = _0x14f2ac[_0x54dad6(646)](
      (_0xeda41e) => _0xeda41e[_0x54dad6(1301)] === _0x3de661,
    );
    return _0x5aab97 < 0
      ? ""
      : (((_0x1cc09c = _0x14f2ac[_0x5aab97]) == null
          ? undefined
          : _0x1cc09c[_0x54dad6(1169)].type) ?? yr(_0x5aab97));
  }
  let _0x124e86 = _0x14f2ac.map(
      (_0x738989, _0x959633) =>
        _0x738989[_0x54dad6(1169)].type ?? yr(_0x959633),
    ),
    _0x4b3aed = _0x124e86[0];
  return _0x4b3aed !== undefined &&
    _0x124e86.every((_0x56312f) => _0x56312f === _0x4b3aed)
    ? _0x4b3aed
    : "";
}
function Sr(_0x1e0f1f) {
  return [
    e[_0x2a1615(1567)][_0x2a1615(602)],
    e[_0x2a1615(1567)][_0x2a1615(1694)],
    e[_0x2a1615(1567)].Value,
    e[_0x2a1615(1567)][_0x2a1615(754)],
  ]
    [_0x2a1615(1573)]((_0xf2367b) =>
      e.chartBitsUtils["has"](_0x1e0f1f, _0xf2367b),
    )
    .map(String);
}
const Cr = (0, r.createContext)(null);
function J() {
  let _0x434226 = (0, r[_0x1cb571(1443)])(Cr);
  if (!_0x434226) throw Error(_0x1cb571(1771));
  return _0x434226;
}
function wr() {
  var _0x260ff7;
  let {
      dataPointOptions: _0x196e15,
      defaultValues: _0x18ad8f,
      seriesType: _0x3b26c1,
      style: _0x5dbd44,
      patchStyle: _0x3e234e,
    } = J(),
    _0x4c9793 = (0, o.useDependency)(a[_0x35b974(1419)]),
    [_0x33a0aa, _0x1cf052] = (0, r[_0x35b974(1825)])(""),
    _0x23794f = _0x33a0aa === "" ? null : Number(_0x33a0aa),
    _0x1247bb =
      _0x23794f === null
        ? {}
        : (((_0x260ff7 = _0x5dbd44[_0x35b974(1307)]) == null
            ? undefined
            : _0x260ff7[_0x23794f]) ?? {}),
    _0x55fe0c =
      _0x3b26c1 === e[_0x35b974(653)][_0x35b974(1152)] ||
      e[_0x35b974(1226)][_0x35b974(1429)](
        _0x3b26c1,
        e[_0x35b974(653)][_0x35b974(999)],
      ),
    _0x57c79e = L(Ke);
  if (_0x196e15[_0x35b974(1579)] === 0) return null;
  let _0x210887 = (_0x14cd5d) => {
      _0x23794f !== null &&
        _0x3e234e({
          dataPoints: {
            ..._0x5dbd44.dataPoints,
            [_0x23794f]: { ..._0x1247bb, ..._0x14cd5d },
          },
        });
    },
    _0x17806d = () => {
      const _0x57a3f0 = _0x35b974;
      _0x23794f !== null &&
        (_0x3e234e({
          dataPoints: { ..._0x5dbd44[_0x57a3f0(1307)], [_0x23794f]: undefined },
        }),
        _0x1cf052(""));
    };
  return (0, i.jsxs)(i[_0x35b974(1762)], {
    children: [
      (0, i[_0x35b974(922)])(A, {
        label: _0x4c9793.t(_0x35b974(806)),
        options: [
          { value: "", label: _0x4c9793.t(_0x35b974(1351)) },
          ..._0x196e15,
        ],
        value: _0x33a0aa,
        onChange: (_0x443edd) => {
          const _0x5003a8 = _0x35b974;
          var _0x89469e;
          _0x1cf052(_0x443edd);
          let _0x41f780 = _0x443edd === "" ? null : Number(_0x443edd);
          _0x41f780 !== null &&
            !(
              (_0x89469e = _0x5dbd44[_0x5003a8(1307)]) != null &&
              _0x89469e[_0x41f780]
            ) &&
            _0x3e234e({
              dataPoints: { ..._0x5dbd44[_0x5003a8(1307)], [_0x41f780]: {} },
            });
        },
      }),
      _0x23794f !== null &&
        (0, i[_0x35b974(1557)])(i[_0x35b974(1762)], {
          children: [
            (0, i[_0x35b974(1557)])(O, {
              children: [
                (0, i[_0x35b974(922)])(M, {
                  emptyLabel: _0x4c9793.t(_0x35b974(819)),
                  label: _0x4c9793.t(_0x35b974(677)),
                  pickerFallbackValue: _0x18ad8f.color,
                  resetLabel: _0x4c9793.t("chart-ui.editor.defaultColor"),
                  value: gr(_0x1247bb[_0x35b974(1393)]),
                  onChange: (_0x58c759) => _0x210887({ color: _0x58c759 }),
                }),
                (0, i[_0x35b974(922)])(t[_0x35b974(1420)], {
                  "aria-label": _0x4c9793.t(_0x35b974(1450)),
                  size: _0x35b974(534),
                  variant: _0x35b974(1245),
                  onClick: _0x17806d,
                  children: (0, i.jsx)(n.DeleteIcon, {}),
                }),
              ],
            }),
            _0x55fe0c &&
              (0, i[_0x35b974(1557)])(O, {
                children: [
                  (0, i[_0x35b974(922)])(A, {
                    label: _0x4c9793.t(_0x35b974(1913)),
                    options: vn.map(
                      ({ labelKey: _0xbd3375, value: _0x1ba700 }) => ({
                        label: _0x4c9793.t(_0xbd3375),
                        value: _0x1ba700,
                      }),
                    ),
                    value:
                      _0x1247bb[_0x35b974(543)] ?? _0x18ad8f[_0x35b974(1517)],
                    onChange: (_0x3fca2b) => _0x210887({ shape: _0x3fca2b }),
                  }),
                  (0, i[_0x35b974(922)])(A, {
                    label: _0x4c9793.t(_0x35b974(1065)),
                    options: K(
                      _0x4c9793.t("chart-ui.common.default"),
                      Xe(_0x57c79e),
                    ),
                    value: W(_0x1247bb[_0x35b974(850)]),
                    onChange: (_0x1fd9f7) => _0x210887({ size: G(_0x1fd9f7) }),
                  }),
                ],
              }),
          ],
        }),
    ],
  });
}
function Tr() {
  let { series: _0x4326e1, selected: _0x33efd5, setSelected: _0x36387e } = J(),
    _0x2f1982 = (0, o.useDependency)(a[_0x512ec1(1419)]),
    _0x253414 = [
      { value: "all", label: _0x2f1982.t(_0x512ec1(522)) },
      ..._0x4326e1[_0x512ec1(1285)]((_0x31a058) => ({
        value: String(_0x31a058[_0x512ec1(1301)]),
        label: _0x31a058[_0x512ec1(1391)],
      })),
    ];
  return (0, i.jsx)(A, {
    label: _0x2f1982.t("chart-ui.common.series"),
    options: _0x253414,
    value: _0x33efd5,
    onChange: _0x36387e,
  });
}
function Er(_0x2dc523) {
  let {
      chartType: _0x5bfa64,
      patchStyle: _0x220ff3,
      selector: _0x5326a6,
      series: _0xfcdcf5,
      setSeries: _0x13af36,
    } = J(),
    _0x4aab1f = (0, o.useDependency)(a[_0x51fcef(1419)]);
  if (
    _0x5bfa64 !== e[_0x51fcef(653)].Combination ||
    (_0x2dc523[_0x51fcef(829)] && _0x5326a6 === null)
  )
    return null;
  let _0x2c12aa = xr(_0xfcdcf5, _0x5326a6);
  return (0, i.jsx)(A, {
    label: _0x4aab1f.t("chart-ui.common.chartType"),
    options: [
      { value: "", label: _0x4aab1f.t(_0x51fcef(1351)) },
      {
        value: e[_0x51fcef(1475)][_0x51fcef(1218)],
        label: _0x4aab1f.t(_0x51fcef(1533)),
      },
      {
        value: e[_0x51fcef(1475)].ColumnStacked,
        label: _0x4aab1f.t("chart-ui.chartTypes.columnStacked"),
      },
      {
        value: e[_0x51fcef(1475)][_0x51fcef(1152)],
        label: _0x4aab1f.t("chart-ui.chartTypes.line"),
      },
      {
        value: e.ChartSeriesTypeString[_0x51fcef(999)],
        label: _0x4aab1f.t(_0x51fcef(1681)),
      },
      {
        value: e[_0x51fcef(1475)][_0x51fcef(541)],
        label: _0x4aab1f.t(_0x51fcef(1830)),
      },
    ],
    value: _0x2c12aa,
    onChange: (_0x11f40d) => {
      const _0x4982a1 = _0x51fcef;
      if (_0x11f40d !== "") {
        if (_0x5326a6 === null) {
          _0x13af36(
            _0xfcdcf5[_0x4982a1(1285)]((_0xa21e53) => ({
              ..._0xa21e53,
              style: _r(_0xa21e53[_0x4982a1(1169)], { type: _0x11f40d }),
            })),
          );
          return;
        }
        _0x220ff3({ type: _0x11f40d });
      }
    },
  });
}
function Dr() {
  let {
      defaultValues: _0x199f82,
      patchStyle: _0xcd60f9,
      style: _0x1968be,
    } = J(),
    _0x5b18d5 = Gt().direction,
    _0x2ca725 = (0, o[_0xb54a7d(858)])(a[_0xb54a7d(1419)]);
  return (0, i[_0xb54a7d(922)])(H, {
    inlineLabel: true,
    checked: _0x1968be[_0xb54a7d(1498)] ?? _0x199f82.rightAxis[_0x5b18d5],
    label: _0x2ca725.t(_0xb54a7d(1036)),
    onChange: (_0x19b207) => _0xcd60f9({ rightAxis: _0x19b207 }),
  });
}
function Or() {
  let {
      chartType: _0x3a5806,
      defaultValues: _0x53049d,
      patchStyle: _0x4987b3,
      style: _0x18e66f,
    } = J(),
    _0x57bce7 = (0, o[_0x13ac5a(858)])(a.LocaleService),
    _0x420e31 =
      _0x3a5806 === e[_0x13ac5a(653)].Radar
        ? _0x53049d[_0x13ac5a(580)]
        : _0x53049d.seriesFillOpacity;
  return (0, i.jsxs)(O, {
    children: [
      (0, i[_0x13ac5a(922)])(M, {
        emptyLabel: _0x57bce7.t(_0x13ac5a(819)),
        label: _0x57bce7.t(_0x13ac5a(677)),
        pickerFallbackValue: _0x53049d[_0x13ac5a(1393)],
        resetLabel: _0x57bce7.t(_0x13ac5a(819)),
        value: gr(_0x18e66f[_0x13ac5a(1393)]),
        onChange: (_0x2c105f) => _0x4987b3({ color: _0x2c105f }),
      }),
      (0, i.jsx)(A, {
        label: _0x57bce7.t(_0x13ac5a(693)),
        options: Ye(),
        value: String(_0x18e66f[_0x13ac5a(944)] ?? _0x420e31),
        onChange: (_0x1a1f07) => _0x4987b3({ fillOpacity: Number(_0x1a1f07) }),
      }),
    ],
  });
}
function kr(_0x24f67e) {
  let {
      defaultValues: _0x140ec1,
      patchStyle: _0x2e9c49,
      style: _0x2720ca,
    } = J(),
    _0x111cb0 = (0, o[_0x2db95b(858)])(a[_0x2db95b(1419)]),
    _0x4a1249 = _0x2720ca.border ?? {},
    _0x302c96 = L(Ge);
  return (0, i[_0x2db95b(1557)])(i[_0x2db95b(1762)], {
    children: [
      (_0x24f67e[_0x2db95b(1561)] !== false ||
        _0x24f67e[_0x2db95b(1619)] !== false) &&
        (0, i.jsxs)(O, {
          children: [
            _0x24f67e[_0x2db95b(1561)] !== false &&
              (0, i[_0x2db95b(922)])(M, {
                emptyLabel: _0x111cb0.t("chart-ui.editor.defaultColor"),
                label: _0x111cb0.t(_0x2db95b(1196)),
                pickerFallbackValue: _0x140ec1.color,
                resetLabel: _0x111cb0.t(_0x2db95b(819)),
                value: _0x4a1249[_0x2db95b(1393)] ?? null,
                onChange: (_0xb1a6f2) =>
                  _0x2e9c49({ border: { ..._0x4a1249, color: _0xb1a6f2 } }),
              }),
            _0x24f67e[_0x2db95b(1619)] !== false &&
              (0, i[_0x2db95b(922)])(A, {
                label: _0x111cb0.t("chart-ui.series.borderOpacity"),
                options: Ye(),
                value: String(
                  _0x4a1249[_0x2db95b(577)] ?? _0x140ec1[_0x2db95b(1021)],
                ),
                onChange: (_0x523f67) =>
                  _0x2e9c49({
                    border: { ..._0x4a1249, opacity: Number(_0x523f67) },
                  }),
              }),
          ],
        }),
      (0, i[_0x2db95b(1557)])(O, {
        children: [
          (0, i[_0x2db95b(922)])(A, {
            label: _0x111cb0.t(_0x2db95b(1128)),
            options: K(_0x111cb0.t(_0x2db95b(1990)), Xe(_0x302c96)),
            value: W(_0x4a1249[_0x2db95b(989)]),
            onChange: (_0x2348ff) =>
              _0x2e9c49({ border: { ..._0x4a1249, width: G(_0x2348ff) } }),
          }),
          (0, i.jsx)(A, {
            label: _0x111cb0.t(_0x2db95b(844)),
            options: _n[_0x2db95b(1285)](
              ({ labelKey: _0x435031, value: _0x1a7dc4 }) => ({
                label: _0x111cb0.t(_0x435031),
                value: _0x1a7dc4,
              }),
            ),
            value: _0x4a1249[_0x2db95b(704)] ?? _0x140ec1[_0x2db95b(917)],
            onChange: (_0xb3c8d0) =>
              _0x2e9c49({ border: { ..._0x4a1249, dashType: _0xb3c8d0 } }),
          }),
        ],
      }),
    ],
  });
}
function Ar(_0xb73450) {
  let {
      patchStyle: _0x264654,
      defaultValues: _0x93170e,
      style: _0x304e98,
    } = J(),
    _0xda5702 = (0, o[_0x9609bd(858)])(a[_0x9609bd(1419)]),
    _0x6ec84f = _0x304e98[_0x9609bd(1178)] ?? {},
    _0x282125 = L(Ke);
  return (0, i[_0x9609bd(1557)])(i.Fragment, {
    children: [
      _0xb73450[_0x9609bd(1561)] !== false &&
        (0, i[_0x9609bd(922)])(M, {
          emptyLabel: _0xda5702.t(_0x9609bd(819)),
          label: _0xda5702.t(_0x9609bd(1397)),
          pickerFallbackValue: _0x93170e[_0x9609bd(1393)],
          resetLabel: _0xda5702.t(_0x9609bd(819)),
          value: gr(_0x6ec84f[_0x9609bd(1393)]),
          onChange: (_0x2ee70c) =>
            _0x264654({ point: { ..._0x6ec84f, color: _0x2ee70c } }),
        }),
      (0, i[_0x9609bd(1557)])(O, {
        children: [
          (0, i[_0x9609bd(922)])(A, {
            label: _0xda5702.t(_0x9609bd(1913)),
            options: vn[_0x9609bd(1285)](
              ({ labelKey: _0x3fabd4, value: _0x57d439 }) => ({
                label: _0xda5702.t(_0x3fabd4),
                value: _0x57d439,
              }),
            ),
            value: _0x6ec84f[_0x9609bd(543)] ?? _0x93170e.pointShape,
            onChange: (_0x24d5cf) =>
              _0x264654({ point: { ..._0x6ec84f, shape: _0x24d5cf } }),
          }),
          (0, i[_0x9609bd(922)])(A, {
            label: _0xda5702.t("chart-ui.series.pointSize"),
            options: K(_0xda5702.t(_0x9609bd(1990)), Xe(_0x282125)),
            value: W(_0x6ec84f.size),
            onChange: (_0x2533bc) =>
              _0x264654({ point: { ..._0x6ec84f, size: G(_0x2533bc) } }),
          }),
        ],
      }),
    ],
  });
}
function jr() {
  let _0x1df1d1 = J(),
    _0xb182b = _0x1df1d1[_0x544623(1169)][_0x544623(1614)] ?? {},
    _0x216cfc = (_0x3d34e9) =>
      _0x1df1d1[_0x544623(1925)]({ label: { ..._0xb182b, ..._0x3d34e9 } });
  return { ..._0x1df1d1, label: _0xb182b, patchLabel: _0x216cfc };
}
function Mr() {
  let {
      defaultValues: _0x13eb66,
      label: _0x5651f9,
      patchLabel: _0x10687b,
    } = jr(),
    _0x348a67 = (0, o.useDependency)(a[_0x902827(1419)]);
  return (0, i[_0x902827(922)])(H, {
    inlineLabel: true,
    checked: _0x5651f9[_0x902827(1755)] ?? _0x13eb66[_0x902827(979)],
    label: _0x348a67.t(_0x902827(1719)),
    onChange: (_0x17ee30) => _0x10687b({ visible: _0x17ee30 }),
  });
}
function Nr() {
  let {
      chartType: _0x1e5e11,
      defaultValues: _0x364aa7,
      label: _0x10f022,
      patchLabel: _0x180b87,
      seriesType: _0x2fe7f4,
    } = jr(),
    _0x32f508 = (0, o[_0x5731a3(858)])(a.LocaleService),
    _0xb609c = _0x2fe7f4 === e[_0x5731a3(653)][_0x5731a3(479)],
    _0x2d7556 = [
      {
        value: String(e[_0x5731a3(1567)][_0x5731a3(602)]),
        label: _0x32f508.t(_0x5731a3(925)),
      },
      {
        value: String(e.LabelContentType[_0x5731a3(1694)]),
        label: _0x32f508.t(_0x5731a3(1738)),
      },
      {
        value: String(e.LabelContentType[_0x5731a3(624)]),
        label: _0x32f508.t(_0x5731a3(545)),
      },
      ...(mr[_0x5731a3(863)](_0x1e5e11)
        ? [
            {
              value: String(e[_0x5731a3(1567)][_0x5731a3(754)]),
              label: _0x32f508.t(_0x5731a3(726)),
            },
          ]
        : []),
    ][_0x5731a3(1573)](
      (_0x4ba842) =>
        !_0xb609c ||
        (_0x4ba842.value !== String(e[_0x5731a3(1567)].SeriesName) &&
          _0x4ba842[_0x5731a3(1324)] !== String(e[_0x5731a3(1567)].Percentage)),
    );
  return (0, i[_0x5731a3(922)])(cr, {
    label: _0x32f508.t(_0x5731a3(1466)),
    options: _0x2d7556,
    value: Sr(_0x10f022[_0x5731a3(1108)] ?? _0x364aa7[_0x5731a3(1655)]),
    onChange: (_0x5d0736) => {
      const _0x1f3f42 = _0x5731a3;
      _0x5d0736.length !== 0 &&
        _0x180b87({
          contentType: _0x5d0736
            .map(Number)
            [_0x1f3f42(900)]((_0x510384, _0x43dc09) => _0x510384 | _0x43dc09),
        });
    },
  });
}
function Pr() {
  let {
      defaultValues: _0x18d8ea,
      label: _0x75e258,
      patchLabel: _0x568eec,
    } = jr(),
    _0x2a34d0 = (0, o[_0x40dc55(858)])(a[_0x40dc55(1419)]);
  return (0, i.jsx)(A, {
    label: _0x2a34d0.t(_0x40dc55(1668)),
    options: [
      {
        value: e[_0x40dc55(1727)][_0x40dc55(733)],
        label: _0x2a34d0.t(_0x40dc55(893)),
      },
      {
        value: e.SeriesLabelPosition[_0x40dc55(1934)],
        label: _0x2a34d0.t(_0x40dc55(2031)),
      },
      {
        value: e[_0x40dc55(1727)][_0x40dc55(1672)],
        label: _0x2a34d0.t(_0x40dc55(1892)),
      },
      {
        value: e[_0x40dc55(1727)][_0x40dc55(477)],
        label: _0x2a34d0.t(_0x40dc55(1560)),
      },
      {
        value: e[_0x40dc55(1727)][_0x40dc55(1210)],
        label: _0x2a34d0.t(_0x40dc55(1935)),
      },
      {
        value: e[_0x40dc55(1727)].Bottom,
        label: _0x2a34d0.t("chart-ui.common.position.bottom"),
      },
    ],
    value: _0x75e258[_0x40dc55(1712)] ?? _0x18d8ea[_0x40dc55(1336)],
    onChange: (_0x5cb605) => _0x568eec({ position: _0x5cb605 }),
  });
}
function Fr() {
  let {
    label: _0x435929,
    NumberFormatField: _0x6840cb,
    patchLabel: _0x56c37b,
  } = jr();
  return (0, i.jsx)(_0x6840cb, {
    label: (0, o[_0x489a5c(858)])(a.LocaleService).t(_0x489a5c(587)),
    value: _0x435929.format,
    onChange: (_0x1338ac) => _0x56c37b({ format: _0x1338ac }),
  });
}
function Ir() {
  let {
      defaultValues: _0x1b7799,
      label: _0x1d1c19,
      patchLabel: _0x18caee,
    } = jr(),
    _0x4c3c44 = (0, o[_0x501655(858)])(a.LocaleService),
    _0x12d7d8 = z(_0x1d1c19, R);
  return (0, i[_0x501655(922)])(V, {
    colorPickerFallbackValue: _0x1b7799[_0x501655(1393)],
    label: _0x4c3c44.t("chart-ui.common.font"),
    value: _0x12d7d8,
    onChange: (_0x733dab) => _0x18caee(B(_0x733dab)),
  });
}
function Lr() {
  let { label: _0x5ceff9, patchLabel: _0x205ccd } = jr(),
    _0x24126c = (0, o[_0x89d1a2(858)])(a[_0x89d1a2(1419)]);
  return (0, i[_0x89d1a2(922)])(k, {
    allowClear: true,
    allowEmpty: true,
    emptyLabel: _0x24126c.t(_0x89d1a2(1990)),
    label: _0x24126c.t(_0x89d1a2(2018)),
    min: 8,
    value: _0x5ceff9.fontSize ?? null,
    onChange: (_0xfb6c1d) => _0x205ccd({ fontSize: _0xfb6c1d }),
  });
}
function Rr() {
  let { label: _0xb08c7b } = jr();
  return (0, i.jsxs)(i[_0x1d252c(1762)], {
    children: [
      (0, i[_0x1d252c(922)])(Mr, {}),
      _0xb08c7b[_0x1d252c(1755)] &&
        (0, i[_0x1d252c(1557)])(i[_0x1d252c(1762)], {
          children: [
            (0, i.jsx)(Nr, {}),
            (0, i[_0x1d252c(922)])(Pr, {}),
            (0, i[_0x1d252c(922)])(Fr, {}),
            (0, i[_0x1d252c(922)])(Ir, {}),
          ],
        }),
    ],
  });
}
function zr(_0x178930) {
  let [_0xc411da] = N("chartType", e[_0x59e559(653)].None),
    [_0x5b52df, _0x4c8f39] = N(_0x59e559(1364)),
    [_0x2b10c5, _0x4a5c57] = N(_0x59e559(837), []),
    [_0x26e0d9, _0x5dc538] = (0, r[_0x59e559(1825)])({
      source: _0x178930[_0x59e559(1717)],
      value: _0x178930[_0x59e559(1717)] ?? _0x59e559(1542),
    }),
    _0x411568 =
      _0x26e0d9.source === _0x178930[_0x59e559(1717)]
        ? _0x26e0d9[_0x59e559(1324)]
        : (_0x178930.selectedSeriesId ?? "all"),
    _0x53eb4b = (0, r[_0x59e559(1365)])(
      (_0x60e87a) =>
        _0x5dc538({ source: _0x178930[_0x59e559(1717)], value: _0x60e87a }),
      [_0x178930[_0x59e559(1717)]],
    ),
    _0x4ba0e3 = _0x411568 === _0x59e559(1542) ? null : Number(_0x411568),
    _0x13c37c =
      _0x4ba0e3 === null
        ? undefined
        : _0x2b10c5[_0x59e559(1507)](
            (_0x55b523) => _0x55b523[_0x59e559(1301)] === _0x4ba0e3,
          ),
    _0x3ff78c =
      _0x4ba0e3 === null
        ? (_0x5b52df ?? {})
        : ((_0x13c37c == null ? undefined : _0x13c37c[_0x59e559(1169)]) ?? {}),
    _0x222986 = _0x4ba0e3 === null ? _0x3ff78c : _r(_0x5b52df, _0x3ff78c),
    _0x4d5dc6 = (0, r.useCallback)(
      (_0x55db6f) => {
        const _0x3b4ef5 = _0x59e559;
        if (_0x4ba0e3 === null) {
          _0x4c8f39(_r(_0x5b52df, _0x55db6f));
          return;
        }
        _0x4a5c57([
          {
            dataPointOptions:
              (_0x13c37c == null ? undefined : _0x13c37c[_0x3b4ef5(1251)]) ??
              [],
            name:
              (_0x13c37c == null ? undefined : _0x13c37c[_0x3b4ef5(1391)]) ??
              "",
            selector: _0x4ba0e3,
            style: _r(
              _0x13c37c == null ? undefined : _0x13c37c.style,
              _0x55db6f,
            ),
          },
        ]);
      },
      [_0x5b52df, _0x13c37c, _0x4ba0e3, _0x4c8f39, _0x4a5c57],
    ),
    _0x5e49d6 =
      _0xc411da === e[_0x59e559(653)][_0x59e559(1961)]
        ? xr(_0x2b10c5, _0x4ba0e3)
        : "",
    _0x3122c2 =
      _0xc411da === e.ChartTypeBits[_0x59e559(1961)]
        ? br(_0x5e49d6)
        : undefined,
    _0x56a3a5 = (0, r[_0x59e559(1687)])(
      () => ({
        chartType: _0xc411da,
        dataPointOptions:
          (_0x13c37c == null ? undefined : _0x13c37c[_0x59e559(1251)]) ?? pr,
        defaultValues: _0x178930[_0x59e559(801)],
        isAllSeries: _0x4ba0e3 === null,
        NumberFormatField: _0x178930.NumberFormatField ?? At,
        patchStyle: _0x4d5dc6,
        selector: _0x4ba0e3,
        selected: _0x411568,
        series: _0x2b10c5,
        seriesType: _0x3122c2 ?? vr(_0xc411da, _0x222986),
        setSelected: _0x53eb4b,
        setSeries: _0x4a5c57,
        style: _0x222986,
      }),
      [
        _0xc411da,
        _0x13c37c == null ? undefined : _0x13c37c[_0x59e559(1251)],
        _0x222986,
        _0x4d5dc6,
        _0x178930[_0x59e559(1902)],
        _0x178930[_0x59e559(801)],
        _0x3122c2,
        _0x411568,
        _0x4ba0e3,
        _0x2b10c5,
        _0x53eb4b,
        _0x4a5c57,
      ],
    );
  return (0, i[_0x59e559(922)])(Cr.Provider, {
    value: _0x56a3a5,
    children: (0, i[_0x59e559(922)])(_0x59e559(1998), {
      className: _0x59e559(1556),
      children: _0x178930[_0x59e559(1492)],
    }),
  });
}
function Br() {
  let {
      chartType: _0x2c1b85,
      isAllSeries: _0x2e305e,
      seriesType: _0x1ac9c2,
    } = J(),
    _0x1cbe7f = _0x1ac9c2 === e[_0x507d0b(653)].Line,
    _0x2d81dc = e.chartBitsUtils[_0x507d0b(1429)](
      _0x1ac9c2,
      e[_0x507d0b(653)].Area,
    ),
    _0x31e107 = _0x1ac9c2 === e.ChartTypeBits[_0x507d0b(479)],
    _0x1c4f09 = _0x1ac9c2 === e[_0x507d0b(653)][_0x507d0b(1546)],
    _0x2be6b2 = !_0x1c4f09 || !_0x2e305e,
    _0x13ff3b = !_0x1c4f09,
    _0xbd9383 =
      _0x1cbe7f || _0x2d81dc || _0x1c4f09 || (_0x31e107 && !_0x2e305e);
  return (0, i[_0x507d0b(1557)])(i[_0x507d0b(1762)], {
    children: [
      !_0x2e305e &&
        !e[_0x507d0b(1226)][_0x507d0b(1429)](
          _0x2c1b85,
          e[_0x507d0b(653)].Bar,
        ) &&
        _0x2c1b85 !== e.ChartTypeBits[_0x507d0b(479)] &&
        (0, i[_0x507d0b(922)])(Dr, {}),
      _0x2be6b2 && (0, i[_0x507d0b(922)])(Or, {}),
      _0x13ff3b &&
        (0, i[_0x507d0b(922)])(kr, {
          showColor: !_0x1cbe7f,
          showOpacity: !_0x1cbe7f,
        }),
      _0xbd9383 && (0, i[_0x507d0b(922)])(Ar, { showColor: !_0x2e305e }),
      (0, i[_0x507d0b(922)])(Rr, {}),
      !_0x2e305e && !_0x31e107 && (0, i.jsx)(wr, {}),
    ],
  });
}
function Vr(_0x590b0d) {
  return (0, i[_0x52b52a(1557)])(zr, {
    ..._0x590b0d,
    children: [
      (0, i[_0x52b52a(922)])(Tr, {}),
      (0, i[_0x52b52a(922)])(Er, {}),
      (0, i[_0x52b52a(922)])(Br, {}),
    ],
  });
}
const Hr = [
  e.ChartTypeBits["Area"],
  e.ChartTypeBits["Bar"],
  e.ChartTypeBits["Column"],
];
function Ur(_0xdb0ddd) {
  let _0x1f7865 = (0, o.useDependency)(a[_0x34a174(1419)]),
    _0x4b8c8f = Xt(_0xdb0ddd[_0x34a174(1822)]);
  return (0, i[_0x34a174(922)])(A, {
    label: _0x1f7865.t(_0x34a174(1104)),
    options: _0xdb0ddd[_0x34a174(1822)],
    value: _0x4b8c8f.value,
    onChange: (_0x79a5c3) => {
      const _0x3d1a0a = _0x34a174;
      var _0x2607ec;
      let _0x564c56 = _0x4b8c8f[_0x3d1a0a(734)](_0x79a5c3);
      (_0x2607ec = _0xdb0ddd[_0x3d1a0a(507)]) == null ||
        _0x2607ec[_0x3d1a0a(678)](_0xdb0ddd, _0x564c56);
    },
  });
}
function Wr() {
  let _0x221a1f = (0, o[_0x213a41(858)])(a[_0x213a41(1419)]),
    _0x25d8f7 = (0, o[_0x213a41(858)])(e[_0x213a41(825)]),
    _0x51ab90 = _0x25d8f7[_0x213a41(969)](),
    _0x1e1d92 = (0, r[_0x213a41(1687)])(
      () => Ue(_0x51ab90, (_0x3af6a3) => _0x25d8f7[_0x213a41(724)](_0x3af6a3)),
      [_0x25d8f7, _0x51ab90],
    ),
    [_0x326867, _0x8f1ea5] = N(_0x213a41(1162));
  return (0, i[_0x213a41(922)])(A, {
    label: _0x221a1f.t("chart-ui.presentation.theme"),
    options: _0x1e1d92,
    value: _0x326867 ?? _0x51ab90[0] ?? "",
    onChange: (_0x208d40) => _0x8f1ea5(_0x208d40 || undefined),
  });
}
function Gr(_0x341355) {
  let _0x59a8c1 = (0, o[_0x173d8e(858)])(a.LocaleService),
    [_0x177c00] = N("chartType", e[_0x173d8e(653)][_0x173d8e(1859)]),
    [_0x50792a, _0x482843] = N("autoGradientFill");
  return _0x341355.visible
    ? (0, i[_0x173d8e(922)])(H, {
        inlineLabel: true,
        checked:
          _0x50792a ??
          e[_0x173d8e(1226)][_0x173d8e(1429)](
            _0x177c00,
            e[_0x173d8e(653)][_0x173d8e(999)],
          ),
        label: _0x59a8c1.t(_0x173d8e(633)),
        onChange: _0x482843,
      })
    : null;
}
function Kr() {
  let _0x2a9c39 = (0, o[_0x1be701(858)])(a[_0x1be701(1419)]),
    [_0xba9e02, _0x303920] = N(_0x1be701(553), e[_0x1be701(653)].None);
  return Hr[_0x1be701(1399)]((_0xa4dbe) =>
    e[_0x1be701(1226)][_0x1be701(1429)](_0xba9e02, _0xa4dbe),
  )
    ? (0, i[_0x1be701(922)])(A, {
        label: _0x2a9c39.t(_0x1be701(1763)),
        options: [
          { value: "", label: _0x2a9c39.t("chart-ui.common.none") },
          {
            value: e.StackType[_0x1be701(1747)],
            label: _0x2a9c39.t("chart-ui.common.stacked"),
          },
          {
            value: e[_0x1be701(1610)].Percent,
            label: _0x2a9c39.t(_0x1be701(680)),
          },
        ],
        value: (0, e[_0x1be701(972)])(_0xba9e02) || "",
        onChange: (_0x3bc47b) =>
          _0x303920((0, e[_0x1be701(1045)])(_0xba9e02, _0x3bc47b)),
      })
    : null;
}
const qr = {
  stackType: e.WaterfallStackTypeEnum["Arrangement"],
  useSubtotal: true,
};
function Jr(_0x1d9099) {
  let _0x180641 = (0, o[_0x27ad32(858)])(a[_0x27ad32(1419)]),
    [_0x431a0c] = N(_0x27ad32(553), e[_0x27ad32(653)].None),
    [_0x4b6468, _0x51b3bc] = N("waterfall");
  return e[_0x27ad32(1226)].baseOn(
    _0x431a0c,
    e[_0x27ad32(653)][_0x27ad32(1766)],
  )
    ? (0, i[_0x27ad32(1557)])(i.Fragment, {
        children: [
          (0, i[_0x27ad32(922)])(A, {
            label: _0x180641.t(_0x27ad32(1343)),
            options: [
              {
                value: e[_0x27ad32(1195)][_0x27ad32(2009)],
                label: _0x180641.t(_0x27ad32(695)),
              },
              {
                value: e.WaterfallStackTypeEnum[_0x27ad32(1747)],
                label: _0x180641.t("chart-ui.common.stacked"),
              },
            ],
            value:
              (_0x4b6468 == null ? undefined : _0x4b6468[_0x27ad32(1824)]) ??
              _0x1d9099[_0x27ad32(801)].stackType,
            onChange: (_0x1d5a34) =>
              _0x51b3bc({ ..._0x4b6468, stackType: _0x1d5a34 }),
          }),
          (0, i[_0x27ad32(922)])(H, {
            inlineLabel: true,
            checked:
              (_0x4b6468 == null ? undefined : _0x4b6468[_0x27ad32(2039)]) ??
              _0x1d9099[_0x27ad32(801)][_0x27ad32(2039)],
            label: _0x180641.t(_0x27ad32(986)),
            onChange: (_0x527cc9) =>
              _0x51b3bc({ ..._0x4b6468, useSubtotal: _0x527cc9 }),
          }),
        ],
      })
    : null;
}
const Yr = {
  backgroundColor: e.defaultChartConfig["backgroundColor"],
  borderColor: e.defaultChartConfig["textStyle"].color,
};
function Xr(_0x48f007) {
  var _0x1f7583, _0x38787f;
  let _0x447dd2 = (0, o.useDependency)(a.LocaleService),
    [_0x29fbdf, _0x51483f] = N(_0x193064(1575)),
    _0x3497cc =
      (_0x29fbdf == null || (_0x1f7583 = _0x29fbdf[_0x193064(1417)]) == null
        ? undefined
        : _0x1f7583[_0x193064(1393)]) ?? null,
    _0x23f608 =
      (_0x29fbdf == null || (_0x38787f = _0x29fbdf[_0x193064(1464)]) == null
        ? undefined
        : _0x38787f[_0x193064(1393)]) ?? null;
  return (0, i[_0x193064(1557)])(_0x193064(1998), {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [
      (0, i[_0x193064(922)])(M, {
        emptyLabel: _0x447dd2.t(_0x193064(819)),
        label: _0x447dd2.t(_0x193064(783)),
        pickerFallbackValue:
          _0x3497cc ?? _0x48f007[_0x193064(801)][_0x193064(833)],
        resetLabel: _0x447dd2.t(_0x193064(819)),
        transparentLabel: _0x447dd2.t(_0x193064(1663)),
        value: _0x3497cc,
        onChange: (_0xf1d5e8) =>
          _0x51483f({
            ..._0x29fbdf,
            background: {
              ...(_0x29fbdf == null ? undefined : _0x29fbdf[_0x193064(1417)]),
              color: _0xf1d5e8,
            },
          }),
      }),
      _0x48f007.hostBorder ??
        (0, i[_0x193064(922)])(M, {
          emptyLabel: _0x447dd2.t(_0x193064(819)),
          label: _0x447dd2.t("chart-ui.common.borderColor"),
          pickerFallbackValue:
            _0x23f608 ?? _0x48f007[_0x193064(801)][_0x193064(1881)],
          resetLabel: _0x447dd2.t(_0x193064(819)),
          value: _0x23f608,
          onChange: (_0x13ce27) =>
            _0x51483f({
              ..._0x29fbdf,
              border: {
                ...(_0x29fbdf == null ? undefined : _0x29fbdf.border),
                color: _0x13ce27,
              },
            }),
        }),
    ],
  });
}
const Zr = [
    {
      value: e.LabelAlignEnum["Left"],
      labelKey: "chart-ui.common.textAlign.left",
    },
    {
      value: e.LabelAlignEnum["Center"],
      labelKey: "chart-ui.common.textAlign.center",
    },
    {
      value: e.LabelAlignEnum["Right"],
      labelKey: "chart-ui.common.textAlign.right",
    },
  ],
  Qr = [
    { value: "title", labelKey: "chart-ui.common.chartTitle" },
    { value: "subtitle", labelKey: "chart-ui.common.subtitle" },
  ],
  $r = [
    {
      value: "horizontalAxis",
      labelKey: "chart-ui.presentation.horizontalAxisTitle",
    },
    {
      value: "verticalAxis",
      labelKey: "chart-ui.presentation.verticalAxisTitle",
    },
    {
      value: "rightVerticalAxis",
      labelKey: "chart-ui.presentation.rightVerticalAxisTitle",
    },
  ];
function ei(_0x328063, _0x1f7f13) {
  if (_0x328063 === "x") return _0x591f19(1547);
  let _0x4021aa = _0x1f7f13.find((_0x3b115a) =>
    _0x3b115a[_0x591f19(1712)] !== e[_0x591f19(892)][_0x591f19(1672)] &&
    _0x3b115a[_0x591f19(1712)] !== e.IRuntimeAxisPosition[_0x591f19(477)]
      ? false
      : _0x328063 === _0x591f19(1872)
        ? _0x3b115a[_0x591f19(1906)] === e[_0x591f19(1483)][_0x591f19(1846)]
        : _0x3b115a.priority !== e.IRuntimeAxisPriority["Tertiary"],
  );
  return _0x4021aa
    ? _0x4021aa[_0x591f19(1712)] === e.IRuntimeAxisPosition[_0x591f19(477)]
      ? _0x591f19(1274)
      : "chart-ui.presentation.verticalAxisTitle"
    : _0x328063 === "rightY"
      ? _0x591f19(1274)
      : _0x591f19(1833);
}
const ti = {
  axisTitleAlignment: e.defaultChartConfig["axis"].titleAlign,
  axisTitleFont: R,
  mainTitleFont: {
    ...R,
    align: e.LabelAlignEnum["Center"],
    fontSize: e.defaultChartConfig["textStyle"].titleFontSize,
  },
  position: e.defaultChartConfig["titlePosition"],
  subtitleFont: {
    ...R,
    align: e.defaultChartConfig["textStyle"].align,
    fontSize: e.defaultChartConfig["textStyle"].subTitleFontSize,
  },
};
function ni(_0xde92a6) {
  return typeof _0xde92a6 == _0x36cee0(2002)
    ? { text: _0xde92a6 }
    : (_0xde92a6 ?? {});
}
function ri(_0x2e7c5e) {
  return typeof _0x2e7c5e == _0x422c60(2002)
    ? { text: _0x2e7c5e }
    : (_0x2e7c5e ?? {});
}
function ii(_0x3ecc81) {
  let _0x218b4c = (0, o[_0x264904(858)])(a[_0x264904(1419)]),
    [_0x1255b1, _0x3a5f30] = N("title"),
    _0x1d68b0 = ni(_0x1255b1),
    _0x3973d3 =
      _0x1d68b0[_0x264904(1755)] === false
        ? e[_0x264904(560)][_0x264904(1566)]
        : (_0x1d68b0[_0x264904(1712)] ??
          _0x3ecc81[_0x264904(801)][_0x264904(1712)]),
    _0x83a514 = z(
      { ..._0x1d68b0, align: _0x1d68b0[_0x264904(1157)] },
      _0x3ecc81.defaultValues[_0x264904(701)],
    ),
    _0x531f68 = Zr.map((_0x15f2a7) => ({
      value: _0x15f2a7[_0x264904(1324)],
      label: _0x218b4c.t(_0x15f2a7[_0x264904(1535)]),
    }));
  return (0, i[_0x264904(1557)])(i[_0x264904(1762)], {
    children: [
      (0, i[_0x264904(922)])(j, {
        allowClear: true,
        commitMode: _0x3ecc81[_0x264904(1486)],
        label: _0x218b4c.t(_0x264904(718)),
        value: _0x1d68b0[_0x264904(1245)] ?? "",
        onChange: (_0x50b4ab) => _0x3a5f30({ ..._0x1d68b0, text: _0x50b4ab }),
      }),
      (0, i[_0x264904(922)])(A, {
        label: _0x218b4c.t(_0x264904(1273)),
        options: [
          { value: e[_0x264904(560)].Top, label: _0x218b4c.t(_0x264904(1935)) },
          {
            value: e.TitlePositionEnum[_0x264904(1831)],
            label: _0x218b4c.t(_0x264904(1758)),
          },
          {
            value: e[_0x264904(560)].Left,
            label: _0x218b4c.t("chart-ui.common.position.left"),
          },
          {
            value: e[_0x264904(560)].Right,
            label: _0x218b4c.t(_0x264904(1560)),
          },
          {
            value: e[_0x264904(560)][_0x264904(1566)],
            label: _0x218b4c.t(_0x264904(1351)),
          },
        ],
        value: _0x3973d3,
        onChange: (_0x2a25c7) =>
          _0x3a5f30({
            ..._0x1d68b0,
            visible: _0x2a25c7 !== e.TitlePositionEnum[_0x264904(1566)],
            ...(_0x2a25c7 === e.TitlePositionEnum["Hide"]
              ? {}
              : { position: _0x2a25c7 }),
          }),
      }),
      _0x3ecc81[_0x264904(1328)] &&
        (0, i.jsx)(V, {
          alignLabel: _0x218b4c.t(_0x264904(1127)),
          alignOptions: _0x531f68,
          colorPickerFallbackValue:
            e[_0x264904(1790)][_0x264904(508)][_0x264904(1393)],
          label: _0x218b4c.t(_0x264904(852)),
          value: _0x83a514,
          onChange: (_0x12ea3d) => {
            let { align: _0x5649a2, ..._0x2132ca } = _0x12ea3d;
            _0x3a5f30({
              ..._0x1d68b0,
              ..._0x2132ca,
              ...(_0x5649a2 === undefined ? {} : { alignment: _0x5649a2 }),
            });
          },
        }),
    ],
  });
}
function ai(_0x59ab77) {
  let _0x56f810 = (0, o.useDependency)(a[_0x170c0c(1419)]),
    [_0x49eb35, _0x510530] = N(_0x170c0c(1247)),
    _0x10f6f7 = ri(_0x49eb35),
    _0x589e6b = z(
      { ..._0x10f6f7, align: _0x10f6f7.alignment },
      _0x59ab77[_0x170c0c(801)].subtitleFont,
    ),
    _0x9b7d9a = Zr.map((_0x4118ca) => ({
      value: _0x4118ca[_0x170c0c(1324)],
      label: _0x56f810.t(_0x4118ca.labelKey),
    }));
  return (0, i[_0x170c0c(1557)])(i[_0x170c0c(1762)], {
    children: [
      (0, i[_0x170c0c(922)])(j, {
        allowClear: true,
        commitMode: _0x59ab77[_0x170c0c(1486)],
        label: _0x56f810.t(_0x170c0c(1979)),
        value: _0x10f6f7[_0x170c0c(1245)] ?? "",
        onChange: (_0x1d30f8) => _0x510530({ ..._0x10f6f7, text: _0x1d30f8 }),
      }),
      _0x59ab77.showFont &&
        (0, i.jsx)(V, {
          alignLabel: _0x56f810.t(_0x170c0c(1127)),
          alignOptions: _0x9b7d9a,
          colorPickerFallbackValue:
            e[_0x170c0c(1790)][_0x170c0c(508)][_0x170c0c(1393)],
          label: _0x56f810.t(_0x170c0c(852)),
          value: _0x589e6b,
          onChange: (_0xed819e) => {
            let { align: _0x4cb6c0, ..._0x31bb27 } = _0xed819e;
            _0x510530({
              ..._0x10f6f7,
              ..._0x31bb27,
              ...(_0x4cb6c0 === undefined ? {} : { alignment: _0x4cb6c0 }),
            });
          },
        }),
    ],
  });
}
function oi(_0x2d7b45) {
  let _0x307bbf = (0, o.useDependency)(a[_0x5f9c2f(1419)]),
    _0x3d265c = Gt()[_0x5f9c2f(714)],
    [_0x37d1aa, _0x345f6c] = N(_0x5f9c2f(714)),
    _0x2c2f11 =
      (_0x37d1aa == null ? undefined : _0x37d1aa[_0x2d7b45[_0x5f9c2f(708)]]) ??
      {},
    _0x5623f0 = z(
      _0x2c2f11.titleStyle,
      _0x2d7b45.defaultValues[_0x5f9c2f(793)],
    ),
    _0x45fd13 = _0x307bbf.t(ei(_0x2d7b45.axis, _0x3d265c)),
    _0x301628 = [
      {
        value: e[_0x5f9c2f(1962)][_0x5f9c2f(1329)],
        label: _0x307bbf.t(_0x5f9c2f(1386)),
      },
      {
        value: e[_0x5f9c2f(1962)][_0x5f9c2f(820)],
        label: _0x307bbf.t(_0x5f9c2f(1231)),
      },
      {
        value: e[_0x5f9c2f(1962)][_0x5f9c2f(1270)],
        label: _0x307bbf.t(_0x5f9c2f(1153)),
      },
    ];
  return (0, i.jsxs)(i[_0x5f9c2f(1762)], {
    children: [
      (0, i[_0x5f9c2f(922)])(j, {
        allowClear: true,
        commitMode: _0x2d7b45[_0x5f9c2f(1486)],
        label: _0x45fd13,
        value: _0x2c2f11.title ?? "",
        onChange: (_0x288e0a) =>
          _0x345f6c({
            ..._0x37d1aa,
            [_0x2d7b45[_0x5f9c2f(708)]]: { ..._0x2c2f11, title: _0x288e0a },
          }),
      }),
      _0x2d7b45[_0x5f9c2f(1993)] &&
        (0, i[_0x5f9c2f(922)])(A, {
          label: _0x307bbf.t(_0x5f9c2f(1127)),
          options: _0x301628,
          value:
            _0x2c2f11[_0x5f9c2f(1909)] ??
            _0x2d7b45.defaultValues[_0x5f9c2f(1292)],
          onChange: (_0x390b9f) =>
            _0x345f6c({
              ..._0x37d1aa,
              [_0x2d7b45[_0x5f9c2f(708)]]: {
                ..._0x2c2f11,
                titleAlignment: _0x390b9f,
              },
            }),
        }),
      _0x2d7b45[_0x5f9c2f(1328)] &&
        (0, i[_0x5f9c2f(922)])(V, {
          colorPickerFallbackValue:
            e[_0x5f9c2f(1790)][_0x5f9c2f(508)][_0x5f9c2f(1393)],
          label: _0x307bbf.t(_0x5f9c2f(852)),
          value: _0x5623f0,
          onChange: (_0x294c64) =>
            _0x345f6c({
              ..._0x37d1aa,
              [_0x2d7b45[_0x5f9c2f(708)]]: {
                ..._0x2c2f11,
                titleStyle: { ..._0x2c2f11.titleStyle, ...B(_0x294c64) },
              },
            }),
        }),
    ],
  });
}
function si(_0x4ae563) {
  var _0x3ed408;
  let _0xc7806a = (0, o[_0x4fb14f(858)])(a.LocaleService),
    [_0x7d4e6, _0x297773] = N(_0x4fb14f(1703)),
    [_0x2d4d5a, _0x470133] = N("axes"),
    _0x32fdb7 = ni(_0x7d4e6),
    _0x318ce3 = (_0x2d4d5a == null ? undefined : _0x2d4d5a.x) ?? {},
    _0x852d7c = (_0x2d4d5a == null ? undefined : _0x2d4d5a.y) ?? {},
    _0x25cc61 =
      (_0x2d4d5a == null ? undefined : _0x2d4d5a[_0x4fb14f(1872)]) ?? {};
  return (0, i[_0x4fb14f(1557)])(O, {
    children: [
      (0, i[_0x4fb14f(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        emptyLabel: _0xc7806a.t(_0x4fb14f(1990)),
        label: _0xc7806a.t("chart-ui.common.chartTitle"),
        min: 8,
        value: _0x32fdb7[_0x4fb14f(1003)] ?? null,
        onChange: (_0x2182d9) =>
          _0x297773({ ..._0x32fdb7, fontSize: _0x2182d9 }),
      }),
      (0, i[_0x4fb14f(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        emptyLabel: _0xc7806a.t(_0x4fb14f(1990)),
        label: _0xc7806a.t(_0x4fb14f(1032)),
        min: 8,
        value:
          ((_0x3ed408 = _0x318ce3[_0x4fb14f(1735)]) == null
            ? undefined
            : _0x3ed408[_0x4fb14f(1003)]) ?? null,
        onChange: (_0x71e0a3) =>
          _0x470133({
            ..._0x2d4d5a,
            x: {
              ..._0x318ce3,
              titleStyle: { ..._0x318ce3.titleStyle, fontSize: _0x71e0a3 },
            },
            y: {
              ..._0x852d7c,
              titleStyle: { ..._0x852d7c.titleStyle, fontSize: _0x71e0a3 },
            },
            rightY: {
              ..._0x25cc61,
              titleStyle: {
                ..._0x25cc61[_0x4fb14f(1735)],
                fontSize: _0x71e0a3,
              },
            },
          }),
      }),
    ],
  });
}
function ci(_0xde89ba) {
  switch (_0xde89ba) {
    case P[_0x417419(883)]:
      return "subtitle";
    case P[_0x417419(1056)]:
      return _0x417419(1952);
    case P.YAxisTitle:
      return _0x417419(1097);
    case P.RightYAxisTitle:
      return _0x417419(638);
    default:
      return _0x417419(1703);
  }
}
const li = (0, r.createContext)(null);
function ui() {
  let _0x3d2271 = (0, r[_0x167eda(1443)])(li);
  if (!_0x3d2271) throw Error(_0x167eda(1975));
  return _0x3d2271;
}
function di(_0x37b81b) {
  let [_0x300c0a] = N(_0x1b4af7(553), e.ChartTypeBits[_0x1b4af7(1859)]),
    _0x1b6d24 = ci(_0x37b81b[_0x1b4af7(530)]),
    [_0x22fbe4, _0x5bd237] = (0, r[_0x1b4af7(1825)])(() => ({
      selectedTitleKey: _0x37b81b[_0x1b4af7(530)],
      target: _0x1b6d24,
    })),
    _0xfa82d3 =
      _0x22fbe4[_0x1b4af7(530)] === _0x37b81b[_0x1b4af7(530)]
        ? _0x22fbe4[_0x1b4af7(2036)]
        : _0x1b6d24,
    _0x192127 = (0, r[_0x1b4af7(1365)])(
      (_0x1cba15) => {
        const _0x5eb7e4 = _0x1b4af7;
        _0x5bd237({
          selectedTitleKey: _0x37b81b[_0x5eb7e4(530)],
          target: _0x1cba15,
        });
      },
      [_0x37b81b[_0x1b4af7(530)]],
    ),
    _0x24fe93 = Gt()[_0x1b4af7(714)],
    _0x28eacd = fn(_0x300c0a, 1),
    _0x7200a = (0, r[_0x1b4af7(1687)])(
      () =>
        _0x28eacd
          ? [
              ...Qr,
              ...$r
                .filter(
                  (_0x5759e7) =>
                    _0x5759e7[_0x1b4af7(1324)] !== _0x1b4af7(638) ||
                    _0x24fe93.some(
                      (_0x399449) =>
                        _0x399449[_0x1b4af7(1906)] ===
                        e[_0x1b4af7(1483)][_0x1b4af7(1846)],
                    ),
                )
                [_0x1b4af7(1285)]((_0x2c5ab4) =>
                  _0x2c5ab4[_0x1b4af7(1324)] === _0x1b4af7(1097)
                    ? { ..._0x2c5ab4, labelKey: ei("y", _0x24fe93) }
                    : _0x2c5ab4.value === _0x1b4af7(638)
                      ? {
                          ..._0x2c5ab4,
                          labelKey: ei(_0x1b4af7(1872), _0x24fe93),
                        }
                      : _0x2c5ab4,
                ),
            ]
          : Qr,
      [_0x28eacd, _0x24fe93],
    ),
    _0x26204f = _0x7200a.some(
      (_0x3061be) => _0x3061be[_0x1b4af7(1324)] === _0xfa82d3,
    )
      ? _0xfa82d3
      : _0x1b4af7(1703),
    _0x3b9bad = (0, r[_0x1b4af7(1687)])(
      () => ({
        defaultValues: _0x37b81b[_0x1b4af7(801)],
        effectiveTarget: _0x26204f,
        setSelectedTarget: _0x192127,
        targetOptions: _0x7200a,
      }),
      [_0x26204f, _0x37b81b[_0x1b4af7(801)], _0x192127, _0x7200a],
    );
  return (0, i.jsx)(li[_0x1b4af7(1838)], {
    value: _0x3b9bad,
    children: (0, i[_0x1b4af7(922)])(_0x1b4af7(1998), {
      className: _0x1b4af7(1556),
      children: _0x37b81b[_0x1b4af7(1492)],
    }),
  });
}
function fi() {
  let _0x5b817f = (0, o[_0x8a5151(858)])(a[_0x8a5151(1419)]),
    {
      effectiveTarget: _0x25afac,
      setSelectedTarget: _0x12b5d2,
      targetOptions: _0x53e02c,
    } = ui();
  return (0, i[_0x8a5151(922)])(A, {
    label: _0x5b817f.t(_0x8a5151(1030)),
    options: _0x53e02c.map((_0x22a9d1) => ({
      value: _0x22a9d1.value,
      label: _0x5b817f.t(_0x22a9d1[_0x8a5151(1535)]),
    })),
    value: _0x25afac,
    onChange: _0x12b5d2,
  });
}
function pi(_0x5c9a14) {
  let { defaultValues: _0x20418c, effectiveTarget: _0x3bf2a9 } = ui();
  switch (_0x3bf2a9) {
    case _0x514338(1247):
      return (0, i[_0x514338(922)])(ai, {
        commitMode: _0x5c9a14[_0x514338(1486)],
        defaultValues: _0x20418c,
        showFont: true,
      });
    case "horizontalAxis":
      return (0, i[_0x514338(922)])(oi, {
        axis: "x",
        commitMode: _0x5c9a14.commitMode,
        defaultValues: _0x20418c,
        showAlignment: true,
        showFont: true,
      });
    case _0x514338(1097):
      return (0, i[_0x514338(922)])(oi, {
        axis: "y",
        commitMode: _0x5c9a14.commitMode,
        defaultValues: _0x20418c,
        showAlignment: true,
        showFont: true,
      });
    case _0x514338(638):
      return (0, i[_0x514338(922)])(oi, {
        axis: "rightY",
        commitMode: _0x5c9a14[_0x514338(1486)],
        defaultValues: _0x20418c,
        showAlignment: true,
        showFont: true,
      });
    default:
      return (0, i[_0x514338(922)])(ii, {
        commitMode: _0x5c9a14[_0x514338(1486)],
        defaultValues: _0x20418c,
        showFont: true,
      });
  }
}
function mi(_0x160cc6) {
  return (0, i[_0xdb7274(1557)])(di, {
    defaultValues: _0x160cc6[_0xdb7274(801)],
    selectedTitleKey: _0x160cc6[_0xdb7274(530)],
    children: [
      (0, i[_0xdb7274(922)])(fi, {}),
      (0, i[_0xdb7274(922)])(pi, { commitMode: _0x160cc6[_0xdb7274(1486)] }),
    ],
  });
}
const hi = [
    {
      icon: (0, i.jsx)(n.LinearIcon, {}),
      labelKey: "chart-ui.trendline.linear",
      value: e.ChartTrendlineType["linear"],
    },
    {
      icon: (0, i.jsx)(n.ExponentialIcon, {}),
      labelKey: "chart-ui.trendline.exponential",
      value: e.ChartTrendlineType["exp"],
    },
    {
      icon: (0, i.jsx)(n.LogarithmicIcon, {}),
      labelKey: "chart-ui.trendline.logarithmic",
      value: e.ChartTrendlineType["log"],
    },
    {
      icon: (0, i.jsx)(n.PowerLineIcon, {}),
      labelKey: "chart-ui.trendline.power",
      value: e.ChartTrendlineType["pow"],
    },
    {
      icon: (0, i.jsx)(n.MovingAverageIcon, {}),
      labelKey: "chart-ui.trendline.movingAverage",
      value: e.ChartTrendlineType["movingAvg"],
    },
    {
      icon: (0, i.jsx)(n.PolynomialIcon, {}),
      labelKey: "chart-ui.trendline.polynomial",
      value: e.ChartTrendlineType["poly"],
    },
  ],
  gi = {
    color: e.defaultChartConfig["trendline"].color,
    dashType: e.defaultChartConfig["trendline"].dashType,
    opacity: e.defaultChartConfig["trendline"].opacity,
    order: e.defaultChartConfig["trendline"].order,
    period: e.defaultChartConfig["trendline"].period,
    showFormula: e.defaultChartConfig["trendline"].showFormula,
    showR2: e.defaultChartConfig["trendline"].showR2,
    textColor: e.defaultChartConfig["textStyle"].color,
    type: e.ChartTrendlineType["linear"],
    width: e.defaultChartConfig["trendline"].width,
  };
function _i(_0x3049e5, _0x1f9255) {
  var _0x594d27;
  return _0x505394(1709) in _0x3049e5
    ? String(_0x3049e5.index)
    : String(
        ((_0x594d27 = _0x1f9255[_0x505394(1507)](
          (_0x1ed8c8) =>
            _0x1ed8c8[_0x505394(1391)] === _0x3049e5[_0x505394(1391)],
        )) == null
          ? undefined
          : _0x594d27.selector) ?? "",
      );
}
function vi(_0x1b4b12) {
  var _0x4c16a9;
  let _0x3556a3 = (0, o[_0x541ecd(858)])(a[_0x541ecd(1419)]),
    [_0x44e819, _0x3d10e5] = N(_0x541ecd(1984)),
    [_0x4c8cbf] = N(_0x541ecd(837), []),
    [_0x13badc, _0x31344a] = (0, r.useState)(0),
    [_0x3070f3, _0x1f508a] = (0, r[_0x541ecd(1825)])(""),
    _0x31e157 = L(Ge),
    _0x38944b = _0x44e819 ?? [],
    _0x22d402 = Math[_0x541ecd(1337)](
      _0x13badc,
      Math[_0x541ecd(628)](_0x38944b.length - 1, 0),
    ),
    _0x4a0b21 = _0x38944b[_0x22d402],
    _0xc5b588 =
      _0x3070f3 ||
      String(
        ((_0x4c16a9 = _0x4c8cbf[0]) == null ? undefined : _0x4c16a9.selector) ??
          "",
      ),
    _0x38a5db = (_0x49c64b) => {
      if (!_0x4a0b21) return;
      let _0x11ff32 = [..._0x38944b];
      ((_0x11ff32[_0x22d402] = { ..._0x4a0b21, ..._0x49c64b }),
        _0x3d10e5(_0x11ff32));
    },
    _0x53d57f = () => {
      if (!_0x4a0b21) return;
      let { width: _0xca081d, ..._0x4f0234 } = _0x4a0b21,
        _0x2666fa = [..._0x38944b];
      ((_0x2666fa[_0x22d402] = _0x4f0234), _0x3d10e5(_0x2666fa));
    },
    _0x7ec235 = (_0x154547) => {
      let _0x23016a = G(_0x154547);
      if (_0x23016a === null) {
        _0x53d57f();
        return;
      }
      _0x38a5db({ width: _0x23016a });
    },
    _0x4e0cfa = () => {
      const _0x391582 = _0x541ecd;
      _0xc5b588 &&
        (_0x31344a(_0x38944b[_0x391582(1579)]),
        _0x3d10e5([
          ..._0x38944b,
          {
            selector: { index: Number(_0xc5b588) },
            type: _0x1b4b12[_0x391582(801)][_0x391582(483)],
          },
        ]));
    },
    _0x4ca5c1 = () => {
      const _0x31ece4 = _0x541ecd;
      _0x4a0b21 &&
        (_0x31344a(Math.max(_0x22d402 - 1, 0)),
        _0x3d10e5(
          _0x38944b[_0x31ece4(1573)](
            (_0xcd19a5, _0x2bd556) => _0x2bd556 !== _0x22d402,
          ),
        ));
    };
  return (0, i.jsxs)("div", {
    className: _0x541ecd(1556),
    children: [
      (0, i[_0x541ecd(1557)])(O, {
        children: [
          (0, i[_0x541ecd(922)])(A, {
            label: _0x3556a3.t(_0x541ecd(672)),
            options: _0x4c8cbf[_0x541ecd(1285)]((_0x4249c0) => ({
              label: _0x4249c0.name,
              value: String(_0x4249c0.selector),
            })),
            value: _0xc5b588,
            onChange: _0x1f508a,
          }),
          (0, i.jsxs)(t.Button, {
            "aria-label": _0x3556a3.t(_0x541ecd(1173)),
            disabled: !_0xc5b588,
            size: _0x541ecd(1499),
            onClick: _0x4e0cfa,
            children: [
              (0, i[_0x541ecd(922)])(n[_0x541ecd(1181)], {}),
              _0x3556a3.t(_0x541ecd(1173)),
            ],
          }),
        ],
      }),
      _0x4a0b21 &&
        (0, i[_0x541ecd(1557)])(i[_0x541ecd(1762)], {
          children: [
            (0, i.jsx)(D, {
              label: _0x3556a3.t(_0x541ecd(871)),
              children: (_0x103e9b) =>
                (0, i[_0x541ecd(1557)])(_0x541ecd(1998), {
                  className: _0x541ecd(1497),
                  children: [
                    (0, i[_0x541ecd(922)])(_0x541ecd(1998), {
                      className: _0x541ecd(1200),
                      children: (0, i[_0x541ecd(922)])(lt, {
                        controlProps: _0x103e9b,
                        options: _0x38944b.map((_0x26eb57, _0xa1c7a4) => ({
                          label:
                            (_0x26eb57 == null ? undefined : _0x26eb57.name) ||
                            _0x3556a3.t("chart-ui.common.trendline") +
                              "\x20" +
                              (_0xa1c7a4 + 1),
                          value: String(_0xa1c7a4),
                        })),
                        value: String(_0x22d402),
                        onChange: (_0x1e0180) => _0x31344a(Number(_0x1e0180)),
                      }),
                    }),
                    (0, i[_0x541ecd(922)])(t[_0x541ecd(1420)], {
                      "aria-label": _0x3556a3.t(_0x541ecd(1731)),
                      className: "univer-shrink-0",
                      size: _0x541ecd(534),
                      variant: _0x541ecd(1245),
                      onClick: _0x4ca5c1,
                      children: (0, i.jsx)(n[_0x541ecd(1494)], {
                        "aria-hidden": _0x541ecd(1582),
                      }),
                    }),
                  ],
                }),
            }),
            (0, i[_0x541ecd(922)])(j, {
              allowClear: true,
              commitMode: "change",
              label: _0x3556a3.t(_0x541ecd(1844)),
              value: _0x4a0b21[_0x541ecd(1391)] ?? "",
              onChange: (_0xf87c09) => _0x38a5db({ name: _0xf87c09 }),
            }),
            (0, i[_0x541ecd(922)])(A, {
              label: _0x3556a3.t("chart-ui.common.series"),
              options: _0x4c8cbf.map((_0x3be21d) => ({
                label: _0x3be21d[_0x541ecd(1391)],
                value: String(_0x3be21d[_0x541ecd(1301)]),
              })),
              value: _i(_0x4a0b21.selector, _0x4c8cbf),
              onChange: (_0x24fddf) =>
                _0x38a5db({ selector: { index: Number(_0x24fddf) } }),
            }),
            (0, i[_0x541ecd(922)])(A, {
              label: _0x3556a3.t("chart-ui.trendline.type"),
              options: hi.map(
                ({
                  icon: _0x49b602,
                  labelKey: _0x3c5ea1,
                  value: _0x5b454d,
                }) => ({
                  label: (0, i[_0x541ecd(1557)])("div", {
                    className:
                      "univer-flex\x20univer-h-6\x20univer-items-center\x20univer-gap-1.5",
                    children: [
                      (0, i[_0x541ecd(922)])(_0x541ecd(1904), {
                        className: _0x541ecd(1800),
                        children: _0x49b602,
                      }),
                      (0, i[_0x541ecd(922)])(_0x541ecd(1904), {
                        children: _0x3556a3.t(_0x3c5ea1),
                      }),
                    ],
                  }),
                  value: _0x5b454d,
                }),
              ),
              value:
                _0x4a0b21.type ?? _0x1b4b12[_0x541ecd(801)][_0x541ecd(483)],
              onChange: (_0x2d0627) => _0x38a5db({ type: _0x2d0627 }),
            }),
            (0, i.jsxs)(O, {
              children: [
                (0, i.jsx)(H, {
                  inlineLabel: true,
                  checked:
                    _0x4a0b21.showFormula ??
                    _0x1b4b12[_0x541ecd(801)][_0x541ecd(1773)],
                  label: _0x3556a3.t(_0x541ecd(703)),
                  onChange: (_0xa2950c) =>
                    _0x38a5db({ showFormula: _0xa2950c }),
                }),
                (0, i.jsx)(H, {
                  inlineLabel: true,
                  checked:
                    _0x4a0b21[_0x541ecd(1969)] ??
                    _0x1b4b12[_0x541ecd(801)][_0x541ecd(1969)],
                  label: _0x3556a3.t("chart-ui.trendline.showR2"),
                  onChange: (_0xf0e33b) => _0x38a5db({ showR2: _0xf0e33b }),
                }),
              ],
            }),
            _0x4a0b21[_0x541ecd(483)] ===
              e.ChartTrendlineType[_0x541ecd(1137)] &&
              (0, i[_0x541ecd(922)])(A, {
                label: _0x3556a3.t(_0x541ecd(495)),
                options: Tn(),
                value: String(
                  _0x4a0b21[_0x541ecd(1312)] ??
                    _0x1b4b12[_0x541ecd(801)][_0x541ecd(1312)],
                ),
                onChange: (_0x5d3c66) =>
                  _0x38a5db({ order: Number(_0x5d3c66) }),
              }),
            _0x4a0b21[_0x541ecd(483)] === e.ChartTrendlineType["movingAvg"] &&
              (0, i.jsx)(k, {
                label: _0x3556a3.t(_0x541ecd(1363)),
                min: 1,
                step: 1,
                value:
                  _0x4a0b21[_0x541ecd(1155)] ??
                  _0x1b4b12[_0x541ecd(801)][_0x541ecd(1155)],
                onChange: (_0xce923d) =>
                  _0x38a5db({
                    period: _0xce923d ?? _0x1b4b12[_0x541ecd(801)].period,
                  }),
              }),
            (0, i[_0x541ecd(1557)])(O, {
              children: [
                (0, i[_0x541ecd(922)])(M, {
                  emptyLabel: _0x3556a3.t(_0x541ecd(819)),
                  label: _0x3556a3.t("chart-ui.common.lineColor"),
                  pickerFallbackValue:
                    _0x1b4b12[_0x541ecd(801)][_0x541ecd(1393)],
                  resetLabel: _0x3556a3.t(_0x541ecd(819)),
                  value: _0x4a0b21[_0x541ecd(1393)] ?? null,
                  onChange: (_0x606981) =>
                    _0x38a5db({
                      color:
                        _0x606981 ?? _0x1b4b12.defaultValues[_0x541ecd(1393)],
                    }),
                }),
                (0, i[_0x541ecd(922)])(A, {
                  label: _0x3556a3.t(_0x541ecd(693)),
                  options: Ye(),
                  value: String(
                    _0x4a0b21[_0x541ecd(577)] ??
                      _0x1b4b12[_0x541ecd(801)][_0x541ecd(577)],
                  ),
                  onChange: (_0x280be9) =>
                    _0x38a5db({ opacity: Number(_0x280be9) }),
                }),
              ],
            }),
            (0, i.jsxs)(O, {
              children: [
                (0, i[_0x541ecd(922)])(A, {
                  label: _0x3556a3.t("chart-ui.common.lineType"),
                  options: _n[_0x541ecd(1285)](
                    ({ labelKey: _0xebf66c, value: _0x166cbe }) => ({
                      label: _0x3556a3.t(_0xebf66c),
                      value: _0x166cbe,
                    }),
                  ),
                  value:
                    _0x4a0b21[_0x541ecd(704)] ??
                    _0x1b4b12[_0x541ecd(801)][_0x541ecd(704)],
                  onChange: (_0x3c9d7b) => _0x38a5db({ dashType: _0x3c9d7b }),
                }),
                (0, i[_0x541ecd(922)])(A, {
                  label: _0x3556a3.t(_0x541ecd(827)),
                  options: K(
                    _0x3556a3.t("chart-ui.common.default"),
                    Xe(_0x31e157),
                  ),
                  value: W(_0x4a0b21[_0x541ecd(989)]),
                  onChange: _0x7ec235,
                }),
              ],
            }),
            _0x4a0b21[_0x541ecd(483)] !== e[_0x541ecd(1143)][_0x541ecd(1016)] &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  _0x4a0b21.showFormula &&
                    (0, i[_0x541ecd(922)])(M, {
                      emptyLabel: _0x3556a3.t(_0x541ecd(819)),
                      label: _0x3556a3.t(_0x541ecd(730)),
                      pickerFallbackValue: _0x1b4b12[_0x541ecd(801)].textColor,
                      resetLabel: _0x3556a3.t(_0x541ecd(819)),
                      value: _0x4a0b21[_0x541ecd(1806)] ?? null,
                      onChange: (_0x18a48a) =>
                        _0x38a5db({
                          formulaColor:
                            _0x18a48a ??
                            _0x1b4b12[_0x541ecd(801)][_0x541ecd(1082)],
                        }),
                    }),
                  _0x4a0b21[_0x541ecd(1969)] &&
                    (0, i[_0x541ecd(922)])(M, {
                      emptyLabel: _0x3556a3.t(_0x541ecd(819)),
                      label: _0x3556a3.t("chart-ui.trendline.r2Color"),
                      pickerFallbackValue:
                        _0x1b4b12[_0x541ecd(801)][_0x541ecd(1082)],
                      resetLabel: _0x3556a3.t(_0x541ecd(819)),
                      value: _0x4a0b21.r2Color ?? null,
                      onChange: (_0xa6e377) =>
                        _0x38a5db({
                          r2Color:
                            _0xa6e377 ??
                            _0x1b4b12[_0x541ecd(801)][_0x541ecd(1082)],
                        }),
                    }),
                ],
              }),
          ],
        }),
    ],
  });
}
const yi = { gap: e.defaultChartConfig["funnel"].gap, useAbsoluteValue: false };
function bi(_0x5dd717) {
  let _0x23b475 = (0, o[_0x39fcae(858)])(a[_0x39fcae(1419)]),
    [_0xfac70c] = N(_0x39fcae(553), e[_0x39fcae(653)][_0x39fcae(1859)]),
    [_0x2bd66d, _0x17c8a9] = N(_0x39fcae(1394)),
    _0x1d879b = L(Ge);
  return _0xfac70c === e.ChartTypeBits["Funnel"]
    ? (0, i.jsxs)("div", {
        className: _0x39fcae(1556),
        children: [
          _0x5dd717[_0x39fcae(1500)] === _0x39fcae(1953)
            ? (0, i.jsx)(A, {
                label: _0x23b475.t(_0x39fcae(1777)),
                options: K(_0x23b475.t(_0x39fcae(1990)), Xe(_0x1d879b)),
                value: W(
                  _0x2bd66d == null ? undefined : _0x2bd66d[_0x39fcae(1815)],
                ),
                onChange: (_0x5505aa) =>
                  _0x17c8a9({ ..._0x2bd66d, gap: G(_0x5505aa) }),
              })
            : (0, i.jsx)(k, {
                allowClear: true,
                allowEmpty: true,
                emptyLabel: _0x23b475.t(_0x39fcae(1990)),
                label: _0x23b475.t(_0x39fcae(1777)),
                min: 0,
                value:
                  (_0x2bd66d == null
                    ? undefined
                    : _0x2bd66d[_0x39fcae(1815)]) ?? null,
                onChange: (_0x27dcc2) =>
                  _0x17c8a9({ ..._0x2bd66d, gap: _0x27dcc2 }),
              }),
          (0, i[_0x39fcae(922)])(H, {
            inlineLabel: true,
            checked:
              (_0x2bd66d == null ? undefined : _0x2bd66d.useAbsoluteValue) ??
              _0x5dd717[_0x39fcae(801)][_0x39fcae(1711)],
            label: _0x23b475.t(_0x39fcae(571)),
            onChange: (_0x437737) =>
              _0x17c8a9({ ..._0x2bd66d, useAbsoluteValue: _0x437737 }),
          }),
        ],
      })
    : null;
}
const xi = {
  labelPosition: e.SeriesLabelPosition["Inside"],
  labelVisible: false,
  textColor: e.defaultChartConfig["textStyle"].color,
};
function Si(_0xb1674c) {
  let _0x2d5dfd = (0, o[_0x403878(858)])(a.LocaleService),
    [_0x3aa10f] = N("chartType", e[_0x403878(653)][_0x403878(1859)]),
    [_0x19fbc4, _0x4683f6] = N("heatmap"),
    _0x3871c7 = _0x19fbc4 ?? {},
    _0x223c7f = _0x3871c7[_0x403878(1614)] ?? {},
    _0x10f9a8 = z(_0x223c7f, R);
  return _0x3aa10f === e[_0x403878(653)][_0x403878(1654)]
    ? (0, i[_0x403878(1557)])(_0x403878(1998), {
        className: _0x403878(1556),
        children: [
          (0, i[_0x403878(1557)])(O, {
            children: [
              (0, i[_0x403878(922)])(k, {
                label: _0x2d5dfd.t(_0x403878(652)),
                value: _0x3871c7[_0x403878(1337)] ?? null,
                onChange: (_0x1ef1d1) =>
                  _0x4683f6({ ..._0x3871c7, min: _0x1ef1d1 }),
              }),
              (0, i[_0x403878(922)])(k, {
                label: _0x2d5dfd.t("chart-ui.common.maximum"),
                value: _0x3871c7.max ?? null,
                onChange: (_0x3b1b69) =>
                  _0x4683f6({ ..._0x3871c7, max: _0x3b1b69 }),
              }),
            ],
          }),
          (0, i.jsx)(j, {
            allowClear: true,
            commitMode: "change",
            label: _0x2d5dfd.t(_0x403878(1199)),
            value: _0x3871c7.unit ?? "",
            onChange: (_0x5c0ae6) =>
              _0x4683f6({ ..._0x3871c7, unit: _0x5c0ae6 }),
          }),
          (0, i[_0x403878(922)])(H, {
            inlineLabel: true,
            checked:
              _0x223c7f[_0x403878(1755)] ??
              _0xb1674c[_0x403878(801)][_0x403878(979)],
            label: _0x2d5dfd.t(_0x403878(1410)),
            onChange: (_0x19ac43) =>
              _0x4683f6({
                ..._0x3871c7,
                label: { ..._0x223c7f, visible: _0x19ac43 },
              }),
          }),
          _0x223c7f.visible &&
            (0, i.jsxs)(i[_0x403878(1762)], {
              children: [
                (0, i[_0x403878(922)])(A, {
                  label: _0x2d5dfd.t("chart-ui.common.labelPosition"),
                  options: [
                    {
                      value: e.SeriesLabelPosition[_0x403878(1934)],
                      label: _0x2d5dfd.t(_0x403878(2031)),
                    },
                    {
                      value: e[_0x403878(1727)][_0x403878(1210)],
                      label: _0x2d5dfd.t(_0x403878(1935)),
                    },
                    {
                      value: e[_0x403878(1727)].Bottom,
                      label: _0x2d5dfd.t("chart-ui.common.position.bottom"),
                    },
                  ],
                  value:
                    _0x223c7f.position ??
                    _0xb1674c[_0x403878(801)][_0x403878(1336)],
                  onChange: (_0x4c896b) =>
                    _0x4683f6({
                      ..._0x3871c7,
                      label: { ..._0x223c7f, position: _0x4c896b },
                    }),
                }),
                (0, i[_0x403878(922)])(V, {
                  colorPickerFallbackValue:
                    _0xb1674c.defaultValues[_0x403878(1082)],
                  label: _0x2d5dfd.t(_0x403878(852)),
                  value: _0x10f9a8,
                  onChange: (_0x2b23b4) =>
                    _0x4683f6({
                      ..._0x3871c7,
                      label: { ..._0x223c7f, ...B(_0x2b23b4) },
                    }),
                }),
              ],
            }),
        ],
      })
    : null;
}
function Ci(_0x1987c1) {
  return (0, i[_0x1fc1ed(1557)])(_0x1fc1ed(1904), {
    className: _0x1fc1ed(629),
    children: [
      (0, i.jsx)(_0x1fc1ed(1904), {
        className: _0x1fc1ed(1248),
        children: _0x1987c1[_0x1fc1ed(1492)],
      }),
      _0x1987c1[_0x1fc1ed(1360)] !== undefined &&
        _0x1987c1.endSlot !== null &&
        (0, i[_0x1fc1ed(922)])(_0x1fc1ed(1904), {
          className: _0x1fc1ed(1087),
          children: _0x1987c1[_0x1fc1ed(1360)],
        }),
    ],
  });
}
const wi = [
    e.LabelContentType["CategoryName"],
    e.LabelContentType["Value"],
    e.LabelContentType["Percentage"],
  ],
  Ti = "normal";
function Ei(_0x1f97fd) {
  switch (_0x1f97fd) {
    case e[_0x4278b1(1948)][_0x4278b1(886)]:
      return { type: _0x1f97fd, count: e[_0x4278b1(1505)] };
    case e[_0x4278b1(1948)][_0x4278b1(624)]:
      return { type: _0x1f97fd, lessThan: e[_0x4278b1(1341)] };
    case e[_0x4278b1(1948)].Percentage:
      return { type: _0x1f97fd, lessThan: e[_0x4278b1(2010)] };
    case e.PieSecondarySplitType[_0x4278b1(731)]:
      return { type: _0x1f97fd, pointIndexes: [] };
    default:
      return { type: e.PieSecondarySplitType["Auto"] };
  }
}
const Di = {
  borderColor: e.defaultChartConfig["pie"].borderColor,
  doughnutHole: e.defaultChartConfig["pie"].doughnutHole,
  hasPaddingAngle: e.defaultChartConfig["pie"].hasPaddingAngle,
  isHalfPie: false,
  labelContentType: e.defaultChartConfig["pie"].labelContentType,
  labelPosition: e.PieLabelPosition["Outside"],
  labelVisible: true,
  pieHole: 0,
  rosePie: false,
  showLabelLine: e.defaultChartConfig["pie"].showLabelLine,
  textColor: e.defaultChartConfig["textStyle"].color,
  valueScale: e.defaultChartConfig["pie"].valueScale,
};
function Oi(_0x1ff3b4) {
  var _0x2374a7;
  let _0x227c20 = (0, o[_0x316303(858)])(a[_0x316303(1419)]),
    [_0x4cef63, _0x327eb5] = N(
      _0x316303(553),
      e[_0x316303(653)][_0x316303(1859)],
    ),
    [_0x13b025, _0x5140f7] = N("pie"),
    _0x1fdef6 = _0x13b025 ?? {},
    _0xe3f4a8 = _0x1fdef6[_0x316303(2021)],
    _0x6bfd7c =
      _0xe3f4a8 == null || (_0x2374a7 = _0xe3f4a8[_0x316303(1437)]) == null
        ? undefined
        : _0x2374a7.type,
    _0x26259a =
      (_0xe3f4a8 == null ? undefined : _0xe3f4a8[_0x316303(525)]) === true &&
      (_0x6bfd7c === e[_0x316303(503)][_0x316303(600)] ||
        _0x6bfd7c === e[_0x316303(503)][_0x316303(1046)]),
    _0x152334 = _0x26259a ? _0x6bfd7c : Ti,
    _0x2cb476 = (_0xe3f4a8 == null
      ? undefined
      : _0xe3f4a8[_0x316303(1437)]) ?? {
      type: e[_0x316303(503)][_0x316303(600)],
    },
    _0x204c15 = _0x2cb476.split,
    _0x493361 =
      (_0x204c15 == null ? undefined : _0x204c15[_0x316303(483)]) ??
      e[_0x316303(1948)][_0x316303(733)],
    _0x44972b = _0x2cb476[_0x316303(1487)] ?? {},
    _0x4d441d = _0x1fdef6[_0x316303(1614)] ?? {},
    _0x51b926 =
      _0x4d441d[_0x316303(1755)] ?? _0x1ff3b4.defaultValues[_0x316303(979)],
    _0x1106e7 = z(_0x4d441d, R),
    _0x544f52 =
      _0x1fdef6[_0x316303(690)] ??
      (_0x4cef63 === e.ChartTypeBits[_0x316303(585)]
        ? _0x1ff3b4.defaultValues[_0x316303(690)]
        : _0x1ff3b4[_0x316303(801)][_0x316303(1490)]),
    _0x3dcafc = wi[_0x316303(1573)]((_0x1fac51) =>
      e[_0x316303(1226)][_0x316303(863)](
        _0x4d441d[_0x316303(1108)] ??
          _0x1ff3b4[_0x316303(801)][_0x316303(1655)],
        _0x1fac51,
      ),
    )[_0x316303(1285)](String),
    _0x1d173d = _0x1ff3b4.NumberFormatField ?? At,
    _0xa911e7 = null;
  if (
    (_0x204c15 == null ? undefined : _0x204c15[_0x316303(483)]) ===
    e[_0x316303(1948)][_0x316303(731)]
  ) {
    var _0x371eff;
    _0xa911e7 = (0, i.jsx)(j, {
      commitMode: "change",
      disabled: true,
      label: _0x227c20.t(_0x316303(1496)),
      value: _0x227c20
        .t("chart-ui.pie.customSelectedCountValue")
        [_0x316303(1530)](
          _0x316303(2017),
          String(
            ((_0x371eff = _0x204c15[_0x316303(549)]) == null
              ? undefined
              : _0x371eff[_0x316303(1579)]) ?? 0,
          ),
        ),
      onChange: () => undefined,
    });
  } else
    _0x493361 === e[_0x316303(1948)][_0x316303(886)]
      ? (_0xa911e7 = (0, i.jsx)(k, {
          label: _0x227c20.t(_0x316303(1409)),
          min: e[_0x316303(1639)],
          precision: 0,
          value:
            (_0x204c15 == null ? undefined : _0x204c15[_0x316303(483)]) ===
            e[_0x316303(1948)][_0x316303(886)]
              ? (_0x204c15[_0x316303(1602)] ?? e[_0x316303(1505)])
              : e[_0x316303(1505)],
          onChange: (_0x606827) =>
            _0x5140f7({
              ..._0x1fdef6,
              composite: {
                ..._0xe3f4a8,
                secondaryPlot: {
                  ..._0x2cb476,
                  split: {
                    type: e[_0x316303(1948)][_0x316303(886)],
                    count: _0x606827 ?? e[_0x316303(1505)],
                  },
                },
              },
            }),
        }))
      : _0x493361 === e[_0x316303(1948)][_0x316303(624)]
        ? (_0xa911e7 = (0, i.jsx)(k, {
            label: _0x227c20.t(_0x316303(909)),
            value:
              (_0x204c15 == null ? undefined : _0x204c15.type) ===
              e.PieSecondarySplitType[_0x316303(624)]
                ? (_0x204c15[_0x316303(2019)] ?? e[_0x316303(1341)])
                : e.PIE_VALUE_SPLIT_LESS_THAN_DEFAULT,
            onChange: (_0x1c3bff) =>
              _0x5140f7({
                ..._0x1fdef6,
                composite: {
                  ..._0xe3f4a8,
                  secondaryPlot: {
                    ..._0x2cb476,
                    split: {
                      type: e[_0x316303(1948)][_0x316303(624)],
                      lessThan: _0x1c3bff ?? e[_0x316303(1341)],
                    },
                  },
                },
              }),
          }))
        : _0x493361 === e[_0x316303(1948)][_0x316303(754)] &&
          (_0xa911e7 = (0, i[_0x316303(922)])(k, {
            label: _0x227c20.t("chart-ui.pie.percentageLessThan"),
            min: 0,
            value:
              (_0x204c15 == null ? undefined : _0x204c15[_0x316303(483)]) ===
              e[_0x316303(1948)][_0x316303(754)]
                ? (_0x204c15[_0x316303(2019)] ?? e[_0x316303(2010)])
                : e[_0x316303(2010)],
            onChange: (_0x4369d9) =>
              _0x5140f7({
                ..._0x1fdef6,
                composite: {
                  ..._0xe3f4a8,
                  secondaryPlot: {
                    ..._0x2cb476,
                    split: {
                      type: e[_0x316303(1948)][_0x316303(754)],
                      lessThan: _0x4369d9 ?? e[_0x316303(2010)],
                    },
                  },
                },
              }),
          }));
  return e[_0x316303(1226)].baseOn(_0x4cef63, e[_0x316303(653)][_0x316303(600)])
    ? (0, i[_0x316303(1557)])(_0x316303(1998), {
        className: _0x316303(1556),
        children: [
          (0, i[_0x316303(922)])(I, {
            label: _0x227c20.t("chart-ui.common.layout"),
            children: (0, i[_0x316303(1557)])(_0x316303(1998), {
              className: _0x316303(1556),
              children: [
                (0, i[_0x316303(1557)])(O, {
                  children: [
                    (0, i[_0x316303(922)])(A, {
                      label: _0x227c20.t("chart-ui.pie.mode"),
                      options: [
                        { value: Ti, label: _0x227c20.t(_0x316303(1816)) },
                        {
                          value: e[_0x316303(503)].Pie,
                          label: _0x227c20.t(_0x316303(1439)),
                        },
                        {
                          value: e[_0x316303(503)][_0x316303(1046)],
                          label: _0x227c20.t(_0x316303(1842)),
                        },
                      ],
                      value: _0x152334,
                      onChange: (_0x43c8f7) => {
                        const _0x59fff3 = _0x316303;
                        if (_0x43c8f7 === Ti) {
                          _0xe3f4a8 &&
                            _0x5140f7({
                              ..._0x1fdef6,
                              composite: { ..._0xe3f4a8, enabled: false },
                            });
                          return;
                        }
                        (_0x4cef63 !== e[_0x59fff3(653)][_0x59fff3(600)] &&
                          _0x327eb5(e[_0x59fff3(653)][_0x59fff3(600)]),
                          _0x5140f7({
                            ..._0x1fdef6,
                            composite: {
                              ..._0xe3f4a8,
                              enabled: true,
                              secondaryPlot: { ..._0x2cb476, type: _0x43c8f7 },
                            },
                          }));
                      },
                    }),
                    _0x26259a &&
                      (0, i[_0x316303(922)])(A, {
                        label: _0x227c20.t(_0x316303(1223)),
                        options: [
                          {
                            value: e[_0x316303(1948)][_0x316303(733)],
                            label: _0x227c20.t(_0x316303(1829)),
                          },
                          {
                            value: e.PieSecondarySplitType["Position"],
                            label: _0x227c20.t(_0x316303(1415)),
                          },
                          {
                            value: e[_0x316303(1948)][_0x316303(624)],
                            label: _0x227c20.t(_0x316303(545)),
                          },
                          {
                            value: e.PieSecondarySplitType[_0x316303(754)],
                            label: _0x227c20.t(_0x316303(726)),
                          },
                          ...(_0x493361 === e[_0x316303(1948)][_0x316303(731)]
                            ? [
                                {
                                  value: e[_0x316303(1948)].Custom,
                                  label: _0x227c20.t(_0x316303(1534)),
                                },
                              ]
                            : []),
                        ],
                        value: _0x493361,
                        onChange: (_0x3e8e90) =>
                          _0x5140f7({
                            ..._0x1fdef6,
                            composite: {
                              ..._0xe3f4a8,
                              secondaryPlot: {
                                ..._0x2cb476,
                                split: Ei(_0x3e8e90),
                              },
                            },
                          }),
                      }),
                  ],
                }),
                _0x26259a &&
                  (0, i[_0x316303(1557)])(i[_0x316303(1762)], {
                    children: [
                      _0xa911e7,
                      (0, i.jsxs)(O, {
                        children: [
                          (0, i[_0x316303(922)])(k, {
                            label: _0x227c20.t(_0x316303(1784)),
                            min: e.PIE_SECONDARY_SIZE_MIN,
                            max: e.PIE_SECONDARY_SIZE_MAX,
                            value:
                              _0x2cb476[_0x316303(850)] ??
                              e.PIE_SECONDARY_SIZE_DEFAULT,
                            onChange: (_0xa326df) =>
                              _0x5140f7({
                                ..._0x1fdef6,
                                composite: {
                                  ..._0xe3f4a8,
                                  secondaryPlot: {
                                    ..._0x2cb476,
                                    size: _0xa326df ?? e[_0x316303(985)],
                                  },
                                },
                              }),
                          }),
                          (0, i[_0x316303(922)])(k, {
                            allowClear: true,
                            allowEmpty: true,
                            emptyLabel: _0x227c20.t(_0x316303(1990)),
                            label: _0x227c20.t("chart-ui.pie.gapWidth"),
                            min: e[_0x316303(1168)],
                            max: e[_0x316303(1730)],
                            value: _0x2cb476.gapWidth ?? null,
                            onChange: (_0x547ccc) =>
                              _0x5140f7({
                                ..._0x1fdef6,
                                composite: {
                                  ..._0xe3f4a8,
                                  secondaryPlot: {
                                    ..._0x2cb476,
                                    gapWidth: _0x547ccc,
                                  },
                                },
                              }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          }),
          _0x26259a &&
            (0, i.jsx)(I, {
              label: (0, i[_0x316303(922)])(Ci, {
                endSlot: (0, i[_0x316303(922)])(t[_0x316303(1138)], {
                  checked:
                    _0x44972b[_0x316303(1755)] ??
                    e.PIE_CONNECTOR_VISIBLE_DEFAULT,
                  contentClassName: _0x316303(911),
                  onChange: (_0x241184) =>
                    _0x5140f7({
                      ..._0x1fdef6,
                      composite: {
                        ..._0xe3f4a8,
                        secondaryPlot: {
                          ..._0x2cb476,
                          connector: { ..._0x44972b, visible: !!_0x241184 },
                        },
                      },
                    }),
                  children: _0x227c20.t("chart-ui.pie.connector"),
                }),
                children: _0x227c20.t("chart-ui.pie.connector"),
              }),
              children: (0, i[_0x316303(922)])(_0x316303(1998), {
                className: _0x316303(1556),
                children:
                  (_0x44972b[_0x316303(1755)] ??
                    e.PIE_CONNECTOR_VISIBLE_DEFAULT) &&
                  (0, i.jsxs)(i[_0x316303(1762)], {
                    children: [
                      (0, i.jsxs)(O, {
                        children: [
                          (0, i[_0x316303(922)])(M, {
                            emptyLabel: _0x227c20.t(_0x316303(819)),
                            label: _0x227c20.t(_0x316303(1895)),
                            pickerFallbackValue: e[_0x316303(1852)],
                            resetLabel: _0x227c20.t(_0x316303(819)),
                            value: _0x44972b[_0x316303(1393)] ?? null,
                            onChange: (_0x11bb3e) =>
                              _0x5140f7({
                                ..._0x1fdef6,
                                composite: {
                                  ..._0xe3f4a8,
                                  secondaryPlot: {
                                    ..._0x2cb476,
                                    connector: {
                                      ..._0x44972b,
                                      color: _0x11bb3e,
                                    },
                                  },
                                },
                              }),
                          }),
                          (0, i[_0x316303(922)])(k, {
                            allowClear: true,
                            allowEmpty: true,
                            emptyLabel: _0x227c20.t("chart-ui.common.default"),
                            label: _0x227c20.t("chart-ui.pie.connectorWidth"),
                            min: 0,
                            value: _0x44972b[_0x316303(989)] ?? null,
                            onChange: (_0x11724d) =>
                              _0x5140f7({
                                ..._0x1fdef6,
                                composite: {
                                  ..._0xe3f4a8,
                                  secondaryPlot: {
                                    ..._0x2cb476,
                                    connector: {
                                      ..._0x44972b,
                                      width: _0x11724d,
                                    },
                                  },
                                },
                              }),
                          }),
                        ],
                      }),
                      (0, i[_0x316303(922)])(A, {
                        label: _0x227c20.t(_0x316303(1616)),
                        options: _n[_0x316303(1285)](
                          ({ labelKey: _0x407c97, value: _0x3eb98c }) => ({
                            label: _0x227c20.t(_0x407c97),
                            value: _0x3eb98c,
                          }),
                        ),
                        value: _0x44972b[_0x316303(704)] ?? e[_0x316303(696)],
                        onChange: (_0x156a84) =>
                          _0x5140f7({
                            ..._0x1fdef6,
                            composite: {
                              ..._0xe3f4a8,
                              secondaryPlot: {
                                ..._0x2cb476,
                                connector: {
                                  ..._0x44972b,
                                  dashType: _0x156a84,
                                },
                              },
                            },
                          }),
                      }),
                    ],
                  }),
              }),
            }),
          (0, i[_0x316303(922)])(I, {
            label: _0x227c20.t(_0x316303(1636)),
            children: (0, i[_0x316303(1557)])(_0x316303(1998), {
              className: _0x316303(1556),
              children: [
                (0, i[_0x316303(1557)])(O, {
                  children: [
                    !_0x26259a &&
                      (0, i[_0x316303(922)])(A, {
                        label: _0x227c20.t(_0x316303(1723)),
                        options: Ye([...Cn]),
                        value: String(_0x544f52),
                        onChange: (_0x36c292) => {
                          let _0x25a6a0 = Number(_0x36c292);
                          _0x5140f7({ ..._0x1fdef6, doughnutHole: _0x25a6a0 });
                        },
                      }),
                    (0, i.jsx)(M, {
                      emptyLabel: _0x227c20.t(_0x316303(819)),
                      label: _0x227c20.t(_0x316303(1196)),
                      pickerFallbackValue:
                        _0x1ff3b4[_0x316303(801)][_0x316303(1881)],
                      resetLabel: _0x227c20.t(_0x316303(819)),
                      value: _0x1fdef6[_0x316303(1881)] ?? null,
                      onChange: (_0x4e6da5) =>
                        _0x5140f7({ ..._0x1fdef6, borderColor: _0x4e6da5 }),
                    }),
                  ],
                }),
                !_0x26259a &&
                  (0, i[_0x316303(1557)])(O, {
                    children: [
                      (0, i[_0x316303(922)])(k, {
                        label: _0x227c20.t(_0x316303(1524)),
                        max: 360,
                        min: 0,
                        precision: 0,
                        value: _0x1fdef6.startAngle ?? 0,
                        onChange: (_0x1d25c0) =>
                          _0x5140f7({
                            ..._0x1fdef6,
                            startAngle: _0x1d25c0 ?? 0,
                          }),
                      }),
                      (0, i[_0x316303(922)])(k, {
                        label: _0x227c20.t("chart-ui.pie.explosion"),
                        max: 100,
                        min: 0,
                        value: (_0x1fdef6[_0x316303(884)] ?? 0) * 100,
                        onChange: (_0x4b8029) =>
                          _0x5140f7({
                            ..._0x1fdef6,
                            explosion: (_0x4b8029 ?? 0) / 100,
                          }),
                      }),
                    ],
                  }),
                _0x26259a &&
                  (0, i[_0x316303(922)])(O, {
                    children: (0, i.jsx)(H, {
                      inlineLabel: true,
                      checked:
                        _0x1fdef6[_0x316303(711)] ??
                        _0x1ff3b4[_0x316303(801)][_0x316303(711)],
                      label: _0x227c20.t(_0x316303(878)),
                      onChange: (_0x14f864) =>
                        _0x5140f7({ ..._0x1fdef6, hasPaddingAngle: _0x14f864 }),
                    }),
                  }),
                !_0x26259a &&
                  (0, i.jsxs)(O, {
                    children: [
                      (0, i.jsx)(H, {
                        inlineLabel: true,
                        checked:
                          _0x1fdef6[_0x316303(711)] ??
                          _0x1ff3b4[_0x316303(801)][_0x316303(711)],
                        label: _0x227c20.t(_0x316303(878)),
                        onChange: (_0x55c801) =>
                          _0x5140f7({
                            ..._0x1fdef6,
                            hasPaddingAngle: _0x55c801,
                          }),
                      }),
                      (0, i[_0x316303(922)])(H, {
                        inlineLabel: true,
                        checked:
                          _0x1fdef6[_0x316303(1374)] ??
                          _0x1ff3b4.defaultValues[_0x316303(1374)],
                        label: _0x227c20.t(_0x316303(1043)),
                        onChange: (_0x1d8795) =>
                          _0x5140f7({ ..._0x1fdef6, isHalfPie: _0x1d8795 }),
                      }),
                    ],
                  }),
                !_0x26259a &&
                  (0, i[_0x316303(922)])(H, {
                    inlineLabel: true,
                    checked:
                      _0x1fdef6[_0x316303(486)] ??
                      _0x1ff3b4[_0x316303(801)][_0x316303(486)],
                    label: _0x227c20.t(_0x316303(1277)),
                    onChange: (_0x68beb9) =>
                      _0x5140f7({ ..._0x1fdef6, rosePie: _0x68beb9 }),
                  }),
              ],
            }),
          }),
          (0, i.jsx)(I, {
            label: (0, i[_0x316303(922)])(Ci, {
              endSlot: (0, i[_0x316303(922)])(t[_0x316303(1138)], {
                checked: _0x51b926,
                contentClassName: _0x316303(911),
                onChange: (_0x2e8204) =>
                  _0x5140f7({
                    ..._0x1fdef6,
                    label: { ..._0x4d441d, visible: !!_0x2e8204 },
                  }),
                children: _0x227c20.t(_0x316303(1719)),
              }),
              children: _0x227c20.t(_0x316303(1719)),
            }),
            children: (0, i[_0x316303(922)])("div", {
              className: _0x316303(1556),
              children:
                _0x51b926 &&
                (0, i[_0x316303(1557)])(i[_0x316303(1762)], {
                  children: [
                    !_0x26259a &&
                      (0, i[_0x316303(922)])(H, {
                        inlineLabel: true,
                        checked:
                          _0x1fdef6[_0x316303(1322)] ??
                          _0x1ff3b4[_0x316303(801)].showLabelLine,
                        label: _0x227c20.t("chart-ui.pie.labelLine"),
                        onChange: (_0x423d0f) =>
                          _0x5140f7({ ..._0x1fdef6, showLabelLine: _0x423d0f }),
                      }),
                    (0, i[_0x316303(922)])(O, {
                      children: (0, i[_0x316303(922)])(cr, {
                        label: _0x227c20.t(_0x316303(1466)),
                        options: [
                          {
                            value: String(e.LabelContentType[_0x316303(602)]),
                            label: _0x227c20.t("chart-ui.common.category"),
                          },
                          {
                            value: String(e[_0x316303(1567)].Value),
                            label: _0x227c20.t(_0x316303(545)),
                          },
                          {
                            value: String(e[_0x316303(1567)][_0x316303(754)]),
                            label: _0x227c20.t(_0x316303(726)),
                          },
                        ],
                        value: _0x3dcafc,
                        onChange: (_0x42d8a7) => {
                          const _0x4f3959 = _0x316303;
                          if (_0x42d8a7[_0x4f3959(1579)] === 0) return;
                          let _0x131452 = wi
                            .filter((_0x56a86a) =>
                              _0x42d8a7.includes(String(_0x56a86a)),
                            )
                            .reduce(
                              (_0x28a05e, _0x236ad8) => _0x28a05e | _0x236ad8,
                              e[_0x4f3959(1567)][_0x4f3959(1549)],
                            );
                          _0x5140f7({
                            ..._0x1fdef6,
                            label: { ..._0x4d441d, contentType: _0x131452 },
                          });
                        },
                      }),
                    }),
                    (0, i.jsxs)(O, {
                      children: [
                        !_0x26259a &&
                          (0, i[_0x316303(1557)])(i.Fragment, {
                            children: [
                              (0, i.jsx)(A, {
                                label: _0x227c20.t(_0x316303(1668)),
                                options: [
                                  {
                                    value: e[_0x316303(1287)][_0x316303(1934)],
                                    label: _0x227c20.t(_0x316303(2031)),
                                  },
                                  {
                                    value: e.PieLabelPosition[_0x316303(1150)],
                                    label: _0x227c20.t(_0x316303(1643)),
                                  },
                                ],
                                value:
                                  _0x4d441d[_0x316303(1712)] ??
                                  _0x1ff3b4[_0x316303(801)][_0x316303(1336)],
                                onChange: (_0x28efb8) =>
                                  _0x5140f7({
                                    ..._0x1fdef6,
                                    label: {
                                      ..._0x4d441d,
                                      position: _0x28efb8,
                                    },
                                  }),
                              }),
                              (0, i[_0x316303(922)])(k, {
                                label: _0x227c20.t(_0x316303(626)),
                                value:
                                  _0x1fdef6.valueScale ??
                                  _0x1ff3b4[_0x316303(801)][_0x316303(552)],
                                onChange: (_0x245c39) =>
                                  _0x5140f7({
                                    ..._0x1fdef6,
                                    valueScale: _0x245c39,
                                  }),
                              }),
                            ],
                          }),
                        _0x26259a &&
                          (0, i[_0x316303(922)])(k, {
                            label: _0x227c20.t("chart-ui.pie.valueScale"),
                            value:
                              _0x1fdef6.valueScale ??
                              _0x1ff3b4[_0x316303(801)].valueScale,
                            onChange: (_0x2de004) =>
                              _0x5140f7({
                                ..._0x1fdef6,
                                valueScale: _0x2de004,
                              }),
                          }),
                      ],
                    }),
                    (0, i[_0x316303(922)])(_0x1d173d, {
                      label: _0x227c20.t("chart-ui.common.numberFormat"),
                      value: _0x4d441d[_0x316303(1875)],
                      onChange: (_0x5d3e8c) =>
                        _0x5140f7({
                          ..._0x1fdef6,
                          label: { ..._0x4d441d, format: _0x5d3e8c },
                        }),
                    }),
                    (0, i.jsx)(V, {
                      colorPickerFallbackValue:
                        _0x1ff3b4.defaultValues[_0x316303(1082)],
                      label: _0x227c20.t("chart-ui.common.font"),
                      value: _0x1106e7,
                      onChange: (_0xe805ac) =>
                        _0x5140f7({
                          ..._0x1fdef6,
                          label: { ..._0x4d441d, ...B(_0xe805ac) },
                        }),
                    }),
                  ],
                }),
            }),
          }),
        ],
      })
    : null;
}
const ki = { fill: false, shape: e.defaultChartConfig["radar"].shape };
function Ai(_0x31e353) {
  let _0x587eeb = (0, o[_0x3c8d04(858)])(a[_0x3c8d04(1419)]),
    [_0x26ed67] = N("chartType", e.ChartTypeBits[_0x3c8d04(1859)]),
    [_0x3a1577, _0x4e6b5e] = N(_0x3c8d04(1317));
  return _0x26ed67 === e[_0x3c8d04(653)][_0x3c8d04(479)]
    ? (0, i.jsxs)(_0x3c8d04(1998), {
        className: _0x3c8d04(1556),
        children: [
          (0, i.jsx)(A, {
            label: _0x587eeb.t("chart-ui.radar.shape"),
            options: [
              {
                value: e[_0x3c8d04(1106)].Polygon,
                label: _0x587eeb.t(_0x3c8d04(1999)),
              },
              {
                value: e[_0x3c8d04(1106)][_0x3c8d04(978)],
                label: _0x587eeb.t(_0x3c8d04(946)),
              },
            ],
            value:
              (_0x3a1577 == null ? undefined : _0x3a1577[_0x3c8d04(543)]) ??
              _0x31e353.defaultValues[_0x3c8d04(543)],
            onChange: (_0xa031ec) =>
              _0x4e6b5e({ ..._0x3a1577, shape: _0xa031ec }),
          }),
          (0, i.jsx)(H, {
            inlineLabel: true,
            checked:
              (_0x3a1577 == null ? undefined : _0x3a1577[_0x3c8d04(1644)]) ??
              _0x31e353.defaultValues[_0x3c8d04(1644)],
            label: _0x587eeb.t("chart-ui.radar.fill"),
            onChange: (_0x3433a9) =>
              _0x4e6b5e({ ..._0x3a1577, fill: _0x3433a9 }),
          }),
        ],
      })
    : null;
}
const ji = {
  circularLabelRotation:
    e.defaultChartConfig["relation"].circular["rotateLabel"],
  emphasisEnabled: e.defaultChartConfig["relation"].emphasis,
  force: {
    gravity: e.defaultChartConfig["relation"].force["gravity"],
    repulsion: e.defaultChartConfig["relation"].force["repulsion"],
  },
  layout: e.RelationChartLayoutEnum["None"],
  nodeShape: e.defaultChartConfig["relation"].nodeShape,
  useValueAsSymbolSize: e.defaultChartConfig["relation"].useValueAsSymbolSize,
};
function Mi(_0x545196) {
  let _0x225adf = (0, o[_0x5e6732(858)])(a[_0x5e6732(1419)]),
    [_0x52593e] = N(_0x5e6732(553), e[_0x5e6732(653)][_0x5e6732(1859)]),
    [_0x15b44f, _0xb66e4] = N(_0x5e6732(1656)),
    _0xfb2098 =
      (_0x15b44f == null ? undefined : _0x15b44f[_0x5e6732(1019)]) ?? {};
  return _0x52593e === e.ChartTypeBits[_0x5e6732(1757)]
    ? (0, i[_0x5e6732(1557)])(_0x5e6732(1998), {
        className: _0x5e6732(1556),
        children: [
          (0, i.jsx)(I, {
            label: _0x225adf.t(_0x5e6732(1059)),
            children: (0, i.jsxs)(_0x5e6732(1998), {
              className: _0x5e6732(1556),
              children: [
                (0, i[_0x5e6732(922)])(A, {
                  label: _0x225adf.t(_0x5e6732(1059)),
                  options: [
                    {
                      value: e[_0x5e6732(1347)][_0x5e6732(1859)],
                      label: _0x225adf.t(_0x5e6732(893)),
                    },
                    {
                      value: e.RelationChartLayoutEnum["Circular"],
                      label: _0x225adf.t(_0x5e6732(1770)),
                    },
                    {
                      value: e.RelationChartLayoutEnum[_0x5e6732(608)],
                      label: _0x225adf.t(_0x5e6732(631)),
                    },
                  ],
                  value:
                    (_0x15b44f == null
                      ? undefined
                      : _0x15b44f[_0x5e6732(664)]) ??
                    _0x545196.defaultValues[_0x5e6732(664)],
                  onChange: (_0x3697c4) =>
                    _0xb66e4({ ..._0x15b44f, layout: _0x3697c4 }),
                }),
                (_0x15b44f == null ? undefined : _0x15b44f[_0x5e6732(664)]) ===
                  e.RelationChartLayoutEnum["Circular"] &&
                  (0, i[_0x5e6732(922)])(H, {
                    inlineLabel: true,
                    checked:
                      _0x15b44f[_0x5e6732(1493)] ??
                      _0x545196[_0x5e6732(801)][_0x5e6732(1493)],
                    label: _0x225adf.t(_0x5e6732(1167)),
                    onChange: (_0x1a29db) =>
                      _0xb66e4({
                        ..._0x15b44f,
                        circularLabelRotation: _0x1a29db,
                      }),
                  }),
                (_0x15b44f == null ? undefined : _0x15b44f.layout) ===
                  e[_0x5e6732(1347)][_0x5e6732(608)] &&
                  (0, i[_0x5e6732(1557)])(i[_0x5e6732(1762)], {
                    children: [
                      (0, i[_0x5e6732(1557)])(O, {
                        children: [
                          (0, i.jsx)(k, {
                            label: _0x225adf.t("chart-ui.relation.gravity"),
                            value:
                              _0xfb2098.gravity ??
                              _0x545196[_0x5e6732(801)].force["gravity"],
                            onChange: (_0x3fb257) =>
                              _0xb66e4({
                                ..._0x15b44f,
                                force: { ..._0xfb2098, gravity: _0x3fb257 },
                              }),
                          }),
                          (0, i[_0x5e6732(922)])(k, {
                            label: _0x225adf.t(_0x5e6732(2024)),
                            value:
                              _0xfb2098[_0x5e6732(1754)] ??
                              _0x545196.defaultValues[_0x5e6732(1019)][
                                _0x5e6732(1754)
                              ],
                            onChange: (_0xb6b504) =>
                              _0xb66e4({
                                ..._0x15b44f,
                                force: { ..._0xfb2098, repulsion: _0xb6b504 },
                              }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(k, {
                        label: _0x225adf.t(_0x5e6732(1529)),
                        min: 0,
                        step: 10,
                        value: _0xfb2098[_0x5e6732(1923)] ?? null,
                        onChange: (_0x2e264c) =>
                          _0xb66e4({
                            ..._0x15b44f,
                            force: { ..._0xfb2098, edgeLength: _0x2e264c },
                          }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
          (0, i[_0x5e6732(1557)])(I, {
            label: _0x225adf.t("chart-ui.relation.nodes"),
            children: [
              (0, i[_0x5e6732(922)])(O, {
                children: (0, i[_0x5e6732(922)])(A, {
                  label: _0x225adf.t(_0x5e6732(1647)),
                  options: vn.map(
                    ({ labelKey: _0x3345f0, value: _0x451e1b }) => ({
                      label: _0x225adf.t(_0x3345f0),
                      value: _0x451e1b,
                    }),
                  ),
                  value:
                    (_0x15b44f == null
                      ? undefined
                      : _0x15b44f[_0x5e6732(737)]) ??
                    _0x545196.defaultValues[_0x5e6732(737)],
                  onChange: (_0x5daa2c) =>
                    _0xb66e4({ ..._0x15b44f, nodeShape: _0x5daa2c }),
                }),
              }),
              (0, i[_0x5e6732(922)])(O, {
                children: (0, i[_0x5e6732(922)])(H, {
                  inlineLabel: true,
                  checked:
                    (_0x15b44f == null
                      ? undefined
                      : _0x15b44f[_0x5e6732(1262)]) ??
                    _0x545196[_0x5e6732(801)][_0x5e6732(1262)],
                  label: _0x225adf.t(_0x5e6732(828)),
                  onChange: (_0x42cdb4) =>
                    _0xb66e4({ ..._0x15b44f, useValueAsSymbolSize: _0x42cdb4 }),
                }),
              }),
            ],
          }),
          (0, i[_0x5e6732(922)])(I, {
            label: _0x225adf.t(_0x5e6732(835)),
            children: (0, i[_0x5e6732(922)])(H, {
              inlineLabel: true,
              checked:
                (_0x15b44f == null ? undefined : _0x15b44f.emphasisEnabled) ??
                _0x545196[_0x5e6732(801)][_0x5e6732(957)],
              label: _0x225adf.t("chart-ui.common.emphasis"),
              onChange: (_0x206a31) =>
                _0xb66e4({ ..._0x15b44f, emphasisEnabled: _0x206a31 }),
            }),
          }),
        ],
      })
    : null;
}
function Ni(_0x471c00) {
  return _0x471c00 &&
    e[_0x4283ee(1226)][_0x4283ee(1429)](
      _0x471c00,
      e.ChartTypeBits[_0x4283ee(615)],
    )
    ? _0x4283ee(1345)
    : _0x471c00 &&
        e[_0x4283ee(1226)].baseOn(_0x471c00, e[_0x4283ee(653)][_0x4283ee(861)])
      ? _0x4283ee(1346)
      : _0x471c00 &&
          e[_0x4283ee(1226)].baseOn(
            _0x471c00,
            e[_0x4283ee(653)][_0x4283ee(1478)],
          )
        ? _0x4283ee(1136)
        : "category-series";
}
const Pi = { closeIndex: 4, highIndex: 2, lowIndex: 3, openIndex: 1 };
function Fi(_0xfcc54a) {
  let _0xa342ef = _0xfcc54a[_0x1fdd4c(1285)]((_0x2e6ef9) =>
    Number(_0x2e6ef9[_0x1fdd4c(1324)]),
  );
  return {
    openIndex: _0xa342ef[1] ?? Pi[_0x1fdd4c(723)],
    highIndex: _0xa342ef[2] ?? Pi[_0x1fdd4c(1779)],
    lowIndex: _0xa342ef[3] ?? Pi.lowIndex,
    closeIndex: _0xa342ef[4] ?? Pi.closeIndex,
  };
}
function Ii(_0x532f99) {
  var _0x4aef67;
  let _0x39e0a5 =
      typeof _0x532f99[_0x2f2ea7(1653)][_0x2f2ea7(1780)] == _0x2f2ea7(1577)
        ? _0x532f99[_0x2f2ea7(1653)][_0x2f2ea7(1780)]
        : Number(
            ((_0x4aef67 = _0x532f99[_0x2f2ea7(1361)][0]) == null
              ? undefined
              : _0x4aef67[_0x2f2ea7(1324)]) ?? 0,
          ),
    _0x72838f = Fi(_0x532f99[_0x2f2ea7(1361)]),
    _0x42bbe1 = _0x532f99[_0x2f2ea7(1653)].candlestick,
    _0x28c596 = {
      openIndex:
        typeof (_0x42bbe1 == null ? undefined : _0x42bbe1.openIndex) == "number"
          ? _0x42bbe1[_0x2f2ea7(723)]
          : _0x72838f[_0x2f2ea7(723)],
      highIndex:
        typeof (_0x42bbe1 == null ? undefined : _0x42bbe1.highIndex) ==
        _0x2f2ea7(1577)
          ? _0x42bbe1[_0x2f2ea7(1779)]
          : _0x72838f[_0x2f2ea7(1779)],
      lowIndex:
        typeof (_0x42bbe1 == null ? undefined : _0x42bbe1.lowIndex) == "number"
          ? _0x42bbe1[_0x2f2ea7(550)]
          : _0x72838f[_0x2f2ea7(550)],
      closeIndex:
        typeof (_0x42bbe1 == null ? undefined : _0x42bbe1.closeIndex) ==
        "number"
          ? _0x42bbe1.closeIndex
          : _0x72838f[_0x2f2ea7(1236)],
    },
    _0x58933d = [
      {
        key: _0x2f2ea7(1780),
        label: _0x532f99.labels[_0x2f2ea7(1345)][_0x2f2ea7(1853)],
        value: _0x39e0a5,
      },
      {
        key: _0x2f2ea7(723),
        label: _0x532f99[_0x2f2ea7(1110)][_0x2f2ea7(1345)][_0x2f2ea7(601)],
        value: _0x28c596[_0x2f2ea7(723)],
      },
      {
        key: _0x2f2ea7(1779),
        label: _0x532f99[_0x2f2ea7(1110)][_0x2f2ea7(1345)].high,
        value: _0x28c596.highIndex,
      },
      {
        key: _0x2f2ea7(550),
        label: _0x532f99[_0x2f2ea7(1110)][_0x2f2ea7(1345)][_0x2f2ea7(1093)],
        value: _0x28c596.lowIndex,
      },
      {
        key: _0x2f2ea7(1236),
        label: _0x532f99[_0x2f2ea7(1110)][_0x2f2ea7(1345)][_0x2f2ea7(621)],
        value: _0x28c596[_0x2f2ea7(1236)],
      },
    ];
  return (0, i.jsx)(_0x2f2ea7(1998), {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: _0x58933d[_0x2f2ea7(1285)]((_0x53c167) => {
      const _0x3e2aa0 = _0x2f2ea7;
      let _0x41a79f = new Set(
        _0x58933d
          .filter(
            (_0x208ec7) =>
              _0x208ec7[_0x3e2aa0(1198)] !== _0x53c167[_0x3e2aa0(1198)],
          )
          [_0x3e2aa0(1285)]((_0x5079f3) => _0x5079f3[_0x3e2aa0(1324)]),
      );
      return (0, i[_0x3e2aa0(922)])(
        A,
        {
          label: _0x53c167[_0x3e2aa0(1614)],
          value: String(_0x53c167[_0x3e2aa0(1324)]),
          options: _0x532f99[_0x3e2aa0(1361)][_0x3e2aa0(1285)]((_0x2e04b7) => ({
            ..._0x2e04b7,
            disabled: _0x41a79f[_0x3e2aa0(863)](
              Number(_0x2e04b7[_0x3e2aa0(1324)]),
            ),
          })),
          onChange: (_0x43d469) => {
            const _0xf990b4 = _0x3e2aa0;
            let _0x43f531 = Number(_0x43d469);
            _0x53c167[_0xf990b4(1198)] === _0xf990b4(1780)
              ? _0x532f99[_0xf990b4(507)]({
                  candlestick: _0x28c596,
                  categoryIndex: _0x43f531,
                })
              : _0x532f99[_0xf990b4(507)]({
                  candlestick: {
                    ..._0x28c596,
                    [_0x53c167[_0xf990b4(1198)]]: _0x43f531,
                  },
                  categoryIndex: _0x39e0a5,
                });
          },
        },
        _0x53c167[_0x3e2aa0(1198)],
      );
    }),
  });
}
function Li(_0x48ee75) {
  var _0x45e084, _0x385268;
  let _0x5cb8d0 =
    ((_0x45e084 = _0x48ee75[_0xdd3838(1653)].seriesIndexes) == null
      ? undefined
      : _0x45e084[0]) ??
    Number(
      ((_0x385268 = _0x48ee75[_0xdd3838(1361)][0]) == null
        ? undefined
        : _0x385268[_0xdd3838(1324)]) ?? 0,
    );
  return (0, i.jsx)(A, {
    label: _0x48ee75[_0xdd3838(1110)].histogramValue,
    value: String(_0x5cb8d0),
    options: _0x48ee75[_0xdd3838(1361)],
    onChange: (_0x458ffc) =>
      _0x48ee75[_0xdd3838(507)]({ seriesIndexes: [Number(_0x458ffc)] }),
  });
}
function Ri(_0x5bc2c2) {
  var _0x331851;
  let _0x3d9ebf = _0x5bc2c2.fields[_0x2b5816(1285)]((_0x509ef3) =>
      Number(_0x509ef3[_0x2b5816(1324)]),
    ),
    _0xb9f796 =
      ((_0x331851 = _0x5bc2c2[_0x2b5816(1653)][_0x2b5816(1238)]) == null
        ? undefined
        : _0x331851[0]) ??
      _0x3d9ebf[_0x3d9ebf[_0x2b5816(1579)] - 1] ??
      0,
    _0x2d946e =
      _0x5bc2c2[_0x2b5816(1653)][_0x2b5816(1333)] ??
      _0x3d9ebf[_0x2b5816(1573)]((_0x3e6802) => _0x3e6802 !== _0xb9f796),
    _0x2a4143 = new Set(_0x2d946e),
    _0x3f3558 = _0x5bc2c2[_0x2b5816(1361)][_0x2b5816(1573)]((_0x246a27) => {
      const _0x3e4b1b = _0x2b5816;
      let _0x2b7524 = Number(_0x246a27[_0x3e4b1b(1324)]);
      return _0x2b7524 !== _0xb9f796 && !_0x2a4143[_0x3e4b1b(863)](_0x2b7524);
    }),
    _0x5dbdfd = _0x5bc2c2.fields["filter"](
      (_0x416d5e) =>
        !_0x2a4143[_0x2b5816(863)](Number(_0x416d5e[_0x2b5816(1324)])),
    ),
    _0x99d268 = (_0x2d6e31) =>
      _0x5bc2c2[_0x2b5816(507)]({
        hierarchyIndexes: _0x2d6e31,
        seriesIndexes: [_0xb9f796],
      });
  return (0, i.jsxs)(_0x2b5816(1998), {
    className: _0x2b5816(1556),
    children: [
      (0, i[_0x2b5816(1557)])(_0x2b5816(1998), {
        children: [
          (0, i.jsx)(ie, { title: _0x5bc2c2.labels["treemapHierarchy"] }),
          (0, i.jsxs)(_0x2b5816(1998), {
            className: _0x2b5816(612),
            children: [
              _0x2d946e[_0x2b5816(1285)]((_0x3cd1b8, _0x5b3725) => {
                const _0x22c259 = _0x2b5816;
                let _0x5b4de3 = _0x5bc2c2[_0x22c259(1361)][_0x22c259(1507)](
                  (_0x337bac) =>
                    Number(_0x337bac[_0x22c259(1324)]) === _0x3cd1b8,
                );
                return (0, i[_0x22c259(1557)])(
                  _0x22c259(1998),
                  {
                    className: _0x22c259(1919),
                    children: [
                      (0, i[_0x22c259(922)])(_0x22c259(1998), {
                        className: _0x22c259(1379),
                        children:
                          (_0x5b4de3 == null
                            ? undefined
                            : _0x5b4de3[_0x22c259(1614)]) ?? String(_0x3cd1b8),
                      }),
                      (0, i.jsx)(t[_0x22c259(1420)], {
                        "aria-label":
                          _0x5bc2c2[_0x22c259(1110)][_0x22c259(1479)],
                        className: "!univer-size-6",
                        disabled: _0x5b3725 === 0,
                        size: "icon",
                        variant: _0x22c259(1245),
                        onClick: () => {
                          let _0x3297af = [..._0x2d946e];
                          (([_0x3297af[_0x5b3725 - 1], _0x3297af[_0x5b3725]] = [
                            _0x3297af[_0x5b3725],
                            _0x3297af[_0x5b3725 - 1],
                          ]),
                            _0x99d268(_0x3297af));
                        },
                        children: (0, i[_0x22c259(922)])(n[_0x22c259(1146)], {
                          "aria-hidden": true,
                        }),
                      }),
                      (0, i.jsx)(t[_0x22c259(1420)], {
                        "aria-label":
                          _0x5bc2c2[_0x22c259(1110)][_0x22c259(1479)],
                        className: _0x22c259(1440),
                        disabled: _0x5b3725 === _0x2d946e[_0x22c259(1579)] - 1,
                        size: _0x22c259(534),
                        variant: _0x22c259(1245),
                        onClick: () => {
                          let _0x20f558 = [..._0x2d946e];
                          (([_0x20f558[_0x5b3725], _0x20f558[_0x5b3725 + 1]] = [
                            _0x20f558[_0x5b3725 + 1],
                            _0x20f558[_0x5b3725],
                          ]),
                            _0x99d268(_0x20f558));
                        },
                        children: (0, i[_0x22c259(922)])(n[_0x22c259(1403)], {
                          "aria-hidden": true,
                        }),
                      }),
                      (0, i[_0x22c259(922)])(t[_0x22c259(1420)], {
                        "aria-label":
                          _0x5bc2c2[_0x22c259(1110)][_0x22c259(1479)],
                        className: _0x22c259(1440),
                        disabled: _0x2d946e[_0x22c259(1579)] <= 1,
                        size: _0x22c259(534),
                        variant: "text",
                        onClick: () =>
                          _0x99d268(
                            _0x2d946e.filter(
                              (_0x531bea, _0x214f93) => _0x214f93 !== _0x5b3725,
                            ),
                          ),
                        children: (0, i.jsx)(n[_0x22c259(1494)], {
                          "aria-hidden": true,
                        }),
                      }),
                    ],
                  },
                  _0x3cd1b8,
                );
              }),
              _0x3f3558[_0x2b5816(1579)] > 0 &&
                (0, i[_0x2b5816(922)])(t[_0x2b5816(1259)], {
                  "aria-label": _0x5bc2c2.labels[_0x2b5816(1479)],
                  className: _0x2b5816(808),
                  value: _0x5bc2c2[_0x2b5816(1110)].treemapHierarchy,
                  options: _0x3f3558,
                  onChange: (_0x4a2992) =>
                    _0x99d268([..._0x2d946e, Number(_0x4a2992)]),
                }),
            ],
          }),
        ],
      }),
      (0, i[_0x2b5816(922)])(A, {
        label: _0x5bc2c2.labels[_0x2b5816(1855)],
        value: String(_0xb9f796),
        options: _0x5dbdfd,
        onChange: (_0x8383b0) =>
          _0x5bc2c2[_0x2b5816(507)]({
            hierarchyIndexes: _0x2d946e,
            seriesIndexes: [Number(_0x8383b0)],
          }),
      }),
    ],
  });
}
function zi(_0x1ac425) {
  switch (Ni(_0x1ac425[_0x2bdbcf(553)])) {
    case _0x2bdbcf(1345):
      return (0, i[_0x2bdbcf(922)])(Ii, { ..._0x1ac425 });
    case _0x2bdbcf(1346):
      return (0, i[_0x2bdbcf(922)])(Li, { ..._0x1ac425 });
    case _0x2bdbcf(1136):
      return (0, i.jsx)(Ri, { ..._0x1ac425 });
    default:
      return null;
  }
}
function Bi(_0x5d32e6) {
  let _0x30337c = Ft()[_0x1b3a11(1066)](),
    _0x1264e6 = (0, o[_0x1b3a11(1451)])(
      _0x30337c.context$,
      _0x30337c[_0x1b3a11(1887)],
    );
  return (0, r[_0x1b3a11(1687)])(() => {
    const _0x36a242 = _0x1b3a11;
    let _0x37abf7 = new Set([
        ...(_0x1264e6[_0x36a242(1090)] ?? []),
        ...(_0x1264e6[_0x36a242(1514)] ?? []),
      ]),
      _0x53e97a = new Set(_0x1264e6[_0x36a242(1514)] ?? []);
    return {
      categoryFields: _0x5d32e6.filter((_0xfbc4a2) =>
        _0x37abf7[_0x36a242(863)](Number(_0xfbc4a2.value)),
      ),
      seriesFields: _0x5d32e6.filter((_0x59e86e) =>
        _0x53e97a[_0x36a242(863)](Number(_0x59e86e[_0x36a242(1324)])),
      ),
    };
  }, [_0x1264e6[_0x1b3a11(1090)], _0x1264e6.seriesResourceIndexes, _0x5d32e6]);
}
function Vi() {
  let _0x1f5551 = (0, o[_0x2e5ca5(858)])(a[_0x2e5ca5(1419)]),
    [_0x411d8b] = N("chartType", e[_0x2e5ca5(653)][_0x2e5ca5(1859)]),
    [_0x480718, _0x24ab43] = (0, r[_0x2e5ca5(1825)])(
      e[_0x2e5ca5(1749)][_0x2e5ca5(1768)],
    ),
    [_0x1e3f84, _0x4661c4] = N(_0x2e5ca5(1345)),
    _0x56bbc1 = _0x1e3f84 ?? {},
    _0x2fc46a = _0x56bbc1[_0x480718] ?? {},
    _0x39e8f5 = (_0x2e03f9) =>
      _0x4661c4({ ..._0x56bbc1, [_0x480718]: _0x2e03f9 }),
    _0x2edfac = e[_0x2e5ca5(1790)].candlestick[_0x480718],
    _0x5e7a1d = { ..._0x2edfac[_0x2e5ca5(1464)], ..._0x2fc46a.border },
    _0x33cc95 = _0x480718 !== e[_0x2e5ca5(1749)][_0x2e5ca5(1040)];
  return _0x411d8b === e[_0x2e5ca5(653)].Candlestick
    ? (0, i.jsxs)(_0x2e5ca5(1998), {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
        children: [
          (0, i[_0x2e5ca5(1557)])(O, {
            children: [
              (0, i[_0x2e5ca5(922)])(A, {
                label: _0x1f5551.t(_0x2e5ca5(1759)),
                options: Object.values(e[_0x2e5ca5(1749)])[_0x2e5ca5(1285)](
                  (_0x2c9311) => ({
                    value: _0x2c9311,
                    label: _0x1f5551.t(_0x2e5ca5(1631) + _0x2c9311),
                  }),
                ),
                value: _0x480718,
                onChange: _0x24ab43,
              }),
              (0, i[_0x2e5ca5(922)])(k, {
                allowClear: true,
                allowEmpty: true,
                label: _0x1f5551.t(_0x2e5ca5(1239)),
                min: 1,
                value: _0x56bbc1[_0x2e5ca5(1265)] ?? null,
                onChange: (_0x3f85ec) =>
                  _0x4661c4({ ..._0x56bbc1, candleWidth: _0x3f85ec }),
              }),
            ],
          }),
          _0x33cc95 &&
            (0, i[_0x2e5ca5(1557)])("div", {
              className: _0x2e5ca5(1556),
              children: [
                (0, i[_0x2e5ca5(1557)])(O, {
                  children: [
                    (0, i[_0x2e5ca5(922)])(M, {
                      emptyLabel: _0x1f5551.t(_0x2e5ca5(819)),
                      label: _0x1f5551.t(_0x2e5ca5(1398)),
                      pickerFallbackValue: _0x2edfac[_0x2e5ca5(1393)],
                      resetLabel: _0x1f5551.t(_0x2e5ca5(819)),
                      value: _0x2fc46a.color ?? _0x2edfac[_0x2e5ca5(1393)],
                      onChange: (_0x4e0a75) =>
                        _0x39e8f5({ ..._0x2fc46a, color: _0x4e0a75 }),
                    }),
                    (0, i[_0x2e5ca5(922)])(k, {
                      label: _0x1f5551.t(_0x2e5ca5(1207)),
                      max: U[_0x2e5ca5(628)],
                      min: U[_0x2e5ca5(1337)],
                      step: U.step,
                      value:
                        _0x2fc46a[_0x2e5ca5(944)] ?? _0x2edfac[_0x2e5ca5(944)],
                      onChange: (_0x13bd1b) =>
                        _0x39e8f5({ ..._0x2fc46a, fillOpacity: _0x13bd1b }),
                    }),
                  ],
                }),
                (0, i.jsx)(H, {
                  inlineLabel: true,
                  checked:
                    _0x2fc46a[_0x2e5ca5(904)] ?? _0x2edfac[_0x2e5ca5(904)],
                  label: _0x1f5551.t(_0x2e5ca5(867)),
                  onChange: (_0x28f294) =>
                    _0x39e8f5({ ..._0x2fc46a, hollow: _0x28f294 }),
                }),
              ],
            }),
          (0, i[_0x2e5ca5(1557)])(_0x2e5ca5(1998), {
            className: _0x2e5ca5(1556),
            children: [
              (0, i[_0x2e5ca5(1557)])(O, {
                children: [
                  (0, i[_0x2e5ca5(922)])(M, {
                    emptyLabel: _0x1f5551.t("chart-ui.editor.defaultColor"),
                    label: _0x1f5551.t(_0x2e5ca5(971)),
                    pickerFallbackValue:
                      _0x2edfac[_0x2e5ca5(1464)][_0x2e5ca5(1393)],
                    resetLabel: _0x1f5551.t(_0x2e5ca5(819)),
                    value: _0x5e7a1d.color,
                    onChange: (_0x2e1be0) =>
                      _0x39e8f5({
                        ..._0x2fc46a,
                        border: { ..._0x2fc46a.border, color: _0x2e1be0 },
                      }),
                  }),
                  (0, i[_0x2e5ca5(922)])(k, {
                    label: _0x1f5551.t(_0x2e5ca5(856)),
                    min: 0,
                    value: _0x5e7a1d.width,
                    onChange: (_0x3483ef) =>
                      _0x39e8f5({
                        ..._0x2fc46a,
                        border: { ..._0x2fc46a.border, width: _0x3483ef },
                      }),
                  }),
                ],
              }),
              (0, i[_0x2e5ca5(922)])(k, {
                label: _0x1f5551.t(_0x2e5ca5(555)),
                max: U[_0x2e5ca5(628)],
                min: U.min,
                step: U[_0x2e5ca5(1939)],
                value: _0x5e7a1d[_0x2e5ca5(577)],
                onChange: (_0x30f30f) =>
                  _0x39e8f5({
                    ..._0x2fc46a,
                    border: { ..._0x2fc46a.border, opacity: _0x30f30f },
                  }),
              }),
            ],
          }),
        ],
      })
    : null;
}
function Hi() {
  let _0x45ba19 = (0, o[_0x1f9aa6(858)])(a[_0x1f9aa6(1419)]),
    [_0x207963] = N(_0x1f9aa6(553), e[_0x1f9aa6(653)][_0x1f9aa6(1859)]),
    [_0x3e0bdf, _0x408731] = N(_0x1f9aa6(1346)),
    _0x16036b = _0x3e0bdf ?? {};
  return _0x207963 === e[_0x1f9aa6(653)][_0x1f9aa6(861)]
    ? (0, i[_0x1f9aa6(922)])(k, {
        allowClear: true,
        allowEmpty: true,
        label: _0x45ba19.t(_0x1f9aa6(521)),
        max: e[_0x1f9aa6(1791)],
        min: 0,
        step: 0.05,
        value:
          _0x16036b.binGap ??
          e[_0x1f9aa6(1790)][_0x1f9aa6(1346)][_0x1f9aa6(1502)],
        onChange: (_0x1c0bd2) => _0x408731({ ..._0x16036b, binGap: _0x1c0bd2 }),
      })
    : null;
}
const Ui = [e.LabelContentType["CategoryName"], e.LabelContentType["Value"]],
  Wi = {
    [e.TreemapParentLabelLayout["Banner"]]: "chart-ui.treemap.banner",
    [e.TreemapParentLabelLayout["Overlapping"]]: "chart-ui.treemap.overlapping",
    [e.TreemapParentLabelLayout["None"]]: "chart-ui.common.none",
  };
function Gi() {
  let _0x4bdc01 = (0, o.useDependency)(a[_0x5b9f1c(1419)]),
    [_0x2eb34f] = N(_0x5b9f1c(553), e[_0x5b9f1c(653)][_0x5b9f1c(1859)]),
    [_0x26a7a0, _0x443a50] = N("treemap"),
    _0x15318c = _0x26a7a0 ?? {},
    _0x38242b = {
      ...e[_0x5b9f1c(1790)][_0x5b9f1c(1136)].label,
      ..._0x15318c.label,
    },
    _0x1cb5a5 = z(_0x15318c[_0x5b9f1c(1614)], R),
    _0x28dc95 = Ui[_0x5b9f1c(1573)]((_0x38685e) =>
      e[_0x5b9f1c(1226)][_0x5b9f1c(863)](
        _0x38242b[_0x5b9f1c(1108)] ?? e[_0x5b9f1c(1567)][_0x5b9f1c(1549)],
        _0x38685e,
      ),
    )[_0x5b9f1c(1285)](String);
  return _0x2eb34f === e.ChartTypeBits[_0x5b9f1c(1478)]
    ? (0, i[_0x5b9f1c(1557)])(_0x5b9f1c(1998), {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
        children: [
          (0, i[_0x5b9f1c(922)])(A, {
            label: _0x4bdc01.t("chart-ui.treemap.parentLabelLayout"),
            options: Object[_0x5b9f1c(1596)](e[_0x5b9f1c(1854)]).map(
              (_0x1f47fc) => ({
                value: _0x1f47fc,
                label: _0x4bdc01.t(Wi[_0x1f47fc]),
              }),
            ),
            value:
              _0x15318c[_0x5b9f1c(752)] ??
              e.defaultChartConfig[_0x5b9f1c(1136)].parentLabelLayout,
            onChange: (_0x548980) =>
              _0x443a50({ ..._0x15318c, parentLabelLayout: _0x548980 }),
          }),
          (0, i[_0x5b9f1c(922)])(H, {
            inlineLabel: true,
            checked: _0x38242b[_0x5b9f1c(1755)] ?? false,
            label: _0x4bdc01.t(_0x5b9f1c(546)),
            onChange: (_0x421e6b) =>
              _0x443a50({
                ..._0x15318c,
                label: { ..._0x15318c[_0x5b9f1c(1614)], visible: _0x421e6b },
              }),
          }),
          _0x38242b[_0x5b9f1c(1755)] &&
            (0, i[_0x5b9f1c(1557)])(i.Fragment, {
              children: [
                (0, i[_0x5b9f1c(922)])(cr, {
                  label: _0x4bdc01.t(_0x5b9f1c(1466)),
                  options: [
                    {
                      value: String(e[_0x5b9f1c(1567)].CategoryName),
                      label: _0x4bdc01.t(_0x5b9f1c(1634)),
                    },
                    {
                      value: String(e[_0x5b9f1c(1567)][_0x5b9f1c(624)]),
                      label: _0x4bdc01.t("chart-ui.common.value"),
                    },
                  ],
                  value: _0x28dc95,
                  onChange: (_0x27e22b) => {
                    const _0x3e2cef = _0x5b9f1c;
                    let _0x2e48fe = Ui[_0x3e2cef(1573)]((_0x59080a) =>
                      _0x27e22b.includes(String(_0x59080a)),
                    )[_0x3e2cef(900)](
                      (_0x56c6f5, _0x25847d) => _0x56c6f5 | _0x25847d,
                      e[_0x3e2cef(1567)][_0x3e2cef(1549)],
                    );
                    _0x443a50({
                      ..._0x15318c,
                      label: {
                        ..._0x15318c[_0x3e2cef(1614)],
                        contentType: _0x2e48fe,
                      },
                    });
                  },
                }),
                e[_0x5b9f1c(1226)][_0x5b9f1c(863)](
                  _0x38242b[_0x5b9f1c(1108)] ?? e.LabelContentType["Empty"],
                  e.LabelContentType[_0x5b9f1c(624)],
                ) &&
                  (0, i[_0x5b9f1c(922)])(jt, {
                    label: _0x4bdc01.t(_0x5b9f1c(587)),
                    value: _0x38242b[_0x5b9f1c(1875)],
                    onChange: (_0x5262db) =>
                      _0x443a50({
                        ..._0x15318c,
                        label: { ..._0x15318c.label, format: _0x5262db },
                      }),
                  }),
                (0, i[_0x5b9f1c(922)])(V, {
                  colorPickerFallbackValue:
                    e[_0x5b9f1c(1790)][_0x5b9f1c(508)][_0x5b9f1c(1393)],
                  label: _0x4bdc01.t(_0x5b9f1c(852)),
                  value: _0x1cb5a5,
                  onChange: (_0x290094) =>
                    _0x443a50({
                      ..._0x15318c,
                      label: { ..._0x15318c[_0x5b9f1c(1614)], ...B(_0x290094) },
                    }),
                }),
              ],
            }),
        ],
      })
    : null;
}
function Ki(_0x4a46ec, _0xe29b0a) {
  let _0x272a70 = new Set(_0xe29b0a.map(String));
  return _0x4a46ec.filter(
    (_0x42c03b) => !_0x272a70[_0x1b525(863)](_0x42c03b[_0x1b525(1324)]),
  );
}
function qi() {
  let _0x58bdc2 = (0, o[_0x500cbd(858)])(a.LocaleService),
    [_0x246188 = { categoryFields: [], valueFields: [] }] = N(_0x500cbd(1931), {
      categoryFields: [],
      valueFields: [],
    }),
    [_0x49215f, _0x48c3bf] = N("chordMapping"),
    _0x4f7ac0 = _0x58bdc2.t(_0x500cbd(1132)),
    _0xb55471 = _0x58bdc2.t(_0x500cbd(1432)),
    _0x42d7cd = _0x58bdc2.t(_0x500cbd(545)),
    _0x2141a8 =
      (_0x49215f == null ? undefined : _0x49215f[_0x500cbd(1086)]) ??
      e[_0x500cbd(1813)][_0x500cbd(1086)],
    _0x558d25 =
      (_0x49215f == null ? undefined : _0x49215f[_0x500cbd(1519)]) ??
      e[_0x500cbd(1813)][_0x500cbd(1519)],
    _0x452deb = _0x49215f == null ? undefined : _0x49215f.valueIndex,
    _0x446149 = _0x2141a8 === _0x558d25,
    _0x1c0f2e = (_0xbf862b) => ({
      ..._0xbf862b,
      ...(_0x452deb === undefined ? {} : { valueIndex: _0x452deb }),
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(A, {
        label: _0x4f7ac0,
        options: _0x246188.categoryFields,
        value: String(_0x2141a8),
        onChange: (_0x4fc911) => {
          let _0x35c04c = Number(_0x4fc911);
          _0x48c3bf(
            _0x1c0f2e({ sourceIndex: _0x35c04c, targetIndex: _0x558d25 }),
          );
        },
      }),
      (0, i[_0x500cbd(922)])(A, {
        error: _0x446149 ? _0x58bdc2.t(_0x500cbd(487)) : undefined,
        label: _0xb55471,
        options: _0x246188.categoryFields,
        value: String(_0x558d25),
        onChange: (_0x5d3aea) => {
          let _0x51f189 = Number(_0x5d3aea);
          _0x48c3bf(
            _0x1c0f2e({ sourceIndex: _0x2141a8, targetIndex: _0x51f189 }),
          );
        },
      }),
      (0, i.jsx)(A, {
        label: _0x42d7cd,
        options: [
          { label: _0x58bdc2.t(_0x500cbd(1166)), value: "" },
          ...Ki(_0x246188[_0x500cbd(1349)], [_0x2141a8, _0x558d25]),
        ],
        value: _0x452deb === undefined ? "" : String(_0x452deb),
        onChange: (_0x1a65ad) =>
          _0x48c3bf({
            sourceIndex: _0x2141a8,
            targetIndex: _0x558d25,
            ...(_0x1a65ad === "" ? {} : { valueIndex: Number(_0x1a65ad) }),
          }),
      }),
    ],
  });
}
const Ji = { min: 0, max: 1, precision: 2, step: 0.01 },
  Yi = { min: 0, max: 1, precision: 2, step: 0.05 };
function Xi(_0x38025f) {
  return (0, e[_0x2c39c7(1099)])(_0x38025f);
}
function Zi(_0x4969df) {
  var _0x36b367, _0x5b6383;
  let _0x141442 = Xi(_0x4969df),
    _0x150383 =
      ((_0x36b367 = _0x141442.layout) == null
        ? undefined
        : _0x36b367[_0x5221da(1120)]) ?? Ji[_0x5221da(1337)],
    _0x3af8e8 =
      ((_0x5b6383 = _0x141442[_0x5221da(664)]) == null
        ? undefined
        : _0x5b6383[_0x5221da(1570)]) ?? Ji.max;
  return (
    _0x150383 < Ji[_0x5221da(1337)] ||
    _0x3af8e8 > Ji[_0x5221da(628)] ||
    _0x150383 >= _0x3af8e8
  );
}
function Qi() {
  let [_0x1a0ea3, _0x571186] = N(_0x398ec2(1782)),
    _0x399761 = (0, o[_0x398ec2(858)])(a.LocaleService),
    _0x521de7 = Xi(_0x1a0ea3)[_0x398ec2(1614)],
    _0x4b5e08 = z(
      _0x1a0ea3 == null ? undefined : _0x1a0ea3[_0x398ec2(1614)],
      R,
    ),
    _0x5e2ec6 = (_0x1443c8) =>
      _0x571186({
        ..._0x1a0ea3,
        label: {
          ...(_0x1a0ea3 == null ? undefined : _0x1a0ea3[_0x398ec2(1614)]),
          ..._0x1443c8,
        },
      });
  return (0, i[_0x398ec2(922)])(I, {
    label: (0, i.jsx)(Ci, {
      endSlot: (0, i[_0x398ec2(922)])(t[_0x398ec2(1138)], {
        checked: !!(_0x521de7 != null && _0x521de7[_0x398ec2(1755)]),
        contentClassName: "univer-sr-only",
        onChange: (_0x155c57) => _0x5e2ec6({ visible: !!_0x155c57 }),
        children: _0x399761.t("chart-ui.common.label"),
      }),
      children: _0x399761.t(_0x398ec2(1705)),
    }),
    children:
      (_0x521de7 == null ? undefined : _0x521de7[_0x398ec2(1755)]) &&
      (0, i[_0x398ec2(1557)])(_0x398ec2(1998), {
        className: _0x398ec2(1556),
        children: [
          (0, i[_0x398ec2(922)])(A, {
            label: _0x399761.t(_0x398ec2(1273)),
            options: [
              {
                value: e[_0x398ec2(897)].Inside,
                label: _0x399761.t("chart-ui.common.position.inside"),
              },
              {
                value: e[_0x398ec2(897)][_0x398ec2(1150)],
                label: _0x399761.t(_0x398ec2(1643)),
              },
            ],
            value: _0x521de7.position ?? e[_0x398ec2(897)][_0x398ec2(1934)],
            onChange: (_0x3f3642) => _0x5e2ec6({ position: _0x3f3642 }),
          }),
          (0, i[_0x398ec2(922)])(V, {
            colorPickerFallbackValue:
              _0x521de7[_0x398ec2(1393)] ??
              e[_0x398ec2(1790)].textStyle[_0x398ec2(1393)],
            label: _0x399761.t("chart-ui.common.font"),
            value: _0x4b5e08,
            onChange: (_0x5f49e8) => _0x5e2ec6(B(_0x5f49e8)),
          }),
        ],
      }),
  });
}
function $i() {
  let [_0x5225d2, _0x5645be] = N(_0x4686ec(1782)),
    _0x3bffdb = (0, o.useDependency)(a[_0x4686ec(1419)]),
    _0x15602f = Xi(_0x5225d2)[_0x4686ec(664)];
  function _0x8e94d7(_0x4a87b8) {
    const _0x412536 = _0x4686ec;
    _0x5645be({
      ..._0x5225d2,
      layout: {
        ...(_0x5225d2 == null ? undefined : _0x5225d2[_0x412536(664)]),
        ..._0x4a87b8,
      },
    });
  }
  return (0, i[_0x4686ec(1557)])(I, {
    label: _0x3bffdb.t(_0x4686ec(1059)),
    children: [
      (0, i[_0x4686ec(1557)])(O, {
        children: [
          (0, i[_0x4686ec(922)])(k, {
            ...Ji,
            label: _0x3bffdb.t("chart-ui.chord.innerRadius"),
            value:
              (_0x15602f == null ? undefined : _0x15602f.innerRadiusRatio) ??
              null,
            onChange: (_0x52ff76) =>
              _0x52ff76 !== null && _0x8e94d7({ innerRadiusRatio: _0x52ff76 }),
          }),
          (0, i[_0x4686ec(922)])(k, {
            ...Ji,
            label: _0x3bffdb.t(_0x4686ec(1044)),
            value:
              (_0x15602f == null ? undefined : _0x15602f[_0x4686ec(1570)]) ??
              null,
            onChange: (_0x24cafa) =>
              _0x24cafa !== null && _0x8e94d7({ outerRadiusRatio: _0x24cafa }),
          }),
        ],
      }),
      (0, i[_0x4686ec(922)])(k, {
        label: _0x3bffdb.t(_0x4686ec(1652)),
        min: 0,
        value:
          (_0x15602f == null ? undefined : _0x15602f[_0x4686ec(802)]) ?? null,
        onChange: (_0xd45eed) =>
          _0xd45eed !== null && _0x8e94d7({ padAngle: _0xd45eed }),
      }),
      Zi(_0x5225d2) &&
        (0, i.jsx)("p", {
          className: "univer-text-sm\x20univer-text-red-500",
          role: _0x4686ec(762),
          children: _0x3bffdb.t("chart-ui.chord.invalidRadii"),
        }),
    ],
  });
}
function ea() {
  let [_0x5eb613, _0x490858] = N(_0x18d033(1782)),
    _0x5cf98e = (0, o[_0x18d033(858)])(a[_0x18d033(1419)]),
    _0x4dd9a8 = Xi(_0x5eb613)[_0x18d033(1367)],
    _0x248199 = (_0x389d50) =>
      _0x490858({
        ..._0x5eb613,
        ribbon: {
          ...(_0x5eb613 == null ? undefined : _0x5eb613[_0x18d033(1367)]),
          ..._0x389d50,
        },
      });
  return (0, i[_0x18d033(922)])(I, {
    label: _0x5cf98e.t(_0x18d033(1947)),
    children: (0, i.jsxs)(O, {
      children: [
        (0, i[_0x18d033(922)])(A, {
          label: _0x5cf98e.t(_0x18d033(677)),
          options: [
            {
              value: e.ChartChordRibbonColorMode[_0x18d033(1618)],
              label: _0x5cf98e.t("chart-ui.chord.source"),
            },
            {
              value: e[_0x18d033(992)][_0x18d033(1611)],
              label: _0x5cf98e.t(_0x18d033(1432)),
            },
            {
              value: e[_0x18d033(992)][_0x18d033(1117)],
              label: _0x5cf98e.t(_0x18d033(1289)),
            },
          ],
          value:
            (_0x4dd9a8 == null ? undefined : _0x4dd9a8.color) ??
            e[_0x18d033(992)][_0x18d033(1117)],
          onChange: (_0x5463e4) => _0x248199({ color: _0x5463e4 }),
        }),
        (0, i[_0x18d033(922)])(k, {
          ...Yi,
          label: _0x5cf98e.t(_0x18d033(693)),
          value:
            (_0x4dd9a8 == null ? undefined : _0x4dd9a8[_0x18d033(577)]) ?? null,
          onChange: (_0x2163a4) =>
            _0x2163a4 !== null && _0x248199({ opacity: _0x2163a4 }),
        }),
      ],
    }),
  });
}
function ta() {
  let _0x492bb6 = (0, o[_0x5bac48(858)])(a[_0x5bac48(1419)]),
    [_0x49e447 = []] = N(_0x5bac48(860), []),
    [_0x2ee9f7, _0x189535] = N(_0x5bac48(1786)),
    [_0x1c0ae1, _0xa85ebc] = N(_0x5bac48(756)),
    _0x4d17b1 = _0x492bb6.t(_0x5bac48(1705)),
    _0x4e179e = _0x492bb6.t("chart-ui.common.value");
  return (0, i[_0x5bac48(1557)])(i[_0x5bac48(1762)], {
    children: [
      (0, i[_0x5bac48(922)])(A, {
        label: _0x4d17b1,
        options: _0x49e447[_0x5bac48(1573)](
          (_0x2eef02) => _0x2eef02[_0x5bac48(1324)] !== String(_0x1c0ae1),
        ),
        value: _0x2ee9f7 === undefined ? "" : String(_0x2ee9f7),
        onChange: (_0x14eced) => _0x189535(Number(_0x14eced)),
      }),
      (0, i[_0x5bac48(922)])(A, {
        label: _0x4e179e,
        options: _0x49e447[_0x5bac48(1573)](
          (_0x43a47a) => _0x43a47a[_0x5bac48(1324)] !== String(_0x2ee9f7),
        ),
        value: _0x1c0ae1 === undefined ? "" : String(_0x1c0ae1),
        onChange: (_0x197e81) => _0xa85ebc(Number(_0x197e81)),
      }),
    ],
  });
}
function na(_0x1dadf8) {
  return (0, e[_0x2d8175(1664)])(_0x1dadf8);
}
function ra(_0x705060, _0x3616e0) {
  return { ..._0x705060, ..._0x3616e0 };
}
function ia(_0x55e898) {
  let _0x4ac9b4 = _0x55e898 == null ? undefined : _0x55e898.min,
    _0x2f3594 = _0x55e898 == null ? undefined : _0x55e898.max;
  return (
    _0x4ac9b4 != null &&
    _0x2f3594 != null &&
    Number[_0x4b792a(1541)](_0x4ac9b4) &&
    Number[_0x4b792a(1541)](_0x2f3594) &&
    _0x4ac9b4 < _0x2f3594
  );
}
function aa(_0x34066e, _0x4ccd9f) {
  if (!ia(_0x4ccd9f)) return false;
  let { min: _0x2cdfa3, max: _0x233a6c } = _0x4ccd9f,
    _0x3f0365 = _0x2cdfa3;
  for (let _0x3e3c6f of _0x34066e) {
    if (
      !Number[_0x3678e6(1541)](_0x3e3c6f[_0x3678e6(2034)]) ||
      !Number[_0x3678e6(1541)](_0x3e3c6f.to) ||
      _0x3e3c6f.from < _0x2cdfa3 ||
      _0x3e3c6f[_0x3678e6(2034)] < _0x3f0365 ||
      _0x3e3c6f[_0x3678e6(2034)] >= _0x3e3c6f.to ||
      _0x3e3c6f.to > _0x233a6c
    )
      return false;
    _0x3f0365 = _0x3e3c6f.to;
  }
  return true;
}
function oa(_0x2197e2) {
  var _0x5a0820, _0x831549, _0x543dff, _0x5ef377;
  let _0x563f45 = na(_0x2197e2),
    _0x3969ae = _0x563f45[_0x4188c6(1662)] ?? [];
  if (!aa(_0x3969ae, _0x563f45[_0x4188c6(611)])) return;
  let _0x2cd7cc =
      ((_0x5a0820 = _0x3969ae[_0x3969ae[_0x4188c6(1579)] - 1]) == null
        ? undefined
        : _0x5a0820.to) ??
      ((_0x831549 = _0x563f45[_0x4188c6(611)]) == null
        ? undefined
        : _0x831549[_0x4188c6(1337)]),
    _0x22d091 =
      (_0x543dff = _0x563f45[_0x4188c6(611)]) == null
        ? undefined
        : _0x543dff[_0x4188c6(628)],
    _0x5a9323 =
      (_0x5ef377 = _0x563f45[_0x4188c6(1179)]) == null
        ? undefined
        : _0x5ef377[_0x4188c6(1393)];
  return _0x2cd7cc !== undefined &&
    _0x22d091 !== undefined &&
    _0x5a9323 !== undefined &&
    _0x2cd7cc < _0x22d091
    ? { from: _0x2cd7cc, to: _0x22d091, color: _0x5a9323 }
    : undefined;
}
function sa() {
  let [_0x250459, _0x2e76ea] = N(_0x52bed9(1598)),
    _0x317d04 = (0, o[_0x52bed9(858)])(a.LocaleService),
    _0x3309fa = na(_0x250459);
  return (0, i[_0x52bed9(922)])(I, {
    label: _0x317d04.t(_0x52bed9(1606)),
    children: (0, i[_0x52bed9(922)])(t[_0x52bed9(1956)], {
      className: _0x52bed9(1069),
      items: [
        {
          value: e[_0x52bed9(1284)][_0x52bed9(1901)],
          label: _0x317d04.t(_0x52bed9(1215)),
        },
        {
          value: e[_0x52bed9(1284)][_0x52bed9(1942)],
          label: _0x317d04.t(_0x52bed9(1188)),
        },
      ],
      value: _0x3309fa[_0x52bed9(1122)] ?? e[_0x52bed9(1284)][_0x52bed9(1901)],
      onChange: (_0x67fb7e) => _0x2e76ea(ra(_0x250459, { mode: _0x67fb7e })),
    }),
  });
}
function ca() {
  var _0xcda502, _0x5c57f2, _0x5230a1, _0x4d1ece, _0x4d5cfa, _0x185dab;
  let [_0x4dc78a, _0x2cea1e] = N(_0x1a11a5(1598)),
    _0x38fad2 = (0, o[_0x1a11a5(858)])(a.LocaleService),
    _0x3e84d2 = na(_0x4dc78a),
    _0x45f0fb = (_0x1da8c4) =>
      _0x2cea1e(
        ra(_0x4dc78a, {
          pointer: {
            ...(_0x4dc78a == null ? undefined : _0x4dc78a[_0x1a11a5(750)]),
            ..._0x1da8c4,
          },
        }),
      );
  return (0, i[_0x1a11a5(922)])(I, {
    label: (0, i[_0x1a11a5(922)])(Ci, {
      endSlot: (0, i[_0x1a11a5(922)])(t.Checkbox, {
        checked: !!(
          (_0xcda502 = _0x3e84d2[_0x1a11a5(750)]) != null &&
          _0xcda502[_0x1a11a5(1755)]
        ),
        contentClassName: _0x1a11a5(911),
        onChange: (_0x2c5f2) => _0x45f0fb({ visible: !!_0x2c5f2 }),
        children: _0x38fad2.t(_0x1a11a5(1818)),
      }),
      children: _0x38fad2.t(_0x1a11a5(1818)),
    }),
    children: (0, i[_0x1a11a5(1557)])(O, {
      children: [
        (0, i[_0x1a11a5(922)])(A, {
          disabled: !(
            (_0x5c57f2 = _0x3e84d2[_0x1a11a5(750)]) != null &&
            _0x5c57f2[_0x1a11a5(1755)]
          ),
          label: _0x38fad2.t(_0x1a11a5(1266)),
          options: [
            {
              value: e[_0x1a11a5(1018)].Needle,
              label: _0x38fad2.t("chart-ui.gauge.pointerNeedle"),
            },
            {
              value: e[_0x1a11a5(1018)][_0x1a11a5(1007)],
              label: _0x38fad2.t(_0x1a11a5(1141)),
            },
            {
              value: e[_0x1a11a5(1018)][_0x1a11a5(1623)],
              label: _0x38fad2.t(_0x1a11a5(1006)),
            },
          ],
          value:
            ((_0x5230a1 = _0x3e84d2.pointer) == null
              ? undefined
              : _0x5230a1.shape) ?? e[_0x1a11a5(1018)][_0x1a11a5(1540)],
          onChange: (_0xc62157) => _0x45f0fb({ shape: _0xc62157 }),
        }),
        (0, i[_0x1a11a5(922)])(M, {
          disabled: !(
            (_0x4d1ece = _0x3e84d2[_0x1a11a5(750)]) != null &&
            _0x4d1ece[_0x1a11a5(1755)]
          ),
          emptyLabel: _0x38fad2.t(_0x1a11a5(819)),
          label: _0x38fad2.t("chart-ui.common.color"),
          pickerFallbackValue:
            ((_0x4d5cfa = _0x3e84d2.pointer) == null
              ? undefined
              : _0x4d5cfa[_0x1a11a5(1393)]) ??
            e[_0x1a11a5(1790)].gauge[_0x1a11a5(750)].color,
          resetLabel: _0x38fad2.t(_0x1a11a5(819)),
          value:
            (_0x4dc78a == null ||
            (_0x185dab = _0x4dc78a[_0x1a11a5(750)]) == null
              ? undefined
              : _0x185dab[_0x1a11a5(1393)]) ?? null,
          onChange: (_0x4b261e) => _0x45f0fb({ color: _0x4b261e }),
        }),
      ],
    }),
  });
}
function la() {
  var _0x44e5bd, _0x121317, _0x243f4b, _0x491814;
  let [_0x4e70a9, _0xc044da] = N(_0x174663(1598)),
    _0x53f684 = (0, o[_0x174663(858)])(a[_0x174663(1419)]),
    _0x5bb34b = na(_0x4e70a9),
    _0x7b0fe5 = (_0xed6408) =>
      _0xc044da(
        ra(_0x4e70a9, {
          progress: {
            ...(_0x4e70a9 == null ? undefined : _0x4e70a9.progress),
            ..._0xed6408,
          },
        }),
      );
  return (0, i[_0x174663(922)])(I, {
    label: (0, i[_0x174663(922)])(Ci, {
      endSlot: (0, i.jsx)(t[_0x174663(1138)], {
        checked: !!(
          (_0x44e5bd = _0x5bb34b.progress) != null && _0x44e5bd.visible
        ),
        contentClassName: _0x174663(911),
        onChange: (_0xe54881) => _0x7b0fe5({ visible: !!_0xe54881 }),
        children: _0x53f684.t("chart-ui.gauge.progress"),
      }),
      children: _0x53f684.t("chart-ui.gauge.progress"),
    }),
    children: (0, i.jsx)(M, {
      disabled: !(
        (_0x121317 = _0x5bb34b[_0x174663(1179)]) != null &&
        _0x121317[_0x174663(1755)]
      ),
      emptyLabel: _0x53f684.t(_0x174663(819)),
      label: _0x53f684.t(_0x174663(677)),
      pickerFallbackValue:
        ((_0x243f4b = _0x5bb34b[_0x174663(1179)]) == null
          ? undefined
          : _0x243f4b[_0x174663(1393)]) ??
        e[_0x174663(1790)][_0x174663(1385)][_0x174663(1179)][_0x174663(1393)],
      resetLabel: _0x53f684.t(_0x174663(819)),
      value:
        (_0x4e70a9 == null || (_0x491814 = _0x4e70a9[_0x174663(1179)]) == null
          ? undefined
          : _0x491814[_0x174663(1393)]) ?? null,
      onChange: (_0x4795e8) => _0x7b0fe5({ color: _0x4795e8 }),
    }),
  });
}
function ua(_0x5d4825) {
  return (0, i[_0x1db1f0(922)])(I, {
    disabled: _0x5d4825[_0x1db1f0(1937)],
    error: _0x5d4825[_0x1db1f0(764)],
    help: _0x5d4825[_0x1db1f0(1899)],
    label: _0x5d4825[_0x1db1f0(1614)],
    children: (0, i[_0x1db1f0(1557)])(_0x1db1f0(1998), {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-2",
      role: "list",
      children: [
        _0x5d4825[_0x1db1f0(1914)][_0x1db1f0(1285)]((_0x475004, _0x14d86b) =>
          (0, i[_0x1db1f0(1557)])(
            _0x1db1f0(1998),
            {
              className: _0x1db1f0(1497),
              role: "listitem",
              children: [
                (0, i[_0x1db1f0(922)])("div", {
                  className: _0x1db1f0(866),
                  children: _0x5d4825[_0x1db1f0(953)](_0x475004, _0x14d86b),
                }),
                _0x5d4825[_0x1db1f0(1888)] &&
                  _0x5d4825[_0x1db1f0(597)] &&
                  _0x5d4825[_0x1db1f0(1142)] &&
                  (0, i[_0x1db1f0(1557)])(_0x1db1f0(1998), {
                    className: "univer-flex\x20univer-items-center",
                    children: [
                      (0, i[_0x1db1f0(922)])(t.Button, {
                        "aria-label": _0x5d4825[_0x1db1f0(597)](
                          _0x14d86b,
                          _0x475004,
                        ),
                        disabled: _0x5d4825[_0x1db1f0(1937)] || _0x14d86b === 0,
                        size: _0x1db1f0(534),
                        variant: _0x1db1f0(1245),
                        onClick: () => {
                          const _0x489bb1 = _0x1db1f0;
                          var _0x321da1;
                          return (_0x321da1 = _0x5d4825[_0x489bb1(1888)]) ==
                            null
                            ? undefined
                            : _0x321da1.call(
                                _0x5d4825,
                                _0x14d86b,
                                _0x14d86b - 1,
                              );
                        },
                        children: (0, i.jsx)(n[_0x1db1f0(1146)], {}),
                      }),
                      (0, i.jsx)(t[_0x1db1f0(1420)], {
                        "aria-label": _0x5d4825[_0x1db1f0(1142)](
                          _0x14d86b,
                          _0x475004,
                        ),
                        disabled:
                          _0x5d4825[_0x1db1f0(1937)] ||
                          _0x14d86b ===
                            _0x5d4825[_0x1db1f0(1914)][_0x1db1f0(1579)] - 1,
                        size: "icon",
                        variant: _0x1db1f0(1245),
                        onClick: () => {
                          const _0x2e070c = _0x1db1f0;
                          var _0x3a3414;
                          return (_0x3a3414 = _0x5d4825[_0x2e070c(1888)]) ==
                            null
                            ? undefined
                            : _0x3a3414[_0x2e070c(678)](
                                _0x5d4825,
                                _0x14d86b,
                                _0x14d86b + 1,
                              );
                        },
                        children: (0, i[_0x1db1f0(922)])(
                          n[_0x1db1f0(1403)],
                          {},
                        ),
                      }),
                    ],
                  }),
                (0, i[_0x1db1f0(922)])(t[_0x1db1f0(1420)], {
                  "aria-label": _0x5d4825[_0x1db1f0(1170)](
                    _0x14d86b,
                    _0x475004,
                  ),
                  disabled: _0x5d4825.disabled,
                  size: _0x1db1f0(534),
                  variant: _0x1db1f0(1245),
                  onClick: () => _0x5d4825[_0x1db1f0(967)](_0x14d86b),
                  children: (0, i.jsx)(n[_0x1db1f0(1494)], {}),
                }),
              ],
            },
            _0x5d4825.getItemKey(_0x475004, _0x14d86b),
          ),
        ),
        _0x5d4825[_0x1db1f0(1135)] &&
          _0x5d4825.addLabel &&
          (0, i[_0x1db1f0(922)])(t.Button, {
            disabled: _0x5d4825[_0x1db1f0(1937)],
            onClick: _0x5d4825.onAdd,
            children: _0x5d4825[_0x1db1f0(1732)],
          }),
      ],
    }),
  });
}
function da() {
  let [_0x4cb312, _0x151846] = N(_0x50afc6(1598)),
    _0x4bfa65 = (0, o[_0x50afc6(858)])(a[_0x50afc6(1419)]),
    _0x213f49 = na(_0x4cb312),
    _0x33d8e3 =
      (_0x4cb312 == null ? undefined : _0x4cb312[_0x50afc6(1662)]) ??
      _0x213f49[_0x50afc6(1662)] ??
      [],
    _0x274ce0 = oa(_0x4cb312),
    _0x1a0596 = aa(_0x33d8e3, _0x213f49[_0x50afc6(611)]);
  function _0x20b823(_0x865df2) {
    const _0x2a94cb = _0x50afc6;
    aa(_0x865df2, _0x213f49[_0x2a94cb(611)]) &&
      _0x151846(ra(_0x4cb312, { ranges: _0x865df2 }));
  }
  function _0x123dbd(_0x37be4d, _0xb1a39f) {
    const _0xaf040e = _0x50afc6;
    _0x20b823(
      _0x33d8e3[_0xaf040e(1285)]((_0x1d45ae, _0x5e9d9f) =>
        _0x5e9d9f === _0x37be4d ? { ..._0x1d45ae, ..._0xb1a39f } : _0x1d45ae,
      ),
    );
  }
  return (0, i.jsx)(ua, {
    addLabel: _0x4bfa65.t("chart-ui.gauge.addRange"),
    error: _0x1a0596
      ? undefined
      : _0x4bfa65.t("chart-ui.gauge.configDiagnostic"),
    getItemKey: (_0x46a7d7, _0x164931) => _0x164931,
    items: _0x33d8e3,
    label: _0x4bfa65.t(_0x50afc6(1740)),
    removeLabel: () => _0x4bfa65.t(_0x50afc6(1112)),
    renderItem: (_0x2fdd5c, _0x4e8175) => {
      const _0x5f3030 = _0x50afc6;
      var _0x558c20, _0x5bd69d, _0x1a8e95, _0x5bcd51;
      return (0, i.jsxs)(_0x5f3030(1998), {
        className: _0x5f3030(765),
        children: [
          (0, i[_0x5f3030(922)])(M, {
            emptyLabel: _0x4bfa65.t(_0x5f3030(819)),
            label: _0x4bfa65.t("chart-ui.common.color"),
            pickerFallbackValue: _0x2fdd5c[_0x5f3030(1393)],
            value: _0x2fdd5c[_0x5f3030(1393)],
            onChange: (_0x2f549e) =>
              _0x2f549e !== null && _0x123dbd(_0x4e8175, { color: _0x2f549e }),
          }),
          (0, i.jsx)(k, {
            label: _0x4bfa65.t(_0x5f3030(1756)),
            max: _0x2fdd5c.to,
            min:
              ((_0x558c20 = _0x33d8e3[_0x4e8175 - 1]) == null
                ? undefined
                : _0x558c20.to) ??
              ((_0x5bd69d = _0x213f49[_0x5f3030(611)]) == null
                ? undefined
                : _0x5bd69d.min),
            value: _0x2fdd5c.from,
            onChange: (_0xb9d599) =>
              _0xb9d599 !== null && _0x123dbd(_0x4e8175, { from: _0xb9d599 }),
          }),
          (0, i[_0x5f3030(922)])(k, {
            label: _0x4bfa65.t(_0x5f3030(870)),
            max:
              ((_0x1a8e95 = _0x33d8e3[_0x4e8175 + 1]) == null
                ? undefined
                : _0x1a8e95.from) ??
              ((_0x5bcd51 = _0x213f49.scale) == null
                ? undefined
                : _0x5bcd51[_0x5f3030(628)]),
            min: _0x2fdd5c[_0x5f3030(2034)],
            value: _0x2fdd5c.to,
            onChange: (_0x1bb728) =>
              _0x1bb728 !== null && _0x123dbd(_0x4e8175, { to: _0x1bb728 }),
          }),
        ],
      });
    },
    onAdd: _0x274ce0
      ? () => _0x151846(ra(_0x4cb312, { ranges: [..._0x33d8e3, _0x274ce0] }))
      : undefined,
    onRemove: (_0x5f2b9e) =>
      _0x151846(
        ra(_0x4cb312, {
          ranges: _0x33d8e3[_0x50afc6(1573)](
            (_0x2dabda, _0x997efc) => _0x997efc !== _0x5f2b9e,
          ),
        }),
      ),
  });
}
function fa() {
  var _0x1b605b, _0x37dc50, _0x54a997, _0x1e82a5;
  let [_0x539d5a, _0x510da7] = N("gaugeStyle"),
    _0x4fc18a = (0, o[_0x29d1df(858)])(a[_0x29d1df(1419)]),
    _0x1f9bb4 = na(_0x539d5a);
  function _0x2f6323(_0x397b6d) {
    const _0x2fb385 = _0x29d1df;
    ia({ ..._0x1f9bb4[_0x2fb385(611)], ..._0x397b6d }) &&
      _0x510da7(
        ra(_0x539d5a, {
          scale: {
            ...(_0x539d5a == null ? undefined : _0x539d5a[_0x2fb385(611)]),
            ..._0x397b6d,
          },
        }),
      );
  }
  return (0, i[_0x29d1df(922)])(I, {
    label: _0x4fc18a.t(_0x29d1df(1700)),
    children: (0, i[_0x29d1df(1557)])(O, {
      children: [
        (0, i[_0x29d1df(922)])(k, {
          label: _0x4fc18a.t(_0x29d1df(1802)),
          max:
            (_0x1b605b = _0x1f9bb4[_0x29d1df(611)]) == null
              ? undefined
              : _0x1b605b.max,
          value:
            ((_0x37dc50 = _0x1f9bb4.scale) == null
              ? undefined
              : _0x37dc50[_0x29d1df(1337)]) ?? null,
          onChange: (_0x5445dc) =>
            _0x5445dc !== null && _0x2f6323({ min: _0x5445dc }),
        }),
        (0, i[_0x29d1df(922)])(k, {
          label: _0x4fc18a.t(_0x29d1df(1539)),
          min:
            (_0x54a997 = _0x1f9bb4.scale) == null
              ? undefined
              : _0x54a997[_0x29d1df(1337)],
          value:
            ((_0x1e82a5 = _0x1f9bb4.scale) == null
              ? undefined
              : _0x1e82a5.max) ?? null,
          onChange: (_0x21b986) =>
            _0x21b986 !== null && _0x2f6323({ max: _0x21b986 }),
        }),
      ],
    }),
  });
}
const pa = [e.LabelContentType["CategoryName"], e.LabelContentType["Value"]];
function ma(_0x37fddb) {
  return (0, e[_0x5f200d(574)])(_0x37fddb);
}
function ha(_0x2ec70e) {
  return (0, e[_0x121037(943)])(_0x2ec70e);
}
function ga(_0x325dd0) {
  let _0x14471f =
    _0x325dd0 ?? e[_0x3ebdff(1790)][_0x3ebdff(1600)].label[_0x3ebdff(1108)];
  return pa[_0x3ebdff(1573)](
    (_0x1c149d) =>
      _0x14471f !== undefined &&
      e[_0x3ebdff(1226)][_0x3ebdff(863)](_0x14471f, _0x1c149d),
  )[_0x3ebdff(1285)](String);
}
function _a(_0x560d43) {
  let _0x42b6ca = pa[_0x200571(1573)]((_0xf183c5) =>
    _0x560d43.includes(String(_0xf183c5)),
  );
  return _0x42b6ca[_0x200571(1579)]
    ? _0x42b6ca[_0x200571(900)](
        (_0x2c42a4, _0x5d9805) => _0x2c42a4 | _0x5d9805,
        e[_0x200571(1567)][_0x200571(1549)],
      )
    : undefined;
}
const va = {
  bold: e.defaultChartConfig["sunburst"].centerLabel["bold"],
  color: e.defaultChartConfig["textStyle"].color,
  fontSize: e.defaultChartConfig["sunburst"].centerLabel["fontSize"],
  italic: e.defaultChartConfig["sunburst"].centerLabel["italic"],
};
function ya() {
  var _0x4a4f28;
  let [_0x434aa0, _0x50cf32] = N("sunburstStyle"),
    _0x2729da = (0, o.useDependency)(a.LocaleService),
    _0x4fcd69 = ha(_0x434aa0),
    _0xf4933c = z(_0x434aa0 == null ? undefined : _0x434aa0.centerLabel, va);
  return (0, i[_0x2c8e61(1557)])(i.Fragment, {
    children: [
      (0, i[_0x2c8e61(922)])(H, {
        checked: !!_0x4fcd69.visible,
        inlineLabel: true,
        label: _0x2729da.t("chart-ui.sunburst.centerLabel"),
        onChange: (_0xda4d17) =>
          _0x50cf32({
            ..._0x434aa0,
            centerLabel: {
              ...(_0x434aa0 == null ? undefined : _0x434aa0[_0x2c8e61(1211)]),
              visible: _0xda4d17,
            },
          }),
      }),
      _0x4fcd69[_0x2c8e61(1755)] &&
        (0, i[_0x2c8e61(1557)])(i[_0x2c8e61(1762)], {
          children: [
            (0, i[_0x2c8e61(922)])(jt, {
              label: _0x2729da.t(_0x2c8e61(587)),
              value:
                _0x434aa0 == null || (_0x4a4f28 = _0x434aa0.centerLabel) == null
                  ? undefined
                  : _0x4a4f28[_0x2c8e61(1875)],
              onChange: (_0x11f53f) =>
                _0x50cf32({
                  ..._0x434aa0,
                  centerLabel: {
                    ...(_0x434aa0 == null
                      ? undefined
                      : _0x434aa0[_0x2c8e61(1211)]),
                    format: _0x11f53f,
                  },
                }),
            }),
            (0, i[_0x2c8e61(922)])(V, {
              colorPickerFallbackValue:
                e[_0x2c8e61(1790)][_0x2c8e61(508)][_0x2c8e61(1393)],
              label: _0x2729da.t("chart-ui.sunburst.labelFormat"),
              value: _0xf4933c,
              onChange: (_0x3fa0f7) =>
                _0x50cf32({
                  ..._0x434aa0,
                  centerLabel: {
                    ...(_0x434aa0 == null
                      ? undefined
                      : _0x434aa0[_0x2c8e61(1211)]),
                    ...B(_0x3fa0f7),
                  },
                }),
            }),
          ],
        }),
    ],
  });
}
const ba = {
  add: "chart-ui.sunburst.addHierarchy",
  hierarchy: "chart-ui.sunburst.hierarchy",
  moveDown: "chart-ui.sunburst.moveDown",
  moveUp: "chart-ui.sunburst.moveUp",
  remove: "chart-ui.sunburst.removeHierarchy",
};
function xa() {
  let _0x21d318 = (0, o.useDependency)(a[_0x4963d2(1419)]),
    [_0x249934 = []] = N(_0x4963d2(727), []),
    [_0x56483a = [], _0x5e414f] = N(_0x4963d2(809), []),
    [_0x369dc9, _0x3ced3f] = N("sunburstValueIndex"),
    _0x2c1e9c = new Set(_0x56483a),
    _0x4e9505 = _0x21d318.t(ba[_0x4963d2(519)]),
    _0xf5156b = _0x21d318.t(_0x4963d2(545));
  return (0, i.jsxs)(i[_0x4963d2(1762)], {
    children: [
      (0, i[_0x4963d2(922)])(ua, {
        getItemKey: (_0x3bc635, _0x116f98) => _0x116f98 + ":" + _0x3bc635,
        items: _0x56483a,
        label: _0x21d318.t(ba[_0x4963d2(777)]),
        moveDownLabel: () => _0x21d318.t(ba[_0x4963d2(739)]),
        moveUpLabel: () => _0x21d318.t(ba[_0x4963d2(1675)]),
        removeLabel: () => _0x21d318.t(ba.remove),
        renderItem: (_0x4b754e) => {
          const _0x3ebb04 = _0x4963d2;
          var _0x509a8d;
          return (
            ((_0x509a8d = _0x249934[_0x3ebb04(1507)](
              (_0x356bf7) => _0x356bf7.value === String(_0x4b754e),
            )) == null
              ? undefined
              : _0x509a8d.label) ?? String(_0x4b754e)
          );
        },
        onMove: (_0x3306f3, _0x19138e) => {
          let _0x249c49 = [..._0x56483a];
          (([_0x249c49[_0x3306f3], _0x249c49[_0x19138e]] = [
            _0x249c49[_0x19138e],
            _0x249c49[_0x3306f3],
          ]),
            _0x5e414f(_0x249c49));
        },
        onRemove: (_0x21dc94) => {
          const _0x1eec7b = _0x4963d2;
          _0x56483a.length > 1 &&
            _0x5e414f(
              _0x56483a[_0x1eec7b(1573)](
                (_0x240878, _0x48cfde) => _0x48cfde !== _0x21dc94,
              ),
            );
        },
      }),
      (0, i.jsx)(A, {
        label: _0x4e9505,
        options: _0x249934.filter(
          (_0x26a06d) =>
            _0x26a06d[_0x4963d2(1324)] !== String(_0x369dc9) &&
            !_0x2c1e9c.has(Number(_0x26a06d[_0x4963d2(1324)])),
        ),
        value: "",
        onChange: (_0x1dab70) => _0x5e414f([..._0x56483a, Number(_0x1dab70)]),
      }),
      (0, i.jsx)(A, {
        label: _0xf5156b,
        options: _0x249934.filter(
          (_0x27280c) =>
            !_0x2c1e9c[_0x4963d2(863)](Number(_0x27280c[_0x4963d2(1324)])),
        ),
        value: _0x369dc9 === undefined ? "" : String(_0x369dc9),
        onChange: (_0x401b8d) => _0x3ced3f(Number(_0x401b8d)),
      }),
    ],
  });
}
const Sa = "auto";
function Ca() {
  var _0x31d2cc, _0x14dfc1;
  let [_0x3991b5, _0x430658] = N(_0x4c55ae(1889)),
    _0x8e75e1 = (0, o.useDependency)(a.LocaleService),
    _0x1a2f62 = ma(_0x3991b5),
    _0x19e578 = z(
      _0x3991b5 == null ? undefined : _0x3991b5[_0x4c55ae(1614)],
      R,
    ),
    _0x5e1253 = _0x8e75e1.t(_0x4c55ae(1705));
  return (0, i[_0x4c55ae(1557)])(i[_0x4c55ae(1762)], {
    children: [
      (0, i.jsx)(H, {
        checked: !!_0x1a2f62[_0x4c55ae(1755)],
        inlineLabel: true,
        label: _0x5e1253,
        onChange: (_0x2f394f) =>
          _0x430658({
            ..._0x3991b5,
            label: {
              ...(_0x3991b5 == null ? undefined : _0x3991b5[_0x4c55ae(1614)]),
              visible: _0x2f394f,
            },
          }),
      }),
      _0x1a2f62.visible &&
        (0, i.jsxs)(i[_0x4c55ae(1762)], {
          children: [
            (0, i[_0x4c55ae(922)])(cr, {
              label: _0x8e75e1.t(_0x4c55ae(1466)),
              options: pa[_0x4c55ae(1285)]((_0x129a2b) => ({
                value: String(_0x129a2b),
                label: _0x8e75e1.t(
                  _0x129a2b === e[_0x4c55ae(1567)][_0x4c55ae(602)]
                    ? _0x4c55ae(1634)
                    : _0x4c55ae(545),
                ),
              })),
              value: ga(_0x1a2f62[_0x4c55ae(1108)]),
              onChange: (_0x31ee77) => {
                const _0x13f6f6 = _0x4c55ae;
                let _0x58aa04 = _a(_0x31ee77);
                _0x58aa04 !== undefined &&
                  _0x430658({
                    ..._0x3991b5,
                    label: {
                      ...(_0x3991b5 == null
                        ? undefined
                        : _0x3991b5[_0x13f6f6(1614)]),
                      contentType: _0x58aa04,
                    },
                  });
              },
            }),
            (0, i[_0x4c55ae(922)])(A, {
              label: _0x8e75e1.t(_0x4c55ae(1668)),
              options: [
                { value: Sa, label: _0x8e75e1.t("chart-ui.common.auto") },
                {
                  value: e[_0x4c55ae(964)].Inside,
                  label: _0x8e75e1.t(_0x4c55ae(2031)),
                },
                {
                  value: e[_0x4c55ae(964)][_0x4c55ae(1150)],
                  label: _0x8e75e1.t(_0x4c55ae(1643)),
                },
              ],
              value:
                (_0x3991b5 == null ||
                (_0x31d2cc = _0x3991b5[_0x4c55ae(1614)]) == null
                  ? undefined
                  : _0x31d2cc[_0x4c55ae(1712)]) ?? Sa,
              onChange: (_0x206f5a) =>
                _0x430658({
                  ..._0x3991b5,
                  label: {
                    ...(_0x3991b5 == null ? undefined : _0x3991b5.label),
                    position: _0x206f5a === Sa ? null : _0x206f5a,
                  },
                }),
            }),
            e[_0x4c55ae(1226)][_0x4c55ae(863)](
              _0x1a2f62.contentType ?? e[_0x4c55ae(1567)][_0x4c55ae(1549)],
              e[_0x4c55ae(1567)].Value,
            ) &&
              (0, i[_0x4c55ae(922)])(jt, {
                label: _0x8e75e1.t("chart-ui.common.numberFormat"),
                value:
                  _0x3991b5 == null || (_0x14dfc1 = _0x3991b5.label) == null
                    ? undefined
                    : _0x14dfc1[_0x4c55ae(1875)],
                onChange: (_0x22197f) =>
                  _0x430658({
                    ..._0x3991b5,
                    label: {
                      ...(_0x3991b5 == null
                        ? undefined
                        : _0x3991b5[_0x4c55ae(1614)]),
                      format: _0x22197f,
                    },
                  }),
              }),
            (0, i.jsx)(V, {
              colorPickerFallbackValue:
                e.defaultChartConfig["textStyle"][_0x4c55ae(1393)],
              label: _0x8e75e1.t(_0x4c55ae(1033)),
              value: _0x19e578,
              onChange: (_0xe63db2) =>
                _0x430658({
                  ..._0x3991b5,
                  label: {
                    ...(_0x3991b5 == null
                      ? undefined
                      : _0x3991b5[_0x4c55ae(1614)]),
                    ...B(_0xe63db2),
                  },
                }),
            }),
          ],
        }),
    ],
  });
}
const wa = new Set([e.ChartTypeBits["Heatmap"], e.ChartTypeBits["Boxplot"]]);
function Ta() {
  let [_0xf78c07] = N(_0x2ed087(553));
  return _0xf78c07 === e.ChartTypeBits[_0x2ed087(615)] ||
    _0xf78c07 === e[_0x2ed087(653)][_0x2ed087(861)] ||
    _0xf78c07 === e.ChartTypeBits[_0x2ed087(1478)]
    ? (0, i.jsx)(ka, {})
    : _0xf78c07 === e[_0x2ed087(653)][_0x2ed087(746)]
      ? (0, i[_0x2ed087(922)])(Na, {})
      : _0xf78c07 === e[_0x2ed087(653)][_0x2ed087(1220)]
        ? (0, i[_0x2ed087(922)])(Fa, {})
        : _0xf78c07 === e.ChartTypeBits[_0x2ed087(826)]
          ? (0, i[_0x2ed087(922)])(La, {})
          : null;
}
function Ea() {
  let [_0x154d0b] = N(_0x1eece3(553));
  return _0x154d0b === e[_0x1eece3(653)][_0x1eece3(746)]
    ? (0, i[_0x1eece3(922)])(sa, {})
    : null;
}
function Da(_0x4334f4) {
  let _0x59241a =
      _0x4334f4[_0x50dc5e(1361)][_0x50dc5e(1579)] > 0 &&
      (_0x4334f4[_0x50dc5e(1411)] === undefined ||
        _0x4334f4[_0x50dc5e(1596)][_0x50dc5e(1579)] <
          _0x4334f4[_0x50dc5e(1411)]),
    _0x2bafa3 = new Map(),
    _0xa25f9a = _0x4334f4[_0x50dc5e(1596)][_0x50dc5e(1285)]((_0x12d479) => {
      const _0x496c89 = _0x50dc5e;
      let _0x2f4505 = _0x2bafa3[_0x496c89(977)](_0x12d479) ?? 0;
      return (
        _0x2bafa3.set(_0x12d479, _0x2f4505 + 1),
        { key: _0x12d479 + "-" + _0x2f4505, value: _0x12d479 }
      );
    });
  return (0, i[_0x50dc5e(922)])(I, {
    label: _0x4334f4[_0x50dc5e(1614)],
    children: (0, i.jsxs)("div", {
      className: _0x50dc5e(612),
      children: [
        _0xa25f9a.map((_0x4bc3c5, _0x1f74a5) =>
          (0, i[_0x50dc5e(1557)])(
            _0x50dc5e(1998),
            {
              className: _0x50dc5e(1497),
              children: [
                (0, i[_0x50dc5e(922)])(t.Select, {
                  className: "univer-w-full\x20!univer-min-w-0",
                  options: _0x4334f4[_0x50dc5e(1361)],
                  value: String(_0x4bc3c5[_0x50dc5e(1324)]),
                  onChange: (_0x28d263) => {
                    const _0x5b72dd = _0x50dc5e;
                    let _0x59c960 =
                      _0x4334f4[_0x5b72dd(1596)][_0x5b72dd(1980)]();
                    ((_0x59c960[_0x1f74a5] = Number(_0x28d263)),
                      _0x4334f4[_0x5b72dd(507)](_0x59c960));
                  },
                }),
                (0, i[_0x50dc5e(922)])(t[_0x50dc5e(1420)], {
                  "aria-label": _0x4334f4[_0x50dc5e(1170)],
                  size: _0x50dc5e(534),
                  variant: _0x50dc5e(1245),
                  onClick: () =>
                    _0x4334f4[_0x50dc5e(507)](
                      _0x4334f4[_0x50dc5e(1596)][_0x50dc5e(1573)](
                        (_0x1f5b28, _0x66e5dd) => _0x66e5dd !== _0x1f74a5,
                      ),
                    ),
                  children: (0, i[_0x50dc5e(922)])(n[_0x50dc5e(1494)], {}),
                }),
              ],
            },
            _0x4bc3c5[_0x50dc5e(1198)],
          ),
        ),
        _0x59241a &&
          (0, i[_0x50dc5e(922)])(t[_0x50dc5e(744)], {
            items: _0x4334f4.fields[_0x50dc5e(1285)]((_0x5e00a2) => ({
              type: "item",
              children: _0x5e00a2[_0x50dc5e(1614)],
              onSelect: () =>
                _0x4334f4[_0x50dc5e(507)]([
                  ..._0x4334f4[_0x50dc5e(1596)],
                  Number(_0x5e00a2.value),
                ]),
            })),
            children: (0, i[_0x50dc5e(1557)])(t[_0x50dc5e(1420)], {
              "aria-label": _0x4334f4[_0x50dc5e(1614)],
              size: _0x50dc5e(1499),
              children: [
                (0, i[_0x50dc5e(922)])(n.IncreaseIcon, {
                  className: _0x50dc5e(1986),
                }),
                (0, i.jsx)(_0x50dc5e(1904), {
                  className: _0x50dc5e(627),
                  children: _0x4334f4[_0x50dc5e(1614)],
                }),
              ],
            }),
          }),
      ],
    }),
  });
}
function Oa(_0x279e6a) {
  let _0x37b71a = (0, o.useDependency)(a[_0x23c324(1419)]),
    [_0x3edf12] = N(_0x23c324(553)),
    [_0x588445, _0x506aa8] = N(_0x23c324(1653)),
    [_0x45035e] = N(_0x23c324(954)),
    [_0x436f8d, _0x117938] = N(_0x23c324(623)),
    _0x2d3d9a = _0x45035e ?? [],
    { categoryFields: _0x1b94a7, seriesFields: _0x45d8f3 } = Bi(_0x2d3d9a);
  if (
    !_0x3edf12 ||
    [
      e[_0x23c324(653)][_0x23c324(615)],
      e.ChartTypeBits[_0x23c324(861)],
      e[_0x23c324(653)][_0x23c324(1478)],
      e[_0x23c324(653)][_0x23c324(1220)],
      e[_0x23c324(653)][_0x23c324(746)],
      e.ChartTypeBits[_0x23c324(826)],
    ][_0x23c324(1399)]((_0x57b25e) =>
      e[_0x23c324(1226)].baseOn(_0x3edf12, _0x57b25e),
    )
  )
    return null;
  if (
    _0x3edf12 === e[_0x23c324(653)][_0x23c324(1757)] ||
    _0x3edf12 === e.ChartTypeBits[_0x23c324(572)]
  ) {
    var _0x2ed6fd, _0x3982e5;
    let _0xea7fa0 = _0x588445 == null ? undefined : _0x588445[_0x23c324(630)],
      _0x40f5f0 =
        (_0xea7fa0 == null ? undefined : _0xea7fa0[_0x23c324(1086)]) ??
        Number(
          ((_0x2ed6fd = _0x2d3d9a[0]) == null
            ? undefined
            : _0x2ed6fd[_0x23c324(1324)]) ?? 0,
        ),
      _0x35e81b =
        (_0xea7fa0 == null ? undefined : _0xea7fa0[_0x23c324(1519)]) ??
        Number(
          ((_0x3982e5 = _0x2d3d9a[1]) == null
            ? undefined
            : _0x3982e5[_0x23c324(1324)]) ?? 1,
        ),
      _0x10ca8b = _0xea7fa0 == null ? undefined : _0xea7fa0[_0x23c324(759)],
      _0x17ba88 = (_0x32148f) =>
        _0x506aa8({
          ..._0x588445,
          edge: {
            sourceIndex: _0x40f5f0,
            targetIndex: _0x35e81b,
            ..._0xea7fa0,
            ..._0x32148f,
          },
        });
    return (0, i[_0x23c324(1557)])(_0x23c324(1998), {
      className: _0x23c324(1556),
      children: [
        (0, i[_0x23c324(922)])(A, {
          label: _0x37b71a.t("chart-ui.chord.source"),
          options: _0x1b94a7,
          value: String(_0x40f5f0),
          onChange: (_0x59b5cd) =>
            _0x17ba88({ sourceIndex: Number(_0x59b5cd) }),
        }),
        (0, i[_0x23c324(922)])(A, {
          label: _0x37b71a.t(_0x23c324(1432)),
          options: _0x1b94a7,
          value: String(_0x35e81b),
          onChange: (_0x1ab690) =>
            _0x17ba88({ targetIndex: Number(_0x1ab690) }),
        }),
        (0, i[_0x23c324(922)])(A, {
          label: _0x37b71a.t(_0x23c324(545)),
          options: _0x45d8f3,
          value: _0x10ca8b === undefined ? "" : String(_0x10ca8b),
          onChange: (_0x4839eb) =>
            _0x17ba88({
              valueIndex: _0x4839eb === "" ? undefined : Number(_0x4839eb),
            }),
        }),
        _0x279e6a[_0x23c324(1974)],
      ],
    });
  }
  if (
    e[_0x23c324(1226)][_0x23c324(1429)](_0x3edf12, e[_0x23c324(653)].Bubble)
  ) {
    var _0x5cd7d5, _0x2eb405;
    let _0xfb14b1 = _0x588445 == null ? undefined : _0x588445[_0x23c324(1491)],
      _0x24fe2f =
        (_0xfb14b1 == null ? undefined : _0xfb14b1[_0x23c324(1702)]) ??
        Number(
          ((_0x5cd7d5 = _0x2d3d9a[0]) == null ? undefined : _0x5cd7d5.value) ??
            0,
        ),
      _0x956177 =
        (_0xfb14b1 == null ? undefined : _0xfb14b1.yIndex) ??
        Number(
          ((_0x2eb405 = _0x2d3d9a[1]) == null
            ? undefined
            : _0x2eb405[_0x23c324(1324)]) ?? 1,
        ),
      _0xcb4088 = _0x37b71a.t(_0x23c324(1569));
    return (0, i[_0x23c324(1557)])(_0x23c324(1998), {
      className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
      children: [
        (0, i[_0x23c324(922)])(A, {
          allowClear: true,
          clearLabel: _0xcb4088,
          label: _0x37b71a.t("chart-ui.common.category"),
          options: _0x1b94a7,
          value:
            (_0xfb14b1 == null ? undefined : _0xfb14b1.labelIndex) === undefined
              ? ""
              : String(_0xfb14b1[_0x23c324(1798)]),
          onChange: (_0x334ca2) =>
            _0x506aa8({
              ..._0x588445,
              bubble: {
                ..._0xfb14b1,
                xIndex: _0x24fe2f,
                yIndex: _0x956177,
                labelIndex: _0x334ca2 === "" ? undefined : Number(_0x334ca2),
              },
            }),
          onClear: () => {
            const _0x5a491f = _0x23c324;
            let _0x13cfbe = {
              ..._0xfb14b1,
              xIndex: _0x24fe2f,
              yIndex: _0x956177,
            };
            (delete _0x13cfbe[_0x5a491f(1798)],
              delete _0x13cfbe.seriesIndex,
              _0x506aa8({
                ..._0x588445,
                bubble: _0x13cfbe,
                categoryIndex: null,
                categoryIndexes: [],
              }));
          },
        }),
        (0, i[_0x23c324(922)])(A, {
          allowClear: true,
          clearLabel: _0xcb4088,
          label: _0x37b71a.t(_0x23c324(1738)),
          options: _0x1b94a7,
          value:
            (_0xfb14b1 == null ? undefined : _0xfb14b1[_0x23c324(1912)]) ===
            undefined
              ? ""
              : String(_0xfb14b1[_0x23c324(1912)]),
          onChange: (_0x374d8f) =>
            _0x506aa8({
              ..._0x588445,
              bubble: {
                ..._0xfb14b1,
                xIndex: _0x24fe2f,
                yIndex: _0x956177,
                seriesIndex: _0x374d8f === "" ? undefined : Number(_0x374d8f),
              },
            }),
          onClear: () => {
            const _0x434611 = _0x23c324;
            let _0x525807 = {
              ..._0xfb14b1,
              xIndex: _0x24fe2f,
              yIndex: _0x956177,
            };
            delete _0x525807[_0x434611(1912)];
            let _0x249be6 =
              typeof _0x525807.labelIndex == "number"
                ? _0x525807.labelIndex
                : undefined;
            (_0x249be6 === undefined && delete _0x525807.labelIndex,
              _0x506aa8({
                ..._0x588445,
                bubble: _0x525807,
                categoryIndex: _0x249be6 ?? null,
                categoryIndexes: _0x249be6 === undefined ? [] : [_0x249be6],
              }));
          },
        }),
        (0, i.jsxs)(O, {
          children: [
            (0, i.jsx)(A, {
              label: _0x37b71a.t("chart-ui.common.horizontalAxis"),
              options: _0x45d8f3,
              value: String(_0x24fe2f),
              onChange: (_0x2025d2) =>
                _0x506aa8({
                  ..._0x588445,
                  bubble: {
                    ..._0xfb14b1,
                    xIndex: Number(_0x2025d2),
                    yIndex: _0x956177,
                  },
                }),
            }),
            (0, i[_0x23c324(922)])(A, {
              label: _0x37b71a.t(_0x23c324(1746)),
              options: _0x45d8f3,
              value: String(_0x956177),
              onChange: (_0x50b8da) =>
                _0x506aa8({
                  ..._0x588445,
                  bubble: {
                    ..._0xfb14b1,
                    xIndex: _0x24fe2f,
                    yIndex: Number(_0x50b8da),
                  },
                }),
            }),
          ],
        }),
        (0, i.jsx)(A, {
          allowClear: true,
          clearLabel: _0xcb4088,
          label: _0x37b71a.t(_0x23c324(1667)),
          options: _0x45d8f3,
          value:
            (_0xfb14b1 == null ? undefined : _0xfb14b1.sizeIndex) === undefined
              ? ""
              : String(_0xfb14b1[_0x23c324(1911)]),
          onChange: (_0x544d50) =>
            _0x506aa8({
              ..._0x588445,
              bubble: {
                ..._0xfb14b1,
                xIndex: _0x24fe2f,
                yIndex: _0x956177,
                sizeIndex: _0x544d50 === "" ? undefined : Number(_0x544d50),
              },
            }),
          onClear: () => {
            const _0x39f530 = _0x23c324;
            let _0xe86001 = {
              ..._0xfb14b1,
              xIndex: _0x24fe2f,
              yIndex: _0x956177,
            };
            (delete _0xe86001[_0x39f530(1911)],
              _0x506aa8({
                ..._0x588445,
                bubble: _0xe86001,
                seriesIndexes: [_0x24fe2f, _0x956177],
              }));
          },
        }),
      ],
    });
  }
  let _0x4309d9 = _0x588445 == null ? undefined : _0x588445[_0x23c324(1780)],
    _0x4679bd =
      (_0x588445 == null ? undefined : _0x588445[_0x23c324(1238)]) ?? [],
    _0x777562 = !wa[_0x23c324(863)](_0x3edf12),
    _0x2b27f5 =
      _0x3edf12 === e[_0x23c324(653)][_0x23c324(1546)]
        ? _0x23c324(1323)
        : _0x23c324(925);
  return (0, i[_0x23c324(1557)])(_0x23c324(1998), {
    className: _0x23c324(1556),
    children: [
      (0, i[_0x23c324(922)])(A, {
        allowClear: dn(_0x3edf12),
        clearLabel: _0x37b71a.t(_0x23c324(1569)),
        label: _0x37b71a.t(_0x2b27f5),
        options: _0x1b94a7,
        value: typeof _0x4309d9 == _0x23c324(1577) ? String(_0x4309d9) : "",
        onChange: (_0x3b5111) =>
          _0x506aa8(
            _0x3edf12 === e[_0x23c324(653)][_0x23c324(1546)]
              ? { categoryIndexes: [Number(_0x3b5111)] }
              : { ..._0x588445, categoryIndex: Number(_0x3b5111) },
          ),
        onClear: () =>
          _0x506aa8(
            _0x3edf12 === e[_0x23c324(653)].Scatter
              ? { categoryIndexes: [] }
              : { ..._0x588445, categoryIndex: null, categoryIndexes: [] },
          ),
      }),
      _0x777562 &&
        (0, i[_0x23c324(922)])(H, {
          inlineLabel: true,
          checked:
            (_0x436f8d == null ? undefined : _0x436f8d[_0x23c324(924)]) ===
            true,
          label: _0x37b71a.t(_0x23c324(915)),
          onChange: (_0x4b34d9) =>
            _0x117938({
              ...(_0x436f8d ?? {}),
              aggregate: _0x4b34d9 ? true : null,
            }),
        }),
      (0, i[_0x23c324(922)])(Da, {
        fields: _0x45d8f3,
        label: _0x37b71a.t("chart-ui.common.series"),
        maxValues: e[_0x23c324(1226)][_0x23c324(1429)](
          _0x3edf12,
          e[_0x23c324(653)][_0x23c324(600)],
        )
          ? 1
          : undefined,
        removeLabel: _0x37b71a.t(_0x23c324(1569)),
        values: _0x4679bd,
        onChange: (_0x425e72) =>
          _0x506aa8({ ..._0x588445, seriesIndexes: _0x425e72 }),
      }),
      _0x279e6a[_0x23c324(581)] &&
        (0, i[_0x23c324(922)])(H, {
          inlineLabel: true,
          checked: typeof _0x4309d9 == _0x23c324(1577),
          label: _0x279e6a[_0x23c324(581)],
          onChange: (_0x38ac7d) => {
            const _0x1d9956 = _0x23c324;
            if (_0x38ac7d) {
              let [_0x32c7f0, ..._0x86ac95] = _0x4679bd;
              if (_0x32c7f0 === undefined) return;
              _0x506aa8({
                ..._0x588445,
                categoryIndex: _0x32c7f0,
                seriesIndexes: _0x86ac95,
              });
              return;
            }
            _0x506aa8({
              ..._0x588445,
              categoryIndex: null,
              seriesIndexes:
                typeof _0x4309d9 == _0x1d9956(1577) &&
                !_0x4679bd[_0x1d9956(1868)](_0x4309d9)
                  ? [_0x4309d9, ..._0x4679bd]
                  : _0x4679bd,
            });
          },
        }),
      _0x279e6a[_0x23c324(1974)],
    ],
  });
}
function ka() {
  let _0x13ec4e = (0, o[_0x2db4c3(858)])(a[_0x2db4c3(1419)]),
    [_0x14c0ee] = N(_0x2db4c3(553)),
    [_0x515349, _0xd03fd5] = N(_0x2db4c3(1653)),
    [_0x438c87] = N(_0x2db4c3(954), []);
  return (0, i[_0x2db4c3(1557)])(_0x2db4c3(1998), {
    className: _0x2db4c3(1556),
    children: [
      (0, i[_0x2db4c3(922)])(zi, {
        chartType: _0x14c0ee,
        mapping: _0x515349 ?? {},
        fields: _0x438c87,
        labels: {
          candlestick: {
            category: _0x13ec4e.t(_0x2db4c3(925)),
            open: _0x13ec4e.t("chart-ui.candlestick.open"),
            high: _0x13ec4e.t(_0x2db4c3(812)),
            low: _0x13ec4e.t(_0x2db4c3(1587)),
            close: _0x13ec4e.t(_0x2db4c3(995)),
          },
          histogramValue: _0x13ec4e.t("chart-ui.common.valueField"),
          treemapHierarchy: _0x13ec4e.t(_0x2db4c3(1670)),
          treemapValue: _0x13ec4e.t(_0x2db4c3(749)),
        },
        onChange: (_0x235f53) => _0xd03fd5({ ..._0x515349, ..._0x235f53 }),
      }),
      _0x14c0ee === e[_0x2db4c3(653)][_0x2db4c3(861)] &&
        (0, i[_0x2db4c3(922)])(ja, {}),
    ],
  });
}
const Aa = "auto";
function ja() {
  var _0x70dfc4, _0x1d9602, _0x196485;
  let _0x3838ab = (0, o.useDependency)(a[_0x9ee8a9(1419)]),
    [_0xf919ae, _0x407d50] = N(_0x9ee8a9(1346)),
    _0x5eb43a = _0xf919ae ?? {},
    _0x6c4f8a =
      ((_0x70dfc4 = _0x5eb43a[_0x9ee8a9(1308)]) == null
        ? undefined
        : _0x70dfc4.mode) ?? Aa;
  return (0, i[_0x9ee8a9(1557)])(i[_0x9ee8a9(1762)], {
    children: [
      (0, i.jsx)(A, {
        label: _0x3838ab.t(_0x9ee8a9(976)),
        options: [
          { value: Aa, label: _0x3838ab.t(_0x9ee8a9(893)) },
          {
            value: e[_0x9ee8a9(947)][_0x9ee8a9(1002)],
            label: _0x3838ab.t(_0x9ee8a9(1298)),
          },
          {
            value: e[_0x9ee8a9(947)].Width,
            label: _0x3838ab.t("chart-ui.histogram.width"),
          },
        ],
        value: _0x6c4f8a,
        onChange: (_0x47b7b2) => {
          const _0x20a6b8 = _0x9ee8a9;
          let _0x49fd35;
          switch (_0x47b7b2) {
            case Aa:
              _0x49fd35 = null;
              break;
            case e.HistogramBinningMode[_0x20a6b8(1002)]:
              _0x49fd35 = {
                mode: e[_0x20a6b8(947)].Count,
                count: e.DEFAULT_HISTOGRAM_BIN_COUNT,
              };
              break;
            default:
              _0x49fd35 = {
                mode: e.HistogramBinningMode["Width"],
                width: e[_0x20a6b8(1665)],
              };
          }
          _0x407d50({ ..._0x5eb43a, binning: _0x49fd35 });
        },
      }),
      ((_0x1d9602 = _0x5eb43a[_0x9ee8a9(1308)]) == null
        ? undefined
        : _0x1d9602[_0x9ee8a9(1122)]) === e[_0x9ee8a9(947)][_0x9ee8a9(1002)] &&
        (0, i[_0x9ee8a9(922)])(k, {
          label: _0x3838ab.t(_0x9ee8a9(903)),
          max: e[_0x9ee8a9(1601)],
          min: 1,
          precision: 0,
          step: 1,
          value: _0x5eb43a[_0x9ee8a9(1308)][_0x9ee8a9(1602)] ?? null,
          onChange: (_0xe81438) =>
            _0xe81438 !== null &&
            _0x407d50({
              ..._0x5eb43a,
              binning: {
                mode: e.HistogramBinningMode["Count"],
                count: _0xe81438,
              },
            }),
        }),
      ((_0x196485 = _0x5eb43a[_0x9ee8a9(1308)]) == null
        ? undefined
        : _0x196485[_0x9ee8a9(1122)]) === e[_0x9ee8a9(947)][_0x9ee8a9(771)] &&
        (0, i[_0x9ee8a9(922)])(k, {
          label: _0x3838ab.t(_0x9ee8a9(598)),
          min: 2 ** -52,
          value: _0x5eb43a.binning[_0x9ee8a9(989)] ?? null,
          onChange: (_0x37e4c0) =>
            _0x37e4c0 !== null &&
            _0x407d50({
              ..._0x5eb43a,
              binning: {
                mode: e[_0x9ee8a9(947)][_0x9ee8a9(771)],
                width: _0x37e4c0,
              },
            }),
        }),
      (0, i[_0x9ee8a9(1557)])(O, {
        children: [
          (0, i[_0x9ee8a9(922)])(k, {
            allowClear: true,
            allowEmpty: true,
            label: _0x3838ab.t(_0x9ee8a9(1151)),
            value: _0x5eb43a[_0x9ee8a9(789)] ?? null,
            onChange: (_0x239093) =>
              _0x407d50({ ..._0x5eb43a, underflowThreshold: _0x239093 }),
          }),
          (0, i[_0x9ee8a9(922)])(k, {
            allowClear: true,
            allowEmpty: true,
            label: _0x3838ab.t(_0x9ee8a9(632)),
            value: _0x5eb43a[_0x9ee8a9(792)] ?? null,
            onChange: (_0x2ffd6b) =>
              _0x407d50({ ..._0x5eb43a, overflowThreshold: _0x2ffd6b }),
          }),
        ],
      }),
    ],
  });
}
function Ma() {
  let [_0x1aa91a] = N("chartType");
  return _0x1aa91a === e[_0x32bdac(653)][_0x32bdac(615)]
    ? (0, i[_0x32bdac(922)])(Vi, {})
    : _0x1aa91a === e[_0x32bdac(653)][_0x32bdac(861)]
      ? (0, i[_0x32bdac(922)])(Hi, {})
      : _0x1aa91a === e[_0x32bdac(653)][_0x32bdac(1478)]
        ? (0, i[_0x32bdac(922)])(Gi, {})
        : _0x1aa91a === e[_0x32bdac(653)][_0x32bdac(746)]
          ? (0, i.jsx)(_0x32bdac(1998), {
              className: _0x32bdac(1945),
              children: (0, i.jsx)(Pa, {}),
            })
          : _0x1aa91a === e.ChartTypeBits["Sunburst"]
            ? (0, i.jsx)(_0x32bdac(1998), {
                className: _0x32bdac(1945),
                children: (0, i[_0x32bdac(922)])(Ia, {}),
              })
            : _0x1aa91a === e[_0x32bdac(653)][_0x32bdac(826)]
              ? (0, i[_0x32bdac(922)])(_0x32bdac(1998), {
                  className: _0x32bdac(1945),
                  children: (0, i[_0x32bdac(922)])(Ra, {}),
                })
              : null;
}
function Na() {
  return (0, i[_0x3e5f9c(922)])(_0x3e5f9c(1998), {
    className: _0x3e5f9c(1556),
    children: (0, i[_0x3e5f9c(922)])(ta, {}),
  });
}
function Pa() {
  return (0, i.jsxs)(_0x4d5abf(1998), {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [
      (0, i.jsx)(fa, {}),
      (0, i.jsx)(da, {}),
      (0, i.jsx)(la, {}),
      (0, i.jsx)(ca, {}),
    ],
  });
}
function Fa() {
  return (0, i.jsx)(_0x20b233(1998), {
    className: _0x20b233(1556),
    children: (0, i.jsx)(xa, {}),
  });
}
function Ia() {
  let _0x1fe949 = (0, o.useDependency)(a[_0x2dd235(1419)]),
    [_0x4feb8a, _0x4cd55a] = (0, r[_0x2dd235(1825)])(_0x2dd235(1614));
  return (0, i[_0x2dd235(1557)])("div", {
    className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
    children: [
      (0, i[_0x2dd235(922)])(A, {
        label: _0x1fe949.t(_0x2dd235(1705)),
        options: [
          { value: _0x2dd235(1211), label: _0x1fe949.t(_0x2dd235(1472)) },
          {
            value: _0x2dd235(1614),
            label: _0x1fe949.t("chart-ui.common.label"),
          },
        ],
        value: _0x4feb8a,
        onChange: _0x4cd55a,
      }),
      _0x4feb8a === _0x2dd235(1211)
        ? (0, i[_0x2dd235(922)])(ya, {})
        : (0, i[_0x2dd235(922)])(Ca, {}),
    ],
  });
}
function La() {
  return (0, i[_0x5e24ed(922)])("div", {
    className: _0x5e24ed(1556),
    children: (0, i[_0x5e24ed(922)])(qi, {}),
  });
}
function Ra() {
  return (0, i[_0x516f61(1557)])(_0x516f61(1998), {
    className: _0x516f61(1556),
    children: [
      (0, i[_0x516f61(922)])($i, {}),
      (0, i[_0x516f61(922)])(Qi, {}),
      (0, i.jsx)(ea, {}),
    ],
  });
}
const za = [
    e.LabelContentType["CategoryName"],
    e.LabelContentType["SeriesName"],
    e.LabelContentType["Value"],
  ],
  Ba = [
    e.ChartWaterfallStyleTarget["Positive"],
    e.ChartWaterfallStyleTarget["Negative"],
    e.ChartWaterfallStyleTarget["Subtotal"],
  ],
  Va = {
    [e.ChartWaterfallStyleTarget["Positive"]]: "chart-ui.waterfall.positive",
    [e.ChartWaterfallStyleTarget["Negative"]]: "chart-ui.waterfall.negative",
    [e.ChartWaterfallStyleTarget["Subtotal"]]: "chart-ui.waterfall.subtotal",
  },
  Ha = {
    borderDashType: e.ChartBorderDashType["Solid"],
    borderOpacity: e.defaultChartConfig["borderStyle"].opacity,
    borderWidth: e.defaultChartConfig["borderStyle"].width,
    connector: false,
    fillOpacity: e.defaultChartConfig["borderStyle"].opacity,
    labelContentType: e.LabelContentType["Value"],
    labelPosition: e.SeriesLabelPosition["Auto"],
    labelVisible: false,
    textColor: e.defaultChartConfig["textStyle"].color,
  };
function Ua(_0x3eb5a3, _0x57de84) {
  return {
    ..._0x3eb5a3,
    ..._0x57de84,
    ...((_0x3eb5a3 != null && _0x3eb5a3.border) ||
    (_0x57de84 != null && _0x57de84.border)
      ? {
          border: {
            ...(_0x3eb5a3 == null ? undefined : _0x3eb5a3[_0x4b34f9(1464)]),
            ...(_0x57de84 == null ? undefined : _0x57de84.border),
          },
        }
      : {}),
    ...((_0x3eb5a3 != null && _0x3eb5a3[_0x4b34f9(1614)]) ||
    (_0x57de84 != null && _0x57de84.label)
      ? {
          label: {
            ...(_0x3eb5a3 == null ? undefined : _0x3eb5a3[_0x4b34f9(1614)]),
            ...(_0x57de84 == null ? undefined : _0x57de84.label),
          },
        }
      : {}),
    ...((_0x3eb5a3 != null && _0x3eb5a3.point) ||
    (_0x57de84 != null && _0x57de84[_0x4b34f9(1178)])
      ? {
          point: {
            ...(_0x3eb5a3 == null ? undefined : _0x3eb5a3[_0x4b34f9(1178)]),
            ...(_0x57de84 == null ? undefined : _0x57de84[_0x4b34f9(1178)]),
          },
        }
      : {}),
    ...((_0x3eb5a3 != null && _0x3eb5a3[_0x4b34f9(1307)]) ||
    (_0x57de84 != null && _0x57de84.dataPoints)
      ? {
          dataPoints: {
            ...(_0x3eb5a3 == null ? undefined : _0x3eb5a3[_0x4b34f9(1307)]),
            ...(_0x57de84 == null ? undefined : _0x57de84.dataPoints),
          },
        }
      : {}),
  };
}
function Wa(_0x8b22be) {
  let _0x262838 = (0, o[_0x23de6c(858)])(a[_0x23de6c(1419)]),
    [_0x2ff5cb] = N(_0x23de6c(553), e[_0x23de6c(653)][_0x23de6c(1859)]),
    [_0x53d541, _0x1beea0] = N(_0x23de6c(1624)),
    [_0x46baf6, _0x1fc437] = N("allSeriesStyle"),
    [_0x57be76, _0x47ef36] = N(_0x23de6c(837), []),
    [_0x3ee0ff, _0x1285bc] = (0, r[_0x23de6c(1825)])({
      source: _0x8b22be.selectedSeriesId,
      value: _0x8b22be[_0x23de6c(1717)] ?? _0x23de6c(1542),
    }),
    _0x701ff4 =
      _0x3ee0ff[_0x23de6c(1488)] === _0x8b22be[_0x23de6c(1717)]
        ? _0x3ee0ff[_0x23de6c(1324)]
        : (_0x8b22be[_0x23de6c(1717)] ?? _0x23de6c(1542)),
    _0x362e00 = (_0x4f8c17) =>
      _0x1285bc({ source: _0x8b22be[_0x23de6c(1717)], value: _0x4f8c17 }),
    _0x33e419 = _0x8b22be[_0x23de6c(1902)] ?? At;
  if (!e[_0x23de6c(1226)].baseOn(_0x2ff5cb, e[_0x23de6c(653)][_0x23de6c(1766)]))
    return null;
  let _0x509f3f = _0x701ff4 === "all" ? null : Number(_0x701ff4),
    _0x151df5 =
      (_0x53d541 == null ? undefined : _0x53d541[_0x23de6c(1824)]) ===
        e[_0x23de6c(1195)][_0x23de6c(1747)] && _0x509f3f !== null,
    _0xc69784 =
      _0x509f3f === null
        ? undefined
        : _0x57be76[_0x23de6c(1507)](
            (_0x4045da) => _0x4045da[_0x23de6c(1301)] === _0x509f3f,
          ),
    _0x1c55b7 =
      (_0xc69784 == null ? undefined : _0xc69784[_0x23de6c(1169)].label) ?? {},
    _0x181bb6 =
      _0x509f3f === null
        ? ((_0x46baf6 == null ? undefined : _0x46baf6[_0x23de6c(1614)]) ?? {})
        : {
            ...(_0x46baf6 == null ? undefined : _0x46baf6[_0x23de6c(1614)]),
            ..._0x1c55b7,
          },
    _0x3a60c9 = z(_0x181bb6, R),
    _0x54906a = za[_0x23de6c(1573)]((_0x2ed3f1) =>
      e[_0x23de6c(1226)][_0x23de6c(863)](
        _0x181bb6[_0x23de6c(1108)] ??
          _0x8b22be[_0x23de6c(801)][_0x23de6c(1655)],
        _0x2ed3f1,
      ),
    ).map(String),
    _0x52d74d = (_0x2aeaa7) => {
      const _0xce8f0c = _0x23de6c;
      var _0x4fb08a, _0x49a9f0;
      let _0x1107d4 =
          (_0x53d541 == null || (_0x4fb08a = _0x53d541[_0xce8f0c(1692)]) == null
            ? undefined
            : _0x4fb08a[_0x2aeaa7]) ?? {},
        _0x5af7b8 =
          _0x509f3f === null
            ? _0x1107d4
            : ((_0xc69784 == null ||
              (_0x49a9f0 = _0xc69784[_0xce8f0c(1169)][_0xce8f0c(794)]) == null
                ? undefined
                : _0x49a9f0[_0x2aeaa7]) ?? {});
      return _0x509f3f === null ? _0x5af7b8 : Ua(_0x1107d4, _0x5af7b8);
    },
    _0x399892 = (_0x4f31fc, _0x5c6a4c) => {
      const _0x4104f0 = _0x23de6c;
      var _0x46c8b9, _0x572bf6;
      let _0x5bbd7a =
        (_0x53d541 == null || (_0x46c8b9 = _0x53d541[_0x4104f0(1692)]) == null
          ? undefined
          : _0x46c8b9[_0x4f31fc]) ?? {};
      if (_0x509f3f === null) {
        _0x1beea0({
          ..._0x53d541,
          styles: {
            ...(_0x53d541 == null ? undefined : _0x53d541[_0x4104f0(1692)]),
            [_0x4f31fc]: Ua(_0x5bbd7a, _0x5c6a4c),
          },
        });
        return;
      }
      let _0x3cb0da =
        (_0xc69784 == null ||
        (_0x572bf6 = _0xc69784[_0x4104f0(1169)][_0x4104f0(794)]) == null
          ? undefined
          : _0x572bf6[_0x4f31fc]) ?? {};
      _0x47ef36([
        {
          dataPointOptions:
            (_0xc69784 == null ? undefined : _0xc69784[_0x4104f0(1251)]) ?? [],
          name:
            (_0xc69784 == null ? undefined : _0xc69784[_0x4104f0(1391)]) ?? "",
          selector: _0x509f3f,
          style: {
            ...(_0xc69784 == null ? undefined : _0xc69784[_0x4104f0(1169)]),
            waterfallStyles: {
              ...(_0xc69784 == null
                ? undefined
                : _0xc69784[_0x4104f0(1169)][_0x4104f0(794)]),
              [_0x4f31fc]: Ua(_0x3cb0da, _0x5c6a4c),
            },
          },
        },
      ]);
    },
    _0x401a6d = (_0x19b563) => {
      const _0x4bcb5f = _0x23de6c;
      if (_0x509f3f === null) {
        _0x1fc437({
          ..._0x46baf6,
          label: {
            ...(_0x46baf6 == null ? undefined : _0x46baf6[_0x4bcb5f(1614)]),
            ..._0x19b563,
          },
        });
        return;
      }
      _0x47ef36([
        {
          dataPointOptions:
            (_0xc69784 == null ? undefined : _0xc69784[_0x4bcb5f(1251)]) ?? [],
          name:
            (_0xc69784 == null ? undefined : _0xc69784[_0x4bcb5f(1391)]) ?? "",
          selector: _0x509f3f,
          style: {
            ...(_0xc69784 == null ? undefined : _0xc69784[_0x4bcb5f(1169)]),
            label: { ..._0x1c55b7, ..._0x19b563 },
          },
        },
      ]);
    },
    _0x3cc714 = (_0x4707cc) => {
      const _0xb6febc = _0x23de6c;
      var _0x682756, _0xbc48a7;
      let _0x4d5c39 = _0x52d74d(_0x4707cc),
        _0x28321b = _0x4d5c39[_0xb6febc(1464)] ?? {},
        _0x3b1bc3 = _0x262838.t(Va[_0x4707cc]),
        _0x543b29 = {
          isAllSeries: _0x509f3f === null,
          seriesName:
            (_0xc69784 == null ? undefined : _0xc69784[_0xb6febc(1391)]) ?? "",
          target: _0x4707cc,
        },
        _0x71d70b =
          ((_0x682756 = _0x8b22be[_0xb6febc(667)]) == null
            ? undefined
            : _0x682756[_0xb6febc(678)](_0x8b22be, _0x543b29)) ??
          (_0x509f3f !== null ||
            _0x4707cc === e[_0xb6febc(706)][_0xb6febc(617)]),
        _0x935126 =
          ((_0xbc48a7 = _0x8b22be[_0xb6febc(834)]) == null
            ? undefined
            : _0xbc48a7[_0xb6febc(678)](_0x8b22be, _0x543b29)) ?? "",
        _0xcb4142 = _0x4d5c39.name ?? _0x935126;
      return (0, i[_0xb6febc(922)])(
        I,
        {
          label: _0x3b1bc3,
          children: (0, i[_0xb6febc(1557)])(_0xb6febc(1998), {
            className: _0xb6febc(1556),
            children: [
              _0x71d70b &&
                (0, i[_0xb6febc(922)])(j, {
                  allowClear: true,
                  commitMode: _0xb6febc(939),
                  label: _0x262838.t(_0xb6febc(1844)),
                  value: _0xcb4142,
                  onChange: (_0x23966a) =>
                    _0x399892(_0x4707cc, { name: _0x23966a }),
                }),
              (0, i[_0xb6febc(1557)])(O, {
                children: [
                  (0, i.jsx)(M, {
                    emptyLabel: _0x262838.t(_0xb6febc(819)),
                    label: _0x262838.t(_0xb6febc(677)),
                    pickerFallbackValue:
                      _0x8b22be[_0xb6febc(801)][_0xb6febc(1082)],
                    resetLabel: _0x262838.t(_0xb6febc(819)),
                    value:
                      typeof _0x4d5c39[_0xb6febc(1393)] == "string"
                        ? _0x4d5c39[_0xb6febc(1393)]
                        : null,
                    onChange: (_0x43d002) =>
                      _0x399892(_0x4707cc, { color: _0x43d002 }),
                  }),
                  (0, i[_0xb6febc(922)])(k, {
                    label: _0x262838.t("chart-ui.common.opacity"),
                    max: U.max,
                    min: U[_0xb6febc(1337)],
                    step: U[_0xb6febc(1939)],
                    value:
                      _0x4d5c39[_0xb6febc(944)] ??
                      _0x8b22be[_0xb6febc(801)][_0xb6febc(944)],
                    onChange: (_0x3cea98) =>
                      _0x399892(_0x4707cc, { fillOpacity: _0x3cea98 }),
                  }),
                ],
              }),
              (0, i[_0xb6febc(1557)])(O, {
                children: [
                  (0, i.jsx)(M, {
                    emptyLabel: _0x262838.t(_0xb6febc(819)),
                    label: _0x262838.t(_0xb6febc(1196)),
                    pickerFallbackValue:
                      _0x8b22be[_0xb6febc(801)][_0xb6febc(1082)],
                    resetLabel: _0x262838.t("chart-ui.editor.defaultColor"),
                    value: _0x28321b.color ?? null,
                    onChange: (_0x289c7c) =>
                      _0x399892(_0x4707cc, {
                        border: { ..._0x28321b, color: _0x289c7c },
                      }),
                  }),
                  (0, i[_0xb6febc(922)])(k, {
                    allowClear: true,
                    allowEmpty: true,
                    emptyLabel: _0x262838.t("chart-ui.common.default"),
                    label: _0x262838.t(_0xb6febc(1128)),
                    min: 0,
                    value: _0x28321b[_0xb6febc(989)] ?? null,
                    onChange: (_0x59d95c) =>
                      _0x399892(_0x4707cc, {
                        border: { ..._0x28321b, width: _0x59d95c },
                      }),
                  }),
                ],
              }),
              (0, i.jsxs)(O, {
                children: [
                  (0, i[_0xb6febc(922)])(k, {
                    label: _0x262838.t(_0xb6febc(1848)),
                    max: U[_0xb6febc(628)],
                    min: U[_0xb6febc(1337)],
                    step: U[_0xb6febc(1939)],
                    value:
                      _0x28321b[_0xb6febc(577)] ??
                      _0x8b22be[_0xb6febc(801)][_0xb6febc(1021)],
                    onChange: (_0x21e5c9) =>
                      _0x399892(_0x4707cc, {
                        border: { ..._0x28321b, opacity: _0x21e5c9 },
                      }),
                  }),
                  (0, i.jsx)(A, {
                    label: _0x262838.t(_0xb6febc(844)),
                    options: _n[_0xb6febc(1285)](
                      ({ labelKey: _0x138ecd, value: _0x599fbe }) => ({
                        label: _0x262838.t(_0x138ecd),
                        value: _0x599fbe,
                      }),
                    ),
                    value:
                      _0x28321b[_0xb6febc(704)] ??
                      _0x8b22be[_0xb6febc(801)].borderDashType,
                    onChange: (_0x17ed02) =>
                      _0x399892(_0x4707cc, {
                        border: { ..._0x28321b, dashType: _0x17ed02 },
                      }),
                  }),
                ],
              }),
            ],
          }),
        },
        _0x4707cc,
      );
    };
  return (0, i[_0x23de6c(1557)])(_0x23de6c(1998), {
    className: _0x23de6c(1556),
    children: [
      (0, i[_0x23de6c(922)])(A, {
        label: _0x262838.t(_0x23de6c(672)),
        options: [
          { value: _0x23de6c(1542), label: _0x262838.t(_0x23de6c(522)) },
          ..._0x57be76[_0x23de6c(1285)]((_0x2b1e12) => ({
            value: String(_0x2b1e12[_0x23de6c(1301)]),
            label: _0x2b1e12.name,
          })),
        ],
        value: _0x701ff4,
        onChange: _0x362e00,
      }),
      Ba[_0x23de6c(1573)](
        (_0x535b5d) =>
          _0x535b5d !== e[_0x23de6c(706)][_0x23de6c(617)] || !_0x151df5,
      )[_0x23de6c(1285)](_0x3cc714),
      (0, i[_0x23de6c(922)])(I, {
        label: (0, i.jsx)(Ci, {
          endSlot: (0, i.jsx)(t[_0x23de6c(1138)], {
            checked:
              (_0x53d541 == null ? undefined : _0x53d541[_0x23de6c(1487)]) ===
              undefined
                ? _0x8b22be[_0x23de6c(801)].connector
                : !!_0x53d541[_0x23de6c(1487)],
            contentClassName: "univer-sr-only",
            onChange: (_0x117c7d) =>
              _0x1beea0({ ..._0x53d541, connector: !!_0x117c7d }),
            children: _0x262838.t(_0x23de6c(1918)),
          }),
          children: _0x262838.t(_0x23de6c(1918)),
        }),
        children: null,
      }),
      (0, i.jsx)(I, {
        label: (0, i[_0x23de6c(922)])(Ci, {
          endSlot: (0, i[_0x23de6c(922)])(t[_0x23de6c(1138)], {
            checked:
              _0x181bb6[_0x23de6c(1755)] ??
              _0x8b22be[_0x23de6c(801)][_0x23de6c(979)],
            contentClassName: "univer-sr-only",
            onChange: (_0x331de3) => _0x401a6d({ visible: !!_0x331de3 }),
            children: _0x262838.t(_0x23de6c(1719)),
          }),
          children: _0x262838.t(_0x23de6c(1719)),
        }),
        children: (0, i.jsx)(_0x23de6c(1998), {
          className: _0x23de6c(1556),
          children:
            _0x181bb6[_0x23de6c(1755)] &&
            (0, i[_0x23de6c(1557)])(i[_0x23de6c(1762)], {
              children: [
                (0, i[_0x23de6c(1557)])(O, {
                  children: [
                    (0, i.jsx)(cr, {
                      label: _0x262838.t(_0x23de6c(1466)),
                      options: [
                        {
                          value: String(e[_0x23de6c(1567)][_0x23de6c(602)]),
                          label: _0x262838.t(_0x23de6c(925)),
                        },
                        {
                          value: String(e.LabelContentType[_0x23de6c(1694)]),
                          label: _0x262838.t(_0x23de6c(1738)),
                        },
                        {
                          value: String(e[_0x23de6c(1567)][_0x23de6c(624)]),
                          label: _0x262838.t("chart-ui.common.value"),
                        },
                      ],
                      value: _0x54906a,
                      onChange: (_0x422cf5) => {
                        const _0x9ba645 = _0x23de6c;
                        if (_0x422cf5[_0x9ba645(1579)] === 0) return;
                        let _0x38d537 = za[_0x9ba645(1573)]((_0x5ecb2a) =>
                          _0x422cf5[_0x9ba645(1868)](String(_0x5ecb2a)),
                        ).reduce(
                          (_0x4c1b22, _0x13f93d) => _0x4c1b22 | _0x13f93d,
                          e[_0x9ba645(1567)].Empty,
                        );
                        _0x401a6d({ contentType: _0x38d537 });
                      },
                    }),
                    (0, i[_0x23de6c(922)])(A, {
                      label: _0x262838.t(_0x23de6c(1668)),
                      options: [
                        {
                          value: e.SeriesLabelPosition[_0x23de6c(733)],
                          label: _0x262838.t(_0x23de6c(893)),
                        },
                        {
                          value: e[_0x23de6c(1727)][_0x23de6c(1934)],
                          label: _0x262838.t(_0x23de6c(2031)),
                        },
                        {
                          value: e[_0x23de6c(1727)][_0x23de6c(1672)],
                          label: _0x262838.t("chart-ui.common.position.left"),
                        },
                        {
                          value: e[_0x23de6c(1727)][_0x23de6c(477)],
                          label: _0x262838.t(_0x23de6c(1560)),
                        },
                        {
                          value: e[_0x23de6c(1727)][_0x23de6c(1210)],
                          label: _0x262838.t("chart-ui.common.position.top"),
                        },
                        {
                          value: e[_0x23de6c(1727)][_0x23de6c(1831)],
                          label: _0x262838.t(_0x23de6c(1758)),
                        },
                      ],
                      value:
                        _0x181bb6[_0x23de6c(1712)] ??
                        _0x8b22be[_0x23de6c(801)][_0x23de6c(1336)],
                      onChange: (_0x1500cd) =>
                        _0x401a6d({ position: _0x1500cd }),
                    }),
                  ],
                }),
                (0, i[_0x23de6c(922)])(_0x33e419, {
                  label: _0x262838.t("chart-ui.common.numberFormat"),
                  value: _0x181bb6.format,
                  onChange: (_0x72e41f) => _0x401a6d({ format: _0x72e41f }),
                }),
                (0, i[_0x23de6c(922)])(V, {
                  colorPickerFallbackValue:
                    _0x8b22be.defaultValues[_0x23de6c(1082)],
                  label: _0x262838.t(_0x23de6c(852)),
                  value: _0x3a60c9,
                  onChange: (_0x428f22) => _0x401a6d(B(_0x428f22)),
                }),
              ],
            }),
        }),
      }),
    ],
  });
}
function Ga(_0x4cee08) {
  let [_0x2001b5, _0x167859] = (0, r.useState)(false),
    _0x4ecdda =
      _0x4cee08.options["find"](
        (_0x296baa) => _0x296baa[_0x4f7571(1324)] === _0x4cee08.value,
      ) ?? _0x4cee08.options[0];
  return _0x4ecdda
    ? (0, i[_0x4f7571(922)])(D, {
        label: _0x4cee08.label,
        children: (_0x3a480a) =>
          (0, i[_0x4f7571(922)])(t[_0x4f7571(761)], {
            open: _0x2001b5,
            overlay: (0, i[_0x4f7571(922)])(_0x4f7571(1998), {
              className: _0x4f7571(1057),
              children: _0x4cee08[_0x4f7571(1822)][_0x4f7571(1285)](
                (_0x14b255) =>
                  (0, i[_0x4f7571(922)])(
                    "button",
                    {
                      "aria-label": _0x14b255[_0x4f7571(1614)],
                      "aria-pressed":
                        _0x14b255.value === _0x4ecdda[_0x4f7571(1324)],
                      className: _0x4f7571(2038),
                      type: _0x4f7571(1204),
                      onClick: () => {
                        const _0x18c351 = _0x4f7571;
                        (_0x4cee08[_0x18c351(507)](_0x14b255.value),
                          _0x167859(false));
                      },
                      children: (0, i.jsx)(_0x4f7571(661), {
                        className: _0x4f7571(1283),
                        src: _0x14b255.imageSrc,
                        alt: "",
                      }),
                    },
                    _0x14b255.value,
                  ),
              ),
            }),
            onOpenChange: _0x167859,
            children: (0, i[_0x4f7571(1557)])(t.Button, {
              size: _0x4f7571(1121),
              "aria-expanded": _0x2001b5,
              "aria-haspopup": _0x4f7571(1849),
              className: (0, t[_0x4f7571(1916)])(_0x4f7571(1070), {
                "univer-bg-gray-100": _0x2001b5,
              }),
              type: _0x4f7571(1204),
              ..._0x3a480a,
              children: [
                (0, i.jsxs)("span", {
                  className: _0x4f7571(1497),
                  children: [
                    (0, i.jsx)(_0x4f7571(661), {
                      className: _0x4f7571(1988),
                      src: _0x4ecdda[_0x4f7571(908)],
                      alt: "",
                    }),
                    (0, i[_0x4f7571(922)])(_0x4f7571(1904), {
                      className: _0x4f7571(929),
                      children: _0x4ecdda[_0x4f7571(1614)],
                    }),
                  ],
                }),
                (0, i.jsx)(n[_0x4f7571(781)], {
                  "aria-hidden": _0x4f7571(1582),
                  className: _0x4f7571(1637),
                }),
              ],
            }),
          }),
      })
    : null;
}
function Ka() {
  let [_0x53daa5] = N("chartType", e.ChartTypeBits[_0xd8b83e(1859)]),
    [_0x394d44, _0x338868] = N(_0xd8b83e(1092));
  return {
    chartType: _0x53daa5,
    setWordCloud: _0x338868,
    wordCloud: _0x394d44,
  };
}
function qa(_0x19b383) {
  let { chartType: _0x2f4a2e } = Ka();
  return _0x2f4a2e === e[_0x80abb0(653)][_0x80abb0(513)]
    ? (0, i.jsx)(_0x80abb0(1998), {
        className: "univer-flex\x20univer-flex-col\x20univer-gap-3",
        children: _0x19b383.children,
      })
    : null;
}
const Ja = {
    repeat: e.defaultChartConfig["wordCloud"].repeat,
    shape: e.defaultChartConfig["wordCloud"].shape,
  },
  Ya = {
    [e.WordCloudShapeEnum["Cardioid"]]: "chart-ui.wordCloud.cardioid",
    [e.WordCloudShapeEnum["Circle"]]: "chart-ui.common.circle",
    [e.WordCloudShapeEnum["Cloud"]]: "chart-ui.wordCloud.cloud",
    [e.WordCloudShapeEnum["Diamond"]]: "chart-ui.common.diamond",
    [e.WordCloudShapeEnum["Heart"]]: "chart-ui.wordCloud.heart",
    [e.WordCloudShapeEnum["Pentagon"]]: "chart-ui.wordCloud.pentagon",
    [e.WordCloudShapeEnum["Rect"]]: "chart-ui.wordCloud.rect",
    [e.WordCloudShapeEnum["Star"]]: "chart-ui.wordCloud.star",
    [e.WordCloudShapeEnum["Triangle"]]: "chart-ui.common.triangle",
    [e.WordCloudShapeEnum["TriangleForward"]]:
      "chart-ui.wordCloud.triangle-forward",
  };
function Xa(_0x446e52) {
  let _0x15439f = (0, o[_0x4462cd(858)])(a[_0x4462cd(1419)]),
    { setWordCloud: _0x90410f, wordCloud: _0x285534 } = Ka();
  return (0, i[_0x4462cd(922)])(A, {
    label: _0x15439f.t(_0x4462cd(1266)),
    options: Object[_0x4462cd(1596)](e[_0x4462cd(648)])[_0x4462cd(1285)](
      (_0xc2d3e6) => ({ value: _0xc2d3e6, label: _0x15439f.t(Ya[_0xc2d3e6]) }),
    ),
    value:
      (_0x285534 == null ? undefined : _0x285534[_0x4462cd(543)]) ??
      _0x446e52[_0x4462cd(801)][_0x4462cd(543)],
    onChange: (_0x314760) => _0x90410f({ ..._0x285534, shape: _0x314760 }),
  });
}
function Za() {
  let _0x56a47e = (0, o[_0x52a5e5(858)])(a.LocaleService),
    { setWordCloud: _0x356b36, wordCloud: _0x595afa } = Ka();
  return (0, i[_0x52a5e5(922)])(Ga, {
    label: _0x56a47e.t(_0x52a5e5(815)),
    options: e[_0x52a5e5(568)],
    value: (_0x595afa == null ? undefined : _0x595afa[_0x52a5e5(540)]) ?? "",
    onChange: (_0x25f8f0) =>
      _0x356b36({ ..._0x595afa, maskImageId: _0x25f8f0 }),
  });
}
function Qa() {
  let _0x46a0b6 = (0, o.useDependency)(a.LocaleService),
    { setWordCloud: _0x1b5db7, wordCloud: _0x24e135 } = Ka();
  return (0, i[_0xe5280a(922)])(j, {
    commitMode: _0xe5280a(939),
    label: _0x46a0b6.t(_0xe5280a(815)),
    value: (_0x24e135 == null ? undefined : _0x24e135[_0xe5280a(540)]) ?? "",
    onChange: (_0x4e6be8) =>
      _0x1b5db7({ ..._0x24e135, maskImageId: _0x4e6be8 || undefined }),
  });
}
function $a(_0x2abbe1) {
  let _0x441ec7 = (0, o[_0x1b1438(858)])(a[_0x1b1438(1419)]),
    { setWordCloud: _0x35bdd6, wordCloud: _0x2758c6 } = Ka();
  return (0, i.jsx)(H, {
    inlineLabel: true,
    checked:
      (_0x2758c6 == null ? undefined : _0x2758c6[_0x1b1438(720)]) ??
      _0x2abbe1.defaultValues[_0x1b1438(720)],
    label: _0x441ec7.t(_0x1b1438(1788)),
    onChange: (_0x474f73) => _0x35bdd6({ ..._0x2758c6, repeat: _0x474f73 }),
  });
}
function eo(_0x286620) {
  return (0, i[_0x5604b6(1557)])(qa, {
    children: [
      (0, i.jsx)(Xa, { defaultValues: _0x286620.defaultValues }),
      (0, i.jsx)(Za, {}),
      (0, i[_0x5604b6(922)])($a, { defaultValues: _0x286620[_0x5604b6(801)] }),
    ],
  });
}
var to = class extends a.Disposable {
  constructor(..._0x57a2a1) {
    (super(..._0x57a2a1), b(this, _0x3d60dc(1640), new Map()));
  }
  register(_0x2312ee, _0x4f412d) {
    return (
      this[_0x3e04e8(1640)][_0x3e04e8(1023)](_0x2312ee, _0x4f412d),
      {
        dispose: () => {
          const _0x50a5e9 = _0x3e04e8;
          this[_0x50a5e9(1640)][_0x50a5e9(977)](_0x2312ee) === _0x4f412d &&
            this[_0x50a5e9(1640)].delete(_0x2312ee);
        },
      }
    );
  }
  get(_0x37e416) {
    return this[_0x2b49f4(1640)][_0x2b49f4(977)](_0x37e416);
  }
  dispose() {
    (this[_0x2415f0(1640)][_0x2415f0(959)](), super.dispose());
  }
};
function no(_0x3f153c) {
  return (
    _0x3f153c === e[_0x2b5f56(653)][_0x2b5f56(1961)] ||
    _0x3f153c === e[_0x2b5f56(653)][_0x2b5f56(479)] ||
    _0x3f153c === e.ChartTypeBits[_0x2b5f56(1356)] ||
    e.chartBitsUtils["baseOn"](_0x3f153c, e[_0x2b5f56(653)][_0x2b5f56(1152)]) ||
    e[_0x2b5f56(1226)][_0x2b5f56(1429)](
      _0x3f153c,
      e[_0x2b5f56(653)][_0x2b5f56(1218)],
    ) ||
    e.chartBitsUtils[_0x2b5f56(1429)](
      _0x3f153c,
      e.ChartTypeBits[_0x2b5f56(999)],
    ) ||
    e.chartBitsUtils["baseOn"](_0x3f153c, e[_0x2b5f56(653)][_0x2b5f56(1546)])
  );
}
function ro(_0x370854) {
  switch (_0x370854) {
    case e[_0x4461f2(692)][_0x4461f2(831)]:
    case e[_0x4461f2(692)][_0x4461f2(1049)]:
    case e.WaterfallSeriesTypeEnum["subtotal"]:
      return e[_0x4461f2(692)][_0x370854];
    default:
      return;
  }
}
function io(_0x2069ba, _0x5b32c8) {
  var _0x3f09ee;
  if (typeof _0x5b32c8[_0x1b2893(1912)] != "number") return;
  let _0x2afbab =
      (_0x3f09ee = _0x2069ba[_0x1b2893(1887)]) == null ||
      (_0x3f09ee = _0x3f09ee[_0x1b2893(1238)]) == null
        ? undefined
        : _0x3f09ee[_0x5b32c8[_0x1b2893(1912)]],
    _0x50056e =
      _0x2afbab === undefined ? _0x5b32c8[_0x1b2893(805)] : String(_0x2afbab);
  if (typeof _0x50056e == "string")
    return { seriesId: _0x50056e, seriesIndex: _0x5b32c8[_0x1b2893(1912)] };
}
function ao(_0x5472ed) {
  return _0x5472ed.pieCompositeRole === e[_0x317862(1973)][_0x317862(1618)] &&
    _0x5472ed.pieSourcePointIndex !== undefined
    ? { kind: "pieSliceStyle", sourcePointIndex: _0x5472ed[_0x317862(1885)] }
    : _0x5472ed[_0x317862(1371)] === e[_0x317862(1973)][_0x317862(590)]
      ? { kind: _0x317862(772) }
      : _0x5472ed.pieCompositeRole === e[_0x317862(1973)].Connector
        ? { kind: _0x317862(1648) }
        : { kind: _0x317862(905) };
}
function oo(_0x458586, _0x4018f0) {
  let _0x534545 = _0x458586[_0x2d9f00(553)],
    _0x25e963 = { scope: _0x2d9f00(1187) };
  if (
    (_0x4018f0[_0x2d9f00(1828)] === undefined
      ? _0x4018f0[_0x2d9f00(805)] !== undefined &&
        (_0x25e963.seriesId = _0x4018f0.seriesId)
      : (_0x25e963[_0x2d9f00(805)] = _0x4018f0[_0x2d9f00(1828)]),
    _0x4018f0[_0x2d9f00(1912)] !== undefined &&
      (_0x25e963[_0x2d9f00(1912)] = _0x4018f0[_0x2d9f00(1912)]),
    _0x4018f0[_0x2d9f00(1885)] === undefined
      ? _0x4018f0[_0x2d9f00(879)] !== undefined &&
        (_0x25e963.dataIndex = _0x4018f0.dataIndex)
      : (_0x25e963[_0x2d9f00(879)] = _0x4018f0[_0x2d9f00(1885)]),
    e[_0x2d9f00(1226)].baseOn(_0x534545, e.ChartTypeBits[_0x2d9f00(600)]))
  )
    return { ..._0x25e963, directEdit: ao(_0x4018f0), panel: _0x2d9f00(905) };
  if (e[_0x2d9f00(1226)][_0x2d9f00(1429)](_0x534545, e[_0x2d9f00(653)].Pareto))
    return _0x4018f0[_0x2d9f00(1912)] === e[_0x2d9f00(869)][_0x2d9f00(1046)]
      ? {
          ..._0x25e963,
          directEdit: {
            kind: _0x2d9f00(920),
            part: e[_0x2d9f00(1501)][_0x2d9f00(1046)],
          },
          panel: _0x2d9f00(639),
        }
      : _0x4018f0.seriesIndex === e.ParetoSeriesIndex[_0x2d9f00(1152)]
        ? {
            ..._0x25e963,
            directEdit: {
              kind: "paretoStyle",
              part: e[_0x2d9f00(1501)][_0x2d9f00(1152)],
            },
            panel: "paretoLineSeries",
          }
        : { ..._0x25e963, panel: _0x2d9f00(639) };
  if (
    e[_0x2d9f00(1226)].baseOn(_0x534545, e[_0x2d9f00(653)][_0x2d9f00(1766)])
  ) {
    let _0x5a7d24 = ro(_0x4018f0[_0x2d9f00(1736)]),
      _0x271aa1 = _0x4018f0[_0x2d9f00(1164)] ?? _0x4018f0[_0x2d9f00(805)];
    return _0x5a7d24 && _0x271aa1
      ? {
          ..._0x25e963,
          seriesId: _0x271aa1,
          directEdit: {
            kind: "waterfallStyle",
            seriesId: _0x271aa1,
            seriesIndex: _0x4018f0.seriesIndex,
            part: _0x5a7d24,
          },
          panel: _0x2d9f00(741),
        }
      : { ..._0x25e963, seriesId: _0x271aa1, panel: _0x2d9f00(741) };
  }
  if (no(_0x534545)) {
    let _0x4eda84 = io(_0x458586, _0x4018f0);
    return _0x4eda84
      ? {
          ..._0x25e963,
          ..._0x4eda84,
          directEdit: { kind: "seriesStyle", ..._0x4eda84 },
        }
      : undefined;
  }
  return e[_0x2d9f00(1226)].baseOn(_0x534545, e.ChartTypeBits["Relation"])
    ? { ..._0x25e963, panel: _0x2d9f00(1656) }
    : e.chartBitsUtils["baseOn"](_0x534545, e[_0x2d9f00(653)][_0x2d9f00(513)])
      ? { ..._0x25e963, panel: _0x2d9f00(1092) }
      : { ..._0x25e963, panel: _0x2d9f00(996) };
}
function so(_0x1bcb6b, _0x387f3e) {
  let _0x3283b1 =
    _0x387f3e[_0x28dddb(1201)] === "mark"
      ? oo(_0x1bcb6b, _0x387f3e)
      : tn(_0x387f3e);
  if (_0x3283b1)
    return {
      target: _0x3283b1,
      showFloatMenu:
        _0x3283b1[_0x28dddb(1873)] !== _0x28dddb(1187) ||
        !!_0x3283b1[_0x28dddb(1940)],
    };
}
const co = "chart.element.float-menu",
  lo = [0, 8],
  uo = [1, 0.9, 0.7, 0.5, 0.3, 0.2, 0.1, 0],
  fo = { CONTINUOUS: "continuous", PIECEWISE: "piecewise" },
  po = {
    TITLE: "title",
    SUBTITLE: "subtitle",
    LEGEND: "legend",
    PIE: "pie",
    SERIES: "series",
    PARETO: "pareto",
    AXES: "axes",
  },
  Y = {
    MENU_TITLE: {
      CHART: "chart-ui.floatMenu.menuTitle.chart",
      CHART_TITLE: "chart-ui.common.chartTitle",
      SUBTITLE: "chart-ui.common.subtitle",
      AXIS_TITLE: "chart-ui.floatMenu.menuTitle.axisTitle",
      LEGEND: "chart-ui.common.legend",
      HORIZONTAL_AXIS: "chart-ui.common.horizontalAxis",
      VERTICAL_AXIS: "chart-ui.common.verticalAxis",
      RIGHT_VERTICAL_AXIS: "chart-ui.common.rightVerticalAxis",
      GRIDLINE: "chart-ui.floatMenu.menuTitle.gridline",
      TICK: "chart-ui.floatMenu.menuTitle.tick",
      MARK: "chart-ui.floatMenu.menuTitle.mark",
      SERIES: "chart-ui.common.series",
      DATA_POINT: "chart-ui.common.dataPoint",
      DATA_LABEL: "chart-ui.floatMenu.menuTitle.dataLabel",
    },
    FIELD: {
      TITLE: "chart-ui.common.title",
      SUBTITLE: "chart-ui.common.subtitle",
      POSITION: "chart-ui.floatMenu.field.position",
      SIZE: "chart-ui.floatMenu.field.size",
      ALIGN: "chart-ui.floatMenu.field.align",
      MODE: "chart-ui.common.mode",
      MAP: "chart-ui.floatMenu.field.map",
      ROTATE: "chart-ui.floatMenu.field.rotate",
      MIN: "chart-ui.common.min",
      MAX: "chart-ui.common.max",
      COLOR: "chart-ui.common.color",
      BORDER_COLOR: "chart-ui.common.borderColor",
      OPACITY: "chart-ui.common.opacity",
      LABEL_POSITION: "chart-ui.common.labelPosition",
      LABEL_TEXT: "chart-ui.floatMenu.field.labelText",
      TITLE_TEXT: "chart-ui.floatMenu.field.titleText",
    },
    ACTION: {
      MORE: "chart-ui.floatMenu.action.more",
      BOLD: "chart-ui.common.bold",
      ITALIC: "chart-ui.common.italic",
    },
    CONTROL: {
      LABELS: "chart-ui.floatMenu.control.labels",
      LINE: "chart-ui.floatMenu.control.line",
      REVERSE: "chart-ui.floatMenu.control.reverse",
      DATE: "chart-ui.common.date",
    },
    OPTION: {
      TEXT_ALIGN: {
        LEFT: "chart-ui.common.textAlign.left",
        CENTER: "chart-ui.common.textAlign.center",
        RIGHT: "chart-ui.common.textAlign.right",
      },
      POSITION: {
        TOP: "chart-ui.common.position.top",
        BOTTOM: "chart-ui.common.position.bottom",
        LEFT: "chart-ui.common.position.left",
        RIGHT: "chart-ui.common.position.right",
        HIDE: "chart-ui.common.position.hide",
        INSIDE: "chart-ui.common.position.inside",
        OUTSIDE: "chart-ui.common.position.outside",
      },
      LABEL_TEXT: {
        CATEGORY: "chart-ui.common.category",
        VALUE: "chart-ui.common.value",
        PERCENTAGE: "chart-ui.common.percentage",
      },
      AXIS_ALIGN: {
        START: "chart-ui.common.axisAlign.start",
        CENTER: "chart-ui.common.axisAlign.center",
        END: "chart-ui.common.axisAlign.end",
      },
      LEGEND_SELECT_MODE: {
        SINGLE: "chart-ui.common.legendSelectMode.single",
        MULTIPLE: "chart-ui.common.legendSelectMode.multiple",
        CLOSE: "chart-ui.common.legendSelectMode.disabled",
      },
      VISUAL_MAP_TYPE: {
        CONTINUOUS: "chart-ui.common.visualMapType.continuous",
        PIECEWISE: "chart-ui.common.visualMapType.piecewise",
      },
    },
  },
  mo = [
    { labelKey: Y.OPTION["POSITION"].TOP, value: e.TitlePositionEnum["Top"] },
    {
      labelKey: Y.OPTION["POSITION"].BOTTOM,
      value: e.TitlePositionEnum["Bottom"],
    },
    { labelKey: Y.OPTION["POSITION"].LEFT, value: e.TitlePositionEnum["Left"] },
    {
      labelKey: Y.OPTION["POSITION"].RIGHT,
      value: e.TitlePositionEnum["Right"],
    },
    { labelKey: Y.OPTION["POSITION"].HIDE, value: e.TitlePositionEnum["Hide"] },
  ],
  ho = [
    {
      labelKey: Y.OPTION["POSITION"].INSIDE,
      value: e.PieLabelPosition["Inside"],
    },
    {
      labelKey: Y.OPTION["POSITION"].OUTSIDE,
      value: e.PieLabelPosition["Outside"],
    },
  ],
  go = [
    {
      labelKey: Y.OPTION["LABEL_TEXT"].CATEGORY,
      value: String(e.LabelContentType["CategoryName"]),
    },
    {
      labelKey: Y.OPTION["LABEL_TEXT"].VALUE,
      value: String(e.LabelContentType["Value"]),
    },
    {
      labelKey: Y.OPTION["LABEL_TEXT"].PERCENTAGE,
      value: String(e.LabelContentType["Percentage"]),
    },
  ],
  _o = [
    { labelKey: Y.OPTION["AXIS_ALIGN"].START, value: e.AxisAlignEnum["Start"] },
    {
      labelKey: Y.OPTION["AXIS_ALIGN"].CENTER,
      value: e.AxisAlignEnum["Center"],
    },
    { labelKey: Y.OPTION["AXIS_ALIGN"].END, value: e.AxisAlignEnum["End"] },
  ];
(Y.OPTION["POSITION"].TOP,
  e.LegendPositionEnum["Top"],
  Y.OPTION["POSITION"].BOTTOM,
  e.LegendPositionEnum["Bottom"],
  Y.OPTION["POSITION"].LEFT,
  e.LegendPositionEnum["Left"],
  Y.OPTION["POSITION"].RIGHT,
  e.LegendPositionEnum["Right"],
  Y.OPTION["POSITION"].HIDE,
  e.LegendPositionEnum["Hide"],
  Y.OPTION["LEGEND_SELECT_MODE"].SINGLE,
  e.SelectModeEnum["Single"],
  Y.OPTION["LEGEND_SELECT_MODE"].MULTIPLE,
  e.SelectModeEnum["Multiple"],
  Y.OPTION["LEGEND_SELECT_MODE"].CLOSE,
  e.SelectModeEnum["Close"],
  Y.OPTION["VISUAL_MAP_TYPE"].CONTINUOUS,
  fo.CONTINUOUS,
  Y.OPTION["VISUAL_MAP_TYPE"].PIECEWISE,
  fo.PIECEWISE);
function vo(_0x37dff3, _0x3996dd, _0x3fa4d9) {
  var _0x388b00;
  if (
    (_0x3996dd == null ? undefined : _0x3996dd[_0x97b804(1201)]) ===
    "pieSliceStyle"
  ) {
    var _0x42c5ac;
    let _0x2c86cf =
      (_0x37dff3 == null || (_0x42c5ac = _0x37dff3[_0x97b804(618)]) == null
        ? undefined
        : _0x42c5ac[_0x3996dd[_0x97b804(2016)]]) ?? {};
    return {
      ..._0x37dff3,
      sliceStyles: {
        ...(_0x37dff3 == null ? undefined : _0x37dff3[_0x97b804(618)]),
        [_0x3996dd[_0x97b804(2016)]]: { ..._0x2c86cf, ..._0x3fa4d9 },
      },
    };
  }
  if (
    (_0x3996dd == null ? undefined : _0x3996dd[_0x97b804(1201)]) !==
    _0x97b804(772)
  )
    return;
  let _0x1d4746 = _0x37dff3 == null ? undefined : _0x37dff3[_0x97b804(2021)];
  return {
    ..._0x37dff3,
    composite: {
      ..._0x1d4746,
      aggregate: {
        ...(_0x1d4746 == null ? undefined : _0x1d4746[_0x97b804(924)]),
        style: {
          ...(_0x1d4746 == null ||
          (_0x388b00 = _0x1d4746[_0x97b804(924)]) == null
            ? undefined
            : _0x388b00[_0x97b804(1169)]),
          ..._0x3fa4d9,
        },
      },
    },
  };
}
function yo(_0xbf4334, _0x50baa8) {
  let _0x3e1e16 = _0xbf4334 == null ? undefined : _0xbf4334[_0x556817(2021)],
    _0x444421 = _0x3e1e16 == null ? undefined : _0x3e1e16[_0x556817(1437)];
  return {
    ..._0xbf4334,
    composite: {
      ..._0x3e1e16,
      secondaryPlot: {
        ..._0x444421,
        connector: {
          ...(_0x444421 == null ? undefined : _0x444421[_0x556817(1487)]),
          ..._0x50baa8,
        },
      },
    },
  };
}
const X = Y,
  Z = po,
  bo = new Set([
    "pieStyle",
    "pieSliceStyle",
    "pieAggregateStyle",
    "pieConnectorStyle",
  ]),
  xo = [
    e.LabelContentType["CategoryName"],
    e.LabelContentType["Value"],
    e.LabelContentType["Percentage"],
  ],
  So = uo.map((_0x2f633d) => ({
    label: Math.round(_0x2f633d * 100) + "%",
    value: String(_0x2f633d),
  }));
function Co(_0x33c24a = e.defaultChartConfig["pie"].labelContentType) {
  return xo[_0x58fb10(1573)]((_0x4a8a1c) =>
    e.chartBitsUtils["has"](_0x33c24a, _0x4a8a1c),
  )[_0x58fb10(1285)]((_0x5cc8ac) => String(_0x5cc8ac));
}
function wo(_0x2ed565) {
  if (!(_0x2ed565[_0x416bc4(1579)] <= 0))
    return _0x2ed565
      .map((_0x481eff) => Number(_0x481eff))
      [_0x416bc4(900)](
        (_0xd43025, _0x3cfaba) => _0xd43025 | _0x3cfaba,
        e[_0x416bc4(1567)][_0x416bc4(1549)],
      );
}
function To(_0x2b6b67) {
  switch (_0x2b6b67[_0x1ddaf4(2036)][_0x1ddaf4(1873)]) {
    case _0x1ddaf4(1703):
      return _0x2b6b67[_0x1ddaf4(2036)][_0x1ddaf4(1880)] === _0x1ddaf4(1247)
        ? X[_0x1ddaf4(1316)][_0x1ddaf4(740)]
        : X.MENU_TITLE["CHART_TITLE"];
    case _0x1ddaf4(1172):
      return X[_0x1ddaf4(1316)][_0x1ddaf4(1241)];
    case "legend":
      return X.MENU_TITLE[_0x1ddaf4(980)];
    case _0x1ddaf4(708):
      return _0x2b6b67[_0x1ddaf4(2036)][_0x1ddaf4(1422)] === _0x1ddaf4(685)
        ? X[_0x1ddaf4(1316)][_0x1ddaf4(1242)]
        : _0x2b6b67[_0x1ddaf4(2036)][_0x1ddaf4(1422)] === _0x1ddaf4(1278)
          ? X[_0x1ddaf4(1316)][_0x1ddaf4(1585)]
          : X[_0x1ddaf4(1316)].VERTICAL_AXIS;
    case _0x1ddaf4(962):
      return X[_0x1ddaf4(1316)].GRIDLINE;
    case _0x1ddaf4(528):
      return X[_0x1ddaf4(1316)][_0x1ddaf4(488)];
    case _0x1ddaf4(1187):
      var _0xd502dc;
      return ((_0xd502dc = _0x2b6b67.target[_0x1ddaf4(1940)]) == null
        ? undefined
        : _0xd502dc.kind) === "pieStyle"
        ? X[_0x1ddaf4(1316)][_0x1ddaf4(1752)]
        : X[_0x1ddaf4(1316)][_0x1ddaf4(576)];
    case _0x1ddaf4(837):
      return X[_0x1ddaf4(1316)][_0x1ddaf4(987)];
    case _0x1ddaf4(851):
      return X[_0x1ddaf4(1316)][_0x1ddaf4(1387)];
    case _0x1ddaf4(1418):
      return X[_0x1ddaf4(1316)][_0x1ddaf4(1752)];
    default:
      return X[_0x1ddaf4(1316)][_0x1ddaf4(1638)];
  }
}
function Eo(_0xbf5122, _0x4ee6a5, _0x2a6547, _0x557849) {
  return (0, o[_0x54895c(1451)])(
    (0, r.useMemo)(
      () =>
        _0xbf5122 == null
          ? undefined
          : _0xbf5122[_0x54895c(1910)](_0x4ee6a5, _0x2a6547),
      [_0xbf5122, _0x4ee6a5, _0x2a6547],
    ),
    _0x557849,
  );
}
function Do(_0x1db5c8, _0x4e4328) {
  return (0, r.useCallback)(
    (_0x14e822, _0x7a1d49) => {
      _0x1db5c8 == null || _0x1db5c8.setState(_0x4e4328, _0x14e822, _0x7a1d49);
    },
    [_0x1db5c8, _0x4e4328],
  );
}
function Oo(_0x147179, _0x282580, _0x2b21a1) {
  return (
    (0, o[_0xe30975(1451)])(
      (0, r[_0xe30975(1687)])(() => {
        const _0x4340bd = _0xe30975;
        var _0x326a15;
        return _0x147179 == null ||
          (_0x326a15 = _0x147179[_0x4340bd(845)]) == null
          ? undefined
          : _0x326a15[_0x4340bd(678)](_0x147179, _0x282580, _0x2b21a1);
      }, [_0x147179, _0x2b21a1, _0x282580]),
      _0x2b21a1,
    ) ?? _0x2b21a1
  );
}
function ko(_0x592c2b) {
  switch (_0x592c2b) {
    case _0x2a46a3(685):
      return "x";
    case _0x2a46a3(1278):
      return _0x2a46a3(1872);
    default:
      return "y";
  }
}
function Ao(_0x134250) {
  return _0x134250 ?? "";
}
function jo(_0x16903e) {
  return typeof _0x16903e == _0x50ad40(2002)
    ? { text: _0x16903e }
    : (_0x16903e ?? {});
}
function Q(_0x1ec9f9) {
  return (0, i[_0x2c6610(922)])(_0x2c6610(1998), {
    className: (0, t.clsx)(
      "univer-w-36\x20univer-shrink-0",
      _0x1ec9f9.className,
    ),
    children: _0x1ec9f9[_0x2c6610(1492)],
  });
}
function $(_0x22e848) {
  return (0, i[_0x38f82d(922)])(_0x38f82d(1998), {
    className: (0, t[_0x38f82d(1916)])(
      _0x38f82d(1760),
      _0x22e848[_0x38f82d(994)],
    ),
    children: _0x22e848[_0x38f82d(1492)],
  });
}
function Mo(_0x58b35b) {
  return (0, i[_0x576e32(922)])(_0x576e32(1332), {
    className: (0, t[_0x576e32(1916)])(
      _0x576e32(1669),
      _0x58b35b[_0x576e32(994)],
    ),
    disabled: _0x58b35b.disabled,
    children: _0x58b35b.children,
  });
}
function No(_0x2ae664) {
  let {
      adapter: _0x2325cd,
      alignControl: _0x2b1450 = false,
      className: _0x3fa410,
      context: _0x3516fe,
      defaultColor: _0x67a440,
      onChange: _0x133902,
      style: _0x39ab73,
    } = _0x2ae664,
    _0xb138e6 = (0, o.useDependency)(a[_0x19b822(1419)]),
    _0x346966 = Oo(_0x2325cd, _0x3516fe, $e);
  return (0, i[_0x19b822(1557)])(_0x19b822(1998), {
    className: (0, t[_0x19b822(1916)])(
      "univer-inline-flex\x20univer-w-max\x20univer-items-center\x20univer-gap-1.5",
      _0x3fa410,
    ),
    children: [
      (0, i[_0x19b822(922)])(et, {
        emptyLabel: _0xb138e6.t(_0x19b822(1990)),
        isDefault: _0x39ab73[_0x19b822(1003)] == null,
        options: _0x346966,
        value: _0x39ab73[_0x19b822(1003)] ?? undefined,
        onChange: (_0x494291) => _0x133902(_0x19b822(1003), _0x494291),
        onReset: () => _0x133902(_0x19b822(1003), null),
      }),
      (0, i[_0x19b822(922)])(tt, {
        color: _0x39ab73.color ?? _0x67a440,
        onChange: (_0x1dcd0c) => _0x133902(_0x19b822(1393), _0x1dcd0c),
      }),
      _0x2b1450 &&
        (0, i[_0x19b822(922)])(rt, {
          value: _0x39ab73[_0x19b822(1358)],
          onChange: (_0x3f12db) => _0x133902("align", _0x3f12db),
        }),
      (0, i[_0x19b822(922)])(nt, {
        active: _0x39ab73.bold,
        type: _0x19b822(1642),
        onClick: () => _0x133902(_0x19b822(1642), !_0x39ab73[_0x19b822(1642)]),
      }),
      (0, i[_0x19b822(922)])(nt, {
        active: _0x39ab73[_0x19b822(1796)],
        type: _0x19b822(1796),
        onClick: () => _0x133902("italic", !_0x39ab73[_0x19b822(1796)]),
      }),
    ],
  });
}
function Po(_0x25cef5) {
  return (0, i[_0x3cae3c(922)])(t[_0x3cae3c(1259)], {
    className: _0x3cae3c(1742),
    options: So,
    value: String(
      _0x25cef5[_0x3cae3c(1324)] ?? e[_0x3cae3c(1790)][_0x3cae3c(1983)].opacity,
    ),
    onChange: (_0x2831ed) => _0x25cef5.onChange(Number(_0x2831ed)),
  });
}
function Fo(_0x5966f3) {
  let { adapter: _0x3df3a2, context: _0x44fd93 } = _0x5966f3,
    _0x143e14 = (0, o[_0x210226(858)])(a.LocaleService),
    _0x513ec5 = pe(),
    _0x304ec4 = Do(_0x3df3a2, _0x44fd93),
    _0x71bc99 =
      _0x44fd93[_0x210226(2036)][_0x210226(1873)] === "title"
        ? _0x44fd93.target["titleKey"]
        : "title",
    _0x1cf0b5 =
      _0x71bc99 === _0x210226(1247) ? Z[_0x210226(740)] : Z[_0x210226(1216)],
    _0x4847a5 = jo(Eo(_0x3df3a2, _0x44fd93, _0x1cf0b5)),
    _0x5ee71f = (0, r[_0x210226(1687)])(
      () =>
        mo[_0x210226(1285)]((_0x1c3539) => ({
          label: _0x143e14.t(_0x1c3539[_0x210226(1535)]),
          value: _0x1c3539.value,
        })),
      [_0x143e14],
    ),
    _0x27aff8 = {
      align: _0x4847a5[_0x210226(1157)],
      bold: _0x4847a5[_0x210226(1642)],
      color: _0x4847a5[_0x210226(1393)] ?? undefined,
      content: _0x4847a5[_0x210226(1245)],
      fontSize: _0x4847a5[_0x210226(1003)],
      italic: _0x4847a5[_0x210226(1796)],
    },
    _0x164e94 = (0, r[_0x210226(1365)])(
      (_0x35645d) => {
        const _0x3a493b = _0x210226;
        _0x304ec4(_0x1cf0b5, {
          ..._0x4847a5,
          ...(_0x35645d[_0x3a493b(1576)] === undefined
            ? {}
            : { text: _0x35645d[_0x3a493b(1576)] }),
          ...(_0x35645d[_0x3a493b(1358)] === undefined
            ? {}
            : { alignment: _0x35645d[_0x3a493b(1358)] }),
          ...(_0x35645d[_0x3a493b(1642)] === undefined
            ? {}
            : { bold: _0x35645d.bold }),
          ...(_0x35645d[_0x3a493b(1393)] === undefined
            ? {}
            : { color: _0x35645d.color }),
          ...(_0x35645d.fontSize === undefined
            ? {}
            : { fontSize: _0x35645d[_0x3a493b(1003)] }),
          ...(_0x35645d[_0x3a493b(1796)] === undefined
            ? {}
            : { italic: _0x35645d[_0x3a493b(1796)] }),
        });
      },
      [_0x1cf0b5, _0x4847a5, _0x304ec4],
    ),
    _0x56690e = (0, r[_0x210226(1365)])(
      (_0x41fee3, _0x5a1584) => {
        _0x164e94({ [_0x41fee3]: _0x5a1584 });
      },
      [_0x164e94],
    );
  return (0, i[_0x210226(1557)])(i[_0x210226(1762)], {
    children: [
      (0, i[_0x210226(922)])($, {
        className: _0x210226(1069),
        children: (0, i[_0x210226(922)])(t[_0x210226(625)], {
          className: "!univer-h-7\x20!univer-w-full",
          size: _0x210226(1014),
          value: Ao(_0x27aff8.content),
          ..._0x513ec5,
          onChange: (_0x50504f) => _0x164e94({ content: _0x50504f }),
        }),
      }),
      (0, i[_0x210226(1557)])($, {
        children: [
          _0x71bc99 === "title" &&
            (0, i[_0x210226(922)])(Q, {
              children: (0, i[_0x210226(922)])(t[_0x210226(1259)], {
                className: _0x210226(1742),
                options: _0x5ee71f,
                value:
                  _0x4847a5.visible === false
                    ? _0x210226(1588)
                    : (_0x4847a5[_0x210226(1712)] ??
                      e[_0x210226(1790)][_0x210226(955)]),
                onChange: (_0x3cdb3f) =>
                  _0x304ec4(Z[_0x210226(1216)], {
                    ..._0x4847a5,
                    visible: _0x3cdb3f !== _0x210226(1588),
                    ...(_0x3cdb3f === _0x210226(1588)
                      ? {}
                      : { position: _0x3cdb3f }),
                  }),
              }),
            }),
          (0, i[_0x210226(922)])(No, {
            adapter: _0x3df3a2,
            alignControl: _0x71bc99 === _0x210226(1703),
            context: _0x44fd93,
            defaultColor: e[_0x210226(1790)][_0x210226(508)].color,
            style: _0x27aff8,
            onChange: _0x56690e,
          }),
        ],
      }),
    ],
  });
}
function Io(_0x3e4c48) {
  var _0x7818c, _0x27b808, _0x414a22, _0x1b764e;
  let { adapter: _0x405e9d, context: _0x3a6fc9 } = _0x3e4c48,
    _0x525aeb = (0, o.useDependency)(a[_0x2b5a9f(1419)]),
    _0x3a949c = pe(),
    _0x5ee0bc = Do(_0x405e9d, _0x3a6fc9),
    _0x535387 =
      _0x3a6fc9[_0x2b5a9f(2036)][_0x2b5a9f(1873)] === _0x2b5a9f(1172)
        ? _0x3a6fc9[_0x2b5a9f(2036)]
        : undefined,
    _0x47212b = ko(
      (_0x535387 == null ? undefined : _0x535387[_0x2b5a9f(1422)]) ??
        _0x2b5a9f(685),
    ),
    _0x54b9cb = Eo(_0x405e9d, _0x3a6fc9, Z.AXES) ?? {},
    _0x2e4187 = _0x54b9cb[_0x47212b] ?? {},
    _0x2c7c4b = {
      bold:
        (_0x7818c = _0x2e4187[_0x2b5a9f(1735)]) == null
          ? undefined
          : _0x7818c[_0x2b5a9f(1642)],
      color:
        ((_0x27b808 = _0x2e4187.titleStyle) == null
          ? undefined
          : _0x27b808[_0x2b5a9f(1393)]) ?? undefined,
      content: _0x2e4187[_0x2b5a9f(1703)],
      fontSize:
        (_0x414a22 = _0x2e4187[_0x2b5a9f(1735)]) == null
          ? undefined
          : _0x414a22[_0x2b5a9f(1003)],
      italic:
        (_0x1b764e = _0x2e4187[_0x2b5a9f(1735)]) == null
          ? undefined
          : _0x1b764e[_0x2b5a9f(1796)],
    },
    _0x56390e = (0, r.useMemo)(
      () =>
        _o[_0x2b5a9f(1285)]((_0x307ed0) => ({
          label: _0x525aeb.t(_0x307ed0[_0x2b5a9f(1535)]),
          value: _0x307ed0[_0x2b5a9f(1324)],
        })),
      [_0x525aeb],
    ),
    _0x56651d = (0, r.useCallback)(
      (_0x5e16fe) => {
        const _0x1438a1 = _0x2b5a9f;
        _0x5ee0bc(Z[_0x1438a1(1856)], {
          ..._0x54b9cb,
          [_0x47212b]: {
            ..._0x2e4187,
            ...(_0x5e16fe[_0x1438a1(1576)] === undefined
              ? {}
              : { title: _0x5e16fe[_0x1438a1(1576)] }),
            titleStyle: {
              ..._0x2e4187[_0x1438a1(1735)],
              ...(_0x5e16fe.bold === undefined
                ? {}
                : { bold: _0x5e16fe[_0x1438a1(1642)] }),
              ...(_0x5e16fe[_0x1438a1(1393)] === undefined
                ? {}
                : { color: _0x5e16fe[_0x1438a1(1393)] }),
              ...(_0x5e16fe[_0x1438a1(1003)] === undefined
                ? {}
                : { fontSize: _0x5e16fe.fontSize }),
              ...(_0x5e16fe[_0x1438a1(1796)] === undefined
                ? {}
                : { italic: _0x5e16fe.italic }),
            },
          },
        });
      },
      [_0x54b9cb, _0x2e4187, _0x47212b, _0x5ee0bc],
    ),
    _0xff8596 = (0, r.useCallback)(
      (_0x3197d8, _0x559d5b) => {
        _0x56651d({ [_0x3197d8]: _0x559d5b });
      },
      [_0x56651d],
    );
  return (0, i[_0x2b5a9f(1557)])(i[_0x2b5a9f(1762)], {
    children: [
      (0, i.jsx)($, {
        className: "univer-w-full",
        children: (0, i.jsx)(t[_0x2b5a9f(625)], {
          className: _0x2b5a9f(881),
          size: "mini",
          value: Ao(_0x2c7c4b[_0x2b5a9f(1576)]),
          ..._0x3a949c,
          onChange: (_0x451897) => _0x56651d({ content: _0x451897 }),
        }),
      }),
      (0, i[_0x2b5a9f(1557)])($, {
        children: [
          (0, i[_0x2b5a9f(922)])(Q, {
            children: (0, i[_0x2b5a9f(922)])(t.Select, {
              className: _0x2b5a9f(1742),
              options: _0x56390e,
              value:
                _0x2e4187[_0x2b5a9f(1909)] ??
                e[_0x2b5a9f(1790)][_0x2b5a9f(708)][_0x2b5a9f(1891)],
              onChange: (_0x303fa0) =>
                _0x5ee0bc(Z.AXES, {
                  ..._0x54b9cb,
                  [_0x47212b]: { ..._0x2e4187, titleAlignment: _0x303fa0 },
                }),
            }),
          }),
          (0, i[_0x2b5a9f(922)])(No, {
            adapter: _0x405e9d,
            context: _0x3a6fc9,
            defaultColor: e[_0x2b5a9f(1790)][_0x2b5a9f(508)][_0x2b5a9f(1393)],
            style: _0x2c7c4b,
            onChange: _0xff8596,
          }),
        ],
      }),
    ],
  });
}
function Lo(_0x2b1453) {
  let { adapter: _0x454589, context: _0x5cad19 } = _0x2b1453,
    _0x3c38a6 = Do(_0x454589, _0x5cad19),
    _0x4c0bfc = Eo(_0x454589, _0x5cad19, Z[_0x48369e(980)]),
    _0x1e75af =
      typeof _0x4c0bfc == _0x48369e(1053)
        ? { visible: _0x4c0bfc }
        : (_0x4c0bfc ?? {}),
    _0x5d2e30 = (0, r[_0x48369e(1365)])(
      (_0x58b632, _0x176858) => {
        _0x3c38a6(Z.LEGEND, { ..._0x1e75af, [_0x58b632]: _0x176858 });
      },
      [_0x1e75af, _0x3c38a6],
    );
  return (0, i[_0x48369e(922)])($, {
    children: (0, i[_0x48369e(922)])(No, {
      adapter: _0x454589,
      context: _0x5cad19,
      defaultColor: e[_0x48369e(1790)][_0x48369e(508)][_0x48369e(1393)],
      style: _0x1e75af,
      onChange: _0x5d2e30,
    }),
  });
}
function Ro(_0x2abcd6) {
  let { adapter: _0x34c665, context: _0xad882d } = _0x2abcd6,
    _0x5442b2 = Do(_0x34c665, _0xad882d),
    _0x34b1b8 =
      _0xad882d[_0x317e3c(2036)][_0x317e3c(1873)] === _0x317e3c(708)
        ? _0xad882d[_0x317e3c(2036)]
        : undefined,
    _0x1cd977 = ko(
      (_0x34b1b8 == null ? undefined : _0x34b1b8[_0x317e3c(1422)]) ??
        _0x317e3c(685),
    ),
    _0x289742 = Eo(_0x34c665, _0xad882d, Z.AXES) ?? {},
    _0x57326c = _0x289742[_0x1cd977] ?? {},
    _0x1a112d = _0x57326c[_0x317e3c(1614)] ?? {},
    _0x219117 = (0, r[_0x317e3c(1365)])(
      (_0x541c95, _0x24b0ce) => {
        const _0x330b41 = _0x317e3c;
        _0x5442b2(Z[_0x330b41(1856)], {
          ..._0x289742,
          [_0x1cd977]: {
            ..._0x57326c,
            label: { ..._0x1a112d, [_0x541c95]: _0x24b0ce },
          },
        });
      },
      [_0x289742, _0x57326c, _0x1cd977, _0x1a112d, _0x5442b2],
    );
  return (0, i.jsx)($, {
    children: (0, i[_0x317e3c(922)])(No, {
      adapter: _0x34c665,
      context: _0xad882d,
      defaultColor: e[_0x317e3c(1790)].textStyle[_0x317e3c(1393)],
      style: _0x1a112d,
      onChange: _0x219117,
    }),
  });
}
function zo(_0x4165c9) {
  var _0x3a3560, _0xddb35e, _0x5bb928;
  let { adapter: _0xb7aa47, context: _0x4fe3f9 } = _0x4165c9,
    _0x5d4e51 = (0, o.useDependency)(a[_0xd8c697(1419)]),
    _0x1595af = Do(_0xb7aa47, _0x4fe3f9),
    _0x3b0b97 = Eo(_0xb7aa47, _0x4fe3f9, Z.PIE),
    _0x35d2ac = (0, r[_0xd8c697(1687)])(() => _0x3b0b97 ?? {}, [_0x3b0b97]),
    _0x399813 =
      _0x4fe3f9[_0xd8c697(2036)].scope === _0xd8c697(1187)
        ? _0x4fe3f9.target[_0xd8c697(1940)]
        : undefined,
    _0x9f4194 = _0x35d2ac[_0xd8c697(2021)],
    _0x2cb234 = (0, r.useMemo)(
      () => _0x35d2ac.label ?? {},
      [_0x35d2ac[_0xd8c697(1614)]],
    ),
    _0x391299 = _0x2cb234[_0xd8c697(1755)] !== false,
    _0x3b8752 =
      (_0x399813 == null ? undefined : _0x399813.kind) === _0xd8c697(592)
        ? (((_0x3a3560 = _0x35d2ac[_0xd8c697(618)]) == null
            ? undefined
            : _0x3a3560[_0x399813[_0xd8c697(2016)]]) ?? {})
        : {},
    _0x4a2bf5 =
      (_0x9f4194 == null || (_0xddb35e = _0x9f4194.aggregate) == null
        ? undefined
        : _0xddb35e[_0xd8c697(1169)]) ?? {},
    _0x2513a1 =
      (_0x9f4194 == null || (_0x5bb928 = _0x9f4194[_0xd8c697(1437)]) == null
        ? undefined
        : _0x5bb928[_0xd8c697(1487)]) ?? {},
    _0x393cd1 = (0, r[_0xd8c697(1687)])(
      () =>
        ho[_0xd8c697(1285)]((_0x490ffe) => ({
          label: _0x5d4e51.t(_0x490ffe[_0xd8c697(1535)]),
          value: _0x490ffe[_0xd8c697(1324)],
        })),
      [_0x5d4e51],
    ),
    _0x1c17e8 = (0, r[_0xd8c697(1687)])(
      () =>
        go[_0xd8c697(1285)]((_0x8400ad) => ({
          label: _0x5d4e51.t(_0x8400ad[_0xd8c697(1535)]),
          value: _0x8400ad[_0xd8c697(1324)],
        })),
      [_0x5d4e51],
    ),
    _0x5c2e1b = (0, r[_0xd8c697(1687)])(
      () =>
        _n[_0xd8c697(1285)](({ labelKey: _0x24ac75, value: _0x3a1b09 }) => ({
          label: _0x5d4e51.t(_0x24ac75),
          value: _0x3a1b09,
        })),
      [_0x5d4e51],
    ),
    _0x572ebb = (0, r[_0xd8c697(1687)])(
      () => Co(_0x2cb234[_0xd8c697(1108)] ?? undefined),
      [_0x2cb234[_0xd8c697(1108)]],
    ),
    _0x4f8558 = (0, r.useCallback)(
      (_0x49844b) => {
        const _0x59d2f4 = _0xd8c697;
        _0x1595af(Z[_0x59d2f4(1629)], {
          ..._0x35d2ac,
          label: { ..._0x2cb234, ..._0x49844b },
        });
      },
      [_0x35d2ac, _0x2cb234, _0x1595af],
    ),
    _0x42cfa4 = (0, r[_0xd8c697(1365)])(
      (_0x9d6b87, _0x49a711) => {
        _0x4f8558({ [_0x9d6b87]: _0x49a711 });
      },
      [_0x4f8558],
    ),
    _0x2366e8 = (0, r[_0xd8c697(1365)])(
      (_0x11bb08) => {
        let _0x28b2ec = wo(_0x11bb08);
        _0x28b2ec !== undefined && _0x4f8558({ contentType: _0x28b2ec });
      },
      [_0x4f8558],
    ),
    _0x41762a = (0, r[_0xd8c697(1365)])(
      (_0x17656e) => {
        let _0x16055f = vo(_0x35d2ac, _0x399813, _0x17656e);
        _0x16055f && _0x1595af(Z.PIE, _0x16055f);
      },
      [_0x399813, _0x35d2ac, _0x1595af],
    ),
    _0x4220e = (0, r.useCallback)(
      (_0x31c1a5) => {
        const _0x2667bc = _0xd8c697;
        _0x1595af(Z[_0x2667bc(1629)], yo(_0x35d2ac, _0x31c1a5));
      },
      [_0x35d2ac, _0x1595af],
    );
  if (
    (_0x399813 == null ? undefined : _0x399813[_0xd8c697(1201)]) ===
      "pieSliceStyle" ||
    (_0x399813 == null ? undefined : _0x399813[_0xd8c697(1201)]) ===
      "pieAggregateStyle"
  ) {
    let _0x16c7f6 =
      _0x399813[_0xd8c697(1201)] === _0xd8c697(592) ? _0x3b8752 : _0x4a2bf5;
    return (0, i[_0xd8c697(1557)])($, {
      children: [
        (0, i[_0xd8c697(922)])(Q, {
          className: "univer-w-8",
          children: (0, i[_0xd8c697(922)])(Ze, {
            compact: true,
            color:
              typeof _0x16c7f6[_0xd8c697(1393)] == _0xd8c697(2002)
                ? _0x16c7f6[_0xd8c697(1393)]
                : null,
            onChange: (_0x1f9917) => _0x41762a({ color: _0x1f9917 ?? null }),
          }),
        }),
        (0, i[_0xd8c697(922)])(Q, {
          children: (0, i[_0xd8c697(922)])(Po, {
            value: _0x16c7f6[_0xd8c697(944)] ?? undefined,
            onChange: (_0x200b81) => _0x41762a({ fillOpacity: _0x200b81 }),
          }),
        }),
      ],
    });
  }
  return (_0x399813 == null ? undefined : _0x399813.kind) ===
    "pieConnectorStyle"
    ? (0, i[_0xd8c697(1557)])($, {
        children: [
          (0, i.jsx)(t[_0xd8c697(1138)], {
            checked: _0x2513a1.visible ?? e.PIE_CONNECTOR_VISIBLE_DEFAULT,
            onChange: (_0x19dda6) => _0x4220e({ visible: !!_0x19dda6 }),
            children: _0x5d4e51.t(X[_0xd8c697(932)][_0xd8c697(1145)]),
          }),
          (0, i[_0xd8c697(922)])(Q, {
            className: "univer-w-8",
            children: (0, i[_0xd8c697(922)])(Ze, {
              compact: true,
              color: _0x2513a1[_0xd8c697(1393)] ?? e[_0xd8c697(1852)],
              onChange: (_0x4e98b3) => _0x4220e({ color: _0x4e98b3 ?? null }),
            }),
          }),
          (0, i[_0xd8c697(1557)])(_0xd8c697(1998), {
            className: _0xd8c697(1433),
            children: [
              (0, i.jsx)(t.InputNumber, {
                ref: (_0x39985f) =>
                  _0x39985f == null
                    ? undefined
                    : _0x39985f[_0xd8c697(930)](
                        _0xd8c697(702),
                        _0x5d4e51.t("chart-ui.pie.connectorWidth"),
                      ),
                allowClear: true,
                allowEmpty: true,
                className: "!univer-h-7\x20univer-w-full",
                min: 0,
                value: _0x2513a1[_0xd8c697(989)] ?? null,
                onChange: (_0xfa3a93) => _0x4220e({ width: _0xfa3a93 }),
              }),
              _0x2513a1[_0xd8c697(989)] == null &&
                (0, i[_0xd8c697(922)])(_0xd8c697(1904), {
                  "aria-hidden": "true",
                  className: _0xd8c697(988),
                  children: _0x5d4e51.t("chart-ui.common.default"),
                }),
            ],
          }),
          (0, i[_0xd8c697(922)])(Q, {
            children: (0, i[_0xd8c697(922)])(t[_0xd8c697(1259)], {
              className: _0xd8c697(1742),
              options: _0x5c2e1b,
              value: _0x2513a1[_0xd8c697(704)] ?? e[_0xd8c697(696)],
              onChange: (_0x3292ae) => _0x4220e({ dashType: _0x3292ae }),
            }),
          }),
          (0, i.jsx)(Q, {
            children: (0, i[_0xd8c697(922)])(Po, {
              value:
                _0x2513a1[_0xd8c697(577)] ?? e.PIE_CONNECTOR_OPACITY_DEFAULT,
              onChange: (_0x3b8625) => _0x4220e({ opacity: _0x3b8625 }),
            }),
          }),
        ],
      })
    : (0, i[_0xd8c697(1557)])(i.Fragment, {
        children: [
          (0, i[_0xd8c697(1557)])($, {
            children: [
              (0, i.jsx)(t[_0xd8c697(1138)], {
                checked: _0x391299,
                onChange: (_0x24e612) => _0x4f8558({ visible: !!_0x24e612 }),
                children: _0x5d4e51.t(X.CONTROL[_0xd8c697(1303)]),
              }),
              (0, i[_0xd8c697(922)])(Mo, {
                disabled: !_0x391299,
                children: (0, i.jsx)(No, {
                  adapter: _0xb7aa47,
                  context: _0x4fe3f9,
                  defaultColor: e[_0xd8c697(1790)][_0xd8c697(508)].color,
                  style: {
                    bold: _0x2cb234.bold ?? undefined,
                    color: _0x2cb234[_0xd8c697(1393)] ?? undefined,
                    fontSize: _0x2cb234[_0xd8c697(1003)] ?? undefined,
                    italic: _0x2cb234[_0xd8c697(1796)] ?? undefined,
                  },
                  onChange: _0x42cfa4,
                }),
              }),
            ],
          }),
          (0, i[_0xd8c697(922)])($, {
            children: (0, i[_0xd8c697(1557)])(Mo, {
              className: _0xd8c697(1760),
              disabled: !_0x391299,
              children: [
                (0, i[_0xd8c697(922)])(Q, {
                  children: (0, i[_0xd8c697(922)])(t[_0xd8c697(1259)], {
                    className: _0xd8c697(1742),
                    options: _0x393cd1,
                    value:
                      _0x2cb234.position ??
                      e[_0xd8c697(1790)][_0xd8c697(1252)][_0xd8c697(1336)],
                    onChange: (_0x27ff95) => _0x4f8558({ position: _0x27ff95 }),
                  }),
                }),
                (0, i[_0xd8c697(922)])(Q, {
                  className: _0xd8c697(1970),
                  children: (0, i[_0xd8c697(922)])(t[_0xd8c697(1010)], {
                    className: _0xd8c697(1742),
                    options: _0x1c17e8,
                    value: _0x572ebb,
                    onChange: _0x2366e8,
                  }),
                }),
              ],
            }),
          }),
        ],
      });
}
function Bo(_0x80fa48) {
  var _0x54199a;
  let { adapter: _0x395092, context: _0x15e81a } = _0x80fa48,
    _0x1699b5 = (0, o.useDependency)(a[_0x5f3d95(1419)]),
    _0x49d651 = Do(_0x395092, _0x15e81a),
    _0xcdb2a5 =
      _0x15e81a[_0x5f3d95(2036)][_0x5f3d95(1873)] === _0x5f3d95(1187)
        ? _0x15e81a[_0x5f3d95(2036)]
        : undefined,
    _0x19061c = _0xcdb2a5 == null ? undefined : _0xcdb2a5[_0x5f3d95(1940)],
    _0x175b64 = Eo(_0x395092, _0x15e81a, Z.SERIES) ?? [],
    _0x18b70d = Eo(_0x395092, _0x15e81a, Z.PARETO),
    _0x350d1f = (0, r[_0x5f3d95(1687)])(() => {
      const _0x1ea6b7 = _0x5f3d95;
      if (
        (_0x19061c == null ? undefined : _0x19061c[_0x1ea6b7(1201)]) ===
        _0x1ea6b7(1645)
      ) {
        var _0xd11f46;
        return (
          ((_0xd11f46 = _0x175b64[_0x1ea6b7(1507)](
            (_0x3717e6) =>
              _0x3717e6[_0x1ea6b7(1301)] === _0x19061c[_0x1ea6b7(1912)],
          )) == null
            ? undefined
            : _0xd11f46[_0x1ea6b7(1169)]) ?? {}
        );
      }
      if (
        (_0x19061c == null ? undefined : _0x19061c[_0x1ea6b7(1201)]) ===
        "paretoStyle"
      )
        return _0x19061c[_0x1ea6b7(520)] === _0x1ea6b7(1851)
          ? ((_0x18b70d == null ? undefined : _0x18b70d[_0x1ea6b7(785)]) ?? {})
          : ((_0x18b70d == null ? undefined : _0x18b70d[_0x1ea6b7(1801)]) ??
              {});
      if (
        (_0x19061c == null ? undefined : _0x19061c[_0x1ea6b7(1201)]) ===
        _0x1ea6b7(710)
      ) {
        var _0x2a84cb;
        return (
          ((_0x2a84cb = _0x175b64[_0x1ea6b7(1507)](
            (_0x876fba) => _0x876fba.selector === _0x19061c[_0x1ea6b7(1912)],
          )) == null ||
          (_0x2a84cb = _0x2a84cb[_0x1ea6b7(1169)].waterfallStyles) == null
            ? undefined
            : _0x2a84cb[_0x19061c[_0x1ea6b7(520)]]) ?? {}
        );
      }
      return {};
    }, [_0x19061c, _0x18b70d, _0x175b64]),
    _0x45479c = (0, r[_0x5f3d95(1365)])(
      (_0x417c76) => {
        const _0x34ff78 = _0x5f3d95;
        var _0x2dec0c;
        if (!_0x19061c) return;
        if (_0x19061c[_0x34ff78(1201)] === _0x34ff78(1645)) {
          let _0x2d6adc = _0x175b64[_0x34ff78(1507)](
            (_0x289359) => _0x289359.selector === _0x19061c[_0x34ff78(1912)],
          );
          _0x49d651(Z[_0x34ff78(987)], [
            {
              name: (_0x2d6adc == null ? undefined : _0x2d6adc.name) ?? "",
              selector: _0x19061c[_0x34ff78(1912)],
              style: {
                ...(_0x2d6adc == null ? undefined : _0x2d6adc[_0x34ff78(1169)]),
                ..._0x417c76,
              },
            },
          ]);
          return;
        }
        if (_0x19061c[_0x34ff78(1201)] === _0x34ff78(920)) {
          let _0x1d675d =
            _0x19061c[_0x34ff78(520)] === "bar"
              ? _0x34ff78(785)
              : _0x34ff78(1801);
          _0x49d651(Z[_0x34ff78(775)], {
            ..._0x18b70d,
            [_0x1d675d]: {
              ...(_0x18b70d == null ? undefined : _0x18b70d[_0x1d675d]),
              ..._0x417c76,
            },
          });
          return;
        }
        if (_0x19061c[_0x34ff78(1201)] !== "waterfallStyle") return;
        let _0x28ba20 = _0x175b64[_0x34ff78(1507)](
          (_0x3878ef) => _0x3878ef.selector === _0x19061c[_0x34ff78(1912)],
        );
        _0x49d651(Z[_0x34ff78(987)], [
          {
            name: (_0x28ba20 == null ? undefined : _0x28ba20.name) ?? "",
            selector: _0x19061c[_0x34ff78(1912)],
            style: {
              ...(_0x28ba20 == null ? undefined : _0x28ba20[_0x34ff78(1169)]),
              waterfallStyles: {
                ...(_0x28ba20 == null
                  ? undefined
                  : _0x28ba20.style[_0x34ff78(794)]),
                [_0x19061c.part]: {
                  ...(_0x28ba20 == null ||
                  (_0x2dec0c = _0x28ba20.style[_0x34ff78(794)]) == null
                    ? undefined
                    : _0x2dec0c[_0x19061c[_0x34ff78(520)]]),
                  ..._0x417c76,
                },
              },
            },
          },
        ]);
      },
      [_0x19061c, _0x18b70d, _0x175b64, _0x49d651],
    );
  return _0x19061c
    ? (0, i[_0x5f3d95(1557)])($, {
        children: [
          (0, i.jsx)(Q, {
            className: _0x5f3d95(888),
            children: (0, i[_0x5f3d95(922)])(Ze, {
              compact: true,
              color:
                typeof _0x350d1f.color == _0x5f3d95(2002)
                  ? _0x350d1f[_0x5f3d95(1393)]
                  : null,
              onChange: (_0x2f1ee1) => _0x45479c({ color: _0x2f1ee1 ?? null }),
            }),
          }),
          (0, i[_0x5f3d95(922)])(Q, {
            children: (0, i[_0x5f3d95(922)])(Po, {
              value: _0x350d1f[_0x5f3d95(944)] ?? undefined,
              onChange: (_0x16d0dc) => _0x45479c({ fillOpacity: _0x16d0dc }),
            }),
          }),
          (0, i[_0x5f3d95(922)])(t[_0x5f3d95(1138)], {
            checked:
              ((_0x54199a = _0x350d1f[_0x5f3d95(1614)]) == null
                ? undefined
                : _0x54199a[_0x5f3d95(1755)]) ?? false,
            onChange: (_0x510cc7) =>
              _0x45479c({ label: { visible: !!_0x510cc7 } }),
            children: _0x1699b5.t(X[_0x5f3d95(932)][_0x5f3d95(1303)]),
          }),
        ],
      })
    : (0, i[_0x5f3d95(922)])(i.Fragment, {});
}
function Vo(_0x257da7) {
  switch (_0x257da7[_0x3ac36e(2036)][_0x3ac36e(1873)]) {
    case _0x3ac36e(1703):
      return Fo;
    case _0x3ac36e(1172):
      return Io;
    case _0x3ac36e(1565):
      return Lo;
    case _0x3ac36e(708):
      return Ro;
    case "mark":
      var _0x2dbe1b;
      return (_0x2dbe1b = _0x257da7[_0x3ac36e(2036)].directEdit) != null &&
        _0x2dbe1b[_0x3ac36e(1201)] &&
        bo[_0x3ac36e(863)](_0x257da7[_0x3ac36e(2036)][_0x3ac36e(1940)].kind)
        ? zo
        : Bo;
    default:
      return null;
  }
}
function Ho(_0x4cb558) {
  let _0x2ee7d2 = _0x4cb558.popup[_0x16fc72(1139)],
    _0x5da82b = (0, o[_0x16fc72(858)])(a[_0x16fc72(1419)]),
    _0xb82c67 = (0, o.useDependency)(to);
  if (!_0x2ee7d2) return null;
  let _0x51f89a = _0xb82c67[_0x16fc72(977)](_0x2ee7d2[_0x16fc72(1871)]),
    _0x3e6fcf = _0x2ee7d2,
    _0x590960 = Vo(_0x3e6fcf);
  return (0, i.jsxs)(_0x16fc72(1998), {
    className: (0, t[_0x16fc72(1916)])(_0x16fc72(699), t[_0x16fc72(1190)]),
    "data-chart-element-float-menu": _0x2ee7d2.target["scope"],
    children: [
      (0, i[_0x16fc72(922)])("div", {
        className:
          "univer-whitespace-nowrap\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-900\x20dark:!univer-text-gray-100",
        children: _0x5da82b.t(To(_0x2ee7d2)),
      }),
      (0, i[_0x16fc72(922)])("div", {
        className: _0x16fc72(1072),
        children: _0x590960
          ? (0, i.jsx)(_0x590960, { adapter: _0x51f89a, context: _0x3e6fcf })
          : null,
      }),
    ],
  });
}
function Uo(_0x5eb001, _0x473a1a) {
  return (
    _0x5eb001[_0x1f5a57(1579)] === _0x473a1a[_0x1f5a57(1579)] &&
    _0x5eb001[_0x1f5a57(799)](
      (_0x44d307, _0x3c1024) => _0x44d307 === _0x473a1a[_0x3c1024],
    )
  );
}
function Wo(_0x1686bc) {
  return {
    getState: (_0x1cc4c9, _0x158233) => {
      let _0x3a7a99 = _0x1686bc[_0x5a5d91(923)](_0x1cc4c9);
      if (_0x3a7a99)
        return _0x1686bc[_0x5a5d91(1621)]
          .getViewState(_0x158233)
          [_0x5a5d91(977)](_0x3a7a99);
    },
    setState: (_0x416142, _0x4d7551, _0x4893e9) => {
      var _0x4895b7;
      let _0x451786 = _0x1686bc.getHostAdapter(_0x416142);
      if (!_0x451786) return;
      let _0x761775 = _0x1686bc[_0x24b81c(1621)].getViewState(_0x4d7551);
      (_0x4895b7 = _0x761775[_0x24b81c(1023)]) == null ||
        _0x4895b7[_0x24b81c(678)](_0x761775, _0x451786, _0x4893e9);
    },
    observeSizeOptions: (_0x2cb75f, _0x458d22) => {
      var _0x3be59d;
      let _0x22437f =
        (_0x3be59d = _0x1686bc[_0x58fb89(923)](_0x2cb75f)) == null
          ? undefined
          : _0x3be59d.getChartModel();
      return _0x22437f
        ? _0x22437f[_0x58fb89(688)].pipe(
            (0, u.map)((_0x43b481) => _0x43b481[_0x58fb89(1684)](_0x458d22)),
            (0, u.distinctUntilChanged)(Uo),
          )
        : (0, u.of)(_0x458d22);
    },
    close: _0x1686bc[_0x4b0f8d(621)],
    openFullPanel: _0x1686bc.openFullPanel,
  };
}
var Go = "@univerjs-pro/chart-ui",
  Ko = "1.0.0-insiders.20260907-70fc579";
let qo = class extends a.Disposable {
  constructor(_0x13368f, _0xf27c88) {
    (super(),
      (this[_0x54d5fd(1896)] = _0x13368f),
      (this[_0x54d5fd(965)] = _0xf27c88),
      this[_0x54d5fd(1255)](),
      this[_0x54d5fd(1958)]());
  }
  _registerIcons() {
    this[_0x3317f3(774)](
      this[_0x3317f3(965)][_0x3317f3(665)]({
        AreaChartIcon: n[_0x3317f3(1094)],
        BarChartIcon: n[_0x3317f3(482)],
        BoxplotIcon: n[_0x3317f3(1400)],
        BubbleIcon: n.BubbleIcon,
        CandlestickChartIcon: n.CandlestickChartIcon,
        ChartIcon: n[_0x3317f3(515)],
        ChordChartIcon: n[_0x3317f3(745)],
        CloudOutlineIcon: n[_0x3317f3(1708)],
        ColumnChartIcon: n[_0x3317f3(1689)],
        ComboChartIcon: n.ComboChartIcon,
        FunnelIcon: n[_0x3317f3(532)],
        GaugeChartIcon: n[_0x3317f3(782)],
        HeatmapIcon: n.HeatmapIcon,
        HistogramChartIcon: n[_0x3317f3(1714)],
        LineChartIcon: n.LineChartIcon,
        PieChartIcon: n[_0x3317f3(1995)],
        RadarChartIcon: n[_0x3317f3(1288)],
        RelationshipIcon: n[_0x3317f3(1946)],
        SankeyIcon: n[_0x3317f3(1455)],
        ScatterChartIcon: n[_0x3317f3(1261)],
        SunburstChartIcon: n[_0x3317f3(1850)],
        TreemapChartIcon: n.TreemapChartIcon,
        WaterfallChartIcon: n.WaterfallChartIcon,
      }),
    );
  }
  _registerComponents() {
    this[_0x26692e(774)](this[_0x26692e(1896)].register(co, Ho));
  }
};
qo = Ee(
  [
    Te(0, (0, a.Inject)(o.ComponentManager)),
    Te(1, (0, a.Inject)(o.IconManager)),
  ],
  qo,
);
var Jo = class extends a.Disposable {
  constructor(..._0x2ff7c8) {
    (super(..._0x2ff7c8), b(this, "_providers", []));
  }
  register(_0x59f8b6) {
    return (
      this._providers[_0x110276(1447)](_0x59f8b6),
      (0, a.toDisposable)(() => {
        const _0x2c1197 = _0x110276;
        let _0x277180 = this._providers["indexOf"](_0x59f8b6);
        _0x277180 >= 0 && this._providers[_0x2c1197(2032)](_0x277180, 1);
      })
    );
  }
  exportImage(_0x2b7bb7, _0x37b34f) {
    var _0x3a6fe4;
    return (
      ((_0x3a6fe4 = this._providers[_0x4381a7(1507)]((_0x32a041) =>
        _0x32a041.supports(_0x2b7bb7),
      )) == null
        ? undefined
        : _0x3a6fe4[_0x4381a7(1330)](_0x2b7bb7, _0x37b34f)) ??
      Promise[_0x4381a7(1710)](undefined)
    );
  }
  dispose() {
    ((this[_0x3d0baa(1402)][_0x3d0baa(1579)] = 0), super[_0x3d0baa(1706)]());
  }
};
const Yo = new Set([
    "allSeriesStyle",
    "appearance",
    "area",
    "bar",
    "axes",
    "axisPointer",
    "candlestick",
    "funnel",
    "heatmap",
    "invalidValueStrategy",
    "legend",
    "pareto",
    "pie",
    "plotArea",
    "radar",
    "relation",
    "subtitle",
    "theme",
    "title",
    "treemap",
    "trendlines",
    "waterfall",
    "wordCloud",
  ]),
  Xo = new Set(["mappingFields", "sunburstFields", "gaugeFields"]);
var Zo = class {
  constructor() {
    b(this, _0x1ecbe0(1827), new WeakMap());
  }
  get(_0x439dee, _0x3798c0) {
    return this._project(_0x439dee, _0x3798c0);
  }
  observe(_0x454b79, _0x4eb55b) {
    let _0x56ae39 = this[_0x288d68(1827)][_0x288d68(977)](_0x454b79);
    _0x56ae39 ||
      ((_0x56ae39 = new Map()),
      this._observables[_0x288d68(1023)](_0x454b79, _0x56ae39));
    let _0x218875 = _0x56ae39[_0x288d68(977)](_0x4eb55b);
    if (_0x218875) return _0x218875;
    let _0x446a3b = this._dependencies(_0x454b79, _0x4eb55b)[_0x288d68(505)](
      (0, u.map)(() => this[_0x288d68(977)](_0x454b79, _0x4eb55b)),
      (0, u.distinctUntilChanged)((_0x1ac7e1, _0x284080) =>
        (0, a.deepCompare)(_0x1ac7e1, _0x284080),
      ),
      (0, u.shareReplay)({ bufferSize: 1, refCount: true }),
    );
    return (_0x56ae39.set(_0x4eb55b, _0x446a3b), _0x446a3b);
  }
  _dependencies(_0x3184c9, _0x286ce4) {
    if (_0x286ce4 === _0x40e8a8(1257))
      return (0, u[_0x40e8a8(952)])([
        _0x3184c9.chartType$,
        _0x3184c9[_0x40e8a8(1982)],
      ]);
    if (_0x286ce4 === "histogram" || _0x286ce4 === _0x40e8a8(1653))
      return (0, u[_0x40e8a8(952)])([
        _0x3184c9.chartType$,
        _0x3184c9[_0x40e8a8(968)],
        _0x3184c9.style$,
      ]);
    if (_0x286ce4 === _0x40e8a8(837))
      return (0, u.combineLatest)([
        _0x3184c9.chartType$,
        _0x3184c9[_0x40e8a8(968)],
        _0x3184c9.style$,
        _0x3184c9.config$,
      ]);
    if (Yo[_0x40e8a8(863)](_0x286ce4)) return _0x3184c9[_0x40e8a8(1982)];
    if (
      Xo.has(_0x286ce4) ||
      _0x286ce4 === _0x40e8a8(809) ||
      _0x286ce4 === _0x40e8a8(934) ||
      _0x286ce4 === "gaugeLabelIndex" ||
      _0x286ce4 === _0x40e8a8(756) ||
      _0x286ce4 === _0x40e8a8(1931) ||
      _0x286ce4 === "chordMapping"
    )
      return _0x3184c9[_0x40e8a8(968)];
    switch (_0x286ce4) {
      case _0x40e8a8(553):
        return _0x3184c9[_0x40e8a8(1968)];
      case _0x40e8a8(623):
        return _0x3184c9[_0x40e8a8(1863)];
      case _0x40e8a8(1930):
        return _0x3184c9.config$;
      case _0x40e8a8(1889):
      case _0x40e8a8(1598):
      case _0x40e8a8(1782):
        return _0x3184c9[_0x40e8a8(1982)];
      default:
        return (0, u.combineLatest)([
          _0x3184c9[_0x40e8a8(1968)],
          _0x3184c9.context$,
          _0x3184c9[_0x40e8a8(1982)],
          _0x3184c9.config$,
        ]);
    }
  }
  _project(_0x1fb9b7, _0x3bee5f) {
    if (
      Yo[_0x355b67(863)](_0x3bee5f) ||
      _0x3bee5f === _0x355b67(623) ||
      _0x3bee5f === _0x355b67(1257) ||
      _0x3bee5f === "histogram" ||
      _0x3bee5f === _0x355b67(1653)
    )
      return (0, e[_0x355b67(1908)])(_0x1fb9b7, _0x3bee5f);
    if (Xo[_0x355b67(863)](_0x3bee5f))
      return Qo(_0x1fb9b7, _0x1fb9b7[_0x355b67(1887)]);
    switch (_0x3bee5f) {
      case _0x355b67(553):
        return _0x1fb9b7[_0x355b67(553)];
      case _0x355b67(837):
        return es(_0x1fb9b7);
      case _0x355b67(1930):
        return ts(_0x1fb9b7);
      case "sunburstHierarchyIndexes":
        return _0x1fb9b7[_0x355b67(1887)][_0x355b67(1448)] ?? [];
      case "sunburstValueIndex":
      case "gaugeValueIndex":
        var _0x34154b;
        return (_0x34154b = _0x1fb9b7[_0x355b67(1887)][_0x355b67(1238)]) == null
          ? undefined
          : _0x34154b[0];
      case "gaugeLabelIndex":
        var _0x1cc544;
        return (_0x1cc544 = _0x1fb9b7[_0x355b67(1887)][_0x355b67(1448)]) == null
          ? undefined
          : _0x1cc544[0];
      case "sunburstStyle":
        return _0x1fb9b7.style[_0x355b67(1600)];
      case _0x355b67(1598):
        return _0x1fb9b7[_0x355b67(1169)][_0x355b67(1385)];
      case "chordStyle":
        return _0x1fb9b7.style[_0x355b67(712)];
      case _0x355b67(1931):
        return $o(_0x1fb9b7);
      case _0x355b67(1050): {
        let [_0x2dcc33, _0x244ec5] =
            _0x1fb9b7[_0x355b67(1887)][_0x355b67(1448)] ?? [],
          [_0x454afd] = _0x1fb9b7.context[_0x355b67(1238)] ?? [];
        return _0x2dcc33 === undefined || _0x244ec5 === undefined
          ? undefined
          : {
              sourceIndex: _0x2dcc33,
              targetIndex: _0x244ec5,
              ...(_0x454afd === undefined ? {} : { valueIndex: _0x454afd }),
            };
      }
      default:
        return;
    }
  }
};
function Qo(_0x5b5644, _0x9890d1) {
  let { source: _0x32bb15, sourceLabels: _0x535f12 } =
    _0x5b5644.dataSource[_0x46e5d9(1753)]();
  return _0x32bb15.map((_0x2edc86, _0xda4c9a) => {
    const _0x134445 = _0x46e5d9;
    var _0x42cdd1, _0x5080ac;
    let _0x2cb5f9 =
      (_0x42cdd1 = _0x9890d1[_0x134445(760)]) == null
        ? undefined
        : _0x42cdd1[_0xda4c9a];
    return {
      label:
        (_0x2cb5f9 != null && _0x2cb5f9[_0x134445(1342)]()
          ? _0x2cb5f9
          : undefined) ??
        (_0x535f12 == null || (_0x5080ac = _0x535f12[_0xda4c9a]) == null
          ? undefined
          : _0x5080ac[_0x134445(1507)](
              (_0x1c4bcf) => _0x1c4bcf[_0x134445(1342)]() !== "",
            )) ??
        "",
      value: String(_0xda4c9a),
    };
  });
}
function $o(_0x97f8fe) {
  let _0x3e1c5b = Qo(_0x97f8fe, _0x97f8fe.context),
    _0x5921cd = new Set(
      _0x97f8fe[_0xc30536(1887)].categoryResourceIndexes ?? [],
    ),
    _0x1a2f6a = new Set(_0x97f8fe[_0xc30536(1887)].seriesResourceIndexes ?? []);
  return {
    categoryFields: _0x3e1c5b[_0xc30536(1573)]((_0xb6801b) =>
      _0x5921cd.has(Number(_0xb6801b.value)),
    ),
    valueFields: _0x3e1c5b.filter((_0x3e75c1) =>
      _0x1a2f6a[_0xc30536(863)](Number(_0x3e75c1[_0xc30536(1324)])),
    ),
  };
}
function es(_0x131e10) {
  let _0x239038 = (0, e[_0x849714(1908)])(_0x131e10, _0x849714(837));
  return Object[_0x849714(1421)](_0x239038).flatMap(
    ([_0x29ee70, _0x33b83b]) => {
      const _0x1ca891 = _0x849714;
      var _0x34de2d;
      if (!_0x33b83b) return [];
      let { name: _0x422b4f, ..._0x55ba9c } = _0x33b83b,
        _0x1b65b3 =
          (_0x34de2d = _0x131e10[_0x1ca891(1737)]) == null ||
          (_0x34de2d = _0x34de2d[_0x1ca891(837)]) == null
            ? undefined
            : _0x34de2d.find(
                (_0x43591b) => _0x43591b[_0x1ca891(1709)] === Number(_0x29ee70),
              );
      return [
        {
          dataPointOptions: (
            (_0x1b65b3 == null ? undefined : _0x1b65b3[_0x1ca891(1914)]) ?? []
          ).map((_0x1288dc, _0x17d940) => {
            const _0x229d00 = _0x1ca891;
            var _0x91a28b;
            return {
              label:
                ((_0x91a28b = _0x131e10[_0x229d00(1737)]) == null ||
                (_0x91a28b = _0x91a28b.category) == null ||
                (_0x91a28b = _0x91a28b[_0x229d00(1914)][_0x17d940]) == null
                  ? undefined
                  : _0x91a28b[_0x229d00(1614)]) ??
                _0x1288dc.label ??
                String(_0x17d940 + 1),
              value: String(_0x17d940),
            };
          }),
          name: _0x422b4f,
          selector: Number(_0x29ee70),
          style: _0x55ba9c,
        },
      ];
    },
  );
}
function ts(_0x6f22fa) {
  var _0x20fe3f, _0x46a1a7;
  let _0x2c421a =
      ((_0x20fe3f = _0x6f22fa[_0x5859a0(1737)]) == null ||
      (_0x20fe3f = _0x20fe3f.category) == null
        ? undefined
        : _0x20fe3f[_0x5859a0(1914)]) ?? [],
    _0x1e1e2f = new Map();
  return (
    (_0x46a1a7 = _0x6f22fa[_0x5859a0(1737)]) == null ||
      (_0x46a1a7 = _0x46a1a7[_0x5859a0(837)]) == null ||
      (_0x46a1a7 = _0x46a1a7[0]) == null ||
      _0x46a1a7[_0x5859a0(1914)].forEach((_0x8c7861, _0x37e6a1) => {
        const _0xa05e60 = _0x5859a0;
        var _0x16ffce;
        let _0x2ad9ea =
            ((_0x16ffce = _0x2c421a[_0x37e6a1]) == null
              ? undefined
              : _0x16ffce.label) ??
            _0x8c7861[_0xa05e60(1614)] ??
            String(_0x37e6a1 + 1),
          _0x488564 =
            typeof _0x8c7861[_0xa05e60(1324)] == _0xa05e60(1577)
              ? _0x8c7861[_0xa05e60(1324)]
              : 0;
        _0x1e1e2f[_0xa05e60(1023)](
          _0x2ad9ea,
          (_0x1e1e2f[_0xa05e60(977)](_0x2ad9ea) ?? 0) + _0x488564,
        );
      }),
    Array[_0x5859a0(2034)](_0x1e1e2f.entries())
      [_0x5859a0(1573)](([, _0xd84fa2]) => _0xd84fa2 > 0)
      [_0x5859a0(1352)]((_0xbb4e83, _0xaacb34) => _0xaacb34[1] - _0xbb4e83[1])
      .map(([_0x3f600d], _0x2a1435) => ({
        label: _0x3f600d,
        value: String(_0x2a1435),
      }))
  );
}
function ns(_0xdcc226, _0x243693) {
  let _0x4702c9 = new a[_0x36a8ff(1622)](),
    _0xf339b3 = (_0x579aad) => (_0x1b118e) =>
      _0x243693[_0x36a8ff(1156)](_0x1b118e.getChartModel(), _0x579aad);
  return (
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226[_0x36a8ff(1951)](_0x36a8ff(553), {
        get: _0xf339b3("chartType"),
        set: (_0x237060, _0x423dc3) =>
          _0x237060[_0x36a8ff(1254)]({
            type: (0, e[_0x36a8ff(2005)])(_0x423dc3),
          }),
      }),
    ),
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226[_0x36a8ff(1951)](_0x36a8ff(954), {
        get: _0xf339b3(_0x36a8ff(954)),
      }),
    ),
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226.registerViewState(_0x36a8ff(727), {
        get: _0xf339b3(_0x36a8ff(727)),
      }),
    ),
    _0x4702c9.add(
      _0xdcc226[_0x36a8ff(1951)](_0x36a8ff(809), {
        get: _0xf339b3(_0x36a8ff(809)),
        set: (_0x520fd7, _0x3131a0) =>
          _0x520fd7[_0x36a8ff(1254)]({
            mapping: { hierarchyIndexes: _0x3131a0 },
          }),
      }),
    ),
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226[_0x36a8ff(1951)](_0x36a8ff(934), {
        get: _0xf339b3(_0x36a8ff(934)),
        set: (_0x5b9adf, _0x42533e) =>
          _0x5b9adf.commit({
            mapping: {
              seriesIndexes: _0x42533e === undefined ? null : [_0x42533e],
            },
          }),
      }),
    ),
    _0x4702c9.add(
      _0xdcc226[_0x36a8ff(1951)](_0x36a8ff(1889), {
        get: _0xf339b3(_0x36a8ff(1889)),
        set: (_0x30789f, _0x45d31b) =>
          _0x30789f[_0x36a8ff(1254)]({ sunburst: _0x45d31b ?? null }),
      }),
    ),
    _0x4702c9.add(
      _0xdcc226[_0x36a8ff(1951)](_0x36a8ff(860), {
        get: _0xf339b3(_0x36a8ff(860)),
      }),
    ),
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226.registerViewState(_0x36a8ff(1786), {
        get: _0xf339b3(_0x36a8ff(1786)),
        set: (_0x7edda7, _0x19e64a) =>
          _0x7edda7[_0x36a8ff(1254)]({
            mapping: { categoryIndex: _0x19e64a ?? null },
          }),
      }),
    ),
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226[_0x36a8ff(1951)](_0x36a8ff(756), {
        get: _0xf339b3(_0x36a8ff(756)),
        set: (_0x31e1bb, _0x2658b7) =>
          _0x31e1bb[_0x36a8ff(1254)]({
            mapping: {
              seriesIndexes: _0x2658b7 === undefined ? null : [_0x2658b7],
            },
          }),
      }),
    ),
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226.registerViewState(_0x36a8ff(1598), {
        get: _0xf339b3("gaugeStyle"),
        set: (_0x46eabc, _0x2f6a10) =>
          _0x46eabc[_0x36a8ff(1254)]({ gauge: _0x2f6a10 ?? null }),
      }),
    ),
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226[_0x36a8ff(1951)](_0x36a8ff(1931), {
        get: _0xf339b3("chordFields"),
      }),
    ),
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226.registerViewState(_0x36a8ff(1050), {
        get: _0xf339b3(_0x36a8ff(1050)),
        set: (_0x2a0ee4, _0x412084) =>
          _0x2a0ee4[_0x36a8ff(1254)]({ mapping: { chord: _0x412084 ?? null } }),
      }),
    ),
    _0x4702c9[_0x36a8ff(519)](
      _0xdcc226.registerViewState(_0x36a8ff(1782), {
        get: _0xf339b3(_0x36a8ff(1782)),
        set: (_0x796981, _0x5ee96b) =>
          _0x796981.commit({ chord: _0x5ee96b ?? null }),
      }),
    ),
    _0x4702c9
  );
}
const rs = [
  "allSeriesStyle",
  "appearance",
  "area",
  "bar",
  "autoGradientFill",
  "axes",
  "axisPointer",
  "candlestick",
  "funnel",
  "heatmap",
  "histogram",
  "invalidValueStrategy",
  "legend",
  "pareto",
  "pie",
  "plotArea",
  "radar",
  "relation",
  "subtitle",
  "theme",
  "title",
  "treemap",
  "trendlines",
  "waterfall",
  "wordCloud",
];
function is(_0x2713c7, _0x56f675, _0x5ac46b) {
  return _0x2713c7[_0x21d7c3(1951)](_0x5ac46b, {
    get: (_0x4fb06e) =>
      _0x56f675[_0x21d7c3(1156)](_0x4fb06e[_0x21d7c3(1066)](), _0x5ac46b),
    set: (_0x590e81, _0x359cab) =>
      _0x590e81[_0x21d7c3(1254)]({ [_0x5ac46b]: _0x359cab }),
  });
}
function as(_0x3c9fa7, _0x2a4fe4) {
  let _0x47028a = new a[_0x3bc72d(1622)]();
  for (let _0x104126 of rs)
    _0x47028a[_0x3bc72d(519)](is(_0x3c9fa7, _0x2a4fe4, _0x104126));
  return (
    _0x47028a[_0x3bc72d(519)](
      _0x3c9fa7[_0x3bc72d(1951)](_0x3bc72d(1653), {
        get: (_0x3485e6) =>
          _0x2a4fe4.observe(_0x3485e6[_0x3bc72d(1066)](), _0x3bc72d(1653)),
        set: (_0x1be5be, _0x56b4ee) =>
          _0x1be5be[_0x3bc72d(1254)]({ mapping: _0x56b4ee }),
      }),
    ),
    _0x47028a[_0x3bc72d(519)](
      _0x3c9fa7[_0x3bc72d(1951)]("aggregation", {
        get: (_0x58fe25) =>
          _0x2a4fe4[_0x3bc72d(1156)](
            _0x58fe25[_0x3bc72d(1066)](),
            _0x3bc72d(623),
          ),
        set: (_0x207d34, _0xb99bfc) =>
          _0x207d34[_0x3bc72d(1254)]({ aggregation: _0xb99bfc }),
      }),
    ),
    _0x47028a[_0x3bc72d(519)](
      _0x3c9fa7[_0x3bc72d(1951)](_0x3bc72d(837), {
        get: (_0x597eea) =>
          _0x2a4fe4[_0x3bc72d(1156)](
            _0x597eea[_0x3bc72d(1066)](),
            _0x3bc72d(837),
          ),
        set: (_0x463b4f, _0x445ef0) =>
          _0x463b4f[_0x3bc72d(1254)]({
            series: _0x445ef0[_0x3bc72d(1285)](
              ({ selector: _0x2aa2f4, style: _0x42dcab }) => ({
                selector: { index: _0x2aa2f4 },
                ..._0x42dcab,
              }),
            ),
          }),
      }),
    ),
    _0x47028a[_0x3bc72d(519)](
      _0x3c9fa7[_0x3bc72d(1951)](_0x3bc72d(1930), {
        get: (_0x242af3) =>
          _0x2a4fe4[_0x3bc72d(1156)](
            _0x242af3.getChartModel(),
            _0x3bc72d(1930),
          ),
      }),
    ),
    _0x47028a
  );
}
function os(_0x34b463) {
  let _0x183e08 = new a.DisposableCollection(),
    _0x59a7fa = new Zo();
  return (
    _0x183e08.add(ns(_0x34b463, _0x59a7fa)),
    _0x183e08[_0x53269e(519)](as(_0x34b463, _0x59a7fa)),
    _0x183e08
  );
}
let ss = class extends a.Plugin {
  constructor(_0xb3c648 = ot, _0x505df4, _0x20ed41) {
    (super(),
      (this[_0x20a247(1373)] = _0xb3c648),
      (this._injector = _0x505df4),
      (this[_0x20a247(1029)] = _0x20ed41));
    let { ..._0x1c2edc } = (0, a[_0x20a247(810)])({}, ot, this._config);
    this[_0x20a247(1029)].setConfig(at, _0x1c2edc);
  }
  onStarting() {
    (this._injector["add"]([to]),
      this[_0x149e89(1061)][_0x149e89(519)]([Jo]),
      this._injector[_0x149e89(519)]([Ht]),
      this[_0x149e89(1061)][_0x149e89(519)]([De]),
      this._injector[_0x149e89(519)]([qo]),
      this[_0x149e89(774)](os(this._injector[_0x149e89(977)](Ht))),
      this[_0x149e89(1061)][_0x149e89(977)](qo));
  }
};
(b(ss, "type", a.UniverInstanceType["UNIVER_UNKNOWN"]),
  b(ss, "pluginName", "UNIVER_CHART_UI_PLUGIN"),
  b(ss, "packageName", Go),
  b(ss, "version", Ko),
  (ss = Ee(
    [
      (0, a.DependentOn)(
        d.UniverLicensePlugin,
        e.UniverChartPlugin,
        s.UniverEmbedUnitUIPlugin,
      ),
      Te(1, (0, a.Inject)(a.Injector)),
      Te(2, a.IConfigService),
    ],
    ss,
  )));
var cs = class {},
  ls = class extends cs {
    constructor(_0x223050, _0x170e1f) {
      (super(),
        (this[_0x4def5e(1279)] = _0x223050),
        (this[_0x4def5e(1096)] = _0x170e1f));
    }
    getChartModel() {
      return this[_0x1be586(1279)];
    }
    commit(_0x5aecaa) {
      this[_0x4b2084(1096)][_0x4b2084(1254)](_0x5aecaa);
    }
  },
  us = class extends a.Disposable {
    constructor(_0x2e7022, _0x2f0e3b, _0x126968) {
      (super(),
        (this[_0x444de5(616)] = _0x2e7022),
        (this[_0x444de5(1077)] = _0x2f0e3b),
        (this[_0x444de5(1206)] = _0x126968),
        b(this, _0x444de5(1964), new u[_0x444de5(1617)]()),
        b(this, _0x444de5(1025), new u[_0x444de5(1617)]()),
        b(this, _0x444de5(2033), new Map()),
        b(this, _0x444de5(1562), []),
        b(this, "_rendering", false),
        b(this, _0x444de5(681), null),
        this[_0x444de5(774)](
          this[_0x444de5(616)][_0x444de5(1091)]
            [_0x444de5(505)]((0, u[_0x444de5(1778)])(1))
            [_0x444de5(689)](() => {
              const _0x27d6d4 = _0x444de5;
              this[_0x27d6d4(1105)]();
            }),
        ));
    }
    requestSnapshot(_0x38a862) {
      let _0x349307 = this.getCacheKey(_0x38a862),
        _0x3c0c5c = this[_0x1dbaa6(2033)].get(_0x349307);
      if (_0x3c0c5c && _0x3c0c5c[_0x1dbaa6(769)] !== "error") return _0x3c0c5c;
      let _0x54928b = { key: _0x349307, status: _0x1dbaa6(1580) };
      return (
        this[_0x1dbaa6(2033)].set(_0x349307, _0x54928b),
        this[_0x1dbaa6(1562)][_0x1dbaa6(1447)](_0x38a862),
        this[_0x1dbaa6(956)](),
        _0x54928b
      );
    }
    getSnapshot(_0x34c775) {
      return this[_0x32e0f6(2033)][_0x32e0f6(977)](this.getCacheKey(_0x34c775));
    }
    async exportImage(_0x14ceab) {
      let _0x258ad7 = this[_0x88e269(715)](_0x14ceab);
      return (
        await this._activeDrain,
        _0x258ad7[_0x88e269(769)] === "ready"
          ? _0x258ad7[_0x88e269(1326)]
          : undefined
      );
    }
    invalidateChart(_0x3e585f, _0x503c50) {
      let _0xf68600 = _0x3e585f + "::" + _0x503c50 + "::";
      for (let _0x3cc0da of this[_0x1df3ff(2033)][_0x1df3ff(1994)]())
        _0x3cc0da[_0x1df3ff(1509)](_0xf68600) &&
          this._cache[_0x1df3ff(872)](_0x3cc0da);
      this[_0x1df3ff(1025)][_0x1df3ff(1563)]({
        unitId: _0x3e585f,
        chartId: _0x503c50,
      });
    }
    getCacheKey(_0x50ea76) {
      return [
        _0x50ea76.unitId,
        _0x50ea76[_0x5b9fa3(1020)],
        Math.round(_0x50ea76.width),
        Math[_0x5b9fa3(2000)](_0x50ea76[_0x5b9fa3(787)]),
        _0x50ea76[_0x5b9fa3(1100)] ?? 1,
        this._localeService["getDirection"](),
        _0x50ea76[_0x5b9fa3(1122)] ?? _0x5b9fa3(2025),
      ][_0x5b9fa3(766)]("::");
    }
    async flushForTests() {
      for (
        ;
        this[_0x30047f(1562)].length > 0 ||
        this[_0x30047f(843)] ||
        this[_0x30047f(681)];
      )
        (await (this._activeDrain ?? Promise[_0x30047f(1710)]()),
          await Promise[_0x30047f(1710)]());
    }
    dispose() {
      (this[_0x136fe6(2033)][_0x136fe6(959)](),
        (this[_0x136fe6(1562)][_0x136fe6(1579)] = 0),
        this[_0x136fe6(1964)][_0x136fe6(963)](),
        this[_0x136fe6(1025)][_0x136fe6(963)](),
        super[_0x136fe6(1706)]());
    }
    _drainQueue() {
      this[_0x2f0dee(843)] ||
        (this[_0x2f0dee(681)] = this[_0x2f0dee(1154)]()[_0x2f0dee(1159)](() => {
          const _0x476fd4 = _0x2f0dee;
          this[_0x476fd4(681)] = null;
        }));
    }
    _invalidateSnapshotsForDirectionChange() {
      let _0x55873a = new Map();
      for (let _0x11af69 of this[_0x2d8a64(2033)][_0x2d8a64(1994)]()) {
        let [_0x475c2c, _0x17a614] = _0x11af69[_0x2d8a64(757)]("::");
        _0x475c2c &&
          _0x17a614 &&
          _0x55873a.set(_0x475c2c + "::" + _0x17a614, {
            unitId: _0x475c2c,
            chartId: _0x17a614,
          });
      }
      (this._cache[_0x2d8a64(959)](),
        _0x55873a[_0x2d8a64(1785)]((_0x1b7f19) =>
          this[_0x2d8a64(1025)].next(_0x1b7f19),
        ));
    }
    async _runQueue() {
      if (!this[_0x9b71b9(843)]) {
        this[_0x9b71b9(843)] = true;
        try {
          for (; this[_0x9b71b9(1562)][_0x9b71b9(1579)] > 0;)
            await this[_0x9b71b9(1843)](this._queue["shift"]());
        } finally {
          this[_0x9b71b9(843)] = false;
        }
      }
    }
    async _renderOne(_0x15c32e) {
      let _0x4c1aaa = this[_0x4223bd(1253)](_0x15c32e),
        _0x2fb20f = this._cache[_0x4223bd(977)](_0x4c1aaa);
      if (!_0x2fb20f || _0x2fb20f[_0x4223bd(769)] !== "pending") return;
      let _0x507571 = this[_0x4223bd(1077)].ensureChartModel(
        _0x15c32e[_0x4223bd(1903)],
        _0x15c32e[_0x4223bd(1020)],
      );
      if (!_0x507571) {
        ((_0x2fb20f[_0x4223bd(769)] = _0x4223bd(764)),
          (_0x2fb20f[_0x4223bd(764)] = Error(
            _0x4223bd(1425) +
              _0x15c32e[_0x4223bd(1903)] +
              "/" +
              _0x15c32e.chartId,
          )),
          this.snapshotUpdated$[_0x4223bd(1563)](_0x2fb20f));
        return;
      }
      try {
        if (
          (await this[_0x4223bd(1603)](_0x507571),
          this[_0x4223bd(2033)][_0x4223bd(977)](_0x4c1aaa) !== _0x2fb20f ||
            _0x2fb20f[_0x4223bd(769)] !== "pending")
        )
          return;
        ((_0x2fb20f.dataUrl = await this[_0x4223bd(1206)].render(
          _0x15c32e,
          _0x507571,
        )),
          (_0x2fb20f[_0x4223bd(769)] = _0x4223bd(847)));
      } catch (_0x4ba39a) {
        ((_0x2fb20f.status = _0x4223bd(764)),
          (_0x2fb20f[_0x4223bd(764)] = _0x4ba39a));
      }
      this[_0x4223bd(1964)][_0x4223bd(1563)](_0x2fb20f);
    }
    async _waitForRuntimeConfig(_0x4833b0) {
      let { model: _0x5d9937 } = _0x4833b0;
      _0x5d9937.config ||
        (await (0, u.firstValueFrom)(
          _0x5d9937[_0x143db2(970)][_0x143db2(505)](
            (0, u[_0x143db2(1573)])((_0x38edeb) => _0x38edeb != null),
            (0, u[_0x143db2(676)])(1),
          ),
        ));
    }
  };
let ds = (function (_0x4d83e6) {
  return (
    (_0x4d83e6[_0x1f364d(1552)] = _0x1f364d(1381)),
    (_0x4d83e6[_0x1f364d(649)] = _0x1f364d(966)),
    (_0x4d83e6[_0x1f364d(1926)] = _0x1f364d(709)),
    _0x4d83e6
  );
})({});
const fs = (_0x1069ab) => {
    if (!_0x1069ab.some((_0x4f9265) => _0x4f9265[_0x759f95(1579)] < 5))
      return _0x1069ab.map((_0x184f6f) => _0x184f6f[_0x759f95(1980)](0, 5));
  },
  ps = { [e.ChartTypeBits["Candlestick"]]: fs };
function ms(_0x50980d) {
  let _0x4a2324 = Re[_0x1667c0(1507)](
    (_0x31a0d1) =>
      ("id" in _0x31a0d1
        ? _0x31a0d1.id
        : String(_0x31a0d1[_0x1667c0(1324)])) === _0x50980d,
  );
  if (_0x4a2324)
    return {
      chartType: _0x4a2324[_0x1667c0(1324)],
      ...(_0x1667c0(1978) in _0x4a2324
        ? { pieSecondaryPlotType: _0x4a2324[_0x1667c0(1978)] }
        : {}),
    };
}
function hs(_0x41c516, _0x5d4c92) {
  let _0x18f2c3 = be(_0x5d4c92);
  if (_0x18f2c3[_0x4b7a6c(1579)] === 0)
    return { ok: false, issue: { code: _0x4b7a6c(966) } };
  let _0x148dad = ps[_0x41c516],
    _0x26b5bd = _0x148dad
      ? _0x148dad(_0x18f2c3)
      : _0x18f2c3[_0x4b7a6c(1285)]((_0x3504e3) => [..._0x3504e3]);
  return _0x26b5bd
    ? { ok: true, values: _0x26b5bd }
    : { ok: false, issue: { code: "invalidCandlestickData" } };
}
function gs(_0x119e6a) {
  let _0xc19213 = ms(_0x119e6a[_0x21ee10(1550)]);
  if (!_0xc19213) return { ok: false, issue: { code: "unknownOption" } };
  let _0x46f606 = hs(_0xc19213.chartType, _0x119e6a[_0x21ee10(1596)]);
  return _0x46f606.ok
    ? {
        ok: true,
        plan: {
          chartType: _0xc19213[_0x21ee10(553)],
          values: _0x46f606[_0x21ee10(1596)],
          ...(_0xc19213[_0x21ee10(1978)]
            ? { style: _s(_0xc19213[_0x21ee10(1978)]) }
            : {}),
        },
      }
    : _0x46f606;
}
function _s(_0x58da15) {
  return {
    pie: { composite: { enabled: true, secondaryPlot: { type: _0x58da15 } } },
  };
}
((exports.CHART_DOM_HOST_Z_INDEX = 1000),
  (exports.CHART_ELEMENT_FLOAT_MENU_COMPONENT = co),
  (exports.CHART_ELEMENT_FLOAT_MENU_OFFSET = lo),
  (exports.CHART_HOST_BORDER_RADIUS = 8),
  (exports.CHART_TYPE_CATALOG = Re),
  (exports.CHART_UI_PLUGIN_CONFIG_KEY = at),
  (exports.ChartAxisBoundsFields = jn),
  (exports.ChartAxisFormatTextField = Mn),
  (exports.ChartAxisId = F),
  (exports.ChartAxisLabelStyleFields = Nn),
  (exports.ChartAxisLabelVisibilityField = kn),
  (exports.ChartAxisLineVisibilityField = On),
  (exports.ChartAxisReverseField = An),
  (exports.ChartAxisSection = Ln),
  (exports.ChartAxisTickVisibilityField = Pn),
  (exports.ChartAxisTitleFields = oi),
  (exports.ChartColorField = M),
  (exports.ChartCommonDataMappingSection = Oa),
  (exports.ChartDomFrame = S),
  (exports.ChartEditBlockTitle = ie),
  (exports.ChartEditPanel = re),
  (exports.ChartEditPanelSection = en),
  (exports.ChartEditPanelTab = $t),
  (exports.ChartEditPanelTabs = ne),
  (exports.ChartEditorCapability = on),
  (exports.ChartEditorProvider = Pt),
  (exports.ChartElementFloatMenu = Ho),
  (exports.ChartElementFloatMenuAdapterRegistry = to),
  (exports.ChartFrameContentMode = f),
  (exports.ChartFrameLayout = p),
  (exports.ChartFunnelStyleSection = bi),
  (exports.ChartGradientFillField = Gr),
  (exports.ChartGridlineVisibilityField = Fn),
  (exports.ChartGridlineWidthField = In),
  (exports.ChartGridlinesAndTicksSection = zn),
  (exports.ChartHeatmapStyleSection = Si),
  (exports.ChartHostAdapter = ls),
  (exports.ChartImageExportService = Jo),
  (exports.ChartIndicatorLineColorField = Vn),
  (exports.ChartIndicatorLineSection = Wn),
  (exports.ChartIndicatorLineTypeField = Hn),
  (exports.ChartInlineTableEditor = we),
  (exports.ChartLegendFontSizeField = nr),
  (exports.ChartLegendPositionField = Zn),
  (exports.ChartLegendRoot = Xn),
  (exports.ChartLegendSection = rr),
  (exports.ChartLegendSelectModeField = er),
  (exports.ChartLegendWrapField = Qn),
  (exports.ChartLineAndAreaSection = or),
  (exports.ChartMainTitleFields = ii),
  (exports.ChartMarkDirectEditKind = Zt),
  (exports.ChartMarkPanel = Qt),
  (exports.ChartNumberFormatAtom = jt),
  (exports.ChartNumberFormatTextField = At),
  (exports.ChartParetoSeriesSection = fr),
  (exports.ChartPieStyleSection = Oi),
  (exports.ChartPointMappingStateKey = C),
  (exports.ChartRadarStyleSection = Ai),
  (exports.ChartReferencedDataSourceEditor = Ne),
  (exports.ChartRelationStyleSection = Mi),
  (exports.ChartSectionAccordion = le),
  (exports.ChartSectionAccordionContent = fe),
  (exports.ChartSectionAccordionItem = ue),
  (exports.ChartSectionAccordionTrigger = de),
  (exports.ChartSeriesBorderFields = kr),
  (exports.ChartSeriesDataLabelFields = Rr),
  (exports.ChartSeriesDataPointFields = wr),
  (exports.ChartSeriesFillFields = Or),
  (exports.ChartSeriesLabelFontSizeField = Lr),
  (exports.ChartSeriesLabelPositionField = Pr),
  (exports.ChartSeriesLabelVisibilityField = Mr),
  (exports.ChartSeriesPointFields = Ar),
  (exports.ChartSeriesRightAxisField = Dr),
  (exports.ChartSeriesRoot = zr),
  (exports.ChartSeriesSection = Vr),
  (exports.ChartSeriesSelector = Tr),
  (exports.ChartSeriesTypeField = Er),
  (exports.ChartSnapshotQueue = us),
  (exports.ChartStackField = Kr),
  (exports.ChartStyleSection = Xr),
  (exports.ChartSubtitleFields = ai),
  (exports.ChartThemeField = Wr),
  (exports.ChartTitleFontSizeFields = si),
  (exports.ChartTitleKey = P),
  (exports.ChartTitlesSection = mi),
  (exports.ChartTrendlineSection = vi),
  (exports.ChartTypeField = Ur),
  (exports.ChartTypeSpecificDataSection = Ta),
  (exports.ChartTypeSpecificSetupSection = Ea),
  (exports.ChartTypeSpecificStyleSection = Ma),
  Object.defineProperty(exports, "ChartUIService", {
    enumerable: true,
    get: function () {
      return Wt;
    },
  }),
  (exports.ChartViewStateKey = Lt),
  (exports.ChartViewStateRegistry = Ht),
  (exports.ChartWaterfallSetupFields = Jr),
  (exports.ChartWaterfallStyleSection = Wa),
  (exports.ChartWordCloudMaskImageIdField = Qa),
  (exports.ChartWordCloudRepeatField = $a),
  (exports.ChartWordCloudRoot = qa),
  (exports.ChartWordCloudShapeField = Xa),
  (exports.ChartWordCloudStyleSection = eo),
  (exports.ColorPickerControl = Ze),
  (exports.DEFAULT_CHART_AXIS_VALUES = Dn),
  (exports.DEFAULT_CHART_FUNNEL_VALUES = yi),
  (exports.DEFAULT_CHART_HEATMAP_VALUES = xi),
  (exports.DEFAULT_CHART_INDICATOR_LINE_VALUES = Bn),
  (exports.DEFAULT_CHART_LEGEND_VALUES = Gn),
  (exports.DEFAULT_CHART_LINE_AND_AREA_VALUES = ar),
  (exports.DEFAULT_CHART_PARETO_VALUES = ur),
  (exports.DEFAULT_CHART_PIE_VALUES = Di),
  (exports.DEFAULT_CHART_RADAR_VALUES = ki),
  (exports.DEFAULT_CHART_RELATION_VALUES = ji),
  (exports.DEFAULT_CHART_SERIES_VALUES = hr),
  (exports.DEFAULT_CHART_STYLE_VALUES = Yr),
  (exports.DEFAULT_CHART_TITLE_VALUES = ti),
  (exports.DEFAULT_CHART_TRENDLINE_VALUES = gi),
  (exports.DEFAULT_CHART_WATERFALL_SETUP_VALUES = qr),
  (exports.DEFAULT_CHART_WATERFALL_STYLE_VALUES = Ha),
  (exports.DEFAULT_CHART_WORD_CLOUD_VALUES = Ja),
  (exports.DropdownSelector = Qe),
  (exports.FontAlignSelector = rt),
  (exports.FontColorSelector = tt),
  (exports.FontFormatBar = it),
  (exports.FontFormatToggle = nt),
  (exports.FontSizeSelector = et),
  (exports.IChartHostAdapter = cs),
  (exports.IChartUIService = Ut),
  (exports.InlineChartCreationIssueCode = ds),
  (exports.MIN_CHART_HOST_DIMENSION = 1),
  Object.defineProperty(exports, "UniverChartUIPlugin", {
    enumerable: true,
    get: function () {
      return ss;
    },
  }),
  (exports.appendInlineTableColumn = ve),
  (exports.appendInlineTableRow = _e),
  (exports.applyInlineTablePaste = Ce),
  (exports.buildChartThemeSelectOptions = Ue),
  (exports.buildChartTypeSelectOptions = Ve),
  (exports.chartBorderWidthValues = Ge),
  (exports.chartLinePointSizeValues = Ke),
  (exports.chartOpacityValues = We),
  (exports.chartTickLengthValues = qe),
  (exports.chartTickWidthValues = Je),
  (exports.chartTypeSupportsCapability = fn),
  (exports.chartTypeSupportsLineAndAreaStyle = pn),
  (exports.chartTypeSupportsPlotArea = mn),
  (exports.chartTypeToIcon = ze),
  (exports.coerceInlineTableCell = he),
  (exports.compactInlineTableValues = be),
  (exports.createChartElementFloatMenuAdapter = Wo),
  (exports.createChartInlineStarterData = T),
  (exports.createPercentOptions = Ye),
  (exports.createPxOptions = Xe),
  (exports.getChartInlineTableMinColumns = te),
  (exports.normalizeInlineTableValues = ge),
  (exports.resolveChartCreationIntent = ms),
  (exports.resolveChartEditPanelRoute = an),
  (exports.resolveChartElementConfigTarget = tn),
  (exports.resolveChartElementSelection = so),
  (exports.resolveChartTypeFieldValue = Yt),
  (exports.tryBuildInlineChartCreationPlan = gs),
  (exports.tryPrepareInlineChartData = hs),
  (exports.useChartEditorChartType = Kt),
  (exports.useChartEditorHasRightAxis = qt),
  (exports.useChartTypeFieldState = Xt),
  (exports.useChartTypeState = Jt));
