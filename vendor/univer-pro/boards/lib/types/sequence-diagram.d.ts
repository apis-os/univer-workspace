import type { IBasicShapeData, IPresetShapeConfig } from '@univerjs-pro/engine-shape';
import type { IBoardPageElement, IBoardShapeElement } from './board.type';
import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { BoardCustomShapeType } from './custom-shapes';
export declare const BoardSequenceShapeType: {
    readonly ActorLifeline: "sequence_actor_lifeline";
    readonly BoundaryLifeline: "sequence_boundary_lifeline";
    readonly ControlLifeline: "sequence_control_lifeline";
    readonly EntityLifeline: "sequence_entity_lifeline";
    readonly CollectionLifeline: "sequence_collection_lifeline";
    readonly ObjectLifeline: "sequence_object_lifeline";
    readonly MagneticDiskLifeline: "sequence_magnetic_disk_lifeline";
    readonly DirectAccessStorageLifeline: "sequence_direct_access_storage_lifeline";
    readonly ActivationBar: "sequence_activation_bar";
};
export type BoardSequenceShapeType = typeof BoardSequenceShapeType[keyof typeof BoardSequenceShapeType];
export declare const BoardSequenceParticipantShapeType: {
    readonly Object: "object";
    readonly MagneticDisk: "magnetic_disk";
    readonly DirectAccessStorage: "direct_access_storage";
};
export type BoardSequenceParticipantShapeType = typeof BoardSequenceParticipantShapeType[keyof typeof BoardSequenceParticipantShapeType];
export interface IBoardSequenceLifelineData {
    participantShapeType: BoardCustomShapeType | BoardSequenceParticipantShapeType;
    participantEngineShapeType?: ShapeTypeEnum;
    lifelineHeight: number;
    minLifelineHeight: number;
}
export interface IBoardSequenceActivationData {
    attachableToLifeline: true;
    lifelineId?: string;
    offsetY?: number;
}
export interface IBoardSequenceLifelineMetrics {
    x: number;
    y1: number;
    y2: number;
    lifelineHeight: number;
    handle: {
        x: number;
        y: number;
        radius: number;
    };
}
export interface IBoardSequenceShapeDefinition {
    shapeType: BoardSequenceShapeType;
    participantShapeType?: BoardCustomShapeType | BoardSequenceParticipantShapeType;
    geometry?: IPresetShapeConfig;
    defaultSize: {
        width: number;
        height: number;
    };
    defaultShapeData?: Pick<IBasicShapeData, 'fill' | 'stroke'> & {
        sequenceLifeline?: IBoardSequenceLifelineData;
        sequenceActivation?: IBoardSequenceActivationData;
    };
}
export declare const BOARD_SEQUENCE_LIFELINE_SHAPE_TYPES: readonly ["sequence_actor_lifeline", "sequence_boundary_lifeline", "sequence_control_lifeline", "sequence_entity_lifeline", "sequence_collection_lifeline", "sequence_object_lifeline", "sequence_magnetic_disk_lifeline", "sequence_direct_access_storage_lifeline"];
export declare function isBoardSequenceShapeType(shapeType: string): shapeType is BoardSequenceShapeType;
export declare const BOARD_SEQUENCE_SHAPE_DEFINITIONS: Record<BoardSequenceShapeType, IBoardSequenceShapeDefinition>;
export declare const BOARD_SEQUENCE_SHAPE_TYPES: ("sequence_actor_lifeline" | "sequence_boundary_lifeline" | "sequence_control_lifeline" | "sequence_entity_lifeline" | "sequence_collection_lifeline" | "sequence_object_lifeline" | "sequence_magnetic_disk_lifeline" | "sequence_direct_access_storage_lifeline" | "sequence_activation_bar")[];
/** Upgrades only the shipped fixed-canvas activation geometry, preserving custom paths and the source snapshot. */
export declare function normalizeBoardSequenceActivationElement(element: IBoardPageElement): IBoardPageElement;
export declare function resolveBoardSequenceShapeDefinition(shapeType: string): IBoardSequenceShapeDefinition | undefined;
export declare function getBoardShapeSequenceLifelineData(shapeData: IBasicShapeData | undefined): IBoardSequenceLifelineData | undefined;
export declare function getBoardShapeSequenceActivationData(shapeData: IBasicShapeData | undefined): IBoardSequenceActivationData | undefined;
export declare function isBoardSequenceLifelineElement(element: unknown): element is IBoardShapeElement;
export declare function isBoardSequenceActivationElement(element: unknown): element is IBoardShapeElement;
export declare function resolveBoardSequenceLifelineMetrics(element: IBoardShapeElement): IBoardSequenceLifelineMetrics | null;
