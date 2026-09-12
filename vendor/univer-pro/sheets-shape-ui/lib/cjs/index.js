Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/shape-editor-ui"),
  t = require("@univerjs/ui"),
  n = require("@univerjs-pro/engine-shape"),
  r = require("@univerjs-pro/shape-editor"),
  i = require("@univerjs-pro/sheets-shape"),
  a = require("@univerjs/core"),
  o = require("@univerjs/sheets"),
  s = require("@univerjs/drawing"),
  c = require("@univerjs/engine-render"),
  l = require("@univerjs/sheets-ui"),
  u = require("rxjs"),
  d = require("@univerjs/drawing-ui"),
  f = require("react/jsx-runtime"),
  p = require("@univerjs/sheets-drawing"),
  m = require("@univerjs-pro/license"),
  h = require("@univerjs/docs"),
  g = require("@univerjs/docs-ui"),
  _ = require("@univerjs/sheets-drawing-ui"),
  v = require("@univerjs/icons"),
  y = require("react"),
  b = require("@univerjs/design");
function x(_0x1de0b6, _0x4af88f) {
  let _0x1dde1f = {};
  for (let _0x17a2fb of Object.keys(_0x4af88f)) {
    let _0xc0285d = _0x4af88f[_0x17a2fb],
      _0x46b913 = _0x1de0b6[_0x17a2fb];
    if (_0xc0285d !== undefined) {
      if (_0x46b913 === undefined) {
        _0x1dde1f[_0x17a2fb] = undefined;
        continue;
      }
      typeof _0xc0285d == "object" &&
      _0xc0285d &&
      !Array.isArray(_0xc0285d) &&
      typeof _0x46b913 == "object" &&
      _0x46b913 &&
      !Array.isArray(_0x46b913)
        ? (_0x1dde1f[_0x17a2fb] = x(_0x46b913, _0xc0285d))
        : (_0x1dde1f[_0x17a2fb] = _0x46b913);
    }
  }
  return _0x1dde1f;
}
const S = {
  type: a.CommandType["COMMAND"],
  id: "sheet.command.update-shape-data",
  handler: (_0x5b5151, _0xee2f54) => {
    let _0x2cdc38 = _0x5b5151.get(i.SheetsShapeService),
      {
        unitId: _0x4b01cd,
        subUnitId: _0x18716d,
        shapeType: _0x4b6f70,
        shapeId: _0x1c9dab,
        shapeData: _0x5deba9,
        replaceShapeData: _0x47d74d,
        oldShapeJSON: _0x257b6f,
      } = _0xee2f54;
    if (!_0x2cdc38.getShapeModel(_0x4b01cd, _0x18716d, _0x1c9dab)) return false;
    let _0x49c346 = _0x5b5151.get(a.ICommandService),
      _0x206e11 = _0x5b5151.get(a.IUndoRedoService),
      { oldShapeType: _0x512564, oldShapeData: _0x47a620 = {} } = _0x257b6f,
      _0x171efe = _0x47d74d ? _0x47a620 : x(_0x47a620, _0x5deba9 || {}),
      _0x4ba507 = {
        id: i.UpdateSheetsShapeDataMutation["id"],
        params: {
          unitId: _0x4b01cd,
          subUnitId: _0x18716d,
          shapeId: _0x1c9dab,
          shapeType: _0x4b6f70,
          shapeData: _0x5deba9,
          replace: _0x47d74d,
        },
      },
      _0x2b719f = {
        id: i.UpdateSheetsShapeDataMutation["id"],
        params: {
          unitId: _0x4b01cd,
          subUnitId: _0x18716d,
          shapeId: _0x1c9dab,
          shapeType: _0x512564,
          shapeData: _0x171efe,
          replace: _0x47d74d,
        },
      };
    return _0x49c346.syncExecuteCommand(_0x4ba507.id, _0x4ba507.params)
      ? (_0x206e11.pushUndoRedo({
          unitID: _0x4b01cd,
          undoMutations: [_0x2b719f],
          redoMutations: [_0x4ba507],
        }),
        true)
      : false;
  },
};
function C(_0x39ac3b, _0x416ef0, _0xcfee85, _0x3aa224, _0x3079c4, _0x2dc44f) {
  let _0x309884 = {
    unitId: _0x416ef0,
    subUnitId: _0xcfee85,
    shapeId: _0x3aa224,
    shapeData: _0x2dc44f,
    oldShapeJSON: _0x3079c4,
  };
  return _0x39ac3b.executeCommand(S.id, _0x309884);
}
function w(_0x3a3513, _0x192061, _0x45d21e, _0x5e3846, _0x575405, _0x5ead6a) {
  let _0x1878d1 = {
    unitId: _0x192061,
    subUnitId: _0x45d21e,
    shapeId: _0x5e3846,
    shapeData: _0x5ead6a,
    oldShapeJSON: _0x575405,
  };
  return _0x3a3513.executeCommand(S.id, _0x1878d1);
}
function T(_0x36c471) {
  "@babel/helpers - typeof";
  return (
    (T =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x34ac01) {
            return typeof _0x34ac01;
          }
        : function (_0x180f28) {
            return _0x180f28 &&
              typeof Symbol == "function" &&
              _0x180f28.constructor === Symbol &&
              _0x180f28 !== Symbol.prototype
              ? "symbol"
              : typeof _0x180f28;
          }),
    T(_0x36c471)
  );
}
function ee(_0xf0bdd0, _0x57c1c4) {
  if (T(_0xf0bdd0) != "object" || !_0xf0bdd0) return _0xf0bdd0;
  var _0x4ff468 = _0xf0bdd0[Symbol.toPrimitive];
  if (_0x4ff468 !== undefined) {
    var _0x40627c = _0x4ff468.call(_0xf0bdd0, _0x57c1c4 || "default");
    if (T(_0x40627c) != "object") return _0x40627c;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x57c1c4 === "string" ? String : Number)(_0xf0bdd0);
}
function E(_0xc0b2eb) {
  var _0x557278 = ee(_0xc0b2eb, "string");
  return T(_0x557278) == "symbol" ? _0x557278 : _0x557278 + "";
}
function D(_0x3c768f, _0x132630, _0x1818c1) {
  return (
    (_0x132630 = E(_0x132630)) in _0x3c768f
      ? Object.defineProperty(_0x3c768f, _0x132630, {
          value: _0x1818c1,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3c768f[_0x132630] = _0x1818c1),
    _0x3c768f
  );
}
function O(_0x225ef3, _0x47cabf, _0x181404) {
  let _0x514f03 = (0, e.resolveShapeTextEditorBehaviorShapeData)(_0x225ef3, {
      ..._0x47cabf,
      dataModel: {
        ...(_0x47cabf.dataModel ?? {}),
        ...(_0x181404 ? { doc: _0x181404 } : null),
      },
    }),
    _0x175f65 = (0, e.resolveShapeTextEditorWrapStrategy)(_0x514f03);
  return {
    clip: (0, e.shouldClipShapeTextDocument)(_0x514f03, _0x175f65),
    wrapStrategy: _0x175f65,
  };
}
var k = class extends c.Shape {
    constructor(_0x4317e8, _0x1197eb) {
      (super(_0x4317e8, _0x1197eb),
        D(this, "_props", undefined),
        D(
          this,
          "_formulaAnimation",
          new e["FormulaShapeAnimationController"](
            () => this.makeDirty(true),
            () => this._applyFormulaAutoFitSize(),
          ),
        ),
        D(this, "_transformCalculateSrcRect", true),
        D(this, "_drawingType", a.DrawingTypeEnum["DRAWING_SHAPE"]),
        D(this, "isDrawingObject", true),
        (this._props = { ..._0x1197eb }),
        this._formulaAnimation["setPresentation"](
          _0x1197eb.formulaPresentation,
          _0x1197eb.animateFormulaPresentation !== false,
        ),
        this._init(),
        this._applyFormulaAutoFitSize());
    }
    _init() {
      this.onTransformChange$["subscribeEvent"]((_0x1b3fe6) => {
        this._updateSrcRectByTransform(_0x1b3fe6);
      });
    }
    setPrstGeom(_0x15cae8) {
      this._props["prstGeom"] = _0x15cae8;
    }
    setEditing(_0x565039) {
      ((this._props["isEditing"] = _0x565039), this.makeDirty(true));
    }
    setFormulaPresentation(_0x2bbda2, _0x228955 = true) {
      (this._formulaAnimation["setPresentation"](_0x2bbda2, _0x228955),
        (this._props["formulaPresentation"] = _0x2bbda2),
        this._applyFormulaAutoFitSize(),
        this.makeDirty(true));
    }
    _applyFormulaAutoFitSize() {
      let _0x4b1c14 = this._props["shapeModel"],
        _0x43d415 = _0x4b1c14.getShapeTextData(),
        _0x4dd4ee = (0, e.normalizeShapeTextModel)(
          _0x43d415 == null ? undefined : _0x43d415.dataModel,
        ),
        _0x1f800e = _0x4dd4ee == null ? undefined : _0x4dd4ee.doc,
        _0xdd09e5 = this._formulaAnimation["getAutoFitPresentations"]();
      if (!_0x1f800e || _0xdd09e5.length === 0) return;
      _0x4b1c14.updateContext({ width: this.width, height: this.height });
      let _0x5b59ff = (0, e.resolveFormulaShapeAutoFitSize)({
        documentData: _0xdd09e5.map((_0x48edab) =>
          (0, r.createShapeFormulaDocument)(_0x1f800e, _0x48edab),
        ),
        height: this.height,
        shapeData: _0x4b1c14.getShapeData(),
        textRect: _0x4b1c14.getShapeTextRect({
          left: 0,
          top: 0,
          width: this.width,
          height: this.height,
        }),
        width: this.width,
      });
      if (_0x5b59ff) {
        var _0x11dde4;
        (this.resize(_0x5b59ff.width, _0x5b59ff.height),
          (_0x11dde4 = this.getScene()) == null ||
            (_0x11dde4 = _0x11dde4.getTransformer()) == null ||
            _0x11dde4.debounceRefreshControls());
      }
    }
    get unitId() {
      return this._props["unitId"];
    }
    get subUnitId() {
      return this._props["subUnitId"];
    }
    _updateSrcRectByTransform(_0x17606b) {
      if (this._props["srcRect"] == null || !this._transformCalculateSrcRect)
        return;
      let { width: _0x3ce013, height: _0x1e95f4 } = this,
        { width: _0x24d6f5 = 0, height: _0x4344f3 = 0 } = _0x17606b.preValue,
        {
          left: _0x383b4f = 0,
          top: _0x2135d9 = 0,
          right: _0x78d35a = 0,
          bottom: _0x4d30d7 = 0,
        } = this._props["srcRect"],
        _0xcfcd9a = _0x383b4f,
        _0x219bb1 = _0x2135d9,
        _0x590243 = _0x78d35a,
        _0x5a557c = _0x4d30d7,
        _0x545837 = false;
      if (_0x24d6f5 !== 0 && _0x24d6f5 !== _0x3ce013) {
        let _0x20e926 = _0x383b4f / _0x24d6f5,
          _0x13ec5a = _0x78d35a / _0x24d6f5;
        ((_0xcfcd9a = _0x3ce013 * _0x20e926),
          (_0x590243 = _0x3ce013 * _0x13ec5a),
          (_0x545837 = true));
      }
      if (_0x4344f3 !== 0 && _0x4344f3 !== _0x1e95f4) {
        let _0x3b95e6 = _0x2135d9 / _0x4344f3,
          _0x1dd3cf = _0x4d30d7 / _0x4344f3;
        ((_0x219bb1 = _0x1e95f4 * _0x3b95e6),
          (_0x5a557c = _0x1e95f4 * _0x1dd3cf),
          (_0x545837 = true));
      }
      _0x545837 &&
        this.setSrcRect({
          left: _0xcfcd9a,
          top: _0x219bb1,
          right: _0x590243,
          bottom: _0x5a557c,
        });
    }
    setSrcRect(_0x2cfeca) {
      ((this._props["srcRect"] = _0x2cfeca), this.makeDirty(true));
    }
    setFillImage(_0x417442) {
      ((this._props["image"] = _0x417442), this.makeDirty(true));
    }
    set transform(_0x2600cd) {
      this._transform = _0x2600cd;
    }
    get transform() {
      this._transform || this._setTransForm();
      let _0x116cbf = this._transform["clone"]();
      return this.transformForAngle(_0x116cbf);
    }
    get shapeModel() {
      return this._props["shapeModel"];
    }
    get shapeId() {
      return this._props["shapeId"];
    }
    get classType() {
      return c.RENDER_CLASS_TYPE["SHAPE"];
    }
    _draw(_0x190cd6, _0x483ff8, _0x5f1004, _0xec4daf) {
      let _0x3cd7e = this._props["shapeModel"];
      if (!_0x3cd7e || !_0x483ff8) return;
      let _0x2b87e5 = _0x5f1004 ?? this.width,
        _0x41e282 = _0xec4daf ?? this.height,
        _0x5b6d5b = {
          shapeType: _0x3cd7e.getShapeType(),
          width: _0x2b87e5,
          height: _0x41e282,
        },
        _0x2b6c26 = {
          renderMode: n.ShapeRenderModeEnum["Path"],
          oKey: this.oKey,
          image: this._props["image"],
          angle: this.angle,
        };
      (_0x3cd7e.updateContext(_0x5b6d5b), _0x190cd6.save());
      let _0x59e2d9 = { top: 0, left: 0, width: _0x2b87e5, height: _0x41e282 },
        _0x305750 = _0x3cd7e.getDrawingEffectBounds(_0x59e2d9);
      (_0x305750
        ? this._renderWithCache(_0x190cd6, _0x305750, (_0x466757) => {
            _0x3cd7e.render(_0x466757, _0x59e2d9, _0x2b6c26);
          })
        : (this._releaseRenderCache(),
          _0x3cd7e.render(_0x190cd6, _0x59e2d9, _0x2b6c26)),
        _0x190cd6.restore());
      let _0x15049a = _0x3cd7e.getShapeTextData(),
        _0x67fb5f = _0x3cd7e.getShapeTextRect(_0x59e2d9),
        _0x31ebd8 = _0x3cd7e.isLineShape();
      if (_0x15049a && _0x67fb5f && !_0x31ebd8) {
        (_0x190cd6.save(), this.getState().flipX && _0x190cd6.scale(-1, 1));
        let _0x1e7c76 = _0x2b87e5 / 2,
          _0x46e812 = _0x41e282 / 2;
        (_0x190cd6.translate(-_0x1e7c76, -_0x46e812),
          _0x190cd6.beginPath(),
          this._drawShapeText(_0x190cd6, _0x15049a, _0x67fb5f),
          _0x190cd6.restore());
      }
    }
    getDrawingPoints(_0xb227f6) {}
    _drawShapeText(_0x2299f8, _0x8fd1f8, _0x302d70) {
      var _0x25de0e;
      this._props["isEditing"] ||
        (!((_0x25de0e = _0x8fd1f8.dataModel) != null && _0x25de0e.doc) &&
        "isRichText" in _0x8fd1f8 &&
        _0x8fd1f8.isRichText === false
          ? this._drawSimpleText(_0x2299f8, _0x8fd1f8, _0x302d70)
          : this._drawRichText(_0x2299f8, _0x8fd1f8, _0x302d70));
    }
    _drawSimpleText(_0x5848b6, _0x13cec5, _0x581943) {
      this._drawRichText(
        _0x5848b6,
        {
          ..._0x13cec5,
          text: _0x13cec5.text ?? "",
          dataModel: {
            doc: (0, e.plainShapeTextToDocumentData)(
              _0x13cec5,
              "sheets-shape-text-" + this.oKey,
            ),
          },
        },
        _0x581943,
      );
    }
    _drawRichText(_0x35f734, _0x493bab, _0x48d8f8) {
      (0, e.drawFormulaShapeAnimationLayers)(
        _0x35f734,
        this._formulaAnimation,
        (_0x276a6d, _0x2ad449) => {
          this._drawRichTextLayer(_0x276a6d, _0x493bab, _0x48d8f8, _0x2ad449);
        },
      );
    }
    _drawRichTextLayer(_0x401205, _0x80f662, _0x523dc7, _0x17794f) {
      let _0x2f9b07 = this._props["localeService"];
      if (!_0x80f662.dataModel || !_0x2f9b07) return;
      let _0x55f64b = (0, e.normalizeShapeTextModel)(_0x80f662.dataModel);
      if (!_0x55f64b) return;
      let _0x437bf0 = _0x55f64b.doc;
      if (!_0x437bf0) return;
      let _0x4e52bf = (0, r.createShapeFormulaDocument)(_0x437bf0, _0x17794f),
        _0x2b7416 = _0x55f64b.va ?? a.VerticalAlign["TOP"],
        _0x21b0b3 = _0x55f64b.ha ?? a.HorizontalAlign["LEFT"],
        _0x1e2cce = O(
          this._props["shapeModel"].getShapeData(),
          _0x80f662,
          _0x4e52bf,
        ),
        _0x1f484c = _0x80f662.isHorizontal,
        _0x350440 = new a.DocumentDataModel(
          (0, e.prepareShapeTextDocumentData)(_0x4e52bf, {
            isHorizontal: _0x1f484c !== false,
            textRect: _0x523dc7,
            verticalAlign: _0x2b7416,
            horizontalAlign: _0x21b0b3,
            wrapStrategy: _0x1e2cce.wrapStrategy,
          }),
        ),
        _0x80553a = new c.DocumentViewModel(_0x350440),
        _0x1898ad = c.DocumentSkeleton["create"](_0x80553a, _0x2f9b07);
      _0x1898ad.calculate();
      let _0xf8a5a6 = _0x1898ad.getActualSize().actualHeight,
        _0x4a8641 = (0, e.resolveShapeTextDocumentRenderLayout)({
          contentHeight: _0xf8a5a6,
          verticalAlign: _0x2b7416,
          viewportHeight: _0x523dc7.height,
        });
      (_0x350440.updateDocumentStyle({
        pageSize: {
          width: _0x1f484c === false ? _0x523dc7.height : _0x523dc7.width,
          height: _0x4a8641.contentHeight,
        },
      }),
        _0x350440.updateDocumentDataMargin({ t: _0x4a8641.marginTop }),
        _0x1898ad.calculate());
      let _0x28f67f = new c["Documents"]("shape-text-" + this.oKey, _0x1898ad, {
        pageMarginLeft: 0,
        pageMarginTop: 0,
        onTextFillImageLoaded: () => this.makeDirty(true),
      });
      (_0x28f67f.resize(_0x523dc7.width, _0x4a8641.contentHeight),
        _0x401205.save(),
        _0x401205.translateWithPrecision(_0x523dc7.left, _0x523dc7.top),
        _0x1e2cce.clip &&
          (_0x401205.beginPath(),
          _0x401205.rect(
            0,
            _0x4a8641.clipTop,
            _0x523dc7.width,
            _0x4a8641.clipHeight,
          ),
          _0x401205.clip()),
        _0x4a8641.contentVerticalOffset &&
          _0x401205.translateWithPrecision(0, _0x4a8641.contentVerticalOffset),
        _0x28f67f.draw(_0x401205),
        _0x401205.restore(),
        _0x28f67f.dispose(),
        _0x1898ad.dispose(),
        _0x80553a.dispose(),
        _0x350440.dispose());
    }
    render(_0x504fc7, _0x1d7c67, _0x4ec9a1 = false) {
      if (!this.visible) return (this.makeDirty(false), this);
      let {
          width: _0x5833a7,
          height: _0x542ff5,
          left: _0x295508,
          top: _0x106317,
        } = this,
        _0x762ffc = this.getRealBound();
      if (
        ((_0x5833a7 = _0x762ffc.width),
        (_0x542ff5 = _0x762ffc.height),
        (_0x295508 = _0x762ffc.left),
        (_0x106317 = _0x762ffc.top),
        this.isRender(_0x1d7c67))
      ) {
        let {
          top: _0x271c11,
          left: _0x320d7d,
          bottom: _0x4ff718,
          right: _0x198298,
        } = _0x1d7c67.viewBound;
        if (
          _0x5833a7 + this.strokeWidth + _0x295508 < _0x320d7d ||
          _0x198298 < _0x295508 ||
          _0x542ff5 + this.strokeWidth + _0x106317 < _0x271c11 ||
          _0x4ff718 < _0x106317
        )
          return this;
      }
      let _0x1220ea = _0x295508 + _0x5833a7 / 2,
        _0x399655 = _0x106317 + _0x542ff5 / 2,
        _0xba9166 = this.transform["getMatrix"]();
      if (this._props["isEditing"]) {
        let _0x56fb7a = this.getState(),
          _0xc4fe0d = new c["Transform"]();
        (_0xc4fe0d.composeMatrix({ ..._0x56fb7a }),
          (_0xba9166 = _0xc4fe0d.getMatrix()));
      }
      return (
        _0x504fc7.save(),
        this._props["shapeModel"].isRenderLinePointsMode === true ||
          _0x504fc7.transform(
            _0xba9166[0],
            _0xba9166[1],
            _0xba9166[2],
            _0xba9166[3],
            _0x1220ea,
            _0x399655,
          ),
        this._draw(_0x504fc7, _0x1d7c67, _0x5833a7, _0x542ff5),
        _0x504fc7.restore(),
        this.makeDirty(false),
        this
      );
    }
    getInverseCoord(_0x5aad9e) {
      let {
          left: _0x27bebc,
          top: _0x2bcc81,
          width: _0x35d6df,
          height: _0x2ca04d,
        } = this.getRealBound(),
        _0x1cc6b6 = this.transform["getMatrix"](),
        _0x356490 = _0x27bebc + _0x35d6df / 2,
        _0x1d4cf4 = _0x2bcc81 + _0x2ca04d / 2,
        _0x313478 = new c["Transform"]([
          _0x1cc6b6[0],
          _0x1cc6b6[1],
          _0x1cc6b6[2],
          _0x1cc6b6[3],
          _0x356490,
          _0x1d4cf4,
        ]),
        _0x110286 = this.getParent();
      return (
        this.isInGroup &&
        (_0x110286 == null ? undefined : _0x110286.classType) ===
          c.RENDER_CLASS_TYPE["GROUP"]
          ? _0x110286.ancestorTransform["multiply"](_0x313478)
          : _0x313478
      )
        .invert()
        .applyPoint(_0x5aad9e);
    }
    isHit(_0x25e4f2) {
      let {
          left: _0x89271f,
          top: _0x38932f,
          width: _0x540fae,
          height: _0x334806,
        } = this.getRealBound(),
        _0x312bbe = _0x89271f + _0x540fae / 2,
        _0x410122 = _0x38932f + _0x334806 / 2,
        _0x102678 = this.transform["getMatrix"](),
        _0x871c65 = new c.Transform([
          _0x102678[0],
          _0x102678[1],
          _0x102678[2],
          _0x102678[3],
          _0x312bbe,
          _0x410122,
        ]),
        _0x145e80 = this.getParent(),
        _0xf9e46f = (
          this.isInGroup &&
          (_0x145e80 == null ? undefined : _0x145e80.classType) ===
            c.RENDER_CLASS_TYPE["GROUP"]
            ? _0x145e80.ancestorTransform["multiply"](_0x871c65)
            : _0x871c65
        )
          .invert()
          .applyPoint(_0x25e4f2),
        _0x3fe8ec = _0x540fae / 2,
        _0x4fbff7 = _0x334806 / 2,
        _0x54314d = this._props["shapeModel"];
      return _0x54314d && _0x54314d.isLineShape()
        ? _0x54314d.isHitLine(_0xf9e46f.x, _0xf9e46f.y, _0x540fae, _0x334806)
        : _0xf9e46f.x >= -_0x3fe8ec - this.strokeWidth / 2 &&
            _0xf9e46f.x <= _0x3fe8ec + this.strokeWidth / 2 &&
            _0xf9e46f.y >= -_0x4fbff7 - this.strokeWidth / 2 &&
            _0xf9e46f.y <= _0x4fbff7 + this.strokeWidth / 2;
    }
    dispose() {
      (this._formulaAnimation["dispose"](),
        (this._props["shapeModel"] = null),
        super.dispose());
    }
  },
  A = class extends c.Shape {
    constructor(_0x204e82, _0x4678de) {
      (super(_0x204e82, _0x4678de),
        D(this, "_shapeId", null),
        D(this, "_adjName", null),
        D(this, "_unitId", null),
        D(this, "_subUnitId", null),
        _0x4678de && this.setShapeProps(_0x4678de));
    }
    getDrawingSearch() {
      return {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._shapeId,
      };
    }
    setShapeProps(_0x5e0695) {
      (_0x5e0695.shapeId !== undefined && (this._shapeId = _0x5e0695.shapeId),
        _0x5e0695.adjName !== undefined && (this._adjName = _0x5e0695.adjName),
        _0x5e0695.unitId !== undefined && (this._unitId = _0x5e0695.unitId),
        _0x5e0695.subUnitId !== undefined &&
          (this._subUnitId = _0x5e0695.subUnitId),
        this.transformByState({
          width: _0x5e0695.width,
          height: _0x5e0695.height,
        }));
    }
    _draw(_0x5d7152) {
      c.Circle["drawWith"](_0x5d7152, {
        radius: n.ShapeDefaultConfig["adjHandleSize"],
        fill: n.ShapeDefaultConfig["adjHandleFill"],
        stroke: n.ShapeDefaultConfig["adjHandleStroke"],
        strokeWidth: 1,
        evented: true,
      });
    }
  };
function j(_0x49e4e8, _0x1eb4b5) {
  return function (_0x5ac7cb, _0xced44b) {
    _0x1eb4b5(_0x5ac7cb, _0xced44b, _0x49e4e8);
  };
}
function M(_0xda1cc9, _0xee58aa, _0x37910f, _0x39b4f7) {
  var _0x35bab1 = arguments.length,
    _0x4f09aa =
      _0x35bab1 < 3
        ? _0xee58aa
        : _0x39b4f7 === null
          ? (_0x39b4f7 = Object.getOwnPropertyDescriptor(_0xee58aa, _0x37910f))
          : _0x39b4f7,
    _0x72bd28;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4f09aa = Reflect.decorate(_0xda1cc9, _0xee58aa, _0x37910f, _0x39b4f7);
  else {
    for (var _0x41e5ef = _0xda1cc9.length - 1; _0x41e5ef >= 0; _0x41e5ef--)
      (_0x72bd28 = _0xda1cc9[_0x41e5ef]) &&
        (_0x4f09aa =
          (_0x35bab1 < 3
            ? _0x72bd28(_0x4f09aa)
            : _0x35bab1 > 3
              ? _0x72bd28(_0xee58aa, _0x37910f, _0x4f09aa)
              : _0x72bd28(_0xee58aa, _0x37910f)) || _0x4f09aa);
  }
  return (
    _0x35bab1 > 3 &&
      _0x4f09aa &&
      Object.defineProperty(_0xee58aa, _0x37910f, _0x4f09aa),
    _0x4f09aa
  );
}
let N = class extends a.Disposable {
  constructor(
    _0x5dcd84,
    _0x127c7b,
    _0x5b1965,
    _0x527d9d,
    _0x20785d,
    _0x34bdd9,
  ) {
    (super(),
      (this._drawingManagerService = _0x5dcd84),
      (this._sheetsShapeService = _0x127c7b),
      (this._localeService = _0x5b1965),
      (this._imageIoService = _0x527d9d),
      (this._urlImageService = _0x20785d),
      (this._shapeFormulaService = _0x34bdd9),
      D(this, "_formulaShapes", new Map()),
      this.disposeWithMe(
        this._shapeFormulaService["presentationChanged$"].subscribe(
          (_0x48b006) => {
            var _0x4f37af;
            (_0x4f37af = this._formulaShapes["get"](
              this._formulaKey(
                _0x48b006.unitId,
                _0x48b006.subUnitId,
                _0x48b006.shapeId,
              ),
            )) == null ||
              _0x4f37af.forEach((_0x522b63) =>
                _0x522b63.setFormulaPresentation(
                  _0x48b006.presentation,
                  _0x48b006.animationEnabled,
                ),
              );
          },
        ),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x23b057) => {
          _0x23b057.forEach((_0x4caa4b) => {
            (this._shapeFormulaService["unregister"]({
              unitId: _0x4caa4b.unitId,
              subUnitId: _0x4caa4b.subUnitId,
              shapeId: _0x4caa4b.drawingId,
            }),
              this._formulaShapes["delete"](
                this._formulaKey(
                  _0x4caa4b.unitId,
                  _0x4caa4b.subUnitId,
                  _0x4caa4b.drawingId,
                ),
              ));
          });
        }),
      ));
  }
  renderDrawingShape(_0x50a88d, _0x32c807, _0x3a1a06) {
    let {
      transform: _0x55fa40,
      drawingType: _0x10a4a4,
      srcRect: _0x53435c,
      prstGeom: _0x478e93,
      groupId: _0x1e9806,
      unitId: _0x4add96,
      subUnitId: _0x4ead24,
      drawingId: _0x2589b2,
      isMultiTransform: _0x1de0f4,
      transforms: _0x3fd204,
      hidden: _0x4ea6b4,
      selectable: _0x40e189,
    } = _0x50a88d;
    if (
      _0x10a4a4 !== a.DrawingTypeEnum["DRAWING_SHAPE"] ||
      !this._drawingManagerService["getDrawingVisible"]() ||
      _0x55fa40 == null
    )
      return;
    let _0x3412aa = this._drawingManagerService["getDrawingEditable"](),
      _0x3b7a7e = _0x1de0f4 && _0x3fd204 ? _0x3fd204 : [_0x55fa40],
      _0x45d647 = [];
    for (let _0x2f7991 of _0x3b7a7e) {
      let {
          left: _0x4df41d,
          top: _0x9f92e9,
          width: _0x4ab89c,
          height: _0xba9c67,
          angle: _0x3d5547,
          flipX: _0x513474,
          flipY: _0x31200d,
          skewX: _0x35d4b1,
          skewY: _0x3ae31e,
        } = _0x2f7991,
        _0x376473 = _0x3b7a7e.indexOf(_0x2f7991),
        _0x4f5ec5 = (0, s.getDrawingShapeKeyByDrawingSearch)(
          { unitId: _0x4add96, subUnitId: _0x4ead24, drawingId: _0x2589b2 },
          _0x1de0f4 ? _0x376473 : undefined,
        ),
        _0x1d707e = _0x32c807.getObjectIncludeInGroup(_0x4f5ec5);
      if (_0x1d707e != null) {
        let _0x1912a0 = {
          unitId: _0x4add96,
          subUnitId: _0x4ead24,
          shapeId: _0x2589b2,
        };
        (_0x1d707e instanceof k &&
          this.refreshFormulaPresentation(_0x1d707e, _0x1912a0),
          _0x1d707e.transformByState({
            left: _0x4df41d,
            top: _0x9f92e9,
            width: _0x4ab89c,
            height: _0xba9c67,
            angle: _0x3d5547,
            flipX: _0x513474,
            flipY: _0x31200d,
            skewX: _0x35d4b1,
            skewY: _0x3ae31e,
          }));
        continue;
      }
      let _0x27f212 = this._drawingManagerService["getDrawingOrder"](
          _0x4add96,
          _0x4ead24,
        ),
        _0x300586 = _0x27f212.indexOf(_0x2589b2);
      if (
        _0x32c807.getObjectIncludeInGroup(_0x4f5ec5) ||
        !this._drawingManagerService["getDrawingVisible"]()
      )
        continue;
      let _0x299068 = this._sheetsShapeService["getShapeModel"](
        _0x4add96,
        _0x4ead24,
        _0x2589b2,
      );
      if (!_0x299068) continue;
      let _0x1da06c = (0, n.isConnectorShape)(_0x299068.getShapeType())
          ? {
              ...e.SHAPE_EDITOR_TRANSFORMER_CONFIG,
              rotateEnabled: false,
              resizeEnabled: false,
              borderEnabled: false,
            }
          : e.SHAPE_EDITOR_TRANSFORMER_CONFIG,
        _0x1dffb6 = _0x299068.getShapeData().formulaBinding,
        _0x2db0c1 = {
          unitId: _0x4add96,
          subUnitId: _0x4ead24,
          shapeId: _0x2589b2,
        };
      _0x1dffb6 && this._shapeFormulaService["register"](_0x2db0c1, _0x1dffb6);
      let _0x5767cd = new k(_0x4f5ec5, {
        ..._0x2f7991,
        zIndex: _0x300586 === -1 ? _0x27f212.length - 1 : _0x300586,
        shapeModel: _0x299068,
        localeService: this._localeService,
        shapeId: _0x2589b2,
        unitId: _0x4add96,
        subUnitId: _0x4ead24,
        visible: _0x4ea6b4 !== true,
        evented: _0x40e189 !== false,
        formulaPresentation: _0x1dffb6
          ? this._shapeFormulaService["getPresentation"](_0x2db0c1)
          : undefined,
        animateFormulaPresentation:
          (_0x1dffb6 == null ? undefined : _0x1dffb6.animationEnabled) !==
          false,
        transformerConfig: _0x1da06c,
      });
      if (_0x1dffb6) {
        let _0x3779cc = this._formulaKey(_0x4add96, _0x4ead24, _0x2589b2),
          _0x2a179a = this._formulaShapes["get"](_0x3779cc) ?? new Set();
        (_0x2a179a.add(_0x5767cd),
          this._formulaShapes["set"](_0x3779cc, _0x2a179a));
      }
      (_0x32c807.addObject(_0x5767cd, c.DRAWING_OBJECT_LAYER_INDEX),
        _0x3412aa && _0x32c807.attachTransformerTo(_0x5767cd),
        _0x1e9806 &&
          (0, d.insertGroupObject)(
            { drawingId: _0x1e9806, unitId: _0x4add96, subUnitId: _0x4ead24 },
            _0x5767cd,
            _0x32c807,
            this._drawingManagerService,
          ),
        _0x478e93 != null && _0x5767cd.setPrstGeom(_0x478e93),
        _0x53435c != null && _0x5767cd.setSrcRect(_0x53435c));
      let _0x5af692 = this._loadShapePictureFill(
        _0x5767cd,
        _0x299068.getShapeData(),
      );
      if (_0x5af692) {
        var _0x2e85e2;
        _0x3a1a06 == null ||
          (_0x2e85e2 = _0x3a1a06.resourceCollector) == null ||
          _0x2e85e2.add(_0x5af692);
      }
      _0x45d647.push(_0x5767cd);
    }
    return _0x45d647;
  }
  _formulaKey(_0x2b7e48, _0x505e6f, _0x51bc20) {
    return _0x2b7e48 + "\x00" + _0x505e6f + "\x00" + _0x51bc20;
  }
  refreshFormulaPresentation(_0x38e891, _0x16bc00) {
    let _0x3fd048 = this._sheetsShapeService["getShapeModel"](
        _0x16bc00.unitId,
        _0x16bc00.subUnitId,
        _0x16bc00.shapeId,
      ),
      _0x2e0a54 =
        _0x3fd048 == null ? undefined : _0x3fd048.getShapeData().formulaBinding,
      _0x54153f = this._formulaKey(
        _0x16bc00.unitId,
        _0x16bc00.subUnitId,
        _0x16bc00.shapeId,
      );
    if (_0x2e0a54) {
      this._shapeFormulaService["register"](_0x16bc00, _0x2e0a54);
      let _0x449e21 = this._formulaShapes["get"](_0x54153f) ?? new Set();
      (_0x449e21.add(_0x38e891),
        this._formulaShapes["set"](_0x54153f, _0x449e21));
    } else {
      var _0x586c52;
      (this._shapeFormulaService["unregister"](_0x16bc00),
        (_0x586c52 = this._formulaShapes["get"](_0x54153f)) == null ||
          _0x586c52.delete(_0x38e891));
    }
    _0x38e891.setFormulaPresentation(
      _0x2e0a54
        ? this._shapeFormulaService["getPresentation"](_0x16bc00)
        : undefined,
      (_0x2e0a54 == null ? undefined : _0x2e0a54.animationEnabled) !== false,
    );
  }
  refreshShapeFillImage(_0x4c2a5c) {
    let _0x1789af = _0x4c2a5c.shapeModel["getShapeData"](),
      _0x4d3040 = _0x1789af.fill;
    if (
      !_0x4d3040 ||
      _0x4d3040.fillType !== n.ShapeFillEnum["PictureFill"] ||
      !_0x4d3040.fillImageSource
    ) {
      _0x4c2a5c.setFillImage(undefined);
      return;
    }
    this._loadShapePictureFill(_0x4c2a5c, _0x1789af);
  }
  _loadShapePictureFill(_0x5f0139, _0x34a194) {
    let _0x50debb = _0x34a194.fill;
    if (
      !_0x50debb ||
      _0x50debb.fillType !== n.ShapeFillEnum["PictureFill"] ||
      !_0x50debb.fillImageSource
    )
      return;
    let _0x322907 = _0x50debb.fillImageSource,
      _0x5bc837 = _0x50debb.fillImageSourceType ?? n.ImageSourceTypeEnum["URL"],
      _0x326ca4 = this._imageIoService["getImageSourceCache"](
        _0x322907,
        _0x5bc837,
      );
    if (_0x326ca4) {
      _0x5f0139.setFillImage(_0x326ca4);
      return;
    }
    return this._loadAndSetImage(_0x5f0139, _0x322907, _0x5bc837);
  }
  async _loadAndSetImage(_0x8806a4, _0x7ad5b2, _0x2f13ad) {
    let _0x4c7767;
    try {
      if (_0x2f13ad === n.ImageSourceTypeEnum["UUID"])
        _0x4c7767 = await this._imageIoService["getImage"](_0x7ad5b2);
      else {
        if (_0x2f13ad === n.ImageSourceTypeEnum["URL"])
          try {
            _0x4c7767 = await this._urlImageService["getImage"](_0x7ad5b2);
          } catch {
            _0x4c7767 = _0x7ad5b2;
          }
        else _0x4c7767 = _0x7ad5b2;
      }
    } catch (_0x3d1cdd) {
      console.error(
        "[ShapeRender] Failed to resolve picture fill source",
        _0x3d1cdd,
      );
      return;
    }
    await new Promise((_0x502931) => {
      let _0x1399ba = new window["Image"]();
      ((_0x1399ba.onload = () => {
        (this._imageIoService["addImageSourceCache"](
          _0x7ad5b2,
          _0x2f13ad,
          _0x1399ba,
        ),
          _0x8806a4.setFillImage(_0x1399ba),
          _0x502931());
      }),
        (_0x1399ba.onerror = () => {
          (console.error(
            "[ShapeRender] Failed to load picture fill image",
            _0x7ad5b2,
          ),
            _0x502931());
        }),
        (_0x1399ba.src = _0x4c7767));
    });
  }
};
N = M(
  [
    j(0, s.IDrawingManagerService),
    j(1, (0, a.Inject)(i.SheetsShapeService)),
    j(2, (0, a.Inject)(a.LocaleService)),
    j(3, a.IImageIoService),
    j(4, a.IURLImageService),
    j(5, (0, a.Inject)(r.ShapeFormulaService)),
  ],
  N,
);
let P = class extends a.Disposable {
  constructor(
    _0x4e4653,
    _0x53e4f1,
    _0x233f6d,
    _0x511118,
    _0x928d7d,
    _0x25a087,
  ) {
    (super(),
      (this._drawingManagerService = _0x4e4653),
      (this._sheetsShapeService = _0x53e4f1),
      (this._renderManagerService = _0x233f6d),
      (this._sheetDrawingShapeRenderController = _0x511118),
      (this._univerInstanceService = _0x928d7d),
      (this._commandService = _0x25a087),
      D(this, "_activeShapeId", null),
      D(this, "_unitId", null),
      D(this, "_subUnitId", null),
      D(this, "_activeShapeAdjustPointList", undefined),
      D(this, "_shapes", []),
      D(this, "_baseShapeLeft", 0),
      D(this, "_baseShapeTop", 0),
      D(this, "_baseShapeWidth", 0),
      D(this, "_baseShapeHeight", 0),
      D(this, "_isStartAdjusting", false),
      D(this, "_activeAdjustInfo", undefined),
      D(this, "_activeShapeModel", undefined),
      D(this, "_adjHandlerPointerMove", undefined),
      D(this, "_adjHandlerPointerUp", undefined),
      D(this, "_isShouldShowDrawingShapeAdjust", false),
      this._registerDrawingFocusChangeHandler(),
      this._registerDrawingMoveHandler());
  }
  _getShapeAdjustPointListById(_0x3e6071, _0x2a2cba, _0x3629ae) {
    let _0x29e08a = this._sheetsShapeService["getShapeModel"](
      _0x3e6071,
      _0x2a2cba,
      _0x3629ae,
    );
    if (_0x29e08a) return _0x29e08a.getDrawingPoints();
  }
  clearAdjustControls() {
    this._clearShapeAdjustControls();
  }
  refreshAdjustControls() {
    this._updateShapeAdjustControls(true);
  }
  setShouldShowAdjust(_0x593ff6) {
    this._isShouldShowDrawingShapeAdjust = _0x593ff6;
  }
  _getShapeAdjustInfosById(_0x5e8ff5, _0x2cbe56, _0x451ae1, _0x56581c) {
    let _0x5cf5e6 = this._sheetsShapeService["getShapeModel"](
      _0x5e8ff5,
      _0x2cbe56,
      _0x451ae1,
    );
    if (_0x5cf5e6) return _0x5cf5e6.getAdjustInfoByName(_0x56581c);
  }
  _createShapeAdjustControls(_0x2a9b4e = false) {
    if (
      this._unitId === null ||
      this._subUnitId === null ||
      this._activeShapeId === null
    )
      return;
    let _0x1b39a2 = this._renderManagerService["getRenderUnitById"](
      this._unitId,
    );
    if (
      !_0x1b39a2 ||
      !_0x1b39a2.with(l.SheetSkeletonManagerService).getCurrentSkeleton()
    )
      return;
    let { scene: _0xa8ca8f } = _0x1b39a2,
      _0x331b16 = {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._activeShapeId,
      },
      _0x2ce93e = this._drawingManagerService["getDrawingByParam"](_0x331b16),
      { transform: _0x1dcc9d } = _0x2ce93e;
    if (
      !_0x1dcc9d ||
      _0x2ce93e.drawingType !== a.DrawingTypeEnum["DRAWING_SHAPE"]
    )
      return;
    let {
      left: _0x489b0a,
      top: _0x30cee3,
      width: _0x40be13,
      height: _0x5e37d7,
      flipX: _0x31d066,
      flipY: _0x5c53e6,
      angle: _0x11050e = 0,
    } = _0x1dcc9d;
    if (_0x489b0a === undefined || _0x30cee3 === undefined) return;
    if (_0x2a9b4e) {
      let _0x2ddd56 = this._sheetsShapeService["getShapeModel"](
        this._unitId,
        this._subUnitId,
        this._activeShapeId,
      );
      (_0x2ddd56 == null ||
        _0x2ddd56.updateContext({
          width: _0x40be13 ?? 0,
          height: _0x5e37d7 ?? 0,
        }),
        (this._activeShapeAdjustPointList =
          _0x2ddd56 == null ? undefined : _0x2ddd56.getDrawingPoints()));
    }
    let _0x54b6de = this._activeShapeAdjustPointList;
    for (let _0x325246 = 0; _0x325246 < _0x54b6de.length; _0x325246++) {
      let _0x96a346 = _0x54b6de[_0x325246],
        _0x4ff843 = _0x96a346.x,
        _0xce82c1 = _0x96a346.y;
      if (
        (_0x31d066 && (_0x4ff843 = (_0x40be13 || 0) - _0x4ff843),
        _0x5c53e6 && (_0xce82c1 = (_0x5e37d7 || 0) - _0xce82c1),
        _0x11050e !== 0)
      ) {
        let _0x4ce027 = (_0x40be13 || 0) / 2,
          _0x561471 = (_0x5e37d7 || 0) / 2,
          _0x3b817f = (_0x11050e * Math.PI) / 180,
          _0xadf7e7 = Math.cos(_0x3b817f),
          _0x1ac271 = Math.sin(_0x3b817f),
          _0x58a012 = _0x4ff843 - _0x4ce027,
          _0x18db0d = _0xce82c1 - _0x561471;
        ((_0x4ff843 =
          _0x4ce027 + (_0x58a012 * _0xadf7e7 - _0x18db0d * _0x1ac271)),
          (_0xce82c1 =
            _0x561471 + (_0x58a012 * _0x1ac271 + _0x18db0d * _0xadf7e7)));
      }
      let _0x1200ac = {
        x: _0x4ff843,
        y: _0xce82c1,
        adjName: _0x96a346.adjName,
      };
      this._addShapeAdjustControl(
        _0xa8ca8f,
        _0x1200ac,
        _0x1200ac.adjName,
        _0x489b0a,
        _0x30cee3,
        this._unitId,
        this._subUnitId,
      );
    }
  }
  _updateShapeAdjustControls(_0x573ad1 = false) {
    _0x573ad1 &&
      (this._clearShapeAdjustControls(),
      this._createShapeAdjustControls(_0x573ad1));
  }
  _addShapeAdjustControl(
    _0x1064eb,
    _0x3abcde,
    _0x2954fa,
    _0x3e6925,
    _0x5c943d,
    _0x89bd41,
    _0x4a4654,
  ) {
    if (!this._activeShapeId) return;
    let _0x1c592f = _0x1064eb.getObjectIncludeInGroup(
      "shape-adjust-point-" + this._activeShapeId + "-" + _0x2954fa,
    );
    if (_0x1c592f) {
      _0x1c592f.transformByState({
        left: _0x3abcde.x + _0x3e6925 - n.ShapeDefaultConfig["adjHandleSize"],
        top: _0x3abcde.y + _0x5c943d - n.ShapeDefaultConfig["adjHandleSize"],
      });
      return;
    }
    let _0x6c8a1 = {
        left: _0x3abcde.x + _0x3e6925 - n.ShapeDefaultConfig["adjHandleSize"],
        top: _0x3abcde.y + _0x5c943d - n.ShapeDefaultConfig["adjHandleSize"],
        adjName: _0x2954fa,
        shapeId: this._activeShapeId,
        unitId: _0x89bd41,
        subUnitId: _0x4a4654,
        width: n.ShapeDefaultConfig["adjHandleSize"] + 8,
        height: n.ShapeDefaultConfig["adjHandleSize"] + 8,
        zIndex: c.DRAWING_OBJECT_LAYER_INDEX + 1,
        evented: true,
      },
      _0x1a9456 = new A(
        "shape-adjust-point-" + this._activeShapeId + "-" + _0x2954fa,
        _0x6c8a1,
      );
    (this._shapes["push"](_0x1a9456),
      this._attachAdjustEvent(_0x1a9456, _0x1064eb, _0x2954fa),
      _0x1064eb.addObject(_0x1a9456, c.DRAWING_OBJECT_LAYER_INDEX + 1));
  }
  _clearShapeAdjustControls() {
    this._shapes["length"] !== 0 &&
      (this._shapes["forEach"]((_0x183faa) => {
        _0x183faa.dispose();
      }),
      (this._shapes = []));
  }
  _updateAdjustControlPositions() {
    this._createShapeAdjustControls();
  }
  _getScrollInfo(_0x4d7c2d, _0x1828fa) {
    var _0x5ef96a;
    let _0x4a7d06 = { x: 0, y: 0 };
    if (!_0x4d7c2d || !_0x1828fa) return _0x4a7d06;
    let _0x5078a7 = this._renderManagerService["getRenderUnitById"](_0x4d7c2d);
    if (
      !_0x5078a7 ||
      !_0x5078a7.with(l.SheetSkeletonManagerService).getSkeleton(_0x1828fa)
    )
      return _0x4a7d06;
    let _0x46b06b = _0x5078a7.with(l.SheetScrollManagerService),
      _0x3adee6 =
        _0x46b06b == null ? undefined : _0x46b06b.getCurrentScrollState();
    if (!_0x3adee6) return _0x4a7d06;
    let _0xa175d2 =
      (_0x5ef96a = this._univerInstanceService["getUnit"](_0x4d7c2d)) == null
        ? undefined
        : _0x5ef96a.getSheetBySheetId(_0x1828fa);
    if (!_0xa175d2) return _0x4a7d06;
    let _0x2875bc = (0, l.getViewportByCell)(
      _0x3adee6.sheetViewStartRow,
      _0x3adee6.sheetViewStartColumn,
      _0x5078a7.scene,
      _0xa175d2,
    );
    return _0x2875bc
      ? { x: _0x2875bc.viewportScrollX, y: _0x2875bc.viewportScrollY }
      : _0x4a7d06;
  }
  _getZoomRatio(_0xa41f04, _0x319de8) {
    var _0x41cb25;
    let _0xdacdee =
      (_0x41cb25 = this._univerInstanceService["getUnit"](_0xa41f04)) == null
        ? undefined
        : _0x41cb25.getSheetBySheetId(_0x319de8);
    return (_0xdacdee == null ? undefined : _0xdacdee.getZoomRatio()) ?? 1;
  }
  _attachAdjustEvent(_0x16b41a, _0x44d7bd, _0x2b6198) {
    this.disposeWithMe(
      (0, a.toDisposable)(
        _0x16b41a.onPointerDown$["subscribeEvent"]((_0x2d72a7, _0x5493d3) => {
          var _0x1e059e, _0x2fa0e1, _0x325f01, _0x558a05;
          let _0x5e1bd5 = _0x16b41a.getDrawingSearch();
          ((this._activeAdjustInfo = this._getShapeAdjustInfosById(
            _0x5e1bd5.unitId,
            _0x5e1bd5.subUnitId,
            _0x5e1bd5.drawingId,
            _0x2b6198,
          )),
            (this._activeShapeModel = this._sheetsShapeService["getShapeModel"](
              _0x5e1bd5.unitId,
              _0x5e1bd5.subUnitId,
              _0x5e1bd5.drawingId,
            )));
          let _0x401725 = this._drawingManagerService["getDrawingByParam"]({
              unitId: this._unitId,
              subUnitId: this._subUnitId,
              drawingId: this._activeShapeId,
            }),
            { transform: _0x51dfa5 } = _0x401725;
          if (_0x51dfa5) {
            let {
              left: _0x26c8b9,
              top: _0x49a229,
              width: _0x3eb1da,
              height: _0x25483b,
            } = _0x51dfa5;
            ((this._baseShapeLeft = _0x26c8b9 || 0),
              (this._baseShapeTop = _0x49a229 || 0),
              (this._baseShapeWidth = _0x3eb1da || 0),
              (this._baseShapeHeight = _0x25483b || 0));
          }
          let _0x10fabd = !!(
              (_0x1e059e = _0x401725.transform) != null && _0x1e059e.flipX
            ),
            _0x22c37c = !!(
              (_0x2fa0e1 = _0x401725.transform) != null && _0x2fa0e1.flipY
            ),
            _0x48dafe =
              ((_0x325f01 = _0x401725.transform) == null
                ? undefined
                : _0x325f01.angle) || 0;
          ((this._isStartAdjusting = true), _0x44d7bd.disableObjectsEvent());
          let _0x50e600 = {
            ...(((_0x558a05 = this._activeAdjustInfo) == null
              ? undefined
              : _0x558a05.currentAdjustValues) ?? {}),
          };
          ((this._adjHandlerPointerMove = _0x44d7bd.onPointerMove$[
            "subscribeEvent"
          ]((_0x1b4a78, _0x173974) => {
            if (!this._isStartAdjusting) return;
            let { offsetX: _0x32ac7a, offsetY: _0x3b83dc } = _0x1b4a78,
              _0x13ced7 = this._activeAdjustInfo;
            if (this._activeShapeModel && _0x13ced7) {
              (_0x44d7bd.disableObjectsEvent(),
                _0x44d7bd.setCursor(c.CURSOR_TYPE["CROSSHAIR"]));
              let _0x4d3871 = {
                  left: 0,
                  top: 0,
                  width: this._baseShapeWidth,
                  height: this._baseShapeHeight,
                },
                _0x289313 = this._getScrollInfo(this._unitId, this._subUnitId),
                _0x21bbb6 = this._getZoomRatio(this._unitId, this._subUnitId),
                _0x492d76 =
                  _0x32ac7a / _0x21bbb6 + _0x289313.x - this._baseShapeLeft,
                _0x56bd1d =
                  _0x3b83dc / _0x21bbb6 + _0x289313.y - this._baseShapeTop;
              if (_0x48dafe !== 0) {
                let _0x1df54e = this._baseShapeWidth / 2,
                  _0x22fbea = this._baseShapeHeight / 2,
                  _0x17d799 = (_0x48dafe * Math.PI) / 180,
                  _0x217d1d = Math.cos(_0x17d799),
                  _0x375ef5 = Math.sin(_0x17d799),
                  _0x6b1275 = _0x492d76 - _0x1df54e,
                  _0xc0edb9 = _0x56bd1d - _0x22fbea;
                ((_0x492d76 =
                  _0x1df54e + (_0x6b1275 * _0x217d1d + _0xc0edb9 * _0x375ef5)),
                  (_0x56bd1d =
                    _0x22fbea +
                    (-_0x6b1275 * _0x375ef5 + _0xc0edb9 * _0x217d1d)));
              }
              (_0x10fabd && (_0x492d76 = this._baseShapeWidth - _0x492d76),
                _0x22c37c && (_0x56bd1d = this._baseShapeHeight - _0x56bd1d));
              let _0x45f93b = { x: _0x492d76, y: _0x56bd1d },
                _0x46c770 = this._activeShapeModel["calcAdjValues"](
                  _0x4d3871,
                  _0x45f93b,
                  _0x13ced7,
                  _0x10fabd,
                  _0x22c37c,
                );
              if (Object.keys(_0x46c770).length === 0) return;
              for (let [_0x374b55, _0x5edc8e] of Object.entries(_0x46c770))
                this._activeShapeModel["setAdjustValueByName"](
                  _0x374b55,
                  _0x5edc8e,
                );
              this._activeShapeModel["updateContext"]({
                width: this._baseShapeWidth,
                height: this._baseShapeHeight,
              });
              let _0x320ad0 = this._drawingManagerService["getDrawingByParam"]({
                unitId: _0x5e1bd5.unitId,
                subUnitId: _0x5e1bd5.subUnitId,
                drawingId: _0x5e1bd5.drawingId,
              });
              _0x320ad0 &&
                (this._sheetDrawingShapeRenderController["renderDrawingShape"](
                  _0x320ad0,
                  _0x44d7bd,
                ),
                (this._activeShapeAdjustPointList =
                  this._getShapeAdjustPointListById(
                    _0x5e1bd5.unitId,
                    _0x5e1bd5.subUnitId,
                    _0x5e1bd5.drawingId,
                  )),
                this._updateAdjustControlPositions());
            }
            _0x173974.stopPropagation();
          })),
            (this._adjHandlerPointerUp = _0x44d7bd.onPointerUp$[
              "subscribeEvent"
            ]((_0x3d3355, _0x28233e) => {
              (this._adjHandlerPointerMove["unsubscribe"](),
                this._adjHandlerPointerUp["unsubscribe"](),
                _0x44d7bd.resetCursor());
              let _0x69cdc9 = this._activeAdjustInfo;
              if (_0x69cdc9) {
                let _0x1659fb = _0x5e1bd5.unitId,
                  _0x507a87 = _0x5e1bd5.subUnitId,
                  _0x20d6d8 = _0x5e1bd5.drawingId,
                  _0x4bbe26 = {};
                for (let _0x535144 of Object.keys(
                  _0x69cdc9.currentAdjustValues,
                )) {
                  var _0x2a3eac;
                  let _0x596dfe =
                    (_0x2a3eac = this._activeShapeModel) == null
                      ? undefined
                      : _0x2a3eac.getAdjustValueByName(_0x535144);
                  _0x596dfe !== undefined && (_0x4bbe26[_0x535144] = _0x596dfe);
                }
                Object.keys(_0x4bbe26).length > 0 &&
                  C(
                    this._commandService,
                    _0x1659fb,
                    _0x507a87,
                    _0x20d6d8,
                    { oldShapeData: { adjustValues: _0x50e600 } },
                    { adjustValues: _0x4bbe26 },
                  );
              }
              ((this._activeAdjustInfo = undefined),
                (this._activeShapeModel = undefined),
                (this._isStartAdjusting = false),
                _0x28233e.stopPropagation(),
                _0x44d7bd.enableObjectsEvent());
            })),
            _0x5493d3.stopPropagation());
        }),
      ),
    );
  }
  _registerDrawingMoveHandler() {
    let _0x17345f = this._univerInstanceService["getCurrentTypeOfUnit$"](
      a.UniverInstanceType["UNIVER_SHEET"],
    );
    this.disposeWithMe(
      _0x17345f
        .pipe(
          (0, u.switchMap)((_0x59e953) =>
            _0x59e953
              ? _0x59e953.activeSheet$["pipe"](
                  (0, u.switchMap)((_0x335556) => {
                    if (!_0x335556) return u.EMPTY;
                    let _0x27c262 = _0x59e953.getUnitId(),
                      _0x33c03a =
                        this._renderManagerService["getRenderUnitById"](
                          _0x27c262,
                        ),
                      _0x43686f =
                        _0x33c03a == null ? undefined : _0x33c03a.scene;
                    return _0x43686f ? (0, u.of)(_0x43686f) : u.EMPTY;
                  }),
                )
              : u.EMPTY,
          ),
        )
        .subscribe((_0x201068) => {
          let _0x1925df = _0x201068.getTransformerByCreate();
          (this.disposeWithMe(
            _0x201068.onPointerMove$["subscribeEvent"](() => {
              this._isShouldShowDrawingShapeAdjust;
            }),
          ),
            this.disposeWithMe(
              _0x1925df.changeStart$["subscribe"]((_0x3d7256) => {
                let { objects: _0x3f2135 } = _0x3d7256;
                (this._createShapeAdjustControls(),
                  _0x3f2135 !== null &&
                    _0x3f2135.size === 1 &&
                    _0x3f2135.values().next().value instanceof k &&
                    this.setShouldShowAdjust(true));
              }),
            ),
            this.disposeWithMe(
              _0x1925df.changing$["subscribe"](() => {
                this._isShouldShowDrawingShapeAdjust &&
                  this._clearShapeAdjustControls();
              }),
            ),
            this.disposeWithMe(
              _0x201068.onPointerUp$["subscribeEvent"](() => {
                this._isShouldShowDrawingShapeAdjust &&
                  (this.setShouldShowAdjust(false),
                  this._createShapeAdjustControls());
              }),
            ),
            this.disposeWithMe(
              _0x1925df.changeEnd$["subscribe"](() => {
                this._unitId &&
                  this._subUnitId &&
                  this._activeShapeId &&
                  this._drawingManagerService["getDrawingByParam"]({
                    unitId: this._unitId,
                    subUnitId: this._subUnitId,
                    drawingId: this._activeShapeId,
                  }) &&
                  ((this._activeShapeAdjustPointList =
                    this._getShapeAdjustPointListById(
                      this._unitId,
                      this._subUnitId,
                      this._activeShapeId,
                    )),
                  this._updateAdjustControlPositions());
              }),
            ));
        }),
    );
  }
  _registerDrawingFocusChangeHandler() {
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x15f272) => {
        if (_0x15f272.id !== i.UpdateSheetsShapeDataMutation["id"]) return;
        let {
          unitId: _0x2c0e1d,
          subUnitId: _0x19ab74,
          shapeId: _0x126e51,
        } = _0x15f272.params;
        _0x2c0e1d === this._unitId &&
          _0x19ab74 === this._subUnitId &&
          _0x126e51 === this._activeShapeId &&
          this.refreshAdjustControls();
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x3d641f) => {
          if (_0x3d641f.length === 1) {
            let _0x4d92c2 = _0x3d641f[0];
            if (
              _0x4d92c2.drawingType === a.DrawingTypeEnum["DRAWING_SHAPE"] &&
              this._univerInstanceService["getUnitType"](_0x4d92c2.unitId) ===
                a.UniverInstanceType["UNIVER_SHEET"]
            ) {
              this._activeShapeId = _0x4d92c2.drawingId;
              let { unitId: _0x2934c0, subUnitId: _0x4899b9 } = _0x4d92c2;
              ((this._activeShapeAdjustPointList =
                this._getShapeAdjustPointListById(
                  _0x2934c0,
                  _0x4899b9,
                  this._activeShapeId,
                )),
                (this._unitId = _0x2934c0),
                (this._subUnitId = _0x4899b9),
                this._clearShapeAdjustControls(),
                this._createShapeAdjustControls());
              return;
            }
          }
          ((this._activeShapeId = null),
            (this._activeShapeAdjustPointList = undefined),
            (this._unitId = null),
            (this._subUnitId = null),
            this._clearShapeAdjustControls());
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["update$"].subscribe((_0xd9adb4) => {
          if (_0xd9adb4.length === 1) {
            var _0x39ab31;
            let _0x2fea5a = _0xd9adb4[0];
            ((_0x39ab31 =
              this._drawingManagerService["getDrawingByParam"](_0x2fea5a)) ==
            null
              ? undefined
              : _0x39ab31.drawingType) === a.DrawingTypeEnum["DRAWING_SHAPE"] &&
              this._updateShapeAdjustControls(true);
          }
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x4010de) => {
          for (let _0x58237d of _0x4010de)
            this._activeShapeId === _0x58237d.drawingId &&
              ((this._activeShapeId = null),
              (this._activeShapeAdjustPointList = undefined),
              (this._unitId = null),
              (this._subUnitId = null),
              this._clearShapeAdjustControls());
        }),
      ));
  }
};
P = M(
  [
    j(0, s.IDrawingManagerService),
    j(1, (0, a.Inject)(i.SheetsShapeService)),
    j(2, (0, a.Inject)(c.IRenderManagerService)),
    j(3, (0, a.Inject)(N)),
    j(4, a.IUniverInstanceService),
    j(5, a.ICommandService),
  ],
  P,
);
const F = {
    id: "drawing.operation.set-drawing-active",
    type: a.CommandType["OPERATION"],
    handler: (_0xecd161, _0x3b937b) => {
      let _0x119f69 = _0xecd161.get(s.IDrawingManagerService),
        _0x4b8428 = _0xecd161.get(c.IRenderManagerService),
        _0x1b5787 = _0xecd161.get(P);
      if (_0x3b937b == null) return true;
      if (_0x3b937b.length > 0) {
        var _0x4612a5;
        let _0x3ebd59 =
          (_0x4612a5 = _0x4b8428.getRenderUnitById(_0x3b937b[0].unitId)) == null
            ? undefined
            : _0x4612a5.scene;
        if (_0x3ebd59) {
          let {
              unitId: _0x4e852e,
              subUnitId: _0x587596,
              drawingId: _0x296566,
            } = _0x3b937b[0],
            _0xa4eb78 = (0, s.getDrawingShapeKeyByDrawingSearch)(
              { unitId: _0x4e852e, subUnitId: _0x587596, drawingId: _0x296566 },
              undefined,
            ),
            _0xff4e70 = _0x3ebd59.getObjectIncludeInGroup(_0xa4eb78);
          if (_0xff4e70) {
            var _0x3d95ac;
            (_0x3d95ac = _0x4b8428.getRenderUnitById(_0x3b937b[0].unitId)) ==
              null ||
              (_0x3d95ac = _0x3d95ac.scene["getTransformer"]()) == null ||
              _0x3d95ac.activeAnObject(_0xff4e70);
          }
        }
        (_0x119f69.focusDrawing(_0x3b937b),
          _0x1b5787.setShouldShowAdjust(false));
      }
      return true;
    },
  },
  I = {
    type: a.CommandType["COMMAND"],
    id: "sheet.command.menu-insert-shape",
    handler: async (_0x89e0cd, _0x3b9aa8) => {
      let _0x537041 = (0, o.getSheetCommandTarget)(
        _0x89e0cd.get(a.IUniverInstanceService),
      );
      if (!_0x537041) return false;
      let _0x2708fd = _0x89e0cd
        .get(o.SheetsSelectionsService)
        .getCurrentLastSelection();
      if (!_0x2708fd) return false;
      let _0x319a4d = _0x89e0cd.get(a.ICommandService),
        { unitId: _0x13c1ce, subUnitId: _0x340a5a } = _0x537041,
        { value: _0x381bcf, enhanceParams: _0x1837c8 } = _0x3b9aa8,
        { range: _0x923a56 } = _0x2708fd,
        _0x50ffe7 = {
          unitId: _0x13c1ce,
          subUnitId: _0x340a5a,
          shapeType: _0x381bcf,
          range: _0x923a56,
          shapeId: (0, a.generateRandomId)(),
        };
      if (_0x1837c8) {
        let _0x32723f = (0, n.isConnectorShape)(_0x381bcf),
          _0x39d719 = _0x381bcf === n.ShapeTypeEnum["Rect"];
        (_0x32723f &&
          (_0x1837c8.startArrow || _0x1837c8.endArrow) &&
          (_0x50ffe7.shapeData = {
            ln: {
              startArrow: _0x1837c8.startArrow
                ? {
                    type: n.ShapeArrowTypeEnum["Arrow"],
                    size: n.ShapeArrowSizeEnum["Medium"],
                  }
                : undefined,
              endArrow: _0x1837c8.endArrow
                ? {
                    type: n.ShapeArrowTypeEnum["Arrow"],
                    size: n.ShapeArrowSizeEnum["Large"],
                  }
                : undefined,
            },
          }),
          _0x39d719 &&
            (_0x1837c8.horizontal || _0x1837c8.vertical) &&
            (_0x50ffe7.shapeData = (0, r.createShapeTextBoxShapeData)({
              fill: {
                fillType: n.ShapeFillEnum["SolidFill"],
                color: "#FFFFFF",
              },
              isHorizontal: !!_0x1837c8.horizontal,
              stroke: {
                lineStrokeType: n.ShapeLineTypeEnum["SolidLine"],
                width: 1,
                color: "#bcbcbc",
              },
            })));
      }
      let _0x455af7 = _0x319a4d.syncExecuteCommand(
        i.InsertShapeCommand["id"],
        _0x50ffe7,
      );
      return (
        setTimeout(() => {
          _0x319a4d.executeCommand(F.id, [
            {
              unitId: _0x13c1ce,
              subUnitId: _0x340a5a,
              drawingId: _0x50ffe7.shapeId,
            },
          ]);
        }, 200),
        _0x455af7
      );
    },
  },
  L = "sheet.shape.edit.panel",
  R = "sheet.shape.object-list.panel",
  z = "sheet.shape.floating-toolbar",
  B = "sheets-shape-ui.ribbon.shape-format",
  te = (0, a.createInternalEditorID)("SHAPE_TEXT"),
  ne = "sheet.shape.text.float-menu",
  re = {
    id: "sheet.operation.open-shape-object-list-panel",
    type: a.CommandType["COMMAND"],
    handler: (_0x2fd13f, _0x1482bf) => {
      let _0x3e6e2c = _0x2fd13f.get(t.ISidebarService),
        _0x2c0896 = _0x2fd13f.get(a.LocaleService),
        _0x38898d = _0x2fd13f.get(a.IUniverInstanceService),
        _0x5ab21e = _0x2fd13f.get(a.ICommandService);
      return (0, o.getSheetCommandTarget)(_0x38898d)
        ? (_0x1482bf == null ? undefined : _0x1482bf.value) === "close"
          ? (_0x3e6e2c.close(R), true)
          : (_0x3e6e2c.open({
              id: R,
              header: {
                title: _0x2c0896.t("sheets-shape-ui.objectListPanel.title"),
              },
              children: { label: R },
              onClose: () => {
                _0x5ab21e.syncExecuteCommand(
                  s.SetDrawingSelectedOperation["id"],
                  [],
                );
              },
              width: 360,
            }),
            true)
        : false;
    },
  },
  V = {
    type: a.CommandType["OPERATION"],
    id: "sheet.operation.open-sheet-shape-format-panel",
    handler() {
      return true;
    },
  };
