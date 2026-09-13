export { UpdateSlidePageBackgroundMutationWithSelf } from './background.algo';
export { RemoveSlideChartDataSourceMutationWithResource, RemoveSlideChartDataSourceMutationWithSelf, RemoveSlideChartSnapshotMutationWithResource, RemoveSlideChartSnapshotMutationWithSelf, } from './chart-resource.algo';
export { SetSlideDrawingApplyMutationWithSelf } from './drawing-json.algo';
export { AddSlideElementMutationWithSelf, RemoveSlideElementMutationWithOthers, UpdateSlideElementMutationWithSelf, } from './element.algo';
export { RemoveSlideElementMutationWithCancelGroup, RemoveSlideElementMutationWithSetGroup, SetSlideGroupMutationWithSelf, } from './group.algo';
export { RemoveSlideElementMutationWithOrder } from './order.algo';
export { AddSlidePageMutationWithSelf, MoveSlidePageMutationWithSelf, RemoveSlidePageMutationWithOthers, } from './page.algo';
export { RemoveSlideTableMutationWithResource, RemoveSlideTableMutationWithSelf } from './table-resource.algo';
export declare const SLIDE_ALL_ALGORITHMS: import("../../../services/transform/transform.service").IMutationTransformAlgorithm<any, any>[];
