import type { Observable } from 'rxjs';
import type { IPdfDurableEditState, IPdfEditorMutationBatch, IPdfEditorSession } from '../editor/types';
import type { IPdfDocumentProviders, IPdfPageProvider, IPdfResourceProvider } from '../providers';
import type { IPdfSharedFragment } from '../providers/page-block-provider';
import type { IPdfDocument, PdfPageId } from '../types';
import type { IPdfAppendInstancePlan } from '../unit/pdf-append-plan';
import type { IPdfUnitData } from '../unit/types';
import { UnitModel, UniverInstanceType } from '@univerjs/core';
/** Runtime Unit model for an editable PDF document. */
export declare class PdfDocumentModel extends UnitModel<IPdfUnitData, UniverInstanceType.UNIVER_PDF> {
    readonly type = UniverInstanceType.UNIVER_PDF;
    private _snapshot;
    private _providers;
    private _shellDocument?;
    private readonly _materializedBlocks;
    private readonly _sharedFragments;
    private _blockProviderSubscription?;
    private readonly _contentChanged$;
    private readonly _name$;
    readonly name$: Observable<string>;
    readonly contentChanged$: Observable<number>;
    constructor(snapshot?: Partial<IPdfUnitData>);
    getUnitId(): string;
    setName(name: string): void;
    getSnapshot(): IPdfUnitData;
    getRev(): number;
    incrementRev(): void;
    setRev(rev: number): void;
    /** Return the immutable imported document baseline. */
    getDocument(): IPdfDocument;
    /** Return the edited document projected from the immutable baseline and current editor state. */
    getMaterializedDocument(session?: IPdfEditorSession): IPdfDocument;
    /** Build an edited document containing every persisted page block. */
    getCompleteMaterializedDocument(session?: IPdfEditorSession): Promise<IPdfDocument>;
    /** Return the currently accepted durable edit layer. */
    getEditState(): IPdfDurableEditState;
    /** Replace durable state without changing local editor/runtime state. */
    setEditState(editState: IPdfDurableEditState): boolean;
    /** Apply one accepted batch without changing the collaboration-owned Unit revision. */
    applyMutationBatch(batch: IPdfEditorMutationBatch): boolean;
    /** Append another PDF document without replacing current content or edits. */
    appendDocument(sourceDocument: IPdfDocument, sourceResourceBindings?: IPdfUnitData['resourceBindings'], idPlan?: IPdfAppendInstancePlan): boolean;
    /** Append another block-backed PDF Unit while retaining immutable artifact storage. */
    appendUnitData(sourceUnit: IPdfUnitData, plan: IPdfAppendInstancePlan): boolean;
    /** Replace in-memory providers with fragment-backed/runtime providers. */
    setProviders(providers: IPdfDocumentProviders): void;
    getProviders(): IPdfDocumentProviders;
    getPageProvider(): IPdfPageProvider;
    getResourceProvider(): IPdfResourceProvider;
    /** Load and materialize the block containing a page shell handle. */
    loadPageBlockForPage(pageId: PdfPageId): Promise<boolean>;
    /** Return whether a page is immediately available or its imported block is materialized. */
    isPageBlockLoaded(pageId: PdfPageId): boolean;
    /** Add shared asset/native metadata needed by one or more materialized blocks. */
    applySharedFragment(fragment: IPdfSharedFragment): void;
    dispose(): void;
    private _handleBlockCacheEvent;
    private _rebuildBlockBackedDocument;
    private _composeBlockBackedDocument;
}
