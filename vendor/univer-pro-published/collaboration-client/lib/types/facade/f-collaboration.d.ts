import type { FBase as FBaseFacade } from '@univerjs-pro/bases/facade';
import type { FBoard } from '@univerjs-pro/boards/facade';
import type { ILogContext } from '@univerjs-pro/collaboration';
import type { FPdf } from '@univerjs-pro/pdfs/facade';
import type { FPresentation } from '@univerjs-pro/slides/facade';
import type { IDisposable } from '@univerjs/core';
import type { FDocument } from '@univerjs/docs/facade';
import type { IMember } from '@univerjs/protocol';
import type { FWorkbook } from '@univerjs/sheets/facade';
import { SnapshotService } from '@univerjs-pro/collaboration';
import { CollaborationController, CollaborationStatus } from '@univerjs-pro/collaboration-client';
import { Injector, IUniverInstanceService } from '@univerjs/core';
import { FBase } from '@univerjs/core/facade';
export interface ICollaborationFlushOptions {
    /**
     * Maximum time to wait for local collaboration changes to reach SYNCED.
     * Defaults to 30 seconds.
     */
    timeout?: number;
}
/**
 * The Facade API object for the Collaboration module. It provides methods to interact with the
 * Univer Collaboration backend server, such as loading Univer Sheets and subscribing to collaborators.
 * @hideconstructor
 */
