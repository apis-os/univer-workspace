import type { IBoardConnectorData, IBoardConnectorEndpoint, IBoardConnectorShapeSiteEndpoint, IBoardConnectorWaypoint, IBoardElementTransform, IBoardPageElement } from '@univerjs-pro/boards';
import type { IMindMapNodeElement, MindMapBranchLineType, MindMapNodeSide } from '../types';
type MindMapConnectorCurveData = NonNullable<IBoardConnectorData['curveData']>;
export declare function getMindMapNodeSidePoint(node: Pick<IBoardPageElement, 'transform'>, side: MindMapNodeSide): {
    x: number;
    y: number;
};
export declare function createMindMapLinkSiteEndpoint(shapeId: string, side: MindMapNodeSide, fallbackPoint?: {
    x: number;
    y: number;
}): IBoardConnectorShapeSiteEndpoint;
export declare function resolveMindMapLinkTrunkX(options: {
    parentNode: IMindMapNodeElement;
    side: MindMapNodeSide;
    branchGap?: number;
}): number;
export declare function resolveMindMapLinkTrunkY(options: {
    parentNode: IMindMapNodeElement;
    side: MindMapNodeSide;
    branchGap?: number;
}): number;
export declare function resolveMindMapConnectorEndpointSides(side: MindMapNodeSide): {
    startSide: MindMapNodeSide;
    endSide: MindMapNodeSide;
};
export declare function resolveMindMapLinkRoutePoints(options: {
    idPrefix?: string;
    parentNode: IMindMapNodeElement;
    childNode: IMindMapNodeElement;
    side: MindMapNodeSide;
    branchGap?: number;
    forceTrunk?: boolean;
}): IBoardConnectorWaypoint[];
export declare function resolveMindMapLinkTransform(options: {
    parentNode: IMindMapNodeElement;
    childNode: IMindMapNodeElement;
    side: MindMapNodeSide;
    routePoints: readonly IBoardConnectorWaypoint[];
    curveData?: MindMapConnectorCurveData;
}): IBoardElementTransform;
export declare function resolveMindMapLinkTransformFromPoints(points: readonly {
    x: number;
    y: number;
}[]): IBoardElementTransform;
export declare function resolveMindMapBranchLineType(lineType?: MindMapBranchLineType): MindMapBranchLineType;
export declare function resolveMindMapCurveData(options: {
    parentNode: IMindMapNodeElement;
    childNode: IMindMapNodeElement;
    side: MindMapNodeSide;
    idPrefix: string;
}): MindMapConnectorCurveData;
export declare function resolveMindMapTreeRootLinkGeometry(options: {
    parentNode: IMindMapNodeElement;
    childNode: IMindMapNodeElement;
    side: MindMapNodeSide;
    idPrefix: string;
    branchLineType?: MindMapBranchLineType;
}): {
    startSide: MindMapNodeSide;
    endSide: MindMapNodeSide;
    startPoint: {
        x: number;
        y: number;
    };
    endPoint: {
        x: number;
        y: number;
    };
    startEndpoint?: IBoardConnectorEndpoint;
    endEndpoint?: IBoardConnectorEndpoint;
    routePoints: IBoardConnectorWaypoint[];
    curveData?: MindMapConnectorCurveData;
    transform: IBoardElementTransform;
};
export declare function resolveMindMapTimelineRootLinkGeometry(options: {
    parentNode: IMindMapNodeElement;
    childNode: IMindMapNodeElement;
    previousAxisNode?: IMindMapNodeElement;
    structureKind: 'timeline-horizontal' | 'timeline-vertical';
    childSide?: MindMapNodeSide;
    idPrefix: string;
    branchLineType?: MindMapBranchLineType;
}): {
    startSide: MindMapNodeSide;
    endSide: MindMapNodeSide;
    startPoint: {
        x: number;
        y: number;
    };
    endPoint: {
        x: number;
        y: number;
    };
    startEndpoint?: IBoardConnectorEndpoint;
    endEndpoint?: IBoardConnectorEndpoint;
    routePoints: IBoardConnectorWaypoint[];
    curveData?: MindMapConnectorCurveData;
    transform: IBoardElementTransform;
};
export declare function resolveMindMapHorizontalTimelineBranchLinkGeometry(options: {
    parentNode: IMindMapNodeElement;
    childNode: IMindMapNodeElement;
    parentIsAxisNode: boolean;
    idPrefix: string;
    branchLineType?: MindMapBranchLineType;
}): {
    startSide: MindMapNodeSide;
    endSide: MindMapNodeSide;
    startPoint: {
        x: number;
        y: number;
    };
    endPoint: {
        x: number;
        y: number;
    };
    startEndpoint?: IBoardConnectorEndpoint;
    endEndpoint?: IBoardConnectorEndpoint;
    routePoints: IBoardConnectorWaypoint[];
    curveData?: MindMapConnectorCurveData;
    transform: IBoardElementTransform;
};
export declare function resolveMindMapVerticalTimelineBranchLinkGeometry(options: {
    parentNode: IMindMapNodeElement;
    childNode: IMindMapNodeElement;
    parentIsAxisNode: boolean;
    side: MindMapNodeSide;
    idPrefix: string;
    branchLineType?: MindMapBranchLineType;
    forceTrunk?: boolean;
}): {
    startSide: MindMapNodeSide;
    endSide: MindMapNodeSide;
    startPoint: {
        x: number;
        y: number;
    };
    endPoint: {
        x: number;
        y: number;
    };
    startEndpoint?: IBoardConnectorEndpoint;
    endEndpoint?: IBoardConnectorEndpoint;
    routePoints: IBoardConnectorWaypoint[];
    curveData?: MindMapConnectorCurveData;
    transform: IBoardElementTransform;
};
export {};
