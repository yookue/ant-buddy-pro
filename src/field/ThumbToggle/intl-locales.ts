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
    [['en_US', 'like'], 'Like'],
    [['en_US', 'dislike'], 'Dislike'],
    [['en_US', 'favorite'], 'Favorite'],
    [['zh_CN', 'like'], '喜欢'],
    [['zh_CN', 'dislike'], '不喜欢'],
    [['zh_CN', 'favorite'], '收藏'],
    [['zh_TW', 'like'], '喜歡'],
    [['zh_TW', 'dislike'], '不喜歡'],
    [['zh_TW', 'favorite'], '收藏'],
]);
