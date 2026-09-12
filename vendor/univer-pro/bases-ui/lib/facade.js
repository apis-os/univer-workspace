import {
  BASES_UI_PLUGIN_CONFIG_KEY as _0x365417,
  BaseEditorService as _0x2f6e00,
  BaseSelectionService as _0x442628,
  BaseUIStateService as _0x4a5d51,
} from "@univerjs-pro/bases-ui";
import { IConfigService as _0x252978 } from "@univerjs/core";
import { FUniver as _0x2d10c2 } from "@univerjs/core/facade";
var o = class {
  constructor(_0x163656, _0x403624, _0x4af536) {
    ((this._viewId = _0x163656),
      (this._viewType = _0x403624),
      (this._controller = _0x4af536));
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
  hitTest(_0x119c7f, _0xdb5a05) {
    let _0x17bcc7 = this._controller["hitTest"](_0x119c7f, _0xdb5a05);
    switch (_0x17bcc7 == null ? undefined : _0x17bcc7.type) {
      case "grid-attachment-add":
      case "grid-attachment-expand":
      case "grid-attachment-item":
        return {
          type: "grid-cell",
          tableId: _0x17bcc7.tableId,
          viewId: _0x17bcc7.viewId,
          recordId: _0x17bcc7.recordId,
          fieldId: _0x17bcc7.fieldId,
          virtual: _0x17bcc7.virtual,
        };
      default:
        return _0x17bcc7;
    }
  }
};
function s(_0x5d3dd8) {
  "@babel/helpers - typeof";
  return (
    (s =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x1fb7bd) {
            return typeof _0x1fb7bd;
          }
        : function (_0xd66108) {
            return _0xd66108 &&
              typeof Symbol == "function" &&
              _0xd66108.constructor === Symbol &&
              _0xd66108 !== Symbol.prototype
              ? "symbol"
              : typeof _0xd66108;
          }),
    s(_0x5d3dd8)
  );
}
function c(_0x44d5b5, _0x102408) {
  if (s(_0x44d5b5) != "object" || !_0x44d5b5) return _0x44d5b5;
  var _0x1833c = _0x44d5b5[Symbol.toPrimitive];
  if (_0x1833c !== undefined) {
    var _0x57f2e2 = _0x1833c.call(_0x44d5b5, _0x102408 || "default");
    if (s(_0x57f2e2) != "object") return _0x57f2e2;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x102408 === "string" ? String : Number)(_0x44d5b5);
}
function l(_0x419b7d) {
  var _0x2df352 = _0x37e622,
    _0x13e090 = c(_0x419b7d, _0x2df352(218));
  return s(_0x13e090) == _0x2df352(233) ? _0x13e090 : _0x13e090 + "";
}
function u(_0x4fdb65, _0x3505f2, _0x4a51f0) {
  return (
    (_0x3505f2 = l(_0x3505f2)) in _0x4fdb65
      ? Object.defineProperty(_0x4fdb65, _0x3505f2, {
          value: _0x4a51f0,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4fdb65[_0x3505f2] = _0x4a51f0),
    _0x4fdb65
  );
}
var d = class {
    constructor(
      _0x461158,
      _0x1aaec8,
      _0x279fae = new _0x2f6e00(_0x461158),
      _0x35d80d,
    ) {
      ((this._stateService = _0x461158),
        (this._selectionService = _0x1aaec8),
        (this._editorService = _0x279fae),
        (this._configService = _0x35d80d),
        u(this, "_localConfig", {}));
    }
    getActiveTableId() {
      return this._stateService["getState"]().activeTableId ?? null;
    }
    getActiveViewId() {
      return this._stateService["getState"]().activeViewId ?? null;
    }
    async activateTable(_0x2215d6) {
      this._stateService["activateTable"](_0x2215d6);
    }
    async activateView(_0x1b95e4) {
      this._stateService["activateView"](_0x1b95e4);
    }
    getSelection() {
      return this._selectionService["getSelection"]();
    }
    setSelection(_0x49e871) {
      this._selectionService["setSelection"](_0x49e871);
    }
    scrollToRecord(_0x547f6e, _0x497d39 = {}) {
      let _0x2bd523 = _0x497d39.viewId ?? this.getActiveViewId();
      _0x2bd523 &&
        this._stateService["setScrollState"](_0x2bd523, {
          x: _0x497d39.x ?? 0,
          y: _0x497d39.y ?? 0,
        });
    }
    scrollToField(_0x5b809b, _0x14a836 = {}) {
      let _0x32e866 = _0x14a836.viewId ?? this.getActiveViewId();
      _0x32e866 &&
        this._stateService["setScrollState"](_0x32e866, {
          x: _0x14a836.x ?? 0,
          y: _0x14a836.y ?? 0,
        });
    }
    startEditingCell(_0x2160d7) {
      this._editorService["startEditingCell"](_0x2160d7);
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
    openRecordDetail(_0x476407) {
      this._stateService["openRecordDetail"](_0x476407);
    }
    openDraftRecordDetail(_0x2e4dcf = {}) {
      this._stateService["openDraftRecordDetail"](_0x2e4dcf);
    }
    closeRecordDetail() {
      this._stateService["closeRecordDetail"]();
    }
    openFieldConfigPanel(_0x324a5a) {
      this._stateService["getState"]().openPanels["fieldConfig"] = _0x324a5a;
    }
    openViewSettingsPanel(_0x1b9cad) {
      this._stateService["getState"]().openPanels["viewSettings"] = _0x1b9cad;
    }
    getPersonOptions() {
      return [...(this._getBaseUIConfig().personOptions ?? [])];
    }
    setPersonOptions(_0x35713b) {
      this._updateBaseUIConfig({ personOptions: _0x35713b });
    }
    getGroupOptions() {
      return [...(this._getBaseUIConfig().groupOptions ?? [])];
    }
    setGroupOptions(_0x3fc4c3) {
      this._updateBaseUIConfig({ groupOptions: _0x3fc4c3 });
    }
    getRenderedView() {
      return null;
    }
    _getBaseUIConfig() {
      var _0x5710c0 = _0x37e622,
        _0x44cbc3;
      return (
        ((_0x44cbc3 = this[_0x5710c0(227)]) == null
          ? undefined
          : _0x44cbc3.getConfig(_0x365417)) ?? this._localConfig
      );
    }
    _updateBaseUIConfig(_0x5355be) {
      var _0x5e1b3a = _0x37e622,
        _0x5af11b;
      ((this[_0x5e1b3a(238)] = { ...this._getBaseUIConfig(), ..._0x5355be }),
        (_0x5af11b = this[_0x5e1b3a(227)]) == null ||
          _0x5af11b[_0x5e1b3a(229)](_0x365417, _0x5355be, { merge: true }));
    }
  },
  f = class extends _0x2d10c2 {
    getBaseUI() {
      return new d(
        this._injector["get"](_0x4a5d51),
        this._injector["get"](_0x442628),
        this._injector["get"](_0x2f6e00),
        this._injector["get"](_0x252978),
      );
    }
  };
_0x2d10c2.extend(f);
export { o as FBaseRenderedView, d as FBaseUI, f as FUniverBaseUIMixin };
