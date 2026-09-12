import {
  ConvertDocFormulaToTextCommand as _0x5f096b,
  DOC_FORMULA_PLUGIN as _0x196fe9,
  DOC_FORMULA_SCHEMA_VERSION as _0x5e519c,
  DocFormulaDisplayTextService as _0x54f485,
  DocFormulaModel as _0x3e5767,
  DocFormulaService as _0x3ffd60,
  InsertDocFormulaCommand as _0x532107,
  RemoveDocFormulaCommand as _0x50c4aa,
  RemoveDocFormulaMutation as _0x10fba9,
  SetDocFormulaMutation as _0x130155,
  SetDocFormulaNumberFormatCommand as _0x15347a,
  UniverDocsFormulaPlugin as _0xeea30b,
  UpdateDocFormulaCommand as _0x430f1f,
  findDocFormulaRange as _0x56bbae,
  isDocFormulaRange as _0x2ad1d9,
  isDocFormulaResource as _0x173a3f,
} from "@univerjs-pro/docs-formula";
import {
  CommandType as _0x313d32,
  DEFAULT_NUMBER_FORMAT as _0x287f4a,
  DependentOn as _0x49f7a4,
  Disposable as _0x331883,
  DocumentDataModel as _0x4cd143,
  HorizontalAlign as _0x4c66cf,
  ICommandService as _0x112674,
  IConfigService as _0x109f5a,
  IPermissionService as _0x2aff36,
  IUniverInstanceService as _0x5a939b,
  Inject as _0x2147a1,
  Injector as _0x229c3f,
  LocaleService as _0x1d0291,
  Plugin as _0xa543f7,
  ThemeService as _0x410d68,
  Tools as _0x2b5367,
  UniverInstanceType as _0x8ad92e,
  VerticalAlign as _0xbfcb0a,
  createParagraphId as _0x40d6b3,
  merge as _0x58ba08,
  touchDependencies as _0x5b9ab7,
} from "@univerjs/core";
import {
  DOC_INTERCEPTOR_POINT as _0x2c0cfc,
  DOC_SELECTION_OPTION_PRESERVE_CARET as _0x428e80,
  DocInterceptorService as _0x2874a1,
  DocLayoutExecutorService as _0x6ab15e,
  DocSelectionManagerService as _0x248513,
  DocSkeletonManagerService as _0x1c7ae9,
  UniverDocsPlugin as _0x3cc704,
  canEditDocumentTargets as _0x4624ca,
  getDocumentEntityParentPermissionObjectIds as _0x6d6620,
  getDocumentEntityPermissionObjectId as _0x414aec,
} from "@univerjs/docs";
import {
  DocCanvasPopManagerService as _0x442fd7,
  DocFloatMenuService as _0x2c4a08,
  DocHtmlExportService as _0x4cd219,
  DocParagraphMenuService as _0x207f0b,
  DocRenderController as _0x28f78a,
  IDocClipboardPasteAdapterService as _0xdad2f4,
  IDocClipboardService as _0x3255ce,
  UniverDocsUIPlugin as _0x582ca0,
  disableMenuWhenHeaderFooterEditing as _0x469bf7,
  drawDocCustomRangeChrome as _0x1e12ed,
  resolveDocCustomRangeChromeTheme as _0x5b0c1d,
} from "@univerjs/docs-ui";
import {
  CURSOR_TYPE as _0x33f1d3,
  ComponentExtension as _0x2b4db9,
  DocumentSkeleton as _0x142cbf,
  DocumentViewModel as _0x4946ab,
  Documents as _0x3f8039,
  IRenderManagerService as _0x5a1b90,
  UniverRenderEnginePlugin as _0x31df78,
  pixelToPt as _0x6a42fd,
  ptToPixel as _0xbe858d,
} from "@univerjs/engine-render";
import { BehaviorSubject as _0x1ecb48 } from "rxjs";
import {
  ComponentManager as _0xc3e596,
  IMenuManagerService as _0x3db2c8,
  IShortcutService as _0xdbf8b,
  IconManager as _0x105e4c,
  KeyCode as _0xb537ca,
  MenuItemType as _0x83af76,
  MenuManagerPosition as _0xef2ba4,
  MetaKeys as _0xf0dbb8,
  RibbonInsertGroup as _0x546fa7,
  RibbonPosition as _0x29029e,
  getMenuHiddenObservable as _0x27af0d,
  useDependency as _0x29f127,
  useObservable as _0x33189f,
} from "@univerjs/ui";
import { UniverLicensePlugin as _0x598f5b } from "@univerjs-pro/license";
import {
  FormulaBindingEditorDialog as _0x31cbe5,
  FormulaBindingNumberFormatDialog as _0x49f743,
  SHAPE_EDITOR_UI_PLUGIN_CONFIG_KEY as _0x59e17c,
  UniverShapeEditorUIPlugin as _0x23e511,
} from "@univerjs-pro/shape-editor-ui";
import {
  DeleteIcon as _0x1e6e35,
  FxIcon as _0x17b5a6,
  NumberIcon as _0x4751a5,
  TextIcon as _0x4c7060,
  WriteIcon as _0x5ad656,
} from "@univerjs/icons";
import {
  Fragment as _0x4e1a6c,
  jsx as _0xefc92d,
  jsxs as _0x245b1b,
} from "react/jsx-runtime";
import { Button as _0x33fdce, Tooltip as _0xe7a6ea } from "@univerjs/design";
import { useState as _0x59d0ca } from "react";
const A = {
  fill: "rgba(0,\x200,\x200,\x200)",
  stroke: "rgba(0, 0, 0, 0)",
  strokeActive: "rgba(0,\x200,\x200,\x200)",
  strokeWidth: 0,
};
function pt(_0x520d0a) {
  return (
    (_0x520d0a == null ? undefined : _0x520d0a.fill) === A.fill &&
    _0x520d0a.stroke === A.stroke &&
    _0x520d0a.strokeActive === A.strokeActive &&
    _0x520d0a.strokeWidth === A.strokeWidth
  );
}
function mt(_0x2fa458, _0x47bb3d, _0x5a6967) {
  let _0x5ab3f9 = _0x47bb3d - _0x5a6967.ascent - 2,
    _0x1079b9 = _0x5a6967.ascent + _0x5a6967.descent + 4,
    _0x253add = _0x2fa458,
    _0xf6e9c2 = _0x253add + ht(_0x5a6967);
  return {
    bottom: _0x5ab3f9 + _0x1079b9,
    contentRight: _0xf6e9c2,
    height: _0x1079b9,
    left: _0x253add,
    textX: _0x253add + 2,
    top: _0x5ab3f9,
  };
}
function ht(_0x2e6bd4) {
  return _0x2e6bd4.width + 4;
}
function gt(_0x5665e5, _0x48c727) {
  return ht(_0x5665e5) / _0x48c727;
}
const j = "DOC_FORMULA_EDITOR_POPUP",
  M = "DOC_FORMULA_HOVER_POPUP";
