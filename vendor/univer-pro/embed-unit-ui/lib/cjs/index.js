Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/embed"),
  t = require("@univerjs/core"),
  n = require("@univerjs/ui"),
  r = require("react"),
  i = require("react/jsx-runtime"),
  a = require("@univerjs-pro/license"),
  o = require("rxjs"),
  s = require("@univerjs-pro/bases"),
  c = require("@univerjs-pro/bases-ui"),
  l = require("@univerjs-pro/collaboration-client"),
  u = require("@univerjs-pro/engine-formula"),
  d = require("@univerjs/docs"),
  f = require("@univerjs/docs-ui"),
  p = require("@univerjs/engine-render"),
  m = require("@univerjs/rpc"),
  h = require("@univerjs/sheets"),
  g = require("@univerjs/sheets-formula"),
  _ = require("@univerjs/sheets-formula-ui"),
  v = require("@univerjs/sheets-ui");
const y = (0, r.createContext)(null);
function b(_0x344e88) {
  let _0x4dd3d5 = (0, r.useMemo)(
      () => ({ session: _0x344e88.session }),
      [_0x344e88.session],
    ),
    _0x9a7688 = (0, r.useRef)(new WeakMap());
  return (
    (0, r.useEffect)(() => {
      let _0x3b7c88 = _0x9a7688.current,
        _0x33b2db = (_0x3b7c88.get(_0x344e88.session) ?? 0) + 1;
      return (
        _0x3b7c88.set(_0x344e88.session, _0x33b2db),
        () => {
          queueMicrotask(() => {
            _0x3b7c88.get(_0x344e88.session) === _0x33b2db &&
              (_0x3b7c88.delete(_0x344e88.session),
              _0x344e88.session["dispose"]());
          });
        }
      );
    }, [_0x344e88.session]),
    (0, i.jsx)(y.Provider, { value: _0x4dd3d5, children: _0x344e88.children })
  );
}
function x(_0x1a0fda) {
  return (0, i.jsx)("div", {
    className:
      "\n univer-flex univer-min-h-0 univer-w-full\n " +
      (_0x1a0fda.className ?? "") +
      "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    style: _0x1a0fda.style,
    children: _0x1a0fda.children,
  });
}
function S() {
  let { session: _0xde8af5 } = w(),
    _0x323617 = (0, n.useDependency)(t.LocaleService),
    _0x54eb75 = (0, n.useObservable)(
      () => _0xde8af5.state$,
      _0xde8af5.getState(),
      false,
      [_0xde8af5],
    );
  return _0x54eb75.units["length"] === 0
    ? null
    : (0, i.jsx)("nav", {
        "aria-label": _0x323617.t("embed-unit-ui.referencedUnitViewer.title"),
        className:
          "univer-mr-3\x20univer-shrink-0\x20univer-overflow-y-auto\x20univer-border-r\x20univer-border-gray-300\x20univer-pr-2\x20dark:!univer-border-gray-700",
        style: { width: "clamp(9rem, 18vw, 13rem)" },
        children: _0x54eb75.units["map"]((_0x83bea2) => {
          let _0x52d787 = _0x83bea2 === _0x54eb75.activeUnit;
          return (0, i.jsxs)(
            "button",
            {
              "aria-current": _0x52d787,
              className:
                "\n univer-mb-1 univer-w-full univer-rounded univer-border-none univer-p-2 univer-text-left\n " +
                (_0x52d787
                  ? "univer-bg-primary-50 univer-text-primary-700"
                  : "univer-bg-transparent") +
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
              type: "button",
              onClick: () =>
                _0xde8af5.activateUnit(_0x83bea2).catch(() => undefined),
              children: [
                (0, i.jsx)("div", {
                  className:
                    "univer-truncate univer-text-sm univer-font-medium",
                  children: _0x83bea2.name,
                }),
                (0, i.jsx)("div", {
                  className: "univer-text-xs univer-text-gray-500",
                  children:
                    (0, e.fromResourceRefUnitType)(
                      _0x83bea2.ref["unit"].type,
                    ) === t.UniverInstanceType["UNIVER_SHEET"]
                      ? _0x323617.t("embed-unit-ui.referencedUnitViewer.sheet")
                      : _0x323617.t("embed-unit-ui.referencedUnitViewer.base"),
                }),
              ],
            },
            (0, e.getResourceRefUnitKey)(_0x83bea2.ref),
          );
        }),
      });
}
function C() {
  let { session: _0xd57764 } = w(),
    _0x23ad4b = (0, n.useDependency)(t.LocaleService),
    _0x5b051d = (0, n.useObservable)(
      () => _0xd57764.state$,
      _0xd57764.getState(),
      false,
      [_0xd57764],
    ),
    _0x324eb9 = (0, r.useRef)(null),
    _0x5e7649 = (0, r.useRef)(0);
  return (
    (0, r.useEffect)(() => {
      let _0xcbc74d = _0x5e7649.current + 1;
      _0x5e7649.current = _0xcbc74d;
      let _0xa6b979 = _0x324eb9.current;
      return (
        _0xa6b979 && _0xd57764.mount(_0xa6b979),
        () => {
          _0xa6b979 &&
            queueMicrotask(() => {
              _0x5e7649.current === _0xcbc74d && _0xd57764.unmount(_0xa6b979);
            });
        }
      );
    }, [_0xd57764]),
    (0, i.jsxs)("div", {
      className:
        "univer-relative univer-min-h-0 univer-flex-1 univer-overflow-hidden univer-rounded univer-border univer-border-gray-200",
      children: [
        (0, i.jsx)("div", {
          className: "univer-size-full univer-overflow-auto",
          ref: _0x324eb9,
        }),
        _0x5b051d.status !== "ready" &&
          (0, i.jsx)("div", {
            className:
              "dark:!univer-bg-gray-900/90 univer-absolute univer-inset-0 univer-flex univer-items-center univer-justify-center univer-bg-white/90 univer-p-6 univer-text-center univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
            role: "status",
            children:
              _0x5b051d.status === "loading"
                ? _0x23ad4b.t("embed-unit-ui.referencedUnitViewer.loading")
                : _0x23ad4b.t(
                    _0x5b051d.error
                      ? "embed-unit-ui.referencedUnitViewer.unavailable"
                      : "embed-unit-ui.referencedUnitViewer.empty",
                  ),
          }),
      ],
    })
  );
}
function w() {
  let _0xe077cf = (0, r.useContext)(y);
  if (!_0xe077cf) throw Error("REFERENCED_UNIT_VIEWER_PROVIDER_REQUIRED");
  return _0xe077cf;
}
const T = { Frame: x, Provider: b, UnitList: S, Viewport: C };
var E = "@univerjs-pro/embed-unit-ui",
  D = "1.0.0-insiders.20260907-70fc579";
