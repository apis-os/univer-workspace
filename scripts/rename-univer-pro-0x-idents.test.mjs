import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { abortIfCqStubRestored, healForParse, rename0xIdents } from "./rename-univer-pro-0x-idents.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FIXTURE = path.join(ROOT, "scripts/fixtures/0x-ident-rename.fixture.js");

function parseStrict(src) {
  const pnpm = path.join(ROOT, "node_modules/.pnpm");
  const dirs = readdirSync(pnpm).filter((d) => d.startsWith("@babel+core@"));
  const preferred = dirs.find((d) => /@babel\+core@7\./.test(d)) ?? dirs[dirs.length - 1];
  const req = createRequire(path.join(pnpm, preferred, "node_modules/@babel/core/package.json"));
  req("@babel/parser").parse(src, {
    sourceType: "unambiguous",
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    errorRecovery: false,
    plugins: ["importAttributes"]
  });
}

test("renames hex locals but keeps string keys, string literals, and export aliases", () => {
  const original = readFileSync(FIXTURE, "utf8");
  const { src, changed, aborted } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /function v\d+/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /export\s*\{[^}]*\bas\s+publicApi\b/);
  assert.match(src, /eventID/);
  assert.doesNotMatch(src, /function\s+_0x12ab\b/);
  assert.equal(src.includes('"_0xdead"'), true);
  const stringHits = [...src.matchAll(/["']_0x[0-9a-f]+["']/gi)];
  assert.ok(stringHits.length >= 2, "string literals must survive");
});

test("aborts a bare export { _0x } with no alias and does not rewrite", () => {
  const original = "function _0x123(){ return 1; }\nexport { _0x123 };\n";
  const { src, changed, aborted, reason } = rename0xIdents(original);
  assert.equal(aborted, true);
  assert.equal(changed, false);
  assert.equal(src, original);
  assert.match(String(reason), /_0x123/);
});

test("heals unglue-split delete Ident object keys then parses", () => {
  const original =
    "function _0xaaa(){let {pivotTableId:_0xbbb, delete Ids:_0xccc}=x;return _0xccc+\"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "delete Ids key must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /deleteIds/);
  assert.doesNotMatch(src, /delete Ids/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
});

test("heals unglue-split delete export aliases then renames locals", () => {
  const original =
    'function _0x12ab(){ return "_0xdead"; }\nexport { _0x12ab as delete SmartArtNode };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "delete-split export alias must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /function v\d+/);
  assert.match(src, /as deleteSmartArtNode/);
  assert.match(src, /"_0xdead"/);
});

test("heals unglue-split delete methods and empty rotator IIFE residue", () => {
  const original =
    "var td=(function(){()),nd=(function(){return 1;})();\n" +
    "class C { delete Foo(_0x1a){ return _0x1a + \"_0xdead\"; } }\n" +
    "export { nd as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /deleteFoo/);
  assert.match(src, /function\(\)\{\}/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0x1a\b/);
});

test("heals extra };ident after a closed function then parses", () => {
  const original =
    "function _0xaaa(){ return \"_0xdead\"; }\n" +
    "}\n" +
    "};xw=_0xaaa;\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "extra };ident residue must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /xw=/);
  assert.doesNotMatch(src, /\n}\n};xw=/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
});

test("heals ;}(),ident=function IIFE comma residue then parses", () => {
  const original =
    "var td=(function(){function _0xaaa(){}return _0xaaa.prototype.x=function(_0xbbb){this._draggingTarget=null,this.z=_0xbbb;},_0xaaa;}(),rd=function(){function _0xccc(_0xddd){return _0xddd+\"_0xdead\";}return _0xccc;}();\n" +
    "export { rd as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\)(\(\),)rd=function/);
  assert.doesNotMatch(healed, /;}(\(\),)[A-Za-z_$]/);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, ";}(),ident=function IIFE comma must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0xbbb\b/);
  assert.doesNotMatch(src, /_0xddd\b/);
});

test("heals IIFE comma after ;}() before a non-function assignment then parses", () => {
  const original =
    "var td=(function(){function _0xaaa(){}return _0xaaa;}(),id=Math.log(2),rd=function(_0xbbb){return _0xbbb+\"_0xdead\";}();\n" +
    "export { rd as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, ";}(),ident= IIFE comma must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0xbbb\b/);
});

test("closes leftover wae IIFE before var hd then strict-parses", () => {
  const original =
    "var wae=(function(){function inner(){if(true){if(true){return nodeName[\"toUpperCase\"]() === \"CANVAS\";\n}\nvar hd=/([&<>\"'])/g;\n" +
    "export { wae as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /CANVAS";\n\}\n\}\}\}\)\(\);\nvar hd=/);
  assert.doesNotMatch(healed, /CANVAS";\n\}\nvar hd=/);
  parseStrict(healed);
});

test("closes leftover wae IIFE on engine-chart CANVAS }var hd slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "CANVAS\";\n}\nvar hd=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "wae CANVAS }var hd leftover must exist");
  const original =
    "var wae=(function(){function inner(){if(true){if(true){return nodeName[\"toUpperCase\"]() === \"" +
    mark +
    "/x/g;\nexport { wae as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /CANVAS";\n\}\n\}\}\}\)\(\);\nvar hd=/);
  parseStrict(healed);
});

test("closes leftover _doTrack before sibling _recognize prototype then strict-parses", () => {
  const original =
    "var Ad=function(){function Ctor(){this._track=[];}" +
    "Ctor.prototype._doTrack=function(ev){if(ev){for(var i=0;i<1;i++){this._track.push(i);}this._track.push(ev);};" +
    "Ctor.prototype._recognize=function(){return this._track;},Ctor;}();function jd(){return \"_0xdead\";}\n" +
    "export { jd as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /this\._track\.push\(ev\);};};Ctor\.prototype\._recognize/);
  assert.doesNotMatch(healed, /this\._track\.push\(ev\);};Ctor\.prototype\._recognize/);
  parseStrict(healed);
});

test("closes leftover Ad constructor on engine-chart }();function jd slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = '};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig49F6.prototype["_recognize"]';
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Ad _doTrack };Ctor.prototype leftover must exist");
  const ad = vendor.lastIndexOf("var Ad=function", at);
  const jd = vendor.indexOf("function jd(", at);
  assert.ok(ad >= 0 && jd > at && jd - ad < 4000, "mark must sit inside Ad before jd");
  const healed = healForParse(vendor.slice(ad, jd + 80));
  assert.match(
    healed,
    /var_core_value_sig0EFF\);};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig49F6\.prototype\["_recognize"\]/
  );
  assert.doesNotMatch(
    healed,
    /var_core_value_sig0EFF\);};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig49F6\.prototype\["_recognize"\]/
  );
  parseStrict(
    healed.replace(/function jd\([\s\S]*$/, "function jd(){return 1;}\n") +
      "export { Ad as publicApi };\n"
  );
});

test("closes leftover removeClip before sibling removeAnimator prototype then strict-parses", () => {
  const original =
    "var Fm=function(){function Ctor(){this._head=null;}" +
    "Ctor.prototype.removeClip=function(clip){if(clip.animation){clip.next=clip.animation=null;};" +
    "Ctor.prototype.removeAnimator=function(){return this._head;},Ctor;}();\n" +
    "export { Fm as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /clip\.animation=null;};};Ctor\.prototype\.removeAnimator/);
  assert.doesNotMatch(healed, /clip\.animation=null;};Ctor\.prototype\.removeAnimator/);
  parseStrict(healed);
});

test("closes leftover removeClip on engine-chart }Ctor.prototype removeAnimator slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = '};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig158E.prototype["removeAnimator"]';
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Fm removeClip };Ctor.prototype leftover must exist");
  const fm = vendor.lastIndexOf("var Fm=function", at);
  assert.ok(fm >= 0 && at - fm < 4000, "mark must sit inside Fm");
  const healed = healForParse(vendor.slice(fm, at + mark.length + 80));
  assert.match(
    healed,
    /animation=null;};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig158E\.prototype\["removeAnimator"\]/
  );
  assert.doesNotMatch(
    healed,
    /animation=null;};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig158E\.prototype\["removeAnimator"\]/
  );
  parseStrict(
    healed.replace(/prototype\["removeAnimator"\][\s\S]*$/, 'prototype["removeAnimator"]=function(){return 1;},Ctor;}();\n') +
      "export { Fm as publicApi };\n"
  );
});

test("closes leftover updateInnerText before sibling canBeInsideText then strict-parses", () => {
  const original =
    "var zh=(function(){function Ctor(){this.x=1;}" +
    "Ctor.prototype.updateInnerText=function(){if(this.a){if(this.b){this.y=1;}this.z=1;};" +
    "Ctor.prototype.canBeInsideText=function(){return true;},Ctor;}());\n" +
    "export { zh as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /this\.z=1;};};Ctor\.prototype\.canBeInsideText/);
  assert.doesNotMatch(healed, /this\.z=1;};Ctor\.prototype\.canBeInsideText/);
  parseStrict(healed);
});

test("closes leftover updateInnerText on engine-chart }Ctor.prototype canBeInsideText slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = 'var_core_value_sig5082(580)](true);};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype["canBeInsideText"]';
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "updateInnerText };Ctor.prototype leftover must exist");
  const zh = vendor.lastIndexOf("zh=(function(){", at);
  assert.ok(zh >= 0 && at - zh < 40000, "mark must sit inside zh");
  const healed = healForParse("var " + vendor.slice(zh, at + mark.length + 20));
  assert.match(
    healed,
    /var_core_value_sig5082\(580\)\]\(true\);\};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["canBeInsideText"\]/
  );
  assert.doesNotMatch(
    healed,
    /var_core_value_sig5082\(580\)\]\(true\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["canBeInsideText"\]/
  );
});

test("closes leftover empty beforeUpdate afterUpdate methods then strict-parses", () => {
  const original =
    "var zh=(function(){function Ctor(){this.x=1;}" +
    "return Ctor.prototype.beforeUpdate=function(){;Ctor.prototype.afterUpdate=function(){;" +
    "Ctor.prototype.update=function(x){return x;},Ctor;}());\n" +
    "export { zh as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /beforeUpdate=function\(\)\{\};Ctor\.prototype\.afterUpdate=function\(\)\{\};Ctor\.prototype\.update/);
  assert.doesNotMatch(healed, /beforeUpdate=function\(\)\{;Ctor\.prototype/);
  parseStrict(healed);
});

test("closes leftover empty beforeUpdate on engine-chart function(){;Ctor.prototype slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = 'prototype["beforeUpdate"]=function(){;fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype';
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "empty beforeUpdate {;Ctor.prototype leftover must exist");
  const zh = vendor.lastIndexOf("zh=(function(){", at);
  assert.ok(zh >= 0, "mark must sit inside zh");
  const healed = healForParse(vendor.slice(zh, at + mark.length + 80));
  assert.match(
    healed,
    /prototype\["beforeUpdate"\]=function\(\)\{\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype/
  );
  assert.doesNotMatch(
    healed,
    /prototype\["beforeUpdate"\]=function\(\)\{;fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype/
  );
  parseStrict("var " + healed.replace(/prototype\['afterUpdate'\][\s\S]*$/, "prototype.update=function(){return 1;},Ctor;}());\nexport { zh as publicApi };\n"));
});

test("closes leftover empty traverse before sibling attrKV then strict-parses", () => {
  const original =
    "var zh=(function(){function Ctor(){this.x=1;}" +
    "Ctor.prototype.traverse=function(cb,ctx){;Ctor.prototype.attrKV=function(k,v){this[k]=v;},Ctor;}());\n" +
    "export { zh as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /traverse=function\(cb,ctx\)\{\};Ctor\.prototype\.attrKV/);
  assert.doesNotMatch(healed, /traverse=function\(cb,ctx\)\{;Ctor\.prototype/);
  parseStrict(healed);
});

test("closes leftover empty traverse on engine-chart function(){;Ctor.prototype attrKV slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = 'prototype["traverse"]=function(var_core_value_sig2BC1,var_core_value_sigEE72){;fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype';
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "empty traverse {;Ctor.prototype leftover must exist");
  const zh = vendor.lastIndexOf("zh=(function(){", at);
  assert.ok(zh >= 0, "mark must sit inside zh");
  const healed = healForParse("var " + vendor.slice(zh, at + mark.length + 20));
  assert.match(
    healed,
    /prototype\["traverse"\]=function\(var_core_value_sig2BC1,var_core_value_sigEE72\)\{\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype/
  );
  assert.doesNotMatch(
    healed,
    /prototype\["traverse"\]=function\(var_core_value_sig2BC1,var_core_value_sigEE72\)\{;fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype/
  );
});

test("closes leftover getPaintRect comma before initDefaultProps IIFE then strict-parses", () => {
  const original =
    "function Ctor(){this.x=1;}" +
    "Ctor.prototype.getPaintRect=function(){return null;},Ctor.initDefaultProps=function(){return 1;}\n" +
    "export { Ctor as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return null;};Ctor\.initDefaultProps=function\(\)\{return 1;\}/);
  assert.doesNotMatch(healed, /return null;},Ctor\.initDefaultProps=/);
  parseStrict(healed);
});

test("closes leftover initDefaultProps IIFE before inner function sig81AF then strict-parses", () => {
  const original =
    "var zh=(function(){function Ctor(){this.x=1;}" +
    "Ctor.prototype.getPaintRect=function(){return null;},Ctor.initDefaultProps=(function(){" +
    "var dec=id,proto=Ctor.prototype;proto.n=1;function Inner(a,b,c,d){Object.defineProperty(proto,a,{'get':function(){return 1;},'set':function(v){this.x=v;}});}" +
    "},Ctor;}());function Vh(x){return x;}\n" +
    "export { zh as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /proto\.n=1;\}\)\(\);function Inner/);
  parseStrict(healed);
});

test("closes leftover initDefaultProps on engine-chart =1;function sig81AF slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "var_core_value_sig8721[var_core_value_sigB008(1701)]=1;function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig81AF";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "initDefaultProps IIFE leftover before sig81AF must exist");
  const zh = vendor.lastIndexOf("zh=(function(){", at);
  assert.ok(zh >= 0, "mark must sit inside zh");
  const healed = healForParse("var " + vendor.slice(zh, at + mark.length + 20));
  assert.match(
    healed,
    /var_core_value_sig8721\[var_core_value_sigB008\(1701\)\]=1;\}\)\(\);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig81AF/
  );
  assert.doesNotMatch(
    healed,
    /var_core_value_sig8721\[var_core_value_sigB008\(1701\)\]=1;function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig81AF/
  );
});

test("closes leftover _savePrimaryToNormal before sibling hasState then strict-parses", () => {
  const original =
    "var zh=(function(){function Ctor(){this.x=1;}" +
    "Ctor.prototype._savePrimaryToNormal=function(a,b,keys){" +
    "for(var i=0;i<keys.length;i++){b[keys[i]]=this[keys[i]];};" +
    "Ctor.prototype.hasState=function(){return this.n>0;},Ctor;}());\n" +
    "export { zh as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /this\[keys\[i\]\];\};};Ctor\.prototype\.hasState/);
  assert.doesNotMatch(healed, /this\[keys\[i\]\];\};Ctor\.prototype\.hasState/);
  parseStrict(healed);
});

