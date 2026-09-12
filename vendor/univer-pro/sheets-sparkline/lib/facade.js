import {
  AddSheetSparklineCommand as _0xe9f27d,
  RemoveSheetSparklineCommand as _0x1cfd6d,
  SetSheetSparklineCommand as _0x3c5ebb,
  SparklineDataSourceModel as _0x40b200,
  SparklineTypeEnum as _0x36e768,
} from "@univerjs-pro/sheets-sparkline";
import {
  ICommandService as _0x44908a,
  Inject as _0x289462,
  Injector as _0xdd16ec,
  Tools as _0xd5ee3b,
} from "@univerjs/core";
import { FWorksheet as _0x1ecd87 } from "@univerjs/sheets/facade";
import {
  FEnum as _0x24d0bb,
  FEventName as _0x2ac062,
  FUniver as _0x501ef1,
} from "@univerjs/core/facade";
import { SheetsSelectionsService as _0x48ca92 } from "@univerjs/sheets";
function m(_0x146d87, _0x5cfe77) {
  return function (_0x246410, _0x5381a1) {
    _0x5cfe77(_0x246410, _0x5381a1, _0x146d87);
  };
}
function h(_0x5d9d54, _0x5617d6, _0x2e1cc9, _0x52c8a1) {
  var _0x27ba64 = arguments.length,
    _0x177389 =
      _0x27ba64 < 3
        ? _0x5617d6
        : _0x52c8a1 === null
          ? (_0x52c8a1 = Object.getOwnPropertyDescriptor(_0x5617d6, _0x2e1cc9))
          : _0x52c8a1,
    _0x1214de;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x177389 = Reflect.decorate(_0x5d9d54, _0x5617d6, _0x2e1cc9, _0x52c8a1);
  else {
    for (var _0x59c1a8 = _0x5d9d54.length - 1; _0x59c1a8 >= 0; _0x59c1a8--)
      (_0x1214de = _0x5d9d54[_0x59c1a8]) &&
        (_0x177389 =
          (_0x27ba64 < 3
            ? _0x1214de(_0x177389)
            : _0x27ba64 > 3
              ? _0x1214de(_0x5617d6, _0x2e1cc9, _0x177389)
              : _0x1214de(_0x5617d6, _0x2e1cc9)) || _0x177389);
  }
  return (
    _0x27ba64 > 3 &&
      _0x177389 &&
      Object.defineProperty(_0x5617d6, _0x2e1cc9, _0x177389),
    _0x177389
  );
}
let g = class {
  constructor(
    _0x4c2abb,
    _0x500c4a,
    _0x184475,
    _0x160ace,
    _0x3a15f9,
    _0x2e8551,
  ) {
    ((this._unitId = _0x4c2abb),
      (this._subUnitId = _0x500c4a),
      (this._groupId = _0x184475),
      (this._row = _0x160ace),
      (this._col = _0x3a15f9),
      (this._injector = _0x2e8551));
  }
  changeDataSource(_0x93c320, _0x66f22) {
    let _0x362f41 = this._injector["get"](_0x40b200),
      _0x4edf03 = this._injector["get"](_0x44908a),
      _0x39af37 = _0x362f41.getSparklineById(
        this._unitId,
        this._subUnitId,
        this._groupId,
      );
    if (!_0x39af37) return;
    let _0x58cf3b = {
      config: _0x39af37,
      isChangeDataSource: true,
      changeDataSourceInfo: {
        groupId: this._groupId,
        resetType: "item",
        sourceRanges: [_0x93c320],
        targetRanges: [_0x66f22],
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
      _0x4edf03.syncExecuteCommand(_0x3c5ebb.id, _0x58cf3b),
      (this._row = _0x66f22.startRow),
      (this._col = _0x66f22.startColumn),
      this
    );
  }
  removeSparkline() {
    let _0x101a60 = this._injector["get"](_0x44908a),
      _0xbf6ae4 = {
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
    _0x101a60.syncExecuteCommand(_0x1cfd6d.id, _0xbf6ae4);
  }
};
g = h([m(5, _0x289462(_0xdd16ec))], g);
let _ = class {
  constructor(
    _0x42bcb7,
    _0x71b459,
    _0x142062,
    _0x37332e,
    _0x14d5ab,
    _0x4638c6,
  ) {
    ((this._unitId = _0x42bcb7),
      (this._subUnitId = _0x71b459),
      (this._groupId = _0x142062),
      (this._row = _0x37332e),
      (this._col = _0x14d5ab),
      (this._injector = _0x4638c6));
  }
  changeDataSource(_0xa35a2a, _0x39d81b) {
    let _0x3f1baa = this._injector["get"](_0x40b200),
      _0x1c8fa8 = this._injector["get"](_0x44908a),
      _0x361c81 = _0x3f1baa.getSparklineById(
        this._unitId,
        this._subUnitId,
        this._groupId,
      );
    if (!_0x361c81) return;
    let _0x205b14 = {
      config: _0x361c81,
      isChangeDataSource: true,
      changeDataSourceInfo: {
        groupId: this._groupId,
        resetType: "group",
        sourceRanges: _0xa35a2a,
        targetRanges: _0x39d81b,
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
      _0x1c8fa8.syncExecuteCommand(_0x3c5ebb.id, _0x205b14),
      (this._row = _0x39d81b[0].startRow),
      (this._col = _0x39d81b[0].startColumn),
      this
    );
  }
  removeSparklineGroup() {
    let _0xecc3b1 = this._injector["get"](_0x44908a),
      _0x1ccfb8 = {
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
    _0xecc3b1.syncExecuteCommand(_0x1cfd6d.id, _0x1ccfb8);
  }
  setConfig(_0x126a97) {
    let _0x3c3d21 = this._injector["get"](_0x40b200).getSparklineById(
      this._unitId,
      this._subUnitId,
      this._groupId,
    );
    if (_0x3c3d21) {
      let _0x537422 = {
        config: { config: _0x126a97, sparklines: _0x3c3d21.sparklines },
        isChangeDataSource: false,
      };
      this._injector["get"](_0x44908a).syncExecuteCommand(
        _0x3c5ebb.id,
        _0x537422,
      );
    }
    return this;
  }
};
_ = h([m(5, _0x289462(_0xdd16ec))], _);
var v = class extends _0x1ecd87 {
  addSparkline(_0x1f05dc, _0x3db060, _0xbea624) {
    if (
      this._commandService["syncExecuteCommand"](_0xe9f27d.id, {
        sourceRanges: _0x1f05dc,
        targetRanges: _0x3db060,
        targetInfo: {
          unitId: this._workbook["getUnitId"](),
          subUnitId: this._worksheet["getSheetId"](),
        },
        config: { type: _0xbea624 },
      })
    ) {
      let { startRow: _0x494d87, startColumn: _0x543c4b } = _0x3db060[0];
      return this.getSparklineByCell(_0x494d87, _0x543c4b);
    }
  }
  getAllSubSparkline() {
    return this._injector["get"](_0x40b200).getSubUnitSparkline(
      this._workbook["getUnitId"](),
      this._worksheet["getSheetId"](),
    );
  }
  composeSparkline(_0x105d12) {
    let _0x8b5010 = this._injector["get"](_0x40b200),
      _0xf7082e;
    for (let _0x5a3768 = 0; _0x5a3768 < _0x105d12.length; _0x5a3768++) {
      let {
        startRow: _0x5a1bc9,
        endRow: _0x957527,
        startColumn: _0x12e70a,
        endColumn: _0x2cbe3f,
      } = _0x105d12[_0x5a3768];
      for (let _0x41c4fd = _0x5a1bc9; _0x41c4fd <= _0x957527; _0x41c4fd++)
        for (let _0x36d6aa = _0x12e70a; _0x36d6aa <= _0x2cbe3f; _0x36d6aa++) {
          let _0x288972 = _0x8b5010.getSparkline(
            this._workbook["getUnitId"](),
            this._worksheet["getSheetId"](),
            _0x41c4fd,
            _0x36d6aa,
          );
          if (_0x288972) {
            let _0x3a8e29 = _0x8b5010.getSparklineById(
              this._workbook["getUnitId"](),
              this._worksheet["getSheetId"](),
              _0x288972,
            );
            if (_0x3a8e29) {
              _0xf7082e = _0xd5ee3b.deepClone(_0x3a8e29);
              break;
            }
          }
        }
    }
    _0xf7082e &&
      this._commandService["executeCommand"](_0x3c5ebb.id, {
        ranges: _0x105d12,
        combine: true,
        config: _0xf7082e,
        isChangeDataSource: false,
      });
  }
  unComposeSparkline(_0x3b332d) {
    let _0x535710 = this._injector["get"](_0x40b200),
      _0x4c2a9c;
    for (let _0x3826f7 = 0; _0x3826f7 < _0x3b332d.length; _0x3826f7++) {
      let {
        startRow: _0x4a700f,
        endRow: _0x40cda6,
        startColumn: _0x4bdceb,
        endColumn: _0x5081a8,
      } = _0x3b332d[_0x3826f7];
      for (let _0x538566 = _0x4a700f; _0x538566 <= _0x40cda6; _0x538566++)
        for (let _0x2889d6 = _0x4bdceb; _0x2889d6 <= _0x5081a8; _0x2889d6++) {
          let _0x479170 = _0x535710.getSparkline(
            this._workbook["getUnitId"](),
            this._worksheet["getSheetId"](),
            _0x538566,
            _0x2889d6,
          );
          if (_0x479170) {
            let _0x86dfd0 = _0x535710.getSparklineById(
              this._workbook["getUnitId"](),
              this._worksheet["getSheetId"](),
              _0x479170,
            );
            if (_0x86dfd0) {
              _0x4c2a9c = _0xd5ee3b.deepClone(_0x86dfd0);
              break;
            }
          }
        }
    }
    _0x4c2a9c ||
      this._commandService["executeCommand"](_0x3c5ebb.id, {
        ranges: _0x3b332d,
        unCombine: true,
        config: _0x4c2a9c,
        isChangeDataSource: false,
      });
  }
  getSparklineByCell(_0x417678, _0x4276be) {
    let _0x4c5567 = this._injector["get"](_0x40b200),
      _0xca8125 = this._workbook["getUnitId"](),
      _0x3e5d6f = this._worksheet["getSheetId"](),
      _0x2e1b60 = _0x4c5567.getSparkline(
        _0xca8125,
        _0x3e5d6f,
        _0x417678,
        _0x4276be,
      );
    if (_0x2e1b60)
      return this._injector["createInstance"](
        g,
        _0xca8125,
        _0x3e5d6f,
        _0x2e1b60,
        _0x417678,
        _0x4276be,
      );
  }
  getSparklineGroupByCell(_0x16a11, _0x1950a2) {
    let _0x1e2d6b = this._injector["get"](_0x40b200),
      _0x926808 = this._workbook["getUnitId"](),
      _0x3c4a1f = this._worksheet["getSheetId"](),
      _0x1d2ace = _0x1e2d6b.getSparkline(
        _0x926808,
        _0x3c4a1f,
        _0x16a11,
        _0x1950a2,
      );
    if (_0x1d2ace)
      return this._injector["createInstance"](
        _,
        _0x926808,
        _0x3c4a1f,
        _0x1d2ace,
        _0x16a11,
        _0x1950a2,
      );
  }
};
_0x1ecd87.extend(v);
var y = class extends _0x24d0bb {
  get SparklineTypeEnum() {
    return _0x36e768;
  }
};
_0x24d0bb.extend(y);
var b = class extends _0x2ac062 {
  get SheetSparklineChanged() {
    return "SheetSparklineChanged";
  }
};
_0x2ac062.extend(b);
var x = class extends _0x501ef1 {
  _initialize(_0x4e86e9) {
    let _0x47eb52 = _0x4e86e9.get(_0x44908a);
    this.disposeWithMe(
      this.registerEventHandler(this.Event["SheetSparklineChanged"], () =>
        _0x47eb52.onCommandExecuted((_0x79c380) => {
          if (_0x79c380.id === _0x3c5ebb.id) {
            let _0x7577cb = _0x79c380.params;
            if (!_0x7577cb.isChangeDataSource) {
              var _0x3dfb74;
              let _0x13fbbf = this.getActiveWorkbook(),
                _0x3359ef =
                  _0x13fbbf == null ? undefined : _0x13fbbf.getActiveSheet();
              if (!_0x13fbbf || !_0x3359ef) return;
              let _0x1d288e = _0x13fbbf.getId(),
                _0x57e9ef = _0x3359ef.getSheetId(),
                _0x3b324f = this._injector["get"](_0x48ca92),
                _0x457033 = this._injector["get"](_0x40b200),
                _0x41976d =
                  (_0x7577cb == null ? undefined : _0x7577cb.ranges) ??
                  _0x3b324f
                    .getCurrentSelections()
                    .map((_0xed8dc6) => _0xed8dc6.range),
                _0x4b6a0d =
                  (_0x3dfb74 = _0x457033
                    .getSparklineCache()
                    .sparklineAnchorMap["get"](_0x1d288e)) == null
                    ? undefined
                    : _0x3dfb74.get(_0x57e9ef),
                _0x2f9259 = new Set();
              _0x41976d.forEach((_0x413cd3) => {
                let {
                  startRow: _0x1b12e5,
                  endRow: _0x1593db,
                  startColumn: _0x230948,
                  endColumn: _0xd70bca,
                } = _0x413cd3;
                for (
                  let _0x492b5a = _0x1b12e5;
                  _0x492b5a <= _0x1593db;
                  _0x492b5a++
                )
                  for (
                    let _0x3f8cc7 = _0x230948;
                    _0x3f8cc7 <= _0xd70bca;
                    _0x3f8cc7++
                  ) {
                    var _0xcb542e;
                    let _0x2b9db1 =
                      _0x4b6a0d == null ||
                      (_0xcb542e = _0x4b6a0d.matrix["getValue"](
                        _0x492b5a,
                        _0x3f8cc7,
                      )) == null
                        ? undefined
                        : _0xcb542e.groupId;
                    _0x2b9db1 && _0x2f9259.add(_0x2b9db1);
                  }
              });
              let _0x487ce0 = {
                workbook: _0x13fbbf,
                worksheet: _0x3359ef,
                sparklines: Array.from(_0x2f9259)
                  .map((_0xc139da) =>
                    _0x457033.getSparklineById(_0x1d288e, _0x57e9ef, _0xc139da),
                  )
                  .filter((_0x4f5f1f) => !!_0x4f5f1f),
              };
              if (
                (this.fireEvent(this.Event["SheetSparklineChanged"], _0x487ce0),
                _0x487ce0.cancel)
              )
                throw Error("Sheet create canceled by facade api.");
            }
          }
        }),
      ),
    );
  }
};
_0x501ef1.extend(x);
export { g as FSparkline, _ as FSparklineGroup };
