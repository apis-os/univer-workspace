Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/edit-history"),
  n = require("@univerjs-pro/license"),
  r = require("@univerjs/core"),
  i = require("@univerjs/protocol");
var a = "@univerjs-pro/boards-history",
  o = "1.0.0-insiders.20260907-70fc579";
const s = {};
function c(_0x5d965f, _0x4d3493) {
  return function (_0x4b0035, _0x1383fd) {
    _0x4d3493(_0x4b0035, _0x1383fd, _0x5d965f);
  };
}
function l(_0x590c0b, _0x4f2235, _0x2bf336, _0x350dde) {
  var _0x35bf06 = _0x3716e4,
    _0x28f039 = arguments.length,
    _0x2e9c0d =
      _0x28f039 < 3
        ? _0x4f2235
        : _0x350dde === null
          ? (_0x350dde = Object[_0x35bf06(468)](_0x4f2235, _0x2bf336))
          : _0x350dde,
    _0x55629d;
  if (
    typeof Reflect == _0x35bf06(473) &&
    typeof Reflect[_0x35bf06(471)] == "function"
  )
    _0x2e9c0d = Reflect[_0x35bf06(471)](
      _0x590c0b,
      _0x4f2235,
      _0x2bf336,
      _0x350dde,
    );
  else {
    for (var _0x3b0092 = _0x590c0b.length - 1; _0x3b0092 >= 0; _0x3b0092--)
      (_0x55629d = _0x590c0b[_0x3b0092]) &&
        (_0x2e9c0d =
          (_0x28f039 < 3
            ? _0x55629d(_0x2e9c0d)
            : _0x28f039 > 3
              ? _0x55629d(_0x4f2235, _0x2bf336, _0x2e9c0d)
              : _0x55629d(_0x4f2235, _0x2bf336)) || _0x2e9c0d);
  }
  return (
    _0x28f039 > 3 &&
      _0x2e9c0d &&
      Object[_0x35bf06(442)](_0x4f2235, _0x2bf336, _0x2e9c0d),
    _0x2e9c0d
  );
}
let u = class extends r.Disposable {
  constructor(_0x9afae3, _0x3b09a0, _0x38d88c) {
    (super(),
      (this._authzIoService = _0x3b09a0),
      (this._univerInstanceService = _0x38d88c),
      this.disposeWithMe(
        _0x9afae3.register({
          type: r.UniverInstanceType["UNIVER_BOARD"],
          canView: (_0x194b74) =>
            this._hasPermission(_0x194b74, i.UnitAction["ViewHistory"]),
          canRevert: (_0x541c21) =>
            !!this._getBoard(_0x541c21) &&
            this._hasPermission(_0x541c21, i.UnitAction["RecoverHistory"]),
          captureLocation: (_0x2d9305) => {
            var _0x4684e2 = _0x5a261a,
              _0x6fbc12;
            return {
              pageId:
                (_0x6fbc12 = this[_0x4684e2(403)](_0x2d9305)) == null
                  ? undefined
                  : _0x6fbc12[_0x4684e2(460)](),
            };
          },
          restoreLocation: () => undefined,
        }),
      ));
  }
  _getBoard(_0x294cd4) {
    return (
      this._univerInstanceService["getUnit"](
        _0x294cd4,
        r.UniverInstanceType["UNIVER_BOARD"],
      ) ?? null
    );
  }
  async _hasPermission(_0x518ae0, _0x4528dc) {
    return (
      await this._authzIoService["allowed"]({
        unitID: _0x518ae0,
        objectID: _0x518ae0,
        objectType: i.UnitObject["Board"],
        actions: [_0x4528dc],
      })
    ).some((_0x3fdab1) => _0x3fdab1.action === _0x4528dc && _0x3fdab1.allowed);
  }
};
u = l(
  [
    c(0, (0, r.Inject)(t.HistoryUnitAdapterRegistryService)),
    c(1, r.IAuthzIoService),
    c(2, r.IUniverInstanceService),
  ],
  u,
);
function d(_0x2f18e9) {
  return _0x2f18e9.flatMap((_0x40d7e5, _0x2a1de8) =>
    p(_0x40d7e5.mutation["params"]).map((_0x404268, _0x4877b9) => ({
      id: _0x40d7e5.revision + ":" + _0x2a1de8 + ":" + _0x4877b9,
      kind: f(_0x40d7e5.mutation["id"]),
      label: _0x404268.elementId ? "board:element" : "board:page",
      memberId: _0x40d7e5.memberId,
      pageId: _0x404268.pageId,
      elementId: _0x404268.elementId,
    })),
  );
}
function f(_0x21313f) {
  return _0x21313f === e.AddBoardElementMutation["id"]
    ? "insert"
    : _0x21313f === e.RemoveBoardElementMutation["id"] ||
        _0x21313f === e.RemoveBoardElementOnlyMutation["id"]
      ? "delete"
      : "update";
}
function p(_0x37cd50) {
  if (!v(_0x37cd50)) return [];
  let _0xcec5a6 = m(_0x37cd50, "subUnitId") ?? m(_0x37cd50, "pageId");
  if (!_0xcec5a6) return [];
  let _0x59dca2 = [
      m(_0x37cd50, "elementId"),
      h(_0x37cd50, "element"),
      ..._(_0x37cd50, "elementIds"),
      ...g(_0x37cd50, "elements"),
    ].filter((_0x15390e) => !!_0x15390e),
    _0x197b25 = [...new Set(_0x59dca2)];
  return _0x197b25.length
    ? _0x197b25.map((_0x511092) => ({
        pageId: _0xcec5a6,
        elementId: _0x511092,
      }))
    : [{ pageId: _0xcec5a6 }];
}
function m(_0x34c61e, _0x30c9fc) {
  return typeof _0x34c61e[_0x30c9fc] == "string"
    ? _0x34c61e[_0x30c9fc]
    : undefined;
}
function h(_0xbb373d, _0xff59b) {
  if (v(_0xbb373d[_0xff59b]))
    return m(_0xbb373d[_0xff59b], "id") ?? m(_0xbb373d[_0xff59b], "elementId");
}
function g(_0x2e29da, _0x2cc22f) {
  return Array.isArray(_0x2e29da[_0x2cc22f])
    ? _0x2e29da[_0x2cc22f].flatMap((_0x41cb5f) =>
        v(_0x41cb5f)
          ? [m(_0x41cb5f, "id") ?? m(_0x41cb5f, "elementId")].filter(
              (_0x4dad83) => !!_0x4dad83,
            )
          : [],
      )
    : [];
}
function _(_0x36ad9e, _0x2515aa) {
  return Array.isArray(_0x36ad9e[_0x2515aa])
    ? _0x36ad9e[_0x2515aa].filter((_0x36e9a8) => typeof _0x36e9a8 == "string")
    : [];
}
function v(_0x25ad73) {
  return typeof _0x25ad73 == "object" && !!_0x25ad73;
}
let y = class {
  constructor(_0x3a415e) {
    this._mutationService = _0x3a415e;
  }
  async compare(_0x2f9ab7, _0x3ca708) {
    return d(await this._mutationService["load"](_0x2f9ab7, _0x3ca708));
  }
};
y = l([c(0, (0, r.Inject)(t.HistoryMutationService))], y);
function b(_0x437522) {
  "@babel/helpers - typeof";
  return (
    (b =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2b852d) {
            return typeof _0x2b852d;
          }
        : function (_0x47514e) {
            return _0x47514e &&
              typeof Symbol == "function" &&
              _0x47514e.constructor === Symbol &&
              _0x47514e !== Symbol.prototype
              ? "symbol"
              : typeof _0x47514e;
          }),
    b(_0x437522)
  );
}
function x(_0xf6f09f, _0x5ec2ab) {
  if (b(_0xf6f09f) != "object" || !_0xf6f09f) return _0xf6f09f;
  var _0x31e9ff = _0xf6f09f[Symbol.toPrimitive];
  if (_0x31e9ff !== undefined) {
    var _0x3492a0 = _0x31e9ff.call(_0xf6f09f, _0x5ec2ab || "default");
    if (b(_0x3492a0) != "object") return _0x3492a0;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5ec2ab === "string" ? String : Number)(_0xf6f09f);
}
function S(_0x5d8fe4) {
  var _0x1b36e9 = _0x3716e4,
    _0x335132 = x(_0x5d8fe4, _0x1b36e9(386));
  return b(_0x335132) == _0x1b36e9(443) ? _0x335132 : _0x335132 + "";
}
function C(_0x49dbbe, _0x59e313, _0x375dd3) {
  return (
    (_0x59e313 = S(_0x59e313)) in _0x49dbbe
      ? Object.defineProperty(_0x49dbbe, _0x59e313, {
          value: _0x375dd3,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x49dbbe[_0x59e313] = _0x375dd3),
    _0x49dbbe
  );
}
const w = [
    t.UnitComparisonEntityType["UNIT"],
    t.UnitComparisonEntityType["BOARD_PAGE"],
    t.UnitComparisonEntityType["BOARD_ELEMENT"],
    t.UnitComparisonEntityType["BOARD_THEME"],
    t.UnitComparisonEntityType["BOARD_CHART"],
    t.UnitComparisonEntityType["BOARD_CHART_DATA"],
    t.UnitComparisonEntityType["BOARD_TABLE"],
  ],
  T = (0, t.withoutComparisonKeys)(
    "pages",
    "pageOrder",
    "slides",
    "slideOrder",
    "elements",
    "resources",
    "theme",
    "rev",
    "activePageId",
    "activeSlideId",
    "zoomRatio",
  );
var E = class {
  constructor() {
    C(this, "type", r.UniverInstanceType["UNIVER_BOARD"]);
  }
  compare(_0xe1e28f) {
    let _0x45ac7d = (0, t.asRecord)(_0xe1e28f.leftData),
      _0x57ec2a = (0, t.asRecord)(_0xe1e28f.rightData),
      _0x2e31bf = D(_0x45ac7d),
      _0x2f3f00 = D(_0x57ec2a),
      _0x37c38f = _0x2e31bf.pages,
      _0x13ba5 = _0x2f3f00.pages,
      _0x2b9dac = new Set([
        ...Object.keys(_0x37c38f ?? {}),
        ...Object.keys(_0x13ba5 ?? {}),
      ]),
      _0x34b033 = (0, t.withoutComparisonKeys)("elements", "elementOrder"),
      _0x59bada = (0, t.recordComparisonEntries)(
        _0x37c38f,
        _0x2e31bf.order,
        _0x34b033,
      ),
      _0x249917 = (0, t.recordComparisonEntries)(
        _0x13ba5,
        _0x2f3f00.order,
        _0x34b033,
      ),
      _0x295ffc = [
        ...O(t.UnitComparisonEntityType["UNIT"], T(_0x45ac7d), T(_0x57ec2a)),
        ...(0, t.buildSemanticComparisonItems)({
          entityType: t.UnitComparisonEntityType["BOARD_PAGE"],
          left: _0x59bada,
          right: _0x249917,
        }),
        ...[..._0x2b9dac].flatMap((_0x9b56c7) => {
          var _0x1236bc = _0x2d491d,
            _0x392272,
            _0x2fcb42,
            _0x462c25,
            _0x2d8d18;
          return (0, t.buildSemanticComparisonItems)({
            entityType: t[_0x1236bc(362)][_0x1236bc(472)],
            parentStableId: _0x9b56c7,
            left: (0, t.recordComparisonEntries)(
              (_0x392272 = (0, t[_0x1236bc(376)])(
                _0x37c38f == null ? undefined : _0x37c38f[_0x9b56c7],
              )) == null
                ? undefined
                : _0x392272[_0x1236bc(400)],
              (_0x2fcb42 = (0, t.asRecord)(
                _0x37c38f == null ? undefined : _0x37c38f[_0x9b56c7],
              )) == null
                ? undefined
                : _0x2fcb42.elementOrder,
            ),
            right: (0, t[_0x1236bc(475)])(
              (_0x462c25 = (0, t[_0x1236bc(376)])(
                _0x13ba5 == null ? undefined : _0x13ba5[_0x9b56c7],
              )) == null
                ? undefined
                : _0x462c25[_0x1236bc(400)],
              (_0x2d8d18 = (0, t[_0x1236bc(376)])(
                _0x13ba5 == null ? undefined : _0x13ba5[_0x9b56c7],
              )) == null
                ? undefined
                : _0x2d8d18[_0x1236bc(474)],
            ),
          });
        }),
        ...(0, t.buildSemanticComparisonItems)({
          entityType: t.UnitComparisonEntityType["BOARD_ELEMENT"],
          left: (0, t.recordComparisonEntries)(
            _0x45ac7d == null ? undefined : _0x45ac7d.elements,
            undefined,
          ),
          right: (0, t.recordComparisonEntries)(
            _0x57ec2a == null ? undefined : _0x57ec2a.elements,
            undefined,
          ),
        }),
        ...O(
          t.UnitComparisonEntityType["BOARD_THEME"],
          _0x45ac7d == null ? undefined : _0x45ac7d.theme,
          _0x57ec2a == null ? undefined : _0x57ec2a.theme,
        ),
        ...k(
          t.UnitComparisonEntityType["BOARD_CHART"],
          _0xe1e28f,
          "BOARD_CHART_PLUGIN",
          "charts",
        ),
        ...k(
          t.UnitComparisonEntityType["BOARD_CHART_DATA"],
          _0xe1e28f,
          "BOARD_CHART_PLUGIN",
          "dataSources",
        ),
        ...k(
          t.UnitComparisonEntityType["BOARD_TABLE"],
          _0xe1e28f,
          "BOARD_TABLE_PLUGIN",
          "tables",
        ),
      ],
      _0xe0e5ee = (0, t.buildScopedUnitComparison)({
        entityType: t.UnitComparisonEntityType["BOARD_PAGE"],
        items: _0x295ffc,
        left: _0x59bada,
        right: _0x249917,
        references: {
          left: (0, t.recordComparisonEntries)(_0x37c38f, _0x2e31bf.order),
          right: (0, t.recordComparisonEntries)(_0x13ba5, _0x2f3f00.order),
        },
      });
    return {
      items: _0xe0e5ee.items,
      supportedEntityTypes: w,
      scopes: _0xe0e5ee.scopes,
      productContext: { type: r.UniverInstanceType["UNIVER_BOARD"] },
    };
  }
};
function D(_0x273bf9) {
  let _0x56697e = (0, t.asRecord)(
      _0x273bf9 == null ? undefined : _0x273bf9.slides,
    ),
    _0x317838 = _0x273bf9 == null ? undefined : _0x273bf9.slideOrder;
  return (Array.isArray(_0x317838) && _0x317838.length > 0) ||
    (_0x56697e !== undefined && Object.keys(_0x56697e).length > 0)
    ? { pages: _0x56697e, order: _0x317838 }
    : {
        pages: (0, t.asRecord)(_0x273bf9 == null ? undefined : _0x273bf9.pages),
        order: _0x273bf9 == null ? undefined : _0x273bf9.pageOrder,
      };
}
function O(_0x353af6, _0x1bd54e, _0x184665) {
  return (0, t.buildSemanticComparisonItems)({
    entityType: _0x353af6,
    left:
      _0x1bd54e === undefined
        ? []
        : [{ stableId: "root", position: 0, value: _0x1bd54e }],
    right:
      _0x184665 === undefined
        ? []
        : [{ stableId: "root", position: 0, value: _0x184665 }],
  });
}
function k(_0x5dc017, _0x2d711c, _0x35d1ab, _0x4b1766) {
  return (0, t.buildSemanticComparisonItems)({
    entityType: _0x5dc017,
    left: (0, t.resourceComparisonEntries)(
      _0x2d711c.leftData,
      _0x35d1ab,
      _0x4b1766,
    ),
    right: (0, t.resourceComparisonEntries)(
      _0x2d711c.rightData,
      _0x35d1ab,
      _0x4b1766,
    ),
  });
}
let A = class extends r.Plugin {
  constructor(_0x1388db = s, _0x4c7dea, _0x3a9a22) {
    (super(),
      (this._config = _0x1388db),
      (this._injector = _0x4c7dea),
      (this._configService = _0x3a9a22));
    let { ..._0x5c625e } = (0, r.merge)({}, s, this._config);
    this._configService["setConfig"]("boards-history.config", _0x5c625e);
  }
  onStarting() {
    ((0, r.registerDependencies)(this._injector, [[y], [u], [E]]),
      this.disposeWithMe(
        this._injector["get"](t.UnitComparisonAdapterRegistryService).register(
          this._injector["get"](E),
        ),
      ),
      this._injector["get"](u));
  }
};
(C(A, "pluginName", "UNIVER_BOARDS_HISTORY_PLUGIN"),
  C(A, "packageName", a),
  C(A, "version", o),
  C(A, "type", r.UniverInstanceType["UNIVER_BOARD"]),
  (A = l(
    [
      (0, r.DependentOn)(
        n.UniverLicensePlugin,
        t.UniverEditHistoryPlugin,
        e.UniverBoardsPlugin,
      ),
      c(1, (0, r.Inject)(r.Injector)),
      c(2, r.IConfigService),
    ],
    A,
  )),
  Object.defineProperty(exports, "BoardsHistoryDiffService", {
    enumerable: true,
    get: function () {
      return y;
    },
  }),
  (exports.BoardsUnitComparisonAdapter = E),
  Object.defineProperty(exports, "UniverBoardsHistoryPlugin", {
    enumerable: true,
    get: function () {
      return A;
    },
  }));
