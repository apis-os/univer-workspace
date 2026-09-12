export declare enum EmbedErrorCode {
    HostUnitNotFound = "EMBED_HOST_UNIT_NOT_FOUND",
    CreateFailed = "EMBED_CREATE_FAILED",
    CapabilityNotSupported = "EMBED_CAPABILITY_NOT_SUPPORTED",
    HostContextInvalid = "EMBED_HOST_CONTEXT_INVALID",
    SheetFloatingPlacementRequired = "EMBED_SHEET_FLOATING_PLACEMENT_REQUIRED",
    DescriptorNotFound = "EMBED_DESCRIPTOR_NOT_FOUND",
    DescriptorChildTypeRequired = "EMBED_DESCRIPTOR_CHILD_TYPE_REQUIRED",
    DescriptorChildTypeMismatch = "EMBED_DESCRIPTOR_CHILD_TYPE_MISMATCH",
    DescriptorDisplayTargetInvalid = "EMBED_DESCRIPTOR_DISPLAY_TARGET_INVALID",
    ChildUnitAlreadyEmbedded = "EMBED_CHILD_UNIT_ALREADY_EMBEDDED",
    CopyNotSupported = "EMBED_COPY_NOT_SUPPORTED",
    MaterializedChildUnitNotLoaded = "EMBED_MATERIALIZED_CHILD_UNIT_NOT_LOADED",
    MaterializedChildUnitRequired = "EMBED_MATERIALIZED_CHILD_UNIT_REQUIRED",
    LocalRuntimeResourceRefUnsupported = "LOCAL_RUNTIME_RESOURCE_REF_UNSUPPORTED",
    LocalRuntimeResourceRefUnitTypeMismatch = "LOCAL_RUNTIME_RESOURCE_REF_UNIT_TYPE_MISMATCH",
    LocalRuntimeResourceRefUnitNotFound = "LOCAL_RUNTIME_RESOURCE_REF_UNIT_NOT_FOUND",
    LocalRuntimeResourceRefDataSelectorUnsupported = "LOCAL_RUNTIME_RESOURCE_REF_DATA_SELECTOR_UNSUPPORTED",
    LocalRuntimeResourceRefDataUnitTypeUnsupported = "LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_TYPE_UNSUPPORTED",
    LocalRuntimeResourceRefDataUnitNotFound = "LOCAL_RUNTIME_RESOURCE_REF_DATA_UNIT_NOT_FOUND",
    LocalRuntimeResourceRefDataSheetNotFound = "LOCAL_RUNTIME_RESOURCE_REF_DATA_SHEET_NOT_FOUND",
    LocalRuntimeResourceRefDataTableNotFound = "LOCAL_RUNTIME_RESOURCE_REF_DATA_TABLE_NOT_FOUND",
    LocalRuntimeResourceRefRangeInvalid = "LOCAL_RUNTIME_RESOURCE_REF_RANGE_INVALID"
}
export declare class EmbedError extends Error {
    readonly code: EmbedErrorCode;
    readonly details?: unknown;
    constructor(code: EmbedErrorCode, details?: unknown);
}
