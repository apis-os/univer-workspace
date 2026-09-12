import {
  AddBoardElementMutation as _0x494900,
  RemoveBoardElementMutation as _0x525026,
  RemoveBoardElementOnlyMutation as _0x43489d,
  UniverBoardsPlugin as _0x41b818,
} from "@univerjs-pro/boards";
import {
  HistoryMutationService as _0x5a1e27,
  HistoryUnitAdapterRegistryService as _0x5b2370,
  UnitComparisonAdapterRegistryService as _0x5f3e90,
  UnitComparisonEntityType as _0x341b2a,
  UniverEditHistoryPlugin as _0x25d880,
  asRecord as _0x1df8c4,
  buildScopedUnitComparison as _0x104340,
  buildSemanticComparisonItems as _0x25cdd0,
  recordComparisonEntries as _0x3151e0,
  resourceComparisonEntries as _0xfdc062,
  withoutComparisonKeys as _0x2c04e7,
} from "@univerjs-pro/edit-history";
import { UniverLicensePlugin as _0x3c296c } from "@univerjs-pro/license";
import {
  DependentOn as _0x4a4d61,
  Disposable as _0xcc8943,
  IAuthzIoService as _0x49f9ab,
  IConfigService as _0x1fd456,
  IUniverInstanceService as _0x5696bb,
  Inject as _0x40185d,
  Injector as _0x101c99,
  Plugin as _0x5de5fe,
  UniverInstanceType as _0x515fa9,
  merge as _0x101d08,
  registerDependencies as _0x1bedd6,
} from "@univerjs/core";
import {
  UnitAction as _0x45a2be,
  UnitObject as _0x357d27,
} from "@univerjs/protocol";
var O = "@univerjs-pro/boards-history",
  k = "1.0.0-insiders.20260907-70fc579";
