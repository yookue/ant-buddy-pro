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
import {ConfigProvider, Layout} from 'antd';
import {CopyrightOutlined} from '@ant-design/icons';
import {If, For} from '@yookue/react-condition';
import classNames from 'classnames';
import {type WithFalse} from '@/type/declaration';
import './index.less';


export type FooterPresetStyle = WithFalse<'default' | 'compact'>;


export type HyperlinkProps = {
    /**
     * @description The key of array for hyperlink
     * @description.zh-CN 超链接数组的 key
     * @description.zh-TW 超鏈接數組的 key
     */
    key: string;

    /**
     * @description The CSS class name of hyperlink
     * @description.zh-CN 超链接的 CSS 类名
     * @description.zh-TW 超鏈接的 CSS 類名
     */
    clazz?: string;

    /**
     * @description The CSS style of hyperlink
     * @description.zh-CN 超链接的 CSS 样式
     * @description.zh-TW 超鏈接的 CSS 樣式
     */
    style?: React.CSSProperties;

    /**
     * @description The children content of hyperlink
     * @description.zh-CN 超链接的子节点内容
     * @description.zh-TW 超鏈接的子節點内容
     */
    content?: React.ReactNode;

    /**
     * @description The title of hyperlink
     * @description.zh-CN 超链接的正文
     * @description.zh-TW 超鏈接的正文
     */
    title?: string;

    /**
     * @description The href of hyperlink
     * @description.zh-CN 超链接的地址
     * @description.zh-TW 超鏈接的地址
     */
    href?: string;

    /**
     * @description The target of hyperlink
     * @description.zh-CN 超链接的目标窗口
     * @description.zh-TW 超鏈接的目標窗口
     * @default '_blank'
     */
    target?: string;

    /**
     * @description The relation of target to current page
     * @description.zh-CN 超链接地址与当前页面的关系
     * @description.zh-TW 超鏈接地址與當前頁面的關系
     * @default 'noopener noreferrer'
     */
    rel?: string;
};


export type PageFooterProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-page-footer'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the footer div
     * @description.zh-CN 页脚 div 的 CSS 类名
     * @description.zh-TW 頁腳 div 的 CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style of the footer div
     * @description.zh-CN 页脚 div 的 CSS 样式
     * @description.zh-TW 頁腳 div 的 CSS 樣式
     */
    containerStyle?: React.CSSProperties;

    /**
     * @description The CSS class names of the vessel div that under the footer div
     * @description.zh-CN 子容器 div 的 CSS 类名
     * @description.zh-TW 子容器 div 的 CSS 類名
     */
    vesselClazz?: string;

    /**
     * @description The CSS style of the vessel div that under the footer div
     * @description.zh-CN 子容器 div 的 CSS 样式
     * @description.zh-TW 子容器 div 的 CSS 樣式
     */
    vesselStyle?: React.CSSProperties;

    /**
     * @description The hyperlinks array
     * @description.zh-CN 超链接数组
     * @description.zh-TW 超鏈接數組
     */
    links?: HyperlinkProps[];

    /**
     * @description The CSS class name of the hyperlinks div
     * @description.zh-CN 超链接 div 的 CSS 类名
     * @description.zh-TW 超鏈接 div 的 CSS 類名
     */
    linksClazz?: string;

    /**
     * @description The CSS style of the hyperlinks div
     * @description.zh-CN 超链接 div 的 CSS 样式
     * @description.zh-TW 超鏈接 div 的 CSS 樣式
     */
    linksStyle?: React.CSSProperties;

    /**
     * @description The sharing CSS class name of the hyperlinks
     * @description.zh-CN 超链接的通用 CSS 类名
     * @description.zh-TW 超鏈接的通用 CSS 類名
     */
    linkShareClazz?: string;

    /**
     * @description The sharing CSS style of the hyperlinks
     * @description.zh-CN 超链接的通用 CSS 样式
     * @description.zh-TW 超鏈接的通用 CSS 樣式
     */
    linkShareStyle?: React.CSSProperties;

    /**
     * @description The copyright content
     * @description.zh-CN 版权 div 的内容
     * @description.zh-TW 版權 div 的内容
     */
    copyright?: React.ReactNode;

    /**
     * @description Whether to display the copyright icon
     * @description.zh-CN 是否显示版权图标
     * @description.zh-TW 是否顯示版權圖標
     * @default true
     */
    copyrightIcon?: boolean;

    /**
     * @description The CSS class name of the copyright div
     * @description.zh-CN 版权 div 的 CSS 类名
     * @description.zh-TW 版權 div 的 CSS 類名
     */
    copyrightClazz?: string;

    /**
     * @description The CSS style of the copyright div
     * @description.zh-CN 版权 div 的 CSS 样式
     * @description.zh-TW 版權 div 的 CSS 樣式
     */
    copyrightStyle?: React.CSSProperties;

    /**
     * @description Whether to use the preset style for the component
     * @description.zh-CN 组件是否使用预设样式
     * @description.zh-TW 組件是否使用預設樣式
     * @default 'default'
     */
    presetStyle?: FooterPresetStyle;
};


/**
 * Component for displaying a footer
 *
 * @author David Hsing
 */
export const PageFooter: React.FC<PageFooterProps> = (props?: PageFooterProps) => {
    // noinspection JSUnresolvedReference
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    // noinspection JSUnresolvedReference
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix ?? 'buddy-page-footer');

    // Initialize the default props
    const {
        copyrightIcon = true,
        presetStyle = 'default',
    } = props ?? {};

    if ((!props?.links || props?.links?.length === 0) && !props?.copyright) {
        return null;
    }

    return (
        <Layout.Footer
            className={classNames(clazzPrefix, props?.containerClazz, (presetStyle ? `${clazzPrefix}-${presetStyle}` : undefined))}
            style={props?.containerStyle}
        >
            <div className={classNames(`${clazzPrefix}-vessel`, props?.vesselClazz)} style={props?.vesselStyle}>
                <If condition={props?.links} validation={false}>
                    <div className={classNames(`${clazzPrefix}-links`, props?.linksClazz)} style={props?.linksStyle}>
                        <For
                            of={props?.links}
                            render={(item: HyperlinkProps) => {
                                return (
                                    <a
                                        key={item.key}
                                        className={classNames(item.clazz, props?.linkShareClazz)}
                                        href={item.href}
                                        title={item.title}
                                        target={item.target ?? '_blank'}
                                        rel={item.rel ?? 'noopener noreferrer'}
                                        style={{
                                            ...item.style,
                                            ...props?.linkShareStyle,
                                        }}
                                    >
                                        {item.content}
                                    </a>
                                );
                            }}
                        />
                    </div>
                </If>
                <If condition={props?.copyright} validation={false}>
                    <div className={classNames(`${clazzPrefix}-copyright`, props?.copyrightClazz)} style={props?.copyrightStyle}>
                        <If condition={copyrightIcon} validation={false}>
                            <If.Then>
                                <>
                                    <CopyrightOutlined/> {props?.copyright}
                                </>
                            </If.Then>
                            <If.Else>
                                {props?.copyright}
                            </If.Else>
                        </If>
                    </div>
                </If>
            </div>
        </Layout.Footer>
    );
};
