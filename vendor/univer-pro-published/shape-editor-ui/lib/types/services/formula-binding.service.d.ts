import type { IReferencedUnitCatalogService, IResourceRef } from '@univerjs-pro/embed';
import type { IReferencedUnitViewerSession } from '@univerjs-pro/embed-unit-ui';
import type { IDisposable } from '@univerjs/core';
import type { FormulaSequenceNode, IFormulaRefSelection } from '@univerjs/engine-formula';
import type { IFormulaBindingHost } from '../config/config';
import type { IFormulaBindingReferenceSelectionChange } from './formula-binding-editor';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { IUniverInstanceService, ThemeService } from '@univerjs/core';
export interface IFormulaBindingContext {
    formula: string;
    refSelections: IFormulaRefSelection[];
    selectionEnd: number;
    selectionStart: number;
    sequenceNodes: FormulaSequenceNode[];
}
export interface IFormulaBindingOptions {
    host: IFormulaBindingHost;
    onSelectReferences(change: IFormulaBindingReferenceSelectionChange): void;
}
export interface IFormulaBinding extends IDisposable {
    updateFormulaContext(context: IFormulaBindingContext): void;
}
export declare class FormulaBindingService {
    private readonly _catalog;
    private readonly _themeService;
    private readonly _externalReferenceModel;
    private readonly _instanceService;
    constructor(_catalog: IReferencedUnitCatalogService, _themeService: ThemeService, _externalReferenceModel: HostExternalReferenceModel, _instanceService: IUniverInstanceService);
    resolveInitialResourceRef(host: IFormulaBindingHost, sequenceNodes: FormulaSequenceNode[]): {
        ref?: IResourceRef;
        required: boolean;
    };
    bind(session: IReferencedUnitViewerSession, options: IFormulaBindingOptions): IFormulaBinding;
}
