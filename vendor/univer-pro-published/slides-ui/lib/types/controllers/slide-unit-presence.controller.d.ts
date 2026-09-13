import { Disposable } from '@univerjs/core';
import { IUnitPresenceUIAdapterRegistry } from '@univerjs/ui';
import { SlideUnitPresenceUIAdapter } from '../services/slide-unit-presence-ui-adapter.service';
export declare class SlideUnitPresenceController extends Disposable {
    constructor(adapterRegistry: IUnitPresenceUIAdapterRegistry, adapter: SlideUnitPresenceUIAdapter);
}
