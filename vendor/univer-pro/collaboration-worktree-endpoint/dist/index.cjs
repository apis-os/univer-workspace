Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("node:crypto"),
  t = require("@univerjs-pro/collaboration-endpoint"),
  n = require("@univerjs-pro/collaboration-service"),
  r = require("@univerjs-pro/collaboration-transport-node"),
  i = require("@univerjs-pro/collaboration-worktree-service"),
  a = require("@univerjs/protocol");
var o = class {
    ["_middlewares"] = new Map();
    ["use"](_0x4e6394, _0xec8f4) {
      let _0x3a817a = this["_middlewares"]["get"](_0x4e6394) ?? [],
        _0x3fdcde = _0xec8f4;
      (_0x3a817a["push"](_0x3fdcde),
        this["_middlewares"]["set"](_0x4e6394, _0x3a817a));
      let _0xd3cda4 = !0x1;
      return {
        dispose: () => {
          if (_0xd3cda4) return;
          _0xd3cda4 = !0x0;
          let _0x30ef0f = _0x3a817a["indexOf"](_0x3fdcde);
          _0x30ef0f >= 0x0 && _0x3a817a["splice"](_0x30ef0f, 0x1);
        },
      };
    }
    async ["run"](_0x591437, _0x5d5beb, _0x5a864e) {
      let _0x429f99 = [...(this["_middlewares"]["get"](_0x591437) ?? [])],
        _0x1c58d4 = async (_0x184a8b) => {
          let _0x33f377 = _0x429f99[_0x184a8b];
          if (!_0x33f377) {
            await _0x5a864e();
            return;
          }
          let _0x1cce81 = !0x1,
            _0x2265eb;
          if (
            (await _0x33f377(_0x5d5beb, () => {
              if (_0x1cce81)
                throw Error(
                  "Middleware\x20for\x20action\x20" +
                    String(_0x591437) +
                    "\x20called\x20next()\x20twice",
                );
              return (
                (_0x1cce81 = !0x0),
                (_0x2265eb = _0x1c58d4(_0x184a8b + 0x1)),
                _0x2265eb
              );
            }),
            !_0x1cce81)
          )
            throw Error(
              "Middleware\x20for\x20action\x20" +
                String(_0x591437) +
                "\x20did\x20not\x20call\x20next()",
            );
          await _0x2265eb;
        };
      await _0x1c58d4(0x0);
    }
    ["clear"]() {
      this["_middlewares"]["clear"]();
    }
  },
  s = 0x5 * 0xea60,
  c = "/universer-api/worktrees",
  l = "/universer-api/user/session-ticket",
  u = class {
    ["_service"];
    ["_options"];
    ["_middleware"] = new o();
    ["_listeners"] = new Map();
    ["_scopedEndpoints"] = new Map();
    ["_eventBindings"] = new Map();
    ["_eventRooms"] = new Map();
    ["_eventQueues"] = new Map();
    ["_subscriptions"];
    ["_ticketTtlMs"];
    ["_disposed"] = !0x1;
    constructor(_0x322328, _0x5b7412) {
      if (
        ((this["_service"] = _0x322328),
        (this["_options"] = _0x5b7412),
        !_0x322328)
      )
        throw TypeError(
          "UniverCollabWorktreeEndpoint\x20requires\x20a\x20Worktree\x20Service",
        );
      if (!_0x5b7412?.["ticketStore"])
        throw TypeError(
          "UniverCollabWorktreeEndpoint\x20requires\x20the\x20shared\x20ticketStore",
        );
      if (
        ((this["_ticketTtlMs"] = _0x5b7412["sessionTicketTtlMs"] ?? s),
        !Number["isSafeInteger"](this["_ticketTtlMs"]) ||
          this["_ticketTtlMs"] <= 0x0)
      )
        throw TypeError(
          "sessionTicketTtlMs\x20must\x20be\x20a\x20positive\x20safe\x20integer",
        );
      this["_subscriptions"] = [
        this["_service"]["on"]("worktreeUnitRemovalChanged", (_0x40e718) =>
          this["_enqueueWorktreeChanged"](_0x40e718["worktree"]),
        ),
        this["_service"]["on"]("worktreeCreated", (_0x48d4c3) =>
          this["_enqueueWorktreeChanged"](_0x48d4c3["worktree"]),
        ),
        this["_service"]["on"]("worktreeUnitAdded", (_0x3c2f02) =>
          this["_enqueueWorktreeChanged"](_0x3c2f02["worktree"]),
        ),
        this["_service"]["on"]("worktreeUnitCreated", (_0x48e46f) =>
          this["_enqueueWorktreeChanged"](_0x48e46f["worktree"]),
        ),
        this["_service"]["on"]("worktreeStatusChanged", (_0x10cd75) =>
          this["_enqueueWorktreeChanged"](_0x10cd75["worktree"]),
        ),
        this["_service"]["on"]("worktreeUnitMergeResultRecorded", (_0x448474) =>
          this["_enqueueWorktreeChanged"](_0x448474["worktree"]),
        ),
      ];
    }
    ["use"](_0x540404, _0x1fd882) {
      return (
        this["_assertRunning"](),
        this["_middleware"]["use"](_0x540404, _0x1fd882)
      );
    }
    ["on"](_0x250df3, _0x4c17e6) {
      this["_assertRunning"]();
      let _0x389373 = this["_listeners"]["get"](_0x250df3) ?? new Set(),
        _0x54d8b5 = _0x4c17e6;
      (_0x389373["add"](_0x54d8b5),
        this["_listeners"]["set"](_0x250df3, _0x389373));
      let _0x3c160d = !0x1;
      return {
        dispose: () => {
          _0x3c160d || ((_0x3c160d = !0x0), _0x389373["delete"](_0x54d8b5));
        },
      };
    }
    ["register"](_0x11d4c2) {
      (this["_assertRunning"](),
        _0x11d4c2["get"](l, (_0x48add1) => this["_handleTicket"](_0x48add1)));
      let _0x3fb444 = (_0x363836) => (_0x126a7c) =>
        this["_handleManagement"](_0x126a7c, {
          ..._0x126a7c["params"],
          action: _0x363836,
        });
      (_0x11d4c2["post"](c, _0x3fb444("create")),
        _0x11d4c2["get"](c + "/:worktreeID", _0x3fb444("get")),
        _0x11d4c2["get"](
          c + "/:worktreeID/units/:unitID/merge-preview",
          _0x3fb444("evaluateUnitMerge"),
        ));
      for (let [_0xb1557c, _0xdc09e9] of [
        ["units", "addUnit"],
        ["units/:unitID/removal", "setUnitRemoved"],
        ["units/from-snapshot", "createUnitFromSnapshot"],
        ["units/from-data", "createUnitFromData"],
        ["ready", "ready"],
        ["reopen", "reopen"],
        ["discard", "discard"],
        ["merge", "merge"],
      ])
        _0x11d4c2["post"](
          c + "/:worktreeID/" + _0xb1557c,
          _0x3fb444(_0xdc09e9),
        );
      for (let [_0x5e5949, _0x467467] of [
        ["get", "/snapshot/:type/unit/:unitID/rev/:revision"],
        ["get", "/snapshot/:type/unit/:unitID/block/:blockID"],
        ["get", "/snapshot/block/:type/unit/:unitID/block/:blockID"],
        ["get", "/snapshot/:type/unit/:unitID/fetchmissing"],
        ["post", "/comb/:type/unit/:unitID/new_changes"],
        ["delete", "/snapshot/-/units"],
        ["post", "/snapshot/-/units/recover"],
      ]) {
        let _0x524cad = c + "/:worktreeID" + _0x467467;
        _0x11d4c2[_0x5e5949](_0x524cad, (_0x22c215) => {
          let _0x41396e = this["_scopedEndpoint"](
            _0x22c215["params"]["worktreeID"],
          )["http"]["get"](_0x5e5949 + "\x20" + _0x524cad);
          if (!_0x41396e)
            throw Error(
              "Scoped\x20collaboration\x20HTTP\x20route\x20is\x20not\x20registered",
            );
          return _0x41396e(_0x22c215);
        });
      }
      let _0x2a6b26 = c + "/:worktreeID/comb/connect";
      (_0x11d4c2["upgrade"](_0x2a6b26, (_0x13e6b7) => {
        let _0xfc71db = this["_scopedEndpoint"](
          _0x13e6b7["params"]["worktreeID"],
        )["upgrade"]["get"](_0x2a6b26);
        if (!_0xfc71db)
          throw Error(
            "Scoped\x20collaboration\x20upgrade\x20route\x20is\x20not\x20registered",
          );
        return _0xfc71db(_0x13e6b7);
      }),
        _0x11d4c2["upgrade"](c + "/:worktreeID/events", (_0xb0d0e7) =>
          this["_handleEventUpgrade"](_0xb0d0e7),
        ));
    }
    async ["_handleEventUpgrade"](_0x4c25eb) {
      this["_assertRunning"]();
      let _0x30aa6f = new URL(
          _0x4c25eb["incomingMessage"]["url"] ?? "/",
          "http://localhost",
        ),
        _0x4eea5f = await this["_options"]["ticketStore"]["consume"](
          _0x30aa6f["searchParams"]["get"]("sessionTicket") ?? "",
        );
      if (!_0x4eea5f) {
        _0x4c25eb["reject"](
          0x191,
          "Invalid\x20or\x20expired\x20session\x20ticket",
        );
        return;
      }
      let _0x534c80 = _0x4c25eb["params"]["worktreeID"];
      _0x4c25eb["accept"]({
        open: ({ connection: _0x50ac80 }) =>
          this["_openEventConnection"](_0x50ac80, _0x4eea5f, _0x534c80),
        message: ({ connection: _0x288844 }) =>
          _0x288844["close"](
            0x3eb,
            "Worktree\x20event\x20connection\x20is\x20server-only",
          ),
        close: ({ connection: _0xac06f }) =>
          this["_removeEventBinding"](_0xac06f["id"]),
      });
    }
    async ["dispose"]() {
      if (this["_disposed"]) return;
      ((this["_disposed"] = !0x0),
        this["_subscriptions"]["forEach"]((_0x25315d) =>
          _0x25315d["dispose"](),
        ),
        await Promise["allSettled"]([...this["_eventQueues"]["values"]()]));
      for (let _0x7da0e4 of this["_eventBindings"]["values"]())
        _0x7da0e4["connection"]["close"](0x3e9, "Endpoint\x20disposed");
      (this["_eventBindings"]["clear"](),
        this["_eventRooms"]["clear"](),
        this["_eventQueues"]["clear"]());
      let _0x55ed14 = [...this["_scopedEndpoints"]["values"]()];
      (this["_scopedEndpoints"]["clear"](),
        await Promise["all"](
          _0x55ed14["map"](({ endpoint: _0x29d6ed }) => _0x29d6ed["dispose"]()),
        ),
        this["_middleware"]["clear"](),
        this["_listeners"]["clear"]());
    }
    async ["_handleTicket"](_0x467958) {
      try {
        (this["_assertRunning"](), this["_requireUser"](_0x467958));
        let _0x397060 = await this["_options"]["ticketStore"]["issue"](
          { userID: _0x467958["userID"], customData: _0x467958["customData"] },
          this["_ticketTtlMs"],
        );
        b(_0x467958, 0xc8, {
          error: { code: a["ErrorCode"]["OK"], message: "" },
          ticket: _0x397060,
        });
      } catch (_0x4013ed) {
        this["_writeFailure"](_0x467958, _0x4013ed);
      }
    }
    async ["_handleManagement"](_0x59ce12, _0x3061cb) {
      try {
        (this["_assertRunning"](), this["_requireUser"](_0x59ce12));
        let _0x1153fd = {
          userID: _0x59ce12["userID"],
          customData: _0x59ce12["customData"],
        };
        if (_0x3061cb["action"] === "evaluateUnitMerge") {
          let _0x300c02 = await this["_service"]["evaluateWorktreeUnitMerge"](
            {
              worktreeID: _0x3061cb["worktreeID"],
              unitID: _0x3061cb["unitID"],
            },
            _0x1153fd,
          );
          (_0x59ce12["response"]["setHeader"]("cache-control", "no-store"),
            b(_0x59ce12, 0xc8, { evaluation: _0x300c02 }));
          return;
        }
        let _0xbd3226;
        switch (_0x3061cb["action"]) {
          case "create": {
            let _0x1a3b1d = await _0x59ce12["readJson"]();
            (f(_0x1a3b1d),
              (_0xbd3226 = await this["_service"]["createWorktree"](
                _0x1a3b1d,
                _0x1153fd,
              )));
            break;
          }
          case "get":
            _0xbd3226 = await this["_service"]["getWorktree"](
              { worktreeID: _0x3061cb["worktreeID"] },
              _0x1153fd,
            );
            break;
          case "setUnitRemoved": {
            let _0x5705c2 = await _0x59ce12["readJson"]();
            if (!v(_0x5705c2) || typeof _0x5705c2["removed"] != "boolean")
              throw new n["CollabError"](
                "INVALID_REQUEST",
                "removed\x20must\x20be\x20a\x20boolean",
              );
            _0xbd3226 = await this["_service"]["setUnitRemoved"](
              {
                worktreeID: _0x3061cb["worktreeID"],
                unitID: _0x3061cb["unitID"],
                removed: _0x5705c2["removed"],
              },
              _0x1153fd,
            );
            break;
          }
          case "addUnit": {
            let _0x1f6d76 = await _0x59ce12["readJson"]();
            (p(_0x1f6d76),
              (_0xbd3226 = await this["_service"]["addUnit"](
                {
                  worktreeID: _0x3061cb["worktreeID"],
                  unitID: _0x1f6d76["unitID"],
                },
                _0x1153fd,
              )));
            break;
          }
          case "createUnitFromSnapshot": {
            let _0x4f09db = m(await _0x59ce12["readJson"]());
            _0xbd3226 = await this["_service"]["createUnitFromSnapshot"](
              { worktreeID: _0x3061cb["worktreeID"], ..._0x4f09db },
              _0x1153fd,
            );
            break;
          }
          case "createUnitFromData": {
            let _0x1cda43 = h(await _0x59ce12["readJson"]());
            _0xbd3226 = await this["_service"]["createUnitFromData"](
              { worktreeID: _0x3061cb["worktreeID"], ..._0x1cda43 },
              _0x1153fd,
            );
            break;
          }
          case "ready":
            _0xbd3226 = await this["_service"]["markReady"](
              { worktreeID: _0x3061cb["worktreeID"] },
              _0x1153fd,
            );
            break;
          case "reopen":
            _0xbd3226 = await this["_service"]["reopenWorktree"](
              { worktreeID: _0x3061cb["worktreeID"] },
              _0x1153fd,
            );
            break;
          case "discard":
            _0xbd3226 = await this["_service"]["discardWorktree"](
              { worktreeID: _0x3061cb["worktreeID"] },
              _0x1153fd,
            );
            break;
          case "merge":
            _0xbd3226 = await this["_service"]["mergeWorktree"](
              { worktreeID: _0x3061cb["worktreeID"] },
              { ..._0x1153fd, memberID: "http-" + (0x0, e["randomUUID"])() },
            );
            break;
        }
        b(_0x59ce12, 0xc8, { worktree: _0xbd3226["worktree"] });
      } catch (_0x299915) {
        this["_writeFailure"](_0x59ce12, _0x299915);
      }
    }
    async ["_openEventConnection"](_0x21c078, _0xfdf6b5, _0x252450) {
      try {
        let _0x30ec28 = (0x0, e["randomUUID"])(),
          _0x2357e2 = {
            memberID: _0x30ec28,
            userID: _0xfdf6b5["userID"],
            customData: _0xfdf6b5["customData"],
          },
          _0x110d26 = {
            memberID: _0x30ec28,
            userID: _0xfdf6b5["userID"],
            name: _0xfdf6b5["userID"],
          };
        await this["_middleware"]["run"](
          "connect",
          {
            worktreeID: _0x252450,
            session: _0x2357e2,
            connection: _0x21c078,
            member: _0x110d26,
          },
          async () => void 0x0,
        );
        let _0x3ce9d9 = {
          worktreeID: _0x252450,
          connection: _0x21c078,
          session: _0x2357e2,
          ready: !0x1,
        };
        this["_eventBindings"]["set"](_0x21c078["id"], _0x3ce9d9);
        let _0x4146c0 = this["_eventRooms"]["get"](_0x252450) ?? new Map();
        (_0x4146c0["set"](_0x21c078["id"], _0x3ce9d9),
          this["_eventRooms"]["set"](_0x252450, _0x4146c0));
        try {
          let { worktree: _0x2ee4d7 } = await this["_service"]["getWorktree"](
            { worktreeID: _0x252450 },
            {
              userID: _0x2357e2["userID"],
              customData: _0x21c078["customData"],
            },
          );
          if (
            (await this["_sendChanged"](_0x3ce9d9, _0x2ee4d7),
            (_0x3ce9d9["ready"] = !0x0),
            _0x3ce9d9["pending"])
          ) {
            let _0x5df8e5 = _0x3ce9d9["pending"];
            (delete _0x3ce9d9["pending"],
              await this["_sendChanged"](_0x3ce9d9, _0x5df8e5));
          }
        } catch (_0x430c04) {
          throw (this["_removeEventBinding"](_0x21c078["id"]), _0x430c04);
        }
      } catch (_0x55fec6) {
        _0x21c078["close"](
          _0x55fec6 instanceof n["CollabError"] ||
            _0x55fec6 instanceof i["WorktreeError"]
            ? 0x3f0
            : 0x3f3,
          "Worktree\x20event\x20connection\x20rejected",
        );
      }
    }
    ["_scopedEndpoint"](_0x118a8a) {
      this["_assertRunning"]();
      let _0x2693fe = this["_scopedEndpoints"]["get"](_0x118a8a);
      if (_0x2693fe) return _0x2693fe;
      let _0x3a8446 = new t["UniverCollabEndpoint"](
        new d(this["_service"], _0x118a8a),
        {
          ticketStore: this["_options"]["ticketStore"],
          protocolBasePath: c + "/:worktreeID",
        },
      );
      (_0x3a8446["use"]("connect", (_0x190c2c, _0x4d6be9) =>
        this["_middleware"]["run"](
          "connect",
          { ..._0x190c2c, worktreeID: _0x118a8a },
          _0x4d6be9,
        ),
      ),
        _0x3a8446["use"]("joinUnit", async (_0x4f0aa1, _0x3421e1) => {
          let { worktree: _0x5b6189 } = await this["_getJoinableWorktree"](
            _0x118a8a,
            _0x4f0aa1["session"],
          );
          if (
            !_0x5b6189["units"]["some"](
              ({ unitID: _0x1e3e2b }) => _0x1e3e2b === _0x4f0aa1["unitID"],
            )
          )
            throw new n["CollabError"](
              "UNIT_NOT_FOUND",
              "Unit\x20" +
                _0x4f0aa1["unitID"] +
                "\x20is\x20not\x20in\x20Worktree\x20" +
                _0x118a8a,
            );
          await this["_middleware"]["run"](
            "joinUnit",
            { ..._0x4f0aa1, worktreeID: _0x118a8a },
            _0x3421e1,
          );
        }),
        _0x3a8446["use"]("receivePresence", (_0xcf99cd, _0x567d66) =>
          this["_middleware"]["run"](
            "receivePresence",
            { ..._0xcf99cd, worktreeID: _0x118a8a },
            _0x567d66,
          ),
        ),
        _0x3a8446["use"]("sendPresence", (_0xe67769, _0x1ebb3f) =>
          this["_middleware"]["run"](
            "sendPresence",
            { ..._0xe67769, worktreeID: _0x118a8a },
            _0x1ebb3f,
          ),
        ),
        _0x3a8446["on"]("memberLeftUnit", (_0x12c4ee) =>
          this["_emit"]("memberLeftUnit", {
            ..._0x12c4ee,
            worktreeID: _0x118a8a,
          }),
        ));
      let _0x1be054 = new Map(),
        _0x3c0341 = new Map();
      _0x3a8446["register"]({
        get: (_0x43818d, _0x416819) => {
          _0x1be054["set"]("get\x20" + _0x43818d, _0x416819);
        },
        post: (_0x44938d, _0x474741) => {
          _0x1be054["set"]("post\x20" + _0x44938d, _0x474741);
        },
        delete: (_0x21cbcb, _0x5b5908) => {
          _0x1be054["set"]("delete\x20" + _0x21cbcb, _0x5b5908);
        },
        upgrade: (_0x400343, _0x5eae6f) => {
          _0x3c0341["set"](_0x400343, _0x5eae6f);
        },
      });
      let _0x43d5aa = {
        endpoint: _0x3a8446,
        http: _0x1be054,
        upgrade: _0x3c0341,
      };
      return (this["_scopedEndpoints"]["set"](_0x118a8a, _0x43d5aa), _0x43d5aa);
    }
    async ["_getJoinableWorktree"](_0x330ba7, _0x110724) {
      try {
        let _0x59ec7d = await this["_service"]["getWorktree"](
          { worktreeID: _0x330ba7 },
          { userID: _0x110724["userID"] },
        );
        if (_0x59ec7d["worktree"]["status"] === "discarded")
          throw new n["CollabError"](
            "PERMISSION_DENIED",
            "Discarded\x20Worktree\x20cannot\x20be\x20joined",
          );
        return _0x59ec7d;
      } catch (_0x40ed5a) {
        throw _0x40ed5a instanceof i["WorktreeError"] &&
          _0x40ed5a["code"] === "WORKTREE_NOT_FOUND"
          ? new n["CollabError"]("UNIT_NOT_FOUND", _0x40ed5a["message"])
          : _0x40ed5a;
      }
    }
    ["_enqueueWorktreeChanged"](_0x1811c3) {
      if (this["_disposed"]) return;
      let _0x11fb2c = _0x1811c3["worktreeID"],
        _0x31428a = (this["_eventQueues"]["get"](_0x11fb2c) ??
          Promise["resolve"]())
          ["catch"](() => void 0x0)
          ["then"](async () => {
            let _0x1a3d9c = [
              ...(this["_eventRooms"]["get"](_0x11fb2c)?.["values"]() ?? []),
            ];
            for (let _0x296cfb of _0x1a3d9c) {
              if (!_0x296cfb["ready"]) {
                _0x296cfb["pending"] = _0x1811c3;
                continue;
              }
              await this["_sendChanged"](_0x296cfb, _0x1811c3);
            }
          });
      (this["_eventQueues"]["set"](_0x11fb2c, _0x31428a),
        _0x31428a["finally"](() => {
          this["_eventQueues"]["get"](_0x11fb2c) === _0x31428a &&
            this["_eventQueues"]["delete"](_0x11fb2c);
        }));
    }
    ["_sendChanged"](_0x1bfeef, _0x2dcfb3) {
      let _0x3d3184 = { event: "worktreeChanged", worktree: _0x2dcfb3 };
      return Promise["resolve"](
        _0x1bfeef["connection"]["send"](JSON["stringify"](_0x3d3184)),
      );
    }
    ["_removeEventBinding"](_0x286451) {
      let _0x16743b = this["_eventBindings"]["get"](_0x286451);
      if (!_0x16743b) return;
      this["_eventBindings"]["delete"](_0x286451);
      let _0x45aefb = this["_eventRooms"]["get"](_0x16743b["worktreeID"]);
      (_0x45aefb?.["delete"](_0x286451),
        _0x45aefb?.["size"] === 0x0 &&
          this["_eventRooms"]["delete"](_0x16743b["worktreeID"]));
    }
    async ["_emit"](_0x296367, _0x3743b9) {
      for (let _0x1f56e8 of [...(this["_listeners"]["get"](_0x296367) ?? [])])
        try {
          await _0x1f56e8(_0x3743b9);
        } catch {}
    }
    ["_requireUser"](_0x310591) {
      if (!_0x310591["userID"])
        throw new n["CollabError"](
          "UNAUTHENTICATED",
          "HTTP\x20user\x20is\x20not\x20authenticated",
        );
    }
    ["_writeFailure"](_0x50fc7f, _0x562fbd) {
      let _0xa90760 = x(_0x562fbd);
      b(_0x50fc7f, _0xa90760["status"], { error: _0xa90760["error"] });
    }
    ["_assertRunning"]() {
      if (this["_disposed"])
        throw new n["CollabError"](
          "INTERNAL_ERROR",
          "Worktree\x20Endpoint\x20is\x20disposed",
        );
    }
  },
  d = class {
    ["_service"];
    ["_worktreeID"];
    constructor(_0x4f6dd6, _0x2b9cda) {
      ((this["_service"] = _0x4f6dd6), (this["_worktreeID"] = _0x2b9cda));
    }
    ["use"]() {
      return { dispose: () => void 0x0 };
    }
    ["getUnitLoadData"](_0x58c25a, _0x31760a) {
      return this["_service"]["getUnitLoadData"](
        { ..._0x58c25a, worktreeID: this["_worktreeID"] },
        _0x31760a,
      );
    }
    ["getUnitLoadDataWithBlocks"](_0x59323c, _0x39b6b8) {
      return Promise["reject"](
        new n["CollabError"](
          "INVALID_REQUEST",
          "Cannot\x20read\x20Unit\x20blocks\x20through\x20a\x20Worktree\x20Endpoint",
        ),
      );
    }
    ["getChangesets"](_0x429189, _0x5c54cf) {
      return this["_service"]["getChangesets"](
        { ..._0x429189, worktreeID: this["_worktreeID"] },
        _0x5c54cf,
      );
    }
    ["getSheetBlock"](_0x1d4c41, _0x1ef47b) {
      return this["_service"]["getSheetBlock"](
        { ..._0x1d4c41, worktreeID: this["_worktreeID"] },
        _0x1ef47b,
      );
    }
    ["createUnitFromSnapshot"](_0x5743c7, _0x577c75) {
      return Promise["reject"](
        new n["CollabError"](
          "INVALID_REQUEST",
          "Cannot\x20create\x20a\x20Unit\x20through\x20a\x20Worktree\x20Endpoint",
        ),
      );
    }
    ["createUnitFromData"](_0x5835cb, _0x222da6) {
      return Promise["reject"](
        new n["CollabError"](
          "INVALID_REQUEST",
          "Cannot\x20create\x20a\x20Unit\x20through\x20a\x20Worktree\x20Endpoint",
        ),
      );
    }
    ["deleteUnits"](_0xcf4fd8, _0x4782c9) {
      return Promise["reject"](
        new n["CollabError"](
          "INVALID_REQUEST",
          "Cannot\x20delete\x20Units\x20through\x20a\x20Worktree\x20Endpoint",
        ),
      );
    }
    ["recoverUnits"](_0xcb3976, _0x42c390) {
      return Promise["reject"](
        new n["CollabError"](
          "INVALID_REQUEST",
          "Cannot\x20recover\x20Units\x20through\x20a\x20Worktree\x20Endpoint",
        ),
      );
    }
    ["submitChangeset"](_0x4beece, _0x36f48d) {
      return this["_service"]["submitChangeset"](
        { ..._0x4beece, worktreeID: this["_worktreeID"] },
        _0x36f48d,
      );
    }
    ["on"](_0x2bd90a, _0x409483) {
      return _0x2bd90a === "changesetCommitted"
        ? this["_service"]["on"]("changesetCommitted", (_0x24ec21) => {
            if (_0x24ec21["request"]["worktreeID"] === this["_worktreeID"])
              return _0x409483(_0x24ec21);
          })
        : { dispose: () => void 0x0 };
    }
    ["dispose"]() {
      return Promise["resolve"]();
    }
  };
