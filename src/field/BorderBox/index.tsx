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
import classNames from 'classnames';
import './index.less';


export type BorderBoxProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-border-box'
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
     * @description Whether to border top or not
     * @description.zh-CN 顶部是否有边框
     * @description.zh-TW 頂部是否有邊框
     * @default true
     */
    borderTop?: boolean;

    /**
     * @description Whether to border right or not
     * @description.zh-CN 右侧是否有边框
     * @description.zh-TW 右側是否有邊框
     * @default true
     */
    borderRight?: boolean;

    /**
     * @description Whether to border bottom or not
     * @description.zh-CN 底部是否有边框
     * @description.zh-TW 底部是否有邊框
     * @default true
     */
    borderBottom?: boolean;

    /**
     * @description Whether to border left or not
     * @description.zh-CN 左侧是否有边框
     * @description.zh-TW 左側是否有邊框
     * @default true
     */
    borderLeft?: boolean;

    /**
     * @description Whether to shadow the borders or not
     * @description.zh-CN 是否给边框添加阴影
     * @description.zh-TW 是否給邊框添加陰影
     */
    boxShadow?: boolean;
}>;


/**
 * Component for displaying a box with borders
 *
 * @author David Hsing
 */
export const BorderBox: React.FC<BorderBoxProps> = (props?: BorderBoxProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-border-box');

    // Initialize the default props
    const {
        borderTop = true,
        borderRight = true,
        borderBottom = true,
        borderLeft = true,
    } = props ?? {};

    const borderClazz = classNames((!borderTop ? undefined : `${clazzPrefix}-border-top`), (!borderRight ? undefined : `${clazzPrefix}-border-right`), (!borderBottom ? undefined : `${clazzPrefix}-border-bottom`), (!borderLeft ? undefined : `${clazzPrefix}-border-left`));

    return (
        <div
            className={classNames(clazzPrefix, borderClazz, (props?.boxShadow ? `${clazzPrefix}-box-shadow` : undefined), props?.containerClazz)}
            style={props?.containerStyle}
        >
            {props?.children}
        </div>
    );
};
