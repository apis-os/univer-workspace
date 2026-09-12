import type { BoardConnectorRouting, IBoardConnectorMarker, IBoardConnectorStyle } from '@univerjs-pro/boards';
import type { ComponentType, CSSProperties } from 'react';
import type { LocaleKey } from '../locale/types';
type BoardConnectorPresetIcon = ComponentType<{
    className?: string;
    style?: CSSProperties;
}>;
interface IBoardConnectorRoutingPreset {
    routing: BoardConnectorRouting;
    labelKey: LocaleKey;
    icon: BoardConnectorPresetIcon;
    style?: Partial<IBoardConnectorStyle>;
}
interface IBoardConnectorMarkerPreset {
    labelKey: LocaleKey;
    endMarker?: IBoardConnectorMarker;
    icon: BoardConnectorPresetIcon;
}
export declare function resolveBoardConnectorMarkerPresetKey(marker?: IBoardConnectorMarker): string;
export declare const BOARD_CONNECTOR_ROUTING_PRESETS: readonly IBoardConnectorRoutingPreset[];
export declare const BOARD_CONNECTOR_MARKER_PRESETS: readonly IBoardConnectorMarkerPreset[];
export {};
