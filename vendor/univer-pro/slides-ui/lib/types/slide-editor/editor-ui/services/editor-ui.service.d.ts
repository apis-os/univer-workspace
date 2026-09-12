import type { IDisposable, IDocumentData, Nullable } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { IEditorUILayoutMeasurement, IEditorUIOpenOptions, IEditorUISession } from '../types';
import { Disposable } from '@univerjs/core';
export interface IEditorUIService {
    readonly session$: Observable<Nullable<IEditorUISession>>;
    open<TContext = unknown>(options: IEditorUIOpenOptions<TContext>): IDisposable;
    update<TContext = unknown>(options: Partial<IEditorUIOpenOptions<TContext>>): void;
    setDocumentData(documentData: IDocumentData): void;
    setLayoutMeasurement(measurement: IEditorUILayoutMeasurement): void;
    complete(documentData?: IDocumentData, measurement?: IEditorUILayoutMeasurement, sessionId?: number): void;
    cancel(sessionId?: number): void;
    close(sessionId?: number): void;
    getSession<TContext = unknown>(): Nullable<IEditorUISession<TContext>>;
}
export declare class EditorUIService extends Disposable implements IEditorUIService {
    private readonly _session$;
    readonly session$: Observable<Nullable<IEditorUISession<unknown>>>;
    private _sessionId;
    open<TContext = unknown>(options: IEditorUIOpenOptions<TContext>): IDisposable;
    update<TContext = unknown>(options: Partial<IEditorUIOpenOptions<TContext>>): void;
    setDocumentData(documentData: IDocumentData): void;
    setLayoutMeasurement(measurement: IEditorUILayoutMeasurement): void;
    complete(documentData?: IDocumentData, measurement?: IEditorUILayoutMeasurement, sessionId?: number): void;
    cancel(sessionId?: number): void;
    close(sessionId?: number): void;
    getSession<TContext = unknown>(): Nullable<IEditorUISession<TContext>>;
    dispose(): void;
}
export declare const IEditorUIService: import("@wendellhu/redi").IdentifierDecorator<IEditorUIService>;
