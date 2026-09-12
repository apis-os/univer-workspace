import { UniverLicensePlugin as _0xa2aefb } from "@univerjs-pro/license";
import {
  DependentOn as _0x1cdb2c,
  Disposable as _0x2e2b28,
  IConfigService as _0x1edc6e,
  ILogService as _0x5b6b39,
  IUniverInstanceService as _0x4833cf,
  Inject as _0x19fe99,
  Injector as _0x5dcc2e,
  LocaleService as _0x3e79b4,
  Plugin as _0x1f9810,
  UniverInstanceType as _0x488172,
  createIdentifier as _0x5aba0c,
  merge as _0x5d32b9,
  registerDependencies as _0x52ee6a,
  resolveWithBasePath as _0x5b7ac1,
  toDisposable as _0x162266,
  touchDependencies as _0x3d4e0f,
} from "@univerjs/core";
import {
  HTTPEventType as _0x502f44,
  HTTPResponseError as _0x10d7f2,
  HTTPService as _0x563613,
  UniverNetworkPlugin as _0x20807a,
} from "@univerjs/network";
import {
  ClockIcon as _0x5d047b,
  CloseIcon as _0x581338,
  DirectExportIcon as _0x4d3415,
  DocsMultiIcon as _0x3d9fd5,
  ErrorIcon as _0x1a1e19,
  ExportIcon as _0x40759d,
  FolderIcon as _0x5c9b59,
  LoadingMultiIcon as _0x18ffaa,
  ShareRangeIcon as _0x23fb9b,
  SheetsMultiIcon as _0x5e3546,
  SlidesMultiIcon as _0x5ef172,
  SuccessIcon as _0x2f9260,
} from "@univerjs/icons";
import {
  BuiltInUIPart as _0x4fa0d4,
  ComponentManager as _0x152e1b,
  IMessageService as _0x4228e2,
  IUIPartsService as _0x2487e2,
  IconManager as _0x3991e8,
  connectInjector as _0xf86d49,
  useDependency as _0x41f11e,
  useObservable as _0x342ab1,
} from "@univerjs/ui";
import {
  Button as _0x20c004,
  MessageType as _0x5f049a,
  Radio as _0x44ea5b,
  Select as _0xcb433,
  Tooltip as _0x28ddc7,
  clsx as _0xa12e7,
  scrollbarClassName as _0x252744,
} from "@univerjs/design";
import { useRef as _0x4118a7, useState as _0x344414 } from "react";
import {
  ErrorCode as _0x859031,
  FileSource as _0x3f4dd4,
} from "@univerjs/protocol";
import { jsx as _0x2d9de5, jsxs as _0x22c17a } from "react/jsx-runtime";
import { BehaviorSubject as _0x4eb785, Subject as _0x285421 } from "rxjs";
import {
  ISnapshotServerService as _0x33e881,
  SnapshotService as _0x45998e,
  b64EncodeUnicode as _0x22a2ad,
  textDecoder as _0x46232f,
  textEncoder as _0x32265b,
} from "@univerjs-pro/collaboration";
import { deflateSync as _0x8f340 } from "fflate";
var Pe = "@univerjs-pro/exchange-client",
  Fe = "1.0.0-insiders.20260907-70fc579";
const O = "exchange-client.config",
  k = {},
  A = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  j = "application/msword",
  M = "application/vnd.ms-excel",
  N = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  P = "text/csv",
  F = "text/tab-separated-values",
  I = "application/vnd.ms-powerpoint",
  L =
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  R = "application/pdf",
  Ie = {
    [_0x488172.UNIVER_UNKNOWN]: [""],
    [_0x488172.UNIVER_DOC]: [j, A],
    [_0x488172.UNIVER_SHEET]: [M, N, P, F],
    [_0x488172.UNIVER_SLIDE]: [I, L],
    [_0x488172.UNIVER_PDF]: [R],
    [_0x488172.UNIVER_BASE]: [M, N, P, F],
    [_0x488172.UNIVER_BOARD]: [""],
    [_0x488172.UNIVER_PROJECT]: [""],
    [_0x488172.UNRECOGNIZED]: [""],
  },
  z = {
    [j]: "doc",
    [A]: "docx",
    [M]: "xls",
    [N]: "xlsx",
    [P]: "csv",
    [F]: "tsv",
    [I]: "ppt",
    [L]: "pptx",
    [R]: "pdf",
  },
  Le = Object.fromEntries(
    Object.entries(Ie).map(([_0x2cdf42, _0x4f3fa8]) => [
      _0x2cdf42,
      _0x4f3fa8.map((_0x5860e2) => z[_0x5860e2]).filter(Boolean),
    ]),
  );
