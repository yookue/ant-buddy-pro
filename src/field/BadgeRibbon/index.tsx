/*
 * Copyright (c) 2023 Unikue Ltd. All rights reserved.
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
import {Badge} from 'antd';
import {type RibbonProps} from 'antd/es/badge/Ribbon';
import {omit} from '@rc-component/util';
import classNames from 'classnames';
import {useFieldStyle} from './style';


export type BadgeRibbonProps = RibbonProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-badge-ribbon'
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
     * @description Whether to use the transparent color or not
     * @description.zh-CN 是否透明色
     * @description.zh-TW 是否透明色
     */
    transparent?: boolean;
};


/**
 * Component for displaying a badge ribbon
 *
 * @author David Hsing
 */
export const BadgeRibbon: React.FC<BadgeRibbonProps> = (props?: BadgeRibbonProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-badge-ribbon';

    const fieldStyle = useFieldStyle(clazzPrefix);

    const buildInnerDom = () => {
        if (!props?.text) {
            return props?.children;
        }
        const omitProps = !props? {} : omit(props, ['className', 'clazzPrefix', 'containerClazz', 'containerStyle', 'transparent']);
        return (
            <Badge.Ribbon
                className={classNames(`${clazzPrefix}-content`, props?.className)}
                {...omitProps}
            />
        );
    };

    return (
        <div
            className={classNames(clazzPrefix, fieldStyle.hashId, (!props?.transparent ? undefined : `${clazzPrefix}-transparent`), props?.containerClazz)}
            style={props?.containerStyle}
        >
            {buildInnerDom()}
        </div>
    );
};