export declare class FCollaboration extends FBase {
    private readonly _handler;
    protected readonly _injector: Injector;
    protected readonly _univerInstanceService: IUniverInstanceService;
    protected readonly _snapshotService: SnapshotService;
    protected readonly _collaborationController: CollaborationController;
    constructor(_handler: {
        getWorkbook: (id: string) => FWorkbook | null;
        getDocument: (id: string) => FDocument | null;
        getPresentation: (id: string) => FPresentation | null;
        getBase: (id: string) => FBaseFacade | null;
        getBoard: (id: string) => FBoard | null;
        getPdf: (id: string) => FPdf | null;
    }, _injector: Injector, _univerInstanceService: IUniverInstanceService, _snapshotService: SnapshotService, _collaborationController: CollaborationController);
    /**
     * Load a Univer Sheet from the server with a unit ID.
     * @param {string} unitId ID of the Univer Sheet that you would like to load.
     * @param {ILogContext} [context] Optional context.
     * @returns {Promise<FWorkbook | null>} The {@link FWorkbook} or null if ID cannot be associated with a Univer Sheet.
     * @example
     * ```typescript
     * const collaboration = univerAPI.getCollaboration();
     * const workbook = await collaboration.loadSheetAsync('your-unit-id');
     * ```
     */
    loadSheetAsync(unitId: string, context?: ILogContext): Promise<FWorkbook | null>;
    /**
     * Load a Univer Document from the server with a unit ID.
     * @param {string} unitId ID of the Univer Document that you would like to load.
     * @param {ILogContext} [context] Optional context.
     * @returns {Promise<FDocument | null>} The {@link FDocument} or null if ID cannot be associated with a Univer Document.
     * @example
     * ```typescript
     * const collaboration = univerAPI.getCollaboration();
     * const document = await collaboration.loadDocAsync('your-unit-id');
     * ```
     */
    loadDocAsync(unitId: string, context?: ILogContext): Promise<FDocument | null>;
    /**
     * Load a Univer Base from the server with a unit ID.
     * @param {string} unitId ID of the Univer Base that you would like to load.
     * @param {ILogContext} [context] Optional context.
     * @returns {Promise<FBaseFacade | null>} The Base facade or null if ID cannot be associated with a Univer Base.
     * @example
     * ```typescript
     * const collaboration = univerAPI.getCollaboration();
     * const base = await collaboration.loadBaseAsync('your-unit-id');
     * ```
     */
    loadBaseAsync(unitId: string, context?: ILogContext): Promise<FBaseFacade | null>;
    /**
     * Load a Univer Slide from the server with a unit ID.
     * @param {string} unitId ID of the Univer Slide that you would like to load.
     * @param {ILogContext} [context] Optional context.
     * @returns {Promise<FPresentation | null>} The {@link FPresentation} or null if ID cannot be associated with a Univer Slide.
     * @example
     * ```typescript
     * const collaboration = univerAPI.getCollaboration();
     * const presentation = await collaboration.loadSlideAsync('your-unit-id');
     * ```
     */
    loadSlideAsync(unitId: string, context?: ILogContext): Promise<FPresentation | null>;
    /**
     * Load a Univer Board from the server with a unit ID.
     * @param {string} unitId ID of the Univer Board that you would like to load.
     * @param {ILogContext} [context] Optional context.
     * @returns {Promise<FBoard | null>} The {@link FBoard} or null if ID cannot be associated with a Univer Board.
     * @example
     * ```typescript
     * const collaboration = univerAPI.getCollaboration();
     * const board = await collaboration.loadBoardAsync('your-unit-id');
     * ```
     */
    loadBoardAsync(unitId: string, context?: ILogContext): Promise<FBoard | null>;
    /**
     * Load a Univer PDF from the server with a unit ID.
     * @param {string} unitId ID of the Univer PDF that you would like to load.
     * @param {ILogContext} [context] Optional context.
     * @returns {Promise<FPdf | null>} The {@link FPdf} or null if ID cannot be associated with a Univer PDF.
     * @example
     * ```typescript
     * const collaboration = univerAPI.getCollaboration();
     * const pdf = await collaboration.loadPdfAsync('your-unit-id');
     * ```
     */
    loadPdfAsync(unitId: string, context?: ILogContext): Promise<FPdf | null>;
    /**
     * Subscribe collaborators of a Univer file.
     *
     * @param {string} unitId ID of the Univer file.
     * @param {Function} callback A callback function that will be called when the collaborators change.
     * @returns {IDisposable} A handler to dispose the subscription.
     *
     * @example
     * ```typescript
     * const collaboration = univerAPI.getCollaboration();
     * collaboration.subscribeCollaborators('your-unit-id', (members) => {
     *    console.log(members);
     * });
     * ```
     */
    subscribeCollaborators(unitId: string, callback: (members: IMember[]) => void): IDisposable;
    /**
     * Get the synchronization status of a unit.
     *
     * @param {string} [unitId] - Optional unit ID. If not provided, uses the focused unit.
     * @returns {CollaborationStatus} The current synchronization status.
     * Returns CollaborationStatus.NOT_COLLAB if no unit is found or collaboration is not enabled.
     *
     * Possible status values:
     * - `NOT_COLLAB`: Not in collaboration mode
     * - `SYNCED`: All changes are synchronized
     * - `PENDING`: Local changes waiting to be sent
     * - `AWAITING`: Changes sent, waiting for server acknowledgement
     * - `AWAITING_WITH_PENDING`: Awaiting acknowledgement with new local changes
     * - `FETCH_MISS`: Fetching missing changesets from server
     * - `CONFLICT`: Conflict detected and being resolved
     * - `OFFLINE`: Network is offline
     *
     * @example
     * ```typescript
     * const collaboration = univerAPI.getCollaboration();
     *
     * // Node environment - specify unitId
     * const workbook = await collaboration.loadSheetAsync('unit-id');
     * await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for collaboration to initialize
     * const status = collaboration.getCollaborationStatus('unit-id');
     *
     * // Browser environment - use focused unit (backward compatible)
     * const status = collaboration.getCollaborationStatus();
     *
     * // Check if synchronized
     * if (status === univerAPI.Enum.CollaborationStatus.SYNCED) {
     *   console.log('All changes are synced!');
     * }
     * ```
     */
    getCollaborationStatus(unitId?: string): CollaborationStatus;
    /**
     * Wait until all currently queued collaboration changes for a unit are synchronized.
     *
     * This is intended as an explicit barrier for scripts, agents, and tests after a batch of
     * facade mutations. It does not make individual facade APIs asynchronous.
     *
     * @param {string} [unitId] Optional unit ID. If omitted, uses the focused unit.
     * @param {ICollaborationFlushOptions} [options] Optional timeout configuration.
     * @returns {Promise<void>} Resolves when the unit reaches CollaborationStatus.SYNCED.
     *
     * @example
     * ```typescript
     * const collaboration = univerAPI.getCollaboration();
     * document.insertText(0, 'Saved through collaboration');
     * await collaboration.flush(document.getId());
     * ```
     */
    flush(unitId?: string, options?: ICollaborationFlushOptions): Promise<void>;
    private _resolveUnitId;
}
