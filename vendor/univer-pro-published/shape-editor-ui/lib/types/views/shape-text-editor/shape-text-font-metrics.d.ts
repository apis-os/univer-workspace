import type { IDisposable } from '@univerjs/core';
import type { Observable } from 'rxjs';
/** Observe font cycles on render frames, including browsers without font load events. */
export declare function observeShapeTextFontMetrics(frames$: Observable<unknown>, onChange: (metricsChanged: boolean) => void): IDisposable;
