interface IBaseRightPanelResizeHandleProps {
    controls?: string;
    currentWidth: number;
    label: string;
    maximumWidth: number;
    onResize: (width: number) => void;
    onResizeEnd: (width: number) => void;
}
export declare function BaseRightPanelResizeHandle({ controls, currentWidth, label, maximumWidth, onResize, onResizeEnd, }: IBaseRightPanelResizeHandleProps): import("react").JSX.Element;
export {};
