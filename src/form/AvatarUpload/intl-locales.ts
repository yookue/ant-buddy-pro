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
    [['en_US', 'upload'], 'Upload'],
    [['en_US', 'allowTypes'], 'Only allowed {} files'],
    [['en_US', 'disallowType'], 'File type is disallowed'],
    [['en_US', 'cropModalTitle'], 'Avatar Crop'],
    [['en_US', 'maxFileSize'], 'File size cant not be greater than {}{}'],
    [['zh_CN', 'upload'], '上传'],
    [['zh_CN', 'allowTypes'], '只允许 {} 类型的文件'],
    [['zh_CN', 'disallowType'], '不允许的文件类型'],
    [['zh_CN', 'cropModalTitle'], '头像裁剪'],
    [['zh_CN', 'maxFileSize'], '文件大小不能超过 {}{}'],
    [['zh_TW', 'upload'], '上傳'],
    [['zh_TW', 'allowTypes'], '只允許 {} 類型的文件'],
    [['zh_TW', 'disallowType'], '不允許的文件類型'],
    [['zh_TW', 'cropModalTitle'], '頭像裁剪'],
    [['zh_TW', 'maxFileSize'], '文件大小不能超過 {}{}'],
]);
