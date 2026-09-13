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
function ln(var_core_value_sig7524) {
  switch (var_core_value_sig7524) {
    case collaborationStatus.OFFLINE:
      return {
        'icon': jsx(offLineIcon, {}),
        'colorClass': "univer-text-red-500",
        'i18nKey': 'collaboration-client-ui.collabStatus.offline',
        'tooltipKey': "collaboration-client-ui.collabClient.tooltip.reconnect",
        'clickable': true,
        'indicator': "static"
      };
    case collaborationStatus.CONFLICT:
      return {
        'icon': jsx(offLineIcon, {}),
        'colorClass': "univer-text-orange-500",
        'i18nKey': "collaboration-client-ui.collabStatus.conflict",
        'clickable': false,
        'indicator': "static"
      };
    case collaborationStatus.FETCH_MISS:
      return {
        'icon': jsx(loadingMultiIcon, {}),
        'colorClass': "univer-text-blue-500",
        'i18nKey': 'collaboration-client-ui.collabStatus.fetchMiss',
        'clickable': false,
        'indicator': "spin"
      };
    case collaborationStatus.NOT_COLLAB:
      return {
        'icon': jsx(onLineIcon, {}),
        'colorClass': "univer-text-gray-400",
        'i18nKey': "collaboration-client-ui.collabStatus.notCollab",
        'clickable': false,
        'indicator': 'static'
      };
    case collaborationStatus.AWAITING:
    case collaborationStatus.AWAITING_WITH_PENDING:
      return {
        'icon': jsx(loadingMultiIcon, {}),
        'colorClass': "univer-text-blue-500",
        'i18nKey': "collaboration-client-ui.collabStatus.syncing",
        'clickable': false,
        'indicator': 'spin'
      };
    case collaborationStatus.PENDING:
      return {
        'icon': jsx(loadingMultiIcon, {}),
        'colorClass': 'univer-text-blue-500',
        'i18nKey': "collaboration-client-ui.collabStatus.syncing",
        'clickable': false,
        'indicator': "spin"
      };
    case collaborationStatus.SYNCED:
      return {
        'icon': jsx(onLineIcon, {}),
        'colorClass': "univer-text-green-500",
        'i18nKey': "collaboration-client-ui.collabStatus.synced",
        'clickable': false,
        'indicator': "static"
      };
  }
}
function un(var_core_value_sigE7991) {
  let {
      status$: var_core_value_sigB6012
    } = var_core_value_sigE7991,
    var_core_value_sig8B71 = useObservable(var_core_value_sigB6012, collaborationStatus.NOT_COLLAB),
    targetObj306 = useDependency(localeService),
    options54 = useDependency(collaborationSessionService),
    targetObj307 = useMemo(() => ln(var_core_value_sig8B71), [var_core_value_sig8B71]),
    isFlag2 = var_core_value_sig8B71 !== collaborationStatus.OFFLINE,
    strVal17 = targetObj306.t(targetObj307.i18nKey),
    var_core_value_sig9F76 = targetObj307.tooltipKey ? targetObj306.t(targetObj307.tooltipKey) : strVal17,
    var_core_value_sigB008 = useCallback(() => {
      isFlag2 || options54.reconnect();
    }, [isFlag2, options54]),
    var_core_value_sig8721 = useCallback(targetObj134 => {
      !isFlag2 && (targetObj134.key === "Enter" || targetObj134.key === '\x20') && (targetObj134.preventDefault(), options54.reconnect());
    }, [isFlag2, options54]),
    var_core_value_sig08BA = jsx("span", {
      'className': clsx("univer-flex univer-items-center univer-justify-center", 'univer-text-xl\x20univer-transition-colors\x20univer-duration-200', targetObj307.colorClass, {
        'univer-animate-spin': targetObj307.indicator === "spin",
        'univer-animate-pulse': targetObj307.indicator === "pulse"
      }),
      'aria-hidden': "true",
      'children': targetObj307.icon
    }),
    var_core_value_sigDBB5 = jsx('span', {
      'className': clsx('univer-flex\x20univer-items-center\x20univer-justify-center', 'univer-h-8\x20univer-w-8\x20univer-rounded-lg', "univer-transition-all univer-duration-200", 'focus:univer-outline-none\x20focus:univer-ring-2\x20focus:univer-ring-primary-500\x20focus:univer-ring-offset-2', "dark:focus:!univer-ring-offset-gray-800", {
        'univer-cursor-pointer\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700': targetObj307.clickable,
        'univer-cursor-default': !targetObj307.clickable
      }),
      'children': var_core_value_sig08BA
    });
  return targetObj307.clickable ? jsx(tooltip, {
    'title': var_core_value_sig9F76,
    'placement': "bottom",
    'children': jsx('button', {
      'type': "button",
      'onClick': var_core_value_sigB008,
      'onKeyDown': var_core_value_sig8721,
      'className': clsx("univer-inline-flex univer-items-center univer-justify-center", "univer-border-none univer-bg-transparent", 'univer-m-0\x20univer-p-0', "univer-appearance-none"),
      'aria-label': strVal17 + " - " + var_core_value_sig9F76,
      'role': "status",
      'aria-live': "polite",
      'aria-atomic': "true",
      'children': var_core_value_sigDBB5
    })
  }) : jsx(tooltip, {
    'title': var_core_value_sig9F76,
    'placement': "bottom",
    'children': jsx("div", {
      'className': clsx("univer-inline-flex univer-items-center univer-justify-center", 'univer-border-none\x20univer-bg-transparent', "univer-m-0 univer-p-0"),
      'aria-label': strVal17,
      'role': 'status',
      'aria-live': "polite",
      'aria-atomic': "true",
      'children': var_core_value_sigDBB5
    })
  });
}
let X = class extends var_core_value_sigE2BF2 {
  constructor(var_core_value_sig3767, var_core_value_sig670B, var_core_value_sig6912, var_core_value_sigE235, var_core_value_sig7664) {
    super(), this._univerInstanceService = var_core_value_sig3767, this._injector = var_core_value_sig670B, this._collaborationController = var_core_value_sig6912, this._uiPartsService = var_core_value_sigE235, this._presenceAdapterRegistry = var_core_value_sig7664, q(this, "_status$", new behaviorSubject(collaborationStatus.NOT_COLLAB)), q(this, '_presenceStatusRegistrations', new Map()), this._initStatusComponent(), this._initStatusListener(), this._initPresenceStatusComponents();
  }
  dispose() {
    this._presenceStatusRegistrations["forEach"](targetObj26 => targetObj26.dispose()), this._presenceStatusRegistrations["clear"](), this._status$["complete"](), super.dispose();
  }
  _initStatusListener() {
    this.disposeWithMe(var_core_value_sig1758(this._univerInstanceService["focused$"], this._univerInstanceService["getCurrentTypeOfUnit$"](univerInstanceType.UNIVER_DOC), this._univerInstanceService["getCurrentTypeOfUnit$"](univerInstanceType.UNIVER_SHEET)).pipe(map(() => pn(this._univerInstanceService)), var_core_value_sig2DAB(), switchMap(var_core_value_sig1537 => var_core_value_sig1537 ? this._collaborationController["getCollabEntity$"](var_core_value_sig1537) : of(null)), switchMap(targetObj27 => targetObj27 ? targetObj27.status$ : of(collaborationStatus.NOT_COLLAB))).subscribe(var_core_value_sig4313 => {
      this._status$["next"](var_core_value_sig4313);
    }));
  }
  _initStatusComponent() {
    this.disposeWithMe(this._uiPartsService["registerComponent"](builtInUIPart.HEADER_MENU, () => connectInjector(mn({
      'status$': this._status$["asObservable"]()
    }), this._injector)));
  }
  _initPresenceStatusComponents() {
    let options31 = this._presenceAdapterRegistry["adapters$"].subscribe(var_core_value_sigFC87 => {
      this._syncPresenceStatusComponents(var_core_value_sigFC87);
    });
    this.disposeWithMe(toDisposable(() => options31.unsubscribe()));
  }
  _syncPresenceStatusComponents(itemsList8) {
    let itemsMap9 = new Map(itemsList8.filter(targetObj28 => targetObj28.statusUIPart != null).map(targetObj29 => [targetObj29.unitType, targetObj29]));
    this._presenceStatusRegistrations["forEach"]((targetObj30, var_core_value_sig72F6) => {
      itemsMap9.has(var_core_value_sig72F6) || (targetObj30.dispose(), this._presenceStatusRegistrations['delete'](var_core_value_sig72F6));
    }), itemsMap9.forEach((var_core_value_sig9FBA, var_core_value_sigFE01) => {
      this._presenceStatusRegistrations["has"](var_core_value_sigFE01) || this._registerPresenceStatusComponent(var_core_value_sig9FBA);
    });
  }
  _registerPresenceStatusComponent(targetObj138) {
    let var_core_value_sigEAE5 = targetObj138.statusUIPart;
    if (!var_core_value_sigEAE5) return;
    let var_core_value_sigE94C = new disposableCollection(),
      var_core_value_sig6D47 = new behaviorSubject(collaborationStatus.NOT_COLLAB);
    var_core_value_sigE94C.add(toDisposable(() => var_core_value_sig6D47.complete())), var_core_value_sigE94C.add(this._uiPartsService["registerComponent"](var_core_value_sigEAE5, () => connectInjector(mn({
      'status$': var_core_value_sig6D47.asObservable()
    }), this._injector)));
    let options33 = this._univerInstanceService['getCurrentTypeOfUnit$'](targetObj138.unitType).pipe(map(targetObj32 => (targetObj32 == null ? undefined : targetObj32.getUnitId()) ?? null), var_core_value_sig2DAB(), switchMap(var_core_value_sig1975 => var_core_value_sig1975 ? this._collaborationController['getCollabEntity$'](var_core_value_sig1975) : of(null)), switchMap(targetObj33 => (targetObj33 == null ? undefined : targetObj33.status$) ?? of(collaborationStatus.NOT_COLLAB))).subscribe(var_core_value_sig029F => var_core_value_sig6D47.next(var_core_value_sig029F));
    var_core_value_sigE94C.add(toDisposable(() => options33.unsubscribe())), this._presenceStatusRegistrations["set"](targetObj138.unitType, var_core_value_sigE94C);
  }
};
function pn(targetObj316) {
  let targetObj317 = targetObj316.getFocusedUnit(),
    var_core_value_sigDDD7 = targetObj317 == null ? undefined : targetObj317.getUnitId();
  if (var_core_value_sigDDD7 && !isInternalEditorID(var_core_value_sigDDD7)) return var_core_value_sigDDD7;
  let targetObj318 = targetObj316.getCurrentUnitOfType(univerInstanceType.UNIVER_DOC),
    var_core_value_sig443C2 = targetObj318 == null ? undefined : targetObj318.getUnitId();
  if (var_core_value_sig443C2 && !isInternalEditorID(var_core_value_sig443C2)) return var_core_value_sig443C2;
  let targetObj319 = targetObj316.getCurrentUnitOfType(univerInstanceType.UNIVER_SHEET);
  if (targetObj319) return targetObj319.getUnitId();
  let targetObj320 = targetObj316.getAllUnitsForType(univerInstanceType.UNIVER_DOC).find(targetObj140 => !isInternalEditorID(targetObj140.getUnitId()));
  return targetObj320 ? targetObj320.getUnitId() : null;
}
function mn(var_core_value_sigB4B42) {
  let {
    status$: var_core_value_sigD4072
  } = var_core_value_sigB4B42;
  return function () {
    return jsx(un, {
      'status$': var_core_value_sigD4072
    });
  };
}
export { X as DesktopCollaborationStatusDisplayController };
