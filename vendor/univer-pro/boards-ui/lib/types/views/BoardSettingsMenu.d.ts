import type { ComponentProps, ReactNode } from 'react';
import { Button } from '@univerjs/design';
export declare const BOARD_TOP_RIGHT_MENU_LEADING_PART = "board.top-right-menu.leading";
export declare const BOARD_SETTINGS_MENU_ACTIONS_PART = "boards-ui.settings-menu.actions";
type TopRightMenuButtonProps = ComponentProps<typeof Button> & {
    children: ReactNode;
    label: string;
    tooltipVisible?: boolean;
};
interface IBoardFindResultTextProps {
    query: string;
    text: string;
}
export declare function BoardFindResultText(props: IBoardFindResultTextProps): string | (string | import("react").JSX.Element)[];
export declare const TopRightMenuButton: import("react").ForwardRefExoticComponent<Omit<TopRightMenuButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export declare function BoardSettingsMenu(): import("react").JSX.Element;
export {};
