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


export type WithFalse<T> = T | false;

export type AxisDirectionType = 'horizontal' | 'vertical';

export type BeforeAfterType = 'before' | 'after';

export type CircleSquareShape = 'circle' | 'square';

export type FileSizeUint = 'KB' | 'MB' | 'GB';

export type LabelValueType = 'label' | 'value';

export type RequestOptionPlace = 'before' | 'after' | 'override';

export type RuleValidateScope = 'all' | 'required' | 'optional';
