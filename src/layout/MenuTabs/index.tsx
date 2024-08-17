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
import {ConfigProvider, Menu, type MenuProps as AntMenuProps} from 'antd';
import {type MenuItemType as AntMenuItemType} from 'antd/es/menu/hooks/useItems';
import {css} from '@emotion/css';
import {BooleanUtils} from '@yookue/ts-lang-utils';
import classNames from 'classnames';
import {type MenuInfo, type MenuMode} from 'rc-menu/es/interface';
import omit from 'rc-util/es/omit';
import './index.less';


export type MenuProps = Omit<AntMenuProps, 'items' | 'mode' | 'multiple' | 'selectable' | 'activeKey' | 'selectedKeys' | 'defaultSelectedKeys' | 'onDeselect'> & {
    /**
     * @description The content of the menu
     * @description.zh-CN 菜单项数组
     * @description.zh-TW 菜單項數組
     */
    items?: MenuItemProps[];

    /**
     * @description The default active key of the menu
     * @description.zh-CN 默认当前活动的菜单项
     * @description.zh-TW 默認當前活動的菜單項
     */
    defaultActiveKey?: string;
};


export type MenuItemProps = AntMenuItemType & {
    /**
     * @description The content of the menu item
     * @description.zh-CN 菜单项对应的内容
     * @description.zh-TW 菜單項對應的內容
     */
    content?: React.ReactNode;
};


export type AdjustLayoutProps = {
    /**
     * @description Whether to auto adjust the layout when resizing
     * @description.zh-CN 当窗口大小变化时是否自动调整布局
     * @description.zh-TW 當窗口大小變化時是否自動調整布局
     */
    adjustOnResize?: boolean;

    /**
     * @description The min offset width to adjust the layout
     * @description.zh-CN 触发自动调整布局的最小组件宽度
     * @description.zh-TW 觸發自動調整布局的最小組件寬度
     * @default 400
     */
    minOffsetWidth?: number;

    /**
     * @description The max offset width to adjust the layout
     * @description.zh-CN 触发自动调整布局的最大组件宽度
     * @description.zh-TW 觸發自動調整布局的最大組件寬度
     * @default 640
     */
    maxOffsetWidth?: number;

    /**
     * @description The max offset width to adjust the layout
     * @description.zh-CN 触发自动调整布局的最大窗口宽度
     * @description.zh-TW 觸發自動調整布局的最大窗口寬度
     * @default 768
     */
    maxWindowWidth?: number;
};


export type MenuTabsProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-menu-tabs'
     */
    clazzPrefix?: string;

    /**
     * @description The properties of the menu
     * @description.zh-CN 菜单属性
     * @description.zh-TW 菜單屬性
     */
    menuProps?: MenuProps;

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
     * @description The CSS class name of the entry div
     * @description.zh-CN 菜单栏 div 的 CSS 类名
     * @description.zh-TW 菜單欄 div 的 CSS 類名
     */
    entryClazz?: string;

    /**
     * @description The CSS style of the entry div
     * @description.zh-CN 菜单栏 div 的 CSS 样式
     * @description.zh-TW 菜單欄 div 的 CSS 樣式
     */
    entryStyle?: React.CSSProperties;

    /**
     * @description The width of the entry div
     * @description.zh-CN 菜单栏 div 的宽度
     * @description.zh-TW 菜單欄 div 的寬度
     * @default '208px'
     */
    entryWidth?: string;

    /**
     * @description Whether to display the ink bar of the entry div
     * @description.zh-CN 是否显示菜单栏 div 的活跃指示条
     * @description.zh-TW 是否顯示菜单栏 div 的活躍指示條
     * @default true
     */
    entryInkBar?: boolean;

    /**
     * @description Whether to bold the selected menu item of the entry div
     * @description.zh-CN 是否加粗显示菜单栏 div 选中的菜单项
     * @description.zh-TW 是否加粗顯示菜單欄 div 選中的菜單項
     * @default true
     */
    entrySelectionBold?: boolean;

    /**
     * @description Whether to show the entry div
     * @description.zh-CN 是否显示菜单栏 div
     * @description.zh-TW 是否顯示菜單欄 div
     * @default true
     */
    entryVisible?: boolean;

    /**
     * @description The CSS class name of the tab div
     * @description.zh-CN 选项卡 div 的 CSS 类名
     * @description.zh-TW 選項卡 div 的 CSS 類名
     */
    tabClazz?: string;

    /**
     * @description The CSS style of the tab div
     * @description.zh-CN 选项卡 div 的 CSS 样式
     * @description.zh-TW 選項卡 div 的 CSS 樣式
     */
    tabStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of the tab title
     * @description.zh-CN 选项卡标题 div 的 CSS 类名
     * @description.zh-TW 選項卡標題 div 的 CSS 類名
     */
    tabTitleClazz?: string;

    /**
     * @description The CSS style of the tab title
     * @description.zh-CN 选项卡标题 div 的 CSS 样式
     * @description.zh-TW 選項卡標題 div 的 CSS 樣式
     */
    tabTitleStyle?: React.CSSProperties;

    /**
     * @description The DOM render of the tab title content
     * @description.zh-CN 选项卡标题内容的渲染方式
     * @description.zh-TW 選項卡標題内容的渲染方式
     */
    tabTitleRender?: (dom: React.ReactNode) => React.ReactNode;

    /**
     * @description Whether to show the title of the tab div
     * @description.zh-CN 是否显示选项卡 div 的标题
     * @description.zh-TW 是否顯示選項卡 div 的標題
     * @default true
     */
    tabTitleVisible?: boolean;

    /**
     * @description The CSS class name of the tab content
     * @description.zh-CN 选项卡内容 div 的 CSS 类名
     * @description.zh-TW 選項卡内容 div 的 CSS 類名
     */
    tabContentClazz?: string;

    /**
     * @description The CSS style of the tab content
     * @description.zh-CN 选项卡内容 div 的 CSS 样式
     * @description.zh-TW 選項卡内容 div 的 CSS 樣式
     */
    tabContentStyle?: React.CSSProperties;

    /**
     * @description The properties for auto adjust the layout
     * @description.zh-CN 自动调整布局的属性
     * @description.zh-TW 自動調整布局的屬性
     */
    adjustLayoutProps?: AdjustLayoutProps;
};


