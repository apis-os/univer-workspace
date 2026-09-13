import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
const jv = "univer-pdf-editor-local",
  Mv = 1,
  Nv = '#2563eb';
export { jv as PDF_EDITOR_LOCAL_STATE_SCHEMA, Mv as PDF_EDITOR_LOCAL_STATE_SCHEMA_VERSION, Nv as PDF_EDITOR_DEFAULT_INK_COLOR };