const A = {};
function j(_0x2f3af9, _0x1cd141) {
  return function (_0x1f3e46, _0x2376e4) {
    _0x1cd141(_0x1f3e46, _0x2376e4, _0x2f3af9);
  };
}
function M(_0x55a3c4, _0x3ffc15, _0x142e5c, _0x1f38f2) {
  var _0x2da818 = _0x658695,
    _0x2ca519 = arguments[_0x2da818(335)],
    _0x38c04d =
      _0x2ca519 < 3
        ? _0x3ffc15
        : _0x1f38f2 === null
          ? (_0x1f38f2 = Object[_0x2da818(408)](_0x3ffc15, _0x142e5c))
          : _0x1f38f2,
    _0x164d26;
  if (
    typeof Reflect == _0x2da818(364) &&
    typeof Reflect[_0x2da818(351)] == _0x2da818(346)
  )
    _0x38c04d = Reflect[_0x2da818(351)](
      _0x55a3c4,
      _0x3ffc15,
      _0x142e5c,
      _0x1f38f2,
    );
  else {
    for (var _0x349361 = _0x55a3c4.length - 1; _0x349361 >= 0; _0x349361--)
      (_0x164d26 = _0x55a3c4[_0x349361]) &&
        (_0x38c04d =
          (_0x2ca519 < 3
            ? _0x164d26(_0x38c04d)
            : _0x2ca519 > 3
              ? _0x164d26(_0x3ffc15, _0x142e5c, _0x38c04d)
              : _0x164d26(_0x3ffc15, _0x142e5c)) || _0x38c04d);
  }
  return (
    _0x2ca519 > 3 &&
      _0x38c04d &&
      Object.defineProperty(_0x3ffc15, _0x142e5c, _0x38c04d),
    _0x38c04d
  );
}
let N = class extends _0xcc8943 {
  constructor(_0x414b9b, _0x2576df, _0x45e452) {
    (super(),
      (this._authzIoService = _0x2576df),
      (this._univerInstanceService = _0x45e452),
      this.disposeWithMe(
        _0x414b9b.register({
          type: _0x515fa9.UNIVER_BOARD,
          canView: (_0x172f2b) =>
            this._hasPermission(_0x172f2b, _0x45a2be.ViewHistory),
          canRevert: (_0x5eb8b6) =>
            !!this._getBoard(_0x5eb8b6) &&
            this._hasPermission(_0x5eb8b6, _0x45a2be.RecoverHistory),
          captureLocation: (_0x77f107) => {
            var _0x1bb5f4 = _0x5728d8,
              _0x2d320b;
            return {
              pageId:
                (_0x2d320b = this[_0x1bb5f4(355)](_0x77f107)) == null
                  ? undefined
                  : _0x2d320b[_0x1bb5f4(363)](),
            };
          },
          restoreLocation: () => undefined,
        }),
      ));
  }
  _getBoard(_0x3e0f98) {
    return (
      this._univerInstanceService["getUnit"](
        _0x3e0f98,
        _0x515fa9.UNIVER_BOARD,
      ) ?? null
    );
  }
  async _hasPermission(_0x2055bd, _0x439120) {
    return (
      await this._authzIoService["allowed"]({
        unitID: _0x2055bd,
        objectID: _0x2055bd,
        objectType: _0x357d27.Board,
        actions: [_0x439120],
      })
    ).some((_0x244746) => _0x244746.action === _0x439120 && _0x244746.allowed);
  }
};
N = M([j(0, _0x40185d(_0x5b2370)), j(1, _0x49f9ab), j(2, _0x5696bb)], N);
function P(_0x10b800) {
  return _0x10b800.flatMap((_0x24df8f, _0x5ad97b) =>
    I(_0x24df8f.mutation["params"]).map((_0x133634, _0x2d1233) => ({
      id: _0x24df8f.revision + ":" + _0x5ad97b + ":" + _0x2d1233,
      kind: F(_0x24df8f.mutation["id"]),
      label: _0x133634.elementId ? "board:element" : "board:page",
      memberId: _0x24df8f.memberId,
      pageId: _0x133634.pageId,
      elementId: _0x133634.elementId,
    })),
  );
}
function F(_0x55d675) {
  return _0x55d675 === _0x494900.id
    ? "insert"
    : _0x55d675 === _0x525026.id || _0x55d675 === _0x43489d.id
      ? "delete"
      : "update";
}
function I(_0x1ede39) {
  if (!V(_0x1ede39)) return [];
  let _0x44d8f8 = L(_0x1ede39, "subUnitId") ?? L(_0x1ede39, "pageId");
  if (!_0x44d8f8) return [];
  let _0x32bde5 = [
      L(_0x1ede39, "elementId"),
      R(_0x1ede39, "element"),
      ...B(_0x1ede39, "elementIds"),
      ...z(_0x1ede39, "elements"),
    ].filter((_0x3b3963) => !!_0x3b3963),
    _0xe89ff0 = [...new Set(_0x32bde5)];
  return _0xe89ff0.length
    ? _0xe89ff0.map((_0x16c701) => ({
        pageId: _0x44d8f8,
        elementId: _0x16c701,
      }))
    : [{ pageId: _0x44d8f8 }];
}
function L(_0x5aeebf, _0x371b8a) {
  return typeof _0x5aeebf[_0x371b8a] == "string"
    ? _0x5aeebf[_0x371b8a]
    : undefined;
}
function R(_0x10fd5a, _0x36d578) {
  if (V(_0x10fd5a[_0x36d578]))
    return (
      L(_0x10fd5a[_0x36d578], "id") ?? L(_0x10fd5a[_0x36d578], "elementId")
    );
}
function z(_0x541743, _0x23d3ee) {
  return Array.isArray(_0x541743[_0x23d3ee])
    ? _0x541743[_0x23d3ee].flatMap((_0x147880) =>
        V(_0x147880)
          ? [L(_0x147880, "id") ?? L(_0x147880, "elementId")].filter(
              (_0x48d1e0) => !!_0x48d1e0,
            )
          : [],
      )
    : [];
}
function B(_0x295273, _0x50fd04) {
  return Array.isArray(_0x295273[_0x50fd04])
    ? _0x295273[_0x50fd04].filter((_0x5e07f1) => typeof _0x5e07f1 == "string")
    : [];
}
function V(_0x2bc547) {
  return typeof _0x2bc547 == "object" && !!_0x2bc547;
}
let H = class {
  constructor(_0x21373d) {
    this._mutationService = _0x21373d;
  }
  async compare(_0x1ef9e9, _0xd970ad) {
    return P(await this._mutationService["load"](_0x1ef9e9, _0xd970ad));
  }
};
H = M([j(0, _0x40185d(_0x5a1e27))], H);
function U(_0x30c829) {
  "@babel/helpers - typeof";
  return (
    (U =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0xe4d6df) {
            return typeof _0xe4d6df;
          }
        : function (_0x10c722) {
            return _0x10c722 &&
              typeof Symbol == "function" &&
              _0x10c722.constructor === Symbol &&
              _0x10c722 !== Symbol.prototype
              ? "symbol"
              : typeof _0x10c722;
          }),
    U(_0x30c829)
  );
}
function W(_0x2021e5, _0x3acf16) {
  if (U(_0x2021e5) != "object" || !_0x2021e5) return _0x2021e5;
  var _0x34bbe0 = _0x2021e5[Symbol.toPrimitive];
  if (_0x34bbe0 !== undefined) {
    var _0x4ad28b = _0x34bbe0.call(_0x2021e5, _0x3acf16 || "default");
    if (U(_0x4ad28b) != "object") return _0x4ad28b;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3acf16 === "string" ? String : Number)(_0x2021e5);
}
function G(_0x2c4795) {
  var _0x26896f = _0x658695,
    _0x47744e = W(_0x2c4795, _0x26896f(401));
  return U(_0x47744e) == _0x26896f(377) ? _0x47744e : _0x47744e + "";
}
function K(_0x5ad048, _0x32976d, _0x593bda) {
  return (
    (_0x32976d = G(_0x32976d)) in _0x5ad048
      ? Object.defineProperty(_0x5ad048, _0x32976d, {
          value: _0x593bda,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5ad048[_0x32976d] = _0x593bda),
    _0x5ad048
  );
}
const q = [
    _0x341b2a.UNIT,
    _0x341b2a.BOARD_PAGE,
    _0x341b2a.BOARD_ELEMENT,
    _0x341b2a.BOARD_THEME,
    _0x341b2a.BOARD_CHART,
    _0x341b2a.BOARD_CHART_DATA,
    _0x341b2a.BOARD_TABLE,
  ],
  J = _0x2c04e7(
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
var Y = class {
  constructor() {
    K(this, "type", _0x515fa9.UNIVER_BOARD);
  }
  compare(_0xc1ef4a) {
    let _0x1851b1 = _0x1df8c4(_0xc1ef4a.leftData),
      _0x36fa2e = _0x1df8c4(_0xc1ef4a.rightData),
      _0x115c81 = X(_0x1851b1),
      _0x1e5c95 = X(_0x36fa2e),
      _0x16ca86 = _0x115c81.pages,
      _0x5e814f = _0x1e5c95.pages,
      _0x7c944c = new Set([
        ...Object.keys(_0x16ca86 ?? {}),
        ...Object.keys(_0x5e814f ?? {}),
      ]),
      _0x35ed3e = _0x2c04e7("elements", "elementOrder"),
      _0x35dd15 = _0x3151e0(_0x16ca86, _0x115c81.order, _0x35ed3e),
      _0x16c348 = _0x3151e0(_0x5e814f, _0x1e5c95.order, _0x35ed3e),
      _0x3f4fc6 = [
        ...Z(_0x341b2a.UNIT, J(_0x1851b1), J(_0x36fa2e)),
        ..._0x25cdd0({
          entityType: _0x341b2a.BOARD_PAGE,
          left: _0x35dd15,
          right: _0x16c348,
        }),
        ...[..._0x7c944c].flatMap((_0xf722d1) => {
          var _0x2126e9 = _0x557ce9,
            _0xf4065d,
            _0x4c404b,
            _0x328154,
            _0x21506f;
          return _0x25cdd0({
            entityType: _0x341b2a.BOARD_ELEMENT,
            parentStableId: _0xf722d1,
            left: _0x3151e0(
              (_0xf4065d = _0x1df8c4(
                _0x16ca86 == null ? undefined : _0x16ca86[_0xf722d1],
              )) == null
                ? undefined
                : _0xf4065d.elements,
              (_0x4c404b = _0x1df8c4(
                _0x16ca86 == null ? undefined : _0x16ca86[_0xf722d1],
              )) == null
                ? undefined
                : _0x4c404b[_0x2126e9(404)],
            ),
            right: _0x3151e0(
              (_0x328154 = _0x1df8c4(
                _0x5e814f == null ? undefined : _0x5e814f[_0xf722d1],
              )) == null
                ? undefined
                : _0x328154.elements,
              (_0x21506f = _0x1df8c4(
                _0x5e814f == null ? undefined : _0x5e814f[_0xf722d1],
              )) == null
                ? undefined
                : _0x21506f[_0x2126e9(404)],
            ),
          });
        }),
        ..._0x25cdd0({
          entityType: _0x341b2a.BOARD_ELEMENT,
          left: _0x3151e0(
            _0x1851b1 == null ? undefined : _0x1851b1.elements,
            undefined,
          ),
          right: _0x3151e0(
            _0x36fa2e == null ? undefined : _0x36fa2e.elements,
            undefined,
          ),
        }),
        ...Z(
          _0x341b2a.BOARD_THEME,
          _0x1851b1 == null ? undefined : _0x1851b1.theme,
          _0x36fa2e == null ? undefined : _0x36fa2e.theme,
        ),
        ...Q(_0x341b2a.BOARD_CHART, _0xc1ef4a, "BOARD_CHART_PLUGIN", "charts"),
        ...Q(
          _0x341b2a.BOARD_CHART_DATA,
          _0xc1ef4a,
          "BOARD_CHART_PLUGIN",
          "dataSources",
        ),
        ...Q(_0x341b2a.BOARD_TABLE, _0xc1ef4a, "BOARD_TABLE_PLUGIN", "tables"),
      ],
      _0xf122ff = _0x104340({
        entityType: _0x341b2a.BOARD_PAGE,
        items: _0x3f4fc6,
        left: _0x35dd15,
        right: _0x16c348,
        references: {
          left: _0x3151e0(_0x16ca86, _0x115c81.order),
          right: _0x3151e0(_0x5e814f, _0x1e5c95.order),
        },
      });
    return {
      items: _0xf122ff.items,
      supportedEntityTypes: q,
      scopes: _0xf122ff.scopes,
      productContext: { type: _0x515fa9.UNIVER_BOARD },
    };
  }
};
function X(_0x1bf396) {
  let _0x481b37 = _0x1df8c4(_0x1bf396 == null ? undefined : _0x1bf396.slides),
    _0x57d778 = _0x1bf396 == null ? undefined : _0x1bf396.slideOrder;
  return (Array.isArray(_0x57d778) && _0x57d778.length > 0) ||
    (_0x481b37 !== undefined && Object.keys(_0x481b37).length > 0)
    ? { pages: _0x481b37, order: _0x57d778 }
    : {
        pages: _0x1df8c4(_0x1bf396 == null ? undefined : _0x1bf396.pages),
        order: _0x1bf396 == null ? undefined : _0x1bf396.pageOrder,
      };
}
function Z(_0x3c5018, _0x20fd5b, _0x15b0c6) {
  return _0x25cdd0({
    entityType: _0x3c5018,
    left:
      _0x20fd5b === undefined
        ? []
        : [{ stableId: "root", position: 0, value: _0x20fd5b }],
    right:
      _0x15b0c6 === undefined
        ? []
        : [{ stableId: "root", position: 0, value: _0x15b0c6 }],
  });
}
function Q(_0x4f9dea, _0x3a5d3f, _0xa03afd, _0x7d2244) {
  return _0x25cdd0({
    entityType: _0x4f9dea,
    left: _0xfdc062(_0x3a5d3f.leftData, _0xa03afd, _0x7d2244),
    right: _0xfdc062(_0x3a5d3f.rightData, _0xa03afd, _0x7d2244),
  });
}
let $ = class extends _0x5de5fe {
  constructor(_0xaba954 = A, _0x1d7067, _0x22b5b5) {
    (super(),
      (this._config = _0xaba954),
      (this._injector = _0x1d7067),
      (this._configService = _0x22b5b5));
    let { ..._0x13c68c } = _0x101d08({}, A, this._config);
    this._configService["setConfig"]("boards-history.config", _0x13c68c);
  }
  onStarting() {
    (_0x1bedd6(this._injector, [[H], [N], [Y]]),
      this.disposeWithMe(
        this._injector["get"](_0x5f3e90).register(this._injector["get"](Y)),
      ),
      this._injector["get"](N));
  }
};
(K($, "pluginName", "UNIVER_BOARDS_HISTORY_PLUGIN"),
  K($, "packageName", O),
  K($, "version", k),
  K($, "type", _0x515fa9.UNIVER_BOARD),
  ($ = M(
    [
      _0x4a4d61(_0x3c296c, _0x25d880, _0x41b818),
      j(1, _0x40185d(_0x101c99)),
      j(2, _0x1fd456),
    ],
    $,
  )));
export {
  H as BoardsHistoryDiffService,
  Y as BoardsUnitComparisonAdapter,
  $ as UniverBoardsHistoryPlugin,
};
