import { Disposable, IResourceManagerService } from '@univerjs/core';
import { IThreadCommentDataSourceService, ThreadCommentModel } from '@univerjs/thread-comment';
export declare const SLIDE_UNIVER_THREAD_COMMENT_PLUGIN = "SLIDE_UNIVER_THREAD_COMMENT_PLUGIN";
export declare class SlidesThreadCommentResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _threadCommentModel;
    private readonly _threadCommentDataSourceService;
    constructor(_resourceManagerService: IResourceManagerService, _threadCommentModel: ThreadCommentModel, _threadCommentDataSourceService: IThreadCommentDataSourceService);
}
