import { COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY as cOLLABORATION_CLIENT_PLUGIN_CONFIG_KEY, CollaborationController as collaborationController, CollaborationSessionService as collaborationSessionService, CollaborationSocketService as collaborationSocketService, CollaborationStatus as collaborationStatus, CollaborationUIEventId as collaborationUIEventId, CollaborationUIEventService as collaborationUIEventService, DEFAULT_REMOTE_UNISCRIPT_EXECUTION_ENDPOINT as dEFAULT_REMOTE_UNISCRIPT_EXECUTION_ENDPOINT, DEFAULT_WS_SESSION_TICKET_URL as dEFAULT_WS_SESSION_TICKET_URL, DataLoaderService as dataLoaderService, DocCollaborationEntity as docCollaborationEntity, ILocalCacheService as iLocalCacheService, LOCAL_CACHE_INTERVAL as lOCAL_CACHE_INTERVAL, LOCAL_CACHE_INTERVAL_KEY as lOCAL_CACHE_INTERVAL_KEY, MemberService as memberService, REMOTE_UNISCRIPT_EXECUTION_ENDPOINT_KEY as rEMOTE_UNISCRIPT_EXECUTION_ENDPOINT_KEY, SessionStatus as sessionStatus, UnitStatus as unitStatus, UniverCollaborationClientPlugin as univerCollaborationClientPlugin, getLocalCacheKey } from '@univerjs-pro/collaboration-client';
import { COLORS as cOLORS, CanceledError as canceledError, ColorKit as colorKit, CommandType as commandType, DOC_RANGE_TYPE as dOC_RANGE_TYPE, DependentOn as dependentOn, Disposable as disposable, DisposableCollection as disposableCollection, ICommandService as iCommandService, IConfigService as iConfigService, IImageIoService as iImageIoService, ILocalStorageService as iLocalStorageService, ILogService as iLogService, IUniverInstanceService as iUniverInstanceService, Inject as inject, Injector as injector, LocaleService as localeService, Plugin as plugin, Rectangle as rectangle, RxDisposable as rxDisposable, ThemeService as themeService, Tools as tools, UniverInstanceType as univerInstanceType, Workbook as workbook, createIdentifier, debounce, fromEventSubject, generateRandomId, isFormulaId, isFormulaString, isInternalEditorID, merge, mergeOverrideWithDependencies, registerDependencies, toDisposable, touchDependencies } from '@univerjs/core';
import { BuiltInUIPart as builtInUIPart, IBeforeCloseService as iBeforeCloseService, IMessageService as iMessageService, INotificationService as iNotificationService, IUIPartsService as iUIPartsService, IUnitPresenceUIAdapterRegistry as iUnitPresenceUIAdapterRegistry, connectInjector, useDependency, useObservable } from '@univerjs/ui';
import { BehaviorSubject as behaviorSubject, Subject as subject, combineLatest, debounceTime, distinctUntilChanged, filter, fromEvent, mapTo, merge as var_core_value_sig1758, of, shareReplay, switchMap, takeUntil, throttle, timer } from 'rxjs';
import { distinctUntilChanged as var_core_value_sig2DAB, filter as var_core_value_sig877E, map, switchMap as var_core_value_sigE9A7, takeUntil as var_core_value_sigBECE, throttleTime } from 'rxjs/operators';
import { Button as button, MessageType as messageType, Tooltip as tooltip, clsx } from '@univerjs/design';
import { LoadingMultiIcon as loadingMultiIcon, OffLineIcon as offLineIcon, OnLineIcon as onLineIcon, WarningIcon as warningIcon } from '@univerjs/icons';
import { createElement, useCallback, useMemo } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { CollaborationEvent as collaborationEvent, ISnapshotServerService as iSnapshotServerService, ITransformService as iTransformService, RevisionService as revisionService, SnapshotLoadStage as snapshotLoadStage, SnapshotLoadingService as snapshotLoadingService, UniverCollaborationPlugin as univerCollaborationPlugin, isTransformMutationFailure, isTransformMutationsWithChangesetSuccess } from '@univerjs-pro/collaboration';
import { UniverLicensePlugin as univerLicensePlugin } from '@univerjs-pro/license';
import { DocSelectionManagerService as docSelectionManagerService, DocSkeletonManagerService as docSkeletonManagerService, DocStateChangeManagerService as docStateChangeManagerService, RichTextEditingMutation as richTextEditingMutation, SetTextSelectionsOperation as setTextSelectionsOperation, UniverDocsPlugin as univerDocsPlugin } from '@univerjs/docs';
import { DocIMEInputManagerService as docIMEInputManagerService, IDocClipboardService as iDocClipboardService, NodePositionConvertToCursor as nodePositionConvertToCursor, NodePositionConvertToRectRange as nodePositionConvertToRectRange, SetDocZoomRatioOperation as setDocZoomRatioOperation, TEXT_RANGE_LAYER_INDEX as tEXT_RANGE_LAYER_INDEX, UniverDocsUIPlugin as univerDocsUIPlugin } from '@univerjs/docs-ui';
import { DocumentSkeletonPageType as documentSkeletonPageType, IRenderManagerService as iRenderManagerService, Rect as rect, RegularPolygon as regularPolygon, SHEET_VIEWPORT_KEY as sHEET_VIEWPORT_KEY, Shape as shape, TRANSFORM_CHANGE_OBSERVABLE_TYPE as tRANSFORM_CHANGE_OBSERVABLE_TYPE, UniverRenderEnginePlugin as univerRenderEnginePlugin, Vector2 as vector2, getColor, getDocumentSkeletonColumnPagePathInfo } from '@univerjs/engine-render';
import { HTTPService as hTTPService, ISocketService as iSocketService, UniverNetworkPlugin as univerNetworkPlugin, WebSocketService as webSocketService } from '@univerjs/network';
import { FormulaExecuteStageType as formulaExecuteStageType, FormulaExecutedStateType as formulaExecutedStateType, SetFormulaCalculationNotificationMutation as setFormulaCalculationNotificationMutation, SetFormulaCalculationStartMutation as setFormulaCalculationStartMutation, deserializeRangeWithSheet, serializeRangeWithSheet } from '@univerjs/engine-formula';
import { EffectRefRangId as effectRefRangId, RefRangeService as refRangeService, SetSelectionsOperation as setSelectionsOperation, SetWorksheetActivateCommand as setWorksheetActivateCommand, SheetsSelectionsService as sheetsSelectionsService, handleDeleteRangeMoveLeft, handleDeleteRangeMoveUp, handleIRemoveCol, handleIRemoveRow, handleInsertCol, handleInsertRangeMoveDown, handleInsertRangeMoveRight, handleInsertRow, handleMoveRange, runRefRangeMutations } from '@univerjs/sheets';
import { SheetSkeletonManagerService as sheetSkeletonManagerService, getCoordByCell, getSheetObject } from '@univerjs/sheets-ui';
import { ErrorCode as errorCode } from '@univerjs/protocol';
import { q, var_core_value_sigE2BF2 } from "./internal-glue.js";
const fr = 30000,
  pr = "ACTIVE_UNIT_EVENT_CHANNEL";
