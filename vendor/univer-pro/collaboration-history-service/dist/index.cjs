Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("@univerjs-pro/collaboration"),
  t = require("@univerjs-pro/collaboration-service");
function n(_0x381dee) {
  let _0x30b4e5 = [..._0x381dee]["sort"](
      (_0x5dae93, _0x2b0fba) => _0x5dae93["revision"] - _0x2b0fba["revision"],
    ),
    _0x1bea19 = new Map();
  for (let _0x28d637 of _0x30b4e5) {
    let _0x1cc29c = _0x1bea19["get"](_0x28d637["historyRevision"]) ?? [];
    (_0x1cc29c["push"](_0x28d637),
      _0x1bea19["set"](_0x28d637["historyRevision"], _0x1cc29c));
  }
  return [..._0x1bea19["values"]()]["map"]((_0x448e3c) => {
    let _0x12dab2 = _0x448e3c[0x0],
      _0x26bc45 = _0x448e3c["at"](-0x1),
      _0x5896f3 = i(_0x448e3c["map"]((_0x24ab76) => _0x24ab76["userID"])),
      _0x3bf827 = i(_0x448e3c["flatMap"]((_0x2d1fa2) => _0x2d1fa2["commands"])),
      _0x8515ad = _0x448e3c["find"](
        (_0x2ec2a1) => _0x2ec2a1["restoredRevision"] !== void 0x0,
      )?.["restoredRevision"];
    return {
      historyId: _0x12dab2["unitID"] + ":" + _0x12dab2["historyRevision"],
      unitID: _0x12dab2["unitID"],
      type: _0x12dab2["type"],
      startRevision: _0x12dab2["revision"],
      endRevision: _0x26bc45["revision"],
      userID: _0x12dab2["userID"],
      userIDs: _0x5896f3,
      commands: _0x3bf827,
      createdAt: _0x12dab2["committedAt"],
      startRevisionCreatedAt: _0x12dab2["committedAt"],
      endRevisionCreatedAt: _0x26bc45["committedAt"],
      ...(_0x12dab2["additionalFields"] === void 0x0
        ? {}
        : { additionalFields: _0x12dab2["additionalFields"] }),
      origin: _0x12dab2["origin"],
      ...(_0x8515ad === void 0x0 ? {} : { restoredRevision: _0x8515ad }),
    };
  });
}
function r(_0x23ce16, _0x2fac11) {
  let _0x15055e = new Set(_0x2fac11["userIDs"] ?? []),
    _0x47157b = _0x23ce16["filter"](
      (_0x52eb0d) =>
        (_0x2fac11["beforeRevision"] === void 0x0 ||
          _0x52eb0d["startRevision"] < _0x2fac11["beforeRevision"]) &&
        (_0x2fac11["origin"] === void 0x0 ||
          _0x2fac11["origin"] === 0x0 ||
          _0x52eb0d["origin"] === _0x2fac11["origin"]) &&
        (_0x15055e["size"] === 0x0 ||
          _0x52eb0d["userIDs"]["some"]((_0x25e4ca) =>
            _0x15055e["has"](_0x25e4ca),
          )),
    )["sort"](
      (_0x573fe1, _0x29a8e8) =>
        _0x29a8e8["startRevision"] - _0x573fe1["startRevision"],
    );
  return {
    records: _0x47157b["slice"](0x0, _0x2fac11["length"]),
    hasMore: _0x47157b["length"] > _0x2fac11["length"],
  };
}
function i(_0x1c5e52) {
  return [...new Set(_0x1c5e52)];
}
var a = class {
  ["_entries"] = new Map();
  ["_disposed"] = !0x1;
  async ["getIndexState"](_0x115972) {
    this["_assertOpen"]();
    let _0x225485 = o(this["_entries"]["get"](_0x115972));
    if (!_0x225485) return null;
    let _0x22d688 = this["_entries"]
      ["get"](_0x115972)
      ?.["get"](_0x225485["historyRevision"]);
    if (!_0x22d688)
      throw Error(
        "History\x20Database\x20Adapter\x20contains\x20an\x20invalid\x20history\x20revision",
      );
    return {
      unitID: _0x115972,
      type: _0x225485["type"],
      latestRevision: _0x225485["revision"],
      currentHistoryRevision: _0x225485["historyRevision"],
      currentHistoryCreatedAt: _0x22d688["committedAt"],
      forceNextHistory: _0x225485["forceNextHistory"],
    };
  }
  async ["getRevision"](_0x63ab4d, _0x44aaee) {
    return (
      this["_assertOpen"](),
      this["_entries"]["get"](_0x63ab4d)?.["get"](_0x44aaee) ?? null
    );
  }
  async ["appendRevision"](_0x39bbc0, _0x5535e4) {
    this["_assertOpen"]();
    let _0xe78356 = this["_entries"]["get"](_0x39bbc0["unitID"]) ?? new Map();
    if (_0xe78356["has"](_0x39bbc0["revision"]))
      return { status: "already-indexed" };
    let _0x504251 = o(_0xe78356)?.["revision"] ?? 0x0;
    return _0x504251 !== _0x5535e4["expectedLatestRevision"] ||
      _0x39bbc0["revision"] !== _0x504251 + 0x1
      ? { status: "revision-conflict", actualLatestRevision: _0x504251 }
      : (_0xe78356["set"](_0x39bbc0["revision"], structuredClone(_0x39bbc0)),
        this["_entries"]["set"](_0x39bbc0["unitID"], _0xe78356),
        { status: "appended" });
  }
  async ["listRecords"](_0x2a3899, _0x5a93b4) {
    return (
      this["_assertOpen"](),
      r(
        n([...(this["_entries"]["get"](_0x2a3899)?.["values"]() ?? [])]),
        _0x5a93b4,
      )
    );
  }
  async ["listCreators"](_0x43ab4a) {
    this["_assertOpen"]();
    let _0x5a1f60 = new Map();
    for (let _0x28ea3c of this["_entries"]["get"](_0x43ab4a)?.["values"]() ??
      []) {
      let _0x15ce88 = _0x5a1f60["get"](_0x28ea3c["userID"]) ?? new Set();
      (_0x15ce88["add"](_0x28ea3c["origin"]),
        _0x5a1f60["set"](_0x28ea3c["userID"], _0x15ce88));
    }
    return [..._0x5a1f60]["map"](([_0x2be47c, _0x28dba4]) => ({
      userID: _0x2be47c,
      origins: [..._0x28dba4],
    }));
  }
  async ["dispose"]() {
    this["_disposed"] ||
      ((this["_disposed"] = !0x0), this["_entries"]["clear"]());
  }
  ["_assertOpen"]() {
    if (this["_disposed"])
      throw Error("History\x20Database\x20Adapter\x20is\x20disposed");
  }
};
function o(_0x4e30b2) {
  if (!_0x4e30b2?.["size"]) return;
  let _0x43ec9f;
  for (let _0x1b99b2 of _0x4e30b2["values"]())
    (!_0x43ec9f || _0x1b99b2["revision"] > _0x43ec9f["revision"]) &&
      (_0x43ec9f = _0x1b99b2);
  return _0x43ec9f;
}
var s = class {
    ["_timeIntervalMs"];
    ["_singleHistoryMutationIds"];
    constructor(_0x5921b8 = {}) {
      if (
        ((this["_timeIntervalMs"] = _0x5921b8["timeIntervalMs"] ?? 0xea60),
        !Number["isSafeInteger"](this["_timeIntervalMs"]) ||
          this["_timeIntervalMs"] < 0x0)
      )
        throw TypeError(
          "timeIntervalMs\x20must\x20be\x20a\x20non-negative\x20safe\x20integer",
        );
      this["_singleHistoryMutationIds"] =
        _0x5921b8["singleHistoryMutationIds"] ?? e["SINGLE_HISTORY_MUTATIONS"];
    }
    ["evaluate"](_0x28d856) {
      if (!_0x28d856["state"] || _0x28d856["revision"] === 0x1)
        return { startsNewHistory: !0x0, forceNextHistory: !0x1 };
      let _0xc71e1e = !!_0x28d856["changeset"]?.["mutations"]["some"](
        (_0xc20fb6) =>
          this["_singleHistoryMutationIds"]["has"](_0xc20fb6["id"]),
      );
      return {
        startsNewHistory:
          _0x28d856["state"]["forceNextHistory"] ||
          _0xc71e1e ||
          _0x28d856["committedAt"] -
            _0x28d856["state"]["currentHistoryCreatedAt"] >=
            this["_timeIntervalMs"],
        forceNextHistory: _0xc71e1e,
      };
    }
  },
  c = class {
    ["_middlewares"] = new Map();
    ["use"](_0x1cd670, _0x319716) {
      let _0x218e80 = this["_middlewares"]["get"](_0x1cd670) ?? [],
        _0x5d41c1 = _0x319716;
      (_0x218e80["push"](_0x5d41c1),
        this["_middlewares"]["set"](_0x1cd670, _0x218e80));
      let _0x561548 = !0x1;
      return {
        dispose: () => {
          if (_0x561548) return;
          _0x561548 = !0x0;
          let _0x4a1d4b = _0x218e80["indexOf"](_0x5d41c1);
          _0x4a1d4b >= 0x0 && _0x218e80["splice"](_0x4a1d4b, 0x1);
        },
      };
    }
    async ["run"](_0x3bcb04, _0x23e5e2, _0x48f105) {
      let _0x357e40 = [...(this["_middlewares"]["get"](_0x3bcb04) ?? [])],
        _0xdbe775 = async (_0x5aaf79) => {
          let _0x280c4c = _0x357e40[_0x5aaf79];
          if (!_0x280c4c) {
            await _0x48f105();
            return;
          }
          let _0x288683 = !0x1,
            _0x952469,
            _0x144857 = () => {
              if (_0x288683)
                throw Error(
                  "Middleware\x20for\x20action\x20" +
                    _0x3bcb04 +
                    "\x20called\x20next()\x20more\x20than\x20once",
                );
              return (
                (_0x288683 = !0x0),
                (_0x952469 = _0xdbe775(_0x5aaf79 + 0x1)),
                _0x952469
              );
            };
          try {
            await _0x280c4c(_0x23e5e2, _0x144857);
          } catch (_0x20ea4c) {
            if (_0x952469)
              try {
                await _0x952469;
              } catch {}
            throw _0x20ea4c;
          }
          if (!_0x288683)
            throw Error(
              "Middleware\x20for\x20action\x20" +
                _0x3bcb04 +
                "\x20completed\x20without\x20calling\x20next()",
            );
          await _0x952469;
        };
      await _0xdbe775(0x0);
    }
    ["clear"]() {
      this["_middlewares"]["clear"]();
    }
  },
  l = "univer.mutation.create-unit",
  u = "univer.mutation.revert-version",
  d = class {
    ["_collabService"];
    ["_dbAdapter"];
    ["_ownsDbAdapter"];
    ["_policy"];
    ["_userProvider"];
    ["_logger"];
    ["_maxIndexRetries"];
    ["_middleware"] = new c();
    ["_attachments"] = new Set();
    ["_calls"] = new Set();
    ["_indexQueues"] = new Map();
    ["_state"] = "running";
    constructor(_0x5d145d) {
      if (!_0x5d145d?.["collabService"])
        throw TypeError(
          "UniverHistoryService\x20requires\x20a\x20collabService",
        );
      if (
        ((this["_collabService"] = _0x5d145d["collabService"]),
        (this["_dbAdapter"] = _0x5d145d["dbAdapter"] ?? new a()),
        (this["_ownsDbAdapter"] = _0x5d145d["dbAdapter"] === void 0x0),
        (this["_policy"] = _0x5d145d["policy"] ?? new s()),
        (this["_userProvider"] = _0x5d145d["userProvider"]),
        (this["_logger"] = _0x5d145d["logger"]),
        (this["_maxIndexRetries"] = _0x5d145d["maxIndexRetries"] ?? 0x3),
        !Number["isSafeInteger"](this["_maxIndexRetries"]) ||
          this["_maxIndexRetries"] < 0x0)
      )
        throw TypeError(
          "maxIndexRetries\x20must\x20be\x20a\x20non-negative\x20safe\x20integer",
        );
    }
    ["use"](_0xc8ce7a, _0x2ea1b6) {
      return (
        this["_assertRunning"](),
        this["_middleware"]["use"](_0xc8ce7a, _0x2ea1b6)
      );
    }
    ["getHistoryList"](_0x57e536, _0x42d7ed) {
      return this["_call"](async () => {
        let _0x1a0675 = p(_0x42d7ed),
          _0x198534 = f(_0x57e536),
          _0x294e7a = { ..._0x1a0675, request: _0x198534 },
          _0x5e3fa1;
        return (
          await this["_middleware"]["run"](
            "getHistoryList",
            _0x294e7a,
            async () => {
              if (
                (m(_0x57e536["unitID"]),
                !Number["isSafeInteger"](_0x57e536["length"]) ||
                  _0x57e536["length"] < 0x1 ||
                  _0x57e536["length"] > 0x64)
              )
                throw C(
                  "length\x20must\x20be\x20an\x20integer\x20from\x201\x20to\x20100",
                );
              let _0xd135bf = _(_0x57e536["lastLabel"]),
                _0x5c8164 = await this["_databaseCall"](() =>
                  this["_dbAdapter"]["listRecords"](_0x57e536["unitID"], {
                    length: _0x57e536["length"],
                    ...(_0xd135bf === void 0x0
                      ? {}
                      : { beforeRevision: _0xd135bf }),
                    ...(_0x57e536["origin"] === void 0x0
                      ? {}
                      : { origin: _0x57e536["origin"] }),
                    ...(_0x57e536["userIDs"] === void 0x0
                      ? {}
                      : { userIDs: _0x57e536["userIDs"] }),
                  }),
                ),
                _0x21628c = await this["_resolveUsers"](
                  w(
                    _0x5c8164["records"]["flatMap"](
                      (_0x1d13cc) => _0x1d13cc["userIDs"],
                    ),
                  ),
                  _0x1a0675,
                  _0x198534,
                ),
                _0xb3269e = {};
              for (let _0x186def of _0x5c8164["records"])
                _0xb3269e[_0x186def["historyId"]] =
                  await this["_historyData"](_0x186def);
              _0x5e3fa1 = {
                hasMore: _0x5c8164["hasMore"],
                lastLabel:
                  _0x5c8164["records"]
                    ["at"](-0x1)
                    ?.["startRevision"]["toString"]() ?? "",
                entities: { datas: _0xb3269e, users: _0x21628c },
                historyIds: _0x5c8164["records"]["map"](
                  (_0x44b1a1) => _0x44b1a1["historyId"],
                ),
              };
            },
          ),
          _0x5e3fa1
        );
      });
    }
    ["listHistoryCreators"](_0xb0f571, _0x3dfa79) {
      return this["_call"](async () => {
        let _0x2396db = p(_0x3dfa79),
          _0x2252d2 = f(_0xb0f571),
          _0x4327c7 = { ..._0x2396db, request: _0x2252d2 },
          _0x265cc4;
        return (
          await this["_middleware"]["run"](
            "listHistoryCreators",
            _0x4327c7,
            async () => {
              m(_0xb0f571["unitID"]);
              let _0x182a7f = await this["_databaseCall"](() =>
                  this["_dbAdapter"]["listCreators"](_0xb0f571["unitID"]),
                ),
                _0x482c54 = await this["_resolveUsers"](
                  _0x182a7f["map"]((_0x1d1fb9) => _0x1d1fb9["userID"]),
                  _0x2396db,
                  _0x2252d2,
                );
              _0x265cc4 = {
                creators: _0x182a7f["map"]((_0x2b3fe0) => {
                  let _0x40b719 =
                    _0x482c54[_0x2b3fe0["userID"]] ?? x(_0x2b3fe0["userID"]);
                  return {
                    userID: _0x2b3fe0["userID"],
                    name: _0x40b719["name"],
                    avatar: _0x40b719["avatar"],
                    origins: _0x2b3fe0["origins"],
                  };
                }),
              };
            },
          ),
          _0x265cc4
        );
      });
    }
    ["getHistoryChangesets"](_0x47f3a3, _0x1d4c0e) {
      return this["_call"](async () => {
        let _0x1cd3d3 = p(_0x1d4c0e),
          _0x5da57c = f(_0x47f3a3),
          _0x5e4c41 = { ..._0x1cd3d3, request: _0x5da57c },
          _0xc4133e;
        return (
          await this["_middleware"]["run"](
            "getHistoryChangesets",
            _0x5e4c41,
            async () => {
              if (
                (m(_0x47f3a3["unitID"]),
                h("startRevision", _0x47f3a3["startRevision"]),
                h("endRevision", _0x47f3a3["endRevision"]),
                _0x47f3a3["endRevision"] < _0x47f3a3["startRevision"])
              )
                throw C(
                  "endRevision\x20must\x20not\x20precede\x20startRevision",
                );
              let _0x1b3faa = await this["_databaseCall"](() =>
                this["_dbAdapter"]["getIndexState"](_0x47f3a3["unitID"]),
              );
              if (!_0x1b3faa)
                throw new t["CollabError"](
                  "UNIT_NOT_FOUND",
                  "History\x20for\x20Unit\x20" +
                    _0x47f3a3["unitID"] +
                    "\x20does\x20not\x20exist",
                );
              if (_0x47f3a3["endRevision"] > _0x1b3faa["latestRevision"])
                throw C(
                  "endRevision\x20exceeds\x20the\x20latest\x20indexed\x20revision",
                );
              let _0x632fae = await this["_collabService"]["getChangesets"](
                  {
                    unitID: _0x47f3a3["unitID"],
                    type: _0x1b3faa["type"],
                    from: _0x47f3a3["startRevision"] - 0x1,
                    to: _0x47f3a3["endRevision"],
                  },
                  _0x1cd3d3,
                ),
                _0x5c3729 = new Set(
                  _0x632fae["changesets"]["map"](
                    (_0x36724a) => _0x36724a["userID"],
                  ),
                );
              for (
                let _0x104ec3 = _0x47f3a3["startRevision"];
                _0x104ec3 <= _0x47f3a3["endRevision"];
                _0x104ec3 += 0x1
              ) {
                let _0x533d7a = await this["_databaseCall"](() =>
                  this["_dbAdapter"]["getRevision"](
                    _0x47f3a3["unitID"],
                    _0x104ec3,
                  ),
                );
                _0x533d7a && _0x5c3729["add"](_0x533d7a["userID"]);
              }
              _0xc4133e = {
                changesets: _0x632fae["changesets"],
                users: await this["_resolveUsers"](
                  [..._0x5c3729],
                  _0x1cd3d3,
                  _0x5da57c,
                ),
              };
            },
          ),
          _0xc4133e
        );
      });
    }
    ["indexUnitCreated"](_0x46c026, _0x3c7ca2) {
      return this["_call"](() =>
        this["_executeIndexUnitCreated"](_0x46c026, p(_0x3c7ca2)),
      );
    }
    ["indexChangeset"](_0x1624b7, _0x54b09e) {
      return this["_call"](() =>
        this["_executeIndexChangeset"](_0x1624b7, p(_0x54b09e)),
      );
    }
    ["attach"](_0x15a513 = this["_collabService"]) {
      this["_assertRunning"]();
      let _0x1d6858 = [
          _0x15a513["on"]("unitCreated", (_0x330ba0) => {
            this["_enqueue"](_0x330ba0["record"]["unitID"], () =>
              this["_executeIndexUnitCreated"](
                {
                  unitID: _0x330ba0["record"]["unitID"],
                  type: _0x330ba0["record"]["type"],
                  createdAt: _0x330ba0["createdAt"],
                },
                {
                  userID: _0x330ba0["userID"],
                  customData: _0x330ba0["customData"],
                },
              ),
            );
          }),
          _0x15a513["on"]("changesetCommitted", (_0x387e53) => {
            this["_enqueue"](_0x387e53["changeset"]["unitID"], () =>
              this["_executeIndexChangeset"](
                {
                  changeset: _0x387e53["changeset"],
                  committedAt: _0x387e53["committedAt"],
                },
                {
                  userID: _0x387e53["userID"],
                  customData: _0x387e53["customData"],
                },
              ),
            );
          }),
        ],
        _0x32695d = !0x1,
        _0x22c686 = {
          dispose: () => {
            if (!_0x32695d) {
              _0x32695d = !0x0;
              for (let _0x4d5590 of _0x1d6858) _0x4d5590["dispose"]();
              this["_attachments"]["delete"](_0x22c686);
            }
          },
        };
      return (this["_attachments"]["add"](_0x22c686), _0x22c686);
    }
    async ["dispose"]() {
      if (this["_state"] !== "disposed") {
        if (this["_state"] === "disposing") {
          await Promise["allSettled"]([
            ...this["_calls"],
            ...this["_indexQueues"]["values"](),
          ]);
          return;
        }
        this["_state"] = "disposing";
        for (let _0x1f42e4 of [...this["_attachments"]]) _0x1f42e4["dispose"]();
        (await Promise["allSettled"]([
          ...this["_calls"],
          ...this["_indexQueues"]["values"](),
        ]),
          this["_middleware"]["clear"](),
          this["_indexQueues"]["clear"](),
          this["_ownsDbAdapter"] && (await this["_dbAdapter"]["dispose"]?.()),
          (this["_state"] = "disposed"));
      }
    }
    async ["_executeIndexUnitCreated"](_0x2eb0bc, _0x40ce33) {
      let _0x377b28 = f(_0x2eb0bc),
        _0x1d1976 = { ..._0x40ce33, request: _0x377b28 },
        _0x494106;
      return (
        await this["_middleware"]["run"](
          "indexUnitCreated",
          _0x1d1976,
          async () => {
            g(
              _0x2eb0bc["unitID"],
              _0x2eb0bc["type"],
              0x1,
              _0x2eb0bc["createdAt"],
            );
            let _0x4d20d0 = {
              unitID: _0x2eb0bc["unitID"],
              type: _0x2eb0bc["type"],
              revision: 0x1,
              userID: _0x40ce33["userID"],
              commands: [l],
              committedAt: _0x2eb0bc["createdAt"],
              origin: 0x1,
              historyRevision: 0x1,
              forceNextHistory: !0x1,
            };
            _0x494106 = await this["_appendWithRetry"](
              _0x4d20d0,
              () => _0x4d20d0,
            );
          },
        ),
        _0x494106
      );
    }
    async ["_executeIndexChangeset"](_0x33313e, _0x797df0) {
      let _0x209edd = f(_0x33313e),
        _0x44033d = { ..._0x797df0, request: _0x209edd },
        _0x44d45b;
      return (
        await this["_middleware"]["run"](
          "indexChangeset",
          _0x44033d,
          async () => {
            let { changeset: _0x1c0122 } = _0x33313e;
            if (
              (g(
                _0x1c0122["unitID"],
                _0x1c0122["type"],
                _0x1c0122["revision"],
                _0x33313e["committedAt"],
              ),
              _0x1c0122["revision"] < 0x2)
            )
              throw C(
                "Confirmed\x20changeset\x20revision\x20must\x20be\x20at\x20least\x202",
              );
            if (!_0x1c0122["userID"])
              throw C("changeset.userID\x20is\x20required");
            _0x44d45b = await this["_appendWithRetry"](
              {
                unitID: _0x1c0122["unitID"],
                type: _0x1c0122["type"],
                revision: _0x1c0122["revision"],
                userID: _0x1c0122["userID"],
                commands: w(
                  _0x1c0122["mutations"]["map"]((_0x10ed39) => _0x10ed39["id"]),
                ),
                committedAt: _0x33313e["committedAt"],
                ...(_0x1c0122["additionalFields"] === void 0x0
                  ? {}
                  : { additionalFields: _0x1c0122["additionalFields"] }),
                origin: v(_0x1c0122["additionalFields"]),
                historyRevision: _0x1c0122["revision"],
                forceNextHistory: !0x1,
                ...y(_0x1c0122),
              },
              (_0x2f62fc) => {
                if (!_0x2f62fc)
                  throw S(_0x1c0122["unitID"], _0x1c0122["revision"], 0x0);
                if (_0x2f62fc["type"] !== _0x1c0122["type"])
                  throw C(
                    "Changeset\x20type\x20does\x20not\x20match\x20indexed\x20Unit\x20type",
                  );
                if (_0x1c0122["revision"] !== _0x2f62fc["latestRevision"] + 0x1)
                  throw S(
                    _0x1c0122["unitID"],
                    _0x1c0122["revision"],
                    _0x2f62fc["latestRevision"],
                  );
                let _0x11789b = this["_policy"]["evaluate"]({
                  state: _0x2f62fc,
                  unitID: _0x1c0122["unitID"],
                  type: _0x1c0122["type"],
                  revision: _0x1c0122["revision"],
                  committedAt: _0x33313e["committedAt"],
                  changeset: _0x1c0122,
                });
                return {
                  unitID: _0x1c0122["unitID"],
                  type: _0x1c0122["type"],
                  revision: _0x1c0122["revision"],
                  userID: _0x1c0122["userID"],
                  commands: w(
                    _0x1c0122["mutations"]["map"](
                      (_0x198383) => _0x198383["id"],
                    ),
                  ),
                  committedAt: _0x33313e["committedAt"],
                  ...(_0x1c0122["additionalFields"] === void 0x0
                    ? {}
                    : { additionalFields: _0x1c0122["additionalFields"] }),
                  origin: v(_0x1c0122["additionalFields"]),
                  historyRevision: _0x11789b["startsNewHistory"]
                    ? _0x1c0122["revision"]
                    : _0x2f62fc["currentHistoryRevision"],
                  forceNextHistory: _0x11789b["forceNextHistory"],
                  ...y(_0x1c0122),
                };
              },
            );
          },
        ),
        _0x44d45b
      );
    }
    async ["_appendWithRetry"](_0x485c8e, _0x1d80d5) {
      for (
        let _0x41d344 = 0x0;
        _0x41d344 <= this["_maxIndexRetries"];
        _0x41d344 += 0x1
      ) {
        let _0x1eea8c = await this["_databaseCall"](() =>
          this["_dbAdapter"]["getIndexState"](_0x485c8e["unitID"]),
        );
        if (
          await this["_databaseCall"](() =>
            this["_dbAdapter"]["getRevision"](
              _0x485c8e["unitID"],
              _0x485c8e["revision"],
            ),
          )
        )
          return { status: "already-indexed", revision: _0x485c8e["revision"] };
        let _0x55d941 = _0x1d80d5(_0x1eea8c),
          _0xe325c5 = await this["_databaseCall"](() =>
            this["_dbAdapter"]["appendRevision"](_0x55d941, {
              expectedLatestRevision: _0x1eea8c?.["latestRevision"] ?? 0x0,
            }),
          );
        if (_0xe325c5["status"] === "appended")
          return { status: "indexed", revision: _0x55d941["revision"] };
        if (_0xe325c5["status"] === "already-indexed")
          return { status: "already-indexed", revision: _0x55d941["revision"] };
      }
      throw new t["CollabError"](
        "ADAPTER_FAILURE",
        "History\x20Database\x20Adapter\x20CAS\x20retries\x20were\x20exhausted",
        { retryable: !0x0 },
      );
    }
    async ["_historyData"](_0x297879) {
      let _0x331319 = "";
      if (_0x297879["restoredRevision"] !== void 0x0) {
        let _0x338509 = await this["_databaseCall"](() =>
          this["_dbAdapter"]["getRevision"](
            _0x297879["unitID"],
            _0x297879["restoredRevision"],
          ),
        );
        _0x331319 = _0x338509 ? String(_0x338509["committedAt"]) : "";
      }
      return {
        userID: _0x297879["userID"],
        unitID: _0x297879["unitID"],
        command: _0x297879["commands"],
        createTime: String(_0x297879["createdAt"]),
        recoverTime: _0x331319,
        startRevision: _0x297879["startRevision"],
        endRevision: _0x297879["endRevision"],
        ...b(_0x297879),
        origin: _0x297879["origin"],
        startRevCreateTime: _0x297879["startRevisionCreatedAt"],
        endRevCreateTime: _0x297879["endRevisionCreatedAt"],
        userIDs: _0x297879["userIDs"],
      };
    }
    async ["_resolveUsers"](_0x218d68, _0x151901, _0x537866) {
      let _0x187847 = w(_0x218d68["filter"](Boolean)),
        _0x516713 = [];
      if (this["_userProvider"] && _0x187847["length"])
        try {
          _0x516713 = await this["_userProvider"]["getUsers"](_0x187847, {
            ..._0x151901,
            request: _0x537866,
          });
        } catch (_0x3e327f) {
          this["_logError"]("History\x20user\x20lookup\x20failed", _0x3e327f);
        }
      let _0x50ce79 = {};
      for (let _0x47a4c7 of _0x516713)
        _0x47a4c7?.["userID"] &&
          _0x187847["includes"](_0x47a4c7["userID"]) &&
          (_0x50ce79[_0x47a4c7["userID"]] = _0x47a4c7);
      for (let _0x33ff91 of _0x187847) _0x50ce79[_0x33ff91] ??= x(_0x33ff91);
      return _0x50ce79;
    }
    ["_enqueue"](_0xd45020, _0x5a44a3) {
      if (this["_state"] !== "running") return;
      let _0x44f31d = (this["_indexQueues"]["get"](_0xd45020) ??
        Promise["resolve"]())
        ["catch"](() => void 0x0)
        ["then"](_0x5a44a3)
        ["then"](() => void 0x0)
        ["catch"]((_0x5ccd9d) => {
          this["_logError"](
            "History\x20background\x20indexing\x20failed",
            _0x5ccd9d,
          );
        })
        ["finally"](() => {
          this["_indexQueues"]["get"](_0xd45020) === _0x44f31d &&
            this["_indexQueues"]["delete"](_0xd45020);
        });
      this["_indexQueues"]["set"](_0xd45020, _0x44f31d);
    }
    ["_call"](_0x48d1a4) {
      this["_assertRunning"]();
      let _0x541e2d = _0x48d1a4();
      return (
        this["_calls"]["add"](_0x541e2d),
        _0x541e2d["then"](
          () => this["_calls"]["delete"](_0x541e2d),
          () => this["_calls"]["delete"](_0x541e2d),
        ),
        _0x541e2d
      );
    }
    async ["_databaseCall"](_0x5f8da4) {
      try {
        return await _0x5f8da4();
      } catch (_0x3dfba8) {
        throw _0x3dfba8 instanceof t["CollabError"]
          ? _0x3dfba8
          : new t["CollabError"](
              "ADAPTER_FAILURE",
              "History\x20Database\x20Adapter\x20failed",
              { retryable: !0x0, cause: _0x3dfba8 },
            );
      }
    }
    ["_assertRunning"]() {
      if (this["_state"] !== "running")
        throw new t["CollabError"](
          "INTERNAL_ERROR",
          "History\x20Service\x20is\x20" + this["_state"],
          { retryable: !0x0 },
        );
    }
    ["_logError"](_0x3a75f0, _0x57bf9b) {
      try {
        this["_logger"]?.["error"](_0x3a75f0, {
          error:
            _0x57bf9b instanceof Error
              ? _0x57bf9b["message"]
              : String(_0x57bf9b),
        });
      } catch {}
    }
  };
