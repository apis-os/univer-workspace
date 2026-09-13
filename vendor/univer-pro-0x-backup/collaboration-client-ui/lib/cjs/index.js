Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("@univerjs-pro/collaboration-client"),
  t = require("@univerjs/core"),
  n = require("@univerjs/ui"),
  r = require("rxjs"),
  i = require("rxjs/operators"),
  a = require("@univerjs/design"),
  o = require("@univerjs/icons"),
  s = require("react"),
  c = require("react/jsx-runtime"),
  l = require("@univerjs-pro/collaboration"),
  u = require("@univerjs-pro/license"),
  d = require("@univerjs/docs"),
  f = require("@univerjs/docs-ui"),
  p = require("@univerjs/engine-render"),
  m = require("@univerjs/network"),
  h = require("@univerjs/engine-formula"),
  g = require("@univerjs/sheets"),
  _ = require("@univerjs/sheets-ui"),
  v = require("@univerjs/protocol");
function ee(_0x456294) {
  switch (_0x456294) {
    case e["CollaborationStatus"]["OFFLINE"]:
      return {
        icon: (0x0, c["jsx"])(o["OffLineIcon"], {}),
        colorClass: "univer-text-red-500",
        i18nKey: "collaboration-client-ui.collabStatus.offline",
        tooltipKey: "collaboration-client-ui.collabClient.tooltip.reconnect",
        clickable: !0x0,
        indicator: "static",
      };
    case e["CollaborationStatus"]["CONFLICT"]:
      return {
        icon: (0x0, c["jsx"])(o["OffLineIcon"], {}),
        colorClass: "univer-text-orange-500",
        i18nKey: "collaboration-client-ui.collabStatus.conflict",
        clickable: !0x1,
        indicator: "static",
      };
    case e["CollaborationStatus"]["FETCH_MISS"]:
      return {
        icon: (0x0, c["jsx"])(o["LoadingMultiIcon"], {}),
        colorClass: "univer-text-blue-500",
        i18nKey: "collaboration-client-ui.collabStatus.fetchMiss",
        clickable: !0x1,
        indicator: "spin",
      };
    case e["CollaborationStatus"]["NOT_COLLAB"]:
      return {
        icon: (0x0, c["jsx"])(o["OnLineIcon"], {}),
        colorClass: "univer-text-gray-400",
        i18nKey: "collaboration-client-ui.collabStatus.notCollab",
        clickable: !0x1,
        indicator: "static",
      };
    case e["CollaborationStatus"]["AWAITING"]:
    case e["CollaborationStatus"]["AWAITING_WITH_PENDING"]:
      return {
        icon: (0x0, c["jsx"])(o["LoadingMultiIcon"], {}),
        colorClass: "univer-text-blue-500",
        i18nKey: "collaboration-client-ui.collabStatus.syncing",
        clickable: !0x1,
        indicator: "spin",
      };
    case e["CollaborationStatus"]["PENDING"]:
      return {
        icon: (0x0, c["jsx"])(o["LoadingMultiIcon"], {}),
        colorClass: "univer-text-blue-500",
        i18nKey: "collaboration-client-ui.collabStatus.syncing",
        clickable: !0x1,
        indicator: "spin",
      };
    case e["CollaborationStatus"]["SYNCED"]:
      return {
        icon: (0x0, c["jsx"])(o["OnLineIcon"], {}),
        colorClass: "univer-text-green-500",
        i18nKey: "collaboration-client-ui.collabStatus.synced",
        clickable: !0x1,
        indicator: "static",
      };
  }
}
function y(_0x58494c) {
  let { status$: _0x423342 } = _0x58494c,
    _0x4fe449 = (0x0, n["useObservable"])(
      _0x423342,
      e["CollaborationStatus"]["NOT_COLLAB"],
    ),
    _0x1491c9 = (0x0, n["useDependency"])(t["LocaleService"]),
    _0x8ecc00 = (0x0, n["useDependency"])(e["CollaborationSessionService"]),
    _0x3473cd = (0x0, s["useMemo"])(() => ee(_0x4fe449), [_0x4fe449]),
    _0x5f0922 = _0x4fe449 !== e["CollaborationStatus"]["OFFLINE"],
    _0x3a4fa5 = _0x1491c9["t"](_0x3473cd["i18nKey"]),
    _0x4e2dcc = _0x3473cd["tooltipKey"]
      ? _0x1491c9["t"](_0x3473cd["tooltipKey"])
      : _0x3a4fa5,
    _0x478a59 = (0x0, s["useCallback"])(() => {
      _0x5f0922 || _0x8ecc00["reconnect"]();
    }, [_0x5f0922, _0x8ecc00]),
    _0x2a52c7 = (0x0, s["useCallback"])(
      (_0x2902ec) => {
        !_0x5f0922 &&
          (_0x2902ec["key"] === "Enter" || _0x2902ec["key"] === "\x20") &&
          (_0x2902ec["preventDefault"](), _0x8ecc00["reconnect"]());
      },
      [_0x5f0922, _0x8ecc00],
    ),
    _0x5f3f06 = (0x0, c["jsx"])("span", {
      className: (0x0, a["clsx"])(
        "univer-flex\x20univer-items-center\x20univer-justify-center",
        "univer-text-xl\x20univer-transition-colors\x20univer-duration-200",
        _0x3473cd["colorClass"],
        {
          "univer-animate-spin": _0x3473cd["indicator"] === "spin",
          "univer-animate-pulse": _0x3473cd["indicator"] === "pulse",
        },
      ),
      "aria-hidden": "true",
      children: _0x3473cd["icon"],
    }),
    _0x5070cd = (0x0, c["jsx"])("span", {
      className: (0x0, a["clsx"])(
        "univer-flex univer-items-center univer-justify-center",
        "univer-h-8 univer-w-8 univer-rounded-lg",
        "univer-transition-all\x20univer-duration-200",
        "focus:univer-outline-none focus:univer-ring-2 focus:univer-ring-primary-500 focus:univer-ring-offset-2",
        "dark:focus:!univer-ring-offset-gray-800",
        {
          "univer-cursor-pointer\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700":
            _0x3473cd["clickable"],
          "univer-cursor-default": !_0x3473cd["clickable"],
        },
      ),
      children: _0x5f3f06,
    });
  return _0x3473cd["clickable"]
    ? (0x0, c["jsx"])(a["Tooltip"], {
        title: _0x4e2dcc,
        placement: "bottom",
        children: (0x0, c["jsx"])("button", {
          type: "button",
          onClick: _0x478a59,
          onKeyDown: _0x2a52c7,
          className: (0x0, a["clsx"])(
            "univer-inline-flex univer-items-center univer-justify-center",
            "univer-border-none univer-bg-transparent",
            "univer-m-0 univer-p-0",
            "univer-appearance-none",
          ),
          "aria-label": _0x3a4fa5 + "\x20-\x20" + _0x4e2dcc,
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: _0x5070cd,
        }),
      })
    : (0x0, c["jsx"])(a["Tooltip"], {
        title: _0x4e2dcc,
        placement: "bottom",
        children: (0x0, c["jsx"])("div", {
          className: (0x0, a["clsx"])(
            "univer-inline-flex univer-items-center univer-justify-center",
            "univer-border-none univer-bg-transparent",
            "univer-m-0 univer-p-0",
          ),
          "aria-label": _0x3a4fa5,
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: _0x5070cd,
        }),
      });
}
function b(_0x2e4980) {
  "@babel/helpers - typeof";
  return (
    (b =
      typeof Symbol == "function" &&
      typeof Symbol["iterator"] == _0x171317(0x279)
        ? function (_0x392806) {
            return typeof _0x392806;
          }
        : function (_0x42bc93) {
            const _0x226af2 = _0x171317;
            return _0x42bc93 &&
              typeof Symbol == _0x226af2(0x311) &&
              _0x42bc93[_0x226af2(0x2e2)] === Symbol &&
              _0x42bc93 !== Symbol["prototype"]
              ? _0x226af2(0x279)
              : typeof _0x42bc93;
          }),
    b(_0x2e4980)
  );
}
function te(_0x40bf5b, _0x4ea59a) {
  if (b(_0x40bf5b) != _0xaf9947(0x14d) || !_0x40bf5b) return _0x40bf5b;
  var _0x88e14c = _0x40bf5b[Symbol[_0xaf9947(0x3f0)]];
  if (_0x88e14c !== void 0x0) {
    var _0x29ee44 = _0x88e14c["call"](_0x40bf5b, _0x4ea59a || _0xaf9947(0x318));
    if (b(_0x29ee44) != _0xaf9947(0x14d)) return _0x29ee44;
    throw TypeError(_0xaf9947(0x394));
  }
  return (_0x4ea59a === _0xaf9947(0x13d) ? String : Number)(_0x40bf5b);
}
function ne(_0x27c875) {
  var _0x5edbdf = te(_0x27c875, _0x3d22d8(0x13d));
  return b(_0x5edbdf) == _0x3d22d8(0x279) ? _0x5edbdf : _0x5edbdf + "";
}
function x(_0x13d191, _0x567dbc, _0x373241) {
  return (
    (_0x567dbc = ne(_0x567dbc)) in _0x13d191
      ? Object["defineProperty"](_0x13d191, _0x567dbc, {
          value: _0x373241,
          enumerable: !0x0,
          configurable: !0x0,
          writable: !0x0,
        })
      : (_0x13d191[_0x567dbc] = _0x373241),
    _0x13d191
  );
}
function S(_0x5921ab, _0x26de8e) {
  return function (_0x33370d, _0x33fcf4) {
    _0x26de8e(_0x33370d, _0x33fcf4, _0x5921ab);
  };
}
function C(_0x521c88, _0x3a89c8, _0x24e391, _0x2f5a83) {
  var _0xba9d6c = arguments[_0x25e7e4(0x172)],
    _0x1c6798 =
      _0xba9d6c < 0x3
        ? _0x3a89c8
        : _0x2f5a83 === null
          ? (_0x2f5a83 = Object[_0x25e7e4(0x185)](_0x3a89c8, _0x24e391))
          : _0x2f5a83,
    _0x6b7d41;
  if (
    typeof Reflect == _0x25e7e4(0x14d) &&
    typeof Reflect[_0x25e7e4(0x13a)] == _0x25e7e4(0x311)
  )
    _0x1c6798 = Reflect[_0x25e7e4(0x13a)](
      _0x521c88,
      _0x3a89c8,
      _0x24e391,
      _0x2f5a83,
    );
  else {
    for (
      var _0x46ba53 = _0x521c88[_0x25e7e4(0x172)] - 0x1;
      _0x46ba53 >= 0x0;
      _0x46ba53--
    )
      (_0x6b7d41 = _0x521c88[_0x46ba53]) &&
        (_0x1c6798 =
          (_0xba9d6c < 0x3
            ? _0x6b7d41(_0x1c6798)
            : _0xba9d6c > 0x3
              ? _0x6b7d41(_0x3a89c8, _0x24e391, _0x1c6798)
              : _0x6b7d41(_0x3a89c8, _0x24e391)) || _0x1c6798);
  }
  return (
    _0xba9d6c > 0x3 &&
      _0x1c6798 &&
      Object[_0x25e7e4(0x3f2)](_0x3a89c8, _0x24e391, _0x1c6798),
    _0x1c6798
  );
}
let w = class extends t["Disposable"] {
  constructor(_0x1e07ed, _0x3caa15, _0x571f9b, _0x45f429, _0x53f39b) {
    (super(),
      (this[_0x44a0c7(0x1da)] = _0x1e07ed),
      (this[_0x44a0c7(0x214)] = _0x3caa15),
      (this[_0x44a0c7(0x27f)] = _0x571f9b),
      (this[_0x44a0c7(0x1a6)] = _0x45f429),
      (this[_0x44a0c7(0x3c1)] = _0x53f39b),
      x(
        this,
        _0x44a0c7(0x1fa),
        new r[_0x44a0c7(0x18e)](e[_0x44a0c7(0x335)]["NOT_COLLAB"]),
      ),
      x(this, _0x44a0c7(0x245), new Map()),
      this[_0x44a0c7(0x2b9)](),
      this[_0x44a0c7(0x416)](),
      this[_0x44a0c7(0x3f8)]());
  }
  ["dispose"]() {
    (this["_presenceStatusRegistrations"][_0x19afdb(0x3e6)]((_0x2407ab) =>
      _0x2407ab[_0x19afdb(0x2ca)](),
    ),
      this[_0x19afdb(0x245)]["clear"](),
      this[_0x19afdb(0x1fa)][_0x19afdb(0x2c2)](),
      super[_0x19afdb(0x2ca)]());
  }
  ["_initStatusListener"]() {
    this[_0x4c4056(0x3de)](
      (0x0, r[_0x4c4056(0x176)])(
        this["_univerInstanceService"][_0x4c4056(0x170)],
        this[_0x4c4056(0x1da)][_0x4c4056(0x2fd)](
          t[_0x4c4056(0x16b)][_0x4c4056(0x410)],
        ),
        this[_0x4c4056(0x1da)][_0x4c4056(0x2fd)](
          t[_0x4c4056(0x16b)][_0x4c4056(0x37d)],
        ),
      )
        ["pipe"](
          (0x0, i[_0x4c4056(0x1dc)])(() => re(this[_0x4c4056(0x1da)])),
          (0x0, i[_0x4c4056(0x3b3)])(),
          (0x0, r[_0x4c4056(0x36e)])((_0x3a12de) =>
            _0x3a12de
              ? this[_0x4c4056(0x27f)][_0x4c4056(0x2be)](_0x3a12de)
              : (0x0, r["of"])(null),
          ),
          (0x0, r[_0x4c4056(0x36e)])((_0xe6269e) =>
            _0xe6269e
              ? _0xe6269e["status$"]
              : (0x0, r["of"])(e[_0x4c4056(0x335)][_0x4c4056(0x1fc)]),
          ),
        )
        [_0x4c4056(0x32a)]((_0x851933) => {
          const _0x4ef309 = _0x4c4056;
          this[_0x4ef309(0x1fa)]["next"](_0x851933);
        }),
    );
  }
  ["_initStatusComponent"]() {
    this[_0x5afa3e(0x3de)](
      this[_0x5afa3e(0x1a6)]["registerComponent"](
        n[_0x5afa3e(0x41d)]["HEADER_MENU"],
        () =>
          (0x0, n[_0x5afa3e(0x24a)])(
            T({ status$: this[_0x5afa3e(0x1fa)][_0x5afa3e(0x3bd)]() }),
            this[_0x5afa3e(0x214)],
          ),
      ),
    );
  }
  ["_initPresenceStatusComponents"]() {
    let _0x5ac8aa = this[_0x5ad4a0(0x3c1)][_0x5ad4a0(0x16f)][_0x5ad4a0(0x32a)](
      (_0x154bc4) => {
        const _0x114ecd = _0x5ad4a0;
        this[_0x114ecd(0x2d7)](_0x154bc4);
      },
    );
    this[_0x5ad4a0(0x3de)](
      (0x0, t[_0x5ad4a0(0x1bd)])(() => _0x5ac8aa[_0x5ad4a0(0x207)]()),
    );
  }
  ["_syncPresenceStatusComponents"](_0x82d1c8) {
    let _0xeb7731 = new Map(
      _0x82d1c8["filter"]((_0x5e3840) => _0x5e3840[_0x4a9189(0x295)] != null)[
        _0x4a9189(0x1dc)
      ]((_0x30d1de) => [_0x30d1de[_0x4a9189(0x3e7)], _0x30d1de]),
    );
    (this[_0x4a9189(0x245)][_0x4a9189(0x3e6)]((_0x550af2, _0x515e82) => {
      const _0x3d2809 = _0x4a9189;
      _0xeb7731[_0x3d2809(0x3b5)](_0x515e82) ||
        (_0x550af2[_0x3d2809(0x2ca)](),
        this[_0x3d2809(0x245)][_0x3d2809(0x382)](_0x515e82));
    }),
      _0xeb7731[_0x4a9189(0x3e6)]((_0x153bee, _0x168ab9) => {
        const _0x19918e = _0x4a9189;
        this[_0x19918e(0x245)][_0x19918e(0x3b5)](_0x168ab9) ||
          this["_registerPresenceStatusComponent"](_0x153bee);
      }));
  }
  ["_registerPresenceStatusComponent"](_0xdb5b20) {
    let _0x225f55 = _0xdb5b20[_0x5eb65e(0x295)];
    if (!_0x225f55) return;
    let _0x5ac0e5 = new t[_0x5eb65e(0x320)](),
      _0x4bd997 = new r[_0x5eb65e(0x18e)](e[_0x5eb65e(0x335)]["NOT_COLLAB"]);
    (_0x5ac0e5[_0x5eb65e(0x1f3)](
      (0x0, t["toDisposable"])(() => _0x4bd997[_0x5eb65e(0x2c2)]()),
    ),
      _0x5ac0e5["add"](
        this[_0x5eb65e(0x1a6)][_0x5eb65e(0x205)](_0x225f55, () =>
          (0x0, n[_0x5eb65e(0x24a)])(
            T({ status$: _0x4bd997["asObservable"]() }),
            this[_0x5eb65e(0x214)],
          ),
        ),
      ));
    let _0x597ecd = this[_0x5eb65e(0x1da)]
      ["getCurrentTypeOfUnit$"](_0xdb5b20["unitType"])
      [_0x5eb65e(0x3df)](
        (0x0, i["map"])(
          (_0x561d31) =>
            (_0x561d31 == null ? void 0x0 : _0x561d31[_0x5eb65e(0x24f)]()) ??
            null,
        ),
        (0x0, i[_0x5eb65e(0x3b3)])(),
        (0x0, r[_0x5eb65e(0x36e)])((_0x12bfe1) =>
          _0x12bfe1
            ? this[_0x5eb65e(0x27f)][_0x5eb65e(0x2be)](_0x12bfe1)
            : (0x0, r["of"])(null),
        ),
        (0x0, r["switchMap"])(
          (_0x5970ae) =>
            (_0x5970ae == null ? void 0x0 : _0x5970ae["status$"]) ??
            (0x0, r["of"])(e["CollaborationStatus"][_0x5eb65e(0x1fc)]),
        ),
      )
      [_0x5eb65e(0x32a)]((_0x3c40f9) => _0x4bd997["next"](_0x3c40f9));
    (_0x5ac0e5[_0x5eb65e(0x1f3)](
      (0x0, t["toDisposable"])(() => _0x597ecd["unsubscribe"]()),
    ),
      this[_0x5eb65e(0x245)][_0x5eb65e(0x1f9)](
        _0xdb5b20[_0x5eb65e(0x3e7)],
        _0x5ac0e5,
      ));
  }
};
w = C(
  [
    S(0x0, t["IUniverInstanceService"]),
    S(0x1, (0x0, t["Inject"])(t["Injector"])),
    S(0x2, (0x0, t["Inject"])(e["CollaborationController"])),
    S(0x3, n["IUIPartsService"]),
    S(0x4, (0x0, t["Inject"])(n["IUnitPresenceUIAdapterRegistry"])),
  ],
  w,
);
function re(_0x4c93a9) {
  let _0x441362 = _0x4c93a9[_0x4927b1(0x1e8)](),
    _0xc8c4e3 = _0x441362 == null ? void 0x0 : _0x441362[_0x4927b1(0x24f)]();
  if (_0xc8c4e3 && !(0x0, t[_0x4927b1(0x2ae)])(_0xc8c4e3)) return _0xc8c4e3;
  let _0x566317 = _0x4c93a9["getCurrentUnitOfType"](
      t["UniverInstanceType"]["UNIVER_DOC"],
    ),
    _0x45164e = _0x566317 == null ? void 0x0 : _0x566317[_0x4927b1(0x24f)]();
  if (_0x45164e && !(0x0, t[_0x4927b1(0x2ae)])(_0x45164e)) return _0x45164e;
  let _0x56acd3 = _0x4c93a9[_0x4927b1(0x3e5)](
    t[_0x4927b1(0x16b)][_0x4927b1(0x37d)],
  );
  if (_0x56acd3) return _0x56acd3[_0x4927b1(0x24f)]();
  let _0x1df2a2 = _0x4c93a9[_0x4927b1(0x209)](
    t["UniverInstanceType"][_0x4927b1(0x410)],
  )[_0x4927b1(0x2ab)](
    (_0x37b578) => !(0x0, t[_0x4927b1(0x2ae)])(_0x37b578[_0x4927b1(0x24f)]()),
  );
  return _0x1df2a2 ? _0x1df2a2[_0x4927b1(0x24f)]() : null;
}
function T(_0x53b0bf) {
  let { status$: _0xa54414 } = _0x53b0bf;
  return function () {
    return (0x0, c[_0x2ac019(0x1cc)])(y, { status$: _0xa54414 });
  };
}
var ie = "@univerjs-pro/collaboration-client-ui",
  ae = "1.0.0-insiders.20260907-70fc579";
const E = {
    id: "collaboration-client-ui.operation.update-remote-unit-presence",
    type: t["CommandType"]["OPERATION"],
    handler: (_0x29ae3b, _0x1d12da) => {
      let _0x49d5c6 = _0x29ae3b["get"](n[_0xaaab27(0x339)])[_0xaaab27(0x330)](
        _0x1d12da[_0xaaab27(0x3e7)],
      );
      if (!_0x49d5c6) return !0x1;
      switch (_0x1d12da["update"]["type"]) {
        case "set":
          return (
            _0x49d5c6["setRemotePresence"](
              _0x1d12da[_0xaaab27(0x1c7)][_0xaaab27(0x3e4)],
            ),
            !0x0
          );
        case _0xaaab27(0x375):
          return (
            _0x49d5c6["removeRemotePresence"](
              _0x1d12da[_0xaaab27(0x1c7)][_0xaaab27(0x1d6)],
              _0x1d12da[_0xaaab27(0x1c7)][_0xaaab27(0x3a0)],
            ),
            !0x0
          );
        case "clear":
          return (
            _0x49d5c6[_0xaaab27(0x2c7)](
              _0x1d12da[_0xaaab27(0x1c7)][_0xaaab27(0x1d6)],
            ),
            !0x0
          );
        default:
          return !0x1;
      }
    },
  },
  oe = {};
