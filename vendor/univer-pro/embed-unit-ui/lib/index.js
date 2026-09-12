import {
  IReferencedUnitCatalogService as _0x30a994,
  UniverEmbedPlugin as _0x1a2694,
  fromResourceRefUnitType as _0x378af9,
  getResourceRefUnitKey as _0x498173,
} from "@univerjs-pro/embed";
import {
  AuthzIoLocalService as _0x3f0109,
  BaseDataModel as _0x3b9fc2,
  DependentOn as _0x5f04b3,
  Disposable as _0x274842,
  DisposableCollection as _0x18b281,
  IAuthzIoService as _0x12c79e,
  IConfigService as _0x52d268,
  IContextService as _0x512955,
  IMentionIOService as _0x32d179,
  IUndoRedoService as _0x469b8e,
  IUniverInstanceService as _0x2ddc39,
  Inject as _0x41e6d0,
  Injector as _0x43ae4b,
  LocaleService as _0x4ab53e,
  MentionIOLocalService as _0x20ed2e,
  Plugin as _0x388cbd,
  ThemeService as _0x13c2a4,
  Tools as _0x4e40b6,
  Univer as _0x1d5824,
  UniverInstanceType as _0x5ebb0d,
  Workbook as _0x1aa91c,
  createIdentifier as _0x2d5c7e,
  merge as _0x1c85d4,
  toDisposable as _0x5437b8,
} from "@univerjs/core";
import {
  UniverUIPlugin as _0x67cfe7,
  useDependency as _0x33e25d,
  useObservable as _0xeb0997,
} from "@univerjs/ui";
import {
  createContext as _0x4cabe0,
  useContext as _0x16bfae,
  useEffect as _0x395be6,
  useMemo as _0x173333,
  useRef as _0x433ead,
} from "react";
import { jsx as _0x3ec3fb, jsxs as _0x5ccc32 } from "react/jsx-runtime";
import {
  LS_CONFIG_KEY as _0x556652,
  UniverLicensePlugin as _0x20e1cb,
} from "@univerjs-pro/license";
import { BehaviorSubject as _0x15906a, Subject as _0xdc9c82 } from "rxjs";
import {
  IBasePermissionService as _0x33d985,
  UniverBasesPlugin as _0x216424,
} from "@univerjs-pro/bases";
import {
  IBaseCanvasRootResolverService as _0x2193df,
  IBaseUIStateService as _0x1281c3,
  UniverBasesUIPlugin as _0x49dcaa,
  createScopedBaseCanvasRootResolverService as _0x2adb8b,
} from "@univerjs-pro/bases-ui";
import {
  IAttachmentIoService as _0x454644,
  UniverCollaborationClientPlugin as _0x121a88,
} from "@univerjs-pro/collaboration-client";
import { UniverProFormulaEnginePlugin as _0x48a006 } from "@univerjs-pro/engine-formula";
import { UniverDocsPlugin as _0x4a2eaf } from "@univerjs/docs";
import { UniverDocsUIPlugin as _0x50828b } from "@univerjs/docs-ui";
import {
  IRenderManagerService as _0x34647b,
  UniverRenderEnginePlugin as _0x4a0273,
} from "@univerjs/engine-render";
import { UniverRPCMainThreadPlugin as _0x34a030 } from "@univerjs/rpc";
import {
  IRefSelectionsService as _0xc8099c,
  REF_SELECTIONS_ENABLED as _0x59da16,
  UniverSheetsPlugin as _0x3693f2,
} from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin as _0x8e0327 } from "@univerjs/sheets-formula";
import {
  RefSelectionsRenderService as _0x27ce61,
  UniverSheetsFormulaUIPlugin as _0x2a2dab,
} from "@univerjs/sheets-formula-ui";
import { UniverSheetsUIPlugin as _0x59d61f } from "@univerjs/sheets-ui";
const H = _0x4cabe0(null);
function xe(_0x56c0b0) {
  let _0x4e41e2 = _0x173333(
      () => ({ session: _0x56c0b0.session }),
      [_0x56c0b0.session],
    ),
    _0x27fe1d = _0x433ead(new WeakMap());
  return (
    _0x395be6(() => {
      let _0x185bc6 = _0x27fe1d.current,
        _0x3a6eb7 = (_0x185bc6.get(_0x56c0b0.session) ?? 0) + 1;
      return (
        _0x185bc6.set(_0x56c0b0.session, _0x3a6eb7),
        () => {
          queueMicrotask(() => {
            _0x185bc6.get(_0x56c0b0.session) === _0x3a6eb7 &&
              (_0x185bc6.delete(_0x56c0b0.session),
              _0x56c0b0.session["dispose"]());
          });
        }
      );
    }, [_0x56c0b0.session]),
    _0x3ec3fb(H.Provider, { value: _0x4e41e2, children: _0x56c0b0.children })
  );
}
function Se(_0xfe7401) {
  return _0x3ec3fb("div", {
    className:
      "\n univer-flex univer-min-h-0 univer-w-full\n " +
      (_0xfe7401.className ?? "") +
      "\n ",
    style: _0xfe7401.style,
    children: _0xfe7401.children,
  });
}
function Ce() {
  let { session: _0x30831a } = U(),
    _0x467b42 = _0x33e25d(_0x4ab53e),
    _0x194655 = _0xeb0997(() => _0x30831a.state$, _0x30831a.getState(), false, [
      _0x30831a,
    ]);
  return _0x194655.units["length"] === 0
    ? null
    : _0x3ec3fb("nav", {
        "aria-label": _0x467b42.t("embed-unit-ui.referencedUnitViewer.title"),
        className:
          "univer-mr-3 univer-shrink-0 univer-overflow-y-auto univer-border-r univer-border-gray-300 univer-pr-2 dark:!univer-border-gray-700",
        style: { width: "clamp(9rem, 18vw, 13rem)" },
        children: _0x194655.units["map"]((_0x501ee6) => {
          let _0x8af219 = _0x501ee6 === _0x194655.activeUnit;
          return _0x5ccc32(
            "button",
            {
              "aria-current": _0x8af219,
              className:
                "\n univer-mb-1 univer-w-full univer-rounded univer-border-none univer-p-2 univer-text-left\n " +
                (_0x8af219
                  ? "univer-bg-primary-50 univer-text-primary-700"
                  : "univer-bg-transparent") +
                "\n ",
              type: "button",
              onClick: () =>
                _0x30831a.activateUnit(_0x501ee6).catch(() => undefined),
              children: [
                _0x3ec3fb("div", {
                  className:
                    "univer-truncate univer-text-sm univer-font-medium",
                  children: _0x501ee6.name,
                }),
                _0x3ec3fb("div", {
                  className: "univer-text-xs univer-text-gray-500",
                  children:
                    _0x378af9(_0x501ee6.ref["unit"].type) ===
                    _0x5ebb0d.UNIVER_SHEET
                      ? _0x467b42.t("embed-unit-ui.referencedUnitViewer.sheet")
                      : _0x467b42.t("embed-unit-ui.referencedUnitViewer.base"),
                }),
              ],
            },
            _0x498173(_0x501ee6.ref),
          );
        }),
      });
}
function we() {
  let { session: _0x3cf3a3 } = U(),
    _0x463cdb = _0x33e25d(_0x4ab53e),
    _0x40b5c7 = _0xeb0997(() => _0x3cf3a3.state$, _0x3cf3a3.getState(), false, [
      _0x3cf3a3,
    ]),
    _0x283e58 = _0x433ead(null),
    _0x3e2435 = _0x433ead(0);
  return (
    _0x395be6(() => {
      let _0x3c9472 = _0x3e2435.current + 1;
      _0x3e2435.current = _0x3c9472;
      let _0x146116 = _0x283e58.current;
      return (
        _0x146116 && _0x3cf3a3.mount(_0x146116),
        () => {
          _0x146116 &&
            queueMicrotask(() => {
              _0x3e2435.current === _0x3c9472 && _0x3cf3a3.unmount(_0x146116);
            });
        }
      );
    }, [_0x3cf3a3]),
    _0x5ccc32("div", {
      className:
        "univer-relative univer-min-h-0 univer-flex-1 univer-overflow-hidden univer-rounded univer-border univer-border-gray-200",
      children: [
        _0x3ec3fb("div", {
          className: "univer-size-full univer-overflow-auto",
          ref: _0x283e58,
        }),
        _0x40b5c7.status !== "ready" &&
          _0x3ec3fb("div", {
            className:
              "dark:!univer-bg-gray-900/90\x20univer-absolute\x20univer-inset-0\x20univer-flex\x20univer-items-center\x20univer-justify-center\x20univer-bg-white/90\x20univer-p-6\x20univer-text-center\x20univer-text-sm\x20univer-text-gray-500\x20dark:!univer-text-gray-400",
            role: "status",
            children:
              _0x40b5c7.status === "loading"
                ? _0x463cdb.t("embed-unit-ui.referencedUnitViewer.loading")
                : _0x463cdb.t(
                    _0x40b5c7.error
                      ? "embed-unit-ui.referencedUnitViewer.unavailable"
                      : "embed-unit-ui.referencedUnitViewer.empty",
                  ),
          }),
      ],
    })
  );
}
function U() {
  let _0x291475 = _0x16bfae(H);
  if (!_0x291475) throw Error("REFERENCED_UNIT_VIEWER_PROVIDER_REQUIRED");
  return _0x291475;
}
const Te = { Frame: Se, Provider: xe, UnitList: Ce, Viewport: we };
var Ee = "@univerjs-pro/embed-unit-ui",
  De = "1.0.0-insiders.20260907-70fc579";
