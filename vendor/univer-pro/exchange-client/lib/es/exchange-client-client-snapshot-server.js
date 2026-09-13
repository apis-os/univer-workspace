import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, IConfigService, ILogService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, createIdentifier, merge, registerDependencies, resolveWithBasePath, toDisposable, touchDependencies } from "@univerjs/core";
import { HTTPEventType, HTTPResponseError, HTTPService, UniverNetworkPlugin } from "@univerjs/network";
import { ClockIcon, CloseIcon, DirectExportIcon, DocsMultiIcon, ErrorIcon, ExportIcon, FolderIcon, LoadingMultiIcon, ShareRangeIcon, SheetsMultiIcon, SlidesMultiIcon, SuccessIcon } from "@univerjs/icons";
import { BuiltInUIPart, ComponentManager, IMessageService, IUIPartsService, IconManager, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { Button, MessageType, Radio, Select, Tooltip, clsx, scrollbarClassName } from "@univerjs/design";
import { useRef, useState } from "react";
import { ErrorCode, FileSource } from "@univerjs/protocol";
import { jsx, jsxs } from "react/jsx-runtime";
import { BehaviorSubject, Subject } from "rxjs";
import { ISnapshotServerService, SnapshotService, b64EncodeUnicode, textDecoder, textEncoder } from "@univerjs-pro/collaboration";
import { deflateSync } from "fflate";
import { H } from "./internal-glue.js";
var bt = class {
  constructor() {
    H(this, "_sheetBlockCache", new Map());
  }
  getUnitOnRev() {
    return Promise.resolve({
      snapshot: {
        unitID: "",
        type: UniverInstanceType.UNIVER_SHEET,
        rev: 0,
        workbook: undefined,
        doc: undefined,
        slide: undefined,
        board: undefined
      },
      changesets: [],
      error: {
        code: ErrorCode.OK,
        message: ""
      }
    });
  }
  getSheetBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 = this._sheetBlockCache["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.blockID);
    return Promise.resolve({
      block: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410,
      error: {
        code: ErrorCode.OK,
        message: ""
      }
    });
  }
  getDeserializedSheetBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = this._sheetBlockCache["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415.blockID);
    return Promise.resolve({
      block: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 === undefined ? undefined : {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416,
        data: JSON.parse(textDecoder.decode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416.data))
      },
      error: {
        code: ErrorCode.OK,
        message: ""
      }
    });
  }
  fetchMissingChangesets() {
    return Promise.resolve({
      changesets: [],
      error: {
        code: ErrorCode.OK,
        message: ""
      }
    });
  }
  getResourcesRequest() {
    return Promise.resolve({
      resources: {},
      error: {
        code: ErrorCode.OK,
        message: ""
      }
    });
  }
  saveSnapshot() {
    return Promise.resolve({
      error: {
        code: ErrorCode.OK,
        message: ""
      }
    });
  }
  updateSnapshot() {
    return Promise.resolve({
      error: {
        code: ErrorCode.OK,
        message: ""
      }
    });
  }
  saveSheetBlock(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421) {
    let {
      block: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 ? (this._sheetBlockCache["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422), Promise.resolve({
      error: {
        code: ErrorCode.OK,
        message: ""
      },
      blockID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.id
    })) : Promise.resolve({
      error: {
        code: ErrorCode.UNDEFINED,
        message: "block is required"
      },
      blockID: ""
    });
  }
  saveChangeset() {
    return Promise.resolve({
      error: {
        code: ErrorCode.OK,
        message: ""
      },
      concurrent: []
    });
  }
  copyFileMeta() {
    return Promise.resolve({
      error: undefined,
      fileMetaId: ""
    });
  }
  getLatestCsReqIdBySid() {
    return Promise.resolve({
      error: undefined,
      latestReqID: 0
    });
  }
};
export { bt as ClientSnapshotServerService };
