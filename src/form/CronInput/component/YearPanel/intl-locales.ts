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


import {ReadonlyMultiKeyMap} from '@yookue/ts-multi-map';


export const intlLocales = ReadonlyMultiKeyMap.of([
    [['en_US', 'everyYear'], 'Every year'],
    [['en_US', 'fromToPrefix'], 'Every year between year'],
    [['en_US', 'fromToMiddle'], 'and year'],
    [['en_US', 'fromToSuffix'], ''],
    [['en_US', 'fromIntervalPrefix'], 'Starting at year'],
    [['en_US', 'fromIntervalMiddle'], 'and every'],
    [['en_US', 'fromIntervalSuffix'], 'years(s)'],
    [['en_US', 'specificYear'], 'Specific year(s)'],

    [['zh_CN', 'everyYear'], '每年'],
    [['zh_CN', 'fromToPrefix'], '每年，开始于第'],
    [['zh_CN', 'fromToMiddle'], '年，到第'],
    [['zh_CN', 'fromToSuffix'], '年'],
    [['zh_CN', 'fromIntervalPrefix'], '从第'],
    [['zh_CN', 'fromIntervalMiddle'], '年开始，每'],
    [['zh_CN', 'fromIntervalSuffix'], '年'],
    [['zh_CN', 'specificYear'], '指定的年'],

    [['zh_TW', 'everyYear'], '每年'],
    [['zh_TW', 'fromToPrefix'], '每年，開始於第'],
    [['zh_TW', 'fromToMiddle'], '年，到第'],
    [['zh_TW', 'fromToSuffix'], '年'],
    [['zh_TW', 'fromIntervalPrefix'], '從第'],
    [['zh_TW', 'fromIntervalMiddle'], '年開始，每'],
    [['zh_TW', 'fromIntervalSuffix'], '年'],
    [['zh_TW', 'specificYear'], '指定的年'],
]);
