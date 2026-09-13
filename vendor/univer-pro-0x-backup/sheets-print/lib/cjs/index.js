Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/license"),
  t = require("@univerjs-pro/print"),
  n = require("@univerjs/core"),
  r = require("@univerjs/sheets"),
  i = require("@univerjs/ui"),
  a = require("rxjs"),
  o = require("@univerjs/engine-render"),
  s = require("@univerjs/sheets-ui"),
  c = require("@univerjs/design"),
  l = require("@univerjs/icons"),
  u = require("react"),
  d = require("react/jsx-runtime"),
  f = require("@univerjs/docs"),
  p = require("@univerjs/docs-ui");
const m = Number.parseInt(1788764290),
  h = "UNIVER_SHEET_PERMISSION_ALERT_DIALOG_ID";
function g(_0x2c1996) {
  "@babel/helpers - typeof";
  return (
    (g =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x561a9b) {
            return typeof _0x561a9b;
          }
        : function (_0x3ccd4f) {
            return _0x3ccd4f &&
              typeof Symbol == "function" &&
              _0x3ccd4f.constructor === Symbol &&
              _0x3ccd4f !== Symbol.prototype
              ? "symbol"
              : typeof _0x3ccd4f;
          }),
    g(_0x2c1996)
  );
}
function _(_0x1be139, _0x2d5ca5) {
  if (g(_0x1be139) != "object" || !_0x1be139) return _0x1be139;
  var _0x12a2d4 = _0x1be139[Symbol.toPrimitive];
  if (_0x12a2d4 !== undefined) {
    var _0x121715 = _0x12a2d4.call(_0x1be139, _0x2d5ca5 || "default");
    if (g(_0x121715) != "object") return _0x121715;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x2d5ca5 === "string" ? String : Number)(_0x1be139);
}
function v(_0x98f927) {
  var _0xaf3c11 = _(_0x98f927, "string");
  return g(_0xaf3c11) == "symbol" ? _0xaf3c11 : _0xaf3c11 + "";
}
function y(_0xc7a306, _0x5a3109, _0x441e57) {
  return (
    (_0x5a3109 = v(_0x5a3109)) in _0xc7a306
      ? Object.defineProperty(_0xc7a306, _0x5a3109, {
          value: _0x441e57,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xc7a306[_0x5a3109] = _0x441e57),
    _0xc7a306
  );
}
const b = (0, n.createIdentifier)("univer-pro.sheet-print-dialog.service");
var x = class extends n.Disposable {
  constructor(..._0x3d9291) {
    (super(..._0x3d9291),
      y(this, "visible$", new a["BehaviorSubject"](false)),
      y(this, "preparing$", new a["BehaviorSubject"](false)));
  }
  get visible() {
    return this.visible$["getValue"]();
  }
  get preparing() {
    return this.preparing$["getValue"]();
  }
  open() {
    this.visible$["next"](true);
  }
  close() {
    this.visible$["next"](false);
  }
  setPreparing(_0x5ba9d6) {
    this.preparing$["next"](_0x5ba9d6);
  }
  dispose() {
    (this.visible$["complete"](),
      this.preparing$["complete"](),
      super.dispose());
  }
};
let S = (function (_0x172c7c) {
    return (
      (_0x172c7c.CurrentSheet = "CurrentSheet"),
      (_0x172c7c.workbook = "Workbook"),
      (_0x172c7c.CurrentSelection = "CurrentSelection"),
      (_0x172c7c.AllSelection = "AllSelection"),
      _0x172c7c
    );
  })({}),
  C = (function (_0x48c4a2) {
    return (
      (_0x48c4a2.PageSize = "PageSize"),
      (_0x48c4a2.WorkbookTitle = "WorkbookTitle"),
      (_0x48c4a2.WorksheetTitle = "WorksheetTitle"),
      (_0x48c4a2.Date = "Date"),
      (_0x48c4a2.Time = "Time"),
      _0x48c4a2
    );
  })({}),
  w = (function (_0x13e0bf) {
    return ((_0x13e0bf.Row = "Row"), (_0x13e0bf.Column = "Column"), _0x13e0bf);
  })({}),
  T = (function (_0x11acac) {
    return (
      (_0x11acac.WorkbookTitle = "@WorkbookTitle"),
      (_0x11acac.WorksheetTitle = "@WorksheetTitle"),
      (_0x11acac.DateA = "@DateA"),
      (_0x11acac.DateB = "@DateB"),
      (_0x11acac.DateC = "@DateC"),
      (_0x11acac.DateD = "@DateD"),
      (_0x11acac.DateE = "@DateE"),
      (_0x11acac.TimeA = "@TimeA"),
      (_0x11acac.TimeB = "@TimeB"),
      (_0x11acac.TimeC = "@TimeC"),
      (_0x11acac.TimeD = "@TimeD"),
      (_0x11acac.Page = "@Page"),
      (_0x11acac.SheetPage = "@SheetPage"),
      (_0x11acac.PageTotal = "@TotalPage"),
      (_0x11acac.SheetPageTotal = "@TotalSheetPage"),
      _0x11acac
    );
  })({});
const E = {
  topLeft: "",
  topCenter: "",
  topRight: "",
  bottomLeft: "",
  bottomCenter: "",
  bottomRight: "",
};
function D(_0x240509, _0x20331d) {
  return function (_0x3fdfae, _0x3f1827) {
    _0x20331d(_0x3fdfae, _0x3f1827, _0x240509);
  };
}
function O(_0x2f6975, _0x238db, _0x39b50d, _0x393a77) {
  var _0x246e36 = arguments.length,
    _0x4e83fd =
      _0x246e36 < 3
        ? _0x238db
        : _0x393a77 === null
          ? (_0x393a77 = Object.getOwnPropertyDescriptor(_0x238db, _0x39b50d))
          : _0x393a77,
    _0x435e2e;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4e83fd = Reflect.decorate(_0x2f6975, _0x238db, _0x39b50d, _0x393a77);
  else {
    for (var _0x15ed40 = _0x2f6975.length - 1; _0x15ed40 >= 0; _0x15ed40--)
      (_0x435e2e = _0x2f6975[_0x15ed40]) &&
        (_0x4e83fd =
          (_0x246e36 < 3
            ? _0x435e2e(_0x4e83fd)
            : _0x246e36 > 3
              ? _0x435e2e(_0x238db, _0x39b50d, _0x4e83fd)
              : _0x435e2e(_0x238db, _0x39b50d)) || _0x4e83fd);
  }
  return (
    _0x246e36 > 3 &&
      _0x4e83fd &&
      Object.defineProperty(_0x238db, _0x39b50d, _0x4e83fd),
    _0x4e83fd
  );
}
const k = (0, n.createIdentifier)("univer-pro.sheet-print-manager.service"),
  A = (_0x2bca4e) => Math.floor(_0x2bca4e * 100) / 100,
  ee = { startColumn: 0, endColumn: 0, startRow: 0, endRow: 0 },
  j = { startColumn: -1, startRow: -1, xSplit: 0, ySplit: 0 };
let M = class {
  constructor(_0x58c9b2, _0x2d2d64, _0x2e2e08, _0x364f65) {
    ((this._univerInstanceService = _0x58c9b2),
      (this._sheetsSelectionsSrv = _0x2d2d64),
      (this._sheetPrintInterceptorService = _0x2e2e08),
      (this._renderManagerService = _0x364f65),
      y(this, "_layoutConfig", {
        area: "CurrentSheet",
        subUnitIds: [],
        paperSize: n.PaperType["A4"],
        direction: t.PrintDirection["Portrait"],
        scale: t.PrintScale["Origin"],
        customScale: 1,
        freeze: ["Row", "Column"],
        margin: t.PrintPaperMargin["Normal"],
        maxRowsEachPage: 1 / 0,
        maxColumnsEachPage: 1 / 0,
        marginCustom: { top: 0, bottom: 0, left: 0, right: 0 },
      }),
      y(this, "_renderConfig", {
        gridlines: true,
        hAlign: t.PrintAlign["Middle"],
        vAlign: t.PrintAlign["Start"],
        headerFooter: [],
        headerFooterSetting: E,
        isCustomHeaderFooter: false,
      }),
      y(this, "_layoutInfos", []),
      y(this, "_layoutInfos$", new a["BehaviorSubject"](this._layoutInfos)),
      y(this, "_layoutConfig$", new a["BehaviorSubject"](this._layoutConfig)),
      y(this, "_renderConfig$", new a.BehaviorSubject(this._renderConfig)),
      y(this, "_printViewDisposable", null),
      y(this, "layoutConfig$", this._layoutConfig$["asObservable"]()),
      y(this, "renderConfig$", this._renderConfig$["asObservable"]()),
      y(
        this,
        "layoutInfos$",
        this._layoutInfos$["asObservable"]().pipe((0, a.debounceTime)(300)),
      ));
  }
  get layoutInfos() {
    return this._layoutInfos;
  }
  get renderConfig() {
    return this._renderConfig;
  }
  get layoutConfig() {
    return this._layoutConfig;
  }
  get paperSize() {
    let {
      paperSize: _0x5bd2d7,
      direction: _0x48293d,
      pageSizeCustom: _0xcebbd0,
    } = this._layoutConfig;
    if (_0xcebbd0) return _0xcebbd0;
    let _0x1706c9 = n.PAGE_SIZE[_0x5bd2d7];
    return _0x48293d === t.PrintDirection["Portrait"]
      ? { w: _0x1706c9.width, h: _0x1706c9.height }
      : { w: _0x1706c9.height, h: _0x1706c9.width };
  }
  get paperMargin() {
    return this._layoutConfig["margin"] === t.PrintPaperMargin["Custom"]
      ? this._layoutConfig["marginCustom"]
      : t.PaperMarginMap[this._layoutConfig["margin"]];
  }
  updateLayoutConfig(_0x5aac11) {
    ((this._layoutConfig = { ...this._layoutConfig, ..._0x5aac11 }),
      this._layoutConfig$["next"](this._layoutConfig),
      this.reLayout());
  }
  replaceLayoutConfig(_0x371f2e) {
    ((this._layoutConfig = _0x371f2e),
      this._layoutConfig$["next"](this._layoutConfig),
      this.reLayout());
  }
  updateRenderConfig(_0x5a57f4) {
    ((this._renderConfig = { ...this._renderConfig, ..._0x5a57f4 }),
      this._renderConfig$["next"](this._renderConfig));
  }
  replaceRenderConfig(_0x4a7611) {
    ((this._renderConfig = _0x4a7611),
      this._renderConfig$["next"](this._renderConfig));
  }
  reLayout() {
    ((this._layoutInfos = this._calculate()),
      this._layoutInfos$["next"](this._layoutInfos));
  }
  reset() {
    ((this._layoutInfos = []),
      this._layoutInfos$["next"](this._layoutInfos),
      (this._layoutConfig = {
        ...this._layoutConfig,
        area: "CurrentSheet",
        maxRowsEachPage: 1 / 0,
        maxColumnsEachPage: 1 / 0,
      }),
      this._layoutConfig$["next"](this._layoutConfig));
  }
  setPrintViewDisposable(_0x1a0355) {
    var _0x44ec2c;
    ((_0x44ec2c = this._printViewDisposable) == null || _0x44ec2c.dispose(),
      (this._printViewDisposable = _0x1a0355));
  }
  disposePrintView() {
    var _0xa29bd;
    ((_0xa29bd = this._printViewDisposable) == null || _0xa29bd.dispose(),
      (this._printViewDisposable = null));
  }
  _calculate() {
    let _0x1b6f62 = this._calculateSubSheetRange(),
      _0x4ab5d7 = [];
    return (
      _0x1b6f62.forEach((_0x2a54e5) => {
        if (_0x2a54e5) {
          let _0x51e7c5 = this._calculateSheetPages(_0x2a54e5);
          _0x51e7c5 && _0x4ab5d7.push(_0x51e7c5);
        }
      }),
      _0x4ab5d7
    );
  }
  _calculateSheetRangeById(_0x16f22a, _0x35f310, _0x52253b) {
    var _0x1740c9;
    let _0x50413c = this._univerInstanceService["getCurrentUnitOfType"](
      n.UniverInstanceType["UNIVER_SHEET"],
    ).getSheetBySheetId(_0x35f310);
    if (!_0x50413c) return;
    let _0x3f38a7 = _0x50413c.getFreeze(),
      _0x4ba620 = _0x52253b ?? _0x50413c.getCellMatrixPrintRange(),
      _0x130ff9 =
        (_0x1740c9 =
          this._renderManagerService["getRenderUnitById"](_0x16f22a)) == null
          ? undefined
          : _0x1740c9
              .with(s.SheetSkeletonManagerService)
              .ensureSkeleton(_0x35f310);
    if (!_0x130ff9) return;
    if (_0x4ba620) {
      var _0xff7fa7;
      _0x130ff9 == null ||
        (_0xff7fa7 = _0x130ff9.overflowCache) == null ||
        _0xff7fa7.forValue((_0x24e36e, _0x179b46, _0x3dfced) => {
          let { endColumn: _0x5dc6f4 } = _0x3dfced;
          _0x5dc6f4 > _0x4ba620.endColumn && (_0x4ba620.endColumn = _0x5dc6f4);
        });
    }
    let _0x4e3e4d = this._sheetPrintInterceptorService[
      "interceptor"
    ].fetchThroughInterceptors(
      this._sheetPrintInterceptorService["interceptor"].getInterceptPoints()
        .PRINTING_RANGE,
    )(_0x4ba620, { unitId: _0x16f22a, subUnitId: _0x35f310 });
    return _0x4e3e4d
      ? this._calculateFinalRange(_0x35f310, {
          ..._0x4e3e4d,
          startColumn: Math.max(_0x3f38a7.startColumn - _0x3f38a7.xSplit, 0),
          startRow: Math.max(_0x3f38a7.startRow - _0x3f38a7.ySplit, 0),
        })
      : null;
  }
  _calculateCurrentSelectionRange(_0x7415ce, _0x2002e2) {
    let _0x294d76 =
      this._sheetsSelectionsSrv["getWorkbookSelections"](
        _0x7415ce,
      ).getSelectionsOfWorksheet(_0x2002e2);
    return _0x294d76
      ? _0x294d76.map((_0x469609) =>
          this._calculateFinalRange(_0x2002e2, _0x469609.range),
        )
      : [];
  }
  _calculateFinalRange(_0x2f7a98, _0x4d3a3d) {
    let _0x165b3d = this._univerInstanceService["getCurrentUnitOfType"](
        n.UniverInstanceType["UNIVER_SHEET"],
      ),
      _0x1a0c16 = _0x165b3d.getSheetBySheetId(_0x2f7a98),
      _0x5d45f3 = this._layoutConfig,
      _0x160dce = _0x165b3d.getUnitId(),
      _0x373775 = this.paperSize,
      {
        top: _0x32e816,
        right: _0x29d73c,
        bottom: _0x3d866e,
        left: _0x29ed4b,
      } = this.paperMargin;
    ((_0x373775.h -= _0x32e816 + _0x3d866e),
      (_0x373775.w -= _0x29ed4b + _0x29d73c));
    let _0x4dc766 = this._renderManagerService["getRenderUnitById"](
      _0x160dce,
    ).with(s.SheetSkeletonManagerService);
    if (_0x4d3a3d.startRow > -1 && _0x4d3a3d.startColumn > -1) {
      let _0x308a3c = _0x4dc766.ensureSkeleton(_0x2f7a98);
      if (!_0x1a0c16 || !_0x308a3c) return null;
      let _0x34806c = _0x4d3a3d.startRow,
        _0x495626 = _0x4d3a3d.endRow,
        _0x226757 = _0x4d3a3d.startColumn,
        _0x21e5d6 = _0x4d3a3d.endColumn,
        _0x1fc0d7 = _0x1a0c16.getFreeze(),
        _0x322800 = A(
          this._calculatePrintScale(_0x308a3c, _0x4d3a3d, _0x1fc0d7),
        ),
        _0x3486ed = -1,
        _0x2cce65 = 0,
        _0x48ade1 = -1,
        _0x459ac5 = 0,
        _0x1d24a9 = _0x308a3c.columnWidthAccumulation,
        _0xd8ff0 = _0x308a3c.rowHeightAccumulation;
      if (_0x1fc0d7.xSplit && _0x5d45f3.freeze["includes"]("Column")) {
        if (_0x21e5d6 >= _0x1fc0d7.startColumn) {
          let _0x5cd8e5 =
            _0x322800 *
            (_0x1d24a9[_0x1fc0d7.startColumn - 1] -
              (_0x1d24a9[_0x1fc0d7.startColumn - _0x1fc0d7.xSplit - 1] || 0));
          _0x5cd8e5 < _0x373775.w &&
            ((_0x48ade1 = _0x1fc0d7.startColumn),
            (_0x459ac5 = _0x1fc0d7.xSplit),
            (_0x373775.w -= _0x5cd8e5));
        } else {
          let _0x1bcee1 = _0x21e5d6 + 1,
            _0x5ceee5 =
              _0x21e5d6 + 1 - (_0x1fc0d7.startColumn - _0x1fc0d7.xSplit),
            _0x5f3b9d =
              _0x322800 *
              (_0x1d24a9[_0x48ade1 - 1] -
                (_0x1d24a9[_0x48ade1 - _0x459ac5] - 1 || 0));
          _0x5f3b9d < _0x373775.w &&
            ((_0x48ade1 = _0x1bcee1),
            (_0x459ac5 = _0x5ceee5),
            (_0x373775.w -= _0x5f3b9d));
        }
      }
      if (
        ((_0x226757 = Math.max(_0x48ade1, _0x226757)),
        _0x1fc0d7.ySplit && _0x5d45f3.freeze["includes"]("Row"))
      ) {
        if (_0x495626 >= _0x1fc0d7.startRow) {
          let _0xa2b2ec =
            _0xd8ff0[_0x1fc0d7.startRow] -
            _0xd8ff0[_0x1fc0d7.startRow - _0x1fc0d7.ySplit];
          _0xa2b2ec < _0x373775.h &&
            ((_0x3486ed = _0x1fc0d7.startRow),
            (_0x2cce65 = _0x1fc0d7.ySplit),
            (_0x373775.h -= _0xa2b2ec));
        } else
          ((_0x3486ed = _0x495626 + 1),
            (_0x2cce65 =
              _0x495626 + 1 - (_0x1fc0d7.startRow - _0x1fc0d7.ySplit)),
            (_0x373775.h =
              _0x373775.h -
              _0xd8ff0[_0x3486ed] -
              _0xd8ff0[_0x3486ed - _0x2cce65]));
      }
      return (
        (_0x34806c = Math.max(_0x3486ed, _0x34806c)),
        {
          unitId: _0x160dce,
          subUnitId: _0x2f7a98,
          range: {
            startRow: _0x34806c,
            endRow: _0x495626,
            startColumn: _0x226757,
            endColumn: _0x21e5d6,
          },
          freeze: {
            startRow: _0x3486ed,
            startColumn: _0x48ade1,
            xSplit: _0x459ac5,
            ySplit: _0x2cce65,
          },
          contentSize: _0x373775,
          scale: _0x322800,
        }
      );
    }
    return {
      unitId: _0x160dce,
      subUnitId: _0x2f7a98,
      range: ee,
      freeze: j,
      contentSize: _0x373775,
      scale: 1,
    };
  }
  _calculatePrintScale(_0x183cda, _0x15d211, _0x4b135c) {
    let _0x591a31 = _0x183cda.columnWidthAccumulation,
      _0x23cc39 = _0x183cda.rowHeightAccumulation,
      {
        xSplit: _0x1ceeeb,
        ySplit: _0x12f50b,
        startColumn: _0x3cae25,
        startRow: _0x57400d,
      } = _0x4b135c,
      { startRow: _0x3fa82b, startColumn: _0x3ac31f } = _0x15d211,
      { endColumn: _0xabc1c9, endRow: _0x438ab1 } = _0x15d211;
    ((_0x3fa82b =
      _0x438ab1 < _0x57400d ? _0x3fa82b : Math.max(_0x57400d, _0x3fa82b)),
      (_0x3ac31f =
        _0xabc1c9 < _0x3cae25 ? _0x3ac31f : Math.max(_0x3cae25, _0x3ac31f)));
    let { scale: _0x1ecda8, customScale: _0x866398 } = this._layoutConfig,
      _0x5b7131 = this.paperSize,
      _0x5d22ab = this.paperMargin,
      _0x27a21f =
        _0x1ceeeb > 0
          ? (_0x591a31[_0x3cae25 - 1] || 0) -
            (_0x591a31[_0x3cae25 - _0x1ceeeb - 1] || 0)
          : 0,
      _0x551002 =
        _0x12f50b > 0
          ? (_0x23cc39[_0x57400d - 1] || 0) -
            (_0x23cc39[_0x57400d - _0x12f50b - 1] || 0)
          : 0,
      _0x546667 = _0x23cc39[_0x438ab1] - (_0x23cc39[_0x3fa82b - 1] || 0),
      _0x4e0026 = _0x591a31[_0xabc1c9] - (_0x591a31[_0x3ac31f - 1] || 0),
      _0x2dc99c = _0x546667 + _0x551002,
      _0x5ee27a = _0x4e0026 + _0x27a21f;
    switch (_0x1ecda8) {
      case t.PrintScale["Custom"]:
        return _0x866398;
      case t.PrintScale["FitWidth"]:
        return Math.min(
          1,
          (_0x5b7131.w - _0x5d22ab.left - _0x5d22ab.right) / _0x5ee27a,
        );
      case t.PrintScale["FitHeight"]:
        return Math.min(
          1,
          (_0x5b7131.h - _0x5d22ab.top - _0x5d22ab.bottom) / _0x2dc99c,
        );
      case t.PrintScale["FitPage"]:
        return Math.min(
          1,
          (_0x5b7131.w - _0x5d22ab.left - _0x5d22ab.right) / _0x5ee27a,
          (_0x5b7131.h - _0x5d22ab.top - _0x5d22ab.bottom) / _0x2dc99c,
        );
      default:
        return 1;
    }
  }
  _calculateSubSheetRange() {
    let { area: _0x58fadb, subUnitIds: _0x5711ca } = this._layoutConfig,
      _0x3b06d5 = this._univerInstanceService["getCurrentUnitOfType"](
        n.UniverInstanceType["UNIVER_SHEET"],
      ),
      _0x20ea68 = _0x3b06d5.getUnitId();
    switch (_0x58fadb) {
      case "CurrentSheet": {
        var _0x342140;
        let _0x32d36e =
          (_0x342140 = _0x3b06d5.getActiveSheet()) == null
            ? undefined
            : _0x342140.getSheetId();
        if (_0x32d36e != null) {
          let _0x3d542d = this._calculateSheetRangeById(_0x20ea68, _0x32d36e);
          if (_0x3d542d) return [_0x3d542d];
          let _0x38f233 = this._univerInstanceService["getCurrentUnitOfType"](
              n.UniverInstanceType["UNIVER_SHEET"],
            ),
            _0x106e32 = _0x38f233.getActiveSheet();
          return _0x106e32
            ? this._calculateCurrentSelectionRange(
                _0x38f233.getUnitId(),
                _0x106e32.getSheetId(),
              )
            : (console.warn("No active sheet found"), []);
        }
        return [];
      }
      case "CurrentSelection": {
        let _0xfe4b07 = this._univerInstanceService["getCurrentUnitOfType"](
            n.UniverInstanceType["UNIVER_SHEET"],
          ),
          _0x599f79 = _0xfe4b07.getActiveSheet();
        return _0x599f79
          ? this._calculateCurrentSelectionRange(
              _0xfe4b07.getUnitId(),
              _0x599f79.getSheetId(),
            )
          : (console.warn("No active sheet found"), []);
      }
      case "AllSelection":
        return this._univerInstanceService["getCurrentUnitOfType"](
          n.UniverInstanceType["UNIVER_SHEET"],
        )
          .getSheets()
          .map((_0x1ee63c) =>
            this._calculateCurrentSelectionRange(
              _0x20ea68,
              _0x1ee63c.getSheetId(),
            ),
          )
          .flat();
      default:
        return (
          _0x5711ca.length
            ? _0x5711ca
            : _0x3b06d5
                .getSheets()
                .filter((_0x296da8) => !_0x296da8.isSheetHidden())
                .map((_0x22b1d5) => _0x22b1d5.getSheetId())
        )
          .map((_0x1f6694) =>
            this._calculateSheetRangeById(
              _0x20ea68,
              typeof _0x1f6694 == "string" ? _0x1f6694 : _0x1f6694.id,
              typeof _0x1f6694 == "string" ? undefined : _0x1f6694.range,
            ),
          )
          .filter(Boolean);
    }
  }
  _calculateSheetPages(_0x35981d) {
    let {
        subUnitId: _0x455b87,
        range: _0x7ca1a7,
        freeze: _0xe36278,
        unitId: _0x4b5da2,
        scale: _0x2196c1,
        contentSize: _0x4d6398,
      } = _0x35981d,
      _0x2d8f22 = this._renderManagerService["getRenderUnitById"](_0x4b5da2)
        .with(s.SheetSkeletonManagerService)
        .ensureSkeleton(_0x455b87);
    if (!_0x2d8f22) return;
    let {
        rowHeightAccumulation: _0x533350,
        columnWidthAccumulation: _0x2e7eac,
      } = _0x2d8f22,
      { w: _0x230b6a, h: _0xaf2362 } = _0x4d6398,
      {
        startRow: _0x2b0019,
        startColumn: _0x204655,
        endColumn: _0x375ab8,
        endRow: _0x4f507a,
      } = _0x7ca1a7,
      _0x478f48 = (_0xe24a9f) => {
        let _0x235840 = _0xe24a9f,
          _0x506f09 =
            this._layoutConfig["maxRowsEachPage"] <= _0xe36278.ySplit
              ? 1 / 0
              : this._layoutConfig["maxRowsEachPage"] -
                1 -
                _0xe36278.ySplit +
                _0xe24a9f,
          _0x526867 = _0xe24a9f === 0 ? 0 : _0x533350[_0xe24a9f - 1];
        for (; _0x235840 < _0x4f507a;) {
          let _0x219606 = (_0x533350[_0x235840] - _0x526867) * _0x2196c1,
            _0x12a64d = (_0x533350[_0x235840 + 1] - _0x526867) * _0x2196c1;
          if (
            (_0x235840++,
            _0x219606 >= _0xaf2362 ||
              (_0x219606 < _0xaf2362 && _0x12a64d > _0xaf2362))
          )
            return {
              startRow: _0xe24a9f,
              endRow: Math.min(_0x235840 - 1, _0x506f09),
            };
        }
        return { startRow: _0xe24a9f, endRow: Math.min(_0x235840, _0x506f09) };
      },
      _0x2994f6 = (_0x150508) => {
        let _0x2dddfd = _0x150508,
          _0x523082 = _0x150508 === 0 ? 0 : _0x2e7eac[_0x150508 - 1],
          _0x4fd556 =
            this._layoutConfig["maxColumnsEachPage"] <= _0xe36278.xSplit
              ? 1 / 0
              : this._layoutConfig["maxColumnsEachPage"] -
                1 -
                _0xe36278.xSplit +
                _0x150508;
        for (; _0x2dddfd < _0x375ab8;) {
          let _0x1a6aac = (_0x2e7eac[_0x2dddfd] - _0x523082) * _0x2196c1,
            _0x267991 = (_0x2e7eac[_0x2dddfd + 1] - _0x523082) * _0x2196c1;
          if (
            (_0x2dddfd++,
            (_0x1a6aac < _0x230b6a && _0x267991 > _0x230b6a) ||
              _0x1a6aac >= _0x230b6a)
          )
            return {
              startColumn: _0x150508,
              endColumn: Math.min(_0x2dddfd - 1, _0x4fd556),
            };
        }
        return {
          startColumn: _0x150508,
          endColumn: Math.min(_0x2dddfd, _0x4fd556),
        };
      },
      _0x312c46 = [],
      _0x4e3970 = _0x2b0019;
    for (; _0x4e3970 <= _0x4f507a;) {
      let _0x2b224a = _0x478f48(_0x4e3970);
      (_0x312c46.push(_0x2b224a), (_0x4e3970 = _0x2b224a.endRow + 1));
    }
    let _0x516751 = [],
      _0x4754aa = _0x204655;
    for (; _0x4754aa <= _0x375ab8;) {
      let _0x3c475d = _0x2994f6(_0x4754aa);
      (_0x516751.push(_0x3c475d), (_0x4754aa = _0x3c475d.endColumn + 1));
    }
    let _0x4acda2 = [];
    for (let _0x1fc805 = 0; _0x1fc805 < _0x312c46.length; _0x1fc805++)
      for (let _0x33fc38 = 0; _0x33fc38 < _0x516751.length; _0x33fc38++)
        _0x4acda2.push({ ..._0x312c46[_0x1fc805], ..._0x516751[_0x33fc38] });
    return {
      unitId: _0x4b5da2,
      subUnitId: _0x455b87,
      pages: _0x4acda2,
      freeze: _0xe36278,
      scale: _0x2196c1,
      pageSize: this.paperSize,
      margin: this.paperMargin,
    };
  }
};
M = O(
  [
    D(0, n.IUniverInstanceService),
    D(1, (0, n.Inject)(r.SheetsSelectionsService)),
    D(2, (0, n.Inject)(s.SheetPrintInterceptorService)),
    D(3, o.IRenderManagerService),
  ],
  M,
);
const te = (_0x31cd5a, _0x103e37) => {
    if (!_0x31cd5a || !_0x103e37) return true;
    let _0x4a560e = (0, e.getLicenseInfo)(_0x31cd5a, _0x103e37).message,
      _0x42ea18 = (0, e.isFeatureAuthorizedWithinTime)(_0x4a560e, "sf", m);
    return !(
      (_0x4a560e == null ? undefined : _0x4a560e.rt) ===
        e.ReleaseType["NO_COMMERCIAL"] && !_0x42ea18
    );
  },
  N = (_0x24c32b, _0x507e31, _0x4228a1) => {
    let _0x5dfd0d = { page: _0x24c32b, isPro: false, timeValid: false };
    if (!_0x507e31 || !_0x4228a1) return _0x5dfd0d;
    let _0x10575e = (0, e.getLicenseInfo)(_0x507e31, _0x4228a1);
    if (_0x10575e.valid) {
      let _0x1cd221 = _0x10575e.message,
        _0x563237 = (0, e.isFeatureAuthorizedWithinTime)(_0x1cd221, "sf", m);
      ((_0x5dfd0d.isPro = _0x563237),
        (_0x5dfd0d.timeValid = _0x563237),
        (_0x5dfd0d.page = (0, e.getSheetFeatureLimit)(
          _0x1cd221,
          _0x563237,
          "mpn",
          _0x24c32b,
          _0x24c32b,
          0,
        )));
    }
    return _0x5dfd0d;
  };
function P(_0x14436a) {
  let { ls: _0x34fc85, pbk: _0x3c5245 } =
    _0x14436a.get(n.IConfigService).getConfig(e.LS_CONFIG_KEY) ?? {};
  return N(3, _0x34fc85, _0x3c5245).isPro;
}
const F = {
    id: "sheet.operation.print-open",
    type: n.CommandType["OPERATION"],
    handler: async (_0x1e04ec) => {
      let _0x75482e = _0x1e04ec.get(b),
        _0x4a2064 = _0x1e04ec.get(n.IPermissionService),
        _0x25cc65 = _0x1e04ec.get(n.LocaleService),
        _0x4ca977 = _0x1e04ec.get(n.IUniverInstanceService),
        _0x49c13a = _0x1e04ec.get(i.IDialogService),
        { ls: _0xee95a4, pbk: _0x50a0d0 } =
          _0x1e04ec.get(n.IConfigService).getConfig(e.LS_CONFIG_KEY) ?? {};
      if (!te(_0xee95a4, _0x50a0d0)) return false;
      let _0x463af9 = _0x4ca977
        .getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"])
        .getUnitId();
      if (!(
        _0x4a2064.getPermissionPoint(
          new r.WorkbookPrintPermission(_0x463af9).id,
        ) ?? false
      )) {
        let _0x40286c = {
          id: h,
          title: { title: "" },
          children: {
            label: "UNIVER_SHEET_PERMISSION_ALERT_DIALOG",
            errorMsg: _0x25cc65.t("sheets-print.permission.printErr"),
          },
          width: 320,
          onClose: () => _0x49c13a.close(h),
          className: "sheet-permission-user-dialog",
        };
        throw (_0x49c13a.open(_0x40286c), Error("have not permission"));
      }
      (_0x75482e.setPreparing(true), _0x75482e.open());
      try {
        return (
          await _0x1e04ec
            .get(t.IPrintPreparationService)
            .prepare({
              unitId: _0x463af9,
              unitType: n.UniverInstanceType["UNIVER_SHEET"],
              dpr: 1,
            }),
          true
        );
      } catch (_0x450976) {
        throw (_0x75482e.close(), _0x450976);
      } finally {
        _0x75482e.setPreparing(false);
      }
    },
  },
  I = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.cancel-print",
    handler(_0x1a23e3) {
      let _0x5dc6e7 = _0x1a23e3.get(b),
        _0x206f42 = _0x1a23e3.get(k);
      return (_0x5dc6e7.close(), _0x206f42.reset(), true);
    },
  },
  L = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.confirm-print",
    handler() {
      return true;
    },
  },
  R = {
    id: "sheet.operation.print",
    type: n.CommandType["COMMAND"],
    handler(_0x4bd948, _0x20a949) {
      if (!_0x20a949) return false;
      let _0x3dc5ae = _0x4bd948.get(n.ICommandService),
        _0x20a83d = _0x4bd948.get(k);
      return (
        _0x20a83d.replaceLayoutConfig(_0x20a949.layoutConfig),
        _0x20a83d.replaceRenderConfig(_0x20a949.renderConfig),
        _0x3dc5ae.syncExecuteCommand(L.id)
      );
    },
  };
