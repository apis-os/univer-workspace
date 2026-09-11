Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("node:crypto"),
  t = require("@univerjs-pro/collaboration-service"),
  n = require("@univerjs/protocol"),
  r = require("@univerjs-pro/collaboration-transport-node");
var i = {
  CHANGESET_ACK: "changeset_ack",
  CHANGESET_REJ: "changeset_rej",
  CHANGESET_SHOULD_RETRY: "changeset_should_retry",
  NEW_CHANGESETS: "new_changesets",
  PERMISSION_REJ: "permission_rej",
  UPDATE_CURSOR: "update_cursor",
  USERS_ENTER: "users_enter",
  USERS_LEAVE: "users_leave",
};
function a(_0x1126a9, _0x4aee14, _0x50a2bd = "") {
  return {
    cmd: _0x1126a9,
    code: n["CmdRspCode"]["OK"],
    reason: "success",
    routeKey: _0x50a2bd,
    infoRsp: { memberID: _0x4aee14 },
  };
}
function o(_0x2e4314, _0x736292, _0x441939, _0x58391c) {
  return {
    cmd: n["CombCmd"]["JOIN"],
    code: _0x736292,
    reason: _0x58391c,
    routeKey: _0x2e4314,
    joinRsp: { roomInfos: _0x441939 },
  };
}
function s(_0x11a0f0) {
  return {
    memberID: _0x11a0f0["memberID"],
    userID: _0x11a0f0["userID"],
    name: _0x11a0f0["name"],
    ...(_0x11a0f0["avatar"] === void 0x0
      ? {}
      : { avatar: _0x11a0f0["avatar"] }),
  };
}
function c(_0x438a04, _0x518b09) {
  return {
    cmd: n["CombCmd"]["RECV"],
    code: n["CmdRspCode"]["OK"],
    reason: "success",
    routeKey: _0x438a04,
    collaMsg: _0x518b09,
  };
}
function l(_0x43acdd, _0x50d110) {
  return c(_0x43acdd, {
    eventID: i["USERS_ENTER"],
    joinEvent: { ..._0x50d110, avatar: _0x50d110["avatar"] ?? "" },
  });
}
function u(_0x4fe54b, _0x1a485c) {
  return c(_0x4fe54b, { eventID: i["USERS_LEAVE"], leaveEvent: _0x1a485c });
}
function d(_0x37cc26, _0x43a02d) {
  return c(_0x37cc26, {
    eventID: i["UPDATE_CURSOR"],
    updateCursorEvent: _0x43a02d,
  });
}
function f(_0x574aa1, _0x2610f4, _0x4618c5) {
  let _0x1f71e6 = {
    [i["CHANGESET_ACK"]]: "csAckEvent",
    [i["CHANGESET_REJ"]]: "csRejEvent",
    [i["CHANGESET_SHOULD_RETRY"]]: "csShouldRetryEvent",
    [i["NEW_CHANGESETS"]]: "newCsEvent",
    [i["PERMISSION_REJ"]]: "permissionRejEvent",
  }[_0x2610f4];
  return c(_0x574aa1, { eventID: _0x2610f4, [_0x1f71e6]: { cs: _0x4618c5 } });
}
function p(_0x375452, _0x5bb323, _0x5eafa7) {
  return c(_0x375452, { ..._0x5eafa7, eventID: _0x5bb323 });
}
var m = class {
    ["_middlewares"] = new Map();
    ["use"](_0x46aacc, _0x522140) {
      let _0x55a668 = this["_middlewares"]["get"](_0x46aacc) ?? [],
        _0x1932b1 = _0x522140;
      (_0x55a668["push"](_0x1932b1),
        this["_middlewares"]["set"](_0x46aacc, _0x55a668));
      let _0x4d6427 = !0x1;
      return {
        dispose: () => {
          if (_0x4d6427) return;
          _0x4d6427 = !0x0;
          let _0x3bdff8 = _0x55a668["indexOf"](_0x1932b1);
          _0x3bdff8 >= 0x0 && _0x55a668["splice"](_0x3bdff8, 0x1);
        },
      };
    }
    async ["run"](_0x473646, _0x2a1955, _0x1395f7) {
      let _0x516293 = [...(this["_middlewares"]["get"](_0x473646) ?? [])],
        _0x10cf43 = async (_0x515355) => {
          let _0x332e21 = _0x516293[_0x515355];
          if (!_0x332e21) {
            await _0x1395f7();
            return;
          }
          let _0x258788 = !0x1,
            _0x3e1b1d,
            _0x555f7e = () => {
              if (_0x258788)
                throw Error(
                  "Endpoint\x20middleware\x20for\x20" +
                    String(_0x473646) +
                    "\x20called\x20next()\x20more\x20than\x20once",
                );
              return (
                (_0x258788 = !0x0),
                (_0x3e1b1d = _0x10cf43(_0x515355 + 0x1)),
                _0x3e1b1d
              );
            };
          try {
            await _0x332e21(_0x2a1955, _0x555f7e);
          } catch (_0x2869fb) {
            if (_0x3e1b1d)
              try {
                await _0x3e1b1d;
              } catch {}
            throw _0x2869fb;
          }
          if (!_0x258788)
            throw Error(
              "Endpoint\x20middleware\x20for\x20" +
                String(_0x473646) +
                "\x20completed\x20without\x20calling\x20next()",
            );
          await _0x3e1b1d;
        };
      await _0x10cf43(0x0);
    }
    ["clear"]() {
      this["_middlewares"]["clear"]();
    }
  },
  h = { code: n["ErrorCode"]["OK"], message: "" };
