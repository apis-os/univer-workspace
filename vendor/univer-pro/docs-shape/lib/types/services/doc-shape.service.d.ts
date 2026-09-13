import type { IShapeData, IShapeJSONData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { Disposable, IResourceManagerService } from '@univerjs/core';
import { DocShapeModelManager } from '../models/shape-manager';
export interface IDocsShapeResource {
    [unitId: string]: IShapeJSONData[];
}
export declare const DOCS_SHAPE_PLUGIN = "DOC_SHAPE_PLUGIN";
export declare class DocsShapeService extends Disposable {
    private readonly _resourcesManagerService;
    private readonly _shapeModelManagerMap;
    constructor(_resourcesManagerService: IResourceManagerService);
    private _ensureShapeModelManager;
    insertShape(unitId: string, shapeType: ShapeTypeEnum, shapeId: string, shapeData?: IShapeData): void;
    removeShape(unitId: string, shapeId: string): void;
    getShapeType(unitId: string, shapeId: string): ShapeTypeEnum | undefined;
    getShapeType(unitId: string, subUnitId: string, shapeId: string): ShapeTypeEnum | undefined;
    getShapeData(unitId: string, shapeId: string): IShapeData | undefined;
    getShapeData(unitId: string, subUnitId: string, shapeId: string): IShapeData | undefined;
    hasShape(unitId: string, shapeId: string): boolean;
    getShapeTypeById(unitId: string, shapeId: string): ShapeTypeEnum | undefined;
    getShapeTypeById(unitId: string, subUnitId: string, shapeId: string): ShapeTypeEnum | undefined;
    getShapeDataById(unitId: string, shapeId: string): IShapeData | undefined;
    getShapeDataById(unitId: string, subUnitId: string, shapeId: string): IShapeData | undefined;
    getShapeModel(unitId: string, shapeId: string): ReturnType<DocShapeModelManager['shapes']['get']>;
    getShapeModel(unitId: string, subUnitId: string, shapeId: string): ReturnType<DocShapeModelManager['shapes']['get']>;
    getBasicShapeRelation(unitId: string, shapeId: string): import("../models/shape-manager").IDocShapeRelationItemWithLineId[];
    getLineShapeRelation(unitId: string, lineShapeId: string): import("@univerjs-pro/engine-shape").IShapeRelation | undefined;
    private _serializeShapeForUnit;
    private _deserializeShapeForUnit;
    toJSON(): Record<string, IShapeJSONData[]>;
    fromJSON(data: Record<string, IShapeJSONData[]>): void;
    private _initSnapshot;
    dispose(): void;
}
