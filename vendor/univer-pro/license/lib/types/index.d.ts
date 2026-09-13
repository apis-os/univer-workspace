export { getGlobalObject } from './common/global';
export { ReleaseType } from './common/type';
export { getDocFeatureLimit, getSheetFeatureLimit, isFeatureAuthorizedWithinTime, isLocalCheck } from './common/util';
export type { IUniverLicenseConfig } from './config/config';
export { LS_CONFIG_KEY } from './config/config';
export { getLicenseInfo } from './generated/verify-license.generated';
export { UniverLicensePlugin } from './plugin';
export { WORKER_INIT_LICENSE } from './util';
