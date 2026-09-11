Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
var e = Object["create"],
  t = Object["defineProperty"],
  n = Object["getOwnPropertyDescriptor"],
  r = Object["getOwnPropertyNames"],
  i = Object["getPrototypeOf"],
  a = Object["prototype"]["hasOwnProperty"],
  o = (_0x153e39, _0x5c0887, _0x4689f8, _0x16b6f9) => {
    if (
      (_0x5c0887 && typeof _0x5c0887 == "object") ||
      typeof _0x5c0887 == "function"
    ) {
      for (
        var _0x305b36 = r(_0x5c0887),
          _0x344ca8 = 0x0,
          _0x466f34 = _0x305b36["length"],
          _0x54a56c;
        _0x344ca8 < _0x466f34;
        _0x344ca8++
      )
        ((_0x54a56c = _0x305b36[_0x344ca8]),
          !a["call"](_0x153e39, _0x54a56c) &&
            _0x54a56c !== _0x4689f8 &&
            t(_0x153e39, _0x54a56c, {
              get: ((_0x3acfea) => _0x5c0887[_0x3acfea])["bind"](
                null,
                _0x54a56c,
              ),
              enumerable:
                !(_0x16b6f9 = n(_0x5c0887, _0x54a56c)) ||
                _0x16b6f9["enumerable"],
            }));
    }
    return _0x153e39;
  },
  s = (_0x46e73f, _0x41f64d, _0x5028c7) => (
    (_0x5028c7 = _0x46e73f == null ? {} : e(i(_0x46e73f))),
    o(
      _0x41f64d || !_0x46e73f || !_0x46e73f["__esModule"]
        ? t(_0x5028c7, "default", { value: _0x46e73f, enumerable: !0x0 })
        : _0x5028c7,
      _0x46e73f,
    )
  );
