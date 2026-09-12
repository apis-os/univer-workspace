Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/bases-ui"),
  t = require("@univerjs/core"),
  n = require("@univerjs/core/facade");
var r = class {
  constructor(_0x29fc09, _0x3fe236, _0x136b81) {
    ((this._viewId = _0x29fc09),
      (this._viewType = _0x3fe236),
      (this._controller = _0x136b81));
  }
  getViewId() {
    return this._viewId;
  }
  getViewType() {
    return this._viewType;
  }
  getViewport() {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  refresh() {
    this._controller["invalidate"]();
  }
  hitTest(_0x23cab2, _0x1c2f3c) {
    let _0x4d909d = this._controller["hitTest"](_0x23cab2, _0x1c2f3c);
    switch (_0x4d909d == null ? undefined : _0x4d909d.type) {
      case "grid-attachment-add":
      case "grid-attachment-expand":
      case "grid-attachment-item":
        return {
          type: "grid-cell",
          tableId: _0x4d909d.tableId,
          viewId: _0x4d909d.viewId,
          recordId: _0x4d909d.recordId,
          fieldId: _0x4d909d.fieldId,
          virtual: _0x4d909d.virtual,
        };
      default:
        return _0x4d909d;
    }
  }
};
function i(_0x2aa59d) {
  "@babel/helpers - typeof";
  return (
    (i =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x83b5fb) {
            return typeof _0x83b5fb;
          }
        : function (_0x1d00fc) {
            return _0x1d00fc &&
              typeof Symbol == "function" &&
              _0x1d00fc.constructor === Symbol &&
              _0x1d00fc !== Symbol.prototype
              ? "symbol"
              : typeof _0x1d00fc;
          }),
    i(_0x2aa59d)
  );
}
function a(_0x2f37ad, _0x5df5c5) {
  if (i(_0x2f37ad) != "object" || !_0x2f37ad) return _0x2f37ad;
  var _0x3f7a52 = _0x2f37ad[Symbol.toPrimitive];
  if (_0x3f7a52 !== undefined) {
    var _0xacd86a = _0x3f7a52.call(_0x2f37ad, _0x5df5c5 || "default");
    if (i(_0xacd86a) != "object") return _0xacd86a;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x5df5c5 === "string" ? String : Number)(_0x2f37ad);
}
function o(_0x2a5340) {
  var _0x9c64ce = _0x4273ee,
    _0x1e5ed3 = a(_0x2a5340, "string");
  return i(_0x1e5ed3) == _0x9c64ce(403) ? _0x1e5ed3 : _0x1e5ed3 + "";
}
function s(_0x1d6539, _0x5a586c, _0x194425) {
  return (
    (_0x5a586c = o(_0x5a586c)) in _0x1d6539
      ? Object.defineProperty(_0x1d6539, _0x5a586c, {
          value: _0x194425,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x1d6539[_0x5a586c] = _0x194425),
    _0x1d6539
  );
}
var c = class {
    constructor(
      _0xf254ec,
      _0x4cfcd6,
      _0x3518fb = new e.BaseEditorService(_0xf254ec),
      _0x1623ee,
    ) {
      ((this._stateService = _0xf254ec),
        (this._selectionService = _0x4cfcd6),
        (this._editorService = _0x3518fb),
        (this._configService = _0x1623ee),
        s(this, "_localConfig", {}));
    }
    getActiveTableId() {
      return this._stateService["getState"]().activeTableId ?? null;
    }
    getActiveViewId() {
      return this._stateService["getState"]().activeViewId ?? null;
    }
    async activateTable(_0x24e61f) {
      this._stateService["activateTable"](_0x24e61f);
    }
    async activateView(_0x308212) {
      this._stateService["activateView"](_0x308212);
    }
    getSelection() {
      return this._selectionService["getSelection"]();
    }
    setSelection(_0x1b2417) {
      this._selectionService["setSelection"](_0x1b2417);
    }
    scrollToRecord(_0x5032e8, _0x528709 = {}) {
      let _0x45d633 = _0x528709.viewId ?? this.getActiveViewId();
      _0x45d633 &&
        this._stateService["setScrollState"](_0x45d633, {
          x: _0x528709.x ?? 0,
          y: _0x528709.y ?? 0,
        });
    }
    scrollToField(_0x3fa6f1, _0x15f5bc = {}) {
      let _0x1aa5f5 = _0x15f5bc.viewId ?? this.getActiveViewId();
      _0x1aa5f5 &&
        this._stateService["setScrollState"](_0x1aa5f5, {
          x: _0x15f5bc.x ?? 0,
          y: _0x15f5bc.y ?? 0,
        });
    }
    startEditingCell(_0x5867b7) {
      this._editorService["startEditingCell"](_0x5867b7);
    }
    stopEditingCell() {
      this._editorService["stopEditingCell"]();
    }
    openLeftSidebar() {
      this._stateService["setLeftSidebarVisible"](true);
    }
    closeLeftSidebar() {
      this._stateService["setLeftSidebarVisible"](false);
    }
    openRightSidebar() {
      this._stateService["setRightSidebarVisible"](true);
    }
    closeRightSidebar() {
      this._stateService["setRightSidebarVisible"](false);
    }
    openRecordDetail(_0x38d557) {
      this._stateService["openRecordDetail"](_0x38d557);
    }
    openDraftRecordDetail(_0x2402ad = {}) {
      this._stateService["openDraftRecordDetail"](_0x2402ad);
    }
    closeRecordDetail() {
      this._stateService["closeRecordDetail"]();
    }
    openFieldConfigPanel(_0x3eefcd) {
      this._stateService["getState"]().openPanels["fieldConfig"] = _0x3eefcd;
    }
    openViewSettingsPanel(_0x50e57e) {
      this._stateService["getState"]().openPanels["viewSettings"] = _0x50e57e;
    }
    getPersonOptions() {
      return [...(this._getBaseUIConfig().personOptions ?? [])];
    }
    setPersonOptions(_0x3c5d57) {
      this._updateBaseUIConfig({ personOptions: _0x3c5d57 });
    }
    getGroupOptions() {
      return [...(this._getBaseUIConfig().groupOptions ?? [])];
    }
    setGroupOptions(_0x270088) {
      this._updateBaseUIConfig({ groupOptions: _0x270088 });
    }
    getRenderedView() {
      return null;
    }
    _getBaseUIConfig() {
      var _0x45a5f8 = _0x4273ee,
        _0x2a8a87;
      return (
        ((_0x2a8a87 = this[_0x45a5f8(454)]) == null
          ? undefined
          : _0x2a8a87[_0x45a5f8(420)](e.BASES_UI_PLUGIN_CONFIG_KEY)) ??
        this[_0x45a5f8(446)]
      );
    }
    _updateBaseUIConfig(_0xfd5b56) {
      var _0xb689b6 = _0x4273ee,
        _0x190def;
      ((this[_0xb689b6(446)] = { ...this._getBaseUIConfig(), ..._0xfd5b56 }),
        (_0x190def = this[_0xb689b6(454)]) == null ||
          _0x190def[_0xb689b6(431)](e.BASES_UI_PLUGIN_CONFIG_KEY, _0xfd5b56, {
            merge: true,
          }));
    }
  },
  l = class extends n.FUniver {
    getBaseUI() {
      return new c(
        this._injector["get"](e.BaseUIStateService),
        this._injector["get"](e.BaseSelectionService),
        this._injector["get"](e.BaseEditorService),
        this._injector["get"](t.IConfigService),
      );
    }
  };
(n.FUniver["extend"](l),
  (exports.FBaseRenderedView = r),
  (exports.FBaseUI = c),
  (exports.FUniverBaseUIMixin = l));
