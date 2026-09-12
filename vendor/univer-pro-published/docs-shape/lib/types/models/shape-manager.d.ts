import type { IShapeData, IShapeJSONData, IShapeRelation, IShapeRelationItem, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { ShapeModel } from '@univerjs-pro/engine-shape';
import { Disposable } from '@univerjs/core';
export type IDocShapeRelationItemWithLineId = IShapeRelationItem & {
    lineShapeId: string;
    isFrom: boolean;
};
export declare class DocShapeModelManager extends Disposable {
    readonly shapes: Map<string, ShapeModel>;
    private readonly _lineIds;
    addShape(shapeType: ShapeTypeEnum, id: string, shapeData?: IShapeData): ShapeModel;
    removeShape(id: string): void;
    getShapeType(id: string): ShapeTypeEnum | undefined;
    getShapeData(id: string): IShapeData | undefined;
    hasShape(id: string): boolean;
    getBasicShapeRelation(id: string): IDocShapeRelationItemWithLineId[];
    getLineShapeRelation(lineShapeId: string): IShapeRelation | undefined;
    toJSON(): IShapeJSONData[];
    fromJSON(data: IShapeJSONData[]): void;
    dispose(): void;
}
