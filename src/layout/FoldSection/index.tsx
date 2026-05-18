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
import { Empty, type TooltipProps } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-components';
import CssMotion from '@rc-component/motion';
import { ObjectUtils } from '@unikue/ts-lang-utils';
import classnames from 'classnames';
import { type WithFalse, type BeforeAfterType } from '@/type/declaration';
import { TooltipRender } from '@/render/TooltipRender';
import { intlLocales } from './locales';
import { useFieldStyle } from './styles';


export type SectionPresetStyle = WithFalse<'default' | 'success' | 'info' | 'warn' | 'error' | 'classic'>;


export type IntlLocaleProps = {
    /**
     * @description Collapse
     * @description.zh-CN 折叠
     * @description.zh-TW 摺叠
     */
    collapse?: React.ReactNode;

    /**
     * @description Expend
     * @description.zh-CN 展开
     * @description.zh-TW 展開
     */
    expend?: React.ReactNode;
};


export type FoldSectionProps = React.PropsWithChildren<{
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-fold-section'
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
     * @description Whether to border the bound or not
     * @description.zh-CN 外边界是否有边框
     * @description.zh-TW 外邊界是否有邊框
     * @default true
     */
    boundBorder?: boolean;

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
     * @description The DOM of collapse span that under the header div when expanded
     * @description.zh-CN 头部折叠 span 的节点内容(面板展开时)
     * @description.zh-TW 頭部折叠 span 的節點內容(面板展開時)
     * @default <DownOutlined />
     */
    headerCollapse?: React.ReactNode;

    /**
     * @description The position of collapse span that under the header div
     * @description.zh-CN 头部折叠 span 的位置
     * @description.zh-TW 頭部折叠 span 的位置
     * @default 'after'
     */
    headerCollapsePos?: WithFalse<BeforeAfterType>;

    /**
     * @description The DOM of collapse that under the header div when collapsed
     * @description.zh-CN 头部折叠 span 的节点内容(面板折叠时)
     * @description.zh-TW 頭部折叠 span 的節點內容(面板摺叠時)
     * @default <UpOutlined />
     */
    headerExpand?: React.ReactNode;

    /**
     * @description Whether to use Tooltip
     * @description.zh-CN 是否使用 Tooltip
     * @description.zh-TW 是否使用 Tooltip
     */
    tooltipCtrl?: boolean;

    /**
     * @description The props of Antd Tooltip
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
     * @default <Empty />
     */
    panelPlaceholder?: React.ReactNode;

    /**
     * @description Whether the panel div is opened when initializing
     * @description.zh-CN 是否默认展开面板 div
     * @description.zh-TW 是否默認展開面板 div
     * @default true
     */
    defaultOpen?: boolean;

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

    /**
     * @description The locale of the component, e.g. 'en_US'
     * @description.zh-CN 组件的语言, e.g. 'zh_CN'
     * @description.zh-TW 組件的語言, e.g. 'zh_TW'
     */
    locale?: string;

    /**
     * @description The props of locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;
}>;


/**
 * Component for displaying a header and a panel which can be collapsed
 *
 * @author David Hsing
 */
export const FoldSection: React.FC<FoldSectionProps> = (props?: FoldSectionProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-fold-section';
    const intlType = useIntl();

    // Initialize the default props
    const {
        boundBorder = true,
        headerOrnamentPos = 'before',
        headerCollapse = <DownOutlined />,
        headerCollapsePos = 'after',
        headerExpand = <UpOutlined />,
        defaultOpen = true,
        panelForceRender = false,
        panelDestroyOnClose = false,
        panelPlaceholder = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />,
        presetStyle = 'default',
        locale = intlType.locale,
    } = props ?? {};

    const [panelOpen, setPanelOpen] = React.useState<boolean>(defaultOpen);
    const fieldStyle = useFieldStyle(clazzPrefix);

    const buildOrnamentDom = () => {
        if (!props?.headerOrnament || !headerOrnamentPos) {
            return undefined;
        }
        return (
            <span className={classnames(`${clazzPrefix}-header-ornament`, `${clazzPrefix}-header-ornament-${headerOrnamentPos}`)}>
                {props?.headerOrnament}
            </span>
        );
    }

    const buildCollapseDom = () => {
        if ((!headerCollapse && !headerExpand) || !headerCollapsePos) {
            return undefined;
        }
        const collapse = ObjectUtils.firstNotNil(props?.localeProps?.collapse, intlLocales.get([locale, 'collapse']), intlLocales.get(['en_US', 'collapse']));
        const expend = ObjectUtils.firstNotNil(props?.localeProps?.expend, intlLocales.get([locale, 'expend']), intlLocales.get(['en_US', 'expend']));
        const innerDom = (
            <span
                className={classnames(`${clazzPrefix}-header-collapse`, `${clazzPrefix}-header-collapse-${headerCollapsePos}`)}
                onClick={handleCollapse}
            >
                {panelOpen ? headerCollapse : headerExpand}
            </span>
        );
        return TooltipRender.renderTooltip(props?.tooltipCtrl, {
            title: panelOpen ? collapse : expend,
            ...props?.tooltipProps,
        }, innerDom);
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
            className={classnames(clazzPrefix, fieldStyle.hashId, (!boundBorder ? undefined : `${clazzPrefix}-bound-border`), (!presetStyle ? undefined : `${clazzPrefix}-${presetStyle}`), `${clazzPrefix}-${panelOpen ? 'open' : 'close'}`, props?.containerClazz)}
            style={props?.containerStyle}
        >
            <div className={classnames(`${clazzPrefix}-header`, props?.headerClazz)} style={props?.headerStyle}>
                {headerCollapsePos === 'before' && buildCollapseDom()}
                {headerOrnamentPos === 'before' && buildOrnamentDom()}
                <span className={`${clazzPrefix}-header-content`}>
                    {props?.headerContent}
                </span>
                {headerOrnamentPos === 'after' && buildOrnamentDom()}
                {headerCollapsePos === 'after' && buildCollapseDom()}
            </div>
            <CssMotion visible={panelVisible}>
                {() => (
                    <div className={classnames(`${clazzPrefix}-panel`, props?.panelClazz)} style={props?.panelStyle}>
                        {props?.panelContent || props?.children || panelPlaceholder}
                    </div>
                )}
            </CssMotion>
        </section>
    );
};