function N(_0x33ea7e) {
  "@babel/helpers - typeof";
  return (
    (N =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5be796) {
            return typeof _0x5be796;
          }
        : function (_0x213027) {
            return _0x213027 &&
              typeof Symbol == "function" &&
              _0x213027.constructor === Symbol &&
              _0x213027 !== Symbol.prototype
              ? "symbol"
              : typeof _0x213027;
          }),
    N(_0x33ea7e)
  );
}
function _t(_0x46b1dc, _0x310aed) {
  if (N(_0x46b1dc) != "object" || !_0x46b1dc) return _0x46b1dc;
  var _0xe215ac = _0x46b1dc[Symbol.toPrimitive];
  if (_0xe215ac !== undefined) {
    var _0x5d2d7c = _0xe215ac.call(_0x46b1dc, _0x310aed || "default");
    if (N(_0x5d2d7c) != "object") return _0x5d2d7c;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x310aed === "string" ? String : Number)(_0x46b1dc);
}
function vt(_0x5dc06f) {
  var _0x243816 = _t(_0x5dc06f, "string");
  return N(_0x243816) == "symbol" ? _0x243816 : _0x243816 + "";
}
function P(_0xfacf63, _0x1b6e68, _0x305f3a) {
  return (
    (_0x1b6e68 = vt(_0x1b6e68)) in _0xfacf63
      ? Object.defineProperty(_0xfacf63, _0x1b6e68, {
          value: _0x305f3a,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xfacf63[_0x1b6e68] = _0x305f3a),
    _0xfacf63
  );
}
function F(_0x5463f0, _0x20d98e) {
  return function (_0x4096a3, _0x4bd7fa) {
    _0x20d98e(_0x4096a3, _0x4bd7fa, _0x5463f0);
  };
}
function I(_0xcedb9e, _0x41850e, _0x5d5828, _0x43ebeb) {
  var _0x10900f = arguments.length,
    _0x3eb8ec =
      _0x10900f < 3
        ? _0x41850e
        : _0x43ebeb === null
          ? (_0x43ebeb = Object.getOwnPropertyDescriptor(_0x41850e, _0x5d5828))
          : _0x43ebeb,
    _0x5a0f3b;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3eb8ec = Reflect.decorate(_0xcedb9e, _0x41850e, _0x5d5828, _0x43ebeb);
  else {
    for (var _0x472f8a = _0xcedb9e.length - 1; _0x472f8a >= 0; _0x472f8a--)
      (_0x5a0f3b = _0xcedb9e[_0x472f8a]) &&
        (_0x3eb8ec =
          (_0x10900f < 3
            ? _0x5a0f3b(_0x3eb8ec)
            : _0x10900f > 3
              ? _0x5a0f3b(_0x41850e, _0x5d5828, _0x3eb8ec)
              : _0x5a0f3b(_0x41850e, _0x5d5828)) || _0x3eb8ec);
  }
  return (
    _0x10900f > 3 &&
      _0x3eb8ec &&
      Object.defineProperty(_0x41850e, _0x5d5828, _0x3eb8ec),
    _0x3eb8ec
  );
}
let L = class extends _0x331883 {
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
    _0xd9a8df,
    _0x4f72d2,
    _0xb901b8,
    _0x59c263,
    _0x5ee4af,
    _0x5001f8,
  ) {
    (super(),
      (this._popupManagerService = _0xd9a8df),
      (this._selectionManagerService = _0x4f72d2),
      (this._model = _0xb901b8),
      (this._univerInstanceService = _0x59c263),
      (this._permissionService = _0x5ee4af),
      (this._renderManagerService = _0x5001f8),
      P(this, "_editorPopup", null),
      P(this, "_hoverPopup", null),
      P(this, "_lastFormulaTarget", null),
      P(this, "_editorTarget$", new _0x1ecb48(null)),
      P(this, "_hoverTarget$", new _0x1ecb48(null)),
      P(this, "editorTarget$", this._editorTarget$["asObservable"]()),
      P(this, "hoverTarget$", this._hoverTarget$["asObservable"]()),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          let _0x32a0b7 = this._editorTarget$["value"],
            _0x1eccf4 = this._hoverTarget$["value"];
          (_0x32a0b7 &&
            !this._canEditRange(
              _0x32a0b7.unitId,
              _0x32a0b7.rangeId,
              _0x32a0b7.selection["segmentId"],
            ) &&
            this.closeEditor(),
            _0x1eccf4 &&
              !this._canEditRange(
                _0x1eccf4.unitId,
                _0x1eccf4.rangeId,
                _0x1eccf4.segmentId,
              ) &&
              this.closeHover());
        }),
      ),
      this.disposeWithMe(
        this._renderManagerService["disposed$"].subscribe((_0x391138) => {
          var _0x4f6465, _0x2c486a;
          (((_0x4f6465 = this._editorTarget$["value"]) == null
            ? undefined
            : _0x4f6465.unitId) === _0x391138 && this.closeEditor(),
            ((_0x2c486a = this._hoverTarget$["value"]) == null
              ? undefined
              : _0x2c486a.unitId) === _0x391138 && this.closeHover());
        }),
      ));
  }
  openEditor(_0x5c20fc) {
    var _0x83731b;
    if (
      !this._canEditRange(
        _0x5c20fc.unitId,
        _0x5c20fc.rangeId,
        (_0x83731b = _0x5c20fc.selection) == null
          ? undefined
          : _0x83731b.segmentId,
      )
    )
      return null;
    let _0x37b18b = this._resolveEditorSelection(_0x5c20fc);
    return _0x37b18b
      ? (this.closeEditor(),
        this.closeHover(),
        this._editorTarget$["next"]({
          unitId: _0x5c20fc.unitId,
          rangeId: _0x5c20fc.rangeId,
          selection: _0x37b18b,
        }),
        (this._editorPopup = this._popupManagerService["attachPopupToRange"](
          _0x37b18b,
          {
            componentKey: j,
            direction: "bottom",
            onClickOutside: () => this.closeEditor(),
          },
          _0x5c20fc.unitId,
        )),
        this._editorPopup)
      : null;
  }
  openSelectedEditor(_0x2b30e9) {
    let _0x4adf05 = this.getSelectedFormulaTarget(_0x2b30e9);
    return _0x4adf05 ? this.openEditor(_0x4adf05) : null;
  }
  showHover(_0xfe006a, _0xfca1f6) {
    var _0x1798a2, _0x2fabd7;
    if (
      !this._canEditRange(
        _0xfe006a.unitId,
        _0xfe006a.rangeId,
        _0xfe006a.segmentId,
      )
    )
      return null;
    if (
      ((_0x1798a2 = this._hoverTarget$["value"]) == null
        ? undefined
        : _0x1798a2.unitId) === _0xfe006a.unitId &&
      ((_0x2fabd7 = this._hoverTarget$["value"]) == null
        ? undefined
        : _0x2fabd7.rangeId) === _0xfe006a.rangeId
    )
      return this._hoverPopup;
    this.closeHover();
    let _0x50797c = this._getRange(_0xfe006a);
    if (!_0x50797c) return null;
    ((this._lastFormulaTarget = _0xfe006a),
      this._hoverTarget$["next"](_0xfe006a));
    let _0x411958 = {
        componentKey: M,
        direction: "top-center",
        onClickOutside: () => this.closeHover(),
      },
      _0x48d667 = _0xfca1f6 == null ? undefined : _0xfca1f6();
    return (
      (this._hoverPopup = _0x48d667
        ? this._popupManagerService["attachPopupToRect"](
            () => (_0xfca1f6 == null ? undefined : _0xfca1f6()) ?? _0x48d667,
            _0x411958,
            _0xfe006a.unitId,
          )
        : this._popupManagerService["attachPopupToRange"](
            {
              collapsed: false,
              startOffset: _0x50797c.startIndex,
              endOffset: _0x50797c.endIndex + 1,
              segmentId: _0xfe006a.segmentId,
              segmentPage: _0xfe006a.segmentPage,
            },
            { ..._0x411958, multipleDirection: "top" },
            _0xfe006a.unitId,
          )),
      this._hoverPopup
    );
  }
  showSelectedHover(_0xd78d12) {
    let _0x19c7b5 = this.getSelectedFormulaTarget(_0xd78d12);
    return _0x19c7b5 ? this.showHover(_0x19c7b5) : null;
  }
  getSelectedFormulaTarget(_0x1b305d) {
    var _0x2930e2, _0x37766a;
    let _0x17fd57 = this._hoverTarget$["value"];
    if ((_0x17fd57 == null ? undefined : _0x17fd57.unitId) === _0x1b305d)
      return _0x17fd57;
    let _0x4d33ea = this._univerInstanceService["getUnit"](
        _0x1b305d,
        _0x8ad92e.UNIVER_DOC,
      ),
      _0x2b5c67 = _0x4d33ea == null ? undefined : _0x4d33ea.getBody(),
      _0x4e3fc4 = this._selectionManagerService["getTextRanges"]({
        unitId: _0x1b305d,
        subUnitId: _0x1b305d,
      });
    if (!_0x2b5c67 || (_0x4e3fc4 == null ? undefined : _0x4e3fc4.length) !== 1)
      return null;
    let _0x2d3041 = _0x4e3fc4[0];
    if (_0x2d3041.collapsed) return null;
    let _0x4b9286 = Math.min(
        _0x2d3041.startOffset ?? 0,
        _0x2d3041.endOffset ?? 0,
      ),
      _0x3d07d0 = Math.max(
        _0x2d3041.startOffset ?? 0,
        _0x2d3041.endOffset ?? 0,
      ),
      _0x1b916c =
        (_0x2930e2 = _0x2b5c67.customRanges) == null
          ? undefined
          : _0x2930e2.find(
              (_0x20f3fb) =>
                _0x20f3fb.startIndex === _0x4b9286 &&
                _0x20f3fb.endIndex + 1 === _0x3d07d0 &&
                this._model["getFormula"](_0x1b305d, _0x20f3fb.rangeId) != null,
            );
    if (_0x1b916c) return { unitId: _0x1b305d, rangeId: _0x1b916c.rangeId };
    let _0x340803 =
      ((_0x37766a = this._lastFormulaTarget) == null
        ? undefined
        : _0x37766a.unitId) === _0x1b305d
        ? this._getRange(this._lastFormulaTarget)
        : undefined;
    return _0x340803 &&
      _0x4b9286 < _0x340803.endIndex + 1 &&
      _0x3d07d0 > _0x340803.startIndex
      ? { unitId: _0x1b305d, rangeId: _0x340803.rangeId }
      : null;
  }
  closeEditor() {
    var _0x5b4da9;
    ((_0x5b4da9 = this._editorPopup) == null || _0x5b4da9.dispose(),
      (this._editorPopup = null),
      this._editorTarget$["next"](null));
  }
  closeHover() {
    var _0x574240;
    ((_0x574240 = this._hoverPopup) == null || _0x574240.dispose(),
      (this._hoverPopup = null),
      this._hoverTarget$["next"](null));
  }
  closeAndRestoreSelection() {
    var _0x334079;
    let _0x2f1015 =
      (_0x334079 = this._editorTarget$["value"]) != null && _0x334079.rangeId
        ? {
            unitId: this._editorTarget$["value"].unitId,
            rangeId: this._editorTarget$["value"].rangeId,
          }
        : this._hoverTarget$["value"];
    if (!this.hasOpenPopup) return false;
    if ((this.closeEditor(), this.closeHover(), _0x2f1015)) {
      let _0x13dbd0 = this._getRange(_0x2f1015);
      _0x13dbd0 &&
        this._selectionManagerService["replaceDocRanges"](
          [
            {
              startOffset: _0x13dbd0.startIndex,
              endOffset: _0x13dbd0.endIndex + 1,
              style: A,
            },
          ],
          { unitId: _0x2f1015.unitId, subUnitId: _0x2f1015.unitId },
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
  _resolveEditorSelection(_0x5082c9) {
    if (_0x5082c9.rangeId) {
      let _0x3342a5 = this._getRange({
        unitId: _0x5082c9.unitId,
        rangeId: _0x5082c9.rangeId,
      });
      return _0x3342a5
        ? {
            collapsed: false,
            startOffset: _0x3342a5.startIndex,
            endOffset: _0x3342a5.endIndex + 1,
          }
        : null;
    }
    if (_0x5082c9.selection) return _0x5082c9.selection;
    let _0x3fc103 = this._selectionManagerService["getTextRanges"]({
      unitId: _0x5082c9.unitId,
      subUnitId: _0x5082c9.unitId,
    });
    return (
      (_0x3fc103 == null ? undefined : _0x3fc103[_0x3fc103.length - 1]) ?? null
    );
  }
  _getRange(_0x3bb213) {
    var _0xc295a5;
    let _0x820b6 = this._univerInstanceService["getUnit"](
        _0x3bb213.unitId,
        _0x8ad92e.UNIVER_DOC,
      ),
      _0x36d423 =
        _0x820b6 == null ||
        (_0xc295a5 = _0x820b6.getSelfOrHeaderFooterModel(
          _0x3bb213.segmentId,
        )) == null
          ? undefined
          : _0xc295a5.getBody();
    if (!(
      !_0x36d423 ||
      !this._model["getFormula"](_0x3bb213.unitId, _0x3bb213.rangeId)
    ))
      return _0x56bbae(_0x36d423, _0x3bb213.rangeId);
  }
  _canEditRange(_0x20df02, _0x3c1487, _0x4c83e2 = "") {
    let _0x17850f = this._univerInstanceService["getUnit"](
      _0x20df02,
      _0x8ad92e.UNIVER_DOC,
    );
    return _0x17850f
      ? _0x3c1487
        ? _0x4624ca(this._permissionService, _0x20df02, [
            ..._0x6d6620(_0x17850f, _0x4c83e2, "custom-range", _0x3c1487),
            _0x414aec(_0x4c83e2, "custom-range", _0x3c1487),
          ])
        : _0x4624ca(this._permissionService, _0x20df02, [])
      : true;
  }
};
L = I(
  [
    F(0, _0x2147a1(_0x442fd7)),
    F(1, _0x2147a1(_0x248513)),
    F(2, _0x2147a1(_0x3e5767)),
    F(3, _0x5a939b),
    F(4, _0x2aff36),
    F(5, _0x5a1b90),
  ],
  L,
);
const R = {
    id: "docs-formula.operation.open-editor",
    type: _0x313d32.OPERATION,
    handler: (_0xa888be, _0x2eaed9) => {
      var _0x28b97a;
      let _0x360ae0 =
        (_0x2eaed9 == null ? undefined : _0x2eaed9.unitId) ??
        ((_0x28b97a = _0xa888be
          .get(_0x5a939b)
          .getCurrentUnitOfType(_0x8ad92e.UNIVER_DOC)) == null
          ? undefined
          : _0x28b97a.getUnitId());
      if (!_0x360ae0) return false;
      let _0x46ac75 = _0xa888be.get(L);
      if (
        !(_0x2eaed9 != null && _0x2eaed9.rangeId) &&
        !(_0x2eaed9 != null && _0x2eaed9.selection)
      ) {
        let _0x36fa16 = _0x46ac75.getSelectedFormulaTarget(_0x360ae0);
        return !!_0x46ac75.openEditor(_0x36fa16 ?? { unitId: _0x360ae0 });
      }
      return !!_0x46ac75.openEditor({ ..._0x2eaed9, unitId: _0x360ae0 });
    },
  },
  z = {
    id: "docs-formula.operation.open-selected-hover",
    type: _0x313d32.OPERATION,
    handler: (_0x5d2e8b) => {
      let _0x2fdae4 = H(_0x5d2e8b.get(_0x5a939b));
      return _0x2fdae4
        ? !!_0x5d2e8b.get(L).showSelectedHover(_0x2fdae4)
        : false;
    },
  },
  B = {
    id: "docs-formula.operation.close-popup",
    type: _0x313d32.OPERATION,
    handler: (_0x4632a1) => _0x4632a1.get(L).closeAndRestoreSelection(),
  },
  V = {
    id: "docs-formula.operation.remove-selected",
    type: _0x313d32.OPERATION,
    handler: (_0x591fef) => {
      let _0x5ae0e4 = H(_0x591fef.get(_0x5a939b));
      if (!_0x5ae0e4) return false;
      let _0x23b4f4 = _0x591fef.get(L),
        _0x1eaef0 = _0x23b4f4.getSelectedFormulaTarget(_0x5ae0e4);
      if (!_0x1eaef0) return false;
      let _0xb3fd63 = _0x591fef
        .get(_0x112674)
        .syncExecuteCommand(_0x50c4aa.id, _0x1eaef0);
      return (
        _0xb3fd63 && (_0x23b4f4.closeEditor(), _0x23b4f4.closeHover()),
        !!_0xb3fd63
      );
    },
  };
function H(_0x5b3143) {
  var _0x47082b;
  return (_0x47082b = _0x5b3143.getCurrentUnitOfType(_0x8ad92e.UNIVER_DOC)) ==
    null
    ? undefined
    : _0x47082b.getUnitId();
}
const U = "docs-formula-ui.config",
  W = {};
function yt(_0x2616e1) {
  return {
    id: R.id,
    type: _0x83af76.BUTTON,
    icon: "FxIcon",
    title: "docs-formula-ui.menu.formula",
    tooltip: "docs-formula-ui.menu.formula",
    hidden$: _0x27af0d(_0x2616e1, _0x8ad92e.UNIVER_DOC),
    disabled$: _0x469bf7(_0x2616e1),
  };
}
const G = {
  [_0xef2ba4.RIBBON]: {
    [_0x29029e.INSERT]: {
      [_0x546fa7.MEDIA]: { [R.id]: { order: 7, menuItemFactory: yt } },
    },
  },
};
var bt = "@univerjs-pro/docs-formula-ui",
  xt = "1.0.0-insiders.20260907-70fc579";
function St() {
  let _0x1976f8 = _0x29f127(_0x112674),
    _0x13ba88 = _0x29f127(_0x3e5767),
    _0x30a949 = _0x29f127(L),
    _0x87c940 = _0x33189f(_0x30a949.editorTarget$);
  if (!_0x87c940) return null;
  let _0x51b2a0 = _0x87c940.rangeId
    ? _0x13ba88.getFormula(_0x87c940.unitId, _0x87c940.rangeId)
    : undefined;
  return _0xefc92d(
    _0x31cbe5,
    {
      open: true,
      host: { unitId: _0x87c940.unitId },
      value: {
        formula: (_0x51b2a0 == null ? undefined : _0x51b2a0.formula) ?? "=",
        numberFormat: _0x51b2a0 == null ? undefined : _0x51b2a0.numberFormat,
      },
      onClose: () => _0x30a949.closeEditor(),
      onConfirm: (_0x1f5551) => {
        (_0x87c940.rangeId
          ? _0x1976f8.syncExecuteCommand(_0x430f1f.id, {
              unitId: _0x87c940.unitId,
              rangeId: _0x87c940.rangeId,
              formula: _0x1f5551.formula,
              numberFormat: _0x1f5551.numberFormat,
              externalReferences: _0x1f5551.externalReferences,
            })
          : _0x1976f8.syncExecuteCommand(_0x532107.id, {
              unitId: _0x87c940.unitId,
              formula: _0x1f5551.formula,
              numberFormat: _0x1f5551.numberFormat,
              externalReferences: _0x1f5551.externalReferences,
              target: { type: "selection", selection: _0x87c940.selection },
            })) && _0x30a949.closeEditor();
      },
    },
    _0x87c940.unitId + ":" + (_0x87c940.rangeId ?? "new"),
  );
}
function Ct() {
  var _0x231c4d;
  let _0x49becd = _0x29f127(_0x112674),
    _0x41246d = _0x29f127(_0x1d0291),
    _0x1dd0bf = _0x29f127(_0x3e5767),
    _0x451e3c = _0x29f127(_0x54f485),
    _0x13c519 = _0x29f127(L),
    _0x5296b4 = _0x33189f(_0x13c519.hoverTarget$),
    [_0x52977b, _0x4167b6] = _0x59d0ca(false);
  if (!_0x5296b4) return null;
  let _0x4a2f24 = (_0x5a2a24) => {
      _0x49becd.syncExecuteCommand(_0x5a2a24, {
        unitId: _0x5296b4.unitId,
        rangeId: _0x5296b4.rangeId,
      }) && _0x13c519.closeHover();
    },
    _0x2e184c = _0x1dd0bf.getFormula(_0x5296b4.unitId, _0x5296b4.rangeId),
    _0x25fae0 = _0x451e3c.resolveFormula(_0x5296b4.unitId, _0x5296b4.rangeId);
  return _0x245b1b(_0x4e1a6c, {
    children: [
      _0x245b1b("div", {
        className:
          "univer-flex univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 dark:!univer-border-gray-600 dark:!univer-bg-gray-900",
        role: "toolbar",
        "aria-label":
          _0x41246d.t("docs-formula-ui.menu.formula") +
          ":\x20" +
          _0x25fae0 +
          ".\x20" +
          _0x41246d.t("docs-formula-ui.menu.actions"),
        "aria-live": "polite",
        children: [
          _0xefc92d(_0xe7a6ea, {
            title: _0x41246d.t("docs-formula-ui.menu.edit"),
            children: _0xefc92d(_0x33fdce, {
              type: "button",
              size: "small",
              "aria-label": _0x41246d.t("docs-formula-ui.menu.edit"),
              onClick: () => {
                _0x49becd.syncExecuteCommand(R.id, _0x5296b4);
              },
              children: _0xefc92d(_0x5ad656, {}),
            }),
          }),
          _0xefc92d(_0xe7a6ea, {
            title: _0x41246d.t("docs-formula-ui.menu.numberFormat"),
            children: _0xefc92d(_0x33fdce, {
              type: "button",
              size: "small",
              "aria-label": _0x41246d.t("docs-formula-ui.menu.numberFormat"),
              onClick: () => _0x4167b6(true),
              children: _0xefc92d(_0x4751a5, {}),
            }),
          }),
          _0xefc92d(_0xe7a6ea, {
            title: _0x41246d.t("docs-formula-ui.menu.convertToText"),
            children: _0xefc92d(_0x33fdce, {
              type: "button",
              size: "small",
              "aria-label": _0x41246d.t("docs-formula-ui.menu.convertToText"),
              onClick: () => _0x4a2f24(_0x5f096b.id),
              children: _0xefc92d(_0x4c7060, {}),
            }),
          }),
          _0xefc92d(_0xe7a6ea, {
            title: _0x41246d.t("docs-formula-ui.menu.delete"),
            children: _0xefc92d(_0x33fdce, {
              type: "button",
              size: "small",
              "aria-label": _0x41246d.t("docs-formula-ui.menu.delete"),
              onClick: () => _0x4a2f24(_0x50c4aa.id),
              children: _0xefc92d(_0x1e6e35, {}),
            }),
          }),
        ],
      }),
      _0x52977b &&
        _0xefc92d(_0x49f743, {
          open: true,
          pattern:
            (_0x2e184c == null || (_0x231c4d = _0x2e184c.numberFormat) == null
              ? undefined
              : _0x231c4d.pattern) ?? _0x287f4a,
          onClose: () => _0x4167b6(false),
          onConfirm: (_0x1be29a) => {
            _0x49becd.syncExecuteCommand(_0x15347a.id, {
              unitId: _0x5296b4.unitId,
              rangeId: _0x5296b4.rangeId,
              numberFormat: { pattern: _0x1be29a },
            }) && _0x4167b6(false);
          },
        }),
    ],
  });
}
let K = class extends _0x331883 {
  constructor(_0x415486, _0x52f828) {
    (super(),
      (this._componentManager = _0x415486),
      (this._iconManager = _0x52f828),
      this._registerComponents(),
      this._registerIcons());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](j, St)),
      this.disposeWithMe(this._componentManager["register"](M, Ct)));
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({ FxIcon: _0x17b5a6 }));
  }
};
K = I([F(0, _0x2147a1(_0xc3e596)), F(1, _0x2147a1(_0x105e4c))], K);
function wt(_0xb71399, _0x3f6641, _0x5768c6) {
  for (let _0x1115e7 = _0xb71399.length - 1; _0x1115e7 >= 0; _0x1115e7--) {
    let _0x552e46 = _0xb71399[_0x1115e7];
    if (
      _0x3f6641 >= _0x552e46.left &&
      _0x3f6641 <= _0x552e46.right &&
      _0x5768c6 >= _0x552e46.top &&
      _0x5768c6 <= _0x552e46.bottom
    )
      return _0x552e46;
  }
  return null;
}
function Tt(_0x548c79, _0x3106c3) {
  return _0x3106c3.collapsed
    ? _0x3106c3.startOffset >= _0x548c79.startIndex &&
        _0x3106c3.startOffset <= _0x548c79.endIndex
    : _0x3106c3.startOffset === _0x548c79.startIndex &&
        _0x3106c3.endOffset === _0x548c79.endIndex + 1;
}
function Et(_0x1b63dd, _0x35633f) {
  return _0x35633f.collapsed
    ? _0x35633f.startOffset >= _0x1b63dd.startIndex &&
        _0x35633f.startOffset <= _0x1b63dd.endIndex
    : _0x35633f.startOffset < _0x1b63dd.endIndex + 1 &&
        _0x35633f.endOffset > _0x1b63dd.startIndex;
}
function q(
  _0x57dc4a,
  _0x2964c9,
  _0x4adc75,
  _0x2973e0,
  _0x237f9a = 0,
  _0x28f862 = 0,
) {
  return {
    x: _0x57dc4a / _0x4adc75 + _0x237f9a,
    y: _0x2964c9 / _0x2973e0 + _0x28f862,
  };
}
var Dt = class extends _0x2b4db9 {
  constructor(_0x3cb6b1) {
    (super(),
      (this._state = _0x3cb6b1),
      P(this, "uKey", "DocFormulaExtension"),
      P(this, "type", 0),
      P(this, "Z_INDEX", 110));
  }
  draw(_0x5f3871, _0x44f02f, _0x3c9bdd) {
    var _0x2fb8e2, _0x5a596f, _0x326021;
    let _0x28a090 = Ot(_0x3c9bdd);
    if (_0x28a090 == null) return;
    let _0x3a5cc1 =
        (_0x2fb8e2 = this._state["getBody"]()) == null ||
        (_0x2fb8e2 = _0x2fb8e2.customRanges) == null
          ? undefined
          : _0x2fb8e2.find(
              (_0x2c04e3) =>
                _0x2ad1d9(_0x2c04e3) && _0x2c04e3.startIndex === _0x28a090,
            ),
      _0x2c539f = this.extensionOffset["spanPointWithFont"];
    if (!_0x3a5cc1 || !_0x2c539f) return;
    let _0x54abfd = this._state["getResult"](_0x3a5cc1.rangeId),
      _0x30eb85 = (_0x54abfd == null ? undefined : _0x54abfd.text) || "…",
      _0x1f76e7 = _0x54abfd == null ? undefined : _0x54abfd.color,
      _0x5a4825 = _0xbe858d(
        ((_0x5a596f = _0x3c9bdd.fontStyle) == null
          ? undefined
          : _0x5a596f.originFontSize) ??
          ((_0x326021 = _0x3c9bdd.ts) == null ? undefined : _0x326021.fs) ??
          14,
      ),
      _0x2f1fb3 = this._state["renderService"].getMetrics(
        _0x30eb85,
        _0x1f76e7,
        _0x5a4825,
      ),
      _0x20557d = this._state["isActive"](_0x3a5cc1.rangeId),
      _0x5d1c2d = mt(_0x2c539f.x, _0x2c539f.y, _0x2f1fb3);
    (_0x20557d &&
      _0x1e12ed(
        _0x5f3871,
        {
          bottom: _0x5d1c2d.bottom,
          left: _0x5d1c2d.left,
          right: _0x5d1c2d.contentRight,
          top: _0x5d1c2d.top,
        },
        this._state["getChromeTheme"](),
      ),
      this._state["renderService"].draw(
        _0x5f3871,
        _0x30eb85,
        _0x1f76e7,
        _0x5a4825,
        _0x5d1c2d.textX,
        _0x2c539f.y,
      ),
      this._state["setHitRect"]({
        bottom: _0x5d1c2d.bottom,
        contentRight: _0x5d1c2d.contentRight,
        left: _0x5d1c2d.left,
        range: _0x3a5cc1,
        right: _0x5d1c2d.contentRight,
        top: _0x5d1c2d.top,
      }));
  }
  clearCache() {
    this._state["clearHitRects"]();
  }
};
function Ot(_0x19d429) {
  let _0x485ea4 = _0x19d429.parent;
  if (!(_0x485ea4 != null && _0x485ea4.glyphGroup)) return null;
  let _0x38745f = _0x485ea4.st;
  for (let _0x68b94 of _0x485ea4.glyphGroup) {
    var _0x2af8c8;
    if (_0x68b94 === _0x19d429) return _0x38745f;
    _0x38745f +=
      _0x68b94.count ||
      ((_0x2af8c8 = _0x68b94.content) == null ? undefined : _0x2af8c8.length) ||
      1;
  }
  return null;
}
function kt(_0x1f581e, _0x473ddc, _0x5783a7, _0x1eed30) {
  let _0x344af7 = {
    fs: _0x6a42fd(_0x1eed30),
    ...(_0x5783a7 ? { cl: { rgb: _0x5783a7 } } : null),
  };
  return {
    id: _0x1f581e,
    body: {
      dataStream: _0x473ddc + "\x0d\x0a",
      paragraphs: [
        {
          startIndex: _0x473ddc.length,
          paragraphId: _0x40d6b3(new Set()),
          paragraphStyle: { textStyle: _0x344af7 },
        },
      ],
      textRuns: [{ st: 0, ed: _0x473ddc.length, ts: _0x344af7 }],
    },
    documentStyle: {
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      pageSize: { width: 10000, height: Math.max(100, _0x1eed30 * 4) },
      renderConfig: {
        horizontalAlign: _0x4c66cf.LEFT,
        verticalAlign: _0xbfcb0a.TOP,
      },
      textStyle: _0x344af7,
    },
  };
}
function At(_0x331c23) {
  var _0x2bd118;
  let _0x19751c =
      (_0x2bd118 = _0x331c23.getSkeletonData()) == null
        ? undefined
        : _0x2bd118.pages[0],
    _0x3530ed = _0x19751c == null ? undefined : _0x19751c.sections[0],
    _0x443001 = _0x3530ed == null ? undefined : _0x3530ed.columns[0],
    _0x4835bc = _0x443001 == null ? undefined : _0x443001.lines[0],
    _0x2581d5 = _0x4835bc == null ? undefined : _0x4835bc.divides[0];
  return {
    column: _0x443001,
    divide: _0x2581d5,
    glyph: _0x2581d5 == null ? undefined : _0x2581d5.glyphGroup[0],
    line: _0x4835bc,
    page: _0x19751c,
    section: _0x3530ed,
  };
}
function jt(_0x5eb230, _0x81bb0e) {
  var _0xe58f09;
  let _0x566e11 =
    ((_0xe58f09 = _0x5eb230.line) == null
      ? undefined
      : _0xe58f09.divides["reduce"](
          (_0x5389a6, _0x4c8fa6) =>
            _0x5389a6 +
            (_0x4c8fa6.glyphGroupWidth ??
              _0x4c8fa6.glyphGroup["reduce"](
                (_0x2f09d3, _0x2d6b04) => _0x2f09d3 + _0x2d6b04.width,
                0,
              )),
          0,
        )) ?? _0x81bb0e * 0.6;
  return {
    ascent:
      _0x5eb230.line && _0x5eb230.line["asc"] > 0
        ? _0x5eb230.line["asc"]
        : _0x81bb0e * 0.8,
    descent:
      _0x5eb230.line && _0x5eb230.line["dsc"] > 0
        ? _0x5eb230.line["dsc"]
        : _0x81bb0e * 0.2,
    width: Math.max(1, _0x566e11),
  };
}
function Mt(_0x54b4c6, _0xd30af2) {
  let _0x37857c = At(_0x54b4c6),
    _0x59fea5 = jt(_0x37857c, _0xd30af2);
  return {
    metrics: _0x59fea5,
    originBaseline: Nt(_0x37857c, _0x59fea5.ascent),
    originX: Pt(_0x37857c),
  };
}
function Nt(_0x3eaea8, _0x5c5d0a) {
  var _0x2a424b, _0x2b0d8c, _0x368892, _0x22d75b, _0x5e5b98;
  return (
    (((_0x2a424b = _0x3eaea8.page) == null ? undefined : _0x2a424b.marginTop) ??
      0) +
    (((_0x2b0d8c = _0x3eaea8.section) == null ? undefined : _0x2b0d8c.top) ??
      0) +
    (((_0x368892 = _0x3eaea8.line) == null ? undefined : _0x368892.top) ?? 0) +
    (((_0x22d75b = _0x3eaea8.line) == null ? undefined : _0x22d75b.marginTop) ??
      0) +
    (((_0x5e5b98 = _0x3eaea8.line) == null
      ? undefined
      : _0x5e5b98.paddingTop) ?? 0) +
    _0x5c5d0a
  );
}
function Pt(_0x181e4d) {
  var _0x3efe1d, _0x5882b4, _0x4d67ca, _0x4f205f, _0xd6fa6f;
  return (
    (((_0x3efe1d = _0x181e4d.page) == null
      ? undefined
      : _0x3efe1d.marginLeft) ?? 0) +
    (((_0x5882b4 = _0x181e4d.column) == null ? undefined : _0x5882b4.left) ??
      0) +
    (((_0x4d67ca = _0x181e4d.divide) == null ? undefined : _0x4d67ca.left) ??
      0) +
    (((_0x4f205f = _0x181e4d.divide) == null
      ? undefined
      : _0x4f205f.paddingLeft) ?? 0) +
    (((_0xd6fa6f = _0x181e4d.glyph) == null ? undefined : _0xd6fa6f.left) ?? 0)
  );
}
let J = class extends _0x331883 {
  constructor(_0x3bbef2) {
    (super(),
      (this._localeService = _0x3bbef2),
      P(this, "_layouts", new Map()));
  }
  getMetrics(_0x56c5e9, _0x5a5bfc, _0xa52ed7) {
    return this._getLayout(_0x56c5e9, _0x5a5bfc, _0xa52ed7).metrics;
  }
  draw(_0x345a10, _0x260819, _0xbdb034, _0x2e4a81, _0x3ba02e, _0x4b6962) {
    let _0x48de17 = this._getLayout(_0x260819, _0xbdb034, _0x2e4a81);
    return (
      _0x345a10.save(),
      _0x345a10.translateWithPrecision(
        _0x3ba02e - _0x48de17.originX,
        _0x4b6962 - _0x48de17.originBaseline,
      ),
      _0x48de17.documents["draw"](_0x345a10),
      _0x345a10.restore(),
      _0x48de17.metrics
    );
  }
  dispose() {
    for (let _0x5d2476 of this._layouts["values"]())
      (_0x5d2476.documents["dispose"](),
        _0x5d2476.documentSkeleton["dispose"](),
        _0x5d2476.documentViewModel["dispose"](),
        _0x5d2476.documentModel["dispose"]());
    (this._layouts["clear"](), super.dispose());
  }
  _getLayout(_0x5c2c74, _0x40c601, _0x2829b4) {
    let _0x221931 = _0x5c2c74 || "\x20",
      _0x86c559 = JSON.stringify([_0x221931, _0x40c601 ?? "", _0x2829b4]),
      _0xd3caaa = this._layouts["get"](_0x86c559);
    if (_0xd3caaa) return _0xd3caaa;
    let _0x58ba60 = new _0x4cd143(
        kt(
          "doc-formula-render-" + this._layouts["size"],
          _0x221931,
          _0x40c601,
          _0x2829b4,
        ),
      ),
      _0x16393b = new _0x4946ab(_0x58ba60),
      _0x37791a = _0x142cbf.create(_0x16393b, this._localeService);
    _0x37791a.calculate();
    let _0x33c15c = Mt(_0x37791a, _0x2829b4),
      _0x2e3fae = new _0x3f8039(_0x86c559, _0x37791a, {
        pageMarginLeft: 0,
        pageMarginTop: 0,
      });
    _0x2e3fae.resize(
      _0x33c15c.metrics["width"],
      _0x33c15c.metrics["ascent"] + _0x33c15c.metrics["descent"],
    );
    let _0x1d22bc = {
      documents: _0x2e3fae,
      documentModel: _0x58ba60,
      documentSkeleton: _0x37791a,
      documentViewModel: _0x16393b,
      ..._0x33c15c,
    };
    return (this._layouts["set"](_0x86c559, _0x1d22bc), _0x1d22bc);
  }
};
J = I([F(0, _0x2147a1(_0x1d0291))], J);
const Ft = -10980;
let Y = class extends _0x331883 {
  constructor(
    _0x104e89,
    _0x2c796c,
    _0x536da2,
    _0x320004,
    _0x4bde0a,
    _0x5d1a75,
    _0x33f31d,
    _0x48cb16,
    _0x42e91b,
    _0xa9366d,
    _0x51e929,
    _0x3d4b8a,
  ) {
    (super(),
      (this._context = _0x104e89),
      (this._formulaService = _0x2c796c),
      (this._textRenderService = _0x536da2),
      (this._popupService = _0x320004),
      (this._interceptorService = _0x4bde0a),
      (this._docLayoutExecutorService = _0x5d1a75),
      (this._selectionManagerService = _0x33f31d),
      (this._skeletonManagerService = _0x48cb16),
      (this._floatMenuService = _0x42e91b),
      (this._paragraphMenuService = _0xa9366d),
      (this._renderManagerService = _0x51e929),
      (this._themeService = _0x3d4b8a),
      P(this, "_hitRects", new Map()),
      P(this, "_activeRangeIds", new Set()),
      P(this, "_hoveredRangeId", null),
      P(this, "_cursorBeforeHover", null),
      P(this, "_normalizingSelectionRangeId", null),
      this._initExtension(),
      this._initCustomRangeInterceptor(),
      this._initWorkerCustomRangePresentation(),
      this._initSelection(),
      this._initPointer(),
      this.disposeWithMe(
        this._formulaService["presentationChanged$"].subscribe(
          ({ unitId: _0x28a3b7 }) => {
            _0x28a3b7 === this._context["unitId"] && this._recalculateLayout();
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
    let _0x499579 = this._context["mainComponent"];
    if (!(_0x499579 instanceof _0x3f8039)) return;
    let _0x1dd2fd = _0x499579.register(
      new Dt({
        clearHitRects: () => this._hitRects["clear"](),
        getBody: () => this._context["unit"].getBody(),
        getChromeTheme: () => _0x5b0c1d(this._themeService),
        getResult: (_0xc8a45a) =>
          this._formulaService["getResult"]({
            unitId: this._context["unitId"],
            rangeId: _0xc8a45a,
          }),
        isActive: (_0x493748) =>
          this._hoveredRangeId === _0x493748 ||
          this._activeRangeIds["has"](_0x493748),
        renderService: this._textRenderService,
        setHitRect: (_0x1cd93f) =>
          this._hitRects["set"](
            _0x1cd93f.range["rangeId"],
            this._toDocumentHitRect(_0x1cd93f),
          ),
      }),
    );
    this.disposeWithMe(_0x1dd2fd);
  }
  _initCustomRangeInterceptor() {
    this.disposeWithMe(
      this._interceptorService["intercept"](_0x2c0cfc.CUSTOM_RANGE, {
        priority: 110,
        handler: (_0x1ca588, _0x34f75d, _0x8a4e52) => {
          let _0x3ded0b = _0x8a4e52(_0x1ca588);
          return !_0x3ded0b || !_0x2ad1d9(_0x3ded0b)
            ? _0x3ded0b
            : { ..._0x3ded0b, ...this._getFormulaPresentation(_0x3ded0b) };
        },
      }),
    );
  }
  _initWorkerCustomRangePresentation() {
    this.disposeWithMe(
      this._docLayoutExecutorService["registerCustomRangePresentationProvider"](
        (_0x3bdbef, _0x1b29b6) =>
          _0x3bdbef !== this._context["unitId"] || !_0x2ad1d9(_0x1b29b6)
            ? null
            : this._getFormulaPresentation(_0x1b29b6),
      ),
    );
  }
  _getFormulaPresentation(_0x3438ed) {
    let _0x578f17 = this._formulaService["getResult"]({
        unitId: this._context["unitId"],
        rangeId: _0x3438ed.rangeId,
      }),
      _0x4e188b = _0xbe858d(14),
      _0x58c601 = this._textRenderService["getMetrics"](
        (_0x578f17 == null ? undefined : _0x578f17.text) || "…",
        _0x578f17 == null ? undefined : _0x578f17.color,
        _0x4e188b,
      );
    return {
      active: this._activeRangeIds["has"](_0x3438ed.rangeId),
      glyphAscentEm: _0x58c601.ascent / _0x4e188b,
      glyphDescentEm: _0x58c601.descent / _0x4e188b,
      glyphWidthEm: gt(_0x58c601, _0x4e188b),
      show: false,
    };
  }
  _initSelection() {
    this.disposeWithMe(
      this._selectionManagerService["textSelection$"].subscribe(
        ({ textRanges: _0x3166c9, unitId: _0x520909, options: _0x2150c1 }) => {
          _0x520909 === this._context["unitId"] &&
            this._updateSelectionState(
              _0x3166c9,
              (_0x2150c1 == null ? undefined : _0x2150c1[_0x428e80]) === true,
            );
        },
      ),
    );
  }
  _updateSelectionState(_0x5e3525, _0x22b0c4 = false) {
    var _0x1f8089;
    this._activeRangeIds["clear"]();
    let _0x575e52 =
        ((_0x1f8089 = this._context["unit"].getBody()) == null ||
        (_0x1f8089 = _0x1f8089.customRanges) == null
          ? undefined
          : _0x1f8089.filter(_0x2ad1d9)) ?? [],
      {
        focusedRange: _0x15b096,
        focusedSelection: _0x5bc278,
        focusedTarget: _0x15c834,
      } = Lt(
        It(_0x5e3525, _0x22b0c4),
        _0x575e52,
        (_0x5e3525 == null ? undefined : _0x5e3525.length) === 1,
        this._activeRangeIds,
      );
    if (
      _0x15b096 &&
      _0x5bc278 &&
      (_0x5bc278.collapsed || !pt(_0x5bc278.style)) &&
      this._normalizingSelectionRangeId !== _0x15b096.rangeId
    ) {
      ((this._normalizingSelectionRangeId = _0x15b096.rangeId),
        this._selectFormulaRange(_0x15b096, _0x5bc278));
      return;
    }
    ((!_0x15b096 || pt(_0x5bc278 == null ? undefined : _0x5bc278.style)) &&
      (this._normalizingSelectionRangeId = null),
      this._popupService["hasOpenEditor"] ||
        (_0x15c834
          ? (this._closeCompetingContextMenus(),
            this._popupService["showHover"](
              { unitId: this._context["unitId"], ..._0x15c834 },
              () => this._getFormulaAnchorRect(_0x15c834.rangeId),
            ))
          : this._popupService["closeHover"]()),
      this._context["scene"].makeDirty(true));
  }
  _initPointer() {
    let _0x38a836 = this._context["mainComponent"] ?? this._context["scene"];
    (this.disposeWithMe(
      _0x38a836.onPointerMove$["subscribeEvent"]({
        next: ([_0xf8822f]) => {
          if (_0xf8822f.buttons > 0) {
            this._restoreCursor();
            return;
          }
          let _0x60299f = Rt(
              _0xf8822f.offsetX,
              _0xf8822f.offsetY,
              this._context["scene"],
            ),
            _0xf9194b = wt(
              [...this._hitRects["values"]()],
              _0x60299f.x,
              _0x60299f.y,
            );
          if (!_0xf9194b) {
            (this._setHoveredRange(null), this._restoreCursor());
            return;
          }
          (this._setHoveredRange(_0xf9194b.range["rangeId"]),
            this._setPointerCursor());
        },
        priority: Ft,
      }),
    ),
      this.disposeWithMe(
        _0x38a836.onPointerLeave$["subscribeEvent"](() => {
          (this._setHoveredRange(null), this._restoreCursor());
        }),
      ),
      this.disposeWithMe(
        _0x38a836.onPointerDown$["subscribeEvent"]({
          next: ([_0x54f009, _0x33d419]) => {
            var _0xe36bff, _0x189960;
            if (_0x54f009.button === 2) return;
            let _0x47ca61 = Rt(
                _0x54f009.offsetX,
                _0x54f009.offsetY,
                this._context["scene"],
              ),
              _0x530897 = wt(
                [...this._hitRects["values"]()],
                _0x47ca61.x,
                _0x47ca61.y,
              );
            _0x530897 &&
              (_0x33d419.stopPropagation(),
              (_0x33d419.skipNextObservers = true),
              (_0xe36bff = _0x54f009.preventDefault) == null ||
                _0xe36bff.call(_0x54f009),
              (_0x189960 = _0x54f009.stopPropagation) == null ||
                _0x189960.call(_0x54f009),
              this._closeCompetingContextMenus(),
              this._selectFormulaRange(_0x530897.range, {
                segmentId: _0x530897.segmentId,
                segmentPage: _0x530897.segmentPage,
              }),
              this._popupService["showHover"](
                {
                  unitId: this._context["unitId"],
                  rangeId: _0x530897.range["rangeId"],
                  segmentId: _0x530897.segmentId,
                  segmentPage: _0x530897.segmentPage,
                },
                () => this._getFormulaAnchorRect(_0x530897.range["rangeId"]),
              ));
          },
          priority: Ft,
        }),
      ));
  }
  _selectFormulaRange(_0x22c131, _0x38b026) {
    this._selectionManagerService["replaceDocRanges"](
      [
        {
          endOffset: _0x22c131.endIndex + 1,
          segmentId: _0x38b026.segmentId,
          segmentPage: _0x38b026.segmentPage,
          startOffset: _0x22c131.startIndex,
          style: A,
        },
      ],
      { subUnitId: this._context["unitId"], unitId: this._context["unitId"] },
    );
  }
  _closeCompetingContextMenus() {
    (this._floatMenuService["hideFloatMenu"](),
      this._paragraphMenuService["hideParagraphMenu"](true));
  }
  _getFormulaAnchorRect(_0x42e783) {
    let _0x330ff3 = this._hitRects["get"](_0x42e783);
    return _0x330ff3
      ? {
          bottom: _0x330ff3.bottom,
          left: _0x330ff3.left,
          right: _0x330ff3.right,
          top: _0x330ff3.top,
        }
      : undefined;
  }
  _toDocumentHitRect(_0x8bbdf9) {
    let _0x2134eb = this._context["mainComponent"];
    if (!(_0x2134eb instanceof _0x3f8039)) return _0x8bbdf9;
    let { docsLeft: _0xde69b1 = 0, docsTop: _0x5af88b = 0 } =
      _0x2134eb.getOffsetConfig();
    return {
      ..._0x8bbdf9,
      bottom: _0x8bbdf9.bottom + _0x5af88b,
      contentRight: _0x8bbdf9.contentRight + _0xde69b1,
      left: _0x8bbdf9.left + _0xde69b1,
      right: _0x8bbdf9.right + _0xde69b1,
      top: _0x8bbdf9.top + _0x5af88b,
    };
  }
  _setPointerCursor() {
    ((this._cursorBeforeHover ??= this._context["scene"].getCursor()),
      this._context["scene"].setCursor(_0x33f1d3.POINTER));
  }
  _setHoveredRange(_0x45b422) {
    this._hoveredRangeId !== _0x45b422 &&
      ((this._hoveredRangeId = _0x45b422),
      this._context["scene"].makeDirty(true));
  }
  _restoreCursor() {
    this._cursorBeforeHover != null &&
      (this._context["scene"].setCursor(this._cursorBeforeHover),
      (this._cursorBeforeHover = null));
  }
  _recalculateLayout() {
    if (this._docLayoutExecutorService["getExecutor"]() != null) {
      var _0x36fe30, _0x4a4729;
      let _0x3e51e2 = Math.min(
          ...(((_0x36fe30 = this._context["unit"].getBody()) == null ||
          (_0x36fe30 = _0x36fe30.customRanges) == null
            ? undefined
            : _0x36fe30
                .filter(_0x2ad1d9)
                .map((_0x8a933) => _0x8a933.startIndex)) ?? [0]),
        ),
        _0x372bd6 =
          (_0x4a4729 = this._renderManagerService["getRenderUnitById"](
            this._context["unitId"],
          )) == null
            ? undefined
            : _0x4a4729.with(_0x28f78a);
      if (_0x372bd6 != null) {
        let _0x30b8b6 = Number.isFinite(_0x3e51e2) ? _0x3e51e2 : 0;
        _0x372bd6.reRender(
          this._context["unitId"],
          _0x30b8b6,
          undefined,
          _0x30b8b6,
          false,
          true,
        );
        return;
      }
    }
    let _0x11936d = this._skeletonManagerService["getSkeleton"]();
    (_0x11936d.makeDirty(true),
      _0x11936d.calculate(),
      this._context["scene"].makeDirty(true));
  }
};
Y = I(
  [
    F(1, _0x2147a1(_0x3ffd60)),
    F(2, _0x2147a1(J)),
    F(3, _0x2147a1(L)),
    F(4, _0x2147a1(_0x2874a1)),
    F(5, _0x2147a1(_0x6ab15e)),
    F(6, _0x2147a1(_0x248513)),
    F(7, _0x2147a1(_0x1c7ae9)),
    F(8, _0x2147a1(_0x2c4a08)),
    F(9, _0x2147a1(_0x207f0b)),
    F(10, _0x5a1b90),
    F(11, _0x2147a1(_0x410d68)),
  ],
  Y,
);
function It(_0x47e229, _0x4bb3f3) {
  return _0x4bb3f3
    ? ((_0x47e229 == null
        ? undefined
        : _0x47e229.filter((_0x5e2747) => !_0x5e2747.collapsed)) ?? [])
    : (_0x47e229 ?? []);
}
function Lt(_0x5341df, _0x11dacb, _0x1cd4e5, _0x1f22a3) {
  let _0x31bf31 = null,
    _0x35e796 = null,
    _0xec544a = null;
  for (let _0x50eb50 of _0x5341df) {
    let _0x1045b3 = {
      collapsed: _0x50eb50.collapsed,
      endOffset: _0x50eb50.endOffset ?? _0x50eb50.startOffset ?? 0,
      startOffset: _0x50eb50.startOffset ?? 0,
    };
    for (let _0x57b782 of _0x11dacb)
      (Et(_0x57b782, _0x1045b3) && _0x1f22a3.add(_0x57b782.rangeId),
        _0x1cd4e5 &&
          Tt(_0x57b782, _0x1045b3) &&
          ((_0x31bf31 = _0x57b782),
          (_0x35e796 = _0x50eb50),
          (_0xec544a = {
            rangeId: _0x57b782.rangeId,
            segmentId: _0x50eb50.segmentId,
            segmentPage: _0x50eb50.segmentPage,
          })));
  }
  return {
    focusedRange: _0x31bf31,
    focusedSelection: _0x35e796,
    focusedTarget: _0xec544a,
  };
}
function Rt(_0x539597, _0x40ffd7, _0x19eece) {
  let { scaleX: _0x232d16, scaleY: _0x41e33a } = _0x19eece.getAncestorScale(),
    _0x5b478b = _0x19eece.getViewport("viewMain");
  return _0x5b478b
    ? q(
        _0x539597,
        _0x40ffd7,
        _0x232d16,
        _0x41e33a,
        _0x5b478b.viewportScrollX,
        _0x5b478b.viewportScrollY,
      )
    : q(_0x539597, _0x40ffd7, _0x232d16, _0x41e33a);
}
let X = class extends _0x331883 {
  constructor(_0x4964b1, _0x2b44d6, _0x1877ed, _0x46e6ff, _0x549852) {
    (super(),
      (this._displayTextService = _0x46e6ff),
      (this._model = _0x549852),
      this.disposeWithMe(
        _0x4964b1.addClipboardHook({
          onBeforePaste: (_0x1142d9, _0x36cd6e) =>
            this._degradeCrossDocumentPaste(
              _0x1142d9,
              _0x36cd6e.documentData,
              _0x36cd6e.targetUnitId,
            ),
          onCopyDocData: (_0x31aadf, _0x4f62d8) =>
            this._appendFormulaResource(_0x31aadf, _0x4f62d8.sourceDocuments),
          onCopyContent: (_0x4ec5b4, _0x23eeee, _0x22458f) =>
            _0x22458f.segmentId
              ? _0x22458f.body["dataStream"].slice(_0x4ec5b4, _0x23eeee)
              : this._displayTextService["resolveText"](
                  _0x22458f.unitId,
                  _0x4ec5b4,
                  _0x23eeee,
                ),
        }),
      ),
      this.disposeWithMe(
        _0x2b44d6.registerAdapter({
          getPasteMutationInfos: (_0x10ca66) =>
            this._getPasteMutationInfos(_0x10ca66),
        }),
      ),
      this.disposeWithMe(
        _0x1877ed.registerTransformer((_0x5a5cc5) =>
          this._displayTextService["degradeDocumentData"](_0x5a5cc5),
        ),
      ));
  }
  _appendFormulaResource(_0x149298, _0x10dc11) {
    var _0xdaf30d;
    if (_0x10dc11.length !== 1) return _0x149298;
    let _0x3e3ac4 = _0x10dc11[0],
      _0x4f51c4 = {},
      _0x3bec9c = {};
    if (
      ((_0xdaf30d = _0x3e3ac4.body) == null ||
        (_0xdaf30d = _0xdaf30d.customRanges) == null ||
        _0xdaf30d.forEach((_0x2dd46b) => {
          if (!_0x2ad1d9(_0x2dd46b)) return;
          let _0x52f13a = this._model["getFormula"](
            _0x3e3ac4.id,
            _0x2dd46b.rangeId,
          );
          _0x52f13a &&
            ((_0x4f51c4[_0x2dd46b.rangeId] = _0x2b5367.deepClone(_0x52f13a)),
            (_0x3bec9c[_0x2dd46b.rangeId] = this._displayTextService[
              "resolveFormula"
            ](_0x3e3ac4.id, _0x2dd46b.rangeId)));
        }),
      Object.keys(_0x4f51c4).length === 0)
    )
      return _0x149298;
    let _0xb62847 = {
      schemaVersion: _0x5e519c,
      formulas: _0x4f51c4,
      clipboard: { sourceUnitId: _0x3e3ac4.id, displayText: _0x3bec9c },
    };
    return {
      ..._0x149298,
      id: _0x3e3ac4.id,
      resources: [
        ...(_0x149298.resources ?? []).filter(
          (_0x5943fb) => _0x5943fb.name !== _0x196fe9,
        ),
        { name: _0x196fe9, data: JSON.stringify(_0xb62847) },
      ],
    };
  }
  _degradeCrossDocumentPaste(_0x12f54d, _0xf52bd3, _0x431195) {
    let _0x6c8e09 = zt(_0xf52bd3);
    return !_0x6c8e09 || _0x6c8e09.clipboard["sourceUnitId"] === _0x431195
      ? _0x12f54d
      : this._displayTextService["degradeBody"](
          _0x6c8e09.clipboard["sourceUnitId"],
          _0x12f54d,
          _0x6c8e09.clipboard["displayText"],
        );
  }
  _getPasteMutationInfos(_0x157f05) {
    let _0x179746 = zt(_0x157f05.doc);
    if (!_0x179746 || _0x179746.clipboard["sourceUnitId"] !== _0x157f05.unitId)
      return { redoMutations: [], undoMutations: [] };
    let _0x4f5a7a = [],
      _0x73cafa = [];
    for (let _0x5a2dd1 of _0x157f05.customRangeMappings ?? []) {
      if (!_0x2ad1d9(_0x5a2dd1.sourceRange)) continue;
      let _0x472b46 = _0x179746.formulas[_0x5a2dd1.sourceRange["rangeId"]];
      !_0x472b46 ||
        !_0x2ad1d9(_0x5a2dd1.targetRange) ||
        (_0x4f5a7a.push({
          id: _0x130155.id,
          params: {
            unitId: _0x157f05.unitId,
            rangeId: _0x5a2dd1.targetRange["rangeId"],
            config: _0x472b46,
          },
        }),
        _0x73cafa.push({
          id: _0x10fba9.id,
          params: {
            unitId: _0x157f05.unitId,
            rangeId: _0x5a2dd1.targetRange["rangeId"],
          },
        }));
    }
    return { redoMutations: _0x4f5a7a, undoMutations: _0x73cafa };
  }
};
X = I(
  [
    F(0, _0x3255ce),
    F(1, _0xdad2f4),
    F(2, _0x2147a1(_0x4cd219)),
    F(3, _0x2147a1(_0x54f485)),
    F(4, _0x2147a1(_0x3e5767)),
  ],
  X,
);
function zt(_0x2746f3) {
  var _0x420a53;
  let _0xc5ab2f =
    (_0x420a53 = _0x2746f3.resources) == null
      ? undefined
      : _0x420a53.find((_0x2ee9ab) => _0x2ee9ab.name === _0x196fe9);
  if (!_0xc5ab2f) return null;
  try {
    let _0x207112 = JSON.parse(_0xc5ab2f.data);
    if (
      !_0x207112 ||
      typeof _0x207112 != "object" ||
      Array.isArray(_0x207112) ||
      Object.keys(_0x207112).length !== 3 ||
      !("schemaVersion" in _0x207112) ||
      !("formulas" in _0x207112) ||
      !("clipboard" in _0x207112)
    )
      return null;
    let _0x19a8fd = {
      schemaVersion: _0x207112.schemaVersion,
      formulas: _0x207112.formulas,
    };
    if (!_0x173a3f(_0x19a8fd)) return null;
    let _0x254700 = Bt(_0x207112.clipboard);
    return _0x254700
      ? {
          schemaVersion: _0x19a8fd.schemaVersion,
          formulas: _0x19a8fd.formulas,
          clipboard: _0x254700,
        }
      : null;
  } catch {
    return null;
  }
}
function Bt(_0x442b56) {
  if (
    !_0x442b56 ||
    typeof _0x442b56 != "object" ||
    Array.isArray(_0x442b56) ||
    Object.keys(_0x442b56).length !== 2 ||
    !("sourceUnitId" in _0x442b56) ||
    typeof _0x442b56.sourceUnitId != "string" ||
    !("displayText" in _0x442b56) ||
    !_0x442b56.displayText ||
    typeof _0x442b56.displayText != "object" ||
    Array.isArray(_0x442b56.displayText)
  )
    return null;
  let _0x14ba14 = {};
  for (let [_0x8b2c59, _0xb3d8e3] of Object.entries(_0x442b56.displayText)) {
    if (typeof _0xb3d8e3 != "string") return null;
    _0x14ba14[_0x8b2c59] = _0xb3d8e3;
  }
  return { sourceUnitId: _0x442b56.sourceUnitId, displayText: _0x14ba14 };
}
const Z = 1000;
function Vt(_0x2e9a18) {
  let _0x416b78 = (_0x146991) =>
    Ht(_0x146991.target, _0x2e9a18.hasSelectedFormula);
  return [
    {
      id: R.id,
      binding: _0xb537ca.ENTER,
      priority: Z,
      eventPreconditions: _0x416b78,
    },
    {
      id: z.id,
      binding: _0xb537ca.F10 | _0xf0dbb8.SHIFT,
      priority: Z,
      eventPreconditions: _0x416b78,
    },
    {
      id: B.id,
      binding: _0xb537ca.ESC,
      priority: Z,
      eventPreconditions: _0x2e9a18.hasOpenPopup,
    },
    {
      id: V.id,
      binding: _0xb537ca.BACKSPACE,
      priority: Z,
      eventPreconditions: _0x416b78,
    },
    {
      id: V.id,
      binding: _0xb537ca.DELETE,
      priority: Z,
      eventPreconditions: _0x416b78,
    },
  ];
}
function Ht(_0x2bf869, _0x474224) {
  return !Ut(_0x2bf869) && _0x474224();
}
function Ut(_0x4d6c87) {
  return (
    typeof HTMLElement < "u" &&
    _0x4d6c87 instanceof HTMLElement &&
    (_0x4d6c87.isContentEditable ||
      _0x4d6c87 instanceof HTMLInputElement ||
      _0x4d6c87 instanceof HTMLTextAreaElement)
  );
}
let Q = class extends _0x331883 {
  constructor(_0x47f832, _0x115d6b, _0x5a77c6, _0x50099e, _0x34459c) {
    (super(),
      (this._commandService = _0x47f832),
      (this._menuManagerService = _0x115d6b),
      (this._shortcutService = _0x5a77c6),
      (this._univerInstanceService = _0x50099e),
      (this._popupService = _0x34459c),
      [R, z, B, V].forEach((_0xe3976e) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0xe3976e));
      }),
      Vt({
        hasOpenPopup: () => this._popupService["hasOpenPopup"],
        hasSelectedFormula: () => this._hasSelectedFormula(),
      }).forEach((_0x5ed0ae) => {
        this.disposeWithMe(
          this._shortcutService["registerShortcut"](_0x5ed0ae),
        );
      }),
      this._menuManagerService["appendRootMenu"](G));
  }
  _hasSelectedFormula() {
    var _0x4a23fb;
    let _0x2af516 =
      (_0x4a23fb = this._univerInstanceService["getCurrentUnitOfType"](
        _0x8ad92e.UNIVER_DOC,
      )) == null
        ? undefined
        : _0x4a23fb.getUnitId();
    return !!(
      _0x2af516 && this._popupService["getSelectedFormulaTarget"](_0x2af516)
    );
  }
};
Q = I(
  [
    F(0, _0x112674),
    F(1, _0x3db2c8),
    F(2, _0xdbf8b),
    F(3, _0x5a939b),
    F(4, _0x2147a1(L)),
  ],
  Q,
);
const Wt = [Y];
let $ = class extends _0xa543f7 {
  constructor(_0x113a47 = W, _0x5b6570, _0x3749b7, _0x3f590f) {
    (super(),
      (this._config = _0x113a47),
      (this._injector = _0x5b6570),
      (this._renderManagerService = _0x3749b7),
      (this._configService = _0x3f590f));
    let { menu: _0x3a4ef5, ..._0x39db59 } = _0x58ba08({}, W, this._config);
    (_0x3a4ef5 &&
      this._configService["setConfig"]("menu", _0x3a4ef5, { merge: true }),
      this._configService["setConfig"](U, _0x39db59),
      this._configService["setConfig"](_0x59e17c, _0x39db59, { merge: true }));
  }
  onStarting() {
    (this._injector["add"]([J]),
      this._injector["add"]([L]),
      this._injector["add"]([K]),
      this._injector["add"]([Q]),
      this._injector["add"]([X]),
      _0x5b9ab7(this._injector, [[J], [K], [Q], [X]]));
  }
  onRendered() {
    this.disposeWithMe(
      this._renderManagerService["registerRenderModule"](
        _0x8ad92e.UNIVER_DOC,
        Wt,
      ),
    );
  }
};
(P($, "pluginName", _0x196fe9 + "_UI_PLUGIN"),
  P($, "packageName", bt),
  P($, "version", xt),
  P($, "type", _0x8ad92e.UNIVER_DOC),
  ($ = I(
    [
      _0x49f7a4(
        _0x598f5b,
        _0x3cc704,
        _0x31df78,
        _0x582ca0,
        _0xeea30b,
        _0x23e511,
      ),
      F(1, _0x2147a1(_0x229c3f)),
      F(2, _0x5a1b90),
      F(3, _0x109f5a),
    ],
    $,
  )));
export {
  B as CloseDocFormulaPopupOperation,
  U as DOCS_FORMULA_UI_PLUGIN_CONFIG_KEY,
  R as OpenDocFormulaEditorOperation,
  z as OpenSelectedDocFormulaHoverOperation,
  V as RemoveSelectedDocFormulaOperation,
  $ as UniverDocsFormulaUIPlugin,
  G as docsFormulaRootMenuSchema,
};
