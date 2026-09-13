import{etc,hashes,verify}from"@noble/ed25519";
import{sha512}from"@noble/hashes/sha2.js";
import{Disposable,IConfigService,IUniverInstanceService,Inject,Injector,LifecycleService,Plugin,SHEET_EDITOR_UNITS,UniverInstanceType,merge}from"@univerjs/core";
import{IRenderManagerService}from"@univerjs/engine-render";
import{take}from"rxjs";
function g(){return typeof globalThis<"u"&&globalThis||typeof window<"u"&&window||typeof global<"u"&&global;}

export { g as getGlobalObject };