test("closes leftover _savePrimaryToNormal on engine-chart };Ctor.prototype hasState slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "this[var_core_value_sigE470]);};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype['hasState']";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "_savePrimaryToNormal };Ctor.prototype leftover must exist");
  const zh = vendor.lastIndexOf("zh=(function(){", at);
  assert.ok(zh >= 0, "mark must sit inside zh");
  const healed = healForParse("var " + vendor.slice(zh, at + mark.length + 20));
  assert.match(
    healed,
    /this\[var_core_value_sigE470\]\);\};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\['hasState'\]/
  );
  assert.doesNotMatch(
    healed,
    /this\[var_core_value_sigE470\]\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\['hasState'\]/
  );
});

test("closes leftover sig81AF before sibling function Vh then strict-parses", () => {
  const original =
    "function Inner(a,b,c,d){Object.defineProperty(proto,a,{'get':function(){return 1;},'set':function(v){this.x=v;}});" +
    "function Vh(x){return x;}\nexport { Vh as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /this\.x=v;\}\}\);\};function Vh/);
  parseStrict(healed);
});

test("closes leftover sig81AF on engine-chart }});function Vh slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "ox4cabed(this,var_core_value_sig4A8E);}});function Vh";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "sig81AF }});function Vh leftover must exist");
  const zh = vendor.lastIndexOf("zh=(function(){", at);
  assert.ok(zh >= 0, "mark must sit inside zh");
  const healed = healForParse("var " + vendor.slice(zh, at + mark.length + 20));
  assert.match(healed, /ox4cabed\(this,var_core_value_sig4A8E\);\}\}\);\};\}\)\(\);function Vh/);
  assert.doesNotMatch(healed, /ox4cabed\(this,var_core_value_sig4A8E\);\}\}\);function Vh/);
  parseStrict(healed.slice(0, healed.indexOf("function Vh")) + "\nexport { zh as publicApi };\n");
});

test("closes leftover useStates before sibling isSilent then strict-parses", () => {
  const original =
    "var zh=(function(){function Ctor(){this.x=1;}" +
    "Ctor.prototype.useStates=function(s){if(!s.length)this.clear();else{this.n=1;this.__dirty&=-2;};" +
    "Ctor.prototype.isSilent=function(){return false;},Ctor;}());\n" +
    "export { zh as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /this\.__dirty&=-2;\};};Ctor\.prototype\.isSilent/);
  parseStrict(healed);
});

test("closes leftover zh Element methods on engine-chart sibling prototype slices", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const zh = vendor.indexOf("zh=(function(){");
  const vh = vendor.indexOf("function Vh", zh);
  const healed = healForParse("var " + vendor.slice(zh, vh));
  const marks = [
    /this\.__dirty&=-2\);\};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["isSilent"\]/,
    /var_core_value_sig63DE\.targetName\]\);\};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["removeState"\]/,
    /\]\(var_core_value_sig88FB\);\};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["replaceState"\]/,
    /var_core_value_sig3DCD\);\};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\['_attachComponent'\]/,
    /var_core_value_sig958D\.__hostTarget=this;\};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["_detachComponent"\]/,
    /\"addSelfToZr\"\]\(var_core_value_sig5333\);\};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["removeSelfFromZr"\]/,
    /removeSelfFromZr\"\]\(var_core_value_sigC91D\);\};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\['animate'\]/
  ];
  for (const mark of marks) assert.match(healed, mark);
});

test("closes leftover Xh inherit wrapper before sibling function sigD5FF then strict-parses", () => {
  const original =
    "var Xh=function(var_core_value_sigC9E7){R(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF,var_core_value_sigC9E7);" +
    "function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF(x){return x;}\n" +
    "export { Xh as publicApi };\n";
  const healed = healForParse(original);
  assert.match(
    healed,
    /R\(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF,var_core_value_sigC9E7\);\}\(\);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF/
  );
  parseStrict(healed);
});

test("closes leftover Xh inherit on engine-chart R(sigD5FF);function slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "R(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF,var_core_value_sigC9E7);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Xh inherit leftover must exist");
  const healed = healForParse(vendor.slice(at - 40, at + mark.length + 20));
  assert.match(
    healed,
    /R\(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF,var_core_value_sigC9E7\);\}\(\);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF/
  );
  assert.doesNotMatch(
    healed,
    /R\(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF,var_core_value_sigC9E7\);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF/
  );
});

test("closes leftover sigD5FF Group ctor before sibling $h then strict-parses", () => {
  const original =
    "function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF(x){this.n=x;var Zh={},Qh={};function $h(k){delete Qh[k];}\n" +
    "export { $h as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /var Zh=\{\},Qh=\{\};\};function \$h/);
  parseStrict(healed);
});

test("closes leftover sigD5FF on engine-chart Zh={},Qh={};function $h slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "var Zh={},Qh={};function $h";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "sigD5FF };function $h leftover must exist");
  const ctor = vendor.lastIndexOf("function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF", at);
  assert.ok(ctor >= 0 && at - ctor < 20000, "mark must sit inside sigD5FF");
  const healed = healForParse(vendor.slice(ctor, at + mark.length + 20));
  assert.match(healed, /var Zh=\{\},Qh=\{\};\};function \$h/);
  assert.doesNotMatch(healed, /var Zh=\{\},Qh=\{\};function \$h/);
});

test("closes leftover eg dispose before sibling function ng then strict-parses", () => {
  const original =
    "function eg(id){this._disposed=true,$h(this.id));},fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig0515;}();function ng(x){return x;}\n" +
    "export { ng as publicApi };\n";
  const healed = healForParse(original);
  assert.match(
    healed,
    /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig0515;\}\(\);\};function ng/
  );
  assert.doesNotMatch(
    healed,
    /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig0515;\}\(\);function ng/
  );
});

test("closes leftover eg on engine-chart }();function ng slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "$h(this.id));},fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig0515;}();function ng";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "eg }();function ng leftover must exist");
  const start = vendor.lastIndexOf("function eg(", at);
  assert.ok(start >= 0, "mark must sit inside eg");
  const healed = healForParse(vendor.slice(start, at + mark.length + 20));
  assert.match(
    healed,
    /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig0515;\}\(\);\};function ng/
  );
  assert.doesNotMatch(
    healed,
    /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig0515;\}\(\);function ng/
  );
});

test("closes leftover Lg before sibling function sig45C9 then strict-parses", () => {
  const original =
    "function Lg(arr){arr.sort(function(a,b){return a-b;});for(var i=0;i<arr.length;){arr[i]!==1?arr.splice(i,1):i++;}return arr;" +
    "function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9(a,b){return a;}\n" +
    "export { Lg as publicApi };\n";
  const healed = healForParse(original);
  assert.match(
    healed,
    /return arr;\};function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9/
  );
  assert.doesNotMatch(
    healed,
    /return arr;function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9/
  );
  parseStrict(healed);
});

test("closes leftover Lg on engine-chart return sig815B;function sig45C9 slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "return var_core_value_sig815B;function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Lg return;function sig45C9 leftover must exist");
  const lg = vendor.lastIndexOf("function Lg(", at);
  assert.ok(lg >= 0 && at - lg < 4000, "mark must sit inside Lg");
  const healed = healForParse(vendor.slice(lg, at + mark.length + 20));
  assert.match(
    healed,
    /return var_core_value_sig815B;\};function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9/
  );
  assert.doesNotMatch(
    healed,
    /return var_core_value_sig815B;function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9/
  );
});

test("drops leftover extra brace before sibling function Rg then strict-parses", () => {
  const original =
    "function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9(a,b,n){return n&&fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9(a,b,1));}};function Rg(x){return x;}\n" +
    "export { Rg as publicApi };\n";
  const healed = healForParse(original);
  assert.match(
    healed,
    /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9\(a,b,1\)\);\};function Rg/
  );
  assert.doesNotMatch(
    healed,
    /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9\(a,b,1\)\);\}\};function Rg/
  );
});

test("drops leftover extra brace on engine-chart }}};function Rg slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9(var_core_value_sig84ED,var_core_value_sigCAE7,1));}};function Rg";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "sig45C9 }}};function Rg leftover must exist");
  const start = vendor.lastIndexOf("function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9", at);
  assert.ok(start >= 0, "mark must sit inside sig45C9");
  const healed = healForParse(vendor.slice(start, at + mark.length + 20));
  assert.match(
    healed,
    /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9\(var_core_value_sig84ED,var_core_value_sigCAE7,1\)\);\};function Rg/
  );
  assert.doesNotMatch(
    healed,
    /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9\(var_core_value_sig84ED,var_core_value_sigCAE7,1\)\);\}\};function Rg/
  );
});

test("closes leftover qae before sibling function sigA4C5 then strict-parses", () => {
  const original =
    "function qae(a,b){var x={},y={};return f(a||[],x),f(b||[],y,x),[ox6170fa(x),ox6170fa(y)];" +
    "function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigA4C5(t){return t;}\n" +
    "export { qae as publicApi };\n";
  const healed = healForParse(original);
  assert.match(
    healed,
    /\[ox6170fa\(x\),ox6170fa\(y\)\];\};function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigA4C5/
  );
  parseStrict(healed);
});

test("closes leftover qae on engine-chart ox6170fa];function sigA4C5 slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "[ox6170fa(var_core_value_sigE1FA),ox6170fa(var_core_value_sigF4F7)];function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigA4C5";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "qae ox6170fa];function leftover must exist");
  const qae = vendor.lastIndexOf("function qae(", at);
  assert.ok(qae >= 0 && at - qae < 2000, "mark must sit inside qae");
  const healed = healForParse(vendor.slice(qae, at + mark.length + 20));
  assert.match(
    healed,
    /\[ox6170fa\(var_core_value_sigE1FA\),ox6170fa\(var_core_value_sigF4F7\)\];\};function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigA4C5/
  );
  assert.doesNotMatch(
    healed,
    /\[ox6170fa\(var_core_value_sigE1FA\),ox6170fa\(var_core_value_sigF4F7\)\];function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigA4C5/
  );
});

test("does not close ooe ternary inherit before nested function sigD23F then strict-parses", () => {
  const original =
    "function C(){return ooe(p)?y=function(var_core_value_sig8107){R(var_core_value_sig9973,var_core_value_sig8107);" +
    "function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(){return 1;}" +
    "return var_core_value_sig9973;}(p):(y=function(){});return y;}\n" +
    "export { C as publicApi };\n";
  const healed = healForParse(original);
  assert.match(
    healed,
    /R\(var_core_value_sig9973,var_core_value_sig8107\);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F/
  );
  assert.doesNotMatch(
    healed,
    /R\(var_core_value_sig9973,var_core_value_sig8107\);\}\(\);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F/
  );
  parseStrict(healed);
});

test("keeps engine-chart ooe ternary inherit R(sig9973);function sigD23F nested", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "R(var_core_value_sig9973,var_core_value_sig8107);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "ooe inherit mark must exist");
  const start = vendor.lastIndexOf("return ooe(", at);
  const colon = vendor.indexOf("}(var_core_value_sig9F7D):", at);
  assert.ok(start >= 0 && colon > at, "ternary inherit wrapper must surround the mark");
  const healed = healForParse(vendor.slice(start, colon + "}(var_core_value_sig9F7D):".length) + "(y=function(){})}");
  assert.match(
    healed,
    /R\(var_core_value_sig9973,var_core_value_sig8107\);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F/
  );
  assert.doesNotMatch(
    healed,
    /R\(var_core_value_sig9973,var_core_value_sig8107\);\}\(\);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F/
  );
  parseStrict("function f(){" + healed + "\nexport { f as publicApi };\n");
});

test("closes leftover eh inherit wrapper before sibling function Oh then strict-parses", () => {
  const original =
    "var $m=(function(){}),eh=function(ox57f762){R(ox3990ce,ox57f762);function Oh(x){return x;}\n" +
    "export { Oh as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /R\(ox3990ce,ox57f762\);\}\(\);function Oh/);
  assert.doesNotMatch(healed, /R\(ox3990ce,ox57f762\);function Oh/);
  parseStrict(healed);
});

test("closes leftover eh on engine-chart R(ox3990ce);function Oh slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "R(ox3990ce,ox57f762);function Oh";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "eh R(ox3990ce);function Oh leftover must exist");
  const eh = vendor.lastIndexOf("eh=function", at);
  assert.ok(eh >= 0 && at - eh < 200, "mark must sit inside eh");
  const healed = healForParse(vendor.slice(eh, at + mark.length + 40));
  assert.match(healed, /R\(ox3990ce,ox57f762\);\}\(\);function Oh/);
  assert.doesNotMatch(healed, /R\(ox3990ce,ox57f762\);function Oh/);
  parseStrict(
    "var eh=" +
      healed.replace(/function Oh\([\s\S]*$/, "function Oh(){return 1;}\n") +
      "export { Oh as publicApi };\n"
  );
});

test("closes leftover Pf before sibling function Zf then strict-parses", () => {
  const original =
    "function Pf(){var CFAC={'bounceOut':function(x){return x;}},Hf=Math.pow,Xf=Lu();function Zf(t){return t;}\n" +
    "export { Zf as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /Xf=Lu\(\);\};function Zf/);
  assert.doesNotMatch(healed, /Xf=Lu\(\);function Zf/);
  parseStrict(healed);
});

test("closes leftover Pf on engine-chart Lu();function Zf slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "Xf=Lu();function Zf";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Pf Xf=Lu();function Zf leftover must exist");
  const pf = vendor.lastIndexOf("function Pf(", at);
  assert.ok(pf >= 0 && at - pf < 9000, "mark must sit inside Pf");
  const healed = healForParse(vendor.slice(pf, at + mark.length + 40));
  assert.match(healed, /Xf=Lu\(\);\};function Zf/);
  assert.doesNotMatch(healed, /Xf=Lu\(\);function Zf/);
  parseStrict(
    healed.replace(/function Zf\([\s\S]*$/, "function Zf(){return 1;}\n") +
      "export { Zf as publicApi };\n"
  );
});

test("closes leftover Nd pinch object before sibling function Pd then strict-parses", () => {
  const original =
    "var Nd={'pinch':function(a,b){if(a){if(b){return {'type':'pinch','event':b};function Pd(){return[1,0,0,1,0,0];}\n" +
    "export { Pd as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /'event':b\};\}\}\}\};function Pd/);
  assert.doesNotMatch(healed, /'event':b\};function Pd/);
  parseStrict(healed);
});

test("closes leftover Nd pinch on engine-chart }function Pd slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "'event':var_core_value_sigD032};}}};function Pd";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Nd pinch }}};function Pd leftover must exist");
  const nd = vendor.lastIndexOf("var Nd=", at);
  assert.ok(nd >= 0 && at - nd < 2000, "mark must sit inside Nd");
  const healed = healForParse(vendor.slice(nd, at + mark.length + 40));
  assert.match(healed, /'event':var_core_value_sigD032\};\}\}\}\};function Pd/);
  assert.doesNotMatch(healed, /'event':var_core_value_sigD032\};function Pd/);
  parseStrict(
    healed.replace(/function Pd\([\s\S]*$/, "function Pd(){return[1,0,0,1,0,0];}\n") +
      "export { Pd as publicApi };\n"
  );
});

test("collapses leftover };}}};function xge like other extra-brace siblings", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "'el':var_core_value_sigB95A};}}};function xge";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "pge }}};function xge leftover must exist");
  const pge = vendor.lastIndexOf("var pge=(function(){", at);
  const healed = healForParse(vendor.slice(pge, at + mark.length + 20));
  assert.match(healed, /'el':var_core_value_sigB95A\};function xge/);
  assert.doesNotMatch(healed, /'el':var_core_value_sigB95A\};\}\}\};function xge/);
});

