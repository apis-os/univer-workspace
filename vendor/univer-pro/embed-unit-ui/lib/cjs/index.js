Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
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
function b(var_core_value_sig9A0D) {
  let var_core_value_sigA319 = (0, r.useMemo)(() => ({
      session: var_core_value_sig9A0D.session
    }), [var_core_value_sig9A0D.session]),
    var_core_value_sig2D58 = (0, r.useRef)(new WeakMap());
  return (0, r.useEffect)(() => {
    let var_core_value_sigD955 = var_core_value_sig2D58.current,
      var_core_value_sig48BD = (var_core_value_sigD955.get(var_core_value_sig9A0D.session) ?? 0) + 1;
    return var_core_value_sigD955.set(var_core_value_sig9A0D.session, var_core_value_sig48BD), () => {
      queueMicrotask(() => {
        var_core_value_sigD955.get(var_core_value_sig9A0D.session) === var_core_value_sig48BD && (var_core_value_sigD955.delete(var_core_value_sig9A0D.session), var_core_value_sig9A0D.session["dispose"]());
      });
    };
  }, [var_core_value_sig9A0D.session]), (0, i.jsx)(y.Provider, {
    value: var_core_value_sigA319,
    children: var_core_value_sig9A0D.children
  });
}
function x(var_core_value_sig223F) {
  return (0, i.jsx)("div", {
    className: "\n univer-flex univer-min-h-0 univer-w-full\n " + (var_core_value_sig223F.className ?? "") + "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    style: var_core_value_sig223F.style,
    children: var_core_value_sig223F.children
  });
}
function S() {
  let {
      session: var_core_value_sigD749
    } = w(),
    var_core_value_sigCFFA = (0, n.useDependency)(t.LocaleService),
    var_core_value_sig58C1 = (0, n.useObservable)(() => var_core_value_sigD749.state$, var_core_value_sigD749.getState(), false, [var_core_value_sigD749]);
  return var_core_value_sig58C1.units["length"] === 0 ? null : (0, i.jsx)("nav", {
    "aria-label": var_core_value_sigCFFA.t("embed-unit-ui.referencedUnitViewer.title"),
    className: "univer-mr-3\x20univer-shrink-0\x20univer-overflow-y-auto\x20univer-border-r\x20univer-border-gray-300\x20univer-pr-2\x20dark:!univer-border-gray-700",
    style: {
      width: "clamp(9rem, 18vw, 13rem)"
    },
    children: var_core_value_sig58C1.units["map"](var_core_value_sig429F => {
      let var_core_value_sigF62A = var_core_value_sig429F === var_core_value_sig58C1.activeUnit;
      return (0, i.jsxs)("button", {
        "aria-current": var_core_value_sigF62A,
        className: "\n univer-mb-1 univer-w-full univer-rounded univer-border-none univer-p-2 univer-text-left\n " + (var_core_value_sigF62A ? "univer-bg-primary-50 univer-text-primary-700" : "univer-bg-transparent") + "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        type: "button",
        onClick: () => var_core_value_sigD749.activateUnit(var_core_value_sig429F).catch(() => undefined),
        children: [(0, i.jsx)("div", {
          className: "univer-truncate univer-text-sm univer-font-medium",
          children: var_core_value_sig429F.name
        }), (0, i.jsx)("div", {
          className: "univer-text-xs univer-text-gray-500",
          children: (0, e.fromResourceRefUnitType)(var_core_value_sig429F.ref["unit"].type) === t.UniverInstanceType["UNIVER_SHEET"] ? var_core_value_sigCFFA.t("embed-unit-ui.referencedUnitViewer.sheet") : var_core_value_sigCFFA.t("embed-unit-ui.referencedUnitViewer.base")
        })]
      }, (0, e.getResourceRefUnitKey)(var_core_value_sig429F.ref));
    })
  });
}
function C() {
  let {
      session: var_core_value_sig5090
    } = w(),
    var_core_value_sigC368 = (0, n.useDependency)(t.LocaleService),
    var_core_value_sigAD56 = (0, n.useObservable)(() => var_core_value_sig5090.state$, var_core_value_sig5090.getState(), false, [var_core_value_sig5090]),
    var_core_value_sigDB4A = (0, r.useRef)(null),
    var_core_value_sig6418 = (0, r.useRef)(0);
  return (0, r.useEffect)(() => {
    let var_core_value_sig8178 = var_core_value_sig6418.current + 1;
    var_core_value_sig6418.current = var_core_value_sig8178;
    let var_core_value_sigE9ED = var_core_value_sigDB4A.current;
    return var_core_value_sigE9ED && var_core_value_sig5090.mount(var_core_value_sigE9ED), () => {
      var_core_value_sigE9ED && queueMicrotask(() => {
        var_core_value_sig6418.current === var_core_value_sig8178 && var_core_value_sig5090.unmount(var_core_value_sigE9ED);
      });
    };
  }, [var_core_value_sig5090]), (0, i.jsxs)("div", {
    className: "univer-relative univer-min-h-0 univer-flex-1 univer-overflow-hidden univer-rounded univer-border univer-border-gray-200",
    children: [(0, i.jsx)("div", {
      className: "univer-size-full univer-overflow-auto",
      ref: var_core_value_sigDB4A
    }), var_core_value_sigAD56.status !== "ready" && (0, i.jsx)("div", {
      className: "dark:!univer-bg-gray-900/90 univer-absolute univer-inset-0 univer-flex univer-items-center univer-justify-center univer-bg-white/90 univer-p-6 univer-text-center univer-text-sm univer-text-gray-500 dark:!univer-text-gray-400",
      role: "status",
      children: var_core_value_sigAD56.status === "loading" ? var_core_value_sigC368.t("embed-unit-ui.referencedUnitViewer.loading") : var_core_value_sigC368.t(var_core_value_sigAD56.error ? "embed-unit-ui.referencedUnitViewer.unavailable" : "embed-unit-ui.referencedUnitViewer.empty")
    })]
  });
}
function w() {
  let var_core_value_sig1896 = (0, r.useContext)(y);
  if (!var_core_value_sig1896) throw Error("REFERENCED_UNIT_VIEWER_PROVIDER_REQUIRED");
  return var_core_value_sig1896;
}
const T = {
  Frame: x,
  Provider: b,
  UnitList: S,
  Viewport: C
};
var E = "@univerjs-pro/embed-unit-ui",
  D = "1.0.0-insiders.20260907-70fc579";
