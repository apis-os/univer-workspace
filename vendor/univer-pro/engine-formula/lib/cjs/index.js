Object.defineProperty(exports, Symbol.toStringTag, { value: `Module` });
let e = require("@univerjs/core"),
  t = require("@univerjs/engine-formula"),
  n = require("@univerjs/rpc"),
  r = require("@univerjs-pro/license");
function i(e) {
  "@babel/helpers - typeof";
  return (
    (i =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    i(e)
  );
}
function a(e, t) {
  if (i(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (i(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function o(e) {
  var t = a(e, `string`);
  return i(t) == `symbol` ? t : t + ``;
}
function s(e, t, n) {
  return (
    (t = o(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
const c = `UNIVER_EXTERNAL_REFERENCE_PLUGIN`;
function l() {
  return { schemaVersion: 1, references: {} };
}
function u(e) {
  return /^[1-9]\d*$/.test(e.trim());
}
function d(e) {
  return (0, t.normalizeFormulaUnitName)(e);
}
function f(t) {
  return !t ||
    typeof t != `object` ||
    !(`qualifier` in t) ||
    !(`sourceUnitId` in t) ||
    !(`sourceUnitType` in t)
    ? !1
    : typeof t.qualifier == `string` &&
        t.qualifier.trim().length > 0 &&
        !u(t.qualifier) &&
        typeof t.sourceUnitId == `string` &&
        t.sourceUnitId.length > 0 &&
        (t.sourceUnitType === e.UniverInstanceType.UNIVER_SHEET ||
          t.sourceUnitType === e.UniverInstanceType.UNIVER_BASE);
}
var p = class extends e.Disposable {
  constructor(...e) {
    (super(...e),
      s(this, `_resources`, new Map()),
      s(this, `_rawResources`, new Map()),
      s(this, `_loadErrors`, new Map()),
      s(this, `_revisions`, new Map()));
  }
  load(t, n) {
    return !n || typeof n != `object`
      ? (this._preserveInvalid(t, n, `invalid-resource`), !1)
      : !(`schemaVersion` in n) || n.schemaVersion !== 1
        ? (this._preserveInvalid(t, n, `unsupported-version`), !1)
        : m(n)
          ? (this._resources.set(t, e.Tools.deepClone(n)),
            this._rawResources.delete(t),
            this._loadErrors.delete(t),
            this._bumpRevision(t),
            !0)
          : (this._preserveInvalid(t, n, `invalid-resource`), !1);
  }
  set(t, n) {
    return m(n)
      ? (this._resources.set(t, e.Tools.deepClone(n)),
        this._rawResources.delete(t),
        this._loadErrors.delete(t),
        this._bumpRevision(t),
        !0)
      : !1;
  }
  serialize(t) {
    let n = this._resources.get(t);
    return n
      ? e.Tools.deepClone(n)
      : this._rawResources.has(t)
        ? e.Tools.deepClone(this._rawResources.get(t))
        : l();
  }
  get(t) {
    let n = this._resources.get(t);
    return n ? e.Tools.deepClone(n) : void 0;
  }
  getAll() {
    return Object.fromEntries(
      Array.from(this._resources.entries(), ([t, n]) => [
        t,
        e.Tools.deepClone(n),
      ]),
    );
  }
  getLoadError(e) {
    return this._loadErrors.get(e);
  }
  getRevision(e) {
    return this._revisions.get(e) ?? 0;
  }
  resolveBinding(t, n) {
    var r;
    if (u(n)) return { status: `missing` };
    let i = Object.entries(
        ((r = this._resources.get(t)) == null ? void 0 : r.references) ?? {},
      ),
      a = n.toLowerCase(),
      o = i.filter(([, e]) => e.qualifier.toLowerCase() === a),
      s = o.length > 0 ? o : i.filter(([, e]) => d(e.qualifier) === d(n));
    if (s.length === 0) return { status: `missing` };
    if (s.length > 1) return { status: `ambiguous` };
    let [c, l] = s[0];
    return {
      status: `resolved`,
      referenceId: c,
      reference: e.Tools.deepClone(l),
    };
  }
  remove(e) {
    (this._resources.delete(e),
      this._rawResources.delete(e),
      this._loadErrors.delete(e),
      this._bumpRevision(e));
  }
  dispose() {
    (super.dispose(),
      this._resources.clear(),
      this._rawResources.clear(),
      this._loadErrors.clear(),
      this._revisions.clear());
  }
  _preserveInvalid(t, n, r) {
    (this._resources.delete(t),
      this._rawResources.set(t, e.Tools.deepClone(n)),
      this._loadErrors.set(t, r),
      this._bumpRevision(t));
  }
  _bumpRevision(e) {
    this._revisions.set(e, this.getRevision(e) + 1);
  }
};
function m(e) {
  if (
    !e ||
    typeof e != `object` ||
    !(`schemaVersion` in e) ||
    !(`references` in e) ||
    e.schemaVersion !== 1 ||
    typeof e.references != `object` ||
    !e.references ||
    Array.isArray(e.references)
  )
    return !1;
  let t = new Set();
  for (let [n, r] of Object.entries(e.references)) {
    if (!n || !f(r)) return !1;
    let e = r.qualifier.trim();
    if (!e || u(e)) return !1;
    let i = d(e);
    if (t.has(i)) return !1;
    t.add(i);
  }
  return !0;
}
const h = {
    id: `formula.mutation.set-host-external-reference`,
    type: e.CommandType.MUTATION,
    handler: (e, t) => (t ? e.get(p).set(t.unitId, t.resource) : !1),
  },
  g = {
    id: `formula.command.upsert-host-external-reference`,
    type: e.CommandType.COMMAND,
    handler: (e, t) =>
      b(
        e,
        t == null ? void 0 : t.unitId,
        t
          ? [
              {
                qualifier: t.qualifier,
                sourceUnitId: t.sourceUnitId,
                sourceUnitType: t.sourceUnitType,
                referenceId: t.referenceId,
              },
            ]
          : [],
      ),
  },
  _ = {
    id: `formula.command.upsert-host-external-references`,
    type: e.CommandType.COMMAND,
    handler: (e, t) =>
      b(
        e,
        t == null ? void 0 : t.unitId,
        (t == null ? void 0 : t.references) ?? [],
      ),
  },
  v = {
    id: `formula.command.remove-host-external-reference`,
    type: e.CommandType.COMMAND,
    handler: (t, n) => {
      if (!(n != null && n.unitId) || (!n.referenceId && !n.qualifier))
        return !1;
      let r = t.get(p);
      if (r.getLoadError(n.unitId)) return !1;
      let i = r.get(n.unitId) ?? l(),
        a = n.referenceId ?? y(r, n.unitId, n.qualifier);
      if (!a || !i.references[a]) return !1;
      let o = e.Tools.deepClone(i);
      return (delete o.references[a], w(t, n.unitId, i, o));
    },
  };
function y(e, t, n) {
  let r = e.resolveBinding(t, n);
  return r.status === `resolved` ? r.referenceId : void 0;
}
function b(t, n, r) {
  if (!n) return !1;
  let i = x(t, n, r);
  return i
    ? !i.redoMutation || !i.undoMutation
      ? !0
      : t
            .get(e.ICommandService)
            .syncExecuteCommand(i.redoMutation.id, i.redoMutation.params)
        ? (t
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: n,
              undoMutations: [i.undoMutation],
              redoMutations: [i.redoMutation],
            }),
          !0)
        : !1
    : !1;
}
function x(t, n, r) {
  if (!n) return null;
  let i = S(n, r);
  if (!i) return null;
  if (i.size === 0) return {};
  let a = t.get(p);
  if (a.getLoadError(n)) return null;
  let o = a.get(n) ?? l(),
    s = e.Tools.deepClone(o),
    c = !1;
  for (let e of i.values()) {
    let t = C(a, n, s, e);
    if (t == null) return null;
    c ||= t;
  }
  return c
    ? {
        redoMutation: { id: h.id, params: { unitId: n, resource: s } },
        undoMutation: { id: h.id, params: { unitId: n, resource: o } },
      }
    : {};
}
function S(e, t) {
  let n = new Map();
  for (let i of t) {
    var r;
    let t = {
      qualifier: (r = i.qualifier) == null ? void 0 : r.trim(),
      sourceUnitId: i.sourceUnitId,
      sourceUnitType: i.sourceUnitType,
      referenceId: i.referenceId,
    };
    if (!f(t) || t.sourceUnitId === e) return null;
    let a = d(t.qualifier),
      o = n.get(a);
    if (
      o &&
      (o.sourceUnitId !== t.sourceUnitId ||
        o.sourceUnitType !== t.sourceUnitType ||
        o.referenceId !== t.referenceId)
    )
      return null;
    n.set(a, t);
  }
  return n;
}
function C(t, n, r, i) {
  let a = t.resolveBinding(n, i.qualifier);
  if (
    a.status === `ambiguous` ||
    (a.status === `resolved` &&
      i.referenceId != null &&
      i.referenceId !== a.referenceId)
  )
    return null;
  if (
    a.status === `resolved` &&
    a.reference.sourceUnitId === i.sourceUnitId &&
    a.reference.sourceUnitType === i.sourceUnitType &&
    a.reference.qualifier === i.qualifier
  )
    return !1;
  let o =
    i.referenceId ??
    (a.status === `resolved` ? a.referenceId : (0, e.generateRandomId)());
  return (
    (r.references[o] = {
      qualifier: i.qualifier,
      sourceUnitId: i.sourceUnitId,
      sourceUnitType: i.sourceUnitType,
    }),
    !0
  );
}
function w(t, n, r, i) {
  return t
    .get(e.ICommandService)
    .syncExecuteCommand(h.id, { unitId: n, resource: i })
    ? (t
        .get(e.IUndoRedoService)
        .pushUndoRedo({
          unitID: n,
          undoMutations: [{ id: h.id, params: { unitId: n, resource: r } }],
          redoMutations: [{ id: h.id, params: { unitId: n, resource: i } }],
        }),
      !0)
    : !1;
}
var T = class extends e.Disposable {
  constructor(...e) {
    (super(...e), s(this, `_providers`, new Set()));
  }
  registerProvider(t) {
    return (
      this._providers.add(t),
      (0, e.toDisposable)(() => this._providers.delete(t))
    );
  }
  collectMutations(e) {
    return Array.from(this._providers, (t) => t.collectMutations(e)).flat();
  }
  dispose() {
    (this._providers.clear(), super.dispose());
  }
};
const ee = {
    id: `formula.command.persist-last-values`,
    type: e.CommandType.COMMAND,
    handler: (t, n) => {
      let r = n == null ? void 0 : n.sessionId;
      if (!Number.isInteger(r) || r == null || r < 1) return !1;
      let i = t.get(e.ICommandService),
        a = t.get(T).collectMutations(r),
        o = !0;
      for (let e of a) i.syncExecuteCommand(e.id, e.params) || (o = !1);
      return o;
    },
  },
  te = `SHEET_EXTERNAL_DATA_PLUGIN`;
function ne() {
  return { schemaVersion: 1, links: [] };
}
function E(e, t) {
  return `external:${encodeURIComponent(e)}:${t}`;
}
var D = class extends e.Disposable {
  constructor(...e) {
    (super(...e),
      s(this, `_resources`, new Map()),
      s(this, `_loadErrors`, new Map()));
  }
  load(e, t) {
    if (!t || typeof t != `object`)
      return (this._loadErrors.set(e, `invalid-resource`), !1);
    let n = t;
    return n.schemaVersion === 1
      ? !Array.isArray(n.links) || !n.links.every(re)
        ? (this._loadErrors.set(e, `invalid-resource`), !1)
        : (this._resources.set(e, n), this._loadErrors.delete(e), !0)
      : (this._loadErrors.set(e, `unsupported-version`), !1);
  }
  set(e, t) {
    return this.load(e, t);
  }
  serialize(e) {
    return this._resources.get(e) ?? ne();
  }
  get(e) {
    return this._resources.get(e);
  }
  getLoadError(e) {
    return this._loadErrors.get(e);
  }
  resolveBinding(e, t) {
    var n;
    let r = ((n = this._resources.get(e)) == null ? void 0 : n.links) ?? [],
      i = /^[1-9]\d*$/.test(t) ? Number(t) : void 0,
      a = t.toLowerCase(),
      o = r.filter((e) =>
        i == null
          ? e.name.toLowerCase() === a || e.target.name.toLowerCase() === a
          : e.slot === i,
      );
    return o.length === 0
      ? { status: `missing` }
      : o.length > 1
        ? { status: `ambiguous` }
        : { status: `resolved`, link: o[0] };
  }
  renameLiveTarget(e, t, n) {
    let r = [];
    for (let [i, a] of this._resources)
      for (let o of a.links)
        (o.target.liveUnitId === e ||
          o.target.name.toLowerCase() === t.toLowerCase()) &&
          (o.name.toLowerCase() === t.toLowerCase() && (o.name = n),
          (o.target.name = n),
          r.push({ hostUnitId: i, slot: o.slot }));
    return r;
  }
  remove(e) {
    (this._resources.delete(e), this._loadErrors.delete(e));
  }
  dispose() {
    (super.dispose(), this._resources.clear(), this._loadErrors.clear());
  }
};
function re(e) {
  if (!e || typeof e != `object`) return !1;
  let t = e;
  return (
    Number.isInteger(t.slot) &&
    Number(t.slot) > 0 &&
    typeof t.name == `string` &&
    !!t.target &&
    typeof t.target.name == `string` &&
    Array.isArray(t.sheetNames) &&
    Array.isArray(t.definedNames) &&
    Array.isArray(t.tables)
  );
}
function O(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function k(e, t, n, r) {
  var i = arguments.length,
    a =
      i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    o;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    a = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
  return (i > 3 && a && Object.defineProperty(t, n, a), a);
}
let A = class {
  constructor(e) {
    ((this._externalReferenceModel = e),
      s(this, `id`, `ooxml-external-cache`),
      s(this, `priority`, -100));
  }
  canRead(e) {
    var t;
    let n = this._externalReferenceModel.resolveBinding(
      e.hostUnitId,
      String(e.bindingSlot),
    );
    return (
      n.status === `resolved` &&
      ((t = n.link.cache) == null ? void 0 : t.complete) === !0 &&
      (e.requireFresh === !1 || n.link.cache.freshness === `fresh`)
    );
  }
  async readData(e) {
    var t;
    let n = this._externalReferenceModel.resolveBinding(
      e.hostUnitId,
      String(e.bindingSlot),
    );
    if (
      n.status !== `resolved` ||
      ((t = n.link.cache) == null ? void 0 : t.complete) !== !0 ||
      (e.requireFresh !== !1 && n.link.cache.freshness !== `fresh`)
    )
      return;
    let r = n.link.cache,
      i = [];
    for (let t of e.ranges) {
      let e = r.sheets.find(
        (e) =>
          (t.sheetId && e.sheetId === t.sheetId) ||
          (t.sheetName && e.name.toLowerCase() === t.sheetName.toLowerCase()),
      );
      if (!e || (t.range && !ie(t.range, e.coverage))) continue;
      let n = t.range ? [t.range] : e.coverage;
      i.push({
        name: e.name,
        sheetId: e.sheetId ?? e.name,
        rowCount: e.rowCount ?? ae(n, `endRow`) + 1,
        columnCount: e.columnCount ?? ae(n, `endColumn`) + 1,
        coverage: n,
        cells: e.cells.map((e) => ({
          row: e.row,
          column: e.column,
          cell: { v: e.value, t: e.valueType ?? oe(e.value) },
        })),
      });
    }
    if (i.length !== 0)
      return {
        requestId: e.requestId,
        calculationId: e.calculationId,
        source: `ooxml-cache`,
        freshness: r.freshness,
        revision: r.revision,
        sheets: i,
      };
  }
};
A = k([O(0, (0, e.Inject)(D))], A);
function ie(e, t) {
  for (let n = e.startRow; n <= e.endRow; n++)
    for (let r = e.startColumn; r <= e.endColumn; r++)
      if (
        !t.some(
          (e) =>
            n >= e.startRow &&
            n <= e.endRow &&
            r >= e.startColumn &&
            r <= e.endColumn,
        )
      )
        return !1;
  return !0;
}
function ae(e, t) {
  return e.reduce((e, n) => Math.max(e, n[t]), 0);
}
function oe(t) {
  return typeof t == `number`
    ? e.CellValueType.NUMBER
    : typeof t == `boolean`
      ? e.CellValueType.BOOLEAN
      : e.CellValueType.STRING;
}
const j = (0, e.createIdentifier)(`univer-pro.formula.reference-data-service`),
  se = (0, e.createIdentifier)(
    `univer-pro.formula.reference-data-provider-registry`,
  );
var ce = class extends e.Disposable {
  constructor(...e) {
    (super(...e), s(this, `_providers`, new Map()));
  }
  register(e) {
    return (
      this._providers.set(e.id, e),
      {
        dispose: () => {
          this._providers.get(e.id) === e && this._providers.delete(e.id);
        },
      }
    );
  }
  getProviders(e) {
    return Array.from(this._providers.values())
      .filter((t) => t.canRead(e))
      .sort((e, t) => (t.priority ?? 0) - (e.priority ?? 0));
  }
  dispose() {
    (super.dispose(), this._providers.clear());
  }
};
function le(e, t = `#N/A`) {
  return {
    requestId: e.requestId,
    calculationId: e.calculationId,
    source: `unavailable`,
    freshness: `unavailable`,
    sheets: [],
    error: t,
  };
}
let M = class extends e.Disposable {
  constructor(e, t) {
    (super(), this.disposeWithMe(e.register(t)));
  }
};
M = k([O(0, se), O(1, (0, e.Inject)(A))], M);
let N = class extends e.Disposable {
  constructor(e, t) {
    (super(),
      (this._externalReferenceModel = e),
      (this._superTableService = t),
      s(this, `_units`, new Map()),
      s(this, `_pendingDirtyRanges`, []));
  }
  apply(e, t) {
    if (e.bindingSlot == null) return [];
    let n = e.bindingSlot,
      r = this._units.get(e.syntheticUnitId) ?? {
        hostUnitId: e.hostUnitId,
        bindingSlot: n,
        targetName: e.target.name,
        targetLiveUnitId: e.target.liveUnitId,
        targetUnitType: e.target.unitType,
        source: t.source,
        freshness: t.freshness,
        revision: t.revision,
        sheets: new Map(),
      };
    (r.revision != null &&
      t.revision != null &&
      r.revision !== t.revision &&
      (this._queueDirty(this._unitRanges(e.syntheticUnitId, r)),
      r.sheets.clear()),
      (r.targetName = e.target.name),
      (r.targetLiveUnitId = e.target.liveUnitId),
      (r.source = t.source),
      (r.freshness = t.freshness),
      (r.revision = t.revision),
      this._units.set(e.syntheticUnitId, r));
    let i = t.sheets.length > 0 ? t.sheets : this._createUnavailableSheets(e),
      a = [];
    for (let n of i) {
      let i = this._mergeSheet(r, n);
      (this._writeCoverageMisses(e, t, i, n.coverage),
        a.push(...n.coverage.map((e) => ({ sheetId: n.sheetId, range: e }))));
    }
    return (
      this._registerTables(e.syntheticUnitId, e.hostUnitId, n, r),
      this._queueDirty(
        a.map(({ sheetId: t, range: n }) => ({
          unitId: e.syntheticUnitId,
          sheetId: t,
          range: n,
        })),
      ),
      a
    );
  }
  materialize(e) {
    let t = e.allUnitData ?? {},
      n = e.unitSheetNameMap ?? {},
      r = e.unitNameMap ?? {};
    for (let [e, i] of this._units) {
      let a = t[e] ?? {},
        o = n[e] ?? {};
      for (let e of i.sheets.values())
        ((a[e.sheetId] = {
          cellData: e.cellData,
          rowCount: e.rowCount,
          columnCount: e.columnCount,
          rowData: {},
          columnData: {},
        }),
          (o[e.name] = e.sheetId));
      ((t[e] = a),
        (n[e] = o),
        (r[e] = { name: i.targetName, unitType: i.targetUnitType }));
    }
    ((e.allUnitData = t),
      (e.unitSheetNameMap = n),
      (e.unitNameMap = r),
      (e.unitStylesData = e.unitStylesData ?? {}));
  }
  getCellState(e, n, r, i) {
    var a, o;
    let s = (a = this._units.get(e)) == null ? void 0 : a.sheets.get(n);
    return !s || !s.coverage.some((e) => ue(e, r, i))
      ? { covered: !1, value: t.ErrorType.NA }
      : {
          covered: !0,
          value:
            ((o = s.cellData.getValue(r, i)) == null ? void 0 : o.v) ?? null,
        };
  }
  isRangeCovered(e, t, n) {
    let r = this._units.get(e),
      i = Array.from((r == null ? void 0 : r.sheets.values()) ?? []).find(
        (e) =>
          !t || e.sheetId === t || e.name.toLowerCase() === t.toLowerCase(),
      );
    if (!i) return !1;
    for (let e = n.startRow; e <= n.endRow; e++)
      for (let t = n.startColumn; t <= n.endColumn; t++)
        if (!i.coverage.some((n) => ue(n, e, t))) return !1;
    return !0;
  }
  enforceLimits(e, t) {
    let n = 0;
    for (; this._coveredCellCount() > e || this._estimatedBytes() > t;) {
      let e = this._oldestCoverage();
      if (!e) break;
      e.sheet.coverage.shift();
      for (let t = e.range.startRow; t <= e.range.endRow; t++)
        for (let n = e.range.startColumn; n <= e.range.endColumn; n++)
          e.sheet.coverage.some((e) => ue(e, t, n)) ||
            e.sheet.cellData.realDeleteValue(t, n);
      (e.sheet.coverage.length === 0 && e.unit.sheets.delete(e.sheet.sheetId),
        e.unit.sheets.size === 0 && this._units.delete(e.unitId),
        n++);
    }
    return n;
  }
  invalidateHost(e) {
    let t = [];
    for (let [n, r] of this._units)
      r.hostUnitId === e &&
        (t.push(...this._unitRanges(n, r)), this._units.delete(n));
    return (this._queueDirty(t), t);
  }
  invalidateSyntheticUnit(e) {
    let t = this._units.get(e),
      n = t ? this._unitRanges(e, t) : [];
    return (this._units.delete(e), this._queueDirty(n), n);
  }
  invalidateSourceRange(e, t, n) {
    let r = [],
      i = e.toLowerCase(),
      a = t.toLowerCase();
    for (let [o, s] of this._units)
      if (s.targetLiveUnitId === e || s.targetName.toLowerCase() === i)
        for (let e of s.sheets.values()) {
          if (e.sheetId !== t && e.name.toLowerCase() !== a) continue;
          let i = e.coverage.map((e) => fe(e, n)).filter((e) => e != null);
          if (i.length !== 0) {
            e.coverage = e.coverage.flatMap((e) => pe(e, n));
            for (let t of i) {
              for (let n = t.startRow; n <= t.endRow; n++)
                for (let r = t.startColumn; r <= t.endColumn; r++)
                  e.cellData.realDeleteValue(n, r);
              r.push({ unitId: o, sheetId: e.sheetId, range: t });
            }
          }
        }
    return (this._queueDirty(r), r);
  }
  invalidateSourceMetadata(e) {
    let t = e.toLowerCase(),
      n = [];
    for (let [r, i] of this._units)
      (i.targetLiveUnitId === e || i.targetName.toLowerCase() === t) &&
        (n.push(...this._unitRanges(r, i)), this._units.delete(r));
    return (this._queueDirty(n), n);
  }
  drainDirtyRanges() {
    return this._pendingDirtyRanges.splice(0);
  }
  getUnitCount() {
    return this._units.size;
  }
  dispose() {
    (super.dispose(),
      this._units.clear(),
      (this._pendingDirtyRanges.length = 0));
  }
  _unitRanges(e, t) {
    return Array.from(t.sheets.values()).flatMap((t) =>
      t.coverage.map((n) => ({ unitId: e, sheetId: t.sheetId, range: n })),
    );
  }
  _queueDirty(e) {
    for (let t of e)
      this._pendingDirtyRanges.some(
        (e) =>
          e.unitId === t.unitId &&
          e.sheetId === t.sheetId &&
          de(e.range, t.range),
      ) || this._pendingDirtyRanges.push(t);
  }
  _mergeSheet(t, n) {
    let r = t.sheets.get(n.sheetId) ?? {
      name: n.name,
      sheetId: n.sheetId,
      rowCount: n.rowCount,
      columnCount: n.columnCount,
      coverage: [],
      cellData: new e.ObjectMatrix(),
    };
    ((r.name = n.name),
      (r.rowCount = Math.max(r.rowCount, n.rowCount)),
      (r.columnCount = Math.max(r.columnCount, n.columnCount)),
      r.coverage.push(...n.coverage));
    for (let { row: e, column: t, cell: i } of n.cells)
      r.cellData.setValue(e, t, i);
    return (t.sheets.set(r.sheetId, r), r);
  }
  _oldestCoverage() {
    for (let [e, t] of this._units)
      for (let n of t.sheets.values()) {
        let r = n.coverage[0];
        if (r) return { unitId: e, unit: t, sheet: n, range: r };
      }
  }
  _coveredCellCount() {
    let e = 0;
    for (let t of this._units.values())
      for (let n of t.sheets.values())
        for (let t of n.coverage)
          e += (t.endRow - t.startRow + 1) * (t.endColumn - t.startColumn + 1);
    return e;
  }
  _estimatedBytes() {
    let e = 0;
    for (let t of this._units.values())
      for (let n of t.sheets.values())
        e += JSON.stringify(n.cellData.getMatrix()).length;
    return e;
  }
  _writeCoverageMisses(n, r, i, a) {
    for (let o of n.ranges)
      if (
        !(!o.range || (o.sheetId && o.sheetId !== i.sheetId)) &&
        !(o.sheetName && o.sheetName.toLowerCase() !== i.name.toLowerCase())
      )
        for (let n = o.range.startRow; n <= o.range.endRow; n++)
          for (let s = o.range.startColumn; s <= o.range.endColumn; s++)
            (r.error || !a.some((e) => ue(e, n, s))) &&
              i.cellData.setValue(n, s, {
                v: t.ErrorType.NA,
                t: e.CellValueType.STRING,
              });
  }
  _createUnavailableSheets(e) {
    return e.ranges
      .filter((e) => !!e.range)
      .map((t) => ({
        name: t.sheetName ?? t.sheetId ?? `External`,
        sheetId: t.sheetId ?? me(e.bindingSlot ?? 0, t.sheetName ?? `External`),
        rowCount: t.range.endRow + 1,
        columnCount: t.range.endColumn + 1,
        coverage: [t.range],
        cells: [],
      }));
  }
  _registerTables(e, t, n, r) {
    let i = this._externalReferenceModel.resolveBinding(t, String(n));
    if (i.status === `resolved`)
      for (let t of i.link.tables) {
        if (!t.range || !t.sheetName) continue;
        let n = Array.from(r.sheets.values()).find((e) => {
          var n;
          return (
            e.name.toLowerCase() ===
            ((n = t.sheetName) == null ? void 0 : n.toLowerCase())
          );
        });
        n &&
          this._superTableService.registerTable(e, t.name, {
            sheetId: n.sheetId,
            titleMap: new Map(t.columns.map((e, t) => [e.name, t])),
            range: t.range,
            showHeader: t.showHeader,
          });
      }
  }
};
N = k([O(0, (0, e.Inject)(D)), O(1, t.ISuperTableService)], N);
function ue(e, t, n) {
  return (
    t >= e.startRow && t <= e.endRow && n >= e.startColumn && n <= e.endColumn
  );
}
function de(e, t) {
  return (
    e.startRow === t.startRow &&
    e.endRow === t.endRow &&
    e.startColumn === t.startColumn &&
    e.endColumn === t.endColumn
  );
}
function fe(e, t) {
  let n = {
    startRow: Math.max(e.startRow, t.startRow),
    endRow: Math.min(e.endRow, t.endRow),
    startColumn: Math.max(e.startColumn, t.startColumn),
    endColumn: Math.min(e.endColumn, t.endColumn),
  };
  return n.startRow <= n.endRow && n.startColumn <= n.endColumn ? n : void 0;
}
function pe(e, t) {
  let n = fe(e, t);
  return n
    ? [
        { ...e, endRow: n.startRow - 1 },
        { ...e, startRow: n.endRow + 1 },
        {
          startRow: n.startRow,
          endRow: n.endRow,
          startColumn: e.startColumn,
          endColumn: n.startColumn - 1,
        },
        {
          startRow: n.startRow,
          endRow: n.endRow,
          startColumn: n.endColumn + 1,
          endColumn: e.endColumn,
        },
      ].filter((e) => e.startRow <= e.endRow && e.startColumn <= e.endColumn)
    : [e];
}
function me(e, t) {
  return `external-sheet:${e}:${encodeURIComponent(t)}`;
}
let P = class extends e.Disposable {
  constructor(t, n, r) {
    (super(), (this._univerInstanceService = t), s(this, `_names`, new Map()));
    for (let t of [
      e.UniverInstanceType.UNIVER_SHEET,
      e.UniverInstanceType.UNIVER_BASE,
    ])
      (this._univerInstanceService.getAllUnitsForType(t).forEach((e) => {
        (r.invalidateSourceMetadata(e.getUnitId()), this._watch(e, n, r));
      }),
        this.disposeWithMe(
          this._univerInstanceService
            .getTypeOfUnitAdded$(t)
            .subscribe(({ unit: e }) => {
              (r.invalidateSourceMetadata(e.getUnitId()), this._watch(e, n, r));
            }),
        ),
        this.disposeWithMe(
          this._univerInstanceService
            .getTypeOfUnitDisposed$(t)
            .subscribe((e) => {
              r.invalidateSourceMetadata(e.getUnitId());
              let t = this._names.get(e.getUnitId());
              (t && r.invalidateSourceMetadata(t),
                this._names.delete(e.getUnitId()));
            }),
        ));
  }
  _watch(e, t, n) {
    let r = e.getUnitId();
    this.disposeWithMe(
      e.name$.subscribe((e) => {
        let i = this._names.get(r);
        if ((this._names.set(r, e), i == null)) {
          n.invalidateSourceMetadata(e);
          return;
        }
        if (i !== e) {
          (n.invalidateSourceMetadata(r), n.invalidateSourceMetadata(i));
          for (let a of t.renameLiveTarget(r, i, e))
            n.invalidateSyntheticUnit(E(a.hostUnitId, a.slot));
        }
      }),
    );
  }
};
P = k(
  [
    O(0, e.IUniverInstanceService),
    O(1, (0, e.Inject)(D)),
    O(2, (0, e.Inject)(N)),
  ],
  P,
);
let F = class extends e.Disposable {
  constructor(t, n, r) {
    (super(),
      this.disposeWithMe(
        t.registerPluginResource({
          pluginName: te,
          businesses: [
            e.UniverInstanceType.UNIVER_SHEET,
            e.UniverInstanceType.UNIVER_BASE,
          ],
          toJson: (e) => JSON.stringify(n.serialize(e)),
          parseJson: (e) => JSON.parse(e),
          onLoad: (e, t) => (r.invalidateHost(e), n.load(e, t)),
          onUnLoad: (e) => {
            (r.invalidateHost(e), n.remove(e));
          },
        }),
      ));
  }
};
F = k(
  [
    O(0, e.IResourceManagerService),
    O(1, (0, e.Inject)(D)),
    O(2, (0, e.Inject)(N)),
  ],
  F,
);
const he = `univer-pro.formula.reference-data`;
let I = class extends e.Disposable {
  constructor(e, t) {
    (super(), e.registerChannel(he, (0, n.fromModule)(t)));
  }
};
I = k([O(0, n.IRPCChannelService), O(1, j)], I);
var ge = `@univerjs-pro/engine-formula`,
  _e = `1.0.0-insiders.20260907-70fc579`;
let ve = class extends e.Disposable {
  constructor(e, t, n) {
    (super(),
      (this._commandService = e),
      (this._sessionService = t),
      s(this, `_lastPersistedSessionId`, 0),
      this.disposeWithMe(this._commandService.registerCommand(ee)),
      this.disposeWithMe(
        this._sessionService.resultApplied$.subscribe(() => {
          let e = this._sessionService.state.id;
          e < 1 ||
            e === this._lastPersistedSessionId ||
            ((this._lastPersistedSessionId = e),
            this._commandService.syncExecuteCommand(ee.id, { sessionId: e }));
        }),
      ));
  }
};
ve = k(
  [
    O(0, e.ICommandService),
    O(1, (0, e.Inject)(t.FormulaCalculationSessionService)),
    O(2, (0, e.Inject)(T)),
  ],
  ve,
);
let ye = class extends e.Disposable {
  constructor(t, n, r) {
    (super(),
      t.register(h.id, {
        commandId: h.id,
        getDirtyData: (e) => {
          let { unitId: t } = e.params,
            i = be(t, n),
            a = r.getFormulaDirtyMap(t),
            o = Object.fromEntries(
              Array.from(
                new Set([...i.map(({ sheetId: e }) => e), ...Object.keys(a)]),
                (e) => [e, `1`],
              ),
            );
          return {
            dirtyRanges: i,
            dirtyUnitOtherFormulaMap:
              Object.keys(a).length > 0 ? { [t]: a } : void 0,
            clearDependencyTreeCache:
              Object.keys(o).length > 0 ? { [t]: o } : void 0,
          };
        },
      }),
      this.disposeWithMe(
        (0, e.toDisposable)(() => {
          t.remove(h.id);
        }),
      ));
  }
};
ye = k(
  [
    O(0, t.IActiveDirtyManagerService),
    O(1, e.IUniverInstanceService),
    O(2, (0, e.Inject)(t.RegisterOtherFormulaService)),
  ],
  ye,
);
function be(t, n) {
  let r = n.getUnit(t, e.UniverInstanceType.UNIVER_SHEET);
  if (r)
    return r
      .getSheets()
      .map((e) => ({
        unitId: t,
        sheetId: e.getSheetId(),
        range: {
          startRow: 0,
          startColumn: 0,
          endRow: Math.max(0, e.getRowCount() - 1),
          endColumn: Math.max(0, e.getColumnCount() - 1),
        },
      }));
  let i = n.getUnit(t, e.UniverInstanceType.UNIVER_BASE);
  return i
    ? Object.values(i.getSnapshot().tables).map((e) => {
        var n;
        return {
          unitId: t,
          sheetId: e.id,
          range: {
            startRow: 0,
            startColumn: 0,
            endRow: Math.max(
              0,
              (((n = e.recordOrder) == null ? void 0 : n.length) ?? 0) - 1,
            ),
            endColumn: Math.max(0, e.fieldOrder.length - 1),
          },
        };
      })
    : [];
}
let xe = class extends e.Disposable {
  constructor(e, n) {
    (super(),
      this.disposeWithMe(
        e.beforeCommandExecuted((e) => {
          if (e.id !== t.SetFormulaCalculationStartMutation.id) return;
          let r = e.params;
          r.externalReferences ??= n.getAll();
        }),
      ));
  }
};
xe = k([O(0, e.ICommandService), O(1, (0, e.Inject)(p))], xe);
let Se = class extends e.Disposable {
  constructor(e, n, r) {
    (super(),
      this.disposeWithMe(
        e.onCommandExecuted((i, a) => {
          var o;
          if (i.id !== `sheet.mutation.set-range-values` || Ce(a)) return;
          let s = (o = i.params) == null ? void 0 : o.unitId;
          if (!s) return;
          let c = we(n, r, s);
          Object.keys(c).length > 0 &&
            queueMicrotask(() =>
              e.executeCommand(t.OtherFormulaMarkDirty.id, c, {
                onlyLocal: !0,
              }),
            );
        }),
      ));
  }
};
Se = k(
  [
    O(0, e.ICommandService),
    O(1, (0, e.Inject)(p)),
    O(2, (0, e.Inject)(t.RegisterOtherFormulaService)),
  ],
  Se,
);
function Ce(e) {
  return (e == null ? void 0 : e.onlyLocal) === !0 && e.fromFormula === !0;
}
function we(e, t, n) {
  let r = {};
  for (let [i, a] of Object.entries(e.getAll())) {
    if (!Object.values(a.references).some((e) => e.sourceUnitId === n))
      continue;
    let e = t.getFormulaDirtyMap(i);
    Object.keys(e).length > 0 && (r[i] = e);
  }
  return r;
}
let Te = class extends e.Disposable {
  constructor(t, n, r) {
    (super(),
      [h, g, _, v].forEach((e) => {
        this.disposeWithMe(t.registerCommand(e));
      }),
      this.disposeWithMe(
        n.registerPluginResource({
          pluginName: c,
          businesses: [
            e.UniverInstanceType.UNIVER_SHEET,
            e.UniverInstanceType.UNIVER_DOC,
            e.UniverInstanceType.UNIVER_SLIDE,
            e.UniverInstanceType.UNIVER_BASE,
            e.UniverInstanceType.UNIVER_BOARD,
          ],
          toJson: (e) => JSON.stringify(r.serialize(e)),
          parseJson: (e) => JSON.parse(e),
          onLoad: (e, t) => r.load(e, t),
          onUnLoad: (e) => r.remove(e),
        }),
      ));
  }
};
Te = k(
  [
    O(0, e.ICommandService),
    O(1, e.IResourceManagerService),
    O(2, (0, e.Inject)(p)),
  ],
  Te,
);
function Ee() {
  return {
    totalFormulaNodes: 0,
    totalSharedFormulaGroups: 0,
    compressedSharedFormulaGroups: 0,
    compressibleSharedFormulaGroups: 0,
    expandedSharedFormulaGroups: 0,
    totalVirtualFormulaNodesInCompressedGroups: 0,
    totalVirtualFormulaNodesInCompressibleGroups: 0,
    skippedExpandedDependencyRegistrationCount: 0,
    sharedPatternCount: 0,
    sharedSourceCoverageEntryCount: 0,
    fallbackReasonCounts: {},
  };
}
function De(e, t = {}) {
  let n = t.minSharedGroupSize ?? 32,
    r = Ee(),
    i = Oe(e, r),
    a = [];
  return (
    i.forEach((e) => {
      let t = ke(e, n);
      if ((a.push(t), r.totalSharedFormulaGroups++, t.mode === `candidate`)) {
        (r.compressibleSharedFormulaGroups++,
          (r.totalVirtualFormulaNodesInCompressibleGroups +=
            t.virtualFormulaCount));
        return;
      }
      (r.expandedSharedFormulaGroups++,
        t.fallbackReason &&
          (r.fallbackReasonCounts[t.fallbackReason] =
            (r.fallbackReasonCounts[t.fallbackReason] ?? 0) + 1));
    }),
    { groups: a, metrics: r }
  );
}
function Oe(e, t) {
  let n = new Map(),
    r = Object.keys(e);
  for (let i = 0; i < r.length; i++) {
    let a = r[i],
      o = e[a];
    if (o == null) continue;
    let s = Object.keys(o);
    for (let e = 0; e < s.length; e++) {
      let r = s[e],
        i = o[r];
      if (i == null) continue;
      let c = Object.keys(i);
      for (let e = 0; e < c.length; e++) {
        let o = +c[e],
          s = i[o];
        if (s == null) continue;
        let l = Object.keys(s);
        for (let e = 0; e < l.length; e++) {
          let i = +l[e],
            c = s[i];
          if (c == null || (t.totalFormulaNodes++, c.si == null)) continue;
          let u = String(c.si),
            d = Me(a, r, u),
            f = n.get(d);
          (f ??
            ((f = { groupId: d, unitId: a, sheetId: r, si: u, members: [] }),
            n.set(d, f)),
            f.members.push({ row: o, col: i, item: c }));
        }
      }
    }
  }
  return n;
}
function ke(e, t) {
  var n;
  let r = Ae(e.members),
    i = r.maxCol - r.minCol + 1,
    a = r.maxRow - r.minRow + 1,
    o = {
      unitId: e.unitId,
      sheetId: e.sheetId,
      range: {
        startRow: r.minRow,
        endRow: r.maxRow,
        startColumn: r.minCol,
        endColumn: r.maxCol,
      },
    },
    s =
      r.anchorCount === 1 && r.anchor != null
        ? {
            unitId: e.unitId,
            sheetId: e.sheetId,
            row: r.anchor.row,
            col: r.anchor.col,
          }
        : void 0,
    c = je(
      e,
      o,
      r.anchorCount,
      t,
      ((n = r.anchor) == null ? void 0 : n.item.f) ?? ``,
    );
  return {
    groupId: e.groupId,
    unitId: e.unitId,
    sheetId: e.sheetId,
    si: e.si,
    anchor: s,
    fillRange: o,
    width: i,
    height: a,
    size: e.members.length,
    virtualFormulaCount: Math.max(0, e.members.length - 1),
    mode: c == null ? `candidate` : `expanded`,
    fallbackReason: c,
  };
}
function Ae(e) {
  let t = 1 / 0,
    n = -1 / 0,
    r = 1 / 0,
    i = -1 / 0,
    a = 0,
    o;
  for (let s = 0; s < e.length; s++) {
    let c = e[s];
    ((t = Math.min(t, c.row)),
      (n = Math.max(n, c.row)),
      (r = Math.min(r, c.col)),
      (i = Math.max(i, c.col)),
      Ne(c.item) && (a++, (o = c)));
  }
  return {
    minRow: t,
    maxRow: n,
    minCol: r,
    maxCol: i,
    anchorCount: a,
    anchor: o,
  };
}
function je(e, t, n, r, i) {
  if (n === 0) return `missing-anchor-formula`;
  if (n > 1) return `ambiguous-anchor-formula`;
  if (!Pe(e.members, t)) return `non-rectangular-fill-range`;
  if (e.members.length < r) return `small-group`;
  if (Le(i)) return `external-reference`;
  if (Fe(i)) return `unsupported-dynamic-reference`;
  if (Ie(i)) return `volatile-function`;
  if (Re(i)) return `array-formula`;
  if (ze(i)) return `spill-formula`;
}
function Me(e, t, n) {
  return [e, t, n].join(`\0`);
}
function Ne(e) {
  return (e.x ?? 0) === 0 && (e.y ?? 0) === 0;
}
function Pe(e, t) {
  return (
    (t.range.endColumn - t.range.startColumn + 1) *
      (t.range.endRow - t.range.startRow + 1) ===
    e.length
  );
}
function Fe(e) {
  return Be(e, [`INDIRECT`, `OFFSET`]);
}
function Ie(e) {
  return Be(e, [`RAND`, `RANDBETWEEN`, `NOW`, `TODAY`]);
}
function Le(e) {
  return /\[[^\]]+\]/.test(e);
}
function Re(e) {
  return /^\s*\{=.*\}\s*$/.test(e);
}
function ze(e) {
  return /#/.test(e);
}
function Be(e, t) {
  for (let n = 0; n < t.length; n++)
    if (RegExp(`(^|[^A-Z0-9_.])${t[n]}\\s*\\(`, `i`).test(e)) return !0;
  return !1;
}
const Ve =
    /\b(?:INDIRECT|ADDRESS|CELL|INFO|FORMULATEXT|RAND|RANDBETWEEN|NOW|TODAY)\s*\(/i,
  L =
    /(?:(?:'((?:[^']|'')+)'|([A-Za-z_][A-Za-z0-9_. ]*))!)?\$?([A-Z]{1,3})\$?([1-9]\d{0,6})(?::\$?([A-Z]{1,3})\$?([1-9]\d{0,6}))?/gi,
  He =
    /(?:(?:'((?:[^']|'')+)'|([A-Za-z_][A-Za-z0-9_. ]*))!)?\$?([A-Z]{1,3}):\$?([A-Z]{1,3})(?![A-Za-z0-9_.])/gi,
  Ue = /[A-Za-z_][A-Za-z0-9_.]*/g,
  We = /^(?:TRUE|FALSE)$/i,
  Ge = [
    t.FUNCTION_NAMES_LOOKUP.ROW,
    t.FUNCTION_NAMES_LOOKUP.ROWS,
    t.FUNCTION_NAMES_LOOKUP.COLUMN,
    t.FUNCTION_NAMES_LOOKUP.COLUMNS,
  ],
  Ke = new WeakMap();
function qe(e) {
  for (let t = 0; t < e.length; t++) if (e.charCodeAt(t) > 127) return !0;
  return !1;
}
function Je(t) {
  let n = Ke.get(t);
  if (n !== void 0) return n;
  let r = Object.keys(t).filter((e) => e.length > 0);
  return (
    (n =
      r.length > 0
        ? e.regexp.createRegExpFromSafeFragment(
            `(^|[^A-Za-z0-9_])${e.regexp.or(...r)}(\\s*\\[|$|[^A-Za-z0-9_])`,
            `i`,
          )
        : null),
    Ke.set(t, n),
    n
  );
}
function R(e) {
  let t = globalThis;
  t.__UNIVER_PRO_STATIC_DEP_PROFILE_ENABLED__ === !0 &&
    ((t.__UNIVER_PRO_STATIC_DEP_PROFILE__ ??= {}),
    (t.__UNIVER_PRO_STATIC_DEP_PROFILE__[e] =
      (t.__UNIVER_PRO_STATIC_DEP_PROFILE__[e] ?? 0) + 1));
}
function z(e, t) {
  let n = globalThis;
  n.__UNIVER_PRO_STATIC_DEP_PROFILE_ENABLED__ === !0 &&
    ((n.__UNIVER_PRO_STATIC_DEP_SAMPLES__ ??= {}),
    (n.__UNIVER_PRO_STATIC_DEP_SAMPLES__[e] ??= []),
    n.__UNIVER_PRO_STATIC_DEP_SAMPLES__[e].length < 20 &&
      n.__UNIVER_PRO_STATIC_DEP_SAMPLES__[e].push(t));
}
function B() {
  var e, t;
  return (
    ((e = globalThis.performance) == null || (t = e.now) == null
      ? void 0
      : t.call(e)) ?? Date.now()
  );
}
function V(e, t) {
  let n = globalThis;
  if (n.__UNIVER_PRO_PROFILE_ENABLED__ !== !0) return;
  ((n.__UNIVER_PRO_ENGINE_PROFILE__ ??= {}),
    (n.__UNIVER_PRO_ENGINE_PROFILE__.timings ??= {}));
  let r = n.__UNIVER_PRO_ENGINE_PROFILE__.timings[e] ?? {
    count: 0,
    totalMs: 0,
    maxMs: 0,
  };
  (r.count++,
    (r.totalMs += t),
    (r.maxMs = Math.max(r.maxMs, t)),
    (n.__UNIVER_PRO_ENGINE_PROFILE__.timings[e] = r));
}
function H(e, t = 1) {
  let n = globalThis;
  n.__UNIVER_PRO_PROFILE_ENABLED__ === !0 &&
    ((n.__UNIVER_PRO_ENGINE_PROFILE__ ??= {}),
    (n.__UNIVER_PRO_ENGINE_PROFILE__.counters ??= {}),
    (n.__UNIVER_PRO_ENGINE_PROFILE__.counters[e] =
      (n.__UNIVER_PRO_ENGINE_PROFILE__.counters[e] ?? 0) + t));
}
async function Ye(e, t) {
  let n = B();
  try {
    return await t();
  } finally {
    V(e, B() - n);
  }
}
function Xe(e, t) {
  let n = B();
  try {
    return t();
  } finally {
    V(e, B() - n);
  }
}
var Ze = class extends t.FormulaDependencyGenerator {
  constructor(...e) {
    (super(...e),
      s(this, `_featureFormulaDirtyDependencies`, []),
      s(this, `_calculationTreeCache`, new Map()),
      s(this, `_calculationNodeDataCache`, new Map()),
      s(this, `_forcedRecalculationNodeIndices`, new Set()),
      s(this, `_sharedFormulaCompressionMetrics`, Ee()),
      s(this, `_cacheDependencyTreeModelRangeList`, !1));
  }
  dispose() {
    (super.dispose(),
      this._dependencyTreeCache.clear(),
      this._calculationTreeCache.clear(),
      (this._calculationNodeDataCache = new Map()),
      (this._featureFormulaDirtyDependencies.length = 0),
      this._forcedRecalculationNodeIndices.clear(),
      (this._sharedFormulaCompressionMetrics = Ee()));
  }
  clearCalculatedDirty(e) {
    this._dependencyManagerService.clearCalculatedDirty(e);
  }
  clearCachedCalculationNodeData() {
    this._calculationNodeDataCache = new Map();
  }
  clearCachedCalculationTree() {
    this._calculationTreeCache.clear();
  }
  getCachedCalculationNodeData(e) {
    return this._calculationNodeDataCache.get(e);
  }
  getCalculationOrder() {
    return this._dependencyManagerService.getCalculationOrder({
      detectCycles: !0,
    });
  }
  getSharedFormulaCompressionMetrics() {
    return this._sharedFormulaCompressionMetrics;
  }
  hasDynamicDepsByIndex(e) {
    return this._dependencyManagerService.hasDynamicDepsByIndex(e);
  }
  refreshDynamicDepsByIndex(e, t) {
    return this._dependencyManagerService.refreshDynamicDepsByIndex(e, t);
  }
  hasUncalculatedDirtyPrecedentByIndex(e, t) {
    return this._dependencyManagerService.hasUncalculatedDirtyPrecedentByIndex(
      e,
      t,
    );
  }
  async getAllDependencyJson() {
    ((this._featureFormulaDirtyDependencies.length = 0),
      this._updateRangeFlatten());
    let e = this._currentConfigService.getFormulaData(),
      t = De(e);
    this._sharedFormulaCompressionMetrics = t.metrics;
    let n = this._otherFormulaManagerService.getOtherFormulaData(),
      r = this._currentConfigService.getUnitData();
    this._cacheDependencyTreeModelRangeList = !0;
    try {
      return (
        await this._generateTreeListPro(e, n, r, t),
        this._getAllDependencyJsonPro(this._calculationTreeCache)
      );
    } finally {
      ((this._cacheDependencyTreeModelRangeList = !1),
        (this._featureFormulaDirtyDependencies.length = 0));
    }
  }
  async generatePro(e = !1) {
    ((this._featureFormulaDirtyDependencies.length = 0),
      Xe(`dependency.updateRangeFlatten`, () => this._updateRangeFlatten()));
    let t = this._currentConfigService.getFormulaData(),
      n = Xe(`dependency.analyzeSharedFormulaGroups`, () => De(t));
    ((this._sharedFormulaCompressionMetrics = n.metrics),
      H(`dependency.formulaNodes`, n.metrics.totalFormulaNodes),
      H(`dependency.sharedFormulaGroups`, n.groups.length));
    let r = this._otherFormulaManagerService.getOtherFormulaData(),
      i = this._currentConfigService.getClearDependencyTreeCache(),
      a = this._dependencyManagerService;
    i != null &&
      Object.keys(i).forEach((e) => {
        e != null &&
          Object.keys(i[e]).forEach((t) => {
            t != null &&
              (a.clearOtherFormulaDependency(e, t),
              a.clearFeatureFormulaDependency(e, t),
              a.clearFormulaDependency(e, t),
              this._clearCalculationTreeCache(e, t));
          });
      });
    let o = this._currentConfigService.getUnitData();
    this._cacheDependencyTreeModelRangeList = e;
    try {
      await Ye(`dependency.generateTreeList`, () =>
        this._generateTreeListPro(t, r, o, n),
      );
    } finally {
      this._cacheDependencyTreeModelRangeList = !1;
    }
    (await Ye(`dependency.markDirtyDependencies`, () =>
      this._markDirtyDependenciesPro(),
    ),
      (this._featureFormulaDirtyDependencies.length = 0),
      Xe(`dependency.clearArrayObjectCache`, () =>
        this._runtimeService.clearArrayObjectCache(),
      ));
    let s = Xe(`dependency.getCalculationOrder`, () =>
        a.getCalculationOrder({ detectCycles: !0 }),
      ),
      c = this._calculationTreeCache;
    return (
      e &&
        this._runtimeService.setDependencyTreeModelData(
          this._getAllDependencyJsonPro(c),
        ),
      { calculationOrderResult: s, dependencyTree: c }
    );
  }
  async _generateTreeListPro(e, t, n, r) {
    let i = Object.keys(e),
      a = Object.keys(t);
    (this._registerFeatureFormulasPro(),
      this._dependencyManagerService.reserveFormulaDependencyCapacity(
        Math.max(16, r.metrics.totalFormulaNodes),
        Math.max(16, Math.ceil(r.metrics.totalFormulaNodes / 2)),
      ),
      await this._registerFormulasPro(i, e, n, r),
      await this._registerOtherFormulasPro(t, a));
  }
  _registerFeatureFormulasPro() {
    this._featureCalculationManagerService
      .getReferenceExecutorMap()
      .forEach((e, t) => {
        e.forEach((e, t) => {
          e.forEach((e, t) => {
            let n = this._dependencyManagerService.getFeatureFormulaDependency(
              e.unitId,
              e.subUnitId,
              t,
            );
            this._getFeatureFormulaTreePro(t, n, e);
          });
        });
      });
  }
  _getFeatureFormulaTreePro(e, n, r) {
    let { unitId: i, subUnitId: a, dependencyRanges: o, getDirtyData: s } = r,
      c = new t.FormulaDependencyTree(
        n ||
          (0, t.generateRandomDependencyTreeId)(this._dependencyManagerService),
      );
    ((c.unitId = i),
      (c.subUnitId = a),
      (c.rangeList = o),
      (c.getDirtyData = s));
    let l = s(
        this._currentConfigService.getDirtyData(),
        this._runtimeService.getAllRuntimeData(),
      ),
      u = this._convertDirtyRangesToUnitRange(l.dirtyRanges);
    ((c.featureDirtyRanges = u),
      (c.featureId = e),
      (c.type = t.FormulaDependencyTreeType.FEATURE_FORMULA));
    let d = this._dependencyManagerService.getFeatureFormulaDependencyPro(
        r.unitId,
        r.subUnitId,
        e,
      ),
      f;
    return (
      d === void 0 &&
        ((d = this._dependencyManagerService.addFeatureFormulaDependencyPro(
          i,
          a,
          e,
          c,
        )),
        (f = d)),
      u.length > 0 &&
        this._featureFormulaDirtyDependencies.push({
          node: this._dependencyManagerService.getFeatureFormulaDependencyNodePro(
            i,
            a,
            e,
          ),
          dirtyRanges: u,
        }),
      this._cacheCalculationTree(d, c),
      this._releaseDependencyTree(c),
      f
    );
  }
  async _registerOtherFormulasPro(e, n) {
    for (let r of n) {
      let n = e[r];
      if (n == null) continue;
      let i = Object.keys(n);
      for (let e of i) {
        let i = n[e];
        if (i == null) continue;
        let a = this._currentConfigService.getSheetRowColumnCount(r, e),
          o = a.rowCount > 0 ? a.rowCount : 1,
          s = a.columnCount > 0 ? a.columnCount : 1,
          c = Object.keys(i);
        for (let n of c) {
          let a = this._dependencyManagerService.hasOtherFormulaDataMainData(n),
            { f: c, ranges: l } = i[n],
            u = !1;
          a && (u = !0);
          let { firstRow: d, firstColumn: f } = this._getFirstCellOfRange(l),
            p = new t.FormulaDependencyTree(
              (0, t.generateRandomDependencyTreeId)(
                this._dependencyManagerService,
              ),
            );
          for (let i = 0; i < l.length; i++) {
            let a = l[i],
              { startRow: m, startColumn: h } = a,
              { endRow: g, endColumn: _ } = a;
            ((g = Math.min(g, o - 1)), (_ = Math.min(_, s - 1)));
            for (let i = m; i <= g; i++)
              for (let a = h; a <= _; a++) {
                let o = a - f,
                  s = i - d,
                  l =
                    this._dependencyManagerService.getOtherFormulaDependencyPro(
                      r,
                      e,
                      n,
                      o,
                      s,
                    );
                if (o === 0 && s === 0) {
                  ((p.formula = c),
                    (p.unitId = r),
                    (p.subUnitId = e),
                    (p.formulaId = n),
                    (p.type = t.FormulaDependencyTreeType.OTHER_FORMULA),
                    (p.isCache = u),
                    p.node || (await this._initialAstNodeAndRanges(p)));
                  let i = this._getFeatureFormulaDependencyNodes(p.rangeList);
                  (l === void 0
                    ? (l =
                        this._dependencyManagerService.addOtherFormulaDependencyPro(
                          r,
                          e,
                          n,
                          p,
                          i,
                        ))
                    : i.length > 0 &&
                      (l =
                        this._dependencyManagerService.addOtherFormulaDependencyPro(
                          r,
                          e,
                          n,
                          p,
                          i,
                          `merge`,
                        )),
                    this._cacheCalculationTree(l, p),
                    this._syncForcedRecalculationNodeIndex(l, p));
                  continue;
                }
                let m = new t.FormulaDependencyTreeVirtual();
                ((m.treeId = (0, t.generateRandomDependencyTreeId)(
                  this._dependencyManagerService,
                )),
                  (m.refTree = p),
                  (m.refOffsetX = o),
                  (m.refOffsetY = s),
                  (m.isCache = u),
                  (m.type = t.FormulaDependencyTreeType.OTHER_FORMULA));
                let h = this._getFeatureFormulaDependencyNodes(m.rangeList);
                (l === void 0
                  ? (l =
                      this._dependencyManagerService.addOtherFormulaDependencyPro(
                        r,
                        e,
                        n,
                        m,
                        h,
                      ))
                  : h.length > 0 &&
                    (l =
                      this._dependencyManagerService.addOtherFormulaDependencyPro(
                        r,
                        e,
                        n,
                        m,
                        h,
                        `merge`,
                      )),
                  this._cacheCalculationTree(l, m),
                  this._syncForcedRecalculationNodeIndex(l, m),
                  this._releaseDependencyTree(m));
              }
          }
          this._releaseDependencyTree(p);
        }
      }
    }
  }
  async _registerFormulasPro(e, t, n, r = De(t)) {
    let i = this._createSharedFormulaGroupMap(r.groups),
      a = this._dependencyManagerService,
      o = this._shouldEagerCacheCalculationTrees();
    H(
      o
        ? `dependency.eagerCalculationTreeCache.enabled`
        : `dependency.eagerCalculationTreeCache.skipped`,
    );
    for (let r of e) {
      let e = t[r];
      if (e == null) continue;
      let s = Object.keys(e);
      for (let t of s) {
        let s = new Map(),
          c = new Map(),
          l = new Set(),
          u = new Map(),
          d = [],
          f = e[t];
        if (f == null) continue;
        let p = Object.keys(f),
          m = B();
        for (let e of p) {
          let p = +e,
            m = f[p];
          if (m == null) continue;
          let h = Object.keys(m);
          for (let e of h) {
            let f = +e,
              h = m[f];
            if (h == null) continue;
            let { x: g = 0, y: _ = 0, si: v } = h;
            if (g !== 0 || _ !== 0 || v == null) continue;
            let y = String(v),
              b = this._createFDtree(r, t, p, f, n, h),
              x = this._createSharedFormulaGroupId(r, t, y),
              S = i.get(x),
              C =
                (S == null ? void 0 : S.mode) === `candidate`
                  ? await this._analyzeSharedFormulaCompression(b, S)
                  : void 0,
              w;
            if ((C == null ? void 0 : C.mode) === `compressed`) {
              ((w = a.addFormulaDependencyNodeOnlyPro(r, t, p, f)),
                c.set(y, C),
                l.add(y),
                d.push(C));
              let e = [w];
              (e.push(
                ...a.addFormulaDependencyNodeOnlyRangePro(
                  r,
                  t,
                  C.group.fillRange.range,
                  { row: p, col: f },
                ),
              ),
                u.set(C.group.groupId, e));
            } else if (
              ((C == null ? void 0 : C.mode) === `expanded` &&
                (c.set(y, C), this._recordExpandedSharedFormulaGroupMetrics(C)),
              (w = a.getFormulaDependencyPro(r, t, p, f)),
              w === void 0)
            ) {
              await this._initialDependencyRanges(b);
              let e = this._getFeatureFormulaDependencyNodes(b.rangeList);
              w = a.addFormulaDependencyPro(r, t, p, f, b, e);
            } else {
              await this._ensureTreeInitializedForDependencies(b);
              let e = this._getFeatureFormulaDependencyNodes(b.rangeList);
              this._includeDirtySuperTablePro(r, b.formula)
                ? (w = a.addFormulaDependencyPro(r, t, p, f, b, e, `replace`))
                : e.length > 0 &&
                  (w = a.addFormulaDependencyPro(r, t, p, f, b, e, `merge`));
            }
            s.set(y, b);
            let T = this._syncForcedRecalculationNodeIndex(w, b);
            (o || T) &&
              (H(`dependency.calculationTreeCache.normal`),
              this._cacheCalculationTree(w, b));
          }
        }
        V(`dependency.registerFormulas.sharedAnchorPass`, B() - m);
        let h = B();
        for (let e of p) {
          let i = +e,
            u = f[i];
          if (u == null) continue;
          let d = Object.keys(u);
          for (let e of d) {
            let d = +e,
              f = u[d];
            if (f == null) continue;
            let { x: p = 0, y: m = 0, si: h } = f;
            if (p === 0 && m === 0 && h != null) continue;
            let g = h == null ? void 0 : String(h);
            if (!o && g != null && l.has(g)) continue;
            let _ = g == null ? void 0 : c.get(g);
            if (
              (_ == null ? void 0 : _.mode) === `compressed` &&
              g != null &&
              s.has(g)
            ) {
              if (o) {
                let e = a.getFormulaDependencyPro(r, t, i, d),
                  n = s.get(g),
                  { x: o = 0, y: c = 0 } = f;
                e !== void 0 &&
                  (H(`dependency.calculationTreeCache.compressedVirtual`),
                  this._cacheCompressedVirtualCalculationTree(e, n, o, c));
              }
              continue;
            }
            let v = a.getFormulaDependencyPro(r, t, i, d),
              y,
              b = g == null ? void 0 : s.get(g);
            if (
              (b == null
                ? (y = this._createFDtree(r, t, i, d, n, f))
                : ((y = this._createVirtualFDtree(b, f)),
                  (y.addressFunctionNodes = b.addressFunctionNodes)),
              v === void 0)
            ) {
              y.isVirtual || (await this._initialDependencyRanges(y));
              let e = this._getFeatureFormulaDependencyNodes(y.rangeList);
              v = a.addFormulaDependencyPro(r, t, i, d, y, e);
            } else {
              let e = this._includeDirtySuperTablePro(r, y.formula),
                n = b != null;
              (this._cacheDependencyTreeModelRangeList ||
                this._featureFormulaDirtyDependencies.length > 0 ||
                e ||
                a.hasDynamicDepsByIndex(v)) &&
                (await this._ensureTreeInitializedForDependencies(y));
              let o = this._getFeatureFormulaDependencyNodes(y.rangeList);
              n || e
                ? (v = a.addFormulaDependencyPro(r, t, i, d, y, o, `replace`))
                : o.length > 0 &&
                  (v = a.addFormulaDependencyPro(r, t, i, d, y, o, `merge`));
            }
            let x = this._syncForcedRecalculationNodeIndex(v, y);
            ((o || x) &&
              (H(`dependency.calculationTreeCache.normal`),
              this._cacheCalculationTree(v, y)),
              this._releaseDependencyTree(y));
          }
        }
        V(`dependency.registerFormulas.virtualPass`, B() - h);
        let g = B();
        for (let e = 0; e < d.length; e++) {
          let t = d[e];
          t.patterns &&
            t.group.fillRange &&
            (a.registerCompressedSharedFormulaGroup({
              groupId: t.group.groupId,
              fillRange: t.group.fillRange,
              patterns: t.patterns,
              memberNodeIndices: u.get(t.group.groupId),
            }),
            this._recordCompressedSharedFormulaGroupMetrics(t));
        }
        (V(`dependency.registerFormulas.compressedGroups`, B() - g),
          s.forEach((e) => this._releaseDependencyTree(e)),
          s.clear());
      }
    }
  }
  _createSharedFormulaGroupMap(e) {
    let t = new Map();
    for (let n = 0; n < e.length; n++) t.set(e[n].groupId, e[n]);
    return t;
  }
  _createSharedFormulaGroupId(e, t, n) {
    return [e, t, String(n)].join(`\0`);
  }
  async _analyzeSharedFormulaCompression(e, t) {
    if (t.fillRange == null)
      return {
        group: t,
        mode: `expanded`,
        fallbackReason: `non-rectangular-fill-range`,
      };
    await this._initialDependencyRanges(e);
    let n = this._getFeatureFormulaDependencyNodes(e.rangeList),
      r = this._getSharedFormulaUnsupportedReason(e, n.length);
    if (r) return { group: t, mode: `expanded`, fallbackReason: r };
    let i = this._convertSharedFormulaPatterns(e);
    return i == null || i.length === 0
      ? {
          group: t,
          mode: `expanded`,
          fallbackReason: `unsupported-range-pattern`,
        }
      : this._hasSharedFormulaSelfOverlap(t.fillRange, i)
        ? { group: t, mode: `expanded`, fallbackReason: `self-overlap` }
        : { group: t, mode: `compressed`, patterns: i };
  }
  _getSharedFormulaUnsupportedReason(e, t) {
    if (e.addressFunctionNodes && e.addressFunctionNodes.length > 0)
      return `unsupported-dynamic-reference`;
    if (t > 0 || /\$/.test(e.formula)) return `unsupported-range-pattern`;
  }
  _convertSharedFormulaPatterns(t) {
    let n = [],
      r = new Set(),
      i = t.row,
      a = t.column;
    for (let o = 0; o < t.rangeList.length; o++) {
      let s = t.rangeList[o];
      if ((s.range.rangeType ?? e.RANGE_TYPE.NORMAL) !== e.RANGE_TYPE.NORMAL)
        return;
      let c = this._normalizeSharedFormulaRange(s.range),
        l;
      l =
        c.startRow === c.endRow && c.startColumn === c.endColumn
          ? {
              kind: `cell`,
              unitId: s.unitId,
              sheetId: s.sheetId,
              rowDelta: c.startRow - i,
              colDelta: c.startColumn - a,
            }
          : {
              kind: `range`,
              unitId: s.unitId,
              sheetId: s.sheetId,
              startRowDelta: c.startRow - i,
              startColDelta: c.startColumn - a,
              endRowDelta: c.endRow - i,
              endColDelta: c.endColumn - a,
            };
      let u = JSON.stringify(l);
      r.has(u) || (r.add(u), n.push(l));
    }
    return n;
  }
  _hasSharedFormulaSelfOverlap(t, n) {
    for (let r = 0; r < n.length; r++) {
      let i = this._computeSharedFormulaSourceCoverage(t, n[r]);
      if (
        i.unitId === t.unitId &&
        i.sheetId === t.sheetId &&
        e.Rectangle.intersects(i.range, t.range)
      )
        return !0;
    }
    return !1;
  }
  _computeSharedFormulaSourceCoverage(e, t) {
    if (t.kind === `cell`)
      return {
        unitId: t.unitId,
        sheetId: t.sheetId,
        range: this._normalizeSharedFormulaRange({
          startRow: e.range.startRow + t.rowDelta,
          endRow: e.range.endRow + t.rowDelta,
          startColumn: e.range.startColumn + t.colDelta,
          endColumn: e.range.endColumn + t.colDelta,
        }),
      };
    let n = Math.min(t.startRowDelta, t.endRowDelta),
      r = Math.max(t.startRowDelta, t.endRowDelta),
      i = Math.min(t.startColDelta, t.endColDelta),
      a = Math.max(t.startColDelta, t.endColDelta);
    return {
      unitId: t.unitId,
      sheetId: t.sheetId,
      range: this._normalizeSharedFormulaRange({
        startRow: e.range.startRow + n,
        endRow: e.range.endRow + r,
        startColumn: e.range.startColumn + i,
        endColumn: e.range.endColumn + a,
      }),
    };
  }
  _normalizeSharedFormulaRange(e) {
    return {
      startRow: Math.min(e.startRow, e.endRow),
      endRow: Math.max(e.startRow, e.endRow),
      startColumn: Math.min(e.startColumn, e.endColumn),
      endColumn: Math.max(e.startColumn, e.endColumn),
    };
  }
  _recordCompressedSharedFormulaGroupMetrics(e) {
    e.mode === `compressed` &&
      e.patterns != null &&
      (this._sharedFormulaCompressionMetrics.compressedSharedFormulaGroups++,
      (this._sharedFormulaCompressionMetrics.totalVirtualFormulaNodesInCompressedGroups +=
        e.group.virtualFormulaCount),
      (this._sharedFormulaCompressionMetrics.skippedExpandedDependencyRegistrationCount +=
        e.group.size * e.patterns.length),
      (this._sharedFormulaCompressionMetrics.sharedPatternCount +=
        e.patterns.length),
      (this._sharedFormulaCompressionMetrics.sharedSourceCoverageEntryCount +=
        e.patterns.length));
  }
  _recordExpandedSharedFormulaGroupMetrics(e) {
    e.mode === `expanded` &&
      e.fallbackReason != null &&
      (this._sharedFormulaCompressionMetrics.expandedSharedFormulaGroups++,
      (this._sharedFormulaCompressionMetrics.fallbackReasonCounts[
        e.fallbackReason
      ] =
        (this._sharedFormulaCompressionMetrics.fallbackReasonCounts[
          e.fallbackReason
        ] ?? 0) + 1));
  }
  _shouldEagerCacheCalculationTrees() {
    var e, t;
    return this._cacheDependencyTreeModelRangeList ||
      this._currentConfigService.isForceCalculate() ||
      this._currentConfigService.getDirtyRanges().length > 0
      ? !0
      : this._hasAnyDirtyMapValue(
          this._currentConfigService.getDirtyNameMap(),
        ) ||
          this._hasAnyDirtyMapValue(
            this._currentConfigService.getDirtyDefinedNameMap(),
          ) ||
          this._hasAnyDirtyMapValue(
            (e = (t = this._currentConfigService).getDirtySuperTableMap) == null
              ? void 0
              : e.call(t),
          ) ||
          this._hasAnyDirtyMapValue(
            this._currentConfigService.getDirtyUnitFeatureMap(),
          ) ||
          this._hasAnyDirtyMapValue(
            this._currentConfigService.getDirtyUnitOtherFormulaMap(),
          );
  }
  _hasAnyDirtyMapValue(e) {
    if (e == null) return !1;
    if (Array.isArray(e)) return e.length > 0;
    if (typeof e != `object`) return !0;
    let t = Object.values(e);
    for (let e = 0; e < t.length; e++)
      if (this._hasAnyDirtyMapValue(t[e])) return !0;
    return !1;
  }
  async _markDirtyDependenciesPro() {
    let e = this._dependencyManagerService;
    if (this._currentConfigService.isForceCalculate()) {
      e.markAllDirty();
      return;
    }
    let t = this._currentConfigService.getDirtyRanges();
    (t.length > 0 && e.markRangesChanged(t, { includeFormulaCells: !0 }),
      e.markDirtyFeatureCalculations(
        this._currentConfigService.getDirtyUnitFeatureMap(),
      ),
      e.markDirtyOtherFormulas(
        this._currentConfigService.getDirtyUnitOtherFormulaMap(),
      ),
      e.markDirtySheetNames(this._currentConfigService.getDirtyNameMap()),
      this._markForcedRecalculationNodesPro(e),
      await this._markDirtyDefinedNameDependenciesPro(e),
      this._markDirtySuperTableDependenciesPro(e));
  }
  _markForcedRecalculationNodesPro(e) {
    if (this._forcedRecalculationNodeIndices.size === 0) return;
    let t = [];
    (this._forcedRecalculationNodeIndices.forEach((e) => {
      t.push(e);
    }),
      e.markIndicesChanged(t));
  }
  async _markDirtyDefinedNameDependenciesPro(e) {
    let t = this._currentConfigService.getDirtyDefinedNameMap();
    if (!this._hasDirtyDefinedNames(t)) return;
    let n = [];
    for (let [e, t] of this._calculationTreeCache)
      t.formula &&
        t.formula.length > 0 &&
        this._includeDirtyDefinedNamePro(t.formula) &&
        n.push(e);
    n.length > 0 && e.markIndicesChanged(n);
  }
  _markDirtySuperTableDependenciesPro(e) {
    var t, n;
    let r =
      (t = (n = this._currentConfigService).getDirtySuperTableMap) == null
        ? void 0
        : t.call(n);
    if (!this._hasAnyDirtyMapValue(r)) return;
    let i = [];
    for (let [e, t] of this._calculationTreeCache)
      this._includeDirtySuperTablePro(t.unitId, t.formula) && i.push(e);
    i.length > 0 && e.markIndicesChanged(i);
  }
  _cacheCalculationTree(e, t) {
    let n = {
      unitId: t.unitId,
      subUnitId: t.subUnitId,
      formula: t.formula,
      row: t.row,
      column: t.column,
      rowCount: t.rowCount,
      columnCount: t.columnCount,
      refOffsetX: t.refOffsetX,
      refOffsetY: t.refOffsetY,
      formulaId: t.formulaId,
      featureId: t.featureId,
      getDirtyData: t.getDirtyData,
      hasDynamicDeps: t.addressFunctionNodes.length > 0,
      type: t.type,
    };
    (t.addressFunctionNodes.length > 0 ||
      this._cacheDependencyTreeModelRangeList) &&
      (n.rangeList = t.rangeList);
    let r = t.nodeData;
    ((r == null ? void 0 : r.node) != null &&
      this._calculationNodeDataCache.set(e, {
        node: r.node,
        refOffsetX: r.refOffsetX,
        refOffsetY: r.refOffsetY,
      }),
      this._calculationTreeCache.set(e, n));
  }
  _cacheCompressedVirtualCalculationTree(e, t, n, r) {
    (this._calculationTreeCache.set(e, {
      unitId: t.unitId,
      subUnitId: t.subUnitId,
      formula: t.formula,
      row: t.row + r,
      column: t.column + n,
      rowCount: t.rowCount,
      columnCount: t.columnCount,
      refOffsetX: n,
      refOffsetY: r,
      formulaId: t.formulaId,
      featureId: t.featureId,
      getDirtyData: null,
      hasDynamicDeps: !1,
      type: t.type,
    }),
      this._cacheDependencyTreeModelRangeList &&
        (this._calculationTreeCache.get(e).rangeList = this._getOffsetRangeList(
          t.rangeList,
          n,
          r,
        )),
      t.node != null &&
        this._calculationNodeDataCache.set(e, {
          node: t.node,
          refOffsetX: n,
          refOffsetY: r,
        }));
  }
  _getOffsetRangeList(e, t, n) {
    return t === 0 && n === 0
      ? e
      : e.map((e) => ({
          unitId: e.unitId,
          sheetId: e.sheetId,
          range: {
            startRow: e.range.startRow + n,
            endRow: e.range.endRow + n,
            startColumn: e.range.startColumn + t,
            endColumn: e.range.endColumn + t,
          },
        }));
  }
  _getAllDependencyJsonPro(e) {
    let t = this._dependencyManagerService,
      n = [];
    for (let [r, i] of e) {
      let a = [],
        o = [];
      (t.forEachPrecedentNodeByIndex(r, (t) => {
        e.has(t) && a.push(t);
      }),
        t.forEachDependentNodeByIndex(r, (t) => {
          e.has(t) && o.push(t);
        }),
        n.push({
          children: a,
          parents: o,
          treeId: r,
          formula: i.formula,
          row: i.row,
          column: i.column,
          unitId: i.unitId,
          subUnitId: i.subUnitId,
          refOffsetX: i.refOffsetX,
          refOffsetY: i.refOffsetY,
          rangeList: i.rangeList ?? [],
          refTreeId: void 0,
          formulaId: i.formulaId,
          featureId: i.featureId,
          type: i.type ?? this._inferDependencyTreeTypePro(i),
        }));
    }
    return n;
  }
  _inferDependencyTreeTypePro(e) {
    return e.featureId == null
      ? e.formulaId == null
        ? t.FormulaDependencyTreeType.NORMAL_FORMULA
        : t.FormulaDependencyTreeType.OTHER_FORMULA
      : t.FormulaDependencyTreeType.FEATURE_FORMULA;
  }
  _clearCalculationTreeCache(e, t) {
    for (let [n, r] of this._calculationTreeCache)
      r.unitId === e &&
        r.subUnitId === t &&
        (this._calculationTreeCache.delete(n),
        this._calculationNodeDataCache.delete(n),
        this._forcedRecalculationNodeIndices.delete(n));
  }
  _releaseDependencyTree(e) {
    if (e instanceof t.FormulaDependencyTreeVirtual) {
      e.dispose();
      return;
    }
    let n = e;
    (n.dispose(), (n.node = null));
  }
  _hasDirtyDefinedNames(e) {
    let t = Object.keys(e);
    for (let n = 0; n < t.length; n++) {
      let r = e[t[n]];
      if (r != null && Object.keys(r).length > 0) return !0;
    }
    return !1;
  }
  _syncForcedRecalculationNodeIndex(e, t) {
    return t.formula &&
      (this._hasForcedRecalculationFunction(t.formula) ||
        (t.node && this._detectForcedRecalculationNodePro(t.node)))
      ? (this._forcedRecalculationNodeIndices.add(e), !0)
      : (this._forcedRecalculationNodeIndices.delete(e), !1);
  }
  _hasForcedRecalculationFunction(e) {
    return /\b(?:RAND|RANDBETWEEN|NOW|TODAY)\s*\(/i.test(e);
  }
  _detectForcedRecalculationNodePro(e) {
    if (e.isForcedCalculateFunction()) return !0;
    let t = e.getChildren();
    for (let e = 0; e < t.length; e++)
      if (this._detectForcedRecalculationNodePro(t[e])) return !0;
    return !1;
  }
  _includeDirtyDefinedNamePro(e) {
    let t = this._runtimeService.currentUnitId;
    if (t == null) return !1;
    let n = this._currentConfigService.getDirtyDefinedNameMap()[t];
    if (n == null) return !1;
    let r = Object.keys(n);
    for (let t = 0; t < r.length; t++) if (e.indexOf(r[t]) > -1) return !0;
    return !1;
  }
  _includeDirtySuperTablePro(e, t) {
    var n, r, i;
    if (!t) return !1;
    let a =
      (n = (r = this._currentConfigService).getDirtySuperTableMap) == null ||
      (n = n.call(r)) == null
        ? void 0
        : n[e];
    return a == null ? !1 : (((i = Je(a)) == null ? void 0 : i.test(t)) ?? !1);
  }
  async _ensureTreeInitializedForDependencies(e) {
    if (e.isVirtual) return;
    let t = e;
    t.node || (t.formula && (await this._initialAstNodeAndRanges(t)));
  }
  _getFeatureFormulaDependencyNodes(e) {
    if (this._featureFormulaDirtyDependencies.length === 0 || e.length === 0)
      return [];
    let t = [];
    for (let n = 0; n < this._featureFormulaDirtyDependencies.length; n++) {
      let r = this._featureFormulaDirtyDependencies[n];
      this._rangesIntersectAny(e, r.dirtyRanges) && t.push(r.node);
    }
    return t;
  }
  _rangesIntersectAny(t, n) {
    for (let r = 0; r < t.length; r++) {
      let i = t[r];
      for (let t = 0; t < n.length; t++) {
        let r = n[t];
        if (
          i.unitId === r.unitId &&
          i.sheetId === r.sheetId &&
          e.Rectangle.intersects(i.range, r.range)
        )
          return !0;
      }
    }
    return !1;
  }
  async _initialAstNodeAndRanges(e) {
    let t = this._initializeAstNode(e),
      n = await this._getRangeListByNode({
        node: t,
        refOffsetX: e.refOffsetX,
        refOffsetY: e.refOffsetY,
      });
    e.pushRangeList(n);
  }
  _initializeAstNode(e) {
    this._runtimeService.setCurrent(
      e.row,
      e.column,
      e.rowCount,
      e.columnCount,
      e.subUnitId,
      e.unitId,
    );
    let n = (0, t.generateAstNode)(
      e.unitId,
      e.formula,
      this._lexer,
      this._astTreeBuilder,
      this._currentConfigService,
      e.subUnitId,
      e.column,
      e.row,
    );
    return (
      (e.node = n),
      (e.addressFunctionNodes = this._getAddressFunctionNodeList(n)),
      n
    );
  }
  async _initialDependencyRanges(e) {
    if (!(e.node || e.rangeList.length > 0)) {
      if (this._tryInitialStaticReferenceRanges(e)) {
        R(`static.hit`);
        return;
      }
      (R(`ast.init`), await this._initialAstNodeAndRanges(e));
    }
  }
  _tryInitialStaticReferenceRanges(e) {
    var n, r;
    let i = e.formula;
    if (!i || i.charCodeAt(0) !== 61) return (R(`static.skip.notFormula`), !1);
    let a = i.slice(1);
    if (
      a.indexOf(`[`) >= 0 ||
      a.indexOf(`]`) >= 0 ||
      a.indexOf(`{`) >= 0 ||
      a.indexOf(`}`) >= 0 ||
      a.indexOf(`#`) >= 0 ||
      Ve.test(a)
    )
      return (
        R(`static.skip.unsupportedSyntax`),
        z(`unsupportedSyntax`, i),
        !1
      );
    let o = this._replaceDoubleQuotedStrings(a),
      s = this._replaceQuotedSheetNames(o);
    if (qe(s) || !this._hasOnlyStaticReferenceSafeIdentifiers(s))
      return (R(`static.skip.identifier`), z(`identifier`, i), !1);
    let c = [],
      l =
        ((n = (r = this._currentConfigService).getSheetNameMap) == null
          ? void 0
          : n.call(r)) ?? {},
      u = /\bOFFSET\s*\(/i.test(o),
      d = !1,
      f = o;
    if (u) {
      let n = this._tryExtractStaticOffsetRanges(e, l, o);
      if (n == null) {
        if (!this._hasOnlyStaticOffsetBases(e, l, o))
          return (R(`static.skip.offset`), z(`offset`, i), !1);
        (this._initializeAstNode(e), (d = !0), R(`static.dynamicOffset`));
      } else c.push(...n);
      f = this._replaceFunctionFirstArguments(
        f,
        t.FUNCTION_NAMES_LOOKUP.OFFSET,
      );
    }
    for (let e of Ge) f = this._replaceFunctionFirstArguments(f, e);
    He.lastIndex = 0;
    let p;
    for (; (p = He.exec(f)) != null;) {
      if (!this._isStaticReferenceTokenBoundarySafe(f, p.index, He.lastIndex))
        continue;
      let t = this._tryCreateStaticColumnReferenceRange(e, l, p);
      if (t == null)
        return (R(`static.skip.referenceParse`), z(`referenceParse`, i), !1);
      c.push(t);
    }
    L.lastIndex = 0;
    let m;
    for (; (m = L.exec(f)) != null;) {
      if (!this._isStaticReferenceTokenBoundarySafe(f, m.index, L.lastIndex))
        continue;
      let t = this._tryCreateStaticReferenceRange(e, l, m);
      if (t == null)
        return (R(`static.skip.referenceParse`), z(`referenceParse`, i), !1);
      c.push(t);
    }
    return (
      d || (e.addressFunctionNodes = []),
      e.rangeList.push(...this._dedupeStaticReferenceRanges(c)),
      !0
    );
  }
  _replaceDoubleQuotedStrings(e) {
    let t = ``,
      n = !1;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (i === `"`) {
        if (((t += ` `), n && e[r + 1] === `"`)) {
          (r++, (t += ` `));
          continue;
        }
        n = !n;
        continue;
      }
      t += n ? ` ` : i;
    }
    return t;
  }
  _replaceQuotedSheetNames(e) {
    return e.replace(/'(?:(?:[^']|'')+)'(?=!)/g, (e) => ` `.repeat(e.length));
  }
  _hasOnlyStaticReferenceSafeIdentifiers(e) {
    Ue.lastIndex = 0;
    let t;
    for (; (t = Ue.exec(e)) != null;) {
      let n = t[0],
        r = t.index,
        i = Ue.lastIndex,
        a = this._nextNonSpaceChar(e, i);
      if (
        !(a === `(` || a === `!` || We.test(n)) &&
        !this._looksLikeA1ReferenceAt(e, r, i) &&
        !this._looksLikeColumnReferencePart(e, r, i)
      )
        return !1;
    }
    return !0;
  }
  _looksLikeA1ReferenceAt(e, t, n) {
    let r = e.slice(t, n),
      i = /^([A-Za-z]{1,3})([1-9]\d*)$/.exec(r);
    if (i && this._columnNameToIndex(i[1]) !== void 0) return !0;
    let a = n;
    return (
      e[a] === `$` && a++,
      /\d/.test(e[a] ?? ``) ? this._columnNameToIndex(r) !== void 0 : !1
    );
  }
  _looksLikeColumnReferencePart(e, t, n) {
    let r = e.slice(t, n);
    if (this._columnNameToIndex(r) === void 0) return !1;
    let i = e[t - 1] === `$` ? (e[t - 2] ?? ``) : (e[t - 1] ?? ``),
      a = e[n] === `$` ? (e[n + 1] ?? ``) : (e[n] ?? ``);
    return i === `:` || a === `:`;
  }
  _isStaticReferenceTokenBoundarySafe(e, t, n) {
    let r = e[t - 1] ?? ``,
      i = e[n] ?? ``;
    return !(/[A-Za-z0-9_.]/.test(r) || i === `(` || /[A-Za-z0-9_.]/.test(i));
  }
  _tryCreateStaticReferenceRange(e, n, r) {
    var i, a;
    let o = ((i = r[1]) == null ? void 0 : i.replace(/''/g, `'`)) ?? r[2],
      s = o == null ? e.subUnitId : (a = n[e.unitId]) == null ? void 0 : a[o];
    if (!s) return;
    let c = this._columnNameToIndex(r[3]),
      l = Number(r[4]) - 1,
      u = this._columnNameToIndex(r[5] ?? r[3]),
      d = Number(r[6] ?? r[4]) - 1,
      f = (0, t.getAbsoluteRefTypeWitString)(r[0]),
      p = f.endAbsoluteRefType ?? f.startAbsoluteRefType,
      m = this._getStaticReferenceSheetSize(e, s);
    if (!(
      c === void 0 ||
      u === void 0 ||
      l < 0 ||
      d < 0 ||
      Math.max(l, d) >= m.rowCount ||
      Math.max(c, u) >= m.columnCount
    ))
      return {
        unitId: e.unitId,
        sheetId: s,
        range: {
          startRow: Math.min(l, d),
          endRow: Math.max(l, d),
          startColumn: Math.min(c, u),
          endColumn: Math.max(c, u),
          startAbsoluteRefType: f.startAbsoluteRefType,
          endAbsoluteRefType: p,
        },
      };
  }
  _tryCreateStaticColumnReferenceRange(n, r, i) {
    var a, o;
    let s = ((a = i[1]) == null ? void 0 : a.replace(/''/g, `'`)) ?? i[2],
      c = s == null ? n.subUnitId : (o = r[n.unitId]) == null ? void 0 : o[s];
    if (!c) return;
    let l = this._columnNameToIndex(i[3]),
      u = this._columnNameToIndex(i[4]),
      d = (0, t.getAbsoluteRefTypeWitString)(i[0]);
    if (l === void 0 || u === void 0) return;
    let f = this._getStaticReferenceSheetSize(n, c);
    if (!(Math.max(l, u) >= f.columnCount || f.rowCount <= 0))
      return {
        unitId: n.unitId,
        sheetId: c,
        range: {
          startRow: 0,
          endRow: f.rowCount - 1,
          startColumn: Math.min(l, u),
          endColumn: Math.max(l, u),
          startAbsoluteRefType: d.startAbsoluteRefType,
          endAbsoluteRefType: d.endAbsoluteRefType,
          rangeType: e.RANGE_TYPE.COLUMN,
        },
      };
  }
  _tryExtractStaticOffsetRanges(e, t, n) {
    let r = this._extractFunctionCalls(n, `OFFSET`),
      i = [];
    for (let n = 0; n < r.length; n++) {
      let a = this._tryCreateStaticOffsetRange(e, t, r[n]);
      if (a == null) return;
      i.push(a);
    }
    return i;
  }
  _hasOnlyStaticOffsetBases(e, n, r) {
    let i = this._extractFunctionCalls(r, t.FUNCTION_NAMES_LOOKUP.OFFSET);
    return (
      i.length > 0 &&
      i.every((t) => this._tryParseSingleStaticReference(e, n, t[0]) != null)
    );
  }
  _replaceFunctionFirstArguments(e, t) {
    let n = e.split(``),
      r = e.toUpperCase(),
      i = t.toUpperCase(),
      a = 0;
    for (; a < e.length;) {
      let t = r.indexOf(i, a);
      if (t < 0) break;
      let o = e[t - 1] ?? ``,
        s = t + i.length;
      for (; e[s] === ` `;) s++;
      if (/[A-Za-z0-9_.]/.test(o) || e[s] !== `(`) {
        a = t + i.length;
        continue;
      }
      let c = this._findMatchingParen(e, s);
      if (c < 0) break;
      let l = 0,
        u = c;
      for (let t = s + 1; t < c; t++) {
        let n = e[t];
        if (n === `(`) l++;
        else if (n === `)`) l--;
        else if (n === `,` && l === 0) {
          u = t;
          break;
        }
      }
      (n.fill(` `, s + 1, u), (a = c + 1));
    }
    return n.join(``);
  }
  _tryCreateStaticOffsetRange(e, t, n) {
    if (n.length < 3) return;
    let r = this._tryParseSingleStaticReference(e, t, n[0]),
      i = this._tryInferOffsetRowSpan(e, t, n[1], r),
      a = this._tryParseInteger(n[2]),
      o = n[3] == null ? 1 : this._tryInferPositiveInteger(n[3]),
      s = n[4] == null ? 1 : this._tryInferPositiveInteger(n[4]);
    if (
      r == null ||
      i == null ||
      a == null ||
      o == null ||
      s == null ||
      o < 1 ||
      s < 1
    )
      return;
    let c = this._getStaticReferenceSheetSize(e, r.sheetId),
      l = r.range.startRow + i.startOffset,
      u = r.range.startRow + i.endOffset + o - 1,
      d = r.range.startColumn + a,
      f = d + s - 1;
    if (!(
      l < 0 ||
      u < l ||
      u >= c.rowCount ||
      d < 0 ||
      f < d ||
      f >= c.columnCount
    ))
      return {
        unitId: r.unitId,
        sheetId: r.sheetId,
        range: { startRow: l, endRow: u, startColumn: d, endColumn: f },
      };
  }
  _tryInferOffsetRowSpan(e, t, n, r) {
    let i = this._tryParseInteger(n);
    if (i != null) return { startOffset: i, endOffset: i };
    if (r == null) return;
    let a = this._extractFunctionCalls(n, `MATCH`)[0];
    if (a == null || a.length < 2) return;
    let o = this._tryParseSingleStaticReference(e, t, a[1]);
    if (o == null || o.sheetId !== r.sheetId || o.unitId !== r.unitId) return;
    let s = n.slice(n.toUpperCase().indexOf(`MATCH`));
    if (/\)\s*-\s*1\s*$/.test(s))
      return {
        startOffset: o.range.startRow - r.range.startRow,
        endOffset: o.range.endRow - r.range.startRow,
      };
  }
  _tryInferPositiveInteger(e) {
    let t = this._tryParseInteger(e);
    if (t != null) return t;
    let n = this._extractFunctionCalls(e, `ROW`)[0];
    if (n == null || n.length !== 1) return;
    let r = /^\s*\$?([1-9]\d*):\$?([1-9]\d*)\s*$/.exec(n[0]);
    if (r != null) return Math.max(Number(r[1]), Number(r[2]));
  }
  _tryParseInteger(e) {
    return /^\s*-?\d+\s*$/.exec(e) == null ? void 0 : Number(e);
  }
  _tryParseSingleStaticReference(e, t, n) {
    let r = n.trim();
    L.lastIndex = 0;
    let i = L.exec(r);
    if (i != null && i.index === 0 && L.lastIndex === r.length)
      return this._tryCreateStaticReferenceRange(e, t, i);
  }
  _extractFunctionCalls(e, t) {
    let n = [],
      r = e.toUpperCase(),
      i = t.toUpperCase(),
      a = 0;
    for (; a < e.length;) {
      let t = r.indexOf(i, a);
      if (t < 0) break;
      let o = e[t - 1] ?? ``,
        s = t + i.length;
      for (; e[s] === ` `;) s++;
      if (/[A-Za-z0-9_.]/.test(o) || e[s] !== `(`) {
        a = t + i.length;
        continue;
      }
      let c = this._findMatchingParen(e, s);
      if (c < 0) break;
      (n.push(this._splitTopLevelArguments(e.slice(s + 1, c))), (a = c + 1));
    }
    return n;
  }
  _findMatchingParen(e, t) {
    let n = 0;
    for (let r = t; r < e.length; r++) {
      let t = e[r];
      if (t === `(`) n++;
      else if (t === `)` && (n--, n === 0)) return r;
    }
    return -1;
  }
  _splitTopLevelArguments(e) {
    let t = [],
      n = 0,
      r = 0;
    for (let i = 0; i < e.length; i++) {
      let a = e[i];
      a === `(`
        ? n++
        : a === `)`
          ? n--
          : a === `,` && n === 0 && (t.push(e.slice(r, i).trim()), (r = i + 1));
    }
    return (t.push(e.slice(r).trim()), t);
  }
  _getStaticReferenceSheetSize(e, t) {
    if (t === e.subUnitId)
      return { rowCount: e.rowCount, columnCount: e.columnCount };
    let n = this._currentConfigService.getSheetRowColumnCount(e.unitId, t);
    return {
      rowCount: n.rowCount || e.rowCount,
      columnCount: n.columnCount || e.columnCount,
    };
  }
  _dedupeStaticReferenceRanges(t) {
    if (t.length < 2) return t;
    let n = new Set(),
      r = [];
    for (let i = 0; i < t.length; i++) {
      let a = t[i],
        o = a.range.startAbsoluteRefType ?? e.AbsoluteRefType.NONE,
        s = a.range.endAbsoluteRefType ?? o,
        c = a.range.rangeType ?? e.RANGE_TYPE.NORMAL,
        l = `${a.unitId}\0${a.sheetId}\0${a.range.startRow}\0${a.range.endRow}\0${a.range.startColumn}\0${a.range.endColumn}\0${o}\0${s}\0${c}`;
      n.has(l) || (n.add(l), r.push(a));
    }
    return r;
  }
  _columnNameToIndex(e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
      let r = e.charCodeAt(n),
        i = r >= 97 && r <= 122 ? r - 32 : r;
      if (i < 65 || i > 90) return;
      t = t * 26 + i - 64;
    }
    let n = t - 1;
    return n >= 0 && n < 16384 ? n : void 0;
  }
  _nextNonSpaceChar(e, t) {
    for (let n = t; n < e.length; n++) if (e[n] !== ` `) return e[n];
    return ``;
  }
  _createFDtree(e, n, r, i, a, o) {
    let { f: s } = o,
      c = new t.FormulaDependencyTree(
        (0, t.generateRandomDependencyTreeId)(this._dependencyManagerService),
      ),
      l = a[e][n];
    return (
      (c.formula = s),
      (c.unitId = e),
      (c.subUnitId = n),
      (c.row = r),
      (c.column = i),
      (c.rowCount = l.rowCount),
      (c.columnCount = l.columnCount),
      c
    );
  }
};
let Qe = class extends t.CalculateFormulaService {
  constructor(e, t, n, r, i, a, o, c) {
    (super(e, t, n, r, i, a, o),
      (this._externalReferenceDataLoader = c),
      s(this, `_dynamicRuntimeRanges`, void 0),
      s(this, `_runtimeExternalDataLoaded`, !1));
  }
  async execute(e) {
    (this._runtimeService.setFormulaExecuteStage(
      t.FormulaExecuteStageType.START,
    ),
      this._executionInProgressListener$.next(
        this._runtimeService.getRuntimeState(),
      ),
      this._currentConfigService.load(e),
      this._runtimeService.reset());
    let n = e.maxIteration || t.DEFAULT_CYCLE_REFERENCE_COUNT;
    ((this._isCalculateTreeModel = e.isCalculateTreeModel || !1),
      this._executeLock.acquire(`FORMULA_EXECUTION_LOCK`, async () => {
        (await this._executeStep(n),
          this._runtimeService.setFormulaExecuteStage(
            t.FormulaExecuteStageType.CALCULATION_COMPLETED,
          ),
          this._executionInProgressListener$.next(
            this._runtimeService.getRuntimeState(),
          ),
          this._executionCompleteListener$.next(
            this._runtimeService.getAllRuntimeData(),
          ),
          t.CELL_INVERTED_INDEX_CACHE.clear(),
          this._runtimeService.reset());
      }));
  }
  async _executeStep(e = t.DEFAULT_CYCLE_REFERENCE_COUNT) {
    let n = await this._apply(!1, e);
    if (n == null) return;
    let { arrayFormulaRange: r } = n,
      { dirtyRanges: i, excludedCell: a } =
        this._getArrayFormulaDirtyRangeAndExcludedRange(r, {});
    return i == null || i.length === 0
      ? !0
      : (t.FORMULA_REF_TO_ARRAY_CACHE.clear(),
        this._currentConfigService.loadDirtyRangesAndExcludedCell(i, a),
        await this._apply(!0, e),
        !0);
  }
  async _apply(e = !1, n = t.DEFAULT_CYCLE_REFERENCE_COUNT) {
    (this._setFormulaExecuteStage(
      e,
      t.FormulaExecuteStageType.START_DEPENDENCY,
      t.FormulaExecuteStageType.START_DEPENDENCY_ARRAY_FORMULA,
    ),
      this._executionInProgressListener$.next(
        this._runtimeService.getRuntimeState(),
      ));
    let r = this._configService.getConfig(t.ENGINE_FORMULA_PLUGIN_CONFIG_KEY),
      i = (r == null ? void 0 : r.intervalCount) || t.DEFAULT_INTERVAL_COUNT,
      a = this._formulaDependencyGenerator;
    try {
      let { calculationOrderResult: r, dependencyTree: o } =
          await a.generatePro(this._isCalculateTreeModel),
        s = this._getCalculationPlanTreeCount(r, o, n);
      (r.hasCycle && this._runtimeService.enableCycleDependency(),
        this._setFormulaExecuteStage(
          e,
          t.FormulaExecuteStageType.START_CALCULATION,
          t.FormulaExecuteStageType.START_CALCULATION_ARRAY_FORMULA,
        ),
        this._setTotalFormulasToCalculate(e, s),
        this._executionInProgressListener$.next(
          this._runtimeService.getRuntimeState(),
        ));
      let c = [],
        l = [],
        u = new Set(),
        d = !1,
        f = 0,
        p = 0;
      for (this._runtimeService.setFormulaCycleIndex(0); ;) {
        let m = !1,
          h = !1;
        if (
          (await this._forEachCalculationPlanTree(
            r,
            o,
            n,
            async (t, r, o, s) => {
              if (
                (this._runtimeService.setFormulaCycleIndex(o ?? 0),
                await this._waitForExecutionSlot(f, i, e, t, c))
              )
                return ((d = !0), !1);
              if (s) {
                (u.has(r) || (u.add(r), l.push(r)), f++);
                return;
              }
              let p = await this._calculateDependencyTree(t, r, a, n),
                g = this._runtimeExternalDataLoaded;
              ((this._runtimeExternalDataLoaded = !1),
                (h ||= g),
                p &&
                  (g || this._shouldRescheduleAfterDynamicChange(a, r, u)) &&
                  (m = !0),
                u.has(r) || (u.add(r), l.push(r)),
                f++);
            },
          ),
          (r.calculationForest.length = 0),
          d || !m)
        )
          break;
        if ((p++, p > 8)) throw Error(`Dynamic dependency did not stabilize`);
        (h && t.FORMULA_REF_TO_ARRAY_CACHE.clear(),
          a.clearCachedCalculationNodeData(),
          (r = a.getCalculationOrder()),
          r.hasCycle && this._runtimeService.enableCycleDependency(),
          (s = this._getCalculationPlanTreeCount(r, o, n)),
          this._setTotalFormulasToCalculate(e, s));
      }
      for (let e = 0; e < c.length; e++) c[e]();
      return (
        l.length > 0 && a.clearCalculatedDirty(l),
        d
          ? void 0
          : (s > 0 || l.length > 0
              ? this._runtimeService.markedAsSuccessfullyExecuted()
              : e || this._runtimeService.markedAsNoFunctionsExecuted(),
            this._runtimeService.getAllRuntimeData())
      );
    } finally {
      (a.clearCachedCalculationNodeData(),
        a.clearCachedCalculationTree(),
        (this._dynamicRuntimeRanges = void 0));
    }
  }
  _setFormulaExecuteStage(e, t, n) {
    this._runtimeService.setFormulaExecuteStage(e ? n : t);
  }
  _setTotalFormulasToCalculate(e, t) {
    if (e) {
      this._runtimeService.setTotalArrayFormulasToCalculate(t);
      return;
    }
    this._runtimeService.setTotalFormulasToCalculate(t);
  }
  _shouldRescheduleAfterDynamicChange(e, t, n) {
    let r = e;
    return (
      typeof r.hasUncalculatedDirtyPrecedentByIndex != `function` ||
      r.hasUncalculatedDirtyPrecedentByIndex(t, n)
    );
  }
  async _forEachCalculationPlanTree(e, n, r, i) {
    let a = Math.max(r, 1);
    for (let o = 0; o < e.calculationForest.length; o++) {
      let s = e.calculationForest[o],
        c =
          s.hasCycle &&
          r <= t.DEFAULT_CYCLE_REFERENCE_COUNT &&
          this._calculationPlanHasSelfReference(s);
      for (let e = 0; e < s.plan.length; e++) {
        let r = s.plan[e];
        if (r.type === `node`) {
          let e = n.get(r.nodeIndex);
          if (e != null && (await i(e, r.nodeIndex, void 0, !1)) === !1) return;
          continue;
        }
        if (r.type === `nodes`) {
          for (let e = 0; e < r.nodeIndices.length; e++) {
            let t = r.nodeIndices[e],
              a = n.get(t);
            if (a != null && (await i(a, t, void 0, !1)) === !1) return;
          }
          r.nodeIndices.length = 0;
          continue;
        }
        for (let e = 0; e < a; e++) {
          e > 0 && t.FORMULA_REF_TO_ARRAY_CACHE.clear();
          for (let t = 0; t < r.nodeIndices.length; t++) {
            let a = r.nodeIndices[t],
              o = n.get(a);
            if (o != null && (await i(o, a, e, c)) === !1) return;
          }
        }
      }
    }
  }
  _calculationPlanHasSelfReference(e) {
    return e.plan.some((e) => e.type === `cycle` && e.nodeIndices.length === 1);
  }
  _getCalculationPlanTreeCount(e, t, n) {
    let r = Math.max(n, 1),
      i = 0;
    for (let n = 0; n < e.calculationForest.length; n++) {
      let a = e.calculationForest[n];
      for (let e = 0; e < a.plan.length; e++) {
        let n = a.plan[e];
        if (n.type === `node`) {
          t.has(n.nodeIndex) && i++;
          continue;
        }
        if (n.type === `nodes`) {
          for (let e = 0; e < n.nodeIndices.length; e++)
            t.has(n.nodeIndices[e]) && i++;
          continue;
        }
        let o = 0;
        for (let e = 0; e < n.nodeIndices.length; e++)
          t.has(n.nodeIndices[e]) && o++;
        i += o * r;
      }
    }
    return i;
  }
  _getDynamicResolver() {
    let e = this._dynamicRuntimeRanges;
    if (e == null) return;
    let t = e
      .map((e) => this._getRangeSignature(e))
      .sort()
      .join(`|`);
    return () => ({
      signature: t,
      ranges: e,
      status: e.length > 0 ? `resolved` : `unknown`,
    });
  }
  async _refreshDynamicDepsAfterCalculate(e, t, n, r) {
    if (n.hasDynamicDeps === !1 || !e.hasDynamicDepsByIndex(t))
      return { dynamicChanged: !1, hasSelfReference: !1 };
    let i = this._collectAddressFunctionRuntimeReferences(r);
    if (i.length === 0) return { dynamicChanged: !1, hasSelfReference: !1 };
    let a = await Promise.all(
      i.map((e) => {
        var t, r;
        return (t = (r = this._externalReferenceDataLoader).loadRuntimeRange) ==
          null
          ? void 0
          : t.call(r, { hostUnitId: n.unitId, ...e });
      }),
    );
    this._runtimeExternalDataLoaded = a.some((e) => e === !0);
    let o = i.map(({ unitId: e, sheetId: t, range: n }) => ({
        unitId: e,
        sheetId: t,
        range: n,
      })),
      s =
        n.formulaId == null &&
        o.some(
          ({ unitId: e, sheetId: t, range: r }) =>
            e === n.unitId &&
            t === n.subUnitId &&
            n.row >= r.startRow &&
            n.row <= r.endRow &&
            n.column >= r.startColumn &&
            n.column <= r.endColumn,
        );
    this._dynamicRuntimeRanges = o;
    try {
      let n = this._getDynamicResolver();
      return n == null
        ? { dynamicChanged: !1, hasSelfReference: s }
        : {
            dynamicChanged:
              e.refreshDynamicDepsByIndex(t, n) ||
              this._runtimeExternalDataLoaded,
            hasSelfReference: s,
          };
    } finally {
      this._dynamicRuntimeRanges = void 0;
    }
  }
  _collectAddressFunctionRuntimeReferences(e) {
    let t = [];
    return (this._collectAddressFunctionRuntimeReferencesInternal(e, t), t);
  }
  _collectAddressFunctionRuntimeReferencesInternal(e, n) {
    if (e.isAddress()) {
      let r = e.getValue();
      r instanceof t.BaseReferenceObject &&
        n.push({
          ...r.toUnitRange(),
          sheetName: r.getForcedSheetName() || void 0,
        });
    }
    for (let t of e.getChildren())
      this._collectAddressFunctionRuntimeReferencesInternal(t, n);
  }
  _getRangeSignature(e) {
    return [
      e.unitId,
      e.sheetId,
      e.range.startRow,
      e.range.endRow,
      e.range.startColumn,
      e.range.endColumn,
    ].join(`:`);
  }
  async _waitForExecutionSlot(n, r, i, a, o) {
    return n % r === 0
      ? (await new Promise((t) => {
          let n = (0, e.requestImmediateMacroTask)(t);
          o.push(n);
        }),
        i
          ? (this._runtimeService.setFormulaExecuteStage(
              t.FormulaExecuteStageType.CURRENTLY_CALCULATING_ARRAY_FORMULA,
            ),
            this._runtimeService.setCompletedArrayFormulasCount(n + 1))
          : (this._runtimeService.setFormulaExecuteStage(
              t.FormulaExecuteStageType.CURRENTLY_CALCULATING,
            ),
            this._runtimeService.setCompletedFormulasCount(n + 1)),
        this._executionInProgressListener$.next(
          this._runtimeService.getRuntimeState(),
        ),
        this._runtimeService.isStopExecution() ||
        (a.formula == null && a.getDirtyData == null)
          ? (this._runtimeService.setFormulaExecuteStage(
              t.FormulaExecuteStageType.IDLE,
            ),
            this._runtimeService.markedAsStopFunctionsExecuted(),
            this._executionCompleteListener$.next(
              this._runtimeService.getAllRuntimeData(),
            ),
            !0)
          : !1)
      : !1;
  }
  async _calculateDependencyTree(e, n, r, i = t.DEFAULT_CYCLE_REFERENCE_COUNT) {
    let a = e.getDirtyData;
    if (
      (this._runtimeService.setCurrent(
        e.row,
        e.column,
        e.rowCount,
        e.columnCount,
        e.subUnitId,
        e.unitId,
      ),
      a != null && e.featureId != null)
    ) {
      let t = e.featureId,
        { runtimeCellData: n, dirtyRanges: r } = a(
          this._currentConfigService.getDirtyData(),
          this._runtimeService.getAllRuntimeData(),
        );
      return (
        this._runtimeService.setRuntimeFeatureCellData(t, n),
        this._runtimeService.setRuntimeFeatureRange(t, r),
        !1
      );
    }
    let o = this._getCalculationNodeData(e, n, r),
      s = o.node,
      c;
    try {
      let a = this._setFunctionRefInfoForTree(e);
      try {
        c = this._interpreter.checkAsyncNode(o.node)
          ? await this._interpreter.executeAsync(o)
          : this._interpreter.execute(o);
      } finally {
        a();
      }
      let { dynamicChanged: l, hasSelfReference: u } =
        await this._refreshDynamicDepsAfterCalculate(r, n, e, s);
      return (
        (!u || i > t.DEFAULT_CYCLE_REFERENCE_COUNT) &&
          (e.formulaId == null
            ? this._runtimeService.setRuntimeData(c)
            : this._runtimeService.setRuntimeOtherData(
                e.formulaId,
                e.refOffsetX,
                e.refOffsetY,
                c,
              )),
        l
      );
    } finally {
      s.resetCalculationState();
    }
  }
  _setFunctionRefInfoForTree(e) {
    var t;
    if (e.formulaId != null) return () => {};
    let n =
      (t = this._currentConfigService.getArrayFormulaRange()[e.unitId]) ==
        null ||
      (t = t[e.subUnitId]) == null ||
      (t = t[e.row]) == null
        ? void 0
        : t[e.column];
    return n == null
      ? this._runtimeService.setFunctionRefInfoOverride(1, 1)
      : this._runtimeService.setFunctionRefInfoOverride(
          n.endRow - n.startRow + 1,
          n.endColumn - n.startColumn + 1,
        );
  }
  _getCalculationNodeData(e, n, r) {
    let i = r.getCachedCalculationNodeData(n);
    return (i == null ? void 0 : i.node) == null
      ? {
          node: (0, t.generateAstNode)(
            e.unitId,
            e.formula,
            this._lexer,
            this._astTreeBuilder,
            this._currentConfigService,
            e.subUnitId,
            e.column - e.refOffsetX,
            e.row - e.refOffsetY,
          ),
          refOffsetX: e.refOffsetX,
          refOffsetY: e.refOffsetY,
        }
      : i;
  }
};
Qe = k(
  [
    O(0, e.IConfigService),
    O(1, (0, e.Inject)(t.Lexer)),
    O(2, t.IFormulaCurrentConfigService),
    O(3, t.IFormulaRuntimeService),
    O(4, t.IFormulaDependencyGenerator),
    O(5, (0, e.Inject)(t.Interpreter)),
    O(6, (0, e.Inject)(t.AstTreeBuilder)),
    O(7, t.IFormulaExternalReferenceDataLoader),
  ],
  Qe,
);
var $e = class {
  constructor(e, t) {
    (s(this, `maxRows`, void 0),
      s(this, `maxCols`, void 0),
      s(this, `sheetSize`, void 0),
      s(this, `_sheetKeyById`, new Map()),
      s(this, `_sheetIdByKey`, []),
      (this.maxRows = e),
      (this.maxCols = t),
      (this.sheetSize = e * t));
  }
  reset() {
    (this._sheetKeyById.clear(), (this._sheetIdByKey.length = 0));
  }
  encodeCell(e, t, n, r) {
    return this.encodeSheet(e, t) * this.sheetSize + n * this.maxCols + r;
  }
  decodeCell(e) {
    let t = Math.floor(e / this.sheetSize),
      n = e - t * this.sheetSize,
      r = Math.floor(n / this.maxCols),
      i = n - r * this.maxCols,
      { unitId: a, sheetId: o } = this.decodeSheetKey(t);
    return { unitId: a, sheetId: o, row: r, col: i };
  }
  encodeSheet(e, t) {
    let n = `${e}\0${t}`,
      r = this._sheetKeyById.get(n);
    if (r !== void 0) return r;
    let i = this._sheetIdByKey.length;
    return (
      this._sheetKeyById.set(n, i),
      this._sheetIdByKey.push({ unitId: e, sheetId: t }),
      i
    );
  }
  decodeSheetKey(e) {
    let t = this._sheetIdByKey[e];
    if (!t) throw Error(`Unknown sheet key: ${e}`);
    return t;
  }
  encodeRow(e, t, n) {
    return this.encodeSheet(e, t) * this.maxRows + n;
  }
  encodeRowBySheetKey(e, t) {
    return e * this.maxRows + t;
  }
  decodeRowKey(e) {
    let t = Math.floor(e / this.maxRows),
      n = e - t * this.maxRows;
    return { sheetKey: t, ...this.decodeSheetKey(t), row: n };
  }
  encodeCol(e, t, n) {
    return this.encodeSheet(e, t) * this.maxCols + n;
  }
  encodeColBySheetKey(e, t) {
    return e * this.maxCols + t;
  }
  decodeColKey(e) {
    let t = Math.floor(e / this.maxCols),
      n = e - t * this.maxCols;
    return { sheetKey: t, ...this.decodeSheetKey(t), col: n };
  }
};
function et(e) {
  if (typeof e != `number`)
    throw TypeError(`CellFormula node id must be a numeric CellId`);
}
function U(e) {
  let { startRow: t, endRow: n, startColumn: r, endColumn: i } = e.range;
  if (t <= n && r <= i) return e;
  let a = t < n ? t : n,
    o = t < n ? n : t,
    s = r < i ? r : i,
    c = r < i ? i : r;
  return {
    ...e,
    range: { ...e.range, startRow: a, endRow: o, startColumn: s, endColumn: c },
  };
}
function W(e) {
  return e.range.endRow - e.range.startRow + 1;
}
function G(e) {
  return e.range.endColumn - e.range.startColumn + 1;
}
function tt(e, t) {
  return (
    e.unitId === t.unitId &&
    e.sheetId === t.sheetId &&
    e.range.startRow <= t.row &&
    t.row <= e.range.endRow &&
    e.range.startColumn <= t.col &&
    t.col <= e.range.endColumn
  );
}
function nt(e) {
  if (!e || e.length === 0) return [];
  if (e.length === 1) return [e[0]];
  let t = e.slice().sort((e, t) => e - t),
    n = 1;
  for (let e = 1; e < t.length; e++) t[e] !== t[n - 1] && (t[n++] = t[e]);
  return ((t.length = n), t);
}
function K(e, t, n) {
  let r = e.get(t);
  (r || ((r = []), e.set(t, r)), r.push(n));
}
function rt(e, t) {
  let n = e.indexOf(t);
  if (n < 0) return !1;
  let r = e.pop();
  return (n < e.length && (e[n] = r), !0);
}
function q(e, t, n) {
  let r = e.get(t);
  r && (rt(r, n), r.length === 0 && e.delete(t));
}
function it(e, t) {
  if (e === void 0) return t;
  if (typeof e == `number`) return e === t ? e : [e, t];
  for (let n = 0; n < e.length; n++) if (e[n] === t) return e;
  return (e.push(t), e);
}
function at(e, t) {
  if (e === void 0) return;
  if (typeof e == `number`) return e === t ? void 0 : e;
  let n = e.indexOf(t);
  if (n < 0) return e;
  if (e.length === 1) return;
  if (e.length === 2) return e[1 - n];
  let r = e.pop();
  return (n < e.length && (e[n] = r), e);
}
function J(e, t) {
  if (e !== void 0) {
    if (typeof e == `number`) {
      t(e);
      return;
    }
    for (let n = 0; n < e.length; n++) t(e[n]);
  }
}
function ot(e, t, n) {
  let r = it(e.get(t), n);
  e.set(t, r);
}
function Y(e, t, n) {
  let r = e.get(t);
  if (r === void 0) return;
  let i = at(r, n);
  i === void 0 ? e.delete(t) : e.set(t, i);
}
function X(e, t) {
  if (e.length >= t) return e;
  let n = Math.max(16, e.length);
  for (; n < t;) n *= 2;
  let r = new Uint8Array(n);
  return (r.set(e), r);
}
function Z(e, t) {
  if (e.length >= t) return e;
  let n = Math.max(16, e.length);
  for (; n < t;) n *= 2;
  let r = new Uint32Array(n);
  return (r.set(e), r);
}
function st(e) {
  if (!e || e.length === 0) return [];
  let t = new Set(),
    n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = `${i.type}:${String(i.id)}`;
    t.has(a) || (t.add(a), n.push(i));
  }
  return n;
}
function ct(e) {
  if (e.length <= 1) {
    let t = Array(e.length);
    for (let n = 0; n < e.length; n++) t[n] = U(e[n]);
    return t;
  }
  let t = Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = U(e[n]);
  return ut(lt(t));
}
function lt(e) {
  let t = e.slice().sort((e, t) => {
      let n = e.unitId.localeCompare(t.unitId);
      if (n !== 0) return n;
      let r = e.sheetId.localeCompare(t.sheetId);
      return r === 0
        ? e.range.startRow === t.range.startRow
          ? e.range.endRow === t.range.endRow
            ? e.range.startColumn === t.range.startColumn
              ? e.range.endColumn - t.range.endColumn
              : e.range.startColumn - t.range.startColumn
            : e.range.endRow - t.range.endRow
          : e.range.startRow - t.range.startRow
        : r;
    }),
    n = [];
  for (let e of t) {
    let t = n[n.length - 1];
    t &&
    t.unitId === e.unitId &&
    t.sheetId === e.sheetId &&
    t.range.startRow === e.range.startRow &&
    t.range.endRow === e.range.endRow &&
    e.range.startColumn <= t.range.endColumn + 1
      ? e.range.endColumn > t.range.endColumn &&
        (t.range.endColumn = e.range.endColumn)
      : n.push({ ...e, range: { ...e.range } });
  }
  return n;
}
function ut(e) {
  let t = e.slice().sort((e, t) => {
      let n = e.unitId.localeCompare(t.unitId);
      if (n !== 0) return n;
      let r = e.sheetId.localeCompare(t.sheetId);
      return r === 0
        ? e.range.startColumn === t.range.startColumn
          ? e.range.endColumn === t.range.endColumn
            ? e.range.startRow === t.range.startRow
              ? e.range.endRow - t.range.endRow
              : e.range.startRow - t.range.startRow
            : e.range.endColumn - t.range.endColumn
          : e.range.startColumn - t.range.startColumn
        : r;
    }),
    n = [];
  for (let e of t) {
    let t = n[n.length - 1];
    t &&
    t.unitId === e.unitId &&
    t.sheetId === e.sheetId &&
    t.range.startColumn === e.range.startColumn &&
    t.range.endColumn === e.range.endColumn &&
    e.range.startRow <= t.range.endRow + 1
      ? e.range.endRow > t.range.endRow && (t.range.endRow = e.range.endRow)
      : n.push({ ...e, range: { ...e.range } });
  }
  return n;
}
var dt = class {
    constructor(e, t) {
      ((this._codec = e),
        (this._indexToNodeId = t),
        s(this, `_rowBuckets`, new Map()),
        s(this, `_colBuckets`, new Map()));
    }
    addFormulaCell(e, t) {
      let n = this._codec.decodeCell(e);
      (K(
        this._rowBuckets,
        this._codec.encodeRow(n.unitId, n.sheetId, n.row),
        t,
      ),
        K(
          this._colBuckets,
          this._codec.encodeCol(n.unitId, n.sheetId, n.col),
          t,
        ));
    }
    addFormulaCellByPosition(e, t, n, r) {
      (K(this._rowBuckets, this._codec.encodeRowBySheetKey(e, t), r),
        K(this._colBuckets, this._codec.encodeColBySheetKey(e, n), r));
    }
    removeFormulaCell(e, t) {
      let n = this._codec.decodeCell(e);
      (q(
        this._rowBuckets,
        this._codec.encodeRow(n.unitId, n.sheetId, n.row),
        t,
      ),
        q(
          this._colBuckets,
          this._codec.encodeCol(n.unitId, n.sheetId, n.col),
          t,
        ));
    }
    forEachFormulaInRange(e, t) {
      let n = U(e);
      return W(n) <= G(n) ? this._scanRows(n, t) : this._scanCols(n, t);
    }
    _scanRows(e, t) {
      if (W(e) <= this._rowBuckets.size) {
        for (let n = e.range.startRow; n <= e.range.endRow; n++)
          if (
            this._scanRowBucket(
              this._codec.encodeRow(e.unitId, e.sheetId, n),
              e,
              t,
            ) === !1
          )
            return !1;
        return !0;
      }
      for (let [n] of this._rowBuckets) {
        let r = this._codec.decodeRowKey(n);
        if (
          r.unitId === e.unitId &&
          r.sheetId === e.sheetId &&
          e.range.startRow <= r.row &&
          r.row <= e.range.endRow &&
          this._scanRowBucket(n, e, t) === !1
        )
          return !1;
      }
      return !0;
    }
    _scanCols(e, t) {
      if (G(e) <= this._colBuckets.size) {
        for (let n = e.range.startColumn; n <= e.range.endColumn; n++)
          if (
            this._scanColBucket(
              this._codec.encodeCol(e.unitId, e.sheetId, n),
              e,
              t,
            ) === !1
          )
            return !1;
        return !0;
      }
      for (let [n] of this._colBuckets) {
        let r = this._codec.decodeColKey(n);
        if (
          r.unitId === e.unitId &&
          r.sheetId === e.sheetId &&
          e.range.startColumn <= r.col &&
          r.col <= e.range.endColumn &&
          this._scanColBucket(n, e, t) === !1
        )
          return !1;
      }
      return !0;
    }
    _scanRowBucket(e, t, n) {
      let r = this._rowBuckets.get(e);
      if (!r) return !0;
      for (let e = 0; e < r.length; e++) {
        let i = r[e],
          a = this._indexToNodeId[i],
          o = this._codec.decodeCell(a);
        if (
          o.unitId === t.unitId &&
          o.sheetId === t.sheetId &&
          t.range.startColumn <= o.col &&
          o.col <= t.range.endColumn &&
          n(i) === !1
        )
          return !1;
      }
      return !0;
    }
    _scanColBucket(e, t, n) {
      let r = this._colBuckets.get(e);
      if (!r) return !0;
      for (let e = 0; e < r.length; e++) {
        let i = r[e],
          a = this._indexToNodeId[i],
          o = this._codec.decodeCell(a);
        if (
          o.unitId === t.unitId &&
          o.sheetId === t.sheetId &&
          t.range.startRow <= o.row &&
          o.row <= t.range.endRow &&
          n(i) === !1
        )
          return !1;
      }
      return !0;
    }
  },
  ft = class {
    constructor(e, t) {
      ((this._codec = e),
        (this._pointScanCellLimit = t),
        s(this, `_rowCells`, new Map()),
        s(this, `_colCells`, new Map()));
    }
    add(e) {
      let t = this._codec.decodeCell(e);
      (K(this._rowCells, this._codec.encodeRow(t.unitId, t.sheetId, t.row), e),
        K(
          this._colCells,
          this._codec.encodeCol(t.unitId, t.sheetId, t.col),
          e,
        ));
    }
    remove(e) {
      let t = this._codec.decodeCell(e);
      (q(this._rowCells, this._codec.encodeRow(t.unitId, t.sheetId, t.row), e),
        q(
          this._colCells,
          this._codec.encodeCol(t.unitId, t.sheetId, t.col),
          e,
        ));
    }
    forEachCellInRange(e, t) {
      let n = U(e),
        r = W(n),
        i = G(n);
      if (this._isSmallArea(r, i)) {
        for (let e = n.range.startRow; e <= n.range.endRow; e++)
          for (let r = n.range.startColumn; r <= n.range.endColumn; r++)
            t(this._codec.encodeCell(n.unitId, n.sheetId, e, r));
        return;
      }
      Math.min(r, this._rowCells.size) <= Math.min(i, this._colCells.size)
        ? this._scanRows(n, t)
        : this._scanCols(n, t);
    }
    _isSmallArea(e, t) {
      return e <= 0 || t <= 0
        ? !0
        : e > this._pointScanCellLimit
          ? !1
          : e * t <= this._pointScanCellLimit;
    }
    _scanRows(e, t) {
      if (W(e) <= this._rowCells.size) {
        for (let n = e.range.startRow; n <= e.range.endRow; n++)
          this._scanRowBucket(
            this._codec.encodeRow(e.unitId, e.sheetId, n),
            e,
            t,
          );
        return;
      }
      for (let [n] of this._rowCells) {
        let r = this._codec.decodeRowKey(n);
        r.unitId === e.unitId &&
          r.sheetId === e.sheetId &&
          e.range.startRow <= r.row &&
          r.row <= e.range.endRow &&
          this._scanRowBucket(n, e, t);
      }
    }
    _scanCols(e, t) {
      if (G(e) <= this._colCells.size) {
        for (let n = e.range.startColumn; n <= e.range.endColumn; n++)
          this._scanColBucket(
            this._codec.encodeCol(e.unitId, e.sheetId, n),
            e,
            t,
          );
        return;
      }
      for (let [n] of this._colCells) {
        let r = this._codec.decodeColKey(n);
        r.unitId === e.unitId &&
          r.sheetId === e.sheetId &&
          e.range.startColumn <= r.col &&
          r.col <= e.range.endColumn &&
          this._scanColBucket(n, e, t);
      }
    }
    _scanRowBucket(e, t, n) {
      let r = this._rowCells.get(e);
      if (r)
        for (let e = 0; e < r.length; e++) {
          let i = r[e],
            a = this._codec.decodeCell(i);
          a.unitId === t.unitId &&
            a.sheetId === t.sheetId &&
            t.range.startColumn <= a.col &&
            a.col <= t.range.endColumn &&
            n(i);
        }
    }
    _scanColBucket(e, t, n) {
      let r = this._colCells.get(e);
      if (r)
        for (let e = 0; e < r.length; e++) {
          let i = r[e],
            a = this._codec.decodeCell(i);
          a.unitId === t.unitId &&
            a.sheetId === t.sheetId &&
            t.range.startRow <= a.row &&
            a.row <= t.range.endRow &&
            n(i);
        }
    }
  },
  pt = class {
    constructor(e, t, n) {
      ((this._codec = e),
        (this._maxIndexedSpan = n),
        s(this, `_wholeSheet`, new Map()),
        s(this, `_wholeCol`, new Map()),
        s(this, `_wholeRow`, new Map()),
        s(this, `_rowBuckets`, new Map()),
        s(this, `_colBuckets`, new Map()),
        s(this, `_largeRangeIds`, []),
        s(this, `_sheetArr`, void 0),
        s(this, `_startRowArr`, void 0),
        s(this, `_endRowArr`, void 0),
        s(this, `_startColArr`, void 0),
        s(this, `_endColArr`, void 0),
        s(this, `_nodeArr`, void 0),
        s(this, `_kindArr`, void 0),
        s(this, `_activeArr`, void 0),
        s(this, `_rangeSeenEpochArr`, void 0),
        s(this, `_rangeEpoch`, 1),
        s(this, `_nextRangeId`, 0),
        s(this, `_freeRangeIds`, []),
        s(this, `_nodeToRangeIds`, new Map()),
        s(this, `_nodeToWholeSheetKeys`, new Map()),
        s(this, `_nodeToWholeColKeys`, new Map()),
        s(this, `_nodeToWholeRowKeys`, new Map()));
      let r = Math.max(16, t);
      ((this._sheetArr = new Uint32Array(r)),
        (this._startRowArr = new Uint32Array(r)),
        (this._endRowArr = new Uint32Array(r)),
        (this._startColArr = new Uint32Array(r)),
        (this._endColArr = new Uint32Array(r)),
        (this._nodeArr = new Uint32Array(r)),
        (this._kindArr = new Uint8Array(r)),
        (this._activeArr = new Uint8Array(r)),
        (this._rangeSeenEpochArr = new Uint32Array(r)));
    }
    reserveCapacity(e) {
      this._ensureRangeCapacity(e);
    }
    addRange(e, t) {
      let n = U(t),
        r = this._codec.encodeSheet(n.unitId, n.sheetId),
        i = W(n),
        a = G(n),
        o = a === this._codec.maxCols,
        s = i === this._codec.maxRows;
      if (o && s) {
        (ot(this._wholeSheet, r, e), K(this._nodeToWholeSheetKeys, e, r));
        return;
      }
      if (s) {
        for (let t = n.range.startColumn; t <= n.range.endColumn; t++) {
          let n = this._codec.encodeColBySheetKey(r, t);
          (ot(this._wholeCol, n, e), K(this._nodeToWholeColKeys, e, n));
        }
        return;
      }
      if (o) {
        for (let t = n.range.startRow; t <= n.range.endRow; t++) {
          let n = this._codec.encodeRowBySheetKey(r, t);
          (ot(this._wholeRow, n, e), K(this._nodeToWholeRowKeys, e, n));
        }
        return;
      }
      let c = Math.min(i, a),
        l = this._allocRangeId();
      if ((this._setRangeMeta(l, e, n), c > this._maxIndexedSpan))
        ((this._kindArr[l] = 3), this._largeRangeIds.push(l));
      else if (i <= a) {
        this._kindArr[l] = 1;
        for (let e = n.range.startRow; e <= n.range.endRow; e++)
          K(this._rowBuckets, this._codec.encodeRowBySheetKey(r, e), l);
      } else {
        this._kindArr[l] = 2;
        for (let e = n.range.startColumn; e <= n.range.endColumn; e++)
          K(this._colBuckets, this._codec.encodeColBySheetKey(r, e), l);
      }
      K(this._nodeToRangeIds, e, l);
    }
    removeNode(e) {
      let t = this._nodeToWholeSheetKeys.get(e);
      if (t) {
        for (let n = 0; n < t.length; n++) Y(this._wholeSheet, t[n], e);
        this._nodeToWholeSheetKeys.delete(e);
      }
      let n = this._nodeToWholeColKeys.get(e);
      if (n) {
        for (let t = 0; t < n.length; t++) Y(this._wholeCol, n[t], e);
        this._nodeToWholeColKeys.delete(e);
      }
      let r = this._nodeToWholeRowKeys.get(e);
      if (r) {
        for (let t = 0; t < r.length; t++) Y(this._wholeRow, r[t], e);
        this._nodeToWholeRowKeys.delete(e);
      }
      let i = this._nodeToRangeIds.get(e);
      if (i) {
        for (let e = 0; e < i.length; e++) this._removeRangeId(i[e]);
        this._nodeToRangeIds.delete(e);
      }
    }
    forEachPoint(e, t, n, r, i) {
      let a = this._codec.encodeSheet(e, t);
      (J(this._wholeSheet.get(a), i),
        J(this._wholeCol.get(this._codec.encodeColBySheetKey(a, r)), i),
        J(this._wholeRow.get(this._codec.encodeRowBySheetKey(a, n)), i));
      let o = this._rowBuckets.get(this._codec.encodeRowBySheetKey(a, n));
      if (o)
        for (let e = 0; e < o.length; e++) {
          let t = o[e];
          this._activeArr[t] &&
            this._rangeContainsPoint(t, a, n, r) &&
            i(this._nodeArr[t]);
        }
      let s = this._colBuckets.get(this._codec.encodeColBySheetKey(a, r));
      if (s)
        for (let e = 0; e < s.length; e++) {
          let t = s[e];
          this._activeArr[t] &&
            this._rangeContainsPoint(t, a, n, r) &&
            i(this._nodeArr[t]);
        }
      for (let e = 0; e < this._largeRangeIds.length; e++) {
        let t = this._largeRangeIds[e];
        this._activeArr[t] &&
          this._rangeContainsPoint(t, a, n, r) &&
          i(this._nodeArr[t]);
      }
    }
    forEachRangeIntersecting(e, t) {
      this.forEachRangesIntersecting([e], t);
    }
    forEachRangesIntersecting(e, t) {
      if (e.length === 0) return;
      let n = Array(e.length);
      for (let t = 0; t < e.length; t++) n[t] = U(e[t]);
      this._nextRangeEpoch();
      for (let e = 0; e < n.length; e++) {
        let r = n[e],
          i = this._codec.encodeSheet(r.unitId, r.sheetId);
        (J(this._wholeSheet.get(i), t),
          this._scanWholeCols(r, i, t),
          this._scanWholeRows(r, i, t),
          this._scanRowIndexedRanges(r, i, t),
          this._scanColIndexedRanges(r, i, t));
        for (let e = 0; e < this._largeRangeIds.length; e++) {
          let n = this._largeRangeIds[e];
          this._activeArr[n] &&
            (this._wasRangeSeen(n) ||
              (this._rangeIntersectsInput(n, r, i) &&
                (this._markRangeSeen(n), t(this._nodeArr[n]))));
        }
      }
    }
    _allocRangeId() {
      let e = this._freeRangeIds.pop();
      if (e !== void 0) return e;
      let t = this._nextRangeId++;
      return (this._ensureRangeCapacity(t + 1), t);
    }
    _ensureRangeCapacity(e) {
      ((this._sheetArr = Z(this._sheetArr, e)),
        (this._startRowArr = Z(this._startRowArr, e)),
        (this._endRowArr = Z(this._endRowArr, e)),
        (this._startColArr = Z(this._startColArr, e)),
        (this._endColArr = Z(this._endColArr, e)),
        (this._nodeArr = Z(this._nodeArr, e)),
        (this._kindArr = X(this._kindArr, e)),
        (this._activeArr = X(this._activeArr, e)),
        (this._rangeSeenEpochArr = Z(this._rangeSeenEpochArr, e)));
    }
    _setRangeMeta(e, t, n) {
      ((this._sheetArr[e] = this._codec.encodeSheet(n.unitId, n.sheetId)),
        (this._startRowArr[e] = n.range.startRow),
        (this._endRowArr[e] = n.range.endRow),
        (this._startColArr[e] = n.range.startColumn),
        (this._endColArr[e] = n.range.endColumn),
        (this._nodeArr[e] = t),
        (this._activeArr[e] = 1));
    }
    _removeRangeId(e) {
      if (!this._activeArr[e]) return;
      let t = this._kindArr[e],
        n = this._sheetArr[e];
      if (t === 1)
        for (let t = this._startRowArr[e]; t <= this._endRowArr[e]; t++)
          q(this._rowBuckets, this._codec.encodeRowBySheetKey(n, t), e);
      else if (t === 2)
        for (let t = this._startColArr[e]; t <= this._endColArr[e]; t++)
          q(this._colBuckets, this._codec.encodeColBySheetKey(n, t), e);
      else t === 3 && rt(this._largeRangeIds, e);
      ((this._activeArr[e] = 0),
        (this._kindArr[e] = 0),
        this._freeRangeIds.push(e));
    }
    _nextRangeEpoch() {
      (this._rangeEpoch++,
        this._rangeEpoch >= 4294967295 &&
          (this._rangeSeenEpochArr.fill(0), (this._rangeEpoch = 1)));
    }
    _wasRangeSeen(e) {
      return this._rangeSeenEpochArr[e] === this._rangeEpoch;
    }
    _markRangeSeen(e) {
      this._rangeSeenEpochArr[e] = this._rangeEpoch;
    }
    _scanWholeCols(e, t, n) {
      if (G(e) <= this._wholeCol.size) {
        for (let r = e.range.startColumn; r <= e.range.endColumn; r++)
          J(this._wholeCol.get(this._codec.encodeColBySheetKey(t, r)), n);
        return;
      }
      let r = this._codec.encodeColBySheetKey(t, e.range.startColumn),
        i = this._codec.encodeColBySheetKey(t, e.range.endColumn);
      for (let [e, t] of this._wholeCol) r <= e && e <= i && J(t, n);
    }
    _scanWholeRows(e, t, n) {
      if (W(e) <= this._wholeRow.size) {
        for (let r = e.range.startRow; r <= e.range.endRow; r++)
          J(this._wholeRow.get(this._codec.encodeRowBySheetKey(t, r)), n);
        return;
      }
      let r = this._codec.encodeRowBySheetKey(t, e.range.startRow),
        i = this._codec.encodeRowBySheetKey(t, e.range.endRow);
      for (let [e, t] of this._wholeRow) r <= e && e <= i && J(t, n);
    }
    _scanRowIndexedRanges(e, t, n) {
      if (W(e) <= this._rowBuckets.size) {
        for (let r = e.range.startRow; r <= e.range.endRow; r++)
          this._scanRangeIdBucket(
            this._rowBuckets.get(this._codec.encodeRowBySheetKey(t, r)),
            e,
            t,
            n,
          );
        return;
      }
      let r = this._codec.encodeRowBySheetKey(t, e.range.startRow),
        i = this._codec.encodeRowBySheetKey(t, e.range.endRow);
      for (let [a, o] of this._rowBuckets)
        r <= a && a <= i && this._scanRangeIdBucket(o, e, t, n);
    }
    _scanColIndexedRanges(e, t, n) {
      if (G(e) <= this._colBuckets.size) {
        for (let r = e.range.startColumn; r <= e.range.endColumn; r++)
          this._scanRangeIdBucket(
            this._colBuckets.get(this._codec.encodeColBySheetKey(t, r)),
            e,
            t,
            n,
          );
        return;
      }
      let r = this._codec.encodeColBySheetKey(t, e.range.startColumn),
        i = this._codec.encodeColBySheetKey(t, e.range.endColumn);
      for (let [a, o] of this._colBuckets)
        r <= a && a <= i && this._scanRangeIdBucket(o, e, t, n);
    }
    _scanRangeIdBucket(e, t, n, r) {
      if (e)
        for (let i = 0; i < e.length; i++) {
          let a = e[i];
          this._activeArr[a] &&
            (this._wasRangeSeen(a) ||
              (this._rangeIntersectsInput(a, t, n) &&
                (this._markRangeSeen(a), r(this._nodeArr[a]))));
        }
    }
    _rangeContainsPoint(e, t, n, r) {
      return (
        this._sheetArr[e] === t &&
        this._startRowArr[e] <= n &&
        n <= this._endRowArr[e] &&
        this._startColArr[e] <= r &&
        r <= this._endColArr[e]
      );
    }
    _rangeIntersectsInput(e, t, n) {
      return (
        this._sheetArr[e] === n &&
        this._startRowArr[e] <= t.range.endRow &&
        this._endRowArr[e] >= t.range.startRow &&
        this._startColArr[e] <= t.range.endColumn &&
        this._endColArr[e] >= t.range.startColumn
      );
    }
  },
  mt = class {
    constructor(e) {
      (s(this, `codec`, void 0),
        s(this, `_maxIndexedSpan`, void 0),
        s(this, `_pointScanCellLimit`, void 0),
        s(this, `_initialNodeCapacity`, void 0),
        s(this, `_initialRangeCapacity`, void 0),
        s(this, `directDeps`, void 0),
        s(this, `nodeDeps`, void 0),
        s(this, `rangeIndex`, void 0),
        s(this, `cellFormulaToIndex`, void 0),
        s(this, `otherFormulaToIndex`, void 0),
        s(this, `featureCalculationToIndex`, void 0),
        s(this, `indexToNodeId`, void 0),
        s(this, `dirty`, void 0),
        s(this, `inQueue`, void 0),
        s(this, `_indexToNodeType`, void 0),
        s(this, `_cellPrecedents`, void 0),
        s(this, `_rangePrecedents`, void 0),
        s(this, `_nodePrecedents`, void 0),
        s(this, `_dynamicDeps`, void 0),
        s(this, `_dynamicSignature`, void 0),
        s(this, `_runtimeDirectDeps`, void 0),
        s(this, `_runtimeNodeDeps`, void 0),
        s(this, `_runtimeRangeIndex`, void 0),
        s(this, `_runtimeCellPrecedents`, void 0),
        s(this, `_runtimeRangePrecedents`, void 0),
        s(this, `_runtimeNodePrecedents`, void 0),
        s(this, `_activeNode`, void 0),
        s(this, `_seenNodeEpoch`, void 0),
        s(this, `_visitNodeEpoch`, void 0),
        s(this, `_edgeSeenEpoch`, void 0),
        s(this, `_tarjanSeenEpoch`, void 0),
        s(this, `_tarjanIndexArr`, void 0),
        s(this, `_tarjanLowArr`, void 0),
        s(this, `_tarjanOnStack`, void 0),
        s(this, `_emitEpoch`, 1),
        s(this, `_visitEpoch`, 1),
        s(this, `_edgeEpoch`, 1),
        s(this, `_tarjanEpoch`, 1),
        s(this, `_propQueue`, []),
        s(this, `_dirtyList`, []),
        s(this, `_activeNodeCount`, 0),
        s(this, `_dirtyNodeCount`, 0),
        s(this, `_directPointIndex`, void 0),
        s(this, `_runtimeDirectPointIndex`, void 0),
        s(this, `_formulaCellIndex`, void 0),
        s(this, `_sharedFormulaGroups`, void 0),
        s(this, `_sharedFormulaGroupIndexById`, void 0),
        s(this, `_sharedFormulaMembershipByNode`, void 0),
        s(this, `_sharedFormulaSourceEntries`, void 0),
        s(this, `_sharedFormulaSourceRangeIndex`, void 0),
        (this._maxIndexedSpan = e.maxIndexedSpan ?? 4096),
        (this._pointScanCellLimit = e.pointScanCellLimit ?? 4096),
        (this._initialNodeCapacity = Math.max(
          16,
          e.initialNodeCapacity ?? 1024,
        )),
        (this._initialRangeCapacity = Math.max(
          16,
          e.initialRangeCapacity ?? 1024,
        )),
        (this.codec = new $e(e.maxRows, e.maxCols)),
        this.reset());
    }
    reset() {
      (this.codec.reset(),
        (this.directDeps = new Map()),
        (this.nodeDeps = new Map()),
        (this.rangeIndex = new pt(
          this.codec,
          this._initialRangeCapacity,
          this._maxIndexedSpan,
        )),
        (this._runtimeDirectDeps = new Map()),
        (this._runtimeNodeDeps = new Map()),
        (this._runtimeRangeIndex = new pt(
          this.codec,
          this._initialRangeCapacity,
          this._maxIndexedSpan,
        )),
        (this.cellFormulaToIndex = new Map()),
        (this.otherFormulaToIndex = new Map()),
        (this.featureCalculationToIndex = new Map()),
        (this.indexToNodeId = []),
        (this._indexToNodeType = new Uint8Array(this._initialNodeCapacity)),
        (this.dirty = new Uint8Array(this._initialNodeCapacity)),
        (this.inQueue = new Uint8Array(this._initialNodeCapacity)),
        (this._activeNode = new Uint8Array(this._initialNodeCapacity)),
        (this._cellPrecedents = []),
        (this._rangePrecedents = []),
        (this._nodePrecedents = []),
        (this._dynamicDeps = []),
        (this._dynamicSignature = []),
        (this._runtimeCellPrecedents = []),
        (this._runtimeRangePrecedents = []),
        (this._runtimeNodePrecedents = []),
        (this._seenNodeEpoch = new Uint32Array(this._initialNodeCapacity)),
        (this._visitNodeEpoch = new Uint32Array(this._initialNodeCapacity)),
        (this._edgeSeenEpoch = new Uint32Array(this._initialNodeCapacity)),
        (this._tarjanSeenEpoch = new Uint32Array(this._initialNodeCapacity)),
        (this._tarjanIndexArr = new Uint32Array(this._initialNodeCapacity)),
        (this._tarjanLowArr = new Uint32Array(this._initialNodeCapacity)),
        (this._tarjanOnStack = new Uint8Array(this._initialNodeCapacity)),
        (this._emitEpoch = 1),
        (this._visitEpoch = 1),
        (this._edgeEpoch = 1),
        (this._tarjanEpoch = 1),
        (this._propQueue.length = 0),
        (this._dirtyList.length = 0),
        (this._activeNodeCount = 0),
        (this._dirtyNodeCount = 0),
        (this._directPointIndex = new ft(this.codec, this._pointScanCellLimit)),
        (this._runtimeDirectPointIndex = new ft(
          this.codec,
          this._pointScanCellLimit,
        )),
        (this._formulaCellIndex = new dt(this.codec, this.indexToNodeId)),
        (this._sharedFormulaGroups = []),
        (this._sharedFormulaGroupIndexById = new Map()),
        (this._sharedFormulaMembershipByNode = new Int32Array(
          this._initialNodeCapacity,
        )),
        this._sharedFormulaMembershipByNode.fill(-1),
        (this._sharedFormulaSourceEntries = []),
        (this._sharedFormulaSourceRangeIndex = new pt(
          this.codec,
          this._initialRangeCapacity,
          this._maxIndexedSpan,
        )));
    }
    encodeCell(e, t, n, r) {
      return this.codec.encodeCell(e, t, n, r);
    }
    reserveDependencyCapacity(e, t = e) {
      (this._ensureNodeCapacity(e),
        this.rangeIndex.reserveCapacity(t),
        this._runtimeRangeIndex.reserveCapacity(t),
        this._sharedFormulaSourceRangeIndex.reserveCapacity(t));
    }
    decodeCell(e) {
      return this.codec.decodeCell(e);
    }
    encodeFeatureCalculationId(e, t, n) {
      return `${e} ${t} ${n}`;
    }
    decodeFeatureCalculationId(e) {
      let t = this._tryDecodeFeatureCalculationId(e);
      if (t === void 0)
        throw Error(`Invalid feature calculation id: ${String(e)}`);
      return t;
    }
    encodeOtherFormulaId(e, t, n, r, i) {
      return `${e} ${t} ${n} ${r} ${i}`;
    }
    decodeOtherFormulaId(e) {
      let t = this._tryDecodeOtherFormulaId(e);
      if (t === void 0) throw Error(`Invalid other formula id: ${String(e)}`);
      return t;
    }
    setCellFormulaDeps(e, t, n) {
      return this._setCalcNodeDepsByType(
        1,
        e,
        t,
        (n == null ? void 0 : n.checkCycle) ?? !0,
        (n == null ? void 0 : n.markDirty) ?? !0,
        (n == null ? void 0 : n.mode) === `merge`,
      );
    }
    setNewCellFormulaDeps(e, t) {
      let n = this.cellFormulaToIndex.get(e);
      if (n !== void 0 && this._activeNode[n] === 1)
        return this.setCellFormulaDeps(e, t, { checkCycle: !1, markDirty: !1 });
      let r = this._getOrCreateNodeIndexByType(1, e),
        i = this._normalizeCalcNodeDeps(t),
        a = this._resolveExplicitNodeDeps(i.nodes);
      return (
        this._formulaCellIndex.addFormulaCell(e, r),
        this._activeNodeCount++,
        (this._activeNode[r] = 1),
        this._addNewNodeDepsOnly(r, i.cells, i.ranges, a),
        i.dynamics.length > 0 && this._setNodeDynamicDeps(r, i.dynamics),
        { nodeIndex: r, hasCycle: !1 }
      );
    }
    setNewCellFormulaNodeOnly(e) {
      let t = this.cellFormulaToIndex.get(e);
      if (t !== void 0 && this._activeNode[t] === 1)
        return this.setCellFormulaDeps(
          e,
          {},
          { checkCycle: !1, markDirty: !1 },
        );
      let n = this._getOrCreateNodeIndexByType(1, e);
      return (
        this._formulaCellIndex.addFormulaCell(e, n),
        this._activeNodeCount++,
        (this._activeNode[n] = 1),
        { nodeIndex: n, hasCycle: !1 }
      );
    }
    setNewCellFormulaNodeOnlyRange(e, t, n, r) {
      let i = this.codec.encodeSheet(e, t),
        a = i * this.codec.sheetSize,
        o = [];
      for (let e = n.startRow; e <= n.endRow; e++) {
        let t = a + e * this.codec.maxCols;
        for (let a = n.startColumn; a <= n.endColumn; a++) {
          if (r != null && r.row === e && r.col === a) continue;
          let n = t + a,
            s = this.cellFormulaToIndex.get(n);
          if (s !== void 0 && this._activeNode[s] === 1) {
            o.push(
              this.setCellFormulaDeps(n, {}, { checkCycle: !1, markDirty: !1 })
                .nodeIndex,
            );
            continue;
          }
          let c = this._getOrCreateNodeIndexByType(1, n);
          (this._formulaCellIndex.addFormulaCellByPosition(i, e, a, c),
            this._activeNodeCount++,
            (this._activeNode[c] = 1),
            o.push(c));
        }
      }
      return o;
    }
    setOtherFormulaDeps(e, t, n) {
      return this._setCalcNodeDepsByType(
        2,
        e,
        t,
        (n == null ? void 0 : n.checkCycle) ?? !0,
        (n == null ? void 0 : n.markDirty) ?? !0,
        (n == null ? void 0 : n.mode) === `merge`,
      );
    }
    setFeatureCalculationDeps(e, t, n) {
      return this._setCalcNodeDepsByType(
        3,
        e,
        t,
        (n == null ? void 0 : n.checkCycle) ?? !0,
        (n == null ? void 0 : n.markDirty) ?? !0,
        (n == null ? void 0 : n.mode) === `merge`,
      );
    }
    setCalcNodeDeps(e, t, n) {
      return this._setCalcNodeDepsByType(
        e.type,
        e.id,
        t,
        (n == null ? void 0 : n.checkCycle) ?? !0,
        (n == null ? void 0 : n.markDirty) ?? !0,
        (n == null ? void 0 : n.mode) === `merge`,
      );
    }
    registerCompressedSharedFormulaGroup(e) {
      var t;
      this.unregisterCompressedSharedFormulaGroup(e.groupId);
      let n = this._sharedFormulaGroups.length,
        r = U(e.fillRange),
        i = { ...r, range: { ...r.range } },
        a = {
          groupId: e.groupId,
          fillRange: i,
          patterns: e.patterns.slice(),
          sourceEntryIds: [],
          memberNodeIndices:
            (t = e.memberNodeIndices) == null ? void 0 : t.slice(),
        };
      (this._sharedFormulaGroups.push(a),
        this._sharedFormulaGroupIndexById.set(a.groupId, n),
        e.memberNodeIndices == null
          ? this._markCompressedSharedFormulaMembership(n, i)
          : this._markCompressedSharedFormulaMembershipByNodeIndices(
              n,
              e.memberNodeIndices,
            ));
      for (let e = 0; e < a.patterns.length; e++) {
        let t = this._getCompressedSharedSourceCoverage(i, a.patterns[e]),
          r = this._sharedFormulaSourceEntries.length;
        (this._sharedFormulaSourceEntries.push({
          groupIndex: n,
          patternIndex: e,
          sourceCoverage: t,
          active: !0,
        }),
          a.sourceEntryIds.push(r),
          this._sharedFormulaSourceRangeIndex.addRange(r, t));
      }
    }
    unregisterCompressedSharedFormulaGroup(e) {
      let t = this._sharedFormulaGroupIndexById.get(e);
      if (t === void 0) return;
      let n = this._sharedFormulaGroups[t];
      this._sharedFormulaGroupIndexById.delete(e);
      for (let e = 0; e < n.sourceEntryIds.length; e++) {
        let t = n.sourceEntryIds[e],
          r = this._sharedFormulaSourceEntries[t];
        (r && (r.active = !1),
          this._sharedFormulaSourceRangeIndex.removeNode(t));
      }
      n.memberNodeIndices == null
        ? this._clearCompressedSharedFormulaMembership(t, n.fillRange)
        : this._clearCompressedSharedFormulaMembershipByNodeIndices(
            t,
            n.memberNodeIndices,
          );
    }
    clearCompressedSharedFormulaGroups(e, t) {
      let n = [];
      for (let r = 0; r < this._sharedFormulaGroups.length; r++) {
        let i = this._sharedFormulaGroups[r];
        this._sharedFormulaGroupIndexById.has(i.groupId) &&
          (e === void 0 || i.fillRange.unitId === e) &&
          (t === void 0 || i.fillRange.sheetId === t) &&
          n.push(i.groupId);
      }
      for (let e = 0; e < n.length; e++)
        this.unregisterCompressedSharedFormulaGroup(n[e]);
    }
    _setCalcNodeDepsByType(e, t, n, r, i, a) {
      var o, s, c;
      let l = this._getOrCreateNodeIndexByType(e, t),
        u = this._activeNode[l] === 1,
        d =
          u &&
          e === 1 &&
          !this._isEmptyCalcNodeDeps(n) &&
          this._sharedFormulaMembershipByNode[l] >= 0,
        f = u && (r || a),
        p = f
          ? (((o = this._cellPrecedents[l]) == null ? void 0 : o.slice()) ?? [])
          : [],
        m = f
          ? (((s = this._rangePrecedents[l]) == null ? void 0 : s.slice()) ??
            [])
          : [],
        h = f
          ? (((c = this._nodePrecedents[l]) == null ? void 0 : c.slice()) ?? [])
          : [];
      u && this._removeNodeDepsOnly(l);
      let g = this._normalizeCalcNodeDeps(n),
        _ = g.cells,
        v = g.ranges,
        y = g.nodes,
        b = this._resolveExplicitNodeDeps(y),
        x = this._dynamicDeps[l] ?? [],
        S = a ? this._mergeDynamicDeps(x, g.dynamics) : g.dynamics,
        C = a ? this._mergeSortedUniqueNumbers(p, _) : _,
        w = a ? this._mergeRangeDeps(m, v) : v,
        T = a ? this._mergeSortedUniqueNumbers(h, b) : b;
      return r && this._wouldCreateCycleForNewDeps(l, C, w, T)
        ? (u && this._addNodeDepsOnly(l, p, m, h),
          { nodeIndex: l, hasCycle: !0 })
        : (d && this._unregisterCompressedSharedFormulaGroupByNode(l),
          !u && e === 1 && (et(t), this._formulaCellIndex.addFormulaCell(t, l)),
          u || this._activeNodeCount++,
          (this._activeNode[l] = 1),
          this._addNodeDepsOnly(l, C, w, T),
          this._setNodeDynamicDeps(l, S),
          i && (this._markNodeIndexDirty(l, !0), this._propagateDirtyQueue()),
          { nodeIndex: l, hasCycle: !1 });
    }
    setManyCalcNodeDeps(e, t) {
      let n = (t == null ? void 0 : t.markDirty) ?? !0,
        r = (t == null ? void 0 : t.checkCycle) ?? !0,
        i = (t == null ? void 0 : t.mode) === `merge`,
        a = Array(e.length),
        o = [];
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          s = this._setCalcNodeDepsByType(
            n.node.type,
            n.node.id,
            n.deps,
            r,
            !1,
            i,
          );
        ((a[t] = s), s.hasCycle || o.push(s.nodeIndex));
      }
      return (n && o.length > 0 && this._markCalcNodeIndicesChanged(o), a);
    }
    setManyCellFormulaDeps(e, t) {
      let n = (t == null ? void 0 : t.markDirty) ?? !0,
        r = (t == null ? void 0 : t.checkCycle) ?? !0,
        i = (t == null ? void 0 : t.mode) === `merge`,
        a = Array(e.length),
        o = [];
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          s = this._setCalcNodeDepsByType(1, n.cell, n.deps, r, !1, i);
        ((a[t] = s), s.hasCycle || o.push(s.nodeIndex));
      }
      return (n && o.length > 0 && this._markCalcNodeIndicesChanged(o), a);
    }
    setManyOtherFormulaDeps(e, t) {
      let n = (t == null ? void 0 : t.markDirty) ?? !0,
        r = (t == null ? void 0 : t.checkCycle) ?? !0,
        i = (t == null ? void 0 : t.mode) === `merge`,
        a = Array(e.length),
        o = [];
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          s = this._setCalcNodeDepsByType(2, n.id, n.deps, r, !1, i);
        ((a[t] = s), s.hasCycle || o.push(s.nodeIndex));
      }
      return (n && o.length > 0 && this._markCalcNodeIndicesChanged(o), a);
    }
    setManyFeatureCalculationDeps(e, t) {
      let n = (t == null ? void 0 : t.markDirty) ?? !0,
        r = (t == null ? void 0 : t.checkCycle) ?? !0,
        i = (t == null ? void 0 : t.mode) === `merge`,
        a = Array(e.length),
        o = [];
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          s = this._setCalcNodeDepsByType(3, n.id, n.deps, r, !1, i);
        ((a[t] = s), s.hasCycle || o.push(s.nodeIndex));
      }
      return (n && o.length > 0 && this._markCalcNodeIndicesChanged(o), a);
    }
    removeCellFormula(e, t) {
      this._removeCalcNodeByType(1, e, t);
    }
    removeOtherFormula(e, t) {
      this._removeCalcNodeByType(2, e, t);
    }
    removeFeatureCalculation(e, t) {
      this._removeCalcNodeByType(3, e, t);
    }
    removeCellFormulas(e, t) {
      this._removeCalcNodeIds(1, e, t);
    }
    removeOtherFormulas(e, t) {
      this._removeCalcNodeIds(2, e, t);
    }
    removeFeatureCalculations(e, t) {
      this._removeCalcNodeIds(3, e, t);
    }
    removeCalcNodes(e, t) {
      if (e.length === 0) return;
      let n = [];
      for (let t = 0; t < e.length; t++) {
        let r = e[t],
          i = this._getNodeIndexByType(r.type, r.id);
        i !== void 0 && this._activeNode[i] && n.push(i);
      }
      this._removeCalcNodeIndices(n, t);
    }
    clearCellFormulas(e, t, n) {
      let r = [];
      for (let [n, i] of this.cellFormulaToIndex) {
        if (!this._activeNode[i]) continue;
        let a = this.codec.decodeCell(n);
        a.unitId === e && (t === void 0 || a.sheetId === t) && r.push(i);
      }
      this._removeCalcNodeIndices(r, n);
    }
    clearOtherFormulas(e, t, n, r, i, a) {
      if (n !== void 0 && n.length === 0) return;
      let o = [];
      for (let [a, s] of this.otherFormulaToIndex) {
        if (!this._activeNode[s]) continue;
        let c = this._tryDecodeOtherFormulaId(a);
        c !== void 0 &&
          c.unitId === e &&
          (t === void 0 || c.sheetId === t) &&
          ((n !== void 0 && !this._includesFormulaId(n, c.formulaId)) ||
            ((r === void 0 || c.refOffsetX === r) &&
              (r === void 0 || i === void 0 || c.refOffsetY === i) &&
              o.push(s)));
      }
      this._removeCalcNodeIndices(o, a);
    }
    _includesFormulaId(e, t) {
      for (let n = 0; n < e.length; n++) if (e[n] === t) return !0;
      return !1;
    }
    clearFeatureCalculations(e, t, n) {
      let r = [];
      for (let [n, i] of this.featureCalculationToIndex) {
        if (!this._activeNode[i]) continue;
        let a = this._tryDecodeFeatureCalculationId(n);
        a !== void 0 &&
          a.unitId === e &&
          (t === void 0 || a.sheetId === t) &&
          r.push(i);
      }
      this._removeCalcNodeIndices(r, n);
    }
    _tryDecodeFeatureCalculationId(e) {
      if (typeof e != `string`) return;
      let t = e.indexOf(`\0`);
      if (t <= 0) return;
      let n = e.indexOf(`\0`, t + 1);
      if (!(n <= t + 1) && n !== e.length - 1 && e.indexOf(`\0`, n + 1) === -1)
        return {
          unitId: e.slice(0, t),
          sheetId: e.slice(t + 1, n),
          formulaId: e.slice(n + 1),
        };
    }
    _tryDecodeOtherFormulaId(e) {
      if (typeof e != `string`) return;
      let t = e.indexOf(`\0`);
      if (t <= 0) return;
      let n = e.indexOf(`\0`, t + 1);
      if (n <= t + 1) return;
      let r = e.indexOf(`\0`, n + 1);
      if (r <= n + 1) return;
      let i = e.indexOf(`\0`, r + 1);
      if (i <= r + 1 || i === e.length - 1 || e.indexOf(`\0`, i + 1) !== -1)
        return;
      let a = Number(e.slice(r + 1, i)),
        o = Number(e.slice(i + 1));
      if (!(!Number.isFinite(a) || !Number.isFinite(o)))
        return {
          unitId: e.slice(0, t),
          sheetId: e.slice(t + 1, n),
          formulaId: e.slice(n + 1, r),
          refOffsetX: a,
          refOffsetY: o,
        };
    }
    _removeCalcNodeIds(e, t, n) {
      if (t.length === 0) return;
      let r = [];
      for (let n = 0; n < t.length; n++) {
        let i = this._getNodeIndexByType(e, t[n]);
        i !== void 0 && this._activeNode[i] && r.push(i);
      }
      this._removeCalcNodeIndices(r, n);
    }
    _removeCalcNodeIndices(e, t) {
      if (e.length !== 0) {
        if (
          (t != null &&
            t.markDependentsDirty &&
            this._markCalcNodeIndicesChanged(e),
          t != null && t.detachDependents)
        )
          for (let t = 0; t < e.length; t++)
            this._detachDependentsFromNode(e[t]);
        for (let t = 0; t < e.length; t++) this._removeCalcNodeByIndex(e[t]);
      }
    }
    removeCalcNode(e, t) {
      this._removeCalcNodeByType(e.type, e.id, t);
    }
    _removeCalcNodeByType(e, t, n) {
      let r = this._getNodeIndexByType(e, t);
      r !== void 0 &&
        this._activeNode[r] &&
        (n != null &&
          n.markDependentsDirty &&
          (this._markNodeIndexDirty(r, !0), this._propagateDirtyQueue()),
        n != null && n.detachDependents && this._detachDependentsFromNode(r),
        this._removeCalcNodeByIndex(r));
    }
    _removeCalcNodeByIndex(e) {
      if (this._activeNode[e]) {
        if (
          (this._unregisterCompressedSharedFormulaGroupByNode(e),
          this._removeNodeDepsOnly(e),
          this._removeRuntimeDepsOnly(e),
          (this._dynamicDeps[e] = void 0),
          (this._dynamicSignature[e] = void 0),
          this._indexToNodeType[e] === 1)
        ) {
          let t = this.indexToNodeId[e];
          this._formulaCellIndex.removeFormulaCell(t, e);
        }
        ((this._activeNode[e] = 0),
          this._activeNodeCount--,
          this.dirty[e] &&
            ((this.dirty[e] = 0),
            this._dirtyNodeCount--,
            this._compactDirtyList()),
          (this.inQueue[e] = 0));
      }
    }
    markCellChanged(e) {
      this.markCellsChanged([e]);
    }
    markCellsChanged(e) {
      this._nextEmitEpoch();
      for (let t of e)
        this._forEachDependentIndexByCellRaw(t, (e) => {
          this._emitNodeOnceAndMarkDirty(e);
        });
      this._propagateDirtyQueue();
    }
    markRangeChanged(e, t) {
      this.markRangesChanged([e], t);
    }
    markRangesChanged(e, t) {
      if (e.length === 0) return;
      let n =
        (t == null ? void 0 : t.coalesce) === !1
          ? this._normalizeRangeDeps(e)
          : ct(e);
      this._nextEmitEpoch();
      for (let e = 0; e < n.length; e++) {
        let r = n[e];
        (t != null &&
          t.includeFormulaCells &&
          this._formulaCellIndex.forEachFormulaInRange(r, (e) => {
            this._emitNodeOnceAndMarkDirty(e, !0);
          }),
          this._directPointIndex.forEachCellInRange(r, (e) => {
            J(this.directDeps.get(e), (e) => {
              this._emitNodeOnceAndMarkDirty(e);
            });
          }),
          this._runtimeDirectPointIndex.forEachCellInRange(r, (e) => {
            J(this._runtimeDirectDeps.get(e), (e) => {
              this._emitNodeOnceAndMarkDirty(e);
            });
          }));
      }
      (this._isEveryActiveNodeDirty() ||
        this.rangeIndex.forEachRangesIntersecting(n, (e) => {
          this._emitNodeOnceAndMarkDirty(e);
        }),
        this._isEveryActiveNodeDirty() ||
          this._runtimeRangeIndex.forEachRangesIntersecting(n, (e) => {
            this._emitNodeOnceAndMarkDirty(e);
          }));
      for (let e = 0; e < n.length && !this._isEveryActiveNodeDirty(); e++)
        this._forEachCompressedSharedDependentByRange(n[e], (e) => {
          this._emitNodeOnceAndMarkDirty(e);
        });
      this._propagateDirtyQueue();
    }
    markCellFormulaChanged(e) {
      this._markCalcNodeChangedByType(1, e);
    }
    markOtherFormulaChanged(e) {
      this._markCalcNodeChangedByType(2, e);
    }
    markOtherFormulasChanged(e, t, n) {
      if (n === void 0 || n.length !== 0) {
        this._nextEmitEpoch();
        for (let [r, i] of this.otherFormulaToIndex) {
          if (!this._activeNode[i]) continue;
          let a = this._tryDecodeOtherFormulaId(r);
          a !== void 0 &&
            a.unitId === e &&
            (t === void 0 || a.sheetId === t) &&
            ((n !== void 0 && !this._includesFormulaId(n, a.formulaId)) ||
              this._emitNodeOnceAndMarkDirty(i, !0));
        }
        this._propagateDirtyQueue();
      }
    }
    markFeatureCalculationChanged(e) {
      this._markCalcNodeChangedByType(3, e);
    }
    markCalcNodeChanged(e) {
      this._markCalcNodeChangedByType(e.type, e.id);
    }
    _markCalcNodeChangedByType(e, t) {
      let n = this._getNodeIndexByType(e, t);
      n !== void 0 &&
        this._activeNode[n] &&
        (this._markNodeIndexDirty(n, !0), this._propagateDirtyQueue());
    }
    markCalcNodesChanged(e) {
      if (e.length !== 0) {
        this._nextEmitEpoch();
        for (let t = 0; t < e.length; t++) {
          let n = e[t],
            r = this._getNodeIndexByType(n.type, n.id);
          r !== void 0 &&
            this._activeNode[r] &&
            this._emitNodeOnceAndMarkDirty(r, !0);
        }
        this._propagateDirtyQueue();
      }
    }
    markAllDirty() {
      this._nextEmitEpoch();
      for (let e = 0; e < this.indexToNodeId.length; e++)
        this._activeNode[e] && this._emitNodeOnceAndMarkDirty(e, !0);
      this._propagateDirtyQueue();
    }
    hasDynamicDeps(e) {
      let t = this.getNodeIndex(e);
      if (t === void 0) return !1;
      let n = this._dynamicDeps[t];
      return n !== void 0 && n.length > 0;
    }
    refreshDynamicDeps(e, t) {
      let n = this.getNodeIndex(e);
      if (n === void 0 || !this._activeNode[n]) return !1;
      let r = this._dynamicDeps[n];
      if (!r || r.length === 0) return !1;
      let i = { cells: [], ranges: [], nodes: [] },
        a = [];
      for (let n = 0; n < r.length; n++) {
        let o = r[n],
          s = t(e, o),
          c = s.status ?? `resolved`;
        (a.push(`${String(o.id)}:${c}:${s.signature}`),
          this._collectDynamicResolveResult(i, s));
      }
      ((i.cells = nt(i.cells)),
        (i.ranges = this._normalizeRangeDeps(i.ranges)),
        (i.nodes = this._mergeSortedUniqueNumbers([], i.nodes)));
      let o = a.join(`|`),
        s = this._dynamicSignature[n];
      return (
        this._removeRuntimeDepsOnly(n),
        this._addRuntimeDepsOnly(n, i.cells, i.ranges, i.nodes),
        (this._dynamicSignature[n] = o),
        o === s
          ? !1
          : (this._markNodeIndexDirty(n, !0), this._propagateDirtyQueue(), !0)
      );
    }
    prepareDynamicDependencies(e) {
      let t = this._getDirtyNodeIndicesSnapshot(),
        n = !1;
      for (let r = 0; r < t.length; r++) {
        let i = t[r],
          a = this._dynamicDeps[i];
        !a ||
          a.length === 0 ||
          (this.refreshDynamicDeps(this.getNodeRefByIndex(i), e) && (n = !0));
      }
      return n;
    }
    getCalculationOrder(e) {
      let t = this._getDirtyNodeIndicesSnapshot();
      if (t.length === 0) return { hasCycle: !1, calculationForest: [] };
      let n = this._buildDirtyCalculationGraph(t);
      return { hasCycle: n.hasCycle, calculationForest: n.calculationForest };
    }
    clearCalculatedDirty(e) {
      let t = !1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        this.dirty[r] &&
          ((this.dirty[r] = 0), this._dirtyNodeCount--, (t = !0));
      }
      t && this._compactDirtyList();
    }
    _compactDirtyList() {
      let e = 0;
      for (let t = 0; t < this._dirtyList.length; t++) {
        let n = this._dirtyList[t];
        this.dirty[n] && this._activeNode[n] && (this._dirtyList[e++] = n);
      }
      this._dirtyList.length = e;
    }
    clearAllDirty() {
      for (let e = 0; e < this._dirtyList.length; e++)
        this.dirty[this._dirtyList[e]] = 0;
      ((this._dirtyList.length = 0), (this._dirtyNodeCount = 0));
    }
    getDirtyNodeIndices() {
      return this._getDirtyNodeIndicesSnapshot();
    }
    getDirtyNodes() {
      let e = this._getDirtyNodeIndicesSnapshot(),
        t = Array(e.length);
      for (let n = 0; n < e.length; n++) t[n] = this.getNodeRefByIndex(e[n]);
      return t;
    }
    forEachDependentByCell(e, t) {
      (this._nextEmitEpoch(),
        this._forEachDependentIndexByCellRaw(e, (e) => {
          this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
        }));
    }
    forEachDependentByRange(e, t) {
      (this._nextEmitEpoch(),
        this._directPointIndex.forEachCellInRange(e, (e) => {
          J(this.directDeps.get(e), (e) => {
            this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
          });
        }),
        this._runtimeDirectPointIndex.forEachCellInRange(e, (e) => {
          J(this._runtimeDirectDeps.get(e), (e) => {
            this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
          });
        }),
        this.rangeIndex.forEachRangeIntersecting(e, (e) => {
          this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
        }),
        this._runtimeRangeIndex.forEachRangeIntersecting(e, (e) => {
          this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
        }),
        this._forEachCompressedSharedDependentByRange(e, (e) => {
          this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
        }));
    }
    forEachDependentByNode(e, t) {
      let n = this.getNodeIndex(e);
      n !== void 0 &&
        (this._nextEmitEpoch(),
        this._forEachDependentOfNodeRaw(n, (e) => {
          this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
        }));
    }
    forEachDependentByIndex(e, t) {
      this._activeNode[e] &&
        (this._nextEmitEpoch(),
        this._forEachDependentOfNodeRaw(e, (e) => {
          this._activeNode[e] &&
            this._emitNodeOnce(e) &&
            t(this.getNodeRefByIndex(e), e);
        }));
    }
    forEachPrecedentNode(e, t) {
      let n = this.getNodeIndex(e);
      n !== void 0 &&
        this._activeNode[n] &&
        (this._nextEmitEpoch(),
        this._forEachPrecedentNodeIndex(n, (e) => {
          this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
        }));
    }
    forEachPrecedentNodeByIndex(e, t) {
      this._activeNode[e] &&
        (this._nextEmitEpoch(),
        this._forEachPrecedentNodeIndex(e, (e) => {
          this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
        }));
    }
    hasUncalculatedDirtyPrecedentByIndex(e, t) {
      if (!this._activeNode[e]) return !1;
      let n = !1;
      return (
        this._nextEmitEpoch(),
        this._forEachPrecedentNodeIndex(e, (e) => {
          if (!n && this.dirty[e] && !t.has(e)) return ((n = !0), !1);
        }),
        n
      );
    }
    wouldCreateCycle(e, t) {
      let n = this._getOrCreateNodeIndex(e),
        r = this._normalizeCalcNodeDeps(t),
        i = r.cells,
        a = r.ranges,
        o = r.nodes,
        s = this._resolveExplicitNodeDeps(o);
      return this._wouldCreateCycleForNewDeps(n, i, a, s);
    }
    _normalizeCalcNodeDeps(e) {
      let t = [],
        n = [],
        r = [];
      return (
        this._collectStaticDeps(e, t, n, r),
        {
          cells: nt(t),
          ranges: this._normalizeRangeDeps(n),
          nodes: st(r),
          dynamics: e.dynamics ? e.dynamics.slice() : [],
        }
      );
    }
    _collectStaticDeps(e, t, n, r) {
      if (
        e &&
        (e.cells && t.push(...e.cells),
        e.ranges && n.push(...e.ranges),
        e.nodes && r.push(...e.nodes),
        e.dynamics)
      )
        for (let i = 0; i < e.dynamics.length; i++)
          this._collectStaticDeps(e.dynamics[i].paramDeps, t, n, r);
    }
    _mergeDynamicDeps(e, t) {
      if (e.length === 0) return t;
      if (t.length === 0) return e;
      let n = e.slice();
      for (let e = 0; e < t.length; e++) {
        let r = t[e],
          i = !1;
        for (let e = 0; e < n.length; e++)
          if (n[e].id === r.id) {
            i = !0;
            break;
          }
        i || n.push(r);
      }
      return n;
    }
    _setNodeDynamicDeps(e, t) {
      let n = this._dynamicDeps[e];
      (n !== void 0 || t.length !== 0) &&
        (this._isSameDynamicDeps(n, t) ||
          (this._removeRuntimeDepsOnly(e),
          (this._dynamicSignature[e] = void 0),
          (this._dynamicDeps[e] = t.length > 0 ? t : void 0)));
    }
    _isSameDynamicDeps(e, t) {
      if (((e == null ? void 0 : e.length) ?? 0) !== t.length) return !1;
      if (!e) return t.length === 0;
      for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    _normalizeRangeDeps(e) {
      if (!e || e.length === 0) return [];
      let t = Array(e.length);
      for (let n = 0; n < e.length; n++) t[n] = U(e[n]);
      return t;
    }
    _mergeSortedUniqueNumbers(e, t) {
      if (e.length === 0) return t;
      if (t.length === 0) return e;
      let n = [],
        r = 0,
        i = 0;
      for (; r < e.length && i < t.length;) {
        let a = e[r],
          o = t[i];
        a === o
          ? (n.push(a), r++, i++)
          : a < o
            ? (n.push(a), r++)
            : (n.push(o), i++);
      }
      for (; r < e.length;) n.push(e[r++]);
      for (; i < t.length;) n.push(t[i++]);
      return n;
    }
    _mergeRangeDeps(e, t) {
      if (e.length === 0) return t;
      if (t.length === 0) return e;
      let n = e.slice();
      for (let e = 0; e < t.length; e++) {
        let r = t[e];
        this._containsRange(n, r) || n.push(r);
      }
      return n;
    }
    _containsRange(e, t) {
      for (let n = 0; n < e.length; n++)
        if (this._isSameRange(e[n], t)) return !0;
      return !1;
    }
    _isSameRange(e, t) {
      return (
        e.unitId === t.unitId &&
        e.sheetId === t.sheetId &&
        e.range.startRow === t.range.startRow &&
        e.range.endRow === t.range.endRow &&
        e.range.startColumn === t.range.startColumn &&
        e.range.endColumn === t.range.endColumn
      );
    }
    canReachNode(e, t) {
      let n = this.getNodeIndex(e),
        r = this.getNodeIndex(t);
      return n === void 0 || r === void 0 ? !1 : this._canReachNodeIndex(n, r);
    }
    hasCellFormula(e) {
      let t = this.cellFormulaToIndex.get(e);
      return t !== void 0 && this._activeNode[t] === 1;
    }
    hasOtherFormula(e) {
      let t = this.otherFormulaToIndex.get(e);
      return t !== void 0 && this._activeNode[t] === 1;
    }
    hasFeatureCalculation(e) {
      let t = this.featureCalculationToIndex.get(e);
      return t !== void 0 && this._activeNode[t] === 1;
    }
    getNodeIndex(e) {
      return this._getNodeIndexByType(e.type, e.id);
    }
    _getNodeIndexByType(e, t) {
      switch (e) {
        case 1:
          return (et(t), this.cellFormulaToIndex.get(t));
        case 2:
          return this.otherFormulaToIndex.get(t);
        case 3:
          return this.featureCalculationToIndex.get(t);
        default:
          return;
      }
    }
    getNodeRefByIndex(e) {
      return { type: this._indexToNodeType[e], id: this.indexToNodeId[e] };
    }
    markCalcNodeIndicesChanged(e, t) {
      this._markCalcNodeIndicesChanged(e, t);
    }
    _markCalcNodeIndicesChanged(e, t) {
      if (e.length === 0) return;
      this._nextEmitEpoch();
      let n = (t == null ? void 0 : t.onlySelf) !== !0;
      for (let t = 0; t < e.length; t++) {
        let r = e[t];
        this._activeNode[r] && this._emitNodeOnceAndMarkDirty(r, n, n);
      }
      n && this._propagateDirtyQueue();
    }
    _getOrCreateNodeIndex(e) {
      return this._getOrCreateNodeIndexByType(e.type, e.id);
    }
    _getOrCreateNodeIndexByType(e, t) {
      let n = this._getNodeIndexByType(e, t);
      if (n !== void 0) return n;
      let r = this.indexToNodeId.length;
      switch (
        (this.indexToNodeId.push(t),
        this._ensureNodeCapacity(r + 1),
        (this._indexToNodeType[r] = e),
        e)
      ) {
        case 1:
          (et(t), this.cellFormulaToIndex.set(t, r));
          break;
        case 2:
          this.otherFormulaToIndex.set(t, r);
          break;
        case 3:
          this.featureCalculationToIndex.set(t, r);
          break;
        default:
          throw Error(`Unknown CalcNodeType: ${e}`);
      }
      return r;
    }
    _ensureNodeCapacity(e) {
      let t = this._sharedFormulaMembershipByNode.length;
      ((this._indexToNodeType = X(this._indexToNodeType, e)),
        (this.dirty = X(this.dirty, e)),
        (this.inQueue = X(this.inQueue, e)),
        (this._activeNode = X(this._activeNode, e)),
        (this._seenNodeEpoch = Z(this._seenNodeEpoch, e)),
        (this._visitNodeEpoch = Z(this._visitNodeEpoch, e)),
        (this._edgeSeenEpoch = Z(this._edgeSeenEpoch, e)),
        (this._tarjanSeenEpoch = Z(this._tarjanSeenEpoch, e)),
        (this._tarjanIndexArr = Z(this._tarjanIndexArr, e)),
        (this._tarjanLowArr = Z(this._tarjanLowArr, e)),
        (this._tarjanOnStack = X(this._tarjanOnStack, e)),
        (this._sharedFormulaMembershipByNode = this._growIntThirtyTwoArray(
          this._sharedFormulaMembershipByNode,
          e,
          -1,
        )),
        this._sharedFormulaMembershipByNode.length > t &&
          this._sharedFormulaMembershipByNode.fill(-1, t));
    }
    _growIntThirtyTwoArray(e, t, n) {
      if (e.length >= t) return e;
      let r = Math.max(16, e.length);
      for (; r < t;) r *= 2;
      let i = new Int32Array(r);
      return (i.fill(n), i.set(e), i);
    }
    _resolveExplicitNodeDeps(e) {
      if (e.length === 0) return [];
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (r.type === 2)
          throw Error(`OtherFormula cannot be used as a dependency`);
        let i = this._getOrCreateNodeIndex(r);
        t.push(i);
      }
      if (t.length <= 1) return t;
      t.sort((e, t) => e - t);
      let n = 1;
      for (let e = 1; e < t.length; e++) t[e] !== t[n - 1] && (t[n++] = t[e]);
      return ((t.length = n), t);
    }
    _isEmptyCalcNodeDeps(e) {
      return (
        (e.cells == null || e.cells.length === 0) &&
        (e.ranges == null || e.ranges.length === 0) &&
        (e.nodes == null || e.nodes.length === 0) &&
        (e.dynamics == null || e.dynamics.length === 0)
      );
    }
    _unregisterCompressedSharedFormulaGroupByNode(e) {
      let t = this._sharedFormulaMembershipByNode[e];
      if (t < 0) return;
      let n = this._sharedFormulaGroups[t];
      if (n == null || !this._sharedFormulaGroupIndexById.has(n.groupId)) {
        this._sharedFormulaMembershipByNode[e] = -1;
        return;
      }
      this.unregisterCompressedSharedFormulaGroup(n.groupId);
    }
    _markCompressedSharedFormulaMembership(e, t) {
      for (let n = t.range.startRow; n <= t.range.endRow; n++)
        for (let r = t.range.startColumn; r <= t.range.endColumn; r++) {
          let i = this.codec.encodeCell(t.unitId, t.sheetId, n, r),
            a = this.cellFormulaToIndex.get(i);
          a !== void 0 &&
            this._activeNode[a] &&
            (this._sharedFormulaMembershipByNode[a] = e);
        }
    }
    _markCompressedSharedFormulaMembershipByNodeIndices(e, t) {
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        this._activeNode[r] && (this._sharedFormulaMembershipByNode[r] = e);
      }
    }
    _clearCompressedSharedFormulaMembership(e, t) {
      for (let n = t.range.startRow; n <= t.range.endRow; n++)
        for (let r = t.range.startColumn; r <= t.range.endColumn; r++) {
          let i = this.codec.encodeCell(t.unitId, t.sheetId, n, r),
            a = this.cellFormulaToIndex.get(i);
          a !== void 0 &&
            this._sharedFormulaMembershipByNode[a] === e &&
            (this._sharedFormulaMembershipByNode[a] = -1);
        }
    }
    _clearCompressedSharedFormulaMembershipByNodeIndices(e, t) {
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        this._sharedFormulaMembershipByNode[r] === e &&
          (this._sharedFormulaMembershipByNode[r] = -1);
      }
    }
    _getCompressedSharedSourceCoverage(e, t) {
      if (t.kind === `cell`)
        return U({
          unitId: t.unitId,
          sheetId: t.sheetId,
          range: {
            startRow: e.range.startRow + t.rowDelta,
            endRow: e.range.endRow + t.rowDelta,
            startColumn: e.range.startColumn + t.colDelta,
            endColumn: e.range.endColumn + t.colDelta,
          },
        });
      let n = Math.min(t.startRowDelta, t.endRowDelta),
        r = Math.max(t.startRowDelta, t.endRowDelta),
        i = Math.min(t.startColDelta, t.endColDelta),
        a = Math.max(t.startColDelta, t.endColDelta);
      return U({
        unitId: t.unitId,
        sheetId: t.sheetId,
        range: {
          startRow: e.range.startRow + n,
          endRow: e.range.endRow + r,
          startColumn: e.range.startColumn + i,
          endColumn: e.range.endColumn + a,
        },
      });
    }
    _forEachCompressedSharedDependentByRange(e, t) {
      let n = U(e);
      this._sharedFormulaSourceRangeIndex.forEachRangeIntersecting(n, (e) => {
        let r = this._sharedFormulaSourceEntries[e];
        if (!(r != null && r.active)) return;
        let i = this._sharedFormulaGroups[r.groupIndex],
          a = this._reverseMapCompressedSharedPattern(
            n,
            i.fillRange,
            i.patterns[r.patternIndex],
          );
        a != null && this._forEachActiveCellFormulaInRange(a, t);
      });
    }
    _forEachActiveCellFormulaInRange(e, t) {
      for (let n = e.range.startRow; n <= e.range.endRow; n++)
        for (let r = e.range.startColumn; r <= e.range.endColumn; r++) {
          let i = this.codec.encodeCell(e.unitId, e.sheetId, n, r),
            a = this.cellFormulaToIndex.get(i);
          a !== void 0 && this._activeNode[a] && t(a);
        }
    }
    _reverseMapCompressedSharedPattern(e, t, n) {
      let r =
          n.kind === `cell`
            ? [e.range.startRow - n.rowDelta, e.range.endRow - n.rowDelta]
            : [
                e.range.startRow - Math.max(n.startRowDelta, n.endRowDelta),
                e.range.endRow - Math.min(n.startRowDelta, n.endRowDelta),
              ],
        i =
          n.kind === `cell`
            ? [e.range.startColumn - n.colDelta, e.range.endColumn - n.colDelta]
            : [
                e.range.startColumn - Math.max(n.startColDelta, n.endColDelta),
                e.range.endColumn - Math.min(n.startColDelta, n.endColDelta),
              ];
      return this._intersectRanges(t, {
        unitId: t.unitId,
        sheetId: t.sheetId,
        range: {
          startRow: r[0],
          endRow: r[1],
          startColumn: i[0],
          endColumn: i[1],
        },
      });
    }
    _intersectRanges(e, t) {
      if (e.unitId !== t.unitId || e.sheetId !== t.sheetId) return;
      let n = Math.max(e.range.startRow, t.range.startRow),
        r = Math.min(e.range.endRow, t.range.endRow),
        i = Math.max(e.range.startColumn, t.range.startColumn),
        a = Math.min(e.range.endColumn, t.range.endColumn);
      if (!(n > r || i > a))
        return {
          unitId: e.unitId,
          sheetId: e.sheetId,
          range: { startRow: n, endRow: r, startColumn: i, endColumn: a },
        };
    }
    _forEachCompressedSharedPrecedent(e, t) {
      let n = this._sharedFormulaMembershipByNode[e];
      if (n < 0) return !0;
      let r = this._sharedFormulaGroups[n];
      for (let e = 0; e < r.patterns.length; e++)
        if (t(r.patterns[e]) === !1) return !1;
      return !0;
    }
    _getCompressedSharedPrecedentCell(e, t) {
      let n = this.indexToNodeId[e],
        r = this.codec.decodeCell(n);
      return this.codec.encodeCell(
        t.unitId,
        t.sheetId,
        r.row + t.rowDelta,
        r.col + t.colDelta,
      );
    }
    _getCompressedSharedPrecedentRange(e, t) {
      let n = this.indexToNodeId[e],
        r = this.codec.decodeCell(n);
      return U({
        unitId: t.unitId,
        sheetId: t.sheetId,
        range: {
          startRow: r.row + t.startRowDelta,
          startColumn: r.col + t.startColDelta,
          endRow: r.row + t.endRowDelta,
          endColumn: r.col + t.endColDelta,
        },
      });
    }
    _addNodeDepsOnly(e, t, n, r) {
      for (let n = 0; n < t.length; n++) this._addDirectEdge(t[n], e);
      ((this._cellPrecedents[e] = t.length > 0 ? t : void 0),
        (this._rangePrecedents[e] = n.length > 0 ? n : void 0));
      for (let t = 0; t < n.length; t++) this.rangeIndex.addRange(e, n[t]);
      this._nodePrecedents[e] = r.length > 0 ? r : void 0;
      for (let t = 0; t < r.length; t++) this._addExplicitNodeEdge(r[t], e);
    }
    _addNewNodeDepsOnly(e, t, n, r) {
      for (let n = 0; n < t.length; n++) this._addDirectEdgeForNewNode(t[n], e);
      ((this._cellPrecedents[e] = t.length > 0 ? t : void 0),
        (this._rangePrecedents[e] = n.length > 0 ? n : void 0));
      for (let t = 0; t < n.length; t++) this.rangeIndex.addRange(e, n[t]);
      this._nodePrecedents[e] = r.length > 0 ? r : void 0;
      for (let t = 0; t < r.length; t++) this._addExplicitNodeEdge(r[t], e);
    }
    _removeNodeDepsOnly(e) {
      let t = this._cellPrecedents[e];
      if (t) {
        for (let n = 0; n < t.length; n++) this._removeDirectEdge(t[n], e);
        this._cellPrecedents[e] = void 0;
      }
      (this.rangeIndex.removeNode(e), (this._rangePrecedents[e] = void 0));
      let n = this._nodePrecedents[e];
      if (n) {
        for (let t = 0; t < n.length; t++)
          this._removeExplicitNodeEdge(n[t], e);
        this._nodePrecedents[e] = void 0;
      }
    }
    _collectDynamicResolveResult(e, t) {
      (t.traceCells && e.cells.push(...t.traceCells),
        t.cells && e.cells.push(...t.cells),
        t.ranges && e.ranges.push(...t.ranges),
        t.nodes && e.nodes.push(...this._resolveExplicitNodeDeps(st(t.nodes))));
    }
    _addRuntimeDepsOnly(e, t, n, r) {
      for (let n = 0; n < t.length; n++) this._addRuntimeDirectEdge(t[n], e);
      ((this._runtimeCellPrecedents[e] = t.length > 0 ? t : void 0),
        (this._runtimeRangePrecedents[e] = n.length > 0 ? n : void 0));
      for (let t = 0; t < n.length; t++)
        this._runtimeRangeIndex.addRange(e, n[t]);
      this._runtimeNodePrecedents[e] = r.length > 0 ? r : void 0;
      for (let t = 0; t < r.length; t++)
        this._addRuntimeExplicitNodeEdge(r[t], e);
    }
    _removeRuntimeDepsOnly(e) {
      let t = this._runtimeCellPrecedents[e];
      if (t) {
        for (let n = 0; n < t.length; n++)
          this._removeRuntimeDirectEdge(t[n], e);
        this._runtimeCellPrecedents[e] = void 0;
      }
      (this._runtimeRangeIndex.removeNode(e),
        (this._runtimeRangePrecedents[e] = void 0));
      let n = this._runtimeNodePrecedents[e];
      if (n) {
        for (let t = 0; t < n.length; t++)
          this._removeRuntimeExplicitNodeEdge(n[t], e);
        this._runtimeNodePrecedents[e] = void 0;
      }
    }
    _detachDependentsFromNode(e) {
      let t = this.nodeDeps.get(e),
        n = [];
      (J(t, (e) => {
        n.push(e);
      }),
        this.nodeDeps.delete(e));
      for (let t = 0; t < n.length; t++)
        this._detachPrecedentFromDependent(n[t], e);
      let r = this._runtimeNodeDeps.get(e);
      if (r === void 0) return;
      let i = [];
      (J(r, (e) => {
        i.push(e);
      }),
        this._runtimeNodeDeps.delete(e));
      for (let t = 0; t < i.length; t++)
        this._detachRuntimePrecedentFromDependent(i[t], e);
    }
    _detachPrecedentFromDependent(e, t) {
      let n = this._nodePrecedents[e];
      if (n === void 0) return;
      let r = 0,
        i = !1;
      for (let e = 0; e < n.length; e++) {
        let a = n[e];
        if (a === t) {
          i = !0;
          continue;
        }
        n[r++] = a;
      }
      i && (r === 0 ? (this._nodePrecedents[e] = void 0) : (n.length = r));
    }
    _detachRuntimePrecedentFromDependent(e, t) {
      let n = this._runtimeNodePrecedents[e];
      if (n === void 0) return;
      let r = 0,
        i = !1;
      for (let e = 0; e < n.length; e++) {
        let a = n[e];
        if (a === t) {
          i = !0;
          continue;
        }
        n[r++] = a;
      }
      i &&
        (r === 0 ? (this._runtimeNodePrecedents[e] = void 0) : (n.length = r));
    }
    _addDirectEdge(e, t) {
      let n = this.directDeps.get(e);
      (n === void 0 && this._directPointIndex.add(e),
        this.directDeps.set(e, it(n, t)));
    }
    _addDirectEdgeForNewNode(e, t) {
      let n = this.directDeps.get(e);
      if (n === void 0) {
        (this._directPointIndex.add(e), this.directDeps.set(e, t));
        return;
      }
      if (typeof n == `number`) {
        n !== t && this.directDeps.set(e, [n, t]);
        return;
      }
      n[n.length - 1] !== t && n.push(t);
    }
    _removeDirectEdge(e, t) {
      let n = this.directDeps.get(e);
      if (n === void 0) return;
      let r = at(n, t);
      r === void 0
        ? (this.directDeps.delete(e), this._directPointIndex.remove(e))
        : this.directDeps.set(e, r);
    }
    _addRuntimeDirectEdge(e, t) {
      let n = this._runtimeDirectDeps.get(e);
      (n === void 0 && this._runtimeDirectPointIndex.add(e),
        this._runtimeDirectDeps.set(e, it(n, t)));
    }
    _removeRuntimeDirectEdge(e, t) {
      let n = this._runtimeDirectDeps.get(e);
      if (n === void 0) return;
      let r = at(n, t);
      r === void 0
        ? (this._runtimeDirectDeps.delete(e),
          this._runtimeDirectPointIndex.remove(e))
        : this._runtimeDirectDeps.set(e, r);
    }
    _addExplicitNodeEdge(e, t) {
      ot(this.nodeDeps, e, t);
    }
    _removeExplicitNodeEdge(e, t) {
      Y(this.nodeDeps, e, t);
    }
    _addRuntimeExplicitNodeEdge(e, t) {
      ot(this._runtimeNodeDeps, e, t);
    }
    _removeRuntimeExplicitNodeEdge(e, t) {
      Y(this._runtimeNodeDeps, e, t);
    }
    _forEachDependentIndexByCellRaw(e, t) {
      (J(this.directDeps.get(e), t), J(this._runtimeDirectDeps.get(e), t));
      let n = this.codec.decodeCell(e);
      (this.rangeIndex.forEachPoint(n.unitId, n.sheetId, n.row, n.col, t),
        this._runtimeRangeIndex.forEachPoint(
          n.unitId,
          n.sheetId,
          n.row,
          n.col,
          t,
        ),
        this._forEachCompressedSharedDependentByRange(
          {
            unitId: n.unitId,
            sheetId: n.sheetId,
            range: {
              startRow: n.row,
              endRow: n.row,
              startColumn: n.col,
              endColumn: n.col,
            },
          },
          t,
        ));
    }
    _forEachDependentOfNodeRaw(e, t) {
      if (this._indexToNodeType[e] === 1) {
        let n = this.indexToNodeId[e];
        this._forEachDependentIndexByCellRaw(n, t);
      }
      (J(this.nodeDeps.get(e), t), J(this._runtimeNodeDeps.get(e), t));
    }
    _markNodeIndexDirty(e, t = !1, n = !0) {
      if (!this._activeNode[e]) return;
      let r = this.dirty[e] === 1;
      (r ||
        ((this.dirty[e] = 1), this._dirtyList.push(e), this._dirtyNodeCount++),
        n &&
          (!r || t) &&
          !this.inQueue[e] &&
          ((this.inQueue[e] = 1), this._propQueue.push(e)));
    }
    _isEveryActiveNodeDirty() {
      return (
        this._activeNodeCount > 0 &&
        this._dirtyNodeCount >= this._activeNodeCount
      );
    }
    _propagateDirtyQueue() {
      if (this._isEveryActiveNodeDirty()) {
        for (let e = 0; e < this._propQueue.length; e++)
          this.inQueue[this._propQueue[e]] = 0;
        this._propQueue.length = 0;
        return;
      }
      let e = 0;
      for (; e < this._propQueue.length;) {
        let t = this._propQueue[e++];
        ((this.inQueue[t] = 0),
          this._activeNode[t] &&
            this._forEachDependentOfNodeRaw(t, (e) => {
              this._markNodeIndexDirty(e, !1);
            }));
      }
      this._propQueue.length = 0;
    }
    _getDirtyNodeIndicesSnapshot() {
      let e = [];
      for (let t = 0; t < this._dirtyList.length; t++) {
        let n = this._dirtyList[t];
        this.dirty[n] && this._activeNode[n] && e.push(n);
      }
      return e;
    }
    _forEachDependentOfNodeDeduped(e, t) {
      (this._nextEdgeEpoch(),
        this._forEachDependentOfNodeRaw(e, (e) => {
          this._edgeSeenEpoch[e] !== this._edgeEpoch &&
            ((this._edgeSeenEpoch[e] = this._edgeEpoch), t(e));
        }));
    }
    _forEachPrecedentNodeIndex(e, t) {
      let n = this._cellPrecedents[e];
      if (n)
        for (let e = 0; e < n.length; e++) {
          let r = n[e],
            i = this.cellFormulaToIndex.get(r);
          if (i !== void 0 && this._activeNode[i] && t(i) === !1) return !1;
        }
      let r = this._rangePrecedents[e];
      if (r)
        for (let e = 0; e < r.length; e++) {
          let n = !0;
          if (
            (this._formulaCellIndex.forEachFormulaInRange(r[e], (e) => {
              if (n && this._activeNode[e] && t(e) === !1)
                return ((n = !1), !1);
            }),
            !n)
          )
            return !1;
        }
      if (
        !this._forEachCompressedSharedPrecedent(e, (n) => {
          if (n.kind === `cell`) {
            let r = this._getCompressedSharedPrecedentCell(e, n),
              i = this.cellFormulaToIndex.get(r);
            return i !== void 0 && this._activeNode[i] && t(i) === !1
              ? !1
              : void 0;
          }
          let r = !0;
          return (
            this._formulaCellIndex.forEachFormulaInRange(
              this._getCompressedSharedPrecedentRange(e, n),
              (e) => {
                if (r && this._activeNode[e] && t(e) === !1)
                  return ((r = !1), !1);
              },
            ),
            r
          );
        })
      )
        return !1;
      let i = this._nodePrecedents[e];
      if (i)
        for (let e = 0; e < i.length; e++) {
          let n = i[e];
          if (this._activeNode[n] && t(n) === !1) return !1;
        }
      let a = this._runtimeCellPrecedents[e];
      if (a)
        for (let e = 0; e < a.length; e++) {
          let n = a[e],
            r = this.cellFormulaToIndex.get(n);
          if (r !== void 0 && this._activeNode[r] && t(r) === !1) return !1;
        }
      let o = this._runtimeRangePrecedents[e];
      if (o)
        for (let e = 0; e < o.length; e++) {
          let n = !0;
          if (
            (this._formulaCellIndex.forEachFormulaInRange(o[e], (e) => {
              if (n && this._activeNode[e] && t(e) === !1)
                return ((n = !1), !1);
            }),
            !n)
          )
            return !1;
        }
      let s = this._runtimeNodePrecedents[e];
      if (s)
        for (let e = 0; e < s.length; e++) {
          let n = s[e];
          if (this._activeNode[n] && t(n) === !1) return !1;
        }
      return !0;
    }
    _wouldCreateCycleForNewDeps(e, t, n, r) {
      for (let n = 0; n < t.length; n++) {
        let r = t[n],
          i = this.cellFormulaToIndex.get(r);
        if (
          i !== void 0 &&
          this._activeNode[i] &&
          (i === e || this._canReachNodeIndex(e, i))
        )
          return !0;
      }
      if (this._indexToNodeType[e] === 1) {
        let t = this.indexToNodeId[e],
          r = this.codec.decodeCell(t);
        for (let e = 0; e < n.length; e++) if (tt(n[e], r)) return !0;
      }
      for (let t = 0; t < n.length; t++) {
        let r = n[t],
          i = !1;
        if (
          (this._formulaCellIndex.forEachFormulaInRange(r, (t) => {
            if (!i && this._activeNode[t]) {
              if (t === e) {
                i = !0;
                return;
              }
              this._canReachNodeIndex(e, t) && (i = !0);
            }
          }),
          i)
        )
          return !0;
      }
      for (let t = 0; t < r.length; t++) {
        let n = r[t];
        if (n === e || this._canReachNodeIndex(e, n)) return !0;
      }
      return !1;
    }
    _canReachNodeIndex(e, t) {
      if (e === t) return !0;
      this._nextVisitEpoch();
      let n = [e];
      for (; n.length > 0;) {
        let e = n.pop(),
          r = !1;
        if (
          (this._forEachDependentOfNodeRaw(e, (e) => {
            if (!r && this._visitNodeEpoch[e] !== this._visitEpoch) {
              if (((this._visitNodeEpoch[e] = this._visitEpoch), e === t)) {
                r = !0;
                return;
              }
              n.push(e);
            }
          }),
          r)
        )
          return !0;
      }
      return !1;
    }
    _buildDirtyCalculationGraph(e) {
      let t = this._tryBuildAcyclicDirtyCalculationGraph(e);
      return t === void 0 ? this._buildDirtyCalculationGraphWithScc(e) : t;
    }
    _tryBuildAcyclicDirtyCalculationGraph(e) {
      let t = e.length;
      this._nextTarjanEpoch();
      for (let n = 0; n < t; n++) {
        let t = e[n];
        ((this._tarjanSeenEpoch[t] = this._tarjanEpoch),
          (this._tarjanIndexArr[t] = n + 1));
      }
      let n = new Uint32Array(t),
        r = new Int32Array(t),
        i = new Int32Array(t),
        a = new Uint8Array(t),
        o = new Uint8Array(t),
        s = new Uint8Array(t),
        c = [],
        l = [],
        u = new Map(),
        d = [],
        f = [],
        p = [],
        m = [],
        h = new pt(
          this.codec,
          this._initialRangeCapacity,
          this._maxIndexedSpan,
        );
      for (let e = 0; e < t; e++) ((i[e] = e), (r[e] = -1));
      for (let g = 0; g < t; g++) {
        let t = e[g];
        (this._nextEdgeEpoch(),
          this._addAcyclicExactPrecedentEdges(t, g, n, r, c, l, i, a, o, s),
          this._addAcyclicRangePrecedentGroups(
            t,
            g,
            n,
            u,
            d,
            f,
            p,
            m,
            h,
            i,
            a,
            o,
            s,
          ));
      }
      let g = new Int32Array(t),
        _ = 0,
        v = 0;
      for (let e = 0; e < t; e++) n[e] === 0 && (g[v++] = e);
      let y = new Int32Array(t),
        b = [],
        x = -1,
        S = 0,
        C = !1;
      for (; _ < v;) {
        let t = g[_++],
          a = e[t];
        (S++,
          this._appendAcyclicCalculationNode(b, y, i, o, s, t, a, x),
          (C ||= s[t] === 1),
          o[t] === 0 && x === -1 && (x = b.length - 1));
        for (let e = r[t]; e !== -1; e = l[e]) {
          let t = c[e];
          (n[t]--, n[t] === 0 && (g[v++] = t));
        }
        if (this._indexToNodeType[a] === 1) {
          let e = this.indexToNodeId[a],
            t = this.codec.decodeCell(e);
          h.forEachPoint(t.unitId, t.sheetId, t.row, t.col, (e) => {
            if (f[e] <= 0 || (f[e]--, f[e] !== 0)) return;
            let t = p[e];
            for (let e = 0; e < t.length; e++) {
              let r = t[e];
              (n[r]--, n[r] === 0 && (g[v++] = r));
            }
          });
        }
      }
      if (S === t) return { calculationForest: b, hasCycle: C };
    }
    _addAcyclicExactPrecedentEdges(e, t, n, r, i, a, o, s, c, l) {
      let u = (e) => {
          if (
            e === void 0 ||
            !this._activeNode[e] ||
            !this.dirty[e] ||
            this._edgeSeenEpoch[e] === this._edgeEpoch
          )
            return;
          this._edgeSeenEpoch[e] = this._edgeEpoch;
          let u = this._getCurrentDirtyOrdinal(e);
          if (!(u < 0)) {
            if (((c[u] = 1), (c[t] = 1), u === t)) {
              l[t] = 1;
              return;
            }
            (a.push(r[u]),
              i.push(t),
              (r[u] = i.length - 1),
              n[t]++,
              this._unionCalculationForestComponents(o, s, u, t));
          }
        },
        d = this._cellPrecedents[e];
      if (d)
        for (let e = 0; e < d.length; e++) u(this.cellFormulaToIndex.get(d[e]));
      let f = this._nodePrecedents[e];
      if (f) for (let e = 0; e < f.length; e++) u(f[e]);
      let p = this._runtimeCellPrecedents[e];
      if (p)
        for (let e = 0; e < p.length; e++) u(this.cellFormulaToIndex.get(p[e]));
      let m = this._runtimeNodePrecedents[e];
      if (m) for (let e = 0; e < m.length; e++) u(m[e]);
      this._forEachCompressedSharedPrecedent(e, (t) => {
        t.kind === `cell` &&
          u(
            this.cellFormulaToIndex.get(
              this._getCompressedSharedPrecedentCell(e, t),
            ),
          );
      });
    }
    _addAcyclicRangePrecedentGroups(e, t, n, r, i, a, o, s, c, l, u, d, f) {
      let p = [],
        m = (m) => {
          let h = this._getOrCreateAcyclicRangeGroup(
            m,
            r,
            i,
            a,
            o,
            s,
            c,
            l,
            u,
            d,
          );
          if (a[h] === 0) return;
          for (let e = 0; e < p.length; e++) if (p[e] === h) return;
          (p.push(h), o[h].push(t), n[t]++, (d[t] = 1));
          let g = s[h];
          (g >= 0 && this._unionCalculationForestComponents(l, u, g, t),
            this._indexToNodeType[e] === 1 &&
              tt(m, this.codec.decodeCell(this.indexToNodeId[e])) &&
              (f[t] = 1));
        },
        h = this._rangePrecedents[e];
      if (h) for (let e = 0; e < h.length; e++) m(h[e]);
      let g = this._runtimeRangePrecedents[e];
      if (g) for (let e = 0; e < g.length; e++) m(g[e]);
      this._forEachCompressedSharedPrecedent(e, (t) => {
        t.kind === `range` && m(this._getCompressedSharedPrecedentRange(e, t));
      });
    }
    _getOrCreateAcyclicRangeGroup(e, t, n, r, i, a, o, s, c, l) {
      let u = U(e),
        d = [
          u.unitId,
          u.sheetId,
          u.range.startRow,
          u.range.endRow,
          u.range.startColumn,
          u.range.endColumn,
        ].join(`:`),
        f = t.get(d);
      if (f !== void 0) return f;
      let p = n.length,
        m = 0,
        h = -1;
      return (
        t.set(d, p),
        n.push(u),
        i.push([]),
        o.addRange(p, u),
        this._formulaCellIndex.forEachFormulaInRange(u, (e) => {
          if (!this._activeNode[e] || !this.dirty[e]) return;
          let t = this._getCurrentDirtyOrdinal(e);
          if (!(t < 0)) {
            if ((m++, (l[t] = 1), h === -1)) {
              h = t;
              return;
            }
            this._unionCalculationForestComponents(s, c, h, t);
          }
        }),
        r.push(m),
        a.push(h),
        p
      );
    }
    _appendAcyclicCalculationNode(e, t, n, r, i, a, o, s) {
      let c = r[a] === 0,
        l = this._findCalculationForestRoot(n, a),
        u = (c ? s + 1 : t[l]) - 1;
      if (
        (u === -1 &&
          ((u = e.length),
          c || (t[l] = u + 1),
          e.push({ hasCycle: !1, plan: [] })),
        i[a] === 1)
      ) {
        (e[u].plan.push({ type: `cycle`, nodeIndices: [o] }),
          (e[u].hasCycle = !0));
        return;
      }
      this._appendCalculationNodePlanItem(e[u].plan, o);
    }
    _getCurrentDirtyOrdinal(e) {
      return this._tarjanSeenEpoch[e] === this._tarjanEpoch
        ? this._tarjanIndexArr[e] - 1
        : -1;
    }
    _buildDirtyCalculationGraphWithScc(e) {
      let t = this._findDirtySccs(e),
        n = t.componentStarts.length,
        r = new Int32Array(this.indexToNodeId.length),
        i = new Int32Array(this.indexToNodeId.length);
      (r.fill(-1), i.fill(-1));
      for (let t = 0; t < e.length; t++) i[e[t]] = t;
      let a = new Int32Array(n);
      a.fill(2 ** 53 - 1);
      for (let e = 0; e < n; e++) {
        let n = 2 ** 53 - 1,
          o = t.componentStarts[e],
          s = this._getDirtySccEnd(t, e);
        for (let a = o; a < s; a++) {
          let o = t.componentNodes[a];
          r[o] = e;
          let s = i[o];
          s >= 0 && s < n && (n = s);
        }
        a[e] = n;
      }
      let o = new Int32Array(n);
      o.fill(-1);
      let s = [],
        c = [],
        l = new Int32Array(n),
        u = new Uint8Array(n),
        d = new Uint8Array(n),
        f = new Uint32Array(n),
        p = 1,
        m = new Uint32Array(n);
      for (let e = 0; e < n; e++) l[e] = e;
      for (let e = 0; e < n; e++) {
        p === 4294967295 && (f.fill(0), (p = 1));
        let n = t.componentStarts[e],
          i = this._getDirtySccEnd(t, e);
        for (let a = n; a < i; a++) {
          let n = t.componentNodes[a];
          this._forEachDependentOfNodeDeduped(n, (t) => {
            if (!this._activeNode[t] || !this.dirty[t]) return;
            let n = r[t];
            n < 0 ||
              n === e ||
              (f[n] !== p &&
                ((f[n] = p),
                c.push(o[e]),
                s.push(n),
                (o[e] = s.length - 1),
                m[n]++,
                (d[e] = 1),
                (d[n] = 1),
                this._unionCalculationForestComponents(l, u, e, n)));
          });
        }
        p++;
      }
      let h = this._toposortComponents(o, s, c, m, a),
        g = this._buildCalculationForest(t, h, l, d);
      ((t.componentNodes.length = 0),
        (t.componentStarts.length = 0),
        (s.length = 0),
        (c.length = 0),
        (h.length = 0));
      let _ = !1;
      for (let e = 0; e < g.length; e++)
        if (g[e].hasCycle) {
          _ = !0;
          break;
        }
      return { calculationForest: g, hasCycle: _ };
    }
    _toposortComponents(e, t, n, r, i) {
      let a = new Uint32Array(r),
        o = [];
      for (let e = 0; e < a.length; e++)
        a[e] === 0 && this._insertComponentByRank(o, 0, e, i);
      let s = [],
        c = 0;
      for (; c < o.length;) {
        let r = o[c++];
        s.push(r);
        for (let s = e[r]; s !== -1; s = n[s]) {
          let e = t[s];
          (a[e]--, a[e] === 0 && this._insertComponentByRank(o, c, e, i));
        }
      }
      return s;
    }
    _insertComponentByRank(e, t, n, r) {
      let i = e.length,
        a = r[n];
      for (; i > t && r[e[i - 1]] > a;) i--;
      e.splice(i, 0, n);
    }
    _buildCalculationForest(e, t, n, r) {
      let i = new Int32Array(e.componentStarts.length);
      i.fill(-1);
      let a = [],
        o = -1;
      for (let s = 0; s < t.length; s++) {
        let c = t[s],
          l = this._findCalculationForestRoot(n, c),
          u = r[c] === 0,
          d = u ? o : i[l];
        d === -1 &&
          ((d = a.length),
          u ? (o = d) : (i[l] = d),
          a.push({ hasCycle: !1, plan: [] }));
        let f = a[d],
          p = this._createCalculationPlanItem(e, c);
        if (p.type === `node`) {
          this._appendCalculationNodePlanItem(f.plan, p.nodeIndex);
          continue;
        }
        (f.plan.push(p), p.type === `cycle` && (f.hasCycle = !0));
      }
      return a;
    }
    _appendCalculationNodePlanItem(e, t) {
      let n = e[e.length - 1];
      if (
        (n == null ? void 0 : n.type) === `nodes` &&
        n.nodeIndices.length < 8192
      ) {
        n.nodeIndices.push(t);
        return;
      }
      e.push({ type: `nodes`, nodeIndices: [t] });
    }
    _findCalculationForestRoot(e, t) {
      let n = t;
      for (; e[n] !== n;) n = e[n];
      for (; e[t] !== t;) {
        let r = e[t];
        ((e[t] = n), (t = r));
      }
      return n;
    }
    _unionCalculationForestComponents(e, t, n, r) {
      let i = this._findCalculationForestRoot(e, n),
        a = this._findCalculationForestRoot(e, r);
      if (i !== a) {
        if (t[i] < t[a]) {
          let e = i;
          ((i = a), (a = e));
        }
        ((e[a] = i), t[i] === t[a] && t[i]++);
      }
    }
    _createCalculationPlanItem(e, t) {
      let n = e.componentStarts[t],
        r = this._getDirtySccEnd(e, t);
      if (r - n === 1 && !this._hasSelfLoop(e.componentNodes[n]))
        return { type: `node`, nodeIndex: e.componentNodes[n] };
      let i = e.componentNodes.slice(n, r);
      return (i.sort((e, t) => e - t), { type: `cycle`, nodeIndices: i });
    }
    _getDirtySccEnd(e, t) {
      return t + 1 < e.componentStarts.length
        ? e.componentStarts[t + 1]
        : e.componentNodes.length;
    }
    _findDirtySccs(e) {
      this._nextTarjanEpoch();
      let t = 1,
        n = [],
        r = [],
        i = [],
        a = (e) => {
          let t = [];
          return (
            this._forEachDependentOfNodeDeduped(e, (e) => {
              this._activeNode[e] && this.dirty[e] && t.push(e);
            }),
            t
          );
        },
        o = (e, r) => (
          (this._tarjanSeenEpoch[e] = this._tarjanEpoch),
          (this._tarjanIndexArr[e] = t),
          (this._tarjanLowArr[e] = t),
          t++,
          n.push(e),
          (this._tarjanOnStack[e] = 1),
          {
            nodeIndex: e,
            dependents: a(e),
            nextDependentIndex: 0,
            parentNodeIndex: r,
          }
        ),
        s = (e) => {
          if (this._tarjanLowArr[e] === this._tarjanIndexArr[e])
            for (i.push(r.length); ;) {
              let t = n.pop();
              if (((this._tarjanOnStack[t] = 0), r.push(t), t === e)) break;
            }
        },
        c = (e) => {
          let t = [o(e)];
          for (; t.length > 0;) {
            let e = t[t.length - 1],
              n = e.nodeIndex;
            if (e.nextDependentIndex < e.dependents.length) {
              let r = e.dependents[e.nextDependentIndex++];
              this._tarjanSeenEpoch[r] === this._tarjanEpoch
                ? this._tarjanOnStack[r] &&
                  (this._tarjanLowArr[n] = Math.min(
                    this._tarjanLowArr[n],
                    this._tarjanIndexArr[r],
                  ))
                : t.push(o(r, n));
              continue;
            }
            (t.pop(),
              e.parentNodeIndex !== void 0 &&
                (this._tarjanLowArr[e.parentNodeIndex] = Math.min(
                  this._tarjanLowArr[e.parentNodeIndex],
                  this._tarjanLowArr[n],
                )),
              s(n));
          }
        };
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        this._activeNode[n] &&
          this.dirty[n] &&
          this._tarjanSeenEpoch[n] !== this._tarjanEpoch &&
          c(n);
      }
      return { componentNodes: r, componentStarts: i };
    }
    _hasSelfLoop(e) {
      let t = !1;
      return (
        this._forEachDependentOfNodeDeduped(e, (n) => {
          n === e && (t = !0);
        }),
        t
      );
    }
    _nextEmitEpoch() {
      (this._emitEpoch++,
        this._emitEpoch >= 4294967295 &&
          (this._seenNodeEpoch.fill(0), (this._emitEpoch = 1)));
    }
    _emitNodeOnce(e) {
      return this._seenNodeEpoch[e] === this._emitEpoch
        ? !1
        : ((this._seenNodeEpoch[e] = this._emitEpoch), !0);
    }
    _emitNodeOnceAndMarkDirty(e, t = !1, n = !0) {
      this._emitNodeOnce(e) && this._markNodeIndexDirty(e, t, n);
    }
    _nextVisitEpoch() {
      (this._visitEpoch++,
        this._visitEpoch >= 4294967295 &&
          (this._visitNodeEpoch.fill(0), (this._visitEpoch = 1)));
    }
    _nextEdgeEpoch() {
      (this._edgeEpoch++,
        this._edgeEpoch >= 4294967295 &&
          (this._edgeSeenEpoch.fill(0), (this._edgeEpoch = 1)));
    }
    _nextTarjanEpoch() {
      (this._tarjanEpoch++,
        this._tarjanEpoch >= 4294967295 &&
          (this._tarjanSeenEpoch.fill(0), (this._tarjanEpoch = 1)));
    }
  },
  ht = class extends t.DependencyManagerBaseService {
    constructor(...e) {
      (super(...e),
        s(
          this,
          `_dependencyEngineCache`,
          new mt({ maxRows: 1048576, maxCols: 16384 }),
        ));
    }
    reset() {
      this._dependencyEngineCache.reset();
    }
    _getCellIdsAndRanges(e) {
      let t = [],
        n = [];
      for (let r = 0; r < e.rangeList.length; r++) {
        let { unitId: i, sheetId: a, range: o } = e.rangeList[r];
        if (o.startRow === o.endRow && o.startColumn === o.endColumn) {
          let e = this._dependencyEngineCache.encodeCell(
            i,
            a,
            o.startRow,
            o.startColumn,
          );
          t.push(e);
        } else n.push({ unitId: i, sheetId: a, range: o });
      }
      return { cellIds: t, ranges: n };
    }
    _getDynamicDeps(e, t, n, r) {
      if (!(!e.addressFunctionNodes || e.addressFunctionNodes.length === 0))
        return [
          {
            id: `address-functions`,
            paramDeps: { cells: t, ranges: n, nodes: r },
          },
        ];
    }
    addOtherFormulaDependencyPro(e, t, n, r, i, a = `replace`) {
      let { cellIds: o, ranges: s } = this._getCellIdsAndRanges(r),
        c = this._getDynamicDeps(r, o, s, i),
        l = r.refOffsetX || 0,
        u = r.refOffsetY || 0,
        d = this._dependencyEngineCache.encodeOtherFormulaId(e, t, n, l, u);
      return this._dependencyEngineCache.setOtherFormulaDeps(
        d,
        { cells: o, ranges: s, nodes: i, dynamics: c },
        { checkCycle: !1, markDirty: !1, mode: a },
      ).nodeIndex;
    }
    removeOtherFormulaDependency(e, t, n) {
      this._dependencyEngineCache.clearOtherFormulas(e, t, n, void 0, void 0, {
        markDependentsDirty: !0,
      });
    }
    clearOtherFormulaDependency(e, t) {
      t
        ? this._dependencyEngineCache.clearOtherFormulas(
            e,
            t,
            void 0,
            void 0,
            void 0,
            { markDependentsDirty: !0 },
          )
        : this._dependencyEngineCache.clearOtherFormulas(
            e,
            void 0,
            void 0,
            void 0,
            void 0,
            { markDependentsDirty: !0 },
          );
    }
    getOtherFormulaDependencyPro(e, t, n, r, i) {
      let a = this._dependencyEngineCache.encodeOtherFormulaId(e, t, n, r, i);
      if (this._dependencyEngineCache.hasOtherFormula(a))
        return this._dependencyEngineCache.getNodeIndex({ type: 2, id: a });
    }
    addFeatureFormulaDependencyPro(e, t, n, r) {
      let { cellIds: i, ranges: a } = this._getCellIdsAndRanges(r),
        o = this._dependencyEngineCache.encodeFeatureCalculationId(e, t, n);
      return this._dependencyEngineCache.setFeatureCalculationDeps(
        o,
        { cells: i, ranges: a },
        { checkCycle: !1, markDirty: !1 },
      ).nodeIndex;
    }
    removeFeatureFormulaDependency(e, t, n) {
      let r = n.map((n) =>
        this._dependencyEngineCache.encodeFeatureCalculationId(e, t, n),
      );
      this._dependencyEngineCache.removeFeatureCalculations(r, {
        markDependentsDirty: !0,
        detachDependents: !0,
      });
    }
    clearFeatureFormulaDependency(e, t) {
      t
        ? this._dependencyEngineCache.clearFeatureCalculations(e, t, {
            markDependentsDirty: !0,
            detachDependents: !0,
          })
        : this._dependencyEngineCache.clearFeatureCalculations(e, void 0, {
            markDependentsDirty: !0,
            detachDependents: !0,
          });
    }
    getFeatureFormulaDependencyPro(e, t, n) {
      let r = this._dependencyEngineCache.encodeFeatureCalculationId(e, t, n);
      if (this._dependencyEngineCache.hasFeatureCalculation(r))
        return this._dependencyEngineCache.getNodeIndex({ type: 3, id: r });
    }
    getFeatureFormulaDependencyNodePro(e, t, n) {
      return {
        type: 3,
        id: this._dependencyEngineCache.encodeFeatureCalculationId(e, t, n),
      };
    }
    reserveFormulaDependencyCapacity(e, t = e) {
      this._dependencyEngineCache.reserveDependencyCapacity(e, t);
    }
    addFormulaDependencyPro(e, t, n, r, i, a, o = `replace`) {
      let s = this._dependencyEngineCache.encodeCell(e, t, n, r),
        { cellIds: c, ranges: l } = this._getCellIdsAndRanges(i),
        u = {
          cells: c,
          ranges: l,
          nodes: a,
          dynamics: this._getDynamicDeps(i, c, l, a),
        };
      return (
        o === `replace`
          ? this._dependencyEngineCache.setNewCellFormulaDeps(s, u)
          : this._dependencyEngineCache.setCellFormulaDeps(s, u, {
              checkCycle: !1,
              markDirty: !1,
              mode: o,
            })
      ).nodeIndex;
    }
    addFormulaDependencyNodeOnlyPro(e, t, n, r) {
      let i = this._dependencyEngineCache.encodeCell(e, t, n, r);
      return this._dependencyEngineCache.setNewCellFormulaNodeOnly(i).nodeIndex;
    }
    addFormulaDependencyNodeOnlyRangePro(e, t, n, r) {
      return this._dependencyEngineCache.setNewCellFormulaNodeOnlyRange(
        e,
        t,
        n,
        r,
      );
    }
    registerCompressedSharedFormulaGroup(e) {
      this._dependencyEngineCache.registerCompressedSharedFormulaGroup(e);
    }
    clearCompressedSharedFormulaGroups(e, t) {
      this._dependencyEngineCache.clearCompressedSharedFormulaGroups(e, t);
    }
    removeFormulaDependency(e, t, n, r) {
      let i = this._dependencyEngineCache.encodeCell(e, t, n, r);
      this._dependencyEngineCache.removeCellFormula(i, {
        markDependentsDirty: !0,
      });
    }
    clearFormulaDependency(e, t) {
      (this._dependencyEngineCache.clearCompressedSharedFormulaGroups(e, t),
        t
          ? this._dependencyEngineCache.clearCellFormulas(e, t, {
              markDependentsDirty: !0,
            })
          : this._dependencyEngineCache.clearCellFormulas(e, void 0, {
              markDependentsDirty: !0,
            }));
    }
    getFormulaDependencyPro(e, t, n, r) {
      let i = this._dependencyEngineCache.encodeCell(e, t, n, r);
      if (this._dependencyEngineCache.hasCellFormula(i))
        return this._dependencyEngineCache.getNodeIndex({ type: 1, id: i });
    }
    markIndicesChanged(e, t) {
      this._dependencyEngineCache.markCalcNodeIndicesChanged(e, t);
    }
    markRangesChanged(e, t) {
      this._dependencyEngineCache.markRangesChanged(e, t);
    }
    markDirtyFeatureCalculations(e) {
      let t = [];
      (Object.keys(e).forEach((n) => {
        let r = e[n];
        r != null &&
          Object.keys(r).forEach((e) => {
            let i = r[e];
            i != null &&
              Object.keys(i).forEach((r) => {
                t.push(this.getFeatureFormulaDependencyNodePro(n, e, r));
              });
          });
      }),
        this._dependencyEngineCache.markCalcNodesChanged(t));
    }
    markDirtyOtherFormulas(e) {
      Object.keys(e).forEach((t) => {
        let n = e[t];
        n != null &&
          Object.keys(n).forEach((e) => {
            let r = n[e];
            r != null &&
              this._dependencyEngineCache.markOtherFormulasChanged(
                t,
                e,
                Object.keys(r),
              );
          });
      });
    }
    markDirtySheetNames(e) {
      let t = [];
      (Object.keys(e).forEach((n) => {
        let r = e[n];
        r != null &&
          Object.keys(r).forEach((e) => {
            t.push({
              unitId: n,
              sheetId: e,
              range: {
                startRow: 0,
                endRow: 1048575,
                startColumn: 0,
                endColumn: 16383,
              },
            });
          });
      }),
        this._dependencyEngineCache.markRangesChanged(t, {
          includeFormulaCells: !1,
        }));
    }
    markAllDirty() {
      this._dependencyEngineCache.markAllDirty();
    }
    clearCalculatedDirty(e) {
      this._dependencyEngineCache.clearCalculatedDirty(e);
    }
    hasDynamicDeps(e) {
      return this._dependencyEngineCache.hasDynamicDeps(e);
    }
    hasDynamicDepsByIndex(e) {
      return this._dependencyEngineCache.hasDynamicDeps(
        this._dependencyEngineCache.getNodeRefByIndex(e),
      );
    }
    refreshDynamicDeps(e, t) {
      return this._dependencyEngineCache.refreshDynamicDeps(e, t);
    }
    refreshDynamicDepsByIndex(e, t) {
      return this._dependencyEngineCache.refreshDynamicDeps(
        this._dependencyEngineCache.getNodeRefByIndex(e),
        t,
      );
    }
    hasUncalculatedDirtyPrecedentByIndex(e, t) {
      return this._dependencyEngineCache.hasUncalculatedDirtyPrecedentByIndex(
        e,
        t,
      );
    }
    forEachPrecedentNodeByIndex(e, t) {
      this._dependencyEngineCache.forEachPrecedentNodeByIndex(e, (e, n) => {
        t(n);
      });
    }
    forEachDependentNodeByIndex(e, t) {
      this._dependencyEngineCache.forEachDependentByIndex(e, (e, n) => {
        t(n);
      });
    }
    prepareDynamicDependencies(e) {
      return this._dependencyEngineCache.prepareDynamicDependencies(e);
    }
    getCalculationOrder(e) {
      return this._dependencyEngineCache.getCalculationOrder(e);
    }
  };
