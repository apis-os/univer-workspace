import { IShapeHostAdapterRegistry } from '@univerjs-pro/engine-shape';
import { Disposable, ICommandService } from '@univerjs/core';
import { IDocDrawingAdapterService } from '@univerjs/docs-drawing';
import { DocShapeHostAdapter } from '../adapters/doc-shape-host.adapter';
export declare class DocsShapeController extends Disposable {
    private readonly _commandService;
    private readonly _shapeHostAdapterRegistry;
    private readonly _docDrawingAdapterService;
    constructor(_commandService: ICommandService, _shapeHostAdapterRegistry: IShapeHostAdapterRegistry, _docDrawingAdapterService: IDocDrawingAdapterService, shapeHostAdapter: DocShapeHostAdapter);
    private _registerCommands;
}
