import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IResourceManagerService,IUndoRedoService,IUniverInstanceService,Inject,Injector,Plugin,ThemeService,Tools,UniverInstanceType,generateRandomId,merge,sequenceExecute,touchDependencies}from'@univerjs/core';
import{AddSlideElementMutation,ISlideDrawingService,PageElementTypeEnum,PageTypeEnum,RemoveSlideElementMutation,UpdateSlideElementMutation,getSlideCommandTarget,plainTextToSlideDocumentData}from'@univerjs-pro/slides';
import{Subject}from'rxjs';
import{UniverLicensePlugin}from'@univerjs-pro/license';
const Fn=20;

export { Fn as SLIDE_TABLE_CONTROL_GUTTER };
