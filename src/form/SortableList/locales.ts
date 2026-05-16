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
    [['en_US', 'moveToTop'], 'Move to Top'],
    [['en_US', 'moveToBottom'], 'Move to Bottom'],
    [['en_US', 'moveUp'], 'Move Up'],
    [['en_US', 'moveDown'], 'Move Down'],

    [['zh_CN', 'moveToTop'], '移到顶部'],
    [['zh_CN', 'moveToBottom'], '移到底部'],
    [['zh_CN', 'moveUp'], '向上移动'],
    [['zh_CN', 'moveDown'], '向下移动'],

    [['zh_TW', 'moveToTop'], '移到頂部'],
    [['zh_TW', 'moveToBottom'], '移到底部'],
    [['zh_TW', 'moveUp'], '向上移動'],
    [['zh_TW', 'moveDown'], '向下移動'],
]);