function Re(_0x51893d, _0x2957ad, _0x397b79) {
  let _0x120163 = document.createElement("a");
  ((_0x120163.href = _0x51893d),
    (_0x120163.style["display"] = "none"),
    (_0x120163.download = _0x2957ad + "." + _0x397b79),
    document.body["appendChild"](_0x120163),
    _0x120163.click(),
    document.body["removeChild"](_0x120163));
}
function ze(_0x58e8a6, _0x4a713e) {
  var _0x2d2683;
  let _0x31915c =
    (_0x2d2683 = _0x58e8a6.name["split"](".").pop()) == null
      ? undefined
      : _0x2d2683.toLowerCase();
  return !!(_0x31915c && (Le[_0x4a713e] ?? []).includes(_0x31915c));
}
function B(_0x371d1f, _0x1b956c = false) {
  let _0x41c873 = _0x371d1f
    .flatMap((_0x37c9bb) => Le[_0x37c9bb] ?? [])
    .map((_0x50f8b2) => "." + _0x50f8b2)
    .join(",");
  return new Promise((_0xeeb30f) => {
    let _0x329d6d = document.createElement("input");
    ((_0x329d6d.type = "file"),
      (_0x329d6d.accept = _0x41c873),
      (_0x329d6d.multiple = _0x1b956c));
    let _0xd27f1c = () => {
      var _0x35c89d;
      return _0xeeb30f(
        (_0x35c89d = _0x329d6d.files) != null && _0x35c89d.length
          ? _0x329d6d.files
          : null,
      );
    };
    (_0x329d6d.addEventListener("change", _0xd27f1c, { once: true }),
      _0x329d6d.addEventListener("cancel", _0xd27f1c, { once: true }),
      _0x329d6d.click());
  });
}
async function Be(_0x30be89, _0x3fbd2a) {
  try {
    return await Ve(_0x30be89, _0x3fbd2a);
  } catch (_0x1b45c4) {
    console.error("Error\x20fetching\x20file\x20from\x20URL:", _0x1b45c4);
    return;
  }
}
async function Ve(_0x5de015, _0x32b988, _0x1dba8b) {
  var _0x28e423, _0x267eb9;
  let _0x57e936 = _0x1dba8b
      ? await He(_0x5de015, _0x32b988, _0x1dba8b)
      : await _0x32b988.get(_0x5de015, { responseType: "blob" }),
    _0x170c95 = _0x57e936.body,
    _0x184ea8 =
      ((_0x28e423 = _0x57e936.headers["get"]("Content-Type")) == null
        ? undefined
        : _0x28e423.join(",\x20")) ?? "application/octet-stream",
    _0x4ba8bd = "file." + (z[_0x184ea8] || "xlsx"),
    _0x3690f =
      (_0x267eb9 = _0x57e936.headers["get"]("content-disposition")) == null
        ? undefined
        : _0x267eb9.join(",\x20");
  if (_0x3690f) {
    let _0x25917c = _0x3690f.match(/filename=(.+)/);
    _0x25917c && _0x25917c[1] && (_0x4ba8bd = _0x25917c[1]);
  } else _0x4ba8bd = Ue(_0x5de015) || _0x4ba8bd;
  return new File([_0x170c95], _0x4ba8bd, { type: _0x184ea8 });
}
function He(_0x53fc38, _0x9166f2, _0x72aec4) {
  return new Promise((_0xa8648c, _0x54759b) => {
    let _0x5601c2 = false,
      _0x354c08,
      _0x56c1ba = () => _0x72aec4.removeEventListener("abort", _0xd42d51),
      _0xd42d51 = () => {
        if (_0x5601c2) return;
        ((_0x5601c2 = true),
          _0x354c08 == null || _0x354c08.unsubscribe(),
          _0x56c1ba());
        let _0xfde89a = Error("File request aborted.");
        ((_0xfde89a.name = "AbortError"), _0x54759b(_0xfde89a));
      };
    if (
      (_0x72aec4.addEventListener("abort", _0xd42d51, { once: true }),
      _0x72aec4.aborted)
    ) {
      _0xd42d51();
      return;
    }
    ((_0x354c08 = _0x9166f2
      .stream("GET", _0x53fc38, { responseType: "blob" })
      .subscribe({
        next(_0x227b02) {
          _0x5601c2 ||
            _0x227b02.type !== _0x502f44.Response ||
            ((_0x5601c2 = true),
            _0x56c1ba(),
            _0x354c08 == null || _0x354c08.unsubscribe(),
            _0xa8648c(_0x227b02));
        },
        error(_0x486005) {
          _0x5601c2 || ((_0x5601c2 = true), _0x56c1ba(), _0x54759b(_0x486005));
        },
        complete() {
          _0x5601c2 ||
            ((_0x5601c2 = true),
            _0x56c1ba(),
            _0x54759b(Error("File request completed without a response.")));
        },
      })),
      _0x5601c2 && _0x354c08.unsubscribe());
  });
}
function Ue(_0x25a53a) {
  try {
    return new URL(_0x25a53a).pathname["split"]("/").pop();
  } catch (_0x1aa025) {
    console.error("Error getting file name from URL:", _0x1aa025);
    return;
  }
}
function We(_0x316ccc) {
  let _0x24afcc = new Blob([_0x316ccc.buffer], { type: "application/json" });
  return new File([_0x24afcc], "file.json");
}
function Ge(_0x2b0b59, _0x91e687) {
  return _0x2b0b59.replace("{type}", _0x91e687);
}
function Ke(_0x10707f, _0x1505d2) {
  return _0x10707f.replace("{taskID}", _0x1505d2);
}
function qe(_0x4dbc9a, _0x5f3a5b) {
  return _0x4dbc9a.replace("{fileID}", _0x5f3a5b);
}
function V(_0x5ef7d2) {
  "@babel/helpers - typeof";
  return (
    (V =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5db49a) {
            return typeof _0x5db49a;
          }
        : function (_0x55cd4c) {
            return _0x55cd4c &&
              typeof Symbol == "function" &&
              _0x55cd4c.constructor === Symbol &&
              _0x55cd4c !== Symbol.prototype
              ? "symbol"
              : typeof _0x55cd4c;
          }),
    V(_0x5ef7d2)
  );
}
function Je(_0x442121, _0x5a1d4e) {
  if (V(_0x442121) != "object" || !_0x442121) return _0x442121;
  var _0x3fd509 = _0x442121[Symbol.toPrimitive];
  if (_0x3fd509 !== undefined) {
    var _0x455d7e = _0x3fd509.call(_0x442121, _0x5a1d4e || "default");
    if (V(_0x455d7e) != "object") return _0x455d7e;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x5a1d4e === "string" ? String : Number)(_0x442121);
}
function Ye(_0x44890a) {
  var _0x1fd66e = Je(_0x44890a, "string");
  return V(_0x1fd66e) == "symbol" ? _0x1fd66e : _0x1fd66e + "";
}
function H(_0x575adb, _0x39685a, _0x265584) {
  return (
    (_0x39685a = Ye(_0x39685a)) in _0x575adb
      ? Object.defineProperty(_0x575adb, _0x39685a, {
          value: _0x265584,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x575adb[_0x39685a] = _0x265584),
    _0x575adb
  );
}
function U(_0x2a6ebd, _0x27645d) {
  return function (_0x2cb7bd, _0x245fb0) {
    _0x27645d(_0x2cb7bd, _0x245fb0, _0x2a6ebd);
  };
}
function W(_0x1d5539, _0x3f6772, _0x244c70, _0x16a38d) {
  var _0x19b1fd = arguments.length,
    _0x225383 =
      _0x19b1fd < 3
        ? _0x3f6772
        : _0x16a38d === null
          ? (_0x16a38d = Object.getOwnPropertyDescriptor(_0x3f6772, _0x244c70))
          : _0x16a38d,
    _0x4a7aff;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x225383 = Reflect.decorate(_0x1d5539, _0x3f6772, _0x244c70, _0x16a38d);
  else {
    for (var _0x2f7806 = _0x1d5539.length - 1; _0x2f7806 >= 0; _0x2f7806--)
      (_0x4a7aff = _0x1d5539[_0x2f7806]) &&
        (_0x225383 =
          (_0x19b1fd < 3
            ? _0x4a7aff(_0x225383)
            : _0x19b1fd > 3
              ? _0x4a7aff(_0x3f6772, _0x244c70, _0x225383)
              : _0x4a7aff(_0x3f6772, _0x244c70)) || _0x225383);
  }
  return (
    _0x19b1fd > 3 &&
      _0x225383 &&
      Object.defineProperty(_0x3f6772, _0x244c70, _0x225383),
    _0x225383
  );
}
let Xe = (function (_0x1b9747) {
    return (
      (_0x1b9747[(_0x1b9747.UNDEFINED = 0)] = "UNDEFINED"),
      (_0x1b9747[(_0x1b9747.UNIT = 1)] = "UNIT"),
      (_0x1b9747[(_0x1b9747.JSON = 2)] = "JSON"),
      (_0x1b9747[(_0x1b9747.UNRECOGNIZED = -1)] = "UNRECOGNIZED"),
      _0x1b9747
    );
  })({}),
  Ze = (function (_0x4f8afe) {
    return (
      (_0x4f8afe.XLSX = "xlsx"),
      (_0x4f8afe.CSV = "csv"),
      (_0x4f8afe.TSV = "tsv"),
      (_0x4f8afe.DOCX = "docx"),
      (_0x4f8afe.PPTX = "pptx"),
      (_0x4f8afe.PDF = "pdf"),
      _0x4f8afe
    );
  })({}),
  Qe = (function (_0x2bd6a5) {
    return (
      (_0x2bd6a5.MODERN = "modern"),
      (_0x2bd6a5.TRADITIONAL = "traditional"),
      _0x2bd6a5
    );
  })({}),
  $e = (function (_0x2c5f9a) {
    return (
      (_0x2c5f9a.AUTO = "auto"),
      (_0x2c5f9a.TABLES = "tables"),
      (_0x2c5f9a.SHEETS = "sheets"),
      (_0x2c5f9a.HYBRID = "hybrid"),
      _0x2c5f9a
    );
  })({}),
  et = (function (_0xeb8000) {
    return (
      (_0xeb8000.CONVERT_THEN_VALUES = "convert-then-values"),
      (_0xeb8000.VALUES = "values"),
      (_0xeb8000.TEXT = "text"),
      (_0xeb8000.FAIL = "fail"),
      _0xeb8000
    );
  })({}),
  tt = (function (_0x2c51d9) {
    return (
      (_0x2c51d9.TABLES = "tables"),
      (_0x2c51d9.RANGES = "ranges"),
      _0x2c51d9
    );
  })({});
const nt = _0x5aba0c("univer-pro.exchange-client.request.service");
let G = class {
  constructor(_0x9b0b9d, _0x231924) {
    ((this._configService = _0x9b0b9d),
      (this._httpService = _0x231924),
      H(this, "_taskInterrupted", new Set()));
  }
  dispose() {}
  setTaskInterrupted(_0x70ee9a) {
    this._taskInterrupted["add"](_0x70ee9a);
  }
  clearTaskInterrupted() {
    this._taskInterrupted["clear"]();
  }
  async upload(_0x3abbaa, _0xba3c9d = 0, _0x45fd66 = false) {
    if (typeof _0x3abbaa == "string") {
      let _0xb44578 = await Be(_0x3abbaa, this._httpService);
      if (!_0xb44578)
        throw Error(
          "upload request failed: failed to read source file from url",
        );
      _0x3abbaa = _0xb44578;
    }
    _0xba3c9d ||= _0x3abbaa.size;
    let _0x3a95c8 = new FormData();
    _0x3a95c8.append("file", _0x3abbaa);
    try {
      let _0x57356f =
          this._getUploadFileURL() +
          "?size=" +
          _0xba3c9d +
          "&source=" +
          _0x3f4dd4.HttpImport +
          "&flate=" +
          _0x45fd66,
        _0x2b851e = { body: _0x3a95c8 },
        _0x4986ad = (await this._httpService["post"](_0x57356f, _0x2b851e))
          .body;
      if (_0x4986ad.error && _0x4986ad.error["code"] !== _0x859031.OK)
        throw Error(
          this._buildProtocolErrorMessage(
            "upload request failed",
            _0x4986ad.error,
          ),
        );
      return _0x4986ad;
    } catch (_0x3810f7) {
      throw _0x3810f7 instanceof Error
        ? _0x3810f7
        : Error(
            this._buildHttpErrorMessage("upload request failed", _0x3810f7),
          );
    }
  }
  async import(_0x33f9df) {
    let { type: _0x5f5408, ..._0x1e7c6b } = _0x33f9df;
    try {
      let _0x182e73 = Ge(this._getImportURL(), "" + _0x5f5408),
        _0x12127a = { body: _0x1e7c6b },
        _0x3ebdc5 = (await this._httpService["post"](_0x182e73, _0x12127a))
          .body;
      return _0x3ebdc5.error && _0x3ebdc5.error["code"] !== _0x859031.OK
        ? undefined
        : _0x3ebdc5;
    } catch {
      return;
    }
  }
  async export(_0x4d74b3) {
    let { type: _0xd9e0ad } = _0x4d74b3;
    try {
      let _0x56a3f4 = Ge(this._getExportURL(), "" + _0xd9e0ad),
        _0x5849b9 = { body: _0x4d74b3 },
        _0x2d329e = (await this._httpService["post"](_0x56a3f4, _0x5849b9))
          .body;
      return _0x2d329e.error && _0x2d329e.error["code"] !== _0x859031.OK
        ? undefined
        : _0x2d329e;
    } catch {
      return;
    }
  }
  async getTask(_0xbde3a9) {
    return new Promise((_0x524dbf, _0x27d1d8) => {
      try {
        let _0x33985e = 0,
          _0x1f7880 = Ke(this._getTaskURL(), "" + _0xbde3a9),
          _0x3f903e = this._getMaxPollingTime(),
          _0x3a0639 = async () => {
            if (this._taskInterrupted["has"](_0xbde3a9)) return;
            let _0x503962 = (await this._httpService["get"](_0x1f7880)).body;
            if (_0x503962.error && _0x503962.error["code"] === _0x859031.OK) {
              if (_0x503962.status === "done") _0x524dbf(_0x503962);
              else {
                if (_0x503962.status === "pending") {
                  let _0x28e9a6 = 1000;
                  if (_0x33985e >= _0x3f903e) {
                    _0x27d1d8(_0x503962);
                    return;
                  } else _0x33985e >= 30000 && (_0x28e9a6 = 5000);
                  ((_0x33985e += _0x28e9a6), setTimeout(_0x3a0639, _0x28e9a6));
                } else _0x27d1d8(_0x503962);
              }
            } else _0x27d1d8(_0x503962);
          };
        _0x3a0639();
      } catch (_0x58ece7) {
        _0x27d1d8(
          _0x58ece7 instanceof Error ? _0x58ece7 : Error(String(_0x58ece7)),
        );
      }
    });
  }
  async signUrl(_0x3cd196) {
    try {
      let _0x39f452 = qe(this._getSignURL(), "" + _0x3cd196);
      return (await this._httpService["get"](_0x39f452)).body;
    } catch {
      return;
    }
  }
  async getTextFromUrl(_0x13eab) {
    try {
      return (
        await this._httpService["get"](_0x13eab, { responseType: "text" })
      ).body;
    } catch {
      return;
    }
  }
  _buildProtocolErrorMessage(_0x48f889, _0x14a7cf) {
    let _0x2172cb = this._extractErrorDetail(_0x14a7cf);
    return _0x2172cb ? _0x48f889 + ":\x20" + _0x2172cb : _0x48f889;
  }
  _buildHttpErrorMessage(_0x3c7007, _0x33aa98) {
    if (_0x33aa98 instanceof _0x10d7f2) {
      let _0xbd563c =
          typeof _0x33aa98.status == "number"
            ? "" +
              _0x33aa98.status +
              (_0x33aa98.statusText ? "\x20" + _0x33aa98.statusText : "")
            : undefined,
        _0x276e37 = this._extractErrorDetail(_0x33aa98.error);
      return _0xbd563c && _0x276e37
        ? _0x3c7007 + ": HTTP " + _0xbd563c + "\x20-\x20" + _0x276e37
        : _0xbd563c
          ? _0x3c7007 + ": HTTP " + _0xbd563c
          : _0x276e37
            ? _0x3c7007 + ":\x20" + _0x276e37
            : _0x3c7007;
    }
    let _0xf269ee = this._extractErrorDetail(_0x33aa98);
    return _0xf269ee ? _0x3c7007 + ":\x20" + _0xf269ee : _0x3c7007;
  }
  _extractErrorDetail(_0x56e8c2) {
    if (typeof _0x56e8c2 == "string") {
      let _0x1a5eb3 = _0x56e8c2.trim();
      return _0x1a5eb3.length > 0 ? _0x1a5eb3 : undefined;
    }
    if (_0x56e8c2 instanceof Error)
      return this._extractErrorDetail(_0x56e8c2.message);
    if (!_0x56e8c2 || typeof _0x56e8c2 != "object" || Array.isArray(_0x56e8c2))
      return;
    let _0x382087 = _0x56e8c2,
      _0x27fbde = this._extractErrorDetail(_0x382087.message);
    if (_0x27fbde) return _0x27fbde;
    if (
      _0x382087.error &&
      typeof _0x382087.error == "object" &&
      !Array.isArray(_0x382087.error)
    ) {
      let _0xe85e01 = this._extractErrorDetail(_0x382087.error);
      if (_0xe85e01) return _0xe85e01;
    }
  }
  _getUploadFileURL() {
    let _0x86ac98 = this._configService["getConfig"](O);
    return (
      (_0x86ac98 == null ? undefined : _0x86ac98.uploadFileServerUrl) ??
      "/universer-api/stream/file/upload"
    );
  }
  _getImportURL() {
    let _0x10d258 = this._configService["getConfig"](O);
    return (
      (_0x10d258 == null ? undefined : _0x10d258.importServerUrl) ??
      "/universer-api/exchange/{type}/import"
    );
  }
  _getExportURL() {
    let _0x37ec14 = this._configService["getConfig"](O);
    return (
      (_0x37ec14 == null ? undefined : _0x37ec14.exportServerUrl) ??
      "/universer-api/exchange/{type}/export"
    );
  }
  _getTaskURL() {
    let _0x3075aa = this._configService["getConfig"](O);
    return (
      (_0x3075aa == null ? undefined : _0x3075aa.getTaskServerUrl) ??
      "/universer-api/exchange/task/{taskID}"
    );
  }
  _getSignURL() {
    let _0x3dcb70 = this._configService["getConfig"](O);
    return (
      (_0x3dcb70 == null ? undefined : _0x3dcb70.signUrlServerUrl) ??
      "/universer-api/file/{fileID}/sign-url"
    );
  }
  _getMaxPollingTime() {
    let _0x5b6a02 = this._configService["getConfig"](O);
    return (_0x5b6a02 == null ? undefined : _0x5b6a02.maxTimeoutTime) ?? 120000;
  }
};
G = W([U(0, _0x1edc6e), U(1, _0x19fe99(_0x563613))], G);
const rt = "exchange-client.export-format-dialog";
function it({
  formats: _0x12780b,
  items: _0xde73ec,
  selectedId: _0x225e9b,
  onCancel: _0x537ffc,
  onConfirm: _0x1f7c49,
}) {
  let _0x5f01e3 = _0x41f11e(_0x3e79b4),
    [_0x3d859c, _0x402362] = _0x344414(_0x12780b[0]),
    [_0x178f74, _0x466963] = _0x344414(_0x225e9b),
    [_0x2d07b7, _0x250ae2] = _0x344414(false),
    _0x592ea2 = _0x4118a7(false);
  return _0x22c17a("div", {
    className: "univer-flex univer-flex-col univer-gap-5 univer-p-1",
    children: [
      _0x2d9de5("div", {
        className: "univer-flex univer-flex-col univer-gap-4",
        children: _0x12780b.map((_0x1d6c1a) =>
          _0x22c17a(
            "div",
            {
              className: "univer-flex univer-items-center univer-gap-3",
              children: [
                _0x2d9de5(_0x44ea5b, {
                  value: _0x1d6c1a,
                  checked: _0x3d859c === _0x1d6c1a,
                  onChange: (_0x1b02c4) => _0x402362(_0x1b02c4),
                  children: _0x2d9de5("span", {
                    className: "univer-w-10",
                    children: _0x1d6c1a.toUpperCase(),
                  }),
                }),
                _0x1d6c1a !== "xlsx" &&
                  _0x2d9de5(_0xcb433, {
                    className: "univer-w-48",
                    value: _0x178f74,
                    options: _0xde73ec,
                    onChange: (_0x84a577) => _0x466963(String(_0x84a577)),
                  }),
              ],
            },
            _0x1d6c1a,
          ),
        ),
      }),
      _0x22c17a("div", {
        className: "univer-flex univer-justify-end univer-gap-2",
        children: [
          _0x2d9de5(_0x20c004, {
            type: "button",
            variant: "default",
            onClick: _0x537ffc,
            children: _0x5f01e3.t("exchange-client.cancel"),
          }),
          _0x22c17a(_0x20c004, {
            type: "button",
            variant: "primary",
            "aria-busy": _0x2d07b7,
            disabled:
              _0x2d07b7 || !_0x3d859c || (_0x3d859c !== "xlsx" && !_0x178f74),
            onClick: async () => {
              if (!_0x592ea2.current) {
                ((_0x592ea2.current = true), _0x250ae2(true));
                try {
                  await _0x1f7c49(_0x3d859c, _0x178f74);
                } finally {
                  ((_0x592ea2.current = false), _0x250ae2(false));
                }
              }
            },
            children: [
              _0x2d07b7 &&
                _0x2d9de5(_0x18ffaa, { className: "univer-animate-spin" }),
              _0x5f01e3.t("exchange-client.confirm"),
            ],
          }),
        ],
      }),
    ],
  });
}
let K = class extends _0x2e2b28 {
  constructor(_0x2caace, _0x49cdd5) {
    (super(),
      (this._iconManager = _0x2caace),
      (this._componentManager = _0x49cdd5),
      this._registerIcons(),
      this._registerComponents());
  }
  _registerIcons() {
    this.disposeWithMe(
      this._iconManager["register"]({
        DirectExportIcon: _0x4d3415,
        ExportIcon: _0x40759d,
        FolderIcon: _0x5c9b59,
      }),
    );
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](rt, it));
  }
};
K = W([U(0, _0x19fe99(_0x3991e8)), U(1, _0x19fe99(_0x152e1b))], K);
const q = _0x5aba0c("univer-pro.exchange-client.upload-notification.service");
var at = class extends _0x2e2b28 {
  constructor() {
    (super(),
      H(this, "_visible$", new _0x285421()),
      H(this, "_state$", new _0x285421()),
      H(this, "_list$", new _0x285421()),
      H(this, "visible$", this._visible$["asObservable"]()),
      H(this, "state$", this._state$["asObservable"]()),
      H(this, "list$", this._list$["asObservable"]()),
      H(this, "_list", []));
  }
  dispose() {
    (super.dispose(),
      this._visible$["complete"](),
      this._state$["complete"](),
      this._list$["complete"]());
  }
  show() {
    this._visible$["next"](true);
  }
  hide() {
    this._visible$["next"](false);
  }
  updateState(_0x4c3587) {
    this._state$["next"](_0x4c3587);
  }
  pushLink(_0x36942c) {
    (this._list["unshift"](_0x36942c), this._list$["next"](this._list));
  }
};
function ot(_0x51c8f4) {
  let { list: _0x1c95bc } = _0x51c8f4;
  function _0x416400(_0x5d5bea) {
    switch (_0x5d5bea) {
      case _0x488172.UNIVER_DOC:
        return _0x2d9de5(_0x3d9fd5, {});
      case _0x488172.UNIVER_SHEET:
      case _0x488172.UNIVER_BASE:
        return _0x2d9de5(_0x5e3546, {});
      case _0x488172.UNIVER_SLIDE:
        return _0x2d9de5(_0x5ef172, {});
      default:
        return null;
    }
  }
  return _0x2d9de5("div", {
    className: _0xa12e7(
      "univer-mt-5\x20univer-max-h-72\x20univer-overflow-y-auto\x20univer-overflow-x-hidden",
      _0x252744,
    ),
    children: _0x2d9de5("ul", {
      className:
        "univer-m-0 univer-flex univer-list-none univer-flex-col univer-gap-2 univer-p-0",
      children: _0x1c95bc.map((_0x2a80ee, _0x448eed) =>
        _0x2d9de5(
          "li",
          {
            children: _0x22c17a("a", {
              className:
                "univer-flex univer-justify-between univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-py-1 univer-text-gray-900 univer-no-underline univer-outline-none univer-transition-colors hover:univer-bg-gray-200 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
              href: _0x2a80ee.link,
              target: "_blank",
              rel: "noreferrer",
              children: [
                _0x22c17a("span", {
                  className:
                    "univer-flex univer-w-[calc(100%-48px)] univer-items-center",
                  children: [
                    _0x2d9de5("span", {
                      className: "univer-flex\x20univer-h-5\x20univer-text-xl",
                      children: _0x416400(_0x2a80ee.type),
                    }),
                    _0x2d9de5(_0x28ddc7, {
                      showIfEllipsis: true,
                      title: _0x2a80ee.name,
                      asChild: true,
                      children: _0x2d9de5("span", {
                        className:
                          "univer-ml-1\x20univer-truncate\x20univer-text-sm\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
                        children: _0x2a80ee.name,
                      }),
                    }),
                  ],
                }),
                _0x2d9de5("span", {
                  className:
                    "univer-flex univer-size-6 univer-items-center univer-justify-center univer-rounded univer-border-none univer-bg-transparent univer-p-0 univer-text-base univer-text-gray-600 univer-outline-none univer-transition-colors hover:univer-bg-gray-200 dark:!univer-text-gray-200 dark:hover:!univer-bg-gray-600",
                  children: _0x2d9de5(_0x23fb9b, {}),
                }),
              ],
            }),
          },
          _0x448eed,
        ),
      ),
    }),
  });
}
const J = _0x5aba0c("univer-pro.exchange-client.exchange.service");
let Y = class extends _0x2e2b28 {
  constructor(_0x4b5269, _0x3b9fa5, _0x4d6090) {
    (super(),
      (this._configService = _0x4b5269),
      (this._httpService = _0x3b9fa5),
      (this._requestService = _0x4d6090),
      H(this, "_importTaskId", null),
      H(this, "_requestState$", new _0x285421()),
      H(this, "requestState$", this._requestState$["asObservable"]()));
  }
  dispose() {
    (super.dispose(), this._requestState$["complete"]());
  }
  downloadFile(_0x1e3b89, _0x2afc7b, _0x2d1a10) {
    let _0x2901a9 = URL.createObjectURL(_0x1e3b89);
    (Re(_0x2901a9, _0x2afc7b, _0x2d1a10), URL.revokeObjectURL(_0x2901a9));
  }
  async getFileById(_0x5c18ef, _0x103665) {
    if (_0x103665 != null && _0x103665.aborted) return;
    let _0x506396 = await this._signUrl(_0x5c18ef);
    if (!(!_0x506396 || (_0x103665 != null && _0x103665.aborted)))
      return Ve(_0x506396, this._httpService, _0x103665);
  }
  async importFileToUnitId(_0x10e619, _0x2c743d, _0x340fda) {
    var _0x1031ea, _0x4b3946;
    let _0x5c077b = await this._upload(_0x10e619);
    if (!_0x5c077b) return;
    let _0x30b285 = await this._import(_0x5c077b, 1, _0x2c743d, _0x340fda);
    if (!_0x30b285) return;
    ((this._importTaskId = _0x30b285),
      this._requestService["clearTaskInterrupted"]());
    let _0x10dc56 = await this._requestService["getTask"](_0x30b285).catch(
      (_0x340e51) => {
        var _0x56b281;
        let _0x4a319a =
          _0x340e51 instanceof Error
            ? _0x340e51.message
            : (_0x56b281 = _0x340e51.error) == null
              ? undefined
              : _0x56b281.message;
        this._requestState$["next"]({
          error: { code: _0x859031.UNRECOGNIZED, message: _0x4a319a || "" },
          state: 3,
        });
      },
    );
    if (!_0x10dc56) return;
    let _0x164898 =
        (_0x1031ea = _0x10dc56.import) == null
          ? undefined
          : _0x1031ea.outputType,
      _0x51f51a =
        ((_0x4b3946 = _0x10dc56.import) == null
          ? undefined
          : _0x4b3946.unitID) || "";
    if (_0x164898 !== 1) {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "Get outputType error",
        },
        state: 3,
      });
      return;
    }
    if (_0x51f51a.length === 0) {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "Failed to get unitID from task",
        },
        state: 3,
      });
      return;
    }
    return (
      this._requestState$["next"]({ error: _0x10dc56.error, state: 3 }),
      _0x51f51a
    );
  }
  async importFileToJson(_0x37b754, _0x54edd4, _0xc7643b) {
    return this._importToJson(_0x37b754, _0x54edd4, _0xc7643b);
  }
  async exportFileByUnitId(_0x9367f1, _0x460864, _0x21cfbb, _0x8bd177) {
    return this._export(_0x9367f1, 1, _0x460864, _0x21cfbb, _0x8bd177);
  }
  async exportFileBySnapshot(_0x1b8eec, _0x3fc211, _0x410e9e, _0x3886ae) {
    return this._exportBySnapshot(_0x1b8eec, _0x3fc211, _0x410e9e, _0x3886ae);
  }
  interruptImportTask() {
    this._importTaskId &&
      this._requestService["setTaskInterrupted"](this._importTaskId);
  }
  async _importToJson(_0x29110f, _0x17f26e, _0x9cb28) {
    var _0x309428, _0x1d7301;
    let _0x2b0d80 = await this._upload(_0x29110f);
    if (!_0x2b0d80) return;
    let _0x5baee5 = await this._import(_0x2b0d80, 2, _0x17f26e, _0x9cb28);
    if (!_0x5baee5) return;
    ((this._importTaskId = _0x5baee5),
      this._requestService["clearTaskInterrupted"]());
    let _0x3e9c71 = await this._requestService["getTask"](_0x5baee5).catch(
      (_0x23b32e) => {
        var _0x5e93a6;
        let _0x5c9e4e =
          _0x23b32e instanceof Error
            ? _0x23b32e.message
            : (_0x5e93a6 = _0x23b32e.error) == null
              ? undefined
              : _0x5e93a6.message;
        this._requestState$["next"]({
          error: { code: _0x859031.UNRECOGNIZED, message: _0x5c9e4e || "" },
          state: 3,
        });
      },
    );
    if (!_0x3e9c71) return;
    let _0x1b8065 =
        (_0x309428 = _0x3e9c71.import) == null
          ? undefined
          : _0x309428.outputType,
      _0x5a5c31 =
        ((_0x1d7301 = _0x3e9c71.import) == null
          ? undefined
          : _0x1d7301.jsonID) || "";
    if (_0x1b8065 !== 2) {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "Get\x20outputType\x20error",
        },
        state: 3,
      });
      return;
    }
    if (_0x5a5c31.length === 0) {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "Failed\x20to\x20get\x20jsonID\x20from\x20task",
        },
        state: 3,
      });
      return;
    }
    this._requestState$["next"]({ error: _0x3e9c71.error, state: 3 });
    let _0x87d6e4 = await this._signUrl(_0x5a5c31);
    if (!_0x87d6e4) return;
    let _0x1b1bed = await this._requestService["getTextFromUrl"](_0x87d6e4);
    if (!_0x1b1bed) {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "Failed to get text from url",
        },
        state: 5,
      });
      return;
    }
    try {
      let _0x25a2b6 = JSON.parse(_0x1b1bed);
      return (
        this._requestState$["next"]({
          error: { code: _0x859031.OK, message: "success" },
          state: 5,
        }),
        _0x25a2b6
      );
    } catch {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "Failed\x20to\x20parse\x20json",
        },
        state: 5,
      });
    }
  }
  async _exportBySnapshot(_0x4b0524, _0x3fdd01, _0xe499b6, _0x3add7c) {
    let _0x677af9 = JSON.stringify(_0x4b0524),
      _0x596781 = _0x32265b.encode(_0x677af9),
      _0x11d517 = _0x8f340(_0x596781),
      _0x1a2419 = _0x596781.length,
      _0x812b01 = We(_0x11d517),
      _0x32df81 = await this._upload(_0x812b01, _0x1a2419, true);
    if (_0x32df81)
      return this._export(_0x32df81, 2, _0x3fdd01, _0xe499b6, _0x3add7c);
  }
  async _export(_0x52c499, _0x19eda0, _0x5bd410, _0xd134a7, _0x260c75) {
    var _0x4ac775;
    let _0x25dd0e = await this._requestService["export"]({
      ...(_0x19eda0 === 1 ? { unitID: _0x52c499 } : { jsonID: _0x52c499 }),
      type: _0x5bd410,
      format: _0xd134a7,
      options: _0x260c75,
    });
    if (!_0x25dd0e) {
      this._requestState$["next"]({
        error: { code: _0x859031.UNRECOGNIZED, message: "export error" },
        state: 2,
      });
      return;
    }
    if (
      (this._requestState$["next"]({ error: _0x25dd0e.error, state: 2 }),
      _0x25dd0e.error && _0x25dd0e.error["code"] !== _0x859031.OK)
    )
      return;
    let _0x3f1c6e = _0x25dd0e.taskID,
      _0x3b2352 = await this._requestService["getTask"](_0x3f1c6e).catch(
        (_0x44becb) => {
          var _0x3e4851;
          let _0x10f6be =
            _0x44becb instanceof Error
              ? _0x44becb.message
              : (_0x3e4851 = _0x44becb.error) == null
                ? undefined
                : _0x3e4851.message;
          this._requestState$["next"]({
            error: { code: _0x859031.UNRECOGNIZED, message: _0x10f6be || "" },
            state: 3,
          });
        },
      );
    if (!_0x3b2352) return;
    let _0x50c98b =
      ((_0x4ac775 = _0x3b2352.export) == null ? undefined : _0x4ac775.fileID) ||
      "";
    if (_0x50c98b.length === 0) {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "Failed to get fileID from task",
        },
        state: 3,
      });
      return;
    }
    this._requestState$["next"]({ error: _0x3b2352.error, state: 3 });
    let _0x40629a = await this._signUrl(_0x50c98b);
    if (!_0x40629a) return;
    let _0x55524f = await Be(_0x40629a, this._httpService);
    if (!_0x55524f) {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "Failed\x20to\x20get\x20file\x20from\x20url",
        },
        state: 6,
      });
      return;
    }
    return (
      this._requestState$["next"]({
        error: { code: _0x859031.OK, message: "success" },
        state: 6,
      }),
      _0x55524f
    );
  }
  async _upload(_0x1b771b, _0x3b7c3d, _0x3e5816) {
    let _0x272ba6;
    try {
      _0x272ba6 = await this._requestService["upload"](
        _0x1b771b,
        _0x3b7c3d,
        _0x3e5816,
      );
    } catch (_0x43f9e3) {
      let _0x3eaba5 =
        _0x43f9e3 instanceof Error ? _0x43f9e3.message : String(_0x43f9e3);
      this._requestState$["next"]({
        error: { code: _0x859031.UNRECOGNIZED, message: _0x3eaba5 },
        state: 0,
      });
      return;
    }
    if (!_0x272ba6 || typeof _0x272ba6.FileId != "string") {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "upload failed: missing FileId in response",
        },
        state: 0,
      });
      return;
    }
    let _0x1cd48d = _0x272ba6.FileId;
    if (_0x1cd48d.length === 0) {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "upload failed: FileId is empty",
        },
        state: 0,
      });
      return;
    }
    return (
      this._requestState$["next"]({
        error: { code: _0x859031.OK, message: "success" },
        state: 0,
      }),
      _0x1cd48d
    );
  }
  async _import(_0x3c226c, _0x316d13, _0x1ff4a6, _0x55feaa) {
    let _0x52a9e4 = {
        fileID: _0x3c226c,
        type: _0x1ff4a6,
        outputType: _0x316d13,
        options: _0x55feaa,
      },
      _0x295679 = await this._requestService["import"](_0x52a9e4);
    if (!_0x295679) {
      this._requestState$["next"]({
        error: { code: _0x859031.UNRECOGNIZED, message: "import error" },
        state: 1,
      });
      return;
    }
    if (_0x295679.error && _0x295679.error["code"] !== _0x859031.OK) {
      this._requestState$["next"]({ error: _0x295679.error, state: 1 });
      return;
    }
    let _0x5a9503 = _0x295679.taskID;
    if (_0x5a9503.length === 0) {
      this._requestState$["next"]({
        error: {
          code: _0x859031.UNRECOGNIZED,
          message: "Failed to get taskID from import response",
        },
        state: 1,
      });
      return;
    }
    return (
      this._requestState$["next"]({ error: _0x295679.error, state: 1 }),
      _0x5a9503
    );
  }
  async _signUrl(_0x327d8b) {
    let _0x413e24 = await this._requestService["signUrl"](_0x327d8b);
    if (!_0x413e24) {
      this._requestState$["next"]({
        error: { code: _0x859031.UNRECOGNIZED, message: "sign url error" },
        state: 4,
      });
      return;
    }
    if (_0x413e24.error && _0x413e24.error["code"] !== _0x859031.OK) {
      this._requestState$["next"]({ error: _0x413e24.error, state: 4 });
      return;
    }
    let _0x12fa19 = _0x5b7ac1(_0x413e24.url, this._getDownloadEndpointURL());
    if (_0x12fa19.length === 0) {
      this._requestState$["next"]({
        error: { code: _0x859031.UNRECOGNIZED, message: "sign url error" },
        state: 4,
      });
      return;
    }
    return (
      this._requestState$["next"]({ error: _0x413e24.error, state: 4 }),
      _0x12fa19
    );
  }
  _getDownloadEndpointURL() {
    let _0x3b7f0a = this._configService["getConfig"](O);
    return (
      (_0x3b7f0a == null ? undefined : _0x3b7f0a.downloadEndpointUrl) ??
      location.origin
    );
  }
};
Y = W([U(0, _0x1edc6e), U(1, _0x19fe99(_0x563613)), U(2, _0x19fe99(nt))], Y);
const st = { done: 0, count: 0 },
  X = _0x5aba0c("univer-pro.exchange-client.operate.service");
