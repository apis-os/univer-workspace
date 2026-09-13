import type { ReactNode, RefObject } from 'react';
import type { BaseRatingIcon } from '../../../render/canvas-draw-command';
import type { IBasePeopleOption } from '../../panels/field-config/field-config-model';
import type { IRecordDetailFieldItem } from './RecordDetailPanel';
import { LocaleService } from '@univerjs/core';
export declare function renderDetailValue(field: IRecordDetailFieldItem, personOptions: IBasePeopleOption[] | undefined, groupOptions: IBasePeopleOption[] | undefined, localeService: LocaleService, darkMode: boolean): ReactNode;
export declare function DetailLinkPreview({ field, editable, onEdit, editButtonRef }: {
    field: IRecordDetailFieldItem;
    editable?: boolean;
    onEdit?: () => void;
    editButtonRef?: RefObject<HTMLButtonElement | null>;
}): import("react").JSX.Element;
export declare function DetailGlyph({ icon, active, fill, size: sizeProp, dataComp, hidden }: {
    icon: BaseRatingIcon;
    active: boolean;
    fill: string;
    size?: number;
    dataComp?: string;
    hidden?: boolean;
}): import("react").JSX.Element;