var mr = class extends var_core_value_sigE2BF2 {
  constructor() {
    super(), q(this, "_id", generateRandomId()), q(this, "_selfUnitIDs", new Set()), q(this, '_unitOnClients', new Map()), q(this, "_heartbeatTimer", null), q(this, "_clearOtherTimers", new Map()), q(this, "_unitStatus", new Map()), this._init();
  }
  dispose() {
    super.dispose(), this._clearOtherTimers["forEach"]((var_core_value_sig5241, var_core_value_sigC6E5) => this._removeClearOtherTimer(var_core_value_sigC6E5)), this._heartbeatTimer && window.clearInterval(this._heartbeatTimer);
  }
  getUnitStatus$(var_core_value_sig7E322) {
    return this._ensureSubject(var_core_value_sig7E322).pipe(distinctUntilChanged());
  }
  editingUnit(var_core_value_sig4C07) {
    this._selfUnitIDs['size'] === 0 && this._scheduleHeartbeat(), this._selfUnitIDs["add"](var_core_value_sig4C07), this._send({
      'type': 0,
      'memberID': this._id,
      'unitIDs': [var_core_value_sig4C07],
      'isForwarded': false
    });
  }
  disposeUnit(var_core_value_sig79AB) {
    this._selfUnitIDs['delete'](var_core_value_sig79AB), this._selfUnitIDs["size"] === 0 && this._heartbeatTimer && window.clearInterval(this._heartbeatTimer);
  }
  _init() {
    this.disposeWithMe(toDisposable(fromEvent(window, 'storage').subscribe(targetObj128 => {
      if (targetObj128.key !== pr || !targetObj128.newValue) return;
      let targetObj129 = JSON.parse(targetObj128.newValue);
      this._handleEvent(targetObj129);
    }))), window.addEventListener("unload", () => this._send({
      'type': 1,
      'memberID': this._id,
      'unitIDs': Array.from(this._selfUnitIDs)
    }));
  }
  _handleEvent(targetObj302) {
    switch (targetObj302.type) {
      case 0:
        this._handleJoinEvent(targetObj302);
        break;
      case 1:
        this._handleLeaveEvent(targetObj302);
        break;
      case 2:
        this._handleHeartbeatEvent(targetObj302);
        break;
    }
  }
  _handleJoinEvent(var_core_value_sig104C) {
    let {
      unitIDs: itemsList40,
      memberID: var_core_value_sig90CB,
      isForwarded: var_core_value_sigBDF5
    } = var_core_value_sig104C;
    itemsList40.forEach(var_core_value_sigE4C6 => {
      if (!var_core_value_sigBDF5 && this._unitOnClients["has"](var_core_value_sigE4C6) && this._ensureSubject(var_core_value_sigE4C6).next(unitStatus.OTHER_CLIENTS_EDITING), !this._unitOnClients["has"](var_core_value_sigE4C6) || !this._unitOnClients['get'](var_core_value_sigE4C6).has(var_core_value_sig90CB)) {
        let itemsSet = this._unitOnClients["get"](var_core_value_sigE4C6) || new Set();
        itemsSet.add(var_core_value_sig90CB), this._unitOnClients["set"](var_core_value_sigE4C6, itemsSet), this._scheduleClearOtherTimer(var_core_value_sig90CB);
      }
    }), var_core_value_sigBDF5 || this._send({
      'type': 0,
      'memberID': this._id,
      'unitIDs': [...this._selfUnitIDs],
      'isForwarded': true
    });
  }
  _scheduleClearOtherTimer(var_core_value_sigACC6) {
    this._removeClearOtherTimer(var_core_value_sigACC6);
    let var_core_value_sig16142 = window.setTimeout(() => {
      this._unitOnClients["forEach"](itemsMap2 => {
        itemsMap2.delete(var_core_value_sigACC6);
      });
    }, fr * 2);
    this._clearOtherTimers["set"](var_core_value_sigACC6, var_core_value_sig16142);
  }
  _removeClearOtherTimer(var_core_value_sig85C3) {
    if (this._clearOtherTimers["has"](var_core_value_sig85C3)) {
      let var_core_value_sig43132 = this._clearOtherTimers['get'](var_core_value_sig85C3);
      var_core_value_sig43132 && window.clearTimeout(var_core_value_sig43132), this._clearOtherTimers['set'](var_core_value_sig85C3, null);
    }
  }
  _handleLeaveEvent(var_core_value_sigB996) {
    let {
      memberID: var_core_value_sig4BBA2,
      unitIDs: itemsList42
    } = var_core_value_sigB996;
    itemsList42.forEach(var_core_value_sigFC872 => {
      var targetObj132;
      let itemsMap7 = this._unitOnClients["get"](var_core_value_sigFC872);
      itemsMap7 && (itemsMap7.delete(var_core_value_sig4BBA2), (targetObj132 = this._ensureSubject(var_core_value_sigFC872)) == null || targetObj132.next(itemsMap7.size === 0 ? unitStatus.NO_OTHER_CLIENTS_EDITING : unitStatus.OTHER_CLIENTS_EDITING));
    }), this._removeClearOtherTimer(var_core_value_sig4BBA2);
  }
  _handleHeartbeatEvent(targetObj304) {
    this._scheduleClearOtherTimer(targetObj304.memberID);
  }
  _send(var_core_value_sigB542) {
    localStorage.setItem(pr, JSON.stringify(var_core_value_sigB542));
  }
  _scheduleHeartbeat() {
    this._heartbeatTimer = window.setInterval(() => {
      this._send({
        'type': 2,
        'memberID': this._id
      });
    }, fr);
  }
  _ensureSubject(var_core_value_sigBB6C1) {
    return this._unitStatus['has'](var_core_value_sigBB6C1) || this._unitStatus["set"](var_core_value_sigBB6C1, new behaviorSubject(unitStatus.NO_OTHER_CLIENTS_EDITING)), this._unitStatus["get"](var_core_value_sigBB6C1);
  }
};
export { mr as WebBrowserSingleActiveUnitService };
