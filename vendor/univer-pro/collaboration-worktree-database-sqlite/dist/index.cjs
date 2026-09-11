Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
var e = Object["create"],
  t = Object["defineProperty"],
  n = Object["getOwnPropertyDescriptor"],
  r = Object["getOwnPropertyNames"],
  i = Object["getPrototypeOf"],
  a = Object["prototype"]["hasOwnProperty"],
  o = (_0x581b7d, _0x3119aa, _0x5b9834, _0x510517) => {
    if (
      (_0x3119aa && typeof _0x3119aa == "object") ||
      typeof _0x3119aa == "function"
    ) {
      for (
        var _0x240551 = r(_0x3119aa),
          _0x2225c2 = 0x0,
          _0x1f35a3 = _0x240551["length"],
          _0x55175f;
        _0x2225c2 < _0x1f35a3;
        _0x2225c2++
      )
        ((_0x55175f = _0x240551[_0x2225c2]),
          !a["call"](_0x581b7d, _0x55175f) &&
            _0x55175f !== _0x5b9834 &&
            t(_0x581b7d, _0x55175f, {
              get: ((_0xa81e1) => _0x3119aa[_0xa81e1])["bind"](null, _0x55175f),
              enumerable:
                !(_0x510517 = n(_0x3119aa, _0x55175f)) ||
                _0x510517["enumerable"],
            }));
    }
    return _0x581b7d;
  },
  s = (_0x33ae01, _0x1a7a80, _0xa1cf1e) => (
    (_0xa1cf1e = _0x33ae01 == null ? {} : e(i(_0x33ae01))),
    o(
      _0x1a7a80 || !_0x33ae01 || !_0x33ae01["__esModule"]
        ? t(_0xa1cf1e, "default", { value: _0x33ae01, enumerable: !0x0 })
        : _0xa1cf1e,
      _0x33ae01,
    )
  );
let c = require("node:util"),
  l = require("libsql");
l = s(l, 0x1);
let u = require("@univerjs-pro/collaboration-service"),
  d = require("@univerjs/protocol");