let D = class extends t["RxDisposable"] {
  constructor(_0x325062, _0x5cfb2c) {
    (super(),
      (this[_0x34fa5f(0x322)] = _0x325062),
      (this[_0x34fa5f(0x1f4)] = _0x5cfb2c),
      this[_0x34fa5f(0x2e6)]());
  }
  ["_init"]() {
    let _0x763344 = this;
    this["disposeWithMe"](
      this[_0x5e3cbd(0x322)][_0x5e3cbd(0x20e)]({
        onBeforePasteImage: async (_0x271d22) => {
          const _0x4bf7e9 = _0x5e3cbd;
          let _0x490010 =
            await _0x763344[_0x4bf7e9(0x1f4)][_0x4bf7e9(0x19d)](_0x271d22);
          return _0x490010
            ? {
                source: _0x490010["source"],
                imageSourceType: _0x490010["imageSourceType"],
              }
            : null;
        },
      }),
    );
  }
};
D = C([S(0x0, f["IDocClipboardService"]), S(0x1, t["IImageIoService"])], D);
const se = [
  "purple.300",
  "jiqing.500",
  "green.600",
  "red.300",
  "blue.400",
  "yellow.400",
];
var O = class extends t["Disposable"] {
  constructor(..._0x4328b1) {
    (super(..._0x4328b1),
      x(this, _0x556d74(0x3cd), new Map()),
      x(this, _0x556d74(0x213), 0x0));
  }
  ["assignAColorForMemberID"](_0xfb2f66) {
    if (this[_0x419406(0x3cd)][_0x419406(0x3b5)](_0xfb2f66))
      return this[_0x419406(0x3cd)][_0x419406(0x330)](_0xfb2f66);
    let _0x4c91ab = se[this[_0x419406(0x213)]];
    return (
      (this[_0x419406(0x213)] =
        (this[_0x419406(0x213)] + 0x1) % se[_0x419406(0x172)]),
      this["_assignedColors"][_0x419406(0x1f9)](_0xfb2f66, _0x4c91ab),
      _0x4c91ab
    );
  }
};
function ce(_0x2c2ed8) {
  let _0x1cefb4 = "";
  for (let _0x1e68a3 of _0x2c2ed8) {
    let {
      startOffset: _0x4ea9e9,
      endOffset: _0x50517b,
      isActive: _0x322dce,
      rangeType: _0x56c5e7,
      segmentId: _0x17ebf7,
      segmentPage: _0x3d5d2d,
    } = _0x1e68a3;
    (_0x1cefb4[_0x43b652(0x172)] && (_0x1cefb4 += ","),
      (_0x1cefb4 +=
        _0x4ea9e9 +
        ":" +
        _0x50517b +
        ":" +
        (_0x322dce ? "1" : "0") +
        ":" +
        _0x56c5e7 +
        ":" +
        _0x17ebf7 +
        ":" +
        _0x3d5d2d));
  }
  return _0x1cefb4;
}
function le(_0xa419cb) {
  let _0x11c4a0 = _0xa419cb[_0x74c5a(0x34c)](","),
    _0x15b657 = [];
  for (let _0x4e0351 of _0x11c4a0) {
    let [_0x3c37e9, _0x55be4a, _0x24dbbd, _0x1772a6, _0x104e53, _0x18eb07] =
      _0x4e0351[_0x74c5a(0x34c)](":");
    _0x15b657[_0x74c5a(0x365)]({
      startOffset: Number(_0x3c37e9),
      endOffset: Number(_0x55be4a),
      collapsed: _0x3c37e9 === _0x55be4a,
      isActive: _0x24dbbd === "1",
      rangeType:
        _0x1772a6 === t[_0x74c5a(0x3a5)][_0x74c5a(0x3b4)]
          ? t[_0x74c5a(0x3a5)][_0x74c5a(0x3b4)]
          : t[_0x74c5a(0x3a5)]["RECT"],
      segmentId: typeof _0x104e53 == _0x74c5a(0x13d) ? String(_0x104e53) : "",
      segmentPage: Number(_0x18eb07 ?? -0x1),
    });
  }
  return (
    _0x15b657["some"]((_0x589b79) => _0x589b79[_0x74c5a(0x165)]) ||
      (_0x15b657[0x0][_0x74c5a(0x165)] = !0x0),
    _0x15b657
  );
}
var k = class extends t["RxDisposable"] {
  constructor(..._0x3fb236) {
    (super(..._0x3fb236),
      x(this, _0x2b4ce8(0x314), new r[_0x2b4ce8(0x18e)](null)),
      x(
        this,
        "collabCursorState$",
        this[_0x2b4ce8(0x314)][_0x2b4ce8(0x3bd)](),
      ));
  }
  ["syncEditingCollabCursor"](_0x408929) {
    let {
        unitID: _0x1f3ca9,
        memberID: _0x536900,
        textRanges: _0x1c2b7a,
      } = _0x408929,
      _0x53f232 = ce(_0x1c2b7a);
    if (_0x53f232 === "") return;
    let _0x2fd741 = {
      unitID: _0x1f3ca9,
      memberID: _0x536900,
      selection: _0x53f232,
    };
    this["_collabCursorState$"][_0x34e252(0x2f8)](_0x2fd741);
  }
};
let A = class extends t["RxDisposable"] {
  get ["cursorInfo"]() {
    return this[_0x4d3e01(0x294)][_0x4d3e01(0x26d)]();
  }
  get ["roomMembers"]() {
    return this[_0x38461b(0x2a7)][_0x38461b(0x26d)]();
  }
  constructor(
    _0x51b3d6,
    _0x3c0c5a,
    _0x4982b9,
    _0x3c83ce,
    _0x2cb584,
    _0x3e44ff,
    _0x120794,
    _0x433ba1,
    _0x37c664,
  ) {
    (super(),
      (this[_0x2e176b(0x346)] = _0x51b3d6),
      (this[_0x2e176b(0x1ab)] = _0x3c0c5a),
      (this[_0x2e176b(0x214)] = _0x4982b9),
      (this[_0x2e176b(0x256)] = _0x3c83ce),
      (this[_0x2e176b(0x145)] = _0x2cb584),
      (this[_0x2e176b(0x3ae)] = _0x3e44ff),
      (this[_0x2e176b(0x421)] = _0x120794),
      (this["_univerInstanceService"] = _0x433ba1),
      (this["_commandService"] = _0x37c664),
      x(this, _0x2e176b(0x350), !0x1),
      x(this, _0x2e176b(0x2e6), !0x1),
      x(this, _0x2e176b(0x294), new r[_0x2e176b(0x18e)](new Map())),
      x(this, "cursorInfo$", this["_cursorInfo$"][_0x2e176b(0x3bd)]()),
      x(this, _0x2e176b(0x2a7), new r[_0x2e176b(0x18e)]([])),
      x(
        this,
        "roomMembers$",
        this[_0x2e176b(0x2a7)]["pipe"]((0x0, r["debounceTime"])(0x12c)),
      ),
      x(
        this,
        _0x2e176b(0x192),
        (0x0, t[_0x2e176b(0x2aa)])((_0x35a017) => {
          const _0x5abba8 = _0x2e176b;
          let _0x9fd225 = {
            eventID: l[_0x5abba8(0x14e)][_0x5abba8(0x3fa)],
            data: {
              unitID: this[_0x5abba8(0x346)],
              memberID: this[_0x5abba8(0x1ab)][_0x5abba8(0x35b)](),
              selection: ce(_0x35a017),
            },
          };
          this["_session"][_0x5abba8(0x157)](_0x9fd225, this[_0x5abba8(0x346)]);
        }, 0x64),
      ));
  }
  ["dispose"]() {
    (super[_0x359dd1(0x2ca)](),
      this[_0x359dd1(0x294)][_0x359dd1(0x2f8)](new Map()),
      this[_0x359dd1(0x294)][_0x359dd1(0x2c2)](),
      this[_0x359dd1(0x2a7)][_0x359dd1(0x2f8)]([]),
      this[_0x359dd1(0x2a7)][_0x359dd1(0x2c2)]());
  }
  ["init"]() {
    this[_0x1f2f78(0x2e6)] ||
      ((this[_0x1f2f78(0x2e6)] = !0x0),
      this["_session"][_0x1f2f78(0x313)]
        [_0x1f2f78(0x3df)]((0x0, r["takeUntil"])(this[_0x1f2f78(0x305)]))
        ["subscribe"]((_0x1806fb) => {
          const _0x38032f = _0x1f2f78;
          _0x1806fb === e["SessionStatus"]["ONLINE"]
            ? this[_0x38032f(0x267)]()
            : this[_0x38032f(0x14a)]();
        }),
      this["_session"]["event$"]
        ["pipe"]((0x0, r[_0x1f2f78(0x3d0)])(this["dispose$"]))
        ["subscribe"]((_0x4a042c) => {
          const _0x30456d = _0x1f2f78;
          let _0x261ea3 = _0x4a042c["eventID"];
          (_0x261ea3 === l[_0x30456d(0x14e)][_0x30456d(0x3fa)] &&
            this[_0x30456d(0x190)](_0x4a042c),
            _0x261ea3 === l[_0x30456d(0x14e)][_0x30456d(0x1fb)] &&
              this["_onCursorDelete"](_0x4a042c));
        }),
      this[_0x1f2f78(0x3de)](
        this[_0x1f2f78(0x3fb)]["onCommandExecuted"]((_0x149f63) => {
          const _0x388ed3 = _0x1f2f78;
          let _0x506fea = _0x149f63[_0x388ed3(0x351)];
          _0x506fea != null &&
            this["_online"] &&
            _0x149f63["id"] === d["SetTextSelectionsOperation"]["id"] &&
            _0x506fea[_0x388ed3(0x1d6)] === this[_0x388ed3(0x346)] &&
            _0x506fea[_0x388ed3(0x1cb)] === !0x1 &&
            _0x506fea[_0x388ed3(0x36a)][_0x388ed3(0x172)] > 0x0 &&
            this[_0x388ed3(0x192)](_0x506fea["ranges"]);
        }),
      ),
      this[_0x1f2f78(0x3ae)][_0x1f2f78(0x371)]
        [_0x1f2f78(0x3df)]((0x0, r[_0x1f2f78(0x3d0)])(this[_0x1f2f78(0x305)]))
        ["subscribe"]((_0x5e042b) => {
          const _0x1574d5 = _0x1f2f78;
          if (
            (_0x5e042b == null ? void 0x0 : _0x5e042b[_0x1574d5(0x346)]) !==
            this[_0x1574d5(0x346)]
          )
            return;
          let _0x32babd = {
            eventID: l[_0x1574d5(0x14e)][_0x1574d5(0x3fa)],
            data: _0x5e042b,
          };
          this[_0x1574d5(0x190)](_0x32babd);
        }),
      this["disposeWithMe"](
        this[_0x1f2f78(0x3fb)]["onCommandExecuted"]((_0x4ff6d3) => {
          const _0x5ac6ac = _0x1f2f78;
          if (_0x4ff6d3[_0x5ac6ac(0x351)] == null) return;
          let _0x24e3eb = _0x4ff6d3["params"];
          if (
            _0x4ff6d3["id"] !== d[_0x5ac6ac(0x219)]["id"] ||
            _0x24e3eb[_0x5ac6ac(0x1d6)] !== this[_0x5ac6ac(0x346)]
          )
            return;
          let _0x2f072e = { id: _0x5ac6ac(0x271), params: _0x24e3eb },
            _0x2e444e = this["cursorInfo"];
          for (let [_0x182682, _0xbb4a3a] of _0x2e444e) {
            let _0x2d7341 = {
                id: _0x5ac6ac(0x271),
                params: {
                  unitId: this[_0x5ac6ac(0x346)],
                  actions: null,
                  textRanges: _0xbb4a3a["ranges"],
                },
              },
              _0x10a1ca = this[_0x5ac6ac(0x421)][_0x5ac6ac(0x269)](
                _0x2f072e,
                _0x2d7341,
                !0x1,
              );
            if ((0x0, l[_0x5ac6ac(0x14b)])(_0x10a1ca)) throw _0x10a1ca["error"];
            _0x2e444e[_0x5ac6ac(0x1f9)](_0x182682, {
              ..._0xbb4a3a,
              ranges:
                _0x10a1ca[_0x5ac6ac(0x270)][_0x5ac6ac(0x351)]["textRanges"],
            });
          }
          queueMicrotask(() => {
            const _0x3b6e36 = _0x5ac6ac;
            this["_cursorInfo$"][_0x3b6e36(0x2f8)](_0x2e444e);
          });
        }),
      ));
  }
  ["_onCursorUpdate"](_0x37ecda) {
    var _0xdf7160;
    let { memberID: _0x4fd711, selection: _0x54cf54 } =
        _0x37ecda[_0x57e86b(0x1f7)],
      _0x1a04fd = le(_0x54cf54),
      _0x5c0c56 =
        ((_0xdf7160 = this["_memberService"][_0x57e86b(0x41f)](
          this[_0x57e86b(0x346)],
          _0x4fd711,
        )) == null
          ? void 0x0
          : _0xdf7160[_0x57e86b(0x25b)]) ?? _0x57e86b(0x2eb),
      _0x1930dd = {
        color: this[_0x57e86b(0x256)][_0x57e86b(0x3a3)](_0x4fd711),
        name: _0x5c0c56,
        ranges: _0x1a04fd,
      },
      _0x49ca65 = this["cursorInfo"];
    (_0x49ca65[_0x57e86b(0x1f9)](_0x4fd711, _0x1930dd),
      this[_0x57e86b(0x294)][_0x57e86b(0x2f8)](_0x49ca65));
  }
  ["_onCursorDelete"](_0x3070c4) {
    let { memberID: _0x4fca37 } = _0x3070c4["data"],
      _0x5caf86 = this[_0x23859c(0x2ef)];
    (_0x5caf86["delete"](_0x4fca37),
      this[_0x23859c(0x294)][_0x23859c(0x2f8)](_0x5caf86));
  }
  ["_toggleOnline"]() {
    var _0x48c0ba;
    if (
      ((this[_0x27da42(0x350)] = !0x0),
      ((_0x48c0ba = this[_0x27da42(0x1da)][_0x27da42(0x1e8)]()) == null
        ? void 0x0
        : _0x48c0ba[_0x27da42(0x24f)]()) !== this[_0x27da42(0x346)])
    )
      return;
    let _0x25ec44 = this[_0x27da42(0x214)]
      ["get"](d[_0x27da42(0x211)])
      [_0x27da42(0x39d)]();
    Array["isArray"](_0x25ec44) &&
      _0x25ec44["length"] > 0x0 &&
      this[_0x27da42(0x192)](_0x25ec44);
  }
  ["_toggleOffline"]() {
    this[_0x2c5fb5(0x350)] = !0x1;
  }
};
A = C(
  [
    S(0x2, (0x0, t["Inject"])(t["Injector"])),
    S(0x3, (0x0, t["Inject"])(O)),
    S(0x4, (0x0, t["Inject"])(e["MemberService"])),
    S(0x5, (0x0, t["Inject"])(k)),
    S(0x6, l["ITransformService"]),
    S(0x7, t["IUniverInstanceService"]),
    S(0x8, t["ICommandService"]),
  ],
  A,
);
const ue = () => {
  let _0x2ffbfd = [],
    _0xf32503 = !0x1;
  return (_0x5e2048) => {
    (_0x2ffbfd[_0x382b6d(0x365)](_0x5e2048),
      _0xf32503 ||
        ((_0xf32503 = !0x0),
        setTimeout(() => {
          const _0x2e5415 = _0x382b6d;
          (_0x2ffbfd[_0x2e5415(0x3e6)]((_0x59ee59) => _0x59ee59()),
            (_0x2ffbfd = []),
            (_0xf32503 = !0x1));
        })));
  };
};
let j = class extends t["RxDisposable"] {
  get ["cursorInfo"]() {
    return this["_cursorInfo$"]["getValue"]();
  }
  get ["roomMembers"]() {
    return this[_0x2c9b6e(0x2a7)][_0x2c9b6e(0x26d)]();
  }
  constructor(
    _0x4df41e,
    _0x477a87,
    _0x42c148,
    _0x3c7d7b,
    _0x54951e,
    _0x213f40,
    _0x524d6f,
    _0x24fb74,
  ) {
    (super(),
      (this["unitID"] = _0x4df41e),
      (this[_0x3ead35(0x1ab)] = _0x477a87),
      (this[_0x3ead35(0x214)] = _0x42c148),
      (this[_0x3ead35(0x256)] = _0x3c7d7b),
      (this[_0x3ead35(0x145)] = _0x54951e),
      (this["_univerInstanceService"] = _0x213f40),
      (this[_0x3ead35(0x3fb)] = _0x524d6f),
      (this["_refRangeService"] = _0x24fb74),
      x(this, _0x3ead35(0x350), !0x1),
      x(this, _0x3ead35(0x2e6), !0x1),
      x(this, _0x3ead35(0x294), new r[_0x3ead35(0x18e)](new Map())),
      x(this, _0x3ead35(0x389), this[_0x3ead35(0x294)][_0x3ead35(0x3bd)]()),
      x(this, _0x3ead35(0x2a7), new r["BehaviorSubject"]([])),
      x(
        this,
        _0x3ead35(0x2c8),
        this[_0x3ead35(0x2a7)]["pipe"]((0x0, r[_0x3ead35(0x2af)])(0x12c)),
      ),
      x(
        this,
        _0x3ead35(0x192),
        (0x0, t[_0x3ead35(0x2aa)])((_0x4baaf7, _0x23a013) => {
          const _0x528331 = _0x3ead35;
          let _0x5a0a77 = {
            eventID: l[_0x528331(0x14e)][_0x528331(0x3fa)],
            data: {
              unitID: this[_0x528331(0x346)],
              memberID: this[_0x528331(0x1ab)][_0x528331(0x35b)](),
              selection: (0x0, h[_0x528331(0x2ff)])(
                _0x4baaf7,
                _0x23a013["range"],
              ),
            },
          };
          this[_0x528331(0x1ab)][_0x528331(0x157)](
            _0x5a0a77,
            this[_0x528331(0x346)],
          );
        }, 0x64),
      ));
  }
  ["dispose"]() {
    (super[_0x3b5815(0x2ca)](),
      this[_0x3b5815(0x294)][_0x3b5815(0x2f8)](new Map()),
      this[_0x3b5815(0x294)][_0x3b5815(0x2c2)](),
      this[_0x3b5815(0x2a7)]["next"]([]),
      this[_0x3b5815(0x2a7)][_0x3b5815(0x2c2)]());
  }
  ["init"]() {
    this[_0x21442d(0x2e6)] ||
      ((this[_0x21442d(0x2e6)] = !0x0),
      this["_session"][_0x21442d(0x313)]
        ["pipe"]((0x0, r[_0x21442d(0x3d0)])(this[_0x21442d(0x305)]))
        [_0x21442d(0x32a)]((_0x287860) => {
          const _0x5bf21a = _0x21442d;
          _0x287860 === e[_0x5bf21a(0x2fb)][_0x5bf21a(0x175)]
            ? this[_0x5bf21a(0x267)]()
            : this[_0x5bf21a(0x14a)]();
        }),
      this[_0x21442d(0x1ab)][_0x21442d(0x405)]
        [_0x21442d(0x3df)]((0x0, r["takeUntil"])(this[_0x21442d(0x305)]))
        ["subscribe"]((_0x477842) => {
          const _0x1d7eb3 = _0x21442d;
          let _0x2f1224 = _0x477842["eventID"];
          (_0x2f1224 === l["CollaborationEvent"][_0x1d7eb3(0x3fa)] &&
            this[_0x1d7eb3(0x190)](_0x477842),
            _0x2f1224 === l[_0x1d7eb3(0x14e)][_0x1d7eb3(0x1fb)] &&
              this["_onCursorDelete"](_0x477842));
        }),
      this[_0x21442d(0x1ac)](),
      this["disposeWithMe"](
        this[_0x21442d(0x3fb)][_0x21442d(0x417)]((_0x1cabb7) => {
          const _0x453a7f = _0x21442d;
          if (
            this[_0x453a7f(0x350)] &&
            _0x1cabb7["id"] === g["SetSelectionsOperation"]["id"] &&
            _0x1cabb7[_0x453a7f(0x351)]["unitId"] === this[_0x453a7f(0x346)]
          ) {
            let _0x5afde6 = _0x1cabb7[_0x453a7f(0x351)];
            this["_updateLocalCursor"](
              _0x5afde6[_0x453a7f(0x338)],
              _0x5afde6["selections"][0x0],
            );
          }
        }),
      ));
  }
  ["_onCursorUpdate"](_0x307408) {
    var _0x2554e9;
    let { memberID: _0xcb477f, selection: _0xf0699d } = _0x307408["data"],
      { sheetName: _0x2155b4, range: _0x5078a5 } = (0x0, h[_0x27e9d3(0x36d)])(
        _0xf0699d,
      ),
      _0x2f7f58 = {
        name:
          ((_0x2554e9 = this[_0x27e9d3(0x145)]["getMember"](
            this[_0x27e9d3(0x346)],
            _0xcb477f,
          )) == null
            ? void 0x0
            : _0x2554e9[_0x27e9d3(0x25b)]) ?? _0x27e9d3(0x2eb),
        range: this[_0x27e9d3(0x413)](_0x2155b4, _0x5078a5),
        sheetID: _0x2155b4,
        color: this[_0x27e9d3(0x256)][_0x27e9d3(0x3a3)](_0xcb477f),
        selection: _0xf0699d,
      },
      _0x54d1ca = this[_0x27e9d3(0x2ef)];
    (_0x54d1ca[_0x27e9d3(0x1f9)](_0xcb477f, _0x2f7f58),
      this[_0x27e9d3(0x294)]["next"](_0x54d1ca));
  }
  ["_onCursorDelete"](_0x1edbe2) {
    let { memberID: _0x472c7d } = _0x1edbe2[_0x31b358(0x1f7)],
      _0x12d755 = this["cursorInfo"];
    (_0x12d755[_0x31b358(0x382)](_0x472c7d),
      this[_0x31b358(0x294)]["next"](_0x12d755));
  }
  ["_getMergeRange"](_0x2e388a, _0x55d2fd) {
    var _0x1a0717;
    let _0x12602 =
      (_0x1a0717 = this[_0x39588b(0x1da)][_0x39588b(0x2fc)](
        this["unitID"],
        t[_0x39588b(0x16b)][_0x39588b(0x37d)],
      )) == null || (_0x1a0717 = _0x1a0717[_0x39588b(0x193)](_0x2e388a)) == null
        ? void 0x0
        : _0x1a0717[_0x39588b(0x24c)]();
    return (
      (_0x12602 == null
        ? void 0x0
        : _0x12602["find"]((_0x88fa9b) =>
            t["Rectangle"][_0x39588b(0x1a2)](_0x88fa9b, _0x55d2fd),
          )) || _0x55d2fd
    );
  }
  ["_onRefRangeChange"]() {
    let _0x3ad443 = new t[_0x108b28(0x320)](),
      _0x18317b = ue(),
      _0x2d00e0 = () => {
        const _0x3e16e4 = _0x108b28;
        _0x3ad443[_0x3e16e4(0x2ca)]();
        let _0x211e16 = (_0x1abb05, _0x38b684, _0x5ee37d, _0x561633) => {
          const _0x119ce0 = _0x3e16e4;
          let _0x5d50e2 = [];
          switch (_0x1abb05["id"]) {
            case g[_0x119ce0(0x387)][_0x119ce0(0x419)]:
              _0x5d50e2 = (0x0, g[_0x119ce0(0x33c)])(_0x1abb05, _0x561633);
              break;
            case g[_0x119ce0(0x387)][_0x119ce0(0x173)]:
              _0x5d50e2 = (0x0, g[_0x119ce0(0x244)])(_0x1abb05, _0x561633);
              break;
            case g[_0x119ce0(0x387)][_0x119ce0(0x1f1)]:
              _0x5d50e2 = (0x0, g[_0x119ce0(0x2a6)])(_0x1abb05, _0x561633);
              break;
            case g[_0x119ce0(0x387)]["InsertRangeMoveDownCommandId"]:
              _0x5d50e2 = (0x0, g[_0x119ce0(0x35f)])(_0x1abb05, _0x561633);
              break;
            case g[_0x119ce0(0x387)][_0x119ce0(0x423)]:
              _0x5d50e2 = (0x0, g[_0x119ce0(0x355)])(_0x1abb05, _0x561633);
              break;
            case g["EffectRefRangId"][_0x119ce0(0x3c8)]:
              _0x5d50e2 = (0x0, g["handleInsertRow"])(_0x1abb05, _0x561633);
              break;
            case g["EffectRefRangId"][_0x119ce0(0x139)]:
              _0x5d50e2 = (0x0, g[_0x119ce0(0x18d)])(_0x1abb05, _0x561633);
              break;
            case g["EffectRefRangId"][_0x119ce0(0x240)]:
              _0x5d50e2 = (0x0, g["handleIRemoveCol"])(_0x1abb05, _0x561633);
              break;
            case g["EffectRefRangId"][_0x119ce0(0x391)]:
              _0x5d50e2 = (0x0, g[_0x119ce0(0x366)])(_0x1abb05, _0x561633);
              break;
          }
          let _0x3f018d = (0x0, g[_0x119ce0(0x3c9)])(_0x5d50e2, _0x561633),
            _0x5bd712 = this["cursorInfo"]["get"](_0x38b684);
          if (_0x5bd712 && _0x3f018d) {
            let _0x26f518 = { ..._0x5bd712, range: _0x3f018d };
            (this[_0x119ce0(0x2ef)][_0x119ce0(0x1f9)](_0x38b684, _0x26f518),
              _0x18317b(() => {
                const _0x336827 = _0x119ce0;
                let _0x14a2ee = this["_refRangeService"][_0x336827(0x2c9)](
                  _0x3f018d,
                  (_0x3fb30d) => (
                    _0x14a2ee[_0x336827(0x2ca)](),
                    _0x211e16(_0x3fb30d, _0x38b684, _0x5ee37d, _0x3f018d)
                  ),
                );
                _0x3ad443[_0x336827(0x1f3)](_0x14a2ee);
              }));
          }
          return { redos: [], undos: [] };
        };
        this[_0x3e16e4(0x2ef)][_0x3e16e4(0x3e6)]((_0x246081, _0xc3ca06) => {
          const _0x3c916c = _0x3e16e4;
          let { range: _0xbb99ca, sheetID: _0x295c7c } = _0x246081,
            _0x5744e1 = this[_0x3c916c(0x356)][_0x3c916c(0x2c9)](
              _0xbb99ca,
              (_0x25ce28) => (
                _0x5744e1[_0x3c916c(0x2ca)](),
                _0x211e16(_0x25ce28, _0xc3ca06, _0x295c7c, _0xbb99ca)
              ),
            );
          _0x3ad443[_0x3c916c(0x1f3)](_0x5744e1);
        });
      };
    this[_0x108b28(0x3de)](
      (0x0, t[_0x108b28(0x1bd)])(
        this[_0x108b28(0x294)]["subscribe"](() => {
          _0x2d00e0();
        }),
      ),
    );
  }
  ["_toggleOnline"]() {
    var _0xa24e6c, _0x35f783;
    if (
      ((this[_0x5d72e1(0x350)] = !0x0),
      ((_0xa24e6c = this["_univerInstanceService"][_0x5d72e1(0x1e8)]()) == null
        ? void 0x0
        : _0xa24e6c[_0x5d72e1(0x24f)]()) !== this[_0x5d72e1(0x346)])
    )
      return;
    let _0x2d485e =
        (_0x35f783 = this[_0x5d72e1(0x214)]
          [_0x5d72e1(0x330)](g["SheetsSelectionsService"])
          ["getCurrentSelections"]()) == null
          ? void 0x0
          : _0x35f783[0x0],
      _0x3e3fb8 = this[_0x5d72e1(0x1da)]
        ["getCurrentUnitOfType"](t[_0x5d72e1(0x16b)][_0x5d72e1(0x37d)])
        [_0x5d72e1(0x2d4)]();
    _0x2d485e &&
      _0x3e3fb8 &&
      this[_0x5d72e1(0x192)](_0x3e3fb8["getSheetId"](), _0x2d485e);
  }
  ["_toggleOffline"]() {
    this[_0x4737fb(0x350)] = !0x1;
  }
};
j = C(
  [
    S(0x2, (0x0, t["Inject"])(t["Injector"])),
    S(0x3, (0x0, t["Inject"])(O)),
    S(0x4, (0x0, t["Inject"])(e["MemberService"])),
    S(0x5, t["IUniverInstanceService"]),
    S(0x6, t["ICommandService"]),
    S(0x7, (0x0, t["Inject"])(g["RefRangeService"])),
  ],
  j,
);
let M = class extends t["RxDisposable"] {
  constructor(_0x50288d, _0x31aa6b, _0x235963) {
    (super(),
      (this[_0x5705d2(0x1da)] = _0x50288d),
      (this[_0x5705d2(0x214)] = _0x31aa6b),
      (this[_0x5705d2(0x1c1)] = _0x235963),
      x(this, _0x5705d2(0x2f3), new Map()),
      x(this, "_entityInit$", new r[_0x5705d2(0x1b3)]()),
      this[_0x5705d2(0x2e6)]());
  }
  ["dispose"]() {
    (super[_0x364469(0x2ca)](),
      this[_0x364469(0x289)][_0x364469(0x2c2)](),
      this["_entities"][_0x364469(0x3e6)]((_0x11538d) =>
        _0x11538d[_0x364469(0x2ca)](),
      ));
  }
  ["getCollabCursors$"](_0x493967) {
    let _0x212a46 = this[_0xd951f0(0x2f3)][_0xd951f0(0x330)](_0x493967);
    return _0x212a46
      ? _0x212a46[_0xd951f0(0x389)]
      : this[_0xd951f0(0x289)][_0xd951f0(0x3df)](
          (0x0, r[_0xd951f0(0x1b7)])(
            (_0x3b8f0f) => _0x3b8f0f[_0xd951f0(0x346)] === _0x493967,
          ),
          (0x0, r[_0xd951f0(0x36e)])(
            (_0x42fa67) => _0x42fa67[_0xd951f0(0x389)],
          ),
        );
  }
  ["_init"]() {
    (this[_0x223704(0x1da)]
      [_0x223704(0x1c9)](t[_0x223704(0x16b)][_0x223704(0x37d)])
      [_0x223704(0x3df)]((0x0, r[_0x223704(0x3d0)])(this["dispose$"]))
      ["subscribe"](async (_0x17e163) => {
        const _0x43676e = _0x223704;
        let _0x3757f2 = _0x17e163[_0x43676e(0x38c)][_0x43676e(0x24f)](),
          _0x53ec3a = await this[_0x43676e(0x397)](_0x3757f2);
        (this["_entityInit$"]["next"](_0x53ec3a),
          this[_0x43676e(0x2f3)][_0x43676e(0x1f9)](_0x3757f2, _0x53ec3a));
      }),
      this[_0x223704(0x1da)]
        [_0x223704(0x1c9)](t[_0x223704(0x16b)][_0x223704(0x410)])
        [_0x223704(0x3df)]((0x0, r[_0x223704(0x3d0)])(this["dispose$"]))
        [_0x223704(0x3df)](
          (0x0, r[_0x223704(0x1b7)])(
            (_0x240dbe) =>
              !_0x240dbe[_0x223704(0x38c)]
                [_0x223704(0x24f)]()
                ["startsWith"]("__"),
          ),
        )
        [_0x223704(0x32a)](async (_0xa92490) => {
          const _0x1191d9 = _0x223704;
          let { unit: _0x400f7d } = _0xa92490,
            _0x17a59b = _0x400f7d[_0x1191d9(0x24f)](),
            _0x2d4f43 = await this["_startDocCollabCursor"](_0x17a59b);
          (this[_0x1191d9(0x289)]["next"](_0x2d4f43),
            this[_0x1191d9(0x2f3)]["set"](_0x17a59b, _0x2d4f43));
        }),
      (0x0, r[_0x223704(0x176)])(
        this[_0x223704(0x1da)][_0x223704(0x20d)](
          t[_0x223704(0x16b)][_0x223704(0x410)],
        ),
        this[_0x223704(0x1da)][_0x223704(0x20d)](
          t[_0x223704(0x16b)][_0x223704(0x37d)],
        ),
      )
        [_0x223704(0x3df)]((0x0, r[_0x223704(0x3d0)])(this[_0x223704(0x305)]))
        [_0x223704(0x32a)]((_0x130b19) => {
          const _0x22c55b = _0x223704;
          let _0x565902 = _0x130b19[_0x22c55b(0x24f)](),
            _0x1cd059 = this[_0x22c55b(0x2f3)]["get"](_0x565902);
          _0x1cd059 &&
            (_0x1cd059[_0x22c55b(0x2ca)](),
            this["_entities"][_0x22c55b(0x382)](_0x565902));
        }));
  }
  async ["_startSheetCollabCursor"](_0x34220f) {
    let _0x348d21 = await this[_0xb7202e(0x1c1)][_0xb7202e(0x328)](_0x34220f),
      _0x1426fd = this[_0xb7202e(0x214)][_0xb7202e(0x164)](
        j,
        _0x34220f,
        _0x348d21,
      );
    return (_0x1426fd[_0xb7202e(0x384)](), _0x1426fd);
  }
  async ["_startDocCollabCursor"](_0x290ac7) {
    let _0x1b0367 =
        await this["_collabSessionService"][_0x528396(0x328)](_0x290ac7),
      _0x39aed9 = this[_0x528396(0x214)]["createInstance"](
        A,
        _0x290ac7,
        _0x1b0367,
      );
    return (_0x39aed9[_0x528396(0x384)](), _0x39aed9);
  }
};
M = C(
  [
    S(0x0, t["IUniverInstanceService"]),
    S(0x1, (0x0, t["Inject"])(t["Injector"])),
    S(0x2, (0x0, t["Inject"])(e["CollaborationSessionService"])),
  ],
  M,
);
function de(_0x466f73, _0x4e5ea6) {
  (_0x466f73[_0x188188(0x27c)](),
    (_0x466f73[_0x188188(0x3fd)] = _0x188188(0x28b)));
  let _0x2c2849 = _0x466f73[_0x188188(0x23f)](_0x4e5ea6)[_0x188188(0x28c)];
  return (
    _0x466f73["restore"](),
    Math[_0x188188(0x2fa)](_0x2c2849 + 0x8, 0xc8)
  );
}
function fe(_0xba976d, _0x2a1774) {
  let { radius: _0x36d621, width: _0x2b2591, height: _0x39b687 } = _0x2a1774;
  ((_0x36d621 ??= 0x0), (_0x2b2591 ??= 0x1e), (_0x39b687 ??= 0x1e));
  let _0x3f7ee1 = 0x0,
    _0x596336 = 0x0,
    _0x460c2a = 0x0;
  ((_0x3f7ee1 =
    _0x596336 =
    _0x460c2a =
      Math["min"](_0x36d621, _0x2b2591 / 0x2, _0x39b687 / 0x2)),
    _0xba976d["beginPath"](),
    _0xba976d[_0x4bfe4f(0x255)](_0x3f7ee1, 0x0),
    _0xba976d[_0x4bfe4f(0x1e7)](_0x2b2591 - _0x596336, 0x0),
    _0xba976d[_0x4bfe4f(0x155)](
      _0x2b2591 - _0x596336,
      _0x596336,
      _0x596336,
      (Math["PI"] * 0x3) / 0x2,
      0x0,
      !0x1,
    ),
    _0xba976d[_0x4bfe4f(0x1e7)](_0x2b2591, _0x39b687 - _0x460c2a),
    _0xba976d[_0x4bfe4f(0x155)](
      _0x2b2591 - _0x460c2a,
      _0x39b687 - _0x460c2a,
      _0x460c2a,
      0x0,
      Math["PI"] / 0x2,
      !0x1,
    ),
    _0xba976d[_0x4bfe4f(0x1e7)](0x0, _0x39b687),
    _0xba976d[_0x4bfe4f(0x1e7)](0x0, _0x3f7ee1),
    _0xba976d[_0x4bfe4f(0x155)](
      _0x3f7ee1,
      _0x3f7ee1,
      _0x3f7ee1,
      Math["PI"],
      (Math["PI"] * 0x3) / 0x2,
      !0x1,
    ),
    _0xba976d[_0x4bfe4f(0x235)](),
    _0x2a1774[_0x4bfe4f(0x1b2)] &&
      (_0xba976d["save"](),
      (_0xba976d[_0x4bfe4f(0x3dd)] = _0x2a1774["fill"]),
      _0x2a1774["fillRule"] === "evenodd"
        ? _0xba976d["fill"](_0x4bfe4f(0x259))
        : _0xba976d[_0x4bfe4f(0x1b2)](),
      _0xba976d["restore"]()));
}
var pe = class e extends p["Shape"] {
  constructor(_0x1b2dc1, _0x43c77e) {
    (super(_0x1b2dc1, _0x43c77e),
      x(this, _0x2e36ff(0x293), void 0x0),
      x(this, _0x2e36ff(0x1b0), void 0x0),
      (this["color"] =
        _0x43c77e == null ? void 0x0 : _0x43c77e[_0x2e36ff(0x293)]),
      (this[_0x2e36ff(0x1b0)] =
        _0x43c77e == null ? void 0x0 : _0x43c77e[_0x2e36ff(0x1b0)]));
  }
  static ["drawWith"](_0x3e701f, _0x1864b2) {
    let { text: _0x42e571, color: _0x481c54 } = _0x1864b2;
    (_0x3e701f["save"](), (_0x3e701f[_0x37d185(0x3fd)] = _0x37d185(0x383)));
    let _0x569f63 = _0x3e701f[_0x37d185(0x23f)](_0x42e571)[_0x37d185(0x28c)];
    if (
      (fe(_0x3e701f, {
        height: 0x14,
        radius: 0x4,
        width: de(_0x3e701f, _0x42e571),
        fill: _0x481c54,
        evented: !0x1,
      }),
      (_0x3e701f["fillStyle"] = _0x37d185(0x15a)),
      _0x569f63 > 0xc0)
    ) {
      let _0x2337ce = "",
        _0x1f5205 = 0x0;
      for (let _0x5cb23c of _0x42e571) {
        let _0x21a322 = _0x3e701f["measureText"](_0x5cb23c)[_0x37d185(0x28c)];
        if (
          _0x1f5205 + _0x21a322 <=
          0xc0 - _0x3e701f[_0x37d185(0x23f)](_0x37d185(0x297))[_0x37d185(0x28c)]
        )
          ((_0x2337ce += _0x5cb23c), (_0x1f5205 += _0x21a322));
        else {
          _0x2337ce += "...";
          break;
        }
      }
      _0x3e701f["fillText"](_0x2337ce, 0x4, 0xf);
    } else _0x3e701f[_0x37d185(0x3a9)](_0x42e571, 0x4, 0xf);
    _0x3e701f[_0x37d185(0x234)]();
  }
  ["_draw"](_0x17c7c1) {
    e[_0xccc94a(0x191)](_0x17c7c1, this);
  }
};
const N = "collab-text-anchor-";
var me = class {
  constructor(_0x23bfdf, _0xab29dc, _0x206312, _0x3ddde7) {
    ((this[_0x23efce(0x3b7)] = _0x23bfdf),
      (this[_0x23efce(0x31b)] = _0xab29dc),
      (this[_0x23efce(0x3d2)] = _0x206312),
      (this[_0x23efce(0x39e)] = _0x3ddde7),
      x(this, _0x23efce(0x38a), []),
      x(this, "_anchor", null),
      x(this, _0x23efce(0x404), null),
      x(this, _0x23efce(0x390), null),
      x(this, "_hideTimer", null),
      x(this, _0x23efce(0x23b), null),
      this["_render"]());
  }
  set ["_hover"](_0x335ca0) {
    _0x335ca0
      ? (this[_0x41be9c(0x390)] && this["_anchorDot"][_0x41be9c(0x141)](),
        this["_textBubble"] && this[_0x41be9c(0x404)][_0x41be9c(0x2de)]())
      : (this[_0x41be9c(0x390)] && this["_anchorDot"][_0x41be9c(0x2de)](),
        this[_0x41be9c(0x404)] && this[_0x41be9c(0x404)][_0x41be9c(0x141)]());
  }
  ["dispose"]() {
    for (let _0x5e5717 of this[_0x3af7ee(0x38a)]) _0x5e5717[_0x3af7ee(0x2ca)]();
    (this["_textBubble"] && this["_textBubble"][_0x3af7ee(0x2ca)](),
      this[_0x3af7ee(0x390)] && this[_0x3af7ee(0x390)][_0x3af7ee(0x2ca)](),
      this[_0x3af7ee(0x386)] && this["_anchor"][_0x3af7ee(0x2ca)](),
      this[_0x3af7ee(0x23b)] && this[_0x3af7ee(0x23b)]());
  }
  ["_render"]() {
    let { _docSkeleton: _0x41fea6, _document: _0x5cb788 } = this,
      {
        color: _0x357e6b,
        name: _0x5802ca,
        ranges: _0xe1e6f7,
      } = this[_0x4785c5(0x3b7)],
      _0x4aecbb = _0x5cb788[_0x4785c5(0x152)](),
      { docsLeft: _0x59581e, docsTop: _0x590eb5 } = _0x4aecbb,
      _0x4a55cf = new f[_0x4785c5(0x263)](_0x4aecbb, _0x41fea6);
    for (let {
      startOffset: _0x4a39f0,
      endOffset: _0x69199d,
      rangeType: _0x5d44c8,
      segmentId: _0x937844,
      segmentPage: _0x19d715,
      collapsed: _0x2960c1,
      isActive: _0x52fd65,
    } of _0xe1e6f7) {
      let _0xff730a = _0x41fea6["findNodePositionByCharIndex"](
          _0x4a39f0,
          !0x0,
          _0x937844,
          _0x19d715,
        ),
        _0x5c20d3 = _0x41fea6[_0x4785c5(0x3a6)](
          _0x69199d,
          !0x0,
          _0x937844,
          _0x19d715,
        );
      _0x5c20d3 ??= _0x41fea6[_0x4785c5(0x3a6)](
        _0x69199d - 0x1,
        !0x1,
        _0x937844,
        _0x19d715,
      );
      let _0x55145c = he(_0xff730a, _0x5c20d3);
      if (_0x52fd65 && _0x55145c[_0x4785c5(0x16a)]) {
        let { contentBoxPointGroup: _0xcd80d6 } = _0x4a55cf[_0x4785c5(0x148)](
          _0x5c20d3,
          _0x5c20d3,
        );
        if (_0xcd80d6[_0x4785c5(0x172)] === 0x0) continue;
        (this["_drawAnchor"](
          _0x357e6b,
          _0xcd80d6,
          _0x59581e,
          _0x590eb5,
          _0x5802ca,
        ),
          (this[_0x4785c5(0x23b)] = this[_0x4785c5(0x353)]()));
      }
      if (_0xff730a && _0x5c20d3) {
        if (_0x5d44c8 === t[_0x4785c5(0x3a5)][_0x4785c5(0x341)]) {
          let { pointGroup: _0x4a6757 } =
            new f[_0x4785c5(0x40c)](_0x4aecbb, _0x41fea6)[_0x4785c5(0x148)](
              _0xff730a,
              _0x5c20d3,
            ) ?? {};
          if (_0x4a6757 == null || _0x4a6757[_0x4785c5(0x172)] === 0x0)
            continue;
          this[_0x4785c5(0x16d)](_0x357e6b, _0x4a6757, _0x59581e, _0x590eb5);
        } else {
          if (!_0x2960c1 && _0x55145c["canRenderSelection"]) {
            let { borderBoxPointGroup: _0x4f0b9e } = _0x4a55cf[
              _0x4785c5(0x148)
            ](_0xff730a, _0x5c20d3);
            if (_0x4f0b9e[_0x4785c5(0x172)] === 0x0) continue;
            this[_0x4785c5(0x1a5)](_0x357e6b, _0x4f0b9e, _0x59581e, _0x590eb5);
          }
        }
      }
    }
  }
  ["_drawAnchor"](_0xd4b8c6, _0x4afd36, _0x3549e7, _0x1b175b, _0x26d07d) {
    let {
        left: _0x557bf5,
        top: _0xa15109,
        height: _0x1a930e,
      } = this[_0x2a29a5(0x1cf)](_0x4afd36),
      _0x3487a5 = 1.5 / this["_getScale"](),
      _0x17017d = new p[_0x2a29a5(0x144)](
        N + (0x0, t["generateRandomId"])(0x6),
        {
          left: _0x557bf5 + _0x3549e7 - _0x3487a5,
          top: _0xa15109 + _0x1b175b,
          height: _0x1a930e,
          width: 1.5,
          fill:
            _0xd4b8c6 ||
            (0x0, p[_0x2a29a5(0x307)])(
              t[_0x2a29a5(0x3e3)][_0x2a29a5(0x3e8)],
              0x0,
            ),
          strokeWidth: _0x3487a5,
          stroke: _0x2a29a5(0x1f2),
          evented: !0x0,
        },
      );
    ((this[_0x2a29a5(0x386)] = _0x17017d),
      this[_0x2a29a5(0x31b)]["addObject"](_0x17017d, f[_0x2a29a5(0x1c3)]));
    let _0x1eb719 = new p[_0x2a29a5(0x144)](
      N + (0x0, t[_0x2a29a5(0x3d1)])(0x6),
      {
        left: _0x557bf5 + _0x3549e7 - _0x3487a5,
        top: _0xa15109 + _0x1b175b - 0x4 / 0x2,
        height: 0x4,
        width: 0x4,
        fill:
          _0xd4b8c6 ||
          (0x0, p[_0x2a29a5(0x307)])(
            t[_0x2a29a5(0x3e3)][_0x2a29a5(0x3e8)],
            0x0,
          ),
        strokeWidth: 0x0,
        stroke:
          _0xd4b8c6 ||
          (0x0, p[_0x2a29a5(0x307)])(t[_0x2a29a5(0x3e3)]["black"], 0x0),
        evented: !0x1,
      },
    );
    ((this[_0x2a29a5(0x390)] = _0x1eb719),
      this["_scene"][_0x2a29a5(0x239)](_0x1eb719, f[_0x2a29a5(0x1c3)]));
    let _0xcc3fb5 = new pe(N + (0x0, t[_0x2a29a5(0x3d1)])(0x6), {
      left: _0x557bf5 + _0x3549e7 - _0x3487a5,
      top: _0xa15109 + _0x1b175b - 0x14,
      text: _0x26d07d,
      color: _0xd4b8c6,
    });
    ((this[_0x2a29a5(0x404)] = _0xcc3fb5),
      this[_0x2a29a5(0x31b)][_0x2a29a5(0x239)](_0xcc3fb5, f[_0x2a29a5(0x1c3)]),
      (this[_0x2a29a5(0x2f1)] = !0x1));
  }
  ["_handleHover"]() {
    let _0x456561 = this[_0x4f7fd2(0x386)][_0x4f7fd2(0x26b)][_0x4f7fd2(0x1f8)](
        () => {
          const _0x4303a2 = _0x4f7fd2;
          this[_0x4303a2(0x2f1)] = !0x0;
        },
      ),
      _0x3e084f = this[_0x4f7fd2(0x386)][_0x4f7fd2(0x178)][_0x4f7fd2(0x1f8)](
        () => {
          const _0x5804e6 = _0x4f7fd2;
          (this[_0x5804e6(0x1ad)] && clearTimeout(this[_0x5804e6(0x1ad)]),
            (this[_0x5804e6(0x1ad)] = setTimeout(() => {
              const _0x1ef057 = _0x5804e6;
              this[_0x1ef057(0x2f1)] = !0x1;
            }, 0x7d0)));
        },
      );
    return () => {
      const _0x5071d8 = _0x4f7fd2;
      (_0x456561[_0x5071d8(0x207)](), _0x3e084f[_0x5071d8(0x207)]());
    };
  }
  ["_drawTextRange"](_0x1ecff9, _0x5be75d, _0x3ae68f, _0x17150c) {
    let _0x560207 = 0.2,
      _0x1beb96 = new t[_0x3d31b7(0x342)](_0x1ecff9)
        [_0x3d31b7(0x1ed)](_0x560207)
        [_0x3d31b7(0x3b8)](),
      _0x5d5799 = new p[_0x3d31b7(0x2db)](
        _0x3d31b7(0x2cf) + (0x0, t[_0x3d31b7(0x3d1)])(0x6),
        {
          pointsGroup: _0x5be75d,
          fill:
            _0x1beb96 ||
            (0x0, p[_0x3d31b7(0x307)])(
              t["COLORS"][_0x3d31b7(0x3e8)],
              _0x560207,
            ),
          left: _0x3ae68f,
          top: _0x17150c,
          evented: !0x1,
          debounceParentDirty: !0x1,
        },
      );
    (this[_0x3d31b7(0x38a)][_0x3d31b7(0x365)](_0x5d5799),
      this[_0x3d31b7(0x31b)][_0x3d31b7(0x239)](_0x5d5799, f[_0x3d31b7(0x1c3)]));
  }
  ["_drawRectRange"](_0x26615c, _0x370978, _0x205105, _0x354aa1) {
    let _0x40ff2f = 0.2,
      _0x337fc2 = new t[_0x591d0e(0x342)](_0x26615c)
        [_0x591d0e(0x1ed)](_0x40ff2f)
        [_0x591d0e(0x3b8)](),
      _0x3f2793 = new p[_0x591d0e(0x2db)](
        _0x591d0e(0x364) + (0x0, t[_0x591d0e(0x3d1)])(0x6),
        {
          pointsGroup: _0x370978,
          fill:
            _0x337fc2 ||
            (0x0, p[_0x591d0e(0x307)])(
              t[_0x591d0e(0x3e3)][_0x591d0e(0x3e8)],
              _0x40ff2f,
            ),
          left: _0x205105,
          top: _0x354aa1,
          evented: !0x1,
          debounceParentDirty: !0x1,
        },
      );
    (this[_0x591d0e(0x38a)]["push"](_0x3f2793),
      this[_0x591d0e(0x31b)]["addObject"](
        _0x3f2793,
        f["TEXT_RANGE_LAYER_INDEX"],
      ));
  }
  ["_getAnchorBounding"](_0x3db9ff) {
    let _0x2135ac = _0x3db9ff[0x0],
      _0x59091c = _0x2135ac[0x0],
      _0xfa1d47 = _0x2135ac[0x2],
      { x: _0x2dd9f4, y: _0x374ba2 } = _0x59091c,
      { x: _0x1dc299, y: _0xd60d17 } = _0xfa1d47;
    return {
      left: _0x2dd9f4,
      top: _0x374ba2,
      width: _0x1dc299 - _0x2dd9f4,
      height: _0xd60d17 - _0x374ba2,
    };
  }
  ["_getScale"]() {
    let { scaleX: _0x5a111c, scaleY: _0x2dafbf } =
      this["_scene"][_0x32115c(0x136)]();
    return Math["max"](_0x5a111c, _0x2dafbf);
  }
};
function he(_0x40582b, _0x47c441) {
  if (!_0x47c441) return { canRenderAnchor: !0x1, canRenderSelection: !0x1 };
  if (
    !_0x40582b ||
    _0x40582b[_0x2b7962(0x344)] !== _0x47c441[_0x2b7962(0x344)] ||
    ((_0x40582b[_0x2b7962(0x344)] === p[_0x2b7962(0x398)]["HEADER"] ||
      _0x40582b[_0x2b7962(0x344)] ===
        p["DocumentSkeletonPageType"][_0x2b7962(0x277)]) &&
      _0x40582b["segmentPage"] !== _0x47c441["segmentPage"])
  )
    return { canRenderAnchor: !0x0, canRenderSelection: !0x1 };
  let _0x172e4e = (0x0, p[_0x2b7962(0x150)])(_0x40582b),
    _0x1bea6e = (0x0, p[_0x2b7962(0x150)])(_0x47c441);
  return {
    canRenderAnchor: !0x0,
    canRenderSelection:
      _0x172e4e == null || _0x1bea6e == null
        ? _0x172e4e == null && _0x1bea6e == null
        : _0x172e4e[_0x2b7962(0x2b6)] === _0x1bea6e[_0x2b7962(0x2b6)] &&
          _0x172e4e[_0x2b7962(0x15c)] === _0x1bea6e[_0x2b7962(0x15c)] &&
          _0x172e4e["columnIndex"] === _0x1bea6e[_0x2b7962(0x396)],
  };
}
let P = class extends t["RxDisposable"] {
  constructor(_0x3f5704, _0x2afb5e, _0x3efa66, _0x22f916, _0x2bd04d) {
    (super(),
      (this["_context"] = _0x3f5704),
      (this[_0x2d9330(0x343)] = _0x2afb5e),
      (this[_0x2d9330(0x2b4)] = _0x3efa66),
      (this["_commandService"] = _0x22f916),
      (this[_0x2d9330(0x34f)] = _0x2bd04d),
      x(this, _0x2d9330(0x169), []),
      x(this, "_cursors", []),
      this[_0x2d9330(0x2e6)]());
  }
  ["_init"]() {
    let _0x49c478 = this[_0x244b33(0x17a)]["unitId"],
      _0x941a3 = this[_0x244b33(0x343)];
    (this[_0x244b33(0x3de)](
      (0x0, r[_0x244b33(0x223)])([
        this["_collabCursorController"][_0x244b33(0x418)](_0x49c478),
        this[_0x244b33(0x34f)]["currentTheme$"],
      ])
        ["pipe"](
          (0x0, i[_0x244b33(0x1dc)])(([_0x404882, _0x877a20]) => ({
            skeleton: _0x941a3[_0x244b33(0x282)](),
            cursors: [..._0x404882[_0x244b33(0x40d)]()][_0x244b33(0x1c2)](
              (_0x3fbf08) => ({
                ..._0x3fbf08,
                color: this["_themeService"][_0x244b33(0x264)](
                  _0x3fbf08["color"],
                ),
              }),
            ),
          })),
        )
        [_0x244b33(0x32a)]((_0x116716) => {
          const _0x12d379 = _0x244b33;
          if ((this[_0x12d379(0x3ac)](), _0x116716)) {
            let { skeleton: _0x24b27a, cursors: _0x52bd1c } = _0x116716;
            this[_0x12d379(0x3e2)](_0x24b27a, _0x52bd1c);
          }
        }),
    ),
      this[_0x244b33(0x354)](),
      this[_0x244b33(0x3c6)]());
  }
  ["_updateCollabCursors"](_0x14011e, _0x570307) {
    let { scene: _0x2e7d75, mainComponent: _0x17e84a } = this[_0x226cee(0x17a)],
      _0x3f7d8b = _0x570307[_0x226cee(0x1dc)](
        (_0x287092) => new me(_0x287092, _0x2e7d75, _0x14011e, _0x17e84a),
      );
    ((this[_0x226cee(0x169)] = _0x3f7d8b),
      (this[_0x226cee(0x298)] = _0x570307));
  }
  ["_refreshCollabCursors"]() {
    this["_removeCollabCursors"]();
    let { scene: _0x23cc3e, mainComponent: _0x40c120 } = this[_0x27aaba(0x17a)],
      _0x32caad = this[_0x27aaba(0x343)][_0x27aaba(0x282)](),
      _0x3fb10f = this[_0x27aaba(0x298)][_0x27aaba(0x1dc)](
        (_0x24933b) => new me(_0x24933b, _0x23cc3e, _0x32caad, _0x40c120),
      );
    this[_0x27aaba(0x169)] = _0x3fb10f;
  }
  ["_removeCollabCursors"]() {
    (this["_cursorShapes"][_0x11388d(0x3e6)]((_0x1ac7ba) =>
      _0x1ac7ba[_0x11388d(0x2ca)](),
    ),
      (this[_0x11388d(0x169)] = []));
  }
  ["_initCommandExecutedListener"]() {
    let _0x29fda8 = [f[_0x237e3c(0x1f6)]["id"]];
    this[_0x237e3c(0x3de)](
      this[_0x237e3c(0x3fb)][_0x237e3c(0x417)]((_0x366e0c) => {
        const _0x3023e2 = _0x237e3c;
        _0x29fda8[_0x3023e2(0x2f5)](_0x366e0c["id"]) &&
          _0x366e0c[_0x3023e2(0x351)][_0x3023e2(0x1d6)] ===
            this["_context"]["unitId"] &&
          this["_refreshCollabCursors"]();
      }),
    );
  }
  ["_initResize"]() {
    this[_0x19f13e(0x3de)](
      (0x0, t[_0x19f13e(0x325)])(
        this[_0x19f13e(0x17a)][_0x19f13e(0x260)][_0x19f13e(0x184)],
      )
        [_0x19f13e(0x3df)](
          (0x0, i[_0x19f13e(0x1b7)])(
            (_0x37a2cc) =>
              _0x37a2cc[_0x19f13e(0x331)] ===
              p[_0x19f13e(0x3ce)][_0x19f13e(0x3ab)],
          ),
          (0x0, i[_0x19f13e(0x1d8)])(0x10),
        )
        [_0x19f13e(0x32a)](() => {
          this["_refreshCollabCursors"]();
        }),
    );
  }
};
P = C(
  [
    S(0x1, (0x0, t["Inject"])(d["DocSkeletonManagerService"])),
    S(0x2, (0x0, t["Inject"])(M)),
    S(0x3, t["ICommandService"]),
    S(0x4, (0x0, t["Inject"])(t["ThemeService"])),
  ],
  P,
);
var ge = class extends p["Shape"] {
  constructor(_0x4445b4, _0x50468e) {
    (super(_0x4445b4, _0x50468e),
      x(this, _0x1bb12b(0x20c), void 0x0),
      x(this, _0x1bb12b(0x2ed), !0x1),
      x(this, _0x1bb12b(0x31c), void 0x0),
      x(this, "_name", ""),
      x(this, _0x1bb12b(0x18f), "top"),
      x(this, _0x1bb12b(0x210), void 0x0),
      x(this, _0x1bb12b(0x39c), void 0x0),
      x(this, _0x1bb12b(0x362), void 0x0),
      x(this, _0x1bb12b(0x217), 0x4),
      x(this, "_blinkTimer", void 0x0),
      x(this, _0x1bb12b(0x2c5), void 0x0),
      x(this, _0x1bb12b(0x26c), !0x0),
      x(this, _0x1bb12b(0x1be), 0x0),
      x(this, _0x1bb12b(0x2b1), "right"),
      _0x50468e &&
        (this[_0x1bb12b(0x254)](_0x50468e),
        _0x50468e[_0x1bb12b(0x2a3)] &&
          (_0x50468e[_0x1bb12b(0x37e)] ?? this[_0x1bb12b(0x217)]) &&
          this[_0x1bb12b(0x1a8)](
            _0x50468e[_0x1bb12b(0x37e)] ?? this[_0x1bb12b(0x217)],
          )),
      this["onPointerEnter$"]["subscribeEvent"](() =>
        this["setShapeProps"]({ hovered: !0x0 }),
      ),
      this["onPointerLeave$"]["subscribeEvent"](() =>
        this["setShapeProps"]({ hovered: !0x1 }),
      ));
  }
  ["setOffsetY"](_0x3bc38f) {
    this[_0x3137e3(0x1be)] = _0x3bc38f;
  }
  ["setShapeProps"](_0x43ce51) {
    ((this[_0x56f5ae(0x20c)] =
      _0x43ce51[_0x56f5ae(0x293)] ?? this[_0x56f5ae(0x20c)]),
      (this[_0x56f5ae(0x2ed)] = _0x43ce51["hovered"] ?? this[_0x56f5ae(0x2ed)]),
      (this[_0x56f5ae(0x31c)] = _0x43ce51[_0x56f5ae(0x28e)] ?? this["_range"]),
      (this[_0x56f5ae(0x14c)] = _0x43ce51["name"] ?? this[_0x56f5ae(0x14c)]),
      (this["_labelPosition"] =
        _0x43ce51["labelPosition"] ?? this[_0x56f5ae(0x18f)]),
      (this[_0x56f5ae(0x210)] =
        _0x43ce51[_0x56f5ae(0x22e)] ?? this[_0x56f5ae(0x210)]),
      (this["_showText"] =
        _0x43ce51[_0x56f5ae(0x26f)] ?? this[_0x56f5ae(0x39c)]),
      (this[_0x56f5ae(0x2b1)] =
        _0x43ce51[_0x56f5ae(0x2d3)] ?? this[_0x56f5ae(0x2b1)]),
      _0x43ce51[_0x56f5ae(0x37e)] !== void 0x0 &&
        (this[_0x56f5ae(0x217)] = _0x43ce51[_0x56f5ae(0x37e)]),
      _0x43ce51[_0x56f5ae(0x2a3)] !== void 0x0 &&
        (this[_0x56f5ae(0x362)] = _0x43ce51[_0x56f5ae(0x2a3)]),
      _0x43ce51[_0x56f5ae(0x310)] !== void 0x0 &&
        (this[_0x56f5ae(0x1be)] = _0x43ce51[_0x56f5ae(0x310)]),
      this["transformByState"]({
        width: _0x43ce51[_0x56f5ae(0x28c)],
        height: _0x43ce51[_0x56f5ae(0x37b)],
      }));
  }
  ["onMouseMove"](_0x10ce18) {
    let { row: _0xc00933, column: _0x2ebfe5 } = _0x10ce18;
    if (
      _0xc00933 >= this["_range"][_0x570935(0x3d7)] &&
      _0xc00933 <= this[_0x570935(0x31c)][_0x570935(0x38f)] &&
      _0x2ebfe5 >= this[_0x570935(0x31c)][_0x570935(0x3cf)] &&
      _0x2ebfe5 <= this[_0x570935(0x31c)]["endColumn"]
    ) {
      this[_0x570935(0x254)]({ hovered: !0x0 });
      return;
    }
    this[_0x570935(0x254)]({ hovered: !0x1 });
  }
  ["_startBlinking"](_0x51c572) {
    (this[_0x2630bc(0x206)](),
      (this[_0x2630bc(0x26c)] = !0x0),
      (this["_blinkIntervalTimer"] = window[_0x2630bc(0x3bb)](() => {
        const _0x4850dd = _0x2630bc;
        ((this[_0x4850dd(0x26c)] = !this[_0x4850dd(0x26c)]),
          this["makeDirty"](!0x0));
      }, 0x1f4)),
      (this["_blinkTimer"] = window["setTimeout"](() => {
        const _0x27067d = _0x2630bc;
        (this["_stopBlinking"](),
          (this[_0x27067d(0x26c)] = !0x0),
          this[_0x27067d(0x222)](!0x0));
      }, _0x51c572 * 0x3e8)));
  }
  ["_stopBlinking"]() {
    ((this[_0x2639fc(0x2c5)] &&=
      (window[_0x2639fc(0x37f)](this["_blinkIntervalTimer"]), void 0x0)),
      (this[_0x2639fc(0x137)] &&=
        (window[_0x2639fc(0x3d9)](this[_0x2639fc(0x137)]), void 0x0)));
  }
  ["triggerDblclick"](_0xe001bf) {
    return !0x1;
  }
  ["dispose"]() {
    (this[_0x5934cc(0x206)](), super[_0x5934cc(0x2ca)]());
  }
  ["_draw"](_0x13f94f) {
    let _0x555b78 = this[_0x2723c6(0x20c)],
      _0x7ca48e = this[_0x2723c6(0x210)];
    if (
      (this["_highlight"] &&
        !this[_0x2723c6(0x26c)] &&
        ((_0x555b78 = this[_0x2723c6(0x233)](this[_0x2723c6(0x20c)])),
        (_0x7ca48e = this[_0x2723c6(0x210)]
          ? this["_getLighterColor"](this["_backgroundColor"])
          : void 0x0)),
      p["Rect"][_0x2723c6(0x191)](_0x13f94f, {
        width: this[_0x2723c6(0x28c)],
        height: this["height"],
        strokeWidth: this[_0x2723c6(0x3b1)] || 1.5,
        stroke: _0x555b78,
        evented: !0x1,
        fill: _0x7ca48e,
      }),
      this[_0x2723c6(0x2ed)] || this[_0x2723c6(0x39c)])
    ) {
      _0x13f94f[_0x2723c6(0x27c)]();
      let _0x2961f5 =
        this[_0x2723c6(0x2b1)] === _0x2723c6(0x1a3)
          ? -de(_0x13f94f, this[_0x2723c6(0x14c)])
          : this[_0x2723c6(0x28c)];
      (_0x13f94f[_0x2723c6(0x33a)](
        0x1,
        0x0,
        0x0,
        0x1,
        _0x2961f5,
        (this[_0x2723c6(0x18f)] === _0x2723c6(0x248) ? 0x0 : -0x14) +
          (this[_0x2723c6(0x1be)] ?? 0x0),
      ),
        pe["drawWith"](_0x13f94f, {
          text: this[_0x2723c6(0x14c)],
          color: _0x555b78,
        }),
        _0x13f94f[_0x2723c6(0x234)]());
    }
  }
  ["_getLighterColor"](_0x4b6fcb) {
    return _0x4b6fcb["startsWith"]("#")
      ? _0x36925f(0x3db) +
          Number[_0x36925f(0x1ca)](
            _0x4b6fcb[_0x36925f(0x2d2)](0x1, 0x3),
            0x10,
          ) +
          ",\x20" +
          Number["parseInt"](_0x4b6fcb[_0x36925f(0x2d2)](0x3, 0x5), 0x10) +
          ",\x20" +
          Number[_0x36925f(0x1ca)](
            _0x4b6fcb[_0x36925f(0x2d2)](0x5, 0x7),
            0x10,
          ) +
          _0x36925f(0x236)
      : _0x4b6fcb[_0x36925f(0x3be)](_0x36925f(0x3a8))
        ? _0x4b6fcb[_0x36925f(0x16c)](/[\d.]+\)$/g, _0x36925f(0x2e5))
        : _0x4b6fcb[_0x36925f(0x3be)]("rgb")
          ? _0x4b6fcb[_0x36925f(0x16c)](_0x36925f(0x2df), _0x36925f(0x3a8))[
              _0x36925f(0x16c)
            ](")", ",\x200.2)")
          : _0x4b6fcb;
  }
};
let F = class extends t["RxDisposable"] {
  constructor(_0xf38cc5, _0x21eafb, _0x418584, _0xf61531) {
    (super(),
      (this[_0x14f6ba(0x17a)] = _0xf38cc5),
      (this[_0x14f6ba(0x3a4)] = _0x21eafb),
      (this["_collabCursorController"] = _0x418584),
      (this[_0x14f6ba(0x34f)] = _0xf61531),
      x(this, _0x14f6ba(0x298), new Set()),
      x(this, "_lastPointer", null),
      x(this, _0x14f6ba(0x32c), null),
      this[_0x14f6ba(0x2e6)]());
  }
  ["_init"]() {
    (this["_sheetSkeletonManagerService"][_0x65f602(0x407)]
      [_0x65f602(0x3df)](
        (0x0, i["takeUntil"])(this["dispose$"]),
        (0x0, i[_0x65f602(0x36e)])((_0x5083b2) => {
          const _0x17b3b0 = _0x65f602;
          if (_0x5083b2) {
            let _0xa8d430 = _0x5083b2["sheetId"];
            return (0x0, r[_0x17b3b0(0x223)])(
              this[_0x17b3b0(0x2b4)]["getCollabCursors$"](
                this["_context"][_0x17b3b0(0x1d6)],
              ),
              this["_themeService"][_0x17b3b0(0x177)],
            )["pipe"](
              (0x0, i["map"])(([_0x22adf9, _0x52bca0]) => {
                const _0x4b4649 = _0x17b3b0;
                let _0x1e6187 = new Map();
                return (
                  _0x22adf9[_0x4b4649(0x3e6)]((_0x1f3407, _0xb1ddf5) => {
                    const _0x39ebce = _0x4b4649;
                    if (_0x1f3407[_0x39ebce(0x2cb)] === _0xa8d430) {
                      let _0x6d2f76 = { ..._0x1f3407 };
                      ((_0x6d2f76[_0x39ebce(0x293)] = this["_themeService"][
                        "getColorFromTheme"
                      ](_0x1f3407["color"])),
                        _0x1e6187["set"](_0xb1ddf5, _0x6d2f76));
                    }
                  }),
                  { skeleton: _0x5083b2, cursors: _0x1e6187 }
                );
              }),
            );
          }
          return (0x0, r["of"])({ skeleton: null, cursors: new Map() });
        }),
      )
      [_0x65f602(0x32a)](({ skeleton: _0x433e62, cursors: _0x4b3f68 }) => {
        (this["_removeCollabCursors"](),
          _0x433e62 && this["_updateCollabCursors"](_0x433e62, _0x4b3f68));
      }),
      this[_0x65f602(0x3de)](
        this[_0x65f602(0x3a4)]["currentSkeleton$"]
          [_0x65f602(0x3df)]((0x0, i[_0x65f602(0x3d0)])(this["dispose$"]))
          [_0x65f602(0x32a)]((_0x165a09) => {
            const _0x5c6ce2 = _0x65f602;
            var _0x54d333;
            if (_0x165a09 == null) return;
            ((_0x54d333 = this[_0x5c6ce2(0x32c)]) == null ||
              _0x54d333[_0x5c6ce2(0x207)](),
              (this[_0x5c6ce2(0x32c)] = null));
            let { skeleton: _0x2e65ea } = _0x165a09,
              { scene: _0x1ef51f } = this[_0x5c6ce2(0x17a)];
            this[_0x5c6ce2(0x32c)] = _0x1ef51f[_0x5c6ce2(0x392)][
              "subscribeEvent"
            ](
              (0x0, t["debounce"])((_0xbb377c) => {
                const _0x395278 = _0x5c6ce2;
                var _0x284a63, _0x166616;
                let { offsetX: _0x46b737, offsetY: _0x99a15d } = _0xbb377c,
                  { x: _0x417561, y: _0x1f6c87 } = _0x1ef51f[_0x395278(0x253)](
                    p[_0x395278(0x187)]["FromArray"]([_0x46b737, _0x99a15d]),
                  ),
                  { scaleX: _0x14575f, scaleY: _0x710f03 } =
                    _0x1ef51f[_0x395278(0x136)](),
                  _0x5665c2 = _0x1ef51f[_0x395278(0x400)](
                    p[_0x395278(0x28f)][_0x395278(0x13f)],
                  ),
                  _0x21b1ce = _0x1ef51f[_0x395278(0x352)](
                    p[_0x395278(0x187)][_0x395278(0x156)]([
                      _0x417561,
                      _0x1f6c87,
                    ]),
                    _0x5665c2,
                  ),
                  _0x2596d2 = _0x2e65ea["getCellIndexByOffset"](
                    _0x46b737,
                    _0x99a15d,
                    _0x14575f,
                    _0x710f03,
                    _0x21b1ce,
                  );
                (((_0x284a63 = this[_0x395278(0x199)]) == null
                  ? void 0x0
                  : _0x284a63[_0x395278(0x290)]) !==
                  _0x2596d2[_0x395278(0x290)] ||
                  ((_0x166616 = this[_0x395278(0x199)]) == null
                    ? void 0x0
                    : _0x166616[_0x395278(0x2e7)]) !== _0x2596d2["row"]) &&
                  this[_0x395278(0x298)][_0x395278(0x3e6)]((_0x1a34be) => {
                    _0x1a34be["onMouseMove"](_0x2596d2);
                  });
              }, 0x64),
            );
          }),
      ),
      this[_0x65f602(0x3de)](
        (0x0, t[_0x65f602(0x1bd)])(() => {
          const _0x1904a7 = _0x65f602;
          var _0x2e7288;
          ((_0x2e7288 = this["_pointerMoveDisposable"]) == null ||
            _0x2e7288[_0x1904a7(0x207)](),
            (this[_0x1904a7(0x32c)] = null));
        }),
      ));
  }
  ["_updateCollabCursors"](_0x54bdaf, _0x30dd27) {
    let _0x44ab3e = this[_0x20cdfe(0x3a4)][_0x20cdfe(0x3f1)]();
    if (!_0x44ab3e) return;
    let _0x3d8a32 = this[_0x20cdfe(0x194)]();
    if (!_0x3d8a32) return;
    this[_0x20cdfe(0x298)][_0x20cdfe(0x3e6)]((_0x46fde4) => {
      const _0x1cadf2 = _0x20cdfe;
      _0x46fde4[_0x1cadf2(0x222)]();
    });
    let { scene: _0x2a9ae8 } = _0x3d8a32,
      _0x43bb3b = _e(Array[_0x20cdfe(0x32f)](_0x30dd27[_0x20cdfe(0x40d)]()))[
        _0x20cdfe(0x1dc)
      ]((_0x98bb11) => {
        const _0x7a6020 = _0x20cdfe;
        let {
            color: _0x1bdb8a,
            range: _0x4bfd01,
            name: _0x4ece00,
            selection: _0x459ad3,
            sheetID: _0x516184,
          } = _0x98bb11,
          {
            startColumn: _0xda2331,
            startRow: _0x58710f,
            endColumn: _0xc867fc,
            endRow: _0x22a648,
          } = _0x4bfd01,
          _0xdfa810 = (0x0, _["getCoordByCell"])(
            _0x58710f,
            _0xda2331,
            _0x2a9ae8,
            _0x44ab3e,
          ),
          _0x3f4781 = (0x0, _[_0x7a6020(0x220)])(
            _0x22a648,
            _0xc867fc,
            _0x2a9ae8,
            _0x44ab3e,
          ),
          { columnHeaderHeightAndMarginTop: _0x5d98f5 } = _0x44ab3e,
          { startX: _0x52527b, startY: _0x255de6 } = _0xdfa810,
          { endX: _0x5f3696, endY: _0x3f0c25 } = _0x3f4781,
          _0x919d11 = _0x5f3696 - _0x52527b,
          _0x27916a = _0x3f0c25 - _0x255de6;
        return new ge(_0x4ece00, {
          labelPosition:
            _0x255de6 - _0x5d98f5 >= 0x14 ? _0x7a6020(0x1b4) : _0x7a6020(0x248),
          sheetID: _0x516184,
          range: _0x4bfd01,
          color: _0x1bdb8a,
          name: _0x4ece00,
          selection: _0x459ad3,
          left: _0x52527b,
          top: _0x255de6,
          width: _0x919d11,
          height: _0x27916a,
          evented: !0x1,
          zIndex: 0x1389,
        });
      });
    (_0x2a9ae8[_0x20cdfe(0x363)](_0x43bb3b, 0x1),
      (this["_cursors"] = new Set(_0x43bb3b)));
  }
  ["_removeCollabCursors"]() {
    var _0x41f7f3;
    (_0x41f7f3 = this[_0x3cc13a(0x298)]) == null ||
      _0x41f7f3[_0x3cc13a(0x3e6)]((_0x30caf8) => _0x30caf8[_0x3cc13a(0x2ca)]());
  }
  ["_getSheetObject"]() {
    return (0x0, _[_0x43d806(0x37a)])(
      this[_0x43d806(0x17a)][_0x43d806(0x38c)],
      this["_context"],
    );
  }
};
F = C(
  [
    S(0x1, (0x0, t["Inject"])(_["SheetSkeletonManagerService"])),
    S(0x2, (0x0, t["Inject"])(M)),
    S(0x3, (0x0, t["Inject"])(t["ThemeService"])),
  ],
  F,
);
function _e(_0x129907) {
  let _0x214c5c = new Map();
  return (
    _0x129907["forEach"]((_0x5f3c1f) => {
      if (_0x214c5c[_0xa3a09d(0x3b5)](_0x5f3c1f["selection"])) {
        let _0x2f0995 = _0x214c5c[_0xa3a09d(0x330)](
          _0x5f3c1f[_0xa3a09d(0x3ff)],
        );
        _0x2f0995[_0xa3a09d(0x25b)] += ",\x20" + _0x5f3c1f[_0xa3a09d(0x25b)];
      } else _0x214c5c["set"](_0x5f3c1f[_0xa3a09d(0x3ff)], _0x5f3c1f);
    }),
    Array[_0x4d4ee4(0x32f)](_0x214c5c["values"]())
  );
}
function I(_0x48210d) {
  return typeof _0x48210d == _0x5058f1(0x14d) && !!_0x48210d;
}
function ve(_0x3c726c) {
  return (
    _0x3c726c[_0x50955a(0x2c1)] === l[_0x50955a(0x14e)][_0x50955a(0x3fa)] &&
    _0x50955a(0x1f7) in _0x3c726c &&
    I(_0x3c726c[_0x50955a(0x1f7)]) &&
    typeof _0x3c726c["data"]["memberID"] == _0x50955a(0x13d) &&
    typeof _0x3c726c[_0x50955a(0x1f7)]["selection"] == _0x50955a(0x13d)
  );
}
function ye(_0x4f1832) {
  return (
    _0x4f1832[_0x19ecd8(0x2c1)] === l[_0x19ecd8(0x14e)][_0x19ecd8(0x1fb)] &&
    "data" in _0x4f1832 &&
    I(_0x4f1832[_0x19ecd8(0x1f7)]) &&
    typeof _0x4f1832[_0x19ecd8(0x1f7)][_0x19ecd8(0x296)] == _0x19ecd8(0x13d)
  );
}
function be(_0x1c4e52, _0x6194a3) {
  let _0x4173b0;
  try {
    _0x4173b0 = JSON[_0x50ba25(0x361)](_0x1c4e52);
  } catch {
    return null;
  }
  if (
    !I(_0x4173b0) ||
    typeof _0x4173b0[_0x50ba25(0x3d3)] != _0x50ba25(0x13d) ||
    typeof _0x4173b0[_0x50ba25(0x1d6)] != _0x50ba25(0x13d) ||
    typeof _0x4173b0[_0x50ba25(0x338)] != _0x50ba25(0x13d)
  )
    return null;
  let _0x1226b6 =
    typeof _0x4173b0[_0x50ba25(0x3e7)] == _0x50ba25(0x18a)
      ? _0x4173b0[_0x50ba25(0x3e7)]
      : _0x6194a3;
  if (_0x1226b6 == null) return null;
  let _0x473975 =
    I(_0x4173b0[_0x50ba25(0x283)]) &&
    typeof _0x4173b0["pointer"]["x"] == _0x50ba25(0x18a) &&
    Number["isFinite"](_0x4173b0[_0x50ba25(0x283)]["x"]) &&
    typeof _0x4173b0["pointer"]["y"] == _0x50ba25(0x18a) &&
    Number[_0x50ba25(0x309)](_0x4173b0[_0x50ba25(0x283)]["y"])
      ? {
          x: _0x4173b0[_0x50ba25(0x283)]["x"],
          y: _0x4173b0[_0x50ba25(0x283)]["y"],
        }
      : null;
  return {
    kind: _0x4173b0[_0x50ba25(0x3d3)],
    unitType: _0x1226b6,
    unitId: _0x4173b0[_0x50ba25(0x1d6)],
    subUnitId: _0x4173b0[_0x50ba25(0x338)],
    selectedIds: Array[_0x50ba25(0x2f9)](_0x4173b0[_0x50ba25(0x409)])
      ? _0x4173b0[_0x50ba25(0x409)]["filter"](
          (_0x156051) => typeof _0x156051 == _0x50ba25(0x13d),
        )
      : [],
    focusedId:
      typeof _0x4173b0[_0x50ba25(0x1ec)] == _0x50ba25(0x13d)
        ? _0x4173b0["focusedId"]
        : null,
    pointer: _0x473975,
  };
}
function xe(_0x1d3be3, _0x3d3fbb, _0x22f25b) {
  return {
    kind: _0x3d3fbb,
    unitType: _0x1d3be3,
    unitId: _0x22f25b["unitId"],
    subUnitId: _0x22f25b["subUnitId"],
    selectedIds: Array[_0x58a5ac(0x32f)](_0x22f25b[_0x58a5ac(0x409)]),
    focusedId: _0x22f25b[_0x58a5ac(0x1ec)],
    pointer: _0x22f25b[_0x58a5ac(0x283)]
      ? { ..._0x22f25b[_0x58a5ac(0x283)] }
      : null,
  };
}
let L = class extends t["RxDisposable"] {
  constructor(
    _0x3f2544,
    _0x12df71,
    _0x518c5c,
    _0x1e85cf,
    _0x10578c,
    _0x26ef34,
  ) {
    (super(),
      (this[_0x5b1e33(0x1d6)] = _0x3f2544),
      (this["_session"] = _0x12df71),
      (this[_0x5b1e33(0x35e)] = _0x518c5c),
      (this[_0x5b1e33(0x256)] = _0x1e85cf),
      (this[_0x5b1e33(0x145)] = _0x10578c),
      (this["_commandService"] = _0x26ef34),
      x(this, _0x5b1e33(0x350), !0x1),
      x(this, _0x5b1e33(0x266), !0x1));
  }
  get ["unitType"]() {
    return this[_0x261e54(0x35e)][_0x261e54(0x3e7)];
  }
  ["dispose"]() {
    (this[_0x329daf(0x2c6)](), super["dispose"]());
  }
  ["init"]() {
    this[_0x14f17d(0x266)] ||
      ((this[_0x14f17d(0x266)] = !0x0),
      this[_0x14f17d(0x1ab)]["sessionStatus$"]
        [_0x14f17d(0x3df)]((0x0, r["takeUntil"])(this[_0x14f17d(0x305)]))
        [_0x14f17d(0x32a)]((_0x1b0040) => {
          const _0x3ba3c8 = _0x14f17d;
          if (_0x1b0040 === e[_0x3ba3c8(0x2fb)][_0x3ba3c8(0x175)]) {
            this[_0x3ba3c8(0x350)] = !0x0;
            let _0x1a86b7 = this[_0x3ba3c8(0x35e)][_0x3ba3c8(0x26e)](
              this[_0x3ba3c8(0x1d6)],
            );
            _0x1a86b7 && this[_0x3ba3c8(0x3e0)](_0x1a86b7);
            return;
          }
          ((this[_0x3ba3c8(0x350)] = !0x1), this[_0x3ba3c8(0x2c6)]());
        }),
      this[_0x14f17d(0x1ab)][_0x14f17d(0x405)]
        [_0x14f17d(0x3df)]((0x0, r[_0x14f17d(0x3d0)])(this["dispose$"]))
        ["subscribe"]((_0x249652) => {
          const _0x55a79a = _0x14f17d;
          ve(_0x249652)
            ? this[_0x55a79a(0x250)](_0x249652)
            : ye(_0x249652) &&
              this["_removeRemotePresence"](
                _0x249652[_0x55a79a(0x1f7)][_0x55a79a(0x296)],
              );
        }),
      this[_0x14f17d(0x35e)][_0x14f17d(0x1fe)]
        [_0x14f17d(0x3df)](
          (0x0, r["filter"])(
            (_0x2ccf5d) =>
              this[_0x14f17d(0x350)] &&
              _0x2ccf5d[_0x14f17d(0x1d6)] === this[_0x14f17d(0x1d6)],
          ),
          (0x0, r[_0x14f17d(0x2e1)])(
            (_0x269a53) =>
              (0x0, r[_0x14f17d(0x34e)])(_0x269a53["shareInterval"]),
            { leading: !0x0, trailing: !0x0 },
          ),
          (0x0, r[_0x14f17d(0x3d0)])(this[_0x14f17d(0x305)]),
        )
        [_0x14f17d(0x32a)]((_0x3e363b) => this[_0x14f17d(0x3e0)](_0x3e363b)));
  }
  ["_sendLocalPresence"](_0x392990) {
    let _0x21395c = this[_0x22b17b(0x1ab)][_0x22b17b(0x35b)]();
    if (!_0x21395c || !this[_0x22b17b(0x350)]) return;
    let _0xfc506f = {
      eventID: l[_0x22b17b(0x14e)][_0x22b17b(0x3fa)],
      data: {
        unitID: this[_0x22b17b(0x1d6)],
        memberID: _0x21395c,
        selection: JSON[_0x22b17b(0x3bf)](
          xe(
            this[_0x22b17b(0x3e7)],
            this[_0x22b17b(0x35e)][_0x22b17b(0x2f4)],
            _0x392990,
          ),
        ),
      },
    };
    this[_0x22b17b(0x1ab)]
      [_0x22b17b(0x157)](_0xfc506f, this[_0x22b17b(0x1d6)])
      ["catch"](() => void 0x0);
  }
  ["_handleCursorUpdate"](_0x4d6819) {
    let { memberID: _0x396a82, selection: _0x168199 } = _0x4d6819["data"];
    if (_0x396a82 === this["_session"]["getMemberID"]()) return;
    let _0x6a08c7 = be(_0x168199, this[_0x358669(0x3e7)]);
    if (
      !_0x6a08c7 ||
      _0x6a08c7[_0x358669(0x3d3)] !==
        this[_0x358669(0x35e)][_0x358669(0x2f4)] ||
      _0x6a08c7["unitType"] !== this["unitType"] ||
      _0x6a08c7[_0x358669(0x1d6)] !== this[_0x358669(0x1d6)]
    )
      return;
    let _0x588273 = this[_0x358669(0x145)][_0x358669(0x41f)](
        this[_0x358669(0x1d6)],
        _0x396a82,
      ),
      _0x29f858 = {
        unitId: _0x6a08c7["unitId"],
        subUnitId: _0x6a08c7[_0x358669(0x338)],
        selectedIds: _0x6a08c7[_0x358669(0x409)],
        focusedId: _0x6a08c7[_0x358669(0x1ec)],
        pointer: _0x6a08c7[_0x358669(0x283)],
        memberId: _0x396a82,
        color: this[_0x358669(0x256)][_0x358669(0x3a3)](_0x396a82),
        name:
          (_0x588273 == null ? void 0x0 : _0x588273[_0x358669(0x25b)]) ??
          _0x396a82,
      };
    this["_commandService"]
      [_0x358669(0x167)](E["id"], {
        unitType: this[_0x358669(0x3e7)],
        update: { type: "set", state: _0x29f858 },
      })
      ["catch"](() => void 0x0);
  }
  ["_removeRemotePresence"](_0x25a4ad) {
    this[_0x50ee1a(0x3fb)]
      [_0x50ee1a(0x167)](E["id"], {
        unitType: this[_0x50ee1a(0x3e7)],
        update: {
          type: "remove",
          unitId: this[_0x50ee1a(0x1d6)],
          memberId: _0x25a4ad,
        },
      })
      [_0x50ee1a(0x2b3)](() => void 0x0);
  }
  ["_clearRemotePresences"]() {
    this[_0x33b545(0x3fb)]
      ["executeCommand"](E["id"], {
        unitType: this[_0x33b545(0x3e7)],
        update: { type: _0x33b545(0x158), unitId: this[_0x33b545(0x1d6)] },
      })
      [_0x33b545(0x2b3)](() => void 0x0);
  }
};
L = C(
  [
    S(0x3, (0x0, t["Inject"])(O)),
    S(0x4, (0x0, t["Inject"])(e["MemberService"])),
    S(0x5, (0x0, t["Inject"])(t["ICommandService"])),
  ],
  L,
);
let R = class extends t["RxDisposable"] {
  constructor(_0x37fd17, _0x3e15d5, _0x579a3e, _0x29c378) {
    (super(),
      (this[_0x4cb096(0x1da)] = _0x37fd17),
      (this["_injector"] = _0x3e15d5),
      (this[_0x4cb096(0x1c1)] = _0x579a3e),
      (this["_adapterRegistry"] = _0x29c378),
      x(this, _0x4cb096(0x24e), !0x1),
      x(this, _0x4cb096(0x2f3), new Map()),
      x(this, _0x4cb096(0x31a), new Map()),
      x(this, _0x4cb096(0x1c8), new Map()),
      this[_0x4cb096(0x2e6)]());
  }
  ["dispose"]() {
    ((this[_0x2a68f4(0x24e)] = !0x0),
      this[_0x2a68f4(0x1c8)][_0x2a68f4(0x3e6)]((_0x26210a) =>
        _0x26210a["dispose"](),
      ),
      this[_0x2a68f4(0x1c8)][_0x2a68f4(0x158)](),
      this[_0x2a68f4(0x2f3)][_0x2a68f4(0x3e6)]((_0x5f3670) =>
        _0x5f3670[_0x2a68f4(0x2ca)](),
      ),
      this[_0x2a68f4(0x2f3)][_0x2a68f4(0x158)](),
      this[_0x2a68f4(0x31a)][_0x2a68f4(0x158)](),
      super["dispose"]());
  }
  ["_init"]() {
    this["_adapterRegistry"][_0x4a11c6(0x16f)]
      [_0x4a11c6(0x3df)]((0x0, r[_0x4a11c6(0x3d0)])(this[_0x4a11c6(0x305)]))
      ["subscribe"]((_0x4e2c46) => this[_0x4a11c6(0x17d)](_0x4e2c46));
  }
  ["_syncAdapters"](_0x1cd09d) {
    let _0x2a924b = new Set(
      _0x1cd09d[_0xab1fa(0x1dc)]((_0x4bad2d) => _0x4bad2d[_0xab1fa(0x3e7)]),
    );
    (this["_adapterDisposables"][_0xab1fa(0x3e6)]((_0x330369, _0x2bfe0b) => {
      const _0x3f2f55 = _0xab1fa;
      _0x2a924b["has"](_0x2bfe0b) ||
        (_0x330369[_0x3f2f55(0x2ca)](),
        this[_0x3f2f55(0x1c8)][_0x3f2f55(0x382)](_0x2bfe0b),
        this[_0x3f2f55(0x347)](_0x2bfe0b));
    }),
      _0x1cd09d["forEach"]((_0x13bfcb) => {
        const _0x3905fd = _0xab1fa;
        this[_0x3905fd(0x1c8)][_0x3905fd(0x3b5)](_0x13bfcb[_0x3905fd(0x3e7)]) ||
          this[_0x3905fd(0x2a9)](_0x13bfcb);
      }));
  }
  ["_bindAdapter"](_0x109e10) {
    let _0x149ea8 = new t[_0x5934ab(0x320)]();
    (this[_0x5934ab(0x1c8)][_0x5934ab(0x1f9)](
      _0x109e10[_0x5934ab(0x3e7)],
      _0x149ea8,
    ),
      _0x149ea8[_0x5934ab(0x1f3)](_0x109e10[_0x5934ab(0x13e)]()),
      this[_0x5934ab(0x1da)]
        ["getAllUnitsForType"](_0x109e10[_0x5934ab(0x3e7)])
        [_0x5934ab(0x3e6)]((_0xe35f8a) =>
          this[_0x5934ab(0x27e)](_0xe35f8a[_0x5934ab(0x24f)](), _0x109e10)[
            _0x5934ab(0x2b3)
          ](() => void 0x0),
        ));
    let _0x7c42a4 = this[_0x5934ab(0x1da)]
      [_0x5934ab(0x1c9)](_0x109e10[_0x5934ab(0x3e7)])
      [_0x5934ab(0x32a)](({ unit: _0x2dc037 }) =>
        this["_startEntity"](_0x2dc037[_0x5934ab(0x24f)](), _0x109e10)["catch"](
          () => void 0x0,
        ),
      );
    _0x149ea8[_0x5934ab(0x1f3)](
      (0x0, t[_0x5934ab(0x1bd)])(() => _0x7c42a4[_0x5934ab(0x207)]()),
    );
    let _0x495e9a = this["_univerInstanceService"]
      [_0x5934ab(0x20d)](_0x109e10[_0x5934ab(0x3e7)])
      ["subscribe"]((_0x3005db) =>
        this["_disposeEntity"](_0x3005db[_0x5934ab(0x24f)]()),
      );
    _0x149ea8[_0x5934ab(0x1f3)](
      (0x0, t[_0x5934ab(0x1bd)])(() => _0x495e9a[_0x5934ab(0x207)]()),
    );
  }
  async ["_startEntity"](_0x183f60, _0xdec727) {
    if (
      this[_0x4f9f31(0x2f3)]["has"](_0x183f60) ||
      this[_0x4f9f31(0x31a)][_0x4f9f31(0x3b5)](_0x183f60)
    )
      return;
    let _0x4c1343 = {};
    this["_pendingEntities"][_0x4f9f31(0x1f9)](_0x183f60, _0x4c1343);
    let _0x4e68cc = await this["_collabSessionService"]
      [_0x4f9f31(0x328)](_0x183f60)
      [_0x4f9f31(0x2b3)]((_0x31d146) => {
        const _0xe78551 = _0x4f9f31;
        throw (
          this["_pendingEntities"][_0xe78551(0x330)](_0x183f60) === _0x4c1343 &&
            this["_pendingEntities"][_0xe78551(0x382)](_0x183f60),
          _0x31d146
        );
      });
    if (
      this["_isDisposed"] ||
      this[_0x4f9f31(0x31a)]["get"](_0x183f60) !== _0x4c1343 ||
      this["_adapterRegistry"][_0x4f9f31(0x330)](
        _0xdec727[_0x4f9f31(0x3e7)],
      ) !== _0xdec727
    ) {
      this[_0x4f9f31(0x31a)][_0x4f9f31(0x330)](_0x183f60) === _0x4c1343 &&
        this[_0x4f9f31(0x31a)][_0x4f9f31(0x382)](_0x183f60);
      return;
    }
    let _0xaaef7e = this[_0x4f9f31(0x214)][_0x4f9f31(0x164)](
      L,
      _0x183f60,
      _0x4e68cc,
      _0xdec727,
    );
    (_0xaaef7e[_0x4f9f31(0x384)](),
      this[_0x4f9f31(0x31a)][_0x4f9f31(0x382)](_0x183f60),
      this[_0x4f9f31(0x2f3)]["set"](_0x183f60, _0xaaef7e));
  }
  ["_disposeEntity"](_0x343724) {
    this[_0x4025ef(0x31a)]["delete"](_0x343724);
    let _0x4fdae7 = this[_0x4025ef(0x2f3)]["get"](_0x343724);
    _0x4fdae7 &&
      (_0x4fdae7[_0x4025ef(0x2ca)](),
      this[_0x4025ef(0x2f3)][_0x4025ef(0x382)](_0x343724));
  }
  ["_disposeEntitiesForType"](_0x403f6d) {
    (this[_0x2fe195(0x1da)]
      [_0x2fe195(0x209)](_0x403f6d)
      [_0x2fe195(0x3e6)]((_0x66dddf) =>
        this[_0x2fe195(0x31a)][_0x2fe195(0x382)](_0x66dddf[_0x2fe195(0x24f)]()),
      ),
      Array[_0x2fe195(0x32f)](this[_0x2fe195(0x2f3)][_0x2fe195(0x162)]())[
        _0x2fe195(0x3e6)
      ](([_0xce116f, _0x51e973]) => {
        const _0xde5e2 = _0x2fe195;
        _0x51e973[_0xde5e2(0x3e7)] === _0x403f6d &&
          this["_disposeEntity"](_0xce116f);
      }));
  }
};
R = C(
  [
    S(0x0, t["IUniverInstanceService"]),
    S(0x1, (0x0, t["Inject"])(t["Injector"])),
    S(0x2, (0x0, t["Inject"])(e["CollaborationSessionService"])),
    S(0x3, (0x0, t["Inject"])(n["IUnitPresenceUIAdapterRegistry"])),
  ],
  R,
);
let z = class extends t["Disposable"] {
  constructor(
    _0x147d67,
    _0x45cd25,
    _0x1e7b44,
    _0x5375b9,
    _0x436158,
    _0x2b36bc,
  ) {
    (super(),
      (this["_beforeCloseService"] = _0x147d67),
      (this[_0x4f610e(0x399)] = _0x45cd25),
      (this["_collaborationUIEventService"] = _0x1e7b44),
      (this["_messageService"] = _0x5375b9),
      (this[_0x4f610e(0x1e6)] = _0x436158),
      (this[_0x4f610e(0x3d8)] = _0x2b36bc),
      this[_0x4f610e(0x38d)](),
      this[_0x4f610e(0x420)]());
  }
  ["_setupBeforeClosingHandler"]() {
    this[_0x2850de(0x3de)](
      this["_beforeCloseService"]["registerBeforeClose"](() => {
        const _0xb7af1c = _0x2850de;
        if (this[_0xb7af1c(0x399)][_0xb7af1c(0x231)][_0xb7af1c(0x3f5)])
          return this["_localeService"]["t"](_0xb7af1c(0x3c0));
      }),
    );
  }
  ["_initEvent"]() {
    this["disposeWithMe"](
      this[_0x241928(0x1e1)]["event$"][_0x241928(0x32a)]((_0x43dd67) => {
        const _0x3be4d8 = _0x241928;
        (_0x43dd67["id"] === e[_0x3be4d8(0x1e4)]["OTHER_CLIENT_EDITING"] &&
          this[_0x3be4d8(0x327)][_0x3be4d8(0x2de)]({
            type: a[_0x3be4d8(0x406)][_0x3be4d8(0x151)],
            content: this[_0x3be4d8(0x3d8)]["t"](_0x3be4d8(0x2d8)),
          }),
          _0x43dd67["id"] === e[_0x3be4d8(0x1e4)]["CLOSE_ROOM"] &&
            this[_0x3be4d8(0x327)][_0x3be4d8(0x2de)]({
              type: a[_0x3be4d8(0x406)]["Warning"],
              content: this[_0x3be4d8(0x3d8)]["t"](_0x3be4d8(0x25e)),
            }),
          _0x43dd67["id"] === e[_0x3be4d8(0x1e4)][_0x3be4d8(0x3cc)] &&
            this["_notificationService"][_0x3be4d8(0x2de)]({
              title: this["_localeService"]["t"](_0x3be4d8(0x3c7)),
              content: this[_0x3be4d8(0x3d8)]["t"](_0x3be4d8(0x323)),
              type: "error",
              duration: 0x0,
            }),
          _0x43dd67["id"] === e[_0x3be4d8(0x1e4)][_0x3be4d8(0x381)] &&
            this[_0x3be4d8(0x1e6)][_0x3be4d8(0x2de)]({
              title: this[_0x3be4d8(0x3d8)]["t"](_0x3be4d8(0x19a)),
              content: this[_0x3be4d8(0x3d8)]["t"](
                "collaboration-client-ui.conflict.content",
              ),
              type: _0x3be4d8(0x1b1),
              duration: 0x0,
            }),
          _0x43dd67["id"] === e[_0x3be4d8(0x1e4)]["JOIN_ROOM_FAILED"] &&
            this[_0x3be4d8(0x327)]["show"]({
              type: a[_0x3be4d8(0x406)][_0x3be4d8(0x151)],
              content: this[_0x3be4d8(0x3d8)]["t"](_0x43dd67["data"] || ""),
            }),
          _0x43dd67["id"] === e["CollaborationUIEventId"][_0x3be4d8(0x2c0)] &&
            this[_0x3be4d8(0x327)]["show"]({
              type: a["MessageType"]["Warning"],
              content: this[_0x3be4d8(0x3d8)]["t"](
                "collaboration-client-ui.session.will-retry",
              ),
            }),
          _0x43dd67["id"] === e[_0x3be4d8(0x1e4)]["SOCKET_FAILED"] &&
            this[_0x3be4d8(0x327)][_0x3be4d8(0x2de)]({
              type: a[_0x3be4d8(0x406)][_0x3be4d8(0x3d6)],
              content: this["_localeService"]["t"](_0x3be4d8(0x422)),
            }),
          _0x43dd67["id"] === e[_0x3be4d8(0x1e4)]["SUBMIT_CHANGESET_TIMEOUT"] &&
            this[_0x3be4d8(0x327)][_0x3be4d8(0x2de)]({
              type: a[_0x3be4d8(0x406)]["Error"],
              content: this["_localeService"]["t"](_0x3be4d8(0x17c)),
            }));
      }),
    );
  }
};
z = C(
  [
    S(0x0, n["IBeforeCloseService"]),
    S(0x1, e["ILocalCacheService"]),
    S(0x2, (0x0, t["Inject"])(e["CollaborationUIEventService"])),
    S(0x3, n["IMessageService"]),
    S(0x4, n["INotificationService"]),
    S(0x5, (0x0, t["Inject"])(t["LocaleService"])),
  ],
  z,
);
const B = (0x0, t["createIdentifier"])("uni.network.url-service");
let V = class extends t["RxDisposable"] {
  constructor(_0x471169, _0x7c5c50, _0x3c9d86, _0x4b9a52) {
    (super(),
      (this[_0x4318eb(0x31e)] = _0x471169),
      (this["_logService"] = _0x7c5c50),
      (this[_0x4318eb(0x3fb)] = _0x3c9d86),
      (this[_0x4318eb(0x370)] = _0x4b9a52),
      this[_0x4318eb(0x2e6)]()[_0x4318eb(0x2b3)]((_0x5bfae7) =>
        this["_logService"][_0x4318eb(0x1b1)](
          "[CollaborationDataLoaderController]",
          _0x5bfae7,
        ),
      ));
  }
  async ["_init"]() {
    let _0x16d796 = this[_0x2b535b(0x31e)][_0x2b535b(0x25f)](_0x2b535b(0x38c)),
      _0x37eeef = this[_0x2b535b(0x31e)][_0x2b535b(0x25f)](_0x2b535b(0x331)),
      _0x325b2a = this["_urlService"][_0x2b535b(0x25f)]("subunit");
    if (!_0x16d796 || !_0x37eeef) {
      this["_logService"][_0x2b535b(0x2bf)](_0x2b535b(0x2ac), _0x2b535b(0x197));
      return;
    }
    let _0x261378 = await this[_0x2b535b(0x370)][_0x2b535b(0x326)](
      _0x16d796,
      Number(_0x37eeef),
      _0x325b2a,
    );
    this[_0x2b535b(0x22f)] ||
      (_0x261378 &&
        _0x261378 instanceof t[_0x2b535b(0x281)] &&
        (await this["_setupSubUnitSync"](_0x261378)));
  }
  async ["_setupSubUnitSync"](_0x5139a7) {
    (await this[_0x18e6b0(0x40e)](_0x5139a7),
      !this[_0x18e6b0(0x22f)] &&
        (_0x5139a7[_0x18e6b0(0x379)]
          ["pipe"]((0x0, r[_0x18e6b0(0x3d0)])(this[_0x18e6b0(0x305)]))
          [_0x18e6b0(0x32a)]((_0x1436df) => {
            const _0x16ad9d = _0x18e6b0;
            _0x1436df && this[_0x16ad9d(0x2c3)](_0x1436df);
          }),
        this[_0x18e6b0(0x31e)][_0x18e6b0(0x3ba)]
          [_0x18e6b0(0x3df)]((0x0, r["takeUntil"])(this[_0x18e6b0(0x305)]))
          [_0x18e6b0(0x32a)](() => {
            const _0x428f16 = _0x18e6b0;
            this[_0x428f16(0x40e)](_0x5139a7)[_0x428f16(0x2b3)]((_0x4f97fd) =>
              this["_logService"][_0x428f16(0x1b1)](
                "[CollaborationDataLoaderController]",
                _0x4f97fd,
              ),
            );
          })));
  }
  ["_updateURLWithCurrentState"](_0x89c870, _0x2b6e9f = !0x1) {
    let _0x4c01b4 = this[_0x55309b(0x31e)][_0x55309b(0x25f)](_0x55309b(0x1c6));
    _0x89c870[_0x55309b(0x360)]() !== _0x4c01b4 &&
      this["_urlService"][_0x55309b(0x303)](
        _0x55309b(0x1c6),
        _0x89c870[_0x55309b(0x360)](),
        _0x2b6e9f,
      );
  }
  async ["_updateSubUnitFromURLParams"](_0x27510b) {
    var _0x49aae3;
    let _0x2f0dd7 = this[_0x421302(0x31e)][_0x421302(0x25f)](_0x421302(0x1c6));
    if (!_0x2f0dd7 || !_0x27510b[_0x421302(0x193)](_0x2f0dd7)) {
      let _0xbc57cb = _0x27510b["getUnhiddenWorksheets"]()[0x0],
        _0x57288a = _0x27510b["getSheetBySheetId"](_0xbc57cb);
      if (
        !_0x57288a ||
        (this[_0x421302(0x2c3)](_0x57288a, !0x0), this[_0x421302(0x22f)])
      )
        return;
      await this[_0x421302(0x3fb)]["executeCommand"](
        g[_0x421302(0x274)]["id"],
        { unitId: _0x27510b[_0x421302(0x24f)](), subUnitId: _0xbc57cb },
      );
      return;
    }
    ((_0x49aae3 = _0x27510b["getActiveSheet"]()) == null
      ? void 0x0
      : _0x49aae3[_0x421302(0x360)]()) !== _0x2f0dd7 &&
      (await this["_commandService"][_0x421302(0x167)](
        g[_0x421302(0x274)]["id"],
        { unitId: _0x27510b[_0x421302(0x24f)](), subUnitId: _0x2f0dd7 },
      ));
  }
};
V = C(
  [
    S(0x0, B),
    S(0x1, t["ILogService"]),
    S(0x2, t["ICommandService"]),
    S(0x3, (0x0, t["Inject"])(e["DataLoaderService"])),
  ],
  V,
);
let H = class {
  constructor(_0x1fa3b0, _0x59a47c) {
    ((this[_0x3c10ec(0x421)] = _0x1fa3b0),
      (this[_0x3c10ec(0x1df)] = _0x59a47c));
  }
  ["transformIMECache"](_0x59eb92) {
    (this[_0xd44697(0x288)](_0x59eb92),
      this["_transformPreviousActiveRange"](_0x59eb92));
  }
  ["transformRemoteChangeset"](_0x5a052a) {
    let { unitID: _0x3397cc } = _0x5a052a,
      { redoCache: _0x45c5ca } = this[_0x9d60d8(0x1df)]
        [_0x9d60d8(0x17f)](_0x3397cc)
        [_0x9d60d8(0x188)](f[_0x9d60d8(0x35c)])
        [_0x9d60d8(0x3a2)]();
    if (_0x45c5ca["length"] === 0x0) return _0x5a052a;
    let _0x53ed2a = t[_0x9d60d8(0x3b6)][_0x9d60d8(0x180)](
      _0x5a052a["mutations"][0x0],
    );
    for (
      let _0x19eac2 = 0x0;
      _0x19eac2 < _0x45c5ca[_0x9d60d8(0x172)];
      _0x19eac2++
    ) {
      let _0x2d0936 = {
          id: "doc.mutation.rich-text-editing",
          params: { ..._0x45c5ca[_0x19eac2] },
        },
        _0x32e3f2 = this[_0x9d60d8(0x421)][_0x9d60d8(0x269)](
          _0x53ed2a,
          _0x2d0936,
          !0x1,
        );
      if ((0x0, l["isTransformMutationFailure"])(_0x32e3f2))
        throw _0x32e3f2[_0x9d60d8(0x1b1)];
      _0x53ed2a = _0x32e3f2["m1Prime"];
    }
    return {
      ...t[_0x9d60d8(0x3b6)][_0x9d60d8(0x180)](_0x5a052a),
      mutations: [_0x53ed2a],
    };
  }
  ["_transformUndoRedoStack"](_0xc892bf) {
    let { unitID: _0x192440 } = _0xc892bf,
      _0x46c7c7 = this["_renderManagerService"]
        ["getRenderUnitById"](_0x192440)
        ["with"](f[_0x539ff8(0x35c)]),
      { undoCache: _0x5378c8, redoCache: _0x23a250 } =
        _0x46c7c7[_0x539ff8(0x3a2)]();
    if (_0x5378c8["length"] === 0x0 || _0x23a250[_0x539ff8(0x172)] === 0x0)
      return;
    let _0x3f02b7 = [],
      _0x6602b4 = [],
      _0x12563b = t[_0x539ff8(0x3b6)][_0x539ff8(0x180)](
        _0xc892bf[_0x539ff8(0x30b)][0x0],
      ),
      _0x4c8d7d = t[_0x539ff8(0x3b6)][_0x539ff8(0x180)](
        _0xc892bf[_0x539ff8(0x30b)][0x0],
      );
    for (
      let _0x193eb8 = _0x5378c8[_0x539ff8(0x172)] - 0x1;
      _0x193eb8 >= 0x0;
      _0x193eb8--
    ) {
      let _0x1e8ee3 = {
          id: _0x539ff8(0x271),
          params: { ..._0x5378c8[_0x193eb8] },
        },
        _0x340c1c = {
          id: "doc.mutation.rich-text-editing",
          params: { ..._0x23a250[_0x193eb8] },
        },
        _0x58d82e = this[_0x539ff8(0x421)][_0x539ff8(0x269)](
          _0x12563b,
          _0x1e8ee3,
          !0x1,
        ),
        _0x3fd586 = this["_transformService"][_0x539ff8(0x269)](
          _0x4c8d7d,
          _0x340c1c,
          !0x1,
        );
      if ((0x0, l["isTransformMutationFailure"])(_0x58d82e))
        throw _0x58d82e["error"];
      if ((0x0, l["isTransformMutationFailure"])(_0x3fd586))
        throw _0x3fd586[_0x539ff8(0x1b1)];
      (_0x3f02b7[_0x539ff8(0x19e)](_0x58d82e["m2Prime"]["params"]),
        _0x6602b4[_0x539ff8(0x19e)](_0x3fd586[_0x539ff8(0x270)]["params"]),
        (_0x12563b = _0x58d82e[_0x539ff8(0x36b)]),
        (_0x4c8d7d = _0x3fd586["m1Prime"]));
    }
    _0x46c7c7[_0x539ff8(0x3c3)]({ undoCache: _0x3f02b7, redoCache: _0x6602b4 });
  }
  ["_transformPreviousActiveRange"](_0x13b7ed) {
    let { unitID: _0x39b411 } = _0x13b7ed,
      _0x4cd4a9 = this[_0x5e39c1(0x1df)]
        ["getRenderUnitById"](_0x39b411)
        ["with"](f["DocIMEInputManagerService"]),
      _0x965930 = _0x4cd4a9["getActiveRange"]();
    if (_0x965930 == null) return;
    let _0x59a3f9 = [
        {
          id: _0x5e39c1(0x271),
          params: {
            unitId: _0x13b7ed["unitID"],
            actions: null,
            textRanges: [_0x965930],
          },
        },
      ],
      _0x170016 = this[_0x5e39c1(0x421)]["transformMutationsWithChangeset"](
        _0x13b7ed,
        _0x59a3f9,
      );
    if (!(0x0, l["isTransformMutationsWithChangesetSuccess"])(_0x170016))
      throw _0x170016[_0x5e39c1(0x1b1)];
    let _0x25ea45 =
      _0x170016[_0x5e39c1(0x270)][0x0][_0x5e39c1(0x351)]["textRanges"];
    Array["isArray"](_0x25ea45) &&
      _0x25ea45[_0x5e39c1(0x172)] &&
      _0x4cd4a9[_0x5e39c1(0x1d9)](_0x25ea45[0x0]);
  }
};
H = C([S(0x0, l["ITransformService"]), S(0x1, p["IRenderManagerService"])], H);
let U = class {
  constructor(_0x4bfdc4, _0x5b4641, _0x45a6f2) {
    ((this[_0x16c5de(0x214)] = _0x4bfdc4),
      (this[_0x16c5de(0x421)] = _0x5b4641),
      (this[_0x16c5de(0x2e9)] = _0x45a6f2));
  }
  ["transformStateCache"](_0x14fd02) {
    this[_0x150b49(0x208)](_0x14fd02);
  }
  ["transformRemoteChangeset"](_0x5e76a8) {
    let { unitID: _0x461d3f } = _0x5e76a8,
      { collaboration: _0xd531eb } =
        this[_0x259a26(0x2e9)][_0x259a26(0x225)](_0x461d3f);
    if (_0xd531eb[_0x259a26(0x172)] === 0x0) return _0x5e76a8;
    let _0x13dd87 = t[_0x259a26(0x3b6)][_0x259a26(0x180)](
      _0x5e76a8["mutations"][0x0],
    );
    for (
      let _0x1b2a63 = 0x0;
      _0x1b2a63 < _0xd531eb[_0x259a26(0x172)];
      _0x1b2a63++
    ) {
      let _0x262307 = {
          id: "doc.mutation.rich-text-editing",
          params: {
            unitId: _0xd531eb[_0x1b2a63][_0x259a26(0x1d6)],
            ..._0xd531eb[_0x1b2a63][_0x259a26(0x268)],
          },
        },
        _0x2a4d0d = this[_0x259a26(0x421)][_0x259a26(0x269)](
          _0x13dd87,
          _0x262307,
          !0x1,
        );
      if ((0x0, l[_0x259a26(0x14b)])(_0x2a4d0d))
        throw _0x2a4d0d[_0x259a26(0x1b1)];
      _0x13dd87 = _0x2a4d0d[_0x259a26(0x36b)];
    }
    return {
      ...t[_0x259a26(0x3b6)][_0x259a26(0x180)](_0x5e76a8),
      mutations: [_0x13dd87],
    };
  }
  ["_transformHistoryAndStateStack"](_0x22bb8d) {
    let { unitID: _0x2ed79e } = _0x22bb8d,
      { history: _0x3e5674, collaboration: _0x4fd5b1 } =
        this[_0x5bdc89(0x2e9)][_0x5bdc89(0x225)](_0x2ed79e);
    if (_0x3e5674["length"] === 0x0 && _0x4fd5b1[_0x5bdc89(0x172)] === 0x0)
      return;
    let _0x152218 = [],
      _0xa5e29e = [],
      _0x17b374 = t[_0x5bdc89(0x3b6)][_0x5bdc89(0x180)](
        _0x22bb8d[_0x5bdc89(0x30b)][0x0],
      ),
      _0x455828 = t[_0x5bdc89(0x3b6)][_0x5bdc89(0x180)](
        _0x22bb8d[_0x5bdc89(0x30b)][0x0],
      );
    for (
      let _0x40a559 = _0x3e5674[_0x5bdc89(0x172)] - 0x1;
      _0x40a559 >= 0x0;
      _0x40a559--
    ) {
      let _0x32b925 = {
          id: _0x5bdc89(0x271),
          params: {
            unitId: _0x3e5674[_0x40a559][_0x5bdc89(0x1d6)],
            ..._0x3e5674[_0x40a559][_0x5bdc89(0x1d5)],
          },
        },
        _0x50c375 = {
          id: _0x5bdc89(0x271),
          params: {
            unitId: _0x3e5674[_0x40a559][_0x5bdc89(0x1d6)],
            ..._0x3e5674[_0x40a559][_0x5bdc89(0x268)],
          },
        },
        _0x580403 = this[_0x5bdc89(0x421)][_0x5bdc89(0x269)](
          _0x17b374,
          _0x32b925,
          !0x1,
        ),
        _0x482eb7 = this[_0x5bdc89(0x421)]["transformMutation"](
          _0x455828,
          _0x50c375,
          !0x1,
        );
      if ((0x0, l[_0x5bdc89(0x14b)])(_0x580403))
        throw _0x580403[_0x5bdc89(0x1b1)];
      if ((0x0, l[_0x5bdc89(0x14b)])(_0x482eb7))
        throw _0x482eb7[_0x5bdc89(0x1b1)];
      (_0x152218[_0x5bdc89(0x19e)]({
        ..._0x3e5674[_0x40a559],
        undoState: _0x580403["m2Prime"][_0x5bdc89(0x351)],
        redoState: _0x482eb7[_0x5bdc89(0x270)][_0x5bdc89(0x351)],
      }),
        (_0x17b374 = _0x580403[_0x5bdc89(0x36b)]),
        (_0x455828 = _0x482eb7[_0x5bdc89(0x36b)]));
    }
    ((_0x17b374 = t[_0x5bdc89(0x3b6)][_0x5bdc89(0x180)](
      _0x22bb8d[_0x5bdc89(0x30b)][0x0],
    )),
      (_0x455828 = t[_0x5bdc89(0x3b6)][_0x5bdc89(0x180)](
        _0x22bb8d[_0x5bdc89(0x30b)][0x0],
      )));
    for (
      let _0x3a5a16 = _0x4fd5b1["length"] - 0x1;
      _0x3a5a16 >= 0x0;
      _0x3a5a16--
    ) {
      let _0x4b90ed = {
          id: "doc.mutation.rich-text-editing",
          params: {
            unitId: _0x4fd5b1[_0x3a5a16][_0x5bdc89(0x1d6)],
            ..._0x4fd5b1[_0x3a5a16][_0x5bdc89(0x1d5)],
          },
        },
        _0x193a12 = {
          id: _0x5bdc89(0x271),
          params: {
            unitId: _0x4fd5b1[_0x3a5a16]["unitId"],
            ..._0x4fd5b1[_0x3a5a16][_0x5bdc89(0x268)],
          },
        },
        _0x35968a = this["_transformService"][_0x5bdc89(0x269)](
          _0x17b374,
          _0x4b90ed,
          !0x1,
        ),
        _0x599090 = this["_transformService"]["transformMutation"](
          _0x455828,
          _0x193a12,
          !0x1,
        );
      if ((0x0, l[_0x5bdc89(0x14b)])(_0x35968a))
        throw _0x35968a[_0x5bdc89(0x1b1)];
      if ((0x0, l[_0x5bdc89(0x14b)])(_0x599090)) throw _0x599090["error"];
      (_0xa5e29e[_0x5bdc89(0x19e)]({
        ..._0x4fd5b1[_0x3a5a16],
        undoState: _0x35968a[_0x5bdc89(0x270)][_0x5bdc89(0x351)],
        redoState: _0x599090[_0x5bdc89(0x270)][_0x5bdc89(0x351)],
      }),
        (_0x17b374 = _0x35968a[_0x5bdc89(0x36b)]),
        (_0x455828 = _0x599090[_0x5bdc89(0x36b)]));
    }
    this[_0x5bdc89(0x2e9)][_0x5bdc89(0x39b)](_0x2ed79e, {
      history: _0x152218,
      collaboration: _0xa5e29e,
    });
  }
};
U = C(
  [
    S(0x0, (0x0, t["Inject"])(t["Injector"])),
    S(0x1, l["ITransformService"]),
    S(0x2, (0x0, t["Inject"])(d["DocStateChangeManagerService"])),
  ],
  U,
);
let W = class {
  constructor(_0x3d85d7, _0x596f55) {
    ((this[_0x412518(0x168)] = _0x3d85d7),
      (this[_0x412518(0x421)] = _0x596f55));
  }
  ["prepareTransformSelections"](_0x431fc7) {
    var _0x55e5c6;
    let _0x1e4e4a = this[_0x3e971b(0x168)][_0x3e971b(0x39d)]() ?? [],
      _0x1429fd = this[_0x3e971b(0x168)][_0x3e971b(0x33b)]();
    if (_0x1e4e4a["length"] === 0x0 || _0x1429fd == null) return null;
    let _0x3e491c = _0x431fc7[_0x3e971b(0x346)],
      _0x318f83 = [
        {
          id: _0x3e971b(0x271),
          params: { unitId: _0x3e491c, actions: null, textRanges: _0x1e4e4a },
        },
      ],
      _0x59058c = this["_transformService"]["transformMutationsWithChangeset"](
        _0x431fc7,
        _0x318f83,
      );
    if (!(0x0, l[_0x3e971b(0x2bd)])(_0x59058c))
      throw _0x59058c[_0x3e971b(0x1b1)];
    let _0x3bd898 =
        (_0x55e5c6 = _0x59058c[_0x3e971b(0x270)][0x0]) == null
          ? void 0x0
          : _0x55e5c6["params"],
      _0x5cd4b2 =
        _0x3bd898 &&
        typeof _0x3bd898 == _0x3e971b(0x14d) &&
        _0x3e971b(0x292) in _0x3bd898
          ? _0x3bd898[_0x3e971b(0x292)]
          : null;
    if (!we(_0x5cd4b2)) return null;
    let _0x2f4c42 = Se(
        _0x431fc7[_0x3e971b(0x30b)]["some"]((_0x5d2d87) =>
          G(_0x5d2d87[_0x3e971b(0x351)]),
        )
          ? _0x5cd4b2["filter"]((_0x5ad51c) => !("tableId" in _0x5ad51c))
          : _0x5cd4b2,
        {
          ..._0x1429fd,
          options: _0x1429fd[_0x3e971b(0x1d1)]
            ? { ..._0x1429fd[_0x3e971b(0x1d1)], wholeDocument: !0x1 }
            : void 0x0,
        },
      ),
      _0x5d8f39 = { unitId: _0x3e491c, subUnitId: _0x3e491c };
    this[_0x3e971b(0x168)][_0x3e971b(0x34d)](_0x2f4c42, _0x5d8f39);
    let _0x5d4525 = !0x0;
    return {
      commit: () => {
        _0x5d4525 = !0x1;
      },
      rollback: () => {
        const _0x1e0850 = _0x3e971b;
        _0x5d4525 &&
          ((_0x5d4525 = !0x1),
          this[_0x1e0850(0x168)][_0x1e0850(0x34d)](_0x1429fd, _0x5d8f39));
      },
    };
  }
};
W = C(
  [
    S(0x0, (0x0, t["Inject"])(d["DocSelectionManagerService"])),
    S(0x1, l["ITransformService"]),
  ],
  W,
);
function Se(_0x589f66, _0x2211b8) {
  let _0x31e403 = [],
    _0x4501e8 = [];
  for (let _0x5d27ca of _0x589f66)
    Ce(_0x5d27ca)
      ? _0x4501e8[_0x569e56(0x365)](_0x5d27ca)
      : _0x31e403[_0x569e56(0x365)](_0x5d27ca);
  return { ..._0x2211b8, textRanges: _0x31e403, rectRanges: _0x4501e8 };
}
function Ce(_0x320519) {
  return _0x26da26(0x3a1) in _0x320519;
}
function we(_0x1d27a7) {
  return (
    Array[_0x58173f(0x2f9)](_0x1d27a7) &&
    _0x1d27a7["every"](
      (_0x18107a) =>
        typeof _0x18107a == _0x58173f(0x14d) &&
        !!_0x18107a &&
        _0x58173f(0x243) in _0x18107a &&
        _0x58173f(0x23e) in _0x18107a,
    )
  );
}
function G(_0x30c298) {
  return _0x30c298 === _0x2da9c9(0x1e9)
    ? !0x0
    : Array[_0x2da9c9(0x2f9)](_0x30c298)
      ? _0x30c298["some"]((_0x1c2dc7) => G(_0x1c2dc7))
      : !_0x30c298 || typeof _0x30c298 != _0x2da9c9(0x14d)
        ? !0x1
        : Object[_0x2da9c9(0x40d)](_0x30c298)[_0x2da9c9(0x258)]((_0x2c7cbf) =>
            G(_0x2c7cbf),
          );
}
let K = class extends t["Disposable"] {
  constructor(
    _0x13dfa2,
    _0x4648f3,
    _0x47cd17,
    _0x3024c1,
    _0x5a4c0e,
    _0x22ec83,
    _0x5cae99,
  ) {
    (super(),
      (this[_0x3e350b(0x27f)] = _0x13dfa2),
      (this[_0x3e350b(0x414)] = _0x4648f3),
      (this["_docTransformStateCacheService"] = _0x47cd17),
      (this["_docTransformSelectionsService"] = _0x3024c1),
      (this[_0x3e350b(0x280)] = _0x5a4c0e),
      (this[_0x3e350b(0x327)] = _0x22ec83),
      (this[_0x3e350b(0x3d8)] = _0x5cae99),
      x(
        this,
        "_status$",
        new r[_0x3e350b(0x18e)](e[_0x3e350b(0x335)][_0x3e350b(0x1fc)]),
      ),
      this[_0x3e350b(0x2f0)]());
  }
  ["_initEntityListener"]() {
    this["disposeWithMe"](
      this[_0xaea9d0(0x27f)][_0xaea9d0(0x149)][_0xaea9d0(0x32a)](
        (_0x340efa) => {
          const _0x5c081d = _0xaea9d0;
          _0x340efa instanceof e["DocCollaborationEntity"] &&
            _0x340efa["addHandlerCallback"]({
              onTransformIME: (_0x359a95) =>
                this[_0x5c081d(0x414)][_0x5c081d(0x23a)](_0x359a95),
              onTransformState: (_0x459445) =>
                this[_0x5c081d(0x359)][_0x5c081d(0x1ae)](_0x459445),
              onPrepareTransformSelections: (_0x24c3e6) =>
                this[_0x5c081d(0x357)][_0x5c081d(0x29f)](_0x24c3e6),
              onSyncEditingCollabCursor: (_0x1ee2dd) =>
                this["_docSyncEditingCollabCursorService"][_0x5c081d(0x26a)](
                  _0x1ee2dd,
                ),
              onTransformRemoteChangesetByIMECache: (_0x2deac5) =>
                this[_0x5c081d(0x414)]["transformRemoteChangeset"](_0x2deac5),
              onTransformRemoteChangesetByStateCache: (_0x228817) =>
                this[_0x5c081d(0x359)]["transformRemoteChangeset"](_0x228817),
            });
        },
      ),
    );
  }
};
K = C(
  [
    S(0x0, (0x0, t["Inject"])(e["CollaborationController"])),
    S(0x1, (0x0, t["Inject"])(H)),
    S(0x2, (0x0, t["Inject"])(U)),
    S(0x3, (0x0, t["Inject"])(W)),
    S(0x4, (0x0, t["Inject"])(k)),
    S(0x5, n["IMessageService"]),
    S(0x6, (0x0, t["Inject"])(t["LocaleService"])),
  ],
  K,
);
let q = class extends t["Disposable"] {
  constructor(_0x2b990b, _0x337479, _0x645424, _0xbf3b15) {
    (super(),
      (this[_0x216b7b(0x214)] = _0x2b990b),
      (this[_0x216b7b(0x324)] = _0x337479),
      (this["_logService"] = _0x645424),
      (this["_collaborationSessionService"] = _0xbf3b15),
      x(this, _0x216b7b(0x1bb), void 0x0),
      this[_0x216b7b(0x2e6)]());
  }
  ["_init"]() {
    (this[_0x1feb49(0x39a)](),
      this[_0x1feb49(0x2bb)](),
      this["_monkeyPatchLogService"](),
      this["_initUserListener"]());
  }
  ["_initUserListener"]() {
    this["disposeWithMe"](
      this["_collaborationSessionService"][_0x5965d8(0x2e3)][_0x5965d8(0x32a)](
        (_0x518b19) => {
          const _0x3d9a8e = _0x5965d8;
          this[_0x3d9a8e(0x1bb)] =
            _0x518b19 == null ? void 0x0 : _0x518b19["memberID"];
        },
      ),
    );
  }
  ["_initWindowErrorListener"]() {
    let _0x33d2d0 = (_0x2413a0) => {
      var _0x54ac7d;
      this[_0x1df8d5(0x348)](
        "error",
        _0x1df8d5(0x1f0) +
          _0x2413a0[_0x1df8d5(0x21e)] +
          "\x20at\x20" +
          _0x2413a0["filename"] +
          ":" +
          _0x2413a0[_0x1df8d5(0x369)] +
          ":" +
          _0x2413a0[_0x1df8d5(0x196)] +
          "\x0a" +
          (((_0x54ac7d = _0x2413a0[_0x1df8d5(0x1b1)]) == null
            ? void 0x0
            : _0x54ac7d[_0x1df8d5(0x32d)]) || ""),
      );
    };
    (window[_0x41ab84(0x3fc)](_0x41ab84(0x1b1), _0x33d2d0),
      this["disposeWithMe"](() => {
        const _0x21eb10 = _0x41ab84;
        window[_0x21eb10(0x1dd)](_0x21eb10(0x1b1), _0x33d2d0);
      }));
  }
  ["_initUnhandledRejectionListener"]() {
    let _0x3afff7 = (_0x589655) => {
      this[_0x1af72c(0x348)](
        _0x1af72c(0x1b1),
        "[Unhandled\x20Rejection]:\x20" + _0x589655["reason"],
      );
    };
    (window["addEventListener"](_0x18e1cc(0x265), _0x3afff7),
      this[_0x18e1cc(0x3de)](() => {
        const _0x36d9bb = _0x18e1cc;
        window[_0x36d9bb(0x1dd)](_0x36d9bb(0x265), _0x3afff7);
      }));
  }
  ["_monkeyPatchLogService"]() {
    let _0x4240cd = this["_logService"][_0x28fe5b(0x1b1)][_0x28fe5b(0x3aa)](
      this["_logService"],
    );
    ((this[_0x28fe5b(0x154)][_0x28fe5b(0x1b1)] = (..._0x2da7e7) => {
      const _0x1ce2d6 = _0x28fe5b;
      let _0x1ec4c1 = _0x2da7e7[_0x1ce2d6(0x1dc)]((_0x32f1b6) =>
        _0x32f1b6 instanceof Error
          ? _0x32f1b6[_0x1ce2d6(0x21e)] + "\x0a" + _0x32f1b6[_0x1ce2d6(0x32d)]
          : String(_0x32f1b6),
      )[_0x1ce2d6(0x201)]("\x20");
      (this[_0x1ce2d6(0x348)]("error", _0x1ce2d6(0x41b) + _0x1ec4c1),
        _0x4240cd(..._0x2da7e7));
    }),
      this[_0x28fe5b(0x3de)](() => {
        const _0x26acf2 = _0x28fe5b;
        this[_0x26acf2(0x154)][_0x26acf2(0x1b1)] = _0x4240cd;
      }));
  }
  ["_uploadLog"](_0x54edb1, _0x2b0936) {
    try {
      let _0x434594 = {
        userId: this[_0x434640(0x1bb)],
        logLabel: _0x54edb1,
        content: _0x2b0936,
      };
      this[_0x434640(0x324)]
        [_0x434640(0x3b9)](_0x434640(0x147), { body: _0x434594 })
        [_0x434640(0x2b3)](() => {});
    } catch {}
  }
};
q = C(
  [
    S(0x0, (0x0, t["Inject"])(t["Injector"])),
    S(0x1, (0x0, t["Inject"])(m["HTTPService"])),
    S(0x2, t["ILogService"]),
    S(0x3, (0x0, t["Inject"])(e["CollaborationSessionService"])),
  ],
  q,
);
function Te({ state$: _0x4abf53 }) {
  let _0x147520 = (0x0, n[_0x151d92(0x291)])(_0x4abf53, null, !0x0);
  return _0x147520
    ? (0x0, c["jsxs"])(_0x151d92(0x3e1), {
        "data-u-comp": _0x151d92(0x424),
        role: _0x151d92(0x2a2),
        className: _0x151d92(0x1d0),
        children: [
          (0x0, c[_0x151d92(0x1cc)])(o["WarningIcon"], {
            className: _0x151d92(0x3eb),
          }),
          (0x0, c[_0x151d92(0x1cc)])(_0x151d92(0x2b5), {
            children: _0x147520[_0x151d92(0x374)],
          }),
          (0x0, c[_0x151d92(0x1cc)])(a[_0x151d92(0x1b6)], {
            size: "small",
            variant: _0x151d92(0x15e),
            onClick: () => window[_0x151d92(0x321)][_0x151d92(0x2e4)](),
            children: _0x147520[_0x151d92(0x15d)],
          }),
        ],
      })
    : null;
}
const Ee = "snapshot-loading-";
let J = class extends t["Disposable"] {
  constructor(
    _0x5ea912,
    _0x55d65a,
    _0x56a822,
    _0x3080ab,
    _0x133bca,
    _0x489316,
  ) {
    (super(),
      (this[_0x8a20a4(0x143)] = _0x5ea912),
      (this[_0x8a20a4(0x327)] = _0x55d65a),
      (this[_0x8a20a4(0x3d8)] = _0x56a822),
      (this[_0x8a20a4(0x214)] = _0x3080ab),
      (this[_0x8a20a4(0x31e)] = _0x489316),
      x(this, "_timeoutState$", new r[_0x8a20a4(0x18e)](null)),
      x(this, _0x8a20a4(0x27b), new Set()),
      x(this, _0x8a20a4(0x285), new Map()),
      x(this, _0x8a20a4(0x2a1), new Map()),
      x(this, "timeoutState$", this["_timeoutState$"][_0x8a20a4(0x3bd)]()));
    let _0x1251f8 = () =>
      (0x0, s[_0x8a20a4(0x340)])(Te, { state$: this["timeoutState$"] });
    (this[_0x8a20a4(0x3de)](
      _0x133bca["registerComponent"](n[_0x8a20a4(0x41d)]["GLOBAL"], () =>
        (0x0, n[_0x8a20a4(0x24a)])(_0x1251f8, this["_injector"]),
      ),
    ),
      this[_0x8a20a4(0x3de)](
        this["_snapshotLoadingService"][_0x8a20a4(0x378)][_0x8a20a4(0x32a)](
          (_0x512cb4) => {
            const _0x334813 = _0x8a20a4;
            ((this["_latestStates"] = _0x512cb4),
              _0x512cb4[_0x334813(0x3e6)]((_0x199751) =>
                this[_0x334813(0x2cd)](_0x199751),
              ));
          },
        ),
      ),
      this[_0x8a20a4(0x3de)](
        this[_0x8a20a4(0x31e)][_0x8a20a4(0x3ba)]["subscribe"](() => {
          const _0x1565bb = _0x8a20a4;
          this[_0x1565bb(0x2a1)][_0x1565bb(0x3e6)]((_0x443926) =>
            this[_0x1565bb(0x2cd)](_0x443926),
          );
        }),
      ));
  }
  ["dispose"]() {
    (this[_0x3de7eb(0x27b)][_0x3de7eb(0x3e6)]((_0x15ee77) =>
      this[_0x3de7eb(0x327)][_0x3de7eb(0x375)](_0x15ee77),
    ),
      this["_messageIds"][_0x3de7eb(0x158)](),
      this[_0x3de7eb(0x285)][_0x3de7eb(0x3e6)](({ timeoutId: _0x445a83 }) =>
        clearTimeout(_0x445a83),
      ),
      this["_blockProgressWatches"]["clear"](),
      this[_0x3de7eb(0x2ea)][_0x3de7eb(0x2c2)](),
      super[_0x3de7eb(0x2ca)]());
  }
  ["_updateMessage"](_0x3a2ef8) {
    let _0xd061e7 = "" + Ee + _0x3a2ef8[_0x5d669d(0x1d6)];
    if (
      _0x3a2ef8[_0x5d669d(0x39f)] === l["SnapshotLoadStage"][_0x5d669d(0x198)]
    ) {
      (this[_0x5d669d(0x3a7)](_0x3a2ef8[_0x5d669d(0x1d6)]),
        this[_0x5d669d(0x1c4)](_0x3a2ef8[_0x5d669d(0x1d6)]),
        this[_0x5d669d(0x327)][_0x5d669d(0x375)](_0xd061e7),
        this[_0x5d669d(0x27b)][_0x5d669d(0x382)](_0xd061e7));
      return;
    }
    if (!this[_0x5d669d(0x1ef)](_0x3a2ef8[_0x5d669d(0x1d6)])) {
      (this[_0x5d669d(0x3a7)](_0x3a2ef8[_0x5d669d(0x1d6)]),
        this[_0x5d669d(0x1c4)](_0x3a2ef8[_0x5d669d(0x1d6)]),
        this[_0x5d669d(0x327)]["remove"](_0xd061e7),
        this[_0x5d669d(0x27b)][_0x5d669d(0x382)](_0xd061e7));
      return;
    }
    if (_0x3a2ef8[_0x5d669d(0x39f)] === l[_0x5d669d(0x17e)][_0x5d669d(0x171)]) {
      (this["_clearBlockProgressWatch"](_0x3a2ef8[_0x5d669d(0x1d6)]),
        this["_clearTimeoutState"](_0x3a2ef8["unitId"]),
        this[_0x5d669d(0x327)][_0x5d669d(0x2de)]({
          id: _0xd061e7,
          type: a["MessageType"][_0x5d669d(0x3d6)],
          content: this[_0x5d669d(0x3d8)]["t"](
            "collaboration-client-ui.session.connection-failed",
          ),
        }),
        this[_0x5d669d(0x27b)][_0x5d669d(0x382)](_0xd061e7));
      return;
    }
    if (
      _0x3a2ef8[_0x5d669d(0x39f)] !== l[_0x5d669d(0x17e)][_0x5d669d(0x35a)] ||
      _0x3a2ef8["totalBlocks"] <= 0xa
    ) {
      (this[_0x5d669d(0x3a7)](_0x3a2ef8["unitId"]),
        this[_0x5d669d(0x327)][_0x5d669d(0x375)](_0xd061e7),
        this[_0x5d669d(0x27b)][_0x5d669d(0x382)](_0xd061e7));
      return;
    }
    this[_0x5d669d(0x252)](_0x3a2ef8) ||
      (this[_0x5d669d(0x327)]["show"]({
        id: _0xd061e7,
        type: a[_0x5d669d(0x406)][_0x5d669d(0x2a5)],
        duration: 0x1 / 0x0,
        content:
          this[_0x5d669d(0x3d8)]["t"](_0x5d669d(0x301)) +
          "\x20" +
          _0x3a2ef8["loadedBlocks"] +
          "/" +
          _0x3a2ef8[_0x5d669d(0x3f6)],
      }),
      this[_0x5d669d(0x27b)][_0x5d669d(0x1f3)](_0xd061e7));
  }
  ["_watchBlockProgress"](_0x1bca5d) {
    let _0x1b51a0 = this["_blockProgressWatches"][_0x4b80df(0x330)](
      _0x1bca5d[_0x4b80df(0x1d6)],
    );
    if (
      (_0x1b51a0 == null ? void 0x0 : _0x1b51a0[_0x4b80df(0x159)]) ===
      _0x1bca5d[_0x4b80df(0x159)]
    )
      return _0x1b51a0[_0x4b80df(0x1a7)];
    this[_0x4b80df(0x3a7)](_0x1bca5d["unitId"]);
    let _0x5f4b7a = setTimeout(() => {
      const _0x2e94b1 = _0x4b80df;
      let _0x5b5229 = this[_0x2e94b1(0x285)][_0x2e94b1(0x330)](
        _0x1bca5d["unitId"],
      );
      if (!_0x5b5229 || _0x5b5229[_0x2e94b1(0x316)] !== _0x5f4b7a) return;
      _0x5b5229[_0x2e94b1(0x1a7)] = !0x0;
      let _0x1399bc = "" + Ee + _0x1bca5d[_0x2e94b1(0x1d6)];
      (this["_messageService"][_0x2e94b1(0x375)](_0x1399bc),
        this[_0x2e94b1(0x27b)]["delete"](_0x1399bc),
        this[_0x2e94b1(0x2ea)][_0x2e94b1(0x2f8)]({
          unitId: _0x1bca5d["unitId"],
          content: this[_0x2e94b1(0x3d8)]["t"](
            "collaboration-client-ui.snapshotLoading.timeout",
            String(_0x1bca5d[_0x2e94b1(0x159)]),
            String(_0x1bca5d[_0x2e94b1(0x3f6)]),
          ),
          refreshLabel: this[_0x2e94b1(0x3d8)]["t"](_0x2e94b1(0x153)),
        }));
    }, 0xea60);
    return (
      this[_0x4b80df(0x285)][_0x4b80df(0x1f9)](_0x1bca5d[_0x4b80df(0x1d6)], {
        loadedBlocks: _0x1bca5d["loadedBlocks"],
        timedOut: !0x1,
        timeoutId: _0x5f4b7a,
      }),
      !0x1
    );
  }
  ["_clearBlockProgressWatch"](_0x3eff6a) {
    let _0x26ef63 = this[_0x621021(0x285)][_0x621021(0x330)](_0x3eff6a);
    _0x26ef63 &&
      (clearTimeout(_0x26ef63[_0x621021(0x316)]),
      this[_0x621021(0x285)][_0x621021(0x382)](_0x3eff6a),
      this[_0x621021(0x1c4)](_0x3eff6a));
  }
  ["_clearTimeoutState"](_0x175d8c) {
    var _0xd55a48;
    ((_0xd55a48 = this[_0x2f4f7c(0x2ea)][_0x2f4f7c(0x29b)]) == null
      ? void 0x0
      : _0xd55a48[_0x2f4f7c(0x1d6)]) === _0x175d8c &&
      this["_timeoutState$"][_0x2f4f7c(0x2f8)](null);
  }
  ["_isVisibleUnit"](_0x4e32db) {
    let _0x329416 = this["_urlService"][_0xaa0c4e(0x25f)]("unit");
    return !_0x329416 || _0x329416 === _0x4e32db;
  }
};
J = C(
  [
    S(0x0, (0x0, t["Inject"])(l["SnapshotLoadingService"])),
    S(0x1, n["IMessageService"]),
    S(0x2, (0x0, t["Inject"])(t["LocaleService"])),
    S(0x3, (0x0, t["Inject"])(t["Injector"])),
    S(0x4, n["IUIPartsService"]),
    S(0x5, B),
  ],
  J,
);
function De(_0x5cd2d1) {
  var _0x2c066d, _0x1a017a;
  let _0x192f0d =
      (_0x2c066d = _0x5cd2d1[_0x518d06(0x140)]) == null
        ? void 0x0
        : _0x2c066d["stage"],
    _0x551649 =
      ((_0x1a017a = _0x5cd2d1[_0x518d06(0x140)]) == null
        ? void 0x0
        : _0x1a017a["totalFormulasToCalculate"]) || 0x0;
  return (
    _0x192f0d === h[_0x518d06(0x33f)]["START_CALCULATION"] && _0x551649 > 0x0
  );
}
function Oe(_0x1c39a1) {
  return _0x1c39a1[_0x127c1b(0x2cc)] === h[_0x127c1b(0x1e2)][_0x127c1b(0x275)];
}
let Y = class extends t["Disposable"] {
  constructor(
    _0x53426a,
    _0x5797d8,
    _0x2194d2,
    _0x137e92,
    _0x2d44be,
    _0x59a816,
    _0x344ea2,
  ) {
    (super(),
      (this[_0x2921e0(0x327)] = _0x53426a),
      (this["_commandService"] = _0x5797d8),
      (this["_configService"] = _0x2194d2),
      (this[_0x2921e0(0x324)] = _0x137e92),
      (this[_0x2921e0(0x1da)] = _0x2d44be),
      (this[_0x2921e0(0x154)] = _0x59a816),
      (this["_localeService"] = _0x344ea2),
      x(this, _0x2921e0(0x3ed), null),
      x(this, _0x2921e0(0x28d), 0x0),
      x(this, _0x2921e0(0x2ec), 0x0),
      x(this, _0x2921e0(0x18b), []),
      x(this, _0x2921e0(0x3ec), 0x0),
      this[_0x2921e0(0x1d4)]());
  }
  ["_initCommandInterceptor"]() {
    (this[_0xee35f9(0x3de)](
      this[_0xee35f9(0x3fb)][_0xee35f9(0x1f5)]((_0x48038a, _0x3ec480) => {
        const _0x565d3b = _0xee35f9;
        if (_0x48038a["id"] !== h[_0x565d3b(0x1a4)]["id"]) return;
        let _0x26252e = _0x48038a[_0x565d3b(0x351)];
        if (
          this[_0x565d3b(0x41c)](_0x26252e[_0x565d3b(0x3bc)] ?? []) &&
          !this[_0x565d3b(0x246)]()
        )
          throw (
            this[_0x565d3b(0x3d4)](_0x48038a, _0x3ec480),
            this[_0x565d3b(0x221)](),
            new t[_0x565d3b(0x377)]()
          );
      }),
    ),
      this[_0xee35f9(0x3de)](
        this[_0xee35f9(0x3fb)][_0xee35f9(0x417)]((_0xfa1a7b, _0x569248) => {
          const _0xeb66e6 = _0xee35f9;
          if (_0xfa1a7b["id"] !== h[_0xeb66e6(0x2ba)]["id"]) return;
          let _0x2ebcc8 = _0xfa1a7b[_0xeb66e6(0x351)];
          if (De(_0x2ebcc8)) {
            let _0x3d6fcc = (0x0, t[_0xeb66e6(0x3d1)])();
            (this[_0xeb66e6(0x18b)]["push"](_0x3d6fcc),
              this["_startCalculationLimit"](_0x3d6fcc));
          } else {
            if (Oe(_0x2ebcc8) && this[_0xeb66e6(0x18b)]["length"] > 0x0) {
              let _0x2e8c6e = this["_taskIds"][_0xeb66e6(0x247)]();
              this[_0xeb66e6(0x395)](_0x2e8c6e);
            }
          }
        }),
      ));
  }
  ["dispose"]() {
    (super[_0x3119db(0x2ca)](),
      this["_clearPolling"](),
      (this[_0x3119db(0x18b)] = []),
      (this[_0x3119db(0x2ec)] = 0x0),
      (this[_0x3119db(0x28d)] = 0x0),
      (this["_lastResponseTimestamp"] = 0x0));
  }
  async ["_checkAndWaitForCalculationPermission"](_0x225b44, _0xc34b39) {
    for (let _0x3f634f = 0x0; _0x3f634f < 0x1e; _0x3f634f++)
      try {
        if (
          (await this["_getFormulaLimitStatus"](), this[_0x170dda(0x246)]())
        ) {
          (this[_0x170dda(0x34a)](_0x225b44, _0xc34b39),
            this[_0x170dda(0x327)][_0x170dda(0x2de)]({
              content: this["_localeService"]["t"](_0x170dda(0x376)),
              type: a[_0x170dda(0x406)]["Success"],
            }));
          return;
        }
        await new Promise((_0x494c2f) => {
          const _0x251772 = _0x170dda;
          this["_pollingInterval"] = window[_0x251772(0x329)](_0x494c2f, 0x3e8);
        });
      } catch (_0x551653) {
        this[_0x170dda(0x154)][_0x170dda(0x1b1)](_0x551653);
      }
    this["_messageService"][_0x170dda(0x2de)]({
      content: this[_0x170dda(0x3d8)]["t"](
        "collaboration-client-ui.formula.calculation.unable",
      ),
      type: a[_0x170dda(0x406)]["Error"],
    });
  }
  ["_applyCommand"](_0x15c2a8, _0x514d2e) {
    try {
      this[_0xcc500b(0x3fb)]["executeCommand"](
        _0x15c2a8["id"],
        _0x15c2a8[_0xcc500b(0x351)],
        _0x514d2e,
      );
    } catch (_0x6f7dfe) {
      this["_logService"]["error"](_0x6f7dfe);
    }
  }
  ["_setFormulaLimitStatus"](_0x5882d0, _0x57ce79) {
    _0x57ce79 < this[_0x519433(0x3ec)] ||
      ((this[_0x519433(0x3ec)] = _0x57ce79),
      (this[_0x519433(0x28d)] = Number["parseInt"](
        _0x5882d0[_0x519433(0x2f7)],
      )),
      (this[_0x519433(0x2ec)] = Number["parseInt"](
        _0x5882d0[_0x519433(0x332)],
      )));
  }
  async ["_startCalculationLimit"](_0x1b04a8) {
    let _0x331da9 = Date[_0x4787d7(0x1b5)]();
    try {
      var _0x118366, _0x3c7f19;
      let _0x3116d5 =
          ((_0x118366 = this[_0x4787d7(0x24b)][_0x4787d7(0x30d)](
            e["COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY"],
          )) == null
            ? void 0x0
            : _0x118366[_0x4787d7(0x3af)]) || _0x4787d7(0x1b8),
        _0x27651e = (
          await this["_httpService"][_0x4787d7(0x3b9)](_0x3116d5, {
            body: JSON[_0x4787d7(0x3bf)]({ taskId: _0x1b04a8 }),
          })
        )["body"];
      if (
        ((_0x3c7f19 = _0x27651e["error"]) == null
          ? void 0x0
          : _0x3c7f19[_0x4787d7(0x186)]) !== v[_0x4787d7(0x2d0)]["OK"]
      )
        return;
      this["_setFormulaLimitStatus"](_0x27651e[_0x4787d7(0x31f)], _0x331da9);
    } catch (_0x52a95e) {
      this[_0x4787d7(0x154)][_0x4787d7(0x1b1)](_0x52a95e);
    }
  }
  async ["_getFormulaLimitStatus"](_0x56a04b) {
    let _0x2ea2ff = Date[_0x595f36(0x1b5)]();
    try {
      var _0x19871b, _0x29b23b;
      let _0x580a78 =
          ((_0x19871b = this["_configService"][_0x595f36(0x30d)](
            e["COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY"],
          )) == null
            ? void 0x0
            : _0x19871b[_0x595f36(0x388)]) || _0x595f36(0x19c),
        _0x42ef22 = _0x56a04b
          ? _0x580a78 + _0x595f36(0x18c) + encodeURIComponent(_0x56a04b)
          : _0x580a78,
        _0x4c7762 = (await this[_0x595f36(0x324)][_0x595f36(0x330)](_0x42ef22))[
          _0x595f36(0x202)
        ];
      if (
        ((_0x29b23b = _0x4c7762["error"]) == null
          ? void 0x0
          : _0x29b23b["code"]) !== v[_0x595f36(0x2d0)]["OK"]
      )
        return;
      this[_0x595f36(0x14f)](_0x4c7762[_0x595f36(0x31f)], _0x2ea2ff);
    } catch (_0x479b40) {
      this[_0x595f36(0x154)]["error"](_0x479b40);
    }
  }
  async ["_releaseCalculationLimit"](_0x59ad12) {
    let _0x2e0b06 = Date[_0x20a16b(0x1b5)]();
    try {
      var _0x517067, _0x586e54;
      let _0x19d2bd =
          ((_0x517067 = this[_0x20a16b(0x24b)][_0x20a16b(0x30d)](
            e["COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY"],
          )) == null
            ? void 0x0
            : _0x517067["releaseFormulaLimitUrl"]) || _0x20a16b(0x237),
        _0x52acfd = (
          await this["_httpService"][_0x20a16b(0x3b9)](_0x19d2bd, {
            body: JSON[_0x20a16b(0x3bf)]({ taskId: _0x59ad12 }),
          })
        )["body"];
      if (
        ((_0x586e54 = _0x52acfd[_0x20a16b(0x1b1)]) == null
          ? void 0x0
          : _0x586e54["code"]) !== v[_0x20a16b(0x2d0)]["OK"]
      )
        return;
      this[_0x20a16b(0x14f)](_0x52acfd[_0x20a16b(0x31f)], _0x2e0b06);
    } catch (_0x84e7ad) {
      this[_0x20a16b(0x154)]["error"](_0x84e7ad);
    }
  }
  ["_checkCalculationAvailable"]() {
    return (
      this[_0x1c0f6c(0x28d)] === 0x0 ||
      this[_0x1c0f6c(0x28d)] - this[_0x1c0f6c(0x2ec)] > 0x0
    );
  }
  ["_clearPolling"]() {
    this[_0x319d4e(0x3ed)] &&= (clearTimeout(this[_0x319d4e(0x3ed)]), null);
  }
  ["_showGuardMessage"]() {
    this[_0x44724f(0x327)][_0x44724f(0x2de)]({
      content: this[_0x44724f(0x3d8)]["t"](_0x44724f(0x1a9)),
      type: a[_0x44724f(0x406)]["Loading"],
    });
  }
  ["_hasFormulaInDirtyRanges"](_0x385b63) {
    for (let _0x4bf2a0 of _0x385b63) {
      let {
          unitId: _0x362095,
          sheetId: _0x58b8e7,
          range: _0x3dbb8d,
        } = _0x4bf2a0,
        _0x28dffc = this["_univerInstanceService"][_0x2a9fe1(0x2fc)](
          _0x362095,
          t[_0x2a9fe1(0x16b)][_0x2a9fe1(0x37d)],
        );
      if (!_0x28dffc) continue;
      let _0x20eeb4 = _0x28dffc[_0x2a9fe1(0x193)](_0x58b8e7);
      if (!_0x20eeb4) continue;
      let _0x505e1f = _0x20eeb4[_0x2a9fe1(0x2d6)]();
      for (
        let _0x46ce09 = _0x3dbb8d[_0x2a9fe1(0x3d7)];
        _0x46ce09 <= _0x3dbb8d[_0x2a9fe1(0x38f)];
        _0x46ce09++
      )
        for (
          let _0x5c3e1f = _0x3dbb8d[_0x2a9fe1(0x3cf)];
          _0x5c3e1f <= _0x3dbb8d["endColumn"];
          _0x5c3e1f++
        ) {
          let _0xb45668 = _0x505e1f[_0x2a9fe1(0x26d)](_0x46ce09, _0x5c3e1f);
          if (
            _0xb45668 &&
            ((0x0, t[_0x2a9fe1(0x3b0)])(_0xb45668["f"]) ||
              (0x0, t[_0x2a9fe1(0x1c0)])(_0xb45668["si"]))
          )
            return !0x0;
        }
    }
    return !0x1;
  }
};
Y = C(
  [
    S(0x0, (0x0, t["Inject"])(n["IMessageService"])),
    S(0x1, t["ICommandService"]),
    S(0x2, t["IConfigService"]),
    S(0x3, (0x0, t["Inject"])(m["HTTPService"])),
    S(0x4, t["IUniverInstanceService"]),
    S(0x5, t["ILogService"]),
    S(0x6, (0x0, t["Inject"])(t["LocaleService"])),
  ],
  Y,
);
let X = class extends t["Disposable"] {
  constructor(_0x1fb046, _0x532b70, _0x1ea63a) {
    (super(),
      (this[_0x1bc89b(0x24b)] = _0x1fb046),
      (this[_0x1bc89b(0x29d)] = _0x532b70),
      (this[_0x1bc89b(0x31d)] = _0x1ea63a),
      x(this, _0x1bc89b(0x2ee), new Map()),
      x(this, _0x1bc89b(0x2f2), new Map()),
      x(this, _0x1bc89b(0x2dc), !0x1));
  }
  ["disableLocalCache"]() {
    this["_disabled"] = !0x0;
  }
  ["enableLocalCache"]() {
    this[_0x45dc52(0x2dc)] = !0x1;
  }
  get ["saveTaskMap"]() {
    return this[_0x5c72c5(0x2f2)];
  }
  ["dispose"]() {
    this[_0x594715(0x1af)]()[_0x594715(0x315)](() => super[_0x594715(0x2ca)]());
  }
  async ["loadOfflineData"](_0x428f74) {
    return this[_0x97c37f(0x2dc)]
      ? null
      : this[_0x97c37f(0x29d)][_0x97c37f(0x368)](
          (0x0, e[_0x97c37f(0x33e)])(_0x428f74),
        );
  }
  async ["saveOfflineData"](_0x3b2819, _0x182de5) {
    return !!this[_0x204b58(0x29d)][_0x204b58(0x2b8)](
      (0x0, e[_0x204b58(0x33e)])(_0x3b2819),
      _0x182de5,
    );
  }
  async ["backupOfflineData"](_0x52d77f, _0x4da4be) {
    let _0x5cee5b =
      this["_cachedData"][_0x58d4b7(0x330)](_0x52d77f) ??
      (await this["_localStorageService"][_0x58d4b7(0x368)](
        (0x0, e[_0x58d4b7(0x33e)])(_0x52d77f),
      ));
    if (!_0x5cee5b) return;
    let _0x37dafe = Date["now"](),
      _0x369917 = new Date(_0x37dafe)[_0x58d4b7(0x228)]();
    await this[_0x58d4b7(0x29d)]["setItem"](
      (0x0, e[_0x58d4b7(0x33e)])(_0x52d77f) + ":backup:" + _0x37dafe,
      { reason: _0x4da4be, createdAt: _0x369917, data: _0x5cee5b },
    );
  }
  ["updateOfflineData"](_0x184cd5, _0x227139, _0x254f32, _0x1ae7cd) {
    let _0x176eaf = this["_revisionService"]["getCurrentRevOfUnit"](_0x184cd5);
    (this["_cachedData"][_0x39cecf(0x1f9)](_0x184cd5, {
      unitID: _0x184cd5,
      type: _0x227139,
      awaitingChangeset: _0x254f32,
      mutations: _0x1ae7cd,
      rev: _0x176eaf,
    }),
      this[_0x39cecf(0x2f2)][_0x39cecf(0x3b5)](_0x184cd5) ||
        this["_scheduleSaving"](_0x184cd5));
  }
  ["_scheduleSaving"](_0x20ffa0) {
    let _0x173488 = this["_getSaveTimeout"]();
    _0x173488 === 0x0
      ? this["_saveCache"](_0x20ffa0)
      : this[_0x3d5503(0x2f2)][_0x3d5503(0x1f9)](
          _0x20ffa0,
          window["setTimeout"](
            () => this[_0x3d5503(0x37c)](_0x20ffa0),
            _0x173488,
          ),
        );
  }
  ["_getSaveTimeout"]() {
    return (
      this["_configService"][_0x9e0371(0x30d)](e["LOCAL_CACHE_INTERVAL_KEY"]) ??
      e[_0x9e0371(0x21b)]
    );
  }
  ["_saveCache"](_0x4b0f00) {
    let _0x186fb6 = this["_saveTaskMap"][_0x3031fa(0x330)](_0x4b0f00);
    return (
      _0x186fb6 !== void 0x0 && window[_0x3031fa(0x3d9)](_0x186fb6),
      this[_0x3031fa(0x29d)]
        ["setItem"](
          (0x0, e["getLocalCacheKey"])(_0x4b0f00),
          this[_0x3031fa(0x2ee)][_0x3031fa(0x330)](_0x4b0f00),
        )
        ["then"](() => this[_0x3031fa(0x2f2)][_0x3031fa(0x382)](_0x4b0f00))
    );
  }
  async ["exhaustSavingTask"]() {
    let _0x5ebaf9 = [];
    (this[_0x827081(0x2f2)][_0x827081(0x3e6)]((_0x3d33c5, _0x2fb71c) => {
      const _0x4f0d11 = _0x827081;
      (window[_0x4f0d11(0x3d9)](_0x3d33c5),
        _0x5ebaf9["push"](
          this["_saveCache"](_0x2fb71c)["then"](() => {
            const _0x409bcb = _0x4f0d11;
            this["_saveTaskMap"][_0x409bcb(0x382)](_0x2fb71c);
          }),
        ));
    }),
      await Promise[_0x827081(0x1a1)](_0x5ebaf9));
  }
};
X = C(
  [
    S(0x0, t["IConfigService"]),
    S(0x1, t["ILocalStorageService"]),
    S(0x2, (0x0, t["Inject"])(l["RevisionService"])),
  ],
  X,
);
var ke = class extends t["RxDisposable"] {
  constructor() {
    (super(),
      x(this, _0x54107d(0x3ba), void 0x0),
      (this[_0x54107d(0x3ba)] = (0x0, r[_0x54107d(0x41a)])(
        window,
        _0x54107d(0x2a8),
      )["pipe"](
        (0x0, r[_0x54107d(0x3d0)])(this["dispose$"]),
        (0x0, r["shareReplay"])({ bufferSize: 0x1, refCount: !0x0 }),
        (0x0, r[_0x54107d(0x212)])(void 0x0),
      )));
  }
  ["setParam"](_0x25bbdf, _0x4a8042, _0x225d23 = !0x1) {
    let _0x5e16aa = new URL(window[_0x101afd(0x321)][_0x101afd(0x1d2)]);
    (_0x5e16aa[_0x101afd(0x20a)][_0x101afd(0x1f9)](_0x25bbdf, _0x4a8042),
      _0x225d23
        ? window[_0x101afd(0x317)][_0x101afd(0x1fd)](
            "",
            "",
            _0x5e16aa[_0x101afd(0x2a4)](),
          )
        : window[_0x101afd(0x317)][_0x101afd(0x1aa)](
            "",
            "",
            _0x5e16aa[_0x101afd(0x2a4)](),
          ));
  }
  ["removeParam"](_0x508fde, _0x5e820a = !0x1) {
    let _0x57ed2e = new URL(window[_0x52745c(0x321)][_0x52745c(0x1d2)]);
    (_0x57ed2e[_0x52745c(0x20a)][_0x52745c(0x382)](_0x508fde),
      _0x5e820a
        ? window["history"]["replaceState"](
            "",
            "",
            _0x57ed2e[_0x52745c(0x2a4)](),
          )
        : window["history"][_0x52745c(0x1aa)]("", "", _0x57ed2e["toString"]()));
  }
  ["getParam"](_0x4432da) {
    return (
      new URL(window[_0x2d26a8(0x321)][_0x2d26a8(0x1d2)])[_0x2d26a8(0x20a)][
        _0x2d26a8(0x330)
      ](_0x4432da) ?? void 0x0
    );
  }
};
let Z = class extends t["Plugin"] {
  constructor(_0x33187a = oe, _0x19e13d, _0xcf198a, _0x54b373, _0x5c1150) {
    (super(),
      (this[_0x2d2a08(0x161)] = _0x33187a),
      (this[_0x2d2a08(0x1df)] = _0x19e13d),
      (this["_injector"] = _0xcf198a),
      (this[_0x2d2a08(0x24b)] = _0x54b373),
      (this["_commandService"] = _0x5c1150));
    let { ..._0x1bfc30 } = (0x0, t[_0x2d2a08(0x176)])(
      {},
      oe,
      this[_0x2d2a08(0x161)],
    );
    this[_0x2d2a08(0x24b)][_0x2d2a08(0x3ef)](
      "collaboration-client-ui.config",
      _0x1bfc30,
    );
  }
  ["onStarting"]() {
    (this[_0x496ea1(0x21c)](),
      this[_0x496ea1(0x3de)](this[_0x496ea1(0x3fb)][_0x496ea1(0x3f3)](E)),
      this["_initDependencies"]());
  }
  ["onRendered"]() {
    this["_registerRenderDependencies"]();
  }
  ["_registerDependencies"]() {
    var _0x17a80f;
    let _0x4706e8 = [
      [O],
      [Y],
      [B, { useClass: ke }],
      [m[_0x2c5981(0x30e)], { useClass: m["WebSocketService"] }],
      [e[_0x2c5981(0x35d)], { useClass: X }],
      [w],
      [z],
      [M],
      [R],
      [V],
      [J],
    ];
    (this["_config"][_0x2c5981(0x1ee)] !== !0x1 &&
      _0x4706e8[_0x2c5981(0x365)]([W], [H], [U], [k], [K], [D]),
      this[_0x2c5981(0x161)]["enableFrontendLog"] &&
        _0x4706e8[_0x2c5981(0x365)]([q]),
      (0x0, t[_0x2c5981(0x2dd)])(
        this[_0x2c5981(0x214)],
        (0x0, t["mergeOverrideWithDependencies"])(
          _0x4706e8,
          (_0x17a80f = this["_config"]) == null
            ? void 0x0
            : _0x17a80f["override"],
        ),
      ));
  }
  ["_registerRenderDependencies"]() {
    (this[_0xe3aa1d(0x161)][_0xe3aa1d(0x1ee)] !== !0x1 &&
      this[_0xe3aa1d(0x3de)](
        this[_0xe3aa1d(0x1df)][_0xe3aa1d(0x13c)](
          t[_0xe3aa1d(0x16b)]["UNIVER_DOC"],
          [P],
        ),
      ),
      this["disposeWithMe"](
        this[_0xe3aa1d(0x1df)]["registerRenderModule"](
          t[_0xe3aa1d(0x16b)][_0xe3aa1d(0x37d)],
          [F],
        ),
      ));
  }
  ["_initDependencies"]() {
    ((0x0, t["touchDependencies"])(this[_0x4c1ac3(0x214)], [
      [M],
      [R],
      [w],
      [z],
      [V],
      [Y],
      [J],
    ]),
      this[_0x4c1ac3(0x161)]["enableDocumentCollaborationUI"] !== !0x1 &&
        (0x0, t["touchDependencies"])(this[_0x4c1ac3(0x214)], [[K], [D]]),
      this[_0x4c1ac3(0x161)][_0x4c1ac3(0x372)] &&
        (0x0, t[_0x4c1ac3(0x1e0)])(this["_injector"], [[q]]));
  }
};
(x(Z, "pluginName", "UNIVER_COLLABORATION_CLIENT_WEB_PLUGIN"),
  x(Z, "packageName", ie),
  x(Z, "version", ae),
  (Z = C(
    [
      (0x0, t["DependentOn"])(
        u["UniverLicensePlugin"],
        d["UniverDocsPlugin"],
        p["UniverRenderEnginePlugin"],
        m["UniverNetworkPlugin"],
        l["UniverCollaborationPlugin"],
        f["UniverDocsUIPlugin"],
        e["UniverCollaborationClientPlugin"],
      ),
      S(0x1, p["IRenderManagerService"]),
      S(0x2, (0x0, t["Inject"])(t["Injector"])),
      S(0x3, t["IConfigService"]),
      S(0x4, t["ICommandService"]),
    ],
    Z,
  )));
