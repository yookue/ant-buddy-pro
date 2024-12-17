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
    [['en_US', 'second'], 'Second'],
    [['en_US', 'minute'], 'Minute'],
    [['en_US', 'hour'], 'Hour'],
    [['en_US', 'day'], 'Day'],
    [['en_US', 'month'], 'Month'],
    [['en_US', 'week'], 'Week'],
    [['en_US', 'year'], 'Year'],
    [['en_US', 'validExpress'], 'Valid Expression'],
    [['en_US', 'invalidExpress'], 'Invalid Expression'],

    [['zh_CN', 'second'], '秒'],
    [['zh_CN', 'minute'], '分'],
    [['zh_CN', 'hour'], '时'],
    [['zh_CN', 'day'], '天'],
    [['zh_CN', 'month'], '月'],
    [['zh_CN', 'week'], '周'],
    [['zh_CN', 'year'], '年'],
    [['zh_CN', 'validExpress'], '表达式有效'],
    [['zh_CN', 'invalidExpress'], '表达式无效'],

    [['zh_TW', 'second'], '秒'],
    [['zh_TW', 'minute'], '分'],
    [['zh_TW', 'hour'], '時'],
    [['zh_TW', 'day'], '天'],
    [['zh_TW', 'month'], '月'],
    [['zh_TW', 'week'], '周'],
    [['zh_TW', 'year'], '年'],
    [['zh_TW', 'validExpress'], '表達式有效'],
    [['zh_TW', 'invalidExpress'], '表達式無效'],
]);
