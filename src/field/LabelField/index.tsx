/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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
import {ConfigProvider, Space} from 'antd';
import {FormContext} from 'antd/es/form/context';
import {type SpaceSize} from 'antd/es/space';
import classNames from 'classnames';
import {type WithFalse, type AxisDirectionType} from '@/type/declaration';
import './index.less';


export type LabelPresetStyle = WithFalse<'before-prior' | 'after-prior'>;


export type LabelFieldProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-label-field'
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
     * @description The layout of the label and the field
     * @description.zh-CN 标签和内容的布局样式
     * @description.zh-TW 標簽和內容的布局樣式
     */
    layout?: AxisDirectionType;

    /**
     * @description The label element
     * @description.zh-CN 标签节点
     * @description.zh-TW 標簽節點
     */
    label?: React.ReactNode | (() => React.ReactNode);

    /**
     * @description The CSS class name of the label
     * @description.zh-CN 标签的 CSS 类名
     * @description.zh-TW 標簽的 CSS 類名
     */
    labelClazz?: string;

    /**
     * @description The CSS style of the label
     * @description.zh-CN 标签的 CSS 样式
     * @description.zh-TW 標簽的 CSS 樣式
     */
    labelStyle?: React.CSSProperties;

    /**
     * @description The delimiter between the label and the content
     * @description.zh-CN 标签和内容之间的分隔符
     * @description.zh-TW 標簽和內容之間的分隔符
     * @default ':'
     */
    delimiter?: React.ReactNode;

    /**
     * @description The field element
     * @description.zh-CN 内容节点
     * @description.zh-TW 内容節點
     */
    field?: React.ReactNode | (() => React.ReactNode);

    /**
     * @description The space size
     * @description.zh-CN 间距大小
     * @description.zh-TW 間距大小
     */
    spaceSize?: SpaceSize;

    /**
     * @description Whether is required field or not
     * @description.zh-CN 是否为必填字段
     * @description.zh-TW 是否為必填字段
     */
    required?: boolean;

    /**
     * @description The preset style of the component
     * @description.zh-CN 预设样式
     * @description.zh-TW 預設樣式
     * @default 'after-prior'
     */
    presetStyle?: LabelPresetStyle;
}>;


/**
 * Component for displaying a field with a label
 *
 * @author David Hsing
 */
export const LabelField: React.FC<LabelFieldProps> = (props?: LabelFieldProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const formContext = React.useContext(FormContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-label-field');

    // Initialize the default props
    const {
        delimiter = ':',
        presetStyle = 'after-prior',
    } = props ?? {};

    const layout = formContext?.vertical ? 'vertical' : (props?.layout ?? 'horizontal');
    const required = formContext?.requiredMark !== false && props?.required;

    return (
        <div
            className={classNames(clazzPrefix, (required ? `${clazzPrefix}-required` : undefined), (presetStyle ? `${clazzPrefix}-${presetStyle}` : undefined), props?.containerClazz)}
            style={props?.containerStyle}
        >
            <Space className={`${clazzPrefix}-space-${layout}`} direction={layout} size={props?.spaceSize}>
                <div
                    className={classNames(`${clazzPrefix}-label`, props?.labelClazz)}
                    style={props?.labelStyle}
                >
                    {!props?.label ? undefined : (typeof props.label === 'function' ? props.label() : props.label)}
                    {layout === 'horizontal' ? delimiter : undefined}
                </div>
                <div className={`${clazzPrefix}-field`}>
                    {!props?.field ? props?.children : (typeof props.field === 'function' ? props.field() : props.field)}
                </div>
            </Space>
        </div>
    );
};
