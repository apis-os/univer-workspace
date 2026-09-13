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
const R=createIdentifier("ink-ui.state.service"),z={pen:{color:"#f54a45",width:2,opacity:1},brush:{color:"#f54a45",width:4,opacity:1},highlighter:{color:"#ffe928",width:14,opacity:0.45},eraser:{color:"#ffffff",width:24,opacity:1}};

export { R as IInkUIStateService };

export { z };
