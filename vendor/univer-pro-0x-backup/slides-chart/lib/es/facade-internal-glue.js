import{ChartDataSourceRuntimeStatus,IChartDataSourceRuntimeService,ResourceRefChartDataSourceAdapter,toChartDataItem,toChartModelConfig}from"@univerjs-pro/engine-chart";
import{CHART_FACADE_RANDOM_ID_LENGTH,FChart,createChartBuilder}from"@univerjs-pro/engine-chart/facade";
import{PageElementTypeEnum}from"@univerjs-pro/slides";
import{DEFAULT_SLIDE_CHART_ELEMENT_HEIGHT,DEFAULT_SLIDE_CHART_ELEMENT_LEFT,DEFAULT_SLIDE_CHART_ELEMENT_TOP,DEFAULT_SLIDE_CHART_ELEMENT_WIDTH,InsertSlideChartCommand,SlideChartConfigAdapter,SlideChartResourceService}from"@univerjs-pro/slides-chart";
import{FSlide}from"@univerjs-pro/slides/facade";
import{ICommandService,Tools,generateRandomId}from"@univerjs/core";
import{filter,firstValueFrom}from"rxjs";
import { D } from "./facade-slides-chart-fslide-chart.js";
FSlide.extend(D);
