import type { IBasePeopleOption } from './field-config-model';
interface IPeopleDefaultPickerProps {
    options: IBasePeopleOption[];
    multiple: boolean;
    entity: 'person' | 'group';
    value: unknown;
    onChange: (value: unknown) => void;
}
export declare function PeopleDefaultPicker(props: IPeopleDefaultPickerProps): import("react").JSX.Element;
export {};
