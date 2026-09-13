import{BoardElementType,InsertBoardChartCommand}from"@univerjs-pro/boards";
import{BoardChartConfigAdapter,BoardChartResourceService}from"@univerjs-pro/boards-chart";
import{FBoard}from"@univerjs-pro/boards/facade";
import{ChartDataSourceRuntimeStatus,DEFAULT_CHART_RESOURCE_HEADER_ROW,IChartDataSourceRuntimeService,ResourceRefChartDataSourceAdapter,buildOrientedChartDataSet,chartTypeToBits,toChartDataItem,toChartModelConfig}from"@univerjs-pro/engine-chart";
import{CHART_FACADE_RANDOM_ID_LENGTH,FChart,createChartBuilder}from"@univerjs-pro/engine-chart/facade";
import{ICommandService,IUniverInstanceService,Tools,UniverInstanceType,generateRandomId}from"@univerjs/core";
import{filter,firstValueFrom}from"rxjs";
import { O } from "./facade-boards-chart-fboard-chart.js";
FBoard.extend(O);
