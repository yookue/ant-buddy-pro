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
    [['en_US', 'requestFullscreen'], 'Fullscreen'],
    [['en_US', 'exitFullscreen'], 'Exit Fullscreen'],
    [['zh_CN', 'requestFullscreen'], '全屏'],
    [['zh_CN', 'exitFullscreen'], '退出全屏'],
    [['zh_TW', 'requestFullscreen'], '全屏'],
    [['zh_TW', 'exitFullscreen'], '退出全屏'],
]);