let Q = class extends e["CollaborationSocketService"] {
  constructor(_0x4e2605, _0x3736cc, _0x15bebc, _0x43a921, _0x179abf) {
    super(_0x4e2605, _0x3736cc, _0x15bebc, _0x43a921, _0x179abf);
  }
  async ["createSocket"](_0x5e22a0) {
    let _0x4665a6 = await this[_0x5ed07d(0x300)](),
      _0x2b8fdf = this["_createSocketURL"](_0x5e22a0, _0x4665a6);
    return this[_0x5ed07d(0x286)](_0x2b8fdf);
  }
  ["_createSocketURL"](_0x39642f, _0x207081) {
    let _0x35387b =
      typeof window > "u"
        ? new URL(_0x39642f)
        : new URL(_0x39642f, window[_0x3f5c7c(0x321)][_0x3f5c7c(0x2ad)]);
    _0x35387b[_0x3f5c7c(0x20a)][_0x3f5c7c(0x1f9)]("sessionTicket", _0x207081);
    let _0x103918 =
      typeof window > "u"
        ? new URLSearchParams()
        : new URLSearchParams(window[_0x3f5c7c(0x321)][_0x3f5c7c(0x349)]);
    return (
      _0x103918[_0x3f5c7c(0x330)](_0x3f5c7c(0x2fe)) &&
        _0x35387b[_0x3f5c7c(0x20a)][_0x3f5c7c(0x1f9)](
          _0x3f5c7c(0x2fe),
          _0x103918["get"](_0x3f5c7c(0x2fe)),
        ),
      _0x35387b[_0x3f5c7c(0x2a4)]()
    );
  }
  async ["_getSessionTicket"]() {
    var _0x3e4485;
    let _0x587ed7 = this["_configService"][_0x2f6978(0x30d)](
        e[_0x2f6978(0x1ff)],
      ),
      _0xfb29d0 =
        (_0x587ed7 == null ? void 0x0 : _0x587ed7[_0x2f6978(0x160)]) ??
        e[_0x2f6978(0x415)];
    return (
      ((_0x3e4485 = (
        await this[_0x2f6978(0x324)][_0x2f6978(0x330)](_0xfb29d0, {
          headers: { "Content-Type": _0x2f6978(0x15f) },
        })
      )["body"]) == null
        ? void 0x0
        : _0x3e4485[_0x2f6978(0x41e)]) ?? ""
    );
  }
};
Q = C(
  [
    S(0x0, (0x0, t["Inject"])(t["Injector"])),
    S(0x1, (0x0, t["Inject"])(m["HTTPService"])),
    S(0x2, t["IConfigService"]),
    S(0x3, t["ILogService"]),
    S(0x4, l["ISnapshotServerService"]),
  ],
  Q,
);
let $ = class extends t["Disposable"] {
  constructor(_0x444029, _0x2938b7, _0x2b6cac) {
    (super(),
      (this[_0x1d4428(0x333)] = _0x444029),
      (this["_httpService"] = _0x2938b7),
      (this[_0x1d4428(0x24b)] = _0x2b6cac));
  }
  async ["runOnServer"](_0x3c862f, _0x413dda, _0x592d34, ..._0x14bf40) {
    let _0x5a9fcd = this[_0x138877(0x333)][_0x138877(0x1e8)]();
    if (!_0x5a9fcd) throw Error(_0x138877(0x2d1));
    let _0x4bfcd6 =
        (this[_0x138877(0x24b)]["getConfig"](
          e["REMOTE_UNISCRIPT_EXECUTION_ENDPOINT_KEY"],
        ) ?? e["DEFAULT_REMOTE_UNISCRIPT_EXECUTION_ENDPOINT"]) +
        "/" +
        _0x3c862f +
        "/run/" +
        _0x413dda,
      _0x344ba9 = {
        scriptId: _0x3c862f,
        runId:
          new URL(window[_0x138877(0x321)][_0x138877(0x1d2)])[_0x138877(0x20a)][
            "get"
          ](_0x138877(0x2fe)) ?? "",
        function: _0x413dda,
        unitId: _0x5a9fcd["getUnitId"](),
        argsOfFunction: JSON[_0x138877(0x3bf)](_0x14bf40),
        invokeId: _0x592d34["invokeId"] ?? "",
        executionId: _0x592d34["executionId"] ?? "",
      };
    try {
      let _0xc31f3f = await this[_0x138877(0x324)][_0x138877(0x3b9)](
        _0x4bfcd6,
        { body: _0x344ba9 },
      );
      return _0xc31f3f[_0x138877(0x202)][_0x138877(0x1b1)] &&
        _0xc31f3f[_0x138877(0x202)][_0x138877(0x1b1)][_0x138877(0x186)] !==
          v[_0x138877(0x2d0)]["OK"]
        ? "Failed"
        : _0xc31f3f[_0x138877(0x202)][_0x138877(0x1b9)];
    } catch {
      return "Failed";
    }
  }
};
$ = C(
  [
    S(0x0, t["IUniverInstanceService"]),
    S(0x1, (0x0, t["Inject"])(m["HTTPService"])),
    S(0x2, t["IConfigService"]),
  ],
  $,
);
const Ae = 0x7530,
  je = "ACTIVE_UNIT_EVENT_CHANNEL";
