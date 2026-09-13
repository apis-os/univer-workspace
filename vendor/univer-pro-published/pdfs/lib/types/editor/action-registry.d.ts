import type { IPdfEditorAction, IPdfEditorActionContext, IPdfEditorActionResult } from './types';
export interface IPdfEditorActionRegistry {
    list(): IPdfEditorAction[];
    get(actionId: string): IPdfEditorAction | undefined;
    register(action: IPdfEditorAction): IPdfEditorActionRegistry;
    execute(actionId: string, context: IPdfEditorActionContext, input: unknown): IPdfEditorActionResult;
}
/**
 * Create a small action registry for toolbars, context menus, and tests.
 *
 * The registry does not own editor state. It only gives UI layers a stable way
 * to look up and invoke action objects by id.
 */
export declare function createPdfEditorActionRegistry(actions?: IPdfEditorAction[]): IPdfEditorActionRegistry;
