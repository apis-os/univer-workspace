import type { IChartChordData, IUniverDataSet } from '../../../types';
import type { IChartLocaleTexts } from '../../common/chart-locale-texts';
import type { IChartFieldConsumption } from '../chart-field-consumption';
export declare const CHORD_NODE_ID_PREFIX = "chord-node:";
export declare const CHORD_LINK_ID_PREFIX = "chord-link:";
/** Resolves a normalized spreadsheet edge list into one undirected semantic graph. */
export declare function buildChordData(dataSet: IUniverDataSet, fields: IChartFieldConsumption, localeTexts: IChartLocaleTexts): IChartChordData;
