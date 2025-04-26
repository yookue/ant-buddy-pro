/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import {type TabsType} from 'antd/es/tabs';
import {type Placement as RcPlacement} from 'rc-select/es/BaseSelect';


export type WithFalse<T> = T | false;

export type AxisDirectionType = 'horizontal' | 'vertical';

export type BeforeAfterType = 'before' | 'after';

export type ClickHoverType = 'click' | 'hover';

export type CircleSquareShape = 'circle' | 'square';

export type FileSizeUint = 'KB' | 'MB' | 'GB' | 'TB';

export type LabelValueType = 'label' | 'value';

export type PaddingSpaceType = WithFalse<'padding-0' | 'padding-xxs' | 'padding-xs' | 'padding-sm' | 'padding-md' | 'padding-lg' | 'padding-x-0' | 'padding-x-xxs' | 'padding-x-xs' | 'padding-x-sm' | 'padding-x-md' | 'padding-x-lg' | 'padding-y-0' | 'padding-y-xxs' | 'padding-y-xs' | 'padding-y-sm' | 'padding-y-md' | 'padding-y-lg'>;

export type ReadonlyTabsType = Exclude<TabsType, 'editable-card'>;

export type RectZenithPlace = RcPlacement;

export type RequestOptionPlace = BeforeAfterType | 'override';

export type RuleValidateScope = 'all' | 'required' | 'optional';
