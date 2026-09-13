import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { k, nb, wh } from "./internal-core-endo.js";
import { cy } from "./pdfs-empty-snapshot.js";
import { Gv } from "./pdfs-pdf-document-from-shell.js";
import { Wv } from "./pdfs-pdf-unit-data.js";
import { Wy } from "./pdfs-in-memory-pdf-document-providers.js";
import { Bv } from "./pdfs-pdf-editor-session.js";
import { Ov } from "./pdfs-replay-pdf-mutation-batches.js";
import { gl } from "./pdfs-import-pdf-document-pages.js";
function Qy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469296;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.documentShell && fn_L0_core_endo_routine_pure_ON_heap_throws_Error_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.documentShell);
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A465 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.documentShell ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.documentShell["pageDirectory"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958.pageId) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.document["pages"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461959 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461959.id),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A466 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469296 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.documentShell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469296.pageBlocks['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960.blockId)) ?? [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.documentShell ? [] : Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.document["objects"]),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A468 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.documentShell ? [] : Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.document["displayLists"]),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.documentShell ? [] : Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469294.document["textStories"]);
  ib("page", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.pageIdMap), ib("block", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.blockIdMap), ib("object", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.objectIdMap), ib("displayList", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.displayListIdMap), ib("textStory", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.textStoryIdMap);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469297 = nb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469293),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A470 = [...Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.pageIdMap), ...Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.blockIdMap), ...Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.objectIdMap), ...Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.displayListIdMap), ...Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469295.textStoryIdMap)];
  if (new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A470).size !== var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A470.length) throw Error('PDF\x20append\x20plan\x20contains\x20duplicate\x20target\x20ids.');
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469298 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A470.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469297.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469298) throw Error("PDF append plan target id " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469298 + " is already in use.");
}
function fn_L0_core_endo_routine_pure_ON_heap_throws_Error_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469305) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469306;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929984 = new Set(),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5994 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469305.pageDirectory["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.index !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963) throw Error("PDF append page " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.pageId + " has inconsistent directory index " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.index + '.');
      if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929984.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.pageId)) throw Error('PDF\x20append\x20page\x20directory\x20contains\x20duplicate\x20page\x20id\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.pageId + '.');
      return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929984.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.pageId), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962];
    })),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929985 = new Set();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469305.pageBlocks) {
    eb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.artifactPageIds ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.pageIds;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620.length !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.pageIds["length"] || new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620).size !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620.length) throw Error("PDF append block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.blockId + " has invalid artifact page ids.");
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.pageIds["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) => {
      if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929985.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171)) throw Error("PDF append block graph contains duplicate page id " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 + '.');
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929985.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5994.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.blockId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.blockId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.index !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.startPageIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) throw Error('PDF\x20append\x20block\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.blockId + '\x20is\x20inconsistent\x20with\x20page\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 + '.');
    });
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469307 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469306 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469305.pageDirectory["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929985.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967.pageId))) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469306.pageId;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469307) throw Error('PDF\x20append\x20page\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469307 + " is missing from its page block.");
}
function eb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D447 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.endPageIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.startPageIndex + 1;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.startPageIndex < 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D447 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.pageIds["length"]) throw Error("PDF append block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.blockId + " has an invalid logical page range.");
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A58 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.artifactStartPageIndex !== undefined,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A59 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.artifactEndPageIndex !== undefined;
  if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A58 !== var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A59) throw Error('PDF\x20append\x20block\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.blockId + '\x20has\x20an\x20incomplete\x20artifact\x20page\x20range.');
  if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A58 && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A59) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.artifactEndPageIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.artifactStartPageIndex + 1;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.artifactStartPageIndex < 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.pageIds["length"]) throw Error("PDF append block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469311.blockId + " has an invalid artifact page range.");
  }
}
function ib(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469333) {
  if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469333).length !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469332.length) throw Error("PDF append plan has an incomplete " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469331 + " id map.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469332.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469333[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461976]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469334) throw Error('PDF\x20append\x20plan\x20is\x20missing\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469331 + " id " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469334 + '.');
}
var ab = class extends UnitModel {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977 = {}) {
    if (super(), k(this, "type", UniverInstanceType.UNIVER_PDF), k(this, "_snapshot", undefined), k(this, "_providers", undefined), k(this, "_shellDocument", undefined), k(this, "_materializedBlocks", new Map()), k(this, "_sharedFragments", new Map()), k(this, "_blockProviderSubscription", undefined), k(this, "_contentChanged$", new BehaviorSubject(0)), k(this, "_name$", undefined), k(this, "name$", undefined), k(this, 'contentChanged$', this._contentChanged$["asObservable"]()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977.document === undefined) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 = cy(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977.id == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977.id : undefined, typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977.name == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977.name : undefined),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977.documentShell ? Gv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977.documentShell) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.document;
      this._snapshot = Wv({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977,
        'document': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623
      });
    } else this._snapshot = Wv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461977);
    this._shellDocument = this._snapshot["documentShell"] ? Gv(this._snapshot['documentShell']) : undefined, this._providers = Wy(this._snapshot), this._name$ = new BehaviorSubject(this._snapshot['name']), this.name$ = this._name$["asObservable"]();
  }
  getUnitId() {
    return this._snapshot['id'];
  }
  setName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461979) {
    this._snapshot = {
      ...this._snapshot,
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461979
    }, this._name$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461979);
  }
  getSnapshot() {
    return this._snapshot;
  }
  getRev() {
    return this._snapshot["rev"];
  }
  incrementRev() {
    this._snapshot = {
      ...this._snapshot,
      'rev': this._snapshot["rev"] + 1
    };
  }
  setRev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461981) {
    this._snapshot = {
      ...this._snapshot,
      'rev': Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461981) ? Math.max(1, Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461981)) : this._snapshot["rev"]
    };
  }
  getDocument() {
    return this._snapshot["document"];
  }
  getMaterializedDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB38 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983 ?? {
      ...Bv({
        'id': this.getUnitId() + ":model",
        'documentId': this.getUnitId(),
        'now': 0
      }),
      'editState': this.getEditState()
    };
    return wh({
      'document': this.getDocument(),
      'session': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB38,
      'id': this.getDocument().id,
      'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983 ? undefined : 0
    });
  }
  async getCompleteMaterializedDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986 = this._providers["blocks"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986 || !this._shellDocument || !this._snapshot["documentShell"]) return this.getMaterializedDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985);
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63 = [...this._materializedBlocks["keys"]()];
    try {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 of this._snapshot["documentShell"].pageBlocks) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.push(await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986.getBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.blockId));
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 = this._composeBlockBackedDocument(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14);
      return wh({
        'document': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624,
        'session': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985 ?? {
          ...Bv({
            'id': this.getUnitId() + ":model",
            'documentId': this.getUnitId(),
            'now': 0
          }),
          'editState': this.getEditState()
        },
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624.id,
        'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985 ? undefined : 0
      });
    } finally {
      await Promise.allSettled(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986.getBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178)));
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63);
      this._snapshot["documentShell"].pageBlocks['forEach'](({
        blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179
      }) => {
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92995.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986.release(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179);
      });
    }
  }
  getEditState() {
    return this._snapshot["editState"];
  }
  setEditState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989.documentId === this._snapshot['id'] ? (this._snapshot = {
      ...this._snapshot,
      'editState': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989
    }, true) : false;
  }
  applyMutationBatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991.documentId !== this._snapshot['id']) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992 = Ov(this._snapshot["editState"], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991]);
    return this._snapshot = {
      ...this._snapshot,
      'editState': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992
    }, true;
  }
  appendDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461997) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995.pages['length'] === 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998 = gl({
      'targetDocument': this._snapshot["document"],
      'sourceDocument': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461995,
      'atIndex': this._snapshot["document"].pages["length"],
      'idPlan': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461997,
      'reuseExistingAssets': !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461997
    });
    return this._snapshot = {
      ...this._snapshot,
      'document': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.document,
      'resourceBindings': pb(this._snapshot['resourceBindings'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461996, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998)
    }, this._providers = Wy(this._snapshot), true;
  }
  appendUnitData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004) {
    try {
      Qy(this._snapshot, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004);
    } catch {
      return false;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005 = this._snapshot["documentShell"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.documentShell;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006) return this.appendDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.document, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.resourceBindings, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007;
    try {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007 = ob(this._snapshot, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004);
    } catch {
      return false;
    }
    this._snapshot = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007.documentShell;
    return this._shellDocument = Gv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008), this._sharedFragments["clear"](), this._materializedBlocks['clear'](), this.setProviders(Wy(this._snapshot)), true;
  }
  setProviders(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016 = this._blockProviderSubscription) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.unsubscribe(), this._providers["blocks"] && this._providers["blocks"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015.blocks && this._providers["blocks"].dispose(), this._materializedBlocks["clear"](), this._providers = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015.blocks && (this._blockProviderSubscription = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015.blocks["cacheChanged$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625 => {
      this._handleBlockCacheEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625);
    })), this._rebuildBlockBackedDocument();
  }
  getProviders() {
    return this._providers;
  }
  getPageProvider() {
    return this._providers['pages'];
  }
  getResourceProvider() {
    return this._providers['resources'];
  }
  async loadPageBlockForPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021 = this._providers["blocks"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021.getBlockForPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019);
    if (!this._materializedBlocks["has"](((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020 = this._snapshot['fragmentIndex']) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020.pageFragmentIds) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019]) ?? '')) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023;
      this._handleBlockCacheEvent({
        'type': "loaded",
        'blockId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023 = this._snapshot['fragmentIndex']) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023.pageFragmentIds) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019]) ?? '',
        'block': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022
      });
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022.pages["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019);
  }
  isPageBlockLoaded(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462029) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030 = this._snapshot['fragmentIndex']) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.pageFragmentIds) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462029];
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031 || this._materializedBlocks['has'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031);
  }
  applySharedFragment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462035) {
    this._sharedFragments["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462035.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462035), this._rebuildBlockBackedDocument();
  }
  dispose() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037 = this._blockProviderSubscription) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037.unsubscribe(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038 = this._providers["blocks"]) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038.dispose(), this._sharedFragments['clear'](), this._materializedBlocks["clear"](), this._shellDocument && (this._snapshot = {
      ...this._snapshot,
      'document': this._shellDocument
    }, this._providers = Wy(this._snapshot)), this._contentChanged$['complete'](), this._name$['complete'](), super.dispose();
  }
  _handleBlockCacheEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041.type === "loaded" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041.block ? this._materializedBlocks["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041.blockId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041.block) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041.type === "evicted" && this._materializedBlocks["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041.blockId), this._rebuildBlockBackedDocument();
  }
  _rebuildBlockBackedDocument() {
    if (!this._shellDocument) {
      this._contentChanged$["next"](this._contentChanged$["value"] + 1);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043 = this._composeBlockBackedDocument(this._materializedBlocks["values"]()),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 = this._providers["blocks"];
    this._snapshot = {
      ...this._snapshot,
      'document': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043
    }, this._providers = {
      ...Wy(this._snapshot),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 ? {
        'blocks': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044
      } : {})
    }, this._contentChanged$["next"](this._contentChanged$['value'] + 1);
  }
  _composeBlockBackedDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462047) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048 = this._shellDocument;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048) return this.getDocument();
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048.pages["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628])),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048.assets,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048.native,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048.objects
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048.displayLists
      },
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB42 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048.textStories
      };
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629 of this._sharedFragments["values"]()) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049 = db(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.assets), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050 = fb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.native), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40 = {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.objects
    }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41 = {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.displayLists
    };
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462047) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.pages["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181)), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40 = {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.objects
    }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41 = {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.displayLists
    }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB42 = {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB42,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46630.textStories
    };
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048,
      'pages': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048.pages["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631 => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.id) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631),
      'objects': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB40,
      'displayLists': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41,
      'textStories': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB42,
      'assets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049,
      'native': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050
    };
  }
};
function ob(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339.documentShell,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.documentShell;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.fragmentBindings || !mb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340)) throw Error("PDF append requires complete block-backed source metadata.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469345 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.pageDirectory['length'],
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB308 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344.sources
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.sourceDocumentRef["sourceId"];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469346 && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB308[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469346] && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB308[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469346] = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB308[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469346],
    'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.sourceDocumentRef["assetId"]
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469347 = cb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.sources, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB308, "source"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469348 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344.pageDirectory['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.pageIdMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.pageId],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.blockIdMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.blockId];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057) throw Error("PDF append plan is incomplete for page " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.pageId + '.');
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055,
        'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056,
        'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057,
        'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.index + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469345,
        'thumbnailAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.thumbnailAssetId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.pageIdMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.thumbnailAssetId] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.thumbnailAssetId : undefined
      };
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469349 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344.pageBlocks["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.blockIdMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.blockId],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.pageIds["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.pageIdMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632]);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633)) throw Error('PDF\x20append\x20plan\x20is\x20incomplete\x20for\x20block\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.blockId + '.');
      return sb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.fragmentBindings) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.blockId]), {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061,
        'blockId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063,
        'pageIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064,
        'artifactPageIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.artifactPageIds ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.pageIds,
        'startPageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.startPageIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469345,
        'endPageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.endPageIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469345,
        'artifactStartPageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.artifactStartPageIndex ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.startPageIndex,
        'artifactEndPageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.artifactEndPageIndex ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061.endPageIndex
      };
    }),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5996 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.sharedFragments["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.fragmentId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069]));
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344.sharedFragments) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5996.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.fragmentId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 && !lb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070)) throw Error("PDF shared fragment " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.fragmentId + '\x20has\x20conflicting\x20metadata.');
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 || var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5996.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.fragmentId, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070
    });
  }
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB309 = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339.fragmentBindings ?? {})
  };
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469349) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469350;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469350 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344.pageBlocks["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.blockIdMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.blockId] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071.blockId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469350.blockId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.fragmentBindings[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635] : undefined;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636) throw Error("PDF page block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071.blockId + " is missing its physical file binding.");
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB309[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071.blockId] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636
    };
  }
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344.sharedFragments) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.fragmentBindings[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072.fragmentId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637) throw Error('PDF\x20shared\x20fragment\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072.fragmentId + " is missing its file binding.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB309[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072.fragmentId];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 && !lb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637)) throw Error("PDF shared fragment " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072.fragmentId + " has a conflicting file binding.");
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB309[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072.fragmentId] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469351 = gb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340.resourceBindings, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469340),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469352 = Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469351 ?? {}).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462074]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.pageIdMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462073, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462074
    }])),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353 = cb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339.resourceBindings ?? {}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469352, "resource binding"),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB310 = {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339.fragmentIndex) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469342.pageFragmentIds) ?? {}),
      ...Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469348.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462075 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462075.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462075.blockId]))
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB311 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343,
      'sources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469347,
      'pageDirectory': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.pageDirectory, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469348],
      'outlines': [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.outlines ?? []), ...ub(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344.outlines ?? [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469341.pageIdMap)],
      'pageBlocks': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.pageBlocks, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469349],
      'sharedFragments': Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5996.values()),
      'requiredSharedFragments': hb([...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469343.requiredSharedFragments ?? []), ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469344.requiredSharedFragments ?? [])])
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354 = Gv(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB311);
  return Wv({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339,
    'document': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469354,
    'documentShell': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB311,
    'resourceBindings': Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353).length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469353 : undefined,
    'fragmentBindings': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB309,
    'fragmentIndex': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469339.fragmentIndex,
      'pageFragmentIds': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB310,
      'sharedFragmentIds': Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5996.keys())
    }
  });
}
function sb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.kind !== 'page-block') throw Error("PDF page block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.blockId + " is missing its file binding.");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.byteLength !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.byteLength !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.byteLength || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.checksum !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.checksum !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469372.checksum !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.checksum) throw Error("PDF page block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469371.blockId + " has conflicting artifact metadata.");
}
function cb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469375, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB316 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469375
  };
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469376)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB316[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 !== undefined && !lb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077)) throw Error("PDF " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469377 + '\x20' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076 + " has conflicting metadata.");
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 === undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB316[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077);
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB316;
}
function lb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469382) {
  return JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469381) === JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469382);
}
function ub(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469386, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469387 = '') {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078 => ub(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469386, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469387)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385 == "object" ? Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079, ub(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469386, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079)])) : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385 == 'string' && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469387 === "pageId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469387 === "pageIds") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469386[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469385;
}
function db(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392) {
  return {
    'fonts': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.fonts,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392.fonts
    },
    'images': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.images,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392.images
    },
    'formXObjects': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.formXObjects,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392.formXObjects
    },
    'colorProfiles': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.colorProfiles,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392.colorProfiles
    },
    'patterns': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.patterns,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392.patterns
    },
    'shadings': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.shadings,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392.shadings
    },
    'attachments': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.attachments,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392.attachments
    },
    'streams': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469391.streams,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469392.streams
    }
  };
}
function fb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469396) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469396 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469395,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469396,
    'objectTable': {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469395 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469395.objectTable),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469396.objectTable
    },
    'streams': {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469395 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469395.streams),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469396.streams
    }
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469395;
}
function pb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469401) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469399 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469400) return;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB318 = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469399 ?? {})
  };
  return Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469400 ?? {}).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082]) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469401.pageIdMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469401.assetIdMap[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB318[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082
    };
  }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB318).length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB318 : undefined;
}
function mb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469405) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469406 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469405.fragmentBindings,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469407 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469405.documentShell;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469406 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469407 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469407.pageBlocks["every"](({
    blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462087
  }) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469406[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462087]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088.kind) === "page-block";
  }) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469407.sharedFragments["every"](({
    fragmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091
  }) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469406[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092.kind) === "shared-fragment";
  });
}
function hb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469411) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469411.length > 0 ? [...new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469411)] : undefined;
}
function gb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469414) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469414.sourceDocumentRef['assetId'];
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469413 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469413[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469413 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469413,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415]: {
      'kind': 'universer-resource',
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469415,
      'imageSourceType': ImageSourceType.UUID,
      'mimeType': "application/pdf"
    }
  };
}
export { ab as PdfDocumentModel };
