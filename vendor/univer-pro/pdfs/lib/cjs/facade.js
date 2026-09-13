Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs-pro/pdfs"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/core");
var r = class extends t.FEnum {
  get PdfAnnotationType() {
    return e.PdfAnnotationType;
  }
  get PdfListKind() {
    return e.PdfListKind;
  }
  get PdfListPresetId() {
    return e.PdfListPresetId;
  }
  get PdfTextAnchor() {
    return e.PdfTextAnchor;
  }
  get PdfTableCellVerticalAlign() {
    return e.PdfTableCellVerticalAlign;
  }
};
t.FEnum["extend"](r);
function i(var_core_value_sigD9DB) {
  if (var_core_value_sigD9DB == null) return var_core_value_sigD9DB;
  let {
    width: var_core_value_sigA363,
    dash: var_core_value_sigFBA5,
    dashPhase: var_core_value_sigAC47,
    ...var_core_value_sigA06F
  } = var_core_value_sigD9DB;
  return {
    ...var_core_value_sigA06F,
    ...(var_core_value_sigA363 === undefined ? {} : {
      width: (0, e.ptToEmu)(var_core_value_sigA363)
    }),
    ...(var_core_value_sigFBA5 === undefined ? {} : {
      dash: var_core_value_sigFBA5.map(var_core_value_sig7F72 => (0, e.ptToEmu)(var_core_value_sig7F72))
    }),
    ...(var_core_value_sigAC47 === undefined ? {} : {
      dashPhase: (0, e.ptToEmu)(var_core_value_sigAC47)
    })
  };
}
function a(var_core_value_sig770E) {
  if (!var_core_value_sig770E) return;
  let {
    width: var_core_value_sig4654,
    dash: var_core_value_sigB26B,
    dashPhase: var_core_value_sig019B,
    ...var_core_value_sigC6BC
  } = var_core_value_sig770E;
  return {
    ...var_core_value_sigC6BC,
    ...(var_core_value_sig4654 === undefined ? {} : {
      width: (0, e.emuToPt)(var_core_value_sig4654)
    }),
    ...(var_core_value_sigB26B === undefined ? {} : {
      dash: var_core_value_sigB26B.map(var_core_value_sig7B2A => (0, e.emuToPt)(var_core_value_sig7B2A))
    }),
    ...(var_core_value_sig019B === undefined ? {} : {
      dashPhase: (0, e.emuToPt)(var_core_value_sig019B)
    })
  };
}
function o(var_core_value_sig8EC2, var_core_value_sigA8C3, var_core_value_sig5276, var_core_value_sig031B) {
  let var_core_value_sig9DC0 = var_core_value_sig8EC2.getUnitId(),
    var_core_value_sig95F0 = Date.now(),
    var_core_value_sig9CCB = (0, e.createPdfEditorSession)({
      id: var_core_value_sig9DC0 + ":facade",
      documentId: var_core_value_sig9DC0,
      now: var_core_value_sig95F0
    }),
    var_core_value_sigE718 = var_core_value_sig5276.execute({
      documentId: var_core_value_sig9DC0,
      editState: var_core_value_sig8EC2.getEditState(),
      selection: var_core_value_sig9CCB.selection,
      baseRevision: var_core_value_sig8EC2.getEditState().revision,
      now: var_core_value_sig95F0,
      createId: var_core_value_sig06CD => var_core_value_sig9DC0 + ":" + var_core_value_sig06CD + ":" + (0, n.generateRandomId)(12)
    }, var_core_value_sig031B),
    var_core_value_sigAEC8 = var_core_value_sigE718.batch;
  if (!var_core_value_sigAEC8) throw Error("PDF action " + var_core_value_sig5276.id + "\x20did\x20not\x20produce\x20a\x20durable\x20mutation\x20batch.");
  if (!var_core_value_sigA8C3.get(n.ICommandService).syncExecuteCommand(e.ApplyPdfMutationBatchMutation["id"], {
    unitId: var_core_value_sig9DC0,
    batch: var_core_value_sigAEC8
  })) throw Error("PDF\x20action\x20" + var_core_value_sig5276.id + " was rejected.");
  return s(var_core_value_sig8EC2, var_core_value_sigA8C3, var_core_value_sigAEC8), var_core_value_sigE718;
}
function s(var_core_value_sigB977, var_core_value_sig2949, var_core_value_sig308A) {
  let var_core_value_sig528D = var_core_value_sig308A.mutations["map"](var_core_value_sigA5F1 => var_core_value_sigA5F1.inverse).reverse();
  if (!var_core_value_sig528D.every(Boolean)) return;
  let var_core_value_sigA309 = var_core_value_sigB977.getUnitId();
  var_core_value_sig2949.get(n.IUniverInstanceService).focusUnit(var_core_value_sigA309), var_core_value_sig2949.get(n.IUndoRedoService).pushUndoRedo({
    unitID: var_core_value_sigA309,
    id: var_core_value_sig308A.id,
    undoMutations: [{
      id: e.ApplyPdfHistoryCommand["id"],
      params: {
        unitId: var_core_value_sigA309,
        source: e.PdfEditorMutationSource["UNDO"],
        mutations: var_core_value_sig528D,
        atomic: var_core_value_sig308A.atomic
      }
    }],
    redoMutations: [{
      id: e.ApplyPdfHistoryCommand["id"],
      params: {
        unitId: var_core_value_sigA309,
        source: e.PdfEditorMutationSource["REDO"],
        mutations: var_core_value_sig308A.mutations,
        atomic: var_core_value_sig308A.atomic
      }
    }]
  });
}
var c = class {
  constructor(var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig4F59, var_core_value_sigF564, var_core_value_sig8CFA) {
    this._model = var_core_value_sig97A2, this._pageId = var_core_value_sig07E9, this._objectId = var_core_value_sig4F59, this._objectType = var_core_value_sigF564, this._injector = var_core_value_sig8CFA;
  }
  getId() {
    return this._objectId;
  }
  getType() {
    return this._objectType;
  }
  getData() {
    return n.Tools["deepClone"](this._getCurrentObject());
  }
  getTransform() {
    let var_core_value_sig2E11 = this._getCurrentObject(),
      [var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sigCE71, var_core_value_sig21D8] = var_core_value_sig2E11.bbox,
      var_core_value_sig2B65 = var_core_value_sig2E11.transform,
      var_core_value_sigD7EA = var_core_value_sig2B65 ? l(Math.atan2(var_core_value_sig2B65[1], var_core_value_sig2B65[0]) * 180 / Math.PI) : 0,
      var_core_value_sigB33B = var_core_value_sig2B65 ? var_core_value_sig2B65[0] * var_core_value_sig2B65[3] - var_core_value_sig2B65[1] * var_core_value_sig2B65[2] : 1;
    return {
      left: (0, e.emuToPt)(var_core_value_sig5B69),
      top: (0, e.emuToPt)(var_core_value_sigB098),
      width: (0, e.emuToPt)(var_core_value_sigCE71 - var_core_value_sig5B69),
      height: (0, e.emuToPt)(var_core_value_sig21D8 - var_core_value_sigB098),
      rotation: var_core_value_sigD7EA,
      flipX: false,
      flipY: var_core_value_sigB33B < 0
    };
  }
  setTransform(var_core_value_sig24B9) {
    d(var_core_value_sig24B9.left, "left"), d(var_core_value_sig24B9.top, "top"), f(var_core_value_sig24B9.width, "width"), f(var_core_value_sig24B9.height, "height"), d(var_core_value_sig24B9.rotation, "rotation");
    let var_core_value_sigE627 = [(0, e.ptToEmu)(var_core_value_sig24B9.left), (0, e.ptToEmu)(var_core_value_sig24B9.top), (0, e.ptToEmu)(var_core_value_sig24B9.left + var_core_value_sig24B9.width), (0, e.ptToEmu)(var_core_value_sig24B9.top + var_core_value_sig24B9.height)];
    return this._setPlacement(var_core_value_sigE627, u(var_core_value_sigE627, var_core_value_sig24B9)), this;
  }
  setPosition(var_core_value_sigEF3E, var_core_value_sig273D) {
    return d(var_core_value_sigEF3E, "left"), d(var_core_value_sig273D, "top"), this.setTransform({
      ...this.getTransform(),
      left: var_core_value_sigEF3E,
      top: var_core_value_sig273D
    });
  }
  setSize(var_core_value_sig9A0D, var_core_value_sigA319) {
    return f(var_core_value_sig9A0D, "width"), f(var_core_value_sigA319, "height"), this.setTransform({
      ...this.getTransform(),
      width: var_core_value_sig9A0D,
      height: var_core_value_sigA319
    });
  }
  setRotation(var_core_value_sig2D58) {
    return d(var_core_value_sig2D58, "rotation"), this.setTransform({
      ...this.getTransform(),
      rotation: var_core_value_sig2D58
    });
  }
  setVisible(var_core_value_sig223F) {
    return o(this._model, this._injector, e.pdfUpdateObjectStateAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      visible: var_core_value_sig223F
    }), this;
  }
  setLocked(var_core_value_sigD749) {
    return o(this._model, this._injector, e.pdfUpdateObjectStateAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      locked: var_core_value_sigD749
    }), this;
  }
  bringToFront() {
    let var_core_value_sigCFFA = this._getPageZIndexes().reduce((var_core_value_sig4D4C, var_core_value_sigC9E0) => Math.max(var_core_value_sig4D4C, var_core_value_sigC9E0), 0);
    return this._setZIndex(var_core_value_sigCFFA + 1), this;
  }
  sendToBack() {
    return this._setZIndex(0), this;
  }
  bringForward() {
    return this._reorderBy(1), this;
  }
  sendBackward() {
    return this._reorderBy(-1), this;
  }
  remove() {
    this._getCurrentObject(), o(this._model, this._injector, e.pdfDeleteObjectsAction, {
      pageId: this._pageId,
      objectIds: [this._objectId]
    });
  }
  _getCurrentObject() {
    if (!this._model["getMaterializedDocument"]().pages["some"](var_core_value_sig76BA => var_core_value_sig76BA.id === this._pageId)) throw Error("PDF page " + this._pageId + "\x20no\x20longer\x20exists.");
    let var_core_value_sig58C1 = this._model["getEditState"]().overlayObjects[this._objectId];
    if (!var_core_value_sig58C1 || var_core_value_sig58C1.pageId !== this._pageId) throw Error("PDF element " + this._objectId + "\x20no\x20longer\x20exists\x20on\x20page\x20" + this._pageId + ".");
    return var_core_value_sig58C1.object;
  }
  _setPlacement(var_core_value_sig5090, var_core_value_sigC368) {
    o(this._model, this._injector, e.pdfMoveObjectAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      bbox: var_core_value_sig5090,
      transform: var_core_value_sigC368
    });
  }
  _setZIndex(var_core_value_sigAD56) {
    this._getCurrentObject(), o(this._model, this._injector, e.pdfReorderObjectAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      zIndex: var_core_value_sigAD56
    });
  }
  _reorderBy(var_core_value_sigDB4A) {
    this._getCurrentObject(), o(this._model, this._injector, e.pdfReorderObjectAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      delta: var_core_value_sigDB4A
    });
  }
  _getPageZIndexes() {
    return Object.values(this._model["getEditState"]().overlayObjects).filter(var_core_value_sigFBFA => var_core_value_sigFBFA.pageId === this._pageId).map(var_core_value_sigF602 => var_core_value_sigF602.zIndex);
  }
};
function l(var_core_value_sig9E20) {
  let var_core_value_sig26BB = Math.round(var_core_value_sig9E20 % 360 * 1000000000) / 1000000000;
  return Object.is(var_core_value_sig26BB, -0) ? 0 : var_core_value_sig26BB;
}
function u(var_core_value_sig19B4, var_core_value_sig218A) {
  let var_core_value_sig14CB = (var_core_value_sig19B4[0] + var_core_value_sig19B4[2]) / 2,
    var_core_value_sigFDEE = (var_core_value_sig19B4[1] + var_core_value_sig19B4[3]) / 2,
    var_core_value_sigA676 = var_core_value_sig218A.rotation,
    var_core_value_sigC27E = var_core_value_sig218A.flipY;
  var_core_value_sig218A.flipX && (var_core_value_sigA676 += 180, var_core_value_sigC27E = !var_core_value_sigC27E);
  let var_core_value_sigA70D = var_core_value_sigA676 * Math.PI / 180,
    var_core_value_sigCE10 = Math.cos(var_core_value_sigA70D),
    var_core_value_sigA386 = Math.sin(var_core_value_sigA70D),
    var_core_value_sigCD82 = var_core_value_sigC27E ? -1 : 1,
    var_core_value_sig44DD = var_core_value_sigCE10,
    var_core_value_sig96FA = var_core_value_sigA386,
    var_core_value_sigAB68 = -var_core_value_sigA386 * var_core_value_sigCD82,
    var_core_value_sig040A = var_core_value_sigCE10 * var_core_value_sigCD82;
  return [var_core_value_sig44DD, var_core_value_sig96FA, var_core_value_sigAB68, var_core_value_sig040A, var_core_value_sig14CB - var_core_value_sig44DD * var_core_value_sig14CB - var_core_value_sigAB68 * var_core_value_sigFDEE, var_core_value_sigFDEE - var_core_value_sig96FA * var_core_value_sig14CB - var_core_value_sig040A * var_core_value_sigFDEE];
}
function d(var_core_value_sig2AE0, var_core_value_sigC349) {
  if (!Number.isFinite(var_core_value_sig2AE0)) throw RangeError("PDF\x20element\x20" + var_core_value_sigC349 + " must be a finite number.");
}
function f(var_core_value_sig9D96, var_core_value_sig2776) {
  if (!Number.isFinite(var_core_value_sig9D96) || var_core_value_sig9D96 <= 0) throw RangeError("PDF element " + var_core_value_sig2776 + "\x20must\x20be\x20a\x20positive\x20finite\x20number.");
}
function p(var_core_value_sig6FB2, var_core_value_sigEB43) {
  return function (var_core_value_sig6418, var_core_value_sig1896) {
    var_core_value_sigEB43(var_core_value_sig6418, var_core_value_sig1896, var_core_value_sig6FB2);
  };
}
function m(var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866) {
  var var_core_value_sig5EFB = arguments.length,
    var_core_value_sig3A85 = var_core_value_sig5EFB < 3 ? var_core_value_sigF963 : var_core_value_sigF866 === null ? var_core_value_sigF866 = Object.getOwnPropertyDescriptor(var_core_value_sigF963, var_core_value_sigB608) : var_core_value_sigF866,
    var_core_value_sig2682;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig3A85 = Reflect.decorate(var_core_value_sig4186, var_core_value_sigF963, var_core_value_sigB608, var_core_value_sigF866);else {
    for (var var_core_value_sig4BB5 = var_core_value_sig4186.length - 1; var_core_value_sig4BB5 >= 0; var_core_value_sig4BB5--) (var_core_value_sig2682 = var_core_value_sig4186[var_core_value_sig4BB5]) && (var_core_value_sig3A85 = (var_core_value_sig5EFB < 3 ? var_core_value_sig2682(var_core_value_sig3A85) : var_core_value_sig5EFB > 3 ? var_core_value_sig2682(var_core_value_sigF963, var_core_value_sigB608, var_core_value_sig3A85) : var_core_value_sig2682(var_core_value_sigF963, var_core_value_sigB608)) || var_core_value_sig3A85);
  }
  return var_core_value_sig5EFB > 3 && var_core_value_sig3A85 && Object.defineProperty(var_core_value_sigF963, var_core_value_sigB608, var_core_value_sig3A85), var_core_value_sig3A85;
}
let h = class extends c {
  constructor(var_core_value_sig0285, var_core_value_sig777D, var_core_value_sig3F4C, var_core_value_sigD65A) {
    super(var_core_value_sig0285, var_core_value_sig777D, var_core_value_sig3F4C, e.PdfObjectType["ANNOTATION"], var_core_value_sigD65A);
  }
  getAnnotationType() {
    return this._getCurrentObject().annotationType;
  }
  getMarkup() {
    let var_core_value_sig5A13 = g(this._getCurrentObject().markup);
    return var_core_value_sig5A13 ? {
      ...var_core_value_sig5A13,
      quadPoints: var_core_value_sig5A13.quadPoints["map"](v),
      stroke: a(var_core_value_sig5A13.stroke)
    } : null;
  }
  getInk() {
    let var_core_value_sigF593 = g(this._getCurrentObject().ink);
    return var_core_value_sigF593 ? {
      ...var_core_value_sigF593,
      paths: var_core_value_sigF593.paths["map"](var_core_value_sig1BBD => var_core_value_sig1BBD.map(_)),
      stroke: a(var_core_value_sigF593.stroke)
    } : null;
  }
  getStyle() {
    var var_core_value_sig3607, var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sig3E68;
    let var_core_value_sigF4C5 = this._getCurrentObject();
    return g({
      fill: ((var_core_value_sig3607 = var_core_value_sigF4C5.shape) == null ? undefined : var_core_value_sig3607.interiorFill) ?? ((var_core_value_sigB512 = var_core_value_sigF4C5.markup) != null && var_core_value_sigB512.color ? {
        color: var_core_value_sigF4C5.markup["color"]
      } : undefined),
      stroke: a(((var_core_value_sigF2E6 = var_core_value_sigF4C5.markup) == null ? undefined : var_core_value_sigF2E6.stroke) ?? ((var_core_value_sig34C8 = var_core_value_sigF4C5.ink) == null ? undefined : var_core_value_sig34C8.stroke) ?? ((var_core_value_sigB744 = var_core_value_sigF4C5.line) == null ? undefined : var_core_value_sigB744.stroke) ?? ((var_core_value_sigEAE2 = var_core_value_sigF4C5.shape) == null ? undefined : var_core_value_sigEAE2.border)),
      opacity: ((var_core_value_sigE68A = var_core_value_sigF4C5.markup) == null ? undefined : var_core_value_sigE68A.opacity) ?? ((var_core_value_sig3E68 = var_core_value_sigF4C5.ink) == null || (var_core_value_sig3E68 = var_core_value_sig3E68.stroke) == null ? undefined : var_core_value_sig3E68.opacity)
    });
  }
  setStyle(var_core_value_sig5410) {
    if (this._getCurrentObject(), var_core_value_sig5410.opacity !== undefined && var_core_value_sig5410.opacity !== null && (!Number.isFinite(var_core_value_sig5410.opacity) || var_core_value_sig5410.opacity < 0 || var_core_value_sig5410.opacity > 1)) throw RangeError("PDF annotation opacity must be between 0 and 1.");
    return o(this._model, this._injector, e.pdfUpdateObjectAppearanceAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      fill: var_core_value_sig5410.fill,
      stroke: i(var_core_value_sig5410.stroke),
      opacity: var_core_value_sig5410.opacity
    }), this;
  }
};
h = m([p(3, (0, n.Inject)(n.Injector))], h);
function g(var_core_value_sig6709) {
  return var_core_value_sig6709 === undefined ? var_core_value_sig6709 : JSON.parse(JSON.stringify(var_core_value_sig6709));
}
function _([var_core_value_sig52CA, var_core_value_sigC030]) {
  return [(0, e.emuToPt)(var_core_value_sig52CA), (0, e.emuToPt)(var_core_value_sigC030)];
}
function v([var_core_value_sig88F6, var_core_value_sig37DB, var_core_value_sig5542, var_core_value_sigE0A9]) {
  return [_(var_core_value_sig88F6), _(var_core_value_sig37DB), _(var_core_value_sig5542), _(var_core_value_sigE0A9)];
}
let y = class extends c {
  constructor(var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigA6F6, var_core_value_sigCDDA) {
    super(var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigA6F6, e.PdfObjectType["PATH"], var_core_value_sigCDDA);
  }
  getStroke() {
    let {
      width: var_core_value_sigE243,
      dash: var_core_value_sig74A8,
      dashPhase: var_core_value_sig21B2,
      ...var_core_value_sigDE08
    } = this._getCurrentObject().stroke ?? {};
    return {
      ...var_core_value_sigDE08,
      ...(var_core_value_sigE243 === undefined ? {} : {
        width: (0, e.emuToPt)(var_core_value_sigE243)
      }),
      ...(var_core_value_sig74A8 === undefined ? {} : {
        dash: var_core_value_sig74A8.map(var_core_value_sigF704 => (0, e.emuToPt)(var_core_value_sigF704))
      }),
      ...(var_core_value_sig21B2 === undefined ? {} : {
        dashPhase: (0, e.emuToPt)(var_core_value_sig21B2)
      })
    };
  }
  setStroke(var_core_value_sigACCB) {
    this._getCurrentObject();
    let {
        width: var_core_value_sig7F33,
        dash: var_core_value_sig0C53,
        dashPhase: var_core_value_sigEA04,
        ...var_core_value_sig7A62
      } = var_core_value_sigACCB,
      var_core_value_sig8109 = {
        ...var_core_value_sig7A62,
        ...(var_core_value_sig7F33 === undefined ? {} : {
          width: (0, e.ptToEmu)(var_core_value_sig7F33)
        }),
        ...(var_core_value_sig0C53 === undefined ? {} : {
          dash: var_core_value_sig0C53.map(var_core_value_sig2BCF => (0, e.ptToEmu)(var_core_value_sig2BCF))
        }),
        ...(var_core_value_sigEA04 === undefined ? {} : {
          dashPhase: (0, e.ptToEmu)(var_core_value_sigEA04)
        })
      };
    return o(this._model, this._injector, e.pdfUpdateObjectStrokeAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      stroke: var_core_value_sig8109
    }), this;
  }
};
y = m([p(3, (0, n.Inject)(n.Injector))], y);
function b(var_core_value_sigA73E) {
  "@babel/helpers - typeof";

  return b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig7565) {
    return typeof var_core_value_sig7565;
  } : function (var_core_value_sigD4FB) {
    return var_core_value_sigD4FB && typeof Symbol == "function" && var_core_value_sigD4FB.constructor === Symbol && var_core_value_sigD4FB !== Symbol.prototype ? "symbol" : typeof var_core_value_sigD4FB;
  }, b(var_core_value_sigA73E);
}
function x(var_core_value_sig7620, var_core_value_sigB9FC) {
  if (b(var_core_value_sig7620) != "object" || !var_core_value_sig7620) return var_core_value_sig7620;
  var var_core_value_sig5055 = var_core_value_sig7620[Symbol.toPrimitive];
  if (var_core_value_sig5055 !== undefined) {
    var var_core_value_sig3801 = var_core_value_sig5055.call(var_core_value_sig7620, var_core_value_sigB9FC || "default");
    if (b(var_core_value_sig3801) != "object") return var_core_value_sig3801;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigB9FC === "string" ? String : Number)(var_core_value_sig7620);
}
function ee(var_core_value_sig45F0) {
  var var_core_value_sigBC91 = x(var_core_value_sig45F0, "string");
  return b(var_core_value_sigBC91) == "symbol" ? var_core_value_sigBC91 : var_core_value_sigBC91 + "";
}
function S(var_core_value_sigCB88, var_core_value_sig8D65, var_core_value_sig8122) {
  return (var_core_value_sig8D65 = ee(var_core_value_sig8D65)) in var_core_value_sigCB88 ? Object.defineProperty(var_core_value_sigCB88, var_core_value_sig8D65, {
    value: var_core_value_sig8122,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigCB88[var_core_value_sig8D65] = var_core_value_sig8122, var_core_value_sigCB88;
}
let C = class extends c {
  constructor(var_core_value_sig3E71, var_core_value_sig01B3, var_core_value_sig7442, var_core_value_sigDF87) {
    super(var_core_value_sig3E71, var_core_value_sig01B3, var_core_value_sig7442, e.PdfObjectType["IMAGE"], var_core_value_sigDF87);
  }
  getSource() {
    return this._getResource().source;
  }
  getImageSourceType() {
    return this._getResource().imageSourceType;
  }
  setSource(var_core_value_sig9EE0, var_core_value_sigF051) {
    let var_core_value_sig0B45 = this.toBuilder().setSource(var_core_value_sig9EE0, var_core_value_sigF051).build();
    return this._applyBuilder(var_core_value_sig0B45), this;
  }
  getCrop() {
    let var_core_value_sig36F8 = this._getCurrentObject(),
      var_core_value_sig03E1 = var_core_value_sig36F8.crop;
    return var_core_value_sig03E1 ? {
      left: (0, e.emuToPt)(var_core_value_sig03E1[0] - var_core_value_sig36F8.bbox[0]),
      top: (0, e.emuToPt)(var_core_value_sig03E1[1] - var_core_value_sig36F8.bbox[1]),
      right: (0, e.emuToPt)(var_core_value_sig03E1[2] - var_core_value_sig36F8.bbox[0]),
      bottom: (0, e.emuToPt)(var_core_value_sig03E1[3] - var_core_value_sig36F8.bbox[1])
    } : null;
  }
  setCrop(var_core_value_sigBB57) {
    A(var_core_value_sigBB57);
    let var_core_value_sig7C4A = this._getCurrentObject();
    return o(this._model, this._injector, e.pdfCropImageAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      cropRect: k(var_core_value_sigBB57, var_core_value_sig7C4A.bbox)
    }), this;
  }
  getOpacity() {
    return this._getCurrentObject().opacity ?? 1;
  }
  setOpacity(var_core_value_sigE799) {
    return j(var_core_value_sigE799), this._getCurrentObject(), o(this._model, this._injector, e.pdfUpdateObjectAppearanceAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      opacity: var_core_value_sigE799
    }), this;
  }
  toBuilder() {
    let var_core_value_sigB601 = this._getCurrentObject(),
      var_core_value_sig8B71 = this._getResource();
    return new w(this._model["getUnitId"](), this._pageId, {
      id: this._objectId,
      source: var_core_value_sig8B71.source,
      imageSourceType: var_core_value_sig8B71.imageSourceType,
      transform: this.getTransform(),
      crop: this.getCrop() ?? undefined,
      opacity: var_core_value_sigB601.opacity,
      assetId: var_core_value_sigB601.assetId
    });
  }
  remove() {
    this._getCurrentObject(), o(this._model, this._injector, e.pdfRemoveManagedImageAction, {
      pageId: this._pageId,
      objectId: this._objectId
    });
  }
  _getResource() {
    let var_core_value_sigAEFB = this._getCurrentObject(),
      var_core_value_sig826B = this._model["getEditState"]().managedResources[var_core_value_sigAEFB.assetId];
    if (!var_core_value_sig826B) throw Error("Managed resource " + var_core_value_sigAEFB.assetId + " for PDF image " + this._objectId + " no longer exists.");
    return var_core_value_sig826B;
  }
  _applyBuilder(var_core_value_sigCF89) {
    let var_core_value_sig00CB = O(var_core_value_sigCF89.element["transform"]);
    o(this._model, this._injector, e.pdfUpdateManagedImageAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      resource: D(this._model, var_core_value_sigCF89),
      cropRect: var_core_value_sigCF89.element["crop"] ? k(var_core_value_sigCF89.element["crop"], var_core_value_sig00CB.bbox) : null,
      opacity: var_core_value_sigCF89.element["opacity"],
      ...var_core_value_sig00CB
    });
  }
};
C = m([p(3, (0, n.Inject)(n.Injector))], C);
var w = class {
  constructor(var_core_value_sig77EE, var_core_value_sig9F76, var_core_value_sigB008) {
    this._unitId = var_core_value_sig77EE, this._pageId = var_core_value_sig9F76, S(this, "_elementId", undefined), S(this, "_source", undefined), S(this, "_imageSourceType", undefined), S(this, "_transform", undefined), S(this, "_crop", undefined), S(this, "_opacity", undefined), S(this, "_assetId", undefined), this._elementId = (var_core_value_sigB008 == null ? undefined : var_core_value_sigB008.id) ?? re(), this._source = var_core_value_sigB008 == null ? undefined : var_core_value_sigB008.source, this._imageSourceType = var_core_value_sigB008 == null ? undefined : var_core_value_sigB008.imageSourceType, this._transform = T(var_core_value_sigB008 == null ? undefined : var_core_value_sigB008.transform), this._crop = var_core_value_sigB008 == null ? undefined : var_core_value_sigB008.crop, this._opacity = var_core_value_sigB008 == null ? undefined : var_core_value_sigB008.opacity, this._assetId = var_core_value_sigB008 == null ? undefined : var_core_value_sigB008.assetId;
  }
  setSource(var_core_value_sig8721, var_core_value_sig08BA) {
    return (var_core_value_sig8721 !== this._source || var_core_value_sig08BA && var_core_value_sig08BA !== this._imageSourceType) && (this._assetId = undefined), this._source = var_core_value_sig8721, this._imageSourceType = var_core_value_sig08BA, this;
  }
  setAbsolutePosition(var_core_value_sigDBB5, var_core_value_sigCFAC) {
    return M(var_core_value_sigDBB5, "left"), M(var_core_value_sigCFAC, "top"), this._transform["left"] = var_core_value_sigDBB5, this._transform["top"] = var_core_value_sigCFAC, this;
  }
  setSize(var_core_value_sig237B, var_core_value_sigFEAB) {
    return N(var_core_value_sig237B, "width"), N(var_core_value_sigFEAB, "height"), this._transform["width"] = var_core_value_sig237B, this._transform["height"] = var_core_value_sigFEAB, this;
  }
  setRotation(var_core_value_sigE347) {
    return M(var_core_value_sigE347, "rotation"), this._transform["rotation"] = var_core_value_sigE347, this;
  }
  setCrop(var_core_value_sig3C5B) {
    return A(var_core_value_sig3C5B), this._crop = {
      ...var_core_value_sig3C5B
    }, this;
  }
  setOpacity(var_core_value_sig200B) {
    return j(var_core_value_sig200B), this._opacity = var_core_value_sig200B, this;
  }
  build() {
    if (!this._source) throw Error("Image source is required. Please call setSource() before build().");
    let var_core_value_sig3863 = this._imageSourceType ?? te(this._source);
    return ne(this._source, var_core_value_sig3863), N(this._transform["width"], "width"), N(this._transform["height"], "height"), this._opacity !== undefined && j(this._opacity), {
      unitId: this._unitId,
      pageId: this._pageId,
      element: {
        id: this._elementId,
        source: this._source,
        imageSourceType: var_core_value_sig3863,
        transform: {
          ...this._transform
        },
        crop: this._crop ? {
          ...this._crop
        } : undefined,
        opacity: this._opacity,
        assetId: this._assetId
      }
    };
  }
};
function T(var_core_value_sigEDC6) {
  return {
    left: (var_core_value_sigEDC6 == null ? undefined : var_core_value_sigEDC6.left) ?? 0,
    top: (var_core_value_sigEDC6 == null ? undefined : var_core_value_sigEDC6.top) ?? 0,
    width: (var_core_value_sigEDC6 == null ? undefined : var_core_value_sigEDC6.width) ?? 288,
    height: (var_core_value_sigEDC6 == null ? undefined : var_core_value_sigEDC6.height) ?? 162,
    rotation: (var_core_value_sigEDC6 == null ? undefined : var_core_value_sigEDC6.rotation) ?? 0,
    flipX: (var_core_value_sigEDC6 == null ? undefined : var_core_value_sigEDC6.flipX) ?? false,
    flipY: (var_core_value_sigEDC6 == null ? undefined : var_core_value_sigEDC6.flipY) ?? false
  };
}
function E(var_core_value_sig611A) {
  let {
    element: var_core_value_sig6BD9
  } = var_core_value_sig611A;
  return {
    asset: {
      id: var_core_value_sig6BD9.assetId ?? ie(var_core_value_sig6BD9.source, var_core_value_sig6BD9.imageSourceType),
      type: e.PdfAssetType["IMAGE"],
      width: var_core_value_sig6BD9.transform["width"],
      height: var_core_value_sig6BD9.transform["height"]
    },
    source: var_core_value_sig6BD9.source,
    imageSourceType: var_core_value_sig6BD9.imageSourceType
  };
}
function D(var_core_value_sig7E56, var_core_value_sig4161) {
  let var_core_value_sig7580 = E(var_core_value_sig4161),
    var_core_value_sig1F18 = var_core_value_sig7E56.getEditState().managedResources[var_core_value_sig7580.asset["id"]];
  return (var_core_value_sig1F18 == null ? undefined : var_core_value_sig1F18.source) === var_core_value_sig7580.source && var_core_value_sig1F18.imageSourceType === var_core_value_sig7580.imageSourceType ? var_core_value_sig1F18 : var_core_value_sig7580;
}
function O(var_core_value_sigD5A0) {
  let var_core_value_sig81B2 = [(0, e.ptToEmu)(var_core_value_sigD5A0.left), (0, e.ptToEmu)(var_core_value_sigD5A0.top), (0, e.ptToEmu)(var_core_value_sigD5A0.left + var_core_value_sigD5A0.width), (0, e.ptToEmu)(var_core_value_sigD5A0.top + var_core_value_sigD5A0.height)],
    var_core_value_sigA0A5 = var_core_value_sigD5A0.rotation * Math.PI / 180,
    var_core_value_sig10AA = Math.cos(var_core_value_sigA0A5),
    var_core_value_sigE6D0 = Math.sin(var_core_value_sigA0A5),
    var_core_value_sig8E91 = var_core_value_sigD5A0.flipX ? -1 : 1,
    var_core_value_sig00BE = var_core_value_sigD5A0.flipY ? -1 : 1,
    var_core_value_sig7BB5 = var_core_value_sig10AA * var_core_value_sig8E91,
    var_core_value_sig6AAD = var_core_value_sigE6D0 * var_core_value_sig8E91,
    var_core_value_sig1157 = -var_core_value_sigE6D0 * var_core_value_sig00BE,
    var_core_value_sigA694 = var_core_value_sig10AA * var_core_value_sig00BE,
    var_core_value_sig18E0 = (var_core_value_sig81B2[0] + var_core_value_sig81B2[2]) / 2,
    var_core_value_sig0428 = (var_core_value_sig81B2[1] + var_core_value_sig81B2[3]) / 2;
  return {
    bbox: var_core_value_sig81B2,
    transform: [var_core_value_sig7BB5, var_core_value_sig6AAD, var_core_value_sig1157, var_core_value_sigA694, var_core_value_sig18E0 - var_core_value_sig7BB5 * var_core_value_sig18E0 - var_core_value_sig1157 * var_core_value_sig0428, var_core_value_sig0428 - var_core_value_sig6AAD * var_core_value_sig18E0 - var_core_value_sigA694 * var_core_value_sig0428]
  };
}
function k(var_core_value_sigBE07, var_core_value_sig555F) {
  return [var_core_value_sig555F[0] + (0, e.ptToEmu)(var_core_value_sigBE07.left), var_core_value_sig555F[1] + (0, e.ptToEmu)(var_core_value_sigBE07.top), var_core_value_sig555F[0] + (0, e.ptToEmu)(var_core_value_sigBE07.right), var_core_value_sig555F[1] + (0, e.ptToEmu)(var_core_value_sigBE07.bottom)];
}
function te(var_core_value_sig3D6F) {
  return /^https?:\/\//i.test(var_core_value_sig3D6F) ? n.ImageSourceType["URL"] : /^data:/i.test(var_core_value_sig3D6F) || /^[A-Za-z0-9+/]+={0,2}$/["test"](var_core_value_sig3D6F.replace(/\s/g, "")) ? n.ImageSourceType["BASE64"] : n.ImageSourceType["UUID"];
}
function ne(var_core_value_sig336C, var_core_value_sig6E68) {
  (0, e.normalizePdfEditorManagedImageResource)(E({
    unitId: "validation",
    pageId: "validation",
    element: {
      id: "validation",
      source: var_core_value_sig336C,
      imageSourceType: var_core_value_sig6E68,
      transform: {
        left: 0,
        top: 0,
        width: 1,
        height: 1,
        rotation: 0,
        flipX: false,
        flipY: false
      }
    }
  }));
}
function re() {
  return "pdf-facade-image-" + (0, n.generateRandomId)(12);
}
function ie(var_core_value_sig8DFE, var_core_value_sig48EA) {
  let var_core_value_sig5E16 = var_core_value_sig48EA + ":" + var_core_value_sig8DFE,
    var_core_value_sig09F3 = 2166136261;
  for (let var_core_value_sigC97C = 0; var_core_value_sigC97C < var_core_value_sig5E16.length; var_core_value_sigC97C++) var_core_value_sig09F3 ^= var_core_value_sig5E16.charCodeAt(var_core_value_sigC97C), var_core_value_sig09F3 = Math.imul(var_core_value_sig09F3, 16777619);
  return "pdf-facade-asset-" + (var_core_value_sig09F3 >>> 0).toString(36);
}
function A(var_core_value_sig4592) {
  if (M(var_core_value_sig4592.left, "crop.left"), M(var_core_value_sig4592.top, "crop.top"), M(var_core_value_sig4592.right, "crop.right"), M(var_core_value_sig4592.bottom, "crop.bottom"), var_core_value_sig4592.right <= var_core_value_sig4592.left || var_core_value_sig4592.bottom <= var_core_value_sig4592.top) throw RangeError("PDF image crop must have positive width and height.");
}
function j(var_core_value_sigC5C4) {
  if (!Number.isFinite(var_core_value_sigC5C4) || var_core_value_sigC5C4 < 0 || var_core_value_sigC5C4 > 1) throw RangeError("PDF image opacity must be between 0 and 1.");
}
function M(var_core_value_sig1617, var_core_value_sig4169) {
  if (!Number.isFinite(var_core_value_sig1617)) throw RangeError("PDF image " + var_core_value_sig4169 + " must be finite.");
}
function N(var_core_value_sig6D19, var_core_value_sig279C) {
  if (!Number.isFinite(var_core_value_sig6D19) || var_core_value_sig6D19 <= 0) throw RangeError("PDF\x20image\x20" + var_core_value_sig279C + " must be positive and finite.");
}
let P = class extends c {
  constructor(var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E, var_core_value_sigA937) {
    super(var_core_value_sigC4B1, var_core_value_sig1BD9, var_core_value_sigE43E, e.PdfObjectType["TEXT_BOX"], var_core_value_sigA937);
  }
  getItems() {
    let var_core_value_sigCAD5 = this._getTextStory();
    return var_core_value_sigCAD5.blocks["flatMap"](var_core_value_sig0D69 => var_core_value_sig0D69.listItem ? [{
      ...JSON.parse(JSON.stringify(var_core_value_sig0D69)),
      text: this._getBlockText(var_core_value_sigCAD5, var_core_value_sig0D69.id),
      level: var_core_value_sig0D69.listItem["level"]
    }] : []);
  }
  insertItem(var_core_value_sigE503, var_core_value_sig48DD) {
    let {
      storyId: var_core_value_sig5E6A,
      listId: var_core_value_sigB7FC
    } = this._resolveList();
    return o(this._model, this._injector, e.pdfInsertListItemAction, {
      storyId: var_core_value_sig5E6A,
      listId: var_core_value_sigB7FC,
      index: var_core_value_sigE503,
      text: var_core_value_sig48DD.text,
      level: var_core_value_sig48DD.level ?? 0,
      blockId: var_core_value_sig48DD.id
    }), this;
  }
  setItemText(var_core_value_sig9CD9, var_core_value_sigFD0C) {
    let {
      storyId: var_core_value_sig849B,
      runId: var_core_value_sig5F1A,
      previousText: var_core_value_sigB455
    } = this._resolveItemRun(var_core_value_sig9CD9);
    return o(this._model, this._injector, e.pdfEditTextAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      storyId: var_core_value_sig849B,
      runId: var_core_value_sig5F1A,
      previousText: var_core_value_sigB455,
      text: var_core_value_sigFD0C
    }), this;
  }
  removeItem(var_core_value_sig5241) {
    let {
      storyId: var_core_value_sigC6E5
    } = this._resolveItemRun(var_core_value_sig5241);
    return o(this._model, this._injector, e.pdfRemoveListItemAction, {
      storyId: var_core_value_sigC6E5,
      blockId: var_core_value_sig5241
    }), this;
  }
  changeItemLevel(var_core_value_sigCEFB, var_core_value_sig1537) {
    if (!Number.isInteger(var_core_value_sig1537) || var_core_value_sig1537 < 0 || var_core_value_sig1537 > 8) throw RangeError("PDF list level must be an integer from 0 through 8.");
    let var_core_value_sigE4C6 = this._getTextStory(),
      var_core_value_sig4313 = var_core_value_sigE4C6.blocks["find"](var_core_value_sig480E => var_core_value_sig480E.id === var_core_value_sigCEFB && var_core_value_sig480E.listItem);
    if (!(var_core_value_sig4313 != null && var_core_value_sig4313.listItem)) throw this._missingItem(var_core_value_sigCEFB);
    if (var_core_value_sig1537 === var_core_value_sig4313.listItem["level"]) return this;
    if (var_core_value_sig1537 > var_core_value_sig4313.listItem["level"]) {
      let var_core_value_sig26DB = var_core_value_sigE4C6.blocks["indexOf"](var_core_value_sig4313),
        var_core_value_sigF0F9 = var_core_value_sig26DB > 0 ? var_core_value_sigE4C6.blocks[var_core_value_sig26DB - 1] : undefined;
      if (!(var_core_value_sigF0F9 != null && var_core_value_sigF0F9.listItem) || var_core_value_sigF0F9.listItem["level"] < var_core_value_sig1537 - 1) throw RangeError("PDF list item " + var_core_value_sigCEFB + " cannot use level " + var_core_value_sig1537 + "\x20without\x20a\x20preceding\x20parent\x20level.");
    }
    return o(this._model, this._injector, e.pdfChangeListLevelAction, {
      storyId: var_core_value_sigE4C6.id,
      blockId: var_core_value_sigCEFB,
      delta: var_core_value_sig1537 - var_core_value_sig4313.listItem["level"]
    }), this;
  }
  setPreset(var_core_value_sigFC87) {
    let {
      storyId: var_core_value_sig156F,
      listId: var_core_value_sigDD51
    } = this._resolveList();
    return o(this._model, this._injector, e.pdfChangeListStyleAction, {
      storyId: var_core_value_sig156F,
      listId: var_core_value_sigDD51,
      presetId: var_core_value_sigFC87
    }), this;
  }
  setStartNumber(var_core_value_sigF057) {
    if (!Number.isInteger(var_core_value_sigF057) || var_core_value_sigF057 < 1) throw RangeError("PDF list start number must be a positive integer.");
    let {
      storyId: var_core_value_sig72F6,
      listId: var_core_value_sig9FBA,
      kind: var_core_value_sigFE01
    } = this._resolveList();
    if (var_core_value_sigFE01 === e.PdfListKind["UNORDERED"]) throw RangeError("PDF list start number is only supported for ordered lists.");
    return o(this._model, this._injector, e.pdfSetListStartNumberAction, {
      storyId: var_core_value_sig72F6,
      listId: var_core_value_sig9FBA,
      level: 0,
      startAt: var_core_value_sigF057
    }), this;
  }
  _resolveList() {
    var var_core_value_sigA2CE, var_core_value_sig1975;
    let var_core_value_sig6EA1 = this._getTextStory(),
      var_core_value_sig029F = ((var_core_value_sigA2CE = var_core_value_sig6EA1.blocks["find"](var_core_value_sig1A0F => var_core_value_sig1A0F.listItem)) == null || (var_core_value_sigA2CE = var_core_value_sigA2CE.listItem) == null ? undefined : var_core_value_sigA2CE.listId) ?? Object.keys(var_core_value_sig6EA1.lists ?? {})[0];
    if (!var_core_value_sig029F) throw Error("PDF\x20list\x20definition\x20for\x20element\x20" + this._objectId + "\x20no\x20longer\x20exists.");
    return {
      storyId: var_core_value_sig6EA1.id,
      listId: var_core_value_sig029F,
      kind: (var_core_value_sig1975 = var_core_value_sig6EA1.lists) == null || (var_core_value_sig1975 = var_core_value_sig1975[var_core_value_sig029F]) == null ? undefined : var_core_value_sig1975.kind
    };
  }
  _resolveItemRun(var_core_value_sig3767) {
    let var_core_value_sig670B = this._getTextStory(),
      var_core_value_sig6912 = var_core_value_sig670B.blocks["find"](var_core_value_sigFBA4 => var_core_value_sigFBA4.id === var_core_value_sig3767 && var_core_value_sigFBA4.listItem),
      var_core_value_sigE235 = var_core_value_sig6912 == null ? undefined : var_core_value_sig6912.runIds[0];
    if (!var_core_value_sig6912 || !var_core_value_sigE235 || var_core_value_sig6912.runIds["length"] !== 1 || !var_core_value_sig670B.runs[var_core_value_sigE235]) throw this._missingItem(var_core_value_sig3767);
    return {
      storyId: var_core_value_sig670B.id,
      runId: var_core_value_sigE235,
      previousText: var_core_value_sig670B.runs[var_core_value_sigE235].text
    };
  }
  _getTextStory() {
    let var_core_value_sig7664 = this._model["getMaterializedDocument"](),
      var_core_value_sig2281 = var_core_value_sig7664.objects[this._objectId],
      var_core_value_sig5E86 = (var_core_value_sig2281 == null ? undefined : var_core_value_sig2281.type) === e.PdfObjectType["TEXT_BOX"] ? var_core_value_sig2281.textStoryId : undefined,
      var_core_value_sig6998 = var_core_value_sig5E86 ? var_core_value_sig7664.textStories[var_core_value_sig5E86] : undefined;
    if (!var_core_value_sig6998) throw Error("PDF text story for element " + this._objectId + "\x20no\x20longer\x20exists\x20on\x20page\x20" + this._pageId + ".");
    return var_core_value_sig6998;
  }
  _getBlockText(var_core_value_sigF639, var_core_value_sigEAE5) {
    let var_core_value_sigE94C = var_core_value_sigF639.blocks["find"](var_core_value_sig4383 => var_core_value_sig4383.id === var_core_value_sigEAE5);
    return (var_core_value_sigE94C == null ? undefined : var_core_value_sigE94C.runIds["map"](var_core_value_sig186C => {
      var var_core_value_sigD955;
      return ((var_core_value_sigD955 = var_core_value_sigF639.runs[var_core_value_sig186C]) == null ? undefined : var_core_value_sigD955.text) ?? "";
    }).join("")) ?? "";
  }
  _missingItem(var_core_value_sig6D47) {
    return Error("PDF list item " + var_core_value_sig6D47 + " is missing or is not a single-run editable item.");
  }
};
P = m([p(3, (0, n.Inject)(n.Injector))], P);
let F = class extends c {
  constructor(var_core_value_sigCB82, var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5) {
    super(var_core_value_sigCB82, var_core_value_sigCF4E, var_core_value_sig6CAD, e.PdfObjectType["TEXT_BOX"], var_core_value_sig8CF5);
  }
  getBlocks() {
    let var_core_value_sigDDD7 = this._getTextStory();
    return var_core_value_sigDDD7.blocks["map"](var_core_value_sig48BD => ({
      ...JSON.parse(JSON.stringify(var_core_value_sig48BD)),
      text: this._getBlockText(var_core_value_sigDDD7, var_core_value_sig48BD.id)
    }));
  }
  insertBlock(var_core_value_sigB2CE, var_core_value_sig443C) {
    let var_core_value_sig39B1 = this._getTextStory();
    return o(this._model, this._injector, e.pdfInsertParagraphBlockAction, {
      storyId: var_core_value_sig39B1.id,
      index: var_core_value_sigB2CE,
      text: var_core_value_sig443C.text,
      blockId: var_core_value_sig443C.id,
      blockStyle: var_core_value_sig443C.style,
      runStyle: var_core_value_sig443C.textStyle
    }), this;
  }
  appendBlock(var_core_value_sig210D) {
    return this.insertBlock(this.getBlocks().length, var_core_value_sig210D);
  }
  setBlockText(var_core_value_sigB4B4, var_core_value_sigD407) {
    let {
      storyId: var_core_value_sig63F3,
      runId: var_core_value_sig6A71,
      previousText: var_core_value_sig3BF6
    } = this._resolveBlockRun(var_core_value_sigB4B4);
    return o(this._model, this._injector, e.pdfEditTextAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      storyId: var_core_value_sig63F3,
      runId: var_core_value_sig6A71,
      previousText: var_core_value_sig3BF6,
      text: var_core_value_sigD407
    }), this;
  }
  setBlockStyle(var_core_value_sig38CE, var_core_value_sig62B7) {
    let var_core_value_sig37A8 = this._getTextStory();
    return this._resolveBlockRun(var_core_value_sig38CE), o(this._model, this._injector, e.pdfUpdateParagraphStyleAction, {
      storyId: var_core_value_sig37A8.id,
      blockId: var_core_value_sig38CE,
      patch: var_core_value_sig62B7
    }), this;
  }
  removeBlock(var_core_value_sigA90D) {
    let var_core_value_sig7A3C = this._getTextStory();
    return this._resolveBlockRun(var_core_value_sigA90D), o(this._model, this._injector, e.pdfRemoveParagraphBlockAction, {
      storyId: var_core_value_sig7A3C.id,
      blockId: var_core_value_sigA90D
    }), this;
  }
  _resolveBlockRun(var_core_value_sig0511) {
    let var_core_value_sig1F44 = this._getTextStory(),
      var_core_value_sigCB04 = var_core_value_sig1F44.blocks["find"](var_core_value_sig429F => var_core_value_sig429F.id === var_core_value_sig0511),
      var_core_value_sig947E = var_core_value_sigCB04 == null ? undefined : var_core_value_sigCB04.runIds[0];
    if (!var_core_value_sigCB04 || !var_core_value_sig947E || var_core_value_sigCB04.runIds["length"] !== 1 || !var_core_value_sig1F44.runs[var_core_value_sig947E]) throw Error("PDF\x20paragraph\x20block\x20" + var_core_value_sig0511 + " is missing or is not a single-run editable block.");
    return {
      storyId: var_core_value_sig1F44.id,
      runId: var_core_value_sig947E,
      previousText: var_core_value_sig1F44.runs[var_core_value_sig947E].text
    };
  }
  _getTextStory() {
    let var_core_value_sig4545 = this._model["getMaterializedDocument"](),
      var_core_value_sigF39A = var_core_value_sig4545.objects[this._objectId],
      var_core_value_sigF79C = (var_core_value_sigF39A == null ? undefined : var_core_value_sigF39A.type) === e.PdfObjectType["TEXT_BOX"] ? var_core_value_sigF39A.textStoryId : undefined,
      var_core_value_sig2E54 = var_core_value_sigF79C ? var_core_value_sig4545.textStories[var_core_value_sigF79C] : undefined;
    if (!var_core_value_sig2E54) throw Error("PDF text story for element " + this._objectId + " no longer exists on page " + this._pageId + ".");
    return var_core_value_sig2E54;
  }
  _getBlockText(var_core_value_sig7658, var_core_value_sigDCF5) {
    let var_core_value_sigC786 = var_core_value_sig7658.blocks["find"](var_core_value_sigF62A => var_core_value_sigF62A.id === var_core_value_sigDCF5);
    return (var_core_value_sigC786 == null ? undefined : var_core_value_sigC786.runIds["map"](var_core_value_sig8178 => {
      var var_core_value_sigE9ED;
      return ((var_core_value_sigE9ED = var_core_value_sig7658.runs[var_core_value_sig8178]) == null ? undefined : var_core_value_sigE9ED.text) ?? "";
    }).join("")) ?? "";
  }
};
F = m([p(3, (0, n.Inject)(n.Injector))], F);
let I = class extends c {
  constructor(var_core_value_sigC0D9, var_core_value_sigF0511, var_core_value_sig5825, var_core_value_sig4EB7) {
    super(var_core_value_sigC0D9, var_core_value_sigF0511, var_core_value_sig5825, e.PdfObjectType["TABLE"], var_core_value_sig4EB7);
  }
  getRowCount() {
    return this._getCurrentObject().rows["length"];
  }
  getColumnCount() {
    return this._getCurrentObject().columns["length"];
  }
  getCell(var_core_value_sig73AF, var_core_value_sig548A) {
    var var_core_value_sigE026, var_core_value_sig339E;
    let var_core_value_sig7550 = this._getCurrentObject(),
      var_core_value_sig2983 = (var_core_value_sigE026 = var_core_value_sig7550.rows[var_core_value_sig73AF]) == null ? undefined : var_core_value_sigE026.id,
      var_core_value_sigE1B0 = (var_core_value_sig339E = var_core_value_sig7550.columns[var_core_value_sig548A]) == null ? undefined : var_core_value_sig339E.id,
      var_core_value_sigD4FF = var_core_value_sig7550.cells["find"](var_core_value_sigB577 => var_core_value_sigB577.rowId === var_core_value_sig2983 && var_core_value_sigB577.columnId === var_core_value_sigE1B0);
    if (!Number.isInteger(var_core_value_sig73AF) || !Number.isInteger(var_core_value_sig548A) || !var_core_value_sig2983 || !var_core_value_sigE1B0 || !var_core_value_sigD4FF) throw RangeError("PDF\x20table\x20cell\x20coordinates\x20are\x20outside\x20the\x20current\x20table.");
    return this._injector["createInstance"](L, this._model, this._pageId, this._objectId, var_core_value_sigD4FF.id);
  }
  resize(var_core_value_sig1E5B, var_core_value_sigB680) {
    let var_core_value_sig1F64 = this._getCurrentObject();
    if (!Number.isSafeInteger(var_core_value_sig1E5B) || var_core_value_sig1E5B <= 0 || !Number.isSafeInteger(var_core_value_sigB680) || var_core_value_sigB680 <= 0) throw RangeError("PDF table row and column counts must be positive safe integers.");
    if (var_core_value_sig1E5B * var_core_value_sigB680 > 10000) throw RangeError("PDF\x20table\x20resize\x20supports\x20at\x20most\x2010,000\x20cells.");
    let var_core_value_sigDD1C = var_core_value_sig1F64.bbox[2] - var_core_value_sig1F64.bbox[0],
      var_core_value_sig2C39 = var_core_value_sig1F64.bbox[3] - var_core_value_sig1F64.bbox[1],
      var_core_value_sigB7D1 = Array.from({
        length: var_core_value_sig1E5B
      }, (var_core_value_sig9572, var_core_value_sigD873) => {
        var var_core_value_sigA12B;
        return ((var_core_value_sigA12B = var_core_value_sig1F64.rows[var_core_value_sigD873]) == null ? undefined : var_core_value_sigA12B.id) ?? R("row");
      }),
      var_core_value_sig64F0 = Array.from({
        length: var_core_value_sigB680
      }, (var_core_value_sigF230, var_core_value_sig09B8) => {
        var var_core_value_sig6F91;
        return ((var_core_value_sig6F91 = var_core_value_sig1F64.columns[var_core_value_sig09B8]) == null ? undefined : var_core_value_sig6F91.id) ?? R("column");
      }),
      var_core_value_sig85B1 = [],
      var_core_value_sig3141 = [],
      var_core_value_sig2162 = [];
    for (let var_core_value_sigF9C7 = 0; var_core_value_sigF9C7 < var_core_value_sig1E5B; var_core_value_sigF9C7 += 1) for (let var_core_value_sig3D7D = 0; var_core_value_sig3D7D < var_core_value_sigB680; var_core_value_sig3D7D += 1) {
      var var_core_value_sig2EAD, var_core_value_sig6774;
      let var_core_value_sig2AD8 = (var_core_value_sig2EAD = var_core_value_sig1F64.rows[var_core_value_sigF9C7]) == null ? undefined : var_core_value_sig2EAD.id,
        var_core_value_sig2AD0 = (var_core_value_sig6774 = var_core_value_sig1F64.columns[var_core_value_sig3D7D]) == null ? undefined : var_core_value_sig6774.id,
        var_core_value_sig3EEE = var_core_value_sig2AD8 && var_core_value_sig2AD0 ? var_core_value_sig1F64.cells["find"](var_core_value_sig7524 => var_core_value_sig7524.rowId === var_core_value_sig2AD8 && var_core_value_sig7524.columnId === var_core_value_sig2AD0) : undefined;
      if (var_core_value_sig3141.push(var_core_value_sig3EEE), var_core_value_sig3EEE) {
        var_core_value_sig2162.push({
          id: var_core_value_sig3EEE.id,
          contentStoryId: var_core_value_sig3EEE.contentStoryId
        });
        continue;
      }
      let var_core_value_sigBC46 = B(this._objectId);
      var_core_value_sig85B1.push(var_core_value_sigBC46), var_core_value_sig2162.push({
        id: R("cell"),
        contentStoryId: var_core_value_sigBC46.id
      });
    }
    let var_core_value_sig340D = (0, e.createPdfTableGrid)({
        width: var_core_value_sigDD1C,
        height: var_core_value_sig2C39,
        rowIds: var_core_value_sigB7D1,
        columnIds: var_core_value_sig64F0,
        cells: var_core_value_sig2162
      }),
      var_core_value_sig82D4 = var_core_value_sig340D.cells["map"]((var_core_value_sig8895, var_core_value_sigC80B) => ({
        ...var_core_value_sig3141[var_core_value_sigC80B],
        ...var_core_value_sig8895
      })),
      var_core_value_sigBDE4 = new Set(var_core_value_sig82D4.map(var_core_value_sig284F => var_core_value_sig284F.contentStoryId)),
      var_core_value_sig7DF1 = this._model["getEditState"](),
      var_core_value_sigDC86 = var_core_value_sig1F64.cells["filter"](var_core_value_sigE154 => !var_core_value_sigBDE4.has(var_core_value_sigE154.contentStoryId)).map(var_core_value_sig4632 => var_core_value_sig7DF1.overlayTextStories[var_core_value_sig4632.contentStoryId]).filter(var_core_value_sig12F2 => !!var_core_value_sig12F2);
    return o(this._model, this._injector, e.pdfResizeTableAction, {
      pageId: this._pageId,
      tableId: this._objectId,
      bbox: [...var_core_value_sig1F64.bbox],
      rows: var_core_value_sig340D.rows,
      columns: var_core_value_sig340D.columns,
      cells: var_core_value_sig82D4,
      addedStories: var_core_value_sig85B1,
      removedStories: var_core_value_sigDC86
    }), this;
  }
  getTheme() {
    let var_core_value_sig0B0C = this._getCurrentObject();
    return JSON.parse(JSON.stringify({
      styleId: var_core_value_sig0B0C.styleId,
      options: var_core_value_sig0B0C.options
    }));
  }
  setTheme(var_core_value_sigA39E) {
    return this._getCurrentObject(), o(this._model, this._injector, e.pdfUpdateTableThemeAction, {
      pageId: this._pageId,
      tableId: this._objectId,
      styleId: var_core_value_sigA39E.styleId,
      options: var_core_value_sigA39E.options
    }), this;
  }
};
I = m([p(3, (0, n.Inject)(n.Injector))], I);
let L = class {
  constructor(var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167, var_core_value_sig65A1, var_core_value_sig7F19) {
    this._model = var_core_value_sigBBEE, this._pageId = var_core_value_sig011D, this._tableId = var_core_value_sig6167, this._cellId = var_core_value_sig65A1, this._injector = var_core_value_sig7F19;
  }
  getText() {
    let {
        cell: var_core_value_sig7827
      } = this._resolveCell(),
      var_core_value_sig652C = this._getTextStory(var_core_value_sig7827);
    return var_core_value_sig652C.blocks["flatMap"](var_core_value_sig2259 => var_core_value_sig2259.runIds).map(var_core_value_sig9E2F => {
      var var_core_value_sigD082;
      return ((var_core_value_sigD082 = var_core_value_sig652C.runs[var_core_value_sig9E2F]) == null ? undefined : var_core_value_sigD082.text) ?? "";
    }).join("");
  }
  setText(var_core_value_sig7E32) {
    let {
        cell: var_core_value_sig4C07
      } = this._resolveCell(),
      var_core_value_sig79AB = this._getTextStory(var_core_value_sig4C07),
      var_core_value_sig8E74 = var_core_value_sig79AB.blocks["flatMap"](var_core_value_sigDBB7 => var_core_value_sigDBB7.runIds),
      var_core_value_sig104C = var_core_value_sig8E74[0];
    if (!var_core_value_sig104C || var_core_value_sig8E74.length !== 1 || !var_core_value_sig79AB.runs[var_core_value_sig104C]) throw Error("PDF table cell " + this._cellId + " is not a single-run editable cell.");
    return o(this._model, this._injector, e.pdfEditTextAction, {
      pageId: this._pageId,
      objectId: this._tableId,
      storyId: var_core_value_sig79AB.id,
      runId: var_core_value_sig104C,
      previousText: var_core_value_sig79AB.runs[var_core_value_sig104C].text,
      text: var_core_value_sig7E32
    }), this;
  }
  getStyle() {
    let {
      cell: var_core_value_sig841D
    } = this._resolveCell();
    return JSON.parse(JSON.stringify(var_core_value_sig841D.style ?? {}));
  }
  setStyle(var_core_value_sig90CB) {
    let {
      cell: var_core_value_sigBDF5
    } = this._resolveCell();
    return (var_core_value_sig90CB.fontColor !== undefined || var_core_value_sig90CB.horizontalAlignment !== undefined) && this._getTextStory(var_core_value_sigBDF5), o(this._model, this._injector, e.pdfUpdateTableCellStyleAction, {
      pageId: this._pageId,
      tableId: this._tableId,
      cellId: this._cellId,
      fontColor: var_core_value_sig90CB.fontColor,
      horizontalAlignment: var_core_value_sig90CB.horizontalAlignment === undefined ? undefined : z(var_core_value_sig90CB.horizontalAlignment),
      patch: {
        fill: var_core_value_sig90CB.fill,
        verticalAlign: var_core_value_sig90CB.verticalAlign
      }
    }), this;
  }
  _resolveCell() {
    if (!this._model["getMaterializedDocument"]().pages["some"](var_core_value_sigD0A8 => var_core_value_sigD0A8.id === this._pageId)) throw Error("PDF page " + this._pageId + " no longer exists.");
    let var_core_value_sigACC6 = this._model["getEditState"]().overlayObjects[this._tableId],
      var_core_value_sig1614 = (var_core_value_sigACC6 == null ? undefined : var_core_value_sigACC6.pageId) === this._pageId ? var_core_value_sigACC6.object : undefined,
      var_core_value_sig85C3 = (var_core_value_sig1614 == null ? undefined : var_core_value_sig1614.type) === e.PdfObjectType["TABLE"] ? var_core_value_sig1614.cells["find"](var_core_value_sigF4B9 => var_core_value_sigF4B9.id === this._cellId) : undefined;
    if (!var_core_value_sig1614 || var_core_value_sig1614.type !== e.PdfObjectType["TABLE"] || !var_core_value_sig85C3) throw Error("PDF table cell " + this._cellId + " no longer exists.");
    return {
      table: var_core_value_sig1614,
      cell: var_core_value_sig85C3
    };
  }
  _getTextStory(var_core_value_sigB996) {
    let var_core_value_sig4BBA = this._model["getEditState"]().overlayTextStories[var_core_value_sigB996.contentStoryId];
    if (!var_core_value_sig4BBA) throw Error("PDF table-cell story " + var_core_value_sigB996.contentStoryId + " no longer exists on table " + this._tableId + " page " + this._pageId + ".");
    return var_core_value_sig4BBA;
  }
};
L = m([p(4, (0, n.Inject)(n.Injector))], L);
function R(var_core_value_sigAC51) {
  return "pdf-facade-table-" + var_core_value_sigAC51 + "-" + (0, n.generateRandomId)(12);
}
function z(var_core_value_sig8986) {
  switch (var_core_value_sig8986) {
    case n.HorizontalAlign["LEFT"]:
      return "left";
    case n.HorizontalAlign["CENTER"]:
      return "center";
    case n.HorizontalAlign["RIGHT"]:
      return "right";
    case n.HorizontalAlign["JUSTIFIED"]:
    case n.HorizontalAlign["BOTH"]:
      return "justify";
    default:
      throw RangeError("PDF paragraph horizontal alignment is unsupported.");
  }
}
function B(var_core_value_sigCAF7) {
  let var_core_value_sigED1C = R("story"),
    var_core_value_sig726E = R("block"),
    var_core_value_sig2CD3 = R("run");
  return {
    id: var_core_value_sigED1C,
    objectIds: [var_core_value_sigCAF7],
    blocks: [{
      id: var_core_value_sig726E,
      runIds: [var_core_value_sig2CD3],
      role: e.PdfSemanticRole["PARAGRAPH"]
    }],
    runs: {
      [var_core_value_sig2CD3]: {
        id: var_core_value_sig2CD3,
        text: "",
        fontSize: 12
      }
    }
  };
}
let V = class extends c {
  constructor(var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C) {
    super(var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542, e.PdfObjectType["TEXT_BOX"], var_core_value_sigBB6C);
  }
  getText() {
    let var_core_value_sigE2BF = this._model["getMaterializedDocument"](),
      var_core_value_sigB8C7 = var_core_value_sigE2BF.objects[this._objectId];
    if (!var_core_value_sigB8C7 || var_core_value_sigB8C7.type !== e.PdfObjectType["TEXT_BOX"]) throw Error("PDF text box " + this._objectId + " no longer exists on page " + this._pageId + ".");
    let var_core_value_sigA56E = var_core_value_sigB8C7;
    if (var_core_value_sigA56E.runs) return var_core_value_sigA56E.runs["map"](var_core_value_sig5CEE => var_core_value_sig5CEE.text).join("");
    let var_core_value_sig1998 = var_core_value_sigA56E.textStoryId ? var_core_value_sigE2BF.textStories[var_core_value_sigA56E.textStoryId] : undefined;
    return (var_core_value_sig1998 == null ? undefined : var_core_value_sig1998.blocks["flatMap"](var_core_value_sigE92A => var_core_value_sigE92A.runIds).map(var_core_value_sig362B => {
      var var_core_value_sig5CA5;
      return ((var_core_value_sig5CA5 = var_core_value_sig1998.runs[var_core_value_sig362B]) == null ? undefined : var_core_value_sig5CA5.text) ?? "";
    }).join("")) ?? "";
  }
  getTextRuns() {
    let var_core_value_sigFF19 = this._getCurrentObject();
    return JSON.parse(JSON.stringify(var_core_value_sigFF19.runs ?? []));
  }
  setText(var_core_value_sig43B8) {
    return this._getCurrentObject(), o(this._model, this._injector, e.pdfEditTextAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      text: var_core_value_sig43B8
    }), this;
  }
  setTextStyle(var_core_value_sigD98F, var_core_value_sig66C0) {
    return this._getCurrentObject(), var_core_value_sig66C0 ? o(this._model, this._injector, e.pdfUpdateTextRangeStyleAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      range: var_core_value_sig66C0,
      textStyle: var_core_value_sigD98F
    }) : o(this._model, this._injector, e.pdfUpdateTextStyleAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      textStyle: var_core_value_sigD98F
    }), this;
  }
  getTextAnchor() {
    return this._getCurrentObject().textAnchor ?? e.PdfTextAnchor["START"];
  }
  setTextAnchor(var_core_value_sig9D15) {
    return this._getCurrentObject(), o(this._model, this._injector, e.pdfUpdateTextStyleAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      textAnchor: var_core_value_sig9D15
    }), this;
  }
};
V = m([p(3, (0, n.Inject)(n.Injector))], V);
let H = class {
  constructor(var_core_value_sigB785, var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F) {
    this._model = var_core_value_sigB785, this._pageId = var_core_value_sig130F, this._target = var_core_value_sigC0E3, this._rootDisplayListIds = var_core_value_sig52F7, this._injector = var_core_value_sig866F, S(this, "_identity", undefined), S(this, "_id", undefined), S(this, "_text", undefined), S(this, "_runs", undefined), S(this, "_bounds", undefined), this._identity = W(var_core_value_sigC0E3), this._id = le(var_core_value_sigB785.getUnitId(), var_core_value_sig130F, this._identity), this._text = var_core_value_sigC0E3.text, this._runs = G(var_core_value_sigC0E3.runs ?? []), this._bounds = ce(var_core_value_sigC0E3.bbox);
  }
  getId() {
    return this._id;
  }
  getText() {
    return this._text;
  }
  getTextRuns() {
    return G(this._runs);
  }
  getBounds() {
    return {
      ...this._bounds
    };
  }
  replaceText(var_core_value_sigDE3D) {
    var var_core_value_sigF175, var_core_value_sig6A18;
    let var_core_value_sig4E3D = this._resolveCurrentTarget(),
      var_core_value_sig49B0 = "pdf-facade-native-text-" + (0, n.generateRandomId)(12),
      var_core_value_sig2547 = (var_core_value_sigF175 = var_core_value_sig4E3D.runs) == null ? undefined : var_core_value_sigF175[0],
      var_core_value_sigBCA9 = var_core_value_sig2547 ? [se(var_core_value_sig2547, var_core_value_sigDE3D)] : [{
        text: var_core_value_sigDE3D,
        fontSize: 12
      }];
    return o(this._model, this._injector, e.pdfPromoteNativeTextAction, {
      pageId: this._pageId,
      text: var_core_value_sigDE3D,
      bbox: var_core_value_sig4E3D.promotionBbox ?? var_core_value_sig4E3D.bbox,
      transform: var_core_value_sig4E3D.promotionTransform,
      displayOperationIds: var_core_value_sig4E3D.displayOperationIds ?? ((var_core_value_sig6A18 = var_core_value_sig4E3D.source) == null ? undefined : var_core_value_sig6A18.operatorIds) ?? [var_core_value_sig4E3D.id],
      runs: var_core_value_sigBCA9,
      source: var_core_value_sig4E3D.source,
      objectId: var_core_value_sig49B0,
      zIndex: var_core_value_sig4E3D.zIndex,
      metadata: e.PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA
    }), this._injector["createInstance"](V, this._model, this._pageId, var_core_value_sig49B0);
  }
  _resolveCurrentTarget() {
    let var_core_value_sig4CDF = (0, e.createPdfNativeTextHitTargets)(this._model["getMaterializedDocument"](), this._pageId, {
      rootDisplayListIds: this._rootDisplayListIds
    }).find(var_core_value_sigE90F => W(var_core_value_sigE90F) === this._identity);
    if (!var_core_value_sig4CDF || U(this._model, var_core_value_sig4CDF)) throw Error("Native PDF text span " + this._id + " is stale, hidden, or already replaced.");
    return var_core_value_sig4CDF;
  }
};
H = m([p(4, (0, n.Inject)(n.Injector))], H);
function U(var_core_value_sig038E, var_core_value_sigAA1E) {
  return Object.values(var_core_value_sig038E.getEditState().sourceSuppressions).some(var_core_value_sig3F79 => var_core_value_sig3F79.exportDisposition !== e.PdfExportDisposition["PRESERVE_NATIVE"] && ae(var_core_value_sig3F79, var_core_value_sigAA1E));
}
function W(var_core_value_sigC9F5) {
  var var_core_value_sig7EEA, var_core_value_sig59CE, var_core_value_sig33C8;
  return JSON.stringify(((var_core_value_sig7EEA = var_core_value_sigC9F5.source) == null ? undefined : var_core_value_sig7EEA.operationPath) ?? [{
    displayListId: (var_core_value_sig59CE = var_core_value_sigC9F5.source) == null || (var_core_value_sig59CE = var_core_value_sig59CE.displayListIds) == null ? undefined : var_core_value_sig59CE[0],
    operatorId: ((var_core_value_sig33C8 = var_core_value_sigC9F5.displayOperationIds) == null ? undefined : var_core_value_sig33C8[0]) ?? var_core_value_sigC9F5.id
  }]);
}
function ae(var_core_value_sig957F, var_core_value_sig803B) {
  var var_core_value_sig5830, var_core_value_sig4A7C;
  if (var_core_value_sig957F.pageId && var_core_value_sig957F.pageId !== var_core_value_sig803B.pageId) return false;
  if ((var_core_value_sig5830 = var_core_value_sig957F.operationPath) != null && var_core_value_sig5830.length) {
    var var_core_value_sigF975;
    return oe(var_core_value_sig957F.operationPath, (var_core_value_sigF975 = var_core_value_sig803B.source) == null ? undefined : var_core_value_sigF975.operationPath);
  }
  let var_core_value_sigCDAF = var_core_value_sig803B.displayOperationIds ?? ((var_core_value_sig4A7C = var_core_value_sig803B.source) == null ? undefined : var_core_value_sig4A7C.operatorIds) ?? [var_core_value_sig803B.id];
  return (var_core_value_sig957F.operatorIds ?? []).some(var_core_value_sig880E => var_core_value_sigCDAF.includes(var_core_value_sig880E));
}
function oe(var_core_value_sigA298, var_core_value_sig0B40) {
  return !!(var_core_value_sig0B40 && var_core_value_sigA298.length === var_core_value_sig0B40.length && var_core_value_sigA298.every((var_core_value_sigC9ED, var_core_value_sigB57B) => {
    let var_core_value_sig780B = var_core_value_sig0B40[var_core_value_sigB57B];
    return var_core_value_sigC9ED.displayListId === (var_core_value_sig780B == null ? undefined : var_core_value_sig780B.displayListId) && var_core_value_sigC9ED.operatorId === var_core_value_sig780B.operatorId && var_core_value_sigC9ED.resourceName === var_core_value_sig780B.resourceName && var_core_value_sigC9ED.objectRef === var_core_value_sig780B.objectRef && var_core_value_sigC9ED.assetId === var_core_value_sig780B.assetId;
  }));
}
function se(var_core_value_sig330B, var_core_value_sig3625) {
  let {
    glyphs: var_core_value_sig0B4E,
    source: var_core_value_sig0E9F,
    ...var_core_value_sigE5BA
  } = var_core_value_sig330B;
  return {
    ...var_core_value_sigE5BA,
    text: var_core_value_sig3625
  };
}
function ce(var_core_value_sig4A83) {
  return {
    left: (0, e.emuToPt)(var_core_value_sig4A83[0]),
    top: (0, e.emuToPt)(var_core_value_sig4A83[1]),
    width: (0, e.emuToPt)(var_core_value_sig4A83[2] - var_core_value_sig4A83[0]),
    height: (0, e.emuToPt)(var_core_value_sig4A83[3] - var_core_value_sig4A83[1])
  };
}
function le(var_core_value_sig58AA, var_core_value_sig84C4, var_core_value_sigB6F7) {
  let var_core_value_sigB495 = var_core_value_sig58AA + ":" + var_core_value_sig84C4 + ":" + var_core_value_sigB6F7,
    var_core_value_sig70D0 = 2166136261;
  for (let var_core_value_sig7D1B = 0; var_core_value_sig7D1B < var_core_value_sigB495.length; var_core_value_sig7D1B++) var_core_value_sig70D0 ^= var_core_value_sigB495.charCodeAt(var_core_value_sig7D1B), var_core_value_sig70D0 = Math.imul(var_core_value_sig70D0, 16777619);
  return "pdf-native-text-" + (var_core_value_sig70D0 >>> 0).toString(36);
}
function G(var_core_value_sig2A8A) {
  return JSON.parse(JSON.stringify(var_core_value_sig2A8A));
}
let K = class {
  constructor(var_core_value_sig7BE0, var_core_value_sig7D40, var_core_value_sig6C7E) {
    this._model = var_core_value_sig7BE0, this._pageId = var_core_value_sig7D40, this._injector = var_core_value_sig6C7E;
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
    return Object.values(this._model["getEditState"]().overlayObjects).filter(var_core_value_sigEFD4 => var_core_value_sigEFD4.pageId === this._pageId).sort((var_core_value_sig861B, var_core_value_sig5237) => var_core_value_sig861B.zIndex - var_core_value_sig5237.zIndex).flatMap(var_core_value_sigBB00 => {
      let var_core_value_sig7E54 = this._createElement(var_core_value_sigBB00.object["id"]);
      return var_core_value_sig7E54 ? [var_core_value_sig7E54] : [];
    });
  }
  getElementById(var_core_value_sig68BE) {
    let var_core_value_sig04C6 = this._model["getEditState"]().overlayObjects[var_core_value_sig68BE];
    return !var_core_value_sig04C6 || var_core_value_sig04C6.pageId !== this._pageId ? null : this._createElement(var_core_value_sig68BE);
  }
  getTextBoxes() {
    return this._filterTextElements(var_core_value_sig9A8D => !var_core_value_sig9A8D);
  }
  getImages() {
    return this.getElements().filter(var_core_value_sigC259 => var_core_value_sigC259.getType() === e.PdfObjectType["IMAGE"]);
  }
  getParagraphs() {
    return this._filterTextElements(var_core_value_sig9C9F => !!(var_core_value_sig9C9F && !q(var_core_value_sig9C9F)));
  }
  getLists() {
    return this._filterTextElements(var_core_value_sigFDEA => !!(var_core_value_sigFDEA && q(var_core_value_sigFDEA)));
  }
  getTables() {
    return this.getElements().filter(var_core_value_sig86D0 => var_core_value_sig86D0.getType() === e.PdfObjectType["TABLE"]);
  }
  getDividers() {
    return this.getElements().filter(var_core_value_sig4CD2 => var_core_value_sig4CD2.getType() === e.PdfObjectType["PATH"]);
  }
  getAnnotations() {
    return this.getElements().filter(var_core_value_sig48CA => var_core_value_sig48CA.getType() === e.PdfObjectType["ANNOTATION"]);
  }
  getTextSpans() {
    let var_core_value_sigCA05 = this._model["getMaterializedDocument"](),
      var_core_value_sig2F2B = me(var_core_value_sigCA05, this._pageId);
    return (0, e.createPdfNativeTextHitTargets)(var_core_value_sigCA05, this._pageId, {
      rootDisplayListIds: var_core_value_sig2F2B
    }).filter(var_core_value_sig50AF => !U(this._model, var_core_value_sig50AF)).map(var_core_value_sigA942 => this._injector["createInstance"](H, this._model, this._pageId, var_core_value_sigA942, var_core_value_sig2F2B));
  }
  insertTextBox(var_core_value_sig70AF) {
    let var_core_value_sigD04E = this._getCurrentPage(),
      var_core_value_sigB99B = J("textBox", var_core_value_sig70AF.id),
      {
        bbox: var_core_value_sig5A75,
        transform: var_core_value_sig7BAF
      } = X(var_core_value_sig70AF, (0, e.createPdfDefaultTextBoxInsertionBbox)(var_core_value_sigD04E));
    return o(this._model, this._injector, e.pdfAddTextBoxAction, {
      pageId: this._pageId,
      text: var_core_value_sig70AF.text,
      objectId: var_core_value_sigB99B,
      zIndex: var_core_value_sig70AF.index,
      bbox: var_core_value_sig5A75,
      transform: var_core_value_sig7BAF,
      fontFamily: var_core_value_sig70AF.fontFamily,
      fontSize: var_core_value_sig70AF.fontSize,
      fill: var_core_value_sig70AF.fill
    }), this._injector["createInstance"](V, this._model, this._pageId, var_core_value_sigB99B);
  }
  insertParagraph(var_core_value_sig8F69) {
    let var_core_value_sig6884 = this._getCurrentPage(),
      var_core_value_sig066E = J("paragraph", var_core_value_sig8F69.id),
      var_core_value_sig9B0D = X(var_core_value_sig8F69, (0, e.createPdfDefaultParagraphInsertionBbox)(var_core_value_sig6884));
    return o(this._model, this._injector, e.pdfAddParagraphAction, {
      pageId: this._pageId,
      objectId: var_core_value_sig066E,
      text: var_core_value_sig8F69.text,
      zIndex: var_core_value_sig8F69.index,
      ...var_core_value_sig9B0D,
      fontFamily: var_core_value_sig8F69.fontFamily,
      fontSize: var_core_value_sig8F69.fontSize,
      fill: var_core_value_sig8F69.fill
    }), this._injector["createInstance"](F, this._model, this._pageId, var_core_value_sig066E);
  }
  insertList(var_core_value_sig3D2C) {
    let var_core_value_sigC56D = this._getCurrentPage(),
      var_core_value_sig3A17 = J("list", var_core_value_sig3D2C.id),
      var_core_value_sig938F = X(var_core_value_sig3D2C, (0, e.createPdfDefaultListInsertionBbox)(var_core_value_sigC56D));
    return o(this._model, this._injector, e.pdfAddListAction, {
      pageId: this._pageId,
      objectId: var_core_value_sig3A17,
      text: var_core_value_sig3D2C.text,
      kind: var_core_value_sig3D2C.kind,
      presetId: var_core_value_sig3D2C.preset,
      zIndex: var_core_value_sig3D2C.index,
      ...var_core_value_sig938F,
      fontFamily: var_core_value_sig3D2C.fontFamily,
      fontSize: var_core_value_sig3D2C.fontSize,
      fill: var_core_value_sig3D2C.fill
    }), this._injector["createInstance"](P, this._model, this._pageId, var_core_value_sig3A17);
  }
  insertTable(var_core_value_sigD948) {
    let var_core_value_sigBE5E = this._getCurrentPage(),
      var_core_value_sig0281 = J("table", var_core_value_sigD948.id),
      var_core_value_sigED71 = (0, e.createPdfDefaultTableInsertionLayout)(var_core_value_sigBE5E, var_core_value_sigD948.rowCount, var_core_value_sigD948.columnCount),
      var_core_value_sig281C = X(var_core_value_sigD948, var_core_value_sigED71.bbox);
    return o(this._model, this._injector, e.pdfAddTableAction, {
      pageId: this._pageId,
      tableId: var_core_value_sig0281,
      rowCount: var_core_value_sigD948.rowCount,
      columnCount: var_core_value_sigD948.columnCount,
      cellTexts: var_core_value_sigD948.cellTexts,
      defaultCellStyle: var_core_value_sigD948.defaultCellStyle ?? {
        padding: {
          top: var_core_value_sigED71.padding,
          right: var_core_value_sigED71.padding,
          bottom: var_core_value_sigED71.padding,
          left: var_core_value_sigED71.padding
        }
      },
      styleId: var_core_value_sigD948.styleId,
      options: var_core_value_sigD948.options,
      zIndex: var_core_value_sigD948.index,
      ...var_core_value_sig281C
    }), this._injector["createInstance"](I, this._model, this._pageId, var_core_value_sig0281);
  }
  insertDivider(var_core_value_sig3C92 = {}) {
    let var_core_value_sigB16B = this._getCurrentPage(),
      var_core_value_sig585D = J("divider", var_core_value_sig3C92.id),
      var_core_value_sigE722 = X(var_core_value_sig3C92, (0, e.createPdfDefaultDividerInsertionBbox)(var_core_value_sigB16B));
    return o(this._model, this._injector, e.pdfAddDividerAction, {
      pageId: this._pageId,
      objectId: var_core_value_sig585D,
      strokeColor: var_core_value_sig3C92.strokeColor,
      strokeWidth: var_core_value_sig3C92.strokeWidth === undefined ? undefined : (0, e.ptToEmu)(var_core_value_sig3C92.strokeWidth),
      zIndex: var_core_value_sig3C92.index,
      ...var_core_value_sigE722
    }), this._injector["createInstance"](y, this._model, this._pageId, var_core_value_sig585D);
  }
  insertAnnotation(var_core_value_sig062A) {
    let var_core_value_sig050A = J("annotation", var_core_value_sig062A.id),
      var_core_value_sig8B32 = X(var_core_value_sig062A, [0, 0, (0, e.ptToEmu)(144), (0, e.ptToEmu)(36)]);
    return o(this._model, this._injector, e.pdfAddAnnotationAction, {
      pageId: this._pageId,
      objectId: var_core_value_sig050A,
      annotationType: var_core_value_sig062A.annotationType,
      ...de(var_core_value_sig062A, var_core_value_sig8B32.bbox),
      zIndex: var_core_value_sig062A.index,
      ...var_core_value_sig8B32
    }), this._injector["createInstance"](h, this._model, this._pageId, var_core_value_sig050A);
  }
  newImage(var_core_value_sig870F) {
    return var_core_value_sig870F instanceof C ? var_core_value_sig870F.toBuilder() : new w(this._model["getUnitId"](), this._pageId, var_core_value_sig870F ? {
      id: var_core_value_sig870F
    } : undefined);
  }
  insertImage(var_core_value_sigB683, var_core_value_sig26EC) {
    ue(this._model, this._pageId, var_core_value_sigB683);
    let var_core_value_sigEEDB = D(this._model, var_core_value_sigB683),
      var_core_value_sig36E7 = O(var_core_value_sigB683.element["transform"]);
    return o(this._model, this._injector, e.pdfAddImageAction, {
      pageId: this._pageId,
      objectId: var_core_value_sigB683.element["id"],
      assetId: var_core_value_sigEEDB.asset["id"],
      resource: var_core_value_sigEEDB,
      crop: var_core_value_sigB683.element["crop"] ? k(var_core_value_sigB683.element["crop"], var_core_value_sig36E7.bbox) : undefined,
      opacity: var_core_value_sigB683.element["opacity"],
      zIndex: var_core_value_sig26EC,
      ...var_core_value_sig36E7
    }), this._injector["createInstance"](C, this._model, this._pageId, var_core_value_sigB683.element["id"]);
  }
  async insertImageAsync(var_core_value_sig6A78, var_core_value_sigF7EF = {}) {
    let var_core_value_sig27F9 = this.newImage(var_core_value_sigF7EF.id),
      var_core_value_sig393E = typeof var_core_value_sig6A78 == "string" ? var_core_value_sig6A78 : await var_core_value_sig6A78.getBlob().getDataAsString();
    var_core_value_sig27F9.setSource(var_core_value_sig393E, var_core_value_sigF7EF.imageSourceType), (var_core_value_sigF7EF.left !== undefined || var_core_value_sigF7EF.top !== undefined) && var_core_value_sig27F9.setAbsolutePosition(var_core_value_sigF7EF.left ?? 0, var_core_value_sigF7EF.top ?? 0), (var_core_value_sigF7EF.width !== undefined || var_core_value_sigF7EF.height !== undefined) && var_core_value_sig27F9.setSize(var_core_value_sigF7EF.width ?? 288, var_core_value_sigF7EF.height ?? 162), var_core_value_sigF7EF.rotation !== undefined && var_core_value_sig27F9.setRotation(var_core_value_sigF7EF.rotation), var_core_value_sigF7EF.crop && var_core_value_sig27F9.setCrop(var_core_value_sigF7EF.crop);
    let var_core_value_sigB609 = var_core_value_sig27F9.build();
    return var_core_value_sigB609.element["opacity"] = var_core_value_sigF7EF.opacity, this.insertImage(var_core_value_sigB609, var_core_value_sigF7EF.index);
  }
  _filterTextElements(var_core_value_sig390D) {
    let var_core_value_sigC928 = this.getElements().filter(var_core_value_sigA621 => var_core_value_sigA621.getType() === e.PdfObjectType["TEXT_BOX"]);
    if (var_core_value_sigC928.length === 0) return [];
    let var_core_value_sig39B7 = this._model["getMaterializedDocument"]();
    return var_core_value_sigC928.filter(var_core_value_sigBBFF => var_core_value_sig390D(this._getTextStory(var_core_value_sig39B7, var_core_value_sigBBFF.getId())));
  }
  _getTextStory(var_core_value_sig18E01, var_core_value_sigE161) {
    var var_core_value_sigBDEE;
    let var_core_value_sig1F40 = var_core_value_sig18E01.objects[var_core_value_sigE161] ?? ((var_core_value_sigBDEE = this._model["getEditState"]().overlayObjects[var_core_value_sigE161]) == null ? undefined : var_core_value_sigBDEE.object);
    return (var_core_value_sig1F40 == null ? undefined : var_core_value_sig1F40.type) === e.PdfObjectType["TEXT_BOX"] && var_core_value_sig1F40.textStoryId ? var_core_value_sig18E01.textStories[var_core_value_sig1F40.textStoryId] : undefined;
  }
  _createElement(var_core_value_sig3FC7) {
    var var_core_value_sig1E1B;
    let var_core_value_sig3B10 = this._model["getMaterializedDocument"](),
      var_core_value_sig89E6 = var_core_value_sig3B10.objects[var_core_value_sig3FC7] ?? ((var_core_value_sig1E1B = this._model["getEditState"]().overlayObjects[var_core_value_sig3FC7]) == null ? undefined : var_core_value_sig1E1B.object);
    if (!var_core_value_sig89E6) return null;
    if (var_core_value_sig89E6.type === e.PdfObjectType["TEXT_BOX"]) {
      let var_core_value_sig8889 = var_core_value_sig89E6.textStoryId,
        var_core_value_sig32F8 = var_core_value_sig8889 ? var_core_value_sig3B10.textStories[var_core_value_sig8889] : undefined;
      return var_core_value_sig32F8 ? q(var_core_value_sig32F8) ? this._injector["createInstance"](P, this._model, this._pageId, var_core_value_sig3FC7) : this._injector["createInstance"](F, this._model, this._pageId, var_core_value_sig3FC7) : this._injector["createInstance"](V, this._model, this._pageId, var_core_value_sig3FC7);
    }
    return var_core_value_sig89E6.type === e.PdfObjectType["IMAGE"] ? this._injector["createInstance"](C, this._model, this._pageId, var_core_value_sig3FC7) : var_core_value_sig89E6.type === e.PdfObjectType["TABLE"] ? this._injector["createInstance"](I, this._model, this._pageId, var_core_value_sig3FC7) : var_core_value_sig89E6.type === e.PdfObjectType["PATH"] && (0, e.isPdfEditorDividerObject)(var_core_value_sig89E6) ? this._injector["createInstance"](y, this._model, this._pageId, var_core_value_sig3FC7) : var_core_value_sig89E6.type === e.PdfObjectType["ANNOTATION"] ? this._injector["createInstance"](h, this._model, this._pageId, var_core_value_sig3FC7) : null;
  }
  _getCurrentPage() {
    let var_core_value_sig4743 = this._model["getMaterializedDocument"]().pages["find"](var_core_value_sig5B67 => var_core_value_sig5B67.id === this._pageId);
    if (!var_core_value_sig4743) throw Error("PDF page " + this._pageId + "\x20no\x20longer\x20exists.");
    return var_core_value_sig4743;
  }
};
K = m([p(2, (0, n.Inject)(n.Injector))], K);
function q(var_core_value_sig3782) {
  return var_core_value_sig3782.blocks["some"](var_core_value_sigEB6A => !!var_core_value_sigEB6A.listItem) || Object.keys(var_core_value_sig3782.lists ?? {}).length > 0;
}
function J(var_core_value_sigD22E, var_core_value_sig3455) {
  return var_core_value_sig3455 ?? "pdf-facade-" + var_core_value_sigD22E + "-" + (0, n.generateRandomId)(12);
}
function ue(var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395) {
  if (var_core_value_sig1395.unitId !== var_core_value_sig5CEF.getUnitId() || var_core_value_sig1395.pageId !== var_core_value_sig43D5) throw RangeError("PDF image builder info belongs to another PDF unit or page.");
}
function de(var_core_value_sig9FA0, var_core_value_sig055E) {
  let var_core_value_sig7C77 = var_core_value_sig9FA0.annotationType;
  switch (var_core_value_sig9FA0.annotationType) {
    case e.PdfAnnotationType["HIGHLIGHT"]:
    case e.PdfAnnotationType["UNDERLINE"]:
    case e.PdfAnnotationType["STRIKEOUT"]:
    case e.PdfAnnotationType["SQUIGGLY"]:
      {
        let {
          quadPoints: var_core_value_sig1758,
          stroke: var_core_value_sig4805,
          ...var_core_value_sigE67E
        } = var_core_value_sig9FA0.markup ?? {};
        return {
          markup: {
            ...var_core_value_sigE67E,
            ...(var_core_value_sig4805 === undefined ? {} : {
              stroke: i(var_core_value_sig4805)
            }),
            quadPoints: var_core_value_sig1758 != null && var_core_value_sig1758.length ? var_core_value_sig1758.map(fe) : [pe(var_core_value_sig055E)]
          }
        };
      }
    case e.PdfAnnotationType["INK"]:
      {
        if (!var_core_value_sig9FA0.ink["paths"].length || var_core_value_sig9FA0.ink["paths"].some(var_core_value_sig27E5 => !var_core_value_sig27E5.length)) throw RangeError("PDF ink annotation requires at least one non-empty path.");
        let {
          paths: var_core_value_sig2902,
          stroke: var_core_value_sig9989
        } = var_core_value_sig9FA0.ink;
        return {
          ink: {
            ...(var_core_value_sig9989 === undefined ? {} : {
              stroke: i(var_core_value_sig9989)
            }),
            paths: var_core_value_sig2902.map(var_core_value_sig8061 => var_core_value_sig8061.map(Y))
          }
        };
      }
    default:
      throw RangeError("Unsupported PDF Facade annotation type: " + var_core_value_sig7C77 + ".");
  }
}
function Y([var_core_value_sig9578, var_core_value_sigA2D3]) {
  return [(0, e.ptToEmu)(var_core_value_sig9578), (0, e.ptToEmu)(var_core_value_sigA2D3)];
}
function fe([var_core_value_sigC218, var_core_value_sigADEC, var_core_value_sig3D8E, var_core_value_sig37E5]) {
  return [Y(var_core_value_sigC218), Y(var_core_value_sigADEC), Y(var_core_value_sig3D8E), Y(var_core_value_sig37E5)];
}
function pe([var_core_value_sigF079, var_core_value_sigFCA0, var_core_value_sigC84D, var_core_value_sigF2BC]) {
  return [[var_core_value_sigF079, var_core_value_sigFCA0], [var_core_value_sigC84D, var_core_value_sigFCA0], [var_core_value_sigF079, var_core_value_sigF2BC], [var_core_value_sigC84D, var_core_value_sigF2BC]];
}
function me(var_core_value_sigD37B, var_core_value_sigFA28) {
  let var_core_value_sig93BE = Object.values(var_core_value_sigD37B.displayLists).filter(var_core_value_sig3D46 => var_core_value_sig3D46.pageId === var_core_value_sigFA28),
    var_core_value_sigABEC = new Set();
  var_core_value_sig93BE.forEach(var_core_value_sigCC93 => {
    var_core_value_sigCC93.ops["forEach"](var_core_value_sig698E => {
      var var_core_value_sig2809;
      if (var_core_value_sig698E.type !== e.PdfDisplayOpType["FORM_XOBJECT"]) return;
      let var_core_value_sig2DAB = var_core_value_sig698E.displayListId ?? (var_core_value_sig698E.assetId ? (var_core_value_sig2809 = var_core_value_sigD37B.assets["formXObjects"][var_core_value_sig698E.assetId]) == null ? undefined : var_core_value_sig2809.displayListId : undefined);
      var_core_value_sig2DAB && var_core_value_sigABEC.add(var_core_value_sig2DAB);
    });
  });
  let var_core_value_sig2712 = var_core_value_sig93BE.map(var_core_value_sig5964 => var_core_value_sig5964.id).filter(var_core_value_sig808B => !var_core_value_sigABEC.has(var_core_value_sig808B));
  return var_core_value_sig2712.length ? var_core_value_sig2712 : var_core_value_sig93BE.map(var_core_value_sig2A26 => var_core_value_sig2A26.id);
}
function X(var_core_value_sig0B9E, var_core_value_sigC545) {
  let var_core_value_sig12A7 = var_core_value_sig0B9E.left ?? (0, e.emuToPt)(var_core_value_sigC545[0]),
    var_core_value_sig6F4E = var_core_value_sig0B9E.top ?? (0, e.emuToPt)(var_core_value_sigC545[1]),
    var_core_value_sigA021 = var_core_value_sig0B9E.width ?? (0, e.emuToPt)(var_core_value_sigC545[2] - var_core_value_sigC545[0]),
    var_core_value_sig49D9 = var_core_value_sig0B9E.height ?? (0, e.emuToPt)(var_core_value_sigC545[3] - var_core_value_sigC545[1]),
    var_core_value_sig320C = var_core_value_sig0B9E.rotation ?? 0;
  Z(var_core_value_sig12A7, "left"), Z(var_core_value_sig6F4E, "top"), Q(var_core_value_sigA021, "width"), Q(var_core_value_sig49D9, "height"), Z(var_core_value_sig320C, "rotation");
  let var_core_value_sigE7F0 = [(0, e.ptToEmu)(var_core_value_sig12A7), (0, e.ptToEmu)(var_core_value_sig6F4E), (0, e.ptToEmu)(var_core_value_sig12A7 + var_core_value_sigA021), (0, e.ptToEmu)(var_core_value_sig6F4E + var_core_value_sig49D9)];
  return {
    bbox: var_core_value_sigE7F0,
    ...(var_core_value_sig320C === 0 ? {} : {
      transform: he(var_core_value_sigE7F0, var_core_value_sig320C)
    })
  };
}
function he(var_core_value_sigE837, var_core_value_sig34F4) {
  let var_core_value_sigA45D = var_core_value_sig34F4 * Math.PI / 180,
    var_core_value_sig1BC7 = Math.cos(var_core_value_sigA45D),
    var_core_value_sig4956 = Math.sin(var_core_value_sigA45D),
    var_core_value_sigCC9E = (var_core_value_sigE837[0] + var_core_value_sigE837[2]) / 2,
    var_core_value_sig444C = (var_core_value_sigE837[1] + var_core_value_sigE837[3]) / 2;
  return [var_core_value_sig1BC7, var_core_value_sig4956, -var_core_value_sig4956, var_core_value_sig1BC7, var_core_value_sigCC9E - var_core_value_sig1BC7 * var_core_value_sigCC9E + var_core_value_sig4956 * var_core_value_sig444C, var_core_value_sig444C - var_core_value_sig4956 * var_core_value_sigCC9E - var_core_value_sig1BC7 * var_core_value_sig444C];
}
function Z(var_core_value_sigE42E, var_core_value_sigF039) {
  if (!Number.isFinite(var_core_value_sigE42E)) throw RangeError("PDF text box " + var_core_value_sigF039 + "\x20must\x20be\x20a\x20finite\x20number.");
}
function Q(var_core_value_sigA321, var_core_value_sigBF4C) {
  if (!Number.isFinite(var_core_value_sigA321) || var_core_value_sigA321 <= 0) throw RangeError("PDF text box " + var_core_value_sigBF4C + " must be a positive finite number.");
}
let $ = class extends t.FBaseInitialable {
  constructor(var_core_value_sig1179, var_core_value_sigEA92) {
    super(var_core_value_sigEA92), this._model = var_core_value_sig1179, this._injector = var_core_value_sigEA92;
  }
  getId() {
    return this._model["getUnitId"]();
  }
  getName() {
    return this._model["getSnapshot"]().name;
  }
  save() {
    return n.Tools["deepClone"](this._model["getSnapshot"]());
  }
  getDocument() {
    return this._model["getDocument"]();
  }
  getModel() {
    return this._model;
  }
  insertPage(var_core_value_sig8FD9) {
    let var_core_value_sig1AE5 = this._model["getMaterializedDocument"]().pages,
      var_core_value_sig7100 = var_core_value_sig8FD9 ?? var_core_value_sig1AE5.length;
    if (!Number.isInteger(var_core_value_sig7100) || var_core_value_sig7100 < 0 || var_core_value_sig7100 > var_core_value_sig1AE5.length) throw RangeError("PDF page insertion index is outside the document.");
    let var_core_value_sigA19A = var_core_value_sig1AE5[var_core_value_sig7100 - 1] ?? var_core_value_sig1AE5[var_core_value_sig7100],
      var_core_value_sigD3F5 = (0, e.createPdfPage)({
        id: "pdf-page-" + (0, n.generateRandomId)(12),
        index: var_core_value_sig7100,
        size: var_core_value_sigA19A ? {
          ...var_core_value_sigA19A.size
        } : {
          width: (0, e.ptToEmu)(e.PDF_A4_PAGE_WIDTH_PT),
          height: (0, e.ptToEmu)(e.PDF_A4_PAGE_HEIGHT_PT)
        },
        rotation: var_core_value_sigA19A == null ? undefined : var_core_value_sigA19A.rotation,
        pdfBoxes: var_core_value_sigA19A == null ? undefined : var_core_value_sigA19A.pdfBoxes
      });
    return o(this._model, this._injector, e.pdfInsertPageAction, {
      page: var_core_value_sigD3F5,
      atIndex: var_core_value_sig7100,
      orderedPageIds: var_core_value_sig1AE5.map(var_core_value_sig877E => var_core_value_sig877E.id)
    }), this._injector["createInstance"](K, this._model, var_core_value_sigD3F5.id);
  }
  getPages() {
    return this._model["getMaterializedDocument"]().pages["map"](var_core_value_sig20C8 => this._injector["createInstance"](K, this._model, var_core_value_sig20C8.id));
  }
  getPageById(var_core_value_sig3082) {
    return this.getPages().find(var_core_value_sigE9A7 => var_core_value_sigE9A7.getId() === var_core_value_sig3082) ?? null;
  }
  getPageByIndex(var_core_value_sigF5D1) {
    return this.getPages()[var_core_value_sigF5D1] ?? null;
  }
};
$ = m([p(1, (0, n.Inject)(n.Injector))], $);
var ge = class extends t.FUniver {
  createPdf(var_core_value_sig8775 = {}, var_core_value_sig481B) {
    let var_core_value_sig13D7 = this._injector["get"](n.IUniverInstanceService).createUnit(n.UniverInstanceType["UNIVER_PDF"], var_core_value_sig8775, var_core_value_sig481B);
    return this._injector["createInstance"]($, var_core_value_sig13D7);
  }
  getActivePdf() {
    let var_core_value_sig90C0 = this._injector["get"](n.IUniverInstanceService).getCurrentUnitOfType(n.UniverInstanceType["UNIVER_PDF"]);
    return var_core_value_sig90C0 ? this._injector["createInstance"]($, var_core_value_sig90C0) : null;
  }
  getPdf(var_core_value_sigF1B2) {
    let var_core_value_sigC2BB = this._injector["get"](n.IUniverInstanceService).getUnit(var_core_value_sigF1B2, n.UniverInstanceType["UNIVER_PDF"]);
    return var_core_value_sigC2BB ? this._injector["createInstance"]($, var_core_value_sigC2BB) : null;
  }
  getPdfTableThemePresets() {
    return e.DEFAULT_PDF_TABLE_THEME_PRESETS["map"](({
      id: var_core_value_sigBECE,
      group: var_core_value_sig1B22
    }) => ({
      id: var_core_value_sigBECE,
      group: var_core_value_sig1B22
    }));
  }
};
t.FUniver["extend"](ge), Object.defineProperty(exports, "FPdf", {
  enumerable: true,
  get: function () {
    return $;
  }
}), Object.defineProperty(exports, "FPdfAnnotation", {
  enumerable: true,
  get: function () {
    return h;
  }
}), Object.defineProperty(exports, "FPdfDivider", {
  enumerable: true,
  get: function () {
    return y;
  }
}), Object.defineProperty(exports, "FPdfImage", {
  enumerable: true,
  get: function () {
    return C;
  }
}), exports.FPdfImageBuilder = w, Object.defineProperty(exports, "FPdfList", {
  enumerable: true,
  get: function () {
    return P;
  }
}), Object.defineProperty(exports, "FPdfPage", {
  enumerable: true,
  get: function () {
    return K;
  }
}), exports.FPdfPageElement = c, Object.defineProperty(exports, "FPdfParagraph", {
  enumerable: true,
  get: function () {
    return F;
  }
}), Object.defineProperty(exports, "FPdfTable", {
  enumerable: true,
  get: function () {
    return I;
  }
}), Object.defineProperty(exports, "FPdfTableCell", {
  enumerable: true,
  get: function () {
    return L;
  }
}), Object.defineProperty(exports, "FPdfTextBox", {
  enumerable: true,
  get: function () {
    return V;
  }
}), Object.defineProperty(exports, "FPdfTextSpan", {
  enumerable: true,
  get: function () {
    return H;
  }
});
