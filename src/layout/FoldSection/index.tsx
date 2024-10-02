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
import {ConfigProvider, Empty, Tooltip, type TooltipProps} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import {If} from '@yookue/react-condition';
import classNames from 'classnames';
import CssMotion from 'rc-motion';
import {type WithFalse, type BeforeAfterType} from '@/type/declaration';
import {NodeUtils} from '@/util/NodeUtils';
import './index.less';


export type SectionPresetStyle = WithFalse<'default' | 'classic'>;


export type FoldSectionProps = React.PropsWithChildren<{
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
    headerOrnamentPos?: WithFalse<BeforeAfterType>;

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
    headerCollapsePos?: WithFalse<BeforeAfterType>;

    /**
     * @description The DOM of collapse span that under the header div when expanded
     * @description.zh-CN 头部折叠 span 的节点内容(面板展开时)
     * @description.zh-TW 頭部折叠 span 的節點內容(面板展開時)
     * @default <DownOutlined/>
     */
    headerOpenedDom?: React.ReactNode;

    /**
     * @description The hint of collapse span that under the header div when expanded
     * @description.zh-CN 头部折叠 span 的提示(面板展开时)
     * @description.zh-TW 頭部折叠 span 的提示(面板展開時)
     */
    headerOpenedHint?: React.ReactNode;

    /**
     * @description The DOM of collapse that under the header div when collapsed
     * @description.zh-CN 头部折叠 span 的节点内容(面板折叠时)
     * @description.zh-TW 頭部折叠 span 的節點內容(面板摺叠時)
     * @default <UpOutlined/>
     */
    headerClosedDom?: React.ReactNode;

    /**
     * @description The hint of collapse span that under the header div when collapsed
     * @description.zh-CN 头部折叠 span 的提示(面板折叠时)
     * @description.zh-TW 頭部折叠 span 的提示(面板摺叠時)
     */
    headerClosedHint?: React.ReactNode;

    /**
     * @description Whether to use tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     * @default false
     */
    tooltipCtrl?: boolean;

    /**
     * @description The prop for tooltip
     * @description.zh-CN Tooltip 属性
     * @description.zh-TW Tooltip 屬性
     */
    tooltipProps?: Omit<TooltipProps, 'title'>;

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
     * @description The DOM of placeholder for the panel div
     * @description.zh-CN 面板 div 的占位符
     * @description.zh-TW 面板 div 的佔位符
     * @default <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
     */
    panelPlaceholder?: React.ReactNode;

    /**
     * @description The callback function when the panel div changed
     * @description.zh-CN 面板 div 折叠展开状态变化时的回调函数
     * @description.zh-TW 面板 div 折疊展開狀態變化時的回調函數
     */
    onOpenChange?: (open: boolean) => void;

    /**
     * @description The preset style of the component
     * @description.zh-CN 预设样式
     * @description.zh-TW 預設樣式
     * @default 'default'
     */
    presetStyle?: SectionPresetStyle;
}>;


/**
 * Component for displaying a header and a panel which can be collapsed
 *
 * @author David Hsing
 */
export const FoldSection: React.FC<FoldSectionProps> = (props?: FoldSectionProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-fold-section');

    // Initialize the default props
    const {
        headerOrnamentPos = 'before',
        headerCollapsePos = 'after',
        headerClosedDom = <UpOutlined/>,
        headerOpenedDom = <DownOutlined/>,
        tooltipCtrl = false,
        panelInitialOpen = true,
        panelForceRender = false,
        panelDestroyOnClose = false,
        panelPlaceholder = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>,
        presetStyle = 'default',
    } = props ?? {};

    const [panelOpen, setPanelOpen] = React.useState<boolean>(panelInitialOpen);

    const buildOrnamentDom = (before: boolean) => {
        if (!props?.headerOrnament || !headerOrnamentPos) {
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
        if ((!headerOpenedDom && !headerClosedDom) || !headerCollapsePos) {
            return undefined;
        }
        const content = (
            <span
                className={classNames(`${clazzPrefix}-header-collapse-${before ? 'before' : 'after'}`, props?.headerCollapseClazz)}
                style={props?.headerCollapseStyle}
                title={tooltipCtrl ? undefined : NodeUtils.toString(panelOpen ? props?.headerOpenedHint : props?.headerClosedHint)}
                onClick={handleCollapse}
            >
                {panelOpen ? headerOpenedDom : headerClosedDom}
            </span>
        );
        if (!tooltipCtrl) {
            return content;
        }
        return (
            <Tooltip
                title={NodeUtils.toString(panelOpen ? props?.headerOpenedHint : props?.headerClosedHint)}
                {...props?.tooltipProps}
            >
                {content}
            </Tooltip>
        );
    }

    const handleCollapse = () => {
        const openState = !panelOpen;
        setPanelOpen(openState);
        props?.onOpenChange?.(openState);
    };

    const [panelRendered, setPanelRendered] = React.useState<boolean>(panelForceRender ?? panelOpen);
    React.useEffect(() => {
        if (panelForceRender) {
            setPanelRendered(true);
        }
    }, [panelForceRender]);
    const panelVisible = (panelRendered || !!props?.panelContent || !!panelPlaceholder) && (panelOpen || (!panelOpen && !panelDestroyOnClose));

    return (
        <section
            className={classNames(clazzPrefix, props?.containerClazz, (presetStyle ? `${clazzPrefix}-${presetStyle}` : undefined), `${clazzPrefix}-${panelOpen ? 'open' : 'close'}`)}
            style={props?.containerStyle}
        >
            <div className={classNames(`${clazzPrefix}-header`, props?.headerClazz)} style={props?.headerStyle}>
                <If condition={headerCollapsePos === 'before'} validation={false}>
                    {buildCollapseDom(true)}
                </If>
                <If condition={headerOrnamentPos === 'before'} validation={false}>
                    {buildOrnamentDom(true)}
                </If>
                <span className={classNames(`${clazzPrefix}-header-content`, props?.headerContentClazz)} style={props?.headerContentStyle}>
                    {props?.headerContent}
                </span>
                <If condition={headerOrnamentPos === 'after'} validation={false}>
                    {buildOrnamentDom(false)}
                </If>
                <If condition={headerCollapsePos === 'after'} validation={false}>
                    {buildCollapseDom(false)}
                </If>
            </div>
            <CssMotion visible={panelVisible}>
                {() => (
                    <div className={classNames(`${clazzPrefix}-panel`, props?.panelClazz)} style={props?.panelStyle}>
                        {props?.panelContent || props?.children || panelPlaceholder}
                    </div>
                )}
            </CssMotion>
        </section>
    );
};
