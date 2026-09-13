import { DrawingTypeEnum } from '@univerjs/core';
export type DrawingTypeNameKey = 'chart' | 'dom' | 'group' | 'image' | 'object' | 'shape' | 'smartArt' | 'table' | 'unit' | 'video';
export declare function getDrawingTypeNameKey(drawingType: DrawingTypeEnum): DrawingTypeNameKey;
