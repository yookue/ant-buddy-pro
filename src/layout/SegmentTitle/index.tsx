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
import {type WithFalse, type BeforeAfterType} from '@/type/declaration';
import './index.less';


export type TitlePresetStyle = WithFalse<'default' | 'success' | 'processing' | 'warning' | 'error'>;


export type SegmentTitleProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-segment-title'
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
     * @description The DOM of ornament div
     * @description.zh-CN 装饰 div 的内容
     * @description.zh-TW 裝飾 div 的内容
     */
    ornament?: React.ReactNode;

    /**
     * @description The CSS class name of ornament div
     * @description.zh-CN 装饰 div 的 CSS 类名
     * @description.zh-TW 裝飾 div 的 CSS 類名
     */
    ornamentClazz?: string;

    /**
     * @description The CSS style of ornament div
     * @description.zh-CN 装饰 div 的 CSS 样式
     * @description.zh-TW 裝飾 div 的 CSS 樣式
     */
    ornamentStyle?: React.CSSProperties;

    /**
     * @description The position of ornament div
     * @description.zh-CN 装饰 div 的位置
     * @description.zh-TW 裝飾 div 的位置
     * @default 'before'
     */
    ornamentPos?: WithFalse<BeforeAfterType>;

    /**
     * @description The DOM of content div
     * @description.zh-CN 标题 div 的内容
     * @description.zh-TW 標題 div 的内容
     */
    content?: React.ReactNode;

    /**
     * @description The CSS class name of content div
     * @description.zh-CN 标题 div 的 CSS 类名
     * @description.zh-TW 標題 div 的 CSS 類名
     */
    contentClazz?: string;

    /**
     * @description The CSS style of content div
     * @description.zh-CN 标题 div 的 CSS 样式
     * @description.zh-TW 標題 div 的 CSS 樣式
     */
    contentStyle?: React.CSSProperties;

    /**
     * @description The preset style of the component
     * @description.zh-CN 预设样式
     * @description.zh-TW 預設樣式
     * @default 'default'
     */
    presetStyle?: TitlePresetStyle;
};


/**
 * Component for displaying a title segment
 *
 * @author David Hsing
 */
export const SegmentTitle: React.FC<SegmentTitleProps> = (props?: SegmentTitleProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-segment-title');

    // Initialize the default props
    const {
        ornamentPos = 'before',
        presetStyle = 'default',
    } = props ?? {};

    const buildOrnamentDom = (before: boolean) => {
        if (!props?.ornament || !ornamentPos) {
            return undefined;
        }
        return (
            <div
                className={classNames(`${clazzPrefix}-ornament-${before ? 'before' : 'after'}`, props?.ornamentClazz)}
                style={props?.ornamentStyle}
            >
                {props?.ornament}
            </div>
        );
    }

    return (
        <div
            className={classNames(`${clazzPrefix}`, props?.containerClazz, (presetStyle ? `${clazzPrefix}-${presetStyle}` : undefined))}
            style={props?.containerStyle}
        >
            <If condition={ornamentPos === 'before'} validation={false}>
                {buildOrnamentDom(true)}
            </If>
            <div className={classNames(`${clazzPrefix}-content`, props?.contentClazz)} style={props?.contentStyle}>
                {props?.content}
            </div>
            <If condition={ornamentPos === 'after'} validation={false}>
                {buildOrnamentDom(false)}
            </If>
        </div>
    );
};
