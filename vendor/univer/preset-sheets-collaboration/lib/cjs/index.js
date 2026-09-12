Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_pro_collaboration = require("@univerjs-pro/collaboration");
let _univerjs_pro_collaboration_client = require("@univerjs-pro/collaboration-client");
let _univerjs_pro_collaboration_client_ui = require("@univerjs-pro/collaboration-client-ui");
let _univerjs_pro_sheets_history_ui = require("@univerjs-pro/sheets-history-ui");
require("@univerjs-pro/collaboration-client/facade");
require("@univerjs-pro/collaboration-client-ui/facade");

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
		_univerjs_pro_collaboration.UniverCollaborationPlugin,
		[_univerjs_pro_collaboration_client.UniverCollaborationClientPlugin, {
			socketService: _univerjs_pro_collaboration_client_ui.BrowserCollaborationSocketService,
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
		[_univerjs_pro_collaboration_client_ui.UniverCollaborationClientUIPlugin, { enableFrontendLog }],
		[_univerjs_pro_sheets_history_ui.UniverSheetsHistoryUIPlugin, {
			univerContainerId,
			historyServerUrl: `${serverEndpoint}/universer-api/history`,
			workerURL
		}]
	] };
}

//#endregion
exports.UniverSheetsCollaborationPreset = UniverSheetsCollaborationPreset;
Object.keys(_univerjs_pro_collaboration).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_collaboration[k]; }
  });
});

Object.keys(_univerjs_pro_collaboration_client).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_collaboration_client[k]; }
  });
});

Object.keys(_univerjs_pro_collaboration_client_ui).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return _univerjs_pro_collaboration_client_ui[k]; }
  });
});
