Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/sheets-sparkline"),
  t = require("@univerjs/core"),
  n = require("@univerjs/sheets/facade"),
  r = require("@univerjs/core/facade"),
  i = require("@univerjs/sheets");
function a(_0x29b2a8, _0x2f6a09) {
  return function (_0x57f7a8, _0x5caa70) {
    _0x2f6a09(_0x57f7a8, _0x5caa70, _0x29b2a8);
  };
}
function o(_0x25037e, _0x2f95e4, _0x1def61, _0x36b269) {
  var _0x2d57e9 = arguments.length,
    _0x49630a =
      _0x2d57e9 < 3
        ? _0x2f95e4
        : _0x36b269 === null
          ? (_0x36b269 = Object.getOwnPropertyDescriptor(_0x2f95e4, _0x1def61))
          : _0x36b269,
    _0x522442;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x49630a = Reflect.decorate(_0x25037e, _0x2f95e4, _0x1def61, _0x36b269);
  else {
    for (var _0x41ec83 = _0x25037e.length - 1; _0x41ec83 >= 0; _0x41ec83--)
      (_0x522442 = _0x25037e[_0x41ec83]) &&
        (_0x49630a =
          (_0x2d57e9 < 3
            ? _0x522442(_0x49630a)
            : _0x2d57e9 > 3
              ? _0x522442(_0x2f95e4, _0x1def61, _0x49630a)
              : _0x522442(_0x2f95e4, _0x1def61)) || _0x49630a);
  }
  return (
    _0x2d57e9 > 3 &&
      _0x49630a &&
      Object.defineProperty(_0x2f95e4, _0x1def61, _0x49630a),
    _0x49630a
  );
}
let s = class {
  constructor(
    _0x14e03e,
    _0x25625e,
    _0x305210,
    _0x5138e1,
    _0x261586,
    _0x587afb,
  ) {
    ((this._unitId = _0x14e03e),
      (this._subUnitId = _0x25625e),
      (this._groupId = _0x305210),
      (this._row = _0x5138e1),
      (this._col = _0x261586),
      (this._injector = _0x587afb));
  }
  changeDataSource(_0x1028ef, _0x18a59f) {
    let _0x53443c = this._injector["get"](e.SparklineDataSourceModel),
      _0xe1fc6e = this._injector["get"](t.ICommandService),
      _0x277fa4 = _0x53443c.getSparklineById(
        this._unitId,
        this._subUnitId,
        this._groupId,
      );
    if (!_0x277fa4) return;
    let _0x48bb23 = {
      config: _0x277fa4,
      isChangeDataSource: true,
      changeDataSourceInfo: {
        groupId: this._groupId,
        resetType: "item",
        sourceRanges: [_0x1028ef],
        targetRanges: [_0x18a59f],
        primary: {
          startRow: this._row,
          startColumn: this._col,
          endRow: this._row,
          endColumn: this._col,
          actualRow: this._row,
          actualColumn: this._col,
          isMerged: false,
          isMergedMainCell: false,
        },
      },
    };
    return (
      _0xe1fc6e.syncExecuteCommand(e.SetSheetSparklineCommand["id"], _0x48bb23),
      (this._row = _0x18a59f.startRow),
      (this._col = _0x18a59f.startColumn),
      this
    );
  }
  removeSparkline() {
    let _0x573aad = this._injector["get"](t.ICommandService),
      _0x17b63a = {
        isSingle: true,
        ranges: [
          {
            startRow: this._row,
            startColumn: this._col,
            endRow: this._row,
            endColumn: this._col,
          },
        ],
      };
    _0x573aad.syncExecuteCommand(
      e.RemoveSheetSparklineCommand["id"],
      _0x17b63a,
    );
  }
};
s = o([a(5, (0, t.Inject)(t.Injector))], s);
let c = class {
  constructor(
    _0x303e2b,
    _0x5aa1b3,
    _0x3eb6fb,
    _0x2224bb,
    _0x39730d,
    _0x56d1fe,
  ) {
    ((this._unitId = _0x303e2b),
      (this._subUnitId = _0x5aa1b3),
      (this._groupId = _0x3eb6fb),
      (this._row = _0x2224bb),
      (this._col = _0x39730d),
      (this._injector = _0x56d1fe));
  }
  changeDataSource(_0x8a258f, _0x7e0cc) {
    let _0x5c03b5 = this._injector["get"](e.SparklineDataSourceModel),
      _0x53aedc = this._injector["get"](t.ICommandService),
      _0x48d372 = _0x5c03b5.getSparklineById(
        this._unitId,
        this._subUnitId,
        this._groupId,
      );
    if (!_0x48d372) return;
    let _0x1095eb = {
      config: _0x48d372,
      isChangeDataSource: true,
      changeDataSourceInfo: {
        groupId: this._groupId,
        resetType: "group",
        sourceRanges: _0x8a258f,
        targetRanges: _0x7e0cc,
        primary: {
          startRow: this._row,
          startColumn: this._col,
          endRow: this._row,
          endColumn: this._col,
          actualRow: this._row,
          actualColumn: this._col,
          isMerged: false,
          isMergedMainCell: false,
        },
      },
    };
    return (
      _0x53aedc.syncExecuteCommand(e.SetSheetSparklineCommand["id"], _0x1095eb),
      (this._row = _0x7e0cc[0].startRow),
      (this._col = _0x7e0cc[0].startColumn),
      this
    );
  }
  removeSparklineGroup() {
    let _0x1ac9e5 = this._injector["get"](t.ICommandService),
      _0x1b1e40 = {
        isSingle: false,
        ranges: [
          {
            startRow: this._row,
            startColumn: this._col,
            endRow: this._row,
            endColumn: this._col,
          },
        ],
      };
    _0x1ac9e5.syncExecuteCommand(
      e.RemoveSheetSparklineCommand["id"],
      _0x1b1e40,
    );
  }
  setConfig(_0x1f57c1) {
    let _0x4eceda = this._injector["get"](
      e.SparklineDataSourceModel,
    ).getSparklineById(this._unitId, this._subUnitId, this._groupId);
    if (_0x4eceda) {
      let _0x18a035 = {
        config: { config: _0x1f57c1, sparklines: _0x4eceda.sparklines },
        isChangeDataSource: false,
      };
      this._injector["get"](t.ICommandService).syncExecuteCommand(
        e.SetSheetSparklineCommand["id"],
        _0x18a035,
      );
    }
    return this;
  }
};
c = o([a(5, (0, t.Inject)(t.Injector))], c);
var l = class extends n.FWorksheet {
  addSparkline(_0x448497, _0x55d9b3, _0x2a1338) {
    if (
      this._commandService["syncExecuteCommand"](
        e.AddSheetSparklineCommand["id"],
        {
          sourceRanges: _0x448497,
          targetRanges: _0x55d9b3,
          targetInfo: {
            unitId: this._workbook["getUnitId"](),
            subUnitId: this._worksheet["getSheetId"](),
          },
          config: { type: _0x2a1338 },
        },
      )
    ) {
      let { startRow: _0x5d03cd, startColumn: _0x2ad53c } = _0x55d9b3[0];
      return this.getSparklineByCell(_0x5d03cd, _0x2ad53c);
    }
  }
  getAllSubSparkline() {
    return this._injector["get"](
      e.SparklineDataSourceModel,
    ).getSubUnitSparkline(
      this._workbook["getUnitId"](),
      this._worksheet["getSheetId"](),
    );
  }
  composeSparkline(_0x231147) {
    let _0x54e6ad = this._injector["get"](e.SparklineDataSourceModel),
      _0x3c222d;
    for (let _0xb93125 = 0; _0xb93125 < _0x231147.length; _0xb93125++) {
      let {
        startRow: _0x43fa35,
        endRow: _0x5962ad,
        startColumn: _0x2d1ce4,
        endColumn: _0x491e15,
      } = _0x231147[_0xb93125];
      for (let _0x100ef4 = _0x43fa35; _0x100ef4 <= _0x5962ad; _0x100ef4++)
        for (let _0x3f72f1 = _0x2d1ce4; _0x3f72f1 <= _0x491e15; _0x3f72f1++) {
          let _0x5673c4 = _0x54e6ad.getSparkline(
            this._workbook["getUnitId"](),
            this._worksheet["getSheetId"](),
            _0x100ef4,
            _0x3f72f1,
          );
          if (_0x5673c4) {
            let _0x14f956 = _0x54e6ad.getSparklineById(
              this._workbook["getUnitId"](),
              this._worksheet["getSheetId"](),
              _0x5673c4,
            );
            if (_0x14f956) {
              _0x3c222d = t.Tools["deepClone"](_0x14f956);
              break;
            }
          }
        }
    }
    _0x3c222d &&
      this._commandService["executeCommand"](e.SetSheetSparklineCommand["id"], {
        ranges: _0x231147,
        combine: true,
        config: _0x3c222d,
        isChangeDataSource: false,
      });
  }
  unComposeSparkline(_0x422aa6) {
    let _0x47705a = this._injector["get"](e.SparklineDataSourceModel),
      _0x491f0b;
    for (let _0x4ef386 = 0; _0x4ef386 < _0x422aa6.length; _0x4ef386++) {
      let {
        startRow: _0x404103,
        endRow: _0xea408d,
        startColumn: _0x47a8ae,
        endColumn: _0x10d918,
      } = _0x422aa6[_0x4ef386];
      for (let _0x18c4d9 = _0x404103; _0x18c4d9 <= _0xea408d; _0x18c4d9++)
        for (let _0x5b805c = _0x47a8ae; _0x5b805c <= _0x10d918; _0x5b805c++) {
          let _0x2b9723 = _0x47705a.getSparkline(
            this._workbook["getUnitId"](),
            this._worksheet["getSheetId"](),
            _0x18c4d9,
            _0x5b805c,
          );
          if (_0x2b9723) {
            let _0x415aa9 = _0x47705a.getSparklineById(
              this._workbook["getUnitId"](),
              this._worksheet["getSheetId"](),
              _0x2b9723,
            );
            if (_0x415aa9) {
              _0x491f0b = t.Tools["deepClone"](_0x415aa9);
              break;
            }
          }
        }
    }
    _0x491f0b ||
      this._commandService["executeCommand"](e.SetSheetSparklineCommand["id"], {
        ranges: _0x422aa6,
        unCombine: true,
        config: _0x491f0b,
        isChangeDataSource: false,
      });
  }
  getSparklineByCell(_0x1556a8, _0x414762) {
    let _0x13ceb6 = this._injector["get"](e.SparklineDataSourceModel),
      _0x42efa1 = this._workbook["getUnitId"](),
      _0xc39b0a = this._worksheet["getSheetId"](),
      _0x27612a = _0x13ceb6.getSparkline(
        _0x42efa1,
        _0xc39b0a,
        _0x1556a8,
        _0x414762,
      );
    if (_0x27612a)
      return this._injector["createInstance"](
        s,
        _0x42efa1,
        _0xc39b0a,
        _0x27612a,
        _0x1556a8,
        _0x414762,
      );
  }
  getSparklineGroupByCell(_0x49c266, _0x266fac) {
    let _0x5053e5 = this._injector["get"](e.SparklineDataSourceModel),
      _0x4f2610 = this._workbook["getUnitId"](),
      _0x16e724 = this._worksheet["getSheetId"](),
      _0x4b3b1c = _0x5053e5.getSparkline(
        _0x4f2610,
        _0x16e724,
        _0x49c266,
        _0x266fac,
      );
    if (_0x4b3b1c)
      return this._injector["createInstance"](
        c,
        _0x4f2610,
        _0x16e724,
        _0x4b3b1c,
        _0x49c266,
        _0x266fac,
      );
  }
};
n.FWorksheet["extend"](l);
var u = class extends r.FEnum {
  get SparklineTypeEnum() {
    return e.SparklineTypeEnum;
  }
};
r.FEnum["extend"](u);
var d = class extends r.FEventName {
  get SheetSparklineChanged() {
    return "SheetSparklineChanged";
  }
};
r.FEventName["extend"](d);
var f = class extends r.FUniver {
  _initialize(_0x277d40) {
    let _0x18a3f0 = _0x277d40.get(t.ICommandService);
    this.disposeWithMe(
      this.registerEventHandler(this.Event["SheetSparklineChanged"], () =>
        _0x18a3f0.onCommandExecuted((_0x503d55) => {
          if (_0x503d55.id === e.SetSheetSparklineCommand["id"]) {
            let _0x445c75 = _0x503d55.params;
            if (!_0x445c75.isChangeDataSource) {
              var _0xeadc5b;
              let _0x429c60 = this.getActiveWorkbook(),
                _0x2b0d76 =
                  _0x429c60 == null ? undefined : _0x429c60.getActiveSheet();
              if (!_0x429c60 || !_0x2b0d76) return;
              let _0x54d2fe = _0x429c60.getId(),
                _0xab0115 = _0x2b0d76.getSheetId(),
                _0x235987 = this._injector["get"](i.SheetsSelectionsService),
                _0x5372d2 = this._injector["get"](e.SparklineDataSourceModel),
                _0x3ea452 =
                  (_0x445c75 == null ? undefined : _0x445c75.ranges) ??
                  _0x235987
                    .getCurrentSelections()
                    .map((_0x32fa4e) => _0x32fa4e.range),
                _0x3bd2cf =
                  (_0xeadc5b = _0x5372d2
                    .getSparklineCache()
                    .sparklineAnchorMap["get"](_0x54d2fe)) == null
                    ? undefined
                    : _0xeadc5b.get(_0xab0115),
                _0xf0535e = new Set();
              _0x3ea452.forEach((_0x1f1c4b) => {
                let {
                  startRow: _0x3386d2,
                  endRow: _0x3d1133,
                  startColumn: _0x39b74c,
                  endColumn: _0x49ad4e,
                } = _0x1f1c4b;
                for (
                  let _0x4977c1 = _0x3386d2;
                  _0x4977c1 <= _0x3d1133;
                  _0x4977c1++
                )
                  for (
                    let _0x213a1b = _0x39b74c;
                    _0x213a1b <= _0x49ad4e;
                    _0x213a1b++
                  ) {
                    var _0xfb4a38;
                    let _0x4dc31a =
                      _0x3bd2cf == null ||
                      (_0xfb4a38 = _0x3bd2cf.matrix["getValue"](
                        _0x4977c1,
                        _0x213a1b,
                      )) == null
                        ? undefined
                        : _0xfb4a38.groupId;
                    _0x4dc31a && _0xf0535e.add(_0x4dc31a);
                  }
              });
              let _0x4f673c = {
                workbook: _0x429c60,
                worksheet: _0x2b0d76,
                sparklines: Array.from(_0xf0535e)
                  .map((_0x4e8df8) =>
                    _0x5372d2.getSparklineById(_0x54d2fe, _0xab0115, _0x4e8df8),
                  )
                  .filter((_0x37dabb) => !!_0x37dabb),
              };
              if (
                (this.fireEvent(this.Event["SheetSparklineChanged"], _0x4f673c),
                _0x4f673c.cancel)
              )
                throw Error("Sheet create canceled by facade api.");
            }
          }
        }),
      ),
    );
  }
};
(r.FUniver["extend"](f),
  Object.defineProperty(exports, "FSparkline", {
    enumerable: true,
    get: function () {
      return s;
    },
  }),
  Object.defineProperty(exports, "FSparklineGroup", {
    enumerable: true,
    get: function () {
      return c;
    },
  }));
