import{chartTypeToBits,toChartModelConfig}from"@univerjs-pro/engine-chart";
import{FChart,createChartBuilder}from"@univerjs-pro/engine-chart/facade";
import{ChartDiagnosticSeverity,ChartSourceKind,ChartSourceOrientation,InsertChartCommand,SheetChartConfigAdapter,SheetsChartService,resolveInitialChartPosition,resolveSourceSeries,resolveSourceSpec}from"@univerjs-pro/sheets-chart";
import{ICommandService,generateRandomId}from"@univerjs/core";
import{FWorksheet}from"@univerjs/sheets/facade";
import{FEnum}from"@univerjs/core/facade";
import { v } from "./facade-sheets-chart-fsheet-chart.js";
FWorksheet.extend(v);var y=class extends FEnum{get ChartSourceOrientation(){return ChartSourceOrientation;}};FEnum.extend(y);
