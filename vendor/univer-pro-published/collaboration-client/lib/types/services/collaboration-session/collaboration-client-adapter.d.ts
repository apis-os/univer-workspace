import type { IChangeset } from '@univerjs-pro/collaboration';
import type { UniverInstanceType } from '@univerjs/core';
export interface ICollaborationTarget {
    endpoint?: string;
    unitId: string;
    unitType?: UniverInstanceType;
}
export interface ICollaborationAdapterResolveContext {
    unitId: string;
    unitType?: UniverInstanceType;
}
export interface ICollaborationAdapterTransformContext {
    localUnitId: string;
    unitType?: UniverInstanceType;
    target: ICollaborationTarget;
}
export interface ICollaborationChangesetAdapter {
    toRemote(changeset: IChangeset, context: ICollaborationAdapterTransformContext): IChangeset;
    toLocal(changeset: IChangeset, context: ICollaborationAdapterTransformContext): IChangeset;
}
export interface ICollaborationUnitResolution {
    target: ICollaborationTarget;
    changeset?: ICollaborationChangesetAdapter;
}
export interface ICollaborationClientAdapter {
    resolveUnit(context: ICollaborationAdapterResolveContext): ICollaborationUnitResolution | Promise<ICollaborationUnitResolution>;
}
export interface ICreateUniverCollaborationAdapterOptions {
    resolveUnit?: ICollaborationClientAdapter['resolveUnit'];
}
export interface ICollaborationSessionIdentity {
    localUnitId: string;
    unitType?: UniverInstanceType;
    target: ICollaborationTarget;
    changeset?: ICollaborationChangesetAdapter;
}
export declare const ICollaborationClientAdapterService: import("@wendellhu/redi").IdentifierDecorator<ICollaborationClientAdapter>;
export declare function createUniverCollaborationAdapter(options?: ICreateUniverCollaborationAdapterOptions): ICollaborationClientAdapter;
export declare function normalizeCollaborationSessionIdentity(localUnitId: string, unitType: UniverInstanceType | undefined, resolution: ICollaborationUnitResolution): ICollaborationSessionIdentity;
