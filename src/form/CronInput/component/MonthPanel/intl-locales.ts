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
    [['en_US', 'semanticAlias'], 'Alias'],
    [['en_US', 'everyMonth'], 'Every month'],
    [['en_US', 'fromToPrefix'], 'Every month between month'],
    [['en_US', 'fromToMiddle'], 'and month'],
    [['en_US', 'fromToSuffix'], ''],
    [['en_US', 'fromIntervalPrefix'], 'Starting at month'],
    [['en_US', 'fromIntervalMiddle'], 'and every'],
    [['en_US', 'fromIntervalSuffix'], 'month(s)'],
    [['en_US', 'specificMonth'], 'Specific month(s)'],

    [['zh_CN', 'semanticAlias'], '别名'],
    [['zh_CN', 'everyMonth'], '每月'],
    [['zh_CN', 'fromToPrefix'], '每月，从第'],
    [['zh_CN', 'fromToMiddle'], '月，到第'],
    [['zh_CN', 'fromToSuffix'], '月'],
    [['zh_CN', 'fromIntervalPrefix'], '从第'],
    [['zh_CN', 'fromIntervalMiddle'], '月开始，每'],
    [['zh_CN', 'fromIntervalSuffix'], '月'],
    [['zh_CN', 'specificMonth'], '指定的月'],

    [['zh_TW', 'semanticAlias'], '别名'],
    [['zh_TW', 'everyMonth'], '每月'],
    [['zh_TW', 'fromToPrefix'], '每月，從第'],
    [['zh_TW', 'fromToMiddle'], '月，到第'],
    [['zh_TW', 'fromToSuffix'], '月'],
    [['zh_TW', 'fromIntervalPrefix'], '從第'],
    [['zh_TW', 'fromIntervalMiddle'], '月開始，每'],
    [['zh_TW', 'fromIntervalSuffix'], '月'],
    [['zh_TW', 'specificMonth'], '指定的月'],
]);
