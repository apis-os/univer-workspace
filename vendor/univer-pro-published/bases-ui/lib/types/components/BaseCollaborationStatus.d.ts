import { CollaborationStatus } from '@univerjs-pro/collaboration-client';
export interface IBaseCollaborationStatusProps {
    status: CollaborationStatus;
    serverMode?: boolean;
    onReconnect?: () => void;
}
interface IBaseUnitCollaborationStatusProps {
    unitId: string;
}
export declare function BaseUnitCollaborationStatus({ unitId }: Readonly<IBaseUnitCollaborationStatusProps>): import("react").JSX.Element | null;
export declare function BaseCollaborationStatus(props: Readonly<IBaseCollaborationStatusProps>): import("react").JSX.Element;
export {};
