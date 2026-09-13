import { UniverRenderPageApi } from "@univer-cli/univer-render-runtime";
import { Univer } from "@univerjs/core";
//#region src/types.d.ts
interface CreateRenderUniverContext {
  readonly container: HTMLElement;
  /** Present when the Node runtime was configured with a Univer license. */
  readonly license?: string;
}
type CreateRenderUniver = (context: CreateRenderUniverContext) => Univer | Promise<Univer>;
interface MountUniverRenderPageOptions {
  readonly container: HTMLElement;
  readonly createUniver: CreateRenderUniver;
}
//#endregion
//#region src/mount.d.ts
/**
 * Mount the shared Render Page implementation and expose its protocol to the Node runtime.
 * The runtime injects an optional license bootstrap before any application script executes.
 */
declare function mountUniverRenderPage(options: MountUniverRenderPageOptions): Promise<UniverRenderPageApi>;
//#endregion
//#region src/preset/create-preset-univer.d.ts
/** Standard full-featured Univer composition for the SDK Render Page. */
declare const createPresetRenderUniver: CreateRenderUniver;
//#endregion
export { type CreateRenderUniver, type CreateRenderUniverContext, type MountUniverRenderPageOptions, createPresetRenderUniver, mountUniverRenderPage };