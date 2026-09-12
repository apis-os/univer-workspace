# @univerjs-pro/bases-dashboard

`@univerjs-pro/bases-dashboard` provides Base Pivot View calculation, Dashboard persistence, commands, Worker RPC, and Facade APIs.

## Installation

```sh
pnpm add @univerjs-pro/bases-dashboard
```

Register `UniverBaseDashboardPlugin` after the Base plugin. In a Worker runtime, register it with `notExecuteCalculation: false`; on the main thread use `true`. Omit the option to calculate in the same thread.

Import `@univerjs-pro/bases-dashboard/facade` to extend the Base Facade with Dashboard and Pivot View APIs.

The executable example below expects the active Base to contain an `orders` table with `region` and `revenue` fields.

## Facade API

The Base Facade owns Dashboard resources and Pivot View references. Pivot field configuration and calculation stay in
`@univerjs-pro/engine-pivot`; Chart models and builders stay in `@univerjs-pro/engine-chart`.

```ts
import type { FUniver } from '@univerjs/core/facade';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
import { PivotTableFiledAreaEnum } from '@univerjs-pro/engine-pivot';
import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { createFormulaShapeData } from '@univerjs-pro/shape-editor';
import {
    BaseFilterConjunction,
    BaseFilterOperator,
    ImageSourceType,
    RichTextBuilder,
} from '@univerjs/core';
import '@univerjs-pro/bases/facade';
import '@univerjs-pro/bases-dashboard/facade';

async function createSalesDashboard(univerAPI: FUniver) {
    const base = univerAPI.getActiveBase();
    if (!base) {
        throw new Error('No active Base.');
    }

    const table = base.getTableById('orders');
    if (!table) {
        throw new Error('Orders table not found.');
    }

    const pivotView = base.createPivotView('Revenue by region', table.getId(), {
        id: 'revenue-by-region',
        config: {
            chart: { type: ChartTypeBits.Column, orient: 'column' },
        },
    });

    const pivotTable = pivotView.getPivotTable();
    pivotTable.reset();
    const region = pivotTable.addFieldWithSourceId('region', PivotTableFiledAreaEnum.Row);
    const revenue = pivotTable.addFieldWithSourceId('revenue', PivotTableFiledAreaEnum.Value);
    if (!region || !revenue) {
        throw new Error('Expected region and revenue fields in the Orders table.');
    }
    if (!pivotView.updateConfig({ pivot: pivotTable.toJSON() })) {
        throw new Error('Failed to update the Pivot View.');
    }

    const dashboard = base.createDashboard('Executive overview', { id: 'executive-overview' });
    dashboard.addPivotChart(table.getId(), pivotView.getId(), {
        id: 'revenue-chart',
        layout: { column: 0, row: 0, columnSpan: 6, rowSpan: 6 },
    });
    dashboard.addTableFilter(table.getId(), {
        id: 'region-filter',
        filter: {
            conjunction: BaseFilterConjunction.AND,
            conditions: [{ fieldId: 'region', operator: BaseFilterOperator.IS, operand: 'APAC' }],
        },
        layout: { column: 6, row: 0, columnSpan: 6, rowSpan: 2 },
    });
    dashboard.addText({
        id: 'summary',
        document: RichTextBuilder.create().text('Revenue increased by 18%.').getData(),
        appearance: { backgroundColor: '#F8FAFC', textColor: '#111827', alignment: 'left' },
        layout: { column: 0, row: 6, columnSpan: 4, rowSpan: 4 },
    });
    dashboard.addImage({
        id: 'strategy-image',
        source: 'https://example.com/strategy.png',
        sourceType: ImageSourceType.URL,
        alt: 'FY26 growth strategy',
        displayMode: 'cover',
        layout: { column: 4, row: 6, columnSpan: 4, rowSpan: 4 },
    });
    dashboard.addFormulaShape(table.getId(), {
        id: 'total-revenue',
        shapeType: ShapeTypeEnum.RoundRect,
        shapeData: createFormulaShapeData({ formula: '=SUM(Orders[Revenue])' }),
        appearance: { backgroundColor: '#EEF2FF', textColor: '#4338CA', alignment: 'center' },
        layout: { column: 8, row: 6, columnSpan: 4, rowSpan: 4 },
    });
    dashboard.moveWidget('total-revenue', 0);

    return pivotView.calculate();
}
```

For a regular hosted Chart, keep using the Engine Chart Facade, for example
`worksheet.newChart(type).setSource(range).build()` followed by `worksheet.insertChart(chartInfo)`. Dashboard Charts do
not duplicate that host lifecycle: they reference a Base Pivot View and may store Dashboard-local presentation
overrides only.
