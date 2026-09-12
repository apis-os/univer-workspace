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
import type { MobileDrawerSnap } from '@univerjs/ui';
import type { ReactNode } from 'react';
interface IMobileRangeSelectorDialogProps {
    visible: boolean;
    snap: MobileDrawerSnap;
    title: string;
    cancelText: string;
    confirmText: string;
    children: ReactNode;
    onSnapChange: (snap: MobileDrawerSnap) => void;
    onClose: () => void;
    onConfirm: () => void;
}
export declare function MobileRangeSelectorDialog(props: IMobileRangeSelectorDialogProps): import("react").JSX.Element | null;
export {};
