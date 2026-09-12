import type { IBaseSnapshot, IFieldSnapshot, IProjectedField } from '@univerjs/core';
export interface IBaseResolvedRecordLink {
    recordId: string;
    label: string;
    missing: boolean;
}
export interface IBaseRecordLinkResolverService {
    resolve(snapshot: IBaseSnapshot, field: IFieldSnapshot | IProjectedField, value: unknown, limit?: number): readonly IBaseResolvedRecordLink[];
}
export declare const IBaseRecordLinkResolverService: import("@wendellhu/redi").IdentifierDecorator<IBaseRecordLinkResolverService>;
export declare class BaseRecordLinkResolverService implements IBaseRecordLinkResolverService {
    private readonly _snapshotCache;
    resolve(snapshot: IBaseSnapshot, field: IFieldSnapshot | IProjectedField, value: unknown, limit?: number): readonly IBaseResolvedRecordLink[];
}
export declare function formatBaseRecordLinkDisplayValue(value: unknown, field?: IFieldSnapshot | IProjectedField): string;
