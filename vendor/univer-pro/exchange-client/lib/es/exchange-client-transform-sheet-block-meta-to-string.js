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
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 => {
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.id] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406,
      data: b64EncodeUnicode(textDecoder.decode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.data))
    };
  }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10;
}
export { yt as transformSheetBlockMetaToString };
