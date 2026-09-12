Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/edit-history"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs-pro/slides"),
  r = require("@univerjs/core"),
  i = require("@univerjs/protocol");
var a = "@univerjs-pro/slides-history",
  o = "1.0.0-insiders.20260907-70fc579";
const s = {};
function c(_0x300863, _0x4b96b6) {
  return function (_0x2b0980, _0x44aca8) {
    _0x4b96b6(_0x2b0980, _0x44aca8, _0x300863);
  };
}
function l(_0x33660f, _0x11e266, _0x14b4f0, _0x380257) {
  var _0x5385dd = _0x2a51a8,
    _0x13dc77 = arguments.length,
    _0x4f94fc =
      _0x13dc77 < 3
        ? _0x11e266
        : _0x380257 === null
          ? (_0x380257 = Object[_0x5385dd(343)](_0x11e266, _0x14b4f0))
          : _0x380257,
    _0x408288;
  if (
    typeof Reflect == _0x5385dd(340) &&
    typeof Reflect[_0x5385dd(269)] == _0x5385dd(351)
  )
    _0x4f94fc = Reflect[_0x5385dd(269)](
      _0x33660f,
      _0x11e266,
      _0x14b4f0,
      _0x380257,
    );
  else {
    for (
      var _0x360fb3 = _0x33660f[_0x5385dd(281)] - 1;
      _0x360fb3 >= 0;
      _0x360fb3--
    )
      (_0x408288 = _0x33660f[_0x360fb3]) &&
        (_0x4f94fc =
          (_0x13dc77 < 3
            ? _0x408288(_0x4f94fc)
            : _0x13dc77 > 3
              ? _0x408288(_0x11e266, _0x14b4f0, _0x4f94fc)
              : _0x408288(_0x11e266, _0x14b4f0)) || _0x4f94fc);
  }
  return (
    _0x13dc77 > 3 &&
      _0x4f94fc &&
      Object[_0x5385dd(283)](_0x11e266, _0x14b4f0, _0x4f94fc),
    _0x4f94fc
  );
}
let u = class extends r.Disposable {
  constructor(_0x8b17c2, _0x3739ba, _0x2e7bc3, _0x1d1463) {
    (super(),
      (this._authzIoService = _0x3739ba),
      (this._commandService = _0x2e7bc3),
      (this._univerInstanceService = _0x1d1463),
      this.disposeWithMe(
        _0x8b17c2.register({
          type: r.UniverInstanceType["UNIVER_SLIDE"],
          canView: (_0x1ccb8c) =>
            this._hasPermission(_0x1ccb8c, i.UnitAction["ViewHistory"]),
          canRevert: (_0x3062a3) =>
            !!this._getSlide(_0x3062a3) &&
            this._hasPermission(_0x3062a3, i.UnitAction["RecoverHistory"]),
          captureLocation: (_0x4975ff) => {
            var _0x5d17ad = _0x1c30d5,
              _0x17d735;
            return {
              slideId:
                (_0x17d735 = this._getSlide(_0x4975ff)) == null ||
                (_0x17d735 = _0x17d735.pageManager["getActiveSlide"]()) == null
                  ? undefined
                  : _0x17d735[_0x5d17ad(352)](),
            };
          },
          restoreLocation: (_0x473f6f, _0xecb2f6) =>
            this._restoreLocation(
              _0x473f6f,
              d(_0xecb2f6) ? _0xecb2f6 : undefined,
            ),
        }),
      ));
  }
  async _restoreLocation(_0x149e16, _0x5b296b) {
    var _0x55715c = _0x2a51a8,
      _0x5028d4;
    !(_0x5b296b != null && _0x5b296b[_0x55715c(295)]) ||
      !(
        (_0x5028d4 = this[_0x55715c(231)](_0x149e16)) != null &&
        _0x5028d4[_0x55715c(261)][_0x55715c(229)](_0x5b296b[_0x55715c(295)])
      ) ||
      (await this[_0x55715c(253)].executeCommand(
        n.SetActiveSlideCommand["id"],
        { unitId: _0x149e16, subUnitId: _0x5b296b[_0x55715c(295)] },
      ));
  }
  _getSlide(_0x129941) {
    return (
      this._univerInstanceService["getUnit"](
        _0x129941,
        r.UniverInstanceType["UNIVER_SLIDE"],
      ) ?? null
    );
  }
  async _hasPermission(_0x1fe011, _0x24d1c4) {
    return (
      await this._authzIoService["allowed"]({
        unitID: _0x1fe011,
        objectID: _0x1fe011,
        objectType: i.UnitObject["Slide"],
        actions: [_0x24d1c4],
      })
    ).some((_0x831b6d) => _0x831b6d.action === _0x24d1c4 && _0x831b6d.allowed);
  }
};
u = l(
  [
    c(0, (0, r.Inject)(e.HistoryUnitAdapterRegistryService)),
    c(1, r.IAuthzIoService),
    c(2, r.ICommandService),
    c(3, r.IUniverInstanceService),
  ],
  u,
);
function d(_0x561540) {
  return (
    typeof _0x561540 == "object" &&
    !!_0x561540 &&
    (!("slideId" in _0x561540) || typeof _0x561540.slideId == "string")
  );
}
function f(_0x25b48c) {
  return _0x25b48c.flatMap((_0xbc248a, _0x3b90fe) =>
    m(_0xbc248a.mutation["params"]).map((_0x49e730, _0x1a5d6f) => ({
      id: _0xbc248a.revision + ":" + _0x3b90fe + ":" + _0x1a5d6f,
      kind: p(_0xbc248a.mutation["id"]),
      label: _0x49e730.drawingId ? "slide:element" : "slide:page",
      memberId: _0xbc248a.memberId,
      slideId: _0x49e730.slideId,
      drawingId: _0x49e730.drawingId,
    })),
  );
}
function p(_0x5a8826) {
  return _0x5a8826 === n.AddSlideElementMutation["id"] ||
    _0x5a8826 === n.AddSlidePageMutation["id"] ||
    _0x5a8826 === n.InsertDrawingObjectMutation["id"]
    ? "insert"
    : _0x5a8826 === n.RemoveSlideElementMutation["id"] ||
        _0x5a8826 === n.RemoveSlidePageMutation["id"]
      ? "delete"
      : "update";
}
function m(_0xb7aec4) {
  if (!y(_0xb7aec4)) return [];
  let _0x250a10 =
    h(_0xb7aec4, "subUnitId") ??
    h(_0xb7aec4, "slideId") ??
    h(_0xb7aec4, "pageId") ??
    g(_0xb7aec4, "slide");
  if (!_0x250a10) return [];
  let _0x291603 = [
      h(_0xb7aec4, "drawingId"),
      g(_0xb7aec4, "element"),
      ..._(_0xb7aec4, "drawings"),
      ..._(_0xb7aec4, "objects"),
      ...v(_0xb7aec4, "drawingIds"),
    ].filter((_0x43ab5c) => !!_0x43ab5c),
    _0x201dda = [...new Set(_0x291603)];
  return _0x201dda.length
    ? _0x201dda.map((_0x620c0e) => ({
        slideId: _0x250a10,
        drawingId: _0x620c0e,
      }))
    : [{ slideId: _0x250a10 }];
}
function h(_0x9c264a, _0xacc634) {
  return typeof _0x9c264a[_0xacc634] == "string"
    ? _0x9c264a[_0xacc634]
    : undefined;
}
function g(_0x23f1e9, _0x5a1b62) {
  if (y(_0x23f1e9[_0x5a1b62]))
    return (
      h(_0x23f1e9[_0x5a1b62], "id") ?? h(_0x23f1e9[_0x5a1b62], "drawingId")
    );
}
function _(_0x5af339, _0x31dd5f) {
  return Array.isArray(_0x5af339[_0x31dd5f])
    ? _0x5af339[_0x31dd5f].flatMap((_0x1948f4) =>
        y(_0x1948f4)
          ? [h(_0x1948f4, "id") ?? h(_0x1948f4, "drawingId")].filter(
              (_0x3bdcb7) => !!_0x3bdcb7,
            )
          : [],
      )
    : [];
}
function v(_0x75c532, _0x4d0a9c) {
  return Array.isArray(_0x75c532[_0x4d0a9c])
    ? _0x75c532[_0x4d0a9c].filter((_0x51c672) => typeof _0x51c672 == "string")
    : [];
}
function y(_0x393ac8) {
  return typeof _0x393ac8 == "object" && !!_0x393ac8;
}
let b = class {
  constructor(_0x25999b) {
    this._mutationService = _0x25999b;
  }
  async compare(_0x37bdc9, _0x59bd52) {
    return f(await this._mutationService["load"](_0x37bdc9, _0x59bd52));
  }
};
b = l([c(0, (0, r.Inject)(e.HistoryMutationService))], b);
function x(_0x3dd070) {
  "@babel/helpers - typeof";
  return (
    (x =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x169638) {
            return typeof _0x169638;
          }
        : function (_0x48f57b) {
            return _0x48f57b &&
              typeof Symbol == "function" &&
              _0x48f57b.constructor === Symbol &&
              _0x48f57b !== Symbol.prototype
              ? "symbol"
              : typeof _0x48f57b;
          }),
    x(_0x3dd070)
  );
}
function S(_0x51d54e, _0x45165b) {
  if (x(_0x51d54e) != "object" || !_0x51d54e) return _0x51d54e;
  var _0x25ddae = _0x51d54e[Symbol.toPrimitive];
  if (_0x25ddae !== undefined) {
    var _0x82a603 = _0x25ddae.call(_0x51d54e, _0x45165b || "default");
    if (x(_0x82a603) != "object") return _0x82a603;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x45165b === "string" ? String : Number)(_0x51d54e);
}
function C(_0x3c3246) {
  var _0x292361 = _0x2a51a8,
    _0x537671 = S(_0x3c3246, _0x292361(353));
  return x(_0x537671) == _0x292361(276) ? _0x537671 : _0x537671 + "";
}
function w(_0x3e6905, _0x3f4bdf, _0xa224b4) {
  return (
    (_0x3f4bdf = C(_0x3f4bdf)) in _0x3e6905
      ? Object.defineProperty(_0x3e6905, _0x3f4bdf, {
          value: _0xa224b4,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3e6905[_0x3f4bdf] = _0xa224b4),
    _0x3e6905
  );
}
const T = [
    e.UnitComparisonEntityType["UNIT"],
    e.UnitComparisonEntityType["SLIDE"],
    e.UnitComparisonEntityType["SLIDE_ELEMENT"],
    e.UnitComparisonEntityType["SLIDE_TRANSITION"],
    e.UnitComparisonEntityType["SLIDE_TRANSITION_REFERENCE"],
    e.UnitComparisonEntityType["SLIDE_MASTER"],
    e.UnitComparisonEntityType["SLIDE_LAYOUT"],
    e.UnitComparisonEntityType["SLIDE_THEME"],
    e.UnitComparisonEntityType["SLIDE_CHART"],
    e.UnitComparisonEntityType["SLIDE_CHART_DATA"],
    e.UnitComparisonEntityType["SLIDE_TABLE"],
  ],
  E = (0, e.withoutComparisonKeys)(
    "slides",
    "slideOrder",
    "resources",
    "transitionRecords",
    "slideTransitionRefs",
    "masterPages",
    "layoutPages",
    "theme",
    "activeSlideId",
    "zoomRatio",
    "rev",
  );
var D = class {
  constructor() {
    w(this, "type", r.UniverInstanceType["UNIVER_SLIDE"]);
  }
  compare(_0x784971) {
    let _0x268a09 = (0, e.asRecord)(_0x784971.leftData),
      _0x41be60 = (0, e.asRecord)(_0x784971.rightData),
      _0x773e77 = (0, e.asRecord)(
        _0x268a09 == null ? undefined : _0x268a09.slides,
      ),
      _0x2300a7 = (0, e.asRecord)(
        _0x41be60 == null ? undefined : _0x41be60.slides,
      ),
      _0x12fb36 = new Set([
        ...Object.keys(_0x773e77 ?? {}),
        ...Object.keys(_0x2300a7 ?? {}),
      ]),
      _0x138db2 = (0, e.withoutComparisonKeys)("elements", "elementOrder"),
      _0x468b54 = (0, e.recordComparisonEntries)(
        _0x773e77,
        _0x268a09 == null ? undefined : _0x268a09.slideOrder,
        _0x138db2,
      ),
      _0x35e170 = (0, e.recordComparisonEntries)(
        _0x2300a7,
        _0x41be60 == null ? undefined : _0x41be60.slideOrder,
        _0x138db2,
      ),
      _0x34d98c = [
        ...k(e.UnitComparisonEntityType["UNIT"], E(_0x268a09), E(_0x41be60)),
        ...(0, e.buildSemanticComparisonItems)({
          entityType: e.UnitComparisonEntityType["SLIDE"],
          left: _0x468b54,
          right: _0x35e170,
        }),
        ...[..._0x12fb36].flatMap((_0x1201af) => {
          var _0x5d6423 = _0x34638c,
            _0xe5a49d,
            _0x39589a,
            _0x444a76,
            _0x5e8d02;
          return (0, e[_0x5d6423(255)])({
            entityType: e[_0x5d6423(241)][_0x5d6423(357)],
            parentStableId: _0x1201af,
            left: (0, e[_0x5d6423(292)])(
              (_0xe5a49d = (0, e[_0x5d6423(347)])(
                _0x773e77 == null ? undefined : _0x773e77[_0x1201af],
              )) == null
                ? undefined
                : _0xe5a49d[_0x5d6423(358)],
              (_0x39589a = (0, e[_0x5d6423(347)])(
                _0x773e77 == null ? undefined : _0x773e77[_0x1201af],
              )) == null
                ? undefined
                : _0x39589a[_0x5d6423(249)],
            ),
            right: (0, e[_0x5d6423(292)])(
              (_0x444a76 = (0, e.asRecord)(
                _0x2300a7 == null ? undefined : _0x2300a7[_0x1201af],
              )) == null
                ? undefined
                : _0x444a76[_0x5d6423(358)],
              (_0x5e8d02 = (0, e[_0x5d6423(347)])(
                _0x2300a7 == null ? undefined : _0x2300a7[_0x1201af],
              )) == null
                ? undefined
                : _0x5e8d02[_0x5d6423(249)],
            ),
          });
        }),
        ...O(
          e.UnitComparisonEntityType["SLIDE_TRANSITION"],
          _0x268a09 == null ? undefined : _0x268a09.transitionRecords,
          _0x41be60 == null ? undefined : _0x41be60.transitionRecords,
        ),
        ...O(
          e.UnitComparisonEntityType["SLIDE_TRANSITION_REFERENCE"],
          _0x268a09 == null ? undefined : _0x268a09.slideTransitionRefs,
          _0x41be60 == null ? undefined : _0x41be60.slideTransitionRefs,
        ),
        ...O(
          e.UnitComparisonEntityType["SLIDE_MASTER"],
          _0x268a09 == null ? undefined : _0x268a09.masterPages,
          _0x41be60 == null ? undefined : _0x41be60.masterPages,
        ),
        ...O(
          e.UnitComparisonEntityType["SLIDE_LAYOUT"],
          _0x268a09 == null ? undefined : _0x268a09.layoutPages,
          _0x41be60 == null ? undefined : _0x41be60.layoutPages,
        ),
        ...k(
          e.UnitComparisonEntityType["SLIDE_THEME"],
          _0x268a09 == null ? undefined : _0x268a09.theme,
          _0x41be60 == null ? undefined : _0x41be60.theme,
        ),
        ...A(
          e.UnitComparisonEntityType["SLIDE_CHART"],
          _0x784971,
          "SLIDE_CHART_PLUGIN",
          "charts",
        ),
        ...A(
          e.UnitComparisonEntityType["SLIDE_CHART_DATA"],
          _0x784971,
          "SLIDE_CHART_PLUGIN",
          "dataSources",
        ),
        ...A(
          e.UnitComparisonEntityType["SLIDE_TABLE"],
          _0x784971,
          "SLIDE_TABLE_PLUGIN",
          "tables",
        ),
      ],
      _0x36c3a9 = (0, e.buildScopedUnitComparison)({
        entityType: e.UnitComparisonEntityType["SLIDE"],
        items: _0x34d98c,
        left: _0x468b54,
        right: _0x35e170,
        references: {
          left: (0, e.recordComparisonEntries)(
            _0x773e77,
            _0x268a09 == null ? undefined : _0x268a09.slideOrder,
          ),
          right: (0, e.recordComparisonEntries)(
            _0x2300a7,
            _0x41be60 == null ? undefined : _0x41be60.slideOrder,
          ),
        },
      });
    return {
      items: _0x36c3a9.items,
      supportedEntityTypes: T,
      scopes: _0x36c3a9.scopes,
      productContext: { type: r.UniverInstanceType["UNIVER_SLIDE"] },
    };
  }
};
function O(_0x5453ba, _0x21fbd3, _0x257920) {
  return (0, e.buildSemanticComparisonItems)({
    entityType: _0x5453ba,
    left: (0, e.recordComparisonEntries)(_0x21fbd3, undefined),
    right: (0, e.recordComparisonEntries)(_0x257920, undefined),
  });
}
function k(_0x5f37cc, _0x2e86f4, _0x2f6dca) {
  return (0, e.buildSemanticComparisonItems)({
    entityType: _0x5f37cc,
    left:
      _0x2e86f4 === undefined
        ? []
        : [{ stableId: "root", position: 0, value: _0x2e86f4 }],
    right:
      _0x2f6dca === undefined
        ? []
        : [{ stableId: "root", position: 0, value: _0x2f6dca }],
  });
}
function A(_0x1e6642, _0x2e95a1, _0x39de45, _0x53da71) {
  return (0, e.buildSemanticComparisonItems)({
    entityType: _0x1e6642,
    left: (0, e.resourceComparisonEntries)(
      _0x2e95a1.leftData,
      _0x39de45,
      _0x53da71,
    ),
    right: (0, e.resourceComparisonEntries)(
      _0x2e95a1.rightData,
      _0x39de45,
      _0x53da71,
    ),
  });
}
let j = class extends r.Plugin {
  constructor(_0x1618e6 = s, _0x2e5d87, _0x2deed5) {
    (super(),
      (this._config = _0x1618e6),
      (this._injector = _0x2e5d87),
      (this._configService = _0x2deed5));
    let { ..._0x270f65 } = (0, r.merge)({}, s, this._config);
    this._configService["setConfig"]("slides-history.config", _0x270f65);
  }
  onStarting() {
    ((0, r.registerDependencies)(this._injector, [[b], [u], [D]]),
      this.disposeWithMe(
        this._injector["get"](e.UnitComparisonAdapterRegistryService).register(
          this._injector["get"](D),
        ),
      ),
      this._injector["get"](u));
  }
};
(w(j, "pluginName", "UNIVER_SLIDES_HISTORY_PLUGIN"),
  w(j, "packageName", a),
  w(j, "version", o),
  w(j, "type", r.UniverInstanceType["UNIVER_SLIDE"]),
  (j = l(
    [
      (0, r.DependentOn)(
        t.UniverLicensePlugin,
        e.UniverEditHistoryPlugin,
        n.UniverSlidesPlugin,
      ),
      c(1, (0, r.Inject)(r.Injector)),
      c(2, r.IConfigService),
    ],
    j,
  )),
  Object.defineProperty(exports, "SlidesHistoryDiffService", {
    enumerable: true,
    get: function () {
      return b;
    },
  }),
  (exports.SlidesUnitComparisonAdapter = D),
  Object.defineProperty(exports, "UniverSlidesHistoryPlugin", {
    enumerable: true,
    get: function () {
      return j;
    },
  }));
