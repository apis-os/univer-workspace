import type { EChartSpec, IChartRenderInput, IChartRenderInstanceCreateContext } from '../../../types';
import type { EChartRenderModel } from './echart-render-model';
import { BaseChartRenderInstance } from './base-chart-render-instance';
export declare class ImageChartInstance extends BaseChartRenderInstance {
    constructor(renderModel: EChartRenderModel, context?: IChartRenderInstanceCreateContext<EChartSpec>);
    render(input: IChartRenderInput): Promise<void>;
}
