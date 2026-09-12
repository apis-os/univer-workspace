import type { ChartElementEventHandler, ChartElementEventType, ChartImageSource, EChartInstance, EChartSpec, IChartElementHit, IChartRenderAsImageOptions, IChartRenderRuntimeOptions, IChartRenderTransitionOptions } from '../../../types';
import { Disposable } from '@univerjs/core';
/** Converts materialized composite Pie marks back to their authored source identity. */
export declare function resolveEChartPieCompositeHit(spec: EChartSpec | null, seriesIndex: number | undefined, params?: any, dataIndex?: number): Pick<IChartElementHit, 'pieCompositeRole' | 'pieCompositePlot' | 'pieSourcePointIndex' | 'pieAggregateMemberSourcePointIndexes'> | undefined;
/** Converts native Chord node/link events to stable semantic graph identities. */
export declare function resolveEChartChordHit(spec: EChartSpec | null, seriesIndex: number | undefined, params?: any, dataIndex?: number): Pick<IChartElementHit, 'semanticId' | 'semanticKind' | 'semanticValue' | 'semanticFormattedValue' | 'semanticEndpointAName' | 'semanticEndpointBName'> | undefined;
/** Normalizes renderer-private marks, including hierarchy residual leaves, to their semantic identity. */
export declare function resolveEChartSeriesIdentity(spec: EChartSpec | null, seriesIndex: number | undefined, params?: any): Pick<IChartElementHit, 'seriesId' | 'seriesName' | 'baseSeriesIndex' | 'waterfallSeriesType'>;
export declare class EChartRenderEngine extends Disposable implements EChartInstance {
    static engineName: string;
    private _instance;
    container: HTMLElement | string;
    private _lastSpec;
    private readonly _eventHandlers;
    private readonly _nativeEventHandlers;
    private readonly _nativeZrBlankEventHandlers;
    private readonly _elementEditModeHandlers;
    private _elementEditModeZrMouseMoveHandler;
    private _elementEditModeZrClickHandler;
    private _elementEditModeEnabled;
    private _editOverlay;
    private readonly _emittedElementEventKeys;
    private _emittedElementEventKeysClearQueued;
    constructor();
    mount(id: string | HTMLElement): void;
    resize(echartsProviderOrOptions?: any | IChartRenderRuntimeOptions): void;
    private _ensureChartInstance;
    get containerElement(): HTMLElement | null;
    render(spec: EChartSpec, echartsProviderOrOptions?: any | IChartRenderRuntimeOptions): void;
    renderTransition(previousSpec: EChartSpec, spec: EChartSpec, options: IChartRenderRuntimeOptions & IChartRenderTransitionOptions): Promise<void>;
    renderAsImage(spec: EChartSpec, options: IChartRenderAsImageOptions): Promise<ChartImageSource>;
    on(type: ChartElementEventType, handler: ChartElementEventHandler): {
        dispose: () => void;
    };
    setElementEditMode(enabled: boolean): void;
    private _bindAllNativeEvents;
    private _bindNativeEvent;
    private _unbindNativeEvent;
    private _bindNativeZrBlankEvent;
    private _unbindNativeZrBlankEvent;
    private _bindElementEditModeEvents;
    private _unbindElementEditModeEvents;
    private _emitChartElementEvent;
    private _shouldSkipDuplicateElementEvent;
    private _handleElementEditHover;
    private _handleElementEditZrHover;
    private _handleElementEditClick;
    private _handleElementEditZrClick;
    private _ensureEditOverlay;
    private _removeEditOverlay;
    private _clearHoverBorder;
    private _clearFixedBorder;
    exportImg(echartsProvider?: any): Promise<string>;
    dispose(): void;
}
