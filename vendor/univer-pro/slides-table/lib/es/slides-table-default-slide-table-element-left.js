import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
const et = 120,
  tt = 80,
  nt = 0,
  rt = 3,
  it = 3,
  at = 36;
export { et as DEFAULT_SLIDE_TABLE_ELEMENT_LEFT, tt as DEFAULT_SLIDE_TABLE_ELEMENT_TOP, nt as DEFAULT_SLIDE_TABLE_ELEMENT_ROTATION, rt as DEFAULT_SLIDE_TABLE_ROW_COUNT, it as DEFAULT_SLIDE_TABLE_COLUMN_COUNT, at as DEFAULT_SLIDE_TABLE_ROW_HEIGHT };
