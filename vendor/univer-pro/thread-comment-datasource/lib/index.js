import { CollaborationSessionService as var_core_value_sigDE08, CommentService as var_core_value_sigACCB, UniverCollaborationClientPlugin as var_core_value_sig7F33 } from '@univerjs-pro/collaboration-client';
import { UniverLicensePlugin as var_core_value_sig0C53 } from '@univerjs-pro/license';
import { CustomRangeType as var_core_value_sigEA04, DependentOn as var_core_value_sig7A62, Disposable as var_core_value_sig8109, IConfigService as var_core_value_sig7565, Inject as var_core_value_sigD4FB, Injector as var_core_value_sig3E71, Plugin as var_core_value_sig01B3, UserManagerService as var_core_value_sig7442, dateKit as var_core_value_sigDF87, merge as var_core_value_sig9EE0 } from '@univerjs/core';
import { HTTPService as var_core_value_sigF051, UniverNetworkPlugin as var_core_value_sig0B45 } from '@univerjs/network';
import { IThreadCommentDataSourceService as var_core_value_sig36F8, ThreadCommentModel as var_core_value_sig03E1, UniverThreadCommentPlugin as var_core_value_sigBB57, isThreadCommentDocumentBody as var_core_value_sig7C4A } from '@univerjs/thread-comment';
import { UniverThreadCommentUIPlugin as var_core_value_sigE799 } from '@univerjs/thread-comment-ui';
import { CommentSolvedStatus as var_core_value_sigB601, CommentUpdateEventType as var_core_value_sig8B71 } from '@univerjs/protocol';
import { bufferTime as var_core_value_sigAEFB } from 'rxjs';
var w = "@univerjs-pro/thread-comment-datasource",
  T = "1.0.0-insiders.20260907-70fc579";
const E = {},
  D = var_core_value_sig9A0D => var_core_value_sigDF87(new Date(+var_core_value_sig9A0D)).format('YYYY/MM/DD\x20HH:mm');
