Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/boards-table"),
  n = require("@univerjs-pro/boards/facade"),
  r = require("@univerjs-pro/slides-table"),
  i = require("@univerjs/core"),
  a = require("@univerjs/core/facade");
var o = class {
    constructor(_0x2acbba, _0x8ea1a4, _0x2b3efc, _0x2cb26c, _0x2b5c10) {
      ((this["_board"] = _0x2acbba),
        (this["_pageId"] = _0x8ea1a4),
        (this["_elementId"] = _0x2b3efc),
        (this["_commandService"] = _0x2cb26c),
        (this["_resourceService"] = _0x2b5c10));
    }
    ["getId"]() {
      return this["_elementId"];
    }
    ["getTableId"]() {
      var _0x35489e;
      return (
        ((_0x35489e = this["_getElement"]()) == null
          ? void 0x0
          : _0x35489e["tableId"]) ?? null
      );
    }
    ["getData"]() {
      let _0x35975a = this["getTableId"]();
      return _0x35975a
        ? (this["_resourceService"]["getTable"](
            this["_board"]["getId"](),
            _0x35975a,
          ) ?? null)
        : null;
    }
    ["getStructure"]() {
      let _0x17feb0 = this["getData"]();
      return _0x17feb0
        ? {
            rowCount: _0x17feb0["rows"]["length"],
            columnCount: _0x17feb0["columns"]["length"],
            rowHeights: _0x17feb0["rows"]["map"](
              (_0x23150a) => _0x23150a["height"] ?? null,
            ),
            columnWidths: _0x17feb0["columns"]["map"](
              (_0x338aa2) => _0x338aa2["width"],
            ),
            mergedRanges: l(_0x17feb0),
          }
        : null;
    }
    ["getValues"]() {
      var _0x537c57;
      return (
        ((_0x537c57 = this["getData"]()) == null
          ? void 0x0
          : _0x537c57["rows"]["map"]((_0x484a9d) =>
              _0x484a9d["cells"]["map"]((_0x563cb5) =>
                c(_0x563cb5["textData"]),
              ),
            )) ?? []
      );
    }
    ["getCellInfo"](_0x47601d, _0x2959ef) {
      var _0x49d98d;
      if (
        !Number["isInteger"](_0x47601d) ||
        !Number["isInteger"](_0x2959ef) ||
        _0x47601d < 0x0 ||
        _0x2959ef < 0x0
      )
        return null;
      let _0x1b8c20 = this["getData"](),
        _0x47ab0b = this["getTableId"](),
        _0x59dbf2 =
          _0x1b8c20 == null ||
          (_0x49d98d = _0x1b8c20["rows"][_0x47601d]) == null
            ? void 0x0
            : _0x49d98d["cells"][_0x2959ef];
      if (!_0x1b8c20 || !_0x47ab0b || !_0x59dbf2) return null;
      let _0x3c7dc4 = (0x0, n["createBoardFacadeRichTextValue"])(
        _0x59dbf2["textData"] ?? p(_0x47ab0b, _0x47601d, _0x2959ef, ""),
      );
      if (!_0x3c7dc4) return null;
      let _0x551b00 =
        l(_0x1b8c20)["find"](
          (_0x3f0d79) =>
            _0x47601d >= _0x3f0d79["startRow"] &&
            _0x47601d <= _0x3f0d79["endRow"] &&
            _0x2959ef >= _0x3f0d79["startColumn"] &&
            _0x2959ef <= _0x3f0d79["endColumn"],
        ) ?? null;
      return {
        row: _0x47601d,
        column: _0x2959ef,
        text: c(_0x59dbf2["textData"]),
        richText: _0x3c7dc4,
        style: _0x59dbf2["style"]
          ? i["Tools"]["deepClone"](_0x59dbf2["style"])
          : null,
        mergeRange: _0x551b00 ? { ..._0x551b00 } : null,
        isMergeAnchor:
          !!_0x551b00 &&
          _0x551b00["startRow"] === _0x47601d &&
          _0x551b00["startColumn"] === _0x2959ef,
      };
    }
    ["getCellRichText"](_0x5dc363, _0x27fdb2) {
      var _0x43c123;
      if (
        !Number["isInteger"](_0x5dc363) ||
        !Number["isInteger"](_0x27fdb2) ||
        _0x5dc363 < 0x0 ||
        _0x27fdb2 < 0x0
      )
        return null;
      let _0x3a5572 = this["getTableId"](),
        _0x598b1c =
          (_0x43c123 = this["getData"]()) == null ||
          (_0x43c123 = _0x43c123["rows"][_0x5dc363]) == null
            ? void 0x0
            : _0x43c123["cells"][_0x27fdb2];
      return !_0x3a5572 || !_0x598b1c
        ? null
        : (0x0, n["createBoardFacadeRichTextValue"])(
            _0x598b1c["textData"] ?? p(_0x3a5572, _0x5dc363, _0x27fdb2, ""),
          );
    }
    ["getRichTextValues"](_0x5a2347) {
      var _0x5be938;
      let _0x2f7fe6 = this["getData"](),
        _0xd12427 = this["getTableId"]();
      if (!_0x2f7fe6 || !_0xd12427 || _0x2f7fe6["rows"]["length"] === 0x0)
        return [];
      let _0x4d3299 = _0x5a2347 ?? {
        startRow: 0x0,
        endRow: _0x2f7fe6["rows"]["length"] - 0x1,
        startColumn: 0x0,
        endColumn:
          (((_0x5be938 = _0x2f7fe6["rows"][0x0]) == null
            ? void 0x0
            : _0x5be938["cells"]["length"]) ?? 0x1) - 0x1,
      };
      if (!u(_0x2f7fe6, _0x4d3299)) return [];
      let _0x3c00eb = [];
      for (
        let _0x3f5e3f = _0x4d3299["startRow"];
        _0x3f5e3f <= _0x4d3299["endRow"];
        _0x3f5e3f++
      ) {
        let _0x5f580 = [];
        for (
          let _0x42c918 = _0x4d3299["startColumn"];
          _0x42c918 <= _0x4d3299["endColumn"];
          _0x42c918++
        ) {
          let _0x4002b4 = _0x2f7fe6["rows"][_0x3f5e3f]["cells"][_0x42c918],
            _0x5b6d75 = (0x0, n["createBoardFacadeRichTextValue"])(
              _0x4002b4["textData"] ?? p(_0xd12427, _0x3f5e3f, _0x42c918, ""),
            );
          if (!_0x5b6d75) return [];
          _0x5f580["push"](_0x5b6d75);
        }
        _0x3c00eb["push"](_0x5f580);
      }
      return _0x3c00eb;
    }
    ["getCellStyle"](_0x540398, _0x289fe1) {
      var _0x19e3d8;
      if (
        !Number[_0x53ebe7(0x1e6)](_0x540398) ||
        !Number[_0x53ebe7(0x1e6)](_0x289fe1) ||
        _0x540398 < 0x0 ||
        _0x289fe1 < 0x0
      )
        return null;
      let _0x2f03ab =
        (_0x19e3d8 = this[_0x53ebe7(0x1ab)]()) == null ||
        (_0x19e3d8 = _0x19e3d8[_0x53ebe7(0x19e)][_0x540398]) == null ||
        (_0x19e3d8 = _0x19e3d8[_0x53ebe7(0x1a3)][_0x289fe1]) == null
          ? void 0x0
          : _0x19e3d8[_0x53ebe7(0x186)];
      return _0x2f03ab
        ? i[_0x53ebe7(0x1ac)][_0x53ebe7(0x187)](_0x2f03ab)
        : null;
    }
    ["setValues"](_0x33f50a, _0x31b831 = 0x0, _0x267f14 = 0x0) {
      let _0x205d89 = this[_0x5eef70(0x1ab)](),
        _0xabd175 = this[_0x5eef70(0x1f4)]();
      if (
        !_0x205d89 ||
        !_0xabd175 ||
        _0x33f50a[_0x5eef70(0x1b9)] === 0x0 ||
        !Number[_0x5eef70(0x1e6)](_0x31b831) ||
        !Number[_0x5eef70(0x1e6)](_0x267f14) ||
        _0x31b831 < 0x0 ||
        _0x267f14 < 0x0
      )
        return !0x1;
      let _0x1390bf = i[_0x5eef70(0x1ac)]["deepClone"](
          _0x205d89[_0x5eef70(0x19e)],
        ),
        _0x2e206f = !0x1;
      for (
        let _0x10e32b = 0x0;
        _0x10e32b < _0x33f50a[_0x5eef70(0x1b9)];
        _0x10e32b++
      ) {
        let _0x384eef = _0x33f50a[_0x10e32b],
          _0x3886a3 = _0x1390bf[_0x31b831 + _0x10e32b];
        if (!_0x3886a3 || !_0x384eef) return !0x1;
        for (
          let _0x13be66 = 0x0;
          _0x13be66 < _0x384eef[_0x5eef70(0x1b9)];
          _0x13be66++
        ) {
          let _0x1348c0 = _0x3886a3[_0x5eef70(0x1a3)][_0x267f14 + _0x13be66],
            _0x1fbca7 = _0x384eef[_0x13be66];
          if (!_0x1348c0 || typeof _0x1fbca7 != "string") return !0x1;
          if (c(_0x1348c0[_0x5eef70(0x199)]) === _0x1fbca7) {
            if (!_0x1348c0[_0x5eef70(0x199)]) continue;
            let _0x22982f = m(
              _0xabd175,
              _0x31b831 + _0x10e32b,
              _0x267f14 + _0x13be66,
              _0x1348c0[_0x5eef70(0x199)],
            );
            if (
              i[_0x5eef70(0x1ac)][_0x5eef70(0x1b0)](
                _0x1348c0["textData"],
                _0x22982f,
              )
            )
              continue;
            ((_0x1348c0["textData"] = _0x22982f), (_0x2e206f = !0x0));
            continue;
          }
          ((_0x1348c0["textData"] = p(
            _0xabd175,
            _0x31b831 + _0x10e32b,
            _0x267f14 + _0x13be66,
            _0x1fbca7,
          )),
            (_0x2e206f = !0x0));
        }
      }
      return (
        !_0x2e206f ||
        this[_0x5eef70(0x1d2)][_0x5eef70(0x1dd)](
          t["UpdateBoardTableCommand"]["id"],
          {
            unitId: this["_board"][_0x5eef70(0x1e5)](),
            tableId: _0xabd175,
            patch: { rows: _0x1390bf },
          },
        )
      );
    }
    ["setRichTextValues"](_0x2ce43c, _0x452f95 = 0x0, _0x1608ec = 0x0) {
      let _0x4e2a50 = this[_0x5c3ddc(0x1ab)](),
        _0x2c5c35 = this[_0x5c3ddc(0x1f4)]();
      if (!_0x4e2a50 || !_0x2c5c35 || !d(_0x2ce43c, _0x452f95, _0x1608ec))
        return !0x1;
      let _0x4ca762 = f(_0x4e2a50, _0x2ce43c, _0x452f95, _0x1608ec);
      return _0x4ca762
        ? !_0x4ca762[_0x5c3ddc(0x18d)] ||
            this[_0x5c3ddc(0x1d2)][_0x5c3ddc(0x1dd)](
              t[_0x5c3ddc(0x190)]["id"],
              {
                unitId: this[_0x5c3ddc(0x1b2)][_0x5c3ddc(0x1e5)](),
                tableId: _0x2c5c35,
                patch: { rows: _0x4ca762[_0x5c3ddc(0x19e)] },
              },
            )
        : !0x1;
    }
    ["setCellText"](_0x27d901, _0x4fc999, _0x1c473a) {
      let _0x25f159 = this[_0x19bd87(0x1f4)]();
      return !_0x25f159 ||
        !Number[_0x19bd87(0x1e6)](_0x27d901) ||
        !Number["isInteger"](_0x4fc999) ||
        _0x27d901 < 0x0 ||
        _0x4fc999 < 0x0
        ? !0x1
        : this[_0x19bd87(0x1d2)][_0x19bd87(0x1dd)](t[_0x19bd87(0x17f)]["id"], {
            unitId: this["_board"]["getId"](),
            tableId: _0x25f159,
            row: _0x27d901,
            column: _0x4fc999,
            textData: p(_0x25f159, _0x27d901, _0x4fc999, _0x1c473a),
          });
    }
    ["setCellTextData"](_0x23feaf, _0x28c5e5, _0x41c5af) {
      let _0x539a05 = this[_0x3d611e(0x1f4)]();
      return !_0x539a05 ||
        !Number[_0x3d611e(0x1e6)](_0x23feaf) ||
        !Number[_0x3d611e(0x1e6)](_0x28c5e5) ||
        _0x23feaf < 0x0 ||
        _0x28c5e5 < 0x0
        ? !0x1
        : this[_0x3d611e(0x1d2)][_0x3d611e(0x1dd)](t[_0x3d611e(0x17f)]["id"], {
            unitId: this[_0x3d611e(0x1b2)][_0x3d611e(0x1e5)](),
            tableId: _0x539a05,
            row: _0x23feaf,
            column: _0x28c5e5,
            textData: _0x41c5af
              ? m(_0x539a05, _0x23feaf, _0x28c5e5, _0x41c5af)
              : null,
          });
    }
    ["setCellRichText"](_0x54d45f, _0x170018, _0x2673bc) {
      return this["setCellTextData"](
        _0x54d45f,
        _0x170018,
        i[_0x40a2c0(0x1ac)][_0x40a2c0(0x187)](_0x2673bc[_0x40a2c0(0x1ab)]()),
      );
    }
    ["setCellStyle"](_0x1049bc, _0x29e1fb) {
      let _0x36d182 = this[_0x103bdf(0x1f4)]();
      return (
        !!_0x36d182 &&
        this["_commandService"][_0x103bdf(0x1dd)](t[_0x103bdf(0x1b4)]["id"], {
          unitId: this[_0x103bdf(0x1b2)][_0x103bdf(0x1e5)](),
          tableId: _0x36d182,
          range: _0x1049bc,
          style: _0x29e1fb,
        })
      );
    }
    ["setBorderPreset"](_0x200f40, _0x56e8fb, _0x9c0d79) {
      let _0x546ca9 = this[_0x14c8d2(0x1f4)]();
      return (
        !!_0x546ca9 &&
        this[_0x14c8d2(0x1d2)][_0x14c8d2(0x1dd)](t[_0x14c8d2(0x1e2)]["id"], {
          unitId: this[_0x14c8d2(0x1b2)][_0x14c8d2(0x1e5)](),
          tableId: _0x546ca9,
          range: _0x200f40,
          preset: _0x56e8fb,
          border: _0x9c0d79,
        })
      );
    }
    ["insertRows"](_0x5c38f5, _0x5d9c3c = 0x1, _0x224c6b) {
      return this[_0x349970(0x1e8)](t[_0x349970(0x191)]["id"], {
        rowIndex: _0x5c38f5,
        count: _0x5d9c3c,
        height: _0x224c6b,
      });
    }
    ["insertColumns"](_0x52a290, _0x1b30be = 0x1, _0x3d22c2) {
      return this[_0x873eaa(0x1e8)](t["InsertBoardTableColumnsCommand"]["id"], {
        columnIndex: _0x52a290,
        count: _0x1b30be,
        width: _0x3d22c2,
      });
    }
    ["deleteRows"](_0x3a87b5, _0x39dd4c) {
      return this["_execute"]({
        commandId: t["DeleteBoardTableRowsCommand"]["id"],
        params: { startRow: _0x3a87b5, endRow: _0x39dd4c },
      });
    }
    ["deleteColumns"](_0x95e3fc, _0x449770) {
      return this[_0x6b24e2(0x1b5)]({
        commandId: t[_0x6b24e2(0x1ce)]["id"],
        params: { startColumn: _0x95e3fc, endColumn: _0x449770 },
      });
    }
    ["resizeRows"](_0x325a4f, _0x2f568e, _0x112fa2) {
      return this[_0x3ae2d8(0x1b5)]({
        commandId: t[_0x3ae2d8(0x1dc)]["id"],
        params: { startRow: _0x325a4f, endRow: _0x2f568e, height: _0x112fa2 },
      });
    }
    ["resizeColumns"](_0x6176b9, _0x59d3b2, _0x2c257) {
      return this["_execute"]({
        commandId: t["ResizeBoardTableColumnsCommand"]["id"],
        params: {
          startColumn: _0x6176b9,
          endColumn: _0x59d3b2,
          width: _0x2c257,
        },
      });
    }
    ["moveRows"](_0x5b495f, _0x24684e, _0x32cc9e, _0x89b45a) {
      return this["_execute"]({
        commandId: t["MoveBoardTableRowsCommand"]["id"],
        params: {
          startRow: _0x5b495f,
          endRow: _0x24684e,
          targetRow: _0x32cc9e,
          position: _0x89b45a,
        },
      });
    }
    ["moveColumns"](_0xd5c7c0, _0x4550fc, _0x4c80dc, _0x47d583) {
      return this[_0x558db9(0x1b5)]({
        commandId: t["MoveBoardTableColumnsCommand"]["id"],
        params: {
          startColumn: _0xd5c7c0,
          endColumn: _0x4550fc,
          targetColumn: _0x4c80dc,
          position: _0x47d583,
        },
      });
    }
    ["mergeCells"](_0x2ba7b6) {
      return this[_0x1027e9(0x1b5)]({
        commandId: t[_0x1027e9(0x1e9)]["id"],
        params: { range: _0x2ba7b6 },
      });
    }
    ["unmergeCell"](_0x47a9c2, _0x5edacf) {
      return this["_execute"]({
        commandId: t[_0x37af5e(0x1c4)]["id"],
        params: { row: _0x47a9c2, column: _0x5edacf },
      });
    }
    ["remove"]() {
      let _0x5f0eba = this["getTableId"]();
      return (
        !!_0x5f0eba &&
        this[_0x510fcc(0x1d2)][_0x510fcc(0x1dd)](t[_0x510fcc(0x1da)]["id"], {
          unitId: this[_0x510fcc(0x1b2)][_0x510fcc(0x1e5)](),
          subUnitId: this[_0x510fcc(0x19c)],
          tableId: _0x5f0eba,
          elementId: this[_0x510fcc(0x1a2)],
        })
      );
    }
    ["_getElement"]() {
      let _0x1a44ac = this[_0x2826f4(0x1b2)][_0x2826f4(0x1cb)](
        this[_0x2826f4(0x1a2)],
      );
      return (_0x1a44ac == null ? void 0x0 : _0x1a44ac[_0x2826f4(0x194)]) ===
        e[_0x2826f4(0x1cf)]["Table"]
        ? _0x1a44ac
        : null;
    }
    ["_executeWithElement"](_0x404e91, _0x56c2f3) {
      return this[_0x270997(0x1b5)]({
        commandId: _0x404e91,
        params: {
          ..._0x56c2f3,
          subUnitId: this[_0x270997(0x19c)],
          elementId: this["_elementId"],
        },
      });
    }
    ["_execute"](_0x271301) {
      let _0x169ec8 = this[_0x297df2(0x1f4)]();
      return (
        !!_0x169ec8 &&
        this["_commandService"][_0x297df2(0x1dd)](_0x271301["commandId"], {
          unitId: this["_board"][_0x297df2(0x1e5)](),
          tableId: _0x169ec8,
          ..._0x271301[_0x297df2(0x1eb)],
        })
      );
    }
  },
  s = class extends n["FBoard"] {
    ["insertTable"](_0x4b7b72) {
      let _0x38b444 = this[_0x37da4b(0x1ab)]()[_0x37da4b(0x18c)],
        _0x27d27a = _0x4b7b72["elementId"] ?? (0x0, i[_0x37da4b(0x18a)])(0x8);
      return this[_0x37da4b(0x1cb)](_0x27d27a)
        ? null
        : this[_0x37da4b(0x1af)]
              ["get"](i[_0x37da4b(0x1e7)])
              [_0x37da4b(0x1dd)](e[_0x37da4b(0x1f1)]["id"], {
                unitId: this[_0x37da4b(0x1e5)](),
                subUnitId: _0x38b444,
                elementId: _0x27d27a,
                left: _0x4b7b72[_0x37da4b(0x189)],
                top: _0x4b7b72[_0x37da4b(0x1d8)],
                parentId: _0x4b7b72["parentId"],
                laneId: _0x4b7b72[_0x37da4b(0x18f)],
                rows: _0x4b7b72[_0x37da4b(0x19e)],
                columns: _0x4b7b72[_0x37da4b(0x1e3)],
                width: _0x4b7b72[_0x37da4b(0x195)],
                height: _0x4b7b72[_0x37da4b(0x1a5)],
                diagramPreset: _0x4b7b72[_0x37da4b(0x1ae)],
              })
          ? this[_0x37da4b(0x19b)](_0x27d27a, _0x38b444)
          : null;
    }
    ["getTable"](_0x7b8722) {
      let _0x43b265 = this["getData"]()[_0x45dfb0(0x18c)],
        _0x2f8a4d = this[_0x45dfb0(0x1cb)](_0x7b8722);
      return (_0x2f8a4d == null ? void 0x0 : _0x2f8a4d[_0x45dfb0(0x194)]) ===
        e[_0x45dfb0(0x1cf)][_0x45dfb0(0x1ef)]
        ? this[_0x45dfb0(0x19b)](_0x7b8722, _0x43b265)
        : null;
    }
    ["getTables"]() {
      let _0x55b97f = this[_0x2c7f4c(0x1ab)]()["activePageId"];
      return this[_0x2c7f4c(0x18b)]({
        elementType: e[_0x2c7f4c(0x1cf)]["Table"],
        includeHidden: !0x0,
        includeLocked: !0x0,
      })
        [_0x2c7f4c(0x198)](
          (_0x12f7cd) =>
            _0x12f7cd[_0x2c7f4c(0x194)] ===
            e[_0x2c7f4c(0x1cf)][_0x2c7f4c(0x1ef)],
        )
        [_0x2c7f4c(0x1ee)]((_0x405a73) =>
          this[_0x2c7f4c(0x19b)](_0x405a73["id"], _0x55b97f),
        );
    }
    ["_createTableFacade"](_0x2e0aad, _0xa57faf) {
      return new o(
        this,
        _0xa57faf,
        _0x2e0aad,
        this["_injector"][_0x418bad(0x1c6)](i[_0x418bad(0x1e7)]),
        this[_0x418bad(0x1af)][_0x418bad(0x1c6)](r[_0x418bad(0x192)]),
      );
    }
  };
