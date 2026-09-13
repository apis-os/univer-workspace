import type { BaseFieldType } from '@univerjs/core';
import type { ComponentProps, ComponentType } from 'react';
import { BaseViewType } from '@univerjs/core';
export type UniverIcon = ComponentType<{
    className?: string;
    'aria-hidden'?: boolean | 'true' | 'false';
}>;
export type BaseRowHeightPreset = 'short' | 'medium' | 'tall' | 'extraTall';
export declare const BASE_CHECKBOX_FIELD_ICON_PATHS: readonly ["M17.207 10.207a1 1 0 0 0-1.414-1.414L11 13.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l5.5-5.5Z", "M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2 0v16h16V4H4Z"];
export declare const BASE_PHONE_FIELD_ICON_PATH = "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384";
export declare const BASE_EMAIL_FIELD_ICON_PATH = "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7";
export declare const BASE_PERSON_FIELD_ICON_PATH = "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2";
export declare const BASE_PERSON_FIELD_ICON_CANVAS_PATH = "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0";
export declare const BASE_CREATED_BY_FIELD_ICON_PATH = "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2";
export declare const BASE_CREATED_BY_FIELD_ICON_CANVAS_PATH = "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M19 8v6M22 11h-6";
export declare const BASE_UPDATED_BY_FIELD_ICON_PATHS: readonly ["M11.5 15H7a4 4 0 0 0-4 4v2", "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"];
export declare const BASE_UPDATED_BY_FIELD_ICON_CANVAS_PATH: string;
export declare const BASE_CREATED_AT_FIELD_ICON_PATHS: readonly ["M16 18h6", "M16 2v3", "M19 15v6", "M21 11.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.3", "M3 9h18", "M8 2v3"];
export declare const BASE_UPDATED_AT_FIELD_ICON_PATHS: readonly ["m15.228 16.852-.923-.383", "m15.228 19.148-.923.383", "M16 2v3", "m16.47 14.305.382.923", "m16.852 20.772-.383.924", "m19.148 15.228.383-.923", "m19.53 21.696-.382-.924", "m20.773 16.852.924-.383", "m20.773 19.148.924.383", "M21 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.5", "M3 9h18", "M8 2v3"];
export declare const BASE_UPDATED_AT_FIELD_ICON_CIRCLE_PATH = "M21 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0";
export declare const BASE_ATTACHMENT_FIELD_ICON_PATH = "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551";
export declare const BASE_MULTI_SELECT_FIELD_ICON_PATHS: readonly [{
    readonly d: "M4.96372 2.59116C5.19803 2.35684 5.19803 1.97695 4.96372 1.74263C4.7294 1.50832 4.3495 1.50832 4.11519 1.74263L2.53945 3.31837L1.96372 2.74263C1.7294 2.50832 1.3495 2.50832 1.11519 2.74263C0.880874 2.97695 0.880874 3.35684 1.11519 3.59116L2.11519 4.59116C2.3495 4.82547 2.7294 4.82547 2.96372 4.59116L4.96372 2.59116Z";
}, {
    readonly d: "M14.4605 2.56689H6.8981C6.56672 2.56689 6.2981 2.83552 6.2981 3.16689C6.2981 3.49827 6.56672 3.76689 6.8981 3.76689H14.4605C14.7918 3.76689 15.0605 3.49827 15.0605 3.16689C15.0605 2.83552 14.7918 2.56689 14.4605 2.56689Z";
}, {
    readonly d: "M6.8981 7.2334C6.56672 7.2334 6.2981 7.50203 6.2981 7.8334C6.2981 8.16477 6.56672 8.4334 6.8981 8.4334H14.4605C14.7918 8.4334 15.0605 8.16477 15.0605 7.8334C15.0605 7.50203 14.7918 7.2334 14.4605 7.2334H6.8981Z";
}, {
    readonly d: "M6.2981 12.4999C6.2981 12.1685 6.56672 11.8999 6.8981 11.8999H14.4605C14.7918 11.8999 15.0605 12.1685 15.0605 12.4999C15.0605 12.8313 14.7918 13.0999 14.4605 13.0999H6.8981C6.56672 13.0999 6.2981 12.8313 6.2981 12.4999Z";
}, {
    readonly d: "M2.87279 5.8999C1.80504 5.8999 0.939453 6.76549 0.939453 7.83324C0.939453 8.90099 1.80504 9.76657 2.87279 9.76657C3.94054 9.76657 4.80612 8.90099 4.80612 7.83324C4.80612 6.76549 3.94054 5.8999 2.87279 5.8999ZM2.13945 7.83324C2.13945 7.42823 2.46778 7.0999 2.87279 7.0999C3.2778 7.0999 3.60612 7.42823 3.60612 7.83324C3.60612 8.23824 3.2778 8.56657 2.87279 8.56657C2.46778 8.56657 2.13945 8.23824 2.13945 7.83324Z";
    readonly fillRule: "evenodd";
}, {
    readonly d: "M0.939453 12.5002C0.939453 11.4325 1.80504 10.5669 2.87279 10.5669C3.94054 10.5669 4.80612 11.4325 4.80612 12.5002C4.80612 13.568 3.94054 14.4336 2.87279 14.4336C1.80504 14.4336 0.939453 13.568 0.939453 12.5002ZM2.87279 11.7669C2.46778 11.7669 2.13945 12.0952 2.13945 12.5002C2.13945 12.9052 2.46778 13.2336 2.87279 13.2336C3.2778 13.2336 3.60612 12.9052 3.60612 12.5002C3.60612 12.0952 3.2778 11.7669 2.87279 11.7669Z";
    readonly fillRule: "evenodd";
}];
export declare const BASE_SINGLE_SELECT_FIELD_ICON_PATHS: readonly ["M7.755 11.658a1 1 0 0 1 1.416-1.415L12 13.07l2.828-2.829a1 1 0 0 1 1.416 1.416c-1.181 1.189-2.356 2.386-3.553 3.56a.987.987 0 0 1-1.383 0c-1.196-1.175-2.371-2.371-3.553-3.56Z", "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"];
export declare const BASE_NUMBERING_FIELD_ICON_PATHS: readonly ["M11 5h10", "M11 12h10", "M11 19h10", "M4 4h1v5", "M4 9h2", "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"];
export declare function BaseViewIcon({ type, icon }: {
    type: BaseViewType;
    icon?: UniverIcon;
}): import("react").JSX.Element;
export declare function BaseToolbarIcon({ name }: {
    name: 'record' | 'fields' | 'settings' | 'filter' | 'group' | 'sort' | 'rowHeight' | 'color' | 'undo' | 'redo';
}): import("react").JSX.Element;
export declare function BaseConditionalColorIcon(): import("react").JSX.Element;
export declare function BaseRowHeightOptionIcon({ value }: {
    value: BaseRowHeightPreset;
}): import("react").JSX.Element;
export declare function BaseCheckboxFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BasePhoneFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BaseEmailFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BasePersonFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BaseCreatedByFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BaseUpdatedByFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BaseCreatedAtFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BaseUpdatedAtFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BaseAttachmentFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BaseSingleSelectFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare function BaseNumberingFieldIcon(props: ComponentProps<'svg'>): import("react").JSX.Element;
export declare const BASE_FIELD_TYPE_ICONS: Partial<Record<BaseFieldType, UniverIcon>>;
export declare function resolveBaseFieldTypeIcon(type: BaseFieldType): UniverIcon;
