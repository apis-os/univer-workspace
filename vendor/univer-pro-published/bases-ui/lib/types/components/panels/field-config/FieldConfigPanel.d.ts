import type { CSSProperties } from 'react';
import type { IBaseFieldConfigSubmitInput, IBaseFieldTypeCatalogItem, IBaseFormulaTableItem, IBaseMenuFieldItem, IBasePeopleOption } from './field-config-model';
import { BaseFieldType } from '@univerjs/core';
export declare const BASE_FIELD_CONFIG_PANEL_WIDTH = 360;
export declare function BaseFieldConfigPanel(props: {
    catalog: IBaseFieldTypeCatalogItem[];
    fields?: IBaseMenuFieldItem[];
    formulaTables?: IBaseFormulaTableItem[];
    personOptions?: IBasePeopleOption[];
    groupOptions?: IBasePeopleOption[];
    existingField?: {
        id?: string;
        name: string;
        type: BaseFieldType;
        config?: Record<string, unknown>;
        defaultValue?: unknown;
    } | null;
    initialName?: string;
    maxHeight?: CSSProperties['maxHeight'];
    onSubmit: (input: IBaseFieldConfigSubmitInput) => void;
    onCancel: () => void;
}): import("react").JSX.Element;
