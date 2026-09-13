import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Py, k } from "./internal-core-endo.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491 } from "./pdfs-pdf-page-block-error.js";
import { Ly } from "./pdfs-pdf-page-block.js";
var Ny = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885 = {}) {
    super(), this._loader = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884, k(this, "_blockMetas", new Map()), k(this, "_pageFragmentIds", undefined), k(this, "_maxConcurrentRequests", undefined), k(this, '_maxCachedBlocks', undefined), k(this, "_maxCachedBytes", undefined), k(this, "_cache", new Map()), k(this, "_inflight", new Map()), k(this, "_queue", []), k(this, "_activeControllers", new Map()), k(this, "_activePriorities", new Map()), k(this, '_supersededPrefetches', new Set()), k(this, "_cacheChanged$", new Subject()), k(this, "_cacheBytes", 0), k(this, "_activeRequests", 0), k(this, "_sequence", 0), k(this, '_parseTail', Promise.resolve()), k(this, 'cacheChanged$', this._cacheChanged$['asObservable']());
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882) this._blockMetas['set'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.blockId, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602,
      'pageIds': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.pageIds],
      'artifactPageIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.artifactPageIds ? [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.artifactPageIds] : undefined
    });
    this._pageFragmentIds = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883
    }, this._maxConcurrentRequests = Hy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885.maxConcurrentRequests, 2), this._maxCachedBlocks = Hy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885.maxCachedBlocks, 3), this._maxCachedBytes = Hy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885.maxCachedBytes, 50331648);
  }
  async getBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890) {
    return this.ensureNotDisposed(), this._request(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890, 0);
  }
  async getBlockForPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892) {
    this.ensureNotDisposed();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893 = this._pageFragmentIds[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893) throw new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_REFERENCE_INVALID", '', "No page block is registered for page " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892 + '.');
    return this._request(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, 0);
  }
  prefetch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896) {
    this.ensureNotDisposed();
    let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896);
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57 = this._queue["length"] - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57 >= 0; --var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 = this._queue[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.priority !== 1 || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.blockId) || (this._queue["splice"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57, 1), this._inflight["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.blockId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.reject(new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_FETCH_FAILED", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.blockId, 'PDF\x20page\x20block\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.blockId + " prefetch was superseded.")));
    }
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604] of this._activePriorities) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 === 1 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897;
      this._supersededPrefetches['add'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897 = this._activeControllers["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.abort();
    }
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896) this._request(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, 1).catch(() => undefined);
  }
  release(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461901 = this._cache["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461901 && (this._cache['delete'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900), this._cacheBytes -= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461901.byteLength, this._cacheChanged$["next"]({
      'type': "evicted",
      'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900
    }));
  }
  dispose() {
    if (this._disposed) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904 = new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_FETCH_FAILED", '', "PDF page-block provider was disposed.");
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 of this._queue["splice"](0)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.reject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904);
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607 of this._activeControllers["values"]()) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.abort();
    this._activeControllers["clear"](), this._activePriorities["clear"](), this._supersededPrefetches["clear"](), this._inflight['clear'](), this._cache["clear"](), this._cacheBytes = 0, this._cacheChanged$["complete"](), super.dispose();
  }
  _request(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908 = this._cache['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908) return this._touch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908), Promise.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908.block);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909 = this._inflight["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907 === 0) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 = this._queue['find'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.priority !== 0 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166.priority = 0, this._sortQueue()) : this._activePriorities["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906) && (this._activePriorities["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, 0), this._supersededPrefetches["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906));
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909;
    }
    if (!this._blockMetas["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906)) return Promise.reject(new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_REFERENCE_INVALID", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, "Unknown PDF page block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906 + '.'));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912 = new Promise((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609;
      });
    return this._inflight['set'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912), this._queue["push"]({
      'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906,
      'priority': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907,
      'sequence': this._sequence,
      'resolve': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910,
      'reject': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911
    }), this._sequence += 1, this._sortQueue(), this._drain(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912;
  }
  _sortQueue() {
    this._queue["sort"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.priority - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613.priority || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.sequence - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613.sequence);
  }
  _drain() {
    for (; !this._disposed && this._activeRequests < this._maxConcurrentRequests && this._queue["length"] > 0;) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = this._queue['shift']();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) return;
      this._activeRequests += 1, this._activePriorities["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.blockId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.priority), this._load(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.blockId).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668)).catch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.reject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669)).finally(() => {
        --this._activeRequests, this._activePriorities["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.blockId), this._inflight["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167.blockId), this._drain();
      });
    }
  }
  async _load(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921 = this._blockMetas["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921) throw new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_REFERENCE_INVALID", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, "Unknown PDF page block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920 + '.');
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 < 3; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 += 1) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = new AbortController();
      this._activeControllers['set'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168);
      try {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = await this._loader["loadBlock"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.signal);
        this.ensureNotDisposed(), Fy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.signal, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920), await Py(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921.blockId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921.byteLength, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921.checksum, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670), this.ensureNotDisposed(), Fy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.signal, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = await this._parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670);
        return this.ensureNotDisposed(), Fy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.signal, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920), await ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924 = this._loader).prepareBlock) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.signal)), this.ensureNotDisposed(), Fy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.signal, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920), this._store(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670.byteLength), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671;
      } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922 = Vy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5), this._supersededPrefetches["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920)) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922;
        if (this._disposed) throw new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_FETCH_FAILED", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, "PDF page block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920 + " was cancelled because its provider was disposed.");
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922.code === "PDF_BLOCK_FETCH_FAILED" ? 3 : 2;
        if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 + 1 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3) throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922;
      } finally {
        this._activeControllers["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 && this._activeControllers["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920);
      }
    }
    throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922 ?? new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_FETCH_FAILED", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, 'Failed\x20to\x20load\x20PDF\x20page\x20block\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920 + '.');
  }
  _parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932 = this._parseTail["then"](() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 = this._loader).parseBlock) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931)) ?? Ly(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931);
    });
    return this._parseTail = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.then(() => undefined, () => undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932;
  }
  _store(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461938) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939 = this._cache["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936);
    for (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939 && (this._cacheBytes -= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939.byteLength, this._cache["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936)), this._cache["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936, {
      'block': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461937,
      'byteLength': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461938
    }), this._cacheBytes += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461938, this._cacheChanged$["next"]({
      'type': "loaded",
      'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936,
      'block': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461937
    }); this._cache['size'] > this._maxCachedBlocks || this._cacheBytes > this._maxCachedBytes;) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 = this._cache["keys"]().next().value;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461936 && this._cache["size"] === 1) break;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 = this._cache['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169);
      this._cache['delete'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169), this._cacheBytes -= (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.byteLength) ?? 0, this._cacheChanged$['next']({
        'type': "evicted",
        'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169
      });
    }
  }
  _touch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945) {
    this._cache['delete'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944), this._cache["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461945);
  }
};
function Fy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469212) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469211.aborted) throw new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_FETCH_FAILED", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469212, "PDF page block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469212 + '\x20request\x20was\x20superseded.');
}
function Vy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469256) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469256 instanceof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469256 : new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_FETCH_FAILED", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469256 instanceof Error ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469256.message : "Failed to fetch PDF page block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469255 + '.');
}
function Hy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469260) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469259 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469259) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469259 > 0 ? Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469259) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469260;
}
export { Ny as PdfPageBlockProvider };