function ie(_0x3b96ae) {
  let _0xc674a0 = _0x3b96ae.get(s.IDrawingManagerService).getFocusDrawings(),
    _0x266063 = _0xc674a0.length === 1 ? _0xc674a0[0] : null;
  if (
    !_0x266063 ||
    _0x266063.drawingType !== a.DrawingTypeEnum["DRAWING_SHAPE"]
  )
    return null;
  let _0x8cbb0c = _0x3b96ae.get(i.SheetsShapeService),
    _0x46f4a8 = _0x8cbb0c.getShapeTypeById(
      _0x266063.unitId,
      _0x266063.subUnitId,
      _0x266063.drawingId,
    ),
    _0x314987 = _0x8cbb0c.getShapeDataById(
      _0x266063.unitId,
      _0x266063.subUnitId,
      _0x266063.drawingId,
    );
  return _0x46f4a8 === undefined || !_0x314987
    ? null
    : { drawing: _0x266063, shapeData: _0x314987, shapeType: _0x46f4a8 };
}
const H = {
    id: "sheet.operation.apply-shape-quick-style",
    type: a.CommandType["OPERATION"],
    handler: (_0xb85df5, _0x4e7a92) => {
      let _0x3587a6 = ie(_0xb85df5),
        _0x1fc715 = (0, r.getShapeQuickStylePreset)(
          (_0x4e7a92 == null ? undefined : _0x4e7a92.presetId) ??
            (_0x4e7a92 == null ? undefined : _0x4e7a92.value) ??
            "",
        );
      if (
        !_0x3587a6 ||
        !_0x1fc715 ||
        _0x1fc715.type !== (0, r.getShapeQuickStyleType)(_0x3587a6.shapeData)
      )
        return false;
      let _0x135473 = (0, r.applyQuickStyleToShapeData)(
        _0x3587a6.shapeData,
        _0x1fc715,
      );
      if (!_0x135473) return false;
      let { drawing: _0x1f4b07 } = _0x3587a6;
      return _0xb85df5
        .get(a.ICommandService)
        .executeCommand(S.id, {
          unitId: _0x1f4b07.unitId,
          subUnitId: _0x1f4b07.subUnitId,
          shapeId: _0x1f4b07.drawingId,
          shapeData: _0x135473,
          oldShapeJSON: { oldShapeData: _0x3587a6.shapeData },
        });
    },
  },
  ae = {
    id: "sheet.operation.update-shape-type",
    type: a.CommandType["OPERATION"],
    handler: (_0x21311f, _0x577ece) => {
      let _0x408a8b = ie(_0x21311f),
        _0x4b94e0 =
          (_0x577ece == null ? undefined : _0x577ece.shapeType) ??
          (_0x577ece == null ? undefined : _0x577ece.value);
      if (
        !_0x408a8b ||
        !_0x4b94e0 ||
        (0, n.isConnectorShape)(_0x408a8b.shapeType) ||
        (0, n.isConnectorShape)(_0x4b94e0)
      )
        return false;
      let _0x598e24 = (0, r.cloneShapeDataForType)(
        _0x408a8b.shapeData,
        _0x4b94e0,
      );
      if (!_0x598e24) return false;
      let { drawing: _0x27a9a3 } = _0x408a8b;
      return _0x21311f
        .get(a.ICommandService)
        .executeCommand(S.id, {
          unitId: _0x27a9a3.unitId,
          subUnitId: _0x27a9a3.subUnitId,
          shapeId: _0x27a9a3.drawingId,
          shapeType: _0x4b94e0,
          shapeData: _0x598e24,
          replaceShapeData: true,
          oldShapeJSON: {
            oldShapeType: _0x408a8b.shapeType,
            oldShapeData: _0x408a8b.shapeData,
          },
        });
    },
  };