let Z = class extends _0x2e2b28 {
  constructor(
    _0x35bd65,
    _0x44a8ef,
    _0x557ffe,
    _0x2f9766,
    _0x443ea9,
    _0x347435,
  ) {
    (super(),
      (this._univerInstanceService = _0x35bd65),
      (this._messageService = _0x44a8ef),
      (this._localeService = _0x557ffe),
      (this._exchangeService = _0x2f9766),
      (this._uploadNotificationService = _0x443ea9),
      (this._logService = _0x347435),
      H(this, "_progress$", new _0x4eb785(st)),
      H(this, "progress$", this._progress$["asObservable"]()),
      H(this, "_totalUploadTaskCount", 0),
      H(this, "_doneUploadTaskCount", 0),
      H(this, "_isSelectingUnitImportFile", false),
      H(this, "_lastUnitImportContext", null),
      this.disposeWithMe(
        _0x162266(
          this._exchangeService["requestState$"].subscribe((_0x4d8a7e) => {
            var _0x1df0a4;
            ((_0x1df0a4 = _0x4d8a7e.error) == null
              ? undefined
              : _0x1df0a4.code) === _0x859031.OK
              ? this._addDoneTask(1)
              : this._showNetworkError(_0x4d8a7e.error);
          }),
        ),
      ));
  }
  interrupt() {
    (this._clearProgress(),
      this._uploadNotificationService["updateState"](2),
      this._exchangeService["interruptImportTask"]());
  }
  async importFileToUnitId(_0x50b9b5, _0x5251e0) {
    if (this._isSelectingUnitImportFile || this._uploadTaskNotDone()) {
      this._messageService["show"]({
        type: _0x5f049a.Warning,
        content: this._localeService["t"]("exchange-client.uploading"),
      });
      return;
    }
    let _0x500780;
    this._isSelectingUnitImportFile = true;
    try {
      _0x500780 = await B([_0x50b9b5]);
    } finally {
      this._isSelectingUnitImportFile = false;
    }
    if (_0x500780 && !this._fileTypeError(_0x500780, _0x50b9b5))
      return (
        (this._lastUnitImportContext = {
          type: _0x50b9b5,
          importer: _0x5251e0,
        }),
        this._importFileToUnitId(_0x500780[0], _0x50b9b5, _0x5251e0)
      );
  }
  async retryImportFileToUnitId() {
    let _0x3295a7 = this._lastUnitImportContext;
    if (_0x3295a7)
      return this.importFileToUnitId(_0x3295a7.type, _0x3295a7.importer);
  }
  async importFileToSnapshot(_0x2f92b4, _0x16a6a8) {
    if (this._uploadTaskNotDone()) {
      this._messageService["show"]({
        type: _0x5f049a.Warning,
        content: this._localeService["t"]("exchange-client.uploading"),
      });
      return;
    }
    let _0x22080e = await B([_0x2f92b4]);
    if (!_0x22080e || this._fileTypeError(_0x22080e, _0x2f92b4)) return;
    this._showUploadMessage(_0x5f049a.Info);
    let _0x42af9b = await _0x16a6a8(_0x22080e[0]);
    _0x42af9b &&
      (this._refreshUnit(_0x2f92b4, _0x42af9b),
      this._showUploadMessage(_0x5f049a.Success));
  }
  async importFileAsSnapshot(_0x266632, _0x571888) {
    if (this._uploadTaskNotDone()) {
      this._messageService["show"]({
        type: _0x5f049a.Warning,
        content: this._localeService["t"]("exchange-client.uploading"),
      });
      return;
    }
    let _0x55bef9 = await B([_0x266632]);
    if (!_0x55bef9 || this._fileTypeError(_0x55bef9, _0x266632)) return;
    this._showUploadMessage(_0x5f049a.Info);
    let _0x13e40f = await _0x571888(_0x55bef9[0]);
    if (_0x13e40f)
      return (this._showUploadMessage(_0x5f049a.Success), _0x13e40f);
  }
  async exportFile(_0x18f062, _0x1ca4bf, _0x122733) {
    this._showDownloadMessage(_0x5f049a.Info);
    let _0x2ba1f1 = await _0x18f062();
    _0x2ba1f1 &&
      (this._exchangeService["downloadFile"](
        _0x2ba1f1,
        _0x1ca4bf || _0x2ba1f1.name["split"](".").shift() || document.title,
        _0x122733,
      ),
      this._showDownloadMessage(_0x5f049a.Success));
  }
  registerLink(_0x5307b3) {
    this._getLinkByUnitId = _0x5307b3;
  }
  async _importFileToUnitId(_0x1a96e9, _0x1824c9, _0x4f27e3) {
    (this._uploadNotificationService["show"](),
      this._uploadNotificationService["updateState"](0),
      this._addTotalCount(4),
      this._addDoneTask(1));
    let _0x577d3b = await _0x4f27e3(_0x1a96e9);
    if (!_0x577d3b) {
      (this._clearProgress(),
        this._uploadNotificationService["updateState"](2));
      return;
    }
    let _0x1dd584 = {
      link: this._getLinkByUnitId(_0x577d3b, _0x1824c9),
      name: _0x1a96e9.name,
      type: _0x1824c9,
    };
    return (
      this._uploadNotificationService["pushLink"](_0x1dd584),
      this._completeProgress(),
      this._uploadNotificationService["updateState"](1),
      _0x577d3b
    );
  }
  _refreshUnit(_0x16d8a6, _0xc8a0bb) {
    let _0x391434 =
      this._univerInstanceService["getCurrentUnitOfType"](_0x16d8a6);
    if (!_0x391434)
      throw Error("No unit of type " + _0x16d8a6 + " is currently active.");
    this._univerInstanceService["disposeUnit"](_0x391434.getUnitId());
    let _0x4717e8 = this._univerInstanceService["createUnit"](
      _0x16d8a6,
      _0xc8a0bb,
    );
    this._univerInstanceService["focusUnit"](_0x4717e8.getUnitId());
  }
  _getLinkByUnitId(_0x62a7e4, _0x2ff080) {
    let _0x427105 = new URL(window.location["href"]);
    return (
      _0x427105.searchParams["set"]("unit", _0x62a7e4),
      _0x427105.searchParams["set"]("type", "" + _0x2ff080),
      _0x427105.toString()
    );
  }
  _showNetworkError(_0x53d009) {
    if (_0x53d009) {
      let { code: _0x115ba3 } = _0x53d009;
      switch (_0x115ba3) {
        case _0x859031.CONNECTOR_DATA_TOO_LARGE:
          this._messageService["show"]({
            type: _0x5f049a.Error,
            content: this._localeService["t"]("exchange-client.tooLarge"),
          });
          break;
        case _0x859031.INTERNAL_ERROR:
          this._messageService["show"]({
            type: _0x5f049a.Error,
            content: this._localeService["t"]("exchange-client.internalError"),
          });
          break;
        default:
          this._messageService["show"]({
            type: _0x5f049a.Error,
            content: this._localeService["t"]("exchange-client.networkError"),
          });
          break;
      }
      return null;
    }
    return (
      this._messageService["show"]({
        type: _0x5f049a.Error,
        content: this._localeService["t"]("exchange-client.networkError"),
      }),
      null
    );
  }
  _showDownloadMessage(_0x196c02) {
    let _0x1e87a7 = "";
    switch (_0x196c02) {
      case _0x5f049a.Success:
        _0x1e87a7 = this._localeService["t"]("exchange-client.downloadSuccess");
        break;
      case _0x5f049a.Info:
        _0x1e87a7 = this._localeService["t"]("exchange-client.downloading");
        break;
      default:
        break;
    }
    this._messageService["show"]({ type: _0x196c02, content: _0x1e87a7 });
  }
  _showUploadMessage(_0xef9bd3) {
    let _0x16c31d = "";
    switch (_0xef9bd3) {
      case _0x5f049a.Success:
        _0x16c31d = this._localeService["t"]("exchange-client.uploadSuccess");
        break;
      case _0x5f049a.Info:
        _0x16c31d = this._localeService["t"]("exchange-client.uploading");
        break;
      default:
        break;
    }
    this._messageService["show"]({ type: _0xef9bd3, content: _0x16c31d });
  }
  _emitProgress() {
    this._progress$["next"]({
      done: this._doneUploadTaskCount,
      count: this._totalUploadTaskCount,
    });
  }
  _addTotalCount(_0x2f6fab) {
    ((this._totalUploadTaskCount += _0x2f6fab), this._emitProgress());
  }
  _addDoneTask(_0x23002f) {
    ((this._doneUploadTaskCount += _0x23002f),
      (this._doneUploadTaskCount = Math.min(
        this._doneUploadTaskCount,
        this._totalUploadTaskCount,
      )),
      this._emitProgress());
  }
  _completeProgress() {
    ((this._doneUploadTaskCount = this._totalUploadTaskCount),
      this._emitProgress());
  }
  _clearProgress() {
    ((this._doneUploadTaskCount = 0),
      (this._totalUploadTaskCount = 0),
      this._emitProgress());
  }
  _fileTypeError(_0x38f1cf, _0x147b35) {
    let _0x174114 = _0x38f1cf[0],
      _0x10f05a = _0x174114.name;
    return ze(_0x174114, _0x147b35)
      ? false
      : (this._messageService["show"]({
          type: _0x5f049a.Error,
          content: this._localeService["t"](
            "exchange-client.fileTypeError",
            _0x10f05a,
          ),
        }),
        true);
  }
  _uploadTaskNotDone() {
    return (
      this._totalUploadTaskCount !== 0 &&
      this._doneUploadTaskCount !== this._totalUploadTaskCount
    );
  }
};
Z = W(
  [
    U(0, _0x19fe99(_0x4833cf)),
    U(1, _0x4228e2),
    U(2, _0x19fe99(_0x3e79b4)),
    U(3, _0x19fe99(J)),
    U(4, _0x19fe99(q)),
    U(5, _0x5b6b39),
  ],
  Z,
);
function ct(_0x46ecd0) {
  let {
    onClick: _0x3b73d0,
    children: _0x5a6be3,
    className: _0x15c010,
  } = _0x46ecd0;
  return _0x2d9de5(_0x20c004, {
    size: "small",
    variant: "text",
    className: _0xa12e7("univer-text-primary-600", _0x15c010),
    type: "button",
    onClick: _0x3b73d0,
    children: _0x5a6be3,
  });
}
function lt() {
  let _0x3331fa = _0x41f11e(X),
    _0x5f0f20 = _0x41f11e(_0x3e79b4);
  function _0x465e3e() {
    return _0x3331fa.retryImportFileToUnitId();
  }
  return _0x2d9de5(ct, {
    onClick: _0x465e3e,
    children: _0x5f0f20.t("exchange-client.uploadAgain"),
  });
}
function ut() {
  return _0x22c17a("div", {
    className: "univer-mt-5 univer-flex univer-flex-col",
    children: [
      _0x2d9de5("span", {
        className:
          "univer-mb-3 univer-py-0 univer-pl-2 univer-pr-4 univer-text-sm univer-text-gray-900 dark:!univer-text-gray-0",
        children: _0x41f11e(_0x3e79b4).t("exchange-client.interrupt"),
      }),
      _0x2d9de5(lt, {}),
    ],
  });
}
function dt(_0x5a0bca) {
  let { count: _0xac6769 } = _0x5a0bca;
  return _0x22c17a("div", {
    className:
      "univer-mt-3 univer-flex univer-items-center univer-justify-between univer-py-0 univer-pl-2 univer-pr-1",
    children: [
      _0x2d9de5("span", {
        className: "univer-text-sm univer-text-gray-500",
        children: _0x41f11e(_0x3e79b4).t(
          "exchange-client.uploadSuccessTip",
          "" + _0xac6769,
        ),
      }),
      _0x2d9de5(lt, {}),
    ],
  });
}
function ft() {
  let _0x384776 = _0x41f11e(X),
    _0x5b7ba4 = _0x41f11e(_0x3e79b4);
  function _0x1ad610() {
    _0x384776.interrupt();
  }
  return _0x2d9de5(ct, {
    onClick: _0x1ad610,
    children: _0x5b7ba4.t("exchange-client.cancel"),
  });
}
function pt() {
  let { count: _0x2bd04d, done: _0x5cf3b7 } = _0x342ab1(_0x41f11e(X).progress$),
    _0x29a35e = _0x2bd04d > 0 ? _0x5cf3b7 / _0x2bd04d : 0;
  return _0x2d9de5("div", {
    className:
      "univer-mx-0 univer-mb-3 univer-mt-4 univer-h-1.5 univer-w-[324px] univer-rounded-lg univer-bg-gray-200",
    children: _0x2d9de5("div", {
      className:
        "univer-h-1.5 univer-rounded-lg univer-bg-primary-600 univer-transition-[width] univer-duration-500",
      style: { width: Math.floor(_0x29a35e * 100) + "%" },
    }),
  });
}
function mt() {
  return _0x22c17a("div", {
    className: "univer-mt-5 univer-flex univer-flex-col",
    children: [
      _0x2d9de5("span", {
        className:
          "univer-pl-2 univer-pr-4 univer-text-sm univer-text-gray-900 dark:!univer-text-gray-0",
        children: _0x41f11e(_0x3e79b4).t("exchange-client.wait"),
      }),
      _0x2d9de5("div", {
        className: "univer-pl-2 univer-pr-4",
        children: _0x2d9de5(pt, {}),
      }),
      _0x2d9de5(ft, {}),
    ],
  });
}
const ht = {
  1: _0x2d9de5(_0x2f9260, { className: "univer-text-green-500" }),
  0: _0x2d9de5(_0x5d047b, { className: "univer-text-blue-500" }),
  2: _0x2d9de5(_0x1a1e19, { className: "univer-text-red-500" }),
};
function gt() {
  let _0x5f219f = _0x41f11e(q),
    _0x22cdf9 = _0x41f11e(_0x3e79b4),
    _0x56ff17 = _0x342ab1(_0x5f219f.state$, 0),
    _0x24206a = _0x342ab1(_0x5f219f.visible$, false),
    _0x393ba2 = _0x342ab1(_0x5f219f.list$, []);
  function _0x2c12a5() {
    _0x5f219f.hide();
  }
  function _0x4f5db6(_0x484395) {
    switch (_0x484395) {
      case 1:
        return _0x22cdf9.t("exchange-client.uploadSuccess");
      case 0:
        return _0x22cdf9.t("exchange-client.uploading");
      case 2:
        return _0x22cdf9.t("exchange-client.unknownMistake");
      default:
        return "";
    }
  }
  return (
    _0x24206a &&
    _0x22c17a("div", {
      className:
        "univer-fixed\x20univer-bottom-12\x20univer-right-3\x20univer-z-[1000]\x20univer-box-border\x20univer-flex\x20univer-w-[372px]\x20univer-flex-col\x20univer-rounded-md\x20univer-bg-gray-0\x20univer-px-3\x20univer-pb-4\x20univer-pt-5\x20univer-shadow-md",
      children: [
        _0x22c17a("div", {
          className:
            "univer-flex univer-items-center univer-justify-between univer-py-0 univer-pl-1.5 univer-pr-2",
          children: [
            _0x22c17a("span", {
              className: "univer-flex univer-items-center",
              children: [
                _0x2d9de5("span", {
                  className:
                    "univer-flex\x20univer-size-6\x20univer-shrink-0\x20univer-items-center\x20univer-justify-center\x20univer-text-2xl",
                  children: ht[_0x56ff17],
                }),
                _0x2d9de5("span", {
                  className:
                    "univer-ml-1.5\x20univer-font-semibold\x20univer-text-gray-900\x20dark:!univer-text-gray-0",
                  children: _0x4f5db6(_0x56ff17),
                }),
              ],
            }),
            _0x2d9de5("span", {
              className:
                "univer-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded univer-border-none univer-bg-transparent univer-text-gray-500 univer-transition-colors hover:univer-bg-gray-200 dark:!univer-bg-gray-600",
              onClick: _0x2c12a5,
              children: _0x2d9de5(_0x581338, {}),
            }),
          ],
        }),
        _0x22c17a("div", {
          children: [
            _0x56ff17 === 0 && _0x2d9de5(mt, {}),
            _0x56ff17 === 2 && _0x2d9de5(ut, {}),
            _0x393ba2.length > 0 && _0x2d9de5(ot, { list: _0x393ba2 }),
            _0x56ff17 === 1 && _0x2d9de5(dt, { count: _0x393ba2.length }),
          ],
        }),
      ],
    })
  );
}
let Q = class extends _0x2e2b28 {
  constructor(_0x410cd8, _0x3c7d5c) {
    (super(),
      (this._injector = _0x410cd8),
      (this._uiPartsService = _0x3c7d5c),
      this._registerUIParts());
  }
  _registerUIParts() {
    this.disposeWithMe(
      this._uiPartsService["registerComponent"](_0x4fa0d4.CONTENT, () =>
        _0xf86d49(gt, this._injector),
      ),
    );
  }
};
Q = W([U(0, _0x19fe99(_0x5dcc2e)), U(1, _0x2487e2)], Q);
let $ = class extends _0x1f9810 {
  constructor(_0x4c0276 = k, _0x4e9dd2, _0x55216e) {
    (super(),
      (this._config = _0x4c0276),
      (this._injector = _0x4e9dd2),
      (this._configService = _0x55216e));
    let { ..._0x1a3164 } = _0x5d32b9({}, k, this._config);
    this._configService["setConfig"](O, _0x1a3164);
  }
  onStarting() {
    _0x52ee6a(this._injector, [
      [K],
      [Q],
      [X, { useClass: Z }],
      [J, { useClass: Y }],
      [nt, { useClass: G }],
      [q, { useClass: at }],
    ]);
  }
  onReady() {
    _0x3d4e0f(this._injector, [[K], [Q], [X]]);
  }
};
(H($, "pluginName", "UNIVER_EXCHANGE_CLIENT_PLUGIN"),
  H($, "packageName", Pe),
  H($, "version", Fe),
  ($ = W(
    [
      _0x1cdb2c(_0xa2aefb, _0x20807a),
      U(1, _0x19fe99(_0x5dcc2e)),
      U(2, _0x1edc6e),
    ],
    $,
  )));
