import {
  HistoryMutationService as _0x4aaf4c,
  HistoryUnitAdapterRegistryService as _0x47c1f5,
  UnitComparisonAdapterRegistryService as _0x5f03e7,
  UnitComparisonEntityType as _0x2a3b94,
  UniverEditHistoryPlugin as _0x455130,
  asRecord as _0x1fa556,
  buildScopedUnitComparison as _0x44aa15,
  buildSemanticComparisonItems as _0x2f5eac,
  recordComparisonEntries as _0x41dd75,
  resourceComparisonEntries as _0x4a06e1,
  withoutComparisonKeys as _0x37afbd,
} from "@univerjs-pro/edit-history";
import { UniverLicensePlugin as _0x242b64 } from "@univerjs-pro/license";
import {
  AddSlideElementMutation as _0x12a29d,
  AddSlidePageMutation as _0x255755,
  InsertDrawingObjectMutation as _0x39df3b,
  RemoveSlideElementMutation as _0x46ec1c,
  RemoveSlidePageMutation as _0x42829b,
  SetActiveSlideCommand as _0x1fbc84,
  UniverSlidesPlugin as _0xc06483,
} from "@univerjs-pro/slides";
import {
  DependentOn as _0x532f67,
  Disposable as _0x9c7b44,
  IAuthzIoService as _0x47ad82,
  ICommandService as _0x262a58,
  IConfigService as _0x2437f3,
  IUniverInstanceService as _0x22487e,
  Inject as _0x287497,
  Injector as _0x488571,
  Plugin as _0x4b7729,
  UniverInstanceType as _0x15fbf5,
  merge as _0x24b709,
  registerDependencies as _0x683d78,
} from "@univerjs/core";
import {
  UnitAction as _0x4010dd,
  UnitObject as _0x5ac46a,
} from "@univerjs/protocol";
var O = "@univerjs-pro/slides-history",
  k = "1.0.0-insiders.20260907-70fc579";