let gt = class extends t.FormulaUnitReferenceResolver {
  constructor(e, t) {
    (super(e), (this._externalReferenceModel = t));
  }
  resolve(n) {
    if (/^[1-9]\d*$/.test(n.qualifier)) {
      let r = this._externalReferenceModel.resolveBinding(
        n.hostUnitId,
        n.qualifier,
      );
      if (r.status !== `resolved`) return t.ErrorType.REF;
      let { link: i } = r;
      if (
        n.referenceKind === `a1` &&
        i.target.unitType === e.UniverInstanceType.UNIVER_BASE
      )
        return t.ErrorType.REF;
      if (i.target.liveUnitId) {
        let e = super.resolve({ ...n, qualifier: i.target.liveUnitId });
        if (typeof e != `string`) return e;
      }
      let a = super.resolve({ ...n, qualifier: i.target.name });
      return typeof a != `string` &&
        (a.unitType == null || a.unitType === i.target.unitType)
        ? a
        : {
            unitId: E(n.hostUnitId, i.slot),
            unitType: i.target.unitType,
            externalReference: {
              kind: `ooxml`,
              qualifier: n.qualifier,
              slot: i.slot,
            },
          };
    }
    let r = this._currentConfigService.getExternalReferences()[n.hostUnitId],
      i = Object.entries((r == null ? void 0 : r.references) ?? {}),
      a = n.qualifier.toLowerCase(),
      o = i.filter(([, e]) => e.qualifier.toLowerCase() === a),
      s =
        o.length > 0
          ? o
          : i.filter(
              ([, e]) =>
                (0, t.normalizeFormulaUnitName)(e.qualifier) ===
                (0, t.normalizeFormulaUnitName)(n.qualifier),
            );
    if (s.length > 1) return t.ErrorType.REF;
    if (s.length === 1) {
      let [r, i] = s[0];
      return n.referenceKind === `a1` &&
        i.sourceUnitType === e.UniverInstanceType.UNIVER_BASE
        ? t.ErrorType.REF
        : {
            unitId: i.sourceUnitId,
            unitType: i.sourceUnitType,
            externalReference: {
              kind: `host`,
              qualifier: n.qualifier,
              referenceId: r,
            },
          };
    }
    return super.resolve(n);
  }
};
gt = k([O(0, t.IFormulaCurrentConfigService), O(1, (0, e.Inject)(D))], gt);
const _t = new Set([
  t.FUNCTION_NAMES_DATE.NOW,
  t.FUNCTION_NAMES_DATE.TODAY,
  t.FUNCTION_NAMES_MATH.RAND,
  t.FUNCTION_NAMES_MATH.RANDARRAY,
  t.FUNCTION_NAMES_MATH.RANDBETWEEN,
]);
let vt = class {
  constructor(e) {
    this._lexerTreeBuilder = e;
  }
  assess(e, n) {
    if ((n == null ? void 0 : n.status) !== t.FormulaResultStatus.SUCCESS)
      return { eligible: !1, reason: `not-successful` };
    let r = e.startsWith(`=`) ? e.slice(1) : e;
    return (this._lexerTreeBuilder.sequenceNodesBuilder(r) ?? []).some(
      (e) =>
        typeof e != `string` &&
        e.nodeType === t.sequenceNodeType.FUNCTION &&
        _t.has(e.token.toUpperCase()),
    )
      ? { eligible: !1, reason: `volatile` }
      : { eligible: !0 };
  }
};
vt = k([O(0, (0, e.Inject)(t.LexerTreeBuilder))], vt);
let yt = class {
  constructor(e, t, n, r) {
    ((this._currentConfigService = e),
      (this._referenceDataService = t),
      (this._excelExternalReferenceModel = n),
      (this._superTableService = r),
      s(this, `_requestCounter`, 0),
      s(this, `_generation`, -1),
      s(this, `_inflight`, new Map()),
      s(this, `_completed`, new Set()));
  }
  async load(e) {
    let n = this._currentConfigService.getCalculationGeneration();
    n !== this._generation &&
      ((this._generation = n), this._inflight.clear(), this._completed.clear());
    let r = this._createRequest(e, n);
    if (!r) return t.ErrorType.REF;
    let i = [n, r.hostUnitId, r.syntheticUnitId, e.referenceKind, e.token].join(
      `\0`,
    );
    if (this._completed.has(i)) return;
    let a = this._inflight.get(i);
    if (a) return a;
    let o = this._loadRequest(r, e.resolution, n)
      .then((e) => (e ?? this._completed.add(i), e))
      .finally(() => this._inflight.delete(i));
    return (this._inflight.set(i, o), o);
  }
  async loadRuntimeRange(e) {
    var t, n;
    let r = this._currentConfigService.getCalculationGeneration();
    r !== this._generation &&
      ((this._generation = r), this._inflight.clear(), this._completed.clear());
    let i = this._resolveRuntimeRange(e);
    if (!i) return;
    let { request: a, resolution: o } = i,
      s = (t = a.ranges[0]) == null ? void 0 : t.range,
      c = [
        r,
        a.hostUnitId,
        a.syntheticUnitId,
        `runtime`,
        (n = a.ranges[0]) == null ? void 0 : n.sheetName,
        s == null ? void 0 : s.startRow,
        s == null ? void 0 : s.endRow,
        s == null ? void 0 : s.startColumn,
        s == null ? void 0 : s.endColumn,
      ].join(`\0`);
    if (this._completed.has(c)) return !1;
    let l = this._inflight.get(c);
    if (l) return (await l) ?? !1;
    let u = this._loadRequest(a, o, r)
      .then((e) => (e ?? this._completed.add(c), e))
      .finally(() => this._inflight.delete(c));
    return (this._inflight.set(c, u), (await u) ?? !0);
  }
  _resolveRuntimeRange(e) {
    var t, n;
    let r = this._currentConfigService.getExternalReferences()[e.hostUnitId],
      i = Object.entries((r == null ? void 0 : r.references) ?? {}).find(
        ([, t]) => t.sourceUnitId === e.unitId,
      );
    if (i) {
      let [t, n] = i;
      return {
        resolution: {
          unitId: n.sourceUnitId,
          unitType: n.sourceUnitType,
          externalReference: {
            kind: `host`,
            qualifier: n.qualifier,
            referenceId: t,
          },
        },
        request: {
          requestId: `host-external-request-${++this._requestCounter}`,
          calculationId: `formula-calculation-${this._generation}`,
          hostUnitId: e.hostUnitId,
          referenceId: t,
          syntheticUnitId: n.sourceUnitId,
          target: {
            name: n.qualifier,
            unitType: n.sourceUnitType,
            sourceUnitId: n.sourceUnitId,
          },
          ranges: [
            {
              sheetId: e.sheetId,
              sheetName: this._runtimeRangeSheetName(e),
              range: e.range,
            },
          ],
          requireFresh: !0,
        },
      };
    }
    let a =
      (t = this._excelExternalReferenceModel.get(e.hostUnitId)) == null
        ? void 0
        : t.links.find((t) => E(e.hostUnitId, t.slot) === e.unitId);
    if (a)
      return {
        resolution: {
          unitId: e.unitId,
          unitType: a.target.unitType,
          externalReference: {
            kind: `ooxml`,
            qualifier: String(a.slot),
            slot: a.slot,
          },
        },
        request: {
          requestId: `ooxml-external-request-${++this._requestCounter}`,
          calculationId: `formula-calculation-${this._generation}`,
          hostUnitId: e.hostUnitId,
          bindingSlot: a.slot,
          syntheticUnitId: e.unitId,
          target: a.target,
          ranges: [
            {
              sheetId: e.sheetId,
              sheetName:
                this._runtimeRangeSheetName(e) ||
                ((n = a.sheetNames.find((t) => t.sheetId === e.sheetId)) == null
                  ? void 0
                  : n.name),
              range: e.range,
            },
          ],
          requireFresh: !0,
        },
      };
  }
  _runtimeRangeSheetName(e) {
    var t;
    if (e.sheetName) return e.sheetName;
    let n = this._currentConfigService.getSheetNameMap()[e.unitId] ?? {};
    return (t = Object.entries(n).find(([, t]) => t === e.sheetId)) == null
      ? void 0
      : t[0];
  }
  _createRequest(e, t) {
    let n = e.resolution.externalReference;
    if (!n) return;
    let r =
      e.referenceKind === `table`
        ? { tableName: e.tableName }
        : this._createA1RangeRequest(e.token);
    if (!r) return;
    if (n.kind === `host`) {
      let i = this._currentConfigService.getExternalReferences()[e.hostUnitId],
        a = n.referenceId
          ? i == null
            ? void 0
            : i.references[n.referenceId]
          : void 0;
      return a
        ? {
            requestId: `host-external-request-${++this._requestCounter}`,
            calculationId: `formula-calculation-${t}`,
            hostUnitId: e.hostUnitId,
            referenceId: n.referenceId,
            syntheticUnitId: a.sourceUnitId,
            target: {
              name: a.qualifier,
              unitType: a.sourceUnitType,
              sourceUnitId: a.sourceUnitId,
            },
            ranges: [r],
            requireFresh: !0,
          }
        : void 0;
    }
    let i = n.slot;
    if (i == null) return;
    let a = this._excelExternalReferenceModel.resolveBinding(
      e.hostUnitId,
      String(i),
    );
    if (a.status === `resolved`)
      return {
        requestId: `ooxml-external-request-${++this._requestCounter}`,
        calculationId: `formula-calculation-${t}`,
        hostUnitId: e.hostUnitId,
        bindingSlot: i,
        syntheticUnitId: e.resolution.unitId,
        target: a.link.target,
        ranges: [r],
        requireFresh: !0,
      };
  }
  _createA1RangeRequest(e) {
    try {
      let { sheetName: n, range: r } = (0,
      t.deserializeRangeWithSheetWithCache)(e);
      return !n ||
        !Number.isFinite(r.startRow) ||
        !Number.isFinite(r.endRow) ||
        !Number.isFinite(r.startColumn) ||
        !Number.isFinite(r.endColumn)
        ? void 0
        : { sheetName: n, range: r };
    } catch {}
  }
  async _loadRequest(e, n, r) {
    let i = await this._referenceDataService.readData(e);
    if (
      r !== this._currentConfigService.getCalculationGeneration() ||
      i.calculationId !== e.calculationId
    )
      return t.ErrorType.NA;
    if (i.error) return i.error;
    if (i.sheets.length === 0) return t.ErrorType.NA;
    this._materialize(i, n);
  }
  _materialize(e, t) {
    var n, r;
    let i = this._currentConfigService.getUnitData(),
      a = this._currentConfigService.getSheetNameMap(),
      o = this._currentConfigService.getUnitNameMap(),
      s = i[t.unitId] ?? {},
      c = a[t.unitId] ?? {};
    for (let t of e.sheets)
      (this._materializeSheet(s, t), (c[t.name] = t.sheetId));
    ((i[t.unitId] = s),
      (a[t.unitId] = c),
      (o[t.unitId] = {
        name:
          ((n = o[t.unitId]) == null ? void 0 : n.name) ??
          ((r = t.externalReference) == null ? void 0 : r.qualifier) ??
          t.unitId,
        unitType: t.unitType,
      }),
      this._currentConfigService.registerUnitData(i),
      this._currentConfigService.registerSheetNameMap(a),
      this._currentConfigService.registerUnitNameMap(o));
    for (let n of e.tables ?? [])
      this._superTableService.registerTable(t.unitId, n.name, {
        sheetId: n.sheetId,
        range: n.range,
        titleMap: new Map(n.columns.map((e, t) => [e, t])),
        showHeader: n.showHeader,
      });
  }
  _materializeSheet(t, n) {
    let r = t[n.sheetId],
      i = (r == null ? void 0 : r.cellData) ?? new e.ObjectMatrix();
    for (let { row: e, column: t, cell: r } of n.cells)
      i.setValue(e, t, { ...i.getValue(e, t), ...r });
    t[n.sheetId] = {
      cellData: i,
      rowCount: Math.max((r == null ? void 0 : r.rowCount) ?? 0, n.rowCount),
      columnCount: Math.max(
        (r == null ? void 0 : r.columnCount) ?? 0,
        n.columnCount,
      ),
      rowData: (r == null ? void 0 : r.rowData) ?? {},
      columnData: (r == null ? void 0 : r.columnData) ?? {},
    };
  }
};
yt = k(
  [
    O(0, t.IFormulaCurrentConfigService),
    O(1, j),
    O(2, (0, e.Inject)(D)),
    O(3, t.ISuperTableService),
  ],
  yt,
);
let Q = class {
  constructor(e, t, n) {
    ((this._formulaDataModel = e),
      (this._superTableService = t),
      (this._providerRegistry = n));
  }
  async readData(e) {
    let t = this._providerRegistry.getProviders(e),
      n = !!e.target.sourceUnitId && t.length > 0;
    if (n) {
      let n = await bt(e, t);
      if (n) return n;
    }
    let r = this._formulaDataModel.getCalculateData(),
      i = Ct(e, r.unitNameMap, r.allUnitData);
    if (i) {
      let t = this._readLiveSheets(e, i, r.allUnitData, r.unitSheetNameMap),
        n = this._readLiveTables(e, i);
      if (t.length > 0)
        return {
          requestId: e.requestId,
          calculationId: e.calculationId,
          source: `main-live`,
          freshness: `fresh`,
          sheets: t,
          tables: n,
        };
    }
    if (!n) {
      let n = await bt(e, t);
      if (n) return n;
    }
    return le(e);
  }
  _readLiveTables(e, t) {
    let n = [];
    for (let a of e.ranges) {
      var r, i;
      if (!a.tableName) continue;
      let e = Array.from(
        ((r = this._superTableService.getTableMap(t)) == null
          ? void 0
          : r.entries()) ?? [],
      ).find(([e]) => {
        var t;
        return (
          e.toLowerCase() ===
          ((t = a.tableName) == null ? void 0 : t.toLowerCase())
        );
      });
      if (!e) continue;
      let [o, s] = e;
      n.push({
        name: o,
        sheetId: s.sheetId,
        range: s.range,
        columns: Array.from(
          ((i = s.titleMap) == null ? void 0 : i.entries()) ?? [],
        )
          .sort((e, t) => e[1] - t[1])
          .map(([e]) => e),
        showHeader: s.showHeader,
      });
    }
    return n;
  }
  _readLiveSheets(e, t, n, r) {
    let i = [];
    for (let o of e.ranges) {
      var a;
      let e = this._resolveLiveRange(t, o, n, r);
      if (!e) continue;
      let { sheetId: s, sheetName: c, range: l } = e,
        u = (a = n[t]) == null ? void 0 : a[s];
      if (!u) continue;
      let d = [];
      for (let e = l.startRow; e <= l.endRow; e++)
        for (let t = l.startColumn; t <= l.endColumn; t++) {
          let n = u.cellData.getValue(e, t);
          n != null && d.push({ row: e, column: t, cell: n });
        }
      i.push({
        name: c,
        sheetId: s,
        rowCount: u.rowCount,
        columnCount: u.columnCount,
        coverage: [l],
        cells: d,
      });
    }
    return i;
  }
  _resolveLiveRange(e, t, n, r) {
    return t.tableName
      ? xt(e, t.tableName, r, this._superTableService)
      : St(e, t, n, r);
  }
};
Q = k(
  [
    O(0, (0, e.Inject)(t.FormulaDataModel)),
    O(1, t.ISuperTableService),
    O(2, se),
  ],
  Q,
);
async function bt(e, t) {
  for (let n of t) {
    let t = await n.readData(e);
    if (t && (t.freshness !== `stale` || e.requireFresh === !1))
      return t.source === `ooxml-cache` || t.source === `unavailable`
        ? t
        : { ...t, source: `provider` };
  }
}
function xt(e, t, n, r) {
  var i, a;
  let o = r.getTableMap(e),
    s =
      (i = Array.from((o == null ? void 0 : o.entries()) ?? []).find(
        ([e]) => e.toLowerCase() === t.toLowerCase(),
      )) == null
        ? void 0
        : i[1];
  if (!s) return;
  let c =
    ((a = Object.entries(n[e] ?? {}).find(([, e]) => e === s.sheetId)) == null
      ? void 0
      : a[0]) ?? s.sheetId;
  return { sheetId: s.sheetId, sheetName: c, range: s.range };
}
function St(e, t, n, r) {
  var i, a, o;
  let s = r[e] ?? {},
    c =
      t.sheetId ??
      (t.sheetName
        ? (i = Object.entries(s).find(([e]) => {
            var n;
            return (
              e.toLowerCase() ===
              ((n = t.sheetName) == null ? void 0 : n.toLowerCase())
            );
          })) == null
          ? void 0
          : i[1]
        : void 0);
  if (!(!c || !t.range || !((a = n[e]) != null && a[c])))
    return {
      sheetId: c,
      sheetName:
        t.sheetName ??
        ((o = Object.entries(s).find(([, e]) => e === c)) == null
          ? void 0
          : o[0]) ??
        c,
      range: t.range,
    };
}
function Ct(e, n, r) {
  if (e.target.sourceUnitId && r[e.target.sourceUnitId])
    return e.target.sourceUnitId;
  if (e.target.liveUnitId && r[e.target.liveUnitId]) return e.target.liveUnitId;
  let i = Object.entries(n).filter(
      ([t, n]) => !!r[t] && n.unitType === e.target.unitType,
    ),
    a = e.target.name.toLowerCase(),
    o = i.filter(([, e]) => e.name.toLowerCase() === a),
    s =
      o.length > 0
        ? o
        : i.filter(
            ([, n]) =>
              (0, t.normalizeFormulaUnitName)(n.name) ===
              (0, t.normalizeFormulaUnitName)(e.target.name),
          );
  return s.length === 1 ? s[0][0] : void 0;
}
let $ = class extends t.UniverFormulaEnginePlugin {
  _extendFormulaExecutionDependencies(e) {}
  _initializeWithOverride() {
    var e;
    if (
      (this._injector.add([
        t.LexerTreeBuilder,
        { useClass: t.LexerTreeBuilder },
      ]),
      this._injector.add([D]),
      this._injector.add([p]),
      this._injector.add([N]),
      this._injector.add([F]),
      this._injector.add([Te]),
      this._injector.add([xe]),
      this._injector.add([ye]),
      this._injector.add([Se]),
      this._injector.add([T]),
      this._injector.add([vt]),
      this._injector.add([ve]),
      this._injector.add([P]),
      this._injector.add([se, { useClass: ce }]),
      this._injector.add([A]),
      this._injector.add([M]),
      this._injector.add([Q]),
      this._config.notExecuteFormula === !0
        ? this._injector.add([j, { useClass: Q }])
        : this._injector.add([
            j,
            {
              useFactory: () => {
                try {
                  return (0, n.toModule)(
                    this._injector.get(n.IRPCChannelService).requestChannel(he),
                  );
                } catch {
                  return this._injector.get(Q);
                }
              },
            },
          ]),
      !((e = this._config) != null && e.notExecuteFormula))
    ) {
      let e = [
        [t.ICalculateFormulaService, { useClass: Qe }],
        [t.IDependencyManagerService, { useClass: ht }],
        [t.IFormulaDependencyGenerator, { useClass: Ze }],
        [t.IFormulaUnitReferenceResolver, { useClass: gt }],
        [t.IFormulaExternalReferenceDataLoader, { useClass: yt }],
      ];
      (this._extendFormulaExecutionDependencies(e),
        e.forEach((e) => this._injector.add(e)));
    }
  }
  onReady() {
    (super.onReady(),
      (0, e.touchDependencies)(this._injector, [
        [F],
        [P],
        [Te],
        [xe],
        [ye],
        [Se],
        [ve],
      ]),
      (0, e.touchDependencies)(this._injector, [[M]]),
      this._config.notExecuteFormula === !0 &&
        this._injector.has(n.IRPCChannelService) &&
        (this._injector.add([I]),
        (0, e.touchDependencies)(this._injector, [[I]])));
  }
};
(s($, `packageName`, ge),
  s($, `version`, _e),
  ($ = k([(0, e.DependentOn)(r.UniverLicensePlugin)], $)));
