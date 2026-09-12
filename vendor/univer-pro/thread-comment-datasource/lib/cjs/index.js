Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("@univerjs-pro/collaboration-client"),
  t = require("@univerjs-pro/license"),
  n = require("@univerjs/core"),
  r = require("@univerjs/network"),
  i = require("@univerjs/thread-comment"),
  a = require("@univerjs/thread-comment-ui"),
  o = require("@univerjs/protocol"),
  s = require("rxjs");
var c = "@univerjs-pro/thread-comment-datasource",
  l = "1.0.0-insiders.20260907-70fc579";
const u = {},
  d = (_0xb20cf) =>
    (0x0, n["dateKit"])(new Date(+_0xb20cf))["format"]("YYYY/MM/DD HH:mm");
function f(_0x670f18) {
  if (!_0x670f18) return null;
  try {
    let _0x59ab8b = JSON["parse"](_0x670f18);
    return (0x0, i["isThreadCommentDocumentBody"])(_0x59ab8b)
      ? _0x59ab8b
      : null;
  } catch {
    return null;
  }
}
const p = async (_0x529452, _0xbebb40) => {
  let _0x448657 = _0x529452["get"](n["UserManagerService"]),
    _0x39dd92 = _0x529452["get"](r["HTTPService"]);
  (_0xbebb40["forEach"]((_0x2bd6a8) => {
    _0x448657["getUser"](_0x2bd6a8) && _0xbebb40["delete"](_0x2bd6a8);
  }),
    _0xbebb40["size"] &&
      (
        await _0x39dd92["get"]("/universer-api/user/list", {
          params: { userIDs: [..._0xbebb40] },
        })
      )["body"]["users"]["forEach"]((_0x43f20d) => {
        _0x43f20d && _0x448657["addUser"](_0x43f20d);
      }));
};
function m(_0x458583, _0x4b1a1a) {
  return function (_0x52aba9, _0x4a291c) {
    _0x4b1a1a(_0x52aba9, _0x4a291c, _0x458583);
  };
}
function h(_0x53efd7, _0x52c709, _0x81a44a, _0x1be99e) {
  var _0x340e7c = arguments[_0x49c1ca(0x91)],
    _0x3977bc =
      _0x340e7c < 0x3
        ? _0x52c709
        : _0x1be99e === null
          ? (_0x1be99e = Object[_0x49c1ca(0xb6)](_0x52c709, _0x81a44a))
          : _0x1be99e,
    _0x4cca35;
  if (
    typeof Reflect == _0x49c1ca(0x86) &&
    typeof Reflect[_0x49c1ca(0xd1)] == _0x49c1ca(0xdf)
  )
    _0x3977bc = Reflect["decorate"](_0x53efd7, _0x52c709, _0x81a44a, _0x1be99e);
  else {
    for (
      var _0x12341c = _0x53efd7[_0x49c1ca(0x91)] - 0x1;
      _0x12341c >= 0x0;
      _0x12341c--
    )
      (_0x4cca35 = _0x53efd7[_0x12341c]) &&
        (_0x3977bc =
          (_0x340e7c < 0x3
            ? _0x4cca35(_0x3977bc)
            : _0x340e7c > 0x3
              ? _0x4cca35(_0x52c709, _0x81a44a, _0x3977bc)
              : _0x4cca35(_0x52c709, _0x81a44a)) || _0x3977bc);
  }
  return (
    _0x340e7c > 0x3 &&
      _0x3977bc &&
      Object[_0x49c1ca(0x98)](_0x52c709, _0x81a44a, _0x3977bc),
    _0x3977bc
  );
}
let g = class extends n["Disposable"] {
  constructor(_0x3c3be3, _0x450891, _0x5c5a40, _0x5166c1) {
    (super(),
      (this[_0x2c014f(0xab)] = _0x3c3be3),
      (this[_0x2c014f(0xde)] = _0x450891),
      (this[_0x2c014f(0xec)] = _0x5c5a40),
      (this[_0x2c014f(0xba)] = _0x5166c1),
      this["_init"](),
      this[_0x2c014f(0xbf)]());
  }
  ["_initUserSync"]() {
    this[_0x22e269(0xb5)](
      this[_0x22e269(0xde)]["commentUpdate$"]
        ["pipe"]((0x0, s[_0x22e269(0xc4)])(0x10))
        [_0x22e269(0xc0)]((_0x32334e) => {
          const _0x518a42 = _0x22e269;
          let _0x6accff = new Set();
          (_0x32334e[_0x518a42(0x8d)]((_0x40a461) => {
            const _0x165391 = _0x518a42;
            switch (_0x40a461[_0x165391(0xdb)]) {
              case "add": {
                let _0x5c5308 = _0x40a461[_0x165391(0xaa)]["personId"];
                _0x6accff[_0x165391(0x90)](_0x5c5308);
                break;
              }
              default:
                break;
            }
          }),
            p(this[_0x518a42(0xba)], _0x6accff));
        }),
    );
  }
  ["_deleteComment"](_0x5d9b47, _0x408076, _0x5c9412) {
    let _0x263815 = this[_0x3cbd4c(0xde)][_0x3cbd4c(0x82)](
      _0x5d9b47,
      _0x408076,
      _0x5c9412,
    );
    _0x263815 &&
      (_0x263815["parentId"]
        ? this[_0x3cbd4c(0xde)][_0x3cbd4c(0xd7)](
            _0x5d9b47,
            _0x408076,
            _0x5c9412,
          )
        : this[_0x3cbd4c(0xde)][_0x3cbd4c(0xb2)](
            _0x5d9b47,
            _0x408076,
            _0x263815["threadId"],
          ));
  }
  ["_resolveComment"](_0xcd1c7d, _0x90c0cb, _0x450f37, _0x357497) {
    (_0x357497 === o[_0x5cd70f(0xcb)][_0x5cd70f(0x87)] ||
      _0x357497 === o["CommentSolvedStatus"][_0x5cd70f(0xf9)]) &&
      this["_threadCommentModel"]["resolveComment"](
        _0xcd1c7d,
        _0x90c0cb,
        _0x450f37,
        _0x357497 === o[_0x5cd70f(0xcb)][_0x5cd70f(0x87)],
      );
  }
  ["_init"]() {
    this[_0x40857b(0xb5)](
      this["_commentService"][_0x40857b(0xfb)][_0x40857b(0xc0)]((_0x1caeb1) => {
        const _0x22ce77 = _0x40857b;
        var _0x335f08;
        let _0x5efafd =
          (_0x335f08 = this[_0x22ce77(0xde)]
            [_0x22ce77(0xe4)](_0x1caeb1[_0x22ce77(0xd4)])
            [_0x22ce77(0xf6)](
              (_0x124024) =>
                _0x124024[_0x22ce77(0xc6)] === _0x1caeb1[_0x22ce77(0xc6)],
            )) == null
            ? void 0x0
            : _0x335f08[_0x22ce77(0xfa)];
        if (!_0x5efafd) return;
        let { unitId: _0x104bc1, subUnitId: _0x2d511a } = _0x5efafd;
        switch (
          (_0x1caeb1[_0x22ce77(0xef)] &&
            this[_0x22ce77(0xec)]["addUser"](_0x1caeb1[_0x22ce77(0xef)]),
          _0x1caeb1["type"])
        ) {
          case o[_0x22ce77(0xa5)]["Reply"]: {
            var _0xca8910;
            let _0x8df42e = f(_0x1caeb1[_0x22ce77(0xf7)]);
            if (
              !_0x1caeb1[_0x22ce77(0x88)] ||
              !_0x1caeb1["createTimestamp"] ||
              !_0x8df42e
            )
              return;
            this[_0x22ce77(0xde)][_0x22ce77(0xea)](_0x104bc1, _0x2d511a, {
              unitId: _0x104bc1,
              subUnitId: _0x2d511a,
              ref: "",
              id: _0x1caeb1[_0x22ce77(0x88)],
              dT: d(+_0x1caeb1[_0x22ce77(0xbc)]),
              threadId: _0x1caeb1["threadId"],
              personId:
                ((_0xca8910 = _0x1caeb1["user"]) == null
                  ? void 0x0
                  : _0xca8910[_0x22ce77(0x9d)]) ?? _0x1caeb1["userId"],
              text: _0x8df42e,
              parentId: _0x5efafd["id"],
            });
            break;
          }
          case o[_0x22ce77(0xa5)][_0x22ce77(0xb3)]:
            if (!_0x1caeb1[_0x22ce77(0x88)]) {
              this[_0x22ce77(0xde)]["deleteThread"](
                _0x104bc1,
                _0x2d511a,
                _0x5efafd["threadId"],
              );
              break;
            }
            this[_0x22ce77(0xf2)](
              _0x104bc1,
              _0x2d511a,
              _0x1caeb1[_0x22ce77(0x88)],
            );
            break;
          case o[_0x22ce77(0xa5)][_0x22ce77(0xb7)]: {
            let _0x201655 = f(_0x1caeb1[_0x22ce77(0xf7)]);
            if (!_0x1caeb1[_0x22ce77(0x88)] || !_0x201655) return;
            this[_0x22ce77(0xde)][_0x22ce77(0x89)](_0x104bc1, _0x2d511a, {
              commentId: _0x1caeb1[_0x22ce77(0x88)],
              text: _0x201655,
            });
            break;
          }
          case o["CommentUpdateEventType"][_0x22ce77(0xa7)]:
            this["_resolveComment"](
              _0x104bc1,
              _0x2d511a,
              _0x5efafd["id"],
              _0x1caeb1["solved"],
            );
            break;
          default:
            break;
        }
      }),
    );
  }
};
g = h(
  [
    m(0x0, (0x0, n["Inject"])(e["CommentService"])),
    m(0x1, (0x0, n["Inject"])(i["ThreadCommentModel"])),
    m(0x2, (0x0, n["Inject"])(n["UserManagerService"])),
    m(0x3, (0x0, n["Inject"])(n["Injector"])),
  ],
  g,
);
function _(_0x24aedc, _0x105fe4) {
  let _0x1c8c62 = Number(
    _0x24aedc == null ? void 0x0 : _0x24aedc[_0x572ebe(0xbc)],
  );
  return !!(
    _0x24aedc &&
    _0x24aedc["replyId"] &&
    _0x24aedc[_0x572ebe(0xc6)] === _0x105fe4 &&
    _0x24aedc[_0x572ebe(0xc7)] &&
    Number["isFinite"](_0x1c8c62) &&
    _0x1c8c62 > 0x0
  );
}
function v(_0x5b1182, _0x4dd3a7) {
  let _0x44431e = _0x5b1182[_0x5428b2(0xe3)][0x0];
  if (!_0x5b1182[_0x5428b2(0xc6)] || !_(_0x44431e, _0x5b1182[_0x5428b2(0xc6)]))
    throw Error(_0x5428b2(0xb8));
  return {
    ..._0x4dd3a7,
    id: _0x44431e[_0x5428b2(0x88)],
    resolved: _0x5b1182[_0x5428b2(0x8c)] === 0x1,
    dT: d(_0x44431e["createTimestamp"]),
    personId: _0x44431e["userId"],
    threadId: _0x44431e[_0x5428b2(0xc6)],
  };
}
function y(_0x3d974e, _0x18c6ef, _0x4baee9, _0x5ef0e7) {
  if (
    (_0x3d974e == null ? void 0x0 : _0x3d974e[_0x51836d(0xc6)]) === _0x18c6ef &&
    _0x3d974e[_0x51836d(0xe3)][_0x51836d(0x91)] > 0x0
  ) {
    let _0x2157a9 = (_0x525d25, _0xddbfc3) => {
        const _0x17ea49 = _0x51836d;
        if (!_(_0x525d25, _0x18c6ef)) return null;
        let _0x2ee1ef = f(_0x525d25[_0x17ea49(0xf7)]);
        return _0x2ee1ef
          ? {
              id: _0x525d25["replyId"],
              threadId: _0x525d25[_0x17ea49(0xc6)],
              dT: d(_0x525d25[_0x17ea49(0xbc)]),
              personId: _0x525d25[_0x17ea49(0xc7)],
              resolved:
                _0x3d974e[_0x17ea49(0x8c)] ===
                o[_0x17ea49(0xcb)][_0x17ea49(0x87)],
              unitId: _0x4baee9,
              subUnitId: _0x5ef0e7,
              text: _0x2ee1ef,
              parentId: _0xddbfc3,
            }
          : null;
      },
      _0x148201 = _0x2157a9(_0x3d974e[_0x51836d(0xe3)][0x0]);
    if (!_0x148201) return null;
    let _0x32f2be = new Set([_0x148201["id"]]),
      _0x67a0af = _0x3d974e[_0x51836d(0xe3)]
        ["slice"](0x1)
        [_0x51836d(0x8a)]((_0x4bf93f) => {
          const _0x817af1 = _0x51836d;
          let _0x1f9c07 = _0x2157a9(_0x4bf93f, _0x148201["id"]);
          return !_0x1f9c07 || _0x32f2be[_0x817af1(0xd5)](_0x1f9c07["id"])
            ? []
            : (_0x32f2be[_0x817af1(0x90)](_0x1f9c07["id"]), [_0x1f9c07]);
        });
    return { ..._0x148201, children: _0x67a0af };
  }
  return null;
}
let b = class {
  constructor(_0x2b6a8f, _0x1a6781, _0x1ed474) {
    ((this[_0x3031ce(0xda)] = _0x2b6a8f),
      (this[_0x3031ce(0xec)] = _0x1a6781),
      (this[_0x3031ce(0x93)] = _0x1ed474));
  }
  async ["addComment"](_0x1ef63b) {
    var _0x445f34;
    let {
        parentId: _0x2cbb17,
        unitId: _0x56e261,
        text: _0x5b91f9,
        threadId: _0x5af6f6,
      } = _0x1ef63b,
      _0x2918f2 =
        ((_0x445f34 = _0x5b91f9["customRanges"]) == null
          ? void 0x0
          : _0x445f34[_0x744ba0(0xf8)](
              (_0x3867cb) =>
                _0x3867cb[_0x744ba0(0x7d)] === n[_0x744ba0(0x9e)]["COMMENT"],
            )[_0x744ba0(0xf0)]((_0x1a7759) => _0x1a7759[_0x744ba0(0xd0)])) ??
        [],
      _0x26f950 = JSON[_0x744ba0(0xc8)](_0x5b91f9),
      _0x5cd3d0 = (await this["_sessionService"]["requireSession"](_0x56e261))[
        _0x744ba0(0xad)
      ]();
    if (_0x2cbb17) {
      let _0x3ff784 = {
          memberId: _0x5cd3d0,
          unitId: _0x56e261,
          content: _0x26f950,
          mention: _0x2918f2,
          threadId: _0x5af6f6,
        },
        _0x1f4485 = await this[_0x744ba0(0xda)][_0x744ba0(0x7f)](
          "/universer-api/comment/unit/" + _0x56e261 + "/reply",
          { body: _0x3ff784 },
        ),
        _0x2e02a2 = _0x1f4485["body"][_0x744ba0(0xfe)];
      if (
        (_0x1f4485[_0x744ba0(0xaf)][_0x744ba0(0x9c)] &&
          _0x1f4485[_0x744ba0(0xaf)]["error"][_0x744ba0(0x9b)] !== 0x1) ||
        !_(_0x2e02a2, _0x5af6f6)
      ) {
        var _0x4359df;
        throw Error(
          ((_0x4359df = _0x1f4485[_0x744ba0(0xaf)][_0x744ba0(0x9c)]) == null
            ? void 0x0
            : _0x4359df[_0x744ba0(0x85)]) ??
            "Comment\x20service\x20did\x20not\x20return\x20the\x20created\x20reply",
        );
      }
      return {
        ..._0x1ef63b,
        id: _0x2e02a2[_0x744ba0(0x88)],
        dT: (0x0, n[_0x744ba0(0xf3)])(+_0x2e02a2[_0x744ba0(0xbc)])[
          _0x744ba0(0xcd)
        ](_0x744ba0(0xf4)),
        personId: _0x2e02a2["userId"],
      };
    } else {
      let _0x17c7cf = {
          memberId: _0x5cd3d0,
          unitId: _0x56e261,
          content: _0x26f950,
          mention: _0x2918f2,
        },
        _0x58d3f0 = await this[_0x744ba0(0xda)][_0x744ba0(0x7f)](
          _0x744ba0(0x9f) + _0x56e261 + _0x744ba0(0x100),
          { body: _0x17c7cf },
        );
      if (
        (_0x58d3f0[_0x744ba0(0xaf)][_0x744ba0(0x9c)] &&
          _0x58d3f0[_0x744ba0(0xaf)][_0x744ba0(0x9c)]["code"] !== 0x1) ||
        !_0x58d3f0[_0x744ba0(0xaf)]["comment"]
      ) {
        var _0x4e0287;
        throw Error(
          ((_0x4e0287 = _0x58d3f0[_0x744ba0(0xaf)][_0x744ba0(0x9c)]) == null
            ? void 0x0
            : _0x4e0287[_0x744ba0(0x85)]) ?? _0x744ba0(0xe6),
        );
      }
      return v(_0x58d3f0[_0x744ba0(0xaf)]["comment"], _0x1ef63b);
    }
  }
  async ["updateComment"](_0x3efcc4) {
    var _0x441bf2;
    let { text: _0x4526d9, unitId: _0x141710 } = _0x3efcc4,
      _0x5ddb06 =
        ((_0x441bf2 = _0x4526d9[_0x5bd57c(0xb0)]) == null
          ? void 0x0
          : _0x441bf2[_0x5bd57c(0xf8)](
              (_0x3714e2) =>
                _0x3714e2[_0x5bd57c(0x7d)] ===
                n[_0x5bd57c(0x9e)][_0x5bd57c(0x8f)],
            )[_0x5bd57c(0xf0)]((_0x35966f) => _0x35966f[_0x5bd57c(0xd0)])) ??
        [],
      _0x1d88b5 = JSON[_0x5bd57c(0xc8)](_0x4526d9),
      _0x244199 = _0x3efcc4[_0x5bd57c(0xc6)],
      _0x3d96ba = _0x3efcc4["id"],
      _0x895700 = {
        memberId: (await this[_0x5bd57c(0x93)][_0x5bd57c(0x84)](_0x141710))[
          "getMemberID"
        ](),
        unitId: _0x141710,
        threadId: _0x244199,
        mention: _0x5ddb06,
        content: _0x1d88b5,
        replyId: _0x3d96ba,
      },
      _0x5bca97 = await this[_0x5bd57c(0xda)][_0x5bd57c(0x7f)](
        _0x5bd57c(0x9f) + _0x141710 + "/edit",
        { body: _0x895700 },
      );
    return (
      !_0x5bca97[_0x5bd57c(0xaf)][_0x5bd57c(0x9c)] ||
      _0x5bca97[_0x5bd57c(0xaf)]["error"]["code"] === 0x1
    );
  }
  async ["resolveComment"](_0x4051bf) {
    let { unitId: _0x39a2b1 } = _0x4051bf,
      _0x537954 = _0x4051bf[_0x5c5f94(0xc6)],
      _0xe4a123 = {
        memberId: (await this[_0x5c5f94(0x93)]["requireSession"](_0x39a2b1))[
          "getMemberID"
        ](),
        unitId: _0x39a2b1,
        threadId: _0x537954,
        solved: _0x4051bf["resolved"]
          ? o[_0x5c5f94(0xcb)][_0x5c5f94(0x87)]
          : o[_0x5c5f94(0xcb)][_0x5c5f94(0xf9)],
      },
      _0x335d6a = await this[_0x5c5f94(0xda)]["post"](
        _0x5c5f94(0x9f) + _0x39a2b1 + _0x5c5f94(0xbd),
        { body: _0xe4a123 },
      );
    return (
      !_0x335d6a[_0x5c5f94(0xaf)][_0x5c5f94(0x9c)] ||
      _0x335d6a[_0x5c5f94(0xaf)]["error"][_0x5c5f94(0x9b)] === 0x1
    );
  }
  ["deleteComment"](_0x4cb0c6, _0x14a014, _0x2d23eb, _0x62f50) {
    return this[_0x4a900b(0xf2)](_0x4cb0c6, _0x2d23eb, _0x62f50);
  }
  ["deleteThread"](_0x4f3ff0, _0x4fc0ea, _0x5394b5) {
    return this[_0x5dc8e4(0xf2)](_0x4f3ff0, _0x5394b5);
  }
  async ["_deleteComment"](_0x58e619, _0xa3c4d5, _0x45b019) {
    let _0x37084f = {
        memberId: (await this[_0x5bb716(0x93)][_0x5bb716(0x84)](_0x58e619))[
          _0x5bb716(0xad)
        ](),
        threadId: _0xa3c4d5,
        replyId: _0x45b019,
        unitId: _0x58e619,
      },
      _0x5e9756 = await this["_httpService"][_0x5bb716(0x7f)](
        "/universer-api/comment/unit/" + _0x58e619 + _0x5bb716(0xd3),
        { body: _0x37084f },
      );
    return (
      !_0x5e9756["body"][_0x5bb716(0x9c)] ||
      _0x5e9756[_0x5bb716(0xaf)][_0x5bb716(0x9c)][_0x5bb716(0x9b)] === 0x1
    );
  }
  async ["listComments"](_0x8d23e, _0x40ecb7, _0x1e19dd) {
    let _0x4f701a = { unitId: _0x8d23e, threadId: _0x1e19dd },
      _0x3e098c = await this["_httpService"][_0x426734(0x7f)](
        _0x426734(0x9f) + _0x8d23e + _0x426734(0x101),
        { body: _0x4f701a },
      );
    if (
      _0x3e098c[_0x426734(0xaf)][_0x426734(0x9c)] &&
      _0x3e098c[_0x426734(0xaf)]["error"][_0x426734(0x9b)] !== 0x1
    )
      throw Error(
        _0x3e098c[_0x426734(0xaf)]["error"][_0x426734(0x85)] || _0x426734(0xac),
      );
    let _0x3459e7 = _0x1e19dd[_0x426734(0xf0)]((_0x22b2e8) => {
      const _0x1b54d3 = _0x426734;
      var _0x38c83d;
      return y(
        (_0x38c83d = _0x3e098c[_0x1b54d3(0xaf)][_0x1b54d3(0xbb)]) == null
          ? void 0x0
          : _0x38c83d[_0x22b2e8],
        _0x22b2e8,
        _0x8d23e,
        _0x40ecb7,
      );
    })[_0x426734(0xf8)](Boolean);
    return (
      Object["values"](_0x3e098c[_0x426734(0xaf)]["users"] ?? {})[
        _0x426734(0x8d)
      ]((_0x256d68) => {
        const _0x3ea798 = _0x426734;
        this[_0x3ea798(0xec)][_0x3ea798(0xeb)](_0x256d68);
      }),
      _0x3459e7
    );
  }
  ["saveCommentToSnapshot"](_0x1e9cc2) {
    return {
      id: _0x1e9cc2["id"],
      threadId: _0x1e9cc2["threadId"],
      ref: _0x1e9cc2["ref"],
    };
  }
};
b = h(
  [
    m(0x0, (0x0, n["Inject"])(r["HTTPService"])),
    m(0x1, (0x0, n["Inject"])(n["UserManagerService"])),
    m(0x2, (0x0, n["Inject"])(e["CollaborationSessionService"])),
  ],
  b,
);
let x = class extends n["Disposable"] {
  constructor(_0x5bbc5b, _0x2e3320) {
    (super(),
      (this[_0x1890c7(0xa0)] = _0x5bbc5b),
      (this[_0x1890c7(0x92)] = _0x2e3320),
      this[_0x1890c7(0x96)]());
  }
  ["_initDataSource"]() {
    ((this[_0xdc6c04(0xa0)][_0xdc6c04(0xa1)] = this[_0xdc6c04(0x92)]),
      (this["_threadCommentDataSourceService"][_0xdc6c04(0xdd)] = !0x1));
  }
};
x = h(
  [m(0x0, i["IThreadCommentDataSourceService"]), m(0x1, (0x0, n["Inject"])(b))],
  x,
);
function S(_0x4c294a) {
  "@babel/helpers - typeof";
  return (
    (S =
      typeof Symbol == _0x49e6ba(0xdf) && typeof Symbol["iterator"] == "symbol"
        ? function (_0x4803e1) {
            return typeof _0x4803e1;
          }
        : function (_0x28c52b) {
            const _0x22d569 = _0x49e6ba;
            return _0x28c52b &&
              typeof Symbol == _0x22d569(0xdf) &&
              _0x28c52b[_0x22d569(0xe5)] === Symbol &&
              _0x28c52b !== Symbol["prototype"]
              ? _0x22d569(0xe8)
              : typeof _0x28c52b;
          }),
    S(_0x4c294a)
  );
}
function C(_0x107b11, _0x1ee233) {
  if (S(_0x107b11) != "object" || !_0x107b11) return _0x107b11;
  var _0x25706e = _0x107b11[Symbol["toPrimitive"]];
  if (_0x25706e !== void 0x0) {
    var _0x1118b9 = _0x25706e[_0x53e911(0xcf)](
      _0x107b11,
      _0x1ee233 || _0x53e911(0xa3),
    );
    if (S(_0x1118b9) != _0x53e911(0x86)) return _0x1118b9;
    throw TypeError(_0x53e911(0xed));
  }
  return (_0x1ee233 === _0x53e911(0x97) ? String : Number)(_0x107b11);
}
function w(_0x1502e5) {
  var _0x27f436 = C(_0x1502e5, "string");
  return S(_0x27f436) == _0x4fa8c5(0xe8) ? _0x27f436 : _0x27f436 + "";
}
function T(_0x21b04a, _0x148f14, _0x59e7a6) {
  return (
    (_0x148f14 = w(_0x148f14)) in _0x21b04a
      ? Object[_0x5cc2ee(0x98)](_0x21b04a, _0x148f14, {
          value: _0x59e7a6,
          enumerable: !0x0,
          configurable: !0x0,
          writable: !0x0,
        })
      : (_0x21b04a[_0x148f14] = _0x59e7a6),
    _0x21b04a
  );
}
let E = class extends n["Plugin"] {
  constructor(_0x530f8e = u, _0x193670, _0x4b0606) {
    (super(),
      (this[_0x113488(0xff)] = _0x530f8e),
      (this[_0x113488(0xba)] = _0x193670),
      (this["_configService"] = _0x4b0606));
    let { ..._0x58e30b } = (0x0, n[_0x113488(0x8e)])(
      {},
      u,
      this[_0x113488(0xff)],
    );
    this["_configService"][_0x113488(0xd9)](_0x113488(0xe1), _0x58e30b);
  }
  ["onStarting"]() {
    [[b], [x], [g]]["forEach"]((_0x46c4bf) => {
      this[_0x1283fc(0xba)][_0x1283fc(0x90)](_0x46c4bf);
    });
  }
  ["onReady"]() {
    (this[_0x3bb508(0xba)][_0x3bb508(0xbe)](x),
      this[_0x3bb508(0xba)][_0x3bb508(0xbe)](g));
  }
};
(T(E, "pluginName", "UNIVER_THREAD_COMMENT_DATA_SOURCE_PLUGIN"),
  T(E, "packageName", c),
  T(E, "version", l),
  (E = h(
    [
      (0x0, n["DependentOn"])(
        t["UniverLicensePlugin"],
        r["UniverNetworkPlugin"],
        i["UniverThreadCommentPlugin"],
        a["UniverThreadCommentUIPlugin"],
        e["UniverCollaborationClientPlugin"],
      ),
      m(0x1, (0x0, n["Inject"])(n["Injector"])),
      m(0x2, n["IConfigService"]),
    ],
    E,
  )),
  Object["defineProperty"](exports, "UniverThreadCommentDataSourcePlugin", {
    enumerable: !0x0,
    get: function () {
      return E;
    },
  }));