function g(_0x5aabe4, _0x314308) {
  if (!/^-?\d+$/["test"](_0x5aabe4))
    throw new t["CollabError"](
      "INVALID_REQUEST",
      _0x314308 + "\x20must\x20be\x20an\x20integer",
    );
  let _0x79c7a2 = Number(_0x5aabe4);
  if (!Number["isSafeInteger"](_0x79c7a2))
    throw new t["CollabError"](
      "INVALID_REQUEST",
      _0x314308 + "\x20is\x20outside\x20the\x20safe\x20integer\x20range",
    );
  return _0x79c7a2;
}
function _(_0x67bea2) {
  if (_0x67bea2 instanceof r["NodeTransportError"])
    return _0x67bea2["code"] === "REQUEST_BODY_TOO_LARGE"
      ? {
          status: 0x19d,
          error: {
            code: n["ErrorCode"]["INVALID_ARGUMENT"],
            message: _0x67bea2["message"],
          },
        }
      : _0x67bea2["code"] === "INVALID_JSON" ||
          _0x67bea2["code"] === "REQUEST_ABORTED"
        ? {
            status: 0x190,
            error: {
              code: n["ErrorCode"]["INVALID_ARGUMENT"],
              message: _0x67bea2["message"],
            },
          }
        : {
            status: 0x1f7,
            error: {
              code: n["ErrorCode"]["INTERNAL_ERROR"],
              message: "Transport\x20unavailable",
            },
          };
  if (!(_0x67bea2 instanceof t["CollabError"]))
    return {
      status: 0x1f4,
      error: {
        code: n["ErrorCode"]["INTERNAL_ERROR"],
        message: "Internal\x20server\x20error",
      },
    };
  let _0x3cbd3d = {
    UNAUTHENTICATED: { status: 0x191, code: n["ErrorCode"]["UNAUTHENTICATED"] },
    INVALID_REQUEST: {
      status: 0x190,
      code: n["ErrorCode"]["INVALID_ARGUMENT"],
    },
    UNIT_NOT_FOUND: { status: 0x194, code: n["ErrorCode"]["NOT_FOUND"] },
    PERMISSION_DENIED: {
      status: 0x193,
      code: n["ErrorCode"]["PERMISSION_DENIED"],
    },
    OT_CONFLICT: { status: 0x199, code: n["ErrorCode"]["APPLY_REJECT"] },
    REVISION_MISMATCH: {
      status: 0x199,
      code: n["ErrorCode"]["CHANGESET_REVISION_CONFILICT"],
    },
    ADAPTER_FAILURE: { status: 0x1f7, code: n["ErrorCode"]["INTERNAL_ERROR"] },
    INTERNAL_ERROR: { status: 0x1f4, code: n["ErrorCode"]["INTERNAL_ERROR"] },
  }[_0x67bea2["code"]];
  return {
    status: _0x3cbd3d["status"],
    error: { code: _0x3cbd3d["code"], message: _0x67bea2["message"] },
  };
}
function v(_0x38001e, _0x1c7869, _0x19b18a) {
  _0x38001e["writableEnded"] ||
    _0x38001e["destroyed"] ||
    ((_0x38001e["statusCode"] = _0x1c7869),
    _0x38001e["setHeader"](
      "content-type",
      "application/json;\x20charset=utf-8",
    ),
    _0x38001e["end"](
      JSON["stringify"](_0x19b18a, (_0x2f787b, _0x426105) =>
        _0x426105 instanceof Uint8Array
          ? Buffer["from"](_0x426105)["toString"]("base64")
          : _0x426105,
      ),
    ));
}
var y = class {
    ["_tickets"] = new Map();
    ["_disposed"] = !0x1;
    async ["issue"](_0x2d94ea, _0x63488a) {
      if (this["_disposed"])
        throw Error("Session\x20ticket\x20store\x20is\x20disposed");
      if (!Number["isSafeInteger"](_0x63488a) || _0x63488a <= 0x0)
        throw TypeError(
          "Session\x20ticket\x20TTL\x20must\x20be\x20a\x20positive\x20safe\x20integer",
        );
      this["_purgeExpired"]();
      let _0x183f77;
      do _0x183f77 = (0x0, e["randomBytes"])(0x20)["toString"]("base64url");
      while (this["_tickets"]["has"](_0x183f77));
      return (
        this["_tickets"]["set"](_0x183f77, {
          record: _0x2d94ea,
          expiresAt: Date["now"]() + _0x63488a,
        }),
        _0x183f77
      );
    }
    async ["consume"](_0x5afdb3) {
      if (this["_disposed"] || !_0x5afdb3) return null;
      let _0x505332 = this["_tickets"]["get"](_0x5afdb3);
      return !_0x505332 ||
        (this["_tickets"]["delete"](_0x5afdb3),
        _0x505332["expiresAt"] <= Date["now"]())
        ? null
        : _0x505332["record"];
    }
    async ["dispose"]() {
      this["_disposed"] ||
        ((this["_disposed"] = !0x0), this["_tickets"]["clear"]());
    }
    ["_purgeExpired"]() {
      let _0x21c492 = Date["now"]();
      for (let [_0x463b2b, _0x54b827] of this["_tickets"])
        _0x54b827["expiresAt"] <= _0x21c492 &&
          this["_tickets"]["delete"](_0x463b2b);
    }
  },
  b = 0x5 * 0xea60;
