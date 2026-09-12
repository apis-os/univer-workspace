Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs/core"),
  n = require("@univerjs-pro/engine-shape"),
  r = require("@univerjs-pro/license");
const i = e.BOARD_MIND_MAP_MODE_ID,
  a = e.BOARD_MIND_MAP_CONTAINER_ROLE,
  o = e.BOARD_MIND_MAP_NODE_ROLE,
  s = e.BOARD_MIND_MAP_CONNECTOR_ROLE,
  c = e.BOARD_MIND_MAP_DECORATION_ROLE,
  l = {
    root: {
      fillColor: "#4f7bcf",
      strokeColor: "#4f7bcf",
      textColor: "#ffffff",
      fontSize: 24,
    },
    child: {
      fillColor: "#ffffff",
      strokeColor: "#4f7bcf",
      textColor: "#111827",
      fontSize: 18,
    },
    connector: { strokeColor: "#4f7bcf" },
    container: {
      fillColor: "rgba(255, 255, 255, 0)",
      strokeColor: "rgba(0, 0, 0, 0)",
    },
  },
  u = {
    root: { paddingX: 56, paddingY: 34 },
    child: { paddingX: 40, paddingY: 22 },
    lineHeightRatio: 1.35,
  },
  d = { left: 8, top: 8, right: 8, bottom: 8 },
  f = {
    direction: "both",
    structureKind: "mindmap-horizontal",
    branchLineType: "rounded-orthogonal",
    horizontalGap: 96,
    timelineAxisGap: 144,
    siblingGap: 24,
    branchGap: 40,
  },
  p = {
    horizontalGap: { min: 80, max: 320 },
    siblingGap: { min: 16, max: 120 },
    branchGap: { min: 24, max: 180 },
  },
  m = {
    rootWidth: 220,
    rootHeight: 72,
    nodeWidth: 160,
    nodeHeight: 48,
    containerPadding: 48,
  };