test("does not add IIFE grouping after break;}}};function", () => {
  const original =
    "function Tf(){for(var i=0;i<1;i++){if(true){break;}}};function _0xaaa(){return \"_0xdead\";}\n" +
    "export { Tf as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /break;\}\}\}\);function/);
  parseStrict(healed);
});

test("closes leftover Nbe before sibling function zbe then strict-parses", () => {
  const original =
    "function Nbe(){return {'label':1,'boundary':x};function zbe(){return \"_0xdead\";}\n" +
    "export { Nbe as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /'boundary':x\};\};function zbe/);
  assert.doesNotMatch(healed, /'boundary':x\};function zbe/);
  parseStrict(healed);
});

test("closes leftover Nbe on engine-chart boundary }function zbe slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "'boundary':var_core_value_sigD1FC};function zbe";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Nbe boundary }function zbe leftover must exist");
  const nbe = vendor.lastIndexOf("function Nbe(", at);
  assert.ok(nbe >= 0 && at - nbe < 8000, "mark must sit inside Nbe");
  const healed = healForParse(vendor.slice(nbe, at + mark.length + 20));
  assert.match(healed, /'boundary':var_core_value_sigD1FC\};\};function zbe/);
  assert.doesNotMatch(healed, /'boundary':var_core_value_sigD1FC\};function zbe/);
});

test("closes leftover uye IIFE before barrel export after minFillFontSize then strict-parses", () => {
  const original =
    "var Ke=1,uye=(function(){function a(){function $9(y){return {'minFillFontSize':Math.max(10,y.minFillFontSize)};}export{ Ke as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /minFillFontSize\)\};\}\}\}\)\(\);export\{/);
  assert.doesNotMatch(healed, /minFillFontSize\)\};\}export\{/);
  parseStrict(healed);
});

test("closes leftover uye IIFE on engine-chart minFillFontSize }export slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "minFillFontSize)};}export{";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "minFillFontSize }export leftover must exist");
  const healed = healForParse(
    "var Ke=1,uye=(function(){function a(){function $9(y){return {'minFillFontSize':Math.max(10,y." +
      mark +
      "Ke as publicApi};"
  );
  assert.match(healed, /minFillFontSize\)\};\}\}\}\)\(\);export\{/);
  assert.doesNotMatch(healed, /minFillFontSize\)\};\}export\{/);
  parseStrict(healed);
});

test("drops leftover });};function after a ternary call then strict-parses", () => {
  const original =
    "function C0(){var x=cond?foo(a,b):bar(a,b,c);});};function J0(){return \"_0xdead\";}}\n" +
    "export { C0 as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /bar\(a,b,c\);function J0/);
  assert.doesNotMatch(healed, /bar\(a,b,c\);\}\);};function J0/);
  parseStrict(healed);
});

test("drops leftover });};function on engine-chart J0 slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = ":ox415b8f(var_core_value_sig73B71,var_core_value_sig4DEF,var_core_value_sig30871);});};function J0(";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "J0 leftover closes must exist in engine-chart");
  const original =
    `function C0(){var x=cond?foo(a,b)${mark}y){return 1;}}\n` +
    "export { C0 as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /ox415b8f\(var_core_value_sig73B71,var_core_value_sig4DEF,var_core_value_sig30871\);function J0/);
  assert.doesNotMatch(healed, /ox415b8f\([^)]*\);\}\);};function J0/);
  parseStrict(healed);
});

test("drops leftover }),{'data'} after return 0 then strict-parses", () => {
  const original =
    "function H2(){_0xaaa.prototype.m=function(){if(false)return;return 0;}),{'data':_0xbbb};}};function Nve(){return \"_0xdead\";}}\n" +
    "export { H2 as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return 0;\};function Nve/);
  assert.doesNotMatch(healed, /return 0;\}\),\{'data'/);
  parseStrict(healed);
});

test("drops leftover }),{'data'} on engine-chart Nve slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "return 0;}),{'data':ox17e9d8};}};function Nve";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Nve leftover data object must exist in engine-chart");
  const original =
    "function H2(){if(false)return;" +
    mark +
    "(targetObj){return \"_0xdead\";}}\n" +
    "export { H2 as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return 0;\};function Nve/);
  assert.doesNotMatch(healed, /\{'data':ox17e9d8\}/);
});

test("keeps ;}),{'keys' object after a completed callback then strict-parses", () => {
  const original =
    "function H2(){return foo(function(){return 1;}),{'keys':a,'buckets':b};}\n" +
    "export { H2 as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\),\{'keys':a,'buckets':b\}/);
  parseStrict(healed);
});

test("drops leftover comma after [];,Ctor.prototype then strict-parses", () => {
  const original =
    "function H2(){var x=1,empty=[];,_0xaaa.prototype[\"getVisualMeta\"]=function(){return \"_0xdead\";};}\n" +
    "export { H2 as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /empty=\[\];_0xaaa\.prototype/);
  assert.doesNotMatch(healed, /\[\];,_0xaaa\.prototype/);
  parseStrict(healed);
});

test("drops leftover comma on engine-chart [];,ox3c23b9.prototype slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "=[];,ox3c23b9.prototype[\"getVisualMeta\"]";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "[];,prototype leftover must exist in engine-chart");
  const original =
    "function H2(){var empty" +
    mark +
    "=function(){return \"_0xdead\";};}\n" +
    "export { H2 as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /empty=\[\];ox3c23b9\.prototype/);
  assert.doesNotMatch(healed, /\[\];,ox3c23b9\.prototype/);
  parseStrict(healed);
});

test("drops leftover },'scrollMove': after a completed O2 call then strict-parses", () => {
  const original =
    "function Qge(a){O2(function(){return a;}),'scrollMove':O2(function(){return \"_0xdead\";})}\n" +
    "export { Qge as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\)\nO2\(function\(\)\{return "_0xdead"/);
  assert.doesNotMatch(healed, /\},'scrollMove':O2\(function/);
  parseStrict(healed);
});

test("drops leftover },'scrollMove': on engine-chart O2 slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "),'scrollMove':O2(function";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "scrollMove leftover must exist in engine-chart");
  assert.match(vendor.slice(at - 2, at + 1), /;\}\)/);
  const original =
    "function Qge(){return 1;}\nO2(function(){return 1;}" +
    mark +
    "(){return \"_0xdead\";})\n" +
    "export { Qge as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\)\nO2\(function/);
  assert.doesNotMatch(healed, /'scrollMove':O2\(function/);
  parseStrict(healed);
});

test("drops leftover },'pan': after a closed pretty function then strict-parses", () => {
  const original =
    "function Qge(a){\n  return {\n    'i': a\n  };\n}\n\n},'pan':O2(function(){return \"_0xdead\";})\n" +
    "export { Qge as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\n\nO2\(function/);
  assert.doesNotMatch(healed, /\},'pan':O2\(function/);
  parseStrict(healed);
});

test("drops leftover },'pan': on engine-chart O2 slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},'pan':O2(function";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "pan leftover must exist in engine-chart");
  assert.match(vendor.slice(at - 20, at), /\}\n\n$/);
  const original =
    "function Qge(a){return a;}\n\n" +
    mark +
    "(){return \"_0xdead\";})\n" +
    "export { Qge as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\n\nO2\(function/);
  assert.doesNotMatch(healed, /\},'pan':O2\(function/);
  parseStrict(healed);
});

test("keeps },'key':function object methods then strict-parses", () => {
  const original =
    "var ease={'quadraticIn':function(a){return a*a;},'quadraticOut':function(a){return \"_0xdead\";}};\n" +
    "export { ease as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\},'quadraticOut':function/);
  parseStrict(healed);
});

test("drops leftover comma after function Ident(){,Ctor.prototype then strict-parses", () => {
  const original =
    "function __e(a,b){,_0xaaa.prototype[\"_layoutContentAndController\"]=function(){return \"_0xdead\";};}\n" +
    "export { __e as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /function __e\(a,b\)\{_0xaaa\.prototype/);
  assert.doesNotMatch(healed, /function __e\(a,b\)\{,_0xaaa\.prototype/);
  parseStrict(healed);
});

test("drops leftover comma on engine-chart __e {,ox4f6106.prototype slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "function __e(ox4ce290,ox5dfcc,ox37e4dd,ox180fe3,ox40d1e8,ox4e25c4,ox3d5605){,ox4f6106.prototype";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "__e leftover comma must exist in engine-chart");
  assert.match(vendor.slice(at - 80, at), /;\}\(hO\);$/);
  const original =
    `${mark}[\"_layoutContentAndController\"]=function(){return \"_0xdead\";};}\n` +
    "export { __e as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /function __e\([^)]*\)\{ox4f6106\.prototype/);
  assert.doesNotMatch(healed, /function __e\([^)]*\)\{,ox4f6106\.prototype/);
  parseStrict(healed);
});

test("does not add IIFE grouping after return true;}}};function then strict-parses", () => {
  const original =
    "var x={o:{'rect':function(){if(foo(a,b))return true;}}};function C0(y){return \"_0xdead\";}\n" +
    "export { x as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return true;\}\}\};function C0/);
  assert.doesNotMatch(healed, /return true;\}\}\}\);function C0/);
  parseStrict(healed);
});

test("does not add IIFE grouping on engine-chart C0 return true;}}};function", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "return true;}}};function C0(";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "C0 leftover closes must exist in engine-chart");
  assert.match(vendor.slice(at - 1800, at), /'rect':function/);
  const original =
    `var x={o:{'rect':function(){if(foo(a,b))${mark}y){return 1;}\n` +
    "export { x as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return true;\}\}\};function C0/);
  assert.doesNotMatch(healed, /return true;\}\}\}\);function C0/);
  parseStrict(healed);
});

test("heals return ident;}}};function leftover IIFE grouping then strict-parses", () => {
  const original =
    "var nD={'gte':function(a,b){return a>=b;}},rD=(function(){{if(true){return _0xaaa;}}};function pD(){return \"_0xdead\";}\n" +
    "export { rD as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /;\}\}\}\);function pD/);
  assert.doesNotMatch(healed, /;\}\}\};function pD/);
  parseStrict(healed);
});

test("heals (function(){else leftover IIFE then strict-parses", () => {
  const original =
    "var nD={'gte':function(a,b){return a>=b;}},rD=(function(){else{if(true){return \"_0xdead\";}}return 1;}());\n" +
    "export { rD as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /rD=\(function\(\)\{\{if\(true\)/);
  assert.doesNotMatch(healed, /=\(function\(\)\{else/);
  parseStrict(healed);
});

test("keeps compact };},ident= object close before a comma assignment then strict-parses", () => {
  const original =
    "var o=function(){return {a:1,...rest};},next=Math.max(1,2);\n" +
    "export { o as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\.\.\.rest\};\},next=/);
  assert.doesNotMatch(healed, /\.\.\.rest\};next\s*=/);
  parseStrict(healed);
});

test("drops leftover };},ident= after a closed inverse return object then strict-parses", () => {
  const original =
    "function wrap(){return {'type':'inverse','title':get([\"legend\",\"selector\",\"inverse\"])};},u2 = function(){return \"_0xdead\";}}\n" +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /inverse\"\]\)\};u2 = function/);
  assert.doesNotMatch(healed, /inverse\"\]\)\};\},u2 =/);
  parseStrict(healed);
});

test("keeps compact };},ident= on engine-chart Ewe canConvert slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "var_core_value_sigFBA51};},var_core_value_sigC27E1=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Ewe compact object-close comma assignment must exist");
  const ewe = vendor.lastIndexOf("function Ewe(", at);
  assert.ok(ewe >= 0 && at - ewe < 20000, "mark must sit inside Ewe");
  const healed = healForParse(vendor.slice(ewe, at + mark.length + 20));
  assert.match(healed, /var_core_value_sigFBA51\};\},var_core_value_sigC27E1=/);
  assert.doesNotMatch(healed, /var_core_value_sigFBA51\};var_core_value_sigC27E1\s*=/);
});

test("keeps compact };},ident=( comma-arrow sibling then strict-parses", () => {
  const original =
    "var Xwe=(a)=>{return {connectors:a[0]};},Zwe=(b)=>{return b+\"_0xdead\";};\n" +
    "export { Xwe as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\};\},Zwe=/);
  assert.doesNotMatch(healed, /\};Zwe\s*=/);
  parseStrict(healed);
});

test("keeps compact };},ident=( on engine-chart Zwe comma-arrow sibling", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "0477(585)]};},Zwe=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Zwe compact function-close comma-arrow must exist");
  const healed = healForParse(vendor.slice(at - 80, at + mark.length + 40));
  assert.match(healed, /0477\(585\)\]\};\},Zwe=/);
  assert.doesNotMatch(healed, /0477\(585\)\]\};Zwe\s*=/);
});

test("heals };\\n},ident= leftover comma after a closed function then strict-parses", () => {
  const original =
    "function _0xaaa(){return 1;};\n},_0xbbb = function(){return \"_0xdead\";};\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /\n\},_0xbbb/);
  parseStrict(healed);
});

test("heals );,Ctor.prototype leftover comma then strict-parses", () => {
  const original =
    "function _0xaaa(){this.x=1;}V(a,b);,_0xaaa.prototype[\"isSelected\"]=function(_0xbbb){return _0xbbb+\"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\);_0xaaa\.prototype/);
  assert.doesNotMatch(healed, /\);,_0xaaa\.prototype/);
  parseStrict(healed);
});

test("drops leftover );else{ after a call that is not an if-consequent then strict-parses", () => {
  const original =
    "function _0xaaa(){eachComponent({'mainType':\"series\"},_0xbbb);else{return \"_0xdead\";}}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /_0xbbb\);\{return/);
  assert.doesNotMatch(healed, /_0xbbb\);else\{/);
  parseStrict(healed);
});

test("keeps if(cond) call();else{ then strict-parses", () => {
  const original =
    "function _0xaaa(_0xbbb){if(!_0xbbb.length)this.clearStates();else{return \"_0xdead\";}}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /clearStates\(\);else\{/);
  parseStrict(healed);
});

test("drops over-closed leftover else junk before sibling function then strict-parses", () => {
  const original =
    "function _0xaaa(_0xbbb){for(var i=0;i<H.length;i++)_0xbbb.registerAction({t:H[i]},Fu);_0xbbb.registerAction({t:\"x\"},function(a,b){b.eachComponent({m:\"s\"},cb);else{if(x){return 1;}else{if(y)return 2;}}z&&f(1),z&&f(2);}}if(z)return 3;function _0xccc(){return \"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /cb\);else\{/);
  assert.match(healed, /eachComponent\(\{m:"s"\},cb\);/);
  assert.match(healed, /function _0xccc/);
  parseStrict(healed);
});

test("drops leftover else junk on engine-chart UU-to-lG slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const start = vendor.indexOf("function UU(");
  const end = vendor.indexOf("function lG(", start);
  assert.ok(start >= 0 && end > start, "UU-to-lG leftover else slice must exist in engine-chart");
  const original = `${vendor.slice(start, end)}function lG(){return 1;}\nexport { UU as publicApi };\n`;
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /ox2aaf0a\);else\{/);
  assert.match(healed, /function lG/);
  parseStrict(healed);
});

