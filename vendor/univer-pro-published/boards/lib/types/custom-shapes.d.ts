import type { IBasicShapeData, IPresetShapeConfig } from '@univerjs-pro/engine-shape';
import type { IBoardPageElement } from './board.type';
export declare const BoardCustomShapeType: {
    readonly Actor: "actor";
    readonly Boundary: "boundary";
    readonly Control: "control";
    readonly Entity: "entity";
    readonly Collection: "collection";
    readonly DataStorage1: "data_storage_1";
    readonly DataStorage2: "data_storage_2";
    readonly DataStorage3: "data_storage_3";
    readonly Component: "component";
    readonly ComponentBox: "component_box";
    readonly ProvidedInterface: "provided_interface";
    readonly AssemblyConnector: "assembly_connector";
    readonly RequiredInterface: "required_interface";
    readonly InitialState: "initial_state";
    readonly FinalState: "final_state";
    readonly StateBar: "state_bar";
};
export type BoardCustomShapeType = typeof BoardCustomShapeType[keyof typeof BoardCustomShapeType];
export interface IBoardCustomShapeDefinition {
    shapeType: BoardCustomShapeType;
    geometry: IPresetShapeConfig;
    defaultShapeData?: Pick<IBasicShapeData, 'fill' | 'stroke'>;
}
export declare const BOARD_CUSTOM_SHAPE_DEFINITIONS: {
    actor: IBoardCustomShapeDefinition;
    boundary: IBoardCustomShapeDefinition;
    control: IBoardCustomShapeDefinition;
    entity: IBoardCustomShapeDefinition;
    collection: IBoardCustomShapeDefinition;
    data_storage_1: IBoardCustomShapeDefinition;
    data_storage_2: IBoardCustomShapeDefinition;
    data_storage_3: IBoardCustomShapeDefinition;
    component: IBoardCustomShapeDefinition;
    component_box: IBoardCustomShapeDefinition;
    provided_interface: IBoardCustomShapeDefinition;
    assembly_connector: IBoardCustomShapeDefinition;
    required_interface: IBoardCustomShapeDefinition;
    initial_state: IBoardCustomShapeDefinition;
    final_state: IBoardCustomShapeDefinition;
    state_bar: IBoardCustomShapeDefinition;
};
/** Upgrade exact shipped paths only; preserve user-authored geometry and the input snapshot. */
export declare function normalizeBoardCustomShapeElement(element: IBoardPageElement): IBoardPageElement;
export declare const BOARD_CUSTOM_SHAPE_TYPES: ("actor" | "boundary" | "control" | "entity" | "collection" | "data_storage_1" | "data_storage_2" | "data_storage_3" | "component" | "component_box" | "provided_interface" | "assembly_connector" | "required_interface" | "initial_state" | "final_state" | "state_bar")[];
export declare function isBoardCustomShapeType(shapeType: string): shapeType is BoardCustomShapeType;
export declare function resolveBoardCustomShapeDefinition(shapeType: string): IBoardCustomShapeDefinition | undefined;
export declare function resolveBoardCustomShapeGeometry(shapeType: string): IPresetShapeConfig | undefined;