function h(_0x15025b, _0x5c2e32) {
  let _0x520124 = _0x15025b.transform,
    _0x4f351b = _0x520124.left ?? 0,
    _0x4b3155 = _0x520124.top ?? 0,
    _0x40d59b = _0x520124.width ?? 0,
    _0x269cbc = _0x520124.height ?? 0;
  return {
    x:
      _0x5c2e32 === "right"
        ? _0x4f351b + _0x40d59b
        : _0x5c2e32 === "left"
          ? _0x4f351b
          : _0x4f351b + _0x40d59b / 2,
    y:
      _0x5c2e32 === "bottom"
        ? _0x4b3155 + _0x269cbc
        : _0x5c2e32 === "top"
          ? _0x4b3155
          : _0x4b3155 + _0x269cbc / 2,
  };
}
function g(_0x27af5c, _0x4125f8, _0x490776) {
  return {
    kind: "shapeSite",
    shapeId: _0x27af5c,
    connectionSiteId:
      _0x4125f8 === "top"
        ? 0
        : _0x4125f8 === "right"
          ? 1
          : _0x4125f8 === "bottom"
            ? 2
            : 3,
    ...(_0x490776 ? { fallbackPoint: _0x490776 } : null),
  };
}
function _(_0x5e3c0d) {
  let _0x5da806 = _0x5e3c0d.parentNode["transform"].left ?? 0,
    _0x2ec6e0 = _0x5e3c0d.parentNode["transform"].width ?? 0,
    _0x14f09f = _0x5e3c0d.branchGap ?? f.branchGap;
  return _0x5e3c0d.side === "right"
    ? _0x5da806 + _0x2ec6e0 + _0x14f09f
    : _0x5da806 - _0x14f09f;
}
function v(_0x134e8b) {
  let _0x4fe818 = _0x134e8b.parentNode["transform"].top ?? 0,
    _0x285ab4 = _0x134e8b.parentNode["transform"].height ?? 0,
    _0x327c1b = _0x134e8b.branchGap ?? f.branchGap;
  return _0x134e8b.side === "bottom"
    ? _0x4fe818 + _0x285ab4 + _0x327c1b
    : _0x4fe818 - _0x327c1b;
}
function y(_0x5db8c3) {
  return _0x5db8c3 === "left"
    ? { startSide: "left", endSide: "right" }
    : _0x5db8c3 === "top"
      ? { startSide: "top", endSide: "bottom" }
      : _0x5db8c3 === "bottom"
        ? { startSide: "bottom", endSide: "top" }
        : { startSide: "right", endSide: "left" };
}
function b(_0x46b4b1) {
  let { startSide: _0x3f6737, endSide: _0x4d5187 } = y(_0x46b4b1.side),
    _0x5d50d1 = h(_0x46b4b1.parentNode, _0x3f6737),
    _0x417d4b = h(_0x46b4b1.childNode, _0x4d5187),
    _0x1733b9 = _(_0x46b4b1),
    _0x395a6f = v(_0x46b4b1),
    _0x2792e0 =
      _0x46b4b1.idPrefix ??
      _0x46b4b1.parentNode["id"] + "-" + _0x46b4b1.childNode["id"];
  return _0x46b4b1.side === "top" || _0x46b4b1.side === "bottom"
    ? _0x5d50d1.x === _0x417d4b.x && !_0x46b4b1.forceTrunk
      ? []
      : _0x5d50d1.x === _0x417d4b.x
        ? [
            {
              id: _0x2792e0 + "-route-0",
              kind: "manual",
              x: _0x5d50d1.x,
              y: _0x395a6f,
            },
          ]
        : [
            {
              id: _0x2792e0 + "-route-0",
              kind: "manual",
              x: _0x5d50d1.x,
              y: _0x395a6f,
            },
            {
              id: _0x2792e0 + "-route-1",
              kind: "manual",
              x: _0x417d4b.x,
              y: _0x395a6f,
            },
          ]
    : _0x5d50d1.y === _0x417d4b.y && !_0x46b4b1.forceTrunk
      ? []
      : _0x5d50d1.y === _0x417d4b.y
        ? [
            {
              id: _0x2792e0 + "-route-0",
              kind: "manual",
              x: _0x1733b9,
              y: _0x5d50d1.y,
            },
          ]
        : [
            {
              id: _0x2792e0 + "-route-0",
              kind: "manual",
              x: _0x1733b9,
              y: _0x5d50d1.y,
            },
            {
              id: _0x2792e0 + "-route-1",
              kind: "manual",
              x: _0x1733b9,
              y: _0x417d4b.y,
            },
          ];
}
function x(_0x4c7b22) {
  var _0x345633, _0x47bf04;
  let { startSide: _0x33c1e0, endSide: _0x555aa9 } = y(_0x4c7b22.side),
    _0x1aebfb = h(_0x4c7b22.parentNode, _0x33c1e0),
    _0x1b8dee = h(_0x4c7b22.childNode, _0x555aa9),
    _0xcf2e4b = [
      _0x1aebfb,
      ..._0x4c7b22.routePoints,
      ...(((_0x345633 = _0x4c7b22.curveData) == null
        ? undefined
        : _0x345633.controls) ?? []),
      ...(((_0x47bf04 = _0x4c7b22.curveData) == null
        ? undefined
        : _0x47bf04.anchors) ?? []),
      _0x1b8dee,
    ],
    _0x3b427f = Math.min(..._0xcf2e4b.map((_0x548e9e) => _0x548e9e.x)),
    _0x246aba = Math.min(..._0xcf2e4b.map((_0x40f73f) => _0x40f73f.y)),
    _0x3663bf = Math.max(..._0xcf2e4b.map((_0x3b63f6) => _0x3b63f6.x)),
    _0x4670c9 = Math.max(..._0xcf2e4b.map((_0x49dcc1) => _0x49dcc1.y));
  return {
    left: _0x3b427f,
    top: _0x246aba,
    width: Math.max(1, _0x3663bf - _0x3b427f),
    height: Math.max(1, _0x4670c9 - _0x246aba),
    rotation: 0,
  };
}
function S(_0x36f6e1) {
  let _0x129c21 = Math.min(..._0x36f6e1.map((_0x6191e2) => _0x6191e2.x)),
    _0x2c1a7e = Math.min(..._0x36f6e1.map((_0x10c660) => _0x10c660.y)),
    _0x7a0bd3 = Math.max(..._0x36f6e1.map((_0x23c64c) => _0x23c64c.x)),
    _0x480290 = Math.max(..._0x36f6e1.map((_0x581cba) => _0x581cba.y));
  return {
    left: _0x129c21,
    top: _0x2c1a7e,
    width: Math.max(1, _0x7a0bd3 - _0x129c21),
    height: Math.max(1, _0x480290 - _0x2c1a7e),
    rotation: 0,
  };
}
function C(_0x2e65d7) {
  return _0x2e65d7 ?? f.branchLineType;
}
function w(_0x3a7172) {
  let { startSide: _0x57fbc8, endSide: _0x28777b } = y(_0x3a7172.side),
    _0x5ba809 = h(_0x3a7172.parentNode, _0x57fbc8),
    _0x521d60 = h(_0x3a7172.childNode, _0x28777b),
    _0x15e92a = _0x3a7172.side === "left" || _0x3a7172.side === "right",
    _0x3a928e = Math.abs(
      _0x15e92a ? _0x521d60.x - _0x5ba809.x : _0x521d60.y - _0x5ba809.y,
    ),
    _0xb9a203 = Math.max(40, Math.min(72, _0x3a928e * 0.24)),
    _0x719998 = Math.max(48, Math.min(96, _0x3a928e * 0.35)),
    _0xb73a67 = _0x15e92a
      ? {
          x:
            _0x5ba809.x + (_0x3a7172.side === "right" ? _0xb9a203 : -_0xb9a203),
          y: _0x5ba809.y + (_0x521d60.y - _0x5ba809.y) * 0.55,
        }
      : {
          x: _0x5ba809.x + (_0x521d60.x - _0x5ba809.x) * 0.55,
          y:
            _0x5ba809.y +
            (_0x3a7172.side === "bottom" ? _0xb9a203 : -_0xb9a203),
        },
    _0x1fbd5a = _0x15e92a
      ? {
          x:
            _0x521d60.x + (_0x3a7172.side === "right" ? -_0x719998 : _0x719998),
          y: _0x521d60.y,
        }
      : {
          x: _0x521d60.x,
          y:
            _0x521d60.y +
            (_0x3a7172.side === "bottom" ? -_0x719998 : _0x719998),
        };
  return {
    controls: [
      {
        id: _0x3a7172.idPrefix + "-curve-control-0",
        segmentIndex: 0,
        kind: "manual",
        ..._0xb73a67,
      },
      {
        id: _0x3a7172.idPrefix + "-curve-control-1",
        segmentIndex: 0,
        kind: "manual",
        ..._0x1fbd5a,
      },
    ],
    tension: 0.5,
  };
}
function T(_0x58f90b) {
  let _0x4e47da = _0x58f90b.side === "left" ? "left" : "right",
    _0x98e025 = "bottom",
    _0x280a13 = _0x4e47da === "left" ? "right" : "left",
    _0xa14286 = h(_0x58f90b.parentNode, _0x98e025),
    _0x288265 = h(_0x58f90b.childNode, _0x280a13),
    _0x2b22c3 = C(_0x58f90b.branchLineType),
    _0x152efa = [
      {
        id: _0x58f90b.idPrefix + "-route-0",
        kind: "manual",
        x: _0xa14286.x,
        y: _0x288265.y,
      },
    ],
    _0x215b98 =
      _0x2b22c3 === "curve"
        ? (() => {
            let _0x897f4f = Math.max(
                48,
                Math.abs(_0x288265.y - _0xa14286.y) / 2,
              ),
              _0x14aea8 = Math.max(48, Math.abs(_0x288265.x - _0xa14286.x) / 2);
            return {
              controls: [
                {
                  id: _0x58f90b.idPrefix + "-curve-control-0",
                  segmentIndex: 0,
                  kind: "manual",
                  x: _0xa14286.x,
                  y: _0xa14286.y + _0x897f4f,
                },
                {
                  id: _0x58f90b.idPrefix + "-curve-control-1",
                  segmentIndex: 0,
                  kind: "manual",
                  x:
                    _0x288265.x +
                    (_0x4e47da === "left" ? _0x14aea8 : -_0x14aea8),
                  y: _0x288265.y,
                },
              ],
              tension: 0.5,
            };
          })()
        : undefined;
  return {
    startSide: _0x98e025,
    endSide: _0x280a13,
    startPoint: _0xa14286,
    endPoint: _0x288265,
    routePoints: _0x152efa,
    curveData: _0x215b98,
    transform: S(
      _0x2b22c3 === "curve"
        ? [
            _0xa14286,
            ...((_0x215b98 == null ? undefined : _0x215b98.controls) ?? []),
            _0x288265,
          ]
        : [_0xa14286, ..._0x152efa, _0x288265],
    ),
  };
}
function E(_0x2d84ca) {
  let _0x21a0f7 = _0x2d84ca.structureKind === "timeline-horizontal",
    _0x5927af = _0x2d84ca.childSide === "right" ? "right" : "left",
    _0x569316 = _0x21a0f7 ? "right" : "bottom",
    _0x45d186 = _0x21a0f7 ? "left" : _0x5927af === "left" ? "right" : "left",
    _0x4ebcd0 =
      (_0x2d84ca.parentNode["transform"].left ?? 0) +
      (_0x2d84ca.parentNode["transform"].width ?? 0) / 2,
    _0x97074d = _0x2d84ca.previousAxisNode
      ? _0x21a0f7
        ? h(_0x2d84ca.previousAxisNode, _0x569316)
        : {
            x: _0x4ebcd0,
            y:
              (_0x2d84ca.previousAxisNode["transform"].top ?? 0) +
              (_0x2d84ca.previousAxisNode["transform"].height ?? 0) / 2,
          }
      : h(_0x2d84ca.parentNode, _0x569316),
    _0x2e358b = h(_0x2d84ca.childNode, _0x45d186),
    _0xcdea2a = _0x2d84ca.previousAxisNode
      ? { kind: "free", ..._0x97074d }
      : undefined,
    _0x11d0b9 = C(_0x2d84ca.branchLineType),
    _0x47de1d = _0x21a0f7
      ? []
      : [
          {
            id: _0x2d84ca.idPrefix + "-route-0",
            kind: "manual",
            x: _0x4ebcd0,
            y: _0x2e358b.y,
          },
        ],
    _0x336092 =
      _0x11d0b9 === "curve"
        ? (() => {
            let _0x3b424b = Math.max(
              48,
              Math.abs(
                _0x21a0f7
                  ? _0x2e358b.x - _0x97074d.x
                  : _0x2e358b.y - _0x97074d.y,
              ) / 2,
            );
            return {
              controls: [
                {
                  id: _0x2d84ca.idPrefix + "-curve-control-0",
                  segmentIndex: 0,
                  kind: "manual",
                  x: _0x21a0f7 ? _0x97074d.x + _0x3b424b : _0x97074d.x,
                  y: _0x21a0f7 ? _0x97074d.y : _0x97074d.y + _0x3b424b,
                },
                {
                  id: _0x2d84ca.idPrefix + "-curve-control-1",
                  segmentIndex: 0,
                  kind: "manual",
                  x: _0x21a0f7 ? _0x2e358b.x - _0x3b424b : _0x2e358b.x,
                  y: _0x21a0f7 ? _0x2e358b.y : _0x2e358b.y - _0x3b424b,
                },
              ],
              tension: 0.5,
            };
          })()
        : undefined;
  return {
    startSide: _0x569316,
    endSide: _0x45d186,
    startPoint: _0x97074d,
    endPoint: _0x2e358b,
    startEndpoint: _0xcdea2a,
    routePoints: _0x47de1d,
    curveData: _0x336092,
    transform: S([
      _0x97074d,
      ...((_0x336092 == null ? undefined : _0x336092.controls) ?? []),
      _0x2e358b,
    ]),
  };
}
function ee(_0x5471dc) {
  if (!_0x5471dc.parentIsAxisNode) {
    let _0x3340da = "right",
      _0x4f461b = "left",
      _0x1a1a3a = h(_0x5471dc.parentNode, _0x3340da),
      _0x1ff402 = h(_0x5471dc.childNode, _0x4f461b),
      _0x5c0b5e = b({
        idPrefix: _0x5471dc.idPrefix,
        parentNode: _0x5471dc.parentNode,
        childNode: _0x5471dc.childNode,
        side: "right",
      }),
      _0x599cc3 =
        C(_0x5471dc.branchLineType) === "curve"
          ? w({
              idPrefix: _0x5471dc.idPrefix,
              parentNode: _0x5471dc.parentNode,
              childNode: _0x5471dc.childNode,
              side: "right",
            })
          : undefined;
    return {
      startSide: _0x3340da,
      endSide: _0x4f461b,
      startPoint: _0x1a1a3a,
      endPoint: _0x1ff402,
      routePoints: _0x5c0b5e,
      curveData: _0x599cc3,
      transform: S([
        _0x1a1a3a,
        ..._0x5c0b5e,
        ...((_0x599cc3 == null ? undefined : _0x599cc3.controls) ?? []),
        _0x1ff402,
      ]),
    };
  }
  let _0x16facc = "left",
    _0x309128 = {
      x:
        (_0x5471dc.parentNode["transform"].left ?? 0) +
        (_0x5471dc.parentNode["transform"].width ?? 0) / 2,
      y:
        (_0x5471dc.parentNode["transform"].top ?? 0) +
        (_0x5471dc.parentNode["transform"].height ?? 0) / 2,
    },
    _0x1cb63d = h(_0x5471dc.childNode, _0x16facc),
    _0x59b1f2 =
      _0x309128.y === _0x1cb63d.y
        ? []
        : [
            {
              id: _0x5471dc.idPrefix + "-route-0",
              kind: "manual",
              x: _0x309128.x,
              y: _0x1cb63d.y,
            },
          ],
    _0x37ed0e =
      C(_0x5471dc.branchLineType) === "curve"
        ? {
            controls: [
              {
                id: _0x5471dc.idPrefix + "-curve-control-0",
                segmentIndex: 0,
                kind: "manual",
                x: _0x309128.x,
                y: _0x309128.y + (_0x1cb63d.y - _0x309128.y) / 2,
              },
              {
                id: _0x5471dc.idPrefix + "-curve-control-1",
                segmentIndex: 0,
                kind: "manual",
                x:
                  _0x1cb63d.x -
                  Math.max(48, Math.abs(_0x1cb63d.x - _0x309128.x) / 2),
                y: _0x1cb63d.y,
              },
            ],
            tension: 0.5,
          }
        : undefined;
  return {
    startSide: "left",
    endSide: _0x16facc,
    startPoint: _0x309128,
    endPoint: _0x1cb63d,
    startEndpoint: { kind: "free", ..._0x309128 },
    routePoints: _0x59b1f2,
    curveData: _0x37ed0e,
    transform: S([
      _0x309128,
      ..._0x59b1f2,
      ...((_0x37ed0e == null ? undefined : _0x37ed0e.controls) ?? []),
      _0x1cb63d,
    ]),
  };
}
function te(_0x29c785) {
  let _0x4f23ab = _0x29c785.side === "left" ? "left" : "right";
  if (!_0x29c785.parentIsAxisNode) {
    let { startSide: _0x18e748, endSide: _0x57f4bb } = y(_0x4f23ab),
      _0xbf2001 = h(_0x29c785.parentNode, _0x18e748),
      _0x42924b = h(_0x29c785.childNode, _0x57f4bb),
      _0xdfc1e0 = b({
        idPrefix: _0x29c785.idPrefix,
        parentNode: _0x29c785.parentNode,
        childNode: _0x29c785.childNode,
        side: _0x4f23ab,
      }),
      _0x1b14e2 =
        C(_0x29c785.branchLineType) === "curve"
          ? w({
              idPrefix: _0x29c785.idPrefix,
              parentNode: _0x29c785.parentNode,
              childNode: _0x29c785.childNode,
              side: _0x4f23ab,
            })
          : undefined;
    return {
      startSide: _0x18e748,
      endSide: _0x57f4bb,
      startPoint: _0xbf2001,
      endPoint: _0x42924b,
      routePoints: _0xdfc1e0,
      curveData: _0x1b14e2,
      transform: S([
        _0xbf2001,
        ..._0xdfc1e0,
        ...((_0x1b14e2 == null ? undefined : _0x1b14e2.controls) ?? []),
        _0x42924b,
      ]),
    };
  }
  let { startSide: _0x45626c, endSide: _0x3a3a23 } = y(_0x4f23ab),
    _0x1606a3 = h(_0x29c785.parentNode, _0x45626c),
    _0x40fa63 = h(_0x29c785.childNode, _0x3a3a23),
    _0x2d65cc = b({
      idPrefix: _0x29c785.idPrefix,
      parentNode: _0x29c785.parentNode,
      childNode: _0x29c785.childNode,
      side: _0x4f23ab,
      forceTrunk: _0x29c785.forceTrunk,
    }),
    _0x27d89a =
      C(_0x29c785.branchLineType) === "curve"
        ? w({
            idPrefix: _0x29c785.idPrefix,
            parentNode: _0x29c785.parentNode,
            childNode: _0x29c785.childNode,
            side: _0x4f23ab,
          })
        : undefined;
  return {
    startSide: _0x45626c,
    endSide: _0x3a3a23,
    startPoint: _0x1606a3,
    endPoint: _0x40fa63,
    routePoints: _0x2d65cc,
    curveData: _0x27d89a,
    transform: S([
      _0x1606a3,
      ..._0x2d65cc,
      ...((_0x27d89a == null ? undefined : _0x27d89a.controls) ?? []),
      _0x40fa63,
    ]),
  };
}
function ne(_0x2403d4) {
  var _0x2efb1b;
  let _0x106993 = _0x2403d4.custom;
  return (_0x106993 == null || (_0x2efb1b = _0x106993.structured) == null
    ? undefined
    : _0x2efb1b.modeId) === i && _0x106993.structured["semanticRole"] === o
    ? (_0x106993.mindmap ?? null)
    : null;
}
const re = 1 / 0;
function ie(_0x4fa2da) {
  return /[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/u.test(_0x4fa2da);
}
function ae(_0x1369bd, _0x44beed, _0x8ef5e0) {
  let _0x225235 = 0,
    _0x34fa4f = _0x8ef5e0 ? 1.08 : 1;
  return (
    Array.from(_0x1369bd).forEach((_0x485426) => {
      _0x485426 === "\x20" || _0x485426 === "\x09" || _0x485426 === "\u00a0"
        ? (_0x225235 += _0x44beed * 0.32)
        : ie(_0x485426)
          ? (_0x225235 += _0x44beed)
          : /[\.,:;'"`!|ilI\[\]\(\)]/u.test(_0x485426)
            ? (_0x225235 += _0x44beed * 0.42)
            : (_0x225235 += _0x44beed * 0.72);
    }),
    _0x225235 * _0x34fa4f
  );
}
function oe(_0x4ede54) {
  let _0x10dac6 = _0x4ede54.replace(/\r\n/g, "\x0a").replace(/\r/g, "\x0a");
  return _0x10dac6.length ? _0x10dac6.split("\x0a") : [""];
}
function se(_0x24cb21, _0x884661) {
  return Number.isFinite(_0x24cb21) && _0x24cb21 > 0 ? _0x24cb21 : _0x884661;
}
function ce(_0x436827) {
  var _0x5e5faa, _0x189ab7;
  let _0x1217f7 = !(_0x436827 != null && _0x436827.parentNodeId);
  return {
    minWidth:
      (_0x436827 == null || (_0x5e5faa = _0x436827.size) == null
        ? undefined
        : _0x5e5faa.minWidth) ?? (_0x1217f7 ? m.rootWidth : m.nodeWidth),
    minHeight:
      (_0x436827 == null || (_0x189ab7 = _0x436827.size) == null
        ? undefined
        : _0x189ab7.minHeight) ?? (_0x1217f7 ? m.rootHeight : m.nodeHeight),
  };
}
function le(_0x2234fd) {
  let _0x1581fa = oe(_0x2234fd.text),
    _0x134fbb = Math.max(
      0,
      ..._0x1581fa.map((_0x536373) =>
        ae(_0x536373, _0x2234fd.fontSize, _0x2234fd.bold),
      ),
    ),
    _0x5780a4 = _0x2234fd.fontSize * u.lineHeightRatio,
    _0x40e814 = _0x2234fd.minWidth >= m.rootWidth ? u.root : u.child,
    _0x270bc8 = _0x40e814.paddingX,
    _0x164702 = _0x40e814.paddingY,
    _0x48d968 = se(_0x2234fd.maxWidth ?? re, re),
    _0x453d32 = se(_0x2234fd.maxHeight ?? 1 / 0, 1 / 0);
  return {
    width: Math.ceil(
      Math.min(_0x48d968, Math.max(_0x2234fd.minWidth, _0x134fbb + _0x270bc8)),
    ),
    height: Math.ceil(
      Math.min(
        _0x453d32,
        Math.max(_0x2234fd.minHeight, _0x1581fa.length * _0x5780a4 + _0x164702),
      ),
    ),
  };
}
function ue(_0x292776) {
  var _0x43e4e1, _0x5c1cf2;
  if (typeof _0x292776.text == "string") return _0x292776.text;
  let _0x4aa1a9 =
      (_0x43e4e1 = _0x292776.dataModel) == null ? undefined : _0x43e4e1.doc,
    _0x477fc9 =
      _0x4aa1a9 == null || (_0x5c1cf2 = _0x4aa1a9.body) == null
        ? undefined
        : _0x5c1cf2.dataStream;
  return typeof _0x477fc9 == "string"
    ? _0x477fc9.replace(/\r\n$/u, "").replace(/\n$/u, "").replace(/\r$/u, "")
    : "";
}
function D(_0x5807b6) {
  var _0x3ed4d9, _0x9f8fc, _0x1e3425;
  let _0xcf9fc3 =
      (_0x3ed4d9 = _0x5807b6.custom) == null ? undefined : _0x3ed4d9.mindmap,
    _0x564125 = _0x5807b6.shapeData["shapeText"] ?? {},
    _0x34c80f = !(_0xcf9fc3 != null && _0xcf9fc3.parentNodeId),
    { minHeight: _0x4cb87a, minWidth: _0x2775e5 } = ce(_0xcf9fc3),
    _0x1ab5c1 =
      typeof _0x564125.fontSize == "number"
        ? _0x564125.fontSize
        : _0x34c80f
          ? l.root["fontSize"]
          : l.child["fontSize"];
  return le({
    bold: _0x564125.bold === true,
    fontSize: _0x1ab5c1,
    maxHeight:
      _0xcf9fc3 == null || (_0x9f8fc = _0xcf9fc3.size) == null
        ? undefined
        : _0x9f8fc.maxHeight,
    maxWidth:
      _0xcf9fc3 == null || (_0x1e3425 = _0xcf9fc3.size) == null
        ? undefined
        : _0x1e3425.maxWidth,
    minHeight: _0x4cb87a,
    minWidth: _0x2775e5,
    text: ue(_0x564125),
  });
}
function de(_0x1d2626, _0x34ba53) {
  if (_0x1d2626.element["type"] !== e.BoardElementType["Shape"]) return null;
  let _0x29ffd9 = ne(_0x1d2626.element);
  if (!_0x29ffd9) return null;
  let { minHeight: _0x56aba6, minWidth: _0x543be8 } = ce(_0x29ffd9);
  return {
    width: Math.max(_0x543be8, Math.ceil(_0x34ba53.width)),
    height: Math.max(_0x56aba6, Math.ceil(_0x34ba53.height)),
  };
}
const fe = (0, t.createInternalEditorID)("BOARD_SHAPE_TEXT");
function pe(_0x2285ee, _0x3d6ca2) {
  return (0, e.shapeTextToBoardDocumentTextStyle)({
    ..._0x2285ee,
    ...((_0x3d6ca2 == null ? undefined : _0x3d6ca2.fontFamily) === undefined
      ? null
      : { fontFamily: _0x3d6ca2.fontFamily }),
    ...((_0x3d6ca2 == null ? undefined : _0x3d6ca2.fontSize) === undefined
      ? null
      : { fontSize: _0x3d6ca2.fontSize }),
    ...((_0x3d6ca2 == null ? undefined : _0x3d6ca2.color) === undefined
      ? null
      : { color: _0x3d6ca2.color }),
    ...((_0x3d6ca2 == null ? undefined : _0x3d6ca2.bold) === undefined
      ? null
      : { bold: _0x3d6ca2.bold }),
    ...((_0x3d6ca2 == null ? undefined : _0x3d6ca2.italic) === undefined
      ? null
      : { italic: _0x3d6ca2.italic }),
    ...((_0x3d6ca2 == null ? undefined : _0x3d6ca2.underline) === undefined
      ? null
      : { underline: _0x3d6ca2.underline }),
    ...((_0x3d6ca2 == null ? undefined : _0x3d6ca2.strikethrough) === undefined
      ? null
      : { strikethrough: _0x3d6ca2.strikethrough }),
    ...((_0x3d6ca2 == null ? undefined : _0x3d6ca2.textFill) === undefined
      ? null
      : { textFill: _0x3d6ca2.textFill }),
  });
}
function me(_0x2d94d0) {
  let _0x363434 = (0, e.createBoardTextBoxShapeTextData)({
      bold:
        typeof _0x2d94d0.shapeText["bold"] == "boolean"
          ? _0x2d94d0.shapeText["bold"]
          : undefined,
      color:
        typeof _0x2d94d0.shapeText["color"] == "string"
          ? _0x2d94d0.shapeText["color"]
          : undefined,
      fontFamily:
        typeof _0x2d94d0.shapeText["fontFamily"] == "string"
          ? _0x2d94d0.shapeText["fontFamily"]
          : undefined,
      fontSize:
        typeof _0x2d94d0.shapeText["fontSize"] == "number"
          ? _0x2d94d0.shapeText["fontSize"]
          : undefined,
      horizontal: true,
      horizontalAlign: _0x2d94d0.horizontalAlign,
      id: fe,
      italic:
        typeof _0x2d94d0.shapeText["italic"] == "boolean"
          ? _0x2d94d0.shapeText["italic"]
          : undefined,
      strikethrough:
        typeof _0x2d94d0.shapeText["strikethrough"] == "boolean"
          ? _0x2d94d0.shapeText["strikethrough"]
          : undefined,
      text: _0x2d94d0.text,
      textFill: _0x2d94d0.shapeText["textFill"],
      textStyle: _0x2d94d0.textStyle,
      underline:
        typeof _0x2d94d0.shapeText["underline"] == "boolean"
          ? _0x2d94d0.shapeText["underline"]
          : undefined,
      verticalAlign: _0x2d94d0.verticalAlign,
      wrapStrategy: t.WrapStrategy["CLIP"],
    }),
    _0x10a1d2 =
      _0x363434.dataModel && typeof _0x363434.dataModel == "object"
        ? _0x363434.dataModel
        : {},
    _0x1541bb = _0x10a1d2.doc,
    _0x1f0f08 = _0x2d94d0.documentData
      ? (0, e.mergeBoardRichTextDocument)(_0x1541bb, _0x2d94d0.documentData)
      : _0x1541bb;
  return {
    ..._0x2d94d0.shapeText,
    ..._0x363434,
    isRichText: !!_0x2d94d0.documentData,
    dataModel: {
      ...(_0x2d94d0.currentDataModel ?? {}),
      ..._0x10a1d2,
      ...(_0x1f0f08 ? { doc: _0x1f0f08 } : null),
    },
  };
}
const he = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function O(_0x5dc61b, _0x17a73c) {
  let _0x4e0367 = _0x5dc61b ?? "",
    _0x2b5069 = _0x17a73c ?? "",
    _0x398677 = Math.max(_0x4e0367.length, _0x2b5069.length);
  for (let _0x5c0037 = 0; _0x5c0037 < _0x398677; _0x5c0037 += 1) {
    if (_0x5c0037 >= _0x4e0367.length) return -1;
    if (_0x5c0037 >= _0x2b5069.length) return 1;
    let _0x30bc0a = j(_0x4e0367[_0x5c0037]),
      _0x18674b = j(_0x2b5069[_0x5c0037]);
    if (_0x30bc0a < 0 || _0x18674b < 0)
      return _0x4e0367.localeCompare(_0x2b5069);
    if (_0x30bc0a !== _0x18674b) return _0x30bc0a - _0x18674b;
  }
  return 0;
}
function k(_0x54c390, _0x3a736b) {
  let _0x201365 = ge(_0x54c390),
    _0x5dc79d = ge(_0x3a736b),
    _0x25e493 = "";
  for (let _0x2966f8 = 0; ; _0x2966f8 += 1) {
    let _0x31712c = _0x2966f8 < _0x201365.length ? j(_0x201365[_0x2966f8]) : 0,
      _0x566682 = _0x2966f8 < _0x5dc79d.length ? j(_0x5dc79d[_0x2966f8]) : 61;
    if (_0x31712c < 0 || _0x566682 < 0) return k(undefined, undefined);
    if (_0x566682 - _0x31712c > 1)
      return "" + _0x25e493 + he[Math.floor((_0x31712c + _0x566682) / 2)];
    _0x25e493 += he[_0x31712c];
  }
}
function A(_0xeb97e9) {
  let _0x30cca2;
  for (let _0x2282ab = 0; _0x2282ab <= _0xeb97e9; _0x2282ab += 1)
    _0x30cca2 = k(_0x30cca2, undefined);
  return _0x30cca2 ?? k(undefined, undefined);
}
function ge(_0x103a1e) {
  return [...(_0x103a1e ?? "")].every((_0x4e755c) => j(_0x4e755c) >= 0)
    ? (_0x103a1e ?? "")
    : "";
}
function j(_0x572528) {
  return _0x572528 === undefined ? -1 : he.indexOf(_0x572528);
}
function M(_0x36a982) {
  return (
    _0x36a982 === "tree-right" ||
    _0x36a982 === "tree-left" ||
    _0x36a982 === "tree-alternate"
  );
}
function N(_0x33d446) {
  return (
    _0x33d446 === "timeline-horizontal" || _0x33d446 === "timeline-vertical"
  );
}
function _e(_0x57a90c) {
  return _0x57a90c === "mindmap-horizontal" || _0x57a90c === "mindmap-vertical";
}
function P(_0x163811, _0x18d423) {
  let _0x3ec895 = _0x18d423 ?? f.branchLineType;
  return _0x3ec895 === "curve" && !_e(_0x163811 ?? f.structureKind)
    ? f.branchLineType
    : _0x3ec895;
}
function F(_0x195c8b, _0x11494a) {
  return _0x195c8b.children["filter"](
    (_0x387b6a) =>
      (_0x387b6a.side ?? (_0x195c8b.parentId ? _0x11494a : "right")) ===
      _0x11494a,
  );
}
function ve(_0x1cdfe7) {
  return _0x1cdfe7.children;
}
function ye(_0x41fbe9, _0x2bddbb, _0x1763b6) {
  if (_0x41fbe9.collapsed) return _0x41fbe9.height;
  let _0xc6ee1c = F(_0x41fbe9, _0x2bddbb);
  if (!_0xc6ee1c.length) return _0x41fbe9.height;
  let _0x298070 = _0xc6ee1c.map((_0x3d4205) =>
    ye(_0x3d4205, _0x2bddbb, _0x1763b6),
  );
  return Math.max(
    _0x41fbe9.height,
    _0x298070.reduce((_0x5c886e, _0x3bb1bc) => _0x5c886e + _0x3bb1bc, 0) +
      Math.max(0, _0x298070.length - 1) * _0x1763b6,
  );
}
function be(_0x25005f, _0x54ad62, _0x1858bd, _0x2302ff, _0x59c38d, _0x4edba4) {
  if (
    (_0x59c38d.set(_0x25005f.id, {
      left: _0x1858bd,
      top: _0x2302ff - _0x25005f.height / 2,
    }),
    _0x25005f.collapsed)
  )
    return;
  let _0x1f1c1a = F(_0x25005f, _0x54ad62);
  if (!_0x1f1c1a.length) return;
  let _0x3b123f = _0x1f1c1a.map((_0x1e9c5d) =>
      ye(_0x1e9c5d, _0x54ad62, _0x4edba4.siblingGap),
    ),
    _0x4e937d =
      _0x2302ff -
      (_0x3b123f.reduce((_0x47531d, _0x543fa6) => _0x47531d + _0x543fa6, 0) +
        Math.max(0, _0x3b123f.length - 1) * _0x4edba4.siblingGap) /
        2;
  _0x1f1c1a.forEach((_0x68f9a0, _0x1a83ee) => {
    let _0x3de1da =
        _0x54ad62 === "right"
          ? _0x1858bd + _0x25005f.width + _0x4edba4.horizontalGap
          : _0x1858bd - _0x4edba4.horizontalGap - _0x68f9a0.width,
      _0xba0244 = _0x3b123f[_0x1a83ee];
    (be(
      _0x68f9a0,
      _0x54ad62,
      _0x3de1da,
      _0x4e937d + _0xba0244 / 2,
      _0x59c38d,
      _0x4edba4,
    ),
      (_0x4e937d += _0xba0244 + _0x4edba4.siblingGap));
  });
}
function xe(_0x24bad2, _0x2b9d81, _0xa0476e) {
  if (_0x24bad2.collapsed) return _0x24bad2.width;
  let _0x4ba3a5 = F(_0x24bad2, _0x2b9d81);
  if (!_0x4ba3a5.length) return _0x24bad2.width;
  let _0xb4de27 = _0x4ba3a5.map((_0x4bb731) =>
    xe(_0x4bb731, _0x2b9d81, _0xa0476e),
  );
  return Math.max(
    _0x24bad2.width,
    _0xb4de27.reduce((_0x23fc36, _0x27ce4c) => _0x23fc36 + _0x27ce4c, 0) +
      Math.max(0, _0xb4de27.length - 1) * _0xa0476e,
  );
}
function Se(_0x201458, _0x2d5087, _0x4944b0, _0x1e5d70, _0x703fe0, _0x36f46b) {
  if (
    (_0x703fe0.set(_0x201458.id, {
      left: _0x4944b0 - _0x201458.width / 2,
      top: _0x1e5d70,
    }),
    _0x201458.collapsed)
  )
    return;
  let _0x455606 = F(_0x201458, _0x2d5087);
  if (!_0x455606.length) return;
  let _0x317f54 = _0x455606.map((_0x3d4ecb) =>
      xe(_0x3d4ecb, _0x2d5087, _0x36f46b.siblingGap),
    ),
    _0x4f2542 =
      _0x4944b0 -
      (_0x317f54.reduce((_0x430713, _0x371bf3) => _0x430713 + _0x371bf3, 0) +
        Math.max(0, _0x317f54.length - 1) * _0x36f46b.siblingGap) /
        2,
    _0x189e8b =
      _0x2d5087 === "bottom"
        ? _0x1e5d70 + _0x201458.height + _0x36f46b.horizontalGap
        : _0x1e5d70 - _0x36f46b.horizontalGap;
  _0x455606.forEach((_0x4099f1, _0x3c2980) => {
    let _0x17686b = _0x317f54[_0x3c2980],
      _0x1f0a31 =
        _0x2d5087 === "bottom" ? _0x189e8b : _0x189e8b - _0x4099f1.height;
    (Se(
      _0x4099f1,
      _0x2d5087,
      _0x4f2542 + _0x17686b / 2,
      _0x1f0a31,
      _0x703fe0,
      _0x36f46b,
    ),
      (_0x4f2542 += _0x17686b + _0x36f46b.siblingGap));
  });
}
function Ce(_0x575667, _0x18b104) {
  if (_0x575667.collapsed || !_0x575667.children["length"])
    return _0x575667.height;
  let _0x1ba91a = _0x575667.children["map"]((_0x4d6811) =>
    Ce(_0x4d6811, _0x18b104),
  );
  return Math.max(
    _0x575667.height,
    _0x1ba91a.reduce((_0x2def51, _0x5423cb) => _0x2def51 + _0x5423cb, 0) +
      Math.max(0, _0x1ba91a.length - 1) * _0x18b104.siblingGap,
  );
}
function we(_0x5eaae9, _0x435d73, _0x41fb17, _0x3130ca, _0x14995b) {
  if (
    (_0x3130ca.set(_0x5eaae9.id, {
      left: _0x435d73,
      top: _0x41fb17 - _0x5eaae9.height / 2,
    }),
    _0x5eaae9.collapsed || !_0x5eaae9.children["length"])
  )
    return;
  let _0x2b9625 = _0x5eaae9.children["map"]((_0x2eeec2) =>
      Ce(_0x2eeec2, _0x14995b),
    ),
    _0x1e418c =
      _0x41fb17 -
      (_0x2b9625.reduce((_0x4db668, _0x1ec815) => _0x4db668 + _0x1ec815, 0) +
        Math.max(0, _0x2b9625.length - 1) * _0x14995b.siblingGap) /
        2,
    _0x23dd2d = _0x435d73 + _0x5eaae9.width + _0x14995b.horizontalGap;
  _0x5eaae9.children["forEach"]((_0x294250, _0x491617) => {
    let _0x31f5a6 = _0x2b9625[_0x491617];
    (we(_0x294250, _0x23dd2d, _0x1e418c + _0x31f5a6 / 2, _0x3130ca, _0x14995b),
      (_0x1e418c += _0x31f5a6 + _0x14995b.siblingGap));
  });
}
function Te(_0xfa1b14, _0x6c5e4b, _0x6bedfa, _0x387d81, _0x52fa21, _0x21adb9) {
  if (_0xfa1b14.collapsed || !_0xfa1b14.children["length"]) return;
  let _0x280b4b = _0xfa1b14.children["map"]((_0x3144c6) =>
      Ce(_0x3144c6, _0x21adb9),
    ),
    _0x3152e1 =
      _0x280b4b.reduce((_0x8e6dfc, _0x593dba) => _0x8e6dfc + _0x593dba, 0) +
      Math.max(0, _0x280b4b.length - 1) * _0x21adb9.siblingGap,
    _0x92342c =
      _0x6c5e4b === "top"
        ? _0x387d81 - _0x21adb9.horizontalGap - _0x3152e1
        : _0x387d81 + _0xfa1b14.height + _0x21adb9.horizontalGap,
    _0x36ae9e = _0x6bedfa + _0xfa1b14.width + f.branchGap;
  _0xfa1b14.children["forEach"]((_0x41df66, _0x8c0c19) => {
    let _0x21f6fb = _0x280b4b[_0x8c0c19];
    (we(_0x41df66, _0x36ae9e, _0x92342c + _0x21f6fb / 2, _0x52fa21, _0x21adb9),
      (_0x92342c += _0x21f6fb + _0x21adb9.siblingGap));
  });
}
function Ee(_0x174cab, _0x25584a, _0x18939a) {
  let _0x380fb6 = new Map(),
    _0x16ef0f = _0x25584a.rootLeft + _0x174cab.width / 2;
  return (
    _0x380fb6.set(_0x174cab.id, {
      left: _0x25584a.rootLeft,
      top: _0x25584a.rootTop,
    }),
    ["top", "bottom"].forEach((_0x24a203) => {
      let _0x118303 = F(_0x174cab, _0x24a203);
      if (!_0x118303.length) return;
      let _0x2f7915 = _0x118303.map((_0x329c33) =>
          xe(_0x329c33, _0x24a203, _0x18939a.siblingGap),
        ),
        _0xc9798c =
          _0x2f7915.reduce((_0x2e9808, _0x444db2) => _0x2e9808 + _0x444db2, 0) +
          Math.max(0, _0x2f7915.length - 1) * _0x18939a.siblingGap,
        _0x9b3a6b = _0x16ef0f - _0xc9798c / 2,
        _0x42284c =
          _0x24a203 === "bottom"
            ? _0x25584a.rootTop + _0x174cab.height + _0x18939a.horizontalGap
            : _0x25584a.rootTop - _0x18939a.horizontalGap;
      _0x118303.forEach((_0x2495a2, _0x5bd666) => {
        let _0x43de55 = _0x2f7915[_0x5bd666],
          _0x57af12 =
            _0x24a203 === "bottom" ? _0x42284c : _0x42284c - _0x2495a2.height;
        (Se(
          _0x2495a2,
          _0x24a203,
          _0x9b3a6b + _0x43de55 / 2,
          _0x57af12,
          _0x380fb6,
          _0x18939a,
        ),
          (_0x9b3a6b += _0x43de55 + _0x18939a.siblingGap));
      });
    }),
    _0x380fb6
  );
}
function De(_0x17bb69, _0x109dad, _0x4cc7f2, _0x219873, _0x21ec5e, _0x53c7d5) {
  if (_0x109dad === "top" || _0x109dad === "bottom") {
    Se(
      _0x17bb69,
      _0x109dad,
      _0x4cc7f2 + _0x17bb69.width / 2,
      _0x219873,
      _0x21ec5e,
      _0x53c7d5,
    );
    return;
  }
  be(
    _0x17bb69,
    _0x109dad,
    _0x4cc7f2,
    _0x219873 + _0x17bb69.height / 2,
    _0x21ec5e,
    _0x53c7d5,
  );
}
function Oe(_0x892f9b, _0x4df7c4, _0x9b2bf2) {
  let _0x5d0dc1 = new Map(),
    _0xc3ce90 = ve(_0x892f9b),
    _0x288f06 = _0x4df7c4.rootLeft + _0x892f9b.width / 2,
    _0x1e8fd4 = f.timelineAxisGap;
  _0x5d0dc1.set(_0x892f9b.id, {
    left: _0x4df7c4.rootLeft,
    top: _0x4df7c4.rootTop,
  });
  let _0x18aa4b = _0x4df7c4.rootTop + _0x892f9b.height + _0x1e8fd4;
  return (
    _0xc3ce90.forEach((_0x2d6883) => {
      let _0x4e8d83 = _0x2d6883.side === "left" ? "left" : "right",
        _0xda28c7 = ye(_0x2d6883, _0x4e8d83, _0x9b2bf2.siblingGap);
      (De(
        _0x2d6883,
        _0x4e8d83,
        _0x4e8d83 === "left"
          ? _0x288f06 - _0x9b2bf2.horizontalGap - _0x2d6883.width
          : _0x288f06 + _0x9b2bf2.horizontalGap,
        _0x18aa4b + _0xda28c7 / 2 - _0x2d6883.height / 2,
        _0x5d0dc1,
        _0x9b2bf2,
      ),
        (_0x18aa4b += _0xda28c7 + _0x9b2bf2.siblingGap));
    }),
    _0x5d0dc1
  );
}
function ke(_0x18b76f, _0x4ef591, _0x56486d) {
  let _0xc089fb = new Map(),
    _0x53232d = ve(_0x18b76f),
    _0x4230de = _0x4ef591.rootTop + _0x18b76f.height / 2,
    _0x1f3bf0 = f.timelineAxisGap;
  _0xc089fb.set(_0x18b76f.id, {
    left: _0x4ef591.rootLeft,
    top: _0x4ef591.rootTop,
  });
  let _0x17b94d = _0x4ef591.rootLeft + _0x18b76f.width + _0x1f3bf0;
  return (
    _0x53232d.forEach((_0x159197) => {
      let _0x2c8472 = _0x159197.side === "bottom" ? "bottom" : "top",
        _0x40646d = _0x4230de - _0x159197.height / 2;
      (_0xc089fb.set(_0x159197.id, { left: _0x17b94d, top: _0x40646d }),
        Te(_0x159197, _0x2c8472, _0x17b94d, _0x40646d, _0xc089fb, _0x56486d),
        (_0x17b94d += _0x159197.width + _0x1f3bf0));
    }),
    _0xc089fb
  );
}
function Ae(_0x33aefc, _0x3e5e88, _0x5297d7) {
  let _0x2328c7 = new Map(),
    _0x1fe180 = ve(_0x33aefc),
    _0x4007e0 = _0x3e5e88.rootLeft + _0x33aefc.width / 2,
    _0x22e48b = f.timelineAxisGap;
  _0x2328c7.set(_0x33aefc.id, {
    left: _0x3e5e88.rootLeft,
    top: _0x3e5e88.rootTop,
  });
  let _0x5011e5 = _0x3e5e88.rootTop + _0x33aefc.height + _0x22e48b;
  return (
    _0x1fe180.forEach((_0x3c80a6) => {
      let _0x74272f = _0x3c80a6.side === "right" ? "right" : "left",
        _0x298eaf =
          _0x74272f === "left"
            ? _0x4007e0 - f.branchGap - _0x3c80a6.width
            : _0x4007e0 + f.branchGap;
      if (
        (_0x2328c7.set(_0x3c80a6.id, { left: _0x298eaf, top: _0x5011e5 }),
        !_0x3c80a6.collapsed)
      ) {
        let _0x239d6f = F(_0x3c80a6, _0x74272f),
          _0x5b4d46 = _0x239d6f.map((_0x357ca0) =>
            ye(_0x357ca0, _0x74272f, _0x5297d7.siblingGap),
          ),
          _0x496164 =
            _0x5b4d46.reduce(
              (_0x37940d, _0x53b6e1) => _0x37940d + _0x53b6e1,
              0,
            ) +
            Math.max(0, _0x5b4d46.length - 1) * _0x5297d7.siblingGap,
          _0xdd084d = _0x5011e5 + _0x3c80a6.height / 2 - _0x496164 / 2;
        _0x239d6f.forEach((_0x63c0bf, _0x419fa6) => {
          let _0x458c89 =
              _0x74272f === "left"
                ? _0x298eaf - _0x5297d7.horizontalGap - _0x63c0bf.width
                : _0x298eaf + _0x3c80a6.width + _0x5297d7.horizontalGap,
            _0x5ec4cf = _0x5b4d46[_0x419fa6];
          (be(
            _0x63c0bf,
            _0x74272f,
            _0x458c89,
            _0xdd084d + _0x5ec4cf / 2,
            _0x2328c7,
            _0x5297d7,
          ),
            (_0xdd084d += _0x5ec4cf + _0x5297d7.siblingGap));
        });
      }
      _0x5011e5 += _0x3c80a6.height + _0x22e48b;
    }),
    _0x2328c7
  );
}
function je(_0x265020, _0x3f071b) {
  let _0x531b41 = {
      horizontalGap: _0x3f071b.horizontalGap ?? f.horizontalGap,
      siblingGap: _0x3f071b.siblingGap ?? f.siblingGap,
    },
    _0x375f26 = _0x3f071b.structureKind ?? f.structureKind;
  if (_0x375f26 === "mindmap-vertical")
    return Ee(_0x265020, _0x3f071b, _0x531b41);
  if (
    _0x375f26 === "tree-right" ||
    _0x375f26 === "tree-left" ||
    _0x375f26 === "tree-alternate"
  )
    return Oe(_0x265020, _0x3f071b, _0x531b41);
  if (_0x375f26 === "timeline-horizontal")
    return ke(_0x265020, _0x3f071b, _0x531b41);
  if (_0x375f26 === "timeline-vertical")
    return Ae(_0x265020, _0x3f071b, _0x531b41);
  let _0x562c91 = new Map(),
    _0x1b5fc1 = _0x3f071b.rootTop + _0x265020.height / 2;
  return (
    be(_0x265020, "right", _0x3f071b.rootLeft, _0x1b5fc1, _0x562c91, _0x531b41),
    be(_0x265020, "left", _0x3f071b.rootLeft, _0x1b5fc1, _0x562c91, _0x531b41),
    _0x562c91
  );
}
function Me(_0x30626c, _0x3aa983) {
  return _0x30626c === "timeline-horizontal"
    ? _0x3aa983 % 2 == 0
      ? "top"
      : "bottom"
    : _0x30626c === "timeline-vertical" && _0x3aa983 % 2 == 0
      ? "left"
      : "right";
}
function Ne(_0x37986d, _0x161e7b) {
  return { modeId: i, structureScopeId: _0x37986d, semanticRole: _0x161e7b };
}
function Pe(_0x2d2246) {
  let _0x3fcf6f = _0x2d2246.structureKind ?? f.structureKind,
    _0x1fc333 = P(_0x3fcf6f, _0x2d2246.branchLineType),
    _0x1755b1 = (0, e.createBoardContainerElement)({
      id: _0x2d2246.id,
      left: _0x2d2246.left,
      top: _0x2d2246.top,
      width: _0x2d2246.width,
      height: _0x2d2246.height,
      title: "Mind Map",
      fillColor: l.container["fillColor"],
      strokeColor: l.container["strokeColor"],
      strokeWidth: 0,
      membershipLocked: true,
    });
  return (
    (_0x1755b1.containerData = {
      ..._0x1755b1.containerData,
      titleVisible: false,
      shapeData: {
        ..._0x1755b1.containerData["shapeData"],
        fill: {
          ..._0x1755b1.containerData["shapeData"].fill,
          fillType: n.ShapeFillEnum["NoFill"],
        },
        stroke: {
          ..._0x1755b1.containerData["shapeData"].stroke,
          lineStrokeType: n.ShapeLineTypeEnum["NoLine"],
        },
      },
      behavior: {
        ..._0x1755b1.containerData["behavior"],
        acceptsChildren: true,
        acceptsContainer: false,
        allowNested: false,
        autoCapture: false,
        autoResize: false,
        membershipLocked: true,
        clipChildren: false,
        membershipAwareness: "structural",
      },
      capturePolicy: {
        ..._0x1755b1.containerData["capturePolicy"],
        enabled: false,
        allowCaptureContainer: false,
        allowCaptureFromAncestorContainer: false,
        allowCaptureFromSiblingContainer: false,
      },
      custom: { ...(_0x1755b1.containerData["custom"] ?? {}) },
    }),
    (_0x1755b1.custom = {
      structured: Ne(_0x2d2246.id, a),
      mindmap: {
        presentation: "implicit",
        boundsMode: "auto-fit",
        rootNodeId: _0x2d2246.rootNodeId,
        layout: { ...f, structureKind: _0x3fcf6f, branchLineType: _0x1fc333 },
        themeId: "default",
        structureRevision: 1,
      },
    }),
    _0x1755b1
  );
}
function Fe(_0x27fb88) {
  let _0x449772 = (0, e.createBoardTextBoxShapeElement)({
      id: _0x27fb88.id,
      parentId: _0x27fb88.parentId,
      left: _0x27fb88.left,
      top: _0x27fb88.top,
      width: _0x27fb88.width,
      height: _0x27fb88.height,
      text: _0x27fb88.text,
      horizontal: true,
    }),
    _0x5ce11f = _0x27fb88.parentNodeId ? l.child : l.root,
    _0x53ab54 = _0x5ce11f.fillColor,
    _0x578012 = _0x5ce11f.strokeColor,
    _0x45be4d = _0x5ce11f.textColor,
    _0x7e0a96 = _0x5ce11f.fontSize,
    _0x569e27 = { fs: _0x7e0a96, cl: { rgb: _0x45be4d } },
    _0x3db504 = _0x27fb88.parentNodeId
      ? t.HorizontalAlign["LEFT"]
      : t.HorizontalAlign["CENTER"],
    _0x5e837f = t.VerticalAlign["MIDDLE"],
    _0x2f6ab7 = {
      ...me({
        horizontalAlign: _0x3db504,
        shapeText: { color: _0x45be4d, fontSize: _0x7e0a96 },
        text: _0x27fb88.text,
        documentData: _0x27fb88.textData,
        textStyle: _0x569e27,
        verticalAlign: _0x5e837f,
      }),
      fontSize: _0x7e0a96,
      color: _0x45be4d,
      horizontalAlign: _0x3db504,
      verticalAlign: _0x5e837f,
    };
  return (
    (_0x449772.shapeData = {
      ..._0x449772.shapeData,
      shapeType: n.ShapeTypeEnum["RoundRect"],
      fill: { fillType: n.ShapeFillEnum["SolidFill"], color: _0x53ab54 },
      stroke: {
        lineStrokeType: n.ShapeLineTypeEnum["SolidLine"],
        color: _0x578012,
        width: 2,
      },
      textRectPadding: { ...d },
      isTextBox: true,
      shapeText: _0x2f6ab7,
    }),
    (_0x449772.custom = {
      structured: Ne(_0x27fb88.scopeId, o),
      mindmap: {
        parentNodeId: _0x27fb88.parentNodeId,
        orderKey: _0x27fb88.orderKey,
        ...(_0x27fb88.side ? { side: _0x27fb88.side } : null),
        collapsed: _0x27fb88.collapsed ?? false,
        size: {
          minWidth: _0x27fb88.parentNodeId ? m.nodeWidth : m.rootWidth,
          minHeight: _0x27fb88.parentNodeId ? m.nodeHeight : m.rootHeight,
        },
        ...(_0x27fb88.foreignAttributes
          ? { foreignAttributes: _0x27fb88.foreignAttributes }
          : null),
        ...(_0x27fb88.branchColorKey
          ? { branchColorKey: _0x27fb88.branchColorKey }
          : null),
      },
    }),
    _0x449772
  );
}
function I(_0x4152d7) {
  var _0x541fb4;
  let _0xebe73a = !_0x4152d7.parentNodeId,
    _0x5edac7 = {
      width: _0xebe73a ? m.rootWidth : m.nodeWidth,
      height: _0xebe73a ? m.rootHeight : m.nodeHeight,
    },
    _0x52cab2 =
      ((_0x541fb4 = _0x4152d7.textData) == null ||
      (_0x541fb4 = _0x541fb4.body) == null
        ? undefined
        : _0x541fb4.textRuns) ?? [],
    _0x4f9eca = _0xebe73a ? l.root["fontSize"] : l.child["fontSize"],
    _0x39c5c7 = _0x52cab2.reduce((_0x426b16, _0x1b926c) => {
      var _0x381b00;
      return Math.max(
        _0x426b16,
        ((_0x381b00 = _0x1b926c.ts) == null ? undefined : _0x381b00.fs) ??
          _0x426b16,
      );
    }, _0x4f9eca);
  return le({
    bold: _0x52cab2.some((_0x3e376a) => {
      var _0x50abe7;
      return (
        ((_0x50abe7 = _0x3e376a.ts) == null ? undefined : _0x50abe7.bl) ===
        t.BooleanNumber["TRUE"]
      );
    }),
    fontSize: _0x39c5c7,
    minWidth: _0x5edac7.width,
    minHeight: _0x5edac7.height,
    text: _0x4152d7.text,
  });
}
function Ie(_0x29fd5b) {
  let _0x4f6948 = C(_0x29fd5b.branchLineType),
    _0x29fc68 = z(_0x29fd5b.parentNode),
    _0x2fe609 = _0x29fd5b.timelineRootStructureKind
      ? E({
          idPrefix: _0x29fd5b.id,
          parentNode: _0x29fd5b.parentNode,
          childNode: _0x29fd5b.childNode,
          previousAxisNode: _0x29fd5b.timelinePreviousAxisNode,
          structureKind: _0x29fd5b.timelineRootStructureKind,
          childSide: _0x29fd5b.side,
          branchLineType: _0x4f6948,
        })
      : _0x29fd5b.timelineHorizontalRootNodeId &&
          (_0x29fc68 == null ? undefined : _0x29fc68.parentNodeId) !== null
        ? ee({
            idPrefix: _0x29fd5b.id,
            parentNode: _0x29fd5b.parentNode,
            childNode: _0x29fd5b.childNode,
            parentIsAxisNode:
              (_0x29fc68 == null ? undefined : _0x29fc68.parentNodeId) ===
              _0x29fd5b.timelineHorizontalRootNodeId,
            branchLineType: _0x4f6948,
          })
        : _0x29fd5b.timelineVerticalRootNodeId &&
            (_0x29fc68 == null ? undefined : _0x29fc68.parentNodeId) !== null
          ? te({
              idPrefix: _0x29fd5b.id,
              parentNode: _0x29fd5b.parentNode,
              childNode: _0x29fd5b.childNode,
              parentIsAxisNode:
                (_0x29fc68 == null ? undefined : _0x29fc68.parentNodeId) ===
                _0x29fd5b.timelineVerticalRootNodeId,
              side: _0x29fd5b.side,
              branchLineType: _0x4f6948,
              forceTrunk: _0x29fd5b.forceTrunk,
            })
          : _0x29fd5b.treeRootTrunk
            ? T({
                idPrefix: _0x29fd5b.id,
                parentNode: _0x29fd5b.parentNode,
                childNode: _0x29fd5b.childNode,
                side: _0x29fd5b.side,
                branchLineType: _0x4f6948,
              })
            : null,
    { startSide: _0x3c103e, endSide: _0x460c56 } =
      _0x2fe609 ?? y(_0x29fd5b.side),
    _0x1759d3 =
      (_0x2fe609 == null ? undefined : _0x2fe609.startPoint) ??
      h(_0x29fd5b.parentNode, _0x3c103e),
    _0x1ca1cc =
      (_0x2fe609 == null ? undefined : _0x2fe609.endPoint) ??
      h(_0x29fd5b.childNode, _0x460c56),
    _0x228937 =
      (_0x2fe609 == null ? undefined : _0x2fe609.routePoints) ??
      b({
        idPrefix: _0x29fd5b.id,
        parentNode: _0x29fd5b.parentNode,
        childNode: _0x29fd5b.childNode,
        side: _0x29fd5b.side,
        forceTrunk: _0x29fd5b.forceTrunk,
      }),
    _0x299000 =
      (_0x2fe609 == null ? undefined : _0x2fe609.curveData) ??
      (_0x4f6948 === "curve"
        ? w({
            idPrefix: _0x29fd5b.id,
            parentNode: _0x29fd5b.parentNode,
            childNode: _0x29fd5b.childNode,
            side: _0x29fd5b.side,
          })
        : undefined),
    _0x2c66e1 = (0, e.createBoardConnectorElement)({
      id: _0x29fd5b.id,
      start:
        (_0x2fe609 == null ? undefined : _0x2fe609.startEndpoint) ??
        g(_0x29fd5b.parentNode["id"], _0x3c103e, _0x1759d3),
      end:
        (_0x2fe609 == null ? undefined : _0x2fe609.endEndpoint) ??
        g(_0x29fd5b.childNode["id"], _0x460c56, _0x1ca1cc),
      routing: _0x4f6948 === "curve" ? "curve" : "orthogonal",
      routingMode: "manual",
      waypoints: _0x4f6948 === "curve" ? [] : _0x228937,
      orthogonalData:
        _0x4f6948 === "curve" ? undefined : { routePoints: _0x228937 },
      curveData: _0x299000,
      transform:
        (_0x2fe609 == null ? undefined : _0x2fe609.transform) ??
        x({
          parentNode: _0x29fd5b.parentNode,
          childNode: _0x29fd5b.childNode,
          side: _0x29fd5b.side,
          routePoints: _0x228937,
          curveData: _0x299000,
        }),
      style: {
        stroke: l.connector["strokeColor"],
        strokeWidth: 2,
        opacity: 1,
        cornerStyle: _0x4f6948 === "orthogonal" ? "miter" : "rounded",
      },
    });
  return (
    (_0x2c66e1.parentId = _0x29fd5b.scopeId),
    (_0x2c66e1.custom = {
      structured: Ne(_0x29fd5b.scopeId, s),
      mindmap: {
        managed: true,
        parentNodeId: _0x29fd5b.parentNode["id"],
        childNodeId: _0x29fd5b.childNode["id"],
      },
    }),
    _0x2c66e1
  );
}
function L(_0x161dec, _0x4ef120) {
  return {
    ..._0x161dec,
    transform: {
      ..._0x161dec.transform,
      left:
        (_0x161dec.transform["left"] ?? 0) - (_0x4ef120.transform["left"] ?? 0),
      top:
        (_0x161dec.transform["top"] ?? 0) - (_0x4ef120.transform["top"] ?? 0),
    },
  };
}
function Le(_0x21c74f) {
  return N(_0x21c74f.structureKind)
    ? [_0x21c74f.container, ..._0x21c74f.connectors, ..._0x21c74f.nodes]
    : [_0x21c74f.container, ..._0x21c74f.nodes, ..._0x21c74f.connectors];
}
function Re(_0x4da1b2) {
  let _0x2fb793 = _0x4da1b2.containerId ?? (0, t.generateRandomId)(6),
    _0x5de4aa = _0x4da1b2.rootNodeId ?? (0, t.generateRandomId)(6),
    _0x4b5fd9 = _0x4da1b2.children ?? [],
    _0x50f60e = _0x4da1b2.rootText ?? "Add\x20text",
    _0x397a8b = P(_0x4da1b2.structureKind, _0x4da1b2.branchLineType),
    _0x3e7752 = I({ parentNodeId: null, text: _0x50f60e }),
    _0x5600ae = m.containerPadding,
    _0x28f825 = _0x4b5fd9.map((_0x50007f, _0x15d771) => ({
      ..._0x50007f,
      nodeId: _0x50007f.nodeId ?? (0, t.generateRandomId)(6),
      connectorId: _0x50007f.connectorId ?? (0, t.generateRandomId)(6),
      orderKey: _0x50007f.orderKey ?? A(_0x15d771),
      side: _0x50007f.side ?? Me(_0x4da1b2.structureKind, _0x15d771),
      text: _0x50007f.text ?? "Add text",
    })),
    _0x484219 = je(
      {
        id: _0x5de4aa,
        parentId: null,
        width: _0x3e7752.width,
        height: _0x3e7752.height,
        children: _0x28f825.map((_0x13a232) => ({
          id: _0x13a232.nodeId,
          parentId: _0x5de4aa,
          side: _0x13a232.side,
          collapsed: _0x13a232.collapsed,
          ...I({
            parentNodeId: _0x5de4aa,
            text: _0x13a232.text,
            textData: _0x13a232.textData,
          }),
          children: [],
        })),
      },
      {
        rootLeft: _0x4da1b2.left,
        rootTop: _0x4da1b2.top,
        structureKind: _0x4da1b2.structureKind,
        horizontalGap: f.horizontalGap,
        siblingGap: f.siblingGap,
      },
    ),
    _0x49a620 = _0x484219.get(_0x5de4aa) ?? {
      left: _0x4da1b2.left,
      top: _0x4da1b2.top,
    },
    _0x3f02d3 = _0x28f825.reduce(
      (_0x38071e, _0x25c757) => ((_0x38071e[_0x25c757.side] += 1), _0x38071e),
      { left: 0, right: 0, top: 0, bottom: 0 },
    ),
    _0x15df74 = M(_0x4da1b2.structureKind),
    _0x3dfba4 = N(_0x4da1b2.structureKind)
      ? _0x4da1b2.structureKind
      : undefined,
    _0x346517 = Fe({
      id: _0x5de4aa,
      scopeId: _0x2fb793,
      parentId: _0x2fb793,
      parentNodeId: null,
      orderKey: "a0",
      text: _0x50f60e,
      left: _0x49a620.left,
      top: _0x49a620.top,
      width: _0x3e7752.width,
      height: _0x3e7752.height,
    }),
    _0x2730d7 = _0x28f825.map((_0x2558ce) => {
      let _0x14ac56 = _0x484219.get(_0x2558ce.nodeId) ?? {
        left: _0x4da1b2.left,
        top: _0x4da1b2.top,
      };
      return Fe({
        id: _0x2558ce.nodeId,
        scopeId: _0x2fb793,
        parentId: _0x2fb793,
        parentNodeId: _0x5de4aa,
        orderKey: _0x2558ce.orderKey,
        side: _0x2558ce.side,
        text: _0x2558ce.text,
        textData: _0x2558ce.textData,
        left: _0x14ac56.left,
        top: _0x14ac56.top,
        ...I({
          parentNodeId: _0x5de4aa,
          text: _0x2558ce.text,
          textData: _0x2558ce.textData,
        }),
        collapsed: _0x2558ce.collapsed,
        foreignAttributes: _0x2558ce.foreignAttributes,
        branchColorKey:
          _0x2558ce.branchColorKey ?? "branch-" + _0x2558ce.orderKey,
      });
    }),
    _0xc1364f = _0x2730d7.map((_0x3eacde, _0x1ea16e) => {
      var _0x263d3d;
      let _0x2f1c91 =
        ((_0x263d3d = z(_0x3eacde)) == null ? undefined : _0x263d3d.side) ??
        "right";
      return Ie({
        id: _0x28f825[_0x1ea16e].connectorId,
        scopeId: _0x2fb793,
        parentNode: _0x346517,
        childNode: _0x3eacde,
        side: _0x2f1c91,
        branchLineType: _0x397a8b,
        forceTrunk: _0x3f02d3[_0x2f1c91] > 1,
        treeRootTrunk: _0x15df74,
        timelineRootStructureKind: _0x3dfba4,
        timelinePreviousAxisNode: _0x3dfba4
          ? _0x2730d7[_0x1ea16e - 1]
          : undefined,
        timelineHorizontalRootNodeId:
          _0x4da1b2.structureKind === "timeline-horizontal"
            ? _0x5de4aa
            : undefined,
        timelineVerticalRootNodeId:
          _0x4da1b2.structureKind === "timeline-vertical"
            ? _0x5de4aa
            : undefined,
      });
    }),
    _0x538617 = [_0x346517, ..._0x2730d7].reduce(
      (_0x2203b7, _0x3e08c7) => {
        let _0x3812d7 = _0x3e08c7.transform["left"] ?? 0,
          _0x367356 = _0x3e08c7.transform["top"] ?? 0,
          _0x838ba7 = _0x3812d7 + (_0x3e08c7.transform["width"] ?? 0),
          _0x40b577 = _0x367356 + (_0x3e08c7.transform["height"] ?? 0);
        return {
          left: Math.min(_0x2203b7.left, _0x3812d7),
          top: Math.min(_0x2203b7.top, _0x367356),
          right: Math.max(_0x2203b7.right, _0x838ba7),
          bottom: Math.max(_0x2203b7.bottom, _0x40b577),
        };
      },
      { left: 1 / 0, top: 1 / 0, right: -1 / 0, bottom: -1 / 0 },
    ),
    _0x3a1a47 = Pe({
      id: _0x2fb793,
      rootNodeId: _0x5de4aa,
      left: _0x538617.left - _0x5600ae,
      top: _0x538617.top - _0x5600ae,
      width: _0x538617.right - _0x538617.left + _0x5600ae * 2,
      height: _0x538617.bottom - _0x538617.top + _0x5600ae * 2,
      structureKind: _0x4da1b2.structureKind,
      branchLineType: _0x397a8b,
    }),
    _0x3db84f = L(_0x346517, _0x3a1a47),
    _0xc61525 = _0x2730d7.map((_0xd463d5) => L(_0xd463d5, _0x3a1a47)),
    _0x4ecba7 = _0xc1364f.map((_0x37f203) => L(_0x37f203, _0x3a1a47)),
    _0x3e7c2a = [_0x3db84f, ..._0xc61525];
  return {
    container: _0x3a1a47,
    rootNode: _0x3db84f,
    nodes: _0x3e7c2a,
    connectors: _0x4ecba7,
    elements: Le({
      container: _0x3a1a47,
      nodes: _0x3e7c2a,
      connectors: _0x4ecba7,
      structureKind: _0x4da1b2.structureKind,
    }),
  };
}
function ze(_0x26f901, _0x897c24) {
  let _0xff5c51 = _0x26f901.children["map"]((_0x323c7d, _0xbab93a) =>
    ze(_0x323c7d, {
      orderKey: _0x323c7d.orderKey ?? A(_0xbab93a),
      id: _0x323c7d.nodeId ?? (0, t.generateRandomId)(6),
      connectorId: _0x323c7d.connectorId ?? (0, t.generateRandomId)(6),
      parentId: _0x897c24.id,
      side: _0x323c7d.side ?? _0x897c24.side ?? "right",
      branchColorKey:
        _0x897c24.parentId === null
          ? (_0x323c7d.branchColorKey ??
            "branch-" + (_0x323c7d.orderKey ?? A(_0xbab93a)))
          : (_0x323c7d.branchColorKey ?? _0x897c24.branchColorKey),
    }),
  );
  return {
    blueprint: _0x26f901,
    id: _0x897c24.id,
    connectorId: _0x897c24.connectorId,
    parentId: _0x897c24.parentId,
    orderKey: _0x897c24.orderKey,
    side: _0x897c24.side,
    branchColorKey: _0x26f901.branchColorKey ?? _0x897c24.branchColorKey,
    children: _0xff5c51,
  };
}
function Be(_0x42351d, _0xc57c1d) {
  (_0xc57c1d(_0x42351d),
    _0x42351d.children["forEach"]((_0x5950c0) => Be(_0x5950c0, _0xc57c1d)));
}
function Ve(_0xaaacd5, _0xc648dc) {
  let _0x58efb4 = I({
    parentNodeId: _0xaaacd5.parentId,
    text: _0xaaacd5.blueprint["text"],
    textData: _0xaaacd5.blueprint["textData"],
  });
  return {
    id: _0xaaacd5.id,
    parentId: _0xaaacd5.parentId,
    side: _0xaaacd5.side,
    collapsed: _0xaaacd5.blueprint["collapsed"],
    width: _0x58efb4.width,
    height: _0x58efb4.height,
    children: _0xaaacd5.children["map"]((_0x23b1e7) =>
      Ve(_0x23b1e7, _0xc648dc),
    ),
  };
}
function He(_0x2bdcf5) {
  let _0x73f669 = _0x2bdcf5.containerId ?? (0, t.generateRandomId)(6),
    _0x1b02d7 =
      _0x2bdcf5.rootNodeId ??
      _0x2bdcf5.blueprint["root"].nodeId ??
      (0, t.generateRandomId)(6),
    _0x5ece1e = P(_0x2bdcf5.structureKind, _0x2bdcf5.branchLineType),
    _0x39cc23 = ze(_0x2bdcf5.blueprint["root"], {
      id: _0x1b02d7,
      parentId: null,
      orderKey: "a0",
    }),
    _0xf7fd9f = [];
  Be(_0x39cc23, (_0xec1e9d) => _0xf7fd9f.push(_0xec1e9d));
  let _0x309523 = je(
      Ve(_0x39cc23, {
        rootNodeId: _0x1b02d7,
        structureKind: _0x2bdcf5.structureKind,
      }),
      {
        rootLeft: _0x2bdcf5.left,
        rootTop: _0x2bdcf5.top,
        structureKind: _0x2bdcf5.structureKind,
        horizontalGap: f.horizontalGap,
        siblingGap: f.siblingGap,
      },
    ),
    _0x15902f = new Map(),
    _0x4af2f7 = _0xf7fd9f.map((_0x4c68fa) => {
      let _0x5ac368 = I({
          parentNodeId: _0x4c68fa.parentId,
          text: _0x4c68fa.blueprint["text"],
          textData: _0x4c68fa.blueprint["textData"],
        }),
        _0x30aec2 = _0x309523.get(_0x4c68fa.id) ?? {
          left: _0x2bdcf5.left,
          top: _0x2bdcf5.top,
        },
        _0x279186 = Fe({
          id: _0x4c68fa.id,
          scopeId: _0x73f669,
          parentId: _0x73f669,
          parentNodeId: _0x4c68fa.parentId,
          orderKey: _0x4c68fa.orderKey,
          side: _0x4c68fa.parentId ? (_0x4c68fa.side ?? "right") : undefined,
          text: _0x4c68fa.blueprint["text"],
          textData: _0x4c68fa.blueprint["textData"],
          left: _0x30aec2.left,
          top: _0x30aec2.top,
          width: _0x5ac368.width,
          height: _0x5ac368.height,
          collapsed: _0x4c68fa.blueprint["collapsed"],
          foreignAttributes: _0x4c68fa.blueprint["foreignAttributes"],
          branchColorKey: _0x4c68fa.parentId
            ? _0x4c68fa.branchColorKey
            : undefined,
        });
      return (_0x15902f.set(_0x4c68fa.id, _0x279186), _0x279186);
    }),
    _0x581ce6 = _0x4af2f7[0],
    _0x2984e8 = _0xf7fd9f.reduce((_0x14c2ec, _0x321de7) => {
      if (!_0x321de7.parentId) return _0x14c2ec;
      let _0x17b70f = _0x321de7.side ?? "right",
        _0x2f1f70 = _0x321de7.parentId + ":" + _0x17b70f;
      return (
        _0x14c2ec.set(_0x2f1f70, (_0x14c2ec.get(_0x2f1f70) ?? 0) + 1),
        _0x14c2ec
      );
    }, new Map()),
    _0x229e76 = _0xf7fd9f
      .filter((_0x324da4) => !!_0x324da4.parentId)
      .map((_0x440c95) =>
        Ie({
          id: _0x440c95.connectorId ?? (0, t.generateRandomId)(6),
          scopeId: _0x73f669,
          parentNode: _0x15902f.get(_0x440c95.parentId),
          childNode: _0x15902f.get(_0x440c95.id),
          side: _0x440c95.side ?? "right",
          branchLineType: _0x5ece1e,
          forceTrunk:
            (_0x2984e8.get(
              _0x440c95.parentId + ":" + (_0x440c95.side ?? "right"),
            ) ?? 0) > 1,
          treeRootTrunk:
            M(_0x2bdcf5.structureKind) && _0x440c95.parentId === _0x1b02d7,
          timelineRootStructureKind:
            N(_0x2bdcf5.structureKind) && _0x440c95.parentId === _0x1b02d7
              ? _0x2bdcf5.structureKind
              : undefined,
          timelinePreviousAxisNode:
            N(_0x2bdcf5.structureKind) && _0x440c95.parentId === _0x1b02d7
              ? (() => {
                  let _0x140b4b = _0xf7fd9f
                      .filter((_0x93c639) => _0x93c639.parentId === _0x1b02d7)
                      .sort((_0x36f1c8, _0x5c8d73) =>
                        _0x36f1c8.orderKey["localeCompare"](_0x5c8d73.orderKey),
                      ),
                    _0x519a83 = _0x140b4b.findIndex(
                      (_0x3ec82f) => _0x3ec82f.id === _0x440c95.id,
                    );
                  return _0x519a83 > 0
                    ? _0x15902f.get(_0x140b4b[_0x519a83 - 1].id)
                    : undefined;
                })()
              : undefined,
          timelineHorizontalRootNodeId:
            _0x2bdcf5.structureKind === "timeline-horizontal"
              ? _0x1b02d7
              : undefined,
          timelineVerticalRootNodeId:
            _0x2bdcf5.structureKind === "timeline-vertical"
              ? _0x1b02d7
              : undefined,
        }),
      ),
    _0x527d0f = m.containerPadding,
    _0x4e9aad =
      Math.min(
        ..._0x4af2f7.map((_0x56f127) => _0x56f127.transform["left"] ?? 0),
      ) - _0x527d0f,
    _0x3c1032 =
      Math.min(
        ..._0x4af2f7.map((_0x5a7ad2) => _0x5a7ad2.transform["top"] ?? 0),
      ) - _0x527d0f,
    _0x459446 =
      Math.max(
        ..._0x4af2f7.map(
          (_0x141d67) =>
            (_0x141d67.transform["left"] ?? 0) +
            (_0x141d67.transform["width"] ?? m.nodeWidth),
        ),
      ) + _0x527d0f,
    _0x55c165 =
      Math.max(
        ..._0x4af2f7.map(
          (_0x6b55c5) =>
            (_0x6b55c5.transform["top"] ?? 0) +
            (_0x6b55c5.transform["height"] ?? m.nodeHeight),
        ),
      ) + _0x527d0f,
    _0x582bb0 = Pe({
      id: _0x73f669,
      rootNodeId: _0x1b02d7,
      left: _0x4e9aad,
      top: _0x3c1032,
      width: _0x459446 - _0x4e9aad,
      height: _0x55c165 - _0x3c1032,
      structureKind: _0x2bdcf5.structureKind,
      branchLineType: _0x5ece1e,
    }),
    _0x41707e = _0x4af2f7.map((_0x5f4b1c) => L(_0x5f4b1c, _0x582bb0)),
    _0x44e35c =
      _0x41707e.find((_0x2ee493) => _0x2ee493.id === _0x581ce6.id) ??
      _0x41707e[0],
    _0x107469 = _0x229e76.map((_0x19e3cc) => L(_0x19e3cc, _0x582bb0));
  return {
    container: _0x582bb0,
    rootNode: _0x44e35c,
    nodes: _0x41707e,
    connectors: _0x107469,
    elements: Le({
      container: _0x582bb0,
      nodes: _0x41707e,
      connectors: _0x107469,
      structureKind: _0x2bdcf5.structureKind,
    }),
  };
}
function Ue(_0x4b7dbc) {
  let _0x41abe5 = _0x4b7dbc.text ?? "Add text",
    _0x2d3d1d = I({
      parentNodeId: _0x4b7dbc.parentNode["id"],
      text: _0x41abe5,
      textData: _0x4b7dbc.textData,
    }),
    _0x5c5612 = Fe({
      id: _0x4b7dbc.nodeId ?? (0, t.generateRandomId)(6),
      scopeId: _0x4b7dbc.scopeId,
      parentId: _0x4b7dbc.scopeId,
      parentNodeId: _0x4b7dbc.parentNode["id"],
      orderKey: _0x4b7dbc.orderKey,
      side: _0x4b7dbc.side,
      text: _0x41abe5,
      textData: _0x4b7dbc.textData,
      left: _0x4b7dbc.left,
      top: _0x4b7dbc.top,
      width: _0x2d3d1d.width,
      height: _0x2d3d1d.height,
      branchColorKey: _0x4b7dbc.branchColorKey,
    }),
    _0x4ceefc = Ie({
      id: _0x4b7dbc.connectorId ?? (0, t.generateRandomId)(6),
      scopeId: _0x4b7dbc.scopeId,
      parentNode: _0x4b7dbc.parentNode,
      childNode: _0x5c5612,
      side: _0x4b7dbc.side,
      branchLineType: _0x4b7dbc.branchLineType,
      treeRootTrunk: _0x4b7dbc.treeRootTrunk,
      timelineRootStructureKind: _0x4b7dbc.timelineRootStructureKind,
      timelineHorizontalRootNodeId:
        _0x4b7dbc.timelineRootStructureKind === "timeline-horizontal"
          ? _0x4b7dbc.parentNode["id"]
          : undefined,
      timelineVerticalRootNodeId:
        _0x4b7dbc.timelineRootStructureKind === "timeline-vertical"
          ? _0x4b7dbc.parentNode["id"]
          : undefined,
    });
  return {
    node: _0x5c5612,
    connector: _0x4ceefc,
    elements: _0x4b7dbc.timelineRootStructureKind
      ? [_0x4ceefc, _0x5c5612]
      : [_0x5c5612, _0x4ceefc],
  };
}
function R(_0x2308c8) {
  var _0x103382;
  let _0x1f091f = _0x2308c8 == null ? undefined : _0x2308c8.custom;
  return !_0x1f091f ||
    ((_0x103382 = _0x1f091f.structured) == null
      ? undefined
      : _0x103382.modeId) !== i ||
    _0x1f091f.structured["semanticRole"] !== a ||
    typeof _0x1f091f.structured["structureScopeId"] != "string"
    ? null
    : {
        ..._0x1f091f.mindmap,
        modeId: i,
        structureScopeId: _0x1f091f.structured["structureScopeId"],
        semanticRole: a,
      };
}
function z(_0x2845db) {
  var _0x15d3fa;
  let _0xef4fb6 = _0x2845db == null ? undefined : _0x2845db.custom;
  return !_0xef4fb6 ||
    ((_0x15d3fa = _0xef4fb6.structured) == null
      ? undefined
      : _0x15d3fa.modeId) !== i ||
    _0xef4fb6.structured["semanticRole"] !== o ||
    typeof _0xef4fb6.structured["structureScopeId"] != "string"
    ? null
    : {
        ..._0xef4fb6.mindmap,
        modeId: i,
        structureScopeId: _0xef4fb6.structured["structureScopeId"],
        semanticRole: o,
      };
}
function B(_0x1ae4cc) {
  var _0x171e51;
  let _0x3b679c = _0x1ae4cc == null ? undefined : _0x1ae4cc.custom;
  return !_0x3b679c ||
    ((_0x171e51 = _0x3b679c.structured) == null
      ? undefined
      : _0x171e51.modeId) !== i ||
    _0x3b679c.structured["semanticRole"] !== s ||
    typeof _0x3b679c.structured["structureScopeId"] != "string"
    ? null
    : {
        ..._0x3b679c.mindmap,
        modeId: i,
        structureScopeId: _0x3b679c.structured["structureScopeId"],
        semanticRole: s,
      };
}
function V(_0x34a77c) {
  var _0x173611;
  let _0x1f6cfe = _0x34a77c == null ? undefined : _0x34a77c.custom;
  if (
    !_0x1f6cfe ||
    ((_0x173611 = _0x1f6cfe.structured) == null
      ? undefined
      : _0x173611.modeId) !== i ||
    _0x1f6cfe.structured["semanticRole"] !== c ||
    typeof _0x1f6cfe.structured["structureScopeId"] != "string"
  )
    return null;
  let _0x1bea09 = _0x1f6cfe.mindmap;
  return typeof (_0x1bea09 == null ? undefined : _0x1bea09.ownerNodeId) !=
    "string" ||
    typeof _0x1bea09.offsetX != "number" ||
    typeof _0x1bea09.offsetY != "number"
    ? null
    : {
        ownerNodeId: _0x1bea09.ownerNodeId,
        offsetX: _0x1bea09.offsetX,
        offsetY: _0x1bea09.offsetY,
        modeId: i,
        structureScopeId: _0x1f6cfe.structured["structureScopeId"],
        semanticRole: c,
      };
}
function We(_0x2884e2) {
  let _0x551af0 = _0x2884e2;
  return {
    redo: _0x551af0.redo,
    objects: (_0x551af0.objects ?? []).map((_0x4de8c5) => ({
      unitId: _0x4de8c5.unitId,
      subUnitId: _0x4de8c5.subUnitId,
      elementId: _0x4de8c5.drawingId,
    })),
  };
}
function Ge(_0x55609e) {
  return !!(R(_0x55609e) || z(_0x55609e) || B(_0x55609e) || V(_0x55609e));
}
const H = {
    id: "board.mutation.set-mind-map-element",
    type: t.CommandType["MUTATION"],
    handler: (_0x3bb2fa, _0x1ac259) => {
      if (
        !(_0x1ac259 != null && _0x1ac259.unitId) ||
        !_0x1ac259.subUnitId ||
        !_0x1ac259.elementId ||
        _0x1ac259.element["id"] !== _0x1ac259.elementId
      )
        return false;
      let _0x1500bc = _0x3bb2fa.get(e.IBoardElementService),
        _0x343e0d = _0x1500bc.getElementByParam({
          unitId: _0x1ac259.unitId,
          subUnitId: _0x1ac259.subUnitId,
          elementId: _0x1ac259.elementId,
        });
      if (!_0x343e0d || !Ge(_0x343e0d.element) || !Ge(_0x1ac259.element))
        return false;
      let _0x54c4ea = _0x3bb2fa
          .get(t.IUniverInstanceService)
          .getUnit(_0x1ac259.unitId, t.UniverInstanceType["UNIVER_BOARD"]),
        _0x2e5161 =
          _0x54c4ea == null
            ? undefined
            : _0x54c4ea.getPage(_0x1ac259.subUnitId);
      if (!_0x54c4ea || !_0x2e5161 || !_0x2e5161.elements[_0x1ac259.elementId])
        return false;
      _0x2e5161.elements = {
        ..._0x2e5161.elements,
        [_0x1ac259.elementId]: _0x1ac259.element,
      };
      let _0x28d51f = {
          ..._0x343e0d,
          element: _0x1ac259.element,
          transform: _0x1ac259.transform ?? _0x343e0d.transform,
          hidden: _0x1ac259.element["visible"] === false,
        },
        _0x6a98ce = We(_0x1500bc.getBatchUpdateElementOp([_0x28d51f]));
      return (
        _0x1500bc.applyElementJson1(
          _0x1ac259.unitId,
          _0x1ac259.subUnitId,
          _0x6a98ce.redo,
        ),
        _0x1500bc.updateElementNotification(_0x6a98ce.objects),
        true
      );
    },
  },
  Ke = {
    id: "board.operation.insert-mind-map",
    type: t.CommandType["OPERATION"],
    handler: (_0x4e1bb1, _0xde6988) => {
      if (
        !_0xde6988 ||
        !_0xde6988.unitId ||
        !_0xde6988.subUnitId ||
        !Number.isFinite(_0xde6988.left) ||
        !Number.isFinite(_0xde6988.top)
      )
        return false;
      let _0x1d8526 = _0x4e1bb1.get(e.IBoardElementService),
        _0xcc693 = _0x1d8526.getElementData(
          _0xde6988.unitId,
          _0xde6988.subUnitId,
        ),
        _0x5bc6e0 = _0x1d8526.getElementOrder(
          _0xde6988.unitId,
          _0xde6988.subUnitId,
        ),
        _0x39345e = _0xde6988.blueprint
          ? He({
              containerId: _0xde6988.containerId,
              rootNodeId: _0xde6988.rootNodeId,
              left: _0xde6988.left,
              top: _0xde6988.top,
              blueprint: _0xde6988.rootText
                ? {
                    ..._0xde6988.blueprint,
                    root: {
                      ..._0xde6988.blueprint["root"],
                      text: _0xde6988.rootText,
                    },
                  }
                : _0xde6988.blueprint,
              structureKind: _0xde6988.structureKind,
              branchLineType: _0xde6988.branchLineType,
            })
          : Re({
              containerId: _0xde6988.containerId,
              rootNodeId: _0xde6988.rootNodeId,
              left: _0xde6988.left,
              top: _0xde6988.top,
              rootText: _0xde6988.rootText,
              structureKind: _0xde6988.structureKind,
              branchLineType: _0xde6988.branchLineType,
              children: _0xde6988.children,
            }),
        _0x27f021 = (0, e.createAddBoardElementsMutationInfos)({
          unitId: _0xde6988.unitId,
          subUnitId: _0xde6988.subUnitId,
          elements: _0x39345e.elements,
          insertIndex: _0xde6988.insertIndex,
          elementData: _0xcc693,
          elementOrder: _0x5bc6e0,
        });
      if (!_0x27f021) return false;
      let _0x24bacf = _0x4e1bb1.get(t.ICommandService),
        _0x3fe73e = (0, t.sequenceExecute)(_0x27f021.redoMutations, _0x24bacf);
      return _0x3fe73e.result
        ? (_0x4e1bb1
            .get(t.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0xde6988.unitId,
              redoMutations: _0x27f021.redoMutations,
              undoMutations: _0x27f021.undoMutations,
            }),
          true)
        : (qe(_0x24bacf, _0x27f021.undoMutations, _0x3fe73e.index), false);
    },
  };
function qe(_0x37deb3, _0x26dbb2, _0x34eb20) {
  let _0x510466 = _0x34eb20 < 0 ? _0x26dbb2.length : _0x34eb20;
  _0x26dbb2.slice(-_0x510466).forEach((_0x3fce38) => {
    _0x37deb3.syncExecuteCommand(_0x3fce38.id, _0x3fce38.params);
  });
}
function U(_0x606f3e) {
  "@babel/helpers - typeof";
  return (
    (U =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x401ee2) {
            return typeof _0x401ee2;
          }
        : function (_0x381512) {
            return _0x381512 &&
              typeof Symbol == "function" &&
              _0x381512.constructor === Symbol &&
              _0x381512 !== Symbol.prototype
              ? "symbol"
              : typeof _0x381512;
          }),
    U(_0x606f3e)
  );
}
function Je(_0x56b000, _0x42537f) {
  if (U(_0x56b000) != "object" || !_0x56b000) return _0x56b000;
  var _0x237760 = _0x56b000[Symbol.toPrimitive];
  if (_0x237760 !== undefined) {
    var _0x2eca09 = _0x237760.call(_0x56b000, _0x42537f || "default");
    if (U(_0x2eca09) != "object") return _0x2eca09;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x42537f === "string" ? String : Number)(_0x56b000);
}
function Ye(_0x2feae7) {
  var _0x1acdb4 = Je(_0x2feae7, "string");
  return U(_0x1acdb4) == "symbol" ? _0x1acdb4 : _0x1acdb4 + "";
}
function W(_0x164668, _0x1587b5, _0x2a6207) {
  return (
    (_0x1587b5 = Ye(_0x1587b5)) in _0x164668
      ? Object.defineProperty(_0x164668, _0x1587b5, {
          value: _0x2a6207,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x164668[_0x1587b5] = _0x2a6207),
    _0x164668
  );
}
const Xe = (0, t.createIdentifier)("board.mind-map-clipboard.service");
var Ze = class extends t.Disposable {
  constructor(..._0x7fe047) {
    (super(..._0x7fe047), W(this, "_payload", null));
  }
  setPayload(_0x1df335) {
    this._payload = _0x1df335;
  }
  getPayload() {
    return this._payload;
  }
  dispose() {
    ((this._payload = null), super.dispose());
  }
};
const Qe = l.root["fillColor"],
  $e = l.root["strokeColor"],
  et = l.root["textColor"],
  tt = l.root["fontSize"],
  nt = l.child["fillColor"],
  rt = l.child["strokeColor"],
  it = l.child["textColor"],
  at = l.child["fontSize"];
function G(_0x13f2d7, _0x4daa65) {
  let _0x5aca94 = _0x13f2d7[_0x4daa65],
    _0x491cde = z(_0x5aca94 == null ? undefined : _0x5aca94.element);
  return !_0x5aca94 || !_0x491cde ? null : { data: _0x5aca94, meta: _0x491cde };
}
function ot(_0x23a07a, _0x39eb58, _0x2ba6d6) {
  return Object.values(_0x23a07a)
    .map((_0x28901e) => {
      let _0x257481 = z(_0x28901e.element);
      return _0x257481 &&
        _0x257481.structureScopeId === _0x39eb58 &&
        _0x257481.parentNodeId === _0x2ba6d6
        ? { data: _0x28901e, meta: _0x257481 }
        : null;
    })
    .filter((_0x2443c5) => !!_0x2443c5)
    .sort(ct);
}
function st(_0x3509df) {
  var _0x208997;
  return k(
    (_0x208997 = _0x3509df[_0x3509df.length - 1]) == null
      ? undefined
      : _0x208997.meta["orderKey"],
    undefined,
  );
}
function ct(_0xe6b3f7, _0x45dc78) {
  return (
    O(_0xe6b3f7.meta["orderKey"], _0x45dc78.meta["orderKey"]) ||
    _0xe6b3f7.data["elementId"].localeCompare(_0x45dc78.data["elementId"])
  );
}
function K(_0x399ef2) {
  return _0x399ef2 ?? f.structureKind;
}
function lt(_0x273a98, _0x5603b1, _0x5ae997) {
  return _0x273a98 % 2 == 0 ? _0x5603b1 : _0x5ae997;
}
function ut(_0x120b8d, _0x2e2594, _0x1c625b) {
  return _0x120b8d === "mindmap-vertical"
    ? _0x1c625b === "top" || _0x1c625b === "bottom"
      ? _0x1c625b
      : "bottom"
    : _0x120b8d === "tree-left"
      ? "left"
      : _0x120b8d === "tree-right"
        ? "right"
        : _0x120b8d === "tree-alternate"
          ? lt(_0x2e2594, "left", "right")
          : _0x120b8d === "timeline-horizontal"
            ? lt(_0x2e2594, "top", "bottom")
            : _0x120b8d === "timeline-vertical"
              ? lt(_0x2e2594, "left", "right")
              : _0x1c625b === "left" || _0x1c625b === "right"
                ? _0x1c625b
                : "right";
}
function dt(_0x4d4e52, _0x28b07b) {
  return (
    _0x4d4e52 ||
    (_0x28b07b === "mindmap-vertical" || _0x28b07b === "timeline-horizontal"
      ? "bottom"
      : "right")
  );
}
function ft(_0x4dc12c, _0x4884b6, _0x3792a6 = f.structureKind, _0x41b15b = 0) {
  return (
    _0x4884b6 ||
    (_0x4dc12c.parentNodeId
      ? dt(_0x4dc12c.side, _0x3792a6)
      : ut(_0x3792a6, _0x41b15b))
  );
}
function pt(_0x2d6c6d, _0x196a2c, _0x534dde) {
  let _0x1991b9 = _0x2d6c6d.transform["left"] ?? 0,
    _0x3ce3ea = _0x2d6c6d.transform["top"] ?? 0,
    _0x42f3a5 = _0x2d6c6d.transform["width"] ?? m.nodeWidth,
    _0x310f8e = m.nodeWidth,
    _0x202a24 = m.nodeHeight,
    _0x286dd9 = f.horizontalGap,
    _0x1049d9 = f.siblingGap;
  return {
    left:
      _0x196a2c === "right"
        ? _0x1991b9 + _0x42f3a5 + _0x286dd9
        : _0x1991b9 - _0x286dd9 - _0x310f8e,
    top: _0x3ce3ea + _0x534dde * (_0x202a24 + _0x1049d9),
  };
}
function mt(_0x4cde22) {
  return {
    redoMutations: _0x4cde22.elements["map"]((_0x17116e) => ({
      id: e.AddBoardElementMutation["id"],
      params: {
        unitId: _0x4cde22.unitId,
        subUnitId: _0x4cde22.subUnitId,
        element: t.Tools["deepClone"](_0x17116e),
        allowLockedParent: true,
      },
    })),
    undoMutations: [..._0x4cde22.elements]
      .reverse()
      .map((_0x5a2895) => ({
        id: e.RemoveBoardElementMutation["id"],
        params: {
          unitId: _0x4cde22.unitId,
          subUnitId: _0x4cde22.subUnitId,
          elementId: _0x5a2895.id,
          allowLockedParent: true,
        },
      })),
  };
}
function q(_0x54f736, _0x22e024, _0x3ace7e, _0x323b42 = {}) {
  if (_0x3ace7e.redoMutations["length"] === 0) return true;
  let _0x1d0ad5 = _0x54f736.get(t.ICommandService),
    _0x2a1852 = (0, t.sequenceExecute)(_0x3ace7e.redoMutations, _0x1d0ad5);
  return _0x2a1852.result
    ? (_0x323b42.skipUndo ||
        _0x54f736
          .get(t.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x22e024,
            redoMutations: _0x3ace7e.redoMutations,
            undoMutations: _0x3ace7e.undoMutations,
          }),
      true)
    : (ht(_0x1d0ad5, _0x3ace7e.undoMutations, _0x2a1852.index), false);
}
function J(_0x5ac953, _0x52c042) {
  if (Object.is(_0x5ac953, _0x52c042)) return true;
  if (
    !_0x5ac953 ||
    !_0x52c042 ||
    typeof _0x5ac953 != "object" ||
    typeof _0x52c042 != "object"
  )
    return false;
  if (Array.isArray(_0x5ac953) || Array.isArray(_0x52c042))
    return (
      Array.isArray(_0x5ac953) &&
      Array.isArray(_0x52c042) &&
      _0x5ac953.length === _0x52c042.length &&
      _0x5ac953.every((_0x4ebcd1, _0xe21f2d) =>
        J(_0x4ebcd1, _0x52c042[_0xe21f2d]),
      )
    );
  let _0x5f1c0c = _0x5ac953,
    _0x1aa7c1 = _0x52c042,
    _0x3a2c0d = Object.keys(_0x5f1c0c).filter(
      (_0x393795) => _0x5f1c0c[_0x393795] !== undefined,
    ),
    _0xc82968 = Object.keys(_0x1aa7c1).filter(
      (_0x5df1de) => _0x1aa7c1[_0x5df1de] !== undefined,
    );
  return (
    _0x3a2c0d.length === _0xc82968.length &&
    _0x3a2c0d.every(
      (_0x5cbc83) =>
        Object.prototype["hasOwnProperty"].call(_0x1aa7c1, _0x5cbc83) &&
        J(_0x5f1c0c[_0x5cbc83], _0x1aa7c1[_0x5cbc83]),
    )
  );
}
function ht(_0x921eea, _0x46b3f3, _0xc3265c) {
  let _0x3c2d71 = _0xc3265c < 0 ? _0x46b3f3.length : _0xc3265c;
  _0x46b3f3.slice(-_0x3c2d71).forEach((_0x551f60) => {
    _0x921eea.syncExecuteCommand(_0x551f60.id, _0x551f60.params);
  });
}
function gt(_0x1ba93c, _0x228966) {
  var _0x4e7b63, _0x12cdae, _0x3e2d70;
  let _0x2e040a = _0x1ba93c
      .get(e.IBoardElementService)
      .getElementData(_0x228966.unitId, _0x228966.subUnitId),
    _0x59b94c = G(_0x2e040a, _0x228966.parentNodeId);
  if (!_0x59b94c) return false;
  let _0x10cfd6 = ot(
      _0x2e040a,
      _0x59b94c.meta["structureScopeId"],
      _0x228966.parentNodeId,
    ),
    _0x353cb2 = R(
      (_0x4e7b63 = _0x2e040a[_0x59b94c.meta["structureScopeId"]]) == null
        ? undefined
        : _0x4e7b63.element,
    ),
    _0x48c093 = _0x353cb2 == null ? undefined : _0x353cb2.rootNodeId,
    _0x3f62b8 = _0x48c093
      ? (0, e.resolveBoardElementWorldBounds)(_0x2e040a, _0x48c093)
      : null,
    _0x2ef469 = K(
      _0x353cb2 == null || (_0x12cdae = _0x353cb2.layout) == null
        ? undefined
        : _0x12cdae.structureKind,
    ),
    _0x2e8d93 = ft(_0x59b94c.meta, _0x228966.side, _0x2ef469, _0x10cfd6.length),
    _0x2194a6 = pt(_0x59b94c.data["element"], _0x2e8d93, _0x10cfd6.length),
    _0x412581 = Mt(
      _0x2e040a,
      _0x59b94c.meta["structureScopeId"],
      _0x228966.parentNodeId,
      _0x228966.nodeId ?? "",
      _0x228966.orderKey,
      _0x228966.referenceNodeId,
      _0x228966.placement,
    ),
    _0x12718f = Ue({
      nodeId: _0x228966.nodeId,
      connectorId: _0x228966.connectorId,
      scopeId: _0x59b94c.meta["structureScopeId"],
      parentNode: _0x59b94c.data["element"],
      orderKey: _0x412581,
      side: _0x2e8d93,
      text: _0x228966.text,
      textData: _0x228966.textData,
      branchColorKey:
        _0x59b94c.meta["parentNodeId"] === null
          ? "branch-" + _0x412581
          : _0x59b94c.meta["branchColorKey"],
      branchLineType:
        _0x353cb2 == null || (_0x3e2d70 = _0x353cb2.layout) == null
          ? undefined
          : _0x3e2d70.branchLineType,
      treeRootTrunk: M(_0x2ef469) && _0x59b94c.meta["parentNodeId"] === null,
      timelineRootStructureKind:
        N(_0x2ef469) && _0x59b94c.meta["parentNodeId"] === null
          ? _0x2ef469
          : undefined,
      left: _0x2194a6.left,
      top: _0x2194a6.top,
    });
  St(_0x12718f, _0x228966, _0x59b94c, _0x10cfd6, _0x2e040a);
  let _0x519f56 = mt({
      unitId: _0x228966.unitId,
      subUnitId: _0x228966.subUnitId,
      elements: _0x12718f.elements,
    }),
    _0x548b8f = { ..._0x2e040a };
  _0x12718f.elements["forEach"]((_0xd6b9e8) => {
    _0x548b8f[_0xd6b9e8.id] = tn(
      _0x228966.unitId,
      _0x228966.subUnitId,
      _0xd6b9e8,
    );
  });
  let _0x2a983c = Z(_0x548b8f, _0x59b94c.meta["structureScopeId"]),
    _0x293b4e =
      _0x3f62b8 && _0x48c093
        ? cn(
            _0x548b8f,
            _0x59b94c.meta["structureScopeId"],
            _0x48c093,
            _0x3f62b8,
          )
        : null;
  return q(_0x1ba93c, _0x228966.unitId, {
    redoMutations: [
      ..._0x519f56.redoMutations,
      ...((_0x2a983c == null ? undefined : _0x2a983c.redoMutations) ?? []),
      ...((_0x293b4e == null ? undefined : _0x293b4e.redoMutations) ?? []),
    ],
    undoMutations: [
      ...((_0x293b4e == null ? undefined : _0x293b4e.undoMutations) ?? []),
      ...((_0x2a983c == null ? undefined : _0x2a983c.undoMutations) ?? []),
      ..._0x519f56.undoMutations,
    ],
  });
}
function _t(
  _0x13744d,
  _0x58fd91,
  _0x37cb78,
  _0x203f43,
  _0x224781,
  _0x33b137,
  _0xca0f75 = vt(_0x13744d, _0x58fd91),
) {
  Object.values(_0x13744d)
    .map((_0x471f89) => {
      let _0x3ea5a6 = B(_0x471f89.element);
      return _0x3ea5a6 &&
        _0x3ea5a6.structureScopeId === _0x58fd91 &&
        _0x3ea5a6.parentNodeId === _0x37cb78
        ? { data: _0x471f89, meta: _0x3ea5a6 }
        : null;
    })
    .filter((_0x3ba75e) => !!_0x3ba75e)
    .forEach(({ data: _0x4c426c, meta: _0x34165f }) => {
      let _0x505c1e = G(_0x13744d, _0x34165f.childNodeId);
      _0x505c1e &&
        (Ot(_0x4c426c, _0x203f43, _0x224781, _0x33b137),
        Ot(_0x505c1e.data, _0x203f43, _0x224781, _0x33b137),
        (_0xca0f75.get(_0x505c1e.data["elementId"]) ?? []).forEach(
          (_0xd04532) => {
            Ot(_0xd04532, _0x203f43, _0x224781, _0x33b137);
          },
        ),
        _t(
          _0x13744d,
          _0x58fd91,
          _0x505c1e.data["element"].id,
          _0x203f43 && !_0x505c1e.meta["collapsed"],
          _0x224781,
          _0x33b137,
          _0xca0f75,
        ));
    });
}
function vt(_0x2e81ff, _0x1015fc) {
  let _0x52bbb7 = new Map();
  return (
    Object.values(_0x2e81ff).forEach((_0x35a535) => {
      let _0x1b204c = V(_0x35a535.element);
      if (
        (_0x1b204c == null ? undefined : _0x1b204c.structureScopeId) !==
        _0x1015fc
      )
        return;
      let _0x39d6d1 = _0x52bbb7.get(_0x1b204c.ownerNodeId);
      _0x39d6d1
        ? _0x39d6d1.push(_0x35a535)
        : _0x52bbb7.set(_0x1b204c.ownerNodeId, [_0x35a535]);
    }),
    _0x52bbb7
  );
}
function yt(
  _0x46891c,
  _0x20aeda,
  _0x5e349c,
  _0x5adaef = new Set(),
  _0x448798 = vt(_0x46891c, _0x20aeda),
) {
  return (
    _0x5adaef.add(_0x5e349c),
    (_0x448798.get(_0x5e349c) ?? []).forEach((_0x256031) => {
      _0x5adaef.add(_0x256031.elementId);
    }),
    Object.values(_0x46891c).forEach((_0x51021d) => {
      let _0x12f477 = B(_0x51021d.element);
      (_0x12f477 == null ? undefined : _0x12f477.structureScopeId) ===
        _0x20aeda &&
        _0x12f477.childNodeId === _0x5e349c &&
        _0x5adaef.add(_0x51021d.elementId);
    }),
    Object.values(_0x46891c).forEach((_0x5276ba) => {
      let _0xa25c9a = z(_0x5276ba.element);
      (_0xa25c9a == null ? undefined : _0xa25c9a.structureScopeId) ===
        _0x20aeda &&
        _0xa25c9a.parentNodeId === _0x5e349c &&
        (Object.values(_0x46891c).forEach((_0x1048d8) => {
          let _0x102be7 = B(_0x1048d8.element);
          (_0x102be7 == null ? undefined : _0x102be7.structureScopeId) ===
            _0x20aeda &&
            _0x102be7.parentNodeId === _0x5e349c &&
            _0x102be7.childNodeId === _0x5276ba.elementId &&
            _0x5adaef.add(_0x1048d8.elementId);
        }),
        yt(_0x46891c, _0x20aeda, _0x5276ba.elementId, _0x5adaef, _0x448798));
    }),
    _0x5adaef
  );
}
function bt(_0x2af4f1, _0x346512, _0x372050) {
  for (let _0x83f468 of Object.values(_0x2af4f1)) {
    let _0x3028d8 = B(_0x83f468.element);
    if (
      (_0x3028d8 == null ? undefined : _0x3028d8.structureScopeId) ===
        _0x346512 &&
      _0x3028d8.childNodeId === _0x372050
    )
      return _0x83f468;
  }
  return null;
}
function xt(_0x5e7caf, _0x1484cc, _0x172541) {
  var _0x18c81f;
  let _0x1090cf = yn(_0x1484cc, {
    nodeId: _0x1484cc.data["elementId"],
    text:
      ((_0x18c81f = _0x5e7caf.shapeData["shapeText"]) == null
        ? undefined
        : _0x18c81f.text) ?? "",
    textData: _0x172541,
  });
  return !_0x1090cf || _0x1090cf.type !== e.BoardElementType["Shape"]
    ? _0x5e7caf
    : { ..._0x5e7caf, shapeData: t.Tools["deepClone"](_0x1090cf.shapeData) };
}
function St(_0x3765be, _0x329f09, _0x97056d, _0x456464, _0x44bab2) {
  let _0x4b5336 = _0x329f09.referenceNodeId
    ? G(_0x44bab2, _0x329f09.referenceNodeId)
    : _0x97056d.meta["parentNodeId"] === null
      ? (_0x456464[0] ?? null)
      : _0x97056d;
  if (!_0x4b5336) return;
  _0x3765be.node["shapeData"] = xt(
    _0x3765be.node,
    _0x4b5336,
    _0x329f09.textData,
  ).shapeData;
  let _0xb709a1 = bt(
    _0x44bab2,
    _0x4b5336.meta["structureScopeId"],
    _0x4b5336.data["elementId"],
  );
  (_0xb709a1 == null ? undefined : _0xb709a1.element["type"]) ===
    e.BoardElementType["Connector"] &&
    (_0x3765be.connector["connectorData"].style = t.Tools["deepClone"](
      _0xb709a1.element["connectorData"].style ?? {},
    ));
}
function Ct(_0x3de1a1) {
  if (_0x3de1a1 === "dash") return [8, 6];
  if (_0x3de1a1 === "dot") return [1, 6];
}
function wt(_0xe7d111, _0x3cb808, _0x4eb609, _0x448f24) {
  try {
    let _0x21b5e3 = new n["ShapeModel"](
      _0xe7d111,
      "mind-map-node-size-probe",
      _0x3cb808,
    );
    _0x21b5e3.updateContext({ width: _0x4eb609, height: _0x448f24 });
    let _0x59bf46 = _0x21b5e3.getShapeTextRect({
      left: 0,
      top: 0,
      width: _0x4eb609,
      height: _0x448f24,
    });
    return Number.isFinite(_0x59bf46.width) && _0x59bf46.width > 0
      ? _0x59bf46.width
      : null;
  } catch {
    return null;
  }
}
function Tt(_0xef335d, _0x1dc134, _0x1f1335) {
  if (!_0x1f1335 || _0x1f1335 === _0xef335d.shapeData["shapeType"])
    return _0xef335d.transform;
  let _0x15ec1b = _0xef335d.transform["width"] ?? m.nodeWidth,
    _0x178fe0 = _0xef335d.transform["height"] ?? m.nodeHeight;
  if (
    !Number.isFinite(_0x15ec1b) ||
    !Number.isFinite(_0x178fe0) ||
    _0x15ec1b <= 0 ||
    _0x178fe0 <= 0
  )
    return _0xef335d.transform;
  let _0xa83710 = wt(
      _0xef335d.shapeData["shapeType"] ?? n.ShapeTypeEnum["RoundRect"],
      _0xef335d.shapeData,
      _0x15ec1b,
      _0x178fe0,
    ),
    _0x438e98 = wt(_0x1f1335, _0x1dc134, _0x15ec1b, _0x178fe0);
  return !_0xa83710 || !_0x438e98 || _0x438e98 >= _0xa83710
    ? _0xef335d.transform
    : {
        ..._0xef335d.transform,
        width: Math.ceil((_0x15ec1b * _0xa83710) / _0x438e98),
      };
}
function Et(_0x51ee2b) {
  return (
    (_0x51ee2b == null ? undefined : _0x51ee2b.fontSize) !== undefined ||
    (_0x51ee2b == null ? undefined : _0x51ee2b.bold) !== undefined
  );
}
function Dt(_0x479583, _0x5127d1) {
  if (!_0x5127d1) return _0x479583.transform;
  let _0x391af8 = D(_0x479583),
    _0x5c41d5 = _0x479583.transform["width"] ?? 0,
    _0x481832 = _0x479583.transform["height"] ?? 0;
  return _0x5c41d5 === _0x391af8.width && _0x481832 === _0x391af8.height
    ? _0x479583.transform
    : {
        ..._0x479583.transform,
        width: _0x391af8.width,
        height: _0x391af8.height,
      };
}
function Ot(_0x2b75b2, _0xa60d5, _0x42e2af, _0xd64673) {
  let _0x35baaf = {
    ...t.Tools["deepClone"](_0x2b75b2.element),
    visible: _0xa60d5,
  };
  (_0x42e2af.push({
    id: H.id,
    params: {
      unitId: _0x2b75b2.unitId,
      subUnitId: _0x2b75b2.subUnitId,
      elementId: _0x2b75b2.elementId,
      element: _0x35baaf,
      transform: _0x2b75b2.transform,
    },
  }),
    _0xd64673.unshift({
      id: H.id,
      params: {
        unitId: _0x2b75b2.unitId,
        subUnitId: _0x2b75b2.subUnitId,
        elementId: _0x2b75b2.elementId,
        element: t.Tools["deepClone"](_0x2b75b2.element),
        transform: _0x2b75b2.transform,
      },
    }));
}
function kt(_0x19b77e, _0x213d2b, _0x2105e2, _0x33b06b) {
  var _0x4fc1bf;
  let _0xca48cc = t.Tools["deepClone"](_0x19b77e.element);
  ((_0xca48cc.custom = {
    ...(_0xca48cc.custom ?? {}),
    mindmap: {
      ...(((_0x4fc1bf = _0xca48cc.custom) == null
        ? undefined
        : _0x4fc1bf.mindmap) ?? {}),
      collapsed: _0x213d2b,
    },
  }),
    _0x2105e2.push({
      id: H.id,
      params: {
        unitId: _0x19b77e.unitId,
        subUnitId: _0x19b77e.subUnitId,
        elementId: _0x19b77e.elementId,
        element: _0xca48cc,
        transform: _0x19b77e.transform,
      },
    }),
    _0x33b06b.unshift({
      id: H.id,
      params: {
        unitId: _0x19b77e.unitId,
        subUnitId: _0x19b77e.subUnitId,
        elementId: _0x19b77e.elementId,
        element: t.Tools["deepClone"](_0x19b77e.element),
        transform: _0x19b77e.transform,
      },
    }));
}
function Y(_0x874dc0, _0x42f8a5) {
  return {
    redoMutation: {
      id: H.id,
      params: {
        unitId: _0x874dc0.unitId,
        subUnitId: _0x874dc0.subUnitId,
        elementId: _0x874dc0.elementId,
        element: _0x42f8a5,
        transform: _0x42f8a5.transform,
      },
    },
    undoMutation: {
      id: H.id,
      params: {
        unitId: _0x874dc0.unitId,
        subUnitId: _0x874dc0.subUnitId,
        elementId: _0x874dc0.elementId,
        element: t.Tools["deepClone"](_0x874dc0.element),
        transform: _0x874dc0.transform,
      },
    },
  };
}
function At(_0x10c061, _0x23bf6d, _0x17d3c9, _0x4db333) {
  let _0x245575 = G(_0x10c061, _0x17d3c9);
  for (; _0x245575 != null && _0x245575.meta["parentNodeId"];) {
    if (_0x245575.meta["parentNodeId"] === _0x4db333) return true;
    if (
      ((_0x245575 = G(_0x10c061, _0x245575.meta["parentNodeId"])),
      (_0x245575 == null ? undefined : _0x245575.meta["structureScopeId"]) !==
        _0x23bf6d)
    )
      return false;
  }
  return false;
}
function jt(_0xc5159, _0x6832ae, _0x28b155) {
  return [...yt(_0xc5159, _0x6832ae, _0x28b155)]
    .map((_0x47c900) => _0xc5159[_0x47c900])
    .filter((_0xa85f2b) => !!_0xa85f2b);
}
function Mt(
  _0x262043,
  _0x51b557,
  _0x536824,
  _0x5b20ec,
  _0xd05050,
  _0xecb05,
  _0x8b6917,
) {
  if (_0xd05050) return _0xd05050;
  let _0x4c1af1 = ot(_0x262043, _0x51b557, _0x536824).filter(
      (_0x23ea92) => _0x23ea92.data["elementId"] !== _0x5b20ec,
    ),
    _0x319d0a = _0xecb05
      ? _0x4c1af1.findIndex(
          (_0x2c9e6f) => _0x2c9e6f.data["elementId"] === _0xecb05,
        )
      : -1;
  if (_0x319d0a >= 0 && _0x8b6917) {
    let _0x2018e0 =
        _0x8b6917 === "before"
          ? _0x4c1af1[_0x319d0a - 1]
          : _0x4c1af1[_0x319d0a],
      _0xb2d817 =
        _0x8b6917 === "before"
          ? _0x4c1af1[_0x319d0a]
          : _0x4c1af1[_0x319d0a + 1];
    return k(
      _0x2018e0 == null ? undefined : _0x2018e0.meta["orderKey"],
      _0xb2d817 == null ? undefined : _0xb2d817.meta["orderKey"],
    );
  }
  return st(_0x4c1af1);
}
function Nt(_0x1a5544, _0x356db6) {
  let _0x359921 = t.Tools["deepClone"](_0x1a5544.element),
    _0x3ad5ff = C(_0x356db6.branchLineType),
    _0x20cdf1 = z(_0x356db6.parentNode),
    _0x2d65b2 = _0x356db6.timelineRootStructureKind
      ? Pt(
          _0x356db6.elementData,
          _0x356db6.parentNode["id"],
          _0x356db6.childNode["id"],
        )
      : undefined,
    _0x52081f = _0x356db6.timelineRootStructureKind
      ? E({
          idPrefix: _0x359921.id,
          parentNode: _0x356db6.parentNode,
          childNode: _0x356db6.childNode,
          previousAxisNode: _0x2d65b2,
          structureKind: _0x356db6.timelineRootStructureKind,
          childSide: _0x356db6.side,
          branchLineType: _0x3ad5ff,
        })
      : _0x356db6.timelineHorizontalRootNodeId &&
          (_0x20cdf1 == null ? undefined : _0x20cdf1.parentNodeId) !== null
        ? ee({
            idPrefix: _0x359921.id,
            parentNode: _0x356db6.parentNode,
            childNode: _0x356db6.childNode,
            parentIsAxisNode:
              (_0x20cdf1 == null ? undefined : _0x20cdf1.parentNodeId) ===
              _0x356db6.timelineHorizontalRootNodeId,
            branchLineType: _0x3ad5ff,
          })
        : _0x356db6.timelineVerticalRootNodeId &&
            (_0x20cdf1 == null ? undefined : _0x20cdf1.parentNodeId) !== null
          ? te({
              idPrefix: _0x359921.id,
              parentNode: _0x356db6.parentNode,
              childNode: _0x356db6.childNode,
              parentIsAxisNode:
                (_0x20cdf1 == null ? undefined : _0x20cdf1.parentNodeId) ===
                _0x356db6.timelineVerticalRootNodeId,
              side: _0x356db6.side,
              branchLineType: _0x3ad5ff,
              forceTrunk: _0x356db6.forceTrunk,
            })
          : _0x356db6.treeRootTrunk
            ? T({
                idPrefix: _0x359921.id,
                parentNode: _0x356db6.parentNode,
                childNode: _0x356db6.childNode,
                side: _0x356db6.side,
                branchLineType: _0x3ad5ff,
              })
            : null,
    { startSide: _0x39e524, endSide: _0x3c0441 } =
      _0x52081f ?? y(_0x356db6.side),
    _0x2540a4 =
      (_0x52081f == null ? undefined : _0x52081f.routePoints) ??
      b({
        idPrefix: _0x359921.id,
        parentNode: _0x356db6.parentNode,
        childNode: _0x356db6.childNode,
        side: _0x356db6.side,
        forceTrunk: _0x356db6.forceTrunk,
      }),
    _0x488d21 =
      (_0x52081f == null ? undefined : _0x52081f.curveData) ??
      (_0x3ad5ff === "curve"
        ? w({
            idPrefix: _0x359921.id,
            parentNode: _0x356db6.parentNode,
            childNode: _0x356db6.childNode,
            side: _0x356db6.side,
          })
        : undefined),
    _0x15b11a =
      (_0x52081f == null ? undefined : _0x52081f.transform) ??
      x({
        parentNode: _0x356db6.parentNode,
        childNode: _0x356db6.childNode,
        side: _0x356db6.side,
        routePoints: _0x2540a4,
        curveData: _0x488d21,
      });
  return (
    (_0x359921.transform = (0, e.resolveBoardElementLocalTransformForParent)(
      _0x356db6.elementData,
      { parentId: _0x359921.parentId, worldTransform: _0x15b11a },
    )),
    (_0x359921.connectorData = {
      ..._0x359921.connectorData,
      start:
        (_0x52081f == null ? undefined : _0x52081f.startEndpoint) ??
        g(
          _0x356db6.parentNode["id"],
          _0x39e524,
          (_0x52081f == null ? undefined : _0x52081f.startPoint) ??
            h(_0x356db6.parentNode, _0x39e524),
        ),
      end:
        (_0x52081f == null ? undefined : _0x52081f.endEndpoint) ??
        g(
          _0x356db6.childNode["id"],
          _0x3c0441,
          (_0x52081f == null ? undefined : _0x52081f.endPoint) ??
            h(_0x356db6.childNode, _0x3c0441),
        ),
      routing: _0x3ad5ff === "curve" ? "curve" : "orthogonal",
      routingMode: "manual",
      waypoints: _0x3ad5ff === "curve" ? [] : _0x2540a4,
      orthogonalData:
        _0x3ad5ff === "curve"
          ? undefined
          : {
              ...(_0x359921.connectorData["orthogonalData"] ?? {}),
              routePoints: _0x2540a4,
            },
      curveData: _0x488d21,
      style: {
        ...(_0x359921.connectorData["style"] ?? {}),
        cornerStyle: _0x3ad5ff === "orthogonal" ? "miter" : "rounded",
      },
    }),
    _0x3ad5ff !== "curve" && delete _0x359921.connectorData["curveData"],
    _0x3ad5ff === "curve" && delete _0x359921.connectorData["orthogonalData"],
    _0x359921
  );
}
function Pt(_0x8358c4, _0x439d0c, _0x1e4c2b) {
  var _0x2f82d2;
  let _0x19c8ef = z(
    (_0x2f82d2 = _0x8358c4[_0x439d0c]) == null ? undefined : _0x2f82d2.element,
  );
  if (!_0x19c8ef) return;
  let _0x44ee83 = ot(_0x8358c4, _0x19c8ef.structureScopeId, _0x439d0c),
    _0x4b9252 = _0x44ee83.findIndex(
      (_0x5192e9) => _0x5192e9.data["elementId"] === _0x1e4c2b,
    );
  if (!(_0x4b9252 <= 0))
    return (
      nn(_0x8358c4, _0x44ee83[_0x4b9252 - 1].data["elementId"]) ?? undefined
    );
}
function Ft(_0x1d805a, _0x263f22, _0x43d409, _0x2a977e) {
  return Object.values(_0x1d805a).filter((_0x4e8145) => {
    let _0x186ee0 = z(_0x4e8145.element);
    return (
      (_0x186ee0 == null ? undefined : _0x186ee0.structureScopeId) ===
        _0x263f22 &&
      _0x186ee0.parentNodeId === _0x43d409 &&
      (_0x186ee0.side ?? _0x2a977e) === _0x2a977e
    );
  }).length;
}
function It(_0x2326b9, _0x5a0065) {
  var _0x229f05, _0xb86d40;
  let _0x1cee86 = z(_0x2326b9.element),
    _0x1b263c = t.Tools["deepClone"](_0x2326b9.element);
  if (
    ((_0x1b263c.parentId = _0x5a0065.scopeId),
    (_0x1b263c.custom = {
      ...(_0x1b263c.custom ?? {}),
      structured: {
        ...(((_0x229f05 = _0x1b263c.custom) == null
          ? undefined
          : _0x229f05.structured) ?? {}),
        modeId: _0x1cee86 == null ? undefined : _0x1cee86.modeId,
        semanticRole: _0x1cee86 == null ? undefined : _0x1cee86.semanticRole,
        structureScopeId: _0x5a0065.scopeId,
      },
      mindmap: {
        ...(((_0xb86d40 = _0x1b263c.custom) == null
          ? undefined
          : _0xb86d40.mindmap) ?? {}),
        parentNodeId: _0x5a0065.parentNodeId,
        orderKey: _0x5a0065.orderKey,
        collapsed:
          (_0x1cee86 == null ? undefined : _0x1cee86.collapsed) ?? false,
        ...(_0x5a0065.root
          ? null
          : {
              side:
                _0x5a0065.side ??
                (_0x1cee86 == null ? undefined : _0x1cee86.side) ??
                "right",
            }),
      },
    }),
    _0x5a0065.root &&
      (delete _0x1b263c.custom["mindmap"].side, "shapeData" in _0x1b263c))
  ) {
    var _0x5cdfa1;
    let _0x447a73 = _0x1b263c.shapeData["shapeText"] ?? {},
      _0x13e846 =
        _0x447a73.dataModel && typeof _0x447a73.dataModel == "object"
          ? t.Tools["deepClone"](_0x447a73.dataModel)
          : {},
      _0x50574d = typeof _0x447a73.text == "string" ? _0x447a73.text : "",
      _0x57a8c2 = t.HorizontalAlign["CENTER"],
      _0x1d3a3b = t.VerticalAlign["MIDDLE"],
      _0x2af892 = me({
        currentDataModel: _0x13e846,
        horizontalAlign: _0x57a8c2,
        shapeText: { ..._0x447a73, color: et, fontSize: tt },
        text: _0x50574d,
        textStyle: pe({ ..._0x447a73, color: et, fontSize: tt }, undefined),
        verticalAlign: _0x1d3a3b,
      }),
      _0xcef45e = {
        ..._0x447a73,
        ..._0x2af892,
        color: et,
        fontSize: tt,
        horizontalAlign: _0x57a8c2,
        verticalAlign: _0x1d3a3b,
      };
    ((_0x1b263c.shapeData = {
      ..._0x1b263c.shapeData,
      fill: { fillType: n.ShapeFillEnum["SolidFill"], color: Qe },
      stroke: {
        ...(_0x1b263c.shapeData["stroke"] ?? {}),
        lineStrokeType:
          ((_0x5cdfa1 = _0x1b263c.shapeData["stroke"]) == null
            ? undefined
            : _0x5cdfa1.lineStrokeType) ?? n.ShapeLineTypeEnum["SolidLine"],
        color: $e,
      },
      textRectPadding: _0x1b263c.shapeData["textRectPadding"] ?? { ...d },
      shapeText: _0xcef45e,
    }),
      (_0x1b263c.custom["mindmap"] = {
        ..._0x1b263c.custom["mindmap"],
        size: { minWidth: m.rootWidth, minHeight: m.rootHeight },
      }));
  }
  if (_0x5a0065.demoteToChild && "shapeData" in _0x1b263c) {
    var _0x4f21a0;
    let _0xf5804d = _0x1b263c.shapeData["shapeText"] ?? {},
      _0x24878e =
        _0xf5804d.dataModel && typeof _0xf5804d.dataModel == "object"
          ? t.Tools["deepClone"](_0xf5804d.dataModel)
          : {},
      _0x4c9082 = typeof _0xf5804d.text == "string" ? _0xf5804d.text : "",
      _0x587711 = t.HorizontalAlign["LEFT"],
      _0x15d706 = t.VerticalAlign["MIDDLE"],
      _0x1c6cdd = me({
        currentDataModel: _0x24878e,
        horizontalAlign: _0x587711,
        shapeText: { ..._0xf5804d, color: it, fontSize: at },
        text: _0x4c9082,
        textStyle: pe({ ..._0xf5804d, color: it, fontSize: at }, undefined),
        verticalAlign: _0x15d706,
      }),
      _0x17442b = {
        ..._0xf5804d,
        ..._0x1c6cdd,
        color: it,
        fontSize: at,
        horizontalAlign: _0x587711,
        verticalAlign: _0x15d706,
      };
    ((_0x1b263c.shapeData = {
      ..._0x1b263c.shapeData,
      fill: { fillType: n.ShapeFillEnum["SolidFill"], color: nt },
      stroke: {
        ...(_0x1b263c.shapeData["stroke"] ?? {}),
        lineStrokeType:
          ((_0x4f21a0 = _0x1b263c.shapeData["stroke"]) == null
            ? undefined
            : _0x4f21a0.lineStrokeType) ?? n.ShapeLineTypeEnum["SolidLine"],
        color: rt,
      },
      textRectPadding: _0x1b263c.shapeData["textRectPadding"] ?? { ...d },
      shapeText: _0x17442b,
    }),
      (_0x1b263c.custom["mindmap"] = {
        ..._0x1b263c.custom["mindmap"],
        size: { minWidth: m.nodeWidth, minHeight: m.nodeHeight },
      }));
  }
  return _0x1b263c;
}
function Lt(_0x2f4894, _0x833a50) {
  var _0x355bd4;
  let _0x532ff = B(_0x2f4894.element),
    _0x2b12be = t.Tools["deepClone"](_0x2f4894.element);
  if (
    ((_0x2b12be.parentId = _0x833a50.scopeId),
    (_0x2b12be.custom = {
      ...(_0x2b12be.custom ?? {}),
      structured: {
        ...(((_0x355bd4 = _0x2b12be.custom) == null
          ? undefined
          : _0x355bd4.structured) ?? {}),
        modeId: _0x532ff == null ? undefined : _0x532ff.modeId,
        semanticRole: _0x532ff == null ? undefined : _0x532ff.semanticRole,
        structureScopeId: _0x833a50.scopeId,
      },
      mindmap: {
        managed: true,
        parentNodeId: _0x833a50.parentNodeId,
        childNodeId: _0x833a50.childNodeId,
      },
    }),
    _0x833a50.updateEndpoints)
  ) {
    let { startSide: _0x353555, endSide: _0x357231 } = y(
      _0x833a50.side ?? "right",
    );
    _0x2b12be.connectorData = {
      ..._0x2b12be.connectorData,
      start: g(_0x833a50.parentNodeId, _0x353555),
      end: g(_0x833a50.childNodeId, _0x357231),
    };
  }
  return _0x2b12be;
}
function Rt(_0x52cb7b, _0x1c6006, _0x25cc87, _0x3f550e, _0x19498c, _0x235014) {
  _0x1c6006.forEach((_0xe23640) => {
    let _0x106d38 = z(_0xe23640.element);
    if (_0x106d38) {
      let _0x5d1429 = It(_0xe23640, {
          scopeId: _0x25cc87.scopeId,
          parentNodeId:
            _0xe23640.elementId === _0x25cc87.rootNodeId
              ? _0x25cc87.rootParentNodeId
              : _0x106d38.parentNodeId,
          orderKey:
            _0xe23640.elementId === _0x25cc87.rootNodeId
              ? _0x25cc87.rootOrderKey
              : _0x106d38.orderKey,
          side:
            _0xe23640.elementId === _0x25cc87.rootNodeId
              ? _0x25cc87.rootSide
              : _0x106d38.side,
          root:
            _0xe23640.elementId === _0x25cc87.rootNodeId &&
            _0x25cc87.rootIsDetached,
          demoteToChild:
            _0xe23640.elementId === _0x25cc87.rootNodeId &&
            _0x25cc87.rootIsDemoted,
        }),
        _0x3644e3 = Y(_0xe23640, _0x5d1429);
      (_0x3f550e.push(_0x3644e3.redoMutation),
        _0x19498c.unshift(_0x3644e3.undoMutation),
        _0x235014 &&
          (_0x235014[_0xe23640.elementId] = X(_0xe23640, _0x5d1429)));
      return;
    }
    let _0x362a51 = B(_0xe23640.element);
    if (_0x362a51 && _0xe23640.elementId !== _0x25cc87.incomingConnectorId) {
      let _0x440373 = G(_0x52cb7b, _0x362a51.childNodeId),
        _0x456d0b = Lt(_0xe23640, {
          scopeId: _0x25cc87.scopeId,
          parentNodeId: _0x362a51.parentNodeId,
          childNodeId: _0x362a51.childNodeId,
          side: _0x440373 == null ? undefined : _0x440373.meta["side"],
        }),
        _0x4e37fb = Y(_0xe23640, _0x456d0b);
      (_0x3f550e.push(_0x4e37fb.redoMutation),
        _0x19498c.unshift(_0x4e37fb.undoMutation),
        _0x235014 &&
          (_0x235014[_0xe23640.elementId] = X(_0xe23640, _0x456d0b)));
      return;
    }
    let _0xd1b201 = V(_0xe23640.element);
    if (_0xd1b201) {
      var _0x45de3e, _0x4ba517;
      let _0x5f180f = t.Tools["deepClone"](_0xe23640.element);
      ((_0x5f180f.parentId = _0x25cc87.scopeId),
        (_0x5f180f.custom = {
          ...(_0x5f180f.custom ?? {}),
          structured: {
            ...(((_0x45de3e = _0x5f180f.custom) == null
              ? undefined
              : _0x45de3e.structured) ?? {}),
            modeId: _0xd1b201.modeId,
            semanticRole: _0xd1b201.semanticRole,
            structureScopeId: _0x25cc87.scopeId,
          },
          mindmap: {
            ...(((_0x4ba517 = _0x5f180f.custom) == null
              ? undefined
              : _0x4ba517.mindmap) ?? {}),
            ownerNodeId: _0xd1b201.ownerNodeId,
          },
        }));
      let _0x51ca3a = Y(_0xe23640, _0x5f180f);
      (_0x3f550e.push(_0x51ca3a.redoMutation),
        _0x19498c.unshift(_0x51ca3a.undoMutation),
        _0x235014 &&
          (_0x235014[_0xe23640.elementId] = X(_0xe23640, _0x5f180f)));
    }
  });
}
function zt(_0x385fd4, _0x2c7e5a, _0x5ec0b4, _0x1c7905, _0x1b65da) {
  _0x5ec0b4
    .filter(
      (_0x7e0600, _0x2a0d5e) => _0x5ec0b4.indexOf(_0x7e0600) === _0x2a0d5e,
    )
    .forEach((_0x22d63c) => {
      var _0x2ff5b7, _0x297077;
      let _0x335540 =
          (_0x2ff5b7 = R(
            (_0x297077 = _0x2c7e5a[_0x22d63c]) == null
              ? undefined
              : _0x297077.element,
          )) == null
            ? undefined
            : _0x2ff5b7.rootNodeId,
        _0x28457e = _0x335540
          ? (0, e.resolveBoardElementWorldBounds)(_0x385fd4, _0x335540)
          : null,
        _0x2629b8 = Z(_0x2c7e5a, _0x22d63c);
      if (!_0x2629b8) return;
      let _0xce6e3a =
        _0x28457e && _0x335540
          ? cn(_0x2c7e5a, _0x22d63c, _0x335540, _0x28457e)
          : null;
      (_0x1c7905.push(
        ..._0x2629b8.redoMutations,
        ...((_0xce6e3a == null ? undefined : _0xce6e3a.redoMutations) ?? []),
      ),
        _0x1b65da.unshift(
          ...((_0xce6e3a == null ? undefined : _0xce6e3a.undoMutations) ?? []),
          ..._0x2629b8.undoMutations,
        ));
    });
}
function Bt(_0x1812b5) {
  let _0xf6d23a = _0x1812b5
      .filter((_0x1100cf) => !!z(_0x1100cf.element))
      .map((_0x67d995) => ({
        left: _0x67d995.element["transform"].left ?? 0,
        top: _0x67d995.element["transform"].top ?? 0,
        right:
          (_0x67d995.element["transform"].left ?? 0) +
          (_0x67d995.element["transform"].width ?? m.nodeWidth),
        bottom:
          (_0x67d995.element["transform"].top ?? 0) +
          (_0x67d995.element["transform"].height ?? m.nodeHeight),
      })),
    _0x4ac71c = m.containerPadding,
    _0x48e3e1 =
      Math.min(..._0xf6d23a.map((_0x270878) => _0x270878.left)) - _0x4ac71c,
    _0x9d10b8 =
      Math.min(..._0xf6d23a.map((_0x588af1) => _0x588af1.top)) - _0x4ac71c,
    _0x58242d =
      Math.max(..._0xf6d23a.map((_0x1cefcf) => _0x1cefcf.right)) + _0x4ac71c,
    _0x53abcd =
      Math.max(..._0xf6d23a.map((_0x420eb8) => _0x420eb8.bottom)) + _0x4ac71c;
  return {
    left: _0x48e3e1,
    top: _0x9d10b8,
    width: _0x58242d - _0x48e3e1,
    height: _0x53abcd - _0x9d10b8,
  };
}
function Vt(_0x36230c, _0x4a314c) {
  let _0x548064 = z(_0x36230c.element);
  if (
    (_0x548064 == null ? undefined : _0x548064.structureScopeId) === _0x4a314c
  )
    return true;
  let _0x563858 = B(_0x36230c.element);
  if (
    (_0x563858 == null ? undefined : _0x563858.structureScopeId) === _0x4a314c
  )
    return true;
  let _0x5a80f6 = V(_0x36230c.element);
  return (
    (_0x5a80f6 == null ? undefined : _0x5a80f6.structureScopeId) ===
      _0x4a314c || _0x36230c.element["id"] === _0x4a314c
  );
}
function Ht(_0x50d93c, _0xa553af, _0x9bf65e) {
  let _0x1644ed = t.Tools["deepClone"](_0x50d93c.element);
  return (
    (_0x1644ed.transform = {
      ..._0x1644ed.transform,
      left: (_0x1644ed.transform["left"] ?? 0) + _0xa553af,
      top: (_0x1644ed.transform["top"] ?? 0) + _0x9bf65e,
    }),
    _0x1644ed
  );
}
function Ut(_0x346297, _0x349fcd) {
  let _0x35396e = _0x346297[_0x349fcd.scopeId],
    _0x1fb44b = R(_0x35396e == null ? undefined : _0x35396e.element);
  if (!_0x35396e || !_0x1fb44b) return null;
  let _0x317c83 = [],
    _0x4d9f75 = [],
    _0x505b61 = { ..._0x346297 },
    _0x86c73c = new Set(_0x349fcd.excludeElementIds ?? []),
    _0x37ad50 = Ht(_0x35396e, _0x349fcd.deltaX, _0x349fcd.deltaY),
    _0x267050 = Y(_0x35396e, _0x37ad50);
  return (
    _0x317c83.push(_0x267050.redoMutation),
    _0x4d9f75.unshift(_0x267050.undoMutation),
    (_0x505b61[_0x35396e.elementId] = X(_0x35396e, _0x37ad50)),
    _0x349fcd.preserveExcludedWorldTransforms &&
      Object.values(_0x346297)
        .filter(
          (_0x5c41e0) =>
            _0x86c73c.has(_0x5c41e0.elementId) &&
            Vt(_0x5c41e0, _0x349fcd.scopeId) &&
            Wt(_0x5c41e0, _0x346297, _0x349fcd.scopeId, _0x86c73c),
        )
        .forEach((_0x10fe8c) => {
          let _0x1846d5 = Ht(_0x10fe8c, -_0x349fcd.deltaX, -_0x349fcd.deltaY),
            _0x55691f = Y(_0x10fe8c, _0x1846d5);
          (_0x317c83.push(_0x55691f.redoMutation),
            _0x4d9f75.unshift(_0x55691f.undoMutation),
            (_0x505b61[_0x10fe8c.elementId] = X(_0x10fe8c, _0x1846d5)));
        }),
    Object.values(_0x346297).forEach((_0x5a6e8e) => {
      var _0xb3f9ab, _0x1a18b8, _0x1d49ed, _0x4aa2c0, _0x116ff9;
      let _0x592f8e = B(_0x5a6e8e.element);
      if (
        (_0x592f8e == null ? undefined : _0x592f8e.structureScopeId) !==
          _0x349fcd.scopeId ||
        !("connectorData" in _0x5a6e8e.element)
      )
        return;
      let _0x1df26d = nn(_0x505b61, _0x592f8e.parentNodeId),
        _0x54dab5 = nn(_0x505b61, _0x592f8e.childNodeId),
        _0x38b9a1 = z(_0x54dab5);
      if (!_0x1df26d || !_0x54dab5 || !_0x38b9a1) return;
      let _0x2cd92e = Nt(_0x5a6e8e, {
          parentNode: _0x1df26d,
          childNode: _0x54dab5,
          side: _0x38b9a1.side ?? "right",
          elementData: _0x505b61,
          branchLineType:
            (_0xb3f9ab = _0x1fb44b.layout) == null
              ? undefined
              : _0xb3f9ab.branchLineType,
          treeRootTrunk:
            M(
              (_0x1a18b8 = _0x1fb44b.layout) == null
                ? undefined
                : _0x1a18b8.structureKind,
            ) && _0x592f8e.parentNodeId === _0x1fb44b.rootNodeId,
          timelineRootStructureKind:
            N(
              (_0x1d49ed = _0x1fb44b.layout) == null
                ? undefined
                : _0x1d49ed.structureKind,
            ) && _0x592f8e.parentNodeId === _0x1fb44b.rootNodeId
              ? _0x1fb44b.layout["structureKind"]
              : undefined,
          timelineHorizontalRootNodeId:
            ((_0x4aa2c0 = _0x1fb44b.layout) == null
              ? undefined
              : _0x4aa2c0.structureKind) === "timeline-horizontal"
              ? _0x1fb44b.rootNodeId
              : undefined,
          timelineVerticalRootNodeId:
            ((_0x116ff9 = _0x1fb44b.layout) == null
              ? undefined
              : _0x116ff9.structureKind) === "timeline-vertical"
              ? _0x1fb44b.rootNodeId
              : undefined,
          forceTrunk:
            Ft(
              _0x505b61,
              _0x592f8e.structureScopeId,
              _0x592f8e.parentNodeId,
              _0x38b9a1.side ?? "right",
            ) > 1,
        }),
        _0xc5db4b = Y(_0x5a6e8e, _0x2cd92e);
      (_0x317c83.push(_0xc5db4b.redoMutation),
        _0x4d9f75.unshift(_0xc5db4b.undoMutation),
        (_0x505b61[_0x5a6e8e.elementId] = X(_0x5a6e8e, _0x2cd92e)));
    }),
    { redoMutations: _0x317c83, undoMutations: _0x4d9f75 }
  );
}
function Wt(_0x588713, _0x5976e3, _0x4f415a, _0x470b5c) {
  let _0x111652 = _0x588713.element["parentId"];
  for (; _0x111652;) {
    let _0xe471c = _0x5976e3[_0x111652];
    if (!_0xe471c) return false;
    if (Vt(_0xe471c, _0x4f415a) && !_0x470b5c.has(_0xe471c.elementId))
      return true;
    _0x111652 = _0xe471c.element["parentId"];
  }
  return false;
}
function Gt(_0x53a67a, _0x10c6aa, _0x283df6) {
  let _0xb69c03 = jt(_0x53a67a, _0x10c6aa, _0x283df6),
    _0x2198c2 = new Set(
      _0xb69c03
        .filter((_0x456a78) => !!z(_0x456a78.element))
        .map((_0x4ae0ef) => _0x4ae0ef.elementId),
    );
  return _0xb69c03
    .filter((_0x5daae3) => {
      if (z(_0x5daae3.element)) return true;
      let _0x391784 = B(_0x5daae3.element);
      if (
        _0x391784 &&
        _0x2198c2.has(_0x391784.parentNodeId) &&
        _0x2198c2.has(_0x391784.childNodeId)
      )
        return true;
      let _0xdbb5fa = V(_0x5daae3.element);
      return !!_0xdbb5fa && _0x2198c2.has(_0xdbb5fa.ownerNodeId);
    })
    .map((_0x5cf1e6) => t.Tools["deepClone"](_0x5cf1e6.element));
}
function Kt(_0x1c07ed, _0x22dd99) {
  return (
    (_0x22dd99 == null ? undefined : _0x22dd99[_0x1c07ed]) ??
    (0, t.generateRandomId)(6)
  );
}
function qt(_0x5d847d, _0x24cb94) {
  if (_0x5d847d.kind === "free") return _0x5d847d;
  let _0x2bc9d8 = _0x24cb94.get(_0x5d847d.shapeId);
  return _0x2bc9d8 ? { ..._0x5d847d, shapeId: _0x2bc9d8 } : _0x5d847d;
}
function Jt(_0x2ec4b9, _0x20453b) {
  var _0x1a871d, _0x25bfdc;
  let _0x1dd86b = z(_0x2ec4b9),
    _0x4b45d3 = t.Tools["deepClone"](_0x2ec4b9);
  return (
    (_0x4b45d3.id = _0x20453b.id),
    (_0x4b45d3.parentId = _0x20453b.scopeId),
    (_0x4b45d3.transform = {
      ..._0x4b45d3.transform,
      left: (_0x4b45d3.transform["left"] ?? 0) + _0x20453b.deltaX,
      top: (_0x4b45d3.transform["top"] ?? 0) + _0x20453b.deltaY,
    }),
    (_0x4b45d3.custom = {
      ...(_0x4b45d3.custom ?? {}),
      structured: {
        ...(((_0x1a871d = _0x4b45d3.custom) == null
          ? undefined
          : _0x1a871d.structured) ?? {}),
        modeId: _0x1dd86b == null ? undefined : _0x1dd86b.modeId,
        semanticRole: _0x1dd86b == null ? undefined : _0x1dd86b.semanticRole,
        structureScopeId: _0x20453b.scopeId,
      },
      mindmap: {
        ...(((_0x25bfdc = _0x4b45d3.custom) == null
          ? undefined
          : _0x25bfdc.mindmap) ?? {}),
        parentNodeId: _0x20453b.parentNodeId,
        orderKey: _0x20453b.orderKey,
        collapsed:
          (_0x1dd86b == null ? undefined : _0x1dd86b.collapsed) ?? false,
        ...(_0x20453b.parentNodeId === null
          ? null
          : {
              side:
                _0x20453b.side ??
                (_0x1dd86b == null ? undefined : _0x1dd86b.side) ??
                "right",
            }),
      },
    }),
    _0x20453b.parentNodeId === null && delete _0x4b45d3.custom["mindmap"].side,
    _0x4b45d3
  );
}
function Yt(_0x599530, _0x547d24) {
  var _0x4a7daf;
  let _0x947484 = B(_0x599530),
    _0x32a39d = (0, e.offsetBoardConnectorGeometry)(
      t.Tools["deepClone"](_0x599530),
      { x: _0x547d24.deltaX, y: _0x547d24.deltaY },
    );
  return (
    (_0x32a39d.id = _0x547d24.id),
    (_0x32a39d.parentId = _0x547d24.scopeId),
    (_0x32a39d.transform = {
      ..._0x32a39d.transform,
      left: (_0x32a39d.transform["left"] ?? 0) + _0x547d24.deltaX,
      top: (_0x32a39d.transform["top"] ?? 0) + _0x547d24.deltaY,
    }),
    (_0x32a39d.connectorData = {
      ..._0x32a39d.connectorData,
      start: qt(_0x32a39d.connectorData["start"], _0x547d24.idMap),
      end: qt(_0x32a39d.connectorData["end"], _0x547d24.idMap),
    }),
    (_0x32a39d.custom = {
      ...(_0x32a39d.custom ?? {}),
      structured: {
        ...(((_0x4a7daf = _0x32a39d.custom) == null
          ? undefined
          : _0x4a7daf.structured) ?? {}),
        modeId: _0x947484 == null ? undefined : _0x947484.modeId,
        semanticRole: _0x947484 == null ? undefined : _0x947484.semanticRole,
        structureScopeId: _0x547d24.scopeId,
      },
      mindmap: {
        managed: true,
        parentNodeId: _0x547d24.parentNodeId,
        childNodeId: _0x547d24.childNodeId,
      },
    }),
    _0x32a39d
  );
}
function Xt(_0x11e4de, _0x1ef2bd) {
  var _0x11430c, _0x111e33;
  let _0x465bd2 = V(_0x11e4de),
    _0x4f53ff = t.Tools["deepClone"](_0x11e4de);
  return (
    (_0x4f53ff.id = _0x1ef2bd.id),
    (_0x4f53ff.parentId = _0x1ef2bd.scopeId),
    (_0x4f53ff.transform = {
      ..._0x4f53ff.transform,
      left: (_0x4f53ff.transform["left"] ?? 0) + _0x1ef2bd.deltaX,
      top: (_0x4f53ff.transform["top"] ?? 0) + _0x1ef2bd.deltaY,
    }),
    (_0x4f53ff.custom = {
      ...(_0x4f53ff.custom ?? {}),
      structured: {
        ...(((_0x11430c = _0x4f53ff.custom) == null
          ? undefined
          : _0x11430c.structured) ?? {}),
        modeId: _0x465bd2 == null ? undefined : _0x465bd2.modeId,
        semanticRole: _0x465bd2 == null ? undefined : _0x465bd2.semanticRole,
        structureScopeId: _0x1ef2bd.scopeId,
      },
      mindmap: {
        ...(((_0x111e33 = _0x4f53ff.custom) == null
          ? undefined
          : _0x111e33.mindmap) ?? {}),
        ownerNodeId: _0x1ef2bd.ownerNodeId,
      },
    }),
    _0x4f53ff
  );
}
function Zt(_0x1e5ee6, _0x3fd7f1) {
  return (
    Object.values(_0x1e5ee6)
      .map((_0x5e5d76) => {
        let _0x5315e1 = z(_0x5e5d76.element);
        return (_0x5315e1 == null ? undefined : _0x5315e1.structureScopeId) ===
          _0x3fd7f1 && _0x5315e1.parentNodeId === null
          ? { data: _0x5e5d76, meta: _0x5315e1 }
          : null;
      })
      .find((_0x37178f) => !!_0x37178f) ?? null
  );
}
function Qt(_0x22d476) {
  return _0x22d476.element["transform"].height ?? m.nodeHeight;
}
function $t(_0x53dfe2) {
  return _0x53dfe2.element["transform"].width ?? m.nodeWidth;
}
function en(_0x138d52, _0x3f8e85, _0x2af0e7) {
  let _0x3a1a25 = t.Tools["deepClone"](_0x138d52.element);
  return (
    (_0x3a1a25.transform = {
      ..._0x3a1a25.transform,
      left: _0x3f8e85,
      top: _0x2af0e7,
    }),
    _0x3a1a25
  );
}
function X(_0x292b15, _0x34d59e) {
  return { ..._0x292b15, element: _0x34d59e, transform: _0x34d59e.transform };
}
function tn(_0x8feef7, _0x5286c9, _0x38cce0) {
  return {
    unitId: _0x8feef7,
    subUnitId: _0x5286c9,
    elementId: _0x38cce0.id,
    element: _0x38cce0,
    transform: _0x38cce0.transform,
    hidden: _0x38cce0.visible === false,
  };
}
function nn(_0x244a5b, _0x5fa3c2) {
  var _0x33d660;
  let _0x29b1a1 = _0x244a5b[_0x5fa3c2],
    _0x21c905 = z(_0x29b1a1 == null ? undefined : _0x29b1a1.element);
  if (!_0x29b1a1 || !_0x21c905) return null;
  let _0x44ec8b =
    (_0x33d660 = (0, e.resolveBoardElementWorldTransform)(
      _0x244a5b,
      _0x5fa3c2,
    )) == null
      ? undefined
      : _0x33d660.worldTransform;
  return _0x44ec8b
    ? {
        ..._0x29b1a1.element,
        transform: { ...(_0x29b1a1.element["transform"] ?? {}), ..._0x44ec8b },
      }
    : _0x29b1a1.element;
}
function rn(_0x2f7a60, _0x27ea7a, _0x1e2173) {
  return {
    id: _0x27ea7a.data["elementId"],
    parentId: _0x27ea7a.meta["parentNodeId"],
    side: _0x27ea7a.meta["side"],
    collapsed: _0x27ea7a.meta["collapsed"],
    width: $t(_0x27ea7a.data),
    height: Qt(_0x27ea7a.data),
    children: ot(
      _0x2f7a60,
      _0x27ea7a.meta["structureScopeId"],
      _0x27ea7a.data["elementId"],
    ).map((_0x4cbaee) => rn(_0x2f7a60, _0x4cbaee, _0x1e2173)),
  };
}
function an(_0x1fdea8) {
  let _0x20c011 = _0x1fdea8.filter((_0x117838) => !!z(_0x117838)),
    _0x5c6475 = m.containerPadding,
    _0x1d7a69 =
      Math.min(
        ..._0x20c011.map((_0x29cfa5) => _0x29cfa5.transform["left"] ?? 0),
      ) - _0x5c6475,
    _0x55ca85 =
      Math.min(
        ..._0x20c011.map((_0x255dbd) => _0x255dbd.transform["top"] ?? 0),
      ) - _0x5c6475,
    _0x5da67d =
      Math.max(
        ..._0x20c011.map(
          (_0x43a9ac) =>
            (_0x43a9ac.transform["left"] ?? 0) +
            (_0x43a9ac.transform["width"] ?? m.nodeWidth),
        ),
      ) + _0x5c6475,
    _0x41ff2c =
      Math.max(
        ..._0x20c011.map(
          (_0x30d6de) =>
            (_0x30d6de.transform["top"] ?? 0) +
            (_0x30d6de.transform["height"] ?? m.nodeHeight),
        ),
      ) + _0x5c6475;
  return {
    left: _0x1d7a69,
    top: _0x55ca85,
    width: _0x5da67d - _0x1d7a69,
    height: _0x41ff2c - _0x55ca85,
  };
}
function on(_0x503477, _0xa67652) {
  var _0x129c13;
  let _0x47506b = Zt(_0x503477, _0xa67652),
    _0x302e92 = _0x503477[_0xa67652];
  if (!_0x47506b || !_0x302e92) return null;
  let _0x2d6101 = R(_0x302e92.element),
    _0x489861 = (_0x2d6101 == null ? undefined : _0x2d6101.layout) ?? f,
    _0x5a02c2 = _0x47506b.data["element"].transform["left"] ?? 0,
    _0x2746ba = _0x47506b.data["element"].transform["top"] ?? 0,
    _0x199917 =
      ((_0x129c13 = (0, e.resolveBoardElementWorldTransform)(
        _0x503477,
        _0xa67652,
      )) == null
        ? undefined
        : _0x129c13.worldTransform) ?? _0x302e92.element["transform"],
    _0x13f32b = _0x199917.left ?? 0,
    _0x1fc12b = _0x199917.top ?? 0,
    _0xfddbce = je(
      rn(_0x503477, _0x47506b, {
        rootNodeId: _0x2d6101 == null ? undefined : _0x2d6101.rootNodeId,
        structureKind: _0x489861.structureKind,
      }),
      {
        rootLeft: _0x5a02c2,
        rootTop: _0x2746ba,
        structureKind: _0x489861.structureKind,
        horizontalGap: _0x489861.horizontalGap,
        siblingGap: _0x489861.siblingGap,
      },
    ),
    _0x349558 = Object.values(_0x503477).filter((_0x3fe1af) => {
      let _0x410b04 = z(_0x3fe1af.element);
      return (
        (_0x410b04 == null ? undefined : _0x410b04.structureScopeId) ===
          _0xa67652 && _0x3fe1af.element["visible"] !== false
      );
    }),
    _0x2605bc = _0x349558.map((_0x10ee5e) => {
      let _0x382a83 = _0xfddbce.get(_0x10ee5e.elementId);
      return _0x382a83
        ? en(_0x10ee5e, _0x13f32b + _0x382a83.left, _0x1fc12b + _0x382a83.top)
        : _0x10ee5e.element;
    });
  if (!_0x2605bc.length) return null;
  let _0x21dac2 = t.Tools["deepClone"](_0x302e92.element),
    _0x14e780 = an(_0x2605bc);
  _0x21dac2.transform = (0, e.resolveBoardElementLocalTransformForParent)(
    _0x503477,
    {
      parentId: _0x21dac2.parentId,
      worldTransform: { ..._0x21dac2.transform, ..._0x14e780 },
    },
  );
  let _0x480696 = { ..._0x503477 };
  _0x480696[_0xa67652] = X(_0x302e92, _0x21dac2);
  let _0x1a0429 = [];
  return (
    _0x349558.forEach((_0x326337) => {
      let _0x34cfb2 = _0xfddbce.get(_0x326337.elementId);
      if (!_0x34cfb2) return;
      let _0x2eed78 = en(
        _0x326337,
        _0x13f32b + _0x34cfb2.left,
        _0x1fc12b + _0x34cfb2.top,
      );
      ((_0x2eed78.transform = (0, e.resolveBoardElementLocalTransformForParent)(
        _0x480696,
        {
          parentId: _0x2eed78.parentId,
          worldTransform: { ..._0x2eed78.transform },
        },
      )),
        _0x1a0429.push(_0x2eed78),
        (_0x480696[_0x326337.elementId] = X(_0x326337, _0x2eed78)));
    }),
    Object.values(_0x503477).forEach((_0x279f92) => {
      var _0x1fce93, _0x18510b;
      let _0xd9419f = V(_0x279f92.element);
      if (
        (_0xd9419f == null ? undefined : _0xd9419f.structureScopeId) !==
        _0xa67652
      )
        return;
      let _0x154d97 = _0x480696[_0xd9419f.ownerNodeId],
        _0x4edbca =
          (_0x1fce93 = (0, e.resolveBoardElementWorldTransform)(
            _0x480696,
            _0xd9419f.ownerNodeId,
          )) == null
            ? undefined
            : _0x1fce93.worldTransform,
        _0x3ae9d3 =
          (_0x18510b = (0, e.resolveBoardElementWorldTransform)(
            _0x503477,
            _0x279f92.elementId,
          )) == null
            ? undefined
            : _0x18510b.worldTransform;
      if (!_0x154d97 || !_0x4edbca || !_0x3ae9d3) return;
      let _0x455d1e = t.Tools["deepClone"](_0x279f92.element);
      ((_0x455d1e.visible = _0x154d97.element["visible"]),
        (_0x455d1e.transform = (0,
        e.resolveBoardElementLocalTransformForParent)(_0x480696, {
          parentId: _0x455d1e.parentId,
          worldTransform: {
            ..._0x3ae9d3,
            left: (_0x4edbca.left ?? 0) + _0xd9419f.offsetX,
            top: (_0x4edbca.top ?? 0) + _0xd9419f.offsetY,
          },
        })),
        _0x1a0429.push(_0x455d1e),
        (_0x480696[_0x279f92.elementId] = X(_0x279f92, _0x455d1e)));
    }),
    Object.values(_0x503477).forEach((_0x59eee9) => {
      let _0x22e432 = B(_0x59eee9.element);
      if (
        (_0x22e432 == null ? undefined : _0x22e432.structureScopeId) !==
          _0xa67652 ||
        !("connectorData" in _0x59eee9.element)
      )
        return;
      let _0x50369e = nn(_0x480696, _0x22e432.parentNodeId),
        _0x4dd5bd = nn(_0x480696, _0x22e432.childNodeId),
        _0x13f024 = z(_0x4dd5bd);
      if (!_0x50369e || !_0x4dd5bd || !_0x13f024) return;
      let _0x37dea8 = Nt(_0x59eee9, {
        parentNode: _0x50369e,
        childNode: _0x4dd5bd,
        side: _0x13f024.side ?? "right",
        elementData: _0x480696,
        branchLineType: _0x489861.branchLineType,
        treeRootTrunk:
          M(_0x489861.structureKind) &&
          _0x22e432.parentNodeId ===
            (_0x2d6101 == null ? undefined : _0x2d6101.rootNodeId),
        timelineRootStructureKind:
          N(_0x489861.structureKind) &&
          _0x22e432.parentNodeId ===
            (_0x2d6101 == null ? undefined : _0x2d6101.rootNodeId)
            ? _0x489861.structureKind
            : undefined,
        timelineHorizontalRootNodeId:
          _0x489861.structureKind === "timeline-horizontal"
            ? _0x2d6101 == null
              ? undefined
              : _0x2d6101.rootNodeId
            : undefined,
        timelineVerticalRootNodeId:
          _0x489861.structureKind === "timeline-vertical"
            ? _0x2d6101 == null
              ? undefined
              : _0x2d6101.rootNodeId
            : undefined,
        forceTrunk:
          Ft(
            _0x480696,
            _0x22e432.structureScopeId,
            _0x22e432.parentNodeId,
            _0x13f024.side ?? "right",
          ) > 1,
      });
      (_0x1a0429.push(_0x37dea8),
        (_0x480696[_0x59eee9.elementId] = X(_0x59eee9, _0x37dea8)));
    }),
    _0x1a0429.push(_0x21dac2),
    _0x1a0429
  );
}
function sn(_0x4df1dd, _0x20d686) {
  let _0x3fb821 = on(_0x4df1dd, _0x20d686);
  if (!_0x3fb821) return null;
  let _0x291193 = { ..._0x4df1dd };
  return (
    _0x3fb821.forEach((_0x3a8d86) => {
      let _0x3c554e = _0x4df1dd[_0x3a8d86.id];
      _0x3c554e && (_0x291193[_0x3a8d86.id] = X(_0x3c554e, _0x3a8d86));
    }),
    _0x291193
  );
}
function cn(_0xc1a073, _0x3cc3a4, _0x28d29e, _0x1867ce) {
  let _0x403c5b = sn(_0xc1a073, _0x3cc3a4);
  if (!_0x403c5b) return null;
  let _0x3ebc3e = (0, e.resolveBoardElementWorldBounds)(_0x403c5b, _0x28d29e);
  if (!_0x3ebc3e) return null;
  let _0x3050bc = _0x1867ce.left - _0x3ebc3e.left,
    _0x4e7389 = _0x1867ce.top - _0x3ebc3e.top;
  return _0x3050bc === 0 && _0x4e7389 === 0
    ? null
    : Ut(_0x403c5b, {
        scopeId: _0x3cc3a4,
        deltaX: _0x3050bc,
        deltaY: _0x4e7389,
      });
}
function Z(_0x428e59, _0x114ab0) {
  let _0x35a241 = on(_0x428e59, _0x114ab0);
  if (!_0x35a241) return null;
  let _0x5d04c5 = [],
    _0x4736bd = [];
  return (
    _0x35a241.forEach((_0x4ca2c9) => {
      let _0x401a78 = _0x428e59[_0x4ca2c9.id];
      if (!_0x401a78 || J(_0x401a78.element, _0x4ca2c9)) return;
      let _0x398f13 = Y(_0x401a78, _0x4ca2c9);
      (_0x5d04c5.push(_0x398f13.redoMutation),
        _0x4736bd.unshift(_0x398f13.undoMutation));
    }),
    { redoMutations: _0x5d04c5, undoMutations: _0x4736bd }
  );
}
function ln(_0x3dd0c5) {
  let _0x1f7e66 = _0x3dd0c5.elementOrder["filter"]((_0x30c33a) => {
    var _0x270213, _0x50dae4, _0x98657b, _0x3be00c, _0x3b3ed5;
    let _0x4d1c95 =
      (_0x270213 = _0x3dd0c5.elementData[_0x30c33a]) == null
        ? undefined
        : _0x270213.element;
    return (
      ((_0x50dae4 = R(_0x4d1c95)) == null
        ? undefined
        : _0x50dae4.structureScopeId) === _0x3dd0c5.scopeId ||
      ((_0x98657b = z(_0x4d1c95)) == null
        ? undefined
        : _0x98657b.structureScopeId) === _0x3dd0c5.scopeId ||
      ((_0x3be00c = B(_0x4d1c95)) == null
        ? undefined
        : _0x3be00c.structureScopeId) === _0x3dd0c5.scopeId ||
      ((_0x3b3ed5 = V(_0x4d1c95)) == null
        ? undefined
        : _0x3b3ed5.structureScopeId) === _0x3dd0c5.scopeId
    );
  });
  if (!_0x1f7e66.length) return null;
  let _0x32719e = _0x1f7e66.filter((_0x509d8a) => {
      var _0x4fc3d5;
      return !!R(
        (_0x4fc3d5 = _0x3dd0c5.elementData[_0x509d8a]) == null
          ? undefined
          : _0x4fc3d5.element,
      );
    }),
    _0x45b867 = _0x1f7e66.filter((_0x3c54a1) => {
      var _0x1361df;
      return !!B(
        (_0x1361df = _0x3dd0c5.elementData[_0x3c54a1]) == null
          ? undefined
          : _0x1361df.element,
      );
    }),
    _0x23f95c = _0x1f7e66.filter((_0x2d29fb) => {
      var _0x51ed61;
      return !!z(
        (_0x51ed61 = _0x3dd0c5.elementData[_0x2d29fb]) == null
          ? undefined
          : _0x51ed61.element,
      );
    }),
    _0x4cae39 = _0x1f7e66.filter((_0x1bdc55) => {
      var _0x1dfb86;
      return !!V(
        (_0x1dfb86 = _0x3dd0c5.elementData[_0x1bdc55]) == null
          ? undefined
          : _0x1dfb86.element,
      );
    }),
    _0x889c6d = [..._0x32719e, ..._0x45b867, ..._0x23f95c, ..._0x4cae39],
    _0x46599c = 0,
    _0x5bb1e0 = new Set(_0x1f7e66),
    _0x575f07 = _0x3dd0c5.elementOrder["map"]((_0x1440e8) =>
      _0x5bb1e0.has(_0x1440e8)
        ? (_0x889c6d[_0x46599c++] ?? _0x1440e8)
        : _0x1440e8,
    );
  return _0x575f07.every(
    (_0x19b8ed, _0x46939d) => _0x19b8ed === _0x3dd0c5.elementOrder[_0x46939d],
  )
    ? null
    : {
        redoMutation: {
          id: e.SetBoardElementOrderMutation["id"],
          params: {
            unitId: _0x3dd0c5.unitId,
            subUnitId: _0x3dd0c5.subUnitId,
            elementIds: _0x575f07,
          },
        },
        undoMutation: {
          id: e.SetBoardElementOrderMutation["id"],
          params: {
            unitId: _0x3dd0c5.unitId,
            subUnitId: _0x3dd0c5.subUnitId,
            elementIds: _0x3dd0c5.elementOrder,
          },
        },
      };
}
function un(_0xc37a21, _0x19e993) {
  return (
    _0xc37a21 === undefined ||
    (Number.isFinite(_0xc37a21) &&
      _0xc37a21 >= _0x19e993.min &&
      _0xc37a21 <= _0x19e993.max)
  );
}
function dn(_0x2f29d8, _0x5ee051) {
  if (
    !Number.isFinite(_0x2f29d8.left) ||
    !Number.isFinite(_0x2f29d8.top) ||
    !Number.isFinite(_0x2f29d8.width) ||
    !Number.isFinite(_0x2f29d8.height) ||
    _0x2f29d8.width <= 0 ||
    _0x2f29d8.height <= 0 ||
    !Number.isFinite(_0x5ee051) ||
    _0x5ee051 < 0
  )
    return null;
  let _0x3fa57d = _0x2f29d8.width - _0x5ee051 * 2,
    _0x942ecd = _0x2f29d8.height - _0x5ee051 * 2;
  return _0x3fa57d > 0 && _0x942ecd > 0
    ? {
        left: _0x2f29d8.left + _0x5ee051,
        top: _0x2f29d8.top + _0x5ee051,
        width: _0x3fa57d,
        height: _0x942ecd,
      }
    : null;
}
function fn(_0x288bbc, _0x212103) {
  return (
    _0x212103.width <= _0x288bbc.width && _0x212103.height <= _0x288bbc.height
  );
}
function pn(_0x4ba745, _0x12e58d, _0x1272c2) {
  let _0x5dd256 = K(
    _0x12e58d.structureKind ?? _0x4ba745.layout["structureKind"],
  );
  return {
    ..._0x4ba745.layout,
    direction:
      _0x12e58d.direction ??
      (_0x5dd256 === "mindmap-horizontal"
        ? "both"
        : _0x4ba745.layout["direction"]),
    ...(_0x12e58d.structureKind === undefined
      ? null
      : { structureKind: _0x12e58d.structureKind }),
    branchLineType: P(
      _0x5dd256,
      _0x12e58d.branchLineType ?? _0x4ba745.layout["branchLineType"],
    ),
    horizontalGap: _0x1272c2
      ? p.horizontalGap["min"]
      : (_0x12e58d.horizontalGap ?? _0x4ba745.layout["horizontalGap"]),
    siblingGap: _0x1272c2
      ? p.siblingGap["min"]
      : (_0x12e58d.siblingGap ?? _0x4ba745.layout["siblingGap"]),
    branchGap: _0x1272c2
      ? p.branchGap["min"]
      : (_0x12e58d.branchGap ?? _0x4ba745.layout["branchGap"]),
  };
}
function mn(_0x1926d5, _0x3b4c2b, _0x1c2981) {
  var _0x4ddfae;
  let _0x206c0d = _0x1926d5[_0x3b4c2b.scopeId],
    _0x9d8405 = R(_0x206c0d == null ? undefined : _0x206c0d.element);
  if (!_0x206c0d || !_0x9d8405) return null;
  let _0x1ce91d = pn(_0x9d8405, _0x3b4c2b, _0x1c2981),
    _0xd7d34b = K(_0x1ce91d.structureKind),
    _0x4bcf0d = _0x1ce91d.direction,
    _0x5e88b1 = { ..._0x1926d5 },
    _0x1254c2 = t.Tools["deepClone"](_0x206c0d.element);
  ((_0x1254c2.custom = {
    ...(_0x1254c2.custom ?? {}),
    mindmap: {
      ...(((_0x4ddfae = _0x1254c2.custom) == null
        ? undefined
        : _0x4ddfae.mindmap) ?? {}),
      layout: _0x1ce91d,
      structureRevision: (_0x9d8405.structureRevision ?? 0) + 1,
    },
  }),
    (_0x5e88b1[_0x3b4c2b.scopeId] = X(_0x206c0d, _0x1254c2)));
  let _0x3b77a4 = Object.values(_0x1926d5)
      .map((_0x2aca15) => {
        let _0x57a06d = z(_0x2aca15.element);
        return (_0x57a06d == null ? undefined : _0x57a06d.structureScopeId) ===
          _0x3b4c2b.scopeId && _0x57a06d.parentNodeId !== null
          ? { data: _0x2aca15, meta: _0x57a06d }
          : null;
      })
      .filter((_0xb01cb6) => !!_0xb01cb6),
    _0x44cf35 = new Map();
  (_0x3b77a4.forEach((_0x408ffa) => {
    _0x44cf35.set(_0x408ffa.meta["parentNodeId"], [
      ...(_0x44cf35.get(_0x408ffa.meta["parentNodeId"]) ?? []),
      _0x408ffa,
    ]);
  }),
    _0x44cf35.forEach((_0x3abb7c) => _0x3abb7c.sort(ct)));
  let _0x884db0 = new Map(),
    _0x1cde27 = (_0x4abdd2, _0x448aad) => {
      (_0x44cf35.get(_0x4abdd2) ?? []).forEach((_0x107ee7, _0x33d6bf) => {
        let _0x28edf8 =
          _0x4bcf0d === "left" || _0x4bcf0d === "right"
            ? _0x4bcf0d
            : _0x107ee7.meta["parentNodeId"] === _0x9d8405.rootNodeId
              ? _0xd7d34b === "mindmap-horizontal"
                ? lt(_0x33d6bf, "right", "left")
                : ut(_0xd7d34b, _0x33d6bf, _0x107ee7.meta["side"])
              : dt(_0x448aad, _0xd7d34b);
        (_0x884db0.set(_0x107ee7.data["elementId"], _0x28edf8),
          _0x1cde27(_0x107ee7.data["elementId"], _0x28edf8));
      });
    };
  return (
    _0x1cde27(_0x9d8405.rootNodeId),
    _0x3b77a4.forEach(({ data: _0x2c1ee1, meta: _0x583c7c }) => {
      let _0x4549df = It(_0x2c1ee1, {
        scopeId: _0x3b4c2b.scopeId,
        parentNodeId: _0x583c7c.parentNodeId,
        orderKey: _0x583c7c.orderKey,
        side: _0x884db0.get(_0x2c1ee1.elementId) ?? _0x583c7c.side ?? "right",
      });
      _0x5e88b1[_0x2c1ee1.elementId] = X(_0x2c1ee1, _0x4549df);
    }),
    sn(_0x5e88b1, _0x3b4c2b.scopeId)
  );
}
function hn(_0x871345, _0x1e8cc0, _0x61323e) {
  let _0x39ebc9 = (0, e.resolveBoardElementWorldBounds)(_0x871345, _0x1e8cc0),
    _0x21eb60 = _0x871345[_0x1e8cc0];
  if (!_0x39ebc9 || !_0x21eb60) return null;
  let _0x210985 =
      _0x61323e.left + (_0x61323e.width - _0x39ebc9.width) / 2 - _0x39ebc9.left,
    _0x21d502 =
      _0x61323e.top + (_0x61323e.height - _0x39ebc9.height) / 2 - _0x39ebc9.top,
    _0x4ba237 = Ht(_0x21eb60, _0x210985, _0x21d502);
  return {
    elementData: { ..._0x871345, [_0x1e8cc0]: X(_0x21eb60, _0x4ba237) },
    bounds: {
      left: _0x39ebc9.left + _0x210985,
      top: _0x39ebc9.top + _0x21d502,
      width: _0x39ebc9.width,
      height: _0x39ebc9.height,
    },
  };
}
function gn(_0x575456, _0x5546f8, _0x2175f5) {
  let _0xe6b9ec = [],
    _0x4d805b = [];
  return (
    Object.values(_0x575456).forEach((_0xf70679) => {
      var _0x5391da;
      if (!Vt(_0xf70679, _0x2175f5)) return;
      let _0x5cda47 =
        (_0x5391da = _0x5546f8[_0xf70679.elementId]) == null
          ? undefined
          : _0x5391da.element;
      if (!_0x5cda47 || J(_0xf70679.element, _0x5cda47)) return;
      let _0x4cd0d9 = Y(_0xf70679, _0x5cda47);
      (_0xe6b9ec.push(_0x4cd0d9.redoMutation),
        _0x4d805b.unshift(_0x4cd0d9.undoMutation));
    }),
    { redoMutations: _0xe6b9ec, undoMutations: _0x4d805b }
  );
}
const _n = {
    id: "board.operation.mind-map.add-child",
    type: t.CommandType["OPERATION"],
    handler: (_0x2d64a7, _0x2a43c1) =>
      !(_0x2a43c1 != null && _0x2a43c1.unitId) ||
      !_0x2a43c1.subUnitId ||
      !_0x2a43c1.parentNodeId
        ? false
        : gt(_0x2d64a7, _0x2a43c1),
  },
  vn = {
    id: "board.operation.mind-map.add-sibling",
    type: t.CommandType["OPERATION"],
    handler: (_0xbc186, _0x5cc4e9) => {
      if (
        !(_0x5cc4e9 != null && _0x5cc4e9.unitId) ||
        !_0x5cc4e9.subUnitId ||
        !_0x5cc4e9.nodeId
      )
        return false;
      let _0x989704 = G(
        _0xbc186
          .get(e.IBoardElementService)
          .getElementData(_0x5cc4e9.unitId, _0x5cc4e9.subUnitId),
        _0x5cc4e9.nodeId,
      );
      return _0x989704 != null && _0x989704.meta["parentNodeId"]
        ? gt(_0xbc186, {
            unitId: _0x5cc4e9.unitId,
            subUnitId: _0x5cc4e9.subUnitId,
            parentNodeId: _0x989704.meta["parentNodeId"],
            nodeId: _0x5cc4e9.siblingNodeId,
            connectorId: _0x5cc4e9.connectorId,
            text: _0x5cc4e9.text,
            textData: _0x5cc4e9.textData,
            side: _0x989704.meta["side"],
            referenceNodeId: _0x5cc4e9.nodeId,
            placement: _0x5cc4e9.placement,
          })
        : false;
    },
  };
