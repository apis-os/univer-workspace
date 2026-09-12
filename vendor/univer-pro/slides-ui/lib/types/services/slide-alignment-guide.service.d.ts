import type { BaseObject } from '@univerjs/engine-render';
import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
export interface ISlideAlignmentGuideTransformEvent {
    unitId: string;
    objects: Map<string, BaseObject>;
    phase: 'start' | 'move' | 'end';
}
export interface ISlideAlignmentGuideService {
    readonly transform$: Observable<ISlideAlignmentGuideTransformEvent>;
    start(unitId: string, objects: Map<string, BaseObject>): void;
    move(unitId: string, objects: Map<string, BaseObject>): void;
    end(unitId: string, objects: Map<string, BaseObject>): void;
}
export declare const ISlideAlignmentGuideService: import("@wendellhu/redi").IdentifierDecorator<ISlideAlignmentGuideService>;
export declare class SlideAlignmentGuideService extends Disposable implements ISlideAlignmentGuideService {
    private readonly _transform$;
    readonly transform$: Observable<ISlideAlignmentGuideTransformEvent>;
    start(unitId: string, objects: Map<string, BaseObject>): void;
    move(unitId: string, objects: Map<string, BaseObject>): void;
    end(unitId: string, objects: Map<string, BaseObject>): void;
    dispose(): void;
}
