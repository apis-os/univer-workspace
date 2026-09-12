import { Disposable, IResourceManagerService } from '@univerjs/core';
import { IThreadCommentDataSourceService, ThreadCommentModel } from '@univerjs/thread-comment';
export declare const BASE_UNIVER_THREAD_COMMENT_PLUGIN = "BASE_UNIVER_THREAD_COMMENT_PLUGIN";
export declare class BasesThreadCommentResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _threadCommentModel;
    private readonly _threadCommentDataSourceService;
    constructor(_resourceManagerService: IResourceManagerService, _threadCommentModel: ThreadCommentModel, _threadCommentDataSourceService: IThreadCommentDataSourceService);
}
