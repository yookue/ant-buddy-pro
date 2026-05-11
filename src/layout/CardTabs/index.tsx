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
import {Tabs, type TabsProps} from 'antd';
import {type SizeType} from 'antd/es/config-provider/SizeContext';
import {type TabPlacement as RcTabPlacement} from 'antd/es/tabs';
import {omit} from '@rc-component/util';
import classnames from 'classnames';
import {type WithFalse, type PaddingSpaceType} from '@/type/declaration';
import {useFieldStyle} from './style';


export type TabPlacement = RcTabPlacement | 'top-end' | 'bottom-end';


export type TabsSizeType = SizeType | 'extra-small';


export type CardTabsProps = Omit<TabsProps, 'size' | 'tabPlacement'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-card-tabs'
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
     * @description Whether to display the tab border
     * @description.zh-CN 是否显示标签的边框
     * @description.zh-TW 是否顯示標簽的邊框
     * @default true
     */
    tabBorder?: boolean;

    /**
     * @description The placement of the tabs
     * @description.zh-CN 标签的位置
     * @description.zh-TW 標簽的位置
     * @default 'top'
     */
    tabPlacement?: TabPlacement;

    /**
     * @description Whether to display the content border
     * @description.zh-CN 是否显示内容区的边框
     * @description.zh-TW 是否顯示内容區的邊框
     * @default true
     */
    contentBorder?: boolean;

    /**
     * @description Whether to display the ink bar
     * @description.zh-CN 是否显示活跃指示条
     * @description.zh-TW 是否顯示活躍指示條
     * @default true
     */
    inkBar?: boolean;

    /**
     * @description The size of the tabs
     * @description.zh-CN 标签的大小
     * @description.zh-TW 標簽的大小
     * @default 'middle'
     */
    size?: TabsSizeType;

    /**
     * @description The preset style of the component
     * @description.zh-CN 预设样式
     * @description.zh-TW 預設樣式
     * @default 'padding-md'
     */
    presetStyle?: WithFalse<PaddingSpaceType>;
};


/**
 * Component for displaying a tabs with card styles
 *
 * @author David Hsing
 */
export const CardTabs: React.FC<CardTabsProps> = (props?: CardTabsProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-card-tabs';

    // Initialize the default props
    const {
        tabBorder = true,
        tabPlacement = 'top',
        contentBorder = true,
        inkBar = true,
        size = 'middle',
        presetStyle = 'padding-md',
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    const detectTabSize = () => {
        return (size === 'extra-small') ? 'small' : size;
    };

    const detectTabPlacement = () => {
        switch (tabPlacement) {
            case 'top-end':
                return 'top';
            case 'bottom-end':
                return 'bottom';
            default:
                return tabPlacement as TabPlacement;
        }
    };

    const restTabsProps = !props ? {} : omit(props, ['className', 'clazzPrefix', 'containerClazz', 'containerStyle', 'tabBorder', 'tabPlacement', 'contentBorder', 'inkBar', 'presetStyle', 'type', 'size']);

    return (
        <div className={classnames(clazzPrefix, fieldStyle.hashId, `${clazzPrefix}-${size}`, `${clazzPrefix}-${tabPlacement}`, (!presetStyle ? undefined : `${clazzPrefix}-${presetStyle}`), props?.containerClazz)} style={props?.containerStyle}>
            <Tabs
                className={classnames(props?.className, `${clazzPrefix}-tab-border${tabBorder ? '' : '-off'}`, (!contentBorder ? undefined : `${clazzPrefix}-content-border`), (!inkBar ? undefined : `${clazzPrefix}-ink-bar`))}
                type={props?.type ?? 'card'}
                size={detectTabSize()}
                // @ts-ignore
                tabPlacement={detectTabPlacement()}
                {...restTabsProps}
            />
        </div>
    );
};
