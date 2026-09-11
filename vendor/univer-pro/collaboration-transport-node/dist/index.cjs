Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("node:crypto"),
  t = require("node:http"),
  n = require("ws");
var r = class extends Error {
  ["code"];
  constructor(_0x372451, _0x36588f, _0x262a44) {
    (super(_0x36588f, _0x262a44),
      (this["code"] = _0x372451),
      (this["name"] = "NodeTransportError"));
  }
};
function i(_0x4fdeac, _0x528d15, _0x4014ed) {
  let _0x500e8e = Promise["resolve"]()["then"](_0x528d15),
    _0x578c2d =
      _0x4014ed && !_0x4014ed["writableFinished"] && !_0x4014ed["destroyed"]
        ? new Promise((_0x19ab06) => {
            let _0x40d6b8 = () => {
              (_0x4014ed["off"]("finish", _0x40d6b8),
                _0x4014ed["off"]("close", _0x40d6b8),
                _0x19ab06());
            };
            (_0x4014ed["once"]("finish", _0x40d6b8),
              _0x4014ed["once"]("close", _0x40d6b8));
          })
        : Promise["resolve"](),
    _0x554b92 = Promise["allSettled"]([_0x500e8e, _0x578c2d])["then"](
      () => void 0x0,
    );
  return (
    _0x4fdeac["calls"]["add"](_0x554b92),
    _0x554b92["then"](() => _0x4fdeac["calls"]["delete"](_0x554b92)),
    _0x500e8e
  );
}
async function a(_0x573d97, _0x570ecb) {
  let _0x2f5e95 = async (_0xfd4d11) => {
    let _0x2ae166 = _0x573d97[_0xfd4d11];
    if (!_0x2ae166) return;
    let _0x18eab3 = !0x1,
      _0x4c7b9f,
      _0x13f2e4 = () => {
        if (_0x18eab3)
          throw Error(
            "Transport\x20middleware\x20called\x20next()\x20more\x20than\x20once",
          );
        return (
          (_0x18eab3 = !0x0),
          (_0x4c7b9f = _0x2f5e95(_0xfd4d11 + 0x1)),
          _0x4c7b9f
        );
      };
    try {
      await _0x2ae166(_0x570ecb, _0x13f2e4);
    } catch (_0x1b6200) {
      if (_0x4c7b9f)
        try {
          await _0x4c7b9f;
        } catch {}
      throw _0x1b6200;
    }
    _0x4c7b9f && (await _0x4c7b9f);
  };
  await _0x2f5e95(0x0);
}
async function o(_0x4556a3, _0x4705d1) {
  await a(
    _0x4556a3["flatMap"]((_0x366388) =>
      _0x366388["disposed"]
        ? []
        : _0x366388["kind"] === "http"
          ? [
              (_0x369bd2, _0x476e19) =>
                _0x366388["disposed"]
                  ? _0x476e19()
                  : _0x366388["middleware"](_0x369bd2, _0x476e19),
            ]
          : _0x366388["kind"] === "endpoint"
            ? [
                async (_0x5b38f9, _0x81ab5b) => {
                  if (_0x366388["disposed"]) return _0x81ab5b();
                  let _0x21486a = _0x366388["router"]["matchHttp"](_0x5b38f9);
                  _0x21486a
                    ? await i(
                        _0x366388,
                        () => _0x21486a(_0x5b38f9),
                        _0x5b38f9["response"],
                      )
                    : await _0x81ab5b();
                },
              ]
            : [],
    ),
    _0x4705d1,
  );
}
async function s(_0xfa1be3, _0x431544) {
  let _0x4dff75;
  return (
    await a(
      _0xfa1be3["flatMap"]((_0x3e9ac7) => {
        if (_0x3e9ac7["disposed"]) return [];
        if (_0x3e9ac7["kind"] === "upgrade") {
          let _0x51f616 = _0x3e9ac7["middleware"];
          return [
            (_0x263d95, _0x2c092d) =>
              _0x3e9ac7["disposed"]
                ? _0x2c092d()
                : _0x51f616(_0x263d95, _0x2c092d),
          ];
        }
        return _0x3e9ac7["kind"] === "endpoint"
          ? [
              async (_0x45a3fc, _0x8a005b) => {
                if (_0x3e9ac7["disposed"]) return _0x8a005b();
                let _0x28adde = _0x3e9ac7["router"]["matchUpgrade"](_0x45a3fc);
                _0x28adde
                  ? ((_0x4dff75 = _0x3e9ac7),
                    await i(_0x3e9ac7, () => _0x28adde(_0x45a3fc)))
                  : await _0x8a005b();
              },
            ]
          : [];
      }),
      _0x431544,
    ),
    _0x4dff75
  );
}
var c = class {
    ["_http"] = [];
    ["_upgrade"] = [];
    ["_sealed"] = !0x1;
    ["get"](_0x282ba1, _0x2bfe8a) {
      this["_add"](this["_http"], "GET", _0x282ba1, _0x2bfe8a);
    }
    ["post"](_0x5f46a4, _0x30bd35) {
      this["_add"](this["_http"], "POST", _0x5f46a4, _0x30bd35);
    }
    ["delete"](_0x2d76a1, _0x2a69c3) {
      this["_add"](this["_http"], "DELETE", _0x2d76a1, _0x2a69c3);
    }
    ["upgrade"](_0x1cf891, _0x3ab555) {
      this["_add"](this["_upgrade"], "GET", _0x1cf891, _0x3ab555);
    }
    ["seal"]() {
      this["_sealed"] = !0x0;
    }
    ["matchHttp"](_0x32ae25) {
      return this["_match"](this["_http"], _0x32ae25);
    }
    ["matchUpgrade"](_0x1fbdde) {
      return this["_match"](this["_upgrade"], _0x1fbdde);
    }
    ["_add"](_0xb00b41, _0x38400e, _0x40a33d, _0x990ce4) {
      if (this["_sealed"])
        throw Error("Router\x20registration\x20has\x20completed");
      if (typeof _0x990ce4 != "function")
        throw TypeError("Route\x20handler\x20must\x20be\x20a\x20function");
      if (
        typeof _0x40a33d != "string" ||
        !_0x40a33d["startsWith"]("/") ||
        /[?#]/["test"](_0x40a33d)
      )
        throw TypeError(
          "Route\x20path\x20must\x20be\x20an\x20absolute\x20pathname\x20template",
        );
      let _0x5a8ec9 = _0x40a33d["split"]("/"),
        _0x41cede = new Set();
      for (let _0x332614 of _0x5a8ec9) {
        if (!_0x332614["startsWith"](":")) continue;
        let _0x469fcc = _0x332614["slice"](0x1);
        if (
          !/^[A-Za-z_][A-Za-z0-9_]*$/["test"](_0x469fcc) ||
          _0x41cede["has"](_0x469fcc)
        )
          throw TypeError(
            "Route\x20parameters\x20must\x20have\x20unique\x20identifier\x20names",
          );
        _0x41cede["add"](_0x469fcc);
      }
      _0xb00b41["push"]({
        method: _0x38400e,
        segments: _0x5a8ec9,
        handler: _0x990ce4,
        route: Object["freeze"]({ path: _0x40a33d }),
      });
    }
    ["_match"](_0x1c564e, _0x5ea9b2) {
      if (_0x1c564e["length"] === 0x0) return;
      let _0x3bb9d5;
      try {
        _0x3bb9d5 = new URL(
          _0x5ea9b2["incomingMessage"]["url"] ?? "/",
          "http://localhost",
        )["pathname"]["split"]("/");
      } catch (_0x2188ae) {
        throw new r("INVALID_URL", "Invalid\x20request\x20URL", {
          cause: _0x2188ae,
        });
      }
      for (let _0x43e6fd of _0x1c564e) {
        if (
          _0x43e6fd["method"] !== _0x5ea9b2["incomingMessage"]["method"] ||
          _0x43e6fd["segments"]["length"] !== _0x3bb9d5["length"] ||
          !_0x43e6fd["segments"]["every"]((_0x4f6400, _0x370a2e) =>
            _0x4f6400["startsWith"](":")
              ? _0x3bb9d5[_0x370a2e] !== ""
              : _0x4f6400 === _0x3bb9d5[_0x370a2e],
          )
        )
          continue;
        Object["defineProperty"](_0x5ea9b2, "route", {
          value: _0x43e6fd["route"],
          enumerable: !0x0,
        });
        let _0x200bb4 = Object["create"](null);
        try {
          _0x43e6fd["segments"]["forEach"]((_0x26c4a7, _0x368e6a) => {
            _0x26c4a7["startsWith"](":") &&
              (_0x200bb4[_0x26c4a7["slice"](0x1)] = decodeURIComponent(
                _0x3bb9d5[_0x368e6a],
              ));
          });
        } catch (_0x2980ca) {
          throw new r(
            "INVALID_URL",
            "Route\x20contains\x20invalid\x20encoding",
            { cause: _0x2980ca },
          );
        }
        return (
          Object["defineProperty"](_0x5ea9b2, "params", {
            value: Object["freeze"](_0x200bb4),
            enumerable: !0x0,
            writable: !0x1,
            configurable: !0x1,
          }),
          _0x43e6fd["handler"]
        );
      }
    }
  },
  l = 0x10 * 0x400 * 0x400,
  u = class {
    ["socket"];
    ["customData"];
    ["id"] = (0x0, e["randomUUID"])();
    ["_closed"] = !0x1;
    constructor(_0x3175a0, _0x319c4c) {
      ((this["socket"] = _0x3175a0), (this["customData"] = _0x319c4c));
    }
    ["send"](_0x2f39ae) {
      return this["_closed"] ||
        this["socket"]["readyState"] !== this["socket"]["OPEN"]
        ? Promise["reject"](
            Error("WebSocket\x20connection\x20is\x20not\x20open"),
          )
        : new Promise((_0x526fda, _0x2a9782) => {
            this["socket"]["send"](_0x2f39ae, (_0x4c8e98) => {
              _0x4c8e98 ? _0x2a9782(_0x4c8e98) : _0x526fda();
            });
          });
    }
    ["close"](_0x358444, _0xced0ca) {
      this["_closed"] ||
        ((this["_closed"] = !0x0),
        (this["socket"]["readyState"] === this["socket"]["OPEN"] ||
          this["socket"]["readyState"] === this["socket"]["CONNECTING"]) &&
          this["socket"]["close"](_0x358444, _0xced0ca));
    }
    ["terminate"]() {
      ((this["_closed"] = !0x0),
        this["socket"]["readyState"] !== this["socket"]["CLOSED"] &&
          this["socket"]["terminate"]());
    }
  };
function d(_0x574ca, _0x2bb159) {
  if (_0x574ca === void 0x0) return _0x2bb159;
  if (!Number["isSafeInteger"](_0x574ca) || _0x574ca <= 0x0)
    throw TypeError(
      "Transport\x20byte\x20limits\x20must\x20be\x20positive\x20safe\x20integers",
    );
  return _0x574ca;
}
function f(_0x3a37cb, _0x77c7a2) {
  let _0x1416ba;
  return () => (
    (_0x1416ba ??= new Promise((_0x519f78, _0x1508eb) => {
      let _0x2d05de = _0x3a37cb["headers"]["content-length"];
      if (
        _0x2d05de !== void 0x0 &&
        Number["isFinite"](Number(_0x2d05de)) &&
        Number(_0x2d05de) > _0x77c7a2
      ) {
        (_0x3a37cb["resume"](),
          _0x1508eb(
            new r(
              "REQUEST_BODY_TOO_LARGE",
              "Request\x20body\x20exceeds\x20" + _0x77c7a2 + "\x20bytes",
            ),
          ));
        return;
      }
      let _0x90750f = [],
        _0x14ead6 = 0x0,
        _0x58d095 = !0x1,
        _0x4cecaf = (_0x302be9) => {
          _0x58d095 || ((_0x58d095 = !0x0), _0x1508eb(_0x302be9));
        };
      (_0x3a37cb["on"]("data", (_0x5da9e6) => {
        if (_0x58d095) return;
        let _0x1390ec =
          typeof _0x5da9e6 == "string" ? Buffer["from"](_0x5da9e6) : _0x5da9e6;
        if (((_0x14ead6 += _0x1390ec["byteLength"]), _0x14ead6 > _0x77c7a2)) {
          (_0x3a37cb["resume"](),
            _0x4cecaf(
              new r(
                "REQUEST_BODY_TOO_LARGE",
                "Request\x20body\x20exceeds\x20" + _0x77c7a2 + "\x20bytes",
              ),
            ));
          return;
        }
        _0x90750f["push"](_0x1390ec);
      }),
        _0x3a37cb["once"]("end", () => {
          _0x58d095 ||
            ((_0x58d095 = !0x0),
            _0x519f78(Buffer["concat"](_0x90750f, _0x14ead6)));
        }),
        _0x3a37cb["once"]("aborted", () => {
          _0x4cecaf(new r("REQUEST_ABORTED", "Request\x20was\x20aborted"));
        }),
        _0x3a37cb["once"]("error", (_0x2c5bd8) => {
          _0x4cecaf(
            new r("REQUEST_ABORTED", "Request\x20stream\x20failed", {
              cause: _0x2c5bd8,
            }),
          );
        }));
    })),
    _0x1416ba
  );
}
function p(_0x333f65) {
  return async () => {
    let _0x34a2a5 = await _0x333f65();
    try {
      return JSON["parse"](Buffer["from"](_0x34a2a5)["toString"]("utf8"));
    } catch (_0x1b3242) {
      throw new r(
        "INVALID_JSON",
        "Request\x20body\x20is\x20not\x20valid\x20JSON",
        { cause: _0x1b3242 },
      );
    }
  };
}
function m(_0x37ca42) {
  return Array["isArray"](_0x37ca42)
    ? Buffer["concat"](_0x37ca42)
    : _0x37ca42 instanceof ArrayBuffer
      ? Buffer["from"](_0x37ca42)
      : Buffer["from"](
          _0x37ca42["buffer"],
          _0x37ca42["byteOffset"],
          _0x37ca42["byteLength"],
        );
}
var h = class {
  ["_entries"] = [];
  ["_webSocketServer"];
  ["_connections"] = new Set();
  ["_eventQueues"] = new Map();
  ["_failedConnections"] = new Set();
  ["_connectionClosed"] = new Map();
  ["_maxRequestBodyBytes"];
  ["_disposed"] = !0x1;
  ["_disposePromise"];
  ["_endpointInstances"] = new WeakSet();
  ["_connectionOwners"] = new Map();
  constructor(_0xb0e208 = {}) {
    this["_maxRequestBodyBytes"] = d(_0xb0e208["maxRequestBodyBytes"], l);
    let _0x576c10 = d(
      _0xb0e208["maxWebSocketMessageBytes"],
      this["_maxRequestBodyBytes"],
    );
    this["_webSocketServer"] = new n["WebSocketServer"]({
      noServer: !0x0,
      maxPayload: _0x576c10,
    });
  }
  ["use"](_0x368d7d) {
    if ((this["_assertRunning"](), typeof _0x368d7d != "function"))
      throw TypeError(
        "HTTP\x20Transport\x20middleware\x20must\x20be\x20a\x20function",
      );
    let _0x389580 = { kind: "http", middleware: _0x368d7d, disposed: !0x1 };
    return (
      this["_entries"]["push"](_0x389580),
      this["_registration"](_0x389580)
    );
  }
  ["useUpgrade"](_0x1d98e1) {
    if ((this["_assertRunning"](), typeof _0x1d98e1 != "function"))
      throw TypeError(
        "WebSocket\x20upgrade\x20middleware\x20must\x20be\x20a\x20function",
      );
    let _0x197807 = { kind: "upgrade", middleware: _0x1d98e1, disposed: !0x1 };
    return (
      this["_entries"]["push"](_0x197807),
      this["_registration"](_0x197807)
    );
  }
  ["register"](_0x244c79) {
    if (
      (this["_assertRunning"](),
      !_0x244c79 || typeof _0x244c79["register"] != "function")
    )
      throw TypeError(
        "Transport\x20Endpoint\x20must\x20provide\x20register(router)",
      );
    if (this["_endpointInstances"]["has"](_0x244c79))
      throw Error("Endpoint\x20is\x20already\x20registered");
    let _0x4f4279 = new c();
    this["_endpointInstances"]["add"](_0x244c79);
    try {
      let _0x12757a = _0x244c79["register"](_0x4f4279);
      if (_0x12757a && typeof _0x12757a["then"] == "function")
        throw (
          Promise["resolve"](_0x12757a)["catch"](() => void 0x0),
          TypeError("Endpoint\x20register(router)\x20must\x20be\x20synchronous")
        );
      this["_assertRunning"]();
    } catch (_0x16a0fe) {
      throw (this["_endpointInstances"]["delete"](_0x244c79), _0x16a0fe);
    } finally {
      _0x4f4279["seal"]();
    }
    let _0x9c2e6f = {
      kind: "endpoint",
      endpoint: _0x244c79,
      router: _0x4f4279,
      calls: new Set(),
      disposed: !0x1,
    };
    return (
      this["_entries"]["push"](_0x9c2e6f),
      this["_registration"](_0x9c2e6f)
    );
  }
  ["handleRequest"](_0xda5350, _0x2876c0) {
    if (this["_disposed"]) {
      this["_writeHttpError"](
        _0x2876c0,
        new r("TRANSPORT_DISPOSED", "Transport\x20is\x20disposed"),
      );
      return;
    }
    let _0xf108b2 = f(_0xda5350, this["_maxRequestBodyBytes"]),
      _0x12cd2b = {
        incomingMessage: _0xda5350,
        response: _0x2876c0,
        customData: Object["create"](null),
        params: Object["freeze"](Object["create"](null)),
        readBody: _0xf108b2,
        readJson: p(_0xf108b2),
      };
    this["_dispatchHttp"](_0x12cd2b)
      ["then"](() => {
        this["_writeHttpNotFound"](_0x2876c0);
      })
      ["catch"]((_0x13c5f1) => {
        this["_writeHttpError"](_0x2876c0, _0x13c5f1);
      });
  }
  ["handleUpgrade"](_0x440bdd, _0x157215, _0x4ac20e) {
    if (this["_disposed"]) {
      _0x157215["destroy"]();
      return;
    }
    this["_handleUpgrade"](_0x440bdd, _0x157215, _0x4ac20e);
  }
  ["dispose"]() {
    if (this["_disposePromise"]) return this["_disposePromise"];
    this["_disposed"] = !0x0;
    for (let _0x5c8220 of this["_entries"]) _0x5c8220["disposed"] = !0x0;
    return (
      (this["_disposePromise"] = this["_dispose"]()),
      this["_disposePromise"]
    );
  }
  async ["_dispose"]() {
    let _0x31f612 = [...this["_connectionClosed"]["values"]()]["map"](
      (_0x2d05ad) => _0x2d05ad["promise"],
    );
    for (let _0x2c284a of this["_connections"]) _0x2c284a["terminate"]();
    (await Promise["allSettled"](_0x31f612),
      await Promise["allSettled"]([...this["_eventQueues"]["values"]()]));
    let _0x57fe0b = [...this["_entries"]]["reverse"]();
    for (let _0x10218d of _0x57fe0b) await this["_disposeEntry"](_0x10218d);
    this["_entries"]["length"] = 0x0;
  }
  async ["_handleUpgrade"](_0x4cae34, _0x16df3b, _0x1fa080) {
    let _0x1f3d74,
      _0x3a691f = Object["create"](null),
      _0x540efd = (_0x421416) => {
        if (_0x1f3d74)
          throw Error(
            "WebSocket\x20upgrade\x20was\x20already\x20accepted\x20or\x20rejected",
          );
        _0x1f3d74 = _0x421416;
      },
      _0x351b2b = {
        incomingMessage: _0x4cae34,
        customData: _0x3a691f,
        params: Object["freeze"](Object["create"](null)),
        reject: (_0x1e935b = 0x193, _0x3c4160) => {
          if (
            !Number["isSafeInteger"](_0x1e935b) ||
            _0x1e935b < 0x190 ||
            _0x1e935b > 0x257
          )
            throw TypeError(
              "WebSocket\x20rejection\x20status\x20must\x20be\x20an\x20integer\x20from\x20400\x20to\x20599",
            );
          _0x540efd({
            kind: "reject",
            statusCode: _0x1e935b,
            message:
              _0x3c4160 ??
              t["STATUS_CODES"][_0x1e935b] ??
              "Upgrade\x20rejected",
          });
        },
        accept: (_0xc16c9a) => {
          if (!_0xc16c9a || typeof _0xc16c9a != "object")
            throw TypeError(
              "WebSocket\x20handler\x20must\x20be\x20an\x20object",
            );
          _0x540efd({ kind: "accept", handler: _0xc16c9a });
        },
      };
    try {
      let _0x3f4071 = await s([...this["_entries"]], _0x351b2b);
      if (
        this["_disposed"] ||
        _0x3f4071?.["disposed"] ||
        _0x16df3b["destroyed"]
      ) {
        _0x16df3b["destroy"]();
        return;
      }
      if (!_0x1f3d74) {
        this["_writeUpgradeResponse"](_0x16df3b, 0x194, "Not\x20Found");
        return;
      }
      if (_0x1f3d74["kind"] === "reject") {
        this["_writeUpgradeResponse"](
          _0x16df3b,
          _0x1f3d74["statusCode"],
          _0x1f3d74["message"],
        );
        return;
      }
      let _0x10cd81 = _0x1f3d74["handler"];
      this["_webSocketServer"]["handleUpgrade"](
        _0x4cae34,
        _0x16df3b,
        _0x1fa080,
        (_0x2dfb71) => {
          if (this["_disposed"] || _0x3f4071?.["disposed"]) {
            _0x2dfb71["terminate"]();
            return;
          }
          this["_acceptWebSocket"](_0x2dfb71, _0x3a691f, _0x10cd81, _0x3f4071);
        },
      );
    } catch (_0x3663b9) {
      let _0x2b54e4 =
        _0x3663b9 instanceof r && _0x3663b9["code"] === "INVALID_URL";
      this["_writeUpgradeResponse"](
        _0x16df3b,
        _0x2b54e4 ? 0x190 : 0x1f4,
        _0x2b54e4 ? "Bad\x20Request" : "Internal\x20Server\x20Error",
      );
    }
  }
  ["_acceptWebSocket"](_0x440611, _0x53dcc8, _0x1d86bd, _0x37264d) {
    let _0x5f2b93 = new u(_0x440611, _0x53dcc8);
    (this["_connections"]["add"](_0x5f2b93),
      _0x37264d && this["_connectionOwners"]["set"](_0x5f2b93, _0x37264d),
      this["_eventQueues"]["set"](_0x5f2b93, Promise["resolve"]()));
    let _0x432b7d,
      _0x30b163 = new Promise((_0x28701f) => {
        _0x432b7d = _0x28701f;
      });
    (this["_connectionClosed"]["set"](_0x5f2b93, {
      promise: _0x30b163,
      resolve: _0x432b7d,
    }),
      _0x440611["on"]("message", (_0xc5365a, _0x28b1f5) => {
        let _0x429744 = m(_0xc5365a),
          _0x1c98db = _0x28b1f5
            ? new Uint8Array(_0x429744)
            : _0x429744["toString"]("utf8"),
          _0x291a03 = {
            connection: _0x5f2b93,
            data: _0x1c98db,
            customData: Object["create"](null),
          };
        this["_enqueue"](_0x5f2b93, () => _0x1d86bd["message"]?.(_0x291a03));
      }),
      _0x440611["once"]("close", (_0x2fa3ec, _0x22c0e5) => {
        let _0x109251 = {
          connection: _0x5f2b93,
          code: _0x2fa3ec,
          reason: _0x22c0e5["toString"]("utf8"),
        };
        this["_enqueue"](
          _0x5f2b93,
          () => _0x1d86bd["close"]?.(_0x109251),
          !0x0,
        );
      }),
      _0x440611["on"]("error", () => {}));
    let _0x2cc8a7 = { connection: _0x5f2b93 };
    this["_enqueue"](_0x5f2b93, () => _0x1d86bd["open"]?.(_0x2cc8a7));
  }
  ["_enqueue"](_0x4745ee, _0x382ca1, _0x4d969a = !0x1) {
    let _0x197ebb = (this["_eventQueues"]["get"](_0x4745ee) ??
      Promise["resolve"]())
      ["catch"](() => void 0x0)
      ["then"](async () => {
        (this["_failedConnections"]["has"](_0x4745ee) && !_0x4d969a) ||
          (await _0x382ca1());
      })
      ["catch"](() => {
        (this["_failedConnections"]["add"](_0x4745ee),
          _0x4745ee["close"](0x3f3, "WebSocket\x20handler\x20failure"));
      })
      ["finally"](() => {
        _0x4d969a &&
          (this["_connections"]["delete"](_0x4745ee),
          this["_connectionOwners"]["delete"](_0x4745ee),
          this["_eventQueues"]["delete"](_0x4745ee),
          this["_failedConnections"]["delete"](_0x4745ee),
          this["_connectionClosed"]["get"](_0x4745ee)?.["resolve"](),
          this["_connectionClosed"]["delete"](_0x4745ee));
      });
    this["_eventQueues"]["set"](_0x4745ee, _0x197ebb);
  }
  async ["_dispatchHttp"](_0x5b94da) {
    if (this["_disposed"])
      throw new r("TRANSPORT_DISPOSED", "Transport\x20is\x20disposed");
    await o([...this["_entries"]], _0x5b94da);
  }
  ["_writeHttpError"](_0x1e5e2a, _0x50b907) {
    if (_0x1e5e2a["writableEnded"] || _0x1e5e2a["destroyed"]) return;
    let _0x2201b5 =
        _0x50b907 instanceof r
          ? _0x50b907["code"] === "REQUEST_BODY_TOO_LARGE"
            ? 0x19d
            : _0x50b907["code"] === "INVALID_JSON" ||
                _0x50b907["code"] === "REQUEST_ABORTED" ||
                _0x50b907["code"] === "INVALID_URL"
              ? 0x190
              : 0x1f7
          : 0x1f4,
      _0x48a765 =
        _0x2201b5 === 0x19d
          ? "Payload\x20Too\x20Large"
          : _0x2201b5 === 0x190
            ? "Bad\x20Request"
            : _0x2201b5 === 0x1f7
              ? "Service\x20Unavailable"
              : "Internal\x20Server\x20Error";
    _0x1e5e2a["headersSent"]
      ? _0x1e5e2a["destroy"](_0x50b907 instanceof Error ? _0x50b907 : void 0x0)
      : ((_0x1e5e2a["statusCode"] = _0x2201b5),
        _0x1e5e2a["setHeader"]("content-type", "text/plain;\x20charset=utf-8"),
        _0x1e5e2a["end"](_0x48a765));
  }
  ["_writeHttpNotFound"](_0x36216b) {
    _0x36216b["headersSent"] ||
      _0x36216b["writableEnded"] ||
      _0x36216b["destroyed"] ||
      ((_0x36216b["statusCode"] = 0x194),
      _0x36216b["setHeader"]("content-type", "text/plain;\x20charset=utf-8"),
      _0x36216b["end"]("Not\x20Found"));
  }
  ["_writeUpgradeResponse"](_0x4cb3b6, _0x22d7bb, _0x20a032) {
    if (_0x4cb3b6["destroyed"]) return;
    let _0x1aa553 = t["STATUS_CODES"][_0x22d7bb] ?? "Error",
      _0xa23d3e = Buffer["from"](_0x20a032, "utf8");
    _0x4cb3b6["end"](
      "HTTP/1.1\x20" +
        _0x22d7bb +
        "\x20" +
        _0x1aa553 +
        "\x0d\x0aConnection:\x20close\x0d\x0aContent-Type:\x20text/plain;\x20charset=utf-8\x0d\x0aContent-Length:\x20" +
        _0xa23d3e["byteLength"] +
        "\x0d\x0a\x0d\x0a" +
        _0xa23d3e["toString"]("utf8"),
    );
  }
  ["_registration"](_0x1b9902) {
    return { dispose: () => this["_disposeEntry"](_0x1b9902) };
  }
  ["_disposeEntry"](_0x1de81d) {
    return (
      (_0x1de81d["disposed"] = !0x0),
      _0x1de81d["kind"] === "endpoint"
        ? ((_0x1de81d["disposePromise"] ||= (async () => {
            let _0x41b7d0 = [];
            for (let [_0x6c14c0, _0x5598c2] of this["_connectionOwners"]) {
              if (_0x5598c2 !== _0x1de81d) continue;
              let _0x4304ef = this["_connectionClosed"]["get"](_0x6c14c0);
              (_0x4304ef && _0x41b7d0["push"](_0x4304ef["promise"]),
                _0x6c14c0["terminate"]());
            }
            (await Promise["allSettled"]([..._0x1de81d["calls"], ..._0x41b7d0]),
              await _0x1de81d["endpoint"]["dispose"]?.());
          })()),
          _0x1de81d["disposePromise"])
        : Promise["resolve"]()
    );
  }
  ["_assertRunning"]() {
    if (this["_disposed"])
      throw new r("TRANSPORT_DISPOSED", "Transport\x20is\x20disposed");
  }
};
function g(_0x148f88) {
  return new h(_0x148f88);
}
((exports["NodeTransportError"] = r), (exports["createNodeTransport"] = g));
