export interface IBaseGlobalPortalService {
    getContainer(): HTMLElement | null;
}
export declare const IBaseGlobalPortalService: import("@wendellhu/redi").IdentifierDecorator<IBaseGlobalPortalService>;
export declare class BaseGlobalPortalService implements IBaseGlobalPortalService {
    getContainer(): HTMLElement | null;
}
export declare function createScopedBaseGlobalPortalService(container: HTMLElement | null | undefined): IBaseGlobalPortalService;
