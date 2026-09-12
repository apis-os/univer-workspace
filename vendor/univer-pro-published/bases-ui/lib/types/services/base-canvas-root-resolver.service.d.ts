export interface IBaseCanvasRootResolverService {
    getCanvasRoot(unitId?: string): HTMLElement | null;
}
export declare const IBaseCanvasRootResolverService: import("@wendellhu/redi").IdentifierDecorator<IBaseCanvasRootResolverService>;
export declare class BaseCanvasRootResolverService implements IBaseCanvasRootResolverService {
    getCanvasRoot(unitId?: string): HTMLElement | null;
}
export declare function createScopedBaseCanvasRootResolverService(scope: ParentNode): IBaseCanvasRootResolverService;
