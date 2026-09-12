import type { DashStyleType } from '@univerjs/core';
export interface IDocsCalloutConfig {
    icon: string;
    /** Whether the icon is displayed. */
    showIcon: boolean;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    /** Border opacity from `0` (transparent) to `1` (opaque). */
    borderOpacity: number;
    borderStyle: DashStyleType;
    borderRadius: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    paddingLeft: number;
    iconSize: number;
    iconGap: number;
}
export interface IDocsCalloutMetadataResource {
    callouts: Record<string, IDocsCalloutConfig>;
}
export interface IDocsCalloutRange {
    blockId: string;
    startIndex: number;
    endIndex: number;
}
