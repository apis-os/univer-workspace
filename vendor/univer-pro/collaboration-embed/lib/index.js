import {
  SnapshotService as _0x289da8,
  UniverCollaborationPlugin as _0xba29be,
} from "@univerjs-pro/collaboration";
import {
  CollaborationController as _0x42d230,
  UniverCollaborationClientPlugin as _0x1aa780,
} from "@univerjs-pro/collaboration-client";
import {
  EmbedResourceRefProviderRegistryService as _0xc11c0a,
  RESOURCE_REF_FILE_KIND as _0x4017c0,
  UniverEmbedPlugin as _0x5b1f99,
} from "@univerjs-pro/embed";
import { UniverLicensePlugin as _0x46a347 } from "@univerjs-pro/license";
import {
  DependentOn as _0x10f47d,
  IConfigService as _0xbbfd80,
  Inject as _0x2cbb83,
  Injector as _0x38a970,
  Plugin as _0x1aea9e,
  UniverInstanceType as _0x4ce0be,
  merge as _0x269ed7,
} from "@univerjs/core";
const h = "collaboration-embed.config",
  g = {};
var _ = "@univerjs-pro/collaboration-embed",
  v = "1.0.0-insiders.20260907-70fc579";
const y = "collaboration-univer-uri-provider",
  b = 100,
  x = "COLLABORATION_EMBED_UNSUPPORTED_UNIT_TYPE";
