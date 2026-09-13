export interface IBoardChartDescriptionExtension {
    position?: {
        x: number;
        y: number;
    };
    size?: {
        width: number;
        height: number;
    };
    containerId?: string | null;
    laneId?: string | null;
}
