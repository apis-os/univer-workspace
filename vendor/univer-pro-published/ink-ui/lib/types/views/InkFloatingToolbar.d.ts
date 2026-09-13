import type { InkToolType } from '@univerjs-pro/ink';
import type { ComponentType } from 'react';
interface IInkFloatingToolbarProps {
    tool: InkToolType;
    color: string;
    width: number;
    onSelectTool: (tool: InkToolType) => void;
    onSetWidth: (width: number) => void;
    onSetColor: (color: string) => void;
    onClose: () => void;
}
interface IInkWidthPreset {
    value: number;
    icon: ComponentType<{
        className?: string;
    }>;
}
export declare const INK_WIDTH_PRESETS: IInkWidthPreset[];
export declare function InkFloatingToolbar(props: IInkFloatingToolbarProps): import("react").JSX.Element;
export {};
