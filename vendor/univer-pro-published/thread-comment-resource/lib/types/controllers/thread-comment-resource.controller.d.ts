import { IThreadCommentDataSourceService } from '@univerjs/thread-comment';
import { ThreadCommentServerDataSource } from './comment.data-source';
export declare class ThreadCommentResourceController {
    private readonly _dataSource;
    private readonly _threadCommentDataSourceService;
    constructor(_dataSource: ThreadCommentServerDataSource, _threadCommentDataSourceService: IThreadCommentDataSourceService);
    init(): void;
}
