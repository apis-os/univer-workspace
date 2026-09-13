import type { CollaborationSession } from '@univerjs-pro/collaboration-client';
import type { UniverInstanceType } from '@univerjs/core';
import type { IUnitPresenceUIAdapter } from '@univerjs/ui';
import { MemberService } from '@univerjs-pro/collaboration-client';
import { ICommandService, RxDisposable } from '@univerjs/core';
import { ColorAssignService } from '../../services/color-assign/color-assign.service';
interface IUnitPresencePayload {
    kind: string;
    unitType: UniverInstanceType;
    unitId: string;
    subUnitId: string;
    selectedIds: string[];
    focusedId: string | null;
    pointer: {
        x: number;
        y: number;
    } | null;
}
export declare function parseUnitPresencePayload(selection: string, fallbackUnitType?: UniverInstanceType): IUnitPresencePayload | null;
export declare class UnitPresenceCollabCursorEntity extends RxDisposable {
    readonly unitId: string;
    private readonly _session;
    private readonly _adapter;
    private readonly _colorAssignService;
    private readonly _memberService;
    private readonly _commandService;
    private _online;
    private _initialized;
    constructor(unitId: string, _session: CollaborationSession, _adapter: IUnitPresenceUIAdapter, _colorAssignService: ColorAssignService, _memberService: MemberService, _commandService: ICommandService);
    get unitType(): UniverInstanceType;
    dispose(): void;
    init(): void;
    private _sendLocalPresence;
    private _handleCursorUpdate;
    private _removeRemotePresence;
    private _clearRemotePresences;
}
export {};
