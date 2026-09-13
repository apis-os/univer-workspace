import{ShapeFillEnum,ShapeLineCapEnum,ShapeLineJoinEnum,ShapeLineTypeEnum,ShapeTypeEnum}from'@univerjs-pro/engine-shape';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import{CommandType,DependentOn,ICommandService,IConfigService,Inject,Injector,Plugin,UniverInstanceType,createIdentifier,merge,toDisposable}from'@univerjs/core';
const X=createIdentifier('ink.host-adapter.service');

export { X as IInkHostAdapterService };
