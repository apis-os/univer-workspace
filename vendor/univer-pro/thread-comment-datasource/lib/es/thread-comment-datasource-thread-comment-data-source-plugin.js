import { CollaborationSessionService, CommentService, UniverCollaborationClientPlugin } from '@univerjs-pro/collaboration-client';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { CustomRangeType, DependentOn, Disposable, IConfigService, Inject, Injector, Plugin, UserManagerService, dateKit, merge } from '@univerjs/core';
import { HTTPService, UniverNetworkPlugin } from '@univerjs/network';
import { IThreadCommentDataSourceService, ThreadCommentModel, UniverThreadCommentPlugin, isThreadCommentDocumentBody } from '@univerjs/thread-comment';
import { UniverThreadCommentUIPlugin } from '@univerjs/thread-comment-ui';
import { CommentSolvedStatus, CommentUpdateEventType } from '@univerjs/protocol';
import { bufferTime } from 'rxjs';
const E = {},
  D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 => dateKit(new Date(+var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173)).format('YYYY/MM/DD\x20HH:mm');
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) return null;
  try {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174);
    return isThreadCommentDocumentBody(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2) ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 : null;
  } catch {
    return null;
  }
}
const k = async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177) => {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.get(UserManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176.get(HTTPService);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178.getUser(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645);
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.size && (await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.get("/universer-api/user/list", {
    'params': {
      'userIDs': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177]
    }
  })).body["users"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178.addUser(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647);
  });
};
let M = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) {
    super(), this._commentService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, this._threadCommentModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, this._userService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, this._init(), this._initUserSync();
  }
  _initUserSync() {
    this.disposeWithMe(this._threadCommentModel["commentUpdate$"].pipe(bufferTime(16)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => {
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => {
        switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.type) {
          case "add":
            {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.payload["personId"];
              var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
              break;
            }
          default:
            break;
        }
      }), k(this._injector, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299);
    }));
  }
  _deleteComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = this._threadCommentModel["getComment"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.parentId ? this._threadCommentModel['deleteComment'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663) : this._threadCommentModel["deleteThread"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.threadId));
  }
  _resolveComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672) {
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 === CommentSolvedStatus.Solved || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 === CommentSolvedStatus.OpenOrReOpen) && this._threadCommentModel["resolveComment"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 === CommentSolvedStatus.Solved);
  }
  _init() {
    this.disposeWithMe(this._commentService["commentUpdate$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = this._threadCommentModel["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.unitId).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.threadId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.threadId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.root;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) return;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610;
      switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.user && this._userService["addUser"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.user), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.type) {
        case CommentUpdateEventType.Reply:
          {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.content);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.replyId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.createTimestamp || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) return;
            this._threadCommentModel["addComment"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, {
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612,
              'ref': '',
              'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.replyId,
              'dT': D(+var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.createTimestamp),
              'threadId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.threadId,
              'personId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.user) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.userID) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.userId,
              'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461,
              'parentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.id
            });
            break;
          }
        case CommentUpdateEventType.Delete:
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.replyId) {
            this._threadCommentModel["deleteThread"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.threadId);
            break;
          }
          this._deleteComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.replyId);
          break;
        case CommentUpdateEventType.Edit:
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.content);
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.replyId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) return;
            this._threadCommentModel["updateComment"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, {
              'commentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.replyId,
              'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462
            });
            break;
          }
        case CommentUpdateEventType.Solve:
          this._resolveComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.solved);
          break;
        default:
          break;
      }
    }));
  }
};
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.createTimestamp);
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.replyId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.threadId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.userId && Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2) && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 > 0);
}
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.replies[0];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.threadId || !N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.threadId)) throw Error("Comment service returned an invalid thread");
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207,
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.replyId,
    'resolved': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206.solved === 1,
    'dT': D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.createTimestamp),
    'personId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.userId,
    'threadId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.threadId
  };
}
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215) {
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.threadId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.replies["length"] > 0) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621) => {
        if (!N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213)) return null;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.content);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 ? {
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.replyId,
          'threadId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.threadId,
          'dT': D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.createTimestamp),
          'personId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.userId,
          'resolved': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.solved === CommentSolvedStatus.Solved,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215,
          'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
          'parentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621
        } : null;
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.replies[0]);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678) return null;
    let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.id]),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.replies["slice"](1).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.id);
        return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.id) ? [] : (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.id), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627]);
      });
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678,
      'children': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A
    };
  }
  return null;
}
let I = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) {
    this._httpService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, this._userService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, this._sessionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681;
  }
  async addComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686;
    let {
        parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689,
        threadId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.rangeType === CustomRangeType.COMMENT).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.rangeId)) ?? [],
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = (await this._sessionService['requireSession'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688)).getMemberID();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687) {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
          'memberId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688,
          'content': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
          'mention': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1,
          'threadId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = await this._httpService["post"]('/universer-api/comment/unit/' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 + '/reply', {
          'body': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.body["reply"];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.body['error'] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.body["error"].code !== 1 || !N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690)) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692;
        throw Error(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.body["error"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.message) ?? 'Comment\x20service\x20did\x20not\x20return\x20the\x20created\x20reply');
      }
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.replyId,
        'dT': dateKit(+var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.createTimestamp).format('YYYY/MM/DD\x20HH:mm'),
        'personId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.userId
      };
    } else {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
          'memberId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688,
          'content': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
          'mention': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = await this._httpService["post"]("/universer-api/comment/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 + "/add", {
          'body': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1
        });
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.body["error"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.body['error'].code !== 1 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.body["comment"]) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693;
        throw Error(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.body["error"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.message) ?? "Comment service did not return the created comment");
      }
      return P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.body['comment'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685);
    }
  }
  async updateComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104;
    let {
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.rangeType === CustomRangeType.COMMENT).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.rangeId)) ?? [],
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.threadId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.id,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = {
        'memberId': (await this._sessionService["requireSession"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106)).getMemberID(),
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106,
        'threadId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
        'mention': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3,
        'content': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2,
        'replyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = await this._httpService["post"]("/universer-api/comment/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 + '/edit', {
        'body': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3
      });
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.body['error'] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.body["error"].code === 1;
  }
  async resolveComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117) {
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.threadId,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
        'memberId': (await this._sessionService["requireSession"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118)).getMemberID(),
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118,
        'threadId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119,
        'solved': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.resolved ? CommentSolvedStatus.Solved : CommentSolvedStatus.OpenOrReOpen
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = await this._httpService["post"]("/universer-api/comment/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 + "/solved", {
        'body': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5
      });
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.body["error"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.body["error"].code === 1;
  }
  deleteComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) {
    return this._deleteComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128);
  }
  deleteThread(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) {
    return this._deleteComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135);
  }
  async _deleteComment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = {
        'memberId': (await this._sessionService["requireSession"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139)).getMemberID(),
        'threadId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140,
        'replyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141,
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142 = await this._httpService["post"]("/universer-api/comment/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 + "/delete", {
        'body': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7
      });
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.body['error'] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142.body["error"].code === 1;
  }
  async listComments(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147,
        'threadId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 = await this._httpService['post']("/universer-api/comment/unit/" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 + "/list", {
        'body': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9
      });
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.body["error"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.body["error"].code !== 1) throw Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.body["error"].message || "Comment service failed to list comments");
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638;
      return F((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.body["comments"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148);
    }).filter(Boolean);
    return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.body["users"] ?? {}).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => {
      this._userService["addUser"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641);
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5;
  }
  saveCommentToSnapshot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155) {
    return {
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.id,
      'threadId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.threadId,
      'ref': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.ref
    };
  }
};
let L = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158) {
    super(), this._threadCommentDataSourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, this._threadCommentDataSource = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, this._initDataSource();
  }
  _initDataSource() {
    this._threadCommentDataSourceService["dataSource"] = this._threadCommentDataSource, this._threadCommentDataSourceService["syncUpdateMutationToColla"] = false;
  }
};
let H = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 = E, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168
    } = merge({}, E, this._config);
    this._configService["setConfig"]("thread-comment-data-source.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168);
  }
  onStarting() {
    [[I], [L], [M]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => {
      this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643);
    });
  }
  onReady() {
    this._injector["get"](L), this._injector["get"](M);
  }
};
export { H as UniverThreadCommentDataSourcePlugin };
export { M, I, L };