function z(_0x55749d, _0x2a27e5) {
  switch (_0x55749d) {
    case "@WorkbookTitle":
      return _0x2a27e5.workbook["name"];
    case "@WorksheetTitle":
      return _0x2a27e5.worksheet["getName"]();
    case "@Page":
      return "" + _0x2a27e5.page;
    case "@TotalPage":
      return "" + _0x2a27e5.pageTotal;
    case "@TotalSheetPage":
      return "" + _0x2a27e5.sheetPageTotal;
    case "@SheetPage":
      return "" + _0x2a27e5.sheetPage;
    case "@DateA":
      return _0x2a27e5.now["format"](
        _0x2a27e5.localeService["t"]("sheets-print.headerFooter.dateA"),
      );
    case "@DateB":
      return _0x2a27e5.now["format"](
        _0x2a27e5.localeService["t"]("sheets-print.headerFooter.dateB"),
      );
    case "@DateC":
      return _0x2a27e5.now["format"](
        _0x2a27e5.localeService["t"]("sheets-print.headerFooter.dateC"),
      );
    case "@DateD":
      return _0x2a27e5.now["format"](
        _0x2a27e5.localeService["t"]("sheets-print.headerFooter.dateD"),
      );
    case "@DateE":
      return _0x2a27e5.now["format"](
        _0x2a27e5.localeService["t"]("sheets-print.headerFooter.dateE"),
      );
    case "@TimeA":
      return _0x2a27e5.now["format"](
        _0x2a27e5.localeService["t"]("sheets-print.headerFooter.timeA"),
      );
    case "@TimeB":
      return _0x2a27e5.now["format"](
        _0x2a27e5.localeService["t"]("sheets-print.headerFooter.timeB"),
      );
    case "@TimeC":
      return _0x2a27e5.now["format"](
        _0x2a27e5.localeService["t"]("sheets-print.headerFooter.timeC"),
      );
    case "@TimeD":
      return _0x2a27e5.now["format"](
        _0x2a27e5.localeService["t"]("sheets-print.headerFooter.timeD"),
      );
  }
}
const ne = Object.values(T);
function B(_0x5a0770, _0x1b47b8) {
  let _0x5da51d = _0x5a0770;
  return (
    ne.forEach((_0x49096b) => {
      _0x5da51d = _0x5da51d.replaceAll(_0x49096b, z(_0x49096b, _0x1b47b8));
    }),
    _0x5da51d
  );
}
const V = "@[]@";
function re(_0x20b1ce, _0x325a12) {
  let _0x2d690f = _0x20b1ce;
  _0x325a12.forEach((_0x5de2b1) => {
    _0x2d690f = _0x2d690f.replaceAll(
      _0x5de2b1.value,
      "" + V + _0x5de2b1.label + V,
    );
  });
  let _0x15c9ef = _0x2d690f.split(V),
    _0x5336fc = n.RichTextBuilder["create"]();
  return (
    _0x15c9ef.forEach((_0x23c3aa, _0x322b07) => {
      if (_0x23c3aa) {
        if (_0x322b07 % 2 == 1) {
          let _0xbd5a13 = _0x23c3aa,
            _0x40361d = {
              id: "d",
              documentStyle: {},
              drawings: {},
              drawingsOrder: [],
              body: {
                dataStream: _0x23c3aa,
                customBlocks: [],
                customRanges: [
                  {
                    startIndex: 0,
                    endIndex: _0x23c3aa.length - 1,
                    rangeId: (0, n.generateRandomId)(),
                    rangeType: n.CustomRangeType["MENTION"],
                    properties: {
                      value: _0x325a12.find(
                        (_0x5f4277) => _0x5f4277.label === _0xbd5a13,
                      ).value,
                    },
                  },
                ],
              },
            };
          _0x5336fc.insertRichText(_0x40361d);
        } else _0x5336fc.insertText(_0x23c3aa);
      }
    }),
    _0x5336fc.getData()
  );
}
function ie(_0x87a460) {
  var _0x44981d;
  if (!(_0x87a460 != null && _0x87a460.body)) return "";
  let _0x4a51fa = n.RichTextBuilder["create"](n.Tools["deepClone"](_0x87a460));
  for (
    ;
    (_0x44981d = _0x4a51fa.getData().body["customRanges"]) != null &&
    _0x44981d.length;
  ) {
    let _0x479338 = _0x4a51fa.getData().body["customRanges"][0];
    if (!_0x479338) break;
    (_0x4a51fa.delete(
      _0x479338.startIndex,
      _0x479338.endIndex + 1 - _0x479338.startIndex,
    ),
      _0x4a51fa.insertText(
        _0x479338.startIndex,
        _0x479338.properties["value"],
      ));
  }
  return _0x4a51fa.getData().body["dataStream"];
}
function ae(_0x4e0e13, _0x3196d3) {
  _0x4e0e13.getExtensionsByOrder().forEach((_0x22d400) => {
    var _0x43a7cf;
    let _0x385f2b =
      (_0x43a7cf = _0x22d400.copyForPrinting) == null
        ? undefined
        : _0x43a7cf.call(_0x22d400);
    _0x385f2b && _0x3196d3.register(_0x385f2b);
  });
}
var H = class extends n.Disposable {
  get _watermarkConfig() {
    return this._renderConfig["watermark"];
  }
  get key() {
    return this._key;
  }
  get engine() {
    return this._engine;
  }
  get container() {
    return this._container;
  }
  get root() {
    return this._root;
  }
  get renderConfig() {
    return this._renderConfig;
  }
  set renderConfig(_0x4a2be7) {
    this._renderConfig = _0x4a2be7;
  }
  constructor(
    _0x43f185,
    _0x4d7c6a,
    _0x59b195,
    _0x428271 = true,
    _0x203e6c = 1,
  ) {
    (super(),
      (this._accessor = _0x43f185),
      (this._config = _0x4d7c6a),
      (this._renderConfig = _0x59b195),
      (this._isPreview = _0x428271),
      (this._previewScale = _0x203e6c),
      y(this, "_engine", undefined),
      y(this, "_scene", undefined),
      y(this, "_key", undefined),
      y(this, "_unitId", undefined),
      y(this, "_subUnitId", undefined),
      y(this, "_viewMain", undefined),
      y(this, "_viewLeft", undefined),
      y(this, "_viewTop", undefined),
      y(this, "_viewLeftTop", undefined),
      y(this, "_viewRowBottom", null),
      y(this, "_viewColumnRight", null),
      y(this, "_container", document.createElement("div")),
      y(this, "_root", document.createElement("div")),
      y(this, "_skeleton", undefined),
      y(this, "_univerInstanceService", undefined),
      y(this, "_dirty", true),
      y(this, "_targetRender", undefined),
      y(this, "_effects", new n["DisposableCollection"]()),
      y(this, "_resourceCollector", new s["SheetPrintingResourceCollector"]()),
      y(this, "_spreadsheetObject", undefined),
      y(this, "_totalWidth", 0),
      y(this, "_totalHeight", 0));
    let { unitId: _0x36c44f, subUnitId: _0x415db5 } = this._config;
    ((this._unitId = _0x36c44f),
      (this._subUnitId = _0x415db5),
      (this._key = _0x36c44f + "_" + _0x415db5),
      (this._univerInstanceService = this._accessor["get"](
        n.IUniverInstanceService,
      )));
    let _0x4591d0 = this._accessor["get"](o.IRenderManagerService);
    this._targetRender = _0x4591d0.getRenderUnitById(_0x36c44f);
    let _0x2c7bb7 = this._targetRender["with"](
      s.SheetSkeletonManagerService,
    ).ensureSkeleton(_0x415db5);
    ((this._skeleton = _0x2c7bb7),
      (this._root["className"] = "__root"),
      this._initRenderer());
  }
  dispose() {
    var _0x279ffe;
    (super.dispose(),
      this._effects["dispose"](),
      (_0x279ffe = this._container["parentElement"]) == null ||
        _0x279ffe.removeChild(this._container));
  }
  get paperSize() {
    let { w: _0x1d728c, h: _0x2a9f2f } = this._config["pageSize"];
    return {
      w: _0x1d728c * this._previewScale,
      h: _0x2a9f2f * this._previewScale,
    };
  }
  get margin() {
    let _0x318647 = this._config["margin"];
    return {
      top: _0x318647.top * this._previewScale,
      bottom: _0x318647.bottom * this._previewScale,
      left: _0x318647.left * this._previewScale,
      right: _0x318647.right * this._previewScale,
    };
  }
  _initRenderer() {
    let _0x3d357a = this.paperSize,
      _0x38f3df = this._config["scale"] * this._previewScale,
      _0x3ecdb2 = this._isPreview ? Math.max(1, window.devicePixelRatio) : 1;
    ((this._engine = new o.Engine("", {
      elementWidth: _0x3d357a.w,
      elementHeight: _0x3d357a.h,
      dpr: _0x3ecdb2,
      renderMode: o.CanvasRenderMode["Printing"],
    })),
      (this._scene = new o.Scene(this._key, this._engine)),
      this._scene["scale"](_0x38f3df, _0x38f3df),
      this._engine["mount"](this._container, this._isPreview),
      this._engine["getCanvas"]()
        .getContext()
        .setId(this._key + "_" + (0, n.generateRandomId)(4)),
      this._addComponent(),
      this._addViewport(),
      this.disposeWithMe({
        dispose: () => {
          (this._engine["dispose"](),
            this._scene["dispose"](),
            this.clearMemory());
        },
      }));
  }
  clearMemory() {
    this._skeleton["resetCache"]();
  }
  setPreviewScale(_0x323a57) {
    (this._scene["scale"](
      this._config["scale"] * _0x323a57,
      this._config["scale"] * _0x323a57,
    ),
      (this._previewScale = _0x323a57),
      this.markDirty(true));
  }
  updateConfig(_0x4a2872) {
    ((this._config = _0x4a2872), this.markDirty(true));
  }
  markDirty(_0x2faa02) {
    this._dirty = _0x2faa02;
  }
  _addComponent() {
    var _0x3c8321;
    let _0x559ecc = new o["Spreadsheet"](
      "__SpreadsheetPrintRender__",
      this._skeleton,
      false,
    );
    _0x559ecc.isPrinting = true;
    let _0x10a56c =
      (_0x3c8321 = this._targetRender) == null
        ? undefined
        : _0x3c8321.mainComponent;
    if (
      (_0x10a56c && ae(_0x10a56c, _0x559ecc),
      this._scene["addObject"](_0x559ecc),
      (this._spreadsheetObject = _0x559ecc),
      this._config["includeHeaderDimensions"])
    ) {
      let _0x42b98b = new o.SpreadsheetRowHeader(
          "__RowHeaderPrint__",
          this._skeleton,
        ),
        _0x1d05d4 = new o["SpreadsheetColumnHeader"](
          "__ColumnHeaderPrint__",
          this._skeleton,
        );
      this._scene["addObjects"]([_0x42b98b, _0x1d05d4], 1);
    }
    let _0x57bfac = this._accessor["get"](s.SheetPrintInterceptorService);
    _0x57bfac.interceptor["fetchThroughInterceptors"](
      _0x57bfac.interceptor["getInterceptPoints"]().PRINTING_COMPONENT_COLLECT,
    )(undefined, {
      unitId: this._unitId,
      subUnitId: this._subUnitId,
      scene: this._scene,
      engine: this._engine,
      root: this._root,
      worksheet: this._skeleton["worksheet"],
      skeleton: this._skeleton,
      range: this._config["range"],
      offset: this._getTranslateOffset(),
      spreadsheet: this._spreadsheetObject,
      resourceCollector: this._resourceCollector,
    });
  }
  _addViewport() {
    ((this._viewMain = new o.Viewport(
      o.SHEET_VIEWPORT_KEY["VIEW_MAIN"],
      this._scene,
      { explicitViewportWidthSet: true, explicitViewportHeightSet: true },
    )),
      (this._viewLeft = new o["Viewport"](
        o.SHEET_VIEWPORT_KEY["VIEW_MAIN_LEFT"],
        this._scene,
        { explicitViewportWidthSet: true, explicitViewportHeightSet: true },
      )),
      (this._viewTop = new o["Viewport"](
        o.SHEET_VIEWPORT_KEY["VIEW_MAIN_TOP"],
        this._scene,
        { explicitViewportWidthSet: true, explicitViewportHeightSet: true },
      )),
      (this._viewLeftTop = new o["Viewport"](
        o.SHEET_VIEWPORT_KEY["VIEW_MAIN_LEFT_TOP"],
        this._scene,
        { explicitViewportWidthSet: true, explicitViewportHeightSet: true },
      )),
      this._config["includeHeaderDimensions"] &&
        ((this._viewRowBottom = new o["Viewport"](
          o.SHEET_VIEWPORT_KEY["VIEW_ROW_BOTTOM"],
          this._scene,
          { explicitViewportWidthSet: true, explicitViewportHeightSet: true },
        )),
        (this._viewColumnRight = new o["Viewport"](
          o.SHEET_VIEWPORT_KEY["VIEW_COLUMN_RIGHT"],
          this._scene,
          { explicitViewportWidthSet: true, explicitViewportHeightSet: true },
        ))));
  }
  _resizeViewport() {
    let { freeze: _0x5a79d0, range: _0x536b0e } = this._config,
      {
        xSplit: _0x50f921,
        ySplit: _0x36e6a8,
        startColumn: _0x17444f,
        startRow: _0x226ecb,
      } = _0x5a79d0,
      { rowHeaderWidth: _0x3b0669, columnHeaderHeight: _0x720114 } =
        this._skeleton;
    this._scene["scale"](
      this._config["scale"] * this._previewScale,
      this._config["scale"] * this._previewScale,
    );
    let _0x2fe09b = this._skeleton["getNoMergeCellWithCoordByIndex"](
        _0x226ecb - _0x36e6a8,
        _0x17444f - _0x50f921,
        false,
      ),
      _0x348b97 = this._skeleton["getNoMergeCellWithCoordByIndex"](
        _0x226ecb,
        _0x17444f,
        false,
      ),
      _0x178a24 = _0x50f921 > 0 ? _0x348b97.startX - _0x2fe09b.startX : 0,
      _0x12dcb0 = _0x36e6a8 > 0 ? _0x348b97.startY - _0x2fe09b.startY : 0,
      _0x5e1a8e = {
        startX: _0x50f921 > 0 ? _0x2fe09b.startX : 0,
        endX: _0x50f921 > 0 ? _0x348b97.startX : 0,
        startY: _0x36e6a8 > 0 ? _0x2fe09b.startY : 0,
        endY: _0x36e6a8 > 0 ? _0x348b97.startY : 0,
      },
      _0x14090c = this._skeleton["getNoMergeCellWithCoordByIndex"](
        _0x536b0e.startRow,
        _0x536b0e.startColumn,
        false,
      ),
      _0x241e3f = this._scene["getPrecisionScale"](),
      _0x479742 = (_0x55e877) =>
        (0, o.fixLineWidthByScale)(_0x55e877, _0x241e3f.scaleX),
      _0x5c58d2 = (_0x59cbec) =>
        (0, o.fixLineWidthByScale)(_0x59cbec, _0x241e3f.scaleY),
      _0x458831 = this._skeleton["getNoMergeCellWithCoordByIndex"](
        _0x536b0e.endRow,
        _0x536b0e.endColumn,
        false,
      ),
      _0x265748 = Math.max(
        0,
        _0x479742(_0x458831.endX) - Math.max(_0x14090c.startX, _0x5e1a8e.endX),
      ),
      _0x3d6113 = Math.max(
        0,
        _0x5c58d2(_0x458831.endY) -
          _0x5c58d2(Math.max(_0x14090c.startY, _0x5e1a8e.endY)),
      ),
      _0x31f2b3 = 1 / Math.max(_0x241e3f.scaleX, _0x241e3f.scaleY),
      _0x16e1df = this._config["includeHeaderDimensions"] ? _0x3b0669 : 0,
      _0x2fb788 = this._config["includeHeaderDimensions"] ? _0x720114 : 0,
      _0x40d822 = _0x16e1df + _0x178a24 + _0x265748 + _0x31f2b3,
      _0x2ff3fb = _0x2fb788 + _0x12dcb0 + _0x3d6113 + _0x31f2b3;
    ((this._totalWidth = _0x40d822), (this._totalHeight = _0x2ff3fb));
    let _0x3050a7 = { x: _0x178a24, y: _0x12dcb0 },
      _0x10730f = _0x31f2b3,
      _0x51c6ef = _0x31f2b3,
      _0x5ce22c = {
        x:
          _0x479742(_0x458831.endX) -
          _0x479742(_0x265748) -
          _0x479742(Math.max(_0x14090c.startX, _0x5e1a8e.endX)),
        y:
          _0x5c58d2(_0x458831.endY) -
          _0x5c58d2(_0x3d6113) -
          _0x5c58d2(Math.max(_0x14090c.startY, _0x5e1a8e.endY)),
      };
    if (
      (_0x50f921 > 0 && _0x36e6a8 > 0
        ? (this._viewLeftTop["enable"](),
          this._viewLeftTop["resizeWhenFreezeChange"]({
            top: 0,
            left: 0,
            height: _0x5c58d2(_0x3050a7.y),
            width: _0x479742(_0x3050a7.x),
          }),
          this._viewLeftTop["updateScrollVal"]({
            viewportScrollX: _0x479742(_0x5e1a8e.startX) + _0x479742(_0x3b0669),
            viewportScrollY: _0x5c58d2(_0x5e1a8e.startY) + _0x5c58d2(_0x720114),
          }))
        : this._viewLeftTop["disable"](),
      _0x50f921 > 0
        ? (this._viewLeft["enable"](),
          this._viewLeft["resizeWhenFreezeChange"]({
            top: _0x479742(_0x3050a7.y),
            left: 0,
            height: _0x5c58d2(_0x3d6113) + _0x10730f + _0x5ce22c.y,
            width: _0x479742(_0x3050a7.x),
          }),
          this._viewLeft["updateScrollVal"]({
            viewportScrollX: _0x479742(_0x5e1a8e.startX) + _0x479742(_0x3b0669),
            viewportScrollY:
              _0x5c58d2(_0x14090c.startY) +
              _0x5c58d2(_0x720114) -
              _0x5c58d2(_0x3050a7.y),
          }))
        : this._viewLeft["disable"](),
      _0x36e6a8 > 0
        ? (this._viewTop["enable"](),
          this._viewTop["resizeWhenFreezeChange"]({
            top: 0,
            left: _0x479742(_0x3050a7.x),
            height: _0x5c58d2(_0x3050a7.y),
            width: _0x479742(_0x265748) + _0x51c6ef + _0x5ce22c.x,
          }),
          this._viewTop["updateScrollVal"]({
            viewportScrollX:
              _0x479742(_0x14090c.startX) +
              _0x479742(_0x3b0669) -
              _0x479742(_0x3050a7.x),
            viewportScrollY: _0x5c58d2(_0x5e1a8e.startY) + _0x5c58d2(_0x720114),
          }))
        : this._viewTop["disable"](),
      this._config["includeHeaderDimensions"])
    ) {
      let _0x3d71b7 = _0x479742(_0x3b0669),
        _0x4d3e18 = _0x5c58d2(_0x720114),
        _0x4ff1c4 = _0x479742(_0x265748) + _0x51c6ef + _0x5ce22c.x,
        _0x2bc521 = _0x5c58d2(_0x3d6113) + _0x10730f + _0x5ce22c.y;
      (this._viewMain["resizeWhenFreezeChange"]({
        top: _0x4d3e18,
        left: _0x3d71b7,
        height: _0x2bc521,
        width: _0x4ff1c4,
      }),
        this._viewMain["updateScrollVal"]({
          viewportScrollX: _0x479742(_0x14090c.startX),
          viewportScrollY: _0x5c58d2(_0x14090c.startY),
        }),
        this._viewRowBottom &&
          this._viewColumnRight &&
          (this._viewColumnRight["enable"](),
          this._viewColumnRight["resizeWhenFreezeChange"]({
            top: 0,
            left: _0x3d71b7,
            height: _0x4d3e18,
            width: _0x4ff1c4,
          }),
          this._viewColumnRight["updateScrollVal"]({
            viewportScrollX: _0x479742(_0x14090c.startX),
            viewportScrollY: 0,
          }),
          this._viewRowBottom["enable"](),
          this._viewRowBottom["resizeWhenFreezeChange"]({
            top: _0x4d3e18,
            left: 0,
            height: _0x2bc521,
            width: _0x3d71b7,
          }),
          this._viewRowBottom["updateScrollVal"]({
            viewportScrollX: 0,
            viewportScrollY: _0x5c58d2(_0x14090c.startY),
          })));
    } else
      (this._viewMain["resizeWhenFreezeChange"]({
        top: _0x5c58d2(_0x3050a7.y),
        left: _0x479742(_0x3050a7.x),
        height: _0x5c58d2(_0x3d6113) + _0x10730f + _0x5ce22c.y,
        width: _0x479742(_0x265748) + _0x51c6ef + _0x5ce22c.x,
      }),
        this._viewMain["updateScrollVal"]({
          viewportScrollX:
            _0x479742(_0x14090c.startX) +
            _0x479742(_0x3b0669) -
            _0x479742(_0x3050a7.x),
          viewportScrollY:
            _0x5c58d2(_0x14090c.startY) +
            _0x5c58d2(_0x720114) -
            _0x5c58d2(_0x3050a7.y),
        }));
  }
  _getTranslateOffset() {
    let _0x161775 = this.margin,
      { vAlign: _0x48a749, hAlign: _0x5440e3 } = this._renderConfig,
      _0x491e02 = Math.max(this._scene["scaleX"], this._scene["scaleY"]),
      _0x5c586e;
    switch (_0x5440e3) {
      case t.PrintAlign["Start"]:
        _0x5c586e = _0x161775.left;
        break;
      case t.PrintAlign["End"]:
        _0x5c586e =
          this.paperSize["w"] - this._totalWidth * _0x491e02 - _0x161775.right;
        break;
      default:
        _0x5c586e =
          _0x161775.left +
          (this.paperSize["w"] -
            this._totalWidth * _0x491e02 -
            _0x161775.left -
            _0x161775.right) /
            2;
        break;
    }
    let _0x2753d3;
    switch (_0x48a749) {
      case t.PrintAlign["Start"]:
        _0x2753d3 = _0x161775.top;
        break;
      case t.PrintAlign["End"]:
        _0x2753d3 =
          this.paperSize["h"] -
          this._totalHeight * _0x491e02 -
          _0x161775.bottom;
        break;
      default:
        _0x2753d3 =
          (this.paperSize["h"] -
            this._totalHeight * _0x491e02 -
            _0x161775.top -
            _0x161775.bottom) /
            2 +
          _0x161775.top;
        break;
    }
    return {
      offsetX: Math.round(_0x5c586e),
      offsetY: Math.round(_0x2753d3),
      scale: _0x491e02,
    };
  }
  prepare() {
    (this._resizeViewport(),
      this._effects["dispose"](),
      (this._effects = new n["DisposableCollection"]()));
    let _0x522bca = this._accessor["get"](s.SheetPrintInterceptorService),
      {
        offsetX: _0x509c16,
        offsetY: _0xd549cc,
        scale: _0x2e3625,
      } = this._getTranslateOffset(),
      _0x142a1d = _0x509c16,
      _0x63de2 = _0xd549cc;
    ((this._root["style"].left = _0x142a1d + "px"),
      (this._root["style"].top = _0x63de2 + "px"));
    let _0x26723a = this._totalWidth * _0x2e3625,
      _0x36384d = this._totalHeight * _0x2e3625;
    ((this._root["style"].width = _0x26723a + "px"),
      (this._root["style"].height = _0x36384d + "px"),
      (this._root["style"].position = "absolute"),
      (this._root["style"].overflow = "hidden"),
      _0x522bca.interceptor["fetchThroughInterceptors"](
        _0x522bca.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT,
      )(this._effects, {
        unitId: this._unitId,
        subUnitId: this._subUnitId,
        scene: this._scene,
        engine: this._engine,
        root: this._root,
        worksheet: this._skeleton["worksheet"],
        skeleton: this._skeleton,
        range: this._config["range"],
        offset: this._getTranslateOffset(),
        resourceCollector: this._resourceCollector,
      }));
  }
  _renderMainScene() {
    this._dirty && this.prepare();
    let _0x1d0ed8 = this._engine["getCanvas"]().getContext(),
      { gridlines: _0x3c3aca } = this._renderConfig,
      { offsetX: _0x8b138a, offsetY: _0x2cfd12 } = this._getTranslateOffset();
    (this._spreadsheetObject["setForceDisableGridlines"](!_0x3c3aca),
      this._spreadsheetObject["makeForceDirty"](),
      this._scene["makeDirty"](),
      _0x1d0ed8.save(),
      _0x1d0ed8.translateWithPrecision(_0x8b138a, _0x2cfd12),
      this._scene["render"](),
      _0x1d0ed8.restore());
  }
  _renderHeaderFooterByCustom(_0x2f8a8c, _0x474ddf, _0xe3c68c) {
    let { w: _0x2a7aeb, h: _0x41bae8 } = this.paperSize,
      _0x5d767b = this._engine["getCanvas"]().getContext();
    (_0x5d767b.save(), (_0x5d767b.font = "13px " + o.DEFAULT_FONTFACE_PLANE));
    let _0x3221b0 = 19 * this._previewScale,
      _0x3d0522 = 20 * this._previewScale,
      _0x246c1c = {
        workbook: _0x474ddf,
        worksheet: _0xe3c68c,
        now: (0, n.dateKit)(),
        localeService: this._accessor["get"](n.LocaleService),
        page: this._config["page"],
        pageTotal: this._config["pageTotal"],
        sheetPageTotal: this._config["sheetPageTotal"],
        sheetPage: this._config["sheetPage"],
      };
    if (_0x2f8a8c.topLeft) {
      let _0x558973 = B(_0x2f8a8c.topLeft, _0x246c1c);
      _0x5d767b.fillText(_0x558973, _0x3221b0, _0x3d0522);
    }
    if (_0x2f8a8c.topCenter) {
      let _0x1cb942 = B(_0x2f8a8c.topCenter, _0x246c1c),
        _0x3df0dd = _0x5d767b.measureText(_0x1cb942);
      _0x5d767b.fillText(
        _0x1cb942,
        (_0x2a7aeb - _0x3df0dd.width) / 2,
        _0x3d0522,
      );
    }
    if (_0x2f8a8c.topRight) {
      let _0x5357b8 = B(_0x2f8a8c.topRight, _0x246c1c),
        _0x15646a = _0x5d767b.measureText(_0x5357b8);
      _0x5d767b.fillText(
        _0x5357b8,
        _0x2a7aeb - _0x15646a.width - _0x3221b0,
        _0x3d0522,
      );
    }
    if (_0x2f8a8c.bottomLeft) {
      let _0x31e488 = B(_0x2f8a8c.bottomLeft, _0x246c1c);
      _0x5d767b.fillText(_0x31e488, _0x3221b0, _0x41bae8 - _0x3d0522);
    }
    if (_0x2f8a8c.bottomCenter) {
      let _0x26f5f0 = B(_0x2f8a8c.bottomCenter, _0x246c1c),
        _0x4bd387 = _0x5d767b.measureText(_0x26f5f0);
      _0x5d767b.fillText(
        _0x26f5f0,
        (_0x2a7aeb - _0x4bd387.width) / 2,
        _0x41bae8 - _0x3d0522,
      );
    }
    if (_0x2f8a8c.bottomRight) {
      let _0x52426d = B(_0x2f8a8c.bottomRight, _0x246c1c),
        _0x382c84 = _0x5d767b.measureText(_0x52426d);
      _0x5d767b.fillText(
        _0x52426d,
        _0x2a7aeb - _0x382c84.width - _0x3221b0,
        _0x41bae8 - _0x3d0522,
      );
    }
    _0x5d767b.restore();
  }
  _renderHeaderFooter() {
    let _0x4b947f = this._univerInstanceService["getUnit"](
        this._config["unitId"],
        n.UniverInstanceType["UNIVER_SHEET"],
      ),
      _0x1b27b7 =
        _0x4b947f == null
          ? undefined
          : _0x4b947f.getSheetBySheetId(this._config["subUnitId"]),
      {
        headerFooter: _0x3ff0c2,
        isCustomHeaderFooter: _0x3b3bab,
        headerFooterSetting: _0x366b90,
      } = this._renderConfig,
      { w: _0x50ae64, h: _0x45bc0b } = this.paperSize,
      _0x413206 = this._engine["getCanvas"]().getContext();
    if (!_0x4b947f || !_0x1b27b7) return;
    if (_0x3b3bab && _0x366b90) {
      this._renderHeaderFooterByCustom(_0x366b90, _0x4b947f, _0x1b27b7);
      return;
    }
    (_0x413206.save(),
      (_0x413206.font = "13px\x20" + o.DEFAULT_FONTFACE_PLANE));
    let _0x572584 = 19 * this._previewScale,
      _0x4e5818 = 20 * this._previewScale;
    if (_0x3ff0c2.includes("Date") || _0x3ff0c2.includes("Time")) {
      let _0x3f8c4c = new Date().toLocaleString();
      (_0x3ff0c2.includes("Date")
        ? _0x3ff0c2.includes("Time") ||
          (_0x3f8c4c = new Date().toLocaleDateString())
        : (_0x3f8c4c = new Date().toLocaleTimeString()),
        _0x413206.fillText(_0x3f8c4c, _0x572584, _0x45bc0b - _0x4e5818));
    }
    (_0x3ff0c2.forEach((_0x534452) => {
      switch (_0x534452) {
        case "WorkbookTitle": {
          let _0x4875ee = _0x4b947f.name,
            _0x5dc617 = _0x413206.measureText(_0x4875ee),
            _0x8cf65 =
              _0x5dc617.fontBoundingBoxAscent +
              _0x5dc617.fontBoundingBoxDescent;
          _0x413206.fillText(_0x4875ee, _0x572584, _0x4e5818 + _0x8cf65);
          break;
        }
        case "WorksheetTitle": {
          let _0x3ec878 = _0x1b27b7.getName(),
            _0x21a866 = _0x413206.measureText(_0x3ec878),
            _0x2ef663 =
              _0x21a866.fontBoundingBoxAscent +
              _0x21a866.fontBoundingBoxDescent;
          _0x413206.fillText(
            _0x3ec878,
            _0x50ae64 - (_0x21a866.width + _0x572584),
            _0x4e5818 + _0x2ef663,
          );
          break;
        }
        case "PageSize": {
          let _0x42ff38 = "" + this._config["page"],
            _0x5205c4 = _0x413206.measureText(_0x42ff38);
          _0x413206.fillText(
            _0x42ff38,
            _0x50ae64 - (_0x5205c4.width + _0x572584),
            _0x45bc0b - _0x4e5818,
          );
          break;
        }
        default:
          break;
      }
    }),
      _0x413206.restore());
  }
  _renderLimitWaterMark() {
    let _0x18bfbd = this._accessor["get"](n.LocaleService),
      _0x104e85 = this._engine["getCanvas"]().getContext();
    _0x104e85.save();
    let _0x21a8aa = 20 * this._previewScale;
    ((_0x104e85.fillStyle = "rgba(0,0,0,0.3)"),
      (_0x104e85.font = "12px " + o.DEFAULT_FONTFACE_PLANE));
    let _0x5eafa3 = _0x104e85.measureText(
        _0x18bfbd.t("sheets-print.limit.waterMark"),
      ),
      _0xed8ae5 = (this.paperSize["w"] - _0x5eafa3.width) / 2,
      _0xc19cca =
        _0x5eafa3.fontBoundingBoxAscent + _0x5eafa3.fontBoundingBoxDescent;
    (_0x104e85.fillText(
      _0x18bfbd.t("sheets-print.limit.waterMark"),
      _0xed8ae5,
      _0x21a8aa + _0xc19cca,
    ),
      _0x104e85.fillText(
        _0x18bfbd.t("sheets-print.limit.waterMark"),
        _0xed8ae5,
        this.paperSize["h"] - _0x21a8aa,
      ),
      _0x104e85.restore());
  }
  render() {
    (this._engine["clearCanvas"](),
      this._renderMainScene(),
      this._renderHeaderFooter(),
      this._watermarkConfig &&
        (0, o.renderWatermark)(
          this._engine["getCanvas"]().getContext(),
          this._watermarkConfig,
          this._watermarkConfig["image"],
          this._accessor["get"](n.UserManagerService).getCurrentUser(),
        ));
  }
  renderOnReady() {
    let _0x327868 = this.engine["onTransformChange$"].subscribeEvent(() => {
      this.render();
    });
    (this.disposeWithMe(_0x327868),
      this.waitForReady().then(() => this.render()));
  }
  waitForReady(_0x2a9356) {
    return this._resourceCollector["wait"](_0x2a9356);
  }
  getImage() {
    return this._engine["getCanvas"]().toDataURL("image/png", 1);
  }
};
function oe(_0x572fe2) {
  let _0x4d5124 = _0x572fe2.reduce(
      (_0x3d7ee5, _0x3ede2e) => _0x3d7ee5 + _0x3ede2e.pages["length"],
      0,
    ),
    _0x30f0be = new Map(),
    _0xd06ad5 = new Map();
  _0x572fe2.forEach((_0x518b42) => {
    let _0x197e08 = _0x518b42.pages["length"],
      _0x399e23 = _0xd06ad5.get(_0x518b42.subUnitId) ?? 0;
    _0xd06ad5.set(_0x518b42.subUnitId, _0x197e08 + _0x399e23);
  });
  let _0x46f764 = 0;
  return _0x572fe2
    .map((_0x3ce67d) => {
      let _0x4ac2d0 = _0x3ce67d.pages["length"],
        _0x35e573 = _0x30f0be.get(_0x3ce67d.subUnitId) ?? 0,
        _0x3da7dd = _0x3ce67d.pages["map"](
          (_0xc73056, _0x477cf3) => (
            _0x46f764++,
            {
              ..._0x3ce67d,
              range: _0xc73056,
              page: _0x46f764,
              pageTotal: _0x4d5124,
              sheetPageTotal: _0xd06ad5.get(_0x3ce67d.subUnitId),
              sheetPage: _0x477cf3 + 1 + _0x35e573,
            }
          ),
        );
      return (
        _0x30f0be.has(_0x3ce67d.subUnitId)
          ? _0x30f0be.set(
              _0x3ce67d.subUnitId,
              _0x30f0be.get(_0x3ce67d.subUnitId) + _0x4ac2d0,
            )
          : _0x30f0be.set(_0x3ce67d.subUnitId, _0x4ac2d0),
        _0x3da7dd
      );
    })
    .flat();
}
let se = 0,
  U = class {
    constructor(
      _0x14e50f,
      _0x5551df,
      _0x5c3e5c,
      _0x458dc1,
      _0x4d987a,
      _0x55bd38,
      _0x2cf90d,
    ) {
      ((this._injector = _0x14e50f),
        (this._printDialogService = _0x5551df),
        (this._sheetPrintManagerService = _0x5c3e5c),
        (this._renderManagerService = _0x458dc1),
        (this._messageService = _0x4d987a),
        (this._configService = _0x55bd38),
        (this._printPreparationService = _0x2cf90d));
    }
    async print(_0x23dffb, _0x23fba9) {
      await Promise.all(
        Array.from(
          new Set(_0x23dffb.map((_0x8ebc42) => _0x8ebc42.unitId)),
          (_0x45a75f) =>
            this._printPreparationService["prepare"]({
              unitId: _0x45a75f,
              unitType: n.UniverInstanceType["UNIVER_SHEET"],
              dpr: 1,
            }),
        ),
      );
      let _0x157828 = oe(_0x23dffb),
        { ls: _0x17fb7c, pbk: _0x469e98 } =
          this._configService["getConfig"](e.LS_CONFIG_KEY) ?? {},
        _0x3d808f = (0, e.isLocalCheck)()
          ? 1 / 0
          : N(3, _0x17fb7c, _0x469e98).page;
      _0x157828 = _0x157828.slice(0, _0x3d808f);
      let _0x1d6463 = document.createElement("div");
      _0x1d6463.className = t.PRINT_CONTAINER_CLASS;
      let _0x5162e0 = _0x157828.map((_0x15fa54) => {
        let _0x252b94 = new H(this._injector, _0x15fa54, _0x23fba9, false);
        return (
          (_0x252b94.container["className"] = t.PRINT_CANVAS_CLASS),
          _0x252b94
        );
      });
      _0x5162e0.forEach((_0x54805a) => {
        (_0x1d6463.appendChild(_0x54805a.container),
          _0x54805a.container["appendChild"](_0x54805a.root),
          _0x54805a.prepare(),
          _0x54805a.markDirty(false));
      });
      let _0x28a1f4 = this._sheetPrintManagerService["layoutConfig"],
        _0x3aa4d5 = n.PAGE_SIZE[_0x28a1f4.paperSize],
        _0x468a1d = (0, t.createPrintStyle)(
          _0x3aa4d5.width,
          _0x3aa4d5.height,
          _0x28a1f4.direction,
        );
      return (
        document.body["appendChild"](_0x468a1d),
        document.body["appendChild"](_0x1d6463),
        await Promise.all(
          _0x5162e0.map((_0x12f66c) => _0x12f66c.waitForReady()),
        ),
        new Promise((_0x312b1d) => {
          ((window.onbeforeprint = () => {
            _0x5162e0.forEach((_0x12ce9d) => {
              (_0x12ce9d.render(), _0x12ce9d.clearMemory());
            });
          }),
            (window.onafterprint = () => {
              (_0x5162e0.forEach((_0x18f62e) => {
                _0x18f62e.dispose();
              }),
                document.body["removeChild"](_0x1d6463),
                document.body["removeChild"](_0x468a1d),
                this._printDialogService["close"](),
                this._sheetPrintManagerService["reset"](),
                this._messageService["removeAll"](),
                (_0x5162e0 = []),
                _0x312b1d(true));
            }),
            window.print());
        })
      );
    }
    getRangeImage(_0x4434c0, _0x3e7798, _0x339ba4, _0x593890) {
      if (!P(this._injector)) {
        let _0x21db7b = (Date.now() - se) / 1000;
        if (((se = Date.now()), _0x21db7b <= 30)) return false;
      }
      let _0x4237e6 =
        this._renderManagerService["getRenderUnitById"](_0x4434c0);
      if (!_0x4237e6) return false;
      let _0x44562a = _0x4237e6
        .with(s.SheetSkeletonManagerService)
        .ensureSkeleton(_0x3e7798);
      if (!_0x44562a) return false;
      let _0x1d9fc9 =
          _0x44562a.columnWidthAccumulation[_0x339ba4.endColumn] -
          (_0x44562a.columnWidthAccumulation[_0x339ba4.startColumn - 1] || 0),
        _0x13bfe4 =
          _0x44562a.rowHeightAccumulation[_0x339ba4.endRow] -
          (_0x44562a.rowHeightAccumulation[_0x339ba4.startRow - 1] || 0),
        _0x2572d0 = _0x44562a.columnHeaderHeight,
        _0x413a95 = _0x44562a.rowHeaderWidth,
        _0x177143 = 1.5,
        _0x4b47ff = new H(
          this._injector,
          {
            unitId: _0x4434c0,
            subUnitId: _0x3e7798,
            range: _0x339ba4,
            freeze: j,
            scale: _0x177143,
            page: 1,
            pageSize: _0x593890
              ? {
                  w: (_0x1d9fc9 + _0x413a95) * _0x177143 + 1,
                  h: (_0x13bfe4 + _0x2572d0) * _0x177143 + 1,
                }
              : { w: _0x1d9fc9 * _0x177143 + 1, h: _0x13bfe4 * _0x177143 + 1 },
            margin: t.PaperMarginMap[t.PrintPaperMargin["None"]],
            pageTotal: 1,
            sheetPageTotal: 1,
            sheetPage: 1,
            includeHeaderDimensions: _0x593890 ?? false,
          },
          {
            gridlines: true,
            hAlign: t.PrintAlign["Middle"],
            vAlign: t.PrintAlign["Middle"],
            headerFooter: [],
            headerFooterSetting: E,
            isCustomHeaderFooter: false,
          },
          false,
        ),
        _0x57ef07 = document.createElement("div");
      ((_0x57ef07.className = t.PRINT_CONTAINER_CLASS),
        (_0x4b47ff.container["className"] = t.PRINT_CANVAS_CLASS),
        _0x57ef07.appendChild(_0x4b47ff.container),
        document.body["appendChild"](_0x57ef07),
        _0x4b47ff.prepare(),
        _0x4b47ff.render());
      let _0x267ce3 = _0x4b47ff.getImage();
      return (
        _0x4b47ff.dispose(),
        document.body["removeChild"](_0x57ef07),
        _0x267ce3
      );
    }
  };
