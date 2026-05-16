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
    [['en_US', 'millis'], 'Millis'],
    [['en_US', 'seconds'], 'Seconds'],
    [['en_US', 'minutes'], 'Minutes'],
    [['en_US', 'hours'], 'Hours'],
    [['en_US', 'days'], 'Days'],
    [['en_US', 'weeks'], 'Weeks'],
    [['en_US', 'months'], 'Months'],
    [['en_US', 'years'], 'Years'],
    [['en_US', 'forever'], 'Forever'],

    [['zh_CN', 'millis'], '毫秒'],
    [['zh_CN', 'seconds'], '秒'],
    [['zh_CN', 'minutes'], '分'],
    [['zh_CN', 'hours'], '小时'],
    [['zh_CN', 'days'], '天'],
    [['zh_CN', 'weeks'], '周'],
    [['zh_CN', 'months'], '月'],
    [['zh_CN', 'years'], '年'],
    [['zh_CN', 'forever'], '永久'],

    [['zh_TW', 'millis'], '毫秒'],
    [['zh_TW', 'seconds'], '秒'],
    [['zh_TW', 'minutes'], '分'],
    [['zh_TW', 'hours'], '小時'],
    [['zh_TW', 'days'], '天'],
    [['zh_TW', 'weeks'], '周'],
    [['zh_TW', 'months'], '月'],
    [['zh_TW', 'years'], '年'],
    [['zh_TW', 'forever'], '永久'],
]);