const O = "embed-unit-ui.config",
  k = {};
function A(var_core_value_sig0285) {
  "@babel/helpers - typeof";

  return A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigB577) {
    return typeof var_core_value_sigB577;
  } : function (var_core_value_sig9572) {
    return var_core_value_sig9572 && typeof Symbol == "function" && var_core_value_sig9572.constructor === Symbol && var_core_value_sig9572 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig9572;
  }, A(var_core_value_sig0285);
}
function j(var_core_value_sig777D, var_core_value_sig3F4C) {
  if (A(var_core_value_sig777D) != "object" || !var_core_value_sig777D) return var_core_value_sig777D;
  var var_core_value_sigD65A = var_core_value_sig777D[Symbol.toPrimitive];
  if (var_core_value_sigD65A !== undefined) {
    var var_core_value_sig5A13 = var_core_value_sigD65A.call(var_core_value_sig777D, var_core_value_sig3F4C || "default");
    if (A(var_core_value_sig5A13) != "object") return var_core_value_sig5A13;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig3F4C === "string" ? String : Number)(var_core_value_sig777D);
}
function M(var_core_value_sigF593) {
  var var_core_value_sig3607 = j(var_core_value_sigF593, "string");
  return A(var_core_value_sig3607) == "symbol" ? var_core_value_sig3607 : var_core_value_sig3607 + "";
}
function N(var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig34C8) {
  return (var_core_value_sigF2E6 = M(var_core_value_sigF2E6)) in var_core_value_sigB512 ? Object.defineProperty(var_core_value_sigB512, var_core_value_sigF2E6, {
    value: var_core_value_sig34C8,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigB512[var_core_value_sigF2E6] = var_core_value_sig34C8, var_core_value_sigB512;
}
const P = ["pointerup", "mouseup", "keyup"];
var F = class {
  createSocket() {
    return Promise.resolve(null);
  }
};
const I = [[t.IAuthzIoService, null], [t.IUndoRedoService, null], [t.IMentionIOService, null]],
  L = [[t.IAuthzIoService, {
    useClass: t.AuthzIoLocalService
  }], [l.IAttachmentIoService, null], [t.IMentionIOService, {
    useClass: t.MentionIOLocalService
  }]];
var R = class extends t.Disposable {
  constructor(var_core_value_sigD873, var_core_value_sigA12B, var_core_value_sigF230, var_core_value_sig09B8) {
    super(), this._configService = var_core_value_sigD873, this._localeService = var_core_value_sigA12B, this._themeService = var_core_value_sigF230, this._onSelection = var_core_value_sig09B8, N(this, "_univer", null), N(this, "_container", null), N(this, "_activeUnitId", null), N(this, "_activeUnit", null), N(this, "_isApplyingDecoration", false), N(this, "_selectionDisposables", new t.DisposableCollection());
  }
  mount(var_core_value_sig6F91) {
    this._container === var_core_value_sig6F91 && this._univer || (this._disposeUniver(), this._container = var_core_value_sig6F91, this._univer = this._createUniver(var_core_value_sig6F91));
  }
  unmount(var_core_value_sigF9C7) {
    this._container === var_core_value_sigF9C7 && this._disposeUniver();
  }
  async open(var_core_value_sig8895, var_core_value_sigC80B) {
    let var_core_value_sig284F = this._univer;
    if (!var_core_value_sig284F) return null;
    let var_core_value_sigE154 = var_core_value_sig284F.__getInjector().get(t.IUniverInstanceService);
    this._selectionDisposables["dispose"](), this._selectionDisposables = new t["DisposableCollection"](), this._activeUnitId && var_core_value_sigE154.disposeUnit(this._activeUnitId), this._activeUnit = var_core_value_sig8895;
    let var_core_value_sig4632,
      var_core_value_sig12F2 = (0, e.fromResourceRefUnitType)(var_core_value_sig8895.ref["unit"].type);
    if (var_core_value_sig12F2 === t.UniverInstanceType["UNIVER_SHEET"]) var_core_value_sig4632 = var_core_value_sig284F.createUnit(var_core_value_sig12F2, t.Tools["deepClone"](var_core_value_sigC80B));else {
      if (var_core_value_sig12F2 === t.UniverInstanceType["UNIVER_BASE"]) {
        let var_core_value_sig2AD8 = t.Tools["deepClone"](var_core_value_sigC80B);
        this._makeBaseSnapshotReadOnly(var_core_value_sig2AD8), var_core_value_sig2AD8.id = "__referenced_unit_viewer_base__" + var_core_value_sig8895.ref["unit"].selector, var_core_value_sig4632 = var_core_value_sig284F.createUnit(var_core_value_sig12F2, var_core_value_sig2AD8), this._setBasePermissionsReadOnly(var_core_value_sig284F, var_core_value_sig4632);
      } else throw Error("REFERENCED_UNIT_VIEWER_UNSUPPORTED_UNIT_TYPE");
    }
    return this._activeUnitId = var_core_value_sig4632.getUnitId(), var_core_value_sigE154.setCurrentUnitForType(var_core_value_sig4632.getUnitId()), var_core_value_sigE154.focusUnit(var_core_value_sig4632.getUnitId()), var_core_value_sig4632 instanceof t.Workbook ? this._observeSheetSelection(var_core_value_sig284F, var_core_value_sig4632) : var_core_value_sig4632 instanceof t.BaseDataModel && this._observeBaseSelection(var_core_value_sig284F, var_core_value_sig4632), var_core_value_sig4632;
  }
  setDecoration(var_core_value_sig2259) {
    let var_core_value_sig9E2F = this._univer;
    if (!var_core_value_sig9E2F || !this._activeUnitId || !var_core_value_sig2259) return;
    if (var_core_value_sig2259.kind === "sheet-range") {
      let var_core_value_sig27E5 = var_core_value_sig9E2F.__getInjector().get(t.IUniverInstanceService).getUnit(this._activeUnitId, t.UniverInstanceType["UNIVER_SHEET"]),
        var_core_value_sig8061 = (var_core_value_sig27E5 == null ? undefined : var_core_value_sig27E5.getSheetBySheetId(var_core_value_sig2259.sheetId)) ?? (var_core_value_sig27E5 == null ? undefined : var_core_value_sig27E5.getSheetBySheetName(var_core_value_sig2259.sheetName));
      if (!var_core_value_sig27E5 || !var_core_value_sig8061) return;
      var_core_value_sig27E5.setActiveSheet(var_core_value_sig8061), var_core_value_sig9E2F.__getInjector().get(t.IContextService).setContextValue(h.REF_SELECTIONS_ENABLED, true), var_core_value_sig9E2F.__getInjector().get(h.IRefSelectionsService).setSelections(var_core_value_sig27E5.getUnitId(), var_core_value_sig8061.getSheetId(), [...var_core_value_sig2259.selections]);
      return;
    }
    let var_core_value_sigD082 = var_core_value_sig9E2F.__getInjector().get(c.IBaseUIStateService);
    this._isApplyingDecoration = true;
    try {
      var_core_value_sigD082.activateTable(var_core_value_sig2259.selection["tableId"]), var_core_value_sigD082.activateView(var_core_value_sig2259.selection["viewId"]), var_core_value_sigD082.setSelection(var_core_value_sig2259.selection);
    } finally {
      this._isApplyingDecoration = false;
    }
  }
  dispose() {
    this._disposeUniver(), super.dispose();
  }
  _disposeUniver() {
    var var_core_value_sigDBB7;
    this._selectionDisposables["dispose"](), this._selectionDisposables = new t["DisposableCollection"](), (var_core_value_sigDBB7 = this._univer) == null || var_core_value_sigDBB7.dispose(), this._univer = null, this._container = null, this._activeUnitId = null, this._activeUnit = null;
  }
  _observeSheetSelection(var_core_value_sigD0A8, var_core_value_sigF4B9) {
    let var_core_value_sig5CEE = var_core_value_sigD0A8.__getInjector().get(t.IContextService);
    var_core_value_sig5CEE.setContextValue(h.REF_SELECTIONS_ENABLED, true), this._selectionDisposables["add"]((0, t.toDisposable)(() => {
      var_core_value_sig5CEE.setContextValue(h.REF_SELECTIONS_ENABLED, false);
    }));
    let var_core_value_sigE92A = var_core_value_sigD0A8.__getInjector().get(p.IRenderManagerService),
      var_core_value_sig362B = () => {
        var var_core_value_sig4D4C;
        let var_core_value_sigC9E0 = (var_core_value_sig4D4C = var_core_value_sigE92A.getRenderUnitById(var_core_value_sigF4B9.getUnitId())) == null ? undefined : var_core_value_sig4D4C.with(_.RefSelectionsRenderService);
        var_core_value_sigC9E0 && (this._selectionDisposables["add"](var_core_value_sigC9E0.enableSelectionChanging()), this._selectionDisposables["add"](var_core_value_sigC9E0.selectionMoveEnd$["subscribe"](var_core_value_sig2AD0 => {
          let var_core_value_sig3EEE = this._activeUnit,
            var_core_value_sigBC46 = var_core_value_sigF4B9.getActiveSheet();
          !var_core_value_sig3EEE || !var_core_value_sigBC46 || this._onSelection({
            kind: "sheet-range",
            ranges: var_core_value_sig2AD0.map(var_core_value_sig7524 => var_core_value_sig7524.rangeWithCoord),
            unit: var_core_value_sig3EEE,
            sheetId: var_core_value_sigBC46.getSheetId(),
            sheetName: var_core_value_sigBC46.getName()
          });
        })));
      };
    var_core_value_sig362B(), this._selectionDisposables["add"](var_core_value_sigE92A.created$["subscribe"](var_core_value_sig76BA => {
      var_core_value_sig76BA.unitId === var_core_value_sigF4B9.getUnitId() && var_core_value_sig362B();
    }));
  }
  _observeBaseSelection(var_core_value_sig5CA5, var_core_value_sigE90F) {
    var var_core_value_sigEFD4;
    let var_core_value_sig861B = var_core_value_sig5CA5.__getInjector().get(c.IBaseUIStateService),
      var_core_value_sig5237 = var_core_value_sigE90F.getSnapshot(),
      var_core_value_sigBB00 = var_core_value_sig5237.tableOrder[0] ?? Object.keys(var_core_value_sig5237.tables)[0],
      var_core_value_sig7E54 = var_core_value_sigBB00 ? var_core_value_sig5237.tables[var_core_value_sigBB00] : undefined,
      var_core_value_sig9A8D = (var_core_value_sig7E54 == null || (var_core_value_sigEFD4 = var_core_value_sig7E54.viewOrder) == null ? undefined : var_core_value_sigEFD4[0]) ?? Object.keys((var_core_value_sig7E54 == null ? undefined : var_core_value_sig7E54.views) ?? {})[0];
    var_core_value_sigBB00 && var_core_value_sig861B.activateTable(var_core_value_sigBB00), var_core_value_sig9A8D && var_core_value_sig861B.activateView(var_core_value_sig9A8D), this._selectionDisposables["add"](z(var_core_value_sig861B.state$, document, () => this._isApplyingDecoration, var_core_value_sigFBFA => {
      let var_core_value_sigF602 = this._activeUnit;
      var_core_value_sigF602 && this._onSelection({
        kind: "base-grid",
        unit: var_core_value_sigF602,
        selection: var_core_value_sigFBFA,
        tableId: var_core_value_sigFBFA.tableId,
        viewId: var_core_value_sigFBFA.viewId
      });
    }));
  }
  _makeBaseSnapshotReadOnly(var_core_value_sigC259) {
    Object.values(var_core_value_sigC259.tables).forEach(var_core_value_sig1BBD => {
      Object.values(var_core_value_sig1BBD.fields).forEach(var_core_value_sig3D7D => {
        var_core_value_sig3D7D.readonly = true;
      });
    });
  }
  _setBasePermissionsReadOnly(var_core_value_sig9C9F, var_core_value_sigFDEA) {
    let var_core_value_sig86D0 = var_core_value_sig9C9F.__getInjector().get(s.IBasePermissionService),
      var_core_value_sig4CD2 = var_core_value_sigFDEA.getSnapshot();
    var_core_value_sig86D0.setBasePermission(var_core_value_sigFDEA.getUnitId(), {
      createTable: false
    }), Object.values(var_core_value_sig4CD2.tables).forEach(var_core_value_sigF704 => {
      var_core_value_sig86D0.setTablePermission(var_core_value_sigF704.id, {
        edit: false,
        createField: false,
        createRecord: false,
        delete: false,
        manageView: false
      });
    });
  }
  _createUniver(var_core_value_sig48CA) {
    let var_core_value_sig50AF = this._configService["getConfig"](O),
      var_core_value_sigA942 = var_core_value_sig50AF == null ? undefined : var_core_value_sig50AF.workerURL,
      var_core_value_sigA621 = this._localeService["getCurrentLocale"](),
      var_core_value_sigBBFF = this._localeService["getLocales"](),
      var_core_value_sig8889 = new t["Univer"]({
        darkMode: this._themeService["darkMode"],
        direction: this._localeService["getDirection"](),
        locale: var_core_value_sigA621,
        ...(var_core_value_sigBBFF ? {
          locales: {
            [var_core_value_sigA621]: var_core_value_sigBBFF
          }
        } : null),
        override: I,
        theme: this._themeService["getCurrentTheme"]()
      }),
      var_core_value_sig32F8 = this._configService["getConfig"](a.LS_CONFIG_KEY);
    return var_core_value_sig32F8 && var_core_value_sig8889.registerPlugin(a.UniverLicensePlugin, {
      license: var_core_value_sig32F8.ls
    }), var_core_value_sigA942 && var_core_value_sig8889.registerPlugin(m.UniverRPCMainThreadPlugin, {
      workerURL: var_core_value_sigA942
    }), var_core_value_sig8889.registerPlugin(p.UniverRenderEnginePlugin), var_core_value_sig8889.registerPlugin(n.UniverUIPlugin, {
      container: var_core_value_sig48CA,
      contextMenu: false,
      disableAutoFocus: true,
      footer: true,
      header: false,
      headerMenu: false,
      toolbar: false
    }), var_core_value_sig8889.registerPlugin(u.UniverProFormulaEnginePlugin, {
      notExecuteFormula: !!var_core_value_sigA942
    }), var_core_value_sig8889.registerPlugin(d.UniverDocsPlugin), var_core_value_sig8889.registerPlugin(f.UniverDocsUIPlugin), var_core_value_sig8889.registerPlugin(h.UniverSheetsPlugin), var_core_value_sig8889.registerPlugin(g.UniverSheetsFormulaPlugin), var_core_value_sig8889.registerPlugin(v.UniverSheetsUIPlugin, {
      disableAutoFocus: true,
      disableEdit: true,
      footer: {
        addSheetButtonConfig: {
          show: false
        },
        menus: false,
        sheetBar: true,
        statisticBar: false,
        zoomSlider: false
      },
      formulaBar: false
    }), var_core_value_sig8889.registerPlugin(_.UniverSheetsFormulaUIPlugin, {
      functionScreenTips: false,
      menu: {}
    }), var_core_value_sig8889.registerPlugin(l.UniverCollaborationClientPlugin, {
      enableCollaboration: false,
      override: L,
      socketService: F
    }), var_core_value_sig8889.registerPlugin(s.UniverBasesPlugin), var_core_value_sig8889.registerPlugin(c.UniverBasesUIPlugin, {
      disableEdit: true,
      override: [[c.IBaseCanvasRootResolverService, {
        useValue: (0, c.createScopedBaseCanvasRootResolverService)(var_core_value_sig48CA)
      }]],
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
        route: false
      }
    }), var_core_value_sig8889;
  }
};
function z(var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sig3E68) {
  let var_core_value_sigF4C5 = null,
    var_core_value_sig5410 = var_core_value_sigB744.subscribe(var_core_value_sig5B67 => {
      if (var_core_value_sigE68A()) {
        var_core_value_sigF4C5 = null;
        return;
      }
      var_core_value_sigF4C5 = var_core_value_sig5B67.selection ?? null;
    }),
    var_core_value_sig492F = () => {
      var_core_value_sigF4C5 &&= (var_core_value_sig3E68(var_core_value_sigF4C5), null);
    };
  return P.forEach(var_core_value_sig1758 => var_core_value_sigEAE2.addEventListener(var_core_value_sig1758, var_core_value_sig492F)), (0, t.toDisposable)(() => {
    var_core_value_sig5410.unsubscribe(), P.forEach(var_core_value_sig2BCF => var_core_value_sigEAE2.removeEventListener(var_core_value_sig2BCF, var_core_value_sig492F));
  });
}
function B(var_core_value_sig8EA0, var_core_value_sigA6F6) {
  return function (var_core_value_sig4805, var_core_value_sigE67E) {
    var_core_value_sigA6F6(var_core_value_sig4805, var_core_value_sigE67E, var_core_value_sig8EA0);
  };
}
function V(var_core_value_sigCDDA, var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sig21B2) {
  var var_core_value_sigDE08 = arguments.length,
    var_core_value_sigACCB = var_core_value_sigDE08 < 3 ? var_core_value_sigE243 : var_core_value_sig21B2 === null ? var_core_value_sig21B2 = Object.getOwnPropertyDescriptor(var_core_value_sigE243, var_core_value_sig74A8) : var_core_value_sig21B2,
    var_core_value_sig7F33;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigACCB = Reflect.decorate(var_core_value_sigCDDA, var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sig21B2);else {
    for (var var_core_value_sig0C53 = var_core_value_sigCDDA.length - 1; var_core_value_sig0C53 >= 0; var_core_value_sig0C53--) (var_core_value_sig7F33 = var_core_value_sigCDDA[var_core_value_sig0C53]) && (var_core_value_sigACCB = (var_core_value_sigDE08 < 3 ? var_core_value_sig7F33(var_core_value_sigACCB) : var_core_value_sigDE08 > 3 ? var_core_value_sig7F33(var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sigACCB) : var_core_value_sig7F33(var_core_value_sigE243, var_core_value_sig74A8)) || var_core_value_sigACCB);
  }
  return var_core_value_sigDE08 > 3 && var_core_value_sigACCB && Object.defineProperty(var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sigACCB), var_core_value_sigACCB;
}
let H = function (var_core_value_sigEA04) {
    return var_core_value_sigEA04.Loading = "loading", var_core_value_sigEA04.Ready = "ready", var_core_value_sigEA04.Unavailable = "unavailable", var_core_value_sigEA04;
  }({}),
  U = function (var_core_value_sig7A62) {
    return var_core_value_sig7A62.SheetRange = "sheet-range", var_core_value_sig7A62.BaseGrid = "base-grid", var_core_value_sig7A62;
  }({});
const W = (0, t.createIdentifier)("embed-unit-ui.referenced-unit-viewer.service");
let G = class {
  constructor(var_core_value_sig2902, var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig2809) {
    this._catalog = var_core_value_sig2902, this._configService = var_core_value_sig9989, this._localeService = var_core_value_sig698E, this._themeService = var_core_value_sig2809;
  }
  createSession(var_core_value_sig2DAB = {}) {
    return new K(this._catalog, this._configService, this._localeService, this._themeService, var_core_value_sig2DAB);
  }
};
G = V([B(0, (0, t.Inject)(e.IReferencedUnitCatalogService)), B(1, t.IConfigService), B(2, (0, t.Inject)(t.LocaleService)), B(3, (0, t.Inject)(t.ThemeService))], G);
var K = class extends t.Disposable {
  constructor(var_core_value_sig877E, var_core_value_sig20C8, var_core_value_sigE9A7, var_core_value_sigBECE, var_core_value_sig1B22) {
    super(), this._catalog = var_core_value_sig877E, this._options = var_core_value_sig1B22, N(this, "_state$", new o["BehaviorSubject"]({
      activeUnit: null,
      units: [],
      status: "loading"
    })), N(this, "_selection$", new o.Subject()), N(this, "_runtime", undefined), N(this, "_container", null), N(this, "_decoration", null), N(this, "_generation", 0), N(this, "_lastSelectionKey", ""), N(this, "_isDisposed", false), N(this, "selection$", this._selection$["asObservable"]()), N(this, "state$", this._state$["asObservable"]()), this._runtime = new R(var_core_value_sig20C8, var_core_value_sigE9A7, var_core_value_sigBECE, var_core_value_sig0D69 => this._publishSelection(var_core_value_sig0D69)), this.disposeWithMe(this._runtime), this._initialize().catch(var_core_value_sig480E => {
      this._setState({
        ...this.getState(),
        error: var_core_value_sig480E,
        status: "unavailable"
      });
    });
  }
  getState() {
    return this._state$["getValue"]();
  }
  mount(var_core_value_sig7F72) {
    this._container = var_core_value_sig7F72, this._runtime["mount"](var_core_value_sig7F72);
    let var_core_value_sig7B2A = this.getState().activeUnit;
    var_core_value_sig7B2A && this._openUnit(var_core_value_sig7B2A).catch(var_core_value_sig26DB => {
      this._setState({
        ...this.getState(),
        error: var_core_value_sig26DB,
        status: "unavailable"
      });
    });
  }
  unmount(var_core_value_sig06CD) {
    this._container === var_core_value_sig06CD && (this._generation += 1, this._container = null, this._runtime["unmount"](var_core_value_sig06CD));
  }
  async activateUnit(var_core_value_sigA5F1) {
    this._lastSelectionKey = "", this._setState({
      activeUnit: var_core_value_sigA5F1,
      units: this.getState().units,
      status: "loading"
    }), this._container && (await this._openUnit(var_core_value_sigA5F1));
  }
  async refresh() {
    let var_core_value_sig97A2 = this.getState().activeUnit;
    var_core_value_sig97A2 && (this._setState({
      activeUnit: var_core_value_sig97A2,
      units: this.getState().units,
      status: "loading"
    }), await this._openUnit(var_core_value_sig97A2));
  }
  setDecoration(var_core_value_sig07E9) {
    this._decoration = var_core_value_sig07E9;
    let var_core_value_sig4F59 = this.getState().activeUnit;
    var_core_value_sig07E9 && var_core_value_sig4F59 && (0, e.getResourceRefUnitKey)(var_core_value_sig4F59.ref) === (0, e.getResourceRefUnitKey)(var_core_value_sig07E9.unit["ref"]) && this._runtime["setDecoration"](var_core_value_sig07E9);
  }
  dispose() {
    this._isDisposed = true, this._generation += 1, this._selection$["complete"](), this._state$["complete"](), super.dispose();
  }
  async _initialize() {
    let [var_core_value_sigF564, var_core_value_sig8CFA] = await Promise.all([this._catalog["listUnits"](t.UniverInstanceType["UNIVER_SHEET"]), this._catalog["listUnits"](t.UniverInstanceType["UNIVER_BASE"])]),
      var_core_value_sig2E11 = [...var_core_value_sigF564, ...var_core_value_sig8CFA];
    if (this._isDisposed) return;
    let var_core_value_sig5B69 = this._options["initialRef"],
      var_core_value_sigB098 = var_core_value_sig5B69 ? var_core_value_sig2E11.find(var_core_value_sigF0F9 => (0, e.getResourceRefUnitKey)(var_core_value_sigF0F9.ref) === (0, e.getResourceRefUnitKey)(var_core_value_sig5B69)) ?? null : this._options["initialRefRequired"] ? null : var_core_value_sig2E11[0] ?? null;
    this._setState({
      activeUnit: var_core_value_sigB098,
      units: var_core_value_sig2E11,
      status: var_core_value_sigB098 ? "loading" : "unavailable"
    }), var_core_value_sigB098 && this._container ? await this._openUnit(var_core_value_sigB098) : var_core_value_sigB098 || this._setState({
      activeUnit: null,
      units: var_core_value_sig2E11,
      status: "unavailable"
    });
  }
  async _openUnit(var_core_value_sigCE71) {
    let var_core_value_sig21D8 = ++this._generation;
    try {
      let var_core_value_sig1A0F = await this._catalog["loadUnit"](var_core_value_sigCE71);
      if (var_core_value_sig21D8 !== this._generation) return;
      let var_core_value_sigFBA4 = await this._runtime["open"](var_core_value_sigCE71, var_core_value_sig1A0F);
      if (var_core_value_sig21D8 !== this._generation) return;
      this._setState({
        activeUnit: var_core_value_sigCE71,
        units: this.getState().units,
        status: var_core_value_sigFBA4 ? "ready" : "loading"
      }), var_core_value_sigFBA4 && this._decoration && (0, e.getResourceRefUnitKey)(this._decoration["unit"].ref) === (0, e.getResourceRefUnitKey)(var_core_value_sigCE71.ref) && this._runtime["setDecoration"](this._decoration);
    } catch (var_core_value_sig4383) {
      throw var_core_value_sig21D8 === this._generation && this._setState({
        ...this.getState(),
        error: var_core_value_sig4383,
        status: "unavailable"
      }), var_core_value_sig4383;
    }
  }
  _publishSelection(var_core_value_sig2B65) {
    let var_core_value_sigD7EA = JSON.stringify(var_core_value_sig2B65.kind === "sheet-range" ? [var_core_value_sig2B65.kind, (0, e.getResourceRefUnitKey)(var_core_value_sig2B65.unit["ref"]), var_core_value_sig2B65.sheetId, var_core_value_sig2B65.ranges] : [var_core_value_sig2B65.kind, (0, e.getResourceRefUnitKey)(var_core_value_sig2B65.unit["ref"]), var_core_value_sig2B65.selection]);
    var_core_value_sigD7EA !== this._lastSelectionKey && (this._lastSelectionKey = var_core_value_sigD7EA, this._selection$["next"](var_core_value_sig2B65));
  }
  _setState(var_core_value_sigB33B) {
    this._isDisposed || this._state$["next"](var_core_value_sigB33B);
  }
};
let q = class extends t.Plugin {
  constructor(var_core_value_sig24B9 = k, var_core_value_sigE627, var_core_value_sigEF3E) {
    super(), this._config = var_core_value_sig24B9, this._injector = var_core_value_sigE627, this._configService = var_core_value_sigEF3E;
    let {
      ...var_core_value_sig273D
    } = (0, t.merge)({}, k, this._config);
    this._configService["setConfig"](O, var_core_value_sig273D);
  }
  onStarting() {
    [[W, {
      useClass: G
    }]].forEach(var_core_value_sig186C => this._injector["add"](var_core_value_sig186C));
  }
};
N(q, "pluginName", "UNIVER_EMBED_UNIT_UI_PLUGIN"), N(q, "packageName", E), N(q, "version", D), N(q, "type", t.UniverInstanceType["UNIVER_UNKNOWN"]), q = V([(0, t.DependentOn)(a.UniverLicensePlugin, e.UniverEmbedPlugin), B(1, (0, t.Inject)(t.Injector)), B(2, t.IConfigService)], q), exports.IReferencedUnitViewerService = W, exports.ReferencedUnitSelectionKind = U, exports.ReferencedUnitViewer = T, exports.ReferencedUnitViewerStatus = H, Object.defineProperty(exports, "UniverEmbedUnitUIPlugin", {
  enumerable: true,
  get: function () {
    return q;
  }
});
