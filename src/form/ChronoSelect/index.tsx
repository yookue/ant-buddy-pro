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


import React from 'react';
import { Form, Select } from 'antd';
import { ProFormSelect, useIntl } from '@ant-design/pro-components';
import { type ProFormSelectProps } from '@ant-design/pro-components/es/form/components/Select';
import { omit } from '@rc-component/util';
import { ObjectUtils, StringUtils } from '@unikue/ts-lang-utils';
import classnames from 'classnames';
import { type WithFalse } from '@/type/declaration';
import { intlLocales } from './locales';
import { useFieldStyle } from './styles';


export type ChronoUintType = 'millis' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years' | 'forever';


export type ChronoPresetStyle = WithFalse<'addon'>;


export type IntlLocaleProps = {
    /**
     * @description Millis
     * @description.zh-CN 毫秒
     * @description.zh-TW 毫秒
     */
    millis?: React.ReactNode;

    /**
     * @description Seconds
     * @description.zh-CN 秒
     * @description.zh-TW 秒
     */
    seconds?: React.ReactNode;

    /**
     * @description Minutes
     * @description.zh-CN 分
     * @description.zh-TW 分
     */
    minutes?: React.ReactNode;

    /**
     * @description Hours
     * @description.zh-CN 小时
     * @description.zh-TW 小時
     */
    hours?: React.ReactNode;

    /**
     * @description Days
     * @description.zh-CN 天
     * @description.zh-TW 天
     */
    days?: React.ReactNode;

    /**
     * @description Weeks
     * @description.zh-CN 周
     * @description.zh-TW 周
     */
    weeks?: React.ReactNode;

    /**
     * @description Months
     * @description.zh-CN 月
     * @description.zh-TW 月
     */
    months?: React.ReactNode;

    /**
     * @description Years
     * @description.zh-CN 年
     * @description.zh-TW 年
     */
    years?: React.ReactNode;

    /**
     * @description Forever
     * @description.zh-CN 永久
     * @description.zh-TW 永久
     */
    forever?: React.ReactNode;
};


export type ChronoSelectProps = Omit<ProFormSelectProps, 'children'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-chrono-select'
     */
    clazzPrefix?: string;

    /**
     * @description The unit types
     * @description.zh-CN 单位类型
     * @description.zh-TW 單位類型
     * @default ['millis', 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years']
     */
    unitTypes?: ChronoUintType[];

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description The preset style of the component
     * @description.zh-CN 预设样式
     * @description.zh-TW 預設樣式
     */
    presetStyle?: ChronoPresetStyle;

    /**
     * @description The locale of the component, e.g. 'en_US'
     * @description.zh-CN 组件的语言, e.g. 'zh_CN'
     * @description.zh-TW 組件的語言, e.g. 'zh_TW'
     */
    locale?: string;

    /**
     * @description The props of locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;
};


/**
 * Component for displaying a select box with chrono units
 *
 * @author David Hsing
 */
export const ChronoSelect: React.FC<ChronoSelectProps> = (props?: ChronoSelectProps) => {
    const form = Form.useFormInstance();
    const clazzPrefix = props?.clazzPrefix ?? 'abp-chrono-select';
    const intlType = useIntl();

    // Initialize the default props
    const {
        unitTypes = ['millis', 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'],
        proField = true,
        locale = intlType.locale,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    const optionItems = unitTypes.map(item => ({
        label: ObjectUtils.firstNotNil(ObjectUtils.getProp(props?.localeProps, item), intlLocales.get([locale, item]), intlLocales.get(['en_US', item])),
        value: item,
    }));

    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'options']);
    if (proField) {
        const restProps = !props ? {} : omit(props, ['fieldProps', 'clazzPrefix', 'unitTypes', 'proField', 'locale', 'localeProps', 'presetStyle']);
        return (
            <ProFormSelect
                {...restProps}
                fieldProps={{
                    className: classnames(clazzPrefix, fieldStyle.hashId, (props?.presetStyle ? `${clazzPrefix}-${props?.presetStyle}` : undefined), props?.fieldProps?.className),
                    ...omitFieldProps,
                    options: props?.fieldProps?.options ?? optionItems,
                }}
            />
        );
    } else {
        const restProps = omit(omitFieldProps, ['id', 'placeholder', 'onChange']);
        return (
            <Select
                className={classnames(clazzPrefix, fieldStyle.hashId, (props?.presetStyle ? `${clazzPrefix}-${props?.presetStyle}` : undefined), props?.fieldProps?.className)}
                placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                options={props?.fieldProps?.options ?? optionItems}
                onChange={(event: any) => {
                    if (props?.name) {
                        form?.setFieldValue(props.name, event.target.value);
                    }
                    props?.fieldProps?.onChange?.(event);
                }}
                {...restProps}
            />
        );
    }
};