function f(_0x8e428b) {
  return { ..._0x8e428b };
}
function p(_0xbb88b1) {
  if (!_0xbb88b1 || typeof _0xbb88b1 != "object")
    throw C("context\x20must\x20be\x20an\x20object");
  if (
    typeof _0xbb88b1["userID"] != "string" ||
    _0xbb88b1["userID"]["length"] === 0x0
  )
    throw C("userID\x20must\x20be\x20a\x20non-empty\x20string");
  if (
    _0xbb88b1["customData"] !== void 0x0 &&
    (_0xbb88b1["customData"] === null ||
      typeof _0xbb88b1["customData"] != "object" ||
      Array["isArray"](_0xbb88b1["customData"]))
  )
    throw C("customData\x20must\x20be\x20an\x20object");
  return {
    userID: _0xbb88b1["userID"],
    customData: _0xbb88b1["customData"] ?? Object["create"](null),
  };
}
function m(_0x5b8454) {
  if (!_0x5b8454) throw C("unitID\x20is\x20required");
}
function h(_0x37ef54, _0x2b4c99) {
  if (!Number["isSafeInteger"](_0x2b4c99) || _0x2b4c99 < 0x1)
    throw C(_0x37ef54 + "\x20must\x20be\x20a\x20positive\x20safe\x20integer");
}
function g(_0x33bc9d, _0x172aa7, _0x598d74, _0xb7a2cd) {
  if (
    (m(_0x33bc9d),
    h("revision", _0x598d74),
    !Number["isSafeInteger"](_0xb7a2cd) || _0xb7a2cd < 0x0)
  )
    throw C(
      "History\x20timestamp\x20must\x20be\x20a\x20non-negative\x20safe\x20integer",
    );
}
function _(_0x420ee0) {
  if (!_0x420ee0) return;
  let _0x267657 = Number(_0x420ee0);
  return (h("lastLabel", _0x267657), _0x267657);
}
function v(_0x107b00) {
  if (!_0x107b00) return 0x1;
  try {
    let _0x30ca84 = JSON["parse"](_0x107b00);
    return _0x30ca84["origin"] === 0x2 ? 0x2 : (_0x30ca84["origin"], 0x1);
  } catch {
    return 0x1;
  }
}
function y(_0x23e295) {
  let _0x12efab = _0x23e295["mutations"]["find"](
    (_0x10c452) => _0x10c452["id"] === u,
  );
  if (!_0x12efab) return {};
  try {
    let _0x1c14f4 = JSON["parse"](_0x12efab["data"]);
    return Number["isSafeInteger"](_0x1c14f4["revision"]) &&
      _0x1c14f4["revision"] >= 0x1
      ? { restoredRevision: _0x1c14f4["revision"] }
      : {};
  } catch {
    return {};
  }
}
function b(_0x11fab8) {
  return _0x11fab8["additionalFields"] === void 0x0
    ? _0x11fab8["restoredRevision"] === void 0x0
      ? {}
      : {
          additionalFields: JSON["stringify"]({
            restoredRevision: _0x11fab8["restoredRevision"],
          }),
        }
    : { additionalFields: _0x11fab8["additionalFields"] };
}
function x(_0x2b2560) {
  return {
    userID: _0x2b2560,
    name: _0x2b2560,
    avatar: "",
    anonymous: !0x0,
    canBindAnonymous: !0x1,
    phone: "",
    email: "",
    createTimestamp: 0x0,
  };
}
function S(_0x422ef7, _0x1087f0, _0x567de0) {
  return new t["CollabError"](
    "ADAPTER_FAILURE",
    "History\x20for\x20Unit\x20" +
      _0x422ef7 +
      "\x20cannot\x20index\x20revision\x20" +
      _0x1087f0 +
      "\x20after\x20" +
      _0x567de0,
    { retryable: !0x0 },
  );
}
function C(_0x2fd1f4) {
  return new t["CollabError"]("INVALID_REQUEST", _0x2fd1f4);
}
function w(_0x11c2be) {
  return [...new Set(_0x11c2be)];
}
((exports["DefaultHistoryPolicy"] = s),
  (exports["MemoryHistoryDatabaseAdapter"] = a),
  (exports["UniverHistoryService"] = d),
  (exports["buildHistoryRecords"] = n),
  (exports["selectHistoryRecords"] = r));
