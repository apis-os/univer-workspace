import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Ff, If, Lf, Rf } from "./pdfs-pdf-add-annotation-action.js";
import { zf } from "./pdfs-pdf-editor-managed-resource-source.js";
import { be, ye } from "./pdfs-pdf-coordinate-origin.js";
function Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466478) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479 = Wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466477, 'managed\x20resource\x20descriptor', new WeakSet());
  if (!tp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479)) throw TypeError("Managed resource descriptor must be a plain object.");
  Kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479, Ff, "managed resource descriptor");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479.asset;
  if (!tp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480)) throw TypeError('Managed\x20resource\x20descriptor\x20asset\x20must\x20be\x20a\x20plain\x20object.');
  if (Kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480, If, 'managed\x20image\x20asset'), typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id != "string" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id["length"] === 0) throw TypeError("Managed image asset id must be a non-empty string.");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466478 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466478 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id) throw Error("Managed resource asset id " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id + '\x20does\x20not\x20match\x20expected\x20asset\x20id\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466478 + '.');
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.type !== "image") throw TypeError("Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id + " must use PdfAssetType.IMAGE.");
  if (qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.width, 'Managed\x20image\x20asset\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id + " width"), qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.height, "Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id + " height"), Uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id), !Vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479.source, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479.imageSourceType)) throw TypeError("Invalid durable managed resource source for asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id + '.');
  if (!Object.values(ImageSourceType).includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479.imageSourceType)) throw TypeError("Managed resource " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466480.id + '\x20has\x20an\x20unsupported\x20image\x20source\x20type.');
  return Jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479, 'mimeType', "Managed resource mimeType"), Jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479, "fileName", 'Managed\x20resource\x20fileName'), Zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479, "byteLength", 'Managed\x20resource\x20byteLength'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466479;
}
function Vf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466486) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485 != "string") return false;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466486 === ImageSourceType.UUID) return zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466486 === ImageSourceType.URL) try {
    let var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484 = new URL(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485);
    return var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484.protocol === "http:" || var_L0_core_endo_url_pure_O1_zalloc_nothrow_sig9484.protocol === "https:";
  } catch {
    return false;
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466486 === ImageSourceType.BASE64) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB53 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485.replace(/\s/g, '');
    return /^data:[^,]*;base64,[A-Za-z0-9+/]+={0,2}$/i.test(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB53) ? true : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB53.length > 0 && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB53.length % 4 == 0 && /^[A-Za-z0-9+/]+={0,2}$/["test"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB53);
  }
  return false;
}
function Hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466490) {
  try {
    return Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466490), true;
  } catch {
    return false;
  }
}
function Uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255 of Lf) Jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255, "Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + '\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255);
  if (Zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, 'byteLength', 'Managed\x20image\x20asset\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " byteLength"), Xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, "bitsPerComponent", 'Managed\x20image\x20asset\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " bitsPerComponent"), Xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, "sMaskInData", 'Managed\x20image\x20asset\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " sMaskInData"), Yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, "interpolate", "Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " interpolate"), Qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, "sourceKind", ye, 'Managed\x20image\x20asset\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " sourceKind"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493.xObjectSubtype !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493.xObjectSubtype !== 'image') throw TypeError('Managed\x20image\x20asset\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " xObjectSubtype must be PdfXObjectSubtype.IMAGE when present.");
  if (Qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, "maskKind", be, "Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " maskKind"), fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, 'decode', 'Managed\x20image\x20asset\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " decode"), fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, "colorKeyMask", "Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + '\x20colorKeyMask'), fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, "matte", "Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " matte"), ep(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493, 'filters', "Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + '\x20filters'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493.source !== undefined && !tp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493.source)) throw TypeError("Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " source must be a plain JSON object.");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493.metadata !== undefined && !tp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466493.metadata)) throw TypeError("Managed image asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466494 + " metadata must be a plain JSON object.");
}
function Wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466499) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497 === null || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497 == "string" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497 == 'boolean') return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497 == "number") {
    if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497)) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498 + " contains a non-finite number.");
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497;
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497 === undefined) return Rf;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497 != "object") throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498 + " contains a non-JSON-safe " + typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497 + " value.");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466499.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497)) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498 + " contains a cycle.");
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466499.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497);
  try {
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497)) return Gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 = Wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498 + '[' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417 + ']', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466499);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 === Rf ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418;
    });
    if (!tp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497)) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498 + " contains a non-plain runtime or binary object.");
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20 = {};
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 of Reflect.ownKeys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497)) {
      if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 == "symbol") throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498 + " contains a symbol key.");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422);
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.enumerable) || !("value" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146)) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498 + '.' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 + '\x20must\x20be\x20an\x20enumerable\x20data\x20property.');
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = Wf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.value, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466498 + '.' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466499);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 !== Rf && Object.defineProperty(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422, {
        'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147,
        'enumerable': true,
        'configurable': true,
        'writable': true
      });
    }
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20;
  } finally {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466499.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466497);
  }
}
function Gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466504) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 of Reflect.ownKeys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466503)) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 === "length") continue;
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 == "symbol" || !/^(0|[1-9]\d*)$/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256)) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466504 + " contains a non-JSON array property.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256);
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423.enumerable) || !("value" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423)) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466504 + '[' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 + "] must be an enumerable data property.");
  }
}
function Kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 of Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466507)) if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466508.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257)) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466509 + " contains unsupported field " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 + '.');
}
function qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466514) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466513 != "number" || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466513) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466513 <= 0) throw RangeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466514 + " must be a positive finite number.");
}
function Jf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466518, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466519) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466517[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466518] !== undefined && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466517[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466518] != "string") throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466519 + '\x20must\x20be\x20a\x20string\x20when\x20present.');
}
function Yf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466523, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466525) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466523[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466524] !== undefined && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466523[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466524] != "boolean") throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466525 + " must be a boolean when present.");
}
function Xf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466531) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466532 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466529[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466530];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466532 !== undefined && (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466532 != "number" || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466532))) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466531 + '\x20must\x20be\x20a\x20finite\x20number\x20when\x20present.');
}
function Zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466538, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466539) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466540 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466537[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466538];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466540 !== undefined && (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466540 != "number" || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466540) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466540 < 0 || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466540))) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466539 + " must be a finite non-negative integer when present.");
}
function Qf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466548) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466549 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466545[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466546];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466549 !== undefined && !Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466547).includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466549)) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466548 + " is invalid.");
}
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466557) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466555[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466556];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466558 !== undefined && (!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466558) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466558.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 != 'number' || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258)))) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466557 + " must be an array of finite numbers when present.");
}
function ep(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466565) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466566 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466563[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466564];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466566 !== undefined && (!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466566) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466566.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 != "string"))) throw TypeError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466565 + " must be an array of strings when present.");
}
function tp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466571) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466571 != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466571 || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466571)) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466572 = Object.getPrototypeOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466571);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466572 === Object.prototype || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466572 === null;
}
export { Bf as normalizePdfEditorManagedImageResource, Hf as isPdfEditorManagedImageResource };