test("drops leftover );else{ on engine-chart treemap eachComponent slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "eachComponent({'mainType':\"series\",'subType':\"treemap\"";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "treemap eachComponent leftover else must exist in engine-chart");
  const elseAt = vendor.indexOf(");else{", at);
  assert.ok(elseAt > at, "treemap );else{ must follow eachComponent");
  const original =
    `function wrap(){${vendor.slice(at, elseAt + 7)}return 1;}}\n`;
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /ox2aaf0a\);else\{/);
  parseStrict(healed);
});

test("does not over-close ;}()),ident=function extra-paren then strict-parses", () => {
  const original =
    "function wrap(){return 1;}\n" +
    "foo(a,b);}()),lX=function(){return \"_0xdead\";}\n" +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /foo\(a,b\);lX=/);
  assert.doesNotMatch(healed, /\}\)\(\),lX=/);
  parseStrict(healed);
});

test("does not over-close engine-chart ;}()),lX= extra-paren then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = ";}()),lX=function";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, ";}()),lX leftover must exist in engine-chart");
  assert.match(vendor.slice(at - 12, at + mark.length), /sig3A7C\);\}\(\)\),lX=function/);
  const original =
    "function wrap(){return 1;}\n" +
    `foo(a,b)${mark}(){return \"_0xdead\";}\n` +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /foo\(a,b\);lX=/);
  assert.doesNotMatch(healed, /\}\)\(\),lX=/);
  parseStrict(healed);
});

test("drops leftover });));});for after a completed call then strict-parses", () => {
  const original =
    "function wrap(){foo(x);});));});for(var i=0;i<1;i++){return \"_0xdead\";}}\n" +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /foo\(x\);for\(var i=0/);
  assert.doesNotMatch(healed, /\}\);\)\);\}\);for/);
  parseStrict(healed);
});

test("drops leftover });));});for on engine-chart 32EC slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = ");});));});for(var fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig7EA0=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "});));});for leftover must exist in engine-chart");
  const original =
    `function wrap(){foo(x${mark}[1];i<1;i++){return 1;}}\n` +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /foo\(x\);for\(var fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig7EA0=/);
  assert.doesNotMatch(healed, /\}\);\)\);\}\);for/);
  parseStrict(healed);
});

test("drops leftover });}else after H() index-map callback then strict-parses", () => {
  const original =
    "function wrap(){return items.sort(function(a,b){return 1;}),H(items,function(x){return arr[x.index];});}else{var asc=true;return arr;}return 2;}\n" +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /x\.index\];\}\);\{var asc/);
  assert.doesNotMatch(healed, /\}\);\}else\{var asc/);
  parseStrict(healed);
});

test("drops leftover });}else on engine-chart H() index-map slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = ".index];});}else{var var_core_value_sigB577=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "H() index-map leftover else must exist in engine-chart");
  const original =
    `function wrap(){return H(items,function(x){return arr[x${mark}true;return 1;}return 2;}\n` +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\.index\];\}\);\{var var_core_value_sigB577=/);
  assert.doesNotMatch(healed, /\.index\];\}\);\}else\{/);
  parseStrict(healed);
});

test("drops leftover });},'index' object after a closed callback then strict-parses", () => {
  const original =
    "function wrap(){each(function(){obj.rotation=Hv(1);});},'index':ox};});return 1;}\n" +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /Hv\(1\);\}\);return 1/);
  assert.doesNotMatch(healed, /'index':ox/);
  parseStrict(healed);
});

test("keeps )});},'key' wrap-call object siblings", () => {
  const original = "sig3CE4)});},'updateCommon':_J,'contain':jJ";
  const healed = healForParse(original);
  assert.equal(healed, original);
});

test("keeps });},'key':function method siblings then strict-parses", () => {
  const original =
    "var x={apply:function(){foo(function(){return 1;});},'matrix':function(){return \"_0xdead\";}};\n" +
    "export { x as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\);\},'matrix':function/);
  parseStrict(healed);
});

test("drops leftover });},'index' on engine-chart 42110c slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = ";});},'index':ox42110c};});return";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "index leftover object slice must exist in engine-chart");
  const original =
    `function wrap(){each(function(){obj.rotation=Hv(1)${mark} 1;}\n` +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /Hv\(1\);\}\);return 1/);
  assert.doesNotMatch(healed, /'index':ox42110c/);
  parseStrict(healed);
});

test("drops leftover })(),Ctor;}(arg) inherit after a completed call then strict-parses", () => {
  const original =
    "function wrap(){obj[k]=dec(3129);}()),Ctor;}(Qw);su(oO);function rest(){return \"_0xdead\";}}\n" +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /dec\(3129\);su\(oO\)/);
  assert.doesNotMatch(healed, /dec\(3129\)\}\}\)\(\)/);
  assert.doesNotMatch(healed, /Ctor;\}\(Qw\)/);
  parseStrict(healed);
});

test("keeps protoInitialize })() and drops leftover ,ox5f4c14;}(Qw) then strict-parses", () => {
  const original =
    "function su(a,b){return a;}\n" +
    "var oO={},JE={};\n" +
    "var ox5f4c14={};\n" +
    "ox5f4c14.protoInitialize=(function(){var x=3129;" +
    "}()),ox5f4c14;}(Qw);su(oO,JE);function sO(){return 1;}\n" +
    "export { sO as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\)\(\);+su\(oO,JE\)/);
  assert.doesNotMatch(healed, /ox5f4c14;\}\(Qw\)/);
  parseStrict(healed);
});

test("keeps engine-chart protoInitialize })() and drops leftover ,ox5f4c14;}(Qw) before sO", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = ";}()),ox5f4c14;}(Qw);su(oO,JE)";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "3129 leftover inherit slice must exist in engine-chart");
  const start = vendor.lastIndexOf("protoInitialize=(function", at);
  const end = vendor.indexOf("function sO(", at);
  assert.ok(start >= 0 && end > at, "protoInitialize must precede function sO");
  const original =
    "function su(a,b){return a;}\n" +
    "var oO={},JE={},ST={},Qw={};\n" +
    "var ox5f4c14={};\n" +
    `ox5f4c14.${vendor.slice(start, end)}function sO(){return 1;}\n` +
    "export { sO as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\)\(\);+su\(oO,JE\)/);
  assert.doesNotMatch(healed, /ox5f4c14;\}\(Qw\)/);
  parseStrict(healed);
});

test("drops leftover })(),Ctor;}(arg) inherit after a closed numeric assignment then strict-parses", () => {
  const original =
    "function wrap(){obj.__dirty=7})(),Ctor;}(av),Boe=function(){return \"_0xdead\";}}\n" +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /__dirty=7,Boe=/);
  assert.doesNotMatch(healed, /__dirty=7\}\)\(\),Boe=/);
  assert.doesNotMatch(healed, /Ctor;\}\(av\)/);
  parseStrict(healed);
});

test("closes leftover 805A initDefaultProps before sibling Boe then strict-parses", () => {
  const original =
    "var var_core_value_sig805A={};var_core_value_sig805A.initDefaultProps=function(){" +
    "this.__dirty=7})(),var_core_value_sig805A;}(av),Boe=function(){return \"_0xdead\";};\n" +
    "export { Boe as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /__dirty=7;}\(av\),Boe=/);
  assert.doesNotMatch(healed, /__dirty=7,Boe=/);
  assert.doesNotMatch(healed, /__dirty=7\}\)\(\),var_core_value_sig805A;}\(av\),Boe=/);
  parseStrict(healed.replace(/,Boe=function/, ";var Boe=function"));
});

test("closes leftover 805A })(),ident;}(av),Boe on engine-chart slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "__dirty=7})(),var_core_value_sig805A;}(av),Boe=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "805A leftover inherit slice must exist in engine-chart");
  const end = vendor.indexOf("},Xv),$v=", at);
  assert.ok(end > at, "Boe=iu(...) call must follow 805A leftover");
  const original =
    `var wrap=function(){${vendor.slice(at, end + 5)};};\nexport { wrap as publicApi };\n`;
  const healed = healForParse(original);
  assert.match(healed, /__dirty=7;}\(av\),Boe=/);
  assert.doesNotMatch(healed, /__dirty=7,Boe=/);
  parseStrict(healed);
});

test("heals leftover ;),ident[ after a completed call then strict-parses", () => {
  const original =
    "function _0xaaa(){return foo(a,b,this,true,x).data;),_0xbbb[k]('getItemModel',function(){return \"_0xdead\";});}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\.data;_0xbbb\[/);
  assert.doesNotMatch(healed, /\.data;\),_0xbbb\[/);
  parseStrict(healed);
});

test("heals leftover ];),ident= truncated for-loop then strict-parses", () => {
  const original =
    "function _0xaaa(){var a=[1,2];),_0xbbb=[],asc=true,i=0,n=3;i<n;i++)_0xbbb[i]=i;return \"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /;for\(_0xbbb=\[\]/);
  assert.doesNotMatch(healed, /\];\),_0xbbb=/);
  parseStrict(healed);
});

test("heals leftover ;()),ident= empty invoke then strict-parses", () => {
  const original =
    "function _0xaaa(){return 1;}ox121ba0(ox176dad);()),_0xbbb=function(){return \"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /ox176dad\);_0xbbb=/);
  assert.doesNotMatch(healed, /;\(\)\),_0xbbb=/);
  parseStrict(healed);
});

test("heals leftover };()),ident= empty invoke then strict-parses", () => {
  const original =
    "function _0xaaa(){return 1;}var _0xccc={k:ox56aadc};()),_0xbbb=function(){return \"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /ox56aadc\};_0xbbb=/);
  assert.doesNotMatch(healed, /;\(\)\),_0xbbb=/);
  parseStrict(healed);
});

test("heals leftover ;()),TU= on engine-chart ox121ba0 slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "ox121ba0(ox176dad);()),TU=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "ox121ba0 leftover invoke slice must exist in engine-chart");
  const original = `function wrap(){return 1;}${vendor.slice(at, at + mark.length)}function(a){return 1;}\n`;
  const healed = healForParse(original);
  assert.match(healed, /ox176dad\);TU=/);
  assert.doesNotMatch(healed, /;\(\)\),TU=/);
  parseStrict(healed);
});

test("drops leftover },Ctor;}(oO);function inherit after a closed defaults object then strict-parses", () => {
  const original =
    "function wrap(){return 1;}var o={animationEasing:\"linear\"},_0xaaa;}(oO);function _0xbbb(){return \"_0xdead\";}\n" +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /"linear"};function _0xbbb/);
  assert.doesNotMatch(healed, /,_0xaaa;}\(oO\)/);
  assert.doesNotMatch(healed, /\}{8,}\)\(oO\)/);
  parseStrict(healed);
});

test("drops leftover },Ctor;}(oO);function on engine-chart 3299-to-yq slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = `"linear"},fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig3299;}(oO);function yq(`;
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "3299 inherit leftover must exist in engine-chart");
  const original =
    `var o={animationEasing:${vendor.slice(at, vendor.indexOf("function yq(", at))}function yq(){return 1;}\n`;
  const healed = healForParse(original);
  assert.match(healed, /"linear"};function yq/);
  assert.doesNotMatch(healed, /sig3299;}\(oO\)/);
  assert.doesNotMatch(healed, /\}{8,}\)\(oO\)/);
  parseStrict(healed);
});

test("drops leftover ;},Ctor;}(arg);function inherit invoke after a closed method then strict-parses", () => {
  const original =
    "function _0xaaa(){this.x=1;}_0xaaa.prototype.b=function(){return 1;},_0xaaa;}(Qv);function _0xbbb(){return \"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /,_0xaaa;}\(Qv\)/);
  assert.doesNotMatch(healed, /;\}{4,}\)\(Qv\)/);
  parseStrict(healed);
});

test("drops leftover ;},Ctor;}(Qv);function on engine-chart 84E4 slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = ";},fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig84E4;}(Qv);function RK(";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "84E4 inherit leftover must exist in engine-chart");
  const original =
    `function _0xaaa(){return 1;}_0xaaa.prototype.b=function(){return 1}${vendor.slice(at, vendor.indexOf("function RK(", at))}function RK(){return 1;}\n`;
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /sig84E4;}\(Qv\)/);
  assert.doesNotMatch(healed, /;\}{4,}\)\(Qv\)/);
  parseStrict(healed);
});

test("closes leftover IIFE blocks in ,Ctor;}());function then strict-parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}if(true){if(true){" +
    "_0xaaa.dimIdxMap=Sj(1),_0xaaa;}());function _0xbbb(){return \"_0xdead\";}\n" +
    "export { nd as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\}\}\)\(\);function _0xbbb/);
  assert.doesNotMatch(healed, /,_0xaaa;}\(\)\);function/);
  parseStrict(healed);
});

test("closes engine-chart 2C3F IIFE before function IR then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const ident = "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig2C3F";
  const start = vendor.lastIndexOf(`(function(){function ${ident}`);
  const end = vendor.indexOf("function IR(", start);
  assert.ok(start >= 0 && end > start, "2C3F IIFE slice must exist in engine-chart");
  const original = `var x=${vendor.slice(start, end)}function IR(){return 1;}\n`;
  const healed = healForParse(original);
  assert.match(healed, /\}\}\}\)\(\);function IR/);
  parseStrict(healed);
});

test("does not swallow return false;},ident.padding comma-assignment then strict-parses", () => {
  const original =
    "function fn(){return x&&(Pu(el),el.off=function(){return false;},style.padding='0',style[k]='0'),box.dpr=1,box;}\n" +
    "export { fn as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return false;},style\.padding=/);
  assert.doesNotMatch(healed, /return false;style\.padding=/);
  parseStrict(healed);
});

test("keeps ='0'),ident[ after return false;}, in engine-chart CF58 slice then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const needle = "='0'),var_core_value_sig4C5E[";
  const at = vendor.indexOf(needle);
  const start = vendor.lastIndexOf("return var_core_value_sigC2D7&&", at);
  const end = vendor.indexOf(";}return", at) + 1;
  assert.ok(start >= 0 && end > start, "CF58 return&& slice must exist in engine-chart");
  const original = `function fn(){${vendor.slice(start, end)}}\n`;
  const healed = healForParse(original);
  assert.match(healed, /return false;},var_core_value_sigC2D7\.padding=/);
  assert.match(healed, /='0'\),var_core_value_sig4C5E\[/);
  parseStrict(healed);
});

test("does not swallow I_ return ident;},ident.getClass comma-assignment then strict-parses", () => {
  const original =
    "function I_(var_core_value_sigCF83){var_core_value_sigCF83.register=function(var_core_value_sig91E9){return var_core_value_sig91E9;},var_core_value_sigCF83.getClass=function(){return 1;},var_core_value_sigCF83.hasSubTypes=function(){return 2;};function inner(){return 3;}return var_core_value_sigCF83;}\n" +
    "export { I_ as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return var_core_value_sig91E9;},var_core_value_sigCF83\.getClass=/);
  assert.doesNotMatch(healed, /return var_core_value_sig91E9;var_core_value_sigCF83\.getClass=/);
  parseStrict(healed);
});

test("keeps engine-chart I_ return ident;},ident.getClass comma then strict-parses slice", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "return var_core_value_sig91E9;},var_core_value_sigCF83.getClass=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "I_ getClass comma-assignment must exist");
  const iAt = vendor.lastIndexOf("function I_", at);
  const sig = vendor.indexOf("function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig5471", at);
  assert.ok(iAt >= 0 && sig > at, "I_ must surround getClass");
  const healed = healForParse(vendor.slice(iAt, sig) + "function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig5471(){return 1;}\n}");
  assert.match(healed, /return var_core_value_sig91E9;},var_core_value_sigCF83\.getClass=/);
  assert.match(healed, /return var_core_value_sig4E4D;},var_core_value_sigCF83\.getClassesByMainType=/);
  parseStrict(healed + "\nexport { I_ as publicApi };\n");
});

