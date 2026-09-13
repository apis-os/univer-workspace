import type { ICommandService, IDisposable } from '@univerjs/core';
import type { ComponentType } from 'react';
import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
export type BoardToolbarContributionGroup = 'create' | 'auxiliary';
export type BoardToolbarContributionPlacement = 'left-toolbar' | 'top-right-before-history' | 'view-selection';
export interface IBoardToolbarContribution {
    id: string;
    icon: ComponentType<{
        className?: string;
    }>;
    label: () => string;
    order: number;
    group: BoardToolbarContributionGroup;
    /** Opt into read-only UI; the contribution remains responsible for its own permissions. */
    availableInViewing?: boolean;
    placement?: BoardToolbarContributionPlacement;
    menuItemId?: string;
    enabled?: boolean | (() => boolean);
    active?: () => boolean;
    onClick: (commandService: ICommandService) => void | Promise<void>;
}
export interface IBoardToolbarContributionService {
    readonly contributions$: Observable<readonly IBoardToolbarContribution[]>;
    register(contribution: IBoardToolbarContribution): IDisposable;
    getAll(): readonly IBoardToolbarContribution[];
}
export declare const IBoardToolbarContributionService: import("@wendellhu/redi").IdentifierDecorator<IBoardToolbarContributionService>;
export declare class BoardToolbarContributionService extends Disposable implements IBoardToolbarContributionService {
    private readonly _registrations;
    private readonly _contributions$;
    private _registrationIndex;
    readonly contributions$: Observable<readonly IBoardToolbarContribution[]>;
    register(contribution: IBoardToolbarContribution): IDisposable;
    getAll(): readonly IBoardToolbarContribution[];
    dispose(): void;
    private _publish;
}