const O = "embed-unit-ui.config",
  k = {};
function A(_0x3dc290) {
  "@babel/helpers - typeof";
  return (
    (A =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x39bc39) {
            return typeof _0x39bc39;
          }
        : function (_0x50da3b) {
            return _0x50da3b &&
              typeof Symbol == "function" &&
              _0x50da3b.constructor === Symbol &&
              _0x50da3b !== Symbol.prototype
              ? "symbol"
              : typeof _0x50da3b;
          }),
    A(_0x3dc290)
  );
}
function j(_0x3eddbf, _0x839aa0) {
  if (A(_0x3eddbf) != "object" || !_0x3eddbf) return _0x3eddbf;
  var _0xfdd84e = _0x3eddbf[Symbol.toPrimitive];
  if (_0xfdd84e !== undefined) {
    var _0x59660d = _0xfdd84e.call(_0x3eddbf, _0x839aa0 || "default");
    if (A(_0x59660d) != "object") return _0x59660d;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x839aa0 === "string" ? String : Number)(_0x3eddbf);
}
function M(_0x4f575f) {
  var _0x42c3fc = j(_0x4f575f, "string");
  return A(_0x42c3fc) == "symbol" ? _0x42c3fc : _0x42c3fc + "";
}
function N(_0x38ef14, _0x4cf212, _0x590eba) {
  return (
    (_0x4cf212 = M(_0x4cf212)) in _0x38ef14
      ? Object.defineProperty(_0x38ef14, _0x4cf212, {
          value: _0x590eba,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x38ef14[_0x4cf212] = _0x590eba),
    _0x38ef14
  );
}
const P = ["pointerup", "mouseup", "keyup"];
var F = class {
  createSocket() {
    return Promise.resolve(null);
  }
};
const I = [
    [t.IAuthzIoService, null],
    [t.IUndoRedoService, null],
    [t.IMentionIOService, null],
  ],
  L = [
    [t.IAuthzIoService, { useClass: t.AuthzIoLocalService }],
    [l.IAttachmentIoService, null],
    [t.IMentionIOService, { useClass: t.MentionIOLocalService }],
  ];
var R = class extends t.Disposable {
  constructor(_0x4cd4d9, _0x228e3a, _0x2555eb, _0x15f972) {
    (super(),
      (this._configService = _0x4cd4d9),
      (this._localeService = _0x228e3a),
      (this._themeService = _0x2555eb),
      (this._onSelection = _0x15f972),
      N(this, "_univer", null),
      N(this, "_container", null),
      N(this, "_activeUnitId", null),
      N(this, "_activeUnit", null),
      N(this, "_isApplyingDecoration", false),
      N(this, "_selectionDisposables", new t.DisposableCollection()));
  }
  mount(_0x175b27) {
    (this._container === _0x175b27 && this._univer) ||
      (this._disposeUniver(),
      (this._container = _0x175b27),
      (this._univer = this._createUniver(_0x175b27)));
  }
  unmount(_0x4e693e) {
    this._container === _0x4e693e && this._disposeUniver();
  }
  async open(_0x28c21b, _0x1f1fde) {
    let _0x3b8e33 = this._univer;
    if (!_0x3b8e33) return null;
    let _0x3c103e = _0x3b8e33.__getInjector().get(t.IUniverInstanceService);
    (this._selectionDisposables["dispose"](),
      (this._selectionDisposables = new t["DisposableCollection"]()),
      this._activeUnitId && _0x3c103e.disposeUnit(this._activeUnitId),
      (this._activeUnit = _0x28c21b));
    let _0x52533a,
      _0x3f70f3 = (0, e.fromResourceRefUnitType)(_0x28c21b.ref["unit"].type);
    if (_0x3f70f3 === t.UniverInstanceType["UNIVER_SHEET"])
      _0x52533a = _0x3b8e33.createUnit(
        _0x3f70f3,
        t.Tools["deepClone"](_0x1f1fde),
      );
    else {
      if (_0x3f70f3 === t.UniverInstanceType["UNIVER_BASE"]) {
        let _0x4bb13f = t.Tools["deepClone"](_0x1f1fde);
        (this._makeBaseSnapshotReadOnly(_0x4bb13f),
          (_0x4bb13f.id =
            "__referenced_unit_viewer_base__" + _0x28c21b.ref["unit"].selector),
          (_0x52533a = _0x3b8e33.createUnit(_0x3f70f3, _0x4bb13f)),
          this._setBasePermissionsReadOnly(_0x3b8e33, _0x52533a));
      } else throw Error("REFERENCED_UNIT_VIEWER_UNSUPPORTED_UNIT_TYPE");
    }
    return (
      (this._activeUnitId = _0x52533a.getUnitId()),
      _0x3c103e.setCurrentUnitForType(_0x52533a.getUnitId()),
      _0x3c103e.focusUnit(_0x52533a.getUnitId()),
      _0x52533a instanceof t.Workbook
        ? this._observeSheetSelection(_0x3b8e33, _0x52533a)
        : _0x52533a instanceof t.BaseDataModel &&
          this._observeBaseSelection(_0x3b8e33, _0x52533a),
      _0x52533a
    );
  }
  setDecoration(_0x1e47d2) {
    let _0x4b8a55 = this._univer;
    if (!_0x4b8a55 || !this._activeUnitId || !_0x1e47d2) return;
    if (_0x1e47d2.kind === "sheet-range") {
      let _0x5135e7 = _0x4b8a55
          .__getInjector()
          .get(t.IUniverInstanceService)
          .getUnit(this._activeUnitId, t.UniverInstanceType["UNIVER_SHEET"]),
        _0x56098e =
          (_0x5135e7 == null
            ? undefined
            : _0x5135e7.getSheetBySheetId(_0x1e47d2.sheetId)) ??
          (_0x5135e7 == null
            ? undefined
            : _0x5135e7.getSheetBySheetName(_0x1e47d2.sheetName));
      if (!_0x5135e7 || !_0x56098e) return;
      (_0x5135e7.setActiveSheet(_0x56098e),
        _0x4b8a55
          .__getInjector()
          .get(t.IContextService)
          .setContextValue(h.REF_SELECTIONS_ENABLED, true),
        _0x4b8a55
          .__getInjector()
          .get(h.IRefSelectionsService)
          .setSelections(_0x5135e7.getUnitId(), _0x56098e.getSheetId(), [
            ..._0x1e47d2.selections,
          ]));
      return;
    }
    let _0x3bd127 = _0x4b8a55.__getInjector().get(c.IBaseUIStateService);
    this._isApplyingDecoration = true;
    try {
      (_0x3bd127.activateTable(_0x1e47d2.selection["tableId"]),
        _0x3bd127.activateView(_0x1e47d2.selection["viewId"]),
        _0x3bd127.setSelection(_0x1e47d2.selection));
    } finally {
      this._isApplyingDecoration = false;
    }
  }
  dispose() {
    (this._disposeUniver(), super.dispose());
  }
  _disposeUniver() {
    var _0x27bb0d;
    (this._selectionDisposables["dispose"](),
      (this._selectionDisposables = new t["DisposableCollection"]()),
      (_0x27bb0d = this._univer) == null || _0x27bb0d.dispose(),
      (this._univer = null),
      (this._container = null),
      (this._activeUnitId = null),
      (this._activeUnit = null));
  }
  _observeSheetSelection(_0x5cee7d, _0x1a35ee) {
    let _0x302c66 = _0x5cee7d.__getInjector().get(t.IContextService);
    (_0x302c66.setContextValue(h.REF_SELECTIONS_ENABLED, true),
      this._selectionDisposables["add"](
        (0, t.toDisposable)(() => {
          _0x302c66.setContextValue(h.REF_SELECTIONS_ENABLED, false);
        }),
      ));
    let _0x1e8401 = _0x5cee7d.__getInjector().get(p.IRenderManagerService),
      _0x20afe9 = () => {
        var _0x58d2ce;
        let _0x2456d3 =
          (_0x58d2ce = _0x1e8401.getRenderUnitById(_0x1a35ee.getUnitId())) ==
          null
            ? undefined
            : _0x58d2ce.with(_.RefSelectionsRenderService);
        _0x2456d3 &&
          (this._selectionDisposables["add"](
            _0x2456d3.enableSelectionChanging(),
          ),
          this._selectionDisposables["add"](
            _0x2456d3.selectionMoveEnd$["subscribe"]((_0x48277b) => {
              let _0x3dec3a = this._activeUnit,
                _0x2e8ed1 = _0x1a35ee.getActiveSheet();
              !_0x3dec3a ||
                !_0x2e8ed1 ||
                this._onSelection({
                  kind: "sheet-range",
                  ranges: _0x48277b.map(
                    (_0x3261f9) => _0x3261f9.rangeWithCoord,
                  ),
                  unit: _0x3dec3a,
                  sheetId: _0x2e8ed1.getSheetId(),
                  sheetName: _0x2e8ed1.getName(),
                });
            }),
          ));
      };
    (_0x20afe9(),
      this._selectionDisposables["add"](
        _0x1e8401.created$["subscribe"]((_0x3f120f) => {
          _0x3f120f.unitId === _0x1a35ee.getUnitId() && _0x20afe9();
        }),
      ));
  }
  _observeBaseSelection(_0x2c7ecf, _0x218066) {
    var _0x4b94d0;
    let _0x30014f = _0x2c7ecf.__getInjector().get(c.IBaseUIStateService),
      _0x4a6fa1 = _0x218066.getSnapshot(),
      _0x4fa382 = _0x4a6fa1.tableOrder[0] ?? Object.keys(_0x4a6fa1.tables)[0],
      _0x43dd0a = _0x4fa382 ? _0x4a6fa1.tables[_0x4fa382] : undefined,
      _0x3264d3 =
        (_0x43dd0a == null || (_0x4b94d0 = _0x43dd0a.viewOrder) == null
          ? undefined
          : _0x4b94d0[0]) ??
        Object.keys((_0x43dd0a == null ? undefined : _0x43dd0a.views) ?? {})[0];
    (_0x4fa382 && _0x30014f.activateTable(_0x4fa382),
      _0x3264d3 && _0x30014f.activateView(_0x3264d3),
      this._selectionDisposables["add"](
        z(
          _0x30014f.state$,
          document,
          () => this._isApplyingDecoration,
          (_0x276f00) => {
            let _0x2e547d = this._activeUnit;
            _0x2e547d &&
              this._onSelection({
                kind: "base-grid",
                unit: _0x2e547d,
                selection: _0x276f00,
                tableId: _0x276f00.tableId,
                viewId: _0x276f00.viewId,
              });
          },
        ),
      ));
  }
  _makeBaseSnapshotReadOnly(_0x4455e7) {
    Object.values(_0x4455e7.tables).forEach((_0x58451f) => {
      Object.values(_0x58451f.fields).forEach((_0x2ff805) => {
        _0x2ff805.readonly = true;
      });
    });
  }
  _setBasePermissionsReadOnly(_0x32f798, _0x2158bd) {
    let _0xd52ccc = _0x32f798.__getInjector().get(s.IBasePermissionService),
      _0x50e684 = _0x2158bd.getSnapshot();
    (_0xd52ccc.setBasePermission(_0x2158bd.getUnitId(), { createTable: false }),
      Object.values(_0x50e684.tables).forEach((_0x1fe46f) => {
        _0xd52ccc.setTablePermission(_0x1fe46f.id, {
          edit: false,
          createField: false,
          createRecord: false,
          delete: false,
          manageView: false,
        });
      }));
  }
  _createUniver(_0x1a8d25) {
    let _0x307694 = this._configService["getConfig"](O),
      _0x57e2bf = _0x307694 == null ? undefined : _0x307694.workerURL,
      _0x4d475d = this._localeService["getCurrentLocale"](),
      _0x54d8dd = this._localeService["getLocales"](),
      _0x555181 = new t["Univer"]({
        darkMode: this._themeService["darkMode"],
        direction: this._localeService["getDirection"](),
        locale: _0x4d475d,
        ...(_0x54d8dd ? { locales: { [_0x4d475d]: _0x54d8dd } } : null),
        override: I,
        theme: this._themeService["getCurrentTheme"](),
      }),
      _0x3aea6f = this._configService["getConfig"](a.LS_CONFIG_KEY);
    return (
      _0x3aea6f &&
        _0x555181.registerPlugin(a.UniverLicensePlugin, {
          license: _0x3aea6f.ls,
        }),
      _0x57e2bf &&
        _0x555181.registerPlugin(m.UniverRPCMainThreadPlugin, {
          workerURL: _0x57e2bf,
        }),
      _0x555181.registerPlugin(p.UniverRenderEnginePlugin),
      _0x555181.registerPlugin(n.UniverUIPlugin, {
        container: _0x1a8d25,
        contextMenu: false,
        disableAutoFocus: true,
        footer: true,
        header: false,
        headerMenu: false,
        toolbar: false,
      }),
      _0x555181.registerPlugin(u.UniverProFormulaEnginePlugin, {
        notExecuteFormula: !!_0x57e2bf,
      }),
      _0x555181.registerPlugin(d.UniverDocsPlugin),
      _0x555181.registerPlugin(f.UniverDocsUIPlugin),
      _0x555181.registerPlugin(h.UniverSheetsPlugin),
      _0x555181.registerPlugin(g.UniverSheetsFormulaPlugin),
      _0x555181.registerPlugin(v.UniverSheetsUIPlugin, {
        disableAutoFocus: true,
        disableEdit: true,
        footer: {
          addSheetButtonConfig: { show: false },
          menus: false,
          sheetBar: true,
          statisticBar: false,
          zoomSlider: false,
        },
        formulaBar: false,
      }),
      _0x555181.registerPlugin(_.UniverSheetsFormulaUIPlugin, {
        functionScreenTips: false,
        menu: {},
      }),
      _0x555181.registerPlugin(l.UniverCollaborationClientPlugin, {
        enableCollaboration: false,
        override: L,
        socketService: F,
      }),
      _0x555181.registerPlugin(s.UniverBasesPlugin),
      _0x555181.registerPlugin(c.UniverBasesUIPlugin, {
        disableEdit: true,
        override: [
          [
            c.IBaseCanvasRootResolverService,
            {
              useValue: (0, c.createScopedBaseCanvasRootResolverService)(
                _0x1a8d25,
              ),
            },
          ],
        ],
        workbench: {
          collaborationStatus: false,
          fallbackToFirstUnit: true,
          footer: false,
          global: false,
          header: false,
          headerMenu: false,
          leftSidebar: true,
          mobile: false,
          rightSidebar: false,
          route: false,
        },
      }),
      _0x555181
    );
  }
};
function z(_0xa3aa17, _0x25ca7e, _0x343ba3, _0x35d4c2) {
  let _0x2daa62 = null,
    _0x2354c9 = _0xa3aa17.subscribe((_0x579125) => {
      if (_0x343ba3()) {
        _0x2daa62 = null;
        return;
      }
      _0x2daa62 = _0x579125.selection ?? null;
    }),
    _0x2b4086 = () => {
      _0x2daa62 &&= (_0x35d4c2(_0x2daa62), null);
    };
  return (
    P.forEach((_0x5b4d2c) => _0x25ca7e.addEventListener(_0x5b4d2c, _0x2b4086)),
    (0, t.toDisposable)(() => {
      (_0x2354c9.unsubscribe(),
        P.forEach((_0x16f3b0) =>
          _0x25ca7e.removeEventListener(_0x16f3b0, _0x2b4086),
        ));
    })
  );
}
function B(_0x480a0f, _0x357f67) {
  return function (_0xe2fc4e, _0x491b22) {
    _0x357f67(_0xe2fc4e, _0x491b22, _0x480a0f);
  };
}
function V(_0x199a60, _0x4baef8, _0x19fe9c, _0x31aede) {
  var _0x375b9d = arguments.length,
    _0x4c57a3 =
      _0x375b9d < 3
        ? _0x4baef8
        : _0x31aede === null
          ? (_0x31aede = Object.getOwnPropertyDescriptor(_0x4baef8, _0x19fe9c))
          : _0x31aede,
    _0x19642e;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4c57a3 = Reflect.decorate(_0x199a60, _0x4baef8, _0x19fe9c, _0x31aede);
  else {
    for (var _0xbf167b = _0x199a60.length - 1; _0xbf167b >= 0; _0xbf167b--)
      (_0x19642e = _0x199a60[_0xbf167b]) &&
        (_0x4c57a3 =
          (_0x375b9d < 3
            ? _0x19642e(_0x4c57a3)
            : _0x375b9d > 3
              ? _0x19642e(_0x4baef8, _0x19fe9c, _0x4c57a3)
              : _0x19642e(_0x4baef8, _0x19fe9c)) || _0x4c57a3);
  }
  return (
    _0x375b9d > 3 &&
      _0x4c57a3 &&
      Object.defineProperty(_0x4baef8, _0x19fe9c, _0x4c57a3),
    _0x4c57a3
  );
}
let H = (function (_0x528f6f) {
    return (
      (_0x528f6f.Loading = "loading"),
      (_0x528f6f.Ready = "ready"),
      (_0x528f6f.Unavailable = "unavailable"),
      _0x528f6f
    );
  })({}),
  U = (function (_0x2fcc23) {
    return (
      (_0x2fcc23.SheetRange = "sheet-range"),
      (_0x2fcc23.BaseGrid = "base-grid"),
      _0x2fcc23
    );
  })({});
const W = (0, t.createIdentifier)(
  "embed-unit-ui.referenced-unit-viewer.service",
);
let G = class {
  constructor(_0xdcecd1, _0x349349, _0x9d4caf, _0x6ffd1a) {
    ((this._catalog = _0xdcecd1),
      (this._configService = _0x349349),
      (this._localeService = _0x9d4caf),
      (this._themeService = _0x6ffd1a));
  }
  createSession(_0x550d10 = {}) {
    return new K(
      this._catalog,
      this._configService,
      this._localeService,
      this._themeService,
      _0x550d10,
    );
  }
};
G = V(
  [
    B(0, (0, t.Inject)(e.IReferencedUnitCatalogService)),
    B(1, t.IConfigService),
    B(2, (0, t.Inject)(t.LocaleService)),
    B(3, (0, t.Inject)(t.ThemeService)),
  ],
  G,
);
var K = class extends t.Disposable {
  constructor(_0x408918, _0xcd2daf, _0x27ce16, _0x2b4126, _0x5253cf) {
    (super(),
      (this._catalog = _0x408918),
      (this._options = _0x5253cf),
      N(
        this,
        "_state$",
        new o["BehaviorSubject"]({
          activeUnit: null,
          units: [],
          status: "loading",
        }),
      ),
      N(this, "_selection$", new o.Subject()),
      N(this, "_runtime", undefined),
      N(this, "_container", null),
      N(this, "_decoration", null),
      N(this, "_generation", 0),
      N(this, "_lastSelectionKey", ""),
      N(this, "_isDisposed", false),
      N(this, "selection$", this._selection$["asObservable"]()),
      N(this, "state$", this._state$["asObservable"]()),
      (this._runtime = new R(_0xcd2daf, _0x27ce16, _0x2b4126, (_0x34ca24) =>
        this._publishSelection(_0x34ca24),
      )),
      this.disposeWithMe(this._runtime),
      this._initialize().catch((_0x531781) => {
        this._setState({
          ...this.getState(),
          error: _0x531781,
          status: "unavailable",
        });
      }));
  }
  getState() {
    return this._state$["getValue"]();
  }
  mount(_0x6ae2bf) {
    ((this._container = _0x6ae2bf), this._runtime["mount"](_0x6ae2bf));
    let _0x17140d = this.getState().activeUnit;
    _0x17140d &&
      this._openUnit(_0x17140d).catch((_0x1100c3) => {
        this._setState({
          ...this.getState(),
          error: _0x1100c3,
          status: "unavailable",
        });
      });
  }
  unmount(_0x3f6bdc) {
    this._container === _0x3f6bdc &&
      ((this._generation += 1),
      (this._container = null),
      this._runtime["unmount"](_0x3f6bdc));
  }
  async activateUnit(_0x21b56f) {
    ((this._lastSelectionKey = ""),
      this._setState({
        activeUnit: _0x21b56f,
        units: this.getState().units,
        status: "loading",
      }),
      this._container && (await this._openUnit(_0x21b56f)));
  }
  async refresh() {
    let _0x136bf8 = this.getState().activeUnit;
    _0x136bf8 &&
      (this._setState({
        activeUnit: _0x136bf8,
        units: this.getState().units,
        status: "loading",
      }),
      await this._openUnit(_0x136bf8));
  }
  setDecoration(_0x1d7564) {
    this._decoration = _0x1d7564;
    let _0x3e8eca = this.getState().activeUnit;
    _0x1d7564 &&
      _0x3e8eca &&
      (0, e.getResourceRefUnitKey)(_0x3e8eca.ref) ===
        (0, e.getResourceRefUnitKey)(_0x1d7564.unit["ref"]) &&
      this._runtime["setDecoration"](_0x1d7564);
  }
  dispose() {
    ((this._isDisposed = true),
      (this._generation += 1),
      this._selection$["complete"](),
      this._state$["complete"](),
      super.dispose());
  }
  async _initialize() {
    let [_0x4738cf, _0x2e27bb] = await Promise.all([
        this._catalog["listUnits"](t.UniverInstanceType["UNIVER_SHEET"]),
        this._catalog["listUnits"](t.UniverInstanceType["UNIVER_BASE"]),
      ]),
      _0x4e1d19 = [..._0x4738cf, ..._0x2e27bb];
    if (this._isDisposed) return;
    let _0x2c8919 = this._options["initialRef"],
      _0x326a6c = _0x2c8919
        ? (_0x4e1d19.find(
            (_0x85b7bb) =>
              (0, e.getResourceRefUnitKey)(_0x85b7bb.ref) ===
              (0, e.getResourceRefUnitKey)(_0x2c8919),
          ) ?? null)
        : this._options["initialRefRequired"]
          ? null
          : (_0x4e1d19[0] ?? null);
    (this._setState({
      activeUnit: _0x326a6c,
      units: _0x4e1d19,
      status: _0x326a6c ? "loading" : "unavailable",
    }),
      _0x326a6c && this._container
        ? await this._openUnit(_0x326a6c)
        : _0x326a6c ||
          this._setState({
            activeUnit: null,
            units: _0x4e1d19,
            status: "unavailable",
          }));
  }
  async _openUnit(_0x4ac063) {
    let _0x402748 = ++this._generation;
    try {
      let _0x4991f5 = await this._catalog["loadUnit"](_0x4ac063);
      if (_0x402748 !== this._generation) return;
      let _0x3457c2 = await this._runtime["open"](_0x4ac063, _0x4991f5);
      if (_0x402748 !== this._generation) return;
      (this._setState({
        activeUnit: _0x4ac063,
        units: this.getState().units,
        status: _0x3457c2 ? "ready" : "loading",
      }),
        _0x3457c2 &&
          this._decoration &&
          (0, e.getResourceRefUnitKey)(this._decoration["unit"].ref) ===
            (0, e.getResourceRefUnitKey)(_0x4ac063.ref) &&
          this._runtime["setDecoration"](this._decoration));
    } catch (_0x3058a2) {
      throw (
        _0x402748 === this._generation &&
          this._setState({
            ...this.getState(),
            error: _0x3058a2,
            status: "unavailable",
          }),
        _0x3058a2
      );
    }
  }
  _publishSelection(_0x5d31a4) {
    let _0x67388a = JSON.stringify(
      _0x5d31a4.kind === "sheet-range"
        ? [
            _0x5d31a4.kind,
            (0, e.getResourceRefUnitKey)(_0x5d31a4.unit["ref"]),
            _0x5d31a4.sheetId,
            _0x5d31a4.ranges,
          ]
        : [
            _0x5d31a4.kind,
            (0, e.getResourceRefUnitKey)(_0x5d31a4.unit["ref"]),
            _0x5d31a4.selection,
          ],
    );
    _0x67388a !== this._lastSelectionKey &&
      ((this._lastSelectionKey = _0x67388a),
      this._selection$["next"](_0x5d31a4));
  }
  _setState(_0x246ea7) {
    this._isDisposed || this._state$["next"](_0x246ea7);
  }
};
let q = class extends t.Plugin {
  constructor(_0x37cbb6 = k, _0x2ac8c5, _0xb69dda) {
    (super(),
      (this._config = _0x37cbb6),
      (this._injector = _0x2ac8c5),
      (this._configService = _0xb69dda));
    let { ..._0x484ea8 } = (0, t.merge)({}, k, this._config);
    this._configService["setConfig"](O, _0x484ea8);
  }
  onStarting() {
    [[W, { useClass: G }]].forEach((_0x20537f) =>
      this._injector["add"](_0x20537f),
    );
  }
};
(N(q, "pluginName", "UNIVER_EMBED_UNIT_UI_PLUGIN"),
  N(q, "packageName", E),
  N(q, "version", D),
  N(q, "type", t.UniverInstanceType["UNIVER_UNKNOWN"]),
  (q = V(
    [
      (0, t.DependentOn)(a.UniverLicensePlugin, e.UniverEmbedPlugin),
      B(1, (0, t.Inject)(t.Injector)),
      B(2, t.IConfigService),
    ],
    q,
  )),
  (exports.IReferencedUnitViewerService = W),
  (exports.ReferencedUnitSelectionKind = U),
  (exports.ReferencedUnitViewer = T),
  (exports.ReferencedUnitViewerStatus = H),
  Object.defineProperty(exports, "UniverEmbedUnitUIPlugin", {
    enumerable: true,
    get: function () {
      return q;
    },
  }));