function yn(_0x5ba880, _0x2a5f1e) {
  var _0x2abab2,
    _0x52d8dd,
    _0x4e66f9,
    _0x40aabb,
    _0x48d469,
    _0x151eef,
    _0x48e214,
    _0x8eb352,
    _0x44c53f,
    _0x1969d5,
    _0x3db6db,
    _0xd5675e,
    _0x3ad7dd,
    _0x1b51ba,
    _0x2b544a,
    _0x56f094,
    _0x45d0c5,
    _0x54e739,
    _0x41dc04,
    _0x415411;
  let _0x4bdbfe = t.Tools["deepClone"](_0x5ba880.data["element"]);
  if (!("shapeData" in _0x4bdbfe)) return null;
  let _0x45b019 = _0x4bdbfe.shapeData["shapeText"] ?? {},
    { autoFit: _0x16cf96, ..._0xb4a620 } = _0x45b019,
    _0x513e9b =
      _0x45b019.dataModel && typeof _0x45b019.dataModel == "object"
        ? t.Tools["deepClone"](_0x45b019.dataModel)
        : {},
    _0x3a78dc = _0x5ba880.meta["parentNodeId"]
      ? t.HorizontalAlign["LEFT"]
      : t.HorizontalAlign["CENTER"],
    _0x3570ea = t.VerticalAlign["MIDDLE"],
    _0x2e2738 = _0x45b019.horizontalAlign,
    _0x5f13f9 = _0x45b019.verticalAlign,
    _0x3ad692 = _0x513e9b.ha,
    _0x1f4a7e = _0x513e9b.va,
    _0x185f0b =
      ((_0x2abab2 = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x2abab2.horizontalAlign) ??
      _0x2e2738 ??
      _0x3ad692 ??
      _0x3a78dc,
    _0x4210cd =
      ((_0x52d8dd = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x52d8dd.verticalAlign) ??
      _0x5f13f9 ??
      _0x1f4a7e ??
      _0x3570ea,
    _0x5816f2 = _0x2a5f1e.shapeText
      ? t.Tools["deepClone"](_0x2a5f1e.shapeText)
      : null,
    _0x2f0bb9 =
      _0x5816f2 == null || (_0x4e66f9 = _0x5816f2.dataModel) == null
        ? undefined
        : _0x4e66f9.doc,
    _0x524be2 = _0x2f0bb9
      ? (
          ((_0x40aabb = _0x2f0bb9.body) == null
            ? undefined
            : _0x40aabb.dataStream) ?? ""
        )
          .replace(/\r\n$/, "")
          .replace(/\r/g, "\x0a")
      : typeof (_0x5816f2 == null ? undefined : _0x5816f2.text) == "string"
        ? _0x5816f2.text
        : undefined,
    _0x179118 =
      _0x2a5f1e.text ??
      _0x524be2 ??
      (typeof _0x45b019.text == "string" ? _0x45b019.text : ""),
    _0x340410 = _0x513e9b.doc,
    _0x3d3775 = _0x45b019.isRichText === true,
    _0x3be09d =
      _0x2a5f1e.textData === undefined
        ? _0x2a5f1e.text === undefined && _0x3d3775
          ? _0x340410
          : undefined
        : (_0x2a5f1e.textData ?? undefined),
    _0x460747 = pe(_0x45b019, _0x2a5f1e.textStyle),
    _0x11f175 = me({
      currentDataModel: _0x513e9b,
      documentData: _0x3be09d,
      horizontalAlign: _0x185f0b,
      shapeText: {
        ..._0xb4a620,
        ...(((_0x48d469 = _0x2a5f1e.textStyle) == null
          ? undefined
          : _0x48d469.color) === undefined
          ? null
          : { color: _0x2a5f1e.textStyle["color"] }),
        ...(((_0x151eef = _0x2a5f1e.textStyle) == null
          ? undefined
          : _0x151eef.fontFamily) === undefined
          ? null
          : { fontFamily: _0x2a5f1e.textStyle["fontFamily"] }),
        ...(((_0x48e214 = _0x2a5f1e.textStyle) == null
          ? undefined
          : _0x48e214.fontSize) === undefined
          ? null
          : { fontSize: _0x2a5f1e.textStyle["fontSize"] }),
        ...(((_0x8eb352 = _0x2a5f1e.textStyle) == null
          ? undefined
          : _0x8eb352.bold) === undefined
          ? null
          : { bold: _0x2a5f1e.textStyle["bold"] }),
        ...(((_0x44c53f = _0x2a5f1e.textStyle) == null
          ? undefined
          : _0x44c53f.italic) === undefined
          ? null
          : { italic: _0x2a5f1e.textStyle["italic"] }),
        ...(((_0x1969d5 = _0x2a5f1e.textStyle) == null
          ? undefined
          : _0x1969d5.underline) === undefined
          ? null
          : { underline: _0x2a5f1e.textStyle["underline"] }),
        ...(((_0x3db6db = _0x2a5f1e.textStyle) == null
          ? undefined
          : _0x3db6db.strikethrough) === undefined
          ? null
          : { strikethrough: _0x2a5f1e.textStyle["strikethrough"] }),
        ...(((_0xd5675e = _0x2a5f1e.textStyle) == null
          ? undefined
          : _0xd5675e.textFill) === undefined
          ? null
          : { textFill: _0x2a5f1e.textStyle["textFill"] }),
      },
      text: _0x179118,
      textStyle: _0x460747,
      verticalAlign: _0x4210cd,
    }),
    _0x49e541 = {
      ..._0xb4a620,
      ...(_0x5816f2 ?? _0x11f175),
      ...(_0x5816f2
        ? { text: _0x179118 }
        : { horizontalAlign: _0x185f0b, verticalAlign: _0x4210cd }),
      ...(_0x2a5f1e.text === undefined ? null : { text: _0x2a5f1e.text }),
      ...(((_0x3ad7dd = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x3ad7dd.color) === undefined
        ? null
        : { color: _0x2a5f1e.textStyle["color"] }),
      ...(((_0x1b51ba = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x1b51ba.fontFamily) === undefined
        ? null
        : { fontFamily: _0x2a5f1e.textStyle["fontFamily"] }),
      ...(((_0x2b544a = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x2b544a.fontSize) === undefined
        ? null
        : { fontSize: _0x2a5f1e.textStyle["fontSize"] }),
      ...(((_0x56f094 = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x56f094.bold) === undefined
        ? null
        : { bold: _0x2a5f1e.textStyle["bold"] }),
      ...(((_0x45d0c5 = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x45d0c5.italic) === undefined
        ? null
        : { italic: _0x2a5f1e.textStyle["italic"] }),
      ...(((_0x54e739 = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x54e739.underline) === undefined
        ? null
        : { underline: _0x2a5f1e.textStyle["underline"] }),
      ...(((_0x41dc04 = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x41dc04.strikethrough) === undefined
        ? null
        : { strikethrough: _0x2a5f1e.textStyle["strikethrough"] }),
      ...(((_0x415411 = _0x2a5f1e.textStyle) == null
        ? undefined
        : _0x415411.textFill) === undefined
        ? null
        : { textFill: _0x2a5f1e.textStyle["textFill"] }),
    };
  if (
    ((_0x4bdbfe.shapeData = {
      ..._0x4bdbfe.shapeData,
      ...(_0x2a5f1e.shapeType === undefined
        ? null
        : { shapeType: _0x2a5f1e.shapeType }),
      fill: {
        ...(_0x4bdbfe.shapeData["fill"] ?? {}),
        ...(_0x2a5f1e.fill ?? { fillType: n.ShapeFillEnum["SolidFill"] }),
        ...(_0x2a5f1e.fillColor === undefined
          ? null
          : { color: _0x2a5f1e.fillColor }),
      },
      stroke: {
        ...(_0x4bdbfe.shapeData["stroke"] ?? {}),
        ...(_0x2a5f1e.stroke ?? {
          lineStrokeType: n.ShapeLineTypeEnum["SolidLine"],
        }),
        ...(_0x2a5f1e.strokeColor === undefined
          ? null
          : { color: _0x2a5f1e.strokeColor }),
      },
      textRectPadding: _0x4bdbfe.shapeData["textRectPadding"] ?? { ...d },
      isTextBox: true,
      shapeText: _0x49e541,
    }),
    _0x2a5f1e.foreignAttributes !== undefined)
  ) {
    var _0x4a692b;
    let _0xf3ed90 =
      (_0x4a692b = _0x4bdbfe.custom) == null ? undefined : _0x4a692b.mindmap;
    if (
      !_0xf3ed90 ||
      !Object.prototype["hasOwnProperty"].call(_0xf3ed90, "parentNodeId")
    )
      return null;
    let _0x1a911b = { ...(_0xf3ed90.foreignAttributes ?? {}) };
    Object.entries(_0x2a5f1e.foreignAttributes).forEach(
      ([_0x330dea, _0x5ad36e]) => {
        _0x5ad36e == null
          ? delete _0x1a911b[_0x330dea]
          : (_0x1a911b[_0x330dea] = _0x5ad36e);
      },
    );
    let _0x2ddd37 = {
      ..._0xf3ed90,
      ...(Object.keys(_0x1a911b).length > 0
        ? { foreignAttributes: _0x1a911b }
        : { foreignAttributes: undefined }),
    };
    (_0x2ddd37.foreignAttributes || delete _0x2ddd37.foreignAttributes,
      (_0x4bdbfe.custom = { ..._0x4bdbfe.custom, mindmap: _0x2ddd37 }));
  }
  ((_0x4bdbfe.transform = Tt(
    _0x5ba880.data["element"],
    _0x4bdbfe.shapeData,
    _0x2a5f1e.shapeType,
  )),
    (_0x4bdbfe.transform = Dt(
      _0x4bdbfe,
      _0x2a5f1e.text !== undefined ||
        _0x2a5f1e.textData !== undefined ||
        _0x2a5f1e.shapeText !== undefined ||
        Et(_0x2a5f1e.textStyle),
    )));
  let _0x833d7b = _0x2a5f1e.hostSize
    ? de(X(_0x5ba880.data, _0x4bdbfe), _0x2a5f1e.hostSize)
    : null;
  return (
    _0x833d7b &&
      (_0x4bdbfe.transform = {
        ..._0x4bdbfe.transform,
        width: _0x833d7b.width,
        height: _0x833d7b.height,
      }),
    _0x4bdbfe
  );
}
const bn = {
    id: "board.operation.mind-map.update-node",
    type: t.CommandType["OPERATION"],
    handler: (_0x50f44f, _0xc77627) => {
      if (
        !(_0xc77627 != null && _0xc77627.unitId) ||
        !_0xc77627.subUnitId ||
        !_0xc77627.nodeId
      )
        return false;
      let _0x444e64 = _0x50f44f.get(e.IBoardElementService),
        _0x20d3c6 = G(
          _0x444e64.getElementData(_0xc77627.unitId, _0xc77627.subUnitId),
          _0xc77627.nodeId,
        );
      if (!_0x20d3c6) return false;
      let _0x1cd4a9 = yn(_0x20d3c6, _0xc77627);
      if (!_0x1cd4a9) return false;
      if (J(_0x20d3c6.data["element"], _0x1cd4a9)) return true;
      let _0x28d0e4 = Y(_0x20d3c6.data, _0x1cd4a9),
        _0x1871a2 = Z(
          {
            ..._0x444e64.getElementData(_0xc77627.unitId, _0xc77627.subUnitId),
            [_0xc77627.nodeId]: X(_0x20d3c6.data, _0x1cd4a9),
          },
          _0x20d3c6.meta["structureScopeId"],
        );
      return q(_0x50f44f, _0xc77627.unitId, {
        redoMutations: [
          _0x28d0e4.redoMutation,
          ...((_0x1871a2 == null ? undefined : _0x1871a2.redoMutations) ?? []),
        ],
        undoMutations: [
          ...((_0x1871a2 == null ? undefined : _0x1871a2.undoMutations) ?? []),
          _0x28d0e4.undoMutation,
        ],
      });
    },
  },
  xn = {
    id: "board.operation.mind-map.update-nodes",
    type: t.CommandType["OPERATION"],
    handler: (_0x9c1348, _0x5ced2d) => {
      if (
        !(_0x5ced2d != null && _0x5ced2d.unitId) ||
        !_0x5ced2d.subUnitId ||
        !_0x5ced2d.updates["length"]
      )
        return false;
      let _0x1c7e78 = _0x5ced2d.updates["map"]((_0x52741b) => _0x52741b.nodeId);
      if (
        _0x1c7e78.some((_0x254c96) => !_0x254c96) ||
        new Set(_0x1c7e78).size !== _0x1c7e78.length
      )
        return false;
      let _0xee44fe = {
          ..._0x9c1348
            .get(e.IBoardElementService)
            .getElementData(_0x5ced2d.unitId, _0x5ced2d.subUnitId),
        },
        _0x5312ce = [],
        _0x505023 = [],
        _0x458ec2 = null;
      for (let _0x17ad03 of _0x5ced2d.updates) {
        let _0x25cbe6 = G(_0xee44fe, _0x17ad03.nodeId);
        if (
          !_0x25cbe6 ||
          (_0x458ec2 !== null &&
            _0x25cbe6.meta["structureScopeId"] !== _0x458ec2)
        )
          return false;
        _0x458ec2 = _0x25cbe6.meta["structureScopeId"];
        let _0x159b7d = yn(_0x25cbe6, _0x17ad03);
        if (!_0x159b7d) return false;
        if (J(_0x25cbe6.data["element"], _0x159b7d)) continue;
        let _0x26a922 = Y(_0x25cbe6.data, _0x159b7d);
        (_0x5312ce.push(_0x26a922.redoMutation),
          _0x505023.unshift(_0x26a922.undoMutation),
          (_0xee44fe[_0x17ad03.nodeId] = X(_0x25cbe6.data, _0x159b7d)));
      }
      if (_0x5312ce.length === 0) return true;
      let _0x38edf7 = _0x458ec2 ? Z(_0xee44fe, _0x458ec2) : null;
      return q(_0x9c1348, _0x5ced2d.unitId, {
        redoMutations: [
          ..._0x5312ce,
          ...((_0x38edf7 == null ? undefined : _0x38edf7.redoMutations) ?? []),
        ],
        undoMutations: [
          ...((_0x38edf7 == null ? undefined : _0x38edf7.undoMutations) ?? []),
          ..._0x505023,
        ],
      });
    },
  },
  Sn = {
    id: "board.operation.mind-map.update-incoming-connector",
    type: t.CommandType["OPERATION"],
    handler: (_0x5f2e00, _0xcfebe1) => {
      if (
        !(_0xcfebe1 != null && _0xcfebe1.unitId) ||
        !_0xcfebe1.subUnitId ||
        !_0xcfebe1.nodeId ||
        !_0xcfebe1.style
      )
        return false;
      let _0x3b6ae8 = _0x5f2e00
          .get(e.IBoardElementService)
          .getElementData(_0xcfebe1.unitId, _0xcfebe1.subUnitId),
        _0x56fd70 = G(_0x3b6ae8, _0xcfebe1.nodeId);
      if (!(_0x56fd70 != null && _0x56fd70.meta["parentNodeId"])) return false;
      let _0x1b8da4 = bt(
        _0x3b6ae8,
        _0x56fd70.meta["structureScopeId"],
        _0xcfebe1.nodeId,
      );
      if (!_0x1b8da4 || !("connectorData" in _0x1b8da4.element)) return false;
      let _0x580d7d = t.Tools["deepClone"](_0x1b8da4.element),
        _0x144f62 = Ct(_0xcfebe1.style["lineType"]);
      ((_0x580d7d.connectorData = {
        ..._0x580d7d.connectorData,
        style: {
          ...(_0x580d7d.connectorData["style"] ?? {}),
          ..._0xcfebe1.style,
          ...(_0xcfebe1.style["lineType"] === undefined
            ? null
            : { dash: _0x144f62 }),
        },
      }),
        delete _0x580d7d.connectorData["style"].lineType);
      let _0x11e14b = Y(_0x1b8da4, _0x580d7d);
      return q(_0x5f2e00, _0xcfebe1.unitId, {
        redoMutations: [_0x11e14b.redoMutation],
        undoMutations: [_0x11e14b.undoMutation],
      });
    },
  },
  Cn = {
    id: "board.operation.mind-map.delete-node",
    type: t.CommandType["OPERATION"],
    handler: (_0x535254, _0x594592) => {
      var _0x19ed4d;
      if (
        !(_0x594592 != null && _0x594592.unitId) ||
        !_0x594592.subUnitId ||
        !_0x594592.nodeId
      )
        return false;
      let _0x2cfb57 = _0x535254.get(e.IBoardElementService),
        _0x59370c = _0x2cfb57.getElementData(
          _0x594592.unitId,
          _0x594592.subUnitId,
        ),
        _0x2d1827 = G(_0x59370c, _0x594592.nodeId);
      if (!_0x2d1827) return false;
      let _0x2140a4 = _0x2cfb57.getElementOrder(
          _0x594592.unitId,
          _0x594592.subUnitId,
        ),
        _0x38a0b0 = yt(
          _0x59370c,
          _0x2d1827.meta["structureScopeId"],
          _0x594592.nodeId,
        );
      _0x2d1827.meta["parentNodeId"] ??
        _0x38a0b0.add(_0x2d1827.meta["structureScopeId"]);
      let _0x140711 = R(
          (_0x19ed4d = _0x59370c[_0x2d1827.meta["structureScopeId"]]) == null
            ? undefined
            : _0x19ed4d.element,
        ),
        _0x2a8e5e = _0x140711 == null ? undefined : _0x140711.rootNodeId,
        _0x588382 = _0x2a8e5e
          ? (0, e.resolveBoardElementWorldBounds)(_0x59370c, _0x2a8e5e)
          : null,
        _0x22b423 = { ..._0x59370c };
      _0x38a0b0.forEach((_0x5e7c76) => delete _0x22b423[_0x5e7c76]);
      let _0x27354d =
          _0x2d1827.meta["parentNodeId"] == null
            ? null
            : Z(_0x22b423, _0x2d1827.meta["structureScopeId"]),
        _0x462faf =
          _0x588382 && _0x2a8e5e
            ? cn(
                _0x22b423,
                _0x2d1827.meta["structureScopeId"],
                _0x2a8e5e,
                _0x588382,
              )
            : null,
        _0x3fcd2a = [..._0x2140a4].filter((_0x428e95) =>
          _0x38a0b0.has(_0x428e95),
        ),
        _0x37fb8a = [..._0x3fcd2a]
          .reverse()
          .map((_0x5ba6d1) => ({
            id: e.RemoveBoardElementMutation["id"],
            params: {
              unitId: _0x594592.unitId,
              subUnitId: _0x594592.subUnitId,
              elementId: _0x5ba6d1,
              allowLockedParent: true,
            },
          })),
        _0x865aef = _0x3fcd2a.map((_0x52ecd2) => ({
          id: e.AddBoardElementMutation["id"],
          params: {
            unitId: _0x594592.unitId,
            subUnitId: _0x594592.subUnitId,
            element: t.Tools["deepClone"](_0x59370c[_0x52ecd2].element),
            insertIndex: _0x2140a4.indexOf(_0x52ecd2),
            allowLockedParent: true,
          },
        }));
      return q(_0x535254, _0x594592.unitId, {
        redoMutations: [
          ..._0x37fb8a,
          ...((_0x27354d == null ? undefined : _0x27354d.redoMutations) ?? []),
          ...((_0x462faf == null ? undefined : _0x462faf.redoMutations) ?? []),
        ],
        undoMutations: [
          ...((_0x462faf == null ? undefined : _0x462faf.undoMutations) ?? []),
          ...((_0x27354d == null ? undefined : _0x27354d.undoMutations) ?? []),
          ..._0x865aef,
        ],
      });
    },
  },
  wn = {
    id: "board.operation.mind-map.reparent-node",
    type: t.CommandType["OPERATION"],
    handler: (_0x3086ee, _0x2140ad) => {
      if (
        !(_0x2140ad != null && _0x2140ad.unitId) ||
        !_0x2140ad.subUnitId ||
        !_0x2140ad.nodeId ||
        !_0x2140ad.newParentNodeId
      )
        return false;
      let _0x348ebd = _0x3086ee.get(e.IBoardElementService),
        _0x1d2e0a = _0x348ebd.getElementData(
          _0x2140ad.unitId,
          _0x2140ad.subUnitId,
        ),
        _0x56aeed = G(_0x1d2e0a, _0x2140ad.nodeId),
        _0x3ddcf1 = G(_0x1d2e0a, _0x2140ad.newParentNodeId);
      if (
        !_0x56aeed ||
        !_0x3ddcf1 ||
        _0x2140ad.nodeId === _0x2140ad.newParentNodeId
      )
        return false;
      if (_0x56aeed.meta["parentNodeId"] === null) {
        var _0xb1afaf, _0x1da30b, _0x120020, _0x1e9858;
        if (
          _0x56aeed.meta["structureScopeId"] ===
          _0x3ddcf1.meta["structureScopeId"]
        )
          return false;
        let _0x3d6dae =
          _0x2140ad.incomingConnectorId ?? (0, t.generateRandomId)(6);
        if (_0x1d2e0a[_0x3d6dae]) return false;
        let _0x37586f = ft(
            _0x3ddcf1.meta,
            _0x2140ad.side ?? _0x56aeed.meta["side"],
          ),
          _0x2c3085 = R(
            (_0xb1afaf = _0x1d2e0a[_0x3ddcf1.meta["structureScopeId"]]) == null
              ? undefined
              : _0xb1afaf.element,
          ),
          _0xf914d9 = Mt(
            _0x1d2e0a,
            _0x3ddcf1.meta["structureScopeId"],
            _0x2140ad.newParentNodeId,
            _0x2140ad.nodeId,
            _0x2140ad.orderKey,
            _0x2140ad.referenceNodeId,
            _0x2140ad.placement,
          ),
          _0x36c23e = jt(
            _0x1d2e0a,
            _0x56aeed.meta["structureScopeId"],
            _0x2140ad.nodeId,
          ),
          _0x16c59e = [],
          _0x3a3434 = [],
          _0x229ca3 = { ..._0x1d2e0a };
        Rt(
          _0x1d2e0a,
          _0x36c23e,
          {
            scopeId: _0x3ddcf1.meta["structureScopeId"],
            rootNodeId: _0x2140ad.nodeId,
            rootParentNodeId: _0x2140ad.newParentNodeId,
            rootOrderKey: _0xf914d9,
            rootSide: _0x37586f,
            rootIsDemoted: true,
          },
          _0x16c59e,
          _0x3a3434,
          _0x229ca3,
        );
        let _0x122d7b = Ue({
          nodeId: _0x2140ad.nodeId,
          connectorId: _0x3d6dae,
          scopeId: _0x3ddcf1.meta["structureScopeId"],
          parentNode: _0x3ddcf1.data["element"],
          orderKey: _0xf914d9,
          side: _0x37586f,
          branchLineType:
            _0x2c3085 == null || (_0x1da30b = _0x2c3085.layout) == null
              ? undefined
              : _0x1da30b.branchLineType,
          treeRootTrunk:
            M(
              _0x2c3085 == null || (_0x120020 = _0x2c3085.layout) == null
                ? undefined
                : _0x120020.structureKind,
            ) && _0x3ddcf1.meta["parentNodeId"] === null,
          timelineRootStructureKind:
            N(
              _0x2c3085 == null || (_0x1e9858 = _0x2c3085.layout) == null
                ? undefined
                : _0x1e9858.structureKind,
            ) && _0x3ddcf1.meta["parentNodeId"] === null
              ? _0x2c3085.layout["structureKind"]
              : undefined,
          left: _0x56aeed.data["element"].transform["left"] ?? 0,
          top: _0x56aeed.data["element"].transform["top"] ?? 0,
        }).connector;
        (_0x16c59e.push({
          id: e.AddBoardElementMutation["id"],
          params: {
            unitId: _0x2140ad.unitId,
            subUnitId: _0x2140ad.subUnitId,
            element: _0x122d7b,
            allowLockedParent: true,
          },
        }),
          _0x3a3434.unshift({
            id: e.RemoveBoardElementMutation["id"],
            params: {
              unitId: _0x2140ad.unitId,
              subUnitId: _0x2140ad.subUnitId,
              elementId: _0x122d7b.id,
              allowLockedParent: true,
            },
          }),
          (_0x229ca3[_0x122d7b.id] = tn(
            _0x2140ad.unitId,
            _0x2140ad.subUnitId,
            _0x122d7b,
          )));
        let _0x317108 = _0x1d2e0a[_0x56aeed.meta["structureScopeId"]];
        return (
          _0x317108 &&
            (_0x16c59e.push({
              id: e.RemoveBoardElementMutation["id"],
              params: {
                unitId: _0x2140ad.unitId,
                subUnitId: _0x2140ad.subUnitId,
                elementId: _0x317108.elementId,
                allowLockedParent: true,
              },
            }),
            _0x3a3434.unshift({
              id: e.AddBoardElementMutation["id"],
              params: {
                unitId: _0x2140ad.unitId,
                subUnitId: _0x2140ad.subUnitId,
                element: t.Tools["deepClone"](_0x317108.element),
                insertIndex: _0x348ebd
                  .getElementOrder(_0x2140ad.unitId, _0x2140ad.subUnitId)
                  .indexOf(_0x317108.elementId),
                allowLockedParent: true,
              },
            }),
            delete _0x229ca3[_0x317108.elementId]),
          zt(
            _0x1d2e0a,
            _0x229ca3,
            [_0x3ddcf1.meta["structureScopeId"]],
            _0x16c59e,
            _0x3a3434,
          ),
          q(_0x3086ee, _0x2140ad.unitId, {
            redoMutations: _0x16c59e,
            undoMutations: _0x3a3434,
          })
        );
      }
      if (
        At(
          _0x1d2e0a,
          _0x56aeed.meta["structureScopeId"],
          _0x2140ad.newParentNodeId,
          _0x2140ad.nodeId,
        )
      )
        return false;
      let _0x465a7e = bt(
        _0x1d2e0a,
        _0x56aeed.meta["structureScopeId"],
        _0x2140ad.nodeId,
      );
      if (!_0x465a7e) return false;
      let _0x2a41bf = ft(
          _0x3ddcf1.meta,
          _0x2140ad.side ?? _0x56aeed.meta["side"],
        ),
        _0x13f296 = [],
        _0x41c3a4 = [],
        _0x4cfbfd = { ..._0x1d2e0a };
      Rt(
        _0x1d2e0a,
        jt(_0x1d2e0a, _0x56aeed.meta["structureScopeId"], _0x2140ad.nodeId),
        {
          scopeId: _0x3ddcf1.meta["structureScopeId"],
          rootNodeId: _0x2140ad.nodeId,
          rootParentNodeId: _0x2140ad.newParentNodeId,
          rootOrderKey: Mt(
            _0x1d2e0a,
            _0x3ddcf1.meta["structureScopeId"],
            _0x2140ad.newParentNodeId,
            _0x2140ad.nodeId,
            _0x2140ad.orderKey,
            _0x2140ad.referenceNodeId,
            _0x2140ad.placement,
          ),
          rootSide: _0x2a41bf,
          incomingConnectorId: _0x465a7e.elementId,
        },
        _0x13f296,
        _0x41c3a4,
        _0x4cfbfd,
      );
      let _0x4c7d0e = Lt(_0x465a7e, {
          scopeId: _0x3ddcf1.meta["structureScopeId"],
          parentNodeId: _0x2140ad.newParentNodeId,
          childNodeId: _0x2140ad.nodeId,
          side: _0x2a41bf,
          updateEndpoints: true,
        }),
        _0x105c79 = Y(_0x465a7e, _0x4c7d0e);
      return (
        _0x13f296.push(_0x105c79.redoMutation),
        _0x41c3a4.unshift(_0x105c79.undoMutation),
        (_0x4cfbfd[_0x465a7e.elementId] = X(_0x465a7e, _0x4c7d0e)),
        zt(
          _0x1d2e0a,
          _0x4cfbfd,
          [
            _0x56aeed.meta["structureScopeId"],
            _0x3ddcf1.meta["structureScopeId"],
          ],
          _0x13f296,
          _0x41c3a4,
        ),
        q(_0x3086ee, _0x2140ad.unitId, {
          redoMutations: _0x13f296,
          undoMutations: _0x41c3a4,
        })
      );
    },
  },
  Tn = {
    id: "board.operation.mind-map.promote-node",
    type: t.CommandType["OPERATION"],
    handler: (_0x153b1d, _0x3d9e0b) => {
      if (
        !(_0x3d9e0b != null && _0x3d9e0b.unitId) ||
        !_0x3d9e0b.subUnitId ||
        !_0x3d9e0b.nodeId
      )
        return false;
      let _0x457b1f = _0x153b1d
          .get(e.IBoardElementService)
          .getElementData(_0x3d9e0b.unitId, _0x3d9e0b.subUnitId),
        _0x39f8f7 = G(_0x457b1f, _0x3d9e0b.nodeId);
      if (!(_0x39f8f7 != null && _0x39f8f7.meta["parentNodeId"])) return false;
      let _0x565679 = G(_0x457b1f, _0x39f8f7.meta["parentNodeId"]);
      if (!(_0x565679 != null && _0x565679.meta["parentNodeId"])) return false;
      let _0x3543bb = G(_0x457b1f, _0x565679.meta["parentNodeId"]),
        _0x16a724 = bt(
          _0x457b1f,
          _0x39f8f7.meta["structureScopeId"],
          _0x3d9e0b.nodeId,
        );
      if (!_0x3543bb || !_0x16a724) return false;
      let _0x5899ce =
          _0x565679.meta["parentNodeId"] === null
            ? _0x39f8f7.meta["side"]
            : (_0x565679.meta["side"] ?? _0x39f8f7.meta["side"] ?? "right"),
        _0x4cb9fc = Mt(
          _0x457b1f,
          _0x39f8f7.meta["structureScopeId"],
          _0x3543bb.data["elementId"],
          _0x3d9e0b.nodeId,
        ),
        _0x5602ad = [],
        _0x155f72 = [],
        _0x20ce92 = It(_0x39f8f7.data, {
          scopeId: _0x39f8f7.meta["structureScopeId"],
          parentNodeId: _0x3543bb.data["elementId"],
          orderKey: _0x4cb9fc,
          side: _0x5899ce,
        }),
        _0x1d53e0 = Y(_0x39f8f7.data, _0x20ce92);
      (_0x5602ad.push(_0x1d53e0.redoMutation),
        _0x155f72.unshift(_0x1d53e0.undoMutation));
      let _0x547773 = Y(
        _0x16a724,
        Lt(_0x16a724, {
          scopeId: _0x39f8f7.meta["structureScopeId"],
          parentNodeId: _0x3543bb.data["elementId"],
          childNodeId: _0x3d9e0b.nodeId,
          side: _0x5899ce,
          updateEndpoints: true,
        }),
      );
      return (
        _0x5602ad.push(_0x547773.redoMutation),
        _0x155f72.unshift(_0x547773.undoMutation),
        q(_0x153b1d, _0x3d9e0b.unitId, {
          redoMutations: _0x5602ad,
          undoMutations: _0x155f72,
        })
      );
    },
  },
  En = {
    id: "board.operation.mind-map.detach-node",
    type: t.CommandType["OPERATION"],
    handler: (_0x411159, _0x5de576) => {
      if (
        !(_0x5de576 != null && _0x5de576.unitId) ||
        !_0x5de576.subUnitId ||
        !_0x5de576.nodeId
      )
        return false;
      let _0x19bb18 = _0x411159.get(e.IBoardElementService),
        _0x48b770 = _0x19bb18.getElementData(
          _0x5de576.unitId,
          _0x5de576.subUnitId,
        ),
        _0x578086 = G(_0x48b770, _0x5de576.nodeId);
      if (!(_0x578086 != null && _0x578086.meta["parentNodeId"])) return false;
      let _0x57242c = bt(
        _0x48b770,
        _0x578086.meta["structureScopeId"],
        _0x5de576.nodeId,
      );
      if (!_0x57242c) return false;
      let _0x39b6d6 = jt(
          _0x48b770,
          _0x578086.meta["structureScopeId"],
          _0x5de576.nodeId,
        ),
        _0x45ab3c = _0x5de576.containerId ?? (0, t.generateRandomId)(6);
      if (_0x48b770[_0x45ab3c]) return false;
      let _0x5d00fa = Bt(_0x39b6d6),
        _0x453aad = _0x578086.data["element"].transform["left"] ?? 0,
        _0x1c7a11 = _0x578086.data["element"].transform["top"] ?? 0,
        _0x1292dc = Pe({
          id: _0x45ab3c,
          rootNodeId: _0x5de576.nodeId,
          ..._0x5d00fa,
          ...(Number.isFinite(_0x5de576.left)
            ? { left: _0x5de576.left - _0x453aad }
            : null),
          ...(Number.isFinite(_0x5de576.top)
            ? { top: _0x5de576.top - _0x1c7a11 }
            : null),
        }),
        _0x39088c = [
          {
            id: e.AddBoardElementMutation["id"],
            params: {
              unitId: _0x5de576.unitId,
              subUnitId: _0x5de576.subUnitId,
              element: _0x1292dc,
              allowLockedParent: true,
            },
          },
          {
            id: e.RemoveBoardElementMutation["id"],
            params: {
              unitId: _0x5de576.unitId,
              subUnitId: _0x5de576.subUnitId,
              elementId: _0x57242c.elementId,
              allowLockedParent: true,
            },
          },
        ],
        _0x4094de = [
          {
            id: e.AddBoardElementMutation["id"],
            params: {
              unitId: _0x5de576.unitId,
              subUnitId: _0x5de576.subUnitId,
              element: t.Tools["deepClone"](_0x57242c.element),
              insertIndex: _0x19bb18
                .getElementOrder(_0x5de576.unitId, _0x5de576.subUnitId)
                .indexOf(_0x57242c.elementId),
              allowLockedParent: true,
            },
          },
          {
            id: e.RemoveBoardElementMutation["id"],
            params: {
              unitId: _0x5de576.unitId,
              subUnitId: _0x5de576.subUnitId,
              elementId: _0x45ab3c,
              allowLockedParent: true,
            },
          },
        ];
      return (
        Rt(
          _0x48b770,
          _0x39b6d6,
          {
            scopeId: _0x45ab3c,
            rootNodeId: _0x5de576.nodeId,
            rootParentNodeId: null,
            rootOrderKey: "a0",
            rootIsDetached: true,
            incomingConnectorId: _0x57242c.elementId,
          },
          _0x39088c,
          _0x4094de,
        ),
        q(_0x411159, _0x5de576.unitId, {
          redoMutations: _0x39088c,
          undoMutations: _0x4094de,
        })
      );
    },
  },
  Dn = {
    id: "board.operation.mind-map.translate",
    type: t.CommandType["OPERATION"],
    handler: (_0x58ab97, _0x9d8ef2) => {
      if (
        !(_0x9d8ef2 != null && _0x9d8ef2.unitId) ||
        !_0x9d8ef2.subUnitId ||
        !_0x9d8ef2.scopeId ||
        !Number.isFinite(_0x9d8ef2.deltaX) ||
        !Number.isFinite(_0x9d8ef2.deltaY) ||
        (_0x9d8ef2.deltaX === 0 && _0x9d8ef2.deltaY === 0)
      )
        return false;
      let _0x369929 = Ut(
        _0x58ab97
          .get(e.IBoardElementService)
          .getElementData(_0x9d8ef2.unitId, _0x9d8ef2.subUnitId),
        {
          scopeId: _0x9d8ef2.scopeId,
          deltaX: _0x9d8ef2.deltaX,
          deltaY: _0x9d8ef2.deltaY,
          excludeElementIds: _0x9d8ef2.excludeElementIds,
          preserveExcludedWorldTransforms:
            _0x9d8ef2.preserveExcludedWorldTransforms,
        },
      );
      return _0x369929 ? q(_0x58ab97, _0x9d8ef2.unitId, _0x369929) : false;
    },
  },
  On = {
    id: "board.operation.mind-map.layout",
    type: t.CommandType["OPERATION"],
    handler: (_0x40eda0, _0x314cb4) => {
      if (
        !(_0x314cb4 != null && _0x314cb4.unitId) ||
        !_0x314cb4.subUnitId ||
        !_0x314cb4.scopeId
      )
        return false;
      let _0x31e9d1 = _0x40eda0
          .get(e.IBoardElementService)
          .getElementData(_0x314cb4.unitId, _0x314cb4.subUnitId),
        _0x1889e7 = _0x314cb4.anchorNodeId
          ? (0, e.resolveBoardElementWorldBounds)(
              _0x31e9d1,
              _0x314cb4.anchorNodeId,
            )
          : null,
        _0x43b98c = Z(_0x31e9d1, _0x314cb4.scopeId);
      if (!_0x43b98c) return false;
      let _0x330bac =
        _0x1889e7 && _0x314cb4.anchorNodeId
          ? cn(_0x31e9d1, _0x314cb4.scopeId, _0x314cb4.anchorNodeId, _0x1889e7)
          : null;
      return q(
        _0x40eda0,
        _0x314cb4.unitId,
        {
          redoMutations: [
            ..._0x43b98c.redoMutations,
            ...((_0x330bac == null ? undefined : _0x330bac.redoMutations) ??
              []),
          ],
          undoMutations: [
            ...((_0x330bac == null ? undefined : _0x330bac.undoMutations) ??
              []),
            ..._0x43b98c.undoMutations,
          ],
        },
        { skipUndo: _0x314cb4.skipUndo },
      );
    },
  },
  kn = {
    id: "board.operation.mind-map.change-layout",
    type: t.CommandType["OPERATION"],
    handler: (_0x555973, _0x181869) => {
      var _0x42fd2c;
      if (
        !(_0x181869 != null && _0x181869.unitId) ||
        !_0x181869.subUnitId ||
        !_0x181869.scopeId
      )
        return false;
      let _0x56978e = _0x555973.get(e.IBoardElementService),
        _0x4caa1c = _0x56978e.getElementData(
          _0x181869.unitId,
          _0x181869.subUnitId,
        ),
        _0x31d371 = _0x56978e.getElementOrder(
          _0x181869.unitId,
          _0x181869.subUnitId,
        ),
        _0x12ea4c = _0x4caa1c[_0x181869.scopeId],
        _0x48419a = R(_0x12ea4c == null ? undefined : _0x12ea4c.element);
      if (!_0x12ea4c || !_0x48419a) return false;
      let _0x35b32a = P(
          K(_0x181869.structureKind ?? _0x48419a.layout["structureKind"]),
          _0x181869.branchLineType ?? _0x48419a.layout["branchLineType"],
        ),
        _0x164690 = {
          ..._0x48419a.layout,
          ...(_0x181869.direction === undefined
            ? null
            : { direction: _0x181869.direction }),
          ...(_0x181869.structureKind === undefined
            ? null
            : { structureKind: _0x181869.structureKind }),
          branchLineType: _0x35b32a,
          ...(_0x181869.horizontalGap === undefined
            ? null
            : { horizontalGap: _0x181869.horizontalGap }),
          ...(_0x181869.siblingGap === undefined
            ? null
            : { siblingGap: _0x181869.siblingGap }),
          ...(_0x181869.branchGap === undefined
            ? null
            : { branchGap: _0x181869.branchGap }),
        },
        _0x206ff0 = t.Tools["deepClone"](_0x12ea4c.element);
      _0x206ff0.custom = {
        ...(_0x206ff0.custom ?? {}),
        mindmap: {
          ...(((_0x42fd2c = _0x206ff0.custom) == null
            ? undefined
            : _0x42fd2c.mindmap) ?? {}),
          layout: _0x164690,
          structureRevision: (_0x48419a.structureRevision ?? 0) + 1,
        },
      };
      let _0x60ba7a = [],
        _0x38ed6b = [],
        _0x710362 = { ..._0x4caa1c },
        _0xf0dbc9 = Y(_0x12ea4c, _0x206ff0);
      if (
        (_0x60ba7a.push(_0xf0dbc9.redoMutation),
        _0x38ed6b.unshift(_0xf0dbc9.undoMutation),
        (_0x710362[_0x12ea4c.elementId] = X(_0x12ea4c, _0x206ff0)),
        _0x181869.direction !== undefined || _0x181869.structureKind)
      ) {
        let _0x232419 = Object.values(_0x4caa1c)
            .map((_0x501b05) => {
              let _0x36e359 = z(_0x501b05.element);
              return (_0x36e359 == null
                ? undefined
                : _0x36e359.structureScopeId) === _0x181869.scopeId &&
                _0x36e359.parentNodeId !== null
                ? { data: _0x501b05, meta: _0x36e359 }
                : null;
            })
            .filter((_0x2623c9) => !!_0x2623c9),
          _0x64da7b = K(_0x164690.structureKind),
          _0x1dbfd2 = new Map(),
          _0x304972 = new Map();
        (_0x232419.forEach((_0x473253) => {
          _0x304972.set(_0x473253.meta["parentNodeId"], [
            ...(_0x304972.get(_0x473253.meta["parentNodeId"]) ?? []),
            _0x473253,
          ]);
        }),
          _0x304972.forEach((_0x5912f3) => _0x5912f3.sort(ct)));
        let _0x33d24c = (_0x4d5b01, _0xdf9966) => {
          (_0x304972.get(_0x4d5b01) ?? []).forEach((_0x47be86, _0x4bb625) => {
            let _0x2e0b2c =
              _0x181869.direction === "left" || _0x181869.direction === "right"
                ? _0x181869.direction
                : _0x47be86.meta["parentNodeId"] === _0x48419a.rootNodeId
                  ? _0x181869.direction === "both" &&
                    _0x64da7b === "mindmap-horizontal"
                    ? lt(_0x4bb625, "right", "left")
                    : ut(_0x64da7b, _0x4bb625, _0x47be86.meta["side"])
                  : dt(_0xdf9966, _0x64da7b);
            (_0x1dbfd2.set(_0x47be86.data["elementId"], _0x2e0b2c),
              _0x33d24c(_0x47be86.data["elementId"], _0x2e0b2c));
          });
        };
        (_0x33d24c(_0x48419a.rootNodeId),
          _0x232419.forEach(({ data: _0x2f5f07, meta: _0x3541bc }) => {
            let _0x393a9a = It(_0x2f5f07, {
                scopeId: _0x181869.scopeId,
                parentNodeId: _0x3541bc.parentNodeId,
                orderKey: _0x3541bc.orderKey,
                side:
                  _0x1dbfd2.get(_0x2f5f07.elementId) ??
                  _0x3541bc.side ??
                  "right",
              }),
              _0x198c3d = Y(_0x2f5f07, _0x393a9a);
            (_0x60ba7a.push(_0x198c3d.redoMutation),
              _0x38ed6b.unshift(_0x198c3d.undoMutation),
              (_0x710362[_0x2f5f07.elementId] = X(_0x2f5f07, _0x393a9a)));
          }),
          Object.values(_0x4caa1c).forEach((_0x1d411e) => {
            let _0x3b4084 = B(_0x1d411e.element);
            if (
              (_0x3b4084 == null ? undefined : _0x3b4084.structureScopeId) !==
              _0x181869.scopeId
            )
              return;
            let _0x1c5e4e = Lt(_0x1d411e, {
                scopeId: _0x181869.scopeId,
                parentNodeId: _0x3b4084.parentNodeId,
                childNodeId: _0x3b4084.childNodeId,
                side: _0x1dbfd2.get(_0x3b4084.childNodeId) ?? "right",
                updateEndpoints: true,
              }),
              _0x18f4aa = Y(_0x1d411e, _0x1c5e4e);
            (_0x60ba7a.push(_0x18f4aa.redoMutation),
              _0x38ed6b.unshift(_0x18f4aa.undoMutation),
              (_0x710362[_0x1d411e.elementId] = X(_0x1d411e, _0x1c5e4e)));
          }));
      }
      let _0xd7d3e7 = Z(_0x710362, _0x181869.scopeId);
      if (
        (_0xd7d3e7 &&
          (_0x60ba7a.push(..._0xd7d3e7.redoMutations),
          _0x38ed6b.unshift(..._0xd7d3e7.undoMutations)),
        N(K(_0x164690.structureKind)))
      ) {
        let _0x2e9a64 = ln({
          unitId: _0x181869.unitId,
          subUnitId: _0x181869.subUnitId,
          scopeId: _0x181869.scopeId,
          elementData: _0x4caa1c,
          elementOrder: [..._0x31d371],
        });
        _0x2e9a64 &&
          (_0x60ba7a.push(_0x2e9a64.redoMutation),
          _0x38ed6b.unshift(_0x2e9a64.undoMutation));
      }
      return q(_0x555973, _0x181869.unitId, {
        redoMutations: _0x60ba7a,
        undoMutations: _0x38ed6b,
      });
    },
  };
function Q(_0x190fea, _0x11b53e = null, _0x31349d = 1, _0x1b9dc7) {
  return {
    success: false,
    fits: false,
    bounds: _0x11b53e,
    scale: _0x31349d,
    reason: _0x190fea,
    ...(_0x1b9dc7 ? { requiredBounds: _0x1b9dc7 } : null),
  };
}
function An(_0x5d3d49, _0x46db3f, _0x26a1c9) {
  let _0x2f874f = mn(_0x5d3d49, _0x46db3f, false),
    _0x3e4632 =
      _0x2f874f &&
      (0, e.resolveBoardElementWorldBounds)(_0x2f874f, _0x46db3f.scopeId);
  return (
    (!_0x3e4632 || !fn(_0x26a1c9, _0x3e4632)) &&
      _0x46db3f.compact !== false &&
      ((_0x2f874f = mn(_0x5d3d49, _0x46db3f, true)),
      (_0x3e4632 =
        _0x2f874f &&
        (0, e.resolveBoardElementWorldBounds)(_0x2f874f, _0x46db3f.scopeId))),
    _0x2f874f && _0x3e4632
      ? { elementData: _0x2f874f, bounds: _0x3e4632 }
      : null
  );
}
function jn(_0x2c519c) {
  var _0x260d89;
  let _0x86a23 = R(
    (_0x260d89 = _0x2c519c.preview[_0x2c519c.params["scopeId"]]) == null
      ? undefined
      : _0x260d89.element,
  );
  if (!N(K(_0x86a23 == null ? undefined : _0x86a23.layout["structureKind"])))
    return;
  let _0x545c02 = ln({
    unitId: _0x2c519c.params["unitId"],
    subUnitId: _0x2c519c.params["subUnitId"],
    scopeId: _0x2c519c.params["scopeId"],
    elementData: _0x2c519c.elementData,
    elementOrder: _0x2c519c.elementOrder,
  });
  _0x545c02 &&
    (_0x2c519c.mutations["redoMutations"].push(_0x545c02.redoMutation),
    _0x2c519c.mutations["undoMutations"].unshift(_0x545c02.undoMutation));
}
const Mn = {
    id: "board.command.mind-map.reflow",
    type: t.CommandType["COMMAND"],
    handler: (_0x7fe145, _0xf2d053) => {
      var _0x2ebe18;
      if (
        !(_0xf2d053 != null && _0xf2d053.unitId) ||
        !_0xf2d053.subUnitId ||
        !_0xf2d053.scopeId
      )
        return Q("invalid-options");
      let _0x39cdbd = _0xf2d053.padding ?? 0,
        _0x2d6326 = dn(_0xf2d053.bounds, _0x39cdbd);
      if (
        !_0x2d6326 ||
        !un(_0xf2d053.horizontalGap, p.horizontalGap) ||
        !un(_0xf2d053.siblingGap, p.siblingGap) ||
        !un(_0xf2d053.branchGap, p.branchGap)
      )
        return Q("invalid-options");
      let _0x1c1fb5 = _0x7fe145.get(e.IBoardElementService),
        _0x35d3dd = _0x1c1fb5.getElementData(
          _0xf2d053.unitId,
          _0xf2d053.subUnitId,
        ),
        _0x26a1d7 = (0, e.resolveBoardElementWorldBounds)(
          _0x35d3dd,
          _0xf2d053.scopeId,
        );
      if (
        !_0x26a1d7 ||
        !R(
          (_0x2ebe18 = _0x35d3dd[_0xf2d053.scopeId]) == null
            ? undefined
            : _0x2ebe18.element,
        )
      )
        return Q("mind-map-missing", _0x26a1d7);
      let _0x3327ea = An(_0x35d3dd, _0xf2d053, _0x2d6326);
      if (!_0x3327ea) return Q("mind-map-missing", _0x26a1d7);
      if (!fn(_0x2d6326, _0x3327ea.bounds))
        return Q(
          "bounds-too-small",
          _0x26a1d7,
          Math.min(
            _0x2d6326.width / _0x3327ea.bounds["width"],
            _0x2d6326.height / _0x3327ea.bounds["height"],
          ),
          _0x3327ea.bounds,
        );
      let _0x3040b7 = hn(_0x3327ea.elementData, _0xf2d053.scopeId, _0x2d6326);
      if (!_0x3040b7) return Q("mind-map-missing", _0x26a1d7);
      let _0x4874f2 = gn(_0x35d3dd, _0x3040b7.elementData, _0xf2d053.scopeId);
      return (
        jn({
          elementData: _0x35d3dd,
          elementOrder: [
            ..._0x1c1fb5.getElementOrder(_0xf2d053.unitId, _0xf2d053.subUnitId),
          ],
          mutations: _0x4874f2,
          params: _0xf2d053,
          preview: _0x3040b7.elementData,
        }),
        q(_0x7fe145, _0xf2d053.unitId, _0x4874f2)
          ? { success: true, fits: true, bounds: _0x3040b7.bounds, scale: 1 }
          : Q("execution-failed", _0x26a1d7)
      );
    },
  },
  Nn = {
    id: "board.operation.mind-map.change-branch-line-type",
    type: t.CommandType["OPERATION"],
    handler: (_0x5cc1f7, _0x21bdd1) =>
      !(_0x21bdd1 != null && _0x21bdd1.unitId) ||
      !_0x21bdd1.subUnitId ||
      !_0x21bdd1.scopeId ||
      !_0x21bdd1.branchLineType
        ? false
        : kn.handler(_0x5cc1f7, {
            unitId: _0x21bdd1.unitId,
            subUnitId: _0x21bdd1.subUnitId,
            scopeId: _0x21bdd1.scopeId,
            branchLineType: _0x21bdd1.branchLineType,
          }),
  },
  Pn = {
    id: "board.operation.mind-map.copy-node",
    type: t.CommandType["OPERATION"],
    handler: (_0x5896e7, _0x32c950) => {
      if (
        !(_0x32c950 != null && _0x32c950.unitId) ||
        !_0x32c950.subUnitId ||
        !_0x32c950.nodeId
      )
        return false;
      let _0x26794b = _0x5896e7
          .get(e.IBoardElementService)
          .getElementData(_0x32c950.unitId, _0x32c950.subUnitId),
        _0x16cd38 = G(_0x26794b, _0x32c950.nodeId);
      if (!_0x16cd38) return false;
      let _0x51ee65 = Gt(
        _0x26794b,
        _0x16cd38.meta["structureScopeId"],
        _0x32c950.nodeId,
      );
      return _0x51ee65.length
        ? (_0x5896e7
            .get(Xe)
            .setPayload({ rootNodeId: _0x32c950.nodeId, elements: _0x51ee65 }),
          true)
        : false;
    },
  },
  Fn = {
    id: "board.operation.mind-map.paste-node",
    type: t.CommandType["OPERATION"],
    handler: (_0x4cc073, _0x149b22) => {
      var _0x5d27ae, _0x58810f, _0x33a74d, _0x22927f, _0x2fc493;
      if (
        !(_0x149b22 != null && _0x149b22.unitId) ||
        !_0x149b22.subUnitId ||
        !_0x149b22.targetNodeId
      )
        return false;
      let _0x4a3981 = _0x4cc073.get(Xe).getPayload();
      if (!_0x4a3981) return false;
      let _0x2730ad = _0x4cc073
          .get(e.IBoardElementService)
          .getElementData(_0x149b22.unitId, _0x149b22.subUnitId),
        _0x5d6c68 = G(_0x2730ad, _0x149b22.targetNodeId);
      if (!_0x5d6c68) return false;
      let _0x5d717e = new Map(
          _0x4a3981.elements["map"]((_0x4f6f6c) => [_0x4f6f6c.id, _0x4f6f6c]),
        ).get(_0x4a3981.rootNodeId),
        _0x5bdb01 = z(_0x5d717e);
      if (!_0x5d717e || !_0x5bdb01) return false;
      let _0x586d2c = _0x4a3981.elements["filter"](
          (_0x2babaf) => !!z(_0x2babaf),
        ),
        _0x1f05df = new Map(
          _0x586d2c.map((_0x37c8ab) => [
            _0x37c8ab.id,
            Kt(_0x37c8ab.id, _0x149b22.idMap),
          ]),
        );
      _0x4a3981.elements["forEach"]((_0x1d8e6e) => {
        (B(_0x1d8e6e) || V(_0x1d8e6e)) &&
          _0x1f05df.set(_0x1d8e6e.id, Kt(_0x1d8e6e.id, _0x149b22.idMap));
      });
      let _0x885e9c = _0x1f05df.get(_0x4a3981.rootNodeId);
      if (!_0x885e9c) return false;
      let _0x2efee3 = ot(
          _0x2730ad,
          _0x5d6c68.meta["structureScopeId"],
          _0x149b22.targetNodeId,
        ),
        _0x380093 = R(
          (_0x5d27ae = _0x2730ad[_0x5d6c68.meta["structureScopeId"]]) == null
            ? undefined
            : _0x5d27ae.element,
        ),
        _0x19ddca = ft(_0x5d6c68.meta, _0x5bdb01.side),
        _0x20e44b = pt(_0x5d6c68.data["element"], _0x19ddca, _0x2efee3.length),
        _0x42d902 = _0x20e44b.left - (_0x5d717e.transform["left"] ?? 0),
        _0x269a35 = _0x20e44b.top - (_0x5d717e.transform["top"] ?? 0),
        _0x3fbb71 = Jt(_0x5d717e, {
          id: _0x885e9c,
          scopeId: _0x5d6c68.meta["structureScopeId"],
          parentNodeId: _0x149b22.targetNodeId,
          orderKey: st(_0x2efee3),
          side: _0x19ddca,
          deltaX: _0x42d902,
          deltaY: _0x269a35,
        }),
        _0x217157 = Ue({
          nodeId: _0x885e9c,
          connectorId:
            _0x149b22.incomingConnectorId ?? (0, t.generateRandomId)(6),
          scopeId: _0x5d6c68.meta["structureScopeId"],
          parentNode: _0x5d6c68.data["element"],
          orderKey:
            ((_0x58810f = z(_0x3fbb71)) == null
              ? undefined
              : _0x58810f.orderKey) ?? st(_0x2efee3),
          side: _0x19ddca,
          branchLineType:
            _0x380093 == null || (_0x33a74d = _0x380093.layout) == null
              ? undefined
              : _0x33a74d.branchLineType,
          treeRootTrunk:
            M(
              _0x380093 == null || (_0x22927f = _0x380093.layout) == null
                ? undefined
                : _0x22927f.structureKind,
            ) && _0x5d6c68.meta["parentNodeId"] === null,
          timelineRootStructureKind:
            N(
              _0x380093 == null || (_0x2fc493 = _0x380093.layout) == null
                ? undefined
                : _0x2fc493.structureKind,
            ) && _0x5d6c68.meta["parentNodeId"] === null
              ? _0x380093.layout["structureKind"]
              : undefined,
          left: _0x3fbb71.transform["left"] ?? _0x20e44b.left,
          top: _0x3fbb71.transform["top"] ?? _0x20e44b.top,
        }).connector,
        _0x19e435 = _0x586d2c
          .filter((_0x1a67cc) => _0x1a67cc.id !== _0x4a3981.rootNodeId)
          .map((_0x46d469) => {
            let _0x53c41e = z(_0x46d469),
              _0x29efab = _0x1f05df.get(_0x46d469.id),
              _0x5500a9 =
                _0x53c41e != null && _0x53c41e.parentNodeId
                  ? _0x1f05df.get(_0x53c41e.parentNodeId)
                  : undefined;
            return !_0x53c41e || !_0x29efab || !_0x5500a9
              ? null
              : Jt(_0x46d469, {
                  id: _0x29efab,
                  scopeId: _0x5d6c68.meta["structureScopeId"],
                  parentNodeId: _0x5500a9,
                  orderKey: _0x53c41e.orderKey,
                  side: _0x53c41e.side,
                  deltaX: _0x42d902,
                  deltaY: _0x269a35,
                });
          })
          .filter((_0x51acb2) => !!_0x51acb2),
        _0x59af58 = _0x4a3981.elements["map"]((_0x41e3f3) => {
          let _0x256d6f = B(_0x41e3f3);
          if (!_0x256d6f || !("connectorData" in _0x41e3f3)) return null;
          let _0x1bd461 = _0x1f05df.get(_0x41e3f3.id),
            _0x254262 = _0x1f05df.get(_0x256d6f.parentNodeId),
            _0x295cbc = _0x1f05df.get(_0x256d6f.childNodeId);
          return !_0x1bd461 || !_0x254262 || !_0x295cbc
            ? null
            : Yt(_0x41e3f3, {
                id: _0x1bd461,
                scopeId: _0x5d6c68.meta["structureScopeId"],
                parentNodeId: _0x254262,
                childNodeId: _0x295cbc,
                idMap: _0x1f05df,
                deltaX: _0x42d902,
                deltaY: _0x269a35,
              });
        }).filter((_0x3e3baa) => !!_0x3e3baa),
        _0x1d06d0 = _0x4a3981.elements["map"]((_0x4e1f18) => {
          let _0x503505 = V(_0x4e1f18),
            _0x3868bf = _0x1f05df.get(_0x4e1f18.id),
            _0x338d3b = _0x503505
              ? _0x1f05df.get(_0x503505.ownerNodeId)
              : undefined;
          return !_0x503505 || !_0x3868bf || !_0x338d3b
            ? null
            : Xt(_0x4e1f18, {
                id: _0x3868bf,
                scopeId: _0x5d6c68.meta["structureScopeId"],
                ownerNodeId: _0x338d3b,
                deltaX: _0x42d902,
                deltaY: _0x269a35,
              });
        }).filter((_0x2b5334) => !!_0x2b5334);
      return q(
        _0x4cc073,
        _0x149b22.unitId,
        mt({
          unitId: _0x149b22.unitId,
          subUnitId: _0x149b22.subUnitId,
          elements: [
            _0x3fbb71,
            ..._0x19e435,
            _0x217157,
            ..._0x59af58,
            ..._0x1d06d0,
          ],
        }),
      );
    },
  },
  In = {
    id: "board.operation.mind-map.paste-as-new",
    type: t.CommandType["OPERATION"],
    handler: (_0x22033e, _0x360321) => {
      if (
        !(_0x360321 != null && _0x360321.unitId) ||
        !_0x360321.subUnitId ||
        !Number.isFinite(_0x360321.left) ||
        !Number.isFinite(_0x360321.top)
      )
        return false;
      let _0xb0890a = _0x22033e.get(Xe).getPayload();
      if (!_0xb0890a) return false;
      let _0x1f2486 = _0x22033e
          .get(e.IBoardElementService)
          .getElementData(_0x360321.unitId, _0x360321.subUnitId),
        _0x91f01e = _0x360321.containerId ?? (0, t.generateRandomId)(6);
      if (_0x1f2486[_0x91f01e]) return false;
      let _0x1f96ae = new Map(
          _0xb0890a.elements["map"]((_0x5c5a9d) => [_0x5c5a9d.id, _0x5c5a9d]),
        ).get(_0xb0890a.rootNodeId),
        _0x9fbb83 = z(_0x1f96ae);
      if (!_0x1f96ae || !_0x9fbb83) return false;
      let _0x11330f = _0xb0890a.elements["filter"](
          (_0x1e33de) => !!z(_0x1e33de),
        ),
        _0x2ab5b6 = new Map(
          _0x11330f.map((_0x71c189) => [
            _0x71c189.id,
            Kt(_0x71c189.id, _0x360321.idMap),
          ]),
        );
      _0xb0890a.elements["forEach"]((_0x4645bb) => {
        (B(_0x4645bb) || V(_0x4645bb)) &&
          _0x2ab5b6.set(_0x4645bb.id, Kt(_0x4645bb.id, _0x360321.idMap));
      });
      let _0x49a220 = _0x2ab5b6.get(_0xb0890a.rootNodeId);
      if (!_0x49a220) return false;
      let _0xe91ae0 = _0x360321.left - (_0x1f96ae.transform["left"] ?? 0),
        _0x395005 = _0x360321.top - (_0x1f96ae.transform["top"] ?? 0),
        _0x47b7ee = Jt(_0x1f96ae, {
          id: _0x49a220,
          scopeId: _0x91f01e,
          parentNodeId: null,
          orderKey: "a0",
          deltaX: _0xe91ae0,
          deltaY: _0x395005,
        }),
        _0x3b94bb = _0x11330f
          .filter((_0x5415be) => _0x5415be.id !== _0xb0890a.rootNodeId)
          .map((_0x5a5e1f) => {
            let _0x3b3efc = z(_0x5a5e1f),
              _0x578d83 = _0x2ab5b6.get(_0x5a5e1f.id),
              _0x383c38 =
                _0x3b3efc != null && _0x3b3efc.parentNodeId
                  ? _0x2ab5b6.get(_0x3b3efc.parentNodeId)
                  : undefined;
            return !_0x3b3efc || !_0x578d83 || !_0x383c38
              ? null
              : Jt(_0x5a5e1f, {
                  id: _0x578d83,
                  scopeId: _0x91f01e,
                  parentNodeId: _0x383c38,
                  orderKey: _0x3b3efc.orderKey,
                  side: _0x3b3efc.side,
                  deltaX: _0xe91ae0,
                  deltaY: _0x395005,
                });
          })
          .filter((_0x16d2a3) => !!_0x16d2a3),
        _0x482e25 = _0xb0890a.elements["map"]((_0x82845c) => {
          let _0xc815a7 = B(_0x82845c);
          if (!_0xc815a7 || !("connectorData" in _0x82845c)) return null;
          let _0x455d07 = _0x2ab5b6.get(_0x82845c.id),
            _0x305b57 = _0x2ab5b6.get(_0xc815a7.parentNodeId),
            _0x48db05 = _0x2ab5b6.get(_0xc815a7.childNodeId);
          return !_0x455d07 || !_0x305b57 || !_0x48db05
            ? null
            : Yt(_0x82845c, {
                id: _0x455d07,
                scopeId: _0x91f01e,
                parentNodeId: _0x305b57,
                childNodeId: _0x48db05,
                idMap: _0x2ab5b6,
                deltaX: _0xe91ae0,
                deltaY: _0x395005,
              });
        }).filter((_0xde7e24) => !!_0xde7e24),
        _0x43629d = _0xb0890a.elements["map"]((_0x997d4d) => {
          let _0x3a3f21 = V(_0x997d4d),
            _0x2a2105 = _0x2ab5b6.get(_0x997d4d.id),
            _0x33b31c = _0x3a3f21
              ? _0x2ab5b6.get(_0x3a3f21.ownerNodeId)
              : undefined;
          return !_0x3a3f21 || !_0x2a2105 || !_0x33b31c
            ? null
            : Xt(_0x997d4d, {
                id: _0x2a2105,
                scopeId: _0x91f01e,
                ownerNodeId: _0x33b31c,
                deltaX: _0xe91ae0,
                deltaY: _0x395005,
              });
        }).filter((_0x41f544) => !!_0x41f544),
        _0x35b552 = [_0x47b7ee, ..._0x3b94bb],
        _0x3b804c = Pe({
          id: _0x91f01e,
          rootNodeId: _0x49a220,
          ...an(_0x35b552),
        });
      return q(
        _0x22033e,
        _0x360321.unitId,
        mt({
          unitId: _0x360321.unitId,
          subUnitId: _0x360321.subUnitId,
          elements: [_0x3b804c, ..._0x35b552, ..._0x482e25, ..._0x43629d],
        }),
      );
    },
  },
  Ln = {
    id: "board.operation.mind-map.toggle-collapse",
    type: t.CommandType["OPERATION"],
    handler: (_0x298f76, _0x1bd17a) => {
      if (
        !(_0x1bd17a != null && _0x1bd17a.unitId) ||
        !_0x1bd17a.subUnitId ||
        !_0x1bd17a.nodeId
      )
        return false;
      let _0x2a49d4 = _0x298f76
          .get(e.IBoardElementService)
          .getElementData(_0x1bd17a.unitId, _0x1bd17a.subUnitId),
        _0x2937b1 = G(_0x2a49d4, _0x1bd17a.nodeId);
      if (!_0x2937b1) return false;
      let _0x3a73ef = _0x1bd17a.collapsed ?? !_0x2937b1.meta["collapsed"],
        _0x6cff02 = [],
        _0x143c2c = [];
      return (
        kt(_0x2937b1.data, _0x3a73ef, _0x6cff02, _0x143c2c),
        _t(
          _0x2a49d4,
          _0x2937b1.meta["structureScopeId"],
          _0x1bd17a.nodeId,
          !_0x3a73ef,
          _0x6cff02,
          _0x143c2c,
        ),
        q(_0x298f76, _0x1bd17a.unitId, {
          redoMutations: _0x6cff02,
          undoMutations: _0x143c2c,
        })
      );
    },
  },
  Rn = [_n, vn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, Mn, Nn, kn, Pn, Fn, In, Ln],
  zn = /<!\s*(doctype|entity)\b/i,
  Bn = new Set(["text", "title"]);
function Vn(_0x2ebd8d) {
  return !!_0x2ebd8d && _0x2ebd8d.nodeType === 1;
}
function Hn(_0x7cc36d, _0x1c0bcd) {
  return Array.from(_0x7cc36d.children).filter(
    (_0x4015cc) => _0x4015cc.tagName["toLowerCase"]() === _0x1c0bcd,
  );
}
function Un(_0x57703d, _0x41af72) {
  return Hn(_0x57703d, _0x41af72)[0];
}
function Wn(_0x1d3931) {
  var _0x4a1b9b;
  return (
    (_0x1d3931 == null || (_0x4a1b9b = _0x1d3931.textContent) == null
      ? undefined
      : _0x4a1b9b.trim()) || undefined
  );
}
function Gn(_0x47df72) {
  return (
    _0x47df72.getAttribute("text") ??
    _0x47df72.getAttribute("title") ??
    "Add text"
  );
}
function Kn(_0x4ace6c) {
  let _0x34e8c8 = {};
  return (
    Array.from(_0x4ace6c.attributes).forEach((_0x2c9262) => {
      Bn.has(_0x2c9262.name) || (_0x34e8c8[_0x2c9262.name] = _0x2c9262.value);
    }),
    Object.keys(_0x34e8c8).length ? _0x34e8c8 : undefined
  );
}
function qn(_0x2969f0) {
  return {
    text: Gn(_0x2969f0),
    foreignAttributes: Kn(_0x2969f0),
    children: Hn(_0x2969f0, "outline").map(qn),
  };
}
function Jn(_0x331fb4, _0x2d4fa3) {
  return { text: _0x331fb4 || _0x2d4fa3 || "导入的大纲", children: [] };
}
function Yn(_0x54aae9, _0x2da3e8) {
  let _0x58e759 = [];
  if (zn.test(_0x54aae9))
    return {
      diagnostics: [
        {
          severity: "error",
          code: "unsafe-doctype",
          message:
            "OPML\x20containing\x20DOCTYPE\x20or\x20ENTITY\x20declarations\x20is\x20not\x20imported.",
        },
      ],
    };
  let _0xb84665 = new DOMParser().parseFromString(_0x54aae9, "text/xml");
  if (_0xb84665.getElementsByTagName("parsererror").length > 0)
    return {
      diagnostics: [
        {
          severity: "error",
          code: "invalid-xml",
          message: "OPML\x20XML\x20could\x20not\x20be\x20parsed.",
        },
      ],
    };
  let _0x4a0a71 = Un(_0xb84665.documentElement, "body")
    ? _0xb84665.documentElement
    : _0xb84665.getElementsByTagName("opml")[0];
  if (!Vn(_0x4a0a71))
    return {
      diagnostics: [
        {
          severity: "error",
          code: "missing-opml",
          message:
            "The\x20document\x20does\x20not\x20contain\x20an\x20OPML\x20root\x20element.",
        },
      ],
    };
  let _0x22fd9b = Un(_0x4a0a71, "head"),
    _0x8fb1a7 = Un(_0x4a0a71, "body"),
    _0x53f20e = Wn(Un(_0x22fd9b ?? _0x4a0a71, "title")),
    _0x34e97d = _0x8fb1a7 ? Hn(_0x8fb1a7, "outline").map(qn) : [];
  _0x34e97d.length ||
    _0x58e759.push({
      severity: "warning",
      code: "empty-body",
      message: "The OPML body does not contain outline nodes.",
    });
  let _0x22ccee =
    _0x34e97d.length === 1
      ? _0x34e97d[0]
      : {
          ...Jn(_0x53f20e, _0x2da3e8 == null ? undefined : _0x2da3e8.fileName),
          children: _0x34e97d,
        };
  return {
    blueprint: { title: _0x53f20e ?? _0x22ccee.text, root: _0x22ccee },
    diagnostics: _0x58e759,
  };
}
function Xn(_0x34f463) {
  return _0x34f463
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
function Zn(_0x2a8cfc) {
  return _0x2a8cfc
    ? Object.entries(_0x2a8cfc)
        .map(
          ([_0x1e2379, _0x56b2e0]) =>
            "\x20" + _0x1e2379 + "=\x22" + Xn(_0x56b2e0) + "\x22",
        )
        .join("")
    : "";
}
function Qn(_0x586c85, _0x3dbb64) {
  let _0x667d4f = "\x20\x20\x20\x20"["repeat"](_0x3dbb64),
    _0x1db794 =
      'text="' + Xn(_0x586c85.text) + "\x22" + Zn(_0x586c85.foreignAttributes);
  return _0x586c85.children["length"]
    ? [
        _0x667d4f + "<outline " + _0x1db794 + ">",
        ..._0x586c85.children["map"]((_0x444ed7) =>
          Qn(_0x444ed7, _0x3dbb64 + 1),
        ),
        _0x667d4f + "</outline>",
      ].join("\x0a")
    : _0x667d4f + "<outline " + _0x1db794 + " />";
}
function $n(_0x53af84) {
  let _0x3a8b5a = _0x53af84.title ?? _0x53af84.root["text"],
    _0x1e0013 = _0x53af84.root["children"].length
      ? _0x53af84.root["children"]
      : [_0x53af84.root];
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<opml version="2.0">',
    " <head>",
    " <title>" + Xn(_0x3a8b5a) + "</title>",
    " </head>",
    " <body>",
    ..._0x1e0013.map((_0x3b7de6) => Qn(_0x3b7de6, 2)),
    " </body>",
    "</opml>",
  ].join("\x0a");
}
function er(_0x130383, _0x57fda8, _0x137780) {
  let _0x5a4e4e = _0x137780 < 0 ? _0x57fda8.length : _0x137780;
  _0x57fda8.slice(-_0x5a4e4e).forEach((_0x45c023) => {
    _0x130383.syncExecuteCommand(_0x45c023.id, _0x45c023.params);
  });
}
function tr(_0x1def6b, _0x3e3615) {
  let _0x15a92a = He({
    containerId: _0x1def6b.containerId,
    rootNodeId: _0x1def6b.rootNodeId,
    left: _0x1def6b.left,
    top: _0x1def6b.top,
    blueprint: _0x3e3615,
  });
  return (
    (_0x15a92a.container["custom"] = {
      ..._0x15a92a.container["custom"],
      mindmap: {
        ..._0x15a92a.container["custom"].mindmap,
        sourceProvenance: {
          format: "opml",
          ...(_0x1def6b.fileName ? { fileName: _0x1def6b.fileName } : null),
          importedAt: Date.now(),
        },
      },
    }),
    _0x15a92a.elements
  );
}
const nr = {
  id: "board.operation.mind-map.import-opml",
  type: t.CommandType["OPERATION"],
  handler: (_0x41ee38, _0xcbd50e) => {
    var _0x22a416;
    if (
      !(_0xcbd50e != null && _0xcbd50e.unitId) ||
      !_0xcbd50e.subUnitId ||
      !_0xcbd50e.opml ||
      !Number.isFinite(_0xcbd50e.left) ||
      !Number.isFinite(_0xcbd50e.top)
    )
      return {
        success: false,
        diagnostics: [
          {
            severity: "error",
            code: "invalid-params",
            message: "Missing import parameters.",
          },
        ],
      };
    let _0x29e3c1 = Yn(_0xcbd50e.opml, { fileName: _0xcbd50e.fileName });
    if (!_0x29e3c1.blueprint)
      return { success: false, diagnostics: _0x29e3c1.diagnostics };
    let _0x2845ff = tr(_0xcbd50e, _0x29e3c1.blueprint),
      _0x208efe = _0x41ee38.get(e.IBoardElementService),
      _0x212aef = _0x208efe.getElementData(
        _0xcbd50e.unitId,
        _0xcbd50e.subUnitId,
      ),
      _0x4380c8 = _0x208efe.getElementOrder(
        _0xcbd50e.unitId,
        _0xcbd50e.subUnitId,
      ),
      _0x1c9fbf = (0, e.createAddBoardElementsMutationInfos)({
        unitId: _0xcbd50e.unitId,
        subUnitId: _0xcbd50e.subUnitId,
        elements: _0x2845ff,
        insertIndex: _0xcbd50e.insertIndex,
        elementData: _0x212aef,
        elementOrder: _0x4380c8,
      });
    if (!_0x1c9fbf)
      return {
        success: false,
        diagnostics: [
          {
            severity: "error",
            code: "add-elements-failed",
            message:
              "Unable\x20to\x20create\x20board\x20elements\x20for\x20imported\x20OPML.",
          },
        ],
      };
    let _0x5496f2 = _0x41ee38.get(t.ICommandService),
      _0x298963 = (0, t.sequenceExecute)(_0x1c9fbf.redoMutations, _0x5496f2);
    return _0x298963.result
      ? (_0x41ee38
          .get(t.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0xcbd50e.unitId,
            redoMutations: _0x1c9fbf.redoMutations,
            undoMutations: _0x1c9fbf.undoMutations,
          }),
        {
          success: true,
          diagnostics: _0x29e3c1.diagnostics,
          containerId: _0x2845ff[0].id,
          rootNodeId:
            (_0x22a416 = R(_0x2845ff[0])) == null
              ? undefined
              : _0x22a416.rootNodeId,
          nodeCount: _0x2845ff.filter((_0x3b3020) => !!z(_0x3b3020)).length,
        })
      : (er(_0x5496f2, _0x1c9fbf.undoMutations, _0x298963.index),
        {
          success: false,
          diagnostics: [
            {
              severity: "error",
              code: "mutation-failed",
              message: "Unable to add imported mind-map elements.",
            },
          ],
        });
  },
};
function rr(_0x189c87) {
  let _0x1557a9 =
    "shapeData" in _0x189c87 ? _0x189c87.shapeData["shapeText"] : undefined;
  return (_0x1557a9 == null ? undefined : _0x1557a9.text) ?? "Add text";
}
function ir(_0x55d2ef, _0x39e43c, _0x30e0bf) {
  return Object.values(_0x55d2ef)
    .filter((_0x2c29a2) => {
      let _0xc7010d = z(_0x2c29a2.element);
      return (
        (_0xc7010d == null ? undefined : _0xc7010d.structureScopeId) ===
          _0x39e43c && _0xc7010d.parentNodeId === _0x30e0bf
      );
    })
    .sort((_0x45dee5, _0x2a353d) => {
      let _0x292e95 = z(_0x45dee5.element),
        _0x4986b9 = z(_0x2a353d.element);
      return (
        O(
          _0x292e95 == null ? undefined : _0x292e95.orderKey,
          _0x4986b9 == null ? undefined : _0x4986b9.orderKey,
        ) || _0x45dee5.elementId["localeCompare"](_0x2a353d.elementId)
      );
    });
}
function ar(_0x5b0b7c, _0x5edad7, _0x409f29) {
  let _0x45a8ec = z(_0x409f29.element);
  return {
    text: rr(_0x409f29.element),
    foreignAttributes:
      _0x45a8ec == null ? undefined : _0x45a8ec.foreignAttributes,
    collapsed: _0x45a8ec == null ? undefined : _0x45a8ec.collapsed,
    children: ir(_0x5b0b7c, _0x5edad7, _0x409f29.elementId).map((_0x5ea947) =>
      ar(_0x5b0b7c, _0x5edad7, _0x5ea947),
    ),
  };
}
const or = {
    id: "board.operation.mind-map.export-opml",
    type: t.CommandType["OPERATION"],
    handler: (_0x49d541, _0x2a8f60) => {
      if (
        !(_0x2a8f60 != null && _0x2a8f60.unitId) ||
        !_0x2a8f60.subUnitId ||
        !_0x2a8f60.scopeId
      )
        return false;
      let _0x51bf77 = _0x49d541
          .get(e.IBoardElementService)
          .getElementData(_0x2a8f60.unitId, _0x2a8f60.subUnitId),
        _0x2342ce = Object.values(_0x51bf77).find((_0x3b7640) => {
          let _0x513a5e = z(_0x3b7640.element);
          return (
            (_0x513a5e == null ? undefined : _0x513a5e.structureScopeId) ===
              _0x2a8f60.scopeId && _0x513a5e.parentNodeId === null
          );
        });
      return _0x2342ce
        ? $n({
            title: rr(_0x2342ce.element),
            root: ar(_0x51bf77, _0x2a8f60.scopeId, _0x2342ce),
          })
        : false;
    },
  },
  sr = [nr, or];
var cr = "@univerjs-pro/boards-mind",
  lr = "1.0.0-insiders.20260907-70fc579";
const ur = {};
function dr(_0x18d789, _0x41ee30) {
  return function (_0x24a056, _0x3e6c80) {
    _0x41ee30(_0x24a056, _0x3e6c80, _0x18d789);
  };
}
function fr(_0x3bb2aa, _0x5031f6, _0x9d4ac1, _0xe3a974) {
  var _0x353420 = arguments.length,
    _0x1fce10 =
      _0x353420 < 3
        ? _0x5031f6
        : _0xe3a974 === null
          ? (_0xe3a974 = Object.getOwnPropertyDescriptor(_0x5031f6, _0x9d4ac1))
          : _0xe3a974,
    _0xf5ee73;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x1fce10 = Reflect.decorate(_0x3bb2aa, _0x5031f6, _0x9d4ac1, _0xe3a974);
  else {
    for (var _0x3169b0 = _0x3bb2aa.length - 1; _0x3169b0 >= 0; _0x3169b0--)
      (_0xf5ee73 = _0x3bb2aa[_0x3169b0]) &&
        (_0x1fce10 =
          (_0x353420 < 3
            ? _0xf5ee73(_0x1fce10)
            : _0x353420 > 3
              ? _0xf5ee73(_0x5031f6, _0x9d4ac1, _0x1fce10)
              : _0xf5ee73(_0x5031f6, _0x9d4ac1)) || _0x1fce10);
  }
  return (
    _0x353420 > 3 &&
      _0x1fce10 &&
      Object.defineProperty(_0x5031f6, _0x9d4ac1, _0x1fce10),
    _0x1fce10
  );
}
let $ = class extends t.Plugin {
  constructor(_0x18622c = ur, _0x428d22, _0x54e757, _0x1b0d40) {
    (super(),
      (this._config = _0x18622c),
      (this._injector = _0x428d22),
      (this._commandService = _0x54e757),
      (this._configService = _0x1b0d40));
    let { ..._0x4e15ac } = (0, t.merge)({}, ur, this._config);
    this._configService["setConfig"]("boards-mind.config", _0x4e15ac);
  }
  onStarting() {
    (this._injector["add"]([Xe, { useClass: Ze }]),
      this.disposeWithMe(this._commandService["registerCommand"](H)),
      this.disposeWithMe(this._commandService["registerCommand"](Ke)),
      Rn.forEach((_0x4da7c3) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x4da7c3));
      }),
      sr.forEach((_0x25c841) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x25c841));
      }));
  }
};
(W($, "pluginName", "UNIVER_BOARDS_MIND_PLUGIN"),
  W($, "packageName", cr),
  W($, "version", lr),
  W($, "type", t.UniverInstanceType["UNIVER_BOARD"]),
  ($ = fr(
    [
      (0, t.DependentOn)(r.UniverLicensePlugin, e.UniverBoardsPlugin),
      dr(1, (0, t.Inject)(t.Injector)),
      dr(2, t.ICommandService),
      dr(3, t.IConfigService),
    ],
    $,
  )),
  (exports.AddMindMapChildOperation = _n),
  (exports.AddMindMapSiblingOperation = vn),
  (exports.ChangeMindMapBranchLineTypeOperation = Nn),
  (exports.ChangeMindMapLayoutOperation = kn),
  (exports.CopyMindMapNodeOperation = Pn),
  (exports.DeleteMindMapNodeOperation = Cn),
  (exports.DetachMindMapNodeOperation = En),
  (exports.ExportMindMapOpmlOperation = or),
  (exports.IMindMapClipboardService = Xe),
  (exports.ImportMindMapOpmlOperation = nr),
  (exports.InsertBoardMindMapOperation = Ke),
  (exports.LayoutMindMapOperation = On),
  (exports.MIND_MAP_CONNECTOR_ROLE = s),
  (exports.MIND_MAP_DEFAULT_LAYOUT = f),
  (exports.MIND_MAP_DEFAULT_NODE_SIZE = m),
  (exports.MIND_MAP_DEFAULT_NODE_TEXT = "Add text"),
  (exports.MIND_MAP_LAYOUT_SPACING_LIMITS = p),
  (exports.MIND_MAP_MODE_ID = i),
  (exports.MIND_MAP_NODE_ROLE = o),
  (exports.PasteMindMapAsNewMindMapOperation = In),
  (exports.PasteMindMapNodeOperation = Fn),
  (exports.PromoteMindMapNodeOperation = Tn),
  (exports.ReflowMindMapCommand = Mn),
  (exports.ReparentMindMapNodeOperation = wn),
  (exports.SetMindMapElementMutation = H),
  (exports.ToggleMindMapNodeCollapseOperation = Ln),
  (exports.TranslateMindMapOperation = Dn),
  Object.defineProperty(exports, "UniverBoardsMindPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.UpdateMindMapIncomingConnectorOperation = Sn),
  (exports.UpdateMindMapNodeOperation = bn),
  (exports.UpdateMindMapNodesOperation = xn),
  (exports.compareMindMapOrderKey = O),
  (exports.createMindMapElements = Re),
  (exports.createMindMapElementsFromBlueprint = He),
  (exports.getMindMapConnectorMeta = B),
  (exports.getMindMapContainerMeta = R),
  (exports.getMindMapDefaultChildOrderKey = A),
  (exports.getMindMapNodeMeta = z),
  (exports.isMindMapPlainStructureKind = _e),
  (exports.resolveMindMapBranchLineTypeForStructure = P),
  (exports.resolveMindMapLayoutPreview = sn),
  (exports.resolveMindMapNodeHostSize = de));
