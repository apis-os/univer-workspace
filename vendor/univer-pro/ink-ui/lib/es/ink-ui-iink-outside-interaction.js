import{UniverInkPlugin}from"@univerjs-pro/ink";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{DependentOn,Disposable,IConfigService,Inject,Injector,LocaleService,Plugin,UniverInstanceType,createIdentifier,merge,toDisposable}from"@univerjs/core";
import{BuiltInUIPart,IUIPartsService,connectInjector,useDependency,useObservable}from"@univerjs/ui";
import{BehaviorSubject}from"rxjs";
import{ShapeFloatingToolbarMenuPanel}from"@univerjs-pro/shape-editor-ui";
import{Button,ColorPicker,Dropdown,Separator,Tooltip,clsx}from"@univerjs/design";
import{CloseIcon,ColorWheelMultiIcon,MoreDownIcon,StrokeSize1Icon,StrokeSize2Icon,StrokeSize3Icon,StrokeSize4Icon,StrokeSize5Icon}from"@univerjs/icons";
import{useState}from"react";
import{jsx,jsxs}from"react/jsx-runtime";
const W=createIdentifier("ink-ui.outside-interaction.service"),G=["[data-ink-floating-toolbar=\x22true\x22]",'[data-ink-floating-toolbar-popup="true"]','[data-ink-interactive-region="true"]'];

export { W as IInkOutsideInteractionService };

export { G };
