import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { ig, sg } from "./engine-shape-connector-route-points.js";
import { ag } from "./engine-shape-free-connector-point-info.js";
import { og } from "./engine-shape-connector-endpoint.js";
import { rg } from "./engine-shape-shape-connection-point.js";
import { K } from "./engine-shape-connector-shape.js";
let hg = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466143) {
    this._shapeAdapterRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466143;
  }
  getConnector(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466145) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146 = this._getShapeAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466145),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466147 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146 && this._getConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466146);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466147 ? this._getConnectorSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466147) : null;
  }
  bindStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466152) {
    return this._updateEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466151, true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466152);
  }
  bindEnd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466156) {
    return this._updateEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466155, false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466156);
  }
  unbindStart(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466159) {
    return this._updateEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466159, true);
  }
  unbindEnd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466161) {
    return this._updateEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466161, false);
  }
  setStartPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466164) {
    return this._updateEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466163, true, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466164);
  }
  setEndPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466168) {
    return this._updateEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466167, false, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466168);
  }
  setRoutePoints(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466172) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173 = this._getShapeAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466171),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173 && this._getConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466175 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174 && this._getConnectorSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466175) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466176 = sg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466175.start['point'], ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466175.end['point']], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466174.shapeData["relation"]);
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466176 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466173.updateShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466176);
  }
  setStartArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466185) {
    return this._setArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466183, true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466185);
  }
  setEndArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466191) {
    return this._setArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466189, false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466191);
  }
  _updateEndpoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466198) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466200;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466201 = this._getShapeAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466195),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466202 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466201 && this._getConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466201),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466202 && this._getConnectorSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466202);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466201 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466202 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466204 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466202.shapeData,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113 = {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466204.relation ?? {})
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113.from = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197 : delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113.from : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113.to = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197 : delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113.to;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466205 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197 ? this._resolveBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466201) : ag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203.end["point"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203.start["point"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466198 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203.start["point"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203.end["point"])),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466206 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466199 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466204.relation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466199.to : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466200 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466204.relation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466200.from,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466207 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466206 ? this._resolveBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466201) : ag((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466205 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466205.point) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203.start["point"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203.end["point"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203.end["point"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466203.start["point"]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466205 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466207) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208 = og(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466205 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466196 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466207 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466205, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB113);
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466201.updateShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466208);
  }
  _getConnectorSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466223) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228 = ig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466223);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228.length < 2) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466229 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466223.shapeData;
    return {
      'start': {
        'point': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228[0]
        },
        'binding': Tools.deepClone(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466229.relation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466224.from) ?? null)
      },
      'end': {
        'point': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228.length - 1]
        },
        'binding': Tools.deepClone(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466225 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466229.relation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466225.to) ?? null)
      },
      'routePoints': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228.slice(1, -1).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597
      })),
      'startArrow': this._getArrow((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466229.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226.startArrow),
      'endArrow': this._getArrow((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466229.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227.endArrow)
    };
  }
  _resolveBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466239) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466240 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466239.getShape({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466237,
      'shapeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466238.shapeId
    });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466240 ? rg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466238.cxnIndex) : null;
  }
  _setArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466248) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466249 = this._getShapeAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466245),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466250 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466249 && this._getConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466245, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466249);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466249 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466250) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466251 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466250.shapeData),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115 = {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466251.ln ?? {})
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116 = {
        'type': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466247,
        'size': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466248
      };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466246 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115.startArrow = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116 : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115.endArrow = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466249.updateShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466245, {
      'shapeData': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466251,
        'ln': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115
      }
    });
  }
  _getShapeAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466259) {
    return this._shapeAdapterRegistry['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466259.hostType);
  }
  _getConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466262) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466263 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466262.getShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466261);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466263 && K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466263.shapeType) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466263 : null;
  }
  _getArrow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466267) {
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466267 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466267.type) === undefined ? null : {
      'type': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466267.type,
      'size': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466267.size
    };
  }
};
export { hg as ConnectorShapeHostAdapter };