test("heals return ident;},Ctor.initDefaultProps then strict-parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "for(var i=0;i<1;i++){}" +
    "return _0xaaa;},_0xaaa.initDefaultProps=function(){return \"_0xdead\";}\n" +
    "return _0xaaa;}());\n" +
    "export { nd as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return _0xaaa;_0xaaa\.initDefaultProps=/);
  assert.doesNotMatch(healed, /return _0xaaa;},_0xaaa\.initDefaultProps=/);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "return ident;},Ctor.initDefaultProps must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("closes leftover nested ifs before ;;Ctor.prototype sibling then strict-parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "return _0xaaa.prototype.step=function(){if(!this._finished){if(this.a){if(this.b){this.z=1;;" +
    "_0xaaa.prototype.add=function(_0xbbb){return _0xbbb+\"_0xdead\";};},_0xaaa;}()),gp=(function(){function _0xccc(){return 1;}return _0xccc;}());\n" +
    "export { gp as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /this\.z=1;;_0xaaa\.prototype/);
  const join = healed.slice(healed.indexOf("this.z=1"), healed.indexOf("prototype.add"));
  assert.ok(
    (join.match(/\}/g) || []).length >= 4,
    `nested-if step must close before sibling add, got ${JSON.stringify(join)}`
  );
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "nested-if ;;Ctor.prototype sibling must close every leftover block");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("heals ;;Ctor.prototype siblings nested inside an IIFE then comma-return", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "return _0xaaa.prototype.step=function(){return false;;_0xaaa.prototype.pause=function(){this._paused=true;;_0xaaa.prototype.resume=function(){this._paused=false;;_0xaaa.prototype.setEasing=function(_0xbbb){this.z=_0xbbb+\"_0xdead\";};},_0xaaa;}()),gp=(function(){function _0xccc(){return 1;}return _0xccc;}());\n" +
    "export { gp as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return false;\};/);
  assert.match(healed, /_paused=true;\};/);
  assert.match(healed, /_paused=false;\};/);
  assert.doesNotMatch(healed, /;;_0xaaa\.prototype/);
  assert.match(healed, /}\)?\(\),gp=/);
  assert.equal(healed.includes("},_0xaaa;}()),"), false);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "nested ;;Ctor.prototype + },Ctor;}()), must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0xbbb\b/);
});

test("heals };Ctor.prototype and }};Ctor.prototype same-ident siblings then parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "return _0xaaa.prototype.a=function(){return 1;;_0xaaa.prototype.b=function(){return 2;};_0xaaa.prototype.c=function(){return 3;}};_0xaaa.prototype.d=function(_0xbbb){return _0xbbb+\"_0xdead\";};},_0xaaa;}()),gp=(function(){function _0xccc(){return 1;}return _0xccc;}());\n" +
    "export { gp as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return 1;\};/);
  assert.doesNotMatch(healed, /\}\};_0xaaa\.prototype/);
  assert.match(healed, /return 3;;?\};/);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "};Ctor.prototype siblings must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0xbbb\b/);
});

test("does not close-comma an already-closed method before Ctor.prototype", () => {
  const original =
    "function _0xaaa(){this.x=1;}\n" +
    "_0xaaa.prototype.a=function(){this.z=1;}this.foo(2);;_0xaaa.prototype.b=function(_0xbbb){return _0xbbb+\"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /;;\},_0xaaa\.prototype/);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "already-closed Ctor.prototype sibling must stay parseable");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("keeps the method close when dropping leftover },Ctor;}()), IIFE comma-return", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "_0xaaa.prototype.setEasing=function(_0xbbb){this.z=_0xbbb+\"_0xdead\";},_0xaaa;}()),gp=(function(){function _0xccc(){return 1;}return _0xccc;}());\n" +
    "export { gp as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /_0xdead";\}\}\)\(\),gp=/);
  assert.equal(healed.includes("},_0xaaa;}()),"), false);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "},Ctor;}()), must keep method close then IIFE close");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("closes leftover nested braces before },Ctor;}()),ident= then strict-parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "_0xaaa.prototype.step=function(_0xbbb){" +
    "if(!this._finished){if(_0xbbb){if(Am(_0xbbb)){if(km(_0xbbb)){" +
    "var z={'type':\"linear\",'x':1};}else{gm(_0xbbb,1,1,1);},_0xaaa;}()),Nm=(function(){function _0xccc(){return \"_0xdead\";}return _0xccc;}());\n" +
    "export { Nm as publicApi };\n";
  const healed = healForParse(original);
  assert.equal(healed.includes("},_0xaaa;}()),"), false);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "nested-if },Ctor;}()),ident= must parse after brace-aware IIFE close");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("expands leftover );}})(),ident= when IIFE braces are still open then strict-parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "_0xaaa.prototype.step=function(_0xbbb){" +
    "if(!this._finished){if(_0xbbb){if(Am(_0xbbb)){if(km(_0xbbb)){" +
    "var z={'type':\"linear\",'x':1};}else{gm(_0xbbb,1,1,1);}})(),Nm=(function(){function _0xccc(){return \"_0xdead\";}return _0xccc;}());\n" +
    "export { Nm as publicApi };\n";
  const healed = healForParse(original);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "1);}})(),ident= with leftover open braces must expand closes");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("heals empty-body for(...);if with break then strict-parses", () => {
  const original =
    "function _0xaaa(_0xbbb){var a=[1],b=[1],ok=true;if(ok){for(var i=0;i<a.length;i++);if(a[i]!==b[i]){ok=false;break;}}return _0xbbb+\"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /i\+\+\);if\(a\[i\]/);
  assert.match(healed, /i\+\+\)if\(a\[i\]/);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "for(...);if{...break} empty-body residue must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("heals },Ctor;}());function IIFE comma-return then strict-parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "_0xaaa.prototype.b=function(_0xbbb){this.z=_0xbbb+\"_0xdead\";},_0xaaa;}());function _0xccc(){return 1;}\n" +
    "export { nd as publicApi };\n";
  const healed = healForParse(original);
  assert.equal(healed.includes("},_0xaaa;}());"), false);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "},Ctor;}());function must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("heals extra braces before },Ctor;}());function then strict-parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "_0xaaa.prototype.b=function(_0xbbb){this.z=_0xbbb+\"_0xdead\";}}}},_0xaaa;}());function _0xccc(){return 1;}\n" +
    "export { nd as publicApi };\n";
  const healed = healForParse(original);
  assert.equal(healed.includes("},_0xaaa;}());"), false);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "}}}},Ctor;}());function must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("closes leftover IIFE-level block before },Ctor;}()),ident= then strict-parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}if(true){" +
    "_0xaaa.prototype.b=function(_0xbbb){this.z=_0xbbb+\"_0xdead\";},_0xaaa;}()),Nm=(function(){return 1;})();\n" +
    "export { Nm as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /_0xdead";\}\}\}\)\(\),Nm=/);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "IIFE-level leftover block + },Ctor;}()), must emit }}})(),");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("closes B3ED IIFE with }}})(), before Nm= then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const ident = "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigB3ED";
  const start = vendor.indexOf(`(function(){function ${ident}`);
  const end = vendor.indexOf(
    "Nm=(function(){function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigEFB4"
  );
  assert.ok(start >= 0 && end > start, "B3ED IIFE slice must exist in engine-chart");
  const original = `var x=${vendor.slice(start, end)}Nm=1;\n`;
  const healed = healForParse(original);
  assert.match(healed, /;\}\}\}\)\(\),Nm=/);
  parseStrict(healed);
});

test("heals }},Ctor;}(rd);V( on engine-chart 68E1 slice without leaked paren then strict-parses", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const start = vendor.indexOf("yf=(function(){}),bf=[");
  const end = vendor.indexOf(
    "V(['click',\"mousedown\",\"mouseup\",'mousewheel',\"dblclick\",\"contextmenu\"]"
  );
  assert.ok(start >= 0 && end > start, "68E1 yf= slice must exist in engine-chart");
  const original = `var x=${vendor.slice(start, end)}V(['click'],function(){return 1;});\n`;
  const healed = healForParse(original);
  assert.match(healed, /;\}\}\}\}\(rd\);V\(/);
  assert.doesNotMatch(healed, /;\}\}\}\}\)\(rd\);V\(/);
  parseStrict(healed);
});

test("heals }},Ctor;}(rd);V( leftover IIFE return then strict-parses", () => {
  const original =
    "var nd=(function(rd){function _0xaaa(){this.x=1;}" +
    "_0xaaa.prototype.b=function(_0xbbb){this.dispatchToElement(_0xbbb);}},_0xaaa;}(rd);V(['click'],function(){return \"_0xdead\";});\n" +
    "export { nd as publicApi };\n";
  const healed = healForParse(original);
  assert.equal(healed.includes("},_0xaaa;}(rd)"), false);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "}},Ctor;}(rd);V( must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("does not dump leaked outer braces into },Ctor;}()),ident= IIFE close", () => {
  const original =
    "function host(){if(true){if(true){\n" +
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "_0xaaa.prototype.b=function(_0xbbb){this.z=_0xbbb+\"_0xdead\";},_0xaaa;}()),gp=(function(){return 1;})();\n" +
    "export { gp as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /_0xdead";\}\}\)\(\),gp=/);
  assert.doesNotMatch(healed, /_0xdead";\}\}\}\}\)/);
});

test("does not accumulate extra } from repeated },Ctor;}()), closes on one mega-line", () => {
  const idents = ["_0xaaa", "_0xbbb", "_0xccc", "_0xddd"];
  const parts = idents.map(
    (id, i) =>
      `n${i}=(function(){function ${id}(){this.x=${i};}${id}.prototype.b=function(){gm(1,1,1,${i});},${id};}())`
  );
  const original = `var ${parts.join(",")};\nexport { n3 as publicApi };\n`;
  const healed = healForParse(original);
  assert.equal((healed.match(/;}\)\)\(\),/g) || []).length, 0, "must not emit );}})(), residue");
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "chained },Ctor;}()), IIFEs must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
});

test("heals leftover );}})(),ident= extra IIFE close then parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
    "_0xaaa.prototype.b=function(_0xbbb){gm(1,1,1,1);}})(),Nm=(function(){return _0xbbb?\"_0xdead\":1;}());\n" +
    "export { nd as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /;}\)\)\(\),Nm=/);
  const { src, aborted } = rename0xIdents(
    "var nd=(function(){function _0xaaa(){this.x=1;}" +
      "_0xaaa.prototype.b=function(_0xbbb){gm(1,1,1,1);}}})(),Nm=function(){return \"_0xdead\";}();\n" +
      "export { nd as publicApi };\n"
  );
  assert.equal(aborted, false, ");}})(),ident leftover extra close must parse after heal");
  assert.match(src, /"_0xdead"/);
});

test("heals extra invoke paren in ;}()),ident= IIFE residue then parses", () => {
  const original =
    "var td=(function(){function _0xaaa(){}return _0xaaa.prototype.x=function(_0xbbb){this.z=_0xbbb;},_0xaaa;}()),gp=(function(){function _0xccc(_0xddd){return _0xddd+\"_0xdead\";}return _0xccc;}());\n" +
    "export { gp as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\)(\(\),)gp=\(function/);
  assert.doesNotMatch(healed, /;}(\(\)\),)[A-Za-z_$]/);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, ";}()),ident= extra-paren IIFE must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0xbbb\b/);
  assert.doesNotMatch(src, /_0xddd\b/);
});

test("closes leftover Qv },F9A9;}(805A);for at remaining inherit depth then strict-parses", () => {
  const original =
    "function z(shape){return shape;}\n" +
    "var Qv=function(p){function wrap(){" +
    "var_core_value_sigF9A9.prototype.getDefaultShape=function(){return z(shape);},var_core_value_sigF9A9;}(var_core_value_sig805A);for(var i=0;i<1;i++){}" +
    "\nexport { Qv as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}}\(var_core_value_sig805A\);for/);
  assert.doesNotMatch(healed, /var_core_value_sigF9A9;}\(var_core_value_sig805A\)/);
  assert.doesNotMatch(healed, /}{8,}\(var_core_value_sig805A\)/);
  parseStrict(healed);
});

test("closes engine-chart Qv },F9A9;}(805A);for inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sigF9A9;}(var_core_value_sig805A);for(var";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "Qv inherit leftover before for must exist");
  const qv = vendor.lastIndexOf("Qv=function", at);
  assert.ok(qv >= 0, "Qv inherit wrapper must exist");
  const original =
    "function z(shape){return shape;}\n" +
    `var ${vendor.slice(qv, at + mark.length)} i=0;i<1;i++){}\n` +
    "export { Qv as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}}\(var_core_value_sig805A\);for/);
  assert.doesNotMatch(healed, /var_core_value_sigF9A9;}\(var_core_value_sig805A\)/);
  assert.doesNotMatch(healed, /}{8,}\(var_core_value_sig805A\)/);
  parseStrict(healed);
});

test("drops leftover },FD74;}(av),Joe= inherit after makeFont then strict-parses", () => {
  const original =
    "var Joe;" +
    "var_core_value_sigFD74.makeFont=function(s){return s||\"serif\";},var_core_value_sigFD74;}(av),Joe={'left':true};\n" +
    "export { Joe as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /},Joe=/);
  assert.doesNotMatch(healed, /var_core_value_sigFD74;}\(av\)/);
  parseStrict(healed);
});

test("drops engine-chart },FD74;}(av),Joe= inherit close", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sigFD74;}(av),Joe=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "FD74 inherit leftover before Joe must exist");
  const original =
    "var Joe;" +
    "var_core_value_sigFD74.makeFont=function(s){return s||\"serif\"" +
    `${vendor.slice(at, at + mark.length)}{'left':true};\n` +
    "export { Joe as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /},Joe=/);
  assert.doesNotMatch(healed, /var_core_value_sigFD74;}\(av\)/);
  parseStrict(healed);
});

test("drops leftover },A192;}(Qv);ay.prototype inherit then strict-parses", () => {
  const original =
    "var ay={};" +
    "var_core_value_sigA192.prototype.isZeroArea=function(){return !this.w;},var_core_value_sigA192;}(Qv);ay.prototype.type='rect';\n" +
    "export { ay as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /};ay\.prototype/);
  assert.doesNotMatch(healed, /var_core_value_sigA192;}\(Qv\)/);
  parseStrict(healed);
});

test("drops engine-chart },A192;}(Qv);ay.prototype inherit leftover", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sigA192;}(Qv);ay.prototype";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "A192 inherit leftover before ay.prototype must exist");
  const original =
    "var ay={};" +
    "var_core_value_sigA192.prototype.isZeroArea=function(){return !this.w" +
    `${vendor.slice(at, at + mark.length)}.type='rect';\n` +
    "export { ay as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /};ay\.prototype/);
  assert.doesNotMatch(healed, /var_core_value_sigA192;}\(Qv\)/);
  parseStrict(healed);
});

test("closes leftover ey },FFC9;}(av);ey.prototype after ;;prototype heal then strict-parses", () => {
  const original =
    "var av=function(){};" +
    "var ey=function(p){R(var_core_value_sigFFC9,p);function wrap(){return p;}" +
    "return var_core_value_sigFFC9.prototype.createStyle=function(){return 1;;" +
    "var_core_value_sigFFC9.prototype.getBoundingRect=function(){return this._rect;},var_core_value_sigFFC9;}(av);ey.prototype.type='image';\n" +
    "export { ey as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /[^}]}}\(av\);ey\.prototype/);
  assert.doesNotMatch(healed, /}}}\(av\)/);
  assert.doesNotMatch(healed, /var_core_value_sigFFC9;}\(av\)/);
  parseStrict(healed);
});