var Me = class extends t["Disposable"] {
  constructor() {
    (super(),
      x(this, "_id", (0x0, t["generateRandomId"])()),
      x(this, _0x164b33(0x3da), new Set()),
      x(this, _0x164b33(0x195), new Map()),
      x(this, _0x164b33(0x24d), null),
      x(this, _0x164b33(0x2d5), new Map()),
      x(this, _0x164b33(0x179), new Map()),
      this[_0x164b33(0x2e6)]());
  }
  ["dispose"]() {
    (super[_0x4eef1(0x2ca)](),
      this["_clearOtherTimers"]["forEach"]((_0x559f1, _0x19049f) =>
        this[_0x4eef1(0x22a)](_0x19049f),
      ),
      this[_0x4eef1(0x24d)] &&
        window["clearInterval"](this["_heartbeatTimer"]));
  }
  ["getUnitStatus$"](_0x2bd8fd) {
    return this["_ensureSubject"](_0x2bd8fd)[_0x3b2234(0x3df)](
      (0x0, r[_0x3b2234(0x3b3)])(),
    );
  }
  ["editingUnit"](_0x19fce9) {
    (this["_selfUnitIDs"]["size"] === 0x0 && this["_scheduleHeartbeat"](),
      this[_0x58ee7a(0x3da)][_0x58ee7a(0x1f3)](_0x19fce9),
      this["_send"]({
        type: 0x0,
        memberID: this[_0x58ee7a(0x1e5)],
        unitIDs: [_0x19fce9],
        isForwarded: !0x1,
      }));
  }
  ["disposeUnit"](_0x4247d8) {
    (this[_0x526a2f(0x3da)][_0x526a2f(0x382)](_0x4247d8),
      this[_0x526a2f(0x3da)][_0x526a2f(0x3f5)] === 0x0 &&
        this[_0x526a2f(0x24d)] &&
        window[_0x526a2f(0x37f)](this[_0x526a2f(0x24d)]));
  }
  ["_init"]() {
    (this["disposeWithMe"](
      (0x0, t[_0x429a25(0x1bd)])(
        (0x0, r["fromEvent"])(window, _0x429a25(0x2ce))["subscribe"](
          (_0x5d5339) => {
            const _0x49323d = _0x429a25;
            if (
              _0x5d5339[_0x49323d(0x36c)] !== je ||
              !_0x5d5339[_0x49323d(0x232)]
            )
              return;
            let _0x44f266 = JSON[_0x49323d(0x361)](_0x5d5339[_0x49323d(0x232)]);
            this[_0x49323d(0x2d9)](_0x44f266);
          },
        ),
      ),
    ),
      window[_0x429a25(0x3fc)]("unload", () =>
        this[_0x429a25(0x337)]({
          type: 0x1,
          memberID: this["_id"],
          unitIDs: Array["from"](this[_0x429a25(0x3da)]),
        }),
      ));
  }
  ["_handleEvent"](_0x38c134) {
    switch (_0x38c134[_0x497631(0x331)]) {
      case 0x0:
        this["_handleJoinEvent"](_0x38c134);
        break;
      case 0x1:
        this["_handleLeaveEvent"](_0x38c134);
        break;
      case 0x2:
        this["_handleHeartbeatEvent"](_0x38c134);
        break;
    }
  }
  ["_handleJoinEvent"](_0x3c46d6) {
    let {
      unitIDs: _0x1269e7,
      memberID: _0x15a4e3,
      isForwarded: _0x25f0b0,
    } = _0x3c46d6;
    (_0x1269e7[_0x5de639(0x3e6)]((_0x4d35dc) => {
      const _0x187cb8 = _0x5de639;
      if (
        (!_0x25f0b0 &&
          this[_0x187cb8(0x195)]["has"](_0x4d35dc) &&
          this["_ensureSubject"](_0x4d35dc)[_0x187cb8(0x2f8)](
            e[_0x187cb8(0x402)]["OTHER_CLIENTS_EDITING"],
          ),
        !this[_0x187cb8(0x195)][_0x187cb8(0x3b5)](_0x4d35dc) ||
          !this[_0x187cb8(0x195)]
            [_0x187cb8(0x330)](_0x4d35dc)
            [_0x187cb8(0x3b5)](_0x15a4e3))
      ) {
        let _0xf4d821 =
          this[_0x187cb8(0x195)][_0x187cb8(0x330)](_0x4d35dc) || new Set();
        (_0xf4d821[_0x187cb8(0x1f3)](_0x15a4e3),
          this[_0x187cb8(0x195)][_0x187cb8(0x1f9)](_0x4d35dc, _0xf4d821),
          this["_scheduleClearOtherTimer"](_0x15a4e3));
      }
    }),
      _0x25f0b0 ||
        this["_send"]({
          type: 0x0,
          memberID: this[_0x5de639(0x1e5)],
          unitIDs: [...this[_0x5de639(0x3da)]],
          isForwarded: !0x0,
        }));
  }
  ["_scheduleClearOtherTimer"](_0x486caf) {
    this[_0x2bc388(0x22a)](_0x486caf);
    let _0x277d4b = window[_0x2bc388(0x329)](() => {
      const _0x170962 = _0x2bc388;
      this[_0x170962(0x195)][_0x170962(0x3e6)]((_0x5154dc) => {
        _0x5154dc["delete"](_0x486caf);
      });
    }, Ae * 0x2);
    this[_0x2bc388(0x2d5)][_0x2bc388(0x1f9)](_0x486caf, _0x277d4b);
  }
  ["_removeClearOtherTimer"](_0x4959fa) {
    if (this["_clearOtherTimers"][_0x275a89(0x3b5)](_0x4959fa)) {
      let _0x2ecf90 = this[_0x275a89(0x2d5)]["get"](_0x4959fa);
      (_0x2ecf90 && window[_0x275a89(0x3d9)](_0x2ecf90),
        this[_0x275a89(0x2d5)]["set"](_0x4959fa, null));
    }
  }
  ["_handleLeaveEvent"](_0x397240) {
    let { memberID: _0x202b4f, unitIDs: _0x11759f } = _0x397240;
    (_0x11759f[_0x3f739c(0x3e6)]((_0x31f9c9) => {
      const _0x537bb5 = _0x3f739c;
      var _0x3742a4;
      let _0x260a2b = this[_0x537bb5(0x195)][_0x537bb5(0x330)](_0x31f9c9);
      _0x260a2b &&
        (_0x260a2b[_0x537bb5(0x382)](_0x202b4f),
        (_0x3742a4 = this[_0x537bb5(0x182)](_0x31f9c9)) == null ||
          _0x3742a4[_0x537bb5(0x2f8)](
            _0x260a2b[_0x537bb5(0x3f5)] === 0x0
              ? e[_0x537bb5(0x402)]["NO_OTHER_CLIENTS_EDITING"]
              : e[_0x537bb5(0x402)][_0x537bb5(0x30f)],
          ));
    }),
      this[_0x3f739c(0x22a)](_0x202b4f));
  }
  ["_handleHeartbeatEvent"](_0x29174f) {
    this[_0x4a9074(0x13b)](_0x29174f[_0x4a9074(0x296)]);
  }
  ["_send"](_0x578a02) {
    localStorage[_0x38db48(0x2b8)](je, JSON[_0x38db48(0x3bf)](_0x578a02));
  }
  ["_scheduleHeartbeat"]() {
    this[_0x4069dd(0x24d)] = window[_0x4069dd(0x3bb)](() => {
      const _0x199dae = _0x4069dd;
      this[_0x199dae(0x337)]({ type: 0x2, memberID: this[_0x199dae(0x1e5)] });
    }, Ae);
  }
  ["_ensureSubject"](_0x4c6bd1) {
    return (
      this[_0x22be52(0x179)][_0x22be52(0x3b5)](_0x4c6bd1) ||
        this["_unitStatus"][_0x22be52(0x1f9)](
          _0x4c6bd1,
          new r[_0x22be52(0x18e)](e[_0x22be52(0x402)][_0x22be52(0x238)]),
        ),
      this[_0x22be52(0x179)][_0x22be52(0x330)](_0x4c6bd1)
    );
  }
};
(Object["defineProperty"](exports, "BrowserCollaborationSocketService", {
  enumerable: !0x0,
  get: function () {
    return Q;
  },
}),
  Object["defineProperty"](
    exports,
    "DesktopCollaborationStatusDisplayController",
    {
      enumerable: !0x0,
      get: function () {
        return w;
      },
    },
  ),
  (exports["IURLService"] = B),
  Object["defineProperty"](exports, "RemoteUniscriptService", {
    enumerable: !0x0,
    get: function () {
      return $;
    },
  }),
  (exports["SheetCollabCursorShape"] = ge),
  Object["defineProperty"](exports, "UniverCollaborationClientUIPlugin", {
    enumerable: !0x0,
    get: function () {
      return Z;
    },
  }),
  (exports["WebBrowserSingleActiveUnitService"] = Me));