let U = class extends a.Disposable {
  constructor(_0x191a5c, _0x4fe7cd) {
    (super(),
      (this._clipService = _0x191a5c),
      (this._drawingManagerService = _0x4fe7cd),
      this._registerImageShapeClipDelegate(),
      this._clipService["setCanUseShapeClip"](true),
      this.disposeWithMe({
        dispose: () => this._clipService["setCanUseShapeClip"](false),
      }));
  }
  _registerImageShapeClipDelegate() {
    let _0x51f8c7 = this._clipService,
      _0x411598 = new Map(),
      _0x1096e6 = _0x51f8c7.registerClipDelegate(
        (_0x3bc685, _0x2aebbf, _0x5baee2, _0x27938d, _0x30ce30) => {
          let _0x59d1ef = _0x2aebbf;
          if (_0x59d1ef === n.ShapeTypeEnum["None"] || _0x2aebbf === "custom")
            return false;
          try {
            let _0x3798bf = _0x411598.get(_0x2aebbf);
            return (
              _0x3798bf ||
                ((_0x3798bf = new n["ShapeModel"](
                  _0x59d1ef,
                  "clip-" + _0x2aebbf,
                )),
                _0x411598.set(_0x2aebbf, _0x3798bf)),
              _0x3798bf.clearAdjustValue(),
              _0x30ce30 &&
                Object.keys(_0x30ce30).length > 0 &&
                _0x3798bf.setShapeData({ adjustValues: _0x30ce30 }, true),
              _0x3798bf.updateContext({ width: _0x5baee2, height: _0x27938d }),
              _0x3798bf.buildClipPath(_0x3bc685, {
                left: 0,
                top: 0,
                width: _0x5baee2,
                height: _0x27938d,
              })
            );
          } catch {
            return false;
          }
        },
      );
    (this.disposeWithMe(_0x1096e6),
      this.disposeWithMe({ dispose: () => _0x411598.clear() }));
  }
  clipByShape(_0x2144ec, _0x360ed0, _0x1ca254, _0x258b9d, _0x1e389d) {
    let _0x5a6c84 = this._drawingManagerService["getDrawingData"](
      _0x2144ec,
      _0x360ed0,
    );
    if (!_0x5a6c84[_0x1ca254]) return;
    let _0x5b79ae = {
      ..._0x5a6c84[_0x1ca254],
      prstGeom: _0x258b9d,
      adjustValues: _0x1e389d,
    };
    this._drawingManagerService["featurePluginUpdateNotification"]([_0x5b79ae]);
  }
};
U = M(
  [
    j(0, (0, a.Inject)(d.DrawingImageClipService)),
    j(1, (0, a.Inject)(s.IDrawingManagerService)),
  ],
  U,
);
const oe = "sheet.shape.picker.component",
  se = "sheet.image-clip.shape-picker.component";
function ce({ onShapeClick: _0x2d86ac, excludeGroups: _0x59caeb }) {
  return (0, f.jsx)(e.ShapePickerPanel, {
    excludeGroups: _0x59caeb,
    onShapeClick: _0x2d86ac,
    scrollContainer: "parent",
  });
}
function le() {
  let _0x46ab0b = (0, t.useDependency)(s.IDrawingManagerService),
    _0x111db6 = (0, t.useDependency)(U);
  return (0, f.jsx)(e.ShapePickerDropdown, {
    buttonLabel: "sheets-shape-ui.imagePanel.crop.shape",
    excludeGroups: [e.ShapeGroupEnum["Line"]],
    onShapeClick: (_0x77320e) => {
      let _0x5d91f1 = _0x46ab0b
        .getFocusDrawings()
        .find(
          (_0x57fa97) =>
            _0x57fa97.drawingType === a.DrawingTypeEnum["DRAWING_IMAGE"],
        );
      if (!_0x5d91f1) return;
      let {
        unitId: _0x458fb3,
        subUnitId: _0x4a3db4,
        drawingId: _0x484678,
      } = _0x5d91f1;
      _0x111db6.clipByShape(_0x458fb3, _0x4a3db4, _0x484678, _0x77320e.type);
    },
  });
}
function ue() {
  let _0x314d8c = (0, t.useDependency)(t.ComponentManager),
    _0x86b3d6 = (0, t.useDependency)(s.IDrawingManagerService),
    _0x50f1e8 = (0, t.useDependency)(a.IUniverInstanceService),
    _0x43796c = _0x86b3d6.getFocusDrawings()[0],
    _0x2b8dff = _0x43796c ? _0x50f1e8.getUnitType(_0x43796c.unitId) : undefined,
    _0x3bf543 =
      _0x2b8dff === a.UniverInstanceType["UNIVER_DOC"]
        ? "doc.image-clip.shape-picker.component"
        : _0x2b8dff === a.UniverInstanceType["UNIVER_SHEET"]
          ? se
          : undefined,
    _0x4cafaf = _0x3bf543 ? _0x314d8c.get(_0x3bf543) : undefined;
  return _0x4cafaf ? (0, f.jsx)(_0x4cafaf, {}) : null;
}
function de() {
  let _0xe04a48 = (0, t.useDependency)(a.ICommandService);
  return (0, f.jsx)(ce, {
    onShapeClick: (_0x4010bb) => {
      _0xe04a48.executeCommand(I.id, {
        value: _0x4010bb.type,
        enhanceParams: {
          endArrow: _0x4010bb.endArrow,
          startArrow: _0x4010bb.startArrow,
          horizontal: _0x4010bb.horizontal,
          vertical: _0x4010bb.vertical,
        },
      });
    },
  });
}
function fe(_0x453034) {
  let _0x5d1464 = _0x453034.get(a.IUniverInstanceService);
  return {
    id: I.id,
    type: t.MenuItemType["SELECTOR"],
    selections: [
      {
        label: {
          name: oe,
          hoverable: false,
          selectable: false,
          props: { id: I.id },
        },
      },
    ],
    icon: "ShapeIcon",
    tooltip: "sheets-shape-ui.insertShape",
    activated$: (0, l.deriveStateFromActiveSheet$)(
      _0x5d1464,
      false,
      () =>
        new u["Observable"]((_0x1eac08) => {
          _0x1eac08.next(false);
        }),
    ),
    hidden$: (0, t.getMenuHiddenObservable)(
      _0x453034,
      a.UniverInstanceType["UNIVER_SHEET"],
    ),
    disabled$: (0, l.getCurrentRangeDisable$)(_0x453034),
  };
}
function pe(_0x55fd1e) {
  let _0x30dee9 = _0x55fd1e.get(a.IUniverInstanceService);
  return {
    id: re.id,
    type: t.MenuItemType["BUTTON"],
    icon: "ObjectLayersIcon",
    title: "sheets-shape-ui.objectListPanel.open",
    tooltip: "sheets-shape-ui.objectListPanel.open",
    activated$: (0, l.deriveStateFromActiveSheet$)(
      _0x30dee9,
      false,
      () =>
        new u["Observable"]((_0x4bcb9e) => {
          _0x4bcb9e.next(false);
        }),
    ),
    hidden$: (0, t.getMenuHiddenObservable)(
      _0x55fd1e,
      a.UniverInstanceType["UNIVER_SHEET"],
    ),
    disabled$: (0, l.getCurrentRangeDisable$)(_0x55fd1e),
  };
}
const me = "sheet.menu.shape.flip-horizontal",
  he = "sheet.menu.shape.flip-vertical";
function ge(_0xbe32e2) {
  let _0x2552f3 = _0xbe32e2.get(s.IDrawingManagerService).getFocusDrawings();
  return _0x2552f3.length === 1 &&
    _0x2552f3[0].drawingType === a.DrawingTypeEnum["DRAWING_SHAPE"]
    ? _0x2552f3[0]
    : null;
}
function _e(_0x13021a) {
  let _0x41a09d = _0x13021a.get(s.IDrawingManagerService);
  return _0x41a09d.focus$["pipe"](
    (0, u.startWith)(_0x41a09d.getFocusDrawings()),
    (0, u.map)(
      (_0x3941f7) =>
        _0x3941f7.length !== 1 ||
        _0x3941f7[0].drawingType !== a.DrawingTypeEnum["DRAWING_SHAPE"],
    ),
  );
}
function ve(_0x8b9390) {
  return {
    id: me,
    commandId: i.ToggleSheetsShapeFlipCommand["id"],
    type: t.MenuItemType["BUTTON"],
    title: "sheets-shape-ui.flipHorizontal",
    tooltip: "sheets-shape-ui.flipHorizontal",
    icon: "FlipHorizontalIcon",
    hidden$: _e(_0x8b9390),
    params: () => {
      let _0x4c8066 = ge(_0x8b9390);
      return _0x4c8066
        ? {
            unitId: _0x4c8066.unitId,
            subUnitId: _0x4c8066.subUnitId,
            shapeId: _0x4c8066.drawingId,
            flipH: true,
          }
        : undefined;
    },
  };
}
function ye(_0x565b35) {
  return {
    id: he,
    commandId: i.ToggleSheetsShapeFlipCommand["id"],
    type: t.MenuItemType["BUTTON"],
    title: "sheets-shape-ui.flipVertical",
    tooltip: "sheets-shape-ui.flipVertical",
    icon: "FlipVerticalIcon",
    hidden$: _e(_0x565b35),
    params: () => {
      let _0x14783f = ge(_0x565b35);
      return _0x14783f
        ? {
            unitId: _0x14783f.unitId,
            subUnitId: _0x14783f.subUnitId,
            shapeId: _0x14783f.drawingId,
            flipV: true,
          }
        : undefined;
    },
  };
}
const be = "sheets-shape-ui.shape-format.quick-style-gallery",
  xe = "sheets-shape-ui.shape-format.style-ribbon-control",
  Se = "sheets-shape-ui.shape-format.text-ribbon-control",
  Ce = "sheets-shape-ui.shape-format.formula-ribbon-control";
function W() {
  let _0x3d2aaa = (0, t.useDependency)(a.ICommandService),
    _0x528d8e = (0, t.useDependency)(s.IDrawingManagerService),
    _0x1e318d = (0, t.useDependency)(i.SheetsShapeService),
    _0x2398ad = () => {
      var _0x293f32;
      let _0x51817b = _0x528d8e.getFocusDrawings();
      if (
        _0x51817b.length !== 1 ||
        ((_0x293f32 = _0x51817b[0]) == null
          ? undefined
          : _0x293f32.drawingType) !== a.DrawingTypeEnum["DRAWING_SHAPE"]
      )
        return null;
      let {
          unitId: _0x4a2abf,
          subUnitId: _0x3b7083,
          drawingId: _0x3ffcc6,
        } = _0x51817b[0],
        _0x5bcd36 = _0x1e318d.getShapeTypeById(_0x4a2abf, _0x3b7083, _0x3ffcc6),
        _0x463c61 = _0x1e318d.getShapeDataById(_0x4a2abf, _0x3b7083, _0x3ffcc6);
      return _0x5bcd36 === undefined || !_0x463c61
        ? null
        : {
            unitId: _0x4a2abf,
            subUnitId: _0x3b7083,
            drawingId: _0x3ffcc6,
            shapeType: _0x5bcd36,
            shapeData: _0x463c61,
          };
    },
    _0x2d4468 = (0, t.useObservable)(
      () =>
        new u["Observable"]((_0x40c21b) => {
          let _0x193b1b = () => _0x40c21b.next(_0x2398ad()),
            _0x4d6d09 = _0x528d8e.focus$["subscribe"](_0x193b1b),
            _0x28d31c = _0x3d2aaa.onCommandExecuted((_0x17e9a5) => {
              _0x17e9a5.id === i.UpdateSheetsShapeDataMutation["id"] &&
                _0x193b1b();
            });
          return (
            _0x193b1b(),
            () => {
              (_0x4d6d09.unsubscribe(), _0x28d31c.dispose());
            }
          );
        }),
      _0x2398ad(),
      false,
      [_0x3d2aaa, _0x528d8e, _0x1e318d],
    );
  return {
    selection: _0x2d4468,
    updateShapeData: (_0x481f3f) => {
      _0x2d4468 &&
        C(
          _0x3d2aaa,
          _0x2d4468.unitId,
          _0x2d4468.subUnitId,
          _0x2d4468.drawingId,
          { oldShapeData: _0x2d4468.shapeData },
          _0x481f3f,
        );
    },
  };
}
function we() {
  let { selection: _0x36f1a3, updateShapeData: _0x43c4d1 } = W();
  return _0x36f1a3
    ? (0, f.jsx)(e.ShapeStyleRibbonControl, {
        shapeData: _0x36f1a3.shapeData,
        shapeType: _0x36f1a3.shapeType,
        onUpdateShapeData: _0x43c4d1,
      })
    : null;
}
function Te() {
  let _0xe7c02b = (0, t.useDependency)(a.ICommandService),
    _0x100daf = (0, t.useDependency)(a.LocaleService),
    { selection: _0x5e534a } = W();
  return _0x5e534a
    ? (0, f.jsx)(e.ShapeQuickStyleGallery, {
        type: (0, r.getShapeQuickStyleType)(_0x5e534a.shapeData),
        ariaLabel: _0x100daf.t("sheets-shape-ui.quickStyles"),
        activePresetId: (0, r.resolveActiveShapeQuickStylePresetId)(
          _0x5e534a.shapeData,
        ),
        onSelect: (_0x6a62f6) =>
          _0xe7c02b.executeCommand(H.id, { presetId: _0x6a62f6 }),
      })
    : null;
}
function Ee() {
  let { selection: _0x3b6660, updateShapeData: _0x3d67e6 } = W();
  return _0x3b6660
    ? (0, f.jsx)(e.ShapeTextRibbonControl, {
        fontFamilyPopupDataComponent: "sheets-shape-format-font-family-menu",
        shapeData: _0x3b6660.shapeData,
        onUpdateShapeData: _0x3d67e6,
      })
    : null;
}
function De() {
  var _0xa67d83;
  let { selection: _0x31e110, updateShapeData: _0x81837 } = W(),
    _0x3bf2a1 = (0, e.useFormulaShapeToolbar)({
      hostType: a.UniverInstanceType["UNIVER_SHEET"],
      unitId: (_0x31e110 == null ? undefined : _0x31e110.unitId) ?? "",
      subUnitId: (_0x31e110 == null ? undefined : _0x31e110.subUnitId) ?? "",
      shapeId: (_0x31e110 == null ? undefined : _0x31e110.drawingId) ?? "",
      shapeData: _0x31e110 == null ? undefined : _0x31e110.shapeData,
      registerBinding: false,
      showLabels: true,
      dropdownSide: "bottom",
      onUpdateBinding: (_0x76bd74) => _0x81837({ formulaBinding: _0x76bd74 }),
    }),
    _0x4d1fd2 =
      ((_0xa67d83 = _0x3bf2a1.extensionGroups) == null
        ? undefined
        : _0xa67d83
            .flatMap((_0x1dd8c6) => _0x1dd8c6.actions)
            .filter((_0xcf9bba) => _0xcf9bba.visible !== false)) ?? [];
  return _0x31e110 != null && _0x31e110.shapeData["formulaBinding"]
    ? (0, f.jsx)(e.ShapeFormulaRibbonControl, {
        actions: _0x4d1fd2,
        panel: _0x3bf2a1.panel,
      })
    : null;
}
const Oe = "sheets-shape-ui.ribbon.shape-format.style-control",
  ke = "sheets-shape-ui.ribbon.shape-format.text-control",
  Ae = "sheets-shape-ui.ribbon.shape-format.formula-control",
  je = "sheets-shape-ui.ribbon.shape-format.arrange-forward",
  Me = "sheets-shape-ui.ribbon.shape-format.arrange-backward",
  Ne = "sheets-shape-ui.ribbon.shape-format.arrange-front",
  Pe = "sheets-shape-ui.ribbon.shape-format.arrange-back";
function Fe(_0x881ac5) {
  let _0x567d37 = _0x881ac5.get(a.ICommandService),
    _0x3c7314 = _0x881ac5.get(s.IDrawingManagerService),
    _0x1a50d8 = _0x881ac5.get(i.SheetsShapeService);
  return new u["Observable"]((_0x5183a5) => {
    let _0x319932 = () => {
        let _0x294961 = G(_0x881ac5),
          _0x165d16 = _0x294961
            ? _0x1a50d8.getShapeDataById(
                _0x294961.unitId,
                _0x294961.subUnitId,
                _0x294961.drawingId,
              )
            : null;
        _0x5183a5.next(
          _0x165d16
            ? ((0, r.resolveActiveShapeQuickStylePresetId)(_0x165d16) ?? "")
            : "",
        );
      },
      _0x13dcb0 = _0x3c7314.focus$["subscribe"](_0x319932),
      _0x560096 = _0x567d37.onCommandExecuted((_0x2efa02) => {
        _0x2efa02.id === i.UpdateSheetsShapeDataMutation["id"] && _0x319932();
      });
    return (
      _0x319932(),
      () => {
        (_0x13dcb0.unsubscribe(), _0x560096.dispose());
      }
    );
  });
}
function G(_0x6792d0) {
  var _0x4b9ff1;
  let _0x1b50d2 = _0x6792d0.get(s.IDrawingManagerService).getFocusDrawings();
  return _0x1b50d2.length === 1 &&
    ((_0x4b9ff1 = _0x1b50d2[0]) == null ? undefined : _0x4b9ff1.drawingType) ===
      a.DrawingTypeEnum["DRAWING_SHAPE"]
    ? _0x1b50d2[0]
    : null;
}
function K(_0xe29cb6, _0x3e17d8 = false) {
  let _0x4c4f1d = _0xe29cb6.get(a.ICommandService),
    _0x122a90 = _0xe29cb6.get(s.IDrawingManagerService),
    _0x6f1fd3 = _0xe29cb6.get(i.SheetsShapeService);
  return new u["Observable"]((_0x5c1b0e) => {
    let _0x4a4129 = () => {
        let _0x2af651 = G(_0xe29cb6);
        if (!_0x2af651) {
          _0x5c1b0e.next(true);
          return;
        }
        let _0x98bd0b = _0x6f1fd3.getShapeDataById(
          _0x2af651.unitId,
          _0x2af651.subUnitId,
          _0x2af651.drawingId,
        );
        _0x5c1b0e.next(
          !_0x98bd0b || (_0x3e17d8 && _0x98bd0b.formulaBinding == null),
        );
      },
      _0x486724 = _0x122a90.focus$["subscribe"](_0x4a4129),
      _0x32e28d = _0x4c4f1d.onCommandExecuted((_0x1feed7) => {
        _0x1feed7.id === i.UpdateSheetsShapeDataMutation["id"] && _0x4a4129();
      });
    return (
      _0x4a4129(),
      () => {
        (_0x486724.unsubscribe(), _0x32e28d.dispose());
      }
    );
  });
}
function Ie(_0x3dfa4e) {
  let _0x37ac4e = _0x3dfa4e.get(s.IDrawingManagerService),
    _0x20440a = _0x3dfa4e.get(i.SheetsShapeService);
  return _0x37ac4e.focus$["pipe"](
    (0, u.startWith)(_0x37ac4e.getFocusDrawings()),
    (0, u.map)(() => {
      let _0x68337f = G(_0x3dfa4e),
        _0x363d0b = _0x68337f
          ? _0x20440a.getShapeTypeById(
              _0x68337f.unitId,
              _0x68337f.subUnitId,
              _0x68337f.drawingId,
            )
          : undefined;
      return _0x363d0b === undefined || (0, n.isConnectorShape)(_0x363d0b);
    }),
  );
}
function Le(_0x208774) {
  return {
    id: H.id,
    type: t.MenuItemType["SELECTOR"],
    icon: "PaintIcon",
    title: "shape-editor-ui.toolbar.quickStyles",
    tooltip: "shape-editor-ui.toolbar.quickStyles",
    selections: [{ label: { name: be, hoverable: false, selectable: false } }],
    value$: Fe(_0x208774),
    hidden$: K(_0x208774),
  };
}
function Re(_0xa43098) {
  return {
    id: ae.id,
    type: t.MenuItemType["SELECTOR"],
    icon: "ShapeIcon",
    title: "shape-editor-ui.toolbar.changeShape",
    tooltip: "shape-editor-ui.toolbar.changeShape",
    slot: true,
    selections: [
      {
        label: {
          name: e.SHAPE_CHANGE_PICKER_COMPONENT,
          hoverable: false,
          selectable: false,
        },
      },
    ],
    hidden$: Ie(_0xa43098),
  };
}
function ze(_0x282db7, _0x5274de, _0x3ef238 = false) {
  return (_0x154d5d) => ({
    id: _0x282db7,
    type: t.MenuItemType["BUTTON"],
    label: { name: _0x5274de, hoverable: false, selectable: false },
    hidden$: K(_0x154d5d, _0x3ef238),
  });
}
const Be = ze(Oe, xe),
  Ve = ze(ke, Se),
  He = ze(Ae, Ce, true);
function q(_0x8ccaee, _0x3c5a90, _0x42c22f, _0x74d3bb) {
  return (_0x3c9da3) => ({
    id: _0x8ccaee,
    commandId: p.SetDrawingArrangeCommand["id"],
    type: t.MenuItemType["BUTTON"],
    icon: _0x42c22f,
    title: _0x74d3bb,
    tooltip: _0x74d3bb,
    hidden$: K(_0x3c9da3),
    params: () => {
      let _0x742480 = G(_0x3c9da3);
      return _0x742480
        ? {
            unitId: _0x742480.unitId,
            subUnitId: _0x742480.subUnitId,
            drawingIds: [_0x742480.drawingId],
            arrangeType: _0x3c5a90,
          }
        : undefined;
    },
  });
}
const Ue = q(
    je,
    a.ArrangeTypeEnum["forward"],
    "MoveUpIcon",
    "shape-editor-ui.arrange.forward",
  ),
  We = q(
    Me,
    a.ArrangeTypeEnum["backward"],
    "MoveDownIcon",
    "shape-editor-ui.arrange.backward",
  ),
  Ge = q(
    Ne,
    a.ArrangeTypeEnum["front"],
    "TopmostIcon",
    "shape-editor-ui.arrange.front",
  ),
  Ke = q(
    Pe,
    a.ArrangeTypeEnum["back"],
    "BottomIcon",
    "shape-editor-ui.arrange.back",
  );
function qe(_0x5a9c93) {
  return {
    id: V.id,
    type: t.MenuItemType["BUTTON"],
    icon: "ShapeFormatSettingIcon",
    title: "sheets-shape-ui.formatShape",
    tooltip: "sheets-shape-ui.formatShape",
    hidden$: K(_0x5a9c93),
    params: () => {
      let _0x342ab0 = G(_0x5a9c93);
      return _0x342ab0
        ? {
            unitId: _0x342ab0.unitId,
            subUnitId: _0x342ab0.subUnitId,
            drawingId: _0x342ab0.drawingId,
          }
        : undefined;
    },
  };
}
const Je = {
    [t.MenuManagerPosition["RIBBON"]]: {
      [B]: {
        order: 100,
        title: "sheets-shape-ui.formatShape",
        contextual: true,
        "sheets-shape-ui.ribbon.shape-format.quick-styles": {
          order: 0,
          [H.id]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: Le,
          },
          [ae.id]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: Re,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.style": {
          order: 1,
          [Oe]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 104 },
            menuItemFactory: Be,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.text": {
          order: 2,
          [ke]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 344 },
            menuItemFactory: Ve,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.arrange": {
          order: 3,
          [me]: {
            order: 0,
            gridLayout: { row: 1, column: 1 },
            menuItemFactory: ve,
          },
          [he]: {
            order: 1,
            gridLayout: { row: 2, column: 1 },
            menuItemFactory: ye,
          },
          [je]: {
            order: 2,
            gridLayout: { row: 1, column: 2 },
            menuItemFactory: Ue,
          },
          [Me]: {
            order: 3,
            gridLayout: { row: 2, column: 2 },
            menuItemFactory: We,
          },
          [Ne]: {
            order: 4,
            gridLayout: { row: 1, column: 3 },
            menuItemFactory: Ge,
          },
          [Pe]: {
            order: 5,
            gridLayout: { row: 2, column: 3 },
            menuItemFactory: Ke,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.formula": {
          order: 4,
          [Ae]: {
            order: 0,
            gridLayout: { row: 1, column: 1, rowSpan: 2, width: 120 },
            menuItemFactory: He,
          },
        },
        "sheets-shape-ui.ribbon.shape-format.advanced": {
          order: 5,
          [V.id]: {
            order: 0,
            gridLayout: { row: 1, column: 1, showLabel: true },
            menuItemFactory: qe,
          },
          [e.ToggleShapeFloatingToolbarOperation["id"]]: {
            order: 1,
            gridLayout: { row: 2, column: 1, showLabel: true },
            menuItemFactory: e.ShapeFloatingToolbarToggleFactory,
          },
        },
      },
    },
  },
  Ye = {
    [t.RibbonInsertGroup["MEDIA"]]: {
      [I.id]: { order: 4, menuItemFactory: fe },
    },
    [t.RibbonInsertGroup["OTHERS"]]: {
      [re.id]: {
        order: 0,
        gridLayout: { row: 1, column: 1, rowSpan: 2, showLabel: true },
        menuItemFactory: pe,
      },
    },
    [t.ContextMenuPosition["DRAWING"]]: {
      [t.ContextMenuGroup["OTHERS"]]: {
        [me]: { order: 4, menuItemFactory: ve },
        [he]: { order: 5, menuItemFactory: ye },
      },
    },
  };
var Xe = "@univerjs-pro/sheets-shape-ui",
  Ze = "1.0.0-insiders.20260907-70fc579";
const Qe = {
    type: a.CommandType["OPERATION"],
    id: "sheet.operation.close-sheet-shape-format-panel",
    handler() {
      return true;
    },
  },
  $e = {};
