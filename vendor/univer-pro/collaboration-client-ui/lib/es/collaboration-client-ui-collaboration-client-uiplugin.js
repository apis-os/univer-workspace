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
import { An, q, var_core_value_sigE2BF2 } from "./internal-glue.js";
import { Fn } from "./collaboration-client-ui-sheet-collab-cursor-shape.js";
import { Kn } from "./collaboration-client-ui-iurlservice.js";
import { X } from "./collaboration-client-ui-desktop-collaboration-status-display.js";
const _n = {
    'id': "collaboration-client-ui.operation.update-remote-unit-presence",
    'type': commandType.OPERATION,
    'handler': (itemsMap21, targetObj326) => {
      let targetObj327 = itemsMap21.get(iUnitPresenceUIAdapterRegistry).get(targetObj326.unitType);
      if (!targetObj327) return false;
      switch (targetObj326.update['type']) {
        case 'set':
          return targetObj327.setRemotePresence(targetObj326.update["state"]), true;
        case "remove":
          return targetObj327.removeRemotePresence(targetObj326.update['unitId'], targetObj326.update['memberId']), true;
        case "clear":
          return targetObj327.clearRemotePresences(targetObj326.update['unitId']), true;
        default:
          return false;
      }
    }
  },
  vn = {};
let yn = class extends rxDisposable {
  constructor(var_core_value_sig3BF6, var_core_value_sig38CE) {
    super(), this._docClipboardService = var_core_value_sig3BF6, this._imageIoService = var_core_value_sig38CE, this._init();
  }
  _init() {
    let options35 = this;
    this.disposeWithMe(this._docClipboardService["addClipboardHook"]({
      'onBeforePasteImage': async var_core_value_sig63F3 => {
        let targetObj34 = await options35._imageIoService["saveImage"](var_core_value_sig63F3);
        return targetObj34 ? {
          'source': targetObj34.source,
          'imageSourceType': targetObj34.imageSourceType
        } : null;
      }
    }));
  }
};
const bn = ["purple.300", "jiqing.500", "green.600", "red.300", 'blue.400', 'yellow.400'];
var xn = class extends var_core_value_sigE2BF2 {
  constructor(...var_core_value_sig37A8) {
    super(...var_core_value_sig37A8), q(this, "_assignedColors", new Map()), q(this, '_colorIndex', 0);
  }
  assignAColorForMemberID(var_core_value_sigA90D) {
    if (this._assignedColors["has"](var_core_value_sigA90D)) return this._assignedColors["get"](var_core_value_sigA90D);
    let var_core_value_sig7A3C = bn[this._colorIndex];
    return this._colorIndex = (this._colorIndex + 1) % bn.length, this._assignedColors["set"](var_core_value_sigA90D, var_core_value_sig7A3C), var_core_value_sig7A3C;
  }
};
function Sn(var_core_value_sigC7862) {
  let strVal21 = '';
  for (let var_core_value_sigDCF5 of var_core_value_sigC7862) {
    let {
      startOffset: var_core_value_sig947E,
      endOffset: var_core_value_sig4545,
      isActive: var_core_value_sigF39A,
      rangeType: var_core_value_sigF79C,
      segmentId: var_core_value_sig2E54,
      segmentPage: var_core_value_sig7658
    } = var_core_value_sigDCF5;
    strVal21.length && (strVal21 += ','), strVal21 += var_core_value_sig947E + ':' + var_core_value_sig4545 + ':' + (var_core_value_sigF39A ? '1' : '0') + ':' + var_core_value_sigF79C + ':' + var_core_value_sig2E54 + ':' + var_core_value_sig7658;
  }
  return strVal21;
}
function Cn(strVal23) {
  let var_core_value_sigE1B02 = strVal23.split(','),
    itemsList44 = [];
  for (let options37 of var_core_value_sigE1B02) {
    let [var_core_value_sigF051, var_core_value_sig5825, var_core_value_sig4EB7, var_core_value_sig73AF, var_core_value_sig548A, var_core_value_sigE026] = options37.split(':');
    itemsList44.push({
      'startOffset': Number(var_core_value_sigF051),
      'endOffset': Number(var_core_value_sig5825),
      'collapsed': var_core_value_sigF051 === var_core_value_sig5825,
      'isActive': var_core_value_sig4EB7 === '1',
      'rangeType': var_core_value_sig73AF === dOC_RANGE_TYPE.TEXT ? dOC_RANGE_TYPE.TEXT : dOC_RANGE_TYPE.RECT,
      'segmentId': typeof var_core_value_sig548A == "string" ? String(var_core_value_sig548A) : '',
      'segmentPage': Number(var_core_value_sigE026 ?? -1)
    });
  }
  return itemsList44.some(targetObj141 => targetObj141.isActive) || (itemsList44[0].isActive = true), itemsList44;
}
var wn = class extends rxDisposable {
  constructor(...var_core_value_sigF175) {
    super(...var_core_value_sigF175), q(this, "_collabCursorState$", new behaviorSubject(null)), q(this, "collabCursorState$", this._collabCursorState$['asObservable']());
  }
  syncEditingCollabCursor(var_core_value_sig6A18) {
    let {
        unitID: var_core_value_sig4E3D,
        memberID: var_core_value_sig49B0,
        textRanges: var_core_value_sig2547
      } = var_core_value_sig6A18,
      var_core_value_sigBCA9 = Sn(var_core_value_sig2547);
    if (var_core_value_sigBCA9 === '') return;
    let targetObj142 = {
      'unitID': var_core_value_sig4E3D,
      'memberID': var_core_value_sig49B0,
      'selection': var_core_value_sigBCA9
    };
    this._collabCursorState$["next"](targetObj142);
  }
};
let Tn = class extends rxDisposable {
  get cursorInfo() {
    return this._cursorInfo$["getValue"]();
  }
  get roomMembers() {
    return this._roomMembers$["getValue"]();
  }
  constructor(var_core_value_sig3F79, var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B, var_core_value_sig7D1B, var_core_value_sig7BE0, var_core_value_sig7D40, var_core_value_sig6C7E) {
    super(), this.unitID = var_core_value_sig3F79, this._session = var_core_value_sig880E, this._injector = var_core_value_sigC9ED, this._colorAssignService = var_core_value_sigB57B, this._memberService = var_core_value_sig780B, this._syncEditingCollabCursorService = var_core_value_sig7D1B, this._transformService = var_core_value_sig7BE0, this._univerInstanceService = var_core_value_sig7D40, this._commandService = var_core_value_sig6C7E, q(this, "_online", false), q(this, "_init", false), q(this, "_cursorInfo$", new behaviorSubject(new Map())), q(this, "cursorInfo$", this._cursorInfo$["asObservable"]()), q(this, "_roomMembers$", new behaviorSubject([])), q(this, "roomMembers$", this._roomMembers$['pipe'](debounceTime(300))), q(this, "_updateLocalCursor", debounce(var_core_value_sig65A1 => {
      let targetObj36 = {
        'eventID': collaborationEvent.UPDATE_CURSOR,
        'data': {
          'unitID': this.unitID,
          'memberID': this._session["getMemberID"](),
          'selection': Sn(var_core_value_sig65A1)
        }
      };
      this._session["send"](targetObj36, this.unitID);
    }, 100));
  }
  dispose() {
    super.dispose(), this._cursorInfo$["next"](new Map()), this._cursorInfo$['complete'](), this._roomMembers$["next"]([]), this._roomMembers$["complete"]();
  }
  init() {
    this._init || (this._init = true, this._session["sessionStatus$"].pipe(takeUntil(this.dispose$)).subscribe(var_core_value_sig7827 => {
      var_core_value_sig7827 === sessionStatus.ONLINE ? this._toggleOnline() : this._toggleOffline();
    }), this._session["event$"].pipe(takeUntil(this.dispose$)).subscribe(targetObj38 => {
      let var_core_value_sig7E32 = targetObj38.eventID;
      var_core_value_sig7E32 === collaborationEvent.UPDATE_CURSOR && this._onCursorUpdate(targetObj38), var_core_value_sig7E32 === collaborationEvent.USERS_LEAVE && this._onCursorDelete(targetObj38);
    }), this.disposeWithMe(this._commandService['onCommandExecuted'](targetObj40 => {
      let targetObj41 = targetObj40.params;
      targetObj41 != null && this._online && targetObj40.id === setTextSelectionsOperation.id && targetObj41.unitId === this.unitID && targetObj41.isEditing === false && targetObj41.ranges["length"] > 0 && this._updateLocalCursor(targetObj41.ranges);
    })), this._syncEditingCollabCursorService["collabCursorState$"].pipe(takeUntil(this.dispose$)).subscribe(targetObj44 => {
      if ((targetObj44 == null ? undefined : targetObj44.unitID) !== this.unitID) return;
      let targetObj45 = {
        'eventID': collaborationEvent.UPDATE_CURSOR,
        'data': targetObj44
      };
      this._onCursorUpdate(targetObj45);
    }), this.disposeWithMe(this._commandService["onCommandExecuted"](targetObj48 => {
      if (targetObj48.params == null) return;
      let targetObj49 = targetObj48.params;
      if (targetObj48.id !== richTextEditingMutation.id || targetObj49.unitId !== this.unitID) return;
      let targetObj50 = {
          'id': "doc.mutation.rich-text-editing",
          'params': targetObj49
        },
        itemsMap4 = this.cursorInfo;
      for (let [var_core_value_sig64F0, options6] of itemsMap4) {
        let targetObj4 = {
            'id': "doc.mutation.rich-text-editing",
            'params': {
              'unitId': this.unitID,
              'actions': null,
              'textRanges': options6.ranges
            }
          },
          options4 = this._transformService['transformMutation'](targetObj50, targetObj4, false);
        if (isTransformMutationFailure(options4)) throw options4.error;
        itemsMap4.set(var_core_value_sig64F0, {
          ...options6,
          'ranges': options4.m2Prime['params'].textRanges
        });
      }
      queueMicrotask(() => {
        this._cursorInfo$["next"](itemsMap4);
      });
    })));
  }
  _onCursorUpdate(targetObj144) {
    var targetObj145;
    let {
        memberID: var_core_value_sigCA05,
        selection: var_core_value_sig2F2B
      } = targetObj144.data,
      var_core_value_sig70AF = Cn(var_core_value_sig2F2B),
      strVal9 = ((targetObj145 = this._memberService['getMember'](this.unitID, var_core_value_sigCA05)) == null ? undefined : targetObj145.name) ?? "Unknown user",
      targetObj146 = {
        'color': this._colorAssignService["assignAColorForMemberID"](var_core_value_sigCA05),
        'name': strVal9,
        'ranges': var_core_value_sig70AF
      },
      itemsMap11 = this.cursorInfo;
    itemsMap11.set(var_core_value_sigCA05, targetObj146), this._cursorInfo$["next"](itemsMap11);
  }
  _onCursorDelete(targetObj150) {
    let {
        memberID: var_core_value_sig8F69
      } = targetObj150.data,
      itemsMap13 = this.cursorInfo;
    itemsMap13.delete(var_core_value_sig8F69), this._cursorInfo$['next'](itemsMap13);
  }
  _toggleOnline() {
    var targetObj152;
    if (this._online = true, ((targetObj152 = this._univerInstanceService["getFocusedUnit"]()) == null ? undefined : targetObj152.getUnitId()) !== this.unitID) return;
    let targetObj153 = this._injector["get"](docSelectionManagerService).getDocRanges();
    Array.isArray(targetObj153) && targetObj153.length > 0 && this._updateLocalCursor(targetObj153);
  }
  _toggleOffline() {
    this._online = false;
  }
};
const En = () => {
  let itemsList46 = [],
    isFlag4 = false;
  return var_core_value_sig3D2C => {
    itemsList46.push(var_core_value_sig3D2C), isFlag4 || (isFlag4 = true, setTimeout(() => {
      itemsList46.forEach(callback => callback()), itemsList46 = [], isFlag4 = false;
    }));
  };
};
let Dn = class extends rxDisposable {
  get cursorInfo() {
    return this._cursorInfo$["getValue"]();
  }
  get roomMembers() {
    return this._roomMembers$["getValue"]();
  }
  constructor(var_core_value_sigC56D, var_core_value_sig3A17, var_core_value_sig938F, var_core_value_sigD948, var_core_value_sigBE5E, var_core_value_sig0281, var_core_value_sigED71, var_core_value_sig281C) {
    super(), this.unitID = var_core_value_sigC56D, this._session = var_core_value_sig3A17, this._injector = var_core_value_sig938F, this._colorAssignService = var_core_value_sigD948, this._memberService = var_core_value_sigBE5E, this._univerInstanceService = var_core_value_sig0281, this._commandService = var_core_value_sigED71, this._refRangeService = var_core_value_sig281C, q(this, "_online", false), q(this, '_init', false), q(this, "_cursorInfo$", new behaviorSubject(new Map())), q(this, "cursorInfo$", this._cursorInfo$["asObservable"]()), q(this, '_roomMembers$', new behaviorSubject([])), q(this, "roomMembers$", this._roomMembers$["pipe"](debounceTime(300))), q(this, "_updateLocalCursor", debounce((var_core_value_sig1614, targetObj54) => {
      let targetObj55 = {
        'eventID': collaborationEvent.UPDATE_CURSOR,
        'data': {
          'unitID': this.unitID,
          'memberID': this._session["getMemberID"](),
          'selection': serializeRangeWithSheet(var_core_value_sig1614, targetObj54.range)
        }
      };
      this._session['send'](targetObj55, this.unitID);
    }, 100));
  }
  dispose() {
    super.dispose(), this._cursorInfo$["next"](new Map()), this._cursorInfo$["complete"](), this._roomMembers$["next"]([]), this._roomMembers$["complete"]();
  }
  init() {
    this._init || (this._init = true, this._session['sessionStatus$'].pipe(takeUntil(this.dispose$)).subscribe(var_core_value_sig4BBA => {
      var_core_value_sig4BBA === sessionStatus.ONLINE ? this._toggleOnline() : this._toggleOffline();
    }), this._session["event$"].pipe(takeUntil(this.dispose$)).subscribe(targetObj58 => {
      let var_core_value_sig5151 = targetObj58.eventID;
      var_core_value_sig5151 === collaborationEvent.UPDATE_CURSOR && this._onCursorUpdate(targetObj58), var_core_value_sig5151 === collaborationEvent.USERS_LEAVE && this._onCursorDelete(targetObj58);
    }), this._onRefRangeChange(), this.disposeWithMe(this._commandService["onCommandExecuted"](targetObj60 => {
      if (this._online && targetObj60.id === setSelectionsOperation.id && targetObj60.params["unitId"] === this.unitID) {
        let options7 = targetObj60.params;
        this._updateLocalCursor(options7.subUnitId, options7.selections[0]);
      }
    })));
  }
  _onCursorUpdate(targetObj156) {
    var targetObj157;
    let {
        memberID: var_core_value_sig585D,
        selection: var_core_value_sigE722
      } = targetObj156.data,
      {
        sheetName: var_core_value_sig062A,
        range: var_core_value_sig050A
      } = deserializeRangeWithSheet(var_core_value_sigE722),
      targetObj158 = {
        'name': ((targetObj157 = this._memberService["getMember"](this.unitID, var_core_value_sig585D)) == null ? undefined : targetObj157.name) ?? "Unknown user",
        'range': this._getMergeRange(var_core_value_sig062A, var_core_value_sig050A),
        'sheetID': var_core_value_sig062A,
        'color': this._colorAssignService["assignAColorForMemberID"](var_core_value_sig585D),
        'selection': var_core_value_sigE722
      },
      itemsMap15 = this.cursorInfo;
    itemsMap15.set(var_core_value_sig585D, targetObj158), this._cursorInfo$['next'](itemsMap15);
  }
  _onCursorDelete(targetObj162) {
    let {
        memberID: var_core_value_sig26EC
      } = targetObj162.data,
      itemsMap17 = this.cursorInfo;
    itemsMap17.delete(var_core_value_sig26EC), this._cursorInfo$["next"](itemsMap17);
  }
  _getMergeRange(var_core_value_sig36E7, var_core_value_sig6A78) {
    var targetObj164;
    let var_core_value_sig27F9 = (targetObj164 = this._univerInstanceService["getUnit"](this.unitID, univerInstanceType.UNIVER_SHEET)) == null || (targetObj164 = targetObj164.getSheetBySheetId(var_core_value_sig36E7)) == null ? undefined : targetObj164.getMergeData();
    return (var_core_value_sig27F9 == null ? undefined : var_core_value_sig27F9.find(var_core_value_sigBB6C => rectangle.contains(var_core_value_sigBB6C, var_core_value_sig6A78))) || var_core_value_sig6A78;
  }
  _onRefRangeChange() {
    let var_core_value_sig393E = new disposableCollection(),
      var_core_value_sigB609 = En(),
      var_core_value_sig390D = () => {
        var_core_value_sig393E.dispose();
        let var_core_value_sigE2BF = (targetObj8, var_core_value_sig6774, var_core_value_sig340D, var_core_value_sig82D4) => {
          let itemsList2 = [];
          switch (targetObj8.id) {
            case effectRefRangId.DeleteRangeMoveLeftCommandId:
              itemsList2 = handleDeleteRangeMoveLeft(targetObj8, var_core_value_sig82D4);
              break;
            case effectRefRangId.DeleteRangeMoveUpCommandId:
              itemsList2 = handleDeleteRangeMoveUp(targetObj8, var_core_value_sig82D4);
              break;
            case effectRefRangId.InsertColCommandId:
              itemsList2 = handleInsertCol(targetObj8, var_core_value_sig82D4);
              break;
            case effectRefRangId.InsertRangeMoveDownCommandId:
              itemsList2 = handleInsertRangeMoveDown(targetObj8, var_core_value_sig82D4);
              break;
            case effectRefRangId.InsertRangeMoveRightCommandId:
              itemsList2 = handleInsertRangeMoveRight(targetObj8, var_core_value_sig82D4);
              break;
            case effectRefRangId.InsertRowCommandId:
              itemsList2 = handleInsertRow(targetObj8, var_core_value_sig82D4);
              break;
            case effectRefRangId.MoveRangeCommandId:
              itemsList2 = handleMoveRange(targetObj8, var_core_value_sig82D4);
              break;
            case effectRefRangId.RemoveColCommandId:
              itemsList2 = handleIRemoveCol(targetObj8, var_core_value_sig82D4);
              break;
            case effectRefRangId.RemoveRowCommandId:
              itemsList2 = handleIRemoveRow(targetObj8, var_core_value_sig82D4);
              break;
          }
          let var_core_value_sig7DF1 = runRefRangeMutations(itemsList2, var_core_value_sig82D4),
            var_core_value_sigDC86 = this.cursorInfo["get"](var_core_value_sig6774);
          if (var_core_value_sigDC86 && var_core_value_sig7DF1) {
            let targetObj5 = {
              ...var_core_value_sigDC86,
              'range': var_core_value_sig7DF1
            };
            this.cursorInfo['set'](var_core_value_sig6774, targetObj5), var_core_value_sigB609(() => {
              let options2 = this._refRangeService["registerRefRange"](var_core_value_sig7DF1, var_core_value_sig1E5B => (options2.dispose(), var_core_value_sigE2BF(var_core_value_sig1E5B, var_core_value_sig6774, var_core_value_sig340D, var_core_value_sig7DF1)));
              var_core_value_sig393E.add(options2);
            });
          }
          return {
            'redos': [],
            'undos': []
          };
        };
        this.cursorInfo["forEach"]((var_core_value_sig0B0C, var_core_value_sigA39E) => {
          let {
              range: var_core_value_sigBBEE,
              sheetID: var_core_value_sig011D
            } = var_core_value_sig0B0C,
            options8 = this._refRangeService['registerRefRange'](var_core_value_sigBBEE, var_core_value_sigB7D1 => (options8.dispose(), var_core_value_sigE2BF(var_core_value_sigB7D1, var_core_value_sigA39E, var_core_value_sig011D, var_core_value_sigBBEE)));
          var_core_value_sig393E.add(options8);
        });
      };
    this.disposeWithMe(toDisposable(this._cursorInfo$["subscribe"](() => {
      var_core_value_sig390D();
    })));
  }
  _toggleOnline() {
    var targetObj166, options38;
    if (this._online = true, ((targetObj166 = this._univerInstanceService["getFocusedUnit"]()) == null ? undefined : targetObj166.getUnitId()) !== this.unitID) return;
    let var_core_value_sig18E02 = (options38 = this._injector["get"](sheetsSelectionsService).getCurrentSelections()) == null ? undefined : options38[0],
      targetObj167 = this._univerInstanceService['getCurrentUnitOfType'](univerInstanceType.UNIVER_SHEET).getActiveSheet();
    var_core_value_sig18E02 && targetObj167 && this._updateLocalCursor(targetObj167.getSheetId(), var_core_value_sig18E02);
  }
  _toggleOffline() {
    this._online = false;
  }
};
let Z = class extends rxDisposable {
  constructor(var_core_value_sigBDEE, var_core_value_sig1F40, var_core_value_sig3FC7) {
    super(), this._univerInstanceService = var_core_value_sigBDEE, this._injector = var_core_value_sig1F40, this._collabSessionService = var_core_value_sig3FC7, q(this, "_entities", new Map()), q(this, "_entityInit$", new subject()), this._init();
  }
  dispose() {
    super.dispose(), this._entityInit$["complete"](), this._entities["forEach"](targetObj62 => targetObj62.dispose());
  }
  getCollabCursors$(var_core_value_sig1E1B) {
    let targetObj170 = this._entities['get'](var_core_value_sig1E1B);
    return targetObj170 ? targetObj170.cursorInfo$ : this._entityInit$["pipe"](filter(targetObj63 => targetObj63.unitID === var_core_value_sig1E1B), switchMap(targetObj64 => targetObj64.cursorInfo$));
  }
  _init() {
    this._univerInstanceService["getTypeOfUnitAdded$"](univerInstanceType.UNIVER_SHEET).pipe(takeUntil(this.dispose$)).subscribe(async targetObj65 => {
      let var_core_value_sig43B8 = targetObj65.unit["getUnitId"](),
        var_core_value_sigD98F = await this._startSheetCollabCursor(var_core_value_sig43B8);
      this._entityInit$["next"](var_core_value_sigD98F), this._entities['set'](var_core_value_sig43B8, var_core_value_sigD98F);
    }), this._univerInstanceService["getTypeOfUnitAdded$"](univerInstanceType.UNIVER_DOC).pipe(takeUntil(this.dispose$)).pipe(filter(targetObj67 => !targetObj67.unit["getUnitId"]().startsWith('__'))).subscribe(async var_core_value_sig9D15 => {
      let {
          unit: targetObj68
        } = var_core_value_sig9D15,
        var_core_value_sig130F = targetObj68.getUnitId(),
        var_core_value_sigC0E3 = await this._startDocCollabCursor(var_core_value_sig130F);
      this._entityInit$['next'](var_core_value_sigC0E3), this._entities["set"](var_core_value_sig130F, var_core_value_sigC0E3);
    }), var_core_value_sig1758(this._univerInstanceService["getTypeOfUnitDisposed$"](univerInstanceType.UNIVER_DOC), this._univerInstanceService['getTypeOfUnitDisposed$'](univerInstanceType.UNIVER_SHEET)).pipe(takeUntil(this.dispose$)).subscribe(targetObj70 => {
      let var_core_value_sig866F = targetObj70.getUnitId(),
        targetObj71 = this._entities["get"](var_core_value_sig866F);
      targetObj71 && (targetObj71.dispose(), this._entities["delete"](var_core_value_sig866F));
    });
  }
  async _startSheetCollabCursor(var_core_value_sig89E6) {
    let var_core_value_sig4743 = await this._collabSessionService["requireSession"](var_core_value_sig89E6),
      targetObj172 = this._injector["createInstance"](Dn, var_core_value_sig89E6, var_core_value_sig4743);
    return targetObj172.init(), targetObj172;
  }
  async _startDocCollabCursor(var_core_value_sig3D46) {
    let var_core_value_sigCC93 = await this._collabSessionService["requireSession"](var_core_value_sig3D46),
      targetObj174 = this._injector["createInstance"](Tn, var_core_value_sig3D46, var_core_value_sigCC93);
    return targetObj174.init(), targetObj174;
  }
};
const jn = "collab-text-anchor-";
var Mn = class {
  constructor(var_core_value_sig528D, var_core_value_sigA309, var_core_value_sig9E20, var_core_value_sig26BB) {
    this._cursor = var_core_value_sig528D, this._scene = var_core_value_sigA309, this._docSkeleton = var_core_value_sig9E20, this._document = var_core_value_sig26BB, q(this, "_shapes", []), q(this, '_anchor', null), q(this, "_textBubble", null), q(this, "_anchorDot", null), q(this, "_hideTimer", null), q(this, '_eventUnsubscribe', null), this._render();
  }
  set _hover(var_core_value_sig19B4) {
    var_core_value_sig19B4 ? (this._anchorDot && this._anchorDot['hide'](), this._textBubble && this._textBubble["show"]()) : (this._anchorDot && this._anchorDot["show"](), this._textBubble && this._textBubble['hide']());
  }
  dispose() {
    for (let options23 of this._shapes) options23.dispose();
    this._textBubble && this._textBubble["dispose"](), this._anchorDot && this._anchorDot["dispose"](), this._anchor && this._anchor["dispose"](), this._eventUnsubscribe && this._eventUnsubscribe();
  }
  _render() {
    let {
        _docSkeleton: targetObj180,
        _document: targetObj181
      } = this,
      {
        color: var_core_value_sigFDEE,
        name: var_core_value_sigA676,
        ranges: var_core_value_sigC27E
      } = this._cursor,
      var_core_value_sigA70D = targetObj181.getOffsetConfig(),
      {
        docsLeft: var_core_value_sigCE10,
        docsTop: var_core_value_sigA386
      } = var_core_value_sigA70D,
      var_core_value_sigCD82 = new nodePositionConvertToCursor(var_core_value_sigA70D, targetObj180);
    for (let {
      startOffset: var_core_value_sigB26B,
      endOffset: var_core_value_sig019B,
      rangeType: var_core_value_sigC6BC,
      segmentId: var_core_value_sig8EC2,
      segmentPage: var_core_value_sigA8C3,
      collapsed: var_core_value_sig5276,
      isActive: var_core_value_sig031B
    } of var_core_value_sigC27E) {
      let var_core_value_sigA363 = targetObj180.findNodePositionByCharIndex(var_core_value_sigB26B, true, var_core_value_sig8EC2, var_core_value_sigA8C3),
        var_core_value_sigFBA5 = targetObj180.findNodePositionByCharIndex(var_core_value_sig019B, true, var_core_value_sig8EC2, var_core_value_sigA8C3);
      var_core_value_sigFBA5 ??= targetObj180.findNodePositionByCharIndex(var_core_value_sig019B - 1, false, var_core_value_sig8EC2, var_core_value_sigA8C3);
      let options10 = Nn(var_core_value_sigA363, var_core_value_sigFBA5);
      if (var_core_value_sig031B && options10.canRenderAnchor) {
        let {
          contentBoxPointGroup: options5
        } = var_core_value_sigCD82.getRangePointData(var_core_value_sigFBA5, var_core_value_sigFBA5);
        if (options5.length === 0) continue;
        this._drawAnchor(var_core_value_sigFDEE, options5, var_core_value_sigCE10, var_core_value_sigA386, var_core_value_sigA676), this._eventUnsubscribe = this._handleHover();
      }
      if (var_core_value_sigA363 && var_core_value_sigFBA5) {
        if (var_core_value_sigC6BC === dOC_RANGE_TYPE.RECT) {
          let {
            pointGroup: targetObj1
          } = new nodePositionConvertToRectRange(var_core_value_sigA70D, targetObj180).getRangePointData(var_core_value_sigA363, var_core_value_sigFBA5) ?? {};
          if (targetObj1 == null || targetObj1.length === 0) continue;
          this._drawRectRange(var_core_value_sigFDEE, targetObj1, var_core_value_sigCE10, var_core_value_sigA386);
        } else {
          if (!var_core_value_sig5276 && options10.canRenderSelection) {
            let {
              borderBoxPointGroup: options
            } = var_core_value_sigCD82.getRangePointData(var_core_value_sigA363, var_core_value_sigFBA5);
            if (options.length === 0) continue;
            this._drawTextRange(var_core_value_sigFDEE, options, var_core_value_sigCE10, var_core_value_sigA386);
          }
        }
      }
    }
  }
  _drawAnchor(var_core_value_sig44DD, var_core_value_sig96FA, var_core_value_sigAB68, var_core_value_sig040A, var_core_value_sig2AE0) {
    let {
        left: var_core_value_sigC349,
        top: var_core_value_sig9D96,
        height: var_core_value_sig2776
      } = this._getAnchorBounding(var_core_value_sig96FA),
      countVal22 = 1.5 / this._getScale(),
      var_core_value_sigEB43 = new rect(jn + generateRandomId(6), {
        'left': var_core_value_sigC349 + var_core_value_sigAB68 - countVal22,
        'top': var_core_value_sig9D96 + var_core_value_sig040A,
        'height': var_core_value_sig2776,
        'width': 1.5,
        'fill': var_core_value_sig44DD || getColor(cOLORS.black, 0),
        'strokeWidth': countVal22,
        'stroke': "rgba(255, 255, 255, 0.01)",
        'evented': true
      });
    this._anchor = var_core_value_sigEB43, this._scene['addObject'](var_core_value_sigEB43, tEXT_RANGE_LAYER_INDEX);
    let var_core_value_sig4186 = new rect(jn + generateRandomId(6), {
      'left': var_core_value_sigC349 + var_core_value_sigAB68 - countVal22,
      'top': var_core_value_sig9D96 + var_core_value_sig040A - 4 / 2,
      'height': 4,
      'width': 4,
      'fill': var_core_value_sig44DD || getColor(cOLORS.black, 0),
      'strokeWidth': 0,
      'stroke': var_core_value_sig44DD || getColor(cOLORS.black, 0),
      'evented': false
    });
    this._anchorDot = var_core_value_sig4186, this._scene["addObject"](var_core_value_sig4186, tEXT_RANGE_LAYER_INDEX);
    let var_core_value_sigF963 = new An(jn + generateRandomId(6), {
      'left': var_core_value_sigC349 + var_core_value_sigAB68 - countVal22,
      'top': var_core_value_sig9D96 + var_core_value_sig040A - 20,
      'text': var_core_value_sig2AE0,
      'color': var_core_value_sig44DD
    });
    this._textBubble = var_core_value_sigF963, this._scene["addObject"](var_core_value_sigF963, tEXT_RANGE_LAYER_INDEX), this._hover = false;
  }
  _handleHover() {
    let options40 = this._anchor["onPointerEnter$"].subscribeEvent(() => {
        this._hover = true;
      }),
      options41 = this._anchor["onPointerLeave$"].subscribeEvent(() => {
        this._hideTimer && clearTimeout(this._hideTimer), this._hideTimer = setTimeout(() => {
          this._hover = false;
        }, 2000);
      });
    return () => {
      options40.unsubscribe(), options41.unsubscribe();
    };
  }
  _drawTextRange(var_core_value_sig5EFB, var_core_value_sig3A85, var_core_value_sig2682, var_core_value_sig4BB5) {
    let countVal24 = 0.2,
      var_core_value_sig52CA = new colorKit(var_core_value_sig5EFB).setAlpha(countVal24).toRgbString(),
      var_core_value_sigC030 = new regularPolygon("collab-text-range-" + generateRandomId(6), {
        'pointsGroup': var_core_value_sig3A85,
        'fill': var_core_value_sig52CA || getColor(cOLORS.black, countVal24),
        'left': var_core_value_sig2682,
        'top': var_core_value_sig4BB5,
        'evented': false,
        'debounceParentDirty': false
      });
    this._shapes['push'](var_core_value_sigC030), this._scene["addObject"](var_core_value_sigC030, tEXT_RANGE_LAYER_INDEX);
  }
  _drawRectRange(var_core_value_sig88F6, var_core_value_sig37DB, var_core_value_sig5542, var_core_value_sigE0A9) {
    let countVal26 = 0.2,
      var_core_value_sig7620 = new colorKit(var_core_value_sig88F6).setAlpha(countVal26).toRgbString(),
      var_core_value_sigB9FC = new regularPolygon("collab-rect-range-" + generateRandomId(6), {
        'pointsGroup': var_core_value_sig37DB,
        'fill': var_core_value_sig7620 || getColor(cOLORS.black, countVal26),
        'left': var_core_value_sig5542,
        'top': var_core_value_sigE0A9,
        'evented': false,
        'debounceParentDirty': false
      });
    this._shapes["push"](var_core_value_sigB9FC), this._scene["addObject"](var_core_value_sigB9FC, tEXT_RANGE_LAYER_INDEX);
  }
  _getAnchorBounding(options44) {
    let options45 = options44[0],
      var_core_value_sig45F0 = options45[0],
      var_core_value_sigBC91 = options45[2],
      {
        x: countVal28,
        y: countVal29
      } = var_core_value_sig45F0,
      {
        x: countVal30,
        y: countVal31
      } = var_core_value_sigBC91;
    return {
      'left': countVal28,
      'top': countVal29,
      'width': countVal30 - countVal28,
      'height': countVal31 - countVal29
    };
  }
  _getScale() {
    let {
      scaleX: var_core_value_sig611A,
      scaleY: var_core_value_sig6BD9
    } = this._scene["getAncestorScale"]();
    return Math.max(var_core_value_sig611A, var_core_value_sig6BD9);
  }
};
function Nn(targetObj336, targetObj337) {
  if (!targetObj337) return {
    'canRenderAnchor': false,
    'canRenderSelection': false
  };
  if (!targetObj336 || targetObj336.pageType !== targetObj337.pageType || (targetObj336.pageType === documentSkeletonPageType.HEADER || targetObj336.pageType === documentSkeletonPageType.FOOTER) && targetObj336.segmentPage !== targetObj337.segmentPage) return {
    'canRenderAnchor': true,
    'canRenderSelection': false
  };
  let targetObj338 = getDocumentSkeletonColumnPagePathInfo(targetObj336),
    targetObj339 = getDocumentSkeletonColumnPagePathInfo(targetObj337);
  return {
    'canRenderAnchor': true,
    'canRenderSelection': targetObj338 == null || targetObj339 == null ? targetObj338 == null && targetObj339 == null : targetObj338.pageIndex === targetObj339.pageIndex && targetObj338.columnGroupId === targetObj339.columnGroupId && targetObj338.columnIndex === targetObj339.columnIndex
  };
}
let Pn = class extends rxDisposable {
  constructor(var_core_value_sig3455, var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395, var_core_value_sig9FA0) {
    super(), this._context = var_core_value_sig3455, this._docSkeletonManagerService = var_core_value_sig5CEF, this._collabCursorController = var_core_value_sig43D5, this._commandService = var_core_value_sig1395, this._themeService = var_core_value_sig9FA0, q(this, "_cursorShapes", []), q(this, "_cursors", []), this._init();
  }
  _init() {
    let var_core_value_sig055E = this._context["unitId"],
      options48 = this._docSkeletonManagerService;
    this.disposeWithMe(combineLatest([this._collabCursorController["getCollabCursors$"](var_core_value_sig055E), this._themeService["currentTheme$"]]).pipe(map(([itemsMap6, var_core_value_sig1617]) => ({
      'skeleton': options48.getSkeleton(),
      'cursors': [...itemsMap6.values()].flatMap(targetObj10 => ({
        ...targetObj10,
        'color': this._themeService["getColorFromTheme"](targetObj10.color)
      }))
    }))).subscribe(var_core_value_sig4169 => {
      if (this._removeCollabCursors(), var_core_value_sig4169) {
        let {
          skeleton: var_core_value_sig6AAD,
          cursors: var_core_value_sig1157
        } = var_core_value_sig4169;
        this._updateCollabCursors(var_core_value_sig6AAD, var_core_value_sig1157);
      }
    })), this._initResize(), this._initCommandExecutedListener();
  }
  _updateCollabCursors(var_core_value_sig9578, itemsList10) {
    let {
        scene: var_core_value_sigC218,
        mainComponent: var_core_value_sigADEC
      } = this._context,
      itemsList11 = itemsList10.map(var_core_value_sig6D19 => new Mn(var_core_value_sig6D19, var_core_value_sigC218, var_core_value_sig9578, var_core_value_sigADEC));
    this._cursorShapes = itemsList11, this._cursors = itemsList10;
  }
  _refreshCollabCursors() {
    this._removeCollabCursors();
    let {
        scene: var_core_value_sig37E5,
        mainComponent: var_core_value_sigF079
      } = this._context,
      var_core_value_sigFCA0 = this._docSkeletonManagerService["getSkeleton"](),
      var_core_value_sigC84D = this._cursors["map"](var_core_value_sig279C => new Mn(var_core_value_sig279C, var_core_value_sig37E5, var_core_value_sigFCA0, var_core_value_sigF079));
    this._cursorShapes = var_core_value_sigC84D;
  }
  _removeCollabCursors() {
    this._cursorShapes["forEach"](targetObj74 => targetObj74.dispose()), this._cursorShapes = [];
  }
  _initCommandExecutedListener() {
    let itemsList14 = [setDocZoomRatioOperation.id];
    this.disposeWithMe(this._commandService["onCommandExecuted"](targetObj75 => {
      itemsList14.includes(targetObj75.id) && targetObj75.params['unitId'] === this._context["unitId"] && this._refreshCollabCursors();
    }));
  }
  _initResize() {
    this.disposeWithMe(fromEventSubject(this._context["engine"].onTransformChange$).pipe(var_core_value_sig877E(targetObj77 => targetObj77.type === tRANSFORM_CHANGE_OBSERVABLE_TYPE.resize), throttleTime(16)).subscribe(() => {
      this._refreshCollabCursors();
    }));
  }
};
let In = class extends rxDisposable {
  constructor(var_core_value_sigE837, var_core_value_sig34F4, var_core_value_sigA45D, var_core_value_sig1BC7) {
    super(), this._context = var_core_value_sigE837, this._sheetSkeletonManagerService = var_core_value_sig34F4, this._collabCursorController = var_core_value_sigA45D, this._themeService = var_core_value_sig1BC7, q(this, "_cursors", new Set()), q(this, "_lastPointer", null), q(this, "_pointerMoveDisposable", null), this._init();
  }
  _init() {
    this._sheetSkeletonManagerService["currentSkeleton$"].pipe(var_core_value_sigBECE(this.dispose$), var_core_value_sigE9A7(targetObj78 => {
      if (targetObj78) {
        let var_core_value_sigA694 = targetObj78.sheetId;
        return combineLatest(this._collabCursorController["getCollabCursors$"](this._context["unitId"]), this._themeService['currentTheme$']).pipe(map(([itemsList, var_core_value_sigE6D0]) => {
          let itemsMap = new Map();
          return itemsList.forEach((targetObj2, var_core_value_sigA0A5) => {
            if (targetObj2.sheetID === var_core_value_sigA694) {
              let targetObj = {
                ...targetObj2
              };
              targetObj.color = this._themeService["getColorFromTheme"](targetObj2.color), itemsMap.set(var_core_value_sigA0A5, targetObj);
            }
          }), {
            'skeleton': targetObj78,
            'cursors': itemsMap
          };
        }));
      }
      return of({
        'skeleton': null,
        'cursors': new Map()
      });
    })).subscribe(({
      skeleton: var_core_value_sig2CD3,
      cursors: var_core_value_sig038E
    }) => {
      this._removeCollabCursors(), var_core_value_sig2CD3 && this._updateCollabCursors(var_core_value_sig2CD3, var_core_value_sig038E);
    }), this.disposeWithMe(this._sheetSkeletonManagerService['currentSkeleton$'].pipe(var_core_value_sigBECE(this.dispose$)).subscribe(var_core_value_sigAA1E => {
      var targetObj80;
      if (var_core_value_sigAA1E == null) return;
      (targetObj80 = this._pointerMoveDisposable) == null || targetObj80.unsubscribe(), this._pointerMoveDisposable = null;
      let {
          skeleton: options24
        } = var_core_value_sigAA1E,
        {
          scene: targetObj81
        } = this._context;
      this._pointerMoveDisposable = targetObj81.onPointerMove$['subscribeEvent'](debounce(var_core_value_sig18E0 => {
        var targetObj11, targetObj12;
        let {
            offsetX: var_core_value_sig555F,
            offsetY: var_core_value_sig3D6F
          } = var_core_value_sig18E0,
          {
            x: var_core_value_sig336C,
            y: var_core_value_sig6E68
          } = targetObj81.getCoordRelativeToViewport(vector2.FromArray([var_core_value_sig555F, var_core_value_sig3D6F])),
          {
            scaleX: var_core_value_sig8DFE,
            scaleY: var_core_value_sig48EA
          } = targetObj81.getAncestorScale(),
          var_core_value_sig5E16 = targetObj81.getViewport(sHEET_VIEWPORT_KEY.VIEW_MAIN),
          var_core_value_sig09F3 = targetObj81.getScrollXYInfoByViewport(vector2.FromArray([var_core_value_sig336C, var_core_value_sig6E68]), var_core_value_sig5E16),
          targetObj13 = options24.getCellIndexByOffset(var_core_value_sig555F, var_core_value_sig3D6F, var_core_value_sig8DFE, var_core_value_sig48EA, var_core_value_sig09F3);
        (((targetObj11 = this._lastPointer) == null ? undefined : targetObj11.column) !== targetObj13.column || ((targetObj12 = this._lastPointer) == null ? undefined : targetObj12.row) !== targetObj13.row) && this._cursors["forEach"](targetObj6 => {
          targetObj6.onMouseMove(targetObj13);
        });
      }, 100));
    })), this.disposeWithMe(toDisposable(() => {
      var targetObj84;
      (targetObj84 = this._pointerMoveDisposable) == null || targetObj84.unsubscribe(), this._pointerMoveDisposable = null;
    }));
  }
  _updateCollabCursors(var_core_value_sig4956, itemsMap19) {
    let var_core_value_sig444C = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
    if (!var_core_value_sig444C) return;
    let var_core_value_sigE42E = this._getSheetObject();
    if (!var_core_value_sigE42E) return;
    this._cursors["forEach"](targetObj86 => {
      targetObj86.makeDirty();
    });
    let {
        scene: targetObj190
      } = var_core_value_sigE42E,
      itemsList16 = Ln(Array.from(itemsMap19.values())).map(var_core_value_sig803B => {
        let {
            color: var_core_value_sig5830,
            range: var_core_value_sig4A7C,
            name: var_core_value_sigF975,
            selection: var_core_value_sigCDAF,
            sheetID: var_core_value_sigA298
          } = var_core_value_sig803B,
          {
            startColumn: var_core_value_sig0B40,
            startRow: var_core_value_sig330B,
            endColumn: var_core_value_sig3625,
            endRow: var_core_value_sig0B4E
          } = var_core_value_sig4A7C,
          var_core_value_sig0E9F = getCoordByCell(var_core_value_sig330B, var_core_value_sig0B40, targetObj190, var_core_value_sig444C),
          var_core_value_sigE5BA = getCoordByCell(var_core_value_sig0B4E, var_core_value_sig3625, targetObj190, var_core_value_sig444C),
          {
            columnHeaderHeightAndMarginTop: countVal2
          } = var_core_value_sig444C,
          {
            startX: countVal3,
            startY: countVal4
          } = var_core_value_sig0E9F,
          {
            endX: countVal5,
            endY: countVal6
          } = var_core_value_sigE5BA,
          countVal7 = countVal5 - countVal3,
          countVal8 = countVal6 - countVal4;
        return new Fn(var_core_value_sigF975, {
          'labelPosition': countVal4 - countVal2 >= 20 ? 'top' : 'bottom',
          'sheetID': var_core_value_sigA298,
          'range': var_core_value_sig4A7C,
          'color': var_core_value_sig5830,
          'name': var_core_value_sigF975,
          'selection': var_core_value_sigCDAF,
          'left': countVal3,
          'top': countVal4,
          'width': countVal7,
          'height': countVal8,
          'evented': false,
          'zIndex': 5001
        });
      });
    targetObj190.addObjects(itemsList16, 1), this._cursors = new Set(itemsList16);
  }
  _removeCollabCursors() {
    var itemsList18;
    (itemsList18 = this._cursors) == null || itemsList18.forEach(targetObj88 => targetObj88.dispose());
  }
  _getSheetObject() {
    return getSheetObject(this._context['unit'], this._context);
  }
};
function Ln(itemsList48) {
  let itemsMap23 = new Map();
  return itemsList48.forEach(targetObj192 => {
    if (itemsMap23.has(targetObj192.selection)) {
      let options26 = itemsMap23.get(targetObj192.selection);
      options26.name += ',\x20' + targetObj192.name;
    } else itemsMap23.set(targetObj192.selection, targetObj192);
  }), Array.from(itemsMap23.values());
}
function Rn(var_core_value_sig9EAB) {
  return typeof var_core_value_sig9EAB == 'object' && !!var_core_value_sig9EAB;
}
function zn(targetObj344) {
  return targetObj344.eventID === collaborationEvent.UPDATE_CURSOR && "data" in targetObj344 && Rn(targetObj344.data) && typeof targetObj344.data["memberID"] == "string" && typeof targetObj344.data["selection"] == "string";
}
function Bn(targetObj346) {
  return targetObj346.eventID === collaborationEvent.USERS_LEAVE && 'data' in targetObj346 && Rn(targetObj346.data) && typeof targetObj346.data["memberID"] == "string";
}
function Vn(var_core_value_sig3515, var_core_value_sigC2A0) {
  let targetObj348;
  try {
    targetObj348 = JSON.parse(var_core_value_sig3515);
  } catch {
    return null;
  }
  if (!Rn(targetObj348) || typeof targetObj348.kind != "string" || typeof targetObj348.unitId != "string" || typeof targetObj348.subUnitId != 'string') return null;
  let var_core_value_sig7F05 = typeof targetObj348.unitType == "number" ? targetObj348.unitType : var_core_value_sigC2A0;
  if (var_core_value_sig7F05 == null) return null;
  let targetObj349 = Rn(targetObj348.pointer) && typeof targetObj348.pointer['x'] == "number" && Number.isFinite(targetObj348.pointer['x']) && typeof targetObj348.pointer['y'] == 'number' && Number.isFinite(targetObj348.pointer['y']) ? {
    'x': targetObj348.pointer['x'],
    'y': targetObj348.pointer['y']
  } : null;
  return {
    'kind': targetObj348.kind,
    'unitType': var_core_value_sig7F05,
    'unitId': targetObj348.unitId,
    'subUnitId': targetObj348.subUnitId,
    'selectedIds': Array.isArray(targetObj348.selectedIds) ? targetObj348.selectedIds["filter"](var_core_value_sigDC92 => typeof var_core_value_sigDC92 == "string") : [],
    'focusedId': typeof targetObj348.focusedId == "string" ? targetObj348.focusedId : null,
    'pointer': targetObj349
  };
}
function Hn(var_core_value_sigF455, var_core_value_sig6E78, targetObj352) {
  return {
    'kind': var_core_value_sig6E78,
    'unitType': var_core_value_sigF455,
    'unitId': targetObj352.unitId,
    'subUnitId': targetObj352.subUnitId,
    'selectedIds': Array.from(targetObj352.selectedIds),
    'focusedId': targetObj352.focusedId,
    'pointer': targetObj352.pointer ? {
      ...targetObj352.pointer
    } : null
  };
}
let Un = class extends rxDisposable {
  constructor(var_core_value_sigE7A6, var_core_value_sigB505, var_core_value_sig7428, var_core_value_sig1DCE, var_core_value_sig0567, var_core_value_sigA7F3) {
    super(), this.unitId = var_core_value_sigE7A6, this._session = var_core_value_sigB505, this._adapter = var_core_value_sig7428, this._colorAssignService = var_core_value_sig1DCE, this._memberService = var_core_value_sig0567, this._commandService = var_core_value_sigA7F3, q(this, "_online", false), q(this, "_initialized", false);
  }
  get unitType() {
    return this._adapter['unitType'];
  }
  dispose() {
    this._clearRemotePresences(), super.dispose();
  }
  init() {
    this._initialized || (this._initialized = true, this._session["sessionStatus$"].pipe(takeUntil(this.dispose$)).subscribe(var_core_value_sig0455 => {
      if (var_core_value_sig0455 === sessionStatus.ONLINE) {
        this._online = true;
        let var_core_value_sigC50A = this._adapter['getLocalPresence'](this.unitId);
        var_core_value_sigC50A && this._sendLocalPresence(var_core_value_sigC50A);
        return;
      }
      this._online = false, this._clearRemotePresences();
    }), this._session['event$'].pipe(takeUntil(this.dispose$)).subscribe(targetObj89 => {
      zn(targetObj89) ? this._handleCursorUpdate(targetObj89) : Bn(targetObj89) && this._removeRemotePresence(targetObj89.data["memberID"]);
    }), this._adapter['localPresence$'].pipe(filter(targetObj91 => this._online && targetObj91.unitId === this.unitId), throttle(targetObj92 => timer(targetObj92.shareInterval), {
      'leading': true,
      'trailing': true
    }), takeUntil(this.dispose$)).subscribe(var_core_value_sig77FA => this._sendLocalPresence(var_core_value_sig77FA)));
  }
  _sendLocalPresence(var_core_value_sigEACD) {
    let var_core_value_sig901E = this._session["getMemberID"]();
    if (!var_core_value_sig901E || !this._online) return;
    let targetObj194 = {
      'eventID': collaborationEvent.UPDATE_CURSOR,
      'data': {
        'unitID': this.unitId,
        'memberID': var_core_value_sig901E,
        'selection': JSON.stringify(Hn(this.unitType, this._adapter["presenceKind"], var_core_value_sigEACD))
      }
    };
    this._session['send'](targetObj194, this.unitId).catch(() => undefined);
  }
  _handleCursorUpdate(targetObj196) {
    let {
      memberID: var_core_value_sig102B,
      selection: var_core_value_sigA7DB
    } = targetObj196.data;
    if (var_core_value_sig102B === this._session["getMemberID"]()) return;
    let targetObj197 = Vn(var_core_value_sigA7DB, this.unitType);
    if (!targetObj197 || targetObj197.kind !== this._adapter["presenceKind"] || targetObj197.unitType !== this.unitType || targetObj197.unitId !== this.unitId) return;
    let targetObj198 = this._memberService["getMember"](this.unitId, var_core_value_sig102B),
      targetObj199 = {
        'unitId': targetObj197.unitId,
        'subUnitId': targetObj197.subUnitId,
        'selectedIds': targetObj197.selectedIds,
        'focusedId': targetObj197.focusedId,
        'pointer': targetObj197.pointer,
        'memberId': var_core_value_sig102B,
        'color': this._colorAssignService["assignAColorForMemberID"](var_core_value_sig102B),
        'name': (targetObj198 == null ? undefined : targetObj198.name) ?? var_core_value_sig102B
      };
    this._commandService["executeCommand"](_n.id, {
      'unitType': this.unitType,
      'update': {
        'type': 'set',
        'state': targetObj199
      }
    }).catch(() => undefined);
  }
  _removeRemotePresence(var_core_value_sigA470) {
    this._commandService['executeCommand'](_n.id, {
      'unitType': this.unitType,
      'update': {
        'type': "remove",
        'unitId': this.unitId,
        'memberId': var_core_value_sigA470
      }
    }).catch(() => undefined);
  }
  _clearRemotePresences() {
    this._commandService["executeCommand"](_n.id, {
      'unitType': this.unitType,
      'update': {
        'type': 'clear',
        'unitId': this.unitId
      }
    }).catch(() => undefined);
  }
};
let Wn = class extends rxDisposable {
  constructor(var_core_value_sig19A1, var_core_value_sig81F7, var_core_value_sigBE51, var_core_value_sigAAD1) {
    super(), this._univerInstanceService = var_core_value_sig19A1, this._injector = var_core_value_sig81F7, this._collabSessionService = var_core_value_sigBE51, this._adapterRegistry = var_core_value_sigAAD1, q(this, "_isDisposed", false), q(this, '_entities', new Map()), q(this, "_pendingEntities", new Map()), q(this, "_adapterDisposables", new Map()), this._init();
  }
  dispose() {
    this._isDisposed = true, this._adapterDisposables["forEach"](targetObj93 => targetObj93.dispose()), this._adapterDisposables['clear'](), this._entities["forEach"](targetObj94 => targetObj94.dispose()), this._entities["clear"](), this._pendingEntities["clear"](), super.dispose();
  }
  _init() {
    this._adapterRegistry["adapters$"].pipe(takeUntil(this.dispose$)).subscribe(var_core_value_sigCC9D => this._syncAdapters(var_core_value_sigCC9D));
  }
  _syncAdapters(itemsList20) {
    let itemsSet1 = new Set(itemsList20.map(targetObj95 => targetObj95.unitType));
    this._adapterDisposables["forEach"]((targetObj96, var_core_value_sigCD3A) => {
      itemsSet1.has(var_core_value_sigCD3A) || (targetObj96.dispose(), this._adapterDisposables["delete"](var_core_value_sigCD3A), this._disposeEntitiesForType(var_core_value_sigCD3A));
    }), itemsList20.forEach(targetObj98 => {
      this._adapterDisposables["has"](targetObj98.unitType) || this._bindAdapter(targetObj98);
    });
  }
  _bindAdapter(targetObj204) {
    let var_core_value_sigA504 = new disposableCollection();
    this._adapterDisposables['set'](targetObj204.unitType, var_core_value_sigA504), var_core_value_sigA504.add(targetObj204.activate()), this._univerInstanceService["getAllUnitsForType"](targetObj204.unitType).forEach(targetObj100 => this._startEntity(targetObj100.getUnitId(), targetObj204).catch(() => undefined));
    let options50 = this._univerInstanceService["getTypeOfUnitAdded$"](targetObj204.unitType).subscribe(({
      unit: targetObj101
    }) => this._startEntity(targetObj101.getUnitId(), targetObj204).catch(() => undefined));
    var_core_value_sigA504.add(toDisposable(() => options50.unsubscribe()));
    let options51 = this._univerInstanceService["getTypeOfUnitDisposed$"](targetObj204.unitType).subscribe(targetObj102 => this._disposeEntity(targetObj102.getUnitId()));
    var_core_value_sigA504.add(toDisposable(() => options51.unsubscribe()));
  }
  async _startEntity(var_core_value_sig2F95, targetObj206) {
    if (this._entities["has"](var_core_value_sig2F95) || this._pendingEntities["has"](var_core_value_sig2F95)) return;
    let targetObj207 = {};
    this._pendingEntities["set"](var_core_value_sig2F95, targetObj207);
    let var_core_value_sigE5A6 = await this._collabSessionService["requireSession"](var_core_value_sig2F95).catch(var_core_value_sig413D => {
      throw this._pendingEntities['get'](var_core_value_sig2F95) === targetObj207 && this._pendingEntities["delete"](var_core_value_sig2F95), var_core_value_sig413D;
    });
    if (this._isDisposed || this._pendingEntities['get'](var_core_value_sig2F95) !== targetObj207 || this._adapterRegistry["get"](targetObj206.unitType) !== targetObj206) {
      this._pendingEntities["get"](var_core_value_sig2F95) === targetObj207 && this._pendingEntities['delete'](var_core_value_sig2F95);
      return;
    }
    let targetObj208 = this._injector['createInstance'](Un, var_core_value_sig2F95, var_core_value_sigE5A6, targetObj206);
    targetObj208.init(), this._pendingEntities["delete"](var_core_value_sig2F95), this._entities['set'](var_core_value_sig2F95, targetObj208);
  }
  _disposeEntity(var_core_value_sig38C5) {
    this._pendingEntities["delete"](var_core_value_sig38C5);
    let targetObj212 = this._entities["get"](var_core_value_sig38C5);
    targetObj212 && (targetObj212.dispose(), this._entities['delete'](var_core_value_sig38C5));
  }
  _disposeEntitiesForType(var_core_value_sigCCDC) {
    this._univerInstanceService['getAllUnitsForType'](var_core_value_sigCCDC).forEach(targetObj103 => this._pendingEntities["delete"](targetObj103.getUnitId())), Array.from(this._entities['entries']()).forEach(([var_core_value_sig8EF0, targetObj104]) => {
      targetObj104.unitType === var_core_value_sigCCDC && this._disposeEntity(var_core_value_sig8EF0);
    });
  }
};
let Gn = class extends var_core_value_sigE2BF2 {
  constructor(var_core_value_sigC310, var_core_value_sigA4E8, var_core_value_sigDC07, var_core_value_sig3474, var_core_value_sig4E80, var_core_value_sigD23B) {
    super(), this._beforeCloseService = var_core_value_sigC310, this._localCacheService = var_core_value_sigA4E8, this._collaborationUIEventService = var_core_value_sigDC07, this._messageService = var_core_value_sig3474, this._notificationService = var_core_value_sig4E80, this._localeService = var_core_value_sigD23B, this._setupBeforeClosingHandler(), this._initEvent();
  }
  _setupBeforeClosingHandler() {
    this.disposeWithMe(this._beforeCloseService["registerBeforeClose"](() => {
      if (this._localCacheService['saveTaskMap'].size) return this._localeService['t']('collaboration-client-ui.collaboration.offline-data-not-saved');
    }));
  }
  _initEvent() {
    this.disposeWithMe(this._collaborationUIEventService["event$"].subscribe(targetObj106 => {
      targetObj106.id === collaborationUIEventId.OTHER_CLIENT_EDITING && this._messageService["show"]({
        'type': messageType.Warning,
        'content': this._localeService['t']("collaboration-client-ui.collaboration.single-unit.warning")
      }), targetObj106.id === collaborationUIEventId.CLOSE_ROOM && this._messageService['show']({
        'type': messageType.Warning,
        'content': this._localeService['t']("collaboration-client-ui.collaboration.closeRoom")
      }), targetObj106.id === collaborationUIEventId.PERMISSION_DENIED && this._notificationService["show"]({
        'title': this._localeService['t']("collaboration-client-ui.permission.title"),
        'content': this._localeService['t']("collaboration-client-ui.permission.content"),
        'type': 'error',
        'duration': 0
      }), targetObj106.id === collaborationUIEventId.CONFLICT && this._notificationService["show"]({
        'title': this._localeService['t']("collaboration-client-ui.conflict.title"),
        'content': this._localeService['t']("collaboration-client-ui.conflict.content"),
        'type': "error",
        'duration': 0
      }), targetObj106.id === collaborationUIEventId.JOIN_ROOM_FAILED && this._messageService["show"]({
        'type': messageType.Warning,
        'content': this._localeService['t'](targetObj106.data || '')
      }), targetObj106.id === collaborationUIEventId.SOCKET_FAILED_RETRY && this._messageService["show"]({
        'type': messageType.Warning,
        'content': this._localeService['t']("collaboration-client-ui.session.will-retry")
      }), targetObj106.id === collaborationUIEventId.SOCKET_FAILED && this._messageService["show"]({
        'type': messageType.Error,
        'content': this._localeService['t']('collaboration-client-ui.session.connection-failed')
      }), targetObj106.id === collaborationUIEventId.SUBMIT_CHANGESET_TIMEOUT && this._messageService['show']({
        'type': messageType.Error,
        'content': this._localeService['t']("collaboration-client-ui.session.collaboration-timeout")
      });
    }));
  }
};
let qn = class extends rxDisposable {
  constructor(var_core_value_sig2B2A, var_core_value_sig0B5C, var_core_value_sig7D42, var_core_value_sig8FDE) {
    super(), this._urlService = var_core_value_sig2B2A, this._logService = var_core_value_sig0B5C, this._commandService = var_core_value_sig7D42, this._dataLoaderService = var_core_value_sig8FDE, this._init().catch(var_core_value_sigD57D => this._logService["error"]("[CollaborationDataLoaderController]", var_core_value_sigD57D));
  }
  async _init() {
    let var_core_value_sig78E6 = this._urlService["getParam"]("unit"),
      var_core_value_sig541F = this._urlService["getParam"]('type'),
      var_core_value_sig417B = this._urlService["getParam"]("subunit");
    if (!var_core_value_sig78E6 || !var_core_value_sig541F) {
      this._logService["debug"]("[CollaborationDataLoaderController]", "No unitID or type in URL. Will not load files from remote address.");
      return;
    }
    let var_core_value_sigAA90 = await this._dataLoaderService["loadUnit"](var_core_value_sig78E6, Number(var_core_value_sig541F), var_core_value_sig417B);
    this._disposed || var_core_value_sigAA90 && var_core_value_sigAA90 instanceof workbook && (await this._setupSubUnitSync(var_core_value_sigAA90));
  }
  async _setupSubUnitSync(targetObj214) {
    await this._updateSubUnitFromURLParams(targetObj214), !this._disposed && (targetObj214.activeSheet$['pipe'](takeUntil(this.dispose$)).subscribe(var_core_value_sig2CC7 => {
      var_core_value_sig2CC7 && this._updateURLWithCurrentState(var_core_value_sig2CC7);
    }), this._urlService["urlChange$"].pipe(takeUntil(this.dispose$)).subscribe(() => {
      this._updateSubUnitFromURLParams(targetObj214).catch(var_core_value_sig11D0 => this._logService["error"]("[CollaborationDataLoaderController]", var_core_value_sig11D0));
    }));
  }
  _updateURLWithCurrentState(targetObj216, var_core_value_sig682D = false) {
    let var_core_value_sig1435 = this._urlService["getParam"]("subunit");
    targetObj216.getSheetId() !== var_core_value_sig1435 && this._urlService['setParam']("subunit", targetObj216.getSheetId(), var_core_value_sig682D);
  }
  async _updateSubUnitFromURLParams(targetObj218) {
    var targetObj219;
    let var_core_value_sigE5C3 = this._urlService["getParam"]("subunit");
    if (!var_core_value_sigE5C3 || !targetObj218.getSheetBySheetId(var_core_value_sigE5C3)) {
      let var_core_value_sig4784 = targetObj218.getUnhiddenWorksheets()[0],
        var_core_value_sigC39E = targetObj218.getSheetBySheetId(var_core_value_sig4784);
      if (!var_core_value_sigC39E || (this._updateURLWithCurrentState(var_core_value_sigC39E, true), this._disposed)) return;
      await this._commandService['executeCommand'](setWorksheetActivateCommand.id, {
        'unitId': targetObj218.getUnitId(),
        'subUnitId': var_core_value_sig4784
      });
      return;
    }
    ((targetObj219 = targetObj218.getActiveSheet()) == null ? undefined : targetObj219.getSheetId()) !== var_core_value_sigE5C3 && (await this._commandService["executeCommand"](setWorksheetActivateCommand.id, {
      'unitId': targetObj218.getUnitId(),
      'subUnitId': var_core_value_sigE5C3
    }));
  }
};
let Jn = class {
  constructor(var_core_value_sigCCAA, var_core_value_sigF32D) {
    this._transformService = var_core_value_sigCCAA, this._renderManagerService = var_core_value_sigF32D;
  }
  transformIMECache(var_core_value_sig9427) {
    this._transformUndoRedoStack(var_core_value_sig9427), this._transformPreviousActiveRange(var_core_value_sig9427);
  }
  transformRemoteChangeset(targetObj222) {
    let {
        unitID: var_core_value_sigA345
      } = targetObj222,
      {
        redoCache: targetObj223
      } = this._renderManagerService["getRenderUnitById"](var_core_value_sigA345).with(docIMEInputManagerService).getUndoRedoMutationParamsCache();
    if (targetObj223.length === 0) return targetObj222;
    let var_core_value_sig1561 = tools.deepClone(targetObj222.mutations[0]);
    for (let countVal16 = 0; countVal16 < targetObj223.length; countVal16++) {
      let targetObj17 = {
          'id': "doc.mutation.rich-text-editing",
          'params': {
            ...targetObj223[countVal16]
          }
        },
        options11 = this._transformService["transformMutation"](var_core_value_sig1561, targetObj17, false);
      if (isTransformMutationFailure(options11)) throw options11.error;
      var_core_value_sig1561 = options11.m1Prime;
    }
    return {
      ...tools.deepClone(targetObj222),
      'mutations': [var_core_value_sig1561]
    };
  }
  _transformUndoRedoStack(targetObj226) {
    let {
        unitID: var_core_value_sig842F
      } = targetObj226,
      targetObj227 = this._renderManagerService['getRenderUnitById'](var_core_value_sig842F).with(docIMEInputManagerService),
      {
        undoCache: targetObj228,
        redoCache: targetObj229
      } = targetObj227.getUndoRedoMutationParamsCache();
    if (targetObj228.length === 0 || targetObj229.length === 0) return;
    let itemsList22 = [],
      itemsList23 = [],
      var_core_value_sigBBBC = tools.deepClone(targetObj226.mutations[0]),
      var_core_value_sig5440 = tools.deepClone(targetObj226.mutations[0]);
    for (let countVal17 = targetObj228.length - 1; countVal17 >= 0; countVal17--) {
      let targetObj18 = {
          'id': "doc.mutation.rich-text-editing",
          'params': {
            ...targetObj228[countVal17]
          }
        },
        targetObj19 = {
          'id': 'doc.mutation.rich-text-editing',
          'params': {
            ...targetObj229[countVal17]
          }
        },
        options12 = this._transformService["transformMutation"](var_core_value_sigBBBC, targetObj18, false),
        options13 = this._transformService['transformMutation'](var_core_value_sig5440, targetObj19, false);
      if (isTransformMutationFailure(options12)) throw options12.error;
      if (isTransformMutationFailure(options13)) throw options13.error;
      itemsList22.unshift(options12.m2Prime['params']), itemsList23.unshift(options13.m2Prime["params"]), var_core_value_sigBBBC = options12.m1Prime, var_core_value_sig5440 = options13.m1Prime;
    }
    targetObj227.setUndoRedoMutationParamsCache({
      'undoCache': itemsList22,
      'redoCache': itemsList23
    });
  }
  _transformPreviousActiveRange(targetObj234) {
    let {
        unitID: var_core_value_sig0FD9
      } = targetObj234,
      targetObj235 = this._renderManagerService['getRenderUnitById'](var_core_value_sig0FD9).with(docIMEInputManagerService),
      var_core_value_sigAF82 = targetObj235.getActiveRange();
    if (var_core_value_sigAF82 == null) return;
    let itemsList26 = [{
        'id': "doc.mutation.rich-text-editing",
        'params': {
          'unitId': targetObj234.unitID,
          'actions': null,
          'textRanges': [var_core_value_sigAF82]
        }
      }],
      targetObj236 = this._transformService["transformMutationsWithChangeset"](targetObj234, itemsList26);
    if (!isTransformMutationsWithChangesetSuccess(targetObj236)) throw targetObj236.error;
    let targetObj237 = targetObj236.m2Prime[0].params['textRanges'];
    Array.isArray(targetObj237) && targetObj237.length && targetObj235.setActiveRange(targetObj237[0]);
  }
};
let Yn = class {
  constructor(var_core_value_sig8E65, var_core_value_sig772C, var_core_value_sigF309) {
    this._injector = var_core_value_sig8E65, this._transformService = var_core_value_sig772C, this._docStateChangeManagerService = var_core_value_sigF309;
  }
  transformStateCache(var_core_value_sig44F9) {
    this._transformHistoryAndStateStack(var_core_value_sig44F9);
  }
  transformRemoteChangeset(targetObj242) {
    let {
        unitID: var_core_value_sigF381
      } = targetObj242,
      {
        collaboration: targetObj243
      } = this._docStateChangeManagerService["getStateCache"](var_core_value_sigF381);
    if (targetObj243.length === 0) return targetObj242;
    let var_core_value_sigC844 = tools.deepClone(targetObj242.mutations[0]);
    for (let countVal18 = 0; countVal18 < targetObj243.length; countVal18++) {
      let targetObj20 = {
          'id': "doc.mutation.rich-text-editing",
          'params': {
            'unitId': targetObj243[countVal18].unitId,
            ...targetObj243[countVal18].redoState
          }
        },
        options14 = this._transformService["transformMutation"](var_core_value_sigC844, targetObj20, false);
      if (isTransformMutationFailure(options14)) throw options14.error;
      var_core_value_sigC844 = options14.m1Prime;
    }
    return {
      ...tools.deepClone(targetObj242),
      'mutations': [var_core_value_sigC844]
    };
  }
  _transformHistoryAndStateStack(targetObj246) {
    let {
        unitID: var_core_value_sig0477
      } = targetObj246,
      {
        history: targetObj247,
        collaboration: targetObj248
      } = this._docStateChangeManagerService["getStateCache"](var_core_value_sig0477);
    if (targetObj247.length === 0 && targetObj248.length === 0) return;
    let itemsList28 = [],
      itemsList29 = [],
      var_core_value_sig5215 = tools.deepClone(targetObj246.mutations[0]),
      var_core_value_sig5204 = tools.deepClone(targetObj246.mutations[0]);
    for (let countVal19 = targetObj247.length - 1; countVal19 >= 0; countVal19--) {
      let targetObj21 = {
          'id': "doc.mutation.rich-text-editing",
          'params': {
            'unitId': targetObj247[countVal19].unitId,
            ...targetObj247[countVal19].undoState
          }
        },
        targetObj22 = {
          'id': "doc.mutation.rich-text-editing",
          'params': {
            'unitId': targetObj247[countVal19].unitId,
            ...targetObj247[countVal19].redoState
          }
        },
        options15 = this._transformService["transformMutation"](var_core_value_sig5215, targetObj21, false),
        options16 = this._transformService["transformMutation"](var_core_value_sig5204, targetObj22, false);
      if (isTransformMutationFailure(options15)) throw options15.error;
      if (isTransformMutationFailure(options16)) throw options16.error;
      itemsList28.unshift({
        ...targetObj247[countVal19],
        'undoState': options15.m2Prime["params"],
        'redoState': options16.m2Prime["params"]
      }), var_core_value_sig5215 = options15.m1Prime, var_core_value_sig5204 = options16.m1Prime;
    }
    var_core_value_sig5215 = tools.deepClone(targetObj246.mutations[0]), var_core_value_sig5204 = tools.deepClone(targetObj246.mutations[0]);
    for (let countVal20 = targetObj248.length - 1; countVal20 >= 0; countVal20--) {
      let targetObj23 = {
          'id': "doc.mutation.rich-text-editing",
          'params': {
            'unitId': targetObj248[countVal20].unitId,
            ...targetObj248[countVal20].undoState
          }
        },
        targetObj24 = {
          'id': "doc.mutation.rich-text-editing",
          'params': {
            'unitId': targetObj248[countVal20].unitId,
            ...targetObj248[countVal20].redoState
          }
        },
        options17 = this._transformService['transformMutation'](var_core_value_sig5215, targetObj23, false),
        options18 = this._transformService["transformMutation"](var_core_value_sig5204, targetObj24, false);
      if (isTransformMutationFailure(options17)) throw options17.error;
      if (isTransformMutationFailure(options18)) throw options18.error;
      itemsList29.unshift({
        ...targetObj248[countVal20],
        'undoState': options17.m2Prime["params"],
        'redoState': options18.m2Prime["params"]
      }), var_core_value_sig5215 = options17.m1Prime, var_core_value_sig5204 = options18.m1Prime;
    }
    this._docStateChangeManagerService["setStateCache"](var_core_value_sig0477, {
      'history': itemsList28,
      'collaboration': itemsList29
    });
  }
};
let Q = class {
  constructor(var_core_value_sig5E11, var_core_value_sig4D58) {
    this._docSelectionManagerService = var_core_value_sig5E11, this._transformService = var_core_value_sig4D58;
  }
  prepareTransformSelections(targetObj252) {
    var targetObj253;
    let itemsList32 = this._docSelectionManagerService["getDocRanges"]() ?? [],
      targetObj254 = this._docSelectionManagerService['getSelectionInfo']();
    if (itemsList32.length === 0 || targetObj254 == null) return null;
    let var_core_value_sig7CF3 = targetObj252.unitID,
      itemsList33 = [{
        'id': "doc.mutation.rich-text-editing",
        'params': {
          'unitId': var_core_value_sig7CF3,
          'actions': null,
          'textRanges': itemsList32
        }
      }],
      targetObj255 = this._transformService["transformMutationsWithChangeset"](targetObj252, itemsList33);
    if (!isTransformMutationsWithChangesetSuccess(targetObj255)) throw targetObj255.error;
    let var_core_value_sig4124 = (targetObj253 = targetObj255.m2Prime[0]) == null ? undefined : targetObj253.params,
      var_core_value_sigBF1C = var_core_value_sig4124 && typeof var_core_value_sig4124 == "object" && "textRanges" in var_core_value_sig4124 ? var_core_value_sig4124.textRanges : null;
    if (!Qn(var_core_value_sigBF1C)) return null;
    let var_core_value_sigEEEF = Xn(targetObj252.mutations["some"](targetObj108 => $n(targetObj108.params)) ? var_core_value_sigBF1C.filter(var_core_value_sig6256 => !("tableId" in var_core_value_sig6256)) : var_core_value_sigBF1C, {
        ...targetObj254,
        'options': targetObj254.options ? {
          ...targetObj254.options,
          'wholeDocument': false
        } : undefined
      }),
      targetObj256 = {
        'unitId': var_core_value_sig7CF3,
        'subUnitId': var_core_value_sig7CF3
      };
    this._docSelectionManagerService['replaceSelectionInfoWithoutRefresh'](var_core_value_sigEEEF, targetObj256);
    let isFlag = true;
    return {
      'commit': () => {
        isFlag = false;
      },
      'rollback': () => {
        isFlag && (isFlag = false, this._docSelectionManagerService["replaceSelectionInfoWithoutRefresh"](targetObj254, targetObj256));
      }
    };
  }
};
function Xn(var_core_value_sig8A26, var_core_value_sigD073) {
  let itemsList50 = [],
    itemsList51 = [];
  for (let var_core_value_sigC8F6 of var_core_value_sig8A26) Zn(var_core_value_sigC8F6) ? itemsList51.push(var_core_value_sigC8F6) : itemsList50.push(var_core_value_sigC8F6);
  return {
    ...var_core_value_sigD073,
    'textRanges': itemsList50,
    'rectRanges': itemsList51
  };
}
function Zn(var_core_value_sig7053) {
  return "tableId" in var_core_value_sig7053;
}
function Qn(itemsList54) {
  return Array.isArray(itemsList54) && itemsList54.every(var_core_value_sig52F1 => typeof var_core_value_sig52F1 == "object" && !!var_core_value_sig52F1 && 'startOffset' in var_core_value_sig52F1 && "endOffset" in var_core_value_sig52F1);
}
function $n(itemsList56) {
  return itemsList56 === "tableSource" ? true : Array.isArray(itemsList56) ? itemsList56.some(var_core_value_sig1E84 => $n(var_core_value_sig1E84)) : !itemsList56 || typeof itemsList56 != 'object' ? false : Object.values(itemsList56).some(var_core_value_sig133B => $n(var_core_value_sig133B));
}
let er = class extends var_core_value_sigE2BF2 {
  constructor(var_core_value_sig236B, var_core_value_sig1951, var_core_value_sigFEA0, var_core_value_sig931A, var_core_value_sigEE7D, var_core_value_sig3585, var_core_value_sig31A8) {
    super(), this._collaborationController = var_core_value_sig236B, this._docTransformIMECacheService = var_core_value_sig1951, this._docTransformStateCacheService = var_core_value_sigFEA0, this._docTransformSelectionsService = var_core_value_sig931A, this._docSyncEditingCollabCursorService = var_core_value_sigEE7D, this._messageService = var_core_value_sig3585, this._localeService = var_core_value_sig31A8, q(this, '_status$', new behaviorSubject(collaborationStatus.NOT_COLLAB)), this._initEntityListener();
  }
  _initEntityListener() {
    this.disposeWithMe(this._collaborationController["entityInit$"].subscribe(targetObj109 => {
      targetObj109 instanceof docCollaborationEntity && targetObj109.addHandlerCallback({
        'onTransformIME': var_core_value_sig983D => this._docTransformIMECacheService["transformIMECache"](var_core_value_sig983D),
        'onTransformState': var_core_value_sig9A03 => this._docTransformStateCacheService["transformStateCache"](var_core_value_sig9A03),
        'onPrepareTransformSelections': var_core_value_sig3363 => this._docTransformSelectionsService["prepareTransformSelections"](var_core_value_sig3363),
        'onSyncEditingCollabCursor': var_core_value_sigF64A => this._docSyncEditingCollabCursorService["syncEditingCollabCursor"](var_core_value_sigF64A),
        'onTransformRemoteChangesetByIMECache': var_core_value_sig25EC => this._docTransformIMECacheService["transformRemoteChangeset"](var_core_value_sig25EC),
        'onTransformRemoteChangesetByStateCache': var_core_value_sigA790 => this._docTransformStateCacheService["transformRemoteChangeset"](var_core_value_sigA790)
      });
    }));
  }
};
let tr = class extends var_core_value_sigE2BF2 {
  constructor(var_core_value_sigA4DA, var_core_value_sig6FC0, var_core_value_sig6217, var_core_value_sigB805) {
    super(), this._injector = var_core_value_sigA4DA, this._httpService = var_core_value_sig6FC0, this._logService = var_core_value_sig6217, this._collaborationSessionService = var_core_value_sigB805, q(this, "_memberID", undefined), this._init();
  }
  _init() {
    this._initWindowErrorListener(), this._initUnhandledRejectionListener(), this._monkeyPatchLogService(), this._initUserListener();
  }
  _initUserListener() {
    this.disposeWithMe(this._collaborationSessionService["socket$"].subscribe(targetObj111 => {
      this._memberID = targetObj111 == null ? undefined : targetObj111.memberID;
    }));
  }
  _initWindowErrorListener() {
    let var_core_value_sig4FAE = targetObj113 => {
      var targetObj114;
      this._uploadLog('error', "[Window Error]: " + targetObj113.message + " at " + targetObj113.filename + ':' + targetObj113.lineno + ':' + targetObj113.colno + '\x0a' + (((targetObj114 = targetObj113.error) == null ? undefined : targetObj114.stack) || ''));
    };
    window.addEventListener('error', var_core_value_sig4FAE), this.disposeWithMe(() => {
      window.removeEventListener("error", var_core_value_sig4FAE);
    });
  }
  _initUnhandledRejectionListener() {
    let var_core_value_sig1FCC = targetObj117 => {
      this._uploadLog("error", "[Unhandled Rejection]: " + targetObj117.reason);
    };
    window.addEventListener("unhandledrejection", var_core_value_sig1FCC), this.disposeWithMe(() => {
      window.removeEventListener("unhandledrejection", var_core_value_sig1FCC);
    });
  }
  _monkeyPatchLogService() {
    let var_core_value_sigB7F9 = this._logService['error'].bind(this._logService);
    this._logService["error"] = (...itemsList4) => {
      let strVal1 = itemsList4.map(targetObj25 => targetObj25 instanceof Error ? targetObj25.message + '\x0a' + targetObj25.stack : String(targetObj25)).join('\x20');
      this._uploadLog("error", "[LogService Error]: " + strVal1), var_core_value_sigB7F9(...itemsList4);
    }, this.disposeWithMe(() => {
      this._logService["error"] = var_core_value_sigB7F9;
    });
  }
  _uploadLog(var_core_value_sigB1A2, var_core_value_sig526D) {
    try {
      let targetObj119 = {
        'userId': this._memberID,
        'logLabel': var_core_value_sigB1A2,
        'content': var_core_value_sig526D
      };
      this._httpService["post"]("/universer-api/frontend/logs", {
        'body': targetObj119
      }).catch(() => {});
    } catch {}
  }
};
function nr({
  state$: var_core_value_sigBDB5
}) {
  let targetObj354 = useObservable(var_core_value_sigBDB5, null, true);
  return targetObj354 ? jsxs('div', {
    'data-u-comp': "snapshot-loading-timeout",
    'role': "alert",
    'className': "univer-fixed univer-left-1/2 univer-top-4 univer-z-[1001] univer-flex univer-max-w-[calc(100vw-32px)] -univer-translate-x-1/2 univer-items-center univer-gap-2 univer-rounded-lg univer-bg-gray-0 univer-px-3 univer-py-2 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-bg-gray-700 dark:!univer-text-gray-0",
    'children': [jsx(warningIcon, {
      'className': "univer-size-4 univer-shrink-0 univer-text-amber-500"
    }), jsx("span", {
      'children': targetObj354.content
    }), jsx(button, {
      'size': "small",
      'variant': "primary",
      'onClick': () => window.location["reload"](),
      'children': targetObj354.refreshLabel
    })]
  }) : null;
}
const rr = 'snapshot-loading-';
let ir = class extends var_core_value_sigE2BF2 {
  constructor(var_core_value_sig7161, var_core_value_sig2AB8, var_core_value_sig3FCF, var_core_value_sig675A, targetObj262, var_core_value_sig9D6E) {
    super(), this._snapshotLoadingService = var_core_value_sig7161, this._messageService = var_core_value_sig2AB8, this._localeService = var_core_value_sig3FCF, this._injector = var_core_value_sig675A, this._urlService = var_core_value_sig9D6E, q(this, "_timeoutState$", new behaviorSubject(null)), q(this, "_messageIds", new Set()), q(this, "_blockProgressWatches", new Map()), q(this, '_latestStates', new Map()), q(this, "timeoutState$", this._timeoutState$["asObservable"]());
    let var_core_value_sigB205 = () => createElement(nr, {
      'state$': this.timeoutState$
    });
    this.disposeWithMe(targetObj262.registerComponent(builtInUIPart.GLOBAL, () => connectInjector(var_core_value_sigB205, this._injector))), this.disposeWithMe(this._snapshotLoadingService["state$"].subscribe(itemsList6 => {
      this._latestStates = itemsList6, itemsList6.forEach(var_core_value_sig3AD7 => this._updateMessage(var_core_value_sig3AD7));
    })), this.disposeWithMe(this._urlService['urlChange$'].subscribe(() => {
      this._latestStates['forEach'](var_core_value_sig04E4 => this._updateMessage(var_core_value_sig04E4));
    }));
  }
  dispose() {
    this._messageIds["forEach"](var_core_value_sig1475 => this._messageService["remove"](var_core_value_sig1475)), this._messageIds["clear"](), this._blockProgressWatches["forEach"](({
      timeoutId: var_core_value_sig08B7
    }) => clearTimeout(var_core_value_sig08B7)), this._blockProgressWatches["clear"](), this._timeoutState$["complete"](), super.dispose();
  }
  _updateMessage(targetObj264) {
    let strVal13 = '' + rr + targetObj264.unitId;
    if (targetObj264.stage === snapshotLoadStage.COMPLETE) {
      this._clearBlockProgressWatch(targetObj264.unitId), this._clearTimeoutState(targetObj264.unitId), this._messageService['remove'](strVal13), this._messageIds['delete'](strVal13);
      return;
    }
    if (!this._isVisibleUnit(targetObj264.unitId)) {
      this._clearBlockProgressWatch(targetObj264.unitId), this._clearTimeoutState(targetObj264.unitId), this._messageService["remove"](strVal13), this._messageIds["delete"](strVal13);
      return;
    }
    if (targetObj264.stage === snapshotLoadStage.ERROR) {
      this._clearBlockProgressWatch(targetObj264.unitId), this._clearTimeoutState(targetObj264.unitId), this._messageService['show']({
        'id': strVal13,
        'type': messageType.Error,
        'content': this._localeService['t']("collaboration-client-ui.session.connection-failed")
      }), this._messageIds["delete"](strVal13);
      return;
    }
    if (targetObj264.stage !== snapshotLoadStage.LOADING_BLOCKS || targetObj264.totalBlocks <= 10) {
      this._clearBlockProgressWatch(targetObj264.unitId), this._messageService["remove"](strVal13), this._messageIds["delete"](strVal13);
      return;
    }
    this._watchBlockProgress(targetObj264) || (this._messageService["show"]({
      'id': strVal13,
      'type': messageType.Loading,
      'duration': 1 / 0,
      'content': this._localeService['t']('collaboration-client-ui.collabStatus.fetchMiss') + '\x20' + targetObj264.loadedBlocks + '/' + targetObj264.totalBlocks
    }), this._messageIds["add"](strVal13));
  }
  _watchBlockProgress(targetObj266) {
    let targetObj267 = this._blockProgressWatches['get'](targetObj266.unitId);
    if ((targetObj267 == null ? undefined : targetObj267.loadedBlocks) === targetObj266.loadedBlocks) return targetObj267.timedOut;
    this._clearBlockProgressWatch(targetObj266.unitId);
    let var_core_value_sig1FB9 = setTimeout(() => {
      let targetObj120 = this._blockProgressWatches['get'](targetObj266.unitId);
      if (!targetObj120 || targetObj120.timeoutId !== var_core_value_sig1FB9) return;
      targetObj120.timedOut = true;
      let strVal3 = '' + rr + targetObj266.unitId;
      this._messageService["remove"](strVal3), this._messageIds["delete"](strVal3), this._timeoutState$['next']({
        'unitId': targetObj266.unitId,
        'content': this._localeService['t']("collaboration-client-ui.snapshotLoading.timeout", String(targetObj266.loadedBlocks), String(targetObj266.totalBlocks)),
        'refreshLabel': this._localeService['t']("collaboration-client-ui.snapshotLoading.refresh")
      });
    }, 60000);
    return this._blockProgressWatches["set"](targetObj266.unitId, {
      'loadedBlocks': targetObj266.loadedBlocks,
      'timedOut': false,
      'timeoutId': var_core_value_sig1FB9
    }), false;
  }
  _clearBlockProgressWatch(var_core_value_sig53A9) {
    let targetObj270 = this._blockProgressWatches['get'](var_core_value_sig53A9);
    targetObj270 && (clearTimeout(targetObj270.timeoutId), this._blockProgressWatches["delete"](var_core_value_sig53A9), this._clearTimeoutState(var_core_value_sig53A9));
  }
  _clearTimeoutState(var_core_value_sig691E) {
    var targetObj272;
    ((targetObj272 = this._timeoutState$['value']) == null ? undefined : targetObj272.unitId) === var_core_value_sig691E && this._timeoutState$["next"](null);
  }
  _isVisibleUnit(var_core_value_sig0347) {
    let var_core_value_sig52A3 = this._urlService["getParam"]('unit');
    return !var_core_value_sig52A3 || var_core_value_sig52A3 === var_core_value_sig0347;
  }
};
function ar(targetObj356) {
  var targetObj357, targetObj358;
  let var_core_value_sigB217 = (targetObj357 = targetObj356.stageInfo) == null ? undefined : targetObj357.stage,
    countVal50 = ((targetObj358 = targetObj356.stageInfo) == null ? undefined : targetObj358.totalFormulasToCalculate) || 0;
  return var_core_value_sigB217 === formulaExecuteStageType.START_CALCULATION && countVal50 > 0;
}
function or(targetObj362) {
  return targetObj362.functionsExecutedState === formulaExecutedStateType.SUCCESS;
}
let sr = class extends var_core_value_sigE2BF2 {
  constructor(var_core_value_sigF057, var_core_value_sig72F62, var_core_value_sig9FBA2, var_core_value_sigFE012, var_core_value_sigA2CE, var_core_value_sig19751, var_core_value_sig6EA1) {
    super(), this._messageService = var_core_value_sigF057, this._commandService = var_core_value_sig72F62, this._configService = var_core_value_sig9FBA2, this._httpService = var_core_value_sigFE012, this._univerInstanceService = var_core_value_sigA2CE, this._logService = var_core_value_sig19751, this._localeService = var_core_value_sig6EA1, q(this, "_pollingInterval", null), q(this, '_maxFormulaLimit', 0), q(this, "_currentUsage", 0), q(this, '_taskIds', []), q(this, "_lastResponseTimestamp", 0), this._initCommandInterceptor();
  }
  _initCommandInterceptor() {
    this.disposeWithMe(this._commandService["beforeCommandExecuted"]((targetObj122, var_core_value_sig237B) => {
      if (targetObj122.id !== setFormulaCalculationStartMutation.id) return;
      let targetObj123 = targetObj122.params;
      if (this._hasFormulaInDirtyRanges(targetObj123.dirtyRanges ?? []) && !this._checkCalculationAvailable()) throw this._checkAndWaitForCalculationPermission(targetObj122, var_core_value_sig237B), this._showGuardMessage(), new canceledError();
    })), this.disposeWithMe(this._commandService["onCommandExecuted"]((targetObj126, var_core_value_sig3C5B) => {
      if (targetObj126.id !== setFormulaCalculationNotificationMutation.id) return;
      let var_core_value_sig200B = targetObj126.params;
      if (ar(var_core_value_sig200B)) {
        let var_core_value_sigAEFB = generateRandomId();
        this._taskIds["push"](var_core_value_sigAEFB), this._startCalculationLimit(var_core_value_sigAEFB);
      } else {
        if (or(var_core_value_sig200B) && this._taskIds["length"] > 0) {
          let var_core_value_sigE799 = this._taskIds["shift"]();
          this._releaseCalculationLimit(var_core_value_sigE799);
        }
      }
    }));
  }
  dispose() {
    super.dispose(), this._clearPolling(), this._taskIds = [], this._currentUsage = 0, this._maxFormulaLimit = 0, this._lastResponseTimestamp = 0;
  }
  async _checkAndWaitForCalculationPermission(var_core_value_sig029F1, var_core_value_sig37672) {
    for (let countVal21 = 0; countVal21 < 30; countVal21++) try {
      if (await this._getFormulaLimitStatus(), this._checkCalculationAvailable()) {
        this._applyCommand(var_core_value_sig029F1, var_core_value_sig37672), this._messageService["show"]({
          'content': this._localeService['t']("collaboration-client-ui.formula.calculation.started"),
          'type': messageType.Success
        });
        return;
      }
      await new Promise(var_core_value_sigB601 => {
        this._pollingInterval = window.setTimeout(var_core_value_sigB601, 1000);
      });
    } catch (var_core_value_sig826B) {
      this._logService["error"](var_core_value_sig826B);
    }
    this._messageService["show"]({
      'content': this._localeService['t']("collaboration-client-ui.formula.calculation.unable"),
      'type': messageType.Error
    });
  }
  _applyCommand(targetObj274, var_core_value_sig69122) {
    try {
      this._commandService["executeCommand"](targetObj274.id, targetObj274.params, var_core_value_sig69122);
    } catch (var_core_value_sigC97C) {
      this._logService['error'](var_core_value_sigC97C);
    }
  }
  _setFormulaLimitStatus(targetObj276, var_core_value_sig76642) {
    var_core_value_sig76642 < this._lastResponseTimestamp || (this._lastResponseTimestamp = var_core_value_sig76642, this._maxFormulaLimit = Number.parseInt(targetObj276.maxFormulaLimit), this._currentUsage = Number.parseInt(targetObj276.currentUsage));
  }
  async _startCalculationLimit(var_core_value_sig2281) {
    let timestampMs = Date.now();
    try {
      var targetObj278, targetObj279;
      let strVal5 = ((targetObj278 = this._configService["getConfig"](cOLLABORATION_CLIENT_PLUGIN_CONFIG_KEY)) == null ? undefined : targetObj278.startFormulaLimitUrl) || "/universer-api/license/formula/limit/start",
        options27 = (await this._httpService["post"](strVal5, {
          'body': JSON.stringify({
            'taskId': var_core_value_sig2281
          })
        })).body;
      if (((targetObj279 = options27.error) == null ? undefined : targetObj279.code) !== errorCode.OK) return;
      this._setFormulaLimitStatus(options27.limitInfo, timestampMs);
    } catch (var_core_value_sigE43E) {
      this._logService["error"](var_core_value_sigE43E);
    }
  }
  async _getFormulaLimitStatus(var_core_value_sigEAE52) {
    let timestampMs2 = Date.now();
    try {
      var targetObj282, targetObj283;
      let strVal6 = ((targetObj282 = this._configService["getConfig"](cOLLABORATION_CLIENT_PLUGIN_CONFIG_KEY)) == null ? undefined : targetObj282.getFormulaLimitStatusUrl) || "/universer-api/license/formula/limit/status",
        strVal7 = var_core_value_sigEAE52 ? strVal6 + "?taskId=" + encodeURIComponent(var_core_value_sigEAE52) : strVal6,
        options28 = (await this._httpService["get"](strVal7)).body;
      if (((targetObj283 = options28.error) == null ? undefined : targetObj283.code) !== errorCode.OK) return;
      this._setFormulaLimitStatus(options28.limitInfo, timestampMs2);
    } catch (var_core_value_sig48DD) {
      this._logService["error"](var_core_value_sig48DD);
    }
  }
  async _releaseCalculationLimit(var_core_value_sigCF4E) {
    let timestampMs4 = Date.now();
    try {
      var targetObj286, targetObj287;
      let strVal8 = ((targetObj286 = this._configService['getConfig'](cOLLABORATION_CLIENT_PLUGIN_CONFIG_KEY)) == null ? undefined : targetObj286.releaseFormulaLimitUrl) || "/universer-api/license/formula/limit/done",
        options29 = (await this._httpService["post"](strVal8, {
          'body': JSON.stringify({
            'taskId': var_core_value_sigCF4E
          })
        })).body;
      if (((targetObj287 = options29.error) == null ? undefined : targetObj287.code) !== errorCode.OK) return;
      this._setFormulaLimitStatus(options29.limitInfo, timestampMs4);
    } catch (var_core_value_sig9CD9) {
      this._logService["error"](var_core_value_sig9CD9);
    }
  }
  _checkCalculationAvailable() {
    return this._maxFormulaLimit === 0 || this._maxFormulaLimit - this._currentUsage > 0;
  }
  _clearPolling() {
    this._pollingInterval &&= (clearTimeout(this._pollingInterval), null);
  }
  _showGuardMessage() {
    this._messageService["show"]({
      'content': this._localeService['t']("collaboration-client-ui.formula.calculation.waiting"),
      'type': messageType.Loading
    });
  }
  _hasFormulaInDirtyRanges(var_core_value_sigB2CE) {
    for (let var_core_value_sigFD0C of var_core_value_sigB2CE) {
      let {
          unitId: var_core_value_sigCF89,
          sheetId: var_core_value_sig00CB,
          range: options19
        } = var_core_value_sigFD0C,
        options20 = this._univerInstanceService["getUnit"](var_core_value_sigCF89, univerInstanceType.UNIVER_SHEET);
      if (!options20) continue;
      let options21 = options20.getSheetBySheetId(var_core_value_sig00CB);
      if (!options21) continue;
      let options22 = options21.getCellMatrix();
      for (let target1 = options19.startRow; target1 <= options19.endRow; target1++) for (let target = options19.startColumn; target <= options19.endColumn; target++) {
        let options1 = options22.getValue(target1, target);
        if (options1 && (isFormulaString(options1.f) || isFormulaId(options1.si))) return true;
      }
    }
    return false;
  }
};
let cr = class extends var_core_value_sigE2BF2 {
  constructor(var_core_value_sig443C, var_core_value_sig39B1, var_core_value_sig210D) {
    super(), this._configService = var_core_value_sig443C, this._localStorageService = var_core_value_sig39B1, this._revisionService = var_core_value_sig210D, q(this, "_cachedData", new Map()), q(this, '_saveTaskMap', new Map()), q(this, "_disabled", false);
  }
  disableLocalCache() {
    this._disabled = true;
  }
  enableLocalCache() {
    this._disabled = false;
  }
  get saveTaskMap() {
    return this._saveTaskMap;
  }
  dispose() {
    this.exhaustSavingTask().then(() => super.dispose());
  }
  async loadOfflineData(var_core_value_sigB4B4) {
    return this._disabled ? null : this._localStorageService["getItem"](getLocalCacheKey(var_core_value_sigB4B4));
  }
  async saveOfflineData(var_core_value_sigD407, var_core_value_sig63F32) {
    return !!this._localStorageService["setItem"](getLocalCacheKey(var_core_value_sigD407), var_core_value_sig63F32);
  }
  async backupOfflineData(var_core_value_sig6A71, var_core_value_sig3BF62) {
    let var_core_value_sig38CE2 = this._cachedData['get'](var_core_value_sig6A71) ?? (await this._localStorageService["getItem"](getLocalCacheKey(var_core_value_sig6A71)));
    if (!var_core_value_sig38CE2) return;
    let timestampMs6 = Date.now(),
      var_core_value_sig37A82 = new Date(timestampMs6).toISOString();
    await this._localStorageService['setItem'](getLocalCacheKey(var_core_value_sig6A71) + ":backup:" + timestampMs6, {
      'reason': var_core_value_sig3BF62,
      'createdAt': var_core_value_sig37A82,
      'data': var_core_value_sig38CE2
    });
  }
  updateOfflineData(var_core_value_sigA90D2, var_core_value_sig7A3C2, var_core_value_sig0511, var_core_value_sig1F44) {
    let var_core_value_sigCB04 = this._revisionService['getCurrentRevOfUnit'](var_core_value_sigA90D2);
    this._cachedData['set'](var_core_value_sigA90D2, {
      'unitID': var_core_value_sigA90D2,
      'type': var_core_value_sig7A3C2,
      'awaitingChangeset': var_core_value_sig0511,
      'mutations': var_core_value_sig1F44,
      'rev': var_core_value_sigCB04
    }), this._saveTaskMap["has"](var_core_value_sigA90D2) || this._scheduleSaving(var_core_value_sigA90D2);
  }
  _scheduleSaving(var_core_value_sig947E1) {
    let var_core_value_sig45451 = this._getSaveTimeout();
    var_core_value_sig45451 === 0 ? this._saveCache(var_core_value_sig947E1) : this._saveTaskMap["set"](var_core_value_sig947E1, window.setTimeout(() => this._saveCache(var_core_value_sig947E1), var_core_value_sig45451));
  }
  _getSaveTimeout() {
    return this._configService["getConfig"](lOCAL_CACHE_INTERVAL_KEY) ?? lOCAL_CACHE_INTERVAL;
  }
  _saveCache(var_core_value_sigF39A1) {
    let var_core_value_sigF79C1 = this._saveTaskMap['get'](var_core_value_sigF39A1);
    return var_core_value_sigF79C1 !== undefined && window.clearTimeout(var_core_value_sigF79C1), this._localStorageService['setItem'](getLocalCacheKey(var_core_value_sigF39A1), this._cachedData["get"](var_core_value_sigF39A1)).then(() => this._saveTaskMap["delete"](var_core_value_sigF39A1));
  }
  async exhaustSavingTask() {
    let itemsList36 = [];
    this._saveTaskMap["forEach"]((var_core_value_sig849B, var_core_value_sig5F1A) => {
      window.clearTimeout(var_core_value_sig849B), itemsList36.push(this._saveCache(var_core_value_sig5F1A).then(() => {
        this._saveTaskMap['delete'](var_core_value_sig5F1A);
      }));
    }), await Promise.all(itemsList36);
  }
};
var lr = class extends rxDisposable {
  constructor() {
    super(), q(this, "urlChange$", undefined), this.urlChange$ = fromEvent(window, "popstate").pipe(takeUntil(this.dispose$), shareReplay({
      'bufferSize': 1,
      'refCount': true
    }), mapTo(undefined));
  }
  setParam(var_core_value_sig76581, var_core_value_sigDCF51, var_core_value_sigC786 = false) {
    let url = new URL(window.location["href"]);
    url.searchParams["set"](var_core_value_sig76581, var_core_value_sigDCF51), var_core_value_sigC786 ? window.history['replaceState']('', '', url.toString()) : window.history["pushState"]('', '', url.toString());
  }
  removeParam(var_core_value_sigF0511, var_core_value_sig58251 = false) {
    let url2 = new URL(window.location["href"]);
    url2.searchParams['delete'](var_core_value_sigF0511), var_core_value_sig58251 ? window.history["replaceState"]('', '', url2.toString()) : window.history['pushState']('', '', url2.toString());
  }
  getParam(var_core_value_sig73AF1) {
    return new URL(window.location['href']).searchParams["get"](var_core_value_sig73AF1) ?? undefined;
  }
};
let $ = class extends plugin {
  constructor(var_core_value_sig548A1 = vn, var_core_value_sigE0261, var_core_value_sig339E, var_core_value_sig7550, var_core_value_sig2983) {
    super(), this._config = var_core_value_sig548A1, this._renderManagerService = var_core_value_sigE0261, this._injector = var_core_value_sig339E, this._configService = var_core_value_sig7550, this._commandService = var_core_value_sig2983;
    let {
      ...var_core_value_sigE1B0
    } = merge({}, vn, this._config);
    this._configService['setConfig']('collaboration-client-ui.config', var_core_value_sigE1B0);
  }
  onStarting() {
    this._registerDependencies(), this.disposeWithMe(this._commandService['registerCommand'](_n)), this._initDependencies();
  }
  onRendered() {
    this._registerRenderDependencies();
  }
  _registerDependencies() {
    var targetObj290;
    let itemsList38 = [[xn], [sr], [Kn, {
      'useClass': lr
    }], [iSocketService, {
      'useClass': webSocketService
    }], [iLocalCacheService, {
      'useClass': cr
    }], [X], [Gn], [Z], [Wn], [qn], [ir]];
    this._config["enableDocumentCollaborationUI"] !== false && itemsList38.push([Q], [Jn], [Yn], [wn], [er], [yn]), this._config["enableFrontendLog"] && itemsList38.push([tr]), registerDependencies(this._injector, mergeOverrideWithDependencies(itemsList38, (targetObj290 = this._config) == null ? undefined : targetObj290.override));
  }
  _registerRenderDependencies() {
    this._config["enableDocumentCollaborationUI"] !== false && this.disposeWithMe(this._renderManagerService['registerRenderModule'](univerInstanceType.UNIVER_DOC, [Pn])), this.disposeWithMe(this._renderManagerService["registerRenderModule"](univerInstanceType.UNIVER_SHEET, [In]));
  }
  _initDependencies() {
    touchDependencies(this._injector, [[Z], [Wn], [X], [Gn], [qn], [sr], [ir]]), this._config["enableDocumentCollaborationUI"] !== false && touchDependencies(this._injector, [[er], [yn]]), this._config["enableFrontendLog"] && touchDependencies(this._injector, [[tr]]);
  }
};
export { $ as UniverCollaborationClientUIPlugin };
export { yn, Tn, xn, wn, Dn, Z, Pn, In, Un, Wn, Gn, qn, Jn, Yn, Q, er, tr, ir, sr, cr, $ };