function c(_0x1406ce) {
  var _0x5266d1;
  return ((_0x1406ce == null ||
  (_0x5266d1 = _0x1406ce[_0x5bf53c(0x1d5)]) == null
    ? void 0x0
    : _0x5266d1["dataStream"]) ?? "")
    [_0x5bf53c(0x17c)](/\r\n$/, "")
    [_0x5bf53c(0x17c)](/\r/g, "\x0a");
}
function l(_0x352fbf) {
  return _0x352fbf[_0x16227d(0x19e)]["flatMap"]((_0x470aaf, _0x5737c7) =>
    _0x470aaf[_0x16227d(0x1a3)]["flatMap"]((_0x2df643, _0x4b0514) => {
      const _0x11fe42 = _0x16227d;
      let _0x2a9928 = Math[_0x11fe42(0x1c7)](
          0x1,
          _0x2df643[_0x11fe42(0x1c2)] ?? 0x1,
        ),
        _0x195893 = Math[_0x11fe42(0x1c7)](
          0x1,
          _0x2df643[_0x11fe42(0x1cd)] ?? 0x1,
        );
      return _0x2a9928 > 0x1 || _0x195893 > 0x1
        ? [
            {
              startRow: _0x5737c7,
              endRow: _0x5737c7 + _0x2a9928 - 0x1,
              startColumn: _0x4b0514,
              endColumn: _0x4b0514 + _0x195893 - 0x1,
            },
          ]
        : [];
    }),
  );
}
function u(_0x4bb02a, _0x5f211f) {
  return (
    [
      _0x5f211f["startRow"],
      _0x5f211f[_0x5f0225(0x17e)],
      _0x5f211f[_0x5f0225(0x19f)],
      _0x5f211f["endColumn"],
    ]["every"](Number["isInteger"]) &&
    _0x5f211f[_0x5f0225(0x1b8)] >= 0x0 &&
    _0x5f211f[_0x5f0225(0x19f)] >= 0x0 &&
    _0x5f211f[_0x5f0225(0x17e)] >= _0x5f211f[_0x5f0225(0x1b8)] &&
    _0x5f211f[_0x5f0225(0x1c8)] >= _0x5f211f[_0x5f0225(0x19f)] &&
    _0x5f211f["endRow"] < _0x4bb02a[_0x5f0225(0x19e)][_0x5f0225(0x1b9)] &&
    _0x4bb02a["rows"]
      [_0x5f0225(0x1f3)](_0x5f211f["startRow"], _0x5f211f["endRow"] + 0x1)
      [_0x5f0225(0x1b6)](
        (_0x27f9a6) =>
          _0x5f211f[_0x5f0225(0x1c8)] <
          _0x27f9a6[_0x5f0225(0x1a3)][_0x5f0225(0x1b9)],
      )
  );
}
function d(_0x127ea2, _0x27819d, _0x50e6c4) {
  var _0x16d126;
  let _0x3fa5ab =
    ((_0x16d126 = _0x127ea2[0x0]) == null
      ? void 0x0
      : _0x16d126[_0x5c7fc2(0x1b9)]) ?? 0x0;
  return (
    _0x127ea2[_0x5c7fc2(0x1b9)] > 0x0 &&
    _0x3fa5ab > 0x0 &&
    Number["isInteger"](_0x27819d) &&
    Number["isInteger"](_0x50e6c4) &&
    _0x27819d >= 0x0 &&
    _0x50e6c4 >= 0x0 &&
    _0x127ea2[_0x5c7fc2(0x1b6)](
      (_0xa88683) => _0xa88683["length"] === _0x3fa5ab,
    )
  );
}
function f(_0x34ff79, _0x4e82d5, _0x4b7a23, _0x52fd00) {
  let _0x1e4fc0 = i[_0x1ac5f6(0x1ac)][_0x1ac5f6(0x187)](
      _0x34ff79[_0x1ac5f6(0x19e)],
    ),
    _0x5016cc = _0x4e82d5[0x0][_0x1ac5f6(0x1b9)],
    _0x5f1595 = !0x1;
  for (let _0x1e144b = 0x0; _0x1e144b < _0x4e82d5["length"]; _0x1e144b++) {
    let _0x26a09a = _0x1e4fc0[_0x4b7a23 + _0x1e144b];
    if (!_0x26a09a) return null;
    for (let _0x5b1995 = 0x0; _0x5b1995 < _0x5016cc; _0x5b1995++) {
      let _0x546763 = _0x26a09a[_0x1ac5f6(0x1a3)][_0x52fd00 + _0x5b1995],
        _0x2d0584 = _0x4e82d5[_0x1e144b][_0x5b1995];
      if (
        !_0x546763 ||
        !_0x2d0584 ||
        typeof _0x2d0584[_0x1ac5f6(0x1ab)] != _0x1ac5f6(0x174)
      )
        return null;
      let _0x2be186 = m(
        _0x34ff79["id"],
        _0x4b7a23 + _0x1e144b,
        _0x52fd00 + _0x5b1995,
        _0x2d0584[_0x1ac5f6(0x1ab)](),
      );
      i[_0x1ac5f6(0x1ac)][_0x1ac5f6(0x1b0)](
        _0x546763[_0x1ac5f6(0x199)],
        _0x2be186,
      ) || ((_0x546763["textData"] = _0x2be186), (_0x5f1595 = !0x0));
    }
  }
  return { rows: _0x1e4fc0, changed: _0x5f1595 };
}
function p(_0x351a20, _0x17e2c0, _0x12d990, _0x2f48e1) {
  let _0x7bdb5b = _0x2f48e1[_0x6b13b1(0x17c)](/\r\n/g, "\x0a")[
    _0x6b13b1(0x17c)
  ](/\r/g, "\x0a");
  return m(_0x351a20, _0x17e2c0, _0x12d990, {
    id: _0x6b13b1(0x1bd) + _0x351a20 + "_" + _0x17e2c0 + "_" + _0x12d990,
    body: {
      dataStream: _0x7bdb5b[_0x6b13b1(0x17c)](/\n/g, "\x0d") + "\x0d\x0a",
    },
    documentStyle: {},
  });
}
function m(_0x4583ff, _0x46afd5, _0x2d8a5b, _0x205c8c) {
  var _0x3cb95d, _0x3c8201, _0xdcc12b;
  let _0x284703 = i["Tools"][_0x578bc8(0x187)](_0x205c8c),
    _0x328773 = (((_0x3cb95d = _0x284703[_0x578bc8(0x1d5)]) == null
      ? void 0x0
      : _0x3cb95d["dataStream"]) ?? "")
      [_0x578bc8(0x17c)](/\r\n/g, "\x0d")
      ["replace"](/\n/g, "\x0d"),
    _0x4aebc5 = _0x328773
      ? _0x328773[_0x578bc8(0x1bb)]("\x0d")
        ? _0x328773 + "\x0a"
        : _0x328773 + "\x0d\x0a"
      : "\x0d\x0a",
    _0x5eb6cb = Array[_0x578bc8(0x1ea)](
      _0x4aebc5[_0x578bc8(0x185)](/\r/g),
      (_0x923afb) => _0x923afb["index"],
    ),
    _0x4aa929 =
      ((_0x3c8201 = _0x284703["body"]) == null
        ? void 0x0
        : _0x3c8201[_0x578bc8(0x1c0)]) ?? [],
    _0xb0fd0f = new Set(
      _0x4aa929[_0x578bc8(0x1ee)]((_0x10605e) => _0x10605e["paragraphId"])[
        _0x578bc8(0x198)
      ]((_0x59119c) => !!_0x59119c),
    ),
    _0x22dca8 = _0x5eb6cb[_0x578bc8(0x1ee)]((_0x591124, _0x5ae39d) => {
      const _0x5c8b19 = _0x578bc8;
      var _0x186b25;
      return {
        ..._0x4aa929[_0x5ae39d],
        startIndex: _0x591124,
        paragraphId:
          ((_0x186b25 = _0x4aa929[_0x5ae39d]) == null
            ? void 0x0
            : _0x186b25["paragraphId"]) ??
          (0x0, i[_0x5c8b19(0x1db)])(_0xb0fd0f),
      };
    });
  return {
    ..._0x284703,
    id:
      _0x284703["id"] ??
      _0x578bc8(0x1bd) + _0x4583ff + "_" + _0x46afd5 + "_" + _0x2d8a5b,
    body: {
      ..._0x284703[_0x578bc8(0x1d5)],
      dataStream: _0x4aebc5,
      paragraphs: _0x22dca8,
      textRuns:
        ((_0xdcc12b = _0x284703["body"]) == null
          ? void 0x0
          : _0xdcc12b[_0x578bc8(0x175)]) ?? [],
    },
    documentStyle: {
      ..._0x284703[_0x578bc8(0x1bf)],
      documentFlavor: i["DocumentFlavor"][_0x578bc8(0x179)],
    },
  };
}
n["FBoard"]["extend"](s);
var h = class extends a["FEnum"] {
  get ["BoardTableDiagramPreset"]() {
    return t["BoardDiagramTablePreset"];
  }
  get ["BoardTableFillTypeEnum"]() {
    return r[_0x25aef1(0x176)];
  }
  get ["BoardTableGradientFillTypeEnum"]() {
    return r["SlideTableGradientFillTypeEnum"];
  }
  get ["BoardTablePictureFillModeEnum"]() {
    return r[_0x3633d4(0x1df)];
  }
  get ["BoardTableBorderDashEnum"]() {
    return r[_0x3010d6(0x184)];
  }
  get ["BoardTableBorderPresetEnum"]() {
    return r[_0x36287b(0x1f0)];
  }
  get ["BoardTableVerticalAlignEnum"]() {
    return r[_0x2b2f55(0x1a6)];
  }
  get ["BoardTableTextDirectionEnum"]() {
    return r[_0x162dc2(0x1a9)];
  }
};
(a["FEnum"]["extend"](h), (exports["FBoardTable"] = o));