U = O(
  [
    D(0, (0, n.Inject)(n.Injector)),
    D(1, b),
    D(2, k),
    D(3, o.IRenderManagerService),
    D(4, i.IMessageService),
    D(5, n.IConfigService),
    D(6, t.IPrintPreparationService),
  ],
  U,
);
function ce(_0x57b00e, _0xdb57b8) {
  let _0x37c7da = atob(_0x57b00e.split(",")[1]),
    _0x243c1b = new ArrayBuffer(_0x37c7da.length),
    _0x4edfb1 = new Uint8Array(_0x243c1b);
  for (let _0x45169d = 0; _0x45169d < _0x37c7da.length; _0x45169d++)
    _0x4edfb1[_0x45169d] = _0x37c7da.charCodeAt(_0x45169d);
  return new Blob([_0x243c1b], { type: _0xdb57b8 });
}
const W = {
    type: n.CommandType["OPERATION"],
    id: "sheet.operation.screenshot",
    async handler(_0xd2c8c7) {
      var _0x6fbba0;
      let _0x2a2bd6 = _0xd2c8c7.get(r.SheetsSelectionsService),
        _0x2eee5d =
          (_0x6fbba0 = _0x2a2bd6.getCurrentSelections()) == null
            ? undefined
            : _0x6fbba0[0],
        _0x172d12 = _0xd2c8c7.get(U),
        _0x4ffe7b = _0x2a2bd6.getCurrentLastSelection(),
        _0x5f1783 = _0xd2c8c7.get(i.IMessageService),
        _0x1fa67b = _0xd2c8c7.get(n.IUniverInstanceService),
        _0x5e7033 = _0xd2c8c7.get(n.LocaleService);
      if (!_0x2eee5d || !_0x4ffe7b) return false;
      let _0x2e36e4 = (0, r.getSheetCommandTarget)(_0x1fa67b);
      if (!_0x2e36e4) return false;
      let { unitId: _0x8bed10, subUnitId: _0x382818 } = _0x2e36e4,
        _0x2c19dd = _0x172d12.getRangeImage(
          _0x8bed10,
          _0x382818,
          _0x2eee5d.range,
        );
      if (!_0x2c19dd) return false;
      try {
        return (
          await navigator.clipboard["write"]([
            new ClipboardItem({ "image/png": ce(_0x2c19dd, "image/png") }),
          ]),
          _0x5f1783.show({
            type: c.MessageType["Success"],
            content: _0x5e7033.t("sheets-print.screenshot.success"),
          }),
          true
        );
      } catch {
        return (
          _0x5f1783.show({
            type: c.MessageType["Error"],
            content: _0x5e7033.t("sheets-print.screenshot.fail"),
          }),
          false
        );
      }
    },
  },
  G = (0, n.createIdentifier)("univer-pro.print-grid.service");