function f(_0x44b3af) {
  if (
    !_0x44b3af ||
    typeof _0x44b3af != "object" ||
    typeof _0x44b3af["worktreeID"] != "string"
  )
    throw new n["CollabError"](
      "INVALID_REQUEST",
      "worktreeID\x20must\x20be\x20a\x20string",
    );
  let _0xf33aae = _0x44b3af["units"];
  if (
    _0xf33aae !== void 0x0 &&
    (!Array["isArray"](_0xf33aae) ||
      _0xf33aae["some"]((_0x5bb687) => typeof _0x5bb687 != "string"))
  )
    throw new n["CollabError"](
      "INVALID_REQUEST",
      "units\x20must\x20be\x20a\x20string\x20array",
    );
}
function p(_0x4c446c) {
  if (
    !_0x4c446c ||
    typeof _0x4c446c != "object" ||
    typeof _0x4c446c["unitID"] != "string"
  )
    throw new n["CollabError"](
      "INVALID_REQUEST",
      "unitID\x20must\x20be\x20a\x20string",
    );
}
function m(_0x5da07a) {
  if (!v(_0x5da07a) || !v(_0x5da07a["snapshot"]))
    throw new n["CollabError"](
      "INVALID_REQUEST",
      "snapshot\x20must\x20be\x20an\x20object",
    );
  let _0x1b9e74 = _0x5da07a["snapshot"];
  g(_0x1b9e74);
  let _0x5e3a4b = _0x5da07a["sheetBlocks"];
  if (
    _0x5e3a4b !== void 0x0 &&
    (!Array["isArray"](_0x5e3a4b) ||
      _0x5e3a4b["some"]((_0x2ab877) => !v(_0x2ab877)))
  )
    throw new n["CollabError"](
      "INVALID_REQUEST",
      "sheetBlocks\x20must\x20be\x20an\x20object\x20array",
    );
  for (let _0x225ca9 of _0x5e3a4b ?? [])
    _0x225ca9["data"] = _(_0x225ca9["data"], "sheetBlocks[].data");
  return { snapshot: _0x1b9e74, sheetBlocks: _0x5e3a4b ?? [] };
}
function h(_0x285b0e) {
  if (!v(_0x285b0e) || !y["has"](_0x285b0e["type"]) || !v(_0x285b0e["data"]))
    throw new n["CollabError"](
      "INVALID_REQUEST",
      "type\x20and\x20data\x20must\x20describe\x20a\x20supported\x20Unit",
    );
  return _0x285b0e;
}
function g(_0x465cb2) {
  let _0x53d79d =
    _0x465cb2["workbook"] ??
    _0x465cb2["doc"] ??
    _0x465cb2["slide"] ??
    _0x465cb2["board"];
  if (
    _0x53d79d &&
    ((_0x53d79d["originalMeta"] = _(
      _0x53d79d["originalMeta"],
      "snapshot\x20originalMeta",
    )),
    _0x465cb2["workbook"])
  ) {
    for (let _0x13f21e of Object["values"](_0x465cb2["workbook"]["sheets"]))
      _0x13f21e["originalMeta"] = _(
        _0x13f21e["originalMeta"],
        "snapshot\x20sheet\x20originalMeta",
      );
  }
}
function _(_0x5c1ab5, _0x310dbb) {
  if (_0x5c1ab5 instanceof Uint8Array) return _0x5c1ab5;
  if (typeof _0x5c1ab5 != "string")
    throw new n["CollabError"](
      "INVALID_REQUEST",
      _0x310dbb + "\x20must\x20be\x20a\x20base64\x20string",
    );
  try {
    return new Uint8Array(Buffer["from"](_0x5c1ab5, "base64"));
  } catch {
    throw new n["CollabError"](
      "INVALID_REQUEST",
      _0x310dbb + "\x20must\x20be\x20valid\x20base64",
    );
  }
}
function v(_0x561df8) {
  return (
    !!_0x561df8 && typeof _0x561df8 == "object" && !Array["isArray"](_0x561df8)
  );
}
var y = new Set([
  a["UniverType"]["UNIVER_SHEET"],
  a["UniverType"]["UNIVER_DOC"],
  a["UniverType"]["UNIVER_SLIDE"],
  a["UniverType"]["UNIVER_BOARD"],
  a["UniverType"]["UNIVER_BASE"],
]);
function b(_0x52e7b1, _0x3a632a, _0x1a33c5) {
  let _0x44013c = _0x52e7b1["response"];
  _0x44013c["writableEnded"] ||
    _0x44013c["destroyed"] ||
    ((_0x44013c["statusCode"] = _0x3a632a),
    _0x44013c["setHeader"](
      "content-type",
      "application/json;\x20charset=utf-8",
    ),
    _0x44013c["end"](
      JSON["stringify"](_0x1a33c5, (_0x1913b1, _0x2d6ccf) =>
        _0x2d6ccf instanceof Uint8Array
          ? Buffer["from"](_0x2d6ccf)["toString"]("base64")
          : _0x2d6ccf,
      ),
    ));
}
function x(_0x39b096) {
  return _0x39b096 instanceof r["NodeTransportError"]
    ? {
        status:
          _0x39b096["code"] === "REQUEST_BODY_TOO_LARGE"
            ? 0x19d
            : _0x39b096["code"] === "INVALID_JSON" ||
                _0x39b096["code"] === "REQUEST_ABORTED"
              ? 0x190
              : 0x1f7,
        error: { code: _0x39b096["code"], message: _0x39b096["message"] },
      }
    : _0x39b096 instanceof i["WorktreeError"]
      ? {
          status:
            _0x39b096["code"] === "WORKTREE_NOT_FOUND" ||
            _0x39b096["code"] === "WORKTREE_UNIT_NOT_FOUND"
              ? 0x194
              : 0x199,
          error: {
            code: _0x39b096["code"],
            message: _0x39b096["message"],
            retryable: _0x39b096["retryable"],
          },
        }
      : _0x39b096 instanceof n["CollabError"]
        ? {
            status: {
              UNAUTHENTICATED: 0x191,
              INVALID_REQUEST: 0x190,
              UNIT_NOT_FOUND: 0x194,
              PERMISSION_DENIED: 0x193,
              OT_CONFLICT: 0x199,
              REVISION_MISMATCH: 0x199,
              ADAPTER_FAILURE: 0x1f7,
              INTERNAL_ERROR: 0x1f4,
            }[_0x39b096["code"]],
            error: {
              code: _0x39b096["code"],
              message: _0x39b096["message"],
              retryable: _0x39b096["retryable"],
            },
          }
        : {
            status: 0x1f4,
            error: {
              code: "INTERNAL_ERROR",
              message: "Internal\x20server\x20error",
            },
          };
}
exports["UniverCollabWorktreeEndpoint"] = u;
