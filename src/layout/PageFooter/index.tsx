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
import './index.less';


export type HyperlinkProps = {
    /**
     * @description The key of array for hyperlink
     * @description.zh-CN 超链接数组的 key
     * @description.zh-TW 超鏈接數組的 key
     */
    key: string;

    /**
     * @description The children of hyperlink
     * @description.zh-CN 超链接的子节点
     * @description.zh-TW 超鏈接的子節點
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
     * @description The hyperlinks array
     * @description.zh-CN 超链接数组
     * @description.zh-TW 超鏈接數組
     */
    linkItems?: HyperlinkProps[];

    /**
     * @description The copyright content
     * @description.zh-CN 版权内容
     * @description.zh-TW 版權内容
     */
    copyright?: React.ReactNode;

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
     * @description The CSS class names for the child of the footer div
     * @description.zh-CN 子容器 div 的 CSS 类名
     * @description.zh-TW 子容器 div 的 CSS 類名
     */
    vesselClazz?: string;

    /**
     * @description The CSS style for the child of the footer div
     * @description.zh-CN 子容器 div 的 CSS 样式
     * @description.zh-TW 子容器 div 的 CSS 樣式
     */
    vesselStyle?: React.CSSProperties;

    /**
     * @description The CSS class name of the hyperlinks div
     * @description.zh-CN 超链接 div 的 CSS 类名
     * @description.zh-TW 超鏈接 div 的 CSS 類名
     */
    linksClazz?: string;

    /**
     * @description The CSS style of the the hyperlinks div
     * @description.zh-CN 超链接 div 的 CSS 样式
     * @description.zh-TW 超鏈接 div 的 CSS 樣式
     */
    linksStyle?: React.CSSProperties;

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
};

const {Footer} = Layout;


export const PageFooter: React.FC<PageFooterProps> = (props?: PageFooterProps) => {
    const context = React.useContext(ConfigProvider.ConfigContext);
    if ((!props?.linkItems || props?.linkItems?.length === 0) && !props?.copyright) {
        return null;
    }
    const clazzPrefix = context.getPrefixCls(props?.clazzPrefix || 'buddy-page-footer');

    return (
        <Footer className={props?.containerClazz} style={props?.containerStyle}>
            <div className={classNames(clazzPrefix, props?.vesselClazz)} style={props?.vesselStyle}>
                <If condition={props?.linkItems}>
                    <div className={classNames(`${clazzPrefix}-links`, props?.linksClazz)} style={props?.linksStyle}>
                        <For
                            of={props?.linkItems}
                            render={(item: HyperlinkProps) => {
                                return (
                                    <a
                                        key={item.key}
                                        className={item?.clazz}
                                        href={item?.href}
                                        title={item?.title}
                                        target={item?.target || '_blank'}
                                        rel={item?.rel || 'noopener noreferrer'}
                                        style={item?.style}
                                    >
                                        {item?.content}
                                    </a>
                                );
                            }}
                        />
                    </div>
                </If>
                <If condition={props?.copyright}>
                    <div className={`${clazzPrefix}-copyright`} style={props?.copyrightStyle}>
                        <React.Fragment>
                            <CopyrightOutlined/> {props?.copyright}
                        </React.Fragment>
                    </div>
                </If>
            </div>
        </Footer>
    );
};
