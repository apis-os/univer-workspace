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
import { An, On, q } from "./internal-glue.js";
var Fn = class extends shape {
  constructor(var_core_value_sigD37B, targetObj184) {
    super(var_core_value_sigD37B, targetObj184), q(this, "_color", undefined), q(this, "_hovered", false), q(this, "_range", undefined), q(this, "_name", ''), q(this, "_labelPosition", "top"), q(this, "_backgroundColor", undefined), q(this, "_showText", undefined), q(this, "_highlight", undefined), q(this, "_highlightSecond", 4), q(this, "_blinkTimer", undefined), q(this, "_blinkIntervalTimer", undefined), q(this, '_isBlinkVisible', true), q(this, '_offsetY', 0), q(this, "_labelHorizontalPosition", 'right'), targetObj184 && (this.setShapeProps(targetObj184), targetObj184.highlight && (targetObj184.highlightSecond ?? this._highlightSecond) && this._startBlinking(targetObj184.highlightSecond ?? this._highlightSecond)), this.onPointerEnter$["subscribeEvent"](() => this.setShapeProps({
      'hovered': true
    })), this.onPointerLeave$["subscribeEvent"](() => this.setShapeProps({
      'hovered': false
    }));
  }
  setOffsetY(var_core_value_sig93BE) {
    this._offsetY = var_core_value_sig93BE;
  }
  setShapeProps(targetObj186) {
    this._color = targetObj186.color ?? this._color, this._hovered = targetObj186.hovered ?? this._hovered, this._range = targetObj186.range ?? this._range, this._name = targetObj186.name ?? this._name, this._labelPosition = targetObj186.labelPosition ?? this._labelPosition, this._backgroundColor = targetObj186.backgroundColor ?? this._backgroundColor, this._showText = targetObj186.showText ?? this._showText, this._labelHorizontalPosition = targetObj186.labelHorizontalPosition ?? this._labelHorizontalPosition, targetObj186.highlightSecond !== undefined && (this._highlightSecond = targetObj186.highlightSecond), targetObj186.highlight !== undefined && (this._highlight = targetObj186.highlight), targetObj186.offsetY !== undefined && (this._offsetY = targetObj186.offsetY), this.transformByState({
      'width': targetObj186.width,
      'height': targetObj186.height
    });
  }
  onMouseMove(var_core_value_sig2712) {
    let {
      row: var_core_value_sig0B9E,
      column: var_core_value_sigC545
    } = var_core_value_sig2712;
    if (var_core_value_sig0B9E >= this._range["startRow"] && var_core_value_sig0B9E <= this._range["endRow"] && var_core_value_sigC545 >= this._range["startColumn"] && var_core_value_sigC545 <= this._range["endColumn"]) {
      this.setShapeProps({
        'hovered': true
      });
      return;
    }
    this.setShapeProps({
      'hovered': false
    });
  }
  _startBlinking(countVal36) {
    this._stopBlinking(), this._isBlinkVisible = true, this._blinkIntervalTimer = window.setInterval(() => {
      this._isBlinkVisible = !this._isBlinkVisible, this.makeDirty(true);
    }, 500), this._blinkTimer = window.setTimeout(() => {
      this._stopBlinking(), this._isBlinkVisible = true, this.makeDirty(true);
    }, countVal36 * 1000);
  }
  _stopBlinking() {
    this._blinkIntervalTimer &&= (window.clearInterval(this._blinkIntervalTimer), undefined), this._blinkTimer &&= (window.clearTimeout(this._blinkTimer), undefined);
  }
  triggerDblclick(var_core_value_sig6F4E) {
    return false;
  }
  dispose() {
    this._stopBlinking(), super.dispose();
  }
  _draw(targetObj188) {
    let var_core_value_sig49D9 = this._color,
      var_core_value_sig320C = this._backgroundColor;
    if (this._highlight && !this._isBlinkVisible && (var_core_value_sig49D9 = this._getLighterColor(this._color), var_core_value_sig320C = this._backgroundColor ? this._getLighterColor(this._backgroundColor) : undefined), rect.drawWith(targetObj188, {
      'width': this.width,
      'height': this.height,
      'strokeWidth': this.strokeWidth || 1.5,
      'stroke': var_core_value_sig49D9,
      'evented': false,
      'fill': var_core_value_sig320C
    }), this._hovered || this._showText) {
      targetObj188.save();
      let countVal1 = this._labelHorizontalPosition === "left" ? -On(targetObj188, this._name) : this.width;
      targetObj188.transform(1, 0, 0, 1, countVal1, (this._labelPosition === 'bottom' ? 0 : -20) + (this._offsetY ?? 0)), An.drawWith(targetObj188, {
        'text': this._name,
        'color': var_core_value_sig49D9
      }), targetObj188.restore();
    }
  }
  _getLighterColor(strVal11) {
    return strVal11.startsWith('#') ? "rgba(" + Number.parseInt(strVal11.slice(1, 3), 16) + ',\x20' + Number.parseInt(strVal11.slice(3, 5), 16) + ',\x20' + Number.parseInt(strVal11.slice(5, 7), 16) + ", 0.2)" : strVal11.startsWith("rgba") ? strVal11.replace(/[\d.]+\)$/g, "0.2)") : strVal11.startsWith("rgb") ? strVal11.replace("rgb", 'rgba').replace(')', ", 0.2)") : strVal11;
  }
};
export { Fn as SheetCollabCursorShape };
