import type { IEchartTheme, IEchartThemeContent } from './types';
export type axesType = 'category' | 'value' | 'time' | 'log' | 'all' | undefined;
export declare function getThemeAxesByType(themeInfo: IEchartTheme, axesType: axesType): import("./types").IEchartThemeAxisConfig | undefined;
export declare function getThemeProps<K extends keyof IEchartThemeContent>(themeInfo: IEchartTheme | undefined, key: K): IEchartThemeContent[K];
