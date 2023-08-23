/*!
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
import './index.less';


export type LoginPortalProps = {
    /**
     * @description The CSS style for container div
     * @description.zh-CN 容器 div 的样式
     * @description.zh-TW 容器 div 的樣式
     */
    containerStyle?: React.CSSProperties,

    /**
     * @description The top element of container div
     * @description.zh-CN 容器 div 的顶部节点
     * @description.zh-TW 容器 div 的頂部節點
     */
    containerHeader?: React.ReactNode,

    /**
     * @description The bottom element of container div
     * @description.zh-CN 容器 div 的底部节点
     * @description.zh-TW 容器 div 的底部節點
     */
    containerFooter?: React.ReactNode,

    /**
     * @description The CSS style for vessel div (container excludes containerHeader and containerFooter)
     * @description.zh-CN 容器 div 的样式(容器 div 除去顶部节点和底部节点)
     * @description.zh-TW 容器 div 的樣式(容器 div 除去頂部節點和底部節點)
     */
    vesselStyle?: React.CSSProperties,

    /**
     * @description The CSS style for introduction (left area) div
     * @description.zh-CN 左侧宣传区的样式
     * @description.zh-TW 左側宣傳區的樣式
     */
    introductionStyle?: React.CSSProperties,

    /**
     * @description The content of introduction (left area) div
     * @description.zh-CN 左侧宣传区的内容
     * @description.zh-TW 左側宣傳區的内容
     */
    introductionContent?: React.ReactNode,

    /**
     * @description The CSS style for interaction (right area) div
     * @description.zh-CN 右侧交互区的样式
     * @description.zh-TW 右側交互區的樣式
     */
    interactionStyle?: React.CSSProperties,

    /**
     * @description The top element of interaction (right area) div, typically a language switch
     * @description.zh-CN 右侧交互区的顶部节点，通常是切换语言选项
     * @description.zh-TW 右側交互區的頂部節點，通常是切換語言選項
     */
    interactionHeader?: React.ReactNode,

    /**
     * @description The main element of interaction (right area) div, typically a login form
     * @description.zh-CN 右侧交互区的主要内容，通常是登录表单
     * @description.zh-TW 右側交互區的主要内容，通常是登錄表單
     */
    interactionContent?: React.ReactNode,

    /**
     * @description The bottom element of interaction (right area) div, typically a copyright declaration
     * @description.zh-CN 右侧交互区的底部节点，通常是版权声明
     * @description.zh-TW 右側交互區的底部節點，通常是版權聲明
     */
    interactionFooter?: React.ReactNode,

    /**
     * @description The CSS style for interchange (right area main content) div
     * @description.zh-CN 右侧交互区主要内容的样式
     * @description.zh-TW 右側交互區主要内容的樣式
     */
    interchangeStyle?: React.CSSProperties,
};

const LoginPortal: React.FC<LoginPortalProps> = (props?: LoginPortalProps) => {
    const context = React.useContext(ConfigProvider.ConfigContext);
    const prefix = context.getPrefixCls('buddy-login-portal');

    return (
        <div className={prefix} style={props?.containerStyle}>
            {props?.containerHeader}
            <div className={`${prefix}-vessel`} style={props?.vesselStyle}>
                <div className={`${prefix}-introduction`} style={props?.introductionStyle}>
                    {props?.introductionContent}
                </div>
                <div className={`${prefix}-interaction`} style={props?.interactionStyle}>
                    {props?.interactionHeader}
                    <div className={`${prefix}-interchange`} style={props?.interchangeStyle}>
                        {props?.interactionContent}
                    </div>
                    {props?.interactionFooter}
                </div>
            </div>
            {props?.containerFooter}
        </div>
    );
};

export default LoginPortal;
