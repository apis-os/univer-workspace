/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { IGroupBaseBound } from '@univerjs/core';
import type { SpreadsheetSkeleton } from '@univerjs/engine-render';
import type { ICellOverGridPosition } from '@univerjs/sheets';
import type { ISheetDrawing, ISheetFloatDom, ISheetImage } from './sheet-drawing.service';
import { SheetDrawingAnchorType } from './sheet-drawing.service';
/**
 * Anchor a drawing to one cell while keeping a fixed pixel extent.
 */
export interface ISheetDrawingOneCellPlacement {
    /** Placement discriminator. */
    kind: SheetDrawingAnchorType.Position;
    /** Zero-based anchor cell and pixel offsets from its top-left corner. */
    from: ICellOverGridPosition;
    /** Drawing width in pixels. */
    width: number;
    /** Drawing height in pixels. */
    height: number;
}
/**
 * Anchor a drawing between two cell markers.
 */
export interface ISheetDrawingTwoCellPlacement {
    /** Placement discriminator. */
    kind: SheetDrawingAnchorType.Both;
    /** Zero-based start cell and pixel offsets. */
    from: ICellOverGridPosition;
    /** Zero-based end cell and pixel offsets. */
    to: ICellOverGridPosition;
}
/**
 * Position a drawing in the Sheet canvas pixel coordinate system.
 */
export interface ISheetDrawingAbsolutePlacement {
    /** Placement discriminator. */
    kind: SheetDrawingAnchorType.None;
    /** Horizontal pixel offset from the Sheet canvas origin. */
    left: number;
    /** Vertical pixel offset from the Sheet canvas origin. */
    top: number;
    /** Drawing width in pixels. */
    width: number;
    /** Drawing height in pixels. */
    height: number;
}
/**
 * Explicit Sheet drawing placement.
 */
export type ISheetDrawingPlacement = ISheetDrawingOneCellPlacement | ISheetDrawingTwoCellPlacement | ISheetDrawingAbsolutePlacement;
/**
 * Infer cell markers from model-space bounds after the anchor semantics have
 * been selected explicitly.
 */
export interface ISheetDrawingPlacementByBounds {
    /** Position, Both, or None semantics. */
    kind: SheetDrawingAnchorType;
    /** Bounds in the Sheet model coordinate system. */
    bounds: IGroupBaseBound;
}
/**
 * Exact Placement or model-space bounds to normalize into one.
 */
export type ISheetDrawingPlacementInput = ISheetDrawingPlacement | ISheetDrawingPlacementByBounds;
export declare function getSheetDrawingPlacement(drawing: ISheetDrawing): ISheetDrawingPlacement;
export declare function applySheetDrawingPlacement(drawing: ISheetImage, input: ISheetDrawingPlacementInput, skeleton?: SpreadsheetSkeleton): ISheetImage;
export declare function applySheetDrawingPlacement(drawing: ISheetFloatDom, input: ISheetDrawingPlacementInput, skeleton?: SpreadsheetSkeleton): ISheetFloatDom;
export declare function applySheetDrawingPlacement(drawing: ISheetDrawing, input: ISheetDrawingPlacementInput, skeleton?: SpreadsheetSkeleton): ISheetDrawing;
/**
 * Normalize exact markers or model-space bounds to the authoritative
 * Position, Both, or None Placement.
 */
export declare function normalizeSheetDrawingPlacement(input: ISheetDrawingPlacementInput, skeleton?: SpreadsheetSkeleton): ISheetDrawingPlacement;
