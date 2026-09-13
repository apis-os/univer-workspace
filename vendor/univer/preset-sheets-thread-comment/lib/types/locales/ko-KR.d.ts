declare const _default: {
    'sheets-thread-comment-ui': {
        panel: {
            title: string;
        };
        permission: {
            commentErr: string;
        };
        menu: {
            addComment: string;
            openComments: string;
            commentManagement: string;
        };
    };
} & {
    'thread-comment-ui': {
        panel: {
            empty: string;
            reset: string;
            addComment: string;
            solved: string;
        };
        editor: {
            placeholder: string;
            reply: string;
            cancel: string;
            save: string;
        };
        item: {
            edit: string;
            delete: string;
            more: string;
        };
        filter: {
            sheet: {
                all: string;
                current: string;
            };
            status: {
                all: string;
                resolved: string;
                unsolved: string;
                concernMe: string;
            };
        };
    };
};
export default _default;
