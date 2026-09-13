import type { IFormulaResultPresentation } from '@univerjs-pro/engine-formula';
import type { DocumentDataModel } from '@univerjs/core';
import type { IOtherFormulaResult } from '@univerjs/engine-formula';
import type { IDocFormulaConfig, IDocFormulaResult } from '../common/type';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { Disposable } from '@univerjs/core';
import { RegisterOtherFormulaService } from '@univerjs/engine-formula';
import { DocFormulaModel } from '../models/doc-formula-model';
export interface IDocFormulaIdentity {
    unitId: string;
    rangeId: string;
}
export interface IDocFormulaPresentationChange extends IDocFormulaIdentity {
    presentation: IFormulaResultPresentation;
    previousPresentation: IFormulaResultPresentation;
    result: IDocFormulaResult;
    previousResult: IDocFormulaResult;
}
export declare class DocFormulaService extends Disposable {
    private readonly _model;
    private readonly _registrationService;
    private readonly _hostExternalReferenceModel;
    private readonly _registrations;
    private readonly _formulaKeys;
    private readonly _presentationChanged$;
    readonly presentationChanged$: import("rxjs").Observable<IDocFormulaPresentationChange>;
    constructor(_model: DocFormulaModel, _registrationService: RegisterOtherFormulaService, _hostExternalReferenceModel: HostExternalReferenceModel);
    syncUnit(document: DocumentDataModel): void;
    register(identity: IDocFormulaIdentity, config: IDocFormulaConfig): void;
    unregister(identity: IDocFormulaIdentity): void;
    unregisterUnit(unitId: string): void;
    getPresentation(identity: IDocFormulaIdentity): IFormulaResultPresentation | undefined;
    getResult(identity: IDocFormulaIdentity): IDocFormulaResult | undefined;
    getRegisteredFormulas(): readonly {
        identity: IDocFormulaIdentity;
        config: IDocFormulaConfig;
        liveResult?: IOtherFormulaResult;
        referenceRevision: number;
    }[];
    dispose(): void;
    private _updateFormulaResult;
    private _setPresentation;
    private _deleteRegistration;
}
