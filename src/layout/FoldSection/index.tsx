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
import {ConfigProvider, Tooltip, type TooltipProps} from 'antd';
import {DownSquareOutlined, UpSquareOutlined} from '@ant-design/icons';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import './index.less';


export type FoldSectionProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-fold-section'
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
     * @description The CSS class names of the header div
     * @description.zh-CN 头部 div 的 CSS 类名
     * @description.zh-TW 頭部 div 的 CSS 類名
     */
    headerClazz?: string;

    /**
     * @description The CSS style of the header div
     * @description.zh-CN 头部 div 的 CSS 样式
     * @description.zh-TW 頭部 div 的 CSS 樣式
     */
    headerStyle?: React.CSSProperties;

    /**
     * @description The DOM of ornament span that under the header div
     * @description.zh-CN 头部装饰 span 的内容
     * @description.zh-TW 頭部裝飾 span 的内容
     */
    headerOrnament?: React.ReactNode;

    /**
     * @description The CSS class name of ornament span that under the header div
     * @description.zh-CN 头部装饰 span 的 CSS 类名
     * @description.zh-TW 頭部裝飾 span 的 CSS 類名
     */
    headerOrnamentClazz?: string;

    /**
     * @description The CSS style of ornament span that under the header div
     * @description.zh-CN 头部装饰 span 的 CSS 样式
     * @description.zh-TW 頭部裝飾 span 的 CSS 樣式
     */
    headerOrnamentStyle?: React.CSSProperties;

    /**
     * @description The position of ornament span that under the header div
     * @description.zh-CN 头部装饰 span 的位置
     * @description.zh-TW 頭部裝飾 span 的位置
     * @default 'before'
     */
    headerOrnamentPos?: 'before' | 'after' | false;

    /**
     * @description The DOM of content span that under the header div
     * @description.zh-CN 头部标题 span 的内容
     * @description.zh-TW 頭部標題 span 的内容
     */
    headerContent?: React.ReactNode;

    /**
     * @description The CSS class name of content span that under the header div
     * @description.zh-CN 头部标题 span 的 CSS 类名
     * @description.zh-TW 頭部標題 span 的 CSS 類名
     */
    headerContentClazz?: string;

    /**
     * @description The CSS style of content span that under the header div
     * @description.zh-CN 头部标题 span 的 CSS 样式
     * @description.zh-TW 頭部標題 span 的 CSS 樣式
     */
    headerContentStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of collapse span that under the header div
     * @description.zh-CN 头部折叠 span 的 CSS 类名
     * @description.zh-TW 頭部折叠 span 的 CSS 類名
     */
    headerCollapseClazz?: string;

    /**
     * @description The CSS style of collapse span that under the header div
     * @description.zh-CN 头部折叠 span 的 CSS 样式
     * @description.zh-TW 頭部折叠 span 的 CSS 樣式
     */
    headerCollapseStyle?: React.CSSProperties;

    /**
     * @description The position of collapse span that under the header div
     * @description.zh-CN 头部折叠 span 的位置
     * @description.zh-TW 頭部折叠 span 的位置
     * @default 'after'
     */
    headerCollapsePos?: 'before' | 'after' | false;

    /**
     * @description The DOM of collapse span that under the header div when expanded
     * @description.zh-CN 头部折叠 span 的节点内容(面板展开时)
     * @description.zh-TW 頭部折叠 span 的節點內容(面板展開時)
     * @default <DownSquareOutlined/>
     */
    headerOpenedDom?: React.ReactNode;

    /**
     * @description The hint of collapse span that under the header div when expanded
     * @description.zh-CN 头部折叠 span 的提示(面板展开时)
     * @description.zh-TW 頭部折叠 span 的提示(面板展開時)
     */
    headerOpenedHint?: string;

    /**
     * @description The DOM of collapse that under the header div when collapsed
     * @description.zh-CN 头部折叠 span 的节点内容(面板折叠时)
     * @description.zh-TW 頭部折叠 span 的節點內容(面板摺叠時)
     * @default <UpSquareOutlined/>
     */
    headerClosedDom?: React.ReactNode;

    /**
     * @description The hint of collapse span that under the header div when collapsed
     * @description.zh-CN 头部折叠 span 的提示(面板折叠时)
     * @description.zh-TW 頭部折叠 span 的提示(面板摺叠時)
     */
    headerClosedHint?: string;

    /**
     * @description Whether to use tooltip instead of raw title for the collapse span
     * @description.zh-CN 头部折叠 span 是否使用 Tooltip 替代 title
     * @description.zh-TW 頭部折叠 span 是否使用 Tooltip 替代 title
     * @default false
     */
    useTooltip?: boolean;

    /**
     * @description The properties of tooltip for the collapse span
     * @description.zh-CN 头部折叠 span 的 Tooltip 属性
     * @description.zh-TW 頭部折叠 span 的 Tooltip 屬性
     */
    tooltipProps?: Omit<TooltipProps, 'title'>,

    /**
     * @description The CSS class name of the panel div
     * @description.zh-CN 面板 div 的 CSS 类名
     * @description.zh-TW 面板 div 的 CSS 類名
     */
    panelClazz?: string;

    /**
     * @description The CSS style of the panel div
     * @description.zh-CN 面板 div 的 CSS 样式
     * @description.zh-TW 面板 div 的 CSS 樣式
     */
    panelStyle?: React.CSSProperties;

    /**
     * @description The DOM of the panel div
     * @description.zh-CN 面板 div 的内容
     * @description.zh-TW 面板 div 的内容
     */
    panelContent?: React.ReactNode;

    /**
     * @description The DOM of placeholder for the panel div
     * @description.zh-CN 面板 div 的占位符
     * @description.zh-TW 面板 div 的佔位符
     */
    panelPlaceholder?: React.ReactNode;

    /**
     * @description Whether the panel div is opened when initializing
     * @description.zh-CN 面板 div 初始化时是否展开
     * @description.zh-TW 面板 div 初始化時是否展開
     * @default true
     */
    panelInitialOpen?: boolean;

    /**
     * @description Whether to render the panel div even it has none content and placeholder
     * @description.zh-CN 面板 div 无内容也无占位符时，是否强制渲染它
     * @description.zh-TW 面板 div 無内容也無佔位符時，是否强制渲染它
     * @default false
     */
    panelForceRender?: boolean;

    /**
     * @description Whether to destroy the panel div when it's closed
     * @description.zh-CN 关闭面板 div 时是否销毁它
     * @description.zh-TW 關閉面板 div 時是否銷毀它
     * @default false
     */
    panelDestroyOnClose?: boolean;

    /**
     * @description The callback function when the panel div changed
     * @description.zh-CN 面板 div 折叠展开状态变化时的回调函数
     * @description.zh-TW 面板 div 折疊展開狀態變化時的回調函數
     */
    onOpenChange?: (open: boolean) => void;

    /**
     * @description Whether to use the preset style for the component
     * @description.zh-CN 组件是否使用预设样式
     * @description.zh-TW 組件是否使用預設樣式
     * @default 'default'
     */
    usePresetStyle?: 'default' | false;
};


