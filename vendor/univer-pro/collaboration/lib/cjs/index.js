Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
 t = require("@univerjs-pro/bases"),
 n = require("@univerjs-pro/boards"),
 r = require("@univerjs-pro/boards-mind"),
 i = require("@univerjs-pro/boards-table"),
 a = require("@univerjs/docs"),
 o = require("@univerjs/sheets"),
 s = require("@univerjs-pro/pdfs"),
 c = require("@univerjs/thread-comment"),
 l = require("@univerjs/sheets-conditional-formatting"),
 u = require("@univerjs/data-validation"),
 d = require("@univerjs/sheets-hyper-link"),
 f = require("@univerjs/sheets-filter"),
 p = require("@univerjs-pro/sheets-outline"),
 m = require("@univerjs/engine-formula"),
 h = require("@univerjs/sheets-drawing"),
 g = require("@univerjs-pro/slides"),
 _ = require("@univerjs-pro/slides-chart"),
 v = require("@univerjs-pro/slides-table"),
 ee = require("@univerjs-pro/license"),
 te = require("rxjs"),
 y = require("@univerjs/protocol"),
 b = require("uuid");
const ne = {
 id: "univer.mutation.create-unit",
 type: e.CommandType["MUTATION"],
 handler: () => true,
 },
 x = {
 id: "univer.mutation.revert-version",
 type: e.CommandType["MUTATION"],
 handler: () => true,
 };
function re(_0x6f982a) {
 return !!_0x6f982a.error;
}
function S(_0x5b44f8) {
 return !re(_0x5b44f8);
}
function ie(_0x148f9f) {
 return !!_0x148f9f.error;
}
function ae(_0x2fee00) {
 return !!_0x2fee00.error;
}
function oe(_0x1f4b67) {
 return !ae(_0x1f4b67);
}
function se(_0x1f0ebe) {
 return !!_0x1f0ebe.error;
}
function ce(_0x263c98) {
 return !se(_0x263c98);
}
function le(_0x58578f) {
 return !!_0x58578f.error;
}
function ue(_0x35a5aa) {
 return !le(_0x35a5aa);
}
function de(_0x306b11) {
 "@babel/helpers - typeof";
 return (
 (de =
 typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
 ? function (_0x3b6fb2) {
 return typeof _0x3b6fb2;
 }
 : function (_0x5ed153) {
 return _0x5ed153 &&
 typeof Symbol == "function" &&
 _0x5ed153.constructor === Symbol &&
 _0x5ed153 !== Symbol.prototype
 ? "symbol"
 : typeof _0x5ed153;
 }),
 de(_0x306b11)
 );
}
function fe(_0x1ebc0c, _0x33fd26) {
 if (de(_0x1ebc0c) != "object" || !_0x1ebc0c) return _0x1ebc0c;
 var _0x396e06 = _0x1ebc0c[Symbol.toPrimitive];
 if (_0x396e06 !== undefined) {
 var _0x53e52b = _0x396e06.call(_0x1ebc0c, _0x33fd26 || "default");
 if (de(_0x53e52b) != "object") return _0x53e52b;
 throw TypeError("@@toPrimitive must return a primitive value.");
 }
 return (_0x33fd26 === "string" ? String : Number)(_0x1ebc0c);
}
function pe(_0xf29c9) {
 var _0x1403cb = fe(_0xf29c9, "string");
 return de(_0x1403cb) == "symbol" ? _0x1403cb : _0x1403cb + "";
}
function C(_0x2828cc, _0x121db4, _0x511865) {
 return (
 (_0x121db4 = pe(_0x121db4)) in _0x2828cc
 ? Object.defineProperty(_0x2828cc, _0x121db4, {
 value: _0x511865,
 enumerable: true,
 configurable: true,
 writable: true,
 })
 : (_0x2828cc[_0x121db4] = _0x511865),
 _0x2828cc
 );
}
function w(_0x2658df, _0x1a095b) {
 return function (_0x5374e3, _0x3c3ddd) {
 _0x1a095b(_0x5374e3, _0x3c3ddd, _0x2658df);
 };
}
function T(_0x3d582c, _0x223e1b, _0x8feac2, _0x283399) {
 var _0x55ddf7 = arguments.length,
 _0x42a5c2 =
 _0x55ddf7 < 3
 ? _0x223e1b
 : _0x283399 === null
 ? (_0x283399 = Object.getOwnPropertyDescriptor(_0x223e1b, _0x8feac2))
 : _0x283399,
 _0x205395;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 _0x42a5c2 = Reflect.decorate(_0x3d582c, _0x223e1b, _0x8feac2, _0x283399);
 else {
 for (var _0x214c32 = _0x3d582c.length - 1; _0x214c32 >= 0; _0x214c32--)
 (_0x205395 = _0x3d582c[_0x214c32]) &&
 (_0x42a5c2 =
 (_0x55ddf7 < 3
 ? _0x205395(_0x42a5c2)
 : _0x55ddf7 > 3
 ? _0x205395(_0x223e1b, _0x8feac2, _0x42a5c2)
 : _0x205395(_0x223e1b, _0x8feac2)) || _0x42a5c2);
 }
 return (
 _0x55ddf7 > 3 &&
 _0x42a5c2 &&
 Object.defineProperty(_0x223e1b, _0x8feac2, _0x42a5c2),
 _0x42a5c2
 );
}
const E = (0, e.createIdentifier)("univer-pro.collaboration.transform-service");
let me = class extends e.Disposable {
 constructor(_0x1e8fdc) {
 (super(),
 (this._logService = _0x1e8fdc),
 C(this, "_transformMap", new Map()),
 C(this, "_loopLimitTime", 3000),
 C(this, "_transformMutationsCache", new Map()));
 }
 dispose() {
 (this._transformMap["clear"](), this._transformMutationsCache["clear"]());
 }
 registerTransformAlgorithm(_0x22c8a8) {
 let { m1: _0x5287a4, m2: _0x171cee = "any" } = _0x22c8a8;
 this._transformMap["has"](_0x5287a4) ||
 this._transformMap["set"](_0x5287a4, new Map());
 let _0x454a1b = this._transformMap["get"](_0x5287a4);
 if (_0x454a1b.has(_0x171cee))
 throw Error(
 "[TransformService] Transform algorithm for " +
 _0x5287a4 +
 "\x20and\x20" +
 _0x171cee +
 " already exists.",
 );
 _0x454a1b.set(_0x171cee, _0x22c8a8);
 }
 transformMutation(_0x564174, _0x416651, _0x5ed36f) {
 var _0xbe43fb, _0x262420, _0x7af641, _0x995190, _0x539817, _0x4bbf91;
 let _0x5a1754 = this._transformMap,
 _0x31e4f2 =
 ((_0xbe43fb = _0x5a1754.get(_0x564174.id)) == null
 ? undefined
 : _0xbe43fb.get(_0x416651.id)) ||
 ((_0x262420 = _0x5a1754.get(_0x564174.id)) == null
 ? undefined
 : _0x262420.get("any")) ||
 ((_0x7af641 = _0x5a1754.get("any")) == null
 ? undefined
 : _0x7af641.get(_0x416651.id));
 if (_0x31e4f2)
 return _0x5ed36f
 ? _0x31e4f2.handler(_0x564174, _0x416651, _0x5ed36f)
 : _0x31e4f2.handler(_0x564174, _0x416651);
 let _0xe5722f =
 ((_0x995190 = _0x5a1754.get(_0x416651.id)) == null
 ? undefined
 : _0x995190.get(_0x564174.id)) ||
 ((_0x539817 = _0x5a1754.get(_0x416651.id)) == null
 ? undefined
 : _0x539817.get("any")) ||
 ((_0x4bbf91 = _0x5a1754.get("any")) == null
 ? undefined
 : _0x4bbf91.get(_0x564174.id));
 if (_0xe5722f) {
 let _0x4df9ba = _0x5ed36f
 ? _0xe5722f.handler(_0x416651, _0x564174, _0x5ed36f)
 : _0xe5722f.handler(_0x416651, _0x564174);
 return S(_0x4df9ba)
 ? _0x5ed36f
 ? { m2Prime: _0x4df9ba.m1Prime }
 : { m2Prime: _0x4df9ba.m1Prime, m1Prime: _0x4df9ba.m2Prime }
 : _0x4df9ba;
 }
 return { m1Prime: _0x564174, m2Prime: _0x416651 };
 }
 transformMutations(_0x22ec56, _0x213148, _0xe175e) {
 (this._transformMutationsCache["set"]("m1", _0x22ec56),
 this._transformMutationsCache["set"]("m2", _0x213148));
 let _0x531e49 = Date.now(),
 _0x2edf31 = this._rightInclineTransformMutations(
 _0x22ec56,
 _0x213148,
 _0x531e49,
 );
 if (ie(_0x2edf31)) return _0x2edf31;
 if (_0xe175e) return { m2Prime: _0x2edf31 };
 let _0x5c9fc2 = this._leftInclineTransformMutations(
 _0x22ec56,
 _0x213148,
 _0x531e49,
 );
 return ie(_0x5c9fc2)
 ? _0x5c9fc2
 : (this._transformMutationsCache["clear"](),
 { m1Prime: _0x5c9fc2, m2Prime: _0x2edf31 });
 }
 _rightInclineTransformMutations(_0x105d2a, _0x5f34a0, _0x1e3c93) {
 Date.now() === _0x1e3c93 &&
 (this._logService["debug"](
 "[debug] _rightInclineTransformMutations start transforming mutations. Date now: " +
 new Date().toISOString(),
 ),
 this._logService["debug"]("[debug] m1Length: ", _0x105d2a.length),
 this._logService["debug"]("[debug] m2Length: ", _0x5f34a0.length));
 let _0x32df4a = _0x105d2a.length,
 _0x25288c = 0,
 _0x3ad97e = 0,
 _0x4d86fb;
 for (_0x4d86fb = 0; _0x4d86fb < _0x32df4a; _0x4d86fb++) {
 if (
 (_0x25288c++,
 _0x25288c % 10000 == 0 && Date.now() - _0x1e3c93 > this._loopLimitTime)
 )
 throw (
 this._logOriginTransformMutations("right-loop1"),
 this._logCurrentTransformMutations(
 _0x105d2a.length,
 _0x5f34a0.length,
 "right-loop1",
 ),
 Error(
 "[TransformService]: _rightInclineTransformMutations loop1 exceeded the limit time.",
 )
 );
 let _0x58e64f = [_0x105d2a[_0x4d86fb]],
 _0x1cdc87 = [];
 for (
 let _0x4ca7ad = 0, _0x2b2882 = _0x5f34a0.length;
 _0x4ca7ad < _0x2b2882;
 _0x4ca7ad++
 ) {
 if (
 (_0x3ad97e++,
 _0x3ad97e % 10000 == 0 &&
 Date.now() - _0x1e3c93 > this._loopLimitTime)
 )
 throw (
 this._logOriginTransformMutations("right-loop2"),
 this._logCurrentTransformMutations(
 _0x105d2a.length,
 _0x5f34a0.length,
 "right-loop2",
 ),
 Error(
 "[TransformService]: _rightInclineTransformMutations loop2 exceeded the limit time.",
 )
 );
 let _0x3ee05b = _0x5f34a0[_0x4ca7ad],
 _0x113404;
 if (_0x58e64f.length === 0)
 ((_0x113404 = [_0x3ee05b]), (_0x58e64f = []));
 else {
 if (_0x58e64f.length === 1) {
 let _0x35a778 = this.transformMutation(_0x58e64f[0], _0x3ee05b);
 if (re(_0x35a778)) return _0x35a778;
 if (((_0x113404 = _e(_0x35a778.m2Prime)), !_0x35a778.m1Prime))
 throw Error(
 "Algorithm\x20error,\x20m1Prime\x20should\x20not\x20be\x20undefined.",
 );
 _0x58e64f = _e(_0x35a778.m1Prime);
 } else {
 let _0x3ef697 = this._rightInclineTransformMutations(
 _0x58e64f,
 [_0x3ee05b],
 _0x1e3c93,
 );
 if (_0x3ef697.error) return _0x3ef697;
 if (((_0x113404 = _0x3ef697), _0x4ca7ad < _0x2b2882 - 1)) {
 let _0x3ca4f4 = this._leftInclineTransformMutations(
 _0x58e64f,
 [_0x3ee05b],
 _0x1e3c93,
 );
 if (_0x3ca4f4.error) return _0x3ca4f4;
 _0x58e64f = _0x3ca4f4;
 }
 }
 }
 _0x1cdc87 = _0x1cdc87.concat(_0x113404);
 }
 _0x5f34a0 = _0x1cdc87;
 }
 return _0x5f34a0;
 }
 _leftInclineTransformMutations(_0x5f15a7, _0x5f5082, _0x4497f8) {
 Date.now() === _0x4497f8 &&
 (this._logService["debug"](
 "[debug] _leftInclineTransformMutations start transforming mutations. Date now: " +
 new Date().toISOString(),
 ),
 this._logService["debug"]("[debug]\x20m1Length:\x20", _0x5f15a7.length),
 this._logService["debug"]("[debug] m2Length: ", _0x5f5082.length));
 let _0x297ba3 = _0x5f5082.length,
 _0x1b4832,
 _0x5379ec = 0,
 _0x979cbb = 0;
 for (_0x1b4832 = 0; _0x1b4832 < _0x297ba3; _0x1b4832++) {
 if (
 (_0x5379ec++,
 _0x5379ec % 10000 == 0 && Date.now() - _0x4497f8 > this._loopLimitTime)
 )
 throw (
 this._logOriginTransformMutations("left-loop1"),
 this._logCurrentTransformMutations(
 _0x5f15a7.length,
 _0x5f5082.length,
 "left-loop1",
 ),
 Error(
 "[TransformService]: _leftInclineTransformMutations loop1 exceeded the limit time.",
 )
 );
 let _0x55322c = [_0x5f5082[_0x1b4832]],
 _0x55d7da = [];
 for (
 let _0xe3c350 = 0, _0x28cf07 = _0x5f15a7.length;
 _0xe3c350 < _0x28cf07;
 _0xe3c350++
 ) {
 if (
 (_0x979cbb++,
 _0x979cbb % 10000 == 0 &&
 Date.now() - _0x4497f8 > this._loopLimitTime)
 )
 throw (
 this._logOriginTransformMutations("left-loop2"),
 this._logCurrentTransformMutations(
 _0x5f15a7.length,
 _0x5f5082.length,
 "left-loop2",
 ),
 Error(
 "[TransformService]:\x20_leftInclineTransformMutations\x20loop2\x20exceeded\x20the\x20limit\x20time.",
 )
 );
 let _0x39ada2 = _0x5f15a7[_0xe3c350],
 _0x5ccf99;
 if (_0x55322c.length === 0)
 ((_0x5ccf99 = [_0x39ada2]), (_0x55322c = []));
 else {
 if (_0x55322c.length === 1) {
 let _0x3d8a7d = this.transformMutation(_0x39ada2, _0x55322c[0]);
 if (re(_0x3d8a7d)) return _0x3d8a7d;
 if (!_0x3d8a7d.m1Prime)
 throw Error("Algorithm error, m1Prime should not be undefined.");
 ((_0x5ccf99 = _e(_0x3d8a7d.m1Prime)),
 (_0x55322c = _e(_0x3d8a7d.m2Prime)));
 } else {
 let _0x4f4063 = this._leftInclineTransformMutations(
 [_0x39ada2],
 _0x55322c,
 _0x4497f8,
 );
 if (_0x4f4063.error) return _0x4f4063;
 if (((_0x5ccf99 = _0x4f4063), _0xe3c350 < _0x28cf07 - 1)) {
 let _0xc2c1ce = this._rightInclineTransformMutations(
 [_0x39ada2],
 _0x55322c,
 _0x4497f8,
 );
 if (_0xc2c1ce.error) return _0xc2c1ce;
 _0x55322c = _0xc2c1ce;
 }
 }
 }
 _0x55d7da = _0x55d7da.concat(_0x5ccf99);
 }
 _0x5f15a7 = _0x55d7da;
 }
 return _0x5f15a7;
 }
 transformChangesets(_0x7782bf, _0x13b900, _0x1bcc07) {
 if (!he(_0x7782bf, _0x13b900))
 throw Error(
 "[TransformService]: changesets revisions miss match. The 'baseRev' of c2 is " +
 _0x13b900[0].baseRev +
 " and the 'revision' of c1 is " +
 _0x7782bf[0].revision +
 ".",
 );
 let _0x4be16f = _0x7782bf.length,
 _0x36b5ef = _0x13b900.length,
 _0x3f06fc = ge(_0x4be16f, _0x36b5ef + 1),
 _0xd6fdf4 = ge(_0x4be16f + 1, _0x36b5ef);
 (_0x7782bf.forEach(
 (_0xd83752, _0x4f0669) => (_0x3f06fc[_0x4f0669][0] = _0xd83752),
 ),
 _0x13b900.forEach(
 (_0x1802b5, _0x3c596a) => (_0xd6fdf4[0][_0x3c596a] = _0x1802b5),
 ));
 try {
 for (let _0xba580e = 0; _0xba580e < _0x36b5ef; _0xba580e++)
 for (let _0x1342d2 = 0; _0x1342d2 < _0x4be16f; _0x1342d2++) {
 let _0x3b805c = _0xd6fdf4[_0x1342d2][_0xba580e],
 _0x405e5b = _0x3f06fc[_0x1342d2][_0xba580e];
 if (!_0x3b805c || !_0x405e5b)
 throw Error("Algorithm error, the changeset does not exist!");
 let { mutations: _0x25d0be, ..._0x230c9d } = _0x405e5b,
 { mutations: _0x2205a4, ..._0x335567 } = _0x3b805c;
 (this._logService["debug"](
 "[debug] transformChangesets. Date now: " +
 new Date().toISOString(),
 ),
 this._logService["debug"](
 "[debug]\x20c1:\x20",
 JSON.stringify(_0x230c9d),
 ),
 this._logService["debug"](
 "[debug]\x20c2:\x20",
 JSON.stringify(_0x335567),
 ));
 let _0x34d6a0 = this.transformMutations(_0x25d0be, _0x2205a4);
 if (ae(_0x34d6a0)) return { error: _0x34d6a0.error };
 ((_0xd6fdf4[_0x1342d2 + 1][_0xba580e] = {
 ..._0x3b805c,
 mutations: _0x34d6a0.m2Prime,
 }),
 (_0x3f06fc[_0x1342d2][_0xba580e + 1] = {
 ..._0x405e5b,
 mutations: _0x34d6a0.m1Prime,
 }));
 }
 return _0x1bcc07
 ? { c2Prime: _0xd6fdf4[_0x4be16f] }
 : {
 c1Prime: _0x3f06fc.map((_0x2bedfe) => _0x2bedfe[_0x36b5ef]).flat(),
 c2Prime: _0xd6fdf4[_0x4be16f],
 };
 } catch (_0x53d67a) {
 throw (console.error(_0x53d67a), _0x53d67a);
 }
 }
 transformMutationsWithChangeset(_0x3ed390, _0x15e81d) {
 let _0x55696a = _0x3ed390.mutations,
 _0x1d7a94 = this.transformMutations(_0x55696a, _0x15e81d);
 return ae(_0x1d7a94)
 ? { error: _0x1d7a94.error }
 : {
 m2Prime: _0x1d7a94.m2Prime,
 c1Prime: { ..._0x3ed390, mutations: _0x1d7a94.m1Prime },
 };
 }
 _logOriginTransformMutations(_0x1a222) {
 this._logService["error"](
 "[Error]\x20_logOriginTransformMutations\x20" +
 _0x1a222 +
 ". Date now: " +
 new Date().toISOString(),
 );
 let _0x16e970 = this._transformMutationsCache["get"]("m1"),
 _0x5a1953 = this._transformMutationsCache["get"]("m2");
 (_0x16e970 &&
 _0x16e970.forEach((_0x3740d5, _0x15b3ef) => {
 this._logService["error"](
 "[Error] m1 origin mutation " + _0x15b3ef + "]: ",
 JSON.stringify(_0x3740d5),
 );
 }),
 _0x5a1953 &&
 _0x5a1953.forEach((_0x473859, _0x1eaa69) => {
 this._logService["error"](
 "[Error] m2 origin mutation " + _0x1eaa69 + ":\x20",
 JSON.stringify(_0x473859),
 );
 }));
 }
 _logCurrentTransformMutations(_0x42f6a0, _0x5e695e, _0x1427b0) {
 (this._logService["error"](
 "[Error] _logCurrentTransformMutations " +
 _0x1427b0 +
 ".\x20Date\x20now:\x20" +
 new Date().toISOString(),
 ),
 this._logService["error"]("[Error]\x20m1Length:\x20" + _0x42f6a0),
 this._logService["error"]("[Error]\x20m2Length:\x20" + _0x5e695e));
 }
};
me = T([w(0, e.ILogService)], me);
function he(_0x3fcdff, _0x5c03c5) {
 return _0x3fcdff[0].revision - 1 === _0x5c03c5[0].baseRev;
}
function ge(_0x215c9d, _0x575522) {
 return Array(_0x215c9d)
 .fill(undefined)
 .map(() => Array(_0x575522));
}
function _e(_0x2bf643) {
 return Array.isArray(_0x2bf643) ? _0x2bf643 : [_0x2bf643];
}
const ve = e.JSON1["type"].typeAllowingConflictsPred(
 (_0x44f38d) => _0x44f38d.type === e.JSON1["type"].RM_UNEXPECTED_CONTENT,
 ),
 ye = [
 {
 m1: t.ApplyBaseJson1Mutation["id"],
 m2: t.ApplyBaseJson1Mutation["id"],
 handler(_0xba45f, _0x4b24ef) {
 if (_0xba45f.params["unitId"] !== _0x4b24ef.params["unitId"])
 return { m1Prime: _0xba45f, m2Prime: _0x4b24ef };
 let _0x1a69d3 = e.Tools["deepClone"](_0xba45f),
 _0x4c535a = e.Tools["deepClone"](_0x4b24ef);
 return {
 m1Prime: {
 ..._0x1a69d3,
 params: {
 ..._0x1a69d3.params,
 op: be(_0x1a69d3.params["op"], _0x4c535a.params["op"], "left"),
 },
 },
 m2Prime: {
 ..._0x4c535a,
 params: {
 ..._0x4c535a.params,
 op: be(_0x4c535a.params["op"], _0x1a69d3.params["op"], "right"),
 },
 },
 };
 },
 },
 ];
function be(_0x3c86ad, _0x2d3874, _0x3fb263) {
 return ve.transform(_0x3c86ad, _0x2d3874, _0x3fb263);
}
let xe = class extends e.Disposable {
 constructor(_0x222aa9) {
 (super(),
 (this._transformService = _0x222aa9),
 ye.forEach((_0x51e781) => {
 this._transformService["registerTransformAlgorithm"](_0x51e781);
 }));
 }
};
xe = T([w(0, E)], xe);
function Se(_0x2245b5) {
 var _0x5a4059;
 return (_0x5a4059 = _0x2245b5.params) == null ? undefined : _0x5a4059.unitId;
}
function Ce(_0x193af6) {
 var _0x6ba9e5;
 let _0x4b17b3 = _0x193af6.params;
 return (
 (_0x4b17b3 == null ? undefined : _0x4b17b3.subUnitId) ??
 (_0x4b17b3 == null ? undefined : _0x4b17b3.pageId) ??
 (_0x4b17b3 == null || (_0x6ba9e5 = _0x4b17b3.page) == null
 ? undefined
 : _0x6ba9e5.id)
 );
}
function we(_0x5556fe) {
 var _0x4e6b0d;
 let _0x238d89 = _0x5556fe.params;
 return (
 (_0x238d89 == null ? undefined : _0x238d89.elementId) ??
 (_0x238d89 == null || (_0x4e6b0d = _0x238d89.element) == null
 ? undefined
 : _0x4e6b0d.id)
 );
}
function Te(_0xc442c9) {
 var _0x1a75af;
 let _0x18f19e = _0xc442c9.params;
 return _0x18f19e
 ? _0x18f19e.elementIds
 ? _0x18f19e.elementIds
 : _0x18f19e.elementId
 ? [_0x18f19e.elementId]
 : (_0x1a75af = _0x18f19e.element) != null && _0x1a75af.id
 ? [_0x18f19e.element["id"]]
 : []
 : [];
}
function Ee(_0x18fa56, _0x29a719) {
 let _0x419c07 = Se(_0x18fa56),
 _0x3200e7 = Se(_0x29a719);
 return !!_0x419c07 && _0x419c07 === _0x3200e7;
}
function De(_0x1f2f53, _0xe482d6) {
 let _0x41f19c = Ce(_0x1f2f53),
 _0x4efd7b = Ce(_0xe482d6);
 return Ee(_0x1f2f53, _0xe482d6) && !!_0x41f19c && _0x41f19c === _0x4efd7b;
}
function Oe(_0x2daf86, _0x389968) {
 if (!De(_0x2daf86, _0x389968)) return false;
 let _0x177cc1 = new Set(Te(_0x2daf86));
 return Te(_0x389968).some((_0x35223c) => _0x177cc1.has(_0x35223c));
}
function ke(_0x4da54e) {
 return { error: Error(_0x4da54e) };
}
const Ae = {
 m1: n.RemoveBoardElementMutation["id"],
 m2: "any",
 handler(_0x4f0055, _0x19382f) {
 return !De(_0x4f0055, _0x19382f) || !Oe(_0x4f0055, _0x19382f)
 ? { m1Prime: _0x4f0055, m2Prime: _0x19382f }
 : _0x19382f.id === n.RemoveBoardElementMutation["id"]
 ? { m1Prime: [], m2Prime: [] }
 : _0x19382f.id === n.UpdateBoardElementMutation["id"] ||
 _0x19382f.id === r.SetMindMapElementMutation["id"]
 ? { m1Prime: _0x4f0055, m2Prime: [] }
 : { m1Prime: _0x4f0055, m2Prime: _0x19382f };
 },
 },
 je = { ...Ae, m1: n.RemoveBoardElementOnlyMutation["id"] },
 Me = {
 m1: n.AddBoardElementMutation["id"],
 m2: n.AddBoardElementMutation["id"],
 handler(_0x165cf7, _0x242199) {
 var _0x146c05, _0x3aa922;
 if (!De(_0x165cf7, _0x242199))
 return { m1Prime: _0x165cf7, m2Prime: _0x242199 };
 if (we(_0x165cf7) === we(_0x242199))
 return ke("[BoardTransform] Cannot add duplicate board element.");
 let _0x45925a = e.Tools["deepClone"](_0x242199),
 _0x1ba275 =
 (_0x146c05 = _0x165cf7.params) == null
 ? undefined
 : _0x146c05.insertIndex,
 _0x3ddee7 =
 (_0x3aa922 = _0x45925a.params) == null
 ? undefined
 : _0x3aa922.insertIndex;
 return (
 typeof _0x1ba275 == "number" &&
 typeof _0x3ddee7 == "number" &&
 _0x3ddee7 >= _0x1ba275 &&
 (_0x45925a.params["insertIndex"] = _0x3ddee7 + 1),
 { m1Prime: _0x165cf7, m2Prime: _0x45925a }
 );
 },
 },
 Ne = {
 m1: n.UpdateBoardElementMutation["id"],
 m2: n.UpdateBoardElementMutation["id"],
 handler(_0x5f03cc, _0x2ff3d4) {
 return (
 Ee(_0x5f03cc, _0x2ff3d4) &&
 De(_0x5f03cc, _0x2ff3d4) &&
 (we(_0x5f03cc), we(_0x2ff3d4)),
 { m1Prime: _0x5f03cc, m2Prime: _0x2ff3d4 }
 );
 },
 },
 Pe = {
 m1: n.RemoveBoardElementMutation["id"],
 m2: n.SetBoardElementOrderMutation["id"],
 handler(_0x463a08, _0x1a5516) {
 if (!De(_0x463a08, _0x1a5516))
 return { m1Prime: _0x463a08, m2Prime: _0x1a5516 };
 let _0x4bf1c0 = we(_0x463a08),
 _0x38b218 = e.Tools["deepClone"](_0x1a5516);
 return (
 (_0x38b218.params["elementIds"] = (
 _0x38b218.params["elementIds"] ?? []
 ).filter((_0xdcad23) => _0xdcad23 !== _0x4bf1c0)),
 { m1Prime: _0x463a08, m2Prime: _0x38b218 }
 );
 },
 },
 Fe = { ...Pe, m1: n.RemoveBoardElementOnlyMutation["id"] };
function Ie(_0x4ac81b) {
 var _0x2b63c6;
 let _0x2e17cf = _0x4ac81b.params;
 return (
 (_0x2e17cf == null ? undefined : _0x2e17cf.tableId) ??
 (_0x2e17cf == null || (_0x2b63c6 = _0x2e17cf.table) == null
 ? undefined
 : _0x2b63c6.id)
 );
}
function Le(_0x5afee1, _0x7ff90e) {
 return !Ee(_0x5afee1, _0x7ff90e) || Ie(_0x5afee1) !== Ie(_0x7ff90e)
 ? { m1Prime: _0x5afee1, m2Prime: _0x7ff90e }
 : _0x5afee1.id === _0x7ff90e.id
 ? { m1Prime: [], m2Prime: [] }
 : { m1Prime: _0x5afee1, m2Prime: [] };
}
const Re = [
 {
 m1: i.RemoveBoardTableMutation["id"],
 m2: i.SetBoardTableMutation["id"],
 handler(_0x14a647, _0x4b2d5c) {
 return Le(_0x14a647, _0x4b2d5c);
 },
 },
 {
 m1: i.RemoveBoardTableMutation["id"],
 m2: i.RemoveBoardTableMutation["id"],
 handler(_0xac0ac2, _0x2d6a0e) {
 return Le(_0xac0ac2, _0x2d6a0e);
 },
 },
 Fe,
 Pe,
 je,
 Ae,
 Me,
 Ne,
];
let ze = class extends e.Disposable {
 constructor(_0x36a326) {
 (super(),
 (this._transformService = _0x36a326),
 Re.forEach((_0x407b2c) => {
 this._transformService["registerTransformAlgorithm"](_0x407b2c);
 }));
 }
};
ze = T([w(0, E)], ze);
const Be = {
 m1: a.RichTextEditingMutation["id"],
 m2: a.RichTextEditingMutation["id"],
 handler(_0x53a969, _0x26424c) {
 if (_0x53a969.params["unitId"] !== _0x26424c.params["unitId"])
 return { error: Error("Two mutation need have the same unitId!") };
 let _0x4db201 = e.Tools["deepClone"](_0x53a969),
 _0x9f7730 = e.Tools["deepClone"](_0x26424c);
 return {
 m1Prime: {
 ..._0x4db201,
 params: {
 ..._0x4db201.params,
 actions: e.JSONX["transform"](
 _0x4db201.params["actions"],
 _0x9f7730.params["actions"],
 "left",
 ),
 textRanges: _0x4db201.params["textRanges"]
 ? (0, a.transformDocumentTextRanges)(
 _0x9f7730.params["actions"],
 _0x4db201.params["textRanges"],
 "right",
 )
 : null,
 },
 },
 m2Prime: {
 ..._0x9f7730,
 params: {
 ..._0x9f7730.params,
 actions: e.JSONX["transform"](
 _0x9f7730.params["actions"],
 _0x4db201.params["actions"],
 "right",
 ),
 textRanges: _0x9f7730.params["textRanges"]
 ? (0, a.transformDocumentTextRanges)(
 _0x4db201.params["actions"],
 _0x9f7730.params["textRanges"],
 "right",
 )
 : null,
 },
 },
 };
 },
 },
 Ve = [Be];
let He = class extends e.Disposable {
 constructor(_0x24914c) {
 (super(),
 (this._transformService = _0x24914c),
 [...Ve].forEach((_0x13575b) => {
 this._transformService["registerTransformAlgorithm"](_0x13575b);
 }));
 }
};
He = T([w(0, E)], He);
const Ue = {
 id: o.EmptyMutation["id"],
 type: e.CommandType["MUTATION"],
 params: {},
 },
 We = {
 m1: s.ApplyPdfMutationBatchMutation["id"],
 m2: s.ApplyPdfMutationBatchMutation["id"],
 handler(_0x4be28a, _0x1bc59d) {
 if (_0x4be28a.params["unitId"] !== _0x1bc59d.params["unitId"])
 return { m1Prime: _0x4be28a, m2Prime: _0x1bc59d };
 let _0x5930e6 = Qe(_0x4be28a.params["batch"], _0x1bc59d.params["batch"]);
 return _0x5930e6
 ? { error: Error(_0x5930e6) }
 : {
 m1Prime: Ge(_0x4be28a, _0x1bc59d, true),
 m2Prime: Ge(_0x1bc59d, _0x4be28a, false),
 };
 },
 };
function Ge(_0x46fabe, _0x39a677, _0x411b1a) {
 let _0x507744 = _0x46fabe.params["batch"].mutations["flatMap"](
 (_0x499f14) => {
 let _0x3768da = _0x499f14;
 for (let _0x272ef1 of _0x39a677.params["batch"].mutations) {
 if (!qe(_0x3768da, _0x272ef1, _0x411b1a)) return [];
 ((_0x3768da = Ke(_0x3768da, _0x272ef1, _0x411b1a)),
 (_0x3768da = Ze(_0x3768da, _0x272ef1, _0x411b1a)));
 }
 return [_0x3768da];
 },
 );
 if (_0x507744.length === 0) return [];
 if (
 _0x507744.length === _0x46fabe.params["batch"].mutations["length"] &&
 _0x507744.every(
 (_0x355ea3, _0x1d1e0d) =>
 _0x355ea3 === _0x46fabe.params["batch"].mutations[_0x1d1e0d],
 )
 )
 return _0x46fabe;
 let _0x9fc00 = e.Tools["deepClone"](_0x46fabe);
 return ((_0x9fc00.params["batch"].mutations = _0x507744), _0x9fc00);
}
function Ke(_0x2666f0, _0x3bb8fb, _0x4ffe51) {
 if (!_t(_0x2666f0) || !_t(_0x3bb8fb) || et(_0x2666f0, _0x3bb8fb))
 return _0x2666f0;
 let _0xae78df = _0x4ffe51 ? _0x2666f0 : _0x3bb8fb,
 _0x2702fc = _0x4ffe51 ? _0x3bb8fb : _0x2666f0,
 _0x24b786 = _0xae78df.payload,
 _0x45cf04 = _0x2702fc.payload,
 _0x5daf00 = at(_0x2702fc);
 if (!_0x5daf00) return _0x2666f0;
 let _0x3f4de2 = [..._0x24b786.orderedPageIds];
 if (mt(_0x2702fc)) {
 let _0xd807c9 = _0x3f4de2.indexOf(_0x5daf00);
 _0xd807c9 >= 0 && _0x3f4de2.splice(_0xd807c9, 1);
 } else {
 let _0x2ed18e = _0x3f4de2.indexOf(_0x5daf00);
 _0x2ed18e >= 0 && _0x3f4de2.splice(_0x2ed18e, 1);
 let _0x1add03 = _0x45cf04.orderedPageIds["indexOf"](_0x5daf00);
 if (_0x1add03 <= 0) _0x3f4de2.unshift(_0x5daf00);
 else {
 if (_0x1add03 === _0x45cf04.orderedPageIds["length"] - 1)
 _0x3f4de2.push(_0x5daf00);
 else {
 let _0x357b4c = _0x45cf04.orderedPageIds["slice"](_0x1add03 + 1).find(
 (_0xfe403b) => _0x3f4de2.includes(_0xfe403b),
 ),
 _0x2deece =
 _0x357b4c === undefined
 ? _0x3f4de2.length
 : _0x3f4de2.indexOf(_0x357b4c);
 _0x3f4de2.splice(_0x2deece, 0, _0x5daf00);
 }
 }
 }
 return {
 ..._0x2666f0,
 payload: { ..._0x2666f0.payload, orderedPageIds: _0x3f4de2 },
 };
}
function qe(_0x7da21f, _0x3646b4, _0x33fbca) {
 let _0x277f09 = Je(_0x7da21f, _0x3646b4, _0x33fbca);
 if (_0x277f09 !== undefined) return _0x277f09;
 let _0x255a1b = Ye(_0x7da21f, _0x3646b4, _0x33fbca);
 return _0x255a1b === undefined
 ? (Xe(_0x7da21f, _0x3646b4, _0x33fbca) ?? true)
 : _0x255a1b;
}
function Je(_0xab9af8, _0x513b45, _0x1dfdd1) {
 if ($e(_0xab9af8, _0x513b45))
 return ft(_0x513b45) || (pt(_0x513b45) && !ft(_0xab9af8))
 ? false
 : pt(_0xab9af8) || ft(_0xab9af8)
 ? true
 : _0xab9af8.kind !== _0x513b45.kind ||
 (_0xab9af8.kind === s.PdfEditorMutationKind["UPDATE_OBJECT_STYLE"] &&
 !ct(_0xab9af8, _0x513b45)) ||
 _0x1dfdd1;
}
function Ye(_0x4c764a, _0x353cac, _0x69cd53) {
 if (et(_0x4c764a, _0x353cac)) {
 if (mt(_0x353cac)) return false;
 if ((gt(_0x4c764a) && gt(_0x353cac)) || (vt(_0x4c764a) && vt(_0x353cac)))
 return _0x69cd53;
 }
}
function Xe(_0x133537, _0x44cec3, _0x446975) {
 if (!tt(_0x133537, _0x44cec3))
 return nt(_0x133537, _0x44cec3) && !bt(_0x133537) ? _0x446975 : undefined;
 if (bt(_0x44cec3) || (yt(_0x44cec3) && !bt(_0x133537))) return false;
 if (yt(_0x133537)) return true;
 if (xt(_0x133537) && xt(_0x44cec3) && !(St(_0x133537) && St(_0x44cec3))) {
 let _0x320787 = st(_0x133537),
 _0x4f8efe = st(_0x44cec3);
 return _0x320787 && _0x4f8efe && _0x320787 !== _0x4f8efe
 ? true
 : Ct(_0x44cec3)
 ? false
 : Ct(_0x133537)
 ? true
 : _0x446975;
 }
 if (rt(_0x133537, _0x44cec3) && !bt(_0x133537)) return _0x446975;
}
function Ze(_0x2c1ce8, _0x48482c, _0x10e85c) {
 if (!tt(_0x2c1ce8, _0x48482c) || !St(_0x2c1ce8) || !St(_0x48482c))
 return _0x2c1ce8;
 let _0x1b5d36 = _0x2c1ce8.payload,
 _0x2630cb = _0x48482c.payload;
 return _0x1b5d36.index < _0x2630cb.index ||
 (_0x1b5d36.index === _0x2630cb.index && _0x10e85c)
 ? _0x2c1ce8
 : { ..._0x2c1ce8, payload: { ..._0x1b5d36, index: _0x1b5d36.index + 1 } };
}
function Qe(_0x3d44a6, _0x4b4427) {
 for (let _0x18ef72 of _0x3d44a6.mutations)
 for (let _0x2212ff of _0x4b4427.mutations) {
 if ($e(_0x18ef72, _0x2212ff) && pt(_0x18ef72) && pt(_0x2212ff))
 return (
 '[PdfTransform] Cannot add duplicate PDF object "' +
 it(_0x18ef72) +
 "\x22."
 );
 if (et(_0x18ef72, _0x2212ff) && ht(_0x18ef72) && ht(_0x2212ff))
 return (
 '[PdfTransform] Cannot insert duplicate PDF page "' +
 at(_0x18ef72) +
 "\x22."
 );
 if (tt(_0x18ef72, _0x2212ff) && yt(_0x18ef72) && yt(_0x2212ff))
 return (
 '[PdfTransform] Cannot add duplicate PDF text story "' +
 ot(_0x18ef72) +
 "\x22."
 );
 }
}
function $e(_0x2ab9eb, _0x4509c5) {
 let _0xdd1a4f = it(_0x2ab9eb);
 return !!(_0xdd1a4f && _0xdd1a4f === it(_0x4509c5));
}
function et(_0x4fb9e8, _0x5ee381) {
 let _0x58fe35 = at(_0x4fb9e8);
 return !!(_0x58fe35 && _0x58fe35 === at(_0x5ee381));
}
function tt(_0x5c0c56, _0x53edae) {
 let _0x5d090d = ot(_0x5c0c56);
 return !!(_0x5d090d && _0x5d090d === ot(_0x53edae));
}
function nt(_0x387aed, _0x476e11) {
 let _0x1ae661 = ut(_0x387aed);
 return !!(_0x1ae661 && _0x1ae661 === ut(_0x476e11));
}
function rt(_0x2afdcc, _0x1d5b0b) {
 let _0x5eb38f = dt(_0x2afdcc),
 _0x2a389e = dt(_0x1d5b0b);
 return _0x5eb38f.some((_0x26a086) => _0x2a389e.includes(_0x26a086));
}
function it(_0x14de45) {
 var _0x1b88d4, _0x5dd717;
 if (
 ((_0x1b88d4 = _0x14de45.target) == null ? undefined : _0x1b88d4.kind) ===
 "object"
 )
 return _0x14de45.target["objectId"];
 let _0x5bdcc2 = _0x14de45.payload;
 return (
 (_0x5bdcc2 == null ? undefined : _0x5bdcc2.objectId) ??
 (_0x5bdcc2 == null || (_0x5dd717 = _0x5bdcc2.object) == null
 ? undefined
 : _0x5dd717.id) ??
 (_0x5bdcc2 == null ? undefined : _0x5bdcc2.widgetObjectId)
 );
}
function at(_0x2fcb4e) {
 var _0xb55eee;
 let _0x522159 = _0x2fcb4e.target;
 if (
 (_0x522159 == null ? undefined : _0x522159.kind) === "page" ||
 (_0x522159 == null ? undefined : _0x522159.kind) === "object" ||
 (_0x522159 == null ? undefined : _0x522159.kind) === "textRun" ||
 (_0x522159 == null ? undefined : _0x522159.kind) === "sourceSpan"
 )
 return _0x522159.pageId;
 let _0x594abd = _0x2fcb4e.payload;
 return (
 (_0x594abd == null ? undefined : _0x594abd.pageId) ??
 (_0x594abd == null || (_0xb55eee = _0x594abd.page) == null
 ? undefined
 : _0xb55eee.id)
 );
}
function ot(_0x58c1e2) {
 var _0x3292f4, _0x4f7cc5, _0x55df2e;
 if (
 ((_0x3292f4 = _0x58c1e2.target) == null ? undefined : _0x3292f4.kind) ===
 "textRun" &&
 _0x58c1e2.target["storyId"]
 )
 return _0x58c1e2.target["storyId"];
 let _0x428a9d = _0x58c1e2.payload;
 return (
 (_0x428a9d == null ? undefined : _0x428a9d.storyId) ??
 (_0x428a9d == null || (_0x4f7cc5 = _0x428a9d.story) == null
 ? undefined
 : _0x4f7cc5.id) ??
 (_0x428a9d == null || (_0x55df2e = _0x428a9d.previousStory) == null
 ? undefined
 : _0x55df2e.id)
 );
}
function st(_0xcfec94) {
 var _0x22a56c, _0x406737;
 let _0x16bbb6 = _0xcfec94.payload;
 return (
 (_0x16bbb6 == null ? undefined : _0x16bbb6.blockId) ??
 (_0x16bbb6 == null || (_0x22a56c = _0x16bbb6.block) == null
 ? undefined
 : _0x22a56c.id) ??
 (_0x16bbb6 == null || (_0x406737 = _0x16bbb6.previousBlock) == null
 ? undefined
 : _0x406737.id)
 );
}
function ct(_0x39dbcf, _0x1a2723) {
 let _0x3f9ed7 = _0x39dbcf.payload,
 _0x3524e8 = _0x1a2723.payload;
 return Object.keys(_0x3f9ed7).some((_0x5dc3aa) =>
 _0x5dc3aa === "objectId" ||
 _0x5dc3aa === "pageId" ||
 _0x3f9ed7[_0x5dc3aa] === undefined ||
 _0x3524e8[_0x5dc3aa] === undefined
 ? false
 : _0x5dc3aa === "stroke" || _0x5dc3aa === "textStyle"
 ? lt(_0x3f9ed7[_0x5dc3aa], _0x3524e8[_0x5dc3aa])
 : true,
 );
}
function lt(_0x54660f, _0x444daf) {
 if (
 !_0x54660f ||
 !_0x444daf ||
 typeof _0x54660f != "object" ||
 typeof _0x444daf != "object" ||
 Array.isArray(_0x54660f) ||
 Array.isArray(_0x444daf)
 )
 return true;
 let _0x55b6eb = _0x54660f,
 _0x1cae3b = _0x444daf;
 return Object.keys(_0x55b6eb).some(
 (_0x2023a7) =>
 _0x55b6eb[_0x2023a7] !== undefined && _0x1cae3b[_0x2023a7] !== undefined,
 );
}
function ut(_0x5621d6) {
 var _0x215770;
 let _0x57b25d = ot(_0x5621d6);
 if (!_0x57b25d) return;
 let _0x247e47 = _0x5621d6.payload,
 _0x728aa2 =
 ((_0x215770 = _0x5621d6.target) == null ? undefined : _0x215770.kind) ===
 "textRun"
 ? (_0x5621d6.target["runId"] ??
 (_0x247e47 == null ? undefined : _0x247e47.runId))
 : _0x247e47 == null
 ? undefined
 : _0x247e47.runId;
 return _0x728aa2
 ? "story:" + _0x57b25d + ":run:" + _0x728aa2
 : "story:" + _0x57b25d;
}
function dt(_0x38e4f8) {
 let _0xda295d = ut(_0x38e4f8);
 if (!_0xda295d) return [];
 let _0x53f45c = ot(_0x38e4f8);
 if (
 !_0x53f45c ||
 _0x38e4f8.kind !== s.PdfEditorMutationKind["UPDATE_TEXT_CONTENT"]
 )
 return [_0xda295d];
 let _0x315685 = _0x38e4f8.payload,
 _0x1479a3 = new Set(_0x315685.replacedRunIds ?? []);
 return (
 _0x315685.runId && _0x1479a3.add(_0x315685.runId),
 _0x1479a3.size > 0
 ? [..._0x1479a3].map(
 (_0x504ad4) => "story:" + _0x53f45c + ":run:" + _0x504ad4,
 )
 : [_0xda295d]
 );
}
function ft(_0xfcf16c) {
 return (
 _0xfcf16c.kind === s.PdfEditorMutationKind["REMOVE_OBJECT"] ||
 _0xfcf16c.kind === s.PdfEditorMutationKind["REMOVE_ANNOTATION"]
 );
}
function pt(_0x1b3d99) {
 return (
 _0x1b3d99.kind === s.PdfEditorMutationKind["ADD_OBJECT"] ||
 _0x1b3d99.kind === s.PdfEditorMutationKind["ADD_ANNOTATION"]
 );
}
function mt(_0x5c14be) {
 return _0x5c14be.kind === s.PdfEditorMutationKind["REMOVE_PAGE"];
}
function ht(_0x281099) {
 return _0x281099.kind === s.PdfEditorMutationKind["INSERT_PAGE"];
}
function gt(_0x4e9d83) {
 return _0x4e9d83.kind === s.PdfEditorMutationKind["REORDER_PAGE"];
}
function _t(_0x2e8414) {
 return ht(_0x2e8414) || mt(_0x2e8414) || gt(_0x2e8414);
}
function vt(_0x517dc1) {
 return _0x517dc1.kind === s.PdfEditorMutationKind["UPDATE_PAGE_GEOMETRY"];
}
function yt(_0x50dd21) {
 return _0x50dd21.kind === s.PdfEditorMutationKind["ADD_TEXT_STORY"];
}
function bt(_0x5e3c4a) {
 return _0x5e3c4a.kind === s.PdfEditorMutationKind["REMOVE_TEXT_STORY"];
}
function xt(_0x1c237d) {
 return (
 _0x1c237d.kind === s.PdfEditorMutationKind["INSERT_TEXT_BLOCK"] ||
 _0x1c237d.kind === s.PdfEditorMutationKind["UPDATE_TEXT_BLOCK"] ||
 _0x1c237d.kind === s.PdfEditorMutationKind["REMOVE_TEXT_BLOCK"]
 );
}
function St(_0x4a378a) {
 return _0x4a378a.kind === s.PdfEditorMutationKind["INSERT_TEXT_BLOCK"];
}
function Ct(_0x177434) {
 return _0x177434.kind === s.PdfEditorMutationKind["REMOVE_TEXT_BLOCK"];
}
const wt = [We];
let D = class extends e.Disposable {
 constructor(_0xf10451) {
 (super(),
 (this._transformService = _0xf10451),
 wt.forEach((_0x1f7723) => {
 this._transformService["registerTransformAlgorithm"](_0x1f7723);
 }));
 }
};
D = T([w(0, E)], D);
const Tt = {
 m1: c.AddCommentMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x21508d, _0x5cd8ed) => {
 let _0x4f1cbc = _0x21508d.params,
 _0x34c6b4 = _0x5cd8ed.params,
 _0x2f8fe3 = { m1Prime: _0x21508d, m2Prime: _0x5cd8ed };
 if (
 _0x4f1cbc.unitId !== _0x34c6b4.unitId ||
 _0x4f1cbc.subUnitId !== _0x34c6b4.subUnitId ||
 _0x4f1cbc.comment["ref"] !== _0x34c6b4.comment["ref"]
 )
 return _0x2f8fe3;
 if (!_0x4f1cbc.comment["parentId"] && !_0x34c6b4.comment["parentId"]) {
 let _0xdf178 = e.Tools["deepClone"](_0x5cd8ed);
 return (
 (_0xdf178.params["comment"].parentId =
 _0x21508d.params["comment"].id),
 {
 m1Prime: [
 {
 id: c.DeleteCommentMutation["id"],
 params: {
 unitId: _0x4f1cbc.unitId,
 subUnitId: _0x34c6b4.subUnitId,
 commentId: _0x34c6b4.comment["id"],
 },
 },
 _0x21508d,
 _0xdf178,
 ],
 m2Prime: [_0xdf178],
 }
 );
 }
 return _0x2f8fe3;
 },
 },
 Et = {
 m1: l.AddConditionalRuleMutation["id"],
 m2: l.AddConditionalRuleMutation["id"],
 handler(_0x5a1a7d, _0x32b6ad) {
 if (
 _0x5a1a7d.params["unitId"] !== _0x32b6ad.params["unitId"] ||
 _0x5a1a7d.params["subUnitId"] !== _0x32b6ad.params["subUnitId"]
 )
 return { m1Prime: _0x5a1a7d, m2Prime: _0x32b6ad };
 let { unitId: _0x1f4896, subUnitId: _0x2362b3 } = _0x5a1a7d.params,
 _0x27d258 = e.Tools["deepClone"](_0x5a1a7d),
 _0x1b627e = e.Tools["deepClone"](_0x32b6ad),
 _0x295586 = [_0x27d258],
 _0x26ceed = {
 unitId: _0x1f4896,
 subUnitId: _0x2362b3,
 start: { id: _0x1b627e.params["rule"].cfId, type: "before" },
 end: { id: _0x1b627e.params["rule"].cfId, type: "after" },
 };
 return (
 _0x295586.push({
 id: l.MoveConditionalRuleMutation["id"],
 params: _0x26ceed,
 }),
 { m1Prime: _0x295586, m2Prime: _0x1b627e }
 );
 },
 };
function Dt(_0x1e02e2) {
 let _0x6d1c4e = new Map();
 return (
 _0x1e02e2.forEach((_0x5068c5) => {
 let _0x36a82b = _0x5068c5.ranges;
 _0x6d1c4e.forEach((_0x564dcb, _0x4f826b) => {
 _0x4f826b !== _0x5068c5.uid &&
 _0x6d1c4e.set(
 _0x4f826b,
 e.Rectangle["subtractMulti"](_0x564dcb, _0x36a82b),
 );
 });
 let _0x6b0dbc = [...(_0x6d1c4e.get(_0x5068c5.uid) ?? []), ..._0x36a82b];
 _0x6d1c4e.set(
 _0x5068c5.uid,
 _0x6b0dbc.length > 1
 ? e.Rectangle["mergeRanges"](_0x6b0dbc)
 : _0x6b0dbc,
 );
 }),
 _0x6d1c4e
 );
}
function Ot(_0x48439b, _0x259700, _0x4f299d, _0x238d37) {
 let _0xc19cb9 = Dt([..._0x4f299d, ..._0x238d37]),
 _0x365814 = [];
 return (
 _0x4f299d.forEach((_0x14705b) => {
 let _0xaa48ad = _0xc19cb9.get(_0x14705b.uid) ?? [];
 if (!_0xaa48ad.length) {
 let _0x1d5c35 = {
 ruleId: _0x14705b.uid,
 unitId: _0x48439b,
 subUnitId: _0x259700,
 };
 _0x365814.push({
 id: u.RemoveDataValidationMutation["id"],
 params: _0x1d5c35,
 });
 } else {
 if (!(0, e.isRangesEqual)(_0xaa48ad, _0x14705b.ranges)) {
 let _0x24767b = {
 ruleId: _0x14705b.uid,
 unitId: _0x48439b,
 subUnitId: _0x259700,
 payload: { type: u.UpdateRuleType["RANGE"], payload: _0xaa48ad },
 };
 _0x365814.push({
 id: u.UpdateDataValidationMutation["id"],
 params: _0x24767b,
 });
 }
 }
 }),
 _0x365814
 );
}
function kt(_0x4b5134, _0x3ddd48) {
 let _0x3cf192 = e.Tools["deepClone"](
 Array.isArray(_0x4b5134.params["rule"])
 ? _0x4b5134.params["rule"]
 : [_0x4b5134.params["rule"]],
 );
 return (
 _0x3ddd48.forEach((_0x49f623) => {
 if (_0x49f623.id === u.UpdateDataValidationMutation["id"]) {
 let _0x129dda = _0x49f623,
 _0x4da42b = _0x3cf192.find(
 (_0xa4bfef) => _0xa4bfef.uid === _0x129dda.params["ruleId"],
 );
 _0x4da42b.ranges = _0x129dda.params["payload"].payload;
 } else {
 if (_0x49f623.id === u.RemoveDataValidationMutation["id"]) {
 let _0x518b5a = _0x3cf192.findIndex(
 (_0x52b58e) => _0x52b58e.uid === _0x49f623.params["ruleId"],
 );
 _0x3cf192[_0x518b5a] = null;
 }
 }
 }),
 _0x3cf192.filter(Boolean).length
 ? [
 {
 ..._0x4b5134,
 params: { ..._0x4b5134.params, rule: _0x3cf192.filter(Boolean) },
 },
 ]
 : []
 );
}
const At = {
 m1: u.AddDataValidationMutation["id"],
 m2: u.AddDataValidationMutation["id"],
 handler: (_0x37133f, _0x3dcf2c) => {
 let _0x5b4e10 = { m1Prime: _0x37133f, m2Prime: _0x3dcf2c },
 _0x25e352 = _0x37133f.params,
 _0x33de4d = _0x3dcf2c.params;
 if (
 _0x25e352.unitId !== _0x33de4d.unitId ||
 _0x25e352.subUnitId !== _0x33de4d.subUnitId
 )
 return _0x5b4e10;
 let _0x4a7ffa = e.Tools["deepClone"](_0x37133f),
 _0x4bb845 = e.Tools["deepClone"](_0x3dcf2c),
 _0x34cf05 = _0x25e352.unitId,
 _0x3a19a7 = _0x33de4d.subUnitId,
 _0x5346b5 = _0x4a7ffa.params["rule"],
 _0x1b2d05 = _0x4bb845.params["rule"];
 if (Array.isArray(_0x5346b5) && Array.isArray(_0x1b2d05))
 return { m1Prime: [], m2Prime: [] };
 if (Array.isArray(_0x5346b5)) {
 _0x4a7ffa.params["index"] = 0;
 let _0x3553b0 = Ot(_0x34cf05, _0x3a19a7, _0x5346b5, [_0x1b2d05]);
 return {
 m1Prime: kt(_0x4a7ffa, _0x3553b0),
 m2Prime: [..._0x3553b0, _0x4bb845],
 };
 }
 if (Array.isArray(_0x1b2d05)) {
 let _0x30f9cc = Ot(_0x34cf05, _0x3a19a7, _0x1b2d05, [_0x5346b5]);
 return (
 (_0x4bb845.params["index"] = 0),
 {
 m1Prime: kt(_0x4a7ffa, _0x30f9cc),
 m2Prime: [..._0x30f9cc, _0x4bb845],
 }
 );
 }
 let _0x1a26d3 = Ot(_0x34cf05, _0x3a19a7, [_0x5346b5], [_0x1b2d05]);
 return (
 (_0x4bb845.params["index"] = -1),
 {
 m1Prime: kt(_0x4a7ffa, _0x1a26d3),
 m2Prime: [..._0x1a26d3, _0x4bb845],
 }
 );
 },
 },
 jt = {
 m1: u.AddDataValidationMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x16a504, _0x49f88d) => {
 let _0x3c33c1 = { m1Prime: _0x16a504, m2Prime: _0x49f88d },
 _0x34758a = _0x16a504.params,
 _0x423a8e = _0x49f88d.params;
 if (
 _0x34758a.unitId !== _0x423a8e.unitId ||
 _0x34758a.subUnitId !== _0x423a8e.subUnitId
 )
 return _0x3c33c1;
 if (_0x49f88d.params["payload"].type === u.UpdateRuleType["RANGE"]) {
 let { unitId: _0x2ab207, subUnitId: _0x19000d } = _0x16a504.params,
 _0x4f6d88 = Array.isArray(_0x16a504.params["rule"])
 ? _0x16a504.params["rule"]
 : [_0x16a504.params["rule"]],
 _0x2e927c = [],
 _0x532df5 = _0x49f88d.params["payload"].payload,
 _0x347319 = Dt([
 ..._0x4f6d88,
 { uid: _0x49f88d.params["ruleId"], ranges: _0x532df5 },
 ]);
 return (
 _0x4f6d88.forEach((_0x503aee) => {
 let _0x7639eb = _0x347319.get(_0x503aee.uid) ?? [];
 (0, e.isRangesEqual)(_0x7639eb, _0x503aee.ranges) ||
 (_0x7639eb.length
 ? _0x2e927c.push({
 id: u.UpdateDataValidationMutation["id"],
 params: {
 unitId: _0x2ab207,
 subUnitId: _0x19000d,
 ruleId: _0x503aee.uid,
 payload: {
 type: u.UpdateRuleType["RANGE"],
 payload: _0x7639eb,
 },
 },
 })
 : _0x2e927c.push({
 id: u.RemoveDataValidationMutation["id"],
 params: {
 unitId: _0x2ab207,
 subUnitId: _0x19000d,
 ruleId: _0x503aee.uid,
 },
 }));
 }),
 {
 m1Prime: kt(_0x16a504, _0x2e927c),
 m2Prime: [..._0x2e927c, _0x49f88d],
 }
 );
 }
 return _0x3c33c1;
 },
 },
 Mt = {
 m1: d.AddHyperLinkMutation["id"],
 m2: d.AddHyperLinkMutation["id"],
 handler: (_0x4e2fce, _0x1da526) => {
 let _0x1949f4 = _0x4e2fce.params,
 _0x1a54f9 = _0x1da526.params;
 return _0x1949f4.unitId === _0x1a54f9.unitId &&
 _0x1949f4.subUnitId === _0x1a54f9.subUnitId &&
 _0x1949f4.link["row"] === _0x1a54f9.link["row"] &&
 _0x1949f4.link["column"] === _0x1a54f9.link["column"]
 ? { m2Prime: _0x1da526, m1Prime: [] }
 : { m1Prime: _0x4e2fce, m2Prime: _0x1da526 };
 },
 },
 Nt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x2733f5, _0x160f97) => {
 let _0x9b17ea = { m1Prime: _0x2733f5, m2Prime: _0x160f97 };
 return _0x2733f5.params["unitId"] !== _0x160f97.params["unitId"] ||
 _0x2733f5.params["subUnitId"] !== _0x160f97.params["subUnitId"]
 ? _0x9b17ea
 : {
 error: Error(
 "add\x20range\x20protection\x20is\x20conflict\x20with\x20add\x20comment",
 ),
 };
 },
 },
 Pt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: l.AddConditionalRuleMutation["id"],
 handler: (_0x338901, _0x50298b) => {
 let _0x27b9a0 = { m1Prime: _0x338901, m2Prime: _0x50298b };
 if (
 _0x338901.params["unitId"] !== _0x50298b.params["unitId"] ||
 _0x338901.params["subUnitId"] !== _0x50298b.params["subUnitId"]
 )
 return _0x27b9a0;
 let _0x1f6ec6 = _0x338901.params["rules"]
 .map((_0x2d5d37) => _0x2d5d37.ranges)
 .flat(),
 _0x1c4c98 = _0x50298b.params["rule"].ranges;
 return _0x1f6ec6.some((_0x1bad53) =>
 _0x1c4c98.some((_0x2925fc) =>
 e.Rectangle["intersects"](_0x1bad53, _0x2925fc),
 ),
 )
 ? {
 error: Error(
 "add range protection is conflict with add conditional rule",
 ),
 }
 : _0x27b9a0;
 },
 },
 Ft = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.AddRangeProtectionMutation["id"],
 handler: (_0x183a09, _0x3cf9b2) => {
 let _0x2771ca = { m1Prime: _0x183a09, m2Prime: _0x3cf9b2 };
 if (
 _0x183a09.params["unitId"] !== _0x3cf9b2.params["unitId"] ||
 _0x183a09.params["subUnitId"] !== _0x3cf9b2.params["subUnitId"]
 )
 return _0x2771ca;
 let _0x5ea86a = _0x183a09.params["rules"]
 .map((_0x430c25) => _0x430c25.ranges)
 .flat(),
 _0x332b57 = _0x3cf9b2.params["rules"]
 .map((_0x4a9306) => _0x4a9306.ranges)
 .flat();
 return _0x5ea86a.some((_0x1f26fd) =>
 _0x332b57.some((_0x4c0132) =>
 e.Rectangle["intersects"](_0x1f26fd, _0x4c0132),
 ),
 )
 ? {
 error: Error(
 "add range protection is conflict with add range protection",
 ),
 }
 : _0x2771ca;
 },
 },
 It = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler: (_0x21671e, _0x40c5e6) => {
 let _0x3b2436 = { m1Prime: _0x21671e, m2Prime: _0x40c5e6 };
 if (
 _0x21671e.params["unitId"] !== _0x40c5e6.params["unitId"] ||
 _0x21671e.params["subUnitId"] !== _0x40c5e6.params["subUnitId"]
 )
 return _0x3b2436;
 let _0x19c97d = _0x21671e.params["rules"]
 .map((_0x1151de) => _0x1151de.ranges)
 .flat(),
 _0xa82fb5 = _0x40c5e6.params["ranges"];
 return _0x19c97d.some((_0x12629c) =>
 _0xa82fb5.some((_0x70bb8c) =>
 e.Rectangle["intersects"](_0x12629c, _0x70bb8c),
 ),
 )
 ? {
 error: Error(
 "add range protection is conflict with add worksheet merge",
 ),
 }
 : _0x3b2436;
 },
 },
 Lt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.AddWorksheetProtectionMutation["id"],
 handler: (_0x587b8c, _0x1d8dce) => {
 let _0x47183c = { m1Prime: _0x587b8c, m2Prime: _0x1d8dce };
 return _0x587b8c.params["unitId"] !== _0x1d8dce.params["unitId"] ||
 _0x587b8c.params["subUnitId"] !== _0x1d8dce.params["rule"].subUnitId
 ? _0x47183c
 : {
 error: Error(
 "add\x20range\x20protection\x20is\x20conflict\x20with\x20add\x20worksheet\x20protection",
 ),
 };
 },
 },
 Rt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: l.DeleteConditionalRuleMutation["id"],
 handler: (_0x1cf6b0, _0xa570fb) => {
 let _0x1f9473 = { m1Prime: _0x1cf6b0, m2Prime: _0xa570fb };
 return _0x1cf6b0.params["unitId"] !== _0xa570fb.params["unitId"] ||
 _0x1cf6b0.params["subUnitId"] !== _0xa570fb.params["subUnitId"]
 ? _0x1f9473
 : {
 error: Error(
 "add range protection is conflict with delete conditional formatting rule",
 ),
 };
 },
 },
 zt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.InsertColMutation["id"],
 handler: (_0x4af328, _0x1bfdd9) => {
 let _0x1b43be = { m1Prime: _0x4af328, m2Prime: _0x1bfdd9 };
 if (
 _0x4af328.params["unitId"] !== _0x1bfdd9.params["unitId"] ||
 _0x4af328.params["subUnitId"] !== _0x1bfdd9.params["subUnitId"]
 )
 return _0x1b43be;
 let _0x4bad57 = _0x4af328.params["rules"]
 .map((_0x2b9dff) => _0x2b9dff.ranges)
 .flat(),
 _0x256379 = _0x1bfdd9.params["range"];
 return _0x4bad57.some((_0x4d9138) =>
 e.Rectangle["intersects"](_0x4d9138, _0x256379),
 )
 ? {
 error: Error(
 "add\x20range\x20protection\x20is\x20conflict\x20with\x20insert\x20col",
 ),
 }
 : _0x1b43be;
 },
 },
 Bt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.InsertRowMutation["id"],
 handler: (_0x4db1ef, _0x5156d3) => {
 let _0x31123c = { m1Prime: _0x4db1ef, m2Prime: _0x5156d3 };
 if (
 _0x4db1ef.params["unitId"] !== _0x5156d3.params["unitId"] ||
 _0x4db1ef.params["subUnitId"] !== _0x5156d3.params["subUnitId"]
 )
 return _0x31123c;
 let _0xbe3d7 = _0x4db1ef.params["rules"]
 .map((_0x51bf9d) => _0x51bf9d.ranges)
 .flat(),
 _0x37253b = _0x5156d3.params["range"];
 return _0xbe3d7.some((_0x6091d) =>
 e.Rectangle["intersects"](_0x6091d, _0x37253b),
 )
 ? { error: Error("add range protection is conflict with insert row") }
 : _0x31123c;
 },
 },
 Vt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.MoveColsMutation["id"],
 handler: (_0x321791, _0x55e1e0) => {
 let _0x43299a = { m1Prime: _0x321791, m2Prime: _0x55e1e0 };
 if (
 _0x321791.params["unitId"] !== _0x55e1e0.params["unitId"] ||
 _0x321791.params["subUnitId"] !== _0x55e1e0.params["subUnitId"]
 )
 return _0x43299a;
 let _0x450069 = _0x321791.params["rules"]
 .map((_0xdf3da7) => _0xdf3da7.ranges)
 .flat(),
 _0x46055f = [
 _0x55e1e0.params["sourceRange"],
 _0x55e1e0.params["targetRange"],
 ];
 return _0x450069.some((_0x899790) =>
 _0x46055f.some((_0xb86cdd) =>
 e.Rectangle["intersects"](_0x899790, _0xb86cdd),
 ),
 )
 ? {
 error: Error(
 "add\x20range\x20protection\x20is\x20conflict\x20with\x20move\x20col",
 ),
 }
 : _0x43299a;
 },
 },
 Ht = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler: (_0x3fe4bb, _0x5816d1) => {
 let _0x4d0b1b = { m1Prime: _0x3fe4bb, m2Prime: _0x5816d1 };
 if (
 _0x3fe4bb.params["unitId"] !== _0x5816d1.params["unitId"] ||
 _0x3fe4bb.params["subUnitId"] !== _0x5816d1.params["from"].subUnitId
 )
 return _0x4d0b1b;
 let _0x25e17c = _0x3fe4bb.params["rules"]
 .map((_0x10d6ea) => _0x10d6ea.ranges)
 .flat(),
 _0x39a9b5 = [
 new e["ObjectMatrix"](_0x5816d1.params["from"].value).getDataRange(),
 new e["ObjectMatrix"](_0x5816d1.params["to"].value).getDataRange(),
 ];
 return _0x25e17c.some((_0x1f8a4f) =>
 _0x39a9b5.some((_0xdd339a) =>
 e.Rectangle["intersects"](_0x1f8a4f, _0xdd339a),
 ),
 )
 ? {
 error: Error(
 "add\x20range\x20protection\x20is\x20conflict\x20with\x20move\x20range",
 ),
 }
 : _0x4d0b1b;
 },
 },
 Ut = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.MoveRowsMutation["id"],
 handler: (_0x6fe6, _0x41db60) => {
 let _0x23726b = { m1Prime: _0x6fe6, m2Prime: _0x41db60 };
 if (
 _0x6fe6.params["unitId"] !== _0x41db60.params["unitId"] ||
 _0x6fe6.params["subUnitId"] !== _0x41db60.params["subUnitId"]
 )
 return _0x23726b;
 let _0x560de4 = _0x6fe6.params["rules"]
 .map((_0x57fde9) => _0x57fde9.ranges)
 .flat(),
 _0x41be0e = [
 _0x41db60.params["sourceRange"],
 _0x41db60.params["targetRange"],
 ];
 return _0x560de4.some((_0x117805) =>
 _0x41be0e.some((_0x1d23a5) =>
 e.Rectangle["intersects"](_0x117805, _0x1d23a5),
 ),
 )
 ? { error: Error("add range protection is conflict with move row") }
 : _0x23726b;
 },
 },
 Wt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.RemoveColMutation["id"],
 handler: (_0x208a47, _0x29a976) => {
 let _0x57ae61 = { m1Prime: _0x208a47, m2Prime: _0x29a976 };
 if (
 _0x208a47.params["unitId"] !== _0x29a976.params["unitId"] ||
 _0x208a47.params["subUnitId"] !== _0x29a976.params["subUnitId"]
 )
 return _0x57ae61;
 let _0x5819f0 = _0x208a47.params["rules"]
 .map((_0xb76e9b) => _0xb76e9b.ranges)
 .flat(),
 _0x4d5318 = _0x29a976.params["range"];
 return _0x5819f0.some((_0x51d632) =>
 e.Rectangle["intersects"](_0x51d632, _0x4d5318),
 )
 ? { error: Error("add range protection is conflict with remove col") }
 : _0x57ae61;
 },
 },
 Gt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: u.RemoveDataValidationMutation["id"],
 handler: (_0x306fe8, _0x30a941) => {
 let _0x9a369d = { m1Prime: _0x306fe8, m2Prime: _0x30a941 };
 return _0x306fe8.params["unitId"] !== _0x30a941.params["unitId"] ||
 _0x306fe8.params["subUnitId"] !== _0x30a941.params["subUnitId"]
 ? _0x9a369d
 : {
 error: Error(
 "add range protection is conflict with remove data validation rule",
 ),
 };
 },
 },
 Kt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler: (_0x3f6585, _0x216529) => {
 let _0x3d815d = { m1Prime: _0x3f6585, m2Prime: _0x216529 };
 if (
 _0x3f6585.params["unitId"] !== _0x216529.params["unitId"] ||
 _0x3f6585.params["subUnitId"] !== _0x216529.params["subUnitId"]
 )
 return _0x3d815d;
 let _0x5a5809 = _0x3f6585.params["rules"]
 .map((_0x39a199) => _0x39a199.ranges)
 .flat(),
 _0x6c8203 = _0x216529.params["ranges"];
 return _0x5a5809.some((_0x4b24f2) =>
 _0x6c8203.some((_0x23f633) =>
 e.Rectangle["intersects"](_0x4b24f2, _0x23f633),
 ),
 )
 ? {
 error: Error("add range protection is conflict with remove numfmt"),
 }
 : _0x3d815d;
 },
 },
 qt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: f.RemoveSheetsFilterMutation["id"],
 handler: (_0x49de4a, _0x1ee597) => {
 let _0x4cc785 = { m1Prime: _0x49de4a, m2Prime: _0x1ee597 };
 return _0x49de4a.params["unitId"] !== _0x1ee597.params["unitId"] ||
 _0x49de4a.params["subUnitId"] !== _0x1ee597.params["subUnitId"]
 ? _0x4cc785
 : {
 error: Error("add range protection is conflict with remove filter"),
 };
 },
 },
 Jt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler: (_0xefa6f5, _0x3919f4) => {
 let _0xcf02f4 = { m1Prime: _0xefa6f5, m2Prime: _0x3919f4 };
 if (
 _0xefa6f5.params["unitId"] !== _0x3919f4.params["unitId"] ||
 _0xefa6f5.params["subUnitId"] !== _0x3919f4.params["subUnitId"]
 )
 return _0xcf02f4;
 let _0x2abff1 = _0xefa6f5.params["rules"]
 .map((_0x1ccd87) => _0x1ccd87.ranges)
 .flat(),
 _0x391117 = _0x3919f4.params["ranges"];
 return _0x2abff1.some((_0x341dc5) =>
 _0x391117.some((_0x1dd5f8) =>
 e.Rectangle["intersects"](_0x341dc5, _0x1dd5f8),
 ),
 )
 ? {
 error: Error(
 "add range protection is conflict with remove worksheet merge",
 ),
 }
 : _0xcf02f4;
 },
 },
 Yt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: l.SetConditionalRuleMutation["id"],
 handler: (_0x156c9f, _0x1c0fa5) => {
 let _0x26f9dc = { m1Prime: _0x156c9f, m2Prime: _0x1c0fa5 };
 if (
 _0x156c9f.params["unitId"] !== _0x1c0fa5.params["unitId"] ||
 _0x156c9f.params["subUnitId"] !== _0x1c0fa5.params["subUnitId"]
 )
 return _0x26f9dc;
 let _0x1c320d = _0x156c9f.params["rules"]
 .map((_0x3c60af) => _0x3c60af.ranges)
 .flat(),
 _0x1d2181 = _0x1c0fa5.params["rule"].ranges;
 return _0x1c320d.some((_0x538ced) =>
 _0x1d2181.some((_0x2a8e9c) =>
 e.Rectangle["intersects"](_0x538ced, _0x2a8e9c),
 ),
 )
 ? {
 error: Error(
 "add\x20range\x20protection\x20is\x20conflict\x20with\x20set\x20conditional\x20formatting\x20rule",
 ),
 }
 : _0x26f9dc;
 },
 },
 Xt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.SetFrozenMutation["id"],
 handler: (_0xcfc96d, _0x26d5e2) => {
 let _0x4617cb = { m1Prime: _0xcfc96d, m2Prime: _0x26d5e2 };
 if (
 _0xcfc96d.params["unitId"] !== _0x26d5e2.params["unitId"] ||
 _0xcfc96d.params["subUnitId"] !== _0x26d5e2.params["subUnitId"]
 )
 return _0x4617cb;
 let _0x4f6eb7 = _0xcfc96d.params["rules"]
 .map((_0x5158f7) => _0x5158f7.ranges)
 .flat(),
 _0x34af76 = [
 {
 startRow: _0x26d5e2.params["startRow"],
 endRow: _0x26d5e2.params["startRow"],
 startColumn: _0x26d5e2.params["startColumn"],
 endColumn: _0x26d5e2.params["startColumn"],
 },
 ];
 return _0x4f6eb7.some((_0xc83b47) =>
 _0x34af76.some((_0x15673f) =>
 e.Rectangle["intersects"](_0xc83b47, _0x15673f),
 ),
 )
 ? { error: Error("add range protection is conflict with set frozen") }
 : _0x4617cb;
 },
 },
 Zt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler: (_0x2dd93f, _0x2badb1) => {
 let _0x348ea1 = { m1Prime: _0x2dd93f, m2Prime: _0x2badb1 };
 return _0x2dd93f.params["unitId"] !== _0x2badb1.params["unitId"] ||
 _0x2dd93f.params["subUnitId"] !== _0x2badb1.params["subUnitId"]
 ? _0x348ea1
 : { error: Error("add range protection is conflict with set numfmt") };
 },
 },
 Qt = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.SetRangeProtectionMutation["id"],
 handler: (_0x394239, _0x105bcc) => {
 let _0x28e868 = { m1Prime: _0x394239, m2Prime: _0x105bcc };
 if (
 _0x394239.params["unitId"] !== _0x105bcc.params["unitId"] ||
 _0x394239.params["subUnitId"] !== _0x105bcc.params["subUnitId"]
 )
 return _0x28e868;
 let _0x17a4ee = _0x394239.params["rules"]
 .map((_0xae652a) => _0xae652a.ranges)
 .flat(),
 _0xa2646f = _0x105bcc.params["rule"].ranges;
 return _0x17a4ee.some((_0x5a2e8f) =>
 _0xa2646f.some((_0x5e0cf4) =>
 e.Rectangle["intersects"](_0x5a2e8f, _0x5e0cf4),
 ),
 )
 ? {
 error: Error(
 "add range protection is conflict with set range protection",
 ),
 }
 : _0x28e868;
 },
 },
 $t = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler: (_0x238295, _0x440181) => {
 let _0x9c50a5 = { m1Prime: _0x238295, m2Prime: _0x440181 };
 if (
 _0x238295.params["unitId"] !== _0x440181.params["unitId"] ||
 _0x238295.params["subUnitId"] !== _0x440181.params["subUnitId"]
 )
 return _0x9c50a5;
 let _0x59844d = _0x238295.params["rules"]
 .map((_0x2d25e6) => _0x2d25e6.ranges)
 .flat(),
 _0x584ac7 = new e["ObjectMatrix"](
 _0x440181.params["cellValue"],
 ).getDataRange();
 return _0x59844d.some((_0x587673) =>
 e.Rectangle["intersects"](_0x587673, _0x584ac7),
 )
 ? {
 error: Error(
 "add\x20range\x20protection\x20is\x20conflict\x20with\x20set\x20range\x20value",
 ),
 }
 : _0x9c50a5;
 },
 },
 en = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: o.SetWorksheetColWidthMutation["id"],
 handler: (_0x45594b, _0xb179cc) => {
 let _0x3367ed = { m1Prime: _0x45594b, m2Prime: _0xb179cc };
 if (
 _0x45594b.params["unitId"] !== _0xb179cc.params["unitId"] ||
 _0x45594b.params["subUnitId"] !== _0xb179cc.params["subUnitId"]
 )
 return _0x3367ed;
 let _0x79d9fd = _0x45594b.params["rules"]
 .map((_0x819eb7) => _0x819eb7.ranges)
 .flat(),
 _0x1053e6 = _0xb179cc.params["ranges"];
 return _0x79d9fd.some((_0x385c59) =>
 _0x1053e6.some((_0x2c6fe2) =>
 e.Rectangle["intersects"](_0x385c59, _0x2c6fe2),
 ),
 )
 ? {
 error: Error(
 "add range protection is conflict with set worksheet col width",
 ),
 }
 : _0x3367ed;
 },
 },
 tn = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: c.UpdateCommentMutation["id"],
 handler: (_0x4175eb, _0x346151) => {
 let _0x17fa0e = { m1Prime: _0x4175eb, m2Prime: _0x346151 };
 return _0x4175eb.params["unitId"] !== _0x346151.params["unitId"] ||
 _0x4175eb.params["subUnitId"] !== _0x346151.params["subUnitId"]
 ? _0x17fa0e
 : {
 error: Error(
 "add range protection is conflict with update comment",
 ),
 };
 },
 },
 nn = {
 m1: o.AddRangeProtectionMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x2debc5, _0x4ada45) => {
 let _0x320d6e = { m1Prime: _0x2debc5, m2Prime: _0x4ada45 };
 return _0x2debc5.params["unitId"] !== _0x4ada45.params["unitId"] ||
 _0x2debc5.params["subUnitId"] !== _0x4ada45.params["subUnitId"]
 ? _0x320d6e
 : {
 error: Error(
 "add range protection is conflict with update data validation rule",
 ),
 };
 },
 },
 rn = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x139cf6, _0x33bebd) {
 let _0x10f1cf = e.Tools["deepClone"](_0x139cf6),
 _0x34d285 = e.Tools["deepClone"](_0x33bebd);
 if (
 _0x139cf6.params["unitId"] !== _0x33bebd.params["unitId"] ||
 _0x139cf6.params["subUnitId"] !== _0x33bebd.params["subUnitId"]
 )
 return { m1Prime: _0x10f1cf, m2Prime: _0x34d285 };
 let _0x2c05b8 = _0x10f1cf.params["ranges"],
 _0xfaf9bd = _0x34d285.params["ranges"],
 _0x189542 = [_0x34d285],
 _0x5b2e9e = new Set();
 for (let _0x5f3a1c = 0; _0x5f3a1c < _0x2c05b8.length; _0x5f3a1c++)
 for (let _0x3f6d48 = 0; _0x3f6d48 < _0xfaf9bd.length; _0x3f6d48++)
 if (
 e.Rectangle["intersects"](
 _0x2c05b8[_0x5f3a1c],
 _0xfaf9bd[_0x3f6d48],
 )
 ) {
 (_0x5b2e9e.add(_0x2c05b8[_0x5f3a1c]),
 _0x2c05b8.splice(_0x5f3a1c, 1),
 _0x5f3a1c--);
 break;
 }
 return (
 _0x5b2e9e.size > 0 &&
 _0x189542.unshift({
 id: o.RemoveWorksheetMergeMutation["id"],
 params: {
 unitId: _0x139cf6.params["unitId"],
 subUnitId: _0x139cf6.params["subUnitId"],
 ranges: Array.from(_0x5b2e9e),
 },
 }),
 _0x2c05b8.length === 0 && (_0x10f1cf.id = o.EmptyMutation["id"]),
 {
 m1Prime: _0x10f1cf,
 m2Prime: _0x189542.length > 1 ? _0x189542 : _0x34d285,
 }
 );
 },
 },
 an = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.InsertColMutation["id"],
 handler(_0x5ea8cf, _0x222cdf) {
 let _0x560e57 = e.Tools["deepClone"](_0x5ea8cf),
 _0x32e418 = e.Tools["deepClone"](_0x222cdf);
 if (
 _0x5ea8cf.params["unitId"] !== _0x222cdf.params["unitId"] ||
 _0x5ea8cf.params["subUnitId"] !== _0x222cdf.params["subUnitId"]
 )
 return { m1Prime: _0x560e57, m2Prime: _0x32e418 };
 let _0x35855a = _0x5ea8cf.params["unitId"],
 _0x351e47 = _0x5ea8cf.params["subUnitId"],
 _0x5dc84b = [_0x32e418],
 _0x1ead22 = [],
 _0x561511 = [];
 return (
 _0x560e57.params["ranges"].forEach((_0x505cb8) => {
 let _0x481d0b = _0x222cdf.params["range"],
 _0x12fbd4 = _0x481d0b.endColumn - _0x481d0b.startColumn + 1;
 _0x481d0b.startColumn <= _0x505cb8.startColumn
 ? (_0x1ead22.push({ ..._0x505cb8 }),
 _0x561511.push({
 ..._0x505cb8,
 startColumn: _0x505cb8.startColumn + _0x12fbd4,
 endColumn: _0x505cb8.endColumn + _0x12fbd4,
 }),
 (_0x505cb8.startColumn += _0x12fbd4),
 (_0x505cb8.endColumn += _0x12fbd4))
 : _0x481d0b.startColumn > _0x505cb8.startColumn &&
 _0x481d0b.startColumn <= _0x505cb8.endColumn &&
 (_0x1ead22.push({ ..._0x505cb8 }),
 _0x561511.push({
 ..._0x505cb8,
 endColumn: _0x505cb8.endColumn + _0x12fbd4,
 }),
 (_0x505cb8.endColumn += _0x12fbd4));
 }),
 _0x1ead22.length > 0 &&
 _0x5dc84b.unshift({
 id: o.RemoveWorksheetMergeMutation["id"],
 params: {
 unitId: _0x35855a,
 subUnitId: _0x351e47,
 ranges: _0x1ead22,
 },
 }),
 _0x561511.length > 0 &&
 _0x5dc84b.push({
 id: o.AddWorksheetMergeMutation["id"],
 params: {
 unitId: _0x35855a,
 subUnitId: _0x351e47,
 ranges: _0x561511,
 },
 }),
 {
 m1Prime: _0x560e57,
 m2Prime: _0x5dc84b.length > 1 ? _0x5dc84b : _0x5dc84b[0],
 }
 );
 },
 },
 on = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.InsertRowMutation["id"],
 handler(_0x2d556f, _0x3e8691) {
 let _0x4fb010 = e.Tools["deepClone"](_0x2d556f),
 _0x2de98b = e.Tools["deepClone"](_0x3e8691);
 if (
 _0x2d556f.params["unitId"] !== _0x3e8691.params["unitId"] ||
 _0x2d556f.params["subUnitId"] !== _0x3e8691.params["subUnitId"]
 )
 return { m1Prime: _0x4fb010, m2Prime: _0x2de98b };
 let _0x5d8abe = _0x2d556f.params["unitId"],
 _0x28918c = _0x2d556f.params["subUnitId"],
 _0x2a629a = [_0x2de98b],
 _0x4d8c7d = [],
 _0x82a8f1 = [];
 return (
 _0x4fb010.params["ranges"].forEach((_0x4d67b6) => {
 let _0x11a95c = _0x3e8691.params["range"],
 _0x17b96a = _0x11a95c.endRow - _0x11a95c.startRow + 1;
 _0x11a95c.startRow <= _0x4d67b6.startRow
 ? (_0x4d8c7d.push({ ..._0x4d67b6 }),
 _0x82a8f1.push({
 ..._0x4d67b6,
 startRow: _0x4d67b6.startRow + _0x17b96a,
 endRow: _0x4d67b6.endRow + _0x17b96a,
 }),
 (_0x4d67b6.startRow += _0x17b96a),
 (_0x4d67b6.endRow += _0x17b96a))
 : _0x11a95c.startRow > _0x4d67b6.startRow &&
 _0x11a95c.startRow <= _0x4d67b6.endRow &&
 (_0x4d8c7d.push({ ..._0x4d67b6 }),
 _0x82a8f1.push({
 ..._0x4d67b6,
 endRow: _0x4d67b6.endRow + _0x17b96a,
 }),
 (_0x4d67b6.endRow += _0x17b96a));
 }),
 _0x4d8c7d.length > 0 &&
 _0x2a629a.unshift({
 id: o.RemoveWorksheetMergeMutation["id"],
 params: {
 unitId: _0x5d8abe,
 subUnitId: _0x28918c,
 ranges: _0x4d8c7d,
 },
 }),
 _0x82a8f1.length > 0 &&
 _0x2a629a.push({
 id: o.AddWorksheetMergeMutation["id"],
 params: {
 unitId: _0x5d8abe,
 subUnitId: _0x28918c,
 ranges: _0x82a8f1,
 },
 }),
 {
 m1Prime: _0x4fb010,
 m2Prime: _0x2a629a.length > 1 ? _0x2a629a : _0x2a629a[0],
 }
 );
 },
 },
 sn = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.MoveColsMutation["id"],
 handler(_0x39061d, _0x5b213b) {
 let _0x12db4a = e.Tools["deepClone"](_0x39061d),
 _0x346f87 = e.Tools["deepClone"](_0x5b213b);
 if (
 _0x39061d.params["unitId"] !== _0x5b213b.params["unitId"] ||
 _0x39061d.params["subUnitId"] !== _0x5b213b.params["subUnitId"]
 )
 return { m1Prime: _0x12db4a, m2Prime: _0x346f87 };
 let _0x522cbe = [],
 _0x9f1d70 = [],
 _0x1ff261 = [_0x346f87];
 for (
 let _0x10811c = 0;
 _0x10811c < _0x12db4a.params["ranges"].length;
 _0x10811c++
 ) {
 let _0x1e5c84 = _0x12db4a.params["ranges"][_0x10811c],
 { sourceRange: _0x5134f4, targetRange: _0x11e26e } = _0x5b213b.params;
 e.Rectangle["intersects"](_0x1e5c84, _0x5134f4) ||
 e.Rectangle["intersects"](_0x1e5c84, _0x11e26e)
 ? (_0x522cbe.push({ ..._0x1e5c84 }),
 _0x12db4a.params["ranges"].splice(_0x10811c, 1),
 _0x10811c--)
 : _0x5134f4.startColumn < _0x1e5c84.startColumn &&
 _0x11e26e.startColumn > _0x1e5c84.endColumn
 ? (_0x522cbe.push({ ..._0x1e5c84 }),
 _0x9f1d70.push({
 ..._0x1e5c84,
 startColumn:
 _0x1e5c84.startColumn -
 (_0x5134f4.endColumn - _0x5134f4.startColumn + 1),
 endColumn:
 _0x1e5c84.endColumn -
 (_0x5134f4.endColumn - _0x5134f4.startColumn + 1),
 }),
 (_0x1e5c84.startColumn -=
 _0x5134f4.endColumn - _0x5134f4.startColumn + 1),
 (_0x1e5c84.endColumn -=
 _0x5134f4.endColumn - _0x5134f4.startColumn + 1))
 : _0x5134f4.startColumn > _0x1e5c84.endColumn &&
 _0x11e26e.endColumn < _0x1e5c84.startColumn &&
 (_0x522cbe.push({ ..._0x1e5c84 }),
 _0x9f1d70.push({
 ..._0x1e5c84,
 startColumn:
 _0x1e5c84.startColumn +
 (_0x5134f4.endColumn - _0x5134f4.startColumn + 1),
 endColumn:
 _0x1e5c84.endColumn +
 (_0x5134f4.endColumn - _0x5134f4.startColumn + 1),
 }),
 (_0x1e5c84.startColumn +=
 _0x5134f4.endColumn - _0x5134f4.startColumn + 1),
 (_0x1e5c84.endColumn +=
 _0x5134f4.endColumn - _0x5134f4.startColumn + 1));
 }
 return (
 _0x522cbe.length > 0 &&
 _0x1ff261.unshift({
 id: o.RemoveWorksheetMergeMutation["id"],
 params: {
 unitId: _0x39061d.params["unitId"],
 subUnitId: _0x39061d.params["subUnitId"],
 ranges: _0x522cbe,
 },
 }),
 _0x9f1d70.length > 0 &&
 _0x1ff261.push({
 id: o.AddWorksheetMergeMutation["id"],
 params: {
 unitId: _0x39061d.params["unitId"],
 subUnitId: _0x39061d.params["subUnitId"],
 ranges: _0x9f1d70,
 },
 }),
 _0x12db4a.params["ranges"].length === 0 &&
 (_0x12db4a.id = o.EmptyMutation["id"]),
 {
 m1Prime: _0x12db4a,
 m2Prime: _0x1ff261.length > 1 ? _0x1ff261 : _0x1ff261[0],
 }
 );
 },
 },
 cn = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x3d4b16, _0x11c077) {
 let _0x49b286 = e.Tools["deepClone"](_0x3d4b16),
 _0x41864e = e.Tools["deepClone"](_0x11c077);
 if (_0x3d4b16.params["unitId"] !== _0x11c077.params["unitId"])
 return { m1Prime: _0x49b286, m2Prime: _0x41864e };
 let _0x2d8898 = [],
 _0x27b32d = [_0x41864e],
 _0x538dcf = new e.ObjectMatrix(
 _0x11c077.params["from"].value,
 ).getDataRange(),
 _0x9d03df = new e.ObjectMatrix(
 _0x11c077.params["to"].value,
 ).getDataRange();
 for (
 let _0x3c688f = 0;
 _0x3c688f < _0x49b286.params["ranges"].length;
 _0x3c688f++
 ) {
 let _0xe1926d = _0x49b286.params["ranges"][_0x3c688f];
 (e.Rectangle["intersects"](_0x538dcf, _0xe1926d) ||
 e.Rectangle["intersects"](_0x9d03df, _0xe1926d)) &&
 (_0x2d8898.push(_0xe1926d),
 _0x49b286.params["ranges"].splice(_0x3c688f, 1),
 _0x3c688f--);
 }
 return (
 _0x2d8898.length > 0 &&
 _0x27b32d.unshift({
 id: o.RemoveWorksheetMergeMutation["id"],
 params: {
 unitId: _0x3d4b16.params["unitId"],
 subUnitId: _0x3d4b16.params["subUnitId"],
 ranges: _0x2d8898,
 },
 }),
 _0x49b286.params["ranges"].length === 0 &&
 (_0x49b286.id = o.EmptyMutation["id"]),
 {
 m1Prime: _0x49b286,
 m2Prime: _0x27b32d.length > 1 ? _0x27b32d : _0x27b32d[0],
 }
 );
 },
 },
 ln = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.MoveRowsMutation["id"],
 handler(_0xba8ab4, _0x32b662) {
 let _0x2faea3 = e.Tools["deepClone"](_0xba8ab4),
 _0x23b34a = e.Tools["deepClone"](_0x32b662);
 if (
 _0xba8ab4.params["unitId"] !== _0x32b662.params["unitId"] ||
 _0xba8ab4.params["subUnitId"] !== _0x32b662.params["subUnitId"]
 )
 return { m1Prime: _0x2faea3, m2Prime: _0x23b34a };
 let _0x3bdaeb = [],
 _0x47f773 = [],
 _0x5923d7 = [_0x23b34a];
 for (
 let _0x551b95 = 0;
 _0x551b95 < _0x2faea3.params["ranges"].length;
 _0x551b95++
 ) {
 let _0x5423ac = _0x2faea3.params["ranges"][_0x551b95],
 { sourceRange: _0x30a4cd, targetRange: _0x27700b } = _0x32b662.params;
 e.Rectangle["intersects"](_0x5423ac, _0x30a4cd) ||
 e.Rectangle["intersects"](_0x5423ac, _0x27700b)
 ? (_0x3bdaeb.push({ ..._0x5423ac }),
 _0x2faea3.params["ranges"].splice(_0x551b95, 1),
 _0x551b95--)
 : _0x30a4cd.startRow < _0x5423ac.startRow &&
 _0x27700b.startRow > _0x5423ac.endRow
 ? (_0x3bdaeb.push({ ..._0x5423ac }),
 _0x47f773.push({
 ..._0x5423ac,
 startRow:
 _0x5423ac.startRow -
 (_0x30a4cd.endRow - _0x30a4cd.startRow + 1),
 endRow:
 _0x5423ac.endRow -
 (_0x30a4cd.endRow - _0x30a4cd.startRow + 1),
 }),
 (_0x5423ac.startRow -= _0x30a4cd.endRow - _0x30a4cd.startRow + 1),
 (_0x5423ac.endRow -= _0x30a4cd.endRow - _0x30a4cd.startRow + 1))
 : _0x30a4cd.startRow > _0x5423ac.endRow &&
 _0x27700b.endRow < _0x5423ac.startRow &&
 (_0x3bdaeb.push({ ..._0x5423ac }),
 _0x47f773.push({
 ..._0x5423ac,
 startRow:
 _0x5423ac.startRow +
 (_0x30a4cd.endRow - _0x30a4cd.startRow + 1),
 endRow:
 _0x5423ac.endRow +
 (_0x30a4cd.endRow - _0x30a4cd.startRow + 1),
 }),
 (_0x5423ac.startRow += _0x30a4cd.endRow - _0x30a4cd.startRow + 1),
 (_0x5423ac.endRow += _0x30a4cd.endRow - _0x30a4cd.startRow + 1));
 }
 return (
 _0x3bdaeb.length > 0 &&
 _0x5923d7.unshift({
 id: o.RemoveWorksheetMergeMutation["id"],
 params: {
 unitId: _0xba8ab4.params["unitId"],
 subUnitId: _0xba8ab4.params["subUnitId"],
 ranges: _0x3bdaeb,
 },
 }),
 _0x47f773.length > 0 &&
 _0x5923d7.push({
 id: o.AddWorksheetMergeMutation["id"],
 params: {
 unitId: _0xba8ab4.params["unitId"],
 subUnitId: _0xba8ab4.params["subUnitId"],
 ranges: _0x47f773,
 },
 }),
 _0x2faea3.params["ranges"].length === 0 &&
 (_0x2faea3.id = o.EmptyMutation["id"]),
 {
 m1Prime: _0x2faea3,
 m2Prime: _0x5923d7.length > 1 ? _0x5923d7 : _0x5923d7[0],
 }
 );
 },
 };
function O(_0x1d2a9e) {
 return _0x1d2a9e.startColumn > _0x1d2a9e.endColumn ||
 _0x1d2a9e.startRow > _0x1d2a9e.endRow
 ? false
 : _0x1d2a9e.startRow !== _0x1d2a9e.endRow ||
 _0x1d2a9e.startColumn !== _0x1d2a9e.endColumn;
}
const un = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.RemoveColMutation["id"],
 handler(_0x1c5e73, _0x554e6f) {
 let _0x8ca36 = e.Tools["deepClone"](_0x1c5e73),
 _0x2ef9f7 = e.Tools["deepClone"](_0x554e6f);
 if (
 _0x1c5e73.params["unitId"] !== _0x554e6f.params["unitId"] ||
 _0x1c5e73.params["subUnitId"] !== _0x554e6f.params["subUnitId"]
 )
 return { m1Prime: _0x8ca36, m2Prime: _0x2ef9f7 };
 let _0x39d35b = _0x1c5e73.params["unitId"],
 _0x1a441e = _0x1c5e73.params["subUnitId"],
 _0x3db60a = [_0x2ef9f7],
 _0x5eedb6 = [],
 _0x112e42 = [];
 for (
 let _0x5ee18d = 0;
 _0x5ee18d < _0x8ca36.params["ranges"].length;
 _0x5ee18d++
 ) {
 let _0x3d7ea2 = _0x8ca36.params["ranges"][_0x5ee18d],
 _0x4796ad = _0x554e6f.params["range"],
 _0x3be46f = _0x4796ad.endColumn - _0x4796ad.startColumn + 1;
 if (
 _0x4796ad.startColumn < _0x3d7ea2.startColumn &&
 _0x4796ad.endColumn < _0x3d7ea2.startColumn
 )
 (_0x5eedb6.push({ ..._0x3d7ea2 }),
 _0x112e42.push({
 ..._0x3d7ea2,
 startColumn: _0x3d7ea2.startColumn - _0x3be46f,
 endColumn: _0x3d7ea2.endColumn - _0x3be46f,
 }),
 (_0x3d7ea2.startColumn -= _0x3be46f),
 (_0x3d7ea2.endColumn -= _0x3be46f));
 else {
 if (
 _0x4796ad.startColumn < _0x3d7ea2.startColumn &&
 _0x4796ad.endColumn >= _0x3d7ea2.startColumn &&
 _0x4796ad.endColumn <= _0x3d7ea2.endColumn
 ) {
 _0x5eedb6.push({ ..._0x3d7ea2 });
 let _0x31d6fd = {
 ..._0x3d7ea2,
 startColumn: _0x4796ad.startColumn,
 endColumn: _0x3d7ea2.endColumn - _0x3be46f,
 };
 O(_0x31d6fd) && _0x4796ad.endColumn < _0x3d7ea2.endColumn
 ? (_0x4796ad.endColumn < _0x3d7ea2.endColumn &&
 _0x112e42.push(_0x31d6fd),
 (_0x3d7ea2.startColumn = _0x4796ad.startColumn),
 (_0x3d7ea2.endColumn -= _0x3be46f))
 : (_0x8ca36.params["ranges"].splice(_0x5ee18d, 1), _0x5ee18d--);
 } else {
 if (
 _0x4796ad.startColumn > _0x3d7ea2.startColumn &&
 _0x4796ad.endColumn < _0x3d7ea2.endColumn
 ) {
 _0x5eedb6.push({ ..._0x3d7ea2 });
 let _0xd8180f = {
 ..._0x3d7ea2,
 endColumn: _0x3d7ea2.endColumn - _0x3be46f,
 };
 O(_0xd8180f)
 ? (_0x112e42.push(_0xd8180f),
 (_0x3d7ea2.endColumn -= _0x3be46f))
 : (_0x8ca36.params["ranges"].splice(_0x5ee18d, 1), _0x5ee18d--);
 } else {
 if (
 _0x4796ad.startColumn >= _0x3d7ea2.startColumn &&
 _0x4796ad.startColumn <= _0x3d7ea2.endColumn &&
 _0x4796ad.endColumn > _0x3d7ea2.endColumn
 ) {
 _0x5eedb6.push({ ..._0x3d7ea2 });
 let _0x57a297 = {
 ..._0x3d7ea2,
 endColumn: _0x4796ad.startColumn - 1,
 };
 O(_0x57a297) && _0x4796ad.startColumn > _0x3d7ea2.startColumn
 ? (_0x112e42.push(_0x57a297),
 (_0x3d7ea2.endColumn = _0x4796ad.startColumn - 1))
 : (_0x8ca36.params["ranges"].splice(_0x5ee18d, 1),
 _0x5ee18d--);
 } else
 _0x4796ad.startColumn > _0x3d7ea2.endColumn ||
 (_0x4796ad.startColumn <= _0x3d7ea2.startColumn &&
 _0x4796ad.endColumn >= _0x3d7ea2.endColumn &&
 (_0x5eedb6.push({ ..._0x3d7ea2 }),
 _0x8ca36.params["ranges"].splice(_0x5ee18d, 1),
 _0x5ee18d--));
 }
 }
 }
 }
 return (
 _0x5eedb6.length > 0 &&
 _0x3db60a.unshift({
 id: o.RemoveWorksheetMergeMutation["id"],
 params: {
 unitId: _0x39d35b,
 subUnitId: _0x1a441e,
 ranges: _0x5eedb6,
 },
 }),
 _0x112e42.length > 0 &&
 _0x3db60a.push({
 id: o.AddWorksheetMergeMutation["id"],
 params: {
 unitId: _0x39d35b,
 subUnitId: _0x1a441e,
 ranges: _0x112e42,
 },
 }),
 _0x8ca36.params["ranges"].length === 0 &&
 (_0x8ca36.id = o.EmptyMutation["id"]),
 {
 m1Prime: _0x8ca36,
 m2Prime: _0x3db60a.length > 1 ? _0x3db60a : _0x3db60a[0],
 }
 );
 },
 },
 dn = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.RemoveRowMutation["id"],
 handler(_0x1f5ce8, _0x510aaa) {
 let _0x1b4090 = e.Tools["deepClone"](_0x1f5ce8),
 _0x611db2 = e.Tools["deepClone"](_0x510aaa);
 if (
 _0x1f5ce8.params["unitId"] !== _0x510aaa.params["unitId"] ||
 _0x1f5ce8.params["subUnitId"] !== _0x510aaa.params["subUnitId"]
 )
 return { m1Prime: _0x1b4090, m2Prime: _0x611db2 };
 let _0x566f19 = _0x1f5ce8.params["unitId"],
 _0x1762e3 = _0x1f5ce8.params["subUnitId"],
 _0x1ec3e8 = [_0x611db2],
 _0xef5f46 = [],
 _0x2e1898 = [];
 for (
 let _0x5094a9 = 0;
 _0x5094a9 < _0x1b4090.params["ranges"].length;
 _0x5094a9++
 ) {
 let _0x23b099 = _0x1b4090.params["ranges"][_0x5094a9],
 _0x1cb933 = _0x510aaa.params["range"],
 _0x1dbba6 = _0x1cb933.endRow - _0x1cb933.startRow + 1;
 if (
 _0x1cb933.startRow < _0x23b099.startRow &&
 _0x1cb933.endRow < _0x23b099.startRow
 )
 (_0xef5f46.push({ ..._0x23b099 }),
 _0x2e1898.push({
 ..._0x23b099,
 startRow: _0x23b099.startRow - _0x1dbba6,
 endRow: _0x23b099.endRow - _0x1dbba6,
 }),
 (_0x23b099.startRow -= _0x1dbba6),
 (_0x23b099.endRow -= _0x1dbba6));
 else {
 if (
 _0x1cb933.startRow < _0x23b099.startRow &&
 _0x1cb933.endRow >= _0x23b099.startRow &&
 _0x1cb933.endRow <= _0x23b099.endRow
 ) {
 _0xef5f46.push({ ..._0x23b099 });
 let _0x222111 = {
 ..._0x23b099,
 startRow: _0x1cb933.startRow,
 endRow: _0x23b099.endRow - _0x1dbba6,
 };
 O(_0x222111) && _0x1cb933.endRow < _0x23b099.endRow
 ? (_0x1cb933.endRow < _0x23b099.endRow &&
 _0x2e1898.push(_0x222111),
 (_0x23b099.startRow = _0x1cb933.startRow),
 (_0x23b099.endRow -= _0x1dbba6))
 : (_0x1b4090.params["ranges"].splice(_0x5094a9, 1), _0x5094a9--);
 } else {
 if (
 _0x1cb933.startRow > _0x23b099.startRow &&
 _0x1cb933.endRow < _0x23b099.endRow
 ) {
 _0xef5f46.push({ ..._0x23b099 });
 let _0xad2e97 = {
 ..._0x23b099,
 endRow: _0x23b099.endRow - _0x1dbba6,
 };
 O(_0xad2e97)
 ? (_0x2e1898.push(_0xad2e97), (_0x23b099.endRow -= _0x1dbba6))
 : (_0x1b4090.params["ranges"].splice(_0x5094a9, 1),
 _0x5094a9--);
 } else {
 if (
 _0x1cb933.startRow >= _0x23b099.startRow &&
 _0x1cb933.startRow <= _0x23b099.endRow &&
 _0x1cb933.endRow > _0x23b099.endRow
 ) {
 _0xef5f46.push({ ..._0x23b099 });
 let _0x4d8a2f = {
 ..._0x23b099,
 endRow: _0x1cb933.startRow - 1,
 };
 O(_0x4d8a2f) && _0x1cb933.startRow > _0x23b099.startRow
 ? (_0x2e1898.push(_0x4d8a2f),
 (_0x23b099.endRow = _0x1cb933.startRow - 1))
 : (_0x1b4090.params["ranges"].splice(_0x5094a9, 1),
 _0x5094a9--);
 } else
 _0x1cb933.startRow > _0x23b099.endRow ||
 (_0x1cb933.startRow <= _0x23b099.startRow &&
 _0x1cb933.endRow >= _0x23b099.endRow &&
 (_0xef5f46.push({ ..._0x23b099 }),
 _0x1b4090.params["ranges"].splice(_0x5094a9, 1),
 _0x5094a9--));
 }
 }
 }
 }
 return (
 _0xef5f46.length > 0 &&
 _0x1ec3e8.unshift({
 id: o.RemoveWorksheetMergeMutation["id"],
 params: {
 unitId: _0x566f19,
 subUnitId: _0x1762e3,
 ranges: _0xef5f46,
 },
 }),
 _0x2e1898.length > 0 &&
 _0x1ec3e8.push({
 id: o.AddWorksheetMergeMutation["id"],
 params: {
 unitId: _0x566f19,
 subUnitId: _0x1762e3,
 ranges: _0x2e1898,
 },
 }),
 _0x1b4090.params["ranges"].length === 0 &&
 (_0x1b4090.id = o.EmptyMutation["id"]),
 {
 m1Prime: _0x1b4090,
 m2Prime: _0x1ec3e8.length > 1 ? _0x1ec3e8 : _0x1ec3e8[0],
 }
 );
 },
 },
 fn = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler(_0x3be33c, _0x36a3c0) {
 let _0x282d02 = e.Tools["deepClone"](_0x3be33c),
 _0x3bb2c2 = e.Tools["deepClone"](_0x36a3c0);
 if (
 _0x3be33c.params["unitId"] !== _0x36a3c0.params["unitId"] ||
 _0x3be33c.params["subUnitId"] !== _0x36a3c0.params["subUnitId"]
 )
 return { m1Prime: _0x282d02, m2Prime: _0x3bb2c2 };
 let _0x214aa8 = [..._0x3bb2c2.params["ranges"]];
 for (
 let _0x4ac741 = 0;
 _0x4ac741 < _0x282d02.params["ranges"].length;
 _0x4ac741++
 ) {
 let _0x34a3e9 = false;
 for (
 let _0x3657a4 = 0;
 _0x3657a4 < _0x3bb2c2.params["ranges"].length;
 _0x3657a4++
 ) {
 let _0x3bf7ad = _0x282d02.params["ranges"][_0x4ac741],
 _0x39cc13 = _0x3bb2c2.params["ranges"][_0x3657a4];
 if (e.Rectangle["intersects"](_0x3bf7ad, _0x39cc13)) {
 _0x34a3e9 = true;
 break;
 }
 }
 _0x34a3e9 &&
 (_0x214aa8.push(_0x282d02.params["ranges"][_0x4ac741]),
 _0x282d02.params["ranges"].splice(_0x4ac741, 1),
 _0x4ac741--);
 }
 return (
 (_0x3bb2c2.params["ranges"] = _0x214aa8),
 _0x282d02.params["ranges"].length === 0 &&
 (_0x282d02.id = o.EmptyMutation["id"]),
 { m1Prime: _0x282d02, m2Prime: _0x3bb2c2 }
 );
 },
 },
 pn = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler(_0x481b68, _0x2071e2) {
 let _0x1f0476 = e.Tools["deepClone"](_0x481b68),
 _0x321b97 = e.Tools["deepClone"](_0x2071e2);
 if (
 _0x481b68.params["unitId"] !== _0x2071e2.params["unitId"] ||
 _0x481b68.params["subUnitId"] !== _0x2071e2.params["subUnitId"]
 )
 return { m1Prime: _0x1f0476, m2Prime: _0x321b97 };
 let _0x57421e = [_0x1f0476],
 _0x25f826 = [_0x321b97],
 _0x1dcf32 = new e["ObjectMatrix"](
 e.Tools["deepClone"](_0x2071e2.params["cellValue"]),
 ),
 _0x44b486 = new Set(),
 _0x5b548b = {};
 for (
 let _0x136f9e = 0;
 _0x136f9e < _0x1f0476.params["ranges"].length;
 _0x136f9e++
 ) {
 let _0x1d98e4 = _0x1f0476.params["ranges"][_0x136f9e],
 {
 startRow: _0x51587c,
 startColumn: _0xa8acfc,
 endRow: _0x12b54b,
 endColumn: _0x506220,
 } = _0x1d98e4,
 _0x2e4ced = false;
 (_0x1dcf32.forValue((_0x336179, _0x1bf5a8, _0x48a76d) => {
 if (
 _0x336179 >= _0x51587c &&
 _0x336179 <= _0x12b54b &&
 _0x1bf5a8 >= _0xa8acfc &&
 _0x1bf5a8 <= _0x506220
 ) {
 let _0xd9f8d8 = _0x1dcf32.getValue(_0x336179, _0x1bf5a8),
 _0x28452a =
 _0xd9f8d8 === null
 ? { v: null, s: null, t: null, si: null, p: null, f: null }
 : _0xd9f8d8;
 _0x28452a &&
 (_0x5b548b[_0x336179] || (_0x5b548b[_0x336179] = {}),
 (_0x5b548b[_0x336179][_0x1bf5a8] = {}),
 (_0x48a76d == null ? undefined : _0x48a76d.v) !== undefined &&
 ((_0x5b548b[_0x336179][_0x1bf5a8].v = null),
 delete _0x28452a.v),
 (_0x48a76d == null ? undefined : _0x48a76d.f) !== undefined &&
 ((_0x5b548b[_0x336179][_0x1bf5a8].f = null),
 delete _0x28452a.f),
 (_0x48a76d == null ? undefined : _0x48a76d.t) !== undefined &&
 ((_0x5b548b[_0x336179][_0x1bf5a8].t = null),
 delete _0x28452a.t),
 (_0x48a76d == null ? undefined : _0x48a76d.si) !== undefined &&
 ((_0x5b548b[_0x336179][_0x1bf5a8].si = null),
 delete _0x28452a.si),
 (_0x48a76d == null ? undefined : _0x48a76d.p) !== undefined &&
 ((_0x5b548b[_0x336179][_0x1bf5a8].p = null),
 delete _0x28452a.p),
 (_0x48a76d == null ? undefined : _0x48a76d.s) !== undefined &&
 ((_0x5b548b[_0x336179][_0x1bf5a8].s = null),
 delete _0x28452a.s),
 _0x1dcf32.setValue(_0x336179, _0x1bf5a8, _0x28452a),
 (_0x2e4ced = true));
 }
 }),
 _0x2e4ced &&
 (_0x44b486.add({ ..._0x1d98e4 }),
 _0x1f0476.params["ranges"].splice(_0x136f9e, 1),
 _0x136f9e--));
 }
 return (
 (_0x321b97.params["cellValue"] = _0x1dcf32.getMatrix()),
 _0x44b486.size > 0 &&
 _0x25f826.unshift({
 id: o.RemoveWorksheetMergeMutation["id"],
 params: {
 unitId: _0x481b68.params["unitId"],
 subUnitId: _0x481b68.params["subUnitId"],
 ranges: Array.from(_0x44b486),
 },
 }),
 _0x1f0476.params["ranges"].length === 0 &&
 (_0x1f0476.id = o.EmptyMutation["id"]),
 Object.keys(_0x5b548b).length > 0 &&
 _0x57421e.unshift({
 id: o.SetRangeValuesMutation["id"],
 params: {
 unitId: _0x481b68.params["unitId"],
 subUnitId: _0x481b68.params["subUnitId"],
 cellValue: _0x5b548b,
 },
 }),
 {
 m1Prime: _0x57421e.length > 1 ? _0x57421e : _0x57421e[0],
 m2Prime: _0x25f826.length > 1 ? _0x25f826 : _0x25f826[0],
 }
 );
 },
 },
 mn = {
 m1: o.AddWorksheetMergeMutation["id"],
 m2: o.SetSelectionsOperation["id"],
 handler(_0x5a7b74, _0x59cb9f) {
 let _0x31b2ca = { m1Prime: [], m2Prime: [] };
 if (
 _0x5a7b74.params["unitId"] !== _0x59cb9f.params["unitId"] ||
 _0x5a7b74.params["subUnitId"] !== _0x59cb9f.params["subUnitId"]
 )
 return _0x31b2ca;
 let _0x25e501 = e.Tools["deepClone"](_0x59cb9f),
 _0xdd7d75 = _0x25e501.params["selections"];
 (_0xdd7d75.forEach((_0x1b8715, _0x533dfa) => {
 let { range: _0x4be63b, primary: _0x586494 } = _0x1b8715;
 _0x5a7b74.params["ranges"].forEach((_0x4ffa35) => {
 (e.Rectangle["intersects"](_0x4ffa35, _0x4be63b) &&
 ((_0x4be63b.startRow = Math.min(
 _0x4ffa35.startRow,
 _0x4be63b.startRow,
 )),
 (_0x4be63b.startColumn = Math.min(
 _0x4ffa35.startColumn,
 _0x4be63b.startColumn,
 )),
 (_0x4be63b.endRow = Math.max(_0x4ffa35.endRow, _0x4be63b.endRow)),
 (_0x4be63b.endColumn = Math.max(
 _0x4ffa35.endColumn,
 _0x4be63b.endColumn,
 ))),
 _0x586494 &&
 e.Rectangle["intersects"](_0x4ffa35, _0x586494) &&
 _0x533dfa === _0xdd7d75.length - 1 &&
 (_0x586494.startColumn === _0x4ffa35.startColumn &&
 _0x586494.startRow &&
 _0x4ffa35.startRow &&
 (_0x586494.isMergedMainCell = true),
 (_0x586494.startRow = Math.min(
 _0x4ffa35.startRow,
 _0x586494.startRow,
 )),
 (_0x586494.startColumn = Math.min(
 _0x4ffa35.startColumn,
 _0x586494.startColumn,
 )),
 (_0x586494.endRow = Math.max(_0x4ffa35.endRow, _0x586494.endRow)),
 (_0x586494.endColumn = Math.max(
 _0x4ffa35.endColumn,
 _0x586494.endColumn,
 )),
 (_0x586494.isMerged = true)));
 });
 }),
 _0xdd7d75.sort((_0x87f9dd, _0xe793b5) => {
 let _0x2f993e = _0x87f9dd.range,
 _0x1a230e = _0xe793b5.range;
 return _0x2f993e.startRow === _0x1a230e.startRow
 ? _0x2f993e.startColumn - _0x1a230e.startColumn
 : _0x2f993e.startRow - _0x1a230e.startRow;
 }));
 let _0x3b1f58 = [],
 _0x37a120 = null;
 for (let _0x4fada2 of _0xdd7d75)
 _0x37a120 === null ||
 !e.Rectangle["intersects"](_0x37a120.range, _0x4fada2.range)
 ? (_0x3b1f58.push(_0x4fada2), (_0x37a120 = _0x4fada2))
 : ((_0x37a120.range["startRow"] = Math.min(
 _0x37a120.range["startRow"],
 _0x4fada2.range["startRow"],
 )),
 (_0x37a120.range["startColumn"] = Math.min(
 _0x37a120.range["startColumn"],
 _0x4fada2.range["startColumn"],
 )),
 (_0x37a120.range["endRow"] = Math.max(
 _0x37a120.range["endRow"],
 _0x4fada2.range["endRow"],
 )),
 (_0x37a120.range["endColumn"] = Math.max(
 _0x37a120.range["endColumn"],
 _0x4fada2.range["endColumn"],
 )),
 _0x4fada2.primary && (_0x37a120.primary = _0x4fada2.primary));
 return (
 (_0x25e501.params["selections"] = _0x3b1f58),
 _0x31b2ca.m2Prime["push"](_0x25e501),
 _0x31b2ca
 );
 },
 },
 hn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x2f5dbd, _0x264f07) => {
 let _0x38f13d = { m1Prime: _0x2f5dbd, m2Prime: _0x264f07 };
 return _0x2f5dbd.params["unitId"] !== _0x264f07.params["unitId"] ||
 _0x2f5dbd.params["subUnitId"] !== _0x264f07.params["subUnitId"]
 ? _0x38f13d
 : {
 error: Error(
 "add worksheet protection is conflict with add comment",
 ),
 };
 },
 },
 gn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: l.AddConditionalRuleMutation["id"],
 handler: (_0xa965aa, _0x1ca1e2) => {
 let _0x1b36b3 = { m1Prime: _0xa965aa, m2Prime: _0x1ca1e2 };
 return _0xa965aa.params["unitId"] !== _0x1ca1e2.params["unitId"] ||
 _0xa965aa.params["subUnitId"] !== _0x1ca1e2.params["subUnitId"]
 ? _0x1b36b3
 : {
 error: Error(
 "add\x20worksheet\x20protection\x20is\x20conflict\x20with\x20add\x20conditional\x20rule",
 ),
 };
 },
 },
 _n = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.AddRangeProtectionMutation["id"],
 handler: (_0x32844e, _0x38de35) => {
 let _0x4fa8a3 = { m1Prime: _0x32844e, m2Prime: _0x38de35 };
 return _0x32844e.params["unitId"] !== _0x38de35.params["unitId"] ||
 _0x32844e.params["subUnitId"] !== _0x38de35.params["subUnitId"]
 ? _0x4fa8a3
 : {
 error: Error(
 "add worksheet protection is conflict with add range protection",
 ),
 };
 },
 },
 vn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler: (_0xb41f54, _0x15a72c) => {
 let _0x2f4e41 = { m1Prime: _0xb41f54, m2Prime: _0x15a72c };
 return _0xb41f54.params["unitId"] !== _0x15a72c.params["unitId"] ||
 _0xb41f54.params["subUnitId"] !== _0x15a72c.params["subUnitId"]
 ? _0x2f4e41
 : {
 error: Error(
 "add worksheet protection is conflict with add worksheet merge",
 ),
 };
 },
 },
 yn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.AddWorksheetProtectionMutation["id"],
 handler: (_0x25caba, _0x1cbbd1) => {
 let _0x461fa5 = { m1Prime: _0x25caba, m2Prime: _0x1cbbd1 };
 return _0x25caba.params["unitId"] !== _0x1cbbd1.params["unitId"] ||
 _0x25caba.params["subUnitId"] !== _0x1cbbd1.params["rule"].subUnitId
 ? _0x461fa5
 : {
 error: Error(
 "add worksheet protection is conflict with add worksheet protection",
 ),
 };
 },
 },
 bn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.SetWorksheetOrderMutation["id"],
 handler: (_0x110eaf, _0x4f36de) => {
 let _0x2dfe1e = { m1Prime: _0x110eaf, m2Prime: _0x4f36de };
 return _0x110eaf.params["unitId"] !== _0x4f36de.params["unitId"] ||
 _0x110eaf.params["subUnitId"] !== _0x4f36de.params["subUnitId"]
 ? _0x2dfe1e
 : {
 error: Error(
 "add\x20worksheet\x20protection\x20is\x20conflict\x20with\x20set\x20worksheet\x20order",
 ),
 };
 },
 },
 xn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: l.DeleteConditionalRuleMutation["id"],
 handler: (_0x1c1abd, _0x202353) => {
 let _0x42279e = { m1Prime: _0x1c1abd, m2Prime: _0x202353 };
 return _0x1c1abd.params["unitId"] !== _0x202353.params["unitId"] ||
 _0x1c1abd.params["subUnitId"] !== _0x202353.params["subUnitId"]
 ? _0x42279e
 : {
 error: Error(
 "add worksheet protection is conflict with delete conditional formatting rule",
 ),
 };
 },
 },
 Sn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.InsertColMutation["id"],
 handler: (_0xb90f99, _0x41df23) => {
 let _0x305d2c = { m1Prime: _0xb90f99, m2Prime: _0x41df23 };
 return _0xb90f99.params["unitId"] !== _0x41df23.params["unitId"] ||
 _0xb90f99.params["subUnitId"] !== _0x41df23.params["subUnitId"]
 ? _0x305d2c
 : {
 error: Error(
 "add worksheet protection is conflict with insert col",
 ),
 };
 },
 },
 Cn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.InsertRowMutation["id"],
 handler: (_0x3d47bb, _0x585f9e) => {
 let _0xf6d00d = { m1Prime: _0x3d47bb, m2Prime: _0x585f9e };
 return _0x3d47bb.params["unitId"] !== _0x585f9e.params["unitId"] ||
 _0x3d47bb.params["subUnitId"] !== _0x585f9e.params["subUnitId"]
 ? _0xf6d00d
 : {
 error: Error(
 "add worksheet protection is conflict with insert row",
 ),
 };
 },
 },
 wn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.MoveColsMutation["id"],
 handler: (_0x2623b2, _0x5c8c0d) => {
 let _0x9144c0 = { m1Prime: _0x2623b2, m2Prime: _0x5c8c0d };
 return _0x2623b2.params["unitId"] !== _0x5c8c0d.params["unitId"] ||
 _0x2623b2.params["subUnitId"] !== _0x5c8c0d.params["subUnitId"]
 ? _0x9144c0
 : {
 error: Error("add worksheet protection is conflict with move col"),
 };
 },
 },
 Tn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler: (_0x443488, _0x505a0e) => {
 let _0x583693 = { m1Prime: _0x443488, m2Prime: _0x505a0e };
 return _0x443488.params["unitId"] !== _0x505a0e.params["unitId"] ||
 _0x443488.params["subUnitId"] !== _0x505a0e.params["from"].subUnitId
 ? _0x583693
 : {
 error: Error(
 "add worksheet protection is conflict with move range",
 ),
 };
 },
 },
 En = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.MoveRowsMutation["id"],
 handler: (_0x38be82, _0xb7e78) => {
 let _0x4fff35 = { m1Prime: _0x38be82, m2Prime: _0xb7e78 };
 return _0x38be82.params["unitId"] !== _0xb7e78.params["unitId"] ||
 _0x38be82.params["subUnitId"] !== _0xb7e78.params["subUnitId"]
 ? _0x4fff35
 : {
 error: Error(
 "add\x20worksheet\x20protection\x20is\x20conflict\x20with\x20move\x20row",
 ),
 };
 },
 },
 Dn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.RemoveColMutation["id"],
 handler: (_0x2988c8, _0x5c32fc) => {
 let _0x1c0697 = { m1Prime: _0x2988c8, m2Prime: _0x5c32fc };
 return _0x2988c8.params["unitId"] !== _0x5c32fc.params["unitId"] ||
 _0x2988c8.params["subUnitId"] !== _0x5c32fc.params["subUnitId"]
 ? _0x1c0697
 : {
 error: Error(
 "add worksheet protection is conflict with remove col",
 ),
 };
 },
 },
 On = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: u.RemoveDataValidationMutation["id"],
 handler: (_0x497a67, _0x3d1862) => {
 let _0x396576 = { m1Prime: _0x497a67, m2Prime: _0x3d1862 };
 return _0x497a67.params["unitId"] !== _0x3d1862.params["unitId"] ||
 _0x497a67.params["subUnitId"] !== _0x3d1862.params["subUnitId"]
 ? _0x396576
 : {
 error: Error(
 "add\x20worksheet\x20protection\x20is\x20conflict\x20with\x20remove\x20data\x20validation\x20rule",
 ),
 };
 },
 },
 kn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler: (_0x4c8cb0, _0x1e8a34) => {
 let _0x42f75a = { m1Prime: _0x4c8cb0, m2Prime: _0x1e8a34 };
 return _0x4c8cb0.params["unitId"] !== _0x1e8a34.params["unitId"] ||
 _0x4c8cb0.params["subUnitId"] !== _0x1e8a34.params["subUnitId"]
 ? _0x42f75a
 : {
 error: Error(
 "add worksheet protection is conflict with remove numfmt",
 ),
 };
 },
 },
 An = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.RemoveRowMutation["id"],
 handler: (_0x57114c, _0x388d74) => {
 let _0xfab7f3 = { m1Prime: _0x57114c, m2Prime: _0x388d74 };
 return _0x57114c.params["unitId"] !== _0x388d74.params["unitId"] ||
 _0x57114c.params["subUnitId"] !== _0x388d74.params["subUnitId"]
 ? _0xfab7f3
 : {
 error: Error(
 "add worksheet protection is conflict with remove row",
 ),
 };
 },
 },
 jn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: f.RemoveSheetsFilterMutation["id"],
 handler: (_0x57f304, _0x4bc8a0) => {
 let _0x497dab = { m1Prime: _0x57f304, m2Prime: _0x4bc8a0 };
 return _0x57f304.params["unitId"] !== _0x4bc8a0.params["unitId"] ||
 _0x57f304.params["subUnitId"] !== _0x4bc8a0.params["subUnitId"]
 ? _0x497dab
 : {
 error: Error(
 "add worksheet protection is conflict with remove filter",
 ),
 };
 },
 },
 Mn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler: (_0x133546, _0x44fcba) => {
 let _0xfa66d9 = { m1Prime: _0x133546, m2Prime: _0x44fcba };
 return _0x133546.params["unitId"] !== _0x44fcba.params["unitId"] ||
 _0x133546.params["subUnitId"] !== _0x44fcba.params["subUnitId"]
 ? _0xfa66d9
 : {
 error: Error(
 "add worksheet protection is conflict with remove worksheet merge",
 ),
 };
 },
 },
 Nn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.RemoveSheetMutation["id"],
 handler: (_0x366112, _0x16153e) =>
 _0x366112.params["unitId"] !== _0x16153e.params["unitId"] ||
 _0x366112.params["subUnitId"] !== _0x16153e.params["subUnitId"]
 ? { m1Prime: _0x366112, m2Prime: _0x16153e }
 : {
 error: Error(
 "add worksheet protection is conflict with remove sheet",
 ),
 },
 },
 Pn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: l.SetConditionalRuleMutation["id"],
 handler: (_0x2fb583, _0x27c3b5) => {
 let _0x29edad = { m1Prime: _0x2fb583, m2Prime: _0x27c3b5 };
 return _0x2fb583.params["unitId"] !== _0x27c3b5.params["unitId"] ||
 _0x2fb583.params["subUnitId"] !== _0x27c3b5.params["subUnitId"]
 ? _0x29edad
 : {
 error: Error(
 "add worksheet protection is conflict with set conditional formatting rule",
 ),
 };
 },
 },
 Fn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.SetFrozenMutation["id"],
 handler: (_0x53ecdc, _0x452e91) => {
 let _0xc55773 = { m1Prime: _0x53ecdc, m2Prime: _0x452e91 };
 return _0x53ecdc.params["unitId"] !== _0x452e91.params["unitId"] ||
 _0x53ecdc.params["subUnitId"] !== _0x452e91.params["subUnitId"]
 ? _0xc55773
 : {
 error: Error(
 "add worksheet protection is conflict with set frozen",
 ),
 };
 },
 },
 In = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler: (_0x28cecd, _0x2bbbef) => {
 let _0x37447 = { m1Prime: _0x28cecd, m2Prime: _0x2bbbef };
 return _0x28cecd.params["unitId"] !== _0x2bbbef.params["unitId"] ||
 _0x28cecd.params["subUnitId"] !== _0x2bbbef.params["subUnitId"]
 ? _0x37447
 : {
 error: Error(
 "add worksheet protection is conflict with set numfmt",
 ),
 };
 },
 },
 Ln = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.SetRangeProtectionMutation["id"],
 handler: (_0x4ac027, _0x142579) => {
 let _0x78a806 = { m1Prime: _0x4ac027, m2Prime: _0x142579 };
 return _0x4ac027.params["unitId"] !== _0x142579.params["unitId"] ||
 _0x4ac027.params["subUnitId"] !== _0x142579.params["subUnitId"]
 ? _0x78a806
 : {
 error: Error(
 "add\x20worksheet\x20protection\x20is\x20conflict\x20with\x20set\x20range\x20protection",
 ),
 };
 },
 },
 Rn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.SetWorksheetColWidthMutation["id"],
 handler: (_0x2c49a8, _0x1ea2aa) => {
 let _0x2b16bb = { m1Prime: _0x2c49a8, m2Prime: _0x1ea2aa };
 return _0x2c49a8.params["unitId"] !== _0x1ea2aa.params["unitId"] ||
 _0x2c49a8.params["subUnitId"] !== _0x1ea2aa.params["subUnitId"]
 ? _0x2b16bb
 : {
 error: Error(
 "add\x20worksheet\x20protection\x20is\x20conflict\x20with\x20set\x20worksheet\x20col\x20width",
 ),
 };
 },
 },
 zn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: o.SetWorksheetNameMutation["id"],
 handler: (_0x1db84e, _0x43cde8) => {
 let _0x2dbd94 = { m1Prime: _0x1db84e, m2Prime: _0x43cde8 };
 return _0x1db84e.params["unitId"] !== _0x43cde8.params["unitId"] ||
 _0x1db84e.params["subUnitId"] !== _0x43cde8.params["subUnitId"]
 ? _0x2dbd94
 : {
 error: Error(
 "add worksheet protection is conflict with set worksheet name",
 ),
 };
 },
 },
 Bn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: c.UpdateCommentMutation["id"],
 handler: (_0x2e55f6, _0x258961) => {
 let _0x39beea = { m1Prime: _0x2e55f6, m2Prime: _0x258961 };
 return _0x2e55f6.params["unitId"] !== _0x258961.params["unitId"] ||
 _0x2e55f6.params["subUnitId"] !== _0x258961.params["subUnitId"]
 ? _0x39beea
 : {
 error: Error(
 "add worksheet protection is conflict with update comment",
 ),
 };
 },
 },
 Vn = {
 m1: o.AddWorksheetProtectionMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x2d63e3, _0x45dc7c) => {
 let _0x2bd0c4 = { m1Prime: _0x2d63e3, m2Prime: _0x45dc7c };
 return _0x2d63e3.params["unitId"] !== _0x45dc7c.params["unitId"] ||
 _0x2d63e3.params["subUnitId"] !== _0x45dc7c.params["subUnitId"]
 ? _0x2bd0c4
 : {
 error: Error(
 "add\x20worksheet\x20protection\x20is\x20conflict\x20with\x20update\x20data\x20validation\x20rule",
 ),
 };
 },
 },
 Hn = {
 m1: c.DeleteCommentMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x32ebf4, _0x2d7e39) => {
 let _0x5b939b = _0x32ebf4.params,
 _0x3163c6 = _0x2d7e39.params;
 return _0x5b939b.unitId === _0x3163c6.unitId &&
 _0x5b939b.subUnitId === _0x3163c6.subUnitId &&
 _0x5b939b.commentId === _0x3163c6.comment["parentId"]
 ? { m1Prime: _0x32ebf4, m2Prime: [] }
 : { m1Prime: _0x32ebf4, m2Prime: _0x2d7e39 };
 },
 },
 Un = {
 m1: c.DeleteCommentMutation["id"],
 m2: c.DeleteCommentMutation["id"],
 handler: (_0x38a477, _0x5dfc62) => {
 let _0x4f674f = _0x38a477.params,
 _0x151234 = _0x5dfc62.params,
 _0x5064f1 = { m1Prime: _0x38a477, m2Prime: _0x5dfc62 };
 return _0x4f674f.unitId !== _0x151234.unitId ||
 _0x4f674f.subUnitId !== _0x151234.subUnitId ||
 _0x4f674f.commentId !== _0x151234.commentId
 ? _0x5064f1
 : { m1Prime: [], m2Prime: [] };
 },
 },
 Wn = {
 m1: l.DeleteConditionalRuleMutation["id"],
 m2: l.DeleteConditionalRuleMutation["id"],
 handler(_0x1b2108, _0x5d8c40) {
 return { m1Prime: _0x1b2108, m2Prime: _0x5d8c40 };
 },
 },
 Gn = [
 Kn(),
 qn(),
 Jn(),
 Yn(),
 Xn(),
 Zn(),
 ...Qn(),
 $n(),
 er(),
 ...tr(),
 nr(),
 rr(),
 ir(),
 ar(),
 or(),
 sr(),
 cr(),
 ];
function Kn() {
 return {
 m1: p.AddDimensionOutlineMutation["id"],
 m2: p.AddDimensionOutlineMutation["id"],
 handler(_0x4aa34e, _0x25de4f) {
 if (!M(_0x4aa34e.params, _0x25de4f.params))
 return A(_0x4aa34e, _0x25de4f);
 let _0x4b3a3b = e.Tools["deepClone"](_0x4aa34e),
 _0x41991e = e.Tools["deepClone"](_0x25de4f);
 if (
 _0x4aa34e.params["outline"].id === _0x25de4f.params["outline"].id ||
 xr(_0x4aa34e.params["outline"], _0x25de4f.params["outline"])
 )
 return { m1Prime: _0x4b3a3b, m2Prime: j(_0x41991e) };
 if (yr(_0x4aa34e.params["outline"], _0x25de4f.params["outline"])) {
 let _0x5267f2 = br(
 _0x4aa34e.params["outline"],
 _0x25de4f.params["outline"],
 );
 return {
 m1Prime: [_r(_0x25de4f.params["outline"]), gr(_0x5267f2)],
 m2Prime: [_r(_0x4aa34e.params["outline"]), gr(_0x5267f2)],
 };
 }
 return { m1Prime: _0x4b3a3b, m2Prime: _0x41991e };
 },
 };
}
function qn() {
 return {
 m1: p.AddDimensionOutlineMutation["id"],
 m2: p.RemoveDimensionOutlineMutation["id"],
 handler(_0x7bd6d8, _0x18b13d) {
 if (!M(_0x7bd6d8.params, _0x18b13d.params))
 return A(_0x7bd6d8, _0x18b13d);
 let _0x5b31a9 = e.Tools["deepClone"](_0x7bd6d8),
 _0x422edf = e.Tools["deepClone"](_0x18b13d);
 return _0x7bd6d8.params["outline"].id === _0x18b13d.params["outlineId"]
 ? { m1Prime: j(_0x5b31a9), m2Prime: _0x422edf }
 : { m1Prime: _0x5b31a9, m2Prime: _0x422edf };
 },
 };
}
function Jn() {
 return {
 m1: p.AddDimensionOutlineMutation["id"],
 m2: p.SetDimensionOutlineCollapsedMutation["id"],
 handler(_0x40f480, _0x5d2dae) {
 if (!M(_0x40f480.params, _0x5d2dae.params))
 return A(_0x40f480, _0x5d2dae);
 let _0x4a684c = e.Tools["deepClone"](_0x40f480),
 _0x42fef4 = e.Tools["deepClone"](_0x5d2dae);
 return (
 _0x40f480.params["outline"].id === _0x5d2dae.params["outlineId"] &&
 (_0x4a684c.params["outline"].collapsed =
 _0x5d2dae.params["collapsed"]),
 { m1Prime: _0x4a684c, m2Prime: _0x42fef4 }
 );
 },
 };
}
function Yn() {
 return {
 m1: p.AddDimensionOutlineMutation["id"],
 m2: p.ClearDimensionOutlinesMutation["id"],
 handler(_0x3e334a, _0x364024) {
 if (!N(_0x3e334a.params["outline"], _0x364024.params))
 return A(_0x3e334a, _0x364024);
 let _0x21896f = e.Tools["deepClone"](_0x3e334a),
 _0x52b3c6 = e.Tools["deepClone"](_0x364024);
 return vr(_0x3e334a.params["outline"], _0x364024.params)
 ? { m1Prime: j(_0x21896f), m2Prime: _0x52b3c6 }
 : { m1Prime: _0x21896f, m2Prime: _0x52b3c6 };
 },
 };
}
function Xn() {
 return {
 m1: p.RemoveDimensionOutlineMutation["id"],
 m2: p.RemoveDimensionOutlineMutation["id"],
 handler(_0x1b827e, _0x380948) {
 if (!M(_0x1b827e.params, _0x380948.params))
 return A(_0x1b827e, _0x380948);
 let _0x12b3ef = e.Tools["deepClone"](_0x1b827e),
 _0x325399 = e.Tools["deepClone"](_0x380948);
 return _0x1b827e.params["outlineId"] === _0x380948.params["outlineId"]
 ? { m1Prime: _0x12b3ef, m2Prime: j(_0x325399) }
 : { m1Prime: _0x12b3ef, m2Prime: _0x325399 };
 },
 };
}
function Zn() {
 return {
 m1: p.RemoveDimensionOutlineMutation["id"],
 m2: p.SetDimensionOutlineCollapsedMutation["id"],
 handler(_0x1863f8, _0x4fb112) {
 if (!M(_0x1863f8.params, _0x4fb112.params))
 return A(_0x1863f8, _0x4fb112);
 let _0x2e87bb = e.Tools["deepClone"](_0x1863f8),
 _0x28df26 = e.Tools["deepClone"](_0x4fb112);
 return _0x1863f8.params["outlineId"] === _0x4fb112.params["outlineId"]
 ? { m1Prime: _0x2e87bb, m2Prime: j(_0x28df26) }
 : { m1Prime: _0x2e87bb, m2Prime: _0x28df26 };
 },
 };
}
function Qn() {
 return [
 o.SetRowHiddenMutation["id"],
 o.SetRowVisibleMutation["id"],
 o.SetColHiddenMutation["id"],
 o.SetColVisibleMutation["id"],
 ].map((_0x4424da) => ({
 m1: p.RemoveDimensionOutlineMutation["id"],
 m2: _0x4424da,
 handler(_0x455ce6, _0x26550f) {
 if (!M(_0x455ce6.params, _0x26550f.params))
 return A(_0x455ce6, _0x26550f);
 let _0x38dc93 = e.Tools["deepClone"](_0x455ce6),
 _0x4dcff6 = e.Tools["deepClone"](_0x26550f);
 return _0x26550f.params["dimensionOutlineId"] ===
 _0x455ce6.params["outlineId"]
 ? { m1Prime: _0x38dc93, m2Prime: j(_0x4dcff6) }
 : { m1Prime: _0x38dc93, m2Prime: _0x4dcff6 };
 },
 }));
}
function $n() {
 return {
 m1: p.SetDimensionOutlineCollapsedMutation["id"],
 m2: p.SetDimensionOutlineCollapsedMutation["id"],
 handler(_0x1262be, _0x1ffe92) {
 if (!M(_0x1262be.params, _0x1ffe92.params))
 return A(_0x1262be, _0x1ffe92);
 let _0xe3a46e = e.Tools["deepClone"](_0x1262be),
 _0x3fd538 = e.Tools["deepClone"](_0x1ffe92);
 return _0x1262be.params["outlineId"] === _0x1ffe92.params["outlineId"]
 ? { m1Prime: _0xe3a46e, m2Prime: j(_0x3fd538) }
 : { m1Prime: _0xe3a46e, m2Prime: _0x3fd538 };
 },
 };
}
function er() {
 return {
 m1: p.ClearDimensionOutlinesMutation["id"],
 m2: p.SetDimensionOutlineCollapsedMutation["id"],
 handler(_0x143f08, _0x54cd56) {
 var _0x1c3c6c;
 if (!M(_0x143f08.params, _0x54cd56.params))
 return A(_0x143f08, _0x54cd56);
 let _0x48a814 = e.Tools["deepClone"](_0x143f08),
 _0x4c1ab1 = e.Tools["deepClone"](_0x54cd56),
 _0x1da91c = _0x54cd56.params["outline"];
 return ((_0x1c3c6c = _0x143f08.params["removedOutlineIds"]) != null &&
 _0x1c3c6c.includes(_0x54cd56.params["outlineId"])) ||
 (_0x1da91c &&
 N(_0x1da91c, _0x143f08.params) &&
 vr(_0x1da91c, _0x143f08.params))
 ? { m1Prime: _0x48a814, m2Prime: j(_0x4c1ab1) }
 : { m1Prime: _0x48a814, m2Prime: _0x4c1ab1 };
 },
 };
}
function tr() {
 return [
 o.SetRowHiddenMutation["id"],
 o.SetRowVisibleMutation["id"],
 o.SetColHiddenMutation["id"],
 o.SetColVisibleMutation["id"],
 ].map((_0x448b5d) => ({
 m1: p.ClearDimensionOutlinesMutation["id"],
 m2: _0x448b5d,
 handler(_0x242196, _0x438c96) {
 var _0x1c977c;
 if (!M(_0x242196.params, _0x438c96.params))
 return A(_0x242196, _0x438c96);
 let _0x4c7024 = e.Tools["deepClone"](_0x242196),
 _0x33401d = e.Tools["deepClone"](_0x438c96);
 return _0x438c96.params["dimensionOutlineId"] &&
 (_0x1c977c = _0x242196.params["removedOutlineIds"]) != null &&
 _0x1c977c.includes(_0x438c96.params["dimensionOutlineId"])
 ? { m1Prime: _0x4c7024, m2Prime: j(_0x33401d) }
 : { m1Prime: _0x4c7024, m2Prime: _0x33401d };
 },
 }));
}
function nr() {
 return {
 m1: p.TransformDimensionOutlinesMutation["id"],
 m2: p.AddDimensionOutlineMutation["id"],
 handler(_0x45a9df, _0x5ec3a7) {
 let _0x1e6d7c = e.Tools["deepClone"](_0x45a9df),
 _0xb78d85 = e.Tools["deepClone"](_0x5ec3a7);
 if (!N(_0x5ec3a7.params["outline"], _0x45a9df.params))
 return { m1Prime: _0x1e6d7c, m2Prime: _0xb78d85 };
 let _0x55bb7c = fr(_0x5ec3a7.params["outline"], _0x45a9df.params);
 return _0x55bb7c
 ? ((_0xb78d85.params["outline"] = _0x55bb7c),
 { m1Prime: _0x1e6d7c, m2Prime: _0xb78d85 })
 : { m1Prime: _0x1e6d7c, m2Prime: j(_0xb78d85) };
 },
 };
}
function rr() {
 return {
 m1: p.TransformDimensionOutlinesMutation["id"],
 m2: p.ClearDimensionOutlinesMutation["id"],
 handler(_0x137bdd, _0xd7be68) {
 let _0x3fa9c9 = e.Tools["deepClone"](_0x137bdd),
 _0x393dd6 = e.Tools["deepClone"](_0xd7be68);
 if (!N(_0xd7be68.params, _0x137bdd.params))
 return { m1Prime: _0x3fa9c9, m2Prime: _0x393dd6 };
 let _0x5e1192 = k(_0xd7be68.params, _0x137bdd.params);
 return _0x5e1192
 ? ((_0x393dd6.params["start"] = _0x5e1192.start),
 (_0x393dd6.params["end"] = _0x5e1192.end),
 { m1Prime: _0x3fa9c9, m2Prime: _0x393dd6 })
 : { m1Prime: _0x3fa9c9, m2Prime: j(_0x393dd6) };
 },
 };
}
function ir() {
 return {
 m1: p.TransformDimensionOutlinesMutation["id"],
 m2: p.TransformDimensionOutlinesMutation["id"],
 handler(_0x142745, _0x30a259) {
 if (!N(_0x142745.params, _0x30a259.params))
 return A(_0x142745, _0x30a259);
 let _0x572591 = e.Tools["deepClone"](_0x142745),
 _0x3bb881 = e.Tools["deepClone"](_0x30a259),
 _0x59246d = dr(_0x30a259.params, _0x142745.params),
 _0x560aed = dr(_0x142745.params, _0x30a259.params);
 return _0x59246d
 ? _0x560aed
 ? ((_0x572591.params = _0x560aed),
 (_0x3bb881.params = _0x59246d),
 { m1Prime: _0x572591, m2Prime: _0x3bb881 })
 : { m1Prime: j(_0x572591), m2Prime: _0x3bb881 }
 : { m1Prime: _0x572591, m2Prime: j(_0x3bb881) };
 },
 };
}
function ar() {
 return lr(o.InsertRowMutation["id"], p.DimensionOutlineAxis["ROW"]);
}
function or() {
 return ur(o.RemoveRowMutation["id"], p.DimensionOutlineAxis["ROW"]);
}
function sr() {
 return lr(o.InsertColMutation["id"], p.DimensionOutlineAxis["COLUMN"]);
}
function cr() {
 return ur(o.RemoveColMutation["id"], p.DimensionOutlineAxis["COLUMN"]);
}
function lr(_0x5e74e5, _0x54dfc2) {
 return {
 m1: _0x5e74e5,
 m2: p.AddDimensionOutlineMutation["id"],
 handler(_0x14cb7e, _0x38fec6) {
 let _0x150074 = e.Tools["deepClone"](_0x14cb7e),
 _0xf9374d = e.Tools["deepClone"](_0x38fec6);
 if (
 !M(_0x14cb7e.params, _0x38fec6.params) ||
 _0x38fec6.params["outline"].axis !== _0x54dfc2
 )
 return { m1Prime: _0x150074, m2Prime: _0xf9374d };
 let _0x1e91c9 = mr(
 _0x14cb7e.params["range"],
 _0x38fec6.params["outline"].axis,
 _0x14cb7e.params["unitId"],
 _0x14cb7e.params["subUnitId"],
 );
 return (
 (_0xf9374d.params["outline"] = (0, p.transformOutlinesByInsert)(
 [_0x38fec6.params["outline"]],
 _0x1e91c9,
 )[0]),
 { m1Prime: _0x150074, m2Prime: _0xf9374d }
 );
 },
 };
}
function ur(_0x4c3ce4, _0x3cf6d3) {
 return {
 m1: _0x4c3ce4,
 m2: p.AddDimensionOutlineMutation["id"],
 handler(_0x1d054c, _0x3b820b) {
 let _0x5348c4 = e.Tools["deepClone"](_0x1d054c),
 _0x3ba08e = e.Tools["deepClone"](_0x3b820b);
 if (
 !M(_0x1d054c.params, _0x3b820b.params) ||
 _0x3b820b.params["outline"].axis !== _0x3cf6d3
 )
 return { m1Prime: _0x5348c4, m2Prime: _0x3ba08e };
 let _0x210df5 = hr(
 _0x1d054c.params["range"],
 _0x3b820b.params["outline"].axis,
 _0x1d054c.params["unitId"],
 _0x1d054c.params["subUnitId"],
 ),
 _0x53e982 = (0, p.transformOutlinesByDelete)(
 [_0x3b820b.params["outline"]],
 _0x210df5,
 )[0];
 return _0x53e982
 ? ((_0x3ba08e.params["outline"] = _0x53e982),
 { m1Prime: _0x5348c4, m2Prime: _0x3ba08e })
 : { m1Prime: _0x5348c4, m2Prime: j(_0x3ba08e) };
 },
 };
}
function dr(_0x5661d8, _0x51d795) {
 if (!N(_0x5661d8, _0x51d795)) return _0x5661d8;
 if (_0x5661d8.type === "insert") {
 let _0x3b2c6c = k(
 {
 unitId: _0x5661d8.unitId,
 subUnitId: _0x5661d8.subUnitId,
 axis: _0x5661d8.axis,
 start: _0x5661d8.index,
 end: _0x5661d8.index + _0x5661d8.count - 1,
 },
 _0x51d795,
 );
 return (
 _0x3b2c6c && {
 ..._0x5661d8,
 index: _0x3b2c6c.start,
 count: _0x3b2c6c.end - _0x3b2c6c.start + 1,
 }
 );
 }
 if (_0x5661d8.type === "move") {
 let _0x208d7b = k(
 {
 unitId: _0x5661d8.unitId,
 subUnitId: _0x5661d8.subUnitId,
 axis: _0x5661d8.axis,
 start: _0x5661d8.sourceStart,
 end: _0x5661d8.sourceEnd,
 },
 _0x51d795,
 ),
 _0x5cd001 = pr(_0x5661d8.destinationIndex, _0x51d795);
 return (
 _0x208d7b && {
 ..._0x5661d8,
 sourceStart: _0x208d7b.start,
 sourceEnd: _0x208d7b.end,
 destinationIndex: _0x5cd001,
 }
 );
 }
 let _0x154220 = k(_0x5661d8, _0x51d795);
 return (
 _0x154220 && { ..._0x5661d8, start: _0x154220.start, end: _0x154220.end }
 );
}
function fr(_0x279302, _0x1a6176) {
 return (
 (_0x1a6176.type === "insert"
 ? (0, p.transformOutlinesByInsert)([_0x279302], _0x1a6176)[0]
 : _0x1a6176.type === "delete"
 ? (0, p.transformOutlinesByDelete)([_0x279302], _0x1a6176)[0]
 : (0, p.transformOutlinesByMove)([_0x279302], _0x1a6176)[0]) ?? null
 );
}
function pr(_0x66f473, _0x481994) {
 if (_0x481994.type === "insert")
 return _0x66f473 >= _0x481994.index
 ? _0x66f473 + _0x481994.count
 : _0x66f473;
 if (_0x481994.type === "delete")
 return _0x66f473 < _0x481994.start
 ? _0x66f473
 : _0x66f473 > _0x481994.end
 ? _0x66f473 - (_0x481994.end - _0x481994.start + 1)
 : _0x481994.start;
 let _0x58163e = k(
 {
 unitId: _0x481994.unitId,
 subUnitId: _0x481994.subUnitId,
 axis: _0x481994.axis,
 start: _0x66f473,
 end: _0x66f473,
 },
 _0x481994,
 );
 return (_0x58163e == null ? undefined : _0x58163e.start) ?? _0x66f473;
}
function k(_0x49489a, _0x57c4c5) {
 let _0x49f8f3 = fr(
 {
 id: "__range__",
 unitId: _0x49489a.unitId,
 subUnitId: _0x49489a.subUnitId,
 axis: _0x49489a.axis,
 start: _0x49489a.start,
 end: _0x49489a.end,
 collapsed: false,
 },
 _0x57c4c5,
 );
 return _0x49f8f3 && { start: _0x49f8f3.start, end: _0x49f8f3.end };
}
function mr(_0x1d3b1b, _0x3ba4db, _0x2aae3b, _0x1c9515) {
 return {
 unitId: _0x2aae3b,
 subUnitId: _0x1c9515,
 axis: _0x3ba4db,
 index:
 _0x3ba4db === p.DimensionOutlineAxis["ROW"]
 ? _0x1d3b1b.startRow
 : _0x1d3b1b.startColumn,
 count:
 _0x3ba4db === p.DimensionOutlineAxis["ROW"]
 ? _0x1d3b1b.endRow - _0x1d3b1b.startRow + 1
 : _0x1d3b1b.endColumn - _0x1d3b1b.startColumn + 1,
 };
}
function hr(_0x309d68, _0xa3e5db, _0x5863f6, _0x1c86b6) {
 return {
 unitId: _0x5863f6,
 subUnitId: _0x1c86b6,
 axis: _0xa3e5db,
 start:
 _0xa3e5db === p.DimensionOutlineAxis["ROW"]
 ? _0x309d68.startRow
 : _0x309d68.startColumn,
 end:
 _0xa3e5db === p.DimensionOutlineAxis["ROW"]
 ? _0x309d68.endRow
 : _0x309d68.endColumn,
 };
}
function A(_0x2f3827, _0x554b97) {
 return { m1Prime: _0x2f3827, m2Prime: _0x554b97 };
}
function j(_0x587e80) {
 return ((_0x587e80.id = o.EmptyMutation["id"]), _0x587e80);
}
function gr(_0x5b55f2) {
 return {
 id: p.AddDimensionOutlineMutation["id"],
 params: {
 unitId: _0x5b55f2.unitId,
 subUnitId: _0x5b55f2.subUnitId,
 outline: _0x5b55f2,
 },
 };
}
function _r(_0x3d5fff) {
 return {
 id: p.RemoveDimensionOutlineMutation["id"],
 params: {
 unitId: _0x3d5fff.unitId,
 subUnitId: _0x3d5fff.subUnitId,
 outlineId: _0x3d5fff.id,
 outline: _0x3d5fff,
 },
 };
}
function M(_0x4ff360, _0x59fd3d) {
 return (
 _0x4ff360.unitId === _0x59fd3d.unitId &&
 _0x4ff360.subUnitId === _0x59fd3d.subUnitId
 );
}
function N(_0x31bcd0, _0x369e5e) {
 return M(_0x31bcd0, _0x369e5e) && _0x31bcd0.axis === _0x369e5e.axis;
}
function vr(_0x5e6d9a, _0x4e6e8c) {
 return (
 N(_0x5e6d9a, _0x4e6e8c) &&
 _0x5e6d9a.start >= _0x4e6e8c.start &&
 _0x5e6d9a.end <= _0x4e6e8c.end
 );
}
function yr(_0x3b06da, _0xb1fecf) {
 return (
 N(_0x3b06da, _0xb1fecf) &&
 (_0x3b06da.end + 1 === _0xb1fecf.start ||
 _0xb1fecf.end + 1 === _0x3b06da.start)
 );
}
function br(_0x3ce99c, _0x3cdc2f) {
 return {
 ...(_0x3ce99c.id <= _0x3cdc2f.id ? _0x3ce99c : _0x3cdc2f),
 start: Math.min(_0x3ce99c.start, _0x3cdc2f.start),
 end: Math.max(_0x3ce99c.end, _0x3cdc2f.end),
 collapsed: _0x3ce99c.collapsed || _0x3cdc2f.collapsed,
 };
}
function xr(_0xf72f7, _0x301496) {
 if (!N(_0xf72f7, _0x301496)) return false;
 let _0x4e7143 =
 _0xf72f7.start <= _0x301496.end && _0x301496.start <= _0xf72f7.end,
 _0x3692bb =
 _0xf72f7.start <= _0x301496.start && _0x301496.end <= _0xf72f7.end,
 _0x24d756 =
 _0x301496.start <= _0xf72f7.start && _0xf72f7.end <= _0x301496.end;
 return _0x4e7143 && !_0x3692bb && !_0x24d756;
}
const P = (_0x494e72, _0x2904ca) => {
 let _0x241859 = (0, m.singleReferenceToGrid)(
 _0x494e72.params["comment"].ref,
 ),
 _0xdcafb5 = (0, o.handleDefaultRangeChangeWithEffectRefCommands)(
 {
 startColumn: _0x241859.column,
 endColumn: _0x241859.column,
 startRow: _0x241859.row,
 endRow: _0x241859.row,
 },
 _0x2904ca,
 );
 if (!_0xdcafb5)
 return [
 {
 id: c.DeleteCommentMutation["id"],
 params: {
 ..._0x494e72.params,
 comment: undefined,
 commentId: _0x494e72.params["comment"].id,
 },
 },
 ];
 let _0x1a1803 = (0, m.serializeRange)(_0xdcafb5);
 return _0x1a1803 === _0x494e72.params["comment"].ref
 ? []
 : [
 {
 id: c.UpdateCommentRefMutation["id"],
 params: {
 ..._0x494e72.params,
 comment: undefined,
 payload: {
 ref: _0x1a1803,
 commentId: _0x494e72.params["comment"].id,
 },
 },
 },
 ];
 },
 Sr = {
 m1: o.InsertColMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x4efac8, _0x181c4b) => {
 let _0x5eb350 = { m1Prime: _0x4efac8, m2Prime: _0x181c4b };
 if (
 _0x4efac8.params["unitId"] !== _0x181c4b.params["unitId"] ||
 _0x4efac8.params["subUnitId"] !== _0x181c4b.params["subUnitId"]
 )
 return _0x5eb350;
 let _0x29e058 = {
 id: o.InsertColCommand["id"],
 params: {
 unitId: _0x4efac8.params["unitId"],
 subUnitId: _0x4efac8.params["subUnitId"],
 range: _0x4efac8.params["range"],
 },
 },
 _0x395cc0 = P(_0x181c4b, _0x29e058);
 return {
 m1Prime: [_0x4efac8, ..._0x395cc0],
 m2Prime: [_0x181c4b, ..._0x395cc0],
 };
 },
 };
function F(_0x12eb03) {
 return { ..._0x12eb03, rangeType: e.RANGE_TYPE["COLUMN"] };
}
function I(_0x501fdb, _0x2d4d62, _0x56fb3b, _0x2d476e) {
 if (_0x2d476e < 0) {
 for (
 let _0x31f6ba = _0x2d4d62;
 _0x31f6ba < _0x2d4d62 + _0x56fb3b;
 _0x31f6ba++
 )
 if (_0x501fdb.hasOwnProperty(_0x31f6ba)) {
 _0x501fdb.hasOwnProperty(_0x31f6ba + _0x2d476e) ||
 (_0x501fdb[_0x31f6ba + _0x2d476e] = {});
 let _0x3b5e07 = _0x501fdb[_0x31f6ba],
 _0x49ec36 = Object.keys(_0x3b5e07)
 .map(Number)
 .sort((_0x2b6863, _0x430ed0) => _0x2b6863 - _0x430ed0);
 for (let _0x5639d8 of _0x49ec36)
 _0x501fdb[_0x31f6ba + _0x2d476e][_0x5639d8] = _0x3b5e07[_0x5639d8];
 delete _0x501fdb[_0x31f6ba];
 } else delete _0x501fdb[_0x31f6ba + _0x2d476e];
 } else {
 for (
 let _0x24f299 = _0x2d4d62 + _0x56fb3b - 1;
 _0x24f299 >= _0x2d4d62;
 _0x24f299--
 )
 if (_0x501fdb.hasOwnProperty(_0x24f299)) {
 _0x501fdb.hasOwnProperty(_0x24f299 + _0x2d476e) ||
 (_0x501fdb[_0x24f299 + _0x2d476e] = {});
 let _0x32b45a = _0x501fdb[_0x24f299],
 _0x400d25 = Object.keys(_0x32b45a)
 .map(Number)
 .sort((_0x4b4d92, _0x4e8969) => _0x4b4d92 - _0x4e8969);
 for (let _0x4cd2d8 of _0x400d25)
 _0x501fdb[_0x24f299 + _0x2d476e][_0x4cd2d8] = _0x32b45a[_0x4cd2d8];
 delete _0x501fdb[_0x24f299];
 } else delete _0x501fdb[_0x24f299 + _0x2d476e];
 }
}
function L(_0x3cec3b, _0x6573c, _0xa1463, _0x4fcd59) {
 let _0x539be6 = Object.keys(_0x3cec3b)
 .map(Number)
 .sort((_0x16d0a0, _0x266d18) => _0x16d0a0 - _0x266d18);
 if (_0x4fcd59 < 0)
 for (let _0x1617b9 of _0x539be6) {
 let _0x20b543 = _0x3cec3b[_0x1617b9];
 for (
 let _0x567cb0 = _0x6573c;
 _0x567cb0 < _0x6573c + _0xa1463;
 _0x567cb0++
 )
 _0x20b543.hasOwnProperty(_0x567cb0)
 ? ((_0x20b543[_0x567cb0 + _0x4fcd59] = _0x20b543[_0x567cb0]),
 delete _0x20b543[_0x567cb0])
 : delete _0x20b543[_0x567cb0 + _0x4fcd59];
 }
 else
 for (let _0xc722b of _0x539be6) {
 let _0x350f18 = _0x3cec3b[_0xc722b];
 for (
 let _0x370ab1 = _0x6573c + _0xa1463 - 1;
 _0x370ab1 >= _0x6573c;
 _0x370ab1--
 )
 _0x350f18.hasOwnProperty(_0x370ab1)
 ? ((_0x350f18[_0x370ab1 + _0x4fcd59] = _0x350f18[_0x370ab1]),
 delete _0x350f18[_0x370ab1])
 : delete _0x350f18[_0x370ab1 + _0x4fcd59];
 }
}
function Cr(_0x10d2fc, _0x87c3c7) {
 return new o["RangeMergeUtil"]()
 .add(_0x10d2fc)
 .subtract(..._0x87c3c7)
 .merge();
}
function R(_0x405837, _0x566049, _0x8dc581, _0x144f42) {
 let _0x5b3b10 = new m["LexerTreeBuilder"]().sequenceNodesBuilder(_0x8dc581);
 if (_0x5b3b10 == null) return _0x8dc581;
 let _0x49897c = [];
 for (
 let _0x38539b = 0, _0xc64d18 = _0x5b3b10.length;
 _0x38539b < _0xc64d18;
 _0x38539b++
 ) {
 let _0x26aeec = _0x5b3b10[_0x38539b];
 if (
 typeof _0x26aeec == "string" ||
 _0x26aeec.nodeType !== m.sequenceNodeType["REFERENCE"]
 ) {
 _0x49897c.push(_0x26aeec);
 continue;
 }
 let { token: _0x2c9995 } = _0x26aeec,
 {
 range: _0x204a3f,
 sheetName: _0x4647eb,
 unitId: _0x40106a,
 } = (0, m.deserializeRangeWithSheetWithCache)(_0x2c9995);
 if (
 (_0x405837 === _0x40106a || _0x40106a === "") &&
 (_0x566049 === _0x4647eb || _0x4647eb === "")
 ) {
 let _0x3075e4 = _0x144f42(_0x204a3f),
 _0x365b19 = _0x3075e4
 ? (0, m.serializeRangeToRefString)({
 range: _0x3075e4,
 sheetName: _0x4647eb,
 unitId: _0x40106a,
 })
 : m.ErrorType["ERROR"];
 _0x49897c.push({ ..._0x26aeec, token: _0x365b19 });
 } else _0x49897c.push(_0x26aeec);
 }
 return "=" + (0, m.generateStringWithSequence)(_0x49897c);
}
function z(_0x3fc9f9, _0x3cffdf) {
 return _0x3fc9f9.start <= _0x3cffdf.end && _0x3fc9f9.end >= _0x3cffdf.start;
}
function wr(_0x4f26ac, _0x1ed97a) {
 return _0x4f26ac.start <= _0x1ed97a.start && _0x4f26ac.end >= _0x1ed97a.end;
}
function Tr(_0x483fca, _0x41efbf) {
 let _0x367166 = [_0x483fca];
 for (let _0x2b89cb of _0x41efbf) {
 let _0x50cb9f = [];
 for (let _0x3b1ec7 of _0x367166)
 _0x50cb9f.push(...Er(_0x3b1ec7, _0x2b89cb));
 _0x367166 = _0x50cb9f;
 }
 return _0x367166;
}
function Er(_0x260e84, _0x3909b4) {
 let _0x4c903c = [];
 if (wr(_0x3909b4, _0x260e84)) return _0x4c903c;
 if (wr(_0x260e84, _0x3909b4)) {
 let _0x4fac83 = _0x260e84.start,
 _0x1911e7 = _0x3909b4.start - 1,
 _0x32bf2f = _0x3909b4.end + 1,
 _0x50a7ac = _0x260e84.end;
 return (
 _0x4fac83 <= _0x1911e7 &&
 _0x4c903c.push({ start: _0x4fac83, end: _0x1911e7 }),
 _0x32bf2f <= _0x50a7ac &&
 _0x4c903c.push({ start: _0x32bf2f, end: _0x50a7ac }),
 _0x4c903c
 );
 }
 return z(_0x260e84, _0x3909b4)
 ? (_0x260e84.start < _0x3909b4.start &&
 _0x4c903c.push({ start: _0x260e84.start, end: _0x3909b4.start - 1 }),
 _0x260e84.end > _0x3909b4.end &&
 _0x4c903c.push({ start: _0x3909b4.end + 1, end: _0x260e84.end }),
 _0x4c903c)
 : [_0x260e84];
}
function Dr(_0x5e1ddb, _0x151974) {
 let _0xc8b03f = (0, o.handleBaseInsertRange)(
 {
 startColumn: _0x5e1ddb.start,
 endColumn: _0x5e1ddb.end,
 startRow: 0,
 endRow: 1,
 rangeType: e.RANGE_TYPE["COLUMN"],
 },
 {
 startColumn: _0x151974.start,
 endColumn: _0x151974.end,
 startRow: 0,
 endRow: 1,
 rangeType: e.RANGE_TYPE["COLUMN"],
 },
 );
 return {
 start: _0x151974.start + _0xc8b03f.step,
 end: _0x151974.end + _0xc8b03f.step + _0xc8b03f.length,
 };
}
function Or(_0x2249ae, _0x21a586) {
 let _0x1b23f8 = (0, o.handleBaseRemoveRange)(
 {
 startColumn: _0x2249ae.start,
 endColumn: _0x2249ae.end,
 startRow: 0,
 endRow: 1,
 rangeType: e.RANGE_TYPE["COLUMN"],
 },
 {
 startColumn: _0x21a586.start,
 endColumn: _0x21a586.end,
 startRow: 0,
 endRow: 1,
 rangeType: e.RANGE_TYPE["COLUMN"],
 },
 );
 return _0x1b23f8 === null
 ? null
 : {
 start: _0x21a586.start + _0x1b23f8.step,
 end: _0x21a586.end + _0x1b23f8.step + _0x1b23f8.length,
 };
}
function B(_0xbce907, _0x98641f) {
 let { unitId: _0x357029, subUnitId: _0x253405 } = _0xbce907.params,
 _0x328028 = (_0x2d0709) =>
 R(_0x357029, _0x253405, _0x2d0709, (_0x17d05d) =>
 (0, o.handleDefaultRangeChangeWithEffectRefCommands)(
 _0x17d05d,
 _0x98641f,
 ),
 ),
 _0x2a7a66 = [],
 _0x1e1e8c = (_0x29a84d) => {
 let _0x3f4b21 = _0x29a84d.uid,
 _0x55d258 = _0x29a84d.ranges["map"]((_0x151180) =>
 (0, o.handleCommonDefaultRangeChangeWithEffectRefCommands)(
 _0x151180,
 _0x98641f,
 ),
 ),
 _0xdfcd10 = _0x29a84d.formula1 ?? "",
 _0x370b8e = _0x29a84d.formula2 ?? "",
 _0x431248 = _0xdfcd10,
 _0x3a0766 = _0x370b8e;
 ((0, e.isFormulaString)(_0xdfcd10) && (_0x431248 = _0x328028(_0xdfcd10)),
 (0, e.isFormulaString)(_0x370b8e) && (_0x3a0766 = _0x328028(_0x370b8e)),
 (_0x431248 !== _0xdfcd10 || _0x3a0766 !== _0x370b8e) &&
 _0x2a7a66.push({
 id: u.UpdateDataValidationMutation["id"],
 params: {
 unitId: _0x357029,
 subUnitId: _0x253405,
 ruleId: _0x3f4b21,
 payload: {
 type: u.UpdateRuleType["SETTING"],
 payload: {
 type: _0x29a84d.type,
 formula1: _0x431248,
 formula2: _0x3a0766,
 },
 },
 },
 }));
 let _0x53f3ac = _0x55d258.flat().filter(Boolean);
 (0, e.isRangesEqual)(_0x29a84d.ranges, _0x53f3ac) ||
 _0x2a7a66.push({
 id: u.UpdateDataValidationMutation["id"],
 params: {
 unitId: _0x357029,
 subUnitId: _0x253405,
 ruleId: _0x3f4b21,
 payload: { type: u.UpdateRuleType["RANGE"], payload: _0x53f3ac },
 },
 });
 };
 return (
 Array.isArray(_0xbce907.params["rule"])
 ? _0xbce907.params["rule"].forEach((_0x163d09) => _0x1e1e8c(_0x163d09))
 : _0x1e1e8c(_0xbce907.params["rule"]),
 _0x2a7a66
 );
}
const kr = {
 m1: o.MoveColsMutation["id"],
 m2: u.AddDataValidationMutation["id"],
 handler(_0x5993de, _0x48d96c) {
 let _0x49e42a = { m1Prime: _0x5993de, m2Prime: _0x48d96c };
 if (
 _0x5993de.params["unitId"] !== _0x48d96c.params["unitId"] ||
 _0x5993de.params["subUnitId"] !== _0x48d96c.params["subUnitId"]
 )
 return _0x49e42a;
 let _0x3920ba = B(_0x48d96c, {
 id: o.MoveColsCommand["id"],
 params: {
 fromRange: _0x5993de.params["sourceRange"],
 toRange: _0x5993de.params["targetRange"],
 },
 });
 return {
 m1Prime: [_0x5993de, ..._0x3920ba],
 m2Prime: [_0x48d96c, ..._0x3920ba],
 };
 },
 },
 Ar = {
 m1: o.InsertColMutation["id"],
 m2: u.AddDataValidationMutation["id"],
 handler(_0x413e71, _0x54a375) {
 let _0x5b2a2b = { m1Prime: _0x413e71, m2Prime: _0x54a375 };
 if (
 _0x413e71.params["unitId"] !== _0x54a375.params["unitId"] ||
 _0x413e71.params["subUnitId"] !== _0x54a375.params["subUnitId"]
 )
 return _0x5b2a2b;
 let _0x2e1a76 = B(_0x54a375, {
 id: o.InsertColCommand["id"],
 params: {
 unitId: _0x413e71.params["unitId"],
 subUnitId: _0x413e71.params["subUnitId"],
 range: _0x413e71.params["range"],
 },
 });
 return {
 m1Prime: [_0x413e71, ..._0x2e1a76],
 m2Prime: [_0x54a375, ..._0x2e1a76],
 };
 },
 },
 jr = {
 m1: o.InsertColMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x4748aa, _0x2a8cd5) {
 let _0x1324fb = an.handler(_0x2a8cd5, _0x4748aa);
 return S(_0x1324fb)
 ? { m1Prime: _0x1324fb.m2Prime, m2Prime: _0x1324fb.m1Prime }
 : _0x1324fb;
 },
 },
 Mr = {
 m1: o.InsertColMutation["id"],
 m2: o.InsertColMutation["id"],
 handler(_0x195cd3, _0x42aa2f) {
 let _0x53892b = { m1Prime: _0x195cd3, m2Prime: _0x42aa2f };
 if (
 _0x195cd3.params["unitId"] !== _0x42aa2f.params["unitId"] ||
 _0x195cd3.params["subUnitId"] !== _0x42aa2f.params["subUnitId"]
 )
 return _0x53892b;
 let _0x516247 = e.Tools["deepClone"](_0x195cd3),
 _0x2758f5 = e.Tools["deepClone"](_0x42aa2f),
 _0x8612a5 = (0, o.handleBaseInsertRange)(
 F(_0x195cd3.params["range"]),
 F(_0x42aa2f.params["range"]),
 );
 if (
 (_0x8612a5
 ? ((_0x2758f5.params["range"].startColumn += _0x8612a5.step),
 (_0x2758f5.params["range"].endColumn +=
 _0x8612a5.step + (_0x8612a5.length || 0)))
 : (_0x2758f5.id = o.EmptyMutation["id"]),
 _0x195cd3.params["range"].startColumn !==
 _0x42aa2f.params["range"].startColumn)
 ) {
 let _0x256f40 = (0, o.handleBaseInsertRange)(
 F(_0x42aa2f.params["range"]),
 F(_0x195cd3.params["range"]),
 );
 _0x256f40
 ? ((_0x516247.params["range"].startColumn += _0x256f40.step),
 (_0x516247.params["range"].endColumn +=
 _0x256f40.step + (_0x256f40.length || 0)))
 : (_0x516247.id = o.EmptyMutation["id"]);
 }
 return { m1Prime: _0x516247, m2Prime: _0x2758f5 };
 },
 },
 Nr = {
 m1: o.InsertColMutation["id"],
 m2: o.MoveColsMutation["id"],
 handler(_0x3507be, _0x162420) {
 let _0xe504bb = { m1Prime: _0x3507be, m2Prime: _0x162420 };
 if (
 _0x3507be.params["unitId"] !== _0x162420.params["unitId"] ||
 _0x3507be.params["subUnitId"] !== _0x162420.params["subUnitId"]
 )
 return _0xe504bb;
 let _0x13b573 = e.Tools["deepClone"](_0x3507be),
 _0x5e52d9 = e.Tools["deepClone"](_0x162420),
 _0x6ce0c6 = _0x162420.params["sourceRange"],
 _0x44d05b = _0x162420.params["targetRange"];
 if (
 (_0x3507be.params["range"].startColumn > _0x6ce0c6.startColumn &&
 _0x3507be.params["range"].startColumn <= _0x6ce0c6.endColumn) ||
 (_0x3507be.params["range"].startColumn > _0x44d05b.startColumn &&
 _0x3507be.params["range"].startColumn <= _0x44d05b.endColumn)
 )
 return { error: Error("insert col is conflict with move col") };
 let _0x5ce9af = (0, o.handleBaseInsertRange)(
 F(_0x3507be.params["range"]),
 F(_0x6ce0c6),
 ),
 _0x212cd1 = (0, o.handleBaseInsertRange)(
 F(_0x3507be.params["range"]),
 F(_0x44d05b),
 );
 if (
 ((_0x5e52d9.params["sourceRange"].startColumn += _0x5ce9af.step),
 (_0x5e52d9.params["sourceRange"].endColumn +=
 _0x5ce9af.step + (_0x5ce9af.length || 0)),
 (_0x5e52d9.params["targetRange"].startColumn += _0x212cd1.step),
 (_0x5e52d9.params["targetRange"].endColumn +=
 _0x212cd1.step + (_0x212cd1.length || 0)),
 _0x6ce0c6.startColumn >= _0x3507be.params["range"].startColumn &&
 _0x44d05b.startColumn < _0x3507be.params["range"].startColumn)
 ) {
 let _0x58d647 = _0x44d05b.endColumn - _0x44d05b.startColumn + 1;
 ((_0x13b573.params["range"].startColumn += _0x58d647),
 (_0x13b573.params["range"].endColumn += _0x58d647));
 } else {
 if (
 _0x6ce0c6.endColumn < _0x3507be.params["range"].startColumn &&
 _0x44d05b.startColumn >= _0x3507be.params["range"].startColumn
 ) {
 let _0x96cd45 = _0x6ce0c6.endColumn - _0x6ce0c6.startColumn + 1;
 ((_0x13b573.params["range"].startColumn -= _0x96cd45),
 (_0x13b573.params["range"].endColumn -= _0x96cd45));
 }
 }
 return { m1Prime: _0x13b573, m2Prime: _0x5e52d9 };
 },
 },
 Pr = {
 m1: o.InsertColMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x104054, _0x48cdbf) {
 let _0x14ca94 = { m1Prime: _0x104054, m2Prime: _0x48cdbf };
 if (
 _0x104054.params["unitId"] !== _0x48cdbf.params["unitId"] ||
 (_0x104054.params["subUnitId"] !== _0x48cdbf.params["from"].subUnitId &&
 _0x104054.params["subUnitId"] !== _0x48cdbf.params["to"].subUnitId)
 )
 return _0x14ca94;
 let _0xc9d86d = e.Tools["deepClone"](_0x104054),
 _0x2ad821 = e.Tools["deepClone"](_0x48cdbf);
 if (
 _0x104054.params["subUnitId"] === _0x48cdbf.params["from"].subUnitId
 ) {
 let _0x561770 = new e["ObjectMatrix"](
 _0x2ad821.params["from"].value,
 ).getDataRange(),
 { startColumn: _0x4af1b4, endColumn: _0x2db252 } = _0x561770,
 { startColumn: _0x3586fd, endColumn: _0xf1bed6 } =
 _0x104054.params["range"],
 { step: _0x58a742, length: _0x2c718a } = (0, o.handleBaseInsertRange)(
 _0x104054.params["range"],
 _0x561770,
 );
 (_0x58a742 > 0 &&
 _0x2c718a === 0 &&
 L(
 _0x2ad821.params["from"].value,
 _0x4af1b4,
 _0x2db252 - _0x4af1b4 + 1,
 _0x58a742,
 ),
 _0x58a742 === 0 &&
 _0x2c718a > 0 &&
 L(
 _0x2ad821.params["from"].value,
 _0x3586fd,
 _0x2db252 - _0x3586fd + 1,
 _0xf1bed6 - _0x3586fd + 1,
 ));
 }
 if (_0x104054.params["subUnitId"] === _0x48cdbf.params["to"].subUnitId) {
 let _0x3b1acc = new e["ObjectMatrix"](
 _0x2ad821.params["to"].value,
 ).getDataRange(),
 { startColumn: _0x47d3a1, endColumn: _0x379f5e } = _0x3b1acc,
 { startColumn: _0xaf864b, endColumn: _0x25a089 } =
 _0x104054.params["range"],
 { step: _0x491278, length: _0x379bee } = (0, o.handleBaseInsertRange)(
 _0x104054.params["range"],
 _0x3b1acc,
 );
 (_0x491278 > 0 &&
 _0x379bee === 0 &&
 L(
 _0x2ad821.params["to"].value,
 _0x47d3a1,
 _0x379f5e - _0x47d3a1 + 1,
 _0x491278,
 ),
 _0x491278 === 0 &&
 _0x379bee > 0 &&
 L(
 _0x2ad821.params["to"].value,
 _0xaf864b,
 _0x379f5e - _0xaf864b + 1,
 _0x25a089 - _0xaf864b + 1,
 ));
 }
 return { m1Prime: _0xc9d86d, m2Prime: _0x2ad821 };
 },
 },
 Fr = {
 m1: o.InsertColMutation["id"],
 m2: o.RemoveColMutation["id"],
 handler(_0x424a7c, _0x583e1f) {
 let _0x5e2e16 = { m1Prime: _0x424a7c, m2Prime: _0x583e1f };
 if (
 _0x424a7c.params["unitId"] !== _0x583e1f.params["unitId"] ||
 _0x424a7c.params["subUnitId"] !== _0x583e1f.params["subUnitId"]
 )
 return _0x5e2e16;
 let _0x4e3d82 = e.Tools["deepClone"](_0x424a7c),
 _0x287818 = e.Tools["deepClone"](_0x583e1f);
 if (
 _0x424a7c.params["range"].startColumn <=
 _0x583e1f.params["range"].endColumn &&
 _0x424a7c.params["range"].startColumn >
 _0x583e1f.params["range"].startColumn
 )
 return { error: Error("insert row is conflict with remove row") };
 let _0x56f856 = (0, o.handleBaseInsertRange)(
 F(_0x424a7c.params["range"]),
 F(_0x583e1f.params["range"]),
 );
 _0x56f856
 ? ((_0x287818.params["range"].startColumn += _0x56f856.step),
 (_0x287818.params["range"].endColumn +=
 _0x56f856.step + (_0x56f856.length || 0)))
 : (_0x287818.id = o.EmptyMutation["id"]);
 let _0x5c2c81 = (0, o.handleBaseRemoveRange)(
 F(_0x583e1f.params["range"]),
 F(_0x424a7c.params["range"]),
 );
 return (
 _0x5c2c81 &&
 ((_0x4e3d82.params["range"].startColumn += _0x5c2c81.step),
 (_0x4e3d82.params["range"].endColumn +=
 _0x5c2c81.step + (_0x5c2c81.length || 0))),
 { m1Prime: _0x4e3d82, m2Prime: _0x287818 }
 );
 },
 },
 Ir = {
 m1: o.InsertColMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler(_0x18f93e, _0x1a42e7) {
 let _0x5a5ca2 = { m1Prime: _0x18f93e, m2Prime: _0x1a42e7 };
 if (
 _0x18f93e.params["unitId"] !== _0x1a42e7.params["unitId"] ||
 _0x18f93e.params["subUnitId"] !== _0x1a42e7.params["subUnitId"]
 )
 return _0x5a5ca2;
 let _0x2079d8 = e.Tools["deepClone"](_0x18f93e),
 _0x4dd421 = e.Tools["deepClone"](_0x1a42e7),
 { ranges: _0x594658 } = _0x4dd421.params;
 return _0x594658.some((_0x2e202c) => {
 let _0xa935e6 = (0, o.handleBaseInsertRange)(
 F(_0x18f93e.params["range"]),
 F(_0x2e202c),
 );
 return _0xa935e6.length === 0
 ? ((_0x2e202c.startColumn += _0xa935e6.step),
 (_0x2e202c.endColumn += _0xa935e6.step),
 false)
 : true;
 })
 ? {
 error: Error(
 "insert\x20col\x20is\x20conflict\x20with\x20remove\x20numfmt",
 ),
 }
 : { m1Prime: _0x2079d8, m2Prime: _0x4dd421 };
 },
 },
 Lr = {
 m1: o.InsertColMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler(_0x155d6d, _0x54643c) {
 let _0x5a550c = e.Tools["deepClone"](_0x155d6d),
 _0x428bb1 = e.Tools["deepClone"](_0x54643c);
 if (
 _0x155d6d.params["unitId"] !== _0x54643c.params["unitId"] ||
 _0x155d6d.params["subUnitId"] !== _0x54643c.params["subUnitId"]
 )
 return { m1Prime: _0x5a550c, m2Prime: _0x428bb1 };
 let _0x5a05db = _0x428bb1.params["ranges"].map((_0x396532) => {
 let _0x1c627a = _0x5a550c.params["range"],
 _0x280860 = _0x1c627a.endColumn - _0x1c627a.startColumn + 1;
 return _0x1c627a.startColumn <= _0x396532.startColumn
 ? {
 ..._0x396532,
 startColumn: _0x396532.startColumn + _0x280860,
 endColumn: _0x396532.endColumn + _0x280860,
 }
 : _0x1c627a.startColumn > _0x396532.startColumn &&
 _0x1c627a.startColumn <= _0x396532.endColumn
 ? { ..._0x396532, endColumn: _0x396532.endColumn + _0x280860 }
 : { ..._0x396532 };
 });
 return (
 (_0x428bb1.params["ranges"] = _0x5a05db),
 { m1Prime: _0x5a550c, m2Prime: _0x428bb1 }
 );
 },
 },
 Rr = {
 m1: o.InsertColMutation["id"],
 m2: o.ReorderRangeMutation["id"],
 handler(_0x45d94b, _0x4fce0f) {
 let _0x1f3352 = { m1Prime: _0x45d94b, m2Prime: _0x4fce0f };
 if (
 _0x45d94b.params["unitId"] !== _0x4fce0f.params["unitId"] ||
 _0x45d94b.params["subUnitId"] !== _0x4fce0f.params["subUnitId"]
 )
 return _0x1f3352;
 let _0x471ecb = e.Tools["deepClone"](_0x4fce0f),
 _0x1b5446 = (0, o.handleBaseInsertRange)(
 F(_0x45d94b.params["range"]),
 F(_0x4fce0f.params["range"]),
 );
 return (
 (_0x471ecb.params["range"].startColumn += _0x1b5446.step),
 (_0x471ecb.params["range"].endColumn +=
 _0x1b5446.step + (_0x1b5446.length || 0)),
 { m1Prime: _0x45d94b, m2Prime: _0x471ecb }
 );
 },
 },
 zr = {
 m1: o.InsertColMutation["id"],
 m2: o.SetColDataMutation["id"],
 handler(_0x166139, _0x4608f7) {
 let _0x417fd4 = { m1Prime: _0x166139, m2Prime: _0x4608f7 };
 if (
 _0x166139.params["unitId"] !== _0x4608f7.params["unitId"] ||
 _0x166139.params["subUnitId"] !== _0x4608f7.params["subUnitId"]
 )
 return _0x417fd4;
 let _0x484669 = e.Tools["deepClone"](_0x166139),
 _0x120ee6 = e.Tools["deepClone"](_0x4608f7),
 { columnData: _0x1b945f } = _0x120ee6.params;
 for (
 let _0x5d3454 = _0x166139.params["range"].startColumn;
 _0x5d3454 <= _0x166139.params["range"].endColumn;
 _0x5d3454++
 )
 (0, e.insertMatrixArray)(_0x5d3454, undefined, _0x1b945f);
 return { m1Prime: _0x484669, m2Prime: _0x120ee6 };
 },
 },
 Br = {
 m1: o.InsertColMutation["id"],
 m2: o.SetColHiddenMutation["id"],
 handler(_0x11e50e, _0x2eb1f4) {
 let _0xc8a15 = { m1Prime: _0x11e50e, m2Prime: _0x2eb1f4 };
 if (
 _0x11e50e.params["unitId"] !== _0x2eb1f4.params["unitId"] ||
 _0x11e50e.params["subUnitId"] !== _0x2eb1f4.params["subUnitId"]
 )
 return _0xc8a15;
 let _0x3ab817 = e.Tools["deepClone"](_0x11e50e),
 _0x51d80a = e.Tools["deepClone"](_0x2eb1f4),
 { ranges: _0x192cc8 } = _0x51d80a.params;
 return _0x192cc8.some((_0x3f2a22) => {
 let _0x42e6a9 = (0, o.handleBaseInsertRange)(
 F(_0x11e50e.params["range"]),
 _0x3f2a22,
 );
 return _0x42e6a9.length === 0
 ? ((_0x3f2a22.startColumn += _0x42e6a9.step),
 (_0x3f2a22.endColumn += _0x42e6a9.step),
 false)
 : true;
 })
 ? { error: Error("insert col is conflict with set col hidden") }
 : { m1Prime: _0x3ab817, m2Prime: _0x51d80a };
 },
 },
 Vr = {
 m1: o.InsertColMutation["id"],
 m2: o.SetColVisibleMutation["id"],
 handler(_0x539912, _0x562d93) {
 let _0x382b81 = { m1Prime: _0x539912, m2Prime: _0x562d93 };
 if (
 _0x539912.params["unitId"] !== _0x562d93.params["unitId"] ||
 _0x539912.params["subUnitId"] !== _0x562d93.params["subUnitId"]
 )
 return _0x382b81;
 let _0x10869e = e.Tools["deepClone"](_0x539912),
 _0x459a08 = e.Tools["deepClone"](_0x562d93),
 { ranges: _0x37e167 } = _0x459a08.params;
 return _0x37e167.some((_0x5392db) => {
 let _0x374999 = (0, o.handleBaseInsertRange)(
 F(_0x539912.params["range"]),
 _0x5392db,
 );
 return _0x374999.length === 0
 ? ((_0x5392db.startColumn += _0x374999.step),
 (_0x5392db.endColumn += _0x374999.step),
 false)
 : true;
 })
 ? { error: Error("insert col is conflict with set col visible") }
 : { m1Prime: _0x10869e, m2Prime: _0x459a08 };
 },
 },
 Hr = {
 m1: o.InsertColMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler(_0x1abf29, _0x182f6c) {
 let _0x18508b = { m1Prime: _0x1abf29, m2Prime: _0x182f6c };
 if (
 _0x1abf29.params["unitId"] !== _0x182f6c.params["unitId"] ||
 _0x1abf29.params["subUnitId"] !== _0x182f6c.params["subUnitId"]
 )
 return _0x18508b;
 let _0x27cf79 = [e.Tools["deepClone"](_0x1abf29)],
 _0x5ba582 = e.Tools["deepClone"](_0x182f6c),
 { values: _0x2a7bfe } = _0x5ba582.params,
 _0x2b76bb = [],
 _0x5c14d7 = false;
 for (let _0x3a85be in _0x2a7bfe) {
 let _0x17a913 = _0x2a7bfe[_0x3a85be];
 if (
 (_0x2b76bb.push(..._0x17a913.ranges),
 _0x17a913.ranges["some"]((_0x2c26ab) => {
 let _0x4b1b53 = (0, o.handleBaseInsertRange)(
 F(_0x1abf29.params["range"]),
 F(_0x2c26ab),
 );
 return _0x4b1b53.length === 0
 ? (_0x4b1b53.step !== 0 && (_0x5c14d7 = true),
 (_0x2c26ab.startColumn += _0x4b1b53.step),
 (_0x2c26ab.endColumn += _0x4b1b53.step),
 false)
 : true;
 }))
 )
 return { error: Error("insert col is conflict with set numfmt") };
 }
 if (_0x5c14d7) {
 let _0x406610 = {
 id: o.RemoveNumfmtMutation["id"],
 params: {
 unitId: _0x182f6c.params["unitId"],
 subUnitId: _0x182f6c.params["subUnitId"],
 ranges: _0x2b76bb,
 },
 };
 _0x27cf79.push(_0x406610, _0x5ba582);
 }
 return { m1Prime: _0x27cf79, m2Prime: _0x5ba582 };
 },
 },
 Ur = {
 m1: o.InsertColMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler(_0x175a5f, _0x4703c6) {
 let _0x358081 = { m1Prime: _0x175a5f, m2Prime: _0x4703c6 };
 if (
 _0x175a5f.params["unitId"] !== _0x4703c6.params["unitId"] ||
 _0x175a5f.params["subUnitId"] !== _0x4703c6.params["subUnitId"]
 )
 return _0x358081;
 let _0x4e55b4 = [e.Tools["deepClone"](_0x175a5f)],
 _0x4750a7 = e.Tools["deepClone"](_0x4703c6),
 _0x4eebd8 = new e["ObjectMatrix"](_0x4750a7.params["cellValue"]),
 _0x253bef = _0x4eebd8.getDataRange(),
 _0x438867 = _0x175a5f.params["range"],
 _0x46f80a = _0x438867.endColumn - _0x438867.startColumn + 1;
 if (
 _0x4750a7.params["cellValue"] &&
 _0x438867.startColumn <= _0x253bef.endColumn
 ) {
 let _0x374f16 = Math.max(_0x253bef.startColumn, _0x438867.startColumn);
 L(
 _0x4750a7.params["cellValue"],
 _0x374f16,
 _0x253bef.endColumn - _0x374f16 + 1,
 _0x46f80a,
 );
 }
 let _0x12305f = new e["ObjectMatrix"](),
 _0xb3e6a9 = false;
 if (
 (_0x4eebd8.forValue((_0x593d7d, _0x304819, _0xd68f39) => {
 if (_0xd68f39 && _0xd68f39.f) {
 let _0x3de86c = _0xd68f39.f,
 _0x38b3c1 = false,
 _0x614aed = R(
 _0x175a5f.params["unitId"],
 _0x175a5f.params["subUnitId"],
 _0x3de86c,
 (_0x3e5631) => {
 let _0x3d5a0f = (0, o.handleBaseInsertRange)(
 F(_0x175a5f.params["range"]),
 F(_0x3e5631),
 );
 return (
 (_0x3d5a0f.step !== 0 || _0x3d5a0f.length !== 0) &&
 ((_0x38b3c1 = true),
 (_0x3e5631.startColumn += _0x3d5a0f.step),
 (_0x3e5631.endColumn +=
 _0x3d5a0f.step + _0x3d5a0f.length)),
 _0x3e5631
 );
 },
 );
 _0x38b3c1 &&
 ((_0xb3e6a9 = true),
 (_0xd68f39.f = _0x614aed),
 _0x12305f.setValue(_0x593d7d, _0x304819, { ..._0xd68f39 }));
 }
 }),
 _0xb3e6a9)
 ) {
 let _0x1a4409 = {
 id: o.SetRangeValuesMutation["id"],
 params: {
 unitId: _0x4703c6.params["unitId"],
 subUnitId: _0x4703c6.params["subUnitId"],
 cellValue: _0x12305f.getMatrix(),
 },
 };
 _0x4e55b4.push(_0x1a4409);
 }
 return { m1Prime: _0x4e55b4, m2Prime: _0x4750a7 };
 },
 },
 Wr = {
 m1: o.InsertColMutation["id"],
 m2: o.SetSelectionsOperation["id"],
 handler(_0x2a8595, _0x5e64c0) {
 let _0x5b10a5 = { m1Prime: [], m2Prime: [] };
 if (
 _0x2a8595.params["unitId"] !== _0x5e64c0.params["unitId"] ||
 _0x2a8595.params["subUnitId"] !== _0x5e64c0.params["subUnitId"]
 )
 return _0x5b10a5;
 let _0x3524f3 = e.Tools["deepClone"](_0x5e64c0),
 _0x5a8a09 = false;
 return (
 _0x3524f3.params["selections"].forEach((_0x4c1a2f) => {
 let { range: _0x10f118, primary: _0x630a74 } = _0x4c1a2f,
 _0x34abcc = (0, o.handleBaseInsertRange)(
 F(_0x2a8595.params["range"]),
 F(_0x10f118),
 );
 if (_0x34abcc.length || _0x34abcc.step) {
 if (
 ((_0x10f118.startColumn += _0x34abcc.step),
 (_0x10f118.endColumn += _0x34abcc.step + (_0x34abcc.length || 0)),
 _0x630a74)
 ) {
 let _0x20e237 = (0, o.handleBaseInsertRange)(
 F(_0x2a8595.params["range"]),
 F(_0x630a74),
 );
 (_0x20e237.length || _0x20e237.step) &&
 ((_0x630a74.startColumn += _0x20e237.step),
 (_0x630a74.endColumn += _0x20e237.step),
 (_0x630a74.actualColumn += _0x20e237.step));
 }
 _0x5a8a09 = true;
 }
 }),
 _0x5a8a09 && _0x5b10a5.m2Prime["push"](_0x3524f3),
 _0x5b10a5
 );
 },
 },
 Gr = {
 m1: o.InsertColMutation["id"],
 m2: f.SetSheetsFilterCriteriaMutation["id"],
 handler(_0x53ee69, _0x27bd3e) {
 let _0xa10b46 = { m1Prime: _0x53ee69, m2Prime: _0x27bd3e };
 if (
 _0x53ee69.params["unitId"] !== _0x27bd3e.params["unitId"] ||
 _0x53ee69.params["subUnitId"] !== _0x27bd3e.params["subUnitId"]
 )
 return _0xa10b46;
 let _0x961ed5 = e.Tools["deepClone"](_0x53ee69),
 _0x51ccbe = e.Tools["deepClone"](_0x27bd3e),
 _0x1009e7 = Dr(
 {
 start: _0x53ee69.params["range"].startColumn,
 end: _0x53ee69.params["range"].endColumn,
 },
 { start: _0x27bd3e.params["col"], end: _0x27bd3e.params["col"] },
 );
 if (_0x51ccbe.params["col"] === _0x1009e7.start) return _0xa10b46;
 ((_0x51ccbe.params["col"] = _0x1009e7.start),
 _0x51ccbe.params["criteria"] &&
 (_0x51ccbe.params["criteria"].colId = _0x1009e7.start));
 let _0x102ced = e.Tools["deepClone"](_0x27bd3e);
 return (
 (_0x102ced.params["criteria"] = null),
 { m1Prime: [_0x102ced, _0x51ccbe, _0x961ed5], m2Prime: [_0x51ccbe] }
 );
 },
 },
 Kr = {
 m1: o.InsertColMutation["id"],
 m2: f.SetSheetsFilterRangeMutation["id"],
 handler(_0x4f5fdf, _0x2133c3) {
 let _0x34b7bd = { m1Prime: _0x4f5fdf, m2Prime: _0x2133c3 };
 if (
 _0x4f5fdf.params["unitId"] !== _0x2133c3.params["unitId"] ||
 _0x4f5fdf.params["subUnitId"] !== _0x2133c3.params["subUnitId"]
 )
 return _0x34b7bd;
 let _0xaf2165 = e.Tools["deepClone"](_0x4f5fdf),
 _0x29c19d = e.Tools["deepClone"](_0x2133c3),
 _0x5b631d = Dr(
 {
 start: _0x4f5fdf.params["range"].startColumn,
 end: _0x4f5fdf.params["range"].endColumn,
 },
 {
 start: _0x2133c3.params["range"].startColumn,
 end: _0x2133c3.params["range"].endColumn,
 },
 );
 return _0x29c19d.params["range"].startColumn === _0x5b631d.start &&
 _0x29c19d.params["range"].endColumn === _0x5b631d.end
 ? _0x34b7bd
 : ((_0x29c19d.params["range"].startColumn = _0x5b631d.start),
 (_0x29c19d.params["range"].endColumn = _0x5b631d.end),
 { m1Prime: [_0x29c19d, _0xaf2165], m2Prime: [_0x29c19d] });
 },
 },
 qr = {
 m1: o.InsertColMutation["id"],
 m2: o.SetWorksheetColWidthMutation["id"],
 handler(_0x3ab6c5, _0xedab5e) {
 let _0x4caa6c = { m1Prime: _0x3ab6c5, m2Prime: _0xedab5e };
 if (
 _0x3ab6c5.params["unitId"] !== _0xedab5e.params["unitId"] ||
 _0x3ab6c5.params["subUnitId"] !== _0xedab5e.params["subUnitId"]
 )
 return _0x4caa6c;
 let _0x1390df = e.Tools["deepClone"](_0x3ab6c5),
 _0x539c01 = e.Tools["deepClone"](_0xedab5e),
 { ranges: _0x283dfb, colWidth: _0x6ffea8 } = _0x539c01.params;
 if (
 _0x283dfb.some((_0xbe5310) => {
 let _0x2c6d07 = (0, o.handleBaseInsertRange)(
 F(_0x3ab6c5.params["range"]),
 _0xbe5310,
 );
 return _0x2c6d07.length === 0
 ? ((_0xbe5310.startColumn += _0x2c6d07.step),
 (_0xbe5310.endColumn += _0x2c6d07.step),
 false)
 : true;
 })
 )
 return {
 error: Error("insert col is conflict with set worksheet col width"),
 };
 if (typeof _0x6ffea8 != "number") {
 for (
 let _0xfb2149 = _0x3ab6c5.params["range"].startColumn;
 _0xfb2149 <= _0x3ab6c5.params["range"].endColumn;
 _0xfb2149++
 )
 (0, e.insertMatrixArray)(_0xfb2149, undefined, _0x6ffea8);
 }
 return { m1Prime: _0x1390df, m2Prime: _0x539c01 };
 },
 },
 V = (_0x549585, _0x10bf0c) => {
 let _0x5e7773 = (0, m.singleReferenceToGrid)(
 _0x549585.params["payload"].ref,
 ),
 _0xf18801 = (0, o.handleDefaultRangeChangeWithEffectRefCommands)(
 {
 startColumn: _0x5e7773.column,
 endColumn: _0x5e7773.column,
 startRow: _0x5e7773.row,
 endRow: _0x5e7773.row,
 },
 _0x10bf0c,
 );
 if (!_0xf18801)
 return [
 {
 id: c.DeleteCommentMutation["id"],
 params: {
 ..._0x549585.params,
 comment: undefined,
 commentId: _0x549585.params["payload"].commentId,
 },
 },
 ];
 let _0x1fc012 = (0, m.serializeRange)(_0xf18801);
 return _0x1fc012 === _0x549585.params["payload"].ref
 ? []
 : [
 {
 id: c.UpdateCommentRefMutation["id"],
 params: {
 ..._0x549585.params,
 comment: undefined,
 payload: {
 ref: _0x1fc012,
 commentId: _0x549585.params["payload"].commentId,
 },
 },
 },
 ];
 },
 Jr = {
 m1: o.InsertColMutation["id"],
 m2: c.UpdateCommentRefMutation["id"],
 handler: (_0x40236a, _0x1f4e85) => {
 let _0x39eb15 = { m1Prime: _0x40236a, m2Prime: _0x1f4e85 };
 if (
 _0x40236a.params["unitId"] !== _0x1f4e85.params["unitId"] ||
 _0x40236a.params["subUnitId"] !== _0x1f4e85.params["subUnitId"]
 )
 return _0x39eb15;
 let _0x284153 = {
 id: o.InsertColCommand["id"],
 params: {
 unitId: _0x40236a.params["unitId"],
 subUnitId: _0x40236a.params["subUnitId"],
 range: _0x40236a.params["range"],
 },
 },
 _0x5d4517 = V(_0x1f4e85, _0x284153);
 return {
 m1Prime: [_0x40236a, ..._0x5d4517],
 m2Prime: [_0x1f4e85, ..._0x5d4517],
 };
 },
 };
function H(_0x4ae912, _0x3a3fc6) {
 let {
 payload: _0x520323,
 unitId: _0xba1f14,
 subUnitId: _0x3a1ea5,
 ruleId: _0x143ddb,
 } = _0x4ae912.params;
 switch (_0x520323.type) {
 case u.UpdateRuleType["RANGE"]: {
 let _0x19193f = _0x520323.payload["map"]((_0xd855f5) =>
 (0, o.handleCommonDefaultRangeChangeWithEffectRefCommands)(
 _0xd855f5,
 _0x3a3fc6,
 ),
 )
 .filter(Boolean)
 .flat();
 if (!(0, e.isRangesEqual)(_0x19193f, _0x520323.payload))
 return [
 {
 id: u.UpdateDataValidationMutation["id"],
 params: {
 unitId: _0xba1f14,
 subUnitId: _0x3a1ea5,
 ruleId: _0x143ddb,
 payload: { type: u.UpdateRuleType["RANGE"], payload: _0x19193f },
 },
 },
 ];
 break;
 }
 case u.UpdateRuleType["SETTING"]: {
 let _0x46e91f = (_0x3d09c9) =>
 R(_0xba1f14, _0x3a1ea5, _0x3d09c9, (_0x3128eb) =>
 (0, o.handleDefaultRangeChangeWithEffectRefCommands)(
 _0x3128eb,
 _0x3a3fc6,
 ),
 ),
 _0x3f8d7c = _0x520323.payload["formula1"] ?? "",
 _0x655f0a = _0x520323.payload["formula2"] ?? "",
 _0x4bc69d = _0x3f8d7c,
 _0x3e151b = _0x655f0a;
 if (
 ((0, e.isFormulaString)(_0x3f8d7c) &&
 (_0x4bc69d = _0x46e91f(_0x3f8d7c)),
 (0, e.isFormulaString)(_0x655f0a) && (_0x3e151b = _0x46e91f(_0x655f0a)),
 _0x4bc69d !== _0x3f8d7c || _0x3e151b !== _0x655f0a)
 )
 return [
 {
 id: u.UpdateDataValidationMutation["id"],
 params: {
 unitId: _0xba1f14,
 subUnitId: _0x3a1ea5,
 ruleId: _0x143ddb,
 payload: {
 type: u.UpdateRuleType["SETTING"],
 payload: {
 type: _0x520323.payload["type"],
 formula1: _0x4bc69d,
 formula2: _0x3e151b,
 },
 },
 },
 },
 ];
 break;
 }
 default:
 break;
 }
 return [];
}
const Yr = {
 m1: o.MoveColsMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x3e90d2, _0x3f5d03) => {
 let _0x42d8a3 = { m1Prime: _0x3e90d2, m2Prime: _0x3f5d03 };
 if (
 _0x3e90d2.params["unitId"] !== _0x3f5d03.params["unitId"] ||
 _0x3f5d03.params["subUnitId"] !== _0x3e90d2.params["subUnitId"]
 )
 return _0x42d8a3;
 let _0x502bf4 = H(_0x3f5d03, {
 id: o.MoveColsCommand["id"],
 params: {
 fromRange: _0x3e90d2.params["sourceRange"],
 toRange: _0x3e90d2.params["targetRange"],
 },
 });
 return {
 m1Prime: [_0x3e90d2, ..._0x502bf4],
 m2Prime: [_0x3f5d03, ..._0x502bf4],
 };
 },
 },
 Xr = {
 m1: o.InsertColMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x53cfc5, _0x968edc) => {
 let _0x29f001 = { m1Prime: _0x53cfc5, m2Prime: _0x968edc };
 if (
 _0x53cfc5.params["unitId"] !== _0x968edc.params["unitId"] ||
 _0x968edc.params["subUnitId"] !== _0x53cfc5.params["subUnitId"]
 )
 return _0x29f001;
 let _0x12b463 = H(_0x968edc, {
 id: o.InsertColCommand["id"],
 params: {
 unitId: _0x53cfc5.params["unitId"],
 subUnitId: _0x53cfc5.params["subUnitId"],
 range: _0x53cfc5.params["range"],
 },
 });
 return {
 m1Prime: [_0x53cfc5, ..._0x12b463],
 m2Prime: [_0x968edc, ..._0x12b463],
 };
 },
 },
 Zr = {
 m1: o.InsertRowMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x842cda, _0x4a14b2) => {
 let _0x422a8f = { m1Prime: _0x842cda, m2Prime: _0x4a14b2 };
 if (
 _0x842cda.params["unitId"] !== _0x4a14b2.params["unitId"] ||
 _0x842cda.params["subUnitId"] !== _0x4a14b2.params["subUnitId"]
 )
 return _0x422a8f;
 let _0x47ee9c = P(_0x4a14b2, {
 id: o.InsertRowCommand["id"],
 params: {
 unitId: _0x842cda.params["unitId"],
 subUnitId: _0x842cda.params["subUnitId"],
 range: _0x842cda.params["range"],
 },
 });
 return {
 m1Prime: [_0x842cda, ..._0x47ee9c],
 m2Prime: [_0x4a14b2, ..._0x47ee9c],
 };
 },
 },
 Qr = {
 m1: o.InsertRowMutation["id"],
 m2: u.AddDataValidationMutation["id"],
 handler(_0x11773e, _0x48843f) {
 let _0x49522f = { m1Prime: _0x11773e, m2Prime: _0x48843f };
 if (
 _0x11773e.params["unitId"] !== _0x48843f.params["unitId"] ||
 _0x11773e.params["subUnitId"] !== _0x48843f.params["subUnitId"]
 )
 return _0x49522f;
 let _0xc7b643 = B(_0x48843f, {
 id: o.InsertRowCommand["id"],
 params: {
 unitId: _0x11773e.params["unitId"],
 subUnitId: _0x11773e.params["subUnitId"],
 range: _0x11773e.params["range"],
 },
 });
 return {
 m1Prime: [_0x11773e, ..._0xc7b643],
 m2Prime: [_0x48843f, ..._0xc7b643],
 };
 },
 },
 $r = {
 m1: o.InsertRowMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x2cd6c5, _0x78f70b) {
 let _0x852e4e = on.handler(_0x78f70b, _0x2cd6c5);
 return S(_0x852e4e)
 ? { m1Prime: _0x852e4e.m2Prime, m2Prime: _0x852e4e.m1Prime }
 : _0x852e4e;
 },
 },
 ei = {
 m1: o.InsertRowMutation["id"],
 m2: o.InsertRowMutation["id"],
 handler(_0x5ee2be, _0x1dbc37) {
 let _0x16d901 = { m1Prime: _0x5ee2be, m2Prime: _0x1dbc37 };
 if (
 _0x5ee2be.params["unitId"] !== _0x1dbc37.params["unitId"] ||
 _0x5ee2be.params["subUnitId"] !== _0x1dbc37.params["subUnitId"]
 )
 return _0x16d901;
 let _0x42d485 = e.Tools["deepClone"](_0x5ee2be),
 _0x4695a3 = e.Tools["deepClone"](_0x1dbc37),
 _0x40bb42 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x5ee2be.params["range"])),
 F((0, o.rotateRange)(_0x1dbc37.params["range"])),
 );
 if (
 (_0x40bb42
 ? ((_0x4695a3.params["range"].startRow += _0x40bb42.step),
 (_0x4695a3.params["range"].endRow +=
 _0x40bb42.step + (_0x40bb42.length || 0)))
 : (_0x4695a3.id = o.EmptyMutation["id"]),
 _0x5ee2be.params["range"].startRow !==
 _0x1dbc37.params["range"].startRow)
 ) {
 let _0x504430 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x1dbc37.params["range"])),
 F((0, o.rotateRange)(_0x5ee2be.params["range"])),
 );
 _0x504430
 ? ((_0x42d485.params["range"].startRow += _0x504430.step),
 (_0x42d485.params["range"].endRow +=
 _0x504430.step + (_0x504430.length || 0)))
 : (_0x42d485.id = o.EmptyMutation["id"]);
 }
 return { m1Prime: _0x42d485, m2Prime: _0x4695a3 };
 },
 },
 ti = {
 m1: o.InsertRowMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x5ddb7b, _0x193fb6) {
 let _0x2a3fa0 = { m1Prime: _0x5ddb7b, m2Prime: _0x193fb6 };
 if (
 _0x5ddb7b.params["unitId"] !== _0x193fb6.params["unitId"] ||
 (_0x5ddb7b.params["subUnitId"] !== _0x193fb6.params["from"].subUnitId &&
 _0x5ddb7b.params["subUnitId"] !== _0x193fb6.params["to"].subUnitId)
 )
 return _0x2a3fa0;
 let _0x1de5ac = e.Tools["deepClone"](_0x5ddb7b),
 _0x4856b1 = e.Tools["deepClone"](_0x193fb6);
 if (
 _0x5ddb7b.params["subUnitId"] === _0x193fb6.params["from"].subUnitId
 ) {
 let _0xa15b0b = new e["ObjectMatrix"](
 _0x4856b1.params["from"].value,
 ).getDataRange(),
 { startRow: _0x403405, endRow: _0x1d6cc3 } = _0xa15b0b,
 { startRow: _0x170976, endRow: _0xb918ef } =
 _0x5ddb7b.params["range"],
 { step: _0x1f025c, length: _0x2770d8 } = (0, o.handleBaseInsertRange)(
 (0, o.rotateRange)(_0x5ddb7b.params["range"]),
 (0, o.rotateRange)(_0xa15b0b),
 );
 (_0x1f025c > 0 &&
 _0x2770d8 === 0 &&
 I(
 _0x4856b1.params["from"].value,
 _0x403405,
 _0x1d6cc3 - _0x403405 + 1,
 _0x1f025c,
 ),
 _0x1f025c === 0 &&
 _0x2770d8 > 0 &&
 I(
 _0x4856b1.params["from"].value,
 _0x170976,
 _0x1d6cc3 - _0x170976 + 1,
 _0xb918ef - _0x170976 + 1,
 ));
 }
 if (_0x5ddb7b.params["subUnitId"] === _0x193fb6.params["to"].subUnitId) {
 let _0x4609b5 = new e["ObjectMatrix"](
 _0x193fb6.params["to"].value,
 ).getDataRange(),
 { startRow: _0x23ab7b, endRow: _0x51cb48 } = _0x4609b5,
 { startRow: _0x4b85ec, endRow: _0x3138d2 } =
 _0x5ddb7b.params["range"],
 { step: _0x32e0d2, length: _0x2bfc95 } = (0, o.handleBaseInsertRange)(
 (0, o.rotateRange)(_0x5ddb7b.params["range"]),
 (0, o.rotateRange)(_0x4609b5),
 );
 (_0x32e0d2 > 0 &&
 _0x2bfc95 === 0 &&
 I(
 _0x4856b1.params["to"].value,
 _0x23ab7b,
 _0x51cb48 - _0x23ab7b + 1,
 _0x32e0d2,
 ),
 _0x32e0d2 === 0 &&
 _0x2bfc95 > 0 &&
 I(
 _0x4856b1.params["to"].value,
 _0x4b85ec,
 _0x51cb48 - _0x4b85ec + 1,
 _0x3138d2 - _0x4b85ec + 1,
 ));
 }
 return { m1Prime: _0x1de5ac, m2Prime: _0x4856b1 };
 },
 },
 ni = {
 m1: o.InsertRowMutation["id"],
 m2: o.MoveRowsMutation["id"],
 handler(_0x219ab1, _0x1bdfcc) {
 let _0x33758a = { m1Prime: _0x219ab1, m2Prime: _0x1bdfcc };
 if (
 _0x219ab1.params["unitId"] !== _0x1bdfcc.params["unitId"] ||
 _0x219ab1.params["subUnitId"] !== _0x1bdfcc.params["subUnitId"]
 )
 return _0x33758a;
 let _0x174e81 = e.Tools["deepClone"](_0x219ab1),
 _0x3555e0 = e.Tools["deepClone"](_0x1bdfcc),
 _0x31026a = _0x1bdfcc.params["sourceRange"],
 _0x41bfd3 = _0x1bdfcc.params["targetRange"];
 if (
 (_0x219ab1.params["range"].startRow > _0x31026a.startRow &&
 _0x219ab1.params["range"].startRow <= _0x31026a.endRow) ||
 (_0x219ab1.params["range"].startRow > _0x41bfd3.startRow &&
 _0x219ab1.params["range"].startRow <= _0x41bfd3.endRow)
 )
 return { error: Error("insert col is conflict with move col") };
 let _0x49d457 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x219ab1.params["range"])),
 F((0, o.rotateRange)(_0x31026a)),
 ),
 _0x516573 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x219ab1.params["range"])),
 F((0, o.rotateRange)(_0x41bfd3)),
 );
 if (
 ((_0x3555e0.params["sourceRange"].startRow += _0x49d457.step),
 (_0x3555e0.params["sourceRange"].endRow +=
 _0x49d457.step + (_0x49d457.length || 0)),
 (_0x3555e0.params["targetRange"].startRow += _0x516573.step),
 (_0x3555e0.params["targetRange"].endRow +=
 _0x516573.step + (_0x516573.length || 0)),
 _0x31026a.startRow >= _0x219ab1.params["range"].startRow &&
 _0x41bfd3.startRow < _0x219ab1.params["range"].startRow)
 ) {
 let _0x55ff04 = _0x41bfd3.endRow - _0x41bfd3.startRow + 1;
 ((_0x174e81.params["range"].startRow += _0x55ff04),
 (_0x174e81.params["range"].endRow += _0x55ff04));
 } else {
 if (
 _0x31026a.endRow < _0x219ab1.params["range"].startRow &&
 _0x41bfd3.startRow >= _0x219ab1.params["range"].startRow
 ) {
 let _0xda1277 = _0x31026a.endRow - _0x31026a.startRow + 1;
 ((_0x174e81.params["range"].startRow -= _0xda1277),
 (_0x174e81.params["range"].endRow -= _0xda1277));
 }
 }
 return { m1Prime: _0x174e81, m2Prime: _0x3555e0 };
 },
 },
 ri = {
 m1: o.InsertRowMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler(_0x5d3425, _0x164bdf) {
 let _0x4ac3af = { m1Prime: _0x5d3425, m2Prime: _0x164bdf };
 if (
 _0x5d3425.params["unitId"] !== _0x164bdf.params["unitId"] ||
 _0x5d3425.params["subUnitId"] !== _0x164bdf.params["subUnitId"]
 )
 return _0x4ac3af;
 let _0xcf1c4d = e.Tools["deepClone"](_0x5d3425),
 _0x66a3d6 = e.Tools["deepClone"](_0x164bdf),
 { ranges: _0x23afe6 } = _0x66a3d6.params;
 return _0x23afe6.some((_0x337aff) => {
 let _0x5afdd3 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x5d3425.params["range"])),
 F((0, o.rotateRange)(_0x337aff)),
 );
 return _0x5afdd3.length === 0
 ? ((_0x337aff.startRow += _0x5afdd3.step),
 (_0x337aff.endRow += _0x5afdd3.step),
 false)
 : true;
 })
 ? { error: Error("insert row is conflict with remove numfmt") }
 : { m1Prime: _0xcf1c4d, m2Prime: _0x66a3d6 };
 },
 },
 ii = {
 m1: o.InsertRowMutation["id"],
 m2: o.RemoveRowMutation["id"],
 handler(_0x1f36ba, _0x7a03df) {
 let _0x2c1b6b = { m1Prime: _0x1f36ba, m2Prime: _0x7a03df };
 if (
 _0x1f36ba.params["unitId"] !== _0x7a03df.params["unitId"] ||
 _0x1f36ba.params["subUnitId"] !== _0x7a03df.params["subUnitId"]
 )
 return _0x2c1b6b;
 let _0x37dfce = e.Tools["deepClone"](_0x1f36ba),
 _0x1918eb = e.Tools["deepClone"](_0x7a03df);
 if (
 _0x1f36ba.params["range"].startRow <=
 _0x7a03df.params["range"].endRow &&
 _0x1f36ba.params["range"].startRow > _0x7a03df.params["range"].startRow
 )
 return {
 error: Error(
 "insert\x20row\x20is\x20conflict\x20with\x20remove\x20row",
 ),
 };
 let _0x526a46 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x1f36ba.params["range"])),
 F((0, o.rotateRange)(_0x7a03df.params["range"])),
 );
 _0x526a46
 ? ((_0x1918eb.params["range"].startRow += _0x526a46.step),
 (_0x1918eb.params["range"].endRow +=
 _0x526a46.step + (_0x526a46.length || 0)))
 : (_0x1918eb.id = o.EmptyMutation["id"]);
 let _0x51ceb6 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x7a03df.params["range"])),
 F((0, o.rotateRange)(_0x1f36ba.params["range"])),
 );
 return (
 _0x51ceb6 &&
 ((_0x37dfce.params["range"].startRow += _0x51ceb6.step),
 (_0x37dfce.params["range"].endRow +=
 _0x51ceb6.step + (_0x51ceb6.length || 0))),
 { m1Prime: _0x37dfce, m2Prime: _0x1918eb }
 );
 },
 },
 ai = {
 m1: o.InsertRowMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler(_0x1ed24d, _0x3a120c) {
 let _0x512044 = e.Tools["deepClone"](_0x1ed24d),
 _0x37a0d3 = e.Tools["deepClone"](_0x3a120c);
 if (
 _0x1ed24d.params["unitId"] !== _0x3a120c.params["unitId"] ||
 _0x1ed24d.params["subUnitId"] !== _0x3a120c.params["subUnitId"]
 )
 return { m1Prime: _0x512044, m2Prime: _0x37a0d3 };
 let _0x264bb4 = _0x37a0d3.params["ranges"].map((_0x3cb897) => {
 let _0x3c6c85 = _0x512044.params["range"],
 _0x504fb5 = _0x3c6c85.endRow - _0x3c6c85.startRow + 1;
 return _0x3c6c85.startRow <= _0x3cb897.startRow
 ? {
 ..._0x3cb897,
 startRow: _0x3cb897.startRow + _0x504fb5,
 endRow: _0x3cb897.endRow + _0x504fb5,
 }
 : _0x3c6c85.startRow > _0x3cb897.startRow &&
 _0x3c6c85.startRow <= _0x3cb897.endRow
 ? { ..._0x3cb897, endRow: _0x3cb897.endRow + _0x504fb5 }
 : { ..._0x3cb897 };
 });
 return (
 (_0x37a0d3.params["ranges"] = _0x264bb4),
 { m1Prime: _0x512044, m2Prime: _0x37a0d3 }
 );
 },
 },
 oi = {
 m1: o.InsertRowMutation["id"],
 m2: o.ReorderRangeMutation["id"],
 handler(_0x394540, _0x5268ca) {
 let _0x1e769c = { m1Prime: _0x394540, m2Prime: _0x5268ca };
 if (
 _0x394540.params["unitId"] !== _0x5268ca.params["unitId"] ||
 _0x394540.params["subUnitId"] !== _0x5268ca.params["subUnitId"]
 )
 return _0x1e769c;
 let _0x3c1695 = e.Tools["deepClone"](_0x5268ca),
 _0x2d3647 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x394540.params["range"])),
 F((0, o.rotateRange)(_0x5268ca.params["range"])),
 );
 ((_0x3c1695.params["range"].startRow += _0x2d3647.step),
 (_0x3c1695.params["range"].endRow +=
 _0x2d3647.step + (_0x2d3647.length || 0)));
 let _0x4a06c7 = _0x394540.params["range"].startRow,
 _0x544609 =
 _0x394540.params["range"].endRow -
 _0x394540.params["range"].startRow +
 1,
 _0x372bd8 = {};
 for (let _0x252823 in _0x5268ca.params["order"]) {
 let _0x59ac5c = Number(_0x252823),
 _0x5c068c = _0x5268ca.params["order"][_0x252823];
 ((_0x59ac5c = si(_0x4a06c7, _0x544609, _0x59ac5c)),
 (_0x5c068c = si(_0x4a06c7, _0x544609, _0x5c068c)),
 (_0x372bd8[_0x59ac5c] = _0x5c068c));
 }
 return (
 (_0x3c1695.params["order"] = _0x372bd8),
 { m1Prime: _0x394540, m2Prime: _0x3c1695 }
 );
 },
 },
 si = (_0x4ff89b, _0x28b01c, _0x21b135) =>
 _0x21b135 >= _0x4ff89b ? _0x21b135 + _0x28b01c : _0x21b135,
 ci = {
 m1: o.InsertRowMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler(_0x5327f6, _0x7a11ce) {
 let _0x2d0417 = { m1Prime: _0x5327f6, m2Prime: _0x7a11ce };
 if (
 _0x5327f6.params["unitId"] !== _0x7a11ce.params["unitId"] ||
 _0x5327f6.params["subUnitId"] !== _0x7a11ce.params["subUnitId"]
 )
 return _0x2d0417;
 let _0x4cbea8 = [e.Tools["deepClone"](_0x5327f6)],
 _0x27780b = e.Tools["deepClone"](_0x7a11ce),
 { values: _0x47939b } = _0x27780b.params,
 _0x3936a9 = [],
 _0x294791 = false;
 for (let _0x240a58 in _0x47939b) {
 let _0x573d0a = _0x47939b[_0x240a58];
 if (
 (_0x3936a9.push(..._0x573d0a.ranges),
 _0x573d0a.ranges["some"]((_0x4dccd8) => {
 let _0xa84ff1 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x5327f6.params["range"])),
 (0, o.rotateRange)(F(_0x4dccd8)),
 );
 return _0xa84ff1.length === 0
 ? (_0xa84ff1.step !== 0 && (_0x294791 = true),
 (_0x4dccd8.startRow += _0xa84ff1.step),
 (_0x4dccd8.endRow += _0xa84ff1.step),
 false)
 : true;
 }))
 )
 return { error: Error("insert row is conflict with set numfmt") };
 }
 if (_0x294791) {
 let _0x4b405e = {
 id: o.RemoveNumfmtMutation["id"],
 params: {
 unitId: _0x7a11ce.params["unitId"],
 subUnitId: _0x7a11ce.params["subUnitId"],
 ranges: _0x3936a9,
 },
 };
 _0x4cbea8.push(_0x4b405e, _0x27780b);
 }
 return { m1Prime: _0x4cbea8, m2Prime: _0x27780b };
 },
 },
 li = {
 m1: o.InsertRowMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler(_0x20a0fe, _0x22714d) {
 let _0x51083c = { m1Prime: _0x20a0fe, m2Prime: _0x22714d };
 if (
 _0x20a0fe.params["unitId"] !== _0x22714d.params["unitId"] ||
 _0x20a0fe.params["subUnitId"] !== _0x22714d.params["subUnitId"]
 )
 return _0x51083c;
 let _0x366d12 = [e.Tools["deepClone"](_0x20a0fe)],
 _0x1382e0 = e.Tools["deepClone"](_0x22714d),
 _0x1417ca = new e["ObjectMatrix"](_0x1382e0.params["cellValue"]),
 _0x1eac5c = _0x1417ca.getDataRange(),
 _0x3485d9 = _0x20a0fe.params["range"],
 _0x3e7c56 = _0x3485d9.endRow - _0x3485d9.startRow + 1;
 if (
 _0x1382e0.params["cellValue"] &&
 _0x3485d9.startRow <= _0x1eac5c.endRow
 ) {
 let _0x438c1c = Math.max(_0x1eac5c.startRow, _0x3485d9.startRow);
 I(
 _0x1382e0.params["cellValue"],
 _0x438c1c,
 _0x1eac5c.endRow - _0x438c1c + 1,
 _0x3e7c56,
 );
 }
 let _0x3d98d4 = new e["ObjectMatrix"](),
 _0x348f73 = false;
 if (
 (_0x1417ca.forValue((_0x25e9a3, _0xf36fca, _0x160897) => {
 if (_0x160897 && _0x160897.f) {
 let _0x2fbf4d = _0x160897.f,
 _0x2ba3b8 = false,
 _0x1c80aa = R(
 _0x20a0fe.params["unitId"],
 _0x20a0fe.params["subUnitId"],
 _0x2fbf4d,
 (_0x124847) => {
 let _0x431d5d = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x20a0fe.params["range"])),
 F((0, o.rotateRange)(_0x124847)),
 );
 return (
 (_0x431d5d.step !== 0 || _0x431d5d.length !== 0) &&
 ((_0x2ba3b8 = true),
 (_0x124847.startRow += _0x431d5d.step),
 (_0x124847.endRow += _0x431d5d.step + _0x431d5d.length)),
 _0x124847
 );
 },
 );
 _0x2ba3b8 &&
 ((_0x348f73 = true),
 (_0x160897.f = _0x1c80aa),
 _0x3d98d4.setValue(_0x25e9a3, _0xf36fca, { ..._0x160897 }));
 }
 }),
 _0x348f73)
 ) {
 let _0x337b6a = {
 id: o.SetRangeValuesMutation["id"],
 params: {
 unitId: _0x22714d.params["unitId"],
 subUnitId: _0x22714d.params["subUnitId"],
 cellValue: _0x3d98d4.getMatrix(),
 },
 };
 _0x366d12.push(_0x337b6a);
 }
 return { m1Prime: _0x366d12, m2Prime: _0x1382e0 };
 },
 },
 ui = {
 m1: o.InsertRowMutation["id"],
 m2: o.SetRowDataMutation["id"],
 handler(_0x5701e5, _0x37acc8) {
 let _0x2cc508 = { m1Prime: _0x5701e5, m2Prime: _0x37acc8 };
 if (
 _0x5701e5.params["unitId"] !== _0x37acc8.params["unitId"] ||
 _0x5701e5.params["subUnitId"] !== _0x37acc8.params["subUnitId"]
 )
 return _0x2cc508;
 let _0x48ffff = e.Tools["deepClone"](_0x5701e5),
 _0x50e626 = e.Tools["deepClone"](_0x37acc8),
 { rowData: _0x5d6ef8 } = _0x50e626.params;
 for (
 let _0x4cdd2c = _0x5701e5.params["range"].startRow;
 _0x4cdd2c <= _0x5701e5.params["range"].endRow;
 _0x4cdd2c++
 )
 (0, e.insertMatrixArray)(_0x4cdd2c, undefined, _0x5d6ef8);
 return { m1Prime: _0x48ffff, m2Prime: _0x50e626 };
 },
 },
 di = {
 m1: o.InsertRowMutation["id"],
 m2: o.SetRowHiddenMutation["id"],
 handler(_0x5b2a76, _0x4e56a5) {
 let _0x3d50b0 = { m1Prime: _0x5b2a76, m2Prime: _0x4e56a5 };
 if (
 _0x5b2a76.params["unitId"] !== _0x4e56a5.params["unitId"] ||
 _0x5b2a76.params["subUnitId"] !== _0x4e56a5.params["subUnitId"]
 )
 return _0x3d50b0;
 let _0x4c3b29 = e.Tools["deepClone"](_0x5b2a76),
 _0x49236e = e.Tools["deepClone"](_0x4e56a5),
 { ranges: _0x164233 } = _0x49236e.params;
 return _0x164233.some((_0x1151c9) => {
 let _0x8b3477 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x5b2a76.params["range"])),
 F((0, o.rotateRange)(_0x1151c9)),
 );
 return _0x8b3477.length === 0
 ? ((_0x1151c9.startRow += _0x8b3477.step),
 (_0x1151c9.endRow += _0x8b3477.step),
 false)
 : true;
 })
 ? { error: Error("insert row is conflict with set row hidden") }
 : { m1Prime: _0x4c3b29, m2Prime: _0x49236e };
 },
 },
 fi = {
 m1: o.InsertRowMutation["id"],
 m2: o.SetRowVisibleMutation["id"],
 handler(_0x327ee6, _0x431d11) {
 let _0x2c9540 = { m1Prime: _0x327ee6, m2Prime: _0x431d11 };
 if (
 _0x327ee6.params["unitId"] !== _0x431d11.params["unitId"] ||
 _0x327ee6.params["subUnitId"] !== _0x431d11.params["subUnitId"]
 )
 return _0x2c9540;
 let _0x277de2 = e.Tools["deepClone"](_0x327ee6),
 _0x151970 = e.Tools["deepClone"](_0x431d11),
 { ranges: _0x267e9f } = _0x151970.params;
 return _0x267e9f.some((_0x1bf871) => {
 let _0x3ec53d = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x327ee6.params["range"])),
 F((0, o.rotateRange)(_0x1bf871)),
 );
 return _0x3ec53d.length === 0
 ? ((_0x1bf871.startRow += _0x3ec53d.step),
 (_0x1bf871.endRow += _0x3ec53d.step),
 false)
 : true;
 })
 ? { error: Error("insert row is conflict with set row visible") }
 : { m1Prime: _0x277de2, m2Prime: _0x151970 };
 },
 },
 pi = {
 m1: o.InsertRowMutation["id"],
 m2: o.SetSelectionsOperation["id"],
 handler(_0x5b8880, _0x4a0e8f) {
 let _0xd80ff7 = { m1Prime: [], m2Prime: [] };
 if (
 _0x5b8880.params["unitId"] !== _0x4a0e8f.params["unitId"] ||
 _0x5b8880.params["subUnitId"] !== _0x4a0e8f.params["subUnitId"]
 )
 return _0xd80ff7;
 let _0x581641 = e.Tools["deepClone"](_0x4a0e8f),
 _0x504525 = false;
 return (
 _0x581641.params["selections"].forEach((_0x102cdf) => {
 let { range: _0x302e1c, primary: _0x5ef12c } = _0x102cdf,
 _0x1ef4df = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x5b8880.params["range"])),
 F((0, o.rotateRange)(_0x302e1c)),
 );
 if (_0x1ef4df.length || _0x1ef4df.step) {
 if (
 ((_0x302e1c.startRow += _0x1ef4df.step),
 (_0x302e1c.endRow += _0x1ef4df.step + (_0x1ef4df.length || 0)),
 _0x5ef12c)
 ) {
 let _0x14e523 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x5b8880.params["range"])),
 F((0, o.rotateRange)(_0x5ef12c)),
 );
 (_0x14e523.length || _0x14e523.step) &&
 ((_0x5ef12c.startRow += _0x14e523.step),
 (_0x5ef12c.endRow += _0x14e523.step),
 (_0x5ef12c.actualRow += _0x14e523.step));
 }
 _0x504525 = true;
 }
 }),
 _0x504525 && _0xd80ff7.m2Prime["push"](_0x581641),
 _0xd80ff7
 );
 },
 },
 mi = {
 m1: o.InsertRowMutation["id"],
 m2: f.SetSheetsFilterRangeMutation["id"],
 handler(_0x2f4d15, _0x5b8ede) {
 let _0x27d30a = { m1Prime: [_0x2f4d15], m2Prime: [_0x5b8ede] };
 if (
 _0x2f4d15.params["unitId"] !== _0x5b8ede.params["unitId"] ||
 _0x2f4d15.params["subUnitId"] !== _0x5b8ede.params["subUnitId"]
 )
 return _0x27d30a;
 let _0x2673bb = e.Tools["deepClone"](_0x2f4d15),
 _0x1fb3e9 = e.Tools["deepClone"](_0x5b8ede),
 _0x3a64fc = Dr(
 {
 start: _0x2f4d15.params["range"].startRow,
 end: _0x2f4d15.params["range"].endRow,
 },
 {
 start: _0x5b8ede.params["range"].startRow,
 end: _0x5b8ede.params["range"].endRow,
 },
 );
 return _0x1fb3e9.params["range"].startRow === _0x3a64fc.start &&
 _0x1fb3e9.params["range"].endRow === _0x3a64fc.end
 ? _0x27d30a
 : ((_0x1fb3e9.params["range"].startRow = _0x3a64fc.start),
 (_0x1fb3e9.params["range"].endRow = _0x3a64fc.end),
 { m1Prime: [_0x1fb3e9, _0x2673bb], m2Prime: [_0x1fb3e9] });
 },
 },
 hi = {
 m1: o.InsertRowMutation["id"],
 m2: o.SetWorksheetRowAutoHeightMutation["id"],
 handler(_0x1220b0, _0x4b9e37) {
 let _0x39d333 = { m1Prime: _0x1220b0, m2Prime: _0x4b9e37 };
 if (
 _0x1220b0.params["unitId"] !== _0x4b9e37.params["unitId"] ||
 _0x1220b0.params["subUnitId"] !== _0x4b9e37.params["subUnitId"]
 )
 return _0x39d333;
 let _0x576314 = e.Tools["deepClone"](_0x1220b0),
 _0x596bb2 = e.Tools["deepClone"](_0x4b9e37),
 { rowsAutoHeightInfo: _0x5be79a } = _0x596bb2.params;
 return _0x5be79a.some((_0x1a0700) => {
 let _0x2eba62 = {
 startRow: _0x1a0700.row,
 endRow: _0x1a0700.row,
 startColumn: 0,
 endColumn: 0,
 },
 _0x457913 = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x1220b0.params["range"])),
 (0, o.rotateRange)(_0x2eba62),
 );
 return _0x457913.length === 0
 ? ((_0x1a0700.row += _0x457913.step), false)
 : true;
 })
 ? {
 error: Error(
 "insert row is conflict with set worksheet row auto height",
 ),
 }
 : { m1Prime: _0x576314, m2Prime: _0x596bb2 };
 },
 },
 gi = {
 m1: o.InsertRowMutation["id"],
 m2: o.SetWorksheetRowHeightMutation["id"],
 handler(_0x26e45d, _0x590b4f) {
 let _0x14ad06 = { m1Prime: _0x26e45d, m2Prime: _0x590b4f };
 if (
 _0x26e45d.params["unitId"] !== _0x590b4f.params["unitId"] ||
 _0x26e45d.params["subUnitId"] !== _0x590b4f.params["subUnitId"]
 )
 return _0x14ad06;
 let _0x2c97ed = e.Tools["deepClone"](_0x26e45d),
 _0x2bb638 = e.Tools["deepClone"](_0x590b4f),
 { ranges: _0x2e6759, rowHeight: _0x51ff1c } = _0x2bb638.params;
 if (
 _0x2e6759.some((_0x50c1cb) => {
 let _0x50434d = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x26e45d.params["range"])),
 (0, o.rotateRange)(_0x50c1cb),
 );
 return _0x50434d.length === 0
 ? ((_0x50c1cb.startRow += _0x50434d.step),
 (_0x50c1cb.endRow += _0x50434d.step),
 false)
 : true;
 })
 )
 return {
 error: Error("insert row is conflict with set worksheet row height"),
 };
 if (typeof _0x51ff1c != "number") {
 for (
 let _0x693cb1 = _0x26e45d.params["range"].startRow;
 _0x693cb1 <= _0x26e45d.params["range"].endRow;
 _0x693cb1++
 )
 (0, e.insertMatrixArray)(_0x693cb1, undefined, _0x51ff1c);
 }
 return { m1Prime: _0x2c97ed, m2Prime: _0x2bb638 };
 },
 },
 _i = {
 m1: o.InsertRowMutation["id"],
 m2: o.SetWorksheetRowIsAutoHeightMutation["id"],
 handler(_0x2895d4, _0x108a88) {
 let _0x946911 = { m1Prime: _0x2895d4, m2Prime: _0x108a88 };
 if (
 _0x2895d4.params["unitId"] !== _0x108a88.params["unitId"] ||
 _0x2895d4.params["subUnitId"] !== _0x108a88.params["subUnitId"]
 )
 return _0x946911;
 let _0x2a14b4 = e.Tools["deepClone"](_0x2895d4),
 _0x5e305e = e.Tools["deepClone"](_0x108a88),
 { ranges: _0x137f4a, autoHeightInfo: _0x5e9d51 } = _0x5e305e.params;
 if (
 _0x137f4a.some((_0x2f666a) => {
 let _0x588eeb = (0, o.handleBaseInsertRange)(
 F((0, o.rotateRange)(_0x2895d4.params["range"])),
 (0, o.rotateRange)(_0x2f666a),
 );
 return _0x588eeb.length === 0
 ? ((_0x2f666a.startRow += _0x588eeb.step),
 (_0x2f666a.endRow += _0x588eeb.step),
 false)
 : true;
 })
 )
 return {
 error: Error(
 "insert\x20row\x20is\x20conflict\x20with\x20set\x20worksheet\x20row\x20is\x20auto\x20height",
 ),
 };
 if (typeof _0x5e9d51 != "number") {
 for (
 let _0x34d32e = _0x2895d4.params["range"].startRow;
 _0x34d32e <= _0x2895d4.params["range"].endRow;
 _0x34d32e++
 )
 (0, e.insertMatrixArray)(_0x34d32e, undefined, _0x5e9d51);
 }
 return { m1Prime: _0x2a14b4, m2Prime: _0x5e305e };
 },
 },
 vi = {
 m1: o.InsertRowMutation["id"],
 m2: c.UpdateCommentRefMutation["id"],
 handler: (_0x532d4e, _0xcd8e84) => {
 let _0x9ef5aa = { m1Prime: _0x532d4e, m2Prime: _0xcd8e84 };
 if (
 _0x532d4e.params["unitId"] !== _0xcd8e84.params["unitId"] ||
 _0x532d4e.params["subUnitId"] !== _0xcd8e84.params["subUnitId"]
 )
 return _0x9ef5aa;
 let _0x22109a = V(_0xcd8e84, {
 id: o.InsertRowCommand["id"],
 params: {
 unitId: _0x532d4e.params["unitId"],
 subUnitId: _0x532d4e.params["subUnitId"],
 range: _0x532d4e.params["range"],
 },
 });
 return {
 m1Prime: [_0x532d4e, ..._0x22109a],
 m2Prime: [_0xcd8e84, ..._0x22109a],
 };
 },
 },
 yi = {
 m1: o.InsertRowMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x2538aa, _0x27aebc) => {
 let _0x2d8baa = { m1Prime: _0x2538aa, m2Prime: _0x27aebc };
 if (
 _0x2538aa.params["unitId"] !== _0x27aebc.params["unitId"] ||
 _0x27aebc.params["subUnitId"] !== _0x2538aa.params["subUnitId"]
 )
 return _0x2d8baa;
 let _0x1ae4e7 = H(_0x27aebc, {
 id: o.InsertRowCommand["id"],
 params: {
 unitId: _0x2538aa.params["unitId"],
 subUnitId: _0x2538aa.params["subUnitId"],
 range: _0x2538aa.params["range"],
 },
 });
 return {
 m1Prime: [_0x2538aa, ..._0x1ae4e7],
 m2Prime: [_0x27aebc, ..._0x1ae4e7],
 };
 },
 },
 bi = {
 m1: o.MoveColsMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x384ca7, _0x3d18fd) => {
 let _0x4b4cfc = { m1Prime: _0x384ca7, m2Prime: _0x3d18fd };
 if (
 _0x384ca7.params["unitId"] !== _0x3d18fd.params["unitId"] ||
 _0x384ca7.params["subUnitId"] !== _0x3d18fd.params["subUnitId"]
 )
 return _0x4b4cfc;
 let _0x5db079 = P(_0x3d18fd, {
 id: o.MoveColsCommand["id"],
 params: {
 unitId: _0x384ca7.params["unitId"],
 subUnitId: _0x384ca7.params["subUnitId"],
 fromRange: _0x384ca7.params["sourceRange"],
 toRange: _0x384ca7.params["targetRange"],
 },
 });
 return {
 m1Prime: [_0x384ca7, ..._0x5db079],
 m2Prime: [_0x3d18fd, ..._0x5db079],
 };
 },
 },
 xi = {
 m1: o.MoveColsMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x189597, _0x3a5230) {
 let _0x26075d = sn.handler(_0x3a5230, _0x189597);
 return S(_0x26075d)
 ? { m1Prime: _0x26075d.m2Prime, m2Prime: _0x26075d.m1Prime }
 : _0x26075d;
 },
 },
 Si = {
 m1: o.MoveColsMutation["id"],
 m2: o.MoveColsMutation["id"],
 handler(_0x2880ef, _0x42b06f) {
 let _0x4b6d2c = { m1Prime: _0x2880ef, m2Prime: _0x42b06f };
 if (
 _0x2880ef.params["unitId"] !== _0x42b06f.params["unitId"] ||
 _0x2880ef.params["subUnitId"] !== _0x42b06f.params["subUnitId"]
 )
 return _0x4b6d2c;
 let _0x378f4f = e.Tools["deepClone"](_0x2880ef),
 _0x4fff1c = e.Tools["deepClone"](_0x42b06f),
 _0x378e3d = _0x42b06f.params["sourceRange"],
 _0x43e429 = _0x42b06f.params["targetRange"],
 _0x4a6b76 = _0x2880ef.params["sourceRange"],
 _0x11601d = _0x2880ef.params["targetRange"];
 if (
 _0x4a6b76.endColumn >= _0x378e3d.startColumn &&
 _0x4a6b76.startColumn <= _0x378e3d.endColumn
 )
 return { error: Error("move col is conflict with move col") };
 let _0x37587b = (0, o.handleBaseMoveRowsCols)(
 { start: _0x4a6b76.startColumn, end: _0x4a6b76.endColumn },
 { start: _0x11601d.startColumn, end: _0x11601d.endColumn },
 { start: _0x378e3d.startColumn, end: _0x378e3d.endColumn },
 ),
 _0x137a93 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x4a6b76.startColumn, end: _0x4a6b76.endColumn },
 { start: _0x11601d.startColumn, end: _0x11601d.endColumn },
 { start: _0x43e429.startColumn, end: _0x43e429.endColumn },
 );
 _0x37587b && _0x137a93
 ? ((_0x4fff1c.params["sourceRange"].startColumn += _0x37587b.step),
 (_0x4fff1c.params["sourceRange"].endColumn +=
 _0x37587b.step + (_0x37587b.length || 0)),
 (_0x4fff1c.params["targetRange"].startColumn += _0x137a93.step),
 (_0x4fff1c.params["targetRange"].endColumn +=
 _0x137a93.step + (_0x137a93.length || 0)))
 : (_0x4fff1c.id = o.EmptyMutation["id"]);
 let _0x1b9419 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x378e3d.startColumn, end: _0x378e3d.endColumn },
 { start: _0x43e429.startColumn, end: _0x43e429.endColumn },
 { start: _0x4a6b76.startColumn, end: _0x4a6b76.endColumn },
 ),
 _0x1cd777 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x378e3d.startColumn, end: _0x378e3d.endColumn },
 { start: _0x43e429.startColumn, end: _0x43e429.endColumn },
 { start: _0x11601d.startColumn, end: _0x11601d.endColumn },
 );
 return (
 _0x1b9419 && _0x1cd777
 ? ((_0x378f4f.params["sourceRange"].startColumn += _0x1b9419.step),
 (_0x378f4f.params["sourceRange"].endColumn +=
 _0x1b9419.step + (_0x1b9419.length || 0)),
 (_0x378f4f.params["targetRange"].startColumn += _0x1cd777.step),
 (_0x378f4f.params["targetRange"].endColumn +=
 _0x1cd777.step + (_0x1cd777.length || 0)))
 : (_0x378f4f.id = o.EmptyMutation["id"]),
 { m1Prime: _0x378f4f, m2Prime: _0x4fff1c }
 );
 },
 },
 Ci = {
 m1: o.MoveColsMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x3f49ea, _0x26d1df) {
 let _0x5878ef = { m1Prime: _0x3f49ea, m2Prime: _0x26d1df };
 if (
 _0x3f49ea.params["unitId"] !== _0x26d1df.params["unitId"] ||
 (_0x3f49ea.params["subUnitId"] !== _0x26d1df.params["from"].subUnitId &&
 _0x3f49ea.params["subUnitId"] !== _0x26d1df.params["to"].subUnitId)
 )
 return _0x5878ef;
 let _0xb428f4 = e.Tools["deepClone"](_0x3f49ea),
 _0x5c9585 = e.Tools["deepClone"](_0x26d1df),
 _0x22c8ea = _0x3f49ea.params["sourceRange"],
 _0x771aa5 = _0x3f49ea.params["targetRange"];
 if (
 _0x3f49ea.params["subUnitId"] === _0x26d1df.params["from"].subUnitId
 ) {
 let _0x2f0ce1 = new e["ObjectMatrix"](_0x5c9585.params["from"].value),
 _0x4e20da = _0x2f0ce1.getDataRange();
 if (
 z(
 { start: _0x22c8ea.startColumn, end: _0x22c8ea.endColumn },
 { start: _0x4e20da.startColumn, end: _0x4e20da.endColumn },
 ) ||
 z(
 { start: _0x771aa5.startColumn, end: _0x771aa5.endColumn },
 { start: _0x4e20da.startColumn, end: _0x4e20da.endColumn },
 )
 )
 return { error: Error("move col is conflict with move range") };
 let _0x37d494 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x22c8ea.startColumn, end: _0x22c8ea.endColumn },
 { start: _0x771aa5.startColumn, end: _0x771aa5.endColumn },
 { start: _0x4e20da.startColumn, end: _0x4e20da.endColumn },
 );
 if (_0x37d494.length !== 0)
 return { error: Error("move col is conflict with move range") };
 (_0x37d494.step !== 0 &&
 _0x2f0ce1.moveColumns(
 _0x22c8ea.startColumn,
 _0x22c8ea.endColumn - _0x22c8ea.startColumn + 1,
 _0x771aa5.startColumn,
 ),
 (_0x5c9585.params["from"].value = _0x2f0ce1.getMatrix()));
 }
 if (_0x3f49ea.params["subUnitId"] === _0x26d1df.params["to"].subUnitId) {
 let _0x194a13 = new e["ObjectMatrix"](_0x5c9585.params["to"].value),
 _0x28e742 = _0x194a13.getDataRange();
 if (
 z(
 { start: _0x22c8ea.startColumn, end: _0x22c8ea.endColumn },
 { start: _0x28e742.startColumn, end: _0x28e742.endColumn },
 ) ||
 z(
 { start: _0x771aa5.startColumn, end: _0x771aa5.endColumn },
 { start: _0x28e742.startColumn, end: _0x28e742.endColumn },
 )
 )
 return {
 error: Error(
 "move\x20col\x20is\x20conflict\x20with\x20move\x20range",
 ),
 };
 let _0x5a0f25 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x22c8ea.startColumn, end: _0x22c8ea.endColumn },
 { start: _0x771aa5.startColumn, end: _0x771aa5.endColumn },
 { start: _0x28e742.startColumn, end: _0x28e742.endColumn },
 );
 if (_0x5a0f25.length !== 0)
 return { error: Error("move col is conflict with move range") };
 (_0x5a0f25.step !== 0 &&
 _0x194a13.moveColumns(
 _0x22c8ea.startColumn,
 _0x22c8ea.endColumn - _0x22c8ea.startColumn + 1,
 _0x771aa5.startColumn,
 ),
 (_0x5c9585.params["to"].value = _0x194a13.getMatrix()));
 }
 return { m1Prime: _0xb428f4, m2Prime: _0x5c9585 };
 },
 },
 wi = {
 m1: o.MoveColsMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler(_0x2dc29b, _0x3d3a8a) {
 let _0x2285e9 = { m1Prime: _0x2dc29b, m2Prime: _0x3d3a8a };
 if (
 _0x2dc29b.params["unitId"] !== _0x3d3a8a.params["unitId"] ||
 _0x2dc29b.params["subUnitId"] !== _0x3d3a8a.params["subUnitId"]
 )
 return _0x2285e9;
 let _0x4c78a7 = e.Tools["deepClone"](_0x2dc29b),
 _0x4f5c40 = e.Tools["deepClone"](_0x3d3a8a),
 { sourceRange: _0x367300, targetRange: _0x4faef2 } = _0x2dc29b.params,
 _0x3cd8fa = { start: _0x367300.startColumn, end: _0x367300.endColumn },
 _0x154e4f = { start: _0x4faef2.startColumn, end: _0x4faef2.endColumn };
 return _0x4f5c40.params["ranges"].some((_0x5e23df) => {
 let _0xdb06e8 = {
 start: _0x5e23df.startColumn,
 end: _0x5e23df.endColumn,
 },
 _0x3d4f05 = z(_0x3cd8fa, _0xdb06e8),
 _0x2cf1c3 = z(_0x154e4f, _0xdb06e8);
 if (_0x3d4f05 || _0x2cf1c3) return true;
 let _0x412498 = (0, o.handleBaseMoveRowsCols)(
 _0x3cd8fa,
 _0x154e4f,
 _0xdb06e8,
 );
 return _0x412498.length === 0
 ? ((_0x5e23df.startColumn += _0x412498.step),
 (_0x5e23df.endColumn += _0x412498.step),
 false)
 : true;
 })
 ? { error: Error("move col is conflict with remove numfmt") }
 : { m1Prime: _0x4c78a7, m2Prime: _0x4f5c40 };
 },
 },
 Ti = {
 m1: o.MoveColsMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler(_0x3ddfcf, _0x5db3c9) {
 let _0x22ef55 = e.Tools["deepClone"](_0x3ddfcf),
 _0x6003e9 = e.Tools["deepClone"](_0x5db3c9);
 if (
 _0x3ddfcf.params["unitId"] !== _0x5db3c9.params["unitId"] ||
 _0x3ddfcf.params["subUnitId"] !== _0x5db3c9.params["subUnitId"]
 )
 return { m1Prime: _0x22ef55, m2Prime: _0x6003e9 };
 let _0x1fd81c = _0x6003e9.params["ranges"].reduce(
 (_0x317618, _0x28e762) => {
 let { sourceRange: _0x187182, targetRange: _0x897707 } =
 _0x3ddfcf.params,
 _0x455354 = { ..._0x28e762 };
 return (
 _0x187182.endColumn < _0x455354.startColumn &&
 _0x897707.startColumn > _0x455354.endColumn
 ? ((_0x455354.startColumn -=
 _0x187182.endColumn - _0x187182.startColumn + 1),
 (_0x455354.endColumn -=
 _0x187182.endColumn - _0x187182.startColumn + 1),
 O(_0x455354) && _0x317618.push(_0x455354))
 : _0x187182.startColumn > _0x455354.endColumn &&
 _0x897707.endColumn < _0x455354.startColumn
 ? ((_0x455354.startColumn +=
 _0x187182.endColumn - _0x187182.startColumn + 1),
 (_0x455354.endColumn +=
 _0x187182.endColumn - _0x187182.startColumn + 1),
 O(_0x455354) && _0x317618.push(_0x455354))
 : e.Rectangle["intersects"](_0x455354, _0x187182) ||
 e.Rectangle["intersects"](_0x455354, _0x897707) ||
 _0x317618.push(_0x455354),
 _0x317618
 );
 },
 [],
 );
 return (
 (_0x6003e9.params["ranges"] = _0x1fd81c),
 _0x6003e9.params["ranges"].length === 0 &&
 (_0x6003e9.id = o.EmptyMutation["id"]),
 { m1Prime: _0x22ef55, m2Prime: _0x6003e9 }
 );
 },
 },
 Ei = {
 m1: o.MoveColsMutation["id"],
 m2: o.ReorderRangeMutation["id"],
 handler(_0x4d53de, _0x33fd01) {
 let _0x2c98e6 = { m1Prime: _0x4d53de, m2Prime: _0x33fd01 };
 if (
 _0x4d53de.params["unitId"] !== _0x33fd01.params["unitId"] ||
 _0x4d53de.params["subUnitId"] !== _0x33fd01.params["subUnitId"]
 )
 return _0x2c98e6;
 let _0x1034f9 = _0x4d53de.params["sourceRange"].startColumn,
 _0x480e3a = _0x4d53de.params["sourceRange"].endColumn,
 _0xc3f5fd = _0x4d53de.params["targetRange"].startColumn,
 _0x938c32 = _0x4d53de.params["targetRange"].endColumn,
 _0x21b66f = _0x33fd01.params["range"].startColumn,
 _0x4af943 = _0x33fd01.params["range"].endColumn;
 if (
 (_0x1034f9 <= _0x4af943 && _0x480e3a >= _0x21b66f) ||
 (_0xc3f5fd <= _0x4af943 && _0x938c32 >= _0x21b66f)
 )
 return { error: Error("move range is conflict with reorder range") };
 let _0x65f9fb = (0, o.handleBaseMoveRowsCols)(
 { start: _0x1034f9, end: _0x480e3a },
 { start: _0xc3f5fd, end: _0x938c32 },
 { start: _0x21b66f, end: _0x4af943 },
 ),
 _0x51ddbb = e.Tools["deepClone"](_0x33fd01);
 return (
 (_0x51ddbb.params["range"].startColumn += _0x65f9fb.step),
 (_0x51ddbb.params["range"].endColumn +=
 _0x65f9fb.step + (_0x65f9fb.length || 0)),
 { m1Prime: _0x4d53de, m2Prime: _0x51ddbb }
 );
 },
 },
 Di = {
 m1: o.MoveColsMutation["id"],
 m2: o.SetColDataMutation["id"],
 handler(_0x4a4f1d, _0x4f7a2c) {
 let _0x43988b = { m1Prime: _0x4a4f1d, m2Prime: _0x4f7a2c };
 if (
 _0x4a4f1d.params["unitId"] !== _0x4f7a2c.params["unitId"] ||
 _0x4a4f1d.params["subUnitId"] !== _0x4f7a2c.params["subUnitId"]
 )
 return _0x43988b;
 let _0x454848 = e.Tools["deepClone"](_0x4a4f1d),
 _0xe504b6 = e.Tools["deepClone"](_0x4f7a2c),
 { columnData: _0x3e13f1 } = _0xe504b6.params,
 { sourceRange: _0x278392, targetRange: _0x2b04c3 } = _0x4a4f1d.params;
 return (
 (0, e.moveMatrixArray)(
 _0x278392.startColumn,
 _0x278392.endColumn - _0x278392.startColumn + 1,
 _0x2b04c3.startColumn,
 _0x3e13f1,
 ),
 { m1Prime: _0x454848, m2Prime: _0xe504b6 }
 );
 },
 },
 Oi = {
 m1: o.MoveColsMutation["id"],
 m2: o.SetColHiddenMutation["id"],
 handler(_0x4c7109, _0x182cfd) {
 let _0x3760e4 = { m1Prime: _0x4c7109, m2Prime: _0x182cfd };
 if (
 _0x4c7109.params["unitId"] !== _0x182cfd.params["unitId"] ||
 _0x4c7109.params["subUnitId"] !== _0x182cfd.params["subUnitId"]
 )
 return _0x3760e4;
 let _0x214712 = e.Tools["deepClone"](_0x4c7109),
 _0x13d3c2 = e.Tools["deepClone"](_0x182cfd),
 { ranges: _0x4c505f } = _0x13d3c2.params,
 { sourceRange: _0x574039, targetRange: _0x2c08cb } = _0x4c7109.params,
 _0x42ee8f = { start: _0x574039.startColumn, end: _0x574039.endColumn },
 _0x28767a = { start: _0x2c08cb.startColumn, end: _0x2c08cb.endColumn };
 return _0x4c505f.some((_0x2e104c) => {
 let _0x42e50d = {
 start: _0x2e104c.startColumn,
 end: _0x2e104c.endColumn,
 },
 _0x35b9fd = z(_0x42ee8f, _0x42e50d),
 _0xb7e471 = z(_0x28767a, _0x42e50d);
 if (_0x35b9fd || _0xb7e471) return true;
 let _0x1db2a4 = (0, o.handleBaseMoveRowsCols)(
 _0x42ee8f,
 _0x28767a,
 _0x42e50d,
 );
 return _0x1db2a4.length === 0
 ? ((_0x2e104c.startColumn += _0x1db2a4.step),
 (_0x2e104c.endColumn += _0x1db2a4.step),
 false)
 : true;
 })
 ? {
 error: Error(
 "move\x20col\x20is\x20conflict\x20with\x20set\x20col\x20hidden",
 ),
 }
 : { m1Prime: _0x214712, m2Prime: _0x13d3c2 };
 },
 },
 ki = {
 m1: o.MoveColsMutation["id"],
 m2: o.SetColVisibleMutation["id"],
 handler(_0x97de1e, _0x26ff5c) {
 let _0x2968fb = { m1Prime: _0x97de1e, m2Prime: _0x26ff5c };
 if (
 _0x97de1e.params["unitId"] !== _0x26ff5c.params["unitId"] ||
 _0x97de1e.params["subUnitId"] !== _0x26ff5c.params["subUnitId"]
 )
 return _0x2968fb;
 let _0x511542 = e.Tools["deepClone"](_0x97de1e),
 _0x1d338a = e.Tools["deepClone"](_0x26ff5c),
 { ranges: _0xa3b21 } = _0x1d338a.params,
 { sourceRange: _0x41647d, targetRange: _0x489078 } = _0x97de1e.params,
 _0x3bc014 = { start: _0x41647d.startColumn, end: _0x41647d.endColumn },
 _0x1e40af = { start: _0x489078.startColumn, end: _0x489078.endColumn };
 return _0xa3b21.some((_0x4d9c5f) => {
 let _0x343922 = {
 start: _0x4d9c5f.startColumn,
 end: _0x4d9c5f.endColumn,
 },
 _0x486d95 = z(_0x3bc014, _0x343922),
 _0x5647f9 = z(_0x1e40af, _0x343922);
 if (_0x486d95 || _0x5647f9) return true;
 let _0x9d670c = (0, o.handleBaseMoveRowsCols)(
 _0x3bc014,
 _0x1e40af,
 _0x343922,
 );
 return _0x9d670c.length === 0
 ? ((_0x4d9c5f.startColumn += _0x9d670c.step),
 (_0x4d9c5f.endColumn += _0x9d670c.step),
 false)
 : true;
 })
 ? { error: Error("move col is conflict with set col visible") }
 : { m1Prime: _0x511542, m2Prime: _0x1d338a };
 },
 },
 Ai = {
 m1: o.MoveColsMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler(_0x22a61f, _0x65d85b) {
 let _0x1089af = { m1Prime: _0x22a61f, m2Prime: _0x65d85b };
 if (
 _0x22a61f.params["unitId"] !== _0x65d85b.params["unitId"] ||
 _0x22a61f.params["subUnitId"] !== _0x65d85b.params["subUnitId"]
 )
 return _0x1089af;
 let _0x481ef9 = [e.Tools["deepClone"](_0x22a61f)],
 _0x554138 = e.Tools["deepClone"](_0x65d85b),
 { sourceRange: _0x5d1b53, targetRange: _0x4374d9 } = _0x22a61f.params,
 _0x21a0ce = { start: _0x5d1b53.startColumn, end: _0x5d1b53.endColumn },
 _0xc874f0 = { start: _0x4374d9.startColumn, end: _0x4374d9.endColumn },
 { values: _0x31e9d6 } = _0x554138.params,
 _0x31903f = [],
 _0x384dd2 = false;
 for (let _0x263795 in _0x31e9d6) {
 let _0x690b1e = _0x31e9d6[_0x263795];
 if (
 (_0x31903f.push(..._0x690b1e.ranges),
 _0x690b1e.ranges["some"]((_0x4bf43c) => {
 let _0x4160d2 = {
 start: _0x4bf43c.startColumn,
 end: _0x4bf43c.endColumn,
 },
 _0x2142eb = z(_0x21a0ce, _0x4160d2),
 _0x53096e = z(_0xc874f0, _0x4160d2);
 if (_0x2142eb || _0x53096e) return true;
 let _0x5aad45 = (0, o.handleBaseMoveRowsCols)(
 _0x21a0ce,
 _0xc874f0,
 _0x4160d2,
 );
 return _0x5aad45.length === 0
 ? (_0x5aad45.step !== 0 && (_0x384dd2 = true),
 (_0x4bf43c.startColumn += _0x5aad45.step),
 (_0x4bf43c.endColumn += _0x5aad45.step),
 false)
 : true;
 }))
 )
 return {
 error: Error(
 "move\x20col\x20is\x20conflict\x20with\x20set\x20numfmt",
 ),
 };
 }
 if (_0x384dd2) {
 let _0x5eaf33 = {
 id: o.RemoveNumfmtMutation["id"],
 params: {
 unitId: _0x65d85b.params["unitId"],
 subUnitId: _0x65d85b.params["subUnitId"],
 ranges: _0x31903f,
 },
 };
 _0x481ef9.push(_0x5eaf33, _0x554138);
 }
 return { m1Prime: _0x481ef9, m2Prime: _0x554138 };
 },
 },
 ji = {
 m1: o.MoveColsMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler(_0x149ca3, _0x1ffac4) {
 let _0x57844b = { m1Prime: _0x149ca3, m2Prime: _0x1ffac4 };
 if (
 _0x149ca3.params["unitId"] !== _0x1ffac4.params["unitId"] ||
 _0x149ca3.params["subUnitId"] !== _0x1ffac4.params["subUnitId"]
 )
 return _0x57844b;
 let _0x23a459 = [e.Tools["deepClone"](_0x149ca3)],
 _0x188c74 = e.Tools["deepClone"](_0x1ffac4),
 _0x7bce8b = new e.ObjectMatrix(_0x188c74.params["cellValue"]),
 { sourceRange: _0x2d05c2, targetRange: _0xac92df } = _0x149ca3.params,
 _0xaf8d25 = _0x2d05c2.startColumn,
 _0x18a01a = _0x2d05c2.endColumn - _0x2d05c2.startColumn + 1,
 _0x22ecfc = _0xac92df.startColumn;
 _0x7bce8b.moveColumns(_0xaf8d25, _0x18a01a, _0x22ecfc);
 let _0x3a8a64 = new e["ObjectMatrix"](),
 _0xe82040 = false;
 if (
 (_0x7bce8b.forValue((_0x4136af, _0x17f691, _0x50fc3a) => {
 if (_0x50fc3a && _0x50fc3a.f) {
 let _0xda0c8f = _0x50fc3a.f,
 _0x32af5f = false,
 _0x418cc2 = R(
 _0x149ca3.params["unitId"],
 _0x149ca3.params["subUnitId"],
 _0xda0c8f,
 (_0x205245) => {
 let _0xd97704 = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x149ca3.params["sourceRange"].startColumn,
 end: _0x149ca3.params["sourceRange"].endColumn,
 },
 {
 start: _0x149ca3.params["targetRange"].startColumn,
 end: _0x149ca3.params["targetRange"].endColumn,
 },
 { start: _0x205245.startColumn, end: _0x205245.endColumn },
 );
 return (
 (_0xd97704.step !== 0 || _0xd97704.length !== 0) &&
 ((_0x32af5f = true),
 (_0x205245.startColumn += _0xd97704.step),
 (_0x205245.endColumn +=
 _0xd97704.step + _0xd97704.length)),
 _0x205245
 );
 },
 );
 _0x32af5f &&
 ((_0xe82040 = true),
 (_0x50fc3a.f = _0x418cc2),
 _0x3a8a64.setValue(_0x4136af, _0x17f691, { ..._0x50fc3a }));
 }
 }),
 _0xe82040)
 ) {
 let _0x2d5612 = {
 id: o.SetRangeValuesMutation["id"],
 params: {
 unitId: _0x1ffac4.params["unitId"],
 subUnitId: _0x1ffac4.params["subUnitId"],
 cellValue: _0x3a8a64.getMatrix(),
 },
 };
 _0x23a459.push(_0x2d5612);
 }
 return (
 (_0x188c74.params["cellValue"] = _0x7bce8b.getMatrix()),
 { m1Prime: _0x23a459, m2Prime: _0x188c74 }
 );
 },
 },
 Mi = {
 m1: o.MoveColsMutation["id"],
 m2: o.SetSelectionsOperation["id"],
 handler(_0x619ed8, _0xda5737) {
 let _0x2d8480 = { m1Prime: [], m2Prime: [] };
 if (
 _0x619ed8.params["unitId"] !== _0xda5737.params["unitId"] ||
 _0x619ed8.params["subUnitId"] !== _0xda5737.params["subUnitId"]
 )
 return _0x2d8480;
 let _0x1000c8 = e.Tools["deepClone"](_0xda5737),
 _0xddc0 = false;
 return (
 _0x1000c8.params["selections"].forEach((_0x2470e3) => {
 let { range: _0x2bad2a, primary: _0x14468a } = _0x2470e3,
 _0x4d0416 = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x619ed8.params["sourceRange"].startColumn,
 end: _0x619ed8.params["sourceRange"].endColumn,
 },
 {
 start: _0x619ed8.params["targetRange"].startColumn,
 end: _0x619ed8.params["targetRange"].endColumn,
 },
 { start: _0x2bad2a.startColumn, end: _0x2bad2a.endColumn },
 );
 if (_0x4d0416.length || _0x4d0416.step) {
 if (
 ((_0x2bad2a.startColumn += _0x4d0416.step),
 (_0x2bad2a.endColumn += _0x4d0416.step + (_0x4d0416.length || 0)),
 _0x14468a)
 ) {
 let _0x294206 = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x619ed8.params["sourceRange"].startColumn,
 end: _0x619ed8.params["sourceRange"].endColumn,
 },
 {
 start: _0x619ed8.params["targetRange"].startColumn,
 end: _0x619ed8.params["targetRange"].endColumn,
 },
 { start: _0x14468a.startColumn, end: _0x14468a.endColumn },
 );
 (_0x294206.length || _0x294206.step) &&
 ((_0x14468a.startColumn += _0x294206.step),
 (_0x14468a.endColumn += _0x294206.step),
 (_0x14468a.actualColumn += _0x294206.step));
 }
 _0xddc0 = true;
 }
 }),
 _0xddc0 && _0x2d8480.m2Prime["push"](_0x1000c8),
 _0x2d8480
 );
 },
 },
 Ni = {
 m1: o.MoveColsMutation["id"],
 m2: f.SetSheetsFilterCriteriaMutation["id"],
 handler(_0x32a8a3, _0x5ef173) {
 let _0x1f301a = { m1Prime: _0x32a8a3, m2Prime: _0x5ef173 };
 if (
 _0x32a8a3.params["unitId"] !== _0x5ef173.params["unitId"] ||
 _0x32a8a3.params["subUnitId"] !== _0x5ef173.params["subUnitId"]
 )
 return _0x1f301a;
 let _0xbc7d65 = e.Tools["deepClone"](_0x32a8a3),
 _0x3ec7c2 = e.Tools["deepClone"](_0x5ef173),
 _0x379d5d = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x32a8a3.params["sourceRange"].startColumn,
 end: _0x32a8a3.params["sourceRange"].endColumn,
 },
 {
 start: _0x32a8a3.params["targetRange"].startColumn,
 end: _0x32a8a3.params["targetRange"].endColumn,
 },
 { start: _0x5ef173.params["col"], end: _0x5ef173.params["col"] },
 );
 if (_0x379d5d.step === 0) return _0x1f301a;
 ((_0x3ec7c2.params["col"] += _0x379d5d.step),
 _0x3ec7c2.params["criteria"] &&
 (_0x3ec7c2.params["criteria"].colId += _0x379d5d.step));
 let _0x10f2cf = e.Tools["deepClone"](_0x5ef173);
 return (
 (_0x10f2cf.params["criteria"] = null),
 { m1Prime: [_0x10f2cf, _0x3ec7c2, _0xbc7d65], m2Prime: [_0x3ec7c2] }
 );
 },
 },
 Pi = {
 m1: o.MoveColsMutation["id"],
 m2: f.SetSheetsFilterRangeMutation["id"],
 handler(_0x39b3af, _0x2093e6) {
 let _0x5b6ee3 = { m1Prime: [_0x39b3af], m2Prime: [_0x2093e6] };
 if (
 _0x39b3af.params["unitId"] !== _0x2093e6.params["unitId"] ||
 _0x39b3af.params["subUnitId"] !== _0x2093e6.params["subUnitId"]
 )
 return _0x5b6ee3;
 let _0x1cd08a = e.Tools["deepClone"](_0x39b3af),
 _0x43d86 = e.Tools["deepClone"](_0x2093e6),
 _0x149367 = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x39b3af.params["sourceRange"].startColumn,
 end: _0x39b3af.params["sourceRange"].endColumn,
 },
 {
 start: _0x39b3af.params["targetRange"].startColumn,
 end: _0x39b3af.params["targetRange"].endColumn,
 },
 {
 start: _0x2093e6.params["range"].startColumn,
 end: _0x2093e6.params["range"].endColumn,
 },
 );
 return (
 (_0x43d86.params["range"].startColumn += _0x149367.step),
 (_0x43d86.params["range"].endColumn +=
 _0x149367.step + _0x149367.length),
 { m1Prime: [_0x43d86, _0x1cd08a], m2Prime: [_0x43d86] }
 );
 },
 },
 Fi = {
 m1: o.MoveColsMutation["id"],
 m2: o.SetWorksheetColWidthMutation["id"],
 handler(_0x3e7704, _0x2680a5) {
 let _0xc48f6f = { m1Prime: _0x3e7704, m2Prime: _0x2680a5 };
 if (
 _0x3e7704.params["unitId"] !== _0x2680a5.params["unitId"] ||
 _0x3e7704.params["subUnitId"] !== _0x2680a5.params["subUnitId"]
 )
 return _0xc48f6f;
 let _0x4e2318 = e.Tools["deepClone"](_0x3e7704),
 _0xbbb7f1 = e.Tools["deepClone"](_0x2680a5),
 { ranges: _0x2f9dd7, colWidth: _0x1ebe3d } = _0xbbb7f1.params,
 { sourceRange: _0x128bfd, targetRange: _0x3eaaf2 } = _0x3e7704.params,
 _0x4d2972 = { start: _0x128bfd.startColumn, end: _0x128bfd.endColumn },
 _0x2e9044 = { start: _0x3eaaf2.startColumn, end: _0x3eaaf2.endColumn };
 return _0x2f9dd7.some((_0x54fef4) => {
 let _0x1e1331 = {
 start: _0x54fef4.startColumn,
 end: _0x54fef4.endColumn,
 },
 _0x1aa3d5 = (0, o.handleBaseMoveRowsCols)(
 _0x4d2972,
 _0x2e9044,
 _0x1e1331,
 );
 return _0x1aa3d5.length === 0
 ? ((_0x54fef4.startColumn += _0x1aa3d5.step),
 (_0x54fef4.endColumn += _0x1aa3d5.step),
 false)
 : true;
 })
 ? { error: Error("move col is conflict with set worksheet col width") }
 : (typeof _0x1ebe3d != "number" &&
 (0, e.moveMatrixArray)(
 _0x128bfd.startColumn,
 _0x128bfd.endColumn - _0x128bfd.startColumn + 1,
 _0x3eaaf2.startColumn,
 _0x1ebe3d,
 ),
 { m1Prime: _0x4e2318, m2Prime: _0xbbb7f1 });
 },
 },
 Ii = {
 m1: o.MoveColsMutation["id"],
 m2: c.UpdateCommentRefMutation["id"],
 handler: (_0x2f267a, _0x10e40e) => {
 let _0x3bf4f1 = { m1Prime: _0x2f267a, m2Prime: _0x10e40e };
 if (
 _0x2f267a.params["unitId"] !== _0x10e40e.params["unitId"] ||
 _0x2f267a.params["subUnitId"] !== _0x10e40e.params["subUnitId"]
 )
 return _0x3bf4f1;
 let _0x359223 = V(_0x10e40e, {
 id: o.MoveColsCommand["id"],
 params: {
 unitId: _0x2f267a.params["unitId"],
 subUnitId: _0x2f267a.params["subUnitId"],
 fromRange: _0x2f267a.params["sourceRange"],
 toRange: _0x2f267a.params["targetRange"],
 },
 });
 return {
 m1Prime: [_0x2f267a, ..._0x359223],
 m2Prime: [_0x10e40e, ..._0x359223],
 };
 },
 },
 Li = {
 m1: l.MoveConditionalRuleMutation["id"],
 m2: l.MoveConditionalRuleMutation["id"],
 handler(_0x48a44c, _0x7e7b29) {
 return _0x48a44c.params["unitId"] !== _0x7e7b29.params["unitId"] ||
 _0x48a44c.params["subUnitId"] !== _0x7e7b29.params["subUnitId"]
 ? { m1Prime: _0x48a44c, m2Prime: _0x7e7b29 }
 : _0x48a44c.params["start"].id === _0x7e7b29.params["start"].id &&
 _0x48a44c.params["end"].id === _0x7e7b29.params["end"].id &&
 _0x48a44c.params["start"].type === _0x7e7b29.params["start"].type &&
 _0x48a44c.params["end"].type === _0x7e7b29.params["end"].type
 ? { m1Prime: [], m2Prime: [] }
 : {
 error: Error(
 "Move conditional formatting rule is conflict with self",
 ),
 };
 },
 },
 Ri = {
 m1: o.MoveRangeMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x26d051, _0x15aed7) {
 let _0x419ff8 = cn.handler(_0x15aed7, _0x26d051);
 return S(_0x419ff8)
 ? { m1Prime: _0x419ff8.m2Prime, m2Prime: _0x419ff8.m1Prime }
 : _0x419ff8;
 },
 },
 zi = {
 m1: o.MoveRangeMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x382b0f, _0x56405b) {
 let _0xf3f8f5 = { m1Prime: _0x382b0f, m2Prime: _0x56405b };
 if (_0x382b0f.params["unitId"] !== _0x56405b.params["unitId"])
 return _0xf3f8f5;
 let _0x629206 = new e["ObjectMatrix"](
 _0x382b0f.params["from"].value,
 ).getDataRange(),
 _0x5cfaf5 = new e.ObjectMatrix(
 _0x56405b.params["from"].value,
 ).getDataRange(),
 _0x37c20b = new e["ObjectMatrix"](
 _0x382b0f.params["to"].value,
 ).getDataRange(),
 _0xf1cbc2 = new e["ObjectMatrix"](
 _0x56405b.params["to"].value,
 ).getDataRange();
 return (_0x382b0f.params["from"].subUnitId ===
 _0x56405b.params["from"].subUnitId &&
 e.Rectangle["intersects"](_0x629206, _0x5cfaf5)) ||
 (_0x382b0f.params["to"].subUnitId ===
 _0x56405b.params["to"].subUnitId &&
 e.Rectangle["intersects"](_0x37c20b, _0xf1cbc2)) ||
 (_0x382b0f.params["from"].subUnitId ===
 _0x56405b.params["to"].subUnitId &&
 e.Rectangle["intersects"](_0x629206, _0xf1cbc2)) ||
 (_0x382b0f.params["to"].subUnitId ===
 _0x56405b.params["from"].subUnitId &&
 e.Rectangle["intersects"](_0x37c20b, _0x5cfaf5))
 ? {
 error: Error("Two move-range mutations have an overlapping range."),
 }
 : _0xf3f8f5;
 },
 },
 Bi = {
 m1: o.MoveRangeMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler(_0x98c7ff, _0x347370) {
 let _0x590265 = { m1Prime: _0x98c7ff, m2Prime: _0x347370 };
 if (
 _0x98c7ff.params["unitId"] !== _0x347370.params["unitId"] ||
 (_0x98c7ff.params["from"].subUnitId !== _0x347370.params["subUnitId"] &&
 _0x98c7ff.params["to"].subUnitId !== _0x347370.params["subUnitId"])
 )
 return _0x590265;
 let _0x4d59e6 = new e["ObjectMatrix"](
 _0x98c7ff.params["from"].value,
 ).getDataRange(),
 _0x5f374e = new e.ObjectMatrix(
 _0x98c7ff.params["to"].value,
 ).getDataRange();
 return (_0x98c7ff.params["from"].subUnitId ===
 _0x347370.params["subUnitId"] &&
 _0x347370.params["ranges"].some((_0x1e5f1f) =>
 e.Rectangle["intersects"](_0x1e5f1f, _0x4d59e6),
 )) ||
 (_0x98c7ff.params["to"].subUnitId === _0x347370.params["subUnitId"] &&
 _0x347370.params["ranges"].some((_0x4d6e89) =>
 e.Rectangle["intersects"](_0x4d6e89, _0x5f374e),
 ))
 ? {
 error: Error(
 "move\x20range\x20is\x20conflict\x20with\x20set\x20numfmt",
 ),
 }
 : _0x590265;
 },
 },
 Vi = {
 m1: o.MoveRangeMutation["id"],
 m2: o.ReorderRangeMutation["id"],
 handler(_0x1626db, _0x3f4947) {
 let _0x477fa9 = { m1Prime: _0x1626db, m2Prime: _0x3f4947 };
 if (
 _0x1626db.params["unitId"] !== _0x3f4947.params["unitId"] ||
 (_0x1626db.params["from"].subUnitId !== _0x3f4947.params["subUnitId"] &&
 _0x1626db.params["to"].subUnitId !== _0x3f4947.params["subUnitId"])
 )
 return _0x477fa9;
 if (
 _0x1626db.params["from"].subUnitId === _0x3f4947.params["subUnitId"]
 ) {
 let _0x241646 = new e["ObjectMatrix"](
 _0x1626db.params["from"].value,
 ).getDataRange();
 if (e.Rectangle["intersects"](_0x241646, _0x3f4947.params["range"]))
 return {
 error: Error(
 "move\x20range\x20is\x20conflict\x20with\x20reorder\x20range",
 ),
 };
 }
 if (_0x1626db.params["to"].subUnitId === _0x3f4947.params["subUnitId"]) {
 let _0xd407a3 = new e["ObjectMatrix"](
 _0x1626db.params["to"].value,
 ).getDataRange();
 if (e.Rectangle["intersects"](_0xd407a3, _0x3f4947.params["range"]))
 return { error: Error("move range is conflict with reorder range") };
 }
 return _0x477fa9;
 },
 },
 Hi = {
 m1: o.MoveRangeMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler(_0x2ea512, _0x4c6bad) {
 let _0xd2043d = { m1Prime: _0x2ea512, m2Prime: _0x4c6bad };
 if (
 _0x2ea512.params["unitId"] !== _0x4c6bad.params["unitId"] ||
 (_0x2ea512.params["from"].subUnitId !== _0x4c6bad.params["subUnitId"] &&
 _0x2ea512.params["to"].subUnitId !== _0x4c6bad.params["subUnitId"])
 )
 return _0xd2043d;
 let _0x1964b6 = new e.ObjectMatrix(
 _0x2ea512.params["from"].value,
 ).getDataRange(),
 _0x233261 = new e.ObjectMatrix(
 _0x2ea512.params["to"].value,
 ).getDataRange();
 if (
 _0x2ea512.params["from"].subUnitId === _0x4c6bad.params["subUnitId"]
 ) {
 let { values: _0x43ce1c } = _0x4c6bad.params;
 for (let _0x584380 in _0x43ce1c)
 if (
 _0x43ce1c[_0x584380].ranges["some"]((_0x2f7d47) =>
 e.Rectangle["intersects"](_0x2f7d47, _0x1964b6),
 )
 )
 return { error: Error("move range is conflict with set numfmt") };
 }
 if (_0x2ea512.params["to"].subUnitId === _0x4c6bad.params["subUnitId"]) {
 let { values: _0x1df9d6 } = _0x4c6bad.params;
 for (let _0x35416c in _0x1df9d6)
 if (
 _0x1df9d6[_0x35416c].ranges["some"]((_0xfc4e85) =>
 e.Rectangle["intersects"](_0xfc4e85, _0x233261),
 )
 )
 return {
 error: Error(
 "move\x20range\x20is\x20conflict\x20with\x20set\x20numfmt",
 ),
 };
 }
 return _0xd2043d;
 },
 },
 Ui = {
 m1: o.MoveRowsMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x576aed, _0x14d465) => {
 let _0x5ae619 = { m1Prime: _0x576aed, m2Prime: _0x14d465 };
 if (
 _0x576aed.params["unitId"] !== _0x14d465.params["unitId"] ||
 _0x576aed.params["subUnitId"] !== _0x14d465.params["subUnitId"]
 )
 return _0x5ae619;
 let _0x3aa19f = P(_0x14d465, {
 id: o.MoveRowsCommand["id"],
 params: {
 unitId: _0x576aed.params["unitId"],
 subUnitId: _0x576aed.params["subUnitId"],
 fromRange: _0x576aed.params["sourceRange"],
 toRange: _0x576aed.params["targetRange"],
 },
 });
 return {
 m1Prime: [_0x576aed, ..._0x3aa19f],
 m2Prime: [_0x14d465, ..._0x3aa19f],
 };
 },
 },
 Wi = {
 m1: o.MoveRowsMutation["id"],
 m2: u.AddDataValidationMutation["id"],
 handler(_0x3e8c02, _0xc6de35) {
 let _0x4f7190 = { m1Prime: _0x3e8c02, m2Prime: _0xc6de35 };
 if (
 _0x3e8c02.params["unitId"] !== _0xc6de35.params["unitId"] ||
 _0x3e8c02.params["subUnitId"] !== _0xc6de35.params["subUnitId"]
 )
 return _0x4f7190;
 let _0x5b1327 = B(_0xc6de35, {
 id: o.MoveRowsCommand["id"],
 params: {
 fromRange: _0x3e8c02.params["sourceRange"],
 toRange: _0x3e8c02.params["targetRange"],
 },
 });
 return {
 m1Prime: [_0x3e8c02, ..._0x5b1327],
 m2Prime: [_0xc6de35, ..._0x5b1327],
 };
 },
 },
 Gi = {
 m1: o.MoveRowsMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x4b7413, _0x20f8a9) {
 let _0x2c1cfb = ln.handler(_0x20f8a9, _0x4b7413);
 return S(_0x2c1cfb)
 ? { m1Prime: _0x2c1cfb.m2Prime, m2Prime: _0x2c1cfb.m1Prime }
 : _0x2c1cfb;
 },
 },
 Ki = {
 m1: o.MoveRowsMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x282770, _0x371d13) {
 let _0x4cdccb = { m1Prime: _0x282770, m2Prime: _0x371d13 };
 if (
 _0x282770.params["unitId"] !== _0x371d13.params["unitId"] ||
 (_0x282770.params["subUnitId"] !== _0x371d13.params["from"].subUnitId &&
 _0x282770.params["subUnitId"] !== _0x371d13.params["to"].subUnitId)
 )
 return _0x4cdccb;
 let _0x49d3e9 = e.Tools["deepClone"](_0x282770),
 _0x11e450 = e.Tools["deepClone"](_0x371d13),
 _0x1104a2 = _0x282770.params["sourceRange"],
 _0x2e2af4 = _0x282770.params["targetRange"];
 if (
 _0x282770.params["subUnitId"] === _0x371d13.params["from"].subUnitId
 ) {
 let _0x3d2ff8 = new e.ObjectMatrix(_0x11e450.params["from"].value),
 _0x3d0477 = _0x3d2ff8.getDataRange();
 if (
 z(
 { start: _0x1104a2.startRow, end: _0x1104a2.endRow },
 { start: _0x3d0477.startRow, end: _0x3d0477.endRow },
 ) ||
 z(
 { start: _0x2e2af4.startRow, end: _0x2e2af4.endRow },
 { start: _0x3d0477.startRow, end: _0x3d0477.endRow },
 )
 )
 return {
 error: Error(
 "move\x20row\x20is\x20conflict\x20with\x20move\x20range",
 ),
 };
 let _0x4fbb0e = (0, o.handleBaseMoveRowsCols)(
 { start: _0x1104a2.startRow, end: _0x1104a2.endRow },
 { start: _0x2e2af4.startRow, end: _0x2e2af4.endRow },
 { start: _0x3d0477.startRow, end: _0x3d0477.endRow },
 );
 if (_0x4fbb0e.length !== 0)
 return { error: Error("move row is conflict with move range") };
 (_0x4fbb0e.step !== 0 &&
 _0x3d2ff8.moveRows(
 _0x1104a2.startRow,
 _0x1104a2.endRow - _0x1104a2.startRow + 1,
 _0x2e2af4.startRow,
 ),
 (_0x11e450.params["from"].value = _0x3d2ff8.getMatrix()));
 }
 if (_0x282770.params["subUnitId"] === _0x371d13.params["to"].subUnitId) {
 let _0x48da54 = new e.ObjectMatrix(_0x11e450.params["to"].value),
 _0x3dd278 = _0x48da54.getDataRange();
 if (
 z(
 { start: _0x1104a2.startRow, end: _0x1104a2.endRow },
 { start: _0x3dd278.startRow, end: _0x3dd278.endRow },
 ) ||
 z(
 { start: _0x2e2af4.startRow, end: _0x2e2af4.endRow },
 { start: _0x3dd278.startRow, end: _0x3dd278.endRow },
 )
 )
 return {
 error: Error(
 "move\x20row\x20is\x20conflict\x20with\x20move\x20range",
 ),
 };
 let _0x2d7197 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x1104a2.startRow, end: _0x1104a2.endRow },
 { start: _0x2e2af4.startRow, end: _0x2e2af4.endRow },
 { start: _0x3dd278.startRow, end: _0x3dd278.endRow },
 );
 if (_0x2d7197.length !== 0)
 return { error: Error("move row is conflict with move range") };
 (_0x2d7197.step !== 0 &&
 _0x48da54.moveRows(
 _0x1104a2.startRow,
 _0x1104a2.endRow - _0x1104a2.startRow + 1,
 _0x2e2af4.startRow,
 ),
 (_0x11e450.params["to"].value = _0x48da54.getMatrix()));
 }
 return { m1Prime: _0x49d3e9, m2Prime: _0x11e450 };
 },
 },
 qi = {
 m1: o.MoveRowsMutation["id"],
 m2: o.MoveRowsMutation["id"],
 handler(_0x2a5a05, _0x1b7429) {
 let _0x40e3b3 = { m1Prime: _0x2a5a05, m2Prime: _0x1b7429 };
 if (
 _0x2a5a05.params["unitId"] !== _0x1b7429.params["unitId"] ||
 _0x2a5a05.params["subUnitId"] !== _0x1b7429.params["subUnitId"]
 )
 return _0x40e3b3;
 let _0x32c87d = e.Tools["deepClone"](_0x2a5a05),
 _0x4750c6 = e.Tools["deepClone"](_0x1b7429),
 _0x24da3d = _0x1b7429.params["sourceRange"],
 _0x5c7daf = _0x1b7429.params["targetRange"],
 _0x6c3f55 = _0x2a5a05.params["sourceRange"],
 _0x449f6b = _0x2a5a05.params["targetRange"];
 if (
 _0x6c3f55.endRow >= _0x24da3d.startRow &&
 _0x6c3f55.startRow <= _0x24da3d.endRow
 )
 return { error: Error("move row is conflict with move row") };
 let _0x17d237 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x6c3f55.startRow, end: _0x6c3f55.endRow },
 { start: _0x449f6b.startRow, end: _0x449f6b.endRow },
 { start: _0x24da3d.startRow, end: _0x24da3d.endRow },
 ),
 _0x437698 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x6c3f55.startRow, end: _0x6c3f55.endRow },
 { start: _0x449f6b.startRow, end: _0x449f6b.endRow },
 { start: _0x5c7daf.startRow, end: _0x5c7daf.endRow },
 );
 _0x17d237 && _0x437698
 ? ((_0x4750c6.params["sourceRange"].startRow += _0x17d237.step),
 (_0x4750c6.params["sourceRange"].endRow +=
 _0x17d237.step + (_0x17d237.length || 0)),
 (_0x4750c6.params["targetRange"].startRow += _0x437698.step),
 (_0x4750c6.params["targetRange"].endRow +=
 _0x437698.step + (_0x437698.length || 0)))
 : (_0x4750c6.id = o.EmptyMutation["id"]);
 let _0x3b25f2 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x24da3d.startRow, end: _0x24da3d.endRow },
 { start: _0x5c7daf.startRow, end: _0x5c7daf.endRow },
 { start: _0x6c3f55.startRow, end: _0x6c3f55.endRow },
 ),
 _0x467f10 = (0, o.handleBaseMoveRowsCols)(
 { start: _0x24da3d.startRow, end: _0x24da3d.endRow },
 { start: _0x5c7daf.startRow, end: _0x5c7daf.endRow },
 { start: _0x449f6b.startRow, end: _0x449f6b.endRow },
 );
 return (
 _0x3b25f2 && _0x467f10
 ? ((_0x32c87d.params["sourceRange"].startRow += _0x3b25f2.step),
 (_0x32c87d.params["sourceRange"].endRow +=
 _0x3b25f2.step + (_0x3b25f2.length || 0)),
 (_0x32c87d.params["targetRange"].startRow += _0x467f10.step),
 (_0x32c87d.params["targetRange"].endRow +=
 _0x467f10.step + (_0x467f10.length || 0)))
 : (_0x32c87d.id = o.EmptyMutation["id"]),
 { m1Prime: _0x32c87d, m2Prime: _0x4750c6 }
 );
 },
 },
 Ji = {
 m1: o.MoveRowsMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler(_0x2942ed, _0x295b64) {
 let _0x5daa5a = { m1Prime: _0x2942ed, m2Prime: _0x295b64 };
 if (
 _0x2942ed.params["unitId"] !== _0x295b64.params["unitId"] ||
 _0x2942ed.params["subUnitId"] !== _0x295b64.params["subUnitId"]
 )
 return _0x5daa5a;
 let _0x5c2149 = e.Tools["deepClone"](_0x2942ed),
 _0x4b8ce6 = e.Tools["deepClone"](_0x295b64),
 { sourceRange: _0x2b127d, targetRange: _0x5ab7e6 } = _0x2942ed.params,
 _0x5e4597 = { start: _0x2b127d.startRow, end: _0x2b127d.endRow },
 _0x2b1e74 = { start: _0x5ab7e6.startRow, end: _0x5ab7e6.endRow };
 return _0x4b8ce6.params["ranges"].some((_0x47a349) => {
 let _0x1c6d64 = { start: _0x47a349.startRow, end: _0x47a349.endRow },
 _0xa86843 = z(_0x5e4597, _0x1c6d64),
 _0x41c8f8 = z(_0x2b1e74, _0x1c6d64);
 if (_0xa86843 || _0x41c8f8) return true;
 let _0x450e2f = (0, o.handleBaseMoveRowsCols)(
 _0x5e4597,
 _0x2b1e74,
 _0x1c6d64,
 );
 return _0x450e2f.length === 0
 ? ((_0x47a349.startRow += _0x450e2f.step),
 (_0x47a349.endRow += _0x450e2f.step),
 false)
 : true;
 })
 ? { error: Error("move row is conflict with remove numfmt") }
 : { m1Prime: _0x5c2149, m2Prime: _0x4b8ce6 };
 },
 },
 Yi = {
 m1: o.MoveRowsMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler(_0x11e932, _0x15a134) {
 let _0x3f7cd2 = e.Tools["deepClone"](_0x11e932),
 _0x47f42b = e.Tools["deepClone"](_0x15a134);
 if (
 _0x11e932.params["unitId"] !== _0x15a134.params["unitId"] ||
 _0x11e932.params["subUnitId"] !== _0x15a134.params["subUnitId"]
 )
 return { m1Prime: _0x3f7cd2, m2Prime: _0x47f42b };
 let _0x3fcc4c = _0x47f42b.params["ranges"].reduce(
 (_0x59af08, _0x52ebe5) => {
 let { sourceRange: _0x519bad, targetRange: _0x15a454 } =
 _0x11e932.params,
 _0x189c25 = { ..._0x52ebe5 };
 return (
 _0x519bad.endRow < _0x189c25.startRow &&
 _0x15a454.startRow > _0x189c25.endRow
 ? ((_0x189c25.startRow -=
 _0x519bad.endRow - _0x519bad.startRow + 1),
 (_0x189c25.endRow -= _0x519bad.endRow - _0x519bad.startRow + 1),
 O(_0x189c25) && _0x59af08.push(_0x189c25))
 : _0x519bad.startRow > _0x189c25.endRow &&
 _0x15a454.endRow < _0x189c25.startRow
 ? ((_0x189c25.startRow +=
 _0x519bad.endRow - _0x519bad.startRow + 1),
 (_0x189c25.endRow +=
 _0x519bad.endRow - _0x519bad.startRow + 1),
 O(_0x189c25) && _0x59af08.push(_0x189c25))
 : e.Rectangle["intersects"](_0x189c25, _0x519bad) ||
 e.Rectangle["intersects"](_0x189c25, _0x15a454) ||
 _0x59af08.push(_0x189c25),
 _0x59af08
 );
 },
 [],
 );
 return (
 (_0x47f42b.params["ranges"] = _0x3fcc4c),
 _0x47f42b.params["ranges"].length === 0 &&
 (_0x47f42b.id = o.EmptyMutation["id"]),
 { m1Prime: _0x3f7cd2, m2Prime: _0x47f42b }
 );
 },
 },
 Xi = {
 m1: o.MoveRowsMutation["id"],
 m2: o.ReorderRangeMutation["id"],
 handler(_0x2c5dc0, _0x42545f) {
 let _0x23205c = { m1Prime: _0x2c5dc0, m2Prime: _0x42545f };
 if (
 _0x2c5dc0.params["unitId"] !== _0x42545f.params["unitId"] ||
 _0x2c5dc0.params["subUnitId"] !== _0x42545f.params["subUnitId"]
 )
 return _0x23205c;
 let _0x4c5dff = Zi(
 _0x2c5dc0.params["sourceRange"],
 _0x2c5dc0.params["targetRange"],
 ),
 _0x41f4bb = e.Tools["deepClone"](_0x42545f),
 { range: _0x1245e5 } = _0x41f4bb.params,
 _0x11b97d = Array.from(
 { length: _0x1245e5.endRow - _0x1245e5.startRow + 1 },
 (_0x529aa4, _0x155239) => _0x155239 + _0x1245e5.startRow,
 ),
 _0x4801fd = {},
 _0x7bcc8a = {},
 _0x3f80b2 = Math.min(
 _0x2c5dc0.params["sourceRange"].startRow,
 _0x2c5dc0.params["targetRange"].startRow,
 ..._0x11b97d,
 ),
 _0x12a33f = Math.max(
 _0x2c5dc0.params["sourceRange"].endRow,
 _0x2c5dc0.params["targetRange"].endRow,
 ..._0x11b97d,
 );
 for (let _0x2a914d = _0x3f80b2; _0x2a914d <= _0x12a33f; _0x2a914d++) {
 let _0x1e0854 = _0x2a914d,
 _0x7f5372 = _0x42545f.params["order"][_0x2a914d] ?? _0x1e0854,
 _0x56d3e3 = _0x4c5dff(_0x7f5372);
 (_0x1e0854 !== _0x56d3e3 && (_0x4801fd[_0x1e0854] = _0x56d3e3),
 _0x7f5372 !== _0x56d3e3 && (_0x7bcc8a[_0x7f5372] = _0x56d3e3));
 }
 _0x41f4bb.params["order"] = _0x4801fd;
 let _0x5c97a7 = Object.keys(_0x4801fd).map(Number);
 ((_0x1245e5.startRow = Math.min(..._0x5c97a7)),
 (_0x1245e5.endRow = Math.max(..._0x5c97a7)));
 let _0x1c439a = [_0x2c5dc0],
 _0x504e99 = Object.keys(_0x7bcc8a).map(Number);
 return (
 _0x504e99.length > 0 &&
 _0x1c439a.unshift({
 id: o.ReorderRangeMutation["id"],
 params: {
 unitId: _0x2c5dc0.params["unitId"],
 subUnitId: _0x2c5dc0.params["subUnitId"],
 range: {
 startColumn: _0x42545f.params["range"].startColumn,
 endColumn: _0x42545f.params["range"].endColumn,
 startRow: Math.min(..._0x504e99),
 endRow: Math.max(..._0x504e99),
 },
 order: _0x7bcc8a,
 },
 }),
 { m1Prime: _0x1c439a, m2Prime: _0x41f4bb }
 );
 },
 },
 Zi = (_0x1b4bdd, _0x36c79a) => {
 let _0x214d0e = _0x1b4bdd.endRow - _0x1b4bdd.startRow + 1,
 _0x187b32 = _0x1b4bdd.startRow,
 _0x3d5724 = _0x36c79a.startRow;
 return (_0x4481f3) => {
 if (_0x187b32 <= _0x3d5724) {
 let _0x50dc72 = _0x36c79a.startRow - _0x1b4bdd.endRow - 1;
 if (_0x4481f3 >= _0x1b4bdd.startRow && _0x4481f3 <= _0x1b4bdd.endRow)
 return _0x4481f3 + _0x50dc72;
 if (_0x4481f3 > _0x1b4bdd.endRow && _0x4481f3 < _0x36c79a.startRow)
 return _0x4481f3 - _0x214d0e;
 }
 if (_0x187b32 > _0x3d5724) {
 let _0x2b8edb = _0x1b4bdd.startRow - _0x36c79a.startRow;
 if (_0x4481f3 >= _0x36c79a.startRow && _0x4481f3 < _0x1b4bdd.startRow)
 return _0x4481f3 + _0x214d0e;
 if (_0x4481f3 >= _0x1b4bdd.startRow && _0x4481f3 <= _0x1b4bdd.endRow)
 return _0x4481f3 - _0x2b8edb;
 }
 return _0x4481f3;
 };
 },
 Qi = {
 m1: o.MoveRowsMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler(_0x961fa6, _0x5437cb) {
 let _0x405c7b = { m1Prime: _0x961fa6, m2Prime: _0x5437cb };
 if (
 _0x961fa6.params["unitId"] !== _0x5437cb.params["unitId"] ||
 _0x961fa6.params["subUnitId"] !== _0x5437cb.params["subUnitId"]
 )
 return _0x405c7b;
 let _0x4ecafe = [e.Tools["deepClone"](_0x961fa6)],
 _0x3b5a16 = e.Tools["deepClone"](_0x5437cb),
 { sourceRange: _0x369d4f, targetRange: _0x29e50a } = _0x961fa6.params,
 _0x5edf0e = { start: _0x369d4f.startRow, end: _0x369d4f.endRow },
 _0x86ee1c = { start: _0x29e50a.startRow, end: _0x29e50a.endRow },
 { values: _0x4f8a9a } = _0x3b5a16.params,
 _0x56d32f = [],
 _0x215baa = false;
 for (let _0x3f1f32 in _0x4f8a9a) {
 let _0x32408a = _0x4f8a9a[_0x3f1f32];
 if (
 (_0x56d32f.push(..._0x32408a.ranges),
 _0x32408a.ranges["some"]((_0x12722e) => {
 let _0x5eacd5 = {
 start: _0x12722e.startRow,
 end: _0x12722e.endRow,
 },
 _0x55a401 = z(_0x5edf0e, _0x5eacd5),
 _0x50ca63 = z(_0x86ee1c, _0x5eacd5);
 if (_0x55a401 || _0x50ca63) return true;
 let _0x4f60d2 = (0, o.handleBaseMoveRowsCols)(
 _0x5edf0e,
 _0x86ee1c,
 _0x5eacd5,
 );
 return _0x4f60d2.length === 0
 ? (_0x4f60d2.step !== 0 && (_0x215baa = true),
 (_0x12722e.startRow += _0x4f60d2.step),
 (_0x12722e.endRow += _0x4f60d2.step),
 false)
 : true;
 }))
 )
 return { error: Error("move col is conflict with set numfmft") };
 }
 if (_0x215baa) {
 let _0xeeb29d = {
 id: o.RemoveNumfmtMutation["id"],
 params: {
 unitId: _0x5437cb.params["unitId"],
 subUnitId: _0x5437cb.params["subUnitId"],
 ranges: _0x56d32f,
 },
 };
 _0x4ecafe.push(_0xeeb29d, _0x3b5a16);
 }
 return { m1Prime: _0x4ecafe, m2Prime: _0x3b5a16 };
 },
 },
 $i = {
 m1: o.MoveRowsMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler(_0x582e80, _0xaf16b8) {
 let _0x29c571 = { m1Prime: _0x582e80, m2Prime: _0xaf16b8 };
 if (
 _0x582e80.params["unitId"] !== _0xaf16b8.params["unitId"] ||
 _0x582e80.params["subUnitId"] !== _0xaf16b8.params["subUnitId"]
 )
 return _0x29c571;
 let _0x348540 = [e.Tools["deepClone"](_0x582e80)],
 _0x235ef0 = e.Tools["deepClone"](_0xaf16b8),
 _0x2ca7b4 = new e["ObjectMatrix"](_0x235ef0.params["cellValue"]),
 { sourceRange: _0x480931, targetRange: _0x56a1aa } = _0x582e80.params,
 _0x5150f8 = _0x480931.startRow,
 _0x96b315 = _0x480931.endRow - _0x480931.startRow + 1,
 _0x581782 = _0x56a1aa.startRow;
 _0x2ca7b4.moveRows(_0x5150f8, _0x96b315, _0x581782);
 let _0x11d463 = new e["ObjectMatrix"](),
 _0x3b06e0 = false;
 if (
 (_0x2ca7b4.forValue((_0x3dff4e, _0x22c21e, _0x4d34e7) => {
 if (_0x4d34e7 && _0x4d34e7.f) {
 let _0x4b1028 = _0x4d34e7.f,
 _0x540c96 = false,
 _0x17e20e = R(
 _0x582e80.params["unitId"],
 _0x582e80.params["subUnitId"],
 _0x4b1028,
 (_0x13c7ee) => {
 let _0x3a41f2 = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x582e80.params["sourceRange"].startRow,
 end: _0x582e80.params["sourceRange"].endRow,
 },
 {
 start: _0x582e80.params["targetRange"].startRow,
 end: _0x582e80.params["targetRange"].endRow,
 },
 { start: _0x13c7ee.startRow, end: _0x13c7ee.endRow },
 );
 return (
 (_0x3a41f2.step !== 0 || _0x3a41f2.length !== 0) &&
 ((_0x540c96 = true),
 (_0x13c7ee.startRow += _0x3a41f2.step),
 (_0x13c7ee.endRow += _0x3a41f2.step + _0x3a41f2.length)),
 _0x13c7ee
 );
 },
 );
 _0x540c96 &&
 ((_0x3b06e0 = true),
 (_0x4d34e7.f = _0x17e20e),
 _0x11d463.setValue(_0x3dff4e, _0x22c21e, { ..._0x4d34e7 }));
 }
 }),
 _0x3b06e0)
 ) {
 let _0x3fcc6d = {
 id: o.SetRangeValuesMutation["id"],
 params: {
 unitId: _0xaf16b8.params["unitId"],
 subUnitId: _0xaf16b8.params["subUnitId"],
 cellValue: _0x11d463.getMatrix(),
 },
 };
 _0x348540.push(_0x3fcc6d);
 }
 return (
 (_0x235ef0.params["cellValue"] = _0x2ca7b4.getMatrix()),
 { m1Prime: _0x348540, m2Prime: _0x235ef0 }
 );
 },
 },
 ea = {
 m1: o.MoveRowsMutation["id"],
 m2: o.SetRowDataMutation["id"],
 handler(_0x2c5e63, _0x1bc3a4) {
 let _0x3787d6 = { m1Prime: _0x2c5e63, m2Prime: _0x1bc3a4 };
 if (
 _0x2c5e63.params["unitId"] !== _0x1bc3a4.params["unitId"] ||
 _0x2c5e63.params["subUnitId"] !== _0x1bc3a4.params["subUnitId"]
 )
 return _0x3787d6;
 let _0xc4b881 = e.Tools["deepClone"](_0x2c5e63),
 _0x1b4485 = e.Tools["deepClone"](_0x1bc3a4),
 { rowData: _0x238c81 } = _0x1b4485.params,
 { sourceRange: _0xbf893, targetRange: _0x42f5cf } = _0x2c5e63.params;
 return (
 (0, e.moveMatrixArray)(
 _0xbf893.startRow,
 _0xbf893.endRow - _0xbf893.startRow + 1,
 _0x42f5cf.startRow,
 _0x238c81,
 ),
 { m1Prime: _0xc4b881, m2Prime: _0x1b4485 }
 );
 },
 },
 ta = {
 m1: o.MoveRowsMutation["id"],
 m2: o.SetRowHiddenMutation["id"],
 handler(_0x4219b7, _0x39705c) {
 let _0x4a48b1 = { m1Prime: _0x4219b7, m2Prime: _0x39705c };
 if (
 _0x4219b7.params["unitId"] !== _0x39705c.params["unitId"] ||
 _0x4219b7.params["subUnitId"] !== _0x39705c.params["subUnitId"]
 )
 return _0x4a48b1;
 let _0x1afaa2 = e.Tools["deepClone"](_0x4219b7),
 _0x1473d0 = e.Tools["deepClone"](_0x39705c),
 { ranges: _0x5cfd47 } = _0x1473d0.params,
 { sourceRange: _0x13c55e, targetRange: _0x34e859 } = _0x4219b7.params,
 _0x58b0b9 = { start: _0x13c55e.startRow, end: _0x13c55e.endRow },
 _0xbc56b6 = { start: _0x34e859.startRow, end: _0x34e859.endRow };
 return _0x5cfd47.some((_0x4b2151) => {
 let _0x2ec507 = { start: _0x4b2151.startRow, end: _0x4b2151.endRow },
 _0x212cda = z(_0x58b0b9, _0x2ec507),
 _0x455ace = z(_0xbc56b6, _0x2ec507);
 if (_0x212cda || _0x455ace) return true;
 let _0x59239e = (0, o.handleBaseMoveRowsCols)(
 _0x58b0b9,
 _0xbc56b6,
 _0x2ec507,
 );
 return _0x59239e.length === 0
 ? ((_0x4b2151.startRow += _0x59239e.step),
 (_0x4b2151.endRow += _0x59239e.step),
 false)
 : true;
 })
 ? { error: Error("move row is conflict with set row hidden") }
 : { m1Prime: _0x1afaa2, m2Prime: _0x1473d0 };
 },
 },
 na = {
 m1: o.MoveRowsMutation["id"],
 m2: o.SetRowVisibleMutation["id"],
 handler(_0x4018a0, _0x27c585) {
 let _0x5d96c8 = { m1Prime: _0x4018a0, m2Prime: _0x27c585 };
 if (
 _0x4018a0.params["unitId"] !== _0x27c585.params["unitId"] ||
 _0x4018a0.params["subUnitId"] !== _0x27c585.params["subUnitId"]
 )
 return _0x5d96c8;
 let _0x1d3076 = e.Tools["deepClone"](_0x4018a0),
 _0x3f52d7 = e.Tools["deepClone"](_0x27c585),
 { ranges: _0x5c98b6 } = _0x3f52d7.params,
 { sourceRange: _0x1092b1, targetRange: _0x4cc359 } = _0x4018a0.params,
 _0x74edcf = { start: _0x1092b1.startRow, end: _0x1092b1.endRow },
 _0x5f038a = { start: _0x4cc359.startRow, end: _0x4cc359.endRow };
 return _0x5c98b6.some((_0x5bd310) => {
 let _0x8fe1bb = { start: _0x5bd310.startRow, end: _0x5bd310.endRow },
 _0x2917b8 = z(_0x74edcf, _0x8fe1bb),
 _0x244b86 = z(_0x5f038a, _0x8fe1bb);
 if (_0x2917b8 || _0x244b86) return true;
 let _0x11cfa9 = (0, o.handleBaseMoveRowsCols)(
 _0x74edcf,
 _0x5f038a,
 _0x8fe1bb,
 );
 return _0x11cfa9.length === 0
 ? ((_0x5bd310.startRow += _0x11cfa9.step),
 (_0x5bd310.endRow += _0x11cfa9.step),
 false)
 : true;
 })
 ? { error: Error("move row is conflict with set row visible") }
 : { m1Prime: _0x1d3076, m2Prime: _0x3f52d7 };
 },
 },
 ra = {
 m1: o.MoveRowsMutation["id"],
 m2: o.SetSelectionsOperation["id"],
 handler(_0x18ce38, _0x375540) {
 let _0x5b19e9 = { m1Prime: [], m2Prime: [] };
 if (
 _0x18ce38.params["unitId"] !== _0x375540.params["unitId"] ||
 _0x18ce38.params["subUnitId"] !== _0x375540.params["subUnitId"]
 )
 return _0x5b19e9;
 let _0x464680 = e.Tools["deepClone"](_0x375540),
 _0x4581e3 = false;
 return (
 _0x464680.params["selections"].forEach((_0x267648) => {
 let { range: _0x10fc53, primary: _0x238888 } = _0x267648,
 _0x290655 = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x18ce38.params["sourceRange"].startRow,
 end: _0x18ce38.params["sourceRange"].endRow,
 },
 {
 start: _0x18ce38.params["targetRange"].startRow,
 end: _0x18ce38.params["targetRange"].endRow,
 },
 { start: _0x10fc53.startRow, end: _0x10fc53.endRow },
 );
 if (_0x290655.length || _0x290655.step) {
 if (
 ((_0x10fc53.startRow += _0x290655.step),
 (_0x10fc53.endRow += _0x290655.step + (_0x290655.length || 0)),
 _0x238888)
 ) {
 let _0x5d37d0 = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x18ce38.params["sourceRange"].startRow,
 end: _0x18ce38.params["sourceRange"].endRow,
 },
 {
 start: _0x18ce38.params["targetRange"].startRow,
 end: _0x18ce38.params["targetRange"].endRow,
 },
 { start: _0x238888.startRow, end: _0x238888.endRow },
 );
 (_0x5d37d0.length || _0x5d37d0.step) &&
 ((_0x238888.startRow += _0x5d37d0.step),
 (_0x238888.endRow += _0x5d37d0.step),
 (_0x238888.actualRow += _0x5d37d0.step));
 }
 _0x4581e3 = true;
 }
 }),
 _0x4581e3 && _0x5b19e9.m2Prime["push"](_0x464680),
 _0x5b19e9
 );
 },
 },
 ia = {
 m1: o.MoveRowsMutation["id"],
 m2: f.SetSheetsFilterRangeMutation["id"],
 handler(_0x288f5a, _0x4a8e1e) {
 let _0x2b5fdb = { m1Prime: [_0x288f5a], m2Prime: [_0x4a8e1e] };
 if (
 _0x288f5a.params["unitId"] !== _0x4a8e1e.params["unitId"] ||
 _0x288f5a.params["subUnitId"] !== _0x4a8e1e.params["subUnitId"]
 )
 return _0x2b5fdb;
 let _0x1823ab = e.Tools["deepClone"](_0x288f5a),
 _0x548be5 = e.Tools["deepClone"](_0x4a8e1e),
 _0x55719c = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x288f5a.params["sourceRange"].startRow,
 end: _0x288f5a.params["sourceRange"].endRow,
 },
 {
 start: _0x288f5a.params["targetRange"].startRow,
 end: _0x288f5a.params["targetRange"].endRow,
 },
 {
 start: _0x4a8e1e.params["range"].startRow,
 end: _0x4a8e1e.params["range"].endRow,
 },
 );
 return (
 (_0x548be5.params["range"].startRow += _0x55719c.step),
 (_0x548be5.params["range"].endRow += _0x55719c.step + _0x55719c.length),
 { m1Prime: [_0x548be5, _0x1823ab], m2Prime: [_0x548be5] }
 );
 },
 },
 aa = {
 m1: o.MoveRowsMutation["id"],
 m2: o.SetWorksheetRowAutoHeightMutation["id"],
 handler(_0x524a59, _0x566367) {
 let _0x35be35 = { m1Prime: _0x524a59, m2Prime: _0x566367 };
 if (
 _0x524a59.params["unitId"] !== _0x566367.params["unitId"] ||
 _0x524a59.params["subUnitId"] !== _0x566367.params["subUnitId"]
 )
 return _0x35be35;
 let _0x23bdf5 = e.Tools["deepClone"](_0x524a59),
 _0x52f240 = e.Tools["deepClone"](_0x566367),
 { rowsAutoHeightInfo: _0x445fc4 } = _0x52f240.params,
 { sourceRange: _0x207104, targetRange: _0x35167c } = _0x524a59.params,
 _0x3b54df = { start: _0x207104.startRow, end: _0x207104.endRow },
 _0x5337f7 = { start: _0x35167c.startRow, end: _0x35167c.endRow };
 return _0x445fc4.some((_0x27180a) => {
 let _0x1406f5 = { start: _0x27180a.row, end: _0x27180a.row },
 _0x26f3c8 = (0, o.handleBaseMoveRowsCols)(
 _0x3b54df,
 _0x5337f7,
 _0x1406f5,
 );
 return _0x26f3c8.length === 0
 ? ((_0x27180a.row += _0x26f3c8.step), false)
 : true;
 })
 ? {
 error: Error(
 "move row is conflict with set worksheet row auto height",
 ),
 }
 : { m1Prime: _0x23bdf5, m2Prime: _0x52f240 };
 },
 },
 oa = {
 m1: o.MoveRowsMutation["id"],
 m2: o.SetWorksheetRowHeightMutation["id"],
 handler(_0x5585c2, _0x5d1513) {
 let _0x5b1a3d = { m1Prime: _0x5585c2, m2Prime: _0x5d1513 };
 if (
 _0x5585c2.params["unitId"] !== _0x5d1513.params["unitId"] ||
 _0x5585c2.params["subUnitId"] !== _0x5d1513.params["subUnitId"]
 )
 return _0x5b1a3d;
 let _0xd10d6a = e.Tools["deepClone"](_0x5585c2),
 _0x3d9951 = e.Tools["deepClone"](_0x5d1513),
 { ranges: _0x4212b2, rowHeight: _0xf39cfa } = _0x3d9951.params,
 { sourceRange: _0x1d4a5d, targetRange: _0x3000f5 } = _0x5585c2.params,
 _0x2e83d2 = { start: _0x1d4a5d.startRow, end: _0x1d4a5d.endRow },
 _0x3b94a2 = { start: _0x3000f5.startRow, end: _0x3000f5.endRow };
 return _0x4212b2.some((_0x3f708c) => {
 let _0x8e5aa4 = { start: _0x3f708c.startRow, end: _0x3f708c.endRow },
 _0xdd6bb0 = (0, o.handleBaseMoveRowsCols)(
 _0x2e83d2,
 _0x3b94a2,
 _0x8e5aa4,
 );
 return _0xdd6bb0.length === 0
 ? ((_0x3f708c.startRow += _0xdd6bb0.step),
 (_0x3f708c.endRow += _0xdd6bb0.step),
 false)
 : true;
 })
 ? { error: Error("move row is conflict with set worksheet row height") }
 : (typeof _0xf39cfa != "number" &&
 (0, e.moveMatrixArray)(
 _0x1d4a5d.startRow,
 _0x1d4a5d.endRow - _0x1d4a5d.startRow + 1,
 _0x3000f5.startRow,
 _0xf39cfa,
 ),
 { m1Prime: _0xd10d6a, m2Prime: _0x3d9951 });
 },
 },
 sa = {
 m1: o.MoveRowsMutation["id"],
 m2: o.SetWorksheetRowIsAutoHeightMutation["id"],
 handler(_0x43f6a0, _0x3b66b4) {
 let _0x1b8909 = { m1Prime: _0x43f6a0, m2Prime: _0x3b66b4 };
 if (
 _0x43f6a0.params["unitId"] !== _0x3b66b4.params["unitId"] ||
 _0x43f6a0.params["subUnitId"] !== _0x3b66b4.params["subUnitId"]
 )
 return _0x1b8909;
 let _0x1e0311 = e.Tools["deepClone"](_0x43f6a0),
 _0x1a7c1e = e.Tools["deepClone"](_0x3b66b4),
 { ranges: _0x3ab867, autoHeightInfo: _0x54456f } = _0x1a7c1e.params,
 { sourceRange: _0x4a0ada, targetRange: _0x4c1c6f } = _0x43f6a0.params,
 _0x23f76c = { start: _0x4a0ada.startRow, end: _0x4a0ada.endRow },
 _0x42c81a = { start: _0x4c1c6f.startRow, end: _0x4c1c6f.endRow };
 return _0x3ab867.some((_0x14679f) => {
 let _0x597027 = { start: _0x14679f.startRow, end: _0x14679f.endRow },
 _0x46c367 = (0, o.handleBaseMoveRowsCols)(
 _0x23f76c,
 _0x42c81a,
 _0x597027,
 );
 return _0x46c367.length === 0
 ? ((_0x14679f.startRow += _0x46c367.step),
 (_0x14679f.endRow += _0x46c367.step),
 false)
 : true;
 })
 ? {
 error: Error(
 "move row is conflict with set worksheet row is auto height",
 ),
 }
 : (typeof _0x54456f != "number" &&
 (0, e.moveMatrixArray)(
 _0x4a0ada.startRow,
 _0x4a0ada.endRow - _0x4a0ada.startRow + 1,
 _0x4c1c6f.startRow,
 _0x54456f,
 ),
 { m1Prime: _0x1e0311, m2Prime: _0x1a7c1e });
 },
 },
 ca = {
 m1: o.MoveRowsMutation["id"],
 m2: c.UpdateCommentRefMutation["id"],
 handler: (_0x4cc3fb, _0x520604) => {
 let _0x297d91 = { m1Prime: _0x4cc3fb, m2Prime: _0x520604 };
 if (
 _0x4cc3fb.params["unitId"] !== _0x520604.params["unitId"] ||
 _0x4cc3fb.params["subUnitId"] !== _0x520604.params["subUnitId"]
 )
 return _0x297d91;
 let _0x31551b = V(_0x520604, {
 id: o.MoveRowsCommand["id"],
 params: {
 unitId: _0x4cc3fb.params["unitId"],
 subUnitId: _0x4cc3fb.params["subUnitId"],
 fromRange: _0x4cc3fb.params["sourceRange"],
 toRange: _0x4cc3fb.params["targetRange"],
 },
 });
 return {
 m1Prime: [_0x4cc3fb, ..._0x31551b],
 m2Prime: [_0x520604, ..._0x31551b],
 };
 },
 },
 la = {
 m1: o.MoveRowsMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x267e55, _0x3581a0) => {
 let _0x4d9b3b = { m1Prime: _0x267e55, m2Prime: _0x3581a0 };
 if (
 _0x267e55.params["unitId"] !== _0x3581a0.params["unitId"] ||
 _0x3581a0.params["subUnitId"] !== _0x267e55.params["subUnitId"]
 )
 return _0x4d9b3b;
 let _0x1e2938 = H(_0x3581a0, {
 id: o.MoveRowsCommand["id"],
 params: {
 fromRange: _0x267e55.params["sourceRange"],
 toRange: _0x267e55.params["targetRange"],
 },
 });
 return {
 m1Prime: [_0x267e55, ..._0x1e2938],
 m2Prime: [_0x3581a0, ..._0x1e2938],
 };
 },
 },
 ua = {
 m1: o.RemoveColMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x23acf2, _0x54104d) => {
 let _0x3db191 = { m1Prime: _0x23acf2, m2Prime: _0x54104d };
 if (
 _0x23acf2.params["unitId"] !== _0x54104d.params["unitId"] ||
 _0x23acf2.params["subUnitId"] !== _0x54104d.params["subUnitId"]
 )
 return _0x3db191;
 let _0x511889 = P(_0x54104d, {
 id: o.RemoveColCommand["id"],
 params: {
 unitId: _0x23acf2.params["unitId"],
 subUnitId: _0x23acf2.params["subUnitId"],
 range: _0x23acf2.params["range"],
 },
 });
 return {
 m1Prime: [_0x23acf2, ..._0x511889],
 m2Prime: [_0x54104d, ..._0x511889],
 };
 },
 },
 da = {
 m1: o.RemoveColMutation["id"],
 m2: u.AddDataValidationMutation["id"],
 handler(_0x44cef8, _0x236156) {
 let _0x3d6217 = { m1Prime: _0x44cef8, m2Prime: _0x236156 };
 if (
 _0x44cef8.params["unitId"] !== _0x236156.params["unitId"] ||
 _0x44cef8.params["subUnitId"] !== _0x236156.params["subUnitId"]
 )
 return _0x3d6217;
 let _0x25fb01 = B(_0x236156, {
 id: o.RemoveColCommand["id"],
 params: { range: _0x44cef8.params["range"] },
 });
 return {
 m1Prime: [_0x44cef8, ..._0x25fb01],
 m2Prime: [_0x236156, ..._0x25fb01],
 };
 },
 },
 fa = {
 m1: o.RemoveColMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x2486e2, _0x1c2f10) {
 let _0x1eb4f2 = un.handler(_0x1c2f10, _0x2486e2);
 return S(_0x1eb4f2)
 ? { m1Prime: _0x1eb4f2.m2Prime, m2Prime: _0x1eb4f2.m1Prime }
 : _0x1eb4f2;
 },
 },
 pa = {
 m1: o.RemoveColMutation["id"],
 m2: o.MoveColsMutation["id"],
 handler(_0x144bf9, _0x493bcd) {
 let _0x1639f2 = { m1Prime: _0x144bf9, m2Prime: _0x493bcd };
 if (
 _0x144bf9.params["unitId"] !== _0x493bcd.params["unitId"] ||
 _0x144bf9.params["subUnitId"] !== _0x493bcd.params["subUnitId"]
 )
 return _0x1639f2;
 let _0x116158 = e.Tools["deepClone"](_0x144bf9),
 _0x1089b6 = e.Tools["deepClone"](_0x493bcd);
 if (
 (_0x144bf9.params["range"].startColumn <=
 _0x493bcd.params["sourceRange"].endColumn &&
 _0x144bf9.params["range"].endColumn >=
 _0x493bcd.params["sourceRange"].startColumn) ||
 (_0x144bf9.params["range"].startColumn <=
 _0x493bcd.params["targetRange"].endColumn &&
 _0x144bf9.params["range"].endColumn >=
 _0x493bcd.params["targetRange"].startColumn)
 )
 return { error: Error("remove col is conflict with move col") };
 let _0x64a474 = (0, o.handleBaseRemoveRange)(
 F(_0x144bf9.params["range"]),
 F(_0x493bcd.params["sourceRange"]),
 ),
 _0x449c83 = (0, o.handleBaseRemoveRange)(
 F(_0x144bf9.params["range"]),
 F(_0x493bcd.params["targetRange"]),
 );
 _0x64a474 && _0x449c83
 ? ((_0x1089b6.params["sourceRange"].startColumn += _0x64a474.step),
 (_0x1089b6.params["sourceRange"].endColumn +=
 _0x64a474.step + (_0x64a474.length || 0)),
 (_0x1089b6.params["targetRange"].startColumn += _0x449c83.step),
 (_0x1089b6.params["targetRange"].endColumn +=
 _0x449c83.step + (_0x449c83.length || 0)))
 : (_0x1089b6.id = o.EmptyMutation["id"]);
 let _0x3b45a2 = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x493bcd.params["sourceRange"].startColumn,
 end: _0x493bcd.params["sourceRange"].endColumn,
 },
 {
 start: _0x493bcd.params["targetRange"].startColumn,
 end: _0x493bcd.params["targetRange"].endColumn,
 },
 {
 start: _0x144bf9.params["range"].startColumn,
 end: _0x144bf9.params["range"].endColumn,
 },
 );
 if (_0x3b45a2) {
 let { step: _0x28135d, length: _0x1599f7 } = _0x3b45a2;
 ((_0x116158.params["range"].startColumn += _0x28135d),
 (_0x116158.params["range"].endColumn +=
 _0x28135d + (_0x1599f7 || 0)));
 } else
 ((_0x116158.params["range"].startColumn = 0),
 (_0x116158.params["range"].endColumn = -1));
 return { m1Prime: _0x116158, m2Prime: _0x1089b6 };
 },
 },
 ma = {
 m1: o.RemoveColMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x92a2b6, _0xbc22fd) {
 let _0x40a6d8 = { m1Prime: _0x92a2b6, m2Prime: _0xbc22fd };
 if (
 _0x92a2b6.params["unitId"] !== _0xbc22fd.params["unitId"] ||
 (_0x92a2b6.params["subUnitId"] !== _0xbc22fd.params["from"].subUnitId &&
 _0x92a2b6.params["subUnitId"] !== _0xbc22fd.params["to"].subUnitId)
 )
 return _0x40a6d8;
 let _0x44ae1e = e.Tools["deepClone"](_0x92a2b6),
 _0x10ad3f = e.Tools["deepClone"](_0xbc22fd),
 { startColumn: _0x4194f6, endColumn: _0x9f923a } =
 _0x92a2b6.params["range"];
 if (
 _0x92a2b6.params["subUnitId"] === _0xbc22fd.params["from"].subUnitId
 ) {
 let _0x34d0c1 = new e.ObjectMatrix(_0x10ad3f.params["from"].value),
 { startColumn: _0x21de90, endColumn: _0x3e66dc } =
 _0x34d0c1.getDataRange();
 if (_0x21de90 <= _0x9f923a && _0x3e66dc >= _0x4194f6)
 return {
 error: Error(
 "Remove-cols\x20has\x20conflicts\x20with\x20move-range",
 ),
 };
 (_0x9f923a < _0x21de90 &&
 _0x34d0c1.removeColumns(_0x4194f6, _0x9f923a - _0x4194f6 + 1),
 (_0x10ad3f.params["from"].value = _0x34d0c1.getMatrix()));
 }
 if (_0x92a2b6.params["subUnitId"] === _0xbc22fd.params["to"].subUnitId) {
 let _0x4e8984 = new e["ObjectMatrix"](_0x10ad3f.params["to"].value),
 { startColumn: _0x1006ba, endColumn: _0x4217da } =
 _0x4e8984.getDataRange();
 if (_0x1006ba <= _0x9f923a && _0x4217da >= _0x4194f6)
 return {
 error: Error(
 "Remove-cols\x20has\x20conflicts\x20with\x20move-range",
 ),
 };
 (_0x9f923a < _0x1006ba &&
 _0x4e8984.removeColumns(_0x4194f6, _0x9f923a - _0x4194f6 + 1),
 (_0x10ad3f.params["to"].value = _0x4e8984.getMatrix()));
 }
 return { m1Prime: _0x44ae1e, m2Prime: _0x10ad3f };
 },
 },
 ha = {
 m1: o.RemoveColMutation["id"],
 m2: o.RemoveColMutation["id"],
 handler(_0x2a2b0f, _0x5b579c) {
 let _0x36e074 = { m1Prime: _0x2a2b0f, m2Prime: _0x5b579c };
 if (
 _0x2a2b0f.params["unitId"] !== _0x5b579c.params["unitId"] ||
 _0x2a2b0f.params["subUnitId"] !== _0x5b579c.params["subUnitId"]
 )
 return _0x36e074;
 let _0x1bf1ce = e.Tools["deepClone"](_0x2a2b0f),
 _0x1d7727 = e.Tools["deepClone"](_0x5b579c),
 _0x504040 = (0, o.handleBaseRemoveRange)(
 _0x2a2b0f.params["range"],
 _0x5b579c.params["range"],
 );
 if (_0x504040) {
 let { step: _0x3ce07c, length: _0x2966fc } = _0x504040;
 ((_0x1d7727.params["range"].startColumn += _0x3ce07c),
 (_0x1d7727.params["range"].endColumn +=
 _0x3ce07c + (_0x2966fc || 0)));
 } else _0x1d7727.id = o.EmptyMutation["id"];
 let _0x4e4ddd = (0, o.handleBaseRemoveRange)(
 _0x5b579c.params["range"],
 _0x2a2b0f.params["range"],
 );
 if (_0x4e4ddd) {
 let { step: _0x16f9e5, length: _0xdcae44 } = _0x4e4ddd;
 ((_0x1bf1ce.params["range"].startColumn += _0x16f9e5),
 (_0x1bf1ce.params["range"].endColumn +=
 _0x16f9e5 + (_0xdcae44 || 0)));
 } else _0x1bf1ce.id = o.EmptyMutation["id"];
 return { m1Prime: _0x1bf1ce, m2Prime: _0x1d7727 };
 },
 },
 ga = {
 m1: o.RemoveColMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler(_0x2d4c80, _0x2826d9) {
 let _0xbeb2f8 = { m1Prime: _0x2d4c80, m2Prime: _0x2826d9 };
 if (
 _0x2d4c80.params["unitId"] !== _0x2826d9.params["unitId"] ||
 _0x2d4c80.params["subUnitId"] !== _0x2826d9.params["subUnitId"]
 )
 return _0xbeb2f8;
 let _0xfd7728 = e.Tools["deepClone"](_0x2d4c80),
 _0x2d1827 = e.Tools["deepClone"](_0x2826d9),
 { ranges: _0x50ef9f } = _0x2d1827.params;
 return _0x50ef9f.some((_0x49dafa) => {
 let _0x56d5d4 = (0, o.handleBaseRemoveRange)(
 F(_0x2d4c80.params["range"]),
 F(_0x49dafa),
 );
 return _0x56d5d4 === null || _0x56d5d4.length !== 0
 ? true
 : ((_0x49dafa.startColumn += _0x56d5d4.step),
 (_0x49dafa.endColumn += _0x56d5d4.step),
 false);
 })
 ? {
 error: Error(
 "remove\x20col\x20is\x20conflict\x20with\x20remove\x20numfmt",
 ),
 }
 : { m1Prime: _0xfd7728, m2Prime: _0x2d1827 };
 },
 },
 _a = {
 m1: o.RemoveColMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler(_0x4745b6, _0x4f0a99) {
 let _0x2190c7 = e.Tools["deepClone"](_0x4745b6),
 _0x395d98 = e.Tools["deepClone"](_0x4f0a99);
 if (
 _0x4745b6.params["unitId"] !== _0x4f0a99.params["unitId"] ||
 _0x4745b6.params["subUnitId"] !== _0x4f0a99.params["subUnitId"]
 )
 return { m1Prime: _0x2190c7, m2Prime: _0x395d98 };
 let _0x323188 = _0x395d98.params["ranges"].reduce(
 (_0x39d628, _0x802b87) => {
 let _0x295fe4 = _0x2190c7.params["range"],
 _0x35cbe8 = _0x295fe4.endColumn - _0x295fe4.startColumn + 1,
 _0x59b72e = { ..._0x802b87 };
 return (
 _0x295fe4.startColumn > _0x802b87.endColumn
 ? (_0x59b72e = { ..._0x802b87 })
 : _0x295fe4.startColumn >= _0x802b87.startColumn &&
 _0x295fe4.startColumn <= _0x802b87.endColumn &&
 _0x295fe4.endColumn > _0x802b87.endColumn
 ? ((_0x59b72e.endColumn = _0x295fe4.startColumn - 1),
 _0x295fe4.startColumn === _0x802b87.startColumn &&
 (_0x59b72e = null))
 : _0x295fe4.startColumn > _0x802b87.startColumn &&
 _0x295fe4.endColumn < _0x802b87.endColumn
 ? (_0x59b72e.endColumn = _0x802b87.endColumn - _0x35cbe8)
 : _0x295fe4.startColumn < _0x802b87.startColumn &&
 _0x295fe4.endColumn >= _0x802b87.startColumn &&
 _0x295fe4.endColumn <= _0x802b87.endColumn
 ? ((_0x59b72e.startColumn = _0x295fe4.startColumn),
 (_0x59b72e.endColumn = _0x802b87.endColumn - _0x35cbe8),
 _0x295fe4.endColumn === _0x802b87.endColumn &&
 (_0x59b72e = null))
 : _0x295fe4.startColumn <= _0x802b87.startColumn &&
 _0x295fe4.endColumn >= _0x802b87.endColumn
 ? (_0x59b72e = null)
 : _0x295fe4.endColumn < _0x802b87.startColumn &&
 ((_0x59b72e.startColumn =
 _0x802b87.startColumn - _0x35cbe8),
 (_0x59b72e.endColumn =
 _0x802b87.endColumn - _0x35cbe8)),
 _0x59b72e &&
 (_0x59b72e.startRow !== _0x59b72e.endRow ||
 _0x59b72e.startColumn !== _0x59b72e.endColumn) &&
 _0x39d628.push(_0x59b72e),
 _0x39d628
 );
 },
 [],
 );
 return (
 (_0x395d98.params["ranges"] = _0x323188),
 { m1Prime: _0x2190c7, m2Prime: _0x395d98 }
 );
 },
 },
 va = {
 m1: o.RemoveColMutation["id"],
 m2: o.ReorderRangeMutation["id"],
 handler(_0x3678be, _0x45b878) {
 let _0x25bd00 = { m1Prime: _0x3678be, m2Prime: _0x45b878 };
 if (
 _0x3678be.params["unitId"] !== _0x45b878.params["unitId"] ||
 _0x3678be.params["subUnitId"] !== _0x45b878.params["subUnitId"]
 )
 return _0x25bd00;
 let _0x367b5d = (0, o.handleBaseRemoveRange)(
 F(_0x3678be.params["range"]),
 F(_0x45b878.params["range"]),
 );
 if (!_0x367b5d) return { m1Prime: _0x3678be, m2Prime: [] };
 let _0x24154d = e.Tools["deepClone"](_0x45b878);
 return (
 (_0x24154d.params["range"].startColumn += _0x367b5d.step),
 (_0x24154d.params["range"].endColumn +=
 _0x367b5d.step + (_0x367b5d.length || 0)),
 { m1Prime: _0x3678be, m2Prime: _0x24154d }
 );
 },
 },
 ya = {
 m1: o.RemoveColMutation["id"],
 m2: o.SetColDataMutation["id"],
 handler(_0x49d643, _0xe9cdc0) {
 let _0x5df7a9 = { m1Prime: _0x49d643, m2Prime: _0xe9cdc0 };
 if (
 _0x49d643.params["unitId"] !== _0xe9cdc0.params["unitId"] ||
 _0x49d643.params["subUnitId"] !== _0xe9cdc0.params["subUnitId"]
 )
 return _0x5df7a9;
 let _0x193117 = e.Tools["deepClone"](_0x49d643),
 _0x43d9bd = e.Tools["deepClone"](_0xe9cdc0),
 { columnData: _0x2869ab } = _0x43d9bd.params;
 return (
 (0, e.spliceArray)(
 _0x49d643.params["range"].startColumn,
 _0x49d643.params["range"].endColumn -
 _0x49d643.params["range"].startColumn +
 1,
 _0x2869ab,
 ),
 { m1Prime: _0x193117, m2Prime: _0x43d9bd }
 );
 },
 },
 ba = {
 m1: o.RemoveColMutation["id"],
 m2: o.SetColHiddenMutation["id"],
 handler(_0x1bbb95, _0x2da6b3) {
 let _0xe596dc = { m1Prime: _0x1bbb95, m2Prime: _0x2da6b3 };
 if (
 _0x1bbb95.params["unitId"] !== _0x2da6b3.params["unitId"] ||
 _0x1bbb95.params["subUnitId"] !== _0x2da6b3.params["subUnitId"]
 )
 return _0xe596dc;
 let _0x31ebeb = e.Tools["deepClone"](_0x1bbb95),
 _0x4957a3 = e.Tools["deepClone"](_0x2da6b3),
 { ranges: _0x689b22 } = _0x4957a3.params;
 return (
 _0x689b22.forEach((_0xbe5353) => {
 let _0x10e791 = (0, o.handleBaseRemoveRange)(
 F(_0x1bbb95.params["range"]),
 _0xbe5353,
 );
 _0x10e791 == null
 ? (_0x4957a3.id = o.EmptyMutation["id"])
 : ((_0xbe5353.startColumn += _0x10e791.step),
 (_0xbe5353.endColumn += _0x10e791.step + _0x10e791.length));
 }),
 { m1Prime: _0x31ebeb, m2Prime: _0x4957a3 }
 );
 },
 },
 xa = {
 m1: o.RemoveColMutation["id"],
 m2: o.SetColVisibleMutation["id"],
 handler(_0x5dc6da, _0x2e4473) {
 let _0x15c4c8 = { m1Prime: _0x5dc6da, m2Prime: _0x2e4473 };
 if (
 _0x5dc6da.params["unitId"] !== _0x2e4473.params["unitId"] ||
 _0x5dc6da.params["subUnitId"] !== _0x2e4473.params["subUnitId"]
 )
 return _0x15c4c8;
 let _0x1caacd = e.Tools["deepClone"](_0x5dc6da),
 _0x5e6ed6 = e.Tools["deepClone"](_0x2e4473),
 { ranges: _0x45ffdb } = _0x5e6ed6.params;
 return (
 _0x45ffdb.forEach((_0x411614) => {
 let _0x20c4b6 = (0, o.handleBaseRemoveRange)(
 F(_0x5dc6da.params["range"]),
 _0x411614,
 );
 _0x20c4b6 == null
 ? (_0x5e6ed6.id = o.EmptyMutation["id"])
 : ((_0x411614.startColumn += _0x20c4b6.step),
 (_0x411614.endColumn += _0x20c4b6.step + _0x20c4b6.length));
 }),
 { m1Prime: _0x1caacd, m2Prime: _0x5e6ed6 }
 );
 },
 },
 Sa = {
 m1: o.RemoveColMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler(_0x12c69b, _0x44c9d3) {
 let _0x1cce88 = { m1Prime: _0x12c69b, m2Prime: _0x44c9d3 };
 if (
 _0x12c69b.params["unitId"] !== _0x44c9d3.params["unitId"] ||
 _0x12c69b.params["subUnitId"] !== _0x44c9d3.params["subUnitId"]
 )
 return _0x1cce88;
 let _0x2c3717 = [e.Tools["deepClone"](_0x12c69b)],
 _0x3ed734 = e.Tools["deepClone"](_0x44c9d3),
 { values: _0x4b4867 } = _0x3ed734.params,
 _0x44826e = [],
 _0x1829c5 = false;
 for (let _0x1e0c0a in _0x4b4867) {
 let _0x4e6fc8 = _0x4b4867[_0x1e0c0a];
 if (
 (_0x44826e.push(..._0x4e6fc8.ranges),
 _0x4e6fc8.ranges["some"]((_0x3a1600) => {
 let _0x2f9a08 = (0, o.handleBaseRemoveRange)(
 F(_0x12c69b.params["range"]),
 F(_0x3a1600),
 );
 return _0x2f9a08 == null || _0x2f9a08.length !== 0
 ? true
 : (_0x2f9a08.step !== 0 && (_0x1829c5 = true),
 (_0x3a1600.startColumn += _0x2f9a08.step),
 (_0x3a1600.endColumn += _0x2f9a08.step),
 false);
 }))
 )
 return { error: Error("remove col is conflict with set numfmt") };
 }
 if (_0x1829c5) {
 let _0x5865aa = {
 id: o.RemoveNumfmtMutation["id"],
 params: {
 unitId: _0x44c9d3.params["unitId"],
 subUnitId: _0x44c9d3.params["subUnitId"],
 ranges: _0x44826e,
 },
 };
 _0x2c3717.push(_0x5865aa, _0x3ed734);
 }
 return { m1Prime: _0x2c3717, m2Prime: _0x3ed734 };
 },
 },
 Ca = {
 m1: o.RemoveColMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler(_0xa932d4, _0x16d244) {
 let _0x1f9eb5 = { m1Prime: _0xa932d4, m2Prime: _0x16d244 };
 if (
 _0xa932d4.params["unitId"] !== _0x16d244.params["unitId"] ||
 _0xa932d4.params["subUnitId"] !== _0x16d244.params["subUnitId"]
 )
 return _0x1f9eb5;
 let _0x1f6131 = [e.Tools["deepClone"](_0xa932d4)],
 _0x49f955 = e.Tools["deepClone"](_0x16d244),
 _0x178d44 = new e.ObjectMatrix(_0x49f955.params["cellValue"]),
 _0x2972eb = _0x178d44.getDataRange(),
 _0x46dab7 = _0xa932d4.params["range"],
 _0x3d876a = _0x46dab7.endColumn - _0x46dab7.startColumn + 1;
 if (
 _0x49f955.params["cellValue"] &&
 _0x46dab7.endColumn < _0x2972eb.startColumn
 )
 L(
 _0x49f955.params["cellValue"],
 _0x2972eb.startColumn,
 _0x2972eb.endColumn - _0x2972eb.startColumn + 1,
 -_0x3d876a,
 );
 else {
 if (_0x46dab7.startColumn <= _0x2972eb.endColumn)
 return {
 error: Error(
 "remove cols is conflict with set range values mutation",
 ),
 };
 }
 let _0x66de15 = new e.ObjectMatrix(),
 _0x210549 = false,
 _0x4a3242 = false;
 if (
 (_0x178d44.forValue((_0x379d49, _0x1f4062, _0x139b6e) => {
 if (_0x139b6e && _0x139b6e.f) {
 let _0x29b151 = _0x139b6e.f,
 _0x4275f4 = false,
 _0x4c000e = R(
 _0xa932d4.params["unitId"],
 _0xa932d4.params["subUnitId"],
 _0x29b151,
 (_0x36eead) => {
 let _0x15993d = (0, o.handleBaseRemoveRange)(
 F(_0xa932d4.params["range"]),
 F(_0x36eead),
 );
 return _0x15993d === null
 ? ((_0x210549 = true), _0x36eead)
 : ((_0x15993d.step !== 0 || _0x15993d.length !== 0) &&
 ((_0x4275f4 = true),
 (_0x36eead.startColumn += _0x15993d.step),
 (_0x36eead.endColumn +=
 _0x15993d.step + _0x15993d.length)),
 _0x36eead);
 },
 );
 _0x4275f4 &&
 ((_0x4a3242 = true),
 (_0x139b6e.f = _0x4c000e),
 _0x66de15.setValue(_0x379d49, _0x1f4062, { ..._0x139b6e }));
 }
 }),
 _0x210549)
 )
 return {
 error: Error(
 "remove\x20cols\x20is\x20conflict\x20with\x20set\x20range\x20values\x20mutation,\x20trying\x20to\x20write\x20a\x20formula\x20reference\x20to\x20a\x20removed\x20column",
 ),
 };
 if (_0x4a3242) {
 let _0x5225e7 = {
 id: o.SetRangeValuesMutation["id"],
 params: {
 unitId: _0x16d244.params["unitId"],
 subUnitId: _0x16d244.params["subUnitId"],
 cellValue: _0x66de15.getMatrix(),
 },
 };
 _0x1f6131.push(_0x5225e7);
 }
 return { m1Prime: _0x1f6131, m2Prime: _0x49f955 };
 },
 },
 wa = {
 m1: o.RemoveColMutation["id"],
 m2: o.SetSelectionsOperation["id"],
 handler(_0x32a998, _0x390b95) {
 let _0x2c0cb2 = { m1Prime: [], m2Prime: [] };
 if (
 _0x32a998.params["unitId"] !== _0x390b95.params["unitId"] ||
 _0x32a998.params["subUnitId"] !== _0x390b95.params["subUnitId"]
 )
 return _0x2c0cb2;
 let _0x1b0abb = e.Tools["deepClone"](_0x390b95),
 _0x451508 = false;
 return (
 _0x1b0abb.params["selections"].forEach((_0x3908c9) => {
 let { range: _0x58ffe1, primary: _0x3d6741 } = _0x3908c9,
 _0x2c351c = (0, o.handleBaseRemoveRange)(
 F(_0x32a998.params["range"]),
 F(_0x58ffe1),
 );
 if (_0x2c351c != null && (_0x2c351c.length || _0x2c351c.step)) {
 if (
 ((_0x58ffe1.startColumn += _0x2c351c.step),
 (_0x58ffe1.endColumn += _0x2c351c.step + (_0x2c351c.length || 0)),
 _0x3d6741)
 ) {
 let _0x25465e = (0, o.handleBaseRemoveRange)(
 F(_0x32a998.params["range"]),
 F(_0x3d6741),
 );
 if (_0x25465e == null) {
 ((_0x3d6741.startColumn = _0x58ffe1.startColumn),
 (_0x3d6741.endColumn = _0x58ffe1.startColumn),
 (_0x3d6741.actualColumn = _0x58ffe1.startColumn));
 return;
 }
 (_0x25465e.length || _0x25465e.step) &&
 ((_0x3d6741.startColumn += _0x25465e.step),
 (_0x3d6741.endColumn += _0x25465e.step),
 (_0x3d6741.actualColumn += _0x25465e.step));
 }
 _0x451508 = true;
 }
 }),
 _0x451508 && _0x2c0cb2.m2Prime["push"](_0x1b0abb),
 _0x2c0cb2
 );
 },
 },
 Ta = {
 m1: o.RemoveColMutation["id"],
 m2: f.SetSheetsFilterCriteriaMutation["id"],
 handler(_0x205915, _0x5d52a5) {
 let _0x31c14d = { m1Prime: _0x205915, m2Prime: _0x5d52a5 };
 if (
 _0x205915.params["unitId"] !== _0x5d52a5.params["unitId"] ||
 _0x205915.params["subUnitId"] !== _0x5d52a5.params["subUnitId"]
 )
 return _0x31c14d;
 let _0x4ea94c = e.Tools["deepClone"](_0x205915),
 _0x1bc343 = e.Tools["deepClone"](_0x5d52a5),
 _0x38903a = Or(
 {
 start: _0x205915.params["range"].startColumn,
 end: _0x205915.params["range"].endColumn,
 },
 { start: _0x5d52a5.params["col"], end: _0x5d52a5.params["col"] },
 ),
 _0x5ca052 = e.Tools["deepClone"](_0x5d52a5);
 return (
 (_0x5ca052.params["criteria"] = null),
 _0x38903a === null
 ? { m1Prime: [_0x4ea94c, _0x5ca052], m2Prime: [] }
 : _0x1bc343.params["col"] === _0x38903a.start
 ? _0x31c14d
 : ((_0x1bc343.params["col"] = _0x38903a.start),
 _0x1bc343.params["criteria"] &&
 (_0x1bc343.params["criteria"].colId = _0x38903a.start),
 {
 m1Prime: [_0x5ca052, _0x1bc343, _0x4ea94c],
 m2Prime: [_0x1bc343],
 })
 );
 },
 },
 Ea = {
 m1: o.RemoveColMutation["id"],
 m2: f.SetSheetsFilterRangeMutation["id"],
 handler(_0x5d661e, _0x4522d5) {
 let _0x4b9be8 = { m1Prime: [_0x5d661e], m2Prime: [_0x4522d5] };
 if (
 _0x5d661e.params["unitId"] !== _0x4522d5.params["unitId"] ||
 _0x5d661e.params["subUnitId"] !== _0x4522d5.params["subUnitId"]
 )
 return _0x4b9be8;
 let _0x49dc36 = e.Tools["deepClone"](_0x5d661e),
 _0x2e3bb6 = e.Tools["deepClone"](_0x4522d5),
 _0xbc44a4 = Or(
 {
 start: _0x5d661e.params["range"].startColumn,
 end: _0x5d661e.params["range"].endColumn,
 },
 {
 start: _0x4522d5.params["range"].startColumn,
 end: _0x4522d5.params["range"].endColumn,
 },
 );
 return _0xbc44a4 === null
 ? {
 m1Prime: [
 _0x49dc36,
 {
 id: f.RemoveSheetsFilterMutation["id"],
 params: {
 unitId: _0x4522d5.params["unitId"],
 subUnitId: _0x4522d5.params["unitId"],
 },
 },
 ],
 m2Prime: [],
 }
 : ((_0x2e3bb6.params["range"].startColumn = _0xbc44a4.start),
 (_0x2e3bb6.params["range"].endColumn = _0xbc44a4.end),
 { m1Prime: [_0x2e3bb6, _0x49dc36], m2Prime: [_0x2e3bb6] });
 },
 },
 Da = {
 m1: o.RemoveColMutation["id"],
 m2: o.SetWorksheetColWidthMutation["id"],
 handler(_0x3639fb, _0x1e49f2) {
 let _0x8f904 = { m1Prime: _0x3639fb, m2Prime: _0x1e49f2 };
 if (
 _0x3639fb.params["unitId"] !== _0x1e49f2.params["unitId"] ||
 _0x3639fb.params["subUnitId"] !== _0x1e49f2.params["subUnitId"]
 )
 return _0x8f904;
 let _0x7ebd0d = e.Tools["deepClone"](_0x3639fb),
 _0x567ffe = e.Tools["deepClone"](_0x1e49f2),
 { ranges: _0x17ef53, colWidth: _0x4fe487 } = _0x567ffe.params;
 return (
 _0x17ef53.forEach((_0x1b0734) => {
 let _0x46456d = (0, o.handleBaseRemoveRange)(
 F(_0x3639fb.params["range"]),
 _0x1b0734,
 );
 _0x46456d == null
 ? (_0x567ffe.id = o.EmptyMutation["id"])
 : ((_0x1b0734.startColumn += _0x46456d.step),
 (_0x1b0734.endColumn += _0x46456d.step + _0x46456d.length));
 }),
 typeof _0x4fe487 != "number" &&
 (0, e.spliceArray)(
 _0x3639fb.params["range"].startColumn,
 _0x3639fb.params["range"].endColumn -
 _0x3639fb.params["range"].startColumn +
 1,
 _0x4fe487,
 ),
 { m1Prime: _0x7ebd0d, m2Prime: _0x567ffe }
 );
 },
 },
 Oa = {
 m1: o.RemoveColMutation["id"],
 m2: c.UpdateCommentRefMutation["id"],
 handler: (_0x37e08e, _0x70ec1d) => {
 let _0x46ca14 = { m1Prime: _0x37e08e, m2Prime: _0x70ec1d };
 if (
 _0x37e08e.params["unitId"] !== _0x70ec1d.params["unitId"] ||
 _0x37e08e.params["subUnitId"] !== _0x70ec1d.params["subUnitId"]
 )
 return _0x46ca14;
 let _0x41ba71 = V(_0x70ec1d, {
 id: o.RemoveColCommand["id"],
 params: {
 unitId: _0x37e08e.params["unitId"],
 subUnitId: _0x37e08e.params["subUnitId"],
 range: _0x37e08e.params["range"],
 },
 });
 return {
 m1Prime: [_0x37e08e, ..._0x41ba71],
 m2Prime: [_0x70ec1d, ..._0x41ba71],
 };
 },
 },
 ka = {
 m1: o.RemoveColMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x9531a8, _0x30b374) => {
 let _0x17c820 = { m1Prime: _0x9531a8, m2Prime: _0x30b374 };
 if (
 _0x9531a8.params["unitId"] !== _0x30b374.params["unitId"] ||
 _0x30b374.params["subUnitId"] !== _0x9531a8.params["subUnitId"]
 )
 return _0x17c820;
 let _0x4d5b2d = H(_0x30b374, {
 id: o.RemoveColCommand["id"],
 params: { range: _0x9531a8.params["range"] },
 });
 return {
 m1Prime: [_0x9531a8, ..._0x4d5b2d],
 m2Prime: [_0x30b374, ..._0x4d5b2d],
 };
 },
 },
 Aa = {
 m1: u.RemoveDataValidationMutation["id"],
 m2: u.RemoveDataValidationMutation["id"],
 handler: (_0x67c9a8, _0x38cd4b) => {
 let _0x288574 = { m1Prime: _0x67c9a8, m2Prime: _0x38cd4b };
 return _0x67c9a8.params["unitId"] === _0x38cd4b.params["unitId"] &&
 _0x67c9a8.params["subUnitId"] === _0x38cd4b.params["subUnitId"] &&
 _0x67c9a8.params["ruleId"] === _0x38cd4b.params["ruleId"]
 ? { m1Prime: [], m2Prime: [] }
 : _0x288574;
 },
 },
 ja = {
 m1: d.RemoveHyperLinkMutation["id"],
 m2: d.RemoveHyperLinkMutation["id"],
 handler: (_0x2fdf88, _0xbb2694) => {
 let _0x5c9a26 = _0x2fdf88.params,
 _0x470aa1 = _0xbb2694.params;
 return _0x5c9a26.unitId === _0x470aa1.unitId &&
 _0x5c9a26.subUnitId === _0x470aa1.subUnitId &&
 _0x5c9a26.id === _0x470aa1.id
 ? { m2Prime: [], m1Prime: [] }
 : { m1Prime: _0x2fdf88, m2Prime: _0xbb2694 };
 },
 },
 Ma = {
 m1: o.RemoveNumfmtMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler(_0x4d3490, _0x4bca48) {
 if (
 _0x4d3490.params["unitId"] !== _0x4bca48.params["unitId"] ||
 _0x4d3490.params["subUnitId"] !== _0x4bca48.params["subUnitId"]
 )
 return { m1Prime: _0x4d3490, m2Prime: _0x4bca48 };
 let _0x195ba9 = e.Tools["deepClone"](_0x4d3490),
 _0x5d1a57 = e.Tools["deepClone"](_0x4bca48),
 _0x52dbf2 = [],
 _0x5c3e64 = _0x5d1a57.params["ranges"];
 return (
 _0x195ba9.params["ranges"].forEach((_0x4e5457) => {
 let _0x2cd3c0 = Cr(_0x4e5457, _0x5c3e64);
 _0x2cd3c0.length > 0 && _0x52dbf2.push(..._0x2cd3c0);
 }),
 (_0x195ba9.params["ranges"] = _0x52dbf2),
 { m1Prime: _0x4d3490, m2Prime: _0x4bca48 }
 );
 },
 },
 Na = {
 m1: o.RemoveNumfmtMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler(_0x28ac4b, _0x28e952) {
 if (
 _0x28ac4b.params["unitId"] !== _0x28e952.params["unitId"] ||
 _0x28ac4b.params["subUnitId"] !== _0x28e952.params["subUnitId"]
 )
 return { m1Prime: _0x28ac4b, m2Prime: _0x28e952 };
 let _0x3044f4 = e.Tools["deepClone"](_0x28ac4b),
 _0x42344a = e.Tools["deepClone"](_0x28e952),
 _0x552d9c = [],
 _0xea2f57 = Object.values(_0x42344a.params["values"])
 .map((_0x2e1780) => _0x2e1780.ranges)
 .flat();
 return (
 _0x3044f4.params["ranges"].forEach((_0x5504c5) => {
 let _0x3fb8b4 = Cr(_0x5504c5, _0xea2f57);
 _0x3fb8b4.length > 0 && _0x552d9c.push(..._0x3fb8b4);
 }),
 (_0x3044f4.params["ranges"] = _0x552d9c),
 { m1Prime: _0x3044f4, m2Prime: _0x42344a }
 );
 },
 },
 Pa = {
 m1: o.RemoveRowMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x3e0467, _0x5e3a91) => {
 let _0x5b6136 = { m1Prime: _0x3e0467, m2Prime: _0x5e3a91 };
 if (
 _0x3e0467.params["unitId"] !== _0x5e3a91.params["unitId"] ||
 _0x3e0467.params["subUnitId"] !== _0x5e3a91.params["subUnitId"]
 )
 return _0x5b6136;
 let _0x3d152a = P(_0x5e3a91, {
 id: o.RemoveRowCommand["id"],
 params: {
 unitId: _0x3e0467.params["unitId"],
 subUnitId: _0x3e0467.params["subUnitId"],
 range: _0x3e0467.params["range"],
 },
 });
 return {
 m1Prime: [_0x3e0467, ..._0x3d152a],
 m2Prime: [_0x5e3a91, ..._0x3d152a],
 };
 },
 },
 Fa = {
 m1: o.RemoveRowMutation["id"],
 m2: u.AddDataValidationMutation["id"],
 handler(_0x5b77c3, _0x1774e6) {
 let _0xd684d = { m1Prime: _0x5b77c3, m2Prime: _0x1774e6 };
 if (
 _0x5b77c3.params["unitId"] !== _0x1774e6.params["unitId"] ||
 _0x5b77c3.params["subUnitId"] !== _0x1774e6.params["subUnitId"]
 )
 return _0xd684d;
 let _0x46bc97 = B(_0x1774e6, {
 id: o.RemoveRowCommand["id"],
 params: { range: _0x5b77c3.params["range"] },
 });
 return {
 m1Prime: [_0x5b77c3, ..._0x46bc97],
 m2Prime: [_0x1774e6, ..._0x46bc97],
 };
 },
 },
 Ia = {
 m1: o.RemoveRowMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x12742c, _0x58b5df) {
 let _0x730998 = dn.handler(_0x58b5df, _0x12742c);
 return S(_0x730998)
 ? { m1Prime: _0x730998.m2Prime, m2Prime: _0x730998.m1Prime }
 : _0x730998;
 },
 },
 La = {
 m1: o.RemoveRowMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x58fa2c, _0x1ce24b) {
 let _0x23b109 = { m1Prime: _0x58fa2c, m2Prime: _0x1ce24b };
 if (
 _0x58fa2c.params["unitId"] !== _0x1ce24b.params["unitId"] ||
 (_0x58fa2c.params["subUnitId"] !== _0x1ce24b.params["from"].subUnitId &&
 _0x58fa2c.params["subUnitId"] !== _0x1ce24b.params["to"].subUnitId)
 )
 return _0x23b109;
 let _0x28f574 = e.Tools["deepClone"](_0x58fa2c),
 _0x122e47 = e.Tools["deepClone"](_0x1ce24b),
 { startRow: _0x1d6a78, endRow: _0x3aaa02 } = _0x58fa2c.params["range"];
 if (
 _0x58fa2c.params["subUnitId"] === _0x1ce24b.params["from"].subUnitId
 ) {
 let _0x39cc46 = new e["ObjectMatrix"](_0x122e47.params["from"].value),
 { startRow: _0x50a16c, endRow: _0x47cbcb } = _0x39cc46.getDataRange();
 if (_0x50a16c <= _0x3aaa02 && _0x47cbcb >= _0x1d6a78)
 return {
 error: Error(
 "Remove-cols\x20has\x20conflicts\x20with\x20move-range",
 ),
 };
 (_0x3aaa02 < _0x50a16c &&
 _0x39cc46.removeRows(_0x1d6a78, _0x3aaa02 - _0x1d6a78 + 1),
 (_0x122e47.params["from"].value = _0x39cc46.getMatrix()));
 }
 if (_0x58fa2c.params["subUnitId"] === _0x1ce24b.params["to"].subUnitId) {
 let _0x56ec17 = new e["ObjectMatrix"](_0x122e47.params["to"].value),
 { startRow: _0x53fa77, endRow: _0x4013c0 } = _0x56ec17.getDataRange();
 if (_0x53fa77 <= _0x3aaa02 && _0x4013c0 >= _0x1d6a78)
 return { error: Error("Remove-cols has conflicts with move-range") };
 (_0x3aaa02 < _0x53fa77 &&
 _0x56ec17.removeRows(_0x1d6a78, _0x3aaa02 - _0x1d6a78 + 1),
 (_0x122e47.params["to"].value = _0x56ec17.getMatrix()));
 }
 return { m1Prime: _0x28f574, m2Prime: _0x122e47 };
 },
 },
 Ra = {
 m1: o.RemoveRowMutation["id"],
 m2: o.MoveRowsMutation["id"],
 handler(_0x564a52, _0x4cac8a) {
 let _0x4e29bc = { m1Prime: _0x564a52, m2Prime: _0x4cac8a };
 if (
 _0x564a52.params["unitId"] !== _0x4cac8a.params["unitId"] ||
 _0x564a52.params["subUnitId"] !== _0x4cac8a.params["subUnitId"]
 )
 return _0x4e29bc;
 let _0x1d4e0b = e.Tools["deepClone"](_0x564a52),
 _0x523a52 = e.Tools["deepClone"](_0x4cac8a);
 if (
 (_0x564a52.params["range"].startRow <=
 _0x4cac8a.params["sourceRange"].endRow &&
 _0x564a52.params["range"].endRow >=
 _0x4cac8a.params["sourceRange"].startRow) ||
 (_0x564a52.params["range"].startRow <=
 _0x4cac8a.params["targetRange"].endRow &&
 _0x564a52.params["range"].endRow >=
 _0x4cac8a.params["targetRange"].startRow)
 )
 return { error: Error("remove row is conflict with move row") };
 let _0x5cc0e5 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x564a52.params["range"])),
 F((0, o.rotateRange)(_0x4cac8a.params["sourceRange"])),
 ),
 _0x281beb = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x564a52.params["range"])),
 F((0, o.rotateRange)(_0x4cac8a.params["targetRange"])),
 );
 _0x5cc0e5 && _0x281beb
 ? ((_0x523a52.params["sourceRange"].startRow += _0x5cc0e5.step),
 (_0x523a52.params["sourceRange"].endRow +=
 _0x5cc0e5.step + (_0x5cc0e5.length || 0)),
 (_0x523a52.params["targetRange"].startRow += _0x281beb.step),
 (_0x523a52.params["targetRange"].endRow +=
 _0x281beb.step + (_0x281beb.length || 0)))
 : (_0x523a52.id = o.EmptyMutation["id"]);
 let _0x53dbca = (0, o.handleBaseMoveRowsCols)(
 {
 start: _0x4cac8a.params["sourceRange"].startRow,
 end: _0x4cac8a.params["sourceRange"].endRow,
 },
 {
 start: _0x4cac8a.params["targetRange"].startRow,
 end: _0x4cac8a.params["targetRange"].endRow,
 },
 {
 start: _0x564a52.params["range"].startRow,
 end: _0x564a52.params["range"].endRow,
 },
 );
 if (_0x53dbca) {
 let { step: _0x3d9f2b, length: _0x20985a } = _0x53dbca;
 ((_0x1d4e0b.params["range"].startRow += _0x3d9f2b),
 (_0x1d4e0b.params["range"].endRow += _0x3d9f2b + (_0x20985a || 0)));
 } else _0x1d4e0b.id = o.EmptyMutation["id"];
 return { m1Prime: _0x1d4e0b, m2Prime: _0x523a52 };
 },
 },
 za = {
 m1: o.RemoveRowMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler(_0x385020, _0x575a0d) {
 let _0xbf54cb = { m1Prime: _0x385020, m2Prime: _0x575a0d };
 if (
 _0x385020.params["unitId"] !== _0x575a0d.params["unitId"] ||
 _0x385020.params["subUnitId"] !== _0x575a0d.params["subUnitId"]
 )
 return _0xbf54cb;
 let _0x46f9c5 = e.Tools["deepClone"](_0x385020),
 _0x189d78 = e.Tools["deepClone"](_0x575a0d),
 { ranges: _0xaf3767 } = _0x189d78.params;
 return _0xaf3767.some((_0x4464af) => {
 let _0x330807 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x385020.params["range"])),
 F((0, o.rotateRange)(_0x4464af)),
 );
 return _0x330807 === null || _0x330807.length !== 0
 ? true
 : ((_0x4464af.startRow += _0x330807.step),
 (_0x4464af.endRow += _0x330807.step),
 false);
 })
 ? { error: Error("remove row is conflict with remove numfmt") }
 : { m1Prime: _0x46f9c5, m2Prime: _0x189d78 };
 },
 },
 Ba = {
 m1: o.RemoveRowMutation["id"],
 m2: o.RemoveRowMutation["id"],
 handler(_0x4929bc, _0x24c5c4) {
 let _0x23bfbd = { m1Prime: _0x4929bc, m2Prime: _0x24c5c4 };
 if (
 _0x4929bc.params["unitId"] !== _0x24c5c4.params["unitId"] ||
 _0x4929bc.params["subUnitId"] !== _0x24c5c4.params["subUnitId"]
 )
 return _0x23bfbd;
 let _0x432374 = e.Tools["deepClone"](_0x4929bc),
 _0x1110eb = e.Tools["deepClone"](_0x24c5c4),
 _0xcde6d8 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x4929bc.params["range"])),
 F((0, o.rotateRange)(_0x24c5c4.params["range"])),
 );
 if (_0xcde6d8) {
 let { step: _0x3ba031, length: _0x37f69e } = _0xcde6d8;
 ((_0x1110eb.params["range"].startRow += _0x3ba031),
 (_0x1110eb.params["range"].endRow += _0x3ba031 + (_0x37f69e || 0)));
 } else _0x1110eb.id = o.EmptyMutation["id"];
 let _0x3f2d6f = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x24c5c4.params["range"])),
 F((0, o.rotateRange)(_0x4929bc.params["range"])),
 );
 if (_0x3f2d6f) {
 let { step: _0x514e5c, length: _0x525c10 } = _0x3f2d6f;
 ((_0x432374.params["range"].startRow += _0x514e5c),
 (_0x432374.params["range"].endRow += _0x514e5c + (_0x525c10 || 0)));
 } else _0x432374.id = o.EmptyMutation["id"];
 return { m1Prime: _0x432374, m2Prime: _0x1110eb };
 },
 },
 Va = {
 m1: o.RemoveRowMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler(_0x2634b7, _0x181b33) {
 let _0x592253 = e.Tools["deepClone"](_0x2634b7),
 _0x521a1d = e.Tools["deepClone"](_0x181b33);
 if (
 _0x2634b7.params["unitId"] !== _0x181b33.params["unitId"] ||
 _0x2634b7.params["subUnitId"] !== _0x181b33.params["subUnitId"]
 )
 return { m1Prime: _0x592253, m2Prime: _0x521a1d };
 let _0x52bb0d = _0x521a1d.params["ranges"].reduce(
 (_0xdc5103, _0x1a1536) => {
 let _0x56974e = _0x592253.params["range"],
 _0x180c48 = _0x56974e.endRow - _0x56974e.startRow + 1,
 _0x6745de = { ..._0x1a1536 };
 return (
 _0x56974e.startRow > _0x1a1536.endRow
 ? (_0x6745de = { ..._0x1a1536 })
 : _0x56974e.startRow >= _0x1a1536.startRow &&
 _0x56974e.startRow <= _0x1a1536.endRow &&
 _0x56974e.endRow > _0x1a1536.endRow
 ? ((_0x6745de.endRow = _0x56974e.startRow - 1),
 _0x56974e.startRow === _0x1a1536.startRow &&
 (_0x6745de = null))
 : _0x56974e.startRow > _0x1a1536.startRow &&
 _0x56974e.endRow < _0x1a1536.endRow
 ? (_0x6745de.endRow = _0x1a1536.endRow - _0x180c48)
 : _0x56974e.startRow < _0x1a1536.startRow &&
 _0x56974e.endRow >= _0x1a1536.startRow &&
 _0x56974e.endRow <= _0x1a1536.endRow
 ? ((_0x6745de.startRow = _0x56974e.startRow),
 (_0x6745de.endRow = _0x1a1536.endRow - _0x180c48),
 _0x56974e.endRow === _0x1a1536.endRow &&
 (_0x6745de = null))
 : _0x56974e.startRow <= _0x1a1536.startRow &&
 _0x56974e.endRow >= _0x1a1536.endRow
 ? (_0x6745de = null)
 : _0x56974e.endRow < _0x1a1536.startRow &&
 ((_0x6745de.startRow = _0x1a1536.startRow - _0x180c48),
 (_0x6745de.endRow = _0x1a1536.endRow - _0x180c48)),
 _0x6745de &&
 (_0x6745de.startRow !== _0x6745de.endRow ||
 _0x6745de.startColumn !== _0x6745de.endColumn) &&
 _0xdc5103.push(_0x6745de),
 _0xdc5103
 );
 },
 [],
 );
 return (
 (_0x521a1d.params["ranges"] = _0x52bb0d),
 { m1Prime: _0x592253, m2Prime: _0x521a1d }
 );
 },
 },
 Ha = {
 m1: o.RemoveRowMutation["id"],
 m2: o.ReorderRangeMutation["id"],
 handler(_0x485ce6, _0x4fc83f) {
 let _0x1bb041 = { m1Prime: _0x485ce6, m2Prime: _0x4fc83f };
 if (
 _0x485ce6.params["unitId"] !== _0x4fc83f.params["unitId"] ||
 _0x485ce6.params["subUnitId"] !== _0x4fc83f.params["subUnitId"]
 )
 return _0x1bb041;
 let _0x23324d = e.Tools["deepClone"](_0x4fc83f),
 _0x1569a8 = e.Tools["deepClone"](_0x485ce6),
 _0x5bbcc6 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x485ce6.params["range"])),
 F((0, o.rotateRange)(_0x4fc83f.params["range"])),
 );
 if (!_0x5bbcc6) return { m1Prime: _0x485ce6, m2Prime: [] };
 if (_0x5bbcc6.length === 0 && _0x5bbcc6.step === 0)
 return { m1Prime: _0x485ce6, m2Prime: _0x4fc83f };
 let { startRow: _0x492cb7, endRow: _0x35cb0b } =
 _0x485ce6.params["range"];
 ((_0x23324d.params["range"].startRow += _0x5bbcc6.step),
 (_0x23324d.params["range"].endRow +=
 _0x5bbcc6.step + (_0x5bbcc6.length || 0)));
 let _0xf8ae96 = Object.keys(_0x4fc83f.params["order"])
 .map((_0xc3ff06) => Wa(_0x492cb7, _0x35cb0b, Number(_0xc3ff06)))
 .filter((_0x4b293e) => _0x4b293e !== null),
 _0xda6c1b = {};
 for (let _0x29297f in _0x4fc83f.params["order"]) {
 let _0x14c43c = _0x4fc83f.params["order"][_0x29297f];
 ((_0x14c43c = Wa(_0x492cb7, _0x35cb0b, _0x14c43c)),
 _0x14c43c !== null && (_0xda6c1b[_0xf8ae96.shift()] = _0x14c43c));
 }
 _0x23324d.params["order"] = _0xda6c1b;
 let _0x31f71e = Ua(_0x4fc83f.params["order"], {
 start: _0x485ce6.params["range"].startRow,
 end: _0x485ce6.params["range"].endRow,
 }),
 _0x4f3e7c = [_0x1569a8];
 return (
 _0x31f71e &&
 _0x4f3e7c.unshift({
 id: o.ReorderRangeMutation["id"],
 params: {
 ..._0x485ce6.params,
 order: _0x31f71e.order,
 range: { ..._0x4fc83f.params["range"], ..._0x31f71e.range },
 },
 }),
 { m1Prime: _0x4f3e7c, m2Prime: _0x23324d }
 );
 },
 },
 Ua = (_0x223fd9, _0x123c86) => {
 let _0x116963 = Object.keys(_0x223fd9)
 .map(Number)
 .sort((_0x170365, _0x4ef458) => _0x170365 - _0x4ef458);
 if (_0x116963.length === 0) return null;
 let _0xe52007 = _0x116963[0],
 _0x48f835 = _0x116963[_0x116963.length - 1];
 if (_0xe52007 > _0x123c86.end || _0x48f835 < _0x123c86.start) return null;
 let _0x45bce7 = _0x116963.filter(
 (_0x65ff0f) =>
 _0x223fd9[_0x65ff0f] >= _0x123c86.start &&
 _0x223fd9[_0x65ff0f] <= _0x123c86.end,
 );
 if (_0x45bce7.length === 0) return null;
 let _0x4d554d = _0x45bce7.map((_0x383892) => _0x223fd9[_0x383892]),
 _0x35d22b = {},
 _0x10b79c = Math.min(_0x45bce7[0], _0x123c86.start),
 _0x5a8d37 = Math.max(_0x45bce7[_0x45bce7.length - 1], _0x123c86.end),
 _0x31442a = Array.from(
 { length: _0x5a8d37 - _0x10b79c + 1 },
 (_0x47cbcd, _0x13a832) => _0x13a832 + _0x10b79c,
 ).filter((_0xc23795) => !_0x45bce7.includes(_0xc23795));
 return (
 Array.from(
 { length: _0x5a8d37 - _0x10b79c + 1 },
 (_0x53a53d, _0x274fad) => _0x274fad + _0x10b79c,
 )
 .filter((_0x5ef7d6) => !_0x4d554d.includes(_0x5ef7d6))
 .forEach((_0x387e70, _0x2c4c0c) => {
 _0x35d22b[_0x387e70] = _0x31442a[_0x2c4c0c];
 }),
 _0x4d554d.forEach((_0x43c533, _0x1d87a1) => {
 _0x35d22b[_0x43c533] = _0x45bce7[_0x1d87a1];
 }),
 { range: { startRow: _0x10b79c, endRow: _0x5a8d37 }, order: _0x35d22b }
 );
 },
 Wa = (_0x52ea63, _0x351651, _0x29c9d5) =>
 _0x29c9d5 >= _0x52ea63 && _0x29c9d5 <= _0x351651
 ? null
 : _0x29c9d5 > _0x351651
 ? _0x29c9d5 - (_0x351651 - _0x52ea63 + 1)
 : _0x29c9d5,
 Ga = {
 m1: o.RemoveRowMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler(_0xdbbd80, _0x17ce03) {
 let _0x149acc = { m1Prime: _0xdbbd80, m2Prime: _0x17ce03 };
 if (
 _0xdbbd80.params["unitId"] !== _0x17ce03.params["unitId"] ||
 _0xdbbd80.params["subUnitId"] !== _0x17ce03.params["subUnitId"]
 )
 return _0x149acc;
 let _0xe18ce9 = [e.Tools["deepClone"](_0xdbbd80)],
 _0x498d1a = e.Tools["deepClone"](_0x17ce03),
 { values: _0x3e21d1 } = _0x498d1a.params,
 _0x57ecf3 = [],
 _0x27c999 = false;
 for (let _0x492793 in _0x3e21d1) {
 let _0x3679e8 = _0x3e21d1[_0x492793];
 if (
 (_0x57ecf3.push(..._0x3679e8.ranges),
 _0x3679e8.ranges["some"]((_0x4a1a3e) => {
 let _0x1dbf69 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0xdbbd80.params["range"])),
 F((0, o.rotateRange)(_0x4a1a3e)),
 );
 return _0x1dbf69 == null || _0x1dbf69.length !== 0
 ? true
 : (_0x1dbf69.step !== 0 && (_0x27c999 = true),
 (_0x4a1a3e.startRow += _0x1dbf69.step),
 (_0x4a1a3e.endRow += _0x1dbf69.step),
 false);
 }))
 )
 return {
 error: Error(
 "remove\x20row\x20is\x20conflict\x20with\x20set\x20numfmt",
 ),
 };
 }
 if (_0x27c999) {
 let _0x3fdc38 = {
 id: o.RemoveNumfmtMutation["id"],
 params: {
 unitId: _0x17ce03.params["unitId"],
 subUnitId: _0x17ce03.params["subUnitId"],
 ranges: _0x57ecf3,
 },
 };
 _0xe18ce9.push(_0x3fdc38, _0x498d1a);
 }
 return { m1Prime: _0xe18ce9, m2Prime: _0x498d1a };
 },
 },
 Ka = {
 m1: o.RemoveRowMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler(_0x2d0714, _0x54a87f) {
 let _0x38621e = { m1Prime: _0x2d0714, m2Prime: _0x54a87f };
 if (
 _0x2d0714.params["unitId"] !== _0x54a87f.params["unitId"] ||
 _0x2d0714.params["subUnitId"] !== _0x54a87f.params["subUnitId"]
 )
 return _0x38621e;
 let _0x1e7b4d = [e.Tools["deepClone"](_0x2d0714)],
 _0x97e6f3 = e.Tools["deepClone"](_0x54a87f),
 _0x268c9d = new e["ObjectMatrix"](_0x97e6f3.params["cellValue"]),
 _0x25bf32 = _0x268c9d.getDataRange(),
 _0x294156 = _0x2d0714.params["range"],
 _0xfb45e = _0x294156.endRow - _0x294156.startRow + 1;
 if (
 _0x97e6f3.params["cellValue"] &&
 _0x294156.endRow < _0x25bf32.startRow
 )
 I(
 _0x97e6f3.params["cellValue"],
 _0x25bf32.startRow,
 _0x25bf32.endRow - _0x25bf32.startRow + 1,
 -_0xfb45e,
 );
 else {
 if (_0x294156.startRow <= _0x25bf32.endRow)
 return {
 error: Error(
 "remove rows is conflict with set range values mutation",
 ),
 };
 }
 let _0x45de7c = new e.ObjectMatrix(),
 _0x39e0b9 = false,
 _0x4a368e = false;
 if (
 (_0x268c9d.forValue((_0x3106ce, _0x28e7e1, _0x17e288) => {
 if (_0x17e288 && _0x17e288.f) {
 let _0x350b74 = _0x17e288.f,
 _0x1cdceb = false,
 _0x4df3e3 = R(
 _0x2d0714.params["unitId"],
 _0x2d0714.params["subUnitId"],
 _0x350b74,
 (_0x4ca1b0) => {
 let _0x4a8d7b = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x2d0714.params["range"])),
 F((0, o.rotateRange)(_0x4ca1b0)),
 );
 return _0x4a8d7b === null
 ? ((_0x39e0b9 = true), _0x4ca1b0)
 : ((_0x4a8d7b.step !== 0 || _0x4a8d7b.length !== 0) &&
 ((_0x1cdceb = true),
 (_0x4ca1b0.startRow += _0x4a8d7b.step),
 (_0x4ca1b0.endRow +=
 _0x4a8d7b.step + _0x4a8d7b.length)),
 _0x4ca1b0);
 },
 );
 _0x1cdceb &&
 ((_0x4a368e = true),
 (_0x17e288.f = _0x4df3e3),
 _0x45de7c.setValue(_0x3106ce, _0x28e7e1, { ..._0x17e288 }));
 }
 }),
 _0x39e0b9)
 )
 return {
 error: Error(
 "remove\x20rows\x20is\x20conflict\x20with\x20set\x20range\x20values\x20mutation,\x20trying\x20to\x20write\x20a\x20formula\x20reference\x20to\x20a\x20removed\x20row",
 ),
 };
 if (_0x4a368e) {
 let _0x16c100 = {
 id: o.SetRangeValuesMutation["id"],
 params: {
 unitId: _0x54a87f.params["unitId"],
 subUnitId: _0x54a87f.params["subUnitId"],
 cellValue: _0x45de7c.getMatrix(),
 },
 };
 _0x1e7b4d.push(_0x16c100);
 }
 return { m1Prime: _0x1e7b4d, m2Prime: _0x97e6f3 };
 },
 },
 qa = {
 m1: o.RemoveRowMutation["id"],
 m2: o.SetRowDataMutation["id"],
 handler(_0x320863, _0x17ffc5) {
 let _0x57e6cc = { m1Prime: _0x320863, m2Prime: _0x17ffc5 };
 if (
 _0x320863.params["unitId"] !== _0x17ffc5.params["unitId"] ||
 _0x320863.params["subUnitId"] !== _0x17ffc5.params["subUnitId"]
 )
 return _0x57e6cc;
 let _0x48ace2 = e.Tools["deepClone"](_0x320863),
 _0x917dd7 = e.Tools["deepClone"](_0x17ffc5),
 { rowData: _0x272ce0 } = _0x917dd7.params;
 return (
 (0, e.spliceArray)(
 _0x320863.params["range"].startRow,
 _0x320863.params["range"].endRow -
 _0x320863.params["range"].startRow +
 1,
 _0x272ce0,
 ),
 { m1Prime: _0x48ace2, m2Prime: _0x917dd7 }
 );
 },
 },
 Ja = {
 m1: o.RemoveRowMutation["id"],
 m2: o.SetRowHiddenMutation["id"],
 handler(_0x496da4, _0xe7f14d) {
 let _0x368dc4 = { m1Prime: _0x496da4, m2Prime: _0xe7f14d };
 if (
 _0x496da4.params["unitId"] !== _0xe7f14d.params["unitId"] ||
 _0x496da4.params["subUnitId"] !== _0xe7f14d.params["subUnitId"]
 )
 return _0x368dc4;
 let _0x34c0c1 = e.Tools["deepClone"](_0x496da4),
 _0x2b063b = e.Tools["deepClone"](_0xe7f14d),
 { ranges: _0x4bfdbf } = _0x2b063b.params;
 return (
 _0x4bfdbf.forEach((_0x4a0275) => {
 let _0x51a208 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x496da4.params["range"])),
 F((0, o.rotateRange)(_0x4a0275)),
 );
 _0x51a208 == null
 ? (_0x2b063b.id = o.EmptyMutation["id"])
 : ((_0x4a0275.startRow += _0x51a208.step),
 (_0x4a0275.endRow += _0x51a208.step + _0x51a208.length));
 }),
 { m1Prime: _0x34c0c1, m2Prime: _0x2b063b }
 );
 },
 },
 Ya = {
 m1: o.RemoveRowMutation["id"],
 m2: o.SetRowVisibleMutation["id"],
 handler(_0x553e35, _0x21ed1c) {
 let _0x508a72 = { m1Prime: _0x553e35, m2Prime: _0x21ed1c };
 if (
 _0x553e35.params["unitId"] !== _0x21ed1c.params["unitId"] ||
 _0x553e35.params["subUnitId"] !== _0x21ed1c.params["subUnitId"]
 )
 return _0x508a72;
 let _0x2adee8 = e.Tools["deepClone"](_0x553e35),
 _0x7f1ad4 = e.Tools["deepClone"](_0x21ed1c),
 { ranges: _0x9fb667 } = _0x7f1ad4.params;
 return (
 _0x9fb667.forEach((_0x303383) => {
 let _0x542cce = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x553e35.params["range"])),
 F((0, o.rotateRange)(_0x303383)),
 );
 _0x542cce == null
 ? (_0x7f1ad4.id = o.EmptyMutation["id"])
 : ((_0x303383.startRow += _0x542cce.step),
 (_0x303383.endRow += _0x542cce.step + _0x542cce.length));
 }),
 { m1Prime: _0x2adee8, m2Prime: _0x7f1ad4 }
 );
 },
 },
 Xa = {
 m1: o.RemoveRowMutation["id"],
 m2: o.SetSelectionsOperation["id"],
 handler(_0x54cc5e, _0x1256f4) {
 let _0x135be9 = { m1Prime: [], m2Prime: [] };
 if (
 _0x54cc5e.params["unitId"] !== _0x1256f4.params["unitId"] ||
 _0x54cc5e.params["subUnitId"] !== _0x1256f4.params["subUnitId"]
 )
 return _0x135be9;
 let _0x4c54ea = e.Tools["deepClone"](_0x1256f4),
 _0x368b94 = false;
 return (
 _0x4c54ea.params["selections"].forEach((_0x19b0c2) => {
 let { range: _0x37ae14, primary: _0x392639 } = _0x19b0c2,
 _0x21bb4f = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x54cc5e.params["range"])),
 F((0, o.rotateRange)(_0x37ae14)),
 );
 if (_0x21bb4f != null && (_0x21bb4f.length || _0x21bb4f.step)) {
 if (
 ((_0x37ae14.startRow += _0x21bb4f.step),
 (_0x37ae14.endRow += _0x21bb4f.step + (_0x21bb4f.length || 0)),
 _0x392639)
 ) {
 let _0x4e9233 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x54cc5e.params["range"])),
 F((0, o.rotateRange)(_0x392639)),
 );
 if (_0x4e9233 == null) {
 ((_0x392639.startRow = _0x37ae14.startRow),
 (_0x392639.endRow = _0x37ae14.startRow),
 (_0x392639.actualRow = _0x37ae14.startRow));
 return;
 }
 (_0x4e9233.length || _0x4e9233.step) &&
 ((_0x392639.startRow += _0x4e9233.step),
 (_0x392639.endRow += _0x4e9233.step),
 (_0x392639.actualRow += _0x4e9233.step));
 }
 _0x368b94 = true;
 }
 }),
 _0x368b94 && _0x135be9.m2Prime["push"](_0x4c54ea),
 _0x135be9
 );
 },
 },
 Za = {
 m1: o.RemoveRowMutation["id"],
 m2: f.SetSheetsFilterRangeMutation["id"],
 handler(_0x4cbb31, _0x4642cf) {
 let _0x1020eb = { m1Prime: [_0x4cbb31], m2Prime: [_0x4642cf] };
 if (
 _0x4cbb31.params["unitId"] !== _0x4642cf.params["unitId"] ||
 _0x4cbb31.params["subUnitId"] !== _0x4642cf.params["subUnitId"]
 )
 return _0x1020eb;
 let _0x4e6ede = e.Tools["deepClone"](_0x4cbb31),
 _0x5e51c4 = e.Tools["deepClone"](_0x4642cf),
 _0xf671e6 = Or(
 {
 start: _0x4cbb31.params["range"].startRow,
 end: _0x4cbb31.params["range"].endRow,
 },
 {
 start: _0x4642cf.params["range"].startRow,
 end: _0x4642cf.params["range"].endRow,
 },
 );
 return _0xf671e6 === null
 ? {
 m1Prime: [
 _0x4e6ede,
 {
 id: f.RemoveSheetsFilterMutation["id"],
 params: {
 unitId: _0x4642cf.params["unitId"],
 subUnitId: _0x4642cf.params["unitId"],
 },
 },
 ],
 m2Prime: [],
 }
 : ((_0x5e51c4.params["range"].startRow = _0xf671e6.start),
 (_0x5e51c4.params["range"].endRow = _0xf671e6.end),
 { m1Prime: [_0x5e51c4, _0x4e6ede], m2Prime: [_0x5e51c4] });
 },
 },
 Qa = {
 m1: o.RemoveRowMutation["id"],
 m2: o.SetWorksheetRowAutoHeightMutation["id"],
 handler(_0x2c28eb, _0x362246) {
 let _0x29ad4f = { m1Prime: _0x2c28eb, m2Prime: _0x362246 };
 if (
 _0x2c28eb.params["unitId"] !== _0x362246.params["unitId"] ||
 _0x2c28eb.params["subUnitId"] !== _0x362246.params["subUnitId"]
 )
 return _0x29ad4f;
 let _0x432ef9 = e.Tools["deepClone"](_0x2c28eb),
 _0x4f8f65 = e.Tools["deepClone"](_0x362246),
 { rowsAutoHeightInfo: _0x599431 } = _0x4f8f65.params;
 for (let _0x2d8eae = _0x599431.length - 1; _0x2d8eae >= 0; _0x2d8eae--) {
 let _0x4366bc = _0x599431[_0x2d8eae],
 _0x1bb311 = {
 startRow: _0x4366bc.row,
 endRow: _0x4366bc.row,
 startColumn: 0,
 endColumn: 0,
 },
 _0x416c27 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x2c28eb.params["range"])),
 (0, o.rotateRange)(_0x1bb311),
 );
 _0x416c27 == null
 ? _0x599431.splice(_0x2d8eae, 1)
 : (_0x4366bc.row += _0x416c27.step);
 }
 return { m1Prime: _0x432ef9, m2Prime: _0x4f8f65 };
 },
 },
 $a = {
 m1: o.RemoveRowMutation["id"],
 m2: o.SetWorksheetRowHeightMutation["id"],
 handler(_0x9832d2, _0x49cf25) {
 let _0x557c34 = { m1Prime: _0x9832d2, m2Prime: _0x49cf25 };
 if (
 _0x9832d2.params["unitId"] !== _0x49cf25.params["unitId"] ||
 _0x9832d2.params["subUnitId"] !== _0x49cf25.params["subUnitId"]
 )
 return _0x557c34;
 let _0x4b150d = e.Tools["deepClone"](_0x9832d2),
 _0x25a4c2 = e.Tools["deepClone"](_0x49cf25),
 { ranges: _0x546932, rowHeight: _0x1622c5 } = _0x25a4c2.params;
 return (
 _0x546932.forEach((_0x1bceed) => {
 let _0x30d011 = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x9832d2.params["range"])),
 (0, o.rotateRange)(_0x1bceed),
 );
 _0x30d011 == null
 ? (_0x25a4c2.id = o.EmptyMutation["id"])
 : ((_0x1bceed.startRow += _0x30d011.step),
 (_0x1bceed.endRow += _0x30d011.step + _0x30d011.length));
 }),
 typeof _0x1622c5 != "number" &&
 (0, e.spliceArray)(
 _0x9832d2.params["range"].startRow,
 _0x9832d2.params["range"].endRow -
 _0x9832d2.params["range"].startRow +
 1,
 _0x1622c5,
 ),
 { m1Prime: _0x4b150d, m2Prime: _0x25a4c2 }
 );
 },
 },
 eo = {
 m1: o.RemoveRowMutation["id"],
 m2: o.SetWorksheetRowIsAutoHeightMutation["id"],
 handler(_0x1e38c4, _0xa8cb0d) {
 let _0x168a43 = { m1Prime: _0x1e38c4, m2Prime: _0xa8cb0d };
 if (
 _0x1e38c4.params["unitId"] !== _0xa8cb0d.params["unitId"] ||
 _0x1e38c4.params["subUnitId"] !== _0xa8cb0d.params["subUnitId"]
 )
 return _0x168a43;
 let _0x35b35d = e.Tools["deepClone"](_0x1e38c4),
 _0x2e4c49 = e.Tools["deepClone"](_0xa8cb0d),
 { ranges: _0x32cb43, autoHeightInfo: _0x1badfd } = _0x2e4c49.params;
 return (
 _0x32cb43.forEach((_0x20afd6) => {
 let _0x1268bb = (0, o.handleBaseRemoveRange)(
 F((0, o.rotateRange)(_0x1e38c4.params["range"])),
 (0, o.rotateRange)(_0x20afd6),
 );
 _0x1268bb == null
 ? (_0x2e4c49.id = o.EmptyMutation["id"])
 : ((_0x20afd6.startRow += _0x1268bb.step),
 (_0x20afd6.endRow += _0x1268bb.step + _0x1268bb.length));
 }),
 typeof _0x1badfd != "number" &&
 (0, e.spliceArray)(
 _0x1e38c4.params["range"].startRow,
 _0x1e38c4.params["range"].endRow -
 _0x1e38c4.params["range"].startRow +
 1,
 _0x1badfd,
 ),
 { m1Prime: _0x35b35d, m2Prime: _0x2e4c49 }
 );
 },
 },
 to = {
 m1: o.RemoveRowMutation["id"],
 m2: c.UpdateCommentRefMutation["id"],
 handler: (_0x17175d, _0x2b5c59) => {
 let _0x3e31bf = { m1Prime: _0x17175d, m2Prime: _0x2b5c59 };
 if (
 _0x17175d.params["unitId"] !== _0x2b5c59.params["unitId"] ||
 _0x17175d.params["subUnitId"] !== _0x2b5c59.params["subUnitId"]
 )
 return _0x3e31bf;
 let _0x4c0ee0 = V(_0x2b5c59, {
 id: o.RemoveRowCommand["id"],
 params: {
 unitId: _0x17175d.params["unitId"],
 subUnitId: _0x17175d.params["subUnitId"],
 range: _0x17175d.params["range"],
 },
 });
 return {
 m1Prime: [_0x17175d, ..._0x4c0ee0],
 m2Prime: [_0x2b5c59, ..._0x4c0ee0],
 };
 },
 },
 no = {
 m1: o.RemoveRowMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x60138c, _0x533783) => {
 let _0x5565db = { m1Prime: _0x60138c, m2Prime: _0x533783 };
 if (
 _0x60138c.params["unitId"] !== _0x533783.params["unitId"] ||
 _0x533783.params["subUnitId"] !== _0x60138c.params["subUnitId"]
 )
 return _0x5565db;
 let _0x2f112c = H(_0x533783, {
 id: o.RemoveRowCommand["id"],
 params: { range: _0x60138c.params["range"] },
 });
 return {
 m1Prime: [_0x60138c, ..._0x2f112c],
 m2Prime: [_0x533783, ..._0x2f112c],
 };
 },
 },
 ro = {
 m1: o.RemoveWorksheetMergeMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x48cbab, _0x3bc1e8) {
 let _0x3cc0b4 = e.Tools["deepClone"](_0x48cbab),
 _0x5f3fc2 = e.Tools["deepClone"](_0x3bc1e8);
 if (
 _0x48cbab.params["unitId"] !== _0x3bc1e8.params["unitId"] ||
 _0x48cbab.params["subUnitId"] !== _0x3bc1e8.params["subUnitId"]
 )
 return { m1Prime: _0x3cc0b4, m2Prime: _0x5f3fc2 };
 for (
 let _0x5689df = 0;
 _0x5689df < _0x3cc0b4.params["ranges"].length;
 _0x5689df++
 ) {
 let _0x4175b9 = false;
 for (
 let _0x491f60 = 0;
 _0x491f60 < _0x5f3fc2.params["ranges"].length;
 _0x491f60++
 ) {
 let _0x3bcc2b = _0x3cc0b4.params["ranges"][_0x5689df],
 _0xe14f4b = _0x5f3fc2.params["ranges"][_0x491f60];
 if (e.Rectangle["intersects"](_0x3bcc2b, _0xe14f4b)) {
 _0x4175b9 = true;
 break;
 }
 }
 _0x4175b9 &&
 (_0x3cc0b4.params["ranges"].splice(_0x5689df, 1), _0x5689df--);
 }
 return (
 _0x3cc0b4.params["ranges"].length === 0 &&
 (_0x3cc0b4.id = o.EmptyMutation["id"]),
 { m1Prime: _0x3cc0b4, m2Prime: _0x5f3fc2 }
 );
 },
 },
 io = {
 m1: o.RemoveWorksheetMergeMutation["id"],
 m2: o.InsertColMutation["id"],
 handler(_0x95ffb, _0xdb82ee) {
 let _0x11081a = e.Tools["deepClone"](_0x95ffb),
 _0x1bf6aa = e.Tools["deepClone"](_0xdb82ee);
 if (
 _0x95ffb.params["unitId"] !== _0xdb82ee.params["unitId"] ||
 _0x95ffb.params["subUnitId"] !== _0xdb82ee.params["subUnitId"]
 )
 return { m1Prime: _0x11081a, m2Prime: _0x1bf6aa };
 let _0x150654 = _0x11081a.params["ranges"].map((_0x255c18) => {
 let _0x215c77 = _0x1bf6aa.params["range"],
 _0x4f1287 = _0x215c77.endColumn - _0x215c77.startColumn + 1;
 return _0x215c77.startColumn <= _0x255c18.startColumn
 ? {
 ..._0x255c18,
 startColumn: _0x255c18.startColumn + _0x4f1287,
 endColumn: _0x255c18.endColumn + _0x4f1287,
 }
 : _0x215c77.startColumn > _0x255c18.startColumn &&
 _0x215c77.startColumn <= _0x255c18.endColumn
 ? { ..._0x255c18, endColumn: _0x255c18.endColumn + _0x4f1287 }
 : { ..._0x255c18 };
 });
 return (
 (_0x11081a.params["ranges"] = _0x150654),
 { m1Prime: _0x11081a, m2Prime: _0x1bf6aa }
 );
 },
 },
 ao = {
 m1: o.RemoveWorksheetMergeMutation["id"],
 m2: o.InsertRowMutation["id"],
 handler(_0x58e971, _0x45435a) {
 let _0x4532cf = e.Tools["deepClone"](_0x58e971),
 _0x1d9314 = e.Tools["deepClone"](_0x45435a);
 if (
 _0x58e971.params["unitId"] !== _0x45435a.params["unitId"] ||
 _0x58e971.params["subUnitId"] !== _0x45435a.params["subUnitId"]
 )
 return { m1Prime: _0x4532cf, m2Prime: _0x1d9314 };
 let _0x32e8d0 = _0x4532cf.params["ranges"].map((_0x188210) => {
 let _0x488bc9 = _0x1d9314.params["range"],
 _0x5ce57f = _0x488bc9.endRow - _0x488bc9.startRow + 1;
 return _0x488bc9.startRow <= _0x188210.startRow
 ? {
 ..._0x188210,
 startRow: _0x188210.startRow + _0x5ce57f,
 endRow: _0x188210.endRow + _0x5ce57f,
 }
 : _0x488bc9.startRow > _0x188210.startRow &&
 _0x488bc9.startRow <= _0x188210.endRow
 ? { ..._0x188210, endRow: _0x188210.endRow + _0x5ce57f }
 : { ..._0x188210 };
 });
 return (
 (_0x4532cf.params["ranges"] = _0x32e8d0),
 { m1Prime: _0x4532cf, m2Prime: _0x1d9314 }
 );
 },
 },
 oo = {
 m1: o.RemoveWorksheetMergeMutation["id"],
 m2: o.MoveColsMutation["id"],
 handler(_0x303d9d, _0x3f5202) {
 let _0x3a35da = e.Tools["deepClone"](_0x303d9d),
 _0x31cc1b = e.Tools["deepClone"](_0x3f5202);
 if (
 _0x303d9d.params["unitId"] !== _0x3f5202.params["unitId"] ||
 _0x303d9d.params["subUnitId"] !== _0x3f5202.params["subUnitId"]
 )
 return { m1Prime: _0x3a35da, m2Prime: _0x31cc1b };
 let _0x3d0802 = _0x3a35da.params["ranges"].reduce(
 (_0x1b3265, _0x1cf671) => {
 let { sourceRange: _0x1ad92b, targetRange: _0x36439e } =
 _0x3f5202.params,
 _0x1b8bd4 = { ..._0x1cf671 };
 return (
 _0x1ad92b.endColumn < _0x1b8bd4.startColumn &&
 _0x36439e.startColumn > _0x1b8bd4.endColumn
 ? ((_0x1b8bd4.startColumn -=
 _0x1ad92b.endColumn - _0x1ad92b.startColumn + 1),
 (_0x1b8bd4.endColumn -=
 _0x1ad92b.endColumn - _0x1ad92b.startColumn + 1),
 O(_0x1b8bd4) && _0x1b3265.push(_0x1b8bd4))
 : _0x1ad92b.startColumn > _0x1b8bd4.endColumn &&
 _0x36439e.endColumn < _0x1b8bd4.startColumn
 ? ((_0x1b8bd4.startColumn +=
 _0x1ad92b.endColumn - _0x1ad92b.startColumn + 1),
 (_0x1b8bd4.endColumn +=
 _0x1ad92b.endColumn - _0x1ad92b.startColumn + 1),
 O(_0x1b8bd4) && _0x1b3265.push(_0x1b8bd4))
 : e.Rectangle["intersects"](_0x1b8bd4, _0x1ad92b) ||
 e.Rectangle["intersects"](_0x1b8bd4, _0x36439e) ||
 _0x1b3265.push(_0x1b8bd4),
 _0x1b3265
 );
 },
 [],
 );
 return (
 (_0x3a35da.params["ranges"] = _0x3d0802),
 _0x3a35da.params["ranges"].length === 0 &&
 (_0x3a35da.id = o.EmptyMutation["id"]),
 { m1Prime: _0x3a35da, m2Prime: _0x31cc1b }
 );
 },
 },
 so = {
 m1: o.RemoveWorksheetMergeMutation["id"],
 m2: o.MoveRowsMutation["id"],
 handler(_0x1309f5, _0x4a2998) {
 let _0xaf202f = e.Tools["deepClone"](_0x1309f5),
 _0xaba07b = e.Tools["deepClone"](_0x4a2998);
 if (
 _0x1309f5.params["unitId"] !== _0x4a2998.params["unitId"] ||
 _0x1309f5.params["subUnitId"] !== _0x4a2998.params["subUnitId"]
 )
 return { m1Prime: _0xaf202f, m2Prime: _0xaba07b };
 let _0xdc95fa = _0xaf202f.params["ranges"].reduce(
 (_0x1c44be, _0x53d42c) => {
 let { sourceRange: _0x48a9a5, targetRange: _0x4c25b8 } =
 _0x4a2998.params,
 _0x3da4ba = { ..._0x53d42c };
 return (
 _0x48a9a5.endRow < _0x3da4ba.startRow &&
 _0x4c25b8.startRow > _0x3da4ba.endRow
 ? ((_0x3da4ba.startRow -=
 _0x48a9a5.endRow - _0x48a9a5.startRow + 1),
 (_0x3da4ba.endRow -= _0x48a9a5.endRow - _0x48a9a5.startRow + 1),
 O(_0x3da4ba) && _0x1c44be.push(_0x3da4ba))
 : _0x48a9a5.startRow > _0x3da4ba.endRow &&
 _0x4c25b8.endRow < _0x3da4ba.startRow
 ? ((_0x3da4ba.startRow +=
 _0x48a9a5.endRow - _0x48a9a5.startRow + 1),
 (_0x3da4ba.endRow +=
 _0x48a9a5.endRow - _0x48a9a5.startRow + 1),
 O(_0x3da4ba) && _0x1c44be.push(_0x3da4ba))
 : e.Rectangle["intersects"](_0x3da4ba, _0x48a9a5) ||
 e.Rectangle["intersects"](_0x3da4ba, _0x4c25b8) ||
 _0x1c44be.push(_0x3da4ba),
 _0x1c44be
 );
 },
 [],
 );
 return (
 (_0xaf202f.params["ranges"] = _0xdc95fa),
 _0xaf202f.params["ranges"].length === 0 &&
 (_0xaf202f.id = o.EmptyMutation["id"]),
 { m1Prime: _0xaf202f, m2Prime: _0xaba07b }
 );
 },
 },
 co = {
 m1: o.RemoveWorksheetMergeMutation["id"],
 m2: o.RemoveColMutation["id"],
 handler(_0x18e21d, _0x3b88d3) {
 let _0x88167d = e.Tools["deepClone"](_0x18e21d),
 _0x49be49 = e.Tools["deepClone"](_0x3b88d3);
 if (
 _0x18e21d.params["unitId"] !== _0x3b88d3.params["unitId"] ||
 _0x18e21d.params["subUnitId"] !== _0x3b88d3.params["subUnitId"]
 )
 return { m1Prime: _0x88167d, m2Prime: _0x49be49 };
 let _0x1c73c6 = _0x88167d.params["ranges"].reduce(
 (_0x298d75, _0x3dd223) => {
 let _0x431a84 = _0x49be49.params["range"],
 _0x2d571c = _0x431a84.endColumn - _0x431a84.startColumn + 1,
 _0xa220ed = { ..._0x3dd223 };
 return (
 _0x431a84.startColumn > _0x3dd223.endColumn
 ? (_0xa220ed = { ..._0x3dd223 })
 : _0x431a84.startColumn >= _0x3dd223.startColumn &&
 _0x431a84.startColumn <= _0x3dd223.endColumn &&
 _0x431a84.endColumn > _0x3dd223.endColumn
 ? ((_0xa220ed.endColumn = _0x431a84.startColumn - 1),
 _0x431a84.startColumn === _0x3dd223.startColumn &&
 (_0xa220ed = null))
 : _0x431a84.startColumn > _0x3dd223.startColumn &&
 _0x431a84.endColumn < _0x3dd223.endColumn
 ? (_0xa220ed.endColumn = _0x3dd223.endColumn - _0x2d571c)
 : _0x431a84.startColumn < _0x3dd223.startColumn &&
 _0x431a84.endColumn >= _0x3dd223.startColumn &&
 _0x431a84.endColumn <= _0x3dd223.endColumn
 ? ((_0xa220ed.startColumn = _0x431a84.startColumn),
 (_0xa220ed.endColumn = _0x3dd223.endColumn - _0x2d571c),
 _0x431a84.endColumn === _0x3dd223.endColumn &&
 (_0xa220ed = null))
 : _0x431a84.startColumn <= _0x3dd223.startColumn &&
 _0x431a84.endColumn >= _0x3dd223.endColumn
 ? (_0xa220ed = null)
 : _0x431a84.endColumn < _0x3dd223.startColumn &&
 ((_0xa220ed.startColumn =
 _0x3dd223.startColumn - _0x2d571c),
 (_0xa220ed.endColumn =
 _0x3dd223.endColumn - _0x2d571c)),
 _0xa220ed &&
 (_0xa220ed.startRow !== _0xa220ed.endRow ||
 _0xa220ed.startColumn !== _0xa220ed.endColumn) &&
 _0x298d75.push(_0xa220ed),
 _0x298d75
 );
 },
 [],
 );
 return (
 (_0x88167d.params["ranges"] = _0x1c73c6),
 _0x88167d.params["ranges"].length === 0 &&
 (_0x88167d.id = o.EmptyMutation["id"]),
 { m1Prime: _0x88167d, m2Prime: _0x49be49 }
 );
 },
 },
 lo = {
 m1: o.RemoveWorksheetMergeMutation["id"],
 m2: o.RemoveRowMutation["id"],
 handler(_0x369d3d, _0x172c90) {
 let _0xa3191d = e.Tools["deepClone"](_0x369d3d),
 _0x5125a9 = e.Tools["deepClone"](_0x172c90);
 if (
 _0x369d3d.params["unitId"] !== _0x172c90.params["unitId"] ||
 _0x369d3d.params["subUnitId"] !== _0x172c90.params["subUnitId"]
 )
 return { m1Prime: _0xa3191d, m2Prime: _0x5125a9 };
 let _0x46c260 = _0xa3191d.params["ranges"].reduce(
 (_0x2efe5b, _0x320451) => {
 let _0xd69c48 = _0x5125a9.params["range"],
 _0x59c5d9 = _0xd69c48.endRow - _0xd69c48.startRow + 1,
 _0x577208 = { ..._0x320451 };
 return (
 _0xd69c48.startRow > _0x320451.endRow
 ? (_0x577208 = { ..._0x320451 })
 : _0xd69c48.startRow >= _0x320451.startRow &&
 _0xd69c48.startRow <= _0x320451.endRow &&
 _0xd69c48.endRow > _0x320451.endRow
 ? ((_0x577208.endRow = _0xd69c48.startRow - 1),
 _0xd69c48.startRow === _0x320451.startRow &&
 (_0x577208 = null))
 : _0xd69c48.startRow > _0x320451.startRow &&
 _0xd69c48.endRow < _0x320451.endRow
 ? (_0x577208.endRow = _0x320451.endRow - _0x59c5d9)
 : _0xd69c48.startRow < _0x320451.startRow &&
 _0xd69c48.endRow >= _0x320451.startRow &&
 _0xd69c48.endRow <= _0x320451.endRow
 ? ((_0x577208.startRow = _0xd69c48.startRow),
 (_0x577208.endRow = _0x320451.endRow - _0x59c5d9),
 _0xd69c48.endRow === _0x320451.endRow &&
 (_0x577208 = null))
 : _0xd69c48.startRow <= _0x320451.startRow &&
 _0xd69c48.endRow >= _0x320451.endRow
 ? (_0x577208 = null)
 : _0xd69c48.endRow < _0x320451.startRow &&
 ((_0x577208.startRow = _0x320451.startRow - _0x59c5d9),
 (_0x577208.endRow = _0x320451.endRow - _0x59c5d9)),
 _0x577208 &&
 (_0x577208.startRow !== _0x577208.endRow ||
 _0x577208.startColumn !== _0x577208.endColumn) &&
 _0x2efe5b.push(_0x577208),
 _0x2efe5b
 );
 },
 [],
 );
 return (
 (_0xa3191d.params["ranges"] = _0x46c260),
 _0xa3191d.params["ranges"].length === 0 &&
 (_0xa3191d.id = o.EmptyMutation["id"]),
 { m1Prime: _0xa3191d, m2Prime: _0x5125a9 }
 );
 },
 },
 uo = {
 m1: o.RemoveWorksheetMergeMutation["id"],
 m2: o.SetSelectionsOperation["id"],
 handler(_0xe67764, _0x34d597) {
 let _0x2a9dd7 = { m1Prime: [], m2Prime: [] };
 if (
 _0xe67764.params["unitId"] !== _0x34d597.params["unitId"] ||
 _0xe67764.params["subUnitId"] !== _0x34d597.params["subUnitId"]
 )
 return _0x2a9dd7;
 let _0x17045b = e.Tools["deepClone"](_0x34d597),
 _0x2e7f2c = _0x17045b.params["selections"],
 _0xb0f8d5 = _0x2e7f2c[_0x2e7f2c.length - 1].primary;
 return (
 _0xe67764.params["ranges"].forEach((_0x16f557) => {
 _0xb0f8d5 &&
 e.Rectangle["intersects"](_0x16f557, _0xb0f8d5) &&
 ((_0xb0f8d5.isMerged = false),
 (_0xb0f8d5.isMergedMainCell = false),
 (_0xb0f8d5.startRow = _0x16f557.startRow),
 (_0xb0f8d5.startColumn = _0x16f557.startColumn),
 (_0xb0f8d5.endRow = _0x16f557.startRow),
 (_0xb0f8d5.endColumn = _0x16f557.startColumn),
 (_0xb0f8d5.actualColumn = _0x16f557.startColumn),
 (_0xb0f8d5.actualRow = _0x16f557.startRow));
 }),
 _0x2a9dd7.m2Prime["push"](_0x17045b),
 _0x2a9dd7
 );
 },
 },
 fo = (_0x21b408) => {
 let { order: _0x5ddab4 } = _0x21b408,
 _0x187b40 = {};
 return (
 Object.keys(_0x5ddab4).forEach((_0x1847a2) => {
 _0x187b40[_0x5ddab4[Number(_0x1847a2)]] = Number(_0x1847a2);
 }),
 { ..._0x21b408, order: _0x187b40 }
 );
 },
 po = (_0x304216, _0x5c013c) => {
 let _0x4c21d2 = {};
 return (
 Array.from(
 new Set(
 Object.keys(_0x304216).concat(Object.keys(_0x5c013c)).map(Number),
 ),
 ).forEach((_0xa0fb14) => {
 let _0x52d1ea;
 (_0xa0fb14 in _0x5c013c
 ? ((_0x52d1ea = _0x5c013c[_0xa0fb14]),
 _0x52d1ea in _0x304216 && (_0x52d1ea = _0x304216[_0x52d1ea]))
 : (_0x52d1ea = _0x304216[_0xa0fb14]),
 (_0x4c21d2[_0xa0fb14] = _0x52d1ea));
 }),
 _0x4c21d2
 );
 },
 mo = {
 m1: o.ReorderRangeMutation["id"],
 m2: o.ReorderRangeMutation["id"],
 handler(_0x1bcaeb, _0x45d857) {
 let _0x34fb79 = { m1Prime: _0x1bcaeb, m2Prime: _0x45d857 };
 if (_0x1bcaeb.params["unitId"] !== _0x45d857.params["unitId"])
 return _0x34fb79;
 let { range: _0xd7e0c5 } = _0x1bcaeb.params,
 { range: _0x5e4f70 } = _0x45d857.params;
 if (
 _0x5e4f70.startColumn === _0xd7e0c5.startColumn &&
 _0x5e4f70.endColumn === _0xd7e0c5.endColumn &&
 _0x5e4f70.startRow <= _0xd7e0c5.startRow &&
 _0x5e4f70.endRow >= _0xd7e0c5.endRow
 ) {
 let _0x4185e7 = fo(_0x1bcaeb.params).order;
 return {
 m1Prime: [],
 m2Prime: {
 id: o.ReorderRangeMutation["id"],
 params: {
 ..._0x45d857.params,
 range: _0x5e4f70,
 order: po(_0x4185e7, _0x45d857.params["order"]),
 },
 },
 };
 }
 return e.Rectangle["intersects"](_0xd7e0c5, _0x5e4f70)
 ? {
 error: Error(
 "reorder\x20range\x20is\x20conflict\x20with\x20reorder\x20range",
 ),
 }
 : _0x34fb79;
 },
 },
 ho = {
 m1: x.id,
 m2: "any",
 handler(_0x282a48, _0x283a05) {
 return {
 error: Error("RevertRevisionMutation conflicts with other mutations!"),
 };
 },
 },
 go = {
 m1: "any",
 m2: x.id,
 handler(_0x211c54, _0x37ef02) {
 return _0x211c54.params["unitId"] === _0x37ef02.params["unitId"]
 ? { m1Prime: [], m2Prime: _0x37ef02 }
 : { m1Prime: _0x211c54, m2Prime: _0x37ef02 };
 },
 },
 _o = {
 m1: o.SetColDataMutation["id"],
 m2: o.SetColDataMutation["id"],
 handler(_0x5585d0, _0x5cb783) {
 let _0x36ccdb = { m1Prime: _0x5585d0, m2Prime: _0x5cb783 };
 if (
 _0x5585d0.params["unitId"] !== _0x5cb783.params["unitId"] ||
 _0x5585d0.params["subUnitId"] !== _0x5cb783.params["subUnitId"]
 )
 return _0x36ccdb;
 let _0x1e6e42 = _0x5585d0.params["columnData"],
 _0x45aac6 = _0x5cb783.params["columnData"],
 _0x5e92eb = {},
 _0x51fae6 = e.Tools["deepClone"](_0x5585d0),
 _0x3d8c21 = new Set([
 ...Object.keys(_0x1e6e42).map(Number),
 ...Object.keys(_0x45aac6).map(Number),
 ]);
 for (let _0x55f83f of _0x3d8c21) {
 let _0x25c2c1 = _0x1e6e42[_0x55f83f],
 _0x58b3cd = _0x45aac6[_0x55f83f];
 _0x25c2c1 && _0x58b3cd
 ? (_0x5e92eb[_0x55f83f] = { ..._0x25c2c1, ..._0x58b3cd })
 : _0x25c2c1
 ? (_0x5e92eb[_0x55f83f] = _0x25c2c1)
 : _0x58b3cd && (_0x5e92eb[_0x55f83f] = _0x58b3cd);
 }
 return (
 (_0x51fae6.params["columnData"] = _0x5e92eb),
 { m1Prime: _0x51fae6, m2Prime: _0x5cb783 }
 );
 },
 },
 vo = {
 m1: l.SetConditionalRuleMutation["id"],
 m2: l.SetConditionalRuleMutation["id"],
 handler(_0x5a8aff, _0x2682ac) {
 return _0x5a8aff.params["unitId"] !== _0x2682ac.params["unitId"] ||
 _0x5a8aff.params["subUnitId"] !== _0x2682ac.params["subUnitId"] ||
 (_0x5a8aff.params["cfId"] || _0x5a8aff.params["rule"].cfId) !==
 (_0x2682ac.params["cfId"] || _0x2682ac.params["rule"].cfId)
 ? { m1Prime: _0x5a8aff, m2Prime: _0x2682ac }
 : { m1Prime: [], m2Prime: e.Tools["deepClone"](_0x2682ac) };
 },
 };
function yo(_0x3ef014, _0x589163) {
 let _0x48b8e4 = _0x3ef014.reduce(
 (_0x43dcbe, _0x3e8023) => (
 _0x43dcbe.set(_0x3e8023.drawingId, true),
 _0x43dcbe
 ),
 new Map(),
 );
 return _0x589163.some(
 (_0x2cb81c) => _0x48b8e4.get(_0x2cb81c.drawingId) !== undefined,
 );
}
function bo(_0x15323b, _0x47878b) {
 let _0x275598 = _0x15323b.drawingIds;
 return _0x47878b.drawingIds["some"](
 (_0x315c6b) => _0x275598.indexOf(_0x315c6b) !== -1,
 );
}
const { UPDATE: xo, REMOVE: So, ARRANGE: Co } = h.DrawingApplyType,
 wo = {
 m1: h.SetDrawingApplyMutation["id"],
 m2: h.SetDrawingApplyMutation["id"],
 handler(_0x641664, _0x226341) {
 let _0x4db642 = _0x641664.params,
 _0x582e53 = _0x226341.params;
 if (
 _0x4db642.unitId !== _0x582e53.unitId ||
 _0x4db642.subUnitId !== _0x582e53.subUnitId
 )
 return { m1Prime: _0x641664, m2Prime: _0x226341 };
 let _0x363b32 = _0x4db642.type,
 _0x4344e4 = _0x582e53.type;
 if (
 _0x363b32 === So &&
 _0x4344e4 === xo &&
 yo(_0x4db642.objects, _0x582e53.objects)
 )
 return { m1Prime: e.Tools["deepClone"](_0x641664), m2Prime: [] };
 if (
 _0x363b32 === Co &&
 _0x4344e4 === Co &&
 bo(_0x4db642.objects, _0x582e53.objects)
 ) {
 let _0x2dcdbe = e.Tools["deepClone"](_0x641664),
 _0x384e6b = e.Tools["deepClone"](_0x226341);
 return {
 m1Prime: {
 ..._0x2dcdbe,
 params: {
 ..._0x2dcdbe.params,
 op: e.JSON1["type"].transform(
 _0x2dcdbe.params["op"],
 _0x384e6b.params["op"],
 "left",
 ),
 },
 },
 m2Prime: {
 ..._0x384e6b,
 params: {
 ..._0x384e6b.params,
 op: e.JSON1["type"].transform(
 _0x384e6b.params["op"],
 _0x2dcdbe.params["op"],
 "right",
 ),
 },
 },
 };
 }
 return { m1Prime: _0x641664, m2Prime: _0x226341 };
 },
 },
 To = {
 m1: o.SetFrozenMutation["id"],
 m2: o.SetFrozenMutation["id"],
 handler(_0x43fd34, _0x429e29) {
 return _0x43fd34.params["unitId"] !== _0x429e29.params["unitId"] ||
 _0x43fd34.params["subUnitId"] !== _0x429e29.params["subUnitId"]
 ? { m1Prime: _0x43fd34, m2Prime: _0x429e29 }
 : { m1Prime: [], m2Prime: _0x429e29 };
 },
 },
 Eo = {
 m1: o.SetNumfmtMutation["id"],
 m2: o.RemoveNumfmtMutation["id"],
 handler(_0x8ecee8, _0x11f1be) {
 if (
 _0x8ecee8.params["unitId"] !== _0x11f1be.params["unitId"] ||
 _0x8ecee8.params["subUnitId"] !== _0x11f1be.params["subUnitId"]
 )
 return { m1Prime: _0x8ecee8, m2Prime: _0x11f1be };
 let _0x69972b = e.Tools["deepClone"](_0x8ecee8),
 _0x3b5bdf = e.Tools["deepClone"](_0x11f1be),
 _0x2d469d = _0x69972b.params["values"],
 _0x1ae66f = _0x3b5bdf.params["ranges"];
 for (let _0x45e2df in _0x2d469d) {
 let _0x4ad5f7 = _0x2d469d[_0x45e2df].ranges,
 _0x4ee543 = [];
 (_0x4ad5f7.forEach((_0x578c65) => {
 let _0x21da1d = Cr(_0x578c65, _0x1ae66f);
 _0x21da1d.length > 0 && _0x4ee543.push(..._0x21da1d);
 }),
 (_0x2d469d[_0x45e2df].ranges = _0x4ee543));
 }
 return { m1Prime: _0x69972b, m2Prime: _0x3b5bdf };
 },
 },
 Do = {
 m1: o.SetNumfmtMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler(_0x29c3e2, _0x587f15) {
 if (
 _0x29c3e2.params["unitId"] !== _0x587f15.params["unitId"] ||
 _0x29c3e2.params["subUnitId"] !== _0x587f15.params["subUnitId"]
 )
 return { m1Prime: _0x29c3e2, m2Prime: _0x587f15 };
 let _0x54271d = e.Tools["deepClone"](_0x29c3e2),
 _0x2c1ee2 = e.Tools["deepClone"](_0x587f15),
 _0x4498fd = _0x54271d.params["values"],
 _0x435599 = Object.values(_0x2c1ee2.params["values"])
 .map((_0x1721d8) => _0x1721d8.ranges)
 .flat();
 for (let _0x4dae54 in _0x4498fd) {
 let _0x31eadb = _0x4498fd[_0x4dae54].ranges,
 _0x13f789 = [];
 (_0x31eadb.forEach((_0x16d1a5) => {
 let _0x332846 = Cr(_0x16d1a5, _0x435599);
 _0x332846.length > 0 && _0x13f789.push(..._0x332846);
 }),
 (_0x4498fd[_0x4dae54].ranges = _0x13f789));
 }
 return { m1Prime: _0x54271d, m2Prime: _0x2c1ee2 };
 },
 },
 Oo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: c.AddCommentMutation["id"],
 handler: (_0x3a2d08, _0x474121) => {
 let _0xd80e8c = { m1Prime: _0x3a2d08, m2Prime: _0x474121 };
 return _0x3a2d08.params["unitId"] !== _0x474121.params["unitId"] ||
 _0x3a2d08.params["subUnitId"] !== _0x474121.params["subUnitId"]
 ? _0xd80e8c
 : {
 error: Error(
 "set\x20range\x20protection\x20is\x20conflict\x20with\x20add\x20comment",
 ),
 };
 },
 },
 ko = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: l.AddConditionalRuleMutation["id"],
 handler: (_0x596119, _0x340ecc) => {
 let _0x2bfe11 = { m1Prime: _0x596119, m2Prime: _0x340ecc };
 if (
 _0x596119.params["unitId"] !== _0x340ecc.params["unitId"] ||
 _0x596119.params["subUnitId"] !== _0x340ecc.params["subUnitId"]
 )
 return _0x2bfe11;
 let _0x4bbbb8 = _0x596119.params["rule"].ranges,
 _0x142bcd = _0x340ecc.params["rule"].ranges;
 return _0x4bbbb8.some((_0x2c02c4) =>
 _0x142bcd.some((_0x2a03a8) =>
 e.Rectangle["intersects"](_0x2c02c4, _0x2a03a8),
 ),
 )
 ? {
 error: Error(
 "set range protection is conflict with add conditional rule",
 ),
 }
 : _0x2bfe11;
 },
 },
 Ao = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler: (_0xf8f581, _0x35d917) => {
 let _0x2f2d2b = { m1Prime: _0xf8f581, m2Prime: _0x35d917 };
 if (
 _0xf8f581.params["unitId"] !== _0x35d917.params["unitId"] ||
 _0xf8f581.params["subUnitId"] !== _0x35d917.params["subUnitId"]
 )
 return _0x2f2d2b;
 let _0xd3f4ba = _0xf8f581.params["rule"].ranges,
 _0xc18b19 = _0x35d917.params["ranges"];
 return _0xd3f4ba.some((_0x343312) =>
 _0xc18b19.some((_0x19d88b) =>
 e.Rectangle["intersects"](_0x343312, _0x19d88b),
 ),
 )
 ? {
 error: Error(
 "set range protection is conflict with add worksheet merge",
 ),
 }
 : _0x2f2d2b;
 },
 },
 jo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.AddWorksheetProtectionMutation["id"],
 handler: (_0x507816, _0xe60aed) => {
 let _0x20f211 = { m1Prime: _0x507816, m2Prime: _0xe60aed };
 return _0x507816.params["unitId"] !== _0xe60aed.params["unitId"] ||
 _0x507816.params["subUnitId"] !== _0xe60aed.params["rule"].subUnitId
 ? _0x20f211
 : {
 error: Error(
 "set range protection is conflict with add worksheet protection",
 ),
 };
 },
 },
 Mo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: l.DeleteConditionalRuleMutation["id"],
 handler: (_0x2d1a6d, _0x389ebd) => {
 let _0x94739e = { m1Prime: _0x2d1a6d, m2Prime: _0x389ebd };
 return _0x2d1a6d.params["unitId"] !== _0x389ebd.params["unitId"] ||
 _0x2d1a6d.params["subUnitId"] !== _0x389ebd.params["subUnitId"]
 ? _0x94739e
 : {
 error: Error(
 "set range protection is conflict with delete conditional formatting rule",
 ),
 };
 },
 },
 No = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.InsertColMutation["id"],
 handler: (_0x108684, _0x414799) => {
 let _0x17c443 = { m1Prime: _0x108684, m2Prime: _0x414799 };
 if (
 _0x108684.params["unitId"] !== _0x414799.params["unitId"] ||
 _0x108684.params["subUnitId"] !== _0x414799.params["subUnitId"]
 )
 return _0x17c443;
 let _0x6137ce = _0x108684.params["rule"].ranges,
 _0x541619 = _0x414799.params["range"];
 return _0x6137ce.some((_0x357b6d) =>
 e.Rectangle["intersects"](_0x357b6d, _0x541619),
 )
 ? { error: Error("set range protection is conflict with insert col") }
 : _0x17c443;
 },
 },
 Po = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.InsertRowMutation["id"],
 handler: (_0x26e120, _0x2d8033) => {
 let _0x45a13c = { m1Prime: _0x26e120, m2Prime: _0x2d8033 };
 if (
 _0x26e120.params["unitId"] !== _0x2d8033.params["unitId"] ||
 _0x26e120.params["subUnitId"] !== _0x2d8033.params["subUnitId"]
 )
 return _0x45a13c;
 let _0x211700 = _0x26e120.params["rule"].ranges,
 _0xa6397a = _0x2d8033.params["range"];
 return _0x211700.some((_0x5a88b6) =>
 e.Rectangle["intersects"](_0x5a88b6, _0xa6397a),
 )
 ? {
 error: Error(
 "set\x20range\x20protection\x20is\x20conflict\x20with\x20insert\x20row",
 ),
 }
 : _0x45a13c;
 },
 },
 Fo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.MoveColsMutation["id"],
 handler: (_0x52df7c, _0x2836fe) => {
 let _0x38cbf5 = { m1Prime: _0x52df7c, m2Prime: _0x2836fe };
 if (
 _0x52df7c.params["unitId"] !== _0x2836fe.params["unitId"] ||
 _0x52df7c.params["subUnitId"] !== _0x2836fe.params["subUnitId"]
 )
 return _0x38cbf5;
 let _0x6f521b = _0x52df7c.params["rule"].ranges,
 _0x2edc4e = [
 _0x2836fe.params["sourceRange"],
 _0x2836fe.params["targetRange"],
 ];
 return _0x6f521b.some((_0x260856) =>
 _0x2edc4e.some((_0x56e148) =>
 e.Rectangle["intersects"](_0x260856, _0x56e148),
 ),
 )
 ? { error: Error("set range protection is conflict with move col") }
 : _0x38cbf5;
 },
 },
 Io = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler: (_0x2035bb, _0x4c7c57) => {
 let _0x241168 = { m1Prime: _0x2035bb, m2Prime: _0x4c7c57 };
 if (
 _0x2035bb.params["unitId"] !== _0x4c7c57.params["unitId"] ||
 _0x2035bb.params["subUnitId"] !== _0x4c7c57.params["from"].subUnitId
 )
 return _0x241168;
 let _0x3ece55 = _0x2035bb.params["rule"].ranges,
 _0x165606 = [
 new e["ObjectMatrix"](_0x4c7c57.params["from"].value).getDataRange(),
 new e.ObjectMatrix(_0x4c7c57.params["to"].value).getDataRange(),
 ];
 return _0x3ece55.some((_0xfee4f2) =>
 _0x165606.some((_0x4cf69f) =>
 e.Rectangle["intersects"](_0xfee4f2, _0x4cf69f),
 ),
 )
 ? { error: Error("set range protection is conflict with move range") }
 : _0x241168;
 },
 },
 Lo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.MoveRowsMutation["id"],
 handler: (_0x5a9bdc, _0x192412) => {
 let _0x596915 = { m1Prime: _0x5a9bdc, m2Prime: _0x192412 };
 if (
 _0x5a9bdc.params["unitId"] !== _0x192412.params["unitId"] ||
 _0x5a9bdc.params["subUnitId"] !== _0x192412.params["subUnitId"]
 )
 return _0x596915;
 let _0x31cabc = _0x5a9bdc.params["rule"].ranges,
 _0x5943bf = [
 _0x192412.params["sourceRange"],
 _0x192412.params["targetRange"],
 ];
 return _0x31cabc.some((_0x1c01da) =>
 _0x5943bf.some((_0x48dea3) =>
 e.Rectangle["intersects"](_0x1c01da, _0x48dea3),
 ),
 )
 ? {
 error: Error(
 "set\x20range\x20protection\x20is\x20conflict\x20with\x20move\x20row",
 ),
 }
 : _0x596915;
 },
 },
 Ro = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.RemoveColMutation["id"],
 handler: (_0x5677e5, _0x173d49) => {
 let _0x1bfa47 = { m1Prime: _0x5677e5, m2Prime: _0x173d49 };
 if (
 _0x5677e5.params["unitId"] !== _0x173d49.params["unitId"] ||
 _0x5677e5.params["subUnitId"] !== _0x173d49.params["subUnitId"]
 )
 return _0x1bfa47;
 let _0x24af3a = _0x5677e5.params["rule"].ranges,
 _0x3513e1 = _0x173d49.params["range"];
 return _0x24af3a.some((_0xbea557) =>
 e.Rectangle["intersects"](_0xbea557, _0x3513e1),
 )
 ? { error: Error("set range protection is conflict with remove col") }
 : _0x1bfa47;
 },
 },
 zo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: u.RemoveDataValidationMutation["id"],
 handler: (_0x23bf3e, _0x89956) => {
 let _0x205107 = { m1Prime: _0x23bf3e, m2Prime: _0x89956 };
 return _0x23bf3e.params["unitId"] !== _0x89956.params["unitId"] ||
 _0x23bf3e.params["subUnitId"] !== _0x89956.params["subUnitId"]
 ? _0x205107
 : {
 error: Error(
 "set\x20range\x20protection\x20is\x20conflict\x20with\x20remove\x20data\x20validation\x20rule",
 ),
 };
 },
 },
 Bo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.RemoveRowMutation["id"],
 handler: (_0x336b43, _0x78750c) => {
 let _0x48f50b = { m1Prime: _0x336b43, m2Prime: _0x78750c };
 if (
 _0x336b43.params["unitId"] !== _0x78750c.params["unitId"] ||
 _0x336b43.params["subUnitId"] !== _0x78750c.params["subUnitId"]
 )
 return _0x48f50b;
 let _0x3257fb = _0x336b43.params["rule"].ranges,
 _0x20848b = _0x78750c.params["range"];
 return _0x3257fb.some((_0x283d72) =>
 e.Rectangle["intersects"](_0x283d72, _0x20848b),
 )
 ? {
 error: Error(
 "set\x20range\x20protection\x20is\x20conflict\x20with\x20remove\x20row",
 ),
 }
 : _0x48f50b;
 },
 },
 Vo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: f.RemoveSheetsFilterMutation["id"],
 handler: (_0x3e68c2, _0x531bf0) => {
 let _0x5f28e8 = { m1Prime: _0x3e68c2, m2Prime: _0x531bf0 };
 return _0x3e68c2.params["unitId"] !== _0x531bf0.params["unitId"] ||
 _0x3e68c2.params["subUnitId"] !== _0x531bf0.params["subUnitId"]
 ? _0x5f28e8
 : {
 error: Error(
 "set\x20range\x20protection\x20is\x20conflict\x20with\x20remove\x20filter",
 ),
 };
 },
 },
 Ho = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler: (_0x2ce271, _0x548a0a) => {
 let _0x3a40b1 = { m1Prime: _0x2ce271, m2Prime: _0x548a0a };
 if (
 _0x2ce271.params["unitId"] !== _0x548a0a.params["unitId"] ||
 _0x2ce271.params["subUnitId"] !== _0x548a0a.params["subUnitId"]
 )
 return _0x3a40b1;
 let _0x2b46e3 = _0x2ce271.params["rule"].ranges,
 _0xcd5b9d = _0x548a0a.params["ranges"];
 return _0x2b46e3.some((_0x19e59c) =>
 _0xcd5b9d.some((_0x3f93e2) =>
 e.Rectangle["intersects"](_0x19e59c, _0x3f93e2),
 ),
 )
 ? {
 error: Error(
 "set range protection is conflict with remove worksheet merge",
 ),
 }
 : _0x3a40b1;
 },
 },
 Uo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: l.SetConditionalRuleMutation["id"],
 handler: (_0x8de32e, _0x1ea54d) => {
 let _0x5cd0a7 = { m1Prime: _0x8de32e, m2Prime: _0x1ea54d };
 if (
 _0x8de32e.params["unitId"] !== _0x1ea54d.params["unitId"] ||
 _0x8de32e.params["subUnitId"] !== _0x1ea54d.params["subUnitId"]
 )
 return _0x5cd0a7;
 let _0x37962e = _0x8de32e.params["rule"].ranges,
 _0x31871b = _0x1ea54d.params["rule"].ranges;
 return _0x37962e.some((_0x2b3f16) =>
 _0x31871b.some((_0x18f0d4) =>
 e.Rectangle["intersects"](_0x2b3f16, _0x18f0d4),
 ),
 )
 ? {
 error: Error(
 "set range protection is conflict with set conditional formatting rule",
 ),
 }
 : _0x5cd0a7;
 },
 },
 Wo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.SetFrozenMutation["id"],
 handler: (_0x1fe41f, _0x260097) => {
 let _0x5063f1 = { m1Prime: _0x1fe41f, m2Prime: _0x260097 };
 if (
 _0x1fe41f.params["unitId"] !== _0x260097.params["unitId"] ||
 _0x1fe41f.params["subUnitId"] !== _0x260097.params["subUnitId"]
 )
 return _0x5063f1;
 let _0x4a4776 = _0x1fe41f.params["rule"].ranges,
 _0x2da986 = [
 {
 startRow: _0x260097.params["startRow"],
 endRow: _0x260097.params["startRow"],
 startColumn: _0x260097.params["startColumn"],
 endColumn: _0x260097.params["startColumn"],
 },
 ];
 return _0x4a4776.some((_0x56e6d6) =>
 _0x2da986.some((_0x3fcbd4) =>
 e.Rectangle["intersects"](_0x56e6d6, _0x3fcbd4),
 ),
 )
 ? { error: Error("set range protection is conflict with set frozen") }
 : _0x5063f1;
 },
 },
 Go = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.SetNumfmtMutation["id"],
 handler: (_0x5cdce0, _0x28bc6) => {
 let _0x254bf8 = { m1Prime: _0x5cdce0, m2Prime: _0x28bc6 };
 return _0x5cdce0.params["unitId"] !== _0x28bc6.params["unitId"] ||
 _0x5cdce0.params["subUnitId"] !== _0x28bc6.params["subUnitId"]
 ? _0x254bf8
 : { error: Error("set range protection is conflict with set numfmt") };
 },
 },
 Ko = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.SetRangeProtectionMutation["id"],
 handler: (_0x3cf255, _0x41a72d) => {
 let _0x374f33 = { m1Prime: _0x3cf255, m2Prime: _0x41a72d };
 if (
 _0x3cf255.params["unitId"] !== _0x41a72d.params["unitId"] ||
 _0x3cf255.params["subUnitId"] !== _0x41a72d.params["subUnitId"]
 )
 return _0x374f33;
 let _0x55fe1c = _0x3cf255.params["rule"].ranges,
 _0x5a630a = _0x41a72d.params["rule"].ranges;
 return _0x55fe1c.some((_0x250c1d) =>
 _0x5a630a.some((_0x26735d) =>
 e.Rectangle["intersects"](_0x250c1d, _0x26735d),
 ),
 )
 ? {
 error: Error(
 "set range protection is conflict with set range protection",
 ),
 }
 : _0x374f33;
 },
 },
 qo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler: (_0x17a665, _0x3e4045) => {
 let _0x1fc427 = { m1Prime: _0x17a665, m2Prime: _0x3e4045 };
 if (
 _0x17a665.params["unitId"] !== _0x3e4045.params["unitId"] ||
 _0x17a665.params["subUnitId"] !== _0x3e4045.params["subUnitId"]
 )
 return _0x1fc427;
 let _0x49e9aa = _0x17a665.params["rule"].ranges,
 _0x89a2fa = new e["ObjectMatrix"](
 _0x3e4045.params["cellValue"],
 ).getDataRange();
 return _0x49e9aa.some((_0x36eca3) =>
 e.Rectangle["intersects"](_0x36eca3, _0x89a2fa),
 )
 ? {
 error: Error(
 "set range protection is conflict with set range value",
 ),
 }
 : _0x1fc427;
 },
 },
 Jo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: o.SetWorksheetColWidthMutation["id"],
 handler: (_0x28dbe1, _0x4fbbd1) => {
 let _0x3a28f1 = { m1Prime: _0x28dbe1, m2Prime: _0x4fbbd1 };
 if (
 _0x28dbe1.params["unitId"] !== _0x4fbbd1.params["unitId"] ||
 _0x28dbe1.params["subUnitId"] !== _0x4fbbd1.params["subUnitId"]
 )
 return _0x3a28f1;
 let _0x28eb17 = _0x28dbe1.params["rule"].ranges,
 _0x2e5b90 = _0x4fbbd1.params["ranges"];
 return _0x28eb17.some((_0x47cb92) =>
 _0x2e5b90.some((_0xfad687) =>
 e.Rectangle["intersects"](_0x47cb92, _0xfad687),
 ),
 )
 ? {
 error: Error(
 "set range protection is conflict with set worksheet col width",
 ),
 }
 : _0x3a28f1;
 },
 },
 Yo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: c.UpdateCommentMutation["id"],
 handler: (_0x3a6125, _0x12be72) => {
 let _0x414428 = { m1Prime: _0x3a6125, m2Prime: _0x12be72 };
 return _0x3a6125.params["unitId"] !== _0x12be72.params["unitId"] ||
 _0x3a6125.params["subUnitId"] !== _0x12be72.params["subUnitId"]
 ? _0x414428
 : {
 error: Error(
 "set range protection is conflict with update comment",
 ),
 };
 },
 },
 Xo = {
 m1: o.SetRangeProtectionMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x52431b, _0x25a232) => {
 let _0x5125d4 = { m1Prime: _0x52431b, m2Prime: _0x25a232 };
 return _0x52431b.params["unitId"] !== _0x25a232.params["unitId"] ||
 _0x52431b.params["subUnitId"] !== _0x25a232.params["subUnitId"]
 ? _0x5125d4
 : {
 error: Error(
 "set range protection is conflict with update data validation rule",
 ),
 };
 },
 },
 Zo = {
 m1: o.SetRangeValuesMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0xd283b, _0x35fc00) {
 let _0x1bf921 = pn.handler(_0x35fc00, _0xd283b);
 return S(_0x1bf921)
 ? { m1Prime: _0x1bf921.m2Prime, m2Prime: _0x1bf921.m1Prime }
 : _0x1bf921;
 },
 },
 Qo = {
 m1: o.SetRangeValuesMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x23b053, _0x2b2dbd) {
 let _0x1b5fe6 = { m1Prime: _0x23b053, m2Prime: _0x2b2dbd };
 if (_0x23b053.params["unitId"] !== _0x2b2dbd.params["unitId"])
 return _0x1b5fe6;
 let _0x19a9cf = new e["ObjectMatrix"](
 _0x23b053.params["cellValue"],
 ).getDataRange(),
 _0x23db87 = new e["ObjectMatrix"](
 _0x2b2dbd.params["from"].value,
 ).getDataRange(),
 _0x3366d6 = new e["ObjectMatrix"](
 _0x2b2dbd.params["to"].value,
 ).getDataRange();
 return (_0x23b053.params["subUnitId"] ===
 _0x2b2dbd.params["from"].subUnitId &&
 e.Rectangle["intersects"](_0x19a9cf, _0x23db87)) ||
 (_0x23b053.params["subUnitId"] === _0x2b2dbd.params["to"].subUnitId &&
 e.Rectangle["intersects"](_0x19a9cf, _0x3366d6))
 ? {
 error: Error(
 "Set-range-values\x20mutation\x20and\x20move-range\x20mutation\x20have\x20an\x20overlapping\x20range.",
 ),
 }
 : _0x1b5fe6;
 },
 },
 $o = {
 m1: o.SetRangeValuesMutation["id"],
 m2: o.ReorderRangeMutation["id"],
 handler(_0x314cbe, _0x5a7f27) {
 let _0x1f25da = { m1Prime: _0x314cbe, m2Prime: _0x5a7f27 };
 if (
 _0x314cbe.params["unitId"] !== _0x5a7f27.params["unitId"] ||
 _0x314cbe.params["subUnitId"] !== _0x5a7f27.params["subUnitId"]
 )
 return _0x1f25da;
 let _0x2ad2de = e.Tools["deepClone"](_0x314cbe),
 { cellValue: _0x50d731 } = _0x2ad2de.params,
 _0x291137 = new e["ObjectMatrix"](_0x50d731),
 { range: _0x46c5ad } = _0x5a7f27.params,
 _0x5a29a2 = new Map();
 for (
 let _0x25cbcc = _0x46c5ad.startColumn;
 _0x25cbcc <= _0x46c5ad.endColumn;
 _0x25cbcc++
 )
 for (
 let _0x277fed = _0x46c5ad.startRow;
 _0x277fed <= _0x46c5ad.endRow;
 _0x277fed++
 ) {
 var _0x1d8823;
 if (
 (_0x50d731 == null || (_0x1d8823 = _0x50d731[_0x277fed]) == null
 ? undefined
 : _0x1d8823[_0x25cbcc]) !== undefined
 ) {
 let _0x27d4a6 = _0x5a7f27.params["order"][_0x277fed] ?? _0x277fed;
 _0x27d4a6 !== _0x277fed &&
 (_0x5a29a2.has(_0x27d4a6) || _0x5a29a2.set(_0x27d4a6, new Map()),
 _0x5a29a2
 .get(_0x27d4a6)
 .set(_0x25cbcc, _0x50d731[_0x277fed][_0x25cbcc]),
 _0x291137.realDeleteValue(_0x277fed, _0x25cbcc));
 }
 }
 return (
 _0x5a29a2.forEach((_0x420397, _0x5e0677) => {
 _0x420397.forEach((_0x17db8e, _0x12b8dd) => {
 _0x291137.setValue(_0x5e0677, _0x12b8dd, _0x17db8e);
 });
 }),
 { m1Prime: _0x2ad2de, m2Prime: _0x5a7f27 }
 );
 },
 },
 es = (_0x45deed, _0x2cbbb6) =>
 _0x45deed
 ? _0x2cbbb6
 ? { ..._0x45deed, ..._0x2cbbb6 }
 : _0x45deed
 : _0x2cbbb6,
 ts = {
 m1: o.SetRangeValuesMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler(_0x361088, _0x910287) {
 let _0x49433b = { m1Prime: _0x361088, m2Prime: _0x910287 };
 if (
 _0x361088.params["unitId"] !== _0x910287.params["unitId"] ||
 _0x361088.params["subUnitId"] !== _0x910287.params["subUnitId"]
 )
 return _0x49433b;
 let _0xa354e1 = e.Tools["deepClone"](_0x361088),
 _0x2020fb = e.Tools["deepClone"](_0x910287),
 _0x29f24b = new e["ObjectMatrix"](_0xa354e1.params["cellValue"]),
 _0x4f6fae = _0x29f24b.getDataRange(),
 _0x1ded13 = new e.ObjectMatrix(_0x910287.params["cellValue"]),
 _0x1372bf = _0x1ded13.getDataRange();
 return e.Rectangle["intersects"](_0x4f6fae, _0x1372bf)
 ? (_0x29f24b.forValue((_0x16968e, _0x30ff43, _0x21c45c) => {
 let _0x445933 = _0x1ded13.getValue(_0x16968e, _0x30ff43);
 if (_0x21c45c && _0x445933) {
 var _0x25d006, _0x37118a;
 let _0x20ff06 = e.Tools["deepClone"](
 typeof _0x21c45c.s == "string"
 ? (_0x25d006 = _0xa354e1.params["styleRefMap"]) == null
 ? undefined
 : _0x25d006[_0x21c45c.s]
 : _0x21c45c.s,
 ),
 _0x4049ff = e.Tools["deepClone"](
 typeof _0x445933.s == "string"
 ? (_0x37118a = _0x2020fb.params["styleRefMap"]) == null
 ? undefined
 : _0x37118a[_0x445933.s]
 : _0x445933.s,
 );
 ((_0x445933.s = es(_0x20ff06, _0x4049ff)),
 _0x1ded13.setValue(_0x16968e, _0x30ff43, _0x445933),
 _0x29f24b.realDeleteValue(_0x16968e, _0x30ff43));
 }
 }),
 (_0xa354e1.params["cellValue"] = _0x29f24b.getMatrix()),
 (_0x2020fb.params["cellValue"] = _0x1ded13.getMatrix()),
 { m1Prime: _0xa354e1, m2Prime: _0x2020fb })
 : _0x49433b;
 },
 },
 ns = {
 m1: o.SetRowDataMutation["id"],
 m2: o.SetRowDataMutation["id"],
 handler(_0x3e6b0a, _0x161e0c) {
 let _0x25cbde = { m1Prime: _0x3e6b0a, m2Prime: _0x161e0c };
 if (
 _0x3e6b0a.params["unitId"] !== _0x161e0c.params["unitId"] ||
 _0x3e6b0a.params["subUnitId"] !== _0x161e0c.params["subUnitId"]
 )
 return _0x25cbde;
 let _0x1d4a35 = _0x3e6b0a.params["rowData"],
 _0x1a5bab = _0x161e0c.params["rowData"],
 _0x5086b8 = {},
 _0xa98d40 = e.Tools["deepClone"](_0x3e6b0a),
 _0x140afb = new Set([
 ...Object.keys(_0x1d4a35).map(Number),
 ...Object.keys(_0x1a5bab).map(Number),
 ]);
 for (let _0x209692 of _0x140afb) {
 let _0x2bfa34 = _0x1d4a35[_0x209692],
 _0x15de8d = _0x1a5bab[_0x209692];
 _0x2bfa34 && _0x15de8d
 ? (_0x5086b8[_0x209692] = { ..._0x2bfa34, ..._0x15de8d })
 : _0x2bfa34
 ? (_0x5086b8[_0x209692] = _0x2bfa34)
 : _0x15de8d && (_0x5086b8[_0x209692] = _0x15de8d);
 }
 return (
 (_0xa98d40.params["rowData"] = _0x5086b8),
 { m1Prime: _0xa98d40, m2Prime: _0x161e0c }
 );
 },
 },
 rs = {
 m1: f.SetSheetsFilterCriteriaMutation["id"],
 m2: o.MoveRangeMutation["id"],
 handler(_0x5b550d, _0x18a750) {
 let _0x5abed5 = { m1Prime: _0x5b550d, m2Prime: _0x18a750 };
 if (
 _0x5b550d.params["unitId"] !== _0x18a750.params["unitId"] ||
 (_0x5b550d.params["subUnitId"] !== _0x18a750.params["from"].subUnitId &&
 _0x5b550d.params["subUnitId"] !== _0x18a750.params["to"].subUnitId)
 )
 return _0x5abed5;
 let _0xb96fed = null;
 return (
 _0x5b550d.params["subUnitId"] === _0x18a750.params["from"].subUnitId &&
 new e["ObjectMatrix"](_0x18a750.params["from"].value).forValue(
 (_0x1a7963, _0x23f6e2) => {
 _0x23f6e2 === _0x5b550d.params["col"] &&
 (_0xb96fed = _0x18a750.params["from"].subUnitId);
 },
 ),
 _0x5b550d.params["subUnitId"] === _0x18a750.params["to"].subUnitId &&
 new e["ObjectMatrix"](_0x18a750.params["to"].value).forValue(
 (_0x27492a, _0x273605) => {
 _0x273605 === _0x5b550d.params["col"] &&
 (_0xb96fed = _0x18a750.params["to"].subUnitId);
 },
 ),
 _0xb96fed
 ? {
 m1Prime: _0x5b550d,
 m2Prime: [
 _0x18a750,
 {
 id: f.ReCalcSheetsFilterMutation["id"],
 params: {
 unitId: _0x18a750.params["unitId"],
 subUnitId: _0xb96fed,
 },
 },
 ],
 }
 : _0x5abed5
 );
 },
 },
 is = {
 m1: f.SetSheetsFilterCriteriaMutation["id"],
 m2: f.RemoveSheetsFilterMutation["id"],
 handler(_0x3f3a16, _0x2ff1c6) {
 let _0x5755b7 = { m1Prime: _0x3f3a16, m2Prime: _0x2ff1c6 };
 return _0x3f3a16.params["unitId"] !== _0x2ff1c6.params["unitId"] ||
 _0x3f3a16.params["subUnitId"] !== _0x2ff1c6.params["subUnitId"]
 ? _0x5755b7
 : { m1Prime: [], m2Prime: [_0x2ff1c6] };
 },
 },
 as = {
 m1: f.SetSheetsFilterCriteriaMutation["id"],
 m2: o.SetRangeValuesMutation["id"],
 handler(_0x544e40, _0x53fadd) {
 let _0x208139 = { m1Prime: _0x544e40, m2Prime: _0x53fadd };
 if (
 _0x544e40.params["unitId"] !== _0x53fadd.params["unitId"] ||
 _0x544e40.params["subUnitId"] !== _0x53fadd.params["subUnitId"]
 )
 return _0x208139;
 let _0x2d16b6 = false;
 return (
 new e["ObjectMatrix"](_0x53fadd.params["cellValue"]).forValue(
 (_0x4ecb86, _0x5b4fac) => {
 _0x5b4fac === _0x544e40.params["col"] && (_0x2d16b6 = true);
 },
 ),
 _0x2d16b6
 ? {
 m1Prime: _0x544e40,
 m2Prime: [
 _0x53fadd,
 {
 id: f.ReCalcSheetsFilterMutation["id"],
 params: {
 unitId: _0x53fadd.params["unitId"],
 subUnitId: _0x53fadd.params["subUnitId"],
 },
 },
 ],
 }
 : _0x208139
 );
 },
 },
 os = {
 m1: f.SetSheetsFilterCriteriaMutation["id"],
 m2: f.SetSheetsFilterCriteriaMutation["id"],
 handler(_0x4b2bb4, _0x17c105) {
 let _0xe4be27 = { m1Prime: _0x4b2bb4, m2Prime: _0x17c105 };
 return _0x4b2bb4.params["unitId"] !== _0x17c105.params["unitId"] ||
 _0x4b2bb4.params["subUnitId"] !== _0x17c105.params["subUnitId"] ||
 _0x4b2bb4.params["col"] !== _0x17c105.params["col"]
 ? _0xe4be27
 : { m1Prime: [], m2Prime: [_0x17c105] };
 },
 },
 ss = {
 m1: f.SetSheetsFilterRangeMutation["id"],
 m2: f.RemoveSheetsFilterMutation["id"],
 handler(_0x285070, _0x143a4b) {
 let _0x38d596 = { m1Prime: _0x285070, m2Prime: _0x143a4b };
 return _0x285070.params["unitId"] !== _0x143a4b.params["unitId"] ||
 _0x285070.params["subUnitId"] !== _0x143a4b.params["subUnitId"]
 ? _0x38d596
 : { m1Prime: [], m2Prime: [_0x143a4b] };
 },
 },
 cs = {
 m1: f.SetSheetsFilterRangeMutation["id"],
 m2: f.SetSheetsFilterRangeMutation["id"],
 handler(_0x18a785, _0x5efc89) {
 let _0x3f13e7 = { m1Prime: _0x18a785, m2Prime: _0x5efc89 };
 return _0x18a785.params["unitId"] !== _0x5efc89.params["unitId"] ||
 _0x18a785.params["subUnitId"] !== _0x5efc89.params["subUnitId"]
 ? _0x3f13e7
 : { m1Prime: [], m2Prime: [_0x5efc89] };
 },
 },
 ls = {
 m1: o.SetTabColorMutation["id"],
 m2: o.SetTabColorMutation["id"],
 handler(_0x678c0d, _0x3feef6) {
 return _0x678c0d.params["unitId"] !== _0x3feef6.params["unitId"] ||
 _0x678c0d.params["subUnitId"] !== _0x3feef6.params["subUnitId"]
 ? { m1Prime: _0x678c0d, m2Prime: _0x3feef6 }
 : { m1Prime: [], m2Prime: _0x3feef6 };
 },
 },
 us = {
 m1: o.SetWorksheetColWidthMutation["id"],
 m2: o.SetWorksheetColWidthMutation["id"],
 handler(_0x498192, _0x59ae95) {
 let _0x3c7bc3 = { m1Prime: _0x498192, m2Prime: _0x59ae95 };
 if (
 _0x498192.params["unitId"] !== _0x59ae95.params["unitId"] ||
 _0x498192.params["subUnitId"] !== _0x59ae95.params["subUnitId"]
 )
 return _0x3c7bc3;
 let _0x356723 = _0x498192.params["ranges"],
 _0x5a83e7 = [],
 _0x20ab5d = e.Tools["deepClone"](_0x498192),
 _0x49dd23 = _0x59ae95.params["ranges"];
 (_0x356723.forEach((_0x2e07b3) => {
 let _0x149960 = Tr(
 { start: _0x2e07b3.startColumn, end: _0x2e07b3.endColumn },
 _0x49dd23.map((_0x4ba0e9) => ({
 start: _0x4ba0e9.startColumn,
 end: _0x4ba0e9.endColumn,
 })),
 ).map((_0x478a49) => ({
 ..._0x2e07b3,
 startColumn: _0x478a49.start,
 endColumn: _0x478a49.end,
 }));
 _0x5a83e7.push(..._0x149960);
 }),
 (_0x20ab5d.params["ranges"] = _0x5a83e7));
 let { colWidth: _0x3c821a } = _0x20ab5d.params,
 { colWidth: _0x4cec6c } = _0x59ae95.params,
 _0x3a2056 = _0x3c821a,
 _0x215f57 = _0x4cec6c;
 return (
 typeof _0x3a2056 != "number" &&
 (typeof _0x215f57 == "number"
 ? _0x49dd23.forEach((_0x2bca32) => {
 for (
 let _0x41fd13 = _0x2bca32.startColumn;
 _0x41fd13 <= _0x2bca32.endColumn;
 _0x41fd13++
 )
 delete _0x3a2056[_0x41fd13];
 })
 : Object.keys(_0x215f57)
 .map(Number)
 .forEach((_0x49d4d6) => {
 _0x3a2056[_0x49d4d6] != null && delete _0x3a2056[_0x49d4d6];
 })),
 { m1Prime: _0x20ab5d, m2Prime: _0x59ae95 }
 );
 },
 },
 ds = {
 m1: o.SetWorksheetNameMutation["id"],
 m2: o.InsertSheetMutation["id"],
 handler(_0x4e6bea, _0x44a0c2) {
 if (_0x4e6bea.params["unitId"] !== _0x44a0c2.params["unitId"])
 return { m1Prime: _0x4e6bea, m2Prime: _0x44a0c2 };
 if (_0x4e6bea.params["subUnitId"] === _0x44a0c2.params["sheet"].id)
 return {
 error: Error(
 "SetWorksheetNameMutation\x20conflicts\x20with\x20InsertSheetMutation\x20on\x20the\x20same\x20worksheet\x20ID.",
 ),
 };
 if (_0x4e6bea.params["name"] === _0x44a0c2.params["sheet"].name) {
 let _0x508309 = {
 id: o.SetWorksheetNameMutation["id"],
 params: {
 unitId: _0x4e6bea.params["unitId"],
 subUnitId: _0x4e6bea.params["subUnitId"],
 name: _0x4e6bea.params["name"] + " (1)",
 },
 };
 return { m1Prime: _0x508309, m2Prime: [_0x508309, _0x44a0c2] };
 }
 return { m1Prime: [], m2Prime: [] };
 },
 },
 fs = {
 m1: o.SetWorksheetNameMutation["id"],
 m2: o.SetWorksheetNameMutation["id"],
 handler(_0x25f0d2, _0x1cfc1f) {
 if (_0x25f0d2.params["unitId"] !== _0x1cfc1f.params["unitId"])
 return { m1Prime: _0x25f0d2, m2Prime: _0x1cfc1f };
 if (_0x25f0d2.params["subUnitId"] === _0x1cfc1f.params["subUnitId"])
 return _0x25f0d2.params["name"] === _0x1cfc1f.params["name"]
 ? { m1Prime: [], m2Prime: [] }
 : { m1Prime: [], m2Prime: _0x1cfc1f };
 {
 if (_0x25f0d2.params["name"] !== _0x1cfc1f.params["name"])
 return { m1Prime: [], m2Prime: [] };
 let _0x51ce62 = {
 id: o.SetWorksheetNameMutation["id"],
 params: {
 unitId: _0x1cfc1f.params["unitId"],
 subUnitId: _0x1cfc1f.params["subUnitId"],
 name: _0x1cfc1f.params["name"] + " (1)",
 },
 };
 return { m1Prime: [_0x51ce62, _0x25f0d2], m2Prime: _0x51ce62 };
 }
 },
 },
 ps = {
 m1: o.SetWorksheetRowAutoHeightMutation["id"],
 m2: o.SetWorksheetRowAutoHeightMutation["id"],
 handler(_0x2c68f6, _0x45a208) {
 let _0x3591ec = { m1Prime: _0x2c68f6, m2Prime: _0x45a208 };
 if (
 _0x2c68f6.params["unitId"] !== _0x45a208.params["unitId"] ||
 _0x2c68f6.params["subUnitId"] !== _0x45a208.params["subUnitId"]
 )
 return _0x3591ec;
 let _0x1705e0 = _0x2c68f6.params["rowsAutoHeightInfo"],
 _0x3d7fe7 = [],
 _0x4a90a0 = e.Tools["deepClone"](_0x2c68f6),
 _0x3eeaea = _0x45a208.params["rowsAutoHeightInfo"];
 return (
 _0x1705e0.forEach((_0x4e8c4b) => {
 _0x3eeaea.find((_0x3b02ed) => _0x3b02ed.row === _0x4e8c4b.row) ||
 _0x3d7fe7.push(_0x4e8c4b);
 }),
 (_0x4a90a0.params["rowsAutoHeightInfo"] = _0x3d7fe7),
 { m1Prime: _0x4a90a0, m2Prime: _0x45a208 }
 );
 },
 },
 ms = {
 m1: o.SetWorksheetRowHeightMutation["id"],
 m2: o.SetWorksheetRowHeightMutation["id"],
 handler(_0x21ac1c, _0xc39b2e) {
 let _0x4bf4bf = { m1Prime: _0x21ac1c, m2Prime: _0xc39b2e };
 if (
 _0x21ac1c.params["unitId"] !== _0xc39b2e.params["unitId"] ||
 _0x21ac1c.params["subUnitId"] !== _0xc39b2e.params["subUnitId"]
 )
 return _0x4bf4bf;
 let _0x375c8a = _0x21ac1c.params["ranges"],
 _0xfb7a2a = [],
 _0x4ff1f3 = e.Tools["deepClone"](_0x21ac1c),
 _0x27ae2e = _0xc39b2e.params["ranges"];
 (_0x375c8a.forEach((_0x284835) => {
 let _0x26700b = Tr(
 { start: _0x284835.startRow, end: _0x284835.endRow },
 _0x27ae2e.map((_0x9223f4) => ({
 start: _0x9223f4.startRow,
 end: _0x9223f4.endRow,
 })),
 ).map((_0x545708) => ({
 ..._0x284835,
 startRow: _0x545708.start,
 endRow: _0x545708.end,
 }));
 _0xfb7a2a.push(..._0x26700b);
 }),
 (_0x4ff1f3.params["ranges"] = _0xfb7a2a));
 let { rowHeight: _0x20b0c9 } = _0x4ff1f3.params,
 { rowHeight: _0x14d836 } = _0xc39b2e.params,
 _0x49c496 = _0x20b0c9,
 _0x15990d = _0x14d836;
 return (
 typeof _0x49c496 != "number" &&
 (typeof _0x15990d == "number"
 ? _0x27ae2e.forEach((_0x302e48) => {
 for (
 let _0x45b266 = _0x302e48.startRow;
 _0x45b266 <= _0x302e48.endRow;
 _0x45b266++
 )
 delete _0x49c496[_0x45b266];
 })
 : Object.keys(_0x15990d)
 .map(Number)
 .forEach((_0x57fe37) => {
 _0x49c496[_0x57fe37] != null && delete _0x49c496[_0x57fe37];
 })),
 { m1Prime: _0x4ff1f3, m2Prime: _0xc39b2e }
 );
 },
 },
 hs = {
 m1: o.SetWorksheetRowIsAutoHeightMutation["id"],
 m2: o.SetWorksheetRowIsAutoHeightMutation["id"],
 handler(_0x49378f, _0x2e7002) {
 let _0x140b43 = { m1Prime: _0x49378f, m2Prime: _0x2e7002 };
 if (
 _0x49378f.params["unitId"] !== _0x2e7002.params["unitId"] ||
 _0x49378f.params["subUnitId"] !== _0x2e7002.params["subUnitId"]
 )
 return _0x140b43;
 let _0x2aed4a = _0x49378f.params["ranges"],
 _0x1470c1 = [],
 _0x40fbef = e.Tools["deepClone"](_0x49378f),
 _0x48611a = _0x2e7002.params["ranges"];
 (_0x2aed4a.forEach((_0x51f654) => {
 let _0x183959 = Tr(
 { start: _0x51f654.startRow, end: _0x51f654.endRow },
 _0x48611a.map((_0x1fee79) => ({
 start: _0x1fee79.startRow,
 end: _0x1fee79.endRow,
 })),
 ).map((_0x101343) => ({
 ..._0x51f654,
 startRow: _0x101343.start,
 endRow: _0x101343.end,
 }));
 _0x1470c1.push(..._0x183959);
 }),
 (_0x40fbef.params["ranges"] = _0x1470c1));
 let { autoHeightInfo: _0x2a19ee } = _0x40fbef.params,
 { autoHeightInfo: _0x3c0933 } = _0x2e7002.params;
 return (
 typeof _0x2a19ee != "number" &&
 (typeof _0x3c0933 == "number"
 ? _0x48611a.forEach((_0x29fc13) => {
 for (
 let _0x1e1876 = _0x29fc13.startRow;
 _0x1e1876 <= _0x29fc13.endRow;
 _0x1e1876++
 )
 delete _0x2a19ee[_0x1e1876];
 })
 : Object.keys(_0x3c0933)
 .map(Number)
 .forEach((_0x5ad808) => {
 _0x2a19ee[_0x5ad808] != null && delete _0x2a19ee[_0x5ad808];
 })),
 { m1Prime: _0x40fbef, m2Prime: _0x2e7002 }
 );
 },
 },
 gs = {
 m1: c.UpdateCommentRefMutation["id"],
 m2: c.UpdateCommentRefMutation["id"],
 handler: (_0x3a8bd5, _0x296908) => {
 let _0xacc6cb = _0x3a8bd5.params,
 _0x278ef7 = _0x296908.params;
 return _0xacc6cb.unitId === _0x278ef7.unitId &&
 _0xacc6cb.subUnitId === _0x278ef7.subUnitId &&
 _0xacc6cb.payload["commentId"] === _0x278ef7.payload["commentId"]
 ? { m1Prime: [], m2Prime: _0x296908 }
 : { m1Prime: _0x3a8bd5, m2Prime: _0x296908 };
 },
 },
 _s = {
 m1: c.UpdateCommentMutation["id"],
 m2: c.UpdateCommentMutation["id"],
 handler: (_0x47a53f, _0x112aa2) => {
 let _0x3e30aa = _0x47a53f.params,
 _0x34cf46 = _0x112aa2.params;
 return _0x3e30aa.unitId === _0x34cf46.unitId &&
 _0x3e30aa.subUnitId === _0x34cf46.subUnitId &&
 _0x3e30aa.payload["commentId"] === _0x34cf46.payload["commentId"]
 ? { m1Prime: [], m2Prime: _0x112aa2 }
 : { m1Prime: _0x47a53f, m2Prime: _0x112aa2 };
 },
 },
 vs = {
 m1: u.UpdateDataValidationMutation["id"],
 m2: u.AddDataValidationMutation["id"],
 handler: (_0x297264, _0x1888e7) => {
 let _0x2b55cd = { m1Prime: _0x297264, m2Prime: _0x1888e7 },
 _0x3c716d = _0x297264.params,
 _0x3c5521 = _0x1888e7.params;
 if (
 _0x3c716d.unitId !== _0x3c5521.unitId ||
 _0x3c716d.subUnitId !== _0x3c5521.subUnitId
 )
 return _0x2b55cd;
 if (_0x297264.params["payload"].type === u.UpdateRuleType["RANGE"]) {
 let { unitId: _0x37f41a, subUnitId: _0x37cc67 } = _0x297264.params,
 _0x586964 = Array.isArray(_0x1888e7.params["rule"])
 ? _0x1888e7.params["rule"]
 : [_0x1888e7.params["rule"]],
 _0x105b10 = [],
 _0xbe0f03 = _0x297264.params["payload"].payload,
 _0x3ec863 = _0x297264.params["ruleId"];
 if (!_0x3ec863) return _0x2b55cd;
 let _0x5dd6f3 =
 Dt([{ uid: _0x3ec863, ranges: _0xbe0f03 }, ..._0x586964]).get(
 _0x3ec863,
 ) ?? [];
 return (
 (0, e.isRangesEqual)(_0x5dd6f3, _0xbe0f03) ||
 (_0x5dd6f3.length
 ? _0x105b10.push({
 id: u.UpdateDataValidationMutation["id"],
 params: {
 unitId: _0x37f41a,
 subUnitId: _0x37cc67,
 ruleId: _0x3ec863,
 payload: {
 type: u.UpdateRuleType["RANGE"],
 payload: _0x5dd6f3,
 },
 },
 })
 : _0x105b10.push({
 id: u.RemoveDataValidationMutation["id"],
 params: {
 unitId: _0x37f41a,
 subUnitId: _0x37cc67,
 ruleId: _0x3ec863,
 },
 })),
 {
 m1Prime: _0x105b10.length ? _0x105b10 : [_0x297264],
 m2Prime: [..._0x105b10, _0x1888e7],
 }
 );
 }
 return _0x2b55cd;
 },
 },
 ys = {
 m1: u.UpdateDataValidationMutation["id"],
 m2: u.RemoveDataValidationMutation["id"],
 handler: (_0x2e5f94, _0x21a6bf) => {
 let _0xf4cc8e = { m1Prime: _0x2e5f94, m2Prime: _0x21a6bf };
 if (
 _0x2e5f94.params["unitId"] !== _0x21a6bf.params["unitId"] ||
 _0x2e5f94.params["subUnitId"] !== _0x21a6bf.params["subUnitId"]
 )
 return _0xf4cc8e;
 let _0x4bb545 = _0x2e5f94.params["ruleId"];
 return (Array.isArray(_0x21a6bf.params["ruleId"])
 ? _0x21a6bf.params["ruleId"]
 : [_0x21a6bf.params["ruleId"]]
 ).indexOf(_0x4bb545) > -1
 ? { m1Prime: [], m2Prime: _0x21a6bf }
 : _0xf4cc8e;
 },
 },
 bs = {
 m1: u.UpdateDataValidationMutation["id"],
 m2: u.UpdateDataValidationMutation["id"],
 handler: (_0x1e94c9, _0x5e615e) => {
 let _0x1df1a8 = { m1Prime: _0x1e94c9, m2Prime: _0x5e615e },
 _0x559f5b = _0x1e94c9.params,
 _0x5eb8b7 = _0x5e615e.params;
 if (
 _0x559f5b.unitId === _0x5eb8b7.unitId &&
 _0x559f5b.subUnitId === _0x5eb8b7.subUnitId
 ) {
 let _0x403857 = e.Tools["deepClone"](_0x5e615e);
 if (
 _0x5eb8b7.ruleId === _0x559f5b.ruleId &&
 _0x559f5b.payload["type"] === _0x5eb8b7.payload["type"]
 )
 return _0x559f5b.payload["type"] === u.UpdateRuleType["RANGE"] &&
 !(0, e.isRangesEqual)(
 _0x559f5b.payload["payload"],
 _0x5eb8b7.payload["payload"],
 )
 ? {
 error: Error(
 "edit range of same data-validation rule is not allowed",
 ),
 }
 : { m1Prime: [], m2Prime: _0x403857 };
 if (
 _0x559f5b.payload["type"] === u.UpdateRuleType["RANGE"] &&
 _0x5eb8b7.payload["type"] === u.UpdateRuleType["RANGE"] &&
 _0x5eb8b7.ruleId !== _0x559f5b.ruleId
 ) {
 let _0x336d56 = e.Rectangle["subtractMulti"](
 _0x559f5b.payload["payload"],
 _0x5eb8b7.payload["payload"],
 ),
 _0x28602e = (0, e.isRangesEqual)(
 _0x559f5b.payload["payload"],
 _0x336d56,
 )
 ? []
 : _0x336d56.length
 ? [
 {
 id: u.UpdateDataValidationMutation["id"],
 params: {
 ..._0x559f5b,
 payload: {
 type: u.UpdateRuleType["RANGE"],
 payload: _0x336d56,
 },
 },
 },
 ]
 : [
 {
 id: u.RemoveDataValidationMutation["id"],
 params: { ..._0x559f5b, payload: undefined },
 },
 ];
 return { m1Prime: [_0x1e94c9], m2Prime: [..._0x28602e, _0x5e615e] };
 }
 }
 return _0x1df1a8;
 },
 },
 xs = {
 m1: d.UpdateHyperLinkRefMutation["id"],
 m2: d.UpdateHyperLinkRefMutation["id"],
 handler: (_0x48407f, _0xe466c0) => {
 let _0x437aa8 = _0x48407f.params,
 _0x434aa5 = _0xe466c0.params;
 return _0x437aa8.unitId === _0x434aa5.unitId &&
 _0x437aa8.subUnitId === _0x434aa5.subUnitId &&
 _0x437aa8.id === _0x434aa5.id
 ? { m2Prime: _0xe466c0, m1Prime: [] }
 : { m1Prime: _0x48407f, m2Prime: _0xe466c0 };
 },
 },
 Ss = {
 m1: d.UpdateHyperLinkMutation["id"],
 m2: d.UpdateHyperLinkMutation["id"],
 handler: (_0x2d1980, _0x4f25e4) => {
 let _0x233c2a = _0x2d1980.params,
 _0x5d1525 = _0x4f25e4.params;
 return _0x233c2a.unitId === _0x5d1525.unitId &&
 _0x233c2a.subUnitId === _0x5d1525.subUnitId &&
 _0x233c2a.id === _0x5d1525.id
 ? { m2Prime: _0x4f25e4, m1Prime: [] }
 : { m1Prime: _0x2d1980, m2Prime: _0x4f25e4 };
 },
 },
 Cs = {
 m1: o.RemoveSheetMutation["id"],
 m2: o.AddWorksheetMergeMutation["id"],
 handler(_0x3e5199, _0x1f2121) {
 return _0x3e5199.params["unitId"] !== _0x1f2121.params["unitId"] ||
 _0x3e5199.params["subUnitId"] !== _0x1f2121.params["subUnitId"]
 ? { m1Prime: _0x3e5199, m2Prime: _0x1f2121 }
 : { m1Prime: _0x3e5199, m2Prime: [] };
 },
 },
 ws = {
 m1: o.RemoveSheetMutation["id"],
 m2: o.RemoveWorksheetMergeMutation["id"],
 handler(_0xc7727a, _0x2bc7e9) {
 return _0xc7727a.params["unitId"] !== _0x2bc7e9.params["unitId"] ||
 _0xc7727a.params["subUnitId"] !== _0x2bc7e9.params["subUnitId"]
 ? { m1Prime: _0xc7727a, m2Prime: _0x2bc7e9 }
 : { m1Prime: _0xc7727a, m2Prime: [] };
 },
 },
 Ts = {
 m1: o.InsertSheetMutation["id"],
 m2: o.InsertSheetMutation["id"],
 handler(_0x5a21de, _0x16f238) {
 if (_0x5a21de.params["sheet"].id === _0x16f238.params["sheet"].id)
 return {
 error: Error(
 "Two\x20mutation\x20have\x20the\x20same\x20worksheetId!",
 ),
 };
 let _0xa4ff51 = e.Tools["deepClone"](_0x5a21de),
 _0x179099 = e.Tools["deepClone"](_0x16f238);
 if (
 (_0xa4ff51.params["index"] <= _0x179099.params["index"]
 ? (_0x179099.params["index"] += 1)
 : _0xa4ff51.params["index"] > _0x179099.params["index"] &&
 (_0xa4ff51.params["index"] += 1),
 _0x5a21de.params["sheet"].name === _0x16f238.params["sheet"].name)
 ) {
 let _0xc9b8f7 = {
 id: o.SetWorksheetNameMutation["id"],
 params: {
 unitId: _0x16f238.params["unitId"],
 subUnitId: _0x16f238.params["sheet"].id,
 name: _0x16f238.params["sheet"].name + " (1)",
 },
 };
 return {
 m1Prime: [_0xc9b8f7, _0xa4ff51],
 m2Prime: [_0x179099, _0xc9b8f7],
 };
 }
 return { m1Prime: _0xa4ff51, m2Prime: _0x179099 };
 },
 },
 Es = {
 m1: o.RemoveSheetMutation["id"],
 m2: "any",
 handler(_0x118f43, _0x45e9a1) {
 return _0x118f43.params["unitId"] !== _0x45e9a1.params["unitId"] ||
 _0x118f43.params["subUnitId"] !== _0x45e9a1.params["subUnitId"]
 ? { m1Prime: _0x118f43, m2Prime: _0x45e9a1 }
 : _0x118f43.id === _0x45e9a1.id
 ? { m1Prime: [], m2Prime: [] }
 : { m1Prime: _0x118f43, m2Prime: [] };
 },
 },
 Ds = {
 m1: o.SetWorksheetOrderMutation["id"],
 m2: o.SetWorksheetOrderMutation["id"],
 handler(_0x2e6038, _0x1caddb) {
 let _0x1b4c03 = e.Tools["deepClone"](_0x2e6038),
 _0x22dabd = e.Tools["deepClone"](_0x1caddb),
 _0x5622db = {
 error: Error(
 "Two\x20SetWorksheetOrderMutation\x20have\x20conflicts!",
 ),
 };
 if (_0x2e6038.params["fromOrder"] === _0x1caddb.params["fromOrder"])
 ((_0x1b4c03.id = o.EmptyMutation["id"]),
 (_0x22dabd.params["fromOrder"] = _0x2e6038.params["toOrder"]));
 else {
 (_0x2e6038.params["fromOrder"] === _0x2e6038.params["toOrder"] &&
 (_0x1b4c03.id = o.EmptyMutation["id"]),
 _0x1caddb.params["fromOrder"] === _0x1caddb.params["toOrder"] &&
 (_0x22dabd.id = o.EmptyMutation["id"]));
 let _0x28146a = [
 Math.min(
 _0x2e6038.params["fromOrder"],
 _0x2e6038.params["toOrder"],
 ),
 Math.max(
 _0x2e6038.params["fromOrder"],
 _0x2e6038.params["toOrder"],
 ),
 ],
 _0x113eb1 = [
 Math.min(
 _0x1caddb.params["fromOrder"],
 _0x1caddb.params["toOrder"],
 ),
 Math.max(
 _0x1caddb.params["fromOrder"],
 _0x1caddb.params["toOrder"],
 ),
 ];
 if (_0x28146a[0] <= _0x113eb1[1] && _0x28146a[1] >= _0x113eb1[0])
 return _0x5622db;
 }
 return { m1Prime: _0x1b4c03, m2Prime: _0x22dabd };
 },
 },
 Os = [
 Ts,
 {
 m1: o.InsertSheetMutation["id"],
 m2: o.SetWorksheetOrderMutation["id"],
 handler(_0x40a941, _0x55a191) {
 let _0x5914d7 = e.Tools["deepClone"](_0x40a941),
 _0x5031db = e.Tools["deepClone"](_0x55a191);
 return (
 _0x40a941.params["index"] <= _0x55a191.params["order"] &&
 (_0x5031db.params["order"] += 1),
 { m1Prime: _0x5914d7, m2Prime: _0x5031db }
 );
 },
 },
 Es,
 {
 m1: "any",
 m2: o.RemoveSheetMutation["id"],
 handler(_0x4c7434, _0x43c335) {
 return _0x4c7434.params["unitId"] !== _0x43c335.params["unitId"] ||
 _0x4c7434.params["subUnitId"] !== _0x43c335.params["subUnitId"]
 ? { m1Prime: _0x4c7434, m2Prime: _0x43c335 }
 : _0x4c7434.id === _0x43c335.id
 ? { m1Prime: [], m2Prime: [] }
 : { m1Prime: [], m2Prime: _0x43c335 };
 },
 },
 Ds,
 ...Gn,
 Mr,
 Nr,
 Pr,
 Fr,
 Ur,
 zr,
 Br,
 Vr,
 qr,
 Hr,
 Ir,
 Wr,
 ei,
 ti,
 ni,
 ii,
 li,
 hi,
 gi,
 _i,
 ui,
 di,
 fi,
 ci,
 ri,
 pi,
 Si,
 ji,
 Ci,
 Di,
 Oi,
 ki,
 Fi,
 Ai,
 Mi,
 wi,
 qi,
 $i,
 Ki,
 aa,
 oa,
 sa,
 ea,
 ta,
 na,
 Qi,
 Ji,
 ra,
 zi,
 Hi,
 Bi,
 ha,
 pa,
 ma,
 Ca,
 ya,
 ba,
 xa,
 Da,
 Sa,
 ga,
 wa,
 Ba,
 Ra,
 La,
 Ka,
 Qa,
 $a,
 eo,
 qa,
 Ja,
 Ya,
 Ga,
 za,
 Xa,
 ts,
 Qo,
 ds,
 fs,
 To,
 ls,
 us,
 ps,
 ms,
 hs,
 ns,
 _o,
 Do,
 Eo,
 Ma,
 Na,
 Et,
 vo,
 Li,
 Wn,
 At,
 bs,
 Aa,
 kr,
 Wi,
 Ar,
 Qr,
 da,
 Fa,
 Yr,
 la,
 Xr,
 yi,
 ka,
 no,
 jt,
 vs,
 ys,
 Gr,
 Kr,
 mi,
 Ni,
 Pi,
 ia,
 Ta,
 Ea,
 Za,
 os,
 is,
 as,
 rs,
 cs,
 ss,
 rn,
 an,
 jr,
 on,
 $r,
 sn,
 xi,
 ln,
 Gi,
 cn,
 Ri,
 un,
 fa,
 dn,
 Ia,
 pn,
 Zo,
 fn,
 Cs,
 Lr,
 ai,
 Ti,
 Yi,
 _a,
 Va,
 ws,
 ro,
 ao,
 io,
 oo,
 so,
 co,
 lo,
 mn,
 uo,
 Tt,
 Hn,
 Un,
 gs,
 _s,
 Sr,
 Zr,
 bi,
 Ui,
 ua,
 Pa,
 Jr,
 vi,
 Ii,
 ca,
 Oa,
 to,
 Mt,
 ja,
 Ss,
 xs,
 Nt,
 Pt,
 Ft,
 It,
 Lt,
 Rt,
 zt,
 Bt,
 Vt,
 Ht,
 Ut,
 Wt,
 Gt,
 Kt,
 qt,
 Jt,
 Yt,
 Xt,
 Zt,
 Qt,
 $t,
 en,
 tn,
 nn,
 Oo,
 ko,
 Ao,
 jo,
 Mo,
 No,
 Po,
 Fo,
 Io,
 Lo,
 Ro,
 Bo,
 zo,
 Vo,
 Ho,
 Uo,
 Wo,
 Go,
 Ko,
 qo,
 Jo,
 Yo,
 Xo,
 hn,
 gn,
 _n,
 vn,
 yn,
 bn,
 xn,
 Sn,
 Cn,
 wn,
 En,
 Tn,
 Dn,
 An,
 On,
 kn,
 Mn,
 jn,
 Nn,
 Pn,
 Fn,
 In,
 Ln,
 Rn,
 zn,
 Bn,
 Vn,
 oi,
 Rr,
 Ha,
 va,
 Xi,
 Ei,
 Vi,
 $o,
 mo,
 wo,
 go,
 ho,
 ];
let ks = class extends e.Disposable {
 constructor(_0x2c8cf5) {
 (super(),
 (this._transformService = _0x2c8cf5),
 Os.forEach((_0x459169) => {
 this._transformService["registerTransformAlgorithm"](_0x459169);
 }));
 }
};
ks = T([w(0, E)], ks);
function As(_0x46b905) {
 var _0x245aa4;
 return (_0x245aa4 = _0x46b905.params) == null ? undefined : _0x245aa4.unitId;
}
function U(_0x560a38) {
 var _0x3f9a86;
 let _0x3447d2 = _0x560a38.params;
 return (
 (_0x3447d2 == null ? undefined : _0x3447d2.subUnitId) ??
 (_0x3447d2 == null ? undefined : _0x3447d2.pageId) ??
 (_0x3447d2 == null ? undefined : _0x3447d2.slideId) ??
 (_0x3447d2 == null || (_0x3f9a86 = _0x3447d2.slide) == null
 ? undefined
 : _0x3f9a86.id)
 );
}
function W(_0x167792) {
 var _0x5cba09;
 let _0x23e42f = _0x167792.params;
 return (
 (_0x23e42f == null ? undefined : _0x23e42f.drawingId) ??
 (_0x23e42f == null || (_0x5cba09 = _0x23e42f.element) == null
 ? undefined
 : _0x5cba09.id)
 );
}
function js(_0x3be286) {
 var _0x11ecd5, _0x27e865;
 let _0x448116 = _0x3be286.params;
 return _0x448116
 ? _0x448116.drawingIds
 ? _0x448116.drawingIds
 : _0x448116.drawingId
 ? [_0x448116.drawingId]
 : (_0x11ecd5 = _0x448116.element) != null && _0x11ecd5.id
 ? [_0x448116.element["id"]]
 : Array.isArray(_0x448116.objects)
 ? _0x448116.objects["map"](
 (_0x392933) => _0x392933.drawingId,
 ).filter(Boolean)
 : (((_0x27e865 = _0x448116.objects) == null
 ? undefined
 : _0x27e865.drawingIds) ?? [])
 : [];
}
function G(_0x1d0f3a, _0x5a9111) {
 let _0x1b1ebc = As(_0x1d0f3a),
 _0x184c3e = As(_0x5a9111);
 return !!_0x1b1ebc && _0x1b1ebc === _0x184c3e;
}
function K(_0x5adb27, _0x4c4a4e) {
 let _0x2a0743 = U(_0x5adb27),
 _0x2c73bd = U(_0x4c4a4e);
 return G(_0x5adb27, _0x4c4a4e) && !!_0x2a0743 && _0x2a0743 === _0x2c73bd;
}
function Ms(_0x15559d, _0x34afae) {
 if (!K(_0x15559d, _0x34afae)) return false;
 let _0x20b5dc = new Set(js(_0x15559d));
 return js(_0x34afae).some((_0x4708fd) => _0x20b5dc.has(_0x4708fd));
}
const Ns = {
 m1: g.UpdateSlidePageBackgroundMutation["id"],
 m2: g.UpdateSlidePageBackgroundMutation["id"],
 handler(_0x3abcf5, _0x219588) {
 return (
 K(_0x3abcf5, _0x219588),
 { m1Prime: _0x3abcf5, m2Prime: _0x219588 }
 );
 },
};
function Ps(_0x3484fc) {
 var _0x38ab98;
 let _0x19825f = _0x3484fc.params;
 return (
 (_0x19825f == null ? undefined : _0x19825f.dataSourceId) ??
 (_0x19825f == null || (_0x38ab98 = _0x19825f.dataSource) == null
 ? undefined
 : _0x38ab98.id)
 );
}
function Fs(_0x5081d0) {
 var _0x4e9ce3;
 let _0x25f9f7 = _0x5081d0.params;
 return (
 (_0x25f9f7 == null ? undefined : _0x25f9f7.chartId) ??
 (_0x25f9f7 == null || (_0x4e9ce3 = _0x25f9f7.chart) == null
 ? undefined
 : _0x4e9ce3.id)
 );
}
function Is(_0x349027, _0x23644d, _0x42383) {
 return !G(_0x349027, _0x23644d) || _0x42383(_0x349027) !== _0x42383(_0x23644d)
 ? { m1Prime: _0x349027, m2Prime: _0x23644d }
 : _0x349027.id === _0x23644d.id
 ? { m1Prime: [], m2Prime: [] }
 : { m1Prime: _0x349027, m2Prime: [] };
}
const Ls = {
 m1: _.RemoveSlideChartDataSourceMutation["id"],
 m2: _.SetSlideChartDataSourceMutation["id"],
 handler(_0x22d66d, _0x1391b2) {
 return Is(_0x22d66d, _0x1391b2, Ps);
 },
 },
 Rs = {
 m1: _.RemoveSlideChartDataSourceMutation["id"],
 m2: _.RemoveSlideChartDataSourceMutation["id"],
 handler(_0x4f0d05, _0x1ee715) {
 return Is(_0x4f0d05, _0x1ee715, Ps);
 },
 },
 zs = {
 m1: _.RemoveSlideChartSnapshotMutation["id"],
 m2: _.SetSlideChartSnapshotMutation["id"],
 handler(_0x44263b, _0x35fdee) {
 return Is(_0x44263b, _0x35fdee, Fs);
 },
 },
 Bs = {
 m1: _.RemoveSlideChartSnapshotMutation["id"],
 m2: _.RemoveSlideChartSnapshotMutation["id"],
 handler(_0x254ce2, _0xd7b86b) {
 return Is(_0x254ce2, _0xd7b86b, Fs);
 },
 };
function Vs(_0x4ecb40, _0x17e285) {
 let _0x277802 = new Set(_0x4ecb40.map((_0x24b9dc) => _0x24b9dc.drawingId));
 return _0x17e285.some((_0x452ea5) => _0x277802.has(_0x452ea5.drawingId));
}
const Hs = {
 m1: g.SetSlideDrawingApplyMutation["id"],
 m2: g.SetSlideDrawingApplyMutation["id"],
 handler(_0x563027, _0x532aa3) {
 if (!K(_0x563027, _0x532aa3))
 return { m1Prime: _0x563027, m2Prime: _0x532aa3 };
 let _0x24f4ad = _0x563027.params,
 _0x66e442 = _0x532aa3.params;
 if (!Vs(_0x24f4ad.objects ?? [], _0x66e442.objects ?? []))
 return { m1Prime: _0x563027, m2Prime: _0x532aa3 };
 let _0x30c77c = _0x24f4ad.type === g.SlideDrawingApplyType["REMOVE"],
 _0x4260af = _0x66e442.type === g.SlideDrawingApplyType["REMOVE"];
 if (_0x30c77c || _0x4260af)
 return {
 m1Prime: _0x30c77c && !_0x4260af ? e.Tools["deepClone"](_0x563027) : [],
 m2Prime: _0x4260af && !_0x30c77c ? e.Tools["deepClone"](_0x532aa3) : [],
 };
 if (
 _0x24f4ad.type === g.SlideDrawingApplyType["UPDATE"] &&
 _0x66e442.type === g.SlideDrawingApplyType["UPDATE"]
 ) {
 let _0x303a2d = e.Tools["deepClone"](_0x563027),
 _0x39ad19 = e.Tools["deepClone"](_0x532aa3),
 _0x344372 = _0x24f4ad.op,
 _0x321ddc = _0x66e442.op;
 return (
 (_0x303a2d.params["op"] = e.JSON1["type"].transform(
 _0x344372,
 _0x321ddc,
 "left",
 )),
 (_0x39ad19.params["op"] = e.JSON1["type"].transform(
 _0x321ddc,
 _0x344372,
 "right",
 )),
 { m1Prime: _0x303a2d, m2Prime: _0x39ad19 }
 );
 }
 return { m1Prime: _0x563027, m2Prime: _0x532aa3 };
 },
};
function Us(_0x29683b) {
 return { error: Error(_0x29683b) };
}
const Ws = {
 m1: g.RemoveSlideElementMutation["id"],
 m2: "any",
 handler(_0x5aac63, _0x556277) {
 return !K(_0x5aac63, _0x556277) || !Ms(_0x5aac63, _0x556277)
 ? { m1Prime: _0x5aac63, m2Prime: _0x556277 }
 : _0x556277.id === g.RemoveSlideElementMutation["id"]
 ? { m1Prime: [], m2Prime: [] }
 : _0x556277.id === g.UpdateSlideElementMutation["id"] ||
 _0x556277.id === g.SetSlideDrawingApplyMutation["id"]
 ? { m1Prime: _0x5aac63, m2Prime: [] }
 : { m1Prime: _0x5aac63, m2Prime: _0x556277 };
 },
 },
 Gs = {
 m1: g.AddSlideElementMutation["id"],
 m2: g.AddSlideElementMutation["id"],
 handler(_0x585e53, _0x148c82) {
 var _0x388794, _0xb69949;
 if (!K(_0x585e53, _0x148c82))
 return { m1Prime: _0x585e53, m2Prime: _0x148c82 };
 if (W(_0x585e53) === W(_0x148c82))
 return Us("[SlideTransform] Cannot add duplicate slide element.");
 let _0x4bc1e4 = e.Tools["deepClone"](_0x148c82),
 _0x5b27d5 =
 (_0x388794 = _0x585e53.params) == null
 ? undefined
 : _0x388794.insertIndex,
 _0x1d4ef0 =
 (_0xb69949 = _0x4bc1e4.params) == null
 ? undefined
 : _0xb69949.insertIndex;
 return (
 typeof _0x5b27d5 == "number" &&
 typeof _0x1d4ef0 == "number" &&
 _0x1d4ef0 >= _0x5b27d5 &&
 (_0x4bc1e4.params["insertIndex"] = _0x1d4ef0 + 1),
 { m1Prime: _0x585e53, m2Prime: _0x4bc1e4 }
 );
 },
 },
 Ks = {
 m1: g.UpdateSlideElementMutation["id"],
 m2: g.UpdateSlideElementMutation["id"],
 handler(_0x12a80e, _0x445ffe) {
 return (
 G(_0x12a80e, _0x445ffe) &&
 K(_0x12a80e, _0x445ffe) &&
 (W(_0x12a80e), W(_0x445ffe)),
 { m1Prime: _0x12a80e, m2Prime: _0x445ffe }
 );
 },
 };
function qs(_0x58fa92, _0x4517f9, _0x2e4a4f) {
 if (!K(_0x58fa92, _0x4517f9))
 return { m1Prime: _0x58fa92, m2Prime: _0x4517f9 };
 let _0x22842b = W(_0x58fa92),
 _0x1f29d8 = e.Tools["deepClone"](_0x4517f9);
 return (
 (_0x1f29d8.params["drawingIds"] = (
 _0x1f29d8.params["drawingIds"] ?? []
 ).filter((_0x4192a7) => _0x4192a7 !== _0x22842b)),
 _0x1f29d8.params["drawingIds"].length === 0 ||
 (_0x2e4a4f && _0x1f29d8.params["drawingIds"].length < 2)
 ? { m1Prime: _0x58fa92, m2Prime: [] }
 : { m1Prime: _0x58fa92, m2Prime: _0x1f29d8 }
 );
}
const Js = {
 m1: g.RemoveSlideElementMutation["id"],
 m2: g.SetSlideGroupMutation["id"],
 handler(_0x37e0e3, _0x403cc9) {
 return qs(_0x37e0e3, _0x403cc9, true);
 },
 },
 Ys = {
 m1: g.RemoveSlideElementMutation["id"],
 m2: g.CancelSlideGroupMutation["id"],
 handler(_0x53fe22, _0x4e0056) {
 return qs(_0x53fe22, _0x4e0056, false);
 },
 },
 Xs = {
 m1: g.SetSlideGroupMutation["id"],
 m2: g.SetSlideGroupMutation["id"],
 handler(_0x278580, _0x4eced3) {
 if (!K(_0x278580, _0x4eced3))
 return { m1Prime: _0x278580, m2Prime: _0x4eced3 };
 let _0x16ff3f = new Set(_0x278580.params["drawingIds"] ?? []);
 return (_0x4eced3.params["drawingIds"] ?? []).some((_0x190000) =>
 _0x16ff3f.has(_0x190000),
 )
 ? {
 error: Error(
 "[SlideTransform] Cannot group intersected slide elements concurrently.",
 ),
 }
 : { m1Prime: _0x278580, m2Prime: _0x4eced3 };
 },
 },
 Zs = {
 m1: g.RemoveSlideElementMutation["id"],
 m2: g.SetSlideElementOrderMutation["id"],
 handler(_0x57b2a1, _0x412e31) {
 if (!K(_0x57b2a1, _0x412e31))
 return { m1Prime: _0x57b2a1, m2Prime: _0x412e31 };
 let _0x14e38f = W(_0x57b2a1),
 _0x4f17f4 = e.Tools["deepClone"](_0x412e31);
 return (
 (_0x4f17f4.params["drawingIds"] = (
 _0x4f17f4.params["drawingIds"] ?? []
 ).filter((_0x4b7bd5) => _0x4b7bd5 !== _0x14e38f)),
 { m1Prime: _0x57b2a1, m2Prime: _0x4f17f4 }
 );
 },
 };
function Qs(_0x390a3b) {
 return { error: Error(_0x390a3b) };
}
function $s(_0x446f38, _0x2d031f) {
 var _0x1cba7f, _0x47f691;
 if (!G(_0x446f38, _0x2d031f))
 return { m1Prime: _0x446f38, m2Prime: _0x2d031f };
 if (U(_0x446f38) === U(_0x2d031f))
 return Qs("[SlideTransform] Cannot add duplicate slide page.");
 let _0x227459 = e.Tools["deepClone"](_0x2d031f),
 _0x37a52a =
 (_0x1cba7f = _0x446f38.params) == null
 ? undefined
 : _0x1cba7f.insertIndex,
 _0x9be687 =
 (_0x47f691 = _0x227459.params) == null
 ? undefined
 : _0x47f691.insertIndex;
 return (
 typeof _0x37a52a == "number" &&
 typeof _0x9be687 == "number" &&
 _0x9be687 >= _0x37a52a &&
 (_0x227459.params["insertIndex"] = _0x9be687 + 1),
 { m1Prime: _0x446f38, m2Prime: _0x227459 }
 );
}
const ec = {
 m1: g.RemoveSlidePageMutation["id"],
 m2: "any",
 handler(_0x1626d6, _0x5c05ee) {
 return !G(_0x1626d6, _0x5c05ee) || U(_0x1626d6) !== U(_0x5c05ee)
 ? { m1Prime: _0x1626d6, m2Prime: _0x5c05ee }
 : _0x5c05ee.id === g.RemoveSlidePageMutation["id"]
 ? { m1Prime: [], m2Prime: [] }
 : { m1Prime: _0x1626d6, m2Prime: [] };
 },
 },
 tc = {
 m1: g.AddSlidePageMutation["id"],
 m2: g.AddSlidePageMutation["id"],
 handler: $s,
 },
 nc = {
 m1: g.MoveSlidePageMutation["id"],
 m2: g.MoveSlidePageMutation["id"],
 handler(_0x532824, _0x362abd) {
 return G(_0x532824, _0x362abd) && U(_0x532824) === U(_0x362abd)
 ? { m1Prime: _0x532824, m2Prime: [] }
 : { m1Prime: _0x532824, m2Prime: _0x362abd };
 },
 };
function rc(_0x136012) {
 var _0x5d4ba5;
 let _0x31352f = _0x136012.params;
 return (
 (_0x31352f == null ? undefined : _0x31352f.tableId) ??
 (_0x31352f == null || (_0x5d4ba5 = _0x31352f.table) == null
 ? undefined
 : _0x5d4ba5.id)
 );
}
function ic(_0x55e1f5, _0x1dc31f) {
 return !G(_0x55e1f5, _0x1dc31f) || rc(_0x55e1f5) !== rc(_0x1dc31f)
 ? { m1Prime: _0x55e1f5, m2Prime: _0x1dc31f }
 : _0x55e1f5.id === _0x1dc31f.id
 ? { m1Prime: [], m2Prime: [] }
 : { m1Prime: _0x55e1f5, m2Prime: [] };
}
const ac = [
 Ls,
 Rs,
 zs,
 Bs,
 {
 m1: v.RemoveSlideTableMutation["id"],
 m2: v.SetSlideTableMutation["id"],
 handler(_0x882b3d, _0x576737) {
 return ic(_0x882b3d, _0x576737);
 },
 },
 {
 m1: v.RemoveSlideTableMutation["id"],
 m2: v.RemoveSlideTableMutation["id"],
 handler(_0x75f1c0, _0xf8fbb0) {
 return ic(_0x75f1c0, _0xf8fbb0);
 },
 },
 ec,
 tc,
 nc,
 Zs,
 Js,
 Ys,
 Ws,
 Gs,
 Ks,
 Xs,
 Ns,
 Hs,
];
let oc = class extends e.Disposable {
 constructor(_0x24e90f) {
 (super(),
 (this._transformService = _0x24e90f),
 ac.forEach((_0x57dd6a) => {
 this._transformService["registerTransformAlgorithm"](_0x57dd6a);
 }));
 }
};
oc = T([w(0, E)], oc);
function sc(_0x35535b) {
 var _0x3db654;
 return {
 ..._0x35535b,
 mutations:
 ((_0x3db654 = _0x35535b.mutations) == null
 ? undefined
 : _0x3db654.map(uc)) ?? [],
 };
}
function cc(_0x46c56b) {
 return _0x46c56b.map((_0x5e26ae) => ({
 id: _0x5e26ae.id,
 params: JSON.parse(_0x5e26ae.data),
 }));
}
function lc(_0x7e3549) {
 var _0x3b6f42;
 return {
 ..._0x7e3549,
 mutations:
 ((_0x3b6f42 = _0x7e3549.mutations) == null
 ? undefined
 : _0x3b6f42.map(dc)) ?? [],
 };
}
function uc(_0x5785ef) {
 return { id: _0x5785ef.id, params: JSON.parse(_0x5785ef.data) };
}
function dc(_0xab6e53) {
 return { id: _0xab6e53.id, data: JSON.stringify(_0xab6e53.params) };
}
let fc = (function (_0x5140dd) {
 return (
 (_0x5140dd.FETCH_MISSING = "fetch_missing"),
 (_0x5140dd.PSEUDO_FETCH_MISSING_RESULT = "pseudo_fetch_missing_result"),
 (_0x5140dd.SUBMIT_CHANGESET = "submit_changeset"),
 (_0x5140dd.CHANGESET_ACK = "changeset_ack"),
 (_0x5140dd.CHANGESET_REJ = "changeset_rej"),
 (_0x5140dd.CHANGESET_SHOULD_RETRY = "changeset_should_retry"),
 (_0x5140dd.NEW_CHANGESETS = "new_changesets"),
 (_0x5140dd.UPDATE_CURSOR = "update_cursor"),
 (_0x5140dd.USERS_ENTER = "users_enter"),
 (_0x5140dd.USERS_LEAVE = "users_leave"),
 (_0x5140dd.UNIT_DELETE = "unit_delete"),
 (_0x5140dd.LIVESHARE_REQUEST_HOST = "liveshare.request_host"),
 (_0x5140dd.LIVESHARE_NEW_HOST = "liveshare.new_host"),
 (_0x5140dd.LIVESHARE_OPERATION = "liveshare.operation"),
 (_0x5140dd.LIVESHARE_FETCH_OPERATIONS = "liveshare.fetch_operations"),
 (_0x5140dd.LIVESHARE_TERMINATE = "liveshare.terminate"),
 (_0x5140dd.MSG_FOR_ERROR = "error_msg"),
 (_0x5140dd.PERMISSION_REJ = "permission_rej"),
 (_0x5140dd.COMMENT_UPDATE = "comment_update"),
 (_0x5140dd.UPDATE_PERMISSION_OBJ = "update_permission_obj"),
 (_0x5140dd.SHOULD_CLOSE_CONN = "should_close_conn"),
 (_0x5140dd.UNISCRIPT_RUN = "uniscript.run"),
 _0x5140dd
 );
})({});
var pc = "@univerjs-pro/collaboration",
 mc = "1.0.0-insiders.20260907-70fc579";
const hc = {};
let gc = class extends e.Disposable {
 constructor(_0x5abeac) {
 (super(),
 (this._commandService = _0x5abeac),
 [x].forEach((_0x5ae3bf) =>
 this._commandService["registerCommand"](_0x5ae3bf),
 ));
 }
};
gc = T([w(0, e.ICommandService)], gc);
function _c(_0x24bee8) {
 let _0x4b52a1 = {},
 _0x449579 = {},
 _0x56d31d = Object.keys(_0x24bee8)
 .map(Number)
 .sort((_0x23a89d, _0x233fe) => _0x23a89d - _0x233fe);
 if (_0x56d31d.length === 0) return _0x4b52a1;
 for (let _0x2e798f of _0x56d31d) {
 let _0x4a0461 = _0x24bee8[_0x2e798f];
 if (!e.Tools["isDefine"](_0x4a0461)) continue;
 let _0x55ba18 = String(_0x4a0461);
 (_0x449579[_0x55ba18] || (_0x449579[_0x55ba18] = []),
 _0x449579[_0x55ba18].push(_0x2e798f));
 }
 for (let [_0x17ae54, _0x2a8d2f] of Object.entries(_0x449579)) {
 let _0x3d3e1f = [];
 if (_0x2a8d2f.length === 0) continue;
 let _0x18cfe3 = _0x2a8d2f[0],
 _0x5beac6 = _0x18cfe3;
 for (let _0x5ece31 = 1; _0x5ece31 < _0x2a8d2f.length; _0x5ece31++) {
 let _0x2a2c32 = _0x2a8d2f[_0x5ece31];
 (_0x2a2c32 !== _0x5beac6 + 1 &&
 (_0x18cfe3 === _0x5beac6
 ? _0x3d3e1f.push(_0x18cfe3)
 : _0x3d3e1f.push([_0x18cfe3, _0x5beac6]),
 (_0x18cfe3 = _0x2a2c32)),
 (_0x5beac6 = _0x2a2c32));
 }
 (_0x18cfe3 === _0x5beac6
 ? _0x3d3e1f.push(_0x18cfe3)
 : _0x3d3e1f.push([_0x18cfe3, _0x5beac6]),
 _0x3d3e1f.length === 1 && typeof _0x3d3e1f[0] == "number"
 ? (_0x4b52a1[_0x17ae54] = _0x3d3e1f[0])
 : (_0x4b52a1[_0x17ae54] = _0x3d3e1f));
 }
 return _0x4b52a1;
}
function vc(_0x751e2e) {
 let _0x5b1529 = {};
 for (let [_0x2aca7d, _0x54c14f] of Object.entries(_0x751e2e)) {
 let _0x2c8c00 = Number(_0x2aca7d);
 if (typeof _0x54c14f == "number") {
 _0x5b1529[_0x54c14f] = _0x2c8c00;
 continue;
 }
 for (let _0x25418e of _0x54c14f)
 if (Array.isArray(_0x25418e)) {
 let [_0x141bb1, _0x5cf0f5] = _0x25418e;
 for (let _0x21af74 = _0x141bb1; _0x21af74 <= _0x5cf0f5; _0x21af74++)
 _0x5b1529[_0x21af74] = _0x2c8c00;
 } else _0x5b1529[_0x25418e] = _0x2c8c00;
 }
 return _0x5b1529;
}
const yc = (_0x35a5ea) => {
 let _0x559e1f = {};
 if (!_0x35a5ea) return { cellValue: _0x35a5ea, styleRefMap: undefined };
 let _0x3a8fdb = new Map();
 return {
 cellValue: new e["ObjectMatrix"](e.Tools["deepClone"](_0x35a5ea))
 .forValue((_0x5d96ab, _0x2b3db6, _0x5ccff1) => {
 let _0x9c1a8c = _0x5ccff1 && _0x5ccff1.s;
 if (_0x9c1a8c && typeof _0x9c1a8c == "object") {
 let _0x23e0bb = JSON.stringify(_0x9c1a8c),
 _0x2f3ebe = _0x3a8fdb.get(_0x23e0bb);
 (_0x2f3ebe ??
 ((_0x2f3ebe = _0x3a8fdb.size),
 _0x3a8fdb.set(_0x23e0bb, _0x2f3ebe),
 (_0x559e1f[_0x2f3ebe] = _0x9c1a8c)),
 (_0x5ccff1.s = "" + _0x2f3ebe));
 }
 })
 .getMatrix(),
 styleRefMap: _0x559e1f,
 };
 },
 bc = (_0x4ea20f, _0x1e9f85) =>
 !_0x4ea20f || !_0x1e9f85
 ? _0x4ea20f
 : new e["ObjectMatrix"](e.Tools["deepClone"](_0x4ea20f))
 .forValue((_0x479aed, _0x33f444, _0x9962ab) => {
 let _0x56e2e6 = _0x9962ab && _0x9962ab.s;
 if (_0x56e2e6 && typeof _0x56e2e6 == "string") {
 let _0x39cea9 = _0x1e9f85[_0x56e2e6];
 _0x39cea9 && (_0x9962ab.s = _0x39cea9);
 }
 })
 .getMatrix(),
 xc = (0, e.createInterceptorKey)("COMPRESS_MUTATION_APPLY"),
 Sc = (0, e.createInterceptorKey)("COMPRESS_MUTATION_SEND"),
 Cc = "base.mutation.set-range-values";
var wc = class {
 constructor() {
 (C(
 this,
 "interceptor",
 new e["InterceptorManager"]({
 COMPRESS_MUTATION_APPLY: xc,
 COMPRESS_MUTATION_SEND: Sc,
 }),
 ),
 this._init());
 }
 _init() {
 (this.interceptor["intercept"](
 this.interceptor["getInterceptPoints"]().COMPRESS_MUTATION_APPLY,
 { priority: -1, handler: (_0x38797c) => _0x38797c },
 ),
 this.interceptor["intercept"](
 this.interceptor["getInterceptPoints"]().COMPRESS_MUTATION_SEND,
 { priority: -1, handler: (_0x3f44c5) => _0x3f44c5 },
 ),
 this._initSetRangeValues());
 }
 _initSetRangeValues() {
 (this.interceptor["intercept"](
 this.interceptor["getInterceptPoints"]().COMPRESS_MUTATION_APPLY,
 {
 handler: (_0x4a1416, _0x5d5339, _0x40531b) =>
 _0x40531b(
 _0x4a1416 &&
 _0x4a1416.map((_0x511f77) => {
 if (_0x511f77.params["__splitChunk__"]) return _0x511f77;
 if (_0x511f77.id === o.SetRangeValuesMutation["id"]) {
 let _0x2e58d6 = _0x511f77.params;
 if (!_0x2e58d6.styleRefMap) return _0x511f77;
 let _0x43aa0c = bc(
 _0x2e58d6.cellValue,
 _0x2e58d6.styleRefMap,
 );
 return {
 ..._0x511f77,
 params: { ..._0x2e58d6, cellValue: _0x43aa0c },
 };
 }
 return _0x511f77.id === Cc &&
 (0, t.isCompressedBaseRangeValuesPayload)(_0x511f77.params)
 ? {
 ..._0x511f77,
 params: (0, t.decompressBaseRangeValuesPayload)(
 _0x511f77.params,
 ),
 }
 : _0x511f77.id === o.SetWorksheetRowHeightMutation["id"] ||
 _0x511f77.id === o.SetWorksheetColWidthMutation["id"]
 ? this._handleDecompressNumberMapMutationApply(_0x511f77)
 : _0x511f77;
 }),
 ),
 },
 ),
 this.interceptor["intercept"](
 this.interceptor["getInterceptPoints"]().COMPRESS_MUTATION_SEND,
 {
 handler: (_0xfb8786, _0xd5ff7c, _0x510890) =>
 _0x510890(
 _0xfb8786 &&
 _0xfb8786.map((_0x14adaf) => {
 if (_0x14adaf.params["__splitChunk__"]) return _0x14adaf;
 if (_0x14adaf.id === o.SetRangeValuesMutation["id"]) {
 let _0x5d6b26 = _0x14adaf.params;
 return _0x5d6b26.styleRefMap
 ? _0x14adaf
 : {
 ..._0x14adaf,
 params: { ..._0x5d6b26, ...yc(_0x5d6b26.cellValue) },
 };
 } else {
 if (_0x14adaf.id === Cc)
 return (0, t.isCompressedBaseRangeValuesPayload)(
 _0x14adaf.params,
 )
 ? _0x14adaf
 : {
 ..._0x14adaf,
 params: (0, t.compressBaseRangeValuesPayload)(
 _0x14adaf.params,
 ),
 };
 else {
 if (_0x14adaf.id === o.InsertSheetMutation["id"])
 return this._handleInsertSheetCompressMutationSend(
 _0x14adaf,
 _0xd5ff7c,
 );
 else {
 if (
 _0x14adaf.id ===
 o.SetWorksheetRowHeightMutation["id"] ||
 _0x14adaf.id === o.SetWorksheetColWidthMutation["id"]
 )
 return this._handleCompressNumberMapMutationSend(
 _0x14adaf,
 );
 }
 }
 }
 return _0x14adaf;
 }),
 ),
 },
 ));
 }
 _handleInsertSheetCompressMutationSend(_0x4cf840, _0x580879) {
 let _0x42de7c = _0x4cf840.params,
 { unitId: _0xa62a45, sheet: _0x549b36 } = _0x42de7c,
 _0x34119d = _0x580879.getUnit(
 _0xa62a45,
 e.UniverInstanceType["UNIVER_SHEET"],
 );
 if (!_0x34119d) return _0x4cf840;
 let _0x5aa1f1 = {};
 return (
 new e["ObjectMatrix"](_0x549b36.cellData).forValue(
 (_0x5c2273, _0x1a7392, _0xfa9860) => {
 _0xfa9860 &&
 _0xfa9860.s &&
 typeof _0xfa9860.s == "string" &&
 !_0x5aa1f1[_0xfa9860.s] &&
 (_0x5aa1f1[_0xfa9860.s] = _0x34119d.getStyles().get(_0xfa9860.s));
 },
 ),
 { ..._0x4cf840, params: { ..._0x42de7c, styles: _0x5aa1f1 } }
 );
 }
 _handleCompressNumberMapMutationSend(_0x31a541) {
 let _0x5f1fa0 = _0x31a541.params,
 _0xb04652,
 _0x45669c;
 if (
 ("rowHeight" in _0x5f1fa0
 ? ((_0xb04652 = "rowHeight"), (_0x45669c = _0x5f1fa0.rowHeight))
 : ((_0xb04652 = "colWidth"), (_0x45669c = _0x5f1fa0.colWidth)),
 typeof _0x45669c == "number")
 )
 return _0x31a541;
 let _0x2356a7 = _c(_0x45669c);
 return {
 ..._0x31a541,
 params: { ..._0x5f1fa0, [_0xb04652]: _0x2356a7, compress: true },
 };
 }
 _handleDecompressNumberMapMutationApply(_0x554e92) {
 let _0xdaa6e8 = _0x554e92.params;
 if (!("compress" in _0xdaa6e8) || !_0xdaa6e8.compress) return _0x554e92;
 let _0x27ed97, _0x20ed89;
 if ("rowHeight" in _0xdaa6e8)
 ((_0x27ed97 = "rowHeight"), (_0x20ed89 = _0xdaa6e8.rowHeight));
 else {
 if ("colWidth" in _0xdaa6e8)
 ((_0x27ed97 = "colWidth"), (_0x20ed89 = _0xdaa6e8.colWidth));
 else return _0x554e92;
 }
 if (typeof _0x20ed89 == "number") return _0x554e92;
 let _0xc2b5ef = vc(_0x20ed89);
 return { ..._0x554e92, params: { ..._0xdaa6e8, [_0x27ed97]: _0xc2b5ef } };
 }
};
const Tc = new Set([
 o.InsertSheetMutation["id"],
 o.RemoveSheetMutation["id"],
 o.CopyWorksheetEndMutation["id"],
 ]),
 Ec = new Set([
 o.InsertSheetMutation["id"],
 o.RemoveSheetMutation["id"],
 x.id,
 o.SetFrozenMutation["id"],
 o.RemoveRowMutation["id"],
 o.RemoveColMutation["id"],
 o.SetRowHiddenMutation["id"],
 o.SetColHiddenMutation["id"],
 ne.id,
 o.SetWorksheetNameMutation["id"],
 o.SetWorksheetOrderMutation["id"],
 o.SetWorksheetHideMutation["id"],
 o.CopyWorksheetEndMutation["id"],
 o.SetTabColorMutation["id"],
 o.SetWorkbookNameMutation["id"],
 o.AddWorksheetProtectionMutation["id"],
 o.SetWorksheetProtectionMutation["id"],
 o.DeleteWorksheetProtectionMutation["id"],
 o.SetWorksheetPermissionPointsMutation["id"],
 ]);
let Dc = class {
 constructor(_0x3fb9d6) {
 this._univerInstanceService = _0x3fb9d6;
 }
 getCurrentRevOfUnit(_0x3c6f40) {
 let _0x177c5d = this._univerInstanceService["getUnit"](_0x3c6f40);
 if (!_0x177c5d)
 throw Error(
 "[RevisionService]: cannot find document with unitId: " +
 _0x3c6f40 +
 ".",
 );
 return _0x177c5d.getRev();
 }
 incrementRevOfUnit(_0x4bbab9) {
 let _0x2f5302 = this._univerInstanceService["getUnit"](_0x4bbab9);
 if (!_0x2f5302)
 throw Error(
 "[RevisionService]: cannot find document with unitID: " +
 _0x4bbab9 +
 ".",
 );
 return (_0x2f5302.incrementRev(), _0x2f5302.getRev());
 }
 setRevOfUnit(_0x403f2f, _0x43e805) {
 let _0x1560e7 = this._univerInstanceService["getUnit"](_0x403f2f);
 _0x1560e7 && _0x1560e7.setRev(_0x43e805);
 }
};
Dc = T([w(0, e.IUniverInstanceService)], Dc);
let Oc = (function (_0x154548) {
 return (
 (_0x154548.LOADING_SNAPSHOT = "loading-snapshot"),
 (_0x154548.LOADING_BLOCKS = "loading-blocks"),
 (_0x154548.COMPLETE = "complete"),
 (_0x154548.ERROR = "error"),
 _0x154548
 );
})({});
var kc = class extends e.Disposable {
 constructor(..._0x5e6b45) {
 (super(..._0x5e6b45),
 C(this, "_stateByUnit", new Map()),
 C(this, "_state$", new te.BehaviorSubject(new Map())),
 C(this, "state$", this._state$["asObservable"]()));
 }
 begin(_0x3cd4c7, _0x500462) {
 this._setState({
 unitId: _0x3cd4c7,
 type: _0x500462,
 stage: "loading-snapshot",
 totalBlocks: 0,
 loadedBlocks: 0,
 });
 }
 setSnapshot(_0x5b62ab, _0x73c24c) {
 let _0xfb6105 = this._stateByUnit["get"](_0x5b62ab);
 _0xfb6105 &&
 this._setState({
 ..._0xfb6105,
 stage: "loading-blocks",
 totalBlocks: _0x73c24c,
 });
 }
 addBlock(_0xe61662) {
 let _0x4499ab = this._stateByUnit["get"](_0xe61662);
 !_0x4499ab ||
 _0x4499ab.stage !== "loading-blocks" ||
 this._setState({
 ..._0x4499ab,
 loadedBlocks: Math.min(
 _0x4499ab.loadedBlocks + 1,
 _0x4499ab.totalBlocks,
 ),
 });
 }
 complete(_0x38f8f2) {
 let _0x339e34 = this._stateByUnit["get"](_0x38f8f2);
 _0x339e34 &&
 this._setState({
 unitId: _0x38f8f2,
 type: _0x339e34.type,
 stage: "complete",
 totalBlocks: _0x339e34.totalBlocks,
 loadedBlocks: _0x339e34.totalBlocks,
 });
 }
 fail(_0x15fe61, _0x1119c1) {
 let _0x2406fb = this._stateByUnit["get"](_0x15fe61);
 _0x2406fb &&
 this._setState({
 unitId: _0x15fe61,
 type: _0x2406fb.type,
 stage: "error",
 totalBlocks: _0x2406fb.totalBlocks,
 loadedBlocks: _0x2406fb.loadedBlocks,
 error: _0x1119c1,
 });
 }
 getState(_0x17692f) {
 return this._stateByUnit["get"](_0x17692f);
 }
 dispose() {
 (this._stateByUnit["clear"](), this._state$["complete"](), super.dispose());
 }
 _setState(_0x479226) {
 (this._stateByUnit["set"](_0x479226.unitId, _0x479226),
 this._state$["next"](new Map(this._stateByUnit)));
 }
};
const q = new TextEncoder(),
 J = new TextDecoder();
function Ac(_0x5eea7b) {
 let _0x1747ef = ["id", "name", "rowCount", "columnCount", "cellData"],
 _0x6f971e = {};
 return (
 Object.keys(_0x5eea7b).forEach((_0x4e1117) => {
 _0x1747ef.includes(_0x4e1117) ||
 (_0x6f971e[_0x4e1117] = e.Tools["deepClone"](_0x5eea7b[_0x4e1117]));
 }),
 q.encode(JSON.stringify(_0x6f971e))
 );
}
function jc(_0x2b7e7f) {
 let _0x495101 = ["id", "rev", "name", "sheetOrder", "sheets", "resources"],
 _0x31e728 = {};
 return (
 Object.keys(_0x2b7e7f).forEach((_0xa3be71) => {
 _0x495101.includes(_0xa3be71) ||
 (_0x31e728[_0xa3be71] = e.Tools["deepClone"](_0x2b7e7f[_0xa3be71]));
 }),
 q.encode(JSON.stringify(_0x31e728))
 );
}
function Mc(_0x25ac24) {
 let _0x44d9c6 = ["id", "rev", "title", "resources"],
 _0x53a528 = {};
 return (
 Object.keys(_0x25ac24).forEach((_0x23109f) => {
 _0x44d9c6.includes(_0x23109f) ||
 (_0x53a528[_0x23109f] = e.Tools["deepClone"](_0x25ac24[_0x23109f]));
 }),
 q.encode(JSON.stringify(_0x53a528))
 );
}
function Nc(_0x139b9e) {
 return q.encode(JSON.stringify(_0x139b9e));
}
function Pc(_0x1ff544) {
 return q.encode(JSON.stringify(_0x1ff544));
}
function Fc(_0x317067) {
 let _0x27cda5 = { ..._0x317067 };
 return (
 delete _0x27cda5.fragmentBindings,
 _0x27cda5.documentShell && delete _0x27cda5.document,
 q.encode(JSON.stringify(_0x27cda5))
 );
}
function Ic(_0xfb22ce) {
 return JSON.parse(
 typeof _0xfb22ce == "string" ? Y(_0xfb22ce) : J.decode(_0xfb22ce),
 );
}
function Lc(_0xdfc04) {
 return JSON.parse(
 typeof _0xdfc04 == "string" ? Y(_0xdfc04) : J.decode(_0xdfc04),
 );
}
function Rc(_0x3ad337) {
 if (_0x3ad337 instanceof Uint8Array) {
 let _0x29205f = J.decode(_0x3ad337),
 _0x10b360 = JSON.parse(_0x29205f);
 return ((_0x29205f = null), _0x10b360);
 }
 return _0x3ad337;
}
function zc(_0x5df743) {
 return JSON.parse(
 typeof _0x5df743 == "string" ? Y(_0x5df743) : J.decode(_0x5df743),
 );
}
function Bc(_0x40546c) {
 return JSON.parse(
 typeof _0x40546c == "string" ? Y(_0x40546c) : J.decode(_0x40546c),
 );
}
function Vc(_0x2cbaf4) {
 return JSON.parse(
 typeof _0x2cbaf4 == "string" ? Y(_0x2cbaf4) : J.decode(_0x2cbaf4),
 );
}
function Hc(_0x1258b7) {
 return JSON.parse(
 typeof _0x1258b7 == "string" ? Y(_0x1258b7) : J.decode(_0x1258b7),
 );
}
function Uc(_0x7b9ccb, _0x1ef44c = 102400, _0x52401c = 1048576) {
 let _0x525ae9 = Date.now(),
 _0x20f7da = new e["ObjectMatrix"](_0x7b9ccb),
 {
 startRow: _0x435bdd,
 endRow: _0x2ec17f,
 startColumn: _0x48f771,
 endColumn: _0xb481c8,
 } = _0x20f7da.getRealRange(),
 _0x149230 = [],
 _0x38b992 = Math.ceil(_0x1ef44c / (_0xb481c8 - _0x48f771 + 1)),
 _0x5642d1 = _0x435bdd,
 _0x198c66 = null,
 _0x2c7715 = null,
 _0x48aaa7 = 0,
 _0x495f09 = 0,
 _0x445580 = 0,
 _0x2e32ae = 0;
 for (; _0x5642d1 <= _0x2ec17f;) {
 let _0x48c114 = Math.min(_0x5642d1 + _0x38b992 - 1, _0x2ec17f),
 { sliceData: _0x4b1efa, cellCount: _0x86f65e } =
 _0x20f7da.getSliceDataAndCellCountByRows(_0x5642d1, _0x48c114);
 if (_0x86f65e === 0) {
 if (_0x48c114 >= _0x2ec17f && _0x2c7715 !== null) {
 let _0x14e544 = Wc(_0x2c7715);
 _0x149230.push({
 id: (0, e.generateRandomId)(19, "0123456789"),
 startRow: _0x48aaa7,
 endRow: _0x2ec17f,
 data: _0x14e544,
 });
 }
 _0x5642d1 = _0x48c114 + 1;
 continue;
 }
 if (
 (_0x2c7715 === null
 ? ((_0x2c7715 = _0x4b1efa), (_0x48aaa7 = _0x5642d1))
 : _0x2c7715.concatRows(_0x4b1efa),
 (_0x495f09 += _0x86f65e),
 (_0x2e32ae += _0x86f65e),
 _0x198c66 === null
 ? ((_0x445580 = Wc(_0x2c7715).byteLength),
 (_0x198c66 = _0x445580 / _0x495f09))
 : (_0x445580 += _0x86f65e * _0x198c66),
 _0x48c114 >= _0x2ec17f || _0x445580 >= _0x52401c)
 ) {
 let _0x345ab3 = Wc(_0x2c7715);
 (_0x149230.push({
 id: (0, e.generateRandomId)(19, "0123456789"),
 startRow: _0x48aaa7,
 endRow: _0x48c114,
 data: _0x345ab3,
 }),
 (_0x2c7715 = null),
 (_0x48aaa7 = 0),
 (_0x495f09 = 0),
 (_0x445580 = 0));
 }
 if (_0x48c114 >= _0x2ec17f) break;
 _0x5642d1 = _0x48c114 + 1;
 }
 return {
 blocks: _0x149230,
 totalCells: _0x2e32ae,
 totalTime: Date.now() - _0x525ae9,
 };
}
function Wc(_0x468012) {
 let _0x2c6c2b = _0x468012.getMatrix();
 return q.encode(JSON.stringify(_0x2c6c2b));
}
function Gc(_0x1cad4c) {
 return _0x1cad4c;
}
function Kc(_0x58fffc) {
 let _0x3e1091 = q.encode(_0x58fffc),
 _0x535c02 = "";
 for (let _0x2bec3b = 0; _0x2bec3b < _0x3e1091.length; _0x2bec3b++)
 _0x535c02 += String.fromCharCode(_0x3e1091[_0x2bec3b]);
 return btoa(_0x535c02);
}
function Y(_0xccb63b) {
 let _0x4a3208 = atob(_0xccb63b),
 _0x5a5702 = _0x4a3208.length,
 _0x1a56b1 = new Uint8Array(_0x5a5702);
 for (let _0x537221 = 0; _0x537221 < _0x5a5702; _0x537221++)
 _0x1a56b1[_0x537221] = _0x4a3208.charCodeAt(_0x537221);
 let _0x1b0a4a = J.decode(_0x1a56b1);
 return ((_0x1a56b1 = null), _0x1b0a4a);
}
async function qc({
 tasks: _0xc6b867,
 handleTaskResult: _0x9d274f,
 limit: _0x11a6cd = 10,
 options: _0x50e1a0 = { retryCount: 3, retryDelay: 200 },
 onError: _0x429974,
}) {
 if (_0xc6b867.length === 0) return;
 let { retryCount: _0x20e99a, retryDelay: _0x5b3e3f } = _0x50e1a0,
 _0x1b35f4 = (_0x4ac77c) =>
 new Promise((_0x98dbcd) => setTimeout(_0x98dbcd, _0x4ac77c)),
 _0x20ccd9 = async (_0xe8f69) => {
 let _0xd80724 = 0;
 for (;;)
 try {
 return await _0xe8f69();
 } catch (_0x4609c7) {
 if (
 (_0x429974 == null || _0x429974(_0x4609c7),
 _0xd80724++,
 _0xd80724 > _0x20e99a)
 )
 throw _0x4609c7;
 await _0x1b35f4(_0x5b3e3f);
 }
 },
 _0x1f64af = 0,
 _0x168450 = Array.from(
 { length: Math.min(_0x11a6cd, _0xc6b867.length) },
 async () => {
 for (;;) {
 let _0x5b5c2f = _0x1f64af++;
 if (_0x5b5c2f >= _0xc6b867.length) break;
 let _0x5c5abd = await _0x20ccd9(_0xc6b867[_0x5b5c2f]);
 (_0x9d274f && _0x9d274f(_0x5c5abd), (_0x5c5abd = null));
 }
 },
 );
 await Promise.all(_0x168450);
}
async function Jc(
 _0x5ba269,
 _0x45eb49,
 _0x560ea6,
 _0x457fa3 = 10000,
 _0x5b9cbf,
) {
 let _0x23837a = performance.now();
 _0x560ea6 == null ||
 _0x560ea6.debug("async\x20[" + _0x5ba269 + "] start " + (_0x5b9cbf ?? ""));
 try {
 let _0x4ed50c = await _0x45eb49(),
 _0x3c0c07 = performance.now() - _0x23837a;
 return (
 _0x3c0c07 > _0x457fa3
 ? _0x560ea6.warn(
 "async [" +
 _0x5ba269 +
 "] took a long time: " +
 _0x3c0c07.toFixed(2) +
 " ms",
 )
 : _0x560ea6.debug(
 "async [" +
 _0x5ba269 +
 "]\x20end,\x20took\x20" +
 _0x3c0c07.toFixed(2) +
 " ms",
 ),
 _0x4ed50c
 );
 } catch (_0x472c64) {
 let _0x485eaa = performance.now() - _0x23837a;
 throw (
 _0x560ea6.error(
 "async [" +
 _0x5ba269 +
 "]\x20failed\x20after\x20" +
 _0x485eaa.toFixed(2) +
 " ms",
 _0x472c64,
 ),
 _0x472c64
 );
 }
}
function Yc(_0x4989c2, _0x5ebbe0, _0x252d92, _0x1ddb1d = 10000, _0x35e4f7) {
 let _0x2a0835 = performance.now();
 _0x252d92 == null ||
 _0x252d92.debug("sync\x20[" + _0x4989c2 + "] start " + (_0x35e4f7 ?? ""));
 try {
 let _0x587a3d = _0x5ebbe0(),
 _0x263a74 = performance.now() - _0x2a0835;
 return (
 _0x263a74 > _0x1ddb1d
 ? _0x252d92.warn(
 "sync [" +
 _0x4989c2 +
 "] took a long time: " +
 _0x263a74.toFixed(2) +
 "\x20ms",
 )
 : _0x252d92.debug(
 "sync [" +
 _0x4989c2 +
 "]\x20end,\x20took\x20" +
 _0x263a74.toFixed(2) +
 " ms",
 ),
 _0x587a3d
 );
 } catch (_0x13b767) {
 let _0x1382e5 = performance.now() - _0x2a0835;
 throw (
 _0x252d92.error(
 "sync [" +
 _0x4989c2 +
 "] failed after " +
 _0x1382e5.toFixed(2) +
 "\x20ms",
 _0x13b767,
 ),
 _0x13b767
 );
 }
}
async function Xc() {
 await new Promise((_0x52647c) => {
 typeof setImmediate == "function"
 ? setImmediate(_0x52647c)
 : setTimeout(_0x52647c, 0);
 });
}
const Zc = ["page-block", "shared-fragment", "search-block"];
async function Qc(_0x4ee301, _0x3b2dbf, _0x39ff3b, _0x308686) {
 let _0x5c83a9 = {
 unitID: _0x3b2dbf.id,
 rev: _0x308686,
 creator: "",
 name: _0x3b2dbf.title ?? "",
 resources: _0x3b2dbf.resources || [],
 originalMeta: Mc(_0x3b2dbf),
 };
 return {
 snapshot: {
 unitID: _0x39ff3b,
 rev: _0x5c83a9.rev,
 type: e.UniverInstanceType["UNIVER_DOC"],
 workbook: undefined,
 doc: _0x5c83a9,
 slide: undefined,
 board: undefined,
 pdf: undefined,
 },
 };
}
async function $c(
 _0x5ee980,
 _0x525dac,
 _0x96afbd,
 _0x5417da,
 _0x79fb2f,
 _0x3dfc59,
) {
 let _0x281d2f = {},
 _0x2e7963 = {};
 await Promise.all(
 Object.entries(_0x525dac.tables).map(async ([_0x464f63, _0x3a44fe]) => {
 if (
 ((_0x2e7963[_0x464f63] = {
 id: _0x3a44fe.id,
 type: 0,
 name: _0x3a44fe.name,
 rowCount: Al(_0x3a44fe),
 columnCount: jl(_0x3a44fe),
 originalMeta: wl(_0x3a44fe),
 }),
 (_0x281d2f[_0x464f63] = { sheetID: _0x464f63, blocks: [] }),
 _0x3a44fe.cellData)
 ) {
 let { blocks: _0x2938af } = Uc(_0x3a44fe.cellData);
 await qc({
 tasks: _0x2938af.map(
 (_0x28ef06) => () =>
 _0x79fb2f.saveSheetBlock(_0x5ee980, {
 unitID: _0x96afbd,
 type: e.UniverInstanceType["UNIVER_BASE"],
 block: _0x28ef06,
 }),
 ),
 handleTaskResult: (_0x1f6223) => {
 var _0x48fa12;
 if (
 ((_0x48fa12 = _0x1f6223.error) == null
 ? undefined
 : _0x48fa12.code) !== y.ErrorCode["OK"]
 )
 throw Error(
 "[generateTempBaseSnapshot()]: Failed to save base blocks.",
 );
 _0x281d2f[_0x464f63].blocks["push"](_0x1f6223.blockID);
 },
 onError: (_0x4eabae) => {
 _0x3dfc59 == null ||
 _0x3dfc59.error(
 "[generateTempBaseSnapshot()]",
 "Error\x20saving\x20block\x20for\x20base\x20table\x20" +
 _0x464f63 +
 ":\x20" +
 _0x4eabae,
 );
 },
 });
 }
 }),
 );
 let _0x4b33ce = {
 unitID: _0x525dac.id,
 rev: _0x5417da,
 creator: _0x525dac.createdBy ?? "",
 name: _0x525dac.name,
 sheetOrder: _0x525dac.tableOrder,
 sheets: _0x2e7963,
 blockMeta: _0x281d2f,
 resources: _0x525dac.resources || [],
 originalMeta: Cl(_0x525dac),
 };
 return {
 snapshot: {
 unitID: _0x96afbd,
 rev: _0x5417da,
 type: e.UniverInstanceType["UNIVER_BASE"],
 workbook: _0x4b33ce,
 doc: undefined,
 slide: undefined,
 board: undefined,
 pdf: undefined,
 },
 };
}
async function el(
 _0x27a432,
 _0x2600f3,
 _0x347f40,
 _0x1de204,
 _0x523c2,
 _0x1563f1,
) {
 let _0x5cb5bc = {},
 _0xaec56b = {};
 if (
 !(await Promise.all(
 Object.entries(_0x2600f3.sheets).map(async ([_0x561f58, _0x832c1b]) => {
 let _0x2f4620 = {
 id: _0x832c1b.id,
 type: e.SheetTypes["GRID"],
 name: _0x832c1b.name,
 rowCount: _0x832c1b.rowCount,
 columnCount: _0x832c1b.columnCount,
 originalMeta: Ac(_0x832c1b),
 };
 if (((_0xaec56b[_0x561f58] = _0x2f4620), _0x832c1b.cellData)) {
 let { blocks: _0x53a70d } = Uc(_0x832c1b.cellData),
 _0x39ef91 = await Promise.all(
 _0x53a70d.map((_0x318209) =>
 _0x523c2.saveSheetBlock(_0x27a432, {
 unitID: _0x347f40,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 block: _0x318209,
 }),
 ),
 );
 if (
 _0x39ef91.some((_0x51ce57) => {
 var _0x17c1a9;
 return (
 ((_0x17c1a9 = _0x51ce57.error) == null
 ? undefined
 : _0x17c1a9.code) !== y.ErrorCode["OK"]
 );
 })
 )
 return false;
 _0x5cb5bc[_0x561f58] = {
 sheetID: _0x561f58,
 blocks: _0x39ef91.map((_0x1c8abe) => _0x1c8abe.blockID),
 };
 }
 return true;
 }),
 ))
 )
 throw Error(
 "[transformWorkbookDataToSnapshot()]: Failed to save sheet blocks.",
 );
 let _0x18deaf = jc(_0x2600f3),
 _0x459e73 = {
 unitID: _0x2600f3.id,
 rev: _0x1de204,
 creator: "",
 name: _0x2600f3.name,
 sheetOrder: _0x2600f3.sheetOrder,
 sheets: _0xaec56b,
 blockMeta: _0x5cb5bc,
 resources: _0x2600f3.resources || [],
 originalMeta: _0x18deaf,
 },
 _0x3d4915 = (_0x5f541f, _0x3a44b4) =>
 _0x5f541f.every((_0xa02734) =>
 Object.prototype["hasOwnProperty"].call(_0x3a44b4, _0xa02734),
 ),
 _0x5c73ef = _0x2600f3.sheetOrder["length"],
 _0x204ffd = Object.keys(_0x459e73.sheets),
 _0x3163ce = Object.keys(_0x459e73.blockMeta);
 if (
 _0x5c73ef !== _0x204ffd.length ||
 !_0x3d4915(_0x2600f3.sheetOrder, _0x459e73.sheets)
 )
 throw (
 _0x1563f1 == null ||
 _0x1563f1.error(
 "[generateTemporarySnap()]",
 "Sheet order mismatch! " +
 _0x347f40 +
 "\x20" +
 _0x5c73ef +
 "\x20" +
 _0x204ffd.length +
 "\x20Sheet\x20Order:\x20" +
 JSON.stringify(_0x2600f3.sheetOrder) +
 "\x20Sheet\x20Metas:\x20" +
 JSON.stringify(_0x204ffd) +
 " Sheet raw: " +
 JSON.stringify(Object.keys(_0x2600f3.sheets)),
 ),
 Error("[generateTemporarySnap()]: Sheet order mismatch")
 );
 if (
 _0x204ffd.length !== _0x3163ce.length ||
 !_0x3d4915(_0x204ffd, _0x459e73.blockMeta) ||
 !_0x3d4915(_0x3163ce, _0x459e73.sheets)
 )
 throw (
 _0x1563f1 == null ||
 _0x1563f1.error(
 "[generateTemporarySnap()]",
 "Sheet block mismatch! " +
 _0x347f40 +
 "\x20" +
 _0x204ffd.length +
 "\x20" +
 _0x3163ce.length +
 " Sheet Metas: " +
 JSON.stringify(_0x204ffd) +
 " Block Metas: " +
 JSON.stringify(_0x3163ce) +
 " Sheet raw: " +
 JSON.stringify(Object.keys(_0x2600f3.sheets)),
 ),
 Error("[generateTemporarySnap()]:\x20Sheet\x20block\x20mismatch")
 );
 return {
 snapshot: {
 unitID: _0x347f40,
 rev: _0x459e73.rev,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 workbook: _0x459e73,
 doc: undefined,
 slide: undefined,
 board: undefined,
 pdf: undefined,
 },
 };
}
async function tl(_0x5debb8, _0x389ec6, _0x16e70b, _0xbebd74) {
 let _0x27a5d2 = {};
 if (
 !(await Promise.all(
 Object.entries(_0x389ec6.sheets).map(async ([_0x4dcafe, _0x3e3a45]) => {
 if (_0x3e3a45.cellData) {
 let { blocks: _0x2befb1 } = Uc(_0x3e3a45.cellData),
 _0x4198ac = await Promise.all(
 _0x2befb1.map((_0x5e6402) =>
 _0xbebd74.saveSheetBlock(_0x5debb8, {
 unitID: _0x16e70b,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 block: _0x5e6402,
 }),
 ),
 );
 if (
 _0x4198ac.some((_0x51c5a7) => {
 var _0x39a15e;
 return (
 ((_0x39a15e = _0x51c5a7.error) == null
 ? undefined
 : _0x39a15e.code) !== y.ErrorCode["OK"]
 );
 })
 )
 return false;
 _0x27a5d2[_0x4dcafe] = {
 sheetID: _0x4dcafe,
 blocks: _0x4198ac.map((_0x3fa4dd) => _0x3fa4dd.blockID),
 };
 }
 return true;
 }),
 ))
 )
 throw Error(
 "[transformWorkbookDataToSnapshot()]: Failed to save sheet blocks.",
 );
 return _0x27a5d2;
}
async function nl(
 _0x323f63,
 _0x855a26,
 _0x5624a2,
 _0x1035ce,
 _0x32f9fb,
 _0xba60ee,
) {
 var _0x140c64;
 let _0x433d51 = {},
 _0xa45bd4 = {},
 _0x28e97b = 0,
 _0x1ef77e = 0,
 _0x29a94f = [];
 for (let _0xffd504 in _0x855a26.sheets) {
 let _0x2dac1f = Date.now(),
 _0x502f62 = _0x855a26.sheets[_0xffd504];
 if (
 ((_0xa45bd4[_0xffd504] = {
 id: _0x502f62.id,
 type: e.SheetTypes["GRID"],
 name: _0x502f62.name,
 rowCount: _0x502f62.rowCount,
 columnCount: _0x502f62.columnCount,
 originalMeta: Ac(_0x502f62),
 }),
 (_0x433d51[_0xffd504] = { sheetID: _0xffd504, blocks: [] }),
 (_0x1ef77e += Date.now() - _0x2dac1f),
 _0x502f62.cellData)
 ) {
 let {
 blocks: _0x3d041e,
 totalCells: _0x2edf71,
 totalTime: _0x1b15f8,
 } = Uc(_0x502f62.cellData);
 ((_0x28e97b += _0x2edf71), (_0x1ef77e += _0x1b15f8));
 let _0x1f0faa = _0x3d041e.map((_0x319c87, _0x38a13a) => async () => ({
 index: _0x38a13a,
 response: await _0x32f9fb.saveSheetBlock(_0x323f63, {
 unitID: _0x5624a2,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 block: _0x319c87,
 }),
 }));
 _0x29a94f.push(
 (async (_0x1c7264) => {
 try {
 await qc({
 tasks: _0x1f0faa,
 handleTaskResult: ({ index: _0x5b9ee0, response: _0x3a3306 }) => {
 var _0x3c6646;
 if (
 ((_0x3c6646 = _0x3a3306.error) == null
 ? undefined
 : _0x3c6646.code) !== y.ErrorCode["OK"]
 )
 throw Error(
 "[transformWorkbookDataToSnapshot()]:\x20Failed\x20to\x20save\x20sheet\x20blocks.",
 );
 _0x433d51[_0x1c7264].blocks[_0x5b9ee0] = _0x3a3306.blockID;
 },
 onError: (_0x48c894) => {
 _0xba60ee == null ||
 _0xba60ee.error(
 "[transformWorkbookDataToSnapshot()]",
 "Error\x20saving\x20block\x20for\x20sheet\x20" +
 _0x1c7264 +
 ":\x20" +
 _0x48c894,
 );
 },
 });
 } catch (_0x2fac5e) {
 throw Error(
 "[transformWorkbookDataToSnapshot()]: Failed to save sheet blocks. " +
 JSON.stringify(_0x2fac5e),
 );
 }
 })(_0xffd504),
 );
 }
 }
 await Promise.all(_0x29a94f);
 let _0x2ae93e = Date.now(),
 _0x2ead3b = jc(_0x855a26),
 _0x173d11 = {
 unitID: _0x855a26.id,
 rev: _0x1035ce,
 creator: "",
 name: _0x855a26.name,
 sheetOrder: _0x855a26.sheetOrder,
 sheets: _0xa45bd4,
 blockMeta: _0x433d51,
 resources: _0x855a26.resources || [],
 originalMeta: _0x2ead3b,
 },
 _0x1c0e75 = (_0x146bf3, _0x1c6191) =>
 _0x146bf3.every((_0x434b1e) =>
 Object.prototype["hasOwnProperty"].call(_0x1c6191, _0x434b1e),
 ),
 _0x28320 = _0x855a26.sheetOrder["length"],
 _0x83ae96 = Object.keys(_0x173d11.sheets),
 _0x3bf627 = Object.keys(_0x173d11.blockMeta);
 if (
 _0x28320 !== _0x83ae96.length ||
 !_0x1c0e75(_0x855a26.sheetOrder, _0x173d11.sheets)
 )
 throw (
 _0xba60ee == null ||
 _0xba60ee.error(
 "[transformWorkbookDataToSnapshot()]",
 "Sheet order mismatch! " +
 _0x855a26.id +
 "\x20" +
 _0x28320 +
 "\x20" +
 _0x83ae96.length +
 "\x20Sheet\x20Order:\x20" +
 JSON.stringify(_0x855a26.sheetOrder) +
 "\x20Sheet\x20Metas:\x20" +
 JSON.stringify(_0x83ae96) +
 " Sheet raw: " +
 JSON.stringify(Object.keys(_0x855a26.sheets)),
 ),
 Error(
 "[transformWorkbookDataToSnapshot()]:\x20Sheet\x20order\x20mismatch",
 )
 );
 if (
 _0x83ae96.length !== _0x3bf627.length ||
 !_0x1c0e75(_0x83ae96, _0x173d11.blockMeta) ||
 !_0x1c0e75(_0x3bf627, _0x173d11.sheets)
 )
 throw (
 _0xba60ee == null ||
 _0xba60ee.error(
 "[transformWorkbookDataToSnapshot()]",
 "Sheet\x20block\x20mismatch!\x20" +
 _0x855a26.id +
 "\x20" +
 _0x83ae96.length +
 "\x20" +
 _0x3bf627.length +
 " Sheet Metas: " +
 JSON.stringify(_0x83ae96) +
 " Block Metas: " +
 JSON.stringify(_0x3bf627) +
 " Sheet raw: " +
 JSON.stringify(Object.keys(_0x855a26.sheets)),
 ),
 Error("[transformWorkbookDataToSnapshot()]: Sheet block mismatch")
 );
 _0x1ef77e += Date.now() - _0x2ae93e;
 let _0x37e3bc = {
 unitID: _0x5624a2,
 rev: _0x173d11.rev,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 workbook: _0x173d11,
 doc: undefined,
 slide: undefined,
 board: undefined,
 pdf: undefined,
 },
 _0x49a453 = await _0x32f9fb.saveSnapshot(_0x323f63, {
 unitID: _0x5624a2,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 snapshot: _0x37e3bc,
 });
 if (
 ((_0x140c64 = _0x32f9fb.reportUnitRoutingStats) == null ||
 _0x140c64.call(_0x32f9fb, _0x323f63, {
 unitId: _0x5624a2,
 estimatedCells: _0x28e97b,
 snapshotTime: Math.round(_0x1ef77e / 1000),
 }),
 (0, y.isError)(_0x49a453.error))
 ) {
 var _0x5eb245, _0x881861;
 throw Error(
 "transformWorkbookDataToSnapshot():\x20Failed\x20to\x20save\x20snapshot.\x0aErrorCode:\x20" +
 ((_0x5eb245 = _0x49a453.error) == null ? undefined : _0x5eb245.code) +
 ":" +
 ((_0x881861 = _0x49a453.error) == null ? undefined : _0x881861.message),
 );
 }
 return { snapshot: _0x37e3bc };
}
async function rl(
 _0x4f2933,
 _0x3ca78b,
 _0x481606,
 _0x4a85c8,
 _0x33c21c,
 _0x4bef0a,
) {
 let _0xf5cbc1 = {},
 _0x408292 = {},
 _0x249926 = Object.entries(_0x3ca78b.tables).map(
 async ([_0x2e5cb6, _0x377ce8]) => {
 if (
 ((_0x408292[_0x2e5cb6] = {
 id: _0x377ce8.id,
 type: 0,
 name: _0x377ce8.name,
 rowCount: Al(_0x377ce8),
 columnCount: jl(_0x377ce8),
 originalMeta: wl(_0x377ce8),
 }),
 (_0xf5cbc1[_0x2e5cb6] = { sheetID: _0x2e5cb6, blocks: [] }),
 _0x377ce8.cellData)
 ) {
 let { blocks: _0x54c263 } = Uc(_0x377ce8.cellData);
 await qc({
 tasks: _0x54c263.map(
 (_0x136332) => () =>
 _0x33c21c.saveSheetBlock(_0x4f2933, {
 unitID: _0x481606,
 type: e.UniverInstanceType["UNIVER_BASE"],
 block: _0x136332,
 }),
 ),
 handleTaskResult: (_0x37f00e) => {
 var _0x327a1d;
 if (
 ((_0x327a1d = _0x37f00e.error) == null
 ? undefined
 : _0x327a1d.code) !== y.ErrorCode["OK"]
 )
 throw Error(
 "[transformBaseDataToSnapshot()]:\x20Failed\x20to\x20save\x20base\x20blocks.",
 );
 _0xf5cbc1[_0x2e5cb6].blocks["push"](_0x37f00e.blockID);
 },
 onError: (_0x233ef5) => {
 _0x4bef0a == null ||
 _0x4bef0a.error(
 "[transformBaseDataToSnapshot()]",
 "Error saving block for base table " +
 _0x2e5cb6 +
 ":\x20" +
 _0x233ef5,
 );
 },
 });
 }
 },
 );
 await Promise.all(_0x249926);
 let _0x2c9db1 = {
 unitID: _0x3ca78b.id,
 rev: _0x4a85c8,
 creator: _0x3ca78b.createdBy ?? "",
 name: _0x3ca78b.name,
 sheetOrder: _0x3ca78b.tableOrder,
 sheets: _0x408292,
 blockMeta: _0xf5cbc1,
 resources: _0x3ca78b.resources || [],
 originalMeta: Cl(_0x3ca78b),
 },
 _0xa5e83d = {
 unitID: _0x481606,
 rev: _0x4a85c8,
 type: e.UniverInstanceType["UNIVER_BASE"],
 workbook: _0x2c9db1,
 doc: undefined,
 slide: undefined,
 board: undefined,
 pdf: undefined,
 },
 _0x4a6294 = await _0x33c21c.saveSnapshot(_0x4f2933, {
 unitID: _0x481606,
 type: e.UniverInstanceType["UNIVER_BASE"],
 snapshot: _0xa5e83d,
 });
 if ((0, y.isError)(_0x4a6294.error)) {
 var _0x20777c, _0x62fe7a;
 throw Error(
 "transformBaseDataToSnapshot(): Failed to save snapshot.\nErrorCode: " +
 ((_0x20777c = _0x4a6294.error) == null ? undefined : _0x20777c.code) +
 ":" +
 ((_0x62fe7a = _0x4a6294.error) == null ? undefined : _0x62fe7a.message),
 );
 }
 return { snapshot: _0xa5e83d };
}
async function il(_0x38761c, _0x358eea, _0xe7b6de, _0x353bf5) {
 let _0x36f730 = _0x38761c.workbook;
 if (!_0x36f730) throw Error("Missing\x20workbook\x20meta\x20in\x20snapshot");
 let _0x44ae7b = {};
 Object.entries(_0x36f730.sheets).forEach(([_0xce7cf3, _0x2a4398]) => {
 let _0x5b4e8a = Ic(_0x2a4398.originalMeta);
 _0x44ae7b[_0xce7cf3] = {
 id: _0x2a4398.id,
 name: _0x2a4398.name,
 rowCount: _0x2a4398.rowCount,
 columnCount: _0x2a4398.columnCount,
 ..._0x5b4e8a,
 };
 });
 let _0x27e350 = new Map();
 for (let _0x4b3ff6 = 0; _0x4b3ff6 < _0x358eea.length; _0x4b3ff6++)
 _0x27e350.set(_0x358eea[_0x4b3ff6].id, {
 index: _0x4b3ff6,
 block: _0x358eea[_0x4b3ff6],
 });
 let _0x437b9f = performance.now();
 if (
 (_0x353bf5 == null ||
 _0x353bf5.debug(
 "[ParseBlocks]",
 "parse\x20blocks\x20start,\x20total\x20" + _0x358eea.length + " blocks",
 ),
 _0x36f730.blockMeta)
 )
 for (let [_0x33956e, _0x50ef28] of Object.entries(_0x36f730.blockMeta)) {
 if (!_0x44ae7b[_0x33956e]) continue;
 let _0x450830 = {};
 if (_0x50ef28.blocks && _0x50ef28.blocks["length"] > 0)
 for (let _0x25efeb of _0x50ef28.blocks) {
 if (!_0x27e350.has(_0x25efeb))
 throw Error(
 "Missing sheet block " + _0x25efeb + " for sheet " + _0x33956e,
 );
 let { index: _0x22df00, block: _0x10374e } = _0x27e350.get(_0x25efeb);
 if (_0x10374e) {
 let _0x7cf682 = Rc(_0x10374e.data);
 for (let _0x2a7981 in _0x7cf682)
 _0x450830[Number(_0x2a7981)] = _0x7cf682[_0x2a7981];
 (_0x27e350.delete(_0x25efeb),
 (_0x358eea[_0x22df00] = null),
 (_0x10374e.data = null));
 }
 await Xc();
 }
 _0x44ae7b[_0x33956e].cellData = _0x450830;
 }
 let _0x173c15 = performance.now();
 (_0x173c15 - _0x437b9f > 10000
 ? _0x353bf5 == null ||
 _0x353bf5.debug(
 "[ParseBlocks]",
 "Parsing blocks took a long time: " +
 (_0x173c15 - _0x437b9f).toFixed(2) +
 " ms",
 )
 : _0x353bf5 == null ||
 _0x353bf5.debug(
 "[ParseBlocks]",
 "parse blocks end, took " +
 (_0x173c15 - _0x437b9f).toFixed(2) +
 "\x20ms",
 ),
 _0x27e350.clear(),
 (_0x358eea.length = 0));
 let _0x4f37e2 = Lc(_0x36f730.originalMeta);
 return {
 id: _0x38761c.unitID || _0x36f730.unitID,
 rev: _0x38761c.rev || _0x36f730.rev,
 name: _0x36f730.name,
 sheetOrder: _0x36f730.sheetOrder,
 appVersion: "",
 locale: e.LocaleType["EN_US"],
 sheets: _0x44ae7b,
 styles: {},
 resources: _0x36f730.resources || [],
 ..._0x4f37e2,
 };
}
async function al(_0x5a3344, _0x3105a7 = [], _0x53f4d6, _0x4235b8) {
 var _0x41b5f3;
 if (_0x5a3344.type !== e.UniverInstanceType["UNIVER_BASE"])
 throw Error("Snapshot is not a Base unit");
 let _0x38f1c5 = _0x5a3344.workbook;
 if (!_0x38f1c5) throw Error("Missing workbook-shaped Base meta in snapshot");
 let _0xb62f95 = new Map();
 _0x3105a7.forEach((_0x1b945d) => _0xb62f95.set(_0x1b945d.id, _0x1b945d));
 let _0xb6d716 = {};
 for (let [_0x169a24, _0xd8be76] of Object.entries(_0x38f1c5.sheets)) {
 var _0x292daa;
 let _0x49d5ea = El(_0xd8be76.originalMeta),
 _0x143cb5 = {},
 _0x2df9e9 =
 ((_0x292daa = _0x38f1c5.blockMeta) == null ||
 (_0x292daa = _0x292daa[_0x169a24]) == null
 ? undefined
 : _0x292daa.blocks) ?? [];
 for (let _0x4b5fdb of _0x2df9e9) {
 let _0x32ad60 = _0xb62f95.get(_0x4b5fdb);
 if (!_0x32ad60)
 throw Error(
 "Missing base block " + _0x4b5fdb + " for table " + _0x169a24,
 );
 let _0x4b15f0 = Rc(_0x32ad60.data);
 for (let _0x426b0f in _0x4b15f0)
 _0x143cb5[Number(_0x426b0f)] = _0x4b15f0[_0x426b0f];
 await Xc();
 }
 _0xb6d716[_0x169a24] = {
 id: _0xd8be76.id,
 name: _0xd8be76.name,
 ..._0x49d5ea,
 cellData: _0x143cb5,
 };
 }
 let _0x4be8da = Tl(_0x38f1c5.originalMeta),
 _0x181773 = {
 name: _0x38f1c5.name,
 schemaVersion: 1,
 tableOrder: _0x38f1c5.sheetOrder,
 tables: _0xb6d716,
 ...((_0x41b5f3 = _0x38f1c5.resources) != null && _0x41b5f3.length
 ? { resources: _0x38f1c5.resources }
 : undefined),
 createdAt: 0,
 updatedAt: 0,
 ..._0x4be8da,
 id: _0x5a3344.unitID || _0x38f1c5.unitID,
 rev: _0x5a3344.rev || _0x38f1c5.rev,
 };
 return (
 _0x4235b8 == null ||
 _0x4235b8.debug(
 "[transformSnapshotToBaseData]",
 "parsed " + Object.keys(_0xb6d716).length + " base tables",
 ),
 _0x181773
 );
}
function ol(_0xd7df09) {
 let _0x3881ed = _0xd7df09.doc;
 if (_0x3881ed == null)
 throw Error(
 "transformSnapshotToDocumentData(): snapshot.doc is undefined.",
 );
 let {
 unitID: _0x5b84c2,
 rev: _0x1d8ebc,
 name: _0x3f4d6a,
 originalMeta: _0x179d69,
 resources: _0x3c98f2 = [],
 } = _0x3881ed,
 _0x510a9d = zc(_0x179d69);
 return {
 locale: e.LocaleType["EN_US"],
 ..._0x510a9d,
 documentStyle: _0x510a9d.documentStyle ?? {},
 id: _0x5b84c2,
 rev: _0x1d8ebc,
 title: _0x3f4d6a,
 resources: _0x3c98f2,
 };
}
async function sl(_0x164dce, _0x47c17e, _0x5aaaec, _0x4aa5ec, _0x5ebeb1) {
 let _0xc19ebe = {
 unitID: _0x47c17e.id,
 rev: _0x4aa5ec,
 creator: "",
 name: _0x47c17e.title ?? "",
 resources: _0x47c17e.resources || [],
 originalMeta: Mc(_0x47c17e),
 },
 _0x2401f5 = {
 unitID: _0x5aaaec,
 rev: _0xc19ebe.rev,
 type: e.UniverInstanceType["UNIVER_DOC"],
 workbook: undefined,
 doc: _0xc19ebe,
 slide: undefined,
 board: undefined,
 pdf: undefined,
 },
 _0x39b767 = await _0x5ebeb1.saveSnapshot(_0x164dce, {
 unitID: _0x5aaaec,
 type: e.UniverInstanceType["UNIVER_DOC"],
 snapshot: _0x2401f5,
 });
 if ((0, y.isError)(_0x39b767.error)) {
 var _0x2bfd9, _0x1efa7f;
 throw Error(
 "transformDocumentDataToSnapshot():\x20Failed\x20to\x20save\x20snapshot.\x0aErrorCode:\x20" +
 ((_0x2bfd9 = _0x39b767.error) == null ? undefined : _0x2bfd9.code) +
 ":" +
 ((_0x1efa7f = _0x39b767.error) == null ? undefined : _0x1efa7f.message),
 );
 }
 return { snapshot: _0x2401f5 };
}
async function cl(_0x250ae9, _0x2ddc9f, _0x3aceaa, _0x15a2a3, _0x129557) {
 let _0x3c193d = {
 unitID: _0x3aceaa,
 rev: _0x15a2a3,
 creator: "",
 name: _0x2ddc9f.name,
 resources: [],
 originalMeta: Nc(_0x2ddc9f),
 },
 _0x2e5d19 = {
 unitID: _0x3aceaa,
 rev: _0x3c193d.rev,
 type: e.UniverInstanceType["UNIVER_SLIDE"],
 workbook: undefined,
 doc: undefined,
 slide: _0x3c193d,
 board: undefined,
 pdf: undefined,
 },
 _0x5878c9 = await _0x129557.saveSnapshot(
 {},
 {
 unitID: _0x3aceaa,
 type: e.UniverInstanceType["UNIVER_SLIDE"],
 snapshot: _0x2e5d19,
 },
 );
 if ((0, y.isError)(_0x5878c9.error)) {
 var _0x425abd, _0xb10673;
 throw Error(
 "transformSlideDataToSnapshot(): Failed to save snapshot.\nErrorCode: " +
 ((_0x425abd = _0x5878c9.error) == null ? undefined : _0x425abd.code) +
 ":" +
 ((_0xb10673 = _0x5878c9.error) == null ? undefined : _0xb10673.message),
 );
 }
 return { snapshot: _0x2e5d19 };
}
function ll(_0x3ce096) {
 let _0xa729be = _0x3ce096.slide ?? _0x3ce096.doc;
 if (_0xa729be == null)
 throw Error(
 "transformSnapshotToSlideData():\x20snapshot.slide\x20or\x20snapshot.doc\x20is\x20undefined.",
 );
 return {
 ...Bc(_0xa729be.originalMeta),
 id: _0xa729be.unitID,
 rev: _0x3ce096.rev,
 name: _0xa729be.name,
 };
}
async function ul(_0x2d4589, _0x229788, _0x56420e, _0x3ceeae, _0x5bdfa0) {
 let _0x5df572 = {
 unitID: _0x56420e,
 rev: _0x3ceeae,
 creator: "",
 name: _0x229788.name,
 resources: _0x229788.resources ?? [],
 originalMeta: Pc(_0x229788),
 },
 _0x3c78f4 = {
 unitID: _0x56420e,
 rev: _0x5df572.rev,
 type: e.UniverInstanceType["UNIVER_BOARD"],
 workbook: undefined,
 doc: undefined,
 slide: undefined,
 board: _0x5df572,
 pdf: undefined,
 },
 _0x3470c4 = await _0x5bdfa0.saveSnapshot(
 {},
 {
 unitID: _0x56420e,
 type: e.UniverInstanceType["UNIVER_BOARD"],
 snapshot: _0x3c78f4,
 },
 );
 if ((0, y.isError)(_0x3470c4.error)) {
 var _0x877ba, _0x293de0;
 throw Error(
 "transformBoardDataToSnapshot(): Failed to save snapshot.\nErrorCode: " +
 ((_0x877ba = _0x3470c4.error) == null ? undefined : _0x877ba.code) +
 ":" +
 ((_0x293de0 = _0x3470c4.error) == null ? undefined : _0x293de0.message),
 );
 }
 return { snapshot: _0x3c78f4 };
}
function dl(_0x1aa995) {
 let _0x177cc8 = _0x1aa995.board ?? _0x1aa995.slide ?? _0x1aa995.doc;
 if (_0x177cc8 == null)
 throw Error(
 "transformSnapshotToBoardData(): snapshot.board, snapshot.slide, or snapshot.doc is undefined.",
 );
 return {
 ...Vc(_0x177cc8.originalMeta),
 id: _0x177cc8.unitID,
 rev: _0x1aa995.rev,
 name: _0x177cc8.name,
 };
}
async function fl(_0x534ae7, _0x2a1086, _0x4ede16, _0x538370) {
 let _0x443315 = (0, s.normalizePdfUnitData)({
 ..._0x534ae7,
 id: _0x2a1086,
 rev: _0x4ede16,
 }),
 _0x6fd4bb = {
 unitID: _0x2a1086,
 rev: _0x4ede16,
 creator: "",
 name: _0x443315.name,
 sourcePdfFileId: _0x443315.sourceDocumentRef["assetId"],
 modelJsonFileId: X(_0x443315, "modelJsonFileId"),
 decodeManifestFileId: X(_0x443315, "decodeManifestFileId"),
 pdfModelSchema: _0x443315.schema,
 pdfModelSchemaVersion: _0x443315.schemaVersion,
 decoderKind: X(_0x443315, "decoderKind"),
 decoderVersion: X(_0x443315, "decoderVersion"),
 assets: hl(_0x443315),
 editorStateJsonFileId: X(_0x443315, "editorStateJsonFileId"),
 exportPatchJsonFileId: X(_0x443315, "exportPatchJsonFileId"),
 originalMeta: Fc(_0x443315),
 },
 _0x3374fa = {
 unitID: _0x2a1086,
 rev: _0x6fd4bb.rev,
 type: e.UniverInstanceType["UNIVER_PDF"],
 workbook: undefined,
 doc: undefined,
 slide: undefined,
 board: undefined,
 pdf: _0x6fd4bb,
 },
 _0x1efb86 = await _0x538370.saveSnapshot(
 {},
 {
 unitID: _0x2a1086,
 type: e.UniverInstanceType["UNIVER_PDF"],
 snapshot: _0x3374fa,
 },
 );
 if ((0, y.isError)(_0x1efb86.error)) {
 var _0x1e1c2f, _0x31275d;
 throw Error(
 "transformPdfDataToSnapshot(): Failed to save snapshot.\nErrorCode: " +
 ((_0x1e1c2f = _0x1efb86.error) == null ? undefined : _0x1e1c2f.code) +
 ":" +
 ((_0x31275d = _0x1efb86.error) == null ? undefined : _0x31275d.message),
 );
 }
 return { snapshot: _0x3374fa };
}
function pl(_0x5dbe41) {
 let _0x52ed97 = _0x5dbe41.pdf;
 if (_0x52ed97 == null)
 throw Error(
 "transformSnapshotToPdfData():\x20snapshot.pdf\x20is\x20undefined.",
 );
 let _0xdf5593 = Hc(_0x52ed97.originalMeta);
 if (!ml(_0xdf5593))
 throw TypeError(
 "transformSnapshotToPdfData(): unsupported PDF Unit snapshot.",
 );
 let _0x2e4030 = _0xdf5593,
 _0x372b82 = vl(_0x2e4030, _0x52ed97),
 _0x286749 = yl(_0x2e4030, _0x52ed97),
 _0x5ceb63 = bl(_0x2e4030.documentShell, _0x372b82, _0x286749),
 _0x37deb9 =
 _0x2e4030.document ??
 (_0x5ceb63 ? (0, s.createPdfDocumentFromShell)(_0x5ceb63) : undefined);
 return (0, s.normalizePdfUnitData)({
 ..._0x2e4030,
 id: _0x52ed97.unitID,
 rev: _0x5dbe41.rev || _0x52ed97.rev,
 name: _0x52ed97.name,
 document: _0x37deb9,
 documentShell: _0x5ceb63,
 sourceDocumentRef: _0x372b82,
 resourceBindings: _0x286749,
 fragmentBindings: gl(_0x2e4030, _0x52ed97),
 metadata: Sl(_0x2e4030, _0x52ed97),
 });
}
function ml(_0x3e5933) {
 return (
 typeof _0x3e5933 == "object" &&
 !!_0x3e5933 &&
 !Array.isArray(_0x3e5933) &&
 _0x3e5933.schema === s.PDF_UNIT_SCHEMA &&
 ("document" in _0x3e5933 || "documentShell" in _0x3e5933)
 );
}
function X(_0x1a3a35, _0x16db1c) {
 var _0x15a769;
 let _0x13c7a5 =
 (_0x15a769 = _0x1a3a35.metadata) == null ? undefined : _0x15a769[_0x16db1c];
 return typeof _0x13c7a5 == "string" ? _0x13c7a5 : undefined;
}
function hl(_0x56902a) {
 let _0x5d7334 = [];
 return (
 Object.entries(_0x56902a.fragmentBindings ?? {}).forEach(
 ([_0xdef98e, _0x7a2457]) => {
 _0x5d7334.push({
 assetId: _0xdef98e,
 kind: _0x7a2457.kind,
 fileId: _0x7a2457.fileId,
 mimeType: _0x7a2457.mimeType ?? "application/json",
 size: _0x7a2457.byteLength ?? 0,
 });
 },
 ),
 Object.entries(_0x56902a.resourceBindings ?? {}).forEach(
 ([_0x2d9c00, _0x44626f]) => {
 _0x44626f.kind === s.PdfAssetStorageKind["UNIVERSER_RESOURCE"] &&
 (_0x2d9c00 !== _0x56902a.sourceDocumentRef["assetId"] ||
 _0x44626f.mimeType !== "application/pdf") &&
 _0x5d7334.push({
 assetId: _0x2d9c00,
 kind: _0x44626f.kind,
 fileId: _0x44626f.source,
 mimeType: _0x44626f.mimeType ?? "",
 size: _0x44626f.byteLength ?? 0,
 });
 },
 ),
 _0x5d7334.length > 0 ? _0x5d7334 : undefined
 );
}
function gl(_0x49b89e, _0x511bad) {
 var _0x4f87ba;
 let _0x1d7a6b = { ...(_0x49b89e.fragmentBindings ?? {}) };
 return (
 (_0x4f87ba = _0x511bad.assets) == null ||
 _0x4f87ba.forEach((_0x25e163) => {
 _l(_0x25e163.kind) &&
 (_0x1d7a6b[_0x25e163.assetId] = {
 kind: _0x25e163.kind,
 fileId: _0x25e163.fileId,
 mimeType: _0x25e163.mimeType || undefined,
 byteLength: xl(_0x25e163.size),
 });
 }),
 Object.keys(_0x1d7a6b).length > 0 ? _0x1d7a6b : undefined
 );
}
function _l(_0x4b61ec) {
 return Zc.includes(_0x4b61ec);
}
function vl(_0x1fbce5, _0x429666) {
 return {
 ..._0x1fbce5.sourceDocumentRef,
 ...(_0x429666.sourcePdfFileId
 ? { assetId: _0x429666.sourcePdfFileId }
 : {}),
 immutable: true,
 };
}
function yl(_0x340c12, _0x267d82) {
 var _0x5d5ae7;
 let _0x263342 = { ...(_0x340c12.resourceBindings ?? {}) };
 return (
 (_0x5d5ae7 = _0x267d82.assets) == null ||
 _0x5d5ae7.forEach((_0x4efcbd) => {
 _0x4efcbd.kind === s.PdfAssetStorageKind["UNIVERSER_RESOURCE"] &&
 (_0x263342[_0x4efcbd.assetId] = {
 kind: s.PdfAssetStorageKind["UNIVERSER_RESOURCE"],
 source: _0x4efcbd.fileId,
 imageSourceType: e.ImageSourceType["UUID"],
 mimeType: _0x4efcbd.mimeType || undefined,
 byteLength: xl(_0x4efcbd.size),
 });
 }),
 Object.keys(_0x263342).length > 0 ? _0x263342 : undefined
 );
}
function bl(_0x30aa82, _0x4897be, _0x5dfc77) {
 if (!_0x30aa82) return;
 let _0x3d0bf1 = Object.keys(_0x30aa82.sources),
 _0x1c0b88 =
 _0x4897be.sourceId ?? (_0x3d0bf1.length === 1 ? _0x3d0bf1[0] : undefined),
 _0x177632 = Object.fromEntries(
 Object.entries(_0x30aa82.sources).map(([_0x9d209d, _0x2c61c9]) => {
 let _0x4f487e =
 _0x9d209d === _0x1c0b88 && _0x4897be.assetId
 ? _0x4897be.assetId
 : _0x2c61c9.assetId;
 if (!_0x4f487e)
 throw Error(
 "PDF source " + _0x9d209d + " is missing its PDF file binding.",
 );
 if (_0x9d209d !== _0x1c0b88 || _0x4f487e !== _0x4897be.assetId) {
 let _0x1a0d19 = _0x5dfc77 == null ? undefined : _0x5dfc77[_0x4f487e];
 if (
 (_0x1a0d19 == null ? undefined : _0x1a0d19.kind) !==
 s.PdfAssetStorageKind["UNIVERSER_RESOURCE"] ||
 _0x1a0d19.mimeType !== "application/pdf"
 )
 throw Error(
 "PDF\x20source\x20" +
 _0x9d209d +
 " has an invalid PDF file binding " +
 _0x4f487e +
 ".",
 );
 }
 return [_0x9d209d, { ..._0x2c61c9, assetId: _0x4f487e }];
 }),
 );
 return { ..._0x30aa82, sources: _0x177632 };
}
function xl(_0x400531) {
 let _0x1e0fc2 = typeof _0x400531 == "string" ? Number(_0x400531) : _0x400531;
 return typeof _0x1e0fc2 == "number" &&
 Number.isFinite(_0x1e0fc2) &&
 _0x1e0fc2 >= 0
 ? _0x1e0fc2
 : undefined;
}
function Sl(_0x2f975b, _0x2f87e2) {
 let _0x23ecfb = { ...(_0x2f975b.metadata ?? {}) };
 return (
 [
 ["modelJsonFileId", _0x2f87e2.modelJsonFileId],
 ["decodeManifestFileId", _0x2f87e2.decodeManifestFileId],
 ["decoderKind", _0x2f87e2.decoderKind],
 ["decoderVersion", _0x2f87e2.decoderVersion],
 ["editorStateJsonFileId", _0x2f87e2.editorStateJsonFileId],
 ["exportPatchJsonFileId", _0x2f87e2.exportPatchJsonFileId],
 ].forEach(([_0x39a082, _0x129a8d]) => {
 _0x129a8d && (_0x23ecfb[_0x39a082] = _0x129a8d);
 }),
 Object.keys(_0x23ecfb).length > 0 ? _0x23ecfb : undefined
 );
}
function Cl(_0x2b4996) {
 let _0xd1c9d8 = ["id", "rev", "name", "tableOrder", "tables"],
 _0x59e18f = {};
 return (
 Object.keys(_0x2b4996).forEach((_0x901769) => {
 _0xd1c9d8.includes(_0x901769) ||
 (_0x59e18f[_0x901769] = e.Tools["deepClone"](_0x2b4996[_0x901769]));
 }),
 q.encode(JSON.stringify(_0x59e18f))
 );
}
function wl(_0x242d13) {
 let _0xd9b1ef = ["id", "name", "cellData"],
 _0x2237ff = {};
 return (
 Object.keys(_0x242d13).forEach((_0x470e72) => {
 _0xd9b1ef.includes(_0x470e72) ||
 (_0x2237ff[_0x470e72] = e.Tools["deepClone"](_0x242d13[_0x470e72]));
 }),
 q.encode(JSON.stringify(_0x2237ff))
 );
}
function Tl(_0x1d0ae2) {
 return Dl(_0x1d0ae2);
}
function El(_0x81fccc) {
 return Dl(_0x81fccc);
}
function Dl(_0x9103d4) {
 return JSON.parse(
 typeof _0x9103d4 == "string" ? Y(_0x9103d4) : J.decode(_0x9103d4),
 );
}
function Ol(_0x5bc3be) {
 if (!_0x5bc3be) return 0;
 let _0x8cb4b6 = 0;
 for (let _0x22d7b4 in _0x5bc3be)
 Object.prototype["hasOwnProperty"].call(_0x5bc3be, _0x22d7b4) &&
 _0x8cb4b6++;
 return _0x8cb4b6;
}
function kl(_0x949def) {
 if (!_0x949def) return 0;
 let _0x518389 = 0;
 for (let _0x31e29a in _0x949def) {
 if (!Object.prototype["hasOwnProperty"].call(_0x949def, _0x31e29a))
 continue;
 let _0x5ddc4b = Number(_0x31e29a);
 Number.isFinite(_0x5ddc4b) &&
 (_0x518389 = Math.max(_0x518389, _0x5ddc4b + 1));
 }
 return _0x518389;
}
function Al(_0x45bf33) {
 var _0x441c49;
 return Math.max(
 ((_0x441c49 = _0x45bf33.recordOrder) == null
 ? undefined
 : _0x441c49.length) ?? Ol(_0x45bf33.records),
 kl(_0x45bf33.rowId),
 kl(_0x45bf33.cellData),
 );
}
function jl(_0x5648da) {
 var _0x472a1c;
 let _0x283b3b = 0,
 _0x49b718 = _0x5648da.cellData;
 if (_0x49b718) {
 for (let _0x261e77 in _0x49b718)
 Object.prototype["hasOwnProperty"].call(_0x49b718, _0x261e77) &&
 (_0x283b3b = Math.max(_0x283b3b, kl(_0x49b718[_0x261e77])));
 }
 return Math.max(
 ((_0x472a1c = _0x5648da.fieldOrder) == null
 ? undefined
 : _0x472a1c.length) ?? Ol(_0x5648da.fields),
 kl(_0x5648da.colId),
 _0x283b3b,
 );
}
async function Ml(_0x5a142d, _0x173bf0) {
 let _0x44abec = _0x5a142d.workbook;
 if (!_0x44abec) throw Error("Workbook metadata is not available");
 let _0x5011a4 = [],
 _0x4474bc = [];
 return (
 Object.entries(_0x44abec.blockMeta).forEach(([_0x4c2fd5, _0x55e67c]) => {
 let _0x3c87b6 = _0x55e67c.blocks["map"](async (_0x96a574) => {
 let _0x511d2c = {
 unitID: _0x44abec.unitID,
 type: _0x5a142d.type,
 blockID: _0x96a574,
 },
 { block: _0x32e419 } = await _0x173bf0.getSheetBlock({}, _0x511d2c);
 if (_0x32e419) _0x5011a4.push(_0x32e419);
 else throw Error("Block\x20not\x20found");
 });
 _0x4474bc.push(..._0x3c87b6);
 }),
 await Promise.all(_0x4474bc),
 _0x5011a4
 );
}
function Nl(_0x67c07e) {
 return !!_0x67c07e && (!!_0x67c07e.doc || !!_0x67c07e.slide);
}
function Pl(_0x592b3b) {
 return (
 !!_0x592b3b && (!!_0x592b3b.board || !!_0x592b3b.slide || !!_0x592b3b.doc)
 );
}
function Fl(_0x39ea18) {
 return !!_0x39ea18 && !!_0x39ea18.pdf;
}
const Il = (0, e.createIdentifier)("univer.snapshot-server-service");
let Z = class {
 constructor(
 _0x147714,
 _0x363fe2,
 _0x9ffcfc,
 _0x28bdbf,
 _0x5d575c,
 _0x244c92,
 _0x5f254b,
 _0x1e2f60,
 ) {
 ((this._revisionService = _0x147714),
 (this._univerInstanceService = _0x363fe2),
 (this._snapshotServerService = _0x9ffcfc),
 (this._commandService = _0x28bdbf),
 (this._logService = _0x5d575c),
 (this._compressMutationService = _0x244c92),
 (this._resourceManagerService = _0x5f254b),
 (this._snapshotLoadingService = _0x1e2f60),
 C(this, "_serverUnits", new WeakSet()));
 }
 isUnitLoadedFromServer(_0x5782fd) {
 return this._serverUnits["has"](_0x5782fd);
 }
 async loadSheet(
 _0x4528b3,
 _0x16a88c,
 _0x4612ac = { metadata: { "Trace-Id": (0, b.v4)() } },
 _0x27f201 = {},
 ) {
 let _0x30200b = this._univerInstanceService["getUnit"](
 _0x4528b3,
 e.UniverInstanceType["UNIVER_SHEET"],
 );
 if (_0x30200b) return _0x30200b;
 this._snapshotLoadingService["begin"](
 _0x4528b3,
 e.UniverInstanceType["UNIVER_SHEET"],
 );
 let _0x19bd9a = async (_0x4c319f) => {
 try {
 return await _0x4c319f();
 } catch (_0x34ba05) {
 var _0x34531c;
 let _0x502784 =
 _0x34ba05 instanceof Error ? _0x34ba05 : Error(String(_0x34ba05));
 throw (
 ((_0x34531c =
 this._snapshotLoadingService["getState"](_0x4528b3)) == null
 ? undefined
 : _0x34531c.stage) !== "error" &&
 this._snapshotLoadingService["fail"](_0x4528b3, _0x502784),
 _0x502784
 );
 }
 },
 {
 snapshot: _0x54cc61,
 changesets: _0x5b3ae6,
 error: _0x3ea19a,
 } = await _0x19bd9a(() =>
 this._snapshotServerService["getUnitOnRev"](_0x4612ac, {
 unitID: _0x4528b3,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 revision: _0x16a88c,
 }),
 );
 if (
 (0, y.isError)(_0x3ea19a) ||
 !(_0x54cc61 != null && _0x54cc61.workbook)
 ) {
 let _0x588fb7 = Error(
 "[SnapshotService]: request snapshot error! The original error is: " +
 (_0x3ea19a == null ? undefined : _0x3ea19a.message),
 );
 throw (
 this._snapshotLoadingService["fail"](_0x4528b3, _0x588fb7),
 _0x588fb7
 );
 }
 let _0x5a3780 = (_0x5b3ae6 == null ? undefined : _0x5b3ae6.length) ?? 0;
 if (_0x16a88c !== 0 && _0x54cc61.rev + _0x5a3780 !== _0x16a88c) {
 let _0x39456e = Error("[SnapshotService]: wrong rev from the server!");
 throw (
 this._snapshotLoadingService["fail"](_0x4528b3, _0x39456e),
 _0x39456e
 );
 }
 let _0x1a6446 = _0x54cc61.workbook,
 _0x4b6264 =
 (_0x27f201.initialSubUnitId &&
 _0x1a6446.sheets[_0x27f201.initialSubUnitId]
 ? _0x27f201.initialSubUnitId
 : undefined) ??
 _0x1a6446.sheetOrder["find"]((_0x1ef1de) => {
 let _0x4d091c = _0x1a6446.sheets[_0x1ef1de];
 return _0x4d091c ? !Ic(_0x4d091c.originalMeta).hidden : false;
 }) ??
 _0x1a6446.sheetOrder[0];
 if (!_0x4b6264) {
 let _0x2a091e = Error("[SnapshotService]: workbook has no worksheet.");
 throw (
 this._snapshotLoadingService["fail"](_0x4528b3, _0x2a091e),
 _0x2a091e
 );
 }
 let _0x1a15ae = this._getPrioritizedSheetBlockIds(_0x54cc61, _0x4b6264);
 this._snapshotLoadingService["setSnapshot"](_0x4528b3, _0x1a15ae.length);
 let _0x4f77ec = _0x1a15ae.map((_0x10e193) => async () => {
 let _0x4e86c3 = await this._snapshotServerService[
 "getDeserializedSheetBlock"
 ](_0x4612ac, {
 unitID: _0x4528b3,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 blockID: _0x10e193,
 });
 if ((0, y.isError)(_0x4e86c3.error) || !_0x4e86c3.block) {
 var _0x29a608;
 throw Error(
 "[SnapshotService]:\x20failed\x20to\x20get\x20sheet\x20block\x20" +
 _0x10e193 +
 ".\x20" +
 (((_0x29a608 = _0x4e86c3.error) == null
 ? undefined
 : _0x29a608.message) ?? ""),
 );
 }
 return { ..._0x4e86c3.block, data: Rc(_0x4e86c3.block["data"]) };
 }),
 _0x12b491 = [];
 try {
 await Jc(
 "GetBlocks",
 () =>
 qc({
 tasks: _0x4f77ec,
 handleTaskResult: (_0xdba6e4) => {
 (_0x12b491.push(_0xdba6e4),
 this._snapshotLoadingService["addBlock"](_0x4528b3));
 },
 onError: (_0x140aae) => {
 this._logService["error"](
 "[GetBlocks]",
 "Failed to get sheet block: " + _0x140aae,
 );
 },
 }),
 this._logService,
 10000,
 "total " + _0x4f77ec.length + " blocks",
 );
 } catch (_0x39be1a) {
 let _0x51ceb5 =
 _0x39be1a instanceof Error ? _0x39be1a : Error(String(_0x39be1a));
 throw (
 this._snapshotLoadingService["fail"](_0x4528b3, _0x51ceb5),
 _0x51ceb5
 );
 }
 let _0x4a4806 = await _0x19bd9a(() =>
 Jc(
 "transformSnapshotToWorkbookData",
 () => il(_0x54cc61, _0x12b491, _0x4612ac, this._logService),
 this._logService,
 ),
 ),
 _0x2572cf = await _0x19bd9a(() =>
 this._univerInstanceService["createUnit"](
 e.UniverInstanceType["UNIVER_SHEET"],
 _0x4a4806,
 _0x27f201.createOptions,
 ),
 );
 this._serverUnits["add"](_0x2572cf);
 let _0x1f0b1c = _0x2572cf.getSheetBySheetId(_0x4b6264);
 return (
 _0x1f0b1c && _0x2572cf.setActiveSheet(_0x1f0b1c),
 await _0x19bd9a(() =>
 Yc(
 "ApplyCompressedChangesetsSync",
 () => {
 let _0x5a48cc = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService["interceptor"].getInterceptPoints()
 .COMPRESS_MUTATION_APPLY,
 );
 _0x5b3ae6 == null ||
 _0x5b3ae6.forEach((_0xe776ae) => {
 (_0xe776ae.mutations === null ||
 _0xe776ae.mutations === undefined) &&
 (_0xe776ae.mutations = []);
 let _0x1c1f95 = _0xe776ae.mutations["map"]((_0x1cd418) => ({
 id: _0x1cd418.id,
 params: JSON.parse(_0x1cd418.data),
 }));
 (({
 ..._0xe776ae,
 mutations: _0x5a48cc(_0x1c1f95, null) || _0x1c1f95,
 })["mutations"].forEach((_0x292b80) =>
 this._commandService["syncExecuteCommand"](
 _0x292b80.id,
 _0x292b80.params,
 { fromChangeset: true },
 ),
 ),
 this._revisionService["incrementRevOfUnit"](_0x4528b3));
 });
 },
 this._logService,
 ),
 ),
 this._snapshotLoadingService["complete"](_0x4528b3),
 _0x2572cf
 );
 }
 _getPrioritizedSheetBlockIds(_0x137de0, _0x264d6e) {
 let _0xb258d7 = _0x137de0.workbook;
 if (!(_0xb258d7 != null && _0xb258d7.blockMeta)) return [];
 let _0xe6ad71 = _0x264d6e
 ? [
 _0x264d6e,
 ..._0xb258d7.sheetOrder["filter"](
 (_0x77b678) => _0x77b678 !== _0x264d6e,
 ),
 ]
 : _0xb258d7.sheetOrder,
 _0x5cbfb6 = [];
 return (
 _0xe6ad71.forEach((_0x3854c3) => {
 var _0x174036;
 (_0x174036 = _0xb258d7.blockMeta[_0x3854c3]) == null ||
 (_0x174036 = _0x174036.blocks) == null ||
 _0x174036.forEach((_0x314ff0) => _0x5cbfb6.push(_0x314ff0));
 }),
 _0x5cbfb6
 );
 }
 _getCompressedChangesetMutations(_0x29624f) {
 let _0xa7989 = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService["interceptor"].getInterceptPoints()
 .COMPRESS_MUTATION_APPLY,
 );
 return (
 (_0x29624f == null
 ? undefined
 : _0x29624f.map((_0x3cbb02) => {
 let _0x947978 = (_0x3cbb02.mutations ?? []).map((_0x170d51) => ({
 id: _0x170d51.id,
 params: JSON.parse(_0x170d51.data),
 }));
 return _0xa7989(_0x947978, null) || _0x947978;
 })) ?? []
 );
 }
 async loadBase(
 _0x48887e,
 _0x11ebc3,
 _0x37a8f3 = { metadata: { "Trace-Id": (0, b.v4)() } },
 _0x4839bb = {},
 ) {
 let _0x1c156c = this._univerInstanceService["getUnit"](
 _0x48887e,
 e.UniverInstanceType["UNIVER_BASE"],
 );
 if (_0x1c156c) return _0x1c156c;
 let {
 snapshot: _0x17667e,
 changesets: _0xc4947d,
 error: _0x5cd589,
 } = await this._snapshotServerService["getUnitOnRev"](_0x37a8f3, {
 unitID: _0x48887e,
 type: e.UniverInstanceType["UNIVER_BASE"],
 revision: _0x11ebc3,
 });
 if ((0, y.isError)(_0x5cd589) || !_0x17667e || !_0x17667e.workbook) {
 let _0x477b77 = { ..._0x5cd589 };
 throw (
 (_0x477b77.message =
 "[SnapshotService]: request base snapshot error! The original error is: " +
 (_0x5cd589 == null ? undefined : _0x5cd589.message)),
 _0x477b77
 );
 }
 let _0x4fe900 = (_0xc4947d == null ? undefined : _0xc4947d.length) ?? 0;
 if (_0x11ebc3 !== 0 && _0x17667e.rev + _0x4fe900 !== _0x11ebc3)
 throw Error("[SnapshotService]: wrong base rev from the server!");
 let _0x3af530 = (
 _0x17667e.workbook["blockMeta"]
 ? Object.values(_0x17667e.workbook["blockMeta"]).flatMap(
 (_0x2cb894) => _0x2cb894.blocks ?? [],
 )
 : []
 ).map(
 (_0x532288) => () =>
 this._snapshotServerService["getDeserializedSheetBlock"](_0x37a8f3, {
 unitID: _0x48887e,
 type: e.UniverInstanceType["UNIVER_BASE"],
 blockID: _0x532288,
 }),
 ),
 _0x5c3160 = [];
 try {
 await qc({
 tasks: _0x3af530,
 handleTaskResult: (_0x1e6a5a) => {
 _0x1e6a5a.block && _0x5c3160.push(_0x1e6a5a.block);
 },
 onError: (_0x48740f) => {
 this._logService["error"](
 "[GetBaseBlocks]",
 "Failed to get base block: " + _0x48740f,
 );
 },
 });
 } catch (_0x1a0f9a) {
 throw Error(
 "[SnapshotService]: failed to get base blocks. " +
 JSON.stringify(_0x1a0f9a),
 );
 }
 let _0x4ad017 = await al(_0x17667e, _0x5c3160, _0x37a8f3, this._logService),
 _0x767873 = this._getCompressedChangesetMutations(_0xc4947d),
 _0x379759 = t.BaseJson1OpApplier["tryMaterializeSnapshot"](
 _0x4ad017,
 _0x767873.flat(),
 ),
 _0x5a9809 = this._univerInstanceService["createUnit"](
 e.UniverInstanceType["UNIVER_BASE"],
 _0x379759 ?? _0x4ad017,
 _0x4839bb.createOptions,
 );
 return (
 this._serverUnits["add"](_0x5a9809),
 _0x767873.forEach((_0x3924e7) => {
 (_0x379759 === null &&
 _0x3924e7.forEach((_0x3003b4) =>
 this._commandService["syncExecuteCommand"](
 _0x3003b4.id,
 _0x3003b4.params,
 { fromChangeset: true },
 ),
 ),
 this._revisionService["incrementRevOfUnit"](_0x48887e));
 }),
 _0x5a9809
 );
 }
 async loadDoc(
 _0x1237dc,
 _0x5d49d2,
 _0x888ef9 = { metadata: { "Trace-Id": (0, b.v4)() } },
 _0x45c461 = {},
 ) {
 let {
 snapshot: _0x229fbe,
 changesets: _0x5e4e96,
 error: _0x17b43a,
 } = await this._snapshotServerService["getUnitOnRev"](_0x888ef9, {
 unitID: _0x1237dc,
 type: e.UniverInstanceType["UNIVER_DOC"],
 revision: _0x5d49d2,
 });
 if ((0, y.isError)(_0x17b43a) || !_0x229fbe || !_0x229fbe.doc) {
 let _0x567a3b = { ..._0x17b43a };
 throw (
 (_0x567a3b.message =
 "[SnapshotService]:\x20request\x20snapshot\x20error!"),
 _0x567a3b
 );
 }
 let _0x2c4f7c = (_0x5e4e96 == null ? undefined : _0x5e4e96.length) ?? 0;
 if (_0x5d49d2 !== 0 && _0x229fbe.rev + _0x2c4f7c !== _0x5d49d2)
 throw Error("[SnapshotService]: wrong rev from the server!");
 let _0xffa65c = ol(_0x229fbe),
 _0x494ffa = this._univerInstanceService["createUnit"](
 e.UniverInstanceType["UNIVER_DOC"],
 _0xffa65c,
 _0x45c461.createOptions,
 );
 return (
 this._serverUnits["add"](_0x494ffa),
 _0x5e4e96 == null ||
 _0x5e4e96.forEach((_0x3e2811) => {
 ((_0x3e2811.mutations === null ||
 _0x3e2811.mutations === undefined) &&
 (_0x3e2811.mutations = []),
 _0x3e2811.mutations["map"]((_0x1c9f74) => ({
 id: _0x1c9f74.id,
 params: JSON.parse(_0x1c9f74.data),
 })).forEach((_0x12eb48) =>
 this._commandService["syncExecuteCommand"](
 _0x12eb48.id,
 _0x12eb48.params,
 { fromChangeset: true },
 ),
 ),
 this._revisionService["incrementRevOfUnit"](_0x1237dc));
 }),
 _0x494ffa
 );
 }
 async loadSlide(
 _0x28af73,
 _0x3a9d7d = 0,
 _0x299d4e = { metadata: { "Trace-Id": (0, b.v4)() } },
 _0x5b5fc2 = {},
 ) {
 let {
 snapshot: _0x3cf7db,
 changesets: _0xe956fd,
 error: _0x26a3d9,
 } = await this._snapshotServerService["getUnitOnRev"](_0x299d4e, {
 unitID: _0x28af73,
 type: e.UniverInstanceType["UNIVER_SLIDE"],
 revision: _0x3a9d7d,
 });
 if ((0, y.isError)(_0x26a3d9) || !_0x3cf7db || !Nl(_0x3cf7db)) {
 let _0x4d6f99 = { ..._0x26a3d9 };
 throw (
 (_0x4d6f99.message =
 "[SnapshotService]: slide request snapshot error!"),
 _0x4d6f99
 );
 }
 let _0xc90e3b = (_0xe956fd == null ? undefined : _0xe956fd.length) ?? 0;
 if (_0x3a9d7d !== 0 && _0x3cf7db.rev + _0xc90e3b !== _0x3a9d7d)
 throw Error("[SnapshotService]: wrong rev from the server!");
 let _0x274d24 = ll(_0x3cf7db),
 _0x63d3d2 = this._univerInstanceService["createUnit"](
 e.UniverInstanceType["UNIVER_SLIDE"],
 _0x274d24,
 _0x5b5fc2.createOptions,
 );
 return (
 this._serverUnits["add"](_0x63d3d2),
 _0xe956fd == null ||
 _0xe956fd.forEach((_0x2ffe80) => {
 ((_0x2ffe80.mutations === null ||
 _0x2ffe80.mutations === undefined) &&
 (_0x2ffe80.mutations = []),
 _0x2ffe80.mutations["map"]((_0x551fd4) => ({
 id: _0x551fd4.id,
 params: JSON.parse(_0x551fd4.data),
 })).forEach((_0x5c37fe) =>
 this._commandService["syncExecuteCommand"](
 _0x5c37fe.id,
 _0x5c37fe.params,
 { fromChangeset: true },
 ),
 ),
 this._revisionService["incrementRevOfUnit"](_0x28af73));
 }),
 _0x63d3d2
 );
 }
 async loadBoard(
 _0x3d8683,
 _0x10ab26 = 0,
 _0x5a0c41 = { metadata: { "Trace-Id": (0, b.v4)() } },
 _0x2e2033 = {},
 ) {
 let {
 snapshot: _0x49d056,
 changesets: _0x3d95c4,
 error: _0x1127be,
 } = await this._snapshotServerService["getUnitOnRev"](_0x5a0c41, {
 unitID: _0x3d8683,
 type: e.UniverInstanceType["UNIVER_BOARD"],
 revision: _0x10ab26,
 });
 if ((0, y.isError)(_0x1127be) || !_0x49d056 || !Pl(_0x49d056)) {
 let _0x285b47 = { ..._0x1127be };
 throw (
 (_0x285b47.message =
 "[SnapshotService]: board request snapshot error!"),
 _0x285b47
 );
 }
 let _0x137b79 = (_0x3d95c4 == null ? undefined : _0x3d95c4.length) ?? 0;
 if (_0x10ab26 !== 0 && _0x49d056.rev + _0x137b79 !== _0x10ab26)
 throw Error(
 "[SnapshotService]:\x20wrong\x20rev\x20from\x20the\x20server!",
 );
 let _0x5226b0 = dl(_0x49d056),
 _0x1e1fbe = this._univerInstanceService["createUnit"](
 e.UniverInstanceType["UNIVER_BOARD"],
 _0x5226b0,
 _0x2e2033.createOptions,
 );
 return (
 this._serverUnits["add"](_0x1e1fbe),
 _0x3d95c4 == null ||
 _0x3d95c4.forEach((_0xa1ae65) => {
 ((_0xa1ae65.mutations === null ||
 _0xa1ae65.mutations === undefined) &&
 (_0xa1ae65.mutations = []),
 _0xa1ae65.mutations["map"]((_0x336e2a) => ({
 id: _0x336e2a.id,
 params: JSON.parse(_0x336e2a.data),
 })).forEach((_0x3639b5) =>
 this._commandService["syncExecuteCommand"](
 _0x3639b5.id,
 _0x3639b5.params,
 { fromChangeset: true },
 ),
 ),
 this._revisionService["incrementRevOfUnit"](_0x3d8683));
 }),
 _0x1e1fbe
 );
 }
 async loadPdf(
 _0x129f38,
 _0xce44 = 0,
 _0x5685b9 = { metadata: { "Trace-Id": (0, b.v4)() } },
 _0x3657dd = {},
 ) {
 let _0x524ed2 = this._univerInstanceService["getUnit"](
 _0x129f38,
 e.UniverInstanceType["UNIVER_PDF"],
 );
 if (_0x524ed2) return _0x524ed2;
 let {
 snapshot: _0x34bd2a,
 changesets: _0x5e8fee,
 error: _0x577955,
 } = await this._snapshotServerService["getUnitOnRev"](_0x5685b9, {
 unitID: _0x129f38,
 type: e.UniverInstanceType["UNIVER_PDF"],
 revision: _0xce44,
 });
 if ((0, y.isError)(_0x577955) || !_0x34bd2a || !Fl(_0x34bd2a)) {
 let _0x7040e4 = { ..._0x577955 };
 throw (
 (_0x7040e4.message =
 "[SnapshotService]:\x20pdf\x20request\x20snapshot\x20error!"),
 _0x7040e4
 );
 }
 let _0x39dce1 = (_0x5e8fee == null ? undefined : _0x5e8fee.length) ?? 0;
 if (_0xce44 !== 0 && _0x34bd2a.rev + _0x39dce1 !== _0xce44)
 throw Error("[SnapshotService]: wrong pdf rev from the server!");
 let _0x379c30 = pl(_0x34bd2a),
 _0x34df63 = this._univerInstanceService["createUnit"](
 e.UniverInstanceType["UNIVER_PDF"],
 _0x379c30,
 _0x3657dd.createOptions,
 );
 return (
 this._serverUnits["add"](_0x34df63),
 _0x5e8fee == null ||
 _0x5e8fee.forEach((_0x1a3ef2) => {
 ((_0x1a3ef2.mutations === null ||
 _0x1a3ef2.mutations === undefined) &&
 (_0x1a3ef2.mutations = []),
 _0x1a3ef2.mutations["map"]((_0x3b7ad3) => ({
 id: _0x3b7ad3.id,
 params: JSON.parse(_0x3b7ad3.data),
 })).forEach((_0x663019) =>
 this._commandService["syncExecuteCommand"](
 _0x663019.id,
 _0x663019.params,
 { fromChangeset: true },
 ),
 ),
 this._revisionService["incrementRevOfUnit"](_0x129f38));
 }),
 _0x34df63
 );
 }
 saveSheet(_0x1e8d46, _0x244c3f) {
 let _0x871ea8 = { ..._0x244c3f.getSnapshot() };
 return (
 _0x244c3f.getSheets().forEach((_0x41da6e) => {
 _0x871ea8.sheets[_0x41da6e.getSheetId()] = e.Tools["deepClone"](
 _0x41da6e.getSnapshot(),
 );
 }),
 (_0x871ea8.resources = this._resourceManagerService["getResources"](
 _0x244c3f.getUnitId(),
 e.UniverInstanceType["UNIVER_SHEET"],
 )),
 _0x871ea8
 );
 }
 saveBase(_0x22da85, _0x55977e) {
 let _0x52d972 = e.Tools["deepClone"](_0x55977e.getSnapshot()),
 _0x482a50 = this._resourceManagerService["getResources"](
 _0x55977e.getUnitId(),
 e.UniverInstanceType["UNIVER_BASE"],
 );
 return ((_0x52d972.resources = e.Tools["deepClone"](_0x482a50)), _0x52d972);
 }
 saveDoc(_0x66368e, _0x2fe704) {
 let _0x2693ae = { ..._0x2fe704.getSnapshot() };
 return (
 (_0x2693ae.resources = this._resourceManagerService["getResources"](
 _0x2fe704.getUnitId(),
 e.UniverInstanceType["UNIVER_DOC"],
 )),
 _0x2693ae
 );
 }
 async saveSlide(_0x285867, _0x9cd12a, _0x354b1e) {
 let _0x307ed4 = this._resourceManagerService["getResources"](
 _0x285867,
 e.UniverInstanceType["UNIVER_SLIDE"],
 ),
 _0x2dcd10 = { ..._0x9cd12a, resources: _0x307ed4 };
 return cl(
 _0x2dcd10.resources,
 _0x2dcd10,
 _0x285867,
 _0x354b1e,
 this._snapshotServerService,
 );
 }
 async saveBoard(_0x6d6953, _0x9310f3, _0x8d8435) {
 let _0x54e987 = this._resourceManagerService["getResources"](
 _0x6d6953,
 e.UniverInstanceType["UNIVER_BOARD"],
 ),
 _0x405a20 = { ..._0x9310f3, resources: _0x54e987 };
 return ul(
 _0x405a20.resources,
 _0x405a20,
 _0x6d6953,
 _0x8d8435,
 this._snapshotServerService,
 );
 }
 async savePdf(_0x5999b8, _0x10be14, _0x132c42) {
 return fl(_0x10be14, _0x5999b8, _0x132c42, this._snapshotServerService);
 }
};
Z = T(
 [
 w(0, (0, e.Inject)(Dc)),
 w(1, e.IUniverInstanceService),
 w(2, Il),
 w(3, e.ICommandService),
 w(4, e.ILogService),
 w(5, (0, e.Inject)(wc)),
 w(6, (0, e.Inject)(e.IResourceManagerService)),
 w(7, (0, e.Inject)(kc)),
 ],
 Z,
);
let Q = class extends e.Plug in {
 constructor(_0xe09a29 = hc, _0x561903, _0x4519b5) {
 (super(),
 (this._config = _0xe09a29),
 (this._injector = _0x561903),
 (this._configService = _0x4519b5));
 let { ..._0x445a5a } = (0, e.merge)({}, hc, this._config);
 this._configService["setConfig"]("collaboration.config", _0x445a5a);
 }
 onStarting() {
 ((0, e.registerDependencies)(this._injector, [
 [Dc],
 [gc],
 [xe],
 [ze],
 [ks],
 [He],
 [D],
 [oc],
 [Z],
 [kc],
 [E, { useClass: me }],
 [wc],
 ]),
 (0, e.touchDependencies)(this._injector, [
 [xe],
 [ze],
 [He],
 [D],
 [gc],
 [ks],
 [oc],
 ]));
 }
};
(C(Q, "pluginName", "UNIVER_COLLABORATION_PLUGIN"),
 C(Q, "packageName", pc),
 C(Q, "version", mc),
 (Q = T(
 [
 (0, e.DependentOn)(ee.UniverLicensePlugin),
 w(1, (0, e.Inject)(e.Injector)),
 w(2, e.IConfigService),
 ],
 Q,
 )));
let Ll = class {
 constructor(_0x4bbb57, _0xa2dd95, _0x9336ac) {
 ((this._snapshotServerService = _0x4bbb57),
 (this._snapshotService = _0xa2dd95),
 (this._logService = _0x9336ac));
 }
 async saveSheet(_0x5a3109, _0x18f94a, _0x41fc38, _0x107d58, _0x43621d) {
 return nl(
 _0x5a3109,
 _0x43621d || this._snapshotService["saveSheet"](_0x5a3109, _0x107d58),
 _0x18f94a,
 _0x41fc38,
 this._snapshotServerService,
 this._logService,
 );
 }
 async updateSheet(_0x32c641, _0x189fa3, _0x50fc08, _0x1a547e) {
 return tl(
 _0x32c641,
 _0x1a547e || this._snapshotService["saveSheet"](_0x32c641, _0x50fc08),
 _0x189fa3,
 this._snapshotServerService,
 );
 }
 async getSheet(_0x466806, _0x269e96, _0x4eb602, _0x3a6753) {
 return el(
 _0x466806,
 this._snapshotService["saveSheet"](_0x466806, _0x3a6753),
 _0x269e96,
 _0x4eb602,
 this._snapshotServerService,
 this._logService,
 );
 }
 async getBase(_0x511100, _0x3b8d33, _0xac6ed0, _0x5dd907) {
 return $c(
 _0x511100,
 this._snapshotService["saveBase"](_0x511100, _0x5dd907),
 _0x3b8d33,
 _0xac6ed0,
 this._snapshotServerService,
 this._logService,
 );
 }
 async getDoc(_0x39b346, _0x42c56c, _0x402481, _0x409764) {
 return Qc(
 _0x39b346,
 this._snapshotService["saveDoc"](_0x39b346, _0x409764),
 _0x42c56c,
 _0x402481,
 );
 }
 async saveDoc(_0x15c7a9, _0x4233d2, _0x5b460a, _0x41e81f, _0x345078) {
 return sl(
 _0x15c7a9,
 _0x345078 || this._snapshotService["saveDoc"](_0x15c7a9, _0x41e81f),
 _0x4233d2,
 _0x5b460a,
 this._snapshotServerService,
 );
 }
 async saveBase(_0x88e612, _0x77bb1, _0x5d2b56, _0x36632e, _0x4ccfa4) {
 return rl(
 _0x88e612,
 _0x4ccfa4 || this._snapshotService["saveBase"](_0x88e612, _0x36632e),
 _0x77bb1,
 _0x5d2b56,
 this._snapshotServerService,
 this._logService,
 );
 }
 async saveSlide(_0x138c22, _0x425927, _0x1c7af4) {
 return this._snapshotService["saveSlide"](_0x138c22, _0x425927, _0x1c7af4);
 }
 async saveBoard(_0x45dafa, _0xf20eef, _0x5e1509) {
 return this._snapshotService["saveBoard"](_0x45dafa, _0xf20eef, _0x5e1509);
 }
 async savePdf(_0x261736, _0x3561cf, _0x4ae382) {
 return this._snapshotService["savePdf"](_0x261736, _0x3561cf, _0x4ae382);
 }
};
Ll = T(
 [w(0, Il), w(1, (0, e.Inject)(Z)), w(2, (0, e.Inject)(e.ILogService))],
 Ll,
);
function Rl(_0x2ef7c9) {
 let _0x579888 = [];
 return typeof _0x2ef7c9.dataStream == "string"
 ? (Ul(_0x2ef7c9, _0x579888),
 Gl(_0x2ef7c9, _0x579888),
 Wl(_0x2ef7c9, _0x579888),
 Kl(_0x2ef7c9, _0x579888),
 ql(_0x2ef7c9, _0x579888),
 { ok: _0x579888.length === 0, errors: _0x579888 })
 : { ok: false, errors: ["dataStream must be a string."] };
}
function zl(_0x339af2) {
 let _0x12766c = [];
 Hl(_0x339af2.body, "body", _0x12766c);
 for (let [_0x2b0aaa, _0x22ae6e] of Object.entries(_0x339af2.headers ?? {}))
 Hl(_0x22ae6e.body, "header " + _0x2b0aaa, _0x12766c);
 for (let [_0x40a8c5, _0x2c7ee6] of Object.entries(_0x339af2.footers ?? {}))
 Hl(_0x2c7ee6.body, "footer\x20" + _0x40a8c5, _0x12766c);
 return (
 Bl(_0x339af2, _0x12766c),
 { ok: _0x12766c.length === 0, errors: _0x12766c }
 );
}
function Bl(_0x3bebbb, _0x24f351) {
 let _0x46596c = [
 { body: _0x3bebbb.body, label: "body" },
 ...Object.entries(_0x3bebbb.headers ?? {}).map(
 ([_0x2531ac, _0x107a25]) => ({
 body: _0x107a25.body,
 label: "header\x20" + _0x2531ac,
 }),
 ),
 ...Object.entries(_0x3bebbb.footers ?? {}).map(
 ([_0xecf94c, _0x2cd5b3]) => ({
 body: _0x2cd5b3.body,
 label: "footer " + _0xecf94c,
 }),
 ),
 ];
 for (let { body: _0x6d6cd8, label: _0x20ce94 } of _0x46596c)
 if (_0x6d6cd8)
 for (let _0x2106b0 of _0x6d6cd8.tables ?? []) {
 var _0x183373;
 let _0xd0cdd3 =
 (_0x183373 = _0x3bebbb.tableSource) == null
 ? undefined
 : _0x183373[_0x2106b0.tableId];
 if (!_0xd0cdd3) {
 _0x24f351.push(
 _0x20ce94 +
 ": table " +
 _0x2106b0.tableId +
 " is missing tableSource.",
 );
 continue;
 }
 let _0x390dd0 = Vl(
 _0x6d6cd8.dataStream,
 (0, e.getTableRangeInterval)(_0x2106b0),
 );
 if (_0xd0cdd3.tableRows["length"] !== _0x390dd0.length) {
 _0x24f351.push(
 _0x20ce94 +
 ": table " +
 _0x2106b0.tableId +
 " tableSource row count " +
 _0xd0cdd3.tableRows["length"] +
 "\x20does\x20not\x20match\x20dataStream\x20row\x20count\x20" +
 _0x390dd0.length +
 ".",
 );
 continue;
 }
 _0x390dd0.forEach((_0x38ef43, _0x48f7a3) => {
 var _0x4a172c;
 let _0x4eebbd =
 ((_0x4a172c = _0xd0cdd3.tableRows[_0x48f7a3]) == null
 ? undefined
 : _0x4a172c.tableCells["length"]) ?? 0;
 _0x4eebbd !== _0x38ef43 &&
 _0x24f351.push(
 _0x20ce94 +
 ": table " +
 _0x2106b0.tableId +
 " row " +
 _0x48f7a3 +
 "\x20tableSource\x20cell\x20count\x20" +
 _0x4eebbd +
 " does not match dataStream cell count " +
 _0x38ef43 +
 ".",
 );
 });
 }
}
function Vl(_0x2641fd, _0x21b228) {
 let _0x5c0855 = [];
 for (
 let _0x57ac6d = _0x21b228.startOffset + 1;
 _0x57ac6d < _0x21b228.endOffset - 1;
 ) {
 let _0x44f726 = (0, e.getTableRowTokenInterval)(_0x2641fd, _0x57ac6d);
 if (!_0x44f726 || _0x44f726.endOffset > _0x21b228.endOffset) {
 _0x57ac6d++;
 continue;
 }
 let _0x549e16 = 0;
 for (
 let _0x2c249e = _0x44f726.startOffset + 1;
 _0x2c249e < _0x44f726.endOffset - 1;
 ) {
 let _0x2165cd = (0, e.getTableCellTokenInterval)(_0x2641fd, _0x2c249e);
 if (!_0x2165cd || _0x2165cd.endOffset > _0x44f726.endOffset) {
 _0x2c249e++;
 continue;
 }
 (_0x549e16++, (_0x2c249e = _0x2165cd.endOffset));
 }
 (_0x5c0855.push(_0x549e16), (_0x57ac6d = _0x44f726.endOffset));
 }
 return _0x5c0855;
}
function Hl(_0x311769, _0x288635, _0x591a1f) {
 if (!_0x311769) {
 _0x591a1f.push(_0x288635 + ": document body is missing.");
 return;
 }
 (_0x591a1f.push(
 ...(0, e.validateDocBodyStructure)(_0x311769).map(
 (_0x46498c) => _0x288635 + ":\x20" + _0x46498c.code,
 ),
 ),
 _0x591a1f.push(
 ...Rl(_0x311769).errors["map"](
 (_0x5b9b12) => _0x288635 + ":\x20" + _0x5b9b12,
 ),
 ));
}
function Ul(_0x597498, _0x58d314) {
 let { dataStream: _0x51b490, paragraphs: _0x490c70 = [] } = _0x597498,
 _0x4b5db6 = _0x51b490.length - 1,
 _0x5b91c6 = new Set();
 _0x490c70.forEach((_0x538862, _0x253931) => {
 let { paragraphId: _0x28a581, startIndex: _0x1482d8 } = _0x538862;
 if (
 (typeof _0x28a581 == "string"
 ? _0x28a581.startsWith(e.PARAGRAPH_ID_PREFIX)
 ? _0x5b91c6.has(_0x28a581)
 ? _0x58d314.push(
 "paragraphs[" +
 _0x253931 +
 '].paragraphId "' +
 _0x28a581 +
 '" is duplicated.',
 )
 : _0x5b91c6.add(_0x28a581)
 : _0x58d314.push(
 "paragraphs[" +
 _0x253931 +
 '].paragraphId "' +
 _0x28a581 +
 "\x22\x20must\x20start\x20with\x20\x22" +
 e.PARAGRAPH_ID_PREFIX +
 "\x22.",
 )
 : _0x58d314.push(
 "paragraphs[" + _0x253931 + "].paragraphId is required.",
 ),
 !Number.isInteger(_0x1482d8))
 ) {
 _0x58d314.push(
 "paragraphs[" +
 _0x253931 +
 "].startIndex\x20must\x20be\x20an\x20integer.",
 );
 return;
 }
 if (_0x1482d8 < 0) {
 _0x58d314.push(
 "paragraphs[" +
 _0x253931 +
 "].startIndex " +
 _0x1482d8 +
 " must be greater than or equal to 0.",
 );
 return;
 }
 if (_0x1482d8 > _0x4b5db6) {
 _0x58d314.push(
 "paragraphs[" +
 _0x253931 +
 "].startIndex\x20" +
 _0x1482d8 +
 "\x20is\x20out\x20of\x20dataStream\x20bounds\x200.." +
 _0x4b5db6 +
 ".",
 );
 return;
 }
 _0x51b490[_0x1482d8] !== "\x0d" &&
 _0x58d314.push(
 "paragraphs[" +
 _0x253931 +
 "].startIndex " +
 _0x1482d8 +
 ' must point at "\\r".',
 );
 });
}
function Wl(_0x19a161, _0x31e218) {
 let { dataStream: _0x2a3f90, blockRanges: _0x322b0d = [] } = _0x19a161,
 _0x3b36c5 = _0x2a3f90.length - 1;
 _0x322b0d.forEach((_0x311d94, _0x5c0568) => {
 let { startIndex: _0x1c7827, endIndex: _0x84644d } = _0x311d94,
 _0x31727d = $(
 _0x1c7827,
 _0x3b36c5,
 "blockRanges[" + _0x5c0568 + "].startIndex",
 _0x31e218,
 ),
 _0x107f68 = $(
 _0x84644d,
 _0x3b36c5,
 "blockRanges[" + _0x5c0568 + "].endIndex",
 _0x31e218,
 );
 (_0x31727d &&
 _0x2a3f90[_0x1c7827] !== e.DataStreamTreeTokenType["BLOCK_START"] &&
 _0x31e218.push(
 "blockRanges[" +
 _0x5c0568 +
 "].startIndex\x20" +
 _0x1c7827 +
 " must point at a block start marker.",
 ),
 _0x107f68 &&
 _0x2a3f90[_0x84644d] !== e.DataStreamTreeTokenType["BLOCK_END"] &&
 _0x31e218.push(
 "blockRanges[" +
 _0x5c0568 +
 "].endIndex " +
 _0x84644d +
 " must point at a block end marker.",
 ),
 Number.isInteger(_0x1c7827) &&
 Number.isInteger(_0x84644d) &&
 _0x84644d < _0x1c7827 &&
 _0x31e218.push(
 "blockRanges[" +
 _0x5c0568 +
 "].endIndex " +
 _0x84644d +
 "\x20must\x20be\x20greater\x20than\x20or\x20equal\x20to\x20startIndex\x20" +
 _0x1c7827 +
 ".",
 ));
 });
}
function Gl(_0x361936, _0x26a32c) {
 let { dataStream: _0x1e99fb, sectionBreaks: _0x5b18fc = [] } = _0x361936,
 _0x2fab48 = _0x1e99fb.length - 1;
 _0x5b18fc.forEach((_0x5d64e9, _0x351522) => {
 let { startIndex: _0x443fc1 } = _0x5d64e9;
 $(
 _0x443fc1,
 _0x2fab48,
 "sectionBreaks[" + _0x351522 + "].startIndex",
 _0x26a32c,
 ) &&
 _0x1e99fb[_0x443fc1] !== e.DataStreamTreeTokenType["SECTION_BREAK"] &&
 _0x26a32c.push(
 "sectionBreaks[" +
 _0x351522 +
 "].startIndex " +
 _0x443fc1 +
 "\x20must\x20point\x20at\x20\x22\x5cn\x22.",
 );
 });
}
function Kl(_0x486967, _0x32def3) {
 let { dataStream: _0x2bb384, tables: _0x433ae6 = [] } = _0x486967,
 _0x46437b = _0x2bb384.length - 1;
 _0x433ae6.forEach((_0x333770, _0x466fe2) => {
 let { startIndex: _0x11bd0e, endIndex: _0x2b065d } = _0x333770,
 _0x4c5708 = $(
 _0x11bd0e,
 _0x46437b,
 "tables[" + _0x466fe2 + "].startIndex",
 _0x32def3,
 ),
 _0x1f1d6a = Yl(
 _0x2b065d,
 _0x2bb384.length,
 "tables[" + _0x466fe2 + "].endIndex",
 _0x32def3,
 );
 if (
 (_0x4c5708 &&
 _0x2bb384[_0x11bd0e] !== e.DataStreamTreeTokenType["TABLE_START"] &&
 _0x32def3.push(
 "tables[" +
 _0x466fe2 +
 "].startIndex\x20" +
 _0x11bd0e +
 " must point at a table start marker.",
 ),
 _0x1f1d6a &&
 _0x2bb384[_0x2b065d - 1] !== e.DataStreamTreeTokenType["TABLE_END"] &&
 _0x32def3.push(
 "tables[" +
 _0x466fe2 +
 "].endIndex\x20" +
 _0x2b065d +
 " must be the exclusive boundary immediately after a table end marker.",
 ),
 Number.isInteger(_0x11bd0e) &&
 Number.isInteger(_0x2b065d) &&
 _0x2b065d <= _0x11bd0e)
 ) {
 _0x32def3.push(
 "tables[" +
 _0x466fe2 +
 "].endIndex " +
 _0x2b065d +
 " must be greater than startIndex " +
 _0x11bd0e +
 ".",
 );
 return;
 }
 !_0x4c5708 ||
 !_0x1f1d6a ||
 _0x2bb384[_0x11bd0e] !== e.DataStreamTreeTokenType["TABLE_START"] ||
 Jl(_0x2bb384, _0x11bd0e, _0x2b065d, _0x466fe2, _0x32def3);
 });
}
function ql(_0x1e2fba, _0x1be377) {
 let { dataStream: _0x1f5124, customBlocks: _0x22cc14 = [] } = _0x1e2fba,
 _0x1a9dc4 = _0x1f5124.length - 1;
 _0x22cc14.forEach((_0x13af4a, _0x43480d) => {
 let { startIndex: _0xfeb0fd } = _0x13af4a;
 $(
 _0xfeb0fd,
 _0x1a9dc4,
 "customBlocks[" + _0x43480d + "].startIndex",
 _0x1be377,
 ) &&
 _0x1f5124[_0xfeb0fd] !== e.DataStreamTreeTokenType["CUSTOM_BLOCK"] &&
 _0x1be377.push(
 "customBlocks[" +
 _0x43480d +
 "].startIndex " +
 _0xfeb0fd +
 " must point at a custom block marker.",
 );
 });
}
function Jl(_0x3b2565, _0x1bd911, _0x39d023, _0x12eceb, _0x58026f) {
 let _0x39acce = false,
 _0x8da716 = false,
 _0x24fd22 = 0,
 _0x25d64d = 0;
 for (let _0x4134fb = _0x1bd911 + 1; _0x4134fb < _0x39d023 - 1; _0x4134fb++)
 switch (_0x3b2565[_0x4134fb]) {
 case e.DataStreamTreeTokenType["TABLE_START"]:
 _0x58026f.push(
 "tables[" +
 _0x12eceb +
 "] has a nested table start marker at " +
 _0x4134fb +
 ".",
 );
 break;
 case e.DataStreamTreeTokenType["TABLE_END"]:
 _0x58026f.push(
 "tables[" +
 _0x12eceb +
 "]\x20has\x20an\x20early\x20table\x20end\x20marker\x20at\x20" +
 _0x4134fb +
 ".",
 );
 break;
 case e.DataStreamTreeTokenType["TABLE_ROW_START"]:
 (_0x39acce &&
 _0x58026f.push(
 "tables[" +
 _0x12eceb +
 "] has a row start marker before the previous row ended at " +
 _0x4134fb +
 ".",
 ),
 (_0x39acce = true),
 _0x24fd22++);
 break;
 case e.DataStreamTreeTokenType["TABLE_ROW_END"]:
 (_0x39acce ||
 _0x58026f.push(
 "tables[" +
 _0x12eceb +
 "]\x20has\x20a\x20row\x20end\x20marker\x20without\x20a\x20row\x20start\x20marker\x20at\x20" +
 _0x4134fb +
 ".",
 ),
 _0x8da716 &&
 _0x58026f.push(
 "tables[" +
 _0x12eceb +
 "] has a row end marker before the current cell ended at " +
 _0x4134fb +
 ".",
 ),
 (_0x39acce = false));
 break;
 case e.DataStreamTreeTokenType["TABLE_CELL_START"]:
 (_0x39acce ||
 _0x58026f.push(
 "tables[" +
 _0x12eceb +
 "] has a cell start marker outside a row at " +
 _0x4134fb +
 ".",
 ),
 _0x8da716 &&
 _0x58026f.push(
 "tables[" +
 _0x12eceb +
 "]\x20has\x20a\x20cell\x20start\x20marker\x20before\x20the\x20previous\x20cell\x20ended\x20at\x20" +
 _0x4134fb +
 ".",
 ),
 (_0x8da716 = true),
 _0x25d64d++);
 break;
 case e.DataStreamTreeTokenType["TABLE_CELL_END"]:
 (_0x8da716 ||
 _0x58026f.push(
 "tables[" +
 _0x12eceb +
 "]\x20has\x20a\x20cell\x20end\x20marker\x20without\x20a\x20cell\x20start\x20marker\x20at\x20" +
 _0x4134fb +
 ".",
 ),
 (_0x8da716 = false));
 break;
 }
 (_0x8da716 &&
 _0x58026f.push("tables[" + _0x12eceb + "] has an unclosed table cell."),
 _0x39acce &&
 _0x58026f.push("tables[" + _0x12eceb + "] has an unclosed table row."),
 _0x24fd22 === 0 &&
 _0x58026f.push(
 "tables[" + _0x12eceb + "] must contain at least one table row.",
 ),
 _0x25d64d === 0 &&
 _0x58026f.push(
 "tables[" +
 _0x12eceb +
 "]\x20must\x20contain\x20at\x20least\x20one\x20table\x20cell.",
 ));
}
function $(_0xd467e8, _0x145382, _0x57aa67, _0x4410d2) {
 return typeof _0xd467e8 != "number" || !Number.isInteger(_0xd467e8)
 ? (_0x4410d2.push(_0x57aa67 + " must be an integer."), false)
 : _0xd467e8 < 0
 ? (_0x4410d2.push(
 _0x57aa67 +
 "\x20" +
 _0xd467e8 +
 " must be greater than or equal to 0.",
 ),
 false)
 : _0xd467e8 > _0x145382
 ? (_0x4410d2.push(
 _0x57aa67 +
 "\x20" +
 _0xd467e8 +
 " is out of dataStream bounds 0.." +
 _0x145382 +
 ".",
 ),
 false)
 : true;
}
function Yl(_0x21c946, _0x39db2e, _0x3e81eb, _0x292b90) {
 return typeof _0x21c946 != "number" || !Number.isInteger(_0x21c946)
 ? (_0x292b90.push(_0x3e81eb + " must be an integer."), false)
 : _0x21c946 < 0
 ? (_0x292b90.push(
 _0x3e81eb +
 "\x20" +
 _0x21c946 +
 "\x20must\x20be\x20greater\x20than\x20or\x20equal\x20to\x200.",
 ),
 false)
 : _0x21c946 > _0x39db2e
 ? (_0x292b90.push(
 _0x3e81eb +
 "\x20" +
 _0x21c946 +
 "\x20is\x20out\x20of\x20dataStream\x20boundary\x20bounds\x200.." +
 _0x39db2e +
 ".",
 ),
 false)
 : true;
}
(Object.defineProperty(exports, "BaseTransformController", {
 enumerable: true,
 get: function () {
 return xe;
 },
}),
 Object.defineProperty(exports, "BoardTransformController", {
 enumerable: true,
 get: function () {
 return ze;
 },
 }),
 (exports.CollaborationEvent = fc),
 (exports.CompressMutationService = wc),
 (exports.CreateUnitMutation = ne),
 Object.defineProperty(exports, "DocTransformController", {
 enumerable: true,
 get: function () {
 return He;
 },
 }),
 (exports.EmptyMutationInfo = Ue),
 (exports.ISnapshotServerService = Il),
 (exports.ITransformService = E),
 Object.defineProperty(exports, "PdfTransformController", {
 enumerable: true,
 get: function () {
 return D;
 },
 }),
 (exports.RevertRevisionMutation = x),
 Object.defineProperty(exports, "RevisionService", {
 enumerable: true,
 get: function () {
 return Dc;
 },
 }),
 (exports.RichTextEditingMutationWithSelf = Be),
 (exports.SINGLE_HISTORY_MUTATIONS = Ec),
 (exports.SINGLE_SNAPSHOT_MUTATIONS = Tc),
 Object.defineProperty(exports, "SheetTransformController", {
 enumerable: true,
 get: function () {
 return ks;
 },
 }),
 Object.defineProperty(exports, "SlideTransformController", {
 enumerable: true,
 get: function () {
 return oc;
 },
 }),
 (exports.SnapshotLoadStage = Oc),
 (exports.SnapshotLoadingService = kc),
 Object.defineProperty(exports, "SnapshotSaveService", {
 enumerable: true,
 get: function () {
 return Ll;
 },
 }),
 Object.defineProperty(exports, "SnapshotService", {
 enumerable: true,
 get: function () {
 return Z;
 },
 }),
 Object.defineProperty(exports, "TransformService", {
 enumerable: true,
 get: function () {
 return me;
 },
 }),
 Object.defineProperty(exports, "UniverCollaborationPlugin", {
 enumerable: true,
 get: function () {
 return Q;
 },
 }),
 (exports.b64DecodeUnicode = Y),
 (exports.b64EncodeUnicode = Kc),
 (exports.getSheetBlocksFromSnapshot = Ml),
 (exports.isTransformChangesetsFailure = se),
 (exports.isTransformChangesetsSuccess = ce),
 (exports.isTransformMutationFailure = re),
 (exports.isTransformMutationsSuccess = oe),
 (exports.isTransformMutationsWithChangesetFailure = le),
 (exports.isTransformMutationsWithChangesetSuccess = ue),
 (exports.mapDocumentTypeToUniverInstanceType = Gc),
 (exports.measureSyncOperation = Yc),
 (exports.parseChangesetToProtocol = lc),
 (exports.parseMutationToProtocol = dc),
 (exports.parseProtocolChangeset = sc),
 (exports.parseProtocolCommand = cc),
 (exports.textDecoder = J),
 (exports.textEncoder = q),
 (exports.transformBaseDataToSnapshot = rl),
 (exports.transformBoardDataToSnapshot = ul),
 (exports.transformDocumentDataToSnapshot = sl),
 (exports.transformPdfDataToSnapshot = fl),
 (exports.transformSlideDataToSnapshot = cl),
 (exports.transformSnapshotToBaseData = al),
 (exports.transformSnapshotToBoardData = dl),
 (exports.transformSnapshotToDocumentData = ol),
 (exports.transformSnapshotToPdfData = pl),
 (exports.transformSnapshotToSlideData = ll),
 (exports.transformSnapshotToWorkbookData = il),
 (exports.transformWorkbookDataToSnapshot = nl),
 Object.defineProperty(exports, "uuidv4", {
 enumerable: true,
 get: function () {
 return b.v4;
 },
 }),
 (exports.validateDocBodyAfterApply = Rl),
 (exports.validateDocumentAfterApply = zl));
