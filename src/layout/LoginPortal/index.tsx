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
import {ConfigProvider} from 'antd';
import classNames from 'classnames';
import './index.less';


export type LoginPortalProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'buddy-login-portal'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the container div
     * @description.zh-CN 容器 div 的 CSS 类名
     * @description.zh-TW 容器 div 的 CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style for the container div
     * @description.zh-CN 容器 div 的 CSS 样式
     * @description.zh-TW 容器 div 的 CSS 樣式
     */
    containerStyle?: React.CSSProperties,

    /**
     * @description The top element of the container div
     * @description.zh-CN 容器 div 的顶部内容
     * @description.zh-TW 容器 div 的頂部内容
     */
    containerHeader?: React.ReactNode,

    /**
     * @description The bottom element of the container div
     * @description.zh-CN 容器 div 的底部内容
     * @description.zh-TW 容器 div 的底部内容
     */
    containerFooter?: React.ReactNode,

    /**
     * @description The CSS class name of the vessel div (container excludes containerHeader and containerFooter)
     * @description.zh-CN 二级容器 div 的 CSS 类名(容器 div 除去顶部节点和底部节点)
     * @description.zh-TW 二級容器 div 的 CSS 類名(容器 div 除去頂部節點和底部節點)
     */
    vesselClazz?: string,

    /**
     * @description The CSS style of the vessel div (container excludes containerHeader and containerFooter)
     * @description.zh-CN 二级容器 div 的 CSS 样式(容器 div 除去顶部节点和底部节点)
     * @description.zh-TW 二級容器 div 的 CSS 樣式(容器 div 除去頂部節點和底部節點)
     */
    vesselStyle?: React.CSSProperties,

    /**
     * @description The CSS class name of the introduction div (left area)
     * @description.zh-CN 左侧宣传区的 CSS 类名
     * @description.zh-TW 左側宣傳區的 CSS 類名
     */
    introductionClazz?: string,

    /**
     * @description The CSS style of the introduction div (left area)
     * @description.zh-CN 左侧宣传区的 CSS 样式
     * @description.zh-TW 左側宣傳區的 CSS 樣式
     */
    introductionStyle?: React.CSSProperties,

    /**
     * @description The content of the introduction div (left area)
     * @description.zh-CN 左侧宣传区的内容
     * @description.zh-TW 左側宣傳區的内容
     */
    introductionContent?: React.ReactNode,

    /**
     * @description The CSS class name of the interaction div (right area)
     * @description.zh-CN 右侧交互区的 CSS 类名
     * @description.zh-TW 右側交互區的 CSS 類名
     */
    interactionClazz?: string,

    /**
     * @description The CSS style of the interaction div (right area)
     * @description.zh-CN 右侧交互区的 CSS 样式
     * @description.zh-TW 右側交互區的 CSS 樣式
     */
    interactionStyle?: React.CSSProperties,

    /**
     * @description The top element of the interaction div (right area), typically a language switch
     * @description.zh-CN 右侧交互区的顶部内容，通常是切换语言选项
     * @description.zh-TW 右側交互區的頂部内容，通常是切換語言選項
     */
    interactionHeader?: React.ReactNode,

    /**
     * @description The main element of the interaction div (right area), typically a login form
     * @description.zh-CN 右侧交互区的主要内容，通常是登录表单
     * @description.zh-TW 右側交互區的主要内容，通常是登錄表單
     */
    interactionContent?: React.ReactNode,

    /**
     * @description The bottom element of the interaction div (right area), typically a copyright declaration
     * @description.zh-CN 右侧交互区的底部内容，通常是版权声明
     * @description.zh-TW 右側交互區的底部内容，通常是版權聲明
     */
    interactionFooter?: React.ReactNode,

    /**
     * @description The CSS class name of the interchange div (right area main content)
     * @description.zh-CN 右侧交互区主要内容的 CSS 类名
     * @description.zh-TW 右側交互區主要内容的 CSS 類名
     */
    interchangeClazz?: string,

    /**
     * @description The CSS style of the interchange div (right area main content)
     * @description.zh-CN 右侧交互区主要内容的 CSS 样式
     * @description.zh-TW 右側交互區主要内容的 CSS 樣式
     */
    interchangeStyle?: React.CSSProperties,
};


export const LoginPortal: React.FC<LoginPortalProps> = (props?: LoginPortalProps) => {
    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const clazzPrefix = configContext.getPrefixCls(props?.clazzPrefix || 'buddy-login-portal');

    return (
        <div className={classNames(clazzPrefix, props?.containerClazz)} style={props?.containerStyle}>
            {props?.containerHeader}
            <div className={classNames(`${clazzPrefix}-vessel`, props?.vesselClazz)} style={props?.vesselStyle}>
                <div className={classNames(`${clazzPrefix}-introduction`, props?.introductionClazz)} style={props?.introductionStyle}>
                    {props?.introductionContent}
                </div>
                <div className={classNames(`${clazzPrefix}-interaction`, props?.interactionClazz)} style={props?.interactionStyle}>
                    {props?.interactionHeader}
                    <div className={classNames(`${clazzPrefix}-interchange`, props?.interchangeClazz)} style={props?.interchangeStyle}>
                        {props?.interactionContent}
                    </div>
                    {props?.interactionFooter}
                </div>
            </div>
            {props?.containerFooter}
        </div>
    );
};
