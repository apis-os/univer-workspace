# @univerjs-pro/sheets-history-ui

Sheets ribbon and UI integration for Univer Pro version history.

## History service configuration

Configure `historyServerUrl` when registering the plugin after the host's Sheets and collaboration
plugins. This is the same option used by Docs, Slides, Bases and Boards history UI plugins.

```ts
import { UniverSheetsHistoryUIPlugin } from '@univerjs-pro/sheets-history-ui';

univer.registerPlugin(UniverSheetsHistoryUIPlugin, {
    historyServerUrl: '/universer-api/history',
    univerContainerId: 'univer-container',
});
```

The URL is the prefix for the existing history list, creator and changeset endpoints. This option
does not change the server API. Both desktop and mobile history viewers use it.

If omitted, the default is `/universer-api/history`.
