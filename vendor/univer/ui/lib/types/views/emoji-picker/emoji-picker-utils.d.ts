/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { LocaleService } from '@univerjs/core';
import { emojis } from './emojis.generated';
export interface IEmojiVariant {
    emoji: string;
    title: string;
}
export interface IEmojiItem extends IEmojiVariant {
    skinToneVariants?: IEmojiVariant[];
}
export interface IEmojiLocaleData {
    emojiSearchIndex?: Record<string, string>;
    emojiTitles?: Record<string, string>;
}
export type EmojiCategory = Exclude<keyof typeof emojis, 'frequent'>;
export declare const EMOJI_SKIN_TONES: readonly ["", "🏻", "🏼", "🏽", "🏾", "🏿"];
export type EmojiSkinTone = (typeof EMOJI_SKIN_TONES)[number];
export declare const EMOJI_SKIN_TONE_OPTIONS: ReadonlyArray<IEmojiVariant & {
    value: EmojiSkinTone;
}>;
export declare const EMOJI_RECENT_LIMIT = 11;
export declare const EMOJI_CATEGORIES: {
    key: EmojiCategory;
    titleKey: "ui.column" | "ui.row" | "ui.common-edit" | "ui.toggle-shortcut-panel" | "ui.global-shortcut" | "ui.fontFamily.not-supported" | "ui.ribbon.start" | "ui.ribbon.view" | "ui.ribbon.insert" | "ui.ribbon.data" | "ui.ribbon.startDesc" | "ui.ribbon.insertDesc" | "ui.ribbon.formulas" | "ui.ribbon.formulasDesc" | "ui.ribbon.dataDesc" | "ui.ribbon.viewDesc" | "ui.ribbon.others" | "ui.ribbon.othersDesc" | "ui.ribbon.more" | "ui.clipboard.authentication.title" | "ui.clipboard.authentication.content" | "ui.objectPermission.all" | "ui.objectPermission.title" | "ui.objectPermission.paragraph" | "ui.objectPermission.table" | "ui.objectPermission.empty" | "ui.objectPermission.field" | "ui.objectPermission.record" | "ui.objectPermission.view" | "ui.objectPermission.error" | "ui.objectPermission.search" | "ui.objectPermission.document" | "ui.objectPermission.remove" | "ui.objectPermission.page" | "ui.objectPermission.owner" | "ui.objectPermission.members" | "ui.objectPermission.edit" | "ui.objectPermission.comment" | "ui.objectPermission.cancel" | "ui.objectPermission.copy" | "ui.objectPermission.more" | "ui.objectPermission.operationDenied" | "ui.objectPermission.roleOwner" | "ui.objectPermission.roleEditor" | "ui.objectPermission.selectedCount" | "ui.objectPermission.searchPeople" | "ui.objectPermission.noMatchingPeople" | "ui.objectPermission.loadMore" | "ui.objectPermission.fileHint" | "ui.objectPermission.documentParent" | "ui.objectPermission.paragraphParent" | "ui.objectPermission.documentObjectParent" | "ui.objectPermission.slideParent" | "ui.objectPermission.slideObjectParent" | "ui.objectPermission.baseParent" | "ui.objectPermission.baseObjectParent" | "ui.objectPermission.recordParent" | "ui.objectPermission.boardParent" | "ui.objectPermission.ownerInherit" | "ui.objectPermission.peopleError" | "ui.objectPermission.section" | "ui.objectPermission.entity" | "ui.objectPermission.presentation" | "ui.objectPermission.master" | "ui.objectPermission.base" | "ui.objectPermission.board" | "ui.objectPermission.objectName" | "ui.objectPermission.save" | "ui.objectPermission.saving" | "ui.objectPermission.loading" | "ui.objectPermission.conflict" | "ui.objectPermission.reload" | "ui.objectPermission.denied" | "ui.objectPermission.print" | "ui.objectPermission.export" | "ui.objectPermission.parentHint" | "ui.featureSearch.title" | "ui.featureSearch.empty" | "ui.featureSearch.placeholder" | "ui.featureSearch.ribbon" | "ui.featureSearch.contextMenu" | "ui.emojiPicker.search" | "ui.emojiPicker.objects" | "ui.emojiPicker.random" | "ui.emojiPicker.recents" | "ui.emojiPicker.emojis" | "ui.emojiPicker.animals" | "ui.emojiPicker.food" | "ui.emojiPicker.activities" | "ui.emojiPicker.places" | "ui.emojiPicker.symbols" | "ui.emojiPicker.searchResults" | "ui.emojiPicker.noResults" | `ui.emojiPicker.emojiSearchIndex.${string}` | `ui.emojiPicker.emojiTitles.${string}` | "ui.symbolPicker.mathematics" | "ui.symbolPicker.greek" | "ui.symbolPicker.common" | "ui.toolbar.heading.title" | "ui.toolbar.heading.normal" | "ui.toolbar.heading.subTitle" | "ui.shortcut-panel.title" | "ui.shortcut.copy" | "ui.shortcut.cut" | "ui.shortcut.paste" | "ui.shortcut.shortcut-panel" | "ui.shortcut.undo" | "ui.shortcut.redo" | "ui.navigation.next" | "ui.navigation.back" | "ui.navigation.previous" | "ui.sidebar.close" | "ui.sidebar.resize" | "ui.sidebar.panel" | "ui.beforeClose.title" | "ui.rangeSelector.cancel";
}[];
export declare function getDefaultRecentEmojis(): IEmojiItem[];
export declare function getAllEmojis(): IEmojiItem[];
export declare function searchEmojis(keyword: string, searchIndex?: Record<string, string>): IEmojiItem[];
export declare function promoteRecentEmoji(recents: IEmojiItem[], item: IEmojiItem): IEmojiItem[];
export declare function parseStoredRecentEmojis(value: IEmojiItem[] | string | null): IEmojiItem[];
export declare function getRandomEmoji(random?: () => number, skinTone?: EmojiSkinTone): IEmojiItem;
export declare function applyEmojiSkinTone(item: IEmojiItem, skinTone: EmojiSkinTone): IEmojiItem;
export declare function getEmojiFamilyKey(emoji: string): string;
export declare function getEmojiFamilyVariants(emoji: string): IEmojiVariant[];
export declare function hasMixedSkinToneVariants(item: IEmojiItem): boolean;
export declare function parseStoredEmojiSkinTone(value: unknown): EmojiSkinTone;
export declare function getLocalizedEmojiTitle(item: IEmojiItem, emojiTitles?: Record<string, string>): string;
export declare function getEmojiLocaleData(localeService: Pick<LocaleService, 'getLocales'>): IEmojiLocaleData;