function S(_0x10e3a8, _0x42b13e) {
  return {
    registrationId: y,
    priority: 100,
    match: {
      fileKinds: [_0x4017c0.SELF],
      unitTypes: ["sheet", "doc", "slide", "base", "board"],
    },
    provider: { ensureUnit: (_0x1b3c7b) => C(_0x1b3c7b, _0x10e3a8, _0x42b13e) },
  };
}
async function C(_0x33fc62, _0xaa75e6, _0xce01a4) {
  let _0x142b7a = _0x33fc62.ref["unit"].selector;
  switch (_0x33fc62.unitType) {
    case _0x4ce0be.UNIVER_SHEET: {
      let _0x5bc6ed = await _0xaa75e6.loadSheet(_0x142b7a, 0, undefined, {
        createOptions: _0x33fc62.createOptions,
      });
      return (
        await _0xce01a4.readyForCollab(_0x5bc6ed.getUnitId()),
        { unitId: _0x5bc6ed.getUnitId(), unitType: _0x4ce0be.UNIVER_SHEET }
      );
    }
    case _0x4ce0be.UNIVER_DOC: {
      let _0x52d648 = await _0xaa75e6.loadDoc(_0x142b7a, 0, undefined, {
        createOptions: _0x33fc62.createOptions,
      });
      return (
        await _0xce01a4.readyForCollab(_0x52d648.getUnitId()),
        { unitId: _0x52d648.getUnitId(), unitType: _0x4ce0be.UNIVER_DOC }
      );
    }
    case _0x4ce0be.UNIVER_SLIDE: {
      let _0x217440 = await _0xaa75e6.loadSlide(_0x142b7a, 0, undefined, {
        createOptions: _0x33fc62.createOptions,
      });
      return (
        await _0xce01a4.readyForCollab(_0x217440.getUnitId()),
        { unitId: _0x217440.getUnitId(), unitType: _0x4ce0be.UNIVER_SLIDE }
      );
    }
    case _0x4ce0be.UNIVER_BASE: {
      let _0x5ea3ee = await _0xaa75e6.loadBase(_0x142b7a, 0, undefined, {
        createOptions: _0x33fc62.createOptions,
      });
      return (
        await _0xce01a4.readyForCollab(_0x5ea3ee.getUnitId()),
        { unitId: _0x5ea3ee.getUnitId(), unitType: _0x4ce0be.UNIVER_BASE }
      );
    }
    case _0x4ce0be.UNIVER_BOARD: {
      let _0x561f29 = await _0xaa75e6.loadBoard(_0x142b7a, 0, undefined, {
        createOptions: _0x33fc62.createOptions,
      });
      return (
        await _0xce01a4.readyForCollab(_0x561f29.getUnitId()),
        { unitId: _0x561f29.getUnitId(), unitType: _0x4ce0be.UNIVER_BOARD }
      );
    }
    default:
      throw Error(x);
  }
}
function w(_0x30e6f3, _0x342e24) {
  return function (_0x4bb1ed, _0x23e419) {
    _0x342e24(_0x4bb1ed, _0x23e419, _0x30e6f3);
  };
}
function T(_0x2fb554, _0x7114e4, _0x35a8d2, _0x4fbdf4) {
  var _0x428466 = arguments.length,
    _0x3484bd =
      _0x428466 < 3
        ? _0x7114e4
        : _0x4fbdf4 === null
          ? (_0x4fbdf4 = Object.getOwnPropertyDescriptor(_0x7114e4, _0x35a8d2))
          : _0x4fbdf4,
    _0x3dc86;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x3484bd = Reflect.decorate(_0x2fb554, _0x7114e4, _0x35a8d2, _0x4fbdf4);
  else {
    for (var _0xbbecd5 = _0x2fb554.length - 1; _0xbbecd5 >= 0; _0xbbecd5--)
      (_0x3dc86 = _0x2fb554[_0xbbecd5]) &&
        (_0x3484bd =
          (_0x428466 < 3
            ? _0x3dc86(_0x3484bd)
            : _0x428466 > 3
              ? _0x3dc86(_0x7114e4, _0x35a8d2, _0x3484bd)
              : _0x3dc86(_0x7114e4, _0x35a8d2)) || _0x3484bd);
  }
  return (
    _0x428466 > 3 &&
      _0x3484bd &&
      Object.defineProperty(_0x7114e4, _0x35a8d2, _0x3484bd),
    _0x3484bd
  );
}
function E(_0x2b3b2) {
  "@babel/helpers - typeof";
  return (
    (E =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2eb3b2) {
            return typeof _0x2eb3b2;
          }
        : function (_0x20a27b) {
            return _0x20a27b &&
              typeof Symbol == "function" &&
              _0x20a27b.constructor === Symbol &&
              _0x20a27b !== Symbol.prototype
              ? "symbol"
              : typeof _0x20a27b;
          }),
    E(_0x2b3b2)
  );
}
function D(_0x3227c8, _0x10d79f) {
  if (E(_0x3227c8) != "object" || !_0x3227c8) return _0x3227c8;
  var _0x1c39ef = _0x3227c8[Symbol.toPrimitive];
  if (_0x1c39ef !== undefined) {
    var _0xc3b881 = _0x1c39ef.call(_0x3227c8, _0x10d79f || "default");
    if (E(_0xc3b881) != "object") return _0xc3b881;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x10d79f === "string" ? String : Number)(_0x3227c8);
}
function O(_0x48a53a) {
  var _0x3c68c0 = D(_0x48a53a, "string");
  return E(_0x3c68c0) == "symbol" ? _0x3c68c0 : _0x3c68c0 + "";
}
function k(_0x5ba9b1, _0x512515, _0xc75884) {
  return (
    (_0x512515 = O(_0x512515)) in _0x5ba9b1
      ? Object.defineProperty(_0x5ba9b1, _0x512515, {
          value: _0xc75884,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5ba9b1[_0x512515] = _0xc75884),
    _0x5ba9b1
  );
}
let A = class extends _0x1aea9e {
  constructor(_0x22dac1 = g, _0x21f594, _0x4e246c) {
    (super(),
      (this._config = _0x22dac1),
      (this._injector = _0x21f594),
      (this._configService = _0x4e246c));
    let { ..._0x58bc9a } = _0x269ed7({}, g, this._config);
    this._configService["setConfig"](h, _0x58bc9a);
  }
  onStarting() {
    this.disposeWithMe(
      this._injector["get"](_0xc11c0a).registerUnitProvider(
        S(this._injector["get"](_0x289da8), this._injector["get"](_0x42d230)),
      ),
    );
  }
};
(k(A, "type", _0x4ce0be.UNIVER_UNKNOWN),
  k(A, "pluginName", "UNIVER_COLLABORATION_EMBED_PLUGIN"),
  k(A, "packageName", _),
  k(A, "version", v),
  (A = T(
    [
      _0x10f47d(_0x46a347, _0xba29be, _0x5b1f99, _0x1aa780),
      w(1, _0x2cbb83(_0x38a970)),
      w(2, _0xbbfd80),
    ],
    A,
  )));
export {
  h as COLLABORATION_EMBED_PLUGIN_CONFIG_KEY,
  y as COLLABORATION_EMBED_RESOURCE_REF_PROVIDER_ID,
  b as COLLABORATION_EMBED_RESOURCE_REF_PROVIDER_PRIORITY,
  x as COLLABORATION_EMBED_UNSUPPORTED_UNIT_TYPE,
  A as UniverCollaborationEmbedPlugin,
  S as createCollaborationEmbedResourceRefProvider,
};
