Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
var e = Object["create"],
  t = Object["defineProperty"],
  n = Object["getOwnPropertyDescriptor"],
  r = Object["getOwnPropertyNames"],
  i = Object["getPrototypeOf"],
  a = Object["prototype"]["hasOwnProperty"],
  o = (_0x1af338, _0xda665, _0x1817a8, _0xdd8ca0) => {
    if (
      (_0xda665 && typeof _0xda665 == "object") ||
      typeof _0xda665 == "function"
    ) {
      for (
        var _0x2f8076 = r(_0xda665),
          _0x16f4c2 = 0x0,
          _0xfd022d = _0x2f8076["length"],
          _0x3b1dc2;
        _0x16f4c2 < _0xfd022d;
        _0x16f4c2++
      )
        ((_0x3b1dc2 = _0x2f8076[_0x16f4c2]),
          !a["call"](_0x1af338, _0x3b1dc2) &&
            _0x3b1dc2 !== _0x1817a8 &&
            t(_0x1af338, _0x3b1dc2, {
              get: ((_0x25a9db) => _0xda665[_0x25a9db])["bind"](
                null,
                _0x3b1dc2,
              ),
              enumerable:
                !(_0xdd8ca0 = n(_0xda665, _0x3b1dc2)) ||
                _0xdd8ca0["enumerable"],
            }));
    }
    return _0x1af338;
  },
  s = (_0x37311c, _0x56256f, _0x53aa82) => (
    (_0x53aa82 = _0x37311c == null ? {} : e(i(_0x37311c))),
    o(
      _0x56256f || !_0x37311c || !_0x37311c["__esModule"]
        ? t(_0x53aa82, "default", { value: _0x37311c, enumerable: !0x0 })
        : _0x53aa82,
      _0x37311c,
    )
  );
