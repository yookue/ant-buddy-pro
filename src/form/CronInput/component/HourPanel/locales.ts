/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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


import { ReadonlyMultiKeyMap } from '@unikue/ts-multi-map';


export const intlLocales = ReadonlyMultiKeyMap.of([
    [['en_US', 'everyHour'], 'Every hour'],
    [['en_US', 'fromToPrefix'], 'Every hour between hour'],
    [['en_US', 'fromToMiddle'], 'and hour'],
    [['en_US', 'fromToSuffix'], ''],
    [['en_US', 'fromIntervalPrefix'], 'Starting at hour'],
    [['en_US', 'fromIntervalMiddle'], 'and every'],
    [['en_US', 'fromIntervalSuffix'], 'hour(s)'],
    [['en_US', 'specificHour'], 'Specific hour(s)'],

    [['zh_CN', 'everyHour'], '每时'],
    [['zh_CN', 'fromToPrefix'], '每时，从第'],
    [['zh_CN', 'fromToMiddle'], '时，到第'],
    [['zh_CN', 'fromToSuffix'], '时'],
    [['zh_CN', 'fromIntervalPrefix'], '从第'],
    [['zh_CN', 'fromIntervalMiddle'], '时开始，每'],
    [['zh_CN', 'fromIntervalSuffix'], '时'],
    [['zh_CN', 'specificHour'], '指定的时'],

    [['zh_TW', 'everyHour'], '每時'],
    [['zh_TW', 'fromToPrefix'], '每時，從第'],
    [['zh_TW', 'fromToMiddle'], '時，到第'],
    [['zh_TW', 'fromToSuffix'], '時'],
    [['zh_TW', 'fromIntervalPrefix'], '從第'],
    [['zh_TW', 'fromIntervalMiddle'], '時開始，每'],
    [['zh_TW', 'fromIntervalSuffix'], '時'],
    [['zh_TW', 'specificHour'], '指定的時'],
]);
