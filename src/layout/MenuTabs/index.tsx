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
import {type MenuItemType as AntMenuItemType} from 'antd/lib/menu/hooks/useItems';
import {css} from '@emotion/css';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import {type MenuInfo, type MenuMode} from 'rc-menu/lib/interface';
import omit from 'rc-util/lib/omit';
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
     * @description.zh-CN TabBar div 的 CSS 类名
     * @description.zh-TW TabBar div 的 CSS 類名
     */
    entryClazz?: string;

    /**
     * @description The CSS style of the entry div (Do not set 'width' property when 'autoAdjust' is true)
     * @description.zh-CN TabBar div 的 CSS 样式 (当自动调整布局时不要设置宽度属性)
     * @description.zh-TW TabBar div 的 CSS 樣式 (當自動調整布局時不要設置寬度屬性)
     */
    entryStyle?: React.CSSProperties;

    /**
     * @description The width of the entry div
     * @description.zh-CN TabBar div 的宽度
     * @description.zh-TW TabBar div 的寬度
     * @default '208px'
     */
    entryWidth?: string;

    /**
     * @description The CSS class name of the content div
     * @description.zh-CN 内容 div 的 CSS 类名
     * @description.zh-TW 内容 div 的 CSS 類名
     */
    contentClazz?: string;

    /**
     * @description The CSS style of the content div
     * @description.zh-CN 内容 div 的 CSS 样式
     * @description.zh-TW 内容 div 的 CSS 樣式
     */
    contentStyle?: React.CSSProperties;

    /**
     * @description Whether to show the title of the content div
     * @description.zh-CN 是否显示内容 div 的标题
     * @description.zh-TW 是否顯示内容 div 的標題
     */
    showContentTitle?: boolean;

    /**
     * @description The CSS class name of the content title
     * @description.zh-CN 内容 div 的 CSS 类名
     * @description.zh-TW 内容 div 的 CSS 類名
     */
    contentTitleClazz?: string;

    /**
     * @description The CSS style of the content title
     * @description.zh-CN 内容 div 的 CSS 样式
     * @description.zh-TW 内容 div 的 CSS 樣式
     */
    contentTitleStyle?: React.CSSProperties;

    /**
     * @description The properties for auto adjust the layout
     * @description.zh-CN 自动调整布局的属性
     * @description.zh-TW 自動調整布局的屬性
     */
    adjustLayoutProps?: AdjustLayoutProps;
};


export const MenuTabs: React.FC<MenuTabsProps> = (props?: MenuTabsProps) => {
    const context = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = context.getPrefixCls(props?.clazzPrefix || 'buddy-menu-tabs');
    const containerRef = React.useRef<HTMLDivElement>();

    const [activeKey, setActiveKey] = React.useState<string | undefined>(props?.menuProps?.selectedKey);
    const [menuMode, setMenuMode] = React.useState<MenuMode>('inline');
    const activeItemProps = (props?.menuProps?.items && activeKey) ? props?.menuProps?.items?.find(item => item?.key === activeKey) : undefined;

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

    const entryCss = props?.entryWidth ? css({width: props?.entryWidth}) : undefined;
    const omitItems = props?.menuProps?.items ? props?.menuProps?.items?.map(item => omit(item, ['content']) as AntMenuItemType) : [];
    const restProps = props?.menuProps ? omit(props?.menuProps, ['items', 'onClick']) : {};

    return (
        <div
            className={classNames(clazzPrefix, props?.containerClazz)}
            style={props?.containerStyle}
            ref={(ref) => {
                if (ref) {
                    containerRef.current = ref;
                }
            }}
        >
            <div
                className={classNames(`${clazzPrefix}-entry`, props?.entryClazz, entryCss)}
                style={props?.entryStyle}
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
            <div
                className={classNames(`${clazzPrefix}-content`, props?.contentClazz)}
                style={props?.contentStyle}
            >
                <If condition={props?.showContentTitle}>
                    <div
                        className={classNames(`${clazzPrefix}-content-title`, props?.contentTitleClazz)}
                        style={props?.contentTitleStyle}
                    >
                        {activeItemProps?.label}
                    </div>
                </If>
                {activeItemProps?.content}
            </div>
        </div>
    );
};


MenuTabs.defaultProps = {
    entryWidth: '208px',
    showContentTitle: true,
    adjustLayoutProps: {
        adjustOnResize: true,
    }
}
