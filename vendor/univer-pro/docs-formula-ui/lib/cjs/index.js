Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-formula"),
  t = require("@univerjs/core"),
  n = require("@univerjs/docs"),
  r = require("@univerjs/docs-ui"),
  i = require("@univerjs/engine-render"),
  a = require("rxjs"),
  o = require("@univerjs/ui"),
  s = require("@univerjs-pro/license"),
  c = require("@univerjs-pro/shape-editor-ui"),
  l = require("@univerjs/icons"),
  u = require("react/jsx-runtime"),
  d = require("@univerjs/design"),
  f = require("react");
const p = {
  fill: "rgba(0, 0, 0, 0)",
  stroke: "rgba(0,\x200,\x200,\x200)",
  strokeActive: "rgba(0, 0, 0, 0)",
  strokeWidth: 0,
};
function m(_0x4250a7) {
  return (
    (_0x4250a7 == null ? undefined : _0x4250a7.fill) === p.fill &&
    _0x4250a7.stroke === p.stroke &&
    _0x4250a7.strokeActive === p.strokeActive &&
    _0x4250a7.strokeWidth === p.strokeWidth
  );
}
function h(_0x28a07c, _0x27eb1f, _0x5f1ad9) {
  let _0x44f011 = _0x27eb1f - _0x5f1ad9.ascent - 2,
    _0x7a86e9 = _0x5f1ad9.ascent + _0x5f1ad9.descent + 4,
    _0x5cc610 = _0x28a07c,
    _0xe6ec39 = _0x5cc610 + g(_0x5f1ad9);
  return {
    bottom: _0x44f011 + _0x7a86e9,
    contentRight: _0xe6ec39,
    height: _0x7a86e9,
    left: _0x5cc610,
    textX: _0x5cc610 + 2,
    top: _0x44f011,
  };
}
function g(_0x1406db) {
  return _0x1406db.width + 4;
}
function _(_0x1396f9, _0x2cbc0a) {
  return g(_0x1396f9) / _0x2cbc0a;
}
const v = "DOC_FORMULA_EDITOR_POPUP",
  y = "DOC_FORMULA_HOVER_POPUP";
