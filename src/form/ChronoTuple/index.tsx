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
import {ConfigProvider, Input, InputNumber} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {ProFormDigit} from '@ant-design/pro-form';
import {type ProFormDigitProps} from '@ant-design/pro-form/es/components/Digit';
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import {ChronoSelect, type ChronoSelectProps} from '@/form/ChronoSelect';
import {PropsUtils} from '@/util/PropsUtils';
import './index.less';


export type ChronoTupleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-chrono-tuple'
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
     * @description The props for the digit component
     * @description.zh-CN 数字组件的属性
     * @description.zh-TW 數字組件的屬性
     */
    digitProps?: ProFormDigitProps;

    /**
     * @description The props for the select component
     * @description.zh-CN 选择组件的属性
     * @description.zh-TW 選擇組件的屬性
     */
    selectProps?: ChronoSelectProps;

    /**
     * @description Whether to match the width of parent element
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
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const formContext = React.useContext(FormContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-chrono-tuple');

    // Initialize the default props
    const {
        proField = true,
    } = props ?? {};

    const digitNode = proField ? (
        <ProFormDigit {...props?.digitProps}/>
    ) : (
        <InputNumber {...PropsUtils.pickForwardProps(props?.digitProps)} {...props?.digitProps?.fieldProps}/>
    );

    const restSelectProps = !props?.selectProps ? {} : omit(props.selectProps, ['label', 'proField', 'usePresetStyle']);

    return (
        <div className={classNames(clazzPrefix, props?.containerClazz, (props?.widthBlock ? `${clazzPrefix}-width-block` : undefined))} style={props?.containerStyle}>
            <Input.Group compact={true}>
                {digitNode}
                <ChronoSelect
                    label={props?.selectProps?.label ?? (formContext.vertical ? ' ' : '')}
                    {...restSelectProps}
                    proField={proField}
                    usePresetStyle={(props?.selectProps?.usePresetStyle === undefined) ? 'addon' : props.selectProps.usePresetStyle}
                />
            </Input.Group>
        </div>
    );
};
