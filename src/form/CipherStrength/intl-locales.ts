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
    [['en_US', 'veryWeak'], 'Very Weak'],
    [['en_US', 'weak'], 'Weak'],
    [['en_US', 'medium'], 'Medium'],
    [['en_US', 'strong'], 'Strong'],
    [['en_US', 'veryStrong'], 'Very Strong'],

    [['zh_CN', 'veryWeak'], '非常弱'],
    [['zh_CN', 'weak'], '弱'],
    [['zh_CN', 'medium'], '一般'],
    [['zh_CN', 'strong'], '高'],
    [['zh_CN', 'veryStrong'], '非常高'],

    [['zh_TW', 'veryWeak'], '非常弱'],
    [['zh_TW', 'weak'], '弱'],
    [['zh_TW', 'medium'], '一般'],
    [['zh_TW', 'strong'], '高'],
    [['zh_TW', 'veryStrong'], '非常高'],
]);