test("closes engine-chart ey },FFC9;}(av);ey.prototype inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sigFFC9;}(av);ey.prototype";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "FFC9 inherit leftover before ey.prototype must exist");
  const ey = vendor.lastIndexOf("ey=function", at);
  assert.ok(ey >= 0, "ey inherit wrapper must exist");
  const original =
    "function R(a,b){return a;}\n" +
    `var ${vendor.slice(ey, at + mark.length)}["type"]='image';\n` +
    "export { ey as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /[^}]}}\(av\);ey\.prototype/);
  assert.doesNotMatch(healed, /}}}\(av\)/);
  assert.doesNotMatch(healed, /var_core_value_sigFFC9;}\(av\)/);
  parseStrict(healed);
});

test("closes leftover Vb },B728;}(Qv);Vb.prototype after ;;prototype heal then strict-parses", () => {
  const original =
    "var Qv=function(){};" +
    "var Vb=function(p){R(var_core_value_sigB728,p);function wrap(){return p;}" +
    "return var_core_value_sigB728.prototype.getDefaultShape=function(){return 1;;" +
    "var_core_value_sigB728.prototype.buildPath=function(){return 2;},var_core_value_sigB728;}(Qv);Vb.prototype.type='circle';\n" +
    "export { Vb as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /[^}]}}\(Qv\);Vb\.prototype/);
  assert.doesNotMatch(healed, /}}}\(Qv\)/);
  assert.doesNotMatch(healed, /var_core_value_sigB728;}\(Qv\)/);
  parseStrict(healed);
});

test("closes engine-chart Vb },B728;}(Qv);Vb.prototype inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sigB728;}(Qv);Vb.prototype";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "B728 inherit leftover before Vb.prototype must exist");
  const vb = vendor.lastIndexOf("Vb=function", at);
  assert.ok(vb >= 0, "Vb inherit wrapper must exist");
  const original =
    "function R(a,b){return a;}\n" +
    `var ${vendor.slice(vb, at + mark.length)}["type"]='circle';\n` +
    "export { Vb as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /[^}]}}\(Qv\);Vb\.prototype/);
  assert.doesNotMatch(healed, /}}}\(Qv\)/);
  assert.doesNotMatch(healed, /var_core_value_sigB728;}\(Qv\)/);
  parseStrict(healed);
});

test("closes leftover g_ },F138;}();function __ after ;;prototype heal then strict-parses", () => {
  const original =
    "var g_=function(){function wrap(){return 1;}" +
    "return var_core_value_sigF138.prototype.reset=function(){return 1;;" +
    "var_core_value_sigF138.prototype.next=function(){return false;},var_core_value_sigF138;}();function __(){return 2;}\n" +
    "export { __ as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(\);function __/);
  assert.doesNotMatch(healed, /var_core_value_sigF138;}\(\)/);
  parseStrict(healed);
});

test("closes engine-chart g_ },F138;}();function __ inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sigF138;}();function __";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "F138 inherit leftover before function __ must exist");
  const g = vendor.lastIndexOf("var g_=function", at);
  assert.ok(g >= 0, "g_ inherit wrapper must exist");
  const original =
    `${vendor.slice(g, at + mark.length)}(target){return target;}\n` +
    "export { __ as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(\);function __/);
  assert.doesNotMatch(healed, /var_core_value_sigF138;}\(\)/);
  parseStrict(healed);
});

test("closes leftover },7DD1;}(oO),IK= defaults inherit then strict-parses", () => {
  const original =
    "var oO=function(){};" +
    "var FK=function(p){R(var_core_value_sigB60D,p);function wrap(){return p;}" +
    "var_core_value_sig7DD1.defaultOption={'z':2,'emphasis':{'lineStyle':{'opacity':0.5}}},var_core_value_sig7DD1;}(oO),IK=function(){return 1;};\n" +
    "export { IK as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(oO\),IK=/);
  assert.doesNotMatch(healed, /var_core_value_sig7DD1;}\(oO\)/);
  parseStrict(healed);
});

test("closes engine-chart },7DD1;}(oO),IK= defaults inherit leftover", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sig7DD1;}(oO),IK=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "7DD1 inherit leftover before IK must exist");
  const def = vendor.lastIndexOf("var_core_value_sig7DD1.defaultOption=", at);
  assert.ok(def >= 0, "7DD1 defaultOption must exist");
  const original =
    "var oO=function(){};var IK;" +
    "var FK=function(){R(1);" +
    `${vendor.slice(def, at + mark.length)}function(){return 1;};\n` +
    "export { IK as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(oO\),IK=/);
  assert.doesNotMatch(healed, /var_core_value_sig7DD1;}\(oO\)/);
  parseStrict(healed);
});

test("closes leftover ux },5197;}(Qv),dx= after ;;prototype heal then strict-parses", () => {
  const original =
    "var Qv=function(){};var dx;" +
    "var ux=function(p){R(var_core_value_sig5197,p);function wrap(){return p;}" +
    "return var_core_value_sig5197.prototype._updatePathDirty=function(){return 1;;" +
    "var_core_value_sig5197.prototype.getBoundingRect=function(){return this._rect;},var_core_value_sig5197;}(Qv),dx=function(){return 2;};\n" +
    "export { dx as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(Qv\),dx=/);
  assert.doesNotMatch(healed, /var_core_value_sig5197;}\(Qv\)/);
  parseStrict(healed);
});

test("closes engine-chart ux },5197;}(Qv),dx= inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sig5197;}(Qv),dx=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "5197 inherit leftover before dx must exist");
  const ux = vendor.lastIndexOf("var ux=function", at);
  assert.ok(ux >= 0, "ux inherit wrapper must exist");
  const original =
    "function R(a,b){return a;}\n" +
    `var Qv=function(){};${vendor.slice(ux, at + mark.length)}function(){return 1;};\n` +
    "export { dx as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(Qv\),dx=/);
  assert.doesNotMatch(healed, /var_core_value_sig5197;}\(Qv\)/);
  parseStrict(healed);
});

test("keeps leftover fx return 0AA3;}(dx),px= inherit invoke then strict-parses", () => {
  const original =
    "var dx=function(){};" +
    "var fx=function(p){R(var_core_value_sig0AA3,p);function wrap(a,b,c,d,e,f){return p.call(this,e)||this;}" +
    "return var_core_value_sig0AA3;}(dx),px=function(){return 1;};\n" +
    "export { fx as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /return var_core_value_sig0AA3;}\(dx\),px=/);
  parseStrict(healed);
});

test("closes leftover Sx },93E2;}(av),Cx= after ;;prototype heal then strict-parses", () => {
  const original =
    "var av=function(){};var Cx;" +
    "var Sx=function(p){R(var_core_value_sig93E2,p);function wrap(){return p;}" +
    "return var_core_value_sig93E2.prototype.contain=function(){return 1;;" +
    "var_core_value_sig93E2.prototype.contain=function(){return false;},var_core_value_sig93E2;}(av),Cx=function(){return 2;};\n" +
    "export { Cx as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(av\),Cx=/);
  assert.doesNotMatch(healed, /var_core_value_sig93E2;}\(av\)/);
  parseStrict(healed);
});

test("closes engine-chart Sx },93E2;}(av),Cx= inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sig93E2;}(av),Cx=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "93E2 inherit leftover before Cx must exist");
  const sx = vendor.lastIndexOf("Sx=function", at);
  assert.ok(sx >= 0, "Sx inherit wrapper must exist");
  const original =
    "function R(a,b){return a;}\n" +
    `var av=function(){};var ${vendor.slice(sx, at + mark.length)}function(){return 2;};\n` +
    "export { Cx as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(av\),Cx=/);
  assert.doesNotMatch(healed, /var_core_value_sig93E2;}\(av\)/);
  parseStrict(healed);
});

test("closes leftover ST },94CD;}();function CT after ;;prototype heal then strict-parses", () => {
  const original =
    "function ET(a,b){return a;}\n" +
    "var ST=function(){function wrap(){return 1;}" +
    "return var_core_value_sig94CD.prototype.getColorFromPalette=function(){return 1;;" +
    "var_core_value_sig94CD.prototype.clearColorPalette=function(){ET(this);},var_core_value_sig94CD;}();function CT(){return 2;}\n" +
    "export { CT as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(\);function CT/);
  assert.doesNotMatch(healed, /var_core_value_sig94CD;}\(\)/);
  parseStrict(healed);
});

test("closes engine-chart ST },94CD;}();function CT inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sig94CD;}();function CT";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "94CD inherit leftover before CT must exist");
  const st = vendor.lastIndexOf("ST=function", at);
  assert.ok(st >= 0, "ST inherit wrapper must exist");
  const original =
    "function ET(a,b){return a;}\n" +
    `var ${vendor.slice(st, at + mark.length)}(){return 1;}\n` +
    "export { CT as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(\);function CT/);
  assert.doesNotMatch(healed, /var_core_value_sig94CD;}\(\)/);
  parseStrict(healed);
});

test("closes leftover zT },A101;}();function BT after ;;prototype heal then strict-parses", () => {
  const original =
    "var zT=function(){function wrap(){return 1;}" +
    "var_core_value_sigA101.prototype.getMediaOption=function(){return 1;;" +
    "var_core_value_sigA101.prototype.other=function(){return 2;},var_core_value_sigA101;}();function BT(){return 3;}\n" +
    "export { BT as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(\);function BT/);
  assert.doesNotMatch(healed, /var_core_value_sigA101;}\(\)/);
  parseStrict(healed);
});

test("closes engine-chart zT },A101;}();function BT inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},var_core_value_sigA101;}();function BT";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "A101 inherit leftover before BT must exist");
  const zt = vendor.lastIndexOf("zT=function", at);
  assert.ok(zt >= 0, "zT inherit wrapper must exist");
  const original =
    `var ${vendor.slice(zt, at + mark.length)}(){return 1;}\n` +
    "export { BT as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(\);function BT/);
  assert.doesNotMatch(healed, /var_core_value_sigA101;}\(\)/);
  parseStrict(healed);
});

test("heals },Ctor;}(arg);for leftover IIFE return-invoke then strict-parses", () => {
  const original =
    "var nd=(function(zh){function _0xaaa(){this.x=1;}" +
    "_0xaaa.prototype.b=function(_0xbbb){return _0xbbb+\"_0xdead\";},_0xaaa;}(zh);for(var i=0;i<1;i++){}\n" +
    "export { nd as publicApi };\n";
  const healed = healForParse(original);
  assert.equal(healed.includes("},_0xaaa;}(zh)"), false);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "},Ctor;}(arg);for must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("drops extra })(),ident})(), after an already-closed function then strict-parses", () => {
  const original =
    "function _0xaaa(){return 1;}\n" +
    "})(),_0xbbb})(),var _0xccc=(function(){return \"_0xdead\";})();\n" +
    "export { _0xccc as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /}\)\(\),_0xbbb}\)\(\)/);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "extra })(),ident})(), after closed function must be dropped");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("drops extra })(),ident;}()); after an already-closed function then strict-parses", () => {
  const original =
    "function _0xaaa(){return 1;}\n" +
    "})(),_0xbbb;}());function _0xccc(){return \"_0xdead\";}\n" +
    "export { _0xccc as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /}\)\(\),_0xbbb;}\(\)\)/);
  assert.doesNotMatch(healed, /;\}{6,}\)\(\);function _0xccc/);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "extra })(),ident;}()); after closed function must be dropped");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("keeps $v inherit }(av) before sibling $v.prototype then strict-parses", () => {
  const original =
    "var av=function(){};" +
    "var $v=function(parent){R(var_core_value_sigDDC8,parent);function Inner(){}" +
    "Inner.initDefaultProps=function(){this.n=10;};" +
    "})(),var_core_value_sigDDC8;}(av);$v.prototype.t='tspan';\n" +
    "export { $v as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\(av\);\$v\.prototype/);
  assert.doesNotMatch(healed, /}\)\(\),var_core_value_sigDDC8;}\(av\)/);
  assert.doesNotMatch(healed, /}\)\(\);\$v\.prototype/);
  parseStrict(healed);
});

test("keeps engine-chart $v })(),DDC8;}(av);$v.prototype inherit close", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "})(),var_core_value_sigDDC8;}(av);$v.prototype";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "$v inherit close before prototype must exist");
  const original =
    "var av=function(){};" +
    "var $v=function(parent){R(var_core_value_sigDDC8,parent);function Inner(){}" +
    "Inner.initDefaultProps=function(){this.n=10;};" +
    `${vendor.slice(at, at + mark.length)}.t='tspan';\n` +
    "export { $v as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\(av\);\$v\.prototype/);
  assert.doesNotMatch(healed, /}\)\(\),var_core_value_sigDDC8;}\(av\)/);
  parseStrict(healed);
});

test("keeps B7BE class IIFE })() before sibling AD= then strict-parses", () => {
  const original =
    "var AD;" +
    "var B7=(function(){function Inner(){return 1;}" +
    "Inner.x=function(){return 2;};" +
    "})(),var_core_value_sigB7BE;}()),AD=function(){return \"_0xdead\";};\n" +
    "export { AD as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\)\(\);AD=/);
  assert.doesNotMatch(healed, /}\)\(\),var_core_value_sigB7BE;}\(\)\)/);
  parseStrict(healed);
});

test("keeps engine-chart B7BE })(),ident;}()),AD= IIFE close", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "})(),var_core_value_sigB7BE;}()),AD=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "B7BE IIFE close before AD must exist");
  const original =
    "var AD;" +
    "var B7=(function(){function Inner(){return 1;}" +
    "Inner.x=function(){return 2;};" +
    `${vendor.slice(at, at + mark.length)}function(){return 1;};\n` +
    "export { AD as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\)\(\);AD=/);
  parseStrict(healed);
});

test("closes leftover nO before sibling function sO then strict-parses", () => {
  const original =
    "function nO(){F_(oO,Qw);function sO(){return 1;}\n" +
    "export { sO as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /F_\(oO,Qw\);\}+;function sO/);
  parseStrict(healed);
});

test("closes engine-chart nO before sibling function sO after F_(oO,Qw)", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "F_(oO,Qw);function sO(";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "F_(oO,Qw);function sO leftover must exist");
  const original =
    "function nO(){" +
    `${vendor.slice(at, at + mark.length)}x){return 1;}\n` +
    "export { sO as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /F_\(oO,Qw\);\}+;function sO/);
  parseStrict(healed);
});

test("replaces gk/_k leftover with }});function Hse close", () => {
  const original = "var gk=new rd(),_k={};function Hse(){return 1;}\n";
  const healed = healForParse(original);
  assert.match(healed, /_k=\{\};\}\}\);function Hse/);
});

test("closes engine-chart VO before sibling function Hse after gk/_k", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "var gk=new rd(),_k={};function Hse";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "gk/_k leftover before Hse must exist");
  const vo = vendor.lastIndexOf("function VO(", at);
  assert.ok(vo >= 0, "VO wrapper must exist");
  const original =
    `${vendor.slice(vo, at + mark.length)}(){return 1;}\n` +
    "export { Hse as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /_k=\{\};\}\}\);function Hse/);
  parseStrict(healed);
});

