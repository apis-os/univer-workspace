import { UniverCollaborationPlugin } from "@univerjs-pro/collaboration";
import { UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { BrowserCollaborationSocketService, UniverCollaborationClientUIPlugin } from "@univerjs-pro/collaboration-client-ui";
import { UniverSheetsHistoryUIPlugin } from "@univerjs-pro/sheets-history-ui";
import "@univerjs-pro/collaboration-client/facade";
import "@univerjs-pro/collaboration-client-ui/facade";

export * from "@univerjs-pro/collaboration"

export * from "@univerjs-pro/collaboration-client"

export * from "@univerjs-pro/collaboration-client-ui"

//#region src/preset.ts
function transformUrlProtocolToWs(url) {
	const wsUrl = new URL(url, window.location.origin);
	switch (wsUrl.protocol) {
		case "https:":
			wsUrl.protocol = "wss:";
			break;
		case "http:":
			wsUrl.protocol = "ws:";
			break;
	}
	return wsUrl.toString();
}
/**
* This preset add collaboration features, including collaboration editing, collaboration cursors,
* and history into your application.
* To use this plugin, you should import {@link UniverSheetsAdvancedPreset} first.
*
* @param {Partial<IUniverSheetsCollaborationPresetConfig>} config - The configuration object.
*/
function UniverSheetsCollaborationPreset(config = {}) {
	const { universerEndpoint, univerContainerId = "app", enableOfflineEditing = true, enableSingleActiveInstanceLock = true, enableFrontendLog = false, historyWorkerURL: workerURL } = config;
	const serverEndpoint = universerEndpoint ?? `${window.location.protocol}//${window.location.host}`;
	return { plugins: [
		UniverCollaborationPlugin,
		[UniverCollaborationClientPlugin, {
			socketService: BrowserCollaborationSocketService,
			enableOfflineEditing,
			enableSingleActiveInstanceLock,
			enableAuthServer: true,
			authzUrl: `${serverEndpoint}/universer-api/authz`,
			snapshotServerUrl: `${serverEndpoint}/universer-api/snapshot`,
			collabSubmitChangesetUrl: `${serverEndpoint}/universer-api/comb`,
			collabWebSocketUrl: transformUrlProtocolToWs(`${serverEndpoint}/universer-api/comb/connect`),
			loginUrlKey: `${serverEndpoint}/universer-api/oidc/authpage`,
			uploadFileServerUrl: `${serverEndpoint}/universer-api/stream/file/upload`,
			signUrlServerUrl: `${serverEndpoint}/universer-api/file/{fileID}/sign-url`,
			downloadEndpointUrl: `${serverEndpoint}/`,
			wsSessionTicketUrl: `${serverEndpoint}/universer-api/user/session-ticket`,
			startFormulaLimitUrl: `${serverEndpoint}/universer-api/license/formula/limit/start`,
			getFormulaLimitStatusUrl: `${serverEndpoint}/universer-api/license/formula/limit/status`,
			releaseFormulaLimitUrl: `${serverEndpoint}/universer-api/license/formula/limit/done`,
			sendChangesetTimeout: 200
		}],
		[UniverCollaborationClientUIPlugin, { enableFrontendLog }],
		[UniverSheetsHistoryUIPlugin, {
			univerContainerId,
			historyServerUrl: `${serverEndpoint}/universer-api/history`,
			workerURL
		}]
	] };
}

//#endregion
export { UniverSheetsCollaborationPreset };