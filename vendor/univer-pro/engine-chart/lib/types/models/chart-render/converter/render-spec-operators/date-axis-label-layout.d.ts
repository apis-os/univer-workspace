interface IDateAxisLabelSize {
    height: number;
    width: number;
}
type DateAxisLabelMeasurer = (text: string, font: string) => IDateAxisLabelSize;
export declare function formatDateAxisLabel(value: number, pattern?: string): string;
export declare function calculateDateAxisLabelRotate(labels: readonly string[], font: string, labelSlotWidth: number, measureText: DateAxisLabelMeasurer): number;
export {};
