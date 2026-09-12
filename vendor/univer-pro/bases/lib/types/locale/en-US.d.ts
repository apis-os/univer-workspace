declare const locale: {
    bases: {
        fieldType: {
            text: string;
            singleSelect: string;
            multiSelect: string;
            person: string;
            group: string;
            date: string;
            attachment: string;
            number: string;
            checkbox: string;
            link: string;
            formula: string;
            lookup: string;
            flow: string;
            button: string;
            numbering: string;
            phone: string;
            email: string;
            location: string;
            barcode: string;
            progress: string;
            currency: string;
            rating: string;
            recordLink: string;
            recordId: string;
            createdBy: string;
            updatedBy: string;
            createdAt: string;
            updatedAt: string;
            summary: string;
        };
        fieldConfig: {
            textPlaceholder: string;
            linkPlaceholder: string;
        };
        viewType: {
            grid: string;
            kanban: string;
            calendar: string;
            gantt: string;
            gallery: string;
        };
        error: {
            fieldNameRequired: string;
            invalidFieldType: string;
            invalidCellValue: string;
            invalidKanbanGroupField: string;
            invalidCalendarDateField: string;
            invalidGanttDateField: string;
        };
        command: {
            updateCell: string;
            createField: string;
            deleteField: string;
            createRecord: string;
            deleteRecord: string;
            updateViewConfig: string;
        };
    };
};
export default locale;
