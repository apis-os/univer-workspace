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
import { X } from "./collaboration-client-ui-desktop-collaboration-status-display.js";
import { $, Dn, Gn, In, Jn, Pn, Q, Tn, Un, Wn, Yn, Z, cr, er, ir, qn, sr, tr, wn, xn, yn } from "./collaboration-client-ui-collaboration-client-uiplugin.js";
import { Kn } from "./collaboration-client-ui-iurlservice.js";
import { ur } from "./collaboration-client-ui-browser-collaboration-socket.js";
import { dr } from "./collaboration-client-ui-remote-uniscript.js";
function K(var_core_value_sigFEAB) {
  '@babel/helpers - typeof';

  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigCFAC) {
    return typeof var_core_value_sigCFAC;
  } : function (targetObj136) {
    return targetObj136 && typeof Symbol == "function" && targetObj136.constructor === Symbol && targetObj136 !== Symbol.prototype ? "symbol" : typeof targetObj136;
  }, K(var_core_value_sigFEAB);
}
function dn(options56, var_core_value_sig3C5B2) {
  if (K(options56) != "object" || !options56) return options56;
  var targetObj310 = options56[Symbol.toPrimitive];
  if (targetObj310 !== undefined) {
    var var_core_value_sig3863 = targetObj310.call(options56, var_core_value_sig3C5B2 || 'default');
    if (K(var_core_value_sig3863) != 'object') return var_core_value_sig3863;
    throw TypeError('@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.');
  }
  return (var_core_value_sig3C5B2 === "string" ? String : Number)(options56);
}
function fn(var_core_value_sigC97C2) {
  var strVal19 = dn(var_core_value_sigC97C2, "string");
  return K(strVal19) == "symbol" ? strVal19 : strVal19 + '';
}
function q(targetObj312, var_core_value_sigE43E2, var_core_value_sigA937) {
  return (var_core_value_sigE43E2 = fn(var_core_value_sigE43E2)) in targetObj312 ? Object.defineProperty(targetObj312, var_core_value_sigE43E2, {
    'value': var_core_value_sigA937,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : targetObj312[var_core_value_sigE43E2] = var_core_value_sigA937, targetObj312;
}
function J(var_core_value_sig48DD2, var_core_value_sig5E6A) {
  return function (var_core_value_sigCAD5, var_core_value_sigE503) {
    var_core_value_sig5E6A(var_core_value_sigCAD5, var_core_value_sigE503, var_core_value_sig48DD2);
  };
}
function Y(targetObj314, var_core_value_sig9CD92, var_core_value_sigFD0C1, var_core_value_sig849B2) {
  var var_core_value_sig5F1A2 = arguments.length,
    var_core_value_sigB455 = var_core_value_sig5F1A2 < 3 ? var_core_value_sig9CD92 : var_core_value_sig849B2 === null ? var_core_value_sig849B2 = Object.getOwnPropertyDescriptor(var_core_value_sig9CD92, var_core_value_sigFD0C1) : var_core_value_sig849B2,
    callback1;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') var_core_value_sigB455 = Reflect.decorate(targetObj314, var_core_value_sig9CD92, var_core_value_sigFD0C1, var_core_value_sig849B2);else {
    for (var countVal38 = targetObj314.length - 1; countVal38 >= 0; countVal38--) (callback1 = targetObj314[countVal38]) && (var_core_value_sigB455 = (var_core_value_sig5F1A2 < 3 ? callback1(var_core_value_sigB455) : var_core_value_sig5F1A2 > 3 ? callback1(var_core_value_sig9CD92, var_core_value_sigFD0C1, var_core_value_sigB455) : callback1(var_core_value_sig9CD92, var_core_value_sigFD0C1)) || var_core_value_sigB455);
  }
  return var_core_value_sig5F1A2 > 3 && var_core_value_sigB455 && Object.defineProperty(var_core_value_sig9CD92, var_core_value_sigFD0C1, var_core_value_sigB455), var_core_value_sigB455;
}
const var_core_value_sigE2BF2 = rxDisposable;
X = Y([J(0, iUniverInstanceService), J(1, inject(injector)), J(2, inject(collaborationController)), J(3, iUIPartsService), J(4, inject(iUnitPresenceUIAdapterRegistry))], X);
var hn = "@univerjs-pro/collaboration-client-ui",
  gn = "1.0.0-insiders.20260907-70fc579";
yn = Y([J(0, iDocClipboardService), J(1, iImageIoService)], yn);
;
Tn = Y([J(2, inject(injector)), J(3, inject(xn)), J(4, inject(memberService)), J(5, inject(wn)), J(6, iTransformService), J(7, iUniverInstanceService), J(8, iCommandService)], Tn);
Dn = Y([J(2, inject(injector)), J(3, inject(xn)), J(4, inject(memberService)), J(5, iUniverInstanceService), J(6, iCommandService), J(7, inject(refRangeService))], Dn);
Z = Y([J(0, iUniverInstanceService), J(1, inject(injector)), J(2, inject(collaborationSessionService))], Z);
function On(targetObj330, var_core_value_sigEA92) {
  targetObj330.save(), targetObj330.font = "bold 13px Arial, sans-serif";
  let var_core_value_sig8FD9 = targetObj330.measureText(var_core_value_sigEA92).width;
  return targetObj330.restore(), Math.min(var_core_value_sig8FD9 + 8, 200);
}
function kn(targetObj332, targetObj333) {
  let {
    radius: var_core_value_sigA19A,
    width: countVal40,
    height: countVal41
  } = targetObj333;
  var_core_value_sigA19A ??= 0, countVal40 ??= 30, countVal41 ??= 30;
  let countVal42 = 0,
    countVal43 = 0,
    countVal44 = 0;
  countVal42 = countVal43 = countVal44 = Math.min(var_core_value_sigA19A, countVal40 / 2, countVal41 / 2), targetObj332.beginPath(), targetObj332.moveTo(countVal42, 0), targetObj332.lineTo(countVal40 - countVal43, 0), targetObj332.arc(countVal40 - countVal43, countVal43, countVal43, Math.PI * 3 / 2, 0, false), targetObj332.lineTo(countVal40, countVal41 - countVal44), targetObj332.arc(countVal40 - countVal44, countVal41 - countVal44, countVal44, 0, Math.PI / 2, false), targetObj332.lineTo(0, countVal41), targetObj332.lineTo(0, countVal42), targetObj332.arc(countVal42, countVal42, countVal42, Math.PI, Math.PI * 3 / 2, false), targetObj332.closePath(), targetObj333.fill && (targetObj332.save(), targetObj332.fillStyle = targetObj333.fill, targetObj333.fillRule === "evenodd" ? targetObj332.fill("evenodd") : targetObj332.fill(), targetObj332.restore());
}
var An = class e extends shape {
  constructor(var_core_value_sig9DC0, targetObj176) {
    super(var_core_value_sig9DC0, targetObj176), q(this, 'color', undefined), q(this, "text", undefined), this.color = targetObj176 == null ? undefined : targetObj176.color, this.text = targetObj176 == null ? undefined : targetObj176.text;
  }
  static drawWith(targetObj178, var_core_value_sigE718) {
    let {
      text: var_core_value_sigAEC8,
      color: var_core_value_sigB977
    } = var_core_value_sigE718;
    targetObj178.save(), targetObj178.font = 'bold\x2013px\x20Source\x20Han\x20Sans\x20CN';
    let var_core_value_sig2949 = targetObj178.measureText(var_core_value_sigAEC8).width;
    if (kn(targetObj178, {
      'height': 20,
      'radius': 4,
      'width': On(targetObj178, var_core_value_sigAEC8),
      'fill': var_core_value_sigB977,
      'evented': false
    }), targetObj178.fillStyle = "#FFF", var_core_value_sig2949 > 192) {
      let strVal = '',
        countVal = 0;
      for (let var_core_value_sigD9DB of var_core_value_sigAEC8) {
        let var_core_value_sigF1B2 = targetObj178.measureText(var_core_value_sigD9DB).width;
        if (countVal + var_core_value_sigF1B2 <= 192 - targetObj178.measureText("...").width) strVal += var_core_value_sigD9DB, countVal += var_core_value_sigF1B2;else {
          strVal += "...";
          break;
        }
      }
      targetObj178.fillText(strVal, 4, 15);
    } else targetObj178.fillText(var_core_value_sigAEC8, 4, 15);
    targetObj178.restore();
  }
  _draw(var_core_value_sig308A) {
    e.drawWith(var_core_value_sig308A, this);
  }
};
;
Pn = Y([J(1, inject(docSkeletonManagerService)), J(2, inject(Z)), J(3, iCommandService), J(4, inject(themeService))], Pn);
In = Y([J(1, inject(sheetSkeletonManagerService)), J(2, inject(Z)), J(3, inject(themeService))], In);
Un = Y([J(3, inject(xn)), J(4, inject(memberService)), J(5, inject(iCommandService))], Un);
Wn = Y([J(0, iUniverInstanceService), J(1, inject(injector)), J(2, inject(collaborationSessionService)), J(3, inject(iUnitPresenceUIAdapterRegistry))], Wn);
Gn = Y([J(0, iBeforeCloseService), J(1, iLocalCacheService), J(2, inject(collaborationUIEventService)), J(3, iMessageService), J(4, iNotificationService), J(5, inject(localeService))], Gn);
qn = Y([J(0, Kn), J(1, iLogService), J(2, iCommandService), J(3, inject(dataLoaderService))], qn);
Jn = Y([J(0, iTransformService), J(1, iRenderManagerService)], Jn);
Yn = Y([J(0, inject(injector)), J(1, iTransformService), J(2, inject(docStateChangeManagerService))], Yn);
Q = Y([J(0, inject(docSelectionManagerService)), J(1, iTransformService)], Q);
er = Y([J(0, inject(collaborationController)), J(1, inject(Jn)), J(2, inject(Yn)), J(3, inject(Q)), J(4, inject(wn)), J(5, iMessageService), J(6, inject(localeService))], er);
tr = Y([J(0, inject(injector)), J(1, inject(hTTPService)), J(2, iLogService), J(3, inject(collaborationSessionService))], tr);
ir = Y([J(0, inject(snapshotLoadingService)), J(1, iMessageService), J(2, inject(localeService)), J(3, inject(injector)), J(4, iUIPartsService), J(5, Kn)], ir);
sr = Y([J(0, inject(iMessageService)), J(1, iCommandService), J(2, iConfigService), J(3, inject(hTTPService)), J(4, iUniverInstanceService), J(5, iLogService), J(6, inject(localeService))], sr);
cr = Y([J(0, iConfigService), J(1, iLocalStorageService), J(2, inject(revisionService))], cr);
q($, "pluginName", 'UNIVER_COLLABORATION_CLIENT_WEB_PLUGIN'), q($, 'packageName', hn), q($, "version", gn), $ = Y([dependentOn(univerLicensePlugin, univerDocsPlugin, univerRenderEnginePlugin, univerNetworkPlugin, univerCollaborationPlugin, univerDocsUIPlugin, univerCollaborationClientPlugin), J(1, iRenderManagerService), J(2, inject(injector)), J(3, iConfigService), J(4, iCommandService)], $);
ur = Y([J(0, inject(injector)), J(1, inject(hTTPService)), J(2, iConfigService), J(3, iLogService), J(4, iSnapshotServerService)], ur);
dr = Y([J(0, iUniverInstanceService), J(1, inject(hTTPService)), J(2, iConfigService)], dr);
export { var_core_value_sigE2BF2, q, An, On };