test("closes leftover 8B1A ;;prototype before getTicks", () => {
  const original =
    "Other.prototype.x=function(){return 1;}" +
    "var_core_value_sig31F4;;fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8B1A.prototype[\"getTicks\"]=function(){return 2;};\n";
  const healed = healForParse(original);
  assert.match(healed, /var_core_value_sig31F4;\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8B1A\.prototype/);
  assert.doesNotMatch(healed, /sig31F4;;fn_L0/);
});

test("replaces 8B1A leftover with }}}}}(Hj) close", () => {
  const original =
    "}},fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8B1A;}(Hj);Hj.registerClass";
  const healed = healForParse(original);
  assert.match(healed, /\}\}\}\}\}\(Hj\);Hj\.registerClass/);
  assert.doesNotMatch(healed, /sig8B1A;}\(Hj\)/);
});

test("closes engine-chart uM },8B1A;}(Hj) before sibling function dM", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "}},fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8B1A;}(Hj);Hj.registerClass";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "8B1A inherit leftover before dM must exist");
  const uM = vendor.lastIndexOf("var uM=function", at);
  const dM = vendor.indexOf("function dM(", at);
  assert.ok(uM >= 0 && dM > at, "uM wrapper and dM sibling must exist");
  const original =
    `${vendor.slice(uM, dM + "function dM(".length)}x){return 1;}\n` +
    "export { dM as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\}\}\}\}\(Hj\);Hj\.registerClass/);
  assert.doesNotMatch(healed, /sig8B1A;}\(Hj\)/);
  parseStrict(healed);
});

test("closes leftover 550B ;;prototype before getConfig", () => {
  const original =
    "Other.prototype.x=function(){return 1;}" +
    "Number(var_core_value_sigB6F9);;fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig550B.prototype['getConfig']=function(){return 2;};\n";
  const healed = healForParse(original);
  assert.match(healed, /Number\(var_core_value_sigB6F9\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig550B\.prototype/);
  assert.doesNotMatch(healed, /sigB6F9\);;fn_L0/);
});

test("replaces 550B leftover with type;}}(Hj) close", () => {
  const original =
    'fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig550B.type="interval",fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig550B;}(Hj);Hj.registerClass';
  const healed = healForParse(original);
  assert.match(healed, /\.type="interval";\}\}\(Hj\);Hj\.registerClass/);
  assert.doesNotMatch(healed, /sig550B;}\(Hj\)/);
});

test("closes engine-chart fM },550B;}(Hj) before sibling var ple", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = 'fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig550B;}(Hj);Hj.registerClass';
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "550B inherit leftover before ple must exist");
  const fM = vendor.lastIndexOf("var fM=function", at);
  const ple = vendor.indexOf("var ple=", at);
  assert.ok(fM >= 0 && ple > at, "fM wrapper and ple sibling must exist");
  const original =
    `${vendor.slice(fM, ple)}var ple={};\n` +
    "export { ple as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\.type="interval";\}\}\(Hj\);Hj\.registerClass/);
  assert.doesNotMatch(healed, /sig550B;}\(Hj\)/);
  parseStrict(healed);
});

test("closes engine-chart DM before sibling function OM after else-return", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "[var_core_value_sigAA3E(505)](var_core_value_sig4C37);};}}};function OM";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "DM };}}};function OM leftover must exist");
  const dm = vendor.lastIndexOf("function DM(", at);
  assert.ok(dm >= 0, "DM wrapper must exist");
  const original =
    `${vendor.slice(dm, at + mark.length)}(){return 1;}\n` +
    "export { OM as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /;?\}\}\};function OM/);
  parseStrict(healed);
});

test("closes leftover yO },C0A6;}()) at remaining IIFE depth then strict-parses", () => {
  const original =
    "var yO=(function(){function Inner(){}" +
    "var_core_value_sigC0A6.protoInitialize=function(){this.x=1;};" +
    "})(),var_core_value_sigC0A6;}());function bO(){return 1;}\n" +
    "export { bO as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\)\(\);function bO/);
  assert.doesNotMatch(healed, /}\)\(\),var_core_value_sigC0A6;}\(\)\)/);
  parseStrict(healed);
});

test("closes engine-chart yO },C0A6;}()) inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const yo = vendor.indexOf("yO=(function");
  const mark = "})(),var_core_value_sigC0A6;}());function bO(";
  const at = vendor.indexOf(mark, yo);
  assert.ok(yo >= 0 && at > yo, "yO IIFE and C0A6 leftover before bO must exist");
  const original =
    `var ${vendor.slice(yo, at + mark.length)}x){return 1;}\n` +
    "export { bO as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\)\(\);function bO/);
  parseStrict(healed);
});

test("closes leftover Tw },B431;}(rC) at remaining IIFE depth then strict-parses", () => {
  const original =
    "var rC=function(){};" +
    "var Tw=(function(){function Inner(){}" +
    "ST=function(){function Inner2(){}" +
    "OT=function(){kT=function(){this.x=1;};" +
    "})(),var_core_value_sigB431;}(rC);function NT(){return 1;}\n" +
    "export { NT as publicApi };\n";
  const healed = healForParse(original);
  assert.ok(healed.includes("}}})();function NT"));
  assert.doesNotMatch(healed, /}\)\(\),var_core_value_sigB431;}\(rC\)/);
  assert.doesNotMatch(healed, /}\(rC\);function NT/);
  parseStrict(healed);
});

test("closes engine-chart Tw },B431;}(rC) inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const tw = vendor.indexOf("Tw=(function");
  const mark = "})(),var_core_value_sigB431;}(rC);function NT";
  const at = vendor.indexOf(mark, tw);
  assert.ok(tw >= 0 && at > tw, "Tw IIFE and B431 leftover before NT must exist");
  const original =
    "var Cw={},ww={}," +
    `${vendor.slice(tw, at + mark.length)}(a,b){return 1;}\n` +
    "export { NT as publicApi };\n";
  const healed = healForParse(original);
  assert.ok(healed.includes("}}})();function NT"));
  assert.doesNotMatch(healed, /}\)\(\),var_core_value_sigB431;}\(rC\)/);
  parseStrict(healed);
});

test("keeps PE }() and drops leftover ,0AE7;}()) before FE then strict-parses", () => {
  const original =
    "function wrap(){return 1;}\n" +
    "var PE=function(){function sig92F8(targetObj){this._data.push(targetObj);}\n" +
    "}(),var_core_value_sig0AE7;}()),FE=function(){return 2;}\n" +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\(\),FE=/);
  assert.doesNotMatch(healed, /var_core_value_sig0AE7/);
  assert.doesNotMatch(healed, /0AE7\}\}\}\)\(/);
  parseStrict(healed);
});

test("keeps engine-chart PE }() and drops leftover ,0AE7;}()) before FE", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "}(),var_core_value_sig0AE7;}()),FE=function";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "0AE7 leftover before FE must exist");
  const pe = vendor.lastIndexOf("PE=function", at);
  assert.ok(pe >= 0, "PE wrapper must exist");
  const original =
    "function wrap(){return 1;}\n" +
    `var ${vendor.slice(pe, at + mark.length)}(){return 2;}\n` +
    "export { wrap as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /\}\(\),FE=/);
  assert.doesNotMatch(healed, /var_core_value_sig0AE7/);
  parseStrict(healed);
});

test("closes leftover BA inherit after Child constructor before TA then strict-parses", () => {
  const original =
    "function R(a,b){return a;}\n" +
    "function FA(x){return x;}\n" +
    "var rd=function(){};\n" +
    "var BA=function(p){R(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig2A64,p);" +
    "function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig2A64(){" +
    "var var_core_value_sigF835=this;var_core_value_sigF835._api=FA(var_core_value_sigF835);}TA=ox30ef83,EA=function(){return 1;};" +
    "function Next(){return 2;}\n" +
    "export { Next as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /FA\(var_core_value_sigF835\);\}return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig2A64;}\(rd\);TA=ox30ef83/);
  assert.doesNotMatch(healed, /FA\(var_core_value_sigF835\);}TA=ox30ef83/);
  parseStrict(healed);
});

test("closes engine-chart BA inherit after FA(_api) before sibling TA=ox30ef83", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "FA(var_core_value_sigF835);}TA=ox30ef83";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "BA leftover before TA=ox30ef83 must exist");
  const ba = vendor.lastIndexOf("BA=function", at);
  const next = vendor.indexOf("function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig92F8(", at);
  assert.ok(ba >= 0 && next > at, "BA wrapper and sig92F8 sibling must exist");
  const original =
    "function R(a,b){return a;}\n" +
    "function FA(x){return x;}\n" +
    "var rd=function(){};\n" +
    `var ${vendor.slice(ba, next)}function Next(){return 1;}\n` +
    "export { Next as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /FA\(var_core_value_sigF835\);\}return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig2A64;}\(rd\);TA=ox30ef83/);
  assert.doesNotMatch(healed, /FA\(var_core_value_sigF835\);}TA=ox30ef83/);
  parseStrict(healed);
});

test("unique-ifies duplicate top-level inferred function decls then strict-parses", () => {
  const dup = "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig92F8";
  const original =
    `function ${dup}(targetObj20){targetObj20.clearColorPalette();}\n` +
    `function ${dup}(targetObj){targetObj.useStates([]);}\n` +
    `export { ${dup} as publicApi };\n`;
  const healed = healForParse(original);
  const names = [...healed.matchAll(/function\s+(fn_[A-Za-z0-9_]+)/g)].map((m) => m[1]);
  assert.equal(new Set(names).size, names.length);
  assert.ok(names.includes(dup));
  assert.ok(names.some((n) => n.startsWith(`${dup}_`)));
  parseStrict(healed);
});

test("drops leftover return chart;} before sibling function $A then strict-parses", () => {
  const original =
    "var var_core_value_sig77FF=new BA(1,2,3);return var_core_value_sig77FF.id='ec_1',var_core_value_sig77FF;};function $A(id){return XA[id];}\n" +
    "export { $A as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /var_core_value_sig77FF;function \$A\b/);
  assert.doesNotMatch(healed, /var_core_value_sig77FF;};function \$A/);
  assert.doesNotMatch(healed, /var_core_value_sig77FF;;function \$A/);
  parseStrict(healed);
});

test("drops engine-chart leftover return 77FF;} before sibling function $A", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = ",var_core_value_sig77FF;};function $A";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "77FF leftover before function $A must exist");
  const init = vendor.lastIndexOf("var var_core_value_sig77FF=new BA", at);
  assert.ok(init >= 0, "new BA init must exist");
  const original =
    "var XA={},QA='echarts';\n" +
    `${vendor.slice(init, at + mark.length)}(id){return XA[id];}\n` +
    "export { $A as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /var_core_value_sig77FF;function \$A\b/);
  assert.doesNotMatch(healed, /var_core_value_sig77FF;\}+;function \$A/);
  parseStrict(healed);
});

test("closes leftover _N },FE25;}(mN),rue= after cloneShallow then strict-parses", () => {
  const original =
    "var mN=function(){};var rue;" +
    "var _N=function(p){R(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigFE25,p);" +
    "function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigFE25(){this.x=1;}" +
    "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigFE25.prototype.cloneShallow=function(){return this;},fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigFE25;}(mN),rue=function(){return 2;};\n" +
    "export { rue as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(mN\),rue=/);
  assert.doesNotMatch(healed, /sigFE25;}\(mN\)/);
  parseStrict(healed);
});

test("closes engine-chart _N },FE25;}(mN),rue= inherit at remaining depth", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "},fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigFE25;}(mN),rue=";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "FE25 inherit leftover before rue must exist");
  const n = vendor.lastIndexOf("_N=function", at);
  assert.ok(n >= 0, "_N inherit wrapper must exist");
  const original =
    "function R(a,b){return a;}\n" +
    `var mN=function(){};var ${vendor.slice(n, at + mark.length)}function(){return 1;};\n` +
    "export { rue as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}}\(mN\),rue=/);
  assert.doesNotMatch(healed, /sigFE25;}\(mN\)/);
  parseStrict(healed);
});

test("closes leftover rue inherit after aue before var oue then strict-parses", () => {
  const original =
    "function R(a,b){return a;}\n" +
    "function H(fn){return fn();}\n" +
    "var rd=function(){};\n" +
    "rue=function(ox25805d){R(ox26cade,ox25805d);function aue(){H(function(){return var_core_value_sig8278;});}var oue=le({'MAX_SAFE_INTEGER':()=>1});\n" +
    "function SN(){return 2;}\n" +
    "export { SN as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /var_core_value_sig8278;}\);\}return ox26cade;}\(rd\);var oue=le\(/);
  assert.doesNotMatch(healed, /sig8278;}\);\}var oue=le\(/);
  assert.match(healed, /^function SN\(/m);
  parseStrict(healed);
});

test("closes engine-chart rue inherit after aue before sibling var oue=le", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "var_core_value_sig8278;});}var oue=le(";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "rue leftover before var oue=le must exist");
  const rue = vendor.lastIndexOf("rue=function", at);
  const sn = vendor.indexOf("function SN(", at);
  assert.ok(rue >= 0 && sn > at, "rue wrapper and SN sibling must exist");
  const original =
    "function R(a,b){return a;}\n" +
    "var rd=function(){};\n" +
    `${vendor.slice(rue, sn)}function SN(){return 1;}\n` +
    "export { SN as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /var_core_value_sig8278;}\);\}return ox26cade;}\(rd\);var oue=le\(/);
  assert.doesNotMatch(healed, /sig8278;}\);\}var oue=le\(/);
  assert.match(healed, /;function SN\(/);
  parseStrict(healed);
});

test("keeps E03B class IIFE })() before sibling function zv then strict-parses", () => {
  const original =
    "var ev=(function(){function Inner(){}" +
    "Inner.initDefaultProps=function(){this.x=1;};" +
    "})(),var_core_value_sigE03B;}());function zv(){return 1;}\n" +
    "export { zv as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\)\(\);function zv/);
  assert.doesNotMatch(healed, /}\)\(\),var_core_value_sigE03B;}\(\)\)/);
  assert.doesNotMatch(healed, /;\}{8,}\)\(/);
  parseStrict(healed);
});

test("keeps engine-chart E03B })() and drops leftover comma-return before zv", () => {
  const vendor = readFileSync(path.join(ROOT, "vendor/univer-pro/engine-chart/lib/es/index.js"), "utf8");
  const mark = "})(),var_core_value_sigE03B;}());function zv(";
  const at = vendor.indexOf(mark);
  assert.ok(at >= 0, "E03B IIFE close before zv must exist in engine-chart");
  const original =
    "var ev=(function(){function Inner(){}" +
    "Inner.initDefaultProps=function(){this.x=1;};" +
    `${vendor.slice(at, at + mark.length)}countVal){return 1;}\n` +
    "export { zv as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /}\)\(\);function zv/);
  assert.doesNotMatch(healed, /}\)\(\),var_core_value_sigE03B;}\(\)\)/);
  parseStrict(healed);
});

