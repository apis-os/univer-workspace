import { ICommandService } from "@univerjs/core";
import { FEventName, FUniver } from "@univerjs/core/facade";
import { DisableCrosshairHighlightOperation, EnableCrosshairHighlightOperation, SheetsCrosshairHighlightService, ToggleCrosshairHighlightOperation } from "@univerjs/sheets-crosshair-highlight";

//#region src/facade/f-univer.ts
/**
* @ignore
*/
var FUniverSheetsCrosshairHighlightMixin = class extends FUniver {
	/**
	* @ignore
	*/
	_initialize(injector) {
		const commandService = injector.get(ICommandService);
		this.disposeWithMe(this.registerEventHandler(this.Event.CrosshairHighlightEnabledChanged, () => commandService.onCommandExecuted((commandInfo) => {
			if (commandInfo.id === EnableCrosshairHighlightOperation.id || commandInfo.id === DisableCrosshairHighlightOperation.id || commandInfo.id === ToggleCrosshairHighlightOperation.id) {
				const activeSheet = this.getActiveSheet();
				if (!activeSheet) return;
				const eventParams = {
					enabled: this.getCrosshairHighlightEnabled(),
					...activeSheet
				};
				this.fireEvent(this.Event.CrosshairHighlightEnabledChanged, eventParams);
			}
		})));
	}
	setCrosshairHighlightEnabled(enabled) {
		if (enabled) this._commandService.syncExecuteCommand(EnableCrosshairHighlightOperation.id);
		else this._commandService.syncExecuteCommand(DisableCrosshairHighlightOperation.id);
		return this;
	}
	getCrosshairHighlightEnabled() {
		return this._injector.get(SheetsCrosshairHighlightService).enabled;
	}
};
FUniver.extend(FUniverSheetsCrosshairHighlightMixin);

//#endregion
//#region src/facade/f-event.ts
/**
* @ignore
*/
var FSheetsCrosshairHighlightEventNameMixin = class extends FEventName {
	get CrosshairHighlightEnabledChanged() {
		return "CrosshairHighlightEnabledChanged";
	}
};
FEventName.extend(FSheetsCrosshairHighlightEventNameMixin);

//#endregion
export {  };