var le = class extends n.Disposable {
  constructor(..._0x142717) {
    (super(..._0x142717),
      y(this, "_visible$", new a["BehaviorSubject"](false)),
      y(this, "visible$", this._visible$));
  }
  get visible() {
    return this._visible$["value"];
  }
  show() {
    this._visible$["next"](true);
  }
  hide() {
    this._visible$["next"](false);
  }
  dispose() {
    (super.dispose(), this._visible$["complete"]());
  }
};
const ue = "PRINT_GRID_SIDEBAR_COMPONENT",
  K = {
    id: "sheet.operation.open-print-grid-sidebar",
    type: n.CommandType["OPERATION"],
    handler: (_0x18acf0) => {
      let _0x4a5eca = _0x18acf0.get(i.ISidebarService),
        _0x51baea = _0x18acf0.get(G),
        _0x5e301b = _0x18acf0.get(k),
        _0x190ca7 = _0x18acf0.get(n.LocaleService);
      return (
        _0x5e301b.reLayout(),
        _0x51baea.show(),
        _0x4a5eca.open({
          header: { title: _0x190ca7.t("sheets-print.grid.title") },
          children: { label: ue },
          onClose: () => {},
          width: 312,
        }),
        true
      );
    },
  },
  q = {
    id: "sheet.operation.close-print-grid-sidebar",
    type: n.CommandType["OPERATION"],
    handler: (_0x3ca42f) => {
      let _0x3b21ba = _0x3ca42f.get(i.ISidebarService);
      return (_0x3ca42f.get(G).hide(), _0x3b21ba.close(), true);
    },
  },
  de = "sheet.menu.print";