test("drops extra })(),ident})(); after an already-closed function then strict-parses", () => {
  const original =
    "function _0xaaa(){return 1;}\n" +
    "})(),_0xbbb})();function _0xccc(_0xddd){return _0xddd+\"_0xdead\";}\n" +
    "export { _0xccc as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /}\)\(\),_0xbbb}\)\(\)/);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "extra })(),ident})(); after closed function must be dropped");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("drops extra })(),ident;}(arg) after an already-closed function then strict-parses", () => {
  const original =
    "function _0xaaa(){return 1;}\n" +
    "})(),_0xbbb;}(zh),var ov=function(_0xccc){return _0xccc+\"_0xdead\";}();\n" +
    "export { ov as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /}\)\(\),_0xbbb;}\(zh\)/);
  assert.doesNotMatch(healed, /}\)\(\),ov=/);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "extra })(),ident;}(arg) after closed function must be dropped");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("heals leftover })(),ident;}(arg) IIFE return-invoke then strict-parses", () => {
  const original =
    "var nd=(function(){function _0xaaa(){return 1;}})(),_0xbbb;}(zh),ov=function(_0xccc){return _0xccc+\"_0xdead\";}();\n" +
    "export { ov as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /}\)\(\),_0xbbb;}\(zh\)/);
  parseStrict(healed);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "})(),ident;}(arg) leftover return-invoke must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("heals extra } in })(),rd=function when the IIFE body is already closed", () => {
  const original =
    "function host(){return 1;}\n" +
    "for(var v18483=1;v18483;)v18483=0;},v18485.prototype.x=function(_0xaaa){this._draggingTarget=null;},v18485})(),rd=function(_0xbbb){return _0xbbb+\"_0xdead\";}();\n" +
    "export { rd as publicApi };\n";
  const healed = healForParse(original);
  assert.doesNotMatch(healed, /\}\)\(\),rd=function/);
  assert.match(healed, /v18485\}\(\),rd=function/);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "})(),rd=function extra brace must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0xaaa\b/);
  assert.doesNotMatch(src, /_0xbbb\b/);
});

test("heals extra };ident on the same line after a closed function then parses", () => {
  const original =
    "function _0xaaa(){ return \"_0xdead\"; }};xw=_0xaaa;\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "same-line extra };ident residue must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /xw=/);
  assert.doesNotMatch(src, /}};xw=/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
});

test("heals extra }}} and ;;function residue then parses", () => {
  const original =
    "function _0xaaa(){return {'event':1};}}};function _0xbbb(){return[1];;function _0xccc(){return \"_0xdead\";}}\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /;function _0xbbb/);
  assert.doesNotMatch(healed, /\};\}\}\};function/);
  assert.match(healed, /return\[1\];\};function/);
});

test("heals object-literal ;function and prototype-comma residue then parses", () => {
  const original =
    "var gd={'&':\"&amp;\",'\\x27':\"&#39;\";function _0xaaa(_0xbbb){return _0xbbb+\"_0xdead\";}\n" +
    "C.prototype.x=function(){this.z=1;},_0xaaa.prototype.y=function(){return 2;},_0xaaa;}();\n" +
    "export { _0xaaa as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /&#39;"\};function/);
  assert.match(healed, /;_0xaaa\.prototype/);
  const { src, aborted } = rename0xIdents(healed);
  assert.equal(aborted, false);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("heals fo; truncated for-loop body then leftover IIFE comma", () => {
  const original =
    "var nd=(function(){function _0xaaa(){}\n" +
    "  return _0xaaa.prototype.dragStart=function(_0xbbb){\n" +
    "        fo;\n" +
    "      };\n" +
    "    };\n" +
    "}\n" +
    "for(var _0xccc=_0xbbb.target;_0xccc;);},_0xaaa})(),rd=function(){return \"_0xdead\";}();\n" +
    "export { rd as publicApi };\n";
  const healed = healForParse(original);
  assert.match(healed, /for\(var /);
  assert.doesNotMatch(healed, /(?<![\w$])fo;/);
  const { src, aborted, changed } = rename0xIdents(healed);
  assert.equal(aborted, false, "fo; truncated for-loop must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
});

test("heals Object.entries split, typeof==, and for(var residue then parses", () => {
  const original =
    "function _0xaaa(obj){\n" +
    "  let x = Object.fromEntries(Object);\n" +
    "}\n" +
    ".entries(obj).map(y=>y));}\n" +
    "let ju = typeof Map;\n" +
    "==\"function\";\n" +
    "function _0xbbb(){\n" +
    "  return ju ? \"_0xdead\" : 0;\n" +
    "}\n" +
    "r(var _0x1a=1;_0x1a;);\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "unglue Object.entries/typeof/for residue must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /fromEntries\(Object\.entries\(/);
  assert.match(src, /typeof Map==\"function\"/);
  assert.match(src, /for\(var /);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
});

test("heals leftover decoder object residue then renames locals", () => {
  const original =
    "function _0xaaa(){var _0xbbb=Df,_0xccc,_0xddd,_0xeee=0,_0xfff=[];_0xccc=[],_0xddd=[];,'quadraticIn':function(_0x1a){return _0x1a+\"_0xdead\";}},Hf=1;}\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "easing-map residue must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0x1a\b/);
});

test("heals let-list arrow then nested function and renames across in-memory chunks", () => {
  const original =
    "function _0xaaa(){let _0xbbb=()=>{return \"_0xdead\";}function _0xccc(_0x1a){return _0x1a;}return _0xccc;}\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "ASI }function residue must parse after heal or chunk split");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0x1a\b/);
  assert.doesNotMatch(src, /function\s+_0xaaa\b/);
});

test("renames nested function locals inside an unparseable IIFE including the inner function name", () => {
  const original =
    "var z=1;\n" +
    "(function(){else{\n" +
    "function _0xabcd(_0x12ef){ return _0x12ef + \"_0xdead\"; }\n" +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /function v\d+\(/);
  assert.doesNotMatch(src, /_0x12ef\b/);
  assert.doesNotMatch(src, /\b_0xabcd\b/);
  assert.match(src, /as publicApi/);
});

test("wraps return fragments so locals rename while string keys stay", () => {
  const original = "let _0xaaa=1;return _0xaaa + \"_0xdead\";\nexport { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0xaaa\b/);
  assert.match(src, /as publicApi/);
});

test("splits a class before an undeclared export alias and still renames constructor locals", () => {
  const original =
    'let WD=class{constructor(_0xaaa){this.x=_0xaaa+"_0xdead";}};export{Ui as PublicUi};\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as PublicUi/);
  assert.doesNotMatch(src, /_0xaaa\b/);
});

test("skips an unparseable residue chunk and still renames a later sibling function", () => {
  const original =
    "(function(){else{ var _0xstuck=1; }})();\n" +
    "function _0xbbb(_0xccc){ return _0xccc + \"_0xdead\"; }\n" +
    "export { _0xbbb as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0xccc\b/);
  assert.match(src, /_0xstuck\b/);
});

test("keeps FFormula-style export alias and does not invent string _0x keys", () => {
  const original = 'function _0x12ab(){ return "_0xdead"; }\nexport { _0x12ab as FFormula };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /export\s*\{[^}]*\bas\s+FFormula\b/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /export\s*\{\s*_0x[0-9a-f]+\s+as\s+FFormula\s*\}/i);
});

test("heals await-split import alias then renames locals", () => {
  const original =
    'import { await Time as _0xaaa } from "@univerjs/core";\n' +
    'function _0xbbb(_0xccc){ return _0xccc + "_0xdead"; }\n' +
    "export { _0xbbb as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "await Time as must parse as awaitTime after heal");
  assert.equal(changed, true);
  assert.match(src, /awaitTime\s+as/);
  assert.doesNotMatch(src, /\bawait\s+Time\b/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0xccc\b/);
});

test("heals URLSearchParams constructor residue then renames locals", () => {
  const original =
    'function _0xaaa(_0xbbb){ return new URL();SearchParams(_0xbbb).toString() + "_0xdead"; }\n' +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "URL();SearchParams must parse as URLSearchParams after heal");
  assert.equal(changed, true);
  assert.match(src, /URLSearchParams/);
  assert.doesNotMatch(src, /URL\(\);SearchParams/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0xbbb\b/);
});

test("renames nested function locals when body is return-regex with protocol slashes", () => {
  const original =
    "(function(){else{\n" +
    'function fc(_0x196237){return/^[a-zA-Z]+:\\/\\//["test"](_0x196237)+"_0xdead";}\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /function fc\(/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0x196237\b/);
});

test("renames class method params inside an unparseable IIFE", () => {
  const original =
    "(function(){else{\n" +
    'class C { foo(_0xaaa){ return _0xaaa + "_0xdead"; } }\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0xaaa\b/);
});

test("splits }export{ without semicolon and still renames constructor locals", () => {
  const original =
    'let WD=class{constructor(_0xaaa){this.x=_0xaaa+"_0xdead";}}export{Ui as PublicUi};\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as PublicUi/);
  assert.doesNotMatch(src, /_0xaaa\b/);
});

test("renames unbound leftover decoder calls but keeps matching string literals", () => {
  const original = 'foo(_0xdead01(1));\nconst k = "_0xdead01";\nexport { z as publicApi };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead01"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /foo\(oxdead01\(1\)\)/);
  assert.doesNotMatch(src, /foo\(_0xdead01\(/);
});

test("renames an unbound decoder assigned into a non-hex local", () => {
  const original =
    'function f(){var v99=_0xdead01;return v99(1)+"_0xdead";}\nexport { f as publicApi };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /oxdead01/);
  assert.doesNotMatch(src, /=\s*_0xdead01\b/);
});

test("splits a nested inner export from an unclosed IIFE and still renames prefix locals", () => {
  const original =
    "(function(){else{\n" +
    'let _0xaaa=1;void(_0xaaa+"_0xdead");\n' +
    "export { Ui as PublicUi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as PublicUi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("renames locals inside a for-loop window when the parent IIFE does not parse", () => {
  const original =
    "(function(){else{\n" +
    'for(let _0xccc=0;_0xccc<1;_0xccc++){void(_0xccc+"_0xdead");}\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xccc\b/);
});

test("renames params inside a concise object method window when the parent IIFE does not parse", () => {
  const original =
    "(function(){else{\n" +
    'const o={foo(_0xaaa){return _0xaaa+"_0xdead";}};\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("extracts a complete inner hex function from an unparseable else block and renames its recursive binding", () => {
  const original =
    "(function(){else{\n" +
    "function _0xab12(a){ return a+_0xab12; }\n" +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /function v\d+\(a\)/);
  assert.match(src, /a\s*\+\s*v\d+/);
  assert.doesNotMatch(src, /\b_0xab12\b/);
});

test("inserts a semicolon after else{ only at a proven statement boundary then renames the bound local", () => {
  const original =
    '(function(){else{var _0xaaa=1function _0xbbb(_0xccc){return _0xccc+_0xaaa+"_0xdead";}}})();\n' +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /1;function/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
  assert.doesNotMatch(src, /\b_0xccc\b/);
  assert.doesNotMatch(src, /1function/);
});

test("does not insert a semicolon before a callback function argument", () => {
  const original =
    '(function(){else{foo(function(_0xaaa){return _0xaaa+"_0xdead";});}})();\n' +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /foo\(function/);
  assert.doesNotMatch(src, /foo\(;function/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("renames a parseable prefix of an unclosed hex function inside an unparseable else block", () => {
  const original =
    "(function(){else{\n" +
    "function _0xab12(_0xaaa){var _0xbbb=_0xaaa;void(_0xbbb+_0xab12);else{\n" +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
  assert.doesNotMatch(src, /\b_0xbbb\b/);
  assert.doesNotMatch(src, /\b_0xab12\b/);
});

test("renames an unbound decoder used as a for-of source", () => {
  const original = 'for(let v1 of _0xdead01)void(v1+"_0xdead");\nexport { z as publicApi };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /oxdead01/);
  assert.doesNotMatch(src, /\b_0xdead01\b/);
});

test("renames a nested class method when an outer concise method window does not parse", () => {
  const original =
    "(function(){else{\n" +
    'outer(_0xstuck){foo(){var _0xaaa=1;return _0xaaa+"_0xdead";}return _0xstuck;}\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("renames a hex var statement inside an unparseable else block", () => {
  const original =
    "(function(){else{\n" +
    'void(1);var _0xaaa=2;void(_0xaaa+"_0xdead");else{\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("loose-parses an unclosed hex function and renames both bindings without adding a brace", () => {
  const original = "function _0xcc01(a){ return a+_0xcc01";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /function v\d+\(a\)/);
  assert.match(src, /a\s*\+\s*v\d+/);
  assert.doesNotMatch(src, /\b_0xcc01\b/);
  assert.equal(src.includes("}"), false, "must not close the function in the written source");
});

test("loose-parse keeps string leftovers and export aliases while renaming bound identifiers", () => {
  const original =
    'function _0xcc01(a){ return a+_0xcc01+"_0xcc01"\n' +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xcc01"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /function\s+_0xcc01\b/);
  assert.doesNotMatch(src, /\+_0xcc01/);
  const open = (src.match(/\{/g) || []).length;
  const close = (src.match(/\}/g) || []).length;
  assert.equal(close, open - 1, "must not add a closing brace to the unclosed function");
});

test("loose-parses optional-chain residue and still renames import and let bindings", () => {
  const original =
    "import{ISnapshotServerService as _0xb1346a}from'x';\n" +
    "function f(){let _0xec34fb=this.blocks?..find(v=>v);return _0xec34fb+_0xb1346a;}\n" +
    "export { f as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /\?\.\./);
  assert.doesNotMatch(src, /\b_0xb1346a\b/);
  assert.doesNotMatch(src, /\b_0xec34fb\b/);
});

test("renames unbound constructor and prototype identifier refs but keeps matching string literals", () => {
  const original =
    'var AG="graph",jG=function(s){if(0){function C(){return 1;}};},' +
    'new _0x5554c2,_0x5554c2.prototype.x=1,_0x5554c2.call(this),_0x5554c2;}(oO);\n' +
    'const k="_0x5554c2";\nexport { z as publicApi };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0x5554c2"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /new ox5554c2\b/);
  assert.match(src, /ox5554c2\.prototype/);
  assert.match(src, /ox5554c2\.call/);
  assert.doesNotMatch(src, /new _0x5554c2\b/);
  assert.doesNotMatch(src, /_0x5554c2\.prototype/);
  assert.doesNotMatch(src, /_0x5554c2\.call/);
});

test("keeps emptied _registerRenderModules body while renaming nearby hex locals", () => {
  const original =
    "class P{foo(_0xab12){return _0xab12;}_registerRenderModules(){}_initRegisterCommand(){this.bar=1;}}\n" +
    "export { P as PivotPlugin };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /_registerRenderModules\s*\(\s*\)\s*\{\s*\}/);
  assert.doesNotMatch(src, /\["registerRenderModule"\]|\.registerRenderModule\s*\(/);
  assert.doesNotMatch(src, /\b_0xab12\b/);
  assert.match(src, /as PivotPlugin/);
});

test("aborts when emptied CQ stub would regain registerRenderModule", () => {
  const original = "class P{_registerRenderModules(){}_initRegisterCommand(){}}";
  const next =
    'class P{_registerRenderModules(){this._renderManagerService["registerRenderModule"](1);}_initRegisterCommand(){}}';
  const result = abortIfCqStubRestored(original, next);
  assert.equal(result.aborted, true);
  assert.equal(result.src, original);
  assert.match(String(result.reason), /registerRenderModule/);
});

test("does not abort CQ-bearing twins that still register render modules", () => {
  const original =
    'class P{_registerRenderModules(){this._renderManagerService["registerRenderModule"](_0xab12);}_initRegisterCommand(){}}';
  const next =
    'class P{_registerRenderModules(){this._renderManagerService["registerRenderModule"](v1);}_initRegisterCommand(){}}';
  const result = abortIfCqStubRestored(original, next);
  assert.equal(result.aborted, false);
  assert.equal(result.src, next);
});