const A = {};
function j(_0x2e54d0, _0x695db5) {
  return function (_0x547275, _0x41f5c8) {
    _0x695db5(_0x547275, _0x41f5c8, _0x2e54d0);
  };
}
function M(_0x3e1f59, _0x381f23, _0x2fe14d, _0x5c6a79) {
  var _0x5d066f = _0x59e17e,
    _0x5c88bb = arguments[_0x5d066f(126)],
    _0x3436a6 =
      _0x5c88bb < 3
        ? _0x381f23
        : _0x5c6a79 === null
          ? (_0x5c6a79 = Object[_0x5d066f(123)](_0x381f23, _0x2fe14d))
          : _0x5c6a79,
    _0xa952fc;
  if (
    typeof Reflect == _0x5d066f(140) &&
    typeof Reflect[_0x5d066f(184)] == _0x5d066f(212)
  )
    _0x3436a6 = Reflect[_0x5d066f(184)](
      _0x3e1f59,
      _0x381f23,
      _0x2fe14d,
      _0x5c6a79,
    );
  else {
    for (
      var _0x5ed226 = _0x3e1f59[_0x5d066f(126)] - 1;
      _0x5ed226 >= 0;
      _0x5ed226--
    )
      (_0xa952fc = _0x3e1f59[_0x5ed226]) &&
        (_0x3436a6 =
          (_0x5c88bb < 3
            ? _0xa952fc(_0x3436a6)
            : _0x5c88bb > 3
              ? _0xa952fc(_0x381f23, _0x2fe14d, _0x3436a6)
              : _0xa952fc(_0x381f23, _0x2fe14d)) || _0x3436a6);
  }
  return (
    _0x5c88bb > 3 &&
      _0x3436a6 &&
      Object[_0x5d066f(206)](_0x381f23, _0x2fe14d, _0x3436a6),
    _0x3436a6
  );
}
let N = class extends _0x9c7b44 {
  constructor(_0x46ab54, _0x2924ab, _0x2e4aaf, _0x284c34) {
    (super(),
      (this._authzIoService = _0x2924ab),
      (this._commandService = _0x2e4aaf),
      (this._univerInstanceService = _0x284c34),
      this.disposeWithMe(
        _0x46ab54.register({
          type: _0x15fbf5.UNIVER_SLIDE,
          canView: (_0x229782) =>
            this._hasPermission(_0x229782, _0x4010dd.ViewHistory),
          canRevert: (_0x2eff74) =>
            !!this._getSlide(_0x2eff74) &&
            this._hasPermission(_0x2eff74, _0x4010dd.RecoverHistory),
          captureLocation: (_0x46cdb6) => {
            var _0x51e784 = _0x31fcaa,
              _0xacba31;
            return {
              slideId:
                (_0xacba31 = this[_0x51e784(174)](_0x46cdb6)) == null ||
                (_0xacba31 = _0xacba31[_0x51e784(162)][_0x51e784(205)]()) ==
                  null
                  ? undefined
                  : _0xacba31[_0x51e784(129)](),
            };
          },
          restoreLocation: (_0x15df73, _0x5606e9) =>
            this._restoreLocation(
              _0x15df73,
              P(_0x5606e9) ? _0x5606e9 : undefined,
            ),
        }),
      ));
  }
  async _restoreLocation(_0x1c02ad, _0x27361b) {
    var _0x1a7cfe = _0x59e17e,
      _0x1692ad;
    !(_0x27361b != null && _0x27361b[_0x1a7cfe(167)]) ||
      !(
        (_0x1692ad = this[_0x1a7cfe(174)](_0x1c02ad)) != null &&
        _0x1692ad[_0x1a7cfe(162)][_0x1a7cfe(181)](_0x27361b.slideId)
      ) ||
      (await this[_0x1a7cfe(157)].executeCommand(_0x1fbc84.id, {
        unitId: _0x1c02ad,
        subUnitId: _0x27361b[_0x1a7cfe(167)],
      }));
  }
  _getSlide(_0x97d392) {
    return (
      this._univerInstanceService["getUnit"](
        _0x97d392,
        _0x15fbf5.UNIVER_SLIDE,
      ) ?? null
    );
  }
  async _hasPermission(_0x5973d2, _0x1cd2b7) {
    return (
      await this._authzIoService["allowed"]({
        unitID: _0x5973d2,
        objectID: _0x5973d2,
        objectType: _0x5ac46a.Slide,
        actions: [_0x1cd2b7],
      })
    ).some((_0x489cd5) => _0x489cd5.action === _0x1cd2b7 && _0x489cd5.allowed);
  }
};
N = M(
  [
    j(0, _0x287497(_0x47c1f5)),
    j(1, _0x47ad82),
    j(2, _0x262a58),
    j(3, _0x22487e),
  ],
  N,
);
function P(_0x43c6b9) {
  return (
    typeof _0x43c6b9 == "object" &&
    !!_0x43c6b9 &&
    (!("slideId" in _0x43c6b9) || typeof _0x43c6b9.slideId == "string")
  );
}
function F(_0x2f0685) {
  return _0x2f0685.flatMap((_0x484653, _0x4ebf45) =>
    L(_0x484653.mutation["params"]).map((_0x13448f, _0x5f5ada) => ({
      id: _0x484653.revision + ":" + _0x4ebf45 + ":" + _0x5f5ada,
      kind: I(_0x484653.mutation["id"]),
      label: _0x13448f.drawingId ? "slide:element" : "slide:page",
      memberId: _0x484653.memberId,
      slideId: _0x13448f.slideId,
      drawingId: _0x13448f.drawingId,
    })),
  );
}
function I(_0x2b9a5f) {
  return _0x2b9a5f === _0x12a29d.id ||
    _0x2b9a5f === _0x255755.id ||
    _0x2b9a5f === _0x39df3b.id
    ? "insert"
    : _0x2b9a5f === _0x46ec1c.id || _0x2b9a5f === _0x42829b.id
      ? "delete"
      : "update";
}
function L(_0x46c811) {
  if (!H(_0x46c811)) return [];
  let _0x5883fb =
    R(_0x46c811, "subUnitId") ??
    R(_0x46c811, "slideId") ??
    R(_0x46c811, "pageId") ??
    z(_0x46c811, "slide");
  if (!_0x5883fb) return [];
  let _0x327e21 = [
      R(_0x46c811, "drawingId"),
      z(_0x46c811, "element"),
      ...B(_0x46c811, "drawings"),
      ...B(_0x46c811, "objects"),
      ...V(_0x46c811, "drawingIds"),
    ].filter((_0x76ad06) => !!_0x76ad06),
    _0x2c72b3 = [...new Set(_0x327e21)];
  return _0x2c72b3.length
    ? _0x2c72b3.map((_0xf7c1dd) => ({
        slideId: _0x5883fb,
        drawingId: _0xf7c1dd,
      }))
    : [{ slideId: _0x5883fb }];
}
function R(_0x569d85, _0x3f767b) {
  return typeof _0x569d85[_0x3f767b] == "string"
    ? _0x569d85[_0x3f767b]
    : undefined;
}
function z(_0x4d5d22, _0x7aaae1) {
  if (H(_0x4d5d22[_0x7aaae1]))
    return (
      R(_0x4d5d22[_0x7aaae1], "id") ?? R(_0x4d5d22[_0x7aaae1], "drawingId")
    );
}
function B(_0x1beca1, _0x2e322f) {
  return Array.isArray(_0x1beca1[_0x2e322f])
    ? _0x1beca1[_0x2e322f].flatMap((_0x45d545) =>
        H(_0x45d545)
          ? [R(_0x45d545, "id") ?? R(_0x45d545, "drawingId")].filter(
              (_0x1a5c19) => !!_0x1a5c19,
            )
          : [],
      )
    : [];
}
function V(_0x1bc933, _0x55f212) {
  return Array.isArray(_0x1bc933[_0x55f212])
    ? _0x1bc933[_0x55f212].filter((_0x364783) => typeof _0x364783 == "string")
    : [];
}
function H(_0x5d697c) {
  return typeof _0x5d697c == "object" && !!_0x5d697c;
}
let U = class {
  constructor(_0x15344d) {
    this._mutationService = _0x15344d;
  }
  async compare(_0x211366, _0x2becdd) {
    return F(await this._mutationService["load"](_0x211366, _0x2becdd));
  }
};
U = M([j(0, _0x287497(_0x4aaf4c))], U);
function W(_0x1fb011) {
  "@babel/helpers - typeof";
  return (
    (W =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x4e10b8) {
            return typeof _0x4e10b8;
          }
        : function (_0x952afa) {
            return _0x952afa &&
              typeof Symbol == "function" &&
              _0x952afa.constructor === Symbol &&
              _0x952afa !== Symbol.prototype
              ? "symbol"
              : typeof _0x952afa;
          }),
    W(_0x1fb011)
  );
}
function G(_0x5f1009, _0x34db4c) {
  if (W(_0x5f1009) != "object" || !_0x5f1009) return _0x5f1009;
  var _0x211619 = _0x5f1009[Symbol.toPrimitive];
  if (_0x211619 !== undefined) {
    var _0x5992da = _0x211619.call(_0x5f1009, _0x34db4c || "default");
    if (W(_0x5992da) != "object") return _0x5992da;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x34db4c === "string" ? String : Number)(_0x5f1009);
}
function K(_0x3cd88b) {
  var _0x386bc2 = _0x59e17e,
    _0x95fcec = G(_0x3cd88b, _0x386bc2(171));
  return W(_0x95fcec) == _0x386bc2(191) ? _0x95fcec : _0x95fcec + "";
}
function q(_0x48c1ef, _0x50ac28, _0x262350) {
  return (
    (_0x50ac28 = K(_0x50ac28)) in _0x48c1ef
      ? Object.defineProperty(_0x48c1ef, _0x50ac28, {
          value: _0x262350,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x48c1ef[_0x50ac28] = _0x262350),
    _0x48c1ef
  );
}
const ae = [
    _0x2a3b94.UNIT,
    _0x2a3b94.SLIDE,
    _0x2a3b94.SLIDE_ELEMENT,
    _0x2a3b94.SLIDE_TRANSITION,
    _0x2a3b94.SLIDE_TRANSITION_REFERENCE,
    _0x2a3b94.SLIDE_MASTER,
    _0x2a3b94.SLIDE_LAYOUT,
    _0x2a3b94.SLIDE_THEME,
    _0x2a3b94.SLIDE_CHART,
    _0x2a3b94.SLIDE_CHART_DATA,
    _0x2a3b94.SLIDE_TABLE,
  ],
  J = _0x37afbd(
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
var Y = class {
  constructor() {
    q(this, "type", _0x15fbf5.UNIVER_SLIDE);
  }
  compare(_0x15afc5) {
    let _0x2ad16f = _0x1fa556(_0x15afc5.leftData),
      _0x5e3a62 = _0x1fa556(_0x15afc5.rightData),
      _0x5f0051 = _0x1fa556(_0x2ad16f == null ? undefined : _0x2ad16f.slides),
      _0x4a93c3 = _0x1fa556(_0x5e3a62 == null ? undefined : _0x5e3a62.slides),
      _0x1cd89f = new Set([
        ...Object.keys(_0x5f0051 ?? {}),
        ...Object.keys(_0x4a93c3 ?? {}),
      ]),
      _0x2fb47a = _0x37afbd("elements", "elementOrder"),
      _0x58614e = _0x41dd75(
        _0x5f0051,
        _0x2ad16f == null ? undefined : _0x2ad16f.slideOrder,
        _0x2fb47a,
      ),
      _0x34dde2 = _0x41dd75(
        _0x4a93c3,
        _0x5e3a62 == null ? undefined : _0x5e3a62.slideOrder,
        _0x2fb47a,
      ),
      _0x839c52 = [
        ...Z(_0x2a3b94.UNIT, J(_0x2ad16f), J(_0x5e3a62)),
        ..._0x2f5eac({
          entityType: _0x2a3b94.SLIDE,
          left: _0x58614e,
          right: _0x34dde2,
        }),
        ...[..._0x1cd89f].flatMap((_0x521920) => {
          var _0x10f452 = _0x496c68,
            _0x484ebf,
            _0x30dc9f,
            _0x36e5b7,
            _0x2f53f2;
          return _0x2f5eac({
            entityType: _0x2a3b94[_0x10f452(154)],
            parentStableId: _0x521920,
            left: _0x41dd75(
              (_0x484ebf = _0x1fa556(
                _0x5f0051 == null ? undefined : _0x5f0051[_0x521920],
              )) == null
                ? undefined
                : _0x484ebf[_0x10f452(211)],
              (_0x30dc9f = _0x1fa556(
                _0x5f0051 == null ? undefined : _0x5f0051[_0x521920],
              )) == null
                ? undefined
                : _0x30dc9f[_0x10f452(190)],
            ),
            right: _0x41dd75(
              (_0x36e5b7 = _0x1fa556(
                _0x4a93c3 == null ? undefined : _0x4a93c3[_0x521920],
              )) == null
                ? undefined
                : _0x36e5b7[_0x10f452(211)],
              (_0x2f53f2 = _0x1fa556(
                _0x4a93c3 == null ? undefined : _0x4a93c3[_0x521920],
              )) == null
                ? undefined
                : _0x2f53f2.elementOrder,
            ),
          });
        }),
        ...X(
          _0x2a3b94.SLIDE_TRANSITION,
          _0x2ad16f == null ? undefined : _0x2ad16f.transitionRecords,
          _0x5e3a62 == null ? undefined : _0x5e3a62.transitionRecords,
        ),
        ...X(
          _0x2a3b94.SLIDE_TRANSITION_REFERENCE,
          _0x2ad16f == null ? undefined : _0x2ad16f.slideTransitionRefs,
          _0x5e3a62 == null ? undefined : _0x5e3a62.slideTransitionRefs,
        ),
        ...X(
          _0x2a3b94.SLIDE_MASTER,
          _0x2ad16f == null ? undefined : _0x2ad16f.masterPages,
          _0x5e3a62 == null ? undefined : _0x5e3a62.masterPages,
        ),
        ...X(
          _0x2a3b94.SLIDE_LAYOUT,
          _0x2ad16f == null ? undefined : _0x2ad16f.layoutPages,
          _0x5e3a62 == null ? undefined : _0x5e3a62.layoutPages,
        ),
        ...Z(
          _0x2a3b94.SLIDE_THEME,
          _0x2ad16f == null ? undefined : _0x2ad16f.theme,
          _0x5e3a62 == null ? undefined : _0x5e3a62.theme,
        ),
        ...Q(_0x2a3b94.SLIDE_CHART, _0x15afc5, "SLIDE_CHART_PLUGIN", "charts"),
        ...Q(
          _0x2a3b94.SLIDE_CHART_DATA,
          _0x15afc5,
          "SLIDE_CHART_PLUGIN",
          "dataSources",
        ),
        ...Q(_0x2a3b94.SLIDE_TABLE, _0x15afc5, "SLIDE_TABLE_PLUGIN", "tables"),
      ],
      _0x3c4204 = _0x44aa15({
        entityType: _0x2a3b94.SLIDE,
        items: _0x839c52,
        left: _0x58614e,
        right: _0x34dde2,
        references: {
          left: _0x41dd75(
            _0x5f0051,
            _0x2ad16f == null ? undefined : _0x2ad16f.slideOrder,
          ),
          right: _0x41dd75(
            _0x4a93c3,
            _0x5e3a62 == null ? undefined : _0x5e3a62.slideOrder,
          ),
        },
      });
    return {
      items: _0x3c4204.items,
      supportedEntityTypes: ae,
      scopes: _0x3c4204.scopes,
      productContext: { type: _0x15fbf5.UNIVER_SLIDE },
    };
  }
};
function X(_0x16e3a0, _0x4a8ce1, _0x1afbed) {
  return _0x2f5eac({
    entityType: _0x16e3a0,
    left: _0x41dd75(_0x4a8ce1, undefined),
    right: _0x41dd75(_0x1afbed, undefined),
  });
}
function Z(_0x4587d3, _0x35ef0b, _0x3e17e1) {
  return _0x2f5eac({
    entityType: _0x4587d3,
    left:
      _0x35ef0b === undefined
        ? []
        : [{ stableId: "root", position: 0, value: _0x35ef0b }],
    right:
      _0x3e17e1 === undefined
        ? []
        : [{ stableId: "root", position: 0, value: _0x3e17e1 }],
  });
}
function Q(_0x5c15be, _0x33229d, _0x5f4c24, _0x3453c5) {
  return _0x2f5eac({
    entityType: _0x5c15be,
    left: _0x4a06e1(_0x33229d.leftData, _0x5f4c24, _0x3453c5),
    right: _0x4a06e1(_0x33229d.rightData, _0x5f4c24, _0x3453c5),
  });
}
let $ = class extends _0x4b7729 {
  constructor(_0x462459 = A, _0x1af724, _0x2b32a4) {
    (super(),
      (this._config = _0x462459),
      (this._injector = _0x1af724),
      (this._configService = _0x2b32a4));
    let { ..._0x25ce6c } = _0x24b709({}, A, this._config);
    this._configService["setConfig"]("slides-history.config", _0x25ce6c);
  }
  onStarting() {
    (_0x683d78(this._injector, [[U], [N], [Y]]),
      this.disposeWithMe(
        this._injector["get"](_0x5f03e7).register(this._injector["get"](Y)),
      ),
      this._injector["get"](N));
  }
};
(q($, "pluginName", "UNIVER_SLIDES_HISTORY_PLUGIN"),
  q($, "packageName", O),
  q($, "version", k),
  q($, "type", _0x15fbf5.UNIVER_SLIDE),
  ($ = M(
    [
      _0x532f67(_0x242b64, _0x455130, _0xc06483),
      j(1, _0x287497(_0x488571)),
      j(2, _0x2437f3),
    ],
    $,
  )));
export {
  U as SlidesHistoryDiffService,
  Y as SlidesUnitComparisonAdapter,
  $ as UniverSlidesHistoryPlugin,
};
