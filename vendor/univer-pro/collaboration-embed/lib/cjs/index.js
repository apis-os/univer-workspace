Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/collaboration"),
  t = require("@univerjs-pro/collaboration-client"),
  n = require("@univerjs-pro/embed"),
  r = require("@univerjs-pro/license"),
  i = require("@univerjs/core");
const a = "collaboration-embed.config",
  o = {};
var s = "@univerjs-pro/collaboration-embed",
  c = "1.0.0-insiders.20260907-70fc579";
const l = "collaboration-univer-uri-provider",
  u = "COLLABORATION_EMBED_UNSUPPORTED_UNIT_TYPE";
function d(_0x5da713, _0x3ead98) {
  return {
    registrationId: l,
    priority: 100,
    match: {
      fileKinds: [n.RESOURCE_REF_FILE_KIND["SELF"]],
      unitTypes: ["sheet", "doc", "slide", "base", "board"],
    },
    provider: { ensureUnit: (_0x13f02a) => f(_0x13f02a, _0x5da713, _0x3ead98) },
  };
}
async function f(_0x237122, _0x2fe8d8, _0x15679b) {
  let _0x6a999b = _0x237122.ref["unit"].selector;
  switch (_0x237122.unitType) {
    case i.UniverInstanceType["UNIVER_SHEET"]: {
      let _0x3db2e5 = await _0x2fe8d8.loadSheet(_0x6a999b, 0, undefined, {
        createOptions: _0x237122.createOptions,
      });
      return (
        await _0x15679b.readyForCollab(_0x3db2e5.getUnitId()),
        {
          unitId: _0x3db2e5.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_SHEET"],
        }
      );
    }
    case i.UniverInstanceType["UNIVER_DOC"]: {
      let _0x7cf520 = await _0x2fe8d8.loadDoc(_0x6a999b, 0, undefined, {
        createOptions: _0x237122.createOptions,
      });
      return (
        await _0x15679b.readyForCollab(_0x7cf520.getUnitId()),
        {
          unitId: _0x7cf520.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_DOC"],
        }
      );
    }
    case i.UniverInstanceType["UNIVER_SLIDE"]: {
      let _0x10ac2b = await _0x2fe8d8.loadSlide(_0x6a999b, 0, undefined, {
        createOptions: _0x237122.createOptions,
      });
      return (
        await _0x15679b.readyForCollab(_0x10ac2b.getUnitId()),
        {
          unitId: _0x10ac2b.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_SLIDE"],
        }
      );
    }
    case i.UniverInstanceType["UNIVER_BASE"]: {
      let _0x14b5cc = await _0x2fe8d8.loadBase(_0x6a999b, 0, undefined, {
        createOptions: _0x237122.createOptions,
      });
      return (
        await _0x15679b.readyForCollab(_0x14b5cc.getUnitId()),
        {
          unitId: _0x14b5cc.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_BASE"],
        }
      );
    }
    case i.UniverInstanceType["UNIVER_BOARD"]: {
      let _0x51978b = await _0x2fe8d8.loadBoard(_0x6a999b, 0, undefined, {
        createOptions: _0x237122.createOptions,
      });
      return (
        await _0x15679b.readyForCollab(_0x51978b.getUnitId()),
        {
          unitId: _0x51978b.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_BOARD"],
        }
      );
    }
    default:
      throw Error(u);
  }
}
function p(_0x31e7e2, _0x23b475) {
  return function (_0x38f486, _0x125994) {
    _0x23b475(_0x38f486, _0x125994, _0x31e7e2);
  };
}
function m(_0x29ed2b, _0x398139, _0x5a28c8, _0x3c582a) {
  var _0x135bf7 = arguments.length,
    _0x3ea124 =
      _0x135bf7 < 3
        ? _0x398139
        : _0x3c582a === null
          ? (_0x3c582a = Object.getOwnPropertyDescriptor(_0x398139, _0x5a28c8))
          : _0x3c582a,
    _0x2617fd;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3ea124 = Reflect.decorate(_0x29ed2b, _0x398139, _0x5a28c8, _0x3c582a);
  else {
    for (var _0x58d11d = _0x29ed2b.length - 1; _0x58d11d >= 0; _0x58d11d--)
      (_0x2617fd = _0x29ed2b[_0x58d11d]) &&
        (_0x3ea124 =
          (_0x135bf7 < 3
            ? _0x2617fd(_0x3ea124)
            : _0x135bf7 > 3
              ? _0x2617fd(_0x398139, _0x5a28c8, _0x3ea124)
              : _0x2617fd(_0x398139, _0x5a28c8)) || _0x3ea124);
  }
  return (
    _0x135bf7 > 3 &&
      _0x3ea124 &&
      Object.defineProperty(_0x398139, _0x5a28c8, _0x3ea124),
    _0x3ea124
  );
}
function h(_0x49799f) {
  "@babel/helpers - typeof";
  return (
    (h =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x32669b) {
            return typeof _0x32669b;
          }
        : function (_0x4f9fec) {
            return _0x4f9fec &&
              typeof Symbol == "function" &&
              _0x4f9fec.constructor === Symbol &&
              _0x4f9fec !== Symbol.prototype
              ? "symbol"
              : typeof _0x4f9fec;
          }),
    h(_0x49799f)
  );
}
function g(_0x5cbec9, _0x1b0143) {
  if (h(_0x5cbec9) != "object" || !_0x5cbec9) return _0x5cbec9;
  var _0x201a79 = _0x5cbec9[Symbol.toPrimitive];
  if (_0x201a79 !== undefined) {
    var _0x4aedbf = _0x201a79.call(_0x5cbec9, _0x1b0143 || "default");
    if (h(_0x4aedbf) != "object") return _0x4aedbf;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x1b0143 === "string" ? String : Number)(_0x5cbec9);
}
function _(_0x3de306) {
  var _0x3e0975 = g(_0x3de306, "string");
  return h(_0x3e0975) == "symbol" ? _0x3e0975 : _0x3e0975 + "";
}
function v(_0x170c56, _0x4ca574, _0x28247d) {
  return (
    (_0x4ca574 = _(_0x4ca574)) in _0x170c56
      ? Object.defineProperty(_0x170c56, _0x4ca574, {
          value: _0x28247d,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x170c56[_0x4ca574] = _0x28247d),
    _0x170c56
  );
}
let y = class extends i.Plugin {
  constructor(_0x3d4224 = o, _0x5ec4e1, _0x25ff12) {
    (super(),
      (this._config = _0x3d4224),
      (this._injector = _0x5ec4e1),
      (this._configService = _0x25ff12));
    let { ..._0x3bb5ff } = (0, i.merge)({}, o, this._config);
    this._configService["setConfig"](a, _0x3bb5ff);
  }
  onStarting() {
    this.disposeWithMe(
      this._injector["get"](
        n.EmbedResourceRefProviderRegistryService,
      ).registerUnitProvider(
        d(
          this._injector["get"](e.SnapshotService),
          this._injector["get"](t.CollaborationController),
        ),
      ),
    );
  }
};
(v(y, "type", i.UniverInstanceType["UNIVER_UNKNOWN"]),
  v(y, "pluginName", "UNIVER_COLLABORATION_EMBED_PLUGIN"),
  v(y, "packageName", s),
  v(y, "version", c),
  (y = m(
    [
      (0, i.DependentOn)(
        r.UniverLicensePlugin,
        e.UniverCollaborationPlugin,
        n.UniverEmbedPlugin,
        t.UniverCollaborationClientPlugin,
      ),
      p(1, (0, i.Inject)(i.Injector)),
      p(2, i.IConfigService),
    ],
    y,
  )),
  (exports.COLLABORATION_EMBED_PLUGIN_CONFIG_KEY = a),
  (exports.COLLABORATION_EMBED_RESOURCE_REF_PROVIDER_ID = l),
  (exports.COLLABORATION_EMBED_RESOURCE_REF_PROVIDER_PRIORITY = 100),
  (exports.COLLABORATION_EMBED_UNSUPPORTED_UNIT_TYPE = u),
  Object.defineProperty(exports, "UniverCollaborationEmbedPlugin", {
    enumerable: true,
    get: function () {
      return y;
    },
  }),
  (exports.createCollaborationEmbedResourceRefProvider = d));
