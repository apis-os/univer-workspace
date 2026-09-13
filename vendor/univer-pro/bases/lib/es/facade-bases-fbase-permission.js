import { ApplyBaseJson1Mutation, BASE_TABLE_NAME_REQUIREMENTS, BaseConditionalColorRuleUpdateType, BaseEventSource, BaseHierarchyErrorCode, BatchCreateBaseRecordsCommand, BatchDeleteBaseRecordsCommand, ChangeBaseFieldTypeCommand, CreateBaseChildRecordCommand, CreateBaseFieldCommand, CreateBaseRecordCommand, CreateBaseTableCommand, CreateBaseViewCommand, DeleteBaseFieldCommand, DeleteBaseRecordCommand, DeleteBaseTableCommand, DeleteBaseViewCommand, DuplicateBaseRecordCommand, IBaseProjectionService, MoveBaseFieldCommand, MoveBaseHierarchyRecordCommand, MoveBaseViewCommand, RenameBaseTableCommand, RenameBaseViewCommand, SetBaseNameCommand, SetBasePermissionCommand, SetBaseRangeValuesCommand, SetBaseRecordValuesCommand, SetBaseTableHierarchyFieldCommand, SetBaseViewFieldOrderCommand, SetBaseViewFieldVisibleCommand, SetBaseViewFieldWidthCommand, SetBaseViewFilterCommand, SetBaseViewGroupCommand, SetBaseViewSortCommand, UpdateBaseCellCommand, UpdateBaseFieldCommand, UpdateBaseRecordOrderCommand, UpdateBaseViewConditionalColorRulesCommand, UpdateBaseViewConfigCommand, ValidateBaseFormulaCommand, buildBaseHierarchyIndex, canEditBaseTargets, copyBaseTableSnapshot, createUniqueBaseTableName, ensureBaseTableCellLayout, getActiveBaseHierarchyFieldIds, getBaseCellValue, getBaseFieldPermissionObjectId, getBaseFormulaTableName, getBaseHierarchyDeletePromotions, getBasePermissionValue, getBaseRecordPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, getRecordLinkFieldConfig, matchesBaseCondition, parseRecordLinkIds, resolveBaseHierarchyFieldId, resolveBaseRangeHierarchyPatches, searchBaseTable, serializeRecordLinkIds, validateBaseHierarchyRecordCreations, validateBaseHierarchyRecordPatches, validateBaseTableName, validateRecordLinkValue } from '@univerjs-pro/bases';
import { BASE_RECORD_ID_FIELD_ID, BaseConditionalColorOperator, BaseConditionalColorTarget, BaseConditionalDateMode, BaseFieldType, BaseFilterConjunction, BaseFilterOperator, BaseHierarchyInvalidReason, BaseRecordLinkRole, BaseSortDirection, BaseViewType, CanceledError, ICommandService, IPermissionService, IResourceLoaderService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, createDefaultBaseTableSnapshot, generateRandomId } from '@univerjs/core';
import * as var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461029 from '@univerjs/core/facade';
import { FBaseInitialable, FEnum, FEventName, FUniver } from '@univerjs/core/facade';
import { UnitAction } from '@univerjs/protocol';
import { UpsertHostExternalReferencesCommand } from '@univerjs-pro/engine-formula';
var at = class {
    constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46305, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46306, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46307) {
      this._unitId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46305, this._commandService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46306, this._permissionService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46307;
    }
    async setPoint(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46311, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46312) {
      await this._commandService["executeCommand"](SetBasePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._unitId,
        'action': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46311,
        'value': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46312
      });
    }
    getPoint(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46315) {
      return getBasePermissionValue(this._permissionService, this._unitId, this._unitId, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46315);
    }
    async setEditable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46317 = true) {
      await this._commandService["executeCommand"](SetBasePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._unitId,
        'action': UnitAction.Edit,
        'value': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46317
      });
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](SetBasePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._unitId,
        'action': UnitAction.Edit,
        'value': false
      });
    }
    canEdit() {
      return getBasePermissionValue(this._permissionService, this._unitId, this._unitId, UnitAction.Edit);
    }
  },
  I = class {
    constructor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46319, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46320, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46322, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46323) {
      this._unitId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46319, this._objectId = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46320, this._parentObjectIds = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46321, this._commandService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46322, this._permissionService = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46323;
    }
    async setEditable(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46329 = true) {
      await this._commandService['executeCommand'](SetBasePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._objectId,
        'action': UnitAction.Edit,
        'value': var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46329
      });
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](SetBasePermissionCommand.id, {
        'unitId': this._unitId,
        'objectId': this._objectId,
        'action': UnitAction.Edit,
        'value': false
      });
    }
    canEdit() {
      return canEditBaseTargets(this._permissionService, this._unitId, [...this._parentObjectIds, this._objectId]);
    }
  };
export { at as FBasePermission, I as FBaseObjectPermission };
