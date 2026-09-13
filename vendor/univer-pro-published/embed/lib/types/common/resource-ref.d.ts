export declare const RESOURCE_REF_FILE_KIND: {
    readonly SELF: "self";
    readonly RELATIVE: "relative";
    readonly URI: "uri";
};
export type ResourceRefFile = {
    kind: typeof RESOURCE_REF_FILE_KIND.SELF;
} | {
    kind: typeof RESOURCE_REF_FILE_KIND.RELATIVE;
    path: string;
} | {
    kind: typeof RESOURCE_REF_FILE_KIND.URI;
    uri: string;
};
export type ResourceRefUnitType = string;
export type ResourceRefUnitSelector = string;
export interface IResourceRefUnit {
    selector: ResourceRefUnitSelector;
    type: ResourceRefUnitType;
}
export type ResourceRefExtensionValue = string | readonly string[];
export type ResourceRefPartValue = ResourceRefExtensionValue | undefined;
export interface IResourceRefPart {
    kind: string;
    readonly [key: string]: ResourceRefPartValue;
}
export interface IResourceRefSheetPart extends IResourceRefPart {
    kind: 'sheet';
    sheetName: string;
    sheetId?: string;
}
export interface IResourceRefRangePart extends IResourceRefPart {
    kind: 'range';
    ref: string;
    sheetName: string;
    range: string;
    sheetId?: string;
}
export interface IResourceRefTablePart extends IResourceRefPart {
    kind: 'table';
    tableName: string;
    tableId?: string;
}
export type ResourceRefPartKind = IResourceRefSheetPart['kind'] | IResourceRefRangePart['kind'] | IResourceRefTablePart['kind'];
export type ResourceRefPart = IResourceRefPart | IResourceRefSheetPart | IResourceRefRangePart | IResourceRefTablePart;
export interface IResourceRef {
    file: ResourceRefFile;
    unit: IResourceRefUnit;
    part?: ResourceRefPart;
    extensions?: Readonly<Record<string, ResourceRefExtensionValue>>;
}
export interface IParseResourceRefOptions {
    mode?: 'strict' | 'lenient';
}
export interface IValidateResourceRefOptions {
    mode?: 'strict' | 'lenient';
}
export interface IFormatResourceRefOptions {
    preserveExtensions?: boolean;
}
export type ResourceRefInput = IResourceRef | string;
export declare enum ResourceRefErrorCode {
    InvalidUriReference = "INVALID_URI_REFERENCE",
    InvalidFragmentSyntax = "INVALID_FRAGMENT_SYNTAX",
    InvalidPercentEncoding = "INVALID_PERCENT_ENCODING",
    MissingUnit = "MISSING_UNIT",
    MissingType = "MISSING_TYPE",
    ResourceRefInvalid = "RESOURCE_REF_INVALID",
    ResourceRefInvalidFile = "RESOURCE_REF_INVALID_FILE",
    ResourceRefInvalidFileKind = "RESOURCE_REF_INVALID_FILE_KIND",
    ResourceRefInvalidRelativePath = "RESOURCE_REF_INVALID_RELATIVE_PATH",
    ResourceRefInvalidUri = "RESOURCE_REF_INVALID_URI",
    ResourceRefInvalidUnit = "RESOURCE_REF_INVALID_UNIT",
    ResourceRefInvalidUnitType = "RESOURCE_REF_INVALID_UNIT_TYPE",
    ResourceRefInvalidPart = "RESOURCE_REF_INVALID_PART",
    ResourceRefInvalidPartKind = "RESOURCE_REF_INVALID_PART_KIND",
    ResourceRefInvalidSheetPart = "RESOURCE_REF_INVALID_SHEET_PART",
    ResourceRefInvalidRangePart = "RESOURCE_REF_INVALID_RANGE_PART",
    ResourceRefInvalidExtensions = "RESOURCE_REF_INVALID_EXTENSIONS",
    ResourceRefInvalidExtensionKey = "RESOURCE_REF_INVALID_EXTENSION_KEY",
    ResourceRefInvalidExtensionValue = "RESOURCE_REF_INVALID_EXTENSION_VALUE",
    ResourceRefFileUnsupported = "RESOURCE_REF_FILE_UNSUPPORTED",
    ResourceRefUriUnsupported = "RESOURCE_REF_URI_UNSUPPORTED"
}
export declare class ResourceRefError extends Error {
    readonly code: ResourceRefErrorCode;
    readonly details?: unknown;
    constructor(code: ResourceRefErrorCode, details?: unknown);
}
export declare function normalizeResourceRefInput(ref: ResourceRefInput): IResourceRef;
export declare function normalizeResourceRef(ref: IResourceRef): IResourceRef;
export declare function getResourceRefKey(ref: IResourceRef): string;
export declare function getResourceRefUnitKey(ref: IResourceRef): string;
export declare function getResourceRefUnitLocator(ref: IResourceRef): Pick<IResourceRef, 'file' | 'unit'>;
export declare function assertResourceRef(ref: IResourceRef): asserts ref is IResourceRef;
export declare function isResourceRefRangePart(part: ResourceRefPart | undefined): part is IResourceRefRangePart;
export declare function isResourceRefTablePart(part: ResourceRefPart | undefined): part is IResourceRefTablePart;
export declare function parseResourceRef(uriReference: string, _options?: IParseResourceRefOptions): IResourceRef;
export declare function formatResourceRef(ref: IResourceRef, _options?: IFormatResourceRefOptions): string;