function b(_0x333a4d) {
  "@babel/helpers - typeof";
  return (
    (b =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3358f1) {
            return typeof _0x3358f1;
          }
        : function (_0x2f8dff) {
            return _0x2f8dff &&
              typeof Symbol == "function" &&
              _0x2f8dff.constructor === Symbol &&
              _0x2f8dff !== Symbol.prototype
              ? "symbol"
              : typeof _0x2f8dff;
          }),
    b(_0x333a4d)
  );
}
function ee(_0x5a8482, _0x28024a) {
  if (b(_0x5a8482) != "object" || !_0x5a8482) return _0x5a8482;
  var _0x40ca1 = _0x5a8482[Symbol.toPrimitive];
  if (_0x40ca1 !== undefined) {
    var _0x338a07 = _0x40ca1.call(_0x5a8482, _0x28024a || "default");
    if (b(_0x338a07) != "object") return _0x338a07;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x28024a === "string" ? String : Number)(_0x5a8482);
}
function te(_0x29ba70) {
  var _0x53a5d1 = ee(_0x29ba70, "string");
  return b(_0x53a5d1) == "symbol" ? _0x53a5d1 : _0x53a5d1 + "";
}
function x(_0x6153c9, _0x499f67, _0x5c95cd) {
  return (
    (_0x499f67 = te(_0x499f67)) in _0x6153c9
      ? Object.defineProperty(_0x6153c9, _0x499f67, {
          value: _0x5c95cd,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x6153c9[_0x499f67] = _0x5c95cd),
    _0x6153c9
  );
}
function S(_0x42f45e, _0x589499) {
  return function (_0x2ff9fc, _0x38c7f1) {
    _0x589499(_0x2ff9fc, _0x38c7f1, _0x42f45e);
  };
}
function C(_0x1f21cc, _0x26e237, _0x5456a6, _0x3c1f14) {
  var _0x73a46 = arguments.length,
    _0x2da934 =
      _0x73a46 < 3
        ? _0x26e237
        : _0x3c1f14 === null
          ? (_0x3c1f14 = Object.getOwnPropertyDescriptor(_0x26e237, _0x5456a6))
          : _0x3c1f14,
    _0x46d454;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2da934 = Reflect.decorate(_0x1f21cc, _0x26e237, _0x5456a6, _0x3c1f14);
  else {
    for (var _0x59b82e = _0x1f21cc.length - 1; _0x59b82e >= 0; _0x59b82e--)
      (_0x46d454 = _0x1f21cc[_0x59b82e]) &&
        (_0x2da934 =
          (_0x73a46 < 3
            ? _0x46d454(_0x2da934)
            : _0x73a46 > 3
              ? _0x46d454(_0x26e237, _0x5456a6, _0x2da934)
              : _0x46d454(_0x26e237, _0x5456a6)) || _0x2da934);
  }
  return (
    _0x73a46 > 3 &&
      _0x2da934 &&
      Object.defineProperty(_0x26e237, _0x5456a6, _0x2da934),
    _0x2da934
  );
}
let w = class extends t.Disposable {
  get hasOpenPopup() {
    return (
      this._editorTarget$["value"] != null ||
      this._hoverTarget$["value"] != null
    );
  }
  get hasOpenEditor() {
    return this._editorTarget$["value"] != null;
  }
  constructor(
    _0x6c6b2a,
    _0x2b607a,
    _0x38a2e6,
    _0x2fd9b5,
    _0x6dab07,
    _0x37bae0,
  ) {
    (super(),
      (this._popupManagerService = _0x6c6b2a),
      (this._selectionManagerService = _0x2b607a),
      (this._model = _0x38a2e6),
      (this._univerInstanceService = _0x2fd9b5),
      (this._permissionService = _0x6dab07),
      (this._renderManagerService = _0x37bae0),
      x(this, "_editorPopup", null),
      x(this, "_hoverPopup", null),
      x(this, "_lastFormulaTarget", null),
      x(this, "_editorTarget$", new a["BehaviorSubject"](null)),
      x(this, "_hoverTarget$", new a["BehaviorSubject"](null)),
      x(this, "editorTarget$", this._editorTarget$["asObservable"]()),
      x(this, "hoverTarget$", this._hoverTarget$["asObservable"]()),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          let _0x54ae4c = this._editorTarget$["value"],
            _0x45b15a = this._hoverTarget$["value"];
          (_0x54ae4c &&
            !this._canEditRange(
              _0x54ae4c.unitId,
              _0x54ae4c.rangeId,
              _0x54ae4c.selection["segmentId"],
            ) &&
            this.closeEditor(),
            _0x45b15a &&
              !this._canEditRange(
                _0x45b15a.unitId,
                _0x45b15a.rangeId,
                _0x45b15a.segmentId,
              ) &&
              this.closeHover());
        }),
      ),
      this.disposeWithMe(
        this._renderManagerService["disposed$"].subscribe((_0x1c5b41) => {
          var _0xc50e0b, _0x3b0c33;
          (((_0xc50e0b = this._editorTarget$["value"]) == null
            ? undefined
            : _0xc50e0b.unitId) === _0x1c5b41 && this.closeEditor(),
            ((_0x3b0c33 = this._hoverTarget$["value"]) == null
              ? undefined
              : _0x3b0c33.unitId) === _0x1c5b41 && this.closeHover());
        }),
      ));
  }
  openEditor(_0x28f434) {
    var _0x89ffb2;
    if (
      !this._canEditRange(
        _0x28f434.unitId,
        _0x28f434.rangeId,
        (_0x89ffb2 = _0x28f434.selection) == null
          ? undefined
          : _0x89ffb2.segmentId,
      )
    )
      return null;
    let _0xb54386 = this._resolveEditorSelection(_0x28f434);
    return _0xb54386
      ? (this.closeEditor(),
        this.closeHover(),
        this._editorTarget$["next"]({
          unitId: _0x28f434.unitId,
          rangeId: _0x28f434.rangeId,
          selection: _0xb54386,
        }),
        (this._editorPopup = this._popupManagerService["attachPopupToRange"](
          _0xb54386,
          {
            componentKey: v,
            direction: "bottom",
            onClickOutside: () => this.closeEditor(),
          },
          _0x28f434.unitId,
        )),
        this._editorPopup)
      : null;
  }
  openSelectedEditor(_0x42d999) {
    let _0x2e8791 = this.getSelectedFormulaTarget(_0x42d999);
    return _0x2e8791 ? this.openEditor(_0x2e8791) : null;
  }
  showHover(_0x45cd7e, _0x40f6e2) {
    var _0x28fd53, _0x7b6fcb;
    if (
      !this._canEditRange(
        _0x45cd7e.unitId,
        _0x45cd7e.rangeId,
        _0x45cd7e.segmentId,
      )
    )
      return null;
    if (
      ((_0x28fd53 = this._hoverTarget$["value"]) == null
        ? undefined
        : _0x28fd53.unitId) === _0x45cd7e.unitId &&
      ((_0x7b6fcb = this._hoverTarget$["value"]) == null
        ? undefined
        : _0x7b6fcb.rangeId) === _0x45cd7e.rangeId
    )
      return this._hoverPopup;
    this.closeHover();
    let _0x53308a = this._getRange(_0x45cd7e);
    if (!_0x53308a) return null;
    ((this._lastFormulaTarget = _0x45cd7e),
      this._hoverTarget$["next"](_0x45cd7e));
    let _0x39ecbd = {
        componentKey: y,
        direction: "top-center",
        onClickOutside: () => this.closeHover(),
      },
      _0x5a0a66 = _0x40f6e2 == null ? undefined : _0x40f6e2();
    return (
      (this._hoverPopup = _0x5a0a66
        ? this._popupManagerService["attachPopupToRect"](
            () => (_0x40f6e2 == null ? undefined : _0x40f6e2()) ?? _0x5a0a66,
            _0x39ecbd,
            _0x45cd7e.unitId,
          )
        : this._popupManagerService["attachPopupToRange"](
            {
              collapsed: false,
              startOffset: _0x53308a.startIndex,
              endOffset: _0x53308a.endIndex + 1,
              segmentId: _0x45cd7e.segmentId,
              segmentPage: _0x45cd7e.segmentPage,
            },
            { ..._0x39ecbd, multipleDirection: "top" },
            _0x45cd7e.unitId,
          )),
      this._hoverPopup
    );
  }
  showSelectedHover(_0x2e9e7f) {
    let _0x1393fa = this.getSelectedFormulaTarget(_0x2e9e7f);
    return _0x1393fa ? this.showHover(_0x1393fa) : null;
  }
  getSelectedFormulaTarget(_0x41dc23) {
    var _0x5227a2, _0x46eba6;
    let _0x1d49ea = this._hoverTarget$["value"];
    if ((_0x1d49ea == null ? undefined : _0x1d49ea.unitId) === _0x41dc23)
      return _0x1d49ea;
    let _0x8b0ae6 = this._univerInstanceService["getUnit"](
        _0x41dc23,
        t.UniverInstanceType["UNIVER_DOC"],
      ),
      _0x2f8335 = _0x8b0ae6 == null ? undefined : _0x8b0ae6.getBody(),
      _0x397c01 = this._selectionManagerService["getTextRanges"]({
        unitId: _0x41dc23,
        subUnitId: _0x41dc23,
      });
    if (!_0x2f8335 || (_0x397c01 == null ? undefined : _0x397c01.length) !== 1)
      return null;
    let _0x48cc34 = _0x397c01[0];
    if (_0x48cc34.collapsed) return null;
    let _0x2d2536 = Math.min(
        _0x48cc34.startOffset ?? 0,
        _0x48cc34.endOffset ?? 0,
      ),
      _0x12d473 = Math.max(
        _0x48cc34.startOffset ?? 0,
        _0x48cc34.endOffset ?? 0,
      ),
      _0x180366 =
        (_0x5227a2 = _0x2f8335.customRanges) == null
          ? undefined
          : _0x5227a2.find(
              (_0x303d3f) =>
                _0x303d3f.startIndex === _0x2d2536 &&
                _0x303d3f.endIndex + 1 === _0x12d473 &&
                this._model["getFormula"](_0x41dc23, _0x303d3f.rangeId) != null,
            );
    if (_0x180366) return { unitId: _0x41dc23, rangeId: _0x180366.rangeId };
    let _0x9f385f =
      ((_0x46eba6 = this._lastFormulaTarget) == null
        ? undefined
        : _0x46eba6.unitId) === _0x41dc23
        ? this._getRange(this._lastFormulaTarget)
        : undefined;
    return _0x9f385f &&
      _0x2d2536 < _0x9f385f.endIndex + 1 &&
      _0x12d473 > _0x9f385f.startIndex
      ? { unitId: _0x41dc23, rangeId: _0x9f385f.rangeId }
      : null;
  }
  closeEditor() {
    var _0x1e79ac;
    ((_0x1e79ac = this._editorPopup) == null || _0x1e79ac.dispose(),
      (this._editorPopup = null),
      this._editorTarget$["next"](null));
  }
  closeHover() {
    var _0x5bdb8e;
    ((_0x5bdb8e = this._hoverPopup) == null || _0x5bdb8e.dispose(),
      (this._hoverPopup = null),
      this._hoverTarget$["next"](null));
  }
  closeAndRestoreSelection() {
    var _0x37ca1a;
    let _0x281194 =
      (_0x37ca1a = this._editorTarget$["value"]) != null && _0x37ca1a.rangeId
        ? {
            unitId: this._editorTarget$["value"].unitId,
            rangeId: this._editorTarget$["value"].rangeId,
          }
        : this._hoverTarget$["value"];
    if (!this.hasOpenPopup) return false;
    if ((this.closeEditor(), this.closeHover(), _0x281194)) {
      let _0x271e6d = this._getRange(_0x281194);
      _0x271e6d &&
        this._selectionManagerService["replaceDocRanges"](
          [
            {
              startOffset: _0x271e6d.startIndex,
              endOffset: _0x271e6d.endIndex + 1,
              style: p,
            },
          ],
          { unitId: _0x281194.unitId, subUnitId: _0x281194.unitId },
        );
    }
    return true;
  }
  dispose() {
    (this.closeEditor(),
      this.closeHover(),
      this._editorTarget$["complete"](),
      this._hoverTarget$["complete"](),
      super.dispose());
  }
  _resolveEditorSelection(_0x114521) {
    if (_0x114521.rangeId) {
      let _0x4f9591 = this._getRange({
        unitId: _0x114521.unitId,
        rangeId: _0x114521.rangeId,
      });
      return _0x4f9591
        ? {
            collapsed: false,
            startOffset: _0x4f9591.startIndex,
            endOffset: _0x4f9591.endIndex + 1,
          }
        : null;
    }
    if (_0x114521.selection) return _0x114521.selection;
    let _0x168554 = this._selectionManagerService["getTextRanges"]({
      unitId: _0x114521.unitId,
      subUnitId: _0x114521.unitId,
    });
    return (
      (_0x168554 == null ? undefined : _0x168554[_0x168554.length - 1]) ?? null
    );
  }
  _getRange(_0x2d0c9e) {
    var _0xb97967;
    let _0x117401 = this._univerInstanceService["getUnit"](
        _0x2d0c9e.unitId,
        t.UniverInstanceType["UNIVER_DOC"],
      ),
      _0x336dcb =
        _0x117401 == null ||
        (_0xb97967 = _0x117401.getSelfOrHeaderFooterModel(
          _0x2d0c9e.segmentId,
        )) == null
          ? undefined
          : _0xb97967.getBody();
    if (!(
      !_0x336dcb ||
      !this._model["getFormula"](_0x2d0c9e.unitId, _0x2d0c9e.rangeId)
    ))
      return (0, e.findDocFormulaRange)(_0x336dcb, _0x2d0c9e.rangeId);
  }
  _canEditRange(_0x4f3a97, _0x22dbf2, _0x21d159 = "") {
    let _0x8fd246 = this._univerInstanceService["getUnit"](
      _0x4f3a97,
      t.UniverInstanceType["UNIVER_DOC"],
    );
    return _0x8fd246
      ? _0x22dbf2
        ? (0, n.canEditDocumentTargets)(this._permissionService, _0x4f3a97, [
            ...(0, n.getDocumentEntityParentPermissionObjectIds)(
              _0x8fd246,
              _0x21d159,
              "custom-range",
              _0x22dbf2,
            ),
            (0, n.getDocumentEntityPermissionObjectId)(
              _0x21d159,
              "custom-range",
              _0x22dbf2,
            ),
          ])
        : (0, n.canEditDocumentTargets)(this._permissionService, _0x4f3a97, [])
      : true;
  }
};
w = C(
  [
    S(0, (0, t.Inject)(r.DocCanvasPopManagerService)),
    S(1, (0, t.Inject)(n.DocSelectionManagerService)),
    S(2, (0, t.Inject)(e.DocFormulaModel)),
    S(3, t.IUniverInstanceService),
    S(4, t.IPermissionService),
    S(5, i.IRenderManagerService),
  ],
  w,
);
const T = {
    id: "docs-formula.operation.open-editor",
    type: t.CommandType["OPERATION"],
    handler: (_0x57bfc7, _0x2da547) => {
      var _0x595802;
      let _0xd9fc08 =
        (_0x2da547 == null ? undefined : _0x2da547.unitId) ??
        ((_0x595802 = _0x57bfc7
          .get(t.IUniverInstanceService)
          .getCurrentUnitOfType(t.UniverInstanceType["UNIVER_DOC"])) == null
          ? undefined
          : _0x595802.getUnitId());
      if (!_0xd9fc08) return false;
      let _0xb3d04 = _0x57bfc7.get(w);
      if (
        !(_0x2da547 != null && _0x2da547.rangeId) &&
        !(_0x2da547 != null && _0x2da547.selection)
      ) {
        let _0x12bdbc = _0xb3d04.getSelectedFormulaTarget(_0xd9fc08);
        return !!_0xb3d04.openEditor(_0x12bdbc ?? { unitId: _0xd9fc08 });
      }
      return !!_0xb3d04.openEditor({ ..._0x2da547, unitId: _0xd9fc08 });
    },
  },
  E = {
    id: "docs-formula.operation.open-selected-hover",
    type: t.CommandType["OPERATION"],
    handler: (_0x417226) => {
      let _0x253c99 = k(_0x417226.get(t.IUniverInstanceService));
      return _0x253c99
        ? !!_0x417226.get(w).showSelectedHover(_0x253c99)
        : false;
    },
  },
  D = {
    id: "docs-formula.operation.close-popup",
    type: t.CommandType["OPERATION"],
    handler: (_0x1b92aa) => _0x1b92aa.get(w).closeAndRestoreSelection(),
  },
  O = {
    id: "docs-formula.operation.remove-selected",
    type: t.CommandType["OPERATION"],
    handler: (_0x4709e8) => {
      let _0x91c5c9 = k(_0x4709e8.get(t.IUniverInstanceService));
      if (!_0x91c5c9) return false;
      let _0x1d20ca = _0x4709e8.get(w),
        _0x2ab5f1 = _0x1d20ca.getSelectedFormulaTarget(_0x91c5c9);
      if (!_0x2ab5f1) return false;
      let _0x525bb7 = _0x4709e8
        .get(t.ICommandService)
        .syncExecuteCommand(e.RemoveDocFormulaCommand["id"], _0x2ab5f1);
      return (
        _0x525bb7 && (_0x1d20ca.closeEditor(), _0x1d20ca.closeHover()),
        !!_0x525bb7
      );
    },
  };