const W = "embed-unit-ui.config",
  G = {};
function K(_0x5f23cb) {
  "@babel/helpers - typeof";
  return (
    (K =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5a5fbd) {
            return typeof _0x5a5fbd;
          }
        : function (_0x13c959) {
            return _0x13c959 &&
              typeof Symbol == "function" &&
              _0x13c959.constructor === Symbol &&
              _0x13c959 !== Symbol.prototype
              ? "symbol"
              : typeof _0x13c959;
          }),
    K(_0x5f23cb)
  );
}
function Oe(_0x2f292e, _0x41dd8b) {
  if (K(_0x2f292e) != "object" || !_0x2f292e) return _0x2f292e;
  var _0xaebed0 = _0x2f292e[Symbol.toPrimitive];
  if (_0xaebed0 !== undefined) {
    var _0x42b752 = _0xaebed0.call(_0x2f292e, _0x41dd8b || "default");
    if (K(_0x42b752) != "object") return _0x42b752;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x41dd8b === "string" ? String : Number)(_0x2f292e);
}
function ke(_0x23cf63) {
  var _0x535353 = Oe(_0x23cf63, "string");
  return K(_0x535353) == "symbol" ? _0x535353 : _0x535353 + "";
}
function q(_0x4c8d83, _0x45786a, _0x15f811) {
  return (
    (_0x45786a = ke(_0x45786a)) in _0x4c8d83
      ? Object.defineProperty(_0x4c8d83, _0x45786a, {
          value: _0x15f811,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4c8d83[_0x45786a] = _0x15f811),
    _0x4c8d83
  );
}
const J = ["pointerup", "mouseup", "keyup"];
var Ae = class {
  createSocket() {
    return Promise.resolve(null);
  }
};
const je = [
    [_0x12c79e, null],
    [_0x469b8e, null],
    [_0x32d179, null],
  ],
  Me = [
    [_0x12c79e, { useClass: _0x3f0109 }],
    [_0x454644, null],
    [_0x32d179, { useClass: _0x20ed2e }],
  ];
var Ne = class extends _0x274842 {
  constructor(_0x325de3, _0xca8ac1, _0x3eb5b8, _0x251879) {
    (super(),
      (this._configService = _0x325de3),
      (this._localeService = _0xca8ac1),
      (this._themeService = _0x3eb5b8),
      (this._onSelection = _0x251879),
      q(this, "_univer", null),
      q(this, "_container", null),
      q(this, "_activeUnitId", null),
      q(this, "_activeUnit", null),
      q(this, "_isApplyingDecoration", false),
      q(this, "_selectionDisposables", new _0x18b281()));
  }
  mount(_0x12deed) {
    (this._container === _0x12deed && this._univer) ||
      (this._disposeUniver(),
      (this._container = _0x12deed),
      (this._univer = this._createUniver(_0x12deed)));
  }
  unmount(_0x258fc3) {
    this._container === _0x258fc3 && this._disposeUniver();
  }
  async open(_0x153fdd, _0x5e277c) {
    let _0x239c3e = this._univer;
    if (!_0x239c3e) return null;
    let _0x105887 = _0x239c3e.__getInjector().get(_0x2ddc39);
    (this._selectionDisposables["dispose"](),
      (this._selectionDisposables = new _0x18b281()),
      this._activeUnitId && _0x105887.disposeUnit(this._activeUnitId),
      (this._activeUnit = _0x153fdd));
    let _0x3d79af,
      _0x3fb10f = _0x378af9(_0x153fdd.ref["unit"].type);
    if (_0x3fb10f === _0x5ebb0d.UNIVER_SHEET)
      _0x3d79af = _0x239c3e.createUnit(
        _0x3fb10f,
        _0x4e40b6.deepClone(_0x5e277c),
      );
    else {
      if (_0x3fb10f === _0x5ebb0d.UNIVER_BASE) {
        let _0x132fd8 = _0x4e40b6.deepClone(_0x5e277c);
        (this._makeBaseSnapshotReadOnly(_0x132fd8),
          (_0x132fd8.id =
            "__referenced_unit_viewer_base__" + _0x153fdd.ref["unit"].selector),
          (_0x3d79af = _0x239c3e.createUnit(_0x3fb10f, _0x132fd8)),
          this._setBasePermissionsReadOnly(_0x239c3e, _0x3d79af));
      } else throw Error("REFERENCED_UNIT_VIEWER_UNSUPPORTED_UNIT_TYPE");
    }
    return (
      (this._activeUnitId = _0x3d79af.getUnitId()),
      _0x105887.setCurrentUnitForType(_0x3d79af.getUnitId()),
      _0x105887.focusUnit(_0x3d79af.getUnitId()),
      _0x3d79af instanceof _0x1aa91c
        ? this._observeSheetSelection(_0x239c3e, _0x3d79af)
        : _0x3d79af instanceof _0x3b9fc2 &&
          this._observeBaseSelection(_0x239c3e, _0x3d79af),
      _0x3d79af
    );
  }
  setDecoration(_0x321214) {
    let _0x557306 = this._univer;
    if (!_0x557306 || !this._activeUnitId || !_0x321214) return;
    if (_0x321214.kind === "sheet-range") {
      let _0x4573c9 = _0x557306
          .__getInjector()
          .get(_0x2ddc39)
          .getUnit(this._activeUnitId, _0x5ebb0d.UNIVER_SHEET),
        _0x571597 =
          (_0x4573c9 == null
            ? undefined
            : _0x4573c9.getSheetBySheetId(_0x321214.sheetId)) ??
          (_0x4573c9 == null
            ? undefined
            : _0x4573c9.getSheetBySheetName(_0x321214.sheetName));
      if (!_0x4573c9 || !_0x571597) return;
      (_0x4573c9.setActiveSheet(_0x571597),
        _0x557306
          .__getInjector()
          .get(_0x512955)
          .setContextValue(_0x59da16, true),
        _0x557306
          .__getInjector()
          .get(_0xc8099c)
          .setSelections(_0x4573c9.getUnitId(), _0x571597.getSheetId(), [
            ..._0x321214.selections,
          ]));
      return;
    }
    let _0x5541d6 = _0x557306.__getInjector().get(_0x1281c3);
    this._isApplyingDecoration = true;
    try {
      (_0x5541d6.activateTable(_0x321214.selection["tableId"]),
        _0x5541d6.activateView(_0x321214.selection["viewId"]),
        _0x5541d6.setSelection(_0x321214.selection));
    } finally {
      this._isApplyingDecoration = false;
    }
  }
  dispose() {
    (this._disposeUniver(), super.dispose());
  }
  _disposeUniver() {
    var _0x5b0ab1;
    (this._selectionDisposables["dispose"](),
      (this._selectionDisposables = new _0x18b281()),
      (_0x5b0ab1 = this._univer) == null || _0x5b0ab1.dispose(),
      (this._univer = null),
      (this._container = null),
      (this._activeUnitId = null),
      (this._activeUnit = null));
  }
  _observeSheetSelection(_0x4aeb96, _0xfd1f78) {
    let _0x2549fd = _0x4aeb96.__getInjector().get(_0x512955);
    (_0x2549fd.setContextValue(_0x59da16, true),
      this._selectionDisposables["add"](
        _0x5437b8(() => {
          _0x2549fd.setContextValue(_0x59da16, false);
        }),
      ));
    let _0x363247 = _0x4aeb96.__getInjector().get(_0x34647b),
      _0x8128ab = () => {
        var _0x4410c8;
        let _0x31cf88 =
          (_0x4410c8 = _0x363247.getRenderUnitById(_0xfd1f78.getUnitId())) ==
          null
            ? undefined
            : _0x4410c8.with(_0x27ce61);
        _0x31cf88 &&
          (this._selectionDisposables["add"](
            _0x31cf88.enableSelectionChanging(),
          ),
          this._selectionDisposables["add"](
            _0x31cf88.selectionMoveEnd$["subscribe"]((_0x49e3aa) => {
              let _0x6adf9a = this._activeUnit,
                _0x452746 = _0xfd1f78.getActiveSheet();
              !_0x6adf9a ||
                !_0x452746 ||
                this._onSelection({
                  kind: "sheet-range",
                  ranges: _0x49e3aa.map(
                    (_0x18fbca) => _0x18fbca.rangeWithCoord,
                  ),
                  unit: _0x6adf9a,
                  sheetId: _0x452746.getSheetId(),
                  sheetName: _0x452746.getName(),
                });
            }),
          ));
      };
    (_0x8128ab(),
      this._selectionDisposables["add"](
        _0x363247.created$["subscribe"]((_0x5d95dc) => {
          _0x5d95dc.unitId === _0xfd1f78.getUnitId() && _0x8128ab();
        }),
      ));
  }
  _observeBaseSelection(_0x3ce6e2, _0x5dcc19) {
    var _0x3c1efd;
    let _0x2cc894 = _0x3ce6e2.__getInjector().get(_0x1281c3),
      _0x397485 = _0x5dcc19.getSnapshot(),
      _0x1e84b4 = _0x397485.tableOrder[0] ?? Object.keys(_0x397485.tables)[0],
      _0x2cfec9 = _0x1e84b4 ? _0x397485.tables[_0x1e84b4] : undefined,
      _0x54e37 =
        (_0x2cfec9 == null || (_0x3c1efd = _0x2cfec9.viewOrder) == null
          ? undefined
          : _0x3c1efd[0]) ??
        Object.keys((_0x2cfec9 == null ? undefined : _0x2cfec9.views) ?? {})[0];
    (_0x1e84b4 && _0x2cc894.activateTable(_0x1e84b4),
      _0x54e37 && _0x2cc894.activateView(_0x54e37),
      this._selectionDisposables["add"](
        Pe(
          _0x2cc894.state$,
          document,
          () => this._isApplyingDecoration,
          (_0x390610) => {
            let _0x2451a0 = this._activeUnit;
            _0x2451a0 &&
              this._onSelection({
                kind: "base-grid",
                unit: _0x2451a0,
                selection: _0x390610,
                tableId: _0x390610.tableId,
                viewId: _0x390610.viewId,
              });
          },
        ),
      ));
  }
  _makeBaseSnapshotReadOnly(_0x246955) {
    Object.values(_0x246955.tables).forEach((_0xbd8e78) => {
      Object.values(_0xbd8e78.fields).forEach((_0x54e5ac) => {
        _0x54e5ac.readonly = true;
      });
    });
  }
  _setBasePermissionsReadOnly(_0x2ce59a, _0x4a2aa2) {
    let _0x1d3180 = _0x2ce59a.__getInjector().get(_0x33d985),
      _0x1c94b8 = _0x4a2aa2.getSnapshot();
    (_0x1d3180.setBasePermission(_0x4a2aa2.getUnitId(), { createTable: false }),
      Object.values(_0x1c94b8.tables).forEach((_0x473a15) => {
        _0x1d3180.setTablePermission(_0x473a15.id, {
          edit: false,
          createField: false,
          createRecord: false,
          delete: false,
          manageView: false,
        });
      }));
  }
  _createUniver(_0x3e414b) {
    let _0x16b3fc = this._configService["getConfig"](W),
      _0x321673 = _0x16b3fc == null ? undefined : _0x16b3fc.workerURL,
      _0x31b3b0 = this._localeService["getCurrentLocale"](),
      _0x24cb7d = this._localeService["getLocales"](),
      _0x1bde4e = new _0x1d5824({
        darkMode: this._themeService["darkMode"],
        direction: this._localeService["getDirection"](),
        locale: _0x31b3b0,
        ...(_0x24cb7d ? { locales: { [_0x31b3b0]: _0x24cb7d } } : null),
        override: je,
        theme: this._themeService["getCurrentTheme"](),
      }),
      _0x3e5472 = this._configService["getConfig"](_0x556652);
    return (
      _0x3e5472 &&
        _0x1bde4e.registerPlugin(_0x20e1cb, { license: _0x3e5472.ls }),
      _0x321673 &&
        _0x1bde4e.registerPlugin(_0x34a030, { workerURL: _0x321673 }),
      _0x1bde4e.registerPlugin(_0x4a0273),
      _0x1bde4e.registerPlugin(_0x67cfe7, {
        container: _0x3e414b,
        contextMenu: false,
        disableAutoFocus: true,
        footer: true,
        header: false,
        headerMenu: false,
        toolbar: false,
      }),
      _0x1bde4e.registerPlugin(_0x48a006, { notExecuteFormula: !!_0x321673 }),
      _0x1bde4e.registerPlugin(_0x4a2eaf),
      _0x1bde4e.registerPlugin(_0x50828b),
      _0x1bde4e.registerPlugin(_0x3693f2),
      _0x1bde4e.registerPlugin(_0x8e0327),
      _0x1bde4e.registerPlugin(_0x59d61f, {
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
      _0x1bde4e.registerPlugin(_0x2a2dab, {
        functionScreenTips: false,
        menu: {},
      }),
      _0x1bde4e.registerPlugin(_0x121a88, {
        enableCollaboration: false,
        override: Me,
        socketService: Ae,
      }),
      _0x1bde4e.registerPlugin(_0x216424),
      _0x1bde4e.registerPlugin(_0x49dcaa, {
        disableEdit: true,
        override: [[_0x2193df, { useValue: _0x2adb8b(_0x3e414b) }]],
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
      _0x1bde4e
    );
  }
};
function Pe(_0x5a62cf, _0x124115, _0x2b593a, _0x462640) {
  let _0x37ffae = null,
    _0x55b582 = _0x5a62cf.subscribe((_0x5c9cd6) => {
      if (_0x2b593a()) {
        _0x37ffae = null;
        return;
      }
      _0x37ffae = _0x5c9cd6.selection ?? null;
    }),
    _0x465ced = () => {
      _0x37ffae &&= (_0x462640(_0x37ffae), null);
    };
  return (
    J.forEach((_0x1ea5d7) => _0x124115.addEventListener(_0x1ea5d7, _0x465ced)),
    _0x5437b8(() => {
      (_0x55b582.unsubscribe(),
        J.forEach((_0x3a77f5) =>
          _0x124115.removeEventListener(_0x3a77f5, _0x465ced),
        ));
    })
  );
}
function Y(_0xc0b2a9, _0xa2255a) {
  return function (_0x59f260, _0x26ef0f) {
    _0xa2255a(_0x59f260, _0x26ef0f, _0xc0b2a9);
  };
}
function X(_0x5874d7, _0x713489, _0x59d309, _0x39ad0b) {
  var _0x5e3ffa = arguments.length,
    _0x59f98c =
      _0x5e3ffa < 3
        ? _0x713489
        : _0x39ad0b === null
          ? (_0x39ad0b = Object.getOwnPropertyDescriptor(_0x713489, _0x59d309))
          : _0x39ad0b,
    _0x3d72ac;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x59f98c = Reflect.decorate(_0x5874d7, _0x713489, _0x59d309, _0x39ad0b);
  else {
    for (var _0x2056d7 = _0x5874d7.length - 1; _0x2056d7 >= 0; _0x2056d7--)
      (_0x3d72ac = _0x5874d7[_0x2056d7]) &&
        (_0x59f98c =
          (_0x5e3ffa < 3
            ? _0x3d72ac(_0x59f98c)
            : _0x5e3ffa > 3
              ? _0x3d72ac(_0x713489, _0x59d309, _0x59f98c)
              : _0x3d72ac(_0x713489, _0x59d309)) || _0x59f98c);
  }
  return (
    _0x5e3ffa > 3 &&
      _0x59f98c &&
      Object.defineProperty(_0x713489, _0x59d309, _0x59f98c),
    _0x59f98c
  );
}
let Fe = (function (_0x1aaba1) {
    return (
      (_0x1aaba1.Loading = "loading"),
      (_0x1aaba1.Ready = "ready"),
      (_0x1aaba1.Unavailable = "unavailable"),
      _0x1aaba1
    );
  })({}),
  Ie = (function (_0x24aa8e) {
    return (
      (_0x24aa8e.SheetRange = "sheet-range"),
      (_0x24aa8e.BaseGrid = "base-grid"),
      _0x24aa8e
    );
  })({});
const Z = _0x2d5c7e("embed-unit-ui.referenced-unit-viewer.service");
let Q = class {
  constructor(_0xe22ccc, _0x28604c, _0x2cdcec, _0x58fd33) {
    ((this._catalog = _0xe22ccc),
      (this._configService = _0x28604c),
      (this._localeService = _0x2cdcec),
      (this._themeService = _0x58fd33));
  }
  createSession(_0x1daff2 = {}) {
    return new Le(
      this._catalog,
      this._configService,
      this._localeService,
      this._themeService,
      _0x1daff2,
    );
  }
};
Q = X(
  [
    Y(0, _0x41e6d0(_0x30a994)),
    Y(1, _0x52d268),
    Y(2, _0x41e6d0(_0x4ab53e)),
    Y(3, _0x41e6d0(_0x13c2a4)),
  ],
  Q,
);
var Le = class extends _0x274842 {
  constructor(_0xa9840b, _0x270223, _0x2f2eac, _0x3f8283, _0x366422) {
    (super(),
      (this._catalog = _0xa9840b),
      (this._options = _0x366422),
      q(
        this,
        "_state$",
        new _0x15906a({ activeUnit: null, units: [], status: "loading" }),
      ),
      q(this, "_selection$", new _0xdc9c82()),
      q(this, "_runtime", undefined),
      q(this, "_container", null),
      q(this, "_decoration", null),
      q(this, "_generation", 0),
      q(this, "_lastSelectionKey", ""),
      q(this, "_isDisposed", false),
      q(this, "selection$", this._selection$["asObservable"]()),
      q(this, "state$", this._state$["asObservable"]()),
      (this._runtime = new Ne(_0x270223, _0x2f2eac, _0x3f8283, (_0x1331a0) =>
        this._publishSelection(_0x1331a0),
      )),
      this.disposeWithMe(this._runtime),
      this._initialize().catch((_0x37f387) => {
        this._setState({
          ...this.getState(),
          error: _0x37f387,
          status: "unavailable",
        });
      }));
  }
  getState() {
    return this._state$["getValue"]();
  }
  mount(_0x38123c) {
    ((this._container = _0x38123c), this._runtime["mount"](_0x38123c));
    let _0xb8c19e = this.getState().activeUnit;
    _0xb8c19e &&
      this._openUnit(_0xb8c19e).catch((_0x18db17) => {
        this._setState({
          ...this.getState(),
          error: _0x18db17,
          status: "unavailable",
        });
      });
  }
  unmount(_0x30ffda) {
    this._container === _0x30ffda &&
      ((this._generation += 1),
      (this._container = null),
      this._runtime["unmount"](_0x30ffda));
  }
  async activateUnit(_0x138e67) {
    ((this._lastSelectionKey = ""),
      this._setState({
        activeUnit: _0x138e67,
        units: this.getState().units,
        status: "loading",
      }),
      this._container && (await this._openUnit(_0x138e67)));
  }
  async refresh() {
    let _0x257278 = this.getState().activeUnit;
    _0x257278 &&
      (this._setState({
        activeUnit: _0x257278,
        units: this.getState().units,
        status: "loading",
      }),
      await this._openUnit(_0x257278));
  }
  setDecoration(_0x53c9af) {
    this._decoration = _0x53c9af;
    let _0x30ec1b = this.getState().activeUnit;
    _0x53c9af &&
      _0x30ec1b &&
      _0x498173(_0x30ec1b.ref) === _0x498173(_0x53c9af.unit["ref"]) &&
      this._runtime["setDecoration"](_0x53c9af);
  }
  dispose() {
    ((this._isDisposed = true),
      (this._generation += 1),
      this._selection$["complete"](),
      this._state$["complete"](),
      super.dispose());
  }
  async _initialize() {
    let [_0x2deb8f, _0x216326] = await Promise.all([
        this._catalog["listUnits"](_0x5ebb0d.UNIVER_SHEET),
        this._catalog["listUnits"](_0x5ebb0d.UNIVER_BASE),
      ]),
      _0x1293d8 = [..._0x2deb8f, ..._0x216326];
    if (this._isDisposed) return;
    let _0x215d48 = this._options["initialRef"],
      _0x5f889 = _0x215d48
        ? (_0x1293d8.find(
            (_0xbfebfb) => _0x498173(_0xbfebfb.ref) === _0x498173(_0x215d48),
          ) ?? null)
        : this._options["initialRefRequired"]
          ? null
          : (_0x1293d8[0] ?? null);
    (this._setState({
      activeUnit: _0x5f889,
      units: _0x1293d8,
      status: _0x5f889 ? "loading" : "unavailable",
    }),
      _0x5f889 && this._container
        ? await this._openUnit(_0x5f889)
        : _0x5f889 ||
          this._setState({
            activeUnit: null,
            units: _0x1293d8,
            status: "unavailable",
          }));
  }
  async _openUnit(_0x57e9eb) {
    let _0x44eb5a = ++this._generation;
    try {
      let _0x9e7343 = await this._catalog["loadUnit"](_0x57e9eb);
      if (_0x44eb5a !== this._generation) return;
      let _0x5e12b7 = await this._runtime["open"](_0x57e9eb, _0x9e7343);
      if (_0x44eb5a !== this._generation) return;
      (this._setState({
        activeUnit: _0x57e9eb,
        units: this.getState().units,
        status: _0x5e12b7 ? "ready" : "loading",
      }),
        _0x5e12b7 &&
          this._decoration &&
          _0x498173(this._decoration["unit"].ref) ===
            _0x498173(_0x57e9eb.ref) &&
          this._runtime["setDecoration"](this._decoration));
    } catch (_0x34fd25) {
      throw (
        _0x44eb5a === this._generation &&
          this._setState({
            ...this.getState(),
            error: _0x34fd25,
            status: "unavailable",
          }),
        _0x34fd25
      );
    }
  }
  _publishSelection(_0x2536f0) {
    let _0x154c85 = JSON.stringify(
      _0x2536f0.kind === "sheet-range"
        ? [
            _0x2536f0.kind,
            _0x498173(_0x2536f0.unit["ref"]),
            _0x2536f0.sheetId,
            _0x2536f0.ranges,
          ]
        : [
            _0x2536f0.kind,
            _0x498173(_0x2536f0.unit["ref"]),
            _0x2536f0.selection,
          ],
    );
    _0x154c85 !== this._lastSelectionKey &&
      ((this._lastSelectionKey = _0x154c85),
      this._selection$["next"](_0x2536f0));
  }
  _setState(_0x4465b1) {
    this._isDisposed || this._state$["next"](_0x4465b1);
  }
};
let $ = class extends _0x388cbd {
  constructor(_0x2b98c3 = G, _0x5412e5, _0x2a9848) {
    (super(),
      (this._config = _0x2b98c3),
      (this._injector = _0x5412e5),
      (this._configService = _0x2a9848));
    let { ..._0x24e2e4 } = _0x1c85d4({}, G, this._config);
    this._configService["setConfig"](W, _0x24e2e4);
  }
  onStarting() {
    [[Z, { useClass: Q }]].forEach((_0x54fd03) =>
      this._injector["add"](_0x54fd03),
    );
  }
};
(q($, "pluginName", "UNIVER_EMBED_UNIT_UI_PLUGIN"),
  q($, "packageName", Ee),
  q($, "version", De),
  q($, "type", _0x5ebb0d.UNIVER_UNKNOWN),
  ($ = X(
    [
      _0x5f04b3(_0x20e1cb, _0x1a2694),
      Y(1, _0x41e6d0(_0x43ae4b)),
      Y(2, _0x52d268),
    ],
    $,
  )));
export {
  Z as IReferencedUnitViewerService,
  Ie as ReferencedUnitSelectionKind,
  Te as ReferencedUnitViewer,
  Fe as ReferencedUnitViewerStatus,
  $ as UniverEmbedUnitUIPlugin,
};