export const FoldSection: React.FC<FoldSectionProps> = (props?: FoldSectionProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-fold-section');
    const [panelOpen, setPanelOpen] = React.useState<boolean>(props?.panelInitialOpen || false);

    const buildOrnamentDom = (before: boolean) => {
        if (!props?.headerOrnament || !props?.headerOrnamentPos) {
            return undefined;
        }
        return (
            <span
                className={classNames(`${clazzPrefix}-header-ornament-${before ? 'before' : 'after'}`, props?.headerOrnamentClazz)}
                style={props?.headerOrnamentStyle}
            >
                {props?.headerOrnament}
            </span>
        );
    }

    const buildCollapseDom = (before: boolean) => {
        if ((!props?.headerOpenedDom && !props?.headerClosedDom) || !props?.headerCollapsePos) {
            return undefined;
        }
        const content = (
            <span
                className={classNames(`${clazzPrefix}-header-collapse-${before ? 'before' : 'after'}`, props?.headerCollapseClazz)}
                style={props?.headerCollapseStyle}
                title={props?.useTooltip ? undefined : (panelOpen ? props?.headerOpenedHint : props?.headerClosedHint)}
                onClick={handleCollapse}
            >
                {panelOpen ? props?.headerOpenedDom : props?.headerClosedDom}
            </span>
        );
        if (!props?.useTooltip) {
            return content;
        }
        return (
            <Tooltip
                title={panelOpen ? props?.headerOpenedHint : props?.headerClosedHint}
                {...props?.tooltipProps}
            >
                {content}
            </Tooltip>
        );
    }

    const handleCollapse = () => {
        const openState = !panelOpen;
        setPanelOpen(openState);
        if (typeof props?.onOpenChange === 'function') {
            React.useEffect(() => {
                // @ts-ignore
                window.setTimeout(() => props?.onOpenChange(openState), 300);
            }, []);
        }
    };

    const [panelRendered, setPanelRendered] = React.useState<boolean>(props?.panelForceRender || panelOpen);
    React.useEffect(() => {
        if (props?.panelForceRender) {
            setPanelRendered(true);
        }
    }, [props?.panelForceRender]);

    return (
        <section
            className={classNames(clazzPrefix, props?.containerClazz, (props?.usePresetStyle ? `${clazzPrefix}-${props?.usePresetStyle}` : undefined), `${clazzPrefix}-${panelOpen ? 'open' : 'close'}`)}
            style={props?.containerStyle}
        >
            <div className={classNames(`${clazzPrefix}-header`, props?.headerClazz)} style={props?.headerStyle}>
                <If condition={props?.headerCollapsePos === 'before'} validation={false}>
                    {buildCollapseDom(true)}
                </If>
                <If condition={props?.headerOrnamentPos === 'before'} validation={false}>
                    {buildOrnamentDom(true)}
                </If>
                <span className={classNames(`${clazzPrefix}-header-content`, props?.headerContentClazz)} style={props?.headerContentStyle}>
                    {props?.headerContent}
                </span>
                <If condition={props?.headerOrnamentPos === 'after'} validation={false}>
                    {buildOrnamentDom(false)}
                </If>
                <If condition={props?.headerCollapsePos === 'after'} validation={false}>
                    {buildCollapseDom(false)}
                </If>
            </div>
            <If condition={(panelRendered || props?.panelContent || props?.panelPlaceholder) && (panelOpen || (!panelOpen && !props?.panelDestroyOnClose))} validation={false}>
                <div className={classNames(`${clazzPrefix}-panel`, props?.panelClazz)} style={props?.panelStyle}>
                    {props?.panelContent || props?.panelPlaceholder}
                </div>
            </If>
        </section>
    );
};


FoldSection.defaultProps = {
    headerOrnamentPos: 'before',
    headerCollapsePos: 'after',
    headerClosedDom: <UpSquareOutlined/>,
    headerOpenedDom: <DownSquareOutlined/>,
    useTooltip: false,
    panelInitialOpen: true,
    panelForceRender: false,
    panelDestroyOnClose: false,
    usePresetStyle: 'default',
};
