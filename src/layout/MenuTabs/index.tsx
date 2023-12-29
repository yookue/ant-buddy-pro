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
import {ConfigProvider, Menu, type MenuProps as AntMenuProps} from 'antd';
import {type MenuItemType as AntMenuItemType} from 'antd/es/menu/hooks/useItems';
import {css} from '@emotion/css';
import classNames from 'classnames';
import {type MenuInfo, type MenuMode} from 'rc-menu/es/interface';
import omit from 'rc-util/es/omit';
import './index.less';


export type MenuProps = Omit<AntMenuProps, 'items' | 'mode' | 'multiple' | 'selectable' | 'selectedKeys' | 'defaultSelectedKeys' | 'onDeselect'> & {
    /**
     * @description The content of the menu
     * @description.zh-CN 菜单项数组
     * @description.zh-TW 菜單項數組
     */
    items?: MenuItemProps[];

    /**
     * @description The selected key of the menu
     * @description.zh-CN 当前选中的菜单项
     * @description.zh-TW 當前選中的菜單項
     */
    selectedKey?: string;
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
     * @description Whether to show the title of the tab div
     * @description.zh-CN 是否显示选项卡 div 的标题
     * @description.zh-TW 是否顯示選項卡 div 的標題
     */
    showTabTitle?: boolean;

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


export const MenuTabs: React.FC<MenuTabsProps> = (props?: MenuTabsProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-menu-tabs');
    const themeClazz = (props?.menuProps?.theme === 'dark') ? `${clazzPrefix}-dark` : `${clazzPrefix}-light`;
    const containerRef = React.useRef<HTMLDivElement>();

    const [activeKey, setActiveKey] = React.useState<string | undefined>(props?.menuProps?.selectedKey);
    const [menuMode, setMenuMode] = React.useState<MenuMode>('inline');

    if (props?.adjustLayoutProps?.adjustOnResize) {
        const handleWindowResize = () => {
            requestAnimationFrame(() => {
                if (!containerRef?.current) {
                    return;
                }
                let shouldMode: MenuMode = 'inline';
                const {offsetWidth} = containerRef.current;
                if (offsetWidth > (props?.adjustLayoutProps?.minOffsetWidth || 400) && containerRef.current.offsetWidth < (props?.adjustLayoutProps?.maxOffsetWidth || 640)) {
                    shouldMode = 'horizontal';
                }
                if (offsetWidth > (props?.adjustLayoutProps?.minOffsetWidth || 400) && window.innerWidth < (props?.adjustLayoutProps?.maxWindowWidth || 768)) {
                    shouldMode = 'horizontal';
                }
                setMenuMode(shouldMode);
            });
        };

        React.useLayoutEffect(() => {
            if (containerRef?.current) {
                window.addEventListener('resize', handleWindowResize);
                handleWindowResize();
            }
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }, [containerRef.current]);
    }

    const buildTabsDom = () => {
        if (!props?.menuProps?.items || props?.menuProps?.items?.length === 0) {
            return undefined;
        }
        return props?.menuProps?.items.map(item => {
            const titleDom = !props?.showTabTitle ? undefined : (
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

    const omitItems = props?.menuProps?.items ? props?.menuProps?.items?.map(item => omit(item, ['content']) as AntMenuItemType) : [];
    const restProps = props?.menuProps ? omit(props?.menuProps, ['items', 'selectedKey', 'onClick']) : {};
    const entryWidthClazz = props?.entryWidth ? css({width: props?.entryWidth}) : (props?.entryStyle?.width ? css({width: props?.entryStyle?.width}) : undefined);
    const omitEntryStyle = props?.entryStyle ? omit(props?.entryStyle, ['width']) : undefined;

    return (
        <div
            className={classNames(clazzPrefix, themeClazz, props?.containerClazz)}
            style={props?.containerStyle}
            ref={(ref) => {
                if (ref) {
                    containerRef.current = ref;
                }
            }}
        >
            <div
                className={classNames(`${clazzPrefix}-entry`, props?.entryClazz, entryWidthClazz)}
                style={omitEntryStyle}
            >
                <Menu
                    items={omitItems}
                    mode={menuMode}
                    multiple={false}
                    selectedKeys={activeKey ? [activeKey] : []}
                    onClick={(menuInfo: MenuInfo) => {
                        setActiveKey(menuInfo?.key);
                        if (typeof props?.menuProps?.onClick === 'function') {
                            props?.menuProps?.onClick(menuInfo);
                        }
                    }}
                    {...restProps}
                />
            </div>
            {buildTabsDom()}
        </div>
    );
};


MenuTabs.defaultProps = {
    entryWidth: '208px',
    showTabTitle: true,
    adjustLayoutProps: {
        adjustOnResize: true,
    }
};
