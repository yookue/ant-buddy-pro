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
    [['en_US', 'everyMinute'], 'Every minute'],
    [['en_US', 'fromToPrefix'], 'Every minute between minute'],
    [['en_US', 'fromToMiddle'], 'and minute'],
    [['en_US', 'fromToSuffix'], ''],
    [['en_US', 'fromIntervalPrefix'], 'Starting at minute'],
    [['en_US', 'fromIntervalMiddle'], 'and every'],
    [['en_US', 'fromIntervalSuffix'], 'minute(s)'],
    [['en_US', 'specificMinute'], 'Specific minute(s)'],

    [['zh_CN', 'everyMinute'], '每分'],
    [['zh_CN', 'fromToPrefix'], '每分，从第'],
    [['zh_CN', 'fromToMiddle'], '分，到第'],
    [['zh_CN', 'fromToSuffix'], '分'],
    [['zh_CN', 'fromIntervalPrefix'], '从第'],
    [['zh_CN', 'fromIntervalMiddle'], '分开始，每'],
    [['zh_CN', 'fromIntervalSuffix'], '分'],
    [['zh_CN', 'specificMinute'], '指定的分'],

    [['zh_TW', 'everyMinute'], '每分'],
    [['zh_TW', 'fromToPrefix'], '每分，從第'],
    [['zh_TW', 'fromToMiddle'], '分，到第'],
    [['zh_TW', 'fromToSuffix'], '分'],
    [['zh_TW', 'fromIntervalPrefix'], '從第'],
    [['zh_TW', 'fromIntervalMiddle'], '分開始，每'],
    [['zh_TW', 'fromIntervalSuffix'], '分'],
    [['zh_TW', 'specificMinute'], '指定的分'],
]);
