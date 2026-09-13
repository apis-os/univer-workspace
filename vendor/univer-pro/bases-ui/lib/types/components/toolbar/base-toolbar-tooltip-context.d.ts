/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * All rights reserved.
 */
import type { ReactElement, ReactNode } from 'react';
export type BaseToolbarTooltipRenderer = (label: string, trigger: ReactElement) => ReactNode;
export declare const BaseToolbarTooltipContext: import("react").Context<BaseToolbarTooltipRenderer | undefined>;
