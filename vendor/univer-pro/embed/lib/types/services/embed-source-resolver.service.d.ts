import type { IEmbedResolvedSource, IEmbedSource } from '../types/embed';
import { EMBED_CHILD_CREATE_OPTIONS } from '../common/const';
export { EMBED_CHILD_CREATE_OPTIONS };
export interface IEmbedSourceResolveContext {
    hostUnitId?: string;
    embedId?: string;
}
export declare class EmbedSourceResolverService {
    resolve(source: IEmbedSource): IEmbedResolvedSource;
}
