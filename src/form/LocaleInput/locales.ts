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
    [['en_US', 'setAsDefault'], 'Set as default'],
    [['en_US', 'sureSetAsDefault'], 'Set as default?'],
    [['en_US', 'ok'], 'OK'],
    [['en_US', 'cancel'], 'Cancel'],

    [['zh_CN', 'setAsDefault'], '设为默认'],
    [['zh_CN', 'sureSetAsDefault'], '设为默认吗？'],
    [['zh_CN', 'ok'], '确定'],
    [['zh_CN', 'cancel'], '取消'],

    [['zh_TW', 'setAsDefault'], '設爲默認'],
    [['zh_TW', 'sureSetAsDefault'], '設爲默認嗎？'],
    [['zh_TW', 'ok'], '確定'],
    [['zh_TW', 'cancel'], '取消'],
]);
