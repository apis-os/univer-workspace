import type { ICommandService, IDisposable } from '@univerjs/core';
import type { ComponentType } from 'react';
import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
export type BoardSettingsMenuContributionGroup = 'action' | 'import' | 'output';
export declare enum BoardSettingsMenuContributionSubmenu {
    SaveAs = "save-as"
}
export interface IBoardSettingsMenuContribution {
    id: string;
    icon: ComponentType<{
        className?: string;
    }>;
    label: () => string;
    order: number;
    group: BoardSettingsMenuContributionGroup;
    submenu?: BoardSettingsMenuContributionSubmenu;
    menuItemId?: string;
    enabled?: boolean | (() => boolean);
    onClick: (commandService: ICommandService) => void | Promise<void>;
}
export interface IBoardSettingsMenuContributionService {
    readonly contributions$: Observable<readonly IBoardSettingsMenuContribution[]>;
    register(contribution: IBoardSettingsMenuContribution): IDisposable;
    getAll(): readonly IBoardSettingsMenuContribution[];
}
export declare const IBoardSettingsMenuContributionService: import("@wendellhu/redi").IdentifierDecorator<IBoardSettingsMenuContributionService>;
export declare class BoardSettingsMenuContributionService extends Disposable implements IBoardSettingsMenuContributionService {
    private readonly _registrations;
    private readonly _contributions$;
    private _registrationIndex;
    readonly contributions$: Observable<readonly IBoardSettingsMenuContribution[]>;
    register(contribution: IBoardSettingsMenuContribution): IDisposable;
    getAll(): readonly IBoardSettingsMenuContribution[];
    dispose(): void;
    private _publish;
}
