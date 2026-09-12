import type { PieCompositeDatum } from './pie-composite-projection';
export declare const PIE_COMPOSITE_METADATA_FIELD = "pieComposite";
export declare const PIE_COMPOSITE_PERCENT_FIELD = "pieCompositePercent";
export declare const PIE_COMPOSITE_SERIES_PLOT_FIELD = "pieCompositePlot";
export declare const PIE_COMPOSITE_PRIMARY_SERIES_ID = "pie-composite-primary";
export declare const PIE_COMPOSITE_SECONDARY_SERIES_ID = "pie-composite-secondary";
export declare const PIE_COMPOSITE_SECONDARY_STACK_ID = "pie-composite-secondary";
export declare const PIE_COMPOSITE_CONNECTOR_GRAPHIC_ID = "pie-composite-connector";
export interface IPieCompositeMarkMetadata {
    plot: PieCompositeDatum['plot'];
    role: PieCompositeDatum['role'];
    sourcePointIndex?: number;
    memberSourcePointIndexes?: readonly number[];
}
export declare function toPieCompositeMarkMetadata(datum: PieCompositeDatum): IPieCompositeMarkMetadata;
