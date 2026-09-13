import{etc,hashes,verify}from"@noble/ed25519";
import{sha512}from"@noble/hashes/sha2.js";
import{Disposable,IConfigService,IUniverInstanceService,Inject,Injector,LifecycleService,Plugin,SHEET_EDITOR_UNITS,UniverInstanceType,merge}from"@univerjs/core";
import{IRenderManagerService}from"@univerjs/engine-render";
import{take}from"rxjs";
import { b } from "./internal-glue.js";
const D=()=>b(location.hostname);

export { D as isLocalCheck };
