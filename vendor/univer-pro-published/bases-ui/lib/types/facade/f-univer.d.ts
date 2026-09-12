import { FUniver } from '@univerjs/core/facade';
import { FBaseUI } from './f-base-ui';
export interface IFUniverBaseUIMixin {
    getBaseUI(): FBaseUI;
}
export declare class FUniverBaseUIMixin extends FUniver implements IFUniverBaseUIMixin {
    getBaseUI(): FBaseUI;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverBaseUIMixin {
    }
}
