import type { CSSProperties, ReactNode } from 'react';
import type { IReferencedUnitViewerSession } from '../services/referenced-unit-viewer.service';
interface IReferencedUnitViewerProviderProps {
    children: ReactNode;
    session: IReferencedUnitViewerSession;
}
interface IReferencedUnitViewerSlotProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare function ReferencedUnitViewerProvider(props: IReferencedUnitViewerProviderProps): import("react").JSX.Element;
declare function ReferencedUnitViewerFrame(props: IReferencedUnitViewerSlotProps): import("react").JSX.Element;
declare function ReferencedUnitViewerUnitList(): import("react").JSX.Element | null;
declare function ReferencedUnitViewerViewport(): import("react").JSX.Element;
export declare const ReferencedUnitViewer: {
    Frame: typeof ReferencedUnitViewerFrame;
    Provider: typeof ReferencedUnitViewerProvider;
    UnitList: typeof ReferencedUnitViewerUnitList;
    Viewport: typeof ReferencedUnitViewerViewport;
};
export {};
