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
import {ConfigProvider, Tabs, type TabsProps} from 'antd';
import {type SizeType} from 'antd/es/config-provider/SizeContext';
import classNames from 'classnames';
import {type TabPosition as RcTabPosition} from 'rc-tabs/es/interface';
import omit from 'rc-util/es/omit';
import {type WithFalse} from '@/type/declaration';
import './index.less';


export type TabsPresetStyle = WithFalse<'padding-0' | 'padding-xss' | 'padding-xs' | 'padding-sm' | 'padding-md' | 'padding-lg' | 'padding-x-0' | 'padding-x-xss' | 'padding-x-xs' | 'padding-x-sm' | 'padding-x-md' | 'padding-x-lg' | 'padding-y-0' | 'padding-y-xss' | 'padding-y-xs' | 'padding-y-sm' | 'padding-y-md' | 'padding-y-lg'>;


export type TabsPosition = RcTabPosition | 'top-end' | 'bottom-end';


export type TabsSizeType = SizeType | 'extra-small';


export type CardTabsProps = Omit<TabsProps, 'size' | 'tabPosition'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-card-tabs'
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
     * @description The position of the tabs
     * @description.zh-CN 标签的位置
     * @description.zh-TW 標簽的位置
     * @default 'top'
     */
    tabPosition?: TabsPosition;

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
    presetStyle?: TabsPresetStyle;
};


/**
 * Component for displaying a tabs with card styles
 *
 * @author David Hsing
 */
export const CardTabs: React.FC<CardTabsProps> = (props?: CardTabsProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-card-tabs');

    // Initialize the default props
    const {
        tabBorder = true,
        tabPosition = 'top',
        contentBorder = true,
        inkBar = true,
        size = 'middle',
        presetStyle = 'padding-md',
    } = props ?? {};

    const detectTabSize = () => {
        return (size === 'extra-small') ? 'small' : size;
    };

    const detectTabPosition = () => {
        switch (tabPosition) {
            case 'top-end':
                return 'top';
            case 'bottom-end':
                return 'bottom';
            default:
                return tabPosition as RcTabPosition;
        }
    };

    const restTabsProps = !props ? {} : omit(props, ['className', 'clazzPrefix', 'containerClazz', 'containerStyle', 'tabBorder', 'tabPosition', 'contentBorder', 'inkBar', 'presetStyle', 'type', 'size']);

    return (
        <div className={classNames(clazzPrefix, `${clazzPrefix}-${size}`, `${clazzPrefix}-${tabPosition}`, (presetStyle ? `${clazzPrefix}-${presetStyle}` : undefined), props?.containerClazz)} style={props?.containerStyle}>
            <Tabs
                className={classNames(props?.className, `${clazzPrefix}-tab-border${tabBorder ? '' : '-off'}`, (contentBorder ? `${clazzPrefix}-content-border` : undefined), (inkBar ? `${clazzPrefix}-ink-bar` : undefined))}
                type={props?.type ?? 'card'}
                size={detectTabSize()}
                tabPosition={detectTabPosition()}
                {...restTabsProps}
            />
        </div>
    );
};
