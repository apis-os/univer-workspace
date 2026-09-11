# @univerjs-pro/edit-history-ui

Shared version history UI for Univer Pro products.

Semantic comparison results contain stable codes rather than translated strings. Import the locale selected by the
host and translate descriptors from `@univerjs-pro/edit-history-ui` at the presentation boundary:

```ts
import { getUnitComparisonEntityLabel } from "@univerjs-pro/edit-history-ui";
import enUS from "@univerjs-pro/edit-history-ui/locale/en-US";
import { UnitComparisonEntityType } from "@univerjs-pro/edit-history";
import { Injector, LocaleService, LocaleType } from "@univerjs/core";

const injector = new Injector([[LocaleService]]);
const localeService = injector.get(LocaleService);
localeService.load({ [LocaleType.EN_US]: enUS });
localeService.setLocale(LocaleType.EN_US);

const descriptor = getUnitComparisonEntityLabel(UnitComparisonEntityType.PARAGRAPH);
const label = localeService.t(descriptor.key, ...(descriptor.args ?? []));
injector.dispose();
```

Applications retain ownership of workflow copy such as Worktree selection, merge, and discard.
