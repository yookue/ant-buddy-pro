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


import {ReadonlyMultiKeyMap} from '@unikue/ts-multi-map';


export const intlLocales = ReadonlyMultiKeyMap.of([
    [['en_US', 'everySecond'], 'Every second'],
    [['en_US', 'fromToPrefix'], 'Every second between second'],
    [['en_US', 'fromToMiddle'], 'and second'],
    [['en_US', 'fromToSuffix'], ''],
    [['en_US', 'fromIntervalPrefix'], 'Starting at second'],
    [['en_US', 'fromIntervalMiddle'], 'and every'],
    [['en_US', 'fromIntervalSuffix'], 'second(s)'],
    [['en_US', 'specificSecond'], 'Specific second(s)'],

    [['zh_CN', 'everySecond'], '每秒'],
    [['zh_CN', 'fromToPrefix'], '每秒，从第'],
    [['zh_CN', 'fromToMiddle'], '秒，到第'],
    [['zh_CN', 'fromToSuffix'], '秒'],
    [['zh_CN', 'fromIntervalPrefix'], '从第'],
    [['zh_CN', 'fromIntervalMiddle'], '秒开始，每'],
    [['zh_CN', 'fromIntervalSuffix'], '秒'],
    [['zh_CN', 'specificSecond'], '指定的秒'],

    [['zh_TW', 'everySecond'], '每秒'],
    [['zh_TW', 'fromToPrefix'], '每秒，從第'],
    [['zh_TW', 'fromToMiddle'], '秒，到第'],
    [['zh_TW', 'fromToSuffix'], '秒'],
    [['zh_TW', 'fromIntervalPrefix'], '從第'],
    [['zh_TW', 'fromIntervalMiddle'], '秒開始，每'],
    [['zh_TW', 'fromIntervalSuffix'], '秒'],
    [['zh_TW', 'specificSecond'], '指定的秒'],
]);