function O(var_core_value_sigA319) {
  if (!var_core_value_sigA319) return null;
  try {
    let var_core_value_sig9572 = JSON.parse(var_core_value_sigA319);
    return var_core_value_sig7C4A(var_core_value_sig9572) ? var_core_value_sig9572 : null;
  } catch {
    return null;
  }
}
const k = async (var_core_value_sig2D58, var_core_value_sig223F) => {
  let var_core_value_sigD749 = var_core_value_sig2D58.get(var_core_value_sig7442),
    var_core_value_sigCFFA = var_core_value_sig2D58.get(var_core_value_sigF051);
  var_core_value_sig223F.forEach(var_core_value_sigD873 => {
    var_core_value_sigD749.getUser(var_core_value_sigD873) && var_core_value_sig223F.delete(var_core_value_sigD873);
  }), var_core_value_sig223F.size && (await var_core_value_sigCFFA.get("/universer-api/user/list", {
    'params': {
      'userIDs': [...var_core_value_sig223F]
    }
  })).body["users"].forEach(var_core_value_sigA12B => {
    var_core_value_sigA12B && var_core_value_sigD749.addUser(var_core_value_sigA12B);
  });
};
function A(var_core_value_sig58C1, var_core_value_sig5090) {
  return function (var_core_value_sigF230, var_core_value_sig09B8) {
    var_core_value_sig5090(var_core_value_sigF230, var_core_value_sig09B8, var_core_value_sig58C1);
  };
}
;
function j(var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A, var_core_value_sig6418) {
  var var_core_value_sig1896 = arguments.length,
    var_core_value_sig0285 = var_core_value_sig1896 < 3 ? var_core_value_sigAD56 : var_core_value_sig6418 === null ? var_core_value_sig6418 = Object.getOwnPropertyDescriptor(var_core_value_sigAD56, var_core_value_sigDB4A) : var_core_value_sig6418,
    var_core_value_sig777D;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') var_core_value_sig0285 = Reflect.decorate(var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A, var_core_value_sig6418);else {
    for (var var_core_value_sig3F4C = var_core_value_sigC368.length - 1; var_core_value_sig3F4C >= 0; var_core_value_sig3F4C--) (var_core_value_sig777D = var_core_value_sigC368[var_core_value_sig3F4C]) && (var_core_value_sig0285 = (var_core_value_sig1896 < 3 ? var_core_value_sig777D(var_core_value_sig0285) : var_core_value_sig1896 > 3 ? var_core_value_sig777D(var_core_value_sigAD56, var_core_value_sigDB4A, var_core_value_sig0285) : var_core_value_sig777D(var_core_value_sigAD56, var_core_value_sigDB4A)) || var_core_value_sig0285);
  }
  return var_core_value_sig1896 > 3 && var_core_value_sig0285 && Object.defineProperty(var_core_value_sigAD56, var_core_value_sigDB4A, var_core_value_sig0285), var_core_value_sig0285;
}
let M = class extends var_core_value_sig8109 {
  constructor(var_core_value_sig6F91, var_core_value_sigF9C7, var_core_value_sig8895, var_core_value_sigC80B) {
    super(), this._commentService = var_core_value_sig6F91, this._threadCommentModel = var_core_value_sigF9C7, this._userService = var_core_value_sig8895, this._injector = var_core_value_sigC80B, this._init(), this._initUserSync();
  }
  _initUserSync() {
    this.disposeWithMe(this._threadCommentModel["commentUpdate$"].pipe(var_core_value_sigAEFB(16)).subscribe(var_core_value_sig3D7D => {
      let var_core_value_sig27E5 = new Set();
      var_core_value_sig3D7D.forEach(var_core_value_sig3EEE => {
        switch (var_core_value_sig3EEE.type) {
          case "add":
            {
              let var_core_value_sig7524 = var_core_value_sig3EEE.payload["personId"];
              var_core_value_sig27E5.add(var_core_value_sig7524);
              break;
            }
          default:
            break;
        }
      }), k(this._injector, var_core_value_sig27E5);
    }));
  }
  _deleteComment(var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632) {
    let var_core_value_sig12F2 = this._threadCommentModel["getComment"](var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632);
    var_core_value_sig12F2 && (var_core_value_sig12F2.parentId ? this._threadCommentModel['deleteComment'](var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig4632) : this._threadCommentModel["deleteThread"](var_core_value_sig284F, var_core_value_sigE154, var_core_value_sig12F2.threadId));
  }
  _resolveComment(var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7) {
    (var_core_value_sigDBB7 === var_core_value_sigB601.Solved || var_core_value_sigDBB7 === var_core_value_sigB601.OpenOrReOpen) && this._threadCommentModel["resolveComment"](var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7 === var_core_value_sigB601.Solved);
  }
  _init() {
    this.disposeWithMe(this._commentService["commentUpdate$"].subscribe(var_core_value_sig8061 => {
      var var_core_value_sig4D4C;
      let var_core_value_sigC9E0 = (var_core_value_sig4D4C = this._threadCommentModel["getUnit"](var_core_value_sig8061.unitId).find(var_core_value_sigBC46 => var_core_value_sigBC46.threadId === var_core_value_sig8061.threadId)) == null ? undefined : var_core_value_sig4D4C.root;
      if (!var_core_value_sigC9E0) return;
      let {
        unitId: var_core_value_sig76BA,
        subUnitId: var_core_value_sigFBFA
      } = var_core_value_sigC9E0;
      switch (var_core_value_sig8061.user && this._userService["addUser"](var_core_value_sig8061.user), var_core_value_sig8061.type) {
        case var_core_value_sig8B71.Reply:
          {
            var var_core_value_sigF602;
            let var_core_value_sig2AD8 = O(var_core_value_sig8061.content);
            if (!var_core_value_sig8061.replyId || !var_core_value_sig8061.createTimestamp || !var_core_value_sig2AD8) return;
            this._threadCommentModel["addComment"](var_core_value_sig76BA, var_core_value_sigFBFA, {
              'unitId': var_core_value_sig76BA,
              'subUnitId': var_core_value_sigFBFA,
              'ref': '',
              'id': var_core_value_sig8061.replyId,
              'dT': D(+var_core_value_sig8061.createTimestamp),
              'threadId': var_core_value_sig8061.threadId,
              'personId': ((var_core_value_sigF602 = var_core_value_sig8061.user) == null ? undefined : var_core_value_sigF602.userID) ?? var_core_value_sig8061.userId,
              'text': var_core_value_sig2AD8,
              'parentId': var_core_value_sigC9E0.id
            });
            break;
          }
        case var_core_value_sig8B71.Delete:
          if (!var_core_value_sig8061.replyId) {
            this._threadCommentModel["deleteThread"](var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigC9E0.threadId);
            break;
          }
          this._deleteComment(var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sig8061.replyId);
          break;
        case var_core_value_sig8B71.Edit:
          {
            let var_core_value_sig2AD0 = O(var_core_value_sig8061.content);
            if (!var_core_value_sig8061.replyId || !var_core_value_sig2AD0) return;
            this._threadCommentModel["updateComment"](var_core_value_sig76BA, var_core_value_sigFBFA, {
              'commentId': var_core_value_sig8061.replyId,
              'text': var_core_value_sig2AD0
            });
            break;
          }
        case var_core_value_sig8B71.Solve:
          this._resolveComment(var_core_value_sig76BA, var_core_value_sigFBFA, var_core_value_sigC9E0.id, var_core_value_sig8061.solved);
          break;
        default:
          break;
      }
    }));
  }
};
M = j([A(0, var_core_value_sigD4FB(var_core_value_sigACCB)), A(1, var_core_value_sigD4FB(var_core_value_sig03E1)), A(2, var_core_value_sigD4FB(var_core_value_sig7442)), A(3, var_core_value_sigD4FB(var_core_value_sig3E71))], M);
function N(var_core_value_sigD65A, var_core_value_sig5A13) {
  let var_core_value_sigF593 = Number(var_core_value_sigD65A == null ? undefined : var_core_value_sigD65A.createTimestamp);
  return !!(var_core_value_sigD65A && var_core_value_sigD65A.replyId && var_core_value_sigD65A.threadId === var_core_value_sig5A13 && var_core_value_sigD65A.userId && Number.isFinite(var_core_value_sigF593) && var_core_value_sigF593 > 0);
}
;
function P(var_core_value_sig3607, var_core_value_sigB512) {
  let var_core_value_sigF2E6 = var_core_value_sig3607.replies[0];
  if (!var_core_value_sig3607.threadId || !N(var_core_value_sigF2E6, var_core_value_sig3607.threadId)) throw Error("Comment service returned an invalid thread");
  return {
    ...var_core_value_sigB512,
    'id': var_core_value_sigF2E6.replyId,
    'resolved': var_core_value_sig3607.solved === 1,
    'dT': D(var_core_value_sigF2E6.createTimestamp),
    'personId': var_core_value_sigF2E6.userId,
    'threadId': var_core_value_sigF2E6.threadId
  };
}
;
function F(var_core_value_sig34C8, var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A) {
  if ((var_core_value_sig34C8 == null ? undefined : var_core_value_sig34C8.threadId) === var_core_value_sigB744 && var_core_value_sig34C8.replies["length"] > 0) {
    let var_core_value_sigD0A8 = (var_core_value_sig1BBD, var_core_value_sigF704) => {
        if (!N(var_core_value_sig1BBD, var_core_value_sigB744)) return null;
        let var_core_value_sig2BCF = O(var_core_value_sig1BBD.content);
        return var_core_value_sig2BCF ? {
          'id': var_core_value_sig1BBD.replyId,
          'threadId': var_core_value_sig1BBD.threadId,
          'dT': D(var_core_value_sig1BBD.createTimestamp),
          'personId': var_core_value_sig1BBD.userId,
          'resolved': var_core_value_sig34C8.solved === var_core_value_sigB601.Solved,
          'unitId': var_core_value_sigEAE2,
          'subUnitId': var_core_value_sigE68A,
          'text': var_core_value_sig2BCF,
          'parentId': var_core_value_sigF704
        } : null;
      },
      var_core_value_sigF4B9 = var_core_value_sigD0A8(var_core_value_sig34C8.replies[0]);
    if (!var_core_value_sigF4B9) return null;
    let var_core_value_sig5CEE = new Set([var_core_value_sigF4B9.id]),
      var_core_value_sigE92A = var_core_value_sig34C8.replies["slice"](1).flatMap(var_core_value_sig0D69 => {
        let var_core_value_sig480E = var_core_value_sigD0A8(var_core_value_sig0D69, var_core_value_sigF4B9.id);
        return !var_core_value_sig480E || var_core_value_sig5CEE.has(var_core_value_sig480E.id) ? [] : (var_core_value_sig5CEE.add(var_core_value_sig480E.id), [var_core_value_sig480E]);
      });
    return {
      ...var_core_value_sigF4B9,
      'children': var_core_value_sigE92A
    };
  }
  return null;
}
let I = class {
  constructor(var_core_value_sig362B, var_core_value_sig5CA5, var_core_value_sigE90F) {
    this._httpService = var_core_value_sig362B, this._userService = var_core_value_sig5CA5, this._sessionService = var_core_value_sigE90F;
  }
  async addComment(var_core_value_sigEFD4) {
    var var_core_value_sig861B;
    let {
        parentId: var_core_value_sig5237,
        unitId: var_core_value_sigBB00,
        text: var_core_value_sig7E54,
        threadId: var_core_value_sig9A8D
      } = var_core_value_sigEFD4,
      var_core_value_sigC259 = ((var_core_value_sig861B = var_core_value_sig7E54.customRanges) == null ? undefined : var_core_value_sig861B.filter(var_core_value_sig26DB => var_core_value_sig26DB.rangeType === var_core_value_sigEA04.COMMENT).map(var_core_value_sigF0F9 => var_core_value_sigF0F9.rangeId)) ?? [],
      var_core_value_sig9C9F = JSON.stringify(var_core_value_sig7E54),
      var_core_value_sigFDEA = (await this._sessionService['requireSession'](var_core_value_sigBB00)).getMemberID();
    if (var_core_value_sig5237) {
      let var_core_value_sig1A0F = {
          'memberId': var_core_value_sigFDEA,
          'unitId': var_core_value_sigBB00,
          'content': var_core_value_sig9C9F,
          'mention': var_core_value_sigC259,
          'threadId': var_core_value_sig9A8D
        },
        var_core_value_sigFBA4 = await this._httpService["post"]('/universer-api/comment/unit/' + var_core_value_sigBB00 + '/reply', {
          'body': var_core_value_sig1A0F
        }),
        var_core_value_sig4383 = var_core_value_sigFBA4.body["reply"];
      if (var_core_value_sigFBA4.body['error'] && var_core_value_sigFBA4.body["error"].code !== 1 || !N(var_core_value_sig4383, var_core_value_sig9A8D)) {
        var var_core_value_sig86D0;
        throw Error(((var_core_value_sig86D0 = var_core_value_sigFBA4.body["error"]) == null ? undefined : var_core_value_sig86D0.message) ?? 'Comment\x20service\x20did\x20not\x20return\x20the\x20created\x20reply');
      }
      return {
        ...var_core_value_sigEFD4,
        'id': var_core_value_sig4383.replyId,
        'dT': var_core_value_sigDF87(+var_core_value_sig4383.createTimestamp).format('YYYY/MM/DD\x20HH:mm'),
        'personId': var_core_value_sig4383.userId
      };
    } else {
      let var_core_value_sig186C = {
          'memberId': var_core_value_sigFDEA,
          'unitId': var_core_value_sigBB00,
          'content': var_core_value_sig9C9F,
          'mention': var_core_value_sigC259
        },
        var_core_value_sigD955 = await this._httpService["post"]("/universer-api/comment/unit/" + var_core_value_sigBB00 + "/add", {
          'body': var_core_value_sig186C
        });
      if (var_core_value_sigD955.body["error"] && var_core_value_sigD955.body['error'].code !== 1 || !var_core_value_sigD955.body["comment"]) {
        var var_core_value_sig4CD2;
        throw Error(((var_core_value_sig4CD2 = var_core_value_sigD955.body["error"]) == null ? undefined : var_core_value_sig4CD2.message) ?? "Comment service did not return the created comment");
      }
      return P(var_core_value_sigD955.body['comment'], var_core_value_sigEFD4);
    }
  }
  async updateComment(var_core_value_sig48CA) {
    var var_core_value_sig50AF;
    let {
        text: var_core_value_sigA942,
        unitId: var_core_value_sigA621
      } = var_core_value_sig48CA,
      var_core_value_sigBBFF = ((var_core_value_sig50AF = var_core_value_sigA942.customRanges) == null ? undefined : var_core_value_sig50AF.filter(var_core_value_sig48BD => var_core_value_sig48BD.rangeType === var_core_value_sigEA04.COMMENT).map(var_core_value_sig429F => var_core_value_sig429F.rangeId)) ?? [],
      var_core_value_sig8889 = JSON.stringify(var_core_value_sigA942),
      var_core_value_sig32F8 = var_core_value_sig48CA.threadId,
      var_core_value_sig5B67 = var_core_value_sig48CA.id,
      var_core_value_sig1758 = {
        'memberId': (await this._sessionService["requireSession"](var_core_value_sigA621)).getMemberID(),
        'unitId': var_core_value_sigA621,
        'threadId': var_core_value_sig32F8,
        'mention': var_core_value_sigBBFF,
        'content': var_core_value_sig8889,
        'replyId': var_core_value_sig5B67
      },
      var_core_value_sig4805 = await this._httpService["post"]("/universer-api/comment/unit/" + var_core_value_sigA621 + '/edit', {
        'body': var_core_value_sig1758
      });
    return !var_core_value_sig4805.body['error'] || var_core_value_sig4805.body["error"].code === 1;
  }
  async resolveComment(var_core_value_sigE67E) {
    let {
        unitId: var_core_value_sig2902
      } = var_core_value_sigE67E,
      var_core_value_sig9989 = var_core_value_sigE67E.threadId,
      var_core_value_sig698E = {
        'memberId': (await this._sessionService["requireSession"](var_core_value_sig2902)).getMemberID(),
        'unitId': var_core_value_sig2902,
        'threadId': var_core_value_sig9989,
        'solved': var_core_value_sigE67E.resolved ? var_core_value_sigB601.Solved : var_core_value_sigB601.OpenOrReOpen
      },
      var_core_value_sig2809 = await this._httpService["post"]("/universer-api/comment/unit/" + var_core_value_sig2902 + "/solved", {
        'body': var_core_value_sig698E
      });
    return !var_core_value_sig2809.body["error"] || var_core_value_sig2809.body["error"].code === 1;
  }
  deleteComment(var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8, var_core_value_sigE9A7) {
    return this._deleteComment(var_core_value_sig2DAB, var_core_value_sig20C8, var_core_value_sigE9A7);
  }
  deleteThread(var_core_value_sigBECE, var_core_value_sig1B22, var_core_value_sig7F72) {
    return this._deleteComment(var_core_value_sigBECE, var_core_value_sig7F72);
  }
  async _deleteComment(var_core_value_sig7B2A, var_core_value_sig06CD, var_core_value_sigA5F1) {
    let var_core_value_sig97A2 = {
        'memberId': (await this._sessionService["requireSession"](var_core_value_sig7B2A)).getMemberID(),
        'threadId': var_core_value_sig06CD,
        'replyId': var_core_value_sigA5F1,
        'unitId': var_core_value_sig7B2A
      },
      var_core_value_sig07E9 = await this._httpService["post"]("/universer-api/comment/unit/" + var_core_value_sig7B2A + "/delete", {
        'body': var_core_value_sig97A2
      });
    return !var_core_value_sig07E9.body['error'] || var_core_value_sig07E9.body["error"].code === 1;
  }
  async listComments(var_core_value_sig4F59, var_core_value_sigF564, var_core_value_sig8CFA) {
    let var_core_value_sig2E11 = {
        'unitId': var_core_value_sig4F59,
        'threadId': var_core_value_sig8CFA
      },
      var_core_value_sig5B69 = await this._httpService['post']("/universer-api/comment/unit/" + var_core_value_sig4F59 + "/list", {
        'body': var_core_value_sig2E11
      });
    if (var_core_value_sig5B69.body["error"] && var_core_value_sig5B69.body["error"].code !== 1) throw Error(var_core_value_sig5B69.body["error"].message || "Comment service failed to list comments");
    let var_core_value_sigB098 = var_core_value_sig8CFA.map(var_core_value_sigF62A => {
      var var_core_value_sig8178;
      return F((var_core_value_sig8178 = var_core_value_sig5B69.body["comments"]) == null ? undefined : var_core_value_sig8178[var_core_value_sigF62A], var_core_value_sigF62A, var_core_value_sig4F59, var_core_value_sigF564);
    }).filter(Boolean);
    return Object.values(var_core_value_sig5B69.body["users"] ?? {}).forEach(var_core_value_sigE9ED => {
      this._userService["addUser"](var_core_value_sigE9ED);
    }), var_core_value_sigB098;
  }
  saveCommentToSnapshot(var_core_value_sigCE71) {
    return {
      'id': var_core_value_sigCE71.id,
      'threadId': var_core_value_sigCE71.threadId,
      'ref': var_core_value_sigCE71.ref
    };
  }
};
I = j([A(0, var_core_value_sigD4FB(var_core_value_sigF051)), A(1, var_core_value_sigD4FB(var_core_value_sig7442)), A(2, var_core_value_sigD4FB(var_core_value_sigDE08))], I);
let L = class extends var_core_value_sig8109 {
  constructor(var_core_value_sig21D8, var_core_value_sig2B65) {
    super(), this._threadCommentDataSourceService = var_core_value_sig21D8, this._threadCommentDataSource = var_core_value_sig2B65, this._initDataSource();
  }
  _initDataSource() {
    this._threadCommentDataSourceService["dataSource"] = this._threadCommentDataSource, this._threadCommentDataSourceService["syncUpdateMutationToColla"] = false;
  }
};
L = j([A(0, var_core_value_sig36F8), A(1, var_core_value_sigD4FB(I))], L);
function R(var_core_value_sig3E68) {
  '@babel/helpers - typeof';

  return R = typeof Symbol == "function" && typeof Symbol.iterator == 'symbol' ? function (var_core_value_sigD7EA) {
    return typeof var_core_value_sigD7EA;
  } : function (var_core_value_sigB33B) {
    return var_core_value_sigB33B && typeof Symbol == "function" && var_core_value_sigB33B.constructor === Symbol && var_core_value_sigB33B !== Symbol.prototype ? "symbol" : typeof var_core_value_sigB33B;
  }, R(var_core_value_sig3E68);
}
;
function z(var_core_value_sigF4C5, var_core_value_sig5410) {
  if (R(var_core_value_sigF4C5) != 'object' || !var_core_value_sigF4C5) return var_core_value_sigF4C5;
  var var_core_value_sig492F = var_core_value_sigF4C5[Symbol.toPrimitive];
  if (var_core_value_sig492F !== undefined) {
    var var_core_value_sig8EA0 = var_core_value_sig492F.call(var_core_value_sigF4C5, var_core_value_sig5410 || 'default');
    if (R(var_core_value_sig8EA0) != 'object') return var_core_value_sig8EA0;
    throw TypeError('@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.');
  }
  return (var_core_value_sig5410 === "string" ? String : Number)(var_core_value_sigF4C5);
}
;
function B(var_core_value_sigA6F6) {
  var var_core_value_sigCDDA = z(var_core_value_sigA6F6, "string");
  return R(var_core_value_sigCDDA) == "symbol" ? var_core_value_sigCDDA : var_core_value_sigCDDA + '';
}
;
function V(var_core_value_sigE243, var_core_value_sig74A8, var_core_value_sig21B2) {
  return (var_core_value_sig74A8 = B(var_core_value_sig74A8)) in var_core_value_sigE243 ? Object.defineProperty(var_core_value_sigE243, var_core_value_sig74A8, {
    'value': var_core_value_sig21B2,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_core_value_sigE243[var_core_value_sig74A8] = var_core_value_sig21B2, var_core_value_sigE243;
}
let H = class extends var_core_value_sig01B3 {
  constructor(var_core_value_sig24B9 = E, var_core_value_sigE627, var_core_value_sigEF3E) {
    super(), this._config = var_core_value_sig24B9, this._injector = var_core_value_sigE627, this._configService = var_core_value_sigEF3E;
    let {
      ...var_core_value_sig273D
    } = var_core_value_sig9EE0({}, E, this._config);
    this._configService["setConfig"]("thread-comment-data-source.config", var_core_value_sig273D);
  }
  onStarting() {
    [[I], [L], [M]].forEach(var_core_value_sigB577 => {
      this._injector["add"](var_core_value_sigB577);
    });
  }
  onReady() {
    this._injector["get"](L), this._injector["get"](M);
  }
};
V(H, "pluginName", 'UNIVER_THREAD_COMMENT_DATA_SOURCE_PLUGIN'), V(H, "packageName", w), V(H, 'version', T), H = j([var_core_value_sig7A62(var_core_value_sig0C53, var_core_value_sig0B45, var_core_value_sigBB57, var_core_value_sigE799, var_core_value_sig7F33), A(1, var_core_value_sigD4FB(var_core_value_sig3E71)), A(2, var_core_value_sig7565)], H);
export { H as UniverThreadCommentDataSourcePlugin };
