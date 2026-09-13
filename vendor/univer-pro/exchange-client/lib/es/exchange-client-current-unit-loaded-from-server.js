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
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F10(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.get(IUniverInstanceService).getCurrentUnitOfType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.has(SnapshotService) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.has(ISnapshotServerService) ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.get(SnapshotService).isUnitLoadedFromServer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604);
}
export { fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F10 as isCurrentUnitLoadedFromServer };