function _t(_0xe87c24, _0x2215c7) {
  let _0x21fc9b = _0xe87c24.get(_0x4833cf).getCurrentUnitOfType(_0x2215c7);
  return !_0x21fc9b || !_0xe87c24.has(_0x45998e) || !_0xe87c24.has(_0x33e881)
    ? false
    : _0xe87c24.get(_0x45998e).isUnitLoadedFromServer(_0x21fc9b);
}
function vt(_0x4c70d9) {
  let _0x556fbc = _0x4c70d9.workbook;
  if (!_0x556fbc) return null;
  let _0x45112a = {};
  _0x556fbc.sheets &&
    Object.keys(_0x556fbc.sheets).forEach((_0x44b76a) => {
      let _0x557d56 = _0x556fbc.sheets[_0x44b76a];
      _0x45112a[_0x44b76a] = {
        ..._0x557d56,
        originalMeta: _0x22a2ad(_0x46232f.decode(_0x557d56.originalMeta)),
      };
    });
  let _0x4d31b5 = _0x22a2ad(_0x46232f.decode(_0x556fbc.originalMeta));
  return {
    ..._0x4c70d9,
    workbook: { ..._0x556fbc, originalMeta: _0x4d31b5, sheets: _0x45112a },
    doc: {},
    slide: undefined,
    board: undefined,
    pdf: undefined,
  };
}
function yt(_0x2cef59) {
  let _0x5a0d19 = {};
  return (
    _0x2cef59.forEach((_0x58e7b4) => {
      _0x5a0d19[_0x58e7b4.id] = {
        ..._0x58e7b4,
        data: _0x22a2ad(_0x46232f.decode(_0x58e7b4.data)),
      };
    }),
    _0x5a0d19
  );
}
var bt = class {
  constructor() {
    H(this, "_sheetBlockCache", new Map());
  }
  getUnitOnRev() {
    return Promise.resolve({
      snapshot: {
        unitID: "",
        type: _0x488172.UNIVER_SHEET,
        rev: 0,
        workbook: undefined,
        doc: undefined,
        slide: undefined,
        board: undefined,
      },
      changesets: [],
      error: { code: _0x859031.OK, message: "" },
    });
  }
  getSheetBlock(_0x4a9e30, _0x4fd1f0) {
    let _0x553909 = this._sheetBlockCache["get"](_0x4fd1f0.blockID);
    return Promise.resolve({
      block: _0x553909,
      error: { code: _0x859031.OK, message: "" },
    });
  }
  getDeserializedSheetBlock(_0x4445af, _0x2c2017) {
    let _0x52afbc = this._sheetBlockCache["get"](_0x2c2017.blockID);
    return Promise.resolve({
      block:
        _0x52afbc === undefined
          ? undefined
          : {
              ..._0x52afbc,
              data: JSON.parse(_0x46232f.decode(_0x52afbc.data)),
            },
      error: { code: _0x859031.OK, message: "" },
    });
  }
  fetchMissingChangesets() {
    return Promise.resolve({
      changesets: [],
      error: { code: _0x859031.OK, message: "" },
    });
  }
  getResourcesRequest() {
    return Promise.resolve({
      resources: {},
      error: { code: _0x859031.OK, message: "" },
    });
  }
  saveSnapshot() {
    return Promise.resolve({ error: { code: _0x859031.OK, message: "" } });
  }
  updateSnapshot() {
    return Promise.resolve({ error: { code: _0x859031.OK, message: "" } });
  }
  saveSheetBlock(_0xabc6d0, _0x1ee981) {
    let { block: _0x2d234f } = _0x1ee981;
    return _0x2d234f
      ? (this._sheetBlockCache["set"](_0x2d234f.id, _0x2d234f),
        Promise.resolve({
          error: { code: _0x859031.OK, message: "" },
          blockID: _0x2d234f.id,
        }))
      : Promise.resolve({
          error: { code: _0x859031.UNDEFINED, message: "block is required" },
          blockID: "",
        });
  }
  saveChangeset() {
    return Promise.resolve({
      error: { code: _0x859031.OK, message: "" },
      concurrent: [],
    });
  }
  copyFileMeta() {
    return Promise.resolve({ error: undefined, fileMetaId: "" });
  }
  getLatestCsReqIdBySid() {
    return Promise.resolve({ error: undefined, latestReqID: 0 });
  }
};
export {
  bt as ClientSnapshotServerService,
  rt as EXPORT_FORMAT_DIALOG,
  tt as ExchangeBaseExportMode,
  et as ExchangeBaseFormulaPolicy,
  $e as ExchangeBaseImportMode,
  Qe as ExchangeDocType,
  Ze as ExchangeFormat,
  X as IExchangeOperateService,
  J as IExchangeService,
  Xe as ImportOutputType,
  $ as UniverExchangeClientPlugin,
  _t as isCurrentUnitLoadedFromServer,
  yt as transformSheetBlockMetaToString,
  vt as transformWorkbookSnapshotMetaToString,
};
