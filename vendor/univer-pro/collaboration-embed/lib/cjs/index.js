Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
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
function d(var_core_value_sigF704, var_core_value_sig2BCF) {
  return {
    registrationId: l,
    priority: 100,
    match: {
      fileKinds: [n.RESOURCE_REF_FILE_KIND["SELF"]],
      unitTypes: ["sheet", "doc", "slide", "base", "board"]
    },
    provider: {
      ensureUnit: var_core_value_sig3D7D => f(var_core_value_sig3D7D, var_core_value_sigF704, var_core_value_sig2BCF)
    }
  };
}
async function f(var_core_value_sig0D69, var_core_value_sig480E, var_core_value_sig26DB) {
  let var_core_value_sigF0F9 = var_core_value_sig0D69.ref["unit"].selector;
  switch (var_core_value_sig0D69.unitType) {
    case i.UniverInstanceType["UNIVER_SHEET"]:
      {
        let var_core_value_sig7524 = await var_core_value_sig480E.loadSheet(var_core_value_sigF0F9, 0, undefined, {
          createOptions: var_core_value_sig0D69.createOptions
        });
        return await var_core_value_sig26DB.readyForCollab(var_core_value_sig7524.getUnitId()), {
          unitId: var_core_value_sig7524.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_SHEET"]
        };
      }
    case i.UniverInstanceType["UNIVER_DOC"]:
      {
        let var_core_value_sig2AD8 = await var_core_value_sig480E.loadDoc(var_core_value_sigF0F9, 0, undefined, {
          createOptions: var_core_value_sig0D69.createOptions
        });
        return await var_core_value_sig26DB.readyForCollab(var_core_value_sig2AD8.getUnitId()), {
          unitId: var_core_value_sig2AD8.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_DOC"]
        };
      }
    case i.UniverInstanceType["UNIVER_SLIDE"]:
      {
        let var_core_value_sig2AD0 = await var_core_value_sig480E.loadSlide(var_core_value_sigF0F9, 0, undefined, {
          createOptions: var_core_value_sig0D69.createOptions
        });
        return await var_core_value_sig26DB.readyForCollab(var_core_value_sig2AD0.getUnitId()), {
          unitId: var_core_value_sig2AD0.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_SLIDE"]
        };
      }
    case i.UniverInstanceType["UNIVER_BASE"]:
      {
        let var_core_value_sig3EEE = await var_core_value_sig480E.loadBase(var_core_value_sigF0F9, 0, undefined, {
          createOptions: var_core_value_sig0D69.createOptions
        });
        return await var_core_value_sig26DB.readyForCollab(var_core_value_sig3EEE.getUnitId()), {
          unitId: var_core_value_sig3EEE.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_BASE"]
        };
      }
    case i.UniverInstanceType["UNIVER_BOARD"]:
      {
        let var_core_value_sigBC46 = await var_core_value_sig480E.loadBoard(var_core_value_sigF0F9, 0, undefined, {
          createOptions: var_core_value_sig0D69.createOptions
        });
        return await var_core_value_sig26DB.readyForCollab(var_core_value_sigBC46.getUnitId()), {
          unitId: var_core_value_sigBC46.getUnitId(),
          unitType: i.UniverInstanceType["UNIVER_BOARD"]
        };
      }
    default:
      throw Error(u);
  }
}
function p(var_core_value_sig1A0F, var_core_value_sigFBA4) {
  return function (var_core_value_sig27E5, var_core_value_sig8061) {
    var_core_value_sigFBA4(var_core_value_sig27E5, var_core_value_sig8061, var_core_value_sig1A0F);
  };
}
function m(var_core_value_sig4383, var_core_value_sig186C, var_core_value_sigD955, var_core_value_sig48BD) {
  var var_core_value_sig429F = arguments.length,
    var_core_value_sigF62A = var_core_value_sig429F < 3 ? var_core_value_sig186C : var_core_value_sig48BD === null ? var_core_value_sig48BD = Object.getOwnPropertyDescriptor(var_core_value_sig186C, var_core_value_sigD955) : var_core_value_sig48BD,
    var_core_value_sig8178;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigF62A = Reflect.decorate(var_core_value_sig4383, var_core_value_sig186C, var_core_value_sigD955, var_core_value_sig48BD);else {
    for (var var_core_value_sigE9ED = var_core_value_sig4383.length - 1; var_core_value_sigE9ED >= 0; var_core_value_sigE9ED--) (var_core_value_sig8178 = var_core_value_sig4383[var_core_value_sigE9ED]) && (var_core_value_sigF62A = (var_core_value_sig429F < 3 ? var_core_value_sig8178(var_core_value_sigF62A) : var_core_value_sig429F > 3 ? var_core_value_sig8178(var_core_value_sig186C, var_core_value_sigD955, var_core_value_sigF62A) : var_core_value_sig8178(var_core_value_sig186C, var_core_value_sigD955)) || var_core_value_sigF62A);
  }
  return var_core_value_sig429F > 3 && var_core_value_sigF62A && Object.defineProperty(var_core_value_sig186C, var_core_value_sigD955, var_core_value_sigF62A), var_core_value_sigF62A;
}
function h(var_core_value_sigB577) {
  "@babel/helpers - typeof";

  return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig4D4C) {
    return typeof var_core_value_sig4D4C;
  } : function (var_core_value_sigC9E0) {
    return var_core_value_sigC9E0 && typeof Symbol == "function" && var_core_value_sigC9E0.constructor === Symbol && var_core_value_sigC9E0 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigC9E0;
  }, h(var_core_value_sigB577);
}
function g(var_core_value_sig9572, var_core_value_sigD873) {
  if (h(var_core_value_sig9572) != "object" || !var_core_value_sig9572) return var_core_value_sig9572;
  var var_core_value_sigA12B = var_core_value_sig9572[Symbol.toPrimitive];
  if (var_core_value_sigA12B !== undefined) {
    var var_core_value_sigF230 = var_core_value_sigA12B.call(var_core_value_sig9572, var_core_value_sigD873 || "default");
    if (h(var_core_value_sigF230) != "object") return var_core_value_sigF230;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigD873 === "string" ? String : Number)(var_core_value_sig9572);
}
function _(var_core_value_sig09B8) {
  var var_core_value_sig6F91 = g(var_core_value_sig09B8, "string");
  return h(var_core_value_sig6F91) == "symbol" ? var_core_value_sig6F91 : var_core_value_sig6F91 + "";
}
function v(var_core_value_sigF9C7, var_core_value_sig8895, var_core_value_sigC80B) {
  return (var_core_value_sig8895 = _(var_core_value_sig8895)) in var_core_value_sigF9C7 ? Object.defineProperty(var_core_value_sigF9C7, var_core_value_sig8895, {
    value: var_core_value_sigC80B,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigF9C7[var_core_value_sig8895] = var_core_value_sigC80B, var_core_value_sigF9C7;
}
let y = class extends i.Plugin {
  constructor(var_core_value_sig76BA = o, var_core_value_sigFBFA, var_core_value_sigF602) {
    super(), this._config = var_core_value_sig76BA, this._injector = var_core_value_sigFBFA, this._configService = var_core_value_sigF602;
    let {
      ...var_core_value_sig1BBD
    } = (0, i.merge)({}, o, this._config);
    this._configService["setConfig"](a, var_core_value_sig1BBD);
  }
  onStarting() {
    this.disposeWithMe(this._injector["get"](n.EmbedResourceRefProviderRegistryService).registerUnitProvider(d(this._injector["get"](e.SnapshotService), this._injector["get"](t.CollaborationController))));
  }
};
v(y, "type", i.UniverInstanceType["UNIVER_UNKNOWN"]), v(y, "pluginName", "UNIVER_COLLABORATION_EMBED_PLUGIN"), v(y, "packageName", s), v(y, "version", c), y = m([(0, i.DependentOn)(r.UniverLicensePlugin, e.UniverCollaborationPlugin, n.UniverEmbedPlugin, t.UniverCollaborationClientPlugin), p(1, (0, i.Inject)(i.Injector)), p(2, i.IConfigService)], y), exports.COLLABORATION_EMBED_PLUGIN_CONFIG_KEY = a, exports.COLLABORATION_EMBED_RESOURCE_REF_PROVIDER_ID = l, exports.COLLABORATION_EMBED_RESOURCE_REF_PROVIDER_PRIORITY = 100, exports.COLLABORATION_EMBED_UNSUPPORTED_UNIT_TYPE = u, Object.defineProperty(exports, "UniverCollaborationEmbedPlugin", {
  enumerable: true,
  get: function () {
    return y;
  }
}), exports.createCollaborationEmbedResourceRefProvider = d;