var f = "worktree",
  p = 0x2,
  m = [
    "collaboration_worktrees",
    "collaboration_worktree_units",
    "collaboration_worktree_changesets",
    "collaboration_worktree_unit_seeds",
    "collaboration_worktree_unit_merge_artifacts",
  ],
  h = 0x1388,
  g = "__univerCollaborationBinary",
  _ = new Set([
    d["UniverType"]["UNIVER_SHEET"],
    d["UniverType"]["UNIVER_DOC"],
    d["UniverType"]["UNIVER_SLIDE"],
    d["UniverType"]["UNIVER_BOARD"],
    d["UniverType"]["UNIVER_BASE"],
  ]),
  v = class {
    ["_database"];
    ["_disposed"] = !0x1;
    constructor(_0x235f0d) {
      (b(_0x235f0d),
        (this["_database"] = new l["default"](_0x235f0d["filename"], {
          timeout: _0x235f0d["busyTimeoutMs"] ?? h,
        })));
      try {
        (this["_database"]["exec"]("PRAGMA\x20foreign_keys\x20=\x20ON;"),
          this["_database"]["exec"](
            "PRAGMA\x20busy_timeout\x20=\x20" +
              (_0x235f0d["busyTimeoutMs"] ?? h) +
              ";",
          ),
          this["_initializeSchema"]());
      } catch (_0x15df51) {
        throw (this["_database"]["close"](), _0x15df51);
      }
    }
    async ["getWorktree"](_0x4e4636, _0x3cafe1) {
      return (this["_assertOpen"](), this["_getAggregate"](_0x3cafe1));
    }
    async ["getWorktreeUnit"](_0x61a52d, _0x504657, _0x39489d) {
      this["_assertOpen"]();
      let _0x2f3c29 = this["_getUnitRow"](_0x504657, _0x39489d);
      return _0x2f3c29 ? y(_0x2f3c29) : null;
    }
    async ["getDraftChangesets"](_0x20035f, _0x6485b1, _0x52aa33, _0x56fcd2) {
      (this["_assertOpen"](), T(_0x56fcd2));
      let _0x1c78c0 = this["_getUnitRow"](_0x6485b1, _0x52aa33);
      if (!_0x1c78c0) return { changesets: [], latestRevision: 0x0 };
      let _0x25c17c =
        _0x56fcd2["to"] === 0x0
          ? _0x1c78c0["draft_head_revision"]
          : Math["min"](_0x56fcd2["to"], _0x1c78c0["draft_head_revision"]);
      return {
        changesets: this["_database"]
          ["prepare"](
            "SELECT\x20payload_json\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_worktree_changesets\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20revision\x20>\x20?\x20AND\x20revision\x20<=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20revision\x20ASC",
          )
          ["all"](_0x6485b1, _0x52aa33, _0x56fcd2["from"], _0x25c17c)
          ["map"](({ payload_json: _0x1f3d85 }) => F(_0x1f3d85)),
        latestRevision: _0x1c78c0["draft_head_revision"],
      };
    }
    async ["getUnitSeed"](_0x5efd0e, _0x512da8, _0x540574) {
      return (
        this["_assertOpen"](),
        this["_getUnitSeed"](_0x512da8, _0x540574)
      );
    }
    async ["getUnitMergeArtifact"](_0x4f9b01, _0x32343a, _0x2bca48) {
      return (
        this["_assertOpen"](),
        this["_getUnitMergeArtifact"](_0x32343a, _0x2bca48)
      );
    }
    async ["createWorktree"](_0x2fed12, _0x29192a) {
      return (
        this["_assertOpen"](),
        x(_0x29192a),
        this["_transaction"](() => {
          let _0x2a677d = this["_getAggregate"](
            _0x29192a["record"]["worktreeID"],
          );
          if (_0x2a677d)
            return { status: "already-exists", aggregate: _0x2a677d };
          this["_database"]
            ["prepare"](
              "INSERT\x20INTO\x20collaboration_worktrees\x20(worktree_id,\x20sid,\x20status)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20\x27draft\x27)",
            )
            ["run"](
              _0x29192a["record"]["worktreeID"],
              _0x29192a["record"]["sid"],
            );
          let _0x1c8c81 = this["_database"]["prepare"](
            "INSERT\x20INTO\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(worktree_id,\x20unit_id,\x20unit_order,\x20type,\x20source,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20baseline_trunk_revision,\x20draft_head_revision)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20\x27trunk\x27,\x20?,\x20?)",
          );
          return (
            _0x29192a["units"]["forEach"]((_0x4e6051, _0x330d23) => {
              _0x1c8c81["run"](
                _0x4e6051["worktreeID"],
                _0x4e6051["unitID"],
                _0x330d23,
                _0x4e6051["type"],
                _0x4e6051["baselineTrunkRevision"],
                _0x4e6051["draftHeadRevision"],
              );
            }),
            {
              status: "created",
              aggregate: this["_requireAggregate"](
                _0x29192a["record"]["worktreeID"],
              ),
            }
          );
        })
      );
    }
    async ["addUnit"](_0x138913, _0x5d6aeb) {
      return (
        this["_assertOpen"](),
        w(_0x5d6aeb["unit"]),
        this["_transaction"](() => {
          let { unit: _0x4da8c6 } = _0x5d6aeb,
            _0xe6e369 = this["_getWorktreeRow"](_0x4da8c6["worktreeID"]);
          if (!_0xe6e369) return { status: "not-found" };
          if (this["_getUnitRow"](_0x4da8c6["worktreeID"], _0x4da8c6["unitID"]))
            return {
              status: "already-exists",
              aggregate: this["_requireAggregate"](_0x4da8c6["worktreeID"]),
            };
          if (_0xe6e369["status"] !== "draft")
            return {
              status: "status-mismatch",
              aggregate: this["_requireAggregate"](_0x4da8c6["worktreeID"]),
            };
          S(_0x4da8c6);
          let _0x63c21f = this["_database"]
            ["prepare"](
              "SELECT\x20COALESCE(MAX(unit_order),\x20-1)\x20+\x201\x20AS\x20next_order\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?",
            )
            ["get"](_0x4da8c6["worktreeID"]);
          return (
            this["_database"]
              ["prepare"](
                "INSERT\x20INTO\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(worktree_id,\x20unit_id,\x20unit_order,\x20type,\x20source,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20baseline_trunk_revision,\x20draft_head_revision)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20\x27trunk\x27,\x20?,\x20?)",
              )
              ["run"](
                _0x4da8c6["worktreeID"],
                _0x4da8c6["unitID"],
                _0x63c21f["next_order"],
                _0x4da8c6["type"],
                _0x4da8c6["baselineTrunkRevision"],
                _0x4da8c6["draftHeadRevision"],
              ),
            {
              status: "added",
              aggregate: this["_requireAggregate"](_0x4da8c6["worktreeID"]),
            }
          );
        })
      );
    }
    async ["createUnit"](_0x472d9f, _0x2c54c7) {
      return (
        this["_assertOpen"](),
        C(_0x2c54c7["unit"], _0x2c54c7["seed"]),
        this["_transaction"](() => {
          let { unit: _0x15b867, seed: _0x50a362 } = _0x2c54c7,
            _0xf727e1 = this["_getWorktreeRow"](_0x15b867["worktreeID"]);
          if (!_0xf727e1) return { status: "not-found" };
          let _0x3a657e = this["_getUnitRow"](
            _0x15b867["worktreeID"],
            _0x15b867["unitID"],
          );
          if (_0x3a657e) {
            let _0x33bad4 = this["_getUnitSeed"](
              _0x15b867["worktreeID"],
              _0x15b867["unitID"],
            );
            return {
              status:
                _0x3a657e["source"] === "worktree" &&
                _0x3a657e["type"] === _0x15b867["type"] &&
                _0x33bad4 !== null &&
                P(_0x33bad4) === P(_0x50a362)
                  ? "already-created"
                  : "unit-exists",
              aggregate: this["_requireAggregate"](_0x15b867["worktreeID"]),
            };
          }
          if (_0xf727e1["status"] !== "draft")
            return {
              status: "status-mismatch",
              aggregate: this["_requireAggregate"](_0x15b867["worktreeID"]),
            };
          let _0x4852d8 = this["_database"]
            ["prepare"](
              "SELECT\x20COALESCE(MAX(unit_order),\x20-1)\x20+\x201\x20AS\x20next_order\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?",
            )
            ["get"](_0x15b867["worktreeID"]);
          return (
            this["_database"]
              ["prepare"](
                "INSERT\x20INTO\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(worktree_id,\x20unit_id,\x20unit_order,\x20type,\x20source,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20baseline_trunk_revision,\x20draft_head_revision)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20\x27worktree\x27,\x201,\x201)",
              )
              ["run"](
                _0x15b867["worktreeID"],
                _0x15b867["unitID"],
                _0x4852d8["next_order"],
                _0x15b867["type"],
              ),
            this["_database"]
              ["prepare"](
                "INSERT\x20INTO\x20collaboration_worktree_unit_seeds\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(worktree_id,\x20unit_id,\x20snapshot_json,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sheet_blocks_json)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?)",
              )
              ["run"](
                _0x15b867["worktreeID"],
                _0x15b867["unitID"],
                P(_0x50a362["snapshot"]),
                _0x50a362["sheetBlocks"] === void 0x0
                  ? null
                  : P(_0x50a362["sheetBlocks"]),
              ),
            {
              status: "created",
              aggregate: this["_requireAggregate"](_0x15b867["worktreeID"]),
            }
          );
        })
      );
    }
    async ["saveUnitMergeArtifact"](_0x15a748, _0x16e7b9) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let _0x58aa39 = this["_getWorktreeRow"](_0x16e7b9["worktreeID"]),
            _0xa1b5bb = this["_getUnitRow"](
              _0x16e7b9["worktreeID"],
              _0x16e7b9["unitID"],
            );
          if (!_0x58aa39 || !_0xa1b5bb) return { status: "not-found" };
          let _0x558dc2 = y(_0xa1b5bb);
          if (
            _0x58aa39["status"] !== "merging" ||
            _0x558dc2["source"] !== "worktree" ||
            _0x558dc2["readyDraftHeadRevision"] !==
              _0x16e7b9["artifact"]["readyDraftHeadRevision"] ||
            O(_0x558dc2)
          )
            return { status: "stale-merge" };
          let _0x48859f = this["_getUnitMergeArtifact"](
            _0x16e7b9["worktreeID"],
            _0x16e7b9["unitID"],
          );
          return _0x48859f
            ? { status: "already-saved", artifact: _0x48859f }
            : (D(_0x558dc2, _0x16e7b9["artifact"]),
              this["_database"]
                ["prepare"](
                  "INSERT\x20INTO\x20collaboration_worktree_unit_merge_artifacts\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(worktree_id,\x20unit_id,\x20ready_draft_head_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20snapshot_json,\x20sheet_blocks_json)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?)",
                )
                ["run"](
                  _0x16e7b9["worktreeID"],
                  _0x16e7b9["unitID"],
                  _0x16e7b9["artifact"]["readyDraftHeadRevision"],
                  P(_0x16e7b9["artifact"]["unit"]["snapshot"]),
                  _0x16e7b9["artifact"]["unit"]["sheetBlocks"] === void 0x0
                    ? null
                    : P(_0x16e7b9["artifact"]["unit"]["sheetBlocks"]),
                ),
              { status: "saved", artifact: F(P(_0x16e7b9["artifact"])) });
        })
      );
    }
    async ["setUnitRemoved"](_0x5df33a, _0x21ab1c) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let _0x17f325 = this["_getWorktreeRow"](_0x21ab1c["worktreeID"]),
            _0x2f85eb = this["_getUnitRow"](
              _0x21ab1c["worktreeID"],
              _0x21ab1c["unitID"],
            );
          return !_0x17f325 || !_0x2f85eb
            ? { status: "not-found" }
            : _0x17f325["status"] !== "draft" || O(y(_0x2f85eb))
              ? {
                  status: "not-editable",
                  aggregate: this["_requireAggregate"](_0x21ab1c["worktreeID"]),
                }
              : (_0x2f85eb["removed"] === 0x1) === _0x21ab1c["removed"]
                ? {
                    status: "unchanged",
                    aggregate: this["_requireAggregate"](
                      _0x21ab1c["worktreeID"],
                    ),
                  }
                : (this["_database"]
                    ["prepare"](
                      "UPDATE\x20collaboration_worktree_units\x20SET\x20removed\x20=\x20?\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?",
                    )
                    ["run"](
                      +!!_0x21ab1c["removed"],
                      _0x21ab1c["worktreeID"],
                      _0x21ab1c["unitID"],
                    ),
                  {
                    status: "updated",
                    aggregate: this["_requireAggregate"](
                      _0x21ab1c["worktreeID"],
                    ),
                  });
        })
      );
    }
    async ["commitDraftChangeset"](_0x27c3bb, _0x150681) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let { worktreeID: _0x2f2ce2, changeset: _0x530d17 } = _0x150681,
            _0x4315ca = this["_getWorktreeRow"](_0x2f2ce2),
            _0x22f04b = this["_getUnitRow"](_0x2f2ce2, _0x530d17["unitID"]);
          if (!_0x4315ca || !_0x22f04b) return { status: "not-found" };
          if (_0x4315ca["status"] !== "draft")
            return {
              status: "not-editable",
              worktreeStatus: A(_0x4315ca["status"]),
            };
          let _0x1aab89 = y(_0x22f04b);
          if (_0x1aab89["removed"] || O(_0x1aab89))
            return { status: "unit-frozen" };
          if (_0x1aab89["draftHeadRevision"] !== _0x530d17["revision"] - 0x1)
            return {
              status: "revision-mismatch",
              actualHeadRevision: _0x1aab89["draftHeadRevision"],
            };
          if (
            (this["_database"]
              ["prepare"](
                "INSERT\x20INTO\x20collaboration_worktree_changesets\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(worktree_id,\x20unit_id,\x20revision,\x20base_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sid,\x20req_id,\x20payload_json)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)",
              )
              ["run"](
                _0x2f2ce2,
                _0x530d17["unitID"],
                _0x530d17["revision"],
                _0x530d17["baseRev"],
                _0x530d17["sid"],
                _0x530d17["reqId"],
                P(_0x530d17),
              ),
            this["_database"]
              ["prepare"](
                "UPDATE\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20draft_head_revision\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20AND\x20draft_head_revision\x20=\x20?",
              )
              ["run"](
                _0x530d17["revision"],
                _0x2f2ce2,
                _0x530d17["unitID"],
                _0x530d17["revision"] - 0x1,
              )["changes"] !== 0x1)
          )
            throw new u["CollabError"](
              "INTERNAL_ERROR",
              "SQLite\x20draft\x20head\x20changed\x20inside\x20a\x20write\x20transaction",
            );
          return {
            status: "committed",
            changeset: F(P(_0x530d17)),
            headRevision: _0x530d17["revision"],
          };
        })
      );
    }
    async ["markReady"](_0x367784, _0x10cc73) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let _0x235e0c = this["_getWorktreeRow"](_0x10cc73);
          if (!_0x235e0c) return { status: "not-found" };
          if (_0x235e0c["status"] === "ready")
            return {
              status: "already-in-target",
              aggregate: this["_requireAggregate"](_0x10cc73),
            };
          if (_0x235e0c["status"] !== "draft")
            return {
              status: "status-mismatch",
              aggregate: this["_requireAggregate"](_0x10cc73),
            };
          for (let _0x10816d of this["_getUnitRows"](_0x10cc73))
            O(y(_0x10816d)) ||
              (this["_database"]
                ["prepare"](
                  "UPDATE\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20ready_draft_head_revision\x20=\x20draft_head_revision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?",
                )
                ["run"](_0x10cc73, _0x10816d["unit_id"]),
              this["_database"]
                ["prepare"](
                  "DELETE\x20FROM\x20collaboration_worktree_unit_merge_artifacts\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?",
                )
                ["run"](_0x10cc73, _0x10816d["unit_id"]));
          return (
            this["_updateStatus"](_0x10cc73, "ready"),
            {
              status: "transitioned",
              previousStatus: "draft",
              aggregate: this["_requireAggregate"](_0x10cc73),
            }
          );
        })
      );
    }
    async ["reopenWorktree"](_0x260d56, _0x33b516) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let _0xb43d2 = this["_getWorktreeRow"](_0x33b516);
          if (!_0xb43d2) return { status: "not-found" };
          if (_0xb43d2["status"] === "draft")
            return {
              status: "already-in-target",
              aggregate: this["_requireAggregate"](_0x33b516),
            };
          if (_0xb43d2["status"] !== "ready")
            return {
              status: "status-mismatch",
              aggregate: this["_requireAggregate"](_0x33b516),
            };
          for (let _0x179d14 of this["_getUnitRows"](_0x33b516))
            O(y(_0x179d14)) ||
              (this["_database"]
                ["prepare"](
                  "UPDATE\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20ready_draft_head_revision\x20=\x20NULL,\x20merge_result_json\x20=\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?",
                )
                ["run"](_0x33b516, _0x179d14["unit_id"]),
              this["_database"]
                ["prepare"](
                  "DELETE\x20FROM\x20collaboration_worktree_unit_merge_artifacts\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?",
                )
                ["run"](_0x33b516, _0x179d14["unit_id"]));
          return (
            this["_updateStatus"](_0x33b516, "draft"),
            {
              status: "transitioned",
              previousStatus: "ready",
              aggregate: this["_requireAggregate"](_0x33b516),
            }
          );
        })
      );
    }
    async ["discardWorktree"](_0x3653e7, _0x497e64) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let _0x3ee235 = this["_getWorktreeRow"](_0x497e64);
          if (!_0x3ee235) return { status: "not-found" };
          if (_0x3ee235["status"] === "discarded")
            return {
              status: "already-in-target",
              aggregate: this["_requireAggregate"](_0x497e64),
            };
          if (
            _0x3ee235["status"] !== "draft" &&
            _0x3ee235["status"] !== "ready"
          )
            return {
              status: "status-mismatch",
              aggregate: this["_requireAggregate"](_0x497e64),
            };
          let _0xe59559 = A(_0x3ee235["status"]);
          return (
            this["_updateStatus"](_0x497e64, "discarded"),
            {
              status: "transitioned",
              previousStatus: _0xe59559,
              aggregate: this["_requireAggregate"](_0x497e64),
            }
          );
        })
      );
    }
    async ["startOrResumeMerge"](_0x568e3c, _0x39f441) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let _0x345da8 = this["_getWorktreeRow"](_0x39f441);
          return _0x345da8
            ? _0x345da8["status"] === "merged"
              ? {
                  status: "already-merged",
                  aggregate: this["_requireAggregate"](_0x39f441),
                }
              : _0x345da8["status"] === "merging"
                ? {
                    status: "resumed",
                    aggregate: this["_requireAggregate"](_0x39f441),
                  }
                : _0x345da8["status"] === "ready"
                  ? (this["_updateStatus"](_0x39f441, "merging"),
                    {
                      status: "started",
                      aggregate: this["_requireAggregate"](_0x39f441),
                    })
                  : {
                      status: "status-mismatch",
                      aggregate: this["_requireAggregate"](_0x39f441),
                    }
            : { status: "not-found" };
        })
      );
    }
    async ["recordUnitMergeResult"](_0x2736c9, _0x5dd637) {
      return (
        this["_assertOpen"](),
        E(_0x5dd637["mergeResult"]),
        this["_transaction"](() => {
          let _0x3946bb = this["_getWorktreeRow"](_0x5dd637["worktreeID"]),
            _0x2843d6 = this["_getUnitRow"](
              _0x5dd637["worktreeID"],
              _0x5dd637["unitID"],
            );
          if (!_0x3946bb || !_0x2843d6) return { status: "not-found" };
          let _0x202b55 = y(_0x2843d6);
          if (
            _0x3946bb["status"] !== "merging" ||
            _0x202b55["readyDraftHeadRevision"] !==
              _0x5dd637["readyDraftHeadRevision"]
          )
            return { status: "stale-merge" };
          if (
            (_0x5dd637["mergeResult"]["status"] === "removed" &&
              !_0x202b55["removed"]) ||
            (_0x202b55["removed"] &&
              (_0x5dd637["mergeResult"]["status"] === "merged" ||
                _0x5dd637["mergeResult"]["status"] === "unchanged"))
          )
            throw new u["CollabError"](
              "INVALID_REQUEST",
              "Merge\x20result\x20does\x20not\x20match\x20frozen\x20Unit\x20removal\x20intent",
            );
          let _0x27433a = _0x202b55["mergeResult"];
          return _0x27433a &&
            (0x0, c["isDeepStrictEqual"])(_0x27433a, _0x5dd637["mergeResult"])
            ? {
                status: "already-recorded",
                aggregate: this["_requireAggregate"](_0x5dd637["worktreeID"]),
              }
            : _0x27433a && k(_0x27433a)
              ? { status: "stale-merge" }
              : (this["_database"]
                  ["prepare"](
                    "UPDATE\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20merge_result_json\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?",
                  )
                  ["run"](
                    P(_0x5dd637["mergeResult"]),
                    _0x5dd637["worktreeID"],
                    _0x5dd637["unitID"],
                  ),
                {
                  status: "recorded",
                  aggregate: this["_requireAggregate"](_0x5dd637["worktreeID"]),
                });
        })
      );
    }
    async ["finishMerge"](_0x32cf38, _0x5ec9a0) {
      return (
        this["_assertOpen"](),
        this["_transaction"](() => {
          let _0x415e8f = this["_getWorktreeRow"](_0x5ec9a0);
          if (!_0x415e8f) return { status: "not-found" };
          if (_0x415e8f["status"] === "merged")
            return {
              status: "already-in-target",
              aggregate: this["_requireAggregate"](_0x5ec9a0),
            };
          if (_0x415e8f["status"] !== "merging")
            return {
              status: "status-mismatch",
              aggregate: this["_requireAggregate"](_0x5ec9a0),
            };
          let _0x571a39 = this["_getUnitRows"](_0x5ec9a0)["every"](
            (_0x5d874b) => O(y(_0x5d874b)),
          );
          return (
            this["_updateStatus"](_0x5ec9a0, _0x571a39 ? "merged" : "ready"),
            {
              status: "transitioned",
              previousStatus: "merging",
              aggregate: this["_requireAggregate"](_0x5ec9a0),
            }
          );
        })
      );
    }
    async ["dispose"]() {
      this["_disposed"] ||
        ((this["_disposed"] = !0x0), this["_database"]["close"]());
    }
    ["_initializeSchema"]() {
      this["_transaction"](() => {
        if (!this["_hasTable"]("collaboration_schema_versions")) {
          if (this["_hasAnyOwnedTable"]())
            throw N(
              "SQLite\x20Worktree\x20tables\x20exist\x20without\x20a\x20schema\x20version",
            );
          this["_database"]["exec"](
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_schema_versions\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20version\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(version\x20>=\x201)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
          );
        }
        let _0x26d85b = this["_database"]
          ["prepare"](
            "SELECT\x20version\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_schema_versions\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20component\x20=\x20?",
          )
          ["get"](f);
        if (_0x26d85b) {
          if (_0x26d85b["version"] !== 0x1 && _0x26d85b["version"] !== p)
            throw N(
              "SQLite\x20Worktree\x20schema\x20version\x20" +
                _0x26d85b["version"] +
                "\x20is\x20not\x20supported",
            );
          let _0x4b91de = m["filter"](
            (_0x336b83) => !this["_hasTable"](_0x336b83),
          );
          if (_0x4b91de["length"] > 0x0)
            throw N(
              "SQLite\x20Worktree\x20schema\x20v" +
                _0x26d85b["version"] +
                "\x20is\x20incomplete:\x20missing\x20" +
                _0x4b91de["join"](",\x20"),
            );
          if (
            (_0x26d85b["version"] === 0x1 &&
              (this["_database"]["exec"](
                "ALTER\x20TABLE\x20collaboration_worktree_units\x20ADD\x20COLUMN\x20removed\x20INTEGER\x20NOT\x20NULL\x20DEFAULT\x200\x20CHECK\x20(removed\x20IN\x20(0,\x201))",
              ),
              this["_database"]
                ["prepare"](
                  "UPDATE\x20collaboration_schema_versions\x20SET\x20version\x20=\x20?\x20WHERE\x20component\x20=\x20?",
                )
                ["run"](p, f)),
            !this["_database"]
              ["prepare"]("PRAGMA\x20table_info(collaboration_worktree_units)")
              ["all"]()
              ["some"]((_0x540995) => _0x540995["name"] === "removed"))
          )
            throw N(
              "SQLite\x20Worktree\x20schema\x20v2\x20is\x20missing\x20the\x20removed\x20column",
            );
          return;
        }
        if (this["_hasAnyOwnedTable"]())
          throw N(
            "SQLite\x20Worktree\x20tables\x20exist\x20without\x20a\x20schema\x20version",
          );
        this["_database"]["exec"](
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_worktrees\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20worktree_id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sid\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status\x20TEXT\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CHECK\x20(status\x20IN\x20(\x27draft\x27,\x20\x27ready\x27,\x20\x27merging\x27,\x20\x27merged\x27,\x20\x27discarded\x27))\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_worktree_units\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20removed\x20INTEGER\x20NOT\x20NULL\x20DEFAULT\x200\x20CHECK\x20(removed\x20IN\x20(0,\x201)),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20worktree_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_order\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(unit_order\x20>=\x200),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x20INTEGER\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20source\x20TEXT\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CHECK\x20(source\x20IN\x20(\x27trunk\x27,\x20\x27worktree\x27)),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20baseline_trunk_revision\x20INTEGER\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CHECK\x20(baseline_trunk_revision\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20draft_head_revision\x20INTEGER\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CHECK\x20(draft_head_revision\x20>=\x20baseline_trunk_revision),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ready_draft_head_revision\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20merge_result_json\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(worktree_id,\x20unit_id),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20UNIQUE\x20(worktree_id,\x20unit_order),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FOREIGN\x20KEY\x20(worktree_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20REFERENCES\x20collaboration_worktrees(worktree_id)\x20ON\x20DELETE\x20CASCADE\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_worktree_changesets\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20worktree_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20revision\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(revision\x20>=\x202),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20base_revision\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(base_revision\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sid\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20req_id\x20INTEGER\x20NOT\x20NULL\x20CHECK\x20(req_id\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20payload_json\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(worktree_id,\x20unit_id,\x20revision),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20UNIQUE\x20(worktree_id,\x20unit_id,\x20sid,\x20req_id),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FOREIGN\x20KEY\x20(worktree_id,\x20unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20REFERENCES\x20collaboration_worktree_units(worktree_id,\x20unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20DELETE\x20CASCADE\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20INDEX\x20collaboration_worktree_changesets_revision\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20collaboration_worktree_changesets(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20worktree_id,\x20unit_id,\x20revision\x20ASC\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_worktree_unit_seeds\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20worktree_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20snapshot_json\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sheet_blocks_json\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20resources_json\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(worktree_id,\x20unit_id),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FOREIGN\x20KEY\x20(worktree_id,\x20unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20REFERENCES\x20collaboration_worktree_units(worktree_id,\x20unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20DELETE\x20CASCADE\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20collaboration_worktree_unit_merge_artifacts\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20worktree_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unit_id\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ready_draft_head_revision\x20INTEGER\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20CHECK\x20(ready_draft_head_revision\x20>=\x201),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20snapshot_json\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sheet_blocks_json\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20resources_json\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(worktree_id,\x20unit_id),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FOREIGN\x20KEY\x20(worktree_id,\x20unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20REFERENCES\x20collaboration_worktree_units(worktree_id,\x20unit_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20DELETE\x20CASCADE\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20collaboration_schema_versions\x20(component,\x20version)\x0a\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(\x27worktree\x27,\x20" +
            p +
            ");\x0a\x20\x20\x20\x20\x20\x20",
        );
      });
    }
    ["_hasTable"](_0x30ec59) {
      return !!this["_database"]
        ["prepare"](
          "SELECT\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20sqlite_schema\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20type\x20=\x20\x27table\x27\x20AND\x20name\x20=\x20?",
        )
        ["get"](_0x30ec59);
    }
    ["_hasAnyOwnedTable"]() {
      return m["some"]((_0x9f49e4) => this["_hasTable"](_0x9f49e4));
    }
    ["_getWorktreeRow"](_0x472232) {
      return (
        this["_database"]
          ["prepare"](
            "SELECT\x20worktree_id,\x20sid,\x20status\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_worktrees\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?",
          )
          ["get"](_0x472232) ?? null
      );
    }
    ["_getUnitRow"](_0x3df8cf, _0x546d05) {
      return (
        this["_database"]
          ["prepare"](
            "SELECT\x20worktree_id,\x20unit_id,\x20type,\x20source,\x20baseline_trunk_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20draft_head_revision,\x20ready_draft_head_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20merge_result_json,\x20removed\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?",
          )
          ["get"](_0x3df8cf, _0x546d05) ?? null
      );
    }
    ["_getUnitRows"](_0x263a2f) {
      return this["_database"]
        ["prepare"](
          "SELECT\x20worktree_id,\x20unit_id,\x20type,\x20source,\x20baseline_trunk_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20draft_head_revision,\x20ready_draft_head_revision,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20merge_result_json,\x20removed\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_worktree_units\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20ORDER\x20BY\x20unit_order\x20ASC",
        )
        ["all"](_0x263a2f);
    }
    ["_getUnitSeed"](_0xf8571e, _0x5438fa) {
      let _0x30fd4e = this["_database"]
        ["prepare"](
          "SELECT\x20snapshot_json,\x20sheet_blocks_json\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_worktree_unit_seeds\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?",
        )
        ["get"](_0xf8571e, _0x5438fa);
      return _0x30fd4e
        ? {
            snapshot: F(_0x30fd4e["snapshot_json"]),
            ...(_0x30fd4e["sheet_blocks_json"] === null
              ? {}
              : { sheetBlocks: F(_0x30fd4e["sheet_blocks_json"]) }),
          }
        : null;
    }
    ["_getUnitMergeArtifact"](_0x5a342c, _0x30b593) {
      let _0x4ac446 = this["_database"]
        ["prepare"](
          "SELECT\x20ready_draft_head_revision,\x20snapshot_json,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20sheet_blocks_json\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20collaboration_worktree_unit_merge_artifacts\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20worktree_id\x20=\x20?\x20AND\x20unit_id\x20=\x20?",
        )
        ["get"](_0x5a342c, _0x30b593);
      return _0x4ac446
        ? {
            readyDraftHeadRevision: _0x4ac446["ready_draft_head_revision"],
            unit: {
              snapshot: F(_0x4ac446["snapshot_json"]),
              ...(_0x4ac446["sheet_blocks_json"] === null
                ? {}
                : { sheetBlocks: F(_0x4ac446["sheet_blocks_json"]) }),
            },
          }
        : null;
    }
    ["_getAggregate"](_0x599257) {
      let _0x1f2cd2 = this["_getWorktreeRow"](_0x599257);
      return _0x1f2cd2
        ? {
            worktree: {
              worktreeID: _0x1f2cd2["worktree_id"],
              sid: _0x1f2cd2["sid"],
              status: A(_0x1f2cd2["status"]),
            },
            units: this["_getUnitRows"](_0x599257)["map"](y),
          }
        : null;
    }
    ["_requireAggregate"](_0x1104cf) {
      let _0x14263b = this["_getAggregate"](_0x1104cf);
      if (!_0x14263b)
        throw new u["CollabError"](
          "INTERNAL_ERROR",
          "SQLite\x20Worktree\x20disappeared\x20inside\x20a\x20write\x20transaction",
        );
      return _0x14263b;
    }
    ["_updateStatus"](_0x48e283, _0x4f1420) {
      if (
        this["_database"]
          ["prepare"](
            "UPDATE\x20collaboration_worktrees\x20SET\x20status\x20=\x20?\x20WHERE\x20worktree_id\x20=\x20?",
          )
          ["run"](_0x4f1420, _0x48e283)["changes"] !== 0x1
      )
        throw new u["CollabError"](
          "INTERNAL_ERROR",
          "SQLite\x20Worktree\x20status\x20update\x20did\x20not\x20affect\x20one\x20record",
        );
    }
    ["_transaction"](_0x285763) {
      this["_database"]["exec"]("BEGIN\x20IMMEDIATE;");
      try {
        let _0x7a5230 = _0x285763();
        return (this["_database"]["exec"]("COMMIT;"), _0x7a5230);
      } catch (_0x30054d) {
        throw (
          this["_database"]["inTransaction"] &&
            this["_database"]["exec"]("ROLLBACK;"),
          _0x30054d
        );
      }
    }
    ["_assertOpen"]() {
      if (this["_disposed"])
        throw new u["CollabError"](
          "INTERNAL_ERROR",
          "SQLite\x20Worktree\x20Database\x20Adapter\x20is\x20disposed",
        );
    }
  };
function y(_0x58e253) {
  let _0x1427c6 = j(_0x58e253["source"]);
  return {
    worktreeID: _0x58e253["worktree_id"],
    unitID: _0x58e253["unit_id"],
    type: _0x58e253["type"],
    source: _0x1427c6,
    ...(_0x1427c6 === "trunk"
      ? { baselineTrunkRevision: _0x58e253["baseline_trunk_revision"] }
      : {}),
    ...(_0x58e253["removed"] === 0x1 ? { removed: !0x0 } : {}),
    draftHeadRevision: _0x58e253["draft_head_revision"],
    ...(_0x58e253["ready_draft_head_revision"] === null
      ? {}
      : { readyDraftHeadRevision: _0x58e253["ready_draft_head_revision"] }),
    ...(_0x58e253["merge_result_json"] === null
      ? {}
      : { mergeResult: F(_0x58e253["merge_result_json"]) }),
  };
}
function b(_0x249ebe) {
  if (!_0x249ebe["filename"]) throw M("SQLite\x20filename\x20is\x20required");
  if (
    _0x249ebe["busyTimeoutMs"] !== void 0x0 &&
    (!Number["isSafeInteger"](_0x249ebe["busyTimeoutMs"]) ||
      _0x249ebe["busyTimeoutMs"] < 0x0)
  )
    throw M(
      "SQLite\x20busyTimeoutMs\x20must\x20be\x20a\x20non-negative\x20integer",
    );
}
function x(_0x535b43) {
  if (
    !_0x535b43["record"]["worktreeID"] ||
    !_0x535b43["record"]["sid"] ||
    _0x535b43["record"]["status"] !== "draft"
  )
    throw M("New\x20Worktree\x20must\x20be\x20a\x20draft\x20with\x20identity");
  let _0x443109 = new Set();
  for (let _0x3870e7 of _0x535b43["units"]) {
    if (
      _0x3870e7["worktreeID"] !== _0x535b43["record"]["worktreeID"] ||
      _0x443109["has"](_0x3870e7["unitID"])
    )
      throw M(
        "Initial\x20Worktree\x20Units\x20must\x20be\x20unique\x20and\x20share\x20identity",
      );
    (_0x443109["add"](_0x3870e7["unitID"]), S(_0x3870e7));
  }
}
function S(_0x4fcff5) {
  if (
    (w(_0x4fcff5),
    _0x4fcff5["source"] !== "trunk" ||
      !_["has"](_0x4fcff5["type"]) ||
      !Number["isSafeInteger"](_0x4fcff5["baselineTrunkRevision"]) ||
      _0x4fcff5["baselineTrunkRevision"] < 0x1 ||
      _0x4fcff5["draftHeadRevision"] !== _0x4fcff5["baselineTrunkRevision"] ||
      _0x4fcff5["readyDraftHeadRevision"] !== void 0x0 ||
      _0x4fcff5["mergeResult"] !== void 0x0)
  )
    throw M(
      "New\x20Worktree\x20Unit\x20must\x20start\x20at\x20its\x20trunk\x20baseline",
    );
}
function C(_0x302861, _0x2985dc) {
  if (
    (w(_0x302861),
    _0x302861["source"] !== "worktree" ||
      _0x302861["baselineTrunkRevision"] !== void 0x0 ||
      !_["has"](_0x302861["type"]) ||
      _0x302861["draftHeadRevision"] !== 0x1 ||
      _0x302861["readyDraftHeadRevision"] !== void 0x0 ||
      _0x302861["mergeResult"] !== void 0x0 ||
      _0x2985dc["snapshot"]["unitID"] !== _0x302861["unitID"] ||
      _0x2985dc["snapshot"]["type"] !== _0x302861["type"] ||
      _0x2985dc["snapshot"]["rev"] !== 0x1)
  )
    throw M(
      "Worktree-created\x20Unit\x20must\x20start\x20from\x20its\x20revision\x201\x20seed",
    );
}
function w(_0xf1f8ee) {
  if (!_0xf1f8ee["worktreeID"] || !_0xf1f8ee["unitID"])
    throw M("Worktree\x20and\x20Unit\x20identity\x20are\x20required");
}
function T(_0x24fbb5) {
  if (
    !Number["isSafeInteger"](_0x24fbb5["from"]) ||
    !Number["isSafeInteger"](_0x24fbb5["to"]) ||
    _0x24fbb5["from"] < 0x0 ||
    _0x24fbb5["to"] < 0x0
  )
    throw M("Draft\x20revision\x20range\x20cannot\x20be\x20negative");
}
function E(_0x2a280b) {
  if (_0x2a280b["status"] === "merged") {
    if (
      !Number["isSafeInteger"](_0x2a280b["trunkRevision"]) ||
      _0x2a280b["trunkRevision"] < 0x1
    )
      throw M("Merged\x20result\x20requires\x20a\x20trunk\x20revision");
    return;
  }
  if (
    !(
      _0x2a280b["status"] === "unchanged" || _0x2a280b["status"] === "removed"
    ) &&
    (!_0x2a280b["error"]["code"] ||
      !_0x2a280b["error"]["message"] ||
      typeof _0x2a280b["error"]["retryable"] != "boolean")
  )
    throw M("Merge\x20error\x20must\x20be\x20stable\x20and\x20serializable");
}
function D(_0x12ff7e, _0x5bf5ef) {
  if (
    _0x5bf5ef["unit"]["snapshot"]["unitID"] !== _0x12ff7e["unitID"] ||
    _0x5bf5ef["unit"]["snapshot"]["type"] !== _0x12ff7e["type"] ||
    _0x5bf5ef["unit"]["snapshot"]["rev"] !== 0x1
  )
    throw M(
      "Worktree\x20Unit\x20merge\x20artifact\x20must\x20be\x20a\x20revision\x201\x20snapshot",
    );
}
function O(_0x1fbefd) {
  return k(_0x1fbefd["mergeResult"]);
}
function k(_0x5f4e84) {
  return (
    _0x5f4e84?.["status"] === "merged" ||
    _0x5f4e84?.["status"] === "unchanged" ||
    _0x5f4e84?.["status"] === "removed"
  );
}
function A(_0x5e6550) {
  if (
    _0x5e6550 === "draft" ||
    _0x5e6550 === "ready" ||
    _0x5e6550 === "merging" ||
    _0x5e6550 === "merged" ||
    _0x5e6550 === "discarded"
  )
    return _0x5e6550;
  throw new u["CollabError"](
    "INTERNAL_ERROR",
    "SQLite\x20contains\x20invalid\x20Worktree\x20status\x20" + _0x5e6550,
  );
}
function j(_0x1ebf15) {
  if (_0x1ebf15 === "trunk" || _0x1ebf15 === "worktree") return _0x1ebf15;
  throw new u["CollabError"](
    "INTERNAL_ERROR",
    "SQLite\x20contains\x20invalid\x20Worktree\x20Unit\x20source\x20" +
      _0x1ebf15,
  );
}
function M(_0xa42c99) {
  return new u["CollabError"]("INVALID_REQUEST", _0xa42c99);
}
function N(_0x1fe9f5) {
  return new u["CollabError"]("INTERNAL_ERROR", _0x1fe9f5);
}
function P(_0x4a3cdc) {
  return JSON["stringify"](_0x4a3cdc, (_0x35a562, _0x3865b8) =>
    _0x3865b8 instanceof Uint8Array
      ? { [g]: Buffer["from"](_0x3865b8)["toString"]("base64") }
      : _0x3865b8,
  );
}
function F(_0x5ea35b) {
  return JSON["parse"](_0x5ea35b, (_0x1c4136, _0x4b24d0) =>
    I(_0x4b24d0)
      ? Uint8Array["from"](Buffer["from"](_0x4b24d0[g], "base64"))
      : _0x4b24d0,
  );
}
function I(_0x269a69) {
  return (
    typeof _0x269a69 == "object" &&
    !!_0x269a69 &&
    Object["keys"](_0x269a69)["length"] === 0x1 &&
    typeof _0x269a69[g] == "string"
  );
}
exports["SQLiteWorktreeDatabaseAdapter"] = v;