function fe(_0x3c1fe2) {
  return {
    id: de,
    type: i.MenuItemType["SUBITEMS"],
    icon: "PrintIcon",
    tooltip: "sheets-print.menu",
    hidden$: (0, i.getMenuHiddenObservable)(
      _0x3c1fe2,
      n.UniverInstanceType["UNIVER_SHEET"],
    ),
    disabled$: (0, s.getCurrentRangeDisable$)(_0x3c1fe2, {
      workbookTypes: [r.WorkbookPrintPermission],
    }),
  };
}
function pe() {
  return {
    id: F.id,
    type: i.MenuItemType["BUTTON"],
    title: "sheets-print.menu",
    icon: "PrintIcon",
  };
}
function me(_0xd9ffa4) {
  return {
    id: W.id,
    type: i.MenuItemType["BUTTON"],
    title: "sheets-print.screenshot.title",
    icon: "DownloadImageIcon",
    tooltip: "sheets-print.screenshot.title",
    hidden$: (0, i.getMenuHiddenObservable)(
      _0xd9ffa4,
      n.UniverInstanceType["UNIVER_SHEET"],
    ),
    disabled$: (0, s.getCurrentRangeDisable$)(_0xd9ffa4, {
      workbookTypes: [
        r.WorkbookPrintPermission,
        r.WorkbookCopyPermission,
        r.WorkbookViewPermission,
      ],
      worksheetTypes: [r.WorksheetCopyPermission, r.WorksheetViewPermission],
      rangeTypes: [r.RangeProtectionPermissionViewPoint],
    }),
  };
}
function he() {
  return {
    id: K.id,
    type: i.MenuItemType["BUTTON"],
    title: "sheets-print.grid.title",
    icon: "DocSettingIcon",
  };
}
const ge = {
  [i.RibbonStartGroup["OTHERS"]]: {
    [de]: {
      order: 0.01,
      gridLayout: {
        row: 1,
        column: 3,
        rowSpan: 2,
        columnSpan: 2,
        showLabel: true,
      },
      menuItemFactory: fe,
      [F.id]: { order: 0, menuItemFactory: pe },
      [K.id]: { order: 1, menuItemFactory: he },
    },
  },
  [i.ContextMenuPosition["MAIN_AREA"]]: {
    [i.ContextMenuGroup["OTHERS"]]: {
      [W.id]: { order: 2.1, menuItemFactory: me },
    },
  },
};
var _e = "@univerjs-pro/sheets-print",
  ve = "1.0.0-insiders.20260907-70fc579";
