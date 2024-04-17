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


import React from 'react';
import {ConfigProvider, Select} from 'antd';
import {type LabeledValue} from 'antd/es/select';
import {ProFormSelect} from '@ant-design/pro-form';
import {type ProFormSelectProps} from '@ant-design/pro-form/es/components/Select';
import {useIntl} from '@ant-design/pro-provider';
import {ObjectUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {PropsUtils} from '@/util/PropsUtils';
import {intlLocales} from './intl-locales';


export type UintType = 'millis' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years' | 'forever';


export type IntlLocaleProps = {
    /**
     * @description The label of the millis option
     * @description.zh-CN 毫秒选项的标签
     * @description.zh-TW 毫秒選項的標簽
     */
    millis?: string;

    /**
     * @description The label of the seconds option
     * @description.zh-CN 秒选项的标签
     * @description.zh-TW 秒選項的標簽
     */
    seconds?: string;

    /**
     * @description The label of the minutes option
     * @description.zh-CN 分选项的标签
     * @description.zh-TW 分選項的標簽
     */
    minutes?: string;

    /**
     * @description The label of the hours option
     * @description.zh-CN 小时选项的标签
     * @description.zh-TW 小時選項的標簽
     */
    hours?: string;

    /**
     * @description The label of the days option
     * @description.zh-CN 天选项的标签
     * @description.zh-TW 天選項的標簽
     */
    days?: string;

    /**
     * @description The label of the weeks option
     * @description.zh-CN 周选项的标签
     * @description.zh-TW 周選項的標簽
     */
    weeks?: string;

    /**
     * @description The label of the months option
     * @description.zh-CN 月选项的标签
     * @description.zh-TW 月選項的標簽
     */
    months?: string;

    /**
     * @description The label of the years option
     * @description.zh-CN 年选项的标签
     * @description.zh-TW 年選項的標簽
     */
    years?: string;

    /**
     * @description The label of the forever option
     * @description.zh-CN 永久选项的标签
     * @description.zh-TW 永久選項的標簽
     */
    forever?: string;
};


export type ChronoSelectProps = ProFormSelectProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-chrono-select'
     */
    clazzPrefix?: string;

    /**
     * @description The unit types
     * @description.zh-CN 单位类型
     * @description.zh-TW 單位類型
     * @default ['millis', 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years']
     */
    unitTypes?: UintType[];

    /**
     * @description The locale props for the component
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;
};


export const ChronoSelect: React.FC<ChronoSelectProps> = (props?: ChronoSelectProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-chrono-select');
    const intlType = useIntl();

    const optionItems: LabeledValue[] = [];
    if (props?.unitTypes) {
        props.unitTypes.forEach(item => {
            optionItems.push({
                label: ObjectUtils.getProperty(props?.localeProps, item) || intlLocales.get([intlType.locale, item]) || intlLocales.get(['en_US', item]),
                value: item,
            });
        });
    }

    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'options']);

    if (props?.proField) {
        const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'unitTypes', 'localeProps', 'proField']);
        return (
            <ProFormSelect
                {...restProps}
                fieldProps={{
                    className: classNames(clazzPrefix, props?.className),
                    ...omitFieldProps,
                    options: props?.fieldProps?.options ?? optionItems,
                }}
            />
        );
    } else {
        const restProps = PropsUtils.pickForwardProps(props);
        return (
            <Select
                className={classNames(clazzPrefix, props?.className)}
                {...restProps}
                {...omitFieldProps}
                options={props?.fieldProps?.options ?? optionItems}
            />
        );
    }
};


ChronoSelect.defaultProps = {
    unitTypes: ['millis', 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'],
    proField: true,
};
