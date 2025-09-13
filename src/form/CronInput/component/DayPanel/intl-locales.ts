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
    [['en_US', 'blankDay'], 'Blank day'],
    [['en_US', 'everyDay'], 'Every day'],
    [['en_US', 'fromToPrefix'], 'Every day between day'],
    [['en_US', 'fromToMiddle'], 'and day'],
    [['en_US', 'fromToSuffix'], ''],
    [['en_US', 'fromIntervalPrefix'], 'Starting at day'],
    [['en_US', 'fromIntervalMiddle'], 'and every'],
    [['en_US', 'fromIntervalSuffix'], 'day(s)'],
    [['en_US', 'specificDay'], 'Specific day(s)'],
    [['en_US', 'monthLastDay'], 'The last day of the month'],
    [['en_US', 'monthLastBeforePrefix'], 'The last'],
    [['en_US', 'monthLastBeforeSuffix'], 'day(s) of the month'],
    [['en_US', 'monthLastWorkday'], 'The last workday of the month'],
    [['en_US', 'nearestWorkdayPrefix'], 'The nearest workday to the'],
    [['en_US', 'nearestWorkdaySuffix'], 'of the month'],

    [['zh_CN', 'blankDay'], '不指定'],
    [['zh_CN', 'everyDay'], '每天'],
    [['zh_CN', 'fromToPrefix'], '每天，从第'],
    [['zh_CN', 'fromToMiddle'], '天，到第'],
    [['zh_CN', 'fromToSuffix'], '天'],
    [['zh_CN', 'fromIntervalPrefix'], '从第'],
    [['zh_CN', 'fromIntervalMiddle'], '天开始，每'],
    [['zh_CN', 'fromIntervalSuffix'], '天'],
    [['zh_CN', 'specificDay'], '指定的天'],
    [['zh_CN', 'monthLastDay'], '月度的最后一天'],
    [['zh_CN', 'monthLastBeforePrefix'], '月度的最后'],
    [['zh_CN', 'monthLastBeforeSuffix'], '天'],
    [['zh_CN', 'monthLastWorkday'], '月度的最后一个工作日'],
    [['zh_CN', 'nearestWorkdayPrefix'], '距离'],
    [['zh_CN', 'nearestWorkdaySuffix'], '最近的一个工作日'],

    [['zh_TW', 'blankDay'], '不指定'],
    [['zh_TW', 'everyDay'], '每天'],
    [['zh_TW', 'fromToPrefix'], '每天，從第'],
    [['zh_TW', 'fromToMiddle'], '天，到第'],
    [['zh_TW', 'fromToSuffix'], '天'],
    [['zh_TW', 'fromIntervalPrefix'], '從第'],
    [['zh_TW', 'fromIntervalMiddle'], '天開始，每'],
    [['zh_TW', 'fromIntervalSuffix'], '天'],
    [['zh_TW', 'specificDay'], '指定的天'],
    [['zh_TW', 'monthLastDay'], '月度的最後壹天'],
    [['zh_TW', 'monthLastBeforePrefix'], '月度的最後'],
    [['zh_TW', 'monthLastBeforeSuffix'], '天'],
    [['zh_TW', 'monthLastWorkday'], '月度的最後壹個工作日'],
    [['zh_TW', 'nearestWorkdayPrefix'], '距離'],
    [['zh_TW', 'nearestWorkdaySuffix'], '最近的壹個工作日'],
]);