let c = require("libsql");
c = s(c, 0x1);
let l = require("@univerjs-pro/collaboration-history-service");
var u = 0x1388,
  d = "history",
  f = 0x1,
  p = ["collaboration_history_revisions"],
  m = class {
    ["_database"];
    ["_disposed"] = !0x1;
    constructor(_0x40f0f0) {
      (g(_0x40f0f0),
        (this["_database"] = new c["default"](_0x40f0f0["filename"], {
          timeout: _0x40f0f0["busyTimeoutMs"] ?? u,
        })));
      try {
        (this["_database"]["exec"](
          "PRAGMA\x20busy_timeout\x20=\x20" +
            (_0x40f0f0["busyTimeoutMs"] ?? u) +
            ";",
        ),
          this["_initializeSchema"]());
      } catch (_0x332db7) {
        throw (this["_database"]["close"](), _0x332db7);
      }
    }
    async ["getIndexState"](_0x5351c7) {
      this["_assertOpen"]();
      let _0x5d2fb0 = this["_latestEntry"](_0x5351c7);
      if (!_0x5d2fb0) return null;
      let _0x17a18d = this["_getEntry"](
        _0x5351c7,
        _0x5d2fb0["historyRevision"],
      );
      if (!_0x17a18d)
        throw Error(
          "SQLite\x20History\x20contains\x20an\x20invalid\x20history\x20revision",
        );
      return {
        unitID: _0x5351c7,
        type: _0x5d2fb0["type"],
        latestRevision: _0x5d2fb0["revision"],
        currentHistoryRevision: _0x5d2fb0["historyRevision"],
        currentHistoryCreatedAt: _0x17a18d["committedAt"],
        forceNextHistory: _0x5d2fb0["forceNextHistory"],
      };
    }
    async ["getRevision"](_0x26cee6, _0xbd0fda) {
      return (this["_assertOpen"](), this["_getEntry"](_0x26cee6, _0xbd0fda));
    }
    async ["appendRevision"](_0x3701f2, _0x33e23d) {
      return (
        this["_assertOpen"](),
        v(_0x3701f2),
        this["_transaction"](() => {
          if (this["_getEntry"](_0x3701f2["unitID"], _0x3701f2["revision"]))
            return { status: "already-indexed" };
          let _0x3f3f2b =
            this["_database"]
              ["prepare"](
                "SELECT\x20revision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_history_revisions\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20revision\x20DESC\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LIMIT\x201",
              )
              ["get"](_0x3701f2["unitID"])?.["revision"] ?? 0x0;
          return _0x3f3f2b !== _0x33e23d["expectedLatestRevision"] ||
            _0x3701f2["revision"] !== _0x3f3f2b + 0x1
            ? { status: "revision-conflict", actualLatestRevision: _0x3f3f2b }
            : (this["_database"]
                ["prepare"](
                  "INSERT\x20INTO\x20collaboration_history_revisions\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(unit_id,\x20type,\x20revision,\x20user_id,\x20commands_json,\x20committed_at,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20additional_fields,\x20origin,\x20history_revision,\x20force_next_history,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20restored_revision)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)",
                )
                ["run"](
                  _0x3701f2["unitID"],
                  _0x3701f2["type"],
                  _0x3701f2["revision"],
                  _0x3701f2["userID"],
                  JSON["stringify"](_0x3701f2["commands"]),
                  _0x3701f2["committedAt"],
                  _0x3701f2["additionalFields"] ?? null,
                  _0x3701f2["origin"],
                  _0x3701f2["historyRevision"],
                  +!!_0x3701f2["forceNextHistory"],
                  _0x3701f2["restoredRevision"] ?? null,
                ),
              { status: "appended" });
        })
      );
    }
    async ["listRecords"](_0x1a0d02, _0x4a1162) {
      return (
        this["_assertOpen"](),
        (0x0, l["selectHistoryRecords"])(
          (0x0, l["buildHistoryRecords"])(
            this["_database"]
              ["prepare"](
                "SELECT\x20unit_id,\x20type,\x20revision,\x20user_id,\x20commands_json,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20committed_at,\x20additional_fields,\x20origin,\x20history_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20force_next_history,\x20restored_revision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_history_revisions\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20revision\x20ASC",
              )
              ["all"](_0x1a0d02)
              ["map"](h),
          ),
          _0x4a1162,
        )
      );
    }
    async ["listCreators"](_0x217c5f) {
      this["_assertOpen"]();
      let _0x5e7dd3 = this["_database"]
          ["prepare"](
            "SELECT\x20unit_id,\x20type,\x20revision,\x20user_id,\x20commands_json,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20committed_at,\x20additional_fields,\x20origin,\x20history_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20force_next_history,\x20restored_revision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_history_revisions\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20revision\x20ASC",
          )
          ["all"](_0x217c5f)
          ["map"](h),
        _0x53a216 = new Map();
      for (let _0x6b1e7d of _0x5e7dd3) {
        let _0x15b206 = _0x53a216["get"](_0x6b1e7d["userID"]) ?? new Set();
        (_0x15b206["add"](_0x6b1e7d["origin"]),
          _0x53a216["set"](_0x6b1e7d["userID"], _0x15b206));
      }
      return [..._0x53a216]["map"](([_0x19c741, _0x4b36b6]) => ({
        userID: _0x19c741,
        origins: [..._0x4b36b6],
      }));
    }
    async ["dispose"]() {
      this["_disposed"] ||
        ((this["_disposed"] = !0x0), this["_database"]["close"]());
    }
    ["_initializeSchema"]() {
      this["_transaction"](() => {
        if (!this["_hasTable"]("collaboration_schema_versions")) {
          if (this["_hasAnyOwnedTable"]())
            throw _(
              "SQLite\x20History\x20tables\x20exist\x20without\x20a\x20schema\x20version",
            );
          this["_database"]["exec"](
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_schema_versions\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20version\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(version\x20>=\x201)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
          );
        }
        let _0x188735 = this["_database"]
          ["prepare"](
            "SELECT\x20version\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_schema_versions\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20component\x20=\x20?",
          )
          ["get"](d);
        if (_0x188735) {
          if (_0x188735["version"] !== f)
            throw _(
              "SQLite\x20History\x20schema\x20version\x20" +
                _0x188735["version"] +
                "\x20is\x20not\x20supported",
            );
          let _0x3445ef = p["filter"](
            (_0x531d41) => !this["_hasTable"](_0x531d41),
          );
          if (_0x3445ef["length"] > 0x0)
            throw _(
              "SQLite\x20History\x20schema\x20v1\x20is\x20incomplete:\x20missing\x20" +
                _0x3445ef["join"](",\x20"),
            );
          return;
        }
        if (this["_hasAnyOwnedTable"]())
          throw _(
            "SQLite\x20History\x20tables\x20exist\x20without\x20a\x20schema\x20version",
          );
        this["_database"]["exec"](
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_history_revisions\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20revision\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(revision\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20commands_json\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20committed_at\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(committed_at\x20>=\x200),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20additional_fields\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20origin\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20history_revision\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(history_revision\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20force_next_history\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20restored_revision\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(unit_id,\x20revision)\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20INDEX\x20collaboration_history_record_lookup\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20collaboration_history_revisions(unit_id,\x20history_revision\x20DESC);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20INDEX\x20collaboration_history_creator_lookup\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20collaboration_history_revisions(unit_id,\x20user_id);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20collaboration_schema_versions\x20(component,\x20version)\x0a\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(\x27history\x27,\x201);\x0a\x20\x20\x20\x20\x20\x20",
        );
      });
    }
    ["_hasTable"](_0x4591c2) {
      return !!this["_database"]
        ["prepare"](
          "SELECT\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20sqlite_schema\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20type\x20=\x20\x27table\x27\x20AND\x20name\x20=\x20?",
        )
        ["get"](_0x4591c2);
    }
    ["_hasAnyOwnedTable"]() {
      return p["some"]((_0x28a759) => this["_hasTable"](_0x28a759));
    }
    ["_latestEntry"](_0x13c535) {
      let _0x185ff2 = this["_database"]
        ["prepare"](
          "SELECT\x20unit_id,\x20type,\x20revision,\x20user_id,\x20commands_json,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20committed_at,\x20additional_fields,\x20origin,\x20history_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20force_next_history,\x20restored_revision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_history_revisions\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20revision\x20DESC\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20LIMIT\x201",
        )
        ["get"](_0x13c535);
      return _0x185ff2 ? h(_0x185ff2) : null;
    }
    ["_getEntry"](_0x50d421, _0x400633) {
      let _0x298381 = this["_database"]
        ["prepare"](
          "SELECT\x20unit_id,\x20type,\x20revision,\x20user_id,\x20commands_json,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20committed_at,\x20additional_fields,\x20origin,\x20history_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20force_next_history,\x20restored_revision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_history_revisions\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x20AND\x20revision\x20=\x20?",
        )
        ["get"](_0x50d421, _0x400633);
      return _0x298381 ? h(_0x298381) : null;
    }
    ["_transaction"](_0x35d7c1) {
      this["_database"]["exec"]("BEGIN\x20IMMEDIATE;");
      try {
        let _0x25e30c = _0x35d7c1();
        return (this["_database"]["exec"]("COMMIT;"), _0x25e30c);
      } catch (_0x5d16fb) {
        try {
          this["_database"]["exec"]("ROLLBACK;");
        } catch {}
        throw _0x5d16fb;
      }
    }
    ["_assertOpen"]() {
      if (this["_disposed"])
        throw Error(
          "SQLite\x20History\x20Database\x20Adapter\x20is\x20disposed",
        );
    }
  };
function h(_0x5a6d70) {
  let _0x3058df = JSON["parse"](_0x5a6d70["commands_json"]);
  if (
    !Array["isArray"](_0x3058df) ||
    _0x3058df["some"]((_0x32c363) => typeof _0x32c363 != "string")
  )
    throw Error("SQLite\x20History\x20contains\x20invalid\x20commands");
  if (
    _0x5a6d70["origin"] !== 0x0 &&
    _0x5a6d70["origin"] !== 0x1 &&
    _0x5a6d70["origin"] !== 0x2
  )
    throw Error("SQLite\x20History\x20contains\x20an\x20invalid\x20origin");
  return {
    unitID: _0x5a6d70["unit_id"],
    type: _0x5a6d70["type"],
    revision: _0x5a6d70["revision"],
    userID: _0x5a6d70["user_id"],
    commands: _0x3058df,
    committedAt: _0x5a6d70["committed_at"],
    ...(_0x5a6d70["additional_fields"] === null
      ? {}
      : { additionalFields: _0x5a6d70["additional_fields"] }),
    origin: _0x5a6d70["origin"],
    historyRevision: _0x5a6d70["history_revision"],
    forceNextHistory: _0x5a6d70["force_next_history"] === 0x1,
    ...(_0x5a6d70["restored_revision"] === null
      ? {}
      : { restoredRevision: _0x5a6d70["restored_revision"] }),
  };
}
function g(_0x17cd80) {
  if (!_0x17cd80?.["filename"])
    throw TypeError(
      "SQLiteHistoryDatabaseAdapter\x20requires\x20a\x20filename",
    );
  if (
    _0x17cd80["busyTimeoutMs"] !== void 0x0 &&
    (!Number["isSafeInteger"](_0x17cd80["busyTimeoutMs"]) ||
      _0x17cd80["busyTimeoutMs"] < 0x0)
  )
    throw TypeError(
      "busyTimeoutMs\x20must\x20be\x20a\x20non-negative\x20safe\x20integer",
    );
}
function _(_0x5e989b) {
  return Error(_0x5e989b);
}
function v(_0x47df8f) {
  if (
    !_0x47df8f["unitID"] ||
    !_0x47df8f["userID"] ||
    !Number["isSafeInteger"](_0x47df8f["revision"]) ||
    _0x47df8f["revision"] < 0x1 ||
    !Number["isSafeInteger"](_0x47df8f["historyRevision"]) ||
    _0x47df8f["historyRevision"] < 0x1 ||
    _0x47df8f["historyRevision"] > _0x47df8f["revision"] ||
    !Number["isSafeInteger"](_0x47df8f["committedAt"]) ||
    _0x47df8f["committedAt"] < 0x0
  )
    throw TypeError("History\x20revision\x20entry\x20is\x20invalid");
}
exports["SQLiteHistoryDatabaseAdapter"] = m;
