import {
  ApplyPdfHistoryCommand as _0x225482,
  ApplyPdfMutationBatchMutation as _0x35f2fc,
  DEFAULT_PDF_TABLE_THEME_PRESETS as _0x268707,
  PDF_A4_PAGE_HEIGHT_PT as _0x51f27c,
  PDF_A4_PAGE_WIDTH_PT as _0x17b396,
  PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA as _0x2ede44,
  PdfAnnotationType as _0x3296d0,
  PdfAssetType as _0x2c2aa0,
  PdfDisplayOpType as _0xb49658,
  PdfEditorMutationSource as _0x51aaaa,
  PdfExportDisposition as _0x3fc2a6,
  PdfListKind as _0x3d82dc,
  PdfListPresetId as _0x485cad,
  PdfObjectType as _0x4b26cb,
  PdfSemanticRole as _0xbf9c6,
  PdfTableCellVerticalAlign as _0x5a5fa7,
  PdfTextAnchor as _0x48552e,
  createPdfDefaultDividerInsertionBbox as _0x15fb11,
  createPdfDefaultListInsertionBbox as _0x38f46e,
  createPdfDefaultParagraphInsertionBbox as _0x278c94,
  createPdfDefaultTableInsertionLayout as _0x157809,
  createPdfDefaultTextBoxInsertionBbox as _0x4dfee1,
  createPdfEditorSession as _0x454300,
  createPdfNativeTextHitTargets as _0x44d95e,
  createPdfPage as _0x255631,
  createPdfTableGrid as _0x44fb3f,
  emuToPt as _0x5605ac,
  isPdfEditorDividerObject as _0x292ae0,
  normalizePdfEditorManagedImageResource as _0x10e01d,
  pdfAddAnnotationAction as _0x1d2ee7,
  pdfAddDividerAction as _0xbfc91b,
  pdfAddImageAction as _0x27b3e2,
  pdfAddListAction as _0x1a1d5a,
  pdfAddParagraphAction as _0x4c4f58,
  pdfAddTableAction as _0x4fa112,
  pdfAddTextBoxAction as _0x27f3d3,
  pdfChangeListLevelAction as _0x337588,
  pdfChangeListStyleAction as _0x407d4a,
  pdfCropImageAction as _0x327b6f,
  pdfDeleteObjectsAction as _0x557a73,
  pdfEditTextAction as _0x29e47e,
  pdfInsertListItemAction as _0x483668,
  pdfInsertPageAction as _0x5dcff7,
  pdfInsertParagraphBlockAction as _0x21133a,
  pdfMoveObjectAction as _0x3554b9,
  pdfPromoteNativeTextAction as _0x57c673,
  pdfRemoveListItemAction as _0x1bdc95,
  pdfRemoveManagedImageAction as _0x4b99a5,
  pdfRemoveParagraphBlockAction as _0x80566f,
  pdfReorderObjectAction as _0x57a143,
  pdfResizeTableAction as _0x4aff85,
  pdfSetListStartNumberAction as _0x5515c5,
  pdfUpdateManagedImageAction as _0x1ac010,
  pdfUpdateObjectAppearanceAction as _0xc08f6b,
  pdfUpdateObjectStateAction as _0x328c7e,
  pdfUpdateObjectStrokeAction as _0x43fe9f,
  pdfUpdateParagraphStyleAction as _0x293ce9,
  pdfUpdateTableCellStyleAction as _0x4965fa,
  pdfUpdateTableThemeAction as _0x37f58a,
  pdfUpdateTextRangeStyleAction as _0xf1d0ee,
  pdfUpdateTextStyleAction as _0x1fb11d,
  ptToEmu as _0x28bed2,
} from "@univerjs-pro/pdfs";
import {
  FBaseInitialable as _0x1dadfb,
  FEnum as _0x439863,
  FUniver as _0x4164c2,
} from "@univerjs/core/facade";
import {
  HorizontalAlign as _0x21dc2a,
  ICommandService as _0x57e569,
  IUndoRedoService as _0x565171,
  IUniverInstanceService as _0x16413e,
  ImageSourceType as _0x383dbe,
  Inject as _0x392e1f,
  Injector as _0x18838b,
  Tools as _0x284d5b,
  UniverInstanceType as _0x52b090,
  generateRandomId as _0x10ea46,
} from "@univerjs/core";
var Xe = class extends _0x439863 {
  get PdfAnnotationType() {
    return _0x3296d0;
  }
  get PdfListKind() {
    return _0x3d82dc;
  }
  get PdfListPresetId() {
    return _0x485cad;
  }
  get PdfTextAnchor() {
    return _0x48552e;
  }
  get PdfTableCellVerticalAlign() {
    return _0x5a5fa7;
  }
};
_0x439863.extend(Xe);
function T(_0x44bf6a) {
  if (_0x44bf6a == null) return _0x44bf6a;
  let {
    width: _0x331487,
    dash: _0x38c0b4,
    dashPhase: _0x562b9d,
    ..._0xafd247
  } = _0x44bf6a;
  return {
    ..._0xafd247,
    ...(_0x331487 === undefined ? {} : { width: _0x28bed2(_0x331487) }),
    ...(_0x38c0b4 === undefined
      ? {}
      : { dash: _0x38c0b4.map((_0x18997a) => _0x28bed2(_0x18997a)) }),
    ...(_0x562b9d === undefined ? {} : { dashPhase: _0x28bed2(_0x562b9d) }),
  };
}
function E(_0x4984e6) {
  if (!_0x4984e6) return;
  let {
    width: _0x4ae61d,
    dash: _0x26b386,
    dashPhase: _0x223679,
    ..._0x132089
  } = _0x4984e6;
  return {
    ..._0x132089,
    ...(_0x4ae61d === undefined ? {} : { width: _0x5605ac(_0x4ae61d) }),
    ...(_0x26b386 === undefined
      ? {}
      : { dash: _0x26b386.map((_0x413ec5) => _0x5605ac(_0x413ec5)) }),
    ...(_0x223679 === undefined ? {} : { dashPhase: _0x5605ac(_0x223679) }),
  };
}
function D(_0x988111, _0x456eec, _0x2ffd4f, _0x126cc8) {
  let _0x284e59 = _0x988111.getUnitId(),
    _0x3f360e = Date.now(),
    _0x4443c0 = _0x454300({
      id: _0x284e59 + ":facade",
      documentId: _0x284e59,
      now: _0x3f360e,
    }),
    _0x4e1c8f = _0x2ffd4f.execute(
      {
        documentId: _0x284e59,
        editState: _0x988111.getEditState(),
        selection: _0x4443c0.selection,
        baseRevision: _0x988111.getEditState().revision,
        now: _0x3f360e,
        createId: (_0x46388b) =>
          _0x284e59 + ":" + _0x46388b + ":" + _0x10ea46(12),
      },
      _0x126cc8,
    ),
    _0x2ebf5f = _0x4e1c8f.batch;
  if (!_0x2ebf5f)
    throw Error(
      "PDF action " +
        _0x2ffd4f.id +
        "\x20did\x20not\x20produce\x20a\x20durable\x20mutation\x20batch.",
    );
  if (
    !_0x456eec
      .get(_0x57e569)
      .syncExecuteCommand(_0x35f2fc.id, { unitId: _0x284e59, batch: _0x2ebf5f })
  )
    throw Error("PDF\x20action\x20" + _0x2ffd4f.id + " was rejected.");
  return (Ze(_0x988111, _0x456eec, _0x2ebf5f), _0x4e1c8f);
}
function Ze(_0x506681, _0x230b41, _0x21c399) {
  let _0x248f1b = _0x21c399.mutations["map"](
    (_0x5791b3) => _0x5791b3.inverse,
  ).reverse();
  if (!_0x248f1b.every(Boolean)) return;
  let _0x1f1136 = _0x506681.getUnitId();
  (_0x230b41.get(_0x16413e).focusUnit(_0x1f1136),
    _0x230b41
      .get(_0x565171)
      .pushUndoRedo({
        unitID: _0x1f1136,
        id: _0x21c399.id,
        undoMutations: [
          {
            id: _0x225482.id,
            params: {
              unitId: _0x1f1136,
              source: _0x51aaaa.UNDO,
              mutations: _0x248f1b,
              atomic: _0x21c399.atomic,
            },
          },
        ],
        redoMutations: [
          {
            id: _0x225482.id,
            params: {
              unitId: _0x1f1136,
              source: _0x51aaaa.REDO,
              mutations: _0x21c399.mutations,
              atomic: _0x21c399.atomic,
            },
          },
        ],
      }));
}
var O = class {
  constructor(_0x38918f, _0x242a17, _0x2af0de, _0x4ecc27, _0x4c6890) {
    ((this._model = _0x38918f),
      (this._pageId = _0x242a17),
      (this._objectId = _0x2af0de),
      (this._objectType = _0x4ecc27),
      (this._injector = _0x4c6890));
  }
  getId() {
    return this._objectId;
  }
  getType() {
    return this._objectType;
  }
  getData() {
    return _0x284d5b.deepClone(this._getCurrentObject());
  }
  getTransform() {
    let _0x5c1b4b = this._getCurrentObject(),
      [_0x502c0e, _0x8f57f7, _0x2848ef, _0x42b4bc] = _0x5c1b4b.bbox,
      _0x5ae49c = _0x5c1b4b.transform,
      _0x1312bc = _0x5ae49c
        ? Qe((Math.atan2(_0x5ae49c[1], _0x5ae49c[0]) * 180) / Math.PI)
        : 0,
      _0x323465 = _0x5ae49c
        ? _0x5ae49c[0] * _0x5ae49c[3] - _0x5ae49c[1] * _0x5ae49c[2]
        : 1;
    return {
      left: _0x5605ac(_0x502c0e),
      top: _0x5605ac(_0x8f57f7),
      width: _0x5605ac(_0x2848ef - _0x502c0e),
      height: _0x5605ac(_0x42b4bc - _0x8f57f7),
      rotation: _0x1312bc,
      flipX: false,
      flipY: _0x323465 < 0,
    };
  }
  setTransform(_0x59ae0e) {
    (k(_0x59ae0e.left, "left"),
      k(_0x59ae0e.top, "top"),
      A(_0x59ae0e.width, "width"),
      A(_0x59ae0e.height, "height"),
      k(_0x59ae0e.rotation, "rotation"));
    let _0x523224 = [
      _0x28bed2(_0x59ae0e.left),
      _0x28bed2(_0x59ae0e.top),
      _0x28bed2(_0x59ae0e.left + _0x59ae0e.width),
      _0x28bed2(_0x59ae0e.top + _0x59ae0e.height),
    ];
    return (this._setPlacement(_0x523224, $e(_0x523224, _0x59ae0e)), this);
  }
  setPosition(_0x8af3d1, _0x113851) {
    return (
      k(_0x8af3d1, "left"),
      k(_0x113851, "top"),
      this.setTransform({
        ...this.getTransform(),
        left: _0x8af3d1,
        top: _0x113851,
      })
    );
  }
  setSize(_0x42ce6c, _0x166a14) {
    return (
      A(_0x42ce6c, "width"),
      A(_0x166a14, "height"),
      this.setTransform({
        ...this.getTransform(),
        width: _0x42ce6c,
        height: _0x166a14,
      })
    );
  }
  setRotation(_0x2125fc) {
    return (
      k(_0x2125fc, "rotation"),
      this.setTransform({ ...this.getTransform(), rotation: _0x2125fc })
    );
  }
  setVisible(_0x14ca24) {
    return (
      D(this._model, this._injector, _0x328c7e, {
        pageId: this._pageId,
        objectId: this._objectId,
        visible: _0x14ca24,
      }),
      this
    );
  }
  setLocked(_0x4d2db2) {
    return (
      D(this._model, this._injector, _0x328c7e, {
        pageId: this._pageId,
        objectId: this._objectId,
        locked: _0x4d2db2,
      }),
      this
    );
  }
  bringToFront() {
    let _0x1c30b6 = this._getPageZIndexes().reduce(
      (_0x40bb03, _0x4790fd) => Math.max(_0x40bb03, _0x4790fd),
      0,
    );
    return (this._setZIndex(_0x1c30b6 + 1), this);
  }
  sendToBack() {
    return (this._setZIndex(0), this);
  }
  bringForward() {
    return (this._reorderBy(1), this);
  }
  sendBackward() {
    return (this._reorderBy(-1), this);
  }
  remove() {
    (this._getCurrentObject(),
      D(this._model, this._injector, _0x557a73, {
        pageId: this._pageId,
        objectIds: [this._objectId],
      }));
  }
  _getCurrentObject() {
    if (
      !this._model["getMaterializedDocument"]().pages["some"](
        (_0x3d876f) => _0x3d876f.id === this._pageId,
      )
    )
      throw Error("PDF page " + this._pageId + " no longer exists.");
    let _0x586997 =
      this._model["getEditState"]().overlayObjects[this._objectId];
    if (!_0x586997 || _0x586997.pageId !== this._pageId)
      throw Error(
        "PDF element " +
          this._objectId +
          "\x20no\x20longer\x20exists\x20on\x20page\x20" +
          this._pageId +
          ".",
      );
    return _0x586997.object;
  }
  _setPlacement(_0x747836, _0x4416e0) {
    D(this._model, this._injector, _0x3554b9, {
      pageId: this._pageId,
      objectId: this._objectId,
      bbox: _0x747836,
      transform: _0x4416e0,
    });
  }
  _setZIndex(_0x576c27) {
    (this._getCurrentObject(),
      D(this._model, this._injector, _0x57a143, {
        pageId: this._pageId,
        objectId: this._objectId,
        zIndex: _0x576c27,
      }));
  }
  _reorderBy(_0x349bce) {
    (this._getCurrentObject(),
      D(this._model, this._injector, _0x57a143, {
        pageId: this._pageId,
        objectId: this._objectId,
        delta: _0x349bce,
      }));
  }
  _getPageZIndexes() {
    return Object.values(this._model["getEditState"]().overlayObjects)
      .filter((_0x3b2163) => _0x3b2163.pageId === this._pageId)
      .map((_0x13e070) => _0x13e070.zIndex);
  }
};
function Qe(_0x51ea46) {
  let _0x59ec45 = Math.round((_0x51ea46 % 360) * 1000000000) / 1000000000;
  return Object.is(_0x59ec45, -0) ? 0 : _0x59ec45;
}
function $e(_0x5c6744, _0x12028f) {
  let _0x3d94f1 = (_0x5c6744[0] + _0x5c6744[2]) / 2,
    _0x55361f = (_0x5c6744[1] + _0x5c6744[3]) / 2,
    _0x3359ce = _0x12028f.rotation,
    _0x20d336 = _0x12028f.flipY;
  _0x12028f.flipX && ((_0x3359ce += 180), (_0x20d336 = !_0x20d336));
  let _0x32512d = (_0x3359ce * Math.PI) / 180,
    _0x340b3d = Math.cos(_0x32512d),
    _0x571787 = Math.sin(_0x32512d),
    _0x4631a7 = _0x20d336 ? -1 : 1,
    _0xe5817f = _0x340b3d,
    _0xa1b01a = _0x571787,
    _0x2039e1 = -_0x571787 * _0x4631a7,
    _0x244fec = _0x340b3d * _0x4631a7;
  return [
    _0xe5817f,
    _0xa1b01a,
    _0x2039e1,
    _0x244fec,
    _0x3d94f1 - _0xe5817f * _0x3d94f1 - _0x2039e1 * _0x55361f,
    _0x55361f - _0xa1b01a * _0x3d94f1 - _0x244fec * _0x55361f,
  ];
}
function k(_0x15a350, _0x1b69a6) {
  if (!Number.isFinite(_0x15a350))
    throw RangeError("PDF element " + _0x1b69a6 + " must be a finite number.");
}
function A(_0x5f5c90, _0x2ed57c) {
  if (!Number.isFinite(_0x5f5c90) || _0x5f5c90 <= 0)
    throw RangeError(
      "PDF element " +
        _0x2ed57c +
        "\x20must\x20be\x20a\x20positive\x20finite\x20number.",
    );
}
function j(_0x17da48, _0x33f7e1) {
  return function (_0x16d4c2, _0x52ad17) {
    _0x33f7e1(_0x16d4c2, _0x52ad17, _0x17da48);
  };
}
function M(_0x398bf5, _0x2f6ab7, _0x2c1de9, _0x58b493) {
  var _0x514c88 = arguments.length,
    _0x428ee9 =
      _0x514c88 < 3
        ? _0x2f6ab7
        : _0x58b493 === null
          ? (_0x58b493 = Object.getOwnPropertyDescriptor(_0x2f6ab7, _0x2c1de9))
          : _0x58b493,
    _0x2b835d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x428ee9 = Reflect.decorate(_0x398bf5, _0x2f6ab7, _0x2c1de9, _0x58b493);
  else {
    for (var _0x1c792b = _0x398bf5.length - 1; _0x1c792b >= 0; _0x1c792b--)
      (_0x2b835d = _0x398bf5[_0x1c792b]) &&
        (_0x428ee9 =
          (_0x514c88 < 3
            ? _0x2b835d(_0x428ee9)
            : _0x514c88 > 3
              ? _0x2b835d(_0x2f6ab7, _0x2c1de9, _0x428ee9)
              : _0x2b835d(_0x2f6ab7, _0x2c1de9)) || _0x428ee9);
  }
  return (
    _0x514c88 > 3 &&
      _0x428ee9 &&
      Object.defineProperty(_0x2f6ab7, _0x2c1de9, _0x428ee9),
    _0x428ee9
  );
}
let N = class extends O {
  constructor(_0x24bbf6, _0x52367f, _0x233923, _0xec3e42) {
    super(_0x24bbf6, _0x52367f, _0x233923, _0x4b26cb.ANNOTATION, _0xec3e42);
  }
  getAnnotationType() {
    return this._getCurrentObject().annotationType;
  }
  getMarkup() {
    let _0x13a14b = et(this._getCurrentObject().markup);
    return _0x13a14b
      ? {
          ..._0x13a14b,
          quadPoints: _0x13a14b.quadPoints["map"](tt),
          stroke: E(_0x13a14b.stroke),
        }
      : null;
  }
  getInk() {
    let _0x33e968 = et(this._getCurrentObject().ink);
    return _0x33e968
      ? {
          ..._0x33e968,
          paths: _0x33e968.paths["map"]((_0x15d9ed) => _0x15d9ed.map(P)),
          stroke: E(_0x33e968.stroke),
        }
      : null;
  }
  getStyle() {
    var _0x5c84cd,
      _0x2b42a0,
      _0x5ad628,
      _0x3621c3,
      _0x828928,
      _0x3eb9cc,
      _0x2fd13c,
      _0x2ba782;
    let _0x36bc24 = this._getCurrentObject();
    return et({
      fill:
        ((_0x5c84cd = _0x36bc24.shape) == null
          ? undefined
          : _0x5c84cd.interiorFill) ??
        ((_0x2b42a0 = _0x36bc24.markup) != null && _0x2b42a0.color
          ? { color: _0x36bc24.markup["color"] }
          : undefined),
      stroke: E(
        ((_0x5ad628 = _0x36bc24.markup) == null
          ? undefined
          : _0x5ad628.stroke) ??
          ((_0x3621c3 = _0x36bc24.ink) == null
            ? undefined
            : _0x3621c3.stroke) ??
          ((_0x828928 = _0x36bc24.line) == null
            ? undefined
            : _0x828928.stroke) ??
          ((_0x3eb9cc = _0x36bc24.shape) == null
            ? undefined
            : _0x3eb9cc.border),
      ),
      opacity:
        ((_0x2fd13c = _0x36bc24.markup) == null
          ? undefined
          : _0x2fd13c.opacity) ??
        ((_0x2ba782 = _0x36bc24.ink) == null ||
        (_0x2ba782 = _0x2ba782.stroke) == null
          ? undefined
          : _0x2ba782.opacity),
    });
  }
  setStyle(_0x128b90) {
    if (
      (this._getCurrentObject(),
      _0x128b90.opacity !== undefined &&
        _0x128b90.opacity !== null &&
        (!Number.isFinite(_0x128b90.opacity) ||
          _0x128b90.opacity < 0 ||
          _0x128b90.opacity > 1))
    )
      throw RangeError(
        "PDF\x20annotation\x20opacity\x20must\x20be\x20between\x200\x20and\x201.",
      );
    return (
      D(this._model, this._injector, _0xc08f6b, {
        pageId: this._pageId,
        objectId: this._objectId,
        fill: _0x128b90.fill,
        stroke: T(_0x128b90.stroke),
        opacity: _0x128b90.opacity,
      }),
      this
    );
  }
};
N = M([j(3, _0x392e1f(_0x18838b))], N);
function et(_0x26d7af) {
  return _0x26d7af === undefined
    ? _0x26d7af
    : JSON.parse(JSON.stringify(_0x26d7af));
}
function P([_0x399fa6, _0x5c3857]) {
  return [_0x5605ac(_0x399fa6), _0x5605ac(_0x5c3857)];
}
function tt([_0xd8d387, _0x25fc9f, _0x2cb2d0, _0x4bbf71]) {
  return [P(_0xd8d387), P(_0x25fc9f), P(_0x2cb2d0), P(_0x4bbf71)];
}
let F = class extends O {
  constructor(_0x1f7111, _0x1049c5, _0x5bf3eb, _0x2ad695) {
    super(_0x1f7111, _0x1049c5, _0x5bf3eb, _0x4b26cb.PATH, _0x2ad695);
  }
  getStroke() {
    let {
      width: _0x2e9674,
      dash: _0x14da9c,
      dashPhase: _0x2de8e5,
      ..._0x2e6bd3
    } = this._getCurrentObject().stroke ?? {};
    return {
      ..._0x2e6bd3,
      ...(_0x2e9674 === undefined ? {} : { width: _0x5605ac(_0x2e9674) }),
      ...(_0x14da9c === undefined
        ? {}
        : { dash: _0x14da9c.map((_0x59da5f) => _0x5605ac(_0x59da5f)) }),
      ...(_0x2de8e5 === undefined ? {} : { dashPhase: _0x5605ac(_0x2de8e5) }),
    };
  }
  setStroke(_0x52f569) {
    this._getCurrentObject();
    let {
        width: _0x5a5e99,
        dash: _0x4e9614,
        dashPhase: _0x1a68f5,
        ..._0x75802b
      } = _0x52f569,
      _0x2b07a6 = {
        ..._0x75802b,
        ...(_0x5a5e99 === undefined ? {} : { width: _0x28bed2(_0x5a5e99) }),
        ...(_0x4e9614 === undefined
          ? {}
          : { dash: _0x4e9614.map((_0x301497) => _0x28bed2(_0x301497)) }),
        ...(_0x1a68f5 === undefined ? {} : { dashPhase: _0x28bed2(_0x1a68f5) }),
      };
    return (
      D(this._model, this._injector, _0x43fe9f, {
        pageId: this._pageId,
        objectId: this._objectId,
        stroke: _0x2b07a6,
      }),
      this
    );
  }
};
F = M([j(3, _0x392e1f(_0x18838b))], F);
function I(_0x23789c) {
  "@babel/helpers - typeof";
  return (
    (I =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3a7467) {
            return typeof _0x3a7467;
          }
        : function (_0x8276ca) {
            return _0x8276ca &&
              typeof Symbol == "function" &&
              _0x8276ca.constructor === Symbol &&
              _0x8276ca !== Symbol.prototype
              ? "symbol"
              : typeof _0x8276ca;
          }),
    I(_0x23789c)
  );
}
function nt(_0x37fc46, _0x43f635) {
  if (I(_0x37fc46) != "object" || !_0x37fc46) return _0x37fc46;
  var _0x316301 = _0x37fc46[Symbol.toPrimitive];
  if (_0x316301 !== undefined) {
    var _0x28cdf2 = _0x316301.call(_0x37fc46, _0x43f635 || "default");
    if (I(_0x28cdf2) != "object") return _0x28cdf2;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x43f635 === "string" ? String : Number)(_0x37fc46);
}
function rt(_0x58a1b2) {
  var _0x54b8bc = nt(_0x58a1b2, "string");
  return I(_0x54b8bc) == "symbol" ? _0x54b8bc : _0x54b8bc + "";
}
function L(_0x35b4fb, _0x3b6453, _0xd746f) {
  return (
    (_0x3b6453 = rt(_0x3b6453)) in _0x35b4fb
      ? Object.defineProperty(_0x35b4fb, _0x3b6453, {
          value: _0xd746f,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x35b4fb[_0x3b6453] = _0xd746f),
    _0x35b4fb
  );
}
let R = class extends O {
  constructor(_0x533ac3, _0x40db02, _0x4a9602, _0x2ad274) {
    super(_0x533ac3, _0x40db02, _0x4a9602, _0x4b26cb.IMAGE, _0x2ad274);
  }
  getSource() {
    return this._getResource().source;
  }
  getImageSourceType() {
    return this._getResource().imageSourceType;
  }
  setSource(_0x584bb2, _0x40512e) {
    let _0x224804 = this.toBuilder().setSource(_0x584bb2, _0x40512e).build();
    return (this._applyBuilder(_0x224804), this);
  }
  getCrop() {
    let _0x494572 = this._getCurrentObject(),
      _0x2ad135 = _0x494572.crop;
    return _0x2ad135
      ? {
          left: _0x5605ac(_0x2ad135[0] - _0x494572.bbox[0]),
          top: _0x5605ac(_0x2ad135[1] - _0x494572.bbox[1]),
          right: _0x5605ac(_0x2ad135[2] - _0x494572.bbox[0]),
          bottom: _0x5605ac(_0x2ad135[3] - _0x494572.bbox[1]),
        }
      : null;
  }
  setCrop(_0x2e458b) {
    mt(_0x2e458b);
    let _0x15748c = this._getCurrentObject();
    return (
      D(this._model, this._injector, _0x327b6f, {
        pageId: this._pageId,
        objectId: this._objectId,
        cropRect: lt(_0x2e458b, _0x15748c.bbox),
      }),
      this
    );
  }
  getOpacity() {
    return this._getCurrentObject().opacity ?? 1;
  }
  setOpacity(_0x5ecd49) {
    return (
      ht(_0x5ecd49),
      this._getCurrentObject(),
      D(this._model, this._injector, _0xc08f6b, {
        pageId: this._pageId,
        objectId: this._objectId,
        opacity: _0x5ecd49,
      }),
      this
    );
  }
  toBuilder() {
    let _0x365b56 = this._getCurrentObject(),
      _0x6ffdb0 = this._getResource();
    return new it(this._model["getUnitId"](), this._pageId, {
      id: this._objectId,
      source: _0x6ffdb0.source,
      imageSourceType: _0x6ffdb0.imageSourceType,
      transform: this.getTransform(),
      crop: this.getCrop() ?? undefined,
      opacity: _0x365b56.opacity,
      assetId: _0x365b56.assetId,
    });
  }
  remove() {
    (this._getCurrentObject(),
      D(this._model, this._injector, _0x4b99a5, {
        pageId: this._pageId,
        objectId: this._objectId,
      }));
  }
  _getResource() {
    let _0x3f1f95 = this._getCurrentObject(),
      _0x279aa7 =
        this._model["getEditState"]().managedResources[_0x3f1f95.assetId];
    if (!_0x279aa7)
      throw Error(
        "Managed resource " +
          _0x3f1f95.assetId +
          "\x20for\x20PDF\x20image\x20" +
          this._objectId +
          "\x20no\x20longer\x20exists.",
      );
    return _0x279aa7;
  }
  _applyBuilder(_0x50b6bf) {
    let _0x2b4a40 = ct(_0x50b6bf.element["transform"]);
    D(this._model, this._injector, _0x1ac010, {
      pageId: this._pageId,
      objectId: this._objectId,
      resource: st(this._model, _0x50b6bf),
      cropRect: _0x50b6bf.element["crop"]
        ? lt(_0x50b6bf.element["crop"], _0x2b4a40.bbox)
        : null,
      opacity: _0x50b6bf.element["opacity"],
      ..._0x2b4a40,
    });
  }
};
R = M([j(3, _0x392e1f(_0x18838b))], R);
var it = class {
  constructor(_0x4b1968, _0x42a949, _0x55257c) {
    ((this._unitId = _0x4b1968),
      (this._pageId = _0x42a949),
      L(this, "_elementId", undefined),
      L(this, "_source", undefined),
      L(this, "_imageSourceType", undefined),
      L(this, "_transform", undefined),
      L(this, "_crop", undefined),
      L(this, "_opacity", undefined),
      L(this, "_assetId", undefined),
      (this._elementId =
        (_0x55257c == null ? undefined : _0x55257c.id) ?? ft()),
      (this._source = _0x55257c == null ? undefined : _0x55257c.source),
      (this._imageSourceType =
        _0x55257c == null ? undefined : _0x55257c.imageSourceType),
      (this._transform = at(
        _0x55257c == null ? undefined : _0x55257c.transform,
      )),
      (this._crop = _0x55257c == null ? undefined : _0x55257c.crop),
      (this._opacity = _0x55257c == null ? undefined : _0x55257c.opacity),
      (this._assetId = _0x55257c == null ? undefined : _0x55257c.assetId));
  }
  setSource(_0x581161, _0x170a11) {
    return (
      (_0x581161 !== this._source ||
        (_0x170a11 && _0x170a11 !== this._imageSourceType)) &&
        (this._assetId = undefined),
      (this._source = _0x581161),
      (this._imageSourceType = _0x170a11),
      this
    );
  }
  setAbsolutePosition(_0xc009e8, _0x43c760) {
    return (
      z(_0xc009e8, "left"),
      z(_0x43c760, "top"),
      (this._transform["left"] = _0xc009e8),
      (this._transform["top"] = _0x43c760),
      this
    );
  }
  setSize(_0x47959e, _0x37094c) {
    return (
      B(_0x47959e, "width"),
      B(_0x37094c, "height"),
      (this._transform["width"] = _0x47959e),
      (this._transform["height"] = _0x37094c),
      this
    );
  }
  setRotation(_0xdacd1) {
    return (
      z(_0xdacd1, "rotation"),
      (this._transform["rotation"] = _0xdacd1),
      this
    );
  }
  setCrop(_0x45ec90) {
    return (mt(_0x45ec90), (this._crop = { ..._0x45ec90 }), this);
  }
  setOpacity(_0xfff9ea) {
    return (ht(_0xfff9ea), (this._opacity = _0xfff9ea), this);
  }
  build() {
    if (!this._source)
      throw Error(
        "Image source is required. Please call setSource() before build().",
      );
    let _0x6933da = this._imageSourceType ?? ut(this._source);
    return (
      dt(this._source, _0x6933da),
      B(this._transform["width"], "width"),
      B(this._transform["height"], "height"),
      this._opacity !== undefined && ht(this._opacity),
      {
        unitId: this._unitId,
        pageId: this._pageId,
        element: {
          id: this._elementId,
          source: this._source,
          imageSourceType: _0x6933da,
          transform: { ...this._transform },
          crop: this._crop ? { ...this._crop } : undefined,
          opacity: this._opacity,
          assetId: this._assetId,
        },
      }
    );
  }
};
function at(_0x5153db) {
  return {
    left: (_0x5153db == null ? undefined : _0x5153db.left) ?? 0,
    top: (_0x5153db == null ? undefined : _0x5153db.top) ?? 0,
    width: (_0x5153db == null ? undefined : _0x5153db.width) ?? 288,
    height: (_0x5153db == null ? undefined : _0x5153db.height) ?? 162,
    rotation: (_0x5153db == null ? undefined : _0x5153db.rotation) ?? 0,
    flipX: (_0x5153db == null ? undefined : _0x5153db.flipX) ?? false,
    flipY: (_0x5153db == null ? undefined : _0x5153db.flipY) ?? false,
  };
}
function ot(_0x1273c6) {
  let { element: _0x3e8164 } = _0x1273c6;
  return {
    asset: {
      id: _0x3e8164.assetId ?? pt(_0x3e8164.source, _0x3e8164.imageSourceType),
      type: _0x2c2aa0.IMAGE,
      width: _0x3e8164.transform["width"],
      height: _0x3e8164.transform["height"],
    },
    source: _0x3e8164.source,
    imageSourceType: _0x3e8164.imageSourceType,
  };
}
function st(_0x231a6b, _0x50c49e) {
  let _0x1f7cf5 = ot(_0x50c49e),
    _0x4d234d =
      _0x231a6b.getEditState().managedResources[_0x1f7cf5.asset["id"]];
  return (_0x4d234d == null ? undefined : _0x4d234d.source) ===
    _0x1f7cf5.source && _0x4d234d.imageSourceType === _0x1f7cf5.imageSourceType
    ? _0x4d234d
    : _0x1f7cf5;
}
function ct(_0x2fc1d7) {
  let _0xfb431d = [
      _0x28bed2(_0x2fc1d7.left),
      _0x28bed2(_0x2fc1d7.top),
      _0x28bed2(_0x2fc1d7.left + _0x2fc1d7.width),
      _0x28bed2(_0x2fc1d7.top + _0x2fc1d7.height),
    ],
    _0x123d79 = (_0x2fc1d7.rotation * Math.PI) / 180,
    _0x136b4b = Math.cos(_0x123d79),
    _0x23f9a3 = Math.sin(_0x123d79),
    _0x15eeaf = _0x2fc1d7.flipX ? -1 : 1,
    _0x3d5c4a = _0x2fc1d7.flipY ? -1 : 1,
    _0x4221f2 = _0x136b4b * _0x15eeaf,
    _0x514b01 = _0x23f9a3 * _0x15eeaf,
    _0x5b1d35 = -_0x23f9a3 * _0x3d5c4a,
    _0x3706ac = _0x136b4b * _0x3d5c4a,
    _0xa106bd = (_0xfb431d[0] + _0xfb431d[2]) / 2,
    _0x292134 = (_0xfb431d[1] + _0xfb431d[3]) / 2;
  return {
    bbox: _0xfb431d,
    transform: [
      _0x4221f2,
      _0x514b01,
      _0x5b1d35,
      _0x3706ac,
      _0xa106bd - _0x4221f2 * _0xa106bd - _0x5b1d35 * _0x292134,
      _0x292134 - _0x514b01 * _0xa106bd - _0x3706ac * _0x292134,
    ],
  };
}
function lt(_0x3efbb8, _0x28739b) {
  return [
    _0x28739b[0] + _0x28bed2(_0x3efbb8.left),
    _0x28739b[1] + _0x28bed2(_0x3efbb8.top),
    _0x28739b[0] + _0x28bed2(_0x3efbb8.right),
    _0x28739b[1] + _0x28bed2(_0x3efbb8.bottom),
  ];
}
function ut(_0x13c520) {
  return /^https?:\/\//i.test(_0x13c520)
    ? _0x383dbe.URL
    : /^data:/i.test(_0x13c520) ||
        /^[A-Za-z0-9+/]+={0,2}$/["test"](_0x13c520.replace(/\s/g, ""))
      ? _0x383dbe.BASE64
      : _0x383dbe.UUID;
}
function dt(_0x397c45, _0x4ba7c8) {
  _0x10e01d(
    ot({
      unitId: "validation",
      pageId: "validation",
      element: {
        id: "validation",
        source: _0x397c45,
        imageSourceType: _0x4ba7c8,
        transform: {
          left: 0,
          top: 0,
          width: 1,
          height: 1,
          rotation: 0,
          flipX: false,
          flipY: false,
        },
      },
    }),
  );
}
function ft() {
  return "pdf-facade-image-" + _0x10ea46(12);
}
function pt(_0x20b7ab, _0x4c1fcb) {
  let _0x10826a = _0x4c1fcb + ":" + _0x20b7ab,
    _0x292e75 = 2166136261;
  for (let _0x52a106 = 0; _0x52a106 < _0x10826a.length; _0x52a106++)
    ((_0x292e75 ^= _0x10826a.charCodeAt(_0x52a106)),
      (_0x292e75 = Math.imul(_0x292e75, 16777619)));
  return "pdf-facade-asset-" + (_0x292e75 >>> 0).toString(36);
}
function mt(_0x45a150) {
  if (
    (z(_0x45a150.left, "crop.left"),
    z(_0x45a150.top, "crop.top"),
    z(_0x45a150.right, "crop.right"),
    z(_0x45a150.bottom, "crop.bottom"),
    _0x45a150.right <= _0x45a150.left || _0x45a150.bottom <= _0x45a150.top)
  )
    throw RangeError("PDF image crop must have positive width and height.");
}
function ht(_0x1101e5) {
  if (!Number.isFinite(_0x1101e5) || _0x1101e5 < 0 || _0x1101e5 > 1)
    throw RangeError(
      "PDF\x20image\x20opacity\x20must\x20be\x20between\x200\x20and\x201.",
    );
}
function z(_0x1c5eda, _0x46eed0) {
  if (!Number.isFinite(_0x1c5eda))
    throw RangeError(
      "PDF\x20image\x20" + _0x46eed0 + "\x20must\x20be\x20finite.",
    );
}
function B(_0x40aed6, _0x4b5dce) {
  if (!Number.isFinite(_0x40aed6) || _0x40aed6 <= 0)
    throw RangeError(
      "PDF image " + _0x4b5dce + "\x20must\x20be\x20positive\x20and\x20finite.",
    );
}
let V = class extends O {
  constructor(_0x23f45f, _0x3c1abc, _0x119ff9, _0x377282) {
    super(_0x23f45f, _0x3c1abc, _0x119ff9, _0x4b26cb.TEXT_BOX, _0x377282);
  }
  getItems() {
    let _0x42ec69 = this._getTextStory();
    return _0x42ec69.blocks["flatMap"]((_0x238ed4) =>
      _0x238ed4.listItem
        ? [
            {
              ...JSON.parse(JSON.stringify(_0x238ed4)),
              text: this._getBlockText(_0x42ec69, _0x238ed4.id),
              level: _0x238ed4.listItem["level"],
            },
          ]
        : [],
    );
  }
  insertItem(_0x459716, _0x53f9a3) {
    let { storyId: _0x4a4ba0, listId: _0x3b64b6 } = this._resolveList();
    return (
      D(this._model, this._injector, _0x483668, {
        storyId: _0x4a4ba0,
        listId: _0x3b64b6,
        index: _0x459716,
        text: _0x53f9a3.text,
        level: _0x53f9a3.level ?? 0,
        blockId: _0x53f9a3.id,
      }),
      this
    );
  }
  setItemText(_0x23ccd0, _0x542bac) {
    let {
      storyId: _0xe022dd,
      runId: _0x54ffd3,
      previousText: _0x1d85ae,
    } = this._resolveItemRun(_0x23ccd0);
    return (
      D(this._model, this._injector, _0x29e47e, {
        pageId: this._pageId,
        objectId: this._objectId,
        storyId: _0xe022dd,
        runId: _0x54ffd3,
        previousText: _0x1d85ae,
        text: _0x542bac,
      }),
      this
    );
  }
  removeItem(_0x574be5) {
    let { storyId: _0x265b8b } = this._resolveItemRun(_0x574be5);
    return (
      D(this._model, this._injector, _0x1bdc95, {
        storyId: _0x265b8b,
        blockId: _0x574be5,
      }),
      this
    );
  }
  changeItemLevel(_0x1dba6b, _0x402961) {
    if (!Number.isInteger(_0x402961) || _0x402961 < 0 || _0x402961 > 8)
      throw RangeError("PDF list level must be an integer from 0 through 8.");
    let _0x49eaeb = this._getTextStory(),
      _0x2f3f50 = _0x49eaeb.blocks["find"](
        (_0x4206cc) => _0x4206cc.id === _0x1dba6b && _0x4206cc.listItem,
      );
    if (!(_0x2f3f50 != null && _0x2f3f50.listItem))
      throw this._missingItem(_0x1dba6b);
    if (_0x402961 === _0x2f3f50.listItem["level"]) return this;
    if (_0x402961 > _0x2f3f50.listItem["level"]) {
      let _0x82ceff = _0x49eaeb.blocks["indexOf"](_0x2f3f50),
        _0x2a4d14 = _0x82ceff > 0 ? _0x49eaeb.blocks[_0x82ceff - 1] : undefined;
      if (
        !(_0x2a4d14 != null && _0x2a4d14.listItem) ||
        _0x2a4d14.listItem["level"] < _0x402961 - 1
      )
        throw RangeError(
          "PDF\x20list\x20item\x20" +
            _0x1dba6b +
            "\x20cannot\x20use\x20level\x20" +
            _0x402961 +
            " without a preceding parent level.",
        );
    }
    return (
      D(this._model, this._injector, _0x337588, {
        storyId: _0x49eaeb.id,
        blockId: _0x1dba6b,
        delta: _0x402961 - _0x2f3f50.listItem["level"],
      }),
      this
    );
  }
  setPreset(_0x1443f5) {
    let { storyId: _0x1e4f86, listId: _0x3428c7 } = this._resolveList();
    return (
      D(this._model, this._injector, _0x407d4a, {
        storyId: _0x1e4f86,
        listId: _0x3428c7,
        presetId: _0x1443f5,
      }),
      this
    );
  }
  setStartNumber(_0x1fedec) {
    if (!Number.isInteger(_0x1fedec) || _0x1fedec < 1)
      throw RangeError("PDF list start number must be a positive integer.");
    let {
      storyId: _0xa006a4,
      listId: _0x271801,
      kind: _0x25d643,
    } = this._resolveList();
    if (_0x25d643 === _0x3d82dc.UNORDERED)
      throw RangeError(
        "PDF\x20list\x20start\x20number\x20is\x20only\x20supported\x20for\x20ordered\x20lists.",
      );
    return (
      D(this._model, this._injector, _0x5515c5, {
        storyId: _0xa006a4,
        listId: _0x271801,
        level: 0,
        startAt: _0x1fedec,
      }),
      this
    );
  }
  _resolveList() {
    var _0x27b0db, _0x2db84a;
    let _0x41ad92 = this._getTextStory(),
      _0x1be657 =
        ((_0x27b0db = _0x41ad92.blocks["find"](
          (_0x1977df) => _0x1977df.listItem,
        )) == null || (_0x27b0db = _0x27b0db.listItem) == null
          ? undefined
          : _0x27b0db.listId) ?? Object.keys(_0x41ad92.lists ?? {})[0];
    if (!_0x1be657)
      throw Error(
        "PDF\x20list\x20definition\x20for\x20element\x20" +
          this._objectId +
          " no longer exists.",
      );
    return {
      storyId: _0x41ad92.id,
      listId: _0x1be657,
      kind:
        (_0x2db84a = _0x41ad92.lists) == null ||
        (_0x2db84a = _0x2db84a[_0x1be657]) == null
          ? undefined
          : _0x2db84a.kind,
    };
  }
  _resolveItemRun(_0x47fed4) {
    let _0x2d821d = this._getTextStory(),
      _0x284073 = _0x2d821d.blocks["find"](
        (_0x187966) => _0x187966.id === _0x47fed4 && _0x187966.listItem,
      ),
      _0x4011a4 = _0x284073 == null ? undefined : _0x284073.runIds[0];
    if (
      !_0x284073 ||
      !_0x4011a4 ||
      _0x284073.runIds["length"] !== 1 ||
      !_0x2d821d.runs[_0x4011a4]
    )
      throw this._missingItem(_0x47fed4);
    return {
      storyId: _0x2d821d.id,
      runId: _0x4011a4,
      previousText: _0x2d821d.runs[_0x4011a4].text,
    };
  }
  _getTextStory() {
    let _0x290b75 = this._model["getMaterializedDocument"](),
      _0x2ff3a3 = _0x290b75.objects[this._objectId],
      _0x2968c9 =
        (_0x2ff3a3 == null ? undefined : _0x2ff3a3.type) === _0x4b26cb.TEXT_BOX
          ? _0x2ff3a3.textStoryId
          : undefined,
      _0x938b2f = _0x2968c9 ? _0x290b75.textStories[_0x2968c9] : undefined;
    if (!_0x938b2f)
      throw Error(
        "PDF text story for element " +
          this._objectId +
          " no longer exists on page " +
          this._pageId +
          ".",
      );
    return _0x938b2f;
  }
  _getBlockText(_0x2be84d, _0x15be5c) {
    let _0x7e2f97 = _0x2be84d.blocks["find"](
      (_0x432c22) => _0x432c22.id === _0x15be5c,
    );
    return (
      (_0x7e2f97 == null
        ? undefined
        : _0x7e2f97.runIds["map"]((_0x572eac) => {
            var _0x72a05b;
            return (
              ((_0x72a05b = _0x2be84d.runs[_0x572eac]) == null
                ? undefined
                : _0x72a05b.text) ?? ""
            );
          }).join("")) ?? ""
    );
  }
  _missingItem(_0x5018cd) {
    return Error(
      "PDF list item " +
        _0x5018cd +
        "\x20is\x20missing\x20or\x20is\x20not\x20a\x20single-run\x20editable\x20item.",
    );
  }
};
V = M([j(3, _0x392e1f(_0x18838b))], V);
let H = class extends O {
  constructor(_0x2011ac, _0x5e065c, _0x28d6a7, _0x3185ce) {
    super(_0x2011ac, _0x5e065c, _0x28d6a7, _0x4b26cb.TEXT_BOX, _0x3185ce);
  }
  getBlocks() {
    let _0x2b90c6 = this._getTextStory();
    return _0x2b90c6.blocks["map"]((_0x1a91c3) => ({
      ...JSON.parse(JSON.stringify(_0x1a91c3)),
      text: this._getBlockText(_0x2b90c6, _0x1a91c3.id),
    }));
  }
  insertBlock(_0x4971fb, _0x9e2f23) {
    let _0x2cc91c = this._getTextStory();
    return (
      D(this._model, this._injector, _0x21133a, {
        storyId: _0x2cc91c.id,
        index: _0x4971fb,
        text: _0x9e2f23.text,
        blockId: _0x9e2f23.id,
        blockStyle: _0x9e2f23.style,
        runStyle: _0x9e2f23.textStyle,
      }),
      this
    );
  }
  appendBlock(_0x1980ba) {
    return this.insertBlock(this.getBlocks().length, _0x1980ba);
  }
  setBlockText(_0x155ecb, _0x4a8c2c) {
    let {
      storyId: _0x530a35,
      runId: _0x2e4b6a,
      previousText: _0x22aecc,
    } = this._resolveBlockRun(_0x155ecb);
    return (
      D(this._model, this._injector, _0x29e47e, {
        pageId: this._pageId,
        objectId: this._objectId,
        storyId: _0x530a35,
        runId: _0x2e4b6a,
        previousText: _0x22aecc,
        text: _0x4a8c2c,
      }),
      this
    );
  }
  setBlockStyle(_0x1e10e4, _0x4ddaeb) {
    let _0x14eb94 = this._getTextStory();
    return (
      this._resolveBlockRun(_0x1e10e4),
      D(this._model, this._injector, _0x293ce9, {
        storyId: _0x14eb94.id,
        blockId: _0x1e10e4,
        patch: _0x4ddaeb,
      }),
      this
    );
  }
  removeBlock(_0x494877) {
    let _0x2576c6 = this._getTextStory();
    return (
      this._resolveBlockRun(_0x494877),
      D(this._model, this._injector, _0x80566f, {
        storyId: _0x2576c6.id,
        blockId: _0x494877,
      }),
      this
    );
  }
  _resolveBlockRun(_0x5de5db) {
    let _0xee774d = this._getTextStory(),
      _0x30d397 = _0xee774d.blocks["find"](
        (_0x27d3a3) => _0x27d3a3.id === _0x5de5db,
      ),
      _0x80928c = _0x30d397 == null ? undefined : _0x30d397.runIds[0];
    if (
      !_0x30d397 ||
      !_0x80928c ||
      _0x30d397.runIds["length"] !== 1 ||
      !_0xee774d.runs[_0x80928c]
    )
      throw Error(
        "PDF\x20paragraph\x20block\x20" +
          _0x5de5db +
          " is missing or is not a single-run editable block.",
      );
    return {
      storyId: _0xee774d.id,
      runId: _0x80928c,
      previousText: _0xee774d.runs[_0x80928c].text,
    };
  }
  _getTextStory() {
    let _0x540273 = this._model["getMaterializedDocument"](),
      _0x7ef904 = _0x540273.objects[this._objectId],
      _0x284669 =
        (_0x7ef904 == null ? undefined : _0x7ef904.type) === _0x4b26cb.TEXT_BOX
          ? _0x7ef904.textStoryId
          : undefined,
      _0xc91297 = _0x284669 ? _0x540273.textStories[_0x284669] : undefined;
    if (!_0xc91297)
      throw Error(
        "PDF text story for element " +
          this._objectId +
          " no longer exists on page " +
          this._pageId +
          ".",
      );
    return _0xc91297;
  }
  _getBlockText(_0x402564, _0x3865fd) {
    let _0x4aca98 = _0x402564.blocks["find"](
      (_0x2fdf69) => _0x2fdf69.id === _0x3865fd,
    );
    return (
      (_0x4aca98 == null
        ? undefined
        : _0x4aca98.runIds["map"]((_0x45a94e) => {
            var _0x5580bf;
            return (
              ((_0x5580bf = _0x402564.runs[_0x45a94e]) == null
                ? undefined
                : _0x5580bf.text) ?? ""
            );
          }).join("")) ?? ""
    );
  }
};
H = M([j(3, _0x392e1f(_0x18838b))], H);
let U = class extends O {
  constructor(_0x35ba3a, _0x2d51c1, _0x4c3974, _0x5dcd89) {
    super(_0x35ba3a, _0x2d51c1, _0x4c3974, _0x4b26cb.TABLE, _0x5dcd89);
  }
  getRowCount() {
    return this._getCurrentObject().rows["length"];
  }
  getColumnCount() {
    return this._getCurrentObject().columns["length"];
  }
  getCell(_0x130e36, _0x1b30b9) {
    var _0xabdd92, _0x4c2dbf;
    let _0x3ba223 = this._getCurrentObject(),
      _0x231675 =
        (_0xabdd92 = _0x3ba223.rows[_0x130e36]) == null
          ? undefined
          : _0xabdd92.id,
      _0x1da85e =
        (_0x4c2dbf = _0x3ba223.columns[_0x1b30b9]) == null
          ? undefined
          : _0x4c2dbf.id,
      _0x33c37c = _0x3ba223.cells["find"](
        (_0x5c2c82) =>
          _0x5c2c82.rowId === _0x231675 && _0x5c2c82.columnId === _0x1da85e,
      );
    if (
      !Number.isInteger(_0x130e36) ||
      !Number.isInteger(_0x1b30b9) ||
      !_0x231675 ||
      !_0x1da85e ||
      !_0x33c37c
    )
      throw RangeError(
        "PDF table cell coordinates are outside the current table.",
      );
    return this._injector["createInstance"](
      W,
      this._model,
      this._pageId,
      this._objectId,
      _0x33c37c.id,
    );
  }
  resize(_0xfcb450, _0x212756) {
    let _0x436de5 = this._getCurrentObject();
    if (
      !Number.isSafeInteger(_0xfcb450) ||
      _0xfcb450 <= 0 ||
      !Number.isSafeInteger(_0x212756) ||
      _0x212756 <= 0
    )
      throw RangeError(
        "PDF table row and column counts must be positive safe integers.",
      );
    if (_0xfcb450 * _0x212756 > 10000)
      throw RangeError("PDF table resize supports at most 10,000 cells.");
    let _0x25aa9a = _0x436de5.bbox[2] - _0x436de5.bbox[0],
      _0x45a609 = _0x436de5.bbox[3] - _0x436de5.bbox[1],
      _0xa25015 = Array.from({ length: _0xfcb450 }, (_0x5da134, _0x3711a3) => {
        var _0x4603fd;
        return (
          ((_0x4603fd = _0x436de5.rows[_0x3711a3]) == null
            ? undefined
            : _0x4603fd.id) ?? G("row")
        );
      }),
      _0x142c24 = Array.from({ length: _0x212756 }, (_0x5b77e4, _0x4eb726) => {
        var _0x59551b;
        return (
          ((_0x59551b = _0x436de5.columns[_0x4eb726]) == null
            ? undefined
            : _0x59551b.id) ?? G("column")
        );
      }),
      _0x264ad8 = [],
      _0x476a01 = [],
      _0x3bcca9 = [];
    for (let _0x5ca9fe = 0; _0x5ca9fe < _0xfcb450; _0x5ca9fe += 1)
      for (let _0x58fe73 = 0; _0x58fe73 < _0x212756; _0x58fe73 += 1) {
        var _0x228c3f, _0x810090;
        let _0x3fd321 =
            (_0x228c3f = _0x436de5.rows[_0x5ca9fe]) == null
              ? undefined
              : _0x228c3f.id,
          _0x468670 =
            (_0x810090 = _0x436de5.columns[_0x58fe73]) == null
              ? undefined
              : _0x810090.id,
          _0x5ac763 =
            _0x3fd321 && _0x468670
              ? _0x436de5.cells["find"](
                  (_0x579e5f) =>
                    _0x579e5f.rowId === _0x3fd321 &&
                    _0x579e5f.columnId === _0x468670,
                )
              : undefined;
        if ((_0x476a01.push(_0x5ac763), _0x5ac763)) {
          _0x3bcca9.push({
            id: _0x5ac763.id,
            contentStoryId: _0x5ac763.contentStoryId,
          });
          continue;
        }
        let _0x20c07e = _t(this._objectId);
        (_0x264ad8.push(_0x20c07e),
          _0x3bcca9.push({ id: G("cell"), contentStoryId: _0x20c07e.id }));
      }
    let _0x12d172 = _0x44fb3f({
        width: _0x25aa9a,
        height: _0x45a609,
        rowIds: _0xa25015,
        columnIds: _0x142c24,
        cells: _0x3bcca9,
      }),
      _0x264bd1 = _0x12d172.cells["map"]((_0x293fff, _0x23e6c5) => ({
        ..._0x476a01[_0x23e6c5],
        ..._0x293fff,
      })),
      _0x4e8994 = new Set(
        _0x264bd1.map((_0x144a1c) => _0x144a1c.contentStoryId),
      ),
      _0x19a505 = this._model["getEditState"](),
      _0x18fb84 = _0x436de5.cells["filter"](
        (_0xdb480f) => !_0x4e8994.has(_0xdb480f.contentStoryId),
      )
        .map(
          (_0x1e69a3) => _0x19a505.overlayTextStories[_0x1e69a3.contentStoryId],
        )
        .filter((_0x3bdc93) => !!_0x3bdc93);
    return (
      D(this._model, this._injector, _0x4aff85, {
        pageId: this._pageId,
        tableId: this._objectId,
        bbox: [..._0x436de5.bbox],
        rows: _0x12d172.rows,
        columns: _0x12d172.columns,
        cells: _0x264bd1,
        addedStories: _0x264ad8,
        removedStories: _0x18fb84,
      }),
      this
    );
  }
  getTheme() {
    let _0x3b5d14 = this._getCurrentObject();
    return JSON.parse(
      JSON.stringify({
        styleId: _0x3b5d14.styleId,
        options: _0x3b5d14.options,
      }),
    );
  }
  setTheme(_0x350a78) {
    return (
      this._getCurrentObject(),
      D(this._model, this._injector, _0x37f58a, {
        pageId: this._pageId,
        tableId: this._objectId,
        styleId: _0x350a78.styleId,
        options: _0x350a78.options,
      }),
      this
    );
  }
};
U = M([j(3, _0x392e1f(_0x18838b))], U);
let W = class {
  constructor(_0x2f55d7, _0x1cd9b4, _0x244e9b, _0x1b26c4, _0x2a8857) {
    ((this._model = _0x2f55d7),
      (this._pageId = _0x1cd9b4),
      (this._tableId = _0x244e9b),
      (this._cellId = _0x1b26c4),
      (this._injector = _0x2a8857));
  }
  getText() {
    let { cell: _0x201e81 } = this._resolveCell(),
      _0x3f69a1 = this._getTextStory(_0x201e81);
    return _0x3f69a1.blocks["flatMap"]((_0x1a18bc) => _0x1a18bc.runIds)
      .map((_0x551237) => {
        var _0x3912b0;
        return (
          ((_0x3912b0 = _0x3f69a1.runs[_0x551237]) == null
            ? undefined
            : _0x3912b0.text) ?? ""
        );
      })
      .join("");
  }
  setText(_0x227151) {
    let { cell: _0x3669e8 } = this._resolveCell(),
      _0x1233c4 = this._getTextStory(_0x3669e8),
      _0x4615e2 = _0x1233c4.blocks["flatMap"]((_0x42ee3a) => _0x42ee3a.runIds),
      _0x1b5af0 = _0x4615e2[0];
    if (!_0x1b5af0 || _0x4615e2.length !== 1 || !_0x1233c4.runs[_0x1b5af0])
      throw Error(
        "PDF table cell " +
          this._cellId +
          " is not a single-run editable cell.",
      );
    return (
      D(this._model, this._injector, _0x29e47e, {
        pageId: this._pageId,
        objectId: this._tableId,
        storyId: _0x1233c4.id,
        runId: _0x1b5af0,
        previousText: _0x1233c4.runs[_0x1b5af0].text,
        text: _0x227151,
      }),
      this
    );
  }
  getStyle() {
    let { cell: _0x1e8362 } = this._resolveCell();
    return JSON.parse(JSON.stringify(_0x1e8362.style ?? {}));
  }
  setStyle(_0x1234c2) {
    let { cell: _0x43436e } = this._resolveCell();
    return (
      (_0x1234c2.fontColor !== undefined ||
        _0x1234c2.horizontalAlignment !== undefined) &&
        this._getTextStory(_0x43436e),
      D(this._model, this._injector, _0x4965fa, {
        pageId: this._pageId,
        tableId: this._tableId,
        cellId: this._cellId,
        fontColor: _0x1234c2.fontColor,
        horizontalAlignment:
          _0x1234c2.horizontalAlignment === undefined
            ? undefined
            : gt(_0x1234c2.horizontalAlignment),
        patch: { fill: _0x1234c2.fill, verticalAlign: _0x1234c2.verticalAlign },
      }),
      this
    );
  }
  _resolveCell() {
    if (
      !this._model["getMaterializedDocument"]().pages["some"](
        (_0x3dd1be) => _0x3dd1be.id === this._pageId,
      )
    )
      throw Error("PDF\x20page\x20" + this._pageId + " no longer exists.");
    let _0x105606 = this._model["getEditState"]().overlayObjects[this._tableId],
      _0x2c2550 =
        (_0x105606 == null ? undefined : _0x105606.pageId) === this._pageId
          ? _0x105606.object
          : undefined,
      _0x2c94ac =
        (_0x2c2550 == null ? undefined : _0x2c2550.type) === _0x4b26cb.TABLE
          ? _0x2c2550.cells["find"](
              (_0x2171bd) => _0x2171bd.id === this._cellId,
            )
          : undefined;
    if (!_0x2c2550 || _0x2c2550.type !== _0x4b26cb.TABLE || !_0x2c94ac)
      throw Error("PDF table cell " + this._cellId + " no longer exists.");
    return { table: _0x2c2550, cell: _0x2c94ac };
  }
  _getTextStory(_0xf0b5e8) {
    let _0x550927 =
      this._model["getEditState"]().overlayTextStories[
        _0xf0b5e8.contentStoryId
      ];
    if (!_0x550927)
      throw Error(
        "PDF table-cell story " +
          _0xf0b5e8.contentStoryId +
          " no longer exists on table " +
          this._tableId +
          " page " +
          this._pageId +
          ".",
      );
    return _0x550927;
  }
};
W = M([j(4, _0x392e1f(_0x18838b))], W);
function G(_0x4c7360) {
  return "pdf-facade-table-" + _0x4c7360 + "-" + _0x10ea46(12);
}
function gt(_0x2b1280) {
  switch (_0x2b1280) {
    case _0x21dc2a.LEFT:
      return "left";
    case _0x21dc2a.CENTER:
      return "center";
    case _0x21dc2a.RIGHT:
      return "right";
    case _0x21dc2a.JUSTIFIED:
    case _0x21dc2a.BOTH:
      return "justify";
    default:
      throw RangeError("PDF paragraph horizontal alignment is unsupported.");
  }
}
function _t(_0x2f1f94) {
  let _0x541125 = G("story"),
    _0x40ea8d = G("block"),
    _0x13e932 = G("run");
  return {
    id: _0x541125,
    objectIds: [_0x2f1f94],
    blocks: [{ id: _0x40ea8d, runIds: [_0x13e932], role: _0xbf9c6.PARAGRAPH }],
    runs: { [_0x13e932]: { id: _0x13e932, text: "", fontSize: 12 } },
  };
}
let K = class extends O {
  constructor(_0x33d302, _0x94ba4c, _0x264676, _0x4437da) {
    super(_0x33d302, _0x94ba4c, _0x264676, _0x4b26cb.TEXT_BOX, _0x4437da);
  }
  getText() {
    let _0x1d3aa2 = this._model["getMaterializedDocument"](),
      _0x12a5ea = _0x1d3aa2.objects[this._objectId];
    if (!_0x12a5ea || _0x12a5ea.type !== _0x4b26cb.TEXT_BOX)
      throw Error(
        "PDF\x20text\x20box\x20" +
          this._objectId +
          "\x20no\x20longer\x20exists\x20on\x20page\x20" +
          this._pageId +
          ".",
      );
    let _0x18b157 = _0x12a5ea;
    if (_0x18b157.runs)
      return _0x18b157.runs["map"]((_0x48f781) => _0x48f781.text).join("");
    let _0x3b3625 = _0x18b157.textStoryId
      ? _0x1d3aa2.textStories[_0x18b157.textStoryId]
      : undefined;
    return (
      (_0x3b3625 == null
        ? undefined
        : _0x3b3625.blocks["flatMap"]((_0x4ae07d) => _0x4ae07d.runIds)
            .map((_0x9037f) => {
              var _0xd819d4;
              return (
                ((_0xd819d4 = _0x3b3625.runs[_0x9037f]) == null
                  ? undefined
                  : _0xd819d4.text) ?? ""
              );
            })
            .join("")) ?? ""
    );
  }
  getTextRuns() {
    let _0x20ee5d = this._getCurrentObject();
    return JSON.parse(JSON.stringify(_0x20ee5d.runs ?? []));
  }
  setText(_0x20aca1) {
    return (
      this._getCurrentObject(),
      D(this._model, this._injector, _0x29e47e, {
        pageId: this._pageId,
        objectId: this._objectId,
        text: _0x20aca1,
      }),
      this
    );
  }
  setTextStyle(_0x51a394, _0x50d0c9) {
    return (
      this._getCurrentObject(),
      _0x50d0c9
        ? D(this._model, this._injector, _0xf1d0ee, {
            pageId: this._pageId,
            objectId: this._objectId,
            range: _0x50d0c9,
            textStyle: _0x51a394,
          })
        : D(this._model, this._injector, _0x1fb11d, {
            pageId: this._pageId,
            objectId: this._objectId,
            textStyle: _0x51a394,
          }),
      this
    );
  }
  getTextAnchor() {
    return this._getCurrentObject().textAnchor ?? _0x48552e.START;
  }
  setTextAnchor(_0x2c6c35) {
    return (
      this._getCurrentObject(),
      D(this._model, this._injector, _0x1fb11d, {
        pageId: this._pageId,
        objectId: this._objectId,
        textAnchor: _0x2c6c35,
      }),
      this
    );
  }
};
K = M([j(3, _0x392e1f(_0x18838b))], K);
let q = class {
  constructor(_0x26185e, _0x2d46e1, _0x55880d, _0x3e0a62, _0x2c5f5d) {
    ((this._model = _0x26185e),
      (this._pageId = _0x2d46e1),
      (this._target = _0x55880d),
      (this._rootDisplayListIds = _0x3e0a62),
      (this._injector = _0x2c5f5d),
      L(this, "_identity", undefined),
      L(this, "_id", undefined),
      L(this, "_text", undefined),
      L(this, "_runs", undefined),
      L(this, "_bounds", undefined),
      (this._identity = yt(_0x55880d)),
      (this._id = wt(_0x26185e.getUnitId(), _0x2d46e1, this._identity)),
      (this._text = _0x55880d.text),
      (this._runs = Tt(_0x55880d.runs ?? [])),
      (this._bounds = Ct(_0x55880d.bbox)));
  }
  getId() {
    return this._id;
  }
  getText() {
    return this._text;
  }
  getTextRuns() {
    return Tt(this._runs);
  }
  getBounds() {
    return { ...this._bounds };
  }
  replaceText(_0x2a0c6e) {
    var _0x594ca8, _0x3332b1;
    let _0x5bb5b8 = this._resolveCurrentTarget(),
      _0x46da82 = "pdf-facade-native-text-" + _0x10ea46(12),
      _0x19b648 =
        (_0x594ca8 = _0x5bb5b8.runs) == null ? undefined : _0x594ca8[0],
      _0x567f43 = _0x19b648
        ? [St(_0x19b648, _0x2a0c6e)]
        : [{ text: _0x2a0c6e, fontSize: 12 }];
    return (
      D(this._model, this._injector, _0x57c673, {
        pageId: this._pageId,
        text: _0x2a0c6e,
        bbox: _0x5bb5b8.promotionBbox ?? _0x5bb5b8.bbox,
        transform: _0x5bb5b8.promotionTransform,
        displayOperationIds: _0x5bb5b8.displayOperationIds ??
          ((_0x3332b1 = _0x5bb5b8.source) == null
            ? undefined
            : _0x3332b1.operatorIds) ?? [_0x5bb5b8.id],
        runs: _0x567f43,
        source: _0x5bb5b8.source,
        objectId: _0x46da82,
        zIndex: _0x5bb5b8.zIndex,
        metadata: _0x2ede44,
      }),
      this._injector["createInstance"](K, this._model, this._pageId, _0x46da82)
    );
  }
  _resolveCurrentTarget() {
    let _0x3ca355 = _0x44d95e(
      this._model["getMaterializedDocument"](),
      this._pageId,
      { rootDisplayListIds: this._rootDisplayListIds },
    ).find((_0x31496e) => yt(_0x31496e) === this._identity);
    if (!_0x3ca355 || vt(this._model, _0x3ca355))
      throw Error(
        "Native PDF text span " +
          this._id +
          " is stale, hidden, or already replaced.",
      );
    return _0x3ca355;
  }
};
q = M([j(4, _0x392e1f(_0x18838b))], q);
function vt(_0x6e7394, _0x14a9c4) {
  return Object.values(_0x6e7394.getEditState().sourceSuppressions).some(
    (_0xe00980) =>
      _0xe00980.exportDisposition !== _0x3fc2a6.PRESERVE_NATIVE &&
      bt(_0xe00980, _0x14a9c4),
  );
}
function yt(_0x484a3d) {
  var _0x3e4bb2, _0x2eafb3, _0x2ed415;
  return JSON.stringify(
    ((_0x3e4bb2 = _0x484a3d.source) == null
      ? undefined
      : _0x3e4bb2.operationPath) ?? [
      {
        displayListId:
          (_0x2eafb3 = _0x484a3d.source) == null ||
          (_0x2eafb3 = _0x2eafb3.displayListIds) == null
            ? undefined
            : _0x2eafb3[0],
        operatorId:
          ((_0x2ed415 = _0x484a3d.displayOperationIds) == null
            ? undefined
            : _0x2ed415[0]) ?? _0x484a3d.id,
      },
    ],
  );
}
function bt(_0x46f98e, _0x2a49ec) {
  var _0x2a5ced, _0x3b2da7;
  if (_0x46f98e.pageId && _0x46f98e.pageId !== _0x2a49ec.pageId) return false;
  if ((_0x2a5ced = _0x46f98e.operationPath) != null && _0x2a5ced.length) {
    var _0x28d62e;
    return xt(
      _0x46f98e.operationPath,
      (_0x28d62e = _0x2a49ec.source) == null
        ? undefined
        : _0x28d62e.operationPath,
    );
  }
  let _0x58fc0c = _0x2a49ec.displayOperationIds ??
    ((_0x3b2da7 = _0x2a49ec.source) == null
      ? undefined
      : _0x3b2da7.operatorIds) ?? [_0x2a49ec.id];
  return (_0x46f98e.operatorIds ?? []).some((_0x1f33e8) =>
    _0x58fc0c.includes(_0x1f33e8),
  );
}
function xt(_0x46d804, _0x561d64) {
  return !!(
    _0x561d64 &&
    _0x46d804.length === _0x561d64.length &&
    _0x46d804.every((_0x4137cb, _0x215590) => {
      let _0x42fd69 = _0x561d64[_0x215590];
      return (
        _0x4137cb.displayListId ===
          (_0x42fd69 == null ? undefined : _0x42fd69.displayListId) &&
        _0x4137cb.operatorId === _0x42fd69.operatorId &&
        _0x4137cb.resourceName === _0x42fd69.resourceName &&
        _0x4137cb.objectRef === _0x42fd69.objectRef &&
        _0x4137cb.assetId === _0x42fd69.assetId
      );
    })
  );
}
function St(_0x4318bf, _0xe1acd8) {
  let { glyphs: _0x21b56a, source: _0x3cfb0e, ..._0x50426c } = _0x4318bf;
  return { ..._0x50426c, text: _0xe1acd8 };
}
function Ct(_0x4ebf90) {
  return {
    left: _0x5605ac(_0x4ebf90[0]),
    top: _0x5605ac(_0x4ebf90[1]),
    width: _0x5605ac(_0x4ebf90[2] - _0x4ebf90[0]),
    height: _0x5605ac(_0x4ebf90[3] - _0x4ebf90[1]),
  };
}
function wt(_0x333c01, _0xd3f143, _0x3293c3) {
  let _0x20cae0 = _0x333c01 + ":" + _0xd3f143 + ":" + _0x3293c3,
    _0x727ba7 = 2166136261;
  for (let _0x4d1d0e = 0; _0x4d1d0e < _0x20cae0.length; _0x4d1d0e++)
    ((_0x727ba7 ^= _0x20cae0.charCodeAt(_0x4d1d0e)),
      (_0x727ba7 = Math.imul(_0x727ba7, 16777619)));
  return "pdf-native-text-" + (_0x727ba7 >>> 0).toString(36);
}
function Tt(_0x35c9b2) {
  return JSON.parse(JSON.stringify(_0x35c9b2));
}
let J = class {
  constructor(_0x522463, _0xc18574, _0x237152) {
    ((this._model = _0x522463),
      (this._pageId = _0xc18574),
      (this._injector = _0x237152));
  }
  getId() {
    return this._pageId;
  }
  getIndex() {
    return this._getCurrentPage().index;
  }
  getData() {
    return JSON.parse(JSON.stringify(this._getCurrentPage()));
  }
  getElements() {
    return Object.values(this._model["getEditState"]().overlayObjects)
      .filter((_0x326aaf) => _0x326aaf.pageId === this._pageId)
      .sort((_0x4f993e, _0x7f1e6a) => _0x4f993e.zIndex - _0x7f1e6a.zIndex)
      .flatMap((_0x3a7aad) => {
        let _0x52e004 = this._createElement(_0x3a7aad.object["id"]);
        return _0x52e004 ? [_0x52e004] : [];
      });
  }
  getElementById(_0x577983) {
    let _0x9afd12 = this._model["getEditState"]().overlayObjects[_0x577983];
    return !_0x9afd12 || _0x9afd12.pageId !== this._pageId
      ? null
      : this._createElement(_0x577983);
  }
  getTextBoxes() {
    return this._filterTextElements((_0x32db81) => !_0x32db81);
  }
  getImages() {
    return this.getElements().filter(
      (_0x32e4a0) => _0x32e4a0.getType() === _0x4b26cb.IMAGE,
    );
  }
  getParagraphs() {
    return this._filterTextElements(
      (_0x1cfde4) => !!(_0x1cfde4 && !Et(_0x1cfde4)),
    );
  }
  getLists() {
    return this._filterTextElements(
      (_0x113f54) => !!(_0x113f54 && Et(_0x113f54)),
    );
  }
  getTables() {
    return this.getElements().filter(
      (_0x851eff) => _0x851eff.getType() === _0x4b26cb.TABLE,
    );
  }
  getDividers() {
    return this.getElements().filter(
      (_0x1bbf49) => _0x1bbf49.getType() === _0x4b26cb.PATH,
    );
  }
  getAnnotations() {
    return this.getElements().filter(
      (_0x7adcb9) => _0x7adcb9.getType() === _0x4b26cb.ANNOTATION,
    );
  }
  getTextSpans() {
    let _0x585679 = this._model["getMaterializedDocument"](),
      _0x4e580e = jt(_0x585679, this._pageId);
    return _0x44d95e(_0x585679, this._pageId, { rootDisplayListIds: _0x4e580e })
      .filter((_0x1f6987) => !vt(this._model, _0x1f6987))
      .map((_0x4f30e5) =>
        this._injector["createInstance"](
          q,
          this._model,
          this._pageId,
          _0x4f30e5,
          _0x4e580e,
        ),
      );
  }
  insertTextBox(_0xdf0105) {
    let _0x3b42be = this._getCurrentPage(),
      _0x485365 = Y("textBox", _0xdf0105.id),
      { bbox: _0x14a6db, transform: _0x145e82 } = Z(
        _0xdf0105,
        _0x4dfee1(_0x3b42be),
      );
    return (
      D(this._model, this._injector, _0x27f3d3, {
        pageId: this._pageId,
        text: _0xdf0105.text,
        objectId: _0x485365,
        zIndex: _0xdf0105.index,
        bbox: _0x14a6db,
        transform: _0x145e82,
        fontFamily: _0xdf0105.fontFamily,
        fontSize: _0xdf0105.fontSize,
        fill: _0xdf0105.fill,
      }),
      this._injector["createInstance"](K, this._model, this._pageId, _0x485365)
    );
  }
  insertParagraph(_0x4d65eb) {
    let _0x1afd01 = this._getCurrentPage(),
      _0x4106e8 = Y("paragraph", _0x4d65eb.id),
      _0x97ac4b = Z(_0x4d65eb, _0x278c94(_0x1afd01));
    return (
      D(this._model, this._injector, _0x4c4f58, {
        pageId: this._pageId,
        objectId: _0x4106e8,
        text: _0x4d65eb.text,
        zIndex: _0x4d65eb.index,
        ..._0x97ac4b,
        fontFamily: _0x4d65eb.fontFamily,
        fontSize: _0x4d65eb.fontSize,
        fill: _0x4d65eb.fill,
      }),
      this._injector["createInstance"](H, this._model, this._pageId, _0x4106e8)
    );
  }
  insertList(_0x336c26) {
    let _0x5632c0 = this._getCurrentPage(),
      _0x4d3bf2 = Y("list", _0x336c26.id),
      _0x530240 = Z(_0x336c26, _0x38f46e(_0x5632c0));
    return (
      D(this._model, this._injector, _0x1a1d5a, {
        pageId: this._pageId,
        objectId: _0x4d3bf2,
        text: _0x336c26.text,
        kind: _0x336c26.kind,
        presetId: _0x336c26.preset,
        zIndex: _0x336c26.index,
        ..._0x530240,
        fontFamily: _0x336c26.fontFamily,
        fontSize: _0x336c26.fontSize,
        fill: _0x336c26.fill,
      }),
      this._injector["createInstance"](V, this._model, this._pageId, _0x4d3bf2)
    );
  }
  insertTable(_0x3f9cc0) {
    let _0x379b61 = this._getCurrentPage(),
      _0x1eeaf4 = Y("table", _0x3f9cc0.id),
      _0x46476d = _0x157809(
        _0x379b61,
        _0x3f9cc0.rowCount,
        _0x3f9cc0.columnCount,
      ),
      _0x3c74c1 = Z(_0x3f9cc0, _0x46476d.bbox);
    return (
      D(this._model, this._injector, _0x4fa112, {
        pageId: this._pageId,
        tableId: _0x1eeaf4,
        rowCount: _0x3f9cc0.rowCount,
        columnCount: _0x3f9cc0.columnCount,
        cellTexts: _0x3f9cc0.cellTexts,
        defaultCellStyle: _0x3f9cc0.defaultCellStyle ?? {
          padding: {
            top: _0x46476d.padding,
            right: _0x46476d.padding,
            bottom: _0x46476d.padding,
            left: _0x46476d.padding,
          },
        },
        styleId: _0x3f9cc0.styleId,
        options: _0x3f9cc0.options,
        zIndex: _0x3f9cc0.index,
        ..._0x3c74c1,
      }),
      this._injector["createInstance"](U, this._model, this._pageId, _0x1eeaf4)
    );
  }
  insertDivider(_0x5937ff = {}) {
    let _0x13124a = this._getCurrentPage(),
      _0x1b8d9b = Y("divider", _0x5937ff.id),
      _0x46ad4a = Z(_0x5937ff, _0x15fb11(_0x13124a));
    return (
      D(this._model, this._injector, _0xbfc91b, {
        pageId: this._pageId,
        objectId: _0x1b8d9b,
        strokeColor: _0x5937ff.strokeColor,
        strokeWidth:
          _0x5937ff.strokeWidth === undefined
            ? undefined
            : _0x28bed2(_0x5937ff.strokeWidth),
        zIndex: _0x5937ff.index,
        ..._0x46ad4a,
      }),
      this._injector["createInstance"](F, this._model, this._pageId, _0x1b8d9b)
    );
  }
  insertAnnotation(_0x4b6d2c) {
    let _0x46f30d = Y("annotation", _0x4b6d2c.id),
      _0x1ef19b = Z(_0x4b6d2c, [0, 0, _0x28bed2(144), _0x28bed2(36)]);
    return (
      D(this._model, this._injector, _0x1d2ee7, {
        pageId: this._pageId,
        objectId: _0x46f30d,
        annotationType: _0x4b6d2c.annotationType,
        ...Ot(_0x4b6d2c, _0x1ef19b.bbox),
        zIndex: _0x4b6d2c.index,
        ..._0x1ef19b,
      }),
      this._injector["createInstance"](N, this._model, this._pageId, _0x46f30d)
    );
  }
  newImage(_0x2db304) {
    return _0x2db304 instanceof R
      ? _0x2db304.toBuilder()
      : new it(
          this._model["getUnitId"](),
          this._pageId,
          _0x2db304 ? { id: _0x2db304 } : undefined,
        );
  }
  insertImage(_0x400e26, _0x35f821) {
    Dt(this._model, this._pageId, _0x400e26);
    let _0x323c11 = st(this._model, _0x400e26),
      _0x1fe32c = ct(_0x400e26.element["transform"]);
    return (
      D(this._model, this._injector, _0x27b3e2, {
        pageId: this._pageId,
        objectId: _0x400e26.element["id"],
        assetId: _0x323c11.asset["id"],
        resource: _0x323c11,
        crop: _0x400e26.element["crop"]
          ? lt(_0x400e26.element["crop"], _0x1fe32c.bbox)
          : undefined,
        opacity: _0x400e26.element["opacity"],
        zIndex: _0x35f821,
        ..._0x1fe32c,
      }),
      this._injector["createInstance"](
        R,
        this._model,
        this._pageId,
        _0x400e26.element["id"],
      )
    );
  }
  async insertImageAsync(_0x24b2c9, _0x4ecbd1 = {}) {
    let _0x1ee93f = this.newImage(_0x4ecbd1.id),
      _0x540ccf =
        typeof _0x24b2c9 == "string"
          ? _0x24b2c9
          : await _0x24b2c9.getBlob().getDataAsString();
    (_0x1ee93f.setSource(_0x540ccf, _0x4ecbd1.imageSourceType),
      (_0x4ecbd1.left !== undefined || _0x4ecbd1.top !== undefined) &&
        _0x1ee93f.setAbsolutePosition(_0x4ecbd1.left ?? 0, _0x4ecbd1.top ?? 0),
      (_0x4ecbd1.width !== undefined || _0x4ecbd1.height !== undefined) &&
        _0x1ee93f.setSize(_0x4ecbd1.width ?? 288, _0x4ecbd1.height ?? 162),
      _0x4ecbd1.rotation !== undefined &&
        _0x1ee93f.setRotation(_0x4ecbd1.rotation),
      _0x4ecbd1.crop && _0x1ee93f.setCrop(_0x4ecbd1.crop));
    let _0x4a1085 = _0x1ee93f.build();
    return (
      (_0x4a1085.element["opacity"] = _0x4ecbd1.opacity),
      this.insertImage(_0x4a1085, _0x4ecbd1.index)
    );
  }
  _filterTextElements(_0x26e8be) {
    let _0x253a74 = this.getElements().filter(
      (_0x523dc7) => _0x523dc7.getType() === _0x4b26cb.TEXT_BOX,
    );
    if (_0x253a74.length === 0) return [];
    let _0x311386 = this._model["getMaterializedDocument"]();
    return _0x253a74.filter((_0x714f04) =>
      _0x26e8be(this._getTextStory(_0x311386, _0x714f04.getId())),
    );
  }
  _getTextStory(_0x340b71, _0x59b6af) {
    var _0x1e5af8;
    let _0x58818e =
      _0x340b71.objects[_0x59b6af] ??
      ((_0x1e5af8 = this._model["getEditState"]().overlayObjects[_0x59b6af]) ==
      null
        ? undefined
        : _0x1e5af8.object);
    return (_0x58818e == null ? undefined : _0x58818e.type) ===
      _0x4b26cb.TEXT_BOX && _0x58818e.textStoryId
      ? _0x340b71.textStories[_0x58818e.textStoryId]
      : undefined;
  }
  _createElement(_0x3f140f) {
    var _0x268a34;
    let _0x27a717 = this._model["getMaterializedDocument"](),
      _0x5017a1 =
        _0x27a717.objects[_0x3f140f] ??
        ((_0x268a34 =
          this._model["getEditState"]().overlayObjects[_0x3f140f]) == null
          ? undefined
          : _0x268a34.object);
    if (!_0x5017a1) return null;
    if (_0x5017a1.type === _0x4b26cb.TEXT_BOX) {
      let _0x2b6ce3 = _0x5017a1.textStoryId,
        _0x22cf71 = _0x2b6ce3 ? _0x27a717.textStories[_0x2b6ce3] : undefined;
      return _0x22cf71
        ? Et(_0x22cf71)
          ? this._injector["createInstance"](
              V,
              this._model,
              this._pageId,
              _0x3f140f,
            )
          : this._injector["createInstance"](
              H,
              this._model,
              this._pageId,
              _0x3f140f,
            )
        : this._injector["createInstance"](
            K,
            this._model,
            this._pageId,
            _0x3f140f,
          );
    }
    return _0x5017a1.type === _0x4b26cb.IMAGE
      ? this._injector["createInstance"](
          R,
          this._model,
          this._pageId,
          _0x3f140f,
        )
      : _0x5017a1.type === _0x4b26cb.TABLE
        ? this._injector["createInstance"](
            U,
            this._model,
            this._pageId,
            _0x3f140f,
          )
        : _0x5017a1.type === _0x4b26cb.PATH && _0x292ae0(_0x5017a1)
          ? this._injector["createInstance"](
              F,
              this._model,
              this._pageId,
              _0x3f140f,
            )
          : _0x5017a1.type === _0x4b26cb.ANNOTATION
            ? this._injector["createInstance"](
                N,
                this._model,
                this._pageId,
                _0x3f140f,
              )
            : null;
  }
  _getCurrentPage() {
    let _0xb6c2d8 = this._model["getMaterializedDocument"]().pages["find"](
      (_0x254ab6) => _0x254ab6.id === this._pageId,
    );
    if (!_0xb6c2d8)
      throw Error("PDF page " + this._pageId + " no longer exists.");
    return _0xb6c2d8;
  }
};
J = M([j(2, _0x392e1f(_0x18838b))], J);
function Et(_0x15c3b2) {
  return (
    _0x15c3b2.blocks["some"]((_0x27dac0) => !!_0x27dac0.listItem) ||
    Object.keys(_0x15c3b2.lists ?? {}).length > 0
  );
}
function Y(_0x24a88f, _0x4e4357) {
  return _0x4e4357 ?? "pdf-facade-" + _0x24a88f + "-" + _0x10ea46(12);
}
function Dt(_0xff4551, _0x4293b0, _0x28d6b7) {
  if (
    _0x28d6b7.unitId !== _0xff4551.getUnitId() ||
    _0x28d6b7.pageId !== _0x4293b0
  )
    throw RangeError(
      "PDF\x20image\x20builder\x20info\x20belongs\x20to\x20another\x20PDF\x20unit\x20or\x20page.",
    );
}
function Ot(_0x4e36f6, _0x57612b) {
  let _0x21c9d7 = _0x4e36f6.annotationType;
  switch (_0x4e36f6.annotationType) {
    case _0x3296d0.HIGHLIGHT:
    case _0x3296d0.UNDERLINE:
    case _0x3296d0.STRIKEOUT:
    case _0x3296d0.SQUIGGLY: {
      let {
        quadPoints: _0x42af38,
        stroke: _0x12eb8b,
        ..._0x375292
      } = _0x4e36f6.markup ?? {};
      return {
        markup: {
          ..._0x375292,
          ...(_0x12eb8b === undefined ? {} : { stroke: T(_0x12eb8b) }),
          quadPoints:
            _0x42af38 != null && _0x42af38.length
              ? _0x42af38.map(kt)
              : [At(_0x57612b)],
        },
      };
    }
    case _0x3296d0.INK: {
      if (
        !_0x4e36f6.ink["paths"].length ||
        _0x4e36f6.ink["paths"].some((_0x52006e) => !_0x52006e.length)
      )
        throw RangeError(
          "PDF ink annotation requires at least one non-empty path.",
        );
      let { paths: _0x562c73, stroke: _0x556c79 } = _0x4e36f6.ink;
      return {
        ink: {
          ...(_0x556c79 === undefined ? {} : { stroke: T(_0x556c79) }),
          paths: _0x562c73.map((_0x404e07) => _0x404e07.map(X)),
        },
      };
    }
    default:
      throw RangeError(
        "Unsupported\x20PDF\x20Facade\x20annotation\x20type:\x20" +
          _0x21c9d7 +
          ".",
      );
  }
}
function X([_0x1b0281, _0x4730c5]) {
  return [_0x28bed2(_0x1b0281), _0x28bed2(_0x4730c5)];
}
function kt([_0x5a5dfb, _0x158db3, _0x5d99ff, _0x30d5d9]) {
  return [X(_0x5a5dfb), X(_0x158db3), X(_0x5d99ff), X(_0x30d5d9)];
}
function At([_0x1a5684, _0x474f24, _0x19bfb8, _0x1fd24a]) {
  return [
    [_0x1a5684, _0x474f24],
    [_0x19bfb8, _0x474f24],
    [_0x1a5684, _0x1fd24a],
    [_0x19bfb8, _0x1fd24a],
  ];
}
function jt(_0x50f76f, _0x1bb322) {
  let _0x254368 = Object.values(_0x50f76f.displayLists).filter(
      (_0x4dfc54) => _0x4dfc54.pageId === _0x1bb322,
    ),
    _0x28f3e2 = new Set();
  _0x254368.forEach((_0x49e6cd) => {
    _0x49e6cd.ops["forEach"]((_0xf802db) => {
      var _0x2fe441;
      if (_0xf802db.type !== _0xb49658.FORM_XOBJECT) return;
      let _0x2d179c =
        _0xf802db.displayListId ??
        (_0xf802db.assetId
          ? (_0x2fe441 = _0x50f76f.assets["formXObjects"][_0xf802db.assetId]) ==
            null
            ? undefined
            : _0x2fe441.displayListId
          : undefined);
      _0x2d179c && _0x28f3e2.add(_0x2d179c);
    });
  });
  let _0x2f9354 = _0x254368
    .map((_0x3caaad) => _0x3caaad.id)
    .filter((_0x1fee7c) => !_0x28f3e2.has(_0x1fee7c));
  return _0x2f9354.length
    ? _0x2f9354
    : _0x254368.map((_0x36b3a7) => _0x36b3a7.id);
}
function Z(_0xe0b0be, _0xb170b3) {
  let _0xa6831c = _0xe0b0be.left ?? _0x5605ac(_0xb170b3[0]),
    _0xd8cb88 = _0xe0b0be.top ?? _0x5605ac(_0xb170b3[1]),
    _0xa6e11c = _0xe0b0be.width ?? _0x5605ac(_0xb170b3[2] - _0xb170b3[0]),
    _0x5df1d3 = _0xe0b0be.height ?? _0x5605ac(_0xb170b3[3] - _0xb170b3[1]),
    _0x3d5129 = _0xe0b0be.rotation ?? 0;
  (Q(_0xa6831c, "left"),
    Q(_0xd8cb88, "top"),
    Nt(_0xa6e11c, "width"),
    Nt(_0x5df1d3, "height"),
    Q(_0x3d5129, "rotation"));
  let _0x11c6f1 = [
    _0x28bed2(_0xa6831c),
    _0x28bed2(_0xd8cb88),
    _0x28bed2(_0xa6831c + _0xa6e11c),
    _0x28bed2(_0xd8cb88 + _0x5df1d3),
  ];
  return {
    bbox: _0x11c6f1,
    ...(_0x3d5129 === 0 ? {} : { transform: Mt(_0x11c6f1, _0x3d5129) }),
  };
}
function Mt(_0x34dc96, _0xcd334f) {
  let _0x2d1206 = (_0xcd334f * Math.PI) / 180,
    _0x137b92 = Math.cos(_0x2d1206),
    _0x4cd85e = Math.sin(_0x2d1206),
    _0x35d49f = (_0x34dc96[0] + _0x34dc96[2]) / 2,
    _0x25378c = (_0x34dc96[1] + _0x34dc96[3]) / 2;
  return [
    _0x137b92,
    _0x4cd85e,
    -_0x4cd85e,
    _0x137b92,
    _0x35d49f - _0x137b92 * _0x35d49f + _0x4cd85e * _0x25378c,
    _0x25378c - _0x4cd85e * _0x35d49f - _0x137b92 * _0x25378c,
  ];
}
function Q(_0x10cc5a, _0x3bb5f0) {
  if (!Number.isFinite(_0x10cc5a))
    throw RangeError("PDF text box " + _0x3bb5f0 + " must be a finite number.");
}
function Nt(_0x584f9b, _0x38d88c) {
  if (!Number.isFinite(_0x584f9b) || _0x584f9b <= 0)
    throw RangeError(
      "PDF text box " + _0x38d88c + " must be a positive finite number.",
    );
}
let $ = class extends _0x1dadfb {
  constructor(_0x508e11, _0x434817) {
    (super(_0x434817), (this._model = _0x508e11), (this._injector = _0x434817));
  }
  getId() {
    return this._model["getUnitId"]();
  }
  getName() {
    return this._model["getSnapshot"]().name;
  }
  save() {
    return _0x284d5b.deepClone(this._model["getSnapshot"]());
  }
  getDocument() {
    return this._model["getDocument"]();
  }
  getModel() {
    return this._model;
  }
  insertPage(_0x59817f) {
    let _0x1b228f = this._model["getMaterializedDocument"]().pages,
      _0x26cb55 = _0x59817f ?? _0x1b228f.length;
    if (
      !Number.isInteger(_0x26cb55) ||
      _0x26cb55 < 0 ||
      _0x26cb55 > _0x1b228f.length
    )
      throw RangeError("PDF page insertion index is outside the document.");
    let _0x311dbf = _0x1b228f[_0x26cb55 - 1] ?? _0x1b228f[_0x26cb55],
      _0x5c5d95 = _0x255631({
        id: "pdf-page-" + _0x10ea46(12),
        index: _0x26cb55,
        size: _0x311dbf
          ? { ..._0x311dbf.size }
          : { width: _0x28bed2(_0x17b396), height: _0x28bed2(_0x51f27c) },
        rotation: _0x311dbf == null ? undefined : _0x311dbf.rotation,
        pdfBoxes: _0x311dbf == null ? undefined : _0x311dbf.pdfBoxes,
      });
    return (
      D(this._model, this._injector, _0x5dcff7, {
        page: _0x5c5d95,
        atIndex: _0x26cb55,
        orderedPageIds: _0x1b228f.map((_0x324157) => _0x324157.id),
      }),
      this._injector["createInstance"](J, this._model, _0x5c5d95.id)
    );
  }
  getPages() {
    return this._model["getMaterializedDocument"]().pages["map"]((_0x539363) =>
      this._injector["createInstance"](J, this._model, _0x539363.id),
    );
  }
  getPageById(_0x1a2a0c) {
    return (
      this.getPages().find((_0x3cb2a5) => _0x3cb2a5.getId() === _0x1a2a0c) ??
      null
    );
  }
  getPageByIndex(_0x3cc942) {
    return this.getPages()[_0x3cc942] ?? null;
  }
};
$ = M([j(1, _0x392e1f(_0x18838b))], $);
var Pt = class extends _0x4164c2 {
  createPdf(_0x286dc7 = {}, _0x432194) {
    let _0x3de6ae = this._injector["get"](_0x16413e).createUnit(
      _0x52b090.UNIVER_PDF,
      _0x286dc7,
      _0x432194,
    );
    return this._injector["createInstance"]($, _0x3de6ae);
  }
  getActivePdf() {
    let _0xecd9ea = this._injector["get"](_0x16413e).getCurrentUnitOfType(
      _0x52b090.UNIVER_PDF,
    );
    return _0xecd9ea ? this._injector["createInstance"]($, _0xecd9ea) : null;
  }
  getPdf(_0x2ceb75) {
    let _0x430d89 = this._injector["get"](_0x16413e).getUnit(
      _0x2ceb75,
      _0x52b090.UNIVER_PDF,
    );
    return _0x430d89 ? this._injector["createInstance"]($, _0x430d89) : null;
  }
  getPdfTableThemePresets() {
    return _0x268707.map(({ id: _0x1f3d36, group: _0x21e1ac }) => ({
      id: _0x1f3d36,
      group: _0x21e1ac,
    }));
  }
};
_0x4164c2.extend(Pt);
export {
  $ as FPdf,
  N as FPdfAnnotation,
  F as FPdfDivider,
  R as FPdfImage,
  it as FPdfImageBuilder,
  V as FPdfList,
  J as FPdfPage,
  O as FPdfPageElement,
  H as FPdfParagraph,
  U as FPdfTable,
  W as FPdfTableCell,
  K as FPdfTextBox,
  q as FPdfTextSpan,
};