function et(_0x1bc7f6) {
  return _0x1bc7f6.trim() || undefined;
}
function tt(_0x24be76, _0x38dbd0, _0x44a11) {
  var _0x4357a2;
  return (
    ((_0x4357a2 = _0x24be76.name) == null ? undefined : _0x4357a2.trim()) ||
    (0, d.getObjectListPanelTypeName)(
      _0x44a11,
      (0, e.getDrawingTypeNameKey)(_0x24be76.drawingType),
    ) +
      "\x20" +
      (_0x38dbd0 + 1)
  );
}
function nt() {
  var _0x12f3d8;
  let _0xf81f98 = (0, t.useDependency)(a.LocaleService),
    _0x510afc = (0, t.useDependency)(a.ICommandService),
    _0x3cdbe4 = (0, t.useDependency)(a.IUniverInstanceService),
    _0x2eb1dd = (0, t.useDependency)(p.ISheetDrawingService),
    _0x28ad39 = (0, t.useDependency)(s.IDrawingManagerService),
    _0x439ff5 = (0, t.useDependency)(c.IRenderManagerService),
    [, _0x211461] = (0, y.useReducer)((_0x47030f) => _0x47030f + 1, 0),
    _0x2b939e = _0x3cdbe4.getCurrentUnitOfType(
      a.UniverInstanceType["UNIVER_SHEET"],
    ),
    _0x471c3e = (_0x2b939e == null ? undefined : _0x2b939e.getUnitId()) ?? "",
    _0x4228d3 =
      (_0x2b939e == null || (_0x12f3d8 = _0x2b939e.getActiveSheet()) == null
        ? undefined
        : _0x12f3d8.getSheetId()) ?? "",
    _0x21f56d = (0, t.useObservable)(
      () => _0x28ad39.focus$,
      _0x28ad39.getFocusDrawings(),
      false,
      [_0x28ad39],
    );
  (0, y.useEffect)(() => {
    let _0x425f9d = _0x510afc.onCommandExecuted(() => _0x211461());
    return () => _0x425f9d.dispose();
  }, [_0x510afc]);
  let _0x4615d4 = (0, y.useMemo)(
      () => (0, d.getObjectListPanelLabels)(_0xf81f98),
      [_0xf81f98],
    ),
    _0x3f2d59 =
      _0x471c3e && _0x4228d3
        ? _0x2eb1dd.getDrawingData(_0x471c3e, _0x4228d3)
        : {},
    _0x5d4b65 = (
      _0x471c3e && _0x4228d3
        ? _0x2eb1dd.getDrawingOrder(_0x471c3e, _0x4228d3)
        : []
    )
      .map((_0x79e44a) => _0x3f2d59[_0x79e44a])
      .filter((_0xc02508) => !!_0xc02508)
      .reverse(),
    _0x47f27c = _0x5d4b65.reduce(
      (_0x1216af, _0x103315) => (
        (_0x1216af[
          (0, d.getObjectListPanelSectionIdForDrawingType)(
            _0x103315.drawingType,
          )
        ] += 1),
        _0x1216af
      ),
      { canvas: 0, floating: 0 },
    ),
    _0x3e2909 = { canvas: 0, floating: 0 },
    _0x591d2c = _0x5d4b65.map((_0x161ea5, _0x4e4790) => {
      let _0xd56cca = (0, d.getObjectListPanelSectionIdForDrawingType)(
          _0x161ea5.drawingType,
        ),
        _0x3ce6d5 = _0xd56cca === d.OBJECT_LIST_FLOATING_SECTION_ID,
        _0x5c4a34 = _0x3e2909[_0xd56cca]++;
      return {
        id: _0x161ea5.drawingId,
        name: tt(_0x161ea5, _0x4e4790, _0xf81f98),
        description: _0x161ea5.description,
        visible: _0x161ea5.hidden !== true,
        selectable: _0x161ea5.selectable !== false,
        sectionId: _0xd56cca,
        sectionTitle: _0x3ce6d5
          ? _0x4615d4.sectionFloating
          : _0x4615d4.sectionCanvas,
        capabilities: _0x3ce6d5
          ? { arrange: false, reorder: false }
          : undefined,
        canMoveForward: !_0x3ce6d5 && _0x5c4a34 > 0,
        canMoveBackward: !_0x3ce6d5 && _0x5c4a34 < _0x47f27c.canvas - 1,
        canReorder: !_0x3ce6d5,
      };
    }),
    _0xc2bb9b = (0, y.useMemo)(
      () =>
        (_0x21f56d ?? [])
          .filter(
            (_0x4c8ab3) =>
              _0x4c8ab3.unitId === _0x471c3e &&
              _0x4c8ab3.subUnitId === _0x4228d3,
          )
          .map((_0x5f0671) => _0x5f0671.drawingId),
      [_0x21f56d, _0x4228d3, _0x471c3e],
    ),
    _0x282ecd = _0xc2bb9b[_0xc2bb9b.length - 1] ?? null,
    _0xf17b90 = (_0x1ea3a1) =>
      _0x2eb1dd.getDrawingByParam({
        unitId: _0x471c3e,
        subUnitId: _0x4228d3,
        drawingId: _0x1ea3a1,
      }) ?? null,
    _0x21eba9 = async (_0x1ecec7) => {
      !_0x471c3e ||
        !_0x1ecec7.length ||
        (await _0x510afc.executeCommand(p.SetSheetDrawingCommand["id"], {
          unitId: _0x471c3e,
          drawings: _0x1ecec7,
        }));
    },
    _0xe907bf = async (_0x640991, _0x5bf345) => {
      _0xf17b90(_0x640991) &&
        (await _0x21eba9([
          {
            unitId: _0x471c3e,
            subUnitId: _0x4228d3,
            drawingId: _0x640991,
            ..._0x5bf345,
          },
        ]));
    },
    _0x447994 = (_0x32860c, _0x45431c) => {
      if (!_0x471c3e || !_0x4228d3) return;
      let _0x2e2716 = _0x45431c
        ? _0xc2bb9b.includes(_0x32860c)
          ? _0xc2bb9b.filter((_0x2fda17) => _0x2fda17 !== _0x32860c)
          : [..._0xc2bb9b, _0x32860c]
        : [_0x32860c];
      _0x510afc.syncExecuteCommand(
        s.SetDrawingSelectedOperation["id"],
        _0x2e2716.map((_0x2dc275) => ({
          unitId: _0x471c3e,
          subUnitId: _0x4228d3,
          drawingId: _0x2dc275,
        })),
      );
      let _0x493a2a = _0x2e2716[_0x2e2716.length - 1];
      _0x493a2a
        ? (0, e.activateDrawingObject)(_0x439ff5, {
            unitId: _0x471c3e,
            subUnitId: _0x4228d3,
            drawingId: _0x493a2a,
          })
        : (0, e.clearActiveDrawingObjects)(_0x439ff5, _0x471c3e);
    },
    _0xbef34f = async (_0x106a3e, _0x16e17a) => {
      await _0x21eba9(
        _0x106a3e
          .map((_0x3568d4) => _0xf17b90(_0x3568d4))
          .filter((_0x1060da) => !!_0x1060da)
          .filter((_0x676863) => (_0x676863.hidden !== true) !== _0x16e17a)
          .map((_0x41dcd1) => ({
            unitId: _0x471c3e,
            subUnitId: _0x4228d3,
            drawingId: _0x41dcd1.drawingId,
            hidden: !_0x16e17a,
          })),
      );
    },
    _0xcfdf4e = async (_0x3ff4fe) => {
      let _0xfdf730 = _0xf17b90(_0x3ff4fe);
      _0xfdf730 &&
        (await _0xe907bf(_0x3ff4fe, {
          selectable: _0xfdf730.selectable === false && undefined,
        }));
    },
    _0x45a354 = async (_0x56a85e, _0x272b63) => {
      var _0x1665dc;
      let _0x4d5ff5 = et(_0x272b63);
      (((_0x1665dc = _0xf17b90(_0x56a85e)) == null
        ? undefined
        : _0x1665dc.name) ?? undefined) !== _0x4d5ff5 &&
        (await _0xe907bf(_0x56a85e, { name: _0x4d5ff5 }));
    },
    _0x4d7ff7 = async (_0x33a759, _0x2e643c) => {
      var _0x3943eb;
      let _0x111c86 = et(_0x2e643c);
      (((_0x3943eb = _0xf17b90(_0x33a759)) == null
        ? undefined
        : _0x3943eb.description) ?? undefined) !== _0x111c86 &&
        (await _0xe907bf(_0x33a759, { description: _0x111c86 }));
    },
    _0x1d4e36 = async (_0x471c51, _0x5bd888) => {
      !_0x471c3e ||
        !_0x4228d3 ||
        (await _0x510afc.executeCommand(p.SetDrawingArrangeCommand["id"], {
          unitId: _0x471c3e,
          subUnitId: _0x4228d3,
          drawingIds: [_0x471c51],
          arrangeType: _0x5bd888,
        }));
    };
  return !_0x471c3e || !_0x4228d3
    ? (0, f.jsx)("div", {
        className:
          "univer-flex univer-size-full univer-items-center univer-justify-center univer-text-sm univer-text-gray-500",
        children: _0x4615d4.title,
      })
    : (0, f.jsx)(d.ObjectListPanelBase, {
        items: _0x591d2c,
        selectedIds: _0xc2bb9b,
        focusedId: _0x282ecd,
        labels: _0x4615d4,
        onSelect: _0x447994,
        onSetVisible: _0xbef34f,
        onCommitName: _0x45a354,
        onCommitDescription: _0x4d7ff7,
        onMoveForward: async (_0x10cfd1) =>
          _0x1d4e36(_0x10cfd1, a.ArrangeTypeEnum["forward"]),
        onMoveBackward: async (_0x16821f) =>
          _0x1d4e36(_0x16821f, a.ArrangeTypeEnum["backward"]),
        onToggleSelectable: _0xcfdf4e,
      });
}
let J = class {
  constructor(_0x4db3f1) {
    this._renderManagerService = _0x4db3f1;
  }
  updateShapeFillImage(_0x3d464b, _0x2d2f56) {
    let _0x323962 = this._renderManagerService["getRenderUnitById"](
        _0x3d464b.unitId,
      ),
      _0x48b06e = _0x323962 == null ? undefined : _0x323962.scene;
    if (!_0x48b06e) return;
    let _0x1637d2 = (0, s.getDrawingShapeKeyByDrawingSearch)(_0x3d464b),
      _0x3bd1e1 = _0x48b06e.getObjectIncludeInGroup(_0x1637d2);
    _0x3bd1e1 == null || _0x3bd1e1.setFillImage(_0x2d2f56);
  }
};
J = M([j(0, c.IRenderManagerService)], J);
function rt() {
  let _0x1d16fe = (0, t.useDependency)(s.IDrawingManagerService),
    _0xd17bad = (0, t.useObservable)(
      () => _0x1d16fe.focus$,
      _0x1d16fe.getFocusDrawings(),
      false,
      [_0x1d16fe],
    );
  return _0xd17bad.length === 0
    ? null
    : (0, f.jsx)("div", {
        children: (0, f.jsxs)("div", {
          className: "univer-box-border univer-px-4 univer-text-sm",
          children: [
            (0, f.jsx)(d.DrawingCommonPanel, {
              drawings: _0xd17bad,
              hasCropper: false,
            }),
            (0, f.jsx)(_.SheetDrawingAnchor, { drawings: _0xd17bad }),
          ],
        }),
      });
}
function it(_0x371688) {
  let {
      unitId: _0x2b23c5,
      subUnitId: _0x3351f6,
      shapeId: _0x1e62e2,
    } = _0x371688,
    _0x1fc4d5 = (0, t.useDependency)(a.ICommandService),
    _0xd4906b = (0, t.useDependency)(J);
  return (0, f.jsx)(e.ShapeEditPanel, {
    ..._0x371688,
    positionEditor: (0, f.jsx)(rt, {}),
    onUpdateShapeData: (_0x31996a, _0x208e18) => {
      C(_0x1fc4d5, _0x2b23c5, _0x3351f6, _0x1e62e2, _0x31996a, _0x208e18);
    },
    onUpdateLineShapeData: (_0x504097, _0x15c7e2) => {
      w(_0x1fc4d5, _0x2b23c5, _0x3351f6, _0x1e62e2, _0x504097, _0x15c7e2);
    },
    onUpdateShapeFillImage: (_0x5deda9) => {
      _0xd4906b.updateShapeFillImage(
        { unitId: _0x2b23c5, subUnitId: _0x3351f6, drawingId: _0x1e62e2 },
        _0x5deda9,
      );
    },
  });
}
function at(_0x3d6187) {
  let _0x3124e0 = (0, t.useDependency)(e.ShapeFloatingToolbarService),
    { mobile: _0x5686fa } = (0, y.useContext)(b.ConfigContext),
    _0x596738 = (0, t.useObservable)(
      () => _0x3124e0.visible$,
      _0x3124e0.getVisible(),
      false,
      [_0x3124e0],
    ),
    _0x1eb6df = _0x3d6187.popup["extraProps"];
  return !_0x1eb6df || !_0x596738 || _0x5686fa
    ? null
    : (0, f.jsx)(ot, {
        ..._0x1eb6df,
        canvasElement: _0x3d6187.popup["canvasElement"],
      });
}
function ot(_0x230dc8) {
  let _0x4efaa8 = (0, t.useDependency)(a.ICommandService),
    _0x11fba4 = (0, t.useDependency)(i.SheetsShapeService),
    {
      unitId: _0x10d59d,
      subUnitId: _0x41bc93,
      drawingId: _0x3f7096,
      drawingType: _0x1bcfa9,
      shapeType: _0x12d5ff,
    } = _0x230dc8,
    [_0x3ad577, _0x41f92] = (0, y.useState)(_0x230dc8.shapeData),
    _0x5c2069 = (0, y.useMemo)(
      () => (0, e.getTextStyle)(_0x3ad577),
      [_0x3ad577],
    ),
    _0x5a0459 = (0, y.useMemo)(
      () => (0, e.getTextModel)(_0x3ad577),
      [_0x3ad577],
    );
  (0, y.useEffect)(() => {
    let _0x1d26a4 = _0x4efaa8.onCommandExecuted((_0x3f0324) => {
      if (_0x3f0324.id !== i.UpdateSheetsShapeDataMutation["id"]) return;
      let _0x3031ab = _0x11fba4.getShapeDataById(
        _0x10d59d,
        _0x41bc93,
        _0x3f7096,
      );
      _0x3031ab && _0x41f92(_0x3031ab);
    });
    return () => _0x1d26a4.dispose();
  }, [_0x4efaa8, _0x3f7096, _0x11fba4, _0x41bc93, _0x10d59d]);
  let _0x313928 = (_0x29b730) => {
      _0x41f92((_0x1b336d) => ({ ..._0x1b336d, ..._0x29b730 }));
    },
    _0xe5383f = (_0x1d6a0c) => {
      let _0x47a248 = (0, e.buildShapeTextDataUpdate)(_0x3ad577, _0x1d6a0c);
      (C(
        _0x4efaa8,
        _0x10d59d,
        _0x41bc93,
        _0x3f7096,
        { oldShapeData: { shapeText: _0x3ad577.shapeText } },
        _0x47a248,
      ),
        _0x313928(_0x47a248));
    },
    _0x3e4d88 = (0, e.useFormulaShapeToolbar)({
      hostType: a.UniverInstanceType["UNIVER_SHEET"],
      unitId: _0x10d59d,
      subUnitId: _0x41bc93,
      shapeId: _0x3f7096,
      shapeData: _0x3ad577,
      onUpdateBinding: (_0x1b8ce8) => {
        let _0x253071 = { formulaBinding: _0x1b8ce8 };
        (C(
          _0x4efaa8,
          _0x10d59d,
          _0x41bc93,
          _0x3f7096,
          { oldShapeData: { formulaBinding: _0x3ad577.formulaBinding } },
          _0x253071,
        ),
          _0x313928(_0x253071));
      },
    });
  return (0, f.jsxs)(f.Fragment, {
    children: [
      (0, f.jsx)(e.ShapeFloatingToolbar, {
        canvasElement: _0x230dc8.canvasElement,
        shapeData: _0x3ad577,
        shapeType: _0x12d5ff,
        textStyle: {
          ff: n.ShapeDefaultConfig["shapeText"].fontFamily,
          fs: n.ShapeDefaultConfig["shapeText"].fontSize,
          cl: { rgb: n.ShapeDefaultConfig["shapeText"].color },
          ..._0x5c2069,
        },
        textModel: _0x5a0459
          ? {
              ha: _0x5a0459.ha ?? a.HorizontalAlign["LEFT"],
              va: _0x5a0459.va ?? a.VerticalAlign["TOP"],
            }
          : null,
        enableShapeFillReset: true,
        enableShapeStrokeReset: true,
        enableTextBackgroundReset: true,
        defaultFillColor: n.ShapeDefaultConfig["fill"],
        defaultGradientEndColor: n.ShapeDefaultConfig["gradientEndColor"],
        defaultStrokeColor: n.ShapeDefaultConfig["stroke"],
        extensionGroups: _0x3e4d88.extensionGroups,
        floatingObjectToolbarPosition: t.FloatingObjectToolbarPosition["SHEET"],
        onUpdateShapeData: (_0x59f768, _0x49ec4e) => {
          (C(_0x4efaa8, _0x10d59d, _0x41bc93, _0x3f7096, _0x59f768, _0x49ec4e),
            _0x49ec4e && _0x313928(_0x49ec4e));
        },
        onUpdateText: _0xe5383f,
        onOpenPanel: () => {
          _0x4efaa8.executeCommand(V.id, {
            unitId: _0x10d59d,
            subUnitId: _0x41bc93,
            drawingId: _0x3f7096,
          });
        },
        onDelete: () => {
          _0x4efaa8.executeCommand(p.RemoveSheetDrawingCommand["id"], {
            unitId: _0x10d59d,
            drawings: [
              {
                unitId: _0x10d59d,
                subUnitId: _0x41bc93,
                drawingId: _0x3f7096,
                drawingType: _0x1bcfa9,
              },
            ],
          });
        },
      }),
      _0x3e4d88.panel,
    ],
  });
}
let Y = class extends a.Disposable {
  constructor(_0x9fe114) {
    (super(),
      (this._permissionService = _0x9fe114),
      D(this, "_editingParams$", new u["BehaviorSubject"](null)),
      D(this, "editingParams$", this._editingParams$["asObservable"]()),
      D(this, "_onSavingEditorData$", new u["BehaviorSubject"](false)),
      D(
        this,
        "onSavingEditorData$",
        this._onSavingEditorData$["asObservable"](),
      ),
      this.disposeWithMe(
        this._permissionService["permissionPointUpdate$"].subscribe(() => {
          let _0xf16c3c = this.getEditing();
          _0xf16c3c != null &&
            _0xf16c3c.visible &&
            !this._canEdit(_0xf16c3c) &&
            this.setEditing(null);
        }),
      ));
  }
  dispose() {
    (this._editingParams$["next"](null),
      this._editingParams$["complete"](),
      this._onSavingEditorData$["next"](false),
      this._onSavingEditorData$["complete"](),
      super.dispose());
  }
  setEditing(_0x21bd06) {
    (_0x21bd06 != null && _0x21bd06.visible && !this._canEdit(_0x21bd06)) ||
      (this._editingParams$["next"](_0x21bd06),
      _0x21bd06 ?? this._onSavingEditorData$["next"](false));
  }
  setOnSavingEditorData(_0x578beb) {
    this._onSavingEditorData$["next"](_0x578beb);
  }
  getEditing() {
    return this._editingParams$["getValue"]();
  }
  _canEdit(_0x2181df) {
    let _0x2f4a5a = this._permissionService["getPermissionPoint"](
        new o["WorkbookEditablePermission"](_0x2181df.unitId).id,
      ),
      _0x4defb9 = this._permissionService["getPermissionPoint"](
        new o.WorksheetEditPermission(_0x2181df.unitId, _0x2181df.subUnitId).id,
      );
    return (
      ((_0x2f4a5a == null ? undefined : _0x2f4a5a.value) ?? true) &&
      ((_0x4defb9 == null ? undefined : _0x4defb9.value) ?? true)
    );
  }
  completeEditing(_0x1d94c6) {
    this.getEditing() &&
      (this.setOnSavingEditorData(true),
      requestAnimationFrame(() => {
        this.setEditing(null);
      }));
  }
  cancelEditing() {
    this.getEditing() && this.setEditing(null);
  }
};
Y = M([j(0, a.IPermissionService)], Y);
function st(_0x23f62a) {
  return (
    !!_0x23f62a &&
    "axisAlignSheetTransform" in _0x23f62a &&
    "sheetTransform" in _0x23f62a
  );
}
const ct = (0, y.memo)(() => {
  let _0x1994de = (0, t.useDependency)(Y),
    _0x484f86 = (0, t.useDependency)(i.SheetsShapeService),
    _0x166418 = (0, t.useDependency)(s.IDrawingManagerService),
    _0x2d5663 = (0, t.useDependency)(a.ICommandService),
    _0x3ada6e = (0, t.useDependency)(t.UndoRedoGroupService),
    _0xd04368 = (0, t.useDependency)(c.IRenderManagerService);
  return (0, f.jsx)(e.ShapeTextEditorContainer, {
    adapter: (0, y.useMemo)(
      () => ({
        getShapeModel: (_0x46924d, _0x45c353, _0x50a5d4) =>
          _0x484f86.getShapeModel(_0x46924d, _0x45c353, _0x50a5d4),
        getShapeData: (_0x183364, _0x57e9b3, _0x1356ea) =>
          _0x484f86.getShapeDataById(_0x183364, _0x57e9b3, _0x1356ea),
        getDrawingTransform: (_0x1f0943, _0xf61ce, _0x4cb51f) => {
          let _0x338ccf = _0x166418.getDrawingByParam({
            unitId: _0x1f0943,
            subUnitId: _0xf61ce,
            drawingId: _0x4cb51f,
          });
          return _0x338ccf == null ? undefined : _0x338ccf.transform;
        },
        updateShapeText: ({
          unitId: _0x475419,
          subUnitId: _0x198239,
          shapeId: _0x9755d4,
          shapeText: _0x3c22b7,
          oldShapeText: _0x14dfeb,
          hostSize: _0x918c76,
        }) => {
          _0x3ada6e.run(_0x475419, () => {
            var _0x159ffc;
            let _0x41ec3c = _0x2d5663.syncExecuteCommand(S.id, {
              unitId: _0x475419,
              subUnitId: _0x198239,
              shapeId: _0x9755d4,
              shapeData: { shapeText: _0x3c22b7 },
              oldShapeJSON: { oldShapeData: { shapeText: _0x14dfeb } },
            });
            if (!_0x41ec3c || !_0x918c76) return _0x41ec3c;
            let _0x79a378 = _0x166418.getDrawingByParam({
                unitId: _0x475419,
                subUnitId: _0x198239,
                drawingId: _0x9755d4,
              }),
              _0x172151 = _0x79a378 == null ? undefined : _0x79a378.transform;
            if (!st(_0x79a378) || !_0x172151) return false;
            let _0x862341 = {
                ..._0x172151,
                width: _0x918c76.width,
                height: _0x918c76.height,
              },
              _0x518368 =
                (_0x159ffc = _0xd04368.getRenderUnitById(_0x475419)) == null ||
                (_0x159ffc = _0x159ffc
                  .with(l.SheetSkeletonManagerService)
                  .getSkeletonParam(_0x198239)) == null
                  ? undefined
                  : _0x159ffc.skeleton;
            return _0x2d5663.syncExecuteCommand(
              p.SetSheetDrawingCommand["id"],
              {
                unitId: _0x475419,
                drawings: [
                  {
                    ..._0x79a378,
                    transform: _0x862341,
                    sheetTransform: _0x518368
                      ? ((0, p.transformToDrawingPosition)(
                          _0x862341,
                          _0x518368,
                        ) ?? _0x79a378.sheetTransform)
                      : _0x79a378.sheetTransform,
                    axisAlignSheetTransform: _0x518368
                      ? ((0, p.transformToAxisAlignPosition)(
                          _0x862341,
                          _0x518368,
                        ) ?? _0x79a378.axisAlignSheetTransform)
                      : _0x79a378.axisAlignSheetTransform,
                  },
                ],
              },
            );
          });
        },
        updateHostSize: ({
          unitId: _0x33e9ed,
          subUnitId: _0x2761cc,
          shapeId: _0xf82081,
          width: _0xb26fd8,
          height: _0xa2a26c,
        }) => {
          var _0x1be4b5;
          let _0x2b7522 = _0x166418.getDrawingByParam({
              unitId: _0x33e9ed,
              subUnitId: _0x2761cc,
              drawingId: _0xf82081,
            }),
            _0x10e711 = _0x2b7522 == null ? undefined : _0x2b7522.transform;
          if (!st(_0x2b7522) || !_0x10e711) return;
          let _0x1a8aeb = { ..._0x10e711, width: _0xb26fd8, height: _0xa2a26c },
            _0x31e4af =
              (_0x1be4b5 = _0xd04368.getRenderUnitById(_0x33e9ed)) == null ||
              (_0x1be4b5 = _0x1be4b5
                .with(l.SheetSkeletonManagerService)
                .getSkeletonParam(_0x2761cc)) == null
                ? undefined
                : _0x1be4b5.skeleton,
            _0x79eb66 = _0x31e4af
              ? ((0, p.transformToDrawingPosition)(_0x1a8aeb, _0x31e4af) ??
                _0x2b7522.sheetTransform)
              : _0x2b7522.sheetTransform,
            _0x18d0b5 = _0x31e4af
              ? ((0, p.transformToAxisAlignPosition)(_0x1a8aeb, _0x31e4af) ??
                _0x2b7522.axisAlignSheetTransform)
              : _0x2b7522.axisAlignSheetTransform;
          _0x2d5663.executeCommand(p.SetSheetDrawingCommand["id"], {
            unitId: _0x33e9ed,
            drawings: [
              {
                ..._0x2b7522,
                transform: _0x1a8aeb,
                sheetTransform: _0x79eb66,
                axisAlignSheetTransform: _0x18d0b5,
              },
            ],
          });
        },
        allowHostSizeShrink: ({
          unitId: _0x4c24a9,
          subUnitId: _0x587909,
          shapeId: _0x2ea419,
        }) =>
          (0, e.shouldAllowShapeTextEditorHostSizeShrink)(
            _0x484f86.getShapeDataById(_0x4c24a9, _0x587909, _0x2ea419),
          ),
        deferHostSizeUpdateDuringEditing: () => true,
      }),
      [_0x2d5663, _0x166418, _0xd04368, _0x484f86, _0x3ada6e],
    ),
    editingService: _0x1994de,
    editorUnitId: te,
    positionOptions: (0, y.useMemo)(
      () => ({
        viewportKeys: {
          main: c.SHEET_VIEWPORT_KEY["VIEW_MAIN"],
          leftTop: c.SHEET_VIEWPORT_KEY["VIEW_MAIN_LEFT_TOP"],
          top: c.SHEET_VIEWPORT_KEY["VIEW_MAIN_TOP"],
          left: c.SHEET_VIEWPORT_KEY["VIEW_MAIN_LEFT"],
        },
        getSkeleton: (_0x2afd55, _0x4e3696) => {
          var _0x224e8a;
          return (
            ((_0x224e8a = _0x2afd55
              .with(l.SheetSkeletonManagerService)
              .getSkeletonParam(_0x4e3696.subUnitId)) == null
              ? undefined
              : _0x224e8a.skeleton) ?? null
          );
        },
      }),
      [],
    ),
  });
});
let lt = class extends a.Disposable {
  constructor(_0x5c5d01, _0x375e94) {
    (super(),
      (this._componentManager = _0x5c5d01),
      (this._iconManager = _0x375e94),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    (this._iconManager["has"]("ObjectLayersIcon") ||
      this.disposeWithMe(
        this._iconManager["register"]({ ObjectLayersIcon: v.ObjectLayersIcon }),
      ),
      this._iconManager["has"]("FlipHorizontalIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({
            FlipHorizontalIcon: v.FlipHorizontalIcon,
          }),
        ),
      this._iconManager["has"]("FlipVerticalIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({
            FlipVerticalIcon: v.FlipVerticalIcon,
          }),
        ),
      this._iconManager["has"]("BottomIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ BottomIcon: v.BottomIcon }),
        ),
      this._iconManager["has"]("MoveDownIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ MoveDownIcon: v.MoveDownIcon }),
        ),
      this._iconManager["has"]("MoveUpIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ MoveUpIcon: v.MoveUpIcon }),
        ),
      this._iconManager["has"]("ShapeFormatSettingIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({
            ShapeFormatSettingIcon: v.ShapeFormatSettingIcon,
          }),
        ),
      this._iconManager["has"]("TopmostIcon") ||
        this.disposeWithMe(
          this._iconManager["register"]({ TopmostIcon: v.TopmostIcon }),
        ));
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](L, it)),
      this.disposeWithMe(this._componentManager["register"](R, nt)),
      this.disposeWithMe(this._componentManager["register"](oe, de)),
      this.disposeWithMe(this._componentManager["register"](se, le)),
      this._componentManager["get"](d.IMAGE_CLIP_SHAPE_PICKER_COMPONENT) ||
        this.disposeWithMe(
          this._componentManager["register"](
            d.IMAGE_CLIP_SHAPE_PICKER_COMPONENT,
            ue,
          ),
        ),
      this.disposeWithMe(this._componentManager["register"](z, at)),
      this.disposeWithMe(this._componentManager["register"](xe, we)),
      this.disposeWithMe(this._componentManager["register"](be, Te)),
      this.disposeWithMe(this._componentManager["register"](Se, Ee)),
      this.disposeWithMe(this._componentManager["register"](Ce, De)),
      this.disposeWithMe(
        this._componentManager["register"](ne, e.ShapeTextFloatToolbar),
      ),
      this.disposeWithMe(
        this._componentManager["register"]("SheetShapeTextEditorContainer", ct),
      ));
  }
};
lt = M(
  [j(0, (0, a.Inject)(t.ComponentManager)), j(1, (0, a.Inject)(t.IconManager))],
  lt,
);
let ut = class extends a.Disposable {
  constructor(_0x2c0607, _0x34a21f, _0x5d0653, _0x517470, _0x58ed7a) {
    (super(),
      (this._context = _0x2c0607),
      (this._drawingManagerService = _0x34a21f),
      (this._renderManagerService = _0x5d0653),
      (this._univerInstanceService = _0x517470),
      (this._imageShapeClipController = _0x58ed7a),
      D(this, "_activeImageId", null),
      D(this, "_unitId", null),
      D(this, "_subUnitId", null),
      D(this, "_activeAdjustPointList", undefined),
      D(this, "_shapes", []),
      D(this, "_baseLeft", 0),
      D(this, "_baseTop", 0),
      D(this, "_baseWidth", 0),
      D(this, "_baseHeight", 0),
      D(this, "_isStartAdjusting", false),
      D(this, "_activeAdjustInfo", undefined),
      D(this, "_activeShapeModel", undefined),
      D(this, "_adjHandlerPointerMove", undefined),
      D(this, "_adjHandlerPointerUp", undefined),
      D(this, "_isImagePointerDown", false),
      this._registerFocusChangeHandler(),
      this._registerMoveHandler());
  }
  clearAdjustControls() {
    this._clearControls();
  }
  refreshAdjustControls() {
    (this._clearControls(), this._createControls(true));
  }
  _getOrCreateShapeModel(_0x83a83e, _0x31a6dd, _0x55dbca, _0x207513) {
    let _0x33873a = _0x83a83e;
    if (_0x33873a !== n.ShapeTypeEnum["None"] && _0x83a83e !== "custom")
      try {
        let _0x4b9d3c = new n.ShapeModel(_0x33873a, "clip-adj-" + _0x83a83e);
        return (
          _0x207513 &&
            _0x4b9d3c.setShapeData({ adjustValues: _0x207513 }, true),
          _0x4b9d3c.updateContext({ width: _0x31a6dd, height: _0x55dbca }),
          _0x4b9d3c
        );
      } catch {
        return;
      }
  }
  _getImageDrawingInfo(_0x1af296, _0x5db23b, _0x5e7dfd) {
    let _0x1474aa = {
        unitId: _0x1af296,
        subUnitId: _0x5db23b,
        drawingId: _0x5e7dfd,
      },
      _0x1c437f = this._drawingManagerService["getDrawingByParam"](_0x1474aa);
    if (!(
      !_0x1c437f || _0x1c437f.drawingType !== a.DrawingTypeEnum["DRAWING_IMAGE"]
    ))
      return _0x1c437f;
  }
  _getImagePrstGeom(_0x30945d, _0x3e75ca, _0x52778c) {
    let _0x13aaef = this._renderManagerService["getRenderUnitById"](_0x30945d);
    if (!_0x13aaef) return;
    let { scene: _0x3e41b6 } = _0x13aaef,
      _0x3f2279 = (0, s.getDrawingShapeKeyByDrawingSearch)({
        unitId: _0x30945d,
        subUnitId: _0x3e75ca,
        drawingId: _0x52778c,
      }),
      _0x148082 = _0x3e41b6.getObject(_0x3f2279);
    if (_0x148082 instanceof c.Image) {
      let _0x1de4a3 = _0x148082.prstGeom;
      if (_0x1de4a3)
        return {
          prstGeom: _0x1de4a3,
          adjustValues: _0x148082.prstGeomAdjValues,
        };
    }
  }
  _createControls(_0xb63394 = false) {
    if (!this._unitId || !this._subUnitId || !this._activeImageId) return;
    let _0x1a173b = this._renderManagerService["getRenderUnitById"](
      this._unitId,
    );
    if (
      !_0x1a173b ||
      !_0x1a173b.with(l.SheetSkeletonManagerService).getCurrentSkeleton()
    )
      return;
    let { scene: _0x5774ad } = _0x1a173b,
      _0x249b4c = this._getImageDrawingInfo(
        this._unitId,
        this._subUnitId,
        this._activeImageId,
      );
    if (!_0x249b4c) return;
    let { transform: _0x4c4b8d } = _0x249b4c;
    if (!_0x4c4b8d) return;
    let {
      left: _0x42429e,
      top: _0x53b0cb,
      width: _0x40f99a,
      height: _0x449b4e,
      flipX: _0x498295,
      flipY: _0xa1b8da,
      angle: _0x4f1903 = 0,
    } = _0x4c4b8d;
    if (_0x42429e === undefined || _0x53b0cb === undefined) return;
    let _0x5f3da7 = this._getImagePrstGeom(
      this._unitId,
      this._subUnitId,
      this._activeImageId,
    );
    if (!_0x5f3da7) return;
    if (_0xb63394) {
      let _0xa2ee9c = this._getOrCreateShapeModel(
        _0x5f3da7.prstGeom,
        _0x40f99a || 0,
        _0x449b4e || 0,
        _0x5f3da7.adjustValues,
      );
      if (!_0xa2ee9c) return;
      this._activeAdjustPointList = _0xa2ee9c.getDrawingPoints();
    }
    let _0xdb87ee = this._activeAdjustPointList;
    if (!(!_0xdb87ee || _0xdb87ee.length === 0))
      for (let _0x50a480 = 0; _0x50a480 < _0xdb87ee.length; _0x50a480++) {
        let _0x4b6bac = _0xdb87ee[_0x50a480],
          _0x49f90b = _0x4b6bac.x,
          _0x91ef6d = _0x4b6bac.y;
        if (
          (_0x498295 && (_0x49f90b = (_0x40f99a || 0) - _0x49f90b),
          _0xa1b8da && (_0x91ef6d = (_0x449b4e || 0) - _0x91ef6d),
          _0x4f1903 !== 0)
        ) {
          let _0x3a1719 = (_0x40f99a || 0) / 2,
            _0x2ae6a9 = (_0x449b4e || 0) / 2,
            _0x4eb98d = (_0x4f1903 * Math.PI) / 180,
            _0x90c767 = Math.cos(_0x4eb98d),
            _0x9759 = Math.sin(_0x4eb98d),
            _0x448fdc = _0x49f90b - _0x3a1719,
            _0x5bba70 = _0x91ef6d - _0x2ae6a9;
          ((_0x49f90b =
            _0x3a1719 + (_0x448fdc * _0x90c767 - _0x5bba70 * _0x9759)),
            (_0x91ef6d =
              _0x2ae6a9 + (_0x448fdc * _0x9759 + _0x5bba70 * _0x90c767)));
        }
        let _0x340b3e = {
          x: _0x49f90b,
          y: _0x91ef6d,
          adjName: _0x4b6bac.adjName,
        };
        this._addControl(
          _0x5774ad,
          _0x340b3e,
          _0x340b3e.adjName,
          _0x42429e,
          _0x53b0cb,
          this._unitId,
          this._subUnitId,
        );
      }
  }
  _addControl(
    _0xcddde4,
    _0x463de0,
    _0x44517d,
    _0x265e60,
    _0x392b3f,
    _0x4baa0b,
    _0x33681f,
  ) {
    if (!this._activeImageId) return;
    let _0x3ff2d6 =
        "image-clip-adjust-point-" + this._activeImageId + "-" + _0x44517d,
      _0x21379d = _0xcddde4.getObjectIncludeInGroup(_0x3ff2d6);
    if (_0x21379d) {
      _0x21379d.transformByState({
        left: _0x463de0.x + _0x265e60 - n.ShapeDefaultConfig["adjHandleSize"],
        top: _0x463de0.y + _0x392b3f - n.ShapeDefaultConfig["adjHandleSize"],
      });
      return;
    }
    let _0x2cbeb5 = new A(_0x3ff2d6, {
      left: _0x463de0.x + _0x265e60 - n.ShapeDefaultConfig["adjHandleSize"],
      top: _0x463de0.y + _0x392b3f - n.ShapeDefaultConfig["adjHandleSize"],
      adjName: _0x44517d,
      shapeId: this._activeImageId,
      unitId: _0x4baa0b,
      subUnitId: _0x33681f,
      width: n.ShapeDefaultConfig["adjHandleSize"] + 8,
      height: n.ShapeDefaultConfig["adjHandleSize"] + 8,
      zIndex: c.DRAWING_OBJECT_LAYER_INDEX + 1,
      evented: true,
    });
    (this._shapes["push"](_0x2cbeb5),
      this._attachAdjustEvent(_0x2cbeb5, _0xcddde4, _0x44517d),
      _0xcddde4.addObject(_0x2cbeb5, c.DRAWING_OBJECT_LAYER_INDEX + 1));
  }
  _clearControls() {
    this._shapes["length"] !== 0 &&
      (this._shapes["forEach"]((_0x48fd8e) => _0x48fd8e.dispose()),
      (this._shapes = []));
  }
  _getScrollInfo(_0xb29eaa, _0x4e67e9) {
    var _0x2e6d41;
    let _0x3a0fc0 = { x: 0, y: 0 },
      _0x5aba03 = this._renderManagerService["getRenderUnitById"](_0xb29eaa);
    if (
      !_0x5aba03 ||
      !_0x5aba03.with(l.SheetSkeletonManagerService).getSkeleton(_0x4e67e9)
    )
      return _0x3a0fc0;
    let _0x350fdb = _0x5aba03.with(l.SheetScrollManagerService),
      _0x307668 =
        _0x350fdb == null ? undefined : _0x350fdb.getCurrentScrollState();
    if (!_0x307668) return _0x3a0fc0;
    let _0x268e55 =
      (_0x2e6d41 = this._univerInstanceService["getUnit"](_0xb29eaa)) == null
        ? undefined
        : _0x2e6d41.getSheetBySheetId(_0x4e67e9);
    if (!_0x268e55) return _0x3a0fc0;
    let _0x4e7bba = (0, l.getViewportByCell)(
      _0x307668.sheetViewStartRow,
      _0x307668.sheetViewStartColumn,
      _0x5aba03.scene,
      _0x268e55,
    );
    return _0x4e7bba
      ? { x: _0x4e7bba.viewportScrollX, y: _0x4e7bba.viewportScrollY }
      : _0x3a0fc0;
  }
  _getZoomRatio(_0x32fc18, _0xec3c5d) {
    var _0x5e3c84;
    let _0x15dbb0 =
      (_0x5e3c84 = this._univerInstanceService["getUnit"](_0x32fc18)) == null
        ? undefined
        : _0x5e3c84.getSheetBySheetId(_0xec3c5d);
    return (_0x15dbb0 == null ? undefined : _0x15dbb0.getZoomRatio()) ?? 1;
  }
  _attachAdjustEvent(_0x29cde0, _0xfa1ec5, _0x122834) {
    this.disposeWithMe(
      (0, a.toDisposable)(
        _0x29cde0.onPointerDown$["subscribeEvent"]((_0x52edd1, _0x115d18) => {
          var _0x1c4c63, _0x4ae574, _0x368a03;
          let {
              unitId: _0x409c09,
              subUnitId: _0xaa313c,
              drawingId: _0x60c597,
            } = _0x29cde0.getDrawingSearch(),
            _0x1fe75c = this._getImageDrawingInfo(
              _0x409c09,
              _0xaa313c,
              _0x60c597,
            );
          if (!(_0x1fe75c != null && _0x1fe75c.transform)) return;
          let {
            left: _0xaa9aaf,
            top: _0x2e3868,
            width: _0x37828a,
            height: _0x15dcfe,
          } = _0x1fe75c.transform;
          ((this._baseLeft = _0xaa9aaf || 0),
            (this._baseTop = _0x2e3868 || 0),
            (this._baseWidth = _0x37828a || 0),
            (this._baseHeight = _0x15dcfe || 0));
          let _0x3b1911 = !!(
              (_0x1c4c63 = _0x1fe75c.transform) != null && _0x1c4c63.flipX
            ),
            _0x2b0011 = !!(
              (_0x4ae574 = _0x1fe75c.transform) != null && _0x4ae574.flipY
            ),
            _0x5f484b =
              ((_0x368a03 = _0x1fe75c.transform) == null
                ? undefined
                : _0x368a03.angle) || 0,
            _0x32f559 = this._getImagePrstGeom(_0x409c09, _0xaa313c, _0x60c597);
          if (!_0x32f559) return;
          let _0x75da65 = this._getOrCreateShapeModel(
            _0x32f559.prstGeom,
            this._baseWidth,
            this._baseHeight,
            _0x32f559.adjustValues,
          );
          if (
            !_0x75da65 ||
            ((this._activeShapeModel = _0x75da65),
            (this._activeAdjustInfo = _0x75da65.getAdjustInfoByName(_0x122834)),
            !this._activeAdjustInfo)
          )
            return;
          ((this._isStartAdjusting = true), _0xfa1ec5.disableObjectsEvent());
          let _0x4077a1 = _0x32f559.prstGeom;
          ((this._adjHandlerPointerMove = _0xfa1ec5.onPointerMove$[
            "subscribeEvent"
          ]((_0xf8ecb9, _0x208a28) => {
            if (!this._isStartAdjusting) return;
            let { offsetX: _0xa4d1d6, offsetY: _0xeaeb74 } = _0xf8ecb9,
              _0x1a9784 = this._activeAdjustInfo;
            if (!this._activeShapeModel || !_0x1a9784) return;
            (_0xfa1ec5.disableObjectsEvent(),
              _0xfa1ec5.setCursor(c.CURSOR_TYPE["CROSSHAIR"]));
            let _0x1b7d55 = {
                left: 0,
                top: 0,
                width: this._baseWidth,
                height: this._baseHeight,
              },
              _0x595a17 = this._getScrollInfo(_0x409c09, _0xaa313c),
              _0x1e7e5f = this._getZoomRatio(_0x409c09, _0xaa313c),
              _0x1ac28e = _0xa4d1d6 / _0x1e7e5f + _0x595a17.x - this._baseLeft,
              _0x2a282c = _0xeaeb74 / _0x1e7e5f + _0x595a17.y - this._baseTop;
            if (_0x5f484b !== 0) {
              let _0x2b7f10 = this._baseWidth / 2,
                _0x4c492d = this._baseHeight / 2,
                _0x208957 = (_0x5f484b * Math.PI) / 180,
                _0x201115 = Math.cos(_0x208957),
                _0x3bc4ab = Math.sin(_0x208957),
                _0x37ceb2 = _0x1ac28e - _0x2b7f10,
                _0x2955a3 = _0x2a282c - _0x4c492d;
              ((_0x1ac28e =
                _0x2b7f10 + (_0x37ceb2 * _0x201115 + _0x2955a3 * _0x3bc4ab)),
                (_0x2a282c =
                  _0x4c492d +
                  (-_0x37ceb2 * _0x3bc4ab + _0x2955a3 * _0x201115)));
            }
            (_0x3b1911 && (_0x1ac28e = this._baseWidth - _0x1ac28e),
              _0x2b0011 && (_0x2a282c = this._baseHeight - _0x2a282c));
            let _0x3f9b02 = this._activeShapeModel["calcAdjValues"](
              _0x1b7d55,
              { x: _0x1ac28e, y: _0x2a282c },
              _0x1a9784,
              _0x3b1911,
              _0x2b0011,
            );
            if (Object.keys(_0x3f9b02).length !== 0) {
              for (let [_0xf8c300, _0x48f897] of Object.entries(_0x3f9b02))
                this._activeShapeModel["setAdjustValueByName"](
                  _0xf8c300,
                  _0x48f897,
                );
              (this._activeShapeModel["updateContext"]({
                width: this._baseWidth,
                height: this._baseHeight,
              }),
                this._updateImageAdjValues(
                  _0x409c09,
                  _0xaa313c,
                  _0x60c597,
                  _0x3f9b02,
                ),
                (this._activeAdjustPointList =
                  this._activeShapeModel["getDrawingPoints"]()),
                this._createControls(),
                _0x208a28.stopPropagation());
            }
          })),
            (this._adjHandlerPointerUp = _0xfa1ec5.onPointerUp$[
              "subscribeEvent"
            ]((_0x458daa, _0x26cb82) => {
              if (
                (this._adjHandlerPointerMove["unsubscribe"](),
                this._adjHandlerPointerUp["unsubscribe"](),
                _0xfa1ec5.resetCursor(),
                this._activeShapeModel)
              ) {
                let _0xc6232f = this._activeShapeModel["getAdjustNames"](),
                  _0x1c1d22 = {};
                for (let _0x4d9740 of _0xc6232f) {
                  let _0x204729 =
                    this._activeShapeModel["getAdjustValueByName"](_0x4d9740);
                  _0x204729 !== undefined && (_0x1c1d22[_0x4d9740] = _0x204729);
                }
                this._imageShapeClipController["clipByShape"](
                  _0x409c09,
                  _0xaa313c,
                  _0x60c597,
                  _0x4077a1,
                  _0x1c1d22,
                );
              }
              ((this._activeAdjustInfo = undefined),
                (this._activeShapeModel = undefined),
                (this._isStartAdjusting = false),
                _0x26cb82.stopPropagation(),
                _0xfa1ec5.enableObjectsEvent());
            })),
            _0x115d18.stopPropagation());
        }),
      ),
    );
  }
  _updateImageAdjValues(_0x1f9ea4, _0x5f014d, _0x36b197, _0x120dee) {
    let _0x387a3f = this._renderManagerService["getRenderUnitById"](_0x1f9ea4);
    if (!_0x387a3f) return;
    let { scene: _0x45e7fa } = _0x387a3f,
      _0x53c59d = (0, s.getDrawingShapeKeyByDrawingSearch)({
        unitId: _0x1f9ea4,
        subUnitId: _0x5f014d,
        drawingId: _0x36b197,
      }),
      _0x566365 = _0x45e7fa.getObject(_0x53c59d);
    if (_0x566365 instanceof c.Image) {
      let _0xcc4cac = _0x566365.prstGeomAdjValues ?? {};
      (_0x566365.setPrstGeomAdjValues({ ..._0xcc4cac, ..._0x120dee }),
        _0x566365.makeDirty(true));
    }
  }
  _registerMoveHandler() {
    let _0x5ae008 = this._univerInstanceService["getCurrentTypeOfUnit$"](
      a.UniverInstanceType["UNIVER_SHEET"],
    );
    this.disposeWithMe(
      _0x5ae008
        .pipe(
          (0, u.switchMap)((_0x110c29) =>
            _0x110c29
              ? _0x110c29.activeSheet$["pipe"](
                  (0, u.switchMap)((_0x583bb1) => {
                    if (!_0x583bb1) return u.EMPTY;
                    let _0x261300 = _0x110c29.getUnitId(),
                      _0x1abe71 =
                        this._renderManagerService["getRenderUnitById"](
                          _0x261300,
                        ),
                      _0x58ad79 =
                        _0x1abe71 == null ? undefined : _0x1abe71.scene;
                    return _0x58ad79 ? (0, u.of)(_0x58ad79) : u.EMPTY;
                  }),
                )
              : u.EMPTY,
          ),
        )
        .subscribe((_0x579ba6) => {
          let _0x5e51d6 = _0x579ba6.getTransformerByCreate();
          (this.disposeWithMe(
            _0x579ba6.onPointerMove$["subscribeEvent"](() => {
              this._isImagePointerDown && this._clearControls();
            }),
          ),
            this.disposeWithMe(
              _0x5e51d6.changeStart$["subscribe"]((_0x105cfa) => {
                let { objects: _0x20aa1a } = _0x105cfa;
                if (
                  (this._createControls(),
                  _0x20aa1a !== null && _0x20aa1a.size === 1)
                ) {
                  let _0x2a2669 = _0x20aa1a.values().next().value;
                  _0x2a2669 instanceof c.Image &&
                    _0x2a2669.prstGeom &&
                    (this._isImagePointerDown = true);
                }
              }),
            ),
            this.disposeWithMe(
              _0x5e51d6.changing$["subscribe"](() => {
                this._isImagePointerDown && this._clearControls();
              }),
            ),
            this.disposeWithMe(
              _0x579ba6.onPointerUp$["subscribeEvent"](() => {
                this._isImagePointerDown &&
                  ((this._isImagePointerDown = false), this._createControls());
              }),
            ),
            this.disposeWithMe(
              _0x5e51d6.changeEnd$["subscribe"](() => {
                if (this._unitId && this._subUnitId && this._activeImageId) {
                  let _0x16d50c = this._getImagePrstGeom(
                    this._unitId,
                    this._subUnitId,
                    this._activeImageId,
                  );
                  if (_0x16d50c) {
                    var _0xeb9fcc, _0x1615ef;
                    let _0x2b9814 = this._getImageDrawingInfo(
                        this._unitId,
                        this._subUnitId,
                        this._activeImageId,
                      ),
                      _0x576d25 =
                        (_0x2b9814 == null ||
                        (_0xeb9fcc = _0x2b9814.transform) == null
                          ? undefined
                          : _0xeb9fcc.width) || 0,
                      _0x2abadb =
                        (_0x2b9814 == null ||
                        (_0x1615ef = _0x2b9814.transform) == null
                          ? undefined
                          : _0x1615ef.height) || 0,
                      _0x413aef = this._getOrCreateShapeModel(
                        _0x16d50c.prstGeom,
                        _0x576d25,
                        _0x2abadb,
                        _0x16d50c.adjustValues,
                      );
                    _0x413aef &&
                      ((this._activeAdjustPointList =
                        _0x413aef.getDrawingPoints()),
                      this._clearControls(),
                      this._createControls(true));
                  }
                }
              }),
            ));
        }),
    );
  }
  _registerFocusChangeHandler() {
    (this.disposeWithMe(
      this._drawingManagerService["focus$"].subscribe((_0x49a956) => {
        if (_0x49a956.length === 1) {
          let _0x39d622 = _0x49a956[0];
          if (_0x39d622.drawingType === a.DrawingTypeEnum["DRAWING_IMAGE"]) {
            let {
                unitId: _0x3af4f5,
                subUnitId: _0x562e2c,
                drawingId: _0x4bb31c,
              } = _0x39d622,
              _0x3b00ec = this._getImagePrstGeom(
                _0x3af4f5,
                _0x562e2c,
                _0x4bb31c,
              );
            if (_0x3b00ec) {
              var _0x80224e, _0x464dfd;
              ((this._activeImageId = _0x4bb31c),
                (this._unitId = _0x3af4f5),
                (this._subUnitId = _0x562e2c));
              let _0xe9466d = this._getImageDrawingInfo(
                  _0x3af4f5,
                  _0x562e2c,
                  _0x4bb31c,
                ),
                _0x5db931 =
                  (_0xe9466d == null ||
                  (_0x80224e = _0xe9466d.transform) == null
                    ? undefined
                    : _0x80224e.width) || 0,
                _0x2d3c09 =
                  (_0xe9466d == null ||
                  (_0x464dfd = _0xe9466d.transform) == null
                    ? undefined
                    : _0x464dfd.height) || 0,
                _0x5adba4 = this._getOrCreateShapeModel(
                  _0x3b00ec.prstGeom,
                  _0x5db931,
                  _0x2d3c09,
                  _0x3b00ec.adjustValues,
                );
              (_0x5adba4 &&
                (this._activeAdjustPointList = _0x5adba4.getDrawingPoints()),
                this._clearControls(),
                this._createControls(true));
            } else this._resetState();
          } else this._resetState();
        } else this._resetState();
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["update$"].subscribe((_0x4b9ad6) => {
          if (_0x4b9ad6.length === 1) {
            let _0x484adf = _0x4b9ad6[0],
              _0x1943ce =
                this._drawingManagerService["getDrawingByParam"](_0x484adf);
            (_0x1943ce == null ? undefined : _0x1943ce.drawingType) ===
              a.DrawingTypeEnum["DRAWING_IMAGE"] &&
              this._activeImageId === _0x484adf.drawingId &&
              (this._clearControls(), this._createControls(true));
          }
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x34e564) => {
          for (let _0x23431d of _0x34e564)
            this._activeImageId === _0x23431d.drawingId && this._resetState();
        }),
      ));
  }
  _resetState() {
    ((this._activeImageId = null),
      (this._unitId = null),
      (this._subUnitId = null),
      (this._activeAdjustPointList = undefined),
      this._clearControls());
  }
};
ut = M(
  [
    j(1, s.IDrawingManagerService),
    j(2, (0, a.Inject)(c.IRenderManagerService)),
    j(3, a.IUniverInstanceService),
    j(4, (0, a.Inject)(U)),
  ],
  ut,
);
const dt = "sheets-shape-contextual-ribbon";
let ft = class extends a.Disposable {
  constructor(
    _0x41d016,
    _0x37d213,
    _0x5c8fd8,
    _0x29be4c,
    _0x4e5bad,
    _0x38addd,
  ) {
    (super(),
      (this._menuManagerService = _0x41d016),
      (this._ribbonService = _0x37d213),
      (this._drawingManagerService = _0x5c8fd8),
      (this._univerInstanceService = _0x29be4c),
      (this._renderManagerService = _0x4e5bad),
      (this._shapeFloatingToolbarService = _0x38addd),
      D(this, "_visible", false),
      this._menuManagerService["mergeMenu"](Je),
      this.disposeWithMe(
        (0, a.toDisposable)(
          this._drawingManagerService["focus$"].subscribe(() => this._update()),
        ),
      ),
      this._update());
  }
  dispose() {
    (this._shapeFloatingToolbarService["setFallbackVisible"](false, dt),
      this._hide(),
      super.dispose());
  }
  _update() {
    var _0x541279;
    let _0xf01a22 = this._drawingManagerService["getFocusDrawings"](),
      _0x41e25a = _0xf01a22.length === 1 ? _0xf01a22[0] : undefined;
    if (
      (_0x41e25a == null ? undefined : _0x41e25a.drawingType) !==
        a.DrawingTypeEnum["DRAWING_SHAPE"] ||
      this._univerInstanceService["getUnitType"](_0x41e25a.unitId) !==
        a.UniverInstanceType["UNIVER_SHEET"]
    ) {
      (this._shapeFloatingToolbarService["setFallbackVisible"](false, dt),
        this._hide());
      return;
    }
    let _0x45bbc5 =
      (0, e.resolveShapeContextualRibbonHostMode)(
        (_0x541279 = this._renderManagerService["getRenderUnitById"](
          _0x41e25a.unitId,
        )) == null
          ? undefined
          : _0x541279.engine["getCanvasElement"](),
      ) === "isolated";
    if (
      (this._shapeFloatingToolbarService["setFallbackVisible"](_0x45bbc5, dt),
      _0x45bbc5)
    ) {
      this._hide();
      return;
    }
    this._visible ||
      ((this._visible = true),
      this._ribbonService["showContextualTab"](B, { activate: true }));
  }
  _hide() {
    this._visible &&
      ((this._visible = false),
      this._ribbonService["hideContextualTab"](B),
      this._ribbonService["setCollapsedIds"]([]));
  }
};
ft = M(
  [
    j(0, t.IMenuManagerService),
    j(1, t.IRibbonService),
    j(2, s.IDrawingManagerService),
    j(3, a.IUniverInstanceService),
    j(4, c.IRenderManagerService),
    j(5, (0, a.Inject)(e.ShapeFloatingToolbarService)),
  ],
  ft,
);
function pt(_0x1c3d16, _0x432c43, _0x5d348a, _0x3966f5) {
  let _0x39916d = (0, s.getOrCreateDrawingCopyPlan)(
      _0x1c3d16,
      _0x432c43,
      _0x5d348a,
    ),
    _0x345cde = [];
  for (let _0x23fc85 of _0x432c43) {
    let _0x4e35dd = _0x39916d.idMap["get"](_0x23fc85.drawingId),
      _0x5b18c7 = _0x3966f5(_0x23fc85);
    !_0x4e35dd ||
      !_0x5b18c7 ||
      _0x345cde.push({ targetShapeId: _0x4e35dd, source: _0x5b18c7 });
  }
  return _0x345cde;
}
let mt = class extends a.Disposable {
  constructor(_0x34d96d, _0x9cfafa, _0x518a4c, _0x23e2ef) {
    (super(),
      (this._univerInstanceService = _0x34d96d),
      (this._sheetInterceptorService = _0x9cfafa),
      (this._sheetDrawingService = _0x518a4c),
      (this._sheetsShapeService = _0x23e2ef),
      this._initSheetChange());
  }
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x2b399f) => {
          if (_0x2b399f.id === o.RemoveSheetCommand["id"]) {
            let _0x8ee754 = (0, o.getSheetCommandTarget)(
              this._univerInstanceService,
              _0x2b399f.params,
            );
            if (!_0x8ee754) return { redos: [], undos: [] };
            let { unitId: _0x72c8fe, subUnitId: _0xd4409b } = _0x8ee754,
              _0x576ca2 = this._sheetDrawingService["getDrawingData"](
                _0x72c8fe,
                _0xd4409b,
              ),
              _0x680e37 = Object.values(_0x576ca2).filter(
                (_0x105885) =>
                  _0x105885.drawingType === a.DrawingTypeEnum["DRAWING_SHAPE"],
              );
            if (_0x680e37.length === 0) return { redos: [], undos: [] };
            let _0x5a59f8 = [],
              _0x1c91ad = [];
            for (let _0x20f4e8 = 0; _0x20f4e8 < _0x680e37.length; _0x20f4e8++) {
              let _0x3c6a64 = _0x680e37[_0x20f4e8],
                _0x58ef5d = this._sheetsShapeService["getShapeModel"](
                  _0x3c6a64.unitId,
                  _0x3c6a64.subUnitId,
                  _0x3c6a64.drawingId,
                );
              _0x58ef5d &&
                (_0x5a59f8.push({
                  id: i.RemoveSheetsShapeMutation["id"],
                  params: {
                    unitId: _0x72c8fe,
                    subUnitId: _0xd4409b,
                    shapeId: _0x3c6a64.drawingId,
                  },
                }),
                _0x1c91ad.push({
                  id: i.InsertSheetsShapeMutation["id"],
                  params: {
                    unitId: _0x72c8fe,
                    subUnitId: _0xd4409b,
                    shapeId: _0x3c6a64.drawingId,
                    shapeType: _0x58ef5d.getShapeType(),
                    shapeData: JSON.parse(
                      JSON.stringify(_0x58ef5d.getShapeData()),
                    ),
                  },
                }));
            }
            return { redos: _0x5a59f8, undos: _0x1c91ad };
          } else {
            if (_0x2b399f.id === o.CopySheetCommand["id"]) {
              let {
                unitId: _0x30a18c,
                subUnitId: _0x31723e,
                targetSubUnitId: _0x5f3ed8,
                copyContext: _0x371269,
              } = _0x2b399f.params;
              if (!_0x30a18c || !_0x31723e || !_0x5f3ed8)
                return { redos: [], undos: [] };
              let _0x7a8b78 = this._sheetDrawingService["getDrawingData"](
                  _0x30a18c,
                  _0x31723e,
                ),
                _0x4d9290 = Object.values(_0x7a8b78).filter(
                  (_0x545180) =>
                    _0x545180.drawingType ===
                    a.DrawingTypeEnum["DRAWING_SHAPE"],
                );
              if (_0x4d9290.length === 0) return { redos: [], undos: [] };
              let _0x1f896e = pt(
                  _0x371269,
                  _0x4d9290,
                  {
                    unitId: _0x30a18c,
                    sourceSubUnitId: _0x31723e,
                    targetSubUnitId: _0x5f3ed8,
                  },
                  (_0x57134c) => {
                    let _0x1849ee = this._sheetsShapeService["getShapeModel"](
                      _0x57134c.unitId,
                      _0x57134c.subUnitId,
                      _0x57134c.drawingId,
                    );
                    if (_0x1849ee)
                      return {
                        shapeType: _0x1849ee.getShapeType(),
                        shapeData: JSON.parse(
                          JSON.stringify(_0x1849ee.getShapeData()),
                        ),
                      };
                  },
                ),
                _0x1af2c1 = [],
                _0x5aa7b1 = [];
              for (let {
                targetShapeId: _0x244694,
                source: _0x249201,
              } of _0x1f896e)
                (_0x1af2c1.push({
                  id: i.InsertSheetsShapeMutation["id"],
                  params: {
                    unitId: _0x30a18c,
                    subUnitId: _0x5f3ed8,
                    shapeId: _0x244694,
                    shapeType: _0x249201.shapeType,
                    shapeData: _0x249201.shapeData,
                  },
                }),
                  _0x5aa7b1.push({
                    id: i.RemoveSheetsShapeMutation["id"],
                    params: {
                      unitId: _0x30a18c,
                      subUnitId: _0x5f3ed8,
                      shapeId: _0x244694,
                    },
                  }));
              return { redos: _0x1af2c1, undos: _0x5aa7b1 };
            }
          }
          return { redos: [], undos: [] };
        },
      }),
    );
  }
};
mt = M(
  [
    j(0, (0, a.Inject)(a.IUniverInstanceService)),
    j(1, (0, a.Inject)(o.SheetInterceptorService)),
    j(2, (0, a.Inject)(p.ISheetDrawingService)),
    j(3, (0, a.Inject)(i.SheetsShapeService)),
  ],
  mt,
);
function ht(_0x55c724) {
  return _0x55c724.line
    ? null
    : _0x55c724.mobile
      ? _0x55c724.formula
        ? "mobile-formula"
        : "mobile-text"
      : _0x55c724.formula
        ? null
        : "desktop-text";
}
let gt = class extends a.Disposable {
  constructor(
    _0x36ddc6,
    _0x2708f0,
    _0x327510,
    _0x2547f6,
    _0x4bf952,
    _0x448c20,
  ) {
    (super(),
      (this._context = _0x36ddc6),
      (this._shapeTextEditingService = _0x2708f0),
      (this._mobileShapeEditorService = _0x327510),
      (this._drawingManagerService = _0x2547f6),
      (this._contextService = _0x4bf952),
      (this._sheetsShapeService = _0x448c20),
      D(this, "_lastEditingShapeKey", null),
      this._initEvents(),
      this._initSelection(),
      this._initEditingParams());
  }
  _initEvents() {
    let { scene: _0x2aaad8 } = this._context;
    this.disposeWithMe(
      _0x2aaad8.onDblclick$["subscribeEvent"]((_0x1dd345) => {
        let { offsetX: _0x5805a9, offsetY: _0x5766c3 } = _0x1dd345,
          _0x1b3b76 = _0x2aaad8.pick(
            c.Vector2["FromArray"]([_0x5805a9, _0x5766c3]),
          );
        if (_0x1b3b76 instanceof k) {
          let _0x2a0518 = this._sheetsShapeService["getShapeModel"](
              _0x1b3b76.unitId,
              _0x1b3b76.subUnitId,
              _0x1b3b76.shapeId,
            ),
            _0x4d527b = (0, n.isConnectorShape)(
              this._sheetsShapeService["getShapeType"](
                _0x1b3b76.unitId,
                _0x1b3b76.subUnitId,
                _0x1b3b76.shapeId,
              ),
            ),
            _0x3e95fd = ht({
              formula: !!(
                _0x2a0518 != null && _0x2a0518.getShapeData().formulaBinding
              ),
              line: _0x4d527b,
              mobile: this._contextService["getContextValue"](t.MOBILE_UI_MODE),
            });
          if (!_0x3e95fd) return;
          if (_0x3e95fd === "mobile-formula" || _0x3e95fd === "mobile-text") {
            this._mobileShapeEditorService["open"](
              _0x3e95fd === "mobile-formula" ? "formula" : "text",
              {
                hostType: a.UniverInstanceType["UNIVER_SHEET"],
                unitId: _0x1b3b76.unitId,
                subUnitId: _0x1b3b76.subUnitId,
                shapeId: _0x1b3b76.shapeId,
              },
            );
            return;
          }
          this._shapeTextEditingService["setEditing"]({
            visible: true,
            unitId: _0x1b3b76.unitId,
            subUnitId: _0x1b3b76.subUnitId,
            shapeId: _0x1b3b76.shapeId,
            shapeKey: _0x1b3b76.oKey,
          });
        }
      }),
    );
  }
  _initSelection() {
    (this.disposeWithMe(
      this._drawingManagerService["focus$"].subscribe((_0x50681c) => {
        if (_0x50681c.length === 1) {
          let _0x5c8a0a = _0x50681c[0],
            _0x1ee23 =
              this._drawingManagerService["getDrawingByParam"](_0x5c8a0a);
          if (
            (_0x1ee23 == null ? undefined : _0x1ee23.drawingType) ===
            a.DrawingTypeEnum["DRAWING_SHAPE"]
          ) {
            var _0x1973da;
            let _0x160fe6 = this._shapeTextEditingService["getEditing"]();
            if (
              (_0x160fe6 == null ? undefined : _0x160fe6.shapeId) ===
                _0x5c8a0a.drawingId &&
              _0x160fe6.visible
            )
              return;
            let _0x36247c = (0, n.isConnectorShape)(
                this._sheetsShapeService["getShapeType"](
                  _0x5c8a0a.unitId,
                  _0x5c8a0a.subUnitId,
                  _0x5c8a0a.drawingId,
                ),
              ),
              _0xb1e896 = !!(
                (_0x1973da = this._sheetsShapeService["getShapeModel"](
                  _0x5c8a0a.unitId,
                  _0x5c8a0a.subUnitId,
                  _0x5c8a0a.drawingId,
                )) != null && _0x1973da.getShapeData().formulaBinding
              );
            (_0x36247c || _0xb1e896) &&
              this._shapeTextEditingService["setEditing"](null);
          } else
            this._shapeTextEditingService["getEditing"]() &&
              (this._shapeTextEditingService["setOnSavingEditorData"](true),
              requestAnimationFrame(() => {
                this._shapeTextEditingService["setEditing"](null);
              }));
        } else
          this._shapeTextEditingService["getEditing"]() &&
            (this._shapeTextEditingService["setOnSavingEditorData"](true),
            requestAnimationFrame(() => {
              this._shapeTextEditingService["setEditing"](null);
            }));
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x358981) => {
          let _0x6a4747 = this._shapeTextEditingService["getEditing"]();
          _0x6a4747 &&
            _0x358981.some(
              (_0x4dab50) => _0x4dab50.drawingId === _0x6a4747.shapeId,
            ) &&
            this._shapeTextEditingService["setEditing"](null);
        }),
      ));
  }
  _initEditingParams() {
    this.disposeWithMe(
      this._shapeTextEditingService["editingParams$"].subscribe((_0x14a15c) => {
        let { scene: _0x2ec4dc } = this._context;
        if (this._lastEditingShapeKey) {
          let _0x2b3d2c = _0x2ec4dc.getObjectIncludeInGroup(
            this._lastEditingShapeKey,
          );
          _0x2b3d2c && _0x2b3d2c.setEditing(false);
        }
        if (_0x14a15c) {
          let _0x2295fc = !!_0x14a15c.visible,
            _0xa1f0ea = _0x2ec4dc.getObjectIncludeInGroup(_0x14a15c.shapeKey);
          (_0xa1f0ea &&
            (_0xa1f0ea.setEditing(_0x2295fc),
            (this._lastEditingShapeKey = _0x14a15c.shapeKey)),
            this._contextService["setContextValue"](
              a.FOCUSING_SHAPE_TEXT_EDITOR,
              _0x2295fc,
            ));
        } else
          ((this._lastEditingShapeKey = null),
            this._contextService["setContextValue"](
              a.FOCUSING_SHAPE_TEXT_EDITOR,
              false,
            ));
      }),
    );
  }
};
gt = M(
  [
    j(1, (0, a.Inject)(Y)),
    j(2, (0, a.Inject)(e.MobileShapeEditorService)),
    j(3, s.IDrawingManagerService),
    j(4, a.IContextService),
    j(5, (0, a.Inject)(i.SheetsShapeService)),
  ],
  gt,
);
let _t = class extends e.ShapeTextFloatMenuRenderControllerBase {
  constructor(
    _0x368cf3,
    _0x121b8f,
    _0x35cb30,
    _0x31a3cd,
    _0x5d0507,
    _0x48ef97,
    _0x2517d0,
    _0x5b39b9,
    _0x31b345,
    _0x59d6f1,
  ) {
    super(
      _0x368cf3,
      _0x121b8f,
      _0x35cb30,
      _0x31a3cd,
      _0x5d0507,
      _0x48ef97,
      _0x2517d0,
      _0x5b39b9,
      _0x31b345,
      _0x59d6f1,
      { componentKey: ne, editorUnitId: te },
    );
  }
};
_t = M(
  [
    j(1, (0, a.Inject)(h.DocSelectionManagerService)),
    j(2, (0, a.Inject)(g.DocCanvasPopManagerService)),
    j(3, (0, a.Inject)(g.DocSelectionRenderService)),
    j(4, a.ICommandService),
    j(5, (0, a.Inject)(g.DocEventManagerService)),
    j(6, (0, a.Inject)(e.ShapeTextHyperLinkPopupService)),
    j(7, (0, a.Inject)(h.DocInterceptorService)),
    j(8, (0, a.Inject)(g.DocRenderController)),
    j(9, (0, a.Inject)(Y)),
  ],
  _t,
);
let X = class extends a.Disposable {
  constructor(
    _0x5b8942,
    _0x20f329,
    _0x1e4ec3,
    _0x2897ca,
    _0x209e67,
    _0xc99307,
  ) {
    (super(),
      (this._commandService = _0x5b8942),
      (this._renderManagerService = _0x20f329),
      (this._drawingManagerService = _0x1e4ec3),
      (this._currentUniverService = _0x2897ca),
      (this._drawingRenderService = _0x209e67),
      (this._sheetDrawingShapeRenderController = _0xc99307),
      D(this, "_insertingShapeKeys", new Set()),
      this._initialize());
  }
  _initialize() {
    (this._drawingAddListener(),
      this._commandExecutedListener(),
      this._shapeUpdateListener());
  }
  _drawingAddListener() {
    this.disposeWithMe(
      this._drawingManagerService["add$"].subscribe((_0x1af2ee) => {
        this._insertShapes(_0x1af2ee);
      }),
    );
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x5dc8f2, _0xb01a3d) => {
        if (_0x5dc8f2.id === i.UpdateSheetsShapeDataMutation["id"]) {
          let {
              unitId: _0x741799,
              subUnitId: _0x4a723b,
              shapeId: _0x2242c5,
            } = _0x5dc8f2.params,
            _0x1bce45 = this._getSceneAndTransformerByDrawingSearch(_0x741799),
            _0x1ad72e = (0, s.getDrawingShapeKeyByDrawingSearch)({
              unitId: _0x741799,
              subUnitId: _0x4a723b,
              drawingId: _0x2242c5,
            }),
            _0x2d4a4f =
              _0x1bce45 == null
                ? undefined
                : _0x1bce45.scene["getObjectIncludeInGroup"](_0x1ad72e);
          _0x2d4a4f &&
            (this._sheetDrawingShapeRenderController["refreshShapeFillImage"](
              _0x2d4a4f,
            ),
            this._sheetDrawingShapeRenderController[
              "refreshFormulaPresentation"
            ](_0x2d4a4f, {
              unitId: _0x741799,
              subUnitId: _0x4a723b,
              shapeId: _0x2242c5,
            }),
            _0x2d4a4f.makeDirty(true));
          return;
        }
        if (_0x5dc8f2.id === i.InsertSheetsShapeMutation["id"]) {
          var _0x5b68c0;
          let {
              unitId: _0x20e462,
              subUnitId: _0x1cb069,
              shapeId: _0x4bc49f,
            } = _0x5dc8f2.params,
            _0x3c89d2 = this._getSceneAndTransformerByDrawingSearch(_0x20e462);
          if (_0x3c89d2 == null) return;
          let { scene: _0x4fc8d7 } = _0x3c89d2,
            _0x2aa77f = (0, s.getDrawingShapeKeyByDrawingSearch)({
              unitId: _0x20e462,
              subUnitId: _0x1cb069,
              drawingId: _0x4bc49f,
            }),
            _0x402150 = _0x4fc8d7.getObjectIncludeInGroup(_0x2aa77f);
          if (!(
            (_0x5b68c0 =
              this._renderManagerService["getRenderUnitById"](_0x20e462)) !=
              null &&
            _0x5b68c0.with(l.SheetSkeletonManagerService).getSkeleton(_0x1cb069)
          ))
            return false;
          if (_0x402150) return;
          if (_0xb01a3d != null && _0xb01a3d.fromChangeset) {
            queueMicrotask(() => {
              this._disposed ||
                this._insertShapes([
                  {
                    unitId: _0x20e462,
                    subUnitId: _0x1cb069,
                    drawingId: _0x4bc49f,
                  },
                ]);
            });
            return;
          }
          this._insertShapes([
            { unitId: _0x20e462, subUnitId: _0x1cb069, drawingId: _0x4bc49f },
          ]);
        }
      }),
    );
  }
  _shapeUpdateListener() {
    this.disposeWithMe(
      this._drawingManagerService["update$"].subscribe((_0x3e3e62) => {
        _0x3e3e62.forEach((_0x1b60f1) => {
          let {
              unitId: _0x34bcf3,
              subUnitId: _0x5d6080,
              drawingId: _0x9b9ec3,
            } = _0x1b60f1,
            _0x56ee1c =
              this._drawingManagerService["getDrawingByParam"](_0x1b60f1);
          if (_0x56ee1c == null) return;
          let {
            transform: _0x259400,
            drawingType: _0x484223,
            srcRect: _0x4b9aba,
            prstGeom: _0xe9010,
          } = _0x56ee1c;
          if (_0x484223 !== a.DrawingTypeEnum["DRAWING_SHAPE"]) return;
          let _0x16510e =
            this._getSceneAndTransformerByDrawingSearch(_0x34bcf3);
          if (_0x16510e == null) return;
          let { scene: _0x4d8170, transformer: _0x56a111 } = _0x16510e;
          if (_0x259400 == null) return true;
          let _0x1d7179 = (0, s.getDrawingShapeKeyByDrawingSearch)({
              unitId: _0x34bcf3,
              subUnitId: _0x5d6080,
              drawingId: _0x9b9ec3,
            }),
            _0x44ecb2 = _0x4d8170.getObjectIncludeInGroup(_0x1d7179);
          if (_0x44ecb2 == null) return true;
          (_0x44ecb2.setSrcRect(_0x4b9aba), _0x44ecb2.setPrstGeom(_0xe9010));
        });
      }),
    );
  }
  _insertShapes(_0x2153f8) {
    for (let _0x379365 of _0x2153f8) {
      var _0x125437;
      let {
          unitId: _0x91bc,
          subUnitId: _0x124f7a,
          drawingId: _0x46772f,
        } = _0x379365,
        _0x2f34f4 = this._getSceneAndTransformerByDrawingSearch(_0x91bc),
        _0x232ab2 =
          (_0x125437 = (0, d.getCurrentUnitInfo)(
            this._currentUniverService,
            _0x91bc,
          )) == null
            ? undefined
            : _0x125437.subUnitId;
      if (_0x2f34f4 == null || _0x232ab2 !== _0x124f7a) return;
      let _0x57fa79 = (0, s.getDrawingShapeKeyByDrawingSearch)({
        unitId: _0x91bc,
        subUnitId: _0x124f7a,
        drawingId: _0x46772f,
      });
      if (
        this._insertingShapeKeys["has"](_0x57fa79) ||
        _0x2f34f4.scene["getObjectIncludeInGroup"](_0x57fa79) != null
      )
        return;
      let _0x12512e =
        this._drawingManagerService["getDrawingByParam"](_0x379365);
      if (
        _0x12512e == null ||
        _0x12512e.drawingType !== a.DrawingTypeEnum["DRAWING_SHAPE"]
      )
        return;
      if ((0, n.isConnectorShape)((_0x12512e.data || {}).shapeType)) {
        let _0x1a525b = _0x12512e.transform;
        _0x1a525b &&
          (_0x12512e.transform = {
            ..._0x1a525b,
            rotateEnabled: false,
            resizeEnabled: false,
            borderEnabled: false,
          });
      }
      this._insertingShapeKeys["add"](_0x57fa79);
      try {
        this._sheetDrawingShapeRenderController["renderDrawingShape"](
          _0x12512e,
          _0x2f34f4.scene,
        );
      } finally {
        this._insertingShapeKeys["delete"](_0x57fa79);
      }
      queueMicrotask(() => {
        if (this._disposed) return;
        let _0x2f0e38 = (0, s.getDrawingShapeKeyByDrawingSearch)(_0x379365);
        if (!_0x2f34f4.scene["getObjectIncludeInGroup"](_0x2f0e38)) return;
        let _0x12691e =
          this._drawingManagerService["getDrawingByParam"](_0x379365);
        _0x12691e &&
          this._drawingManagerService["refreshTransform"]([_0x12691e]);
      });
    }
  }
  _getSceneAndTransformerByDrawingSearch(_0xab4bc4) {
    if (_0xab4bc4 == null) return;
    let _0x4437be = this._renderManagerService["getRenderUnitById"](_0xab4bc4),
      _0x1e70aa = _0x4437be == null ? undefined : _0x4437be.scene;
    return _0x1e70aa == null
      ? null
      : { scene: _0x1e70aa, transformer: _0x1e70aa.getTransformerByCreate() };
  }
};
X = M(
  [
    j(0, a.ICommandService),
    j(1, c.IRenderManagerService),
    j(2, s.IDrawingManagerService),
    j(3, a.IUniverInstanceService),
    j(4, (0, a.Inject)(d.DrawingRenderService)),
    j(5, (0, a.Inject)(N)),
  ],
  X,
);
const vt = {
  normal: {
    fill: n.ShapeDefaultConfig["cxnPointFill"],
    stroke: n.ShapeDefaultConfig["cxnPointStroke"],
    strokeWidth: n.ShapeDefaultConfig["cxnPointStrokeWidth"],
  },
  highlighted: { fill: "#4285f4", stroke: "#1a73e8", strokeWidth: 2 },
};
var yt = class extends c.Shape {
  constructor(_0x4ddc77, _0x52dc65) {
    (super(_0x4ddc77, _0x52dc65),
      D(this, "_targetShapeId", ""),
      D(this, "_cxnIndex", -1),
      D(this, "_unitId", ""),
      D(this, "_subUnitId", ""),
      D(this, "_isHighlighted", false),
      _0x52dc65 && this.setShapeProps(_0x52dc65));
  }
  getConnectionInfo() {
    return {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      shapeId: this._targetShapeId,
      cxnIndex: this._cxnIndex,
    };
  }
  setHighlighted(_0x11f4a4) {
    this._isHighlighted !== _0x11f4a4 &&
      ((this._isHighlighted = _0x11f4a4), this.makeDirty(true));
  }
  isHighlighted() {
    return this._isHighlighted;
  }
  setShapeProps(_0x15ad53) {
    (_0x15ad53.targetShapeId !== undefined &&
      (this._targetShapeId = _0x15ad53.targetShapeId),
      _0x15ad53.cxnIndex !== undefined && (this._cxnIndex = _0x15ad53.cxnIndex),
      _0x15ad53.unitId !== undefined && (this._unitId = _0x15ad53.unitId),
      _0x15ad53.subUnitId !== undefined &&
        (this._subUnitId = _0x15ad53.subUnitId),
      _0x15ad53.isHighlighted !== undefined &&
        (this._isHighlighted = _0x15ad53.isHighlighted),
      this.transformByState({
        width: _0x15ad53.width ?? n.ShapeDefaultConfig["cxnPointRadius"] * 2,
        height: _0x15ad53.height ?? n.ShapeDefaultConfig["cxnPointRadius"] * 2,
      }));
  }
  _draw(_0x22a3fd) {
    let _0x58cfd5 = this._isHighlighted ? vt.highlighted : vt.normal;
    c.Circle["drawWith"](_0x22a3fd, {
      radius: n.ShapeDefaultConfig["cxnPointRadius"],
      fill: _0x58cfd5.fill,
      stroke: _0x58cfd5.stroke,
      strokeWidth: _0x58cfd5.strokeWidth,
      evented: true,
    });
  }
};
let Z = class extends a.Disposable {
  constructor(_0x28d036, _0x14dc8c, _0x20a9fc, _0x4d04a4) {
    (super(),
      (this._context = _0x28d036),
      (this._renderManagerService = _0x14dc8c),
      (this._drawingManagerService = _0x20a9fc),
      (this._sheetsShapeService = _0x4d04a4),
      D(this, "_connectionSiteObjects", []),
      D(this, "_activeTargetShapeId", null),
      D(this, "_highlightedSiteIndex", -1),
      D(this, "_currentScene", null),
      D(this, "_unitId", ""),
      D(this, "_subUnitId", ""),
      D(this, "_draggingConnectorId", null));
  }
  startConnectionDetection(_0x3bc107, _0x284032, _0x4cb4a4, _0x3bcda5) {
    ((this._currentScene = _0x3bc107),
      (this._unitId = _0x284032),
      (this._subUnitId = _0x4cb4a4),
      (this._draggingConnectorId = _0x3bcda5));
  }
  updateConnectionDetection(_0x118191) {
    if (!this._currentScene) return null;
    let _0x2badbd = this._findShapeAtPoint(_0x118191);
    return _0x2badbd
      ? (this._activeTargetShapeId !== _0x2badbd.shapeId &&
          (this._clearConnectionSites(),
          this._showConnectionSites(_0x2badbd.shapeId, _0x2badbd.shapeModel),
          (this._activeTargetShapeId = _0x2badbd.shapeId)),
        this._findNearestConnectionSite(_0x118191))
      : (this._activeTargetShapeId !== null &&
          (this._clearConnectionSites(), (this._activeTargetShapeId = null)),
        null);
  }
  endConnectionDetection() {
    (this._clearConnectionSites(),
      (this._currentScene = null),
      (this._activeTargetShapeId = null),
      (this._highlightedSiteIndex = -1),
      (this._draggingConnectorId = null));
  }
  getConnectionRelation() {
    return this._activeTargetShapeId === null || this._highlightedSiteIndex < 0
      ? null
      : {
          shapeId: this._activeTargetShapeId,
          cxnIndex: this._highlightedSiteIndex,
        };
  }
  _findShapeAtPoint(_0x24851e) {
    let _0x23677d = this._drawingManagerService["getDrawingData"](
      this._unitId,
      this._subUnitId,
    );
    for (let _0x4d43d4 of Object.keys(_0x23677d)) {
      if (
        _0x4d43d4 === this._draggingConnectorId ||
        _0x23677d[_0x4d43d4].drawingType !== a.DrawingTypeEnum["DRAWING_SHAPE"]
      )
        continue;
      let _0x1e1354 = this._sheetsShapeService["getShapeModel"](
        this._unitId,
        this._subUnitId,
        _0x4d43d4,
      );
      if (
        !_0x1e1354 ||
        (0, n.isConnectorShape)(_0x1e1354.getShapeType()) ||
        _0x1e1354.getConnectionSiteList().length === 0 ||
        !this._currentScene
      )
        continue;
      let _0x51f8bf = (0, s.getDrawingShapeKeyByDrawingSearch)({
          unitId: this._unitId,
          subUnitId: this._subUnitId,
          drawingId: _0x4d43d4,
        }),
        _0x4c075d = this._currentScene["getObjectIncludeInGroup"](_0x51f8bf);
      if (!_0x4c075d) continue;
      let {
          left: _0x1d3b64,
          top: _0x39208d,
          width: _0x2d9d8d,
          height: _0x574a42,
        } = _0x4c075d.getRealBound(),
        _0x1ead3b = _0x1d3b64 + _0x2d9d8d / 2,
        _0x5b6372 = _0x39208d + _0x574a42 / 2,
        _0x2b8a0d = _0x4c075d.transform["getMatrix"](),
        _0x425693 = new c.Transform([
          _0x2b8a0d[0],
          _0x2b8a0d[1],
          _0x2b8a0d[2],
          _0x2b8a0d[3],
          _0x1ead3b,
          _0x5b6372,
        ]),
        _0x5c553c = _0x4c075d.getParent(),
        _0x3b60d5 = (
          _0x4c075d.isInGroup &&
          (_0x5c553c == null ? undefined : _0x5c553c.classType) ===
            c.RENDER_CLASS_TYPE["GROUP"]
            ? _0x5c553c.ancestorTransform["multiply"](_0x425693)
            : _0x425693
        )
          .invert()
          .applyPoint(_0x24851e),
        _0x42191a = _0x2d9d8d / 2,
        _0x156be4 = _0x574a42 / 2;
      if (
        _0x3b60d5.x >= -_0x42191a - 5 &&
        _0x3b60d5.x <= _0x42191a + 5 &&
        _0x3b60d5.y >= -_0x156be4 - 5 &&
        _0x3b60d5.y <= _0x156be4 + 5
      )
        return { shapeId: _0x4d43d4, shapeModel: _0x1e1354 };
    }
    return null;
  }
  _showConnectionSites(_0x4fad7e, _0x11fa1a) {
    if (!this._currentScene) return;
    let _0x382229 = (0, s.getDrawingShapeKeyByDrawingSearch)({
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: _0x4fad7e,
      }),
      _0x1c71af = this._currentScene["getObjectIncludeInGroup"](_0x382229);
    if (!_0x1c71af) return;
    let {
        left: _0x598716,
        top: _0x550c95,
        width: _0x2404a1,
        height: _0x162847,
      } = _0x1c71af.getRealBound(),
      _0x2d7262 = _0x598716 + _0x2404a1 / 2,
      _0x1b6826 = _0x550c95 + _0x162847 / 2,
      _0x33ce17 = _0x1c71af.transform["getMatrix"](),
      _0x24c36c = new c["Transform"]([
        _0x33ce17[0],
        _0x33ce17[1],
        _0x33ce17[2],
        _0x33ce17[3],
        _0x2d7262,
        _0x1b6826,
      ]),
      _0x16a5d1 = _0x1c71af.getParent(),
      _0xe9f7ac =
        _0x1c71af.isInGroup &&
        (_0x16a5d1 == null ? undefined : _0x16a5d1.classType) ===
          c.RENDER_CLASS_TYPE["GROUP"]
          ? _0x16a5d1.ancestorTransform["multiply"](_0x24c36c)
          : _0x24c36c;
    _0x11fa1a.updateContext({ width: _0x2404a1, height: _0x162847 });
    let _0xa1f5ce = _0x11fa1a.getConnectionSiteList();
    for (let _0x2b3bcd of _0xa1f5ce) {
      let _0x32d7e0 = _0x2b3bcd.x - _0x2404a1 / 2,
        _0x2a9c5f = _0x2b3bcd.y - _0x162847 / 2,
        _0x307de7 = _0xe9f7ac.applyPoint({ x: _0x32d7e0, y: _0x2a9c5f }),
        _0x26da09 = _0x307de7.x,
        _0x5de42a = _0x307de7.y,
        _0x6693a2 = new yt(
          "connection-site-" + _0x4fad7e + "-" + _0x2b3bcd.index,
          {
            left: _0x26da09 - n.ShapeDefaultConfig["cxnPointRadius"],
            top: _0x5de42a - n.ShapeDefaultConfig["cxnPointRadius"],
            targetShapeId: _0x4fad7e,
            cxnIndex: _0x2b3bcd.index,
            unitId: this._unitId,
            subUnitId: this._subUnitId,
            width: n.ShapeDefaultConfig["cxnPointRadius"] * 2,
            height: n.ShapeDefaultConfig["cxnPointRadius"] * 2,
            zIndex: c.DRAWING_OBJECT_LAYER_INDEX + 2,
            evented: false,
          },
        );
      (this._connectionSiteObjects["push"](_0x6693a2),
        this._currentScene["addObject"](
          _0x6693a2,
          c.DRAWING_OBJECT_LAYER_INDEX + 2,
        ));
    }
  }
  _findNearestConnectionSite(_0x293873) {
    let _0x2eed58 = null,
      _0x5aac17 = 1 / 0,
      _0x5183c3 = null;
    for (let _0x4ead4a of this._connectionSiteObjects) {
      let _0x1909cd = _0x4ead4a.left + n.ShapeDefaultConfig["cxnPointRadius"],
        _0x1aa4b8 = _0x4ead4a.top + n.ShapeDefaultConfig["cxnPointRadius"],
        _0x24dc4c = _0x293873.x - _0x1909cd,
        _0x37f934 = _0x293873.y - _0x1aa4b8,
        _0x506aa0 = Math.sqrt(_0x24dc4c * _0x24dc4c + _0x37f934 * _0x37f934);
      _0x506aa0 < _0x5aac17 &&
        ((_0x5aac17 = _0x506aa0),
        (_0x2eed58 = _0x4ead4a),
        (_0x5183c3 = { x: _0x1909cd, y: _0x1aa4b8 }));
    }
    let _0x508168 =
      _0x5aac17 <= 10 && _0x2eed58
        ? _0x2eed58.getConnectionInfo().cxnIndex
        : -1;
    if (_0x508168 !== this._highlightedSiteIndex) {
      for (let _0x3fda27 of this._connectionSiteObjects) {
        let _0x1c7681 = _0x3fda27.getConnectionInfo();
        _0x3fda27.setHighlighted(_0x1c7681.cxnIndex === _0x508168);
      }
      this._highlightedSiteIndex = _0x508168;
    }
    if (_0x5aac17 <= 10 && _0x2eed58 && _0x5183c3) {
      let _0x474e73 = _0x2eed58.getConnectionInfo(),
        _0x45bf42 = this._getConnectionSiteAngle(
          _0x474e73.shapeId,
          _0x474e73.cxnIndex,
        );
      return {
        shapeId: _0x474e73.shapeId,
        cxnIndex: _0x474e73.cxnIndex,
        unitId: _0x474e73.unitId,
        subUnitId: _0x474e73.subUnitId,
        worldPoint: _0x5183c3,
        angle: _0x45bf42,
      };
    }
    return null;
  }
  _getConnectionSiteAngle(_0x1000e3, _0x2bf140) {
    let _0x3f36c0 = this._sheetsShapeService["getShapeModel"](
      this._unitId,
      this._subUnitId,
      _0x1000e3,
    );
    if (!_0x3f36c0) return 0;
    let _0x181372 = this._drawingManagerService["getDrawingByParam"]({
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: _0x1000e3,
    });
    if (!(_0x181372 != null && _0x181372.transform)) return 0;
    let {
      width: _0x24b1cf = 0,
      height: _0x2045c4 = 0,
      flipX: _0x10b4b5 = false,
      flipY: _0x4f571a = false,
    } = _0x181372.transform;
    _0x3f36c0.updateContext({ width: _0x24b1cf, height: _0x2045c4 });
    let _0x1c6a99 = _0x3f36c0
      .getConnectionSiteList()
      .find((_0x7f29f9) => _0x7f29f9.index === _0x2bf140);
    if (!_0x1c6a99) return 0;
    let _0x3a386b = _0x1c6a99.ang / 60000;
    return (
      _0x10b4b5 && (_0x3a386b = 180 - _0x3a386b),
      _0x4f571a && (_0x3a386b = -_0x3a386b),
      (_0x3a386b = ((_0x3a386b % 360) + 360) % 360),
      _0x3a386b
    );
  }
  _clearConnectionSites() {
    for (let _0x3a0c64 of this._connectionSiteObjects) _0x3a0c64.dispose();
    ((this._connectionSiteObjects = []), (this._highlightedSiteIndex = -1));
  }
  dispose() {
    (this._clearConnectionSites(), super.dispose());
  }
};
Z = M(
  [
    j(1, (0, a.Inject)(c.IRenderManagerService)),
    j(2, (0, a.Inject)(s.IDrawingManagerService)),
    j(3, (0, a.Inject)(i.SheetsShapeService)),
  ],
  Z,
);
let bt = class extends a.Disposable {
  constructor(_0x36c6ba, _0x484e82, _0x170ab1, _0x1c2e03, _0x3350c4) {
    (super(),
      (this._sheetSkeletonService = _0x36c6ba),
      (this._sheetClipboardService = _0x484e82),
      (this._sheetDrawingService = _0x170ab1),
      (this._shapeService = _0x1c2e03),
      (this._groupCopyPasteController = _0x3350c4),
      D(this, "_copyInfo", undefined),
      this._initCopyPaste(),
      this._registerGroupFeaturePasteHook());
  }
  get _focusedDrawings() {
    return this._sheetDrawingService["getFocusDrawings"]();
  }
  _registerGroupFeaturePasteHook() {
    this._groupCopyPasteController["registerFeaturePasteHook"](
      ({
        fromUnitId: _0x3d9dfa,
        fromSubUnitId: _0x536b88,
        toUnitId: _0x2910ee,
        toSubUnitId: _0x488ccd,
        idMap: _0x203013,
      }) => {
        let _0x387f4f = [],
          _0x54f5a9 = [];
        for (let [_0x164233, _0x597935] of _0x203013.entries()) {
          let _0x47336f = this._shapeService["getShapeModel"](
            _0x3d9dfa,
            _0x536b88,
            _0x164233,
          );
          if (!_0x47336f) continue;
          let _0x5defce = _0x47336f.getShapeType(),
            _0x5177c7 = JSON.parse(JSON.stringify(_0x47336f.getShapeData()));
          if (_0x5177c7.relation) {
            var _0x10f419, _0x49d90c;
            let _0x5727fa =
                (_0x10f419 = _0x5177c7.relation["from"]) == null
                  ? undefined
                  : _0x10f419.shapeId,
              _0x2dab70 =
                (_0x49d90c = _0x5177c7.relation["to"]) == null
                  ? undefined
                  : _0x49d90c.shapeId,
              _0x1caf2c = !_0x5727fa || _0x203013.has(_0x5727fa),
              _0x6d8630 = !_0x2dab70 || _0x203013.has(_0x2dab70);
            (_0x1caf2c && _0x5727fa && _0x5177c7.relation["from"]
              ? (_0x5177c7.relation["from"] = {
                  ..._0x5177c7.relation["from"],
                  shapeId: _0x203013.get(_0x5727fa),
                })
              : (_0x5177c7.relation["from"] = undefined),
              _0x6d8630 && _0x2dab70 && _0x5177c7.relation["to"]
                ? (_0x5177c7.relation["to"] = {
                    ..._0x5177c7.relation["to"],
                    shapeId: _0x203013.get(_0x2dab70),
                  })
                : (_0x5177c7.relation["to"] = undefined));
          }
          (_0x387f4f.push({
            id: i.InsertSheetsShapeMutation["id"],
            params: {
              unitId: _0x2910ee,
              subUnitId: _0x488ccd,
              shapeId: _0x597935,
              shapeType: _0x5defce,
              shapeData: _0x5177c7,
            },
          }),
            _0x54f5a9.push({
              id: i.RemoveSheetsShapeMutation["id"],
              params: {
                unitId: _0x2910ee,
                subUnitId: _0x488ccd,
                shapeId: _0x597935,
              },
            }));
        }
        return { redos: _0x387f4f, undos: _0x54f5a9 };
      },
    );
  }
  _initCopyPaste() {
    this.disposeWithMe(
      this._sheetClipboardService["addClipboardHook"]({
        id: "sheets-shape-ui",
        onBeforeCopyFocusedObject: (_0x35eca2, _0xcfdce5, _0x115fe0) => {
          this._copyInfo = null;
          let _0x2ccada = this._focusedDrawings["filter"](
            (_0x5dba61) =>
              _0x5dba61.drawingType === a.DrawingTypeEnum["DRAWING_SHAPE"],
          );
          return _0x2ccada.length === 0
            ? false
            : ((this._copyInfo = {
                unitId: _0x35eca2,
                subUnitId: _0xcfdce5,
                copyType: _0x115fe0,
                drawings: _0x2ccada,
              }),
              true);
        },
        onBeforeCopy: (_0x4d3145, _0x5f0f46, _0x27ddb0, _0x1f6cfb) => {
          ((this._copyInfo = null),
            this._createCopyInfoByRange(
              _0x4d3145,
              _0x5f0f46,
              _0x27ddb0,
              _0x1f6cfb,
            ));
        },
        onPasteCells: (_0x52cc59, _0x2b240c, _0x19306a, _0x5f16db) => {
          if (!_0x5f16db.copyId || !_0x52cc59 || !this._copyInfo)
            return { redos: [], undos: [] };
          let { pasteType: _0x31be88 } = _0x5f16db;
          return _0x31be88 === l.PREDEFINED_HOOK_NAME["DEFAULT_PASTE"]
            ? this._generatePasteMutations(
                _0x2b240c,
                this._copyInfo["copyType"] === l.COPY_TYPE["CUT"],
              )
            : { redos: [], undos: [] };
        },
      }),
    );
  }
  _createCopyInfoByRange(_0x410462, _0xb905ea, _0x5702e8, _0x2c3760) {
    let _0x1bf0ef = this._sheetSkeletonService["getSkeleton"](
      _0x410462,
      _0xb905ea,
    );
    if (!_0x1bf0ef) return;
    let _0x305e17 = (0, o.attachRangeWithCoord)(_0x1bf0ef, _0x5702e8);
    if (!_0x305e17) return;
    let {
        startX: _0x2ebc44,
        endX: _0x2e81f1,
        startY: _0x4cfbc3,
        endY: _0x1ce800,
      } = _0x305e17,
      _0x32e0e1 = this._sheetDrawingService["getDrawingData"](
        _0x410462,
        _0xb905ea,
      ),
      _0x23a664 = [];
    for (let [_0x1efac4, _0x64b0b3] of Object.entries(_0x32e0e1)) {
      if (_0x64b0b3.drawingType !== a.DrawingTypeEnum["DRAWING_SHAPE"])
        continue;
      let { transform: _0x14a1be } = _0x64b0b3;
      if (!_0x14a1be) continue;
      let {
        left: _0x1cf0c3 = 0,
        top: _0x2227f4 = 0,
        width: _0x39cfdb = 0,
        height: _0x184129 = 0,
      } = _0x14a1be;
      _0x2ebc44 <= _0x1cf0c3 &&
        _0x2e81f1 >= _0x1cf0c3 + _0x39cfdb &&
        _0x4cfbc3 <= _0x2227f4 &&
        _0x1ce800 >= _0x2227f4 + _0x184129 &&
        _0x23a664.push(_0x64b0b3);
    }
    _0x23a664.length > 0 &&
      (this._copyInfo = {
        unitId: _0x410462,
        subUnitId: _0xb905ea,
        copyType: _0x2c3760,
        copyRange: _0x5702e8,
        drawings: _0x23a664,
      });
  }
  _generatePasteMutations(_0x3bf930, _0xa6ce92) {
    let {
        unitId: _0x5d435b,
        subUnitId: _0x3045c5,
        range: _0xd7585,
      } = _0x3bf930,
      _0x2ef633 = this._sheetSkeletonService["getSkeleton"](
        _0x5d435b,
        _0x3045c5,
      );
    if (!_0x2ef633) return { redos: [], undos: [] };
    let _0x6660c4 = (0, o.discreteRangeToRange)(_0xd7585),
      {
        unitId: _0x130816,
        subUnitId: _0x22aa01,
        copyRange: _0x301c66,
        drawings: _0x4fbf47,
      } = this._copyInfo,
      _0x40895f = this._sheetSkeletonService["getSkeleton"](
        _0x130816,
        _0x22aa01,
      );
    if (!_0x40895f) return { redos: [], undos: [] };
    let _0x175834;
    if (!_0x301c66) {
      let _0x448f31 = 1 / 0,
        _0x210163 = 1 / 0;
      for (let _0x13c51a of _0x4fbf47) {
        let { left: _0x668b69 = 0, top: _0x6d0515 = 0 } =
          _0x13c51a.transform ?? {};
        (_0x668b69 < _0x448f31 && (_0x448f31 = _0x668b69),
          _0x6d0515 < _0x210163 && (_0x210163 = _0x6d0515));
      }
      _0x448f31 !== 1 / 0 &&
        _0x210163 !== 1 / 0 &&
        (_0x175834 = { left: _0x448f31, top: _0x210163 });
    }
    let _0x4cf5b6 = new Map();
    if (!_0xa6ce92) {
      for (let _0x1f84e4 of _0x4fbf47)
        _0x4cf5b6.set(_0x1f84e4.drawingId, (0, a.generateRandomId)());
    }
    let _0x4efbda = [],
      _0xeb6506 = [];
    for (let _0x3ea04a of _0x4fbf47) {
      let {
        drawingId: _0x37bbe5,
        transform: _0x4336f7,
        sheetTransform: _0x19afc5,
      } = _0x3ea04a;
      if (!_0x4336f7 || !_0x19afc5) continue;
      let _0x9eb563 = this._updateTransform(
        { transform: _0x4336f7, sheetTransform: _0x19afc5 },
        { skeleton: _0x40895f, range: _0x301c66 },
        { skeleton: _0x2ef633, range: _0x6660c4 },
        _0x175834,
      );
      if (_0xa6ce92) {
        let { redos: _0x402558, undos: _0x16b159 } =
          this._generateCutPasteMutations({
            fromUnitId: _0x130816,
            fromSubUnitId: _0x22aa01,
            toUnitId: _0x5d435b,
            toSubUnitId: _0x3045c5,
            drawing: _0x3ea04a,
            newTransforms: _0x9eb563,
          });
        (_0x4efbda.push(..._0x402558), _0xeb6506.push(..._0x16b159));
        continue;
      }
      let { redos: _0xb845d, undos: _0x5cf24e } =
        this._generateCopyPasteMutations({
          toUnitId: _0x5d435b,
          toSubUnitId: _0x3045c5,
          drawing: _0x3ea04a,
          newTransforms: _0x9eb563,
          newDrawingId: _0x4cf5b6.get(_0x37bbe5),
          idMap: _0x4cf5b6,
        });
      (_0x4efbda.push(..._0xb845d), _0xeb6506.push(..._0x5cf24e));
    }
    return { redos: _0x4efbda, undos: _0xeb6506 };
  }
  _generateCutPasteMutations(_0x616e5b) {
    let {
        fromUnitId: _0x14d32f,
        fromSubUnitId: _0x11c41a,
        toUnitId: _0x496581,
        toSubUnitId: _0x45cd0c,
        drawing: _0x38fa3a,
        newTransforms: _0x3ed3ea,
      } = _0x616e5b,
      _0x318e2d = {
        ..._0x38fa3a,
        unitId: _0x496581,
        subUnitId: _0x45cd0c,
        transform: _0x3ed3ea.transform,
        sheetTransform: _0x3ed3ea.sheetTransform,
      };
    if (_0x496581 === _0x14d32f && _0x45cd0c === _0x11c41a) {
      let {
        redo: _0x1ac94a,
        undo: _0x3e5a21,
        objects: _0x3f36f8,
      } = this._sheetDrawingService["getBatchUpdateOp"]([_0x318e2d]);
      return {
        redos: [
          {
            id: p.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x496581,
              subUnitId: _0x45cd0c,
              type: p.DrawingApplyType["UPDATE"],
              op: _0x1ac94a,
              objects: _0x3f36f8,
            },
          },
        ],
        undos: [
          {
            id: p.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x496581,
              subUnitId: _0x45cd0c,
              type: p.DrawingApplyType["UPDATE"],
              op: _0x3e5a21,
              objects: _0x3f36f8,
            },
          },
        ],
      };
    } else {
      let _0x1a4e80 = this._sheetDrawingService["getBatchRemoveOp"]([
          _0x38fa3a,
        ]),
        _0x33843f = this._sheetDrawingService["getBatchAddOp"]([_0x318e2d]),
        _0x3ee2da = this._shapeService["getShapeModel"](
          _0x38fa3a.unitId,
          _0x38fa3a.subUnitId,
          _0x38fa3a.drawingId,
        );
      if (!_0x3ee2da) return { redos: [], undos: [] };
      let _0x4a0a9b = _0x3ee2da.getShapeType(),
        _0x4ef544 = JSON.parse(JSON.stringify(_0x3ee2da.getShapeData()));
      return {
        redos: [
          {
            id: p.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x14d32f,
              subUnitId: _0x11c41a,
              type: p.DrawingApplyType["REMOVE"],
              op: _0x1a4e80.redo,
              objects: _0x1a4e80.objects,
            },
          },
          {
            id: i.RemoveSheetsShapeMutation["id"],
            params: {
              unitId: _0x14d32f,
              subUnitId: _0x11c41a,
              shapeId: _0x38fa3a.drawingId,
            },
          },
          {
            id: p.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x496581,
              subUnitId: _0x45cd0c,
              type: p.DrawingApplyType["INSERT"],
              op: _0x33843f.redo,
              objects: _0x33843f.objects,
            },
          },
          {
            id: i.InsertSheetsShapeMutation["id"],
            params: {
              unitId: _0x496581,
              subUnitId: _0x45cd0c,
              shapeId: _0x38fa3a.drawingId,
              shapeType: _0x4a0a9b,
              shapeData: _0x4ef544,
            },
          },
        ],
        undos: [
          {
            id: p.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x14d32f,
              subUnitId: _0x11c41a,
              type: p.DrawingApplyType["INSERT"],
              op: _0x1a4e80.undo,
              objects: _0x1a4e80.objects,
            },
          },
          {
            id: i.InsertSheetsShapeMutation["id"],
            params: {
              unitId: _0x14d32f,
              subUnitId: _0x11c41a,
              shapeId: _0x38fa3a.drawingId,
              shapeType: _0x4a0a9b,
              shapeData: _0x4ef544,
            },
          },
          {
            id: p.SetDrawingApplyMutation["id"],
            params: {
              unitId: _0x496581,
              subUnitId: _0x45cd0c,
              type: p.DrawingApplyType["REMOVE"],
              op: _0x33843f.undo,
              objects: _0x33843f.objects,
            },
          },
          {
            id: i.RemoveSheetsShapeMutation["id"],
            params: {
              unitId: _0x496581,
              subUnitId: _0x45cd0c,
              shapeId: _0x38fa3a.drawingId,
            },
          },
        ],
      };
    }
  }
  _generateCopyPasteMutations(_0x5c5d08) {
    let {
        toUnitId: _0x560584,
        toSubUnitId: _0x4589dc,
        drawing: _0x44ca9d,
        newTransforms: _0x5addc4,
        newDrawingId: _0x4d9b66,
        idMap: _0x15d837,
      } = _0x5c5d08,
      _0xca0c96 = {
        ..._0x44ca9d,
        unitId: _0x560584,
        subUnitId: _0x4589dc,
        drawingId: _0x4d9b66,
        transform: _0x5addc4.transform,
        sheetTransform: _0x5addc4.sheetTransform,
      },
      {
        redo: _0x57dd09,
        undo: _0x256559,
        objects: _0xe75ddd,
      } = this._sheetDrawingService["getBatchAddOp"]([_0xca0c96]),
      _0xcd47d0 = this._shapeService["getShapeModel"](
        _0x44ca9d.unitId,
        _0x44ca9d.subUnitId,
        _0x44ca9d.drawingId,
      );
    if (!_0xcd47d0) return { redos: [], undos: [] };
    let _0x545cc5 = _0xcd47d0.getShapeType(),
      _0x34332d = JSON.parse(JSON.stringify(_0xcd47d0.getShapeData()));
    if (_0x34332d.relation) {
      var _0x4883bf, _0x2e2f9b;
      let _0x2080b1 =
          (_0x4883bf = _0x34332d.relation["from"]) == null
            ? undefined
            : _0x4883bf.shapeId,
        _0x4ecbc7 =
          (_0x2e2f9b = _0x34332d.relation["to"]) == null
            ? undefined
            : _0x2e2f9b.shapeId,
        _0x5e432c = !_0x2080b1 || _0x15d837.has(_0x2080b1),
        _0x178909 = !_0x4ecbc7 || _0x15d837.has(_0x4ecbc7);
      (_0x5e432c && _0x2080b1 && _0x34332d.relation["from"]
        ? (_0x34332d.relation["from"] = {
            ..._0x34332d.relation["from"],
            shapeId: _0x15d837.get(_0x2080b1),
          })
        : (_0x34332d.relation["from"] = undefined),
        _0x178909 && _0x4ecbc7 && _0x34332d.relation["to"]
          ? (_0x34332d.relation["to"] = {
              ..._0x34332d.relation["to"],
              shapeId: _0x15d837.get(_0x4ecbc7),
            })
          : (_0x34332d.relation["to"] = undefined));
    }
    return {
      redos: [
        {
          id: p.SetDrawingApplyMutation["id"],
          params: {
            unitId: _0x560584,
            subUnitId: _0x4589dc,
            type: p.DrawingApplyType["INSERT"],
            op: _0x57dd09,
            objects: _0xe75ddd,
          },
        },
        {
          id: i.InsertSheetsShapeMutation["id"],
          params: {
            unitId: _0x560584,
            subUnitId: _0x4589dc,
            shapeId: _0x4d9b66,
            shapeType: _0x545cc5,
            shapeData: _0x34332d,
          },
        },
      ],
      undos: [
        {
          id: p.SetDrawingApplyMutation["id"],
          params: {
            unitId: _0x560584,
            subUnitId: _0x4589dc,
            type: p.DrawingApplyType["REMOVE"],
            op: _0x256559,
            objects: _0xe75ddd,
          },
        },
        {
          id: i.RemoveSheetsShapeMutation["id"],
          params: {
            unitId: _0x560584,
            subUnitId: _0x4589dc,
            shapeId: _0x4d9b66,
          },
        },
      ],
    };
  }
  _updateTransform(_0x4186bf, _0xdb2f0, _0x439cae, _0x36d581) {
    let { range: _0x37b4ee, skeleton: _0x5cd972 } = _0xdb2f0,
      { range: _0x2a5480, skeleton: _0x80d1df } = _0x439cae,
      { transform: _0x37a0f1, sheetTransform: _0x5723b5 } = _0x4186bf,
      _0x1c9913 = { ..._0x37a0f1 };
    if (_0x37b4ee) {
      let _0x2bb5f5 = (0, o.attachRangeWithCoord)(_0x5cd972, _0x37b4ee),
        _0x57a05c = (0, o.attachRangeWithCoord)(_0x80d1df, _0x2a5480);
      if (_0x2bb5f5 && _0x57a05c) {
        let _0x7e5d55 = _0x57a05c.startX - _0x2bb5f5.startX,
          _0x1d9f14 = _0x57a05c.startY - _0x2bb5f5.startY;
        ((_0x1c9913.left = (_0x1c9913.left ?? 0) + _0x7e5d55),
          (_0x1c9913.top = (_0x1c9913.top ?? 0) + _0x1d9f14));
      }
    } else {
      let _0x3f5ecf = (0, o.attachRangeWithCoord)(_0x80d1df, _0x2a5480);
      if (_0x36d581 && _0x3f5ecf) {
        let _0x4ce7d2 = (_0x1c9913.left ?? 0) - _0x36d581.left,
          _0x40a288 = (_0x1c9913.top ?? 0) - _0x36d581.top;
        ((_0x1c9913.left = _0x3f5ecf.startX + _0x4ce7d2),
          (_0x1c9913.top = _0x3f5ecf.startY + _0x40a288));
      } else
        ((_0x1c9913.left = _0x3f5ecf == null ? undefined : _0x3f5ecf.startX),
          (_0x1c9913.top = _0x3f5ecf == null ? undefined : _0x3f5ecf.startY));
    }
    return {
      transform: _0x1c9913,
      sheetTransform:
        (0, p.transformToDrawingPosition)(_0x1c9913, _0x80d1df) ?? _0x5723b5,
    };
  }
};
bt = M(
  [
    j(0, (0, a.Inject)(o.SheetSkeletonService)),
    j(1, (0, a.Inject)(l.ISheetClipboardService)),
    j(2, (0, a.Inject)(p.ISheetDrawingService)),
    j(3, (0, a.Inject)(i.SheetsShapeService)),
    j(4, (0, a.Inject)(_.SheetsDrawingGroupCopyPasteController)),
  ],
  bt,
);
var xt = class extends c.Shape {
  constructor(_0x40a2cb, _0x3c1eb1) {
    (super(_0x40a2cb, _0x3c1eb1),
      D(this, "_shapeId", null),
      D(this, "_index", null),
      D(this, "_unitId", null),
      D(this, "_subUnitId", null),
      D(this, "_isStartConnectorPoint", false),
      _0x3c1eb1 && this.setShapeProps(_0x3c1eb1));
  }
  getDrawingSearch() {
    return {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: this._shapeId,
    };
  }
  setShapeProps(_0x2388ca) {
    (_0x2388ca.shapeId !== undefined && (this._shapeId = _0x2388ca.shapeId),
      _0x2388ca.unitId !== undefined && (this._unitId = _0x2388ca.unitId),
      _0x2388ca.subUnitId !== undefined &&
        (this._subUnitId = _0x2388ca.subUnitId),
      _0x2388ca.isStartConnectorPoint !== undefined &&
        (this._isStartConnectorPoint = _0x2388ca.isStartConnectorPoint),
      this.transformByState({
        width: _0x2388ca.width,
        height: _0x2388ca.height,
      }));
  }
  _draw(_0x36bb40) {
    c.Circle["drawWith"](_0x36bb40, {
      radius: n.ShapeDefaultConfig["cxnPointRadius"],
      fill: n.ShapeDefaultConfig["cxnPointFill"],
      stroke: n.ShapeDefaultConfig["cxnPointStroke"],
      strokeWidth: n.ShapeDefaultConfig["cxnPointStrokeWidth"],
      evented: true,
    });
  }
};
let St = class extends a.Disposable {
  constructor(
    _0x2c1508,
    _0x548aad,
    _0x1d008b,
    _0x2adf0a,
    _0x395846,
    _0x47e7d4,
    _0x37e21d,
    _0x4c85f8,
  ) {
    (super(),
      (this._context = _0x2c1508),
      (this._commandService = _0x548aad),
      (this._renderManagerService = _0x1d008b),
      (this._drawingManagerService = _0x2adf0a),
      (this._univerInstanceService = _0x395846),
      (this._sheetsShapeService = _0x47e7d4),
      (this._sheetShapeAdjustController = _0x37e21d),
      (this._sheetBasicShapeConnectionPointController = _0x4c85f8),
      D(this, "_activeShapeId", undefined),
      D(this, "_unitId", undefined),
      D(this, "_subUnitId", undefined),
      D(this, "_connectorObjects", []),
      D(this, "_baseDrawingRect", {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        flipX: false,
        flipY: false,
      }),
      D(this, "_activeShapeModel", undefined),
      D(this, "_isConnecting", false),
      D(this, "_isDrawingShapePointDown", false),
      D(this, "_hasReset", false),
      D(this, "_cxtHandlerPointerMove", undefined),
      D(this, "_cxtHandlerPointerUp", undefined),
      D(this, "_currentConnectionTarget", null),
      this._initialize());
  }
  _initialize() {
    (this._registerDrawingFocusChangeHandler(),
      this._registerDrawingMoveHandler());
  }
  _getDrawingRect() {
    if (!this._unitId || !this._subUnitId || !this._activeShapeId) return;
    let _0x375deb = {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        drawingId: this._activeShapeId,
      },
      { transform: _0x9c5b31 } =
        this._drawingManagerService["getDrawingByParam"](_0x375deb);
    if (_0x9c5b31)
      return {
        left: _0x9c5b31.left || 0,
        top: _0x9c5b31.top || 0,
        width: _0x9c5b31.width || 0,
        height: _0x9c5b31.height || 0,
        flipX: _0x9c5b31.flipX || false,
        flipY: _0x9c5b31.flipY || false,
        angle: _0x9c5b31.angle,
      };
  }
  _addShapeConnectorHandlerObjects() {
    if (
      this._unitId === undefined ||
      this._subUnitId === undefined ||
      this._activeShapeId === undefined
    )
      return;
    let _0x209a64 = this._renderManagerService["getRenderUnitById"](
      this._unitId,
    );
    if (
      !_0x209a64 ||
      !_0x209a64.with(l.SheetSkeletonManagerService).getCurrentSkeleton()
    )
      return;
    let { scene: _0x36b209 } = _0x209a64,
      _0x453668 = this._getDrawingRect();
    if (!_0x453668) return;
    let _0x248f99 = this._sheetsShapeService["getShapeModel"](
      this._unitId,
      this._subUnitId,
      this._activeShapeId,
    );
    if (!_0x248f99 || !(0, n.isConnectorShape)(_0x248f99.getShapeType()))
      return;
    let _0x4569ea = _0x248f99.getConnectorLinePoints();
    if (_0x4569ea.length < 2) return;
    let _0x59a497 = new n["ConnectorCoordinateTransform"](_0x453668),
      _0x485df6 = _0x4569ea[0],
      _0x4f65e2 = _0x4569ea[_0x4569ea.length - 1],
      _0x22e938 = _0x59a497.localToWorld(_0x485df6),
      _0x1badd5 = _0x59a497.localToWorld(_0x4f65e2);
    (this._addShapeConnectorHandlerObject(_0x36b209, { ..._0x22e938 }, true),
      this._addShapeConnectorHandlerObject(_0x36b209, { ..._0x1badd5 }, false));
  }
  _addShapeConnectorHandlerObject(_0x56a688, _0x25c5b5, _0x3ac36b) {
    if (
      this._activeShapeId === undefined ||
      this._unitId === undefined ||
      this._subUnitId === undefined
    )
      return;
    let _0x342adc =
        "connector-handler-" +
        this._unitId +
        "-" +
        this._subUnitId +
        "-" +
        this._activeShapeId +
        "-" +
        (_0x3ac36b ? "start" : "end"),
      _0x424242 = _0x56a688.getObjectIncludeInGroup(_0x342adc);
    if (_0x424242) {
      _0x424242.transformByState({
        left: _0x25c5b5.x - n.ShapeDefaultConfig["cxnPointRadius"],
        top: _0x25c5b5.y - n.ShapeDefaultConfig["cxnPointRadius"],
      });
      return;
    }
    let _0x3173e3 = new xt(_0x342adc, {
      left: _0x25c5b5.x - n.ShapeDefaultConfig["cxnPointRadius"],
      top: _0x25c5b5.y - n.ShapeDefaultConfig["cxnPointRadius"],
      shapeId: this._activeShapeId,
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      isStartConnectorPoint: _0x3ac36b,
      width: n.ShapeDefaultConfig["cxnPointRadius"] * 2,
      height: n.ShapeDefaultConfig["cxnPointRadius"] * 2,
      zIndex: c.DRAWING_OBJECT_LAYER_INDEX + 1,
      evented: true,
    });
    (this._connectorObjects["push"](_0x3173e3),
      this._attachConnectorObjectEvent(_0x3173e3, _0x56a688, _0x3ac36b),
      _0x56a688.addObject(_0x3173e3, c.DRAWING_OBJECT_LAYER_INDEX + 1));
  }
  _getScrollInfo(_0x3b2332, _0x288e2f) {
    var _0x149f9e;
    let _0x3d055f = { x: 0, y: 0 };
    if (!_0x3b2332 || !_0x288e2f) return _0x3d055f;
    let _0x23027a = this._renderManagerService["getRenderUnitById"](_0x3b2332);
    if (
      !_0x23027a ||
      !_0x23027a.with(l.SheetSkeletonManagerService).getSkeleton(_0x288e2f)
    )
      return _0x3d055f;
    let _0x2aab9c = _0x23027a.with(l.SheetScrollManagerService),
      _0x55647a =
        _0x2aab9c == null ? undefined : _0x2aab9c.getCurrentScrollState();
    if (!_0x55647a) return _0x3d055f;
    let _0x916edf =
      (_0x149f9e = this._univerInstanceService["getUnit"](_0x3b2332)) == null
        ? undefined
        : _0x149f9e.getSheetBySheetId(_0x288e2f);
    if (!_0x916edf) return _0x3d055f;
    let _0x27f80b = (0, l.getViewportByCell)(
      _0x55647a.sheetViewStartRow,
      _0x55647a.sheetViewStartColumn,
      _0x23027a.scene,
      _0x916edf,
    );
    return _0x27f80b
      ? { x: _0x27f80b.viewportScrollX, y: _0x27f80b.viewportScrollY }
      : _0x3d055f;
  }
  _getZoomRatio(_0x18ebce, _0x5b5c05) {
    var _0x3e8eb2;
    let _0xc07fe1 =
      (_0x3e8eb2 = this._univerInstanceService["getUnit"](_0x18ebce)) == null
        ? undefined
        : _0x3e8eb2.getSheetBySheetId(_0x5b5c05);
    return (_0xc07fe1 == null ? undefined : _0xc07fe1.getZoomRatio()) ?? 1;
  }
  _handleConnectorPointerUp(
    _0x4ccbb6,
    _0x140d58,
    _0x3c7cab,
    _0xe14f5c,
    _0x4a9c35,
  ) {
    (this._cxtHandlerPointerMove["unsubscribe"](),
      this._cxtHandlerPointerUp["unsubscribe"](),
      this._sheetShapeAdjustController["refreshAdjustControls"]());
    let _0x5e58cb = this._currentConnectionTarget;
    this._sheetBasicShapeConnectionPointController["endConnectionDetection"]();
    let _0x4f20f3 = this._getScrollInfo(this._unitId, this._subUnitId),
      _0x46a9cc = this._getZoomRatio(this._unitId, this._subUnitId),
      _0x163002 = {
        x: _0x3c7cab.offsetX / _0x46a9cc + _0x4f20f3.x,
        y: _0x3c7cab.offsetY / _0x46a9cc + _0x4f20f3.y,
      },
      _0x4b3782 = _0x5e58cb ? _0x5e58cb.worldPoint : _0x163002,
      _0x2b680a = _0xe14f5c
        ? this._activeShapeModel["getEndConnectInfo"]()
        : this._activeShapeModel["getStartConnectInfo"](),
      _0xe8336b = this._activeShapeModel["getShapeType"]();
    (_0x2b680a
      ? this._handleConnectedEndpointPointerUp(
          _0x2b680a,
          _0x4b3782,
          _0xe14f5c,
          _0x5e58cb,
          _0x4a9c35,
        )
      : this._handleFreeEndpointPointerUp(
          _0x140d58,
          _0x4b3782,
          _0xe14f5c,
          _0x5e58cb,
          _0x4a9c35,
          _0xe8336b,
        ),
      (this._isConnecting = false),
      (this._hasReset = false),
      (this._currentConnectionTarget = null),
      _0x4ccbb6.enableObjectsEvent());
  }
  _handleFreeEndpointPointerUp(
    _0x3d5b9c,
    _0x4c6a16,
    _0x2fd1ee,
    _0x496e09,
    _0x518a66,
    _0x3d6c1d,
  ) {
    let _0x80fcd4 =
        _0x3d6c1d === n.ShapeTypeEnum["Line"] ||
        _0x3d6c1d === n.ShapeTypeEnum["StraightConnector1"],
      _0x32e2a1 = _0x2fd1ee ? _0x4c6a16 : _0x3d5b9c,
      _0x15044e = _0x2fd1ee ? _0x3d5b9c : _0x4c6a16,
      _0x34596c = this._activeShapeModel["getConnectorLinePoints"](),
      _0x200804 = (0, n.isCurvedConnectorShape)(
        this._activeShapeModel["getShapeType"](),
      ),
      _0x3d0e04 = n.ConnectorCoordinateTransform["getBentTypeFromPoints"](
        _0x34596c,
        _0x200804,
      ),
      _0x1f4392 = _0x80fcd4
        ? n.ConnectorCoordinateTransform["computeStraightConnectorLayout"](
            _0x32e2a1,
            _0x15044e,
          )
        : n.ConnectorCoordinateTransform["computeConnectorResizeLayout"](
            _0x3d5b9c,
            _0x4c6a16,
            _0x2fd1ee,
            _0x3d0e04,
          );
    _0x496e09
      ? this._executeConnectionCommand(
          _0x1f4392,
          _0x496e09,
          _0x2fd1ee,
          _0x518a66,
        )
      : this._executeResizeCommand(_0x1f4392, _0x518a66);
  }
  _handleConnectedEndpointPointerUp(
    _0xdaae55,
    _0x6e5a93,
    _0x531be0,
    _0x5a4605,
    _0x532384,
  ) {
    let _0x1c15a6 = this._getConnectPointInfo(_0xdaae55);
    if (!_0x1c15a6) return;
    let _0x5b7f9f = _0x5a4605
        ? _0x5a4605.angle
        : this._calculateFreeEndpointAngle(_0x1c15a6.point, _0x6e5a93),
      _0x48b27e;
    if (_0x5a4605) {
      let _0x2618ad = this._drawingManagerService["getDrawingByParam"]({
        unitId: _0x5a4605.unitId,
        subUnitId: _0x5a4605.subUnitId,
        drawingId: _0x5a4605.shapeId,
      });
      if (_0x2618ad != null && _0x2618ad.transform) {
        let {
          left: _0x48b8e3 = 0,
          top: _0x1a8334 = 0,
          width: _0x430c87 = 0,
          height: _0x12642a = 0,
          angle: _0x37312a,
        } = _0x2618ad.transform;
        _0x48b27e = (0, n.getBasicShapeRotateBound)(
          {
            left: _0x48b8e3,
            top: _0x1a8334,
            width: _0x430c87,
            height: _0x12642a,
          },
          _0x37312a || 0,
        );
      } else
        _0x48b27e = {
          left: _0x6e5a93.x,
          top: _0x6e5a93.y,
          width: 0,
          height: 0,
        };
    } else
      _0x48b27e = { left: _0x6e5a93.x, top: _0x6e5a93.y, width: 0, height: 0 };
    let _0x5acff1 = { point: _0x6e5a93, angle: _0x5b7f9f, bounds: _0x48b27e },
      _0x2a3c26 = _0x531be0 ? _0x5acff1 : _0x1c15a6,
      _0x25ee48 = _0x531be0 ? _0x1c15a6 : _0x5acff1,
      _0x133d43 = this._activeShapeModel["getShapeType"](),
      _0x5ec028 = (0, n.routeConnectorLineShape)(
        _0x2a3c26,
        _0x25ee48,
        _0x133d43,
      );
    this._activeShapeModel["removeLinePoints"]();
    let _0x112721 = (0, n.computeConnectorRouteLayout)(_0x5ec028, _0x133d43);
    _0x5a4605
      ? this._executeConnectedRouteConnectionCommand(
          _0x112721,
          _0x5a4605,
          _0xdaae55,
          _0x531be0,
          _0x532384,
        )
      : this._executeConnectedRouteResizeCommand(
          _0x112721,
          _0xdaae55,
          _0x531be0,
          _0x532384,
        );
  }
  _executeConnectionCommand(_0x2197fd, _0x2cd88f, _0xec010c, _0x492a2d) {
    let _0x3f8a03 = this._activeShapeModel["getShapeData"]().relation,
      _0x2fbca1 = { ..._0x3f8a03 },
      _0x4ef70a = { shapeId: _0x2cd88f.shapeId, cxnIndex: _0x2cd88f.cxnIndex };
    _0xec010c ? (_0x2fbca1.from = _0x4ef70a) : (_0x2fbca1.to = _0x4ef70a);
    let _0x963d81 = this._activeShapeModel["getShapeType"](),
      _0x5d0fe0 = (0, n.computeConnectorRouteLayout)(
        _0x2197fd.worldPoints,
        _0x963d81,
      ),
      _0x2f100f = {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        connectorShapeId: this._activeShapeId,
        width: _0x2197fd.worldRect["width"],
        height: _0x2197fd.worldRect["height"],
        left: _0x2197fd.worldRect["left"],
        top: _0x2197fd.worldRect["top"],
        flipX: _0x2197fd.worldRect["flipX"] || false,
        flipY: _0x2197fd.worldRect["flipY"] || false,
        newAdjustValues: _0x5d0fe0.adjustValues,
        oldAdjustValues: _0x492a2d,
        oldRelation: _0x3f8a03,
        newRelation: _0x2fbca1,
        newLineType: _0x5d0fe0.lineType,
        oldLineType: _0x963d81,
      };
    this._commandService["executeCommand"](
      i.UpdateConnectorRelationCommand["id"],
      _0x2f100f,
    );
  }
  _executeResizeCommand(_0x4a9e12, _0x13957c) {
    let _0xcb6f48 = this._activeShapeModel["getShapeType"](),
      _0x580a71 = (0, n.computeConnectorRouteLayout)(
        _0x4a9e12.worldPoints,
        _0xcb6f48,
      ),
      _0x270969 = {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        shapeId: this._activeShapeId,
        width: _0x4a9e12.worldRect["width"],
        height: _0x4a9e12.worldRect["height"],
        left: _0x4a9e12.worldRect["left"],
        top: _0x4a9e12.worldRect["top"],
        flipX: _0x4a9e12.worldRect["flipX"] || false,
        flipY: _0x4a9e12.worldRect["flipY"] || false,
        angle: _0x4a9e12.worldRect["angle"] || 0,
        newAdjustValues: _0x580a71.adjustValues,
        oldAdjustValues: _0x13957c,
        newLineType: _0x580a71.lineType,
        oldLineType: _0xcb6f48,
      };
    this._commandService["executeCommand"](
      i.UpdateLineShapeResizeCommand["id"],
      _0x270969,
    );
  }
  _executeConnectedRouteConnectionCommand(
    _0x121166,
    _0x275586,
    _0x11f0bd,
    _0x439a61,
    _0x2707a8,
  ) {
    let _0x3ef14f = this._activeShapeModel["getShapeData"]().relation,
      _0x2849b7 = { ..._0x3ef14f },
      _0x5c82b5 = { shapeId: _0x275586.shapeId, cxnIndex: _0x275586.cxnIndex };
    _0x439a61
      ? ((_0x2849b7.from = _0x5c82b5), (_0x2849b7.to = _0x11f0bd))
      : ((_0x2849b7.from = _0x11f0bd), (_0x2849b7.to = _0x5c82b5));
    let _0x3d275e = {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      connectorShapeId: this._activeShapeId,
      width: _0x121166.worldRect["width"],
      height: _0x121166.worldRect["height"],
      left: _0x121166.worldRect["left"],
      top: _0x121166.worldRect["top"],
      flipX: _0x121166.worldRect["flipX"] || false,
      flipY: _0x121166.worldRect["flipY"] || false,
      oldAdjustValues: _0x2707a8,
      newAdjustValues: _0x121166.adjustValues,
      newLineType: _0x121166.lineType,
      rotation: _0x121166.rotation,
      oldRelation: _0x3ef14f,
      newRelation: _0x2849b7,
    };
    this._commandService["executeCommand"](
      i.UpdateConnectorRelationCommand["id"],
      _0x3d275e,
    );
  }
  _executeConnectedRouteResizeCommand(
    _0x35690c,
    _0x3791a0,
    _0x318688,
    _0x3aa145,
  ) {
    let _0x395202 = this._activeShapeModel["getShapeData"]().relation,
      _0xc2cb89 = {};
    _0x318688
      ? ((_0xc2cb89.to = _0x3791a0), (_0xc2cb89.from = undefined))
      : ((_0xc2cb89.from = _0x3791a0), (_0xc2cb89.to = undefined));
    let _0x5ee24b = {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      connectorShapeId: this._activeShapeId,
      width: _0x35690c.worldRect["width"],
      height: _0x35690c.worldRect["height"],
      left: _0x35690c.worldRect["left"],
      top: _0x35690c.worldRect["top"],
      flipX: _0x35690c.worldRect["flipX"] || false,
      flipY: _0x35690c.worldRect["flipY"] || false,
      oldAdjustValues: _0x3aa145,
      newAdjustValues: _0x35690c.adjustValues,
      newLineType: _0x35690c.lineType,
      rotation: _0x35690c.rotation,
      oldRelation: _0x395202,
      newRelation: _0xc2cb89,
    };
    this._commandService["executeCommand"](
      i.UpdateConnectorRelationCommand["id"],
      _0x5ee24b,
    );
  }
  _attachConnectorObjectEvent(_0x2e0da5, _0x69ec33, _0x41ca8d) {
    this.disposeWithMe(
      (0, a.toDisposable)(
        _0x2e0da5.onPointerDown$["subscribeEvent"]((_0x171cbe, _0xa3faec) => {
          let _0x7726ee = _0x2e0da5.getDrawingSearch();
          if (
            ((this._activeShapeModel = this._sheetsShapeService[
              "getShapeModel"
            ](_0x7726ee.unitId, _0x7726ee.subUnitId, _0x7726ee.drawingId)),
            !this._activeShapeModel)
          )
            return;
          let _0x83f4b9 = {};
          this._activeShapeModel["getAdjustNames"]().forEach((_0x246b4e) => {
            let _0x12f097 =
              this._activeShapeModel["getAdjustValueByName"](_0x246b4e);
            _0x12f097 !== undefined && (_0x83f4b9[_0x246b4e] = _0x12f097);
          });
          let _0x390beb = this._getDrawingRect();
          if (!_0x390beb) return;
          this._baseDrawingRect = { ..._0x390beb };
          let _0x147b93 = new n["ConnectorCoordinateTransform"](
              this._baseDrawingRect,
            ),
            _0x5e2799 = (0, s.getDrawingShapeKeyByDrawingSearch)({
              unitId: this._unitId,
              subUnitId: this._subUnitId,
              drawingId: this._activeShapeId,
            }),
            _0x4e25bb = _0x69ec33.getObjectIncludeInGroup(_0x5e2799);
          ((this._isConnecting = true),
            _0x69ec33.disableObjectsEvent(),
            this._sheetBasicShapeConnectionPointController[
              "startConnectionDetection"
            ](_0x69ec33, this._unitId, this._subUnitId, this._activeShapeId),
            (this._currentConnectionTarget = null));
          let _0x2cb95d = this._activeShapeModel["getConnectorLinePoints"](),
            _0x12340b = _0x2cb95d[0],
            _0x32d725 = _0x2cb95d[_0x2cb95d.length - 1],
            _0x43ce17 = _0x41ca8d
              ? _0x147b93.localToWorld(_0x32d725)
              : _0x147b93.localToWorld(_0x12340b);
          ((this._cxtHandlerPointerMove = _0x69ec33.onPointerMove$[
            "subscribeEvent"
          ]((_0x4dd9c0, _0x3db7c0) => {
            if (!this._isConnecting || !this._activeShapeModel) return;
            this._hasReset ||=
              (this._sheetShapeAdjustController["clearAdjustControls"](),
              this._activeShapeModel["clearAdjustValue"](),
              true);
            let _0x18f21e = this._getScrollInfo(this._unitId, this._subUnitId),
              _0x2e7a19 = this._getZoomRatio(this._unitId, this._subUnitId),
              _0xcd5982 = {
                x: _0x4dd9c0.offsetX / _0x2e7a19 + _0x18f21e.x,
                y: _0x4dd9c0.offsetY / _0x2e7a19 + _0x18f21e.y,
              },
              _0xd5ca7d =
                this._sheetBasicShapeConnectionPointController[
                  "updateConnectionDetection"
                ](_0xcd5982);
            if (_0xd5ca7d) {
              let {
                shapeId: _0x1118e2,
                unitId: _0x3231fe,
                subUnitId: _0x49a90b,
              } = _0xd5ca7d;
              if (_0x1118e2 && _0x3231fe && _0x49a90b) {
                let _0x2a0c63 = (0, s.getDrawingShapeKeyByDrawingSearch)({
                  unitId: _0x3231fe,
                  subUnitId: _0x49a90b,
                  drawingId: _0x1118e2,
                });
                _0xd5ca7d.angle =
                  (_0x69ec33.getObjectIncludeInGroup(_0x2a0c63).angle || 0) +
                  _0xd5ca7d.angle;
              }
            }
            this._currentConnectionTarget = _0xd5ca7d;
            let _0x30a060 = _0x41ca8d
              ? this._activeShapeModel["getEndConnectInfo"]()
              : this._activeShapeModel["getStartConnectInfo"]();
            if (_0x30a060) {
              this._handleConnectedEndpointMove(
                _0x30a060,
                _0xcd5982,
                _0x41ca8d,
                _0x4e25bb,
                _0x2e0da5,
              );
              return;
            }
            this._handleFreeEndpointMove(
              _0xcd5982,
              _0x43ce17,
              _0x41ca8d,
              _0x4e25bb,
              _0x2e0da5,
            );
          })),
            (this._cxtHandlerPointerUp = _0x69ec33.onPointerUp$[
              "subscribeEvent"
            ]((_0x1fd3fc, _0x776293) => {
              this._handleConnectorPointerUp(
                _0x69ec33,
                _0x43ce17,
                _0x1fd3fc,
                _0x41ca8d,
                _0x83f4b9,
              );
            })),
            _0xa3faec.stopPropagation());
        }),
      ),
    );
  }
  _handleBasicShapeUpdateConnectorLineShape(_0x257e59, _0x274262, _0x54addd) {
    let _0x54abf6 = this._sheetsShapeService["getBasicShapeRelation"](
      _0x257e59,
      _0x274262,
      _0x54addd,
    );
    if (!_0x54abf6 || _0x54abf6.length === 0) return;
    let _0xd67724 = this._renderManagerService["getRenderUnitById"](_0x257e59);
    if (!_0xd67724) return;
    let { scene: _0x221555 } = _0xd67724;
    for (let _0x40adf7 of _0x54abf6) {
      let _0xe5178 = _0x40adf7.lineShapeId,
        _0x27880b = this._sheetsShapeService["getShapeModel"](
          _0x257e59,
          _0x274262,
          _0xe5178,
        );
      if (!_0x27880b) continue;
      let _0x1bbd19 = _0x27880b.getStartConnectInfo(),
        _0x4cc6c8 = _0x27880b.getEndConnectInfo(),
        _0x4382b6 =
          (_0x1bbd19 == null ? undefined : _0x1bbd19.shapeId) === _0x54addd,
        _0x13be30 = (0, s.getDrawingShapeKeyByDrawingSearch)({
          unitId: _0x257e59,
          subUnitId: _0x274262,
          drawingId: _0xe5178,
        }),
        _0x108ac7 = _0x221555.getObjectIncludeInGroup(_0x13be30);
      if (!_0x108ac7) continue;
      let _0x3d1a2a = this._drawingManagerService["getDrawingByParam"]({
        unitId: _0x257e59,
        subUnitId: _0x274262,
        drawingId: _0xe5178,
      });
      _0x3d1a2a != null &&
        _0x3d1a2a.transform &&
        (_0x1bbd19 && _0x4cc6c8
          ? this._rerouteConnectorLine(
              _0x257e59,
              _0x274262,
              _0xe5178,
              _0x27880b,
              _0x1bbd19,
              _0x4cc6c8,
              _0x108ac7,
            )
          : this._moveConnectorWithShape(
              _0x257e59,
              _0x274262,
              _0xe5178,
              _0x27880b,
              _0x4382b6 ? _0x1bbd19 : _0x4cc6c8,
              _0x4382b6,
              _0x3d1a2a,
              _0x108ac7,
            ));
    }
  }
  _rerouteConnectorLine(
    _0x27672e,
    _0x3ba3cd,
    _0xa0adf2,
    _0x38ec14,
    _0x29e366,
    _0x453478,
    _0x54f87d,
  ) {
    let _0x12e6e8 = this._unitId,
      _0x22ec10 = this._subUnitId;
    ((this._unitId = _0x27672e), (this._subUnitId = _0x3ba3cd));
    let _0x3c5cc4 = this._getConnectPointInfo(_0x29e366),
      _0x34dc31 = this._getConnectPointInfo(_0x453478);
    if (
      ((this._unitId = _0x12e6e8),
      (this._subUnitId = _0x22ec10),
      !_0x3c5cc4 || !_0x34dc31)
    )
      return;
    let _0x358fa9 = _0x38ec14.getShapeType(),
      _0x1d38e2 = (0, n.routeConnectorLineShape)(
        _0x3c5cc4,
        _0x34dc31,
        _0x358fa9,
      );
    _0x1d38e2 && _0x38ec14.updateLinePoints(_0x1d38e2);
    let _0x543923 = (0, n.computeConnectorRouteLayout)(_0x1d38e2, _0x358fa9);
    (_0x543923.lineType !== _0x358fa9 &&
      _0x38ec14.changeShapeType(_0x543923.lineType),
      _0x38ec14.clearAdjustValue());
    for (let [_0x5b2842, _0x1add0a] of Object.entries(_0x543923.adjustValues))
      _0x38ec14.setAdjustValueByName(_0x5b2842, _0x1add0a);
    (_0x38ec14.updateContext({
      width: _0x543923.worldRect["width"],
      height: _0x543923.worldRect["height"],
    }),
      _0x54f87d.transformByState({
        flipX: _0x543923.worldRect["flipX"],
        flipY: _0x543923.worldRect["flipY"],
        left: _0x543923.worldRect["left"],
        top: _0x543923.worldRect["top"],
        width: _0x543923.worldRect["width"],
        height: _0x543923.worldRect["height"],
        angle: _0x543923.rotation,
      }),
      _0x38ec14.removeLinePoints());
  }
  _moveConnectorWithShape(
    _0x29c0d5,
    _0x21f8cf,
    _0x7cf1a9,
    _0x3eb9aa,
    _0x37ceb7,
    _0x306dd8,
    _0x211bd0,
    _0x3e6dc8,
  ) {
    let _0x554d36 = this._unitId,
      _0x5c4268 = this._subUnitId;
    ((this._unitId = _0x29c0d5), (this._subUnitId = _0x21f8cf));
    let _0x454306 = this._getConnectPointInfo(_0x37ceb7);
    if (((this._unitId = _0x554d36), (this._subUnitId = _0x5c4268), !_0x454306))
      return;
    let {
        left: _0xeac4ac = 0,
        top: _0x39be2e = 0,
        width: _0x37b7f5 = 0,
        height: _0x3c8905 = 0,
        flipX: _0x379619 = false,
        flipY: _0x5da613 = false,
      } = _0x211bd0.transform,
      _0x1762b4 = _0x3eb9aa.getConnectorLinePoints();
    if (_0x1762b4.length < 2) return;
    let _0x140ce3 = new n["ConnectorCoordinateTransform"]({
        left: _0xeac4ac,
        top: _0x39be2e,
        width: _0x37b7f5,
        height: _0x3c8905,
        flipX: _0x379619,
        flipY: _0x5da613,
      }),
      _0x5a1978 = _0x306dd8 ? _0x1762b4[_0x1762b4.length - 1] : _0x1762b4[0],
      _0x37a597 = _0x140ce3.localToWorld(_0x5a1978),
      _0xa5abc3 = n.ConnectorCoordinateTransform[
        "computeConnectorResizeLayout"
      ](_0x37a597, _0x454306.point, !_0x306dd8);
    (_0x3e6dc8.transformByState({
      flipX: _0xa5abc3.worldRect["flipX"],
      flipY: _0xa5abc3.worldRect["flipY"],
      left: _0xa5abc3.worldRect["left"],
      top: _0xa5abc3.worldRect["top"],
      width: _0xa5abc3.worldRect["width"],
      height: _0xa5abc3.worldRect["height"],
      angle: _0xa5abc3.worldRect["angle"],
    }),
      _0x3e6dc8.makeDirty(true));
  }
  _clearShapeConnectorHandlerObjects() {
    this._connectorObjects["length"] !== 0 &&
      (this._connectorObjects["forEach"]((_0x2e26b7) => {
        _0x2e26b7.dispose();
      }),
      (this._connectorObjects = []));
  }
  _registerDrawingMoveHandler() {
    let _0x4c13b8 = this._univerInstanceService["getCurrentTypeOfUnit$"](
      a.UniverInstanceType["UNIVER_SHEET"],
    );
    this.disposeWithMe(
      _0x4c13b8
        .pipe(
          (0, u.switchMap)((_0xdf3dd3) =>
            _0xdf3dd3
              ? _0xdf3dd3.activeSheet$["pipe"](
                  (0, u.switchMap)((_0x3a0b70) => {
                    if (!_0x3a0b70) return u.EMPTY;
                    let _0x2162fa = _0xdf3dd3.getUnitId(),
                      _0x2066fa =
                        this._renderManagerService["getRenderUnitById"](
                          _0x2162fa,
                        ),
                      _0x516346 =
                        _0x2066fa == null ? undefined : _0x2066fa.scene;
                    return _0x516346 ? (0, u.of)(_0x516346) : u.EMPTY;
                  }),
                )
              : u.EMPTY,
          ),
        )
        .subscribe((_0x3d0001) => {
          let _0xd826ec = _0x3d0001.getTransformerByCreate();
          (this.disposeWithMe(
            _0x3d0001.onPointerMove$["subscribeEvent"]((_0x300725) => {
              this._isDrawingShapePointDown &&
                this._activeShapeId &&
                this._clearShapeConnectorHandlerObjects();
            }),
          ),
            this.disposeWithMe(
              _0xd826ec.changeStart$["subscribe"]((_0xb51c2b) => {
                let { objects: _0x5311fd } = _0xb51c2b;
                (this._clearShapeConnectorHandlerObjects(),
                  _0x5311fd !== null &&
                    _0x5311fd.size === 1 &&
                    _0x5311fd.values().next().value instanceof k &&
                    (this._isDrawingShapePointDown = true));
              }),
            ),
            this.disposeWithMe(
              _0xd826ec.changing$["subscribe"]((_0x529d8f) => {
                this._isDrawingShapePointDown &&
                  this._clearShapeConnectorHandlerObjects();
              }),
            ),
            this.disposeWithMe(
              _0x3d0001.onPointerUp$["subscribeEvent"](() => {
                this._isDrawingShapePointDown &&
                  ((this._isDrawingShapePointDown = false),
                  this._addShapeConnectorHandlerObjects());
              }),
            ),
            this.disposeWithMe(
              _0xd826ec.changeEnd$["subscribe"](() => {
                this._unitId &&
                  this._subUnitId &&
                  this._activeShapeId &&
                  this._drawingManagerService["getDrawingByParam"]({
                    unitId: this._unitId,
                    subUnitId: this._subUnitId,
                    drawingId: this._activeShapeId,
                  }) &&
                  (this._clearShapeConnectorHandlerObjects(),
                  this._addShapeConnectorHandlerObjects());
              }),
            ));
        }),
    );
  }
  _registerDrawingFocusChangeHandler() {
    (this.disposeWithMe(
      this._drawingManagerService["focus$"].subscribe((_0x2c48dc) => {
        if (_0x2c48dc.length === 1) {
          let _0x3911ff = _0x2c48dc[0];
          if (_0x3911ff.drawingType === a.DrawingTypeEnum["DRAWING_SHAPE"]) {
            let _0x5e8250 = this._sheetsShapeService["getShapeModel"](
              _0x3911ff.unitId,
              _0x3911ff.subUnitId,
              _0x3911ff.drawingId,
            );
            if (
              _0x5e8250 &&
              (0, n.isConnectorShape)(_0x5e8250.getShapeType())
            ) {
              ((this._activeShapeId = _0x3911ff.drawingId),
                (this._unitId = _0x3911ff.unitId),
                (this._subUnitId = _0x3911ff.subUnitId),
                this._clearShapeConnectorHandlerObjects(),
                this._addShapeConnectorHandlerObjects());
              return;
            }
          }
        }
        ((this._activeShapeId = undefined),
          (this._unitId = undefined),
          (this._subUnitId = undefined),
          this._clearShapeConnectorHandlerObjects());
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["update$"].subscribe((_0x492d0f) => {
          if (_0x492d0f.length === 1) {
            var _0x1acfdc;
            let _0x4c672d = _0x492d0f[0],
              _0x1519ae =
                (_0x1acfdc =
                  this._drawingManagerService["getDrawingByParam"](
                    _0x4c672d,
                  )) == null
                  ? undefined
                  : _0x1acfdc.drawingType;
            _0x1519ae === a.DrawingTypeEnum["DRAWING_SHAPE"] &&
            _0x4c672d.drawingId === this._activeShapeId
              ? (this._clearShapeConnectorHandlerObjects(),
                this._addShapeConnectorHandlerObjects())
              : !this._activeShapeId &&
                _0x1519ae === a.DrawingTypeEnum["DRAWING_SHAPE"] &&
                this._handleBasicShapeUpdateConnectorLineShape(
                  _0x4c672d.unitId,
                  _0x4c672d.subUnitId,
                  _0x4c672d.drawingId,
                );
          }
        }),
      ),
      this.disposeWithMe(
        this._drawingManagerService["remove$"].subscribe((_0x2768bd) => {
          for (let _0x36a1a4 of _0x2768bd) {
            let { drawingId: _0x57e8c8 } = _0x36a1a4;
            if (this._activeShapeId === _0x57e8c8) {
              this._reset();
              return;
            }
          }
        }),
      ));
  }
  _handleConnectedEndpointMove(
    _0x43ac78,
    _0x277809,
    _0x3e3a19,
    _0x34c01b,
    _0x934f1e,
  ) {
    var _0x3e7810;
    if (!this._activeShapeModel) return;
    let _0x3ae57d = this._getConnectPointInfo(_0x43ac78);
    if (!_0x3ae57d) return;
    let _0x126982 = this._currentConnectionTarget
        ? this._currentConnectionTarget["worldPoint"]
        : _0x277809,
      _0x4309c3 = this._currentConnectionTarget
        ? this._currentConnectionTarget["angle"]
        : this._calculateFreeEndpointAngle(_0x3ae57d.point, _0x126982),
      _0x5dc38a;
    if (this._currentConnectionTarget) {
      let _0x325883 = this._drawingManagerService["getDrawingByParam"]({
        unitId: this._currentConnectionTarget["unitId"],
        subUnitId: this._currentConnectionTarget["subUnitId"],
        drawingId: this._currentConnectionTarget["shapeId"],
      });
      if (_0x325883 != null && _0x325883.transform) {
        let {
          left: _0x3f8bda = 0,
          top: _0x3b302f = 0,
          width: _0x512a75 = 0,
          height: _0x723b52 = 0,
          angle: _0x249129,
        } = _0x325883.transform;
        _0x5dc38a = (0, n.getBasicShapeRotateBound)(
          {
            left: _0x3f8bda,
            top: _0x3b302f,
            width: _0x512a75,
            height: _0x723b52,
          },
          _0x249129 || 0,
        );
      } else
        _0x5dc38a = {
          left: _0x126982.x,
          top: _0x126982.y,
          width: 0,
          height: 0,
        };
    } else
      _0x5dc38a = { left: _0x126982.x, top: _0x126982.y, width: 0, height: 0 };
    let _0x3e8ad0 = { point: _0x126982, angle: _0x4309c3, bounds: _0x5dc38a },
      _0x4b0cc3 = _0x3e3a19 ? _0x3e8ad0 : _0x3ae57d,
      _0x7293fb = _0x3e3a19 ? _0x3ae57d : _0x3e8ad0,
      _0x1ffe4d = this._activeShapeModel["getShapeType"](),
      _0x8eb058 = (0, n.routeConnectorLineShape)(
        _0x4b0cc3,
        _0x7293fb,
        _0x1ffe4d,
      );
    _0x8eb058 && this._activeShapeModel["updateLinePoints"](_0x8eb058);
    let _0x3f736b = (0, n.computeConnectorRouteLayout)(_0x8eb058, _0x1ffe4d);
    _0x3f736b.lineType !== _0x1ffe4d &&
      this._activeShapeModel["changeShapeType"](_0x3f736b.lineType);
    for (let [_0x8b01e, _0x3c5fb9] of Object.entries(_0x3f736b.adjustValues))
      this._activeShapeModel["setAdjustValueByName"](_0x8b01e, _0x3c5fb9);
    (this._activeShapeModel["updateContext"]({
      width: _0x3f736b.worldRect["width"],
      height: _0x3f736b.worldRect["height"],
    }),
      _0x34c01b.transformByState({
        flipX: _0x3f736b.worldRect["flipX"],
        flipY: _0x3f736b.worldRect["flipY"],
        left: _0x3f736b.worldRect["left"],
        top: _0x3f736b.worldRect["top"],
        width: _0x3f736b.worldRect["width"],
        height: _0x3f736b.worldRect["height"],
        angle: _0x3f736b.rotation,
      }),
      _0x34c01b.makeDirty(true));
    let _0x256da3 =
      ((_0x3e7810 = this._currentConnectionTarget) == null
        ? undefined
        : _0x3e7810.worldPoint) ?? _0x277809;
    _0x934f1e.transformByState({
      left: _0x256da3.x - n.ShapeDefaultConfig["cxnPointRadius"],
      top: _0x256da3.y - n.ShapeDefaultConfig["cxnPointRadius"],
    });
  }
  _handleFreeEndpointMove(
    _0x21b859,
    _0x54b593,
    _0x4ee393,
    _0x18559a,
    _0x10c77d,
  ) {
    var _0x1fea6f, _0x4cf0d5;
    let _0x4cd66c =
        ((_0x1fea6f = this._currentConnectionTarget) == null
          ? undefined
          : _0x1fea6f.worldPoint) ?? _0x21b859,
      _0xdfc6dd = n.ConnectorCoordinateTransform[
        "computeConnectorResizeLayout"
      ](_0x54b593, _0x4cd66c, _0x4ee393);
    _0x18559a.transformByState({
      flipX: _0xdfc6dd.worldRect["flipX"],
      flipY: _0xdfc6dd.worldRect["flipY"],
      left: _0xdfc6dd.worldRect["left"],
      top: _0xdfc6dd.worldRect["top"],
      width: _0xdfc6dd.worldRect["width"],
      height: _0xdfc6dd.worldRect["height"],
      angle: _0xdfc6dd.worldRect["angle"],
    });
    let _0x3a76a3 =
      ((_0x4cf0d5 = this._currentConnectionTarget) == null
        ? undefined
        : _0x4cf0d5.worldPoint) ?? _0x21b859;
    _0x10c77d.transformByState({
      left: _0x3a76a3.x - n.ShapeDefaultConfig["cxnPointRadius"],
      top: _0x3a76a3.y - n.ShapeDefaultConfig["cxnPointRadius"],
    });
  }
  _getConnectPointInfo(_0x522553) {
    if (!this._unitId || !this._subUnitId) return null;
    let { shapeId: _0x461e58, cxnIndex: _0x417965 } = _0x522553,
      _0x911fbe = this._sheetsShapeService["getShapeModel"](
        this._unitId,
        this._subUnitId,
        _0x461e58,
      );
    if (!_0x911fbe) return null;
    let _0x3d2d19 = this._drawingManagerService["getDrawingByParam"]({
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      drawingId: _0x461e58,
    });
    if (!(_0x3d2d19 != null && _0x3d2d19.transform)) return null;
    let {
      left: _0x3833c7 = 0,
      top: _0x1617f9 = 0,
      width: _0x439888 = 0,
      height: _0xa5b683 = 0,
      flipX: _0x2aa4b3 = false,
      flipY: _0x8d7272 = false,
      angle: _0xb395e7,
    } = _0x3d2d19.transform;
    _0x911fbe.updateContext({ width: _0x439888, height: _0xa5b683 });
    let _0x360d15 = _0x911fbe
      .getConnectionSiteList()
      .find((_0x5b498e) => _0x5b498e.index === _0x417965);
    if (!_0x360d15) return null;
    let _0x9b99f2 = _0x2aa4b3 ? _0x439888 - _0x360d15.x : _0x360d15.x,
      _0x339af5 = _0x8d7272 ? _0xa5b683 - _0x360d15.y : _0x360d15.y;
    if (_0xb395e7 !== 0 && _0xb395e7 != null) {
      let _0x382075 = (_0xb395e7 * Math.PI) / 180,
        _0x14e226 = Math.cos(_0x382075),
        _0x169ee2 = Math.sin(_0x382075),
        _0x28f79d = _0x439888 / 2,
        _0x5a58f8 = _0xa5b683 / 2,
        _0x4e5d93 = _0x9b99f2 - _0x28f79d,
        _0x1c8ee7 = _0x339af5 - _0x5a58f8;
      ((_0x9b99f2 = _0x28f79d + _0x4e5d93 * _0x14e226 - _0x1c8ee7 * _0x169ee2),
        (_0x339af5 =
          _0x5a58f8 + _0x4e5d93 * _0x169ee2 + _0x1c8ee7 * _0x14e226));
    }
    ((_0x9b99f2 += _0x3833c7), (_0x339af5 += _0x1617f9));
    let _0x310996 = _0x360d15.ang / 60000;
    (_0x2aa4b3 && (_0x310996 = 180 - _0x310996),
      _0x8d7272 && (_0x310996 = -_0x310996),
      (_0x310996 += _0xb395e7 || 0),
      (_0x310996 = ((_0x310996 % 360) + 360) % 360));
    let _0x33ee4f = (0, n.getBasicShapeRotateBound)(
      { left: _0x3833c7, top: _0x1617f9, width: _0x439888, height: _0xa5b683 },
      _0xb395e7 || 0,
    );
    return {
      point: { x: _0x9b99f2, y: _0x339af5 },
      angle: _0x310996,
      bounds: _0x33ee4f,
    };
  }
  _calculateFreeEndpointAngle(_0x20f235, _0xea24d6) {
    let _0x35b0a9 = _0xea24d6.x - _0x20f235.x,
      _0xccb4a = _0xea24d6.y - _0x20f235.y;
    return Math.abs(_0x35b0a9) >= Math.abs(_0xccb4a)
      ? _0x35b0a9 >= 0
        ? 180
        : 0
      : _0xccb4a >= 0
        ? 270
        : 90;
  }
  _reset() {
    ((this._activeShapeId = undefined),
      (this._unitId = undefined),
      (this._subUnitId = undefined),
      this._clearShapeConnectorHandlerObjects());
  }
  dispose() {
    (this._clearShapeConnectorHandlerObjects(), super.dispose());
  }
};
St = M(
  [
    j(1, a.ICommandService),
    j(2, c.IRenderManagerService),
    j(3, s.IDrawingManagerService),
    j(4, a.IUniverInstanceService),
    j(5, (0, a.Inject)(i.SheetsShapeService)),
    j(6, (0, a.Inject)(P)),
    j(7, (0, a.Inject)(Z)),
  ],
  St,
);
let Ct = class extends a.Disposable {
  constructor(_0x5d02e3, _0x479109, _0xb40fe2) {
    (super(),
      (this._sheetPrintInterceptorService = _0x5d02e3),
      (this._drawingManagerService = _0x479109),
      (this._shapeRenderController = _0xb40fe2),
      this._initPrinting());
  }
  _initPrinting() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService["interceptor"].intercept(
        this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
          .PRINTING_COMPONENT_COLLECT,
        {
          handler: (_0x1652a9, _0x4ba0df, _0x568b9c) => {
            var _0x9de695;
            let {
                unitId: _0x28a92c,
                subUnitId: _0x5e5c6b,
                scene: _0x5bb29a,
                resourceCollector: _0x4dd5cb,
              } = _0x4ba0df,
              _0x20cedc =
                (_0x9de695 =
                  this._drawingManagerService["getDrawingDataForUnit"](
                    _0x28a92c,
                  )) == null
                  ? undefined
                  : _0x9de695[_0x5e5c6b];
            return (
              _0x20cedc == null ||
                _0x20cedc.order["forEach"]((_0x6deffb) => {
                  let _0x414a8c = _0x20cedc.data[_0x6deffb];
                  _0x414a8c.drawingType ===
                    a.DrawingTypeEnum["DRAWING_SHAPE"] &&
                    !_0x414a8c.hidden &&
                    this._shapeRenderController["renderDrawingShape"](
                      _0x414a8c,
                      _0x5bb29a,
                      { resourceCollector: _0x4dd5cb },
                    );
                }),
              _0x568b9c(_0x1652a9)
            );
          },
        },
      ),
    );
  }
};
Ct = M(
  [
    j(0, (0, a.Inject)(l.SheetPrintInterceptorService)),
    j(1, s.IDrawingManagerService),
    j(2, (0, a.Inject)(N)),
  ],
  Ct,
);
let wt = class extends a.Disposable {
  constructor(_0x4e6dcb, _0x446c8b, _0x45dfd4) {
    (super(),
      (this._commandService = _0x4e6dcb),
      (this._localeService = _0x446c8b),
      (this._sheetPermissionCheckController = _0x45dfd4),
      this._initPermission());
  }
  _initPermission() {
    this.disposeWithMe(
      this._commandService["beforeCommandExecuted"]((_0x53c248) => {
        let _0x1aa53f, _0x5eb22d;
        if (
          _0x53c248.id === i.InsertShapeCommand["id"] ||
          _0x53c248.id === i.SetShapeDrawingDataCommand["id"] ||
          _0x53c248.id === i.UpdateConnectorRelationCommand["id"]
        ) {
          let _0x326e44 = _0x53c248.params;
          ((_0x1aa53f = _0x326e44.unitId), (_0x5eb22d = _0x326e44.subUnitId));
        }
        !_0x1aa53f ||
          !_0x5eb22d ||
          this._sheetPermissionCheckController["permissionCheckWithoutRange"](
            {
              workbookTypes: [o.WorkbookEditablePermission],
              worksheetTypes: [o.WorksheetEditPermission],
            },
            _0x1aa53f,
            _0x5eb22d,
          ) ||
          this._sheetPermissionCheckController["blockExecuteWithoutPermission"](
            this._localeService["t"]("sheets-shape-ui.permission.editErr"),
          );
      }),
    );
  }
};
wt = M(
  [
    j(0, (0, a.Inject)(a.ICommandService)),
    j(1, (0, a.Inject)(a.LocaleService)),
    j(2, (0, a.Inject)(o.SheetPermissionCheckController)),
  ],
  wt,
);
let Q = class extends a.Disposable {
  constructor(
    _0x2641f8,
    _0xad1dc3,
    _0x8a74a7,
    _0xc15db3,
    _0x590663,
    _0x2ec29f,
    _0xbf9159,
    _0x38b80b,
    _0x33f379,
    _0xa7631f,
    _0x7df282,
  ) {
    (super(),
      (this._univerInstanceService = _0x2641f8),
      (this._sidebarService = _0xad1dc3),
      (this._menuManagerService = _0x8a74a7),
      (this._sheetsShapeService = _0xc15db3),
      (this._localeService = _0x590663),
      (this._commandService = _0x2ec29f),
      (this._drawingManagerService = _0xbf9159),
      (this._sheetCanvasPopManagerService = _0x38b80b),
      (this._contextService = _0x33f379),
      (this._renderManagerService = _0xa7631f),
      (this._shapeTextEditingService = _0x7df282),
      D(this, "_sidebarDisposable", null),
      D(this, "_activeShapeInfo", null),
      D(this, "_isOpenedShapeEditPanel", false),
      D(this, "_shapeEditPanelVersion", 0),
      D(this, "_shapePopupMenuDisposable", null),
      D(this, "_disposePopups", []),
      this._initMenu(),
      this.disposeWithMe(
        this._univerInstanceService["getCurrentTypeOfUnit$"](
          a.UniverInstanceType["UNIVER_SHEET"],
        ).subscribe((_0xeefdde) => {
          if (!_0xeefdde) {
            var _0x2d9836;
            (_0x2d9836 = this._sidebarDisposable) == null ||
              _0x2d9836.dispose();
          }
        }),
      ),
      this._registerOperations(),
      this.initShapePopupMenu(),
      this.disposeWithMe(
        this._shapeTextEditingService["editingParams$"].subscribe(
          (_0x57b72c) => {
            _0x57b72c && this._clearPopups();
          },
        ),
      ));
  }
  _initMenu() {
    this._menuManagerService["mergeMenu"](Ye);
  }
  initShapePopupMenu() {
    this._shapePopupMenuDisposable ||= this.disposeWithMe(
      (0, e.bindRenderTransformerLifecycle)(
        this._renderManagerService,
        a.UniverInstanceType["UNIVER_SHEET"],
        (_0x14abd3) => this._popupMenuListener(_0x14abd3),
      ),
    );
  }
  _getShapeInfo(_0x36a5f6, _0x2bb395, _0xa5891e) {
    let _0x37638c = this._sheetsShapeService["getShapeTypeById"](
        _0x36a5f6,
        _0x2bb395,
        _0xa5891e,
      ),
      _0x11070d = this._sheetsShapeService["getShapeDataById"](
        _0x36a5f6,
        _0x2bb395,
        _0xa5891e,
      );
    return _0x37638c !== undefined && _0x11070d !== undefined
      ? {
          shapeData: _0x11070d,
          shapeId: _0xa5891e,
          shapeType: _0x37638c,
          unitId: _0x36a5f6,
          subUnitId: _0x2bb395,
          version: this._shapeEditPanelVersion,
          disableShapeOption: false,
        }
      : null;
  }
  _clearPopups() {
    (this._disposePopups["forEach"]((_0x5e3aac) => _0x5e3aac.dispose()),
      (this._disposePopups["length"] = 0));
  }
  _popupMenuListener(_0x12df3d) {
    let _0x4296eb = new a["DisposableCollection"]();
    return (
      _0x4296eb.add(
        _0x12df3d.createControl$["subscribe"](() => {
          let _0x972feb = _0x12df3d.getSelectedObjectMap();
          if (
            (this._clearPopups(),
            this._isOpenedShapeEditPanel || _0x972feb.size > 1)
          )
            return;
          let _0x175ace = _0x972feb.values().next().value;
          if (!_0x175ace) return;
          let _0xa9b71d = this._drawingManagerService["getDrawingOKey"](
            _0x175ace.oKey,
          );
          if (
            !_0xa9b71d ||
            _0xa9b71d.drawingType !== a.DrawingTypeEnum["DRAWING_SHAPE"]
          )
            return;
          let {
              unitId: _0x4bd536,
              subUnitId: _0x73e4b5,
              drawingId: _0x12101f,
              drawingType: _0x9d7c95,
            } = _0xa9b71d,
            _0x5ccb80 = this._getShapeInfo(_0x4bd536, _0x73e4b5, _0x12101f);
          if (!_0x5ccb80) return;
          this._contextService["setContextValue"](
            a.FOCUSING_COMMON_DRAWINGS,
            true,
          );
          let _0x58e39a =
              this._renderManagerService["getRenderUnitById"](_0x4bd536),
            _0x28ae60 = (
              (_0x58e39a == null ? undefined : _0x58e39a.isMainScene) === false
                ? _0x58e39a.with(l.SheetCanvasPopManagerService)
                : this._sheetCanvasPopManagerService
            ).attachPopupToObject(_0x175ace, {
              componentKey: z,
              direction: "vertical-center",
              offset: [0, e.SHEET_DOC_SHAPE_FLOATING_TOOLBAR_TOP_OFFSET],
              extraProps: {
                unitId: _0x4bd536,
                subUnitId: _0x73e4b5,
                drawingId: _0x12101f,
                drawingType: _0x9d7c95,
                shapeType: _0x5ccb80.shapeType,
                shapeData: _0x5ccb80.shapeData,
              },
            });
          (this._disposePopups["push"](this.disposeWithMe(_0x28ae60)),
            this._drawingManagerService["getFocusDrawings"]().find(
              (_0x1ff0bd) =>
                _0x1ff0bd.unitId === _0x4bd536 &&
                _0x1ff0bd.subUnitId === _0x73e4b5 &&
                _0x1ff0bd.drawingId === _0x12101f,
            ) ||
              this._drawingManagerService["focusDrawing"]([
                {
                  unitId: _0x4bd536,
                  subUnitId: _0x73e4b5,
                  drawingId: _0x12101f,
                },
              ]));
        }),
      ),
      _0x4296eb.add(
        _0x12df3d.clearControl$["subscribe"](() => {
          (this._clearPopups(),
            this._contextService["setContextValue"](
              a.FOCUSING_COMMON_DRAWINGS,
              false,
            ),
            this._drawingManagerService["focusDrawing"](null));
        }),
      ),
      _0x4296eb.add(
        _0x12df3d.changing$["subscribe"](() => {
          this._clearPopups();
        }),
      ),
      _0x4296eb.add(
        _0x12df3d.changeStart$["subscribe"](() => {
          this._clearPopups();
        }),
      ),
      (0, a.toDisposable)(() => {
        (_0x4296eb.dispose(), this._clearPopups());
      })
    );
  }
  _registerOperations() {
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x1166d6) => {
        if (_0x1166d6.id === V.id) {
          let {
            unitId: _0x50692a,
            subUnitId: _0x36b225,
            drawingId: _0x1d412a,
          } = _0x1166d6.params;
          ((this._shapeEditPanelVersion += 1),
            (this._activeShapeInfo = this._getShapeInfo(
              _0x50692a,
              _0x36b225,
              _0x1d412a,
            )),
            this._clearPopups(),
            this._openShapeEditPanel());
        }
        if (
          (_0x1166d6.id === Qe.id &&
            ((this._activeShapeInfo = null), this._closeShapeEditPanel()),
          _0x1166d6.id === i.UpdateSheetsShapeDataMutation["id"])
        ) {
          let {
            unitId: _0x4f796b,
            subUnitId: _0x2e6fd1,
            shapeId: _0x3ac069,
          } = _0x1166d6.params;
          if (
            this._activeShapeInfo &&
            this._activeShapeInfo["shapeId"] === _0x3ac069
          ) {
            let _0x4efa9e = this._getShapeInfo(_0x4f796b, _0x2e6fd1, _0x3ac069);
            _0x4efa9e &&
              ((this._shapeEditPanelVersion += 1),
              (_0x4efa9e.version = this._shapeEditPanelVersion),
              (this._activeShapeInfo = _0x4efa9e),
              this._isOpenedShapeEditPanel && this._openShapeEditPanel());
          }
        }
      }),
    ),
      this.disposeWithMe(
        this._drawingManagerService["focus$"].subscribe((_0x4b22f4) => {
          if (this._isOpenedShapeEditPanel === false) return;
          if (_0x4b22f4.length === 0) {
            ((this._activeShapeInfo = null), this._closeShapeEditPanel());
            return;
          }
          if (
            _0x4b22f4.length === 1 &&
            _0x4b22f4[0].drawingType === a.DrawingTypeEnum["DRAWING_SHAPE"] &&
            ((this._shapeEditPanelVersion += 1),
            (this._activeShapeInfo = this._getShapeInfo(
              _0x4b22f4[0].unitId,
              _0x4b22f4[0].subUnitId,
              _0x4b22f4[0].drawingId,
            )),
            this._activeShapeInfo)
          ) {
            this._openShapeEditPanel();
            return;
          }
          let _0x51ec18 = _0x4b22f4.filter(
            (_0x192ff1) =>
              _0x192ff1.drawingType === a.DrawingTypeEnum["DRAWING_SHAPE"],
          );
          if (_0x4b22f4.length > 1 && _0x51ec18.length === _0x4b22f4.length) {
            if (
              ((this._shapeEditPanelVersion += 1),
              (this._activeShapeInfo = this._getShapeInfo(
                _0x4b22f4[0].unitId,
                _0x4b22f4[0].subUnitId,
                _0x4b22f4[0].drawingId,
              )),
              this._activeShapeInfo)
            ) {
              this._openShapeEditPanel();
              return;
            }
          } else {
            if (
              ((this._shapeEditPanelVersion += 1),
              (this._activeShapeInfo = this._getShapeInfo(
                _0x4b22f4[0].unitId,
                _0x4b22f4[0].subUnitId,
                _0x4b22f4[0].drawingId,
              )),
              this._activeShapeInfo)
            ) {
              ((this._activeShapeInfo["disableShapeOption"] = true),
                this._openShapeEditPanel());
              return;
            }
          }
          this._closeShapeEditPanel();
        }),
      ));
  }
  _openShapeEditPanel() {
    this._activeShapeInfo &&
      ((this._sidebarDisposable = this._sidebarService["open"]({
        id: L,
        header: {
          title: this._localeService["t"]("sheets-shape-ui.formatShape"),
        },
        width: 388,
        children: { label: L, ...this._activeShapeInfo },
        onClose: () => {
          (this._drawingManagerService["focusDrawing"](null),
            this._contextService["setContextValue"](
              a.FOCUSING_COMMON_DRAWINGS,
              false,
            ),
            (this._sidebarDisposable = null));
        },
      })),
      (this._isOpenedShapeEditPanel = true));
  }
  _closeShapeEditPanel() {
    ((this._isOpenedShapeEditPanel = false),
      this._sidebarService["close"](L),
      (this._sidebarDisposable = null),
      this._contextService["setContextValue"](
        a.FOCUSING_COMMON_DRAWINGS,
        false,
      ),
      this._drawingManagerService["focusDrawing"](null));
  }
};
Q = M(
  [
    j(0, a.IUniverInstanceService),
    j(1, (0, a.Inject)(t.ISidebarService)),
    j(2, t.IMenuManagerService),
    j(3, (0, a.Inject)(i.SheetsShapeService)),
    j(4, (0, a.Inject)(a.LocaleService)),
    j(5, a.ICommandService),
    j(6, s.IDrawingManagerService),
    j(7, (0, a.Inject)(l.SheetCanvasPopManagerService)),
    j(8, a.IContextService),
    j(9, c.IRenderManagerService),
    j(10, (0, a.Inject)(Y)),
  ],
  Q,
);
let $ = class extends a.Plugin {
  constructor(_0xcb7a27 = $e, _0x58a35f, _0x417efc, _0x406bc1, _0x271d71) {
    (super(),
      (this._config = _0xcb7a27),
      (this._injector = _0x58a35f),
      (this._commandService = _0x417efc),
      (this._configService = _0x406bc1),
      (this._renderManagerService = _0x271d71));
    let { ..._0x1eb9f9 } = (0, a.merge)({}, $e, this._config);
    (this._configService["setConfig"]("sheets-shape-ui.config", _0x1eb9f9),
      this._initCommands());
  }
  onRendered() {
    (this._renderManagerService["registerRenderModule"](
      a.UniverInstanceType["UNIVER_DOC"],
      [_t],
    ),
      (0, a.touchDependencies)(this._injector, [[Q], [X], [N], [Ct]]));
  }
  onSteady() {
    this._injector["get"](Q).initShapePopupMenu();
  }
  onReady() {
    ([[Z], [P], [bt]].forEach((_0x518b0b) => this._injector["add"](_0x518b0b)),
      (0, a.touchDependencies)(this._injector, [[bt], [P]]),
      this._renderManagerService["registerRenderModule"](
        a.UniverInstanceType["UNIVER_SHEET"],
        [Z],
      ),
      this._renderManagerService["registerRenderModule"](
        a.UniverInstanceType["UNIVER_SHEET"],
        [ut],
      ),
      this._renderManagerService["registerRenderModule"](
        a.UniverInstanceType["UNIVER_SHEET"],
        [St],
      ),
      this._renderManagerService["registerRenderModule"](
        a.UniverInstanceType["UNIVER_SHEET"],
        [gt],
      ));
  }
  onStarting() {
    (this._injector["add"]([lt]), this._injector["get"](lt));
    let _0x80ccf = this._injector;
    ([[Q], [X], [N], [Ct], [J], [Y], [mt], [U], [wt], [ft]].forEach(
      (_0x5be92f) => _0x80ccf.add(_0x5be92f),
    ),
      (0, a.touchDependencies)(this._injector, [
        [Q],
        [X],
        [N],
        [J],
        [Y],
        [mt],
        [U],
        [wt],
        [ft],
      ]));
  }
  _initCommands() {
    [I, S, Qe, V, re, F, H, ae].forEach((_0x3b2362) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x3b2362)),
    );
  }
};
(D($, "type", a.UniverInstanceType["UNIVER_SHEET"]),
  D($, "pluginName", "SHEET_SHAPE_UI_PLUGIN"),
  D($, "packageName", Xe),
  D($, "version", Ze),
  ($ = M(
    [
      (0, a.DependentOn)(
        m.UniverLicensePlugin,
        h.UniverDocsPlugin,
        s.UniverDrawingPlugin,
        d.UniverDrawingUIPlugin,
        c.UniverRenderEnginePlugin,
        o.UniverSheetsPlugin,
        g.UniverDocsUIPlugin,
        p.UniverSheetsDrawingPlugin,
        r.UniverShapeEditorPlugin,
        _.UniverSheetsDrawingUIPlugin,
        i.UniverSheetsShapePlugin,
        l.UniverSheetsUIPlugin,
        e.UniverShapeEditorUIPlugin,
      ),
      j(1, (0, a.Inject)(a.Injector)),
      j(2, a.ICommandService),
      j(3, a.IConfigService),
      j(4, c.IRenderManagerService),
    ],
    $,
  )),
  (exports.SheetsShapeUIContextualRibbonSchema = Je),
  (exports.SheetsShapeUIMenuSchema = Ye),
  Object.defineProperty(exports, "UniverSheetsShapeUIPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
