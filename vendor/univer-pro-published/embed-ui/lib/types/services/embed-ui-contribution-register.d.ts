import type { Injector } from '@univerjs/core';
type EmbedUIContributionRegister = (injector: Injector) => void;
export declare function registerEmbedUIContribution(injector: Injector, key: string, register: EmbedUIContributionRegister): void;
export declare function flushPendingEmbedUIContributions(injector: Injector): void;
export {};
