/** Identifies where a PDF asset's authoritative bytes are stored. */
export declare enum PdfAssetStorageKind {
    /** Bytes remain in the immutable source PDF and are addressed by provenance. */
    NATIVE_PDF = "native-pdf",
    /** Bytes are stored by Univer under a Unit-scoped resource UUID. */
    UNIVERSER_RESOURCE = "universer-resource",
    /** Disposable browser/backend output that can always be regenerated. */
    DERIVED_CACHE = "derived-cache"
}
/** User or system action evaluated by the PDF capability layer. */
export declare enum PdfCapabilityAction {
    RENDER = "render",
    SELECT = "select",
    EDIT_TEXT = "edit-text",
    EDIT_OBJECT = "edit-object",
    EDIT_PAGE = "edit-page",
    FILL_FORM = "fill-form",
    ANNOTATE = "annotate",
    EXPORT = "export"
}
/** Effective support level for one capability decision. */
export declare enum PdfCapabilitySupport {
    SUPPORTED = "supported",
    DEGRADED = "degraded",
    READ_ONLY = "read-only",
    BLOCKED = "blocked",
    UNKNOWN = "unknown"
}
/** Explicit fallback used when the requested PDF action is not fully supported. */
export declare enum PdfCapabilityFallback {
    NONE = "none",
    PRESERVE_NATIVE = "preserve-native",
    READ_ONLY = "read-only",
    RASTERIZE = "rasterize",
    SUBSTITUTE_FONT = "substitute-font",
    BLOCK = "block"
}
/** Model scope to which a capability decision applies. */
export declare enum PdfCapabilityScope {
    DOCUMENT = "document",
    PAGE = "page",
    OBJECT = "object",
    ASSET = "asset",
    FEATURE = "feature"
}
/** Runtime or service prerequisite needed before a capability becomes usable. */
export declare enum PdfCapabilityRequirement {
    SOURCE_BYTES = "source-bytes",
    DECODED_STREAM = "decoded-stream",
    EMBEDDED_FONT = "embedded-font",
    LOCAL_FONT = "local-font",
    MANAGED_RESOURCE = "managed-resource",
    UNIT_PERMISSION = "unit-permission",
    EXCHANGE_SUPPORT = "exchange-support"
}
