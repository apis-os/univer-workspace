import { IShapeHostAdapterRegistry } from '@univerjs-pro/engine-shape';
import { Disposable } from '@univerjs/core';
import { BoardShapeHostAdapter } from '../adapters/board-shape-host.adapter';
/** Registers the Board Shape host adapter for the lifetime of the Boards plugin. */
export declare class BoardShapeController extends Disposable {
    constructor(shapeHostAdapterRegistry: IShapeHostAdapterRegistry, shapeHostAdapter: BoardShapeHostAdapter);
}
