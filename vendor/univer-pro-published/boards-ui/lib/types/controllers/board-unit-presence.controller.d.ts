import { Disposable } from '@univerjs/core';
import { IUnitPresenceUIAdapterRegistry } from '@univerjs/ui';
import { BoardUnitPresenceUIAdapter } from '../services/board-unit-presence-ui-adapter.service';
export declare class BoardUnitPresenceController extends Disposable {
    constructor(adapterRegistry: IUnitPresenceUIAdapterRegistry, adapter: BoardUnitPresenceUIAdapter);
}