function x(_0x307e0e) {
  if (
    !_0x307e0e["startsWith"]("/") ||
    _0x307e0e === "/" ||
    _0x307e0e["endsWith"]("/") ||
    _0x307e0e["includes"]("?") ||
    _0x307e0e["includes"]("#")
  )
    throw TypeError(
      "protocolBasePath\x20must\x20be\x20an\x20absolute\x20path\x20without\x20a\x20trailing\x20slash",
    );
  return _0x307e0e;
}
function S(_0x575614) {
  if (!_0x575614 || typeof _0x575614 != "object")
    throw new t["CollabError"](
      "INVALID_REQUEST",
      "Request\x20body\x20must\x20be\x20an\x20object",
    );
  let _0x470af9 = _0x575614;
  if (
    typeof _0x470af9["unitID"] != "string" ||
    typeof _0x470af9["memberID"] != "string" ||
    !Number["isSafeInteger"](_0x470af9["type"]) ||
    !_0x470af9["changeset"] ||
    typeof _0x470af9["changeset"] != "object"
  )
    throw new t["CollabError"](
      "INVALID_REQUEST",
      "Invalid\x20new\x20changes\x20request",
    );
}
function C(_0x2f832a) {
  if (
    !Array["isArray"](_0x2f832a) ||
    _0x2f832a["length"] === 0x0 ||
    _0x2f832a["some"](
      (_0x48d15d) =>
        typeof _0x48d15d != "string" || _0x48d15d["trim"]()["length"] === 0x0,
    )
  )
    throw new t["CollabError"](
      "INVALID_REQUEST",
      "unitIds\x20must\x20be\x20a\x20non-empty\x20string\x20array",
    );
}
function w(_0x6b7a88) {
  let _0x5f4c3a = _0x6b7a88["getAll"]("unitIds");
  C(_0x5f4c3a);
  let _0x3fe2ab = _0x6b7a88["getAll"]("hardDelete");
  if (
    _0x3fe2ab["length"] > 0x1 ||
    (_0x3fe2ab["length"] === 0x1 &&
      _0x3fe2ab[0x0] !== "true" &&
      _0x3fe2ab[0x0] !== "false")
  )
    throw new t["CollabError"](
      "INVALID_REQUEST",
      "hardDelete\x20must\x20be\x20true\x20or\x20false",
    );
  return { unitIds: _0x5f4c3a, hardDelete: _0x3fe2ab[0x0] === "true" };
}
function T(_0x1a6e72) {
  if (!_0x1a6e72 || typeof _0x1a6e72 != "object")
    throw new t["CollabError"](
      "INVALID_REQUEST",
      "Request\x20body\x20must\x20be\x20an\x20object",
    );
  C(_0x1a6e72["unitIds"]);
}
var E = class {
  ["_service"];
  ["_middleware"] = new m();
  ["_listeners"] = new Map();
  ["_bindingsByConnection"] = new Map();
  ["_bindingsByMember"] = new Map();
  ["_rooms"] = new Map();
  ["_outboundQueues"] = new Map();
  ["_ticketStore"];
  ["_ownsTicketStore"];
  ["_ticketTtlMs"];
  ["_protocolBasePath"];
  ["_serviceSubscriptions"];
  ["_deletedUnitIDs"] = new Set();
  ["_disposed"] = !0x1;
  constructor(_0x241596, _0x584e41 = {}) {
    if (((this["_service"] = _0x241596), !_0x241596))
      throw TypeError("UniverCollabEndpoint\x20requires\x20a\x20service");
    if (
      ((this["_ticketStore"] = _0x584e41["ticketStore"] ?? new y()),
      (this["_ownsTicketStore"] = _0x584e41["ticketStore"] === void 0x0),
      (this["_ticketTtlMs"] = _0x584e41["sessionTicketTtlMs"] ?? b),
      !Number["isSafeInteger"](this["_ticketTtlMs"]) ||
        this["_ticketTtlMs"] <= 0x0)
    )
      throw TypeError(
        "sessionTicketTtlMs\x20must\x20be\x20a\x20positive\x20safe\x20integer",
      );
    ((this["_protocolBasePath"] = x(
      _0x584e41["protocolBasePath"] ?? "/universer-api",
    )),
      (this["_serviceSubscriptions"] = [
        this["_service"]["on"]("changesetCommitted", (_0x4e3a89) => {
          this["_enqueueCommittedChangeset"](
            _0x4e3a89["changeset"],
            _0x4e3a89["memberID"],
          );
        }),
        this["_service"]["on"]("unitsDeleted", (_0x13a44d) => {
          for (let _0x1be6d7 of _0x13a44d["request"]["unitIDs"])
            this["_deletedUnitIDs"]["add"](_0x1be6d7);
          for (let _0x2a40fa of _0x13a44d["request"]["unitIDs"])
            this["_enqueueUnitOutbound"](_0x2a40fa, async () => {
              this["_evictUnitRoom"](_0x2a40fa);
            });
        }),
        this["_service"]["on"]("unitsRecovered", async (_0x477010) => {
          await Promise["all"](
            _0x477010["request"]["unitIDs"]["map"]((_0x21c8cb) =>
              this["_enqueueUnitOutbound"](_0x21c8cb, async () => {
                this["_deletedUnitIDs"]["delete"](_0x21c8cb);
              }),
            ),
          );
        }),
      ]));
  }
  ["use"](_0x45e00b, _0x36f003) {
    return (
      this["_assertRunning"](),
      this["_middleware"]["use"](_0x45e00b, _0x36f003)
    );
  }
  ["on"](_0x480674, _0x5ea811) {
    this["_assertRunning"]();
    let _0x448ff4 = this["_listeners"]["get"](_0x480674) ?? new Set(),
      _0x255b3c = _0x5ea811;
    (_0x448ff4["add"](_0x255b3c),
      this["_listeners"]["set"](_0x480674, _0x448ff4));
    let _0x1c4595 = !0x1;
    return {
      dispose: () => {
        _0x1c4595 || ((_0x1c4595 = !0x0), _0x448ff4["delete"](_0x255b3c));
      },
    };
  }
  ["findJoinedSession"](_0x26dc24) {
    if (this["_disposed"]) return null;
    let _0x303bcb = this["_bindingsByMember"]["get"](_0x26dc24["memberID"]);
    return !_0x303bcb ||
      _0x303bcb["session"]["userID"] !== _0x26dc24["authenticatedUserID"] ||
      !_0x303bcb["joinedUnitIDs"]["has"](_0x26dc24["unitID"])
      ? null
      : _0x303bcb["session"];
  }
  ["findJoinedSessionByUser"](_0x1737c2) {
    if (this["_disposed"]) return null;
    for (let _0x348f5f of this["_rooms"]
      ["get"](_0x1737c2["unitID"])
      ?.["values"]() ?? [])
      if (_0x348f5f["session"]["userID"] === _0x1737c2["authenticatedUserID"])
        return _0x348f5f["session"];
    return null;
  }
  async ["invalidateUnitSessions"](_0xbd61ce) {
    if (
      (this["_assertRunning"](),
      typeof _0xbd61ce["unitID"] != "string" || !_0xbd61ce["unitID"])
    )
      throw TypeError("unitID\x20must\x20be\x20a\x20non-empty\x20string");
    if (
      _0xbd61ce["userID"] !== void 0x0 &&
      (typeof _0xbd61ce["userID"] != "string" || !_0xbd61ce["userID"])
    )
      throw TypeError(
        "userID\x20must\x20be\x20a\x20non-empty\x20string\x20when\x20provided",
      );
    await this["_enqueueUnitOutbound"](_0xbd61ce["unitID"], async () => {
      let _0xb692fa = [
        ...(this["_rooms"]["get"](_0xbd61ce["unitID"])?.["values"]() ?? []),
      ]["filter"](
        (_0x2ab42f) =>
          _0xbd61ce["userID"] === void 0x0 ||
          _0x2ab42f["session"]["userID"] === _0xbd61ce["userID"],
      );
      for (let _0x1f822f of _0xb692fa)
        (_0x1f822f["connection"]["close"](0xfa3, "Unit\x20access\x20changed"),
          await this["_disconnectBinding"](_0x1f822f, "session-evicted"));
    });
  }
  async ["publishTrustedUnitEvent"](_0xc24510) {
    this["_assertRunning"]();
    let _0x2a93da = [
        ...(this["_rooms"]["get"](_0xc24510["unitID"])?.["keys"]() ?? []),
      ],
      _0x4468e8 = this["_bindingsByMember"]
        ["get"](_0xc24510["memberID"])
        ?.["joinedUnitIDs"]["has"](_0xc24510["unitID"])
        ? _0xc24510["memberID"]
        : void 0x0,
      _0x4a4d25 = p(
        _0xc24510["unitID"],
        _0xc24510["eventID"],
        _0xc24510["data"],
      );
    this["_enqueueUnitOutbound"](_0xc24510["unitID"], async () => {
      for (let _0x4cf2e3 of _0x2a93da) {
        if (_0x4cf2e3 === _0x4468e8) continue;
        let _0x2f9ce7 = this["_bindingsByMember"]["get"](_0x4cf2e3);
        _0x2f9ce7?.["joinedUnitIDs"]["has"](_0xc24510["unitID"]) &&
          (await this["_safeSend"](_0x2f9ce7["connection"], _0x4a4d25));
      }
    });
  }
  ["register"](_0x516ab7) {
    this["_assertRunning"]();
    let _0x3fc1a5 = this["_protocolBasePath"],
      _0x1a85c9 = (_0x59cbdc) => (_0x33f3ad) =>
        this["_handleHttp"](_0x33f3ad, _0x59cbdc);
    (_0x516ab7["get"](_0x3fc1a5 + "/user/session-ticket", _0x1a85c9("ticket")),
      _0x516ab7["delete"](
        _0x3fc1a5 + "/snapshot/-/units",
        _0x1a85c9("delete-units"),
      ),
      _0x516ab7["post"](
        _0x3fc1a5 + "/snapshot/-/units/recover",
        _0x1a85c9("recover-units"),
      ),
      _0x516ab7["post"](
        _0x3fc1a5 + "/comb/:type/unit/:unitID/new_changes",
        _0x1a85c9("new-changes"),
      ),
      _0x516ab7["get"](
        _0x3fc1a5 + "/snapshot/block/:type/unit/:unitID/block/:blockID",
        _0x1a85c9("deserialized-block"),
      ),
      _0x516ab7["get"](
        _0x3fc1a5 + "/snapshot/:type/unit/:unitID/rev/:revision",
        _0x1a85c9("unit"),
      ),
      _0x516ab7["get"](
        _0x3fc1a5 + "/snapshot/:type/unit/:unitID/block/:blockID",
        _0x1a85c9("block"),
      ),
      _0x516ab7["get"](
        _0x3fc1a5 + "/snapshot/:type/unit/:unitID/fetchmissing",
        _0x1a85c9("fetch-missing"),
      ),
      _0x516ab7["upgrade"](_0x3fc1a5 + "/comb/connect", (_0x568ba3) =>
        this["_handleUpgrade"](_0x568ba3),
      ));
  }
  async ["_handleUpgrade"](_0x539aea) {
    if (this["_disposed"]) {
      _0x539aea["reject"](0x1f7, "Endpoint\x20is\x20disposed");
      return;
    }
    let _0x745ec = new URL(
        _0x539aea["incomingMessage"]["url"] ?? "/",
        "http://localhost",
      ),
      _0x113a45 = await this["_ticketStore"]["consume"](
        _0x745ec["searchParams"]["get"]("sessionTicket") ?? "",
      );
    if (!_0x113a45) {
      _0x539aea["reject"](
        0x191,
        "Invalid\x20or\x20expired\x20session\x20ticket",
      );
      return;
    }
    _0x539aea["accept"]({
      open: ({ connection: _0x2582bb }) =>
        this["_openConnection"](_0x113a45, _0x2582bb),
      message: (_0x1f29ae) => this["_handleMessage"](_0x1f29ae),
      close: ({ connection: _0x163dcc }) =>
        this["_disconnectConnection"](_0x163dcc, "connection-closed"),
    });
  }
  async ["dispose"]() {
    if (this["_disposed"]) return;
    this["_disposed"] = !0x0;
    for (let _0x3ce30c of this["_serviceSubscriptions"]) _0x3ce30c["dispose"]();
    await Promise["allSettled"]([...this["_outboundQueues"]["values"]()]);
    let _0x5788be = [...this["_bindingsByConnection"]["values"]()];
    for (let _0x3b0af4 of _0x5788be)
      (await this["_disconnectBinding"](_0x3b0af4, "endpoint-disposed"),
        _0x3b0af4["connection"]["close"](0x3e9, "Endpoint\x20disposed"));
    (this["_bindingsByConnection"]["clear"](),
      this["_bindingsByMember"]["clear"](),
      this["_rooms"]["clear"](),
      this["_outboundQueues"]["clear"](),
      this["_middleware"]["clear"](),
      this["_listeners"]["clear"](),
      this["_ownsTicketStore"] && (await this["_ticketStore"]["dispose"]?.()));
  }
  async ["_handleHttp"](_0x14ab9e, _0x181649) {
    try {
      this["_assertRunning"]();
      let _0x273e1f = new URL(
        _0x14ab9e["incomingMessage"]["url"] ?? "/",
        "http://localhost",
      );
      if (!_0x14ab9e["userID"])
        throw new t["CollabError"](
          "UNAUTHENTICATED",
          "HTTP\x20user\x20is\x20not\x20authenticated",
        );
      if (_0x181649 === "ticket") {
        let _0x2766d4 = await this["_ticketStore"]["issue"](
          { userID: _0x14ab9e["userID"], customData: _0x14ab9e["customData"] },
          this["_ticketTtlMs"],
        );
        v(_0x14ab9e["response"], 0xc8, { error: h, ticket: _0x2766d4 });
        return;
      }
      let _0x50ab7e = {
        userID: _0x14ab9e["userID"],
        customData: _0x14ab9e["customData"],
      };
      if (_0x181649 === "delete-units") {
        let _0x585da3 = w(_0x273e1f["searchParams"]);
        (await this["_service"]["deleteUnits"](
          {
            unitIDs: _0x585da3["unitIds"],
            hardDelete: _0x585da3["hardDelete"],
          },
          _0x50ab7e,
        ),
          v(_0x14ab9e["response"], 0xc8, { error: h }));
        return;
      }
      if (_0x181649 === "recover-units") {
        let _0x1007e4 = await _0x14ab9e["readJson"]();
        (T(_0x1007e4),
          await this["_service"]["recoverUnits"](
            { unitIDs: _0x1007e4["unitIds"] },
            _0x50ab7e,
          ),
          v(_0x14ab9e["response"], 0xc8, { error: h }));
        return;
      }
      let _0x4877b3 = g(_0x14ab9e["params"]["type"], "type"),
        _0xe5ae64 = _0x14ab9e["params"]["unitID"];
      if (_0x181649 === "new-changes") {
        await this["_handleNewChanges"](_0x14ab9e, _0xe5ae64, _0x4877b3);
        return;
      }
      switch (_0x181649) {
        case "unit": {
          let _0x323c51 = g(_0x14ab9e["params"]["revision"], "revision"),
            _0x4666f0 = await this["_service"]["getUnitLoadData"](
              { unitID: _0xe5ae64, type: _0x4877b3, revision: _0x323c51 },
              _0x50ab7e,
            );
          v(_0x14ab9e["response"], 0xc8, {
            error: h,
            snapshot: _0x4666f0["snapshot"],
            changesets: _0x4666f0["changesets"],
          });
          return;
        }
        case "block":
        case "deserialized-block": {
          let _0x5560ea = await this["_service"]["getSheetBlock"](
            {
              unitID: _0xe5ae64,
              type: _0x4877b3,
              blockID: _0x14ab9e["params"]["blockID"],
            },
            _0x50ab7e,
          );
          if (!_0x5560ea["block"])
            throw new t["CollabError"](
              "UNIT_NOT_FOUND",
              "Sheet\x20block\x20was\x20not\x20found",
            );
          let _0x529aff =
            _0x181649 === "deserialized-block"
              ? {
                  ..._0x5560ea["block"],
                  data: JSON["parse"](
                    new TextDecoder()["decode"](_0x5560ea["block"]["data"]),
                  ),
                }
              : _0x5560ea["block"];
          v(_0x14ab9e["response"], 0xc8, { error: h, block: _0x529aff });
          return;
        }
        case "fetch-missing": {
          let _0x2d2fa7 = g(
              _0x273e1f["searchParams"]["get"]("from") ?? "",
              "from",
            ),
            _0x1b692a = g(_0x273e1f["searchParams"]["get"]("to") ?? "", "to"),
            _0x499ebe = await this["_service"]["getChangesets"](
              {
                unitID: _0xe5ae64,
                type: _0x4877b3,
                from: _0x2d2fa7,
                to: _0x1b692a,
              },
              _0x50ab7e,
            );
          v(_0x14ab9e["response"], 0xc8, {
            error: h,
            changesets: _0x499ebe["changesets"],
            latestRevision: _0x499ebe["latestRevision"],
          });
          return;
        }
      }
    } catch (_0x20dcce) {
      let _0x308cfe = _(
        _0x20dcce instanceof SyntaxError
          ? new t["CollabError"](
              "INTERNAL_ERROR",
              "Stored\x20sheet\x20block\x20is\x20not\x20valid\x20JSON",
              { cause: _0x20dcce },
            )
          : _0x20dcce,
      );
      v(_0x14ab9e["response"], _0x308cfe["status"], {
        error: _0x308cfe["error"],
      });
    }
  }
  async ["_openConnection"](_0x3ec78b, _0x242262) {
    try {
      let _0xf1d30e = (0x0, e["randomUUID"])(),
        _0x4865cb = {
          memberID: _0xf1d30e,
          userID: _0x3ec78b["userID"],
          customData: _0x3ec78b["customData"],
        },
        _0x5ae14e = {
          memberID: _0xf1d30e,
          userID: _0x3ec78b["userID"],
          name: _0x3ec78b["userID"],
        },
        _0x408dd1 = {
          connection: _0x242262,
          session: _0x4865cb,
          member: _0x5ae14e,
        };
      await this["_middleware"]["run"]("connect", _0x408dd1, () => void 0x0);
      let _0x25d12f = {
        connection: _0x242262,
        session: _0x4865cb,
        member: _0x5ae14e,
        joinedUnitIDs: new Set(),
      };
      (this["_bindingsByConnection"]["set"](_0x242262["id"], _0x25d12f),
        this["_bindingsByMember"]["set"](_0xf1d30e, _0x25d12f));
    } catch (_0x2a8f10) {
      _0x242262["close"](
        _0x2a8f10 instanceof t["CollabError"] ? 0x3f0 : 0x3f3,
        _0x2a8f10 instanceof t["CollabError"]
          ? "Connection\x20rejected"
          : "Endpoint\x20failure",
      );
    }
  }
  async ["_handleMessage"](_0x27bb3b) {
    let _0x360bcf = this["_bindingsByConnection"]["get"](
      _0x27bb3b["connection"]["id"],
    );
    if (!_0x360bcf) {
      _0x27bb3b["connection"]["close"](
        0x3f0,
        "WebSocket\x20Session\x20is\x20not\x20established",
      );
      return;
    }
    if (typeof _0x27bb3b["data"] != "string") {
      _0x27bb3b["connection"]["close"](
        0x3eb,
        "Comb\x20messages\x20must\x20be\x20JSON\x20text",
      );
      return;
    }
    let _0x108a1b;
    try {
      let _0x2779ee = JSON["parse"](_0x27bb3b["data"]);
      if (!_0x2779ee || typeof _0x2779ee != "object") throw Error("invalid");
      _0x108a1b = _0x2779ee;
    } catch {
      _0x27bb3b["connection"]["close"](
        0x3eb,
        "Invalid\x20Comb\x20JSON\x20message",
      );
      return;
    }
    let _0x2b5b8f =
      typeof _0x108a1b["routeKey"] == "string" ? _0x108a1b["routeKey"] : "";
    switch (_0x108a1b["cmd"]) {
      case n["CombCmd"]["HELLO"]:
      case n["CombCmd"]["HEARTBEAT"]:
        await _0x27bb3b["connection"]["send"](
          JSON["stringify"](
            a(_0x108a1b["cmd"], _0x360bcf["member"]["memberID"], _0x2b5b8f),
          ),
        );
        return;
      case n["CombCmd"]["JOIN"]:
        await this["_handleJoin"](_0x360bcf, _0x108a1b, _0x2b5b8f);
        return;
      case n["CombCmd"]["LEAVE"]:
        await this["_handleLeave"](_0x360bcf, _0x108a1b, _0x2b5b8f);
        return;
      case n["CombCmd"]["INGEST"]:
        if (_0x108a1b["collaMsg"]?.["eventID"] !== i["UPDATE_CURSOR"]) return;
        await this["_handlePresence"](
          _0x360bcf,
          _0x108a1b,
          _0x27bb3b["customData"],
        );
        return;
      default:
        return;
    }
  }
  async ["_handleJoin"](_0x6b67b3, _0x1ce086, _0x5c3aa6) {
    let _0xabe3a9 = _0x1ce086["joinReq"]?.["rooms"],
      _0x25192 = _0xabe3a9?.["length"]
        ? _0xabe3a9["map"]((_0x1a4236) => _0x1a4236["roomID"])
        : _0x5c3aa6
          ? [_0x5c3aa6]
          : [];
    if (
      _0x25192["length"] === 0x0 ||
      _0x25192["some"](
        (_0x16b2de) => typeof _0x16b2de != "string" || !_0x16b2de,
      )
    ) {
      await _0x6b67b3["connection"]["send"](
        JSON["stringify"](
          o(
            _0x5c3aa6,
            n["CmdRspCode"]["FAIL"],
            {},
            "Invalid\x20JOIN\x20request",
          ),
        ),
      );
      return;
    }
    let _0x37382b = [...new Set(_0x25192)],
      _0x4729bd = _0x37382b["filter"](
        (_0xa69b70) => !_0x6b67b3["joinedUnitIDs"]["has"](_0xa69b70),
      );
    try {
      for (let _0x2b325c of _0x37382b) this["_assertJoinable"](_0x2b325c);
      for (let _0x1a9608 of _0x4729bd)
        await this["_middleware"]["run"](
          "joinUnit",
          { session: _0x6b67b3["session"], unitID: _0x1a9608 },
          () => void 0x0,
        );
      for (let _0x464cab of _0x37382b) this["_assertJoinable"](_0x464cab);
    } catch (_0x174ea7) {
      let _0x76dab4 =
        _0x174ea7 instanceof t["CollabError"] &&
        _0x174ea7["code"] === "UNIT_NOT_FOUND"
          ? n["CmdRspCode"]["JOIN_ROOM_NOT_EXISTS"]
          : _0x174ea7 instanceof t["CollabError"] &&
              (_0x174ea7["code"] === "PERMISSION_DENIED" ||
                _0x174ea7["code"] === "UNAUTHENTICATED")
            ? n["CmdRspCode"]["JOIN_ROOM_PERMISSION_DENIED"]
            : n["CmdRspCode"]["FAIL"];
      await _0x6b67b3["connection"]["send"](
        JSON["stringify"](
          o(
            _0x5c3aa6 || _0x37382b[0x0],
            _0x76dab4,
            {},
            _0x174ea7 instanceof t["CollabError"]
              ? _0x174ea7["message"]
              : "JOIN\x20failed",
          ),
        ),
      );
      return;
    }
    for (let _0x236605 of _0x4729bd) {
      let _0x15a0bf = this["_rooms"]["get"](_0x236605) ?? new Map();
      (_0x15a0bf["set"](_0x6b67b3["member"]["memberID"], _0x6b67b3),
        this["_rooms"]["set"](_0x236605, _0x15a0bf),
        _0x6b67b3["joinedUnitIDs"]["add"](_0x236605));
    }
    let _0x598734 = {};
    for (let _0x42113a of _0x37382b)
      _0x598734[_0x42113a] = {
        roomID: _0x42113a,
        members: [...(this["_rooms"]["get"](_0x42113a)?.["values"]() ?? [])][
          "map"
        ]((_0xad48db) => s(_0xad48db["member"])),
      };
    await _0x6b67b3["connection"]["send"](
      JSON["stringify"](
        o(
          _0x5c3aa6 || _0x37382b[0x0],
          n["CmdRspCode"]["OK"],
          _0x598734,
          "success",
        ),
      ),
    );
    for (let _0x2f33f8 of _0x4729bd)
      await this["_broadcastToRoom"](
        _0x2f33f8,
        l(_0x2f33f8, s(_0x6b67b3["member"])),
        _0x6b67b3["member"]["memberID"],
      );
  }
  async ["_handleLeave"](_0x20e59d, _0x5c8b99, _0x171ec3) {
    let _0x612616 =
      typeof _0x5c8b99["leaveReq"]?.["roomID"] == "string"
        ? _0x5c8b99["leaveReq"]["roomID"]
        : _0x171ec3;
    _0x612616 &&
      (await this["_leaveUnit"](_0x20e59d, _0x612616, "client-leave"));
  }
  async ["_handlePresence"](_0x7ac44d, _0x5b8747, _0x160c77) {
    let _0x471ef5 =
        typeof _0x5b8747["routeKey"] == "string" ? _0x5b8747["routeKey"] : "",
      _0x33d710 = _0x5b8747["collaMsg"]?.["updateCursorEvent"]?.["selection"];
    if (
      !_0x471ef5 ||
      !_0x7ac44d["joinedUnitIDs"]["has"](_0x471ef5) ||
      typeof _0x33d710 != "string"
    )
      return;
    let _0x461f3a = {
      unitID: _0x471ef5,
      memberID: _0x7ac44d["member"]["memberID"],
      selection: _0x33d710,
    };
    try {
      await this["_middleware"]["run"](
        "receivePresence",
        {
          session: _0x7ac44d["session"],
          unitID: _0x471ef5,
          payload: _0x461f3a,
          customData: _0x160c77,
        },
        () => void 0x0,
      );
    } catch (_0x3882f8) {
      if (_0x3882f8 instanceof t["CollabError"]) return;
      throw _0x3882f8;
    }
    if (typeof _0x461f3a["selection"] != "string") return;
    let _0x4c63c1 = [...(this["_rooms"]["get"](_0x471ef5)?.["values"]() ?? [])][
      "filter"
    ]((_0xbf3fe5) => _0xbf3fe5 !== _0x7ac44d);
    for (let _0xc62a8f of _0x4c63c1) {
      let _0x5952b0 = {
        unitID: _0x471ef5,
        memberID: _0x7ac44d["member"]["memberID"],
        selection: _0x461f3a["selection"],
      };
      try {
        await this["_middleware"]["run"](
          "sendPresence",
          {
            session: _0x7ac44d["session"],
            unitID: _0x471ef5,
            payload: _0x5952b0,
            customData: _0x160c77,
            targetMemberID: _0xc62a8f["member"]["memberID"],
          },
          () => void 0x0,
        );
      } catch {
        continue;
      }
      typeof _0x5952b0["selection"] == "string" &&
        (await this["_safeSend"](
          _0xc62a8f["connection"],
          d(_0x471ef5, {
            unitID: _0x471ef5,
            memberID: _0x7ac44d["member"]["memberID"],
            selection: _0x5952b0["selection"],
          }),
        ));
    }
  }
  async ["_handleNewChanges"](_0xa2ab75, _0x56b165, _0x49f77f) {
    let _0xb4492a = await _0xa2ab75["readJson"]();
    if (
      (S(_0xb4492a),
      _0xb4492a["unitID"] !== _0x56b165 ||
        _0xb4492a["type"] !== _0x49f77f ||
        _0xb4492a["changeset"]?.["unitID"] !== _0x56b165 ||
        _0xb4492a["changeset"]["type"] !== _0x49f77f)
    )
      throw new t["CollabError"](
        "INVALID_REQUEST",
        "Route,\x20request\x20and\x20changeset\x20identity\x20must\x20match",
      );
    let _0x44fa29 = this["_bindingsByMember"]["get"](_0xb4492a["memberID"]);
    if (!_0x44fa29 || _0x44fa29["session"]["userID"] !== _0xa2ab75["userID"])
      throw new t["CollabError"](
        "PERMISSION_DENIED",
        "memberID\x20does\x20not\x20belong\x20to\x20the\x20authenticated\x20user",
      );
    if (!_0x44fa29["joinedUnitIDs"]["has"](_0x56b165))
      throw new t["CollabError"](
        "PERMISSION_DENIED",
        "Session\x20has\x20not\x20joined\x20this\x20unit",
      );
    let _0x5997cb = await this["_service"]["submitChangeset"](
      { changeset: _0xb4492a["changeset"] },
      {
        userID: _0xa2ab75["userID"],
        memberID: _0x44fa29["session"]["memberID"],
        customData: _0xa2ab75["customData"],
      },
    );
    if (_0x5997cb["status"] === "already-committed")
      await this["_safeSend"](
        _0x44fa29["connection"],
        f(_0x56b165, i["CHANGESET_ACK"], _0x5997cb["changeset"]),
      );
    else {
      if (_0x5997cb["status"] === "rejected") {
        let _0x3111ea =
          _0x5997cb["error"]["code"] === "PERMISSION_DENIED" ||
          _0x5997cb["error"]["code"] === "UNAUTHENTICATED"
            ? i["PERMISSION_REJ"]
            : i["CHANGESET_REJ"];
        await this["_safeSend"](
          _0x44fa29["connection"],
          f(
            _0x56b165,
            _0x3111ea,
            this["_trustedClientChangeset"](_0xb4492a["changeset"], _0x44fa29),
          ),
        );
      } else
        _0x5997cb["status"] === "retry" &&
          (await this["_safeSend"](
            _0x44fa29["connection"],
            f(
              _0x56b165,
              i["CHANGESET_SHOULD_RETRY"],
              this["_trustedClientChangeset"](
                _0xb4492a["changeset"],
                _0x44fa29,
              ),
            ),
          ));
    }
    v(_0xa2ab75["response"], 0xc8, { error: h });
  }
  ["_trustedClientChangeset"](_0x3094b0, _0x5edf11) {
    return {
      ..._0x3094b0,
      userID: _0x5edf11["session"]["userID"],
      memberID: _0x5edf11["session"]["memberID"],
    };
  }
  ["_enqueueCommittedChangeset"](_0x40158b, _0x5f47c9) {
    if (this["_disposed"]) return;
    let _0x18b9c3 = _0x40158b["unitID"],
      _0x27cfd2 = [...(this["_rooms"]["get"](_0x18b9c3)?.["keys"]() ?? [])];
    this["_enqueueUnitOutbound"](_0x18b9c3, async () => {
      for (let _0x1064e4 of _0x27cfd2) {
        let _0x14698c = this["_bindingsByMember"]["get"](_0x1064e4);
        if (!_0x14698c?.["joinedUnitIDs"]["has"](_0x18b9c3)) continue;
        let _0x49982d =
          _0x1064e4 === _0x5f47c9 ? i["CHANGESET_ACK"] : i["NEW_CHANGESETS"];
        await this["_safeSend"](
          _0x14698c["connection"],
          f(_0x18b9c3, _0x49982d, _0x40158b),
        );
      }
    });
  }
  ["_evictUnitRoom"](_0x44675b) {
    let _0x1e2bcc = this["_rooms"]["get"](_0x44675b);
    if (_0x1e2bcc) {
      this["_rooms"]["delete"](_0x44675b);
      for (let _0x3df440 of _0x1e2bcc["values"]())
        _0x3df440["joinedUnitIDs"]["delete"](_0x44675b);
    }
  }
  ["_enqueueUnitOutbound"](_0x2eaef3, _0x55f076) {
    let _0x599ea8 = (this["_outboundQueues"]["get"](_0x2eaef3) ??
      Promise["resolve"]())
      ["catch"](() => void 0x0)
      ["then"](_0x55f076);
    return (
      this["_outboundQueues"]["set"](_0x2eaef3, _0x599ea8),
      _0x599ea8["finally"](() => {
        this["_outboundQueues"]["get"](_0x2eaef3) === _0x599ea8 &&
          this["_outboundQueues"]["delete"](_0x2eaef3);
      }),
      _0x599ea8
    );
  }
  async ["_disconnectConnection"](_0x55fed3, _0x500b75) {
    let _0x2de651 = this["_bindingsByConnection"]["get"](_0x55fed3["id"]);
    _0x2de651 && (await this["_disconnectBinding"](_0x2de651, _0x500b75));
  }
  async ["_disconnectBinding"](_0x1bdf5, _0x784f3) {
    (this["_bindingsByConnection"]["delete"](_0x1bdf5["connection"]["id"]),
      this["_bindingsByMember"]["delete"](_0x1bdf5["member"]["memberID"]));
    let _0x1cc336 = [..._0x1bdf5["joinedUnitIDs"]];
    for (let _0x2e77b7 of _0x1cc336)
      await this["_leaveUnit"](_0x1bdf5, _0x2e77b7, _0x784f3);
  }
  async ["_leaveUnit"](_0x2e6876, _0x58abd3, _0x3af00b) {
    if (!_0x2e6876["joinedUnitIDs"]["delete"](_0x58abd3)) return !0x1;
    let _0x3fe2ff = this["_rooms"]["get"](_0x58abd3);
    return (
      _0x3fe2ff?.["delete"](_0x2e6876["member"]["memberID"]),
      _0x3fe2ff?.["size"] === 0x0 && this["_rooms"]["delete"](_0x58abd3),
      await this["_broadcastToRoom"](
        _0x58abd3,
        u(_0x58abd3, {
          memberID: _0x2e6876["member"]["memberID"],
          name: _0x2e6876["member"]["name"],
        }),
        _0x2e6876["member"]["memberID"],
      ),
      await this["_emit"]("memberLeftUnit", {
        session: _0x2e6876["session"],
        unitID: _0x58abd3,
        reason: _0x3af00b,
      }),
      !0x0
    );
  }
  async ["_broadcastToRoom"](_0x2b7900, _0xbb6c43, _0x3fe135) {
    let _0x3c95ad = [...(this["_rooms"]["get"](_0x2b7900)?.["values"]() ?? [])];
    await Promise["allSettled"](
      _0x3c95ad["filter"](
        (_0x2ecafd) => _0x2ecafd["member"]["memberID"] !== _0x3fe135,
      )["map"]((_0x1c2b55) =>
        this["_safeSend"](_0x1c2b55["connection"], _0xbb6c43),
      ),
    );
  }
  async ["_safeSend"](_0x2581a6, _0x3b2a9e) {
    try {
      await _0x2581a6["send"](JSON["stringify"](_0x3b2a9e));
    } catch {}
  }
  async ["_emit"](_0x4f929c, _0x2cbb7c) {
    let _0x47ce58 = [...(this["_listeners"]["get"](_0x4f929c) ?? [])];
    for (let _0x341764 of _0x47ce58)
      try {
        await _0x341764(_0x2cbb7c);
      } catch {}
  }
  ["_assertRunning"]() {
    if (this["_disposed"])
      throw Error("UniverCollabEndpoint\x20is\x20disposed");
  }
  ["_assertJoinable"](_0x2cfaa0) {
    if (this["_deletedUnitIDs"]["has"](_0x2cfaa0))
      throw new t["CollabError"](
        "UNIT_NOT_FOUND",
        "Unit\x20has\x20been\x20deleted",
      );
  }
};
((exports["MemorySessionTicketStore"] = y),
  (exports["UniverCollabEndpoint"] = E));