/**
 * Component for displaying a tabs with menu navigations
 *
 * @author David Hsing
 */
export const MenuTabs: React.FC<MenuTabsProps> = (props?: MenuTabsProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-menu-tabs');

    // Initialize the default props
    const {
        entryWidth = '208px',
        entryInkBar = true,
        entrySelectionBold = true,
        entryVisible = true,
        tabTitleVisible = true,
        adjustLayoutProps = {
            adjustOnResize: true,
        }
    } = props ?? {};

    const themeClazz = (props?.menuProps?.theme === 'dark') ? `${clazzPrefix}-dark` : `${clazzPrefix}-light`;
    const [activeKey, setActiveKey] = React.useState(props?.menuProps?.defaultActiveKey);
    const [menuMode, setMenuMode] = React.useState<MenuMode>('inline');
    const fieldRef = React.useRef<HTMLDivElement>();

    if (BooleanUtils.isNotFalse(adjustLayoutProps?.adjustOnResize)) {
        const handleWindowResize = () => {
            requestAnimationFrame(() => {
                if (!fieldRef.current) {
                    return;
                }
                let shouldMode: MenuMode = 'inline';
                const {offsetWidth} = fieldRef.current;
                if (offsetWidth > (adjustLayoutProps?.minOffsetWidth ?? 400) && fieldRef.current.offsetWidth < (adjustLayoutProps?.maxOffsetWidth ?? 640)) {
                    shouldMode = 'horizontal';
                }
                if (offsetWidth > (adjustLayoutProps?.minOffsetWidth ?? 400) && window.innerWidth < (adjustLayoutProps?.maxWindowWidth ?? 768)) {
                    shouldMode = 'horizontal';
                }
                setMenuMode(shouldMode);
            });
        };

        React.useLayoutEffect(() => {
            if (fieldRef.current) {
                window.addEventListener('resize', handleWindowResize);
                handleWindowResize();
            }
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }, [fieldRef.current]);
    }

    const buildTabsDom = () => {
        if (!props?.menuProps?.items || props?.menuProps?.items?.length === 0) {
            return undefined;
        }
        return props?.menuProps?.items.map(item => {
            const titleDom = !tabTitleVisible ? undefined : (
                <div
                    className={classNames(`${clazzPrefix}-tab-title`, props?.tabTitleClazz)}
                    style={props?.tabTitleStyle}
                >
                    {props?.tabTitleRender ? props?.tabTitleRender(item?.label) : item?.label}
                </div>
            );
            return (
                <div
                    key={item?.key}
                    className={classNames(`${clazzPrefix}-tab`, props?.tabClazz, ((activeKey === item?.key) ? `${clazzPrefix}-tab-active` : undefined))}
                    style={props?.tabStyle}
                >
                    {titleDom}
                    <div
                        className={classNames(`${clazzPrefix}-tab-content`, props?.tabContentClazz)}
                        style={props?.tabContentStyle}
                    >
                        {item?.content}
                    </div>
                </div>
            );
        });
    };

    const omitMenuItems = props?.menuProps?.items ? props?.menuProps?.items?.map(item => omit(item, ['content']) as AntMenuItemType) : [];
    const restMenuProps = !props?.menuProps ? {} : omit(props?.menuProps, ['items', 'defaultActiveKey', 'onClick']);
    const entryWidthClazz = entryWidth ? css({width: entryWidth}) : (props?.entryStyle?.width ? css({width: props?.entryStyle?.width}) : undefined);
    const omitEntryStyle = props?.entryStyle ? omit(props?.entryStyle, ['width']) : undefined;

    return (
        <div
            ref={ref => fieldRef.current = ref ?? undefined}
            className={classNames(clazzPrefix, themeClazz, props?.containerClazz)}
            style={props?.containerStyle}
        >
            <div
                className={classNames(`${clazzPrefix}-entry`, (entryVisible ? undefined : `${clazzPrefix}-entry-hidden`), props?.entryClazz, entryWidthClazz)}
                style={omitEntryStyle}
            >
                <Menu
                    className={classNames((entryInkBar ? undefined : `${clazzPrefix}-ink-bar-none`), (entrySelectionBold ? `${clazzPrefix}-selection-bold` : undefined))}
                    items={omitMenuItems}
                    mode={menuMode}
                    multiple={false}
                    defaultSelectedKeys={props?.menuProps?.defaultActiveKey ? [props?.menuProps?.defaultActiveKey] : []}
                    onClick={(menuInfo: MenuInfo) => {
                        setActiveKey(menuInfo?.key);
                        props?.menuProps?.onClick?.(menuInfo);
                    }}
                    {...restMenuProps}
                />
            </div>
            {buildTabsDom()}
        </div>
    );
};
