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
    [['en_US', 'searchBox'], 'Search'],
    [['zh_CN', 'searchBox'], '搜索'],
    [['zh_TW', 'searchBox'], '搜索'],

    [['en_US', 'outlinedTheme'], 'Outlined'],
    [['en_US', 'filledTheme'], 'Filled'],
    [['en_US', 'twotoneTheme'], 'Two Tone'],
    [['zh_CN', 'outlinedTheme'], '线框风格'],
    [['zh_CN', 'filledTheme'], '实底风格'],
    [['zh_CN', 'twotoneTheme'], '双色风格'],
    [['zh_TW', 'outlinedTheme'], '線框風格'],
    [['zh_TW', 'filledTheme'], '實底風格'],
    [['zh_TW', 'twotoneTheme'], '雙色風格'],

    [['en_US', 'directionScene'], 'Direction'],
    [['en_US', 'suggestionScene'], 'Suggestion'],
    [['en_US', 'editorScene'], 'Editor'],
    [['en_US', 'dataScene'], 'Data'],
    [['en_US', 'logoScene'], 'Logo'],
    [['en_US', 'webScene'], 'Web'],
    [['zh_CN', 'directionScene'], '方向类'],
    [['zh_CN', 'suggestionScene'], '建议类'],
    [['zh_CN', 'editorScene'], '编辑类'],
    [['zh_CN', 'dataScene'], '数据类'],
    [['zh_CN', 'logoScene'], '品牌类'],
    [['zh_CN', 'webScene'], '网站类'],
    [['zh_TW', 'directionScene'], '方向類'],
    [['zh_TW', 'suggestionScene'], '建議類'],
    [['zh_TW', 'editorScene'], '編輯類'],
    [['zh_TW', 'dataScene'], '數據類'],
    [['zh_TW', 'logoScene'], '品牌類'],
    [['zh_TW', 'webScene'], '網站類'],
]);
