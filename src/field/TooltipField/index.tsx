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
import {ConfigProvider, type TooltipProps} from 'antd';
import classNames from 'classnames';
import {TooltipRender} from '@/render/TooltipRender';


export type TooltipFieldProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-tooltip-field'
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
     * @description The field element
     * @description.zh-CN 字段节点
     * @description.zh-TW 字段節點
     */
    field?: React.ReactNode | (() => React.ReactNode);

    /**
     * @description The CSS class name of the field wrapper div
     * @description.zh-CN 包裹字段节点 div 的 CSS 类名
     * @description.zh-TW 包裹字段節點 div 的 CSS 類名
     */
    fieldClazz?: string;

    /**
     * @description The CSS style of the field wrapper div
     * @description.zh-CN 包裹字段节点 div 的 CSS 样式
     * @description.zh-TW 包裹字段節點 div 的 CSS 樣式
     */
    fieldStyle?: React.CSSProperties;

    /**
     * @description Whether to use Tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     */
    tooltipCtrl?: boolean;

    /**
     * @description The props for Tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: TooltipProps;

    /**
     * @description Whether to wrap the container div
     * @description.zh-CN 是否包裹容器 div
     * @description.zh-TW 是否包裹容器 div
     * @default true
     */
    wrapContainer?: boolean;

    /**
     * @description Whether to wrap the field element
     * @description.zh-CN 是否包裹字段节点
     * @description.zh-TW 是否包裹字段節點
     * @default true
     */
    wrapField?: boolean;
}>;


/**
 * Component for displaying a field with a tooltip
 *
 * @author David Hsing
 */
export const TooltipField: React.FC<TooltipFieldProps> = (props?: TooltipFieldProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-tooltip-field');

    // Initialize the default props
    const {
        wrapContainer = true,
        wrapField = true,
    } = props ?? {};

    const buildFieldDom = () => {
        const content = !props?.field ? props?.children : (typeof props.field === 'function' ? props.field() : props.field);
        return TooltipRender.renderTooltip(props?.tooltipCtrl, props?.tooltipProps, content, (wrapField ? props?.fieldClazz : `${clazzPrefix}-content`), (wrapField ? props?.fieldStyle : undefined));
    };

    const fieldDom = buildFieldDom();

    if (!wrapContainer) {
        return (
            <>
                {fieldDom}
            </>
        );
    }

    return (
        <div className={classNames(clazzPrefix, props?.containerClazz)} style={props?.containerStyle}>
            {fieldDom}
        </div>
    );
};