function k(_0x10f8c8) {
  var _0x8322e9;
  return (_0x8322e9 = _0x10f8c8.getCurrentUnitOfType(
    t.UniverInstanceType["UNIVER_DOC"],
  )) == null
    ? undefined
    : _0x8322e9.getUnitId();
}
const A = "docs-formula-ui.config",
  j = {};
function ne(_0x3d3c32) {
  return {
    id: T.id,
    type: o.MenuItemType["BUTTON"],
    icon: "FxIcon",
    title: "docs-formula-ui.menu.formula",
    tooltip: "docs-formula-ui.menu.formula",
    hidden$: (0, o.getMenuHiddenObservable)(
      _0x3d3c32,
      t.UniverInstanceType["UNIVER_DOC"],
    ),
    disabled$: (0, r.disableMenuWhenHeaderFooterEditing)(_0x3d3c32),
  };
}
const M = {
  [o.MenuManagerPosition["RIBBON"]]: {
    [o.RibbonPosition["INSERT"]]: {
      [o.RibbonInsertGroup["MEDIA"]]: {
        [T.id]: { order: 7, menuItemFactory: ne },
      },
    },
  },
};
var N = "@univerjs-pro/docs-formula-ui",
  re = "1.0.0-insiders.20260907-70fc579";
function ie() {
  let _0x426b0c = (0, o.useDependency)(t.ICommandService),
    _0x1776db = (0, o.useDependency)(e.DocFormulaModel),
    _0xd72e3f = (0, o.useDependency)(w),
    _0x46b9e7 = (0, o.useObservable)(_0xd72e3f.editorTarget$);
  if (!_0x46b9e7) return null;
  let _0x1da597 = _0x46b9e7.rangeId
    ? _0x1776db.getFormula(_0x46b9e7.unitId, _0x46b9e7.rangeId)
    : undefined;
  return (0, u.jsx)(
    c.FormulaBindingEditorDialog,
    {
      open: true,
      host: { unitId: _0x46b9e7.unitId },
      value: {
        formula: (_0x1da597 == null ? undefined : _0x1da597.formula) ?? "=",
        numberFormat: _0x1da597 == null ? undefined : _0x1da597.numberFormat,
      },
      onClose: () => _0xd72e3f.closeEditor(),
      onConfirm: (_0x3e41da) => {
        (_0x46b9e7.rangeId
          ? _0x426b0c.syncExecuteCommand(e.UpdateDocFormulaCommand["id"], {
              unitId: _0x46b9e7.unitId,
              rangeId: _0x46b9e7.rangeId,
              formula: _0x3e41da.formula,
              numberFormat: _0x3e41da.numberFormat,
              externalReferences: _0x3e41da.externalReferences,
            })
          : _0x426b0c.syncExecuteCommand(e.InsertDocFormulaCommand["id"], {
              unitId: _0x46b9e7.unitId,
              formula: _0x3e41da.formula,
              numberFormat: _0x3e41da.numberFormat,
              externalReferences: _0x3e41da.externalReferences,
              target: { type: "selection", selection: _0x46b9e7.selection },
            })) && _0xd72e3f.closeEditor();
      },
    },
    _0x46b9e7.unitId + ":" + (_0x46b9e7.rangeId ?? "new"),
  );
}
function ae() {
  var _0x370d8f;
  let _0x505d1c = (0, o.useDependency)(t.ICommandService),
    _0x410a37 = (0, o.useDependency)(t.LocaleService),
    _0x43dc21 = (0, o.useDependency)(e.DocFormulaModel),
    _0x545bf0 = (0, o.useDependency)(e.DocFormulaDisplayTextService),
    _0x1f3c30 = (0, o.useDependency)(w),
    _0x28bccf = (0, o.useObservable)(_0x1f3c30.hoverTarget$),
    [_0x1beb02, _0x232557] = (0, f.useState)(false);
  if (!_0x28bccf) return null;
  let _0x4abcb4 = (_0x563a00) => {
      _0x505d1c.syncExecuteCommand(_0x563a00, {
        unitId: _0x28bccf.unitId,
        rangeId: _0x28bccf.rangeId,
      }) && _0x1f3c30.closeHover();
    },
    _0x1e110e = _0x43dc21.getFormula(_0x28bccf.unitId, _0x28bccf.rangeId),
    _0x34603f = _0x545bf0.resolveFormula(_0x28bccf.unitId, _0x28bccf.rangeId);
  return (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsxs)("div", {
        className:
          "univer-flex univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 dark:!univer-border-gray-600 dark:!univer-bg-gray-900",
        role: "toolbar",
        "aria-label":
          _0x410a37.t("docs-formula-ui.menu.formula") +
          ":\x20" +
          _0x34603f +
          ".\x20" +
          _0x410a37.t("docs-formula-ui.menu.actions"),
        "aria-live": "polite",
        children: [
          (0, u.jsx)(d.Tooltip, {
            title: _0x410a37.t("docs-formula-ui.menu.edit"),
            children: (0, u.jsx)(d.Button, {
              type: "button",
              size: "small",
              "aria-label": _0x410a37.t("docs-formula-ui.menu.edit"),
              onClick: () => {
                _0x505d1c.syncExecuteCommand(T.id, _0x28bccf);
              },
              children: (0, u.jsx)(l.WriteIcon, {}),
            }),
          }),
          (0, u.jsx)(d.Tooltip, {
            title: _0x410a37.t("docs-formula-ui.menu.numberFormat"),
            children: (0, u.jsx)(d.Button, {
              type: "button",
              size: "small",
              "aria-label": _0x410a37.t("docs-formula-ui.menu.numberFormat"),
              onClick: () => _0x232557(true),
              children: (0, u.jsx)(l.NumberIcon, {}),
            }),
          }),
          (0, u.jsx)(d.Tooltip, {
            title: _0x410a37.t("docs-formula-ui.menu.convertToText"),
            children: (0, u.jsx)(d.Button, {
              type: "button",
              size: "small",
              "aria-label": _0x410a37.t("docs-formula-ui.menu.convertToText"),
              onClick: () => _0x4abcb4(e.ConvertDocFormulaToTextCommand["id"]),
              children: (0, u.jsx)(l.TextIcon, {}),
            }),
          }),
          (0, u.jsx)(d.Tooltip, {
            title: _0x410a37.t("docs-formula-ui.menu.delete"),
            children: (0, u.jsx)(d.Button, {
              type: "button",
              size: "small",
              "aria-label": _0x410a37.t("docs-formula-ui.menu.delete"),
              onClick: () => _0x4abcb4(e.RemoveDocFormulaCommand["id"]),
              children: (0, u.jsx)(l.DeleteIcon, {}),
            }),
          }),
        ],
      }),
      _0x1beb02 &&
        (0, u.jsx)(c.FormulaBindingNumberFormatDialog, {
          open: true,
          pattern:
            (_0x1e110e == null || (_0x370d8f = _0x1e110e.numberFormat) == null
              ? undefined
              : _0x370d8f.pattern) ?? t.DEFAULT_NUMBER_FORMAT,
          onClose: () => _0x232557(false),
          onConfirm: (_0x5b5688) => {
            _0x505d1c.syncExecuteCommand(
              e.SetDocFormulaNumberFormatCommand["id"],
              {
                unitId: _0x28bccf.unitId,
                rangeId: _0x28bccf.rangeId,
                numberFormat: { pattern: _0x5b5688 },
              },
            ) && _0x232557(false);
          },
        }),
    ],
  });
}
let P = class extends t.Disposable {
  constructor(_0x14468a, _0x288b50) {
    (super(),
      (this._componentManager = _0x14468a),
      (this._iconManager = _0x288b50),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](v, ie)),
      this.disposeWithMe(this._componentManager["register"](y, ae)));
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({ FxIcon: l.FxIcon }));
  }
};
P = C(
  [S(0, (0, t.Inject)(o.ComponentManager)), S(1, (0, t.Inject)(o.IconManager))],
  P,
);
function F(_0x4b7136, _0x49b2ce, _0x2abbe2) {
  for (let _0x5bd29f = _0x4b7136.length - 1; _0x5bd29f >= 0; _0x5bd29f--) {
    let _0x3501eb = _0x4b7136[_0x5bd29f];
    if (
      _0x49b2ce >= _0x3501eb.left &&
      _0x49b2ce <= _0x3501eb.right &&
      _0x2abbe2 >= _0x3501eb.top &&
      _0x2abbe2 <= _0x3501eb.bottom
    )
      return _0x3501eb;
  }
  return null;
}
function oe(_0x53c3e5, _0x141db1) {
  return _0x141db1.collapsed
    ? _0x141db1.startOffset >= _0x53c3e5.startIndex &&
        _0x141db1.startOffset <= _0x53c3e5.endIndex
    : _0x141db1.startOffset === _0x53c3e5.startIndex &&
        _0x141db1.endOffset === _0x53c3e5.endIndex + 1;
}
function se(_0x584b8d, _0x56d179) {
  return _0x56d179.collapsed
    ? _0x56d179.startOffset >= _0x584b8d.startIndex &&
        _0x56d179.startOffset <= _0x584b8d.endIndex
    : _0x56d179.startOffset < _0x584b8d.endIndex + 1 &&
        _0x56d179.endOffset > _0x584b8d.startIndex;
}
function I(
  _0x108311,
  _0x1f92dd,
  _0x14fda0,
  _0x298cad,
  _0x17754e = 0,
  _0xc06f74 = 0,
) {
  return {
    x: _0x108311 / _0x14fda0 + _0x17754e,
    y: _0x1f92dd / _0x298cad + _0xc06f74,
  };
}
var ce = class extends i.ComponentExtension {
  constructor(_0x21934f) {
    (super(),
      (this._state = _0x21934f),
      x(this, "uKey", "DocFormulaExtension"),
      x(this, "type", 0),
      x(this, "Z_INDEX", 110));
  }
  draw(_0x1ce0fa, _0xbf06c2, _0x5a824b) {
    var _0x1e9f15, _0x26fb4b, _0x39ff14;
    let _0x52057b = L(_0x5a824b);
    if (_0x52057b == null) return;
    let _0x1310e6 =
        (_0x1e9f15 = this._state["getBody"]()) == null ||
        (_0x1e9f15 = _0x1e9f15.customRanges) == null
          ? undefined
          : _0x1e9f15.find(
              (_0x44a23d) =>
                (0, e.isDocFormulaRange)(_0x44a23d) &&
                _0x44a23d.startIndex === _0x52057b,
            ),
      _0x4acd91 = this.extensionOffset["spanPointWithFont"];
    if (!_0x1310e6 || !_0x4acd91) return;
    let _0x3dea22 = this._state["getResult"](_0x1310e6.rangeId),
      _0x69da1c = (_0x3dea22 == null ? undefined : _0x3dea22.text) || "…",
      _0x512992 = _0x3dea22 == null ? undefined : _0x3dea22.color,
      _0x4ed0ce = (0, i.ptToPixel)(
        ((_0x26fb4b = _0x5a824b.fontStyle) == null
          ? undefined
          : _0x26fb4b.originFontSize) ??
          ((_0x39ff14 = _0x5a824b.ts) == null ? undefined : _0x39ff14.fs) ??
          14,
      ),
      _0xe4c60 = this._state["renderService"].getMetrics(
        _0x69da1c,
        _0x512992,
        _0x4ed0ce,
      ),
      _0x200b1f = this._state["isActive"](_0x1310e6.rangeId),
      _0x37bf6c = h(_0x4acd91.x, _0x4acd91.y, _0xe4c60);
    (_0x200b1f &&
      (0, r.drawDocCustomRangeChrome)(
        _0x1ce0fa,
        {
          bottom: _0x37bf6c.bottom,
          left: _0x37bf6c.left,
          right: _0x37bf6c.contentRight,
          top: _0x37bf6c.top,
        },
        this._state["getChromeTheme"](),
      ),
      this._state["renderService"].draw(
        _0x1ce0fa,
        _0x69da1c,
        _0x512992,
        _0x4ed0ce,
        _0x37bf6c.textX,
        _0x4acd91.y,
      ),
      this._state["setHitRect"]({
        bottom: _0x37bf6c.bottom,
        contentRight: _0x37bf6c.contentRight,
        left: _0x37bf6c.left,
        range: _0x1310e6,
        right: _0x37bf6c.contentRight,
        top: _0x37bf6c.top,
      }));
  }
  clearCache() {
    this._state["clearHitRects"]();
  }
};
function L(_0x130189) {
  let _0x1212ad = _0x130189.parent;
  if (!(_0x1212ad != null && _0x1212ad.glyphGroup)) return null;
  let _0x5cdcfb = _0x1212ad.st;
  for (let _0x2d43d1 of _0x1212ad.glyphGroup) {
    var _0x1c05df;
    if (_0x2d43d1 === _0x130189) return _0x5cdcfb;
    _0x5cdcfb +=
      _0x2d43d1.count ||
      ((_0x1c05df = _0x2d43d1.content) == null
        ? undefined
        : _0x1c05df.length) ||
      1;
  }
  return null;
}
function R(_0x2fb539, _0x2a9425, _0x2ff16e, _0x198da5) {
  let _0x4ab8e5 = {
    fs: (0, i.pixelToPt)(_0x198da5),
    ...(_0x2ff16e ? { cl: { rgb: _0x2ff16e } } : null),
  };
  return {
    id: _0x2fb539,
    body: {
      dataStream: _0x2a9425 + "\x0d\x0a",
      paragraphs: [
        {
          startIndex: _0x2a9425.length,
          paragraphId: (0, t.createParagraphId)(new Set()),
          paragraphStyle: { textStyle: _0x4ab8e5 },
        },
      ],
      textRuns: [{ st: 0, ed: _0x2a9425.length, ts: _0x4ab8e5 }],
    },
    documentStyle: {
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      pageSize: { width: 10000, height: Math.max(100, _0x198da5 * 4) },
      renderConfig: {
        horizontalAlign: t.HorizontalAlign["LEFT"],
        verticalAlign: t.VerticalAlign["TOP"],
      },
      textStyle: _0x4ab8e5,
    },
  };
}
function z(_0x4eb5cc) {
  var _0x307e00;
  let _0x2d0f38 =
      (_0x307e00 = _0x4eb5cc.getSkeletonData()) == null
        ? undefined
        : _0x307e00.pages[0],
    _0x12345a = _0x2d0f38 == null ? undefined : _0x2d0f38.sections[0],
    _0x2cad52 = _0x12345a == null ? undefined : _0x12345a.columns[0],
    _0x350fdf = _0x2cad52 == null ? undefined : _0x2cad52.lines[0],
    _0x1af39b = _0x350fdf == null ? undefined : _0x350fdf.divides[0];
  return {
    column: _0x2cad52,
    divide: _0x1af39b,
    glyph: _0x1af39b == null ? undefined : _0x1af39b.glyphGroup[0],
    line: _0x350fdf,
    page: _0x2d0f38,
    section: _0x12345a,
  };
}
function B(_0x357630, _0x22fdfb) {
  var _0x44f7e6;
  let _0xc795f5 =
    ((_0x44f7e6 = _0x357630.line) == null
      ? undefined
      : _0x44f7e6.divides["reduce"](
          (_0x79d90b, _0x142e16) =>
            _0x79d90b +
            (_0x142e16.glyphGroupWidth ??
              _0x142e16.glyphGroup["reduce"](
                (_0x18dbc1, _0x2be426) => _0x18dbc1 + _0x2be426.width,
                0,
              )),
          0,
        )) ?? _0x22fdfb * 0.6;
  return {
    ascent:
      _0x357630.line && _0x357630.line["asc"] > 0
        ? _0x357630.line["asc"]
        : _0x22fdfb * 0.8,
    descent:
      _0x357630.line && _0x357630.line["dsc"] > 0
        ? _0x357630.line["dsc"]
        : _0x22fdfb * 0.2,
    width: Math.max(1, _0xc795f5),
  };
}
function V(_0x31fd9b, _0x3a8890) {
  let _0x536c08 = z(_0x31fd9b),
    _0x18438f = B(_0x536c08, _0x3a8890);
  return {
    metrics: _0x18438f,
    originBaseline: H(_0x536c08, _0x18438f.ascent),
    originX: U(_0x536c08),
  };
}
function H(_0x5b3aa4, _0x24dbc1) {
  var _0x2e0f3d, _0x5a7268, _0xa93a0f, _0x5b9289, _0x4c7219;
  return (
    (((_0x2e0f3d = _0x5b3aa4.page) == null ? undefined : _0x2e0f3d.marginTop) ??
      0) +
    (((_0x5a7268 = _0x5b3aa4.section) == null ? undefined : _0x5a7268.top) ??
      0) +
    (((_0xa93a0f = _0x5b3aa4.line) == null ? undefined : _0xa93a0f.top) ?? 0) +
    (((_0x5b9289 = _0x5b3aa4.line) == null ? undefined : _0x5b9289.marginTop) ??
      0) +
    (((_0x4c7219 = _0x5b3aa4.line) == null
      ? undefined
      : _0x4c7219.paddingTop) ?? 0) +
    _0x24dbc1
  );
}
function U(_0x54a22c) {
  var _0x255859, _0x491a53, _0x4f2297, _0x5a7e20, _0x45eafe;
  return (
    (((_0x255859 = _0x54a22c.page) == null
      ? undefined
      : _0x255859.marginLeft) ?? 0) +
    (((_0x491a53 = _0x54a22c.column) == null ? undefined : _0x491a53.left) ??
      0) +
    (((_0x4f2297 = _0x54a22c.divide) == null ? undefined : _0x4f2297.left) ??
      0) +
    (((_0x5a7e20 = _0x54a22c.divide) == null
      ? undefined
      : _0x5a7e20.paddingLeft) ?? 0) +
    (((_0x45eafe = _0x54a22c.glyph) == null ? undefined : _0x45eafe.left) ?? 0)
  );
}
let W = class extends t.Disposable {
  constructor(_0x37e931) {
    (super(),
      (this._localeService = _0x37e931),
      x(this, "_layouts", new Map()));
  }
  getMetrics(_0x320c1f, _0x36575a, _0x5a4deb) {
    return this._getLayout(_0x320c1f, _0x36575a, _0x5a4deb).metrics;
  }
  draw(_0x45e8af, _0x2392d0, _0x5c8e38, _0x29c374, _0x5f11f3, _0x38d56e) {
    let _0x1be3b1 = this._getLayout(_0x2392d0, _0x5c8e38, _0x29c374);
    return (
      _0x45e8af.save(),
      _0x45e8af.translateWithPrecision(
        _0x5f11f3 - _0x1be3b1.originX,
        _0x38d56e - _0x1be3b1.originBaseline,
      ),
      _0x1be3b1.documents["draw"](_0x45e8af),
      _0x45e8af.restore(),
      _0x1be3b1.metrics
    );
  }
  dispose() {
    for (let _0x35323a of this._layouts["values"]())
      (_0x35323a.documents["dispose"](),
        _0x35323a.documentSkeleton["dispose"](),
        _0x35323a.documentViewModel["dispose"](),
        _0x35323a.documentModel["dispose"]());
    (this._layouts["clear"](), super.dispose());
  }
  _getLayout(_0x254e4e, _0x513a05, _0x9a2671) {
    let _0x3620ec = _0x254e4e || "\x20",
      _0x34927e = JSON.stringify([_0x3620ec, _0x513a05 ?? "", _0x9a2671]),
      _0x404e12 = this._layouts["get"](_0x34927e);
    if (_0x404e12) return _0x404e12;
    let _0x636da2 = new t.DocumentDataModel(
        R(
          "doc-formula-render-" + this._layouts["size"],
          _0x3620ec,
          _0x513a05,
          _0x9a2671,
        ),
      ),
      _0x25bef1 = new i["DocumentViewModel"](_0x636da2),
      _0x51268b = i.DocumentSkeleton["create"](_0x25bef1, this._localeService);
    _0x51268b.calculate();
    let _0x3d494c = V(_0x51268b, _0x9a2671),
      _0x183d4e = new i["Documents"](_0x34927e, _0x51268b, {
        pageMarginLeft: 0,
        pageMarginTop: 0,
      });
    _0x183d4e.resize(
      _0x3d494c.metrics["width"],
      _0x3d494c.metrics["ascent"] + _0x3d494c.metrics["descent"],
    );
    let _0x794621 = {
      documents: _0x183d4e,
      documentModel: _0x636da2,
      documentSkeleton: _0x51268b,
      documentViewModel: _0x25bef1,
      ..._0x3d494c,
    };
    return (this._layouts["set"](_0x34927e, _0x794621), _0x794621);
  }
};
W = C([S(0, (0, t.Inject)(t.LocaleService))], W);
const G = -10980;
let K = class extends t.Disposable {
  constructor(
    _0xc0fd0f,
    _0x55ea1f,
    _0xe73c07,
    _0x7850a7,
    _0x31e71e,
    _0x39f9f7,
    _0x4253d4,
    _0x2589bd,
    _0x525eb3,
    _0x553f3b,
    _0x2c51e0,
    _0x4f7a14,
  ) {
    (super(),
      (this._context = _0xc0fd0f),
      (this._formulaService = _0x55ea1f),
      (this._textRenderService = _0xe73c07),
      (this._popupService = _0x7850a7),
      (this._interceptorService = _0x31e71e),
      (this._docLayoutExecutorService = _0x39f9f7),
      (this._selectionManagerService = _0x4253d4),
      (this._skeletonManagerService = _0x2589bd),
      (this._floatMenuService = _0x525eb3),
      (this._paragraphMenuService = _0x553f3b),
      (this._renderManagerService = _0x2c51e0),
      (this._themeService = _0x4f7a14),
      x(this, "_hitRects", new Map()),
      x(this, "_activeRangeIds", new Set()),
      x(this, "_hoveredRangeId", null),
      x(this, "_cursorBeforeHover", null),
      x(this, "_normalizingSelectionRangeId", null),
      this._initExtension(),
      this._initCustomRangeInterceptor(),
      this._initWorkerCustomRangePresentation(),
      this._initSelection(),
      this._initPointer(),
      this.disposeWithMe(
        this._formulaService["presentationChanged$"].subscribe(
          ({ unitId: _0x3c1828 }) => {
            _0x3c1828 === this._context["unitId"] && this._recalculateLayout();
          },
        ),
      ),
      this.disposeWithMe(
        this._themeService["currentTheme$"].subscribe(() => {
          this._context["scene"].makeDirty(true);
        }),
      ),
      this.disposeWithMe(
        this._themeService["darkMode$"].subscribe(() => {
          this._context["scene"].makeDirty(true);
        }),
      ));
  }
  _initExtension() {
    let _0x3630d2 = this._context["mainComponent"];
    if (!(_0x3630d2 instanceof i.Documents)) return;
    let _0x679d9b = _0x3630d2.register(
      new ce({
        clearHitRects: () => this._hitRects["clear"](),
        getBody: () => this._context["unit"].getBody(),
        getChromeTheme: () =>
          (0, r.resolveDocCustomRangeChromeTheme)(this._themeService),
        getResult: (_0x4fd9f0) =>
          this._formulaService["getResult"]({
            unitId: this._context["unitId"],
            rangeId: _0x4fd9f0,
          }),
        isActive: (_0x178132) =>
          this._hoveredRangeId === _0x178132 ||
          this._activeRangeIds["has"](_0x178132),
        renderService: this._textRenderService,
        setHitRect: (_0x27a536) =>
          this._hitRects["set"](
            _0x27a536.range["rangeId"],
            this._toDocumentHitRect(_0x27a536),
          ),
      }),
    );
    this.disposeWithMe(_0x679d9b);
  }
  _initCustomRangeInterceptor() {
    this.disposeWithMe(
      this._interceptorService["intercept"](
        n.DOC_INTERCEPTOR_POINT["CUSTOM_RANGE"],
        {
          priority: 110,
          handler: (_0x5d9141, _0x529189, _0xa390d6) => {
            let _0x335295 = _0xa390d6(_0x5d9141);
            return !_0x335295 || !(0, e.isDocFormulaRange)(_0x335295)
              ? _0x335295
              : { ..._0x335295, ...this._getFormulaPresentation(_0x335295) };
          },
        },
      ),
    );
  }
  _initWorkerCustomRangePresentation() {
    this.disposeWithMe(
      this._docLayoutExecutorService["registerCustomRangePresentationProvider"](
        (_0x3e7cb6, _0x57714c) =>
          _0x3e7cb6 !== this._context["unitId"] ||
          !(0, e.isDocFormulaRange)(_0x57714c)
            ? null
            : this._getFormulaPresentation(_0x57714c),
      ),
    );
  }
  _getFormulaPresentation(_0x52dda4) {
    let _0x2ae8a1 = this._formulaService["getResult"]({
        unitId: this._context["unitId"],
        rangeId: _0x52dda4.rangeId,
      }),
      _0x347625 = (0, i.ptToPixel)(14),
      _0x957111 = this._textRenderService["getMetrics"](
        (_0x2ae8a1 == null ? undefined : _0x2ae8a1.text) || "…",
        _0x2ae8a1 == null ? undefined : _0x2ae8a1.color,
        _0x347625,
      );
    return {
      active: this._activeRangeIds["has"](_0x52dda4.rangeId),
      glyphAscentEm: _0x957111.ascent / _0x347625,
      glyphDescentEm: _0x957111.descent / _0x347625,
      glyphWidthEm: _(_0x957111, _0x347625),
      show: false,
    };
  }
  _initSelection() {
    this.disposeWithMe(
      this._selectionManagerService["textSelection$"].subscribe(
        ({ textRanges: _0x1f5b32, unitId: _0x41fa9c, options: _0x2db3c8 }) => {
          _0x41fa9c === this._context["unitId"] &&
            this._updateSelectionState(
              _0x1f5b32,
              (_0x2db3c8 == null
                ? undefined
                : _0x2db3c8[n.DOC_SELECTION_OPTION_PRESERVE_CARET]) === true,
            );
        },
      ),
    );
  }
  _updateSelectionState(_0x11b029, _0x3bea73 = false) {
    var _0x4832a7;
    this._activeRangeIds["clear"]();
    let _0x337fd6 =
        ((_0x4832a7 = this._context["unit"].getBody()) == null ||
        (_0x4832a7 = _0x4832a7.customRanges) == null
          ? undefined
          : _0x4832a7.filter(e.isDocFormulaRange)) ?? [],
      {
        focusedRange: _0x53cc5e,
        focusedSelection: _0x302089,
        focusedTarget: _0xa3c4c9,
      } = ue(
        le(_0x11b029, _0x3bea73),
        _0x337fd6,
        (_0x11b029 == null ? undefined : _0x11b029.length) === 1,
        this._activeRangeIds,
      );
    if (
      _0x53cc5e &&
      _0x302089 &&
      (_0x302089.collapsed || !m(_0x302089.style)) &&
      this._normalizingSelectionRangeId !== _0x53cc5e.rangeId
    ) {
      ((this._normalizingSelectionRangeId = _0x53cc5e.rangeId),
        this._selectFormulaRange(_0x53cc5e, _0x302089));
      return;
    }
    ((!_0x53cc5e || m(_0x302089 == null ? undefined : _0x302089.style)) &&
      (this._normalizingSelectionRangeId = null),
      this._popupService["hasOpenEditor"] ||
        (_0xa3c4c9
          ? (this._closeCompetingContextMenus(),
            this._popupService["showHover"](
              { unitId: this._context["unitId"], ..._0xa3c4c9 },
              () => this._getFormulaAnchorRect(_0xa3c4c9.rangeId),
            ))
          : this._popupService["closeHover"]()),
      this._context["scene"].makeDirty(true));
  }
  _initPointer() {
    let _0x5dcab3 = this._context["mainComponent"] ?? this._context["scene"];
    (this.disposeWithMe(
      _0x5dcab3.onPointerMove$["subscribeEvent"]({
        next: ([_0x847d88]) => {
          if (_0x847d88.buttons > 0) {
            this._restoreCursor();
            return;
          }
          let _0x23a6c6 = q(
              _0x847d88.offsetX,
              _0x847d88.offsetY,
              this._context["scene"],
            ),
            _0x1ef353 = F(
              [...this._hitRects["values"]()],
              _0x23a6c6.x,
              _0x23a6c6.y,
            );
          if (!_0x1ef353) {
            (this._setHoveredRange(null), this._restoreCursor());
            return;
          }
          (this._setHoveredRange(_0x1ef353.range["rangeId"]),
            this._setPointerCursor());
        },
        priority: G,
      }),
    ),
      this.disposeWithMe(
        _0x5dcab3.onPointerLeave$["subscribeEvent"](() => {
          (this._setHoveredRange(null), this._restoreCursor());
        }),
      ),
      this.disposeWithMe(
        _0x5dcab3.onPointerDown$["subscribeEvent"]({
          next: ([_0x6ab1b2, _0x148ab2]) => {
            var _0x54dd7e, _0x86ae5;
            if (_0x6ab1b2.button === 2) return;
            let _0x44ae85 = q(
                _0x6ab1b2.offsetX,
                _0x6ab1b2.offsetY,
                this._context["scene"],
              ),
              _0x55a928 = F(
                [...this._hitRects["values"]()],
                _0x44ae85.x,
                _0x44ae85.y,
              );
            _0x55a928 &&
              (_0x148ab2.stopPropagation(),
              (_0x148ab2.skipNextObservers = true),
              (_0x54dd7e = _0x6ab1b2.preventDefault) == null ||
                _0x54dd7e.call(_0x6ab1b2),
              (_0x86ae5 = _0x6ab1b2.stopPropagation) == null ||
                _0x86ae5.call(_0x6ab1b2),
              this._closeCompetingContextMenus(),
              this._selectFormulaRange(_0x55a928.range, {
                segmentId: _0x55a928.segmentId,
                segmentPage: _0x55a928.segmentPage,
              }),
              this._popupService["showHover"](
                {
                  unitId: this._context["unitId"],
                  rangeId: _0x55a928.range["rangeId"],
                  segmentId: _0x55a928.segmentId,
                  segmentPage: _0x55a928.segmentPage,
                },
                () => this._getFormulaAnchorRect(_0x55a928.range["rangeId"]),
              ));
          },
          priority: G,
        }),
      ));
  }
  _selectFormulaRange(_0xaf323d, _0x520ec1) {
    this._selectionManagerService["replaceDocRanges"](
      [
        {
          endOffset: _0xaf323d.endIndex + 1,
          segmentId: _0x520ec1.segmentId,
          segmentPage: _0x520ec1.segmentPage,
          startOffset: _0xaf323d.startIndex,
          style: p,
        },
      ],
      { subUnitId: this._context["unitId"], unitId: this._context["unitId"] },
    );
  }
  _closeCompetingContextMenus() {
    (this._floatMenuService["hideFloatMenu"](),
      this._paragraphMenuService["hideParagraphMenu"](true));
  }
  _getFormulaAnchorRect(_0xb0c7e9) {
    let _0x2f2ead = this._hitRects["get"](_0xb0c7e9);
    return _0x2f2ead
      ? {
          bottom: _0x2f2ead.bottom,
          left: _0x2f2ead.left,
          right: _0x2f2ead.right,
          top: _0x2f2ead.top,
        }
      : undefined;
  }
  _toDocumentHitRect(_0x1a73d9) {
    let _0x3e42a6 = this._context["mainComponent"];
    if (!(_0x3e42a6 instanceof i.Documents)) return _0x1a73d9;
    let { docsLeft: _0x53e992 = 0, docsTop: _0x35a1ad = 0 } =
      _0x3e42a6.getOffsetConfig();
    return {
      ..._0x1a73d9,
      bottom: _0x1a73d9.bottom + _0x35a1ad,
      contentRight: _0x1a73d9.contentRight + _0x53e992,
      left: _0x1a73d9.left + _0x53e992,
      right: _0x1a73d9.right + _0x53e992,
      top: _0x1a73d9.top + _0x35a1ad,
    };
  }
  _setPointerCursor() {
    ((this._cursorBeforeHover ??= this._context["scene"].getCursor()),
      this._context["scene"].setCursor(i.CURSOR_TYPE["POINTER"]));
  }
  _setHoveredRange(_0x2b2843) {
    this._hoveredRangeId !== _0x2b2843 &&
      ((this._hoveredRangeId = _0x2b2843),
      this._context["scene"].makeDirty(true));
  }
  _restoreCursor() {
    this._cursorBeforeHover != null &&
      (this._context["scene"].setCursor(this._cursorBeforeHover),
      (this._cursorBeforeHover = null));
  }
  _recalculateLayout() {
    if (this._docLayoutExecutorService["getExecutor"]() != null) {
      var _0x13f7cb, _0x24edd3;
      let _0x5227fb = Math.min(
          ...(((_0x13f7cb = this._context["unit"].getBody()) == null ||
          (_0x13f7cb = _0x13f7cb.customRanges) == null
            ? undefined
            : _0x13f7cb
                .filter(e.isDocFormulaRange)
                .map((_0x22a533) => _0x22a533.startIndex)) ?? [0]),
        ),
        _0x41ff92 =
          (_0x24edd3 = this._renderManagerService["getRenderUnitById"](
            this._context["unitId"],
          )) == null
            ? undefined
            : _0x24edd3.with(r.DocRenderController);
      if (_0x41ff92 != null) {
        let _0x505efb = Number.isFinite(_0x5227fb) ? _0x5227fb : 0;
        _0x41ff92.reRender(
          this._context["unitId"],
          _0x505efb,
          undefined,
          _0x505efb,
          false,
          true,
        );
        return;
      }
    }
    let _0x1ba227 = this._skeletonManagerService["getSkeleton"]();
    (_0x1ba227.makeDirty(true),
      _0x1ba227.calculate(),
      this._context["scene"].makeDirty(true));
  }
};
K = C(
  [
    S(1, (0, t.Inject)(e.DocFormulaService)),
    S(2, (0, t.Inject)(W)),
    S(3, (0, t.Inject)(w)),
    S(4, (0, t.Inject)(n.DocInterceptorService)),
    S(5, (0, t.Inject)(n.DocLayoutExecutorService)),
    S(6, (0, t.Inject)(n.DocSelectionManagerService)),
    S(7, (0, t.Inject)(n.DocSkeletonManagerService)),
    S(8, (0, t.Inject)(r.DocFloatMenuService)),
    S(9, (0, t.Inject)(r.DocParagraphMenuService)),
    S(10, i.IRenderManagerService),
    S(11, (0, t.Inject)(t.ThemeService)),
  ],
  K,
);
function le(_0x5d9a89, _0x14b6c2) {
  return _0x14b6c2
    ? ((_0x5d9a89 == null
        ? undefined
        : _0x5d9a89.filter((_0x2bf474) => !_0x2bf474.collapsed)) ?? [])
    : (_0x5d9a89 ?? []);
}
function ue(_0x2e4d69, _0xae62f6, _0x435b25, _0x409043) {
  let _0x51fcce = null,
    _0xf189b0 = null,
    _0x218fc9 = null;
  for (let _0x2c6392 of _0x2e4d69) {
    let _0x3270dc = {
      collapsed: _0x2c6392.collapsed,
      endOffset: _0x2c6392.endOffset ?? _0x2c6392.startOffset ?? 0,
      startOffset: _0x2c6392.startOffset ?? 0,
    };
    for (let _0x4faae6 of _0xae62f6)
      (se(_0x4faae6, _0x3270dc) && _0x409043.add(_0x4faae6.rangeId),
        _0x435b25 &&
          oe(_0x4faae6, _0x3270dc) &&
          ((_0x51fcce = _0x4faae6),
          (_0xf189b0 = _0x2c6392),
          (_0x218fc9 = {
            rangeId: _0x4faae6.rangeId,
            segmentId: _0x2c6392.segmentId,
            segmentPage: _0x2c6392.segmentPage,
          })));
  }
  return {
    focusedRange: _0x51fcce,
    focusedSelection: _0xf189b0,
    focusedTarget: _0x218fc9,
  };
}
function q(_0x45de14, _0x2a4d60, _0x151c59) {
  let { scaleX: _0x2e23af, scaleY: _0x58888e } = _0x151c59.getAncestorScale(),
    _0x3a4a07 = _0x151c59.getViewport("viewMain");
  return _0x3a4a07
    ? I(
        _0x45de14,
        _0x2a4d60,
        _0x2e23af,
        _0x58888e,
        _0x3a4a07.viewportScrollX,
        _0x3a4a07.viewportScrollY,
      )
    : I(_0x45de14, _0x2a4d60, _0x2e23af, _0x58888e);
}
let J = class extends t.Disposable {
  constructor(_0xebdb6e, _0x33b827, _0xdaa22d, _0x2904f3, _0xdf0998) {
    (super(),
      (this._displayTextService = _0x2904f3),
      (this._model = _0xdf0998),
      this.disposeWithMe(
        _0xebdb6e.addClipboardHook({
          onBeforePaste: (_0x4026da, _0x3f8689) =>
            this._degradeCrossDocumentPaste(
              _0x4026da,
              _0x3f8689.documentData,
              _0x3f8689.targetUnitId,
            ),
          onCopyDocData: (_0x1e658a, _0x524671) =>
            this._appendFormulaResource(_0x1e658a, _0x524671.sourceDocuments),
          onCopyContent: (_0x18d2e2, _0x391905, _0x3b48b7) =>
            _0x3b48b7.segmentId
              ? _0x3b48b7.body["dataStream"].slice(_0x18d2e2, _0x391905)
              : this._displayTextService["resolveText"](
                  _0x3b48b7.unitId,
                  _0x18d2e2,
                  _0x391905,
                ),
        }),
      ),
      this.disposeWithMe(
        _0x33b827.registerAdapter({
          getPasteMutationInfos: (_0x2911d3) =>
            this._getPasteMutationInfos(_0x2911d3),
        }),
      ),
      this.disposeWithMe(
        _0xdaa22d.registerTransformer((_0x36005a) =>
          this._displayTextService["degradeDocumentData"](_0x36005a),
        ),
      ));
  }
  _appendFormulaResource(_0x1d9471, _0x26d9e0) {
    var _0x430549;
    if (_0x26d9e0.length !== 1) return _0x1d9471;
    let _0x4907e5 = _0x26d9e0[0],
      _0x3bba8b = {},
      _0x3d0057 = {};
    if (
      ((_0x430549 = _0x4907e5.body) == null ||
        (_0x430549 = _0x430549.customRanges) == null ||
        _0x430549.forEach((_0x116df7) => {
          if (!(0, e.isDocFormulaRange)(_0x116df7)) return;
          let _0x3add8c = this._model["getFormula"](
            _0x4907e5.id,
            _0x116df7.rangeId,
          );
          _0x3add8c &&
            ((_0x3bba8b[_0x116df7.rangeId] = t.Tools["deepClone"](_0x3add8c)),
            (_0x3d0057[_0x116df7.rangeId] = this._displayTextService[
              "resolveFormula"
            ](_0x4907e5.id, _0x116df7.rangeId)));
        }),
      Object.keys(_0x3bba8b).length === 0)
    )
      return _0x1d9471;
    let _0x59d116 = {
      schemaVersion: e.DOC_FORMULA_SCHEMA_VERSION,
      formulas: _0x3bba8b,
      clipboard: { sourceUnitId: _0x4907e5.id, displayText: _0x3d0057 },
    };
    return {
      ..._0x1d9471,
      id: _0x4907e5.id,
      resources: [
        ...(_0x1d9471.resources ?? []).filter(
          (_0x43086c) => _0x43086c.name !== e.DOC_FORMULA_PLUGIN,
        ),
        { name: e.DOC_FORMULA_PLUGIN, data: JSON.stringify(_0x59d116) },
      ],
    };
  }
  _degradeCrossDocumentPaste(_0x4a363f, _0x42a3bf, _0x5db2a0) {
    let _0x593849 = Y(_0x42a3bf);
    return !_0x593849 || _0x593849.clipboard["sourceUnitId"] === _0x5db2a0
      ? _0x4a363f
      : this._displayTextService["degradeBody"](
          _0x593849.clipboard["sourceUnitId"],
          _0x4a363f,
          _0x593849.clipboard["displayText"],
        );
  }
  _getPasteMutationInfos(_0x151a42) {
    let _0x43af96 = Y(_0x151a42.doc);
    if (!_0x43af96 || _0x43af96.clipboard["sourceUnitId"] !== _0x151a42.unitId)
      return { redoMutations: [], undoMutations: [] };
    let _0x14fb85 = [],
      _0x11cb9a = [];
    for (let _0x497bd7 of _0x151a42.customRangeMappings ?? []) {
      if (!(0, e.isDocFormulaRange)(_0x497bd7.sourceRange)) continue;
      let _0x1cacb1 = _0x43af96.formulas[_0x497bd7.sourceRange["rangeId"]];
      !_0x1cacb1 ||
        !(0, e.isDocFormulaRange)(_0x497bd7.targetRange) ||
        (_0x14fb85.push({
          id: e.SetDocFormulaMutation["id"],
          params: {
            unitId: _0x151a42.unitId,
            rangeId: _0x497bd7.targetRange["rangeId"],
            config: _0x1cacb1,
          },
        }),
        _0x11cb9a.push({
          id: e.RemoveDocFormulaMutation["id"],
          params: {
            unitId: _0x151a42.unitId,
            rangeId: _0x497bd7.targetRange["rangeId"],
          },
        }));
    }
    return { redoMutations: _0x14fb85, undoMutations: _0x11cb9a };
  }
};
J = C(
  [
    S(0, r.IDocClipboardService),
    S(1, r.IDocClipboardPasteAdapterService),
    S(2, (0, t.Inject)(r.DocHtmlExportService)),
    S(3, (0, t.Inject)(e.DocFormulaDisplayTextService)),
    S(4, (0, t.Inject)(e.DocFormulaModel)),
  ],
  J,
);
function Y(_0x25f42a) {
  var _0x41e01c;
  let _0x566464 =
    (_0x41e01c = _0x25f42a.resources) == null
      ? undefined
      : _0x41e01c.find((_0xc9ee9) => _0xc9ee9.name === e.DOC_FORMULA_PLUGIN);
  if (!_0x566464) return null;
  try {
    let _0x1143ec = JSON.parse(_0x566464.data);
    if (
      !_0x1143ec ||
      typeof _0x1143ec != "object" ||
      Array.isArray(_0x1143ec) ||
      Object.keys(_0x1143ec).length !== 3 ||
      !("schemaVersion" in _0x1143ec) ||
      !("formulas" in _0x1143ec) ||
      !("clipboard" in _0x1143ec)
    )
      return null;
    let _0x53724a = {
      schemaVersion: _0x1143ec.schemaVersion,
      formulas: _0x1143ec.formulas,
    };
    if (!(0, e.isDocFormulaResource)(_0x53724a)) return null;
    let _0xe70a7e = de(_0x1143ec.clipboard);
    return _0xe70a7e
      ? {
          schemaVersion: _0x53724a.schemaVersion,
          formulas: _0x53724a.formulas,
          clipboard: _0xe70a7e,
        }
      : null;
  } catch {
    return null;
  }
}
function de(_0xff559) {
  if (
    !_0xff559 ||
    typeof _0xff559 != "object" ||
    Array.isArray(_0xff559) ||
    Object.keys(_0xff559).length !== 2 ||
    !("sourceUnitId" in _0xff559) ||
    typeof _0xff559.sourceUnitId != "string" ||
    !("displayText" in _0xff559) ||
    !_0xff559.displayText ||
    typeof _0xff559.displayText != "object" ||
    Array.isArray(_0xff559.displayText)
  )
    return null;
  let _0x22e753 = {};
  for (let [_0x3e0c37, _0x240fc4] of Object.entries(_0xff559.displayText)) {
    if (typeof _0x240fc4 != "string") return null;
    _0x22e753[_0x3e0c37] = _0x240fc4;
  }
  return { sourceUnitId: _0xff559.sourceUnitId, displayText: _0x22e753 };
}
const X = 1000;
function Z(_0x3fa2b9) {
  let _0x151f62 = (_0x5160a3) =>
    fe(_0x5160a3.target, _0x3fa2b9.hasSelectedFormula);
  return [
    {
      id: T.id,
      binding: o.KeyCode["ENTER"],
      priority: X,
      eventPreconditions: _0x151f62,
    },
    {
      id: E.id,
      binding: o.KeyCode["F10"] | o.MetaKeys["SHIFT"],
      priority: X,
      eventPreconditions: _0x151f62,
    },
    {
      id: D.id,
      binding: o.KeyCode["ESC"],
      priority: X,
      eventPreconditions: _0x3fa2b9.hasOpenPopup,
    },
    {
      id: O.id,
      binding: o.KeyCode["BACKSPACE"],
      priority: X,
      eventPreconditions: _0x151f62,
    },
    {
      id: O.id,
      binding: o.KeyCode["DELETE"],
      priority: X,
      eventPreconditions: _0x151f62,
    },
  ];
}
function fe(_0xbc9a2f, _0x1c2101) {
  return !pe(_0xbc9a2f) && _0x1c2101();
}
function pe(_0x205c40) {
  return (
    typeof HTMLElement < "u" &&
    _0x205c40 instanceof HTMLElement &&
    (_0x205c40.isContentEditable ||
      _0x205c40 instanceof HTMLInputElement ||
      _0x205c40 instanceof HTMLTextAreaElement)
  );
}
let Q = class extends t.Disposable {
  constructor(_0x11dd3f, _0x3b57a3, _0x37912f, _0x4f2bf9, _0x529c5f) {
    (super(),
      (this._commandService = _0x11dd3f),
      (this._menuManagerService = _0x3b57a3),
      (this._shortcutService = _0x37912f),
      (this._univerInstanceService = _0x4f2bf9),
      (this._popupService = _0x529c5f),
      [T, E, D, O].forEach((_0x312798) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x312798));
      }),
      Z({
        hasOpenPopup: () => this._popupService["hasOpenPopup"],
        hasSelectedFormula: () => this._hasSelectedFormula(),
      }).forEach((_0x2e6ec3) => {
        this.disposeWithMe(
          this._shortcutService["registerShortcut"](_0x2e6ec3),
        );
      }),
      this._menuManagerService["appendRootMenu"](M));
  }
  _hasSelectedFormula() {
    var _0x54b15a;
    let _0x238078 =
      (_0x54b15a = this._univerInstanceService["getCurrentUnitOfType"](
        t.UniverInstanceType["UNIVER_DOC"],
      )) == null
        ? undefined
        : _0x54b15a.getUnitId();
    return !!(
      _0x238078 && this._popupService["getSelectedFormulaTarget"](_0x238078)
    );
  }
};
Q = C(
  [
    S(0, t.ICommandService),
    S(1, o.IMenuManagerService),
    S(2, o.IShortcutService),
    S(3, t.IUniverInstanceService),
    S(4, (0, t.Inject)(w)),
  ],
  Q,
);
const me = [K];
let $ = class extends t.Plugin {
  constructor(_0x1e3daf = j, _0x373536, _0x30a9d0, _0x21e2d1) {
    (super(),
      (this._config = _0x1e3daf),
      (this._injector = _0x373536),
      (this._renderManagerService = _0x30a9d0),
      (this._configService = _0x21e2d1));
    let { menu: _0x334f0d, ..._0x1ad412 } = (0, t.merge)({}, j, this._config);
    (_0x334f0d &&
      this._configService["setConfig"]("menu", _0x334f0d, { merge: true }),
      this._configService["setConfig"](A, _0x1ad412),
      this._configService["setConfig"](
        c.SHAPE_EDITOR_UI_PLUGIN_CONFIG_KEY,
        _0x1ad412,
        { merge: true },
      ));
  }
  onStarting() {
    (this._injector["add"]([W]),
      this._injector["add"]([w]),
      this._injector["add"]([P]),
      this._injector["add"]([Q]),
      this._injector["add"]([J]),
      (0, t.touchDependencies)(this._injector, [[W], [P], [Q], [J]]));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        t.UniverInstanceType["UNIVER_DOC"],
        me,
      ),
    );
  }
};
(x($, "pluginName", e.DOC_FORMULA_PLUGIN + "_UI_PLUGIN"),
  x($, "packageName", N),
  x($, "version", re),
  x($, "type", t.UniverInstanceType["UNIVER_DOC"]),
  ($ = C(
    [
      (0, t.DependentOn)(
        s.UniverLicensePlugin,
        n.UniverDocsPlugin,
        i.UniverRenderEnginePlugin,
        r.UniverDocsUIPlugin,
        e.UniverDocsFormulaPlugin,
        c.UniverShapeEditorUIPlugin,
      ),
      S(1, (0, t.Inject)(t.Injector)),
      S(2, i.IRenderManagerService),
      S(3, t.IConfigService),
    ],
    $,
  )),
  (exports.CloseDocFormulaPopupOperation = D),
  (exports.DOCS_FORMULA_UI_PLUGIN_CONFIG_KEY = A),
  (exports.OpenDocFormulaEditorOperation = T),
  (exports.OpenSelectedDocFormulaHoverOperation = E),
  (exports.RemoveSelectedDocFormulaOperation = O),
  Object.defineProperty(exports, "UniverDocsFormulaUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.docsFormulaRootMenuSchema = M));