let c = require("libsql");
c = s(c, 0x1);
let l = require("@univerjs-pro/collaboration-service");
var u = 0x1388,
  d = "__univerCollaborationBinary",
  f = "core",
  p = 0x1,
  m = [
    "collaboration_units",
    "collaboration_unit_tombstones",
    "collaboration_snapshots",
    "collaboration_changesets",
    "collaboration_sheet_blocks",
    "collaboration_resources",
  ],
  h = class {
    ["_database"];
    ["_disposed"] = !0x1;
    constructor(_0x386c87) {
      (g(_0x386c87),
        (this["_database"] = new c["default"](_0x386c87["filename"], {
          timeout: _0x386c87["busyTimeoutMs"] ?? u,
        })));
      try {
        (this["_database"]["exec"]("PRAGMA\x20foreign_keys\x20=\x20ON;"),
          this["_database"]["exec"](
            "PRAGMA\x20busy_timeout\x20=\x20" +
              (_0x386c87["busyTimeoutMs"] ?? u) +
              ";",
          ),
          this["_initializeSchema"]());
      } catch (_0x3466ab) {
        throw (this["_database"]["close"](), _0x3466ab);
      }
    }
    async ["getUnit"](_0x679597, _0x39e41e) {
      this["_assertOpen"]();
      let _0x52207e = this["_database"]
        ["prepare"](
          "SELECT\x20unit_id,\x20type,\x20head_revision,\x20soft_deleted_at_ms\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x20AND\x20soft_deleted_at_ms\x20IS\x20NULL",
        )
        ["get"](_0x39e41e);
      return _0x52207e ? v(_0x52207e) : null;
    }
    async ["getSnapshot"](_0x5ea946, _0x4c10f7, _0x104925) {
      this["_assertOpen"]();
      let _0x1430ad = _0x104925?.["revision"];
      if (_0x1430ad !== void 0x0 && _0x1430ad < 0x0)
        throw y("Snapshot\x20revision\x20cannot\x20be\x20negative");
      let _0x518e17 = this["_getActiveUnitRow"](_0x4c10f7);
      if (!_0x518e17) return null;
      let _0x3da0b5 =
          _0x1430ad === void 0x0 || _0x1430ad === 0x0
            ? _0x518e17["head_revision"]
            : Math["min"](_0x1430ad, _0x518e17["head_revision"]),
        _0x51ef38 = this["_database"]
          ["prepare"](
            "SELECT\x20collaboration_snapshots.payload_json\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_snapshots\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20JOIN\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20collaboration_units.unit_id\x20=\x20collaboration_snapshots.unit_id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20collaboration_snapshots.unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20collaboration_snapshots.revision\x20<=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20collaboration_units.soft_deleted_at_ms\x20IS\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20collaboration_snapshots.revision\x20DESC\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20LIMIT\x201",
          )
          ["get"](_0x4c10f7, _0x3da0b5);
      return _0x51ef38 ? C(_0x51ef38["payload_json"]) : null;
    }
    async ["getChangesets"](_0xb453d0, _0x2d0b4c, _0x4f702a) {
      if (
        (this["_assertOpen"](),
        _0x4f702a["from"] < 0x0 || _0x4f702a["to"] < 0x0)
      )
        throw y("Changeset\x20range\x20revisions\x20cannot\x20be\x20negative");
      let _0x56cf97 = this["_database"]
          ["prepare"](
            "SELECT\x20collaboration_units.head_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20collaboration_changesets.payload_json\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20collaboration_changesets\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20collaboration_changesets.unit_id\x20=\x20collaboration_units.unit_id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20collaboration_changesets.revision\x20>\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20collaboration_changesets.revision\x20<=\x20CASE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHEN\x20?\x20=\x200\x20THEN\x20collaboration_units.head_revision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ELSE\x20MIN(?,\x20collaboration_units.head_revision)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20END\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20collaboration_units.unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20collaboration_units.soft_deleted_at_ms\x20IS\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20collaboration_changesets.revision\x20ASC",
          )
          ["all"](
            _0x4f702a["from"],
            _0x4f702a["to"],
            _0x4f702a["to"],
            _0x2d0b4c,
          ),
        _0x4513bb = _0x56cf97[0x0];
      return _0x4513bb
        ? {
            changesets: _0x56cf97["flatMap"]((_0x4ecbcd) =>
              _0x4ecbcd["payload_json"] ? [C(_0x4ecbcd["payload_json"])] : [],
            ),
            latestRevision: _0x4513bb["head_revision"],
          }
        : { changesets: [], latestRevision: 0x0 };
    }
    async ["createUnit"](_0x1b9222, _0x5c2fd9) {
      (this["_assertOpen"](), _(_0x5c2fd9));
      let _0x4d73c4 = S(_0x5c2fd9["snapshot"]),
        _0x170a49 = (_0x5c2fd9["sheetBlocks"] ?? [])["map"]((_0x4105b3) => ({
          id: _0x4105b3["id"],
          payload: S(_0x4105b3),
        }));
      return this["_transaction"](() => {
        if (this["_hasTombstone"](_0x5c2fd9["record"]["unitID"]))
          throw y("Cannot\x20reuse\x20a\x20hard-delete d\x20unit\x20ID");
        let _0x3b5cef = this["_getStoredUnitRow"](
          _0x5c2fd9["record"]["unitID"],
        );
        if (_0x3b5cef) {
          if (_0x3b5cef["soft_deleted_at_ms"] !== null)
            throw y("Cannot\x20reuse\x20a\x20soft-delete d\x20unit\x20ID");
          return { status: "already-exists", record: v(_0x3b5cef) };
        }
        return (
          this["_database"]
            ["prepare"](
              "INSERT\x20INTO\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(unit_id,\x20type,\x20head_revision,\x20soft_deleted_at_ms)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x201,\x20NULL)",
            )
            ["run"](_0x5c2fd9["record"]["unitID"], _0x5c2fd9["record"]["type"]),
          this["_writeSheetBlocks"](_0x5c2fd9["record"]["unitID"], _0x170a49),
          this["_database"]
            ["prepare"](
              "INSERT\x20INTO\x20collaboration_snapshots\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(unit_id,\x20revision,\x20type,\x20payload_json)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x201,\x20?,\x20?)",
            )
            ["run"](
              _0x5c2fd9["record"]["unitID"],
              _0x5c2fd9["record"]["type"],
              _0x4d73c4,
            ),
          { status: "created", record: { ..._0x5c2fd9["record"] } }
        );
      });
    }
    async ["deleteUnits"](_0x344ffb, _0x16c9bb) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let _0x5d895d = x(_0x16c9bb["unitIDs"])["map"]((_0x3d460a) => {
              let _0x41e0c2 = this["_getStoredUnitRow"](_0x3d460a);
              if (!_0x41e0c2) {
                if (_0x16c9bb["hardDelete"] && this["_hasTombstone"](_0x3d460a))
                  return { unitID: _0x3d460a, status: "already-hard-delete d" };
                throw new l["CollabError"](
                  "UNIT_NOT_FOUND",
                  "Cannot\x20delete\x20a\x20missing\x20unit",
                );
              }
              return _0x16c9bb["hardDelete"]
                ? { unitID: _0x3d460a, status: "hard-delete d" }
                : {
                    unitID: _0x3d460a,
                    status:
                      _0x41e0c2["soft_deleted_at_ms"] === null
                        ? "soft-delete d"
                        : "already-soft-delete d",
                  };
            }),
            _0x1124aa = this["_database"]["prepare"](
              "UPDATE\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20soft_deleted_at_ms\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x20AND\x20soft_deleted_at_ms\x20IS\x20NULL",
            ),
            _0xfbf408 = this["_database"]["prepare"](
              "INSERT\x20INTO\x20collaboration_unit_tombstones\x20(unit_id,\x20purged_at)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?)",
            ),
            _0x143da6 = this["_database"]["prepare"](
              "DELETE\x20FROM\x20collaboration_units\x20WHERE\x20unit_id\x20=\x20?",
            ),
            _0x333e9e = Date["now"]();
          for (let _0xfbfd4a of _0x5d895d)
            _0xfbfd4a["status"] === "soft-delete d"
              ? _0x1124aa["run"](_0x333e9e, _0xfbfd4a["unitID"])
              : _0xfbfd4a["status"] === "hard-delete d" &&
                (_0xfbf408["run"](_0xfbfd4a["unitID"], _0x333e9e),
                _0x143da6["run"](_0xfbfd4a["unitID"]));
          return { units: _0x5d895d };
        })
      );
    }
    async ["recoverUnits"](_0x55e10a, _0xec6578) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let _0x43d06a = x(_0xec6578["unitIDs"])["map"]((_0x278eef) => {
              let _0x2dbc16 = this["_getStoredUnitRow"](_0x278eef);
              if (!_0x2dbc16)
                throw this["_hasTombstone"](_0x278eef)
                  ? y("Cannot\x20recover\x20a\x20hard-delete d\x20unit")
                  : new l["CollabError"](
                      "UNIT_NOT_FOUND",
                      "Cannot\x20recover\x20a\x20missing\x20unit",
                    );
              return {
                unitID: _0x278eef,
                status:
                  _0x2dbc16["soft_deleted_at_ms"] === null
                    ? "already-active"
                    : "recovered",
              };
            }),
            _0x1eaf35 = this["_database"]["prepare"](
              "UPDATE\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20soft_deleted_at_ms\x20=\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x20AND\x20soft_deleted_at_ms\x20IS\x20NOT\x20NULL",
            );
          for (let _0x1094d4 of _0x43d06a)
            _0x1094d4["status"] === "recovered" &&
              _0x1eaf35["run"](_0x1094d4["unitID"]);
          return { units: _0x43d06a };
        })
      );
    }
    async ["commitChangeset"](_0x5a2421, _0x86f7bd) {
      this["_assertOpen"]();
      let _0x57e3c2 = S(_0x86f7bd["changeset"]);
      return this["_transaction"](() => {
        let { changeset: _0x4702b8 } = _0x86f7bd,
          _0x1631b6 = this["_getActiveUnitRow"](_0x4702b8["unitID"]);
        if (!_0x1631b6)
          throw new l["CollabError"](
            "UNIT_NOT_FOUND",
            "Cannot\x20commit\x20to\x20a\x20missing\x20unit",
          );
        if (_0x1631b6["head_revision"] !== _0x4702b8["revision"] - 0x1)
          return {
            status: "revision-mismatch",
            actualHeadRevision: _0x1631b6["head_revision"],
          };
        if (
          (this["_database"]
            ["prepare"](
              "INSERT\x20INTO\x20collaboration_changesets\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(unit_id,\x20revision,\x20base_revision,\x20sid,\x20req_id,\x20payload_json)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?)",
            )
            ["run"](
              _0x4702b8["unitID"],
              _0x4702b8["revision"],
              _0x4702b8["baseRev"],
              _0x4702b8["sid"],
              _0x4702b8["reqId"],
              _0x57e3c2,
            ),
          this["_database"]
            ["prepare"](
              "UPDATE\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20head_revision\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20head_revision\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20soft_deleted_at_ms\x20IS\x20NULL",
            )
            ["run"](
              _0x4702b8["revision"],
              _0x4702b8["unitID"],
              _0x4702b8["revision"] - 0x1,
            )["changes"] !== 0x1)
        )
          throw new l["CollabError"](
            "INTERNAL_ERROR",
            "SQLite\x20head\x20changed\x20inside\x20an\x20exclusive\x20write\x20transaction",
          );
        return {
          status: "committed",
          changeset: C(_0x57e3c2),
          headRevision: _0x4702b8["revision"],
        };
      });
    }
    async ["saveSnapshot"](_0x4a6b81, _0x5abd6b) {
      this["_assertOpen"]();
      let _0x294e96 = S(_0x5abd6b["snapshot"]),
        _0x28b572 = (_0x5abd6b["sheetBlocks"] ?? [])["map"]((_0x44ef0c) => ({
          id: _0x44ef0c["id"],
          payload: S(_0x44ef0c),
        }));
      this["_transaction"](() => {
        let _0x16cf28 = this["_getActiveUnitRow"](
          _0x5abd6b["snapshot"]["unitID"],
        );
        if (!_0x16cf28)
          throw new l["CollabError"](
            "UNIT_NOT_FOUND",
            "Cannot\x20snapshot\x20a\x20missing\x20unit",
          );
        if (
          _0x5abd6b["snapshot"]["type"] !== _0x16cf28["type"] ||
          _0x5abd6b["snapshot"]["rev"] < 0x1 ||
          _0x5abd6b["snapshot"]["rev"] > _0x16cf28["head_revision"]
        )
          throw y(
            "Snapshot\x20does\x20not\x20match\x20the\x20stored\x20unit\x20head",
          );
        (this["_writeSheetBlocks"](_0x5abd6b["snapshot"]["unitID"], _0x28b572),
          this["_database"]
            ["prepare"](
              "INSERT\x20INTO\x20collaboration_snapshots\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(unit_id,\x20revision,\x20type,\x20payload_json)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(unit_id,\x20revision)\x20DO\x20UPDATE\x20SET\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x20=\x20excluded.type,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20payload_json\x20=\x20excluded.payload_json",
            )
            ["run"](
              _0x5abd6b["snapshot"]["unitID"],
              _0x5abd6b["snapshot"]["rev"],
              _0x5abd6b["snapshot"]["type"],
              _0x294e96,
            ));
      });
    }
    async ["getSheetBlock"](_0x1713cc, _0x155d66, _0x53d539) {
      this["_assertOpen"]();
      let _0x4a6948 = this["_database"]
        ["prepare"](
          "SELECT\x20collaboration_sheet_blocks.payload_json\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_sheet_blocks\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20JOIN\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20collaboration_units.unit_id\x20=\x20collaboration_sheet_blocks.unit_id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20collaboration_sheet_blocks.unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20collaboration_sheet_blocks.block_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20collaboration_units.soft_deleted_at_ms\x20IS\x20NULL",
        )
        ["get"](_0x155d66, _0x53d539);
      return _0x4a6948 ? C(_0x4a6948["payload_json"]) : null;
    }
    async ["dispose"]() {
      this["_disposed"] ||
        ((this["_disposed"] = !0x0), this["_database"]["close"]());
    }
    ["_initializeSchema"]() {
      this["_transaction"](() => {
        if (!this["_hasTable"]("collaboration_schema_versions")) {
          if (this["_hasAnyCoreTable"]())
            throw b(
              "SQLite\x20collaboration\x20core\x20tables\x20exist\x20without\x20a\x20schema\x20version",
            );
          this["_database"]["exec"](
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_schema_versions\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20version\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(version\x20>=\x201)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
          );
        }
        let _0x30ec1c = this["_database"]
          ["prepare"](
            "SELECT\x20version\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_schema_versions\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20component\x20=\x20?",
          )
          ["get"](f);
        if (_0x30ec1c) {
          if (_0x30ec1c["version"] !== p)
            throw b(
              "SQLite\x20collaboration\x20core\x20schema\x20version\x20" +
                _0x30ec1c["version"] +
                "\x20is\x20not\x20supported",
            );
          let _0x51c57d = m["filter"](
            (_0xe7c1b3) => !this["_hasTable"](_0xe7c1b3),
          );
          if (_0x51c57d["length"] > 0x0)
            throw b(
              "SQLite\x20collaboration\x20core\x20schema\x20v" +
                p +
                "\x20is\x20incomplete:\x20missing\x20" +
                _0x51c57d["join"](",\x20"),
            );
          return;
        }
        if (this["_hasAnyCoreTable"]())
          throw b(
            "SQLite\x20collaboration\x20core\x20tables\x20exist\x20without\x20a\x20schema\x20version",
          );
        this["_database"]["exec"](
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_units\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20head_revision\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(head_revision\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20soft_deleted_at_ms\x20INTEGER\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_unit_tombstones\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20purged_at\x20INTEGER\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_snapshots\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20revision\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(revision\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20payload_json\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(unit_id,\x20revision),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FOREIGN\x20KEY\x20(unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20REFERENCES\x20collaboration_units(unit_id)\x20ON\x20DELETE\x20CASCADE\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_changesets\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20revision\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(revision\x20>=\x202),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20base_revision\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(base_revision\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sid\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20req_id\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(req_id\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20payload_json\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(unit_id,\x20revision),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20UNIQUE\x20(unit_id,\x20sid,\x20req_id),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FOREIGN\x20KEY\x20(unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20REFERENCES\x20collaboration_units(unit_id)\x20ON\x20DELETE\x20CASCADE\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_sheet_blocks\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20block_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20payload_json\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(unit_id,\x20block_id),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FOREIGN\x20KEY\x20(unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20REFERENCES\x20collaboration_units(unit_id)\x20ON\x20DELETE\x20CASCADE\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_resources\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20resource_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20payload_json\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(unit_id,\x20resource_id),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FOREIGN\x20KEY\x20(unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20REFERENCES\x20collaboration_units(unit_id)\x20ON\x20DELETE\x20CASCADE\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20INDEX\x20collaboration_snapshots_nearest_revision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20collaboration_snapshots(unit_id,\x20revision\x20DESC);\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20INDEX\x20collaboration_changesets_revision_range\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20collaboration_changesets(unit_id,\x20revision\x20ASC);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20collaboration_schema_versions\x20(component,\x20version)\x0a\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(\x27core\x27,\x201);\x0a\x20\x20\x20\x20\x20\x20",
        );
      });
    }
    ["_getActiveUnitRow"](_0x387ca0) {
      return (
        this["_database"]
          ["prepare"](
            "SELECT\x20unit_id,\x20type,\x20head_revision,\x20soft_deleted_at_ms\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?\x20AND\x20soft_deleted_at_ms\x20IS\x20NULL",
          )
          ["get"](_0x387ca0) ?? null
      );
    }
    ["_getStoredUnitRow"](_0x109e4d) {
      return (
        this["_database"]
          ["prepare"](
            "SELECT\x20unit_id,\x20type,\x20head_revision,\x20soft_deleted_at_ms\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20unit_id\x20=\x20?",
          )
          ["get"](_0x109e4d) ?? null
      );
    }
    ["_hasTombstone"](_0x433802) {
      return !!this["_database"]
        ["prepare"](
          "SELECT\x201\x20FROM\x20collaboration_unit_tombstones\x20WHERE\x20unit_id\x20=\x20?",
        )
        ["get"](_0x433802);
    }
    ["_hasTable"](_0x4ab208) {
      return !!this["_database"]
        ["prepare"](
          "SELECT\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20sqlite_schema\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20type\x20=\x20\x27table\x27\x20AND\x20name\x20=\x20?",
        )
        ["get"](_0x4ab208);
    }
    ["_hasAnyCoreTable"]() {
      return m["some"]((_0x1b470b) => this["_hasTable"](_0x1b470b));
    }
    ["_writeSheetBlocks"](_0x362e9a, _0x2cb2e5) {
      let _0x5383c7 = this["_database"]["prepare"](
        "INSERT\x20INTO\x20collaboration_sheet_blocks\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20(unit_id,\x20block_id,\x20payload_json)\x0a\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?)\x0a\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(unit_id,\x20block_id)\x20DO\x20UPDATE\x20SET\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20payload_json\x20=\x20excluded.payload_json",
      );
      for (let _0x12572d of _0x2cb2e5)
        _0x5383c7["run"](_0x362e9a, _0x12572d["id"], _0x12572d["payload"]);
    }
    ["_transaction"](_0x25603b) {
      this["_database"]["exec"]("BEGIN\x20IMMEDIATE;");
      try {
        let _0x27db5f = _0x25603b();
        return (this["_database"]["exec"]("COMMIT;"), _0x27db5f);
      } catch (_0x5a60ee) {
        throw (
          this["_database"]["inTransaction"] &&
            this["_database"]["exec"]("ROLLBACK;"),
          _0x5a60ee
        );
      }
    }
    ["_assertOpen"]() {
      if (this["_disposed"])
        throw new l["CollabError"](
          "INTERNAL_ERROR",
          "SQLite\x20Database\x20Adapter\x20is\x20disposed",
        );
    }
  };
function g(_0x205fe1) {
  if (!_0x205fe1["filename"]) throw y("SQLite\x20filename\x20is\x20required");
  if (
    _0x205fe1["busyTimeoutMs"] !== void 0x0 &&
    (!Number["isSafeInteger"](_0x205fe1["busyTimeoutMs"]) ||
      _0x205fe1["busyTimeoutMs"] < 0x0)
  )
    throw y(
      "SQLite\x20busyTimeoutMs\x20must\x20be\x20a\x20non-negative\x20integer",
    );
}
function _(_0x1d6d92) {
  let { record: _0x2a9bd7, snapshot: _0x1272a6 } = _0x1d6d92;
  if (
    _0x2a9bd7["headRevision"] !== 0x1 ||
    _0x1272a6["rev"] !== 0x1 ||
    _0x1272a6["unitID"] !== _0x2a9bd7["unitID"] ||
    _0x1272a6["type"] !== _0x2a9bd7["type"]
  )
    throw y(
      "Initial\x20unit\x20record\x20and\x20snapshot\x20must\x20match\x20at\x20revision\x201",
    );
}
function v(_0x22eaba) {
  return {
    unitID: _0x22eaba["unit_id"],
    type: _0x22eaba["type"],
    headRevision: _0x22eaba["head_revision"],
  };
}
function y(_0x2867ba) {
  return new l["CollabError"]("INVALID_REQUEST", _0x2867ba);
}
function b(_0x4c05b8) {
  return new l["CollabError"]("INTERNAL_ERROR", _0x4c05b8);
}
function x(_0x2e9468) {
  return [...new Set(_0x2e9468)];
}
function S(_0xbc8925) {
  return JSON["stringify"](_0xbc8925, (_0x38916b, _0xd8337c) =>
    _0xd8337c instanceof Uint8Array
      ? { [d]: Buffer["from"](_0xd8337c)["toString"]("base64") }
      : _0xd8337c,
  );
}
function C(_0x23bac9) {
  return JSON["parse"](_0x23bac9, (_0x48f3bc, _0x5ebdeb) =>
    w(_0x5ebdeb)
      ? Uint8Array["from"](Buffer["from"](_0x5ebdeb[d], "base64"))
      : _0x5ebdeb,
  );
}
function w(_0x104f8d) {
  return (
    typeof _0x104f8d == "object" &&
    !!_0x104f8d &&
    Object["keys"](_0x104f8d)["length"] === 0x1 &&
    typeof _0x104f8d[d] == "string"
  );
}
exports["SQLiteDatabaseAdapter"] = h;
