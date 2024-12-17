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
    [['en_US', 'monday'], 'Monday'],
    [['en_US', 'tuesday'], 'Tuesday'],
    [['en_US', 'wednesday'], 'Wednesday'],
    [['en_US', 'thursday'], 'Thursday'],
    [['en_US', 'friday'], 'Friday'],
    [['en_US', 'saturday'], 'Saturday'],
    [['en_US', 'sunday'], 'Sunday'],
    [['en_US', 'blankWeek'], 'Blank week'],
    [['en_US', 'everyWeek'], 'Every week'],
    [['en_US', 'specificWeek'], 'Specific week(s)'],
    [['en_US', 'monthLastWeek'], 'The last bellowing of the month'],
    [['en_US', 'monthOrderWeekPrefix'], 'The'],
    [['en_US', 'monthOrderWeekSuffix'], 'bellowing of the month'],

    [['zh_CN', 'semanticAlias'], '别名'],
    [['zh_CN', 'monday'], '周一'],
    [['zh_CN', 'tuesday'], '周二'],
    [['zh_CN', 'wednesday'], '周三'],
    [['zh_CN', 'thursday'], '周四'],
    [['zh_CN', 'friday'], '周五'],
    [['zh_CN', 'saturday'], '周六'],
    [['zh_CN', 'sunday'], '周日'],
    [['zh_CN', 'blankWeek'], '不指定'],
    [['zh_CN', 'everyWeek'], '每周'],
    [['zh_CN', 'specificWeek'], '指定的周'],
    [['zh_CN', 'monthLastWeek'], '月度的最后一个'],
    [['zh_CN', 'monthOrderWeekPrefix'], '月度的第'],
    [['zh_CN', 'monthOrderWeekSuffix'], '个'],

    [['zh_TW', 'semanticAlias'], '别名'],
    [['zh_TW', 'monday'], '周一'],
    [['zh_TW', 'tuesday'], '周二'],
    [['zh_TW', 'wednesday'], '周三'],
    [['zh_TW', 'thursday'], '周四'],
    [['zh_TW', 'friday'], '周五'],
    [['zh_TW', 'saturday'], '周六'],
    [['zh_TW', 'sunday'], '周日'],
    [['zh_CN', 'blankWeek'], '不指定'],
    [['zh_TW', 'everyWeek'], '每周'],
    [['zh_TW', 'specificWeek'], '指定的周'],
    [['zh_TW', 'monthLastWeek'], '月度的最後壹個'],
    [['zh_TW', 'monthOrderWeekPrefix'], '月度的第'],
    [['zh_TW', 'monthOrderWeekSuffix'], '個'],
]);
