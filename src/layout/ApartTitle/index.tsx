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
import {ConfigProvider} from 'antd';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import './index.less';


export type ApartTitleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-apart-title'
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
     * @description The DOM of ornament span
     * @description.zh-CN 装饰 span 的内容
     * @description.zh-TW 裝飾 span 的内容
     */
    ornament?: React.ReactNode;

    /**
     * @description The CSS class name of ornament span
     * @description.zh-CN 装饰 span 的 CSS 类名
     * @description.zh-TW 裝飾 span 的 CSS 類名
     */
    ornamentClazz?: string;

    /**
     * @description The CSS style of ornament span
     * @description.zh-CN 装饰 span 的 CSS 样式
     * @description.zh-TW 裝飾 span 的 CSS 樣式
     */
    ornamentStyle?: React.CSSProperties;

    /**
     * @description The position of ornament span
     * @description.zh-CN 装饰 span 的位置
     * @description.zh-TW 裝飾 span 的位置
     * @default 'before'
     */
    ornamentPos?: 'before' | 'after' | false;

    /**
     * @description The DOM of content span
     * @description.zh-CN 标题 span 的内容
     * @description.zh-TW 標題 span 的内容
     */
    content?: React.ReactNode;

    /**
     * @description The CSS class name of content span
     * @description.zh-CN 标题 span 的 CSS 类名
     * @description.zh-TW 標題 span 的 CSS 類名
     */
    contentClazz?: string;

    /**
     * @description The CSS style of content span
     * @description.zh-CN 标题 span 的 CSS 样式
     * @description.zh-TW 標題 span 的 CSS 樣式
     */
    contentStyle?: React.CSSProperties;

    /**
     * @description Whether to use the preset style for the component
     * @description.zh-CN 组件是否使用预设样式
     * @description.zh-TW 組件是否使用預設樣式
     * @default 'default'
     */
    usePresetStyle?: 'default' | false;
};


export const ApartTitle: React.FC<ApartTitleProps> = (props?: ApartTitleProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-apart-title');

    const buildOrnamentDom = function(before: boolean) {
        if (!props?.ornament || !props?.ornamentPos) {
            return undefined;
        }
        return (
            <span
                className={classNames(`${clazzPrefix}-ornament-${before ? 'before' : 'after'}`, props?.ornamentClazz)}
                style={props?.ornamentStyle}
            >
                {props?.ornament}
            </span>
        );
    }

    return (
        <div
            className={classNames(`${clazzPrefix}`, props?.containerClazz, (props?.usePresetStyle ? `${clazzPrefix}-${props?.usePresetStyle}` : undefined))}
            style={props?.containerStyle}
        >
            <If condition={props?.ornamentPos === 'before'} validation={false}>
                {buildOrnamentDom(true)}
            </If>
            <span className={classNames(`${clazzPrefix}-content`, props?.contentClazz)} style={props?.contentStyle}>
                {props?.content}
            </span>
            <If condition={props?.ornamentPos === 'after'} validation={false}>
                {buildOrnamentDom(false)}
            </If>
        </div>
    );
};


ApartTitle.defaultProps = {
    ornamentPos: 'before',
    usePresetStyle: 'default',
};