const wt =
    /'?\[([^\]]+)\]([^'!]+)'?!\$?([A-Za-z]+)\$?([1-9]\d*)(?:\s*:\s*\$?([A-Za-z]+)\$?([1-9]\d*))?/g,
  Tt = /(?:'((?:[^']|'')+)'|\[([^\]]+)\]|([A-Za-z0-9_.-]+))!([^\s!\[\]]+)\[/g,
  Et = /\bINDIRECT\s*\(\s*"((?:[^"]|"")*)"/gi;
function Dt(e) {
  let t = ``,
    n = !1;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (i !== `"`) {
      n || (t += i);
      continue;
    }
    if (n && e[r + 1] === `"`) {
      r++;
      continue;
    }
    ((n = !n), (t += ` `));
  }
  let r = [t];
  for (let t of e.matchAll(Et)) r.push(t[1].replace(/""/g, `"`));
  return r;
}
let Ot = class {
  constructor(e) {
    ((this._externalReferenceModel = e),
      s(this, `_calculationCounter`, 0),
      s(this, `_requestCounter`, 0));
  }
  plan(e) {
    let t = `external-calculation-${++this._calculationCounter}`,
      n = new Map();
    for (let [r, i] of Object.entries(e.formulaData ?? {}))
      if (this._externalReferenceModel.get(r))
        for (let e of Object.values(i ?? {}))
          for (let i of Object.values(e ?? {}))
            for (let e of Object.values(i ?? {})) {
              let i = kt(e);
              if (typeof i == `string`)
                for (let e of Dt(i))
                  (this._collectA1(n, t, r, e),
                    this._collectTables(n, t, r, e));
            }
    return Array.from(n.values());
  }
  planDynamic(e, t) {
    let n = `external-calculation-${++this._calculationCounter}`,
      r = new Map(),
      i = this._externalReferenceModel.get(e);
    if (!i) return [];
    for (let a of t) {
      let t = i.links.find((t) => E(e, t.slot) === a.unitId);
      !t ||
        !a.sheetName ||
        !a.range ||
        this._addRange(r, n, e, t, { sheetName: a.sheetName, range: a.range });
    }
    return Array.from(r.values());
  }
  _collectA1(t, n, r, i) {
    for (let a of i.matchAll(wt)) {
      let i = this._externalReferenceModel.resolveBinding(r, a[1]);
      if (i.status !== `resolved`) continue;
      let o = e.Tools.ABCatNum(a[3]),
        s = e.Tools.ABCatNum(a[5] ?? a[3]),
        c = Number(a[4]) - 1,
        l = Number(a[6] ?? a[4]) - 1;
      this._addRange(t, n, r, i.link, {
        sheetName: a[2].replace(/''/g, `'`),
        range: {
          startRow: Math.min(c, l),
          endRow: Math.max(c, l),
          startColumn: Math.min(o, s),
          endColumn: Math.max(o, s),
        },
      });
    }
  }
  _collectTables(e, t, n, r) {
    for (let i of r.matchAll(Tt)) {
      let r = (i[1] ?? i[2] ?? i[3]).replace(/''/g, `'`),
        a = this._externalReferenceModel.resolveBinding(n, r);
      if (a.status !== `resolved`) continue;
      let o = a.link.tables.find(
        (e) => e.name.toLowerCase() === i[4].toLowerCase(),
      );
      this._addRange(e, t, n, a.link, {
        tableName: i[4],
        sheetName: o == null ? void 0 : o.sheetName,
        range: o == null ? void 0 : o.range,
      });
    }
  }
  _addRange(e, t, n, r, i) {
    let a = `${n}\0${r.slot}`,
      o = e.get(a) ?? {
        requestId: `external-request-${++this._requestCounter}`,
        calculationId: t,
        hostUnitId: n,
        bindingSlot: r.slot,
        syntheticUnitId: E(n, r.slot),
        target: r.target,
        ranges: [],
        requireFresh: !0,
      };
    (o.ranges.some((e) => JSON.stringify(e) === JSON.stringify(i)) ||
      o.ranges.push(i),
      e.set(a, o));
  }
};
Ot = k([O(0, (0, e.Inject)(D))], Ot);
function kt(e) {
  return typeof e == `object` && e && `f` in e && typeof e.f == `string`
    ? e.f
    : void 0;
}
const At = { maxCells: 1e5, maxBytes: 5e6, concurrency: 4, timeoutMs: 15e3 };
let jt = class extends e.Disposable {
  constructor(e, t, n) {
    (super(),
      (this._referenceDataService = e),
      (this._overlayModel = t),
      (this._formulaDataModel = n),
      s(this, `_inflight`, new Map()),
      s(this, `_latestCalculation`, new Map()));
  }
  async prefetch(e, t, n = {}) {
    this._hydrateLiveUnits(t);
    let r = { ...At, ...n },
      i = Mt(e)
        .map((e) => ({
          ...e,
          ranges: e.ranges.filter(
            (t) =>
              !t.range ||
              !this._overlayModel.isRangeCovered(
                e.syntheticUnitId,
                t.sheetId ?? t.sheetName,
                t.range,
              ),
          ),
        }))
        .filter((e) => e.ranges.length > 0);
    Nt(i, r);
    for (let e of i) this._latestCalculation.set(e.hostUnitId, e.calculationId);
    let a = [],
      o = [],
      s = 0,
      c = 0,
      l = Array.from(
        { length: Math.min(r.concurrency, i.length) },
        async () => {
          for (; c < i.length;) {
            let e = i[c++],
              n = this._hasWorkerLiveUnit(e, t)
                ? Ft(e)
                : await this._readWithInflight(e, r.timeoutMs);
            if (
              this._latestCalculation.get(e.hostUnitId) !== e.calculationId ||
              n.calculationId !== e.calculationId
            ) {
              s++;
              continue;
            }
            if ((a.push(n), n.source !== `worker-live`)) {
              let t = this._overlayModel.apply(e, n);
              this._overlayModel.enforceLimits(r.maxCells, r.maxBytes);
              for (let n of t) o.push({ unitId: e.syntheticUnitId, ...n });
            }
          }
        },
      );
    return (
      await Promise.all(l),
      this._overlayModel.materialize(t),
      { responses: a, dirtyRanges: o, discarded: s }
    );
  }
  cancelHost(e, t) {
    this._latestCalculation.set(e, t);
  }
  getInflightCount() {
    return this._inflight.size;
  }
  drainDirtyRanges() {
    return this._overlayModel.drainDirtyRanges();
  }
  dispose() {
    (super.dispose(), this._inflight.clear(), this._latestCalculation.clear());
  }
  _hydrateLiveUnits(e) {
    let t = this._formulaDataModel.getCalculateData();
    ((e.allUnitData = { ...e.allUnitData, ...t.allUnitData }),
      (e.unitSheetNameMap = { ...e.unitSheetNameMap, ...t.unitSheetNameMap }),
      (e.unitStylesData = { ...e.unitStylesData, ...t.unitStylesData }),
      (e.unitNameMap = { ...e.unitNameMap, ...t.unitNameMap }));
  }
  _hasWorkerLiveUnit(e, n) {
    let r = n.allUnitData ?? {};
    if (
      e.target.liveUnitId &&
      e.target.liveUnitId !== e.syntheticUnitId &&
      r[e.target.liveUnitId]
    )
      return !0;
    let i = Object.entries(n.unitNameMap ?? {}).filter(
        ([t, n]) =>
          t !== e.syntheticUnitId &&
          !t.startsWith(`external:`) &&
          !!r[t] &&
          n.unitType === e.target.unitType,
      ),
      a = e.target.name.toLowerCase(),
      o = i.filter(([, e]) => e.name.toLowerCase() === a);
    if (o.length > 0) return o.length === 1;
    let s = (0, t.normalizeFormulaUnitName)(e.target.name);
    return (
      i.filter(([, e]) => (0, t.normalizeFormulaUnitName)(e.name) === s)
        .length === 1
    );
  }
  _readWithInflight(e, t) {
    let n = Pt(e),
      r = this._inflight.get(n);
    if (r)
      return r.then((t) => ({
        ...t,
        requestId: e.requestId,
        calculationId: e.calculationId,
      }));
    let i = Promise.race([
      this._referenceDataService.readData(e),
      new Promise((n) => {
        setTimeout(() => n(le(e)), t);
      }),
    ]).finally(() => this._inflight.delete(n));
    return (this._inflight.set(n, i), i);
  }
};
jt = k(
  [O(0, j), O(1, (0, e.Inject)(N)), O(2, (0, e.Inject)(t.FormulaDataModel))],
  jt,
);
function Mt(e) {
  let t = new Map();
  for (let n of e) {
    let e = `${n.hostUnitId}\0${n.bindingSlot}\0${n.calculationId}`,
      r = t.get(e);
    if (!r) {
      t.set(e, { ...n, ranges: [...n.ranges] });
      continue;
    }
    for (let e of n.ranges)
      r.ranges.some((t) => JSON.stringify(t) === JSON.stringify(e)) ||
        r.ranges.push(e);
  }
  return Array.from(t.values());
}
function Nt(e, t) {
  let n = 0;
  for (let t of e)
    for (let e of t.ranges)
      e.range &&
        (n +=
          (e.range.endRow - e.range.startRow + 1) *
          (e.range.endColumn - e.range.startColumn + 1));
  if (n > t.maxCells)
    throw Error(`External formula prefetch cell limit exceeded`);
  if (JSON.stringify(e).length > t.maxBytes)
    throw Error(`External formula prefetch byte limit exceeded`);
}
function Pt(e) {
  return `${e.hostUnitId}\0${e.bindingSlot}\0${JSON.stringify(e.ranges)}`;
}
function Ft(e) {
  return {
    requestId: e.requestId,
    calculationId: e.calculationId,
    source: `worker-live`,
    freshness: `fresh`,
    sheets: [],
  };
}
let It = (function (e) {
  return (
    (e.SHEET_RANGE = `sheet-range`),
    (e.TABLE_COLUMN = `table-column`),
    e
  );
})({});
function Lt(e) {
  let { hostUnitId: n, unit: r, target: i } = e,
    a = r.unitId === n;
  if (i.kind === `sheet-range`)
    return a
      ? (0, t.serializeRangeWithSheet)(i.sheetName, i.range)
      : (0, t.serializeRangeWithSpreadsheet)(
          r.formulaQualifier,
          i.sheetName,
          i.range,
        );
  let o =
      i.endColumnName && i.endColumnName !== i.columnName
        ? `[[${zt(i.columnName)}]:[${zt(i.endColumnName)}]]`
        : `[${zt(i.columnName)}]`,
    s = `${Rt(i.tableName)}${o}`;
  return a ? s : `[${Bt(r.formulaQualifier)}]!${s}`;
}
function Rt(e) {
  return /[\s!'\[\]]/.test(e) ? `'${e.replaceAll(`'`, `''`)}'` : e;
}
function zt(e) {
  return e.replaceAll(`]`, `]]`);
}
function Bt(e) {
  return e.replaceAll(`]`, `]]`);
}
function Vt(t) {
  var n, r, i;
  let a = Ht(t.result),
    o = a ?? Kt(t.lastValue),
    s = a ? `calculated` : `persisted`,
    c = a == null && t.lastValue != null,
    l =
      ((n = t.numberFormat) == null ? void 0 : n.pattern) ??
      qt(a) ??
      ((r = t.lastValue) == null ? void 0 : r.pattern) ??
      e.DEFAULT_NUMBER_FORMAT,
    u = o == null ? void 0 : o.v,
    d =
      u == null || (i = e.numfmt.formatColor(l, u, { throws: !1 })) == null
        ? void 0
        : i.toString();
  return u == null
    ? { text: ``, pattern: l, cell: o, source: s, stale: c }
    : (o == null ? void 0 : o.t) === e.CellValueType.BOOLEAN
      ? {
          text: u ? `TRUE` : `FALSE`,
          color: d,
          pattern: l,
          cell: o,
          source: s,
          stale: c,
        }
      : (o == null ? void 0 : o.t) === e.CellValueType.NUMBER
        ? {
            text: e.numfmt.format(l, u, { throws: !1 }),
            color: d,
            pattern: l,
            cell: o,
            source: s,
            stale: c,
          }
        : {
            text: String(u),
            color: d,
            pattern: l,
            cell: o,
            source: s,
            stale: c,
          };
}
function Ht(t) {
  let { cell: n, count: r } = Wt(t);
  return r > 1 ? { v: `#VALUE!`, t: e.CellValueType.STRING } : n;
}
function Ut(e) {
  let { cell: t, count: n } = Wt(e);
  return n === 1 ? t : void 0;
}
function Wt(t) {
  if (!(t != null && t.result)) return { cell: void 0, count: 0 };
  let n = new e.ObjectMatrix(t.result),
    r = 0,
    i;
  return (
    n.forValue((e, t, n) => {
      for (let e of n) for (let t of e) t != null && ((r += 1), (i = t));
    }),
    { cell: i, count: r }
  );
}
function Gt(e) {
  if (
    e.v !== null &&
    typeof e.v != `string` &&
    typeof e.v != `number` &&
    typeof e.v != `boolean`
  )
    return null;
  let t = qt(e);
  return {
    v: e.v ?? null,
    ...(e.t == null ? null : { t: e.t }),
    ...(t == null ? null : { pattern: t }),
  };
}
function Kt(e) {
  if (e) return { v: e.v, ...(e.t == null ? null : { t: e.t }) };
}
function qt(e) {
  var t;
  return e != null && e.s && typeof e.s == `object`
    ? (t = e.s.n) == null
      ? void 0
      : t.pattern
    : void 0;
}
function Jt(e) {
  let n = new Map();
  for (let r of e) {
    if (typeof r == `string`) continue;
    let e = ``;
    r.nodeType === t.sequenceNodeType.REFERENCE
      ? (e = (0, t.deserializeRangeWithSheet)(r.token).unitId)
      : r.nodeType === t.sequenceNodeType.TABLE &&
        (e = (0, t.splitTableStructuredRef)(r.token).unitQualifier);
    let i = e.trim();
    i && n.set(d(i), i);
  }
  return Array.from(n.values());
}
function Yt(e) {
  let t = new Map();
  for (let n of e.explicitReferences) {
    let e = d(n.qualifier),
      r = t.get(e);
    if (
      r &&
      (r.sourceUnitId !== n.sourceUnitId ||
        r.sourceUnitType !== n.sourceUnitType)
    )
      return { status: `ambiguous`, qualifier: n.qualifier };
    t.set(e, n);
  }
  let n = [];
  for (let r of e.qualifiers) {
    let i = t.get(d(r));
    if (i) {
      n.push(i);
      continue;
    }
    let a = e.resolveBinding(r);
    if (a.status !== `resolved`) return { status: a.status, qualifier: r };
    n.push(a.reference);
  }
  return { status: `resolved`, references: n };
}
((exports.EXTERNAL_REFERENCE_SCHEMA_VERSION = 1),
  Object.defineProperty(exports, "ExternalCacheReferenceDataProvider", {
    enumerable: !0,
    get: function () {
      return A;
    },
  }),
  Object.defineProperty(exports, "ExternalFormulaUnitReferenceResolver", {
    enumerable: !0,
    get: function () {
      return gt;
    },
  }),
  Object.defineProperty(exports, "ExternalReferenceDataProvidersController", {
    enumerable: !0,
    get: function () {
      return M;
    },
  }),
  (exports.ExternalReferenceModel = D),
  Object.defineProperty(exports, "ExternalReferenceOverlayModel", {
    enumerable: !0,
    get: function () {
      return N;
    },
  }),
  Object.defineProperty(exports, "ExternalReferencePrefetchPlanner", {
    enumerable: !0,
    get: function () {
      return Ot;
    },
  }),
  Object.defineProperty(exports, "ExternalReferencePrefetchService", {
    enumerable: !0,
    get: function () {
      return jt;
    },
  }),
  Object.defineProperty(exports, "ExternalReferenceRenameController", {
    enumerable: !0,
    get: function () {
      return P;
    },
  }),
  Object.defineProperty(exports, "ExternalReferenceResourceController", {
    enumerable: !0,
    get: function () {
      return F;
    },
  }),
  (exports.FORMULA_REFERENCE_DATA_RPC_CHANNEL = he),
  Object.defineProperty(exports, "FormulaCacheEligibilityService", {
    enumerable: !0,
    get: function () {
      return vt;
    },
  }),
  Object.defineProperty(exports, "FormulaCalculationTriggerService", {
    enumerable: !0,
    get: function () {
      return t.FormulaCalculationTriggerService;
    },
  }),
  Object.defineProperty(exports, "FormulaDataModel", {
    enumerable: !0,
    get: function () {
      return t.FormulaDataModel;
    },
  }),
  (exports.FormulaLastValuePersistenceService = T),
  (exports.FormulaReferenceDataProviderRegistry = ce),
  Object.defineProperty(exports, "FormulaReferenceDataRpcController", {
    enumerable: !0,
    get: function () {
      return I;
    },
  }),
  (exports.FormulaReferenceType = It),
  (exports.HOST_EXTERNAL_REFERENCE_SCHEMA_VERSION = 1),
  (exports.HostExternalReferenceModel = p),
  Object.defineProperty(exports, "IActiveDirtyManagerService", {
    enumerable: !0,
    get: function () {
      return t.IActiveDirtyManagerService;
    },
  }),
  (exports.IFormulaReferenceDataProviderRegistry = se),
  (exports.IFormulaReferenceDataService = j),
  Object.defineProperty(exports, "ISuperTableService", {
    enumerable: !0,
    get: function () {
      return t.ISuperTableService;
    },
  }),
  Object.defineProperty(exports, "MainFormulaReferenceDataService", {
    enumerable: !0,
    get: function () {
      return Q;
    },
  }),
  (exports.PersistFormulaLastValuesCommand = ee),
  (exports.RemoveHostExternalReferenceCommand = v),
  Object.defineProperty(exports, "RemoveSuperTableMutation", {
    enumerable: !0,
    get: function () {
      return t.RemoveSuperTableMutation;
    },
  }),
  (exports.SHEET_EXTERNAL_DATA_PLUGIN = te),
  Object.defineProperty(exports, "SetFormulaCalculationResultMutation", {
    enumerable: !0,
    get: function () {
      return t.SetFormulaCalculationResultMutation;
    },
  }),
  Object.defineProperty(exports, "SetFormulaCalculationStartMutation", {
    enumerable: !0,
    get: function () {
      return t.SetFormulaCalculationStartMutation;
    },
  }),
  Object.defineProperty(exports, "SetFormulaDataMutation", {
    enumerable: !0,
    get: function () {
      return t.SetFormulaDataMutation;
    },
  }),
  Object.defineProperty(exports, "SetSuperTableMutation", {
    enumerable: !0,
    get: function () {
      return t.SetSuperTableMutation;
    },
  }),
  Object.defineProperty(exports, "SetTriggerFormulaCalculationStartMutation", {
    enumerable: !0,
    get: function () {
      return t.SetTriggerFormulaCalculationStartMutation;
    },
  }),
  (exports.UNIVER_EXTERNAL_REFERENCE_PLUGIN = c),
  Object.defineProperty(exports, "UniverProFormulaEnginePlugin", {
    enumerable: !0,
    get: function () {
      return $;
    },
  }),
  (exports.UpsertHostExternalReferenceCommand = g),
  (exports.UpsertHostExternalReferencesCommand = _),
  (exports.buildFormulaReference = Lt),
  (exports.buildUpsertHostExternalReferenceMutations = x),
  (exports.collectFormulaExternalReferenceQualifiers = Jt),
  (exports.createEmptyExternalReferenceResource = ne),
  (exports.createExternalSyntheticUnitId = E),
  (exports.createUnavailableReferenceDataResponse = le),
  (exports.getFormulaResultCell = Ht),
  (exports.getScalarFormulaResultCell = Ut),
  (exports.normalizeHostExternalReferenceQualifier = d),
  Object.defineProperty(exports, "refactorFormulaUnitQualifier", {
    enumerable: !0,
    get: function () {
      return t.refactorFormulaUnitQualifier;
    },
  }),
  (exports.resolveFormulaResultPresentation = Vt),
  (exports.resolveHostFormulaExternalReferences = Yt),
  (exports.toFormulaLastValue = Gt));
