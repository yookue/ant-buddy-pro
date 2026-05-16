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
import { Space, InputNumber } from 'antd';
import { FormContext } from 'antd/es/form/context';
import { ProFormDigit } from '@ant-design/pro-components';
import { type ProFormDigitProps } from '@ant-design/pro-components/es/form/components/Digit';
import { omit } from '@rc-component/util';
import { StringUtils } from '@unikue/ts-lang-utils';
import classnames from 'classnames';
import { ChronoSelect, type ChronoSelectProps } from '@/form/ChronoSelect';
import { useFieldStyle } from './styles';


export type ChronoTupleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-chrono-tuple'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the container div
     * @description.zh-CN 容器 div 的 CSS 类名
     * @description.zh-TW 容器 div 的 CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style of the container div
     * @description.zh-CN 容器 div 的 CSS 样式
     * @description.zh-TW 容器 div 的 CSS 樣式
     */
    containerStyle?: React.CSSProperties;

    /**
     * @description The props of the digit component
     * @description.zh-CN 数字组件的属性
     * @description.zh-TW 數字組件的屬性
     */
    digitProps?: ProFormDigitProps;

    /**
     * @description The props of the select component
     * @description.zh-CN 选择组件的属性
     * @description.zh-TW 選擇組件的屬性
     */
    selectProps?: ChronoSelectProps;

    /**
     * @description Whether to match the width of parent element or not
     * @description.zh-CN 是否匹配父节点的宽度
     * @description.zh-TW 是否匹配父節點的寬度
     */
    widthBlock?: boolean;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;
};


/**
 * Component for displaying a number input box and a select box with chrono units
 *
 * @author David Hsing
 */
export const ChronoTuple: React.FC<ChronoTupleProps> = (props?: ChronoTupleProps) => {
    const formContext = React.useContext(FormContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-chrono-tuple';
    const subClazzPrefix = props?.selectProps?.clazzPrefix ?? 'abp-chrono-select';

    // Initialize the default props
    const {
        widthBlock = true,
        proField = true,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix, subClazzPrefix);

    const buildDigitNode = () => {
        if (proField) {
            return <ProFormDigit {...props?.digitProps}/>;
        }
        const restProps = !props?.digitProps?.fieldProps ? {} : omit(props.digitProps.fieldProps, ['className', 'name', 'id', 'placeholder', 'onChange']);
        return (
            <InputNumber
                className={classnames(`${clazzPrefix}-digit`, props?.digitProps?.fieldProps?.className)}
                placeholder={StringUtils.join(props?.digitProps?.placeholder) ?? props?.digitProps?.fieldProps?.placeholder}
                onChange={(value: any) => {
                    if (props?.digitProps?.name) {
                        formContext?.form?.setFieldValue(props.digitProps.name, value);
                    }
                    props?.digitProps?.fieldProps?.onChange?.(value);
                }}
                {...restProps}
            />
        );
    };

    const omitProps = !props?.selectProps ? {} : omit(props.selectProps, ['className', 'label', 'proField', 'presetStyle']);

    return (
        <div
            className={classnames(clazzPrefix, fieldStyle.hashId, (!widthBlock ? undefined : `${clazzPrefix}-width-block`), props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Space.Compact>
                {buildDigitNode()}
                <ChronoSelect
                    className={classnames(`${clazzPrefix}-select`, props?.selectProps?.fieldProps?.className)}
                    label={props?.selectProps?.label ?? (formContext?.layout === 'vertical' ? ' ' : '')}
                    {...omitProps}
                    proField={proField}
                    presetStyle={(props?.selectProps?.presetStyle === undefined) ? 'addon' : props.selectProps.presetStyle}
                />
            </Space.Compact>
        </div>
    );
};
