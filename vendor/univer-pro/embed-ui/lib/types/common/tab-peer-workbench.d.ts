import type { EmbedHostEntry } from '@univerjs-pro/embed';
export type EmbedTabPeerWorkbenchRole = 'sheets-main-workbench' | 'bases-main-workbench' | 'slides-main-workbench';
export type EmbedTabPeerHostHeaderMode = 'hide-host-header' | 'extend-host-header';
export declare function isEmbedTabPeerEntry(entry: EmbedHostEntry): boolean;
export declare function getEmbedTabPeerWorkbenchRole(entry: EmbedHostEntry): EmbedTabPeerWorkbenchRole | undefined;
export declare function getEmbedTabPeerHostHeaderMode(entry: EmbedHostEntry): EmbedTabPeerHostHeaderMode | undefined;
