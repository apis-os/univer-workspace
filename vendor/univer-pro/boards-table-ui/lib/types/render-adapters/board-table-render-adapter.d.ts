import type { IBoardElementRenderAdapter } from '@univerjs-pro/boards-ui';
import type { ISlideTableThemePalette, SlideTableResourceService } from '@univerjs-pro/slides-table';
import type { LocaleService, ThemeService } from '@univerjs/core';
export declare const BOARD_TABLE_ELEMENT_RENDER_ADAPTER_NAME = "table";
export declare function createBoardTableElementRenderAdapter(slideTableResourceService: SlideTableResourceService, localeService?: LocaleService, tableThemePalette?: ISlideTableThemePalette, themeService?: ThemeService): IBoardElementRenderAdapter;
