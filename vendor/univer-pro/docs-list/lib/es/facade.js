import {
  DocsListDemoteCommand as _0x85475b,
  DocsListInsertCommand as _0x3ed4d6,
  DocsListPromoteCommand as _0x198dee,
  DocsListSelectCommand as _0x41534c,
  DocsListSelectionMode as _0x56f949,
  DocsListSetGlyphSymbolCommand as _0x192f5e,
  DocsListSetGlyphTypeCommand as _0x4c1ee9,
  DocsListSetPrefixSuffixCommand as _0x5ee5e3,
  DocsListSetStartNumberCommand as _0x45e517,
} from "@univerjs-pro/docs-list";
import {
  DataStreamTreeTokenType as _0xd64923,
  ICommandService as _0x44b401,
  ListGlyphType as _0x31c931,
  PRESET_LIST_TYPE as _0x103baa,
  PresetListType as _0x3bb41e,
  generateRandomId as _0x3bafbd,
  getParagraphContentStartOffset as _0x2e29ec,
  getParagraphContentStartOffsets as _0x45c8f4,
} from "@univerjs/core";
import { FEnum as _0x223125 } from "@univerjs/core/facade";
import {
  FDocument as _0x30469d,
  isParagraphFacade as _0x1dac19,
} from "@univerjs/docs/facade";
var b = class extends _0x223125 {
  get DocsListSelectionMode() {
    return _0x56f949;
  }
  get ListGlyphType() {
    return _0x31c931;
  }
};
_0x223125.extend(b);
function x(_0x1fe9dc) {
  let _0x2b3639 = _0x1fe9dc.body,
    _0xaf5cad = (_0x2b3639 == null ? undefined : _0x2b3639.paragraphs) ?? [],
    _0x38e0b6 = (_0x2b3639 == null ? undefined : _0x2b3639.dataStream) ?? "",
    _0x4cce40 = _0x2b3639 ? _0x45c8f4(_0x2b3639) : new Map();
  return _0xaf5cad
    .filter((_0x54b5bf) => !!_0x54b5bf.bullet)
    .map((_0x198012) => T(_0x1fe9dc, _0x38e0b6, _0x198012, _0x4cce40));
}
function S(_0x5303d0, _0x15f3da) {
  var _0x59ff7d = _0x22162f,
    _0x4cd0a3;
  return (
    ((_0x4cd0a3 = _0x5303d0[_0x59ff7d(317)]) == null
      ? undefined
      : _0x4cd0a3[_0x15f3da]) ?? _0x103baa[_0x15f3da]
  );
}
function C(_0x5ede2f, _0x3b9604) {
  var _0x2e8d67 = _0x22162f,
    _0x1978a0;
  let _0x5e0fee = _0x3b9604[_0x2e8d67(260)];
  if (_0x5e0fee)
    return (_0x1978a0 = S(_0x5ede2f, _0x5e0fee[_0x2e8d67(339)])) == null ||
      (_0x1978a0 = _0x1978a0[_0x2e8d67(266)]) == null
      ? undefined
      : _0x1978a0[_0x5e0fee[_0x2e8d67(266)]];
}
function w(_0x330b5b, _0x74125d) {
  let _0x315be0 = _0x330b5b.body,
    _0x2e5263 = (_0x315be0 == null ? undefined : _0x315be0.paragraphs) ?? [];
  if (!_0x315be0) return;
  let _0x422ca8 = _0x45c8f4(_0x315be0);
  return _0x2e5263.find(
    (_0x42efcd) =>
      (_0x422ca8.get(_0x42efcd.startIndex) ?? 0) <= _0x74125d &&
      _0x74125d <= _0x42efcd.startIndex,
  );
}
function T(_0x4ebdc2, _0x2398a0, _0xea44ef, _0x19780e) {
  let _0x1bc0d7 = _0xea44ef.bullet,
    _0x3ae8bc = C(_0x4ebdc2, _0xea44ef),
    _0x477f54 =
      _0x19780e.get(_0xea44ef.startIndex) ??
      (_0x4ebdc2.body ? _0x2e29ec(_0x4ebdc2.body, _0xea44ef) : 0);
  return {
    endOffset: _0xea44ef.startIndex,
    glyphFormat: _0x3ae8bc == null ? undefined : _0x3ae8bc.glyphFormat,
    glyphSymbol: _0x3ae8bc == null ? undefined : _0x3ae8bc.glyphSymbol,
    glyphType: _0x3ae8bc == null ? undefined : _0x3ae8bc.glyphType,
    listId: _0x1bc0d7.listId,
    listType: _0x1bc0d7.listType,
    nestingLevel: _0x1bc0d7.nestingLevel,
    ordered: !!(
      _0x3ae8bc &&
      _0x3ae8bc.glyphType !== _0x31c931.BULLET &&
      !_0x3ae8bc.glyphSymbol
    ),
    paragraphStartIndex: _0xea44ef.startIndex,
    startNumber: _0x3ae8bc == null ? undefined : _0x3ae8bc.startNumber,
    startOffset: _0x477f54,
    text: E(_0x2398a0.slice(_0x477f54, _0xea44ef.startIndex)),
  };
}
function E(_0x116d34) {
  return Array.from(_0x116d34)
    .filter((_0x57bc54) => _0x57bc54 !== _0xd64923.SECTION_BREAK)
    .join("");
}
function D(_0x2255dc) {
  "@babel/helpers - typeof";
  return (
    (D =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5cffd1) {
            return typeof _0x5cffd1;
          }
        : function (_0x2fe0e9) {
            return _0x2fe0e9 &&
              typeof Symbol == "function" &&
              _0x2fe0e9.constructor === Symbol &&
              _0x2fe0e9 !== Symbol.prototype
              ? "symbol"
              : typeof _0x2fe0e9;
          }),
    D(_0x2255dc)
  );
}
function O(_0x165160, _0x2b8e7b) {
  if (D(_0x165160) != "object" || !_0x165160) return _0x165160;
  var _0x59e924 = _0x165160[Symbol.toPrimitive];
  if (_0x59e924 !== undefined) {
    var _0x491e51 = _0x59e924.call(_0x165160, _0x2b8e7b || "default");
    if (D(_0x491e51) != "object") return _0x491e51;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x2b8e7b === "string" ? String : Number)(_0x165160);
}
function k(_0x35e536) {
  var _0x50a12c = _0x22162f,
    _0x201a14 = O(_0x35e536, _0x50a12c(328));
  return D(_0x201a14) == _0x50a12c(272) ? _0x201a14 : _0x201a14 + "";
}
function A(_0x268cef, _0x5267dd, _0x11e079) {
  return (
    (_0x5267dd = k(_0x5267dd)) in _0x268cef
      ? Object.defineProperty(_0x268cef, _0x5267dd, {
          value: _0x11e079,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x268cef[_0x5267dd] = _0x11e079),
    _0x268cef
  );
}
var j = class {
    constructor(_0x51fb24, _0x437d71, _0xe70d62 = "", _0x3ecb82) {
      ((this._document = _0x51fb24),
        (this._paragraphStartIndex = _0x437d71),
        (this._segmentId = _0xe70d62),
        (this._injector = _0x3ecb82),
        A(this, "_unitId", undefined),
        (this._unitId = this._document["getId"]()));
    }
    getParagraphStartIndex() {
      return this._paragraphStartIndex;
    }
    getSegmentId() {
      return this._segmentId;
    }
    describe() {
      return this._info();
    }
    getText() {
      var _0x8f3ee6 = _0x22162f,
        _0x5e8458;
      return (
        ((_0x5e8458 = this[_0x8f3ee6(262)]()) == null
          ? undefined
          : _0x5e8458[_0x8f3ee6(255)]) ?? ""
      );
    }
    isOrdered() {
      var _0xd440a0 = _0x22162f,
        _0x3141f5;
      return (
        ((_0x3141f5 = this[_0xd440a0(262)]()) == null
          ? undefined
          : _0x3141f5[_0xd440a0(338)]) ?? false
      );
    }
    isUnordered() {
      let _0x2e2663 = this._info();
      return _0x2e2663 ? !_0x2e2663.ordered : false;
    }
    select(_0x36f1d1 = _0x56f949.Item) {
      return this._injector["get"](_0x44b401).syncExecuteCommand(_0x41534c.id, {
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId,
        mode: _0x36f1d1,
      });
    }
    setGlyphType(_0x33d089, _0x4f23dd = {}) {
      return this._injector["get"](_0x44b401).syncExecuteCommand(_0x4c1ee9.id, {
        ..._0x4f23dd,
        glyphType: _0x33d089,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId,
      });
    }
    setGlyphSymbol(_0x59d611, _0x160d57 = {}) {
      return this._injector["get"](_0x44b401).syncExecuteCommand(_0x192f5e.id, {
        ..._0x160d57,
        symbol: _0x59d611,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId,
      });
    }
    setPrefixSuffix(_0x206e86, _0x53aa58, _0x4f3524 = {}) {
      return this._injector["get"](_0x44b401).syncExecuteCommand(_0x5ee5e3.id, {
        ..._0x4f3524,
        prefix: _0x206e86,
        suffix: _0x53aa58,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId,
      });
    }
    setStartNumber(_0x1dbc78, _0x14ef2e = {}) {
      return this._injector["get"](_0x44b401).syncExecuteCommand(_0x45e517.id, {
        ..._0x14ef2e,
        startNumber: _0x1dbc78,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId,
      });
    }
    continueNumbering() {
      return this.setStartNumber(1, { restartFromPrevious: true });
    }
    promote(_0x562e17 = {}) {
      return this._injector["get"](_0x44b401).syncExecuteCommand(_0x198dee.id, {
        ..._0x562e17,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId,
      });
    }
    demote(_0x107752 = {}) {
      return this._injector["get"](_0x44b401).syncExecuteCommand(_0x85475b.id, {
        ..._0x107752,
        paragraphStartIndex: this._paragraphStartIndex,
        segmentId: this._segmentId,
        unitId: this._unitId,
      });
    }
    _info() {
      return (
        x(
          this._document["getDocumentDataModel"](this._segmentId).getSnapshot(),
        ).find(
          (_0x294da2) =>
            _0x294da2.paragraphStartIndex === this._paragraphStartIndex,
        ) ?? null
      );
    }
  },
  M = class {
    constructor(_0x6a84da, _0x8ede39, _0x1176cc = "", _0x584925) {
      ((this._document = _0x6a84da),
        (this._listId = _0x8ede39),
        (this._segmentId = _0x1176cc),
        (this._injector = _0x584925));
    }
    getId() {
      return this._listId;
    }
    getSegmentId() {
      return this._segmentId;
    }
    getItems() {
      return this._getListItemInfos().map((_0x25c5a6) =>
        this._injector["createInstance"](
          j,
          this._document,
          _0x25c5a6.paragraphStartIndex,
          this._segmentId,
          this._injector,
        ),
      );
    }
    describe() {
      let _0x176b3f = this._getListItemInfos();
      return {
        itemCount: _0x176b3f.length,
        items: _0x176b3f,
        listId: this._listId,
      };
    }
    hasOrderedItems() {
      return this._getListItemInfos().some((_0x2de131) => _0x2de131.ordered);
    }
    hasUnorderedItems() {
      return this._getListItemInfos().some((_0x28d55b) => !_0x28d55b.ordered);
    }
    isMixed() {
      return this.hasOrderedItems() && this.hasUnorderedItems();
    }
    setGlyphType(_0x499bfb) {
      var _0x295091 = _0x22162f,
        _0xbc299c;
      return (
        ((_0xbc299c = this[_0x295091(313)]()) == null
          ? undefined
          : _0xbc299c[_0x295091(268)](_0x499bfb, {
              mode: _0x56f949[_0x295091(312)],
            })) ?? false
      );
    }
    setGlyphSymbol(_0x1c3f39) {
      var _0x3fad76 = _0x22162f,
        _0x907bd9;
      return (
        ((_0x907bd9 = this[_0x3fad76(313)]()) == null
          ? undefined
          : _0x907bd9[_0x3fad76(326)](_0x1c3f39, {
              mode: _0x56f949[_0x3fad76(312)],
            })) ?? false
      );
    }
    setPrefixSuffix(_0xea4177, _0x179e39) {
      var _0x203237 = _0x22162f,
        _0x3af3f0;
      return (
        ((_0x3af3f0 = this[_0x203237(313)]()) == null
          ? undefined
          : _0x3af3f0.setPrefixSuffix(_0xea4177, _0x179e39, {
              mode: _0x56f949[_0x203237(312)],
            })) ?? false
      );
    }
    setStartNumber(_0x4694a6) {
      var _0x5e9fdf = _0x22162f,
        _0x5c4c83;
      return (
        ((_0x5c4c83 = this[_0x5e9fdf(313)]()) == null
          ? undefined
          : _0x5c4c83.setStartNumber(_0x4694a6, {
              mode: _0x56f949[_0x5e9fdf(312)],
            })) ?? false
      );
    }
    promote() {
      var _0x2abd83 = _0x22162f,
        _0x514595;
      return (
        ((_0x514595 = this[_0x2abd83(313)]()) == null
          ? undefined
          : _0x514595.promote({ mode: _0x56f949[_0x2abd83(312)] })) ?? false
      );
    }
    demote() {
      var _0x3ea18a = _0x22162f,
        _0x40b3f7;
      return (
        ((_0x40b3f7 = this._firstItem()) == null
          ? undefined
          : _0x40b3f7[_0x3ea18a(325)]({ mode: _0x56f949[_0x3ea18a(312)] })) ??
        false
      );
    }
    _getListItemInfos() {
      return x(
        this._document["getDocumentDataModel"](this._segmentId).getSnapshot(),
      ).filter((_0x5f3c10) => _0x5f3c10.listId === this._listId);
    }
    _firstItem() {
      return this.getItems()[0] ?? null;
    }
  },
  N = class extends _0x30469d {
    getLists(_0x2989ab = "") {
      let _0x302170 = this.describeListItems(_0x2989ab);
      return Array.from(
        new Set(_0x302170.map((_0xeec93c) => _0xeec93c.listId)),
      ).map((_0x22c18c) => this._createFDocumentList(_0x22c18c, _0x2989ab));
    }
    getList(_0x41e62c, _0x36384a = "") {
      return this.describeListItems(_0x36384a).some(
        (_0x248f34) => _0x248f34.listId === _0x41e62c,
      )
        ? this._createFDocumentList(_0x41e62c, _0x36384a)
        : null;
    }
    getListItems(_0x136529 = "") {
      return this.describeListItems(_0x136529).map((_0x381f08) =>
        this._createFDocumentListItem(_0x381f08.paragraphStartIndex, _0x136529),
      );
    }
    getListItem(_0x47681c, _0x11ea7b = "") {
      return this.describeListItems(_0x11ea7b).some(
        (_0x1277d6) => _0x1277d6.paragraphStartIndex === _0x47681c,
      )
        ? this._createFDocumentListItem(_0x47681c, _0x11ea7b)
        : null;
    }
    getListItemAt(_0xfaeed6, _0x3e5327 = "") {
      let _0x427381 = w(
        this.getDocumentDataModel(_0x3e5327).getSnapshot(),
        _0xfaeed6,
      );
      return _0x427381 != null && _0x427381.bullet
        ? this._createFDocumentListItem(_0x427381.startIndex, _0x3e5327)
        : null;
    }
    findListItemByText(_0x4e17ac, _0x43fff6 = "") {
      return this.findListItems(_0x4e17ac, _0x43fff6)[0] ?? null;
    }
    findListItems(_0x19b205, _0x16ff8d = "") {
      let _0x350daa =
        typeof _0x19b205 == "string" ? { text: _0x19b205 } : _0x19b205;
      return this.getListItems(_0x16ff8d).filter((_0x13a563) => {
        let _0x161506 = _0x13a563.describe();
        return !(
          !_0x161506 ||
          (_0x350daa.listId && _0x161506.listId !== _0x350daa.listId) ||
          (_0x350daa.paragraphStartIndex != null &&
            _0x161506.paragraphStartIndex !== _0x350daa.paragraphStartIndex) ||
          (_0x350daa.nestingLevel != null &&
            _0x161506.nestingLevel !== _0x350daa.nestingLevel) ||
          (_0x350daa.text && !_0x161506.text["includes"](_0x350daa.text))
        );
      });
    }
    describeListItems(_0x1a8afd = "") {
      return x(this.getDocumentDataModel(_0x1a8afd).getSnapshot());
    }
    insertList(_0x3ee5e8 = {}, _0x1a47e3 = {}) {
      let _0x1006f8 = this._injector["get"](_0x44b401),
        _0x5b52f0 = _0x1dac19(_0x3ee5e8)
          ? {
              ..._0x1a47e3,
              ..._0x3ee5e8.getRange(),
              segmentId: _0x3ee5e8.getSegmentId(),
            }
          : _0x3ee5e8,
        _0x3b7a6e = _0x5b52f0.listId ?? _0x3bafbd(6),
        _0x79bdbc = _0x5b52f0.segmentId ?? "";
      return _0x1006f8.syncExecuteCommand(_0x3ed4d6.id, {
        ..._0x5b52f0,
        listType: _0x5b52f0.listType ?? _0x3bb41e.BULLET_LIST,
        listId: _0x3b7a6e,
        segmentId: _0x79bdbc,
        unitId: this.getId(),
      })
        ? this.getList(_0x3b7a6e, _0x79bdbc)
        : null;
    }
    setBullet(_0x2eb053, _0x502568 = {}) {
      return this.insertList(_0x2eb053, {
        ..._0x502568,
        listType: _0x3bb41e.BULLET_LIST,
      });
    }
    setOrderedList(_0x85ef93, _0x43236f = {}) {
      return this.insertList(_0x85ef93, {
        ..._0x43236f,
        listType: _0x3bb41e.ORDER_LIST,
      });
    }
    _createFDocumentList(_0x54390a, _0x30317b = "") {
      return this._injector["createInstance"](
        M,
        this,
        _0x54390a,
        _0x30317b,
        this._injector,
      );
    }
    _createFDocumentListItem(_0x2f14f5, _0x125727 = "") {
      return this._injector["createInstance"](
        j,
        this,
        _0x2f14f5,
        _0x125727,
        this._injector,
      );
    }
  };
_0x30469d.extend(N);
export { M as FDocumentList, j as FDocumentListItem };
