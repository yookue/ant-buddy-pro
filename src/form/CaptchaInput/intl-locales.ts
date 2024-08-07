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
    [['en_US', 'generate'], 'Get Captcha'],
    [['en_US', 'resend'], 'Resend'],
    [['zh_CN', 'generate'], '获取验证码'],
    [['zh_CN', 'resend'], '重新发送'],
    [['zh_TW', 'generate'], '獲取驗證碼'],
    [['zh_TW', 'resend'], '重新發送'],
]);