const ye = {},
  be = (0, u.memo)(function () {
    var _0x107566, _0x56360a, _0x378e72, _0x2faa74;
    let _0x4333d7 = (0, i.useDependency)(k),
      _0x38325a = (0, i.useDependency)(n.ICommandService),
      _0x37a056 = (0, i.useObservable)(
        _0x4333d7.layoutConfig$,
        _0x4333d7.layoutConfig,
      ),
      _0x1fee9d = (0, i.useDependency)(n.LocaleService),
      _0x5e1678 = (0, i.useDependency)(
        n.IUniverInstanceService,
      ).getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"]);
    if (!_0x5e1678) return (console.error("No workbook found"), null);
    let _0x31f328 = _0x5e1678.getActiveSheet();
    if (!_0x31f328) return (console.error("No active sheet found"), null);
    let _0x1c0ab8 = (_0x4b6078, _0x4256ec) => {
        let _0xed2337 = Math.max(0, _0x4256ec || 0),
          _0x554ec8 = _0x37a056.marginCustom || {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          };
        _0x4333d7.updateLayoutConfig({
          marginCustom: { ..._0x554ec8, [_0x4b6078]: _0xed2337 },
        });
      },
      _0x2cb2e7 = _0x31f328.getFreeze(),
      _0x1430e3 = _0x2cb2e7.xSplit <= 0,
      _0x4e3452 = _0x2cb2e7.ySplit <= 0,
      _0x1e30cc = () => {
        _0x38325a.executeCommand(q.id);
      };
    return (0, d.jsxs)("div", {
      className: (0, c.clsx)(
        "univer-flex\x20univer-h-full\x20univer-flex-col",
        c.scrollbarClassName,
      ),
      children: [
        (0, d.jsxs)("div", {
          className: "univer-flex-1 univer-overflow-y-auto",
          children: [
            (0, d.jsx)(c.FormLayout, {
              label: _0x1fee9d.t("sheets-print.area.title"),
              children: (0, d.jsx)(c.Select, {
                className: "univer-w-full",
                value: "" + _0x37a056.area,
                onChange: (_0xae30d2) => {
                  _0x4333d7.updateLayoutConfig({ area: _0xae30d2 });
                },
                options: [
                  {
                    label: _0x1fee9d.t("sheets-print.area.currentSheet"),
                    value: "CurrentSheet",
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.area.currentSelection"),
                    value: "CurrentSelection",
                  },
                ],
              }),
            }),
            (0, d.jsx)(c.FormLayout, {
              label: _0x1fee9d.t("sheets-print.size.title"),
              children: (0, d.jsx)(c.Select, {
                className: "univer-w-full",
                value: _0x37a056.paperSize,
                options: [
                  {
                    label: _0x1fee9d.t("sheets-print.size.letter"),
                    value: n.PaperType["Letter"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.tabloid"),
                    value: n.PaperType["Tabloid"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.legal"),
                    value: n.PaperType["Legal"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.statement"),
                    value: n.PaperType["Statement"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.executive"),
                    value: n.PaperType["Executive"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.folio"),
                    value: n.PaperType["Folio"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.a3"),
                    value: n.PaperType["A3"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.a4"),
                    value: n.PaperType["A4"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.a5"),
                    value: n.PaperType["A5"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.b4"),
                    value: n.PaperType["B4"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.size.b5"),
                    value: n.PaperType["B5"],
                  },
                ],
                onChange: (_0x35fc8d) => {
                  _0x4333d7.updateLayoutConfig({ paperSize: _0x35fc8d });
                },
              }),
            }),
            (0, d.jsx)(c.FormLayout, {
              label: _0x1fee9d.t("sheets-print.margin.title"),
              children: (0, d.jsx)(c.Select, {
                className: "univer-w-full",
                value: _0x37a056.margin,
                options: [
                  {
                    label: _0x1fee9d.t("sheets-print.margin.normal"),
                    value: t.PrintPaperMargin["Normal"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.margin.narrow"),
                    value: t.PrintPaperMargin["Narrow"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.margin.wide"),
                    value: t.PrintPaperMargin["Wide"],
                  },
                  {
                    label: _0x1fee9d.t("sheets-print.margin.custom"),
                    value: t.PrintPaperMargin["Custom"],
                  },
                ],
                onChange: (_0xcd3ad0) => {
                  let _0x202ccc = t.PaperMarginMap[_0x37a056.margin];
                  _0x4333d7.updateLayoutConfig({
                    margin: _0xcd3ad0,
                    marginCustom:
                      _0xcd3ad0 === t.PrintPaperMargin["Custom"]
                        ? _0x202ccc
                        : t.PaperMarginMap[_0xcd3ad0],
                  });
                },
              }),
            }),
            _0x37a056.margin === t.PrintPaperMargin["Custom"] &&
              (0, d.jsx)(c.FormLayout, {
                children: (0, d.jsxs)("div", {
                  className: "univer-grid univer-grid-cols-2 univer-gap-2",
                  children: [
                    (0, d.jsxs)("div", {
                      children: [
                        (0, d.jsx)("label", {
                          className:
                            "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                          children: _0x1fee9d.t("sheets-print.margin.top"),
                        }),
                        (0, d.jsx)(c.Input, {
                          type: "number",
                          value: String(
                            ((_0x107566 = _0x37a056.marginCustom) == null
                              ? undefined
                              : _0x107566.top) || 0,
                          ),
                          onChange: (_0x2d2c62) =>
                            _0x1c0ab8("top", Number(_0x2d2c62)),
                        }),
                      ],
                    }),
                    (0, d.jsxs)("div", {
                      children: [
                        (0, d.jsx)("label", {
                          className:
                            "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                          children: _0x1fee9d.t("sheets-print.margin.bottom"),
                        }),
                        (0, d.jsx)(c.Input, {
                          type: "number",
                          value: String(
                            ((_0x56360a = _0x37a056.marginCustom) == null
                              ? undefined
                              : _0x56360a.bottom) || 0,
                          ),
                          onChange: (_0xcae693) =>
                            _0x1c0ab8("bottom", Number(_0xcae693)),
                        }),
                      ],
                    }),
                    (0, d.jsxs)("div", {
                      children: [
                        (0, d.jsx)("label", {
                          className:
                            "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                          children: _0x1fee9d.t("sheets-print.margin.left"),
                        }),
                        (0, d.jsx)(c.Input, {
                          type: "number",
                          value: String(
                            ((_0x378e72 = _0x37a056.marginCustom) == null
                              ? undefined
                              : _0x378e72.left) || 0,
                          ),
                          onChange: (_0x542870) =>
                            _0x1c0ab8("left", Number(_0x542870)),
                        }),
                      ],
                    }),
                    (0, d.jsxs)("div", {
                      children: [
                        (0, d.jsx)("label", {
                          className:
                            "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                          children: _0x1fee9d.t("sheets-print.margin.right"),
                        }),
                        (0, d.jsx)(c.Input, {
                          type: "number",
                          value: String(
                            ((_0x2faa74 = _0x37a056.marginCustom) == null
                              ? undefined
                              : _0x2faa74.right) || 0,
                          ),
                          onChange: (_0x34ce60) =>
                            _0x1c0ab8("right", Number(_0x34ce60)),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            (0, d.jsx)(c.FormLayout, {
              label: _0x1fee9d.t("sheets-print.orientation.title"),
              children: (0, d.jsxs)(c.RadioGroup, {
                value: _0x37a056.direction,
                onChange: (_0x115318) => {
                  _0x4333d7.updateLayoutConfig({ direction: _0x115318 });
                },
                children: [
                  (0, d.jsx)(c.Radio, {
                    value: t.PrintDirection["Portrait"],
                    children: _0x1fee9d.t("sheets-print.orientation.portrait"),
                  }),
                  (0, d.jsx)(c.Radio, {
                    value: t.PrintDirection["Landscape"],
                    children: _0x1fee9d.t("sheets-print.orientation.landscape"),
                  }),
                ],
              }),
            }),
            (0, d.jsx)(c.FormLayout, {
              collapsable: true,
              label: _0x1fee9d.t("sheets-print.freeze.title"),
              children: (0, d.jsxs)(c.CheckboxGroup, {
                direction: "vertical",
                value: _0x37a056.freeze,
                onChange: (_0x110633) => {
                  _0x4333d7.updateLayoutConfig({ freeze: _0x110633 });
                },
                children: [
                  (0, d.jsx)(c.Checkbox, {
                    disabled: _0x4e3452,
                    value: "Row",
                    children: _0x1fee9d.t("sheets-print.freeze.row"),
                  }),
                  (0, d.jsx)(c.Checkbox, {
                    disabled: _0x1430e3,
                    value: "Column",
                    children: _0x1fee9d.t("sheets-print.freeze.column"),
                  }),
                ],
              }),
            }),
            (0, d.jsxs)(c.FormLayout, {
              collapsable: true,
              defaultCollapsed: true,
              label: _0x1fee9d.t("sheets-print.area.limit"),
              children: [
                (0, d.jsx)(c.FormLayout, {
                  className: "univer-mb-2",
                  label: _0x1fee9d.t("sheets-print.area.maxRowsEachPage"),
                  children: (0, d.jsx)(c.Input, {
                    value:
                      _0x37a056.maxRowsEachPage === 1 / 0
                        ? ""
                        : "" + _0x37a056.maxRowsEachPage,
                    onChange: (_0x4a08dd) => {
                      _0x4333d7.updateLayoutConfig({
                        maxRowsEachPage:
                          !_0x4a08dd || Number.isNaN(Number(_0x4a08dd))
                            ? 1 / 0
                            : Number(_0x4a08dd),
                      });
                    },
                  }),
                }),
                (0, d.jsx)(c.FormLayout, {
                  label: _0x1fee9d.t("sheets-print.area.maxColumnsEachPage"),
                  children: (0, d.jsx)(c.Input, {
                    value:
                      _0x37a056.maxColumnsEachPage === 1 / 0
                        ? ""
                        : "" + _0x37a056.maxColumnsEachPage,
                    onChange: (_0x5cdb2b) => {
                      _0x4333d7.updateLayoutConfig({
                        maxColumnsEachPage:
                          !_0x5cdb2b || Number.isNaN(Number(_0x5cdb2b))
                            ? 1 / 0
                            : Number(_0x5cdb2b),
                      });
                    },
                  }),
                }),
              ],
            }),
          ],
        }),
        (0, d.jsxs)("div", {
          className: "univer-space-y-2 univer-border-t univer-pb-4",
          children: [
            (0, d.jsx)(c.Button, {
              type: "submit",
              variant: "primary",
              className: "univer-w-full",
              onClick: () => {
                (_0x38325a.executeCommand(F.id), _0x1e30cc());
              },
              children: _0x1fee9d.t("sheets-print.menu"),
            }),
            (0, d.jsx)(c.Button, {
              type: "button",
              className: "univer-w-full",
              onClick: _0x1e30cc,
              children: _0x1fee9d.t("sheets-print.grid.closeAndHide"),
            }),
          ],
        }),
      ],
    });
  });
let J = class extends n.Disposable {
  constructor(_0x18350f, _0x3ee909) {
    (super(),
      (this._componentManager = _0x18350f),
      (this._iconManager = _0x3ee909),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        DocSettingIcon: l.DocSettingIcon,
        PrintIcon: l.PrintIcon,
      }),
    );
  }
  _registerComponents() {
    this._componentManager["register"](ue, be);
  }
};
J = O(
  [D(0, (0, n.Inject)(i.ComponentManager)), D(1, (0, n.Inject)(i.IconManager))],
  J,
);
const xe = [6, 4];
var Se = class extends o.SheetExtension {
  constructor(_0x5c0d49, _0x16c4a8) {
    (super(),
      (this._printGridService = _0x5c0d49),
      (this._printManagerService = _0x16c4a8),
      y(this, "uKey", "PrintGridExtension"),
      y(this, "Z_INDEX", 61));
  }
  draw(_0x2245f5, _0x4fddfd, _0x44a31b, _0xc8fd3f) {
    if (_0x2245f5.__mode === "printing" || !this._printGridService["visible"])
      return;
    let { worksheet: _0x20158e } = _0x44a31b;
    if (!_0x20158e) return;
    let _0x5db3fb = this._printManagerService["layoutInfos"],
      _0x13c09f = _0x20158e.getUnitId(),
      _0x543136 = _0x20158e.getSheetId(),
      _0xc02074 = _0x5db3fb.find(
        (_0x35415c) =>
          _0x35415c.unitId === _0x13c09f && _0x35415c.subUnitId === _0x543136,
      );
    _0xc02074 && this._drawPrintGrid(_0x2245f5, _0x44a31b, _0xc02074);
  }
  _drawPrintGrid(_0x4e8309, _0x2029fe, _0x2308b2) {
    let { pages: _0x19369a } = _0x2308b2,
      { rowHeightAccumulation: _0x4cd20c, columnWidthAccumulation: _0x338513 } =
        _0x2029fe;
    (_0x4e8309.save(),
      (_0x4e8309.strokeStyle = "#1890ff"),
      (_0x4e8309.lineWidth = 2),
      _0x4e8309.setLineDash(xe));
    let _0x4ce961 = new Set(),
      _0x4ac7b9 = new Set();
    _0x19369a.forEach((_0x50c764) => {
      let {
          startRow: _0x466ae7,
          endRow: _0x120e67,
          startColumn: _0x20e6fc,
          endColumn: _0x4b75e9,
        } = _0x50c764,
        _0x5912e1 = _0x466ae7 === 0 ? 0 : _0x4cd20c[_0x466ae7 - 1],
        _0x1127f3 = _0x4cd20c[_0x120e67],
        _0x3fcc50 = _0x20e6fc === 0 ? 0 : _0x338513[_0x20e6fc - 1],
        _0x5e78d6 = _0x338513[_0x4b75e9];
      (_0x4ce961.add(_0x5912e1),
        _0x4ce961.add(_0x1127f3),
        _0x4ac7b9.add(_0x3fcc50),
        _0x4ac7b9.add(_0x5e78d6));
    });
    let _0xe691c1 = Math.min(...Array.from(_0x4ac7b9)),
      _0x3a0136 = Math.max(...Array.from(_0x4ac7b9)),
      _0x422115 = Math.min(...Array.from(_0x4ce961)),
      _0x582c4c = Math.max(...Array.from(_0x4ce961));
    (_0x4ce961.forEach((_0x41a3e5) => {
      (_0x4e8309.beginPath(),
        _0x4e8309.moveTo(_0xe691c1, _0x41a3e5),
        _0x4e8309.lineTo(_0x3a0136, _0x41a3e5),
        _0x4e8309.stroke());
    }),
      _0x4ac7b9.forEach((_0x4cf177) => {
        (_0x4e8309.beginPath(),
          _0x4e8309.moveTo(_0x4cf177, _0x422115),
          _0x4e8309.lineTo(_0x4cf177, _0x582c4c),
          _0x4e8309.stroke());
      }),
      _0x4e8309.restore());
  }
};
let Y = class extends n.Disposable {
  constructor(_0x23703b, _0x3c7586, _0x53d723) {
    (super(), (this._context = _0x23703b));
    let _0x1ad39f = this._context["mainComponent"];
    this.disposeWithMe(_0x1ad39f.register(new Se(_0x3c7586, _0x53d723)));
  }
};
Y = O([D(1, G), D(2, k)], Y);
function Ce(_0x3138c2) {
  let [_0x147518, _0x67d623] = (0, u.useState)();
  return (
    (0, u.useEffect)(() => {
      _0x3138c2.then((_0x378da4) => {
        _0x67d623(() => _0x378da4);
      });
    }, []),
    _0x147518
  );
}
const X = ({
    icon: _0x1ce91c,
    items: _0xddcff5,
    active: _0x1656df,
    onChange: _0x222be0,
    onHover: _0x33acf9,
    popupDirection: _0x3cdb3a = "top",
  }) =>
    (0, d.jsxs)("div", {
      className:
        "univer-relative\x20univer-inline-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-gap-1\x20univer-rounded\x20univer-bg-gray-0\x20univer-px-2\x20univer-py-1\x20hover:univer-bg-gray-200\x20dark:!univer-bg-gray-900\x20hover:dark:!univer-bg-gray-700",
      onMouseEnter: () => (_0x33acf9 == null ? undefined : _0x33acf9(true)),
      onMouseLeave: () => (_0x33acf9 == null ? undefined : _0x33acf9(false)),
      children: [
        (0, d.jsx)("div", {
          className:
            "univer-flex univer-size-5 univer-items-center univer-justify-center univer-text-gray-900 dark:!univer-text-gray-0",
          children: _0x1ce91c,
        }),
        (0, d.jsx)(l.MoreDownIcon, {
          className:
            "univer-size-3\x20univer-text-gray-900\x20univer-transition-transform\x20dark:!univer-text-gray-0",
        }),
        _0x1656df &&
          (0, d.jsx)("div", {
            style: { [_0x3cdb3a]: "100%" },
            className:
              "univer-absolute univer-left-0 univer-z-[1000] univer-min-w-[200px] univer-px-0 univer-py-2",
            children: (0, d.jsx)("div", {
              className:
                "univer-solid univer-rounded-lg univer-border univer-border-gray-200 univer-bg-gray-0 univer-p-2 univer-shadow-lg dark:!univer-border-gray-700",
              children: _0xddcff5.map((_0x46fbd6) =>
                (0, d.jsxs)(
                  "div",
                  {
                    className:
                      "univer-flex univer-cursor-pointer univer-flex-row univer-items-center univer-justify-between univer-rounded-md univer-px-2 univer-py-1.5 hover:univer-rounded hover:univer-bg-gray-300",
                    onClick: () => {
                      (_0x222be0 == null || _0x222be0(_0x46fbd6.value),
                        _0x33acf9 == null || _0x33acf9(false));
                    },
                    children: [
                      (0, d.jsx)("div", {
                        className:
                          "univer-text-base univer-text-gray-900 dark:!univer-text-gray-0",
                        children: _0x46fbd6.label,
                      }),
                      (0, d.jsx)("div", {
                        className:
                          "univer-text-sm univer-text-gray-600 dark:!univer-text-gray-200",
                        children: _0x46fbd6.desc,
                      }),
                    ],
                  },
                  _0x46fbd6.value,
                ),
              ),
            }),
          }),
      ],
    }),
  we = (_0x40c369) => {
    let { onSelect: _0x3ffe8c, popupDirection: _0x57b7e0 } = _0x40c369,
      [_0x48a573, _0x2ac5b0] = (0, u.useState)(),
      _0x344714 = (0, i.useDependency)(n.LocaleService),
      _0x5c4f38 = (0, i.useDependency)(
        n.IUniverInstanceService,
      ).getCurrentUnitOfType(n.UniverInstanceType["UNIVER_SHEET"]),
      _0x559444 = _0x5c4f38.getActiveSheet(),
      _0x4115b4 = (0, u.useMemo)(() => (0, n.dateKit)(), []),
      _0x3ade75 = (0, u.useMemo)(
        () => [
          {
            value: "@Page",
            label: _0x344714.t("sheets-print.headerFooter.display.page"),
            desc: z("@Page", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@SheetPage",
            label: _0x344714.t("sheets-print.headerFooter.display.sheetPage"),
            desc: z("@SheetPage", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@TotalPage",
            label: _0x344714.t("sheets-print.headerFooter.display.pageTotal"),
            desc: z("@TotalPage", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@TotalSheetPage",
            label: _0x344714.t(
              "sheets-print.headerFooter.display.sheetPageTotal",
            ),
            desc: z("@TotalSheetPage", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
        ],
        [_0x344714],
      ),
      _0x53c782 = (0, u.useMemo)(
        () => [
          {
            value: "@WorkbookTitle",
            label: _0x344714.t("sheets-print.headerFooter.display.title"),
            desc: z("@WorkbookTitle", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@WorksheetTitle",
            label: _0x344714.t("sheets-print.headerFooter.display.sheet"),
            desc: z("@WorksheetTitle", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
        ],
        [_0x344714],
      ),
      _0x155369 = (0, u.useMemo)(
        () => [
          {
            value: "@DateA",
            label: _0x344714.t("sheets-print.headerFooter.display.dateA"),
            desc: z("@DateA", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@DateB",
            label: _0x344714.t("sheets-print.headerFooter.display.dateB"),
            desc: z("@DateB", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@DateC",
            label: _0x344714.t("sheets-print.headerFooter.display.dateC"),
            desc: z("@DateC", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@DateD",
            label: _0x344714.t("sheets-print.headerFooter.display.dateD"),
            desc: z("@DateD", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
        ],
        [_0x344714],
      ),
      _0x24dc01 = (0, u.useMemo)(
        () => [
          {
            value: "@TimeA",
            label: _0x344714.t("sheets-print.headerFooter.display.timeA"),
            desc: z("@TimeA", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@TimeB",
            label: _0x344714.t("sheets-print.headerFooter.display.timeB"),
            desc: z("@TimeB", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@TimeC",
            label: _0x344714.t("sheets-print.headerFooter.display.timeC"),
            desc: z("@TimeC", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
          {
            value: "@TimeD",
            label: _0x344714.t("sheets-print.headerFooter.display.timeD"),
            desc: z("@TimeD", {
              workbook: _0x5c4f38,
              worksheet: _0x559444,
              page: 1,
              sheetPage: 1,
              pageTotal: 99,
              sheetPageTotal: 99,
              localeService: _0x344714,
              now: _0x4115b4,
            }),
          },
        ],
        [_0x344714],
      );
    return (0, d.jsxs)("div", {
      className: (0, c.clsx)(
        "univer-rounded-md\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow\x20dark:!univer-bg-gray-900",
        c.borderClassName,
      ),
      children: [
        (0, d.jsx)(X, {
          icon: (0, d.jsx)(l.SheetIcon, {}),
          items: _0x3ade75,
          onHover: (_0x4e97e7) => _0x2ac5b0(_0x4e97e7 ? "sheet" : ""),
          active: _0x48a573 === "sheet",
          onChange: _0x3ffe8c,
          popupDirection: _0x57b7e0,
        }),
        (0, d.jsx)(X, {
          icon: (0, d.jsx)(l.TextIcon, {}),
          items: _0x53c782,
          onHover: (_0x104bc0) => _0x2ac5b0(_0x104bc0 ? "text" : ""),
          active: _0x48a573 === "text",
          onChange: _0x3ffe8c,
          popupDirection: _0x57b7e0,
        }),
        (0, d.jsx)(X, {
          icon: (0, d.jsx)(l.CalendarIcon, {}),
          items: _0x155369,
          onHover: (_0x1fa806) => _0x2ac5b0(_0x1fa806 ? "date" : ""),
          active: _0x48a573 === "date",
          onChange: _0x3ffe8c,
          popupDirection: _0x57b7e0,
        }),
        (0, d.jsx)(X, {
          icon: (0, d.jsx)(l.ClockIcon, {}),
          items: _0x24dc01,
          onHover: (_0x59cfc3) => _0x2ac5b0(_0x59cfc3 ? "time" : ""),
          active: _0x48a573 === "time",
          onChange: _0x3ffe8c,
          popupDirection: _0x57b7e0,
        }),
      ],
    });
  };
function Te({
  width: _0x999998 = 697,
  height: _0x24954a = 553,
  cols: _0xcb0ecd = 8,
  rows: _0x4521ea = 24,
  cellWidth: _0x4c17ff = 87,
  cellHeight: _0x18d9cf = 23,
  strokeColor: _0x1335a7 = "#E5E5E5",
}) {
  let _0x5ed41c = (0, u.useMemo)(() => {
    let _0x5afed2 = [];
    for (let _0x44bade = 0; _0x44bade < _0x4521ea; _0x44bade++)
      for (let _0x1a6954 = 0; _0x1a6954 < _0xcb0ecd; _0x1a6954++)
        _0x5afed2.push(
          (0, d.jsx)(
            "rect",
            {
              x: _0x1a6954 * _0x4c17ff + 0.5,
              y: _0x44bade * _0x18d9cf + 0.5,
              width: _0x4c17ff,
              height: _0x18d9cf,
              stroke: _0x1335a7,
            },
            _0x44bade + "-" + _0x1a6954,
          ),
        );
    return _0x5afed2;
  }, [_0x4521ea, _0xcb0ecd, _0x4c17ff, _0x18d9cf, _0x1335a7]);
  return (0, d.jsx)("svg", {
    width: _0x999998,
    height: _0x24954a,
    viewBox: "0 0 " + _0x999998 + "\x20" + _0x24954a,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: _0x5ed41c,
  });
}
const Z = (_0xe8821f) => {
    let {
        value: _0x7a32e3,
        onChange: _0xe2c877,
        popupDirection: _0x1641e2 = "top",
      } = _0xe8821f,
      _0x5ce8a6 = (0, i.useDependency)(n.LocaleService),
      _0x3da6b3 = (0, i.useDependency)(p.IEditorService),
      [_0x5dae56, _0x3f1a74] = (0, u.useState)(false),
      _0x239398 = (0, u.useRef)(null),
      _0x17ab2b = (0, i.useDependency)(n.ICommandService),
      _0x452698 = [
        {
          value: "@Page",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.page"),
        },
        {
          value: "@SheetPage",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.sheetPage"),
        },
        {
          value: "@TotalPage",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.pageTotal"),
        },
        {
          value: "@TotalSheetPage",
          label: _0x5ce8a6.t(
            "sheets-print.headerFooter.display.sheetPageTotal",
          ),
        },
      ],
      _0x12457c = [
        {
          value: "@WorkbookTitle",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.title"),
        },
        {
          value: "@WorksheetTitle",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.sheet"),
        },
      ],
      _0x5255a2 = [
        {
          value: "@DateA",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.dateA"),
        },
        {
          value: "@DateB",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.dateB"),
        },
        {
          value: "@DateC",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.dateC"),
        },
        {
          value: "@DateD",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.dateD"),
        },
      ],
      _0x3e4d76 = [
        {
          value: "@TimeA",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.timeA"),
        },
        {
          value: "@TimeB",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.timeB"),
        },
        {
          value: "@TimeC",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.timeC"),
        },
        {
          value: "@TimeD",
          label: _0x5ce8a6.t("sheets-print.headerFooter.display.timeD"),
        },
      ],
      _0x402d20 = [..._0x452698, ..._0x12457c, ..._0x5255a2, ..._0x3e4d76],
      [_0x385c86] = (0, u.useState)(() => re(_0x7a32e3, _0x402d20));
    return (0, d.jsxs)("div", {
      className: "univer-relative univer-mx-2 univer-my-0 univer-flex-grow",
      children: [
        (0, d.jsx)(p.RichTextEditor, {
          editorRef: _0x239398,
          initialValue: _0x385c86,
          onChange: (_0x35bea8) => {
            _0xe2c877 == null || _0xe2c877(ie(_0x35bea8));
          },
          onFocusChange: (_0x4d9c63) => {
            _0x3f1a74(_0x4d9c63);
          },
          onClickOutside: () => {
            var _0x104bdf;
            ((_0x104bdf = _0x239398.current) == null ||
              _0x104bdf.setSelectionRanges([]),
              _0x3da6b3.blur());
          },
          placeholder: _0x5ce8a6.t("sheets-print.headerFooter.placeholder"),
        }),
        (0, d.jsx)("div", {
          className: "univer-absolute univer-left-0 univer-z-[100]",
          style: { [_0x1641e2]: 36 },
          children:
            _0x5dae56 &&
            (0, d.jsx)(we, {
              popupDirection: _0x1641e2,
              onSelect: async (_0x22cc14) => {
                var _0x295563;
                let _0x20d629 =
                  (_0x295563 = _0x239398.current) == null
                    ? undefined
                    : _0x295563.getEditorId();
                if (!_0x239398.current) return;
                let _0x1ba616 = _0x239398.current["getCursorPosition"]();
                if (_0x1ba616 < 0) return;
                let _0x5e2700 = _0x402d20.find(
                  (_0x406df6) => _0x406df6.value === _0x22cc14,
                );
                if (!_0x5e2700) return;
                let _0x377bbb = {
                  dataStream: _0x5e2700.label,
                  customRanges: [
                    {
                      startIndex: 0,
                      endIndex: _0x5e2700.label["length"] - 1,
                      rangeId: (0, n.generateRandomId)(),
                      rangeType: n.CustomRangeType["MENTION"],
                      properties: { value: _0x5e2700.value },
                      wholeEntity: true,
                    },
                  ],
                };
                await (0, n.awaitTime)(0);
                let _0xbe4729 = n.BuildTextUtils["selection"].replace({
                  selection: {
                    startOffset: _0x1ba616,
                    endOffset: _0x1ba616,
                    collapsed: true,
                  },
                  body: _0x377bbb,
                  doc: _0x239398.current["getDocumentDataModel"](),
                });
                if (!_0xbe4729) return;
                let _0x3f571c = {
                    id: f.RichTextEditingMutation["id"],
                    params: {
                      unitId: _0x20d629,
                      actions: [],
                      textRanges: [
                        {
                          startOffset:
                            _0x1ba616 + _0x377bbb.dataStream["length"],
                          endOffset: _0x1ba616 + _0x377bbb.dataStream["length"],
                          collapsed: true,
                        },
                      ],
                      trigger: "mually",
                    },
                  },
                  _0x19e728 = n.JSONX["getInstance"]();
                ((_0x3f571c.params["actions"] = _0x19e728.editOp(
                  _0xbe4729.serialize(),
                )),
                  _0x17ab2b.syncExecuteCommand(_0x3f571c.id, _0x3f571c.params),
                  setTimeout(() => {
                    _0x3da6b3.focus(_0x20d629);
                  }, 0));
              },
            }),
        }),
      ],
    });
  },
  Ee = (_0x5691eb) => {
    let { onClose: _0x43ab75 } = _0x5691eb,
      _0x1aeb1e = (0, i.useDependency)(k),
      _0x5ed5c0 = _0x1aeb1e.renderConfig["headerFooterSetting"] ?? E,
      [_0x519df1, _0x3fe511] = (0, u.useState)(_0x5ed5c0.topLeft),
      [_0x48e6bd, _0x4322c9] = (0, u.useState)(_0x5ed5c0.topCenter),
      [_0x5a411e, _0xb0b438] = (0, u.useState)(_0x5ed5c0.topRight),
      [_0x24c593, _0x5d22f1] = (0, u.useState)(_0x5ed5c0.bottomLeft),
      [_0x1c9dff, _0x174750] = (0, u.useState)(_0x5ed5c0.bottomCenter),
      [_0x4f2bf1, _0x599afa] = (0, u.useState)(_0x5ed5c0.bottomRight),
      _0x220541 = (0, i.useDependency)(n.LocaleService);
    return (0, d.jsxs)("div", {
      className:
        "univer-absolute univer-inset-0 univer-z-[100] univer-flex univer-size-full univer-flex-col univer-overflow-hidden univer-bg-gray-0 dark:!univer-bg-gray-900",
      children: [
        (0, d.jsxs)("div", {
          className: (0, c.clsx)(
            "univer-box-border univer-flex univer-h-16 univer-w-full univer-flex-none univer-flex-row univer-items-center univer-justify-between univer-bg-gray-0 univer-px-4 dark:!univer-bg-gray-900",
            c.borderBottomClassName,
          ),
          children: [
            (0, d.jsx)("div", {
              className:
                "univer-ml-2 univer-text-lg univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
              children: _0x220541.t(
                "sheets-print.headerFooter.editCustomHeadFooter",
              ),
            }),
            (0, d.jsxs)("div", {
              className: "univer-relative\x20first:univer-mr-2",
              children: [
                (0, d.jsx)(c.Button, {
                  className: "univer-mr-2",
                  onClick: () => {
                    _0x43ab75();
                  },
                  children: _0x220541.t("sheets-print.header.cancel"),
                }),
                (0, d.jsx)(c.Button, {
                  variant: "primary",
                  onClick: () => {
                    (_0x43ab75(),
                      _0x1aeb1e.updateRenderConfig({
                        headerFooterSetting: {
                          topLeft: _0x519df1,
                          topCenter: _0x48e6bd,
                          topRight: _0x5a411e,
                          bottomLeft: _0x24c593,
                          bottomCenter: _0x1c9dff,
                          bottomRight: _0x4f2bf1,
                        },
                      }));
                  },
                  children: _0x220541.t("sheets-print.headerFooter.submit"),
                }),
              ],
            }),
          ],
        }),
        (0, d.jsx)("div", {
          className:
            "univer-flex univer-flex-1 univer-flex-col univer-overflow-hidden",
          children: (0, d.jsx)("div", {
            className:
              "univer-relative univer-box-border univer-flex univer-flex-1 univer-items-center univer-justify-center univer-overflow-hidden univer-bg-gray-200 dark:!univer-bg-gray-700",
            children: (0, d.jsxs)("div", {
              className:
                "unier-w-[761px] univer-mx-auto univer-my-4 univer-box-border univer-flex univer-flex-col univer-items-center univer-bg-gray-0 univer-px-6 univer-py-7 univer-shadow-lg dark:!univer-bg-gray-900",
              children: [
                (0, d.jsxs)("div", {
                  className: "univer-flex univer-w-full",
                  children: [
                    (0, d.jsx)(Z, {
                      value: _0x519df1,
                      onChange: (_0x496378) => _0x3fe511(_0x496378),
                    }),
                    (0, d.jsx)(Z, {
                      value: _0x48e6bd,
                      onChange: (_0x47988a) => _0x4322c9(_0x47988a),
                    }),
                    (0, d.jsx)(Z, {
                      value: _0x5a411e,
                      onChange: (_0x57253c) => _0xb0b438(_0x57253c),
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: "univer-mx-2 univer-my-5",
                  children: (0, d.jsx)(Te, {}),
                }),
                (0, d.jsxs)("div", {
                  className: "univer-flex univer-w-full",
                  children: [
                    (0, d.jsx)(Z, {
                      popupDirection: "bottom",
                      value: _0x24c593,
                      onChange: (_0x2321b2) => _0x5d22f1(_0x2321b2),
                    }),
                    (0, d.jsx)(Z, {
                      popupDirection: "bottom",
                      value: _0x1c9dff,
                      onChange: (_0x2644d1) => _0x174750(_0x2644d1),
                    }),
                    (0, d.jsx)(Z, {
                      popupDirection: "bottom",
                      value: _0x4f2bf1,
                      onChange: (_0x310a96) => _0x599afa(_0x310a96),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  De = (_0x126da5, _0x212ace) => {
    let _0x300595 = (0, u.useRef)(false);
    (0, u.useEffect)(() => {
      if (_0x300595.current) return _0x126da5();
      _0x300595.current = true;
    }, _0x212ace);
  },
  Oe = (0, u.forwardRef)((_0x1933a2, _0x137d40) => {
    let { config: _0x3405ff, previewScale: _0x53fdfd } = _0x1933a2,
      _0x4ae639 = (0, i.useDependency)(k),
      _0x47d60e = (0, i.useDependency)(n.Injector),
      _0x13ad0e = (0, u.useRef)(null),
      _0x15779d = _0x4ae639.paperSize,
      _0x185a42 = (0, i.useObservable)(
        _0x4ae639.renderConfig$,
        _0x4ae639.renderConfig,
      ),
      _0x484d88 = (0, i.useObservable)(
        _0x4ae639.layoutConfig$,
        _0x4ae639.layoutConfig,
      ),
      _0x5563a4 = Math.round(_0x53fdfd * (794 / _0x15779d.w) * 10) / 10,
      [_0x225316] = (0, u.useState)(
        () => new H(_0x47d60e, _0x3405ff, _0x185a42, true, _0x5563a4),
      );
    return (
      (0, u.useEffect)(
        () => (
          _0x13ad0e.current &&
            ((_0x225316.container["style"].width = "100%"),
            (_0x225316.container["style"].height = "100%"),
            (_0x225316.container["style"].position = "relative"),
            _0x13ad0e.current["appendChild"](_0x225316.container),
            _0x225316.container["appendChild"](_0x225316.root)),
          _0x225316.render(),
          _0x225316.renderOnReady(),
          () => {
            var _0x2b0105;
            (queueMicrotask(() => _0x225316.dispose()),
              (_0x2b0105 = _0x13ad0e.current) == null ||
                _0x2b0105.removeChild(_0x225316.container));
          }
        ),
        [_0x225316],
      ),
      De(() => {
        ((_0x225316.renderConfig = _0x185a42), _0x225316.render());
      }, [_0x185a42]),
      De(() => {
        (_0x225316.setPreviewScale(_0x5563a4),
          _0x225316.engine["resize"](),
          _0x225316.render());
      }, [_0x5563a4]),
      De(() => {
        (_0x225316.updateConfig(_0x3405ff), _0x225316.render());
      }, [
        _0x3405ff.freeze["startRow"],
        _0x3405ff.freeze["startColumn"],
        _0x3405ff.freeze["xSplit"],
        _0x3405ff.freeze["ySplit"],
        _0x3405ff.range["startRow"],
        _0x3405ff.range["endRow"],
        _0x3405ff.range["startColumn"],
        _0x3405ff.range["endColumn"],
        _0x3405ff.scale,
        _0x484d88.margin,
      ]),
      (0, d.jsx)("div", {
        ref: _0x137d40,
        children: (0, d.jsx)("div", {
          ref: _0x13ad0e,
          className:
            "univer-relative univer-mx-auto univer-mt-7 univer-flex-none univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900",
          style: {
            width: _0x15779d.w * _0x5563a4,
            height: _0x15779d.h * _0x5563a4,
          },
        }),
      })
    );
  }),
  ke = (0, u.memo)(({ onShowFooterHeaderEditor: _0x41e496 }) => {
    var _0x37d923, _0x1ad4f5, _0x8f5544, _0x1b5f95, _0x4126a6;
    let _0x518e70 = (0, i.useDependency)(k),
      _0x2111ca = (0, i.useObservable)(
        _0x518e70.layoutConfig$,
        _0x518e70.layoutConfig,
      ),
      _0x3d0352 = (0, i.useObservable)(
        _0x518e70.renderConfig$,
        _0x518e70.renderConfig,
      ),
      _0x337ee9 = (0, i.useDependency)(n.LocaleService),
      _0x281ccc = (0, i.useDependency)(n.IUniverInstanceService),
      _0x13e956 = (0, i.useDependency)(n.ILocalStorageService),
      [_0x43c269, _0x42e325] = (0, u.useState)(null),
      _0x5a243b =
        ((_0x37d923 = (0, i.useDependency)(n.IConfigService).getConfig(
          "sheets-print.config",
        )) == null
          ? undefined
          : _0x37d923.enforceWatermark) ?? false;
    (0, u.useEffect)(() => {
      let _0x49f4a5 = false;
      return (
        _0x13e956.getItem(o.UNIVER_WATERMARK_STORAGE_KEY).then((_0x101c6d) => {
          if (_0x49f4a5) return;
          let _0x391db4, _0x38588b;
          ((_0x101c6d == null ? undefined : _0x101c6d.type) ===
            o.IWatermarkTypeEnum["Image"] &&
            _0x101c6d.config["image"] &&
            ((_0x391db4 = new Image()),
            (_0x391db4.src = _0x101c6d.config["image"].url)),
            (_0x101c6d == null ? undefined : _0x101c6d.type) ===
              o.IWatermarkTypeEnum["UserInfo"] &&
              _0x101c6d != null &&
              _0x101c6d.config["userInfo"] &&
              (_0x38588b = _0x101c6d.config["userInfo"]));
          let _0xeea00c = _0x101c6d
            ? { ..._0x101c6d, user: _0x38588b, image: _0x391db4 }
            : null;
          (_0x42e325(_0xeea00c),
            _0x5a243b &&
              _0x518e70.updateRenderConfig({ watermark: _0xeea00c }));
        }),
        () => {
          _0x49f4a5 = true;
        }
      );
    }, [_0x5a243b, _0x13e956, _0x518e70]);
    let _0x42ca2a = _0x281ccc.getCurrentUnitOfType(
        n.UniverInstanceType["UNIVER_SHEET"],
      ),
      _0x4ca3fd = _0x42ca2a
        .getSheets()
        .filter((_0xdb2468) => !_0xdb2468.isSheetHidden()),
      _0x1edfe3 = _0x42ca2a.getActiveSheet();
    if (!_0x1edfe3) return (console.error("No active sheet found"), null);
    let _0x4402bc = (_0x18c1de, _0x2ceb05) => {
        let _0x46165a = Math.max(0, _0x2ceb05 || 0),
          _0xd8c3ed = _0x2111ca.marginCustom || {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          };
        _0x518e70.updateLayoutConfig({
          marginCustom: { ..._0xd8c3ed, [_0x18c1de]: _0x46165a },
        });
      },
      _0x4f8882 = _0x1edfe3.getFreeze(),
      _0x487ded = _0x2111ca.area !== "Workbook" && _0x4f8882.xSplit <= 0,
      _0x1b8e77 = _0x2111ca.area !== "Workbook" && _0x4f8882.ySplit <= 0;
    return (0, d.jsx)("div", {
      className: (0, c.clsx)(
        "univer-h-full\x20univer-overflow-y-auto",
        c.scrollbarClassName,
      ),
      children: (0, d.jsxs)("div", {
        className: "univer-p-4",
        children: [
          (0, d.jsx)(c.FormLayout, {
            label: _0x337ee9.t("sheets-print.area.title"),
            children: (0, d.jsx)(c.Select, {
              className: "univer-w-full",
              value: "" + _0x2111ca.area,
              onChange: (_0x1dd9ab) => {
                _0x1dd9ab === "Workbook"
                  ? _0x518e70.updateLayoutConfig({
                      area: _0x1dd9ab,
                      subUnitIds: _0x4ca3fd.map((_0x13f503) =>
                        _0x13f503.getSheetId(),
                      ),
                    })
                  : _0x518e70.updateLayoutConfig({ area: _0x1dd9ab });
              },
              options: [
                {
                  label: _0x337ee9.t("sheets-print.area.currentSheet"),
                  value: "CurrentSheet",
                },
                {
                  label: _0x337ee9.t("sheets-print.area.workbook"),
                  value: "Workbook",
                },
                {
                  label: _0x337ee9.t("sheets-print.area.currentSelection"),
                  value: "CurrentSelection",
                },
                {
                  label: _0x337ee9.t("sheets-print.area.allSelection"),
                  value: "AllSelection",
                },
              ],
            }),
          }),
          _0x2111ca.area === "Workbook"
            ? (0, d.jsx)(c.FormLayout, {
                label: _0x337ee9.t("sheets-print.selection.title"),
                children: (0, d.jsx)(c.Dropdown, {
                  overlay: (0, d.jsx)("div", {
                    className: (0, c.clsx)(
                      "univer-h-[200px] univer-w-[--radix-popper-anchor-width] univer-overflow-y-auto",
                      c.scrollbarClassName,
                    ),
                    children: (0, d.jsx)(c.CheckboxGroup, {
                      direction: "vertical",
                      className: "univer-p-3",
                      value: _0x2111ca.subUnitIds["map"]((_0x23293e) =>
                        typeof _0x23293e == "string" ? _0x23293e : _0x23293e.id,
                      ),
                      onChange: (_0x2c6d2d) => {
                        let _0x4b677f = new Set(_0x2c6d2d);
                        if (_0x4b677f.size === 0)
                          _0x518e70.updateLayoutConfig({
                            subUnitIds: _0x4ca3fd.map((_0x3f81a2) =>
                              _0x3f81a2.getSheetId(),
                            ),
                          });
                        else {
                          let _0x2e74ae = [];
                          (_0x4ca3fd.forEach((_0x1c527b) => {
                            let _0x5df64f = _0x1c527b.getSheetId();
                            _0x4b677f.has(_0x5df64f) &&
                              _0x2e74ae.push(_0x5df64f);
                          }),
                            _0x518e70.updateLayoutConfig({
                              subUnitIds: _0x2e74ae,
                            }));
                        }
                      },
                      children: _0x4ca3fd.map((_0x47daed) =>
                        (0, d.jsx)(
                          c.Checkbox,
                          {
                            value: _0x47daed.getSheetId(),
                            children: _0x47daed.getName(),
                          },
                          _0x47daed.getSheetId(),
                        ),
                      ),
                    }),
                  }),
                  children: (0, d.jsxs)("div", {
                    className: (0, c.clsx)(
                      "univer-box-border univer-inline-flex univer-h-8 univer-w-full univer-min-w-36 univer-cursor-pointer univer-items-center univer-justify-between univer-gap-2 univer-rounded-lg univer-bg-gray-0 univer-px-2.5 univer-text-sm univer-transition-colors univer-duration-200 hover:univer-border-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-gray-0",
                      c.borderClassName,
                    ),
                    children: [
                      (0, d.jsx)("span", {
                        className: "univer-text-gray-500",
                        children:
                          _0x2111ca.subUnitIds["length"] === _0x4ca3fd.length ||
                          _0x2111ca.subUnitIds["length"] === 0
                            ? _0x337ee9.t("sheets-print.selection.allWorkbook")
                            : "" +
                              _0x2111ca.subUnitIds["length"] +
                              _0x337ee9.t(
                                "sheets-print.selection.workbookUnit",
                              ),
                      }),
                      (0, d.jsx)(l.MoreDownIcon, {}),
                    ],
                  }),
                }),
              })
            : null,
          (0, d.jsx)(c.FormLayout, {
            label: _0x337ee9.t("sheets-print.size.title"),
            children: (0, d.jsx)(c.Select, {
              className: "univer-w-full",
              value: _0x2111ca.paperSize,
              options: [
                {
                  label: _0x337ee9.t("sheets-print.size.letter"),
                  value: n.PaperType["Letter"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.tabloid"),
                  value: n.PaperType["Tabloid"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.legal"),
                  value: n.PaperType["Legal"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.statement"),
                  value: n.PaperType["Statement"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.executive"),
                  value: n.PaperType["Executive"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.folio"),
                  value: n.PaperType["Folio"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.a3"),
                  value: n.PaperType["A3"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.a4"),
                  value: n.PaperType["A4"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.a5"),
                  value: n.PaperType["A5"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.b4"),
                  value: n.PaperType["B4"],
                },
                {
                  label: _0x337ee9.t("sheets-print.size.b5"),
                  value: n.PaperType["B5"],
                },
              ],
              onChange: (_0x17ef39) => {
                _0x518e70.updateLayoutConfig({ paperSize: _0x17ef39 });
              },
            }),
          }),
          (0, d.jsx)(c.FormLayout, {
            label: _0x337ee9.t("sheets-print.margin.title"),
            children: (0, d.jsx)(c.Select, {
              className: "univer-w-full",
              value: _0x2111ca.margin,
              options: [
                {
                  label: _0x337ee9.t("sheets-print.margin.normal"),
                  value: t.PrintPaperMargin["Normal"],
                },
                {
                  label: _0x337ee9.t("sheets-print.margin.narrow"),
                  value: t.PrintPaperMargin["Narrow"],
                },
                {
                  label: _0x337ee9.t("sheets-print.margin.wide"),
                  value: t.PrintPaperMargin["Wide"],
                },
                {
                  label: _0x337ee9.t("sheets-print.margin.custom"),
                  value: t.PrintPaperMargin["Custom"],
                },
              ],
              onChange: (_0x134c6c) => {
                let _0x34d919 = t.PaperMarginMap[_0x2111ca.margin];
                _0x518e70.updateLayoutConfig({
                  margin: _0x134c6c,
                  marginCustom:
                    _0x134c6c === t.PrintPaperMargin["Custom"]
                      ? _0x34d919
                      : t.PaperMarginMap[_0x134c6c],
                });
              },
            }),
          }),
          _0x2111ca.margin === t.PrintPaperMargin["Custom"] &&
            (0, d.jsx)(c.FormLayout, {
              children: (0, d.jsxs)("div", {
                className: "univer-grid univer-grid-cols-2 univer-gap-2",
                children: [
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("label", {
                        className:
                          "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                        children: _0x337ee9.t("sheets-print.margin.top"),
                      }),
                      (0, d.jsx)(c.Input, {
                        type: "number",
                        value: String(
                          ((_0x1ad4f5 = _0x2111ca.marginCustom) == null
                            ? undefined
                            : _0x1ad4f5.top) || 0,
                        ),
                        onChange: (_0x2078d5) =>
                          _0x4402bc("top", Number(_0x2078d5)),
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("label", {
                        className:
                          "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                        children: _0x337ee9.t("sheets-print.margin.bottom"),
                      }),
                      (0, d.jsx)(c.Input, {
                        type: "number",
                        value: String(
                          ((_0x8f5544 = _0x2111ca.marginCustom) == null
                            ? undefined
                            : _0x8f5544.bottom) || 0,
                        ),
                        onChange: (_0x277223) =>
                          _0x4402bc("bottom", Number(_0x277223)),
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("label", {
                        className:
                          "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                        children: _0x337ee9.t("sheets-print.margin.left"),
                      }),
                      (0, d.jsx)(c.Input, {
                        type: "number",
                        value: String(
                          ((_0x1b5f95 = _0x2111ca.marginCustom) == null
                            ? undefined
                            : _0x1b5f95.left) || 0,
                        ),
                        onChange: (_0x330956) =>
                          _0x4402bc("left", Number(_0x330956)),
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("label", {
                        className:
                          "univer-mb-1 univer-block univer-text-xs univer-text-gray-500",
                        children: _0x337ee9.t("sheets-print.margin.right"),
                      }),
                      (0, d.jsx)(c.Input, {
                        type: "number",
                        value: String(
                          ((_0x4126a6 = _0x2111ca.marginCustom) == null
                            ? undefined
                            : _0x4126a6.right) || 0,
                        ),
                        onChange: (_0x1797ee) =>
                          _0x4402bc("right", Number(_0x1797ee)),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          (0, d.jsx)(c.FormLayout, {
            label: _0x337ee9.t("sheets-print.orientation.title"),
            children: (0, d.jsxs)(c.RadioGroup, {
              value: _0x2111ca.direction,
              onChange: (_0x1178d8) => {
                _0x518e70.updateLayoutConfig({ direction: _0x1178d8 });
              },
              children: [
                (0, d.jsx)(c.Radio, {
                  value: t.PrintDirection["Portrait"],
                  children: _0x337ee9.t("sheets-print.orientation.portrait"),
                }),
                (0, d.jsx)(c.Radio, {
                  value: t.PrintDirection["Landscape"],
                  children: _0x337ee9.t("sheets-print.orientation.landscape"),
                }),
              ],
            }),
          }),
          (0, d.jsx)(c.FormLayout, {
            label: _0x337ee9.t("sheets-print.scale.title"),
            children: (0, d.jsx)(c.Select, {
              className: "univer-w-full",
              value: _0x2111ca.scale,
              options: [
                {
                  label: _0x337ee9.t("sheets-print.scale.normal"),
                  value: t.PrintScale["Origin"],
                },
                {
                  label: _0x337ee9.t("sheets-print.scale.fitWidth"),
                  value: t.PrintScale["FitWidth"],
                },
                {
                  label: _0x337ee9.t("sheets-print.scale.fitHeight"),
                  value: t.PrintScale["FitHeight"],
                },
                {
                  label: _0x337ee9.t("sheets-print.scale.fitPage"),
                  value: t.PrintScale["FitPage"],
                },
              ],
              onChange: (_0x17ee18) => {
                _0x518e70.updateLayoutConfig({ scale: _0x17ee18 });
              },
            }),
          }),
          (0, d.jsxs)(c.FormLayout, {
            label: _0x337ee9.t("sheets-print.formatting.title"),
            children: [
              (0, d.jsx)(c.Checkbox, {
                checked: _0x3d0352.gridlines,
                onChange: (_0x2e9f5b) => {
                  _0x518e70.updateRenderConfig({ gridlines: _0x2e9f5b });
                },
                children: _0x337ee9.t("sheets-print.formatting.skeleton"),
              }),
              _0x43c269 && !_0x5a243b
                ? (0, d.jsx)("div", {
                    className: "univer-mt-3",
                    children: (0, d.jsx)(c.Checkbox, {
                      checked: !!_0x3d0352.watermark,
                      onChange: async (_0x37b9bd) => {
                        _0x37b9bd
                          ? _0x518e70.updateRenderConfig({
                              watermark: _0x43c269,
                            })
                          : _0x518e70.updateRenderConfig({
                              watermark: undefined,
                            });
                      },
                      children: _0x337ee9.t(
                        "sheets-print.formatting.waterMark",
                      ),
                    }),
                  })
                : null,
            ],
          }),
          (0, d.jsx)(c.FormLayout, {
            label: _0x337ee9.t("sheets-print.align.title"),
            children: (0, d.jsxs)("div", {
              className: "univer-flex univer-gap-2",
              children: [
                (0, d.jsx)(c.Select, {
                  className: "!univer-min-w-0\x20univer-flex-1",
                  value: _0x3d0352.hAlign,
                  options: [
                    {
                      label: _0x337ee9.t(
                        "sheets-print.align.horizontal.middle",
                      ),
                      value: t.PrintAlign["Middle"],
                    },
                    {
                      label: _0x337ee9.t("sheets-print.align.horizontal.start"),
                      value: t.PrintAlign["Start"],
                    },
                    {
                      label: _0x337ee9.t("sheets-print.align.horizontal.end"),
                      value: t.PrintAlign["End"],
                    },
                  ],
                  onChange: (_0x416b48) => {
                    _0x518e70.updateRenderConfig({ hAlign: _0x416b48 });
                  },
                }),
                (0, d.jsx)(c.Select, {
                  className: "!univer-min-w-0 univer-flex-1",
                  value: _0x3d0352.vAlign,
                  options: [
                    {
                      label: _0x337ee9.t("sheets-print.align.vertical.start"),
                      value: t.PrintAlign["Start"],
                    },
                    {
                      label: _0x337ee9.t("sheets-print.align.vertical.end"),
                      value: t.PrintAlign["End"],
                    },
                    {
                      label: _0x337ee9.t("sheets-print.align.vertical.middle"),
                      value: t.PrintAlign["Middle"],
                    },
                  ],
                  onChange: (_0x494104) => {
                    _0x518e70.updateRenderConfig({ vAlign: _0x494104 });
                  },
                }),
              ],
            }),
          }),
          (0, d.jsxs)(c.FormLayout, {
            collapsable: true,
            label: _0x337ee9.t("sheets-print.headerFooter.title"),
            children: [
              (0, d.jsxs)(c.CheckboxGroup, {
                direction: "vertical",
                disabled: _0x3d0352.isCustomHeaderFooter,
                value: _0x3d0352.headerFooter,
                onChange: (_0x2627f7) => {
                  _0x518e70.updateRenderConfig({ headerFooter: _0x2627f7 });
                },
                children: [
                  (0, d.jsx)(c.Checkbox, {
                    value: "PageSize",
                    children: _0x337ee9.t("sheets-print.headerFooter.page"),
                  }),
                  (0, d.jsx)(c.Checkbox, {
                    value: "WorkbookTitle",
                    children: _0x337ee9.t("sheets-print.headerFooter.workbook"),
                  }),
                  (0, d.jsx)(c.Checkbox, {
                    value: "WorksheetTitle",
                    children: _0x337ee9.t("sheets-print.headerFooter.sheet"),
                  }),
                  (0, d.jsx)(c.Checkbox, {
                    value: "Date",
                    children: _0x337ee9.t("sheets-print.headerFooter.date"),
                  }),
                  (0, d.jsx)(c.Checkbox, {
                    value: "Time",
                    children: _0x337ee9.t("sheets-print.headerFooter.time"),
                  }),
                ],
              }),
              (0, d.jsx)(c.FormLayout, {
                className: "univer-mt-3",
                label: (0, d.jsx)(c.Checkbox, {
                  checked: _0x3d0352.isCustomHeaderFooter,
                  onChange: () => {
                    _0x518e70.updateRenderConfig({
                      isCustomHeaderFooter: !_0x3d0352.isCustomHeaderFooter,
                    });
                  },
                  children: _0x337ee9.t(
                    "sheets-print.headerFooter.customHeadFooter",
                  ),
                }),
                children: _0x3d0352.isCustomHeaderFooter
                  ? (0, d.jsx)(c.Button, {
                      className: "univer-my-1 univer-p-0",
                      size: "small",
                      variant: "link",
                      onClick: () => {
                        _0x41e496();
                      },
                      children: _0x337ee9.t(
                        "sheets-print.headerFooter.editCustomHeadFooter",
                      ),
                    })
                  : null,
              }),
            ],
          }),
          (0, d.jsx)(c.FormLayout, {
            collapsable: true,
            label: _0x337ee9.t("sheets-print.freeze.title"),
            children: (0, d.jsxs)(c.CheckboxGroup, {
              direction: "vertical",
              value: _0x2111ca.freeze,
              onChange: (_0x83bdda) => {
                _0x518e70.updateLayoutConfig({ freeze: _0x83bdda });
              },
              children: [
                (0, d.jsx)(c.Checkbox, {
                  disabled: _0x1b8e77,
                  value: "Row",
                  children: _0x337ee9.t("sheets-print.freeze.row"),
                }),
                (0, d.jsx)(c.Checkbox, {
                  disabled: _0x487ded,
                  value: "Column",
                  children: _0x337ee9.t("sheets-print.freeze.column"),
                }),
              ],
            }),
          }),
          (0, d.jsxs)(c.FormLayout, {
            collapsable: true,
            defaultCollapsed: true,
            label: _0x337ee9.t("sheets-print.area.limit"),
            children: [
              (0, d.jsx)(c.FormLayout, {
                className: "univer-mb-2",
                label: _0x337ee9.t("sheets-print.area.maxRowsEachPage"),
                children: (0, d.jsx)(c.Input, {
                  value:
                    _0x2111ca.maxRowsEachPage === 1 / 0
                      ? ""
                      : "" + _0x2111ca.maxRowsEachPage,
                  onChange: (_0x5c9793) => {
                    _0x518e70.updateLayoutConfig({
                      maxRowsEachPage:
                        !_0x5c9793 || Number.isNaN(Number(_0x5c9793))
                          ? 1 / 0
                          : Number(_0x5c9793),
                    });
                  },
                }),
              }),
              (0, d.jsx)(c.FormLayout, {
                label: _0x337ee9.t("sheets-print.area.maxColumnsEachPage"),
                children: (0, d.jsx)(c.Input, {
                  value:
                    _0x2111ca.maxColumnsEachPage === 1 / 0
                      ? ""
                      : "" + _0x2111ca.maxColumnsEachPage,
                  onChange: (_0x2e3919) => {
                    _0x518e70.updateLayoutConfig({
                      maxColumnsEachPage:
                        !_0x2e3919 || Number.isNaN(Number(_0x2e3919))
                          ? 1 / 0
                          : Number(_0x2e3919),
                    });
                  },
                }),
              }),
            ],
          }),
        ],
      }),
    });
  }),
  Ae = 0.1,
  je = () => {
    let [_0x2a0d60, _0x5f1961] = (0, u.useState)(false),
      _0xadd9c5 = (0, i.useDependency)(k),
      _0x1a4e2b = (0, i.useDependency)(n.ICommandService),
      _0x39956a = (0, i.useObservable)(_0xadd9c5.layoutInfos$, []),
      [_0x1f0478, _0x12ed73] = (0, u.useState)(1),
      [_0x52ade6, _0x25d326] = (0, u.useState)(false),
      _0x5785ad = (0, i.useDependency)(b),
      _0x3bb9ca = (0, i.useObservable)(
        _0x5785ad.preparing$,
        _0x5785ad.preparing,
      ),
      _0x4723a2 = (0, i.useDependency)(n.IUniverInstanceService),
      _0x3374b6 = (0, i.useDependency)(n.LocaleService),
      _0x13299b = (0, i.useDependency)(n.Injector),
      { ls: _0x13308f, pbk: _0x749bf } =
        (0, i.useDependency)(n.IConfigService).getConfig(e.LS_CONFIG_KEY) ?? {},
      { limit: _0x297d78, isPro: _0x534df1 } = (0, u.useMemo)(() => {
        let { page: _0x226471, isPro: _0x3370d2 } = N(3, _0x13308f, _0x749bf);
        return { limit: _0x226471, isPro: _0x3370d2 };
      }, [_0x13308f, _0x749bf]),
      _0x4598b8 = (0, u.useRef)(null),
      _0x32995a = (0, i.useDependency)(i.IMessageService),
      _0x1774da = Ce(
        import(`@univerjs-pro/collaboration-client`).then(
          (_0x272742) => _0x272742.CollaborationController,
          () => undefined,
        ),
      );
    (0, u.useEffect)(() => {
      var _0x242033;
      if (!_0x1774da) return;
      let _0x4be8c0 = _0x4723a2.getCurrentUnitOfType(
        n.UniverInstanceType["UNIVER_SHEET"],
      );
      if (!_0x4be8c0) return;
      let _0x42366f = _0x4be8c0.getUnitId(),
        _0x49ba79 = _0x13299b.get(_0x1774da, n.Quantity["OPTIONAL"]),
        _0x523fc0 =
          _0x49ba79 == null ||
          (_0x242033 = _0x49ba79.getCollabEntity(_0x42366f)) == null
            ? undefined
            : _0x242033.pauseCollaboration();
      return () => {
        _0x523fc0 == null || _0x523fc0.dispose();
      };
    }, [_0x1774da, _0x13299b, _0x4723a2]);
    let _0x3bdfd0 = (0, u.useMemo)(() => oe(_0x39956a), [_0x39956a]),
      _0x424db7 = (0, u.useMemo)(
        () => _0x3bdfd0.slice(0, _0x297d78),
        [_0x3bdfd0, _0x297d78],
      ),
      _0x32ffb0 = _0xadd9c5.paperSize,
      _0x8faf8d = Math.round(_0x1f0478 * (794 / _0x32ffb0.w) * 10) / 10,
      [_0x54ea67, { wrapperStyle: _0x3abb39, containerProps: _0x2ebc6d }] = (0,
      i.useVirtualList)(_0x424db7, {
        containerTarget: _0x4598b8,
        itemHeight: _0x32ffb0.h * _0x8faf8d + 28,
        overscan: 5,
      }),
      _0x2328de = () => {
        _0x1a4e2b.executeCommand(I.id);
      },
      _0xb1d442 = () => {
        (_0x25d326(true),
          _0x32995a.show({
            content: _0x3374b6.t("sheets-print.header.printing"),
            type: c.MessageType["Loading"],
          }),
          setTimeout(() => {
            _0x1a4e2b.executeCommand(L.id);
          }, 300));
      },
      _0x2363e5 = (0, i.useEvent)(() => {
        _0x5f1961(true);
      });
    return (0, d.jsxs)("div", {
      className:
        "univer-absolute univer-inset-0 univer-z-[100] univer-box-border univer-flex univer-size-full univer-flex-col univer-overflow-hidden univer-bg-gray-100 dark:!univer-bg-gray-900",
      children: [
        _0x2a0d60 && (0, d.jsx)(Ee, { onClose: () => _0x5f1961(false) }),
        _0x52ade6 &&
          (0, d.jsx)("div", {
            className:
              "univer-pointer-events-none univer-absolute univer-inset-0 univer-z-[1010] univer-flex univer-justify-center",
          }),
        (0, d.jsxs)("div", {
          className: (0, c.clsx)(
            "univer-flex univer-h-16 univer-items-center univer-justify-between univer-bg-gray-0 univer-px-4 dark:!univer-bg-gray-900",
            c.borderBottomClassName,
          ),
          children: [
            (0, d.jsxs)("div", {
              className:
                "univer-ml-2 univer-text-base univer-font-medium univer-text-gray-900 dark:!univer-text-gray-0",
              children: [
                _0x3374b6.t("sheets-print.header.total"),
                _0x424db7.length,
                _0x3374b6.t("sheets-print.header.pages"),
              ],
            }),
            (0, d.jsxs)("div", {
              className: "univer-flex univer-gap-2",
              children: [
                (0, d.jsx)(c.Button, {
                  onClick: _0x2328de,
                  children: _0x3374b6.t("sheets-print.header.cancel"),
                }),
                (0, d.jsx)(c.Button, {
                  variant: "primary",
                  disabled: _0x3bb9ca,
                  onClick: _0xb1d442,
                  children: _0x3374b6.t("sheets-print.header.next"),
                }),
              ],
            }),
          ],
        }),
        (0, d.jsxs)("div", {
          className: "univer-flex\x20univer-flex-1\x20univer-overflow-hidden",
          children: [
            (0, d.jsxs)("div", {
              className:
                "univer-relative univer-box-border univer-flex univer-flex-1 univer-flex-col univer-overflow-hidden",
              children: [
                (0, d.jsx)("div", {
                  ref: _0x4598b8,
                  className: (0, c.clsx)(
                    "univer-flex-1\x20univer-overflow-auto",
                    c.scrollbarClassName,
                  ),
                  "aria-busy": _0x3bb9ca,
                  ..._0x2ebc6d,
                  children: _0x3bb9ca
                    ? (0, d.jsx)("div", {
                        className:
                          "univer-flex univer-size-full univer-items-center univer-justify-center",
                        role: "status",
                        "aria-label": _0x3374b6.t(
                          "sheets-print.header.printing",
                        ),
                        children: (0, d.jsx)(l.LoadingMultiIcon, {
                          className:
                            "univer-size-8 univer-animate-spin univer-text-gray-500",
                          "aria-hidden": "true",
                        }),
                      })
                    : (0, d.jsx)("div", {
                        style: _0x3abb39,
                        children: _0x54ea67.map((_0x4456b2) =>
                          (0, d.jsx)(
                            Oe,
                            {
                              config: _0x4456b2.data,
                              page: _0x4456b2.data["page"],
                              previewScale: _0x1f0478,
                            },
                            _0x4456b2.data["unitId"] +
                              ":" +
                              _0x4456b2.data["subUnitId"] +
                              ":" +
                              _0x4456b2.data["page"] +
                              ":" +
                              _0x4456b2.data["range"].startRow +
                              ":" +
                              _0x4456b2.data["range"].startColumn +
                              ":" +
                              _0x4456b2.data["range"].endRow +
                              ":" +
                              _0x4456b2.data["range"].endColumn,
                          ),
                        ),
                      }),
                }),
                !_0x3bb9ca &&
                  !_0x534df1 &&
                  (0, d.jsx)("div", {
                    className: "univer-my-4 univer-text-center",
                    children: (0, d.jsx)("a", {
                      href: _0x3374b6.t("sheets-print.limit.link"),
                      target: "_blank",
                      rel: "noreferrer noopener",
                      children: _0x3374b6
                        .t("sheets-print.limit.page")
                        .replace("{limit}", "" + _0x297d78),
                    }),
                  }),
                !_0x3bb9ca &&
                  !_0x2a0d60 &&
                  (0, d.jsxs)("div", {
                    className:
                      "univer-absolute\x20univer-bottom-4\x20univer-right-4\x20univer-z-[1000]",
                    children: [
                      (0, d.jsx)("div", {
                        className:
                          "univer-z-[100] univer-mt-2 univer-flex univer-size-8 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-full univer-bg-gray-0 univer-shadow dark:!univer-bg-gray-900",
                        onClick: () => {
                          _0x12ed73(Math.min(_0x1f0478 + Ae, 2));
                        },
                        children: (0, d.jsx)(l.IncreaseIcon, {}),
                      }),
                      (0, d.jsx)("div", {
                        className:
                          "univer-z-[100] univer-mt-2 univer-flex univer-size-8 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded-full univer-bg-gray-0 univer-shadow dark:!univer-bg-gray-900",
                        onClick: () => {
                          _0x12ed73(Math.max(_0x1f0478 - Ae, 0.5));
                        },
                        children: (0, d.jsx)(l.ReduceIcon, {}),
                      }),
                    ],
                  }),
              ],
            }),
            (0, d.jsx)("div", {
              className:
                "univer-box-border univer-h-full univer-w-[312px] univer-flex-none univer-bg-gray-0 dark:!univer-bg-gray-900",
              children: (0, d.jsx)(ke, { onShowFooterHeaderEditor: _0x2363e5 }),
            }),
          ],
        }),
      ],
    });
  },
  Me = () => {
    let _0x1cf700 = (0, i.useDependency)(b);
    return (0, i.useObservable)(_0x1cf700.visible$, _0x1cf700.visible)
      ? (0, d.jsx)(je, {})
      : null;
  },
  Ne = {
    id: F.id,
    binding: i.KeyCode["P"] | i.MetaKeys["CTRL_COMMAND"],
    preconditions: s.whenSheetEditorFocused,
  };
let Q = class extends n.Disposable {
  constructor(
    _0x726825,
    _0x1f714e,
    _0x2b8b68,
    _0xae92ea,
    _0x42e782,
    _0x1738c7,
    _0x1a3519,
    _0x4efc70,
    _0x37f288,
    _0x3b7b80,
  ) {
    (super(),
      (this._printDialogService = _0x726825),
      (this._commandService = _0x1f714e),
      (this._sheetPrintManagerService = _0x2b8b68),
      (this._sheetPrintClientService = _0xae92ea),
      (this._menuManagerService = _0x42e782),
      (this._shortcutService = _0x1738c7),
      (this._injector = _0x1a3519),
      (this._univerInstanceService = _0x4efc70),
      (this._renderManagerService = _0x37f288),
      (this._uiPartsService = _0x3b7b80),
      this._initCommands(),
      this._initUIParts(),
      this._initMenus(),
      this._initShortcuts(),
      this._initCommandListener(),
      this._initConfigChangeListener(),
      this._initMutationListener());
  }
  _initCommands() {
    [F, I, L, W, R, K, q].forEach((_0xfb1567) =>
      this._commandService["registerCommand"](_0xfb1567),
    );
  }
  _initUIParts() {
    this.disposeWithMe(
      this._uiPartsService["registerComponent"](i.BuiltInUIPart["GLOBAL"], () =>
        (0, i.connectInjector)(Me, this._injector),
      ),
    );
  }
  _initShortcuts() {
    [Ne].forEach((_0x369c6f) => {
      this._shortcutService["registerShortcut"](_0x369c6f);
    });
  }
  _initMenus() {
    this._menuManagerService["mergeMenu"](ge);
  }
  _initConfigChangeListener() {
    this.disposeWithMe(
      this._printDialogService["visible$"].subscribe((_0x21e92f) => {
        _0x21e92f && this._sheetPrintManagerService["reLayout"]();
      }),
    );
  }
  _print() {
    let _0x55a6c2 = this._sheetPrintManagerService["layoutInfos"],
      _0x3724d2 = this._sheetPrintManagerService["renderConfig"];
    return this._sheetPrintClientService["print"](_0x55a6c2, _0x3724d2);
  }
  _initCommandListener() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x27c174) => {
        _0x27c174.id === L.id && this._print();
      }),
    );
  }
  _initMutationListener() {
    let _0x2fbd5a = this._injector["get"](G);
    (this.disposeWithMe(
      _0x2fbd5a.visible$["subscribe"](() => {
        let _0x2be3a2 = this._univerInstanceService["getCurrentUnitOfType"](2);
        if (_0x2be3a2) {
          let _0xd5310b = _0x2be3a2.getUnitId(),
            _0x5b9e25 =
              this._renderManagerService["getRenderUnitById"](_0xd5310b);
          if (_0x5b9e25) {
            var _0x473220;
            (_0x473220 = _0x5b9e25.mainComponent) == null ||
              _0x473220.makeDirty();
          }
        }
      }),
    ),
      this.disposeWithMe(
        this._sheetPrintManagerService["layoutConfig$"].subscribe(() => {
          if (!_0x2fbd5a.visible) return;
          this._sheetPrintManagerService["reLayout"]();
          let _0x596748 =
            this._univerInstanceService["getCurrentUnitOfType"](2);
          if (_0x596748) {
            let _0x4a4ede = _0x596748.getUnitId(),
              _0x5a98d1 =
                this._renderManagerService["getRenderUnitById"](_0x4a4ede);
            if (_0x5a98d1) {
              var _0x9cc7e2;
              (_0x9cc7e2 = _0x5a98d1.mainComponent) == null ||
                _0x9cc7e2.makeDirty();
            }
          }
        }),
      ),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x405145) => {
          if (
            !_0x2fbd5a.visible ||
            [F.id, I.id, L.id, R.id, K.id, q.id].includes(_0x405145.id)
          )
            return;
          this._sheetPrintManagerService["reLayout"]();
          let _0x223df0 =
            this._univerInstanceService["getCurrentUnitOfType"](2);
          if (_0x223df0) {
            let _0x294fb1 = _0x223df0.getUnitId(),
              _0x154152 =
                this._renderManagerService["getRenderUnitById"](_0x294fb1);
            if (_0x154152) {
              var _0x4875c9;
              (_0x4875c9 = _0x154152.mainComponent) == null ||
                _0x4875c9.makeDirty();
            }
          }
        }),
      ));
  }
};
Q = O(
  [
    D(0, b),
    D(1, n.ICommandService),
    D(2, k),
    D(3, (0, n.Inject)(U)),
    D(4, i.IMenuManagerService),
    D(5, i.IShortcutService),
    D(6, (0, n.Inject)(n.Injector)),
    D(7, n.IUniverInstanceService),
    D(8, o.IRenderManagerService),
    D(9, i.IUIPartsService),
  ],
  Q,
);
let $ = class extends n.Plugin {
  constructor(_0x18c699 = ye, _0x1e9fbb, _0x23e5ed, _0x26f268) {
    (super(),
      (this._config = _0x18c699),
      (this._injector = _0x1e9fbb),
      (this._configService = _0x23e5ed),
      (this._renderManagerService = _0x26f268));
    let { menu: _0x47a7ed, ..._0x79a149 } = (0, n.merge)({}, ye, this._config);
    (_0x47a7ed &&
      this._configService["setConfig"]("menu", _0x47a7ed, { merge: true }),
      this._configService["setConfig"]("sheets-print.config", _0x79a149));
  }
  onReady() {
    (this._injector["has"](t.IPrintPreparationService) ||
      this._injector["add"]([
        t.IPrintPreparationService,
        { useClass: t.PrintPreparationService },
      ]),
      (0, n.registerDependencies)(this._injector, [
        [k, { useClass: M }],
        [b, { useClass: x }],
        [G, { useClass: le }],
        [U],
        [J],
        [Q],
      ]),
      this.disposeWithMe(
        this._renderManagerService["registerRenderModule"](
          n.UniverInstanceType["UNIVER_SHEET"],
          [Y],
        ),
      ),
      (0, n.touchDependencies)(this._injector, [[J], [Q]]));
  }
};
(y($, "pluginName", "SHEET_PRINT_PLUGIN"),
  y($, "packageName", _e),
  y($, "version", ve),
  y($, "type", n.UniverInstanceType["UNIVER_SHEET"]),
  ($ = O(
    [
      (0, n.DependentOn)(
        e.UniverLicensePlugin,
        o.UniverRenderEnginePlugin,
        r.UniverSheetsPlugin,
        s.UniverSheetsUIPlugin,
      ),
      D(1, (0, n.Inject)(n.Injector)),
      D(2, n.IConfigService),
      D(3, o.IRenderManagerService),
    ],
    $,
  )),
  (exports.CancelSheetPrintOperation = I),
  (exports.ConfirmSheetPrintOperation = L),
  (exports.ISheetPrintManagerService = k),
  (exports.PrintArea = S),
  (exports.PrintFreeze = w),
  (exports.PrintHeaderFooter = C),
  (exports.PrintHeaderFooterSymbol = T),
  (exports.SheetPrintCanvasView = H),
  Object.defineProperty(exports, "SheetPrintClientService", {
    enumerable: true,
    get: function () {
      return U;
    },
  }),
  (exports.SheetPrintOpenOperation = F),
  (exports.SheetScreenShotOperation = W),
  (exports.SheetsPrintMenuSchema = ge),
  Object.defineProperty(exports, "UniverSheetsPrintPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.defaultHeaderFooter = E),
  (exports.hasPrintFacadePermission = P));
